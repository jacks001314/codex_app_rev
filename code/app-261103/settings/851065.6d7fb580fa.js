export const __rspack_esm_ids = [851065]
export const __webpack_modules__ = {
  AnoK(e, t, r) {
    var s = r("DBCl")
    r.d(
      t,
      {},
      {
        l: function (e) {
          return !0 !== e.ephemeral && e.threadSource !== s.ONi
        },
      },
    )
  },
  GK7D(e, t, r) {
    var s = r("ABep"),
      n = r("QosV"),
      o = r("on57")
    r.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            r,
            a,
            i,
            l,
            d,
            c,
            u,
            f,
            m,
            h = (0, n.c)(30),
            { actions: p, asset: g, subtitle: x, subtitleClassName: w, title: b, variant: v } = e,
            k = void 0 === v ? "default" : v
          h[0] !== g
            ? ((t = null == g ? null : (0, s.jsx)("div", { className: "flex", children: g })), (h[0] = g), (h[1] = t))
            : (t = h[1])
          let y = "page" === k ? "flex-nowrap" : "flex-wrap"
          h[2] !== y
            ? ((r = (0, o.A)("flex min-w-0 items-start justify-between gap-4", y)), (h[2] = y), (h[3] = r))
            : (r = h[3])
          let j = "settingsCompact" === k ? "gap-1.25" : "gap-1.5"
          h[4] !== j ? ((a = (0, o.A)("flex min-w-0 flex-1 basis-64 flex-col", j)), (h[4] = j), (h[5] = a)) : (a = h[5])
          let A = "settings" === k && "heading-lg font-normal",
            C = "settingsCompact" === k && "heading-lg font-semibold leading-7",
            M = "page" === k && "heading-lg electron:heading-xl",
            N = "default" === k && "heading-base electron:heading-lg"
          return (
            h[6] !== N || h[7] !== A || h[8] !== C || h[9] !== M
              ? ((i = (0, o.A)("min-w-0 break-words text-default", A, C, M, N)),
                (h[6] = N),
                (h[7] = A),
                (h[8] = C),
                (h[9] = M),
                (h[10] = i))
              : (i = h[10]),
            h[11] !== i || h[12] !== b
              ? ((l = (0, s.jsx)("h1", { className: i, children: b })), (h[11] = i), (h[12] = b), (h[13] = l))
              : (l = h[13]),
            h[14] !== x || h[15] !== w
              ? ((d =
                  null == x
                    ? null
                    : (0, s.jsx)("div", { className: (0, o.A)("text-base text-secondary", w), children: x })),
                (h[14] = x),
                (h[15] = w),
                (h[16] = d))
              : (d = h[16]),
            h[17] !== l || h[18] !== d || h[19] !== a
              ? ((c = (0, s.jsxs)("div", { className: a, children: [l, d] })),
                (h[17] = l),
                (h[18] = d),
                (h[19] = a),
                (h[20] = c))
              : (c = h[20]),
            h[21] !== p
              ? ((u =
                  null == p
                    ? null
                    : (0, s.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: p })),
                (h[21] = p),
                (h[22] = u))
              : (u = h[22]),
            h[23] !== c || h[24] !== u || h[25] !== r
              ? ((f = (0, s.jsxs)("div", { className: r, children: [c, u] })),
                (h[23] = c),
                (h[24] = u),
                (h[25] = r),
                (h[26] = f))
              : (f = h[26]),
            h[27] !== f || h[28] !== t
              ? ((m = (0, s.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, f],
                })),
                (h[27] = f),
                (h[28] = t),
                (h[29] = m))
              : (m = h[29]),
            m
          )
        },
      },
    )
  },
  nPtV(e, t, r) {
    var s = r("QosV"),
      n = r("T0Rc"),
      o = r("zTeN"),
      a = r("rvFo"),
      i = r("iQgv"),
      l = r("ZYQR"),
      d = r("dg06"),
      c = r("J43j")
    r.d(
      t,
      {},
      {
        f: function (e, t, r) {
          let u,
            f,
            m,
            h,
            p = (0, s.c)(13)
          p[0] !== e ? ((u = (0, c.W)(e)), (p[0] = e), (p[1] = u)) : (u = p[1])
          let g = u,
            x = (0, o._U)(l.L, g),
            w = x?.worktreesRoot ?? null,
            b = null != x && (r?.enabled ?? !0)
          return (
            p[2] !== g || p[3] !== w ? ((f = (0, d.F)(g, w)), (p[2] = g), (p[3] = w), (p[4] = f)) : (f = p[4]),
            p[5] !== e || p[6] !== t || p[7] !== w
              ? ((m = (r) => {
                  let { signal: s } = r
                  return (0, i.V)("git").request({
                    method: "codex-worktrees",
                    params: { hostConfig: e, operationSource: t, worktreesRoot: w },
                    signal: s,
                  })
                }),
                (p[5] = e),
                (p[6] = t),
                (p[7] = w),
                (p[8] = m))
              : (m = p[8]),
            p[9] !== b || p[10] !== f || p[11] !== m
              ? ((h = { enabled: b, queryKey: f, queryFn: m, staleTime: a.D.INFINITE, gcTime: 18e5 }),
                (p[9] = b),
                (p[10] = f),
                (p[11] = m),
                (p[12] = h))
              : (h = p[12]),
            (0, n.I)(h)
          )
        },
      },
    )
  },
  jxU8(e, t, r) {
    r.d(t, { P: () => p, Y: () => g })
    var s = r("ABep"),
      n = r("QosV"),
      o = r("on57"),
      a = r("zd8w"),
      i = r("bJfu"),
      l = r("qbQ6"),
      d = r("GK7D"),
      c = r("PkPj"),
      u = r("DiyT"),
      f = r("ibLK"),
      m = r("V8uZ"),
      h = r("oFmV")
    function p(e) {
      let t,
        r,
        p,
        g,
        x,
        w,
        b,
        v,
        k,
        y,
        j,
        A,
        C,
        M,
        N,
        S,
        I,
        _,
        P,
        E,
        R,
        T,
        D,
        F,
        L,
        H,
        z,
        O,
        W,
        B,
        G,
        Q,
        U,
        q,
        K,
        X,
        V,
        $,
        Z,
        J,
        Y,
        ee,
        et,
        er,
        es = (0, n.c)(120)
      es[0] !== e
        ? (({
            title: _,
            asset: r,
            backSlot: p,
            subtitle: C,
            children: g,
            fullWidth: N,
            contentClassName: w,
            subtitleClassName: M,
            action: t,
            toolbarActions: P,
            stickyControls: A,
            footer: v,
            embedded: S,
            density: b,
            scrollResetKey: j,
            containTouchOverscroll: I,
            ref: k,
            className: x,
            ...y
          } = e),
          (es[0] = e),
          (es[1] = t),
          (es[2] = r),
          (es[3] = p),
          (es[4] = g),
          (es[5] = x),
          (es[6] = w),
          (es[7] = b),
          (es[8] = v),
          (es[9] = k),
          (es[10] = y),
          (es[11] = j),
          (es[12] = A),
          (es[13] = C),
          (es[14] = M),
          (es[15] = N),
          (es[16] = S),
          (es[17] = I),
          (es[18] = _),
          (es[19] = P))
        : ((t = es[1]),
          (r = es[2]),
          (p = es[3]),
          (g = es[4]),
          (x = es[5]),
          (w = es[6]),
          (b = es[7]),
          (v = es[8]),
          (k = es[9]),
          (y = es[10]),
          (j = es[11]),
          (A = es[12]),
          (C = es[13]),
          (M = es[14]),
          (N = es[15]),
          (S = es[16]),
          (I = es[17]),
          (_ = es[18]),
          (P = es[19]))
      let en = void 0 !== N && N,
        eo = void 0 !== S && S,
        ea = void 0 !== I && I,
        ei = b ?? "default",
        el = (0, a.useRef)(null),
        ed = (0, a.useRef)(null),
        ec = ea && !eo && !1
      ;((et = (0, n.c)(4)),
        (er = (0, f.U)(ec ? "(pointer: coarse)" : null)),
        et[0] !== er || et[1] !== ed
          ? ((Y = () => {
              let e = ed.current
              if (!er || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let r = e.closest("[data-app-shell-frame]") ?? e,
                s = e.closest("[data-app-shell-main-surface]"),
                n = null,
                o = 0,
                a = () => {
                  n = null
                },
                i = (t) => {
                  let r = t.touches[0]
                  if (1 !== t.touches.length || null == r) return void a()
                  let i = t.composedPath().includes(e),
                    l = t.target,
                    d =
                      l instanceof Element &&
                      ((l.contains(e) && s?.contains(l)) || null != l.closest("[data-app-shell-main-titlebar]"))
                  i || d ? ((n = { x: r.clientX, y: r.clientY, inPanel: i }), (o = r.clientY)) : a()
                },
                l = (t) => {
                  let s = t.touches[0]
                  if (1 !== t.touches.length || null == s || null == n) return void a()
                  let i = s.clientY > o
                  if (
                    ((o = s.clientY),
                    !(!t.cancelable || !i || s.clientY - n.y <= Math.abs(s.clientX - n.x)) &&
                      (!n.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let s of t.composedPath()) {
                      if (s === e || s === r) break
                      if (
                        s instanceof HTMLElement &&
                        s.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(s).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                d = { capture: !0, passive: !0 }
              return (
                r.addEventListener("touchstart", i, d),
                r.addEventListener("touchmove", l, { capture: !0, passive: !1 }),
                r.addEventListener("touchend", a, d),
                r.addEventListener("touchcancel", a, d),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    r.removeEventListener("touchstart", i, !0),
                    r.removeEventListener("touchmove", l, !0),
                    r.removeEventListener("touchend", a, !0),
                    r.removeEventListener("touchcancel", a, !0))
                }
              )
            }),
            (ee = [er, ed]),
            (et[0] = er),
            (et[1] = ed),
            (et[2] = Y),
            (et[3] = ee))
          : ((Y = et[2]), (ee = et[3])),
        (0, a.useEffect)(Y, ee))
      let [eu, ef] = (0, a.useState)(!1),
        em = (0, a.useContext)(h.S),
        eh = !!em?.slateLayout && !eo
      ;(0, f.U)(l.mk)
      let ep = eh && !1,
        eg = em?.targetId ?? null,
        ex = em?.targetText ?? null,
        ew = em?.navigationKey ?? null
      ;(es[20] !== j
        ? ((E = () => {
            null != j && null != ed.current && (ed.current.scrollTop = 0)
          }),
          (R = [j]),
          (es[20] = j),
          (es[21] = E),
          (es[22] = R))
        : ((E = es[21]), (R = es[22])),
        (0, a.useLayoutEffect)(E, R),
        es[23] !== eg || es[24] !== ex
          ? ((T = () => {
              let e, t
              if (null == eg && null == ex) return
              let r = el.current
              if (null == r) return
              let s = () => {
                  if (null == ex) return null == eg ? null : document.getElementById(eg)
                  let e = ex.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    s = null
                  for (let n of r.querySelectorAll("*")) {
                    let r = (n.getAttribute("placeholder") ?? n.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == r ||
                      !t.every((e) => r.includes(e)) ||
                      null != n.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let o = r.includes(e)
                    ;(null == s || (o && !s.isContiguous) || (o === s.isContiguous && r.length <= s.text.length)) &&
                      (s = { element: n, isContiguous: o, text: r })
                  }
                  return s?.element ?? null
                },
                n = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let s = "true" === document.documentElement.dataset.reducedMotion,
                    n = t.closest("button"),
                    o = n?.parentElement ?? t
                  if (null == n) {
                    let e = t.closest("section")
                    for (let s = t.parentElement; null != s && s !== e && s !== r; s = s.parentElement)
                      if (
                        Array.from(s.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        o = s
                        break
                      }
                  }
                  e = o.animate?.(
                    s
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${m.Wu.join(", ")})` },
                  )
                },
                o =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = s()
                        null != e && n(e)
                      })
                    : null,
                a = () => {
                  for (let e of (t?.disconnect(), o?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    r.ownerDocument.removeEventListener(e, a)
                }
              if (null != o)
                for (let e of (o.observe(r), ["wheel", "pointerdown", "keydown"]))
                  r.ownerDocument.addEventListener(e, a, { passive: !0 })
              let i = s()
              return (
                null != i
                  ? n(i)
                  : (t = new MutationObserver(() => {
                      let e = s()
                      null != e && (n(e), t?.disconnect())
                    })).observe(null == ex ? document.body : r, { childList: !0, subtree: !0 }),
                () => {
                  ;(a(), e?.cancel())
                }
              )
            }),
            (es[23] = eg),
            (es[24] = ex),
            (es[25] = T))
          : (T = es[25]),
        es[26] !== ew || es[27] !== eg || es[28] !== ex
          ? ((D = [ew, eg, ex]), (es[26] = ew), (es[27] = eg), (es[28] = ex), (es[29] = D))
          : (D = es[29]),
        (0, a.useLayoutEffect)(T, D),
        es[30] !== P
          ? ((F =
              null == P
                ? null
                : (0, s.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: P,
                  })),
            (es[30] = P),
            (es[31] = F))
          : (F = es[31]),
        es[32] !== p || es[33] !== F
          ? ((L = (0, s.jsxs)(s.Fragment, { children: [p, F] })), (es[32] = p), (es[33] = F), (es[34] = L))
          : (L = es[34]))
      let eb = L,
        ev = eo ? "default" : "settings"
      "compact" === ei && (ev = "settingsCompact")
      let ek = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        ey =
          "default" === b &&
          (eo && !en ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        ej = en ? null : eo ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(es[35] !== w || es[36] !== A || es[37] !== ek || es[38] !== ey || es[39] !== ej || es[40] !== eh
        ? ((H = (0, o.A)(
            "group/settings mx-auto flex w-full flex-col",
            ek,
            ey,
            ej,
            eh && ["px-panel pb-panel", null == A && "pt-panel"],
            w,
          )),
          (es[35] = w),
          (es[36] = A),
          (es[37] = ek),
          (es[38] = ey),
          (es[39] = ej),
          (es[40] = eh),
          (es[41] = H))
        : (H = es[41]),
        es[42] !== t ||
        es[43] !== r ||
        es[44] !== ei ||
        es[45] !== eo ||
        es[46] !== ev ||
        es[47] !== C ||
        es[48] !== M ||
        es[49] !== _ ||
        es[50] !== eh
          ? ((z =
              null == _ || eh
                ? null
                : (0, s.jsx)("div", {
                    className: (0, o.A)("compact" === ei && "pb-5.5", "default" === ei && (eo ? "pb-panel" : "pb-8")),
                    children: (0, s.jsx)(d.z, {
                      actions: t,
                      asset: r,
                      subtitle: C,
                      subtitleClassName: (0, o.A)("text-balance", M),
                      title: _,
                      variant: ev,
                    }),
                  })),
            (es[42] = t),
            (es[43] = r),
            (es[44] = ei),
            (es[45] = eo),
            (es[46] = ev),
            (es[47] = C),
            (es[48] = M),
            (es[49] = _),
            (es[50] = eh),
            (es[51] = z))
          : (z = es[51]),
        es[52] !== A
          ? ((O = null == A ? null : (0, s.jsx)(c.J1, { className: "top-0 pt-panel pb-2", children: A })),
            (es[52] = A),
            (es[53] = O))
          : (O = es[53]))
      let eA =
          eo && !en
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eC = null != A && "pt-5"
      ;(es[54] !== eA || es[55] !== eC
        ? ((W = (0, o.A)("flex flex-col", eA, eC)), (es[54] = eA), (es[55] = eC), (es[56] = W))
        : (W = es[56]),
        es[57] !== g || es[58] !== W
          ? ((B = (0, s.jsx)("div", { className: W, children: g })), (es[57] = g), (es[58] = W), (es[59] = B))
          : (B = es[59]),
        es[60] !== ei || es[61] !== H || es[62] !== z || es[63] !== O || es[64] !== B
          ? ((G = (0, s.jsxs)("div", { ref: el, className: H, "data-density": ei, children: [z, O, B] })),
            (es[60] = ei),
            (es[61] = H),
            (es[62] = z),
            (es[63] = O),
            (es[64] = B),
            (es[65] = G))
          : (G = es[65]))
      let eM = G
      if (eo) {
        let e, t, r
        return (
          es[66] !== x ? ((e = (0, o.A)("flex min-h-0 flex-col", x)), (es[66] = x), (es[67] = e)) : (e = es[67]),
          es[68] !== p || es[69] !== eb || es[70] !== P
            ? ((t =
                null != p || null != P
                  ? (0, s.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (es[68] = p),
              (es[69] = eb),
              (es[70] = P),
              (es[71] = t))
            : (t = es[71]),
          es[72] !== eM || es[73] !== k || es[74] !== y || es[75] !== e || es[76] !== t
            ? ((r = (0, s.jsxs)("div", { ref: k, className: e, ...y, children: [t, eM] })),
              (es[72] = eM),
              (es[73] = k),
              (es[74] = y),
              (es[75] = e),
              (es[76] = t),
              (es[77] = r))
            : (r = es[77]),
          r
        )
      }
      ;(es[78] !== x
        ? ((Q = (0, o.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (es[78] = x),
          (es[79] = Q))
        : (Q = es[79]),
        es[80] !== _ || es[81] !== ep
          ? ((U = ep
              ? (0, s.jsx)(i.G.Header, {
                  divider: !1,
                  children: (0, s.jsx)(i.G.HeaderToolbar, {
                    children: (0, s.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: _,
                    }),
                  }),
                })
              : null),
            (es[80] = _),
            (es[81] = ep),
            (es[82] = U))
          : (U = es[82]),
        es[83] !== p || es[84] !== eb || es[85] !== P || es[86] !== eh
          ? ((q =
              eh && null == p && null == P
                ? null
                : (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (es[83] = p),
            (es[84] = eb),
            (es[85] = P),
            (es[86] = eh),
            (es[87] = q))
          : (q = es[87]))
      let eN = ec || void 0,
        eS = ep ? eu : void 0,
        eI = ep || void 0
      es[88] !== ep
        ? ((K = ep ? (e) => ef(e.currentTarget.scrollTop > 0) : void 0), (es[88] = ep), (es[89] = K))
        : (K = es[89])
      let e_ = !eh && "p-panel"
      return (
        es[90] !== e_
          ? ((X = (0, o.A)("flex-1 scrollbar-stable overflow-y-auto", e_)), (es[90] = e_), (es[91] = X))
          : (X = es[91]),
        es[92] !== t ||
        es[93] !== r ||
        es[94] !== ei ||
        es[95] !== en ||
        es[96] !== C ||
        es[97] !== M ||
        es[98] !== _ ||
        es[99] !== ep ||
        es[100] !== eh
          ? ((V =
              null == _ || !eh || ep
                ? null
                : (0, s.jsx)(u.g, {
                    className: en ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, s.jsxs)(s.Fragment, {
                      children: [
                        null == r ? null : (0, s.jsx)("div", { className: "flex", children: r }),
                        (0, s.jsx)("h1", {
                          className: (0, o.A)("text-default", "compact" === ei ? "heading-lg" : "heading-xl"),
                          children: _,
                        }),
                        null == C
                          ? null
                          : (0, s.jsx)("div", {
                              className: (0, o.A)("text-base leading-6 text-balance text-secondary", M),
                              children: C,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, s.jsx)(u.T, { search: null, actions: t }),
                  })),
            (es[92] = t),
            (es[93] = r),
            (es[94] = ei),
            (es[95] = en),
            (es[96] = C),
            (es[97] = M),
            (es[98] = _),
            (es[99] = ep),
            (es[100] = eh),
            (es[101] = V))
          : (V = es[101]),
        es[102] !== eM ||
        es[103] !== eN ||
        es[104] !== eS ||
        es[105] !== eI ||
        es[106] !== K ||
        es[107] !== X ||
        es[108] !== V
          ? (($ = (0, s.jsxs)("div", {
              ref: ed,
              "data-contain-touch-overscroll": eN,
              "data-app-shell-page-scrolled": eS,
              "data-settings-mobile-header": eI,
              onScroll: K,
              className: X,
              children: [V, eM],
            })),
            (es[102] = eM),
            (es[103] = eN),
            (es[104] = eS),
            (es[105] = eI),
            (es[106] = K),
            (es[107] = X),
            (es[108] = V),
            (es[109] = $))
          : ($ = es[109]),
        es[110] !== v
          ? ((Z =
              null != v &&
              (0, s.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: v,
              })),
            (es[110] = v),
            (es[111] = Z))
          : (Z = es[111]),
        es[112] !== k ||
        es[113] !== y ||
        es[114] !== Q ||
        es[115] !== U ||
        es[116] !== q ||
        es[117] !== $ ||
        es[118] !== Z
          ? ((J = (0, s.jsxs)("div", { ref: k, className: Q, ...y, children: [U, q, $, Z] })),
            (es[112] = k),
            (es[113] = y),
            (es[114] = Q),
            (es[115] = U),
            (es[116] = q),
            (es[117] = $),
            (es[118] = Z),
            (es[119] = J))
          : (J = es[119]),
        J
      )
    }
    function g(e) {
      let t,
        r,
        o = (0, n.c)(8),
        { children: a, navigationKey: i, slateLayout: l, targetId: d, targetText: c } = e,
        u = void 0 !== l && l,
        f = void 0 === c ? null : c
      return (
        o[0] !== i || o[1] !== u || o[2] !== d || o[3] !== f
          ? ((t =
              null != d || null != f || u ? { navigationKey: i, slateLayout: u, targetId: d, targetText: f } : null),
            (o[0] = i),
            (o[1] = u),
            (o[2] = d),
            (o[3] = f),
            (o[4] = t))
          : (t = o[4]),
        o[5] !== a || o[6] !== t
          ? ((r = (0, s.jsx)(h.S.Provider, { value: t, children: a })), (o[5] = a), (o[6] = t), (o[7] = r))
          : (r = o[7]),
        r
      )
    }
  },
  oFmV(e, t, r) {
    let s = (0, r("zd8w").createContext)(null)
    r.d(t, {}, { S: s })
  },
  JRQt(e, t, r) {
    let s = (0, r("Qgfj").YK)({
      inherit: {
        id: "worktreePreference.inherit",
        defaultMessage: "Use default",
        description: "Remove a repository override and use the worktree permission default for all repositories",
      },
      ask: {
        id: "worktreePreference.ask",
        defaultMessage: "Ask when needed",
        description: "Worktree creation preference that asks the user whenever Codex needs a new checkout",
      },
      always: {
        id: "worktreePreference.always",
        defaultMessage: "Always allow",
        description: "Worktree preference that instructs Codex to use an isolated checkout whenever it edits files",
      },
      never: {
        id: "worktreePreference.never",
        defaultMessage: "Never create",
        description:
          "Worktree preference that instructs Codex to create a checkout only if the user explicitly requests one in chat",
      },
      dirty: {
        id: "worktreePreference.dirty",
        defaultMessage: "Allow when checkout is dirty",
        description:
          "Worktree preference that instructs Codex to use an isolated checkout when editing a Git checkout with uncommitted changes or untracked files",
      },
    })
    r.d(t, {}, { B: s })
  },
  pAJp(e, t, r) {
    var s = r("ABep"),
      n = r("QosV"),
      o = r("Wf1j"),
      a = r("oyxz"),
      i = r("HZfM"),
      l = r("BrP7")
    r.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            r,
            d,
            c,
            u,
            f = (0, n.c)(10),
            { selectedTab: m } = e,
            h = (0, o.A)(),
            p = (0, i.Zp)()
          return (
            f[0] !== h
              ? ((t = h.formatMessage({
                  id: "settings.worktrees.tabs",
                  defaultMessage: "Worktrees settings",
                  description: "Accessible label for worktree settings tabs",
                })),
                (f[0] = h),
                (f[1] = t))
              : (t = f[1]),
            f[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = {
                  key: "general",
                  name: (0, s.jsx)(a.A, {
                    id: "settings.worktrees.general",
                    defaultMessage: "General",
                    description: "Tab showing worktree management and cleanup settings",
                  }),
                }),
                (f[2] = r))
              : (r = f[2]),
            f[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = [
                  r,
                  {
                    key: "environments",
                    name: (0, s.jsx)(a.A, {
                      id: "settings.worktrees.environments",
                      defaultMessage: "Environments",
                      description: "Tab showing local environment setup for worktrees",
                    }),
                  },
                ]),
                (f[3] = d))
              : (d = f[3]),
            f[4] !== p
              ? ((c = (e) => void p("general" === e ? "/settings/worktrees" : "/settings/worktrees?tab=environments")),
                (f[4] = p),
                (f[5] = c))
              : (c = f[5]),
            f[6] !== m || f[7] !== t || f[8] !== c
              ? ((u = (0, s.jsx)(l.t, { ariaLabel: t, selectedKey: m, tabs: d, variant: "toolbar", onSelect: c })),
                (f[6] = m),
                (f[7] = t),
                (f[8] = c),
                (f[9] = u))
              : (u = f[9]),
            u
          )
        },
      },
    )
  },
  YQVA(e, t, r) {
    r.d(t, { WorktreesSettingsPage: () => e2 })
    var s = r("ABep"),
      n = r("QosV"),
      o = r("mjZ0"),
      a = r("zTeN"),
      i = r("Wf1j"),
      l = r("oyxz"),
      d = r("HZfM"),
      c = r("ygO2"),
      u = r("HOLv"),
      f = r("evwP"),
      m = r("Bbed"),
      h = r("nPtV"),
      p = r("PgCv"),
      g = r("ndjw"),
      x = r("jxU8"),
      w = r("DBCl"),
      b = r("WiNP"),
      v = r("SGsN"),
      k = r("OWtl"),
      y = r("RxZZ"),
      j = r("AWNZ"),
      A = r("IjRG"),
      C = r("zd8w"),
      M = r("bqtn"),
      N = r("QyE3"),
      S = r("JRQt")
    let I = ["ask", "always", "dirty", "never"]
    function _(e) {
      let t,
        r,
        o,
        a,
        i,
        d,
        c,
        u,
        f,
        m,
        h,
        p,
        g,
        x = (0, n.c)(32)
      x[0] !== e
        ? (({ value: i, allowDefault: o, disabled: a, onChange: r, ...t } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = r),
          (x[3] = o),
          (x[4] = a),
          (x[5] = i))
        : ((t = x[1]), (r = x[2]), (o = x[3]), (a = x[4]), (i = x[5]))
      let w = void 0 !== o && o,
        b = void 0 !== a && a,
        v = (0, C.useId)(),
        k = null == i ? "ghostSecondary" : "ghostActive",
        y = t["aria-labelledby"]
      x[6] !== y || x[7] !== v ? ((d = [y, v].filter(Boolean)), (x[6] = y), (x[7] = v), (x[8] = d)) : (d = x[8])
      let j = d.join(" "),
        A = w ? k : "outline",
        _ = S.B[i ?? "inherit"]
      ;(x[9] !== _ ? ((c = (0, s.jsx)(l.A, { ..._ })), (x[9] = _), (x[10] = c)) : (c = x[10]),
        x[11] !== c || x[12] !== v
          ? ((u = (0, s.jsx)("span", { id: v, children: c })), (x[11] = c), (x[12] = v), (x[13] = u))
          : (u = x[13]),
        x[14] !== t || x[15] !== j || x[16] !== A || x[17] !== u
          ? ((f = (0, s.jsx)(N.vg, { ...t, "aria-labelledby": j, color: A, children: u })),
            (x[14] = t),
            (x[15] = j),
            (x[16] = A),
            (x[17] = u),
            (x[18] = f))
          : (f = x[18]))
      let P = i ?? "inherit"
      return (
        x[19] !== w || x[20] !== r
          ? ((m =
              w &&
              (0, s.jsx)(M.ms.RadioItem, {
                value: "inherit",
                onSelect: () => r(null),
                children: (0, s.jsx)(l.A, { ...S.B.inherit }),
              })),
            (x[19] = w),
            (x[20] = r),
            (x[21] = m))
          : (m = x[21]),
        x[22] !== r
          ? ((h = I.map((e) =>
              (0, s.jsx)(
                M.ms.RadioItem,
                { value: e, onSelect: () => r(e), children: (0, s.jsx)(l.A, { ...S.B[e] }) },
                e,
              ),
            )),
            (x[22] = r),
            (x[23] = h))
          : (h = x[23]),
        x[24] !== P || x[25] !== m || x[26] !== h
          ? ((p = (0, s.jsxs)(M.ms.RadioGroup, { value: P, children: [m, h] })),
            (x[24] = P),
            (x[25] = m),
            (x[26] = h),
            (x[27] = p))
          : (p = x[27]),
        x[28] !== b || x[29] !== f || x[30] !== p
          ? ((g = (0, s.jsx)(M.Ab, {
              align: "end",
              contentWidth: "menuFixed",
              disabled: b,
              triggerButton: f,
              children: p,
            })),
            (x[28] = b),
            (x[29] = f),
            (x[30] = p),
            (x[31] = g))
          : (g = x[31]),
        g
      )
    }
    var P = r("xSOA"),
      E = r("iNGw"),
      R = r.n(E),
      T = r("zKw6"),
      D = r.n(T),
      F = r("GO7r"),
      L = r("koMX"),
      H = r("r8w8"),
      z = r("XsHM"),
      O = r("GaA7"),
      W = r("fHlE"),
      B = r("EjYe"),
      G = r("s6B0"),
      Q = r("bnxy")
    function U(e) {
      let t,
        r,
        o,
        d,
        u,
        f,
        m,
        h,
        p,
        g = (0, n.c)(28),
        { hostId: x, savedOnly: b } = e,
        M = void 0 !== b && b,
        N = (0, a.gh)(k.u),
        S = (0, i.A)(),
        I = (0, C.useId)(),
        [E, T] = (0, C.useState)(!1),
        z = (0, y.iK)(w.PHv.repositoryPreferences)
      g[0] !== M ? ((t = M ? [] : G.bh), (g[0] = M), (g[1] = t)) : (t = g[1])
      let U = [
          ...new Set(
            (0, W.j)((0, a.Ul)(t), x)
              .flatMap($)
              .filter(V),
          ),
        ].sort(X),
        { data: Z } = (0, a._U)(L.gitOriginsQuery$, {
          params: { hostId: x, dirs: U },
          source: "worktrees_settings_page",
        }),
        J = (function (e, t, r, s) {
          let n = new Map()
          for (let { hostId: t, commonDir: r, root: o, preference: a } of s)
            t === e &&
              n.set((0, Q.XH)(r), { repository: { hostId: e, commonDir: r, root: o }, preference: a, cwd: null })
          for (let s of (0, H.q)({ origins: r, workspaceRoots: t })) {
            let t = (0, Q.XH)(s.commonDir)
            if (n.has(t)) continue
            let r = (0, w.tIC)(s.commonDir) || (0, w.zjD)(s.commonDir) ? D().win32 : D().posix,
              o = ".git" === r.basename(s.commonDir) ? r.dirname(s.commonDir) : s.root
            n.set(t, {
              repository: { hostId: e, commonDir: s.commonDir, root: o },
              preference: null,
              cwd: s.workspaceRoots[0] ?? s.root,
            })
          }
          return [...n.values()].sort((e, t) => {
            let r = e.repository.root,
              s = t.repository.root
            return (0, Q.Q0)(r).localeCompare((0, Q.Q0)(s)) || r.localeCompare(s)
          })
        })(x, U, Z?.origins ?? [], z ?? []),
        Y = J.filter(K).length,
        ee = R()(J, q)
      ;(g[2] !== x || g[3] !== N
        ? ((r = async (e) => {
            let { row: t, preference: r } = e,
              s = O.appServices?.managedWorktrees?.preferences
            if (null == s) throw Error("Worktree preferences are unavailable")
            let n = null == t.cwd ? t.repository : await s.getRepository({ hostId: x, cwd: t.cwd })
            if (null == n || !(0, w.IkK)(n, t.repository)) throw Error("Worktree repository is unavailable")
            let o = (0, y.vq)(N.get),
              a = o ? (0, y.CN)(N.get, w.PHv.defaultCreationPreference) : void 0,
              i = o
                ? ((0, y.CN)(N.get, w.PHv.repositoryPreferences)?.find((e) => (0, w.IkK)(e, n))?.preference ?? a)
                : void 0
            await s.setRepository(n, r)
            let l = r ?? a
            null != i && null != l && (0, A.c)(N, { type: "repository", repository: n, before: i, after: l })
          }),
          (g[2] = x),
          (g[3] = N),
          (g[4] = r))
        : (r = g[4]),
        g[5] !== S || g[6] !== N
          ? ((o = () => {
              N.get(v.Id).danger(
                S.formatMessage({
                  id: "worktreePreference.repositoryError",
                  defaultMessage: "Could not load or save this repository’s worktree preference",
                  description:
                    "Error when a saved project is no longer an accessible Git repository or its worktree rule cannot be saved",
                }),
                { errorAnalytics: { toastId: "worktreePreference.repositoryError" } },
              )
            }),
            (g[5] = S),
            (g[6] = N),
            (g[7] = o))
          : (o = g[7]),
        g[8] !== r || g[9] !== o
          ? ((d = { mutationFn: r, onError: o }), (g[8] = r), (g[9] = o), (g[10] = d))
          : (d = g[10]))
      let et = (0, P.n)(d)
      if (0 === J.length) return null
      let er = B.H,
        es =
          E &&
          J.map((e) => {
            let { repository: t, preference: r } = e,
              n = (0, Q.Q0)(t.root) || t.root,
              o = (ee[n] ?? 0) > 1
            return (0, s.jsx)(
              j.ic,
              {
                variant: "nested",
                label: (0, s.jsx)("span", { title: t.root, children: n }),
                description: o ? t.root : void 0,
                control: (a) =>
                  (0, s.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [
                      null != r &&
                        (0, s.jsx)(c.$, {
                          "aria-label": S.formatMessage(
                            {
                              id: "worktreePreference.resetRepositoryLabel",
                              defaultMessage: "Reset {repository} to default",
                              description:
                                "Accessible name for the button that removes a repository worktree rule. repository is the Git repository name or its full path when names are shared.",
                            },
                            { repository: o ? t.root : n },
                          ),
                          color: "ghostTertiary",
                          disabled: et.isPending,
                          size: "inline",
                          onClick: () => et.mutate({ row: e, preference: null }),
                          children: (0, s.jsx)(l.A, {
                            id: "worktreePreference.resetRepository",
                            defaultMessage: "Reset",
                            description:
                              "Button that removes a repository worktree rule and restores the global creation setting",
                          }),
                        }),
                      !M &&
                        (0, s.jsx)(_, {
                          ...a,
                          allowDefault: !0,
                          disabled: et.isPending,
                          value: r,
                          onChange: (t) => {
                            t !== r && et.mutate({ row: e, preference: t })
                          },
                        }),
                    ],
                  }),
              },
              (0, Q.XH)(t.commonDir),
            )
          }),
        en = E ? I : void 0
      return (
        g[11] !== Y
          ? ((u =
              Y > 0
                ? (0, s.jsx)(l.A, {
                    id: "worktreePreference.repositoryRulesWithSavedCount",
                    defaultMessage: "Repository rules · {count, plural, one {# saved} other {# saved}}",
                    description:
                      "Button that shows or hides Git repository worktree creation settings. Count is the number of repositories on the selected computer with a saved rule that overrides the default.",
                    values: { count: Y },
                  })
                : (0, s.jsx)(l.A, {
                    id: "worktreePreference.repositoryRules",
                    defaultMessage: "Repository rules",
                    description:
                      "Button that shows or hides Git repositories and their individual worktree creation settings when no repository has a saved rule",
                  })),
            (g[11] = Y),
            (g[12] = u))
          : (u = g[12]),
        g[13] !== E
          ? ((m = E ? (0, s.jsx)(F.Aq_, {}) : (0, s.jsx)(F.uM3, {})),
            (f = () => T(!E)),
            (g[13] = E),
            (g[14] = f),
            (g[15] = m))
          : ((f = g[14]), (m = g[15])),
        g[16] !== E || g[17] !== f || g[18] !== en || g[19] !== u || g[20] !== m
          ? ((h = (0, s.jsx)(j.kG, {
              ariaControls: en,
              ariaExpanded: E,
              edgeRounding: "surface",
              variant: "nested",
              label: u,
              trailing: m,
              onClick: f,
            })),
            (g[16] = E),
            (g[17] = f),
            (g[18] = en),
            (g[19] = u),
            (g[20] = m),
            (g[21] = h))
          : (h = g[21]),
        g[22] !== er || g[23] !== I || g[24] !== E || g[25] !== h || g[26] !== es
          ? ((p = (0, s.jsx)(er, { contentId: I, expanded: E, content: es, children: h })),
            (g[22] = er),
            (g[23] = I),
            (g[24] = E),
            (g[25] = h),
            (g[26] = es),
            (g[27] = p))
          : (p = g[27]),
        p
      )
    }
    function q(e) {
      let { repository: t } = e
      return (0, Q.Q0)(t.root) || t.root
    }
    function K(e) {
      let { preference: t } = e
      return null != t
    }
    function X(e, t) {
      return e.localeCompare(t)
    }
    function V(e) {
      return e !== w.m20
    }
    function $(e) {
      return "local" === e.projectKind ? (0, z.l_)(e) : [e.path]
    }
    function Z(e) {
      let t,
        r,
        o,
        d,
        c,
        u,
        f = (0, n.c)(14),
        { hostId: m } = e,
        h = (0, a.gh)(k.u),
        p = (0, i.A)(),
        g = (0, y.iK)(w.PHv.defaultCreationPreference)
      f[0] !== p || f[1] !== h || f[2] !== g
        ? ((t = async (e) => {
            let t = (0, y.vq)(h.get) ? (0, y.CN)(h.get, w.PHv.repositoryPreferences) : void 0
            try {
              ;(await (0, y.gc)(h, w.PHv.defaultCreationPreference, e),
                null != g && null != t && (0, A.c)(h, { type: "default", before: g, after: e, overrides: t }))
            } catch {
              h.get(v.Id).danger(
                p.formatMessage({
                  id: "worktreePreference.saveError",
                  defaultMessage: "Could not save your worktree preference",
                  description: "Error when saving the user's preference for model-created worktrees",
                }),
                { errorAnalytics: { toastId: "worktreePreference.saveError" } },
              )
            }
          }),
          (f[0] = p),
          (f[1] = h),
          (f[2] = g),
          (f[3] = t))
        : (t = f[3])
      let x = t
      return (
        f[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(l.A, {
              id: "worktreePreference.creationLabel",
              defaultMessage: "Create worktrees for edits",
              description:
                "Label for the global setting that controls when Codex can create an isolated Git checkout to edit files",
            })),
            (o = (0, s.jsx)(l.A, {
              id: "worktreePreference.creationDefaultHelp",
              defaultMessage: "Codex can create a worktree as needed to keep its edits separate from yours.",
              description:
                "Help for the default Git worktree creation preference. Depending on the selected rule, Codex can create a separate checkout for its file edits so they do not change the user's current checkout. A saved rule for a repository takes precedence.",
            })),
            (f[4] = r),
            (f[5] = o))
          : ((r = f[4]), (o = f[5])),
        f[6] !== x || f[7] !== g
          ? ((d = (0, s.jsx)(j.ic, {
              label: r,
              description: o,
              control: (e) =>
                (0, s.jsx)(_, {
                  ...e,
                  value: g,
                  onChange: (e) => {
                    null != e && x(e)
                  },
                }),
            })),
            (f[6] = x),
            (f[7] = g),
            (f[8] = d))
          : (d = f[8]),
        f[9] !== m ? ((c = (0, s.jsx)(U, { hostId: m }, m)), (f[9] = m), (f[10] = c)) : (c = f[10]),
        f[11] !== d || f[12] !== c
          ? ((u = (0, s.jsxs)("div", { children: [d, c] })), (f[11] = d), (f[12] = c), (f[13] = u))
          : (u = f[13]),
        u
      )
    }
    var J = r("zLIa"),
      Y = r("MI1z"),
      ee = r("hGgS"),
      et = r("hZax"),
      er = r("ZYQR")
    function es(e) {
      let t,
        r,
        o,
        d,
        c,
        u,
        f,
        m,
        h,
        p,
        g,
        x = (0, n.c)(32),
        { hostId: b } = e,
        y = (0, a.gh)(k.u),
        A = (0, i.A)(),
        { data: M } = (0, Y.f)(b),
        N = M?.codexHome,
        S = (0, et.Zj)("4059753351") ? M?.workspacesRoot : N,
        I = (0, a._U)(er.L, b)?.worktreesRoot,
        [_, E] = (0, C.useState)(null)
      ;(x[0] !== b || x[1] !== y
        ? ((t = (e) => (0, er.Q)(y, b, w.Ugj.worktreeRoot, e)), (x[0] = b), (x[1] = y), (x[2] = t))
        : (t = x[2]),
        x[3] !== A || x[4] !== y
          ? ((r = () => {
              ;(E(null),
                y
                  .get(v.Id)
                  .success(
                    A.formatMessage({
                      id: "settings.git.worktreeRoot.save.success",
                      defaultMessage: "Saved worktree root",
                      description: "Toast shown when git worktree root is saved",
                    }),
                  ))
            }),
            (o = () => {
              y.get(v.Id).danger(
                A.formatMessage({
                  id: "settings.git.worktreeRoot.save.error",
                  defaultMessage: "Failed to save worktree root",
                  description: "Toast shown when git worktree root save fails",
                }),
                { errorAnalytics: { toastId: "settings.git.worktreeRoot.save.error" } },
              )
            }),
            (x[3] = A),
            (x[4] = y),
            (x[5] = r),
            (x[6] = o))
          : ((r = x[5]), (o = x[6])),
        x[7] !== t || x[8] !== r || x[9] !== o
          ? ((d = { mutationFn: t, onSuccess: r, onError: o }), (x[7] = t), (x[8] = r), (x[9] = o), (x[10] = d))
          : (d = x[10]))
      let R = (0, P.n)(d),
        T = I ?? "",
        F = _ ?? T,
        L = null != _ && _ !== T,
        H = R.isPending
      ;(x[11] !== N
        ? ((c = null == N ? null : D().posix),
          null != N && ((0, w.tIC)(N) || (0, w.zjD)(N)) && (c = D().win32),
          (x[11] = N),
          (x[12] = c))
        : (c = x[12]),
        x[13] !== c || x[14] !== H || x[15] !== L || x[16] !== R || x[17] !== F
          ? ((u = () => {
              if (!L || H) return
              let e = F.trim()
              ;("" === e || ((0, w.cxl)(e) && c?.isAbsolute(e))) && R.mutate(e)
            }),
            (x[13] = c),
            (x[14] = H),
            (x[15] = L),
            (x[16] = R),
            (x[17] = F),
            (x[18] = u))
          : (u = x[18]))
      let z = u,
        O = L && !H
      return (
        x[19] !== z
          ? ((f = (e) => {
              ;(e.preventDefault(), z())
            }),
            (x[19] = z),
            (x[20] = f))
          : (f = x[20]),
        x[21] !== O || x[22] !== f
          ? ((m = { accelerator: "CmdOrCtrl+S", enabled: O, onKeyDown: f }), (x[21] = O), (x[22] = f), (x[23] = m))
          : (m = x[23]),
        (0, ee.EE)(m),
        x[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(l.A, {
              id: "settings.git.worktreeRoot.label",
              defaultMessage: "Worktree root",
              description: "Label for git worktree root setting",
            })),
            (h = (0, s.jsx)(l.A, {
              id: "settings.git.worktreeRoot.defaultLocationHint",
              defaultMessage: "Leave blank to use the default location",
              description:
                "Short help beneath the Worktree root input in Worktrees settings. An empty input uses the app's default directory for managed Git worktrees.",
            })),
            (x[24] = h),
            (x[25] = p))
          : ((h = x[24]), (p = x[25])),
        x[26] !== S || x[27] !== z || x[28] !== H || x[29] !== T || x[30] !== F
          ? ((g = (0, s.jsx)(j.ic, {
              className: "max-sm:flex-col max-sm:items-stretch max-sm:gap-2",
              controlSizing: "grow",
              label: p,
              description: h,
              control: (e) =>
                (0, s.jsx)("div", {
                  className: "w-72 max-w-full max-sm:w-full",
                  children: (0, s.jsx)(J.pd, {
                    ...e,
                    value: F,
                    onChange: (e) => {
                      if (H) return
                      let t = e.target.value
                      E(t === T ? null : t)
                    },
                    onBlur: z,
                    placeholder: null == S ? void 0 : (0, w.YHz)(S),
                    disabled: H,
                  }),
                }),
            })),
            (x[26] = S),
            (x[27] = z),
            (x[28] = H),
            (x[29] = T),
            (x[30] = F),
            (x[31] = g))
          : (g = x[31]),
        g
      )
    }
    var en = r("slpy"),
      eo = r("JNtf"),
      ea = r("mUDD"),
      ei = r("F0xz")
    function el(e) {
      let t,
        r,
        o,
        d,
        u,
        f,
        m,
        h,
        p,
        g,
        x,
        b,
        A,
        M,
        N,
        S,
        I,
        _,
        E,
        R,
        T,
        D,
        L,
        H,
        z,
        O,
        W,
        B = (0, n.c)(67),
        { hostId: G } = e,
        Q = (0, a.gh)(k.u),
        U = (0, i.A)(),
        [q, K] = (0, C.useState)(null),
        X = (0, y.iK)(w.PHv.upstreamRefreshMode),
        V = (0, a._U)(er.L, G),
        $ = V?.autoCleanupEnabled ?? w.PHv.autoCleanupEnabled.default,
        Z = V?.keepCount ?? w.PHv.keepCount.default
      ;(B[0] !== Q ? ((t = (e) => (0, y.gc)(Q, w.PHv.upstreamRefreshMode, e)), (B[0] = Q), (B[1] = t)) : (t = B[1]),
        B[2] !== U || B[3] !== Q
          ? ((r = (e, t) => {
              switch (t) {
                case "best-effort":
                  return void Q.get(v.Id).success(
                    U.formatMessage({
                      id: "settings.worktrees.upstreamRefresh.save.enabled",
                      defaultMessage: "Upstream refresh enabled",
                      description: "Toast shown when upstream refresh before worktree creation is enabled",
                    }),
                  )
                case "never":
                  return void Q.get(v.Id).success(
                    U.formatMessage({
                      id: "settings.worktrees.upstreamRefresh.save.disabled",
                      defaultMessage: "Upstream refresh disabled",
                      description: "Toast shown when upstream refresh before worktree creation is disabled",
                    }),
                  )
              }
            }),
            (o = () => {
              Q.get(v.Id).danger(
                U.formatMessage({
                  id: "settings.worktrees.upstreamRefresh.save.error",
                  defaultMessage: "Failed to save upstream refresh setting",
                  description: "Toast shown when saving the upstream refresh setting fails",
                }),
                { errorAnalytics: { toastId: "settings.worktrees.upstreamRefresh.save.error" } },
              )
            }),
            (B[2] = U),
            (B[3] = Q),
            (B[4] = r),
            (B[5] = o))
          : ((r = B[4]), (o = B[5])),
        B[6] !== t || B[7] !== r || B[8] !== o
          ? ((d = { mutationFn: t, onSuccess: r, onError: o }), (B[6] = t), (B[7] = r), (B[8] = o), (B[9] = d))
          : (d = B[9]))
      let Y = (0, P.n)(d)
      ;(B[10] !== G || B[11] !== Q
        ? ((u = (e) => (0, er.Q)(Q, G, w.PHv.autoCleanupEnabled, e)), (B[10] = G), (B[11] = Q), (B[12] = u))
        : (u = B[12]),
        B[13] !== U || B[14] !== Q
          ? ((f = (e, t) => {
              t
                ? Q.get(v.Id).success(
                    U.formatMessage({
                      id: "settings.worktrees.autoCleanup.save.enabled",
                      defaultMessage: "Automatic deletion enabled",
                      description: "Toast shown when automatic worktree deletion is enabled",
                    }),
                  )
                : Q.get(v.Id).success(
                    U.formatMessage({
                      id: "settings.worktrees.autoCleanup.save.disabled",
                      defaultMessage: "Automatic deletion disabled",
                      description: "Toast shown when automatic worktree deletion is disabled",
                    }),
                  )
            }),
            (m = () => {
              Q.get(v.Id).danger(
                U.formatMessage({
                  id: "settings.worktrees.autoCleanup.save.error",
                  defaultMessage: "Failed to save automatic deletion setting",
                  description: "Toast shown when saving the automatic worktree deletion setting fails",
                }),
                { errorAnalytics: { toastId: "settings.worktrees.autoCleanup.save.error" } },
              )
            }),
            (B[13] = U),
            (B[14] = Q),
            (B[15] = f),
            (B[16] = m))
          : ((f = B[15]), (m = B[16])),
        B[17] !== u || B[18] !== f || B[19] !== m
          ? ((h = { mutationFn: u, onSuccess: f, onError: m }), (B[17] = u), (B[18] = f), (B[19] = m), (B[20] = h))
          : (h = B[20]))
      let ee = (0, P.n)(h)
      ;(B[21] !== G || B[22] !== Q
        ? ((p = (e) => (0, er.Q)(Q, G, w.PHv.keepCount, e)), (B[21] = G), (B[22] = Q), (B[23] = p))
        : (p = B[23]),
        B[24] !== U || B[25] !== Q
          ? ((g = () => {
              ;(K(null),
                Q.get(v.Id).success(
                  U.formatMessage({
                    id: "settings.worktrees.keepCount.save.success",
                    defaultMessage: "Saved auto-delete limit",
                    description: "Toast shown when the worktree auto-delete limit is saved",
                  }),
                ))
            }),
            (x = () => {
              Q.get(v.Id).danger(
                U.formatMessage({
                  id: "settings.worktrees.keepCount.save.error",
                  defaultMessage: "Failed to save auto-delete limit",
                  description: "Toast shown when saving the worktree auto-delete limit fails",
                }),
                { errorAnalytics: { toastId: "settings.worktrees.keepCount.save.error" } },
              )
            }),
            (B[24] = U),
            (B[25] = Q),
            (B[26] = g),
            (B[27] = x))
          : ((g = B[26]), (x = B[27])),
        B[28] !== g || B[29] !== x || B[30] !== p
          ? ((b = { mutationFn: p, onSuccess: g, onError: x }), (B[28] = g), (B[29] = x), (B[30] = p), (B[31] = b))
          : (b = B[31]))
      let et = (0, P.n)(b),
        es = String(Z),
        eo = q ?? es,
        ea = ee.isPending,
        el = et.isPending || ea || !$
      B[32] !== el || B[33] !== Z || B[34] !== q || B[35] !== et
        ? ((A = () => {
            if (el || null == q) return
            let e = q.trim(),
              t = Number(e)
            if (0 === e.length || !Number.isFinite(t)) return void K(null)
            let r = Math.max(1, Math.trunc(t))
            r === Z ? K(null) : et.mutate(r)
          }),
          (B[32] = el),
          (B[33] = Z),
          (B[34] = q),
          (B[35] = et),
          (B[36] = A))
        : (A = B[36])
      let ec = A
      return (
        B[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, s.jsx)(l.A, {
              id: "settings.worktrees.upstreamRefresh.label",
              defaultMessage: "Always fetch upstream before creating worktrees",
              description: "Label for the worktree upstream refresh toggle",
            })),
            (B[37] = M))
          : (M = B[37]),
        B[38] !== Y || B[39] !== X
          ? ((N = (0, s.jsx)(j.ic, {
              label: M,
              control: (e) =>
                (0, s.jsx)(ei.l, {
                  ...e,
                  checked: "best-effort" === X,
                  disabled: Y.isPending,
                  onChange: (e) => {
                    Y.mutate(e ? "best-effort" : "never")
                  },
                }),
            })),
            (B[38] = Y),
            (B[39] = X),
            (B[40] = N))
          : (N = B[40]),
        B[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, s.jsx)(l.A, {
              id: "settings.worktrees.autoCleanup.label",
              defaultMessage: "Automatically delete old worktrees",
              description: "Label for the automatic worktree deletion toggle",
            })),
            (B[41] = S))
          : (S = B[41]),
        B[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, s.jsx)(l.A, {
              id: "settings.worktrees.autoCleanup.snapshot",
              defaultMessage: "Saves a recovery snapshot first",
              description:
                "Short help under the automatic worktree deletion toggle. The adjacent info button explains which files and commits the snapshot preserves.",
            })),
            (B[42] = I))
          : (I = B[42]),
        B[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, s.jsx)(l.A, {
              id: "settings.worktrees.autoCleanup.snapshotDetails",
              defaultMessage:
                "Saves local commits and current file changes, including untracked files Git doesn’t ignore, in the original repository so you can restore the worktree",
              description:
                "Help tooltip for automatic worktree cleanup. The Git snapshot saves local commit history and the current contents of tracked and non-ignored untracked files in the original repository. It does not preserve the Git staging state separately.",
            })),
            (B[43] = _))
          : (_ = B[43]),
        B[44] !== U
          ? ((E = U.formatMessage({
              id: "settings.worktrees.autoCleanup.snapshotInfoLabel",
              defaultMessage: "About recovery snapshots",
              description: "Accessible label for the info button that explains automatic worktree recovery snapshots",
            })),
            (B[44] = U),
            (B[45] = E))
          : (E = B[45]),
        B[46] === Symbol.for("react.memo_cache_sentinel") ? ((R = (0, s.jsx)(F.ehD, {})), (B[46] = R)) : (R = B[46]),
        B[47] !== E
          ? ((T = (0, s.jsxs)("span", {
              className: "inline-flex items-center gap-1.5",
              children: [
                I,
                (0, s.jsx)(en.m, {
                  preventDismissOnFastClick: !0,
                  content: _,
                  children: (0, s.jsx)(c.$, { "aria-label": E, color: "ghostTertiary", size: "inline", children: R }),
                }),
              ],
            })),
            (B[47] = E),
            (B[48] = T))
          : (T = B[48]),
        B[49] !== $ || B[50] !== ea || B[51] !== ee
          ? ((D = (e) =>
              (0, s.jsx)(ed, {
                ...e,
                checked: $,
                disabled: ea,
                onChange: (e) => {
                  ;(e || K(null), ee.mutate(e))
                },
              })),
            (B[49] = $),
            (B[50] = ea),
            (B[51] = ee),
            (B[52] = D))
          : (D = B[52]),
        B[53] !== T || B[54] !== D
          ? ((L = (0, s.jsx)(j.ic, { label: S, description: T, control: D })), (B[53] = T), (B[54] = D), (B[55] = L))
          : (L = B[55]),
        B[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, s.jsx)(l.A, {
              id: "settings.worktrees.keepCount.retainLabel",
              defaultMessage: "Worktrees to keep",
              description:
                "Label for the numeric Worktrees setting that controls how many managed worktrees to keep before automatic deletion",
            })),
            (z = (0, s.jsx)(l.A, {
              id: "settings.worktrees.keepCount.autoCleanupHint",
              defaultMessage: "Older worktrees are deleted automatically. Pinned or active chats keep theirs.",
              description:
                "Help for the worktree retention count. Automatic cleanup keeps this many eligible worktrees and skips worktrees used by pinned chats or chats currently in progress.",
            })),
            (B[56] = H),
            (B[57] = z))
          : ((H = B[56]), (z = B[57])),
        B[58] !== ec || B[59] !== el || B[60] !== es || B[61] !== eo
          ? ((O = (0, s.jsx)(j.ic, {
              label: H,
              description: z,
              control: (e) =>
                (0, s.jsx)("div", {
                  className: "w-24",
                  children: (0, s.jsx)(J.pd, {
                    ...e,
                    variant: "compact",
                    value: eo,
                    onChange: (e) => {
                      if (el) return
                      let t = e.target.value
                      K(t === es ? null : t)
                    },
                    onBlur: ec,
                    onKeyDown: (e) => {
                      "Enter" === e.key && (e.preventDefault(), ec())
                    },
                    type: "number",
                    inputMode: "numeric",
                    min: 1,
                    step: 1,
                    disabled: el,
                  }),
                }),
            })),
            (B[58] = ec),
            (B[59] = el),
            (B[60] = es),
            (B[61] = eo),
            (B[62] = O))
          : (O = B[62]),
        B[63] !== N || B[64] !== L || B[65] !== O
          ? ((W = (0, s.jsxs)(s.Fragment, { children: [N, L, O] })), (B[63] = N), (B[64] = L), (B[65] = O), (B[66] = W))
          : (W = B[66]),
        W
      )
    }
    function ed(e) {
      let t,
        r,
        o,
        a,
        i,
        d,
        u,
        f,
        m,
        h,
        p,
        g,
        x,
        w = (0, n.c)(27)
      w[0] !== e
        ? (({ checked: t, onChange: r, ...o } = e), (w[0] = e), (w[1] = t), (w[2] = r), (w[3] = o))
        : ((t = w[1]), (r = w[2]), (o = w[3]))
      let [b, v] = (0, C.useState)(!1)
      w[4] !== t ? ((a = (e) => v(e && t)), (w[4] = t), (w[5] = a)) : (a = w[5])
      let k = t ? "dialog" : void 0,
        y = t ? b : void 0
      return (
        w[6] !== r
          ? ((i = (e) => {
              e && r(!0)
            }),
            (w[6] = r),
            (w[7] = i))
          : (i = w[7]),
        w[8] !== t || w[9] !== k || w[10] !== y || w[11] !== i || w[12] !== o
          ? ((d = (0, s.jsx)(ei.l, { ...o, "aria-haspopup": k, "aria-expanded": y, checked: t, onChange: i })),
            (w[8] = t),
            (w[9] = k),
            (w[10] = y),
            (w[11] = i),
            (w[12] = o),
            (w[13] = d))
          : (d = w[13]),
        w[14] !== r
          ? ((u = (e) => {
              ;(e.preventDefault(), v(!1), r(!1))
            }),
            (w[14] = r),
            (w[15] = u))
          : (u = w[15]),
        w[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(eo.L3, {
              children: (0, s.jsx)(l.A, {
                id: "settings.worktrees.autoCleanup.confirm.title",
                defaultMessage: "Turn off automatic worktree deletion?",
                description:
                  "Title of the confirmation shown when switching off automatic deletion of old Git worktrees",
              }),
            })),
            (w[16] = f))
          : (f = w[16]),
        w[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(ea.c7, {
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: f,
              subtitle: (0, s.jsx)(eo.rr, {
                children: (0, s.jsx)(l.A, {
                  id: "settings.worktrees.autoCleanup.confirm.body",
                  defaultMessage: "Old worktrees will stay on disk until you delete them",
                  description:
                    "Explains that turning off automatic cleanup leaves old worktrees on disk for the user to delete manually",
                }),
              }),
            })),
            (w[17] = m))
          : (m = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, s.jsx)(c.$, {
              color: "secondary",
              type: "button",
              onClick: () => v(!1),
              children: (0, s.jsx)(l.A, {
                id: "settings.worktrees.autoCleanup.confirm.cancel",
                defaultMessage: "Cancel",
                description: "Dismisses the confirmation and keeps automatic deletion of old Git worktrees enabled",
              }),
            })),
            (w[18] = h))
          : (h = w[18]),
        w[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(ea.OO, {
              children: (0, s.jsxs)(ea.Es, {
                children: [
                  h,
                  (0, s.jsx)(c.$, {
                    color: "primary",
                    type: "submit",
                    children: (0, s.jsx)(l.A, {
                      id: "settings.worktrees.autoCleanup.confirm.confirm",
                      defaultMessage: "Turn off",
                      description:
                        "Confirms turning off automatic deletion of old Git worktrees. Existing files stay on disk.",
                    }),
                  }),
                ],
              }),
            })),
            (w[19] = p))
          : (p = w[19]),
        w[20] !== u
          ? ((g = (0, s.jsxs)(ea.R4, { as: "form", size: "viewport", onSubmit: u, children: [m, p] })),
            (w[20] = u),
            (w[21] = g))
          : (g = w[21]),
        w[22] !== b || w[23] !== a || w[24] !== g || w[25] !== d
          ? ((x = (0, s.jsx)(eo.lG, {
              open: b,
              showDialogClose: !1,
              size: "compact",
              onOpenChange: a,
              triggerContent: d,
              children: g,
            })),
            (w[22] = b),
            (w[23] = a),
            (w[24] = g),
            (w[25] = d),
            (w[26] = x))
          : (x = w[26]),
        x
      )
    }
    var ec = r("Dgwo"),
      eu = r("ay73"),
      ef = r("q77y"),
      em = r("oKj2"),
      eh = r("WFY2"),
      ep = r("dg06"),
      eg = r("T0Rc"),
      ex = r("CpsU"),
      ew = r.n(ex),
      eb = r("rljs"),
      ev = r("CfsC"),
      ek = r("D6V5"),
      ey = r("AnoK"),
      ej = r("SPnB"),
      eA = r("rvFo")
    function eC(e, t, r) {
      let s,
        o,
        i,
        l,
        d,
        c,
        u,
        f = (0, n.c)(31),
        m = (0, a.gh)(k.u),
        h = (0, a._U)(ev.B, e),
        p = (0, a._U)(eb.y2, e),
        g = (0, a.Ul)(ej.chatGptAuthenticatedAccountId$),
        x = (0, a.Ul)(ej.chatGptAuthenticatedUserId$)
      f[0] !== e || f[1] !== h
        ? ((s = !(0, w.ZJQ)(e) && (0, w.JFB)(h, "threadAttachmentOwners")), (f[0] = e), (f[1] = h), (f[2] = s))
        : (s = f[2])
      let b = s
      f[3] !== g || f[4] !== e || f[5] !== t || f[6] !== x || f[7] !== h
        ? ((i = [...(o = ["settings-worktree-conversations", e, t]), g, x, h]),
          (f[3] = g),
          (f[4] = e),
          (f[5] = t),
          (f[6] = x),
          (f[7] = h),
          (f[8] = o),
          (f[9] = i))
        : ((o = f[8]), (i = f[9]))
      let v = i
      ;(f[10] !== o || f[11] !== v || f[12] !== b || f[13] !== r
        ? ((l = b ? [...v, r] : o), (f[10] = o), (f[11] = v), (f[12] = b), (f[13] = r), (f[14] = l))
        : (l = f[14]),
        f[15] !== v || f[16] !== b || f[17] !== r
          ? ((d = (e, t) => {
              let s = t?.queryKey,
                n = s?.[v.length]
              return b &&
                null != s &&
                v.every((e, t) => e === s[t]) &&
                Array.isArray(n) &&
                r.every((e) => n.includes(e))
                ? e
                : void 0
            }),
            (f[15] = v),
            (f[16] = b),
            (f[17] = r),
            (f[18] = d))
          : (d = f[18]))
      let y = r.length > 0 && (!b || "connected" === p)
      f[19] !== e || f[20] !== t || f[21] !== b || f[22] !== m || f[23] !== r
        ? ((c = async (s) => {
            let { signal: n } = s,
              o = await (async function (e, t, r) {
                let s = r ? [w.muO, w.CbT] : [w.muO],
                  [n, o] = await Promise.all([
                    Promise.all(
                      s.map((r) =>
                        (async function (e, t, r) {
                          let s = [],
                            n = new Set(),
                            o = null
                          do {
                            let a = await (0, ec.V)(e, t).sendRequest(
                              "thread/list",
                              {
                                archived: !1,
                                cursor: o,
                                limit: 100,
                                modelProviders: null,
                                sortKey: "updated_at",
                                sourceKinds: r,
                                useStateDbOnly: !0,
                              },
                              { priority: "background", source: "thread_list" },
                            )
                            s.push(...a.data)
                            let i = a.nextCursor
                            if (null != i && n.has(i)) throw Error("App Server repeated a worktree conversation cursor")
                            ;(null != i && n.add(i), (o = i))
                          } while (null != o)
                          return s
                        })(e, t, r),
                      ),
                    ),
                    eM(e, t),
                  ]),
                  a = new Set(o.map((e) => e.id)),
                  i = new Map(
                    n
                      .flat()
                      .filter(ey.l)
                      .map((e) => [e.id, e]),
                  )
                for (let e of o) i.set(e.id, e)
                return Array.from(i.values())
                  .sort((e, t) => (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt))
                  .map((e) => ({
                    id: (0, w.JXB)(e.id),
                    cwd: e.cwd,
                    isSubagent: (0, ek.I3)(e),
                    isPinned: a.has(e.id),
                    recencyAt: e.recencyAt ?? e.updatedAt,
                    title: e.name?.trim() || e.preview || null,
                  }))
              })(m, e, t)
            return b
              ? (async function (e, t, r, s, n) {
                  let o = (0, ec.V)(e, t),
                    a = new Map()
                  for (let e of ew()([...new Set(r)], 10))
                    (n.throwIfAborted(),
                      await Promise.all(
                        e.map(async (e) => {
                          for (let t of await (0, w.bGJ)({
                            worktreeRoot: e,
                            listOwners: (e) => (n.throwIfAborted(), o.sendRequest("thread/attachmentOwner/list", e)),
                          })) {
                            let r = a.get(t.threadId) ?? []
                            ;(r.push(e), a.set(t.threadId, r))
                          }
                        }),
                      ))
                  let i = new Map(s.map((e) => [e.id, { ...e, attachedWorktreeRoots: a.get(e.id) ?? [] }])),
                    l = [...a.keys()].filter((e) => !i.has((0, w.JXB)(e)))
                  for (let e of ew()(l, 10))
                    (n.throwIfAborted(),
                      await Promise.all(
                        e.map(async (e) => {
                          let { thread: t } = await o.sendRequest("thread/read", { threadId: e, includeTurns: !1 })
                          i.set((0, w.JXB)(e), {
                            id: (0, w.JXB)(e),
                            cwd: t.cwd,
                            attachedWorktreeRoots: a.get(e) ?? [],
                            isSubagent: (0, ek.I3)(t),
                            isPinned: !1,
                            recencyAt: t.recencyAt ?? t.updatedAt,
                            title: t.name?.trim() || t.preview || null,
                          })
                        }),
                      ))
                  return (n.throwIfAborted(), [...i.values()].sort((e, t) => (t.recencyAt ?? 0) - (e.recencyAt ?? 0)))
                })(m, e, r, o, n)
              : o
          }),
          (f[19] = e),
          (f[20] = t),
          (f[21] = b),
          (f[22] = m),
          (f[23] = r),
          (f[24] = c))
        : (c = f[24])
      let j = b ? 0 : eA.D.ONE_MINUTE
      return (
        f[25] !== l || f[26] !== d || f[27] !== y || f[28] !== c || f[29] !== j
          ? ((u = {
              queryKey: l,
              placeholderData: d,
              enabled: y,
              queryFn: c,
              refetchInterval: eA.D.ONE_MINUTE,
              retry: !1,
              staleTime: j,
            }),
            (f[25] = l),
            (f[26] = d),
            (f[27] = y),
            (f[28] = c),
            (f[29] = j),
            (f[30] = u))
          : (u = f[30]),
        (0, eg.I)(u)
      )
    }
    async function eM(e, t) {
      if (O.appServices?.pinnedThreads == null) throw Error("Pinned thread service is unavailable")
      let { threadIds: r } = await (0, ef.P)(
        O.appServices.pinnedThreads.list({ hostId: t, useAppServerPins: e.get(eu.XF) }),
      )
      return Promise.all(
        r.map(async (r) => {
          let { thread: s } = await (0, ec.V)(e, t).sendRequest("thread/read", { threadId: r, includeTurns: !1 })
          return s
        }),
      )
    }
    let eN = (0, a.bD)(k.u, (e) => !1)
    async function eS(e, t) {
      try {
        await (0, y.gc)(e, w.PHv.confirmBeforeDelete, t)
      } catch {
        e.get(v.Id).danger(
          (0, s.jsx)(l.A, {
            id: "settings.worktrees.delete.preferenceError",
            defaultMessage: "Couldn’t save your worktree deletion preference",
            description:
              "Error when saving whether to ask before manually deleting a worktree. The previous preference is restored.",
          }),
          { errorAnalytics: { toastId: "settings.worktrees.delete.preferenceError" } },
        )
      }
    }
    function eI() {
      let e,
        t,
        r = (0, n.c)(4),
        o = (0, a.gh)(k.u),
        i = (0, y.iK)(w.PHv.confirmBeforeDelete)
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.worktrees.delete.askBeforeDeleting",
              defaultMessage: "Ask before deleting worktrees",
              description:
                "Settings switch that shows a confirmation before manual worktree deletion. Does not affect automatic cleanup.",
            })),
            (r[0] = e))
          : (e = r[0]),
        r[1] !== i || r[2] !== o
          ? ((t = (0, s.jsx)(j.ic, {
              label: e,
              control: (e) => (0, s.jsx)(ei.l, { ...e, checked: i, onChange: (e) => void eS(o, e) }),
            })),
            (r[1] = i),
            (r[2] = o),
            (r[3] = t))
          : (t = r[3]),
        t
      )
    }
    var e_ = r("BSnr"),
      eP = r("ZEx5")
    function eE(e) {
      let t,
        r,
        o,
        i,
        d,
        c,
        u = (0, n.c)(13),
        { hostId: f } = e,
        m = (0, et.Zj)(w.ouF),
        h = (0, a._U)(b.r2, f)
      return null == (0, a._U)(er.L, f)
        ? null
        : (u[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(e_.X.Header, {
                title: (0, s.jsx)("h2", {
                  children: (0, s.jsx)(l.A, {
                    id: "settings.worktrees.preferences.title",
                    defaultMessage: "Creation and cleanup",
                    description:
                      "Heading for settings that control where Git worktrees are created, fetching branch updates, and automatic deletion",
                  }),
                }),
              })),
              (u[0] = t))
            : (t = u[0]),
          u[1] !== f || u[2] !== m || u[3] !== h
            ? ((r = h && (m ? (0, s.jsx)(Z, { hostId: f }) : (0, s.jsx)(U, { hostId: f, savedOnly: !0 }, f))),
              (u[1] = f),
              (u[2] = m),
              (u[3] = h),
              (u[4] = r))
            : (r = u[4]),
          u[5] !== f
            ? ((o = (0, s.jsx)(es, { hostId: f })),
              (i = (0, s.jsx)(el, { hostId: f })),
              (u[5] = f),
              (u[6] = o),
              (u[7] = i))
            : ((o = u[6]), (i = u[7])),
          u[8] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, s.jsx)(eI, {})), (u[8] = d)) : (d = u[8]),
          u[9] !== r || u[10] !== o || u[11] !== i
            ? ((c = (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)(e_.X, {
                  children: [t, (0, s.jsx)(e_.X.Content, { children: (0, s.jsxs)(eP.t, { children: [r, o, i, d] }) })],
                }),
              })),
              (u[9] = r),
              (u[10] = o),
              (u[11] = i),
              (u[12] = c))
            : (c = u[12]),
          c)
    }
    var eR = r("fnPc"),
      eT = r("odCE"),
      eD = r("kfGJ"),
      eF = r("pAJp")
    function eL(e, t) {
      let r = (0, Q.JH)(e).replace(/\/+$/, ""),
        s = (0, Q.JH)(t).replace(/\/+$/, "")
      return r === s || r.startsWith(`${s}/`)
    }
    var eH = r("psi4"),
      ez = r("u4MG"),
      eO = r("ihT1"),
      eW = r("Xpvt"),
      eB = r("OReh"),
      eG = r("iQgv")
    function eQ(e) {
      let t,
        r,
        o,
        d,
        u,
        f,
        m,
        h,
        p,
        g = (0, n.c)(37),
        { hostId: x, worktree: b, disabled: v, isDeleting: j, pinnedHint: A, onConfirm: M } = e,
        N = (0, a.gh)(k.u),
        S = (0, i.A)(),
        I = (0, y.iK)(w.PHv.confirmBeforeDelete),
        [_, P] = (0, C.useState)(!1),
        E = (0, C.useId)(),
        R = (0, C.useRef)(null),
        T = (0, C.useRef)(null)
      g[0] !== S
        ? ((t = S.formatMessage({
            id: "settings.worktrees.row.delete",
            defaultMessage: "Delete",
            description: "Delete button label for a worktree row",
          })),
          (g[0] = S),
          (g[1] = t))
        : (t = g[1])
      let D = t
      g[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, s.jsx)(l.A, {
            id: "settings.worktrees.delete.confirmAction",
            defaultMessage: "Delete worktree",
            description:
              "Tooltip for the worktree delete button and label for confirming deletion of the named worktree and archiving its workspace chats",
          })),
          (g[2] = r))
        : (r = g[2])
      let L = r
      g[3] !== v || g[4] !== A
        ? ((o =
            A ??
            (v
              ? (0, s.jsx)(l.A, {
                  id: "settings.worktrees.row.deleteLoadingChats",
                  defaultMessage: "Waiting for linked chats to load",
                  description:
                    "Tooltip for a disabled worktree delete button while Codex checks whether any chat that uses the worktree is pinned",
                })
              : L)),
          (g[3] = v),
          (g[4] = A),
          (g[5] = o))
        : (o = g[5])
      let H = v || void 0,
        z = I ? "dialog" : void 0,
        O = v ? "ghostActive" : "ghostDanger"
      return (
        g[6] !== I || g[7] !== v || g[8] !== j || g[9] !== M
          ? ((d = (e) => {
              v ||
                j ||
                (I ? ((T.current = e.currentTarget), P(!0)) : (eq(e.currentTarget)?.focus({ preventScroll: !0 }), M()))
            }),
            (g[6] = I),
            (g[7] = v),
            (g[8] = j),
            (g[9] = M),
            (g[10] = d))
          : (d = g[10]),
        g[11] !== j ? ((u = j ? null : (0, s.jsx)(F.cSG, {})), (g[11] = j), (g[12] = u)) : (u = g[12]),
        g[13] !== D || g[14] !== j || g[15] !== H || g[16] !== z || g[17] !== O || g[18] !== d || g[19] !== u
          ? ((f = (0, s.jsx)(c.$, {
              "aria-disabled": H,
              "aria-haspopup": z,
              "aria-label": D,
              color: O,
              loading: j,
              onClick: d,
              size: "toolbar",
              uniform: !0,
              children: u,
            })),
            (g[13] = D),
            (g[14] = j),
            (g[15] = H),
            (g[16] = z),
            (g[17] = O),
            (g[18] = d),
            (g[19] = u),
            (g[20] = f))
          : (f = g[20]),
        g[21] !== o || g[22] !== f
          ? ((m = (0, s.jsx)(en.m, { content: o, children: f })), (g[21] = o), (g[22] = f), (g[23] = m))
          : (m = g[23]),
        g[24] !== E ||
        g[25] !== v ||
        g[26] !== x ||
        g[27] !== j ||
        g[28] !== M ||
        g[29] !== _ ||
        g[30] !== A ||
        g[31] !== N ||
        g[32] !== b
          ? ((h =
              _ &&
              (0, s.jsx)(eo.lG, {
                open: !0,
                onOpenChange: P,
                contentProps: {
                  onOpenAutoFocus: (e) => {
                    ;(e.preventDefault(), R.current?.focus({ preventScroll: !0 }))
                  },
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), T.current?.focus({ preventScroll: !0 }))
                  },
                },
                showDialogClose: !1,
                size: "compact",
                children: (0, s.jsxs)(ea.R4, {
                  as: "form",
                  size: "viewport",
                  onSubmit: (e) => {
                    ;(e.preventDefault(),
                      v ||
                        j ||
                        ((T.current = eq(T.current)),
                        new FormData(e.currentTarget).has("dontAskAgain") && eS(N, !1),
                        P(!1),
                        M()))
                  },
                  children: [
                    (0, s.jsx)(ea.c7, {
                      subtitleSize: "sm",
                      subtitleTone: "secondary",
                      title: (0, s.jsx)(eo.L3, {
                        children: (0, s.jsx)(l.A, {
                          id: "settings.worktrees.delete.confirmTitle",
                          defaultMessage: "Delete this worktree?",
                          description:
                            "Title of the confirmation dialog for removing a Git worktree and archiving chats that use it as their workspace",
                        }),
                      }),
                      subtitle: (0, s.jsxs)(eo.rr, {
                        className: "flex flex-col gap-3",
                        children: [
                          (0, s.jsx)("span", {
                            "aria-live": "polite",
                            children: (0, s.jsx)(eU, { hostId: x, worktree: b }),
                          }),
                          (0, s.jsx)("code", {
                            className: "font-mono text-xs wrap-anywhere select-text",
                            dir: "ltr",
                            children: b,
                          }),
                          A,
                        ],
                      }),
                    }),
                    (0, s.jsx)(ea.OO, {
                      children: (0, s.jsxs)(ea.fh, {
                        children: [
                          (0, s.jsx)(eW.S, { id: E, name: "dontAskAgain" }),
                          (0, s.jsx)("label", {
                            className: "cursor-interaction text-sm text-secondary",
                            htmlFor: E,
                            children: (0, s.jsx)(l.A, {
                              id: "settings.worktrees.delete.dontAskAgain",
                              defaultMessage: "Don’t ask again",
                              description:
                                "Checkbox in the worktree deletion dialog. If the user confirms deletion, future manual worktree deletions skip this dialog until the preference is changed in Worktrees settings.",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(ea.OO, {
                      children: (0, s.jsxs)(ea.Es, {
                        children: [
                          (0, s.jsx)(c.$, {
                            ref: R,
                            color: "secondary",
                            onClick: () => P(!1),
                            type: "button",
                            children: (0, s.jsx)(l.A, {
                              id: "settings.worktrees.delete.cancel",
                              defaultMessage: "Cancel",
                              description:
                                "Dismisses the worktree deletion confirmation without changing the worktree or its chats",
                            }),
                          }),
                          (0, s.jsx)(c.$, { color: "danger", disabled: v || j, type: "submit", children: L }),
                        ],
                      }),
                    }),
                  ],
                }),
              })),
            (g[24] = E),
            (g[25] = v),
            (g[26] = x),
            (g[27] = j),
            (g[28] = M),
            (g[29] = _),
            (g[30] = A),
            (g[31] = N),
            (g[32] = b),
            (g[33] = h))
          : (h = g[33]),
        g[34] !== m || g[35] !== h
          ? ((p = (0, s.jsxs)(s.Fragment, { children: [m, h] })), (g[34] = m), (g[35] = h), (g[36] = p))
          : (p = g[36]),
        p
      )
    }
    function eU(e) {
      let t,
        r,
        o,
        a,
        i = (0, n.c)(12),
        { hostId: d, worktree: c } = e,
        u = (0, eD.Qz)(d),
        f = u.id === d
      ;(i[0] !== d || i[1] !== c
        ? ((t = ["worktree-delete-warning", d, c]), (i[0] = d), (i[1] = c), (i[2] = t))
        : (t = i[2]),
        i[3] !== u || i[4] !== c
          ? ((r = async (e) => {
              let { signal: t } = e
              return (
                await (0, eB.bE)({
                  clearUntrackedPathsCache: !1,
                  hostConfig: u,
                  operationSource: "worktree_settings_delete",
                  root: (0, w.PUz)(c),
                }),
                t.throwIfAborted(),
                (0, eG.V)("git").request({
                  method: "status-summary",
                  params: {
                    cwd: (0, w.DIv)(c),
                    hostConfig: u,
                    includeUntrackedFiles: !1,
                    operationSource: "worktree_settings_delete",
                  },
                  signal: t,
                })
              )
            }),
            (i[3] = u),
            (i[4] = c),
            (i[5] = r))
          : (r = i[5]),
        i[6] !== f || i[7] !== t || i[8] !== r
          ? ((o = {
              queryKey: t,
              enabled: f,
              queryFn: r,
              gcTime: 0,
              refetchOnMount: "always",
              refetchOnWindowFocus: "always",
              retry: !1,
              networkMode: "always",
              staleTime: eA.D.INFINITE,
            }),
            (i[6] = f),
            (i[7] = t),
            (i[8] = r),
            (i[9] = o))
          : (o = i[9]))
      let { data: m, isFetchedAfterMount: h, isFetching: p, isSuccess: g } = (0, eg.I)(o)
      if (f && h && !p && g && m?.type === "success" && (m.stagedCount > 0 || m.unstagedCount > 0)) {
        let e
        return (
          i[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(l.A, {
                id: "settings.worktrees.delete.confirmWithChanges",
                defaultMessage:
                  "This worktree has uncommitted changes that you may lose. Deleting it removes its files and archives chats that use it as their workspace.",
                description:
                  "Warns that the selected worktree has staged or unstaged edits when confirming its deletion",
              })),
              (i[10] = e))
            : (e = i[10]),
          e
        )
      }
      return (
        i[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(l.A, {
              id: "settings.worktrees.delete.confirmBody",
              defaultMessage:
                "This will delete the worktree’s files and archive chats that use it as their workspace. You may lose uncommitted changes.",
              description:
                "Warns that deleting the worktree archives chats whose working directory is inside it and may permanently remove uncommitted files",
            })),
            (i[11] = a))
          : (a = i[11]),
        a
      )
    }
    function eq(e) {
      let t = e?.closest("#worktree-inventory"),
        r = e?.closest("[data-worktree-row]")
      if (!t || !r) return null
      let s = Array.from(t.querySelectorAll("[data-worktree-row]")),
        n = s.indexOf(r)
      return s[n + 1] ?? s[n - 1] ?? t.querySelector("[data-worktree-inventory-heading]")
    }
    var eK = r("L2Eu"),
      eX = r("Bc5r")
    function eV(e) {
      let t,
        r = (0, n.c)(23),
        { hostId: o, sourceConversation: a, visibleConversations: d, worktreeLabel: u, pinnedHintId: f } = e,
        m = (0, i.A)(),
        h = (0, eX.M0)()
      if (r[0] !== o || r[1] !== m || r[2] !== h || r[3] !== f || r[4] !== a || r[5] !== d || r[6] !== u) {
        let e, n, i, p
        r[8] !== a?.id ? ((e = (e) => e.id !== a?.id), (r[8] = a?.id), (r[9] = e)) : (e = r[9])
        let g = d.filter(e)
        r[10] !== m
          ? ((n = m.formatMessage({
              id: "settings.worktrees.conversation.untitled",
              defaultMessage: "Untitled conversation",
              description: "Fallback title for a conversation",
            })),
            (r[10] = m),
            (r[11] = n))
          : (n = r[11])
        let x = n
        r[12] !== a?.title || r[13] !== x
          ? ((i = (0, eK.SX)(a?.title ?? "") || x), (r[12] = a?.title), (r[13] = x), (r[14] = i))
          : (i = r[14])
        let w = i,
          b = a
            ? m.formatMessage(
                {
                  id: "settings.worktrees.row.moreChats",
                  defaultMessage: "{count, plural, one {# more chat} other {# more chats}}",
                  description:
                    "Menu button beside the primary chat in a worktree row. Count is the number of additional linked chats that can be opened from the menu.",
                },
                { count: g.length },
              )
            : m.formatMessage(
                {
                  id: "settings.worktrees.row.linkedChats",
                  defaultMessage: "{count, plural, one {# linked chat} other {# linked chats}}",
                  description:
                    "Menu button when a worktree row shows a checkout name instead of a chat title. Count is the number of linked chats available to open from the menu.",
                },
                { count: g.length },
              )
        ;(r[15] !== o || r[16] !== m || r[17] !== h || r[18] !== f || r[19] !== a || r[20] !== w || r[21] !== u
          ? ((p = a
              ? (0, s.jsx)(c.$, {
                  "aria-describedby": f,
                  allowShrink: !0,
                  className: "justify-start text-start hover:underline",
                  color: "ghostMuted",
                  onClick: () => h(a.id, o),
                  size: "inline",
                  title: m.formatMessage({
                    id: "settings.worktrees.row.openChat",
                    defaultMessage: "Open chat",
                    description:
                      "Tooltip for the chat title in Worktrees settings. Opens the chat that uses this worktree as its workspace.",
                  }),
                  children: (0, s.jsx)("span", { className: "min-w-0 truncate", title: w, children: w }),
                })
              : (0, s.jsx)("span", { className: "min-w-0 truncate select-none", children: u })),
            (r[15] = o),
            (r[16] = m),
            (r[17] = h),
            (r[18] = f),
            (r[19] = a),
            (r[20] = w),
            (r[21] = u),
            (r[22] = p))
          : (p = r[22]),
          (t = (0, s.jsxs)("div", {
            className: "@container flex min-w-0 items-center gap-2",
            children: [
              p,
              g.length > 0
                ? (0, s.jsx)(M.Ab, {
                    align: "start",
                    contentWidth: "menu",
                    triggerButton: (0, s.jsxs)(c.$, {
                      "aria-label": b,
                      className: "shrink-0 text-xs text-secondary",
                      color: "ghostMuted",
                      size: "inline",
                      title: b,
                      children: [
                        (0, s.jsx)("span", { className: "hidden @xs:inline", children: b }),
                        (0, s.jsx)("span", {
                          "aria-hidden": !0,
                          className: "@xs:hidden",
                          children: m.formatNumber(g.length, { signDisplay: a ? "always" : "auto" }),
                        }),
                        (0, s.jsx)(F.Aq_, {}),
                      ],
                    }),
                    children: g.map((e) =>
                      (0, s.jsx)(
                        M.ms.Item,
                        {
                          onSelect: () => h(e.id, o),
                          rightText: e.isPinned
                            ? (0, s.jsx)(l.A, {
                                id: "settings.worktrees.conversation.pinned",
                                defaultMessage: "Pinned",
                                description: "Label beside a pinned chat in a worktree’s linked chats menu",
                              })
                            : void 0,
                          children: (0, eK.SX)(e.title ?? "") || x,
                        },
                        e.id,
                      ),
                    ),
                  })
                : null,
            ],
          })),
          (r[0] = o),
          (r[1] = m),
          (r[2] = h),
          (r[3] = f),
          (r[4] = a),
          (r[5] = d),
          (r[6] = u),
          (r[7] = t))
      } else t = r[7]
      return t
    }
    function e$(e) {
      let t,
        r,
        o,
        d,
        u,
        f,
        m,
        h,
        p,
        x,
        b,
        y,
        A,
        M,
        N,
        S,
        I,
        _ = (0, n.c)(62),
        {
          worktree: P,
          repositoryName: E,
          nativeConversations: R,
          visibleConversations: T,
          hostId: D,
          isConversationsLoading: L,
        } = e,
        H = (0, a.gh)(k.u),
        z = (0, i.A)(),
        O = (0, C.useId)()
      _[0] !== D || _[1] !== P.dir
        ? ((t = { hostId: D, worktree: P.dir }), (_[0] = D), (_[1] = P.dir), (_[2] = t))
        : (t = _[2])
      let W = t,
        B = (0, a._U)(eN, W)
      _[3] !== R ? ((r = R.find(eJ)), (_[3] = R), (_[4] = r)) : (r = _[4])
      let G = r
      _[5] !== R ? ((o = R.some(eZ)), (_[5] = R), (_[6] = o)) : (o = _[6])
      let U = o,
        q = (0, eD.Qz)(D),
        K = (0, a.Ul)(g.Gm)?.[G?.id ?? ""]
      _[7] !== q.kind || _[8] !== K
        ? ((d = "local" === q.kind && !(K?.projectKind === "local" && (0, ez.w7)(K.projectId))),
          (_[7] = q.kind),
          (_[8] = K),
          (_[9] = d))
        : (d = _[9])
      let X = d
      _[10] !== z
        ? ((u = z.formatMessage({
            id: "settings.worktrees.row.newChat",
            defaultMessage: "New chat in this worktree",
            description:
              "Button to start a fresh chat in this existing worktree without carrying over conversation history",
          })),
          (_[10] = z),
          (_[11] = u))
        : (u = _[11])
      let V = u
      _[12] !== U || _[13] !== z
        ? ((f = U
            ? z.formatMessage({
                id: "settings.worktrees.row.pinned",
                defaultMessage: "A pinned chat keeps this worktree from being deleted",
                description:
                  "Tooltip and accessible description for the pin on a worktree row. Deletion is disabled while a chat that uses this worktree as its workspace is pinned.",
              })
            : void 0),
          (_[12] = U),
          (_[13] = z),
          (_[14] = f))
        : (f = _[14])
      let $ = f,
        Z = L || void 0,
        J = P.dir
      _[15] !== E || _[16] !== P.dir
        ? ((m = (function (e, t) {
            let r = (0, Q.AY)(e),
              [s, n] = r.split("/")
            if (null != n && null != t) {
              if (s === t) return n
              if (n === t) return s
            }
            return r || e
          })(P.dir, E)),
          (_[15] = E),
          (_[16] = P.dir),
          (_[17] = m))
        : (m = _[17])
      let Y = $ ? O : void 0
      ;(_[18] !== D || _[19] !== G || _[20] !== Y || _[21] !== m || _[22] !== T
        ? ((h = (0, s.jsx)(eV, {
            hostId: D,
            sourceConversation: G,
            visibleConversations: T,
            worktreeLabel: m,
            pinnedHintId: Y,
          })),
          (_[18] = D),
          (_[19] = G),
          (_[20] = Y),
          (_[21] = m),
          (_[22] = T),
          (_[23] = h))
        : (h = _[23]),
        _[24] !== P.dir
          ? ((p = (0, s.jsx)("span", {
              className: "truncate font-mono select-text",
              dir: "ltr",
              title: P.dir,
              children: P.dir,
            })),
            (_[24] = P.dir),
            (_[25] = p))
          : (p = _[25]),
        _[26] !== O || _[27] !== $
          ? ((x = $
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("span", { "aria-hidden": !0, title: $, children: (0, s.jsx)(F.P0k, {}) }),
                    (0, s.jsx)("span", { className: "sr-only", id: O, children: $ }),
                  ],
                })
              : null),
            (_[26] = O),
            (_[27] = $),
            (_[28] = x))
          : (x = _[28]),
        _[29] !== p || _[30] !== x
          ? ((b = (0, s.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [p, x] })),
            (_[29] = p),
            (_[30] = x),
            (_[31] = b))
          : (b = _[31]),
        _[32] !== X || _[33] !== L || _[34] !== B || _[35] !== V || _[36] !== H || _[37] !== G?.id || _[38] !== P.dir
          ? ((y = X
              ? (0, s.jsx)(en.m, {
                  content: V,
                  children: (0, s.jsx)(c.$, {
                    "aria-label": V,
                    color: "ghost",
                    disabled: B || L,
                    onClick: () => {
                      ;(0, eO.t)(H, { sourceConversationId: G?.id, workspaceRoot: P.dir })
                    },
                    size: "toolbar",
                    uniform: !0,
                    children: (0, s.jsx)(F.oKy, {}),
                  }),
                })
              : null),
            (_[32] = X),
            (_[33] = L),
            (_[34] = B),
            (_[35] = V),
            (_[36] = H),
            (_[37] = G?.id),
            (_[38] = P.dir),
            (_[39] = y))
          : (y = _[39]))
      let ee = L || U
      return (
        _[40] !== W || _[41] !== R || _[42] !== H
          ? ((A = () => {
              !(async function (e, t, r) {
                if (!e.get(eN, t)) {
                  e.set(eN, t, !0)
                  try {
                    if ((await eM(e, t.hostId)).some((e) => null != (0, Q.c1)([t.worktree], e.cwd)))
                      return void e
                        .get(v.Id)
                        .warning(
                          (0, s.jsx)(l.A, {
                            id: "settings.worktrees.delete.pinned",
                            defaultMessage: "Unpin the chats in this worktree before deleting it",
                            description: "Explains why deleting a worktree with a pinned chat was blocked",
                          }),
                        )
                    ;(await Promise.all(
                      r.map((r) =>
                        (0, ec.V)(e, t.hostId).archiveConversation(r.id, {
                          useAppServerPins: e.get(eu.XF),
                          cleanupWorktree: !1,
                          source: "worktree_delete",
                        }),
                      ),
                    ),
                      await (0, ef.P)((0, em.Q)().delete({ ...t, reason: "settings-delete-targeted" })),
                      await e.queryClient.invalidateQueries({ queryKey: (0, ep.F)(t.hostId) }))
                  } catch (t) {
                    ;(eh.v.error("Failed to delete worktree", { safe: {}, sensitive: { error: (0, w.Rt_)(t) } }),
                      e
                        .get(v.Id)
                        .danger(
                          (0, s.jsx)(l.A, {
                            id: "settings.worktrees.delete.error",
                            defaultMessage: "Failed to delete worktree",
                            description: "Error message when deleting a worktree from settings",
                          }),
                          { errorAnalytics: { toastId: "settings.worktrees.delete.error" } },
                        ))
                  } finally {
                    e.set(eN, t, !1)
                  }
                }
              })(H, W, R)
            }),
            (_[40] = W),
            (_[41] = R),
            (_[42] = H),
            (_[43] = A))
          : (A = _[43]),
        _[44] !== D || _[45] !== B || _[46] !== $ || _[47] !== ee || _[48] !== A || _[49] !== P.dir
          ? ((M = (0, s.jsx)(eQ, {
              hostId: D,
              disabled: ee,
              isDeleting: B,
              pinnedHint: $,
              worktree: P.dir,
              onConfirm: A,
            })),
            (_[44] = D),
            (_[45] = B),
            (_[46] = $),
            (_[47] = ee),
            (_[48] = A),
            (_[49] = P.dir),
            (_[50] = M))
          : (M = _[50]),
        _[51] !== y || _[52] !== M
          ? ((N = (0, s.jsxs)(s.Fragment, { children: [y, M] })), (_[51] = y), (_[52] = M), (_[53] = N))
          : (N = _[53]),
        _[54] !== h || _[55] !== b || _[56] !== N
          ? ((S = (0, s.jsx)(j.ic, {
              size: "compact",
              controlSizing: "content",
              label: h,
              description: b,
              control: N,
            })),
            (_[54] = h),
            (_[55] = b),
            (_[56] = N),
            (_[57] = S))
          : (S = _[57]),
        _[58] !== S || _[59] !== Z || _[60] !== P.dir
          ? ((I = (0, s.jsx)("div", {
              role: "group",
              "aria-busy": Z,
              "aria-label": J,
              "data-worktree-row": !0,
              tabIndex: -1,
              children: S,
            })),
            (_[58] = S),
            (_[59] = Z),
            (_[60] = P.dir),
            (_[61] = I))
          : (I = _[61]),
        I
      )
    }
    function eZ(e) {
      return e.isPinned
    }
    function eJ(e) {
      return e.isPinned || !e.isSubagent
    }
    function eY(e) {
      let t,
        r,
        o = (0, n.c)(10),
        { worktrees: a, conversations: i, hostId: l, isConversationsLoading: d } = e
      if (o[0] !== i || o[1] !== l || o[2] !== d || o[3] !== a) {
        let e,
          r = (function (e, t) {
            let r = (function (e, t) {
                let r = new Map(e.map((e) => [(0, Q.XH)(e.dir), []]))
                for (let s of t)
                  for (let t of e)
                    if (eL(s.cwd, t.dir) || s.attachedWorktreeRoots?.includes(t.dir)) {
                      let e = r.get((0, Q.XH)(t.dir))
                      null == e || e.some(({ id: e }) => e === s.id) || e.push(s)
                    }
                return r
              })(e, t),
              s = new Map()
            for (let t of e) {
              let e = (0, eH._M)(t.gitDir) || null,
                n = null == e ? null : (0, Q.XH)(e),
                o = r.get((0, Q.XH)(t.dir)) ?? [],
                a = o.filter((e) => eL(e.cwd, t.dir)),
                i = o.filter((e) => e.isPinned || !e.isSubagent),
                l = i.reduce((e, t) => Math.max(e, t.recencyAt ?? 0), 0),
                d = s.get(n)
              ;(null == d && ((d = { key: n, repoRoot: e, recencyAt: 0, worktrees: [] }), s.set(n, d)),
                (d.recencyAt = Math.max(d.recencyAt, l)),
                d.worktrees.push({ worktree: t, nativeConversations: a, visibleConversations: i, recencyAt: l }))
            }
            for (let e of s.values())
              e.worktrees.sort((e, t) => t.recencyAt - e.recencyAt || e.worktree.dir.localeCompare(t.worktree.dir))
            return [...s.values()].sort(
              (e, t) =>
                Number(null == e.repoRoot) - Number(null == t.repoRoot) ||
                t.recencyAt - e.recencyAt ||
                (e.key ?? "").localeCompare(t.key ?? ""),
            )
          })(a, i)
        ;(o[5] !== l || o[6] !== d
          ? ((e = (e) => (0, s.jsx)(e0, { group: e, hostId: l, isConversationsLoading: d }, e.key ?? "unknown")),
            (o[5] = l),
            (o[6] = d),
            (o[7] = e))
          : (e = o[7]),
          (t = r.map(e)),
          (o[0] = i),
          (o[1] = l),
          (o[2] = d),
          (o[3] = a),
          (o[4] = t))
      } else t = o[4]
      return (o[8] !== t ? ((r = (0, s.jsx)(s.Fragment, { children: t })), (o[8] = t), (o[9] = r)) : (r = o[9]), r)
    }
    function e0(e) {
      let t,
        r,
        o,
        a,
        i,
        d,
        c,
        u,
        f,
        m = (0, n.c)(31),
        { group: h, hostId: p, isConversationsLoading: g } = e,
        [x, w] = (0, C.useState)(!0),
        b = (0, C.useId)()
      m[0] !== h.repoRoot
        ? ((t = h.repoRoot ? (0, Q.Q0)(h.repoRoot) || h.repoRoot : null), (m[0] = h.repoRoot), (m[1] = t))
        : (t = m[1])
      let v = t
      m[2] !== x || m[3] !== h.worktrees || m[4] !== p || m[5] !== g || m[6] !== v
        ? ((r =
            x &&
            h.worktrees.map((e) => {
              let { worktree: t, nativeConversations: r, visibleConversations: n } = e
              return (0, s.jsx)(
                e$,
                {
                  worktree: t,
                  repositoryName: v,
                  nativeConversations: r,
                  visibleConversations: n,
                  hostId: p,
                  isConversationsLoading: g,
                },
                t.dir,
              )
            })),
          (m[2] = x),
          (m[3] = h.worktrees),
          (m[4] = p),
          (m[5] = g),
          (m[6] = v),
          (m[7] = r))
        : (r = m[7])
      let k = x ? b : void 0
      return (
        m[8] !== h.repoRoot || m[9] !== v
          ? ((o = v
              ? (0, s.jsx)("span", {
                  className: "block truncate",
                  dir: "ltr",
                  title: h.repoRoot ?? void 0,
                  children: v,
                })
              : (0, s.jsx)(l.A, {
                  id: "settings.worktrees.repository.unknown",
                  defaultMessage: "Unknown repository",
                  description: "Fallback label when worktree repository cannot be resolved",
                })),
            (m[8] = h.repoRoot),
            (m[9] = v),
            (m[10] = o))
          : (o = m[10]),
        m[11] !== h.worktrees.length
          ? ((a = (0, s.jsx)(j.jj, {
              children: (0, s.jsx)(l.A, {
                id: "settings.worktrees.repository.count",
                defaultMessage: "{count, plural, one {# worktree} other {# worktrees}}",
                description:
                  "Number of worktrees in the repository shown next to its name on the button that expands or collapses the group in Worktrees settings.",
                values: { count: h.worktrees.length },
              }),
            })),
            (m[11] = h.worktrees.length),
            (m[12] = a))
          : (a = m[12]),
        m[13] !== x ? ((i = x ? (0, s.jsx)(F.Aq_, {}) : (0, s.jsx)(F.uM3, {})), (m[13] = x), (m[14] = i)) : (i = m[14]),
        m[15] !== a || m[16] !== i
          ? ((d = (0, s.jsxs)(s.Fragment, { children: [a, i] })), (m[15] = a), (m[16] = i), (m[17] = d))
          : (d = m[17]),
        m[18] !== x ? ((c = () => w(!x)), (m[18] = x), (m[19] = c)) : (c = m[19]),
        m[20] !== x || m[21] !== k || m[22] !== o || m[23] !== d || m[24] !== c
          ? ((u = (0, s.jsx)(j.kG, {
              ariaControls: k,
              ariaExpanded: x,
              edgeRounding: "surface",
              label: o,
              trailing: d,
              onClick: c,
            })),
            (m[20] = x),
            (m[21] = k),
            (m[22] = o),
            (m[23] = d),
            (m[24] = c),
            (m[25] = u))
          : (u = m[25]),
        m[26] !== b || m[27] !== x || m[28] !== r || m[29] !== u
          ? ((f = (0, s.jsx)(eP.t, {
              children: (0, s.jsx)(B.H, { contentId: b, expanded: x, content: r, children: u }),
            })),
            (m[26] = b),
            (m[27] = x),
            (m[28] = r),
            (m[29] = u),
            (m[30] = f))
          : (f = m[30]),
        f
      )
    }
    let e1 = (0, m._)(
      async () =>
        (await Promise.all([r.e(777478), r.e(754281)]).then(r.bind(r, "V39R"))).LocalEnvironmentsSettingsContent,
    )
    function e2() {
      let e,
        t,
        r,
        o,
        a,
        i = (0, n.c)(14),
        l = (0, d.zy)(),
        { selectedHostId: c } = (0, eR.D)(),
        u = (0, et.Zj)("375130565")
      if (u && "environments" === new URLSearchParams(l.search).get("tab")) {
        let e,
          t = `${c}:${l.key}`
        return (
          i[0] !== c || i[1] !== t
            ? ((e = (0, s.jsx)(e1, { settingsHostId: c }, t)), (i[0] = c), (i[1] = t), (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      return (
        i[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(N.s, { slug: "worktrees" })), (i[3] = e))
          : (e = i[3]),
        i[4] !== u
          ? ((t = u ? (0, s.jsx)(eF.x, { selectedTab: "general" }) : null), (i[4] = u), (i[5] = t))
          : (t = i[5]),
        i[6] !== c
          ? ((r = (0, s.jsx)(eE, { hostId: c })),
            (o = (0, s.jsx)(e3, { hostId: c })),
            (i[6] = c),
            (i[7] = r),
            (i[8] = o))
          : ((r = i[7]), (o = i[8])),
        i[9] !== c || i[10] !== t || i[11] !== r || i[12] !== o
          ? ((a = (0, s.jsxs)(x.P, { title: e, stickyControls: t, children: [r, o] }, c)),
            (i[9] = c),
            (i[10] = t),
            (i[11] = r),
            (i[12] = o),
            (i[13] = a))
          : (a = i[13]),
        a
      )
    }
    function e3(e) {
      var t, r
      let d,
        m,
        x,
        w,
        b,
        v,
        k,
        y,
        A,
        C,
        M,
        N,
        S,
        I,
        _ = (0, n.c)(44),
        { hostId: P } = e,
        E = (0, i.A)(),
        R = (0, eD.Qz)(P),
        T = (0, p.d)(),
        {
          data: D,
          isPending: F,
          isEnabled: L,
          isFetching: H,
          error: z,
          refetch: O,
        } = (0, h.f)(R, "worktrees_settings_page")
      _[0] !== P ? ((d = { hostId: P }), (_[0] = P), (_[1] = d)) : (d = _[1])
      let { data: W, isPending: B, isFetching: G, error: Q, refetch: U } = (0, a._U)(g.FM, d)
      _[2] !== P || _[3] !== T || _[4] !== W || _[5] !== D?.worktrees
        ? ((v = W
            ? ((t = D?.worktrees ?? []), 0 === (r = W.roots).length ? t : t.filter((e) => !r.some((t) => eL(t, e.dir))))
            : []),
          (m = eC),
          (x = P),
          (w = T),
          (b = v.map(e4)),
          (_[2] = P),
          (_[3] = T),
          (_[4] = W),
          (_[5] = D?.worktrees),
          (_[6] = m),
          (_[7] = x),
          (_[8] = w),
          (_[9] = b),
          (_[10] = v))
        : ((m = _[6]), (x = _[7]), (w = _[8]), (b = _[9]), (v = _[10]))
      let { data: q, error: K, isEnabled: X, isFetching: V, isPending: $, refetch: Z } = m(x, w, b),
        J = z ?? Q ?? (v.length > 0 ? K : null)
      _[11] !== E
        ? ((k = E.formatMessage({
            id: "settings.worktrees.refresh",
            defaultMessage: "Refresh",
            description: "Button label to refresh the worktree list",
          })),
          (_[11] = E),
          (_[12] = k))
        : (k = _[12])
      let Y = k,
        ee = H || G || V
      if (!J && (F || B)) {
        let e
        ;(_[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(eT.j, {
              children: (0, s.jsx)(l.A, {
                id: "settings.worktrees.loading.body",
                defaultMessage: "Fetching worktree details…",
                description: "Loading state body for worktrees settings",
              }),
            })),
            (_[13] = e))
          : (e = _[13]),
          (y = e))
      } else if (J) {
        let e, t
        ;(_[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.worktrees.error.title",
              defaultMessage: "Unable to load worktrees",
              description: "Error state title for worktrees settings",
            })),
            (_[14] = e))
          : (e = _[14]),
          _[15] !== J.message
            ? ((t = (0, s.jsx)(eP.t, {
                children: (0, s.jsx)(j.ic, { label: e, description: J.message, control: null }),
              })),
              (_[15] = J.message),
              (_[16] = t))
            : (t = _[16]),
          (y = t))
      } else if (0 === v.length) {
        let e
        ;(_[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(eP.t, {
              children: (0, s.jsx)(f.W, {
                layout: "settings-row",
                align: "start",
                children: (0, s.jsx)(l.A, {
                  id: "settings.worktrees.empty.title",
                  defaultMessage: "No worktrees yet",
                  description: "Empty state title for worktrees settings",
                }),
              }),
            })),
            (_[17] = e))
          : (e = _[17]),
          (y = e))
      } else {
        let e, t
        ;(_[18] !== q ? ((e = q ?? []), (_[18] = q), (_[19] = e)) : (e = _[19]),
          _[20] !== P || _[21] !== $ || _[22] !== e || _[23] !== v
            ? ((t = (0, s.jsx)(eY, { worktrees: v, conversations: e, hostId: P, isConversationsLoading: $ })),
              (_[20] = P),
              (_[21] = $),
              (_[22] = e),
              (_[23] = v),
              (_[24] = t))
            : (t = _[24]),
          (y = t))
      }
      return (
        _[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, s.jsx)("h2", {
              "data-worktree-inventory-heading": !0,
              tabIndex: -1,
              children: (0, s.jsx)(l.A, {
                id: "settings.worktrees.inventory.title",
                defaultMessage: "Managed worktrees",
                description:
                  "Heading for the Git worktrees managed by Codex on the selected computer, grouped by repository",
              }),
            })),
            (_[25] = A))
          : (A = _[25]),
        _[26] !== X || _[27] !== L || _[28] !== Z || _[29] !== U || _[30] !== O
          ? ((C = () => {
              ;(U(), L && O(), X && Z())
            }),
            (_[26] = X),
            (_[27] = L),
            (_[28] = Z),
            (_[29] = U),
            (_[30] = O),
            (_[31] = C))
          : (C = _[31]),
        _[32] !== ee ? ((M = ee ? null : (0, s.jsx)(u.I, { asset: o.S })), (_[32] = ee), (_[33] = M)) : (M = _[33]),
        _[34] !== ee || _[35] !== Y || _[36] !== C || _[37] !== M
          ? ((N = (0, s.jsx)(e_.X.Header, {
              title: A,
              actions: (0, s.jsx)(c.$, {
                "aria-label": Y,
                color: "ghost",
                loading: ee,
                onClick: C,
                size: "toolbar",
                title: Y,
                uniform: !0,
                children: M,
              }),
            })),
            (_[34] = ee),
            (_[35] = Y),
            (_[36] = C),
            (_[37] = M),
            (_[38] = N))
          : (N = _[38]),
        _[39] !== y ? ((S = (0, s.jsx)(e_.X.Content, { children: y })), (_[39] = y), (_[40] = S)) : (S = _[40]),
        _[41] !== N || _[42] !== S
          ? ((I = (0, s.jsxs)(e_.X, { id: "worktree-inventory", children: [N, S] })),
            (_[41] = N),
            (_[42] = S),
            (_[43] = I))
          : (I = _[43]),
        I
      )
    }
    function e4(e) {
      return e.dir
    }
  },
  BSnr(e, t, r) {
    r.d(t, { X: () => a })
    var s = r("ABep"),
      n = r("QosV"),
      o = r("on57")
    let a = Object.assign(
      function (e) {
        let t,
          r,
          a = (0, n.c)(6),
          { children: i, id: l, className: d } = e
        return (
          a[0] !== d ? ((t = (0, o.A)("flex flex-col", d)), (a[0] = d), (a[1] = t)) : (t = a[1]),
          a[2] !== i || a[3] !== l || a[4] !== t
            ? ((r = (0, s.jsx)("section", { id: l, className: t, children: i })),
              (a[2] = i),
              (a[3] = l),
              (a[4] = t),
              (a[5] = r))
            : (r = a[5]),
          r
        )
      },
      {
        Header: function (e) {
          let t,
            r,
            a,
            i,
            l,
            d,
            c,
            u = (0, n.c)(32),
            {
              title: f,
              subtitle: m,
              actions: h,
              actionsAlignment: p,
              className: g,
              size: x,
              titleGap: w,
              spacing: b,
              subtitlePlacement: v,
              subtitleWrap: k,
            } = e,
            y = void 0 === x ? "default" : x,
            j = void 0 === b ? "default" : b,
            A = void 0 === v ? "below-title" : v,
            C = void 0 === k ? "balance" : k,
            M = null != f,
            N = null != m,
            S = null != h,
            I = "compact" === y
          u[0] !== I || u[1] !== m || u[2] !== A || u[3] !== C
            ? ((t = m
                ? (0, s.jsx)("div", {
                    className: (0, o.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === C ? "text-balance" : "text-wrap",
                      I ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = I),
              (u[1] = m),
              (u[2] = A),
              (u[3] = C),
              (u[4] = t))
            : (t = u[4])
          let _ = t
          if (!M && !N && !S) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(s.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            E = N && "compact" === j && "pb-2",
            R = N && "compact" !== j && "pb-3"
          u[6] !== g || u[7] !== N || u[8] !== I || u[9] !== j || u[10] !== P || u[11] !== E || u[12] !== R
            ? ((r = (0, o.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                E,
                R,
                !N && (0, o.A)("items-center pb-1.5", "compact" === j ? "min-h-8" : "min-h-toolbar"),
                N && I && "items-center",
                N && !I && "items-start",
                g,
              )),
              (u[6] = g),
              (u[7] = N),
              (u[8] = I),
              (u[9] = j),
              (u[10] = P),
              (u[11] = E),
              (u[12] = R),
              (u[13] = r))
            : (r = u[13])
          let T =
            "none" === (void 0 === w ? "default" : w)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== T ? ((a = (0, o.A)("flex min-w-0 flex-1 flex-col", T)), (u[14] = T), (u[15] = a)) : (a = u[15]),
            u[16] !== N || u[17] !== y || u[18] !== f
              ? ((i = f
                  ? (0, s.jsx)("div", {
                      className: (0, o.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === y && "text-sm leading-[18px]",
                        ("large" === y || ("default" === y && N)) && "text-lg",
                        ("base" === y || ("default" === y && !N)) && "text-base",
                      ),
                      children: f,
                    })
                  : null),
                (u[16] = N),
                (u[17] = y),
                (u[18] = f),
                (u[19] = i))
              : (i = u[19]))
          let D = "below-title" === A ? _ : null
          ;(u[20] !== a || u[21] !== i || u[22] !== D
            ? ((l = (0, s.jsxs)("div", { className: a, children: [i, D] })),
              (u[20] = a),
              (u[21] = i),
              (u[22] = D),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== h || u[25] !== p
              ? ((d = h
                  ? (0, s.jsx)("div", {
                      className: (0, o.A)("flex items-center gap-2", "end" === p && "self-end"),
                      children: h,
                    })
                  : null),
                (u[24] = h),
                (u[25] = p),
                (u[26] = d))
              : (d = u[26]))
          let F = "below-header" === A ? _ : null
          return (
            u[27] !== r || u[28] !== l || u[29] !== d || u[30] !== F
              ? ((c = (0, s.jsxs)("div", { className: r, children: [l, d, F] })),
                (u[27] = r),
                (u[28] = l),
                (u[29] = d),
                (u[30] = F),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let t,
            r,
            a = (0, n.c)(5),
            { children: i, className: l } = e
          return (
            a[0] !== l ? ((t = (0, o.A)("flex flex-col gap-1.5", l)), (a[0] = l), (a[1] = t)) : (t = a[1]),
            a[2] !== i || a[3] !== t
              ? ((r = (0, s.jsx)("div", { className: t, children: i })), (a[2] = i), (a[3] = t), (a[4] = r))
              : (r = a[4]),
            r
          )
        },
        Footer: function (e) {
          let t,
            r,
            a = (0, n.c)(6),
            { children: i, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            a[0] !== l || a[1] !== c
              ? ((t = (0, o.A)("text-balance text-secondary", c, l)), (a[0] = l), (a[1] = c), (a[2] = t))
              : (t = a[2]),
            a[3] !== i || a[4] !== t
              ? ((r = (0, s.jsx)("div", { className: t, children: i })), (a[3] = i), (a[4] = t), (a[5] = r))
              : (r = a[5]),
            r
          )
        },
      },
    )
  },
  odCE(e, t, r) {
    var s = r("ABep"),
      n = r("QosV"),
      o = r("oyxz"),
      a = r("RNul")
    r.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            r,
            i,
            l = (0, n.c)(5),
            { children: d } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(a.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== d
              ? ((r =
                  void 0 === d
                    ? (0, s.jsx)(o.A, {
                        id: "settings.panel.loading",
                        defaultMessage: "Loading settings…",
                        description: "Loading state shown while settings load",
                      })
                    : d),
                (l[1] = d),
                (l[2] = r))
              : (r = l[2]),
            l[3] !== r
              ? ((i = (0, s.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, s.jsx)("span", { className: "text-balance", children: r })],
                })),
                (l[3] = r),
                (l[4] = i))
              : (i = l[4]),
            i
          )
        },
      },
    )
  },
  EjYe(e, t, r) {
    var s = r("ABep"),
      n = r("QosV"),
      o = r("bZug")
    r.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            r,
            a = (0, n.c)(7),
            { children: i, content: l, contentId: d, expanded: c } = e
          return (
            a[0] !== l || a[1] !== d || a[2] !== c
              ? ((t = c ? (0, s.jsx)("div", { id: d, className: o.r, children: l }) : null),
                (a[0] = l),
                (a[1] = d),
                (a[2] = c),
                (a[3] = t))
              : (t = a[3]),
            a[4] !== i || a[5] !== t
              ? ((r = (0, s.jsxs)("div", { className: o.r, children: [i, t] })), (a[4] = i), (a[5] = t), (a[6] = r))
              : (r = a[6]),
            r
          )
        },
      },
    )
  },
  bZug(e, t, r) {
    r.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, r) {
    var s = r("ABep"),
      n = r("QosV"),
      o = r("on57"),
      a = r("zd8w"),
      i = r("HZfM"),
      l = r("GO7r")
    function d(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        r,
        a,
        i,
        l,
        d,
        c,
        u = (0, n.c)(24),
        {
          label: f,
          labelId: m,
          labelSizing: h,
          labelWeight: p,
          description: g,
          descriptionId: x,
          icon: w,
          variant: b,
          verticalAlignment: v,
        } = e,
        k = "start" === v ? "items-start" : "items-center",
        y = "grow" === (void 0 === h ? "grow" : h) && "flex-1"
      ;(u[0] !== k || u[1] !== y
        ? ((t = (0, o.A)("flex min-w-0 gap-3", k, y)), (u[0] = k), (u[1] = y), (u[2] = t))
        : (t = u[2]),
        u[3] !== w
          ? ((r = null != w ? (0, s.jsx)("span", { className: "flex shrink-0", children: w }) : null),
            (u[3] = w),
            (u[4] = r))
          : (r = u[4]))
      let j = "featured" === b && "text-base",
        A = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        C = "featured" !== b && "recommendation" !== b && "text-sm",
        M = "nested" !== b && "medium" === (void 0 === p ? "medium" : p) && "font-medium"
      return (
        u[5] !== M || u[6] !== j || u[7] !== A || u[8] !== C
          ? ((a = (0, o.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              j,
              A,
              C,
              M,
            )),
            (u[5] = M),
            (u[6] = j),
            (u[7] = A),
            (u[8] = C),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== f || u[11] !== m || u[12] !== a
          ? ((i = (0, s.jsx)("div", { id: m, className: a, children: f })),
            (u[10] = f),
            (u[11] = m),
            (u[12] = a),
            (u[13] = i))
          : (i = u[13]),
        u[14] !== g || u[15] !== x
          ? ((l = g
              ? (0, s.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: g,
                })
              : null),
            (u[14] = g),
            (u[15] = x),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== i || u[18] !== l
          ? ((d = (0, s.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [i, l] })),
            (u[17] = i),
            (u[18] = l),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== r
          ? ((c = (0, s.jsxs)("div", { className: t, children: [r, d] })),
            (u[20] = d),
            (u[21] = t),
            (u[22] = r),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    r.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            r,
            a,
            i,
            l,
            d,
            c = (0, n.c)(18),
            { children: u, compactLabelInset: f, label: m, valueAlignment: h, variant: p } = e,
            g = void 0 === f || f,
            x = void 0 === h ? "start" : h,
            w = void 0 === p ? "default" : p,
            b =
              "compact" === w
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== b ? ((t = (0, o.A)("grid items-center", b)), (c[0] = b), (c[1] = t)) : (t = c[1]),
            c[2] !== g || c[3] !== w
              ? ((r = (0, o.A)(
                  "min-w-0",
                  "compact" === w
                    ? (0, o.A)("flex items-center pe-2 text-start", g && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = g),
                (c[3] = w),
                (c[4] = r))
              : (r = c[4]),
            c[5] !== m || c[6] !== r
              ? ((a = (0, s.jsx)("div", { className: r, children: m })), (c[5] = m), (c[6] = r), (c[7] = a))
              : (a = c[7]),
            c[8] !== x || c[9] !== w
              ? ((i = (0, o.A)(
                  "min-w-0",
                  "compact" === w
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, o.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (c[8] = x),
                (c[9] = w),
                (c[10] = i))
              : (i = c[10]),
            c[11] !== u || c[12] !== i
              ? ((l = (0, s.jsx)("div", { className: i, children: u })), (c[11] = u), (c[12] = i), (c[13] = l))
              : (l = c[13]),
            c[14] !== t || c[15] !== a || c[16] !== l
              ? ((d = (0, s.jsxs)("div", { className: t, children: [a, l] })),
                (c[14] = t),
                (c[15] = a),
                (c[16] = l),
                (c[17] = d))
              : (d = c[17]),
            d
          )
        },
        ic: function (e) {
          let t,
            r,
            i,
            l,
            d = (0, n.c)(35),
            {
              label: u,
              labelSizing: f,
              labelWeight: m,
              layout: h,
              description: p,
              control: g,
              controlSizing: x,
              icon: w,
              className: b,
              id: v,
              inset: k,
              size: y,
              variant: j,
              verticalAlignment: A,
            } = e,
            C = void 0 === f ? "grow" : f,
            M = void 0 === m ? "medium" : m,
            N = void 0 === h ? "default" : h,
            S = void 0 === x ? "minimum" : x,
            I = void 0 === k || k,
            _ = void 0 === y ? "default" : y,
            P = void 0 === j ? "default" : j,
            E = void 0 === A ? "center" : A,
            R = (0, a.useId)(),
            T = null != u || null != p || null != w,
            D = "function" == typeof g,
            F = D && null != u ? `${R}-label` : void 0,
            L = D && p ? `${R}-description` : void 0,
            H = I && ("split" !== N || "default" !== P) && "px-4",
            z = I && "nested" === P && "group-data-[density=form]/settings:px-5",
            O =
              "stacked" === P &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            W =
              "nested" === P &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            B = "stacked" !== P && ("start" === E ? "items-start" : "items-center"),
            G = "split" === N && "default" === P && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== b ||
            d[1] !== N ||
            d[2] !== _ ||
            d[3] !== z ||
            d[4] !== O ||
            d[5] !== W ||
            d[6] !== B ||
            d[7] !== G ||
            d[8] !== H ||
            d[9] !== P
              ? ((t = (0, o.A)(
                  "@container/settings-row",
                  H,
                  z,
                  O,
                  W,
                  B,
                  G,
                  "default" === N &&
                    ("default" === P || "featured" === P || "recommendation" === P) &&
                    (0, o.A)(
                      "flex justify-between",
                      "featured" === P && (0, o.A)("gap-6", "compact" === _ ? "min-h-11 py-2" : "py-4"),
                      "featured" !== P && ("compact" === _ ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === P && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (d[0] = b),
                (d[1] = N),
                (d[2] = _),
                (d[3] = z),
                (d[4] = O),
                (d[5] = W),
                (d[6] = B),
                (d[7] = G),
                (d[8] = H),
                (d[9] = P),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== p ||
            d[12] !== L ||
            d[13] !== T ||
            d[14] !== w ||
            d[15] !== u ||
            d[16] !== F ||
            d[17] !== C ||
            d[18] !== M ||
            d[19] !== P ||
            d[20] !== E
              ? ((r = T
                  ? (0, s.jsx)(c, {
                      label: u,
                      labelId: F,
                      labelSizing: C,
                      labelWeight: M,
                      description: p,
                      descriptionId: L,
                      icon: w,
                      variant: P,
                      verticalAlignment: E,
                    })
                  : null),
                (d[11] = p),
                (d[12] = L),
                (d[13] = T),
                (d[14] = w),
                (d[15] = u),
                (d[16] = F),
                (d[17] = C),
                (d[18] = M),
                (d[19] = P),
                (d[20] = E),
                (d[21] = r))
              : (r = d[21]),
            d[22] !== g || d[23] !== S || d[24] !== L || d[25] !== D || d[26] !== F || d[27] !== N || d[28] !== P
              ? ((i =
                  null != g && !1 !== g
                    ? (0, s.jsx)("div", {
                        className: (0, o.A)(
                          "stacked" === P && "w-full",
                          "nested" === P && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === N &&
                            "default" === P &&
                            (0, o.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === S && "w-full",
                            ),
                          "default" === N &&
                            ("default" === P || "featured" === P || "recommendation" === P) &&
                            (0, o.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === S ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === S && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: D ? g({ "aria-labelledby": F, "aria-describedby": L }) : g,
                      })
                    : null),
                (d[22] = g),
                (d[23] = S),
                (d[24] = L),
                (d[25] = D),
                (d[26] = F),
                (d[27] = N),
                (d[28] = P),
                (d[29] = i))
              : (i = d[29]),
            d[30] !== v || d[31] !== t || d[32] !== r || d[33] !== i
              ? ((l = (0, s.jsxs)("div", { id: v, className: t, children: [r, i] })),
                (d[30] = v),
                (d[31] = t),
                (d[32] = r),
                (d[33] = i),
                (d[34] = l))
              : (l = d[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            r = (0, n.c)(2),
            { children: o } = e
          return (
            r[0] !== o
              ? ((t = (0, s.jsx)("span", { className: "text-xs text-secondary", children: o })), (r[0] = o), (r[1] = t))
              : (t = r[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            r,
            a,
            l,
            u,
            f,
            m,
            h,
            p,
            g,
            x,
            w,
            b,
            v,
            k,
            y,
            j,
            A,
            C,
            M,
            N,
            S,
            I,
            _ = (0, n.c)(54)
          _[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: r,
                ariaExpanded: a,
                ariaLabel: l,
                className: u,
                description: f,
                disabled: m,
                edgeRounding: w,
                icon: h,
                label: g,
                size: b,
                trailing: k,
                variant: v,
                ...p
              } = e),
              (_[0] = e),
              (_[1] = t),
              (_[2] = r),
              (_[3] = a),
              (_[4] = l),
              (_[5] = u),
              (_[6] = f),
              (_[7] = m),
              (_[8] = h),
              (_[9] = p),
              (_[10] = g),
              (_[11] = x),
              (_[12] = w),
              (_[13] = b),
              (_[14] = v),
              (_[15] = k))
            : ((t = _[1]),
              (r = _[2]),
              (a = _[3]),
              (l = _[4]),
              (u = _[5]),
              (f = _[6]),
              (m = _[7]),
              (h = _[8]),
              (p = _[9]),
              (g = _[10]),
              (x = _[11]),
              (w = _[12]),
              (b = _[13]),
              (v = _[14]),
              (k = _[15]))
          let P = void 0 === w ? "row" : w,
            E = void 0 === b ? "default" : b,
            R = void 0 === v ? "default" : v,
            T = "before-trailing" === (void 0 === x ? "end" : x) && !m && null != t && null != k,
            D = T ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          _[16] !== u || _[17] !== T || _[18] !== E || _[19] !== D || _[20] !== R
            ? ((y = (0, o.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                D,
                "empty" === R
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, o.A)(
                      "px-4 text-start",
                      "nested" === R && "min-h-10 py-0.5",
                      "nested" !== R && ("large" === E ? "py-4" : "py-3"),
                      T && "gap-2",
                      !T && ("nested" === R ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (_[16] = u),
              (_[17] = T),
              (_[18] = E),
              (_[19] = D),
              (_[20] = R),
              (_[21] = y))
            : (y = _[21])
          let F = y
          ;(_[22] !== f || _[23] !== h || _[24] !== g || _[25] !== R
            ? ((j =
                "empty" === R
                  ? (0, s.jsxs)(s.Fragment, { children: [h, g] })
                  : (0, s.jsx)(c, { label: g, description: f, icon: h, variant: R, verticalAlignment: "center" })),
              (_[22] = f),
              (_[23] = h),
              (_[24] = g),
              (_[25] = R),
              (_[26] = j))
            : (j = _[26]),
            _[27] !== k
              ? ((A =
                  null != k
                    ? (0, s.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: k })
                    : null),
                (_[27] = k),
                (_[28] = A))
              : (A = _[28]),
            _[29] !== j || _[30] !== A
              ? ((C = (0, s.jsxs)(s.Fragment, { children: [j, A] })), (_[29] = j), (_[30] = A), (_[31] = C))
              : (C = _[31]))
          let L = C,
            H = T ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            z = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            O = "recommendation" === R && "dark:bg-primary-ghost-hover",
            W = !m && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            B =
              !m &&
              "recommendation" === R &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            _[32] !== H || _[33] !== z || _[34] !== O || _[35] !== W || _[36] !== B
              ? ((M = (0, o.A)("group w-full items-center", H, z, O, W, B)),
                (_[32] = H),
                (_[33] = z),
                (_[34] = O),
                (_[35] = W),
                (_[36] = B),
                (_[37] = M))
              : (M = _[37]),
            _[38] !== r || _[39] !== a || _[40] !== l || _[41] !== L || _[42] !== m || _[43] !== p || _[44] !== F
              ? ((N =
                  null != p.to
                    ? (0, s.jsx)(i.N_, {
                        ...p,
                        className: F,
                        "aria-controls": r,
                        "aria-expanded": a,
                        "aria-label": l,
                        "aria-disabled": m || void 0,
                        tabIndex: m ? -1 : void 0,
                        onClick: m ? d : p.onClick,
                        children: L,
                      })
                    : (0, s.jsx)("button", {
                        ...p,
                        className: F,
                        "aria-controls": r,
                        "aria-expanded": a,
                        "aria-label": l,
                        disabled: m,
                        type: "button",
                        children: L,
                      })),
                (_[38] = r),
                (_[39] = a),
                (_[40] = l),
                (_[41] = L),
                (_[42] = m),
                (_[43] = p),
                (_[44] = F),
                (_[45] = N))
              : (N = _[45]),
            _[46] !== t || _[47] !== m || _[48] !== T
              ? ((S =
                  m || null == t
                    ? null
                    : (0, s.jsx)("div", {
                        className: (0, o.A)(
                          "flex shrink-0 items-center gap-1",
                          T ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (_[46] = t),
                (_[47] = m),
                (_[48] = T),
                (_[49] = S))
              : (S = _[49]),
            _[50] !== M || _[51] !== N || _[52] !== S
              ? ((I = (0, s.jsxs)("div", { className: M, children: [N, S] })),
                (_[50] = M),
                (_[51] = N),
                (_[52] = S),
                (_[53] = I))
              : (I = _[53]),
            I
          )
        },
        kf: function (e) {
          let t,
            r = (0, n.c)(2),
            { children: o } = e
          return (
            r[0] !== o
              ? ((t = (0, s.jsx)("span", { className: "text-tertiary", children: o })), (r[0] = o), (r[1] = t))
              : (t = r[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            r,
            a,
            i,
            d,
            c,
            u,
            f,
            m,
            h,
            p = (0, n.c)(43),
            {
              id: g,
              ariaLabel: x,
              autoFocus: w,
              checked: b,
              description: v,
              highlightSelected: k,
              indicator: y,
              label: j,
              name: A,
              onChange: C,
              onClick: M,
              value: N,
              variant: S,
            } = e,
            I = void 0 === k || k,
            _ = void 0 === y ? "radio" : y,
            P = void 0 === S ? "default" : S
          ;(p[0] !== b || p[1] !== v || p[2] !== I || p[3] !== _ || p[4] !== P
            ? ((t = (0, o.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === P &&
                  (0, o.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === P && b && I && "radio" === _ && "bg-primary-soft-alpha",
                "form" === P && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === P && "items-center gap-2",
                "checkmark" === _ && "after:ms-7",
              )),
              (p[0] = b),
              (p[1] = v),
              (p[2] = I),
              (p[3] = _),
              (p[4] = P),
              (p[5] = t))
            : (t = p[5]),
            p[6] !== x || p[7] !== g
              ? ((r = (0, s.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: g,
                })),
                (p[6] = x),
                (p[7] = g),
                (p[8] = r))
              : (r = p[8]),
            p[9] !== _ || p[10] !== P
              ? ((a = (0, o.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === _
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, o.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === P ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (p[9] = _),
                (p[10] = P),
                (p[11] = a))
              : (a = p[11]))
          let E = null != v ? `${g}-description` : void 0
          ;(p[12] !== x ||
          p[13] !== w ||
          p[14] !== b ||
          p[15] !== g ||
          p[16] !== A ||
          p[17] !== C ||
          p[18] !== M ||
          p[19] !== a ||
          p[20] !== E ||
          p[21] !== N
            ? ((i = (0, s.jsx)("input", {
                id: g,
                className: a,
                "aria-label": x,
                "aria-describedby": E,
                autoFocus: w,
                type: "radio",
                name: A,
                value: N,
                checked: b,
                onChange: C,
                onClick: M,
              })),
              (p[12] = x),
              (p[13] = w),
              (p[14] = b),
              (p[15] = g),
              (p[16] = A),
              (p[17] = C),
              (p[18] = M),
              (p[19] = a),
              (p[20] = E),
              (p[21] = N),
              (p[22] = i))
            : (i = p[22]),
            p[23] !== b || p[24] !== _
              ? ((d = "checkmark" === _ ? (0, s.jsx)(l.ALZ, { className: (0, o.A)(!b && "invisible") }) : null),
                (p[23] = b),
                (p[24] = _),
                (p[25] = d))
              : (d = p[25]))
          let R = "default" === P ? "text-sm font-medium" : "text-base"
          return (
            p[26] !== R ? ((c = (0, o.A)("text-default", R)), (p[26] = R), (p[27] = c)) : (c = p[27]),
            p[28] !== j || p[29] !== c
              ? ((u = (0, s.jsx)("span", { className: c, children: j })), (p[28] = j), (p[29] = c), (p[30] = u))
              : (u = p[30]),
            p[31] !== v || p[32] !== g
              ? ((f =
                  null != v
                    ? (0, s.jsx)("span", {
                        id: `${g}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: v,
                      })
                    : null),
                (p[31] = v),
                (p[32] = g),
                (p[33] = f))
              : (f = p[33]),
            p[34] !== u || p[35] !== f
              ? ((m = (0, s.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, f],
                })),
                (p[34] = u),
                (p[35] = f),
                (p[36] = m))
              : (m = p[36]),
            p[37] !== m || p[38] !== t || p[39] !== r || p[40] !== i || p[41] !== d
              ? ((h = (0, s.jsxs)("div", { className: t, children: [r, i, d, m] })),
                (p[37] = m),
                (p[38] = t),
                (p[39] = r),
                (p[40] = i),
                (p[41] = d),
                (p[42] = h))
              : (h = p[42]),
            h
          )
        },
      },
    )
  },
  ZEx5(e, t, r) {
    r.d(t, { t: () => i })
    var s = r("ABep"),
      n = r("QosV"),
      o = r("on57"),
      a = r("bZug")
    function i(e) {
      let t,
        r,
        i,
        l = (0, n.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: f, variant: m, decoration: h } = e,
        p = void 0 === m ? "default" : m,
        g = "flat" === p || "rows" === p ? a.s : a.r,
        x = void 0 === f || f ? g : "flex flex-col",
        w = "recommendation" === p && "rounded-[20px]",
        b = "recommendation" !== p && "flat" !== p && "rows" !== p && "outlinedLarge" !== p && "rounded-2xl",
        v = "outlinedLarge" === p && "rounded-[30px] border border-default bg-transparent",
        k = "daybreak" === h && "daybreak-VsXdEH",
        y = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        j =
          "default" === p &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === p && "ring-1 ring-inset ring-border-subtle",
        C = "secondary" === p && "bg-surface-secondary/92",
        M = "muted" === p && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        N =
          "form" === p &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        S = "outlined" === p && "border border-subtle bg-transparent",
        I =
          "flat" === p &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        _ = "input" === p && "border border-primary-outline bg-primary-soft",
        P = "recommendation" === p && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== c ||
        l[1] !== j ||
        l[2] !== A ||
        l[3] !== C ||
        l[4] !== M ||
        l[5] !== N ||
        l[6] !== S ||
        l[7] !== I ||
        l[8] !== _ ||
        l[9] !== P ||
        l[10] !== x ||
        l[11] !== w ||
        l[12] !== b ||
        l[13] !== v ||
        l[14] !== k ||
        l[15] !== y
          ? ((t = (0, o.A)(x, w, b, v, k, y, j, A, C, M, N, S, I, _, P, c)),
            (l[0] = c),
            (l[1] = j),
            (l[2] = A),
            (l[3] = C),
            (l[4] = M),
            (l[5] = N),
            (l[6] = S),
            (l[7] = I),
            (l[8] = _),
            (l[9] = P),
            (l[10] = x),
            (l[11] = w),
            (l[12] = b),
            (l[13] = v),
            (l[14] = k),
            (l[15] = y),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== p
          ? ((r =
              "default" === p || "metered" === p
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (l[17] = p),
            (l[18] = r))
          : (r = l[18]),
        l[19] !== d || l[20] !== t || l[21] !== r
          ? ((i = (0, s.jsx)("div", { className: t, style: r, children: d })),
            (l[19] = d),
            (l[20] = t),
            (l[21] = r),
            (l[22] = i))
          : (i = l[22]),
        i
      )
    }
  },
  IjRG(e, t, r) {
    var s = r("zTeN"),
      n = r("DBCl"),
      o = r("OWtl")
    let a = (0, s.T1)(o.u, (e) => new Map())
    r.d(
      t,
      {},
      {
        c: function (e, t) {
          if (t.before !== t.after)
            for (let [r, s] of e.get(a, void 0))
              ("repository" === t.type ? (0, n.IkK)(s, t.repository) : !t.overrides.some((e) => (0, n.IkK)(s, e))) &&
                (s.desired !== t.before && (s.submitted = t.before),
                (s.desired = t.after),
                "repository" === t.type && r === t.informedThreadId && (s.submitted = t.after))
        },
        j: function (e, t, r, s) {
          let o = e.get(a, void 0),
            i = o.get(t)
          if (i?.hostId === r && i.cwd === s && i.desired === i.submitted) return
          let l = e.queryClient.getQueryState(["git", "metadata", r, s])
          if (l?.status !== "success" || l.isInvalidated || null == l.data) {
            null != i && (i.hostId !== r || i.cwd !== s) && o.delete(t)
            return
          }
          let d = { hostId: r, commonDir: l.data.commonDir }
          if (null == i || !(0, n.IkK)(i, d)) return void o.set(t, { ...d, cwd: s })
          i.cwd = s
          let c = i.desired
          if (null == c || c === i.submitted) return
          let u = i.submitted
          return {
            preference: c,
            markSubmitted: () => {
              o.get(t) === i && i.submitted === u && (i.submitted = c)
            },
          }
        },
      },
    )
  },
}
//# sourceMappingURL=851065.6d7fb580fa.js.map
