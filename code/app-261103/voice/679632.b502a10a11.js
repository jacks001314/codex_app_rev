export const __rspack_esm_ids = [679632]
export const __webpack_modules__ = {
  emVg(e, t, i) {
    var a = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 21,
          height: 20,
          viewBox: "0 0 21 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M11.2878 9.46029L11.4421 9.49545L17.8913 11.43L18.0642 11.4974C18.8215 11.8649 18.8705 12.9544 18.1491 13.388L17.9821 13.4701L15.1872 14.5872L14.07 17.3822C13.7134 18.2734 12.4912 18.2756 12.0974 17.4642L12.03 17.2913L10.0954 10.8421C9.8634 10.0687 10.5245 9.34418 11.2878 9.46029ZM13.0984 16.2288L13.9929 13.9954L14.0388 13.8949C14.1579 13.6675 14.3549 13.4891 14.5954 13.3929L16.8288 12.4984L11.5007 10.9007L13.0984 16.2288ZM6.50362 12.9749C6.76326 12.7153 7.18434 12.7154 7.44405 12.9749C7.70375 13.2346 7.70375 13.6557 7.44405 13.9154L5.67648 15.6829C5.41678 15.9426 4.99574 15.9426 4.73605 15.6829C4.47652 15.4232 4.4764 15.0022 4.73605 14.7425L6.50362 12.9749ZM3.43722 7.3265L5.85226 7.97299L5.97823 8.02084C6.25482 8.1591 6.40594 8.47712 6.32296 8.78744C6.23981 9.09774 5.94995 9.298 5.64132 9.27963L5.50851 9.25814L3.09347 8.61068L2.96749 8.56283C2.6908 8.42452 2.53958 8.10666 2.62276 7.79623C2.70597 7.4859 2.99571 7.28652 3.3044 7.30502L3.43722 7.3265ZM15.447 4.05111C15.7051 3.88059 16.0556 3.90894 16.2829 4.13607C16.5426 4.39577 16.5426 4.8168 16.2829 5.0765L14.5153 6.84408C14.2556 7.10378 13.8346 7.10378 13.5749 6.84408C13.3154 6.58437 13.3153 6.16329 13.5749 5.90365L15.3425 4.13607L15.447 4.05111ZM8.3962 2.02279C8.75096 1.92773 9.1156 2.13874 9.21065 2.49349L9.85812 4.90853L9.8796 5.04135C9.89797 5.34998 9.69771 5.63984 9.38741 5.72299C9.07711 5.80592 8.75905 5.65484 8.62081 5.37826L8.57296 5.25228L7.92648 2.83724L7.90499 2.70443C7.8865 2.39577 8.08593 2.10603 8.3962 2.02279Z",
            fill: "currentColor",
          }),
        })))
  },
  QLhf(e, t, i) {
    var a = i("f4th"),
      r = i("kfGJ"),
      n = i("NF58")
    i.d(
      t,
      {},
      {
        p: async function ({ hostId: e, projectId: t, prompt: i, workspaceRoots: o }) {
          if (e === r.fI && null != t) {
            let e = await (0, a.q)({ projectId: t, prompt: i })
            if (null == e) throw Error("Unknown local project")
            return e
          }
          let s = await (0, n.fO)(o, { hostId: e, prompt: i })
          return e === r.fI || null == t || null == s.cwd
            ? s
            : { ...s, projectAssignment: { projectKind: "remote", projectId: t, hostId: e } }
        },
      },
    )
  },
  BqvN(e, t, i) {
    i.d(t, { x: () => Q, c: () => J })
    var a = i("QosV"),
      r = i("zTeN"),
      n = i("DBCl"),
      o = i("Wf1j"),
      s = i("HZfM"),
      l = i("ChYf"),
      c = i("SGsN"),
      d = i("fj7z"),
      u = i("kXFg"),
      p = i("X6Vn"),
      m = i("ABep"),
      h = i("irkb"),
      f = i("fA1m"),
      g = i("zd8w"),
      v = i("oyxz"),
      x = i("sT8g"),
      b = i("nDjx"),
      y = i("uNjk"),
      w = i("g2p6"),
      A = i("ygO2"),
      j = i("JNtf"),
      E = i("mUDD"),
      _ = i("RNul"),
      S = i("F0xz"),
      C = i("wwME"),
      N = i("an0a"),
      R = i("OWtl"),
      T = i("RxZZ"),
      V = i("AWNZ"),
      I = i("ZEx5"),
      k = i("OMIV"),
      O = i("Z908"),
      M = i("ku2f"),
      L = i("CZ9G"),
      P = i("i663"),
      D = i("RJ8K")
    let U = (0, f.h)()
    function z(e) {
      let t,
        i,
        n,
        s,
        l,
        c,
        d,
        u,
        p,
        f,
        b,
        w,
        A = (0, a.c)(42),
        {
          sourceComposerScope: _,
          entryPoint: S,
          initialStep: V,
          onClose: I,
          originPath: k,
          request: M,
          workHomePolicyAcceptance: L,
        } = e,
        P = void 0 === V ? 0 : V,
        D = (0, r.gh)(R.u),
        { hostId: z } = (0, N.K5)(),
        { platform: $ } = (0, C.V)(),
        H = "macOS" === $,
        G = (0, r._U)(x.lN, z),
        W = (0, h.jE)(),
        [X, K] = (0, g.useState)(P),
        [Y, q] = (0, g.useState)(null),
        [Q, J] = (0, g.useState)(!1),
        ee = (0, g.useRef)(P >= 1),
        et = (0, g.useRef)(!0),
        ei = (0, o.A)()
      A[0] !== z || A[1] !== W || A[2] !== D
        ? ((t = async (e, t) => {
            let i = void 0 !== t && t
            ;(q(e),
              J(!1),
              await (async () => {
                try {
                  if (i && !(await (0, x.MX)({ scope: D, hostId: z, queryClient: W }))) return
                  ;(D.set(y.L, !0), await (0, T.gc)(D, U.screenContextEnabled, e))
                } catch {
                  J(!0)
                }
              })().finally(() => {
                q(null)
              }))
          }),
          (A[0] = z),
          (A[1] = W),
          (A[2] = D),
          (A[3] = t))
        : (t = A[3])
      let ea = t
      A[4] !== H || A[5] !== ea
        ? ((i = () => {
            H ? (K(1), ee.current || ((ee.current = !0), ea(!0, !0))) : K(2)
          }),
          (A[4] = H),
          (A[5] = ea),
          (A[6] = i))
        : (i = A[6])
      let er = i
      A[7] !== I
        ? ((n = () => {
            ;((et.current = !1), I())
          }),
          (A[7] = I),
          (A[8] = n))
        : (n = A[8])
      let en = n
      return (
        A[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { "aria-describedby": void 0 }), (A[9] = s))
          : (s = A[9]),
        A[10] !== ei
          ? ((l = ei.formatMessage({
              id: "realtimeVoice.onboarding.close",
              defaultMessage: "Close voice chat setup",
              description: "Accessible label for closing ChatGPT Voice onboarding",
            })),
            (A[10] = ei),
            (A[11] = l))
          : (l = A[11]),
        A[12] !== en
          ? ((c = (e) => {
              e || en()
            }),
            (A[12] = en),
            (A[13] = c))
          : (c = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, m.jsx)(j.L3, {
              className: "sr-only",
              children: (0, m.jsx)(v.A, {
                id: "realtimeVoice.onboarding.title",
                defaultMessage: "Set up voice chat",
                description: "Accessible title for ChatGPT Voice onboarding",
              }),
            })),
            (A[14] = d))
          : (d = A[14]),
        A[15] !== er || A[16] !== S || A[17] !== X
          ? ((u =
              0 === X
                ? (0, m.jsx)(Z, {
                    primaryAction: (0, m.jsx)(v.A, {
                      id: "realtimeVoice.onboarding.next",
                      defaultMessage: "Next",
                      description: "Button that advances realtime voice onboarding",
                    }),
                    onSubmit: er,
                    children: (0, m.jsx)(O.b, { entryPoint: S }),
                  })
                : null),
            (A[15] = er),
            (A[16] = S),
            (A[17] = X),
            (A[18] = u))
          : (u = A[18]),
        A[19] !== Q || A[20] !== G || A[21] !== Y || A[22] !== ea || A[23] !== X
          ? ((p =
              1 === X
                ? (0, m.jsx)(B, {
                    isAppshotAvailable: !0 === Y || G,
                    pendingEnabled: Y,
                    updateError: Q,
                    onBack: () => K(0),
                    onEnabledChange: (e) => {
                      ea(e)
                    },
                    onNext: () => K(2),
                  })
                : null),
            (A[19] = Q),
            (A[20] = G),
            (A[21] = Y),
            (A[22] = ea),
            (A[23] = X),
            (A[24] = p))
          : (p = A[24]),
        A[25] !== H ||
        A[26] !== en ||
        A[27] !== S ||
        A[28] !== k ||
        A[29] !== M ||
        A[30] !== _ ||
        A[31] !== X ||
        A[32] !== L
          ? ((f =
              2 === X
                ? (0, m.jsx)(F, {
                    onboarding: {
                      sourceComposerScope: _,
                      entryPoint: S,
                      originPath: k,
                      request: M,
                      workHomePolicyAcceptance: L,
                    },
                    isOpenRef: et,
                    onBack: () => K(+!!H),
                    onClose: en,
                  })
                : null),
            (A[25] = H),
            (A[26] = en),
            (A[27] = S),
            (A[28] = k),
            (A[29] = M),
            (A[30] = _),
            (A[31] = X),
            (A[32] = L),
            (A[33] = f))
          : (f = A[33]),
        A[34] !== p || A[35] !== f || A[36] !== u
          ? ((b = (0, m.jsxs)(E.R4, { className: "min-h-0 gap-5", size: "tall", children: [u, p, f] })),
            (A[34] = p),
            (A[35] = f),
            (A[36] = u),
            (A[37] = b))
          : (b = A[37]),
        A[38] !== b || A[39] !== l || A[40] !== c
          ? ((w = (0, m.jsxs)(j.lG, {
              open: !0,
              contentProps: s,
              dialogCloseLabel: l,
              contentClassName: "w-[min(480px,92vw)]",
              size: "feature",
              onOpenChange: c,
              children: [d, b],
            })),
            (A[38] = b),
            (A[39] = l),
            (A[40] = c),
            (A[41] = w))
          : (w = A[41]),
        w
      )
    }
    function B(e) {
      let t,
        i,
        r,
        n,
        o,
        s,
        l = (0, a.c)(15),
        { isAppshotAvailable: c, pendingEnabled: d, updateError: u, onBack: p, onEnabledChange: h, onNext: f } = e,
        g = (0, T.iK)(U.screenContextEnabled),
        x = c && (d ?? g)
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, m.jsx)(v.A, {
            id: "realtimeVoice.onboarding.next",
            defaultMessage: "Next",
            description: "Button that advances realtime voice onboarding",
          })),
          (l[0] = t))
        : (t = l[0])
      let y = null != d
      ;(l[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, m.jsx)("img", { alt: "", "aria-hidden": !0, className: "h-20 w-24 object-contain", src: b })),
          (l[1] = i))
        : (i = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, m.jsx)("h1", {
              className: "heading-2xl font-normal tracking-tight text-default",
              children: (0, m.jsx)(v.A, {
                id: "realtimeVoice.onboarding.appshots.title",
                defaultMessage: "Bring your screen into the conversation",
                description: "Title of the Appshots step in realtime voice onboarding",
              }),
            })),
            (l[2] = r))
          : (r = l[2]),
        l[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, m.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                r,
                (0, m.jsx)("p", {
                  className: "text-base leading-6 text-secondary",
                  children: (0, m.jsx)(v.A, {
                    id: "realtimeVoice.onboarding.appshots.description",
                    defaultMessage:
                      "Appshots let ChatGPT use the active window’s image and text when you ask about what’s on screen",
                    description: "Description of Appshots in realtime voice onboarding",
                  }),
                }),
              ],
            })),
            (l[3] = n))
          : (n = l[3]))
      let w = null != d
      return (
        l[4] !== x || l[5] !== c || l[6] !== h || l[7] !== w || l[8] !== u
          ? ((o = (0, m.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center",
              children: [
                i,
                n,
                (0, m.jsx)($, { enabled: x, isAppshotAvailable: c, isSaving: w, updateError: u, onEnabledChange: h }),
              ],
            })),
            (l[4] = x),
            (l[5] = c),
            (l[6] = h),
            (l[7] = w),
            (l[8] = u),
            (l[9] = o))
          : (o = l[9]),
        l[10] !== p || l[11] !== f || l[12] !== y || l[13] !== o
          ? ((s = (0, m.jsx)(Z, { backAction: p, primaryAction: t, primaryDisabled: y, onSubmit: f, children: o })),
            (l[10] = p),
            (l[11] = f),
            (l[12] = y),
            (l[13] = o),
            (l[14] = s))
          : (s = l[14]),
        s
      )
    }
    function $(e) {
      let t,
        i,
        r,
        n,
        s,
        l,
        c,
        d,
        u = (0, a.c)(20),
        { enabled: p, isAppshotAvailable: h, isSaving: f, updateError: g, onEnabledChange: x } = e,
        b = (0, o.A)()
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, m.jsx)(v.A, {
            id: "realtimeVoice.onboarding.appshots.toggleLabel",
            defaultMessage: "Use Appshots",
            description: "Label for the Appshots toggle in realtime voice onboarding",
          })),
          (i = (0, m.jsx)(v.A, {
            id: "realtimeVoice.onboarding.appshots.toggleDescription",
            defaultMessage: "You can turn this off anytime in Settings",
            description: "Description for the Appshots toggle in realtime voice onboarding",
          })),
          (u[0] = t),
          (u[1] = i))
        : ((t = u[0]), (i = u[1])),
        u[2] !== f
          ? ((r = f
              ? (0, m.jsxs)("span", {
                  className: "inline-flex",
                  role: "status",
                  children: [
                    (0, m.jsx)(_.y, { className: "icon-xs text-secondary" }),
                    (0, m.jsx)("span", {
                      className: "sr-only",
                      children: (0, m.jsx)(v.A, {
                        id: "realtimeVoice.onboarding.appshots.saving",
                        defaultMessage: "Saving Appshots preference",
                        description:
                          "Status announced while updating the Appshots preference in realtime voice onboarding",
                      }),
                    }),
                  ],
                })
              : null),
            (u[2] = f),
            (u[3] = r))
          : (r = u[3]),
        u[4] !== b
          ? ((n = b.formatMessage({
              id: "realtimeVoice.onboarding.appshots.toggleAriaLabel",
              defaultMessage: "Use Appshots",
              description: "Accessible label for the Appshots toggle in realtime voice onboarding",
            })),
            (u[4] = b),
            (u[5] = n))
          : (n = u[5]))
      let y = !h || f
      return (
        u[6] !== p || u[7] !== x || u[8] !== n || u[9] !== y
          ? ((s = (0, m.jsx)(S.l, { ariaLabel: n, checked: p, disabled: y, onChange: x })),
            (u[6] = p),
            (u[7] = x),
            (u[8] = n),
            (u[9] = y),
            (u[10] = s))
          : (s = u[10]),
        u[11] !== r || u[12] !== s
          ? ((l = (0, m.jsx)(V.ic, {
              label: t,
              description: i,
              control: (0, m.jsxs)("div", { className: "flex items-center gap-2", children: [r, s] }),
            })),
            (u[11] = r),
            (u[12] = s),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== h || u[15] !== g
          ? ((c =
              g || !h
                ? (0, m.jsx)("div", {
                    className: "border-t border-default px-4 py-3",
                    children: g
                      ? (0, m.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-danger",
                          children: (0, m.jsx)(v.A, {
                            id: "realtimeVoice.onboarding.appshots.error",
                            defaultMessage: "Appshots couldn’t be updated",
                            description: "Error shown when Appshots cannot be updated from realtime voice onboarding",
                          }),
                        })
                      : (0, m.jsx)("p", {
                          className: "text-sm text-tertiary",
                          children: (0, m.jsx)(v.A, {
                            id: "realtimeVoice.onboarding.appshots.unavailable",
                            defaultMessage: "Appshots aren’t available on this device",
                            description: "Unavailable state for Appshots in realtime voice onboarding",
                          }),
                        }),
                  })
                : null),
            (u[14] = h),
            (u[15] = g),
            (u[16] = c))
          : (c = u[16]),
        u[17] !== l || u[18] !== c
          ? ((d = (0, m.jsxs)(I.t, { className: "w-full max-w-md text-start", children: [l, c] })),
            (u[17] = l),
            (u[18] = c),
            (u[19] = d))
          : (d = u[19]),
        d
      )
    }
    function F(e) {
      let t,
        i,
        n = (0, a.c)(20),
        { onboarding: o, isOpenRef: s, onBack: l, onClose: c } = e,
        { data: d, error: u, refetch: p } = (0, r.Ul)(L.z),
        h = null != u || d?.voices.length === 0
      n[0] !== d ? ((t = d?.voices.find((e) => e.slug === d.effectiveVoiceSlug)), (n[0] = d), (n[1] = t)) : (t = n[1])
      let f = t
      if (null == d || null == f) {
        let e, t, i, a
        n[2] !== h
          ? ((e = h
              ? (0, m.jsx)(v.A, {
                  id: "settings.general.realtimeVoice.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry loading compatible realtime voices",
                })
              : (0, m.jsx)(v.A, {
                  id: "settings.general.realtimeVoice.loading",
                  defaultMessage: "Loading…",
                  description: "Label shown while the selected realtime voice loads",
                })),
            (n[2] = h),
            (n[3] = e))
          : (e = n[3])
        let r = !h
        return (
          n[4] !== h || n[5] !== p
            ? ((t = () => {
                h && p()
              }),
              (n[4] = h),
              (n[5] = p),
              (n[6] = t))
            : (t = n[6]),
          n[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, m.jsx)(W, {})), (n[7] = i)) : (i = n[7]),
          n[8] !== l || n[9] !== e || n[10] !== r || n[11] !== t
            ? ((a = (0, m.jsx)(Z, { backAction: l, primaryAction: e, primaryDisabled: r, onSubmit: t, children: i })),
              (n[8] = l),
              (n[9] = e),
              (n[10] = r),
              (n[11] = t),
              (n[12] = a))
            : (a = n[12]),
          a
        )
      }
      return (
        n[13] !== f || n[14] !== s || n[15] !== l || n[16] !== c || n[17] !== o || n[18] !== d
          ? ((i = (0, m.jsx)(
              H,
              { initialVoice: f, onboarding: o, isOpenRef: s, voiceCatalog: d, onBack: l, onClose: c },
              f.slug,
            )),
            (n[13] = f),
            (n[14] = s),
            (n[15] = l),
            (n[16] = c),
            (n[17] = o),
            (n[18] = d),
            (n[19] = i))
          : (i = n[19]),
        i
      )
    }
    function H(e) {
      let t,
        i,
        n,
        o,
        s,
        l,
        c,
        d,
        p,
        h = (0, a.c)(30),
        { initialVoice: f, onboarding: x, isOpenRef: b, onBack: y, onClose: A, voiceCatalog: j } = e,
        E = (0, r.gh)(R.u)
      h[0] !== E ? ((t = () => E.get(w.Sk)), (h[0] = E), (h[1] = t)) : (t = h[1])
      let [_] = (0, g.useState)(t),
        S = (0, r._U)(k.JW, "2182392068"),
        [C, N] = (0, g.useState)(f.slug),
        [T, V] = (0, g.useState)(!1),
        [I, O] = (0, g.useState)(!1)
      h[2] !== _ || h[3] !== f.slug || h[4] !== b || h[5] !== A || h[6] !== x || h[7] !== E || h[8] !== C
        ? ((i = async () => {
            ;(V(!0), O(!1))
            try {
              C !== f.slug && (await (0, M.H$)(E, C, _))
            } catch {
              b.current && (O(!0), V(!1))
              return
            }
            b.current &&
              (A(),
              await (0, u.eE)(E, x.sourceComposerScope, x.request, x.originPath, x.workHomePolicyAcceptance).catch(G))
          }),
          (h[2] = _),
          (h[3] = f.slug),
          (h[4] = b),
          (h[5] = A),
          (h[6] = x),
          (h[7] = E),
          (h[8] = C),
          (h[9] = i))
        : (i = h[9])
      let L = i
      return (
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, m.jsx)(v.A, {
              id: "realtimeVoice.onboarding.start",
              defaultMessage: "Start voice chat",
              description: "Button that completes realtime voice onboarding and starts voice",
            })),
            (h[10] = n))
          : (n = h[10]),
        h[11] !== L ? ((o = () => void L()), (h[11] = L), (h[12] = o)) : (o = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, m.jsx)(W, {})), (h[13] = s)) : (s = h[13]),
        h[14] !== f || h[15] !== S || h[16] !== T || h[17] !== j.voices || h[18] !== C
          ? ((l = S
              ? (0, m.jsx)(P.S, {
                  className: "mt-5 max-h-80 w-full text-start",
                  disabled: T,
                  previewEnabled: !T,
                  preserveSelectionOnRefresh: !0,
                  promoteSelectedGroup: !0,
                  value: C,
                  voices: j.voices,
                  onVoiceChange: (e) => N(e),
                })
              : (0, m.jsx)(D.I, {
                  initialVoice: j.voices.find((e) => e.slug === C) ?? f,
                  voices: j.voices,
                  onVoiceChange: (e) => N(e),
                })),
            (h[14] = f),
            (h[15] = S),
            (h[16] = T),
            (h[17] = j.voices),
            (h[18] = C),
            (h[19] = l))
          : (l = h[19]),
        h[20] !== I
          ? ((c = I
              ? (0, m.jsx)("p", {
                  role: "alert",
                  className: "mt-2 text-sm text-danger",
                  children: (0, m.jsx)(v.A, {
                    id: "settings.general.realtimeVoice.saveError",
                    defaultMessage: "Unable to save voice",
                    description: "Error shown when saving the realtime voice fails",
                  }),
                })
              : null),
            (h[20] = I),
            (h[21] = c))
          : (c = h[21]),
        h[22] !== l || h[23] !== c
          ? ((d = (0, m.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center text-center",
              children: [s, l, c],
            })),
            (h[22] = l),
            (h[23] = c),
            (h[24] = d))
          : (d = h[24]),
        h[25] !== T || h[26] !== y || h[27] !== o || h[28] !== d
          ? ((p = (0, m.jsx)(Z, { backAction: y, primaryAction: n, primaryLoading: T, onSubmit: o, children: d })),
            (h[25] = T),
            (h[26] = y),
            (h[27] = o),
            (h[28] = d),
            (h[29] = p))
          : (p = h[29]),
        p
      )
    }
    function G() {}
    function W() {
      let e,
        t,
        i = (0, a.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, m.jsx)("h1", {
              className: "heading-lg font-normal tracking-tight text-default",
              children: (0, m.jsx)(v.A, {
                id: "realtimeVoice.onboarding.voice.title",
                defaultMessage: "Choose your voice",
                description: "Title of the voice selection step in realtime voice onboarding",
              }),
            })),
            (i[0] = e))
          : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, m.jsxs)("div", {
              className: "flex flex-col gap-2 text-center",
              children: [
                e,
                (0, m.jsx)("p", {
                  className: "text-base leading-6 text-secondary",
                  children: (0, m.jsx)(v.A, {
                    id: "realtimeVoice.onboarding.voice.description",
                    defaultMessage: "You can change this anytime in Settings",
                    description: "Description of the voice selection step in realtime voice onboarding",
                  }),
                }),
              ],
            })),
            (i[1] = t))
          : (t = i[1]),
        t
      )
    }
    function Z(e) {
      let t,
        i,
        r,
        n,
        o,
        s,
        l = (0, a.c)(18),
        { backAction: c, children: d, onSubmit: u, primaryAction: p, primaryDisabled: h, primaryLoading: f } = e,
        g = void 0 !== h && h,
        x = void 0 !== f && f
      l[0] !== u
        ? ((t = (e) => {
            ;(e.preventDefault(), u())
          }),
          (l[0] = u),
          (l[1] = t))
        : (t = l[1])
      let b = t
      return (
        l[2] !== d
          ? ((i = (0, m.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center overflow-y-auto",
              children: d,
            })),
            (l[2] = d),
            (l[3] = i))
          : (i = l[3]),
        l[4] !== c || l[5] !== x
          ? ((r =
              null == c
                ? (0, m.jsx)("span", {})
                : (0, m.jsx)(A.$, {
                    color: "secondary",
                    disabled: x,
                    onClick: c,
                    type: "button",
                    children: (0, m.jsx)(v.A, {
                      id: "realtimeVoice.onboarding.back",
                      defaultMessage: "Back",
                      description: "Button that returns to the previous realtime voice onboarding step",
                    }),
                  })),
            (l[4] = c),
            (l[5] = x),
            (l[6] = r))
          : (r = l[6]),
        l[7] !== p || l[8] !== g || l[9] !== x
          ? ((n = (0, m.jsx)(A.$, { color: "primary", disabled: g, loading: x, type: "submit", children: p })),
            (l[7] = p),
            (l[8] = g),
            (l[9] = x),
            (l[10] = n))
          : (n = l[10]),
        l[11] !== r || l[12] !== n
          ? ((o = (0, m.jsxs)(E.Es, { className: "justify-between", expandSingleButton: !1, children: [r, n] })),
            (l[11] = r),
            (l[12] = n),
            (l[13] = o))
          : (o = l[13]),
        l[14] !== b || l[15] !== i || l[16] !== o
          ? ((s = (0, m.jsxs)("form", {
              className: "flex min-h-0 flex-1 flex-col gap-5",
              onSubmit: b,
              children: [i, o],
            })),
            (l[14] = b),
            (l[15] = i),
            (l[16] = o),
            (l[17] = s))
          : (s = l[17]),
        s
      )
    }
    var X = i("OTgW"),
      K = i("Nc5R"),
      Y = i("WFY2"),
      q = i("HK0a")
    async function Q({
      scope: e,
      activeCollaborationMode: t,
      activateRealtimeConversation: i,
      agentMode: a,
      currentLocalExecutionCwd: r,
      intent: n,
      memoryPreferences: o,
      onStartError: s,
      permissionProfileId: l,
      pageCompanion: c,
      projectId: d,
      serviceTier: u,
      shouldSendPermissionOverrides: p,
      threadToolsEnabled: m,
      startupAnalytics: h,
      treatment: f,
      workspaceRootsForLocalExecution: g,
    }) {
      try {
        await (0, K.K)(
          n,
          {
            scope: e,
            startupAnalytics: h,
            activeCollaborationMode: t,
            agentMode: a,
            currentLocalExecutionCwd: r,
            existingThreadVoiceEnabled: f.existingThreadVoiceEnabled,
            memoryPreferences: o,
            permissionProfileId: l,
            pageCompanion: c,
            projectId: d,
            newThreadBaseInstructions: f.newThread.baseInstructions,
            newThreadDeveloperInstructions: c?.developerInstructions ?? (m ? f.newThread.developerInstructions : null),
            realtimeVoiceDynamicTools: f.dynamicTools,
            realtimeVoiceToolsDeveloperInstructions: f.newThread.voiceToolsDeveloperInstructions,
            serviceTier: u,
            shouldSendPermissionOverrides: p,
            workspaceRootsForLocalExecution: g,
          },
          async ({ locator: e, memoryPreferencesToInitialize: t }) => i(e.conversationId, t),
        )
      } catch (e) {
        throw (
          Y.v.error("Error starting realtime voice", {
            safe: { ...h?.getErrorDetails(e), realtimeSessionId: h?.sessionId },
            sensitive: { error: e },
          }),
          s(e),
          e
        )
      }
    }
    function J(e, t, i, m, h, f, g) {
      let v,
        x,
        b,
        y = (0, a.c)(15),
        w = void 0 === m ? null : m,
        A = (0, r.gh)(R.u),
        j = (0, o.A)(),
        E = (0, s.zy)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((v = { name: "voice.realtime" }), (y[0] = v)) : (v = y[0])
      let { isCapable: _ } = (0, r._U)(l.G, v)
      if (!_) return
      y[1] !== j || y[2] !== A
        ? ((x = (e) => {
            A.get(c.Id).danger(
              (0, n.Rt_)(e) ||
                j.formatMessage({
                  id: "composer.realtime.createThreadError",
                  defaultMessage: "Unable to start voice chat",
                  description: "Toast shown when creating a new thread for realtime voice fails",
                }),
              { errorAnalytics: { toastId: "composer.realtime.createThreadError" } },
            )
          }),
          (y[1] = j),
          (y[2] = A),
          (y[3] = x))
        : (x = y[3])
      let S = x
      return (
        y[4] !== i ||
        y[5] !== t ||
        y[6] !== h ||
        y[7] !== g ||
        y[8] !== E ||
        y[9] !== f ||
        y[10] !== w?.projectId ||
        y[11] !== A ||
        y[12] !== S ||
        y[13] !== e
          ? ((b = async () => {
              var a
              let r
              if ((g ?? "work" === t) && null == f) {
                let e = (0, q.e3)(A)
                if (null == e) return
                r = e
              }
              let n = A.get(d.bz),
                o = {
                  activeCollaborationMode: i,
                  pageCompanion: f,
                  hostId: h,
                  projectId: null == h ? w?.projectId : void 0,
                  memoryPreferences: n ?? void 0,
                  productExperience: "chatgpt" === t ? "chat" : t,
                  source: "composer_button_new_thread",
                },
                s = `${E.pathname}${E.search}`
              if (
                ((a = {
                  sourceComposerScope: e,
                  entryPoint: "work" === t ? "chatgpt" : t,
                  originPath: s,
                  request: o,
                  workHomePolicyAcceptance: r,
                }),
                A.get(X.Yl) || (A.set(X.Yl, !0), (0, p.qf)(A, z, a), 0))
              )
                try {
                  await (0, u.eE)(A, e, o, s, r)
                } catch (e) {
                  A.get(u.RJ)?.phase !== "failed" && S(e)
                }
            }),
            (y[4] = i),
            (y[5] = t),
            (y[6] = h),
            (y[7] = g),
            (y[8] = E),
            (y[9] = f),
            (y[10] = w?.projectId),
            (y[11] = A),
            (y[12] = S),
            (y[13] = e),
            (y[14] = b))
          : (b = y[14]),
        b
      )
    }
  },
  KUNU(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("on57"),
      o = i("zd8w"),
      s = i("tsSe"),
      l = i("IlRO")
    i.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            c,
            d,
            u,
            p,
            m,
            h,
            f,
            g,
            v,
            x,
            b,
            y,
            w,
            A,
            j,
            E,
            _,
            S,
            C,
            N = (0, r.c)(73),
            {
              className: R,
              glowEnabled: T,
              onDraw: V,
              onRenderError: I,
              onStateSample: k,
              paletteIndex: O,
              placement: M,
              presentation: L,
              presentationAnchorRef: P,
              phase: D,
              previewAudioLevel: U,
              previewTimeMs: z,
              subscribeToAudio: B,
              voiceActivity: $,
            } = e,
            F = void 0 === T || T,
            H = void 0 === O ? 0 : O,
            G = void 0 === L ? "overlay" : L,
            W = void 0 === U ? 0 : U,
            Z = void 0 === B ? s.NY : B,
            [X, K] = (0, o.useState)(!1),
            Y = (0, o.useRef)(null),
            q = (0, o.useRef)(null),
            Q = (0, o.useRef)(null),
            J = (0, o.useRef)(null)
          ;(N[0] !== z ? ("live" !== z && (t = z), (N[0] = z), (N[1] = t)) : (t = N[1]),
            N[2] !== H || N[3] !== D || N[4] !== W || N[5] !== t || N[6] !== $
              ? ((c = { paletteIndex: H, phase: D, previewAudioLevel: W, previewTimeMs: t, voiceActivity: $ }),
                (N[2] = H),
                (N[3] = D),
                (N[4] = W),
                (N[5] = t),
                (N[6] = $),
                (N[7] = c))
              : (c = N[7]))
          let ee = (0, o.useRef)(c)
          N[8] !== V || N[9] !== G || N[10] !== W || N[11] !== t
            ? ((d = (e) => {
                "preview" === G || null != t || W > 0 || V?.(e)
              }),
              (N[8] = V),
              (N[9] = G),
              (N[10] = W),
              (N[11] = t),
              (N[12] = d))
            : (d = N[12])
          let et = (0, o.useEffectEvent)(d)
          N[13] !== k || N[14] !== G || N[15] !== W || N[16] !== t
            ? ((u = (e) => {
                "preview" !== G && null == t && 0 === W && k?.(e)
              }),
              (N[13] = k),
              (N[14] = G),
              (N[15] = W),
              (N[16] = t),
              (N[17] = u))
            : (u = N[17])
          let ei = (0, o.useEffectEvent)(u)
          N[18] !== I
            ? ((p = () => {
                ;(K(!0), I?.())
              }),
              (N[18] = I),
              (N[19] = p))
            : (p = N[19])
          let ea = (0, o.useEffectEvent)(p)
          N[20] !== M || N[21] !== P
            ? ((m = (e) => {
                ;((q.current = e), (null == e || e.dataset.avatarOverlayPlacement === M) && P?.(e, e?.parentElement))
              }),
              (N[20] = M),
              (N[21] = P),
              (N[22] = m))
            : (m = N[22])
          let er = m
          ;(N[23] !== et || N[24] !== ea || N[25] !== ei || N[26] !== X || !1 !== N[27] || N[28] !== G
            ? ((h = () => {
                if (X) return
                let e = q.current,
                  t = Q.current,
                  a = e?.parentElement
                if (null == e || null == t || null == a) return
                let r = !1,
                  n = null,
                  o = null,
                  s = () => {
                    let i = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = i), (t.style.height = i))
                  }
                return (
                  s(),
                  "u" > typeof ResizeObserver && (o = new ResizeObserver(s)).observe(e),
                  (async () => (await i.e(317638).then(i.bind(i, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var i, n
                      let o, s
                      return r
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((i = a),
                              (n = t),
                              (o = Math.max(1, Math.min(i.clientWidth, i.clientHeight))),
                              (s = Math.max(1, Math.min(n.clientWidth || o + 40, n.clientHeight || o + 40))),
                              Math.min(1, o / s)),
                            onDraw: (e) => {
                              r || et(e)
                            },
                            onRenderError: () => {
                              r || ea()
                            },
                            onStateSample: void 0,
                            presentation: G,
                          })
                    })
                    .then((e) => {
                      r
                        ? e?.dispose()
                        : null != e && ((n = e), (Y.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      r || ea()
                    }),
                  () => {
                    ;((r = !0), o?.disconnect(), n?.dispose(), (Y.current = null))
                  }
                )
              }),
              (N[23] = et),
              (N[24] = ea),
              (N[25] = ei),
              (N[26] = X),
              (N[27] = !1),
              (N[28] = G),
              (N[29] = h))
            : (h = N[29]),
            N[30] !== X || !1 !== N[31] || N[32] !== G
              ? ((f = [X, !1, G]), (N[30] = X), (N[31] = !1), (N[32] = G), (N[33] = f))
              : (f = N[33]),
            (0, o.useLayoutEffect)(h, f),
            N[34] !== H || N[35] !== D || N[36] !== W || N[37] !== t || N[38] !== $
              ? ((g = () => {
                  let e = { paletteIndex: H, phase: D, previewAudioLevel: W, previewTimeMs: t, voiceActivity: $ }
                  ;((ee.current = e), Y.current?.setInputs(e))
                }),
                (N[34] = H),
                (N[35] = D),
                (N[36] = W),
                (N[37] = t),
                (N[38] = $),
                (N[39] = g))
              : (g = N[39]),
            N[40] !== H || N[41] !== D || N[42] !== W || N[43] !== t || N[44] !== $
              ? ((v = [H, D, W, t, $]), (N[40] = H), (N[41] = D), (N[42] = W), (N[43] = t), (N[44] = $), (N[45] = v))
              : (v = N[45]),
            (0, o.useEffect)(g, v))
          let en = !X && "inactive" !== D
          ;(N[46] !== en || N[47] !== Z
            ? ((x = () => {
                if (!en) {
                  ;((J.current = null), Y.current?.setAudioLevels(null))
                  return
                }
                return Z((e) => {
                  ;((J.current = e), Y.current?.setAudioLevels(e))
                })
              }),
              (b = [en, Z]),
              (N[46] = en),
              (N[47] = Z),
              (N[48] = x),
              (N[49] = b))
            : ((x = N[48]), (b = N[49])),
            (0, o.useEffect)(x, b),
            N[50] !== M
              ? ((y = (0, n.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === M
                    ? "-top-5 -left-5"
                    : [M.endsWith("end") ? "right-0" : "left-0", M.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (N[50] = M),
                (N[51] = y))
              : (y = N[51]))
          let eo = y
          N[52] !== X || N[53] !== H
            ? ((w = X ? (0, l.V)(H) : null), (N[52] = X), (N[53] = H), (N[54] = w))
            : (w = N[54])
          let es = w
          ;(N[55] !== F || N[56] !== H
            ? ((A = F ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, l.P)(H)} 55%, transparent))` : void 0),
              (N[55] = F),
              (N[56] = H),
              (N[57] = A))
            : (A = N[57]),
            N[58] !== A ? ((j = { filter: A }), (N[58] = A), (N[59] = j)) : (j = N[59]))
          let el = j
          return (
            N[60] !== R
              ? ((E = (0, n.A)("codex-avatar-root relative h-full w-full", R)), (N[60] = R), (N[61] = E))
              : (E = N[61]),
            N[62] !== el || N[63] !== es
              ? ((_ =
                  null != es
                    ? (0, a.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${es.fallbackColors[0]}, ${es.fallbackColors[1]} 46%, ${es.fallbackColors[2]})`,
                        },
                      })
                    : (0, a.jsx)("canvas", {
                        ref: Q,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: el,
                      })),
                (N[62] = el),
                (N[63] = es),
                (N[64] = _))
              : (_ = N[64]),
            N[65] !== eo || N[66] !== M || N[67] !== er || N[68] !== _
              ? ((S = (0, a.jsx)("div", { ref: er, className: eo, "data-avatar-overlay-placement": M, children: _ })),
                (N[65] = eo),
                (N[66] = M),
                (N[67] = er),
                (N[68] = _),
                (N[69] = S))
              : (S = N[69]),
            N[70] !== E || N[71] !== S
              ? ((C = (0, a.jsx)("div", {
                  "aria-hidden": "true",
                  className: E,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: S,
                })),
                (N[70] = E),
                (N[71] = S),
                (N[72] = C))
              : (C = N[72]),
            C
          )
        },
      },
    )
  },
  IlRO(e, t, i) {
    var a = i("nBOj")
    let r = [a.l.blue, a.l.blue, a.l.green, a.l.yellow, a.l.pink, a.l.orange, a.l.purple, a.l.black],
      n = new Map()
    function o(e) {
      return r[e] ?? a.l.blue
    }
    i.d(
      t,
      {},
      {
        P: o,
        V: function (e) {
          let t,
            i,
            a,
            r,
            s,
            l,
            c,
            d = o(e),
            u = n.get(d)
          if (null != u) return u
          let p =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(d.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (a = (i = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (s = (r = i.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : a).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (l = r.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (c = r.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...a, 1],
              fallbackColors: [
                `rgb(${s.map((e) => 255 * e).join(" ")})`,
                `rgb(${l.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${c.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (n.set(d, p), p)
        },
      },
    )
  },
  Z908(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("oyxz"),
      o = i("tNuX"),
      s = i("emVg"),
      l = i("CYTY")
    i.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            i,
            c,
            d,
            u,
            p,
            m,
            h,
            f = (0, r.c)(14),
            { entryPoint: g } = e
          return (
            f[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("h1", {
                  className: "heading-2xl font-normal tracking-tight text-default",
                  children: (0, a.jsx)(n.A, {
                    id: "realtimeVoice.nux.title",
                    defaultMessage: "Meet ChatGPT Voice",
                    description: "Title of the first-use introduction inside a live voice chat",
                  }),
                })),
                (f[0] = t))
              : (t = f[0]),
            f[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, a.jsx)(l.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, a.jsx)(n.A, {
                      id: "realtimeVoice.nux.projects.title",
                      defaultMessage: "Work across projects",
                      description: "Title of the projects tip in the first-use live voice introduction",
                    }),
                  ],
                })),
                (f[1] = i))
              : (i = f[1]),
            f[2] !== g
              ? ((c = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    i,
                    (0, a.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === g
                          ? (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.projects.description.chatgpt",
                              defaultMessage:
                                "Turn ideas into action, keep work moving, and pick up where you left off—without micromanaging",
                              description:
                                "Description of the projects tip in the first-use live voice introduction shown from ChatGPT",
                            })
                          : (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.projects.description",
                              defaultMessage:
                                "Start new tasks, coordinate work in progress, and pick up where you left off—without micromanaging",
                              description: "Description of the projects tip in the first-use live voice introduction",
                            }),
                    }),
                  ],
                })),
                (f[2] = g),
                (f[3] = c))
              : (c = f[3]),
            f[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, a.jsx)(s.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, a.jsx)(n.A, {
                      id: "realtimeVoice.nux.desktop.title",
                      defaultMessage: "Work across your desktop",
                      description: "Title of the desktop tip in the first-use live voice introduction",
                    }),
                  ],
                })),
                (f[4] = d))
              : (d = f[4]),
            f[5] !== g
              ? ((u = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    d,
                    (0, a.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === g
                          ? (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.desktop.description.chatgpt",
                              defaultMessage:
                                "Bring together your files, apps, and connected tools—from Slack and Notion to the documents you use every day",
                              description:
                                "Description of the desktop tip in the first-use live voice introduction shown from ChatGPT",
                            })
                          : (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.desktop.description",
                              defaultMessage:
                                "Use your files, apps, and connected tools—from Slack and GitHub to Notion and beyond",
                              description: "Description of the desktop tip in the first-use live voice introduction",
                            }),
                    }),
                  ],
                })),
                (f[5] = g),
                (f[6] = u))
              : (u = f[6]),
            f[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, a.jsx)(o.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, a.jsx)(n.A, {
                      id: "realtimeVoice.nux.learn.title",
                      defaultMessage: "Explore, plan, and learn",
                      description: "Title of the collaborative thinking tip in the first-use live voice introduction",
                    }),
                  ],
                })),
                (f[7] = p))
              : (p = f[7]),
            f[8] !== g
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    p,
                    (0, a.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === g
                          ? (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.learn.description.chatgpt",
                              defaultMessage:
                                "Brainstorm ideas, prepare for a big meeting, or learn something new through natural back-and-forth",
                              description:
                                "Description of the collaborative thinking tip in the first-use live voice introduction shown from ChatGPT",
                            })
                          : (0, a.jsx)(n.A, {
                              id: "realtimeVoice.nux.learn.description",
                              defaultMessage:
                                "Talk through a PR, ask questions about a codebase, or learn a new topic through natural back-and-forth",
                              description:
                                "Description of the collaborative thinking tip in the first-use live voice introduction",
                            }),
                    }),
                  ],
                })),
                (f[8] = g),
                (f[9] = m))
              : (m = f[9]),
            f[10] !== c || f[11] !== u || f[12] !== m
              ? ((h = (0, a.jsxs)("div", {
                  className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 pt-4 text-center",
                  children: [
                    t,
                    (0, a.jsxs)("div", { className: "flex w-full max-w-lg flex-col gap-8", children: [c, u, m] }),
                  ],
                })),
                (f[10] = c),
                (f[11] = u),
                (f[12] = m),
                (f[13] = h))
              : (h = f[13]),
            h
          )
        },
      },
    )
  },
  i663(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("on57"),
      o = i("zd8w"),
      s = i("oyxz"),
      l = i("AWNZ"),
      c = i("ZEx5")
    function d(e) {
      return "" !== e
    }
    i.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            i,
            u,
            p,
            m,
            h,
            f,
            g,
            v,
            x,
            b,
            y,
            w,
            A = (0, r.c)(39),
            {
              className: j,
              autoFocusSelectedVoice: E,
              disabled: _,
              onPreviewPlaybackChange: S,
              onVoiceChange: C,
              playPreviewOnInitialRender: N,
              previewEnabled: R,
              preserveSelectionOnRefresh: T,
              promoteSelectedGroup: V,
              value: I,
              voices: k,
            } = e,
            O = void 0 !== E && E,
            M = void 0 !== N && N,
            L = void 0 !== T && T,
            P = (0, o.useId)(),
            D = (0, o.useRef)(null),
            U = (0, o.useRef)(0),
            [z, B] = (0, o.useState)(!1),
            [$] = (0, o.useState)(I),
            [F, H] = (0, o.useState)(k)
          A[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (A[0] = t)) : (t = A[0])
          let [G, W] = (0, o.useState)(t)
          A[1] !== F || A[2] !== L || A[3] !== I || A[4] !== k
            ? ((i = L && !k.some((e) => e.slug === I) ? F : k),
              (A[1] = F),
              (A[2] = L),
              (A[3] = I),
              (A[4] = k),
              (A[5] = i))
            : (i = A[5])
          let Z = i,
            X = new Map()
          for (let e of Z) {
            let t = e.accent?.trim() ?? "",
              i = X.get(t) ?? []
            ;(i.push(e), X.set(t, i))
          }
          let K = Array.from(X.keys()),
            Y = K.some(d),
            q = K.filter((e) => !G.includes(e))
          if (Y && q.length > 0) {
            let e =
              0 === G.length && void 0 !== V && V
                ? Array.from(X).find((e) => {
                    let [, t] = e
                    return t.some((e) => e.slug === $)
                  })?.[0]
                : void 0
            W([...G, ...(null != e ? [e] : []), ...q.filter((t) => t !== e)])
          }
          let Q = [...G.filter((e) => X.has(e)), ...q]
          A[6] !== R || A[7] !== k
            ? ((u = (e) => {
                let t = D.current
                if (!R || null == t) return
                let i = (U.current = U.current + 1)
                ;(t.pause(),
                  (t.src =
                    k.find((t) => {
                      let { slug: i } = t
                      return i === e.slug
                    })?.previewUrl ?? e.previewUrl),
                  B(!1),
                  t.play().catch(() => {
                    i === U.current && B(!0)
                  }))
              }),
              (A[6] = R),
              (A[7] = k),
              (A[8] = u))
            : (u = A[8])
          let J = u
          A[9] !== Z || A[10] !== J || A[11] !== I
            ? ((p = () => {
                let e = Z.find((e) => e.slug === I)
                null != e && J(e)
              }),
              (A[9] = Z),
              (A[10] = J),
              (A[11] = I),
              (A[12] = p))
            : (p = A[12])
          let ee = (0, o.useEffectEvent)(p)
          ;(A[13] !== S || A[14] !== ee || A[15] !== M
            ? ((m = () => {
                let e = D.current
                return (
                  M && ee(),
                  () => {
                    ;((U.current = U.current + 1), e?.pause(), S?.(!1))
                  }
                )
              }),
              (A[13] = S),
              (A[14] = ee),
              (A[15] = M),
              (A[16] = m))
            : (m = A[16]),
            A[17] !== S || A[18] !== M || A[19] !== R
              ? ((h = [S, M, R]), (A[17] = S), (A[18] = M), (A[19] = R), (A[20] = h))
              : (h = A[20]),
            (0, o.useEffect)(m, h),
            A[21] !== j
              ? ((f = (0, n.A)("min-h-0 overflow-y-auto select-none", j)), (A[21] = j), (A[22] = f))
              : (f = A[22]),
            A[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, a.jsx)("legend", {
                  className: "sr-only",
                  children: (0, a.jsx)(s.A, {
                    id: "settings.general.realtimeVoice.choose",
                    defaultMessage: "Choose a voice",
                    description: "Accessible label for the realtime voice picker",
                  }),
                })),
                (A[23] = g))
              : (g = A[23]))
          let et = Q.map((e) =>
            (0, a.jsxs)(
              "section",
              {
                children: [
                  "" !== e
                    ? (0, a.jsx)("h3", { className: "mb-2 text-sm font-medium text-secondary", children: e })
                    : null,
                  (0, a.jsx)(c.t, {
                    children: (X.get(e) ?? []).map((e) =>
                      (0, a.jsx)(
                        l.lu,
                        {
                          id: `${P}-${e.slug}`,
                          ariaLabel: e.name,
                          autoFocus: O && e.slug === I,
                          checked: I === e.slug,
                          indicator: "checkmark",
                          label: e.name,
                          name: P,
                          value: e.slug,
                          onChange: () => {
                            ;(L && H(Z), C(e.slug), J(e))
                          },
                          onClick: () => {
                            I === e.slug && J(e)
                          },
                        },
                        e.slug,
                      ),
                    ),
                  }),
                ],
              },
              e,
            ),
          )
          return (
            A[24] !== et
              ? ((v = (0, a.jsx)("div", { className: "flex flex-col gap-6", children: et })), (A[24] = et), (A[25] = v))
              : (v = A[25]),
            A[26] !== S
              ? ((x = (0, a.jsx)("audio", {
                  ref: D,
                  className: "hidden",
                  preload: "none",
                  onEnded: () => S?.(!1),
                  onError: () => S?.(!1),
                  onPause: () => S?.(!1),
                  onPlay: () => S?.(!0),
                })),
                (A[26] = S),
                (A[27] = x))
              : (x = A[27]),
            A[28] !== z
              ? ((b = z
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "mt-2 text-sm text-danger",
                      children: (0, a.jsx)(s.A, {
                        id: "settings.general.realtimeVoice.previewUnavailable",
                        defaultMessage: "Preview unavailable",
                        description: "Error shown when a prerecorded voice preview cannot play",
                      }),
                    })
                  : null),
                (A[28] = z),
                (A[29] = b))
              : (b = A[29]),
            A[30] !== _ || A[31] !== g || A[32] !== v || A[33] !== x || A[34] !== b
              ? ((y = (0, a.jsxs)("fieldset", { disabled: _, children: [g, v, x, b] })),
                (A[30] = _),
                (A[31] = g),
                (A[32] = v),
                (A[33] = x),
                (A[34] = b),
                (A[35] = y))
              : (y = A[35]),
            A[36] !== f || A[37] !== y
              ? ((w = (0, a.jsx)("div", { className: f, children: y })), (A[36] = f), (A[37] = y), (A[38] = w))
              : (w = A[38]),
            w
          )
        },
      },
    )
  },
  RJ8K(e, t, i) {
    var a = i("ABep"),
      r = i("QosV"),
      n = i("on57"),
      o = i("zd8w"),
      s = i("Wf1j"),
      l = i("oyxz"),
      c = i("GO7r"),
      d = i("MBM1"),
      u = i("KUNU")
    i.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            i,
            p,
            m,
            h,
            f,
            g,
            v,
            x,
            b,
            y,
            w,
            A,
            j,
            E,
            _,
            S,
            C,
            N,
            R,
            T,
            V,
            I,
            k,
            O,
            M,
            L,
            P,
            D,
            U,
            z,
            B,
            $,
            F,
            H,
            G,
            W,
            Z = (0, r.c)(123),
            {
              autoFocusSelectedVoice: X,
              compactLayout: K,
              initialVoice: Y,
              onVoiceChange: q,
              paletteIndex: Q,
              playPreviewOnInitialRender: J,
              previewEnabled: ee,
              voices: et,
            } = e,
            ei = void 0 !== X && X,
            ea = void 0 !== K && K,
            er = void 0 === Q ? 0 : Q,
            en = void 0 === ee || ee,
            eo = (0, s.A)(),
            es = (0, o.useId)(),
            el = (0, o.useId)(),
            ec = (0, o.useRef)(null),
            [ed] = (0, o.useState)(et),
            [eu, ep] = (0, o.useState)(null),
            [em, eh] = (0, o.useState)(Y.slug),
            [ef, eg] = (0, o.useState)("idle"),
            [ev, ex] = (0, o.useState)(void 0 !== J && J)
          Z[0] !== ed || Z[1] !== eu || Z[2] !== em || Z[3] !== et
            ? ((t = eu ?? (et.some((e) => e.slug === em) ? et : ed)),
              (Z[0] = ed),
              (Z[1] = eu),
              (Z[2] = em),
              (Z[3] = et),
              (Z[4] = t))
            : (t = Z[4])
          let eb = t
          Z[5] !== em ? ((i = (e) => e.slug === em), (Z[5] = em), (Z[6] = i)) : (i = Z[6])
          let ey = eb.findIndex(i),
            ew = et.find((e) => e.slug === em) ?? eb[ey]
          if (
            (Z[7] !== en || Z[8] !== ev
              ? ((p = () => {
                  let e = ec.current
                  if (null == e) return
                  let t = !1
                  return (
                    en &&
                      ev &&
                      ((e.currentTime = 0),
                      e.play().catch(() => {
                        t || eg("error")
                      })),
                    () => {
                      ;((t = !0), e.pause())
                    }
                  )
                }),
                (Z[7] = en),
                (Z[8] = ev),
                (Z[9] = p))
              : (p = Z[9]),
            (0, o.useEffect)(p, [en, ew?.previewUrl, ev]),
            null == ew)
          ) {
            let e
            return (
              Z[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(l.A, {
                      id: "settings.general.realtimeVoice.noVoices",
                      defaultMessage: "No compatible voices are available",
                      description: "Message shown when no compatible realtime voices are available",
                    }),
                  })),
                  (Z[10] = e))
                : (e = Z[10]),
              e
            )
          }
          Z[11] !== q || Z[12] !== eb || Z[13] !== el || Z[14] !== em
            ? ((m = (e, t) => {
                let i = eb[(e + eb.length) % eb.length]
                null != i &&
                  i.slug !== em &&
                  (ec.current?.pause(),
                  ep(eb),
                  eg("idle"),
                  ex(!0),
                  eh(i.slug),
                  q(i.slug),
                  void 0 !== t && t && document.getElementById(`${el}-${i.slug}`)?.focus())
              }),
              (Z[11] = q),
              (Z[12] = eb),
              (Z[13] = el),
              (Z[14] = em),
              (Z[15] = m))
            : (m = Z[15])
          let eA = m
          Z[16] !== ef || Z[17] !== ev
            ? ((h = () => {
                let e = ec.current
                if (null != e) {
                  if ("playing" === ef) return void e.pause()
                  if (!ev) return void ex(!0)
                  ;(("ended" === ef || "error" === ef) && ((e.currentTime = 0), eg("idle")),
                    e.play().catch(() => eg("error")))
                }
              }),
              (Z[16] = ef),
              (Z[17] = ev),
              (Z[18] = h))
            : (h = Z[18])
          let ej = h
          switch (ef) {
            case "ended":
              f = eo.formatMessage(
                {
                  id: "settings.general.realtimeVoice.previewReplay",
                  defaultMessage: "Replay {name} preview",
                  description: "Accessible label for replaying a voice preview",
                },
                { name: ew.name },
              )
              break
            case "error":
              f = eo.formatMessage(
                {
                  id: "settings.general.realtimeVoice.previewRetry",
                  defaultMessage: "Retry {name} preview",
                  description: "Accessible label for retrying a voice preview",
                },
                { name: ew.name },
              )
              break
            case "idle":
              f = eo.formatMessage(
                {
                  id: "settings.general.realtimeVoice.previewPlay",
                  defaultMessage: "Play {name} preview",
                  description: "Accessible label for playing a voice preview",
                },
                { name: ew.name },
              )
              break
            case "playing":
              f = eo.formatMessage(
                {
                  id: "settings.general.realtimeVoice.previewPause",
                  defaultMessage: "Pause {name} preview",
                  description: "Accessible label for pausing a voice preview",
                },
                { name: ew.name },
              )
          }
          let eE = !ea && "pt-5 pb-1"
          Z[19] !== eE
            ? ((g = (0, n.A)("flex w-full flex-col items-center", eE)), (Z[19] = eE), (Z[20] = g))
            : (g = Z[20])
          let e_ = !en,
            eS = ea ? "preview" : "overlay",
            eC = "playing" === ef ? 0.48 : 0.08,
            eN = "playing" === ef ? "speaking" : "listening"
          ;(Z[21] !== er || Z[22] !== eS || Z[23] !== eC || Z[24] !== eN
            ? ((v = (0, a.jsx)(u.P, {
                glowEnabled: !1,
                paletteIndex: er,
                phase: "active",
                placement: "center",
                presentation: eS,
                previewAudioLevel: eC,
                voiceActivity: eN,
              })),
              (Z[21] = er),
              (Z[22] = eS),
              (Z[23] = eC),
              (Z[24] = eN),
              (Z[25] = v))
            : (v = Z[25]),
            Z[26] !== f || Z[27] !== ew.orbTreatment || Z[28] !== e_ || Z[29] !== v || Z[30] !== ej
              ? ((x = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": f,
                  className:
                    "relative size-36 cursor-interaction rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "data-orb-treatment": ew.orbTreatment,
                  disabled: e_,
                  onClick: ej,
                  children: v,
                })),
                (Z[26] = f),
                (Z[27] = ew.orbTreatment),
                (Z[28] = e_),
                (Z[29] = v),
                (Z[30] = ej),
                (Z[31] = x))
              : (x = Z[31]))
          let eR = en && ev ? ew.previewUrl : void 0
          ;(Z[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = () => eg("ended")),
              (y = () => eg("error")),
              (w = () => eg("idle")),
              (A = () => eg("playing")),
              (Z[32] = b),
              (Z[33] = y),
              (Z[34] = w),
              (Z[35] = A))
            : ((b = Z[32]), (y = Z[33]), (w = Z[34]), (A = Z[35])),
            Z[36] !== eR
              ? ((j = (0, a.jsx)("audio", {
                  ref: ec,
                  className: "hidden",
                  preload: "none",
                  src: eR,
                  onEnded: b,
                  onError: y,
                  onPause: w,
                  onPlay: A,
                })),
                (Z[36] = eR),
                (Z[37] = j))
              : (j = Z[37]))
          let eT = ea ? "mt-6 w-full max-w-72" : "mt-3 gap-6"
          ;(Z[38] !== eT
            ? ((E = (0, n.A)("flex items-center text-center", eT)), (Z[38] = eT), (Z[39] = E))
            : (E = Z[39]),
            Z[40] !== eo
              ? ((_ = eo.formatMessage({
                  id: "settings.general.realtimeVoice.previous",
                  defaultMessage: "Previous voice",
                  description: "Button to select the previous realtime voice",
                })),
                (Z[40] = eo),
                (Z[41] = _))
              : (_ = Z[41]))
          let eV = eb.length < 2
          ;(Z[42] !== eA || Z[43] !== ey
            ? ((S = () => eA(ey - 1)), (Z[42] = eA), (Z[43] = ey), (Z[44] = S))
            : (S = Z[44]),
            Z[45] !== ea
              ? ((C = ea
                  ? (0, a.jsx)(c.KBq, {})
                  : (0, a.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm rotate-180" })),
                (Z[45] = ea),
                (Z[46] = C))
              : (C = Z[46]),
            Z[47] !== _ || Z[48] !== eV || Z[49] !== S || Z[50] !== C
              ? ((N = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": _,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: eV,
                  onClick: S,
                  children: C,
                })),
                (Z[47] = _),
                (Z[48] = eV),
                (Z[49] = S),
                (Z[50] = C),
                (Z[51] = N))
              : (N = Z[51]))
          let eI = ea ? "min-w-0 flex-1" : "w-56 gap-1"
          ;(Z[52] !== eI ? ((R = (0, n.A)("flex flex-col", eI)), (Z[52] = eI), (Z[53] = R)) : (R = Z[53]),
            Z[54] !== ew.name
              ? ((T = (0, a.jsx)("p", { className: "text-xl font-semibold", children: ew.name })),
                (Z[54] = ew.name),
                (Z[55] = T))
              : (T = Z[55]),
            Z[56] !== ew.description
              ? ((V = (0, a.jsx)("p", { className: "text-sm text-secondary", children: ew.description })),
                (Z[56] = ew.description),
                (Z[57] = V))
              : (V = Z[57]),
            Z[58] !== R || Z[59] !== T || Z[60] !== V
              ? ((I = (0, a.jsxs)("div", { className: R, children: [T, V] })),
                (Z[58] = R),
                (Z[59] = T),
                (Z[60] = V),
                (Z[61] = I))
              : (I = Z[61]),
            Z[62] !== eo
              ? ((k = eo.formatMessage({
                  id: "settings.general.realtimeVoice.next",
                  defaultMessage: "Next voice",
                  description: "Button to select the next realtime voice",
                })),
                (Z[62] = eo),
                (Z[63] = k))
              : (k = Z[63]))
          let ek = eb.length < 2
          ;(Z[64] !== eA || Z[65] !== ey
            ? ((O = () => eA(ey + 1)), (Z[64] = eA), (Z[65] = ey), (Z[66] = O))
            : (O = Z[66]),
            Z[67] !== ea
              ? ((M = ea ? (0, a.jsx)(c.j1b, {}) : (0, a.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm" })),
                (Z[67] = ea),
                (Z[68] = M))
              : (M = Z[68]),
            Z[69] !== k || Z[70] !== ek || Z[71] !== O || Z[72] !== M
              ? ((L = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": k,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: ek,
                  onClick: O,
                  children: M,
                })),
                (Z[69] = k),
                (Z[70] = ek),
                (Z[71] = O),
                (Z[72] = M),
                (Z[73] = L))
              : (L = Z[73]),
            Z[74] !== E || Z[75] !== N || Z[76] !== I || Z[77] !== L
              ? ((P = (0, a.jsxs)("div", { className: E, children: [N, I, L] })),
                (Z[74] = E),
                (Z[75] = N),
                (Z[76] = I),
                (Z[77] = L),
                (Z[78] = P))
              : (P = Z[78]),
            Z[79] !== ef
              ? ((D =
                  "error" === ef
                    ? (0, a.jsx)("p", {
                        role: "alert",
                        className: "mt-2 text-xs text-danger",
                        children: (0, a.jsx)(l.A, {
                          id: "settings.general.realtimeVoice.previewUnavailable",
                          defaultMessage: "Preview unavailable",
                          description: "Error shown when a prerecorded voice preview cannot play",
                        }),
                      })
                    : null),
                (Z[79] = ef),
                (Z[80] = D))
              : (D = Z[80]))
          let eO = ea ? "h-10" : "mt-4"
          if (
            (Z[81] !== eO ? ((U = (0, n.A)("flex items-center gap-3", eO)), (Z[81] = eO), (Z[82] = U)) : (U = Z[82]),
            Z[83] !== eA || Z[84] !== eb.length || Z[85] !== ey
              ? ((z = (e) => {
                  let t = null
                  ;("ArrowLeft" === e.key || "ArrowUp" === e.key
                    ? (t = ey - 1)
                    : "ArrowRight" === e.key || "ArrowDown" === e.key
                      ? (t = ey + 1)
                      : "Home" === e.key
                        ? (t = 0)
                        : "End" === e.key && (t = eb.length - 1),
                    null != t && (e.preventDefault(), eA(t, !0)))
                }),
                (Z[83] = eA),
                (Z[84] = eb.length),
                (Z[85] = ey),
                (Z[86] = z))
              : (z = Z[86]),
            Z[87] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, a.jsx)(l.A, {
                  id: "settings.general.realtimeVoice.choose",
                  defaultMessage: "Choose a voice",
                  description: "Accessible label for the realtime voice picker",
                })),
                (Z[87] = B))
              : (B = Z[87]),
            Z[88] !== es
              ? (($ = (0, a.jsx)("span", { id: es, className: "sr-only", children: B })), (Z[88] = es), (Z[89] = $))
              : ($ = Z[89]),
            Z[90] !== ei ||
              Z[91] !== eA ||
              Z[92] !== ea ||
              Z[93] !== eo ||
              Z[94] !== eb ||
              Z[95] !== el ||
              Z[96] !== ew.slug)
          ) {
            let e
            ;(Z[98] !== ei ||
            Z[99] !== eA ||
            Z[100] !== ea ||
            Z[101] !== eo ||
            Z[102] !== eb.length ||
            Z[103] !== el ||
            Z[104] !== ew.slug
              ? ((e = (e, t) => {
                  let i = e.slug === ew.slug
                  return (0, a.jsx)(
                    "button",
                    {
                      id: `${el}-${e.slug}`,
                      type: "button",
                      role: "radio",
                      autoFocus: ei && i,
                      "aria-checked": i,
                      "aria-label": eo.formatMessage(
                        {
                          id: "settings.general.realtimeVoice.optionLabel",
                          defaultMessage: "{name}: {description}",
                          description: "Accessible label for one realtime voice option",
                        },
                        { description: e.description, name: e.name },
                      ),
                      "aria-posinset": t + 1,
                      "aria-setsize": eb.length,
                      className: (0, n.A)(
                        "cursor-interaction rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        ea ? "size-2" : "size-2.5",
                        i ? "bg-text-emphasis" : "bg-text-tertiary/30",
                      ),
                      tabIndex: i ? 0 : -1,
                      onClick: () => eA(t),
                    },
                    e.slug,
                  )
                }),
                (Z[98] = ei),
                (Z[99] = eA),
                (Z[100] = ea),
                (Z[101] = eo),
                (Z[102] = eb.length),
                (Z[103] = el),
                (Z[104] = ew.slug),
                (Z[105] = e))
              : (e = Z[105]),
              (F = eb.map(e)),
              (Z[90] = ei),
              (Z[91] = eA),
              (Z[92] = ea),
              (Z[93] = eo),
              (Z[94] = eb),
              (Z[95] = el),
              (Z[96] = ew.slug),
              (Z[97] = F))
          } else F = Z[97]
          return (
            Z[106] !== es || Z[107] !== U || Z[108] !== z || Z[109] !== $ || Z[110] !== F
              ? ((H = (0, a.jsxs)("div", {
                  role: "radiogroup",
                  "aria-labelledby": es,
                  className: U,
                  tabIndex: -1,
                  onKeyDown: z,
                  children: [$, F],
                })),
                (Z[106] = es),
                (Z[107] = U),
                (Z[108] = z),
                (Z[109] = $),
                (Z[110] = F),
                (Z[111] = H))
              : (H = Z[111]),
            Z[112] !== ew.description || Z[113] !== ew.name
              ? ((G = (0, a.jsx)("span", {
                  className: "sr-only",
                  "aria-live": "polite",
                  children: (0, a.jsx)(l.A, {
                    id: "settings.general.realtimeVoice.selectedAnnouncement",
                    defaultMessage: "Selected voice: {name}. {description}",
                    description: "Screen reader announcement after selecting a realtime voice",
                    values: { description: ew.description, name: ew.name },
                  }),
                })),
                (Z[112] = ew.description),
                (Z[113] = ew.name),
                (Z[114] = G))
              : (G = Z[114]),
            Z[115] !== g || Z[116] !== x || Z[117] !== j || Z[118] !== P || Z[119] !== D || Z[120] !== H || Z[121] !== G
              ? ((W = (0, a.jsxs)("div", { className: g, children: [x, j, P, D, H, G] })),
                (Z[115] = g),
                (Z[116] = x),
                (Z[117] = j),
                (Z[118] = P),
                (Z[119] = D),
                (Z[120] = H),
                (Z[121] = G),
                (Z[122] = W))
              : (W = Z[122]),
            W
          )
        },
      },
    )
  },
  Nc5R(e, t, i) {
    i.d(t, { m: () => b, K: () => y })
    var a = i("iRMi"),
      r = i("WFY2"),
      n = i("uIjo"),
      o = i("DBCl"),
      s = i("vpsD"),
      l = i("N2rm"),
      c = i("Dgwo"),
      d = i("shRG"),
      u = i("lqHG"),
      p = i("wCOm"),
      m = i("QLhf"),
      h = i("NF58"),
      f = i("BVdX"),
      g = i("pyoT"),
      v = i("ay73"),
      x = i("IJee")
    function b(e) {
      switch (e.source) {
        case "composer_button_existing_thread":
          return { type: "exact", ephemeral: e.ephemeral, locator: e.locator }
        case "composer_button_new_thread":
          return { type: "new", hostId: e.hostId ?? "local" }
        case "avatar_overlay_button_new_thread":
        case "global_hotkey_new_thread":
          return { type: "new", hostId: "local" }
      }
    }
    async function y(e, t, i) {
      if ("exact" === e.type)
        return (
          t.startupAnalytics?.connectionSetup.setIsNewConversation(!1),
          i(
            !0 === e.ephemeral
              ? { locator: e.locator, memoryPreferencesToInitialize: null }
              : await n.F6.trackOperation(
                  t.startupAnalytics,
                  a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_OPEN,
                  () =>
                    (async function (e, t) {
                      let { conversationId: i, hostId: r } = e
                      if (
                        !(
                          await n.F6.trackOperation(
                            t.startupAnalytics,
                            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_LOAD,
                            () => (0, c.V)(t.scope, r).loadRecentConversationIds([i]),
                          )
                        ).includes(i)
                      ) {
                        let e = Error("Voice chat is unavailable")
                        throw (
                          t.startupAnalytics?.recordErrorOperation(
                            e,
                            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_LOAD,
                          ),
                          e
                        )
                      }
                      let o = await n.F6.trackOperation(
                        t.startupAnalytics,
                        a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                        () =>
                          (0, c.V)(t.scope, r).resumeConversation(
                            {
                              conversationId: i,
                              model: null,
                              reasoningEffort: null,
                              workspaceRoots: t.existingThreadVoiceEnabled ? t.workspaceRootsForLocalExecution : ["/"],
                              useAppServerPermissionDefault: !1,
                              preserveServerConfiguration: r === l.iw,
                              showThreadGoalResumeConfirmation: !1,
                            },
                            { readResumeInputs: (0, d.jQ)(t.scope, r) },
                          ),
                      )
                      if ("not-ready" === o.status) {
                        let e = new s.uZ(o)
                        throw (
                          t.startupAnalytics?.recordErrorOperation(
                            e,
                            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                          ),
                          e
                        )
                      }
                      let { threadSource: u } = o
                      if (!t.existingThreadVoiceEnabled && u !== x.S) throw Error("This thread is not a voice chat")
                      return { locator: e, memoryPreferencesToInitialize: null }
                    })(e.locator, t),
                ),
          )
        )
      let v = await n.F6.trackOperation(
        t.startupAnalytics,
        a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_CREATE,
        () =>
          (async function (e, t) {
            let {
                activeCollaborationMode: i,
                agentMode: r,
                currentLocalExecutionCwd: s,
                existingThreadVoiceEnabled: l,
                memoryPreferences: d,
                permissionProfileId: v,
                projectId: b,
                pageCompanion: y,
                newThreadBaseInstructions: w,
                newThreadDeveloperInstructions: A,
                realtimeVoiceDynamicTools: j,
                realtimeVoiceToolsDeveloperInstructions: E,
                serviceTier: _,
                shouldSendPermissionOverrides: S,
                workspaceRootsForLocalExecution: C,
              } = t,
              N = null == b && (0, h.wW)(C),
              R = await n.F6.trackOperation(
                t.startupAnalytics,
                a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_WORKSPACE_SELECTION,
                () =>
                  null != b
                    ? (0, m.p)({ hostId: e, projectId: b, prompt: "", workspaceRoots: C })
                    : (0, h.fO)(C, { directoryName: "realtime-voice-chat" }),
              ),
              T = R.workspaceRoots,
              V = R.cwd ?? s,
              { config: I } = await n.F6.trackOperation(
                t.startupAnalytics,
                a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_CONFIG_READ,
                () =>
                  (0, c.V)(t.scope, e).sendRequest(
                    "config/read",
                    { includeLayers: !1, cwd: V },
                    { priority: "critical" },
                  ),
              ),
              k = d ?? (0, f.Y)(I),
              O = S ? (0, o.$5i)(r, T, (0, p.Y$)(I), v) : null,
              M = l ? A : [A, E].filter((e) => null != e).join("\n\n"),
              L = null != y ? "user" : "voice_chat"
            null != y && t.scope.get(g.spaceAccountId$) !== y.accountId && AbortSignal.abort().throwIfAborted()
            let P = await n.F6.trackOperation(
              t.startupAnalytics,
              a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_START,
              () =>
                (0, u.g)(t.scope, e, {
                  input: [],
                  cwd: V,
                  workspaceRoots: T,
                  projectAssignment: null == b ? void 0 : R.projectAssignment,
                  collaborationMode: i,
                  serviceTier: _,
                  ...(null == O
                    ? { useAppServerPermissionDefault: !0 }
                    : { permissionsConfig: O, approvalsReviewer: O.approvalsReviewer }),
                  threadSource: l ? L : x.S,
                  memoryPreferences: d,
                  workspaceKind: N ? "projectless" : "project",
                  skipFallbackConfigReadForProjectlessCwd: N,
                  threadStartKind: l ? "default" : "realtime_voice",
                  realtimeVoiceDynamicTools: j,
                  ...(l ? {} : { baseInstructions: w }),
                  ...(null == M ? {} : { additionalDeveloperInstructions: M }),
                  ...(N ? { projectlessOutputDirectory: R.projectlessOutputDirectory } : {}),
                }),
            )
            if ("created" !== P.status) {
              let e = (0, u.c)(t.scope, P)
              throw (
                t.startupAnalytics?.recordErrorOperation(
                  e,
                  a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_START,
                ),
                e
              )
            }
            return {
              locator: { hostId: e, conversationId: P.conversationId },
              initializationError: (0, u.c)(t.scope, P)?.message,
              memoryPreferencesToInitialize: k,
            }
          })(e.hostId, t),
      )
      if ((t.startupAnalytics?.connectionSetup.setIsNewConversation(!0), null != v.initializationError)) {
        let e = Error(v.initializationError)
        throw (
          t.startupAnalytics?.recordErrorOperation(
            e,
            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_INITIALIZE,
          ),
          e
        )
      }
      try {
        let e = await i(v)
        if ("active" === e)
          (0, c.V)(t.scope, v.locator.hostId)
            .setThreadTitle(v.locator.conversationId, t.pageCompanion?.title ?? o.fH5)
            .catch((e) => {
              r.v.warning("Failed to set realtime conversation title", { safe: {}, sensitive: { error: e } })
            })
        else await w(v, t)
        return e
      } catch (e) {
        throw (w(v, t), e)
      }
    }
    async function w(e, t) {
      try {
        await (async function (e, t) {
          await (0, c.V)(t.scope, e.locator.hostId).archiveConversation(e.locator.conversationId, {
            useAppServerPins: t.scope.get(v.XF),
            source: "realtime_voice_provisional",
          })
        })(e, t)
      } catch (e) {
        r.v.warning("Failed to discard provisional realtime voice thread", { safe: {}, sensitive: { error: e } })
      }
    }
  },
}
//# sourceMappingURL=679632.b502a10a11.js.map
