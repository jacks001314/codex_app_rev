export const __rspack_esm_ids = [216721]
export const __webpack_modules__ = {
  ycGw(e, t, n) {
    n.d(t, { B: () => nJ, TextEditingGallerySurface: () => nQ, E: () => n1 })
    var i = n("ABep"),
      r = n("QosV"),
      l = n("ESTr")
    let a = (0, l.a)({
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
    var o = n("on57"),
      s = n("qmMi"),
      d = n("DBCl"),
      u = n("zd8w"),
      c = n("oyxz"),
      g = n("Ywss"),
      m = n("Sm6l"),
      h = n("FkTw"),
      f = n("HOLv"),
      x = n("bVeK"),
      p = n("urzV"),
      y = n("jqMG"),
      v = n("jDEJ"),
      b = n("OWtl"),
      w = n("tSEg"),
      j = n("XXJV"),
      M = n("kpIY"),
      C = n("bIvi"),
      E = n("Vc4w"),
      T = n("ghCJ"),
      S = n("SZCv"),
      k = n.n(S),
      _ = n("ePe7")
    function I(e) {
      if (null == e || e.items === e.snapshot.content.items) return []
      let t = new Map(e.snapshot.content.items.filter(_.gW).map((e) => [e.id, e])),
        n = [],
        i = e.items.filter(_.gW)
      for (let e of i) {
        let i = t.get(e.id)
        ;(k()(i, e) || n.push({ kind: "text", id: e.id, before: i ?? null, after: e }), t.delete(e.id))
      }
      for (let e of t.values()) n.push({ kind: "text", id: e.id, before: e, after: null })
      let r = z(e),
        l = i.find((e, t) => e !== r[t])
      if (null != l) {
        let e = new Map(r.map((e, t) => [e.id, t + 1]))
        n.push({
          kind: "order",
          id: l.id,
          positions: i.flatMap((t, n) => {
            let i = e.get(t.id)
            return null == i || i === n + 1 ? [] : [{ id: t.id, name: t.text, from: i, to: n + 1 }]
          }),
        })
      }
      return n
    }
    function A(e) {
      let t = e.before ?? (e.after && (0, _.yV)(e.after))
      return null != t && (0, _.gW)(t) ? t : null
    }
    function P(e, t) {
      let n = e.items.filter(_.gW),
        i = n.findIndex((e) => e.id === t),
        r = z(e).findIndex((e) => e.id === t)
      return i < 0 || i === r ? e.items : (0, _.sh)(e.items, n.toSpliced(i, 1).toSpliced(r, 0, n[i]))
    }
    function R(e, t) {
      if (null == t) return (0, _.sh)(e.items, z(e))
      let n = e.snapshot.content.items,
        i = n.findIndex((e) => e.id === t),
        r = n[i]
      if (null == r) return e.items.filter((e) => e.id !== t)
      if (e.items.some((e) => e.id === t)) return e.items.map((e) => (e.id === t ? r : e))
      let l = new Map(e.items.map((e, t) => [e.id, t])),
        a = n.map((e) => l.get(e.id)),
        o = a.slice(i + 1).find((e) => null != e),
        s = a.slice(0, i).findLast((e) => null != e)
      return e.items.toSpliced(o ?? (s ?? -1) + 1, 0, r)
    }
    function z(e) {
      let t = new Map(e.items.filter(_.gW).map((e) => [e.id, e])),
        n = []
      for (let { id: i } of e.snapshot.content.items) {
        let e = t.get(i)
        null != e && (n.push(e), t.delete(i))
      }
      return [...n, ...t.values()]
    }
    var N = n("q1q2"),
      D = n("tILS"),
      $ = n("pMOC"),
      L = n("oR1P"),
      B = n("K4Cx"),
      K = n("suct"),
      H = n("v7qY"),
      F = n("Wf1j"),
      U = n("Qgfj"),
      O = n("wD9O"),
      Y = n("vGEi"),
      W = n("jqmc"),
      q = n("T1PX"),
      Z = n("GQB6"),
      X = n("tO3J"),
      G = n("nsuH"),
      V = n("V8uZ"),
      Q = n("I0AH"),
      J = n("bJkS")
    let ee = "application/x-codex-image-layer"
    function et(e, t) {
      let { selectionStart: n, selectionEnd: i, value: r, maxLength: l } = e,
        a = l - (r.length - (i - n)),
        o = l < 0 ? t : t.slice(0, Math.max(0, a))
      ;(e.setRangeText(o, n, i, "end"),
        e.dispatchEvent(
          new InputEvent("input", { bubbles: !0, inputType: "" === t ? "deleteByCut" : "insertFromPaste", data: o }),
        ))
    }
    var en = n("MMsV"),
      ei = n("BgSw")
    function er(e, t, n) {
      return {
        ...e,
        baseline: t.baseline,
        upper_contour: t.upper_contour,
        line_layout:
          null == t.line_layout
            ? t.line_layout
            : n.split("\n").map((n, i) => {
                let r = t.line_layout?.[i]
                return null == r
                  ? null
                  : { ...r, ...e.line_layout?.[i], baseline: r.baseline, upper_contour: r.upper_contour }
              }),
      }
    }
    var el = n("AnE5"),
      ea = n("gKeM"),
      eo = n("mtkZ"),
      es = n("k5JT"),
      ed = n("LMaG"),
      eu = n("I1iB"),
      ec = n("WIy3"),
      eg = n("bqtn"),
      em = n("EGCJ"),
      eh = n("nzx4")
    function ef(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g = (0, r.c)(34),
        { label: m, value: h, onChange: f, step: x, min: p, max: y, suffix: v } = e,
        b = void 0 === x ? 1 : x,
        w = void 0 === p ? 0 : p,
        j = String(Math.round(100 * h) / 100),
        [M, C] = (0, u.useState)(null)
      null != M && M.base !== h && C(null)
      let E = M?.text ?? j
      g[0] !== j || g[1] !== y || g[2] !== w || g[3] !== f || g[4] !== h
        ? ((t = (e) => {
            let t = e.valueAsNumber
            ;(C(null), e.value !== j && Number.isFinite(t) && t >= w && (null == y || t <= y) && t !== h && f(t))
          }),
          (g[0] = j),
          (g[1] = y),
          (g[2] = w),
          (g[3] = f),
          (g[4] = h),
          (g[5] = t))
        : (t = g[5])
      let T = t
      return (
        g[6] !== h ? ((n = (e) => C({ base: h, text: e.currentTarget.value })), (g[6] = h), (g[7] = n)) : (n = g[7]),
        g[8] !== T ? ((l = (e) => T(e.currentTarget)), (g[8] = T), (g[9] = l)) : (l = g[9]),
        g[10] !== T || g[11] !== j || g[12] !== f || g[13] !== b || g[14] !== E || g[15] !== h
          ? ((a = (e) => {
              e.nativeEvent.isComposing ||
                ("ArrowUp" === e.key || "ArrowDown" === e.key
                  ? (ep(e, h, b, f), C(null))
                  : ("Enter" === e.key || ("Escape" === e.key && E !== j)) &&
                    (e.preventDefault(), e.stopPropagation(), "Enter" === e.key ? T(e.currentTarget) : C(null)))
            }),
            (g[10] = T),
            (g[11] = j),
            (g[12] = f),
            (g[13] = b),
            (g[14] = E),
            (g[15] = h),
            (g[16] = a))
          : (a = g[16]),
        g[17] !== m || g[18] !== y || g[19] !== w || g[20] !== n || g[21] !== l || g[22] !== a || g[23] !== E
          ? ((o = (0, i.jsx)("input", {
              type: "number",
              "aria-label": m,
              className:
                "h-full min-w-0 flex-1 appearance-none bg-transparent text-end outline-none disabled:cursor-not-allowed disabled:text-secondary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              min: w,
              max: y,
              step: "any",
              value: E,
              onChange: n,
              onBlur: l,
              onKeyDown: a,
            })),
            (g[17] = m),
            (g[18] = y),
            (g[19] = w),
            (g[20] = n),
            (g[21] = l),
            (g[22] = a),
            (g[23] = E),
            (g[24] = o))
          : (o = g[24]),
        g[25] !== v || g[26] !== E
          ? ((s =
              "" !== E &&
              (0, i.jsx)("span", { "aria-hidden": !0, className: "shrink-0 text-secondary select-none", children: v })),
            (g[25] = v),
            (g[26] = E),
            (g[27] = s))
          : (s = g[27]),
        g[28] !== o || g[29] !== s
          ? ((d = (0, i.jsxs)("span", {
              className:
                "flex h-6.5 min-w-0 cursor-text items-center justify-end gap-0.5 rounded-md border border-transparent px-1.5 tabular-nums focus-within:border-ring focus-within:bg-secondary-ghost-hover hover:bg-secondary-ghost-hover forced-colors:focus-within:outline",
              children: [o, s],
            })),
            (g[28] = o),
            (g[29] = s),
            (g[30] = d))
          : (d = g[30]),
        g[31] !== m || g[32] !== d
          ? ((c = (0, i.jsxs)("label", {
              className: "grid min-w-0 grid-cols-[minmax(0,1fr)_6rem] items-center gap-2 text-xs text-default",
              children: [m, d],
            })),
            (g[31] = m),
            (g[32] = d),
            (g[33] = c))
          : (c = g[33]),
        c
      )
    }
    function ex(e) {
      let t,
        n,
        l = (0, r.c)(7),
        { children: a, value: o, step: s, onChange: d } = e,
        u = void 0 === s ? 1 : s
      return (
        l[0] !== d || l[1] !== u || l[2] !== o
          ? ((t = (e) => ep(e, o, u, d)), (l[0] = d), (l[1] = u), (l[2] = o), (l[3] = t))
          : (t = l[3]),
        l[4] !== a || l[5] !== t
          ? ((n = (0, i.jsx)("div", { className: "contents", onKeyDownCapture: t, children: a })),
            (l[4] = a),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    function ep(e, t, n, i) {
      let r = e.target
      if (
        !(r instanceof HTMLInputElement) ||
        e.nativeEvent.isComposing ||
        ("ArrowUp" !== e.key && "ArrowDown" !== e.key)
      )
        return
      ;(e.preventDefault(), e.stopPropagation())
      let l = r.valueAsNumber,
        a = Number.isFinite(l) && (null == t || l !== Math.round(100 * t) / 100) ? l : (t ?? 0),
        o = "ArrowUp" === e.key ? n : -n,
        s = Math.min(r.max ? Number(r.max) : 1 / 0, Math.max(r.min ? Number(r.min) : -1 / 0, a + o))
      ;((r.value = String(s)), s !== t && i(s))
    }
    var ey = n("Lhpx")
    function ev(e) {
      let t,
        n,
        l,
        a = (0, r.c)(4),
        { children: o } = e,
        s = (0, u.useRef)(void 0)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (e) => {
              e.target instanceof Element &&
                e.currentTarget.contains(e.target) &&
                e.target.closest('[aria-haspopup]:not([aria-expanded="true"])') &&
                (s.current = e.currentTarget.ownerDocument.activeElement)
            }),
            (n = (e) => {
              e.target instanceof Node && e.currentTarget.contains(e.target) && (s.current = void 0)
            }),
            (a[0] = t),
            (a[1] = n))
          : ((t = a[0]), (n = a[1])),
        a[2] !== o
          ? ((l = (0, i.jsx)("div", {
              className: "relative",
              "data-menu-overlay-surface": !0,
              onPointerDownCapture: t,
              onKeyDownCapture: n,
              children: (0, i.jsx)(em.a, { value: s, children: o }),
            })),
            (a[2] = o),
            (a[3] = l))
          : (l = a[3]),
        l
      )
    }
    function eb(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        c,
        g,
        m,
        h = (0, r.c)(33),
        x = (0, F.A)(),
        { selected: p, menuPlacement: y, disabled: v } = e
      ;(h[0] !== e ? ((t = (0, i.jsx)(ew, { ...e })), (h[0] = e), (h[1] = t)) : (t = h[1]),
        h[2] !== v || h[3] !== y || h[4] !== e.onChange || h[5] !== p
          ? ((n = (0, i.jsx)(eE, { selected: p, menuPlacement: y, disabled: v, onChange: e.onChange })),
            (h[2] = v),
            (h[3] = y),
            (h[4] = e.onChange),
            (h[5] = p),
            (h[6] = n))
          : (n = h[6]),
        h[7] !== x
          ? ((l = x.formatMessage({ id: "presentationEditor.textAlignment", defaultMessage: "Text alignment" })),
            (h[7] = x),
            (h[8] = l))
          : (l = h[8]),
        h[9] !== x || h[10] !== p.alignment
          ? ((a = x.formatMessage(
              {
                id: "imageTextEditing.currentAlignment",
                defaultMessage: "{alignment, select, left {Align left} center {Align center} other {Align right}}",
              },
              { alignment: p.alignment },
            )),
            (h[9] = x),
            (h[10] = p.alignment),
            (h[11] = a))
          : (a = h[11]),
        h[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { left: ea.z, center: el.v, right: eo.E }), (h[12] = o))
          : (o = h[12]))
      let b = o[p.alignment]
      return (
        h[13] !== b ? ((s = (0, i.jsx)(f.I, { asset: b })), (h[13] = b), (h[14] = s)) : (s = h[14]),
        h[15] !== l || h[16] !== a || h[17] !== s
          ? ((d = (0, i.jsx)(eh.Wv, {
              asChild: !0,
              children: (0, i.jsx)(Y.P, {
                color: "ghostActive",
                size: "formatToolbarIcon",
                "aria-label": l,
                "aria-description": a,
                children: s,
              }),
            })),
            (h[15] = l),
            (h[16] = a),
            (h[17] = s),
            (h[18] = d))
          : (d = h[18]),
        h[19] !== e.onChange || h[20] !== p
          ? ((u = (0, i.jsx)(eS, { selected: p, onChange: e.onChange })),
            (h[19] = e.onChange),
            (h[20] = p),
            (h[21] = u))
          : (u = h[21]),
        h[22] !== y || h[23] !== u
          ? ((c = (0, i.jsx)(eh.hl, { ...y, disablePadding: !0, size: "content", variant: "menu", children: u })),
            (h[22] = y),
            (h[23] = u),
            (h[24] = c))
          : (c = h[24]),
        h[25] !== d || h[26] !== c
          ? ((g = (0, i.jsxs)(eh.AM, { children: [d, c] })), (h[25] = d), (h[26] = c), (h[27] = g))
          : (g = h[27]),
        h[28] !== v || h[29] !== t || h[30] !== n || h[31] !== g
          ? ((m = (0, i.jsxs)("fieldset", { className: "contents", disabled: v, children: [t, n, g] })),
            (h[28] = v),
            (h[29] = t),
            (h[30] = n),
            (h[31] = g),
            (h[32] = m))
          : (m = h[32]),
        m
      )
    }
    function ew(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        g,
        m,
        h,
        f,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C,
        E,
        T,
        S = (0, r.c)(70),
        { source: k, selected: _, menuPlacement: I, disabled: A, inPanel: P, onChange: R } = e,
        z = void 0 !== A && A,
        N = void 0 !== P && P,
        D = (0, F.A)(),
        $ = (0, u.useId)()
      if (
        S[0] !== z ||
        S[1] !== $ ||
        S[2] !== N ||
        S[3] !== D ||
        S[4] !== I ||
        S[5] !== R ||
        S[6] !== _ ||
        S[7] !== k.assets ||
        S[8] !== k.snapshot.content.fonts
      ) {
        let e, r, u, v, b
        S[22] !== k.assets
          ? ((e = (e) => {
              let t = k.assets.fonts.find((t) => t.id === e.id),
                n =
                  null != t &&
                  Array.from(e.name).every(
                    (n) => t.codePoints.has(n.codePointAt(0) ?? 0) && !e.missing_characters?.includes(n),
                  )
              return { id: e.id, name: e.name, family: n ? t.family : void 0 }
            }),
            (S[22] = k.assets),
            (S[23] = e))
          : (e = S[23])
        let w = k.snapshot.content.fonts.map(e)
        S[24] !== _.fontId ? ((r = (e) => e.id === _.fontId), (S[24] = _.fontId), (S[25] = r)) : (r = S[25])
        let j = w.find(r)
        ;((n = eg.Ab),
          (f = I),
          (p = "opaque"),
          (y = z),
          (l = "menuBounded"),
          (a = "pointer-events-auto min-w-50"),
          S[26] !== D
            ? ((u = D.formatMessage({ id: "presentationEditor.font", defaultMessage: "Font family" })),
              (S[26] = D),
              (S[27] = u))
            : (u = S[27]),
          S[28] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, i.jsx)(x.HIf, {})), (S[28] = v)) : (v = S[28]),
          (o = (0, i.jsxs)(Y.P, {
            color: N ? "field" : "ghostActive",
            size: N ? "field" : "formatToolbar",
            contentLayout: "dropdown",
            className: N ? "w-full justify-between" : void 0,
            allowShrink: !0,
            "aria-label": u,
            children: [
              (0, i.jsx)("span", {
                className: N ? "min-w-0 truncate" : "max-w-32 truncate @max-[480px]:max-w-12",
                style: { fontFamily: j?.family },
                children: j?.name ?? (0, i.jsx)(c.A, { id: "presentationEditor.mixed", defaultMessage: "Mixed" }),
              }),
              v,
            ],
          })),
          S[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (0, i.jsx)(c.A, { id: "imageTextEditing.imageFonts", defaultMessage: "From this image" })),
              (S[29] = b))
            : (b = S[29]),
          S[30] !== $
            ? ((s = (0, i.jsx)(eg.ms.SectionLabel, { children: (0, i.jsx)("span", { id: $, children: b }) })),
              (S[30] = $),
              (S[31] = s))
            : (s = S[31]),
          (t = eg.ms.RadioGroup),
          (d = $),
          (g = _.fontId),
          S[32] !== R || S[33] !== _
            ? ((m = (e) => R({ ..._, fontId: e })), (S[32] = R), (S[33] = _), (S[34] = m))
            : (m = S[34]),
          (h = w.map(eC)),
          (S[0] = z),
          (S[1] = $),
          (S[2] = N),
          (S[3] = D),
          (S[4] = I),
          (S[5] = R),
          (S[6] = _),
          (S[7] = k.assets),
          (S[8] = k.snapshot.content.fonts),
          (S[9] = t),
          (S[10] = n),
          (S[11] = l),
          (S[12] = a),
          (S[13] = o),
          (S[14] = s),
          (S[15] = d),
          (S[16] = g),
          (S[17] = m),
          (S[18] = h),
          (S[19] = f),
          (S[20] = p),
          (S[21] = y))
      } else
        ((t = S[9]),
          (n = S[10]),
          (l = S[11]),
          (a = S[12]),
          (o = S[13]),
          (s = S[14]),
          (d = S[15]),
          (g = S[16]),
          (m = S[17]),
          (h = S[18]),
          (f = S[19]),
          (p = S[20]),
          (y = S[21]))
      ;(S[35] !== t || S[36] !== d || S[37] !== g || S[38] !== m || S[39] !== h
        ? ((v = (0, i.jsx)(t, { "aria-labelledby": d, value: g, onValueChange: m, children: h })),
          (S[35] = t),
          (S[36] = d),
          (S[37] = g),
          (S[38] = m),
          (S[39] = h),
          (S[40] = v))
        : (v = S[40]),
        S[41] !== n ||
        S[42] !== l ||
        S[43] !== a ||
        S[44] !== o ||
        S[45] !== s ||
        S[46] !== v ||
        S[47] !== f ||
        S[48] !== p ||
        S[49] !== y
          ? ((b = (0, i.jsxs)(n, {
              ...f,
              surface: p,
              disabled: y,
              contentWidth: l,
              contentClassName: a,
              triggerButton: o,
              children: [s, v],
            })),
            (S[41] = n),
            (S[42] = l),
            (S[43] = a),
            (S[44] = o),
            (S[45] = s),
            (S[46] = v),
            (S[47] = f),
            (S[48] = p),
            (S[49] = y),
            (S[50] = b))
          : (b = S[50]),
        S[51] !== k.items ? ((w = new Set(k.items.flatMap(ej))), (S[51] = k.items), (S[52] = w)) : (w = S[52]),
        S[53] !== w ? ((j = [...w]), (S[53] = w), (S[54] = j)) : (j = S[54]))
      let L = _.color
      return (
        S[55] !== D
          ? ((M = D.formatMessage({ id: "imageTextEditing.textColor", defaultMessage: "Text color" })),
            (S[55] = D),
            (S[56] = M))
          : (M = S[56]),
        S[57] !== R || S[58] !== _
          ? ((C = (e) => {
              ;/^#[0-9a-f]{6}$/i.test(e) && R({ ..._, color: e })
            }),
            (S[57] = R),
            (S[58] = _),
            (S[59] = C))
          : (C = S[59]),
        S[60] !== z || S[61] !== I || S[62] !== _.color || S[63] !== j || S[64] !== M || S[65] !== C
          ? ((E = (0, i.jsx)(ed.v, {
              ...I,
              palette: j,
              variant: "toolbar",
              color: L,
              disabled: z,
              label: M,
              onChange: C,
            })),
            (S[60] = z),
            (S[61] = I),
            (S[62] = _.color),
            (S[63] = j),
            (S[64] = M),
            (S[65] = C),
            (S[66] = E))
          : (E = S[66]),
        S[67] !== b || S[68] !== E
          ? ((T = (0, i.jsxs)(i.Fragment, { children: [b, E] })), (S[67] = b), (S[68] = E), (S[69] = T))
          : (T = S[69]),
        T
      )
    }
    function ej(e) {
      return "text" === e.kind && "editable" === e.rendering.mode
        ? [e.rendering.color, ...(e.rendering.fill_gradient?.stops.map(eM) ?? [])]
        : []
    }
    function eM(e) {
      return e.color
    }
    function eC(e) {
      return (0, i.jsx)(
        eg.ms.RadioItem,
        {
          value: e.id,
          textValue: e.name,
          children: (0, i.jsx)("span", { style: { fontFamily: e.family }, children: e.name }),
        },
        e.id,
      )
    }
    function eE(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        g,
        m,
        h = (0, r.c)(26),
        { selected: f, menuPlacement: x, disabled: p, onChange: y, inPanel: v } = e,
        b = void 0 !== p && p,
        w = (0, F.A)(),
        j = (0, es.useDirection)(),
        M = (0, u.useRef)(null)
      h[0] !== y || h[1] !== f
        ? ((t = (e) => y({ ...f, fontSize: e })), (h[0] = y), (h[1] = f), (h[2] = t))
        : (t = h[2])
      let C = t,
        E = f.fontSize,
        T = void 0 !== v && v ? "w-full min-w-0" : "w-fit max-w-29 shrink-0"
      ;(h[3] !== j || h[4] !== x
        ? ((n = (e, t) =>
            (function (e, t, n, { align: i, side: r, direction: l }) {
              if (null == e) return {}
              let a = e.getBoundingClientRect(),
                o = t.getBoundingClientRect(),
                s = t.closest("[data-menu-overlay-surface]")?.getBoundingClientRect() ?? a
              return {
                alignOffset: (i === ("ltr" === l ? "start" : "end") ? a.left - o.left : o.right - a.right) - n,
                sideOffset: (0, ey.ot)(n) + ("top" === r ? o.top - s.top : s.bottom - o.bottom),
                minWidth: a.width / n,
              }
            })(M.current, e, t, { ...x, direction: j })),
          (h[3] = j),
          (h[4] = x),
          (h[5] = n))
        : (n = h[5]),
        h[6] !== x || h[7] !== n
          ? ((l = { ...x, surface: "opaque", getPlacement: n }), (h[6] = x), (h[7] = n), (h[8] = l))
          : (l = h[8]),
        h[9] !== w
          ? ((a = w.formatMessage({ id: "artifactEditor.fontSize", defaultMessage: "Font size" })),
            (h[9] = w),
            (h[10] = a))
          : (a = h[10]))
      let S = f.fontSize
      return (
        h[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(c.A, { id: "imageTextEditing.pixelUnit", defaultMessage: "px" })),
            (s = [72, 48, 36, 28, 20].map(eT)),
            (h[11] = o),
            (h[12] = s))
          : ((o = h[11]), (s = h[12])),
        h[13] !== C || h[14] !== b || h[15] !== f.fontSize || h[16] !== l || h[17] !== a
          ? ((d = (0, i.jsx)(eu.D, {
              menuPlacement: l,
              label: a,
              value: S,
              disabled: b,
              onChange: C,
              min: 1,
              max: 8192,
              suffix: o,
              presets: s,
            })),
            (h[13] = C),
            (h[14] = b),
            (h[15] = f.fontSize),
            (h[16] = l),
            (h[17] = a),
            (h[18] = d))
          : (d = h[18]),
        h[19] !== d || h[20] !== T
          ? ((g = (0, i.jsx)("div", { ref: M, className: T, children: d })), (h[19] = d), (h[20] = T), (h[21] = g))
          : (g = h[21]),
        h[22] !== C || h[23] !== f.fontSize || h[24] !== g
          ? ((m = (0, i.jsx)(ex, { value: E, onChange: C, children: g })),
            (h[22] = C),
            (h[23] = f.fontSize),
            (h[24] = g),
            (h[25] = m))
          : (m = h[25]),
        m
      )
    }
    function eT(e, t) {
      return {
        value: e,
        label: (0, i.jsxs)("span", {
          className: "flex w-full items-center justify-between gap-6",
          children: [
            (0, i.jsx)(c.A, {
              id: "artifactEditor.sizePresetLabel",
              defaultMessage: "{index, select, 0 {Display} 1 {Header} 2 {Subheading} 3 {Body} other {Small}}",
              values: { index: t },
            }),
            (0, i.jsx)("span", { className: "text-secondary", children: e }),
          ],
        }),
      }
    }
    function eS(e) {
      let t,
        n,
        l = (0, r.c)(6),
        { selected: a, onChange: o } = e
      return (
        l[0] !== o || l[1] !== a
          ? ((t = (e) => {
              e !== a.alignment && ("left" === e || "center" === e || "right" === e) && o({ ...a, alignment: e })
            }),
            (l[0] = o),
            (l[1] = a),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== a.alignment || l[4] !== t
          ? ((n = (0, i.jsx)(ec.D, { value: a.alignment, onChange: t })), (l[3] = a.alignment), (l[4] = t), (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    var ek = n("R74X")
    let e_ = (0, l.a)({
      name: "node-to-node-path-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668945, y: 2.667969, width: 14.662109, height: 14.662109 },
        visualBounds: { x: 2.668945, y: 2.667969, width: 14.662109, height: 14.662109 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668945, y: 2.667969, width: 14.662109, height: 14.662109 },
        center: { x: 10, y: 9.999024 },
        insets: { top: 2.667969, right: 2.668946, bottom: 2.669922, left: 2.668945 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999024 }, foreground: { x: 10, y: 9.999024 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.583 2.66797C16.1002 2.6681 17.3311 3.89877 17.3311 5.41602C17.3309 6.93311 16.1001 8.16295 14.583 8.16309C13.2955 8.16293 12.2176 7.27643 11.9199 6.08105H8.54199C7.72814 6.08118 7.35076 6.46999 7.24805 6.79102C7.14834 7.10314 7.23216 7.58448 7.8418 7.9707L12.835 10.8838C12.8407 10.8871 12.8469 10.891 12.8525 10.8945C13.8991 11.5487 14.3357 12.6262 14.0195 13.6143C13.7055 14.595 12.7279 15.248 11.459 15.248H8.0791C7.78102 16.4432 6.70341 17.3301 5.41602 17.3301C3.89912 17.3299 2.66939 16.0998 2.66895 14.583C2.66895 13.0658 3.89884 11.8351 5.41602 11.835C6.70395 11.835 7.78253 12.7219 8.08008 13.918H11.459C12.2729 13.9179 12.6492 13.529 12.752 13.208C12.852 12.8949 12.7682 12.4122 12.1533 12.0254L7.16504 9.11621L7.14844 9.10547C6.10213 8.4514 5.66553 7.37363 5.98145 6.38574C6.29529 5.40484 7.27297 4.75111 8.54199 4.75098H11.9199C12.2175 3.55529 13.2954 2.66812 14.583 2.66797ZM5.41602 13.165C4.63338 13.1652 3.99902 13.8003 3.99902 14.583C3.99947 15.3653 4.63365 15.9998 5.41602 16C6.19853 16 6.83354 15.3654 6.83398 14.583C6.83398 13.8002 6.19881 13.165 5.41602 13.165ZM14.583 3.99805C13.8004 3.99823 13.166 4.63334 13.166 5.41602C13.1662 6.19854 13.8005 6.83283 14.583 6.83301C15.3656 6.83288 16.0008 6.19857 16.001 5.41602C16.001 4.63331 15.3657 3.99818 14.583 3.99805Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var eI = n("EShr"),
      eA = n("LQxe")
    function eP(e) {
      let t,
        n = (0, r.c)(6),
        { rows: l, emptyIcon: a, emptyLabel: o, emptyAction: s } = e
      if (0 === l.length) {
        let e
        return (
          n[0] !== s || n[1] !== a || n[2] !== o
            ? ((e = (0, i.jsx)(eR, { icon: a, label: o, action: s })), (n[0] = s), (n[1] = a), (n[2] = o), (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      return (n[4] !== l ? ((t = (0, i.jsx)(eA.b, { rows: l })), (n[4] = l), (n[5] = t)) : (t = n[5]), t)
    }
    function eR(e) {
      let t,
        n,
        l,
        a = (0, r.c)(9),
        { icon: s, label: d, action: u, centered: c } = e,
        g = void 0 !== c && c ? "justify-center-safe py-4" : "pt-40"
      return (
        a[0] !== g
          ? ((t = (0, o.A)(
              "flex min-h-0 flex-1 flex-col items-center gap-4 overflow-y-auto px-8 text-center text-secondary select-none",
              g,
            )),
            (a[0] = g),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== d
          ? ((n = (0, i.jsx)("p", { className: "text-base leading-5", children: d })), (a[2] = d), (a[3] = n))
          : (n = a[3]),
        a[4] !== u || a[5] !== s || a[6] !== t || a[7] !== n
          ? ((l = (0, i.jsxs)("div", { className: t, children: [s, n, u] })),
            (a[4] = u),
            (a[5] = s),
            (a[6] = t),
            (a[7] = n),
            (a[8] = l))
          : (l = a[8]),
        l
      )
    }
    let ez = (0, U.YK)({
      baseline: {
        id: "imageTextEditing.shapeTextOnImage",
        defaultMessage: "Drag a guide point on the image to bend the text.",
      },
      upper_contour: {
        id: "imageTextEditing.shapeLetterHeightOnImage",
        defaultMessage: "Drag a point on the upper guide to change the letter height.",
      },
      unavailable: { id: "imageTextEditing.noGuides", defaultMessage: "This text layer has no editable guides." },
    })
    function eN(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        g,
        h,
        x,
        p = (0, r.c)(43),
        { guides: y, active: v, editing: b, text: w, onSelect: j, onStart: M, onDone: C, startButtonRef: E } = e,
        T = (0, F.A)()
      if (!b) {
        let e,
          t,
          n,
          r = 0 === y.length
        return (
          p[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(f.I, { asset: ek.i })),
              (t = (0, i.jsx)(c.A, { id: "imageTextEditing.editGuides", defaultMessage: "Edit text guides" })),
              (p[0] = e),
              (p[1] = t))
            : ((e = p[0]), (t = p[1])),
          p[2] !== M || p[3] !== E || p[4] !== r
            ? ((n = (0, i.jsxs)(m.$, {
                ref: E,
                color: "ghostSecondary",
                size: "menuRow",
                disabled: r,
                onClick: M,
                onMouseDown: e$,
                children: [e, t],
              })),
              (p[2] = M),
              (p[3] = E),
              (p[4] = r),
              (p[5] = n))
            : (n = p[5]),
          n
        )
      }
      if (p[6] !== v?.lineIndex || p[7] !== y) {
        let e
        ;((t = y.filter(eD)),
          p[10] !== v?.lineIndex
            ? ((e = (e) => e.lineIndex === v?.lineIndex), (p[10] = v?.lineIndex), (p[11] = e))
            : (e = p[11]),
          (n = t.find(e)),
          (p[6] = v?.lineIndex),
          (p[7] = y),
          (p[8] = t),
          (p[9] = n))
      } else ((t = p[8]), (n = p[9]))
      let S = n
      if (p[12] !== v?.lineIndex || p[13] !== y) {
        let e
        ;(p[15] !== v?.lineIndex
          ? ((e = (e) => "upper_contour" === e.kind && e.lineIndex === v?.lineIndex),
            (p[15] = v?.lineIndex),
            (p[16] = e))
          : (e = p[16]),
          (l = y.find(e)),
          (p[12] = v?.lineIndex),
          (p[13] = y),
          (p[14] = l))
      } else l = p[14]
      let k = l
      p[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(f.I, { asset: e_ })), (p[17] = a))
        : (a = p[17])
      let _ = ez[v?.kind ?? "unavailable"]
      return (
        p[18] !== _
          ? ((o = (0, i.jsx)("span", { role: "status", children: (0, i.jsx)(c.A, { ..._ }) })),
            (p[18] = _),
            (p[19] = o))
          : (o = p[19]),
        p[20] !== v?.kind || p[21] !== S || p[22] !== t || p[23] !== y || p[24] !== j || p[25] !== w
          ? ((s =
              null != S &&
              t.length > 1 &&
              (0, i.jsx)(eL, {
                baselines: t,
                selected: S,
                text: w,
                onSelect: (e) => {
                  let t = y.find((t) => t.lineIndex === e.lineIndex && t.kind === v?.kind)
                  j(t?.id ?? e.id)
                },
              })),
            (p[20] = v?.kind),
            (p[21] = S),
            (p[22] = t),
            (p[23] = y),
            (p[24] = j),
            (p[25] = w),
            (p[26] = s))
          : (s = p[26]),
        p[27] !== v || p[28] !== S || p[29] !== T || p[30] !== j || p[31] !== k
          ? ((d =
              null != S &&
              null != k &&
              null != v &&
              (0, i.jsx)(eI.T, {
                fullWidth: !0,
                variant: "field",
                focusRing: "surface",
                unselectedColor: "ghostActive",
                className: "max-w-60",
                ariaLabel: T.formatMessage({ id: "imageTextEditing.guideMode", defaultMessage: "Text guide" }),
                selectedId: v.id,
                onSelect: j,
                options: [
                  { id: S.id, label: (0, i.jsx)(c.A, { id: "imageTextEditing.bendGuide", defaultMessage: "Bend" }) },
                  {
                    id: k.id,
                    label: (0, i.jsx)(c.A, { id: "imageTextEditing.heightGuide", defaultMessage: "Letter height" }),
                  },
                ],
              })),
            (p[27] = v),
            (p[28] = S),
            (p[29] = T),
            (p[30] = j),
            (p[31] = k),
            (p[32] = d))
          : (d = p[32]),
        p[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(c.A, { id: "imageTextEditing.finishGuides", defaultMessage: "Done" })), (p[33] = u))
          : (u = p[33]),
        p[34] !== C
          ? ((g = (0, i.jsx)(m.$, { color: "outline", size: "dialog", onClick: C, children: u })),
            (p[34] = C),
            (p[35] = g))
          : (g = p[35]),
        p[36] !== s || p[37] !== d || p[38] !== g
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [s, d, g] })), (p[36] = s), (p[37] = d), (p[38] = g), (p[39] = h))
          : (h = p[39]),
        p[40] !== h || p[41] !== o
          ? ((x = (0, i.jsx)(eR, { centered: !0, icon: a, label: o, action: h })),
            (p[40] = h),
            (p[41] = o),
            (p[42] = x))
          : (x = p[42]),
        x
      )
    }
    function eD(e) {
      return "baseline" === e.kind
    }
    function e$(e) {
      e.currentTarget.ownerDocument.activeElement instanceof HTMLTextAreaElement && e.preventDefault()
    }
    function eL(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        c,
        g,
        h,
        f,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C = (0, r.c)(48),
        { baselines: E, selected: T, text: S, onSelect: k } = e,
        _ = (0, F.A)()
      if (C[0] !== E || C[1] !== _ || C[2] !== k || C[3] !== T || C[4] !== S) {
        let e,
          r,
          b = S.split("\n"),
          w = (e) =>
            null == e.lineIndex
              ? _.formatMessage({ id: "imageTextEditing.sharedGuide", defaultMessage: "Shared guide" })
              : _.formatMessage(
                  { id: "imageTextEditing.guideLineWording", defaultMessage: "Line {number} \xb7 {text}" },
                  { number: e.lineIndex + 1, text: b[e.lineIndex] },
                )
        C[20] !== _
          ? ((e = _.formatMessage({ id: "imageTextEditing.guideTextLine", defaultMessage: "Text line" })),
            (C[20] = _),
            (C[21] = e))
          : (e = C[21])
        let j = e
        ;((d = "w-full max-w-60 text-start"),
          (l = ev),
          (n = eg.Ab),
          (h = "start"),
          (f = "bottom"),
          (p = !0),
          (y = "opaque"),
          (v = "compact"),
          (o = "pointer-events-auto"),
          C[22] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, i.jsx)(x.HIf, {})), (C[22] = r)) : (r = C[22]),
          (s = (0, i.jsxs)(m.$, {
            size: "field",
            color: "field",
            contentLayout: "dropdown",
            className: "w-full justify-between",
            "aria-label": _.formatMessage(
              { id: "imageTextEditing.currentGuideLine", defaultMessage: "Text line, {line}" },
              { line: w(T) },
            ),
            children: [(0, i.jsx)("span", { dir: "auto", className: "truncate", children: w(T) }), r],
          })),
          (t = eg.ms.RadioGroup),
          (a = j),
          (u = T.id),
          C[23] !== E || C[24] !== k
            ? ((c = (e) => {
                let t = E.find((t) => t.id === e)
                null != t && k(t)
              }),
              (C[23] = E),
              (C[24] = k),
              (C[25] = c))
            : (c = C[25]),
          (g = E.map((e) =>
            (0, i.jsx)(
              eg.ms.RadioItem,
              {
                value: e.id,
                textValue: w(e),
                children: (0, i.jsx)("span", { dir: "auto", className: "truncate", children: w(e) }),
              },
              e.id,
            ),
          )),
          (C[0] = E),
          (C[1] = _),
          (C[2] = k),
          (C[3] = T),
          (C[4] = S),
          (C[5] = t),
          (C[6] = n),
          (C[7] = l),
          (C[8] = a),
          (C[9] = o),
          (C[10] = s),
          (C[11] = d),
          (C[12] = u),
          (C[13] = c),
          (C[14] = g),
          (C[15] = h),
          (C[16] = f),
          (C[17] = p),
          (C[18] = y),
          (C[19] = v))
      } else
        ((t = C[5]),
          (n = C[6]),
          (l = C[7]),
          (a = C[8]),
          (o = C[9]),
          (s = C[10]),
          (d = C[11]),
          (u = C[12]),
          (c = C[13]),
          (g = C[14]),
          (h = C[15]),
          (f = C[16]),
          (p = C[17]),
          (y = C[18]),
          (v = C[19]))
      return (
        C[26] !== t || C[27] !== a || C[28] !== u || C[29] !== c || C[30] !== g
          ? ((b = (0, i.jsx)(t, { "aria-label": a, value: u, onValueChange: c, children: g })),
            (C[26] = t),
            (C[27] = a),
            (C[28] = u),
            (C[29] = c),
            (C[30] = g),
            (C[31] = b))
          : (b = C[31]),
        C[32] !== n ||
        C[33] !== o ||
        C[34] !== s ||
        C[35] !== b ||
        C[36] !== h ||
        C[37] !== f ||
        C[38] !== p ||
        C[39] !== y ||
        C[40] !== v
          ? ((w = (0, i.jsx)(n, {
              align: h,
              side: f,
              matchTriggerWidth: p,
              surface: y,
              contentMaxHeight: v,
              contentClassName: o,
              triggerButton: s,
              children: b,
            })),
            (C[32] = n),
            (C[33] = o),
            (C[34] = s),
            (C[35] = b),
            (C[36] = h),
            (C[37] = f),
            (C[38] = p),
            (C[39] = y),
            (C[40] = v),
            (C[41] = w))
          : (w = C[41]),
        C[42] !== l || C[43] !== w
          ? ((j = (0, i.jsx)(l, { children: w })), (C[42] = l), (C[43] = w), (C[44] = j))
          : (j = C[44]),
        C[45] !== d || C[46] !== j
          ? ((M = (0, i.jsx)("div", { className: d, children: j })), (C[45] = d), (C[46] = j), (C[47] = M))
          : (M = C[47]),
        M
      )
    }
    var eB = n("x6sT"),
      eK = n("lw4e")
    function eH(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c = (0, r.c)(33),
        { guides: g, activeGuideId: m, region: h, imageSize: f, displayWidth: x, onStart: p, onMove: y, onEnd: v } = e,
        b = (0, F.A)(),
        w = (0, u.useRef)(null)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            w.current?.querySelector('[role="button"]')?.focus({ preventScroll: !0 })
          }),
          (n = []),
          (c[0] = t),
          (c[1] = n))
        : ((t = c[0]), (n = c[1])),
        (0, u.useLayoutEffect)(t, n))
      let j = (0, u.useId)()
      c[2] !== b
        ? ((l = b.formatMessage({
            id: "imageTextEditing.guidePointHelp",
            defaultMessage:
              "Drag or use the arrow keys to move this point. Hold Shift with an arrow key to move ten pixels.",
          })),
          (c[2] = b),
          (c[3] = l))
        : (l = c[3])
      let M = l,
        C = (0, u.useRef)(null)
      ;(c[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => C.current?.stop(!0)), (c[4] = a))
        : (a = c[4]),
        c[5] !== m || c[6] !== h.id ? ((o = [h.id, m]), (c[5] = m), (c[6] = h.id), (c[7] = o)) : (o = c[7]),
        (0, u.useEffect)(a, o))
      let E = x / f.width
      c[8] !== E ? ((s = (0, eB.h6)(E)), (c[8] = E), (c[9] = s)) : (s = c[9])
      let T = s,
        S = T.halfVisibleSize
      if (
        c[10] !== m ||
        c[11] !== g ||
        c[12] !== b ||
        c[13] !== T.hitRadius ||
        c[14] !== v ||
        c[15] !== y ||
        c[16] !== p ||
        c[17] !== M ||
        c[18] !== j ||
        c[19] !== S ||
        c[20] !== h.height ||
        c[21] !== h.rotation ||
        c[22] !== h.width ||
        c[23] !== h.x ||
        c[24] !== h.y
      ) {
        let e,
          t,
          n,
          r,
          l,
          a = function (e, t, n) {
            if (0 !== e.button || !1 === e.isPrimary || null != C.current) return
            let i = e.currentTarget,
              r = i.getScreenCTM()
            if (null == r) return
            ;(e.stopPropagation(), e.preventDefault(), i.focus({ preventScroll: !0 }))
            let l = e.pointerId,
              a = new DOMPoint(e.clientX, e.clientY).matrixTransform(r.inverse()),
              o = e.clientX,
              s = e.clientY,
              d = t.points[n],
              u = i.ownerDocument.defaultView,
              c = !1,
              g = d.x,
              m = d.y,
              h = () => f(!0)
            function f(e) {
              ;((C.current = null),
                u?.removeEventListener("blur", h),
                i.hasPointerCapture(l) && i.releasePointerCapture(l),
                c && v(e))
            }
            ;((C.current = {
              pointerId: l,
              stop: f,
              move(e) {
                if (!c && 2 >= Math.hypot(e.clientX - o, e.clientY - s)) return
                let r = i.getScreenCTM()
                if (null == r) return void f(!0)
                let l = new DOMPoint(e.clientX, e.clientY).matrixTransform(r.inverse()),
                  u = d.x + (l.x - a.x),
                  h = d.y + (l.y - a.y)
                ;(u !== g || h !== m) && (c || (p(), (c = !0)), (g = u), (m = h), y(t, n, u, h))
              },
            }),
              u?.addEventListener("blur", h),
              i.setPointerCapture(l))
          }
        ;(c[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => {
              C.current?.pointerId === e.pointerId && C.current.move(e)
            }),
            (e = (e) => {
              C.current?.pointerId === e.pointerId && (C.current.move(e), C.current?.stop(!1))
            }),
            (t = (e) => {
              C.current?.pointerId === e.pointerId && C.current.stop(!0)
            }),
            (n = (e) => {
              C.current?.pointerId === e.pointerId && C.current.stop(!0)
            }),
            (c[26] = e),
            (c[27] = t),
            (c[28] = n),
            (c[29] = r))
          : ((e = c[26]), (t = c[27]), (n = c[28]), (r = c[29])),
          c[30] !== M || c[31] !== j
            ? ((l = (0, i.jsx)("desc", { id: j, children: M })), (c[30] = M), (c[31] = j), (c[32] = l))
            : (l = c[32]),
          (d = (0, i.jsxs)("g", {
            ref: w,
            transform: `rotate(${h.rotation} ${h.x + h.width / 2} ${h.y + h.height / 2})`,
            onPointerMove: r,
            onPointerUp: e,
            onLostPointerCapture: t,
            onPointerCancel: n,
            children: [
              l,
              g.map((e) =>
                (0, i.jsxs)(
                  "g",
                  {
                    opacity: e.id === m ? 1 : 0.3,
                    className: "baseline" === e.kind ? "text-blue" : "text-orange",
                    children: [
                      e.id === m &&
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
                      e.id === m &&
                        e.points.map((t, n) =>
                          (0, i.jsxs)(
                            "g",
                            {
                              role: "button",
                              tabIndex: 0,
                              "aria-describedby": j,
                              "aria-label": b.formatMessage(
                                {
                                  id: "imageTextEditing.guidePoint",
                                  defaultMessage:
                                    "{kind, select, baseline {Baseline} other {Upper contour}}, {line, select, block {text block} other {line {line}}}, {control, select, yes {control point} other {anchor}} {index}",
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
                              onPointerDown: (t) => a(t, e, n),
                              onKeyDown: (i) => {
                                if ("Escape" === i.key && null != C.current) {
                                  ;(i.preventDefault(), i.stopPropagation(), C.current.stop(!0))
                                  return
                                }
                                let r = (0, eK.pv)(i.key, i.shiftKey)
                                if (null == r || i.altKey || i.ctrlKey || i.metaKey || null != C.current) return
                                ;(i.preventDefault(), i.stopPropagation(), p())
                                let l = (h.rotation * Math.PI) / 180
                                ;(y(
                                  e,
                                  n,
                                  t.x + r.dx * Math.cos(l) + r.dy * Math.sin(l),
                                  t.y + r.dy * Math.cos(l) - r.dx * Math.sin(l),
                                ),
                                  v(!1))
                              },
                              children: [
                                (0, i.jsx)("circle", { cx: t.x, cy: t.y, r: T.hitRadius, fill: "transparent" }),
                                (0, i.jsx)("circle", {
                                  className: "hidden group-focus-visible:block",
                                  cx: t.x,
                                  cy: t.y,
                                  r: 1.8 * S,
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: 2,
                                  vectorEffect: "non-scaling-stroke",
                                }),
                                t.control
                                  ? (0, i.jsx)("circle", {
                                      cx: t.x,
                                      cy: t.y,
                                      r: S,
                                      fill: "white",
                                      stroke: "currentColor",
                                      strokeWidth: 1.5,
                                      vectorEffect: "non-scaling-stroke",
                                    })
                                  : (0, i.jsx)("rect", {
                                      x: t.x - S,
                                      y: t.y - S,
                                      width: 2 * S,
                                      height: 2 * S,
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
          (c[10] = m),
          (c[11] = g),
          (c[12] = b),
          (c[13] = T.hitRadius),
          (c[14] = v),
          (c[15] = y),
          (c[16] = p),
          (c[17] = M),
          (c[18] = j),
          (c[19] = S),
          (c[20] = h.height),
          (c[21] = h.rotation),
          (c[22] = h.width),
          (c[23] = h.x),
          (c[24] = h.y),
          (c[25] = d))
      } else d = c[25]
      return d
    }
    function eF(e, t) {
      let n = e.items.find((e) => e.id === t)
      if (n?.kind !== "text" || "editable" !== n.rendering.mode) return []
      let i = n.rendering,
        r = [],
        l = !1
      if (
        (n.text.split("\n").forEach((e, t) => {
          if (!e.trim()) return
          let n = i.line_layout?.[t]
          null != n
            ? r.push({ baseline: n.baseline, upper_contour: n.upper_contour, lineIndex: t, fontSize: n.font_size })
            : (l = !0)
        }),
        l)
      ) {
        let n = null == i.baseline ? (0, ei.rv)(e, t) : null,
          l = i.baseline ?? n?.baseline
        null != l &&
          r.unshift({
            lineIndex: null,
            baseline: l,
            upper_contour: i.upper_contour,
            fontSize: i.font_size,
            implicit: n,
          })
      }
      return r
    }
    function eU(e, t, n) {
      return e.flatMap(({ command: i, values: r }, l) => {
        let a = []
        if ("L" === i) {
          let i = e[l - 1].values
          a.push({
            x: ((i[i.length - 2] + r[0]) * t) / 2,
            y: ((i[i.length - 1] + r[1]) * n) / 2,
            control: !0,
            commandIndex: l,
            offset: null,
          })
        }
        for (let e = 0; e < r.length; e += 2)
          a.push({ x: r[e] * t, y: r[e + 1] * n, control: e < r.length - 2, commandIndex: l, offset: e })
        return a
      })
    }
    function eO(e, t = 1, n = 1) {
      return e
        .map(({ command: e, values: i }) => `${e} ${i.map((e, i) => e * (i % 2 == 0 ? t : n)).join(" ")}`)
        .join(" ")
    }
    var eY = n("yf2D")
    function eW(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, r.c)(13),
        { stage: c } = e,
        g = (0, F.A)(),
        m = (0, u.useRef)(null),
        h = (0, u.useRef)(null),
        [f, x] = (0, u.useState)(null)
      d[0] !== g
        ? ((t = g.formatMessage({ id: "imageTextEditing.emptyBoxLabel", defaultMessage: "Text" })),
          (d[0] = g),
          (d[1] = t))
        : (t = d[1])
      let p = t
      return (
        d[2] !== c
          ? ((n = () => {
              null != m.current && null != h.current && eq(c, m.current, h.current)
            }),
            (d[2] = c),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== c || d[5] !== f ? ((l = [c, f]), (d[4] = c), (d[5] = f), (d[6] = l)) : (l = d[6]),
        (0, u.useLayoutEffect)(n, l),
        d[7] !== p || d[8] !== c
          ? ((a = () => {
              let e = null,
                t = () => {
                  null != e && ((e = null), (h.current = null), x(null))
                },
                n = (n) => {
                  let i = n.target instanceof Element ? n.target.closest("[data-image-text-hover-label]") : null
                  null == i || 0 !== n.buttons || "touch" === n.pointerType
                    ? t()
                    : ((h.current = n),
                      i !== e && ((e = i), x(i.getAttribute("data-image-text-hover-label")?.trim() || p)),
                      null != m.current && eq(c, m.current, n))
                }
              return (
                c.addEventListener("pointermove", n),
                c.addEventListener("pointerdown", t, !0),
                c.addEventListener("pointerleave", t),
                () => {
                  ;(c.removeEventListener("pointermove", n),
                    c.removeEventListener("pointerdown", t, !0),
                    c.removeEventListener("pointerleave", t))
                }
              )
            }),
            (o = [c, p]),
            (d[7] = p),
            (d[8] = c),
            (d[9] = a),
            (d[10] = o))
          : ((a = d[9]), (o = d[10])),
        (0, u.useEffect)(a, o),
        d[11] !== f
          ? ((s =
              null == f
                ? null
                : (0, i.jsx)("span", {
                    ref: m,
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute top-0 left-0 z-10 w-max max-w-44 rounded-full bg-surface-elevated-secondary px-2 py-0.5 text-xs font-medium text-default shadow",
                    children: (0, i.jsx)(eY.E, { dir: "auto", animate: !0, children: f }, f),
                  })),
            (d[11] = f),
            (d[12] = s))
          : (s = d[12]),
        s
      )
    }
    function eq(e, t, n) {
      let i = e.getBoundingClientRect()
      if (((t.hidden = 0 === i.width || 0 === i.height), t.hidden)) return
      let r = ((n.clientX - i.left) * e.clientWidth) / i.width,
        l = ((n.clientY - i.top) * e.clientHeight) / i.height,
        a = r + 12 + t.offsetWidth > e.clientWidth ? r - 12 - t.offsetWidth : r + 12,
        o = l + 16 + t.offsetHeight > e.clientHeight ? l - 12 - t.offsetHeight : l + 16
      t.style.transform = `translate(${Math.max(0, a)}px, ${Math.max(0, o)}px)`
    }
    var eZ = n("Piyk"),
      eX = n("Kyo0")
    let eG = ["w", "e", "n", "s", "nw", "ne", "sw", "se"],
      eV = ["nw", "ne", "sw", "se"]
    function eQ(e) {
      let t,
        n = (0, r.c)(41),
        { frame: l, zoom: a, editingText: o, resizeLabel: s, onRotate: d, onPointerDown: c, onKeyDown: g } = e,
        m = void 0 !== o && o,
        h = (0, F.A)(),
        f = (0, u.useId)(),
        x = Math.max(a, 1e-4)
      if (
        n[0] !== m ||
        n[1] !== f ||
        n[2] !== l.height ||
        n[3] !== l.rotation ||
        n[4] !== l.width ||
        n[5] !== l.x ||
        n[6] !== l.y ||
        n[7] !== h ||
        n[8] !== g ||
        n[9] !== c ||
        n[10] !== d ||
        n[11] !== s ||
        n[12] !== x
      ) {
        let e,
          r,
          a,
          o,
          u,
          p,
          y,
          v = (0, eB.h6)(x),
          b = 4 / x,
          w = 9 / x,
          j = Math.min(w, l.width / 2),
          M = Math.min(w, l.height / 2)
        n[14] !== j || n[15] !== w
          ? ((e = Math.sqrt(w * w - j * j)), (n[14] = j), (n[15] = w), (n[16] = e))
          : (e = n[16])
        let C = -e
        n[17] !== M || n[18] !== w
          ? ((r = Math.sqrt(w * w - M * M)), (n[17] = M), (n[18] = w), (n[19] = r))
          : (r = n[19])
        let E = -r,
          T = `M 0 0 H ${j} V ${C} A ${w} ${w} 0 0 0 ${-w} 0 A ${w} ${w} 0 0 0 ${E} ${M} H 0 Z`,
          S = { left: 0, top: 0, width: l.width, height: l.height },
          k = l.rotation ?? 0,
          _ = (0, eZ.k4)(S)
        n[20] !== g || n[21] !== d || n[22] !== k
          ? ((a = (e) => {
              let t
              if (e.nativeEvent.isComposing || e.altKey || e.ctrlKey || e.metaKey) return
              let n = e.shiftKey ? 15 : 1
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  t = Math.min(180, k + n)
                  break
                case "ArrowLeft":
                case "ArrowDown":
                  t = Math.max(-180, k - n)
                  break
                case "Home":
                  t = -180
                  break
                case "End":
                  t = 180
                  break
                default:
                  return void g(e)
              }
              ;(e.preventDefault(), e.stopPropagation(), t !== k && d(t))
            }),
            (n[20] = g),
            (n[21] = d),
            (n[22] = k),
            (n[23] = a))
          : (a = n[23])
        let I = a
        ;(n[24] !== m || n[25] !== f || n[26] !== l.height || n[27] !== l.width || n[28] !== b
          ? ((o =
              m &&
              (0, i.jsx)("clipPath", {
                id: f,
                children: (0, i.jsx)("path", {
                  clipRule: "evenodd",
                  d: `M ${-b} ${-b} H ${l.width + b} V ${l.height + b} H ${-b} Z M 0 0 H ${l.width} V ${l.height} H 0 Z`,
                }),
              })),
            (n[24] = m),
            (n[25] = f),
            (n[26] = l.height),
            (n[27] = l.width),
            (n[28] = b),
            (n[29] = o))
          : (o = n[29]),
          n[30] !== h
            ? ((u = h.formatMessage({ id: "imageTextEditing.layer.rotate", defaultMessage: "Rotate layer" })),
              (n[30] = h),
              (n[31] = u))
            : (u = n[31]),
          n[32] !== h || n[33] !== k
            ? ((p = h.formatNumber(k, {
                style: "unit",
                unit: "degree",
                unitDisplay: "long",
                maximumFractionDigits: 1,
              })),
              (n[32] = h),
              (n[33] = k),
              (n[34] = p))
            : (p = n[34]))
        let A = eV.map((e) => {
          let { x: t, y: n } = _[e],
            r = e.endsWith("w") ? 1 : -1,
            l = e.startsWith("n") ? 1 : -1
          return (0, i.jsx)(
            "path",
            {
              transform: `translate(${t} ${n}) scale(${r} ${l})`,
              d: T,
              fill: "transparent",
              pointerEvents: "fill",
              vectorEffect: "non-scaling-stroke",
              className: "touch-none",
              style: { cursor: (0, eB.SQ)(e, k) },
              onPointerDown: (e) => c(e, "rotate"),
            },
            e,
          )
        })
        ;(n[35] !== I || n[36] !== k || n[37] !== u || n[38] !== p || n[39] !== A
          ? ((y = (0, i.jsx)("g", {
              role: "slider",
              tabIndex: 0,
              "aria-label": u,
              "aria-valuemin": -180,
              "aria-valuemax": 180,
              "aria-valuenow": k,
              "aria-valuetext": p,
              className: "outline-none focus-visible:stroke-ring",
              onKeyDown: I,
              children: A,
            })),
            (n[35] = I),
            (n[36] = k),
            (n[37] = u),
            (n[38] = p),
            (n[39] = A),
            (n[40] = y))
          : (y = n[40]),
          (t = (0, i.jsxs)("g", {
            transform: `translate(${l.x} ${l.y}) rotate(${k} ${l.width / 2} ${l.height / 2})`,
            children: [
              o,
              y,
              eG.map((e) => {
                let t = (0, eZ.NY)(S, e),
                  n = 2 === e.length ? v.cornerHitRadius : v.edgeHitRadius,
                  r = eJ(l.width, n, b, e.includes("w"), e.includes("e")),
                  a = eJ(l.height, n, b, e.includes("n"), e.includes("s"))
                return (0, i.jsxs)(
                  "g",
                  {
                    className: "focus-visible:stroke-info touch-none outline-none",
                    style: { cursor: (0, eB.WB)(e, k) ?? void 0 },
                    role: "button",
                    tabIndex: 0,
                    "aria-label": s(e),
                    onKeyDown: (t) => g(t, e),
                    onPointerDown: (t) => c(t, e),
                    children: [
                      (0, i.jsx)("circle", {
                        cx: t.x,
                        cy: t.y,
                        r: v.halfVisibleSize,
                        fill: L.a,
                        pointerEvents: m ? "fill" : "none",
                        stroke: L.l,
                        strokeWidth: 1,
                        vectorEffect: "non-scaling-stroke",
                      }),
                      (0, i.jsx)("rect", {
                        x: r.start,
                        y: a.start,
                        width: r.length,
                        height: a.length,
                        fill: "transparent",
                        pointerEvents: "fill",
                        clipPath: m ? `url(#${f})` : void 0,
                      }),
                    ],
                  },
                  e,
                )
              }),
            ],
          })),
          (n[0] = m),
          (n[1] = f),
          (n[2] = l.height),
          (n[3] = l.rotation),
          (n[4] = l.width),
          (n[5] = l.x),
          (n[6] = l.y),
          (n[7] = h),
          (n[8] = g),
          (n[9] = c),
          (n[10] = d),
          (n[11] = s),
          (n[12] = x),
          (n[13] = t))
      } else t = n[13]
      return t
    }
    function eJ(e, t, n, i, r) {
      let l = Math.min(t, e / 4)
      return i ? { start: -n, length: n + l } : r ? { start: e - l, length: n + l } : { start: 0, length: e }
    }
    var e1 = n("VZGl")
    function e0(e, t, n, i, r = "text") {
      if (2 === n.length || ("text" === r && ("n" === n || "s" === n))) {
        let r = (0, eZ.NY)(e, n),
          l = { x: e.left + e.width / 2, y: e.top + e.height / 2 },
          a = i ? l : (0, eZ.NY)(e, { n: "s", s: "n", e: "w", w: "e", nw: "se", ne: "sw", sw: "ne", se: "nw" }[n]),
          o = r.x - a.x,
          s = r.y - a.y,
          d = Math.max(Math.min(1, Math.max(1 / e.width, 1 / e.height)), 1 + (t.x * o + t.y * s) / (o * o + s * s)),
          u = e.width * d,
          c = e.height * d
        return { ...e, width: u, height: c, left: a.x + (l.x - a.x) * d - u / 2, top: a.y + (l.y - a.y) * d - c / 2 }
      }
      return "text" === r && e.width >= 24 && ("e" === n || "w" === n)
        ? (0, e1.I)(e, t, n, i)
        : (0, eZ.yz)(e, t, n, { resizeFromCenter: i, minSize: 1 }).frame
    }
    function e2(e, t, n, i) {
      let r = [],
        l = null
      for (let [a, o] of e.entries())
        for (let e = 0; e < o.stops.length; e++) {
          let s = o.stops[e]
          s.offset <= n && (null == i || i === a) && (l = s)
          let d = o.stops[e + 1]
          null != d && s.offset >= t && d.offset <= n && r.push([s.top, d.top, d.bottom, s.bottom])
        }
      return { caret: t === n ? l : null, polygons: r }
    }
    function e3(e, t, n) {
      let i = n.x - t.x,
        r = n.y - t.y,
        l = i * i + r * r,
        a = 0 === l ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * i + (e.y - t.y) * r) / l))
      return (e.x - t.x - a * i) ** 2 + (e.y - t.y - a * r) ** 2
    }
    var e4 = n("oD0s")
    function e6(e) {
      let t,
        n,
        l,
        a,
        s,
        d,
        c,
        g,
        m,
        h,
        f,
        x,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C,
        E,
        T,
        S,
        k,
        _,
        I,
        A,
        P,
        R,
        z,
        N,
        D,
        $,
        L,
        B,
        K,
        U,
        O,
        Y,
        W,
        q,
        Z,
        X,
        G,
        V,
        Q,
        J,
        ee,
        et,
        en,
        er,
        el,
        ea,
        eo,
        es,
        ed,
        eu,
        ec,
        eg,
        em,
        eh = (0, r.c)(247),
        {
          region: ef,
          source: ex,
          fonts: ep,
          imageSize: ey,
          displayWidth: ev,
          showHover: eb,
          active: ew,
          handleHost: ej,
          canInteract: eM,
          disabled: eC,
          onSelect: eE,
          onKeyboardFocus: eT,
          onDeselect: eS,
          onDelete: ek,
          onChange: e_,
          onTranslatePreview: eI,
          onMoveStart: eA,
          onMoveEnd: eP,
          onUndo: eR,
          onRedo: ez,
          onEditEnd: eN,
        } = e,
        eD = (0, F.A)(),
        e$ = (0, u.useRef)(null),
        eL = (0, u.useRef)(null),
        eH = (0, u.useRef)(null),
        eF = (0, u.useRef)(null),
        eU = (0, u.useRef)(null),
        eO = (0, u.useRef)(null),
        [eY, eW] = (0, u.useState)(!1),
        eq = (0, u.useRef)(null),
        eG = (0, u.useRef)(null),
        eV = (0, u.useRef)(null),
        [eJ, e1] = (0, u.useState)(!1)
      eh[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { start: 0, end: 0 }), (eh[0] = t)) : (t = eh[0])
      let [e6, e8] = (0, u.useState)(t)
      eh[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (eh[1] = n)) : (n = eh[1])
      let ti = (0, u.useRef)(n)
      if (
        (eh[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = () => () => eF.current?.stop(!0)), (a = []), (eh[2] = l), (eh[3] = a))
          : ((l = eh[2]), (a = eh[3])),
        (0, u.useEffect)(l, a),
        eh[4] !== eJ
          ? ((s = () => {
              let e = e$.current,
                t = eL.current
              if (!eJ || null == e || null == t) return
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
            (d = [eJ]),
            (eh[4] = eJ),
            (eh[5] = s),
            (eh[6] = d))
          : ((s = eh[5]), (d = eh[6])),
        (0, u.useEffect)(s, d),
        eh[7] !== ew || eh[8] !== eM || eh[9] !== eC || eh[10] !== ex.items
          ? ((c = () => {
              let e = eF.current?.translationItems
              ;(ew && eM && !eC && (null == e || e === ex.items)) ||
                (eF.current?.stop(!0),
                (eG.current = null),
                eM || !ew || eC || eq.current?.(),
                (eq.current = null),
                (eO.current = null))
            }),
            (g = [ew, eM, eC, ex.items]),
            (eh[7] = ew),
            (eh[8] = eM),
            (eh[9] = eC),
            (eh[10] = ex.items),
            (eh[11] = c),
            (eh[12] = g))
          : ((c = eh[11]), (g = eh[12])),
        (0, u.useLayoutEffect)(c, g),
        eh[13] !== ef.id || eh[14] !== ef.wrapText || eh[15] !== ex.items)
      ) {
        let e
        ;(eh[19] !== ef.id ? ((e = (e) => e.id === ef.id), (eh[19] = ef.id), (eh[20] = e)) : (e = eh[20]),
          (h = ex.items.find(e)),
          (f =
            null == (m = ef.wrapText || h?.kind !== "text" || "editable" !== h.rendering.mode ? null : h.rendering)
              ? ""
              : [m.baseline, m.upper_contour, ...(m.line_layout ?? []).flatMap(e7)].filter(Boolean).join(" ")),
          (eh[13] = ef.id),
          (eh[14] = ef.wrapText),
          (eh[15] = ex.items),
          (eh[16] = m),
          (eh[17] = h),
          (eh[18] = f))
      } else ((m = eh[16]), (h = eh[17]), (f = eh[18]))
      let tr = f
      eh[21] !== ep || eh[22] !== ef || eh[23] !== ex
        ? ((x = () => {
            try {
              ti.current = (0, ei.l5)(ex, ep, ef.id)
            } catch {
              ti.current = []
            }
            let e = eH.current
            if (null != e) {
              let t = te(ef),
                n = e2(ti.current, 0, ef.text.length)
                  .polygons.filter((e) =>
                    e.some((e) => {
                      let { x: n, y: i } = t(e)
                      return n < 0 || n > ef.width || i < 0 || i > ef.height
                    }),
                  )
                  .map(e9)
                  .join(" ")
              e.setAttribute("d", n)
            }
          }),
          (eh[21] = ep),
          (eh[22] = ef),
          (eh[23] = ex),
          (eh[24] = x))
        : (x = eh[24])
      let tl = (0, u.useEffectEvent)(x)
      ;(eh[25] !== ew || eh[26] !== m || eh[27] !== tl
        ? ((p = () => {
            if (ew) return void tl()
            ;((ti.current = []), eH.current?.removeAttribute("d"))
            let e = eL.current?.parentElement
            if (null == m || null == e || "u" < typeof IntersectionObserver) return
            let t = new IntersectionObserver((e) => {
              let [n] = e
              n?.isIntersecting && (tl(), t.disconnect())
            })
            return (t.observe(e), () => t.disconnect())
          }),
          (eh[25] = ew),
          (eh[26] = m),
          (eh[27] = tl),
          (eh[28] = p))
        : (p = eh[28]),
        eh[29] !== ew || eh[30] !== m || eh[31] !== ep || eh[32] !== h || eh[33] !== ex.assets || eh[34] !== ex.snapshot
          ? ((y = [ew, h, m, ep, ex.snapshot, ex.assets]),
            (eh[29] = ew),
            (eh[30] = m),
            (eh[31] = ep),
            (eh[32] = h),
            (eh[33] = ex.assets),
            (eh[34] = ex.snapshot),
            (eh[35] = y))
          : (y = eh[35]),
        (0, u.useLayoutEffect)(p, y),
        eh[36] !== ew || eh[37] !== eJ || eh[38] !== e6 || eh[39] !== ef
          ? ((v = () => {
              let e = eU.current,
                t = e$.current
              if (null == e || null == t || (e.replaceChildren(), !ew)) return
              let n = te(ef)
              if (!eJ) return
              let i = e2(ti.current, t.selectionStart, t.selectionEnd, e6.caretLineIndex)
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
                l = n(i.caret.bottom),
                a = e.ownerDocument,
                o = a.createElementNS("http://www.w3.org/2000/svg", "path")
              if (
                (o.setAttribute("d", `M ${r.x} ${r.y} L ${l.x} ${l.y}`),
                o.setAttribute("stroke", ef.color),
                o.setAttribute("stroke-width", "1.5"),
                o.setAttribute("vector-effect", "non-scaling-stroke"),
                e.append(o),
                "u" < typeof IntersectionObserver)
              )
                return
              let s = !1,
                d = () => {
                  o.classList.toggle("blink-Zouw9D", s && !a.hidden)
                },
                u = new IntersectionObserver((e) => {
                  let [t] = e
                  ;((s = t.isIntersecting), d())
                })
              return (
                u.observe(o),
                a.addEventListener("visibilitychange", d),
                () => {
                  ;(u.disconnect(), a.removeEventListener("visibilitychange", d))
                }
              )
            }),
            (b = [ef, e6, ew, eJ]),
            (eh[36] = ew),
            (eh[37] = eJ),
            (eh[38] = e6),
            (eh[39] = ef),
            (eh[40] = v),
            (eh[41] = b))
          : ((v = eh[40]), (b = eh[41])),
        (0, u.useLayoutEffect)(v, b),
        eh[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = () => {
              let e = e$.current
              if (null != e) {
                let t = "backward" === e.selectionDirection ? e.selectionStart : e.selectionEnd
                eV.current?.offset !== t && (eV.current = null)
                let n = e.selectionStart,
                  i = e.selectionEnd,
                  r = eV.current?.lineIndex
                e8((e) =>
                  e.start === n && e.end === i && e.caretLineIndex === r ? e : { start: n, end: i, caretLineIndex: r },
                )
              }
            }),
            (eh[42] = w))
          : (w = eh[42]))
      let ta = w
      eh[43] !== ey.height || eh[44] !== ey.width
        ? ((j = (e, t) => {
            let n = e$.current?.closest("[data-image-text-surface]")
            if (null == n) return null
            let i = n.getBoundingClientRect()
            return { x: ((e - i.left) * ey.width) / i.width, y: ((t - i.top) * ey.height) / i.height }
          }),
          (eh[43] = ey.height),
          (eh[44] = ey.width),
          (eh[45] = j))
        : (j = eh[45])
      let to = j
      eh[46] !== to || eh[47] !== ef.text
        ? ((M = (e, t) => {
            let n = to(e, t)
            return null == n
              ? { offset: ef.text.length, lineIndex: 0 }
              : (function (e, t) {
                  let n = { offset: 0, lineIndex: 0 },
                    i = 1 / 0
                  for (let [r, l] of e.entries())
                    for (let e of l.stops) {
                      let l = e3(t, e.top, e.bottom)
                      l < i && ((n = { offset: e.offset, lineIndex: r }), (i = l))
                    }
                  return n
                })(ti.current, n)
          }),
          (eh[46] = to),
          (eh[47] = ef.text),
          (eh[48] = M))
        : (M = eh[48])
      let ts = M
      eh[49] !== ev || eh[50] !== to || eh[51] !== ey.width
        ? ((C = (e, t) => {
            let n = to(e, t)
            return (
              null == n ||
              null !=
                (function (e, t, n = 0) {
                  for (let i of e)
                    for (let e = 0; e < i.stops.length - 1; e++) {
                      let r = i.stops[e],
                        l = i.stops[e + 1],
                        a = [r.top, l.top, l.bottom, r.bottom],
                        o = !1
                      for (let e = 0; e < a.length; e++) {
                        let i = a[e],
                          l = a[(e + 1) % a.length]
                        if (e3(t, i, l) <= n ** 2) return r.offset
                        i.y > t.y != l.y > t.y && t.x < ((l.x - i.x) * (t.y - i.y)) / (l.y - i.y) + i.x && (o = !o)
                      }
                      if (o) return r.offset
                    }
                  return null
                })(ti.current, n, (2 * ey.width) / ev)
            )
          }),
          (eh[49] = ev),
          (eh[50] = to),
          (eh[51] = ey.width),
          (eh[52] = C))
        : (C = eh[52])
      let td = C
      eh[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (e, t, n, i) => {
            ;((void 0 !== n && n) || (eV.current = null == i ? null : { lineIndex: i, offset: t }),
              e$.current?.setSelectionRange(Math.min(e, t), Math.max(e, t), e > t ? "backward" : "forward"),
              ta())
          }),
          (eh[53] = E))
        : (E = eh[53])
      let tu = E
      eh[54] !== ef.rotation
        ? ((T = (e) => {
            let t = e.currentTarget,
              n = "backward" === t.selectionDirection,
              i = n ? t.selectionStart : t.selectionEnd,
              r = -1
            if (eV.current?.offset === i) {
              let e = ti.current[eV.current.lineIndex]
              null != e && e.start <= i && e.end >= i && (r = eV.current.lineIndex)
            }
            if (-1 === r) for (let [e, t] of ti.current.entries()) t.start <= i && t.end >= i && (r = e)
            let l = ti.current[r]
            if (null == l) return
            let a = ((ef.rotation ?? 0) * Math.PI) / 180,
              o = (e) => e.top.x * Math.cos(a) + e.top.y * Math.sin(a),
              s = l.stops.findLast((e) => e.offset <= i)
            if (null == s) return
            let d = eV.current?.x ?? o(s),
              u = "ArrowUp" === e.key ? -1 : 1,
              c = Math.max(0, Math.min(ti.current.length - 1, r + u)),
              g = ti.current[c],
              m = g.stops[0]
            if (c === r) m = u < 0 ? g.stops[0] : g.stops.at(-1)
            else {
              let e = 1 / 0
              for (let t of g.stops) {
                let n = Math.abs(o(t) - d)
                n < e && ((m = t), (e = n))
              }
            }
            if (null == m) return
            ;(e.preventDefault(), e.stopPropagation(), (eV.current = { lineIndex: c, offset: m.offset, x: d }))
            let h = m.offset
            ;(e.shiftKey && (h = n ? t.selectionEnd : t.selectionStart), tu(h, m.offset, !0))
          }),
          (eh[54] = ef.rotation),
          (eh[55] = T))
        : (T = eh[55])
      let tc = T
      eh[56] !== ts || eh[57] !== ef.text
        ? ((S = (e, t, n, i) => {
            let { offset: r, lineIndex: l } = ts(e, t),
              a = e$.current
            if (null == a) return r
            if ((a.focus({ preventScroll: !0 }), 2 === n)) return (tu(0, ef.text.length), 0)
            for (let e of eU.current?.getAnimations?.({ subtree: !0 }) ?? []) e.currentTime = 0
            let o = r
            return (
              void 0 !== i && i && (o = "backward" === a.selectionDirection ? a.selectionEnd : a.selectionStart),
              tu(o, r, !1, l),
              o
            )
          }),
          (eh[56] = ts),
          (eh[57] = ef.text),
          (eh[58] = S))
        : (S = eh[58])
      let tg = S
      eh[59] !== ef
        ? ((k = (e, t, n, i) => {
            let r = e0(e, t, n, i)
            return r.left === e.left && r.top === e.top && r.width === e.width && r.height === e.height
              ? ef
              : {
                  ...ef,
                  x: r.left,
                  y: r.top,
                  width: r.width,
                  height: r.height,
                  ...("e" === n || "w" === n ? { wrapText: !0 } : { fontSize: (ef.fontSize * r.width) / e.width }),
                }
          }),
          (eh[59] = ef),
          (eh[60] = k))
        : (k = eh[60])
      let tm = k
      eh[61] !== ew ||
      eh[62] !== eM ||
      eh[63] !== eC ||
      eh[64] !== e_ ||
      eh[65] !== ek ||
      eh[66] !== eS ||
      eh[67] !== eP ||
      eh[68] !== eA ||
      eh[69] !== ef ||
      eh[70] !== tm ||
      eh[71] !== ex
        ? ((_ = (e, t) => {
            if (e.nativeEvent.isComposing || eC || !eM) return
            if ("Escape" === e.key && null != eF.current) {
              ;(e.preventDefault(), e.stopPropagation(), eF.current.stop(!0))
              return
            }
            if (
              ew &&
              null == eF.current &&
              !(e.target instanceof HTMLTextAreaElement) &&
              ("Delete" === e.key || "Backspace" === e.key || "Escape" === e.key)
            ) {
              ;(e.preventDefault(), e.stopPropagation(), "Escape" === e.key ? eS() : ek())
              return
            }
            if ("Enter" === e.key && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && null == eF.current) {
              ;(e.preventDefault(), e$.current?.focus({ preventScroll: !0 }), tu(0, ef.text.length))
              return
            }
            if (null != eF.current || e.metaKey || e.ctrlKey || (e.altKey && null == t)) return
            let n = (0, eK.pv)(e.key, e.shiftKey)
            if (null == n) return
            let { dx: i, dy: r } = n
            ;(e.preventDefault(), e.stopPropagation())
            let l = ef
            if (null != t) {
              let n = (0, ei.yw)(ex, ef.id)
              null != n && (l = tm({ left: n.x, top: n.y, ...n }, { x: i, y: r }, t, e.altKey))
            } else l = { ...ef, x: ef.x + i, y: ef.y + r }
            l !== ef && (eA?.(), e_(l, tt(t)), eP?.(!1))
          }),
          (eh[61] = ew),
          (eh[62] = eM),
          (eh[63] = eC),
          (eh[64] = e_),
          (eh[65] = ek),
          (eh[66] = eS),
          (eh[67] = eP),
          (eh[68] = eA),
          (eh[69] = ef),
          (eh[70] = tm),
          (eh[71] = ex),
          (eh[72] = _))
        : (_ = eh[72])
      let th = _
      eh[73] !== eM ||
      eh[74] !== eC ||
      eh[75] !== ey.height ||
      eh[76] !== ey.width ||
      eh[77] !== e_ ||
      eh[78] !== eP ||
      eh[79] !== eA ||
      eh[80] !== eE ||
      eh[81] !== eI ||
      eh[82] !== ef ||
      eh[83] !== tm ||
      eh[84] !== ex
        ? ((I = (e, t, n) => {
            if (eC || !eM || null != eF.current || 0 !== e.button || !1 === e.isPrimary) return
            let i = e.currentTarget,
              r = i.closest("[data-image-text-surface]")
            if (null == r) return
            let l = (0, ei.yw)(ex, ef.id)
            if (null == l) return
            let a = { left: l.x, top: l.y, ...l }
            ;(e.preventDefault(), e.stopPropagation(), eE())
            let o = e.pointerId,
              s = r.getBoundingClientRect()
            if (s.width <= 0 || s.height <= 0) return
            let d = { x: ((e.clientX - s.left) * ey.width) / s.width, y: ((e.clientY - s.top) * ey.height) / s.height },
              u = { x: e.clientX, y: e.clientY },
              c = "rotate" === t ? (0, eZ.QX)(a, d) : 0,
              g = null == t ? eI : void 0,
              m = !1,
              h = !1,
              f = ef,
              x = (e, t) => {
                eF.current?.stop === x &&
                  ((eF.current = null),
                  eW(!1),
                  i.removeEventListener("pointermove", p),
                  i.removeEventListener("pointerup", y),
                  i.removeEventListener("pointercancel", v),
                  i.removeEventListener("lostpointercapture", v),
                  b(),
                  e || (eq.current = null),
                  h && (null != t ? e_(t) : e && null == eP && null == g && e_(ef), eP?.(e)))
              },
              p = (e) => {
                let n
                if (
                  !(e instanceof PointerEvent) ||
                  e.pointerId !== o ||
                  (!m && 2 >= Math.hypot(e.clientX - u.x, e.clientY - u.y))
                )
                  return
                ;((m = !0), (eO.current = null))
                let s = r.getBoundingClientRect(),
                  x = {
                    x: ((e.clientX - s.left) * ey.width) / s.width - d.x,
                    y: ((e.clientY - s.top) * ey.height) / s.height - d.y,
                  }
                if ("rotate" === t) {
                  let t = (0, eZ.QX)(a, { x: d.x + x.x, y: d.y + x.y }),
                    r = (0, eZ.EZ)(ef.rotation + t - c)
                  ;((n = { ...ef, rotation: e.shiftKey ? (0, eZ.Yv)(r, 15) : r }),
                    (i.style.cursor = (0, eB.SQ)((0, eZ.Aj)(a, d), n.rotation)))
                } else
                  null != t
                    ? ((n = tm(a, x, t, e.altKey)), (i.style.cursor = (0, eB.WB)(t, l.rotation) ?? ""))
                    : ((i.style.cursor = "move"),
                      e.shiftKey && (x = (0, eZ._7)(x)),
                      (n = { ...ef, x: ef.x + x.x, y: ef.y + x.y }))
                ;(n.x !== f.x ||
                  n.y !== f.y ||
                  n.width !== f.width ||
                  n.height !== f.height ||
                  n.wrapText !== f.wrapText ||
                  n.rotation !== f.rotation) &&
                  (h || ((h = !0), eW("rotate" !== t && "scale" === tt(t)), null != g ? eA?.(ef) : eA?.()),
                  (f = n),
                  null != g ? g(n) : e_(n, "rotate" === t ? void 0 : tt(t)))
              },
              y = (e) => {
                e instanceof PointerEvent &&
                  e.pointerId === o &&
                  (p(e), x(!1, null != g && (f.x !== ef.x || f.y !== ef.y) ? f : void 0), m || n?.(e))
              },
              v = () => x(!0)
            ;((eF.current = { stop: x, translationItems: null == g ? void 0 : ex.items }),
              i.addEventListener("pointermove", p),
              i.addEventListener("pointerup", y),
              i.addEventListener("pointercancel", v),
              i.addEventListener("lostpointercapture", v))
            let b = (0, e4.O)(i, e.nativeEvent, v)
            null != n || "rotate" === t ? eL.current?.focus({ preventScroll: !0 }) : i.focus({ preventScroll: !0 })
          }),
          (eh[73] = eM),
          (eh[74] = eC),
          (eh[75] = ey.height),
          (eh[76] = ey.width),
          (eh[77] = e_),
          (eh[78] = eP),
          (eh[79] = eA),
          (eh[80] = eE),
          (eh[81] = eI),
          (eh[82] = ef),
          (eh[83] = tm),
          (eh[84] = ex),
          (eh[85] = I))
        : (I = eh[85])
      let tf = I
      eh[86] !== ew ||
      eh[87] !== eM ||
      eh[88] !== eC ||
      eh[89] !== eJ ||
      eh[90] !== td ||
      eh[91] !== tf ||
      eh[92] !== ef.id ||
      eh[93] !== tg
        ? ((A = (e) => {
            if (0 !== e.button || !1 === e.isPrimary || eC || !eM) return
            let t = e$.current
            if ("touch" === e.pointerType && t?.matches(":focus") === !0) {
              let { selectionStart: e, selectionEnd: n, selectionDirection: i } = t,
                r = eV.current
              eq.current = () => {
                ;(t.focus({ preventScroll: !0 }), t.setSelectionRange(e, n, i), (eV.current = r), ta())
              }
            }
            let n = e.shiftKey ? null : (0, eX.cX)(eO.current, e, ef.id)
            eO.current = n
            let i = n?.count ?? 1
            if (!ew || !eJ || (1 === i && !td(e.clientX, e.clientY)))
              return void tf(e, void 0, (e) => {
                2 === i && tg(e.clientX, e.clientY, i)
              })
            ;(e.preventDefault(), e.stopPropagation())
            let r = tg(e.clientX, e.clientY, i, e.shiftKey)
            ;(2 !== i && (eG.current = { pointerId: e.pointerId, anchor: r }),
              e$.current?.setPointerCapture(e.pointerId))
          }),
          (eh[86] = ew),
          (eh[87] = eM),
          (eh[88] = eC),
          (eh[89] = eJ),
          (eh[90] = td),
          (eh[91] = tf),
          (eh[92] = ef.id),
          (eh[93] = tg),
          (eh[94] = A))
        : (A = eh[94])
      let tx = A,
        tp = Math.max(ev / ey.width, 1e-4)
      eh[95] !== ef.height || eh[96] !== ef.width || eh[97] !== ef.wrapText
        ? ((P = ef.wrapText ? (0, ei.Yo)(ef.width, ef.height) : null),
          (eh[95] = ef.height),
          (eh[96] = ef.width),
          (eh[97] = ef.wrapText),
          (eh[98] = P))
        : (P = eh[98])
      let ty = P
      eh[99] !== ew ||
      eh[100] !== eM ||
      eh[101] !== eC ||
      eh[102] !== eJ ||
      eh[103] !== eD ||
      eh[104] !== e_ ||
      eh[105] !== th ||
      eh[106] !== tf ||
      eh[107] !== eP ||
      eh[108] !== eA ||
      eh[109] !== ef ||
      eh[110] !== tp
        ? ((R =
            ew && !eC && eM
              ? (0, i.jsx)(eQ, {
                  frame: ef,
                  zoom: tp,
                  editingText: eJ,
                  resizeLabel: (e) => eD.formatMessage(tn[e]),
                  onRotate: (e) => {
                    null == eF.current && (eA?.(), e_({ ...ef, rotation: e }), eP?.(!1))
                  },
                  onPointerDown: tf,
                  onKeyDown: th,
                })
              : null),
          (eh[99] = ew),
          (eh[100] = eM),
          (eh[101] = eC),
          (eh[102] = eJ),
          (eh[103] = eD),
          (eh[104] = e_),
          (eh[105] = th),
          (eh[106] = tf),
          (eh[107] = eP),
          (eh[108] = eA),
          (eh[109] = ef),
          (eh[110] = tp),
          (eh[111] = R))
        : (R = eh[111])
      let tv = R
      ;(eh[112] !== ew ||
      eh[113] !== tr ||
      eh[114] !== ey.height ||
      eh[115] !== ey.width ||
      eh[116] !== ef.height ||
      eh[117] !== ef.rotation ||
      eh[118] !== ef.width ||
      eh[119] !== ef.x ||
      eh[120] !== ef.y
        ? ((z =
            !ew &&
            "" !== tr &&
            (0, i.jsx)("path", {
              "aria-hidden": !0,
              visibility: "hidden",
              pointerEvents: "none",
              d: tr,
              transform: `rotate(${ef.rotation} ${ef.x + ef.width / 2} ${ef.y + ef.height / 2}) scale(${ey.width} ${ey.height})`,
            })),
          (eh[112] = ew),
          (eh[113] = tr),
          (eh[114] = ey.height),
          (eh[115] = ey.width),
          (eh[116] = ef.height),
          (eh[117] = ef.rotation),
          (eh[118] = ef.width),
          (eh[119] = ef.x),
          (eh[120] = ef.y),
          (eh[121] = z))
        : (z = eh[121]),
        eh[122] !== ew || eh[123] !== eM || eh[124] !== eC || eh[125] !== m || eh[126] !== tx || eh[127] !== eb
          ? ((N =
              null != m &&
              (0, i.jsx)("path", {
                ref: eH,
                "aria-hidden": !0,
                className: (0, o.A)("touch-none", ew && "cursor-move", !ew && eb && "cursor-interaction"),
                fill: "transparent",
                pointerEvents: eM && !eC ? "fill" : "none",
                onPointerDown: tx,
              })),
            (eh[122] = ew),
            (eh[123] = eM),
            (eh[124] = eC),
            (eh[125] = m),
            (eh[126] = tx),
            (eh[127] = eb),
            (eh[128] = N))
          : (N = eh[128]))
      let tb = eM && "pointer-events-auto"
      eh[129] !== tb
        ? ((D = (0, o.A)("overflow-visible outline-none", tb)), (eh[129] = tb), (eh[130] = D))
        : (D = eh[130])
      let tw = ef.x,
        tj = ef.y,
        tM = ef.width,
        tC = ef.height,
        tE = `rotate(${ef.rotation} ${ef.x + ef.width / 2} ${ef.y + ef.height / 2})`,
        tT = ef.id,
        tS = ew ? "" : void 0,
        tk = eM && !eC ? 0 : -1
      ;(eh[131] !== eD || eh[132] !== ef.text
        ? (($ = ef.text || eD.formatMessage(tn.emptyText)), (eh[131] = eD), (eh[132] = ef.text), (eh[133] = $))
        : ($ = eh[133]),
        eh[134] !== ew || eh[135] !== eT || eh[136] !== eE
          ? ((L = (e) => {
              e.target === e.currentTarget &&
                (ew || eE(), null == eF.current && e.currentTarget.matches(":focus-visible") && eT())
            }),
            (eh[134] = ew),
            (eh[135] = eT),
            (eh[136] = eE),
            (eh[137] = L))
          : (L = eh[137]),
        eh[138] !== th
          ? ((B = (e) => {
              e.target === e.currentTarget && th(e)
            }),
            (eh[138] = th),
            (eh[139] = B))
          : (B = eh[139]))
      let t_ = ew && "cursor-move",
        tI = !ew && eb && "cursor-interaction"
      ;(eh[140] !== t_ || eh[141] !== tI
        ? ((K = (0, o.A)("relative h-full w-full touch-none", t_, tI)), (eh[140] = t_), (eh[141] = tI), (eh[142] = K))
        : (K = eh[142]),
        eh[143] !== tx
          ? ((U = (e) => {
              e.target === e.currentTarget && tx(e)
            }),
            (eh[143] = tx),
            (eh[144] = U))
          : (U = eh[144]),
        eh[145] !== eJ || eh[146] !== td
          ? ((O = (e) => {
              e.target === e.currentTarget &&
                null == eF.current &&
                (e.currentTarget.style.cursor = eJ && td(e.clientX, e.clientY) ? "text" : "")
            }),
            (eh[145] = eJ),
            (eh[146] = td),
            (eh[147] = O))
          : (O = eh[147]))
      let tA = ef.id,
        tP = !eJ && "pointer-events-none"
      eh[148] !== tP
        ? ((Y = (0, o.A)(
            "absolute inset-0 block h-full w-full resize-none overflow-hidden border-0 bg-transparent p-0 opacity-0 outline-none select-text",
            tP,
          )),
          (eh[148] = tP),
          (eh[149] = Y))
        : (Y = eh[149])
      let tR = `${ef.lineHeight}px`
      ;(eh[150] !== ef.fontFamily ||
      eh[151] !== ef.fontSize ||
      eh[152] !== ef.letterSpacing ||
      eh[153] !== ef.wordSpacing ||
      eh[154] !== tR
        ? ((W = {
            fontFamily: ef.fontFamily,
            fontSize: ef.fontSize,
            lineHeight: tR,
            letterSpacing: ef.letterSpacing,
            wordSpacing: ef.wordSpacing,
          }),
          (eh[150] = ef.fontFamily),
          (eh[151] = ef.fontSize),
          (eh[152] = ef.letterSpacing),
          (eh[153] = ef.wordSpacing),
          (eh[154] = tR),
          (eh[155] = W))
        : (W = eh[155]),
        eh[156] !== eD
          ? ((q = eD.formatMessage({ id: "imageTextEditing.textContent", defaultMessage: "Text content" })),
            (eh[156] = eD),
            (eh[157] = q))
          : (q = eh[157]))
      let tz = ef.wrapText ? "soft" : "off"
      ;(eh[158] !== eE
        ? ((Z = () => {
            ;(e1(!0), eE(), ta())
          }),
          (eh[158] = eE),
          (eh[159] = Z))
        : (Z = eh[159]),
        eh[160] !== eN
          ? ((X = () => {
              ;(e1(!1), eN())
            }),
            (eh[160] = eN),
            (eh[161] = X))
          : (X = eh[161]),
        eh[162] !== e_ || eh[163] !== ef
          ? ((G = (e) => {
              ;(eF.current?.stop(!1), (eV.current = null), e_({ ...ef, text: e.currentTarget.value }), ta())
            }),
            (eh[162] = e_),
            (eh[163] = ef),
            (eh[164] = G))
          : (G = eh[164]),
        eh[165] !== tc || eh[166] !== th || eh[167] !== ef.wrapText
          ? ((V = (e) => {
              if (!e.nativeEvent.isComposing) {
                if (null != eF.current) return void th(e)
                if (
                  ef.wrapText &&
                  ("ArrowUp" === e.key || "ArrowDown" === e.key) &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.altKey
                )
                  return void tc(e)
                ;(["Shift", "Control", "Alt", "Meta"].includes(e.key) || (eV.current = null),
                  "Escape" === e.key &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (eO.current = null),
                    eL.current?.focus({ preventScroll: !0 })))
              }
            }),
            (eh[165] = tc),
            (eh[166] = th),
            (eh[167] = ef.wrapText),
            (eh[168] = V))
          : (V = eh[168]),
        eh[169] !== ez || eh[170] !== eR
          ? ((Q = (e) => {
              e.nativeEvent instanceof InputEvent &&
                ("historyUndo" === e.nativeEvent.inputType || "historyRedo" === e.nativeEvent.inputType) &&
                (e.preventDefault(),
                null != eF.current ? eF.current.stop(!0) : "historyUndo" === e.nativeEvent.inputType ? eR() : ez())
            }),
            (eh[169] = ez),
            (eh[170] = eR),
            (eh[171] = Q))
          : (Q = eh[171]),
        eh[172] !== ew || eh[173] !== ts || eh[174] !== td
          ? ((J = (e) => {
              if (eG.current?.pointerId === e.pointerId) {
                let { offset: t, lineIndex: n } = ts(e.clientX, e.clientY)
                tu(eG.current.anchor, t, !1, n)
              } else
                null == eF.current && (e.currentTarget.style.cursor = !ew || td(e.clientX, e.clientY) ? "text" : "move")
            }),
            (eh[172] = ew),
            (eh[173] = ts),
            (eh[174] = td),
            (eh[175] = J))
          : (J = eh[175]),
        eh[176] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (e) => {
              !1 !== e.isPrimary && ((eG.current = null), (eq.current = null))
            }),
            (et = (e) => {
              !1 !== e.isPrimary && ((eG.current = null), eq.current?.(), (eq.current = null))
            }),
            (en = () => {
              eG.current = null
            }),
            (eh[176] = ee),
            (eh[177] = et),
            (eh[178] = en))
          : ((ee = eh[176]), (et = eh[177]), (en = eh[178])),
        eh[179] !== eC ||
        eh[180] !== tx ||
        eh[181] !== ef.id ||
        eh[182] !== ef.text ||
        eh[183] !== Y ||
        eh[184] !== W ||
        eh[185] !== q ||
        eh[186] !== tz ||
        eh[187] !== Z ||
        eh[188] !== X ||
        eh[189] !== G ||
        eh[190] !== V ||
        eh[191] !== Q ||
        eh[192] !== J
          ? ((er = (0, i.jsx)("textarea", {
              ref: e$,
              "data-image-text-input-for": tA,
              className: Y,
              style: W,
              "aria-label": q,
              disabled: eC,
              maxLength: 4e3,
              tabIndex: -1,
              spellCheck: !1,
              wrap: tz,
              value: ef.text,
              onFocus: Z,
              onBlur: X,
              onSelect: ta,
              onChange: G,
              onKeyDown: V,
              onBeforeInput: Q,
              onPointerDown: tx,
              onPointerMove: J,
              onPointerUp: ee,
              onPointerCancel: et,
              onLostPointerCapture: en,
            })),
            (eh[179] = eC),
            (eh[180] = tx),
            (eh[181] = ef.id),
            (eh[182] = ef.text),
            (eh[183] = Y),
            (eh[184] = W),
            (eh[185] = q),
            (eh[186] = tz),
            (eh[187] = Z),
            (eh[188] = X),
            (eh[189] = G),
            (eh[190] = V),
            (eh[191] = Q),
            (eh[192] = J),
            (eh[193] = er))
          : (er = eh[193]))
      let tN = ef.wrapText ? "overflow-hidden" : "overflow-visible"
      eh[194] !== tN
        ? ((el = (0, o.A)("pointer-events-none absolute inset-0 h-full w-full text-info", tN)),
          (eh[194] = tN),
          (eh[195] = el))
        : (el = eh[195])
      let tD = `0 0 ${ef.width} ${ef.height}`
      return (
        eh[196] !== ty
          ? ((ea = null == ty ? void 0 : { clipPath: `inset(${ty.top}px ${ty.right}px ${ty.bottom}px ${ty.left}px)` }),
            (eh[196] = ty),
            (eh[197] = ea))
          : (ea = eh[197]),
        eh[198] !== el || eh[199] !== tD || eh[200] !== ea
          ? ((eo = (0, i.jsx)("svg", { ref: eU, className: el, viewBox: tD, style: ea, "aria-hidden": !0 })),
            (eh[198] = el),
            (eh[199] = tD),
            (eh[200] = ea),
            (eh[201] = eo))
          : (eo = eh[201]),
        eh[202] !== eD || eh[203] !== ef.fontSize || eh[204] !== eY || eh[205] !== tp
          ? ((es =
              eY &&
              (0, i.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute bottom-full left-0 z-10 origin-bottom-left rounded-full bg-surface-elevated-secondary px-2 py-0.5 text-xs whitespace-nowrap text-default shadow",
                style: { transform: `scale(${1 / tp})` },
                children: eD.formatMessage(tn.sizeDuringDrag, {
                  size: eD.formatNumber(ef.fontSize, { maximumFractionDigits: 1 }),
                }),
              })),
            (eh[202] = eD),
            (eh[203] = ef.fontSize),
            (eh[204] = eY),
            (eh[205] = tp),
            (eh[206] = es))
          : (es = eh[206]),
        eh[207] !== ew ||
        eh[208] !== eM ||
        eh[209] !== eC ||
        eh[210] !== eJ ||
        eh[211] !== eD ||
        eh[212] !== th ||
        eh[213] !== tx ||
        eh[214] !== ef.height ||
        eh[215] !== ef.width
          ? ((ed =
              ew &&
              !eC &&
              eM &&
              (0, i.jsx)("svg", {
                className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                viewBox: `0 0 ${ef.width} ${ef.height}`,
                children: (0, i.jsx)("rect", {
                  width: ef.width,
                  height: ef.height,
                  className: "cursor-move touch-none outline-none",
                  fill: "transparent",
                  pointerEvents: eJ ? "none" : "fill",
                  role: "button",
                  tabIndex: 0,
                  "aria-label": eD.formatMessage({ id: "imageTextEditing.moveText", defaultMessage: "Move text" }),
                  onKeyDown: (e) => th(e),
                  onPointerDown: tx,
                }),
              })),
            (eh[207] = ew),
            (eh[208] = eM),
            (eh[209] = eC),
            (eh[210] = eJ),
            (eh[211] = eD),
            (eh[212] = th),
            (eh[213] = tx),
            (eh[214] = ef.height),
            (eh[215] = ef.width),
            (eh[216] = ed))
          : (ed = eh[216]),
        eh[217] !== K ||
        eh[218] !== U ||
        eh[219] !== O ||
        eh[220] !== er ||
        eh[221] !== eo ||
        eh[222] !== es ||
        eh[223] !== ed
          ? ((eu = (0, i.jsxs)("div", {
              className: K,
              onPointerDown: U,
              onPointerMove: O,
              children: [er, eo, es, ed],
            })),
            (eh[217] = K),
            (eh[218] = U),
            (eh[219] = O),
            (eh[220] = er),
            (eh[221] = eo),
            (eh[222] = es),
            (eh[223] = ed),
            (eh[224] = eu))
          : (eu = eh[224]),
        eh[225] !== ef.height ||
        eh[226] !== ef.id ||
        eh[227] !== ef.width ||
        eh[228] !== ef.x ||
        eh[229] !== ef.y ||
        eh[230] !== D ||
        eh[231] !== tE ||
        eh[232] !== tS ||
        eh[233] !== tk ||
        eh[234] !== $ ||
        eh[235] !== L ||
        eh[236] !== B ||
        eh[237] !== eu
          ? ((ec = (0, i.jsx)("foreignObject", {
              ref: eL,
              className: D,
              x: tw,
              y: tj,
              width: tM,
              height: tC,
              transform: tE,
              "data-image-text-region": tT,
              "data-image-text-selected": tS,
              tabIndex: tk,
              role: "group",
              "aria-label": $,
              onFocus: L,
              onKeyDown: B,
              onPointerDown: e5,
              children: eu,
            })),
            (eh[225] = ef.height),
            (eh[226] = ef.id),
            (eh[227] = ef.width),
            (eh[228] = ef.x),
            (eh[229] = ef.y),
            (eh[230] = D),
            (eh[231] = tE),
            (eh[232] = tS),
            (eh[233] = tk),
            (eh[234] = $),
            (eh[235] = L),
            (eh[236] = B),
            (eh[237] = eu),
            (eh[238] = ec))
          : (ec = eh[238]),
        eh[239] !== ej || eh[240] !== tv
          ? ((eg = null != tv && null != ej ? (0, H.createPortal)(tv, ej) : tv),
            (eh[239] = ej),
            (eh[240] = tv),
            (eh[241] = eg))
          : (eg = eh[241]),
        eh[242] !== z || eh[243] !== N || eh[244] !== ec || eh[245] !== eg
          ? ((em = (0, i.jsxs)(i.Fragment, { children: [z, N, ec, eg] })),
            (eh[242] = z),
            (eh[243] = N),
            (eh[244] = ec),
            (eh[245] = eg),
            (eh[246] = em))
          : (em = eh[246]),
        em
      )
    }
    function e5(e) {
      return e.stopPropagation()
    }
    function e9(e) {
      return `M ${e.map(e8).join(" L ")} Z`
    }
    function e8(e) {
      let { x: t, y: n } = e
      return `${t},${n}`
    }
    function e7(e) {
      return [e?.baseline, e?.upper_contour]
    }
    function te(e) {
      let t = -(e.rotation * Math.PI) / 180,
        n = Math.cos(t),
        i = Math.sin(t)
      return (t) => {
        let r = t.x - e.x - e.width / 2,
          l = t.y - e.y - e.height / 2
        return { x: r * n - l * i + e.width / 2, y: r * i + l * n + e.height / 2 }
      }
    }
    function tt(e) {
      if (null != e) return "e" === e || "w" === e ? "rewrap" : "scale"
    }
    let tn = (0, U.YK)({
      emptyText: { id: "imageTextEditing.emptyBoxLabel", defaultMessage: "Text" },
      sizeDuringDrag: { id: "imageTextEditing.scaledFontSize", defaultMessage: "{size} px" },
      nw: { id: "imageTextEditing.scaleFromTopLeft", defaultMessage: "Scale text from top left" },
      ne: { id: "imageTextEditing.scaleFromTopRight", defaultMessage: "Scale text from top right" },
      sw: { id: "imageTextEditing.scaleFromBottomLeft", defaultMessage: "Scale text from bottom left" },
      se: { id: "imageTextEditing.scaleFromBottomRight", defaultMessage: "Scale text from bottom right" },
      n: { id: "imageTextEditing.scaleFromTop", defaultMessage: "Scale text from top" },
      s: { id: "imageTextEditing.scaleFromBottom", defaultMessage: "Scale text from bottom" },
      e: { id: "imageTextEditing.resizeRight", defaultMessage: "Resize text from right" },
      w: { id: "imageTextEditing.resizeLeft", defaultMessage: "Resize text from left" },
    })
    function ti(e) {
      let t,
        n,
        l,
        a = (0, r.c)(17),
        { menuPlacement: o, target: s, change: d, editing: u, onEdit: g, onChange: m } = e,
        h = (0, F.A)()
      return (
        a[0] !== d ||
        a[1] !== u ||
        a[2] !== h ||
        a[3] !== o ||
        a[4] !== m ||
        a[5] !== g ||
        a[6] !== s.id ||
        a[7] !== s.kind ||
        a[8] !== s.text
          ? ((t =
              "object" === s.kind
                ? (0, i.jsx)("span", {
                    className: "group max-w-36 min-w-0 px-2 text-sm",
                    children: (0, i.jsx)(eY.E, { animateOnGroupHover: !0, dir: "auto", children: s.text }),
                  })
                : (0, i.jsxs)(eh.AM, {
                    open: u,
                    onOpenChange: g,
                    children: [
                      (0, i.jsx)(eh.Wv, {
                        asChild: !0,
                        children: (0, i.jsxs)(Y.P, {
                          color: "ghostActive",
                          size: "formatToolbar",
                          "aria-expanded": u,
                          "aria-label": h.formatMessage({
                            id: "imageTextEditing.layer.editText",
                            defaultMessage: "Edit text",
                          }),
                          children: [
                            (0, i.jsx)(x.Npl, {}),
                            (0, i.jsx)(c.A, { id: "imageTextEditing.layer.editText", defaultMessage: "Edit text" }),
                          ],
                        }),
                      }),
                      u &&
                        (0, i.jsx)(eh.hl, {
                          ...o,
                          "data-annotation-control": !0,
                          "data-image-layer-wording": !0,
                          variant: "menu",
                          size: "default",
                          className: "max-w-[calc(100vw-1rem)] text-default",
                          children: (0, i.jsx)(tr, {
                            layerId: s.id,
                            original: s.text,
                            replacement: d?.replacementText,
                            onCancel: () => g(!1),
                            onApply: (e) => {
                              ;(m({ ...d, replacementText: e }), g(!1))
                            },
                          }),
                        }),
                    ],
                  })),
            (a[0] = d),
            (a[1] = u),
            (a[2] = h),
            (a[3] = o),
            (a[4] = m),
            (a[5] = g),
            (a[6] = s.id),
            (a[7] = s.kind),
            (a[8] = s.text),
            (a[9] = t))
          : (t = a[9]),
        a[10] !== d || a[11] !== h || a[12] !== m
          ? ((n =
              d?.destination &&
              (0, i.jsx)(Y.P, {
                color: "ghostActive",
                size: "formatToolbarIcon",
                "aria-label": h.formatMessage({
                  id: "imageTextEditing.layer.resetPlacement",
                  defaultMessage: "Reset placement",
                }),
                onClick: () => m({ ...d, destination: void 0 }),
                children: (0, i.jsx)(x.O8y, {}),
              })),
            (a[10] = d),
            (a[11] = h),
            (a[12] = m),
            (a[13] = n))
          : (n = a[13]),
        a[14] !== t || a[15] !== n
          ? ((l = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (a[14] = t), (a[15] = n), (a[16] = l))
          : (l = a[16]),
        l
      )
    }
    function tr(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        g,
        h,
        f,
        x,
        p,
        y = (0, r.c)(27),
        { layerId: v, original: b, replacement: w, onCancel: j, onApply: M } = e,
        [C, E] = (0, u.useState)(w ?? b),
        T = (0, u.useId)()
      ;(y[0] !== M || y[1] !== b || y[2] !== C
        ? ((t = (e) => {
            e.preventDefault()
            let t = 0 === C.trim().length ? "" : C
            M(t === b ? void 0 : t)
          }),
          (y[0] = M),
          (y[1] = b),
          (y[2] = C),
          (y[3] = t))
        : (t = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(c.A, { id: "imageTextEditing.layer.wording", defaultMessage: "Replacement text" })),
            (y[4] = n))
          : (n = y[4]),
        y[5] !== T
          ? ((l = (0, i.jsx)("label", { htmlFor: T, className: "font-medium", children: n })), (y[5] = T), (y[6] = l))
          : (l = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (e) => E(e.currentTarget.value)), (y[7] = a))
          : (a = y[7]),
        y[8] !== T || y[9] !== v || y[10] !== C
          ? ((o = (0, i.jsx)("textarea", {
              id: T,
              "data-image-text-input-for": v,
              rows: 2,
              maxLength: 4e3,
              value: C,
              className:
                "focus-visible:outline-info min-h-16 w-full resize-y rounded-md border border-default bg-surface px-2 py-1.5 text-sm",
              onFocus: ta,
              onChange: a,
              onKeyDown: tl,
            })),
            (y[8] = T),
            (y[9] = v),
            (y[10] = C),
            (y[11] = o))
          : (o = y[11]),
        y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("span", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(c.A, {
                id: "imageTextEditing.layer.wordingHint",
                defaultMessage: "Send to update the lettering in the image.",
              }),
            })),
            (y[12] = s))
          : (s = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(c.A, { id: "imageTextEditing.layer.cancelWording", defaultMessage: "Cancel" })),
            (y[13] = d))
          : (d = y[13]),
        y[14] !== j
          ? ((g = (0, i.jsx)(m.$, { type: "button", color: "ghost", size: "toolbar", onClick: j, children: d })),
            (y[14] = j),
            (y[15] = g))
          : (g = y[15]))
      let S = C === (w ?? b)
      return (
        y[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(c.A, { id: "imageTextEditing.layer.addWording", defaultMessage: "Apply to request" })),
            (y[16] = h))
          : (h = y[16]),
        y[17] !== S
          ? ((f = (0, i.jsx)(m.$, { type: "submit", size: "toolbar", disabled: S, children: h })),
            (y[17] = S),
            (y[18] = f))
          : (f = y[18]),
        y[19] !== f || y[20] !== g
          ? ((x = (0, i.jsxs)("div", { className: "flex justify-end gap-1", children: [g, f] })),
            (y[19] = f),
            (y[20] = g),
            (y[21] = x))
          : (x = y[21]),
        y[22] !== t || y[23] !== x || y[24] !== l || y[25] !== o
          ? ((p = (0, i.jsxs)("form", {
              className: "pointer-events-auto flex flex-col gap-2 p-2",
              onSubmit: t,
              children: [l, o, s, x],
            })),
            (y[22] = t),
            (y[23] = x),
            (y[24] = l),
            (y[25] = o),
            (y[26] = p))
          : (p = y[26]),
        p
      )
    }
    function tl(e) {
      !e.nativeEvent.isComposing &&
        (e.metaKey || e.ctrlKey) &&
        "Enter" === e.key &&
        (e.preventDefault(), e.currentTarget.form?.requestSubmit())
    }
    function ta(e) {
      return e.currentTarget.select()
    }
    var to = n("j9wQ"),
      ts = n("H0ju")
    let td = (0, l.a)({
      name: "arrow-uturn-left-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.70752, y: 1.599609, width: 8.692383, height: 8.805664 },
        visualBounds: { x: 1.70752, y: 1.599609, width: 8.692383, height: 8.805664 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.70752, y: 1.599609, width: 8.692383, height: 8.805664 },
        center: { x: 6.053711, y: 6.002441 },
        insets: { top: 1.599609, right: 1.600097, bottom: 1.594727, left: 1.70752 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6.053711, y: 6.002441 }, foreground: { x: 6.053711, y: 6.002441 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.72112 1.71676C3.87733 1.56057 4.13133 1.56055 4.28753 1.71676C4.44368 1.87296 4.4437 2.12697 4.28753 2.28316L2.93304 3.63766H7.00335C8.86749 3.63766 10.3997 5.14265 10.3998 7.01363C10.3997 8.88618 8.87438 10.4052 7.00335 10.4052H4.97894C4.75828 10.405 4.57868 10.2255 4.57855 10.0048C4.57866 9.78416 4.75827 9.60564 4.97894 9.60543H7.00335C8.43411 9.60543 9.59892 8.4428 9.59905 7.01363C9.5989 5.59134 8.43256 4.43844 7.00335 4.43844H3.00921L4.28753 5.71676C4.44368 5.87296 4.4437 6.12697 4.28753 6.28316C4.13134 6.43936 3.87734 6.43932 3.72112 6.28316L1.89788 4.45992C1.64407 4.20609 1.64407 3.79384 1.89788 3.54L3.72112 1.71676Z" fill="currentColor"/>',
    })
    var tu = n("OZpX")
    let tc = (0, U.YK)({
      deleted: { id: "imageTextEditing.directTextDeleted", defaultMessage: "Deleted text" },
      wording: { id: "imageTextEditing.directTextChanged", defaultMessage: "Changed to \u201C{text}\u201D" },
      moved: { id: "imageTextEditing.editMovedTo", defaultMessage: "Moved text to ({x, number}, {y, number}) px" },
      position: { id: "imageTextEditing.editAddedPosition", defaultMessage: "Position ({x, number}, {y, number}) px" },
      size: { id: "imageTextEditing.editBoxSize", defaultMessage: "Box size {width, number} \xd7 {height, number} px" },
      font: { id: "imageTextEditing.editFontFamily", defaultMessage: "Font {name}" },
      fontSize: { id: "imageTextEditing.editFontSize", defaultMessage: "Font size {value, number} px" },
      color: { id: "imageTextEditing.editTextColor", defaultMessage: "Text color {color}" },
      gradient: { id: "imageTextEditing.editTextGradient", defaultMessage: "Gradient fill ({colors})" },
      rotation: { id: "imageTextEditing.editRotation", defaultMessage: "Rotation {value, number}\xb0" },
      alignment: {
        id: "imageTextEditing.editAlignment",
        defaultMessage: "{alignment, select, left {Aligned left} center {Aligned center} other {Aligned right}}",
      },
      lineHeight: { id: "imageTextEditing.editLineHeight", defaultMessage: "Line height {value, number}\xd7" },
      letterSpacing: { id: "imageTextEditing.editLetterSpacing", defaultMessage: "Letter spacing {value, number} px" },
      wordSpacing: { id: "imageTextEditing.editWordSpacing", defaultMessage: "Word spacing {value, number} px" },
      characterWidth: {
        id: "imageTextEditing.editCharacterWidth",
        defaultMessage: "Character width {value, number, percent}",
      },
      guides: { id: "imageTextEditing.adjustedTextGuides", defaultMessage: "Adjusted text guides" },
      layout: { id: "imageTextEditing.editTextLayout", defaultMessage: "Updated text layout" },
      order: {
        id: "imageTextEditing.editStackPosition",
        defaultMessage: "\u201C{name}\u201D moved from layer {from, number} to {to, number}",
      },
    })
    function tg(e, t) {
      return Math.abs(e - t) > 1e-9
    }
    function tm({ rendering: e }) {
      return [e.baseline, e.upper_contour, ...(e.line_layout ?? []).flatMap((e) => [e?.baseline, e?.upper_contour])]
    }
    function th(e) {
      let { width: t, height: n } = e.snapshot.content
      return e.items.flatMap((i) => {
        if ("rendering" in i && "editable" === i.rendering.mode) return []
        let r = e.assets.objectMasks?.get(i.id)
        return [
          {
            id: i.id,
            kind: "rendering" in i ? "preserved" : "object",
            text: "rendering" in i ? i.text : i.label,
            x: i.bbox.x * t,
            y: i.bbox.y * n,
            width: i.bbox.width * t,
            height: i.bbox.height * n,
            rotation: 0,
            contour: r?.path ?? ("contour" in i ? i.contour?.path : void 0),
            rasterMask: r?.raster,
          },
        ]
      })
    }
    function tf(e, t) {
      if (!e.size) return []
      let n = new Map(t.map((e) => [e.id, e]))
      return Array.from(e).flatMap(([e, t]) => {
        let i = n.get(e)
        return i?.kind == null ? [] : [{ region: i, change: t }]
      })
    }
    function tx(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height &&
        (e.rotation ?? 0) === (t.rotation ?? 0)
      )
    }
    function tp(e, { region: t, change: n }) {
      if (n.remove)
        return [
          {
            field: "remove",
            text:
              "preserved" === t.kind
                ? e.formatMessage(tv.erase)
                : e.formatMessage({
                    id: "imageTextEditing.removeImageObject",
                    defaultMessage: "Remove the object and restore the background.",
                  }),
          },
        ]
      let i = []
      null != n.replacementText &&
        i.push({
          field: "wording",
          text: n.replacementText.trim().length
            ? e.formatMessage(tv.replace, { words: n.replacementText })
            : e.formatMessage(tv.erase),
        })
      let r = n.destination
      if (
        (null != r &&
          (t.x !== r.x || t.y !== r.y) &&
          i.push({
            field: "position",
            text: e.formatMessage(
              {
                id: "imageTextEditing.requestLayerPosition",
                defaultMessage: "Move it to ({x}, {y}) pixels and restore the exposed background.",
              },
              ty(r),
            ),
          }),
        null != r &&
          (t.width !== r.width || t.height !== r.height) &&
          i.push({
            field: "size",
            text: e.formatMessage(
              {
                id: "imageTextEditing.requestLayerSize",
                defaultMessage: "Resize it to {width} \xd7 {height} pixels and restore the exposed background.",
              },
              ty(r),
            ),
          }),
        null != r && (r.rotation ?? 0) !== t.rotation)
      ) {
        let t = r.rotation ?? 0
        i.push({
          field: "rotation",
          text: e.formatMessage(
            {
              id: "imageTextEditing.rotateImageRegion",
              defaultMessage:
                "Rotate it {angle, number}\xb0 {direction, select, clockwise {clockwise} other {counterclockwise}} around its center.",
            },
            { angle: Math.abs(t), direction: t > 0 ? "clockwise" : "counterclockwise" },
          ),
        })
      }
      return i
    }
    function ty(e) {
      return {
        x: Math.round(e.x),
        y: Math.round(e.y),
        width: Math.max(1, Math.round(e.width)),
        height: Math.max(1, Math.round(e.height)),
      }
    }
    let tv = (0, U.YK)({
      source: {
        id: "imageTextEditing.layerEditSource",
        defaultMessage:
          "{kind, select, object {Object} other {Text}} \u201C{name}\u201D at ({x}, {y}), {width} \xd7 {height} pixels.",
      },
      replace: {
        id: "imageTextEditing.replaceImageWording",
        defaultMessage: "Change the lettering to \u201C{words}\u201D, matching its existing style.",
      },
      erase: {
        id: "imageTextEditing.eraseImageWording",
        defaultMessage: "Remove the lettering and restore the background.",
      },
    })
    function tb(e, t) {
      return null == t
        ? e.formatMessage({ id: "imageTextEditing.revertLayerOrder", defaultMessage: "Revert layer order" })
        : t
          ? e.formatMessage(
              { id: "imageTextEditing.revertLayerEditGroup", defaultMessage: "Revert all changes to {name}" },
              { name: t },
            )
          : e.formatMessage({ id: "imageTextEditing.revertUnnamedLayerEdit", defaultMessage: "Revert text edit" })
    }
    function tw(e) {
      let t,
        n,
        l,
        a,
        s = (0, r.c)(18),
        { changes: d, disabled: c, layout: g } = e,
        h = void 0 === g ? "nested" : g,
        p = (0, F.A)(),
        y = (0, u.useId)()
      s[0] !== p
        ? ((t = p.formatMessage({
            id: "imageTextEditing.revertIndividualChange",
            defaultMessage: "Revert this change",
          })),
          (s[0] = p),
          (s[1] = t))
        : (t = s[1])
      let v = t,
        b = "nested" === h && "-me-2 mt-1.5 space-y-0.5 border-s border-subtle ps-2"
      if (
        (s[2] !== b ? ((n = (0, o.A)("text-xs text-secondary", b)), (s[2] = b), (s[3] = n)) : (n = s[3]),
        s[4] !== d || s[5] !== c || s[6] !== h || s[7] !== y || s[8] !== v)
      ) {
        let e
        ;(s[10] !== c || s[11] !== h || s[12] !== y || s[13] !== v
          ? ((e = (e) => {
              let t = `${y}-${encodeURIComponent(e.key)}`
              return (0, i.jsxs)(
                "li",
                {
                  className: (0, o.A)(
                    "group/line-item flex min-w-0 gap-2",
                    "nested" === h ? "items-start" : "items-center py-1",
                  ),
                  children: [
                    (0, i.jsx)("span", {
                      id: t,
                      dir: "auto",
                      className: "min-w-0 flex-1 py-1 break-words whitespace-pre-wrap",
                      children: e.text,
                    }),
                    null != e.onRevert &&
                      (0, i.jsx)(m.$, {
                        type: "button",
                        "data-image-text-list-action": !0,
                        color: "nested" === h ? "ghostSecondary" : "blockAction",
                        size: "compact",
                        uniform: !0,
                        className:
                          "nested" === h
                            ? "opacity-0 group-hover/line-item:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
                            : void 0,
                        disabled: c,
                        title: v,
                        "aria-label": v,
                        "aria-describedby": t,
                        onClick: (t) => {
                          ;(0 === t.detail &&
                            t.currentTarget
                              .closest("article,section")
                              ?.querySelector("button")
                              ?.focus({ preventScroll: !0 }),
                            e.onRevert?.())
                        },
                        children: "nested" === h ? (0, i.jsx)(f.I, { asset: td }) : (0, i.jsx)(x.O8y, {}),
                      }),
                  ],
                },
                e.key,
              )
            }),
            (s[10] = c),
            (s[11] = h),
            (s[12] = y),
            (s[13] = v),
            (s[14] = e))
          : (e = s[14]),
          (l = d.map(e)),
          (s[4] = d),
          (s[5] = c),
          (s[6] = h),
          (s[7] = y),
          (s[8] = v),
          (s[9] = l))
      } else l = s[9]
      return (
        s[15] !== n || s[16] !== l
          ? ((a = (0, i.jsx)("ul", { className: n, children: l })), (s[15] = n), (s[16] = l), (s[17] = a))
          : (a = s[17]),
        a
      )
    }
    function tj(e) {
      let t,
        n,
        l = (0, r.c)(5),
        { label: a, disabled: o, onRevert: s } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, i.jsx)(x.O8y, {})), (l[0] = t)) : (t = l[0]),
        l[1] !== o || l[2] !== a || l[3] !== s
          ? ((n = (0, i.jsx)(m.$, {
              type: "button",
              color: "ghostSecondary",
              size: "compact",
              uniform: !0,
              disabled: o,
              "aria-label": a,
              title: a,
              onClick: s,
              children: t,
            })),
            (l[1] = o),
            (l[2] = a),
            (l[3] = s),
            (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    function tM(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        g = (0, r.c)(21),
        { groups: m, name: h, disabled: f, invalidDraft: x, onRevert: p } = e,
        y = (0, F.A)()
      g[0] !== m ? ((t = m.flatMap(tE)), (g[0] = m), (g[1] = t)) : (t = g[1])
      let v = t
      if (0 === v.length) return null
      ;(g[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(c.A, { id: "imageTextEditing.layerChanges", defaultMessage: "Changes" })), (g[2] = n))
        : (n = g[2]),
        g[3] !== y || g[4] !== h ? ((l = tb(y, h)), (g[3] = y), (g[4] = h), (g[5] = l)) : (l = g[5]),
        g[6] !== f || g[7] !== p || g[8] !== l
          ? ((a = (0, i.jsx)(tj, { label: l, disabled: f, onRevert: p })),
            (g[6] = f),
            (g[7] = p),
            (g[8] = l),
            (g[9] = a))
          : (a = g[9]),
        g[10] !== m ? ((o = m.map(tC)), (g[10] = m), (g[11] = o)) : (o = g[11]))
      let b = f || x
      return (
        g[12] !== v || g[13] !== b
          ? ((s = (0, i.jsx)(tw, { changes: v, disabled: b, layout: "properties" })),
            (g[12] = v),
            (g[13] = b),
            (g[14] = s))
          : (s = g[14]),
        g[15] !== o || g[16] !== s
          ? ((d = (0, i.jsxs)("div", { className: "-mt-1.5 border-s border-subtle ps-2", children: [o, s] })),
            (g[15] = o),
            (g[16] = s),
            (g[17] = d))
          : (d = g[17]),
        g[18] !== a || g[19] !== d
          ? ((u = (0, i.jsx)(tu.l, { title: n, action: a, children: d })), (g[18] = a), (g[19] = d), (g[20] = u))
          : (u = g[20]),
        u
      )
    }
    function tC(e) {
      return null == e.summary
        ? null
        : (0, i.jsx)("p", { className: "text-xs text-secondary", children: e.summary }, e.key)
    }
    function tE(e) {
      return e.changes
    }
    function tT(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        g,
        m,
        h,
        f = (0, r.c)(35),
        { edits: p, disabled: y, invalidDraft: v, selectedLayerId: b, onOpen: w, onClose: j } = e,
        M = (0, F.A)(),
        [C, E] = (0, u.useState)(null)
      f[0] !== M
        ? ((t = M.formatMessage({ id: "imageTextEditing.editsSidebarTitle", defaultMessage: "Image edits" })),
          (f[0] = M),
          (f[1] = t))
        : (t = f[1])
      let T = t
      f[2] !== p || f[3] !== C || f[4] !== b
        ? ((n = p.find((e) => e.layerId === b && e.key === C) ?? p.find((e) => e.layerId === b)),
          (f[2] = p),
          (f[3] = C),
          (f[4] = b),
          (f[5] = n))
        : (n = f[5])
      let S = n
      if (
        (f[6] !== M
          ? ((l = M.formatMessage({ id: "imageTextEditing.closeEditsSidebar", defaultMessage: "Close image edits" })),
            (f[6] = M),
            (f[7] = l))
          : (l = f[7]),
        f[8] !== j || f[9] !== l || f[10] !== T
          ? ((a = (0, i.jsx)(to.xx, { title: T, closeLabel: l, onClose: j })),
            (f[8] = j),
            (f[9] = l),
            (f[10] = T),
            (f[11] = a))
          : (a = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(x.aRI, {})),
            (s = (0, i.jsx)(c.A, { id: "imageTextEditing.emptyEditsSidebar", defaultMessage: "No image edits" })),
            (f[12] = o),
            (f[13] = s))
          : ((o = f[12]), (s = f[13])),
        f[14] !== y || f[15] !== p || f[16] !== v || f[17] !== w || f[18] !== S)
      ) {
        let e
        ;(f[20] !== y || f[21] !== v || f[22] !== w || f[23] !== S
          ? ((e = (e) => {
              let t = e.changes.length > 1 || null != e.summary
              return {
                key: e.key,
                selected: e === S,
                content: (0, i.jsxs)("div", {
                  className: t ? "px-4 pt-3" : "px-4 py-3",
                  children: [
                    (0, i.jsx)("div", {
                      dir: "auto",
                      className: "line-clamp-2 pe-7 text-base leading-5 break-words",
                      children:
                        e.target ||
                        (0, i.jsx)(c.A, { id: "imageTextEditing.unreadableRequestText", defaultMessage: "Text" }),
                    }),
                    !t &&
                      1 === e.changes.length &&
                      (0, i.jsx)("div", {
                        dir: "auto",
                        className: "mt-0.5 text-xs break-words whitespace-pre-wrap text-secondary",
                        children: e.changes[0].text,
                      }),
                  ],
                }),
                details:
                  t &&
                  (0, i.jsxs)("details", {
                    className: "group/section px-4 pt-0.5 pb-3",
                    children: [
                      (0, i.jsxs)("summary", {
                        className:
                          "flex w-fit cursor-interaction list-none items-center gap-0.5 rounded-sm text-xs text-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden",
                        children: [
                          e.summary ??
                            (0, i.jsx)(c.A, {
                              id: "imageTextEditing.expandLayerChanges",
                              defaultMessage: "{count, plural, one {# change} other {# changes}}",
                              values: { count: e.changes.length },
                            }),
                          (0, i.jsx)(x.HIf, {
                            className:
                              "-rotate-90 group-open/section:rotate-0 rtl:rotate-90 rtl:group-open/section:rotate-0",
                          }),
                        ],
                      }),
                      (0, i.jsx)(tw, { changes: e.changes, disabled: y || v }),
                    ],
                  }),
                onOpen: () => {
                  ;(E(e.key), w(e.layerId))
                },
                actions: (0, i.jsx)(tj, { label: e.revertLabel, disabled: y, onRevert: e.onRevert }),
              }
            }),
            (f[20] = y),
            (f[21] = v),
            (f[22] = w),
            (f[23] = S),
            (f[24] = e))
          : (e = f[24]),
          (d = p.map(e)),
          (f[14] = y),
          (f[15] = p),
          (f[16] = v),
          (f[17] = w),
          (f[18] = S),
          (f[19] = d))
      } else d = f[19]
      return (
        f[25] !== d
          ? ((g = (0, i.jsx)(eP, { emptyIcon: o, emptyLabel: s, rows: d })), (f[25] = d), (f[26] = g))
          : (g = f[26]),
        f[27] !== j || f[28] !== a || f[29] !== g || f[30] !== T
          ? ((m = (0, i.jsxs)(ts.D, { list: "edits", label: T, onClose: j, children: [a, g] })),
            (f[27] = j),
            (f[28] = a),
            (f[29] = g),
            (f[30] = T),
            (f[31] = m))
          : (m = f[31]),
        f[32] !== m || f[33] !== T
          ? ((h = (0, i.jsx)(to.Io, {
              open: !0,
              size: "compact",
              className: "pointer-events-auto",
              label: T,
              children: m,
            })),
            (f[32] = m),
            (f[33] = T),
            (f[34] = h))
          : (h = f[34]),
        h
      )
    }
    function tS(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g,
        m,
        h,
        f,
        x,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C,
        E,
        T,
        S = (0, r.c)(105),
        {
          target: k,
          selectionHost: _,
          destination: I,
          imageSize: A,
          displayWidth: P,
          backgroundUrl: R,
          active: z,
          showHover: N,
          canInteract: D,
          reference: $,
          onSelect: B,
          onDeselect: K,
          onKeyboardFocus: U,
          onEditText: O,
          onTransforming: Y,
          onDestination: W,
        } = e,
        q = (0, F.A)(),
        Z = (0, u.useRef)(null),
        X = (0, u.useRef)(null)
      ;(S[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => X.current?.cancel()), (n = []), (S[0] = t), (S[1] = n))
        : ((t = S[0]), (n = S[1])),
        (0, u.useLayoutEffect)(t, n),
        S[2] !== z || S[3] !== D
          ? ((l = () => {
              ;(z && D) || X.current?.cancel()
            }),
            (a = [z, D]),
            (S[2] = z),
            (S[3] = D),
            (S[4] = l),
            (S[5] = a))
          : ((l = S[4]), (a = S[5])),
        (0, u.useLayoutEffect)(l, a))
      let [G, V] = (0, u.useState)(null),
        Q = (D && z ? G : null) ?? I ?? k,
        J = P / A.width,
        ee = Q.rotation ?? 0,
        et = 0 === ee ? void 0 : `rotate(${ee} ${Q.x + Q.width / 2} ${Q.y + Q.height / 2})`
      S[6] !== Q || S[7] !== k ? ((o = tx(Q, k)), (S[6] = Q), (S[7] = k), (S[8] = o)) : (o = S[8])
      let en = !o
      S[9] !== W || S[10] !== k
        ? ((s = (e) => W(tx(e, k) ? void 0 : e)), (S[9] = W), (S[10] = k), (S[11] = s))
        : (s = S[11])
      let ei = s
      S[12] !== P || S[13] !== A.width
        ? ((d = (e) => {
            let t = e.currentTarget.ownerSVGElement?.getBoundingClientRect(),
              n = A.width / (t?.width || P)
            return { x: (e.clientX - (t?.left ?? 0)) * n, y: (e.clientY - (t?.top ?? 0)) * n }
          }),
          (S[12] = P),
          (S[13] = A.width),
          (S[14] = d))
        : (d = S[14])
      let er = d
      S[15] !== ei || S[16] !== Y
        ? ((c = (e) => {
            let t = X.current
            null == t ||
              ((X.current = null), t.releasePointer(), null != t.latest && (V(null), Y(!1), e || ei(t.latest)))
          }),
          (S[15] = ei),
          (S[16] = Y),
          (S[17] = c))
        : (c = S[17])
      let el = c
      S[18] !== D || S[19] !== el || S[20] !== Q || S[21] !== er || S[22] !== B
        ? ((g = (e, t) => {
            if (!D || null != X.current || 0 !== e.button || !1 === e.isPrimary) return
            ;(e.stopPropagation(), e.preventDefault())
            let n = e.currentTarget,
              i = () => el(!0)
            ;((X.current = {
              releasePointer: (0, e4.O)(n, e.nativeEvent, i),
              cancel: i,
              pointerId: e.pointerId,
              handle: t,
              startClientX: e.clientX,
              startClientY: e.clientY,
              startImagePoint: er(e),
              origin: Q,
              latest: null,
            }),
              (null == t || "rotate" === t ? Z.current : n)?.focus({ preventScroll: !0 }),
              B())
          }),
          (S[18] = D),
          (S[19] = el),
          (S[20] = Q),
          (S[21] = er),
          (S[22] = B),
          (S[23] = g))
        : (g = S[23])
      let ea = g
      S[24] !== z || S[25] !== D || S[26] !== el || S[27] !== er || S[28] !== Y
        ? ((m = (e) => {
            let t = X.current
            if (t?.pointerId !== e.pointerId) return
            if (!z || !D) return void el(!0)
            let n = e.clientX - t.startClientX,
              i = e.clientY - t.startClientY
            if (null == t.latest && 3 > Math.hypot(n, i)) return
            let r = er(e),
              l = { x: r.x - t.startImagePoint.x, y: r.y - t.startImagePoint.y },
              a =
                "rotate" === t.handle
                  ? (function (e, t, n, i) {
                      let { x: r, y: l, width: a, height: o } = e,
                        s = { left: r, top: l, width: a, height: o, rotation: e.rotation ?? 0 },
                        d = (0, eZ.EZ)(s.rotation + (0, eZ.QX)(s, n) - (0, eZ.QX)(s, t)),
                        u = i ? (0, eZ.Yv)(d, 15) : d
                      return { x: r, y: l, width: a, height: o, ...(u ? { rotation: u } : {}) }
                    })(t.origin, t.startImagePoint, r, e.shiftKey)
                  : tI(t.origin, t.handle, e.shiftKey && null == t.handle ? (0, eZ._7)(l) : l, e.altKey)
            ;(null != t.latest && tx(a, t.latest)) || (null == t.latest && Y(!0), (t.latest = a), V(a))
          }),
          (S[24] = z),
          (S[25] = D),
          (S[26] = el),
          (S[27] = er),
          (S[28] = Y),
          (S[29] = m))
        : (m = S[29])
      let eo = m
      S[30] !== el
        ? ((h = (e) => {
            X.current?.pointerId === e.pointerId && el(!0)
          }),
          (S[30] = el),
          (S[31] = h))
        : (h = S[31])
      let es = h
      S[32] !== z ||
      S[33] !== D ||
      S[34] !== ei ||
      S[35] !== el ||
      S[36] !== Q ||
      S[37] !== K ||
      S[38] !== O ||
      S[39] !== B
        ? ((f = (e, t) => {
            if (D && !e.nativeEvent.isComposing && !e.metaKey && !e.ctrlKey)
              if ("Escape" === e.key) (e.preventDefault(), e.stopPropagation(), null != X.current ? el(!0) : K())
              else if (null != X.current) return
              else if ("Enter" === e.key || " " === e.key)
                (e.preventDefault(), e.stopPropagation(), z && "Enter" === e.key && null != O ? O() : B())
              else {
                let n = (0, eK.pv)(e.key, e.shiftKey)
                null != n &&
                  z &&
                  (e.preventDefault(), e.stopPropagation(), ei(tI(Q, t, { x: n.dx, y: n.dy }, e.altKey)))
              }
          }),
          (S[32] = z),
          (S[33] = D),
          (S[34] = ei),
          (S[35] = el),
          (S[36] = Q),
          (S[37] = K),
          (S[38] = O),
          (S[39] = B),
          (S[40] = f))
        : (f = S[40])
      let ed = f
      S[41] !== q || S[42] !== k.text
        ? ((x = k.text || q.formatMessage(tA.text)), (S[41] = q), (S[42] = k.text), (S[43] = x))
        : (x = S[43])
      let eu = x
      S[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e) => {
            Z.current = e
          }),
          (S[44] = p))
        : (p = S[44])
      let ec = D ? 0 : -1,
        eg = z ? "" : void 0,
        em = `touch-none outline-none focus-visible:stroke-info ${z || N ? "cursor-move" : "cursor-default"}`,
        eh = D ? "fill" : "none"
      ;(S[45] !== D || S[46] !== Q || S[47] !== U || S[48] !== B
        ? ((y = (e) => {
            D && null == X.current && e.currentTarget.matches(":focus-visible") && (B(), U?.(Q))
          }),
          (S[45] = D),
          (S[46] = Q),
          (S[47] = U),
          (S[48] = B),
          (S[49] = y))
        : (y = S[49]),
        S[50] !== ea ? ((v = (e) => ea(e)), (S[50] = ea), (S[51] = v)) : (v = S[51]),
        S[52] !== ed ? ((b = (e) => ed(e)), (S[52] = ed), (S[53] = b)) : (b = S[53]))
      let ef = D ? B : void 0,
        ex = D ? O : void 0
      S[54] !== z ||
      S[55] !== eu ||
      S[56] !== ec ||
      S[57] !== eg ||
      S[58] !== em ||
      S[59] !== eh ||
      S[60] !== y ||
      S[61] !== v ||
      S[62] !== b ||
      S[63] !== ef ||
      S[64] !== ex ||
      S[65] !== k.id
        ? ((w = {
            ref: p,
            role: "button",
            tabIndex: ec,
            "aria-label": eu,
            "aria-pressed": z,
            "data-image-text-region": k.id,
            "data-image-text-selected": eg,
            className: em,
            fill: "transparent",
            pointerEvents: eh,
            onFocus: y,
            onPointerDown: v,
            onKeyDown: b,
            onClick: ef,
            onDoubleClick: ex,
          }),
          (S[54] = z),
          (S[55] = eu),
          (S[56] = ec),
          (S[57] = eg),
          (S[58] = em),
          (S[59] = eh),
          (S[60] = y),
          (S[61] = v),
          (S[62] = b),
          (S[63] = ef),
          (S[64] = ex),
          (S[65] = k.id),
          (S[66] = w))
        : (w = S[66])
      let ep = w,
        ey = N ? eu : void 0
      return (
        S[67] !== eo || S[68] !== el
          ? ((j = (e) => {
              X.current?.pointerId === e.pointerId && (eo(e), el(!1))
            }),
            (S[67] = eo),
            (S[68] = el),
            (S[69] = j))
          : (j = S[69]),
        S[70] !== R || S[71] !== Q || S[72] !== A || S[73] !== en || S[74] !== k || S[75] !== J
          ? ((M = en && (0, i.jsx)(tk, { target: k, zoom: J, move: { frame: Q, imageSize: A, backgroundUrl: R } })),
            (S[70] = R),
            (S[71] = Q),
            (S[72] = A),
            (S[73] = en),
            (S[74] = k),
            (S[75] = J),
            (S[76] = M))
          : (M = S[76]),
        S[77] !== z || S[78] !== Q || S[79] !== ep || S[80] !== et || S[81] !== k
          ? ((C =
              null != k.contour
                ? (0, i.jsx)("path", {
                    ...ep,
                    d: k.contour,
                    fillRule: "evenodd",
                    transform: t_(k, Q),
                    stroke: z ? L.l : void 0,
                    vectorEffect: "non-scaling-stroke",
                  })
                : (0, i.jsx)("rect", { ...ep, transform: et, x: Q.x, y: Q.y, width: Q.width, height: Q.height })),
            (S[77] = z),
            (S[78] = Q),
            (S[79] = ep),
            (S[80] = et),
            (S[81] = k),
            (S[82] = C))
          : (C = S[82]),
        S[83] !== z ||
        S[84] !== D ||
        S[85] !== ei ||
        S[86] !== Q ||
        S[87] !== q ||
        S[88] !== ed ||
        S[89] !== O ||
        S[90] !== $ ||
        S[91] !== et ||
        S[92] !== _ ||
        S[93] !== ea ||
        S[94] !== k.contour ||
        S[95] !== J
          ? ((E =
              z &&
              _ &&
              (0, H.createPortal)(
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("rect", {
                      ref: $,
                      transform: et,
                      x: Q.x,
                      y: Q.y,
                      width: Q.width,
                      height: Q.height,
                      fill: "transparent",
                      pointerEvents: D ? "all" : "none",
                      className: "cursor-move touch-none outline-none",
                      onPointerDown: (e) => ea(e),
                      onDoubleClick: D ? O : void 0,
                      stroke: L.l,
                      strokeOpacity: null != k.contour ? 0.45 : 1,
                      vectorEffect: "non-scaling-stroke",
                    }),
                    D &&
                      (0, i.jsx)(eQ, {
                        frame: Q,
                        zoom: J,
                        resizeLabel: (e) => q.formatMessage(tA[e]),
                        onRotate: (e) => {
                          if (null == X.current) {
                            let { x: t, y: n, width: i, height: r } = Q
                            ei({ x: t, y: n, width: i, height: r, rotation: e })
                          }
                        },
                        onPointerDown: ea,
                        onKeyDown: ed,
                      }),
                  ],
                }),
                _,
              )),
            (S[83] = z),
            (S[84] = D),
            (S[85] = ei),
            (S[86] = Q),
            (S[87] = q),
            (S[88] = ed),
            (S[89] = O),
            (S[90] = $),
            (S[91] = et),
            (S[92] = _),
            (S[93] = ea),
            (S[94] = k.contour),
            (S[95] = J),
            (S[96] = E))
          : (E = S[96]),
        S[97] !== es || S[98] !== eo || S[99] !== ey || S[100] !== j || S[101] !== M || S[102] !== C || S[103] !== E
          ? ((T = (0, i.jsxs)("g", {
              "data-image-text-hover-label": ey,
              onPointerMove: eo,
              onPointerUp: j,
              onPointerCancel: es,
              onLostPointerCapture: es,
              children: [M, C, E],
            })),
            (S[97] = es),
            (S[98] = eo),
            (S[99] = ey),
            (S[100] = j),
            (S[101] = M),
            (S[102] = C),
            (S[103] = E),
            (S[104] = T))
          : (T = S[104]),
        T
      )
    }
    function tk(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g,
        m,
        h = (0, r.c)(39),
        { target: f, zoom: x, move: p } = e,
        y = (0, u.useId)(),
        v = 10 / x,
        b = `url(#${y}-clip)`,
        w = null != p || void 0,
        j = `${y}-check`
      h[0] !== v
        ? ((t = (0, i.jsx)("rect", { width: v, height: v, fill: "var(--color-media-foreground)" })),
          (h[0] = v),
          (h[1] = t))
        : (t = h[1])
      let M = `M 0 0 h ${v / 2} v ${v / 2} H 0 z M ${v / 2} ${v / 2} h ${v / 2} v ${v / 2} h ${-v / 2} z`
      ;(h[2] !== M
        ? ((n = (0, i.jsx)("path", { d: M, fill: "var(--color-media-scrim)", opacity: 0.1 })), (h[2] = M), (h[3] = n))
        : (n = h[3]),
        h[4] !== j || h[5] !== t || h[6] !== n || h[7] !== v
          ? ((l = (0, i.jsxs)("pattern", {
              id: j,
              patternUnits: "userSpaceOnUse",
              width: v,
              height: v,
              children: [t, n],
            })),
            (h[4] = j),
            (h[5] = t),
            (h[6] = n),
            (h[7] = v),
            (h[8] = l))
          : (l = h[8]))
      let C = `${y}-clip`
      ;(h[9] !== f.contour || h[10] !== f.height || h[11] !== f.width || h[12] !== f.x || h[13] !== f.y
        ? ((a =
            null != f.contour
              ? (0, i.jsx)("path", { d: f.contour, clipRule: "evenodd" })
              : (0, i.jsx)("rect", { x: f.x, y: f.y, width: f.width, height: f.height })),
          (h[9] = f.contour),
          (h[10] = f.height),
          (h[11] = f.width),
          (h[12] = f.x),
          (h[13] = f.y),
          (h[14] = a))
        : (a = h[14]),
        h[15] !== C || h[16] !== a
          ? ((o = (0, i.jsx)("clipPath", { id: C, children: a })), (h[15] = C), (h[16] = a), (h[17] = o))
          : (o = h[17]),
        h[18] !== l || h[19] !== o
          ? ((s = (0, i.jsxs)("defs", { children: [l, o] })), (h[18] = l), (h[19] = o), (h[20] = s))
          : (s = h[20]))
      let E = `url(#${y}-check)`
      return (
        h[21] !== E || h[22] !== f.height || h[23] !== f.width || h[24] !== f.x || h[25] !== f.y
          ? ((d = (0, i.jsx)("rect", { x: f.x, y: f.y, width: f.width, height: f.height, fill: E, opacity: 0.5 })),
            (h[21] = E),
            (h[22] = f.height),
            (h[23] = f.width),
            (h[24] = f.x),
            (h[25] = f.y),
            (h[26] = d))
          : (d = h[26]),
        h[27] !== b || h[28] !== d
          ? ((c = (0, i.jsx)("g", { clipPath: b, children: d })), (h[27] = b), (h[28] = d), (h[29] = c))
          : (c = h[29]),
        h[30] !== b || h[31] !== p || h[32] !== f
          ? ((g =
              null != p &&
              (0, i.jsx)("g", {
                transform: t_(f, p.frame),
                children: (0, i.jsx)("g", {
                  clipPath: b,
                  children: (0, i.jsx)("image", {
                    href: p.backgroundUrl,
                    width: p.imageSize.width,
                    height: p.imageSize.height,
                    opacity: 0.88,
                  }),
                }),
              })),
            (h[30] = b),
            (h[31] = p),
            (h[32] = f),
            (h[33] = g))
          : (g = h[33]),
        h[34] !== w || h[35] !== s || h[36] !== c || h[37] !== g
          ? ((m = (0, i.jsxs)("g", {
              "aria-hidden": "true",
              className: "pointer-events-none",
              "data-image-layer-move-preview": w,
              children: [s, c, g],
            })),
            (h[34] = w),
            (h[35] = s),
            (h[36] = c),
            (h[37] = g),
            (h[38] = m))
          : (m = h[38]),
        m
      )
    }
    function t_(e, t) {
      let n = t.x + t.width / 2,
        i = t.y + t.height / 2
      return `rotate(${t.rotation ?? 0} ${n} ${i}) translate(${t.x} ${t.y}) scale(${t.width / e.width} ${t.height / e.height}) translate(${-e.x} ${-e.y})`
    }
    function tI(e, t, n, i) {
      let { x: r, y: l, width: a, height: o, rotation: s } = e
      if (null == t) return { x: r + n.x, y: l + n.y, width: a, height: o, ...(s ? { rotation: s } : {}) }
      let d = e0({ left: r, top: l, width: a, height: o, rotation: s ?? 0 }, n, t, i, "image")
      return { x: d.left, y: d.top, width: d.width, height: d.height, ...(s ? { rotation: s } : {}) }
    }
    let tA = (0, U.YK)({
      text: { id: "imageTextEditing.layer.emptyText", defaultMessage: "Text" },
      w: { id: "imageTextEditing.layer.resizeW", defaultMessage: "Resize from left" },
      e: { id: "imageTextEditing.layer.resizeE", defaultMessage: "Resize from right" },
      s: { id: "imageTextEditing.layer.resizeS", defaultMessage: "Resize from bottom" },
      n: { id: "imageTextEditing.layer.resizeN", defaultMessage: "Resize from top" },
      nw: { id: "imageTextEditing.layer.resizeNW", defaultMessage: "Resize from top left" },
      ne: { id: "imageTextEditing.layer.resizeNE", defaultMessage: "Resize from top right" },
      sw: { id: "imageTextEditing.layer.resizeSW", defaultMessage: "Resize from bottom left" },
      se: { id: "imageTextEditing.layer.resizeSE", defaultMessage: "Resize from bottom right" },
    })
    var tP = n("HGfI"),
      tR = n("ZII9"),
      tz = n("psL3")
    function tN(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        g,
        m,
        h,
        x,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C,
        E,
        T,
        S,
        k,
        I,
        A = (0, r.c)(67),
        { items: P, id: R, neighbors: z, onChange: N } = e,
        D = (0, F.A)()
      if (A[0] !== R || A[1] !== P || A[2] !== z) {
        let e, i, r
        ;((l = P.filter(_.gW)),
          A[7] !== R ? ((e = (e) => e.id === R), (A[7] = R), (A[8] = e)) : (e = A[8]),
          (n = l.findIndex(e)))
        let o = z?.id === R && z.items === P ? z : void 0
        ;(A[9] !== o?.backward ? ((i = (e) => e.id === o?.backward), (A[9] = o?.backward), (A[10] = i)) : (i = A[10]),
          (t = l.findIndex(i)),
          A[11] !== o?.forward ? ((r = (e) => e.id === o?.forward), (A[11] = o?.forward), (A[12] = r)) : (r = A[12]),
          (a = l.findIndex(r)),
          (A[0] = R),
          (A[1] = P),
          (A[2] = z),
          (A[3] = t),
          (A[4] = n),
          (A[5] = l),
          (A[6] = a))
      } else ((t = A[3]), (n = A[4]), (l = A[5]), (a = A[6]))
      let $ = a
      A[13] !== n || A[14] !== P || A[15] !== N || A[16] !== l
        ? ((o = (e) => {
            let t = l.toSpliced(n, 1).toSpliced(e, 0, l[n])
            N((0, _.sh)(P, t))
          }),
          (A[13] = n),
          (A[14] = P),
          (A[15] = N),
          (A[16] = l),
          (A[17] = o))
        : (o = A[17])
      let L = o
      ;(A[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(c.A, { id: "imageTextEditing.stackingOrder", defaultMessage: "Text Stacking Order" })),
          (A[18] = s))
        : (s = A[18]),
        A[19] !== D
          ? ((d = D.formatMessage({ id: "imageTextEditing.sendToBack", defaultMessage: "Send to back" })),
            (A[19] = D),
            (A[20] = d))
          : (d = A[20]))
      let B = t < 0
      ;(A[21] !== L ? ((u = () => L(0)), (A[21] = L), (A[22] = u)) : (u = A[22]),
        A[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(f.I, { asset: tP.R })), (A[23] = g))
          : (g = A[23]),
        A[24] !== d || A[25] !== B || A[26] !== u
          ? ((m = (0, i.jsx)(Y.P, {
              color: "outlineGhost",
              size: "menuRow",
              "aria-label": d,
              disabled: B,
              onClick: u,
              children: g,
            })),
            (A[24] = d),
            (A[25] = B),
            (A[26] = u),
            (A[27] = m))
          : (m = A[27]),
        A[28] !== D
          ? ((h = D.formatMessage({ id: "imageTextEditing.sendBackward", defaultMessage: "Send backward" })),
            (A[28] = D),
            (A[29] = h))
          : (h = A[29]))
      let K = t < 0
      ;(A[30] !== t || A[31] !== L ? ((x = () => L(t)), (A[30] = t), (A[31] = L), (A[32] = x)) : (x = A[32]),
        A[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)("span", {
              className: "truncate",
              children: (0, i.jsx)(c.A, { id: "imageTextEditing.backwardLabel", defaultMessage: "Backward" }),
            })),
            (A[33] = p))
          : (p = A[33]),
        A[34] !== K || A[35] !== x || A[36] !== h
          ? ((y = (0, i.jsx)(Y.P, {
              color: "outlineGhost",
              size: "menuRow",
              className: "min-w-0 flex-1 justify-center",
              "aria-label": h,
              disabled: K,
              onClick: x,
              children: p,
            })),
            (A[34] = K),
            (A[35] = x),
            (A[36] = h),
            (A[37] = y))
          : (y = A[37]),
        A[38] !== y || A[39] !== m
          ? ((v = (0, i.jsxs)(tz.e, { children: [m, y] })), (A[38] = y), (A[39] = m), (A[40] = v))
          : (v = A[40]),
        A[41] !== D
          ? ((b = D.formatMessage({ id: "imageTextEditing.bringForward", defaultMessage: "Bring forward" })),
            (A[41] = D),
            (A[42] = b))
          : (b = A[42]))
      let H = $ < 0
      ;(A[43] !== $ || A[44] !== L ? ((w = () => L($)), (A[43] = $), (A[44] = L), (A[45] = w)) : (w = A[45]),
        A[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)("span", {
              className: "truncate",
              children: (0, i.jsx)(c.A, { id: "imageTextEditing.forwardLabel", defaultMessage: "Forward" }),
            })),
            (A[46] = j))
          : (j = A[46]),
        A[47] !== b || A[48] !== H || A[49] !== w
          ? ((M = (0, i.jsx)(Y.P, {
              color: "outlineGhost",
              size: "menuRow",
              className: "min-w-0 flex-1 justify-center",
              "aria-label": b,
              disabled: H,
              onClick: w,
              children: j,
            })),
            (A[47] = b),
            (A[48] = H),
            (A[49] = w),
            (A[50] = M))
          : (M = A[50]),
        A[51] !== D
          ? ((C = D.formatMessage({ id: "imageTextEditing.bringToFront", defaultMessage: "Bring to front" })),
            (A[51] = D),
            (A[52] = C))
          : (C = A[52]))
      let U = $ < 0
      return (
        A[53] !== L || A[54] !== l.length
          ? ((E = () => L(l.length - 1)), (A[53] = L), (A[54] = l.length), (A[55] = E))
          : (E = A[55]),
        A[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, i.jsx)(f.I, { asset: tR.U })), (A[56] = T))
          : (T = A[56]),
        A[57] !== C || A[58] !== U || A[59] !== E
          ? ((S = (0, i.jsx)(Y.P, {
              color: "outlineGhost",
              size: "menuRow",
              "aria-label": C,
              disabled: U,
              onClick: E,
              children: T,
            })),
            (A[57] = C),
            (A[58] = U),
            (A[59] = E),
            (A[60] = S))
          : (S = A[60]),
        A[61] !== M || A[62] !== S
          ? ((k = (0, i.jsxs)(tz.e, { children: [M, S] })), (A[61] = M), (A[62] = S), (A[63] = k))
          : (k = A[63]),
        A[64] !== v || A[65] !== k
          ? ((I = (0, i.jsx)(tu.l, {
              title: s,
              children: (0, i.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [v, k] }),
            })),
            (A[64] = v),
            (A[65] = k),
            (A[66] = I))
          : (I = A[66]),
        I
      )
    }
    var tD = n("y8tV")
    let t$ = ["fontId", "fontSize", "alignment", "width"],
      tL = ["lineHeight", "letterSpacing", "wordSpacing", "horizontalScale"]
    function tB(e) {
      let { width: t, height: n } = e.snapshot.content
      return e.items.flatMap((i) => {
        if ("text" !== i.kind || "editable" !== i.rendering.mode) return []
        let r = i.rendering,
          l = e.assets.fonts.find((e) => e.id === r.font_id)
        return null == l
          ? []
          : [
              {
                id: i.id,
                text: i.text,
                x: i.bbox.x * t,
                y: i.bbox.y * n,
                width: i.bbox.width * t,
                height: i.bbox.height * n,
                fontFamily: l.family,
                fontId: l.id,
                fontSize: r.font_size,
                lineHeight: r.line_height ?? 1.2 * r.font_size,
                color: r.color,
                alignment: (0, ei.IR)(i, t, n),
                rotation: r.rotation,
                letterSpacing: r.letter_spacing ?? 0,
                wordSpacing: r.word_spacing ?? 0,
                horizontalScale: r.horizontal_scale ?? 1,
                wrapText: (0, ei.ET)(r),
              },
            ]
      })
    }
    function tK(e, t, n, i, r, l) {
      let a =
          r.lineHeight === i.lineHeight && r.fontSize !== i.fontSize
            ? (i.lineHeight * r.fontSize) / i.fontSize
            : r.lineHeight,
        o = {
          ...n,
          font_id: r.fontId,
          font_size: r.fontSize,
          color: r.color,
          align: l || r.alignment !== i.alignment ? r.alignment : n.align,
          rotation: r.rotation,
          ...(a !== i.lineHeight ? { line_height: a } : {}),
          ...(r.horizontalScale !== i.horizontalScale ? { horizontal_scale: r.horizontalScale } : {}),
          ...(r.letterSpacing !== i.letterSpacing ? { letter_spacing: r.letterSpacing } : {}),
          ...(r.wordSpacing !== i.wordSpacing ? { word_spacing: r.wordSpacing } : {}),
          fill_gradient: r.color !== i.color ? null : n.fill_gradient,
        }
      return (
        l && !i.wrapText
          ? (o = { ...o, ...ei.N$ })
          : !i.wrapText &&
            (r.text !== i.text || [...t$, ...tL].some((e) => r[e] !== i[e])) &&
            (o = (0, ei.qD)(e, r.id, o, r.text, { previous: i.alignment, next: r.alignment })),
        { ...t, text: r.text, rendering: o }
      )
    }
    function tH(e) {
      let t,
        n,
        l = (0, r.c)(6),
        { preparing: a, previewSrc: o } = e,
        s = (0, F.A)()
      return (
        l[0] !== s || l[1] !== a
          ? ((t = a
              ? s.formatMessage({
                  id: "imageTextEditing.preparingAccessible",
                  defaultMessage: "Preparing image layers",
                })
              : s.formatMessage({ id: "imageTextEditing.loadingAccessible", defaultMessage: "Loading image layers" })),
            (l[0] = s),
            (l[1] = a),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== o || l[4] !== t
          ? ((n = (0, i.jsx)(T.o, { presentation: "image-preview", previewSrc: o, ariaLabel: t })),
            (l[3] = o),
            (l[4] = t),
            (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    let tF = (0, l.a)({
        name: "paintbrush-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 3, y: 3.09668, width: 17.903687, height: 17.903564 },
          visualBounds: { x: 3, y: 3.09668, width: 17.903687, height: 17.903564 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3, y: 3.09668, width: 17.903687, height: 17.903564 },
          center: { x: 11.951844, y: 12.048462 },
          insets: { top: 3.09668, right: 3.096313, bottom: 2.999756, left: 3 },
          anchors: {
            frame: { x: 12, y: 12 },
            ink: { x: 11.951844, y: 12.048462 },
            foreground: { x: 11.951844, y: 12.048462 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M16.3409 3.59397C17.5144 2.78573 19.0594 2.99921 20.0304 3.96994C21.0013 4.94083 21.2146 6.48581 20.4063 7.6594C18.0086 11.1404 14.9036 14.195 11.4962 16.6379C11.4978 16.6866 11.5001 16.7354 11.5001 16.7844C11.5001 18.7733 10.1159 20.5953 8.05771 20.8684C7.81036 20.9012 7.56558 20.9296 7.33603 20.9485C6.61979 21.0073 5.71907 21.0064 5.01474 20.9924C4.65929 20.9853 4.34687 20.9749 4.12314 20.966C4.01118 20.9616 3.92074 20.9572 3.85849 20.9543C3.8274 20.9529 3.80281 20.9522 3.78622 20.9514C3.77827 20.951 3.77199 20.9506 3.76767 20.9504C3.76576 20.9503 3.76393 20.9495 3.76279 20.9494H3.76083C3.37787 20.9291 3.07115 20.6234 3.05087 20.2405V20.2375C3.05081 20.2364 3.04999 20.2346 3.04989 20.2326C3.04967 20.2283 3.04932 20.2221 3.04892 20.2141C3.0481 20.1975 3.04744 20.1729 3.04599 20.1418C3.04309 20.0796 3.03869 19.9892 3.03427 19.8772C3.02544 19.6534 3.01497 19.3411 3.0079 18.9856C2.99391 18.2812 2.99299 17.3805 3.05185 16.6643C3.07072 16.4347 3.0991 16.19 3.13193 15.9426C3.40501 13.8844 5.22703 12.5003 7.21591 12.5002C7.26458 12.5002 7.31314 12.5015 7.36142 12.5031C9.80428 9.09584 12.86 5.99169 16.3409 3.59397ZM7.21591 14.0002C5.89026 14.0003 4.78114 14.9123 4.61825 16.1399C4.58772 16.37 4.56325 16.5892 4.54697 16.7873C4.4947 17.4236 4.49411 18.2604 4.5079 18.9553C4.51165 19.144 4.51759 19.3204 4.52255 19.4768C4.67917 19.4818 4.85596 19.4886 5.04501 19.4924C5.73986 19.5062 6.57676 19.5056 7.21298 19.4533C7.4111 19.4371 7.63035 19.4126 7.86044 19.3821C9.08807 19.2192 10.0001 18.1101 10.0001 16.7844C9.99985 15.2468 8.75346 14.0005 7.21591 14.0002ZM18.9698 5.03049C18.4734 4.53426 17.7278 4.46069 17.1925 4.82932C14.0401 7.00064 11.2389 9.78932 8.95224 12.8684C9.92167 13.2989 10.7012 14.0778 11.1319 15.0471C14.2108 12.7605 16.9998 9.96007 19.171 6.80783C19.5396 6.27242 19.4662 5.52688 18.9698 5.03049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      tU = (0, n("ISAq").Y)(
        (0, l.l)(tF, {
          attributes: {
            color: "#202124",
            stroke: "white",
            "stroke-width": 1.5,
            "stroke-linejoin": "round",
            "paint-order": "stroke fill",
          },
        }),
      ),
      tO = `url("${tU}") 3 21, crosshair`
    function tY(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g,
        m,
        h = (0, r.c)(23),
        { region: f, onApply: x } = e,
        p = (0, F.A)(),
        y = (0, u.useRef)(null)
      ;(h[0] !== p || h[1] !== f.text
        ? ((t = f.text
            ? p.formatMessage(
                { id: "imageTextEditing.paintTarget", defaultMessage: "Apply formatting to {text}" },
                { text: f.text },
              )
            : p.formatMessage({
                id: "imageTextEditing.emptyPaintTarget",
                defaultMessage: "Apply formatting to empty text box",
              })),
          (h[0] = p),
          (h[1] = f.text),
          (h[2] = t))
        : (t = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = { cursor: tO }), (h[3] = n)) : (n = h[3]))
      let v = `rotate(${f.rotation} ${f.x + f.width / 2} ${f.y + f.height / 2})`
      return (
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (e) => {
              0 === e.button &&
                !1 !== e.isPrimary &&
                (e.stopPropagation(),
                (y.current = { id: e.pointerId, x: e.clientX, y: e.clientY }),
                e.currentTarget.focus({ preventScroll: !0 }))
            }),
            (a = (e) => {
              let t = y.current
              null != t && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 4 && (y.current = null)
            }),
            (o = () => {
              y.current = null
            }),
            (s = () => {
              y.current = null
            }),
            (h[4] = l),
            (h[5] = a),
            (h[6] = o),
            (h[7] = s))
          : ((l = h[4]), (a = h[5]), (o = h[6]), (s = h[7])),
        h[8] !== x
          ? ((c = (e) => {
              y.current?.id === e.pointerId && ((y.current = null), e.stopPropagation(), x())
            }),
            (g = (e) => {
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
            (h[8] = x),
            (h[9] = d),
            (h[10] = c),
            (h[11] = g))
          : ((d = h[9]), (c = h[10]), (g = h[11])),
        h[12] !== f.height ||
        h[13] !== f.id ||
        h[14] !== f.width ||
        h[15] !== f.x ||
        h[16] !== f.y ||
        h[17] !== t ||
        h[18] !== d ||
        h[19] !== v ||
        h[20] !== c ||
        h[21] !== g
          ? ((m = (0, i.jsx)("rect", {
              role: "button",
              tabIndex: 0,
              "aria-label": t,
              "data-image-text-region": f.id,
              className:
                "pointer-events-auto stroke-transparent text-blue outline-none hover:stroke-current focus-visible:stroke-current",
              style: n,
              x: f.x,
              y: f.y,
              width: f.width,
              height: f.height,
              transform: v,
              fill: "transparent",
              vectorEffect: "non-scaling-stroke",
              strokeWidth: 2,
              onPointerDown: l,
              onPointerMove: a,
              onPointerLeave: o,
              onPointerCancel: s,
              onPointerUp: c,
              onClick: g,
              onKeyDown: d,
            })),
            (h[12] = f.height),
            (h[13] = f.id),
            (h[14] = f.width),
            (h[15] = f.x),
            (h[16] = f.y),
            (h[17] = t),
            (h[18] = d),
            (h[19] = v),
            (h[20] = c),
            (h[21] = g),
            (h[22] = m))
          : (m = h[22]),
        m
      )
    }
    function tW(e) {
      let t,
        n,
        l,
        a,
        o = (0, r.c)(5),
        { onCancel: s } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, i.jsx)(x.Xio, {})), (o[0] = t)) : (t = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)("span", {
              role: "status",
              children: (0, i.jsx)(c.A, {
                id: "imageTextEditing.selectFormatTarget",
                defaultMessage: "Select another text layer to apply this formatting.",
              }),
            })),
            (o[1] = n))
          : (n = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(c.A, { id: "imageTextEditing.cancelPainter", defaultMessage: "Cancel" })), (o[2] = l))
          : (l = o[2]),
        o[3] !== s
          ? ((a = (0, i.jsx)(eR, {
              centered: !0,
              icon: t,
              label: n,
              action: (0, i.jsx)(m.$, { color: "outline", size: "dialog", onClick: s, children: l }),
            })),
            (o[3] = s),
            (o[4] = a))
          : (a = o[4]),
        a
      )
    }
    var tq = n("zLIa"),
      tZ = n("TPBT")
    function tX(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        c,
        g,
        m,
        h,
        f,
        x,
        p,
        y,
        v = (0, r.c)(49),
        { frame: b, maxScaleHeight: w, disabled: j, onChange: M } = e,
        C = (0, F.A)()
      ;(v[0] !== C
        ? ((t = C.formatMessage({ id: "imageTextEditing.frameX", defaultMessage: "X position" })),
          (v[0] = C),
          (v[1] = t))
        : (t = v[1]),
        v[2] !== M ? ((n = (e) => M("x", e)), (v[2] = M), (v[3] = n)) : (n = v[3]),
        v[4] !== b.x || v[5] !== t || v[6] !== n
          ? ((l = (0, i.jsx)(ef, { label: t, value: b.x, suffix: "px", min: -Number.MAX_SAFE_INTEGER, onChange: n })),
            (v[4] = b.x),
            (v[5] = t),
            (v[6] = n),
            (v[7] = l))
          : (l = v[7]),
        v[8] !== C
          ? ((a = C.formatMessage({ id: "imageTextEditing.frameY", defaultMessage: "Y position" })),
            (v[8] = C),
            (v[9] = a))
          : (a = v[9]),
        v[10] !== M ? ((o = (e) => M("y", e)), (v[10] = M), (v[11] = o)) : (o = v[11]),
        v[12] !== b.y || v[13] !== a || v[14] !== o
          ? ((s = (0, i.jsx)(ef, { label: a, value: b.y, suffix: "px", min: -Number.MAX_SAFE_INTEGER, onChange: o })),
            (v[12] = b.y),
            (v[13] = a),
            (v[14] = o),
            (v[15] = s))
          : (s = v[15]),
        v[16] !== C
          ? ((d = C.formatMessage({ id: "imageTextEditing.frameWidth", defaultMessage: "Width" })),
            (v[16] = C),
            (v[17] = d))
          : (d = v[17]),
        v[18] !== M ? ((u = (e) => M("width", e)), (v[18] = M), (v[19] = u)) : (u = v[19]),
        v[20] !== b.width || v[21] !== d || v[22] !== u
          ? ((c = (0, i.jsx)(ef, { label: d, value: b.width, suffix: "px", min: 1, onChange: u })),
            (v[20] = b.width),
            (v[21] = d),
            (v[22] = u),
            (v[23] = c))
          : (c = v[23]),
        v[24] !== C || v[25] !== w
          ? ((g =
              null == w
                ? C.formatMessage({ id: "imageTextEditing.requestHeight", defaultMessage: "Height" })
                : C.formatMessage({ id: "imageTextEditing.frameHeight", defaultMessage: "Scale to height" })),
            (v[24] = C),
            (v[25] = w),
            (v[26] = g))
          : (g = v[26]),
        v[27] !== M ? ((m = (e) => M("height", e)), (v[27] = M), (v[28] = m)) : (m = v[28]),
        v[29] !== b.height || v[30] !== w || v[31] !== g || v[32] !== m
          ? ((h = (0, i.jsx)(ef, { label: g, value: b.height, suffix: "px", min: 1, max: w, onChange: m })),
            (v[29] = b.height),
            (v[30] = w),
            (v[31] = g),
            (v[32] = m),
            (v[33] = h))
          : (h = v[33]),
        v[34] !== C
          ? ((f = C.formatMessage({ id: "imageTextEditing.rotation", defaultMessage: "Rotation" })),
            (v[34] = C),
            (v[35] = f))
          : (f = v[35]))
      let E = b.rotation ?? 0
      return (
        v[36] !== M ? ((x = (e) => M("rotation", e)), (v[36] = M), (v[37] = x)) : (x = v[37]),
        v[38] !== f || v[39] !== E || v[40] !== x
          ? ((p = (0, i.jsx)(ef, { label: f, suffix: "\xb0", value: E, min: -180, max: 180, onChange: x })),
            (v[38] = f),
            (v[39] = E),
            (v[40] = x),
            (v[41] = p))
          : (p = v[41]),
        v[42] !== j || v[43] !== h || v[44] !== p || v[45] !== l || v[46] !== s || v[47] !== c
          ? ((y = (0, i.jsxs)("fieldset", { disabled: j, className: "grid min-w-0", children: [l, s, c, h, p] })),
            (v[42] = j),
            (v[43] = h),
            (v[44] = p),
            (v[45] = l),
            (v[46] = s),
            (v[47] = c),
            (v[48] = y))
          : (y = v[48]),
        y
      )
    }
    var tG = n("y6fH")
    let tV = { align: "start", side: "bottom", collisionBoundary: void 0 }
    function tQ(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u,
        g,
        h,
        x = (0, r.c)(25),
        { source: p, selected: y, onChange: v, guideControls: b, onStartPainter: w } = e
      ;(x[0] !== v || x[1] !== y || x[2] !== p
        ? ((t = (0, i.jsx)(ev, {
            children: (0, i.jsx)("div", {
              className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
              children: (0, i.jsx)(ew, { inPanel: !0, source: p, selected: y, onChange: v, menuPlacement: tV }),
            }),
          })),
          (x[0] = v),
          (x[1] = y),
          (x[2] = p),
          (x[3] = t))
        : (t = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)("span", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(c.A, { id: "imageTextEditing.fontSize", defaultMessage: "Font size" }),
            })),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== v || x[6] !== y
          ? ((l = (0, i.jsxs)("div", {
              className: "grid min-w-0 gap-1",
              children: [
                n,
                (0, i.jsx)(ev, {
                  children: (0, i.jsx)(eE, { inPanel: !0, selected: y, menuPlacement: tV, onChange: v }),
                }),
              ],
            })),
            (x[5] = v),
            (x[6] = y),
            (x[7] = l))
          : (l = x[7]),
        x[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)("span", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(c.A, { id: "presentationEditor.alignment", defaultMessage: "Alignment" }),
            })),
            (x[8] = a))
          : (a = x[8]),
        x[9] !== v || x[10] !== y
          ? ((o = (0, i.jsxs)("div", {
              className: "grid min-w-0 gap-1",
              children: [a, (0, i.jsx)(eS, { selected: y, onChange: v })],
            })),
            (x[9] = v),
            (x[10] = y),
            (x[11] = o))
          : (o = x[11]))
      let j = null == w
      return (
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(f.I, { asset: tG._ })),
            (d = (0, i.jsx)(c.A, { id: "imageTextEditing.formatPainter", defaultMessage: "Format Painter" })),
            (x[12] = s),
            (x[13] = d))
          : ((s = x[12]), (d = x[13])),
        x[14] !== w || x[15] !== j
          ? ((u = (0, i.jsxs)(m.$, {
              className: "col-start-2 w-full",
              size: "menuRow",
              color: "ghostSecondary",
              disabled: j,
              onClick: w,
              children: [s, d],
            })),
            (x[14] = w),
            (x[15] = j),
            (x[16] = u))
          : (u = x[16]),
        x[17] !== b || x[18] !== l || x[19] !== o || x[20] !== u
          ? ((g = (0, i.jsxs)("div", { className: "grid grid-cols-2 items-end gap-2", children: [l, o, b, u] })),
            (x[17] = b),
            (x[18] = l),
            (x[19] = o),
            (x[20] = u),
            (x[21] = g))
          : (g = x[21]),
        x[22] !== t || x[23] !== g
          ? ((h = (0, i.jsxs)("div", { className: "grid min-w-0 gap-2", children: [t, g] })),
            (x[22] = t),
            (x[23] = g),
            (x[24] = h))
          : (h = x[24]),
        h
      )
    }
    function tJ(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        g,
        h,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C = (0, r.c)(81),
        {
          source: E,
          selected: T,
          open: S,
          onChange: k,
          onEditEnd: _,
          guideControls: I,
          onComment: A,
          editingGuides: P,
          onExitGuides: R,
          onCancelPainter: z,
          onStartPainter: N,
          layerOrderControls: D,
          target: L,
          request: B,
          onChangeRequest: K,
          editBlock: H,
          onAddText: U,
          sendingRequest: O,
          takeNewTextFocus: Y,
          onDeleteSelected: W,
          onClose: q,
        } = e,
        Z = (0, F.A)(),
        X = (0, u.useId)(),
        G = (0, u.useId)(),
        V = (0, u.useId)(),
        Q = T ?? B?.destination ?? L,
        J = null != z
      C[0] !== Q || C[1] !== k || C[2] !== K || C[3] !== B || C[4] !== T || C[5] !== L
        ? ((t = (e, t) => {
            if (null != T)
              if ("width" === e) k({ ...T, width: t, wrapText: !0 }, void 0, "rewrap")
              else if ("height" === e) {
                let e = t / T.height
                k({ ...T, width: T.width * e, height: t, fontSize: T.fontSize * e }, void 0, "scale")
              } else k({ ...T, [e]: t })
            else if (null != L && null != Q) {
              let { x: n, y: i, width: r, height: l, rotation: a } = Q,
                o = { x: n, y: i, width: r, height: l, rotation: a, [e]: t }
              K(L.id, { ...B, destination: tx(L, o) ? void 0 : o })
            }
          }),
          (C[0] = Q),
          (C[1] = k),
          (C[2] = K),
          (C[3] = B),
          (C[4] = T),
          (C[5] = L),
          (C[6] = t))
        : (t = C[6])
      let ee = t,
        [et, en] = (0, u.useState)(null)
      ;(C[7] !== S || C[8] !== et
        ? ((n = () => {
            if (!S || null == et) return
            let e = et.ownerDocument.activeElement
            et.contains(e) ||
              (e instanceof HTMLTextAreaElement && e.closest("[data-image-text-region]")) ||
              et.focus({ preventScroll: !0 })
          }),
          (C[7] = S),
          (C[8] = et),
          (C[9] = n))
        : (n = C[9]),
        C[10] !== S || C[11] !== J || C[12] !== et
          ? ((l = [S, et, J]), (C[10] = S), (C[11] = J), (C[12] = et), (C[13] = l))
          : (l = C[13]),
        (0, u.useLayoutEffect)(n, l))
      let ei = (0, u.useRef)(null)
      C[14] !== S || C[15] !== T || C[16] !== Y
        ? ((a = () => {
            S && T?.id != null && Y(T.id) && (ei.current?.focus(), ei.current?.select())
          }),
          (C[14] = S),
          (C[15] = T),
          (C[16] = Y),
          (C[17] = a))
        : (a = C[17])
      let er = T?.id
      ;(C[18] !== S || C[19] !== er || C[20] !== Y
        ? ((o = [S, er, Y]), (C[18] = S), (C[19] = er), (C[20] = Y), (C[21] = o))
        : (o = C[21]),
        (0, u.useLayoutEffect)(a, o),
        C[22] !== Z ? ((s = Z.formatMessage(t1.title)), (C[22] = Z), (C[23] = s)) : (s = C[23]))
      let el = E.snapshot.reference.document_id
      ;(C[24] !== P || C[25] !== z || C[26] !== q || C[27] !== R
        ? ((d = (e) => {
            "Escape" !== e.key ||
              e.defaultPrevented ||
              e.nativeEvent.isComposing ||
              (e.preventDefault(), e.stopPropagation(), P ? R() : null != z ? z() : q())
          }),
          (C[24] = P),
          (C[25] = z),
          (C[26] = q),
          (C[27] = R),
          (C[28] = d))
        : (d = C[28]),
        C[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(c.A, { ...t1.title })), (C[29] = g))
          : (g = C[29]),
        C[30] !== Z
          ? ((h = Z.formatMessage({
              id: "imageTextEditing.closeLayerProperties",
              defaultMessage: "Close Layer Properties",
            })),
            (C[30] = Z),
            (C[31] = h))
          : (h = C[31]),
        C[32] !== q || C[33] !== h || C[34] !== X
          ? ((p = (0, i.jsx)(tZ.x, { titleId: X, title: g, closeLabel: h, onClose: q })),
            (C[32] = q),
            (C[33] = h),
            (C[34] = X),
            (C[35] = p))
          : (p = C[35]))
      let ea =
        null == Q || J || P
          ? "flex min-h-0 flex-1 flex-col"
          : "grid min-h-0 flex-1 auto-rows-max grid-cols-1 content-start divide-y divide-border-subtle overflow-y-auto px-4 [&>section]:pb-3 [&>section+section]:pt-2"
      C[36] !== z ? ((y = null != z && (0, i.jsx)(tW, { onCancel: z })), (C[36] = z), (C[37] = y)) : (y = C[37])
      let eo = P && I
      return (
        C[38] !== ee ||
        C[39] !== H ||
        C[40] !== P ||
        C[41] !== Q ||
        C[42] !== I ||
        C[43] !== Z ||
        C[44] !== D ||
        C[45] !== U ||
        C[46] !== k ||
        C[47] !== K ||
        C[48] !== _ ||
        C[49] !== N ||
        C[50] !== J ||
        C[51] !== B ||
        C[52] !== V ||
        C[53] !== T ||
        C[54] !== O ||
        C[55] !== E ||
        C[56] !== L ||
        C[57] !== G
          ? ((v =
              !P &&
              !J &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  null != T &&
                    (0, i.jsxs)(
                      u.Fragment,
                      {
                        children: [
                          (0, i.jsxs)(tu.l, {
                            children: [
                              (0, i.jsx)(tq.TM, {
                                ref: ei,
                                "data-image-text-input-for": T.id,
                                value: T.text,
                                variant: "compact",
                                rows: 2,
                                maxLength: 4e3,
                                "aria-label": Z.formatMessage({
                                  id: "imageTextEditing.textContent",
                                  defaultMessage: "Text content",
                                }),
                                onChange: (e) => k({ ...T, text: e.currentTarget.value }, `text-${T.id}`),
                                onBlur: _,
                              }),
                              (0, i.jsx)(tQ, {
                                source: E,
                                selected: T,
                                onChange: k,
                                guideControls: I,
                                onStartPainter: N,
                              }),
                            ],
                          }),
                          (0, i.jsx)(tu.l, {
                            title: (0, i.jsx)(c.A, {
                              id: "imageTextEditing.spacingSection",
                              defaultMessage: "Spacing",
                            }),
                            children: (0, i.jsxs)("div", {
                              className: "grid min-w-0",
                              children: [
                                (0, i.jsx)(ef, {
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.lineHeight",
                                    defaultMessage: "Line height",
                                  }),
                                  suffix: "\xd7",
                                  value: T.lineHeight / T.fontSize,
                                  step: 0.1,
                                  min: 0.1,
                                  max: 10,
                                  onChange: (e) => k({ ...T, lineHeight: e * T.fontSize }),
                                }),
                                (0, i.jsx)(ef, {
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.letterSpacing",
                                    defaultMessage: "Letter spacing",
                                  }),
                                  suffix: "px",
                                  value: T.letterSpacing,
                                  min: -1e3,
                                  max: 1e3,
                                  onChange: (e) => k({ ...T, letterSpacing: e }),
                                }),
                                (0, i.jsx)(ef, {
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.wordSpacing",
                                    defaultMessage: "Word spacing",
                                  }),
                                  suffix: "px",
                                  value: T.wordSpacing,
                                  min: -1e3,
                                  max: 1e3,
                                  onChange: (e) => k({ ...T, wordSpacing: e }),
                                }),
                                (0, i.jsx)(ef, {
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.horizontalScale",
                                    defaultMessage: "Character width",
                                  }),
                                  suffix: "%",
                                  value: 100 * T.horizontalScale,
                                  min: 1,
                                  max: 1e3,
                                  onChange: (e) => k({ ...T, horizontalScale: e / 100 }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      T.id,
                    ),
                  null != L &&
                    (0, i.jsxs)(tu.l, {
                      children: [
                        "preserved" === L.kind
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("label", {
                                  htmlFor: G,
                                  className: "text-xs text-secondary",
                                  children: (0, i.jsx)(c.A, {
                                    id: "imageTextEditing.layer.wording",
                                    defaultMessage: "Replacement text",
                                  }),
                                }),
                                (0, i.jsx)(
                                  tq.TM,
                                  {
                                    id: G,
                                    "data-image-text-input-for": L.id,
                                    "aria-describedby": V,
                                    variant: "compact",
                                    rows: 2,
                                    maxLength: 4e3,
                                    disabled: O,
                                    value: B?.replacementText ?? L.text,
                                    onChange: (e) =>
                                      K(L.id, {
                                        ...B,
                                        replacementText:
                                          e.currentTarget.value === L.text ? void 0 : e.currentTarget.value,
                                      }),
                                  },
                                  L.id,
                                ),
                              ],
                            })
                          : (0, i.jsx)("span", {
                              dir: "auto",
                              className: "text-sm font-medium break-words",
                              children: L.text,
                            }),
                        (0, i.jsx)("p", {
                          id: V,
                          className: "text-xs text-secondary",
                          children:
                            "object" === L.kind
                              ? (0, i.jsx)(c.A, {
                                  id: "imageTextEditing.requestedObjectHint",
                                  defaultMessage:
                                    "Adjust position and size, or add a comment for other changes. Choose Send to apply your edits.",
                                })
                              : (0, i.jsx)(c.A, {
                                  id: "imageTextEditing.requestedLayerHint",
                                  defaultMessage: "Changes to this layer are applied when you send the image edit.",
                                }),
                        }),
                      ],
                    }),
                  null != Q &&
                    (0, i.jsx)(tu.l, {
                      title: (0, i.jsx)(c.A, {
                        id: "imageTextEditing.transformSection",
                        defaultMessage: "Position & size",
                      }),
                      children: (0, i.jsx)(
                        tX,
                        {
                          frame: Q,
                          maxScaleHeight: null == T ? void 0 : (8192 / T.fontSize) * T.height,
                          onChange: ee,
                          disabled: null != L && O,
                        },
                        T?.id ?? L?.id,
                      ),
                    }),
                  D,
                  H,
                  null == Q &&
                    (0, i.jsx)(eR, {
                      centered: !0,
                      icon: (0, i.jsx)(x.vxf, {}),
                      label: (0, i.jsx)(c.A, {
                        id: "imageTextEditing.selectLayerProperties",
                        defaultMessage: "Select a layer to view its properties",
                      }),
                      action:
                        null != U &&
                        (0, i.jsxs)(m.$, {
                          size: "dialog",
                          color: "outline",
                          onClick: U,
                          children: [
                            (0, i.jsx)(x.D_h, {}),
                            (0, i.jsx)(c.A, { id: "imageTextEditing.add", defaultMessage: "Add text" }),
                          ],
                        }),
                    }),
                ],
              })),
            (C[38] = ee),
            (C[39] = H),
            (C[40] = P),
            (C[41] = Q),
            (C[42] = I),
            (C[43] = Z),
            (C[44] = D),
            (C[45] = U),
            (C[46] = k),
            (C[47] = K),
            (C[48] = _),
            (C[49] = N),
            (C[50] = J),
            (C[51] = B),
            (C[52] = V),
            (C[53] = T),
            (C[54] = O),
            (C[55] = E),
            (C[56] = L),
            (C[57] = G),
            (C[58] = v))
          : (v = C[58]),
        C[59] !== ea || C[60] !== y || C[61] !== eo || C[62] !== v
          ? ((b = (0, i.jsxs)("div", { className: ea, children: [y, eo, v] })),
            (C[59] = ea),
            (C[60] = y),
            (C[61] = eo),
            (C[62] = v),
            (C[63] = b))
          : (b = C[63]),
        C[64] !== P || C[65] !== Q || C[66] !== A || C[67] !== W || C[68] !== J
          ? ((w =
              !J &&
              !P &&
              null != Q &&
              (0, i.jsxs)("footer", {
                className: "grid shrink-0 grid-cols-2 gap-x-2 gap-y-0.5 border-t border-border-subtle px-3 py-2",
                children: [
                  (0, i.jsxs)(m.$, {
                    size: "menuRow",
                    color: "ghostActive",
                    className: "justify-start",
                    onClick: A,
                    children: [
                      (0, i.jsx)(f.I, { asset: $.g }),
                      (0, i.jsx)(c.A, { id: "imageTextEditing.addComment", defaultMessage: "Add comment" }),
                    ],
                  }),
                  (0, i.jsxs)(m.$, {
                    size: "menuRow",
                    color: "ghostDanger",
                    className: "justify-start",
                    disabled: null == W,
                    onClick: W,
                    children: [
                      (0, i.jsx)(x.cSG, {}),
                      (0, i.jsx)(c.A, { id: "imageTextEditing.deleteBlock", defaultMessage: "Delete" }),
                    ],
                  }),
                ],
              })),
            (C[64] = P),
            (C[65] = Q),
            (C[66] = A),
            (C[67] = W),
            (C[68] = J),
            (C[69] = w))
          : (w = C[69]),
        C[70] !== E.snapshot.reference.document_id ||
        C[71] !== p ||
        C[72] !== b ||
        C[73] !== w ||
        C[74] !== d ||
        C[75] !== X
          ? ((j = (0, i.jsxs)("div", {
              ref: en,
              className: "flex min-h-0 flex-1 flex-col outline-none select-none",
              role: "group",
              tabIndex: -1,
              "aria-labelledby": X,
              "data-image-text-controls": el,
              onKeyDown: d,
              children: [p, b, w],
            })),
            (C[70] = E.snapshot.reference.document_id),
            (C[71] = p),
            (C[72] = b),
            (C[73] = w),
            (C[74] = d),
            (C[75] = X),
            (C[76] = j))
          : (j = C[76]),
        C[77] !== S || C[78] !== j || C[79] !== s
          ? ((M = (0, i.jsx)(tZ.I, {
              open: S,
              size: "compact",
              className: "pointer-events-auto",
              label: s,
              children: j,
            })),
            (C[77] = S),
            (C[78] = j),
            (C[79] = s),
            (C[80] = M))
          : (M = C[80]),
        M
      )
    }
    let t1 = (0, U.YK)({ title: { id: "imageTextEditing.layerProperties", defaultMessage: "Layer Properties" } })
    function t0(e, t, n, i) {
      let r = e.closest("[data-image-text-stage]")
      if (null == r || null == t.adjustViewport) return
      let l = r.getBoundingClientRect(),
        a = e.getBoundingClientRect()
      if (l.width <= 0 || l.height <= 0) return
      let { width: o, height: s } = i.snapshot.content,
        { imageRect: d } = t,
        u = n.x + n.width / 2,
        c = n.y + n.height / 2,
        g = (n.rotation * Math.PI) / 180,
        m = (Math.abs(Math.cos(g)) * n.width + Math.abs(Math.sin(g)) * n.height) / 2,
        h = (Math.abs(Math.sin(g)) * n.width + Math.abs(Math.cos(g)) * n.height) / 2,
        f = u - m,
        x = u + m,
        p = c - h,
        y = c + h
      if ("wrapText" in n && !n.wrapText)
        try {
          for (let e of (0, ei.l5)(i, i.assets.fonts, n.id))
            for (let t of e.stops)
              ((f = Math.min(f, t.top.x, t.bottom.x)),
                (x = Math.max(x, t.top.x, t.bottom.x)),
                (p = Math.min(p, t.top.y, t.bottom.y)),
                (y = Math.max(y, t.top.y, t.bottom.y)))
        } catch (e) {
          if (!(e instanceof ei.Zo)) throw e
        }
      let v = {
          left: d.left + (f / o) * d.width,
          top: d.top + (p / s) * d.height,
          width: ((x - f) / o) * d.width,
          height: ((y - p) / s) * d.height,
        },
        b = Math.min(12, l.width / 8, l.height / 8),
        w = (function (e, t, n) {
          let i = Math.min(1, n.width / Math.max(1, t.width), n.height / Math.max(1, t.height))
          function r(e, t, n, r, l, a) {
            let o = e + t / 2,
              s = o + (n - o) * i
            return s < l ? l - s : -Math.max(0, s + r * i - l - a)
          }
          return {
            factor: i,
            x: r(e.left, e.width, t.left, t.width, n.left, n.width),
            y: r(e.top, e.height, t.top, t.height, n.top, n.height),
          }
        })(d, v, {
          left: l.left - a.left + b,
          top: l.top - a.top + b,
          width: l.width - 2 * b,
          height: l.height - 2 * b,
        })
      ;(1 !== w.factor || 0 !== w.x || 0 !== w.y) && t.adjustViewport(w.factor, { x: w.x, y: w.y })
    }
    n("dVA2")
    var t2 = n("yC2B"),
      t3 = n("arh8"),
      t4 = n("vywK"),
      t6 = n("wxik"),
      t5 = n("LlLD"),
      t9 = n("cfKE"),
      t8 = n("MpOq"),
      t7 = n("pFXa"),
      ne = n("PwDu"),
      nt = n("PpSX"),
      nn = n("tgP9"),
      ni = n("JjB1"),
      nr = n("YwjY"),
      nl = n("QnK7")
    function na(e) {
      let t,
        n,
        l,
        a,
        s,
        u,
        g,
        h,
        f,
        x,
        p,
        y,
        v,
        b,
        w,
        j,
        M,
        C,
        E,
        T,
        S = (0, r.c)(42),
        { value: k, onChange: _, onCancel: I, onDelete: A, onSave: P } = e,
        R = (0, F.A)()
      S[0] !== k ? ((t = k.trim()), (S[0] = k), (S[1] = t)) : (t = S[1])
      let z = t
      S[2] !== z || S[3] !== P
        ? ((n = () => {
            z && P(z)
          }),
          (S[2] = z),
          (S[3] = P),
          (S[4] = n))
        : (n = S[4])
      let N = n
      ;(S[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { height: d.bUX }), (a = (0, o.A)(ni.Fn, "top-2 right-4 bottom-[52px]")), (S[5] = l), (S[6] = a))
        : ((l = S[5]), (a = S[6])),
        S[7] !== R
          ? ((s = R.formatMessage({ id: "imageSidePanel.editCommentInput", defaultMessage: "Edit comment" })),
            (S[7] = R),
            (S[8] = s))
          : (s = S[8]),
        S[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, o.A)(ni.Eb, "h-full resize-none border-0 bg-transparent !outline-none")), (S[9] = u))
          : (u = S[9]),
        S[10] !== _ ? ((g = (e) => _(e.currentTarget.value)), (S[10] = _), (S[11] = g)) : (g = S[11]),
        S[12] !== N
          ? ((h = (e) => {
              "Enter" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), e.stopPropagation(), N())
            }),
            (S[12] = N),
            (S[13] = h))
          : (h = S[13]),
        S[14] !== s || S[15] !== g || S[16] !== h || S[17] !== k
          ? ((f = (0, i.jsx)("div", {
              className: a,
              children: (0, i.jsx)("div", {
                className: "h-full min-h-0 translate-y-0.5",
                children: (0, i.jsx)("textarea", {
                  autoFocus: !0,
                  "aria-label": s,
                  className: u,
                  value: k,
                  onChange: g,
                  onKeyDown: h,
                }),
              }),
            })),
            (S[14] = s),
            (S[15] = g),
            (S[16] = h),
            (S[17] = k),
            (S[18] = f))
          : (f = S[18]),
        S[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, o.A)(ni.xB, "justify-between")), (S[19] = x))
          : (x = S[19]),
        S[20] !== R
          ? ((p = R.formatMessage({ id: "imageSidePanel.deleteComment", defaultMessage: "Delete comment" })),
            (S[20] = R),
            (S[21] = p))
          : (p = S[21]),
        S[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(nl.A, { className: "icon-sm" })), (S[22] = y))
          : (y = S[22]),
        S[23] !== A || S[24] !== p
          ? ((v = (0, i.jsx)(m.$, {
              "aria-label": p,
              color: "ghostMuted",
              size: "composer",
              uniform: !0,
              onClick: A,
              children: y,
            })),
            (S[23] = A),
            (S[24] = p),
            (S[25] = v))
          : (v = S[25]),
        S[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(c.A, { id: "imageSidePanel.cancelCommentEdit", defaultMessage: "Cancel" })), (S[26] = b))
          : (b = S[26]),
        S[27] !== I
          ? ((w = (0, i.jsx)(m.$, { color: "outline", size: "composer", onClick: I, children: b })),
            (S[27] = I),
            (S[28] = w))
          : (w = S[28]))
      let D = !z
      return (
        S[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)(c.A, { id: "imageSidePanel.saveCommentEdit", defaultMessage: "Save" })), (S[29] = j))
          : (j = S[29]),
        S[30] !== N || S[31] !== D
          ? ((M = (0, i.jsx)(m.$, { color: "primary", disabled: D, size: "composer", onClick: N, children: j })),
            (S[30] = N),
            (S[31] = D),
            (S[32] = M))
          : (M = S[32]),
        S[33] !== w || S[34] !== M
          ? ((C = (0, i.jsxs)("div", { className: "flex items-center gap-1.5", children: [w, M] })),
            (S[33] = w),
            (S[34] = M),
            (S[35] = C))
          : (C = S[35]),
        S[36] !== v || S[37] !== C
          ? ((E = (0, i.jsxs)("div", { className: x, children: [v, C] })), (S[36] = v), (S[37] = C), (S[38] = E))
          : (E = S[38]),
        S[39] !== E || S[40] !== f
          ? ((T = (0, i.jsxs)(nr.o, { className: "relative", style: l, children: [f, E] })),
            (S[39] = E),
            (S[40] = f),
            (S[41] = T))
          : (T = S[41]),
        T
      )
    }
    var no = n("e4Ws")
    let ns = "[data-image-text-list-panel]",
      nd = `[data-viewer-zoom-control], [data-image-text-request], [data-image-text-discard], ${ns}`
    function nu(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g,
        m = (0, r.c)(35),
        {
          style: h,
          containerElement: f,
          isPanReady: x,
          review: p,
          selectedExcerpt: y,
          onSave: v,
          onDelete: b,
          onClose: w,
          surface: j,
          onSurfaceChange: M,
        } = e,
        C = (0, F.A)(),
        E = (0, u.useRef)(!1),
        [T] = (0, u.useState)(p),
        S = T?.body ?? "",
        [k, _] = (0, u.useState)(S),
        I = T?.excerpt ?? y
      m[0] !== k || m[1] !== S || m[2] !== x || m[3] !== w || m[4] !== j
        ? ((t = (e) => {
            let t = e.target
            return (
              !(x || 0 !== e.button || (!nf(t) && nx(t, nd))) &&
              (!j || e.composedPath().includes(j)
                ? ((E.current = !1), !1)
                : k.trim() === S.trim() || E.current
                  ? (w(), !1)
                  : ((E.current = !0), (0, ne.AE)(j), e.preventDefault(), e.stopPropagation(), !0))
            )
          }),
          (m[0] = k),
          (m[1] = S),
          (m[2] = x),
          (m[3] = w),
          (m[4] = j),
          (m[5] = t))
        : (t = m[5])
      let A = (0, u.useEffectEvent)(t)
      ;(m[6] !== f.ownerDocument || m[7] !== A
        ? ((n = () => {
            let e = f.ownerDocument,
              t = !1,
              n = (e) => {
                t = A(e)
              },
              i = (e) => {
                ;(t && e.detail > 0
                  ? (e.preventDefault(), e.stopPropagation())
                  : 0 === e.detail && nf(e.target) && A(e),
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
          (m[6] = f.ownerDocument),
          (m[7] = A),
          (m[8] = n))
        : (n = m[8]),
        m[9] !== f ? ((l = [f]), (m[9] = f), (m[10] = l)) : (l = m[10]),
        (0, u.useEffect)(n, l),
        m[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (e) => {
              ;((E.current = !1), _(e))
            }),
            (m[11] = a))
          : (a = m[11]))
      let P = a
      m[12] !== I || m[13] !== T?.body || m[14] !== w || m[15] !== v
        ? ((o = (e) => {
            T?.body === e ? w() : v(e, I)
          }),
          (m[12] = I),
          (m[13] = T?.body),
          (m[14] = w),
          (m[15] = v),
          (m[16] = o))
        : (o = m[16])
      let R = o
      m[17] !== C
        ? ((s = C.formatMessage({ id: "imageSidePanel.addComment", defaultMessage: "Add comment" })),
          (m[17] = C),
          (m[18] = s))
        : (s = m[18])
      let z = s
      return (
        m[19] !== w
          ? ((d = (e) => {
              if ("Escape" === e.key || "Enter" === e.key) {
                if (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode) return void e.stopPropagation()
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), w())
              }
            }),
            (m[19] = w),
            (m[20] = d))
          : (d = m[20]),
        m[21] !== z ||
        m[22] !== k ||
        m[23] !== I ||
        m[24] !== T ||
        m[25] !== C ||
        m[26] !== w ||
        m[27] !== b ||
        m[28] !== R
          ? ((c = T
              ? (0, i.jsx)(na, { value: k, onChange: P, onCancel: w, onDelete: b, onSave: R })
              : (0, i.jsx)(t7.h, {
                  mode: "create",
                  canAssignToChatGpt: !1,
                  labels: {
                    input: z,
                    submit: z,
                    placeholder: I
                      ? C.formatMessage(
                          {
                            id: "imageTextEditing.addExcerptCommentPlaceholder",
                            defaultMessage: 'Comment on "{excerpt}"\u2026',
                          },
                          { excerpt: I },
                        )
                      : C.formatMessage({
                          id: "artifactComments.newCommentPlaceholder",
                          defaultMessage: "Add a comment",
                        }),
                  },
                  renderInput: nc,
                  value: k,
                  onChange: P,
                  onCancel: w,
                  onSubmit: (e) => {
                    let { body: t } = e
                    return (R(t), !0)
                  },
                })),
            (m[21] = z),
            (m[22] = k),
            (m[23] = I),
            (m[24] = T),
            (m[25] = C),
            (m[26] = w),
            (m[27] = b),
            (m[28] = R),
            (m[29] = c))
          : (c = m[29]),
        m[30] !== M || m[31] !== h || m[32] !== d || m[33] !== c
          ? ((g = (0, i.jsx)("div", {
              className: "pointer-events-auto absolute z-10",
              ref: M,
              "data-annotation-control": !0,
              style: h,
              onPointerDown: ng,
              onKeyDownCapture: d,
              children: c,
            })),
            (m[30] = M),
            (m[31] = h),
            (m[32] = d),
            (m[33] = c),
            (m[34] = g))
          : (g = m[34]),
        g
      )
    }
    function nc(e) {
      return (0, i.jsx)(nt.q, { ...e })
    }
    function ng(e) {
      return e.stopPropagation()
    }
    function nm(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        g,
        m,
        h,
        f,
        x = (0, r.c)(38),
        {
          noteId: p,
          targetBounds: y,
          boundary: v,
          collisionPadding: b,
          side: w,
          windowZoom: j,
          target: M,
          body: C,
          number: E,
          onEscape: T,
          onEdit: S,
          onDelete: k,
          onDismiss: _,
        } = e,
        I = (0, F.A)(),
        A = (0, u.useRef)(null)
      ;(x[0] !== _
        ? ((t = (e) => {
            e || _()
          }),
          (x[0] = _),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== y
          ? ((n = (0, i.jsx)(eh.dT, {
              asChild: !0,
              children: (0, i.jsx)("span", { "aria-hidden": !0, className: "pointer-events-none absolute", style: y }),
            })),
            (x[2] = y),
            (x[3] = n))
          : (n = x[3]),
        x[4] !== I || x[5] !== E
          ? ((l = I.formatMessage(
              { id: "imageTextEditing.numberedComment", defaultMessage: "Comment {number}" },
              { number: E },
            )),
            (x[4] = I),
            (x[5] = E),
            (x[6] = l))
          : (l = x[6]))
      let P = "right" === w ? "start" : "end",
        R = "right" === w ? -8 * j : 0,
        z = 12 * j
      return (
        x[7] === Symbol.for("react.memo_cache_sentinel") ? ((a = { width: 320 }), (x[7] = a)) : (a = x[7]),
        x[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              var t
              ;(e.preventDefault(),
                (t = A.current) && !nx(t.ownerDocument.activeElement, ns) && t.focus({ preventScroll: !0 }))
            }),
            (x[8] = o))
          : (o = x[8]),
        x[9] !== p
          ? ((s = (e) => {
              let t = e.target
              ;(nx(t, nd) ||
                (t instanceof Element &&
                  t.closest("[data-paged-annotation-id]")?.getAttribute("data-paged-annotation-id") === p)) &&
                e.preventDefault()
            }),
            (x[9] = p),
            (x[10] = s))
          : (s = x[10]),
        x[11] !== T
          ? ((d = (e) => {
              ;(e.preventDefault(), e.isComposing || nx(e.target, `${ns}, [data-image-text-request]`) || T())
            }),
            (x[11] = T),
            (x[12] = d))
          : (d = x[12]),
        x[13] !== C || x[14] !== M
          ? ((c = (0, i.jsx)(no.T, { body: C, target: M })), (x[13] = C), (x[14] = M), (x[15] = c))
          : (c = x[15]),
        x[16] !== E || x[17] !== k || x[18] !== S
          ? ((g = (0, i.jsx)(nn.B, { annotationNumber: E, onEdit: S, onRemove: k })),
            (x[16] = E),
            (x[17] = k),
            (x[18] = S),
            (x[19] = g))
          : (g = x[19]),
        x[20] !== c || x[21] !== g
          ? ((m = (0, i.jsxs)("div", {
              className: "flex items-start gap-2 p-3 text-sm leading-5 select-text [&_button]:text-secondary",
              children: [c, g],
            })),
            (x[20] = c),
            (x[21] = g),
            (x[22] = m))
          : (m = x[22]),
        x[23] !== v ||
        x[24] !== b ||
        x[25] !== w ||
        x[26] !== d ||
        x[27] !== m ||
        x[28] !== l ||
        x[29] !== P ||
        x[30] !== R ||
        x[31] !== z ||
        x[32] !== s
          ? ((h = (0, i.jsx)(eh.hl, {
              ref: A,
              role: "dialog",
              "aria-label": l,
              tabIndex: -1,
              className: "pointer-events-auto",
              "data-annotation-control": !0,
              "data-image-text-review": !0,
              variant: "comment",
              size: "content",
              disablePadding: !0,
              side: w,
              align: P,
              alignOffset: R,
              sideOffset: z,
              sticky: "always",
              style: a,
              collisionBoundary: v,
              collisionPadding: b,
              onOpenAutoFocus: o,
              onCloseAutoFocus: nh,
              onInteractOutside: s,
              onEscapeKeyDown: d,
              children: m,
            })),
            (x[23] = v),
            (x[24] = b),
            (x[25] = w),
            (x[26] = d),
            (x[27] = m),
            (x[28] = l),
            (x[29] = P),
            (x[30] = R),
            (x[31] = z),
            (x[32] = s),
            (x[33] = h))
          : (h = x[33]),
        x[34] !== t || x[35] !== h || x[36] !== n
          ? ((f = (0, i.jsxs)(eh.AM, { open: !0, onOpenChange: t, children: [n, h] })),
            (x[34] = t),
            (x[35] = h),
            (x[36] = n),
            (x[37] = f))
          : (f = x[37]),
        f
      )
    }
    function nh(e) {
      return e.preventDefault()
    }
    function nf(e) {
      return e instanceof Element && null != e.closest("[data-image-text-list-action]")
    }
    function nx(e, t) {
      if (!(e instanceof Element)) return !1
      if (e.closest(t)) return !0
      let n = e.closest('[role="menu"]')?.getAttribute("aria-labelledby")
      return null != n && e.ownerDocument.getElementById(n)?.closest(t) != null
    }
    function np(e) {
      let t,
        n,
        l,
        a,
        o,
        d,
        c,
        g = (0, r.c)(21),
        {
          reviewKey: m,
          selection: h,
          regions: f,
          viewport: x,
          imageSize: p,
          containerElement: y,
          toolbarRef: v,
          onOpen: w,
          onEdit: j,
          onClose: M,
        } = e,
        C = (0, s.gh)(b.u),
        E = (0, F.A)(),
        T = (0, O.dz)(),
        S = (0, u.useId)(),
        k = (0, s._U)(t9.YY, m),
        _ = (0, t9.VU)(k, f),
        I = (0, s._U)((null != h || _.length > 0) && t4.Or, y.ownerDocument),
        [A, P] = (0, G.Xl)(),
        [R, z] = (0, u.useState)(null)
      g[0] !== h?.blockId ? ((t = (e) => e.id === h?.blockId), (g[0] = h?.blockId), (g[1] = t)) : (t = g[1])
      let N = f.find(t),
        { imageRect: D, fitImageRect: $ } = x,
        L = {
          width: Math.max(1, P.width ?? ($.width + 2 * $.left) / T),
          height: Math.max(1, P.height ?? ($.height + 2 * $.top) / T),
        },
        B = null == N ? null : nw(N, D, p, T),
        K = [],
        H = _.flatMap((e, t) => {
          let { id: n, region: i, review: r } = e,
            l = nw(i, D, p, T)
          if (null == l) return []
          let a = nb(l, K, L)
          return null == a ? [] : (K.push(a), [{ id: n, region: i, review: r, bounds: l, position: a, number: t + 1 }])
        })
      g[2] !== h?.noteId ? ((n = (e) => e.id === h?.noteId), (g[2] = h?.noteId), (g[3] = n)) : (n = g[3])
      let U = H.find(n),
        Y = U?.position ?? (B ? nb(B, K, L) : null),
        W = h?.noteId
      g[4] !== h ? ((l = (0, t8.y)(h)), (g[4] = h), (g[5] = l)) : (l = g[5])
      let q = l,
        Z = q ? null : U,
        X = q && null == W ? R : null
      g[6] !== y || g[7] !== X || g[8] !== v || g[9] !== T
        ? ((a = { stage: y, toolbarRef: v, surface: X, windowZoom: T }),
          (g[6] = y),
          (g[7] = X),
          (g[8] = v),
          (g[9] = T),
          (g[10] = a))
        : (a = g[10])
      let V = (0, s._U)(I && ((q && null != B) || null != Z) ? t4.v6 : t4.ui, a),
        Q = V.toolbar,
        J = Q
          ? {
              left: (Q.left / Q.stageWidth) * L.width,
              right: (Q.right / Q.stageWidth) * L.width,
              top: (Q.top / Q.stageHeight) * L.height,
              bottom: (Q.bottom / Q.stageHeight) * L.height,
            }
          : void 0
      g[11] !== E.locale ? ((o = (0, t2.b)(E.locale)), (g[11] = E.locale), (g[12] = o)) : (o = g[12])
      let ee = "rtl" === o,
        et = Z
          ? (function (e, t, n, i, r) {
              let l = 8 / i,
                a = t.left + 15 + 12,
                o = Math.min(320, Math.max(1, n - 2 * l))
              if (a >= e.left + e.width && a + 320 <= n - l)
                return {
                  anchor: { left: t.left - 15, top: t.top - 15, width: 30, height: 30 },
                  side: "right",
                  left: a,
                  width: o,
                }
              let s = Math.max(e.top + e.height, t.top + 15),
                d = r ? e.left : e.left + e.width - o
              return {
                anchor: { ...e, height: s - e.top },
                side: "bottom",
                left: Math.max(l, Math.min(d, n - o - l)),
                width: o,
              }
            })(Z.bounds, Z.position, L.width, T, ee)
          : null,
        en = J && et && (0, t5.W)(et.left, et.width, J) ? Q : null,
        ei = I ? A : void 0
      g[13] !== T ? ((d = { zoom: T }), (g[13] = T), (g[14] = d)) : (d = g[14])
      let er = H.map((e) => {
          let { id: t, region: n, review: r, position: l, number: a } = e
          if (q && t === W) return null
          let o = `${S}-${a}`
          return (0, i.jsxs)(
            "button",
            {
              type: "button",
              className:
                "popcorn-paged-annotation-marker popcorn-paged-annotation-marker-interactive group/image-text-marker rounded-[50%_50%_50%_3px] [--popcorn-paged-annotation-focus-ring:var(--gray-650)] [--popcorn-paged-annotation-interaction-cursor:var(--cursor-interaction)]",
              "data-paged-annotation-id": t,
              "data-testid": "image-text-comment-marker",
              "aria-label": E.formatMessage(
                { id: "imageTextEditing.viewNumberedComment", defaultMessage: "View comment {number}" },
                { number: a },
              ),
              "aria-describedby": o,
              "aria-expanded": t === W,
              style: nv(l, L),
              onPointerDown: ny,
              onClick: (e) => {
                ;(e.preventDefault(), e.stopPropagation(), w(n.id, t))
              },
              children: [
                (0, i.jsx)("span", {
                  className:
                    "popcorn-paged-annotation-marker-content group-hover/image-text-marker:scale-105 group-aria-expanded/image-text-marker:scale-105",
                  children: (0, i.jsx)(t3.Y, { number: a }),
                }),
                (0, i.jsx)("span", { id: o, hidden: !0, children: r.body }),
              ],
            },
            t,
          )
        }),
        el =
          null != Z &&
          null != et &&
          (0, i.jsx)(
            nm,
            {
              noteId: Z.id,
              targetBounds: et.anchor,
              side: et.side,
              windowZoom: T,
              boundary: y,
              collisionPadding: { left: 8, right: 8, top: 8 + (en?.top ?? 0), bottom: 8 + (en?.bottom ?? 0) },
              target: Z.review.excerpt ?? Z.region.text,
              body: Z.review.body,
              number: Z.number,
              onEscape: () => M(),
              onEdit: () => j(Z.region.id, Z.id),
              onDelete: () => {
                ;((0, t9.v$)(C, m, Z.id), M(Z.id))
              },
              onDismiss: () => M(Z.id),
            },
            Z.id,
          ),
        ea =
          q &&
          null != h &&
          null != B &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              null != Y &&
                (0, i.jsx)("span", {
                  className: "popcorn-paged-annotation-marker",
                  "data-testid": "image-text-comment-draft-marker",
                  style: nv(Y, L),
                  children: (0, i.jsx)(t3.Y, { number: U?.number ?? _.length + 1 }),
                }),
              (0, i.jsx)(
                nu,
                {
                  containerElement: y,
                  isPanReady: x.isPanReady,
                  surface: R,
                  onSurfaceChange: z,
                  style: (0, t5.G)({
                    bounds: { editorMinX: 8, editorMinY: 8, editorMaxX: L.width - 8, editorMaxY: L.height - 8 },
                    target: B,
                    rtl: ee,
                    toolbar: J,
                    createHeight: V.contentHeight,
                    isEditing: null != W,
                  }),
                  selectedExcerpt: h.excerpt,
                  review: null == W ? void 0 : k.get(W),
                  onSave: (e, t) => {
                    let n = (0, t9.Qu)(C, m, W, { blockId: h.blockId, body: e, excerpt: t })
                    w(h.blockId, n)
                  },
                  onDelete: () => {
                    ;(null != W && (0, t9.v$)(C, m, W), M())
                  },
                  onClose: () => {
                    U ? w(U.region.id, U.id) : M()
                  },
                },
                JSON.stringify([h.blockId, W]),
              ),
            ],
          })
      return (
        g[15] !== d || g[16] !== er || g[17] !== el || g[18] !== ea || g[19] !== ei
          ? ((c = (0, i.jsxs)("div", {
              ref: ei,
              className: "pointer-events-none absolute inset-0 z-20 overflow-clip",
              "data-image-text-review": !0,
              style: d,
              children: [er, el, ea],
            })),
            (g[15] = d),
            (g[16] = er),
            (g[17] = el),
            (g[18] = ea),
            (g[19] = ei),
            (g[20] = c))
          : (c = g[20]),
        c
      )
    }
    function ny(e) {
      return e.stopPropagation()
    }
    function nv(e, t) {
      return { left: `${(e.left / t.width) * 100}%`, top: `${(e.top / t.height) * 100}%`, width: 30, height: 30 }
    }
    function nb(e, t, n) {
      let i = e.left + e.width
      return i <= 0 || e.left >= n.width || e.top + e.height <= 0 || e.top >= n.height
        ? null
        : (0, t6.U)({ left: i, top: e.top }, t, n)
    }
    function nw(e, t, n, i) {
      let r = (0, eZ.Ap)([{ ...e, left: e.x, top: e.y }])
      if (null == r) return null
      let l = t.width / n.width,
        a = t.height / n.height
      return {
        left: (t.left + r.left * l) / i,
        top: (t.top + r.top * a) / i,
        width: (r.width * l) / i,
        height: (r.height * a) / i,
      }
    }
    var nj = n("SCZl"),
      nM = n("SAnh")
    function nC(e) {
      let t,
        n,
        l,
        a,
        o,
        d,
        u,
        g,
        h,
        p,
        y,
        v,
        w,
        j,
        M = (0, r.c)(49),
        {
          reviewKey: C,
          comments: E,
          selectedNoteId: T,
          onOpen: S,
          onEdit: k,
          onDeselectThread: _,
          onCloseList: I,
          onAddComment: A,
        } = e,
        P = (0, s.gh)(b.u),
        R = (0, F.A)()
      M[0] !== A
        ? ((t = null == A ? void 0 : { "data-popcorn-comment-create": !0, onClick: A }), (M[0] = A), (M[1] = t))
        : (t = M[1])
      let z = t
      M[2] !== _ || M[3] !== C || M[4] !== P || M[5] !== T
        ? ((n = (e) => {
            ;((0, t9.v$)(P, C, e), T === e && _())
          }),
          (M[2] = _),
          (M[3] = C),
          (M[4] = P),
          (M[5] = T),
          (M[6] = n))
        : (n = M[6])
      let N = n
      if (
        (M[7] !== R ? ((l = R.formatMessage(nT.list)), (M[7] = R), (M[8] = l)) : (l = M[8]),
        M[9] !== R ? ((a = R.formatMessage(nT.list)), (M[9] = R), (M[10] = a)) : (a = M[10]),
        M[11] !== R ? ((o = R.formatMessage(nT.heading)), (M[11] = R), (M[12] = o)) : (o = M[12]),
        M[13] !== R ? ((d = R.formatMessage(nT.close)), (M[13] = R), (M[14] = d)) : (d = M[14]),
        M[15] !== z || M[16] !== I || M[17] !== o || M[18] !== d
          ? ((u = (0, i.jsx)(nM.w, { title: o, closeLabel: d, onClose: I, addCommentButtonProps: z })),
            (M[15] = z),
            (M[16] = I),
            (M[17] = o),
            (M[18] = d),
            (M[19] = u))
          : (u = M[19]),
        M[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(x.VhP, {})), (h = (0, i.jsx)(c.A, { ...nT.empty })), (M[20] = g), (M[21] = h))
          : ((g = M[20]), (h = M[21])),
        M[22] !== z
          ? ((p =
              z &&
              (0, i.jsxs)(m.$, {
                ...z,
                color: "outline",
                size: "dialog",
                onMouseDown: nE,
                children: [
                  (0, i.jsx)(f.I, { asset: $.g }),
                  (0, i.jsx)(c.A, { id: "artifactComments.addCommentAction", defaultMessage: "Add comment" }),
                ],
              })),
            (M[22] = z),
            (M[23] = p))
          : (p = M[23]),
        M[24] !== E || M[25] !== R || M[26] !== k || M[27] !== S || M[28] !== N || M[29] !== T)
      ) {
        let e
        ;(M[31] !== E.length || M[32] !== R || M[33] !== k || M[34] !== S || M[35] !== N || M[36] !== T
          ? ((e = (e, t) => {
              let { id: n, review: r, region: l } = e,
                a = E.length - t,
                o = r.excerpt ?? l.text
              return {
                key: n,
                selected: n === T,
                content: (0, i.jsx)(nj.y, {
                  avatar: (0, i.jsx)("span", {
                    className: "block size-6",
                    "aria-hidden": !0,
                    children: (0, i.jsx)(t3.Y, { number: a }),
                  }),
                  hasConnector: !1,
                  header: (0, i.jsx)("div", {
                    className: "flow-root text-base leading-5 before:float-end before:h-5 before:w-13",
                    children: (0, i.jsx)("span", {
                      dir: "auto",
                      className: "break-words whitespace-pre-wrap",
                      children: r.body,
                    }),
                  }),
                  children: (0, i.jsx)("div", {
                    className: "mt-0.5 flex min-w-0 items-baseline gap-1.5 text-xs text-tertiary",
                    children: (0, i.jsx)(eY.E, {
                      dir: "auto",
                      animateOnGroupHover: !0,
                      className: "w-auto flex-initial",
                      children: o,
                    }),
                  }),
                }),
                label: R.formatMessage(nT.open, { target: o }),
                onOpen: () => S(l.id, n),
                actions: (0, i.jsx)(nn.B, { annotationNumber: a, onEdit: () => k(l.id, n), onRemove: () => N(n) }),
              }
            }),
            (M[31] = E.length),
            (M[32] = R),
            (M[33] = k),
            (M[34] = S),
            (M[35] = N),
            (M[36] = T),
            (M[37] = e))
          : (e = M[37]),
          (y = E.toReversed().map(e)),
          (M[24] = E),
          (M[25] = R),
          (M[26] = k),
          (M[27] = S),
          (M[28] = N),
          (M[29] = T),
          (M[30] = y))
      } else y = M[30]
      return (
        M[38] !== p || M[39] !== y
          ? ((v = (0, i.jsx)(eP, { emptyIcon: g, emptyLabel: h, emptyAction: p, rows: y })),
            (M[38] = p),
            (M[39] = y),
            (M[40] = v))
          : (v = M[40]),
        M[41] !== I || M[42] !== v || M[43] !== a || M[44] !== u
          ? ((w = (0, i.jsxs)(ts.D, { list: "comments", label: a, onClose: I, children: [u, v] })),
            (M[41] = I),
            (M[42] = v),
            (M[43] = a),
            (M[44] = u),
            (M[45] = w))
          : (w = M[45]),
        M[46] !== w || M[47] !== l
          ? ((j = (0, i.jsx)(to.Io, {
              open: !0,
              size: "compact",
              className: "pointer-events-auto",
              label: l,
              children: w,
            })),
            (M[46] = w),
            (M[47] = l),
            (M[48] = j))
          : (j = M[48]),
        j
      )
    }
    function nE(e) {
      return e.preventDefault()
    }
    let nT = (0, U.YK)({
      heading: { id: "artifactComments.heading", defaultMessage: "Comments" },
      close: { id: "artifactComments.close", defaultMessage: "Close comments" },
      empty: { id: "artifactComments.empty", defaultMessage: "No comments yet" },
      list: { id: "imageTextEditing.commentList", defaultMessage: "Text comments" },
      open: { id: "imageTextEditing.openComment", defaultMessage: "Open comment on {target}" },
    })
    function nS(e) {
      var t, n, l, a, o, d
      let g,
        h,
        p,
        y,
        w,
        j,
        M,
        E,
        T,
        S,
        z,
        D,
        U,
        G,
        el,
        ea,
        eo,
        es,
        ed,
        eu,
        ec,
        eg,
        em,
        eh,
        ef,
        ex,
        ep,
        ey,
        ew,
        ej,
        eM,
        eC,
        eE,
        eT,
        eS,
        ek,
        e_,
        eI,
        eA,
        eP,
        eR,
        ez,
        eD,
        e$,
        eL,
        eB,
        eK,
        eY,
        eq,
        eZ,
        eX,
        eG,
        eV,
        eQ,
        eJ,
        e1,
        e0,
        e2,
        e3,
        e4,
        e5,
        e9,
        e8,
        e7,
        te,
        tt,
        tn,
        tr,
        tl,
        ta,
        to,
        ts = (0, r.c)(314),
        {
          ref: td,
          reviewKey: tu,
          propertiesPanelContainer: ty,
          source: tv,
          rendering: tw,
          renderError: tj,
          renderedPreview: tC,
          viewport: tE,
          sourcePreview: t_,
          preparing: tI,
          reconnecting: tA,
          saving: tP,
          dirty: tR,
          onCancel: tz,
          onSave: tF,
          review: tU,
          error: tO,
          selectedId: tW,
          onSelect: tq,
          onChange: tZ,
          onEndHistoryGroup: tX,
          canUndo: tG,
          canRedo: tV,
          onUndo: tQ,
          onRedo: t1,
          onRetry: t2,
          renderToolbar: t3,
        } = e,
        t4 = void 0 !== tA && tA,
        t6 = (0, s.gh)(b.u),
        t5 = (0, F.A)(),
        t7 = (0, O.dz)(),
        ne = (0, q.I)(),
        [nt, nn] = (0, u.useState)(null),
        ni = (0, u.useId)(),
        nr = tu ?? ni,
        nl = "sending" === (0, s._U)(t9.J$, nr),
        na = (0, u.useRef)(null),
        no = (0, u.useRef)(null),
        ns = (0, u.useRef)(void 0)
      ts[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e) => ns.current === e && ((ns.current = void 0), !0)), (ts[0] = g))
        : (g = ts[0])
      let nd = g,
        nu = (0, u.useRef)(null)
      ;(ts[1] !== tW || ts[2] !== nt
        ? ((h = () => {
            null != tW &&
              na.current === tW &&
              ((na.current = null),
              nt?.querySelector("[data-image-text-region][data-image-text-selected]")?.focus({ preventScroll: !0 }))
          }),
          (p = [tW, nt]),
          (ts[1] = tW),
          (ts[2] = nt),
          (ts[3] = h),
          (ts[4] = p))
        : ((h = ts[3]), (p = ts[4])),
        (0, u.useLayoutEffect)(h, p))
      let [nc, ng] = (0, u.useState)(null)
      ts[5] !== ni || ts[6] !== nr
        ? ((y = { reviewKey: nr, editorId: ni }), (ts[5] = ni), (ts[6] = nr), (ts[7] = y))
        : (y = ts[7])
      let nm = (0, s._U)(t9.RH, y)
      ts[8] !== ni || ts[9] !== nr || ts[10] !== t6
        ? ((w = (e) => (0, t9.hd)(t6, nr, ni, e)), (ts[8] = ni), (ts[9] = nr), (ts[10] = t6), (ts[11] = w))
        : (w = ts[11])
      let nh = w,
        nf = (0, u.useRef)(null),
        nx = (0, u.useRef)(null)
      ts[12] !== ty || ts[13] !== nt
        ? ((j = ty ?? nt?.closest("[data-image-text-stage]")?.parentElement),
          (ts[12] = ty),
          (ts[13] = nt),
          (ts[14] = j))
        : (j = ts[14])
      let ny = j,
        nv = (0, u.useRef)(null),
        nb = (0, u.useRef)(!1),
        nw = (0, u.useRef)(null),
        nj = null != tC,
        nM = (0, u.useRef)(!1),
        nE = (0, s._U)(t9.l7, nr),
        nT = "comments" === nE || "edits" === nE,
        nS = null == tv ? [] : tB(tv)
      ts[15] !== tW ? ((M = (e) => e.id === tW), (ts[15] = tW), (ts[16] = M)) : (M = ts[16])
      let nF = nS.find(M),
        nU = "properties" === nE
      ;(ts[17] !== nU || ts[18] !== nt || ts[19] !== tE
        ? ((T = () => {
            if (!nU || !nM.current) return
            let e = requestAnimationFrame(() => {
              ;((nM.current = !1),
                null != nt &&
                  (function (e, t) {
                    let n = e.closest("[data-image-text-stage]")?.getBoundingClientRect(),
                      i = e.querySelector("[data-image-text-region][data-image-text-selected]")?.getBoundingClientRect()
                    if (null == n || null == i || n.width <= 0 || n.height <= 0 || null == t.adjustViewport) return
                    let r = e.querySelector("[data-image-text-formatting-strip]")?.getBoundingClientRect(),
                      l = (e, t, n, i) =>
                        e < n && t > i
                          ? 0
                          : t - e > i - n
                            ? e >= n
                              ? n - e
                              : i - t
                            : e < n
                              ? n - e
                              : Math.min(0, i - t),
                      a = l(
                        Math.min(i.left, r?.left ?? i.left),
                        Math.max(i.right, r?.right ?? i.right),
                        n.left + 8,
                        n.right - 8,
                      ),
                      o = l(
                        Math.min(i.top, r?.top ?? i.top),
                        Math.max(i.bottom, r?.bottom ?? i.bottom),
                        n.top + 8,
                        n.bottom - 8,
                      )
                    ;(0 !== a || 0 !== o) && t.adjustViewport(1, { x: a, y: o })
                  })(nt, tE))
            })
            return () => cancelAnimationFrame(e)
          }),
          (E = [nU, tE, nt]),
          (ts[17] = nU),
          (ts[18] = nt),
          (ts[19] = tE),
          (ts[20] = E),
          (ts[21] = T))
        : ((E = ts[20]), (T = ts[21])),
        (0, u.useLayoutEffect)(T, E),
        ts[22] !== nm ? ((S = (0, t8.y)(nm)), (ts[22] = nm), (ts[23] = S)) : (S = ts[23]))
      let nO = S,
        nY = nO ? void 0 : nm?.noteId,
        nW = (0, s._U)(t9.YY, nr)
      ts[24] !== nY || ts[25] !== nW
        ? ((z = null == nY ? void 0 : nW.get(nY)), (ts[24] = nY), (ts[25] = nW), (ts[26] = z))
        : (z = ts[26])
      let nq = z,
        nZ = nm?.blockId === tW && (nO || null != nq),
        [nX, nG] = (0, u.useState)(!1),
        nV = (0, s._U)(t9.Zf, nr),
        [nQ, nJ] = (0, u.useState)(null),
        [n1, n0] = (0, u.useState)(null),
        [n2, n3] = (0, u.useState)(null),
        n4 = (0, u.useRef)(null),
        n6 = (0, u.useRef)(0),
        n5 = (0, u.useRef)(null),
        n9 = (0, u.useRef)(null),
        n8 = (0, u.useRef)(null),
        n7 = (0, u.useRef)(null),
        [ie, it] = (0, u.useState)(null)
      ts[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = () => {
            ;((n7.current = null),
              n5.current?.removeAttribute("transform"),
              n9.current?.removeAttribute("transform"),
              it(null))
          }),
          (ts[27] = D))
        : (D = ts[27])
      let ii = (0, C.K)(D)
      ;(ts[28] !== ii || ts[29] !== tj || ts[30] !== tC || ts[31] !== tw || ts[32] !== tW || ts[33] !== tv?.items
        ? ((U = () => {
            let e = n7.current
            if (null == e) return
            let { drop: t } = e
            ;(tW === e.origin.id && null == tj && (null == t || (tv?.items === t.items && (tw || tC === t.preview)))) ||
              ii()
          }),
          (ts[28] = ii),
          (ts[29] = tj),
          (ts[30] = tC),
          (ts[31] = tw),
          (ts[32] = tW),
          (ts[33] = tv?.items),
          (ts[34] = U))
        : (U = ts[34]),
        ts[35] !== ii || ts[36] !== tj || ts[37] !== tC || ts[38] !== tw || ts[39] !== tW || ts[40] !== tv
          ? ((G = [tv, tW, tC, tw, tj, ii]),
            (ts[35] = ii),
            (ts[36] = tj),
            (ts[37] = tC),
            (ts[38] = tw),
            (ts[39] = tW),
            (ts[40] = tv),
            (ts[41] = G))
          : (G = ts[41]),
        (0, u.useLayoutEffect)(U, G),
        ts[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = () => () => {
              n7.current = null
            }),
            (ea = []),
            (ts[42] = el),
            (ts[43] = ea))
          : ((el = ts[42]), (ea = ts[43])),
        (0, u.useLayoutEffect)(el, ea))
      let ir = null == tv ? [] : th(tv),
        il = (0, s._U)(t9.WM, nr),
        ia = tR ? I(tv) : [],
        io = tf(il, ir),
        is = io.filter(nz).map(nR)
      ts[44] !== il ? ((eo = (e) => !il.get(e.id)?.remove), (ts[44] = il), (ts[45] = eo)) : (eo = ts[45])
      let id = ir.filter(eo)
      ts[46] !== il
        ? ((es = (e) => ({ ...e, ...il.get(e.id)?.destination })), (ts[46] = il), (ts[47] = es))
        : (es = ts[47])
      let iu = [...nS, ...id.map(es)],
        ic = (0, t9.VU)(nW, [...iu, ...is])
      ts[48] !== tW ? ((ed = (e) => e.id === tW), (ts[48] = tW), (ts[49] = ed)) : (ed = ts[49])
      let ig = id.find(ed),
        im = null == ig ? void 0 : il.get(ig.id),
        [ih, ix] = (0, u.useState)(null),
        ip = iu.find((e) => e.id === tW),
        iy = "guides" === nV && null != nQ && null != nF && nU,
        iv = tv?.assets.fonts.length === 0 && 0 === ir.length,
        ib = null != tj && "glyphs" !== tj.code && "geometry" !== tj.code && "size" !== tj.code,
        iw = tv?.snapshot.reference.document_id,
        [ij, iM] = (0, u.useState)(),
        iC = "painter" === nV && null != n1 && n1.reference === tv?.snapshot.reference && nU,
        iE = !tI && !tP && !nj && null == tj && null == tO,
        iT = (tI || iE) && !tP && null == tO,
        iS = null != tv && !tI && !iE && !tP && null == tO && !iv && !ib,
        ik = !iS || iy || iC ? void 0 : ip?.id,
        i_ = iS && nj && !tw && null == tj && !tR && null == nE && null == tW && iu.length > 0 && iw !== ij
      ts[50] !== iw ? ((eu = () => iM(iw)), (ts[50] = iw), (ts[51] = eu)) : (eu = ts[51])
      let iI = eu
      ;(0, u.useLayoutEffect)(() => {
        if (null != ik)
          return () => {
            let e = t6.get(t9.sY, nr).get(ni)
            e?.blockId === ik && (0, t9.hd)(t6, nr, ni, null)
          }
      }, [t6, nr, ni, ik])
      let iA = iS && null != ip && !nZ && !iy && !iC && !nX,
        [iP, iR] = (0, u.useState)(null),
        iz = tv?.snapshot,
        iN = tv?.items,
        iD = tv?.assets,
        i$ = nU && null != nF,
        [iL, iB] = (0, u.useState)()
      ;(ts[52] !== iS ||
      ts[53] !== iy ||
      ts[54] !== tj ||
      ts[55] !== tC ||
      ts[56] !== tw ||
      ts[57] !== tW ||
      ts[58] !== i$ ||
      ts[59] !== nX
        ? ((ec = () => {
            if (!i$ || !iS || iy || nX || tw || null != tj || null == tC || null == tW) return
            let e = requestAnimationFrame(() => {
              iB((0, ei.KQ)(tC, tW))
            })
            return () => cancelAnimationFrame(e)
          }),
          (eg = [i$, iS, iy, nX, tw, tj, tC, tW]),
          (ts[52] = iS),
          (ts[53] = iy),
          (ts[54] = tj),
          (ts[55] = tC),
          (ts[56] = tw),
          (ts[57] = tW),
          (ts[58] = i$),
          (ts[59] = nX),
          (ts[60] = ec),
          (ts[61] = eg))
        : ((ec = ts[60]), (eg = ts[61])),
        (0, u.useEffect)(ec, eg))
      let iK = i$ || iy
      ;(ts[62] !== iD || ts[63] !== iS || ts[64] !== iN || ts[65] !== tW || ts[66] !== iK || ts[67] !== iz
        ? ((em = () => {
            if (!iK || !iS || !iz || !iN || !iD || !tW) return
            let e = requestAnimationFrame(() =>
              iR({
                documentId: iz.reference.document_id,
                blockId: tW,
                guides: (function (e, t) {
                  let { width: n, height: i } = e.snapshot.content
                  try {
                    return eF(e, t).flatMap((e) =>
                      ["baseline", "upper_contour"].flatMap((t) => {
                        let r = e[t]
                        if (null == r) return []
                        let l = (0, ei.rc)(r),
                          a = l.flatMap(({ command: e, values: t }, n) =>
                            "Q" === e || "C" === e
                              ? [
                                  { command: "M", values: l[n - 1].values.slice(-2) },
                                  { command: "L", values: t },
                                ]
                              : [],
                          )
                        return [
                          {
                            id: `${e.lineIndex ?? "block"}-${t}`,
                            kind: t,
                            lineIndex: e.lineIndex,
                            path: eO(l, n, i),
                            controlPath: eO(a, n, i),
                            points: eU(l, n, i),
                          },
                        ]
                      }),
                    )
                  } catch (e) {
                    if (!(e instanceof ei.Zo)) throw e
                    return []
                  }
                })({ snapshot: iz, items: iN, assets: iD }, tW),
              }),
            )
            return () => cancelAnimationFrame(e)
          }),
          (eh = [iK, iS, iz, iN, iD, tW]),
          (ts[62] = iD),
          (ts[63] = iS),
          (ts[64] = iN),
          (ts[65] = tW),
          (ts[66] = iK),
          (ts[67] = iz),
          (ts[68] = em),
          (ts[69] = eh))
        : ((em = ts[68]), (eh = ts[69])),
        (0, u.useLayoutEffect)(em, eh),
        ts[70] !== iw || ts[71] !== iS || ts[72] !== iP || ts[73] !== tW || ts[74] !== iK
          ? ((ef = iK && iS && null != iP && iP.documentId === iw && iP.blockId === tW ? iP.guides : []),
            (ts[70] = iw),
            (ts[71] = iS),
            (ts[72] = iP),
            (ts[73] = tW),
            (ts[74] = iK),
            (ts[75] = ef))
          : (ef = ts[75]))
      let iH = ef
      ts[76] !== iy || ts[77] !== nQ || ts[78] !== iH
        ? ((ex = iy ? (iH.find((e) => e.id === nQ) ?? iH[0]) : void 0),
          (ts[76] = iy),
          (ts[77] = nQ),
          (ts[78] = iH),
          (ts[79] = ex))
        : (ex = ts[79])
      let iF = ex,
        [iU] = (0, u.useState)(nP),
        iO = 10 * t7
      ;(ts[80] !== iO ? ((ep = (0, N.cY)(iO)), (ts[80] = iO), (ts[81] = ep)) : (ep = ts[81]),
        ts[82] !== nt || ts[83] !== iO || ts[84] !== iU
          ? ((a = nt),
            (o = iU),
            (ey = {
              name: "imageTextToolbarSide",
              options: [a, (d = iO)],
              async fn({ elements: e, platform: t, strategy: n, placement: i, middlewareData: r, rects: l }) {
                let s = e.reference
                if (null == a || !(s instanceof Element) || null != r.imageTextToolbarSide) return {}
                let u = s.closest("[data-image-text-surface]")
                if (null == u) return {}
                let c = await t.getClippingRect({
                    element: a,
                    boundary: "clippingAncestors",
                    rootBoundary: "viewport",
                    strategy: n,
                  }),
                  g = a.getBoundingClientRect(),
                  m = Math.max(g.top, c.y),
                  h = Math.min(g.bottom, c.y + c.height),
                  f = u.getBoundingClientRect(),
                  x = Math.max(m, f.top),
                  p = Math.min(h, f.bottom)
                if (m >= h) return {}
                let y = x < p ? (x + p) / 2 : (m + h) / 2,
                  v = s.getBoundingClientRect(),
                  b = o.get(s) ?? (v.top + v.height / 2 < y ? "bottom" : "top")
                v.bottom < y ? (b = "bottom") : v.top > y && (b = "top")
                let w = { top: v.top - m, bottom: h - v.bottom },
                  j = "top" === b ? "bottom" : "top",
                  M = e.floating.getBoundingClientRect().height,
                  C = l.floating.height > 0 ? M / l.floating.height : 1,
                  E = M + d * C + 8
                return (
                  w[b] < E && (w[j] >= E || w[j] > w[b] + 8) && (b = j),
                  o.set(s, b),
                  { data: { side: b }, reset: i === b ? void 0 : { placement: b } }
                )
              },
            }),
            (ts[82] = nt),
            (ts[83] = iO),
            (ts[84] = iU),
            (ts[85] = ey))
          : (ey = ts[85]))
      let iY = nt ?? void 0
      ;(ts[86] !== iY ? ((ew = (0, N.BN)({ boundary: iY, padding: 8 })), (ts[86] = iY), (ts[87] = ew)) : (ew = ts[87]),
        ts[88] === Symbol.for("react.memo_cache_sentinel") ? ((ej = (0, N.jD)()), (ts[88] = ej)) : (ej = ts[88]),
        ts[89] !== ep || ts[90] !== ey || ts[91] !== ew
          ? ((eM = [ep, ey, ew, ej]), (ts[89] = ep), (ts[90] = ey), (ts[91] = ew), (ts[92] = eM))
          : (eM = ts[92]),
        ts[93] !== iA || ts[94] !== eM
          ? ((eC = { open: iA, placement: "top", middleware: eM, whileElementsMounted: nA }),
            (ts[93] = iA),
            (ts[94] = eM),
            (ts[95] = eC))
          : (eC = ts[95]))
      let {
          refs: iW,
          floatingStyles: iq,
          isPositioned: iZ,
          middlewareData: iX,
          placement: iG,
          update: iV,
        } = (0, N.we)(eC),
        { setReference: iQ, setFloating: iJ } = iW,
        i1 = iG.startsWith("bottom") ? "bottom" : "top",
        i0 = nU || nT ? (nt ?? void 0) : void 0
      ts[96] !== i1 || ts[97] !== i0
        ? ((eE = { align: "start", side: i1, collisionBoundary: i0 }), (ts[96] = i1), (ts[97] = i0), (ts[98] = eE))
        : (eE = ts[98])
      let i2 = eE
      ;(ts[99] !== iA || ts[100] !== iV
        ? ((eT = () => {
            iA && iV()
          }),
          (ts[99] = iA),
          (ts[100] = iV),
          (ts[101] = eT))
        : (eT = ts[101]),
        (0, u.useLayoutEffect)(eT, [iA, iV, tE, ip?.x, ip?.y, ip?.width, ip?.height, ip?.rotation]))
      let i3 = null != tv && !tI && !iE && !tP && !iv && null == tO
      ts[102] !== tj || ts[103] !== tv
        ? ((eS = tj ?? (null == tv ? null : (0, ei.e8)(tv))), (ts[102] = tj), (ts[103] = tv), (ts[104] = eS))
        : (eS = ts[104])
      let i4 = eS,
        i6 = iC ? n2 : null,
        i5 = i6?.error ?? i4,
        i9 = iS ? nS.find((e) => e.id === (i6?.id ?? i4?.blockId)) : void 0,
        i8 = (0, s._U)(!!(i3 && (tR || tU?.hasRequests)) && t9._Y, nr),
        i7 = i3 && (tU?.hasRequests ? tU.canSend : tR) && (!tR || nj) && !nX && !tw && !nl && !i8 && null == i4,
        re = nH.save
      tU?.hasRequests && (re = tR ? nH.saveAndSend : nH.send)
      let rt = (e, t, n) => {
        if (null == tv || tP) return
        let i = (function (e, t, n) {
            let i = tB(e).find((e) => e.id === t.id),
              r = e.items.find((e) => e.id === t.id)
            if (null == i || r?.kind !== "text" || "editable" !== r.rendering.mode) return e.items
            let { width: l, height: a } = e.snapshot.content,
              o = (0, en._8)(r, i.fontSize)
            if ("scale" === n) {
              var s, d, u, c, g, m
              let n,
                o,
                h,
                f,
                x =
                  ((s = r),
                  (d = r.rendering),
                  (u = i),
                  (c = t),
                  (g = l),
                  (m = a),
                  (n = c.width / u.width),
                  (o = { x: c.x / g, y: c.y / m, width: c.width / g, height: c.height / m }),
                  (h = (e) =>
                    (0, ei.rc)(e)
                      .map(
                        ({ command: e, values: t }) =>
                          e +
                          " " +
                          t.map((e, t) => (t % 2 == 0 ? o.x + (e - s.bbox.x) * n : o.y + (e - s.bbox.y) * n)).join(" "),
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
              return ((0, en.pb)(x, t.fontSize), e.items.map((e) => (e === r ? x : e)))
            }
            if (t.text !== i.text)
              return (function (e, t, n) {
                let i,
                  r = tB(e).find((e) => e.id === t.id),
                  l = e.items.find((e) => e.id === t.id)
                if (null == r || l?.kind !== "text" || "editable" !== l.rendering.mode) return e.items
                let a = r.wrapText || t.text.split("\n").length !== r.text.split("\n").length,
                  o = l.rendering,
                  s = t.lineHeight === r.lineHeight ? r.lineHeight / r.fontSize : t.lineHeight / t.fontSize,
                  d = (n) => tK(e, l, o, r, { ...t, fontSize: n, lineHeight: n * s }, a)
                try {
                  if (((i = d(n)), !(0, ei.mZ)(e, i))) {
                    let t,
                      r = 0,
                      l = n
                    for (let n = 0; n < 18 && l - r > 0.01; n++) {
                      let n = (r + l) / 2,
                        i = d(n)
                      ;(0, ei.mZ)(e, i) ? ((r = n), (t = i)) : (l = n)
                    }
                    i = t ?? d(Math.min(n, 0.01))
                  }
                } catch (e) {
                  if (!(e instanceof ei.Zo)) throw e
                  i = { ...l, text: t.text }
                }
                return ((0, en.pb)(i, n), e.items.map((e) => (e === l ? i : e)))
              })(e, t, t.fontSize !== i.fontSize ? t.fontSize : o)
            let h = t.x !== i.x || t.y !== i.y,
              f = "rewrap" === n || t.width !== i.width || t.height !== i.height,
              x = [...t$, ...tL].some((e) => t[e] !== i[e]),
              p =
                !h || f || x || t.color !== i.color || t.rotation !== i.rotation
                  ? tK(e, r, r.rendering, i, t, f || t.wrapText)
                  : (0, ei.Cb)(e, t.id, { x: t.x - i.x, y: t.y - i.y })
            ;(h || f) && (p = { ...p, bbox: { x: t.x / l, y: t.y / a, width: t.width / l, height: t.height / a } })
            let y = e.items.map((e) => (e === r ? p : e))
            if (f || (t.wrapText && x))
              try {
                let n = (t$.some((e) => t[e] !== i[e]) ? ei.hF : ei.XP)(
                  { ...e, items: y },
                  e.assets.fonts,
                  t.id,
                  t.text,
                )
                null != n &&
                  ((p = { ...p, bbox: { x: n.x / l, y: n.y / a, width: n.width / l, height: n.height / a } }),
                  (y = e.items.map((e) => (e === r ? p : e))))
              } catch (e) {
                if (!(e instanceof ei.Zo)) throw e
              }
            return ((0, en.pb)(p, t.fontSize !== i.fontSize ? t.fontSize : o), y)
          })(tv, e, n),
          r = n7.current
        ;(null != r && n4.current?.previewsTranslation && (r.drop = { items: i, preview: tC }),
          tZ(i, n4.current?.id ?? t))
      }
      ts[105] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = (e) => {
            let t = n7.current
            null != t &&
              ((t.transform = `translate(${e.x - t.origin.x} ${e.y - t.origin.y})`),
              n5.current?.setAttribute("transform", t.transform),
              n9.current?.setAttribute("transform", t.transform),
              n8.current?.setAttribute("transform", t.transform))
          }),
          (ts[105] = ek))
        : (ek = ts[105])
      let rn = ek,
        ri = (e) => {
          if (
            null != tv &&
            null == n4.current &&
            (tX(),
            nG(!0),
            (n4.current = {
              items: tv.items,
              id: `gesture-${(n6.current = n6.current + 1)}`,
              previewsTranslation: null != e,
            }),
            ii(),
            null != e)
          ) {
            let t = { origin: e, transform: "translate(0 0)" }
            ;((n7.current = t),
              (0, ei.ti)(tv, e.id).then((e) => {
                n7.current === t && it(e)
              }, nI))
          }
        },
        rr = (e) => {
          let t = n7.current
          ;(n5.current?.removeAttribute("transform"),
            n9.current?.removeAttribute("transform"),
            e && null != n4.current && !n4.current.previewsTranslation && tZ(n4.current.items, n4.current.id),
            (e || t?.drop == null) && ii(),
            (n4.current = null),
            nG(!1),
            tX())
        },
        rl = (0, C.K)((e, t, n, i) => {
          if (null == tv || null == nF || null == n4.current) return
          let r = e.points[t],
            l =
              1e-6 > Math.hypot(n - r.x, i - r.y)
                ? n4.current.items
                : (function (e, t, n, i, r, l) {
                    let { width: a, height: o } = e.snapshot.content
                    if (!Number.isFinite(r) || !Number.isFinite(l)) return e.items
                    try {
                      let s = eF(e, t).find((e) => e.lineIndex === n.lineIndex)
                      if (null == s) return e.items
                      let d = (0, ei.rc)(s.baseline),
                        u = null == s.upper_contour ? null : (0, ei.rc)(s.upper_contour),
                        c = "baseline" === n.kind ? d : u
                      if (null == c) return e.items
                      let g = eU(c, a, o)[i]
                      if (
                        null == g ||
                        (null != u && (u.length !== d.length || d.some((e, t) => e.command !== u[t].command)))
                      )
                        return e.items
                      let m = r - g.x,
                        h = l - g.y
                      if ("upper_contour" === n.kind) {
                        let e = eU(d, a, o)[i],
                          t = g.x - e.x,
                          n = g.y - e.y,
                          r = (m * t + h * n) / (t * t + n * n)
                        ;((m = r * t), (h = r * n))
                      }
                      if (!Number.isFinite(m + h) || 1e-6 > Math.hypot(m, h)) return e.items
                      for (let e of null == u ? [d] : [d, u]) {
                        let t = e[g.commandIndex]
                        if (null == g.offset) {
                          let n = e[g.commandIndex - 1].values
                          ;(t.values.unshift((n[n.length - 2] + t.values[0]) / 2, (n[n.length - 1] + t.values[1]) / 2),
                            (t.command = "Q"))
                        }
                        if (e === c || "baseline" === n.kind) {
                          let e = g.offset ?? 0
                          ;((t.values[e] += m / a), (t.values[e + 1] += h / o))
                        }
                      }
                      if (
                        !(function (e, t) {
                          let n = e[0].values,
                            i = e[e.length - 1].values,
                            r = i[i.length - 2] - n[0],
                            l = i[i.length - 1] - n[1]
                          if (1e-8 >= Math.hypot(r, l)) return !1
                          if (null == t) return !0
                          let a = n[0] - t[0].values[0],
                            o = n[1] - t[0].values[1],
                            s = r * o - l * a
                          if (e.length > 65 || s <= Math.max(1e-12, Math.hypot(r, l) * Math.hypot(a, o) * 1e-5))
                            return !1
                          let d = 0
                          return e.slice(1).every(({ values: e }) => {
                            let t = ((e[e.length - 2] - n[0]) * o - (e[e.length - 1] - n[1]) * a) / s,
                              i = t > d + 1e-8 && t <= 1 + 1e-6
                            return ((d = t), i)
                          })
                        })(d, u)
                      )
                        return e.items
                      let f = eO(d),
                        x = null == u ? null : eO(u)
                      ;(0, ei.vw)(f, x, a, o, s.fontSize)
                      let p = { ...s.implicit, baseline: f, upper_contour: x }
                      return e.items.map((e) => {
                        if (e.id !== t || "text" !== e.kind || "editable" !== e.rendering.mode) return e
                        let n = e.rendering
                        return {
                          ...e,
                          rendering:
                            null == s.lineIndex
                              ? { ...n, ...p }
                              : {
                                  ...n,
                                  line_layout: n.line_layout?.map((e, t) =>
                                    t === s.lineIndex && null != e ? { ...e, ...p } : e,
                                  ),
                                },
                        }
                      })
                    } catch (t) {
                      if (!(t instanceof ei.Zo)) throw t
                      return e.items
                    }
                  })(tv, nF.id, e, t, n, i)
          l !== tv.items && tZ(l, n4.current.id)
        })
      ts[106] !== iI ||
      ts[107] !== iy ||
      ts[108] !== nr ||
      ts[109] !== tq ||
      ts[110] !== t6 ||
      ts[111] !== tW ||
      ts[112] !== nh ||
      ts[113] !== ix
        ? ((e_ = (e) => {
            ;(iI(), e !== tW && (ix(null), iy && t6.set(t9.Zf, nr, null), nJ(null), n3(null)), nh(null), tq(e))
          }),
          (ts[106] = iI),
          (ts[107] = iy),
          (ts[108] = nr),
          (ts[109] = tq),
          (ts[110] = t6),
          (ts[111] = tW),
          (ts[112] = nh),
          (ts[113] = ix),
          (ts[114] = e_))
        : (e_ = ts[114])
      let ra = e_,
        ro = (e) => {
          let t = iu.find((t) => t.id === e)
          if ((ra(t?.id ?? null), null == tv || null == nt)) return
          let n = t ?? is.find((t) => t.id === e)
          if (null != n) return void t0(nt, tE, n, tv)
          let i = { ...tv, items: tv.snapshot.content.items },
            r = tB(i).find((t) => t.id === e)
          null != r && t0(nt, tE, r, i)
        }
      ts[115] !== nt?.ownerDocument.activeElement
        ? ((eI = (e) => {
            let t = nt?.ownerDocument.activeElement
            if (t instanceof HTMLTextAreaElement)
              return (
                ((t.dataset.imageTextInputFor ??
                  t.closest("[data-image-text-region]")?.getAttribute("data-image-text-region")) === e &&
                  t.value.slice(t.selectionStart, t.selectionEnd).trim()) ||
                void 0
              )
          }),
          (ts[115] = nt?.ownerDocument.activeElement),
          (ts[116] = eI))
        : (eI = ts[116])
      let rs = eI
      ts[117] !== nr || ts[118] !== t6
        ? ((eA = () => {
            ;(t6.set(t9.Zf, nr, null), n0(null), n3(null))
          }),
          (ts[117] = nr),
          (ts[118] = t6),
          (ts[119] = eA))
        : (eA = ts[119])
      let rd = eA
      ts[120] !== iy || ts[121] !== nr || ts[122] !== iC || ts[123] !== t6 || ts[124] !== rd
        ? ((eP = (e) => {
            ;(iC && "properties" !== e && rd(),
              iy && "properties" !== e && (t6.set(t9.Zf, nr, null), nJ(null)),
              t6.set(t9.l7, nr, e))
          }),
          (ts[120] = iy),
          (ts[121] = nr),
          (ts[122] = iC),
          (ts[123] = t6),
          (ts[124] = rd),
          (ts[125] = eP))
        : (eP = ts[125])
      let ru = eP
      ;(ts[126] !== tX || ts[127] !== iC || ts[128] !== ra || ts[129] !== tW || ts[130] !== rd
        ? ((eR = () => ({ onClearSelection: () => null != tW && (iC && rd(), tX(), ra(null), !0) })),
          (ts[126] = tX),
          (ts[127] = iC),
          (ts[128] = ra),
          (ts[129] = tW),
          (ts[130] = rd),
          (ts[131] = eR))
        : (eR = ts[131]),
        (0, u.useImperativeHandle)(td, eR),
        ts[132] !== nr || ts[133] !== tX || ts[134] !== t6 || ts[135] !== ra || ts[136] !== tv
          ? ((ez = (e) => {
              let t
              if (null == tv) return
              let n =
                null != (t = tv.items.find((t) => t.id === e.id)) && (0, _.gW)(t)
                  ? {
                      reference: tv.snapshot.reference,
                      sourceId: e.id,
                      rendering: { ...t.rendering, ...ei.N$, align: e.alignment },
                    }
                  : null
              null != n && (tX(), ra(e.id), nJ(null), n0(n), t6.set(t9.Zf, nr, "painter"), n3(null))
            }),
            (ts[132] = nr),
            (ts[133] = tX),
            (ts[134] = t6),
            (ts[135] = ra),
            (ts[136] = tv),
            (ts[137] = ez))
          : (ez = ts[137]))
      let rc = ez
      ts[138] !== nr || ts[139] !== t6
        ? ((eD = () => {
            ;((nb.current = !0), t6.set(t9.Zf, nr, null), nJ(null))
          }),
          (ts[138] = nr),
          (ts[139] = t6),
          (ts[140] = eD))
        : (eD = ts[140])
      let rg = eD,
        rm = (e, t, n) => {
          if (il.get(e)?.remove) return void ro(e)
          if (null == t && nO && nm?.blockId === e)
            return void nt
              ?.querySelector('[data-image-text-review] :is(textarea, [contenteditable="true"])')
              ?.focus({ preventScroll: !0 })
          let i = null == t ? (0, t9.Ig)(t6.get(t9.YY, nr), e) : void 0,
            r = null == t && null == i ? rs(e) : void 0
          if (nm?.blockId !== e || null == t) {
            let t = nt?.ownerDocument.activeElement
            nu.current =
              t instanceof HTMLTextAreaElement &&
              t.closest("[data-image-text-region]")?.getAttribute("data-image-text-region") === e
                ? t
                : null
          }
          ;(tX(), nJ(null), rd(), tq(e), nh({ blockId: e, noteId: t ?? i, excerpt: r, mode: null == i ? n : "edit" }))
        },
        rh = (e, t) => {
          rm(e, t, "edit")
        }
      ts[141] !== nU || ts[142] !== ra || ts[143] !== ru
        ? ((e$ = (e, t) => {
            ;((nM.current = !nU), (nw.current = void 0 !== t && t ? "opened" : null), ra(e), ru("properties"))
          }),
          (ts[141] = nU),
          (ts[142] = ra),
          (ts[143] = ru),
          (ts[144] = e$))
        : (e$ = ts[144])
      let rf = e$
      ts[145] !== tZ || ts[146] !== tX || ts[147] !== ra || ts[148] !== tv
        ? ((eL = (e) => {
            null != tv && (tX(), tZ(tv.items.filter((t) => t.id !== e)), ra(null))
          }),
          (ts[145] = tZ),
          (ts[146] = tX),
          (ts[147] = ra),
          (ts[148] = tv),
          (ts[149] = eL))
        : (eL = ts[149])
      let rx = eL,
        rp = (e) => {
          if (null == tv || nS.length >= 64) return
          let t = (0, ei.Cb)({ ...tv, items: [e] }, e.id, { x: 12, y: 12 }),
            n = crypto.randomUUID()
          ;((na.current = n), tX(), tZ([...tv.items, { ...t, id: n }]), ra(n))
        },
        ry = (e) => {
          null != tv &&
            iS &&
            (function (e, t, n, i, r, l) {
              let a,
                o = e.currentTarget.ownerDocument.activeElement === e.currentTarget ? e.currentTarget : e.target
              if (!(o instanceof Element)) return
              let s = o instanceof HTMLTextAreaElement && o.hasAttribute("data-image-text-input-for") ? o : null,
                d =
                  o === e.currentTarget ||
                  (null != o.closest("[data-image-text-surface]") &&
                    null == o.closest("input, textarea, button, [contenteditable=true]"))
              if (null == s && !d) return
              if ("paste" === e.type) {
                let i = e.clipboardData.getData(ee)
                if (!i) return
                ;(e.preventDefault(), e.stopPropagation())
                let l = t.current
                if (l?.token !== i || l.reference !== n.snapshot.reference) return
                null != s && "text" === l.content.kind
                  ? et(s, l.content.text)
                  : d && "layer" === l.content.kind && r(l.content.layer)
                return
              }
              if (null != s) {
                if (s.selectionStart === s.selectionEnd) return
                a = { kind: "text", text: s.value.slice(s.selectionStart, s.selectionEnd) }
              } else {
                let e = n.items.find((e) => e.id === i)
                if (null == e || !(0, _.gW)(e)) return
                a = { kind: "layer", layer: e }
              }
              let u = crypto.randomUUID()
              ;(e.clipboardData.setData(ee, u),
                e.preventDefault(),
                e.stopPropagation(),
                (t.current = { token: u, reference: n.snapshot.reference, content: a }),
                "cut" === e.type && (null != s ? et(s, "") : "layer" === a.kind && l(a.layer.id)))
            })(e, no, tv, tW, rp, (e) => {
              ;(nt?.focus({ preventScroll: !0 }), rx(e))
            })
        },
        rv = (0, C.K)((e) => {
          let t = e.target
          if (
            !iS ||
            (!e.ctrlKey && !e.metaKey) ||
            e.defaultPrevented ||
            e.isComposing ||
            e.repeat ||
            !(t instanceof Element) ||
            null == iw ||
            t.closest("[data-image-text-controls]")?.getAttribute("data-image-text-controls") !== iw
          )
            return null
          let n = (t) => (0, X.eg)(e, t)
          if (i7 && !tU?.hasRequests && n("CmdOrCtrl+Enter")) return tF
          if (null != nm) return null
          if (tG && n("CmdOrCtrl+Z"))
            return () => {
              ;(tX(), tQ())
            }
          if (tV && (n("CmdOrCtrl+Shift+Z") || (!(0, v.Z)() && n("Ctrl+Y"))))
            return () => {
              ;(tX(), t1())
            }
          if (nt?.contains(t)) {
            if (
              null != nF &&
              !iC &&
              !iy &&
              nS.length < 64 &&
              !t.closest("input, textarea, [contenteditable=true], [role=menu]") &&
              n("CmdOrCtrl+D")
            ) {
              let e = tv?.items.find((e) => e.id === nF.id)
              return null != e && (0, _.gW)(e) ? () => rp(e) : null
            }
            if (null != ip && n("CmdOrCtrl+Alt+M")) return () => rm(ip.id)
          }
          return null
        })
      ;(ts[150] !== rv || ts[151] !== ny || ts[152] !== nt
        ? ((eB = () => {
            let e = [nt, nf.current, ny].filter(n_).map((e) => (0, Z.Y)(e, (e) => null != rv(e)))
            return () => e.forEach(nk)
          }),
          (ts[150] = rv),
          (ts[151] = ny),
          (ts[152] = nt),
          (ts[153] = eB))
        : (eB = ts[153]),
        ts[154] !== rv || ts[155] !== ny || ts[156] !== t3 || ts[157] !== nt
          ? ((eK = [nt, ny, t3, rv]), (ts[154] = rv), (ts[155] = ny), (ts[156] = t3), (ts[157] = nt), (ts[158] = eK))
          : (eK = ts[158]),
        (0, u.useLayoutEffect)(eB, eK),
        ts[159] !== ra || ts[160] !== ix
          ? ((eY = (e) => {
              ;(ra(e), ix(e))
            }),
            (ts[159] = ra),
            (ts[160] = ix),
            (ts[161] = eY))
          : (eY = ts[161]))
      let rb = eY,
        rw = () => {
          ;(ru(null),
            "opened" === nw.current && nv.current && !iX.hide?.referenceHidden
              ? nv.current.focus({ preventScroll: !0 })
              : "opened" === nw.current && null != nF && iy
                ? (nw.current = "restore")
                : nt?.querySelector("[data-image-text-region][data-image-text-selected]")?.focus({ preventScroll: !0 }))
        },
        rj = () => {
          let e = nF?.fontId ?? tv?.assets.fonts[0]?.id
          if (null == tv || null == e || nS.length >= 64) return
          let t = crypto.randomUUID(),
            { width: n, height: i } = tv.snapshot.content,
            r = {
              id: t,
              kind: "text",
              text: t5.formatMessage({ id: "imageTextEditing.newText", defaultMessage: "New text" }),
              bbox: { x: 0.2, y: 0.425, width: 0.6, height: 0.15 },
              rendering: {
                mode: "editable",
                font_id: e,
                font_size: Math.max(1, Math.min(8192, Math.round(0.06 * Math.min(n, i)))),
                color: nF?.color ?? "#000000",
                align: "left",
                rotation: 0,
              },
            }
          ;((0, ei.e8)({ ...tv, items: [r] })?.code === "glyphs" && (r.text = ""),
            (ns.current = t),
            tZ([...tv.items, r]),
            rf(t))
        }
      ts[162] !== ru || ts[163] !== nt
        ? ((eq = () => {
            let e =
              nx.current ??
              nt?.querySelector("[data-image-text-region][data-image-text-selected]") ??
              nf.current?.querySelector("[data-image-text-discard]")
            ;(ru(null), e?.focus({ preventScroll: !0 }))
          }),
          (ts[162] = ru),
          (ts[163] = nt),
          (ts[164] = eq))
        : (eq = ts[164])
      let rM = eq,
        rC = (e, t) => {
          if (!iS || 0 === t) return null
          let n = nE === e
          return (0, i.jsx)(m.$, {
            ref: n ? nx : void 0,
            color: "ghostSecondary",
            size: "toolbar",
            radius: "large",
            "aria-expanded": n,
            "data-state": n ? "open" : void 0,
            onClick: () => ru(n ? null : e),
            children:
              "edits" === e
                ? (0, i.jsx)(c.A, {
                    id: "imageTextEditing.toolbarEditCount",
                    defaultMessage: "{count, plural, one {# edit} other {# edits}}",
                    values: { count: t },
                  })
                : (0, i.jsx)(c.A, {
                    id: "imageSidePanel.commentCount",
                    defaultMessage: "{count, plural, one {# comment} other {# comments}}",
                    values: { count: t },
                  }),
          })
        }
      ts[165] !== nr || ts[166] !== t6
        ? ((eZ = (e, t) => (0, t9.F4)(t6, nr, e, t)), (ts[165] = nr), (ts[166] = t6), (ts[167] = eZ))
        : (eZ = ts[167])
      let rE = eZ,
        rT =
          null != tv && ("edits" === nE || (nU && null != ip))
            ? ((t = tv.snapshot.content),
              (n = (e, t) =>
                tZ(
                  null == t
                    ? R(tv, "order" === e.kind ? null : e.id)
                    : (function (e, t, n) {
                        if ("order" === t.kind) return P(e, n.id)
                        let i = t.after,
                          r = A(t)
                        if (null == i || null == r || !n.canRevert) return e.items
                        if ("layer" === n.field) return R(e, t.id)
                        let l = (function (e, t, n, i) {
                          let r = n.rendering,
                            l = { ...t.rendering },
                            a = t.text,
                            { width: o, height: s } = e.snapshot.content,
                            d = (0, ei.IR)(t, o, s),
                            u = d
                          switch (i) {
                            case "position":
                            case "size": {
                              let e =
                                "position" === i
                                  ? { ...t.bbox, x: n.bbox.x, y: n.bbox.y }
                                  : { ...t.bbox, width: n.bbox.width, height: n.bbox.height }
                              return { ...t, bbox: e, rendering: (0, ei.uy)(l, t.bbox, e) }
                            }
                            case "guides": {
                              let i = (0, ei.uy)(r, n.bbox, t.bbox)
                              if ((0, ei.ET)(i)) return { ...t, rendering: { ...l, ...ei.N$ } }
                              let u = { ...n, bbox: t.bbox, rendering: i },
                                c = (0, ei.qD)(
                                  { ...e, items: e.items.map((e) => (e.id === t.id ? u : e)) },
                                  t.id,
                                  {
                                    ...l,
                                    baseline: i.baseline,
                                    upper_contour: i.upper_contour,
                                    line_layout: i.line_layout,
                                    start_offset: i.start_offset,
                                    render_width: i.render_width,
                                  },
                                  a,
                                  { previous: (0, ei.IR)(u, o, s), next: d },
                                )
                              return { ...t, rendering: er(c, i, a) }
                            }
                            case "wording":
                              a = n.text
                              break
                            case "color":
                              return { ...t, rendering: { ...l, color: r.color, fill_gradient: r.fill_gradient } }
                            case "rotation":
                              return { ...t, rendering: { ...l, rotation: r.rotation } }
                            case "font":
                              l.font_id = r.font_id
                              break
                            case "fontSize":
                              ;(null != l.line_height && (l.line_height *= r.font_size / l.font_size),
                                (l.font_size = r.font_size))
                              break
                            case "alignment":
                              l.align = u = (0, ei.IR)(n, o, s)
                              break
                            case "lineHeight":
                              l.line_height =
                                null == r.line_height ? r.line_height : (r.line_height / r.font_size) * l.font_size
                              break
                            case "letterSpacing":
                              l.letter_spacing = r.letter_spacing
                              break
                            case "wordSpacing":
                              l.word_spacing = r.word_spacing
                              break
                            case "characterWidth":
                              l.horizontal_scale = r.horizontal_scale
                              break
                            case "layer":
                            case "stack":
                              return t
                          }
                          if ((0, ei.ET)(t.rendering)) return { ...t, text: a, rendering: l }
                          let c = (0, ei.qD)(e, t.id, l, a, { previous: d, next: u })
                          return { ...t, text: a, rendering: er(c, t.rendering, a) }
                        })(e, i, r, n.field)
                        return (
                          "fontSize" === n.field && (0, en.pb)(l, (0, en._8)(r, r.rendering.font_size)),
                          e.items.map((e) => (e.id === t.id ? l : e))
                        )
                      })(tv, e, t),
                )),
              (l = nU ? ip?.id : void 0),
              [
                ...io
                  .filter((e) => null == l || e.region.id === l)
                  .map((e) => ({
                    key: `request:${e.region.id}`,
                    layerId: e.region.id,
                    target: e.region.text,
                    changes: tp(t5, e).map(({ field: t, text: n }) => ({
                      key: t,
                      text: n,
                      onRevert: () =>
                        rE(
                          e.region.id,
                          (function ({ region: e, change: t }, n) {
                            if ("remove" === n) return { ...t, remove: void 0 }
                            if ("wording" === n) return { ...t, replacementText: void 0 }
                            let { destination: i } = t
                            if (null == i) return t
                            let r = { ...i }
                            return (
                              "position" === n
                                ? ((r.x = e.x), (r.y = e.y))
                                : "size" === n
                                  ? ((r.width = e.width), (r.height = e.height))
                                  : (r.rotation = e.rotation),
                              { ...t, destination: tx(e, r) ? void 0 : r }
                            )
                          })(e, t),
                        ),
                    })),
                    summary:
                      e.change.remove && (null != e.change.destination || null != e.change.replacementText)
                        ? t5.formatMessage({
                            id: "imageTextEditing.removalRequested",
                            defaultMessage: "Removal requested",
                          })
                        : void 0,
                    revertLabel: tb(t5, e.region.text),
                    onRevert: () => rE(e.region.id, {}),
                  })),
                ...ia
                  .filter((e) => null == l || ("order" === e.kind ? e.positions.some((e) => e.id === l) : e.id === l))
                  .map((e) => {
                    let i = "order" === e.kind,
                      r = i
                        ? t5.formatMessage({ id: "imageTextEditing.editsLayerOrder", defaultMessage: "Layer order" })
                        : (e.before?.text ?? e.after?.text ?? "")
                    return {
                      key: i ? "order" : `text:${e.id}`,
                      layerId: e.id,
                      target: r,
                      changes: (function (e, t, n) {
                        if ("order" === t.kind)
                          return t.positions.map((t) => ({
                            id: t.id,
                            field: "stack",
                            text: e.formatMessage(tc.order, t),
                            canRevert: !0,
                          }))
                        let { after: i, id: r } = t
                        if (null == i)
                          return [{ id: r, field: "layer", text: e.formatMessage(tc.deleted), canRevert: !0 }]
                        let l = A(t),
                          a = null == t.before,
                          o = []
                        function s(e, t, n) {
                          o.push({ id: r, field: e, text: t, canRevert: null != l && n })
                        }
                        null != l &&
                          l.text !== i.text &&
                          s("wording", e.formatMessage(tc.wording, { text: i.text }), !0)
                        let d = i.bbox,
                          u = null != l && (tg(l.bbox.x, d.x) || tg(l.bbox.y, d.y))
                        ;(a || u) &&
                          s(
                            "position",
                            e.formatMessage(u ? tc.moved : tc.position, { x: d.x * n.width, y: d.y * n.height }),
                            u,
                          )
                        let c = null != l && (tg(l.bbox.width, d.width) || tg(l.bbox.height, d.height))
                        ;(a || c) &&
                          s(
                            "size",
                            e.formatMessage(tc.size, { width: d.width * n.width, height: d.height * n.height }),
                            c,
                          )
                        let g = l?.rendering,
                          m = i.rendering
                        if (a || g?.font_id !== m.font_id) {
                          let t = n.fonts.find((e) => e.id === m.font_id)
                          s("font", e.formatMessage(tc.font, { name: t?.name ?? m.font_id }), g?.font_id !== m.font_id)
                        }
                        let h = g?.color !== m.color || !k()(g?.fill_gradient ?? null, m.fill_gradient ?? null)
                        ;(a || h) &&
                          s(
                            "color",
                            null == m.fill_gradient
                              ? e.formatMessage(tc.color, { color: m.color })
                              : e.formatMessage(tc.gradient, {
                                  colors: e.formatList(m.fill_gradient.stops.map((e) => e.color)),
                                }),
                            h,
                          )
                        let f = (0, ei.IR)(i, n.width, n.height),
                          x = null == l ? "left" : (0, ei.IR)(l, n.width, n.height)
                        for (let [t, n, i, r] of ((f !== x || (a && "left" !== f)) &&
                          s("alignment", e.formatMessage(tc.alignment, { alignment: f }), f !== x),
                        [
                          ["fontSize", g?.font_size ?? 0, m.font_size, 0],
                          ["rotation", g?.rotation ?? 0, m.rotation, 0],
                          [
                            "lineHeight",
                            g?.line_height == null ? 1.2 : g.line_height / g.font_size,
                            null == m.line_height ? 1.2 : m.line_height / m.font_size,
                            1.2,
                          ],
                          ["letterSpacing", g?.letter_spacing ?? 0, m.letter_spacing ?? 0, 0],
                          ["wordSpacing", g?.word_spacing ?? 0, m.word_spacing ?? 0, 0],
                          ["characterWidth", g?.horizontal_scale ?? 1, m.horizontal_scale ?? 1, 1],
                        ])) {
                          let l = tg(n, i)
                          ;(l || (a && tg(r, i))) && s(t, e.formatMessage(tc[t], { value: i }), l)
                        }
                        return (
                          null != l &&
                            (function (e, t) {
                              let n = tm(e).slice(0, 2 + 2 * t.text.split("\n").length),
                                i = tm(t)
                              for (let r = 0; r < Math.max(n.length, i.length); r++) {
                                let l = n[r] ?? null,
                                  a = i[r] ?? null
                                if (l !== a) {
                                  if (null == l || null == a) return !0
                                  try {
                                    let n = (0, ei.rc)(l),
                                      i = (0, ei.rc)(a)
                                    if (
                                      n.length !== i.length ||
                                      n.some(
                                        (n, r) =>
                                          n.command !== i[r].command ||
                                          n.values.some((n, l) => {
                                            let a = l % 2 == 0,
                                              o = a ? "x" : "y",
                                              s = a ? "width" : "height",
                                              d = (n - e.bbox[o]) / e.bbox[s]
                                            return tg(t.bbox[o] + d * t.bbox[s], i[r].values[l])
                                          }),
                                      )
                                    )
                                      return !0
                                  } catch (e) {
                                    if (!(e instanceof ei.Zo)) throw e
                                    return !0
                                  }
                                }
                              }
                              return !1
                            })(l, i) &&
                            s("guides", e.formatMessage(tc.guides), !0),
                          0 === o.length && s("layer", e.formatMessage(tc.layout), !0),
                          o
                        )
                      })(t5, e, t)
                        .filter((e) => null == l || e.id === l)
                        .map((t) => ({
                          key: `${t.id}:${t.field}`,
                          text: t.text,
                          onRevert: t.canRevert ? () => n(e, t) : void 0,
                        })),
                      summary:
                        i || null != e.before
                          ? void 0
                          : t5.formatMessage({ id: "imageTextEditing.directTextAdded", defaultMessage: "Added text" }),
                      revertLabel: tb(t5, i ? null : r),
                      onRevert: () => n(e),
                    }
                  }),
              ])
            : [],
        rS = () => {
          null == ig || nl || (rE(ig.id, { ...im, remove: !0 }), ra(null))
        },
        rk =
          null != tv
            ? (0, i.jsxs)(J.V, {
                open: (nU || nT) && iS,
                stageElement: nt,
                toolbarRef: nf,
                children: [
                  "edits" === nE &&
                    iS &&
                    (0, i.jsx)(tT, {
                      edits: rT,
                      disabled: tw || nl,
                      invalidDraft: null != tj,
                      selectedLayerId: tW,
                      onOpen: ro,
                      onClose: rM,
                    }),
                  "comments" === nE &&
                    iS &&
                    (0, i.jsx)(nC, {
                      reviewKey: nr,
                      comments: ic,
                      selectedNoteId: nm?.noteId ?? null,
                      onOpen: rm,
                      onEdit: rh,
                      onDeselectThread: () => nh(null),
                      onCloseList: rM,
                      onAddComment: null == ip ? void 0 : () => rm(ip.id),
                    }),
                  (!nT || !iS) &&
                    (0, i.jsx)(tJ, {
                      source: tv,
                      selected: nF,
                      open: nU && iS,
                      onChange: rt,
                      editingGuides: iy,
                      onExitGuides: rg,
                      onCancelPainter: iC ? rd : void 0,
                      onStartPainter: null != nF && nS.length > 1 ? () => rc(nF) : void 0,
                      guideControls: (0, i.jsx)(eN, {
                        guides: iH,
                        active: iF,
                        editing: iy,
                        text: nF?.text ?? "",
                        onSelect: nJ,
                        onStart: () => {
                          let e = nt?.ownerDocument.activeElement,
                            t =
                              e instanceof HTMLTextAreaElement
                                ? e.value.slice(0, e.selectionStart).split("\n").length - 1
                                : null,
                            n = iH.find((e) => "baseline" === e.kind && e.lineIndex === t) ?? iH[0]
                          null != n && (rd(), nh(null), nJ(n.id), t6.set(t9.Zf, nr, "guides"))
                        },
                        onDone: rg,
                        startButtonRef: (e) => {
                          null != e && nb.current && ((nb.current = !1), e.focus({ preventScroll: !0 }))
                        },
                      }),
                      onEditEnd: tX,
                      onComment: () => {
                        null != ip && rm(ip.id)
                      },
                      onAddText: tv.assets.fonts.length > 0 && nS.length < 64 ? rj : void 0,
                      target: ig,
                      request: im,
                      sendingRequest: nl,
                      onChangeRequest: rE,
                      editBlock:
                        nU &&
                        null != ip &&
                        (0, i.jsx)(tM, {
                          groups: rT,
                          name: ip.text,
                          disabled: tw || nl,
                          invalidDraft: null != tj,
                          onRevert: () => {
                            if (null != ig) rE(ig.id, {})
                            else {
                              let e = ip.id,
                                t = R(tv, e)
                              ;(tZ(P({ ...tv, items: t }, e)), t.some((t) => t.id === e) || ra(null))
                            }
                          },
                        }),
                      layerOrderControls:
                        nU && null != nF && (0, i.jsx)(tN, { items: tv.items, id: nF.id, neighbors: iL, onChange: tZ }),
                      takeNewTextFocus: nd,
                      onDeleteSelected: nl
                        ? void 0
                        : () => {
                            null != nF ? rx(nF.id) : rS()
                          },
                      onClose: rw,
                    }),
                ],
              })
            : null,
        r_ = 0.3 * !ne
      ts[168] !== r_ ? ((eX = { duration: r_, ease: V.Wu }), (ts[168] = r_), (ts[169] = eX)) : (eX = ts[169])
      let rI = eX,
        rA = tw || tI || iE,
        rP = i_ ? iI : void 0,
        rR = i_ ? iI : void 0
      ;(ts[170] !== rM ||
      ts[171] !== iy ||
      ts[172] !== rg ||
      ts[173] !== rv ||
      ts[174] !== nT ||
      ts[175] !== iC ||
      ts[176] !== rd
        ? ((eG = (e) => {
            let t = rv(e.nativeEvent)
            if (null != t) {
              ;(e.preventDefault(), e.stopPropagation(), t())
              return
            }
            if ("Escape" === e.key && !e.defaultPrevented && !e.nativeEvent.isComposing) {
              if (nT && e.target instanceof Node && nf.current?.contains(e.target)) {
                ;(e.preventDefault(), e.stopPropagation(), rM())
                return
              }
              ;(iy || iC) && (e.preventDefault(), e.stopPropagation(), iy ? rg() : rd())
            }
          }),
          (ts[170] = rM),
          (ts[171] = iy),
          (ts[172] = rg),
          (ts[173] = rv),
          (ts[174] = nT),
          (ts[175] = iC),
          (ts[176] = rd),
          (ts[177] = eG))
        : (eG = ts[177]),
        ts[178] !== tV ||
        ts[179] !== tG ||
        ts[180] !== iS ||
        ts[181] !== t5 ||
        ts[182] !== iE ||
        ts[183] !== iv ||
        ts[184] !== tX ||
        ts[185] !== t1 ||
        ts[186] !== tQ ||
        ts[187] !== tI ||
        ts[188] !== t4 ||
        ts[189] !== ne ||
        ts[190] !== tP ||
        ts[191] !== rI
          ? ((eV =
              tP || tI || iE || iv
                ? (0, i.jsx)(B.P.span, {
                    layout: !ne && "size",
                    transition: rI,
                    role: "status",
                    className: "flex h-9 items-center px-2.5 text-sm text-secondary select-none",
                    children: (0, i.jsx)(nD, { saving: tP, reconnecting: t4, loadingDocument: iE, noEditableText: iv }),
                  })
                : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-wrap items-center justify-center",
                    children: [
                      (0, i.jsx)(m.$, {
                        color: "ghost",
                        size: "imageToolbar",
                        disabled: !tG || !iS,
                        onClick: () => {
                          ;(tX(), tQ())
                        },
                        "aria-label": t5.formatMessage(nH.undo),
                        children: (0, i.jsx)(x.O8y, {}),
                      }),
                      (0, i.jsx)(m.$, {
                        color: "ghost",
                        size: "imageToolbar",
                        disabled: !tV || !iS,
                        onClick: () => {
                          ;(tX(), t1())
                        },
                        "aria-label": t5.formatMessage(nH.redo),
                        children: (0, i.jsx)(x.trM, {}),
                      }),
                    ],
                  })),
            (ts[178] = tV),
            (ts[179] = tG),
            (ts[180] = iS),
            (ts[181] = t5),
            (ts[182] = iE),
            (ts[183] = iv),
            (ts[184] = tX),
            (ts[185] = t1),
            (ts[186] = tQ),
            (ts[187] = tI),
            (ts[188] = t4),
            (ts[189] = ne),
            (ts[190] = tP),
            (ts[191] = rI),
            (ts[192] = eV))
          : (eV = ts[192]))
      let rz =
        i3 &&
        (0, i.jsxs)("div", {
          className: "flex shrink-0 items-center gap-1 pe-1",
          "data-image-text-request": nr,
          children: [
            rC("edits", ia.length + io.length),
            rC("comments", ic.length),
            (0, i.jsx)(m.$, {
              color: "ghost",
              size: "toolbar",
              radius: "large",
              "data-image-text-discard": !0,
              onClick: (e) => tz(e.currentTarget),
              children: (0, i.jsx)(c.A, { id: "imageTextEditing.cancel", defaultMessage: "Cancel" }),
            }),
            (0, i.jsx)(m.$, {
              size: "toolbar",
              radius: "large",
              disabled: !i7,
              onClick: tU?.hasRequests ? () => void tU.onSend() : tF,
              children: (0, i.jsx)(c.A, { ...re }),
            }),
          ],
        })
      ;(ts[193] !== eV || ts[194] !== rz
        ? ((eQ = (0, i.jsxs)(Q.b, { variant: "embedded", children: [eV, rz] })),
          (ts[193] = eV),
          (ts[194] = rz),
          (ts[195] = eQ))
        : (eQ = ts[195]),
        ts[196] !== tU
          ? ((eJ =
              tU?.errorMessage != null &&
              (0, i.jsx)("div", {
                role: "alert",
                className: "text-center text-sm text-danger",
                children: tU.errorMessage,
              })),
            (ts[196] = tU),
            (ts[197] = eJ))
          : (eJ = ts[197]),
        ts[198] !== iw || ts[199] !== eQ || ts[200] !== eJ
          ? ((e1 = (0, i.jsxs)("div", {
              ref: nf,
              className: "pointer-events-auto min-w-0",
              "data-image-text-controls": iw,
              children: [eQ, eJ],
            })),
            (ts[198] = iw),
            (ts[199] = eQ),
            (ts[200] = eJ),
            (ts[201] = e1))
          : (e1 = ts[201]),
        ts[202] !== t3 || ts[203] !== e1
          ? ((e0 = t3(e1)), (ts[202] = t3), (ts[203] = e1), (ts[204] = e0))
          : (e0 = ts[204]),
        ts[205] !== ie || ts[206] !== tE.imageRect
          ? ((e2 =
              ie &&
              (0, i.jsx)(nL, {
                layers: ie,
                imageRect: tE.imageRect,
                inkRef: (e) => {
                  ;((n8.current = e),
                    null != e && null != n7.current && e.setAttribute("transform", n7.current.transform))
                },
              })),
            (ts[205] = ie),
            (ts[206] = tE.imageRect),
            (ts[207] = e2))
          : (e2 = ts[207]),
        ts[208] !== iS || ts[209] !== ie || ts[210] !== tC || ts[211] !== tE.imageRect
          ? ((e3 =
              null == ie && iS && tC && (0, ei.xV)(tC) && (0, i.jsx)(nB, { preview: tC, imageRect: tE.imageRect })),
            (ts[208] = iS),
            (ts[209] = ie),
            (ts[210] = tC),
            (ts[211] = tE.imageRect),
            (ts[212] = e3))
          : (e3 = ts[212]),
        ts[213] !== iS || ts[214] !== iy || ts[215] !== iC || ts[216] !== ra || ts[217] !== nt
          ? ((e4 = (e) => {
              e.target !== e.currentTarget || !iS || iy || iC || (nt?.focus({ preventScroll: !0 }), ra(null))
            }),
            (ts[213] = iS),
            (ts[214] = iy),
            (ts[215] = iC),
            (ts[216] = ra),
            (ts[217] = nt),
            (ts[218] = e4))
          : (e4 = ts[218]),
        ts[219] !== nj || ts[220] !== iT || ts[221] !== t_
          ? ((e5 =
              !nj &&
              !iT &&
              null != t_ &&
              (0, i.jsx)("img", { alt: "", className: "pointer-events-none absolute inset-0 h-full w-full", src: t_ })),
            (ts[219] = nj),
            (ts[220] = iT),
            (ts[221] = t_),
            (ts[222] = e5))
          : (e5 = ts[222]))
      let rN =
        tv &&
        (0, i.jsxs)(i.Fragment, {
          children: [
            null == ie && tC && (0, i.jsx)(n$, { image: tC }),
            is.length > 0 &&
              (0, i.jsx)("svg", {
                "aria-hidden": !0,
                "data-image-layer-removal-preview": !0,
                className: "pointer-events-none absolute inset-0 h-full w-full",
                viewBox: `0 0 ${tv.snapshot.content.width} ${tv.snapshot.content.height}`,
                children: is.map((e) =>
                  (0, i.jsx)(tk, { target: e, zoom: tE.imageRect.width / tv.snapshot.content.width }, e.id),
                ),
              }),
            iS &&
              (0, i.jsxs)("div", {
                className: "pointer-events-none absolute inset-0 isolate",
                children: [
                  !iy &&
                    !iC &&
                    id.map((e) => {
                      let t = il.get(e.id),
                        n = `0 0 ${tv.snapshot.content.width} ${tv.snapshot.content.height}`,
                        r = "preserved" === e.kind ? () => rb(e.id) : void 0
                      return (0, i.jsxs)(
                        u.Fragment,
                        {
                          children: [
                            (0, i.jsx)("svg", {
                              className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                              viewBox: n,
                              onPointerDown: (e) => {
                                e.target === e.currentTarget && ra(null)
                              },
                              children: (0, i.jsx)(tS, {
                                target: e,
                                selectionHost: nc,
                                destination: t?.destination,
                                imageSize: tv.snapshot.content,
                                displayWidth: tE.imageRect.width,
                                backgroundUrl: tv.assets.backgroundUrl,
                                active: tW === e.id,
                                showHover: null == ip,
                                canInteract: !tE.isInteracting && !tE.isPanReady && !nl,
                                reference: tW === e.id ? iQ : void 0,
                                onSelect: () => ra(e.id),
                                onKeyboardFocus: (t) => {
                                  null != nt && t0(nt, tE, { ...e, ...t, rotation: t.rotation ?? e.rotation }, tv)
                                },
                                onDeselect: () => ra(null),
                                onEditText: r,
                                onTransforming: nG,
                                onDestination: (n) => (0, t9.F4)(t6, nr, e.id, { ...t, destination: n }),
                              }),
                            }),
                            tW === e.id &&
                              (0, i.jsx)("svg", {
                                className: "pointer-events-none absolute inset-0 z-1 h-full w-full overflow-visible",
                                viewBox: n,
                                children: (0, i.jsx)("g", { ref: ng, tabIndex: -1 }),
                              }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  !iy &&
                    !(iC && (tE.isPanReady || tE.isInteracting)) &&
                    nS
                      .filter((e) => !iC || e.id !== n1?.sourceId)
                      .map((e) =>
                        (0, i.jsxs)(
                          u.Fragment,
                          {
                            children: [
                              (0, i.jsx)("svg", {
                                className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                                viewBox: `0 0 ${tv.snapshot.content.width} ${tv.snapshot.content.height}`,
                                children: iC
                                  ? (0, i.jsx)(tY, {
                                      region: e,
                                      onApply: () =>
                                        ((e) => {
                                          let t = nS.find((t) => t.id === e)
                                          if (null == tv || null == t || null == n1 || !iC || e === n1.sourceId) return
                                          let n = (function (e, t, n) {
                                            let i = e.items.find((e) => e.id === t.id)
                                            if (
                                              n.reference !== e.snapshot.reference ||
                                              t.id === n.sourceId ||
                                              null == i ||
                                              !(0, _.gW)(i)
                                            )
                                              return { items: e.items }
                                            let r = {
                                                ...i,
                                                rendering: { ...n.rendering, rotation: i.rendering.rotation },
                                              },
                                              l = { ...e, items: [r] }
                                            try {
                                              let t = (0, ei.hF)(l, e.assets.fonts, i.id, i.text, "both")
                                              if (null == t)
                                                return { items: e.items, error: new ei.Zo("font", void 0, i.id) }
                                              let { width: n, height: a } = e.snapshot.content
                                              ;((r.bbox = {
                                                x: t.x / n,
                                                y: t.y / a,
                                                width: t.width / n,
                                                height: t.height / a,
                                              }),
                                                (r.rendering = (0, ei.kN)(e, i, r)))
                                              let o = (0, ei.e8)(l)
                                              if (null != o) return { items: e.items, error: o }
                                              if (k()(r, i)) return { items: e.items }
                                              return (
                                                (0, en.pb)(r, r.rendering.font_size),
                                                { items: e.items.map((e) => (e === i ? r : e)) }
                                              )
                                            } catch (t) {
                                              if (t instanceof ei.Zo) return { items: e.items, error: t }
                                              throw t
                                            }
                                          })(tv, t, n1)
                                          ;(ra(e), null != n.error)
                                            ? n3({ id: e, error: n.error })
                                            : (n.items !== tv.items && (tX(), tZ(n.items)), rd())
                                        })(e.id),
                                    })
                                  : (0, i.jsxs)("g", {
                                      ref: e.id === tW ? n5 : void 0,
                                      "data-image-text-hover-label": null == ip ? e.text : void 0,
                                      children: [
                                        (0, i.jsx)("rect", {
                                          ref: e.id === tW ? iQ : void 0,
                                          className: "pointer-events-none",
                                          x: e.x,
                                          y: e.y,
                                          width: e.width,
                                          height: e.height,
                                          transform: `rotate(${e.rotation} ${e.x + e.width / 2} ${e.y + e.height / 2})`,
                                          fill: "none",
                                          stroke: tW === e.id ? L.l : "none",
                                          strokeWidth: 1.25,
                                          vectorEffect: "non-scaling-stroke",
                                        }),
                                        (0, i.jsx)(e6, {
                                          region: e,
                                          source: tv,
                                          fonts: tv.assets.fonts,
                                          imageSize: tv.snapshot.content,
                                          displayWidth: tE.imageRect.width,
                                          active: tW === e.id,
                                          handleHost: nc,
                                          showHover: null == ip,
                                          canInteract: !tE.isInteracting && !tE.isPanReady,
                                          disabled: tP,
                                          onSelect: () => ra(e.id),
                                          onKeyboardFocus: () => {
                                            null != nt && t0(nt, tE, e, tv)
                                          },
                                          onDeselect: () => ra(null),
                                          onDelete: () => rx(e.id),
                                          onChange: (t, n) => rt(t, `text-${e.id}`, n),
                                          onTranslatePreview: null == i4 ? rn : void 0,
                                          onMoveStart: ri,
                                          onMoveEnd: rr,
                                          onUndo: tQ,
                                          onRedo: t1,
                                          onEditEnd: tX,
                                        }),
                                      ],
                                    }),
                              }),
                              e.id === tW &&
                                !iC &&
                                (0, i.jsx)("svg", {
                                  className: "pointer-events-none absolute inset-0 z-1 h-full w-full overflow-visible",
                                  viewBox: `0 0 ${tv.snapshot.content.width} ${tv.snapshot.content.height}`,
                                  children: (0, i.jsx)("g", { ref: n9, children: (0, i.jsx)("g", { ref: ng }) }),
                                }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                  (0, i.jsx)("svg", {
                    className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    viewBox: `0 0 ${tv.snapshot.content.width} ${tv.snapshot.content.height}`,
                    children:
                      iy &&
                      null != iF &&
                      null != nF &&
                      !tE.isPanReady &&
                      !tE.isInteracting &&
                      (0, i.jsx)(
                        eH,
                        {
                          guides: iH,
                          activeGuideId: iF.id,
                          region: nF,
                          imageSize: tv.snapshot.content,
                          displayWidth: tE.imageRect.width,
                          onStart: ri,
                          onEnd: rr,
                          onMove: rl,
                        },
                        nF.id,
                      ),
                  }),
                ],
              }),
          ],
        })
      ts[223] !== tI ||
      ts[224] !== iT ||
      ts[225] !== t_ ||
      ts[226] !== rI ||
      ts[227] !== tE.fitImageRect ||
      ts[228] !== tE.imageRect
        ? ((e9 =
            iT &&
            (0, i.jsx)(
              B.P.div,
              {
                className: "pointer-events-none absolute top-0 left-0 origin-top-left",
                style: {
                  width: tE.fitImageRect.width,
                  height: tE.fitImageRect.height,
                  transform: `scale(${tE.fitImageRect.width > 0 ? tE.imageRect.width / tE.fitImageRect.width : 1})`,
                },
                exit: { opacity: 0 },
                transition: rI,
                children: (0, i.jsx)(tH, { preparing: tI, previewSrc: t_ }),
              },
              "text-loading",
            )),
          (ts[223] = tI),
          (ts[224] = iT),
          (ts[225] = t_),
          (ts[226] = rI),
          (ts[227] = tE.fitImageRect),
          (ts[228] = tE.imageRect),
          (ts[229] = e9))
        : (e9 = ts[229])
      let rD =
        i_ &&
        null != tv &&
        (0, i.jsx)(
          tD.A,
          {
            regions: iu,
            imageSize: tv.snapshot.content,
            reducedMotion: ne,
            onFinish: (e) => {
              ;(iI(), tq(e))
            },
          },
          iw,
        )
      ;(ts[230] !== e9 || ts[231] !== rD
        ? ((e8 = (0, i.jsxs)(K.N, { initial: !1, mode: "wait", children: [e9, rD] })),
          (ts[230] = e9),
          (ts[231] = rD),
          (ts[232] = e8))
        : (e8 = ts[232]),
        ts[233] !== i9 || ts[234] !== tO || ts[235] !== ib || ts[236] !== t2 || ts[237] !== i4
          ? ((e7 =
              (null != tO || (null != i4 && null == i9)) &&
              (0, i.jsxs)("div", {
                role: "alert",
                className:
                  "absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-surface/95 p-4 text-sm text-default",
                children: [
                  tO ?? (0, i.jsx)(nK, { error: i4 }),
                  ib &&
                    t2 &&
                    (0, i.jsx)(m.$, {
                      color: "secondary",
                      onClick: t2,
                      children: (0, i.jsx)(c.A, {
                        id: "imageTextEditing.retryLoading",
                        defaultMessage: "Retry loading",
                      }),
                    }),
                ],
              })),
            (ts[233] = i9),
            (ts[234] = tO),
            (ts[235] = ib),
            (ts[236] = t2),
            (ts[237] = i4),
            (ts[238] = e7))
          : (e7 = ts[238]),
        ts[239] !== e4 ||
        ts[240] !== e5 ||
        ts[241] !== rN ||
        ts[242] !== e8 ||
        ts[243] !== e7 ||
        ts[244] !== tE.imageRect
          ? ((te = (0, i.jsxs)("div", {
              className: "pointer-events-auto absolute",
              style: tE.imageRect,
              "data-image-text-surface": !0,
              onPointerDown: e4,
              children: [e5, rN, e8, e7],
            })),
            (ts[239] = e4),
            (ts[240] = e5),
            (ts[241] = rN),
            (ts[242] = e8),
            (ts[243] = e7),
            (ts[244] = tE.imageRect),
            (ts[245] = te))
          : (te = ts[245]),
        ts[246] !== iS ||
        ts[247] !== iy ||
        ts[248] !== iC ||
        ts[249] !== ip ||
        ts[250] !== nt ||
        ts[251] !== tE.isInteracting ||
        ts[252] !== tE.isPanReady
          ? ((tt =
              iS &&
              null == ip &&
              !iy &&
              !iC &&
              !tE.isPanReady &&
              !tE.isInteracting &&
              null != nt &&
              (0, i.jsx)(eW, { stage: nt })),
            (ts[246] = iS),
            (ts[247] = iy),
            (ts[248] = iC),
            (ts[249] = ip),
            (ts[250] = nt),
            (ts[251] = tE.isInteracting),
            (ts[252] = tE.isPanReady),
            (ts[253] = tt))
          : (tt = ts[253]))
      let r$ =
        iS &&
        !iy &&
        !iC &&
        null != tv &&
        null != nt &&
        (0, i.jsx)(
          np,
          {
            reviewKey: nr,
            selection: nm?.blockId === ik ? nm : null,
            regions: iu,
            viewport: tE,
            imageSize: tv.snapshot.content,
            containerElement: nt,
            toolbarRef: nf,
            onOpen: rm,
            onEdit: rh,
            onClose: (e) => {
              if (null != e) {
                let t = t6.get(t9.sY, nr).get(ni)
                t?.noteId === e && "edit" !== t.mode && nh(null)
                return
              }
              nh(null)
              let t = nu.current
              if (((nu.current = null), t?.isConnected)) return void t.focus({ preventScroll: !0 })
              let n = nt?.querySelector("[data-image-text-region][data-image-text-selected]")
              n?.focus({ preventScroll: !0 })
            },
          },
          nr,
        )
      return (
        ts[254] !== rj || ts[255] !== iS || ts[256] !== nU || ts[257] !== nS || ts[258] !== tv || ts[259] !== ir
          ? ((tn =
              iS &&
              null != tv &&
              !nU &&
              0 === nS.length &&
              tv.assets.fonts.length > 0 &&
              (0, i.jsx)("div", {
                className:
                  0 === ir.length
                    ? "pointer-events-none absolute inset-0 grid place-items-center"
                    : "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
                children: (0, i.jsx)(m.$, {
                  className: "pointer-events-auto",
                  size: "medium",
                  radius: "full",
                  color: "secondary",
                  onClick: rj,
                  children: (0, i.jsx)(c.A, { id: "imageTextEditing.add", defaultMessage: "Add text" }),
                }),
              })),
            (ts[254] = rj),
            (ts[255] = iS),
            (ts[256] = nU),
            (ts[257] = nS),
            (ts[258] = tv),
            (ts[259] = ir),
            (ts[260] = tn))
          : (tn = ts[260]),
        ts[261] !== i5 || ts[262] !== i9 || ts[263] !== tv || ts[264] !== tE.imageRect
          ? ((tr =
              null != i5 &&
              null != i9 &&
              null != tv &&
              (0, i.jsx)("div", {
                className:
                  "pointer-events-none absolute z-20 max-w-60 rounded-lg bg-surface-elevated px-2 py-1 text-sm text-danger shadow-md",
                role: "alert",
                style: {
                  left: `clamp(8px, ${tE.imageRect.left + (i9.x * tE.imageRect.width) / tv.snapshot.content.width}px, calc(100% - 15rem))`,
                  top: `clamp(8px, ${tE.imageRect.top + ((i9.y + i9.height) * tE.imageRect.height) / tv.snapshot.content.height + 6}px, calc(100% - 3rem))`,
                },
                children: (0, i.jsx)(nK, { error: i5 }),
              })),
            (ts[261] = i5),
            (ts[262] = i9),
            (ts[263] = tv),
            (ts[264] = tE.imageRect),
            (ts[265] = tr))
          : (tr = ts[265]),
        ts[266] !== rt ||
        ts[267] !== rw ||
        ts[268] !== nr ||
        ts[269] !== iq ||
        ts[270] !== t5 ||
        ts[271] !== iZ ||
        ts[272] !== i2 ||
        ts[273] !== iX ||
        ts[274] !== rf ||
        ts[275] !== rm ||
        ts[276] !== nU ||
        ts[277] !== rS ||
        ts[278] !== t6 ||
        ts[279] !== nF ||
        ts[280] !== ip ||
        ts[281] !== ig ||
        ts[282] !== im ||
        ts[283] !== nl ||
        ts[284] !== iJ ||
        ts[285] !== ix ||
        ts[286] !== iA ||
        ts[287] !== tv ||
        ts[288] !== nt ||
        ts[289] !== t7 ||
        ts[290] !== ih
          ? ((tl =
              iA &&
              tv &&
              ip &&
              (0, i.jsx)("div", {
                ref: iJ,
                "data-image-text-formatting-strip": !0,
                className: "z-10 w-max max-w-[calc(100%-1rem)] text-default",
                "data-annotation-control": !0,
                role: "group",
                "aria-label": t5.formatMessage(null == ig ? nH.textProperties : nH.layerActions),
                style: { ...iq, visibility: iZ && !iX.hide?.referenceHidden ? void 0 : "hidden" },
                children: (0, i.jsx)("div", {
                  style: { zoom: t7 },
                  children: (0, i.jsx)(ev, {
                    children: (0, i.jsx)(W.iU, {
                      variant: "formatting",
                      children: (0, i.jsxs)("div", {
                        className: "flex max-w-full min-w-0 items-center gap-0.5",
                        children: [
                          null != ig
                            ? (0, i.jsx)(
                                ti,
                                {
                                  menuPlacement: i2,
                                  target: ig,
                                  change: im,
                                  editing: ih === ig.id,
                                  onEdit: (e) => ix(e ? ig.id : null),
                                  onChange: (e) => (0, t9.F4)(t6, nr, ig.id, e),
                                },
                                ig.id,
                              )
                            : nF &&
                              (0, i.jsx)("div", {
                                className: "flex min-w-0 items-center gap-0.5 overflow-x-auto",
                                children: (0, i.jsx)(eb, { menuPlacement: i2, source: tv, selected: nF, onChange: rt }),
                              }),
                          (0, i.jsx)(Y.P, {
                            color: "ghostActive",
                            size: "formatToolbarIcon",
                            "aria-label": t5.formatMessage(nH.comment),
                            onClick: () => rm(ip.id),
                            children: (0, i.jsx)(f.I, { asset: $.g }),
                          }),
                          null != ig &&
                            (0, i.jsx)(Y.P, {
                              color: "ghostActive",
                              size: "formatToolbarIcon",
                              "aria-label": t5.formatMessage({
                                id: "imageTextEditing.deleteLayerRequest",
                                defaultMessage: "Request deletion",
                              }),
                              disabled: nl,
                              onClick: rS,
                              children: (0, i.jsx)(x.cSG, {}),
                            }),
                          (0, i.jsx)("div", {
                            "aria-hidden": !0,
                            className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle",
                          }),
                          (0, i.jsx)(Y.P, {
                            ref: (e) => {
                              ;((nv.current = e),
                                null != e &&
                                  iZ &&
                                  "restore" === nw.current &&
                                  ((nw.current = null),
                                  iX.hide?.referenceHidden
                                    ? nt
                                        ?.querySelector("[data-image-text-region][data-image-text-selected]")
                                        ?.focus({ preventScroll: !0 })
                                    : e.focus({ preventScroll: !0 })))
                            },
                            "aria-expanded": nU,
                            color: "ghostActive",
                            size: "formatToolbarIcon",
                            "aria-label": t5.formatMessage(nH.moreFormatting),
                            onClick: () => (nU ? rw() : rf(ip.id, !0)),
                            children: (0, i.jsx)(x.l0Y, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              })),
            (ts[266] = rt),
            (ts[267] = rw),
            (ts[268] = nr),
            (ts[269] = iq),
            (ts[270] = t5),
            (ts[271] = iZ),
            (ts[272] = i2),
            (ts[273] = iX),
            (ts[274] = rf),
            (ts[275] = rm),
            (ts[276] = nU),
            (ts[277] = rS),
            (ts[278] = t6),
            (ts[279] = nF),
            (ts[280] = ip),
            (ts[281] = ig),
            (ts[282] = im),
            (ts[283] = nl),
            (ts[284] = iJ),
            (ts[285] = ix),
            (ts[286] = iA),
            (ts[287] = tv),
            (ts[288] = nt),
            (ts[289] = t7),
            (ts[290] = ih),
            (ts[291] = tl))
          : (tl = ts[291]),
        ts[292] !== ny || ts[293] !== rk
          ? ((ta =
              null != ny
                ? (0, H.createPortal)(rk, ny)
                : (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 grid min-h-0 justify-items-end overflow-clip",
                    children: rk,
                  })),
            (ts[292] = ny),
            (ts[293] = rk),
            (ts[294] = ta))
          : (ta = ts[294]),
        ts[295] !== iw ||
        ts[296] !== ry ||
        ts[297] !== rA ||
        ts[298] !== rP ||
        ts[299] !== rR ||
        ts[300] !== eG ||
        ts[301] !== nN ||
        ts[302] !== nN ||
        ts[303] !== e0 ||
        ts[304] !== e2 ||
        ts[305] !== e3 ||
        ts[306] !== te ||
        ts[307] !== tt ||
        ts[308] !== r$ ||
        ts[309] !== tn ||
        ts[310] !== tr ||
        ts[311] !== tl ||
        ts[312] !== ta
          ? ((to = (0, i.jsxs)("div", {
              ref: nn,
              tabIndex: -1,
              role: "group",
              className: "@container pointer-events-none absolute inset-0 outline-none",
              onCopy: ry,
              onCut: ry,
              onPaste: ry,
              "data-image-text-controls": iw,
              "aria-busy": rA,
              onPointerDownCapture: rP,
              onKeyDownCapture: rR,
              onKeyDown: eG,
              onWheel: nN,
              onTouchMove: nN,
              children: [e0, e2, e3, te, tt, r$, tn, tr, tl, ta],
            })),
            (ts[295] = iw),
            (ts[296] = ry),
            (ts[297] = rA),
            (ts[298] = rP),
            (ts[299] = rR),
            (ts[300] = eG),
            (ts[301] = nN),
            (ts[302] = nN),
            (ts[303] = e0),
            (ts[304] = e2),
            (ts[305] = e3),
            (ts[306] = te),
            (ts[307] = tt),
            (ts[308] = r$),
            (ts[309] = tn),
            (ts[310] = tr),
            (ts[311] = tl),
            (ts[312] = ta),
            (ts[313] = to))
          : (to = ts[313]),
        to
      )
    }
    function nk(e) {
      return e()
    }
    function n_(e) {
      return null != e
    }
    function nI() {}
    function nA(e, t, n) {
      return (0, D.ll)(e, t, n, { layoutShift: !1 })
    }
    function nP() {
      return new WeakMap()
    }
    function nR(e) {
      return e.region
    }
    function nz(e) {
      return e.change.remove
    }
    function nN(e) {
      e.target instanceof Element &&
        null != e.target.closest('[role="menu"], [data-slot="popover-content"]') &&
        e.stopPropagation()
    }
    function nD(e) {
      let t,
        n = (0, r.c)(5),
        { saving: l, reconnecting: a, loadingDocument: o, noEditableText: s } = e
      if (a) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, { id: "imageTextEditing.reconnecting", defaultMessage: "Reconnecting\u2026" })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (l) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, { id: "imageTextEditing.saving", defaultMessage: "Saving image" })), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (s) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.noEditableText",
                defaultMessage: "No editable text found",
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
                ? (0, i.jsx)(c.A, { id: "imageTextEditing.loadingDocument", defaultMessage: "Loading layers\u2026" })
                : (0, i.jsx)(c.A, { id: "imageTextEditing.preparing", defaultMessage: "Preparing layers\u2026" }),
            })),
            (n[3] = o),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function n$(e) {
      let t,
        n,
        l,
        a = (0, r.c)(7),
        { image: o, thumbnail: s } = e,
        d = void 0 !== s && s,
        c = (0, u.useRef)(null)
      ;(a[0] !== o || a[1] !== d
        ? ((t = () => {
            let e = c.current?.getContext("2d")
            if (null != e)
              if (((e.globalCompositeOperation = "copy"), d)) {
                let t = Math.min(o.width, o.height)
                e.drawImage(o, (o.width - t) / 2, (o.height - t) / 2, t, t, 0, 0, e.canvas.width, e.canvas.height)
              } else e.drawImage(o, 0, 0)
          }),
          (n = [o, d]),
          (a[0] = o),
          (a[1] = d),
          (a[2] = t),
          (a[3] = n))
        : ((t = a[2]), (n = a[3])),
        (0, u.useLayoutEffect)(t, n))
      let g = d ? 144 : o.width,
        m = d ? 144 : o.height
      return (
        a[4] !== g || a[5] !== m
          ? ((l = (0, i.jsx)("canvas", {
              ref: c,
              "aria-hidden": !0,
              width: g,
              height: m,
              className: "pointer-events-none absolute inset-0 h-full w-full",
            })),
            (a[4] = g),
            (a[5] = m),
            (a[6] = l))
          : (l = a[6]),
        l
      )
    }
    function nL(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        u = (0, r.c)(23),
        { layers: c, imageRect: g, inkRef: m } = e,
        { base: h, ink: f, foreground: x } = c
      return (
        u[0] !== h || u[1] !== g
          ? ((t = (0, ei.xV)(h) && (0, i.jsx)(nB, { preview: h, imageRect: g })), (u[0] = h), (u[1] = g), (u[2] = t))
          : (t = u[2]),
        u[3] !== h ? ((n = (0, i.jsx)(n$, { image: h })), (u[3] = h), (u[4] = n)) : (n = u[4]),
        u[5] !== h || u[6] !== f || u[7] !== m
          ? ((l =
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
                    children: (0, i.jsx)(n$, { image: f.canvas }),
                  }),
                }),
              })),
            (u[5] = h),
            (u[6] = f),
            (u[7] = m),
            (u[8] = l))
          : (l = u[8]),
        u[9] !== x ? ((a = x && (0, i.jsx)(n$, { image: x })), (u[9] = x), (u[10] = a)) : (a = u[10]),
        u[11] !== g || u[12] !== n || u[13] !== l || u[14] !== a
          ? ((o = (0, i.jsxs)("div", { className: "pointer-events-none absolute", style: g, children: [n, l, a] })),
            (u[11] = g),
            (u[12] = n),
            (u[13] = l),
            (u[14] = a),
            (u[15] = o))
          : (o = u[15]),
        u[16] !== x || u[17] !== g
          ? ((s = x && (0, ei.xV)(x) && (0, i.jsx)(nB, { preview: x, imageRect: g })),
            (u[16] = x),
            (u[17] = g),
            (u[18] = s))
          : (s = u[18]),
        u[19] !== t || u[20] !== o || u[21] !== s
          ? ((d = (0, i.jsxs)(i.Fragment, { children: [t, o, s] })), (u[19] = t), (u[20] = o), (u[21] = s), (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    function nB(e) {
      let t,
        n,
        l,
        a,
        o = (0, r.c)(12),
        { preview: s, imageRect: d } = e,
        c = (0, u.useRef)(null),
        [g, m] = (0, G.Xl)(),
        { width: h, height: f } = m,
        { left: x, top: p, width: y, height: v } = d
      return (
        o[0] !== f || o[1] !== v || o[2] !== y || o[3] !== x || o[4] !== s || o[5] !== p || o[6] !== h
          ? ((t = () => {
              null != c.current &&
                null != h &&
                null != f &&
                (0, ei.eB)(
                  s,
                  c.current,
                  { left: x, top: p, width: y, height: v },
                  { width: h, height: f },
                  c.current.ownerDocument.defaultView?.devicePixelRatio ?? 1,
                )
            }),
            (n = [s, x, p, y, v, h, f]),
            (o[0] = f),
            (o[1] = v),
            (o[2] = y),
            (o[3] = x),
            (o[4] = s),
            (o[5] = p),
            (o[6] = h),
            (o[7] = t),
            (o[8] = n))
          : ((t = o[7]), (n = o[8])),
        (0, u.useLayoutEffect)(t, n),
        o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("canvas", { ref: c, "aria-hidden": !0, className: "block h-full w-full" })), (o[9] = l))
          : (l = o[9]),
        o[10] !== g
          ? ((a = (0, i.jsx)("div", { ref: g, className: "pointer-events-none absolute inset-0", children: l })),
            (o[10] = g),
            (o[11] = a))
          : (a = o[11]),
        a
      )
    }
    function nK(e) {
      let t,
        n = (0, r.c)(4),
        { error: l } = e
      if (null == l) return null
      if ("glyphs" === l.code) {
        let e
        return (
          n[0] !== l.detail
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.unsupportedCharacters",
                defaultMessage: "This font cannot render {characters}. Change the text or choose another font",
                values: { characters: l.detail },
              })),
              (n[0] = l.detail),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if ("geometry" === l.code || "size" === l.code) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.invalidGeometry",
                defaultMessage: "This text does not fit inside the image. Move it, widen its box, or reduce its size",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      return (
        n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(c.A, {
              id: "imageTextEditing.renderFailed",
              defaultMessage: "This image could not be rendered. Retry loading before editing",
            })),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    let nH = (0, U.YK)({
      save: { id: "imageTextEditing.save", defaultMessage: "Save" },
      send: { id: "composer.submitButtonTooltip.send", defaultMessage: "Send" },
      saveAndSend: { id: "imageTextEditing.saveAndSend", defaultMessage: "Save and Send" },
      layerActions: { id: "imageTextEditing.layer.actions", defaultMessage: "Layer actions" },
      comment: { id: "imageTextEditing.addComment", defaultMessage: "Add comment" },
      moreFormatting: { id: "imageTextEditing.openLayerProperties", defaultMessage: "Layer Properties" },
      textProperties: { id: "imageTextEditing.toggleProperties", defaultMessage: "Text properties" },
      undo: { id: "imageTextEditing.undo", defaultMessage: "Undo" },
      redo: { id: "imageTextEditing.redo", defaultMessage: "Redo" },
    })
    var nF = n("aa4G"),
      nU = n("d5r0"),
      nO = n("f5OC")
    function nY(e) {
      let t,
        n,
        l,
        a = (0, r.c)(8),
        { ownerId: o } = e,
        d = (0, s.gh)(b.u),
        c = (0, u.useRef)("")
      ;(a[0] !== o || a[1] !== d
        ? ((t = (e) => {
            let { currentLocation: t, nextLocation: n } = e
            if (t.pathname === n.pathname) return !1
            let i = d.get(nU.S_).find((e) => {
              let { owners: t } = e
              return nW(t, n.pathname)
            })
            return ((c.current = n.pathname), i?.owners[0]?.id === o)
          }),
          (a[0] = o),
          (a[1] = d),
          (a[2] = t))
        : (t = a[2]),
        a[3] !== d
          ? ((n = () => {
              for (let { operationId: e, owners: t } of d.get(nU.S_)) nW(t, c.current) && (0, nO.oK)(d, e)
            }),
            (a[3] = d),
            (a[4] = n))
          : (n = a[4]))
      let g = (0, nF.e)(t, 0, n)
      return "blocked" !== g.state
        ? null
        : (a[5] !== g.proceed || a[6] !== g.reset
            ? ((l = (0, i.jsx)(E.Z, { kind: "discardTextEdits", onCancel: g.reset, onConfirm: g.proceed })),
              (a[5] = g.proceed),
              (a[6] = g.reset),
              (a[7] = l))
            : (l = a[7]),
          l)
    }
    function nW(e, t) {
      return e.every((e) => e.pathname !== t)
    }
    var nq = n("XuaP")
    function nZ(e, t, n) {
      e.save()
      try {
        if (
          (e.translate(n.x + n.width / 2, n.y + n.height / 2),
          e.rotate(((n.rotation ?? 0) * Math.PI) / 180),
          e.scale(n.width / t.width, n.height / t.height),
          e.translate(-t.x - t.width / 2, -t.y - t.height / 2),
          null != t.rasterMask)
        ) {
          let { canvas: n, left: i, top: r } = t.rasterMask
          e.drawImage(n, i, r)
          return
        }
        if (null != t.contour && "u" > typeof Path2D)
          try {
            e.fill(new Path2D(t.contour), "evenodd")
            return
          } catch {}
        e.fillRect(t.x, t.y, t.width, t.height)
      } finally {
        e.restore()
      }
    }
    function nX(e) {
      let t,
        n,
        i = (0, r.c)(10),
        { reviewKey: l, presentation$: a, children: o, prepareInput: d, onSubmitImageEdit: u } = e,
        c = (0, s.gh)(b.u),
        g = (0, F.A)(),
        m = (0, C.K)(d)
      i[0] !== g || i[1] !== u || i[2] !== m || i[3] !== a || i[4] !== l || i[5] !== c
        ? ((t = (0, s.un)(b.u, (e) => {
            let { get: t } = e
            return (function (
              e,
              t,
              n,
              i,
              { hasDirectEdits: r = !1, disabled: l = !1, regions: a, imageSize: o },
              { prepareInput: s, onSubmitImageEdit: d },
            ) {
              let u = t(t9.YY, i),
                c = t(t9.WM, i),
                g = t(t9.J$, i),
                m = t(t9._Y, i),
                h = (0, t9.VU)(u, a),
                f = tf(c, a)
              return {
                hasRequests: t(t9.oC, i) || h.length > 0 || f.length > 0,
                canSend: !l && !m && null != d && "sending" !== g,
                errorMessage: "failed" === g ? n.formatMessage(nG.failed) : null,
                onSend: async () => {
                  if (e.get(t9._Y, i) || l || null == d || "sending" === e.get(t9.J$, i)) return !1
                  let t = (0, t9.VU)(e.get(t9.YY, i), a),
                    u = tf(e.get(t9.WM, i), a),
                    c = e.get(t9.oC, i)
                  if (!c && !t.length && !u.length) return !1
                  let g = (0, nq.Ki)({
                      imageCommentGroups:
                        0 === t.length
                          ? []
                          : [
                              {
                                imageNumber: 1,
                                comments: t.map(({ id: e, review: t, region: i }) => {
                                  let r = null == t.excerpt ? nG.target : nG.excerptTarget
                                  return {
                                    id: e,
                                    x: (i.x + i.width / 2) / o.width,
                                    y: (i.y + i.height / 2) / o.height,
                                    text: n.formatMessage("object" === i.kind ? nG.objectTarget : r, {
                                      excerpt: t.excerpt,
                                      text: i.text,
                                      x: Math.round(i.x),
                                      y: Math.round(i.y),
                                      width: Math.round(i.width),
                                      height: Math.round(i.height),
                                      rotation: i.rotation,
                                      body: t.body,
                                    }),
                                  }
                                }),
                              },
                            ],
                      intl: n,
                      prompt: [
                        t.length ? n.formatMessage(nG.instruction, o) : "",
                        u.length ? n.formatMessage(nG.layerInstructions, o) : "",
                        ...u.map((e) =>
                          (function (e, t) {
                            let { region: n } = t
                            return [
                              e.formatMessage(tv.source, { kind: n.kind, name: n.text, ...ty(n) }),
                              ...tp(e, t).map((e) => e.text),
                            ].join(" ")
                          })(n, e),
                        ),
                      ]
                        .filter(Boolean)
                        .join("\n"),
                    }),
                    m = (0, t9.M6)(e, i, r || c),
                    h = {
                      isCurrent: m.isCurrent,
                      prepare: async () => {
                        let e = await s()
                        if (e?.reviewKey !== m.key) return null
                        let i =
                          u.length && !t.length
                            ? (function (e, t) {
                                let n = document.createElement("canvas")
                                ;((n.width = t.width), (n.height = t.height))
                                let i = n.getContext("2d")
                                if (i) {
                                  for (let { region: n, change: r } of ((i.fillStyle = "black"),
                                  i.fillRect(0, 0, t.width, t.height),
                                  (i.fillStyle = "white"),
                                  e))
                                    (nZ(i, n, n), !r.remove && r.destination && nZ(i, n, r.destination))
                                  try {
                                    let e = n.toDataURL("image/png")
                                    return e.startsWith("data:image/png;") ? e : void 0
                                  } catch {
                                    return
                                  }
                                }
                              })(u, o)
                            : void 0
                        return {
                          prompt:
                            i && e.source.pixels
                              ? [g, n.formatMessage(nG.nativeMask)].join("\n")
                              : g || n.formatMessage(nG.editedImage),
                          ...(i ? { maskSrc: i } : {}),
                          annotationCount: t.length || void 0,
                          textEditSource: e.source,
                        }
                      },
                      onAccepted: () => {
                        let n = m.key,
                          i = new Map(e.get(t9.YY, n))
                        for (let { id: r, review: l } of ((0, t9.YF)(e, n, u), t)) i.get(r) === l && i.delete(r)
                        ;(e.set(t9.YY, n, i), m.finish("idle"))
                      },
                    },
                    f = !1
                  try {
                    let e = await (0, y.rt)(h)
                    null != e && (f = await d(e, m.signal))
                  } catch {}
                  if (f) return (0, y.cm)(h)
                  if (m.isCurrent()) {
                    let n = m.key,
                      l = e.get(t9.YY, n),
                      a =
                        c ||
                        (r && n !== i) ||
                        t.some(({ id: e, review: t }) => l.get(e) === t) ||
                        u.some(({ region: t, change: i }) => e.get(t9.WM, n).get(t.id) === i)
                    m.finish(a ? "failed" : "idle")
                  }
                  return !1
                },
              }
            })(c, t, g, l, t(a), { prepareInput: m, onSubmitImageEdit: u })
          })),
          (i[0] = g),
          (i[1] = u),
          (i[2] = m),
          (i[3] = a),
          (i[4] = l),
          (i[5] = c),
          (i[6] = t))
        : (t = i[6])
      let h = t,
        f = (0, s.Ul)(h)
      return (i[7] !== o || i[8] !== f ? ((n = o(f)), (i[7] = o), (i[8] = f), (i[9] = n)) : (n = i[9]), n)
    }
    let nG = (0, U.YK)({
        editedImage: { id: "imageTextEditing.sendEditedImage", defaultMessage: "Here\u2019s my edited image." },
        target: {
          id: "imageTextEditing.noteTarget",
          defaultMessage:
            "Text \u201C{text}\u201D at ({x}, {y}), {width} \xd7 {height} pixels, rotated {rotation}\xb0. {body}",
        },
        objectTarget: {
          id: "imageTextEditing.objectNoteTarget",
          defaultMessage: "Object \u201C{text}\u201D at ({x}, {y}), {width} \xd7 {height} pixels. {body}",
        },
        layerInstructions: {
          id: "imageTextEditing.layerRequestInstructions",
          defaultMessage:
            "Apply these edits to the attached {width} \xd7 {height} image. Coordinates use the top-left corner of the image as the origin. Keep surrounding content intact.",
        },
        nativeMask: {
          id: "imageTextEditing.nativeLayerEditMask",
          defaultMessage:
            "The white areas in the selection image mark the source and destination regions for these edits.",
        },
        excerptTarget: {
          id: "imageTextEditing.noteExcerptTarget",
          defaultMessage:
            "Originally highlighted text \u201C{excerpt}\u201D. Current block \u201C{text}\u201D at ({x}, {y}), {width} \xd7 {height} pixels, rotated {rotation}\xb0. {body}",
        },
        instruction: {
          id: "imageTextEditing.batchInstruction",
          defaultMessage:
            "Apply these comments together to the attached {width} \xd7 {height} image. Harmonize the edited lettering with the surrounding image and preserve content outside the requested changes.",
        },
        failed: { id: "imageTextEditing.requestFailed", defaultMessage: "Couldn\u2019t send your edit. Try again." },
      }),
      nV = (0, s.i1)(b.u, ({ operationId: e, operationEntry: t }, { get: n }) => {
        let i = null == e ? null : n(nO.TR, e),
          r = null == e ? null : n(nO._Z, e),
          l = i?.status === "failed" || i?.status === "unavailable" || i?.status === "uncertain",
          a =
            r?.snapshot == null || null == r.assets ? null : { snapshot: r.snapshot, items: r.items, assets: r.assets },
          o =
            i?.kind === "preparation" &&
            ("starting" === i.status || "preparing" === i.status || "loading" === i.status),
          s = i?.kind === "snapshot" && ("saving" === i.status || "loading" === i.status),
          d = a?.snapshot.content.items.length === 0 && (0 === a.assets.fonts.length || i?.kind === "preparation"),
          u = (t && (o || s || l)) || r?.editing === !0
        return { operation: i, session: r, source: a, failed: l, preparing: o, saving: s, noEditableText: d, active: u }
      })
    function nQ(e) {
      var t
      let n,
        l,
        o,
        d,
        x,
        j,
        T,
        S,
        k,
        _,
        A,
        P,
        R,
        z,
        N,
        D,
        $,
        L,
        B,
        K,
        H,
        F,
        U,
        O,
        Y,
        W,
        q,
        Z,
        X,
        G,
        V,
        Q = (0, r.c)(173),
        {
          operationId: J,
          operationEntry: ee,
          galleryId: et,
          tabId: en,
          sourceImageId: er,
          sourcePreview: el,
          onSelectImage: ea,
          onSavePublished: eo,
          children: es,
        } = e,
        ed = (0, s.gh)(b.u),
        eu = (0, s.gh)(w.GD),
        ec = (0, s.Ul)(null != J && nO.DI) ? J : void 0,
        eg = (0, u.useId)(),
        em = (0, u.useContext)(g.hf),
        [eh, ef] = (0, u.useState)(null),
        ex = (0, u.useRef)(null)
      Q[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => ex.current?.onClearSelection() === !0), (Q[0] = n))
        : (n = Q[0])
      let ep = (0, C.K)(n),
        [ey, ev] = (0, u.useState)(null)
      Q[1] !== ee || Q[2] !== ec
        ? ((l = { operationId: ec, operationEntry: ee }), (Q[1] = ee), (Q[2] = ec), (Q[3] = l))
        : (l = Q[3])
      let {
        operation: eb,
        session: ew,
        source: ej,
        failed: eM,
        preparing: eC,
        saving: eE,
        noEditableText: eT,
        active: eS,
      } = (0, s._U)(nV, l)
      ;(Q[4] !== eS
        ? ((o = () => {
            eS &&
              (async function () {
                await (0, M.Uz)()
                let e = "image-text-editing-requests"
                ;(window.localStorage?.removeItem(M.p2 + e), void 0 !== (0, M.TB)(e) && (0, M.jx)(e, void 0))
              })()
          }),
          (d = [eS]),
          (Q[4] = eS),
          (Q[5] = o),
          (Q[6] = d))
        : ((o = Q[5]), (d = Q[6])),
        (0, u.useEffect)(o, d))
      let ek = eb?.parentOperationId,
        e_ = (0, s._U)(null == ek ? null : nO.TR, ek ?? ""),
        eI = (0, s._U)(null == ek ? null : nO._Z, ek ?? ""),
        eA = eb?.kind === "snapshot" && null == eb.documentId ? e_ : eb
      Q[7] !== et || Q[8] !== ec || Q[9] !== eA
        ? ((x = null == eA ? (ec ?? "") : (0, t9.u3)(eA, et)), (Q[7] = et), (Q[8] = ec), (Q[9] = eA), (Q[10] = x))
        : (x = Q[10])
      let eP = x,
        eR = (0, s._U)(null != ec && t9.mW, eP),
        ez = eb?.status
      Q[11] !== ec || Q[12] !== ez
        ? ((j = { operationId: ec, status: ez }), (Q[11] = ec), (Q[12] = ez), (Q[13] = j))
        : (j = Q[13])
      let eN = (0, u.useRef)(j),
        [eD, e$] = (0, u.useState)(null)
      Q[14] !== eb?.status || Q[15] !== ec
        ? ((T = () => {
            let e = eN.current,
              t = e.operationId === ec && ("saving" === e.status || "loading" === e.status)
            if (
              ((eN.current = { operationId: ec, status: eb?.status }),
              e.operationId !== ec && ef((e) => (e?.operationId === ec ? e : null)),
              null == ec || !t || eb?.status !== "saved")
            )
              return
            e$(ec)
            let n = setTimeout(() => e$(null), 1800)
            return () => {
              ;(clearTimeout(n), e$(null))
            }
          }),
          (Q[14] = eb?.status),
          (Q[15] = ec),
          (Q[16] = T))
        : (T = Q[16])
      let eL = eb?.status
      ;(Q[17] !== ec || Q[18] !== eL ? ((S = [ec, eL]), (Q[17] = ec), (Q[18] = eL), (Q[19] = S)) : (S = Q[19]),
        (0, u.useEffect)(T, S),
        Q[20] !== ee || Q[21] !== ec
          ? ((k = (0, s.un)(b.u, (e) => {
              let { get: t } = e,
                n = t(nV, { operationId: ec, operationEntry: ee }),
                i = n.session
              return {
                hasDirectEdits:
                  (i?.dirty === !0 || (n.operation?.kind === "snapshot" && null == n.operation.documentId)) &&
                  I(n.source).length > 0,
                regions: null == n.source ? [] : [...tB(n.source), ...th(n.source)],
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
              }
            })),
            (Q[20] = ee),
            (Q[21] = ec),
            (Q[22] = k))
          : (k = Q[22]))
      let eB = k,
        eK =
          eM && eb?.kind === "snapshot" && null != eb.parentOperationId && eI?.dirty === !0 ? eb.parentOperationId : ec,
        eH = (0, u.useRef)(null)
      if (
        (Q[23] !== ee || Q[24] !== ec || Q[25] !== eK || Q[26] !== eg || Q[27] !== eP || Q[28] !== eu || Q[29] !== ed
          ? ((_ = () => {
              let e,
                t = eH.current
              if (null == t || null == ec || null == eK) return
              let n = (0, nO.c4)(ed, eK, eg, eP),
                i = new IntersectionObserver((t) => {
                  let [n] = t
                  if ((e?.(), (e = void 0), n?.isIntersecting)) {
                    let t = (0, nO.aj)(ed, ec, { reviewKey: eP, operationEntry: ee }),
                      n = (0, nO.mO)(ed, eK, eg, eu.value.pathname)
                    e = () => {
                      ;(t(), n())
                    }
                  }
                })
              return (
                i.observe(t),
                () => {
                  ;(i.disconnect(), e?.(), n())
                }
              )
            }),
            (A = [ed, ec, ee, eK, eg, eu, eP]),
            (Q[23] = ee),
            (Q[24] = ec),
            (Q[25] = eK),
            (Q[26] = eg),
            (Q[27] = eP),
            (Q[28] = eu),
            (Q[29] = ed),
            (Q[30] = _),
            (Q[31] = A))
          : ((_ = Q[30]), (A = Q[31])),
        (0, u.useLayoutEffect)(_, A),
        null == ec || null == eK)
      ) {
        let e, t
        return (
          Q[32] !== es ? ((e = es(void 0)), (Q[32] = es), (Q[33] = e)) : (e = Q[33]),
          Q[34] !== e
            ? ((t = (0, i.jsx)("div", { className: "relative h-full min-h-0 w-full", children: e })),
              (Q[34] = e),
              (Q[35] = t))
            : (t = Q[35]),
          t
        )
      }
      let eF = eh?.operationId === ec ? eh : null
      Q[36] !== ec || Q[37] !== eK || Q[38] !== eg || Q[39] !== eP || Q[40] !== ed
        ? ((P = (e, t) => {
            let n = (0, nO.MO)(ed, eK, eg),
              i = () => {
                ;((0, nO.oK)(ed, eK, eP), e())
              }
            "confirm" === n
              ? ef({ kind: "discard", operationId: ec, complete: i, cancel: t })
              : "discard" === n
                ? i()
                : e()
          }),
          (Q[36] = ec),
          (Q[37] = eK),
          (Q[38] = eg),
          (Q[39] = eP),
          (Q[40] = ed),
          (Q[41] = P))
        : (P = Q[41])
      let eU = P,
        eO = eC && (eb?.status !== "loading" || null != eb.extractionId)
      Q[42] !== eo || Q[43] !== ea || Q[44] !== ed
        ? ((R = async (e) => {
            if (null == e) return null
            ;((0, nO.W9)(ed, e), ea(e))
            let t = await (0, nO.pY)(ed, e)
            return (null != t && eo?.(t.reference.document_id), t)
          }),
          (Q[42] = eo),
          (Q[43] = ea),
          (Q[44] = ed),
          (Q[45] = R))
        : (R = Q[45])
      let eY = R
      Q[46] !== et || Q[47] !== ec || Q[48] !== ed || Q[49] !== eY
        ? ((z = () => {
            ed.get(nO.uW).some((e) => e.parentOperationId === ec && "uncertain" === e.status)
              ? ef({ kind: "copy", operationId: ec, sourceId: ec })
              : eY((0, nO.lU)(ed, ec, ei.Tc, !1, et))
          }),
          (Q[46] = et),
          (Q[47] = ec),
          (Q[48] = ed),
          (Q[49] = eY),
          (Q[50] = z))
        : (z = Q[50])
      let eW = z
      Q[51] !== ea ||
      Q[52] !== eb ||
      Q[53] !== ec ||
      Q[54] !== eK ||
      Q[55] !== eU ||
      Q[56] !== eP ||
      Q[57] !== ed ||
      Q[58] !== ew?.editing ||
      Q[59] !== er
        ? ((N = () => {
            if (null == eb) return
            let e = () => ea(er ?? eb.sourceImageId)
            ed.get(nO._Z, eK)?.dirty ? eU(e) : (ew?.editing && (0, nO.oK)(ed, ec, eP), e())
          }),
          (Q[51] = ea),
          (Q[52] = eb),
          (Q[53] = ec),
          (Q[54] = eK),
          (Q[55] = eU),
          (Q[56] = eP),
          (Q[57] = ed),
          (Q[58] = ew?.editing),
          (Q[59] = er),
          (Q[60] = N))
        : (N = Q[60])
      let eq = N,
        eZ = eC || eE || eM || eT
      Q[61] !== ea ||
      Q[62] !== eb ||
      Q[63] !== ec ||
      Q[64] !== eK ||
      Q[65] !== eZ ||
      Q[66] !== eP ||
      Q[67] !== ed ||
      Q[68] !== er
        ? ((D = (e) => {
            let t = void 0 === e ? document.activeElement : e
            ;(0, y.J7)(
              ed.get(nO._Z, eK)?.dirty === !0 || ed.get(t9.mW, eP),
              (e, t) => {
                let n = ed.get(nO._Z, e)
                ;(n?.editing || n?.dirty ? (0, nO.oK)(ed, e, t) : (0, t9.iT)(ed, t),
                  eZ && null != eb && ea(er ?? eb.sourceImageId))
              },
              (e) => ef({ kind: "discard", operationId: ec, complete: e, returnFocusTo: t }),
              eK,
              eP,
            )
          }),
          (Q[61] = ea),
          (Q[62] = eb),
          (Q[63] = ec),
          (Q[64] = eK),
          (Q[65] = eZ),
          (Q[66] = eP),
          (Q[67] = ed),
          (Q[68] = er),
          (Q[69] = D))
        : (D = Q[69])
      let eX = D
      ;(Q[70] !== eM || Q[71] !== eT || Q[72] !== eb || Q[73] !== ew
        ? (eT
            ? ($ = (0, i.jsx)(c.A, { id: "imageTextEditing.noEditableText", defaultMessage: "No editable text found" }))
            : eM && null != eb
              ? ($ = (0, i.jsx)(n2, { operation: eb }))
              : ew?.renderError == null ||
                ["glyphs", "geometry", "size"].includes(ew.renderError.code) ||
                ($ = (0, i.jsx)(c.A, {
                  id: "imageTextEditing.previewUnavailable",
                  defaultMessage: "Couldn\u2019t load the editable preview",
                })),
          (Q[70] = eM),
          (Q[71] = eT),
          (Q[72] = eb),
          (Q[73] = ew),
          (Q[74] = $))
        : ($ = Q[74]),
        Q[75] !== eb
          ? ((L =
              null != eb && "preparation" === (t = eb).kind && ("failed" === t.status || "unavailable" === t.status)),
            (Q[75] = eb),
            (Q[76] = L))
          : (L = Q[76]))
      let eG = L,
        eV = eM && eb?.kind === "snapshot" && null == eb.documentId && eI?.dirty === !0 && null != eb.parentOperationId,
        eQ = !eE && null == $ && ew?.renderError == null,
        eJ = ew?.submittedPreviewUrl ?? (el || ew?.assets?.previewUrl),
        e1 = eO || eb?.kind === "snapshot" || (eQ && ew?.renderedPreview == null) ? eJ : void 0
      Q[77] !== eq ||
      Q[78] !== eV ||
      Q[79] !== $ ||
      Q[80] !== eM ||
      Q[81] !== eG ||
      Q[82] !== eT ||
      Q[83] !== ea ||
      Q[84] !== eb ||
      Q[85] !== ec ||
      Q[86] !== ed ||
      Q[87] !== eY ||
      Q[88] !== ew?.renderError
        ? ((B =
            null != $
              ? (0, i.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-center gap-2",
                  children: [
                    eb?.status === "uncertain"
                      ? (0, i.jsx)(m.z, {
                          size: "medium",
                          radius: "full",
                          color: "primary",
                          to: "/library",
                          children: (0, i.jsx)(c.A, {
                            id: "imageTextEditing.checkLibrary",
                            defaultMessage: "Check Library",
                          }),
                        })
                      : null,
                    eV
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(m.$, {
                              color: "secondary",
                              size: "medium",
                              radius: "full",
                              onClick: () => {
                                null != eb.parentOperationId &&
                                  ((0, nO.W9)(ed, eb.parentOperationId), ea(eb.parentOperationId))
                              },
                              children: (0, i.jsx)(c.A, {
                                id: "imageTextEditing.returnToEditing",
                                defaultMessage: "Return to editing",
                              }),
                            }),
                            "uncertain" === eb.status
                              ? (0, i.jsx)(m.$, {
                                  size: "medium",
                                  radius: "full",
                                  color: "secondary",
                                  onClick: () => {
                                    null != eb.parentOperationId &&
                                      ef({ kind: "copy", operationId: ec, sourceId: eb.parentOperationId })
                                  },
                                  children: (0, i.jsx)(c.A, {
                                    id: "imageTextEditing.saveAnotherCopy",
                                    defaultMessage: "Save another copy",
                                  }),
                                })
                              : null,
                            "uncertain" !== eb.status && ("rejected" !== eb.failure || 429 === eb.rejectionStatus)
                              ? (0, i.jsx)(m.$, {
                                  size: "medium",
                                  radius: "full",
                                  color: "primary",
                                  onClick: () => {
                                    eY((0, nO.dR)(ed, ec, ei.Tc))
                                  },
                                  children: (0, i.jsx)(c.A, {
                                    id: "imageTextEditing.retrySave",
                                    defaultMessage: "Retry save",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : null,
                    !eV &&
                      (0, i.jsx)(m.$, {
                        color: "secondary",
                        size: "medium",
                        radius: "full",
                        onClick: eq,
                        children:
                          eT || eb?.status === "unavailable" || eb?.kind === "snapshot"
                            ? (0, i.jsx)(c.A, { id: "imageTextEditing.backToImage", defaultMessage: "Back to image" })
                            : (0, i.jsx)(c.A, {
                                id: "imageTextEditing.backToOriginal",
                                defaultMessage: "Back to original",
                              }),
                      }),
                    !eT &&
                    ((eM && eb?.documentId != null && "assets" === eb.failure) ||
                      (!eM && ew?.renderError != null) ||
                      (eM && eb?.kind === "snapshot" && null != eb.documentId))
                      ? (0, i.jsx)(m.$, {
                          size: "medium",
                          radius: "full",
                          color: "primary",
                          onClick: () => (0, nO.gK)(ed, ec),
                          children: (0, i.jsx)(c.A, {
                            id: "imageTextEditing.retrySavedPreview",
                            defaultMessage: "Retry loading",
                          }),
                        })
                      : null,
                    eG && ("assets" !== eb.failure || null == eb.documentId) && "unavailable" !== eb.status
                      ? (0, i.jsx)(m.$, {
                          color: "primary",
                          size: "medium",
                          radius: "full",
                          onClick: () => (0, nO.gK)(ed, ec),
                          children: (0, i.jsx)(c.A, {
                            id: "imageTextEditing.retryPreparation",
                            defaultMessage: "Try again",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (Q[77] = eq),
          (Q[78] = eV),
          (Q[79] = $),
          (Q[80] = eM),
          (Q[81] = eG),
          (Q[82] = eT),
          (Q[83] = ea),
          (Q[84] = eb),
          (Q[85] = ec),
          (Q[86] = ed),
          (Q[87] = eY),
          (Q[88] = ew?.renderError),
          (Q[89] = B))
        : (B = Q[89])
      let e0 = B
      Q[90] !== e0 || Q[91] !== $ || Q[92] !== eT || Q[93] !== eb?.status
        ? ((K =
            null == $
              ? null
              : (0, i.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 flex overflow-auto",
                  children: (0, i.jsx)(h.i, {
                    width: eb?.status === "uncertain" ? "wide" : "compact",
                    className: "pointer-events-auto m-auto",
                    icon: (0, i.jsx)("span", {
                      className: eT || eb?.status === "uncertain" ? "text-secondary" : "text-danger",
                      children: (0, i.jsx)(f.I, { asset: a }),
                    }),
                    title: (0, i.jsx)("span", { role: eT ? "status" : "alert", children: $ }),
                    actions: (0, i.jsx)("div", { className: "pointer-events-auto", children: e0 }),
                  }),
                })),
          (Q[90] = e0),
          (Q[91] = $),
          (Q[92] = eT),
          (Q[93] = eb?.status),
          (Q[94] = K))
        : (K = Q[94])
      let e2 = K
      if (
        Q[95] !== eS ||
        Q[96] !== eq ||
        Q[97] !== eX ||
        Q[98] !== es ||
        Q[99] !== em ||
        Q[100] !== eQ ||
        Q[101] !== $ ||
        Q[102] !== eO ||
        Q[103] !== et ||
        Q[104] !== eR ||
        Q[105] !== ep ||
        Q[106] !== eW ||
        Q[107] !== eb ||
        Q[108] !== ec ||
        Q[109] !== eg ||
        Q[110] !== eB ||
        Q[111] !== eJ ||
        Q[112] !== e1 ||
        Q[113] !== ey ||
        Q[114] !== e2 ||
        Q[115] !== eU ||
        Q[116] !== eZ ||
        Q[117] !== eP ||
        Q[118] !== eD ||
        Q[119] !== eE ||
        Q[120] !== ed ||
        Q[121] !== eY ||
        Q[122] !== ew?.assets?.previewUrl ||
        Q[123] !== ew?.canRedo ||
        Q[124] !== ew?.canUndo ||
        Q[125] !== ew?.dirty ||
        Q[126] !== ew?.renderError ||
        Q[127] !== ew?.renderedPreview ||
        Q[128] !== ew?.rendering ||
        Q[129] !== ew?.selectedTextId ||
        Q[130] !== ew?.submittedPreviewUrl ||
        Q[131] !== ej
      ) {
        let e
        ;((H = eS
          ? {
              recovery: e2,
              loadingPreview: eQ ? (0, i.jsx)(tH, { preparing: eO, previewSrc: eJ }) : void 0,
              propertiesPanel: (0, i.jsx)("div", { className: "contents", ref: ev }),
              requestClose: eU,
              onClearSelection: ep,
              onCancel: eZ ? eq : eX,
              renderOverlay: (e, t, n, r) =>
                null != e2
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: "pointer-events-none absolute bg-surface/80",
                          style: e.imageRect,
                        }),
                        e2,
                      ],
                    })
                  : (0, i.jsx)(
                      nX,
                      {
                        reviewKey: eP,
                        presentation$: eB,
                        onSubmitImageEdit: n,
                        prepareInput: async () => {
                          let e
                          if (null == eb || null == ej) return null
                          let t = eb,
                            n = ej.snapshot.reference.image_asset_pointer
                          if (ew?.dirty) {
                            let i = (0, nO.lU)(
                                ed,
                                ec,
                                async (t) => {
                                  let n = await (0, ei.Tc)(t)
                                  return (r && (e = n), n)
                                },
                                !1,
                                et,
                              ),
                              l = await eY(i)
                            if (null == l) return null
                            ;((t = l.operation), (n = l.reference.image_asset_pointer))
                          } else if (r) {
                            let t = await (0, p.M2)(ej.assets.previewUrl)
                            if (null == t) return null
                            e = t.blob
                          }
                          return null == t.imageFileId || null == ed.get(nO.TR, t.id)
                            ? null
                            : {
                                reviewKey: (0, t9.u3)(t, et),
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
                        children: (n) =>
                          (0, i.jsx)(
                            nS,
                            {
                              ref: ex,
                              reviewKey: eP,
                              review: n,
                              propertiesPanelContainer: ey,
                              source: ej,
                              rendering: ew?.rendering ?? !1,
                              renderError: ew?.renderError ?? null,
                              renderedPreview: ew?.renderedPreview ?? null,
                              viewport: e,
                              sourcePreview: e1,
                              preparing: eO,
                              reconnecting: eb?.reconnecting,
                              saving: eE,
                              dirty: ew?.dirty ?? !1,
                              onSave: eW,
                              onCancel: eX,
                              error: $,
                              selectedId: ew?.selectedTextId ?? null,
                              onSelect: (e) => (0, nO.zr)(ed, ec, e),
                              onChange: (e, t) => (0, nO.OI)(ed, ec, e, t),
                              onEndHistoryGroup: () => (0, nO.q_)(ed, ec),
                              canUndo: ew?.canUndo ?? !1,
                              canRedo: ew?.canRedo ?? !1,
                              onUndo: () => (0, nO.QF)(ed, ec),
                              onRedo: () => (0, nO.DM)(ed, ec),
                              onRetry: eb?.status === "uncertain" ? void 0 : () => (0, nO.gK)(ed, ec),
                              renderToolbar: t,
                            },
                            ec,
                          ),
                      },
                      eP,
                    ),
            }
          : void 0),
          (F = eH),
          (U = "relative h-full min-h-0 w-full"),
          Q[139] !== eS
            ? ((O = (e) => {
                eS &&
                  (2 === e.button || (0 === e.button && e.ctrlKey && (0, v.Z)())) &&
                  (e.preventDefault(), e.stopPropagation())
              }),
              (Y = (e) => {
                eS && (e.preventDefault(), e.stopPropagation())
              }),
              (Q[139] = eS),
              (Q[140] = O),
              (Q[141] = Y))
            : ((O = Q[140]), (Y = Q[141])),
          Q[142] !== em || Q[143] !== eg
            ? ((W = null != em && (0, i.jsx)(nY, { ownerId: eg })), (Q[142] = em), (Q[143] = eg), (Q[144] = W))
            : (W = Q[144]),
          Q[145] !== eS || Q[146] !== eR || Q[147] !== ec || Q[148] !== eD
            ? ((e =
                eD !== ec || eS || eR
                  ? void 0
                  : (0, i.jsx)("span", {
                      role: "status",
                      className: "px-2 text-sm text-secondary",
                      children: (0, i.jsx)(c.A, { id: "imageTextEditing.saved", defaultMessage: "Saved" }),
                    })),
              (Q[145] = eS),
              (Q[146] = eR),
              (Q[147] = ec),
              (Q[148] = eD),
              (Q[149] = e))
            : (e = Q[149]),
          (q = es(H, ew?.submittedPreviewUrl ?? ew?.assets?.previewUrl, e)),
          (Q[95] = eS),
          (Q[96] = eq),
          (Q[97] = eX),
          (Q[98] = es),
          (Q[99] = em),
          (Q[100] = eQ),
          (Q[101] = $),
          (Q[102] = eO),
          (Q[103] = et),
          (Q[104] = eR),
          (Q[105] = ep),
          (Q[106] = eW),
          (Q[107] = eb),
          (Q[108] = ec),
          (Q[109] = eg),
          (Q[110] = eB),
          (Q[111] = eJ),
          (Q[112] = e1),
          (Q[113] = ey),
          (Q[114] = e2),
          (Q[115] = eU),
          (Q[116] = eZ),
          (Q[117] = eP),
          (Q[118] = eD),
          (Q[119] = eE),
          (Q[120] = ed),
          (Q[121] = eY),
          (Q[122] = ew?.assets?.previewUrl),
          (Q[123] = ew?.canRedo),
          (Q[124] = ew?.canUndo),
          (Q[125] = ew?.dirty),
          (Q[126] = ew?.renderError),
          (Q[127] = ew?.renderedPreview),
          (Q[128] = ew?.rendering),
          (Q[129] = ew?.selectedTextId),
          (Q[130] = ew?.submittedPreviewUrl),
          (Q[131] = ej),
          (Q[132] = H),
          (Q[133] = F),
          (Q[134] = U),
          (Q[135] = O),
          (Q[136] = Y),
          (Q[137] = W),
          (Q[138] = q))
      } else ((H = Q[132]), (F = Q[133]), (U = Q[134]), (O = Q[135]), (Y = Q[136]), (W = Q[137]), (q = Q[138]))
      return (
        Q[150] !== ec || Q[151] !== H || Q[152] !== en
          ? ((Z = null != H && null != en ? (0, i.jsx)(n0, { tabId: en, requestClose: H.requestClose }, ec) : null),
            (Q[150] = ec),
            (Q[151] = H),
            (Q[152] = en),
            (Q[153] = Z))
          : (Z = Q[153]),
        Q[154] !== eF || Q[155] !== et || Q[156] !== ed || Q[157] !== eY
          ? ((X =
              eF?.kind === "copy"
                ? (0, i.jsx)(E.Z, {
                    kind: "saveCopy",
                    onCancel: () => ef(null),
                    onConfirm: () => {
                      let e = (0, nO.lU)(ed, eF.sourceId, ei.Tc, !0, et)
                      ;(ef(null), eY(e))
                    },
                  })
                : null),
            (Q[154] = eF),
            (Q[155] = et),
            (Q[156] = ed),
            (Q[157] = eY),
            (Q[158] = X))
          : (X = Q[158]),
        Q[159] !== eF || Q[160] !== eK || Q[161] !== eP
          ? ((G =
              eF?.kind === "discard"
                ? (0, i.jsx)(E.Z, {
                    kind: "discardTextEdits",
                    returnFocusTo: eF.returnFocusTo,
                    onCancel: () => {
                      ;(eF.cancel?.(), ef(null))
                    },
                    onConfirm: () => {
                      let e = eF.complete
                      ;(ef(null), e(eK, eP))
                    },
                  })
                : null),
            (Q[159] = eF),
            (Q[160] = eK),
            (Q[161] = eP),
            (Q[162] = G))
          : (G = Q[162]),
        Q[163] !== F ||
        Q[164] !== U ||
        Q[165] !== O ||
        Q[166] !== Y ||
        Q[167] !== W ||
        Q[168] !== q ||
        Q[169] !== Z ||
        Q[170] !== X ||
        Q[171] !== G
          ? ((V = (0, i.jsxs)("div", {
              ref: F,
              className: U,
              onPointerDownCapture: O,
              onContextMenuCapture: Y,
              children: [W, q, Z, X, G],
            })),
            (Q[163] = F),
            (Q[164] = U),
            (Q[165] = O),
            (Q[166] = Y),
            (Q[167] = W),
            (Q[168] = q),
            (Q[169] = Z),
            (Q[170] = X),
            (Q[171] = G),
            (Q[172] = V))
          : (V = Q[172]),
        V
      )
    }
    function nJ(e) {
      let t,
        n,
        l = (0, r.c)(5),
        { operationId: a } = e,
        o = (0, s.gh)(b.u)
      l[0] !== a || l[1] !== o
        ? ((t = (e) => {
            let t
            if (null == e) return
            let n = new IntersectionObserver((e) => {
              let [n] = e
              ;(t?.(), (t = n?.isIntersecting ? (0, nO.aj)(o, a) : void 0))
            })
            return (
              n.observe(e),
              () => {
                ;(n.disconnect(), t?.())
              }
            )
          }),
          (l[0] = a),
          (l[1] = o),
          (l[2] = t))
        : (t = l[2])
      let d = (0, C.K)(t)
      return (
        l[3] !== d
          ? ((n = (0, i.jsx)("span", { ref: d, className: "pointer-events-none absolute inset-0", "aria-hidden": !0 })),
            (l[3] = d),
            (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    function n1(e) {
      let t,
        n,
        l,
        a,
        d,
        u = (0, r.c)(28),
        { operationId: g, version: m, artworkOpacity: h, children: f } = e,
        p = (0, s._U)(null == g ? null : nO.TR, g ?? ""),
        y = (0, s._U)(null == g ? null : nO._Z, g ?? ""),
        v =
          p?.kind === "preparation" && ("starting" === p.status || "preparing" === p.status || "loading" === p.status),
        b = p?.status === "saving" || (p?.kind === "snapshot" && "loading" === p.status),
        w = p?.status === "failed" || p?.status === "unavailable" || p?.status === "uncertain"
      if (w && null != p) {
        let e,
          n,
          r,
          l,
          a = null != m && "pb-3"
        u[0] !== a
          ? ((e = (0, o.A)("pointer-events-none absolute inset-0 grid place-items-center bg-surface/80", a)),
            (u[0] = a),
            (u[1] = e))
          : (e = u[1])
        let s = "uncertain" === p.status ? "text-secondary" : "text-danger"
        ;(u[2] !== s ? ((n = (0, i.jsx)(x.dGN, { className: s })), (u[2] = s), (u[3] = n)) : (n = u[3]),
          u[4] !== p
            ? ((r = (0, i.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: (0, i.jsx)(n2, { operation: p }),
              })),
              (u[4] = p),
              (u[5] = r))
            : (r = u[5]),
          u[6] !== e || u[7] !== n || u[8] !== r
            ? ((l = (0, i.jsxs)("span", { className: e, children: [n, r] })),
              (u[6] = e),
              (u[7] = n),
              (u[8] = r),
              (u[9] = l))
            : (l = u[9]),
          (t = l))
      } else if (b && p?.documentId == null) {
        let e, n
        ;(u[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(x.QC9, { "aria-hidden": !0 })), (u[10] = e))
          : (e = u[10]),
          u[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsxs)("span", {
                className: "absolute end-1 bottom-1 rounded-full bg-surface p-0.5 text-secondary shadow-sm",
                children: [
                  e,
                  (0, i.jsx)("span", {
                    role: "status",
                    className: "sr-only",
                    children: (0, i.jsx)(c.A, {
                      id: "imageTextEditing.savingThumbnail",
                      defaultMessage: "Saving image",
                    }),
                  }),
                ],
              })),
              (u[11] = n))
            : (n = u[11]),
          (t = n))
      }
      let j = p?.kind === "snapshot" && (b || w),
        M = f
      if (v) {
        let e
        ;(u[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(T.o, { presentation: "thumbnail" })), (u[12] = e))
          : (e = u[12]),
          (M = e))
      } else if (j && y?.submittedPreviewUrl != null) {
        let e
        ;(u[13] !== y.submittedPreviewUrl
          ? ((e = (0, i.jsx)("img", { src: y.submittedPreviewUrl, alt: "", className: "size-full object-cover" })),
            (u[13] = y.submittedPreviewUrl),
            (u[14] = e))
          : (e = u[14]),
          (M = e))
      } else if (j && y?.renderedPreview != null) {
        let e
        ;(u[15] !== y.renderedPreview
          ? ((e = (0, i.jsx)(n$, { image: y.renderedPreview, thumbnail: !0 })),
            (u[15] = y.renderedPreview),
            (u[16] = e))
          : (e = u[16]),
          (M = e))
      }
      return (
        u[17] !== h ? ((n = { opacity: h }), (u[17] = h), (u[18] = n)) : (n = u[18]),
        u[19] !== n || u[20] !== M
          ? ((l = (0, i.jsx)("span", {
              className: "relative flex size-full items-center justify-center transition-opacity duration-120",
              style: n,
              children: M,
            })),
            (u[19] = n),
            (u[20] = M),
            (u[21] = l))
          : (l = u[21]),
        u[22] !== m
          ? ((a =
              null != m &&
              (0, i.jsx)("span", {
                className:
                  "pointer-events-none absolute end-0.75 bottom-0.75 inline-flex h-4.5 items-center justify-center rounded-full bg-media-scrim/80 px-1.5 text-unread-badge text-media-foreground tabular-nums select-none",
                children: (0, i.jsx)(c.A, {
                  id: "imageTextEditing.versionBadge",
                  defaultMessage: "v{version, number}",
                  values: { version: m },
                }),
              })),
            (u[22] = m),
            (u[23] = a))
          : (a = u[23]),
        u[24] !== t || u[25] !== l || u[26] !== a
          ? ((d = (0, i.jsxs)("span", {
              className: "relative flex size-full items-center justify-center overflow-hidden",
              children: [l, t, a],
            })),
            (u[24] = t),
            (u[25] = l),
            (u[26] = a),
            (u[27] = d))
          : (d = u[27]),
        d
      )
    }
    function n0(e) {
      let t,
        n,
        i = (0, r.c)(9),
        { tabId: l, requestClose: a } = e,
        o = (0, s.gh)(w.GD),
        c = (0, s._U)(j.My, l),
        g = (0, u.useEffectEvent)(a)
      return (
        i[0] !== g || i[1] !== o || i[2] !== l || i[3] !== c
          ? ((t = () => {
              let e
              if (null == c) return
              let t = (0, j.getThreadPanelTabController)(c),
                n = o.get(t.tabById$, l)?.onBeforeClose,
                i = (t) => {
                  if (null != e) return e.promise
                  let i = (0, d.udX)()
                  e = i
                  let r = (t) => {
                    e === i && ((e = void 0), i.resolve(t))
                  }
                  return (
                    !(async function () {
                      try {
                        ;(await (n?.(t) ?? !0))
                          ? e === i &&
                            g(
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
                t.updateTab(o, l, { onBeforeClose: i }),
                () => {
                  ;(e?.resolve(!1), (e = void 0))
                  let t = (0, j.KE)(o, l)
                  if (null != t) {
                    let e = (0, j.getThreadPanelTabController)(t)
                    o.get(e.tabById$, l)?.onBeforeClose === i && e.updateTab(o, l, { onBeforeClose: n })
                  }
                }
              )
            }),
            (i[0] = g),
            (i[1] = o),
            (i[2] = l),
            (i[3] = c),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== o || i[6] !== l || i[7] !== c
          ? ((n = [o, l, c]), (i[5] = o), (i[6] = l), (i[7] = c), (i[8] = n))
          : (n = i[8]),
        (0, u.useEffect)(t, n),
        null
      )
    }
    function n2(e) {
      let t,
        n = (0, r.c)(10),
        { operation: l } = e
      if ("uncertain" === l.status) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.saveUncertain",
                defaultMessage: "Save may have completed",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("unavailable" === l.status) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.unavailableDocument",
                defaultMessage: "Can\u2019t open Layers for this image",
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if ("preparation" === l.kind && "assets" === l.failure) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(c.A, {
                id: "imageTextEditing.previewUnavailable",
                defaultMessage: "Couldn\u2019t load the editable preview",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if ("rejected" === l.failure)
        switch (l.rejectionStatus) {
          case 401:
          case 403: {
            let e
            return (
              n[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(c.A, {
                    id: "imageTextEditing.savePermission",
                    defaultMessage: "You no longer have permission to save this image",
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
                ? ((e = (0, i.jsx)(c.A, {
                    id: "imageTextEditing.saveSourceUnavailable",
                    defaultMessage: "The source for this edit is unavailable",
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
                ? ((e = (0, i.jsx)(c.A, {
                    id: "imageTextEditing.saveRateLimited",
                    defaultMessage: "Too many save requests. Try again in a moment",
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
                ? ((e = (0, i.jsx)(c.A, {
                    id: "imageTextEditing.saveRejected",
                    defaultMessage: "Couldn\u2019t save these changes. Return to editing to revise them",
                  })),
                  (n[6] = e))
                : (e = n[6]),
              e
            )
          }
        }
      if ("snapshot" === l.kind) {
        let e
        return (
          n[7] !== l.documentId
            ? ((e =
                null != l.documentId
                  ? (0, i.jsx)(c.A, {
                      id: "imageTextEditing.savedPreviewUnavailable",
                      defaultMessage: "Saved; preview unavailable",
                    })
                  : (0, i.jsx)(c.A, {
                      id: "imageTextEditing.saveFailed",
                      defaultMessage: "Couldn\u2019t save this image",
                    })),
              (n[7] = l.documentId),
              (n[8] = e))
            : (e = n[8]),
          e
        )
      }
      return (
        n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(c.A, { id: "imageTextEditing.extractionFailed", defaultMessage: "Something went wrong" })),
            (n[9] = t))
          : (t = n[9]),
        t
      )
    }
  },
  ZII9(e, t, n) {
    let i = (0, n("ESTr").a)({
      name: "arrow-up-line-horizontal-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        visualBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        center: { x: 7.999756, y: 8.020752 },
        insets: { top: 2.182129, right: 2.80835, bottom: 2.140625, left: 2.807861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.020752 }, foreground: { x: 7.999756, y: 8.020752 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6663 12.8083C12.9562 12.8083 13.1917 13.0438 13.1917 13.3337C13.1916 13.6236 12.9561 13.8591 12.6663 13.8591H3.33325C3.04336 13.8591 2.80796 13.6236 2.80786 13.3337C2.80786 13.0438 3.0433 12.8083 3.33325 12.8083H12.6663Z" fill="currentColor"/> <path d="M7.27466 2.48218C7.64985 2.10704 8.24416 2.08374 8.64673 2.41187L8.72485 2.48218L11.7043 5.46167C11.9092 5.66657 11.909 5.9988 11.7043 6.20386C11.4993 6.40888 11.1672 6.40888 10.9622 6.20386L8.52563 3.76733V10.5007C8.52536 10.7903 8.28989 11.025 8.00024 11.0251C7.71046 11.0251 7.47512 10.7905 7.47485 10.5007V3.76538L5.03735 6.20386C4.83233 6.40888 4.50019 6.40888 4.29517 6.20386C4.09072 5.99879 4.09033 5.6665 4.29517 5.46167L7.27466 2.48218Z" fill="currentColor"/>',
    })
    n.d(t, {}, { U: i })
  },
  R74X(e, t, n) {
    let i = (0, n("ESTr").a)({
      name: "node-to-node-path-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.14209, y: 2.142578, width: 11.714844, height: 11.714844 },
        visualBounds: { x: 2.14209, y: 2.142578, width: 11.714844, height: 11.714844 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.14209, y: 2.142578, width: 11.714844, height: 11.714844 },
        center: { x: 7.999512, y: 8 },
        insets: { top: 2.142578, right: 2.143066, bottom: 2.142578, left: 2.14209 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999512, y: 8 }, foreground: { x: 7.999512, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6665 2.14258C12.8764 2.14264 13.8569 3.12311 13.8569 4.33301C13.8569 5.54296 12.8764 6.52435 11.6665 6.52441C10.6383 6.5243 9.7775 5.8149 9.5415 4.85938H6.83447C6.18106 4.85938 5.87593 5.17137 5.79248 5.43164C5.71143 5.68545 5.78095 6.07502 6.27393 6.38574L10.2661 8.71484C10.2704 8.71733 10.2756 8.72004 10.2798 8.72266C11.1143 9.2446 11.4612 10.104 11.2095 10.8906C10.9593 11.6716 10.18 12.1932 9.16748 12.1934H6.45654C6.22029 13.1483 5.36135 13.8574 4.3335 13.8574C3.1235 13.8574 2.14209 12.876 2.14209 11.666C2.14216 10.4561 3.12354 9.47559 4.3335 9.47559C5.36278 9.47564 6.22366 10.1858 6.4585 11.1426H9.16748C9.82062 11.1424 10.126 10.8305 10.2095 10.5703C10.2909 10.3156 10.2199 9.9246 9.72217 9.61328L5.73682 7.28809L5.72314 7.28027C4.8883 6.7585 4.54105 5.89905 4.79248 5.1123C5.04247 4.33098 5.8215 3.80958 6.83447 3.80957H9.54053C9.77551 2.8528 10.6373 2.14269 11.6665 2.14258ZM4.3335 10.5254C3.70344 10.5254 3.19294 11.036 3.19287 11.666C3.19287 12.2961 3.7034 12.8066 4.3335 12.8066C4.96354 12.8066 5.47412 12.2961 5.47412 11.666C5.47406 11.036 4.9635 10.5255 4.3335 10.5254ZM11.6665 3.19238C11.0366 3.19251 10.5259 3.70305 10.5259 4.33301C10.5259 4.96302 11.0365 5.4735 11.6665 5.47363C12.2965 5.47357 12.8071 4.96307 12.8071 4.33301C12.8071 3.70301 12.2965 3.19245 11.6665 3.19238Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { i: i })
  },
  y6fH(e, t, n) {
    let i = (0, n("ESTr").a)({
      name: "paintbrush-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.974609, y: 2.038086, width: 11.985718, height: 11.986572 },
        visualBounds: { x: 1.974609, y: 2.038086, width: 11.985718, height: 11.986572 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.974609, y: 2.038086, width: 11.985718, height: 11.986572 },
        center: { x: 7.967468, y: 8.031372 },
        insets: { top: 2.038086, right: 2.039673, bottom: 1.975342, left: 1.974609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.967468, y: 8.031372 }, foreground: { x: 7.967468, y: 8.031372 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.8793 2.37386C11.6722 1.82771 12.7153 1.97285 13.3705 2.62777C14.0257 3.28296 14.1706 4.32595 13.6244 5.11898C12.0259 7.43978 9.95676 9.47604 7.68596 11.1053C7.68676 11.1332 7.69084 11.1612 7.69084 11.1893C7.69083 12.5263 6.76039 13.7525 5.37444 13.9364C5.20938 13.9583 5.04546 13.9775 4.89202 13.9901C4.41327 14.0294 3.81177 14.0287 3.34221 14.0194C3.10497 14.0147 2.89577 14.0077 2.74651 14.0018C2.67224 13.9989 2.61214 13.9959 2.57073 13.994C2.55038 13.993 2.53388 13.9926 2.52287 13.992C2.51778 13.9918 2.51303 13.9912 2.51018 13.9911H2.5053L2.03264 13.9657L2.00823 13.494V13.4891C2.00807 13.4862 2.00752 13.4819 2.00725 13.4764C2.0067 13.4653 2.00626 13.4492 2.0053 13.4286C2.00336 13.387 2.00043 13.3265 1.99748 13.2518C1.9916 13.1025 1.98462 12.8942 1.97991 12.6571C1.97058 12.1873 1.96985 11.5851 2.0092 11.1063C2.02181 10.953 2.04007 10.7897 2.06194 10.6248C2.24581 9.23902 3.47315 8.30765 4.80998 8.30746C4.83796 8.30746 4.86618 8.31057 4.89397 8.31136C6.52301 6.04104 8.55899 3.97213 10.8793 2.37386ZM4.80998 9.35824C3.93743 9.35843 3.20969 9.95809 3.10295 10.7625C3.08264 10.9157 3.06689 11.0616 3.05608 11.1932C3.02137 11.6159 3.02052 12.1726 3.02971 12.6356C3.03201 12.7516 3.03547 12.8608 3.0385 12.9588C3.13673 12.9619 3.24633 12.9672 3.36272 12.9696C3.82573 12.9788 4.38325 12.9779 4.80608 12.9432C4.93755 12.9324 5.08375 12.9166 5.23674 12.8963C6.04118 12.7895 6.64102 12.0619 6.64104 11.1893C6.64104 10.1779 5.82131 9.3584 4.80998 9.35824ZM12.6283 3.36996C12.3053 3.04718 11.8212 3.00064 11.475 3.2391C9.38413 4.67936 7.5249 6.52787 6.0053 8.56918C6.63465 8.85687 7.14025 9.3637 7.42815 9.993C9.46982 8.47313 11.3197 6.61454 12.7602 4.52328C12.9985 4.17699 12.9513 3.69293 12.6283 3.36996Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { _: i })
  },
}
//# sourceMappingURL=216721.353f71a396.js.map
