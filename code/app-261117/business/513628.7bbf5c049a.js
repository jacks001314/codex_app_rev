export const __rspack_esm_ids = [513628]
export const __webpack_modules__ = {
  zJJi(e, t, i) {
    e.exports = i.p + "assets/onboarding-hero-desktop.380c8cfe43.png"
  },
  AVh7(e, t, i) {
    e.exports = i.p + "assets/onboarding-hero-mobile.b8661b56e2.png"
  },
  Lx2J(e, t, i) {
    var s = i("ABep"),
      n = i("QosV"),
      l = i("on57"),
      r = i("Lhpx"),
      a = i("GsqL")
    i.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            i,
            o,
            u,
            c,
            d,
            f,
            h,
            p = (0, n.c)(16)
          p[0] !== e
            ? (({ className: t, density: o, padded: u, variant: c, width: d, ...i } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = i),
              (p[3] = o),
              (p[4] = u),
              (p[5] = c),
              (p[6] = d))
            : ((t = p[1]), (i = p[2]), (o = p[3]), (u = p[4]), (c = p[5]), (d = p[6]))
          let m = void 0 === o ? "default" : o,
            b = void 0 === u || u,
            g = void 0 === c ? "default" : c
          return (
            p[7] !== t || p[8] !== m || p[9] !== b || p[10] !== g || p[11] !== d
              ? ((f = (0, l.A)(
                  "flex flex-col overflow-hidden",
                  "search" === g &&
                    "select-none rounded-2xl border border-default bg-surface-elevated-secondary p-3 shadow-lg",
                  "floating" === g
                    ? ["select-none", (0, r.MX)("menu")]
                    : "default" === g && [
                        "border-default bg-surface-elevated-secondary relative w-full rounded-[var(--radius-suggestion-menu,var(--radius-2xl))] border-(length:--suggestion-menu-border-width,1px) shadow-(--suggestion-menu-shadow,none) text-sm",
                        b && a.A.suggestionMenu,
                      ],
                  (0, r.xk)(d),
                  "compact" === m && a.A.compactSuggestionMenu,
                  t,
                )),
                (p[7] = t),
                (p[8] = m),
                (p[9] = b),
                (p[10] = g),
                (p[11] = d),
                (p[12] = f))
              : (f = p[12]),
            p[13] !== i || p[14] !== f
              ? ((h = (0, s.jsx)("div", { className: f, ...i })), (p[13] = i), (p[14] = f), (p[15] = h))
              : (h = p[15]),
            h
          )
        },
        t: function (e) {
          let t,
            i,
            r,
            a,
            o,
            u,
            c = (0, n.c)(12)
          c[0] !== e
            ? (({ className: t, highlighted: i, variant: a, ...r } = e),
              (c[0] = e),
              (c[1] = t),
              (c[2] = i),
              (c[3] = r),
              (c[4] = a))
            : ((t = c[1]), (i = c[2]), (r = c[3]), (a = c[4]))
          let d =
              "search" === (void 0 === a ? "default" : a)
                ? "min-h-9 gap-1.5 rounded-[10px] px-2.5 py-1.5 text-[13px] leading-[18px] font-[510] tracking-[-0.08px] hover:bg-secondary-ghost-hover"
                : "min-h-[var(--app-menu-item-height,0px)] rounded-[var(--suggestion-menu-item-radius,var(--radius-xl))] p-[var(--suggestion-menu-item-padding,var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x)))] text-sm",
            f = i ? "bg-secondary-ghost-hover opacity-100" : "menu-row-opacity"
          return (
            c[5] !== t || c[6] !== d || c[7] !== f
              ? ((o = (0, l.A)(
                  "text-default outline-hidden focus:bg-secondary-ghost-hover cursor-interaction flex w-full shrink-0 items-center overflow-hidden text-start",
                  d,
                  "[content-visibility:auto] [contain-intrinsic-block-size:auto_1lh]",
                  f,
                  t,
                )),
                (c[5] = t),
                (c[6] = d),
                (c[7] = f),
                (c[8] = o))
              : (o = c[8]),
            c[9] !== r || c[10] !== o
              ? ((u = (0, s.jsx)("button", { className: o, type: "button", ...r })),
                (c[9] = r),
                (c[10] = o),
                (c[11] = u))
              : (u = c[11]),
            u
          )
        },
      },
    )
  },
  oBzA(e, t, i) {
    i.d(t, { d: () => R })
    var s = i("ABep"),
      n = i("QosV"),
      l = i("irkb"),
      r = i("T0Rc"),
      a = i("zd8w"),
      o = i("oyxz"),
      u = i("UOa8"),
      c = i("qmMi"),
      d = i("SPnB"),
      f = i("g2p6"),
      h = i("JNtf"),
      p = i("uXTt"),
      m = i("OWtl"),
      b = i("WFY2"),
      g = i("OLDo"),
      v = i("kmlc"),
      y = i("zU42"),
      x = i("mUDD"),
      w = i("HOLv"),
      _ = i("RNul"),
      j = i("zJJi"),
      A = i("AVh7"),
      C = i("ty20")
    function S(e) {
      let t,
        i,
        l = (0, n.c)(9),
        { businessName: r, loading: a, pending: u, error: c, onContinue: d } = e,
        f = void 0 !== a && a,
        p = void 0 !== u && u,
        m = f ? "full" : "viewport"
      return (
        l[0] !== r || l[1] !== c || l[2] !== f || l[3] !== d || l[4] !== p
          ? ((t = f
              ? (0, s.jsxs)("div", {
                  className:
                    "flex h-full flex-col items-center justify-center gap-6 bg-surface-card p-8 text-center text-default select-none",
                  children: [
                    (0, s.jsx)(h.L3, {
                      className: "text-heading-lg font-semibold",
                      children: (0, s.jsx)(o.A, {
                        id: "businessProfiles.claimOnboarding.loadingTitle",
                        defaultMessage: "Claim profile",
                      }),
                    }),
                    (0, s.jsx)(_.y, {}),
                  ],
                })
              : (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4 text-default select-none",
                  children: [
                    (0, s.jsxs)("picture", {
                      children: [
                        (0, s.jsx)("source", { media: "(max-width: 639px)", srcSet: A }),
                        (0, s.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: j }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-6 px-6 pb-6 sm:px-8 sm:pb-10",
                      children: [
                        (0, s.jsx)(h.L3, {
                          className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
                          children: (0, s.jsx)(o.A, {
                            id: "businessProfiles.claimOnboarding.title",
                            defaultMessage: "Claim {businessName} in ChatGPT",
                            values: { businessName: r },
                          }),
                        }),
                        (0, s.jsxs)("ul", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, s.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, s.jsx)(w.I, { asset: g.w, className: "shrink-0" }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.engagementTitle",
                                        defaultMessage: "See how your business shows up",
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.engagementDescription",
                                        defaultMessage:
                                          "Track how often your business is mentioned in ChatGPT conversations.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, s.jsx)(w.I, { asset: v.T, className: "shrink-0" }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.discoverTitle",
                                        defaultMessage: "Show customers what you offer",
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.discoverDescription",
                                        defaultMessage:
                                          "Add your latest products and keep your business info up to date.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, s.jsx)(w.I, { asset: y.G, className: "shrink-0" }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.agentTitle",
                                        defaultMessage: "Help customers make decisions",
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, s.jsx)(o.A, {
                                        id: "businessProfiles.claimOnboarding.agentDescription",
                                        defaultMessage:
                                          "Let your business agent answer their questions with context you control.",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(h.rr, {
                          className: "text-center text-sm text-secondary",
                          children: (0, s.jsx)(o.A, {
                            id: "businessProfiles.claimOnboarding.verificationNotice",
                            defaultMessage:
                              "You\u2019ll need to verify that you\u2019re authorized to represent {businessName}.",
                            values: { businessName: r },
                          }),
                        }),
                        c,
                        (0, s.jsx)(C.d, {
                          loading: p,
                          className: "w-full",
                          size: "formAction",
                          color: "primary",
                          onClick: d,
                          children: (0, s.jsx)(o.A, {
                            id: "businessProfiles.claimOnboarding.getStarted",
                            defaultMessage: "Get started",
                          }),
                        }),
                      ],
                    }),
                  ],
                })),
            (l[0] = r),
            (l[1] = c),
            (l[2] = f),
            (l[3] = d),
            (l[4] = p),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== m || l[7] !== t
          ? ((i = (0, s.jsx)(x.R4, { size: m, variant: "chatgpt", children: t })), (l[6] = m), (l[7] = t), (l[8] = i))
          : (i = l[8]),
        i
      )
    }
    var I = i("R8Ag")
    let k = "oai/apps/hasSeenBusinessProfileClaimOnboarding"
    function E(e) {
      try {
        b.v.warning("Business profile claim onboarding unavailable", { safe: { reason: e } })
      } catch {}
    }
    function D(e) {
      let t,
        i = (0, n.c)(12)
      if ("onClaim" in e) {
        let t, n, l
        return (
          i[0] !== e
            ? ((t = (t) => {
                t || e.onClose()
              }),
              (i[0] = e),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== e.businessName || i[3] !== e.error || i[4] !== e.onClaim || i[5] !== e.pending
            ? ((n = (0, s.jsx)(S, {
                businessName: e.businessName,
                pending: e.pending,
                error: e.error,
                onContinue: e.onClaim,
              })),
              (i[2] = e.businessName),
              (i[3] = e.error),
              (i[4] = e.onClaim),
              (i[5] = e.pending),
              (i[6] = n))
            : (n = i[6]),
          i[7] !== t || i[8] !== n
            ? ((l = (0, s.jsx)(h.lG, {
                open: !0,
                size: "edgeToEdgeSheet",
                variant: "promotional",
                onOpenChange: t,
                children: n,
              })),
              (i[7] = t),
              (i[8] = n),
              (i[9] = l))
            : (l = i[9]),
          l
        )
      }
      return (i[10] !== e ? ((t = (0, s.jsx)(N, { ...e })), (i[10] = e), (i[11] = t)) : (t = i[11]), t)
    }
    function N(e) {
      let t,
        i,
        l,
        r,
        a = (0, n.c)(9)
      ;(a[0] !== e ? (({ required: i, ...t } = e), (a[0] = e), (a[1] = t), (a[2] = i)) : ((t = a[1]), (i = a[2])),
        a[3] !== i ? ((l = { enabled: i }), (a[3] = i), (a[4] = l)) : (l = a[4]))
      let o = (0, c.Ul)(d.o8, l)
      return (
        a[5] !== t || a[6] !== o || a[7] !== i
          ? ((r = i ? (0, s.jsx)(M, { ...t }, String(o)) : (0, s.jsx)(s.Fragment, { children: t.children })),
            (a[5] = t),
            (a[6] = o),
            (a[7] = i),
            (a[8] = r))
          : (r = a[8]),
        r
      )
    }
    function M(e) {
      let t,
        i,
        l,
        r,
        o,
        b,
        g,
        v,
        y,
        x,
        w,
        _,
        j,
        A,
        C,
        D,
        N,
        M,
        P,
        T,
        F,
        L,
        R,
        W,
        B = (0, n.c)(63),
        { businessName: O, children: z, onClose: $, telemetryJourney: q } = e,
        U = (0, c.gh)(m.u),
        { accountId: V } = (0, u.As)(),
        K = (0, c.Ul)(f.Sk),
        H = (0, c.Ul)(d.o8),
        J = null != V && K === V && null != H
      B[0] !== J ? ((t = { enabled: J }), (B[0] = J), (B[1] = t)) : (t = B[1])
      let { data: G, isError: Q } = (0, c.Ul)(f.s6, t),
        [Z, X] = (0, a.useState)(!1),
        [Y, ee] = (0, a.useState)(null)
      !Z && Q && null == Y && ee("settings_read")
      let et = !J || null == G,
        ei = (0, a.useRef)(null),
        es = (0, a.useRef)(null),
        en = (0, a.useRef)(!1),
        el = null != Y || (J && (Z || (Q && null == G) || G?.seenAnnouncements?.[k] != null))
      ;(B[2] !== el || B[3] !== et || B[4] !== U || B[5] !== q
        ? ((i = () => (el ? void 0 : (0, I.fY)(U, q, et ? "entry" : "onboarding"))),
          (l = [U, q, et, el]),
          (B[2] = el),
          (B[3] = et),
          (B[4] = U),
          (B[5] = q),
          (B[6] = i),
          (B[7] = l))
        : ((i = B[6]), (l = B[7])),
        (0, a.useEffect)(i, l),
        B[8] !== Y || B[9] !== U || B[10] !== q
          ? ((r = () => {
              if (null != Y) {
                let e = (0, I.x$)(U, q, "entry", "load")
                ;(0, I.BR)(U, q, e, "failed", "settings_timeout" === Y ? "timeout" : "unavailable")
              }
            }),
            (o = [U, q, Y]),
            (B[8] = Y),
            (B[9] = U),
            (B[10] = q),
            (B[11] = r),
            (B[12] = o))
          : ((r = B[11]), (o = B[12])),
        (0, a.useEffect)(r, o),
        B[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = () => () => ei.current?.abort()), (g = []), (B[13] = b), (B[14] = g))
          : ((b = B[13]), (g = B[14])),
        (0, a.useEffect)(b, g),
        B[15] !== Y
          ? ((v = () => {
              null != Y && "render" !== Y && E(Y)
            }),
            (y = [Y]),
            (B[15] = Y),
            (B[16] = v),
            (B[17] = y))
          : ((v = B[16]), (y = B[17])),
        (0, a.useEffect)(v, y),
        B[18] !== Y || B[19] !== Z || B[20] !== et
          ? ((x = () => {
              if (Z || null != Y || !et) return
              let e = setTimeout(() => {
                ee("settings_timeout")
              }, 3e3)
              return () => clearTimeout(e)
            }),
            (w = [Y, Z, et]),
            (B[18] = Y),
            (B[19] = Z),
            (B[20] = et),
            (B[21] = x),
            (B[22] = w))
          : ((x = B[21]), (w = B[22])),
        (0, a.useEffect)(x, w),
        B[23] !== $ || B[24] !== U || B[25] !== q
          ? ((_ = () => {
              ;((0, I.wj)(U, q), (en.current = !0), ei.current?.abort(), $())
            }),
            (B[23] = $),
            (B[24] = U),
            (B[25] = q),
            (B[26] = _))
          : (_ = B[26]))
      let er = _
      B[27] !== V || B[28] !== J || B[29] !== H || B[30] !== U || B[31] !== G || B[32] !== q
        ? ((j = async () => {
            if (!J || !G || null != ei.current) return
            let e = new AbortController()
            ei.current = e
            let t = (0, I.x$)(U, q, "onboarding", "continue")
            ;(X(!0), (0, I.BR)(U, q, t, "succeeded"))
            try {
              ;(await (0, f.hs)(U, V, k, { userId: H, signal: e.signal })) || E("acknowledgement_unpersisted")
            } catch {
              e.signal.aborted || E("acknowledgement_write")
            }
          }),
          (B[27] = V),
          (B[28] = J),
          (B[29] = H),
          (B[30] = U),
          (B[31] = G),
          (B[32] = q),
          (B[33] = j))
        : (j = B[33])
      let ea = j
      if (el) {
        let e
        return (
          B[34] !== z ? ((e = (0, s.jsx)(s.Fragment, { children: z })), (B[34] = z), (B[35] = e)) : (e = B[35]),
          e
        )
      }
      ;(B[36] !== z ? ((A = (0, s.jsx)(s.Fragment, { children: z })), (B[36] = z), (B[37] = A)) : (A = B[37]),
        B[38] === Symbol.for("react.memo_cache_sentinel") ? ((C = () => ee("render")), (B[38] = C)) : (C = B[38]))
      let eo = et ? void 0 : "edgeToEdgeSheet",
        eu = et ? void 0 : "promotional"
      return (
        B[39] !== et ? ((D = et ? { "aria-describedby": void 0 } : {}), (B[39] = et), (B[40] = D)) : (D = B[40]),
        B[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = () => {
              es.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
            }),
            (M = (e) => {
              ;(e.preventDefault(), en.current && es.current?.isConnected && es.current.focus({ preventScroll: !0 }))
            }),
            (B[41] = N),
            (B[42] = M))
          : ((N = B[41]), (M = B[42])),
        B[43] !== D ? ((P = { ...D, onOpenAutoFocus: N, onCloseAutoFocus: M }), (B[43] = D), (B[44] = P)) : (P = B[44]),
        B[45] !== er
          ? ((T = (e) => {
              e || er()
            }),
            (B[45] = er),
            (B[46] = T))
          : (T = B[46]),
        B[47] !== ea ? ((F = () => void ea()), (B[47] = ea), (B[48] = F)) : (F = B[48]),
        B[49] !== O || B[50] !== et || B[51] !== F
          ? ((L = (0, s.jsx)(S, { businessName: O, loading: et, onContinue: F })),
            (B[49] = O),
            (B[50] = et),
            (B[51] = F),
            (B[52] = L))
          : (L = B[52]),
        B[53] !== et || B[54] !== eo || B[55] !== eu || B[56] !== P || B[57] !== T || B[58] !== L
          ? ((R = (0, s.jsx)(h.lG, {
              open: !0,
              size: eo,
              variant: eu,
              unstyledContent: et,
              viewportSized: et,
              closeButtonSize: "large",
              contentProps: P,
              onOpenChange: T,
              children: L,
            })),
            (B[53] = et),
            (B[54] = eo),
            (B[55] = eu),
            (B[56] = P),
            (B[57] = T),
            (B[58] = L),
            (B[59] = R))
          : (R = B[59]),
        B[60] !== A || B[61] !== R
          ? ((W = (0, s.jsx)(p.t, { name: "BusinessProfileClaimOnboarding", fallback: A, onError: C, children: R })),
            (B[60] = A),
            (B[61] = R),
            (B[62] = W))
          : (W = B[62]),
        W
      )
    }
    var P = i("Fo5J"),
      T = i("c4T0"),
      F = i("bY2S"),
      L = i("sXew")
    function R(e) {
      let t,
        i,
        l = (0, n.c)(5),
        r = e.accountId,
        a = e.userId,
        o = e.interestType
      l[0] !== e.target ? ((t = JSON.stringify(e.target)), (l[0] = e.target), (l[1] = t)) : (t = l[1])
      let u = `${r}:${a}:${o}:${t}`
      return (
        l[2] !== e || l[3] !== u ? ((i = (0, s.jsx)(W, { ...e }, u)), (l[2] = e), (l[3] = u), (l[4] = i)) : (i = l[4]),
        i
      )
    }
    function W(e) {
      let t,
        i,
        c,
        d,
        f,
        h,
        p,
        m,
        b,
        g,
        v,
        y,
        x,
        w,
        _ = (0, n.c)(75),
        {
          accountId: j,
          userId: A,
          interestType: C,
          funnelJourneyId: S,
          target: I,
          businessName: k,
          required: E,
          dispute: N,
          verifyAccess: M,
          fallback: R,
          preview: W,
          onClose: B,
          onDone: O,
          onBack: z,
          onAdmitted: $,
          onCheckFailed: q,
          children: U,
        } = e,
        V = void 0 === O ? B : O,
        K = void 0 === z ? B : z,
        H = (0, a.useId)(),
        { email: J } = (0, u.As)(),
        [G, Q] = (0, a.useState)(!1),
        [Z, X] = (0, a.useState)(!1),
        [Y, ee] = (0, a.useState)(),
        et = (0, a.useRef)(!0),
        ei = (0, a.useRef)(!1)
      ;(_[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => (
            (et.current = !0),
            () => {
              et.current = !1
            }
          )),
          (i = []),
          (_[0] = t),
          (_[1] = i))
        : ((t = _[0]), (i = _[1])),
        (0, a.useEffect)(t, i))
      let es = (0, l.jE)()
      _[2] !== j || _[3] !== H || _[4] !== C || _[5] !== I || _[6] !== A
        ? ((c = ["business-profile-entry", j, A, C, I, H]),
          (_[2] = j),
          (_[3] = H),
          (_[4] = C),
          (_[5] = I),
          (_[6] = A),
          (_[7] = c))
        : (c = _[7])
      let en = c
      _[8] !== j || _[9] !== C || _[10] !== E || _[11] !== I || _[12] !== A || _[13] !== M
        ? ((d = async (e) => {
            let { signal: t } = e
            return (await M?.(), t.throwIfAborted(), E ? (0, L.En)({ accountId: j, userId: A }, C, t, I) : "continue")
          }),
          (_[8] = j),
          (_[9] = C),
          (_[10] = E),
          (_[11] = I),
          (_[12] = A),
          (_[13] = M),
          (_[14] = d))
        : (d = _[14])
      let el = (E && !G) || null != M
      _[15] !== en || _[16] !== d || _[17] !== el
        ? ((f = {
            queryKey: en,
            queryFn: d,
            enabled: el,
            staleTime: 1 / 0,
            gcTime: 0,
            retry: !1,
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (_[15] = en),
          (_[16] = d),
          (_[17] = el),
          (_[18] = f))
        : (f = _[18])
      let { data: er, isError: ea, isFetching: eo, refetch: eu } = (0, r.I)(f),
        ec = N || "creation" === C,
        ed = (0, a.useRef)(!1)
      ;(_[19] !== ec || _[20] !== er || _[21] !== $ || _[22] !== E
        ? ((p = () => {
            ec && E && !ed.current && "continue" === er && ((ed.current = !0), $?.())
          }),
          (h = [ec, E, er, $]),
          (_[19] = ec),
          (_[20] = er),
          (_[21] = $),
          (_[22] = E),
          (_[23] = h),
          (_[24] = p))
        : ((h = _[23]), (p = _[24])),
        (0, a.useEffect)(p, h),
        _[25] !== ea || _[26] !== q
          ? ((m = () => {
              ea && q?.()
            }),
            (b = [ea, q]),
            (_[25] = ea),
            (_[26] = q),
            (_[27] = m),
            (_[28] = b))
          : ((m = _[27]), (b = _[28])),
        (0, a.useEffect)(m, b),
        _[29] !== $
          ? ((g = function () {
              ;(ee(void 0), Q(!0), $?.())
            }),
            (_[29] = $),
            (_[30] = g))
          : (g = _[30]))
      let ef = g
      _[31] !== ef || _[32] !== es || _[33] !== en || _[34] !== eu
        ? ((v = async function () {
            if (ei.current) return
            ;((ei.current = !0), X(!0))
            let e = es.getQueryData(en) ?? (await eu({ cancelRefetch: !1 })).data
            ;((ei.current = !1), et.current && (X(!1), "continue" === e ? ef() : e && ee(e)))
          }),
          (_[31] = ef),
          (_[32] = es),
          (_[33] = en),
          (_[34] = eu),
          (_[35] = v))
        : (v = _[35])
      let eh = v
      if (G || (ec && "continue" === er)) {
        let e
        return (
          _[36] !== U ? ((e = (0, s.jsx)(s.Fragment, { children: U })), (_[36] = U), (_[37] = e)) : (e = _[37]),
          e
        )
      }
      if (!E && (null == M || "continue" === er)) {
        let e
        return (
          _[38] !== U ? ((e = (0, s.jsx)(s.Fragment, { children: U })), (_[38] = U), (_[39] = e)) : (e = _[39]),
          e
        )
      }
      if (!E || (ec && !er)) {
        let e, t
        return (
          _[40] !== ea || _[41] !== K || _[42] !== q || _[43] !== eu
            ? ((e = ea && null == q && (0, s.jsx)(T.W, { onBack: K, onRetry: () => void eu() })),
              (_[40] = ea),
              (_[41] = K),
              (_[42] = q),
              (_[43] = eu),
              (_[44] = e))
            : (e = _[44]),
          _[45] !== R || _[46] !== e
            ? ((t = (0, s.jsxs)(s.Fragment, { children: [R, e] })), (_[45] = R), (_[46] = e), (_[47] = t))
            : (t = _[47]),
          t
        )
      }
      let ep = Y ?? (ec && "continue" !== er ? er : void 0)
      if (ep) {
        let e, t
        return (
          _[48] !== k || _[49] !== C
            ? ((e = "creation" === C ? (0, P.Gk)((0, P.vm)(k)) : void 0), (_[48] = k), (_[49] = C), (_[50] = e))
            : (e = _[50]),
          _[51] !== j ||
          _[52] !== k ||
          _[53] !== J ||
          _[54] !== S ||
          _[55] !== C ||
          _[56] !== K ||
          _[57] !== V ||
          _[58] !== W ||
          _[59] !== ef ||
          _[60] !== ep ||
          _[61] !== e ||
          _[62] !== I ||
          _[63] !== A
            ? ((t = (0, s.jsx)(F.$, {
                accountId: j,
                userId: A,
                email: J,
                interestType: C,
                funnelJourneyId: S,
                businessName: k,
                target: I,
                preview: W,
                pageManager: e,
                initialStatus: ep,
                onBack: K,
                onDone: V,
                onContinue: ef,
              })),
              (_[51] = j),
              (_[52] = k),
              (_[53] = J),
              (_[54] = S),
              (_[55] = C),
              (_[56] = K),
              (_[57] = V),
              (_[58] = W),
              (_[59] = ef),
              (_[60] = ep),
              (_[61] = e),
              (_[62] = I),
              (_[63] = A),
              (_[64] = t))
            : (t = _[64]),
          t
        )
      }
      _[65] !== eh ? ((y = () => void eh()), (_[65] = eh), (_[66] = y)) : (y = _[66])
      let em = Z || ("claim" === C && eo)
      return (
        _[67] !== ea
          ? ((x = ea
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-danger",
                  children: (0, s.jsx)(o.A, {
                    id: "businessProfiles.entry.retryClaim",
                    defaultMessage: "Couldn\u2019t check access. Try again.",
                  }),
                })
              : void 0),
            (_[67] = ea),
            (_[68] = x))
          : (x = _[68]),
        _[69] !== k || _[70] !== K || _[71] !== y || _[72] !== em || _[73] !== x
          ? ((w = (0, s.jsx)(D, { businessName: k, onClose: K, onClaim: y, pending: em, error: x })),
            (_[69] = k),
            (_[70] = K),
            (_[71] = y),
            (_[72] = em),
            (_[73] = x),
            (_[74] = w))
          : (w = _[74]),
        w
      )
    }
  },
  Qrmn(e, t, i) {
    i.d(t, { BusinessProfilesSearchView: () => t6 })
    var s = i("ABep"),
      n = i("QosV"),
      l = i("zGRL"),
      r = i("qmMi"),
      a = i("zd8w"),
      o = i("v7qY"),
      u = i("Wf1j"),
      c = i("oyxz"),
      d = i("Ywss"),
      f = i("SPnB"),
      h = i("UOa8"),
      p = i("rCC2"),
      m = i("g2p6"),
      b = i("Sm6l"),
      g = i("bVeK"),
      v = i("okCa"),
      y = i("PkPj"),
      x = i("RNul"),
      w = i("Lx2J"),
      _ = i("ibLK"),
      j = i("OWtl"),
      A = i("OMIV"),
      C = i("WFY2"),
      S = i("iC84"),
      I = i("jUt5"),
      k = i("rR1h"),
      E = i("OLDo"),
      D = i("kmlc"),
      N = i("zU42"),
      M = i("JNtf"),
      P = i("mUDD"),
      T = i("HOLv"),
      F = i("zJJi"),
      L = i("AVh7")
    function R(e) {
      let t,
        i,
        l,
        r,
        a,
        o,
        u,
        d,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        x,
        w,
        _,
        j = (0, n.c)(31),
        { creationEnabled: A, open: C, onClose: S, onContinue: I, onReturnFocus: k } = e,
        R = void 0 !== A && A
      ;(j[0] !== k
        ? ((t = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), k())
            },
          }),
          (j[0] = k),
          (j[1] = t))
        : (t = j[1]),
        j[2] !== S
          ? ((i = (e) => {
              e || S()
            }),
            (j[2] = S),
            (j[3] = i))
          : (i = j[3]),
        j[4] !== R || j[5] !== I
          ? ((l = (e) => {
              ;(e.preventDefault(), R && I())
            }),
            (j[4] = R),
            (j[5] = I),
            (j[6] = l))
          : (l = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsxs)("picture", {
              children: [
                (0, s.jsx)("source", { media: "(max-width: 639px)", srcSet: L }),
                (0, s.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: F }),
              ],
            })),
            (j[7] = r))
          : (r = j[7]),
        j[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(M.L3, {
              className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creationOnboarding.addBusiness.title",
                defaultMessage: "Add your business to ChatGPT",
              }),
            })),
            (j[8] = a))
          : (a = j[8]),
        j[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(T.I, { asset: E.w, className: "shrink-0" })), (j[9] = o))
          : (o = j[9]),
        j[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creationOnboarding.mentions.title",
                defaultMessage: "See how your business shows up",
              }),
            })),
            (j[10] = u))
          : (u = j[10]),
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                o,
                (0, s.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    u,
                    (0, s.jsx)("p", {
                      className: "text-secondary",
                      children: (0, s.jsx)(c.A, {
                        id: "businessProfiles.creationOnboarding.mentions.description",
                        defaultMessage: "Track how often your business is mentioned in ChatGPT conversations.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[11] = d))
          : (d = j[11]),
        j[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(T.I, { asset: D.T, className: "shrink-0" })), (j[12] = f))
          : (f = j[12]),
        j[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creationOnboarding.offerings.title",
                defaultMessage: "Show customers what you offer",
              }),
            })),
            (j[13] = h))
          : (h = j[13]),
        j[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                f,
                (0, s.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    h,
                    (0, s.jsx)("p", {
                      className: "text-secondary",
                      children: (0, s.jsx)(c.A, {
                        id: "businessProfiles.creationOnboarding.offerings.description",
                        defaultMessage: "Add your latest products and keep your business info up to date.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[14] = p))
          : (p = j[14]),
        j[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(T.I, { asset: N.G, className: "shrink-0" })), (j[15] = m))
          : (m = j[15]),
        j[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creationOnboarding.agent.title",
                defaultMessage: "Help customers make decisions",
              }),
            })),
            (j[16] = g))
          : (g = j[16]),
        j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, s.jsxs)("div", {
              className: "flex flex-col gap-6 sm:gap-4",
              children: [
                a,
                (0, s.jsxs)("ul", {
                  className: "flex flex-col gap-4",
                  children: [
                    d,
                    p,
                    (0, s.jsxs)("li", {
                      className: "flex items-start gap-3",
                      children: [
                        m,
                        (0, s.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                          children: [
                            g,
                            (0, s.jsx)("p", {
                              className: "text-secondary",
                              children: (0, s.jsx)(c.A, {
                                id: "businessProfiles.creationOnboarding.agent.description",
                                defaultMessage:
                                  "Let your business agent answer their questions with context you control.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (j[17] = v))
          : (v = j[17]))
      let W = !R
      return (
        j[18] !== R
          ? ((y = R
              ? (0, s.jsx)(c.A, {
                  id: "businessProfiles.creationOnboarding.continue.label",
                  defaultMessage: "Get started",
                })
              : (0, s.jsx)(c.A, {
                  id: "businessProfiles.creationOnboarding.comingSoon.label",
                  defaultMessage: "Coming soon",
                })),
            (j[18] = R),
            (j[19] = y))
          : (y = j[19]),
        j[20] !== W || j[21] !== y
          ? ((x = (0, s.jsxs)("div", {
              className: "flex flex-col text-default select-none",
              children: [
                r,
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-6 p-6 sm:px-8 sm:pt-4 sm:pb-10",
                  children: [
                    v,
                    (0, s.jsx)(b.$, {
                      className: "w-full",
                      disabled: W,
                      type: "submit",
                      size: "formAction",
                      color: "primary",
                      children: y,
                    }),
                  ],
                }),
              ],
            })),
            (j[20] = W),
            (j[21] = y),
            (j[22] = x))
          : (x = j[22]),
        j[23] !== x || j[24] !== l
          ? ((w = (0, s.jsx)(P.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: l, children: x })),
            (j[23] = x),
            (j[24] = l),
            (j[25] = w))
          : (w = j[25]),
        j[26] !== C || j[27] !== w || j[28] !== t || j[29] !== i
          ? ((_ = (0, s.jsx)(M.lG, {
              open: C,
              size: "responsiveSheet",
              variant: "promotional",
              closeButtonSize: "large",
              contentProps: t,
              onOpenChange: i,
              children: w,
            })),
            (j[26] = C),
            (j[27] = w),
            (j[28] = t),
            (j[29] = i),
            (j[30] = _))
          : (_ = j[30]),
        _
      )
    }
    var W = i("oBzA"),
      B = i("OAFn"),
      O = i("Fo5J"),
      z = i("cteK"),
      $ = i("v7Fs"),
      q = i("Hekr"),
      U = i("PLux"),
      V = i("mKdD"),
      K = i("irkb"),
      H = i("D7Ms"),
      J = i("fxCc"),
      G = i("T0Rc"),
      Q = i("pmIL"),
      Z = i("SGsN"),
      X = i("ZEx5"),
      Y = i("OHD8"),
      ee = i("eShZ"),
      et = i("NeEy"),
      ei = i("HTR2"),
      es = i("ty20"),
      en = i("kIbj"),
      el = i("T70E"),
      er = i("py8O"),
      ea = i("nBtg"),
      eo = i("VMws"),
      eu = i("GYJ9"),
      ec = i("oFFd"),
      ed = i("v7Di"),
      ef = i("cvkI"),
      eh = i("RER9"),
      ep = i("ntZH"),
      em = i("Md9P"),
      eb = i("kArL"),
      eg = i("bKwc"),
      ev = i("Nspi"),
      ey = i("oZQC"),
      ex = i("AW7I"),
      ew = i("fi0l"),
      e_ = i("nhlW"),
      ej = i("bY2S"),
      eA = i("sXew"),
      eC = i("LwFr")
    function eS(e) {
      let t = e.normalize("NFKC").toLowerCase().replace(/\s/gu, "")
      return t.replace(/\p{P}/gu, "") || t
    }
    var eI = i("Cr32"),
      ek = i("Nx5n"),
      eE = i("QS9J"),
      eD = i("DzNl"),
      eN = i("SOml"),
      eM = i("XcNx"),
      eP = i("T1PX"),
      eT = i("UF7O"),
      eF = i("Ctl0"),
      eL = i("YHga"),
      eR = i("Ls9F"),
      eW = i("uAf3"),
      eB = i("l4He")
    function eO(e) {
      if (null != e) return (0, eE.E)(e, eN.i)
    }
    function ez(e) {
      let t,
        i,
        l,
        r,
        o,
        d,
        f,
        p,
        m,
        b,
        g,
        v,
        y,
        x,
        w,
        _,
        j,
        A,
        C,
        S = (0, n.c)(44),
        {
          acquisitionJourneyId: I,
          accountId: k,
          matches: E,
          preparedProfile: D,
          matchedAddress: N,
          selectionQueryKey: P,
          onClose: T,
          onCloseAfterApproval: F,
          onWaitlistDone: L,
          onContinueCreation: R,
          onClaimApproved: B,
        } = e,
        O = (0, u.A)(),
        z = (0, eP.I)(),
        $ = (0, h.As)(),
        q = 1 === E.length ? E[0] : void 0,
        [U, V] = (0, a.useState)(E[0]?.id ?? ""),
        [K, Q] = (0, a.useState)()
      S[0] !== k || S[1] !== $.userId || S[2] !== K || S[3] !== O.locale || S[4] !== U
        ? ((t = ["creation-chooser-claim", k, $.userId, O.locale, U, K]),
          (S[0] = k),
          (S[1] = $.userId),
          (S[2] = K),
          (S[3] = O.locale),
          (S[4] = U),
          (S[5] = t))
        : (t = S[5])
      let Z = t,
        { isPending: X } = (0, J.E)({ queries: K ? [{ queryKey: Z, queryFn: H.hT, gcTime: 0 }] : [] })[0] ?? {}
      S[6] !== U ? ((i = (e) => e.id === U), (S[6] = U), (S[7] = i)) : (i = S[7])
      let Y = E.find(i)
      S[8] !== N
        ? ((l = function (e) {
            return e?.address || (e?.hasExactAddress ? N : void 0)
          }),
          (S[8] = N),
          (S[9] = l))
        : (l = S[9])
      let et = l,
        ei = Y?.profile,
        es = Y?.place,
        en =
          null != es ||
          (null != ei &&
            !ei.can_manage &&
            null == ei.ownership.current_request &&
            ("claim" === ei.ownership.available_action || "dispute" === ei.ownership.available_action)),
        {
          data: el,
          error: er,
          isLoading: ea,
        } = (0, G.I)({
          queryKey: ["business-profile-creation-match-details", k, $.userId, Y?.id, O.locale],
          enabled:
            (null != es ||
              (ei?.business_type === "local" && (null == P || "dispute" === ei.ownership.available_action))) &&
            $.accountId === k &&
            null != $.userId,
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          queryFn: async (e) => {
            let { signal: t } = e
            if (null != es)
              return (0, eR.KQ)(es.entity_lookup_id, {
                accountId: k,
                locale: O.locale,
                signal: AbortSignal.any([t, AbortSignal.timeout(3e3)]),
              })
            if (null == ei) return null
            let i = await (0, eL.V)({
              profileId: ei.business_profile_id,
              expectedAction: ei.ownership.available_action,
              accountId: k,
              signal: t,
            })
            return (t.throwIfAborted(), null == i)
              ? null
              : (0, eR.KQ)(i.entity_lookup_id, { accountId: k, locale: O.locale, signal: t })
          },
        }),
        eu = null
      S[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = function () {
            Q(void 0)
          }),
          (S[10] = r))
        : (r = S[10])
      let ec = r
      ;(null != P || null != K) &&
        null != Y &&
        (eu = (0, s.jsx)(ev.CanonicalProfileClaim, {
          acquisitionJourneyId: I,
          accountId: k,
          entryAdmitted: en,
          telemetryEntryPoint: "creation_duplicate",
          ...(Y.place ? { place: Y.place } : { profileId: Y.profile.business_profile_id, preparedProfile: D }),
          onCreationClaimUnavailable: null != Y.place ? (e) => R("unavailable", e) : void 0,
          onCreationClaimApproved: B,
          onWaitlistDone: L,
          onCloseAfterApproval: F,
          replaceOnAgentCompletion: !0,
          onBackToMatchPicker: null == K ? void 0 : ec,
          allowCreationDispute: !0,
          selectionQueryKey: P ?? Z,
          showLoadingDialog: !1,
          waitingForPlaceDetails: null != es && ea,
          publicDetails: el ?? void 0,
          readRegisteredPlace:
            null != es && er instanceof ee.FetchError && 404 === er.status
              ? (e) => (0, eR.KQ)(es.entity_lookup_id, { accountId: k, locale: O.locale, signal: e })
              : void 0,
          onClose: T,
        }))
      let ed = ei ? (0, eT.sX)(ei, el ?? void 0) : es && (0, eT.qn)(es, el ?? void 0)
      ;(S[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, eM.x)({ browser: !0 })), (S[11] = o))
        : (o = S[11]),
        S[12] !== T ? ((d = () => T()), (S[12] = T), (S[13] = d)) : (d = S[13]),
        S[14] !== I
          ? ((f = (0, s.jsx)(eo.I, { flow: "create", screen: "existing_profile_match", journeyId: I })),
            (S[14] = I),
            (S[15] = f))
          : (f = S[15]),
        S[16] !== O ? ((p = O.formatMessage(eB.W.chatNavigation)), (S[16] = O), (S[17] = p)) : (p = S[17]),
        S[18] !== T ? ((m = () => T()), (S[18] = T), (S[19] = m)) : (m = S[19]),
        S[20] !== q
          ? ((b = (0, s.jsx)(M.L3, {
              className: "text-heading-app leading-tight font-normal",
              children: q
                ? (0, s.jsx)(c.A, {
                    id: "businessProfiles.creation.match.choiceTitle",
                    defaultMessage: "Is this your business?",
                  })
                : (0, s.jsx)(c.A, {
                    id: "businessProfiles.creation.match.addressChoices",
                    defaultMessage: "Is one of these businesses yours?",
                  }),
            })),
            (S[20] = q),
            (S[21] = b))
          : (b = S[21]),
        S[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)("p", {
              role: "status",
              className: "text-sm text-secondary",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creation.match.found",
                defaultMessage: "We found an existing business with matching info.",
              }),
            })),
            (S[22] = g))
          : (g = S[22]))
      let ef = null != K
      ;(S[23] !== O
        ? ((v = O.formatMessage({
            id: "businessProfiles.creation.match.choiceLabel",
            defaultMessage: "Existing business",
          })),
          (S[23] = O),
          (S[24] = v))
        : (v = S[24]),
        S[25] !== et || S[26] !== E || S[27] !== q
          ? ((y = q
              ? (0, s.jsx)(eD.z.Item, {
                  value: q.id,
                  block: !0,
                  children: (0, s.jsxs)("span", {
                    className: "flex min-w-0 flex-col text-base",
                    children: [
                      (0, s.jsx)(c.A, {
                        id: "businessProfiles.creation.match.yes",
                        defaultMessage: "Yes, this is my business",
                      }),
                      (0, s.jsx)("span", {
                        className: "text-sm text-secondary",
                        children:
                          q.profile?.ownership.available_action === "dispute"
                            ? (0, s.jsx)(c.A, {
                                id: "businessProfiles.creation.match.disputeDescription",
                                defaultMessage: "Request access to this claimed business",
                              })
                            : (0, s.jsx)(c.A, {
                                id: "businessProfiles.creation.match.yesDescription",
                                defaultMessage: "Switch to claiming this existing business",
                              }),
                      }),
                    ],
                  }),
                })
              : E.map((e) =>
                  (0, s.jsx)(
                    eD.z.Item,
                    {
                      value: e.id,
                      block: !0,
                      children: (0, s.jsxs)("span", {
                        className: "flex min-w-0 flex-col text-base",
                        children: [
                          (0, s.jsx)("bdi", { children: e.name }),
                          (0, s.jsx)("bdi", { className: "text-sm text-secondary", children: et(e) }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                )),
            (S[25] = et),
            (S[26] = E),
            (S[27] = q),
            (S[28] = y))
          : (y = S[28]),
        S[29] !== q
          ? ((x = q
              ? (0, s.jsx)(c.A, {
                  id: "businessProfiles.creation.match.no",
                  defaultMessage: "No, this isn\u2019t my business",
                })
              : (0, s.jsx)(c.A, {
                  id: "businessProfiles.creation.match.none",
                  defaultMessage: "None of these are mine",
                })),
            (S[29] = q),
            (S[30] = x))
          : (x = S[30]),
        S[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, s.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creation.match.noDescription",
                defaultMessage: "Continue manually creating a new business",
              }),
            })),
            (S[31] = w))
          : (w = S[31]),
        S[32] !== x
          ? ((_ = (0, s.jsx)(eD.z.Item, {
              value: "no",
              block: !0,
              children: (0, s.jsxs)("span", { className: "flex min-w-0 flex-col text-base", children: [x, w] }),
            })),
            (S[32] = x),
            (S[33] = _))
          : (_ = S[33]),
        S[34] !== U || S[35] !== ef || S[36] !== v || S[37] !== y || S[38] !== _
          ? ((j = (0, s.jsxs)(eD.z, {
              value: U,
              onChange: V,
              disabled: ef,
              variant: "list",
              className: "rounded-2xl border border-default",
              "aria-label": v,
              children: [y, _],
            })),
            (S[34] = U),
            (S[35] = ef),
            (S[36] = v),
            (S[37] = y),
            (S[38] = _),
            (S[39] = j))
          : (j = S[39]))
      let eh = !U,
        ep = null != K
      ;(S[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, s.jsx)(c.A, { id: "businessProfiles.creation.match.continue", defaultMessage: "Continue" })),
          (S[40] = A))
        : (A = S[40]),
        S[41] !== eh || S[42] !== ep
          ? ((C = (0, s.jsx)(e_.C, {
              type: "submit",
              disabled: eh,
              pending: ep,
              disabledAppearance: "unchanged",
              size: "formAction",
              radius: "full",
              className: "self-start",
              children: A,
            })),
            (S[41] = eh),
            (S[42] = ep),
            (S[43] = C))
          : (C = S[43]))
      let em = (0, s.jsxs)(eW.d, {
        modal: !o,
        personaActive: !1,
        closeDisabled: !1,
        onClose: d,
        children: [
          f,
          (0, s.jsx)("div", {
            className: "relative h-full overflow-y-auto bg-surface text-base text-default",
            children: (0, s.jsx)(eW.Y, {
              backLabel: p,
              onBack: m,
              busy: !1,
              contentFirstOnMobile: !0,
              preview:
                ed &&
                (0, s.jsx)(eF.PV, {
                  business: ed,
                  children: (0, s.jsx)(ev.g, {
                    business: { ...ed, address: ed.address || el?.address || et(Y) },
                    details: el ?? void 0,
                    claimLayout: !0,
                    verified: ei?.is_verified ?? !1,
                  }),
                }),
              content: (0, s.jsxs)("form", {
                ref: z ? void 0 : eO,
                className: "flex w-full max-w-125 flex-col gap-6",
                onSubmit: (e) => {
                  ;(e.preventDefault(), null == K && ("no" === U ? R("declined") : null != Y && Q(crypto.randomUUID())))
                },
                children: [b, g, j, C],
              }),
            }),
          }),
        ],
      })
      return null == eu
        ? em
        : (0, s.jsxs)(
            W.d,
            {
              accountId: k,
              userId: $.userId,
              interestType: "claim",
              funnelJourneyId: I,
              target: (0, eA.Lg)(es, ei?.ownership.available_action === "claim" ? ei.business_profile_id : void 0),
              businessName: ed?.name ?? "",
              preview:
                ed &&
                (0, s.jsx)(eF.PV, {
                  business: ed,
                  children: (0, s.jsx)(ev.g, { business: ed, verified: !1, claimLayout: !0 }),
                }),
              dispute: ei?.ownership.available_action === "dispute",
              onDone: L,
              required: en,
              fallback: em,
              onBack: null == K ? void 0 : ec,
              onClose: () => T(),
              children: [X ? em : null, eu],
            },
            Y?.id,
          )
    }
    var e$ = i("Ga5b"),
      eq = i("on57"),
      eU = i("JB4k"),
      eV = i("Qsgo"),
      eK = i("b8rs"),
      eH = i("ESSU")
    function eJ(e) {
      let t,
        i,
        l,
        r,
        o,
        d,
        f,
        h,
        p,
        m,
        v,
        y,
        x,
        w = (0, n.c)(65),
        {
          manager: _,
          stepKey: j,
          title: A,
          description: C,
          leading: S,
          header: k,
          children: E,
          footer: D,
          onCancel: N,
          exitLabel: P,
          cancelButtonRef: T,
          showPreview: F,
          busy: L,
          isDraft: R,
          personaActive: W,
          pendingVerification: B,
          showHeading: O,
          outcome: z,
          contentLayout: $,
        } = e,
        q = void 0 !== L && L,
        U = void 0 === R || R,
        V = void 0 !== W && W,
        K = void 0 !== B && B,
        H = void 0 === O || O,
        J = void 0 !== z && z,
        G = void 0 === $ ? "form" : $,
        Q = "complete" === j,
        Z = (0, u.A)(),
        X = "loading" === j,
        Y = "phone" === j && _?.profile.profile_type === "local_business"
      w[0] !== P || w[1] !== Z || w[2] !== X
        ? ((t = P ?? Z.formatMessage(X ? eB.W.backToChat : eB.W.close)), (w[0] = P), (w[1] = Z), (w[2] = X), (w[3] = t))
        : (t = w[3])
      let ee = t,
        et = (void 0 === F || F) && null != _,
        [ei, es] = (0, a.useState)(!1),
        [en, el] = (0, a.useState)(null),
        er = (0, a.useRef)(null),
        ea = (0, eP.I)()
      ;(w[4] !== en || w[5] !== ea || w[6] !== j
        ? ((i = () => {
            if (null != en && "loading" !== j && !ea && null != er.current) return (0, eE.E)(er.current, eN.i)
          }),
          (w[4] = en),
          (w[5] = ea),
          (w[6] = j),
          (w[7] = i))
        : (i = w[7]),
        w[8] !== en || w[9] !== J || w[10] !== K || w[11] !== ea || w[12] !== j
          ? ((l = [en, J, K, ea, j]), (w[8] = en), (w[9] = J), (w[10] = K), (w[11] = ea), (w[12] = j), (w[13] = l))
          : (l = w[13]),
        (0, a.useLayoutEffect)(i, l))
      let eo = (0, a.useRef)(null),
        eu = (0, a.useRef)(null)
      ;(w[14] !== j
        ? ((r = () => {
            ;("code" !== j && (eo.current ?? eu.current?.querySelector("h1, h2"))?.focus({ preventScroll: !0 }),
              null != eu.current && (eu.current.scrollTop = 0))
          }),
          (w[14] = j),
          (w[15] = r))
        : (r = w[15]),
        w[16] !== en || w[17] !== J || w[18] !== K || w[19] !== j
          ? ((o = [en, K, J, j]), (w[16] = en), (w[17] = J), (w[18] = K), (w[19] = j), (w[20] = o))
          : (o = w[20]),
        (0, a.useLayoutEffect)(r, o),
        w[21] !== en
          ? ((d = () => {
              let e = en?.closest('[role="dialog"]')
              if (e instanceof HTMLElement) return (0, eV.$)(e)
            }),
            (f = [en]),
            (w[21] = en),
            (w[22] = d),
            (w[23] = f))
          : ((d = w[22]), (f = w[23])),
        (0, a.useLayoutEffect)(d, f),
        w[24] !== U || w[25] !== _
          ? ((h = function (e) {
              return null == _
                ? null
                : (0, s.jsx)(eK.G, { manager: _, isDraft: U, inDialog: void 0 !== e && e, isCreationPreview: !0 })
            }),
            (w[24] = U),
            (w[25] = _),
            (w[26] = h))
          : (h = w[26]))
      let ec = h
      w[27] !== q
        ? ((p = {
            onEscapeKeyDown: (e) => {
              q && e.preventDefault()
            },
            onOpenAutoFocus: eQ,
            onCloseAutoFocus: eG,
          }),
          (w[27] = q),
          (w[28] = p))
        : (p = w[28])
      let ed = J ? "bg-surface" : "bg-surface-card",
        ef = Q && eH.A.confirmationSky
      return (
        w[29] !== ed || w[30] !== ef
          ? ((m = (0, eq.A)(
              "@container/business-creation flex h-full min-h-0 min-w-0 flex-1 overflow-hidden text-default",
              ed,
              ef,
            )),
            (w[29] = ed),
            (w[30] = ef),
            (w[31] = m))
          : (m = w[31]),
        w[32] !== q ||
        w[33] !== T ||
        w[34] !== E ||
        w[35] !== Q ||
        w[36] !== G ||
        w[37] !== C ||
        w[38] !== D ||
        w[39] !== k ||
        w[40] !== Z ||
        w[41] !== U ||
        w[42] !== X ||
        w[43] !== S ||
        w[44] !== Y ||
        w[45] !== ee ||
        w[46] !== N ||
        w[47] !== J ||
        w[48] !== K ||
        w[49] !== ei ||
        w[50] !== ec ||
        w[51] !== H ||
        w[52] !== et ||
        w[53] !== j ||
        w[54] !== A
          ? ((v =
              K || J
                ? (0, s.jsx)("div", {
                    ref: eu,
                    className: "relative h-full w-full overflow-y-auto text-base",
                    children: (0, s.jsx)(eW.Y, {
                      mobileConfirmation: Q,
                      backButtonRef: T,
                      backLabel: Z.formatMessage(eB.W.close),
                      onBack: N,
                      busy: q,
                      previewLabel: Z.formatMessage(eB.W.preview),
                      preview: (0, s.jsx)("div", {
                        className: (0, eq.A)(
                          "w-full max-w-sm overflow-hidden rounded-3xl",
                          J ? "bg-surface" : "bg-surface-card",
                        ),
                        children: ec(),
                      }),
                      content: (0, s.jsxs)("div", {
                        className: (0, eq.A)(
                          "flex w-full flex-col gap-6",
                          J && null == k ? "max-w-125" : "max-w-lg",
                          Q && "max-md:min-h-[calc(100dvh-7rem)] max-md:pt-[clamp(1rem,12vh,8rem)]",
                        ),
                        children: [
                          k ??
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                null != S ? (0, s.jsx)(eU.k, { order: 0, children: S }) : null,
                                H &&
                                  (0, s.jsxs)(eU.k, {
                                    className: "flex flex-col gap-1.5",
                                    order: 0,
                                    children: [
                                      (0, s.jsx)(M.L3, {
                                        asChild: !0,
                                        children: (0, s.jsx)("h1", {
                                          ref: eo,
                                          tabIndex: -1,
                                          className: "text-heading-app leading-tight font-normal outline-none",
                                          children: A,
                                        }),
                                      }),
                                      C,
                                    ],
                                  }),
                              ],
                            }),
                          E,
                        ],
                      }),
                    }),
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        ref: eu,
                        className: "relative flex min-w-0 flex-1 flex-col overflow-y-auto",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex items-center justify-between p-3 sm:absolute sm:inset-x-0 sm:top-0",
                            children: [
                              (0, s.jsx)(b.$, {
                                ref: T,
                                type: "button",
                                disabled: q,
                                color: "ghostActive",
                                size: "dialogGhost",
                                className: "gap-x-1 font-normal",
                                "aria-label": Y ? void 0 : ee,
                                "aria-description": Y ? ee : void 0,
                                onClick: N,
                                children: (0, s.jsx)(I.M, { variant: "createOrClaim" }),
                              }),
                              et
                                ? (0, s.jsx)(M.lG, {
                                    open: ei,
                                    onOpenChange: es,
                                    triggerContent: (0, s.jsx)(b.$, {
                                      type: "button",
                                      color: "ghostActive",
                                      size: "dialogGhost",
                                      className: "@5xl/business-creation:hidden",
                                      "aria-label": Z.formatMessage(eB.W.preview),
                                      children: (0, s.jsx)(g.Q1h, {}),
                                    }),
                                    showDialogClose: !1,
                                    unstyledContent: !0,
                                    viewportSized: !0,
                                    contentProps: { "aria-describedby": void 0 },
                                    children: (0, s.jsxs)("div", {
                                      className: "flex h-full min-h-0 flex-col bg-surface-card text-default",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: "flex items-center gap-3 p-3 select-none",
                                          children: [
                                            (0, s.jsx)(b.$, {
                                              type: "button",
                                              color: "ghostActive",
                                              size: "dialogGhost",
                                              className: "gap-x-1 font-normal",
                                              onClick: () => es(!1),
                                              children: (0, s.jsx)(I.M, { variant: "createOrClaim" }),
                                            }),
                                            (0, s.jsx)(M.L3, {
                                              className: "text-base font-medium",
                                              children: (0, s.jsx)(c.A, { ...eB.W.preview }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "min-h-0 flex-1 overflow-y-auto",
                                          children: ec(!0),
                                        }),
                                      ],
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            ref: er,
                            className: X
                              ? "mx-auto w-full max-w-3xl px-5 py-8 sm:pt-16"
                              : (0, eq.A)(
                                  "mx-auto flex w-full max-w-lg flex-1 flex-col px-6 pt-20 pb-8 sm:my-auto sm:max-w-xl sm:flex-none sm:px-8 sm:py-16",
                                  "summary" === G ? "gap-8" : "gap-6",
                                  !U && "text-center",
                                ),
                            children: [
                              S,
                              H &&
                                (0, s.jsxs)("div", {
                                  className: (0, eq.A)(
                                    X ? "sr-only" : "flex flex-col",
                                    "summary" === G ? "gap-3" : "gap-1.5",
                                  ),
                                  children: [
                                    (0, s.jsx)(M.L3, {
                                      asChild: !0,
                                      children: (0, s.jsx)("h1", {
                                        ref: eo,
                                        tabIndex: -1,
                                        className: (0, eq.A)(
                                          "text-heading-lg leading-7 font-normal outline-none sm:text-heading-app sm:leading-8.5",
                                          "category" === j ? "wrap-anywhere" : "type" !== j && "text-balance",
                                        ),
                                        children: A,
                                      }),
                                    }),
                                    C,
                                  ],
                                }),
                              E,
                            ],
                          }),
                          null != D
                            ? (0, s.jsx)("div", {
                                className:
                                  "category" === j
                                    ? "sticky bottom-0 mx-auto w-full max-w-lg shrink-0 bg-surface-card px-6 pb-8 sm:max-w-xl sm:px-8 sm:py-6"
                                    : "shrink-0 px-6 pb-6",
                                children: D,
                              })
                            : null,
                        ],
                      }),
                      et
                        ? (0, s.jsx)("aside", {
                            className: (0, eq.A)(
                              "hidden min-h-0 overflow-y-auto @5xl/business-creation:flex",
                              U
                                ? "my-4 me-4 w-105 shrink-0 flex-col rounded-2xl border border-default bg-surface-card shadow-card"
                                : "w-1/2 shrink-0 items-center justify-center bg-surface-tertiary p-12",
                            ),
                            "aria-label": Z.formatMessage(eB.W.preview),
                            children: (0, s.jsx)("div", {
                              className: U ? void 0 : "w-full max-w-sm overflow-hidden rounded-2xl bg-surface-card",
                              children: ec(),
                            }),
                          })
                        : null,
                    ],
                  })),
            (w[32] = q),
            (w[33] = T),
            (w[34] = E),
            (w[35] = Q),
            (w[36] = G),
            (w[37] = C),
            (w[38] = D),
            (w[39] = k),
            (w[40] = Z),
            (w[41] = U),
            (w[42] = X),
            (w[43] = S),
            (w[44] = Y),
            (w[45] = ee),
            (w[46] = N),
            (w[47] = J),
            (w[48] = K),
            (w[49] = ei),
            (w[50] = ec),
            (w[51] = H),
            (w[52] = et),
            (w[53] = j),
            (w[54] = A),
            (w[55] = v))
          : (v = w[55]),
        w[56] !== m || w[57] !== v
          ? ((y = (0, s.jsx)("main", { ref: el, className: m, children: v })), (w[56] = m), (w[57] = v), (w[58] = y))
          : (y = w[58]),
        w[59] !== q || w[60] !== N || w[61] !== V || w[62] !== p || w[63] !== y
          ? ((x = (0, s.jsx)(eW.d, {
              modal: !1,
              personaActive: V,
              closeDisabled: q,
              onClose: N,
              contentProps: p,
              children: y,
            })),
            (w[59] = q),
            (w[60] = N),
            (w[61] = V),
            (w[62] = p),
            (w[63] = y),
            (w[64] = x))
          : (x = w[64]),
        x
      )
    }
    function eG(e) {
      return e.preventDefault()
    }
    function eQ(e) {
      return e.preventDefault()
    }
    var eZ = i("FXwt"),
      eX = i("qHOU"),
      eY = i("DUzD"),
      e1 = i("Ha7K"),
      e0 = i("I2Eu"),
      e2 = i("ReGc")
    function e3(e) {
      let t,
        i = (0, n.c)(3),
        { environmentRules: l, children: r } = e
      return null == l
        ? r
        : (i[0] !== r || i[1] !== l
            ? ((t = (0, s.jsx)(e4, { environmentRules: l, children: r })), (i[0] = r), (i[1] = l), (i[2] = t))
            : (t = i[2]),
          t)
    }
    function e4(e) {
      let { environmentRules: t, children: i } = e,
        { data: s } = (0, r.Ul)(e2.a)
      return !(function (e) {
        if (null == e) return !1
        try {
          let { hostname: t } = new URL(e, void 0)
          return "chatgpt.com" === t || t.endsWith(".chatgpt.com")
        } catch {
          return !1
        }
      })(s?.chatGptApiBaseUrl)
        ? t
        : i
    }
    var e5 = i("z2PK")
    function e6(e) {
      let t,
        i,
        l = (0, n.c)(5),
        { website: r } = e
      l[0] !== r ? ((t = r?.trim()), (l[0] = r), (l[1] = t)) : (t = l[1])
      let a = t
      if (a) {
        let e
        return (
          l[2] !== a
            ? ((e = (0, s.jsx)(c.A, {
                id: "businessProfiles.verification.shopify.description.website",
                defaultMessage: "Sign in to Shopify to verify {website}",
                values: { website: (0, s.jsx)("bdi", { children: a }) },
              })),
              (l[2] = a),
              (l[3] = e))
            : (e = l[3]),
          e
        )
      }
      return (
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(c.A, {
              id: "businessProfiles.verification.shopify.description.business",
              defaultMessage: "Sign in to Shopify to verify your business",
            })),
            (l[4] = i))
          : (i = l[4]),
        i
      )
    }
    function e7(e) {
      let t,
        i,
        l,
        o,
        d,
        f,
        p,
        m,
        b,
        g,
        v,
        y,
        x,
        w,
        _,
        A,
        C,
        S,
        I,
        k,
        E,
        D,
        N,
        M,
        P,
        T,
        F,
        L,
        R,
        W,
        B,
        O,
        z,
        $,
        U,
        V,
        H,
        J,
        Q,
        Z,
        X,
        Y = (0, n.c)(129)
      Y[0] !== e
        ? (({
            queryKey: d,
            acceptedSession: t,
            shopifyAppFunnel: p,
            onDiscover: l,
            onStartShopify: o,
            onCancelShopify: i,
            renderStep: f,
            ...m
          } = e),
          (Y[0] = e),
          (Y[1] = t),
          (Y[2] = i),
          (Y[3] = l),
          (Y[4] = o),
          (Y[5] = d),
          (Y[6] = f),
          (Y[7] = p),
          (Y[8] = m))
        : ((t = Y[1]), (i = Y[2]), (l = Y[3]), (o = Y[4]), (d = Y[5]), (f = Y[6]), (p = Y[7]), (m = Y[8]))
      let ee = (0, r.gh)(j.u),
        { userId: et, accountId: ei, isLoading: en } = (0, h.As)(),
        el = (0, u.A)(),
        er = (0, K.jE)(),
        { website: ea, busy: eo, onBack: eu } = m,
        [ec, ed] = (0, a.useState)("shopify")
      Y[9] !== ea || Y[10] !== m.verification
        ? ((b = () => ((0, e0.uN)(m.verification, ea) ? "existing" : null)),
          (Y[9] = ea),
          (Y[10] = m.verification),
          (Y[11] = b))
        : (b = Y[11])
      let [ef, eh] = (0, a.useState)(b),
        ep = null != ef,
        [em, eb] = (0, a.useState)(null),
        [eg, ev] = (0, a.useState)(!1),
        [ey, ex] = (0, a.useState)(null),
        ew = (0, a.useRef)(null)
      ;(Y[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = () => () => ew.current?.abort()), (v = []), (Y[12] = g), (Y[13] = v))
        : ((g = Y[12]), (v = Y[13])),
        (0, a.useEffect)(g, v),
        Y[14] !== t || Y[15] !== ea ? ((y = (0, e0.LO)(t, ea)), (Y[14] = t), (Y[15] = ea), (Y[16] = y)) : (y = Y[16]))
      let e_ = y,
        ej = e_?.id === ey ? null : e_
      Y[17] !== l
        ? ((x = (e) => {
            let { signal: t } = e
            return l(t)
          }),
          (Y[17] = l),
          (Y[18] = x))
        : (x = Y[18])
      let eA = null == ej && !em
      Y[19] !== d || Y[20] !== x || Y[21] !== eA
        ? ((w = {
            queryKey: d,
            queryFn: x,
            enabled: eA,
            retry: !1,
            staleTime: 1 / 0,
            gcTime: 3e5,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (Y[19] = d),
          (Y[20] = x),
          (Y[21] = eA),
          (Y[22] = w))
        : (w = Y[22])
      let { data: eC, isError: eS, isFetching: eI, refetch: ek } = (0, G.I)(w),
        eE = eC?.website_discovery
      Y[23] !== eE || Y[24] !== ea ? ((_ = (0, q.eQ)(eE, ea)), (Y[23] = eE), (Y[24] = ea), (Y[25] = _)) : (_ = Y[25])
      let eN = _,
        eM = null != ej || null != eN,
        eP = eo || null != em,
        eT = (eI || (em && "shopify" === ec)) && null == ej && !ep
      Y[26] !== eM || Y[27] !== eC || Y[28] !== ef || Y[29] !== eS || Y[30] !== eI || Y[31] !== eT || Y[32] !== ep
        ? (eT ||
            eI ||
            "selected" === ef ||
            (eM && !ep
              ? (A = "shopify_offered")
              : !eM && eS
                ? (A = "discovery_failed")
                : eM || null == eC || (A = "dns_only")),
          (Y[26] = eM),
          (Y[27] = eC),
          (Y[28] = ef),
          (Y[29] = eS),
          (Y[30] = eI),
          (Y[31] = eT),
          (Y[32] = ep),
          (Y[33] = A))
        : (A = Y[33])
      let eF = !eT && (!eM || ep),
        eL = p?.id,
        eR = p?.websiteEdited ?? !1,
        eW = (0, a.useRef)(void 0)
      ;(Y[34] !== eL || Y[35] !== A || Y[36] !== ee || Y[37] !== eR
        ? ((C = () => {
            if (null != A && eW.current !== A)
              return (0, eY.RB)(ee, eL, { stage: "verification_options_seen", outcome: A, websiteEdited: eR }, () => {
                eW.current = A
              })
          }),
          (Y[34] = eL),
          (Y[35] = A),
          (Y[36] = ee),
          (Y[37] = eR),
          (Y[38] = C))
        : (C = Y[38]),
        Y[39] !== eL || Y[40] !== A || Y[41] !== ee || Y[42] !== eR
          ? ((S = [ee, eL, A, eR]), (Y[39] = eL), (Y[40] = A), (Y[41] = ee), (Y[42] = eR), (Y[43] = S))
          : (S = Y[43]),
        (0, a.useEffect)(C, S))
      let eO = (0, a.useRef)(!1)
      ;(Y[44] !== ei || Y[45] !== eL || Y[46] !== en || Y[47] !== ee || Y[48] !== eF || Y[49] !== et || Y[50] !== eR
        ? ((I = () => {
            if (!eF) {
              eO.current = !1
              return
            }
            if (!eO.current && !en && null != et && null != ei)
              return (0, eY.RB)(
                ee,
                eL,
                { stage: "dns_screen_seen", method: "dns", websiteEdited: eR },
                () => {
                  eO.current = !0
                },
                { expectedUserId: et, expectedAccountId: ei },
              )
          }),
          (k = [ee, eL, eF, eR, en, et, ei]),
          (Y[44] = ei),
          (Y[45] = eL),
          (Y[46] = en),
          (Y[47] = ee),
          (Y[48] = eF),
          (Y[49] = et),
          (Y[50] = eR),
          (Y[51] = I),
          (Y[52] = k))
        : ((I = Y[51]), (k = Y[52])),
        (0, a.useEffect)(I, k),
        Y[53] !== eL ||
        Y[54] !== eo ||
        Y[55] !== ec ||
        Y[56] !== eu ||
        Y[57] !== i ||
        Y[58] !== l ||
        Y[59] !== o ||
        Y[60] !== ej ||
        Y[61] !== er ||
        Y[62] !== d ||
        Y[63] !== ek ||
        Y[64] !== ee ||
        Y[65] !== ea ||
        Y[66] !== m
          ? ((E = async function (e) {
              let t = void 0 !== e && e
              if (null != ew.current || eo) return
              let s = null != ej && Date.parse(ej.expires_at) > Date.now() ? ej : null
              null != ej && null == s && ex(ej.id)
              let n = new AbortController()
              ;((ew.current = n), eb(t ? "back" : "continue"), ev(!1))
              let r = !t && "shopify" === ec
              return (
                r && (0, eY.Q1)(ee, eL, { stage: "verification_attempted", method: "shopify" }),
                (async function () {
                  if (t || "website" === ec)
                    (null != s && (await i(s.id, n.signal)),
                      n.signal.throwIfAborted(),
                      t
                        ? eu()
                        : ((0, e0.uN)(m.verification, ea) || (await m.onStart()),
                          n.signal.throwIfAborted(),
                          eh("selected")))
                  else if (null != s) await o(s.id, n.signal)
                  else {
                    let e = er.getQueryData(d),
                      t =
                        null != e &&
                        e.website_discovery?.expires_at != null &&
                        tt(e.website_discovery.website, ea) &&
                        Date.parse(e.website_discovery.expires_at) > Date.now()
                          ? e
                          : await l(n.signal)
                    ;(n.signal.throwIfAborted(),
                      e9(t.website_discovery) && ((t = await l(n.signal)), n.signal.throwIfAborted()),
                      er.setQueryData(d, t))
                    let i = (0, q.eQ)(t.website_discovery, ea)
                    if (null == i || e9(t.website_discovery))
                      return void (0, eY.Q1)(ee, eL, {
                        stage: "verification_result",
                        method: "shopify",
                        outcome: "no_longer_available",
                      })
                    await o(i.id, n.signal)
                  }
                })()
                  .catch(() => {
                    n.signal.aborted ||
                      (r &&
                        (0, eY.Q1)(ee, eL, {
                          stage: "verification_result",
                          method: "shopify",
                          outcome: "start_failed",
                        }),
                      ev(!0),
                      ek())
                  })
                  .finally(() => {
                    ;(ew.current === n && (ew.current = null), n.signal.aborted || eb(null))
                  })
              )
            }),
            (Y[53] = eL),
            (Y[54] = eo),
            (Y[55] = ec),
            (Y[56] = eu),
            (Y[57] = i),
            (Y[58] = l),
            (Y[59] = o),
            (Y[60] = ej),
            (Y[61] = er),
            (Y[62] = d),
            (Y[63] = ek),
            (Y[64] = ee),
            (Y[65] = ea),
            (Y[66] = m),
            (Y[67] = E))
          : (E = Y[67]))
      let ez = E
      if (eT) {
        let e
        return (Y[68] !== f ? ((e = f(void 0, { loadingWebsite: !0 })), (Y[68] = f), (Y[69] = e)) : (e = Y[69]), e)
      }
      if (eF) {
        let e, t, i
        return (
          Y[70] !== eM || Y[71] !== eu || Y[72] !== ek
            ? ((e = eM
                ? () => {
                    ;(eh(null), ek())
                  }
                : eu),
              (Y[70] = eM),
              (Y[71] = eu),
              (Y[72] = ek),
              (Y[73] = e))
            : (e = Y[73]),
          Y[74] !== e || Y[75] !== m
            ? ((t = (0, s.jsx)(e8, { ...m, onBack: e })), (Y[74] = e), (Y[75] = m), (Y[76] = t))
            : (t = Y[76]),
          Y[77] !== f || Y[78] !== t
            ? ((i = f(t, { stepKey: "website-dns" })), (Y[77] = f), (Y[78] = t), (Y[79] = i))
            : (i = Y[79]),
          i
        )
      }
      ;(Y[80] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (e) => {
            ;(ed(e), ev(!1))
          }),
          (Y[80] = D))
        : (D = Y[80]),
        Y[81] !== el
          ? ((N = el.formatMessage({
              id: "businessProfiles.creation.website.methods.label",
              defaultMessage: "Verification method",
            })),
            (Y[81] = el),
            (Y[82] = N))
          : (N = Y[82]),
        Y[83] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, s.jsx)(c.A, {
              id: "businessProfiles.creation.website.methods.shopify",
              defaultMessage: "Shopify",
            })),
            (Y[83] = M))
          : (M = Y[83]),
        Y[84] !== ea
          ? ((P = (0, s.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                M,
                (0, s.jsx)("span", { className: "text-sm text-secondary", children: (0, s.jsx)(e6, { website: ea }) }),
              ],
            })),
            (Y[84] = ea),
            (Y[85] = P))
          : (P = Y[85]),
        Y[86] !== eP || Y[87] !== P
          ? ((T = (0, s.jsx)(eD.z.Item, { value: "shopify", disabled: eP, block: !0, children: P })),
            (Y[86] = eP),
            (Y[87] = P),
            (Y[88] = T))
          : (T = Y[88]),
        Y[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, s.jsx)(c.A, {
              id: "businessProfiles.creation.website.methods.website",
              defaultMessage: "Website domain",
            })),
            (Y[89] = F))
          : (F = Y[89]),
        Y[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, s.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                F,
                (0, s.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(c.A, {
                    id: "businessProfiles.creation.website.methods.website.description",
                    defaultMessage: "Add a DNS TXT record for your website",
                  }),
                }),
              ],
            })),
            (Y[90] = L))
          : (L = Y[90]),
        Y[91] !== eP
          ? ((R = (0, s.jsx)(eD.z.Item, { value: "website", disabled: eP, block: !0, children: L })),
            (Y[91] = eP),
            (Y[92] = R))
          : (R = Y[92]),
        Y[93] !== ec || Y[94] !== N || Y[95] !== T || Y[96] !== R
          ? ((W = (0, s.jsxs)(eD.z, {
              value: ec,
              onChange: D,
              variant: "list",
              className: "rounded-2xl border border-default",
              "aria-label": N,
              children: [T, R],
            })),
            (Y[93] = ec),
            (Y[94] = N),
            (Y[95] = T),
            (Y[96] = R),
            (Y[97] = W))
          : (W = Y[97]),
        Y[98] !== eg
          ? ((B =
              eg &&
              (0, s.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, s.jsx)(c.A, { ...eB.W.error }),
              })),
            (Y[98] = eg),
            (Y[99] = B))
          : (B = Y[99]))
      let e$ = "back" === em
      ;(Y[100] !== ez ? ((O = () => void ez(!0)), (Y[100] = ez), (Y[101] = O)) : (O = Y[101]),
        Y[102] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, s.jsx)(c.A, { ...eB.W.back })), (Y[102] = z))
          : (z = Y[102]),
        Y[103] !== eP || Y[104] !== e$ || Y[105] !== O
          ? (($ = (0, s.jsx)(es.d, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              disabled: eP,
              loading: e$,
              onClick: O,
              children: z,
            })),
            (Y[103] = eP),
            (Y[104] = e$),
            (Y[105] = O),
            (Y[106] = $))
          : ($ = Y[106]))
      let eq = "continue" === em
      return (
        Y[107] !== ez ? ((U = () => void ez()), (Y[107] = ez), (Y[108] = U)) : (U = Y[108]),
        Y[109] !== ec
          ? ((V =
              "shopify" === ec
                ? (0, s.jsx)(c.A, {
                    id: "businessProfiles.creation.website.shopify.start",
                    defaultMessage: "Verify with Shopify",
                  })
                : (0, s.jsx)(c.A, { ...eB.W.continue })),
            (Y[109] = ec),
            (Y[110] = V))
          : (V = Y[110]),
        Y[111] !== eP || Y[112] !== eq || Y[113] !== U || Y[114] !== V
          ? ((H = (0, s.jsx)(es.d, {
              type: "button",
              size: "formAction",
              disabled: eP,
              loading: eq,
              onClick: U,
              children: V,
            })),
            (Y[111] = eP),
            (Y[112] = eq),
            (Y[113] = U),
            (Y[114] = V),
            (Y[115] = H))
          : (H = Y[115]),
        Y[116] !== $ || Y[117] !== H
          ? ((J = (0, s.jsxs)("div", { className: "flex flex-wrap gap-2", children: [$, H] })),
            (Y[116] = $),
            (Y[117] = H),
            (Y[118] = J))
          : (J = Y[118]),
        Y[119] !== W || Y[120] !== B || Y[121] !== J
          ? ((Q = (0, s.jsxs)("div", {
              className: "flex flex-col gap-6 wrap-anywhere select-none",
              children: [W, B, J],
            })),
            (Y[119] = W),
            (Y[120] = B),
            (Y[121] = J),
            (Y[122] = Q))
          : (Q = Y[122]),
        Y[123] !== ea
          ? ((Z = (0, s.jsx)("p", {
              className: "wrap-anywhere text-secondary",
              children: (0, s.jsx)(c.A, {
                id: "businessProfiles.creation.website.methods",
                defaultMessage: "Choose how to verify ownership of {website}",
                values: { website: (0, s.jsx)("bdi", { children: ea }, "website") },
              }),
            })),
            (Y[123] = ea),
            (Y[124] = Z))
          : (Z = Y[124]),
        Y[125] !== f || Y[126] !== Q || Y[127] !== Z
          ? ((X = f(Q, { stepKey: "website-verification", description: Z })),
            (Y[125] = f),
            (Y[126] = Q),
            (Y[127] = Z),
            (Y[128] = X))
          : (X = Y[128]),
        X
      )
    }
    function e8(e) {
      let t,
        i,
        l,
        r,
        o,
        u = (0, n.c)(18),
        { website: d, verification: f, busy: h, onStart: p, onCheck: m, onBack: b } = e,
        [g, v] = (0, a.useState)(),
        y = null != f && tt(f.website, d) ? f : null,
        x = y?.test_override && 1 ? null : y,
        w = y?.hostname
      return (
        u[0] !== y?.test_override
          ? ((t = y?.test_override
              ? (0, s.jsx)("p", {
                  role: "status",
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(e3, {
                    environmentRules: null,
                    children: (0, s.jsx)(c.A, {
                      id: "businessProfiles.creation.website.testOverride.realWebsiteRequired",
                      defaultMessage:
                        "This DNS test checks a real record. Clear the DNS override and verify the business\u2019s actual website before submitting a profile.",
                    }),
                  }),
                })
              : null),
            (u[0] = y?.test_override),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== y || u[3] !== m
          ? ((i = y ? async () => (await m(y.challenge_id), { pendingChallengeId: y.challenge_id }) : void 0),
            (u[2] = y),
            (u[3] = m),
            (u[4] = i))
          : (i = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(c.A, { ...eB.W.back })), (u[5] = l))
          : (l = u[5]),
        u[6] !== h || u[7] !== b
          ? ((r = (0, s.jsx)(e5.U, { type: "button", color: "outlineGhost", disabled: h, onClick: b, children: l })),
            (u[6] = h),
            (u[7] = b),
            (u[8] = r))
          : (r = u[8]),
        u[9] !== h ||
        u[10] !== g ||
        u[11] !== p ||
        u[12] !== x ||
        u[13] !== w ||
        u[14] !== t ||
        u[15] !== i ||
        u[16] !== r
          ? ((o = (0, s.jsx)(e5.B, {
              lastCheck: g,
              onChecked: v,
              challenge: x,
              domain: w,
              busy: h,
              headingRef: te,
              beforeRecord: t,
              onStart: p,
              onCheck: i,
              secondaryAction: r,
            })),
            (u[9] = h),
            (u[10] = g),
            (u[11] = p),
            (u[12] = x),
            (u[13] = w),
            (u[14] = t),
            (u[15] = i),
            (u[16] = r),
            (u[17] = o))
          : (o = u[17]),
        o
      )
    }
    function e9(e) {
      return e?.expires_at != null && Date.parse(e.expires_at) <= Date.now()
    }
    function te(e) {
      e?.focus({ preventScroll: !0 })
    }
    function tt(e, t) {
      try {
        return new URL(e).href === new URL(t).href
      } catch {
        return !1
      }
    }
    let ti = (e, t) =>
        (0, z.A6)({
          signal: t.getAbortSignal?.() ?? new AbortController().signal,
          timeoutMs: 12e3,
          isTransient: (e) => e instanceof Error && "AbortError" !== e.name && (0, Y.$)(e),
          lookup: (i) => i((i) => (0, ex.readProfileClaimPreparation)(e, { ...t, getAbortSignal: () => i })),
        }),
      ts = {
        website: ["website"],
        category: ["category", "description"],
        hours: ["hours"],
        address: ["address"],
        delivery: ["delivery_policy"],
        returns: ["returns_policy"],
      }
    function tn(e) {
      let t,
        i,
        l,
        f,
        p,
        m,
        v,
        y,
        x,
        w,
        _,
        A,
        C,
        S,
        I,
        k,
        E,
        D,
        N,
        M,
        P,
        F,
        L,
        R,
        W,
        Y,
        eE,
        eD,
        eN,
        eM,
        eP,
        eT,
        eF,
        eL,
        eR,
        eW,
        eO,
        eq,
        eU,
        eV,
        eK,
        eH,
        eG,
        eQ,
        e2 = (0, n.c)(182),
        {
          acquisitionJourneyId: e3,
          accountId: e4,
          contactVerificationEnabled: e5,
          name: e6,
          onCancel: e8,
          onSaveAndExit: e9,
          onNavigationDiscard: te,
          onReview: tt,
          initialDraft: tn,
          initialStep: td,
          initialDuplicateSubmission: tf,
          initialLocalFailure: th,
          checkLocalAdmission: tp,
          submitting: tm,
          startReplacement: tb,
          waitForNameScreening: tg,
          allowNavigation: tv,
          services: ty,
          temporarySession: tx,
          initialSession: tw,
          onExpired: t_,
          onSessionDeadline: tj,
          onWebsiteContinue: tA,
        } = e,
        tC = void 0 !== e5 && e5,
        tS = void 0 === td ? "type" : td,
        tI = void 0 !== tf && tf,
        tk = void 0 !== tm && tm,
        tE = (0, r.gh)(j.u),
        tD = (0, d.Zp)(),
        tN = (0, u.A)(),
        { userId: tM, accountId: tP, email: tT, isLoading: tF } = (0, h.As)(),
        tL = { accountId: e4 ?? tP, userId: tM },
        [tR, tW] = (0, a.useState)(),
        [tB, tO] = (0, a.useState)(),
        [tz, t$] = (0, a.useState)(!1),
        tq = (0, K.jE)()
      e2[0] !== e4 ? ((t = () => (null == e4 ? null : (0, eX.YH)(e4))), (e2[0] = e4), (e2[1] = t)) : (t = e2[1])
      let [tU] = (0, a.useState)(t)
      ;(e2[2] !== tU
        ? ((i = () => tU?.attach()), (l = [tU]), (e2[2] = tU), (e2[3] = i), (e2[4] = l))
        : ((i = e2[3]), (l = e2[4])),
        (0, a.useEffect)(i, l))
      let [tV, tK] = (0, a.useState)(),
        [tH, tJ] = (0, a.useState)(),
        [tG, tQ] = (0, a.useState)(),
        tZ = tG ?? tw,
        [tX, tY] = (0, a.useState)()
      e2[5] !== tC || e2[6] !== tn || e2[7] !== e6
        ? ((f = () =>
            null == tn
              ? (0, O.vm)(e6, tC)
              : { ...tn, contactVerificationRequired: (null == tn.profileId && tC) || tn.contactVerificationRequired }),
          (e2[5] = tC),
          (e2[6] = tn),
          (e2[7] = e6),
          (e2[8] = f))
        : (f = e2[8])
      let [t1, t0] = (0, a.useState)(f)
      e2[9] !== t1 || e2[10] !== tS
        ? ((p = () => (0, O.B)(t1, tS)), (e2[9] = t1), (e2[10] = tS), (e2[11] = p))
        : (p = e2[11])
      let [t2, t3] = (0, a.useState)(p),
        t4 = t1.shopifyAppFunnel?.id
      ;(e2[12] !== tE || e2[13] !== t4
        ? ((m = () => (0, eY.RB)(tE, t4, { stage: "creation_seen" })),
          (v = [tE, t4]),
          (e2[12] = tE),
          (e2[13] = t4),
          (e2[14] = m),
          (e2[15] = v))
        : ((m = e2[14]), (v = e2[15])),
        (0, a.useEffect)(m, v))
      let t5 = (0, a.useId)(),
        [t6, t7] = (0, a.useState)(null),
        [t8, t9] = (0, a.useState)(!0),
        [ie, it] = (0, a.useState)(!1),
        [ii, is] = (0, a.useState)(null),
        [il, ir] = (0, a.useState)(!1),
        ia = (0, r.Ul)(ek.n),
        [io, iu] = (0, a.useState)(),
        ic = ia ? io : void 0,
        [id, ih] = (0, a.useState)(),
        ip = ic?.claimAttempt != null,
        im = il || ip,
        ib =
          ("website" === t2 && "ecommerce" === t1.businessType) ||
          ("address" === t2 && "local_business" === t1.businessType)
            ? t2
            : void 0,
        ig = null != e4 && ("address" === ib ? null != tM : "website" === ib && null != tx),
        iv = tk || ie || ip || null != ii,
        iy = ic?.claimAttempt
      e2[16] !== e4 || e2[17] !== tN.locale || e2[18] !== iy || e2[19] !== tM
        ? ((y = ["creation-duplicate-claim", e4, tM, tN.locale, iy]),
          (e2[16] = e4),
          (e2[17] = tN.locale),
          (e2[18] = iy),
          (e2[19] = tM),
          (e2[20] = y))
        : (y = e2[20])
      let ix = y
      e2[21] !== ix || e2[22] !== ip
        ? ((x = { queries: ip ? [{ queryKey: ix, queryFn: H.hT, gcTime: 0 }] : [] }),
          (e2[21] = ix),
          (e2[22] = ip),
          (e2[23] = x))
        : (x = e2[23])
      let [iw] = (0, J.E)(x),
        i_ = (0, a.useRef)(null)
      ;(e2[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = () => () => i_.current?.abort()), (_ = []), (e2[24] = w), (e2[25] = _))
        : ((w = e2[24]), (_ = e2[25])),
        (0, a.useEffect)(w, _))
      let [ij, iA] = (0, a.useState)(!1),
        [iC, iS] = (0, a.useState)(tI ? "alreadySubmitted" : void 0 === th ? null : th),
        iI =
          "alreadySubmitted" === iC || "localAlreadySubmitted" === iC || "localSubmissionInProgress" === iC
            ? eB.W[iC]
            : null,
        ik = null == iI ? iC : null
      ;(e2[26] !== iI || e2[27] !== tN || e2[28] !== tE
        ? ((A = () => {
            if (null != iI)
              return tE
                .get(Z.Id)
                .danger(tN.formatMessage(iI), { id: iI.id, variant: "dangerSolid", errorAnalytics: { toastId: iI.id } })
                .close
          }),
          (C = [iI, tN, tE]),
          (e2[26] = iI),
          (e2[27] = tN),
          (e2[28] = tE),
          (e2[29] = A),
          (e2[30] = C))
        : ((A = e2[29]), (C = e2[30])),
        (0, a.useEffect)(A, C))
      let [iE, iD] = (0, a.useState)(),
        [iN, iM] = (0, a.useState)(null),
        iP = (0, a.useRef)(!1)
      e2[31] !== iC
        ? ((S =
            "error" === iC
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, s.jsx)(c.A, { ...eB.W.error }),
                })
              : null),
          (e2[31] = iC),
          (e2[32] = S))
        : (S = e2[32])
      let iT = S
      e2[33] !== t1 || e2[34] !== tZ
        ? ((I = (0, e0.my)(tZ, t1)), (e2[33] = t1), (e2[34] = tZ), (e2[35] = I))
        : (I = e2[35])
      let iF = I
      e2[36] !== t1.values.website || e2[37] !== tI || e2[38] !== tw || e2[39] !== t2 || e2[40] !== tx
        ? ((k = () => {
            let e = tw?.shopify_verification ?? tw?.website_verification,
              t = t1.values.website
            if (null == tx || "website" !== t2 || tI || null == e || !t?.trim() || (0, e0.wZ)(tw, "website", t))
              return !1
            try {
              return new URL(e.website).href === new URL((0, O.DX)(t)).href
            } catch {
              return !1
            }
          }),
          (e2[36] = t1.values.website),
          (e2[37] = tI),
          (e2[38] = tw),
          (e2[39] = t2),
          (e2[40] = tx),
          (e2[41] = k))
        : (k = e2[41])
      let [iL, iR] = (0, a.useState)(k)
      e2[42] !== t1.values || e2[43] !== tw || e2[44] !== iF || e2[45] !== t2 || e2[46] !== tx
        ? ((E = () =>
            null != tx &&
            "phone" === t2 &&
            (tw?.contact_verifications.some(
              (e) =>
                e.field === iF && "verified" !== e.status && e.target === (0, O.Re)(e.field, t1.values[e.field] ?? ""),
            ) ??
              !1)),
          (e2[42] = t1.values),
          (e2[43] = tw),
          (e2[44] = iF),
          (e2[45] = t2),
          (e2[46] = tx),
          (e2[47] = E))
        : (E = e2[47])
      let [iW, iB] = (0, a.useState)(E),
        [iO, iz] = (0, a.useState)()
      e2[48] !== t1.values || e2[49] !== tZ || e2[50] !== iF || e2[51] !== t2 || e2[52] !== tx || e2[53] !== iW
        ? ((D =
            null != tx && "phone" === t2 && iW
              ? tZ?.contact_verifications.find(
                  (e) =>
                    e.field === iF &&
                    e.target === (0, O.Re)(e.field, t1.values[e.field] ?? "") &&
                    "pending" === e.status,
                )
              : void 0),
          (e2[48] = t1.values),
          (e2[49] = tZ),
          (e2[50] = iF),
          (e2[51] = t2),
          (e2[52] = tx),
          (e2[53] = iW),
          (e2[54] = D))
        : (D = e2[54])
      let i$ = D,
        iq = i$?.field === "email" && null != iO && i$.target === iO.target && i$.challenge_id === iO.challenge_id,
        iU = tZ?.session_id,
        iV = i$?.field,
        iK = i$?.target,
        iH = i$?.challenge_id,
        iJ = tZ?.accepted_revision
      ;(e2[55] !== e4 || e2[56] !== iU || e2[57] !== iV || e2[58] !== iK || e2[59] !== iH || e2[60] !== iJ
        ? ((N = ["business-profiles", e4, "creation-contact-delivery", iU, iV, iK, iH, iJ]),
          (e2[55] = e4),
          (e2[56] = iU),
          (e2[57] = iV),
          (e2[58] = iK),
          (e2[59] = iH),
          (e2[60] = iJ),
          (e2[61] = N))
        : (N = e2[61]),
        e2[62] !== i$ || e2[63] !== tx
          ? ((M =
              null == tx || null == i$
                ? H.hT
                : (e) => {
                    let { signal: t } = e
                    return tx.read(t)
                  }),
            (e2[62] = i$),
            (e2[63] = tx),
            (e2[64] = M))
          : (M = e2[64]))
      let iG = null != i$ && !iq && !iv && null == iN
      ;(e2[65] !== i$
        ? ((P = (e) =>
            !!(
              null != i$ &&
              "error" !== e.state.status &&
              e.state.dataUpdateCount < 30 &&
              (0, e0.z8)(e.state.data)?.contact_verifications.some(
                (e) =>
                  e.field === i$.field &&
                  e.target === i$.target &&
                  e.challenge_id === i$.challenge_id &&
                  "pending" === e.status,
              )
            ) && 1e3),
          (e2[65] = i$),
          (e2[66] = P))
        : (P = e2[66]),
        e2[67] !== N || e2[68] !== M || e2[69] !== iG || e2[70] !== P
          ? ((F = {
              queryKey: N,
              queryFn: M,
              enabled: iG,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 0,
              gcTime: 0,
              refetchInterval: P,
            }),
            (e2[67] = N),
            (e2[68] = M),
            (e2[69] = iG),
            (e2[70] = P),
            (e2[71] = F))
          : (F = e2[71]))
      let iQ = (0, G.I)(F),
        iZ = (0, e0.z8)(iQ.data),
        iX =
          null != i$ &&
          iZ?.session_id === tZ?.session_id &&
          iZ?.contact_verifications.some(
            (e) => e.field === i$.field && e.target === i$.target && e.challenge_id === i$.challenge_id,
          )
            ? iZ
            : tZ,
        iY = "address" === ib && null != iX ? (0, e0.Qj)(iX.session_id, t1.name, t1.values.address ?? "") : void 0,
        i1 = ia && null != id && id.key === iY ? id.match : void 0,
        i0 = (0, O.Cu)(t1),
        i2 = i0[i0.indexOf("import" === t2 ? (tz ? "address" : "website") : t2) + 1] ?? "type",
        i3 = t2 === i0.at(-1)
      e2[72] !== t1 || e2[73] !== t6 || e2[74] !== t2 || e2[75] !== t8
        ? ((L = "import" === t2 && null != t6 && t8 ? (0, O.Uh)(t1, t6) : t1),
          (e2[72] = t1),
          (e2[73] = t6),
          (e2[74] = t2),
          (e2[75] = t8),
          (e2[76] = L))
        : (L = e2[76])
      let i4 = L,
        i5 = (0, O.Gk)(i4),
        i6 = t1.values.category,
        i7 = !!i6 && (null != tx ? (0, e0.wZ)(iX, "category", i6) : tn?.profileId != null && i6 === tn.values.category),
        i8 = function (e) {
          return !(null == tA || "website" !== e || t1.values.website?.trim()) || (0, O.J5)(e, t1, i7)
        },
        i9 = i8(t2),
        se = {
          queryKey: ["business-profile-creation-entry", t5, tL.accountId, tM, "creation_local"],
          queryFn: (e) => {
            let { signal: t } = e
            return (0, eA.En)(tL, "creation_local", t)
          },
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
        },
        st = JSON.stringify([tL.accountId, tM, t1.businessType]),
        si = (void 0 === tp || tp) && null == tw && tn?.profileId == null,
        ss = si && tB !== st,
        sn = null != tg && (!ss || "type" === t2),
        sl = null != e9 && null == tg && !ss
      ;(0, G.I)({ ...se, staleTime: 1 / 0, enabled: !1 })
      let sr = null != tx ? iX?.contact_verifications : tV?.contact_verifications,
        [sa, so] = (0, a.useState)(),
        su = null == sa ? sr : [sa],
        sc =
          sa?.field ??
          ["phone", "email"].find((e) => {
            let t = t1.values[e]?.trim()
            return (
              t &&
              !(null != tx
                ? (0, e0.wZ)(iX, e, t)
                : tV?.contact_verifications?.some(
                    (i) => i.field === e && "verified" === i.status && i.target === (0, O.Re)(e, t),
                  ))
            )
          }),
        sd = "phone" === t2 && iW && "phone" === sc && null != tx ? (0, O.Re)("phone", t1.values.phone ?? "") : null
      e2[77] !== sd || e2[78] !== tx
        ? ((R =
            sd && null != tx
              ? (e) => {
                  let { signal: t } = e
                  return tx.getPhoneDeliveryChannels(sd, t)
                }
              : H.hT),
          (e2[77] = sd),
          (e2[78] = tx),
          (e2[79] = R))
        : (R = e2[79])
      let sf = (0, G.I)({
        queryKey: ["business-profiles", e4, "creation-phone-channels", iX?.session_id, sd],
        queryFn: R,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 0,
      })
      e2[80] !== tj || e2[81] !== tx
        ? ((W = function (e) {
            tx?.throwIfAborted()
            let t = (0, e0.z8)(e)
            if (null == t) throw Error("Creation session is unavailable")
            return (tQ(t), tj?.(t.expires_at), t)
          }),
          (e2[80] = tj),
          (e2[81] = tx),
          (e2[82] = W))
        : (W = e2[82])
      let sh = W
      e2[83] !== t_ || e2[84] !== tE
        ? ((Y = function (e) {
            if ((0, e1.er)(e)) return void iA(!0)
            if ((0, eb.$)(e)) return void (0, eg.H)(tE)
            let t = (0, eZ.k)(e) ?? (0, e0.y5)(e)
            "expired" === t ? t_?.() : iS(t)
          }),
          (e2[83] = t_),
          (e2[84] = tE),
          (e2[85] = Y))
        : (Y = e2[85])
      let sp = Y,
        sm = function (e) {
          ;(i_.current && (i_.current.abort(), (i_.current = null), it(!1), ir(!1)),
            t0(e),
            ss || tx?.savePending(e, t2))
        }
      e2[86] !== sh || e2[87] !== tU || e2[88] !== tx
        ? ((eE = function (e) {
            if (null != tx) return void sh(e)
            if ((tU?.throwIfAborted(), null == e.creation)) throw Error("The draft was not saved")
            let t = e.creation,
              i = t.contact_verifications?.find(tc)?.resend_available_at
            ;(tJ((e) =>
              null != i
                ? { profileId: t.business_profile_id, resendAvailableAt: i }
                : e?.profileId === t.business_profile_id
                  ? e
                  : void 0,
            ),
              tK(t),
              t0((t) => ({ ...t, profileId: e.creation?.business_profile_id })))
          }),
          (e2[86] = sh),
          (e2[87] = tU),
          (e2[88] = tx),
          (e2[89] = eE))
        : (eE = e2[89])
      let sb = eE
      e2[90] !== sb || e2[91] !== t1 || e2[92] !== sp || e2[93] !== tE || e2[94] !== tU || e2[95] !== tx
        ? ((eD = function (e, t) {
            return ("email" === e && iD(void 0),
            "phone" === e && tY({ target: (0, O.Re)("phone", t1.values.phone ?? ""), channel: t }),
            null != tx)
              ? (it(!0),
                tx
                  .send(e, t1.values[e] ?? "", t)
                  .then((t) => {
                    ;(sb(t),
                      "email" === e &&
                        iz(
                          (0, e0.z8)(t)?.contact_verifications.find(
                            (e) =>
                              "email" === e.field &&
                              "pending" === e.status &&
                              e.target === (0, O.Re)("email", t1.values.email ?? ""),
                          ),
                        ))
                  })
                  .catch((e) => {
                    throw (sp(e), e)
                  })
                  .finally(() => it(!1)))
              : null == tU
                ? Promise.reject(Error("Contact verification is unavailable"))
                : (it(!0),
                  tU
                    .save(t1)
                    .then((i) => {
                      if ((sb(i), null == i.creation)) throw Error("The draft was not saved")
                      return tU.send(i.creation.business_profile_id, e, t)
                    })
                    .then(sb)
                    .catch(async (e) => {
                      if ((0, e1.er)(e)) throw (sp(e), e)
                      if ((0, eb.$)(e)) throw ((0, eg.H)(tE), e)
                      throw (null != t1.profileId && sb(await tU.read(t1.profileId)), e)
                    })
                    .finally(() => it(!1)))
          }),
          (e2[90] = sb),
          (e2[91] = t1),
          (e2[92] = sp),
          (e2[93] = tE),
          (e2[94] = tU),
          (e2[95] = tx),
          (e2[96] = eD))
        : (eD = e2[96])
      let sg = eD
      e2[97] !== t1 || e2[98] !== ss || e2[99] !== tx
        ? ((eN = function (e, t) {
            let i = void 0 === t ? t1 : t
            ;(iS(null), t3(e), ss || tx?.savePending(i, e))
          }),
          (e2[97] = t1),
          (e2[98] = ss),
          (e2[99] = tx),
          (e2[100] = eN))
        : (eN = e2[100])
      let sv = eN,
        sy = async function (e) {
          t0(e)
          let t = e.businessType
          if (si) {
            if ("local_business" === t) {
              let e = await tq.fetchQuery(se)
              if ("continue" !== e) return void tW(e)
            }
            t3("website")
            return
          }
          if (null == tx) return void sv("website", e)
          let i = tg?.() ?? tb?.(t) ?? tx.start(tx.isNameFirst() ? null : t)
          null == tg && tx.savePending(e, "type")
          let s = sh(await i)
          if (tx.isNameFirst() && null != s.details.business_type && s.details.business_type !== t) {
            let t = tx.start(null, { replacedSessionId: s.session_id, name: e.name })
            ;(tx.savePending(e, "type"), (s = sh(await t)))
          }
          ;((0, e0.wZ)(s, "name", e.name) || sh(await tx.accept("name", e.name)),
            null == s.details.business_type && sh(await tx.start(t)),
            t3("website"),
            tx.savePending(e, "website"))
        },
        sx = function (e) {
          let t = { ...t1, businessType: e }
          ;(t$(!1),
            iS(null),
            is(e),
            sy(t)
              .catch(sp)
              .finally(() => is(null)))
        }
      e2[101] !== t1.values.email || e2[102] !== sp || e2[103] !== sg
        ? ((eM = async function (e, t) {
            let i = t1.values.email ?? ""
            ;(0, $.g)(e, (0, O.Re)("email", i), t) &&
              (await sg("email", "sms").catch((e) => {
                ;(0, eb.$)(e) || (iD({ target: i, error: e }), sp(e))
              }))
          }),
          (e2[101] = t1.values.email),
          (e2[102] = sp),
          (e2[103] = sg),
          (e2[104] = eM))
        : (eM = e2[104])
      let sw = eM,
        s_ = async function (e, t) {
          sb(e)
          let i = (t) =>
              null != tx
                ? (0, e0.wZ)((0, e0.z8)(e), t, t1.values[t] ?? null)
                : (e.creation?.contact_verifications?.some(
                    (e) => e.field === t && "verified" === e.status && e.target === (0, O.Re)(t, t1.values[t] ?? ""),
                  ) ?? !1),
            s = i(t)
          return (
            s &&
              (iS(null),
              "phone" === t2 &&
                ["phone", "email"].every((e) => !t1.values[e]?.trim() || i(e)) &&
                (iB(!1), sv(i0[i0.indexOf(t2) + 1] ?? t2))),
            s &&
              "phone" === t &&
              t1.values.email?.trim() &&
              !i("email") &&
              (so(su?.find((e) => "phone" === e.field && e.target === (0, O.Re)("phone", t1.values.phone ?? ""))),
              await sw("email", (0, e0.z8)(e)?.contact_verifications ?? e.creation?.contact_verifications).finally(() =>
                so(void 0),
              )),
            s
          )
        },
        sj = function (e, t, i) {
          tF ||
            (null != e4 && tP !== e4) ||
            (0, eo.m)(tE, tL, {
              flow: "create",
              screen: e,
              journeyId: e3,
              businessType: t1.businessType,
              method: t,
              action: i,
            })
        },
        sA = function (e, t) {
          let i = "phone" === e ? "phone_code" : "email_code"
          return (
            sj(i, e, "verification_started"),
            t().then(
              (t) => (sj(i, e, t ? "verification_passed" : "verification_failed"), t),
              (t) => {
                throw ((t instanceof DOMException && "AbortError" === t.name) || sj(i, e, "verification_failed"), t)
              },
            )
          )
        },
        sC = function (e, t) {
          let i = su?.find((t) => t.field === e && t.target === (0, O.Re)(e, t1.values[e] ?? "")),
            s = i?.challenge_id
          if (null == s) return Promise.resolve(!1)
          if (null != tx)
            return (
              it(!0),
              sA(e, () =>
                tx
                  .verify(e, s, t)
                  .then((t) => s_(t, e))
                  .catch(async (t) => {
                    if ((sp(t), "expired" !== (0, e0.y5)(t) && (await s_(await tx.read(), e)))) return !0
                    throw t
                  }),
              ).finally(() => it(!1))
            )
          let n = t1.profileId
          return null == tU || null == n
            ? Promise.resolve(!1)
            : (it(!0),
              sA(e, () =>
                tU
                  .verify(n, e, s, t)
                  .then((t) => s_(t, e))
                  .catch(async (t) => {
                    if (await s_(await tU.read(n), e)) return !0
                    throw t
                  }),
              ).finally(() => it(!1)))
        },
        sS = function (e, t) {
          let i = t1.shopifyAppFunnel
          if (null != i && "website" === e) {
            let e = URL.parse((0, O.DX)(t1.values.website ?? "")),
              s = URL.parse((0, O.DX)(t))
            i = {
              ...i,
              websiteEdited: !0 === i.websiteEdited || (null != s && e?.hostname !== s.hostname),
              method: e?.href === s?.href ? i.method : void 0,
            }
          }
          ;(sm("name" === e ? { ...t1, name: t } : { ...t1, values: { ...t1.values, [e]: t }, shopifyAppFunnel: i }),
            iS(null),
            iB(!1),
            iR(!1))
        },
        sI = function (e, t) {
          null == t || sS(e, "clear" === t.operation ? "" : (t.value ?? ""))
        },
        sk = function () {
          if ((i_.current?.abort(), iL)) return void iR(!1)
          if (iW) {
            ;(tQ(iX), iB(!1))
            return
          }
          "import" === t2 ? sv("website") : sv(i0[Math.max(0, i0.indexOf(t2) - 1)] ?? "type")
        },
        sE = async function (e) {
          if (iv) return !1
          ;(it(!0), iS(null))
          try {
            if (null != tx) {
              let e = iX?.shopify_verification
              ;(e?.status === "pending" && sh(await tx.cancelShopify(e.id)), tx.clear())
            } else if (null != t1.profileId) {
              let e = await tU?.cancel(t1.profileId)
              if (e?.creation?.status !== "cancelled") return (iS("error"), it(!1), !1)
              tq.invalidateQueries({ queryKey: ["business-profiles", e4, "creations"] })
            }
          } catch {
            return (iS("error"), it(!1), !1)
          }
          return (it(!1), (iP.current = !0), (void 0 === e || e) && e8(), !0)
        },
        sD = function () {
          ;(null != tB && tx?.clear(), (iP.current = !0))
        },
        sN = function () {
          ;(sD(), tD("/"))
        },
        sM = function () {
          ;(null != tR && sD(), (iP.current = !0))
        },
        sP = function () {
          if (!iv && null != e9) {
            if (!tx?.saveForExit(iX)) return void iS("error")
            ;((iP.current = !0), e9())
          }
        },
        sT = function (e) {
          if (null != tR) {
            ;(sD(), e8())
            return
          }
          sn ? (tx?.clear(), e8()) : iv || (e && iS(null), iM(e ? "save" : "discard"))
        }
      e2[105] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = function (e, t) {
            let i = e?.website_verification
            return (0, e0.wZ)(e, "website", t) && !(i?.test_override && (0, e0.wZ)(e, "website", i.website) && 1)
          }),
          (e2[105] = eP))
        : (eP = e2[105])
      let sF = eP,
        sL = async function (e, t) {
          let i = void 0 === t ? iX : t,
            s = (0, O.DX)(t1.values.website ?? ""),
            n = { ...t1, values: { ...t1.values, website: s } }
          ;(null != t1.shopifyAppFunnel && (n.shopifyAppFunnel = { ...t1.shopifyAppFunnel, method: (0, eY.EL)(i, s) }),
            iR(!1),
            t0(n))
          let l = s && ty?.importWebsite != null ? await ty.importWebsite(s) : null
          ;(e?.throwIfAborted(),
            tx?.throwIfAborted(),
            t7(l),
            t9(!0),
            null == l && t$(!1),
            sv(null == l ? i2 : "import", n))
        },
        sR = async function (e) {
          if (null == tx) throw Error("Website verification is unavailable")
          let t = (0, O.DX)(t1.values.website ?? ""),
            i = iX?.website_verification,
            s = await tx.startWebsite(t, i?.checks_exhausted ? i.challenge_id : void 0)
          e?.throwIfAborted()
          let n = (0, e0.z8)(s),
            l = sF(n, t)
          if (!l && !(0, e0.uN)(n?.website_verification, t)) throw Error("Website verification is unavailable")
          return (sb(s), l && (await sL(e, n)), l)
        }
      e2[106] !== e4 || e2[107] !== tM
        ? ((eT = function (e, t) {
            return ["business-profiles", e4, tM, "creation-website-discovery", e?.session_id, e?.accepted_revision, t]
          }),
          (e2[106] = e4),
          (e2[107] = tM),
          (e2[108] = eT))
        : (eT = e2[108])
      let sW = eT,
        sB = async function (e) {
          let t = void 0 === e ? "all" : e
          if (tk || ie || ("all" === t && ip) || null != i_.current) return
          if (!i9) return void iS("invalid")
          ;(iS(null),
            null == i1 && ih(void 0),
            it(!0),
            ir(ig && "website" === ib && "all" === t && !!t1.values.website?.trim()))
          let i = new AbortController()
          ;((i_.current = i),
            await (async function (e, t) {
              let i = ss && null != e4 && null != tM
              if (i && "website" === t2 && "local_business" === t1.businessType) {
                ;(t$(!0), sv("address"))
                return
              }
              if ("address" === ib && ("skip" !== e || null != i1) && null != e4 && null != tM && t1.values.address) {
                let i = tx ?? (0, e0.vC)(e4, tM)
                if (await sz(i, t1.values.address, t, "all" === e)) return
              }
              i && null != ib && null == tx && tO(st)
              let s = "website" === t2 || ("address" === t2 && tz && !!t1.values.website?.trim())
              if (s && null != tA) return void (await tA(t1, t))
              let n = iX,
                l = !1,
                r = t1
              if (null != tx) {
                if (
                  (i &&
                    null == n &&
                    tC &&
                    ((n = sh(await (tb?.(null) ?? tx.start(null, { name: t1.name })))),
                    t.throwIfAborted(),
                    (0, e0.wZ)(n, "name", t1.name) || (n = sh(await tx.accept("name", t1.name)))),
                  t.throwIfAborted(),
                  tQ(n),
                  null == t1.businessType)
                )
                  throw Error("A business type is required")
                if (
                  ((null == n || n.details.business_type !== t1.businessType) &&
                    (n = sh(await (null == n && null != tb ? tb(t1.businessType) : tx.start(t1.businessType)))),
                  !(0, e0.wZ)(n, "name", t1.name))
                )
                  try {
                    n = sh(await tx.accept("name", t1.name))
                  } catch (e) {
                    throw (sv("type"), e)
                  }
                if ((i && tO(st), "all" === e && ig && "website" === ib)) {
                  let e = t1.values[ib]
                  if (e?.trim()) {
                    ir(!0)
                    let i = (t) => tx.checkDuplicate(ib, e, t, t1),
                      s = !1
                    try {
                      let e = await (0, z.A6)({
                        signal: t,
                        timeoutMs: 12e3,
                        isTransient: tr,
                        lookup: async (e) => {
                          let t = (await e(i))?.targetIds[0]
                          if (null == t || !tE.get(ek.n)) return null
                          s = !0
                          let n = (0, ey.t)()
                            ? void 0
                            : await e((e) =>
                                (0, ex.readProfileClaimPreparation)(t, { accountId: e4, getAbortSignal: () => e }),
                              )
                          return { profileId: n?.business_profile_id ?? t, preparedProfile: n }
                        },
                      })
                      if ((t.throwIfAborted(), null != e && tE.get(ek.n)))
                        return void iu({
                          profileId: e.profileId,
                          preparedProfile: e.preparedProfile,
                          sessionId: n.session_id,
                          claimAttempt: crypto.randomUUID(),
                        })
                    } catch (e) {
                      if (
                        (t.throwIfAborted(),
                        tx.throwIfAborted(),
                        s
                          ? tE.get(ek.n)
                          : (0, e1.Ml)(e) ||
                            (e instanceof Error && "AbortError" === e.name) ||
                            (e instanceof ee.FetchError && [401, 403].includes(e.status)))
                      )
                        throw e
                    }
                    ir(!1)
                  }
                }
                if ("phone" === t2) {
                  for (let e of ["phone", "email"])
                    t1.values[e]?.trim() || (0, e0.wZ)(n, e, null) || (n = sh(await tx.accept(e, null)))
                  let e = (0, e0.my)(n, t1)
                  if (null != e) {
                    ;(await sw(e, n?.contact_verifications), iB(!0))
                    return
                  }
                  iB(!1)
                }
                if ("address" === t2 && n.accepted_revision) {
                  let e = t1.values.address ?? null,
                    i = (0, ea.oR)(e, ea.Tq.strict()),
                    s = (0, e0.wZ)(n, "address", e) ? n.details.coordinates : null,
                    l = null == i ? null : await (0, eh.WZ)(tq, i, null != s)
                  if (
                    (t.throwIfAborted(),
                    tx.throwIfAborted(),
                    null != i &&
                      l?.featureId &&
                      l.featureId.length <= 512 &&
                      (l.latitude !== s?.latitude || l.longitude !== s?.longitude) &&
                      ((n = sh(
                        await tx
                          .accept(
                            "address",
                            JSON.stringify({
                              ...i,
                              proposed_location: {
                                source: "mapbox",
                                feature_id: l.featureId,
                                latitude: l.latitude,
                                longitude: l.longitude,
                                address: i,
                                expected_revision: n.accepted_revision,
                              },
                            }),
                          )
                          .catch(async (e) => {
                            throw ((0, e0.$B)(e) && sh(await tx.read(t)), e)
                          }),
                      )),
                      t.throwIfAborted(),
                      !(0, e0.wZ)(n, "address", e)))
                  )
                    throw Error("The creation address was not accepted")
                }
                if ("type" !== t2 && "import" !== t2 && "phone" !== t2)
                  for (let e of ts[t2]) {
                    if ("website" === e && t1.values.website?.trim()) continue
                    let t = t1.values[e] || null
                    ;(0, e0.wZ)(n, e, t) ||
                      ((n = sh(await ("website" === e ? tx.accept(e, null) : tx.accept(e, t)))), (l = !0))
                  }
                if (s && t1.values.website?.trim() && !sF(n, t1.values.website)) {
                  let e = (0, O.DX)(t1.values.website)
                  if (!(0, e0.uN)(n.website_verification, e) && !(0, e0.LO)(n, e)) {
                    var a
                    let i = tq.getQueryState(sW(n, e)),
                      s = (0, e0.z8)(i?.data),
                      l = (0, q.eQ)(i?.data?.website_discovery, e)
                    if (
                      e4 &&
                      tM &&
                      n.accepted_revision &&
                      i?.status === "success" &&
                      !i.isInvalidated &&
                      s?.session_id === n.session_id &&
                      s.accepted_revision === n.accepted_revision &&
                      null != (a = l?.expires_at) &&
                      Date.parse(a) > Date.now()
                    )
                      return void iR(!0)
                    iR("preparing")
                    let r = await tx.prepareWebsite(e, t, n).catch((e) => {
                      throw (
                        t.aborted ||
                          (0, eY.Q1)(tE, t4, {
                            stage: "verification_options_failed",
                            outcome: "request_failed",
                            websiteEdited: t1.shopifyAppFunnel?.websiteEdited ?? !1,
                          }),
                        e
                      )
                    })
                    ;(t.throwIfAborted(), tx.throwIfAborted())
                    let o = (0, e0.z8)(r)
                    if ((null != o && sh(r), sF(o, e))) return sL(t, o)
                    if (
                      !(0, q.eQ)(r.website_discovery, e) &&
                      !(0, e0.uN)(o?.website_verification, e) &&
                      !(0, e0.LO)(o, e)
                    )
                      throw (
                        (0, eY.Q1)(tE, t4, {
                          stage: "verification_options_failed",
                          outcome: "unavailable",
                          websiteEdited: t1.shopifyAppFunnel?.websiteEdited ?? !1,
                        }),
                        Error("Website verification is unavailable")
                      )
                    tq.setQueryData(sW(o ?? n, e), r)
                  }
                  iR(!0)
                  return
                }
              }
              if (null == tx && "phone" === t2 && t1.contactVerificationRequired) {
                if (null == tU) throw Error("Contact verification is unavailable")
                let e = await tU.save(t1)
                ;(sb(e), (r = { ...t1, profileId: e.creation?.business_profile_id }))
                let t = ["phone", "email"].find(
                  (t) =>
                    t1.values[t]?.trim() &&
                    !e.creation?.contact_verifications?.some((e) => e.field === t && "verified" === e.status),
                )
                if (t) {
                  ;(await sw(t, e.creation?.contact_verifications), iB(!0))
                  return
                }
                iB(!1)
              }
              if (i3) {
                if (null != tx) {
                  l || (n = sh(await tx.read(t)))
                  let e = i0.find((e) =>
                    "type" === e
                      ? !(0, e0.wZ)(n, "name", t1.name) || n?.details.business_type !== t1.businessType
                      : "import" !== e &&
                        ("phone" === e
                          ? !(0, e0.wZ)(n, "phone", t1.values.phone ?? null) ||
                            !(0, e0.wZ)(n, "email", t1.values.email ?? null)
                          : ts[e].some((e) => !(0, e0.wZ)(n, e, t1.values[e] ?? null))),
                  )
                  if (null != e) {
                    ;(sv(e), iS("invalid"))
                    return
                  }
                }
                let e = i0.find((e) => !i8(e))
                if (null != e) {
                  ;(sv(e), iS("invalid"))
                  return
                }
                null != tx ||
                  null == tU ||
                  ("phone" === t2 && t1.contactVerificationRequired) ||
                  null == t1.profileId ||
                  sb(await tU.save(t1))
                let i = r.shopifyAppFunnel
                tt(
                  null == n
                    ? r
                    : {
                        name: n.details.name,
                        businessType: n.details.business_type,
                        values: n.details.values,
                        contactVerificationRequired: !0,
                        ...(null == i
                          ? {}
                          : { shopifyAppFunnel: { ...i, method: (0, eY.EL)(n, n.details.values.website) } }),
                      },
                  n?.accepted_revision,
                )
                return
              }
              if (s) return void (await sL(t))
              if ("import" === t2) {
                let e = t8 && null != t6 ? (0, O.Uh)(t1, t6) : t1
                ;(t$(!1), sm(e), sv(i2, e))
                return
              }
              sv(i2)
            })(t, i.signal)
              .catch((e) => {
                i.signal.aborted || (iR(tu), sp(e), i.abort())
              })
              .finally(() => {
                i_.current === i && ((i_.current = null), ir(!1), it(!1))
              }))
        }
      e2[109] !== e4 || e2[110] !== t1 || e2[111] !== i1 || e2[112] !== ia
        ? ((eF = async function (e, t, i, s) {
            if (null != i1) return { ...i1, claimAttempt: crypto.randomUUID() }
            if (!ia) return
            let n = await e.checkDuplicate("address", t, i, t1, null == s)
            if (null == n) return
            let l = await Promise.allSettled(
              n.targetIds.map((e) =>
                (0, ex.readProfileClaimPreparation)(e, { accountId: e4, getAbortSignal: () => i }),
              ),
            )
            i.throwIfAborted()
            let r = l.flatMap(to)
            if (r.length > 0 || n.places.length > 0) {
              let { matches: e, openDirectly: t } = (function (e, t, i, s, n) {
                let l = [
                    ...t.map((e) => ({
                      id: e.business_profile_id,
                      name: e.display_name,
                      address: e.display_address,
                      hasExactAddress: s.includes(e.business_profile_id),
                      profile: e,
                    })),
                    ...i.map((e) => ({
                      id: e.entity_lookup_id,
                      name: e.display_name,
                      hasExactAddress: s.includes(e.entity_lookup_id),
                      place: e,
                    })),
                  ],
                  r = eS(e),
                  a = l.filter((e) => "" !== r && eS(e.name) === r)
                if (n && 1 === a.length && a[0].hasExactAddress && !a[0].profile?.can_manage)
                  return { matches: a, openDirectly: !0 }
                let o = new eC.A(l, {
                  keys: [{ name: "name", getFn: (e) => e.name.normalize("NFKC") }],
                  useTokenSearch: !0,
                  tokenize: /[\p{L}\p{M}\p{N}_]+|\p{S}/gu,
                  ignoreDiacritics: !0,
                  includeScore: !0,
                })
                  .search(e.normalize("NFKC"))
                  .map(({ item: e, score: t }) => {
                    let i = eS(e.name).length
                    return { item: e, distance: (t ?? 1) + Math.abs(i - r.length) / Math.max(1, i, r.length) }
                  })
                return (
                  o.sort((e, t) => e.distance - t.distance),
                  { matches: [...new Set([...a, ...o.map(({ item: e }) => e), ...l])].slice(0, 5), openDirectly: !1 }
                )
              })(t1.name, r, n.places, n.exactAddressIds, l.every(ta))
              return { claimAttempt: t ? crypto.randomUUID() : void 0, matches: e, sessionId: s, decline: n.decline }
            }
          }),
          (e2[109] = e4),
          (e2[110] = t1),
          (e2[111] = i1),
          (e2[112] = ia),
          (e2[113] = eF))
        : (eF = e2[113])
      let sO = eF,
        sz = async function (e, t, i, s) {
          ir(!0)
          let n = iX?.details.business_type === "local_business" ? iX.session_id : void 0,
            l = ss ? void 0 : n,
            r = AbortSignal.any([i, AbortSignal.timeout(8e3)]),
            a = Promise.allSettled([s || null != i1 ? sO(e, t, null == l ? i : r, l) : void 0]),
            o = !1
          try {
            await e.checkLocalSubmission(t1.name, t, r, t1.profileId ?? n)
          } catch (t) {
            if ((i.throwIfAborted(), e.throwIfAborted(), !(0, ep.O)(t))) {
              if (
                null != (0, eZ.k)(t) ||
                (t instanceof Error && "AbortError" === t.name) ||
                (t instanceof ee.FetchError && [401, 403, 429].includes(t.status))
              )
                throw t
              o = !0
            }
          }
          let [u] = await a
          if ((i.throwIfAborted(), e.throwIfAborted(), "fulfilled" === u.status && null != u.value))
            return (o ? iS("error") : iu(u.value), !0)
          if (
            null == l &&
            "rejected" === u.status &&
            u.reason instanceof ee.FetchError &&
            [401, 403, 429].includes(u.reason.status)
          )
            throw u.reason
          return (ir(!1), !1)
        }
      e2[114] === Symbol.for("react.memo_cache_sentinel")
        ? ((eL = { address: "address", hours: "hours", delivery: "delivery_policy", returns: "returns_policy" }),
          (e2[114] = eL))
        : (eL = e2[114])
      let s$ = eL
      e2[115] !== t2 ? ((eR = (e) => e.field_key === s$[t2]), (e2[115] = t2), (e2[116] = eR)) : (eR = e2[116])
      let sq = i5.fields.find(eR)
      e2[117] !== t2
        ? ((eW = ["category", "phone"].includes(t2) ? t2 : "website"), (e2[117] = t2), (e2[118] = eW))
        : (eW = e2[118])
      let sU = eW,
        sV = su?.find((e) => "email" === e.field && e.target === (0, O.Re)("email", t1.values.email ?? ""))?.status,
        sK = (0, e$.a)(sV),
        sH = iW && "email" === sc,
        sJ = su?.find((e) => "phone" === e.field && e.target === (0, O.Re)("phone", t1.values.phone ?? ""))?.status,
        sG = eB.W.delivery_method
      "sent" === sJ ? (sG = eB.W.code) : "pending" === sJ && (sG = eB.W.verifyContactTarget)
      let sQ = eB.W[t2]
      if ((sH ? (sQ = eB.W.verifyContactTarget) : iW && "phone" === sc && (sQ = sG), e2[119] !== t1.values.phone)) {
        let e = (0, Q.l)(t1.values.phone ?? "", "US")
        ;((eO = e?.countryCallingCode === "1" ? e.formatNational() : (e?.formatInternational() ?? t1.values.phone)),
          (e2[119] = t1.values.phone),
          (e2[120] = eO))
      } else eO = e2[120]
      let sZ = eO,
        sX = iW && "phone" === sc && sG === eB.W.verifyContactTarget
      e2[121] !== t1.values.phone || e2[122] !== tX || e2[123] !== tx
        ? ((eq =
            tX?.target === (0, O.Re)("phone", t1.values.phone ?? "")
              ? tX.channel
              : tx?.pendingPhoneDelivery(t1.values.phone ?? "")),
          (e2[121] = t1.values.phone),
          (e2[122] = tX),
          (e2[123] = tx),
          (e2[124] = eq))
        : (eq = e2[124])
      let sY = eq,
        s1 = i3 ? eB.W.submit : eB.W.continue
      if (ij) {
        let e, t, i
        e2[125] !== e3 || e2[126] !== t1.businessType
          ? ((e = (0, s.jsx)(eo.I, {
              flow: "create",
              screen: "protected_website",
              journeyId: e3,
              businessType: t1.businessType,
            })),
            (e2[125] = e3),
            (e2[126] = t1.businessType),
            (e2[127] = e))
          : (e = e2[127])
        let n = tV?.business_profile_id ?? t1.profileId,
          l = tT ?? null
        return (
          e2[128] !== t1.name || e2[129] !== t1.values.website || e2[130] !== e8 || e2[131] !== n || e2[132] !== l
            ? ((t = (0, s.jsx)(ev.ProtectedProfileClaimSupport, {
                businessName: t1.name,
                businessProfileId: n,
                websiteUrl: t1.values.website,
                email: l,
                onClose: e8,
              })),
              (e2[128] = t1.name),
              (e2[129] = t1.values.website),
              (e2[130] = e8),
              (e2[131] = n),
              (e2[132] = l),
              (e2[133] = t))
            : (t = e2[133]),
          e2[134] !== e || e2[135] !== t
            ? ((i = (0, s.jsxs)(s.Fragment, { children: [e, t] })), (e2[134] = e), (e2[135] = t), (e2[136] = i))
            : (i = e2[136]),
          i
        )
      }
      e2[137] !== sU || e2[138] !== t2
        ? ((eU = (e) =>
            e.field_key === sU ||
            ("category" === t2 && "description" === e.field_key) ||
            ("phone" === t2 && "email" === e.field_key)),
          (e2[137] = sU),
          (e2[138] = t2),
          (e2[139] = eU))
        : (eU = e2[139])
      let s0 = { ...i5, fields: i5.fields.filter(eU) },
        s2 = null
      if (null != ic && null != e4) {
        let e
        e2[140] !== iY || e2[141] !== ic || e2[142] !== ip || e2[143] !== t2
          ? ((e = (e) => {
              ;("address" === t2 &&
                ip &&
                null != iY &&
                ih({ key: iY, match: e ? { sessionId: ic.sessionId, profileId: e } : ic }),
                iu(void 0))
            }),
            (e2[140] = iY),
            (e2[141] = ic),
            (e2[142] = ip),
            (e2[143] = t2),
            (e2[144] = e))
          : (e = e2[144])
        let t = e
        if ("profileId" in ic) {
          let e
          ;(e2[145] !== ic.sessionId || e2[146] !== tx
            ? ((e = () => tx?.clear(ic.sessionId)), (e2[145] = ic.sessionId), (e2[146] = tx), (e2[147] = e))
            : (e = e2[147]),
            (s2 = (0, s.jsx)(
              ei.U,
              {
                claim: !0,
                profileId: ic.profileId,
                onClose: t,
                children: (0, s.jsx)(ev.CanonicalProfileClaim, {
                  acquisitionJourneyId: e3,
                  accountId: e4,
                  profileId: ic.profileId,
                  preparedProfile: ic.preparedProfile,
                  readProfile: "website" === t2 && (0, ey.t)() ? ti : void 0,
                  selectionQueryKey: ix,
                  showLoadingDialog: !1,
                  telemetryEntryPoint: "creation_duplicate",
                  onCreationClaimApproved: e,
                  onCloseAfterApproval: e8,
                  onWaitlistDone: sN,
                  onClose: t,
                  replaceOnAgentCompletion: !0,
                }),
              },
              ic.claimAttempt,
            )))
        } else {
          let e, i, n, l, r, a
          if (
            e2[148] !== e3 ||
            e2[149] !== t1.values.address ||
            e2[150] !== ic.claimAttempt ||
            e2[151] !== ic.matches
          ) {
            let t = (0, ea.oR)(t1.values.address ?? null, ea.Tq)
            ;((e = ez),
              (i = e3),
              (n = ic.claimAttempt),
              (l = ic.matches),
              (r = t ? (0, ea.dT)(t) : void 0),
              (e2[148] = e3),
              (e2[149] = t1.values.address),
              (e2[150] = ic.claimAttempt),
              (e2[151] = ic.matches),
              (e2[152] = e),
              (e2[153] = i),
              (e2[154] = n),
              (e2[155] = l),
              (e2[156] = r))
          } else ((e = e2[152]), (i = e2[153]), (n = e2[154]), (l = e2[155]), (r = e2[156]))
          ;(e2[157] !== ic.sessionId || e2[158] !== tx
            ? ((a = () => tx?.clear(ic.sessionId)), (e2[157] = ic.sessionId), (e2[158] = tx), (e2[159] = a))
            : (a = e2[159]),
            (s2 = (0, s.jsx)(
              e,
              {
                acquisitionJourneyId: i,
                matches: l,
                matchedAddress: r,
                preparedProfile: ip && null == i1 ? ic.matches[0]?.profile : void 0,
                selectionQueryKey: ip ? ix : void 0,
                accountId: e4,
                onClaimApproved: a,
                onWaitlistDone: sN,
                onClose: t,
                onCloseAfterApproval: e8,
                onContinueCreation: (e, t) => {
                  null != i1 && null != t
                    ? iu({ sessionId: ic.sessionId, profileId: t, claimAttempt: crypto.randomUUID() })
                    : (iu(void 0), "unavailable" === e && null != i1)
                      ? iS("error")
                      : ("declined" === e && ic.decline(), sB("skip"))
                },
              },
              n,
            )))
        }
      }
      let s3 = t2
      e2[160] === Symbol.for("react.memo_cache_sentinel")
        ? ((eV = {
            type: "business_type",
            website: "website",
            import: "website_import",
            category: "category",
            hours: "hours",
            address: "address",
            phone: "phone",
            delivery: "delivery_policy",
            returns: "returns_policy",
          }),
          (e2[160] = eV))
        : (eV = e2[160])
      let s4 = eV[t2]
      ;(sH
        ? ((s4 = "delivery_pending" === sK ? "email_pending" : "email_request"),
          "code" === sK && (s4 = "email_code"),
          (s3 = "code" === sK ? "code" : `email-${sK}`))
        : iW &&
          "phone" === sc &&
          ((s4 = sX ? "phone_pending" : "phone_delivery"),
          sG === eB.W.code && (s4 = "phone_code"),
          (s3 = sG === eB.W.code ? "code" : sG.id)),
        e2[161] === Symbol.for("react.memo_cache_sentinel")
          ? ((eK = { "website-dns": "website_dns", "website-verification": "website_options" }), (e2[161] = eK))
          : (eK = e2[161]))
      let s5 = eK,
        s6 = iW ? sc : void 0,
        s7 = (e) =>
          (0, s.jsxs)("div", {
            className:
              "sticky bottom-0 mt-auto flex flex-wrap items-start gap-2 bg-surface-card pt-6 sm:static sm:mt-0 sm:pt-0",
            children: [
              (0, s.jsx)(b.$, {
                type: "button",
                color: "outlineGhost",
                size: "formAction",
                disabled: tk || (ie && !il && !e),
                onClick: (t) => {
                  im || e
                    ? (i_.current?.abort(),
                      (i_.current = null),
                      (0, o.flushSync)(() => {
                        ;(ir(!1), iR(!1), it(!1), iu(void 0))
                      }),
                      t.currentTarget.form
                        ?.querySelector("address" === t2 ? 'input[name="business-address-search"]' : `#business-${t2}`)
                        ?.focus())
                    : sk()
                },
                children: (0, s.jsx)(c.A, { ...eB.W.back }),
              }),
              (0, s.jsx)(e_.C, {
                form: t5,
                type: "submit",
                size: "formAction",
                disabled: iv || e || !i9,
                disabledAppearance: im || e ? "unchanged" : "dimmed",
                pending: iv || e,
                sizingLabels: ig ? tN.formatMessage(s1) : void 0,
                "aria-busy": iv || e,
                "aria-label": tN.formatMessage(s1),
                children: (0, s.jsx)(c.A, { ...s1 }),
              }),
            ],
          })
      e2[162] !== t2
        ? ((eH = "type" === t2 ? (0, s.jsx)(ed.wK, { inDialog: !0 }) : null), (e2[162] = t2), (e2[163] = eH))
        : (eH = e2[163])
      let s8 = eH
      e2[164] !== sl ? ((eG = (e) => sl && "website-dns" === e), (e2[164] = sl), (e2[165] = eG)) : (eG = e2[165])
      let s9 = eG,
        ne = (e) => {
          let t = void 0 !== e && e
          return (0, s.jsx)(ec.L, {
            discardCreation: !0,
            busy: iv && !sn,
            dirty: !sn && !t,
            onDiscard: () => sE(!1),
            onNavigationDiscard: te,
            onLeaveWithoutConfirmation: t || null != tR ? sM : void 0,
            errorMessage: iT,
            allowNavigation: () => iP.current || !!tv?.(),
            blockSearchChanges: !0,
          })
        },
        nt = (e, t) => {
          let { stepKey: i, description: n, loadingWebsite: l } = void 0 === t ? {} : t,
            r = void 0 !== l && l
          return (0, s.jsxs)(eJ, {
            manager: i5,
            stepKey: i ?? s3,
            showHeading: "website-dns" !== i,
            description: n,
            busy: iv && !sn,
            pendingVerification: sX,
            title:
              sH && "code" === sK
                ? (0, s.jsx)(ew.k, { step: sK, destination: t1.values.email ?? void 0 })
                : (0, s.jsx)(c.A, {
                    ...sQ,
                    values: {
                      name: (0, s.jsx)("bdi", { children: t1.name }, "name"),
                      target: (0, s.jsx)(
                        "bdi",
                        { className: "wrap-anywhere", children: sH ? t1.values.email : sZ },
                        "target",
                      ),
                      phone: (0, s.jsx)(
                        "bdi",
                        { className: sQ === eB.W.code ? "block whitespace-nowrap" : "whitespace-nowrap", children: sZ },
                        "phone",
                      ),
                    },
                  }),
            onCancel: () => sT(s9(i)),
            exitLabel: s9(i) ? tN.formatMessage(eB.W.leaveDnsVerification) : void 0,
            showPreview: "type" !== t2,
            footer: "category" === t2 ? s7(r) : s8,
            children: [
              (0, s.jsx)(eo.I, {
                flow: "create",
                screen: r || null != s2 ? null : ((i && s5[i]) ?? s4),
                journeyId: e3,
                businessType: "type" === t2 ? void 0 : t1.businessType,
                method: "website-dns" === i ? "dns" : s6,
              }),
              ne(s9(i)),
              "type" !== t2 || null == tx || null != tg || tx.isNameFirst()
                ? null
                : (0, s.jsx)(et.c, {
                    draftOnly: !0,
                    manager: { ...i5, fields: i5.fields.filter(tl) },
                    drafts: {},
                    onDraftChange: sI,
                  }),
              "type" === t2 && tx?.isNameFirst() && null != iC
                ? (0, s.jsx)(b.$, {
                    color: "secondary",
                    disabled: iv,
                    onClick: () => {
                      sE()
                    },
                    children: (0, s.jsx)(c.A, { ...eB.W.changeName }),
                  })
                : null,
              "type" === t2
                ? (0, s.jsx)(X.t, {
                    variant: "outlined",
                    dividers: !1,
                    children: ["local_business", "ecommerce"].map((e) =>
                      (0, s.jsx)(
                        es.d,
                        {
                          type: "button",
                          unstyled: !0,
                          focusRing: "native",
                          disabledAppearance: "unchanged",
                          loading: ii === e,
                          disabled: iv || (null != tx && !t1.name.trim()),
                          className:
                            "relative flex w-full items-center gap-4 px-4 py-4 text-start after:pointer-events-none after:absolute after:start-14 after:end-4 after:bottom-0 after:h-px after:bg-border-subtle last:after:hidden hover:bg-secondary-ghost-hover disabled:cursor-default disabled:opacity-50 [&>span]:w-full",
                          onClick: () => {
                            sx(e)
                          },
                          children: (0, s.jsxs)("span", {
                            className: "flex w-full items-center gap-4",
                            children: [
                              "local_business" === e && (0, s.jsx)(T.I, { asset: V.K }),
                              "ecommerce" === e && (0, s.jsx)(T.I, { asset: U.j }),
                              (0, s.jsxs)("span", {
                                className: "flex min-w-0 flex-1 flex-col",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "text-base",
                                    children: (0, s.jsx)(c.A, {
                                      id: "businessProfiles.creation.type.option.label",
                                      defaultMessage:
                                        "{type, select, local_business {At a physical location} ecommerce {Through a website} other {Through a service}}",
                                      values: { type: e },
                                    }),
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-sm text-secondary",
                                    children: (0, s.jsx)(c.A, {
                                      id: "businessProfiles.creation.type.option.description",
                                      defaultMessage:
                                        "{type, select, local_business {Customers visit a store, restaurant, office, or other location.} ecommerce {Customers buy from your website or marketplace.} other {You visit customers or provide services remotely.}}",
                                      values: { type: e },
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(g.uM3, {}),
                            ],
                          }),
                        },
                        e,
                      ),
                    ),
                  })
                : null,
              "type" === t2 && null != ik
                ? (0, s.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, s.jsx)(c.A, { ...eB.W[ik] }),
                  })
                : null,
              e,
              "type" !== t2 && iW && null != sc
                ? (0, s.jsx)(
                    eI.a,
                    {
                      field: sc,
                      showInstructions: !1,
                      phoneChannels: sf.data?.phone_delivery_channels,
                      loadingPhoneChannels: sf.isLoading,
                      target: t1.values[sc] ?? "",
                      resendAvailableAt:
                        su?.find((e) => e.field === sc)?.resend_available_at ??
                        ("phone" === sc && tH?.profileId === tV?.business_profile_id ? tH?.resendAvailableAt : void 0),
                      verification: su?.find((e) => e.field === sc && e.target === (0, O.Re)(sc, t1.values[sc] ?? "")),
                      busy: iv,
                      initialSendError: "email" === sc && iE?.target === t1.values.email ? iE?.error : void 0,
                      onSend: (e) => sg(sc, e),
                      onBack: sk,
                      retryChannel: sY,
                      onVerify: (e) => sC(sc, e),
                      onCheck: () =>
                        null != tx
                          ? (it(!0),
                            tx
                              .read()
                              .then(sb)
                              .catch((e) => {
                                throw (sp(e), e)
                              })
                              .finally(() => it(!1)))
                          : null == tU || null == t1.profileId
                            ? Promise.resolve()
                            : (it(!0),
                              tU
                                .read(t1.profileId)
                                .then(sb)
                                .finally(() => it(!1))),
                    },
                    `${sc}:${t1.values[sc]}:${su?.find((e) => e.field === sc)?.challenge_id ?? "new"}:${su?.find((e) => e.field === sc)?.resend_available_at ?? ""}`,
                  )
                : null,
              "type" === t2 || null != e || (iW && null != sc)
                ? null
                : (0, s.jsxs)("form", {
                    id: t5,
                    noValidate: !0,
                    className: "flex flex-1 flex-col gap-6 sm:flex-none",
                    onSubmit: (e) => {
                      ;(e.preventDefault(), r || sB())
                    },
                    children: [
                      (0, s.jsxs)("fieldset", {
                        disabled: iv && !("website" === t2 && (im || r)),
                        className: "m-0 flex min-w-0 flex-col gap-6 border-0 p-0",
                        children: [
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              "website" === t2 || "phone" === t2
                                ? (0, s.jsx)(el.Z, {
                                    draftOnly: !0,
                                    manager: s0,
                                    drafts: {},
                                    onDraftChange: sI,
                                    websiteReadOnly: im || r,
                                    websiteError:
                                      "website" === t2 && t1.values.website?.trim() && !i9
                                        ? (0, s.jsx)(c.A, { ...er.f.invalidWebsite })
                                        : void 0,
                                  })
                                : null,
                              "category" === t2
                                ? (0, s.jsx)(et.c, {
                                    draftOnly: !0,
                                    manager: s0,
                                    drafts: {},
                                    onDraftChange: sI,
                                    creationSuggestions: { accountId: e4, scope: t5, draft: t1 },
                                  })
                                : null,
                              "hours" === t2 && null != sq
                                ? (0, s.jsx)(eu.O, {
                                    draftOnly: !0,
                                    profileId: "",
                                    field: sq,
                                    timezone: i5.timezone,
                                    draft: void 0,
                                    onDraftChange: (e) => sI("hours", e),
                                  })
                                : null,
                              "address" === t2 && null != sq
                                ? (0, s.jsx)(ef.g, {
                                    draftOnly: !0,
                                    profileId: "",
                                    field: sq,
                                    draft: void 0,
                                    onDraftChange: (e) => sI("address", e),
                                  })
                                : null,
                              ("delivery" === t2 || "returns" === t2) && null != sq
                                ? (0, s.jsx)(em.B, {
                                    draftOnly: !0,
                                    profileId: "",
                                    field: sq,
                                    currency: i5.policy_currency,
                                    draft: void 0,
                                    onDraftChange: (e) => sI(sq.field_key, e),
                                  })
                                : null,
                            ],
                          }),
                          "import" === t2
                            ? (0, s.jsxs)(X.t, {
                                variant: "outlined",
                                children: [
                                  (0, s.jsx)(en.t, {
                                    value: "yes",
                                    id: "creation-import-yes",
                                    name: "creation-import",
                                    checked: t8,
                                    onChange: () => t9(!0),
                                    ariaLabel: tN.formatMessage(eB.W.importYes),
                                    label: (0, s.jsx)(c.A, { ...eB.W.importYes }),
                                    description: (0, s.jsx)(c.A, {
                                      id: "businessProfiles.creation.import.help",
                                      defaultMessage:
                                        "We\u2019ll use these details to help set up your business profile.",
                                    }),
                                  }),
                                  (0, s.jsx)(en.t, {
                                    value: "no",
                                    id: "creation-import-no",
                                    name: "creation-import",
                                    checked: !t8,
                                    onChange: () => t9(!1),
                                    ariaLabel: tN.formatMessage(eB.W.importNo),
                                    label: (0, s.jsx)(c.A, { ...eB.W.importNo }),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                      null != ik
                        ? (0, s.jsx)("p", {
                            role: "alert",
                            className: "text-sm text-danger",
                            children: (0, s.jsx)(c.A, { ...eB.W[ik] }),
                          })
                        : null,
                      null == tx && null == tA && "error" === iC && "website" === t2
                        ? (0, s.jsx)(b.$, {
                            type: "button",
                            color: "secondary",
                            disabled: iv,
                            onClick: () => sv(i2),
                            children: (0, s.jsx)(c.A, {
                              id: "businessProfiles.creation.import.manual.label",
                              defaultMessage: "Set up manually",
                            }),
                          })
                        : null,
                      "category" !== t2 && s7(r),
                    ],
                  }),
              null != iN
                ? (0, s.jsx)(B.C, {
                    kind: iN,
                    businessName: t1.name,
                    busy: iv,
                    confirming: "discard" === iN && iv,
                    onClose: () => iM(null),
                    onConfirm: "save" === iN ? sP : () => void sE(),
                    onSecondaryAction: "save" === iN ? () => void sE() : void 0,
                    errorMessage: iT,
                  })
                : null,
            ],
          })
        }
      if ("website" === t2 && !0 === iL && null != tx) {
        let e,
          t,
          i,
          n,
          l = t1.values.website ?? ""
        e2[166] !== l ? ((e = (0, O.DX)(l)), (e2[166] = l), (e2[167] = e)) : (e = e2[167])
        let r = sW(iX, (0, O.DX)(t1.values.website ?? "")),
          a = t1.shopifyAppFunnel,
          o = t1.values.website ?? ""
        return (
          e2[168] !== o ? ((t = (0, O.DX)(o)), (e2[168] = o), (e2[169] = t)) : (t = e2[169]),
          e2[170] !== t1.values.website || e2[171] !== sp || e2[172] !== tx
            ? ((i = (e) =>
                tx.discoverWebsite((0, O.DX)(t1.values.website ?? ""), e).catch((e) => {
                  throw (((0, e1.er)(e) || "expired" === (0, e0.y5)(e)) && sp(e), e)
                })),
              (e2[170] = t1.values.website),
              (e2[171] = sp),
              (e2[172] = tx),
              (e2[173] = i))
            : (i = e2[173]),
          e2[174] !== sh || e2[175] !== sp || e2[176] !== tx
            ? ((n = (e, t) => (
                it(!0),
                tx
                  .cancelShopify(e, t)
                  .then((e) => {
                    sh(e)
                  })
                  .catch((e) => {
                    throw (sp(e), e)
                  })
                  .finally(() => it(!1))
              )),
              (e2[174] = sh),
              (e2[175] = sp),
              (e2[176] = tx),
              (e2[177] = n))
            : (n = e2[177]),
          (0, s.jsx)(
            e7,
            {
              queryKey: r,
              acceptedSession: iX,
              shopifyAppFunnel: a,
              renderStep: nt,
              website: t,
              verification: iX?.website_verification,
              busy: iv,
              onDiscover: i,
              onStartShopify: async (e, t) => {
                if (null == iX) throw Error("Creation session is unavailable")
                return (
                  it(!0),
                  sj("website_options", "shopify", "verification_started"),
                  (async () => {
                    tx.preserveWebsiteHandoff(t1)
                    let i = await tx.startShopify(e, t),
                      s = (0, q.i_)(i, iX.session_id, (0, O.DX)(t1.values.website ?? ""))
                    ;(sh(i),
                      tx.preserveWebsiteHandoff(t1),
                      t.throwIfAborted(),
                      tx.throwIfAborted(),
                      window.location.assign(s))
                  })()
                    .catch(async (e) => {
                      if (!t.aborted) {
                        sj("website_options", "shopify", "verification_failed")
                        try {
                          sh(await tx.read(t))
                        } catch {}
                        sp(e)
                      }
                      throw e
                    })
                    .finally(() => it(!1))
                )
              },
              onCancelShopify: n,
              onStart: async () => {
                ;(it(!0),
                  await sR()
                    .catch((e) => {
                      throw (sp(e), e)
                    })
                    .finally(() => it(!1)))
              },
              onCheck: (e) => {
                ;(it(!0),
                  sj("website_dns", "dns", "verification_started"),
                  (0, eY.Q1)(tE, t4, { stage: "verification_attempted", method: "dns" }))
                let t = (t) => {
                  let i = (0, e0.z8)(t)?.website_verification
                  if (i?.challenge_id !== e) throw Error("DNS challenge changed")
                  let s = sh(t)
                  return {
                    verified:
                      "verified" === i.status && (0, e0.wZ)(s, "website", i.website) && sF(s, t1.values.website ?? "")
                        ? s
                        : void 0,
                    checksExhausted: !0 === i.checks_exhausted,
                  }
                }
                return tx
                  .checkWebsite(e)
                  .then(t)
                  .catch(async (e) => {
                    try {
                      let e = t(await tx.read())
                      if (null != e.verified || e.checksExhausted) return e
                    } catch {}
                    throw e
                  })
                  .then(
                    (e) => {
                      let { verified: t, checksExhausted: i } = e
                      if (
                        ((0, eY.Q1)(tE, t4, {
                          stage: "verification_result",
                          method: "dns",
                          outcome: null == t ? "failed" : "passed",
                        }),
                        sj(
                          "website_dns",
                          "dns",
                          null != t ? "verification_passed" : i ? "verification_failed" : "verification_unconfirmed",
                        ),
                        null != t)
                      )
                        return sL(void 0, t)
                    },
                    (e) => {
                      throw (
                        (e instanceof DOMException && "AbortError" === e.name) ||
                          (sj("website_dns", "dns", "verification_failed"),
                          (0, eY.Q1)(tE, t4, {
                            stage: "verification_result",
                            method: "dns",
                            outcome: "request_failed",
                          })),
                        e
                      )
                    },
                  )
                  .catch((e) => {
                    throw (sp(e), e)
                  })
                  .finally(() => it(!1))
              },
              onBack: sk,
            },
            `${iX?.session_id}:${e}`,
          )
        )
      }
      let ni = null == tR && (null == s2 || iw?.isPending) ? nt(void 0, { loadingWebsite: "preparing" === iL }) : null,
        ns = s2,
        nn =
          null != tR &&
          (0, s.jsxs)(s.Fragment, {
            children: [
              ne(),
              (0, s.jsx)(ej.$, {
                ...tL,
                interestType: "creation_local",
                funnelJourneyId: e3,
                businessName: t1.name,
                pageManager: (0, O.Gk)(t1),
                email: tT,
                initialStatus: tR,
                onBack: () => tW(void 0),
                onDone: sN,
                onContinue: () => {
                  ;(tq.setQueryData(se.queryKey, "continue"), tW(void 0), t3("website"))
                },
              }),
            ],
          })
      return (
        e2[178] !== ni || e2[179] !== ns || e2[180] !== nn
          ? ((eQ = (0, s.jsxs)(s.Fragment, { children: [ni, ns, nn] })),
            (e2[178] = ni),
            (e2[179] = ns),
            (e2[180] = nn),
            (e2[181] = eQ))
          : (eQ = e2[181]),
        eQ
      )
    }
    function tl(e) {
      return "name" === e.field_key
    }
    function tr(e) {
      return e instanceof Error && "AbortError" !== e.name && (0, Y.$)(e)
    }
    function ta(e) {
      return "fulfilled" === e.status
    }
    function to(e) {
      return "fulfilled" === e.status &&
        ((0, ex.canSuggestProfileClaim)(e.value, !0) ||
          ("local" === e.value.business_type && (e.value.can_manage || null != e.value.ownership.current_request)))
        ? [e.value]
        : []
    }
    function tu(e) {
      return "preparing" !== e && e
    }
    function tc(e) {
      return "phone" === e.field
    }
    var td = i("wlzZ"),
      tf = i("dfl0"),
      th = i("f0dk"),
      tp = i("LhV4"),
      tm = i("u9lE"),
      tb = i("mRB3"),
      tg = i("EnWC")
    function tv(e) {
      let t,
        i,
        l,
        r = (0, n.c)(15),
        { draft: a, status: o, onComplete: u, onCancelSubmission: d, onCheckStatus: f, onExit: h, busy: p } = e
      return (
        r[0] !== p || r[1] !== a || r[2] !== d || r[3] !== o
          ? ((t =
              "under_review" === o
                ? (0, s.jsx)(eU.k, {
                    order: 1,
                    children: (0, s.jsx)(tm.hp, {
                      receivedTitle: (0, s.jsx)(c.A, {
                        id: "businessProfiles.creation.pending.received.title",
                        defaultMessage: "Submission received",
                      }),
                      receivedDescription:
                        null == d
                          ? (0, s.jsx)(c.A, {
                              id: "businessProfiles.creation.pending.received.description",
                              defaultMessage: "We received your submission for {name}.",
                              values: { name: a.name },
                            })
                          : (0, s.jsx)(tm.Vj, { kind: "submission", name: a.name, onWithdraw: d, disabled: p }),
                      reviewTitle: (0, s.jsx)(c.A, { ...eB.W.reviewInProgressTitle }),
                      reviewDescription: (0, s.jsx)(c.A, { ...eB.W.reviewInProgressDescription }),
                      decisionTitle: (0, s.jsx)(c.A, {
                        id: "businessProfiles.creation.pending.decision.title",
                        defaultMessage: "Decision reached",
                      }),
                      decisionDescription: (0, s.jsx)(c.A, {
                        id: "businessProfiles.creation.pending.decision.privateDescription",
                        defaultMessage: "We\u2019ll update your verification status here. Your profile stays private.",
                      }),
                    }),
                  })
                : null),
            (r[0] = p),
            (r[1] = a),
            (r[2] = d),
            (r[3] = o),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== p || r[6] !== a || r[7] !== f || r[8] !== u || r[9] !== h || r[10] !== o
          ? ((i =
              "approved" === o && null != u
                ? (0, s.jsxs)(tm.Um, {
                    manageLabel: (0, s.jsx)(c.A, { ...eB.W.manage }),
                    onManage: () => u(),
                    children: [
                      (0, s.jsx)(tm.xK, {
                        onClick: () => u("ecommerce" === a.businessType ? "products" : "edit/hours"),
                        label: (0, s.jsx)(c.A, {
                          id: "businessProfiles.creation.approved.next.label",
                          defaultMessage: "{online, select, yes {Add products} other {Confirm business hours}}",
                          values: { online: "ecommerce" === a.businessType ? "yes" : "no" },
                        }),
                        description: (0, s.jsx)(c.A, {
                          id: "businessProfiles.creation.approved.next.description",
                          defaultMessage:
                            "{online, select, yes {Show customers what you sell} other {Show customers what to expect}}",
                          values: { online: "ecommerce" === a.businessType ? "yes" : "no" },
                        }),
                      }),
                      (0, s.jsx)(tm.xK, {
                        onClick: () => u("edit/about"),
                        label: (0, s.jsx)(c.A, {
                          id: "businessProfiles.creation.approved.about.label",
                          defaultMessage: "Edit your business description",
                        }),
                        description: (0, s.jsx)(c.A, {
                          id: "businessProfiles.creation.approved.about.description",
                          defaultMessage: "Tell customers what makes {name} unique",
                          values: { name: a.name },
                        }),
                      }),
                    ],
                  })
                : (0, s.jsxs)(eU.k, {
                    className: "flex flex-wrap gap-2",
                    order: 3,
                    children: [
                      "approved" === o
                        ? (0, s.jsx)(b.$, {
                            type: "button",
                            size: "formAction",
                            radius: "full",
                            onClick: h,
                            children: (0, s.jsx)(c.A, { ...eB.W.backToChat }),
                          })
                        : null,
                      "under_review" === o &&
                        (0, s.jsx)(b.$, {
                          type: "button",
                          size: "formAction",
                          radius: "full",
                          disabled: p,
                          onClick: h,
                          children: (0, s.jsx)(c.A, {
                            id: "businessProfiles.creation.receipt.done",
                            defaultMessage: "Done",
                          }),
                        }),
                      "under_review" === o && null != f
                        ? (0, s.jsx)(b.$, {
                            type: "button",
                            color: "secondary",
                            size: "formAction",
                            radius: "full",
                            disabled: p,
                            onClick: f,
                            children: (0, s.jsx)(c.A, { ...eB.W.checkStatus }),
                          })
                        : null,
                    ],
                  })),
            (r[5] = p),
            (r[6] = a),
            (r[7] = f),
            (r[8] = u),
            (r[9] = h),
            (r[10] = o),
            (r[11] = i))
          : (i = r[11]),
        r[12] !== t || r[13] !== i
          ? ((l = (0, s.jsxs)(s.Fragment, { children: [t, i] })), (r[12] = t), (r[13] = i), (r[14] = l))
          : (l = r[14]),
        l
      )
    }
    var ty = i("VFbM"),
      tx = i("K5Tp")
    function tw(e) {
      let t,
        i,
        o,
        u,
        f,
        h,
        m,
        b,
        g,
        v,
        y,
        w,
        _,
        A,
        C,
        S,
        I,
        k,
        E,
        D,
        N,
        M,
        P,
        T,
        F,
        L,
        R,
        W,
        z,
        $,
        q,
        U,
        V,
        J,
        Q,
        Z,
        X,
        Y,
        ee,
        et,
        ei,
        en,
        el,
        er,
        ea,
        eu = (0, n.c)(386),
        {
          acquisitionJourneyId: ed,
          accountId: ef,
          contactVerificationEnabled: eh,
          userId: ep,
          profileId: em,
          draft: ey,
          onPersist: ex,
          onCancel: ew,
          onEdit: e_,
          onComplete: ej,
          completedCreation: eA,
          shopifyRouting: eC,
          onPublishedCreation: eS,
        } = e,
        ek = (0, r.gh)(j.u),
        eE = (0, K.jE)(),
        [eD, eN] = (0, a.useState)(eA),
        [eM, eP] = (0, a.useState)(null),
        eT = (0, d.Zp)(),
        [eF, eL] = (0, d.ok)()
      eu[0] !== ef ? ((t = () => (0, eX.YH)(ef)), (eu[0] = ef), (eu[1] = t)) : (t = eu[1])
      let [eR] = (0, a.useState)(t)
      ;(eu[2] !== eR
        ? ((i = () => eR.attach()), (o = [eR]), (eu[2] = eR), (eu[3] = i), (eu[4] = o))
        : ((i = eu[3]), (o = eu[4])),
        (0, a.useEffect)(i, o))
      let [eW, eO] = (0, a.useState)(),
        ez = (0, a.useRef)(em ?? ey?.profileId),
        eq = (0, a.useRef)(!1),
        eU = em ?? eW?.creation?.business_profile_id ?? ey?.profileId,
        [eV, eK] = (0, a.useState)(!1),
        [eH] = (0, a.useState)(null == ey ? em : null),
        [eG, eQ] = (0, a.useState)(),
        [eY, e2] = (0, a.useState)(!1),
        [e3, e4] = (0, a.useState)(!1),
        [e5, e6] = (0, a.useState)(!1),
        [e7, e8] = (0, a.useState)(null),
        [e9, te] = (0, a.useState)(null),
        tt = null != eC && null != eS,
        ti = (0, a.useRef)(null),
        [ts, tl] = (0, a.useState)(!1),
        [tr, ta] = (0, a.useState)(!1),
        to = null != ey && null == (0, O.Rw)(ey, void 0, eh),
        tu = eU ?? eR.submissionKey
      ;(eu[5] !== ef || eu[6] !== tu || eu[7] !== ep
        ? ((u = ["business-profiles", ef, "creation", ep, tu]), (eu[5] = ef), (eu[6] = tu), (eu[7] = ep), (eu[8] = u))
        : (u = eu[8]),
        eu[9] !== eH
          ? ((f = null == eH ? {} : { refetchOnMount: !0, retryOnMount: !0 }), (eu[9] = eH), (eu[10] = f))
          : (f = eu[10]),
        eu[11] !== eV || eu[12] !== e9 || eu[13] !== tt || eu[14] !== eG
          ? ((h = (e) =>
              !eV &&
              null == e9 &&
              (!eG || null == (0, eX.Z0)(e.state.data?.creation)) &&
              !!(
                tt &&
                e.state.data?.creation?.published !== !0 &&
                e.state.data?.creation?.canonical_target?.disposition !== "existing_profile" &&
                "error" !== e.state.status &&
                e.state.data?.creation?.is_draft !== !0 &&
                ["pending", "under_review", "approved"].includes(e.state.data?.creation?.status ?? "")
              ) &&
              5e3),
            (eu[11] = eV),
            (eu[12] = e9),
            (eu[13] = tt),
            (eu[14] = eG),
            (eu[15] = h))
          : (h = eu[15]))
      let {
          data: tc,
          isError: tw,
          isFetchedAfterMount: tI,
          refetch: tk,
        } = (0, G.I)({
          queryKey: u,
          queryFn:
            null != eU || to
              ? async (e) => {
                  let { signal: t } = e
                  if (null != ey && null == eW) {
                    if (null != eU) {
                      let e = await eR.read(eU, t)
                      if (null != e.creation && (!0 !== e.creation.is_draft || "pending" !== e.creation.status))
                        return (tY(e, !0), e)
                      if (null != (0, O.Rw)(ey, e.creation, eh)) return e
                    }
                    return t1(ey)
                  }
                  if (null == eU) throw Error("A business profile is required")
                  let i = eH === eU && null == eG ? await eR.readSavedStatus(eU, t) : await eR.read(eU, t)
                  if (null != eH && i.creation?.business_profile_id !== eU)
                    throw Error("Business profile verification response did not match")
                  return i
                }
              : H.hT,
          initialData: eW?.creation?.business_profile_id === eU ? eW : void 0,
          enabled: null == eD || tt,
          ...f,
          retry: !1,
          staleTime: 0,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
          refetchInterval: h,
        }),
        tE = tc?.creation ?? eW?.creation
      eu[16] !== ef ||
      eu[17] !== ed ||
      eu[18] !== tE?.details.business_type ||
      eu[19] !== ey?.businessType ||
      eu[20] !== ek ||
      eu[21] !== ep
        ? ((m = () => {
            ;(0, eo.m)(
              ek,
              { userId: ep, accountId: ef },
              {
                flow: "create",
                screen: "rejected",
                action: "verification_failed",
                journeyId: ed,
                businessType: tE?.details.business_type ?? ey?.businessType,
              },
            )
          }),
          (eu[16] = ef),
          (eu[17] = ed),
          (eu[18] = tE?.details.business_type),
          (eu[19] = ey?.businessType),
          (eu[20] = ek),
          (eu[21] = ep),
          (eu[22] = m))
        : (m = eu[22])
      let tD = (0, tx.D)(ef, m)
      ;(eu[23] !== tc?.creation?.business_profile_id ||
      eu[24] !== eU ||
      eu[25] !== tw ||
      eu[26] !== tI ||
      !1 !== eu[27] ||
      eu[28] !== tD
        ? ((b = () => {}),
          (eu[23] = tc?.creation?.business_profile_id),
          (eu[24] = eU),
          (eu[25] = tw),
          (eu[26] = tI),
          (eu[27] = !1),
          (eu[28] = tD),
          (eu[29] = b))
        : (b = eu[29]),
        eu[30] !== tc || eu[31] !== eU || eu[32] !== tw || eu[33] !== tI || !1 !== eu[34] || eu[35] !== tD
          ? ((g = [!1, eU, tc, tI, tw, tD]),
            (eu[30] = tc),
            (eu[31] = eU),
            (eu[32] = tw),
            (eu[33] = tI),
            (eu[34] = !1),
            (eu[35] = tD),
            (eu[36] = g))
          : (g = eu[36]),
        (0, a.useEffect)(b, g))
      let tN = "1" === eF.get("created")
      eu[37] !== tE || eu[38] !== eU || eu[39] !== tw || eu[40] !== tI || eu[41] !== tN || eu[42] !== eD
        ? ((v =
            eD ??
            (tN && tI && !tw && null != tE && tE.business_profile_id === eU && null != (0, tb.jp)(tE) ? tE : void 0)),
          (eu[37] = tE),
          (eu[38] = eU),
          (eu[39] = tw),
          (eu[40] = tI),
          (eu[41] = tN),
          (eu[42] = eD),
          (eu[43] = v))
        : (v = eu[43])
      let tM = v,
        tP = null != eD && null == eA && (!tN || eF.get("creation") !== eD.business_profile_id),
        tT = null != eH && null == eG && null == eD,
        tF = tc?.creation ?? eW?.creation ?? tM
      ;(eu[44] !== eV ||
      eu[45] !== e9 ||
      eu[46] !== eU ||
      eu[47] !== eS ||
      eu[48] !== tT ||
      eu[49] !== tr ||
      eu[50] !== tF ||
      eu[51] !== eR ||
      eu[52] !== eC
        ? ((y = () => {
            if (
              null == eS ||
              null == eC ||
              tr ||
              tT ||
              eV ||
              null != e9 ||
              tF?.published !== !0 ||
              !0 === tF.is_draft ||
              tF.business_profile_id !== eU ||
              "cancelled" === tF.status ||
              "rejected" === tF.status ||
              tF.canonical_target?.disposition === "existing_profile" ||
              ti.current === eU
            )
              return
            let e = !0
            return (
              Promise.resolve().then(() => {
                if (!e) return
                ;((ti.current = eU), tl(!0))
                let t = () => {
                  if ((eR.throwIfAborted(), ez.current !== eU)) throw new DOMException("Creation changed", "AbortError")
                }
                Promise.resolve()
                  .then(() => (t(), eS(tF, eC, t)))
                  .catch(() => {
                    try {
                      t()
                    } catch {
                      return
                    }
                    ;((ti.current = null), ta(!0))
                  })
                  .finally(() => {
                    try {
                      eR.throwIfAborted()
                    } catch {
                      return
                    }
                    tl(!1)
                  })
              }),
              () => {
                e = !1
              }
            )
          }),
          (w = [eV, e9, eU, eS, tT, tr, tF, eR, eC]),
          (eu[44] = eV),
          (eu[45] = e9),
          (eu[46] = eU),
          (eu[47] = eS),
          (eu[48] = tT),
          (eu[49] = tr),
          (eu[50] = tF),
          (eu[51] = eR),
          (eu[52] = eC),
          (eu[53] = y),
          (eu[54] = w))
        : ((y = eu[53]), (w = eu[54])),
        (0, a.useEffect)(y, w),
        eu[55] !== ts
          ? ((_ = ts ? (0, s.jsx)("div", { role: "status", children: (0, s.jsx)(x.y, {}) }) : null),
            (eu[55] = ts),
            (eu[56] = _))
          : (_ = eu[56]))
      let tL = _
      if (tr) {
        let e, t
        ;(eu[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", { children: (0, s.jsx)(c.A, { ...eB.W.error }) })), (eu[57] = e))
          : (e = eu[57]),
          eu[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsxs)("div", {
                role: "alert",
                className: "flex flex-col items-start gap-3",
                children: [
                  e,
                  (0, s.jsx)(es.d, { onClick: () => ta(!1), children: (0, s.jsx)(c.A, { ...eB.W.retry }) }),
                ],
              })),
              (eu[58] = t))
            : (t = eu[58]),
          (tL = t))
      }
      let tR = tE?.status === "rejected" ? tE.rejection_reason : null,
        tW =
          "persona_declined" === tR || "persona_failed" === tR || "persona_expired" === tR || "content_rejected" === tR,
        tB = tT || tE?.status !== "approved" ? null : tE.business_profile_id
      ;(eu[59] !== ef || eu[60] !== tB || eu[61] !== eE
        ? ((A = () => {
            null != tB &&
              eE.invalidateQueries({
                queryKey: ["business-profiles", ef],
                predicate: (e) => "creation" !== e.queryKey[2] || e.queryKey[4] !== tB,
              })
          }),
          (C = [ef, tB, eE]),
          (eu[59] = ef),
          (eu[60] = tB),
          (eu[61] = eE),
          (eu[62] = A),
          (eu[63] = C))
        : ((A = eu[62]), (C = eu[63])),
        (0, a.useEffect)(A, C),
        eu[64] !== tE || eu[65] !== ey || eu[66] !== eM || eu[67] !== eC
          ? ((S =
              eM ??
              ey ??
              (null == tE
                ? null
                : {
                    name: tE.details.name,
                    profileId: tE.business_profile_id,
                    contactVerificationRequired: tE.contact_verification_required,
                    businessType: tE.details.business_type,
                    values: tE.details.values,
                    shopifyRouting: eC,
                  })),
            (eu[64] = tE),
            (eu[65] = ey),
            (eu[66] = eM),
            (eu[67] = eC),
            (eu[68] = S))
          : (S = eu[68]))
      let tO = S,
        tz = null == tE || !0 === tE.is_draft
      eu[69] !== tE ? ((I = (0, eX.Z0)(tE)), (eu[69] = tE), (eu[70] = I)) : (I = eu[70])
      let t$ = I,
        tq = !0 === eG && null != t$
      eu[71] !== tE || eu[72] !== tq
        ? ((k = tq && (0, eX.b)(tE)), (eu[71] = tE), (eu[72] = tq), (eu[73] = k))
        : (k = eu[73])
      let tU = k
      null == eG && tI && !tw && null != eH && tE?.business_profile_id === eH && eQ(null != t$)
      let tV = tq && !0 === t$,
        tK = tq ? tV : tz || tE?.status === "pending",
        tH = tq ? !tV : tE?.status === "under_review",
        tJ =
          null != tE
            ? !0 === tE.contact_verification_required
            : tO?.contactVerificationRequired === !0 || (tO?.profileId == null && eh)
      eu[74] !== eh || eu[75] !== tE || eu[76] !== tO
        ? ((E = null == tO ? void 0 : (0, O.Rw)(tO, tE, eh)), (eu[74] = eh), (eu[75] = tE), (eu[76] = tO), (eu[77] = E))
        : (E = eu[77])
      let tG = E,
        tQ = tE?.contact_verifications?.find(
          (e) => e.field === tG && e.target === (0, O.Re)(e.field, tO?.values[e.field] ?? ""),
        ),
        tZ = eV || (tK && e3),
        tX = (null != ey || null != eM) && (null == tE || (!0 === tE.is_draft && "pending" === tE.status)) && null == tG
      function tY(e, t) {
        if ((eR.throwIfAborted(), ez.current, eO(e), null == e.creation)) return
        let i = e.creation.business_profile_id
        ;((ez.current = i),
          eE.setQueryData(["business-profiles", ef, "creation", ep, i], e),
          eE.invalidateQueries({ queryKey: ["business-profiles", ef, "creations", ep] }),
          void 0 !== t && t && null != (0, tb.jp)(e.creation) ? ((eq.current = !0), eN(e.creation), ex(i, !0)) : ex(i))
      }
      function t1(e) {
        return (
          e6(!0),
          eK(!0),
          e8(null),
          eR
            .launchLegacy(e, ez.current ?? e.profileId, "defer_persona")
            .then((e) => {
              if (null == e.creation) throw Error("The business profile was not created")
              return (tY(e, !0), e)
            })
            .catch((t) => {
              if ((0, eb.$)(t)) throw (e6(!1), (0, eg.H)(ek), e_(e, (0, O.Cu)(e).at(-1) ?? "category"), t)
              throw ((null != (0, eZ.k)(t) || (0, e1.xp)(t)) && e6(!1), e8(tS(t)), t)
            })
            .finally(() => eK(!1))
        )
      }
      eu[78] !== ef ||
      eu[79] !== tz ||
      eu[80] !== eU ||
      eu[81] !== tU ||
      eu[82] !== eE ||
      eu[83] !== tk ||
      eu[84] !== tD ||
      eu[85] !== eR ||
      eu[86] !== ep
        ? ((D = async function () {
            let e = ez.current ?? eU
            if (null != e) {
              if (!tz) {
                let t = await eR.resume(e, "status")
                if ((eR.throwIfAborted(), tU))
                  return void eE.setQueryData(["business-profiles", ef, "creation", ep, e], t)
              }
              await tk({ throwOnError: !0 })
            }
          }),
          (eu[78] = ef),
          (eu[79] = tz),
          (eu[80] = eU),
          (eu[81] = tU),
          (eu[82] = eE),
          (eu[83] = tk),
          (eu[84] = tD),
          (eu[85] = eR),
          (eu[86] = ep),
          (eu[87] = D))
        : (D = eu[87])
      let t0 = D
      eu[88] !== tU || eu[89] !== t0
        ? ((N = function () {
            ;(eK(!0),
              e8(null),
              t0()
                .catch((e) => e8(tU ? "legacyStatus" : tS(e)))
                .finally(() => eK(!1)))
          }),
          (eu[88] = tU),
          (eu[89] = t0),
          (eu[90] = N))
        : (N = eu[90])
      let t2 = N
      eu[91] !== tY || eu[92] !== tO || eu[93] !== eU || eu[94] !== eR
        ? ((M = async function () {
            if (null == tO) throw Error("A business draft is required")
            let e = await eR.save(tO, ez.current ?? eU)
            if ((tY(e), null == e.creation)) throw Error("The draft was not saved")
            return e.creation.business_profile_id
          }),
          (eu[91] = tY),
          (eu[92] = tO),
          (eu[93] = eU),
          (eu[94] = eR),
          (eu[95] = M))
        : (M = eu[95])
      let t3 = M
      eu[96] !== tY || eu[97] !== tz || eu[98] !== eU || eu[99] !== t3 || eu[100] !== eR
        ? ((P = function (e, t) {
            return (
              eK(!0),
              e8(null),
              (tz ? t3() : Promise.resolve(ez.current ?? eU))
                .then((i) => {
                  if (null == i) throw Error("A business draft is required")
                  return eR.send(i, e, t)
                })
                .then(tY)
                .catch(async (e) => {
                  if ((0, e1.er)(e)) throw (e8("domainProtected"), e)
                  throw (null != ez.current && tY(await eR.read(ez.current)), e)
                })
                .finally(() => eK(!1))
            )
          }),
          (eu[96] = tY),
          (eu[97] = tz),
          (eu[98] = eU),
          (eu[99] = t3),
          (eu[100] = eR),
          (eu[101] = P))
        : (P = eu[101])
      let t4 = P
      eu[102] !== tY ||
      eu[103] !== ef ||
      eu[104] !== ed ||
      eu[105] !== eh ||
      eu[106] !== tE?.contact_verifications ||
      eu[107] !== tO ||
      eu[108] !== eU ||
      eu[109] !== ek ||
      eu[110] !== eR ||
      eu[111] !== t1 ||
      eu[112] !== ep
        ? ((T = function (e, t) {
            let i = tE?.contact_verifications?.find((t) => t.field === e),
              s = ez.current ?? eU
            if (null == s || i?.challenge_id == null) return Promise.resolve(!1)
            let n = {
              flow: "create",
              screen: "phone" === e ? "phone_code" : "email_code",
              journeyId: ed,
              businessType: tO?.businessType,
              method: e,
            }
            return (
              (0, eo.m)(ek, { accountId: ef, userId: ep }, { ...n, action: "verification_started" }),
              eK(!0),
              eR
                .verify(s, e, i.challenge_id, t)
                .then(async (t) => {
                  tY(t)
                  let l =
                      t.creation?.contact_verifications?.some((t) => t.field === e && "verified" === t.status) ?? !1,
                    r =
                      t.creation?.contact_verifications?.some(
                        (t) => t.field === e && t.target === i.target && "verified" === t.status,
                      ) ?? !1
                  return (
                    (0, eo.m)(
                      ek,
                      { accountId: ef, userId: ep },
                      {
                        ...n,
                        action: r ? "verification_passed" : l ? "verification_unconfirmed" : "verification_failed",
                      },
                    ),
                    l &&
                      null != tO &&
                      null == (0, O.Rw)(tO, t.creation, eh) &&
                      (await t1({ ...tO, profileId: s }).catch(tC)),
                    l
                  )
                })
                .catch(async (e) => {
                  throw (
                    (e instanceof DOMException && "AbortError" === e.name) ||
                      (0, eo.m)(ek, { accountId: ef, userId: ep }, { ...n, action: "verification_failed" }),
                    tY(await eR.read(s)),
                    e
                  )
                })
                .finally(() => eK(!1))
            )
          }),
          (eu[102] = tY),
          (eu[103] = ef),
          (eu[104] = ed),
          (eu[105] = eh),
          (eu[106] = tE?.contact_verifications),
          (eu[107] = tO),
          (eu[108] = eU),
          (eu[109] = ek),
          (eu[110] = eR),
          (eu[111] = t1),
          (eu[112] = ep),
          (eu[113] = T))
        : (T = eu[113])
      let t5 = T
      eu[114] !== tY ||
      eu[115] !== tZ ||
      eu[116] !== tG ||
      eu[117] !== tJ ||
      eu[118] !== tO ||
      eu[119] !== tz ||
      eu[120] !== eU ||
      eu[121] !== t3 ||
      eu[122] !== ek ||
      eu[123] !== eR ||
      eu[124] !== tK
        ? ((F = function (e) {
            return null == tO || tZ || (tK && null != tG)
              ? Promise.resolve(!1)
              : (e6(!0),
                eK(!0),
                e8(null),
                (tz && tJ ? t3().then((e) => eR.launch(e, !0)) : eR.launchLegacy(tO, ez.current ?? eU))
                  .then(async (t) =>
                    (tY(t), null == t.launch_url)
                      ? (t.creation?.status === "pending" && !1 !== t.creation.persona_requires_action && e8("error"),
                        !1)
                      : (await e(t.launch_url), !0),
                  )
                  .catch(async (e) => {
                    if ((0, eb.$)(e)) return (e6(!1), (0, eg.H)(ek), !1)
                    ;(null != (0, eZ.k)(e) || (0, e1.xp)(e)) && e6(!1)
                    let t = tS(e)
                    if ((e8(t), "error" !== t)) return !1
                    throw (null != ez.current && tY(await eR.read(ez.current)), e)
                  })
                  .finally(() => eK(!1)))
          }),
          (eu[114] = tY),
          (eu[115] = tZ),
          (eu[116] = tG),
          (eu[117] = tJ),
          (eu[118] = tO),
          (eu[119] = tz),
          (eu[120] = eU),
          (eu[121] = t3),
          (eu[122] = ek),
          (eu[123] = eR),
          (eu[124] = tK),
          (eu[125] = F))
        : (F = eu[125])
      let t6 = F
      eu[126] !== ef || eu[127] !== tZ || eu[128] !== eE || eu[129] !== eR
        ? ((L = function () {
            return tZ
              ? Promise.resolve(!1)
              : (eK(!0),
                e8(null),
                eR
                  .recoverPendingSubmission()
                  .then(async (e) => {
                    let t = e?.creation?.business_profile_id
                    if (null != e && null == t) throw Error("The pending submission could not be recovered")
                    if (null != t) {
                      let e = await eR.cancel(t)
                      if (e.creation?.status !== "cancelled") throw Error("The pending submission was not cancelled")
                      eE.invalidateQueries({ queryKey: ["business-profiles", ef], refetchType: "none" })
                    }
                    return (eR.throwIfAborted(), (eq.current = !0), !0)
                  })
                  .catch((e) => (e8(tS(e)), !1))
                  .finally(() => eK(!1)))
          }),
          (eu[126] = ef),
          (eu[127] = tZ),
          (eu[128] = eE),
          (eu[129] = eR),
          (eu[130] = L))
        : (L = eu[130])
      let t7 = L
      eu[131] !== tY ||
      eu[132] !== ef ||
      eu[133] !== tZ ||
      eu[134] !== e9 ||
      eu[135] !== tO ||
      eu[136] !== t7 ||
      eu[137] !== eU ||
      eu[138] !== ew ||
      eu[139] !== eE ||
      eu[140] !== eR ||
      eu[141] !== ep
        ? ((R = function () {
            if (tZ || null == tO) return
            if ("discard" === e9)
              return void t7().then((e) => {
                e && ew()
              })
            let e = ez.current ?? eU
            null != e &&
              (eK(!0),
              e8(null),
              eE
                .cancelQueries({ queryKey: ["business-profiles", ef, "creation", ep, e] })
                .then(() => eR.cancel(e))
                .then((e) => {
                  ;(tY(e), e.creation?.status === "cancelled" && ew())
                })
                .catch(() => e8("error"))
                .finally(() => {
                  ;(eK(!1), te(null))
                }))
          }),
          (eu[131] = tY),
          (eu[132] = ef),
          (eu[133] = tZ),
          (eu[134] = e9),
          (eu[135] = tO),
          (eu[136] = t7),
          (eu[137] = eU),
          (eu[138] = ew),
          (eu[139] = eE),
          (eu[140] = eR),
          (eu[141] = ep),
          (eu[142] = R))
        : (R = eu[142])
      let t8 = R
      if ("domainProtected" === e7) {
        let e,
          t,
          i,
          n = tO?.businessType
        eu[143] !== ed || eu[144] !== n
          ? ((e = (0, s.jsx)(eo.I, { flow: "create", screen: "protected_website", journeyId: ed, businessType: n })),
            (eu[143] = ed),
            (eu[144] = n),
            (eu[145] = e))
          : (e = eu[145])
        let l = tO?.name ?? "",
          r = tE?.business_profile_id,
          a = tO?.values.website
        return (
          eu[146] !== ew || eu[147] !== l || eu[148] !== r || eu[149] !== a
            ? ((t = (0, s.jsx)(ev.ProtectedProfileClaimSupport, {
                businessName: l,
                businessProfileId: r,
                websiteUrl: a,
                email: null,
                onClose: ew,
              })),
              (eu[146] = ew),
              (eu[147] = l),
              (eu[148] = r),
              (eu[149] = a),
              (eu[150] = t))
            : (t = eu[150]),
          eu[151] !== e || eu[152] !== t
            ? ((i = (0, s.jsxs)(s.Fragment, { children: [e, t] })), (eu[151] = e), (eu[152] = t), (eu[153] = i))
            : (i = eu[153]),
          i
        )
      }
      if (null != tM && !tP) {
        let e,
          t,
          i,
          n,
          l,
          r,
          a,
          o,
          u,
          d = "approved" !== tM.status
        eu[154] !== tM.details.business_type || eu[155] !== tM.details.name || eu[156] !== tM.details.values
          ? ((e = (0, O.Gk)({
              name: tM.details.name,
              businessType: tM.details.business_type,
              values: tM.details.values,
            })),
            (eu[154] = tM.details.business_type),
            (eu[155] = tM.details.name),
            (eu[156] = tM.details.values),
            (eu[157] = e))
          : (e = eu[157])
        let f = e
        ;(eu[158] !== tM.details.name
          ? ((t = (0, s.jsx)(th.Cm, { completion: "creation", name: tM.details.name })),
            (eu[158] = tM.details.name),
            (eu[159] = t))
          : (t = eu[159]),
          eu[160] !== d
            ? ((i =
                d &&
                (0, s.jsx)(c.A, {
                  id: "businessProfiles.creation.completed.draftVerificationDescription",
                  defaultMessage:
                    "It\u2019s saved as a draft for now. Go to your business overview to continue verification or check its status.",
                })),
              (eu[160] = d),
              (eu[161] = i))
            : (i = eu[161]),
          eu[162] !== t || eu[163] !== i
            ? ((n = (0, s.jsx)(th.UM, { title: t, description: i })), (eu[162] = t), (eu[163] = i), (eu[164] = n))
            : (n = eu[164]))
        let h = d ? "saved_draft" : "approved"
        ;(eu[165] !== ed || eu[166] !== tM.details.business_type || eu[167] !== h
          ? ((l = (0, s.jsx)(eo.I, {
              flow: "create",
              screen: h,
              journeyId: ed,
              businessType: tM.details.business_type,
            })),
            (eu[165] = ed),
            (eu[166] = tM.details.business_type),
            (eu[167] = h),
            (eu[168] = l))
          : (l = eu[168]),
          eu[169] !== d ? ((r = d ? null : (0, s.jsx)(tp.O, {})), (eu[169] = d), (eu[170] = r)) : (r = eu[170]))
        let p = tt || "ecommerce" !== tM.details.business_type ? void 0 : "creation"
        return (
          eu[171] !== tM.business_profile_id || eu[172] !== ej
            ? ((a = (e, ...t) => ej(tM.business_profile_id, e, ...t)),
              (eu[171] = tM.business_profile_id),
              (eu[172] = ej),
              (eu[173] = a))
            : (a = eu[173]),
          eu[174] !== tM.business_profile_id || eu[175] !== d || eu[176] !== r || eu[177] !== p || eu[178] !== a
            ? ((o = (0, s.jsx)(th.Um, {
                marketingEmailChoice: r,
                profileId: tM.business_profile_id,
                pendingCreation: d,
                agentCompletion: p,
                onManageProfile: a,
              })),
              (eu[174] = tM.business_profile_id),
              (eu[175] = d),
              (eu[176] = r),
              (eu[177] = p),
              (eu[178] = a),
              (eu[179] = o))
            : (o = eu[179]),
          eu[180] !== f ||
          eu[181] !== ew ||
          eu[182] !== d ||
          eu[183] !== tL ||
          eu[184] !== n ||
          eu[185] !== l ||
          eu[186] !== o
            ? ((u = (0, s.jsxs)(eJ, {
                manager: f,
                stepKey: "complete",
                title: null,
                outcome: !0,
                isDraft: d,
                onCancel: ew,
                header: n,
                children: [l, tL, o],
              })),
              (eu[180] = f),
              (eu[181] = ew),
              (eu[182] = d),
              (eu[183] = tL),
              (eu[184] = n),
              (eu[185] = l),
              (eu[186] = o),
              (eu[187] = u))
            : (u = eu[187]),
          u
        )
      }
      let t9 = "legacyStatus" === e7
      if (null == tO || tT || t9 || (tN && !tI)) {
        let e, t, i, n, l, r, a
        eu[188] !== tO
          ? ((e = null == tO ? (0, s.jsx)(x.y, {}) : (0, s.jsx)(tf.p2, {})), (eu[188] = tO), (eu[189] = e))
          : (e = eu[189])
        let o = e,
          u = tw ? "restore_failed" : null,
          d = tO?.businessType
        ;(eu[190] !== ed || eu[191] !== u || eu[192] !== d
          ? ((t = (0, s.jsx)(eo.I, { flow: "create", screen: u, journeyId: ed, businessType: d })),
            (eu[190] = ed),
            (eu[191] = u),
            (eu[192] = d),
            (eu[193] = t))
          : (t = eu[193]),
          eu[194] !== t2 || eu[195] !== t9 || eu[196] !== tw || eu[197] !== tk || eu[198] !== o
            ? ((i = tw || t9 ? (0, s.jsx)(ty.j, { onRetry: t9 ? t2 : () => void tk({ cancelRefetch: !1 }) }) : o),
              (eu[194] = t2),
              (eu[195] = t9),
              (eu[196] = tw),
              (eu[197] = tk),
              (eu[198] = o),
              (eu[199] = i))
            : (i = eu[199]),
          eu[200] !== tO || eu[201] !== tw || eu[202] !== ew
            ? ((n =
                tw && null == tO
                  ? (0, s.jsx)(es.d, {
                      size: "formAction",
                      color: "outlineGhost",
                      onClick: ew,
                      children: (0, s.jsx)(c.A, { ...eB.W.backToChat }),
                    })
                  : null),
              (eu[200] = tO),
              (eu[201] = tw),
              (eu[202] = ew),
              (eu[203] = n))
            : (n = eu[203]),
          eu[204] !== t || eu[205] !== i || eu[206] !== n
            ? ((l = (0, s.jsxs)("div", { className: "m-auto flex flex-col items-center gap-4", children: [t, i, n] })),
              (eu[204] = t),
              (eu[205] = i),
              (eu[206] = n),
              (eu[207] = l))
            : (l = eu[207]))
        let f = l
        if (null == tO) {
          let e
          return (
            eu[208] !== f
              ? ((e = (0, s.jsx)("div", { className: "flex min-h-dvh items-center justify-center", children: f })),
                (eu[208] = f),
                (eu[209] = e))
              : (e = eu[209]),
            e
          )
        }
        return (
          eu[210] !== tO ? ((r = (0, O.Gk)(tO)), (eu[210] = tO), (eu[211] = r)) : (r = eu[211]),
          eu[212] !== f || eu[213] !== ew || eu[214] !== r
            ? ((a = (0, s.jsx)(eJ, {
                manager: r,
                stepKey: "loading",
                title: null,
                showHeading: !1,
                outcome: !0,
                onCancel: ew,
                children: f,
              })),
              (eu[212] = f),
              (eu[213] = ew),
              (eu[214] = r),
              (eu[215] = a))
            : (a = eu[215]),
          a
        )
      }
      let ie = "localAlreadySubmitted" === e7 || "localSubmissionInProgress" === e7 ? e7 : null
      if (null != ie || "alreadySubmitted" === e7 || (tE?.is_draft === !0 && null == ey && null == eM)) {
        let e,
          t,
          i = "phone"
        null != ie ? (i = "address") : "alreadySubmitted" === e7 && (i = "returns")
        let n = ie ?? i,
          l = "alreadySubmitted" === e7
        return (
          eu[216] !== t1
            ? ((e = (e) => {
                ;(eP(e), t1(e).catch(tA))
              }),
              (eu[216] = t1),
              (eu[217] = e))
            : (e = eu[217]),
          eu[218] !== ef ||
          eu[219] !== ed ||
          eu[220] !== tJ ||
          eu[221] !== tO ||
          eu[222] !== i ||
          eu[223] !== ie ||
          eu[224] !== ew ||
          eu[225] !== n ||
          eu[226] !== l ||
          eu[227] !== e
            ? ((t = (0, s.jsx)(
                tn,
                {
                  acquisitionJourneyId: ed,
                  accountId: ef,
                  contactVerificationEnabled: tJ,
                  name: tO.name,
                  initialDraft: tO,
                  initialStep: i,
                  initialDuplicateSubmission: l,
                  initialLocalFailure: ie,
                  onCancel: ew,
                  onReview: e,
                },
                n,
              )),
              (eu[218] = ef),
              (eu[219] = ed),
              (eu[220] = tJ),
              (eu[221] = tO),
              (eu[222] = i),
              (eu[223] = ie),
              (eu[224] = ew),
              (eu[225] = n),
              (eu[226] = l),
              (eu[227] = e),
              (eu[228] = t))
            : (t = eu[228]),
          t
        )
      }
      if ((tX || tP) && !eY && null == e7 && !tw) {
        let e,
          t,
          i,
          n,
          l = tO.name
        return (
          eu[229] !== tO ? ((e = (0, O.Cu)(tO).at(-1)), (eu[229] = tO), (eu[230] = e)) : (e = eu[230]),
          eu[231] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => eq.current), (eu[231] = t)) : (t = eu[231]),
          eu[232] !== t1
            ? ((i = (e) => {
                t1(e).catch(tj)
              }),
              (eu[232] = t1),
              (eu[233] = i))
            : (i = eu[233]),
          eu[234] !== ef ||
          eu[235] !== ed ||
          eu[236] !== tJ ||
          eu[237] !== tO ||
          eu[238] !== ew ||
          eu[239] !== e ||
          eu[240] !== i
            ? ((n = (0, s.jsx)(tn, {
                acquisitionJourneyId: ed,
                accountId: ef,
                contactVerificationEnabled: tJ,
                name: l,
                initialDraft: tO,
                initialStep: e,
                submitting: !0,
                allowNavigation: t,
                onCancel: ew,
                onReview: i,
              })),
              (eu[234] = ef),
              (eu[235] = ed),
              (eu[236] = tJ),
              (eu[237] = tO),
              (eu[238] = ew),
              (eu[239] = e),
              (eu[240] = i),
              (eu[241] = n))
            : (n = eu[241]),
          n
        )
      }
      let it = (0, O.Gk)(tO),
        ii = tE?.status === "approved",
        is =
          tE?.status === "under_review" && tE.canonical_target?.disposition === "existing_profile"
            ? tE.canonical_target.target_business_profile_id
            : null,
        il = null != is,
        ir = tZ || (e5 && tE?.is_draft !== !0)
      eu[242] !== tO || eu[243] !== eU || eu[244] !== e_
        ? ((W = () => e_({ ...tO, profileId: ez.current ?? eU }, (0, O.Cu)(tO).at(-1) ?? "category")),
          (eu[242] = tO),
          (eu[243] = eU),
          (eu[244] = e_),
          (eu[245] = W))
        : (W = eu[245])
      let ia = W,
        io = tK && !il && null == tG,
        iu = null == tE ? "review_details" : "saved_draft"
      if (tK && "email" === tG) {
        let e = (0, e$.a)(tQ?.status)
        ;((iu = "delivery_pending" === e ? "email_pending" : "email_request"), "code" === e && (iu = "email_code"))
      } else
        tK && "phone" === tG
          ? ((iu = tQ?.status === "pending" ? "phone_pending" : "phone_delivery"),
            tQ?.status === "sent" && (iu = "phone_code"))
          : tX
            ? (iu = "submit_failed")
            : il
              ? (iu = "existing_profile_match")
              : tE?.status === "under_review" ||
                  tE?.status === "approved" ||
                  tE?.status === "rejected" ||
                  tE?.status === "cancelled"
                ? (iu = tE.status)
                : tK && null == tG && (iu = "persona_verification")
      let ic = tK ? tG : void 0
      eu[246] !== ef || eu[247] !== ed || eu[248] !== tO.businessType || eu[249] !== ek || eu[250] !== ep
        ? ((z = function (e) {
            ;(0, eo.m)(
              ek,
              { accountId: ef, userId: ep },
              {
                flow: "create",
                screen: "persona_verification",
                journeyId: ed,
                businessType: tO?.businessType,
                method: "persona",
                action: e,
              },
            )
          }),
          (eu[246] = ef),
          (eu[247] = ed),
          (eu[248] = tO.businessType),
          (eu[249] = ek),
          (eu[250] = ep),
          (eu[251] = z))
        : (z = eu[251])
      let id = z,
        ih = il ? "matched_existing" : (tE?.status ?? "verify")
      ii &&
        (it.profile = {
          ...it.profile,
          business_profile_id: tE.business_profile_id,
          relationship: "owner",
          can_manage: !0,
        })
      let ip = tX ? eB.W.submitFailureTitle : eB.W.verifyTitle
      if (
        (il && (ip = eB.W.matchedTitle),
        !il && tH && (ip = eB.W.pendingTitle),
        tE?.status === "approved" && (ip = eB.W.approvedTitle),
        tE?.status === "cancelled" && (ip = eB.W.cancelledTitle),
        il)
      ) {
        let e
        ;(eu[252] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", { children: (0, s.jsx)(c.A, { ...eB.W.matchedDescription }) })), (eu[252] = e))
          : (e = eu[252]),
          ($ = e))
      } else if (ii) {
        let e
        ;(eu[253] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: (0, s.jsx)(c.A, { ...eB.W.approvedDescription }),
            })),
            (eu[253] = e))
          : (e = eu[253]),
          ($ = e))
      } else if (tE?.status === "rejected" || tE?.status === "cancelled") {
        let e
        ;(eu[254] !== tW || eu[255] !== tR
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: tW
                ? (0, s.jsx)(c.A, { ...eB.W.outcomeDescription, values: { reason: tR } })
                : (0, s.jsx)(c.A, { ...eB.W.rejectedDescription }),
            })),
            (eu[254] = tW),
            (eu[255] = tR),
            (eu[256] = e))
          : (e = eu[256]),
          ($ = e))
      } else if (tK && !tX) {
        let e, t, i
        ;(eu[257] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: (0, s.jsx)(c.A, { ...eB.W.verifyDescription }),
            })),
            (eu[257] = e))
          : (e = eu[257]),
          eu[258] !== io
            ? ((t = io
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(c.A, { ...eB.W.privateDescription }),
                  })
                : null),
              (eu[258] = io),
              (eu[259] = t))
            : (t = eu[259]),
          eu[260] !== t
            ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-3", children: [e, t] })),
              (eu[260] = t),
              (eu[261] = i))
            : (i = eu[261]),
          ($ = i))
      }
      let im = tE?.is_draft === !0 ? "draft" : ih,
        ib = !ii,
        ig = (tH && !il) || ii,
        iv = tK && e3,
        iy = io ? "summary" : "form"
      ;(eu[262] !== tE?.status || eu[263] !== tO.name || eu[264] !== tR || eu[265] !== ip
        ? ((q =
            tE?.status === "rejected"
              ? (0, s.jsx)(c.A, { ...eB.W.outcomeTitle, values: { reason: tR ?? "unknown" } })
              : (0, s.jsx)(c.A, { ...ip, values: { name: (0, s.jsx)("bdi", { children: tO.name }) } })),
          (eu[262] = tE?.status),
          (eu[263] = tO.name),
          (eu[264] = tR),
          (eu[265] = ip),
          (eu[266] = q))
        : (q = eu[266]),
        eu[267] !== ii ? ((U = ii ? (0, s.jsx)(tm.EQ, {}) : void 0), (eu[267] = ii), (eu[268] = U)) : (U = eu[268]),
        eu[269] !== tZ || eu[270] !== tE || eu[271] !== ew
          ? ((V = () => {
              tZ || (null == tE ? te("discard") : ew())
            }),
            (eu[269] = tZ),
            (eu[270] = tE),
            (eu[271] = ew),
            (eu[272] = V))
          : (V = eu[272]))
      let ix = e3 ? null : iu,
        iw = "persona_verification" === iu ? "persona" : ic
      eu[273] !== ed || eu[274] !== tO.businessType || eu[275] !== ix || eu[276] !== iw
        ? ((J = (0, s.jsx)(eo.I, {
            flow: "create",
            screen: ix,
            journeyId: ed,
            businessType: tO.businessType,
            method: iw,
          })),
          (eu[273] = ed),
          (eu[274] = tO.businessType),
          (eu[275] = ix),
          (eu[276] = iw),
          (eu[277] = J))
        : (J = eu[277])
      let i_ = null == tE
      return (
        eu[278] === Symbol.for("react.memo_cache_sentinel") ? ((Q = () => eq.current), (eu[278] = Q)) : (Q = eu[278]),
        eu[279] !== e7
          ? ((Z = null != e7 ? (0, s.jsx)(c.A, { ...eB.W[e7] }) : void 0), (eu[279] = e7), (eu[280] = Z))
          : (Z = eu[280]),
        eu[281] !== tZ || eu[282] !== t7 || eu[283] !== i_ || eu[284] !== Z
          ? ((X = (0, s.jsx)(ec.L, {
              discardCreation: !0,
              dirty: i_,
              busy: tZ,
              onDiscard: t7,
              allowNavigation: Q,
              errorMessage: Z,
            })),
            (eu[281] = tZ),
            (eu[282] = t7),
            (eu[283] = i_),
            (eu[284] = Z),
            (eu[285] = X))
          : (X = eu[285]),
        eu[286] !== tY ||
        eu[287] !== ef ||
        eu[288] !== tZ ||
        eu[289] !== eV ||
        eu[290] !== tG ||
        eu[291] !== tQ ||
        eu[292] !== tE ||
        eu[293] !== tO ||
        eu[294] !== ia ||
        eu[295] !== ir ||
        eu[296] !== tz ||
        eu[297] !== e7 ||
        eu[298] !== eU ||
        eu[299] !== t6 ||
        eu[300] !== id ||
        eu[301] !== tX ||
        eu[302] !== eE ||
        eu[303] !== eY ||
        eu[304] !== t4 ||
        eu[305] !== eR ||
        eu[306] !== io ||
        eu[307] !== t1 ||
        eu[308] !== ep ||
        eu[309] !== t5 ||
        eu[310] !== tK
          ? ((Y = tK
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    io
                      ? null
                      : (0, s.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, s.jsx)(c.A, { ...eB.W.privateDescription }),
                        }),
                    tK && null != tG
                      ? (0, s.jsx)(
                          eI.a,
                          {
                            field: tG,
                            target: tO.values[tG] ?? "",
                            verification: tQ,
                            onBack: tz ? ia : void 0,
                            backDisabled: ir,
                            busy: eV,
                            onSend: (e) => t4(tG, e),
                            onVerify: (e) => t5(tG, e),
                            onCheck: () =>
                              null == eU
                                ? Promise.resolve()
                                : (eK(!0),
                                  eR
                                    .read(eU)
                                    .then(tY)
                                    .finally(() => eK(!1))),
                          },
                          `${tG}:${tO.values[tG]}:${tQ?.challenge_id ?? "new"}:${tQ?.resend_available_at ?? ""}`,
                        )
                      : null,
                    (0, s.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        tz
                          ? null
                          : (0, s.jsx)(es.d, {
                              size: "formAction",
                              color: "secondary",
                              disabled: tZ,
                              onClick: () => te("cancel"),
                              children: (0, s.jsx)(c.A, { ...eB.W.cancelSubmission }),
                            }),
                        tz && null == tG
                          ? (0, s.jsx)(es.d, {
                              size: "formAction",
                              color: "outlineGhost",
                              disabled: ir,
                              onClick: ia,
                              children: (0, s.jsx)(c.A, { ...eB.W.back }),
                            })
                          : null,
                        tX
                          ? (0, s.jsx)(es.d, {
                              size: "formAction",
                              loading: eY,
                              disabled: tZ,
                              onClick: () => {
                                ;(e2(!0),
                                  t1(tO)
                                    .catch(t_)
                                    .finally(() => e2(!1)))
                              },
                              children: (0, s.jsx)(c.A, { ...eB.W.retry }),
                            })
                          : null,
                        tX || null != tG
                          ? null
                          : (0, s.jsx)(
                              tg.W,
                              {
                                findMatch:
                                  null != eU && tE?.status === "pending" && !0 !== tE.is_draft && null == tE.inquiry_id
                                    ? (e) => eR.findVerificationMatch(eU, e)
                                    : void 0,
                                variant: "onboarding",
                                size: "formAction",
                                verificationUrl: "",
                                disabled: eV || "personaConfiguration" === e7,
                                onLaunch: t6,
                                onOpened: () => id("persona_opened"),
                                onActiveChange: e4,
                                onComplete: (e) => {
                                  id("persona_sdk_completed")
                                  let t = ez.current
                                  null != t &&
                                    eE.setQueryData(["business-profiles", ef, "creation", ep, t], (t) =>
                                      t?.creation == null
                                        ? t
                                        : { ...t, creation: eR.submittedPersonaCreation(t.creation, e) },
                                    )
                                },
                              },
                              `${ef}:${eU}`,
                            ),
                      ],
                    }),
                  ],
                })
              : null),
            (eu[286] = tY),
            (eu[287] = ef),
            (eu[288] = tZ),
            (eu[289] = eV),
            (eu[290] = tG),
            (eu[291] = tQ),
            (eu[292] = tE),
            (eu[293] = tO),
            (eu[294] = ia),
            (eu[295] = ir),
            (eu[296] = tz),
            (eu[297] = e7),
            (eu[298] = eU),
            (eu[299] = t6),
            (eu[300] = id),
            (eu[301] = tX),
            (eu[302] = eE),
            (eu[303] = eY),
            (eu[304] = t4),
            (eu[305] = eR),
            (eu[306] = io),
            (eu[307] = t1),
            (eu[308] = ep),
            (eu[309] = t5),
            (eu[310] = tK),
            (eu[311] = Y))
          : (Y = eu[311]),
        eu[312] !== ef ||
        eu[313] !== ed ||
        eu[314] !== tE?.business_profile_id ||
        eu[315] !== il ||
        eu[316] !== is ||
        eu[317] !== ek ||
        eu[318] !== eL ||
        eu[319] !== ep
          ? ((ee = il
              ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(es.d, {
                    size: "formAction",
                    ref: null == is ? void 0 : (0, p.t)(ek, "hub_create_match"),
                    disabled: null == is,
                    onClick: (e) => {
                      if (null == is) return
                      let t = (0, l.rv)(e.currentTarget, {
                        originalJourneyId: ed,
                        creationProfileId: tE?.business_profile_id,
                      })
                      eL(
                        (e) => {
                          let t = new URLSearchParams(e)
                          return (t.set("claim", is), t)
                        },
                        {
                          state: {
                            ...(0, td._l)("hub_create", ef, ep, is),
                            ...(0, l.C1)({ accountId: ef, userId: ep }, is, t ?? ed),
                          },
                        },
                      )
                    },
                    children: (0, s.jsx)(c.A, { ...eB.W.matchedContinue }),
                  }),
                })
              : null),
            (eu[312] = ef),
            (eu[313] = ed),
            (eu[314] = tE?.business_profile_id),
            (eu[315] = il),
            (eu[316] = is),
            (eu[317] = ek),
            (eu[318] = eL),
            (eu[319] = ep),
            (eu[320] = ee))
          : (ee = eu[320]),
        eu[321] !== ef ||
        eu[322] !== tZ ||
        eu[323] !== ii ||
        eu[324] !== t2 ||
        eu[325] !== tE ||
        eu[326] !== tO ||
        eu[327] !== tU ||
        eu[328] !== il ||
        eu[329] !== eT ||
        eu[330] !== ew ||
        eu[331] !== ej ||
        eu[332] !== tH ||
        eu[333] !== tq ||
        eu[334] !== ep
          ? ((et =
              null != tE && ((tH && !il) || ii)
                ? (0, s.jsx)(tv, {
                    draft: tO,
                    status: ii ? "approved" : "under_review",
                    busy: tZ,
                    onExit: ii
                      ? ew
                      : () => {
                          let e = (0, e0.vC)(ef, ep)
                          ;(e.pending()?.draft.profileId === tE.business_profile_id && e.clear(), eT("/"))
                        },
                    onComplete: ii ? (e) => ej(tE.business_profile_id, e) : void 0,
                    onCancelSubmission: ii ? void 0 : () => te("cancel"),
                    onCheckStatus: ii || (tq && !tU) ? void 0 : t2,
                  })
                : null),
            (eu[321] = ef),
            (eu[322] = tZ),
            (eu[323] = ii),
            (eu[324] = t2),
            (eu[325] = tE),
            (eu[326] = tO),
            (eu[327] = tU),
            (eu[328] = il),
            (eu[329] = eT),
            (eu[330] = ew),
            (eu[331] = ej),
            (eu[332] = tH),
            (eu[333] = tq),
            (eu[334] = ep),
            (eu[335] = et))
          : (et = eu[335]),
        eu[336] !== eh || eu[337] !== tE || eu[338] !== tO || eu[339] !== tW || eu[340] !== ew || eu[341] !== e_
          ? ((ei =
              null != tE && ("rejected" === tE.status || "cancelled" === tE.status)
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      tW
                        ? (0, s.jsx)("p", {
                            className: "text-secondary",
                            children: (0, s.jsx)(c.A, { ...eB.W.rejectedDescription }),
                          })
                        : null,
                      (0, s.jsx)(es.d, {
                        size: "formAction",
                        onClick: () => e_({ ...tO, profileId: void 0, contactVerificationRequired: eh }, "category"),
                        children: (0, s.jsx)(c.A, { ...eB.W.reviewAgain }),
                      }),
                      (0, s.jsx)(es.d, {
                        size: "formAction",
                        color: "secondary",
                        onClick: ew,
                        children: (0, s.jsx)(c.A, { ...eB.W.backToChat }),
                      }),
                    ],
                  })
                : null),
            (eu[336] = eh),
            (eu[337] = tE),
            (eu[338] = tO),
            (eu[339] = tW),
            (eu[340] = ew),
            (eu[341] = e_),
            (eu[342] = ei))
          : (ei = eu[342]),
        eu[343] !== ii ||
        eu[344] !== eV ||
        eu[345] !== t2 ||
        eu[346] !== tE ||
        eu[347] !== e7 ||
        eu[348] !== tw ||
        eu[349] !== il ||
        eu[350] !== tX ||
        eu[351] !== e3 ||
        eu[352] !== tq ||
        eu[353] !== tK
          ? ((en =
              null == tE || tX || ii || il || tq || "under_review" === tE.status || (null == e7 && !tw) || (tK && e3)
                ? null
                : (0, s.jsx)(es.d, {
                    size: "formAction",
                    color: "ghostActive",
                    className: tK ? "self-start" : void 0,
                    disabled: eV,
                    onClick: t2,
                    children: (0, s.jsx)(c.A, { ...eB.W.retry }),
                  })),
            (eu[343] = ii),
            (eu[344] = eV),
            (eu[345] = t2),
            (eu[346] = tE),
            (eu[347] = e7),
            (eu[348] = tw),
            (eu[349] = il),
            (eu[350] = tX),
            (eu[351] = e3),
            (eu[352] = tq),
            (eu[353] = tK),
            (eu[354] = en))
          : (en = eu[354]),
        eu[355] !== e7 || eu[356] !== tw || eu[357] !== tq
          ? ((el =
              null != e7 || (tw && !tq)
                ? (0, s.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, s.jsx)(c.A, { ...eB.W[e7 ?? "error"] }),
                  })
                : null),
            (eu[355] = e7),
            (eu[356] = tw),
            (eu[357] = tq),
            (eu[358] = el))
          : (el = eu[358]),
        eu[359] !== tZ || eu[360] !== t8 || eu[361] !== e9 || eu[362] !== e7
          ? ((er =
              null != e9
                ? (0, s.jsx)(B.C, {
                    kind: e9,
                    busy: tZ,
                    onConfirm: t8,
                    onClose: () => te(null),
                    errorMessage: null != e7 ? (0, s.jsx)(c.A, { ...eB.W[e7] }) : void 0,
                  })
                : null),
            (eu[359] = tZ),
            (eu[360] = t8),
            (eu[361] = e9),
            (eu[362] = e7),
            (eu[363] = er))
          : (er = eu[363]),
        eu[364] !== tZ ||
        eu[365] !== $ ||
        eu[366] !== it ||
        eu[367] !== tL ||
        eu[368] !== im ||
        eu[369] !== ib ||
        eu[370] !== ig ||
        eu[371] !== iv ||
        eu[372] !== iy ||
        eu[373] !== q ||
        eu[374] !== U ||
        eu[375] !== V ||
        eu[376] !== J ||
        eu[377] !== X ||
        eu[378] !== Y ||
        eu[379] !== ee ||
        eu[380] !== et ||
        eu[381] !== ei ||
        eu[382] !== en ||
        eu[383] !== el ||
        eu[384] !== er
          ? ((ea = (0, s.jsxs)(eJ, {
              manager: it,
              stepKey: im,
              isDraft: ib,
              outcome: ig,
              busy: tZ,
              personaActive: iv,
              contentLayout: iy,
              title: q,
              description: $,
              leading: U,
              onCancel: V,
              children: [J, X, Y, ee, tL, et, ei, en, el, er],
            })),
            (eu[364] = tZ),
            (eu[365] = $),
            (eu[366] = it),
            (eu[367] = tL),
            (eu[368] = im),
            (eu[369] = ib),
            (eu[370] = ig),
            (eu[371] = iv),
            (eu[372] = iy),
            (eu[373] = q),
            (eu[374] = U),
            (eu[375] = V),
            (eu[376] = J),
            (eu[377] = X),
            (eu[378] = Y),
            (eu[379] = ee),
            (eu[380] = et),
            (eu[381] = ei),
            (eu[382] = en),
            (eu[383] = el),
            (eu[384] = er),
            (eu[385] = ea))
          : (ea = eu[385]),
        ea
      )
    }
    function t_() {}
    function tj() {}
    function tA() {}
    function tC() {}
    function tS(e) {
      if ((0, e1.er)(e)) return "domainProtected"
      if ((0, e1.Ml)(e)) return "alreadySubmitted"
      let t = (0, eZ.k)(e)
      if (null != t) return t
      if (!(e instanceof ee.FetchError)) return "error"
      if (422 === e.status && "business_profile_persona_account_identity_required" === e.errorCode)
        return "accountIdentityRequired"
      if (503 === e.status) {
        if ("business_profile_persona_temporarily_unavailable" === e.errorCode) return "personaUnavailable"
        if ("business_profile_persona_configuration_error" === e.errorCode) return "personaConfiguration"
      }
      return "error"
    }
    var tI = i("Oklx"),
      tk = i("m6S6")
    function tE(e) {
      let t,
        i,
        o,
        u,
        d,
        f,
        h,
        m,
        g,
        v,
        y,
        x,
        w,
        _,
        C,
        S,
        I,
        k,
        E,
        D,
        N,
        T,
        F,
        L,
        R,
        W = (0, n.c)(257),
        {
          acquisitionJourneyId: z,
          accountId: $,
          userId: q,
          resumeDraftId: U,
          name: V,
          initialDraft: H,
          fallbackDraft: J,
          resumedAppFunnelId: Q,
          initialStep: Z,
          onPublishedCreation: X,
          onCancel: Y,
          onSaveAndExit: ee,
          onNavigationDiscard: et,
          onStartDenied: ei,
          onPersist: es,
          onComplete: en,
        } = e,
        el = void 0 === Z ? "type" : Z,
        er = void 0 === ee ? Y : ee,
        ea = void 0 === ei ? Y : ei,
        eu = (0, r.gh)(j.u),
        ed = (0, r._U)(A.JW, "4046009702"),
        ef = (0, K.jE)(),
        [eh] = (0, a.useState)(l.pE)
      W[0] !== $ || W[1] !== z || W[2] !== U || W[3] !== q
        ? ((t = () => (0, e0.vC)($, q, z, U)), (W[0] = $), (W[1] = z), (W[2] = U), (W[3] = q), (W[4] = t))
        : (t = W[4])
      let [ep] = (0, a.useState)(t)
      ;(W[5] !== ep
        ? ((i = () => ep.attach()), (o = [ep]), (W[5] = ep), (W[6] = i), (W[7] = o))
        : ((i = W[6]), (o = W[7])),
        (0, a.useEffect)(i, o))
      let [em, ey] = (0, a.useState)(0)
      W[8] !== H || W[9] !== ep
        ? ((u = () => null == H && ep.hasRestorableAttempt()), (W[8] = H), (W[9] = ep), (W[10] = u))
        : (u = W[10])
      let [ex] = (0, a.useState)(u),
        [ew, ej] = (0, a.useState)(null),
        [eA, eC] = (0, a.useState)(null),
        [eS, eI] = (0, a.useState)(),
        [eE, eD] = (0, a.useState)(!1),
        [eN, eM] = (0, a.useState)(!1),
        eP = (0, a.useRef)(!1),
        [eT, eF] = (0, a.useState)(!1),
        eL = (0, a.useRef)(null),
        [eR, eW] = (0, a.useState)(null),
        [eO, ez] = (0, a.useState)(null)
      W[11] !== J || W[12] !== V || W[13] !== ed || W[14] !== H || W[15] !== ep
        ? ((d = () =>
            ed && V.trim() && null == H && !ep.hasPendingSession() && null == ep.pending()
              ? (J ?? (0, O.vm)(V, !0))
              : void 0),
          (W[11] = J),
          (W[12] = V),
          (W[13] = ed),
          (W[14] = H),
          (W[15] = ep),
          (W[16] = d))
        : (d = W[16])
      let [e$] = (0, a.useState)(d),
        eq = null != H && "type" === el && null == H.businessType,
        eU = (0, a.useRef)(eq)
      W[17] !== H?.name || W[18] !== ep
        ? ((f = function (e) {
            let t = eU.current
            return (
              (eU.current = !1),
              ep.start(e, { name: H?.name, replaceDraft: t }).catch((e) => {
                throw ((0, eb.$)(e) && (eU.current = t), e)
              })
            )
          }),
          (W[17] = H?.name),
          (W[18] = ep),
          (W[19] = f))
        : (f = W[19])
      let eV = f
      ;(W[20] !== U ? ((h = null == U ? [] : [U]), (W[20] = U), (W[21] = h)) : (h = W[21]),
        W[22] !== $ || W[23] !== em || W[24] !== h || W[25] !== q
          ? ((m = ["business-profiles", $, "temporary-creation", q, em, ...h]),
            (W[22] = $),
            (W[23] = em),
            (W[24] = h),
            (W[25] = q),
            (W[26] = m))
          : (m = W[26]))
      let eK = {
          queryKey: m,
          queryFn: async (e) => {
            let t,
              i,
              { signal: s } = e
            if (0 === em && null != H)
              return { draft: { ...H, profileId: void 0, contactVerificationRequired: !0 }, step: el }
            let n = ep.hasRecoverableSubmission(),
              l = !1,
              r = !1
            if (
              (null == t &&
                (t = await ep.restore().catch((e) => {
                  let t = (0, eZ.k)(e)
                  if (null != t) (eW(t), (i = "address"))
                  else if ((0, e1.DR)(e)) ez("submissionInProgress")
                  else if ((0, e1.Ml)(e)) r = !0
                  else if ((0, e0.$B)(e)) l = !0
                  else throw e
                  return ep.read()
                })),
              s.throwIfAborted(),
              null == t && ed && ex)
            ) {
              let e = ep.pending()?.draft ?? J ?? (0, O.vm)(V, !0),
                i = ep.start(null, { name: e.name })
              ;(ep.savePending(e, "type"), (t = await i))
            }
            if (t?.name_first_session != null) {
              let e = ep.pending()?.draft.name ?? (t.name_first_session.details.name || V)
              ;(0, e0.wZ)(t.name_first_session, "name", e) || (t = await ep.accept("name", e))
            }
            ep.throwIfAborted()
            let a = ep.pending(),
              o = a?.step === "review" ? void 0 : a?.draft,
              u = (0, e0.z8)(t),
              c = null == a ? u?.website_verification : null,
              d =
                null == u
                  ? (a?.draft ?? J ?? (0, O.vm)(V, !0))
                  : {
                      name: o?.name ?? u.details.name,
                      businessType: u.details.business_type,
                      values: {
                        ...u.details.values,
                        ...(null != c && ("pending" === c.status || null == u.details.values.website)
                          ? { website: c.website }
                          : {}),
                        ...o?.values,
                      },
                      contactVerificationRequired: !0,
                      shopifyRouting: a?.draft.shopifyRouting,
                      shopifyAppFunnel: a?.draft.shopifyAppFunnel,
                    },
              f = d.shopifyAppFunnel?.id
            if (
              (n || r || t?.creation != null || u?.shopify_verification?.status === "pending" || (d = (0, O.Tu)(d, Q)),
              null != d.shopifyAppFunnel && null != u)
            ) {
              let e = (0, eY.EL)(u, d.values.website)
              ;("shopify" === e &&
                d.shopifyAppFunnel.id === f &&
                d.shopifyAppFunnel.method !== e &&
                (0, eY.Q1)(eu, d.shopifyAppFunnel.id, { stage: "verification_result", method: e, outcome: "passed" }),
                (d = { ...d, shopifyAppFunnel: { ...d.shopifyAppFunnel, method: e } }))
            }
            if (r)
              return (ep.savePending(d, "returns"), ez("alreadySubmitted"), { response: t, draft: d, step: "returns" })
            let h = (0, e0.my)(u, d),
              p =
                a?.lookupWasOnPhone &&
                "local_business" === d.businessType &&
                eu.get(ek.n) &&
                !u?.contact_verifications.some(
                  (e) =>
                    e.field === h &&
                    ("pending" === e.status || "sent" === e.status) &&
                    null != e.expires_at &&
                    Date.parse(e.expires_at) > Date.now() &&
                    e.target === (0, O.Re)(e.field, d.values[e.field] ?? ""),
                ),
              m = i ?? (p ? "address" : a?.step) ?? (null != c ? "website" : void 0),
              b = "review" !== m || (0, O.J5)("website", d) ? (0, O.B)(d, m) : "website"
            return (
              (null != t || ex) && ep.savePending(d, b),
              t?.creation != null && ts(t),
              { response: t, draft: d, step: b, revisionChanged: l }
            )
          },
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
        },
        eH = (0, G.I)(eK)
      W[27] !== eH.error ? ((g = (0, eb.$)(eH.error)), (W[27] = eH.error), (W[28] = g)) : (g = W[28])
      let eG = g
      W[29] !== ea || W[30] !== eu
        ? ((v = () => {
            ;((0, eg.H)(eu), ea())
          }),
          (W[29] = ea),
          (W[30] = eu),
          (W[31] = v))
        : (v = W[31])
      let eQ = (0, a.useEffectEvent)(v)
      ;(W[32] !== eG || W[33] !== eQ
        ? ((y = () => {
            eG && eQ()
          }),
          (W[32] = eG),
          (W[33] = eQ),
          (W[34] = y))
        : (y = W[34]),
        W[35] !== eG ? ((x = [eG]), (W[35] = eG), (W[36] = x)) : (x = W[36]),
        (0, a.useEffect)(y, x))
      let eX = eS?.creation ?? eH.data?.response?.creation
      W[37] !== eH.error || W[38] !== eH.isError
        ? ((w = eH.isError ? (0, e0.y5)(eH.error) : null), (W[37] = eH.error), (W[38] = eH.isError), (W[39] = w))
        : (w = W[39])
      let e2 = w,
        e3 = "expired" === eO || "expired" === e2,
        [e4, e5] = (0, a.useState)()
      W[40] !== eX || W[41] !== e4 || W[42] !== eH.data?.response
        ? ((_ = null == eX ? (e4 ?? (0, e0.z8)(eH.data?.response)?.expires_at) : void 0),
          (W[40] = eX),
          (W[41] = e4),
          (W[42] = eH.data?.response),
          (W[43] = _))
        : (_ = W[43])
      let e6 = _,
        [e7, e8] = (0, a.useState)()
      ;(W[44] !== e6 || W[45] !== ep
        ? ((C = () => {
            if (null == e6) return
            let e = window.setTimeout(
              () => {
                ep.hasPendingStart() || e8(e6)
              },
              Math.max(0, Date.parse(e6) - Date.now()),
            )
            return () => window.clearTimeout(e)
          }),
          (S = [e6, ep]),
          (W[44] = e6),
          (W[45] = ep),
          (W[46] = C),
          (W[47] = S))
        : ((C = W[46]), (S = W[47])),
        (0, a.useEffect)(C, S))
      let e9 = eA?.draft ?? eH.data?.draft
      W[48] !== eA || W[49] !== e9 || W[50] !== eH.data || W[51] !== ew
        ? ((I =
            ew ??
            (null == eA && eH.data?.step === "review" && null != e9
              ? { draft: e9, acceptedRevision: eH.data.response?.session?.accepted_revision }
              : null)),
          (W[48] = eA),
          (W[49] = e9),
          (W[50] = eH.data),
          (W[51] = ew),
          (W[52] = I))
        : (I = W[52])
      let te = I,
        tt = te?.draft,
        ti = null == eR && (null != eO || (null == ew && eH.data?.revisionChanged))
      function ts(e) {
        ep.throwIfAborted()
        let t = e.creation
        if (null != t) {
          let i = t.business_profile_id,
            s = ep.pending()?.draft.shopifyAppFunnel
          if (!t.is_draft && "cancelled" !== t.status && "rejected" !== t.status) {
            let e = !0 === t.published ? "published" : "unpublished"
            ;(0, eY.Q1)(eu, s?.id, {
              stage: "creation_submitted",
              method: s?.method,
              disposition: t.canonical_target?.disposition === "existing_profile" ? "existing_profile" : e,
            })
          }
          if (
            (ef.setQueryData(["business-profiles", $, "creation", q, i], e),
            ef.invalidateQueries({ queryKey: ["business-profiles", $, "creations", q] }),
            (eP.current = !0),
            null == (0, tb.jp)(t))
          ) {
            let e = ep.pending()
            ;(ep.clear(),
              e?.draft.shopifyRouting != null && ep.savePending({ ...e.draft, profileId: i }, "review"),
              es(i))
          } else
            eh.recordProfile({ accountId: $, userId: q }, ep.acquisitionJourneyId() ?? z, i, (e) => (0, p.c)(eu, e))
        }
      }
      W[53] !== eE || W[54] !== ts || W[55] !== ep
        ? ((k = function (e) {
            return eE
              ? Promise.resolve()
              : (eW(null),
                ez(null),
                eD(!0),
                ep
                  .submit(e)
                  .then((e) => {
                    ;(ts(e), eI(e))
                  })
                  .catch(async (e) => {
                    if ((0, e1.er)(e)) return void eM(!0)
                    if ((0, e0.$B)(e))
                      try {
                        let e = await ep.read()
                        if ((ep.throwIfAborted(), null == e.session)) return void ez("error")
                        let t = e.session,
                          i = ep.pending()?.draft.shopifyAppFunnel,
                          s = {
                            name: t.details.name,
                            businessType: t.details.business_type,
                            values: t.details.values,
                            contactVerificationRequired: !0,
                            shopifyRouting: ep.pending()?.draft.shopifyRouting,
                            shopifyAppFunnel:
                              null == i ? void 0 : { ...i, method: (0, eY.EL)(t, t.details.values.website) },
                          }
                        ;(ep.savePending(s, "review"),
                          ej({ draft: s, acceptedRevision: t.accepted_revision }),
                          ez("reviewChanged"))
                      } catch (e) {
                        ez((0, e0.y5)(e))
                      }
                    else {
                      let t = (0, eZ.k)(e)
                      if (null != t) {
                        let e = ep.pending()
                        ;(null != e && ep.savePending(e.draft, "address"), eW(t))
                      } else {
                        let t = (0, e0.y5)(e),
                          i = ep.pending()
                        ;("alreadySubmitted" === t && null != i && ep.savePending(i.draft, "returns"), ez(t))
                      }
                    }
                  })
                  .finally(() => eD(!1)))
          }),
          (W[53] = eE),
          (W[54] = ts),
          (W[55] = ep),
          (W[56] = k))
        : (k = W[56])
      let tl = k
      W[57] !== eE || W[58] !== Y || W[59] !== ep
        ? ((E = function (e) {
            return !eE && (ep.hasPendingSubmission() || ep.clear(), (eP.current = !0), (void 0 === e || e) && Y(), !0)
          }),
          (W[57] = eE),
          (W[58] = Y),
          (W[59] = ep),
          (W[60] = E))
        : (E = W[60])
      let tr = E
      if (eG) {
        let e
        return (
          W[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(s.Fragment, {})), (W[61] = e))
            : (e = W[61]),
          e
        )
      }
      if (eN || (0, e1.er)(eH.error)) {
        let e, t, i, n
        W[62] !== J || W[63] !== e9 || W[64] !== tt || W[65] !== ep
          ? ((e = tt ?? e9 ?? ep.pending()?.draft ?? J),
            (W[62] = J),
            (W[63] = e9),
            (W[64] = tt),
            (W[65] = ep),
            (W[66] = e))
          : (e = W[66])
        let l = e,
          r = l?.businessType
        W[67] !== z || W[68] !== r
          ? ((t = (0, s.jsx)(eo.I, { flow: "create", screen: "protected_website", journeyId: z, businessType: r })),
            (W[67] = z),
            (W[68] = r),
            (W[69] = t))
          : (t = W[69])
        let a = l?.name ?? V,
          o = eX?.business_profile_id,
          u = l?.values.website
        return (
          W[70] !== Y || W[71] !== a || W[72] !== o || W[73] !== u
            ? ((i = (0, s.jsx)(ev.ProtectedProfileClaimSupport, {
                businessName: a,
                businessProfileId: o,
                websiteUrl: u,
                email: null,
                onClose: Y,
              })),
              (W[70] = Y),
              (W[71] = a),
              (W[72] = o),
              (W[73] = u),
              (W[74] = i))
            : (i = W[74]),
          W[75] !== t || W[76] !== i
            ? ((n = (0, s.jsxs)(s.Fragment, { children: [t, i] })), (W[75] = t), (W[76] = i), (W[77] = n))
            : (n = W[77]),
          n
        )
      }
      if (null != eX) {
        let e, t, i, n, l, r
        return (
          W[78] !== eX ? ((e = null != (0, tb.jp)(eX) ? eX : void 0), (W[78] = eX), (W[79] = e)) : (e = W[79]),
          W[80] !== ep ? ((t = ep.pending()?.draft.shopifyRouting), (W[80] = ep), (W[81] = t)) : (t = W[81]),
          W[82] !== Y || W[83] !== ep
            ? ((i = () => {
                ;(ep.clear(), Y())
              }),
              (W[82] = Y),
              (W[83] = ep),
              (W[84] = i))
            : (i = W[84]),
          W[85] !== en || W[86] !== ep
            ? ((n = (e, t, ...i) => {
                ;(ep.pending()?.draft.shopifyRouting == null && ep.clear(), en(e, t, ...i))
              }),
              (W[85] = en),
              (W[86] = ep),
              (W[87] = n))
            : (n = W[87]),
          W[88] !== ep || W[89] !== e5
            ? ((l = (e, t) => {
                ;(ep.clear(),
                  ep.savePending({ ...e, profileId: void 0 }, t),
                  eI(void 0),
                  e5(void 0),
                  eC({ draft: { ...e, profileId: void 0 }, step: t }),
                  ey(tD))
              }),
              (W[88] = ep),
              (W[89] = e5),
              (W[90] = l))
            : (l = W[90]),
          W[91] !== $ ||
          W[92] !== z ||
          W[93] !== eX.business_profile_id ||
          W[94] !== es ||
          W[95] !== X ||
          W[96] !== e ||
          W[97] !== t ||
          W[98] !== i ||
          W[99] !== n ||
          W[100] !== l ||
          W[101] !== q
            ? ((r = (0, s.jsx)(tw, {
                acquisitionJourneyId: z,
                accountId: $,
                userId: q,
                profileId: eX.business_profile_id,
                completedCreation: e,
                draft: null,
                shopifyRouting: t,
                onPublishedCreation: X,
                contactVerificationEnabled: !0,
                onPersist: es,
                onCancel: i,
                onComplete: n,
                onEdit: l,
              })),
              (W[91] = $),
              (W[92] = z),
              (W[93] = eX.business_profile_id),
              (W[94] = es),
              (W[95] = X),
              (W[96] = e),
              (W[97] = t),
              (W[98] = i),
              (W[99] = n),
              (W[100] = l),
              (W[101] = q),
              (W[102] = r))
            : (r = W[102]),
          r
        )
      }
      if (e3 || (null != e6 && e7 === e6)) {
        let e, t, i, n, l, r, a, o, u, d, f, h
        W[103] !== e3 || W[104] !== ep
          ? ((e = e3 || !ep.hasRecoverableSubmission()), (W[103] = e3), (W[104] = ep), (W[105] = e))
          : (e = W[105])
        let p = e,
          m = (tt ?? e9)?.businessType
        return (
          W[106] !== z || W[107] !== m
            ? ((t = (0, s.jsx)(eo.I, { flow: "create", screen: "session_expired", journeyId: z, businessType: m })),
              (W[106] = z),
              (W[107] = m),
              (W[108] = t))
            : (t = W[108]),
          W[109] !== p
            ? ((i = (0, s.jsx)(P.c7, {
                title: (0, s.jsx)(M.L3, {
                  children: p
                    ? (0, s.jsx)(c.A, {
                        id: "businessProfiles.creation.lostDraft.title",
                        defaultMessage: "Something went wrong",
                      })
                    : (0, s.jsx)(c.A, { ...eB.W.sessionExpired }),
                }),
              })),
              (W[109] = p),
              (W[110] = i))
            : (i = W[110]),
          W[111] !== p
            ? ((n = (0, s.jsx)(M.rr, {
                children: p
                  ? (0, s.jsx)(c.A, {
                      id: "businessProfiles.creation.lostDraft.description",
                      defaultMessage:
                        "Your progress wasn\u2019t saved. We\u2019re sorry, but you\u2019ll need to start over to submit your business for review.",
                    })
                  : (0, s.jsx)(c.A, { ...eB.W.reloadHelp }),
              })),
              (W[111] = p),
              (W[112] = n))
            : (n = W[112]),
          W[113] !== i || W[114] !== n
            ? ((l = (0, s.jsxs)(P.OO, { children: [i, n] })), (W[113] = i), (W[114] = n), (W[115] = l))
            : (l = W[115]),
          W[116] !== e3 || W[117] !== V || W[118] !== ep
            ? ((r = () => {
                if (e3 || !ep.hasRecoverableSubmission()) {
                  let e = ep.pending()?.draft.name || V
                  ;(ep.clear(), ep.savePending((0, O.vm)(e, !0), "type"))
                }
                window.location.reload()
              }),
              (W[116] = e3),
              (W[117] = V),
              (W[118] = ep),
              (W[119] = r))
            : (r = W[119]),
          W[120] !== p
            ? ((a = p
                ? (0, s.jsx)(c.A, { id: "businessProfiles.creation.lostDraft.restart", defaultMessage: "Start over" })
                : (0, s.jsx)(c.A, { ...eB.W.reloadPage })),
              (W[120] = p),
              (W[121] = a))
            : (a = W[121]),
          W[122] !== r || W[123] !== a
            ? ((o = (0, s.jsx)(b.$, { onClick: r, children: a })), (W[122] = r), (W[123] = a), (W[124] = o))
            : (o = W[124]),
          W[125] !== e3 || W[126] !== p || W[127] !== ep
            ? ((u =
                p &&
                (0, s.jsx)(b.z, {
                  to: "/",
                  color: "secondary",
                  onClick: () => {
                    ;(e3 || !ep.hasRecoverableSubmission()) && ep.clear()
                  },
                  children: (0, s.jsx)(c.A, { ...eB.W.backToChat }),
                })),
              (W[125] = e3),
              (W[126] = p),
              (W[127] = ep),
              (W[128] = u))
            : (u = W[128]),
          W[129] !== o || W[130] !== u
            ? ((d = (0, s.jsxs)(P.Es, { children: [o, u] })), (W[129] = o), (W[130] = u), (W[131] = d))
            : (d = W[131]),
          W[132] !== l || W[133] !== d
            ? ((f = (0, s.jsxs)(P.R4, { children: [l, d] })), (W[132] = l), (W[133] = d), (W[134] = f))
            : (f = W[134]),
          W[135] !== t || W[136] !== f
            ? ((h = (0, s.jsxs)(M.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                children: [t, f],
              })),
              (W[135] = t),
              (W[136] = f),
              (W[137] = h))
            : (h = W[137]),
          h
        )
      }
      if (null != tt && ti && "alreadySubmitted" !== eO) {
        let e, t, i, n, l, r, a, o, u, d, f, h, p, m, g, v, y, x, w
        ;(W[138] !== tt ? ((e = (0, O.Gk)(tt)), (W[138] = tt), (W[139] = e)) : (e = W[139]),
          W[140] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(c.A, { ...eB.W.submitFailureTitle })), (W[140] = t))
            : (t = W[140]),
          W[141] !== eE || W[142] !== tr || W[143] !== ep
            ? ((i = () => {
                eE || (ep.hasPendingSubmission() ? tr() : eF(!0))
              }),
              (W[141] = eE),
              (W[142] = tr),
              (W[143] = ep),
              (W[144] = i))
            : (i = W[144]),
          W[145] !== z || W[146] !== tt.businessType
            ? ((n = (0, s.jsx)(eo.I, {
                flow: "create",
                screen: "submit_failed",
                journeyId: z,
                businessType: tt.businessType,
              })),
              (W[145] = z),
              (W[146] = tt.businessType),
              (W[147] = n))
            : (n = W[147]),
          W[148] !== eE || W[149] !== ep
            ? ((l = eE || !ep.hasPendingSubmission()), (W[148] = eE), (W[149] = ep), (W[150] = l))
            : (l = W[150]),
          W[151] === Symbol.for("react.memo_cache_sentinel") ? ((r = () => eP.current), (W[151] = r)) : (r = W[151]),
          W[152] !== tr ? ((a = () => tr(!1)), (W[152] = tr), (W[153] = a)) : (a = W[153]),
          W[154] !== eE || W[155] !== et || W[156] !== l || W[157] !== a
            ? ((o = (0, s.jsx)(ec.L, {
                discardCreation: !0,
                dirty: l,
                busy: eE,
                blockSearchChanges: !0,
                allowNavigation: r,
                onDiscard: a,
                onNavigationDiscard: et,
              })),
              (W[154] = eE),
              (W[155] = et),
              (W[156] = l),
              (W[157] = a),
              (W[158] = o))
            : (o = W[158]))
        let _ = eB.W[eO ?? "reviewChanged"]
        ;(W[159] !== _
          ? ((u = (0, s.jsx)("p", {
              role: "alert",
              className: "text-sm text-danger",
              children: (0, s.jsx)(c.A, { ..._ }),
            })),
            (W[159] = _),
            (W[160] = u))
          : (u = W[160]),
          W[161] !== eE || W[162] !== ep
            ? ((d = eE || ep.hasPendingSubmission()), (W[161] = eE), (W[162] = ep), (W[163] = d))
            : (d = W[163]),
          W[164] !== tt || W[165] !== ep
            ? ((f = () => {
                let e = (0, O.Cu)(tt).at(-1) ?? "category"
                ;(ep.savePending(tt, e), eC({ draft: tt, step: e }), ej(null), ez(null))
              }),
              (W[164] = tt),
              (W[165] = ep),
              (W[166] = f))
            : (f = W[166]),
          W[167] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, s.jsx)(c.A, { ...eB.W.back })), (W[167] = h))
            : (h = W[167]),
          W[168] !== d || W[169] !== f
            ? ((p = (0, s.jsx)(b.$, {
                color: "outlineGhost",
                size: "formAction",
                disabled: d,
                onClick: f,
                children: h,
              })),
              (W[168] = d),
              (W[169] = f),
              (W[170] = p))
            : (p = W[170]))
        let j = eE || "personaConfiguration" === eO
        return (
          W[171] !== te?.acceptedRevision || W[172] !== tl
            ? ((m = () => void tl(te?.acceptedRevision)), (W[171] = te?.acceptedRevision), (W[172] = tl), (W[173] = m))
            : (m = W[173]),
          W[174] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, s.jsx)(c.A, { ...eB.W.retry })), (W[174] = g))
            : (g = W[174]),
          W[175] !== eE || W[176] !== j || W[177] !== m
            ? ((v = (0, s.jsx)(e_.C, { size: "formAction", pending: eE, disabled: j, onClick: m, children: g })),
              (W[175] = eE),
              (W[176] = j),
              (W[177] = m),
              (W[178] = v))
            : (v = W[178]),
          W[179] !== p || W[180] !== v
            ? ((y = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [p, v] })),
              (W[179] = p),
              (W[180] = v),
              (W[181] = y))
            : (y = W[181]),
          W[182] !== eE || W[183] !== eT || W[184] !== tr
            ? ((x = eT
                ? (0, s.jsx)(B.C, {
                    kind: "discard",
                    busy: eE,
                    onClose: () => eF(!1),
                    onConfirm: () => tr(),
                    contentProps: {
                      onCloseAutoFocus: (e) => {
                        null != eL.current && (e.preventDefault(), eL.current.focus({ preventScroll: !0 }))
                      },
                    },
                  })
                : null),
              (W[182] = eE),
              (W[183] = eT),
              (W[184] = tr),
              (W[185] = x))
            : (x = W[185]),
          W[186] !== eE ||
          W[187] !== e ||
          W[188] !== i ||
          W[189] !== n ||
          W[190] !== o ||
          W[191] !== u ||
          W[192] !== y ||
          W[193] !== x
            ? ((w = (0, s.jsxs)(eJ, {
                manager: e,
                stepKey: "verify",
                contentLayout: "summary",
                cancelButtonRef: eL,
                busy: eE,
                title: t,
                onCancel: i,
                children: [n, o, u, y, x],
              })),
              (W[186] = eE),
              (W[187] = e),
              (W[188] = i),
              (W[189] = n),
              (W[190] = o),
              (W[191] = u),
              (W[192] = y),
              (W[193] = x),
              (W[194] = w))
            : (w = W[194]),
          w
        )
      }
      let ta = 0 === em && eH.isPending ? e$ : void 0,
        to = tt ?? e9 ?? ta
      if (null == to) {
        let e, t, i, n, l, r, a, o, u, d
        if (!eH.isError) {
          let e, t, i
          return (
            W[195] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(c.A, { ...tk.v.business })), (W[195] = e))
              : (e = W[195]),
            W[196] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(tI.Bz, { variant: "form" })), (W[196] = t))
              : (t = W[196]),
            W[197] !== Y
              ? ((i = (0, s.jsx)(eJ, { manager: null, stepKey: "loading", title: e, onCancel: Y, children: t })),
                (W[197] = Y),
                (W[198] = i))
              : (i = W[198]),
            i
          )
        }
        let f = "personaConfiguration" === e2 ? eB.W.personaConfiguration : eB.W.error
        W[199] !== ep
          ? ((e = ep.isNameFirst() && !ep.hasPendingSubmission()), (W[199] = ep), (W[200] = e))
          : (e = W[200])
        let h = e
        ;(W[201] !== z
          ? ((t = (0, s.jsx)(eo.I, { flow: "create", screen: "restore_failed", journeyId: z })),
            (W[201] = z),
            (W[202] = t))
          : (t = W[202]),
          W[203] !== f
            ? ((i = (0, s.jsx)("p", { role: "alert", children: (0, s.jsx)(c.A, { ...f }) })),
              (W[203] = f),
              (W[204] = i))
            : (i = W[204]))
        let p = "personaConfiguration" === e2
        ;(W[205] !== eH ? ((n = () => void eH.refetch()), (W[205] = eH), (W[206] = n)) : (n = W[206]),
          W[207] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, s.jsx)(c.A, { ...eB.W.retry })), (W[207] = l))
            : (l = W[207]),
          W[208] !== p || W[209] !== n
            ? ((r = (0, s.jsx)(b.$, { disabled: p, onClick: n, children: l })),
              (W[208] = p),
              (W[209] = n),
              (W[210] = r))
            : (r = W[210]),
          W[211] !== h || W[212] !== Y || W[213] !== ep
            ? ((a = () => {
                ;(h && ep.clear(), Y())
              }),
              (W[211] = h),
              (W[212] = Y),
              (W[213] = ep),
              (W[214] = a))
            : (a = W[214]))
        let m = h ? eB.W.changeName : eB.W.backToChat
        return (
          W[215] !== m ? ((o = (0, s.jsx)(c.A, { ...m })), (W[215] = m), (W[216] = o)) : (o = W[216]),
          W[217] !== a || W[218] !== o
            ? ((u = (0, s.jsx)(b.$, { color: "secondary", onClick: a, children: o })),
              (W[217] = a),
              (W[218] = o),
              (W[219] = u))
            : (u = W[219]),
          W[220] !== t || W[221] !== i || W[222] !== r || W[223] !== u
            ? ((d = (0, s.jsxs)("div", {
                className: "mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 py-8",
                children: [t, i, r, u],
              })),
              (W[220] = t),
              (W[221] = i),
              (W[222] = r),
              (W[223] = u),
              (W[224] = d))
            : (d = W[224]),
          d
        )
      }
      let tu = "alreadySubmitted" === eO ? "duplicate" : (eR ?? em),
        tc = "alreadySubmitted" === eO,
        td = to.name,
        tf = eq ? eV : void 0,
        th = null == ta ? void 0 : async () => (await ef.ensureQueryData(eK)).response
      W[225] === Symbol.for("react.memo_cache_sentinel") ? ((D = () => eP.current), (W[225] = D)) : (D = W[225])
      let tp = !ex && (null == H || eq) && null == eA
      W[226] !== eA?.step || W[227] !== to || W[228] !== eR || W[229] !== eH.data?.step || W[230] !== tt
        ? ((N =
            null != eR
              ? "address"
              : (eA?.step ?? (null != tt || eH.data?.step === "review" ? (0, O.Cu)(to).at(-1) : eH.data?.step))),
          (W[226] = eA?.step),
          (W[227] = to),
          (W[228] = eR),
          (W[229] = eH.data?.step),
          (W[230] = tt),
          (W[231] = N))
        : (N = W[231])
      let tm = eH.data?.response
      return (
        W[232] !== tm ? ((T = (0, e0.z8)(tm)), (W[232] = tm), (W[233] = T)) : (T = W[233]),
        W[234] === Symbol.for("react.memo_cache_sentinel") ? ((F = () => ez("expired")), (W[234] = F)) : (F = W[234]),
        W[235] !== ep || W[236] !== tl
          ? ((L = (e, t) => {
              ;(ep.savePending(e, "review"), ej({ draft: e, acceptedRevision: t }), eC(null), tl(t))
            }),
            (W[235] = ep),
            (W[236] = tl),
            (W[237] = L))
          : (L = W[237]),
        W[238] !== $ ||
        W[239] !== z ||
        W[240] !== eE ||
        W[241] !== to ||
        W[242] !== eR ||
        W[243] !== Y ||
        W[244] !== et ||
        W[245] !== er ||
        W[246] !== ep ||
        W[247] !== e5 ||
        W[248] !== tu ||
        W[249] !== tc ||
        W[250] !== tf ||
        W[251] !== th ||
        W[252] !== tp ||
        W[253] !== N ||
        W[254] !== T ||
        W[255] !== L
          ? ((R = (0, s.jsx)(
              tn,
              {
                acquisitionJourneyId: z,
                initialDuplicateSubmission: tc,
                initialLocalFailure: eR,
                accountId: $,
                contactVerificationEnabled: !0,
                name: td,
                submitting: eE,
                startReplacement: tf,
                waitForNameScreening: th,
                allowNavigation: D,
                initialDraft: to,
                checkLocalAdmission: tp,
                initialStep: N,
                temporarySession: ep,
                initialSession: T,
                onSessionDeadline: e5,
                onExpired: F,
                onCancel: Y,
                onSaveAndExit: er,
                onNavigationDiscard: et,
                onReview: L,
              },
              tu,
            )),
            (W[238] = $),
            (W[239] = z),
            (W[240] = eE),
            (W[241] = to),
            (W[242] = eR),
            (W[243] = Y),
            (W[244] = et),
            (W[245] = er),
            (W[246] = ep),
            (W[247] = e5),
            (W[248] = tu),
            (W[249] = tc),
            (W[250] = tf),
            (W[251] = th),
            (W[252] = tp),
            (W[253] = N),
            (W[254] = T),
            (W[255] = L),
            (W[256] = R))
          : (R = W[256]),
        R
      )
    }
    function tD(e) {
      return e + 1
    }
    function tN(e) {
      let t,
        i,
        l = (0, n.c)(13),
        r =
          e.creationPrefill?.resumeProfileId != null && e.creationPrefill.resumeProfileId !== e.profileId
            ? void 0
            : e.creationPrefill
      l[0] !== r ||
      l[1] !== e.accountId ||
      l[2] !== e.newEntry ||
      l[3] !== e.profileId ||
      l[4] !== e.recheckPrivateAccess ||
      l[5] !== e.resumeDraftId ||
      l[6] !== e.userId
        ? ((t = () => {
            if (null == e.recheckPrivateAccess) return !1
            let t = (0, e0.vC)(e.accountId, e.userId, void 0, e.resumeDraftId)
            if (!t.hasRestorableAttempt()) return !1
            let i = t.pending(),
              s = i?.draft.shopifyRouting
            return (
              !e.newEntry ||
              null != e.profileId ||
              t.hasRecoverableSubmission() ||
              (null != r &&
                ((s?.shopGid === r.shopify_shop_gid && s.shopDomain === r.myshopify_domain) ||
                  (i?.step === "review" && null == i.draft.profileId)))
            )
          }),
          (l[0] = r),
          (l[1] = e.accountId),
          (l[2] = e.newEntry),
          (l[3] = e.profileId),
          (l[4] = e.recheckPrivateAccess),
          (l[5] = e.resumeDraftId),
          (l[6] = e.userId),
          (l[7] = t))
        : (t = l[7])
      let [o] = (0, a.useState)(t),
        u = null == e.recheckPrivateAccess ? "authorized" : "public"
      return (
        l[8] !== r || l[9] !== e || l[10] !== o || l[11] !== u
          ? ((i = (0, s.jsx)(tM, { ...e, creationPrefill: r, protectedRecovery: o }, u)),
            (l[8] = r),
            (l[9] = e),
            (l[10] = o),
            (l[11] = u),
            (l[12] = i))
          : (i = l[12]),
        i
      )
    }
    function tM(e) {
      let t,
        i,
        l,
        o,
        u,
        c,
        d,
        f,
        h = (0, n.c)(41),
        {
          acquisitionJourneyId: p,
          accountId: m,
          userId: b,
          resumeDraftId: g,
          name: v,
          profileId: y,
          newEntry: x,
          entryAdmitted: w,
          entryFallback: _,
          onWaitlistDone: j,
          recheckPrivateAccess: C,
          creationPrefill: S,
          onPublishedCreation: I,
          onCancel: k,
          onNavigationDiscard: E,
          onPersist: D,
          onRestart: N,
          onComplete: M,
          protectedRecovery: P,
        } = e,
        T = void 0 !== x && x,
        F = (0, r._U)(A.JW, "4046009702")
      h[0] !== m || h[1] !== g || h[2] !== b
        ? ((t = () => (0, e0.vC)(m, b, void 0, g)), (h[0] = m), (h[1] = g), (h[2] = b), (h[3] = t))
        : (t = h[3])
      let L = t,
        R = L(),
        z = P && null != C,
        $ = null == C ? R.pending() : null,
        q = null == C && R.hasPendingSession()
      h[4] !== L
        ? ((i = function () {
            let e = L(),
              t = e.pending()
            return e.hasRecoverableSubmission() || (t?.step === "review" && null == t.draft.profileId)
          }),
          (h[4] = L),
          (h[5] = i))
        : (i = h[5])
      let U = i,
        [V, K] = (0, a.useState)(() => {
          if (null == S || null != C) return "incoming"
          let e = $?.draft.shopifyRouting
          return e?.shopGid === S.shopify_shop_gid &&
            e.shopDomain === S.myshopify_domain &&
            (null == y || $?.draft.profileId === y)
            ? "matching"
            : U()
              ? "existing"
              : (null == y || S.resumeProfileId !== y || null != $ || q) && (null != y || q || null != $)
                ? "confirm"
                : "incoming"
        }),
        H = "matching" === V || "existing" === V,
        J = "existing" === V ? null : y,
        G = null != S && "existing" === V,
        Q = H ? $?.draft : void 0,
        Z = "matching" === V ? S?.appFunnelId : void 0,
        X = H && $?.step !== "review" ? $?.step : void 0,
        Y = H && $?.step === "review" && !q,
        [ee, et] = (0, a.useState)(null),
        [ei, es] = (0, a.useState)(Y && null != Q ? (0, O.Tu)(Q, Z) : null),
        [en, el] = (0, a.useState)(Y ? ($?.draft.profileId ?? null) : null),
        er =
          Q ??
          (null == S || "incoming" !== V
            ? void 0
            : {
                ...(0, O.vm)(v, F),
                values: { website: S.website },
                shopifyAppFunnel: null == S.appFunnelId ? void 0 : { id: S.appFunnelId },
                shopifyRouting: { shopGid: S.shopify_shop_gid, shopDomain: S.myshopify_domain },
              }),
        ea =
          (!T || H) &&
          !(P && "matching" === V) &&
          (null != $ || q) &&
          (!q || R.hasPendingStart()) &&
          $?.draft.profileId == null &&
          $?.step !== "review",
        eo =
          ((T && "incoming" === V) || ea) &&
          !z &&
          null == J &&
          null == ee &&
          null == ei &&
          !R.hasRecoverableSubmission()
      h[6] !== F || h[7] !== S?.resumeProfileId || h[8] !== S?.shop_name || h[9] !== L || h[10] !== y || h[11] !== N
        ? ((l = function () {
            let e = null != y && S?.resumeProfileId === y ? y : void 0
            ;((F && null == e) || L().clear(),
              et(null),
              es(null),
              el(null),
              K("incoming"),
              null != e ? N(S?.shop_name ?? "", !0, e) : N(S?.shop_name ?? "", !0))
          }),
          (h[6] = F),
          (h[7] = S?.resumeProfileId),
          (h[8] = S?.shop_name),
          (h[9] = L),
          (h[10] = y),
          (h[11] = N),
          (h[12] = l))
        : (l = h[12])
      let eu = l
      h[13] !== L
        ? ((o = function () {
            let e = L(),
              t = e.pending()
            ;(t?.step !== "review" || e.hasPendingSession() || (es(t.draft), el(t.draft.profileId ?? null)),
              K("existing"))
          }),
          (h[13] = L),
          (h[14] = o))
        : (o = h[14])
      let ec = o
      h[15] !== L || h[16] !== G || h[17] !== U || h[18] !== k || h[19] !== eu
        ? ((u = function () {
            let e = L(),
              t = e.pending()
            !G || e.hasRecoverableSubmission() || e.hasPendingSession() || (null != t && null == t.draft.profileId)
              ? k(G || U())
              : eu()
          }),
          (h[15] = L),
          (h[16] = G),
          (h[17] = U),
          (h[18] = k),
          (h[19] = eu),
          (h[20] = u))
        : (u = h[20])
      let ed = u
      h[21] !== L || h[22] !== G || h[23] !== k || h[24] !== eu
        ? ((c = function () {
            G && !L().hasRecoverableSubmission() ? eu() : k(G)
          }),
          (h[21] = L),
          (h[22] = G),
          (h[23] = k),
          (h[24] = eu),
          (h[25] = c))
        : (c = h[25])
      let ef = c,
        eh = W.d,
        ep = "confirm" === V ? "incoming" : V,
        em = ea ? ($?.draft.name ?? v) : v,
        eb = eo && !(void 0 !== w && w),
        eg = z ? C : void 0
      h[26] !== k ? ((d = () => k(!0)), (h[26] = k), (h[27] = d)) : (d = h[27])
      let ev = (function () {
        if ("confirm" === V)
          return (0, s.jsx)(B.C, {
            kind: "discard",
            busy: !1,
            onClose: ec,
            onConfirm: () => {
              U() ? ec() : eu()
            },
          })
        let e = null != J && $?.draft.profileId === J ? $.draft.shopifyRouting : void 0
        if ((F || R.hasRecoverableSubmission() || (H && q)) && !Y && null == J && ee?.draft.profileId == null)
          return (0, s.jsx)(
            tE,
            {
              acquisitionJourneyId: p,
              accountId: m,
              userId: b,
              resumeDraftId: g,
              name: Q?.name ?? (G ? "" : v),
              initialDraft:
                ee?.draft ??
                (T && !z && !H && R.hasRestorableAttempt() && !R.hasRecoverableSubmission()
                  ? (er ?? (0, O.vm)(v, !0))
                  : void 0),
              fallbackDraft: er,
              resumedAppFunnelId: Z,
              initialStep: ee?.step,
              onStartDenied: () => k(!0),
              onPublishedCreation: I,
              onCancel: ed,
              onSaveAndExit: () => k(!0, "hub"),
              onNavigationDiscard: E,
              onPersist: D,
              onComplete: M,
            },
            `${m}:${b}:${V}:${g ?? ""}`,
          )
        let t = null != ei && (null == J || J === en)
        if (null != J || null != ei) {
          let i = (t ? ei?.shopifyRouting : void 0) ?? e,
            n = null != J && S?.resumeProfileId === J ? S : void 0,
            l = null == n ? void 0 : { shopGid: n.shopify_shop_gid, shopDomain: n.myshopify_domain },
            r =
              null != n && null == i && null != I
                ? async (e, t, i) => {
                    i()
                    let s = URL.parse((0, O.DX)(n.website)),
                      l = URL.parse((0, O.DX)(e.details.values.website ?? ""))
                    if (
                      e.business_profile_id !== J ||
                      null == s ||
                      null == l ||
                      !["http:", "https:"].includes(l.protocol) ||
                      l.hostname.replace(/\.$/, "") !== s.hostname.replace(/\.$/, "")
                    )
                      throw Error("Shopify creation website changed")
                    await I(e, t, i)
                  }
                : I
          return (0, s.jsx)(
            tw,
            {
              acquisitionJourneyId: p,
              accountId: m,
              contactVerificationEnabled: F,
              userId: b,
              profileId: J,
              draft: t ? ei : null,
              shopifyRouting: i ?? l,
              onPublishedCreation: r,
              onPersist: (e, i) => {
                if (t && ei?.shopifyRouting != null) {
                  let t = L()
                  ;(t.pending(), t.savePending({ ...ei, profileId: e }, "review"))
                }
                ;(t && el(e), D(e, i))
              },
              onCancel: ed,
              onComplete: M,
              onEdit: (e, t) => {
                ;(et({ draft: e, step: t }), es(null), N(e.name))
              },
            },
            t ? "local" : J,
          )
        }
        return (0, s.jsx)(
          tn,
          {
            acquisitionJourneyId: p,
            checkLocalAdmission: eo,
            accountId: m,
            contactVerificationEnabled: F,
            name: Q?.name ?? v,
            initialDraft: ee?.draft ?? (null == er ? void 0 : (0, O.Tu)(er, Z)),
            initialStep: ee?.step ?? X,
            onCancel: ef,
            onNavigationDiscard: E,
            onReview: (e) => {
              if (null != e.shopifyRouting) {
                let t = L()
                ;(t.pending(), t.savePending(e, "review"))
              }
              es(e)
            },
          },
          V,
        )
      })()
      return (
        h[28] !== eh ||
        h[29] !== m ||
        h[30] !== p ||
        h[31] !== _ ||
        h[32] !== j ||
        h[33] !== em ||
        h[34] !== eb ||
        h[35] !== eg ||
        h[36] !== d ||
        h[37] !== ev ||
        h[38] !== ep ||
        h[39] !== b
          ? ((f = (0, s.jsx)(
              eh,
              {
                accountId: m,
                userId: b,
                interestType: "creation",
                funnelJourneyId: p,
                businessName: em,
                fallback: _,
                required: eb,
                onDone: j,
                verifyAccess: eg,
                onClose: d,
                children: ev,
              },
              ep,
            )),
            (h[28] = eh),
            (h[29] = m),
            (h[30] = p),
            (h[31] = _),
            (h[32] = j),
            (h[33] = em),
            (h[34] = eb),
            (h[35] = eg),
            (h[36] = d),
            (h[37] = ev),
            (h[38] = ep),
            (h[39] = b),
            (h[40] = f))
          : (f = h[40]),
        f
      )
    }
    var tP = i("nlaw"),
      tT = i("Gnfq"),
      tF = i("DBCl"),
      tL = i("Kwur")
    function tR(e) {
      return null != e.businessProfileId ? "profile:" + e.businessProfileId : "local:" + e.place.entity_lookup_id
    }
    let tW = {
      async search({ query: e, accountId: t, signal: i }) {
        i.throwIfAborted()
        let s = await tL.Request.safeGet("/chat/frontend/v1/business-profiles/search", {
          additionalHeaders: { "x-openai-use-sheep": "1", "ChatGPT-Account-ID": t, [tF.zBc]: t },
          signal: i,
          parameters: { query: { query: e, limit: 16, include_local: !0 } },
        })
        return (
          i.throwIfAborted(),
          (function (e, t, i) {
            let s = (e) => e.trim().replace(/\s+/g, " ").toLowerCase(),
              n = s(e),
              l = t.filter((e) => s(e.name) === n),
              r = t.filter((e) => s(e.name) !== n),
              a = new Set(t.map((e) => e.businessProfileId)),
              o = i.filter((e) => null == e.businessProfileId || !a.has(e.businessProfileId)),
              u = [...l]
            for (let e = 0; e < Math.max(r.length, o.length); e++) {
              let t = r[e],
                i = o[e]
              ;(null != t && u.push(t), null != i && u.push(i))
            }
            let c = new Set()
            return u
              .filter((e) => {
                let t = tR(e)
                return !c.has(t) && (c.add(t), !0)
              })
              .slice(0, 16)
          })(
            e,
            s.results.map((e) => {
              let t = s.local_results?.find((t) => t.business_profile_id === e.business_profile_id)
              return {
                canonicalId: e.canonical_id,
                businessProfileId: e.business_profile_id,
                name: e.display_name,
                kind: e.kind,
                scope: e.scope,
                businessType: "local_business" === e.business_type ? "local" : (e.business_type ?? void 0),
                address: e.display_address ?? void 0,
                website: e.website_url ?? t?.website_url ?? void 0,
                logoUrl: e.logo_url ?? void 0,
                protectionPlace:
                  null == t ? void 0 : { entity_lookup_id: t.entity_lookup_id, entity_key: t.entity_key },
              }
            }),
            (s.local_results ?? []).map((e) => {
              let t = {
                name: e.display_name,
                businessType: "ecommerce" === e.business_type ? "ecommerce" : "local",
                address: e.display_address ?? void 0,
                website: e.website_url ?? void 0,
                logoUrl: e.logo_url ?? void 0,
              }
              return null != e.business_profile_id
                ? {
                    ...t,
                    businessProfileId: e.business_profile_id,
                    protectionPlace: { entity_lookup_id: e.entity_lookup_id, entity_key: e.entity_key },
                  }
                : { ...t, place: e }
            }),
          )
        )
      },
    }
    var tB = i("SFAW"),
      tO = i("NAwl")
    let tz = tO.H - tO.so,
      { desktop: t$, mobile: tq } = tO.fK,
      tU = {
        "--desktop-icon-width": `${((t$.iconSize * tB.fp) / t$.width) * 100}%`,
        "--mobile-icon-width": `${((tq.iconSize * tB.fp) / tq.width) * 100}%`,
      },
      tV = [
        "corner-shop",
        "wooden-pull-along-duck",
        "adjustable-wrench",
        "woven-market-basket",
        "bookshop-finds",
        "shopping-cart",
      ].map((e, t) => {
        let i = (0, tO.cr)(t, tz, t$),
          s = (0, tO.cr)(t, tz, tq),
          n = tB.kK.indexOf(e),
          l = Math.floor(n / 7)
        return {
          key: e,
          style: {
            "--desktop-x": `${(i.x / t$.width) * 100}%`,
            "--desktop-y": `${(i.y / t$.height) * 100}%`,
            "--mobile-x": `${(s.x / tq.width) * 100}%`,
            "--mobile-y": `${(s.y / tq.height) * 100}%`,
            backgroundImage: `url(${tB.jJ})`,
            backgroundSize: `700% ${100 * tB.fV}%`,
            backgroundPosition: `${((n % 7) / 6) * 100}% ${(l / (tB.fV - 1)) * 100}%`,
            transform: `translate(-50%, -50%) rotate(${-i.rotation}rad)`,
          },
        }
      })
    function tK() {
      let e,
        t,
        l,
        r,
        o,
        u = (0, n.c)(8),
        c = (0, a.useRef)(null),
        d = (0, a.useRef)(null),
        [f, h] = (0, a.useState)("loading"),
        [p, m] = (0, a.useState)(!1)
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
            let e,
              t = c.current,
              s = d.current
            if (!t || !s) return
            let n = window.matchMedia("(prefers-reduced-motion: reduce)"),
              l = !1,
              r = !1,
              a = !1,
              o = !1,
              u = function () {
                return o && !document.hidden && !n.matches && !r
              },
              f = function () {
                ;((r = !0), e?.dispose(), (e = void 0), l || (h("fallback"), m(!1)))
              },
              p = function () {
                ;((a = !0),
                  Promise.all([i.e(910996), i.e(406151)])
                    .then(i.bind(i, "ItwM"))
                    .then(({ createArtworkRenderer: e }) => e)
                    .then((t) => {
                      s &&
                        !l &&
                        u() &&
                        (e = t(
                          s,
                          () => {
                            l || h("ready")
                          },
                          f,
                        )).setPlaying(u())
                    })
                    .catch(f)
                    .finally(() => {
                      a = !1
                    }))
              },
              b = function () {
                let t = u()
                ;(m(t), e?.setPlaying(t), !t || e || a || p())
              },
              g = new IntersectionObserver((e) => {
                let [t] = e
                ;((o = t?.isIntersecting ?? !1), b())
              })
            return (
              g.observe(t),
              document.addEventListener("visibilitychange", b),
              n.addEventListener("change", b),
              () => {
                ;((l = !0),
                  g.disconnect(),
                  document.removeEventListener("visibilitychange", b),
                  n.removeEventListener("change", b),
                  e?.dispose())
              }
            )
          }),
          (t = []),
          (u[0] = e),
          (u[1] = t))
        : ((e = u[0]), (t = u[1])),
        (0, a.useEffect)(e, t))
      let b = "ready" === f,
        g = "fallback" === f
      return (
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)("div", { className: "staticArc-a9ikAv", style: tU, children: tV.map(tH) })),
            (r = (0, s.jsx)("canvas", { ref: d, className: "animatedArc-frWWcS" })),
            (u[2] = l),
            (u[3] = r))
          : ((l = u[2]), (r = u[3])),
        u[4] !== p || u[5] !== b || u[6] !== g
          ? ((o = (0, s.jsxs)("div", {
              ref: c,
              className: "artwork-JC7Ncc",
              "aria-hidden": !0,
              "data-ready": b,
              "data-fallback": g,
              "data-playing": p,
              children: [l, r],
            })),
            (u[4] = p),
            (u[5] = b),
            (u[6] = g),
            (u[7] = o))
          : (o = u[7]),
        o
      )
    }
    function tH(e) {
      let { key: t, style: i } = e
      return (0, s.jsx)("span", { style: i }, t)
    }
    var tJ = i("snnp")
    let tG = (0, i("ESTr").a)({
      name: "multicolor-verified-checkmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        visualBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#00B1FF",
            bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
            wideGamut: "color(display-p3 0.0000 0.6941 1.0000)",
          },
          { role: "fixed", color: "#FFFFFF", bounds: { x: 5.279785, y: 5.384766, width: 5.358887, height: 5.230957 } },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        center: { x: 7.999757, y: 8 },
        insets: { top: 1.332031, right: 1.78955, bottom: 1.332031, left: 1.789063 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999757, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99997 1.33203C9.23724 1.33206 10.3126 2.02323 10.8625 3.04027C12.0186 3.00749 13.1556 3.594 13.7745 4.66593C14.3932 5.73765 14.3324 7.0151 13.7262 7.99984C14.3324 8.98464 14.3932 10.262 13.7745 11.3338C13.1556 12.4057 12.0186 12.9916 10.8624 12.9588C10.3127 13.9762 9.23737 14.6677 7.9999 14.6678C6.7623 14.6678 5.68652 13.9763 5.1368 12.9589C3.98084 12.9915 2.84417 12.4056 2.2254 11.3338C1.6067 10.2622 1.66702 8.9847 2.27306 7.9999C1.66704 7.01517 1.60672 5.73766 2.22544 4.666C2.84422 3.59421 3.9809 3.00771 5.13686 3.0403C5.68667 2.02313 6.76264 1.33204 7.99997 1.33203Z" fill="#00B1FF"/> <path d="M9.4087 5.69472C9.6057 5.38372 10.0176 5.29132 10.3286 5.48834C10.6396 5.68538 10.732 6.09724 10.535 6.40826L8.1847 10.1186C8.15963 10.1582 8.11783 10.2256 8.0747 10.282C8.0285 10.3423 7.93456 10.454 7.7785 10.5306C7.59363 10.6213 7.3815 10.6403 7.18343 10.584C7.01603 10.5364 6.9037 10.4431 6.8475 10.392C6.79483 10.344 6.74117 10.2852 6.7095 10.2507L5.45556 8.8881C5.20633 8.61716 5.22443 8.1953 5.49527 7.94603C5.76624 7.69676 6.18806 7.7141 6.43733 7.9851L7.3377 8.96356L9.4087 5.69472Z" fill="white"/>',
    })
    var tQ = i("suje"),
      tZ = i("GEsy"),
      tX = "suggestions-nrhhAz",
      tY = "menu-F6kN1t"
    function t1(e) {
      let t,
        i,
        l,
        o,
        d,
        f,
        h,
        m,
        g,
        v,
        y,
        x,
        _,
        A,
        C = (0, n.c)(58),
        { query: S, configuration: I, onSelect: k, createAction: E, open: D, observeHubFunnel: N } = e,
        M = void 0 !== N && N,
        P = (0, r.gh)(j.u)
      C[0] !== P
        ? ((t = function (e) {
            return null == e.ownership
              ? (0, p.t)(P, "hub_search_result")
              : "unclaimed" === e.ownership
                ? (0, p.t)(P, "hub_search")
                : void 0
          }),
          (C[0] = P),
          (C[1] = t))
        : (t = C[1])
      let F = t,
        L = (0, u.A)(),
        { adapter: R, accountId: W } = I,
        [B] = (0, a.useState)(t0)
      C[2] !== W || C[3] !== S
        ? ((i = ["business-profile-name-search", W, S]), (C[2] = W), (C[3] = S), (C[4] = i))
        : (i = C[4])
      let O = i,
        z = (0, tZ.o)(O, 250),
        $ = O !== z,
        q = I.revision ?? 0
      ;(C[5] !== O || C[6] !== q ? ((l = [...O, q]), (C[5] = O), (C[6] = q), (C[7] = l)) : (l = C[7]),
        C[8] !== W || C[9] !== R || C[10] !== S
          ? ((o = async (e) => {
              let { signal: t } = e,
                i = await R.search({ query: S, accountId: W, signal: t }),
                s = new Set()
              return i.filter((e) => {
                let t = tR(e)
                return !s.has(t) && (s.add(t), !0)
              })
            }),
            (C[8] = W),
            (C[9] = R),
            (C[10] = S),
            (C[11] = o))
          : (o = C[11]),
        C[12] !== S || C[13] !== $ ? ((d = !!S.trim() && !$), (C[12] = S), (C[13] = $), (C[14] = d)) : (d = C[14]),
        C[15] !== l || C[16] !== o || C[17] !== d
          ? ((f = {
              queryKey: l,
              queryFn: o,
              enabled: d,
              staleTime: 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (C[15] = l),
            (C[16] = o),
            (C[17] = d),
            (C[18] = f))
          : (f = C[18]))
      let { data: U, isFetching: V, isError: K, refetch: H } = (0, G.I)(f, B),
        J = $ || V,
        Q = U?.length === 0 ? "hub_directory_no_results" : "hub_directory_results"
      if (!S.trim()) return null
      let Z = !D
      C[19] !== K || C[20] !== J || C[21] !== M || C[22] !== D || C[23] !== U || C[24] !== Q
        ? ((h = M && (0, s.jsx)(eo.I, { flow: "hub", screen: !D || J || K || null == U ? null : Q })),
          (C[19] = K),
          (C[20] = J),
          (C[21] = M),
          (C[22] = D),
          (C[23] = U),
          (C[24] = Q),
          (C[25] = h))
        : (h = C[25])
      let X = K ? null : E,
        Y =
          !J && (K || (null != U && U.length > 0))
            ? "sr-only"
            : "px-2.5 py-1.5 text-[13px] leading-[18px] text-secondary"
      return (
        C[26] !== J
          ? ((m = J
              ? (0, s.jsx)(c.A, {
                  id: "businessProfiles.search.results.loading",
                  defaultMessage: "Searching businesses\u2026",
                })
              : null),
            (C[26] = J),
            (C[27] = m))
          : (m = C[27]),
        C[28] !== K || C[29] !== J || C[30] !== U
          ? ((g =
              J || K || null == U
                ? null
                : (0, s.jsx)(c.A, {
                    id: "businessProfiles.search.results.count",
                    defaultMessage:
                      "{count, plural, =0 {No matching business} one {# matching business} other {# matching businesses}}",
                    values: { count: U.length },
                  })),
            (C[28] = K),
            (C[29] = J),
            (C[30] = U),
            (C[31] = g))
          : (g = C[31]),
        C[32] !== Y || C[33] !== m || C[34] !== g
          ? ((v = (0, s.jsxs)("p", { role: "status", className: Y, children: [m, g] })),
            (C[32] = Y),
            (C[33] = m),
            (C[34] = g),
            (C[35] = v))
          : (v = C[35]),
        C[36] !== K || C[37] !== J || C[38] !== H
          ? ((y =
              !J && K
                ? (0, s.jsxs)("div", {
                    className: "flex min-h-30 flex-col items-center justify-center gap-3 px-2.5 py-3 text-center",
                    children: [
                      (0, s.jsx)("p", {
                        role: "alert",
                        className: "text-sm",
                        children: (0, s.jsx)(c.A, {
                          id: "businessProfiles.search.results.loadError",
                          defaultMessage: "Something went wrong",
                        }),
                      }),
                      (0, s.jsxs)(b.$, {
                        type: "button",
                        color: "outlineGhost",
                        size: "dialog",
                        onClick: () => void H(),
                        children: [
                          (0, s.jsx)(T.I, { asset: tJ.E, "aria-hidden": "true" }),
                          (0, s.jsx)(c.A, { id: "businessProfiles.search.results.retry", defaultMessage: "Try again" }),
                        ],
                      }),
                    ],
                  })
                : null),
            (C[36] = K),
            (C[37] = J),
            (C[38] = H),
            (C[39] = y))
          : (y = C[39]),
        C[40] !== L || C[41] !== K || C[42] !== J || C[43] !== k || C[44] !== U || C[45] !== H || C[46] !== F
          ? ((x =
              J || K || null == U || !(U.length > 0)
                ? null
                : (0, s.jsx)("ul", {
                    className: "results-Yrnd1r",
                    "aria-label": L.formatMessage({
                      id: "businessProfiles.search.results.label",
                      defaultMessage: "Matching businesses",
                    }),
                    children: U.map((e) =>
                      (0, s.jsxs)(
                        "li",
                        {
                          children: [
                            "unavailable" === e.ownership
                              ? (0, s.jsx)("div", {
                                  className:
                                    "flex min-h-9 items-center gap-1.5 px-2.5 py-1.5 text-[13px] leading-[18px]",
                                  children: (0, s.jsx)(t2, { profile: e }),
                                })
                              : (0, s.jsx)(w.t, {
                                  highlighted: !1,
                                  variant: "search",
                                  type: "button",
                                  ref: F(e),
                                  "data-business-profile-result": e.canonicalId ?? tR(e),
                                  "data-business-profile-option": !0,
                                  onClick: (t) => k?.(e, t.currentTarget),
                                  children: (0, s.jsx)(t2, { profile: e }),
                                }),
                            "unavailable" === e.ownership
                              ? (0, s.jsxs)("div", {
                                  className: "flex flex-col items-start gap-2 px-2.5 pb-1.5",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "text-sm text-secondary",
                                      children: (0, s.jsx)(c.A, {
                                        id: "businessProfiles.search.results.unavailable",
                                        defaultMessage:
                                          "This profile is no longer available. Refresh the results to try again.",
                                      }),
                                    }),
                                    (0, s.jsx)(b.$, {
                                      type: "button",
                                      color: "secondary",
                                      onClick: () => void H(),
                                      children: (0, s.jsx)(c.A, {
                                        id: "businessProfiles.search.results.refresh",
                                        defaultMessage: "Refresh results",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        },
                        tR(e),
                      ),
                    ),
                  })),
            (C[40] = L),
            (C[41] = K),
            (C[42] = J),
            (C[43] = k),
            (C[44] = U),
            (C[45] = H),
            (C[46] = F),
            (C[47] = x))
          : (x = C[47]),
        C[48] !== X || C[49] !== v || C[50] !== y || C[51] !== x
          ? ((_ = (0, s.jsxs)(w.W, { className: tY, variant: "search", children: [X, v, y, x] })),
            (C[48] = X),
            (C[49] = v),
            (C[50] = y),
            (C[51] = x),
            (C[52] = _))
          : (_ = C[52]),
        C[53] !== J || C[54] !== h || C[55] !== _ || C[56] !== Z
          ? ((A = (0, s.jsxs)("section", { className: tX, hidden: Z, "aria-busy": J, children: [h, _] })),
            (C[53] = J),
            (C[54] = h),
            (C[55] = _),
            (C[56] = Z),
            (C[57] = A))
          : (A = C[57]),
        A
      )
    }
    function t0() {
      return new tQ.E()
    }
    function t2(e) {
      let t,
        i,
        l,
        r,
        a,
        o,
        c,
        d,
        f = (0, n.c)(23),
        { profile: h } = e,
        p = (0, u.A)()
      f[0] !== h.address || f[1] !== h.businessType || f[2] !== h.website
        ? ((t =
            "ecommerce" === h.businessType
              ? h.website?.trim() || h.address?.trim()
              : h.address?.trim() || h.website?.trim()),
          (f[0] = h.address),
          (f[1] = h.businessType),
          (f[2] = h.website),
          (f[3] = t))
        : (t = f[3])
      let m = t
      return (
        f[4] !== h.name
          ? ((i = (0, s.jsx)("bdi", { className: "min-w-0 break-words", children: h.name })),
            (f[4] = h.name),
            (f[5] = i))
          : (i = f[5]),
        f[6] !== p || f[7] !== h.ownership
          ? ((l =
              "manageable" === h.ownership || "claimed" === h.ownership
                ? (0, s.jsx)(T.I, {
                    asset: tG,
                    className: "shrink-0",
                    label: p.formatMessage({
                      id: "businessProfiles.search.results.claimedBadge",
                      defaultMessage: "Claimed",
                    }),
                  })
                : null),
            (f[6] = p),
            (f[7] = h.ownership),
            (f[8] = l))
          : (l = f[8]),
        f[9] !== i || f[10] !== l
          ? ((r = (0, s.jsxs)("span", { className: "flex min-w-0 items-center gap-1 font-normal", children: [i, l] })),
            (f[9] = i),
            (f[10] = l),
            (f[11] = r))
          : (r = f[11]),
        f[12] !== m || f[13] !== h.address
          ? ((a = m
              ? (0, s.jsx)("span", {
                  className: h.address?.trim() ? "break-words text-tertiary" : "truncate text-tertiary",
                  title: m,
                  children: (0, s.jsx)("bdi", { children: m }),
                })
              : null),
            (f[12] = m),
            (f[13] = h.address),
            (f[14] = a))
          : (a = f[14]),
        f[15] !== r || f[16] !== a
          ? ((o = (0, s.jsxs)("span", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [r, a] })),
            (f[15] = r),
            (f[16] = a),
            (f[17] = o))
          : (o = f[17]),
        f[18] !== h.logoUrl
          ? ((c = (0, s.jsx)(t3, { src: h.logoUrl }, h.logoUrl)), (f[18] = h.logoUrl), (f[19] = c))
          : (c = f[19]),
        f[20] !== o || f[21] !== c
          ? ((d = (0, s.jsxs)(s.Fragment, { children: [o, c] })), (f[20] = o), (f[21] = c), (f[22] = d))
          : (d = f[22]),
        d
      )
    }
    function t3(e) {
      let t,
        i,
        l = (0, n.c)(5),
        { src: r } = e,
        [o, u] = (0, a.useState)(!1)
      return (
        l[0] !== o || l[1] !== r
          ? ((t =
              r && !o
                ? (0, s.jsx)("img", {
                    alt: "",
                    className: "size-full rounded-full object-contain",
                    src: r,
                    onError: () => u(!0),
                  })
                : null),
            (l[0] = o),
            (l[1] = r),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== t
          ? ((i = (0, s.jsx)("span", { className: "size-6 shrink-0", children: t })), (l[3] = t), (l[4] = i))
          : (i = l[4]),
        i
      )
    }
    var t4 = i("VUft")
    let t5 = "oai/apps/hasSeenBusinessProfileCreationOnboarding"
    function t6(e) {
      let t,
        i,
        l,
        a = (0, n.c)(18),
        { accountId: o, userId: u } = (0, h.As)(),
        c = (0, r._U)(A.JW, S.lX),
        d = (0, r._U)(A.JW, S.eA)
      a[0] !== o || a[1] !== e.search || a[2] !== e.useCanonicalSearch || a[3] !== u
        ? ((t = e.search ?? (e.useCanonicalSearch && null != o && null != u ? { adapter: tW, accountId: o } : void 0)),
          (a[0] = o),
          (a[1] = e.search),
          (a[2] = e.useCanonicalSearch),
          (a[3] = u),
          (a[4] = t))
        : (t = a[4])
      let f = t,
        p = `${o}:${u}:${e.search?.accountId}`,
        m = null == e.recheckPrivateAccess
      return (
        a[5] !== o || a[6] !== d || a[7] !== e || a[8] !== c || a[9] !== u
          ? ((i = (t, i) =>
              (0, s.jsx)(t7, {
                ...e,
                search: t,
                onSelect: (t, s) => {
                  ;(null != t.businessProfileId && e.onSearchNavigation?.(t.businessProfileId), i(t, s))
                },
                accountId: o,
                userId: u,
                searchEnabled: c,
                creationEnabled: null != o && null != u,
                observeHubFunnel: null != o && null != u,
                canResumeCreation: null == e.recheckPrivateAccess && d,
              })),
            (a[5] = o),
            (a[6] = d),
            (a[7] = e),
            (a[8] = c),
            (a[9] = u),
            (a[10] = i))
          : (i = a[10]),
        a[11] !== o || a[12] !== e.businesses || a[13] !== f || a[14] !== p || a[15] !== m || a[16] !== i
          ? ((l = (0, s.jsx)(
              ev.F,
              { accountId: o, search: f, allowPreparedNavigation: m, businesses: e.businesses, children: i },
              p,
            )),
            (a[11] = o),
            (a[12] = e.businesses),
            (a[13] = f),
            (a[14] = p),
            (a[15] = m),
            (a[16] = i),
            (a[17] = l))
          : (l = a[17]),
        l
      )
    }
    function t7(e) {
      let t,
        i,
        S,
        E,
        D,
        N,
        M,
        P,
        T,
        F,
        L,
        B,
        O,
        z,
        $,
        q,
        U,
        V,
        K,
        H,
        J,
        G = (0, n.c)(66),
        {
          canGoBack: Q,
          onSearchNavigation: Z,
          checkingDraftLimit: X,
          draftLimitReached: Y,
          search: ee,
          onSelect: et,
          useCanonicalSearch: ei,
          accountId: es,
          userId: en,
          searchEnabled: el,
          creationEnabled: er,
          observeHubFunnel: ea,
          canResumeCreation: eu,
          recheckPrivateAccess: ec,
        } = e,
        ef = void 0 !== X && X,
        eh = void 0 !== Y && Y,
        ep = void 0 !== ei && ei,
        em = void 0 !== ea && ea,
        eb = void 0 === eu ? er : eu,
        eg = (0, r.gh)(j.u),
        ev = (0, u.A)(),
        ey = (0, a.useId)()
      G[0] !== er ? ((t = { enabled: er }), (G[0] = er), (G[1] = t)) : (t = G[1])
      let ex = (0, r.Ul)(m.Sk, t)
      G[2] !== er ? ((i = { enabled: er }), (G[2] = er), (G[3] = i)) : (i = G[3])
      let ew = (0, r.Ul)(f.o8, i),
        e_ = null != es && ex === es && null != ew,
        ej = er && e_
      G[4] !== ej ? ((S = { enabled: ej }), (G[4] = ej), (G[5] = S)) : (S = G[5])
      let { data: eA, isError: eC } = (0, r.Ul)(m.s6, S),
        [eS, eI] = (0, a.useState)(!1),
        ek = er && (!e_ || null == eA) && !eC && !eS
      ;(G[6] !== ek
        ? ((E = () => {
            if (!ek) return
            let e = setTimeout(() => eI(!0), 3e3)
            return () => clearTimeout(e)
          }),
          (D = [ek]),
          (G[6] = ek),
          (G[7] = E),
          (G[8] = D))
        : ((E = G[7]), (D = G[8])),
        (0, a.useEffect)(E, D))
      let eE = (0, d.Zp)(),
        eD = (0, d.zy)(),
        eN = (0, h.As)(),
        eM = (0, a.useRef)(eN)
      ;(G[9] !== eN
        ? ((N = () => {
            eM.current = eN
          }),
          (M = [eN]),
          (G[9] = eN),
          (G[10] = N),
          (G[11] = M))
        : ((N = G[10]), (M = G[11])),
        (0, a.useLayoutEffect)(N, M))
      let eP = (0, a.useRef)(null)
      ;(G[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = () => () => eP.current?.abort()), (T = []), (G[12] = P), (G[13] = T))
        : ((P = G[12]), (T = G[13])),
        (0, a.useEffect)(P, T),
        G[14] !== es || G[15] !== eD.state || G[16] !== en
          ? ((F = (0, k.T_)(eD.state, es, en)), (G[14] = es), (G[15] = eD.state), (G[16] = en), (G[17] = F))
          : (F = G[17]))
      let eT = F,
        eF = eD.state
      G[18] !== es || G[19] !== en
        ? ((L = async (e, t, i) => {
            if (null == es || null == en || !0 !== e.published) throw Error("The business profile is not published")
            eP.current?.abort()
            let s = new AbortController()
            eP.current = s
            let n = AbortSignal.any([s.signal, AbortSignal.timeout(3e4)]),
              l = () => {
                ;(n.throwIfAborted(), i())
                let e = eM.current
                if (e.isLoading || "chatgpt" !== e.authMethod || e.accountId !== es || e.userId !== en)
                  throw new DOMException("Creation account changed", "AbortError")
              }
            await (0, t4.Ip)({
              actor: { accountId: es, userId: en, getAbortSignal: () => n, assertCurrentActor: l },
              businessProfileId: e.business_profile_id,
              routing: { ...t, testOverride: !1 },
              idempotencyKey: crypto.randomUUID(),
            })
              .then((i) => {
                ;(l(), window.location.assign(i))
                let s = (0, e0.vC)(es, en),
                  n = s.pending()
                n?.draft.shopifyRouting?.shopGid === t.shopGid &&
                  n.draft.shopifyRouting.shopDomain === t.shopDomain &&
                  (null == n.draft.profileId || n.draft.profileId === e.business_profile_id) &&
                  s.clear()
              })
              .finally(() => {
                eP.current === s && (eP.current = null)
              })
          }),
          (G[18] = es),
          (G[19] = en),
          (G[20] = L))
        : (L = G[20])
      let eL = L
      G[21] !== ev
        ? ((B = ev.formatMessage({ id: "businessProfiles.search.input.label", defaultMessage: "Search business" })),
          (G[21] = ev),
          (G[22] = B))
        : (B = G[22])
      let eR = B,
        [eW, eB] = (0, d.ok)()
      G[23] !== eT || G[24] !== eW
        ? ((O = "1" === eW.get("create") && null != eT), (G[23] = eT), (G[24] = eW), (G[25] = O))
        : (O = G[25])
      let eO = O,
        [ez, e$] = (0, a.useState)(eT?.shop_name ?? ""),
        [eq] = (0, a.useState)(l.pE),
        [eU, eV] = (0, a.useState)(),
        [eK, eH] = (0, a.useState)(null),
        [eJ, eG] = (0, a.useState)(null),
        [eQ, eZ] = (0, a.useState)(!1),
        [eX, eY] = (0, a.useState)(!1),
        [e1, e2] = (0, a.useState)(!1),
        e3 = (0, _.U)("(max-width: 639px)"),
        e4 = (0, a.useRef)(null),
        e5 = (0, a.useRef)(null)
      ;(G[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = () => () => e5.current?.abort()), ($ = []), (G[26] = z), (G[27] = $))
        : ((z = G[26]), ($ = G[27])),
        (0, a.useEffect)(z, $))
      let e6 = (0, r._U)(A.JW, "4046009702")
      G[28] !== eK || G[29] !== eW
        ? ((q = null == eK ? eW.get("creation") : eK.profileId), (G[28] = eK), (G[29] = eW), (G[30] = q))
        : (q = G[30])
      let e7 = q,
        e8 =
          eK?.draftId ??
          (null == eK && null == e7 && "1" === eW.get("creation_session")
            ? (eW.get("creation_draft") ?? void 0)
            : void 0)
      G[31] !== eF || G[32] !== Z || G[33] !== eW || G[34] !== eB || G[35] !== e6
        ? ((U = function () {
            Z?.(null)
            let e = new URLSearchParams(eW)
            ;(e.delete("claim"),
              e.delete("creation"),
              e.delete("created"),
              e.delete("creation_draft"),
              e.set("create", "1"),
              e6 && e.set("creation_session", "1"),
              eB(e, { replace: !0, state: eF }))
          }),
          (G[31] = eF),
          (G[32] = Z),
          (G[33] = eW),
          (G[34] = eB),
          (G[35] = e6),
          (G[36] = U))
        : (U = G[36])
      let e9 = U
      G[37] !== es || G[38] !== eT || G[39] !== e9 || G[40] !== e6 || G[41] !== en
        ? ((V = function (e, t) {
            let i
            ;("admitted" === t &&
              e6 &&
              null == eT &&
              null != es &&
              null != en &&
              (0, e0.vC)(es, en).hasRestorableAttempt() &&
              (i = (0, tP.eN)()),
              eH({ name: e, profileId: null, mode: t, draftId: i }),
              e9())
          }),
          (G[37] = es),
          (G[38] = eT),
          (G[39] = e9),
          (G[40] = e6),
          (G[41] = en),
          (G[42] = V))
        : (V = G[42])
      let te = V
      G[43] !== te || G[44] !== e_ || G[45] !== eA || G[46] !== eC
        ? ((K = function (e) {
            ;(eG(null),
              e2(!1),
              !e_ || null == eA || eC || eA.seenAnnouncements?.[t5] != null ? te(e, "admitted") : eY(!0))
          }),
          (G[43] = te),
          (G[44] = e_),
          (G[45] = eA),
          (G[46] = eC),
          (G[47] = K))
        : (K = G[47])
      let tt = K
      G[48] !== es || G[49] !== eq || G[50] !== e7 || G[51] !== en
        ? ((H = es && en && e7 ? eq.journeyForProfile({ accountId: es, userId: en }, e7) : void 0),
          (G[48] = es),
          (G[49] = eq),
          (G[50] = e7),
          (G[51] = en),
          (G[52] = H))
        : (H = G[52])
      let ti = H,
        ts = es && en && (eK || "1" === eW.get("creation_session")) ? (0, e0.vC)(es, en, void 0, e8) : void 0,
        tn = eK ? (eU ?? ti) : ti
      ;(ts && (null == eK || ts.hasRecoverableSubmission()) && (tn = ts.acquisitionJourneyId()),
        G[53] !== es ||
        G[54] !== te ||
        G[55] !== ef ||
        G[56] !== eQ ||
        G[57] !== er ||
        G[58] !== ey ||
        G[59] !== eh ||
        G[60] !== ez ||
        G[61] !== eJ ||
        G[62] !== eg ||
        G[63] !== en ||
        G[64] !== ek
          ? ((J = er
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)(w.t, {
                      highlighted: !1,
                      "data-business-profile-option": !0,
                      ref: eh || ef || ek ? void 0 : (0, p.t)(eg, "hub_create"),
                      type: "button",
                      className: "disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent",
                      disabled: eh || ef || ek || null != eJ,
                      "aria-busy": ef || ek || null != eJ,
                      "aria-describedby": eh ? ey : void 0,
                      onClick: (e) => {
                        ;(eV((0, l.rv)(e.currentTarget)), eZ(!1))
                        let t = ez.trim()
                        null != es && null != en && (0, e0.vC)(es, en).hasRecoverableSubmission()
                          ? (e2(!1), te(t, "recovery"))
                          : eG(t)
                      },
                      variant: "search",
                      children: [
                        (0, s.jsx)("span", {
                          className: "min-w-0 flex-1 truncate",
                          children: (0, s.jsx)(c.A, {
                            id: "businessProfiles.search.createOption",
                            defaultMessage: "Create \u2018{name}\u2019",
                            values: { name: (0, s.jsx)("bdi", { children: ez.trim() }) },
                          }),
                        }),
                        null != eJ ? (0, s.jsx)(x.y, { as: "span", className: "icon-sm" }) : (0, s.jsx)(g.sqn, {}),
                      ],
                    }),
                    eQ &&
                      (0, s.jsx)("p", {
                        role: "alert",
                        className: "px-2.5 pb-2 text-sm text-danger",
                        children: (0, s.jsx)(c.A, {
                          id: "businessProfiles.entry.checkFailed",
                          defaultMessage: "Couldn\u2019t check access. Try again",
                        }),
                      }),
                    eh &&
                      (0, s.jsx)("p", {
                        id: ey,
                        className: "px-2.5 pb-2 text-[13px] leading-[18px] text-secondary",
                        children: (0, s.jsx)(c.A, {
                          id: "businessProfiles.search.pendingCreationLimitHelp",
                          defaultMessage: "You\u2019ve reached your limit of 3 pending profiles in this workspace.",
                        }),
                      }),
                  ],
                })
              : null),
            (G[53] = es),
            (G[54] = te),
            (G[55] = ef),
            (G[56] = eQ),
            (G[57] = er),
            (G[58] = ey),
            (G[59] = eh),
            (G[60] = ez),
            (G[61] = eJ),
            (G[62] = eg),
            (G[63] = en),
            (G[64] = ek),
            (G[65] = J))
          : (J = G[65]))
      let tl = J
      function tr(e) {
        let t = void 0 !== e && e,
          i = em && !t && !eW.has("claim")
        return (0, s.jsxs)(y.Ql, {
          contentWidth: "profile",
          contentInset: !1,
          contentClassName: "pb-0!",
          balanceScrollbarGutter: !0,
          headerPlacement: "none",
          bannerPlacement: "edge",
          banner: Q
            ? (0, s.jsx)("div", {
                className: "flex p-3",
                children: (0, s.jsx)(b.$, {
                  color: "ghostActive",
                  size: "pageAction",
                  "aria-label": ev.formatMessage({
                    id: "businessProfiles.search.backToBusinesses.accessibleLabel",
                    defaultMessage: "ChatGPT, back to businesses",
                  }),
                  onClick: () => {
                    let e = new URLSearchParams(eW)
                    ;(e.delete("create"),
                      e.delete("claim"),
                      e.delete("creation_session"),
                      e.delete("creation_draft"),
                      eB(e))
                  },
                  children: (0, s.jsx)(I.M, { variant: "createEntry" }),
                }),
              })
            : null,
          title: null,
          children: [
            i && (el || er) && (0, s.jsx)(eo.I, { flow: "hub", screen: "hub_directory_search" }),
            (0, s.jsx)("div", {
              className: "stage-UZymPJ",
              children: (0, s.jsxs)("div", {
                className: "mx-auto flex w-full max-w-lg min-w-0 flex-col gap-6",
                children: [
                  !eW.has("claim") && (0, s.jsx)(tK, {}),
                  (0, s.jsx)("h1", {
                    className:
                      "text-center text-[22px] leading-7 font-normal tracking-[-0.26px] text-balance text-default md:text-heading-app md:leading-8.5 md:tracking-[0.38px]",
                    children: (0, s.jsx)(c.A, {
                      id: "businessProfiles.search.title",
                      defaultMessage: "Reach new customers and grow your business with ChatGPT",
                    }),
                  }),
                  el || er
                    ? (0, s.jsx)("form", {
                        role: "search",
                        onFocusCapture: () => e2(!0),
                        onMouseDown: t8,
                        onBlurCapture: (e) => {
                          e.currentTarget.contains(e.relatedTarget) || e2(!1)
                        },
                        onKeyDown: (e) => {
                          if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            let t = e.target === e4.current
                            t && !e1 && (0, o.flushSync)(() => e2(!0))
                            let i = Array.from(
                                e.currentTarget.querySelectorAll("[data-business-profile-option]:not(:disabled)"),
                              ),
                              s = i.findIndex((t) => t === e.target),
                              n = i[s + ("ArrowDown" === e.key ? 1 : -1)]
                            ;(t && (n = "ArrowDown" === e.key ? i[0] : i.at(-1)),
                              n
                                ? (e.preventDefault(), n.focus())
                                : 0 === s && "ArrowUp" === e.key && (e.preventDefault(), e4.current?.focus()))
                          }
                          "Escape" === e.key && e1 && (eG(null), e.preventDefault(), e4.current?.focus(), e2(!1))
                        },
                        onSubmit: (e) => {
                          ;(e.preventDefault(), ez.trim() && (e4.current?.focus(), e2(!0)))
                        },
                        children: (0, s.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, s.jsx)(v.s, {
                              id: "business-profile-search",
                              inputRef: e4,
                              inputRole: "searchbox",
                              disabled: t,
                              label: eR,
                              placeholder: eR,
                              searchQuery: ez,
                              variant: "discovery",
                              isClearable: !1,
                              className: "shadow-[0_4px_16px_rgba(0,0,0,0.05)]",
                              onSearchQueryChange: (e) => {
                                ;(eZ(!1), eG(null), e$(e), e2(!0))
                              },
                            }),
                            !t && el && ee
                              ? (0, s.jsx)(
                                  t1,
                                  {
                                    query: ez,
                                    configuration: ee,
                                    observeHubFunnel: i && null == eJ && !eX,
                                    onSelect:
                                      null == eJ
                                        ? et
                                        : (e, t) => {
                                            ;(eG(null), et?.(e, t))
                                          },
                                    open: null != eJ || e1,
                                    createAction: tl,
                                  },
                                  ee.accountId,
                                )
                              : null,
                            !t && er && (!el || (!ee && !ep)) && ez.trim() && (null != eJ || e1)
                              ? (0, s.jsx)("div", {
                                  className: tX,
                                  children: (0, s.jsx)(w.W, { className: tY, variant: "search", children: tl }),
                                })
                              : null,
                          ],
                        }),
                      })
                    : (0, s.jsx)("p", {
                        className: "text-center text-sm text-secondary",
                        children: (0, s.jsx)(c.A, {
                          id: "businessProfiles.search.comingSoon",
                          defaultMessage: "Business search and profile creation are coming soon",
                        }),
                      }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "shrink-0 pb-5",
              children: (0, s.jsx)(ed.wK, {
                compact: eX || "ads_manager" === eW.get("source") || (e3 && e1 && "" !== ez.trim()),
              }),
            }),
            !t &&
              null != eJ &&
              null != es &&
              null != en &&
              (0, s.jsx)(W.d, {
                accountId: es,
                userId: en,
                interestType: "creation",
                funnelJourneyId: eU,
                businessName: eJ,
                required: !0,
                onClose: () => eG(null),
                onDone: () => void eE("/"),
                onAdmitted: () => tt(eJ),
                onCheckFailed: () => {
                  ;(eG(null), eZ(!0))
                },
                children: null,
              }),
            !t &&
              eX &&
              null != es &&
              null != en &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(eo.I, { flow: "create", screen: "create_onboarding", journeyId: eU }),
                  (0, s.jsx)(R, {
                    creationEnabled: er,
                    open: eX,
                    onClose: () => eY(!1),
                    onContinue: () => {
                      if (er) {
                        if (e_) {
                          e5.current?.abort()
                          let e = new AbortController()
                          ;((e5.current = e),
                            (0, m.hs)(eg, es, t5, { userId: ew, signal: e.signal }).catch(() => {
                              e.signal.aborted ||
                                C.v.warning("Business profile creation onboarding acknowledgement failed")
                            }))
                        }
                        ;(eY(!1), te(ez.trim(), "admitted"))
                      }
                    },
                    onReturnFocus: () => e4.current?.focus({ preventScroll: !0 }),
                  }),
                ],
              }),
          ],
        })
      }
      return (
        (function () {
          var e
          if (
            er &&
            null != es &&
            null != en &&
            (null != eK ||
              (null != e7 && eb) ||
              (eO && null == e7) ||
              ("1" === eW.get("creation_session") &&
                eb &&
                null != (e = ts) &&
                (e6 ? e.hasRestorableAttempt() : e.hasRecoverableSubmission())))
          ) {
            let e = (0, e0.vC)(es, en, void 0, e8)
            return (0, s.jsx)(
              tN,
              {
                acquisitionJourneyId: tn,
                accountId: es,
                userId: en,
                resumeDraftId: e8,
                name: eK?.name ?? eT?.shop_name ?? "",
                profileId: e7,
                newEntry: (null != eK ? "recovery" !== eK.mode : eO) && null == e7,
                entryAdmitted: eK?.mode === "admitted",
                entryFallback: tr(!0),
                onWaitlistDone: () => void eE("/"),
                recheckPrivateAccess: ec,
                creationPrefill: eT,
                onPublishedCreation: eL,
                onCancel: (t, i) => {
                  eP.current?.abort()
                  let s = null == ec ? e.pending() : null
                  ;((void 0 !== t && t) ||
                    s?.draft.shopifyRouting == null ||
                    (null != s.draft.profileId && s.draft.profileId !== e7) ||
                    e.clear(),
                    (0, o.flushSync)(() => eH(null)))
                  let n = new URLSearchParams(eW)
                  ;(n.delete("creation"),
                    n.delete("created"),
                    n.delete("claim"),
                    "hub" === (void 0 === i ? "search" : i)
                      ? (n.delete("create"), n.delete("select"), n.delete("section"), n.delete("flow_id"))
                      : n.set("create", "1"),
                    n.delete("creation_session"),
                    n.delete("creation_draft"))
                  let l = eD.state
                  ;(eB(n, {
                    replace: !0,
                    state:
                      null != l && "object" == typeof l && !Array.isArray(l) && "shopifyCreationPrefill" in l
                        ? { ...l, shopifyCreationPrefill: void 0 }
                        : l,
                  }),
                    e4.current?.focus({ preventScroll: !0 }))
                },
                onNavigationDiscard: () => eH(null),
                onPersist: (e, t) => {
                  ;(eq.recordProfile({ accountId: es, userId: en }, tn, e, (e) => (0, p.c)(eg, e)),
                    eH((t) => (null == t ? null : { ...t, profileId: e })))
                  let i = new URLSearchParams(eW)
                  ;(i.set("create", "1"),
                    i.set("creation", e),
                    t && i.set("created", "1"),
                    i.delete("creation_session"),
                    i.delete("creation_draft"),
                    eB(i, { replace: !0, state: eF }))
                },
                onRestart: (e, t, i) => {
                  let s = void 0 !== t && t
                  if (
                    (eH({
                      name: e,
                      profileId: null != i && i === e7 && eT?.resumeProfileId === i ? i : null,
                      mode: s ? "fresh" : "admitted",
                    }),
                    !s)
                  ) {
                    let e = new URLSearchParams(eW)
                    ;(e.delete("creation"), e.delete("created"), eB(e, { replace: !0, state: eF }))
                  }
                },
                onComplete: (e, t, i) => {
                  eE((0, tT.X3)(e, t, i), { replace: null != i })
                },
              },
              eT?.shopify_shop_gid ?? "discovery",
            )
          }
          return null
        })() ?? tr()
      )
    }
    function t8(e) {
      e.target instanceof Element && null != e.target.closest("button") && e.preventDefault()
    }
  },
  SFAW(e, t, i) {
    i.d(t, { fp: () => n, jJ: () => s, kK: () => l, fV: () => r })
    let s = i.p + "assets/creation-icons.635b73eb08.webp",
      n = 192 / 184,
      l = [
        "adjustable-wrench",
        "blue-shopping-basket",
        "bookshop-finds",
        "brown-grocery-bag",
        "butter-croissant",
        "claw-hammer",
        "cordless-drill",
        "corner-shop",
        "fitness-dumbbell",
        "fresh-flower-bouquet",
        "gardening-gloves-saffron",
        "ice-cream-cone",
        "margherita-pizza",
        "nail-studio-polish",
        "noodle-bowl",
        "paint-roller",
        "pet-shop-treats",
        "price-tag",
        "salon-hair-dryer",
        "sewing-machine",
        "shopping-cart",
        "thank-you-shopping-bag",
        "to-go-coffee",
        "wooden-pull-along-duck",
        "wooden-stacking-toy",
        "woven-market-basket",
      ],
      r = Math.ceil(l.length / 7)
  },
  NAwl(e, t, i) {
    let s = Math.PI / 180,
      n = 2 * Math.PI,
      l = [3, 3, 1, 2, 1, 2],
      r = [1, -1, -1, 1]
    function a(e, t) {
      return ((e % t) + t) % t
    }
    i.d(
      t,
      {},
      {
        H: -120.3515874585339 * s,
        _g: a,
        cr: function (e, t, i) {
          let o = t + (e * n) / 18,
            u = Math.sin(o),
            c = a(o + Math.PI / 2, n),
            d = l[e % l.length],
            f = r[(Math.floor(e / 6) + e) % r.length],
            h = (1 + ((e + 2) % 3)) * c
          return {
            x: i.width / 2 + 508.7755778831807 * Math.cos(o) * i.pathScale,
            y: (99.22442211681931 + (1 + u) * 508.7755778831807 * 0.7) * i.pathScale,
            rotation: d * f * c + (8 + ((2 * e + 7) % 9)) * s * (Math.sin(h) + 0.5 * (1 - Math.cos(h))),
            visible: u < 0,
            sequence: e - 18 * Math.floor(o / n),
          }
        },
        fK: {
          desktop: { width: 512, height: 220, iconSize: 64, pathScale: 512 / 788.923 },
          mobile: { width: 393, height: 180, iconSize: 52, pathScale: 393 / 714.545 },
        },
        kS: 508.7755778831807,
        so: 15 * s,
      },
    )
  },
  bY2S(e, t, i) {
    var s = i("ABep"),
      n = i("QosV"),
      l = i("Lghe"),
      r = i("T0Rc"),
      a = i("qmMi"),
      o = i("zd8w"),
      u = i("Wf1j"),
      c = i("oyxz"),
      d = i("UOa8"),
      f = i("JIuM"),
      h = i("tvcH"),
      p = i("LhhH"),
      m = i("Sm6l"),
      b = i("JNtf"),
      g = i("RNul"),
      v = i("ibLK"),
      y = i("yGJW"),
      x = i("IPsH"),
      w = i("OWtl"),
      _ = i("ISnp"),
      j = i("l4He"),
      A = i("VMws"),
      C = i("b8rs"),
      S = i("uAf3"),
      I = i("sXew")
    let k = {
      claim: "CODEX_BUSINESS_PROFILE_WAITLIST_INTEREST_TYPE_CLAIM",
      creation: "CODEX_BUSINESS_PROFILE_WAITLIST_INTEREST_TYPE_CREATION",
      creation_local: "CODEX_BUSINESS_PROFILE_WAITLIST_INTEREST_TYPE_CREATION_LOCAL",
    }
    function E(e) {
      return e.preventDefault()
    }
    function D(e) {
      return e.preventDefault()
    }
    function N() {
      return null
    }
    function M(e, t, i) {
      try {
        ;(0, y.yy)(e, l.Op, { interestType: k[t], eventKind: i })
      } catch {}
    }
    i.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            i,
            l,
            y,
            k,
            P,
            T,
            F,
            L,
            R,
            W,
            B,
            O,
            z,
            $,
            q,
            U,
            V,
            K,
            H,
            J,
            G,
            Q,
            Z,
            X,
            Y,
            ee,
            et,
            ei,
            es,
            en,
            el,
            er,
            ea,
            eo,
            eu,
            ec,
            ed,
            ef,
            eh,
            ep,
            em = (0, n.c)(139),
            {
              accountId: eb,
              userId: eg,
              email: ev,
              businessName: ey,
              interestType: ex,
              funnelJourneyId: ew,
              target: e_,
              initialStatus: ej,
              pageManager: eA,
              preview: eC,
              onContinue: eS,
              onBack: eI,
              onDone: ek,
            } = e,
            eE = (0, a.gh)(w.u),
            eD = (0, u.A)(),
            eN = (0, v.U)("(max-width: 767px)")
          em[0] !== eb || em[1] !== eg
            ? ((t = { accountId: eb, userId: eg }), (em[0] = eb), (em[1] = eg), (em[2] = t))
            : (t = em[2])
          let eM = t,
            { data: eP } = (0, a._U)(h.km, eM),
            { profilePictureUrlAtLogin: eT } = (0, d.As)(),
            { isProfileVisible: eF } = (0, _.D)()
          em[3] !== eM || em[4] !== eF
            ? ((i = (0, x.m)({ ...eM, enabled: eF })), (em[3] = eM), (em[4] = eF), (em[5] = i))
            : (i = em[5])
          let { data: eL } = (0, r.I)(i)
          em[6] !== ev || em[7] !== eP?.email
            ? ((l = eP?.email?.trim() || ev), (em[6] = ev), (em[7] = eP?.email), (em[8] = l))
            : (l = em[8])
          let eR = l
          em[9] !== eF || em[10] !== eL || em[11] !== eT || em[12] !== eP
            ? ((y = (eF && eL?.profile_details.profile_picture_url?.trim()) || (null == eP ? eT : eP.picture)),
              (em[9] = eF),
              (em[10] = eL),
              (em[11] = eT),
              (em[12] = eP),
              (em[13] = y))
            : (y = em[13])
          let eW = (0, f.Dv)(y),
            [eB, eO] = (0, o.useState)(ej),
            [ez, e$] = (0, o.useState)(!1),
            [eq, eU] = (0, o.useState)(!1),
            [eV, eK] = (0, o.useState)(null),
            eH = (0, o.useRef)(null),
            eJ = (0, o.useRef)(!1)
          ;(em[14] !== ej || em[15] !== ex || em[16] !== eE
            ? ((k = () => {
                let e = () => {
                  eJ.current ||
                    "visible" !== document.visibilityState ||
                    ((eJ.current = !0),
                    M(
                      eE,
                      ex,
                      "on_waitlist" === ej
                        ? "CODEX_BUSINESS_PROFILE_WAITLIST_EVENT_KIND_ALREADY_ON_WAITLIST_VIEWED"
                        : "CODEX_BUSINESS_PROFILE_WAITLIST_EVENT_KIND_INVITATION_VIEWED",
                    ))
                }
                return (
                  e(),
                  document.addEventListener("visibilitychange", e),
                  () => document.removeEventListener("visibilitychange", e)
                )
              }),
              (P = [eE, ex, ej]),
              (em[14] = ej),
              (em[15] = ex),
              (em[16] = eE),
              (em[17] = k),
              (em[18] = P))
            : ((k = em[17]), (P = em[18])),
            (0, o.useEffect)(k, P),
            em[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = () => () => eH.current?.abort()), (em[19] = T))
              : (T = em[19]),
            em[20] !== eb || em[21] !== ex || em[22] !== eg
              ? ((F = [eb, eg, ex]), (em[20] = eb), (em[21] = ex), (em[22] = eg), (em[23] = F))
              : (F = em[23]),
            (0, o.useEffect)(T, F))
          let eG = "join_waitlist" !== eB
          ;(em[24] !== eq || em[25] !== eB
            ? ((L = eq ? "waitlist_join_error" : "waitlist_invitation"),
              "on_waitlist" === eB
                ? (L = "waitlist_already_joined")
                : "joined_here" === eB && (L = "waitlist_join_confirmation"),
              (em[24] = eq),
              (em[25] = eB),
              (em[26] = L))
            : (L = em[26]),
            em[27] !== ew || em[28] !== ex
              ? ((R = { flow: "waitlist", journeyId: ew, interestType: ex }),
                (em[27] = ew),
                (em[28] = ex),
                (em[29] = R))
              : (R = em[29]))
          let eQ = R,
            eZ = null != ew || "waitlist_join_confirmation" === L || "waitlist_join_error" === L
          ;(em[30] !== eV
            ? ((W = () => {
                eV?.focus({ preventScroll: !0 })
              }),
              (em[30] = eV),
              (em[31] = W))
            : (W = em[31]),
            em[32] !== eG || em[33] !== eV
              ? ((B = [eV, eG]), (em[32] = eG), (em[33] = eV), (em[34] = B))
              : (B = em[34]),
            (0, o.useLayoutEffect)(W, B),
            em[35] !== eM || em[36] !== eQ || em[37] !== eE || em[38] !== L
              ? ((O = function (e) {
                  ;((0, A.m)(eE, eM, { ...eQ, screen: L, action: "closed" }), e())
                }),
                (em[35] = eM),
                (em[36] = eQ),
                (em[37] = eE),
                (em[38] = L),
                (em[39] = O))
              : (O = em[39]))
          let eX = O
          em[40] !== eb ||
          em[41] !== eM ||
          em[42] !== eX ||
          em[43] !== eQ ||
          em[44] !== ex ||
          em[45] !== eG ||
          em[46] !== eS ||
          em[47] !== ek ||
          em[48] !== eE ||
          em[49] !== L ||
          em[50] !== e_ ||
          em[51] !== eg
            ? ((z = async function () {
                if (null != eH.current) return
                if (eG) return void eX(ek)
                let e = new AbortController()
                ;((eH.current = e),
                  e$(!0),
                  eU(!1),
                  M(eE, ex, "CODEX_BUSINESS_PROFILE_WAITLIST_EVENT_KIND_JOIN_CLICKED"))
                let t = await (0, I.It)({ accountId: eb, userId: eg }, ex, e.signal, e_).catch(N)
                e.signal.aborted ||
                  ((eH.current = null),
                  e$(!1),
                  "continue" === t
                    ? eS()
                    : "on_waitlist" === t
                      ? (eO("joined_here"), (0, A.m)(eE, eM, { ...eQ, screen: L, action: "join_succeeded" }))
                      : (eU(!0), (0, A.m)(eE, eM, { ...eQ, screen: L, action: "join_failed" })))
              }),
              (em[40] = eb),
              (em[41] = eM),
              (em[42] = eX),
              (em[43] = eQ),
              (em[44] = ex),
              (em[45] = eG),
              (em[46] = eS),
              (em[47] = ek),
              (em[48] = eE),
              (em[49] = L),
              (em[50] = e_),
              (em[51] = eg),
              (em[52] = z))
            : (z = em[52])
          let eY = z
          em[53] !== ey || em[54] !== ex || em[55] !== eG
            ? (($ = eG
                ? (0, s.jsx)(c.A, {
                    id: "businessProfiles.waitlist.joined.title",
                    defaultMessage: "You\u2019re on the waitlist",
                  })
                : (0, s.jsx)(c.A, {
                    id: "businessProfiles.waitlist.optIn.title",
                    defaultMessage:
                      "{interestType, select, claim {Join the waitlist to claim {name}} other {Join the waitlist to create {name}}}",
                    values: { interestType: ex, name: ey },
                  })),
              (em[53] = ey),
              (em[54] = ex),
              (em[55] = eG),
              (em[56] = $))
            : ($ = em[56])
          let e1 = $
          em[57] !== ey || em[58] !== ex || em[59] !== eG
            ? ((q = eG
                ? (0, s.jsx)(c.A, {
                    id: "businessProfiles.waitlist.joined.description",
                    defaultMessage:
                      "{interestType, select, claim {We\u2019ll email you when you can continue claiming {name} in ChatGPT.} other {We\u2019ll email you when you can continue creating {name} in ChatGPT.}}",
                    values: { interestType: ex, name: ey },
                  })
                : (0, s.jsx)(c.A, {
                    id: "businessProfiles.waitlist.optIn.description",
                    defaultMessage:
                      "We\u2019re gradually opening access to more businesses. Join the waitlist and we\u2019ll email you when you can continue.",
                  })),
              (em[57] = ey),
              (em[58] = ex),
              (em[59] = eG),
              (em[60] = q))
            : (q = em[60])
          let e0 = q,
            e2 = eP?.name || eR || null
          ;(em[61] !== eW || em[62] !== e2
            ? ((U = (0, s.jsx)(p.e, { alt: "", name: e2, src: eW, size: "sm" })),
              (em[61] = eW),
              (em[62] = e2),
              (em[63] = U))
            : (U = em[63]),
            em[64] !== eR
              ? ((V = eR
                  ? (0, s.jsx)("span", { className: "break-all", children: eR })
                  : (0, s.jsx)(c.A, {
                      id: "businessProfiles.waitlist.currentAccount",
                      defaultMessage: "Current account",
                    })),
                (em[64] = eR),
                (em[65] = V))
              : (V = em[65]),
            em[66] !== U || em[67] !== V
              ? ((K = (0, s.jsxs)("div", {
                  className:
                    "flex w-fit max-w-full items-center gap-2 rounded-xl border border-default p-4 text-sm font-semibold",
                  children: [U, V],
                })),
                (em[66] = U),
                (em[67] = V),
                (em[68] = K))
              : (K = em[68]))
          let e3 = K
          em[69] !== eq
            ? ((H =
                eq &&
                (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-danger",
                  children: (0, s.jsx)(c.A, {
                    id: "businessProfiles.waitlist.join.error",
                    defaultMessage: "Couldn\u2019t join the waitlist. Try again",
                  }),
                })),
              (em[69] = eq),
              (em[70] = H))
            : (H = em[70])
          let e4 = H
          em[71] !== ez
            ? ((J =
                ez &&
                (0, s.jsx)("span", {
                  "aria-hidden": !0,
                  className: "absolute inset-0 flex items-center justify-center",
                  children: (0, s.jsx)(g.y, { as: "span", className: "icon-sm" }),
                })),
              (em[71] = ez),
              (em[72] = J))
            : (J = em[72])
          let e5 = ez ? "opacity-0" : void 0
          ;(em[73] !== eG
            ? ((G = eG
                ? (0, s.jsx)(c.A, { ...j.W.backToChat })
                : (0, s.jsx)(c.A, { id: "businessProfiles.waitlist.join", defaultMessage: "Join waitlist" })),
              (em[73] = eG),
              (em[74] = G))
            : (G = em[74]),
            em[75] !== e5 || em[76] !== G
              ? ((Q = (0, s.jsx)("span", { className: e5, children: G })), (em[75] = e5), (em[76] = G), (em[77] = Q))
              : (Q = em[77]),
            em[78] !== ez || em[79] !== J || em[80] !== Q
              ? ((Z = (0, s.jsxs)(m.$, {
                  type: "submit",
                  color: "primary",
                  size: "beaconAction",
                  className: "relative",
                  "aria-disabled": ez,
                  "aria-busy": ez,
                  children: [J, Q],
                })),
                (em[78] = ez),
                (em[79] = J),
                (em[80] = Q),
                (em[81] = Z))
              : (Z = em[81]))
          let e6 = Z
          ;(em[82] !== eX || em[83] !== eG || em[84] !== eI || em[85] !== ek
            ? ((X = () => eX(eG ? ek : eI)), (em[82] = eX), (em[83] = eG), (em[84] = eI), (em[85] = ek), (em[86] = X))
            : (X = em[86]),
            em[87] !== ez
              ? ((Y = {
                  onEscapeKeyDown: (e) => {
                    ez && e.preventDefault()
                  },
                  onOpenAutoFocus: D,
                  onCloseAutoFocus: E,
                }),
                (em[87] = ez),
                (em[88] = Y))
              : (Y = em[88]))
          let e7 = eZ ? L : null
          ;(em[89] !== eQ || em[90] !== e7
            ? ((ee = (0, s.jsx)(A.I, { ...eQ, screen: e7 })), (em[89] = eQ), (em[90] = e7), (em[91] = ee))
            : (ee = em[91]),
            em[92] !== eD || em[93] !== eG || em[94] !== eN
              ? ((et = eD.formatMessage(eN && !eG ? j.W.backToChat : j.W.chatNavigation)),
                (em[92] = eD),
                (em[93] = eG),
                (em[94] = eN),
                (em[95] = et))
              : (et = em[95]))
          let e8 = eN && !eG
          return (
            em[96] !== eX || em[97] !== ek
              ? ((ei = () => eX(ek)), (em[96] = eX), (em[97] = ek), (em[98] = ei))
              : (ei = em[98]),
            em[99] !== eD ? ((es = eD.formatMessage(j.W.preview)), (em[99] = eD), (em[100] = es)) : (es = em[100]),
            em[101] !== eA || em[102] !== eC
              ? ((en = eA ? (0, s.jsx)(C.G, { manager: eA, isDraft: !0, isCreationPreview: !0 }) : eC),
                (em[101] = eA),
                (em[102] = eC),
                (em[103] = en))
              : (en = em[103]),
            em[104] !== en
              ? ((el = (0, s.jsx)("div", {
                  className: "w-full max-w-sm overflow-hidden rounded-3xl bg-surface",
                  children: en,
                })),
                (em[104] = en),
                (em[105] = el))
              : (el = em[105]),
            em[106] !== eY
              ? ((er = (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), eY())
                }),
                (em[106] = eY),
                (em[107] = er))
              : (er = em[107]),
            em[108] !== e1
              ? ((ea = (0, s.jsx)(b.L3, {
                  asChild: !0,
                  "aria-live": "polite",
                  children: (0, s.jsx)("h1", {
                    ref: eK,
                    tabIndex: -1,
                    className: "text-heading-app leading-tight font-normal outline-none",
                    children: e1,
                  }),
                })),
                (em[108] = e1),
                (em[109] = ea))
              : (ea = em[109]),
            em[110] !== e0
              ? ((eo = (0, s.jsx)("p", { className: "text-sm text-secondary", children: e0 })),
                (em[110] = e0),
                (em[111] = eo))
              : (eo = em[111]),
            em[112] !== ea || em[113] !== eo
              ? ((eu = (0, s.jsxs)("div", { className: "flex flex-col gap-1.5", children: [ea, eo] })),
                (em[112] = ea),
                (em[113] = eo),
                (em[114] = eu))
              : (eu = em[114]),
            em[115] !== e6
              ? ((ec = (0, s.jsx)("div", { className: "flex flex-wrap items-center gap-2", children: e6 })),
                (em[115] = e6),
                (em[116] = ec))
              : (ec = em[116]),
            em[117] !== e3 || em[118] !== e4 || em[119] !== er || em[120] !== eu || em[121] !== ec
              ? ((ed = (0, s.jsxs)("form", {
                  className: "flex w-full max-w-125 flex-col gap-6",
                  onSubmit: er,
                  children: [eu, e3, e4, ec],
                })),
                (em[117] = e3),
                (em[118] = e4),
                (em[119] = er),
                (em[120] = eu),
                (em[121] = ec),
                (em[122] = ed))
              : (ed = em[122]),
            em[123] !== ez ||
            em[124] !== et ||
            em[125] !== e8 ||
            em[126] !== ei ||
            em[127] !== es ||
            em[128] !== el ||
            em[129] !== ed
              ? ((ef = (0, s.jsx)(S.Y, {
                  backLabel: et,
                  showBackLabel: e8,
                  onBack: ei,
                  busy: ez,
                  contentFirstOnMobile: !0,
                  previewLabel: es,
                  preview: el,
                  content: ed,
                })),
                (em[123] = ez),
                (em[124] = et),
                (em[125] = e8),
                (em[126] = ei),
                (em[127] = es),
                (em[128] = el),
                (em[129] = ed),
                (em[130] = ef))
              : (ef = em[130]),
            em[131] !== ee || em[132] !== ef
              ? ((eh = (0, s.jsxs)("main", {
                  className: "relative h-full overflow-y-auto bg-surface text-base text-default",
                  children: [ee, ef],
                })),
                (em[131] = ee),
                (em[132] = ef),
                (em[133] = eh))
              : (eh = em[133]),
            em[134] !== ez || em[135] !== X || em[136] !== Y || em[137] !== eh
              ? ((ep = (0, s.jsx)(S.d, {
                  modal: !0,
                  personaActive: !1,
                  closeDisabled: ez,
                  onClose: X,
                  contentProps: Y,
                  children: eh,
                })),
                (em[134] = ez),
                (em[135] = X),
                (em[136] = Y),
                (em[137] = eh),
                (em[138] = ep))
              : (ep = em[138]),
            ep
          )
        },
      },
    )
  },
  snnp(e, t, i) {
    let s = (0, i("ESTr").a)({
      name: "arrow-rotate-clockwise-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        center: { x: 8.000244, y: 7.999512 },
        insets: { top: 1.641113, right: 1.641357, bottom: 1.64209, left: 1.641846 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.999512 }, foreground: { x: 8.000244, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00024 1.64111C10.2192 1.64122 12.1707 2.77917 13.3079 4.50049V3.13916C13.3079 2.84921 13.5433 2.61377 13.8333 2.61377C14.1232 2.61379 14.3586 2.84922 14.3586 3.13916V6.05615C14.3585 6.34594 14.1231 6.58055 13.8333 6.58057H11.2405C10.9507 6.58047 10.7162 6.34589 10.7161 6.05615C10.7161 5.76626 10.9506 5.53086 11.2405 5.53076H12.6975C11.808 3.84247 10.039 2.69201 8.00024 2.69189C5.06864 2.69189 2.69183 5.06795 2.69165 7.99951C2.69165 10.9312 5.06853 13.3081 8.00024 13.3081C10.5257 13.308 12.6406 11.5439 13.177 9.18018C13.2412 8.89744 13.5222 8.71957 13.8049 8.78369C14.0877 8.84785 14.2646 9.12984 14.2004 9.4126C13.5578 12.244 11.0266 14.3578 8.00024 14.3579C4.48863 14.3579 1.64185 11.5111 1.64185 7.99951C1.64202 4.48805 4.48874 1.64111 8.00024 1.64111Z" fill="currentColor"/>',
    })
    i.d(t, {}, { E: s })
  },
  OLDo(e, t, i) {
    let s = (0, i("ESTr").a)({
      name: "bar-chart-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2, y: 2, width: 20, height: 20 },
        visualBounds: { x: 2, y: 2, width: 20, height: 20 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2, y: 2, width: 20, height: 20 },
        center: { x: 12, y: 12 },
        insets: { top: 2, right: 2, bottom: 2, left: 2 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.4961 2C14.8768 2 15.9961 3.11929 15.9961 4.5V6.47461H19.5C20.8807 6.47461 22 7.5939 22 8.97461V18.9746C22 20.6315 20.6569 21.9746 19 21.9746H15.2168C15.1457 21.9906 15.072 22 14.9961 22C14.9202 22 14.8465 21.9906 14.7754 21.9746H9.2168C9.14573 21.9906 9.072 22 8.99609 22C8.92019 22 8.84646 21.9906 8.77539 21.9746H5C3.34315 21.9746 2 20.6315 2 18.9746V13.4746C2 12.0939 3.11929 10.9746 4.5 10.9746H7.99609V4.5C7.99609 3.11929 9.11538 2 10.4961 2H13.4961ZM15.9961 19.9746H19C19.5523 19.9746 20 19.5269 20 18.9746V8.97461C20 8.69847 19.7761 8.47461 19.5 8.47461H15.9961V19.9746ZM10.4961 4C10.22 4 9.99609 4.22386 9.99609 4.5V19.9746H13.9961V4.5C13.9961 4.22386 13.7722 4 13.4961 4H10.4961ZM4.5 12.9746C4.22386 12.9746 4 13.1985 4 13.4746V18.9746C4 19.5269 4.44772 19.9746 5 19.9746H7.99609V12.9746H4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { w: s })
  },
  kmlc(e, t, i) {
    let s = (0, i("ESTr").a)({
      name: "list-star-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
        visualBounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.287598, y: 2.386719, width: 20.712402, height: 19.241211 },
        center: { x: 11.643799, y: 12.007325 },
        insets: { top: 2.386719, right: 2, bottom: 2.37207, left: 1.287598 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.643799, y: 12.007325 },
          foreground: { x: 11.643799, y: 12.007325 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M4.97371 12.9403C5.51883 12.2243 6.61307 12.2244 7.15828 12.9403L7.26667 13.1044L8.09089 14.5672L9.73933 14.9003C10.7908 15.113 11.2065 16.3935 10.4805 17.1835L9.34285 18.4208L9.53621 20.0897C9.65934 21.1557 8.56966 21.9471 7.59382 21.5008L6.0655 20.8016L4.53816 21.5008C3.56223 21.9474 2.47353 21.1559 2.59675 20.0897L2.78914 18.4208L1.65242 17.1835C0.926028 16.3933 1.34154 15.1126 2.39363 14.9003L4.04109 14.5672L4.86628 13.1044L4.97371 12.9403ZM5.64363 15.7987C5.44711 16.1473 5.10811 16.3932 4.71589 16.4725L3.87117 16.6424L4.45417 17.2772C4.72485 17.5718 4.85447 17.9696 4.80867 18.3671L4.70906 19.2225L5.49324 18.8651L5.63191 18.8104C5.91394 18.7167 6.21905 18.7166 6.50105 18.8104L6.63972 18.8651L7.42292 19.2225L7.32429 18.3671C7.27846 17.9694 7.40788 17.5719 7.67878 17.2772L8.26082 16.6424L7.41707 16.4725C7.02473 16.3934 6.68598 16.1473 6.48933 15.7987L6.06648 15.0477L5.64363 15.7987Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M21.0001 16.0145C21.5524 16.0145 22.0001 16.4622 22.0001 17.0145C22.0001 17.5668 21.5524 18.0145 21.0001 18.0145H13.0001C12.4478 18.0145 12.0001 17.5668 12.0001 17.0145C12.0001 16.4622 12.4478 16.0145 13.0001 16.0145H21.0001Z" fill="currentColor"/> <path d="M4.97371 2.9237C5.51883 2.20768 6.61307 2.20778 7.15828 2.9237L7.26667 3.08776L8.09089 4.55065L9.73933 4.88366C10.7908 5.09638 11.2065 6.37687 10.4805 7.16686L9.34285 8.40416L9.53621 10.0731C9.65934 11.1391 8.56966 11.9305 7.59382 11.4842L6.0655 10.785L4.53816 11.4842C3.56223 11.9308 2.47353 11.1393 2.59675 10.0731L2.78914 8.40416L1.65242 7.16686C0.926028 6.37671 1.34154 5.09597 2.39363 4.88366L4.04109 4.55065L4.86628 3.08776L4.97371 2.9237ZM5.64363 5.78209C5.44711 6.13069 5.10811 6.37661 4.71589 6.45592L3.87117 6.62584L4.45417 7.26061C4.72485 7.55524 4.85447 7.95299 4.80867 8.35045L4.70906 9.20592L5.49324 8.8485L5.63191 8.79381C5.91394 8.70014 6.21905 8.7 6.50105 8.79381L6.63972 8.8485L7.42292 9.20592L7.32429 8.35045C7.27846 7.95282 7.40788 7.55529 7.67878 7.26061L8.26082 6.62584L7.41707 6.45592C7.02473 6.37676 6.68598 6.13067 6.48933 5.78209L6.06648 5.03112L5.64363 5.78209Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M21.0001 5.99791C21.5524 5.99791 22.0001 6.44563 22.0001 6.99791C22.0001 7.5502 21.5524 7.99791 21.0001 7.99791H13.0001C12.4478 7.99791 12.0001 7.5502 12.0001 6.99791C12.0001 6.44563 12.4478 5.99791 13.0001 5.99791H21.0001Z" fill="currentColor"/>',
    })
    i.d(t, {}, { T: s })
  },
  zU42(e, t, i) {
    let s = (0, i("ESTr").a)({
      name: "verified-checkmark-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.578613, y: 1.578125, width: 20.843109, height: 20.876343 },
        visualBounds: { x: 1.578613, y: 1.578125, width: 20.843109, height: 20.876343 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.578613, y: 1.578125, width: 20.843109, height: 20.876343 },
        center: { x: 12.000168, y: 12.016297 },
        insets: { top: 1.578125, right: 1.578278, bottom: 1.545532, left: 1.578613 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.000168, y: 12.016297 },
          foreground: { x: 12.000168, y: 12.016297 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.5628 8.46268C14.8702 8.00419 15.4918 7.88116 15.9505 8.18827C16.4092 8.4958 16.5314 9.11724 16.2239 9.57596L12.0686 15.7752C11.6202 16.444 10.6658 16.5201 10.1165 15.9314L7.8743 13.5291C7.49791 13.1254 7.51979 12.4927 7.92313 12.116C8.32691 11.7393 8.96043 11.7612 9.33719 12.1648L10.9329 13.8758L14.5628 8.46268Z" fill="currentColor"/> <path d="M9.87821 2.45682C11.0497 1.28521 12.9499 1.28524 14.1214 2.45682L15.1966 3.53202C15.3841 3.71923 15.6387 3.82401 15.9036 3.82401H17.1751C18.8317 3.82418 20.1748 5.16749 20.1751 6.82401V8.09647C20.1752 8.36148 20.2807 8.61612 20.4681 8.8035L21.5432 9.87772C22.7145 11.0492 22.7146 12.9494 21.5432 14.1209L20.4681 15.1961C20.2805 15.3836 20.1751 15.638 20.1751 15.9031V17.2478C20.1748 18.9043 18.8317 20.2477 17.1751 20.2478H15.889C15.6606 20.2479 15.4405 20.326 15.264 20.4676L15.1907 20.532L14.096 21.6014C12.9306 22.7389 11.0701 22.7387 9.90458 21.6014L8.79422 20.5174C8.61187 20.3394 8.36825 20.2378 8.11356 20.2332L6.77176 20.2098C5.13602 20.1807 3.82461 18.8457 3.8245 17.2098V15.9031C3.8245 15.6382 3.71971 15.3836 3.53251 15.1961L2.45731 14.1209C1.2857 12.9493 1.28573 11.0492 2.45731 9.87772L3.53251 8.8035C3.71987 8.61611 3.82433 8.36145 3.8245 8.09647V6.82401C3.82476 5.16754 5.16802 3.82427 6.8245 3.82401H8.09696C8.36194 3.82385 8.6166 3.71939 8.80399 3.53202L9.87821 2.45682ZM12.7073 3.87088C12.3169 3.48043 11.6837 3.48052 11.2932 3.87088L10.2181 4.94608C9.65559 5.50852 8.89237 5.82385 8.09696 5.82401H6.8245C6.27259 5.82427 5.82476 6.2721 5.8245 6.82401V8.09647C5.82433 8.89188 5.50901 9.6551 4.94657 10.2176L3.87137 11.2928C3.481 11.6832 3.48092 12.3164 3.87137 12.7068L4.94657 13.782C5.50882 14.3446 5.8245 15.1077 5.8245 15.9031V17.2098C5.82461 17.755 6.26189 18.1999 6.80692 18.2098L8.14969 18.2332C8.91403 18.247 9.64469 18.5527 10.1917 19.0867L11.3011 20.1697C11.6896 20.5488 12.3101 20.5489 12.6985 20.1697L13.7932 19.1014L14.013 18.907C14.543 18.4821 15.2041 18.2479 15.889 18.2478H17.1751C17.7271 18.2477 18.1748 17.7998 18.1751 17.2478V15.9031C18.1751 15.1075 18.4914 14.3446 19.054 13.782L20.1282 12.7068C20.5186 12.3164 20.5185 11.6833 20.1282 11.2928L19.054 10.2176C18.4915 9.65508 18.1752 8.89189 18.1751 8.09647V6.82401C18.1748 6.27204 17.7271 5.82418 17.1751 5.82401H15.9036C15.1082 5.82401 14.3451 5.50833 13.7825 4.94608L12.7073 3.87088Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { G: s })
  },
  LwFr(e, t, i) {
    function s(e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === c(e)
    }
    function n(e) {
      return null == e
        ? ""
        : (function (e) {
            if ("string" == typeof e) return e
            if ("bigint" == typeof e) return e.toString()
            let t = e + ""
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
          })(e)
    }
    function l(e) {
      return "string" == typeof e
    }
    function r(e) {
      return "number" == typeof e
    }
    function a(e) {
      return "object" == typeof e
    }
    function o(e) {
      return null != e
    }
    function u(e) {
      return !e.trim().length
    }
    function c(e) {
      return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : Object.prototype.toString.call(e)
    }
    let d = "Invalid doc index: must be a non-negative integer within the bounds of the docs array",
      f = Object.prototype.hasOwnProperty
    var h = class {
      constructor(e) {
        ;((this._keys = []), (this._keyMap = {}))
        let t = 0
        ;(e.forEach((e) => {
          let i = p(e)
          ;(this._keys.push(i), (this._keyMap[i.id] = i), (t += i.weight))
        }),
          this._keys.forEach((e) => {
            e.weight /= t
          }))
      }
      get(e) {
        return this._keyMap[e]
      }
      keys() {
        return this._keys
      }
      toJSON() {
        return JSON.stringify(this._keys)
      }
    }
    function p(e) {
      let t = null,
        i = null,
        n = null,
        r = 1,
        a = null
      if (l(e) || s(e)) ((n = e), (t = m(e)), (i = b(e)))
      else {
        if (!f.call(e, "name")) throw Error("Missing name property in key")
        let s = e.name
        if (((n = s), f.call(e, "weight") && void 0 !== e.weight && (r = e.weight) <= 0)) {
          let e
          throw Error(((e = b(s)), `Property 'weight' in key '${e}' must be a positive integer`))
        }
        ;((t = m(s)), (i = b(s)), (a = e.getFn ?? null))
      }
      return { path: t, id: i, weight: r, src: n, getFn: a }
    }
    function m(e) {
      return s(e) ? e : e.split(".")
    }
    function b(e) {
      return s(e) ? e.join(".") : e
    }
    let g = Object.freeze({
      isCaseSensitive: !1,
      ignoreDiacritics: !1,
      includeScore: !1,
      keys: [],
      shouldSort: !0,
      sortFn: (e, t) => (e.score === t.score ? (e.idx < t.idx ? -1 : 1) : e.score < t.score ? -1 : 1),
      includeMatches: !1,
      findAllMatches: !1,
      minMatchCharLength: 1,
      location: 0,
      threshold: 0.6,
      distance: 100,
      useExtendedSearch: !1,
      useTokenSearch: !1,
      tokenize: void 0,
      tokenMatch: "any",
      getFn: function (e, t) {
        let i = [],
          u = !1,
          d = (e, t, f, h) => {
            if (o(e))
              if (t[f]) {
                var p, m
                let b = e[t[f]]
                if (!o(b)) return
                if (
                  f === t.length - 1 &&
                  (l(b) ||
                    r(b) ||
                    !0 === (p = b) ||
                    !1 === p ||
                    (a((m = p)) && null !== m && "[object Boolean]" == c(p)) ||
                    "bigint" == typeof b)
                )
                  i.push(void 0 !== h ? { v: n(b), i: h } : n(b))
                else if (s(b)) {
                  u = !0
                  for (let e = 0, i = b.length; e < i; e += 1) d(b[e], t, f + 1, e)
                } else t.length && d(b, t, f + 1, h)
              } else i.push(void 0 !== h ? { v: e, i: h } : e)
          }
        return (d(e, l(t) ? t.split(".") : t, 0), u ? i : i[0])
      },
      ignoreLocation: !1,
      ignoreFieldNorm: !1,
      fieldNormWeight: 1,
    })
    var v = class {
      constructor({ getFn: e = g.getFn, fieldNormWeight: t = g.fieldNormWeight } = {}) {
        ;((this.norm = (function (e = 1, t = 3) {
          let i = new Map(),
            s = Math.pow(10, t)
          return {
            get(t) {
              let n = 0,
                l = !1
              for (let e = 0; e < t.length; e++) {
                var r
                ;((r = t.charCodeAt(e)) >= 9 && r <= 13) || 32 === r || 160 === r ? (l = !1) : l || (n++, (l = !0))
              }
              if ((0 === n && (n = 1), i.has(n))) return i.get(n)
              let a = Math.round(s / Math.pow(n, 0.5 * e)) / s
              return (i.set(n, a), a)
            },
            clear() {
              i.clear()
            },
          }
        })(t, 3)),
          (this.getFn = e),
          (this.isCreated = !1),
          (this.docs = []),
          (this.keys = []),
          (this._keysMap = {}),
          this.setIndexRecords())
      }
      setSources(e = []) {
        this.docs = e
      }
      setIndexRecords(e = []) {
        this.records = e
      }
      setKeys(e = []) {
        ;((this.keys = e),
          (this._keysMap = {}),
          e.forEach((e, t) => {
            this._keysMap[e.id] = t
          }))
      }
      create() {
        if (this.isCreated || !this.docs.length) return
        this.isCreated = !0
        let e = this.docs.length
        this.records = Array(e)
        let t = 0
        if (l(this.docs[0]))
          for (let i = 0; i < e; i++) {
            let e = this._createStringRecord(this.docs[i], i)
            e && (this.records[t++] = e)
          }
        else for (let i = 0; i < e; i++) this.records[t++] = this._createObjectRecord(this.docs[i], i)
        ;((this.records.length = t), this.norm.clear())
      }
      add(e, t) {
        if (!Number.isInteger(t) || t < 0) throw Error(d)
        if (l(e)) {
          let i = this._createStringRecord(e, t)
          return (i && this.records.push(i), i)
        }
        let i = this._createObjectRecord(e, t)
        return (this.records.push(i), i)
      }
      removeAt(e) {
        if (!Number.isInteger(e) || e < 0) throw Error(d)
        for (let t = 0, i = this.records.length; t < i; t += 1)
          if (this.records[t].i === e) {
            this.records.splice(t, 1)
            break
          }
        for (let t = 0, i = this.records.length; t < i; t += 1) this.records[t].i > e && (this.records[t].i -= 1)
      }
      removeAll(e) {
        let t = new Set()
        for (let i of e) Number.isInteger(i) && i >= 0 && t.add(i)
        if (0 === t.size) return
        this.records = this.records.filter((e) => !t.has(e.i))
        let i = Array.from(t).sort((e, t) => e - t)
        for (let e of this.records) {
          let t = 0,
            s = i.length
          for (; t < s;) {
            let n = (t + s) >>> 1
            i[n] < e.i ? (t = n + 1) : (s = n)
          }
          e.i -= t
        }
      }
      getValueForItemAtKeyId(e, t) {
        return e[this._keysMap[t]]
      }
      size() {
        return this.records.length
      }
      _createStringRecord(e, t) {
        return !o(e) || u(e) ? null : { v: e, i: t, n: this.norm.get(e) }
      }
      _createObjectRecord(e, t) {
        let i = { i: t, $: {} }
        for (let t = 0, r = this.keys.length; t < r; t++) {
          let r = this.keys[t],
            a = r.getFn ? r.getFn(e) : this.getFn(e, r.path)
          if (o(a)) {
            if (s(a)) {
              let e = []
              for (let t = 0, i = a.length; t < i; t += 1) {
                let i = a[t]
                if (o(i)) {
                  if (l(i)) {
                    if (!u(i)) {
                      let s = { v: i, i: t, n: this.norm.get(i) }
                      e.push(s)
                    }
                  } else if (o(i.v)) {
                    let t = l(i.v) ? i.v : n(i.v)
                    if (!u(t)) {
                      let s = { v: t, i: i.i, n: this.norm.get(t) }
                      e.push(s)
                    }
                  }
                }
              }
              i.$[t] = e
            } else if (l(a) && !u(a)) {
              let e = { v: a, n: this.norm.get(a) }
              i.$[t] = e
            }
          }
        }
        return i
      }
      toJSON() {
        return { keys: this.keys.map(({ getFn: e, ...t }) => t), records: this.records }
      }
    }
    function y(e, t, { getFn: i = g.getFn, fieldNormWeight: s = g.fieldNormWeight } = {}) {
      let n = new v({ getFn: i, fieldNormWeight: s })
      return (n.setKeys(e.map(p)), n.setSources(t), n.create(), n)
    }
    function x(e) {
      if (e.length <= 1) return e
      e.sort((e, t) => e[0] - t[0] || e[1] - t[1])
      let t = [e[0]]
      for (let i = 1, s = e.length; i < s; i += 1) {
        let s = t[t.length - 1],
          n = e[i]
        n[0] <= s[1] + 1 ? (s[1] = Math.max(s[1], n[1])) : t.push(n)
      }
      return t
    }
    let w = {
        ł: "l",
        Ł: "L",
        đ: "d",
        Đ: "D",
        "\xf8": "o",
        "\xd8": "O",
        ħ: "h",
        Ħ: "H",
        ŧ: "t",
        Ŧ: "T",
        ı: "i",
        "\xdf": "ss",
      },
      _ = RegExp("[" + Object.keys(w).join("") + "]", "g"),
      j =
        "function" == typeof String.prototype.normalize
          ? (e) =>
              e
                .normalize("NFD")
                .replace(
                  /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,
                  "",
                )
                .replace(_, (e) => w[e])
          : (e) => e
    var A = class {
      constructor(
        e,
        {
          location: t = g.location,
          threshold: i = g.threshold,
          distance: s = g.distance,
          includeMatches: n = g.includeMatches,
          findAllMatches: l = g.findAllMatches,
          minMatchCharLength: r = g.minMatchCharLength,
          isCaseSensitive: a = g.isCaseSensitive,
          ignoreDiacritics: o = g.ignoreDiacritics,
          ignoreLocation: u = g.ignoreLocation,
        } = {},
      ) {
        if (
          ((this.options = {
            location: t,
            threshold: i,
            distance: s,
            includeMatches: n,
            findAllMatches: l,
            minMatchCharLength: r,
            isCaseSensitive: a,
            ignoreDiacritics: o,
            ignoreLocation: u,
          }),
          (e = a ? e : e.toLowerCase()),
          (e = o ? j(e) : e),
          (this.pattern = e),
          (this.chunks = []),
          !this.pattern.length)
        )
          return
        let c = (e, t) => {
            this.chunks.push({
              pattern: e,
              alphabet: (function (e) {
                let t = {}
                for (let i = 0, s = e.length; i < s; i += 1) {
                  let n = e.charAt(i)
                  t[n] = (t[n] || 0) | (1 << (s - i - 1))
                }
                return t
              })(e),
              startIndex: t,
            })
          },
          d = this.pattern.length
        if (d > 32) {
          let e = 0,
            t = d % 32,
            i = d - t
          for (; e < i;) (c(this.pattern.substr(e, 32), e), (e += 32))
          if (t) {
            let e = d - 32
            c(this.pattern.substr(e), e)
          }
        } else c(this.pattern, 0)
      }
      searchIn(e) {
        let { isCaseSensitive: t, ignoreDiacritics: i, includeMatches: s } = this.options
        if (((e = t ? e : e.toLowerCase()), (e = i ? j(e) : e), this.pattern === e)) {
          if (e.length < this.options.minMatchCharLength) return { isMatch: !1, score: 1 }
          let t = { isMatch: !0, score: 0 }
          return (s && (t.indices = [[0, e.length - 1]]), t)
        }
        let {
            location: n,
            distance: l,
            threshold: r,
            findAllMatches: a,
            minMatchCharLength: o,
            ignoreLocation: u,
          } = this.options,
          c = [],
          d = 0,
          f = !1
        this.chunks.forEach(({ pattern: t, alphabet: i, startIndex: h }) => {
          let {
            isMatch: p,
            score: m,
            indices: b,
          } = (function (
            e,
            t,
            i,
            {
              location: s = g.location,
              distance: n = g.distance,
              threshold: l = g.threshold,
              findAllMatches: r = g.findAllMatches,
              minMatchCharLength: a = g.minMatchCharLength,
              includeMatches: o = g.includeMatches,
              ignoreLocation: u = g.ignoreLocation,
            } = {},
          ) {
            let c
            if (t.length > 32) throw Error("Pattern length exceeds max of 32.")
            let d = t.length,
              f = e.length,
              h = Math.max(0, Math.min(s, f)),
              p = l,
              m = h,
              b = (e, t) => {
                let i = e / d
                if (u) return i
                let s = Math.abs(h - t)
                return n ? i + s / n : s ? 1 : i
              },
              v = a > 1 || o,
              y = v ? Array(f) : []
            for (; (c = e.indexOf(t, m)) > -1;)
              if (((p = Math.min(b(0, c), p)), (m = c + d), v)) {
                let e = 0
                for (; e < d;) ((y[c + e] = 1), (e += 1))
              }
            m = -1
            let x = [],
              w = 1,
              _ = 0,
              j = d + f,
              A = 1 << (d - 1)
            for (let t = 0; t < d; t += 1) {
              let s = 0,
                n = j
              for (; s < n;) (b(t, h + n) <= p ? (s = n) : (j = n), (n = Math.floor((j - s) / 2 + s)))
              j = n
              let l = Math.max(1, h - n + 1),
                a = r ? f : Math.min(h + n, f) + d,
                o = Array(a + 2)
              o[a + 1] = (1 << t) - 1
              for (let s = a; s >= l; s -= 1) {
                let n = s - 1,
                  r = i[e[n]]
                if (
                  ((o[s] = ((o[s + 1] << 1) | 1) & r),
                  t && (o[s] |= ((x[s + 1] | x[s]) << 1) | 1 | x[s + 1]),
                  o[s] & A && (w = b(t, n)) <= p)
                ) {
                  if (((p = w), (m = n), (_ = t), m <= h)) break
                  l = Math.max(1, 2 * h - m)
                }
              }
              if (b(t + 1, h) > p) break
              x = o
            }
            if (v && m >= 0) {
              let t = Math.min(f - 1, m + d - 1 + _)
              for (let s = m; s <= t; s += 1) i[e[s]] && (y[s] = 1)
            }
            let C = { isMatch: m >= 0, score: Math.max(0.001, w) }
            if (v) {
              let e = (function (e = [], t = g.minMatchCharLength) {
                let i = [],
                  s = -1,
                  n = -1,
                  l = 0
                for (let r = e.length; l < r; l += 1) {
                  let r = e[l]
                  r && -1 === s ? (s = l) : r || -1 === s || ((n = l - 1) - s + 1 >= t && i.push([s, n]), (s = -1))
                }
                return (e[l - 1] && l - s >= t && i.push([s, l - 1]), i)
              })(y, a)
              e.length ? o && (C.indices = e) : (C.isMatch = !1)
            }
            return C
          })(e, t, i, {
            location: n + h,
            distance: l,
            threshold: r,
            findAllMatches: a,
            minMatchCharLength: o,
            includeMatches: s,
            ignoreLocation: u,
          })
          ;(p && (f = !0), (d += m), p && b && c.push(...b))
        })
        let h = { isMatch: f, score: f ? d / this.chunks.length : 1 }
        return (f && s && (h.indices = x(c)), h)
      }
    }
    let C = new Set(["fuzzy", "include"]),
      S = [
        {
          type: "exact",
          multiRegex: /^="(.*)"$/,
          singleRegex: /^=(.*)$/,
          create: (e) => ({
            type: "exact",
            search(t) {
              let i = t === e
              return { isMatch: i, score: +!i, indices: [0, e.length - 1] }
            },
          }),
        },
        {
          type: "include",
          multiRegex: /^'"(.*)"$/,
          singleRegex: /^'(.*)$/,
          create: (e) => ({
            type: "include",
            search(t) {
              let i,
                s = 0,
                n = [],
                l = e.length
              for (; (i = t.indexOf(e, s)) > -1;) ((s = i + l), n.push([i, s - 1]))
              let r = !!n.length
              return { isMatch: r, score: +!r, indices: n }
            },
          }),
        },
        {
          type: "prefix-exact",
          multiRegex: /^\^"(.*)"$/,
          singleRegex: /^\^(.*)$/,
          create: (e) => ({
            type: "prefix-exact",
            search(t) {
              let i = t.startsWith(e)
              return { isMatch: i, score: +!i, indices: [0, e.length - 1] }
            },
          }),
        },
        {
          type: "inverse-prefix-exact",
          multiRegex: /^!\^"(.*)"$/,
          singleRegex: /^!\^(.*)$/,
          create: (e) => ({
            type: "inverse-prefix-exact",
            search(t) {
              let i = !t.startsWith(e)
              return { isMatch: i, score: +!i, indices: [0, t.length - 1] }
            },
          }),
        },
        {
          type: "inverse-suffix-exact",
          multiRegex: /^!"(.*)"\$$/,
          singleRegex: /^!(.*)\$$/,
          create: (e) => ({
            type: "inverse-suffix-exact",
            search(t) {
              let i = !t.endsWith(e)
              return { isMatch: i, score: +!i, indices: [0, t.length - 1] }
            },
          }),
        },
        {
          type: "suffix-exact",
          multiRegex: /^"(.*)"\$$/,
          singleRegex: /^(.*)\$$/,
          create: (e) => ({
            type: "suffix-exact",
            search(t) {
              let i = t.endsWith(e)
              return { isMatch: i, score: +!i, indices: [t.length - e.length, t.length - 1] }
            },
          }),
        },
        {
          type: "inverse-exact",
          multiRegex: /^!"(.*)"$/,
          singleRegex: /^!(.*)$/,
          create: (e) => ({
            type: "inverse-exact",
            search(t) {
              let i = -1 === t.indexOf(e)
              return { isMatch: i, score: +!i, indices: [0, t.length - 1] }
            },
          }),
        },
        {
          type: "fuzzy",
          multiRegex: /^"(.*)"$/,
          singleRegex: /^(.*)$/,
          create: (e, t = {}) => {
            let i = new A(e, {
              location: t.location ?? g.location,
              threshold: t.threshold ?? g.threshold,
              distance: t.distance ?? g.distance,
              includeMatches: t.includeMatches ?? g.includeMatches,
              findAllMatches: t.findAllMatches ?? g.findAllMatches,
              minMatchCharLength: t.minMatchCharLength ?? g.minMatchCharLength,
              isCaseSensitive: t.isCaseSensitive ?? g.isCaseSensitive,
              ignoreDiacritics: t.ignoreDiacritics ?? g.ignoreDiacritics,
              ignoreLocation: t.ignoreLocation ?? g.ignoreLocation,
            })
            return { type: "fuzzy", search: (e) => i.searchIn(e) }
          },
        },
      ],
      I = S.length
    function k(e, t) {
      let i = e.match(t)
      return i ? i[1] : null
    }
    var E = class {
      constructor(
        e,
        {
          isCaseSensitive: t = g.isCaseSensitive,
          ignoreDiacritics: i = g.ignoreDiacritics,
          includeMatches: s = g.includeMatches,
          minMatchCharLength: n = g.minMatchCharLength,
          ignoreLocation: l = g.ignoreLocation,
          findAllMatches: r = g.findAllMatches,
          location: a = g.location,
          threshold: o = g.threshold,
          distance: u = g.distance,
        } = {},
      ) {
        ;((this.query = null),
          (this.options = {
            isCaseSensitive: t,
            ignoreDiacritics: i,
            includeMatches: s,
            minMatchCharLength: n,
            findAllMatches: r,
            ignoreLocation: l,
            location: a,
            threshold: o,
            distance: u,
          }),
          (e = t ? e : e.toLowerCase()),
          (e = i ? j(e) : e),
          (this.pattern = e),
          (this.query = (function (e, t = {}) {
            return e
              .replace(/\\\|/g, "\0")
              .split("|")
              .map((e) => {
                let i = (function (e) {
                    let t = [],
                      i = e.length,
                      s = 0
                    for (; s < i;) {
                      for (; s < i && " " === e[s];) s++
                      if (s >= i) break
                      let n = s
                      for (; n < i && " " !== e[n] && '"' !== e[n];) n++
                      if (n < i && '"' === e[n]) {
                        for (n++; n < i;) {
                          if ('"' === e[n]) {
                            let t = n + 1
                            if (t >= i || " " === e[t]) {
                              n++
                              break
                            }
                            if ("$" === e[t] && (t + 1 >= i || " " === e[t + 1])) {
                              n += 2
                              break
                            }
                          }
                          n++
                        }
                        ;(t.push(e.substring(s, n)), (s = n))
                      } else {
                        for (; n < i && " " !== e[n];) n++
                        ;(t.push(e.substring(s, n)), (s = n))
                      }
                    }
                    return t
                  })(e.replace(/\u0000/g, "|").trim()).filter((e) => e && !!e.trim()),
                  s = []
                for (let e = 0, n = i.length; e < n; e += 1) {
                  let n = i[e],
                    l = !1,
                    r = -1
                  for (; !l && ++r < I;) {
                    let e = S[r],
                      i = k(n, e.multiRegex)
                    i && (s.push(e.create(i, t)), (l = !0))
                  }
                  if (!l)
                    for (r = -1; ++r < I;) {
                      let e = S[r],
                        i = k(n, e.singleRegex)
                      if (i) {
                        s.push(e.create(i, t))
                        break
                      }
                    }
                }
                return s
              })
          })(this.pattern, this.options)))
      }
      static condition(e, t) {
        return t.useExtendedSearch
      }
      searchIn(e) {
        let t = this.query
        if (!t) return { isMatch: !1, score: 1 }
        let { includeMatches: i, isCaseSensitive: s, ignoreDiacritics: n } = this.options
        ;((e = s ? e : e.toLowerCase()), (e = n ? j(e) : e))
        let l = 0,
          r = [],
          a = 0,
          o = !1
        for (let s = 0, n = t.length; s < n; s += 1) {
          let n = t[s]
          ;((r.length = 0), (l = 0), (o = !1))
          for (let t = 0, s = n.length; t < s; t += 1) {
            let s = n[t],
              { isMatch: u, indices: c, score: d } = s.search(e)
            if (u)
              ((l += 1),
                (a += d),
                s.type.startsWith("inverse") && (o = !0),
                i && (C.has(s.type) ? r.push(...c) : r.push(c)))
            else {
              ;((a = 0), (l = 0), (r.length = 0), (o = !1))
              break
            }
          }
          if (l) {
            let e = { isMatch: !0, score: a / l }
            return (o && (e.hasInverse = !0), i && (e.indices = x(r)), e)
          }
        }
        return { isMatch: !1, score: 1 }
      }
    }
    let D = []
    function N(...e) {
      D.push(...e)
    }
    function M(e, t) {
      for (let i = 0, s = D.length; i < s; i += 1) {
        let s = D[i]
        if (s.condition(e, t)) return new s(e, t)
      }
      return new A(e, t)
    }
    let P = "$and",
      T = "$path",
      F = (e) => !!(e[P] || e.$or),
      L = (e) => ({ [P]: Object.keys(e).map((t) => ({ [t]: e[t] })) })
    function R(e, t, { auto: i = !0 } = {}) {
      let n = (e) => {
        if (l(e)) {
          let s = { keyId: null, pattern: e }
          return (i && (s.searcher = M(e, t)), s)
        }
        let r = Object.keys(e),
          o = !!e[T]
        if (!o && r.length > 1 && !F(e)) return n(L(e))
        if (!s(e) && a(e) && !F(e)) {
          let s = o ? e[T] : r[0],
            n = o ? e.$val : e[s]
          if (!l(n)) throw Error(`Invalid value for key ${s}`)
          let a = { keyId: b(s), pattern: n }
          return (i && (a.searcher = M(n, t)), a)
        }
        let u = { children: [], operator: r[0] }
        return (
          r.forEach((t) => {
            let i = e[t]
            s(i) &&
              i.forEach((e) => {
                u.children.push(n(e))
              })
          }),
          u
        )
      }
      return (F(e) || (e = L(e)), n(e))
    }
    function W(e, { ignoreFieldNorm: t = g.ignoreFieldNorm }) {
      let i = 1
      return (
        e.forEach(({ key: e, norm: s, score: n }) => {
          let l = e ? e.weight : null
          i *= Math.pow(0 === n && l ? Number.EPSILON : n, (l || 1) * (t ? 1 : s))
        }),
        i
      )
    }
    var B = class {
      constructor(e, t) {
        ;((this.limit = e), (this.heap = []), (this.comparator = t))
      }
      get size() {
        return this.heap.length
      }
      insert(e) {
        this.size < this.limit
          ? (this.heap.push(e), this._bubbleUp(this.size - 1))
          : 0 > this.comparator(e, this.heap[0]) && ((this.heap[0] = e), this._sinkDown(0))
      }
      extractSorted() {
        return this.heap.sort(this.comparator)
      }
      _bubbleUp(e) {
        let t = this.heap
        for (; e > 0;) {
          let i = (e - 1) >> 1
          if (0 >= this.comparator(t[e], t[i])) break
          let s = t[e]
          ;((t[e] = t[i]), (t[i] = s), (e = i))
        }
      }
      _sinkDown(e) {
        let t = this.heap,
          i = t.length,
          s = e
        do {
          let n = 2 * (e = s) + 1,
            l = 2 * e + 2
          if (
            (n < i && this.comparator(t[n], t[s]) > 0 && (s = n),
            l < i && this.comparator(t[l], t[s]) > 0 && (s = l),
            s !== e)
          ) {
            let i = t[e]
            ;((t[e] = t[s]), (t[s] = i))
          }
        } while (s !== e)
      }
    }
    let O = /[\p{L}\p{M}\p{N}_]+/gu,
      z = new WeakSet()
    function $({ isCaseSensitive: e = !1, ignoreDiacritics: t = !1, tokenize: i } = {}) {
      let s = (function (e) {
        if ("function" == typeof e) {
          let t = !1
          return (i) => {
            let s = e(i)
            if (!t && ((t = !0), !Array.isArray(s) || s.some((e) => "string" != typeof e)))
              throw Error(
                `[Fuse] tokenize function must return string[]; received ${Array.isArray(s) ? "array containing non-strings" : typeof s}.`,
              )
            return s
          }
        }
        if (e instanceof RegExp)
          return (
            !e.global &&
              (z.has(e) ||
                (z.add(e),
                console.warn(
                  `[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`,
                ))),
            (t) => t.match(e) || []
          )
        return (e) => e.match(O) || []
      })(i)
      return { tokenize: (i) => (e || (i = i.toLowerCase()), t && (i = j(i)), s(i)) }
    }
    var q = class {
      static condition(e, t) {
        return t.useTokenSearch
      }
      constructor(e, t) {
        ;((this.options = t),
          (this.analyzer = $({
            isCaseSensitive: t.isCaseSensitive,
            ignoreDiacritics: t.ignoreDiacritics,
            tokenize: t.tokenize,
          })))
        let i = this.analyzer.tokenize(e),
          { df: s, fieldCount: n } = t._invertedIndex
        for (let e of ((this.termSearchers = []), (this.idfWeights = []), i)) {
          this.termSearchers.push(
            new A(e, {
              location: t.location,
              threshold: t.threshold,
              distance: t.distance,
              includeMatches: t.includeMatches,
              findAllMatches: t.findAllMatches,
              minMatchCharLength: t.minMatchCharLength,
              isCaseSensitive: t.isCaseSensitive,
              ignoreDiacritics: t.ignoreDiacritics,
              ignoreLocation: !0,
            }),
          )
          let i = s.get(e) || 0,
            l = Math.log(1 + (n - i + 0.5) / (i + 0.5))
          this.idfWeights.push(l)
        }
        ;((this.combineAll = "all" === t.tokenMatch),
          (this.numTerms = this.termSearchers.length),
          (this.useMask = this.numTerms <= 31))
      }
      searchIn(e) {
        if (!this.termSearchers.length) return { isMatch: !1, score: 1 }
        let t = [],
          i = 0,
          s = 0,
          n = 0,
          l = 0,
          r = this.combineAll && !this.useMask ? new Set() : null
        for (let a = 0; a < this.termSearchers.length; a++) {
          let o = this.termSearchers[a].searchIn(e),
            u = this.idfWeights[a]
          ;((s += u),
            o.isMatch &&
              (n++,
              (i += u * (1 - o.score)),
              o.indices && t.push(...o.indices),
              this.combineAll && (this.useMask ? (l |= 1 << a) : r.add(a))))
        }
        if (0 === n) return { isMatch: !1, score: 1 }
        let a = { isMatch: !0, score: Math.max(0.001, s > 0 ? 1 - i / s : 0) }
        return (
          this.options.includeMatches && t.length && (a.indices = x(t)),
          this.combineAll && (this.useMask ? (a.matchedMask = l) : (a.matchedTerms = r), (a.termCount = this.numTerms)),
          a
        )
      }
    }
    function U(e, t, i, s) {
      let n = s.tokenize(t)
      if (!n.length) return
      ;(e.fieldCount++, e.docFieldCount.set(i, (e.docFieldCount.get(i) || 0) + 1))
      let l = new Set(n),
        r = e.docTermFieldHits.get(i)
      for (let t of (r || ((r = new Map()), e.docTermFieldHits.set(i, r)), l))
        (r.set(t, (r.get(t) || 0) + 1), e.df.set(t, (e.df.get(t) || 0) + 1))
    }
    function V(e, t, i, s) {
      let { i: n, v: l, $: r } = t
      if (void 0 !== l) return void U(e, l, n, s)
      if (r)
        for (let t = 0; t < i; t++) {
          let i = r[t]
          if (i)
            if (Array.isArray(i)) for (let t of i) U(e, t.v, n, s)
            else U(e, i.v, n, s)
        }
    }
    function K(e, t) {
      if (0 === t.length) return
      let i = Array.from(new Set(t)).sort((e, t) => e - t)
      for (let t of i)
        !(function (e, t) {
          let i = e.docFieldCount.get(t)
          if (void 0 === i) return
          ;((e.fieldCount -= i), e.docFieldCount.delete(t))
          let s = e.docTermFieldHits.get(t)
          if (s) {
            for (let [t, i] of s) {
              let s = (e.df.get(t) || 0) - i
              s <= 0 ? e.df.delete(t) : e.df.set(t, s)
            }
            e.docTermFieldHits.delete(t)
          }
        })(e, t)
      let s = (e) => {
          let t = 0,
            s = i.length
          for (; t < s;) {
            let n = (t + s) >>> 1
            i[n] < e ? (t = n + 1) : (s = n)
          }
          return e - t
        },
        n = i[0],
        l = new Map()
      for (let [t, i] of e.docFieldCount) l.set(t > n ? s(t) : t, i)
      e.docFieldCount = l
      let r = new Map()
      for (let [t, i] of e.docTermFieldHits) r.set(t > n ? s(t) : t, i)
      e.docTermFieldHits = r
    }
    var H = class {
      constructor(e, t, i) {
        ;((this.options = { ...g, ...t }),
          this.options.useExtendedSearch,
          this.options.useTokenSearch,
          (this._keyStore = new h(this.options.keys)),
          (this._docs = e),
          (this._myIndex = null),
          (this._invertedIndex = null),
          this.setCollection(e, i),
          (this._lastQuery = null),
          (this._lastSearcher = null))
      }
      _getSearcher(e) {
        if (this._lastQuery === e) return this._lastSearcher
        let t = M(e, this._invertedIndex ? { ...this.options, _invertedIndex: this._invertedIndex } : this.options)
        return ((this._lastQuery = e), (this._lastSearcher = t), t)
      }
      setCollection(e, t) {
        if (((this._docs = e), t && !(t instanceof v))) throw Error("Incorrect 'index' type")
        if (
          ((this._myIndex =
            t ||
            y(this.options.keys, this._docs, {
              getFn: this.options.getFn,
              fieldNormWeight: this.options.fieldNormWeight,
            })),
          this.options.useTokenSearch)
        ) {
          let e = $({
            isCaseSensitive: this.options.isCaseSensitive,
            ignoreDiacritics: this.options.ignoreDiacritics,
            tokenize: this.options.tokenize,
          })
          this._invertedIndex = (function (e, t, i) {
            let s = { fieldCount: 0, df: new Map(), docFieldCount: new Map(), docTermFieldHits: new Map() }
            for (let n of e) V(s, n, t, i)
            return s
          })(this._myIndex.records, this._myIndex.keys.length, e)
        }
        this._invalidateSearcherCache()
      }
      add(e) {
        if (!o(e)) return
        this._docs.push(e)
        let t = this._myIndex.add(e, this._docs.length - 1)
        if (this._invertedIndex && t) {
          var i
          let e = $({
            isCaseSensitive: this.options.isCaseSensitive,
            ignoreDiacritics: this.options.ignoreDiacritics,
            tokenize: this.options.tokenize,
          })
          ;((i = this._invertedIndex), V(i, t, this._myIndex.keys.length, e))
        }
        this._invalidateSearcherCache()
      }
      remove(e = () => !1) {
        let t = [],
          i = []
        for (let s = 0, n = this._docs.length; s < n; s += 1) e(this._docs[s], s) && (t.push(this._docs[s]), i.push(s))
        if (i.length) {
          this._invertedIndex && K(this._invertedIndex, i)
          let e = new Set(i)
          ;((this._docs = this._docs.filter((t, i) => !e.has(i))),
            this._myIndex.removeAll(i),
            this._invalidateSearcherCache())
        }
        return t
      }
      removeAt(e) {
        if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(d)
        this._invertedIndex && K(this._invertedIndex, [e])
        let t = this._docs.splice(e, 1)[0]
        return (this._myIndex.removeAt(e), this._invalidateSearcherCache(), t)
      }
      _invalidateSearcherCache() {
        ;((this._lastQuery = null), (this._lastSearcher = null))
      }
      getIndex() {
        return this._myIndex
      }
      _normalizedKeys() {
        return this._myIndex.keys.map((e) => this._keyStore.get(e.id) || e)
      }
      search(e, t) {
        let i,
          { limit: s = -1 } = t || {},
          { includeMatches: n, includeScore: a, shouldSort: u, sortFn: c, ignoreFieldNorm: d } = this.options
        if (l(e) && !e.trim()) {
          let e = this._docs.map((e, t) => ({ item: e, refIndex: t }))
          return (r(s) && s > -1 && (e = e.slice(0, s)), e)
        }
        let f = u && r(s) && s > 0 && l(e),
          h = (e, t) => c(e, t) || e.idx - t.idx
        if (f) {
          let t = new B(s, h)
          ;(l(this._docs[0])
            ? this._searchStringList(e, { heap: t, ignoreFieldNorm: d })
            : this._searchObjectList(e, { heap: t, ignoreFieldNorm: d }),
            (i = t.extractSorted()))
        } else
          (!(function (e, { ignoreFieldNorm: t = g.ignoreFieldNorm }) {
            e.forEach((e) => {
              e.score = W(e.matches, { ignoreFieldNorm: t })
            })
          })(
            (i = l(e)
              ? l(this._docs[0])
                ? this._searchStringList(e)
                : this._searchObjectList(e)
              : this._searchLogical(e)),
            { ignoreFieldNorm: d },
          ),
            u && i.sort(l(e) ? h : c),
            r(s) && s > -1 && (i = i.slice(0, s)))
        return (function (e, t, { includeMatches: i = g.includeMatches, includeScore: s = g.includeScore } = {}) {
          return e.map((e) => {
            let n,
              { idx: l } = e,
              r = { item: t[l], refIndex: l }
            return (
              i &&
                ((n = []),
                e.matches.forEach((e) => {
                  if (!o(e.indices) || !e.indices.length) return
                  let t = { indices: e.indices, value: e.value }
                  ;(e.key && (t.key = e.key.id), e.idx > -1 && (t.refIndex = e.idx), n.push(t))
                }),
                (r.matches = n)),
              s && (r.score = e.score),
              r
            )
          })
        })(i, this._docs, { includeMatches: n, includeScore: a })
      }
      _searchStringList(e, { heap: t, ignoreFieldNorm: i } = {}) {
        let s = this._getSearcher(e),
          n = this.options.useTokenSearch && "all" === this.options.tokenMatch,
          { records: l } = this._myIndex,
          r = t ? null : []
        return (
          l.forEach(({ v: e, i: l, n: a }) => {
            if (!o(e)) return
            let u = s.searchIn(e)
            if (u.isMatch) {
              let s = { score: u.score, value: e, norm: a, indices: u.indices }
              n && ((s.matchedMask = u.matchedMask), (s.matchedTerms = u.matchedTerms), (s.termCount = u.termCount))
              let o = [s]
              if (!n || this._coversAllTokens(o)) {
                let s = { item: e, idx: l, matches: o }
                t ? ((s.score = W(s.matches, { ignoreFieldNorm: i })), t.insert(s)) : r.push(s)
              }
            }
          }),
          r
        )
      }
      _searchLogical(e) {
        let t = R(e, this.options),
          i = this._normalizedKeys(),
          s = (e, t, n) => {
            if (!("children" in e)) {
              let s,
                { keyId: l, searcher: r } = e
              return (null === l
                ? ((s = []),
                  i.forEach((e, i) => {
                    s.push(...this._findMatches({ key: e, value: t[i], searcher: r }))
                  }))
                : (s = this._findMatches({
                    key: this._keyStore.get(l),
                    value: this._myIndex.getValueForItemAtKeyId(t, l),
                    searcher: r,
                  })),
              s && s.length)
                ? [{ idx: n, item: t, matches: s }]
                : []
            }
            let { children: l, operator: r } = e,
              a = []
            for (let e = 0, i = l.length; e < i; e += 1) {
              let i = s(l[e], t, n)
              if (i.length) a.push(...i)
              else if (r === P) return []
            }
            return a
          },
          n = this._myIndex.records,
          l = new Map(),
          r = []
        return (
          n.forEach(({ $: e, i: i }) => {
            if (o(e)) {
              let n = s(t, e, i)
              n.length &&
                (l.has(i) || (l.set(i, { idx: i, item: e, matches: [] }), r.push(l.get(i))),
                n.forEach(({ matches: e }) => {
                  l.get(i).matches.push(...e)
                }))
            }
          }),
          r
        )
      }
      _searchObjectList(e, { heap: t, ignoreFieldNorm: i } = {}) {
        let s = this._getSearcher(e),
          n = this.options.useTokenSearch && "all" === this.options.tokenMatch,
          { records: l } = this._myIndex,
          r = this._normalizedKeys(),
          a = t ? null : []
        return (
          l.forEach(({ $: e, i: l }) => {
            if (!o(e)) return
            let u = [],
              c = !1,
              d = !1
            if (
              (r.forEach((t, i) => {
                let n = this._findMatches({ key: t, value: e[i], searcher: s })
                n.length ? (u.push(...n), n[0].hasInverse && (d = !0)) : (c = !0)
              }),
              (!d || !c) && u.length && (!n || this._coversAllTokens(u)))
            ) {
              let s = { idx: l, item: e, matches: u }
              t ? ((s.score = W(s.matches, { ignoreFieldNorm: i })), t.insert(s)) : a.push(s)
            }
          }),
          a
        )
      }
      _findMatches({ key: e, value: t, searcher: i }) {
        if (!o(t)) return []
        let n = []
        if (s(t))
          t.forEach(({ v: t, i: s, n: l }) => {
            if (!o(t)) return
            let r = i.searchIn(t)
            if (r.isMatch) {
              let i = {
                score: r.score,
                key: e,
                value: t,
                idx: s,
                norm: l,
                indices: r.indices,
                hasInverse: r.hasInverse,
              }
              ;(void 0 !== r.termCount &&
                ((i.matchedMask = r.matchedMask), (i.matchedTerms = r.matchedTerms), (i.termCount = r.termCount)),
                n.push(i))
            }
          })
        else {
          let { v: s, n: l } = t,
            r = i.searchIn(s)
          if (r.isMatch) {
            let t = { score: r.score, key: e, value: s, norm: l, indices: r.indices, hasInverse: r.hasInverse }
            ;(void 0 !== r.termCount &&
              ((t.matchedMask = r.matchedMask), (t.matchedTerms = r.matchedTerms), (t.termCount = r.termCount)),
              n.push(t))
          }
        }
        return n
      }
      _coversAllTokens(e) {
        let t = e.length ? e[0].termCount : void 0
        if (void 0 === t) return !0
        if (t <= 31) {
          let i = 0
          for (let t = 0; t < e.length; t++) i |= e[t].matchedMask || 0
          return i === 2 ** t - 1
        }
        let i = new Set()
        for (let t = 0; t < e.length; t++) {
          let s = e[t].matchedTerms
          if (s) for (let e of s) i.add(e)
        }
        return i.size === t
      }
    }
    ;((H.version = "7.5.0"),
      (H.createIndex = y),
      (H.parseIndex = function (e, { getFn: t = g.getFn, fieldNormWeight: i = g.fieldNormWeight } = {}) {
        let { keys: s, records: n } = e,
          l = new v({ getFn: t, fieldNormWeight: i })
        return (l.setKeys(s), l.setIndexRecords(n), l)
      }),
      (H.config = g),
      (H.match = function (e, t, i) {
        if (i && i.useTokenSearch)
          throw Error(
            "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",
          )
        return M(e, { ...g, ...i }).searchIn(t)
      }),
      (H.parseQuery = R),
      N(E),
      N(q),
      (H.use = function (...e) {
        e.forEach((e) => N(e))
      }),
      i.d(t, {}, { A: H }))
  },
}
//# sourceMappingURL=513628.7bbf5c049a.js.map
