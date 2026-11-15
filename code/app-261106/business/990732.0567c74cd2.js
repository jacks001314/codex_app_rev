export const __rspack_esm_ids = [990732]
export const __webpack_modules__ = {
  zJJi(e, s, i) {
    e.exports = i.p + "assets/onboarding-hero-desktop.380c8cfe43.png"
  },
  AVh7(e, s, i) {
    e.exports = i.p + "assets/onboarding-hero-mobile.b8661b56e2.png"
  },
  UF7O(e, s, i) {
    var t = i("TJEh")
    i.d(
      s,
      {},
      {
        q: function (e, s) {
          return { ...s, name: e.display_name, businessType: "local", photoUrl: s && ((0, t.Pz)(s) ?? void 0) }
        },
        s: function (e, s) {
          return {
            name: e.display_name,
            photoUrl: null == s ? void 0 : ((0, t.Pz)(s) ?? void 0),
            businessType: "local" === e.business_type || "ecommerce" === e.business_type ? e.business_type : null,
            address: e.display_address,
            website_url: e.website_url,
          }
        },
      },
    )
  },
  X08k(e, s, i) {
    i.d(s, { i: () => k })
    var t = i("ABep"),
      a = i("QosV"),
      l = i("zTeN"),
      n = i("zd8w"),
      r = i("SPnB"),
      o = i("EOo5"),
      c = i("g2p6"),
      d = i("JNtf"),
      u = i("uXTt"),
      p = i("OWtl"),
      m = i("WFY2"),
      h = i("ISnH"),
      f = i("yGRq"),
      b = i("xywu"),
      g = i("oyxz"),
      y = i("Sm6l"),
      x = i("mUDD"),
      C = i("HOLv"),
      v = i("RNul"),
      w = i("zJJi"),
      j = i("AVh7")
    function _(e) {
      let s,
        i,
        l = (0, a.c)(7),
        { businessName: n, loading: r, onContinue: o } = e,
        c = void 0 !== r && r,
        u = c ? "full" : "viewport"
      return (
        l[0] !== n || l[1] !== c || l[2] !== o
          ? ((s = c
              ? (0, t.jsxs)("div", {
                  className:
                    "flex h-full flex-col items-center justify-center gap-6 bg-surface-card p-8 text-center text-default select-none",
                  children: [
                    (0, t.jsx)(d.L3, {
                      className: "text-heading-lg font-semibold",
                      children: (0, t.jsx)(g.A, {
                        id: "businessProfiles.claimOnboarding.loadingTitle",
                        defaultMessage: "Claim profile",
                        description: "Title while loading first-time business profile claim information",
                      }),
                    }),
                    (0, t.jsx)(v.y, {}),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className: "flex flex-col gap-4 text-default select-none",
                  children: [
                    (0, t.jsxs)("picture", {
                      children: [
                        (0, t.jsx)("source", { media: "(max-width: 639px)", srcSet: j }),
                        (0, t.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: w }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-col gap-6 px-6 pb-6 sm:px-8 sm:pb-10",
                      children: [
                        (0, t.jsx)(d.L3, {
                          className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.title",
                            defaultMessage: "Claim {businessName}’s profile on ChatGPT",
                            description:
                              "First-time business claim dialog title; businessName is the business being claimed",
                            values: { businessName: n },
                          }),
                        }),
                        (0, t.jsxs)("ul", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(C.I, { asset: h.w, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.engagementTitle",
                                        defaultMessage: "See how customers engage",
                                        description:
                                          "Business claim onboarding benefit heading for profile engagement analytics",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.engagementDescription",
                                        defaultMessage:
                                          "Understand how often your business profile is seen and clicked",
                                        description:
                                          "Business claim onboarding explanation of profile engagement analytics",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(C.I, { asset: f.T, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.discoverTitle",
                                        defaultMessage: "Help customers discover what you offer",
                                        description:
                                          "Business claim onboarding benefit heading for adding business details",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.discoverDescription",
                                        defaultMessage:
                                          "Add photos, products and other key details so ChatGPT can answer questions more accurately",
                                        description:
                                          "Business claim onboarding explanation of the benefit of adding business details",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: "flex items-start gap-3",
                              children: [
                                (0, t.jsx)(C.I, { asset: b.G, className: "shrink-0" }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 text-base leading-5",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className: "font-semibold",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.verifiedTitle",
                                        defaultMessage: "Get a blue checkmark",
                                        description:
                                          "Business claim onboarding benefit heading for a verified business checkmark",
                                      }),
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "text-secondary",
                                      children: (0, t.jsx)(g.A, {
                                        id: "businessProfiles.claimOnboarding.verifiedDescription",
                                        defaultMessage:
                                          "Reassure customers that your profile is managed by the actual business",
                                        description:
                                          "Business claim onboarding explanation of the verified business checkmark",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)(d.rr, {
                          className: "text-center text-sm text-secondary",
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.verificationNotice",
                            defaultMessage: "You’ll need to verify that you’re authorized to manage this profile",
                            description:
                              "Business claim onboarding notice that the user must verify authority to manage the business",
                          }),
                        }),
                        (0, t.jsx)(y.$, {
                          className: "w-full",
                          size: "formAction",
                          color: "primary",
                          onClick: o,
                          children: (0, t.jsx)(g.A, {
                            id: "businessProfiles.claimOnboarding.claim",
                            defaultMessage: "Claim profile",
                            description: "Continue from business claim onboarding to ownership verification",
                          }),
                        }),
                      ],
                    }),
                  ],
                })),
            (l[0] = n),
            (l[1] = c),
            (l[2] = o),
            (l[3] = s))
          : (s = l[3]),
        l[4] !== u || l[5] !== s
          ? ((i = (0, t.jsx)(x.R4, { size: u, variant: "chatgpt", children: s })), (l[4] = u), (l[5] = s), (l[6] = i))
          : (i = l[6]),
        i
      )
    }
    var L = i("R8Ag")
    let A = "oai/apps/hasSeenBusinessProfileClaimOnboarding"
    function P(e) {
      try {
        m.v.warning("Business profile claim onboarding unavailable", { safe: { reason: e } })
      } catch {}
    }
    function k(e) {
      let s,
        i,
        n,
        o,
        c = (0, a.c)(9)
      ;(c[0] !== e ? (({ required: i, ...s } = e), (c[0] = e), (c[1] = s), (c[2] = i)) : ((s = c[1]), (i = c[2])),
        c[3] !== i ? ((n = { enabled: i }), (c[3] = i), (c[4] = n)) : (n = c[4]))
      let d = (0, l.Ul)(r.o8, n)
      return (
        c[5] !== s || c[6] !== d || c[7] !== i
          ? ((o = i ? (0, t.jsx)(S, { ...s }, String(d)) : (0, t.jsx)(t.Fragment, { children: s.children })),
            (c[5] = s),
            (c[6] = d),
            (c[7] = i),
            (c[8] = o))
          : (o = c[8]),
        o
      )
    }
    function S(e) {
      let s,
        i,
        m,
        h,
        f,
        b,
        g,
        y,
        x,
        C,
        v,
        w,
        j,
        k,
        S,
        I,
        B,
        M,
        N,
        T,
        q,
        E,
        H,
        R,
        V = (0, a.c)(63),
        { businessName: D, children: O, onClose: z, telemetryJourney: F } = e,
        $ = (0, l.gh)(p.u),
        { accountId: Z } = (0, o.As)(),
        G = (0, l.Ul)(c.Sk),
        U = (0, l.Ul)(r.o8),
        Q = null != Z && G === Z && null != U
      V[0] !== Q ? ((s = { enabled: Q }), (V[0] = Q), (V[1] = s)) : (s = V[1])
      let { data: J, isError: K } = (0, l.Ul)(c.s6, s),
        [Y, W] = (0, n.useState)(!1),
        [X, ee] = (0, n.useState)(null)
      !Y && K && null == X && ee("settings_read")
      let es = !Q || null == J,
        ei = (0, n.useRef)(null),
        et = (0, n.useRef)(null),
        ea = (0, n.useRef)(!1),
        el = null != X || (Q && (Y || (K && null == J) || J?.seenAnnouncements?.[A] != null))
      ;(V[2] !== el || V[3] !== es || V[4] !== $ || V[5] !== F
        ? ((i = () => (el ? void 0 : (0, L.fY)($, F, es ? "entry" : "onboarding"))),
          (m = [$, F, es, el]),
          (V[2] = el),
          (V[3] = es),
          (V[4] = $),
          (V[5] = F),
          (V[6] = i),
          (V[7] = m))
        : ((i = V[6]), (m = V[7])),
        (0, n.useEffect)(i, m),
        V[8] !== X || V[9] !== $ || V[10] !== F
          ? ((h = () => {
              if (null != X) {
                let e = (0, L.x$)($, F, "entry", "load")
                ;(0, L.BR)($, F, e, "failed", "settings_timeout" === X ? "timeout" : "unavailable")
              }
            }),
            (f = [$, F, X]),
            (V[8] = X),
            (V[9] = $),
            (V[10] = F),
            (V[11] = h),
            (V[12] = f))
          : ((h = V[11]), (f = V[12])),
        (0, n.useEffect)(h, f),
        V[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = () => () => ei.current?.abort()), (g = []), (V[13] = b), (V[14] = g))
          : ((b = V[13]), (g = V[14])),
        (0, n.useEffect)(b, g),
        V[15] !== X
          ? ((y = () => {
              null != X && "render" !== X && P(X)
            }),
            (x = [X]),
            (V[15] = X),
            (V[16] = y),
            (V[17] = x))
          : ((y = V[16]), (x = V[17])),
        (0, n.useEffect)(y, x),
        V[18] !== X || V[19] !== Y || V[20] !== es
          ? ((C = () => {
              if (Y || null != X || !es) return
              let e = setTimeout(() => {
                ee("settings_timeout")
              }, 3e3)
              return () => clearTimeout(e)
            }),
            (v = [X, Y, es]),
            (V[18] = X),
            (V[19] = Y),
            (V[20] = es),
            (V[21] = C),
            (V[22] = v))
          : ((C = V[21]), (v = V[22])),
        (0, n.useEffect)(C, v),
        V[23] !== z || V[24] !== $ || V[25] !== F
          ? ((w = () => {
              ;((0, L.wj)($, F), (ea.current = !0), ei.current?.abort(), z())
            }),
            (V[23] = z),
            (V[24] = $),
            (V[25] = F),
            (V[26] = w))
          : (w = V[26]))
      let en = w
      V[27] !== Z || V[28] !== Q || V[29] !== U || V[30] !== $ || V[31] !== J || V[32] !== F
        ? ((j = async () => {
            if (!Q || !J || null != ei.current) return
            let e = new AbortController()
            ei.current = e
            let s = (0, L.x$)($, F, "onboarding", "continue")
            ;(W(!0), (0, L.BR)($, F, s, "succeeded"))
            try {
              ;(await (0, c.hs)($, Z, A, { userId: U, signal: e.signal })) || P("acknowledgement_unpersisted")
            } catch {
              e.signal.aborted || P("acknowledgement_write")
            }
          }),
          (V[27] = Z),
          (V[28] = Q),
          (V[29] = U),
          (V[30] = $),
          (V[31] = J),
          (V[32] = F),
          (V[33] = j))
        : (j = V[33])
      let er = j
      if (el) {
        let e
        return (
          V[34] !== O ? ((e = (0, t.jsx)(t.Fragment, { children: O })), (V[34] = O), (V[35] = e)) : (e = V[35]),
          e
        )
      }
      ;(V[36] !== O ? ((k = (0, t.jsx)(t.Fragment, { children: O })), (V[36] = O), (V[37] = k)) : (k = V[37]),
        V[38] === Symbol.for("react.memo_cache_sentinel") ? ((S = () => ee("render")), (V[38] = S)) : (S = V[38]))
      let eo = es ? void 0 : "edgeToEdgeSheet",
        ec = es ? void 0 : "promotional"
      return (
        V[39] !== es ? ((I = es ? { "aria-describedby": void 0 } : {}), (V[39] = es), (V[40] = I)) : (I = V[40]),
        V[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = () => {
              et.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
            }),
            (M = (e) => {
              ;(e.preventDefault(), ea.current && et.current?.isConnected && et.current.focus({ preventScroll: !0 }))
            }),
            (V[41] = B),
            (V[42] = M))
          : ((B = V[41]), (M = V[42])),
        V[43] !== I ? ((N = { ...I, onOpenAutoFocus: B, onCloseAutoFocus: M }), (V[43] = I), (V[44] = N)) : (N = V[44]),
        V[45] !== en
          ? ((T = (e) => {
              e || en()
            }),
            (V[45] = en),
            (V[46] = T))
          : (T = V[46]),
        V[47] !== er ? ((q = () => void er()), (V[47] = er), (V[48] = q)) : (q = V[48]),
        V[49] !== D || V[50] !== es || V[51] !== q
          ? ((E = (0, t.jsx)(_, { businessName: D, loading: es, onContinue: q })),
            (V[49] = D),
            (V[50] = es),
            (V[51] = q),
            (V[52] = E))
          : (E = V[52]),
        V[53] !== es || V[54] !== eo || V[55] !== ec || V[56] !== N || V[57] !== T || V[58] !== E
          ? ((H = (0, t.jsx)(d.lG, {
              open: !0,
              size: eo,
              variant: ec,
              unstyledContent: es,
              viewportSized: es,
              closeButtonSize: "large",
              contentProps: N,
              onOpenChange: T,
              children: E,
            })),
            (V[53] = es),
            (V[54] = eo),
            (V[55] = ec),
            (V[56] = N),
            (V[57] = T),
            (V[58] = E),
            (V[59] = H))
          : (H = V[59]),
        V[60] !== k || V[61] !== H
          ? ((R = (0, t.jsx)(u.t, { name: "BusinessProfileClaimOnboarding", fallback: k, onError: S, children: H })),
            (V[60] = k),
            (V[61] = H),
            (V[62] = R))
          : (R = V[62]),
        R
      )
    }
  },
  mQkG(e, s, i) {
    i.d(s, { CanonicalProfileClaim: () => Z, g: () => O, F: () => z })
    var t = i("ABep"),
      a = i("QosV")
    let l = (0, i("iJY0").a)({
      name: "lock-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.458252, y: 1.625, width: 15.083008, height: 16.75 },
        visualBounds: { x: 2.458252, y: 1.625, width: 15.083008, height: 16.75 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.458252, y: 1.625, width: 15.083008, height: 16.75 },
        center: { x: 9.999756, y: 10 },
        insets: { top: 1.625, right: 2.45874, bottom: 1.625, left: 2.458252 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999756, y: 10 }, foreground: { x: 9.999756, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0002 9.95801C10.9433 9.95827 11.7089 10.723 11.7092 11.666C11.7092 12.289 11.3736 12.8322 10.8752 13.1309V14.167C10.8751 14.65 10.4833 15.0419 10.0002 15.042C9.5171 15.042 9.12542 14.6501 9.12524 14.167V13.1318C8.62669 12.8333 8.29224 12.2893 8.29224 11.666C8.29261 10.723 9.05714 9.95818 10.0002 9.95801Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 1.625C12.7845 1.62518 15.0413 3.88267 15.0413 6.66699V6.71777C16.476 7.06591 17.5413 8.3586 17.5413 9.90039V15.0996C17.5413 16.9083 16.0755 18.3749 14.2668 18.375H5.73364C3.92491 18.375 2.45825 16.9083 2.45825 15.0996V9.90039C2.45825 8.35883 3.52373 7.06614 4.95825 6.71777V6.66699C4.95825 3.88264 7.21592 1.62513 10.0002 1.625ZM5.73364 8.375C4.89141 8.375 4.20825 9.05816 4.20825 9.90039V15.0996C4.20825 15.9418 4.89141 16.625 5.73364 16.625H14.2668C15.109 16.6249 15.7913 15.9418 15.7913 15.0996V9.90039C15.7913 9.05824 15.109 8.37514 14.2668 8.375H5.73364ZM10.0002 3.375C8.19644 3.37513 6.73172 4.82649 6.70923 6.625H13.2903C13.2678 4.82652 11.804 3.37517 10.0002 3.375Z" fill="currentColor"/>',
    })
    var n = i("T0Rc"),
      r = i("on57"),
      o = i("zTeN"),
      c = i("DBCl"),
      d = i("zd8w"),
      u = i("oyxz"),
      p = i("Wf1j"),
      m = i("HZfM"),
      h = i("EOo5"),
      f = i("Ghh3"),
      b = i("RW8t"),
      g = i("LhhH"),
      y = i("Sm6l"),
      x = i("uuN8"),
      C = i("JNtf"),
      v = i("mUDD"),
      w = i("ZtSy"),
      j = i("HOLv"),
      _ = i("bVeK"),
      L = i("RNul"),
      A = i("zLIa"),
      P = i("XcNx"),
      k = i("zSQm"),
      S = i("OWtl"),
      I = i("aepO"),
      B = i("TjJt"),
      M = i("UF7O"),
      N = i("UvKE"),
      T = i("X08k"),
      q = i("R8Ag"),
      E = i("XpF1"),
      H = i("Gnfq"),
      R = i("AW7I"),
      V = i("uAf3"),
      D = i("SFXr")
    function O(e) {
      let s,
        i,
        l = (0, a.c)(9),
        { business: n, details: r, claimLayout: o, verified: c } = e,
        d = n.address ?? r?.address,
        u = n.website_url ?? r?.website_url
      l[0] !== n || l[1] !== r || l[2] !== d || l[3] !== u
        ? ((s = { ...r, ...n, address: d, website_url: u }), (l[0] = n), (l[1] = r), (l[2] = d), (l[3] = u), (l[4] = s))
        : (s = l[4])
      let p = "ecommerce" !== n.businessType && o ? "claim-preview" : "sidebar"
      return (
        l[5] !== s || l[6] !== p || l[7] !== c
          ? ((i = (0, t.jsx)(b.ChatGptLocalBusinessMetadata, { business: s, layout: p, verified: c, readOnly: !0 })),
            (l[5] = s),
            (l[6] = p),
            (l[7] = c),
            (l[8] = i))
          : (i = l[8]),
        i
      )
    }
    function z(e) {
      let s,
        i,
        l,
        n,
        r,
        c = (0, a.c)(39),
        { accountId: p, search: f, children: b } = e,
        g = (0, o.gh)(S.u),
        { userId: y } = (0, h.As)(),
        [x, C] = (0, m.ok)(),
        v = (0, m.zy)().state,
        w = (0, m.wQ)(),
        [j, _] = (0, d.useState)(0),
        [L, A] = (0, d.useState)(),
        P = null != p ? x.get("claim") : null,
        [k, I] = (0, d.useState)(null),
        M = null == P && k?.accountId === p && k.userId === y ? k.place : null,
        N = null
      if (null != P)
        N = {
          profileId: P,
          preparedProfileKey:
            w !== m.rc.Push || "string" != typeof v || null == y || x.has("claim_grant")
              ? void 0
              : (0, R.preparedClaimNavigationKey)(p, y, P, v),
        }
      else if (null != M) {
        let e
        ;(c[0] !== M ? ((e = { place: M }), (c[0] = M), (c[1] = e)) : (e = c[1]), (N = e))
      }
      c[2] !== p || c[3] !== g.queryClient
        ? ((s = () => {
            ;(g.queryClient.invalidateQueries({ queryKey: ["business-profiles", p] }), _($))
          }),
          (c[2] = p),
          (c[3] = g.queryClient),
          (c[4] = s))
        : (s = c[4])
      let T = s
      c[5] !== T || c[6] !== I || c[7] !== C || c[8] !== L
        ? ((i = () => {
            ;(I(null),
              C(F, { replace: !0 }),
              T(),
              L?.isConnected
                ? L.focus({ preventScroll: !0 })
                : document.querySelector('input[role="searchbox"]')?.focus())
          }),
          (c[5] = T),
          (c[6] = I),
          (c[7] = C),
          (c[8] = L),
          (c[9] = i))
        : (i = c[9])
      let q = i
      if (
        c[10] !== p ||
        c[11] !== b ||
        c[12] !== x ||
        c[13] !== j ||
        c[14] !== f ||
        c[15] !== I ||
        c[16] !== C ||
        c[17] !== y
      ) {
        let e
        ;(c[19] !== p || c[20] !== x || c[21] !== f?.accountId || c[22] !== I || c[23] !== C || c[24] !== y
          ? ((e = (e, s) => {
              null != p &&
                p === f?.accountId &&
                null != y &&
                (null != e.businessProfileId && (0, B.Tk)(y, (0, B.dk)(x), e.businessProfileId),
                A(s),
                I(
                  null != e.place
                    ? {
                        accountId: p,
                        userId: y,
                        place: e.place,
                        publicDetails: { name: e.name, address: e.address, website_url: e.website },
                      }
                    : null,
                ),
                C((s) => {
                  let i = new URLSearchParams(s)
                  return (
                    null != e.businessProfileId ? i.set("claim", e.businessProfileId) : i.delete("claim"),
                    i.delete("claim_grant"),
                    i
                  )
                }))
            }),
            (c[19] = p),
            (c[20] = x),
            (c[21] = f?.accountId),
            (c[22] = I),
            (c[23] = C),
            (c[24] = y),
            (c[25] = e))
          : (e = c[25]),
          (l = b(null == f ? void 0 : { ...f, revision: (f.revision ?? 0) + j }, e)),
          (c[10] = p),
          (c[11] = b),
          (c[12] = x),
          (c[13] = j),
          (c[14] = f),
          (c[15] = I),
          (c[16] = C),
          (c[17] = y),
          (c[18] = l))
      } else l = c[18]
      return (
        c[26] !== p ||
        c[27] !== N ||
        c[28] !== q ||
        c[29] !== k?.publicDetails ||
        c[30] !== x ||
        c[31] !== P ||
        c[32] !== M ||
        c[33] !== L ||
        c[34] !== y
          ? ((n =
              null != N &&
              null != p &&
              (0, t.jsx)(
                Z,
                {
                  ...N,
                  publicDetails: null != M ? k?.publicDetails : void 0,
                  accountId: p,
                  initialFlowType: null != M ? "claim" : void 0,
                  onClose: q,
                  showLoadingDialog: null == L && !x.has("create"),
                  closeLabel: (0, t.jsx)(u.A, {
                    id: "businessProfiles.searchClaim.claimed.back",
                    defaultMessage: "Back to search",
                    description:
                      "Button closing read-only details of a Business Profile managed by another account. Returns to the existing search query and its results.",
                  }),
                },
                `${p}:${y}:${M?.entity_lookup_id ?? P}:${x.get("claim_grant") ?? ""}`,
              )),
            (c[26] = p),
            (c[27] = N),
            (c[28] = q),
            (c[29] = k?.publicDetails),
            (c[30] = x),
            (c[31] = P),
            (c[32] = M),
            (c[33] = L),
            (c[34] = y),
            (c[35] = n))
          : (n = c[35]),
        c[36] !== l || c[37] !== n
          ? ((r = (0, t.jsxs)(t.Fragment, { children: [l, n] })), (c[36] = l), (c[37] = n), (c[38] = r))
          : (r = c[38]),
        r
      )
    }
    function F(e) {
      let s = new URLSearchParams(e)
      return (s.delete("claim"), s.delete("claim_grant"), s)
    }
    function $(e) {
      return e + 1
    }
    function Z(e) {
      let s,
        i,
        l,
        r,
        b,
        g,
        x,
        v,
        j,
        _,
        A,
        k,
        I,
        V,
        z,
        F,
        $,
        Z,
        U,
        Q,
        J,
        Y,
        W,
        X,
        ee,
        es,
        ei,
        et,
        ea,
        el,
        en,
        er = (0, a.c)(187),
        {
          profileId: eo,
          preparedProfile: ec,
          preparedProfileKey: ed,
          place: eu,
          accountId: ep,
          entityLookupId: em,
          onClose: eh,
          onCloseAfterApproval: ef,
          onManageProfile: eb,
          closeLabel: eg,
          selectionQueryKey: ey,
          showLoadingDialog: ex,
          showOnboarding: eC,
          telemetryEntryPoint: ev,
          initialBusiness: ew,
          initialFlowType: ej,
          onCreationClaimUnavailable: e_,
          onCreationClaimApproved: eL,
          onBackToMatchPicker: eA,
          allowCreationDispute: eP,
          waitingForPlaceDetails: ek,
          publicDetails: eS,
          readRegisteredPlace: eI,
        } = e,
        eB = void 0 === ex || ex,
        eM = void 0 !== eC && eC,
        eN = void 0 !== eP && eP,
        eT = (0, o.gh)(S.u),
        [eq] = (0, m.ok)()
      er[0] !== eq || er[1] !== eo
        ? ((s = null == eo ? void 0 : (eq.get("claim_grant") ?? void 0)), (er[0] = eq), (er[1] = eo), (er[2] = s))
        : (s = er[2])
      let eE = s,
        eH = ev ?? (eM ? "sidebar" : "hub_search"),
        eR = (0, p.A)(),
        eV = ej ?? "claim"
      er[3] !== eH || er[4] !== eo || er[5] !== ej
        ? ((i = () => ({ journey: "claim" === ej ? (0, q.Iw)(eH, eo) : void 0, selectionQualified: "claim" === ej })),
          (er[3] = eH),
          (er[4] = eo),
          (er[5] = ej),
          (er[6] = i))
        : (i = er[6])
      let [eD, eO] = (0, d.useState)(i),
        ez = eD.journey
      er[7] !== eg
        ? ((l =
            eg ??
            (0, t.jsx)(u.A, {
              id: "businessProfiles.canonicalClaim.close",
              defaultMessage: "Close",
              description:
                "Button closing business profile claim preparation or unavailable-profile details and returning to the business sidebar. Does not withdraw an existing claim. Short button label.",
            })),
          (er[7] = eg),
          (er[8] = l))
        : (l = er[8])
      let eF = l,
        e$ = (0, m.Zp)(),
        eZ = (0, h.As)(),
        [eG] = (0, m.ok)()
      er[9] !== eG ? ((r = (0, B.dk)(eG)), (er[9] = eG), (er[10] = r)) : (r = er[10])
      let eU = r,
        { email: eQ } = eZ,
        eJ = (0, d.useRef)(eZ)
      ;(er[11] !== eZ
        ? ((g = () => {
            eJ.current = eZ
          }),
          (b = [eZ]),
          (er[11] = eZ),
          (er[12] = b),
          (er[13] = g))
        : ((b = er[12]), (g = er[13])),
        (0, d.useLayoutEffect)(g, b))
      let eK = (0, d.useId)()
      er[14] === Symbol.for("react.memo_cache_sentinel") ? ((x = new AbortController()), (er[14] = x)) : (x = er[14])
      let eY = (0, d.useRef)(x),
        eW = (0, d.useRef)(null),
        eX = (0, d.useRef)(ec)
      er[15] !== eE || er[16] !== ed || er[17] !== eT.queryClient
        ? ((v = () => null == eE && null != ed && null != eT.queryClient.getQueryData(ed)),
          (er[15] = eE),
          (er[16] = ed),
          (er[17] = eT.queryClient),
          (er[18] = v))
        : (v = er[18])
      let [e1] = (0, d.useState)(v),
        e0 = (0, d.useRef)(null)
      er[19] !== ef || er[20] !== eL
        ? ((j = () => {
            ;(eL?.(), ef?.())
          }),
          (er[19] = ef),
          (er[20] = eL),
          (er[21] = j))
        : (j = er[21])
      let e2 = (0, d.useEffectEvent)(j)
      er[22] !== ep || er[23] !== eU || er[24] !== e$ || er[25] !== eb || er[26] !== eT.queryClient
        ? ((_ = (e, s) => {
            let i = void 0 === s ? "insights" : s
            null != eb
              ? eb(i)
              : ((0, E.xz)(eT.queryClient, ep, e),
                eT.queryClient.invalidateQueries({ queryKey: ["business-profiles", ep] }),
                e$((0, H.Ds)(e, i, "owner", eU)))
          }),
          (er[22] = ep),
          (er[23] = eU),
          (er[24] = e$),
          (er[25] = eb),
          (er[26] = eT.queryClient),
          (er[27] = _))
        : (_ = er[27])
      let e4 = _
      er[28] !== ep ||
      er[29] !== eZ.accountId ||
      er[30] !== eZ.authMethod ||
      er[31] !== eZ.isLoading ||
      er[32] !== eZ.userId ||
      er[33] !== eH ||
      er[34] !== eU ||
      er[35] !== eL ||
      er[36] !== e4 ||
      er[37] !== eu?.entity_key ||
      er[38] !== eo
        ? ((A = (e, s, i, t, a) => {
            let l,
              n,
              r = eZ.userId,
              o =
                (0, P.x)({ browser: !0 }) &&
                !eZ.isLoading &&
                "chatgpt" === eZ.authMethod &&
                eZ.accountId === ep &&
                null != r
                  ? {
                      accountId: ep,
                      userId: r,
                      getAbortSignal: i,
                      assertCurrentActor: () => {
                        let e = eJ.current
                        if (
                          (i().throwIfAborted(),
                          e.isLoading || "chatgpt" !== e.authMethod || e.accountId !== ep || e.userId !== r)
                        )
                          throw Error("Shopify verification account changed")
                      },
                    }
                  : void 0
            return (0, R.createClaimVerification)(void 0 === a ? null : a, {
              flowType: e,
              shopifyActor: o,
              businessProfileId: eo,
              entityKey: eu?.entity_key,
              accountId: ep,
              getAbortSignal: i,
              currentRequest: t,
              onVerificationFlow: (e) => {
                let s = eJ.current
                s.isLoading ||
                  s.accountId !== ep ||
                  s.userId !== r ||
                  ((l = e.businessProfileId), (n = e.claimFlowId), (0, B.Y3)(r, eU, e))
              },
              onApproved: () => {
                eL?.()
                let e = eJ.current
                if (e.isLoading || e.accountId !== ep || e.userId !== r) return
                let s = (0, B.Bt)(r).find(
                  (e) => e.flowId === eU && "pending" === e.status && e.businessProfileId === l && e.claimFlowId === n,
                )
                s?.businessProfileId != null && e4(s.businessProfileId)
              },
              telemetryJourney: s,
              telemetryEntryPoint: eH,
              isTelemetryActorCurrent: () => {
                let e = eJ.current
                return !eY.current.signal.aborted && !e.isLoading && e.accountId === ep && e.userId === r
              },
            })
          }),
          (er[28] = ep),
          (er[29] = eZ.accountId),
          (er[30] = eZ.authMethod),
          (er[31] = eZ.isLoading),
          (er[32] = eZ.userId),
          (er[33] = eH),
          (er[34] = eU),
          (er[35] = eL),
          (er[36] = e4),
          (er[37] = eu?.entity_key),
          (er[38] = eo),
          (er[39] = A))
        : (A = er[39])
      let e5 = A
      ;(er[40] !== ep ||
      er[41] !== eZ.userId ||
      er[42] !== em ||
      er[43] !== eE ||
      er[44] !== eK ||
      er[45] !== eR ||
      er[46] !== eu?.entity_lookup_id ||
      er[47] !== eo ||
      er[48] !== ey
        ? ((k = ey ?? [
            "business-profile-search-claim",
            ep,
            eZ.userId,
            eR.locale,
            eo,
            eE,
            em ?? eu?.entity_lookup_id,
            eK,
          ]),
          (er[40] = ep),
          (er[41] = eZ.userId),
          (er[42] = em),
          (er[43] = eE),
          (er[44] = eK),
          (er[45] = eR),
          (er[46] = eu?.entity_lookup_id),
          (er[47] = eo),
          (er[48] = ey),
          (er[49] = k))
        : (k = er[49]),
        er[50] !== e5 || er[51] !== eE || er[52] !== ew || er[53] !== eV || er[54] !== ez
          ? ((I =
              null == ew || null != eE
                ? void 0
                : () => ({
                    business: ew,
                    verification: e5(eV, ez, () => eY.current.signal),
                    action: eV,
                    flowType: eV,
                  })),
            (er[50] = e5),
            (er[51] = eE),
            (er[52] = ew),
            (er[53] = eV),
            (er[54] = ez),
            (er[55] = I))
          : (I = er[55]))
      let {
          data: e8,
          isError: e3,
          isFetched: e6,
          refetch: e7,
        } = (0, n.I)({
          enabled: !(void 0 !== ek && ek),
          queryKey: k,
          initialData: I,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
          refetchOnMount: !1,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
          queryFn: async function (e) {
            let { signal: s } = e
            eW.current?.abort()
            let i = new AbortController()
            eW.current = i
            let t = AbortSignal.any([s, i.signal]),
              a = null != eu && null != e_ ? window.setTimeout(() => i.abort(), 1e4) : void 0,
              l = ez,
              n = (0, q.x$)(eT, ez, "selection", "load")
            try {
              let e = await (async () => {
                let e
                if (null != eu) {
                  let e
                  if (e_ && null == eS && !eI) throw Error("Could not load details for the selected place")
                  let s = () => {
                      let e = eJ.current
                      if (e.isLoading || e.accountId !== ep || !eZ.userId || e.userId !== eZ.userId)
                        throw Error("Business claim account changed")
                      return t
                    },
                    i = e5("claim", l, s, void 0, eu.entity_lookup_id),
                    a = await i.prepareNewPlaceClaim(),
                    n = eS ?? (await eI?.(s()))
                  ;(s().throwIfAborted(),
                    null == l && eO({ journey: (l = i.telemetryJourney), selectionQualified: !1 }))
                  let r = null != e_ && null == eA,
                    o = null != a.eligibleMethods || !!(n?.phone || a.claimDomain || a.shopifyShopDomain)
                  return (
                    null != eA ? (e = a) : !r && o && (e = { ...a, step: "account" }),
                    {
                      business: (0, M.q)(eu, n),
                      verification: r ? { ...i, prepare: async () => a } : i,
                      action: "claim",
                      flowType: "claim",
                      initialPreparation: e,
                    }
                  )
                }
                let s = null == eE && null != ed ? eT.queryClient.getQueryData(ed) : void 0,
                  i = eX.current ?? s?.profile
                ;(null != ed && eT.queryClient.removeQueries({ queryKey: ed, exact: !0 }), (eX.current = void 0))
                let a =
                  (null == eE ? i : void 0) ??
                  (await (0, R.readProfileClaimPreparation)(eo, {
                    accountId: ep,
                    grantId: eE,
                    getAbortSignal: () => t,
                  }))
                t.throwIfAborted()
                let { salesManaged: r, action: o } = (0, D.o)(a)
                if (e_ && !r && !(0, R.canSuggestProfileClaim)(a, eN))
                  throw Error("This business is no longer available to claim")
                let c = "dispute" === o ? "dispute" : "claim",
                  d = !a.can_manage && "claim" === o,
                  u = d && a.ownership.current_request?.kind === "claim"
                d && null == l && eO({ journey: (l = (0, q.Iw)(eH, a.business_profile_id)), selectionQualified: u })
                let {
                    localProfile: p,
                    localBusiness: m,
                    businessEntityId: h,
                  } = s?.localContext ??
                  (await (0, D.F)({
                    profile: a,
                    profileId: eo,
                    accountId: ep,
                    locale: eR.locale,
                    signal: t,
                    entityLookupId: em,
                    publicDetails: eS,
                  })),
                  f = e5(c, d ? l : void 0, () => t, a.ownership.current_request, h),
                  b = p?.eligible_methods,
                  g =
                    null == b
                      ? f
                      : {
                          ...f,
                          prepare: async () => {
                            let e = await f.prepare()
                            return (
                              t.throwIfAborted(),
                              "method" === e.step
                                ? { ...e, eligibleMethods: [...(null != e.shopifyShopDomain ? ["shopify"] : []), ...b] }
                                : e
                            )
                          },
                        }
                return (
                  u
                    ? (null == n && (n = (0, q.x$)(eT, l, "selection", "prepare")), (e = await f.prepare()))
                    : d && (eA || e_)
                      ? (e = await f.prepareProfileMethods(p ?? a))
                      : a.can_manage ||
                        a.ownership.current_request?.kind !== "dispute" ||
                        (e = { step: f.initialStep }),
                  t.throwIfAborted(),
                  {
                    profile: a,
                    business: {
                      ...m,
                      ...(0, M.s)(a, m),
                      name: m?.name ?? a.display_name,
                      address: m?.address ?? a.display_address,
                      website_url: m?.website_url ?? a.website_url,
                    },
                    verification: g,
                    initialPreparation: e,
                    action: o,
                    flowType: c,
                  }
                )
              })().finally(() => window.clearTimeout(a))
              return ((0, q.BR)(eT, l, n, "succeeded"), e)
            } catch (a) {
              let e = (0, q._3)(a)
              ;(0, q.BR)(eT, l, n, e.outcome, e.errorCategory)
              let t = eJ.current
              throw (
                !e_ ||
                  eW.current !== i ||
                  s.aborted ||
                  eY.current.signal.aborted ||
                  t.isLoading ||
                  t.accountId !== ep ||
                  null == t.userId ||
                  t.userId !== eZ.userId ||
                  t.authMethod !== eZ.authMethod ||
                  e_(a instanceof R.ExistingPlaceRequestError ? a.profileId : void 0),
                a
              )
            }
          },
        }),
        e9 = eD.selectionQualified && e8?.business == null && (eB || e3)
      ;(er[56] !== ez
        ? ((V = () => (0, q.nn)(ez)), (z = [ez]), (er[56] = ez), (er[57] = V), (er[58] = z))
        : ((V = er[57]), (z = er[58])),
        (0, d.useLayoutEffect)(V, z),
        er[59] !== eT || er[60] !== e9 || er[61] !== ez
          ? ((F = () => (e9 ? (0, q.fY)(eT, ez, "selection") : void 0)),
            ($ = [eT, ez, e9]),
            (er[59] = eT),
            (er[60] = e9),
            (er[61] = ez),
            (er[62] = F),
            (er[63] = $))
          : ((F = er[62]), ($ = er[63])),
        (0, d.useEffect)(F, $),
        er[64] !== e3 || er[65] !== eT || er[66] !== eD.selectionQualified || er[67] !== ez
          ? ((Z = () =>
              (0, q.dA)(eT, ez, "selection", eD.selectionQualified && e3 ? (ez?.lastError ?? "unknown") : void 0)),
            (U = [eT, ez, eD.selectionQualified, e3]),
            (er[64] = e3),
            (er[65] = eT),
            (er[66] = eD.selectionQualified),
            (er[67] = ez),
            (er[68] = Z),
            (er[69] = U))
          : ((Z = er[68]), (U = er[69])),
        (0, d.useEffect)(Z, U),
        er[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = () => {
              let e = new AbortController()
              return (
                (eY.current = e),
                () => {
                  ;(e.abort(), eW.current?.abort())
                }
              )
            }),
            (J = []),
            (er[70] = Q),
            (er[71] = J))
          : ((Q = er[70]), (J = er[71])),
        (0, d.useLayoutEffect)(Q, J),
        er[72] !== ep ||
        er[73] !== e2 ||
        er[74] !== eU ||
        er[75] !== e$ ||
        er[76] !== eb ||
        er[77] !== eo ||
        er[78] !== eT.queryClient ||
        er[79] !== e8
          ? ((Y = () => {
              if (
                !(
                  !eo ||
                  !e8?.profile?.can_manage ||
                  e8.profile.claim_access?.status === "claim_pending" ||
                  eW.current?.signal.aborted
                ) &&
                e0.current !== e8
              ) {
                if (((e0.current = e8), e2(), null != eb)) return void eb("insights")
                ;((0, E.xz)(eT.queryClient, ep, eo),
                  eT.queryClient.invalidateQueries({ queryKey: ["business-profiles", ep] }),
                  e$((0, H.Ds)(eo, "insights", "owner", eU)))
              }
            }),
            (er[72] = ep),
            (er[73] = e2),
            (er[74] = eU),
            (er[75] = e$),
            (er[76] = eb),
            (er[77] = eo),
            (er[78] = eT.queryClient),
            (er[79] = e8),
            (er[80] = Y))
          : (Y = er[80]),
        er[81] !== ep ||
        er[82] !== eU ||
        er[83] !== e$ ||
        er[84] !== eb ||
        er[85] !== eo ||
        er[86] !== eT.queryClient ||
        er[87] !== e8
          ? ((W = [e8, ep, eo, e$, eT.queryClient, eb, eU]),
            (er[81] = ep),
            (er[82] = eU),
            (er[83] = e$),
            (er[84] = eb),
            (er[85] = eo),
            (er[86] = eT.queryClient),
            (er[87] = e8),
            (er[88] = W))
          : (W = er[88]),
        (0, d.useEffect)(Y, W),
        er[89] !== eh ||
        er[90] !== ef ||
        er[91] !== eT ||
        er[92] !== e8?.verification ||
        er[93] !== e8?.verification.getActiveRequestProfileId ||
        er[94] !== e8?.verification.getApprovedProfileId ||
        er[95] !== ez
          ? ((X = () => {
              let e = e8?.verification.getApprovedProfileId() != null
              ;((0, q.wj)(eT, ez),
                eY.current.abort(),
                eW.current?.abort(),
                e && ef ? ef() : eh(e8?.verification.getActiveRequestProfileId()))
            }),
            (er[89] = eh),
            (er[90] = ef),
            (er[91] = eT),
            (er[92] = e8?.verification),
            (er[93] = e8?.verification.getActiveRequestProfileId),
            (er[94] = e8?.verification.getApprovedProfileId),
            (er[95] = ez),
            (er[96] = X))
          : (X = er[96]))
      let se = X
      if (e8?.business == null || (e8.profile?.can_manage && e8.profile.claim_access?.status !== "claim_pending")) {
        let e, s, i, a
        if ((!eB || (e1 && !e6)) && !e3) return null
        let l = eM || null != eo
        return (
          er[97] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(C.L3, {
                children: (0, t.jsx)(u.A, {
                  id: "businessProfiles.searchClaim.loading.title",
                  defaultMessage: "Business profile",
                  description: "Title while loading the selected business profile's claim preparation",
                }),
              })),
              (er[97] = e))
            : (e = er[97]),
          er[98] !== e3 || er[99] !== e7
            ? ((s = e3
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("p", {
                        role: "alert",
                        children: (0, t.jsx)(u.A, {
                          id: "businessProfiles.searchClaim.preparation.error",
                          defaultMessage: "Couldn’t load this business profile. Try again",
                          description:
                            "Error when checking the selected business profile's details and claim eligibility",
                        }),
                      }),
                      (0, t.jsx)(y.$, {
                        onClick: () => void e7(),
                        children: (0, t.jsx)(u.A, {
                          id: "businessProfiles.searchClaim.preparation.retry",
                          defaultMessage: "Try again",
                          description: "Retries loading the selected business profile",
                        }),
                      }),
                    ],
                  })
                : (0, t.jsx)(L.y, {})),
              (er[98] = e3),
              (er[99] = e7),
              (er[100] = s))
            : (s = er[100]),
          er[101] !== se || er[102] !== eF || er[103] !== eo || er[104] !== eM
            ? ((i = !eM && null == eo && (0, t.jsx)(y.$, { color: "secondary", onClick: se, children: eF })),
              (er[101] = se),
              (er[102] = eF),
              (er[103] = eo),
              (er[104] = eM),
              (er[105] = i))
            : (i = er[105]),
          er[106] !== se || er[107] !== l || er[108] !== s || er[109] !== i
            ? ((a = (0, t.jsxs)(K, { onClose: se, fullScreen: l, children: [e, s, i] })),
              (er[106] = se),
              (er[107] = l),
              (er[108] = s),
              (er[109] = i),
              (er[110] = a))
            : (a = er[110]),
          a
        )
      }
      let { profile: ss, business: si, verification: st, initialPreparation: sa, action: sl, flowType: sn } = e8,
        sr = ss?.claim_access,
        so = sr?.grant_id,
        sc = null != ss && null != so && (sr?.status === "eligible" || sr?.status === "claim_pending")
      er[111] !== ep ||
      er[112] !== so ||
      er[113] !== eZ.userId ||
      er[114] !== sc ||
      er[115] !== ef ||
      er[116] !== eL ||
      er[117] !== e4 ||
      er[118] !== ss ||
      er[119] !== e7
        ? ((ee = sc
            ? async () => {
                let e = eZ.userId,
                  s = () => {
                    let s = eJ.current
                    if (
                      (eY.current.signal.throwIfAborted(),
                      !e || !ep || s.isLoading || "chatgpt" !== s.authMethod || s.accountId !== ep || s.userId !== e)
                    )
                      throw Error("Business claim account changed")
                    return eY.current.signal
                  }
                s()
                try {
                  await (async function (e, s, i) {
                    let t = i.getAbortSignal()
                    t.throwIfAborted()
                    let a = await f.Request.safePost(
                      "/chat/frontend/v1/business-profiles/{business_profile_id}/claim-access/redeem",
                      {
                        parameters: { path: { business_profile_id: e } },
                        requestBody: { grant_id: s },
                        additionalHeaders: {
                          "x-openai-use-sheep": "1",
                          "ChatGPT-Account-ID": i.accountId,
                          [c.zBc]: i.accountId,
                        },
                        signal: t,
                        expectedErrorStatuses: [400, 403, 404, 409, 503],
                      },
                    )
                    if ((t.throwIfAborted(), a.business_profile_id !== e || !a.completed))
                      throw Error("Business profile claim is incomplete")
                  })(ss.business_profile_id, so, { accountId: ep, getAbortSignal: s })
                } catch (e) {
                  throw (s(), await e7(), e)
                }
                ;(s(), eL?.(), ef?.(), e4(ss.business_profile_id))
              }
            : void 0),
          (er[111] = ep),
          (er[112] = so),
          (er[113] = eZ.userId),
          (er[114] = sc),
          (er[115] = ef),
          (er[116] = eL),
          (er[117] = e4),
          (er[118] = ss),
          (er[119] = e7),
          (er[120] = ee))
        : (ee = er[120])
      let sd = ee
      if (null != ss && null != sr && "self_serve" !== sr.status && !sc) {
        let e
        return (
          er[121] !== se || er[122] !== eQ || er[123] !== ss
            ? ((e = (0, t.jsx)(G, { profile: ss, email: eQ, onClose: se })),
              (er[121] = se),
              (er[122] = eQ),
              (er[123] = ss),
              (er[124] = e))
            : (e = er[124]),
          e
        )
      }
      er[125] !== sl || er[126] !== si || er[127] !== sc || er[128] !== eS
        ? ((es = (e) =>
            (0, t.jsx)(O, {
              business: si,
              details: eS,
              claimLayout: sc || "claim" === sl || "dispute" === sl,
              verified: e,
            })),
          (er[125] = sl),
          (er[126] = si),
          (er[127] = sc),
          (er[128] = eS),
          (er[129] = es))
        : (es = er[129])
      let su = es
      if (!sc && "claim" !== sl && "dispute" !== sl) {
        let e, s, i, a, l, n
        er[130] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(C.L3, {
              children: (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.details.title",
                defaultMessage: "Business profile",
                description: "Title of the selected business profile's read-only details dialog",
              }),
            })),
            (er[130] = e))
          : (e = er[130])
        let r = ss?.is_verified ?? !1
        return (
          er[131] !== su || er[132] !== r ? ((s = su(r)), (er[131] = su), (er[132] = r), (er[133] = s)) : (s = er[133]),
          er[134] !== ss?.is_verified
            ? ((i = (0, t.jsx)(C.rr, {
                children: ss?.is_verified
                  ? (0, t.jsx)(u.A, {
                      id: "businessProfiles.searchClaim.claimed.ownerDescription",
                      defaultMessage: "This business profile is managed by another account",
                      description:
                        "Explanation in read-only details for an already-claimed business selected in Business Profile search. Ownership belongs to another account and no claim, dispute or access-request action is offered.",
                    })
                  : (0, t.jsx)(u.A, {
                      id: "businessProfiles.searchClaim.unavailable.description",
                      defaultMessage: "This business profile isn’t available to claim",
                      description:
                        "Status when server preparation does not allow the current account to claim a business profile",
                    }),
              })),
              (a =
                ss?.is_verified &&
                (0, t.jsx)(w.G, {
                  appearance: "button",
                  href: "https://help.openai.com/",
                  initiator: "external_link",
                  openTarget: "external-browser",
                  children: (0, t.jsx)(u.A, {
                    id: "businessProfiles.searchClaim.contactSupport",
                    defaultMessage: "Contact support",
                    description:
                      "Open the OpenAI Help Center when a claimed business profile has no available claim or dispute action.",
                  }),
                })),
              (er[134] = ss?.is_verified),
              (er[135] = i),
              (er[136] = a))
            : ((i = er[135]), (a = er[136])),
          er[137] !== se || er[138] !== eF
            ? ((l = (0, t.jsx)(y.$, { color: "secondary", onClick: se, children: eF })),
              (er[137] = se),
              (er[138] = eF),
              (er[139] = l))
            : (l = er[139]),
          er[140] !== se || er[141] !== s || er[142] !== i || er[143] !== a || er[144] !== l
            ? ((n = (0, t.jsxs)(K, { onClose: se, children: [e, s, i, a, l] })),
              (er[140] = se),
              (er[141] = s),
              (er[142] = i),
              (er[143] = a),
              (er[144] = l),
              (er[145] = n))
            : (n = er[145]),
          n
        )
      }
      let sp = "claim" === sn ? ez : void 0,
        sm = eM && !sc && "claim" === sn && ss?.ownership.current_request == null,
        sh = "claim" === sn ? ez : void 0,
        sf = null != e_ || (null != eA && "claim" === sn),
        sb = sc || "claim" !== sn || ss?.ownership.current_request != null ? void 0 : eA
      er[146] !== si || er[147] !== ss || er[148] !== eS
        ? ((ei = null != ss && null != eS ? (0, M.s)(ss, eS) : si),
          (er[146] = si),
          (er[147] = ss),
          (er[148] = eS),
          (er[149] = ei))
        : (ei = er[149])
      let sg = ss?.phone_destination,
        sy = sc ? "account" : (sa?.step ?? "account"),
        sx = sc ? void 0 : sa,
        sC =
          "dispute" === sn && ss?.ownership.current_request == null && ss?.dispute_access_verification_enabled === !1
            ? void 0
            : st.prepare
      return (
        er[150] !== e4 || er[151] !== eo || er[152] !== st
          ? ((et = (e) => {
              let s = st.getApprovedProfileId()
              s && (null == eo || s === eo) && e4(s, e)
            }),
            (er[150] = e4),
            (er[151] = eo),
            (er[152] = st),
            (er[153] = et))
          : (et = er[153]),
        er[154] !== eQ ||
        er[155] !== sC ||
        er[156] !== et ||
        er[157] !== st.cancel ||
        er[158] !== st.check ||
        er[159] !== st.checkDomain ||
        er[160] !== st.resend ||
        er[161] !== st.resume ||
        er[162] !== st.send ||
        er[163] !== st.sendEmail ||
        er[164] !== st.start ||
        er[165] !== st.startEmail ||
        er[166] !== st.verify
          ? ((ea = {
              email: eQ,
              onPrepareVerification: sC,
              onStartVerification: st.start,
              onStartEmailVerification: st.startEmail,
              onSendEmailCode: st.sendEmail,
              onSendCode: st.send,
              onResendCode: st.resend,
              onVerifyCode: st.verify,
              onCheckDomain: st.checkDomain,
              onCheckClaim: st.check,
              onResumeClaim: st.resume,
              onCancelClaim: st.cancel,
              onManageProfile: et,
            }),
            (er[154] = eQ),
            (er[155] = sC),
            (er[156] = et),
            (er[157] = st.cancel),
            (er[158] = st.check),
            (er[159] = st.checkDomain),
            (er[160] = st.resend),
            (er[161] = st.resume),
            (er[162] = st.send),
            (er[163] = st.sendEmail),
            (er[164] = st.start),
            (er[165] = st.startEmail),
            (er[166] = st.verify),
            (er[167] = ea))
          : (ea = er[167]),
        er[168] !== se ||
        er[169] !== sn ||
        er[170] !== su ||
        er[171] !== sd ||
        er[172] !== sh ||
        er[173] !== sf ||
        er[174] !== sb ||
        er[175] !== ei ||
        er[176] !== sg ||
        er[177] !== sy ||
        er[178] !== sx ||
        er[179] !== ea
          ? ((el = (0, t.jsx)(N.BusinessClaimFlow, {
              telemetryJourney: sh,
              flowType: sn,
              hideUnavailableMethods: sf,
              onBackToMatchPicker: sb,
              business: ei,
              verificationPhoneHint: sg,
              businessPreview: su,
              initialStep: sy,
              initialPreparation: sx,
              onRedeemClaim: sd,
              actions: ea,
              onClose: se,
            })),
            (er[168] = se),
            (er[169] = sn),
            (er[170] = su),
            (er[171] = sd),
            (er[172] = sh),
            (er[173] = sf),
            (er[174] = sb),
            (er[175] = ei),
            (er[176] = sg),
            (er[177] = sy),
            (er[178] = sx),
            (er[179] = ea),
            (er[180] = el))
          : (el = er[180]),
        er[181] !== si.name || er[182] !== se || er[183] !== sp || er[184] !== sm || er[185] !== el
          ? ((en = (0, t.jsx)(T.i, {
              telemetryJourney: sp,
              required: sm,
              businessName: si.name,
              onClose: se,
              children: el,
            })),
            (er[181] = si.name),
            (er[182] = se),
            (er[183] = sp),
            (er[184] = sm),
            (er[185] = el),
            (er[186] = en))
          : (en = er[186]),
        en
      )
    }
    function G(e) {
      let s,
        i,
        n,
        o,
        c,
        m,
        h,
        f,
        b,
        x,
        v,
        w,
        _,
        L,
        A,
        P,
        S,
        I,
        B,
        M,
        N,
        T,
        q,
        E = (0, a.c)(59),
        { profile: H, email: R, onClose: V } = e,
        D = (0, p.A)(),
        [O, z] = (0, d.useState)(!1),
        F = H.claim_access,
        $ = F?.status === "claimed",
        Z = `[Business Profile Claim Request] ${H.display_name} — ${H.business_profile_id}`
      E[0] !== $ ||
      E[1] !== R ||
      E[2] !== D ||
      E[3] !== H.business_profile_id ||
      E[4] !== H.display_name ||
      E[5] !== H.website_url
        ? ((s = D.formatMessage(
            {
              id: "businessProfiles.searchClaim.salesApproval.supportEmailBodyMultiline",
              defaultMessage:
                "I'd like to {request, select, access {request access to} other {claim}} this business profile.{lineBreak}Business: {businessName}{lineBreak}Business Profile ID: {profileId}{lineBreak}Website: {website}{lineBreak}Signed-in email: {email}{lineBreak}Account representative (optional): ",
              description:
                "Editable email draft opened by Contact customer support or copied from the email details on a protected Business Profile claim screen. request is access for a profile someone else has claimed, or claim otherwise. businessName and profileId identify the selected canonical business; website and the user's signed-in email may be blank. lineBreak inserts a newline between the fields; preserve these separators and leave space for an optional account representative. The user reviews and sends the email.",
            },
            {
              request: $ ? "access" : "claim",
              businessName: H.display_name,
              profileId: H.business_profile_id,
              website: H.website_url ?? "",
              email: R ?? "",
              lineBreak: "\n",
            },
          )),
          (E[0] = $),
          (E[1] = R),
          (E[2] = D),
          (E[3] = H.business_profile_id),
          (E[4] = H.display_name),
          (E[5] = H.website_url),
          (E[6] = s))
        : (s = E[6])
      let G = s,
        Q = `mailto:business-hub-support@openai.com?subject=${encodeURIComponent(Z)}&body=${encodeURIComponent(G)}`
      return (
        E[7] !== H.logo_url
          ? ((i = H.logo_url ? ((0, k.ex)(H.logo_url) ?? null) : null), (E[7] = H.logo_url), (E[8] = i))
          : (i = E[8]),
        E[9] !== H.display_name || E[10] !== i
          ? ((n = (0, t.jsx)("div", {
              className: "size-full overflow-hidden rounded-2xl [&_img]:object-contain",
              children: (0, t.jsx)(g.e, { alt: "", name: H.display_name, src: i, size: "fill", shape: "none" }),
            })),
            (E[9] = H.display_name),
            (E[10] = i),
            (E[11] = n))
          : (n = E[11]),
        E[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("span", {
              className:
                "absolute -end-4 -bottom-4 flex size-9.5 items-center justify-center rounded-lg border-3 border-surface bg-surface-tertiary max-sm:-end-2.5 max-sm:size-8 max-sm:border-0",
              children: (0, t.jsx)(j.I, { asset: l }),
            })),
            (E[12] = o))
          : (o = E[12]),
        E[13] !== n
          ? ((c = (0, t.jsxs)("div", { className: "relative size-18 shrink-0", "aria-hidden": !0, children: [n, o] })),
            (E[13] = n),
            (E[14] = c))
          : (c = E[14]),
        E[15] !== $
          ? ((m =
              $ &&
              (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.claimedTitle",
                defaultMessage: "This business is already claimed",
                description:
                  "Title shown to a person who cannot manage a protected Business Profile because someone else claimed it. Support can help them request access; no dispute action is offered.",
              })),
            (E[15] = $),
            (E[16] = m))
          : (m = E[16]),
        E[17] !== $ || E[18] !== H.display_name
          ? ((h =
              !$ &&
              (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.supportTitle",
                defaultMessage: "To claim {businessName}, please contact support",
                description:
                  "Centered headline in the protected Business Profile claim dialog, shown when the signed-in person needs help from support. businessName is the canonical business's display name. Allow the headline to wrap on narrow screens.",
                values: { businessName: H.display_name },
              })),
            (E[17] = $),
            (E[18] = H.display_name),
            (E[19] = h))
          : (h = E[19]),
        E[20] !== m || E[21] !== h
          ? ((f = (0, t.jsxs)(C.L3, { className: "title-ncVNVj", children: [m, h] })),
            (E[20] = m),
            (E[21] = h),
            (E[22] = f))
          : (f = E[22]),
        E[23] !== F?.status
          ? ((b =
              F?.status === "locked" &&
              (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.supportBody",
                defaultMessage: "Our team will guide you through next steps.",
                description:
                  "Reassuring supporting sentence below the headline asking the signed-in person to contact support to claim a protected Business Profile. Shown above the Contact support action.",
              })),
            (E[23] = F?.status),
            (E[24] = b))
          : (b = E[24]),
        E[25] !== $
          ? ((x =
              $ &&
              (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.claimedBody",
                defaultMessage: "Our team can help you request access to this business",
                description:
                  "Body below This business is already claimed on a protected Business Profile dialog. Explains that the person can contact customer support to request access instead of starting a dispute.",
              })),
            (E[25] = $),
            (E[26] = x))
          : (x = E[26]),
        E[27] !== $ || E[28] !== F?.status
          ? ((v =
              F?.status !== "locked" &&
              !$ &&
              (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.supportStatus",
                defaultMessage:
                  "{status, select, expired {This approval has expired. Contact your Sales representative for a new link} revoked {This approval is no longer available. Contact your Sales representative} wrong_identity {This approval isn’t available to your signed-in account. Sign in with the approved account or contact your Sales representative} claimed {This business is already claimed} other {This business requires approval from Sales before it can be claimed}}",
                description:
                  "Status in the protected Business Profile support screen. The status value distinguishes expired or revoked approval, a different signed-in account, an already-claimed business, or a locked business requiring Sales approval.",
                values: { status: F?.status ?? "locked" },
              })),
            (E[27] = $),
            (E[28] = F?.status),
            (E[29] = v))
          : (v = E[29]),
        E[30] !== x || E[31] !== v || E[32] !== b
          ? ((w = (0, t.jsxs)(C.rr, { className: "description-Lq6hV8", children: [b, x, v] })),
            (E[30] = x),
            (E[31] = v),
            (E[32] = b),
            (E[33] = w))
          : (w = E[33]),
        E[34] !== w || E[35] !== f
          ? ((_ = (0, t.jsxs)("div", { className: "copy-o7B_zP", children: [f, w] })),
            (E[34] = w),
            (E[35] = f),
            (E[36] = _))
          : (_ = E[36]),
        E[37] !== _ || E[38] !== c
          ? ((L = (0, t.jsxs)("div", { className: "hero-i8UHqK", children: [c, _] })),
            (E[37] = _),
            (E[38] = c),
            (E[39] = L))
          : (L = E[39]),
        E[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, r.A)("w-full max-sm:min-h-13.5", "supportAction-HTbeF2")), (E[40] = A))
          : (A = E[40]),
        E[41] === Symbol.for("react.memo_cache_sentinel") ? ((P = () => z(!0)), (E[41] = P)) : (P = E[41]),
        E[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, t.jsx)("span", {
              className: "hidden sm:inline",
              children: (0, t.jsx)(u.A, {
                id: "businessProfiles.searchClaim.salesApproval.contactSupportDesktop",
                defaultMessage: "Contact support",
                description:
                  "Desktop button opening an editable email to Business Hub support from the protected Business Profile dialog. The user reviews and sends the draft. Short action label.",
              }),
            })),
            (E[42] = S))
          : (S = E[42]),
        E[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, t.jsxs)("span", {
              className: "actionLabel-KdbuXZ",
              children: [
                S,
                (0, t.jsx)("span", {
                  className: "sm:hidden",
                  children: (0, t.jsx)(u.A, {
                    id: "businessProfiles.searchClaim.salesApproval.contactSupport",
                    defaultMessage: "Contact customer support",
                    description:
                      "Opens an email draft to Business Hub support with the selected business profile's details. The user sends the draft.",
                  }),
                }),
              ],
            })),
            (E[43] = I))
          : (I = E[43]),
        E[44] !== Q
          ? ((B = (0, t.jsx)(y.z, {
              color: "outlineGhost",
              size: "formAction",
              className: A,
              href: Q,
              onClick: P,
              children: I,
            })),
            (E[44] = Q),
            (E[45] = B))
          : (B = E[45]),
        E[46] !== O || E[47] !== G || E[48] !== Z
          ? ((M = O && (0, t.jsx)(U, { address: "business-hub-support@openai.com", subject: Z, body: G })),
            (E[46] = O),
            (E[47] = G),
            (E[48] = Z),
            (E[49] = M))
          : (M = E[49]),
        E[50] !== B || E[51] !== M
          ? ((N = (0, t.jsxs)("div", { className: "actions-pyAfR6", children: [B, M] })),
            (E[50] = B),
            (E[51] = M),
            (E[52] = N))
          : (N = E[52]),
        E[53] !== L || E[54] !== N
          ? ((T = (0, t.jsxs)("div", { className: "form-TdoL97", children: [L, N] })),
            (E[53] = L),
            (E[54] = N),
            (E[55] = T))
          : (T = E[55]),
        E[56] !== V || E[57] !== T
          ? ((q = (0, t.jsx)(K, { fullScreen: !0, onClose: V, children: T })), (E[56] = V), (E[57] = T), (E[58] = q))
          : (q = E[58]),
        q
      )
    }
    function U(e) {
      let s,
        i,
        l,
        n,
        r,
        o,
        c,
        m,
        h,
        f,
        b,
        g,
        C,
        v,
        w,
        j,
        _,
        L,
        P,
        k,
        S,
        B,
        M,
        N,
        T,
        q = (0, a.c)(60),
        { address: E, subject: H, body: R } = e,
        V = (0, p.A)(),
        D = (0, d.useId)(),
        [O, z] = (0, d.useState)(!1),
        [F, $] = (0, d.useState)(!1)
      ;(q[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, t.jsx)(u.A, {
            id: "businessProfiles.searchClaim.salesApproval.supportEmail.recipient.label",
            defaultMessage: "To",
            description:
              "Short label for the read-only recipient address in the expanded email details on a protected Business Profile support screen. The person can copy this address into their own email app.",
          })),
          (q[0] = s))
        : (s = q[0]),
        q[1] !== V
          ? ((i = V.formatMessage({
              id: "businessProfiles.searchClaim.salesApproval.supportEmail.recipient.copyLabel",
              defaultMessage: "Copy email address",
              description:
                "Accessible name for the Copy button beside the support email recipient in the expanded details on a protected Business Profile support screen. Copies only the recipient address; short action label.",
            })),
            (q[1] = V),
            (q[2] = i))
          : (i = q[2]),
        q[3] !== E || q[4] !== i
          ? ((l = { name: "to", value: E, label: s, copyLabel: i }), (q[3] = E), (q[4] = i), (q[5] = l))
          : (l = q[5]),
        q[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(u.A, {
              id: "businessProfiles.searchClaim.salesApproval.supportEmail.subject.label",
              defaultMessage: "Subject",
              description:
                "Short label for the read-only email subject in the expanded details on a protected Business Profile support screen. The subject identifies the business and its claim request and can be copied into an email app.",
            })),
            (q[6] = n))
          : (n = q[6]),
        q[7] !== V
          ? ((r = V.formatMessage({
              id: "businessProfiles.searchClaim.salesApproval.supportEmail.subject.copyLabel",
              defaultMessage: "Copy subject",
              description:
                "Accessible name for the Copy button beside the email subject in the expanded details on a protected Business Profile support screen. Copies only the complete subject; short action label.",
            })),
            (q[7] = V),
            (q[8] = r))
          : (r = q[8]),
        q[9] !== H || q[10] !== r
          ? ((o = { name: "subject", value: H, label: n, copyLabel: r }), (q[9] = H), (q[10] = r), (q[11] = o))
          : (o = q[11]),
        q[12] !== l || q[13] !== o ? ((c = [l, o]), (q[12] = l), (q[13] = o), (q[14] = c)) : (c = q[14]))
      let Z = c
      q[15] !== V
        ? ((m = V.formatMessage({
            id: "businessProfiles.searchClaim.salesApproval.supportEmail.message.copyLabel",
            defaultMessage: "Copy message",
            description:
              "Button in the expanded email details on a protected Business Profile support screen. Copies only the email message body, preserving its line breaks; the recipient and subject have separate Copy buttons. Short action label.",
          })),
          (q[15] = V),
          (q[16] = m))
        : (m = q[16])
      let G = m
      q[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = async (e, s) => {
            let i = await (0, I.E)(e, s)
            return ($(!i), i)
          }),
          (q[17] = h))
        : (h = q[17])
      let U = h
      ;(q[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, t.jsx)("h2", {
            className: "font-medium",
            children: (0, t.jsx)(u.A, {
              id: "businessProfiles.searchClaim.salesApproval.supportEmail.title",
              defaultMessage: "Email app didn’t open?",
              description:
                "Heading shown after Contact support on a protected Business Profile screen. Introduces an optional disclosure with email details for people whose email app did not open. Short, reassuring question; no placeholders.",
            }),
          })),
          (q[18] = f))
        : (f = q[18]),
        q[19] !== O
          ? ((b = () => z(!O)),
            (g = O
              ? (0, t.jsx)(u.A, {
                  id: "businessProfiles.searchClaim.salesApproval.supportEmail.hide",
                  defaultMessage: "Hide email details",
                  description:
                    "Button that collapses the recipient, subject and message on a protected Business Profile support screen after Contact support. The alternative when collapsed is Show email details. Short action label.",
                })
              : (0, t.jsx)(u.A, {
                  id: "businessProfiles.searchClaim.salesApproval.supportEmail.show",
                  defaultMessage: "Show email details",
                  description:
                    "Button that expands copyable recipient, subject and message details on a protected Business Profile support screen after Contact support. Used when the person's email app did not open. The alternative when expanded is Hide email details. Short action label.",
                })),
            (q[19] = O),
            (q[20] = b),
            (q[21] = g))
          : ((b = q[20]), (g = q[21])),
        q[22] !== D || q[23] !== O || q[24] !== b || q[25] !== g
          ? ((C = (0, t.jsxs)("div", {
              className: "flex flex-col items-center gap-2",
              children: [
                f,
                (0, t.jsx)(y.$, {
                  type: "button",
                  color: "ghost",
                  size: "dialog",
                  "aria-expanded": O,
                  "aria-controls": D,
                  onClick: b,
                  children: g,
                }),
              ],
            })),
            (q[22] = D),
            (q[23] = O),
            (q[24] = b),
            (q[25] = g),
            (q[26] = C))
          : (C = q[26]))
      let K = !O
      q[27] !== D || q[28] !== Z
        ? ((v = Z.map((e) =>
            (0, t.jsxs)(
              "div",
              {
                className: "flex flex-col gap-2",
                children: [
                  (0, t.jsx)("label", { htmlFor: `${D}-${e.name}`, className: "font-medium", children: e.label }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, t.jsx)(A.pd, { id: `${D}-${e.name}`, variant: "onboarding", value: e.value, readOnly: !0 }),
                      (0, t.jsx)(x.i, {
                        ariaLabel: e.copyLabel,
                        buttonText: !0,
                        showIcon: !1,
                        onCopy: (s) => U(e.value, s),
                        renderButton: J,
                      }),
                    ],
                  }),
                ],
              },
              e.name,
            ),
          )),
          (q[27] = D),
          (q[28] = Z),
          (q[29] = v))
        : (v = q[29])
      let Y = `${D}-message`
      ;(q[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, t.jsx)(u.A, {
            id: "businessProfiles.searchClaim.salesApproval.supportEmail.message.label",
            defaultMessage: "Message",
            description:
              "Short label above the read-only email body in the expanded details on a protected Business Profile support screen. The person can select this text or copy it into their email app.",
          })),
          (q[30] = w))
        : (w = q[30]),
        q[31] !== Y
          ? ((j = (0, t.jsx)("label", { htmlFor: Y, className: "font-medium", children: w })), (q[31] = Y), (q[32] = j))
          : (j = q[32]),
        q[33] !== R ? ((_ = (e) => U(R, e)), (q[33] = R), (q[34] = _)) : (_ = q[34]),
        q[35] !== G || q[36] !== _
          ? ((L = (0, t.jsx)(x.i, { ariaLabel: G, buttonText: G, showIcon: !1, onCopy: _, renderButton: Q })),
            (q[35] = G),
            (q[36] = _),
            (q[37] = L))
          : (L = q[37]),
        q[38] !== j || q[39] !== L
          ? ((P = (0, t.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [j, L] })),
            (q[38] = j),
            (q[39] = L),
            (q[40] = P))
          : (P = q[40]))
      let W = `${D}-message`
      return (
        q[41] !== R || q[42] !== W
          ? ((k = (0, t.jsx)(A.TM, {
              id: W,
              name: "business-profile-support-message",
              variant: "outlined",
              value: R,
              rows: 7,
              readOnly: !0,
            })),
            (q[41] = R),
            (q[42] = W),
            (q[43] = k))
          : (k = q[43]),
        q[44] !== P || q[45] !== k
          ? ((S = (0, t.jsxs)("div", { className: "flex flex-col gap-2", children: [P, k] })),
            (q[44] = P),
            (q[45] = k),
            (q[46] = S))
          : (S = q[46]),
        q[47] !== F
          ? ((B =
              F &&
              (0, t.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, t.jsx)(u.A, {
                  id: "businessProfiles.searchClaim.salesApproval.supportEmail.copyFailed",
                  defaultMessage: "Couldn’t copy. Select the text and copy it manually.",
                  description:
                    "Recovery guidance in the expanded email details on a protected Business Profile support screen after copying a recipient, subject or message fails. The read-only fields remain selectable so the person can copy manually. Plain text; no placeholders.",
                }),
              })),
            (q[47] = F),
            (q[48] = B))
          : (B = q[48]),
        q[49] !== v || q[50] !== S || q[51] !== B
          ? ((M = (0, t.jsxs)("div", { className: "flex flex-col gap-4", children: [v, S, B] })),
            (q[49] = v),
            (q[50] = S),
            (q[51] = B),
            (q[52] = M))
          : (M = q[52]),
        q[53] !== D || q[54] !== K || q[55] !== M
          ? ((N = (0, t.jsx)("div", {
              id: D,
              hidden: K,
              className: "rounded-xl border border-default p-4",
              children: M,
            })),
            (q[53] = D),
            (q[54] = K),
            (q[55] = M),
            (q[56] = N))
          : (N = q[56]),
        q[57] !== C || q[58] !== N
          ? ((T = (0, t.jsxs)("div", {
              className: "flex w-full flex-col gap-3 text-sm select-text",
              children: [C, N],
            })),
            (q[57] = C),
            (q[58] = N),
            (q[59] = T))
          : (T = q[59]),
        T
      )
    }
    function Q(e) {
      return (0, t.jsx)(y.$, { ...e, color: "primary", size: "dialog" })
    }
    function J(e) {
      return (0, t.jsx)(y.$, { ...e, color: "outlineGhost", size: "actionSm" })
    }
    function K(e) {
      let s,
        i,
        l,
        n = (0, a.c)(23),
        { children: r, onClose: o, fullScreen: c } = e,
        d = (0, p.A)()
      if (void 0 !== c && c) {
        let e, s, i, a, l, c, p, m
        return (
          n[0] !== d
            ? ((e = d.formatMessage({
                id: "chatgpt.localBusiness.claim.backToChat",
                defaultMessage: "Back to ChatGPT",
                description: "Closes the business claim flow and returns to the conversation",
              })),
              (n[0] = d),
              (n[1] = e))
            : (e = n[1]),
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, t.jsx)(_.pgK, { className: "sm:hidden" })),
              (i = (0, t.jsx)(_.KBq, { className: "hidden sm:block" })),
              (n[2] = s),
              (n[3] = i))
            : ((s = n[2]), (i = n[3])),
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, t.jsx)("span", {
                className: "hidden sm:block",
                children: (0, t.jsx)(u.A, {
                  id: "chatgpt.localBusiness.claim.chatgpt",
                  defaultMessage: "ChatGPT",
                  description: "Product name beside the back chevron in the business claim page header",
                }),
              })),
              (n[4] = a))
            : (a = n[4]),
          n[5] !== o || n[6] !== e
            ? ((l = (0, t.jsx)("div", {
                className: "absolute start-3 top-3 z-10",
                children: (0, t.jsxs)(y.$, {
                  type: "button",
                  size: "dialogGhost",
                  color: "ghostActive",
                  onClick: o,
                  "aria-label": e,
                  children: [s, i, a],
                }),
              })),
              (n[5] = o),
              (n[6] = e),
              (n[7] = l))
            : (l = n[7]),
          n[8] !== r
            ? ((c = (0, t.jsx)("div", { className: "content-n9UX27", children: r })), (n[8] = r), (n[9] = c))
            : (c = n[9]),
          n[10] !== l || n[11] !== c
            ? ((p = (0, t.jsxs)("div", { className: "body-q0ysup", children: [l, c] })),
              (n[10] = l),
              (n[11] = c),
              (n[12] = p))
            : (p = n[12]),
          n[13] !== o || n[14] !== p
            ? ((m = (0, t.jsx)(V.d, { modal: !0, personaActive: !1, closeDisabled: !1, onClose: o, children: p })),
              (n[13] = o),
              (n[14] = p),
              (n[15] = m))
            : (m = n[15]),
          m
        )
      }
      return (
        n[16] !== o
          ? ((s = (e) => {
              e || o()
            }),
            (n[16] = o),
            (n[17] = s))
          : (s = n[17]),
        n[18] !== r
          ? ((i = (0, t.jsx)(v.R4, { children: (0, t.jsx)("div", { className: "flex flex-col gap-4", children: r }) })),
            (n[18] = r),
            (n[19] = i))
          : (i = n[19]),
        n[20] !== s || n[21] !== i
          ? ((l = (0, t.jsx)(C.lG, { open: !0, onOpenChange: s, children: i })), (n[20] = s), (n[21] = i), (n[22] = l))
          : (l = n[22]),
        l
      )
    }
  },
  ISnH(e, s, i) {
    let t = (0, i("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4961 2C14.8768 2 15.9961 3.11929 15.9961 4.5V6.47461H19.5C20.8807 6.47461 22 7.5939 22 8.97461V18.9746C22 20.6315 20.6569 21.9746 19 21.9746H15.2168C15.1457 21.9906 15.072 22 14.9961 22C14.9202 22 14.8465 21.9906 14.7754 21.9746H9.2168C9.14573 21.9906 9.072 22 8.99609 22C8.92019 22 8.84646 21.9906 8.77539 21.9746H5C3.34315 21.9746 2 20.6315 2 18.9746V13.4746C2 12.0939 3.11929 10.9746 4.5 10.9746H7.99609V4.5C7.99609 3.11929 9.11538 2 10.4961 2H13.4961ZM15.9961 19.9746H19C19.5523 19.9746 20 19.5269 20 18.9746V8.97461C20 8.69847 19.7761 8.47461 19.5 8.47461H15.9961V19.9746ZM10.4961 4C10.22 4 9.99609 4.22386 9.99609 4.5V19.9746H13.9961V4.5C13.9961 4.22386 13.7722 4 13.4961 4H10.4961ZM4.5 12.9746C4.22386 12.9746 4 13.1985 4 13.4746V18.9746C4 19.5269 4.44772 19.9746 5 19.9746H7.99609V12.9746H4.5Z" fill="currentColor"/>',
    })
    i.d(s, {}, { w: t })
  },
  yGRq(e, s, i) {
    let t = (0, i("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.97371 12.9403C5.51883 12.2243 6.61307 12.2244 7.15828 12.9403L7.26667 13.1044L8.09089 14.5672L9.73933 14.9003C10.7908 15.113 11.2065 16.3935 10.4805 17.1835L9.34285 18.4208L9.53621 20.0897C9.65934 21.1557 8.56966 21.9471 7.59382 21.5008L6.0655 20.8016L4.53816 21.5008C3.56223 21.9474 2.47353 21.1559 2.59675 20.0897L2.78914 18.4208L1.65242 17.1835C0.926028 16.3933 1.34154 15.1126 2.39363 14.9003L4.04109 14.5672L4.86628 13.1044L4.97371 12.9403ZM5.64363 15.7987C5.44711 16.1473 5.10811 16.3932 4.71589 16.4725L3.87117 16.6424L4.45417 17.2772C4.72485 17.5718 4.85447 17.9696 4.80867 18.3671L4.70906 19.2225L5.49324 18.8651L5.63191 18.8104C5.91394 18.7167 6.21905 18.7166 6.50105 18.8104L6.63972 18.8651L7.42292 19.2225L7.32429 18.3671C7.27846 17.9694 7.40788 17.5719 7.67878 17.2772L8.26082 16.6424L7.41707 16.4725C7.02473 16.3934 6.68598 16.1473 6.48933 15.7987L6.06648 15.0477L5.64363 15.7987Z" fill="currentColor"/> <path d="M21.0001 16.0145C21.5524 16.0145 22.0001 16.4622 22.0001 17.0145C22.0001 17.5668 21.5524 18.0145 21.0001 18.0145H13.0001C12.4478 18.0145 12.0001 17.5668 12.0001 17.0145C12.0001 16.4622 12.4478 16.0145 13.0001 16.0145H21.0001Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.97371 2.9237C5.51883 2.20768 6.61307 2.20778 7.15828 2.9237L7.26667 3.08776L8.09089 4.55065L9.73933 4.88366C10.7908 5.09638 11.2065 6.37687 10.4805 7.16686L9.34285 8.40416L9.53621 10.0731C9.65934 11.1391 8.56966 11.9305 7.59382 11.4842L6.0655 10.785L4.53816 11.4842C3.56223 11.9308 2.47353 11.1393 2.59675 10.0731L2.78914 8.40416L1.65242 7.16686C0.926028 6.37671 1.34154 5.09597 2.39363 4.88366L4.04109 4.55065L4.86628 3.08776L4.97371 2.9237ZM5.64363 5.78209C5.44711 6.13069 5.10811 6.37661 4.71589 6.45592L3.87117 6.62584L4.45417 7.26061C4.72485 7.55524 4.85447 7.95299 4.80867 8.35045L4.70906 9.20592L5.49324 8.8485L5.63191 8.79381C5.91394 8.70014 6.21905 8.7 6.50105 8.79381L6.63972 8.8485L7.42292 9.20592L7.32429 8.35045C7.27846 7.95282 7.40788 7.55529 7.67878 7.26061L8.26082 6.62584L7.41707 6.45592C7.02473 6.37676 6.68598 6.13067 6.48933 5.78209L6.06648 5.03112L5.64363 5.78209Z" fill="currentColor"/> <path d="M21.0001 5.99791C21.5524 5.99791 22.0001 6.44563 22.0001 6.99791C22.0001 7.5502 21.5524 7.99791 21.0001 7.99791H13.0001C12.4478 7.99791 12.0001 7.5502 12.0001 6.99791C12.0001 6.44563 12.4478 5.99791 13.0001 5.99791H21.0001Z" fill="currentColor"/>',
    })
    i.d(s, {}, { T: t })
  },
  xywu(e, s, i) {
    let t = (0, i("iJY0").a)({
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
      body: '<path d="M14.5628 8.46268C14.8702 8.00419 15.4918 7.88116 15.9505 8.18827C16.4092 8.4958 16.5314 9.11724 16.2239 9.57596L12.0686 15.7752C11.6202 16.444 10.6658 16.5201 10.1165 15.9314L7.8743 13.5291C7.49791 13.1254 7.51979 12.4927 7.92313 12.116C8.32691 11.7393 8.96043 11.7612 9.33719 12.1648L10.9329 13.8758L14.5628 8.46268Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87821 2.45682C11.0497 1.28521 12.9499 1.28524 14.1214 2.45682L15.1966 3.53202C15.3841 3.71923 15.6387 3.82401 15.9036 3.82401H17.1751C18.8317 3.82418 20.1748 5.16749 20.1751 6.82401V8.09647C20.1752 8.36148 20.2807 8.61612 20.4681 8.8035L21.5432 9.87772C22.7145 11.0492 22.7146 12.9494 21.5432 14.1209L20.4681 15.1961C20.2805 15.3836 20.1751 15.638 20.1751 15.9031V17.2478C20.1748 18.9043 18.8317 20.2477 17.1751 20.2478H15.889C15.6606 20.2479 15.4405 20.326 15.264 20.4676L15.1907 20.532L14.096 21.6014C12.9306 22.7389 11.0701 22.7387 9.90458 21.6014L8.79422 20.5174C8.61187 20.3394 8.36825 20.2378 8.11356 20.2332L6.77176 20.2098C5.13602 20.1807 3.82461 18.8457 3.8245 17.2098V15.9031C3.8245 15.6382 3.71971 15.3836 3.53251 15.1961L2.45731 14.1209C1.2857 12.9493 1.28573 11.0492 2.45731 9.87772L3.53251 8.8035C3.71987 8.61611 3.82433 8.36145 3.8245 8.09647V6.82401C3.82476 5.16754 5.16802 3.82427 6.8245 3.82401H8.09696C8.36194 3.82385 8.6166 3.71939 8.80399 3.53202L9.87821 2.45682ZM12.7073 3.87088C12.3169 3.48043 11.6837 3.48052 11.2932 3.87088L10.2181 4.94608C9.65559 5.50852 8.89237 5.82385 8.09696 5.82401H6.8245C6.27259 5.82427 5.82476 6.2721 5.8245 6.82401V8.09647C5.82433 8.89188 5.50901 9.6551 4.94657 10.2176L3.87137 11.2928C3.481 11.6832 3.48092 12.3164 3.87137 12.7068L4.94657 13.782C5.50882 14.3446 5.8245 15.1077 5.8245 15.9031V17.2098C5.82461 17.755 6.26189 18.1999 6.80692 18.2098L8.14969 18.2332C8.91403 18.247 9.64469 18.5527 10.1917 19.0867L11.3011 20.1697C11.6896 20.5488 12.3101 20.5489 12.6985 20.1697L13.7932 19.1014L14.013 18.907C14.543 18.4821 15.2041 18.2479 15.889 18.2478H17.1751C17.7271 18.2477 18.1748 17.7998 18.1751 17.2478V15.9031C18.1751 15.1075 18.4914 14.3446 19.054 13.782L20.1282 12.7068C20.5186 12.3164 20.5185 11.6833 20.1282 11.2928L19.054 10.2176C18.4915 9.65508 18.1752 8.89189 18.1751 8.09647V6.82401C18.1748 6.27204 17.7271 5.82418 17.1751 5.82401H15.9036C15.1082 5.82401 14.3451 5.50833 13.7825 4.94608L12.7073 3.87088Z" fill="currentColor"/>',
    })
    i.d(s, {}, { G: t })
  },
}
//# sourceMappingURL=990732.0567c74cd2.js.map
