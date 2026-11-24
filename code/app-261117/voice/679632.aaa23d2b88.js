export const __rspack_esm_ids = [679632]
export const __webpack_modules__ = {
  rqFo(e, t, a) {
    var r = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 21,
          height: 20,
          viewBox: "0 0 21 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M11.2878 9.46029L11.4421 9.49545L17.8913 11.43L18.0642 11.4974C18.8215 11.8649 18.8705 12.9544 18.1491 13.388L17.9821 13.4701L15.1872 14.5872L14.07 17.3822C13.7134 18.2734 12.4912 18.2756 12.0974 17.4642L12.03 17.2913L10.0954 10.8421C9.8634 10.0687 10.5245 9.34418 11.2878 9.46029ZM13.0984 16.2288L13.9929 13.9954L14.0388 13.8949C14.1579 13.6675 14.3549 13.4891 14.5954 13.3929L16.8288 12.4984L11.5007 10.9007L13.0984 16.2288ZM6.50362 12.9749C6.76326 12.7153 7.18434 12.7154 7.44405 12.9749C7.70375 13.2346 7.70375 13.6557 7.44405 13.9154L5.67648 15.6829C5.41678 15.9426 4.99574 15.9426 4.73605 15.6829C4.47652 15.4232 4.4764 15.0022 4.73605 14.7425L6.50362 12.9749ZM3.43722 7.3265L5.85226 7.97299L5.97823 8.02084C6.25482 8.1591 6.40594 8.47712 6.32296 8.78744C6.23981 9.09774 5.94995 9.298 5.64132 9.27963L5.50851 9.25814L3.09347 8.61068L2.96749 8.56283C2.6908 8.42452 2.53958 8.10666 2.62276 7.79623C2.70597 7.4859 2.99571 7.28652 3.3044 7.30502L3.43722 7.3265ZM15.447 4.05111C15.7051 3.88059 16.0556 3.90894 16.2829 4.13607C16.5426 4.39577 16.5426 4.8168 16.2829 5.0765L14.5153 6.84408C14.2556 7.10378 13.8346 7.10378 13.5749 6.84408C13.3154 6.58437 13.3153 6.16329 13.5749 5.90365L15.3425 4.13607L15.447 4.05111ZM8.3962 2.02279C8.75096 1.92773 9.1156 2.13874 9.21065 2.49349L9.85812 4.90853L9.8796 5.04135C9.89797 5.34998 9.69771 5.63984 9.38741 5.72299C9.07711 5.80592 8.75905 5.65484 8.62081 5.37826L8.57296 5.25228L7.92648 2.83724L7.90499 2.70443C7.8865 2.39577 8.08593 2.10603 8.3962 2.02279Z",
            fill: "currentColor",
          }),
        })))
  },
  QLhf(e, t, a) {
    var r = a("f4th"),
      l = a("kfGJ"),
      n = a("NF58")
    a.d(
      t,
      {},
      {
        p: async function ({ hostId: e, projectId: t, prompt: a, workspaceRoots: s }) {
          if (e === l.fI && null != t) {
            let e = await (0, r.q)({ projectId: t, prompt: a })
            if (null == e) throw Error("Unknown local project")
            return e
          }
          let i = await (0, n.fO)(s, { hostId: e, prompt: a })
          return e === l.fI || null == t || null == i.cwd
            ? i
            : { ...i, projectAssignment: { projectKind: "remote", projectId: t, hostId: e } }
        },
      },
    )
  },
  BqvN(e, t, a) {
    a.d(t, { x: () => Q, c: () => J })
    var r = a("QosV"),
      l = a("qmMi"),
      n = a("DBCl"),
      s = a("Wf1j"),
      i = a("Ywss"),
      o = a("ChYf"),
      c = a("SGsN"),
      d = a("fj7z"),
      u = a("kXFg"),
      m = a("X6Vn"),
      p = a("ABep"),
      f = a("irkb"),
      g = a("fA1m"),
      x = a("zd8w"),
      h = a("oyxz"),
      v = a("sT8g"),
      b = a("nDjx"),
      y = a("uNjk"),
      w = a("g2p6"),
      A = a("Sm6l"),
      j = a("JNtf"),
      _ = a("mUDD"),
      E = a("RNul"),
      S = a("F0xz"),
      R = a("wwME"),
      C = a("an0a"),
      N = a("OWtl"),
      I = a("RxZZ"),
      V = a("AWNZ"),
      T = a("ZEx5"),
      O = a("OMIV"),
      M = a("Z908"),
      k = a("ku2f"),
      L = a("CZ9G"),
      P = a("i663"),
      D = a("RJ8K")
    let U = (0, g.h)()
    function z(e) {
      let t,
        a,
        n,
        i,
        o,
        c,
        d,
        u,
        m,
        g,
        b,
        w,
        A = (0, r.c)(42),
        {
          sourceComposerScope: E,
          entryPoint: S,
          initialStep: V,
          onClose: T,
          originPath: O,
          request: k,
          workHomePolicyAcceptance: L,
        } = e,
        P = void 0 === V ? 0 : V,
        D = (0, l.gh)(N.u),
        { hostId: z } = (0, C.K5)(),
        { platform: F } = (0, R.V)(),
        H = "macOS" === F,
        W = (0, l._U)(v.lN, z),
        Z = (0, f.jE)(),
        [X, q] = (0, x.useState)(P),
        [G, Y] = (0, x.useState)(null),
        [Q, J] = (0, x.useState)(!1),
        ee = (0, x.useRef)(P >= 1),
        et = (0, x.useRef)(!0),
        ea = (0, s.A)()
      A[0] !== z || A[1] !== Z || A[2] !== D
        ? ((t = async (e, t) => {
            let a = void 0 !== t && t
            ;(Y(e),
              J(!1),
              await (async () => {
                try {
                  if (a && !(await (0, v.MX)({ scope: D, hostId: z, queryClient: Z }))) return
                  ;(D.set(y.L, !0), await (0, I.gc)(D, U.screenContextEnabled, e))
                } catch {
                  J(!0)
                }
              })().finally(() => {
                Y(null)
              }))
          }),
          (A[0] = z),
          (A[1] = Z),
          (A[2] = D),
          (A[3] = t))
        : (t = A[3])
      let er = t
      A[4] !== H || A[5] !== er
        ? ((a = () => {
            H ? (q(1), ee.current || ((ee.current = !0), er(!0, !0))) : q(2)
          }),
          (A[4] = H),
          (A[5] = er),
          (A[6] = a))
        : (a = A[6])
      let el = a
      A[7] !== T
        ? ((n = () => {
            ;((et.current = !1), T())
          }),
          (A[7] = T),
          (A[8] = n))
        : (n = A[8])
      let en = n
      return (
        A[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { "aria-describedby": void 0 }), (A[9] = i))
          : (i = A[9]),
        A[10] !== ea
          ? ((o = ea.formatMessage({ id: "realtimeVoice.onboarding.close", defaultMessage: "Close voice chat setup" })),
            (A[10] = ea),
            (A[11] = o))
          : (o = A[11]),
        A[12] !== en
          ? ((c = (e) => {
              e || en()
            }),
            (A[12] = en),
            (A[13] = c))
          : (c = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, p.jsx)(j.L3, {
              className: "sr-only",
              children: (0, p.jsx)(h.A, { id: "realtimeVoice.onboarding.title", defaultMessage: "Set up voice chat" }),
            })),
            (A[14] = d))
          : (d = A[14]),
        A[15] !== el || A[16] !== S || A[17] !== X
          ? ((u =
              0 === X
                ? (0, p.jsx)(K, {
                    primaryAction: (0, p.jsx)(h.A, { id: "realtimeVoice.onboarding.next", defaultMessage: "Next" }),
                    onSubmit: el,
                    children: (0, p.jsx)(M.b, { entryPoint: S }),
                  })
                : null),
            (A[15] = el),
            (A[16] = S),
            (A[17] = X),
            (A[18] = u))
          : (u = A[18]),
        A[19] !== Q || A[20] !== W || A[21] !== G || A[22] !== er || A[23] !== X
          ? ((m =
              1 === X
                ? (0, p.jsx)($, {
                    isAppshotAvailable: !0 === G || W,
                    pendingEnabled: G,
                    updateError: Q,
                    onBack: () => q(0),
                    onEnabledChange: (e) => {
                      er(e)
                    },
                    onNext: () => q(2),
                  })
                : null),
            (A[19] = Q),
            (A[20] = W),
            (A[21] = G),
            (A[22] = er),
            (A[23] = X),
            (A[24] = m))
          : (m = A[24]),
        A[25] !== H ||
        A[26] !== en ||
        A[27] !== S ||
        A[28] !== O ||
        A[29] !== k ||
        A[30] !== E ||
        A[31] !== X ||
        A[32] !== L
          ? ((g =
              2 === X
                ? (0, p.jsx)(B, {
                    onboarding: {
                      sourceComposerScope: E,
                      entryPoint: S,
                      originPath: O,
                      request: k,
                      workHomePolicyAcceptance: L,
                    },
                    isOpenRef: et,
                    onBack: () => q(+!!H),
                    onClose: en,
                  })
                : null),
            (A[25] = H),
            (A[26] = en),
            (A[27] = S),
            (A[28] = O),
            (A[29] = k),
            (A[30] = E),
            (A[31] = X),
            (A[32] = L),
            (A[33] = g))
          : (g = A[33]),
        A[34] !== m || A[35] !== g || A[36] !== u
          ? ((b = (0, p.jsxs)(_.R4, { className: "min-h-0 gap-5", size: "tall", children: [u, m, g] })),
            (A[34] = m),
            (A[35] = g),
            (A[36] = u),
            (A[37] = b))
          : (b = A[37]),
        A[38] !== b || A[39] !== o || A[40] !== c
          ? ((w = (0, p.jsxs)(j.lG, {
              open: !0,
              contentProps: i,
              dialogCloseLabel: o,
              contentClassName: "w-[min(480px,92vw)]",
              size: "feature",
              onOpenChange: c,
              children: [d, b],
            })),
            (A[38] = b),
            (A[39] = o),
            (A[40] = c),
            (A[41] = w))
          : (w = A[41]),
        w
      )
    }
    function $(e) {
      let t,
        a,
        l,
        n,
        s,
        i,
        o = (0, r.c)(15),
        { isAppshotAvailable: c, pendingEnabled: d, updateError: u, onBack: m, onEnabledChange: f, onNext: g } = e,
        x = (0, I.iK)(U.screenContextEnabled),
        v = c && (d ?? x)
      o[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, p.jsx)(h.A, { id: "realtimeVoice.onboarding.next", defaultMessage: "Next" })), (o[0] = t))
        : (t = o[0])
      let y = null != d
      ;(o[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, p.jsx)("img", { alt: "", "aria-hidden": !0, className: "h-20 w-24 object-contain", src: b })),
          (o[1] = a))
        : (a = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, p.jsx)("h1", {
              className: "heading-2xl font-normal tracking-tight text-default",
              children: (0, p.jsx)(h.A, {
                id: "realtimeVoice.onboarding.appshots.title",
                defaultMessage: "Bring your screen into the conversation",
              }),
            })),
            (o[2] = l))
          : (l = o[2]),
        o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, p.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                l,
                (0, p.jsx)("p", {
                  className: "text-base leading-6 text-secondary",
                  children: (0, p.jsx)(h.A, {
                    id: "realtimeVoice.onboarding.appshots.description",
                    defaultMessage:
                      "Appshots let ChatGPT use the active window\u2019s image and text when you ask about what\u2019s on screen",
                  }),
                }),
              ],
            })),
            (o[3] = n))
          : (n = o[3]))
      let w = null != d
      return (
        o[4] !== v || o[5] !== c || o[6] !== f || o[7] !== w || o[8] !== u
          ? ((s = (0, p.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center",
              children: [
                a,
                n,
                (0, p.jsx)(F, { enabled: v, isAppshotAvailable: c, isSaving: w, updateError: u, onEnabledChange: f }),
              ],
            })),
            (o[4] = v),
            (o[5] = c),
            (o[6] = f),
            (o[7] = w),
            (o[8] = u),
            (o[9] = s))
          : (s = o[9]),
        o[10] !== m || o[11] !== g || o[12] !== y || o[13] !== s
          ? ((i = (0, p.jsx)(K, { backAction: m, primaryAction: t, primaryDisabled: y, onSubmit: g, children: s })),
            (o[10] = m),
            (o[11] = g),
            (o[12] = y),
            (o[13] = s),
            (o[14] = i))
          : (i = o[14]),
        i
      )
    }
    function F(e) {
      let t,
        a,
        l,
        n,
        i,
        o,
        c,
        d,
        u = (0, r.c)(20),
        { enabled: m, isAppshotAvailable: f, isSaving: g, updateError: x, onEnabledChange: v } = e,
        b = (0, s.A)()
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, p.jsx)(h.A, {
            id: "realtimeVoice.onboarding.appshots.toggleLabel",
            defaultMessage: "Use Appshots",
          })),
          (a = (0, p.jsx)(h.A, {
            id: "realtimeVoice.onboarding.appshots.toggleDescription",
            defaultMessage: "You can turn this off anytime in Settings",
          })),
          (u[0] = t),
          (u[1] = a))
        : ((t = u[0]), (a = u[1])),
        u[2] !== g
          ? ((l = g
              ? (0, p.jsxs)("span", {
                  className: "inline-flex",
                  role: "status",
                  children: [
                    (0, p.jsx)(E.y, { className: "icon-xs text-secondary" }),
                    (0, p.jsx)("span", {
                      className: "sr-only",
                      children: (0, p.jsx)(h.A, {
                        id: "realtimeVoice.onboarding.appshots.saving",
                        defaultMessage: "Saving Appshots preference",
                      }),
                    }),
                  ],
                })
              : null),
            (u[2] = g),
            (u[3] = l))
          : (l = u[3]),
        u[4] !== b
          ? ((n = b.formatMessage({
              id: "realtimeVoice.onboarding.appshots.toggleAriaLabel",
              defaultMessage: "Use Appshots",
            })),
            (u[4] = b),
            (u[5] = n))
          : (n = u[5]))
      let y = !f || g
      return (
        u[6] !== m || u[7] !== v || u[8] !== n || u[9] !== y
          ? ((i = (0, p.jsx)(S.l, { ariaLabel: n, checked: m, disabled: y, onChange: v })),
            (u[6] = m),
            (u[7] = v),
            (u[8] = n),
            (u[9] = y),
            (u[10] = i))
          : (i = u[10]),
        u[11] !== l || u[12] !== i
          ? ((o = (0, p.jsx)(V.ic, {
              label: t,
              description: a,
              control: (0, p.jsxs)("div", { className: "flex items-center gap-2", children: [l, i] }),
            })),
            (u[11] = l),
            (u[12] = i),
            (u[13] = o))
          : (o = u[13]),
        u[14] !== f || u[15] !== x
          ? ((c =
              x || !f
                ? (0, p.jsx)("div", {
                    className: "border-t border-default px-4 py-3",
                    children: x
                      ? (0, p.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-danger",
                          children: (0, p.jsx)(h.A, {
                            id: "realtimeVoice.onboarding.appshots.error",
                            defaultMessage: "Appshots couldn\u2019t be updated",
                          }),
                        })
                      : (0, p.jsx)("p", {
                          className: "text-sm text-tertiary",
                          children: (0, p.jsx)(h.A, {
                            id: "realtimeVoice.onboarding.appshots.unavailable",
                            defaultMessage: "Appshots aren\u2019t available on this device",
                          }),
                        }),
                  })
                : null),
            (u[14] = f),
            (u[15] = x),
            (u[16] = c))
          : (c = u[16]),
        u[17] !== o || u[18] !== c
          ? ((d = (0, p.jsxs)(T.t, { className: "w-full max-w-md text-start", children: [o, c] })),
            (u[17] = o),
            (u[18] = c),
            (u[19] = d))
          : (d = u[19]),
        d
      )
    }
    function B(e) {
      let t,
        a,
        n = (0, r.c)(20),
        { onboarding: s, isOpenRef: i, onBack: o, onClose: c } = e,
        { data: d, error: u, refetch: m } = (0, l.Ul)(L.z),
        f = null != u || d?.voices.length === 0
      n[0] !== d ? ((t = d?.voices.find((e) => e.slug === d.effectiveVoiceSlug)), (n[0] = d), (n[1] = t)) : (t = n[1])
      let g = t
      if (null == d || null == g) {
        let e, t, a, r
        n[2] !== f
          ? ((e = f
              ? (0, p.jsx)(h.A, { id: "settings.general.realtimeVoice.retry", defaultMessage: "Retry" })
              : (0, p.jsx)(h.A, { id: "settings.general.realtimeVoice.loading", defaultMessage: "Loading\u2026" })),
            (n[2] = f),
            (n[3] = e))
          : (e = n[3])
        let l = !f
        return (
          n[4] !== f || n[5] !== m
            ? ((t = () => {
                f && m()
              }),
              (n[4] = f),
              (n[5] = m),
              (n[6] = t))
            : (t = n[6]),
          n[7] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, p.jsx)(Z, {})), (n[7] = a)) : (a = n[7]),
          n[8] !== o || n[9] !== e || n[10] !== l || n[11] !== t
            ? ((r = (0, p.jsx)(K, { backAction: o, primaryAction: e, primaryDisabled: l, onSubmit: t, children: a })),
              (n[8] = o),
              (n[9] = e),
              (n[10] = l),
              (n[11] = t),
              (n[12] = r))
            : (r = n[12]),
          r
        )
      }
      return (
        n[13] !== g || n[14] !== i || n[15] !== o || n[16] !== c || n[17] !== s || n[18] !== d
          ? ((a = (0, p.jsx)(
              H,
              { initialVoice: g, onboarding: s, isOpenRef: i, voiceCatalog: d, onBack: o, onClose: c },
              g.slug,
            )),
            (n[13] = g),
            (n[14] = i),
            (n[15] = o),
            (n[16] = c),
            (n[17] = s),
            (n[18] = d),
            (n[19] = a))
          : (a = n[19]),
        a
      )
    }
    function H(e) {
      let t,
        a,
        n,
        s,
        i,
        o,
        c,
        d,
        m,
        f = (0, r.c)(30),
        { initialVoice: g, onboarding: v, isOpenRef: b, onBack: y, onClose: A, voiceCatalog: j } = e,
        _ = (0, l.gh)(N.u)
      f[0] !== _ ? ((t = () => _.get(w.Sk)), (f[0] = _), (f[1] = t)) : (t = f[1])
      let [E] = (0, x.useState)(t),
        S = (0, l._U)(O.JW, "2182392068"),
        [R, C] = (0, x.useState)(g.slug),
        [I, V] = (0, x.useState)(!1),
        [T, M] = (0, x.useState)(!1)
      f[2] !== E || f[3] !== g.slug || f[4] !== b || f[5] !== A || f[6] !== v || f[7] !== _ || f[8] !== R
        ? ((a = async () => {
            ;(V(!0), M(!1))
            try {
              R !== g.slug && (await (0, k.H$)(_, R, E))
            } catch {
              b.current && (M(!0), V(!1))
              return
            }
            b.current &&
              (A(),
              await (0, u.eE)(_, v.sourceComposerScope, v.request, v.originPath, v.workHomePolicyAcceptance).catch(W))
          }),
          (f[2] = E),
          (f[3] = g.slug),
          (f[4] = b),
          (f[5] = A),
          (f[6] = v),
          (f[7] = _),
          (f[8] = R),
          (f[9] = a))
        : (a = f[9])
      let L = a
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, p.jsx)(h.A, { id: "realtimeVoice.onboarding.start", defaultMessage: "Start voice chat" })),
            (f[10] = n))
          : (n = f[10]),
        f[11] !== L ? ((s = () => void L()), (f[11] = L), (f[12] = s)) : (s = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, p.jsx)(Z, {})), (f[13] = i)) : (i = f[13]),
        f[14] !== g || f[15] !== S || f[16] !== I || f[17] !== j.voices || f[18] !== R
          ? ((o = S
              ? (0, p.jsx)(P.S, {
                  className: "mt-5 max-h-80 w-full text-start",
                  disabled: I,
                  previewEnabled: !I,
                  preserveSelectionOnRefresh: !0,
                  promoteSelectedGroup: !0,
                  value: R,
                  voices: j.voices,
                  onVoiceChange: (e) => C(e),
                })
              : (0, p.jsx)(D.I, {
                  initialVoice: j.voices.find((e) => e.slug === R) ?? g,
                  voices: j.voices,
                  onVoiceChange: (e) => C(e),
                })),
            (f[14] = g),
            (f[15] = S),
            (f[16] = I),
            (f[17] = j.voices),
            (f[18] = R),
            (f[19] = o))
          : (o = f[19]),
        f[20] !== T
          ? ((c = T
              ? (0, p.jsx)("p", {
                  role: "alert",
                  className: "mt-2 text-sm text-danger",
                  children: (0, p.jsx)(h.A, {
                    id: "settings.general.realtimeVoice.saveError",
                    defaultMessage: "Unable to save voice",
                  }),
                })
              : null),
            (f[20] = T),
            (f[21] = c))
          : (c = f[21]),
        f[22] !== o || f[23] !== c
          ? ((d = (0, p.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center text-center",
              children: [i, o, c],
            })),
            (f[22] = o),
            (f[23] = c),
            (f[24] = d))
          : (d = f[24]),
        f[25] !== I || f[26] !== y || f[27] !== s || f[28] !== d
          ? ((m = (0, p.jsx)(K, { backAction: y, primaryAction: n, primaryLoading: I, onSubmit: s, children: d })),
            (f[25] = I),
            (f[26] = y),
            (f[27] = s),
            (f[28] = d),
            (f[29] = m))
          : (m = f[29]),
        m
      )
    }
    function W() {}
    function Z() {
      let e,
        t,
        a = (0, r.c)(2)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, p.jsx)("h1", {
              className: "heading-lg font-normal tracking-tight text-default",
              children: (0, p.jsx)(h.A, {
                id: "realtimeVoice.onboarding.voice.title",
                defaultMessage: "Choose your voice",
              }),
            })),
            (a[0] = e))
          : (e = a[0]),
        a[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, p.jsxs)("div", {
              className: "flex flex-col gap-2 text-center",
              children: [
                e,
                (0, p.jsx)("p", {
                  className: "text-base leading-6 text-secondary",
                  children: (0, p.jsx)(h.A, {
                    id: "realtimeVoice.onboarding.voice.description",
                    defaultMessage: "You can change this anytime in Settings",
                  }),
                }),
              ],
            })),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function K(e) {
      let t,
        a,
        l,
        n,
        s,
        i,
        o = (0, r.c)(18),
        { backAction: c, children: d, onSubmit: u, primaryAction: m, primaryDisabled: f, primaryLoading: g } = e,
        x = void 0 !== f && f,
        v = void 0 !== g && g
      o[0] !== u
        ? ((t = (e) => {
            ;(e.preventDefault(), u())
          }),
          (o[0] = u),
          (o[1] = t))
        : (t = o[1])
      let b = t
      return (
        o[2] !== d
          ? ((a = (0, p.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center overflow-y-auto",
              children: d,
            })),
            (o[2] = d),
            (o[3] = a))
          : (a = o[3]),
        o[4] !== c || o[5] !== v
          ? ((l =
              null == c
                ? (0, p.jsx)("span", {})
                : (0, p.jsx)(A.$, {
                    color: "secondary",
                    disabled: v,
                    onClick: c,
                    type: "button",
                    children: (0, p.jsx)(h.A, { id: "realtimeVoice.onboarding.back", defaultMessage: "Back" }),
                  })),
            (o[4] = c),
            (o[5] = v),
            (o[6] = l))
          : (l = o[6]),
        o[7] !== m || o[8] !== x || o[9] !== v
          ? ((n = (0, p.jsx)(A.$, { color: "primary", disabled: x, loading: v, type: "submit", children: m })),
            (o[7] = m),
            (o[8] = x),
            (o[9] = v),
            (o[10] = n))
          : (n = o[10]),
        o[11] !== l || o[12] !== n
          ? ((s = (0, p.jsxs)(_.Es, { className: "justify-between", expandSingleButton: !1, children: [l, n] })),
            (o[11] = l),
            (o[12] = n),
            (o[13] = s))
          : (s = o[13]),
        o[14] !== b || o[15] !== a || o[16] !== s
          ? ((i = (0, p.jsxs)("form", {
              className: "flex min-h-0 flex-1 flex-col gap-5",
              onSubmit: b,
              children: [a, s],
            })),
            (o[14] = b),
            (o[15] = a),
            (o[16] = s),
            (o[17] = i))
          : (i = o[17]),
        i
      )
    }
    var X = a("OTgW"),
      q = a("Nc5R"),
      G = a("WFY2"),
      Y = a("HK0a")
    async function Q({
      scope: e,
      activeCollaborationMode: t,
      activateRealtimeConversation: a,
      agentMode: r,
      currentLocalExecutionCwd: l,
      intent: n,
      memoryPreferences: s,
      onStartError: i,
      permissionProfileId: o,
      pageCompanion: c,
      projectId: d,
      serviceTier: u,
      shouldSendPermissionOverrides: m,
      threadToolsEnabled: p,
      startupAnalytics: f,
      treatment: g,
      workspaceRootsForLocalExecution: x,
    }) {
      try {
        await (0, q.Kq)(
          n,
          {
            scope: e,
            startupAnalytics: f,
            activeCollaborationMode: t,
            agentMode: r,
            currentLocalExecutionCwd: l,
            existingThreadVoiceEnabled: g.existingThreadVoiceEnabled,
            memoryPreferences: s,
            permissionProfileId: o,
            pageCompanion: c,
            projectId: d,
            newThreadBaseInstructions: g.newThread.baseInstructions,
            newThreadDeveloperInstructions: c?.developerInstructions ?? (p ? g.newThread.developerInstructions : null),
            realtimeVoiceDynamicTools: g.dynamicTools,
            realtimeVoiceToolsDeveloperInstructions: g.newThread.voiceToolsDeveloperInstructions,
            serviceTier: u,
            shouldSendPermissionOverrides: m,
            workspaceRootsForLocalExecution: x,
          },
          async ({ locator: e, memoryPreferencesToInitialize: t }) => a(e.conversationId, t),
        )
      } catch (e) {
        throw (
          G.v.error("Error starting realtime voice", {
            safe: { ...f?.getErrorDetails(e), realtimeSessionId: f?.sessionId },
            sensitive: { error: e },
          }),
          i(e),
          e
        )
      }
    }
    function J(e, t, a, p, f, g, x) {
      let h,
        v,
        b,
        y = (0, r.c)(15),
        w = void 0 === p ? null : p,
        A = (0, l.gh)(N.u),
        j = (0, s.A)(),
        _ = (0, i.zy)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((h = { name: "voice.realtime" }), (y[0] = h)) : (h = y[0])
      let { isCapable: E } = (0, l._U)(o.G, h)
      if (!E) return
      y[1] !== j || y[2] !== A
        ? ((v = (e) => {
            A.get(c.Id).danger(
              (0, n.Rt_)(e) ||
                j.formatMessage({
                  id: "composer.realtime.createThreadError",
                  defaultMessage: "Unable to start voice chat",
                }),
              { errorAnalytics: { toastId: "composer.realtime.createThreadError" } },
            )
          }),
          (y[1] = j),
          (y[2] = A),
          (y[3] = v))
        : (v = y[3])
      let S = v
      return (
        y[4] !== a ||
        y[5] !== t ||
        y[6] !== f ||
        y[7] !== x ||
        y[8] !== _ ||
        y[9] !== g ||
        y[10] !== w?.projectId ||
        y[11] !== A ||
        y[12] !== S ||
        y[13] !== e
          ? ((b = async () => {
              var r
              let l
              if ((x ?? "work" === t) && null == g) {
                let e = (0, Y.e3)(A)
                if (null == e) return
                l = e
              }
              let n = A.get(d.bz),
                s = {
                  activeCollaborationMode: a,
                  pageCompanion: g,
                  hostId: f,
                  projectId: null == f ? w?.projectId : void 0,
                  memoryPreferences: n ?? void 0,
                  productExperience: "chatgpt" === t ? "chat" : t,
                  source: "composer_button_new_thread",
                },
                i = `${_.pathname}${_.search}`
              if (
                ((r = {
                  sourceComposerScope: e,
                  entryPoint: "work" === t ? "chatgpt" : t,
                  originPath: i,
                  request: s,
                  workHomePolicyAcceptance: l,
                }),
                A.get(X.Yl) || (A.set(X.Yl, !0), (0, m.qf)(A, z, r), 0))
              )
                try {
                  await (0, u.eE)(A, e, s, i, l)
                } catch (e) {
                  A.get(u.RJ)?.phase !== "failed" && S(e)
                }
            }),
            (y[4] = a),
            (y[5] = t),
            (y[6] = f),
            (y[7] = x),
            (y[8] = _),
            (y[9] = g),
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
  KUNU(e, t, a) {
    var r = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("zd8w"),
      i = a("tsSe"),
      o = a("IlRO")
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            c,
            d,
            u,
            m,
            p,
            f,
            g,
            x,
            h,
            v,
            b,
            y,
            w,
            A,
            j,
            _,
            E,
            S,
            R,
            C = (0, l.c)(73),
            {
              className: N,
              glowEnabled: I,
              onDraw: V,
              onRenderError: T,
              onStateSample: O,
              paletteIndex: M,
              placement: k,
              presentation: L,
              presentationAnchorRef: P,
              phase: D,
              previewAudioLevel: U,
              previewTimeMs: z,
              subscribeToAudio: $,
              voiceActivity: F,
            } = e,
            B = void 0 === I || I,
            H = void 0 === M ? 0 : M,
            W = void 0 === L ? "overlay" : L,
            Z = void 0 === U ? 0 : U,
            K = void 0 === $ ? i.NY : $,
            [X, q] = (0, s.useState)(!1),
            G = (0, s.useRef)(null),
            Y = (0, s.useRef)(null),
            Q = (0, s.useRef)(null),
            J = (0, s.useRef)(null)
          ;(C[0] !== z ? ("live" !== z && (t = z), (C[0] = z), (C[1] = t)) : (t = C[1]),
            C[2] !== H || C[3] !== D || C[4] !== Z || C[5] !== t || C[6] !== F
              ? ((c = { paletteIndex: H, phase: D, previewAudioLevel: Z, previewTimeMs: t, voiceActivity: F }),
                (C[2] = H),
                (C[3] = D),
                (C[4] = Z),
                (C[5] = t),
                (C[6] = F),
                (C[7] = c))
              : (c = C[7]))
          let ee = (0, s.useRef)(c)
          C[8] !== V || C[9] !== W || C[10] !== Z || C[11] !== t
            ? ((d = (e) => {
                "preview" === W || null != t || Z > 0 || V?.(e)
              }),
              (C[8] = V),
              (C[9] = W),
              (C[10] = Z),
              (C[11] = t),
              (C[12] = d))
            : (d = C[12])
          let et = (0, s.useEffectEvent)(d)
          C[13] !== O || C[14] !== W || C[15] !== Z || C[16] !== t
            ? ((u = (e) => {
                "preview" !== W && null == t && 0 === Z && O?.(e)
              }),
              (C[13] = O),
              (C[14] = W),
              (C[15] = Z),
              (C[16] = t),
              (C[17] = u))
            : (u = C[17])
          let ea = (0, s.useEffectEvent)(u)
          C[18] !== T
            ? ((m = () => {
                ;(q(!0), T?.())
              }),
              (C[18] = T),
              (C[19] = m))
            : (m = C[19])
          let er = (0, s.useEffectEvent)(m)
          C[20] !== k || C[21] !== P
            ? ((p = (e) => {
                ;((Y.current = e), (null == e || e.dataset.avatarOverlayPlacement === k) && P?.(e, e?.parentElement))
              }),
              (C[20] = k),
              (C[21] = P),
              (C[22] = p))
            : (p = C[22])
          let el = p
          ;(C[23] !== et || C[24] !== er || C[25] !== ea || C[26] !== X || !1 !== C[27] || C[28] !== W
            ? ((f = () => {
                if (X) return
                let e = Y.current,
                  t = Q.current,
                  r = e?.parentElement
                if (null == e || null == t || null == r) return
                let l = !1,
                  n = null,
                  s = null,
                  i = () => {
                    let a = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = a), (t.style.height = a))
                  }
                return (
                  i(),
                  "u" > typeof ResizeObserver && (s = new ResizeObserver(i)).observe(e),
                  (async () => (await a.e(317638).then(a.bind(a, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var a, n
                      let s, i
                      return l
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((a = r),
                              (n = t),
                              (s = Math.max(1, Math.min(a.clientWidth, a.clientHeight))),
                              (i = Math.max(1, Math.min(n.clientWidth || s + 40, n.clientHeight || s + 40))),
                              Math.min(1, s / i)),
                            onDraw: (e) => {
                              l || et(e)
                            },
                            onRenderError: () => {
                              l || er()
                            },
                            onStateSample: void 0,
                            presentation: W,
                          })
                    })
                    .then((e) => {
                      l
                        ? e?.dispose()
                        : null != e && ((n = e), (G.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      l || er()
                    }),
                  () => {
                    ;((l = !0), s?.disconnect(), n?.dispose(), (G.current = null))
                  }
                )
              }),
              (C[23] = et),
              (C[24] = er),
              (C[25] = ea),
              (C[26] = X),
              (C[27] = !1),
              (C[28] = W),
              (C[29] = f))
            : (f = C[29]),
            C[30] !== X || !1 !== C[31] || C[32] !== W
              ? ((g = [X, !1, W]), (C[30] = X), (C[31] = !1), (C[32] = W), (C[33] = g))
              : (g = C[33]),
            (0, s.useLayoutEffect)(f, g),
            C[34] !== H || C[35] !== D || C[36] !== Z || C[37] !== t || C[38] !== F
              ? ((x = () => {
                  let e = { paletteIndex: H, phase: D, previewAudioLevel: Z, previewTimeMs: t, voiceActivity: F }
                  ;((ee.current = e), G.current?.setInputs(e))
                }),
                (C[34] = H),
                (C[35] = D),
                (C[36] = Z),
                (C[37] = t),
                (C[38] = F),
                (C[39] = x))
              : (x = C[39]),
            C[40] !== H || C[41] !== D || C[42] !== Z || C[43] !== t || C[44] !== F
              ? ((h = [H, D, Z, t, F]), (C[40] = H), (C[41] = D), (C[42] = Z), (C[43] = t), (C[44] = F), (C[45] = h))
              : (h = C[45]),
            (0, s.useEffect)(x, h))
          let en = !X && "inactive" !== D
          ;(C[46] !== en || C[47] !== K
            ? ((v = () => {
                if (!en) {
                  ;((J.current = null), G.current?.setAudioLevels(null))
                  return
                }
                return K((e) => {
                  ;((J.current = e), G.current?.setAudioLevels(e))
                })
              }),
              (b = [en, K]),
              (C[46] = en),
              (C[47] = K),
              (C[48] = v),
              (C[49] = b))
            : ((v = C[48]), (b = C[49])),
            (0, s.useEffect)(v, b),
            C[50] !== k
              ? ((y = (0, n.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === k
                    ? "-top-5 -left-5"
                    : [k.endsWith("end") ? "right-0" : "left-0", k.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (C[50] = k),
                (C[51] = y))
              : (y = C[51]))
          let es = y
          C[52] !== X || C[53] !== H
            ? ((w = X ? (0, o.V)(H) : null), (C[52] = X), (C[53] = H), (C[54] = w))
            : (w = C[54])
          let ei = w
          ;(C[55] !== B || C[56] !== H
            ? ((A = B ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, o.P)(H)} 55%, transparent))` : void 0),
              (C[55] = B),
              (C[56] = H),
              (C[57] = A))
            : (A = C[57]),
            C[58] !== A ? ((j = { filter: A }), (C[58] = A), (C[59] = j)) : (j = C[59]))
          let eo = j
          return (
            C[60] !== N
              ? ((_ = (0, n.A)("codex-avatar-root relative h-full w-full", N)), (C[60] = N), (C[61] = _))
              : (_ = C[61]),
            C[62] !== eo || C[63] !== ei
              ? ((E =
                  null != ei
                    ? (0, r.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${ei.fallbackColors[0]}, ${ei.fallbackColors[1]} 46%, ${ei.fallbackColors[2]})`,
                        },
                      })
                    : (0, r.jsx)("canvas", {
                        ref: Q,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: eo,
                      })),
                (C[62] = eo),
                (C[63] = ei),
                (C[64] = E))
              : (E = C[64]),
            C[65] !== es || C[66] !== k || C[67] !== el || C[68] !== E
              ? ((S = (0, r.jsx)("div", { ref: el, className: es, "data-avatar-overlay-placement": k, children: E })),
                (C[65] = es),
                (C[66] = k),
                (C[67] = el),
                (C[68] = E),
                (C[69] = S))
              : (S = C[69]),
            C[70] !== _ || C[71] !== S
              ? ((R = (0, r.jsx)("div", {
                  "aria-hidden": "true",
                  className: _,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: S,
                })),
                (C[70] = _),
                (C[71] = S),
                (C[72] = R))
              : (R = C[72]),
            R
          )
        },
      },
    )
  },
  IlRO(e, t, a) {
    var r = a("nBOj")
    let l = [r.l.blue, r.l.blue, r.l.green, r.l.yellow, r.l.pink, r.l.orange, r.l.purple, r.l.black],
      n = new Map()
    function s(e) {
      return l[e] ?? r.l.blue
    }
    a.d(
      t,
      {},
      {
        P: s,
        V: function (e) {
          let t,
            a,
            r,
            l,
            i,
            o,
            c,
            d = s(e),
            u = n.get(d)
          if (null != u) return u
          let m =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(d.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (r = (a = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (i = (l = a.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : r).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (o = l.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (c = l.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...r, 1],
              fallbackColors: [
                `rgb(${i.map((e) => 255 * e).join(" ")})`,
                `rgb(${o.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${c.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (n.set(d, m), m)
        },
      },
    )
  },
  Z908(e, t, a) {
    var r = a("ABep"),
      l = a("QosV"),
      n = a("oyxz"),
      s = a("gsZR"),
      i = a("rqFo"),
      o = a("amCY")
    a.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            a,
            c,
            d,
            u,
            m,
            p,
            f,
            g = (0, l.c)(14),
            { entryPoint: x } = e
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)("h1", {
                  className: "heading-2xl font-normal tracking-tight text-default",
                  children: (0, r.jsx)(n.A, { id: "realtimeVoice.nux.title", defaultMessage: "Meet ChatGPT Voice" }),
                })),
                (g[0] = t))
              : (t = g[0]),
            g[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, r.jsx)(o.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, r.jsx)(n.A, { id: "realtimeVoice.nux.projects.title", defaultMessage: "Work across projects" }),
                  ],
                })),
                (g[1] = a))
              : (a = g[1]),
            g[2] !== x
              ? ((c = (0, r.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    a,
                    (0, r.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === x
                          ? (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.projects.description.chatgpt",
                              defaultMessage:
                                "Turn ideas into action, keep work moving, and pick up where you left off\u2014without micromanaging",
                            })
                          : (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.projects.description",
                              defaultMessage:
                                "Start new tasks, coordinate work in progress, and pick up where you left off\u2014without micromanaging",
                            }),
                    }),
                  ],
                })),
                (g[2] = x),
                (g[3] = c))
              : (c = g[3]),
            g[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, r.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, r.jsx)(i.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, r.jsx)(n.A, {
                      id: "realtimeVoice.nux.desktop.title",
                      defaultMessage: "Work across your desktop",
                    }),
                  ],
                })),
                (g[4] = d))
              : (d = g[4]),
            g[5] !== x
              ? ((u = (0, r.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    d,
                    (0, r.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === x
                          ? (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.desktop.description.chatgpt",
                              defaultMessage:
                                "Bring together your files, apps, and connected tools\u2014from Slack and Notion to the documents you use every day",
                            })
                          : (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.desktop.description",
                              defaultMessage:
                                "Use your files, apps, and connected tools\u2014from Slack and GitHub to Notion and beyond",
                            }),
                    }),
                  ],
                })),
                (g[5] = x),
                (g[6] = u))
              : (u = g[6]),
            g[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, r.jsxs)("div", {
                  className: "flex items-center gap-2 text-base font-medium text-default",
                  children: [
                    (0, r.jsx)(s.A, { "aria-hidden": !0, className: "icon-sm text-chart-purple" }),
                    (0, r.jsx)(n.A, {
                      id: "realtimeVoice.nux.learn.title",
                      defaultMessage: "Explore, plan, and learn",
                    }),
                  ],
                })),
                (g[7] = m))
              : (m = g[7]),
            g[8] !== x
              ? ((p = (0, r.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 px-4",
                  children: [
                    m,
                    (0, r.jsx)("p", {
                      className: "max-w-md text-base leading-6 text-secondary",
                      children:
                        "chatgpt" === x
                          ? (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.learn.description.chatgpt",
                              defaultMessage:
                                "Brainstorm ideas, prepare for a big meeting, or learn something new through natural back-and-forth",
                            })
                          : (0, r.jsx)(n.A, {
                              id: "realtimeVoice.nux.learn.description",
                              defaultMessage:
                                "Talk through a PR, ask questions about a codebase, or learn a new topic through natural back-and-forth",
                            }),
                    }),
                  ],
                })),
                (g[8] = x),
                (g[9] = p))
              : (p = g[9]),
            g[10] !== c || g[11] !== u || g[12] !== p
              ? ((f = (0, r.jsxs)("div", {
                  className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 pt-4 text-center",
                  children: [
                    t,
                    (0, r.jsxs)("div", { className: "flex w-full max-w-lg flex-col gap-8", children: [c, u, p] }),
                  ],
                })),
                (g[10] = c),
                (g[11] = u),
                (g[12] = p),
                (g[13] = f))
              : (f = g[13]),
            f
          )
        },
      },
    )
  },
  i663(e, t, a) {
    var r = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("zd8w"),
      i = a("oyxz"),
      o = a("AWNZ"),
      c = a("ZEx5")
    function d(e) {
      return "" !== e
    }
    a.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            a,
            u,
            m,
            p,
            f,
            g,
            x,
            h,
            v,
            b,
            y,
            w,
            A = (0, l.c)(39),
            {
              className: j,
              autoFocusSelectedVoice: _,
              disabled: E,
              onPreviewPlaybackChange: S,
              onVoiceChange: R,
              playPreviewOnInitialRender: C,
              previewEnabled: N,
              preserveSelectionOnRefresh: I,
              promoteSelectedGroup: V,
              value: T,
              voices: O,
            } = e,
            M = void 0 !== _ && _,
            k = void 0 !== C && C,
            L = void 0 !== I && I,
            P = (0, s.useId)(),
            D = (0, s.useRef)(null),
            U = (0, s.useRef)(0),
            [z, $] = (0, s.useState)(!1),
            [F] = (0, s.useState)(T),
            [B, H] = (0, s.useState)(O)
          A[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (A[0] = t)) : (t = A[0])
          let [W, Z] = (0, s.useState)(t)
          A[1] !== B || A[2] !== L || A[3] !== T || A[4] !== O
            ? ((a = L && !O.some((e) => e.slug === T) ? B : O),
              (A[1] = B),
              (A[2] = L),
              (A[3] = T),
              (A[4] = O),
              (A[5] = a))
            : (a = A[5])
          let K = a,
            X = new Map()
          for (let e of K) {
            let t = e.accent?.trim() ?? "",
              a = X.get(t) ?? []
            ;(a.push(e), X.set(t, a))
          }
          let q = Array.from(X.keys()),
            G = q.some(d),
            Y = q.filter((e) => !W.includes(e))
          if (G && Y.length > 0) {
            let e =
              0 === W.length && void 0 !== V && V
                ? Array.from(X).find((e) => {
                    let [, t] = e
                    return t.some((e) => e.slug === F)
                  })?.[0]
                : void 0
            Z([...W, ...(null != e ? [e] : []), ...Y.filter((t) => t !== e)])
          }
          let Q = [...W.filter((e) => X.has(e)), ...Y]
          A[6] !== N || A[7] !== O
            ? ((u = (e) => {
                let t = D.current
                if (!N || null == t) return
                let a = (U.current = U.current + 1)
                ;(t.pause(),
                  (t.src =
                    O.find((t) => {
                      let { slug: a } = t
                      return a === e.slug
                    })?.previewUrl ?? e.previewUrl),
                  $(!1),
                  t.play().catch(() => {
                    a === U.current && $(!0)
                  }))
              }),
              (A[6] = N),
              (A[7] = O),
              (A[8] = u))
            : (u = A[8])
          let J = u
          A[9] !== K || A[10] !== J || A[11] !== T
            ? ((m = () => {
                let e = K.find((e) => e.slug === T)
                null != e && J(e)
              }),
              (A[9] = K),
              (A[10] = J),
              (A[11] = T),
              (A[12] = m))
            : (m = A[12])
          let ee = (0, s.useEffectEvent)(m)
          ;(A[13] !== S || A[14] !== ee || A[15] !== k
            ? ((p = () => {
                let e = D.current
                return (
                  k && ee(),
                  () => {
                    ;((U.current = U.current + 1), e?.pause(), S?.(!1))
                  }
                )
              }),
              (A[13] = S),
              (A[14] = ee),
              (A[15] = k),
              (A[16] = p))
            : (p = A[16]),
            A[17] !== S || A[18] !== k || A[19] !== N
              ? ((f = [S, k, N]), (A[17] = S), (A[18] = k), (A[19] = N), (A[20] = f))
              : (f = A[20]),
            (0, s.useEffect)(p, f),
            A[21] !== j
              ? ((g = (0, n.A)("min-h-0 overflow-y-auto select-none", j)), (A[21] = j), (A[22] = g))
              : (g = A[22]),
            A[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, r.jsx)("legend", {
                  className: "sr-only",
                  children: (0, r.jsx)(i.A, {
                    id: "settings.general.realtimeVoice.choose",
                    defaultMessage: "Choose a voice",
                  }),
                })),
                (A[23] = x))
              : (x = A[23]))
          let et = Q.map((e) =>
            (0, r.jsxs)(
              "section",
              {
                children: [
                  "" !== e
                    ? (0, r.jsx)("h3", { className: "mb-2 text-sm font-medium text-secondary", children: e })
                    : null,
                  (0, r.jsx)(c.t, {
                    children: (X.get(e) ?? []).map((e) =>
                      (0, r.jsx)(
                        o.lu,
                        {
                          id: `${P}-${e.slug}`,
                          ariaLabel: e.name,
                          autoFocus: M && e.slug === T,
                          checked: T === e.slug,
                          indicator: "checkmark",
                          label: e.name,
                          name: P,
                          value: e.slug,
                          onChange: () => {
                            ;(L && H(K), R(e.slug), J(e))
                          },
                          onClick: () => {
                            T === e.slug && J(e)
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
              ? ((h = (0, r.jsx)("div", { className: "flex flex-col gap-6", children: et })), (A[24] = et), (A[25] = h))
              : (h = A[25]),
            A[26] !== S
              ? ((v = (0, r.jsx)("audio", {
                  ref: D,
                  className: "hidden",
                  preload: "none",
                  onEnded: () => S?.(!1),
                  onError: () => S?.(!1),
                  onPause: () => S?.(!1),
                  onPlay: () => S?.(!0),
                })),
                (A[26] = S),
                (A[27] = v))
              : (v = A[27]),
            A[28] !== z
              ? ((b = z
                  ? (0, r.jsx)("p", {
                      role: "alert",
                      className: "mt-2 text-sm text-danger",
                      children: (0, r.jsx)(i.A, {
                        id: "settings.general.realtimeVoice.previewUnavailable",
                        defaultMessage: "Preview unavailable",
                      }),
                    })
                  : null),
                (A[28] = z),
                (A[29] = b))
              : (b = A[29]),
            A[30] !== E || A[31] !== x || A[32] !== h || A[33] !== v || A[34] !== b
              ? ((y = (0, r.jsxs)("fieldset", { disabled: E, children: [x, h, v, b] })),
                (A[30] = E),
                (A[31] = x),
                (A[32] = h),
                (A[33] = v),
                (A[34] = b),
                (A[35] = y))
              : (y = A[35]),
            A[36] !== g || A[37] !== y
              ? ((w = (0, r.jsx)("div", { className: g, children: y })), (A[36] = g), (A[37] = y), (A[38] = w))
              : (w = A[38]),
            w
          )
        },
      },
    )
  },
  RJ8K(e, t, a) {
    var r = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("zd8w"),
      i = a("Wf1j"),
      o = a("oyxz"),
      c = a("bVeK"),
      d = a("lCMb"),
      u = a("KUNU")
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a,
            m,
            p,
            f,
            g,
            x,
            h,
            v,
            b,
            y,
            w,
            A,
            j,
            _,
            E,
            S,
            R,
            C,
            N,
            I,
            V,
            T,
            O,
            M,
            k,
            L,
            P,
            D,
            U,
            z,
            $,
            F,
            B,
            H,
            W,
            Z,
            K,
            X,
            q = (0, l.c)(144),
            {
              autoFocusSelectedVoice: G,
              compactLayout: Y,
              initialVoice: Q,
              onVoiceChange: J,
              paletteIndex: ee,
              playPreviewOnInitialRender: et,
              previewEnabled: ea,
              voices: er,
            } = e,
            el = void 0 !== G && G,
            en = void 0 !== Y && Y,
            es = void 0 === ee ? 0 : ee,
            ei = void 0 === ea || ea,
            eo = (0, i.A)(),
            ec = (0, s.useId)(),
            ed = (0, s.useId)(),
            eu = (0, s.useRef)(null),
            [em] = (0, s.useState)(er),
            [ep, ef] = (0, s.useState)(null),
            [eg, ex] = (0, s.useState)(Q.slug),
            [eh, ev] = (0, s.useState)("idle"),
            [eb, ey] = (0, s.useState)(void 0 !== et && et)
          q[0] !== em || q[1] !== ep || q[2] !== eg || q[3] !== er
            ? ((t = ep ?? (er.some((e) => e.slug === eg) ? er : em)),
              (q[0] = em),
              (q[1] = ep),
              (q[2] = eg),
              (q[3] = er),
              (q[4] = t))
            : (t = q[4])
          let ew = t
          q[5] !== eg ? ((a = (e) => e.slug === eg), (q[5] = eg), (q[6] = a)) : (a = q[6])
          let eA = ew.findIndex(a)
          q[7] !== ew || q[8] !== eA || q[9] !== eg || q[10] !== er
            ? ((m = er.find((e) => e.slug === eg) ?? ew[eA]),
              (q[7] = ew),
              (q[8] = eA),
              (q[9] = eg),
              (q[10] = er),
              (q[11] = m))
            : (m = q[11])
          let ej = m
          q[12] !== ei || q[13] !== eb
            ? ((p = () => {
                let e = eu.current
                if (null == e) return
                let t = !1
                return (
                  ei &&
                    eb &&
                    ((e.currentTime = 0),
                    e.play().catch(() => {
                      t || ev("error")
                    })),
                  () => {
                    ;((t = !0), e.pause())
                  }
                )
              }),
              (q[12] = ei),
              (q[13] = eb),
              (q[14] = p))
            : (p = q[14])
          let e_ = ej?.previewUrl
          if (
            (q[15] !== ei || q[16] !== eb || q[17] !== e_
              ? ((f = [ei, e_, eb]), (q[15] = ei), (q[16] = eb), (q[17] = e_), (q[18] = f))
              : (f = q[18]),
            (0, s.useEffect)(p, f),
            null == ej)
          ) {
            let e
            return (
              q[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(o.A, {
                      id: "settings.general.realtimeVoice.noVoices",
                      defaultMessage: "No compatible voices are available",
                    }),
                  })),
                  (q[19] = e))
                : (e = q[19]),
              e
            )
          }
          q[20] !== J || q[21] !== ew || q[22] !== ed || q[23] !== eg
            ? ((g = (e, t) => {
                let a = ew[(e + ew.length) % ew.length]
                null != a &&
                  a.slug !== eg &&
                  (eu.current?.pause(),
                  ef(ew),
                  ev("idle"),
                  ey(!0),
                  ex(a.slug),
                  J(a.slug),
                  void 0 !== t && t && document.getElementById(`${ed}-${a.slug}`)?.focus())
              }),
              (q[20] = J),
              (q[21] = ew),
              (q[22] = ed),
              (q[23] = eg),
              (q[24] = g))
            : (g = q[24])
          let eE = g
          q[25] !== eh || q[26] !== eb
            ? ((x = () => {
                let e = eu.current
                if (null != e) {
                  if ("playing" === eh) return void e.pause()
                  if (!eb) return void ey(!0)
                  ;(("ended" === eh || "error" === eh) && ((e.currentTime = 0), ev("idle")),
                    e.play().catch(() => ev("error")))
                }
              }),
              (q[25] = eh),
              (q[26] = eb),
              (q[27] = x))
            : (x = q[27])
          let eS = x
          switch (eh) {
            case "ended": {
              let e
              ;(q[28] !== eo || q[29] !== ej.name
                ? ((e = eo.formatMessage(
                    { id: "settings.general.realtimeVoice.previewReplay", defaultMessage: "Replay {name} preview" },
                    { name: ej.name },
                  )),
                  (q[28] = eo),
                  (q[29] = ej.name),
                  (q[30] = e))
                : (e = q[30]),
                (h = e))
              break
            }
            case "error": {
              let e
              ;(q[31] !== eo || q[32] !== ej.name
                ? ((e = eo.formatMessage(
                    { id: "settings.general.realtimeVoice.previewRetry", defaultMessage: "Retry {name} preview" },
                    { name: ej.name },
                  )),
                  (q[31] = eo),
                  (q[32] = ej.name),
                  (q[33] = e))
                : (e = q[33]),
                (h = e))
              break
            }
            case "idle": {
              let e
              ;(q[34] !== eo || q[35] !== ej.name
                ? ((e = eo.formatMessage(
                    { id: "settings.general.realtimeVoice.previewPlay", defaultMessage: "Play {name} preview" },
                    { name: ej.name },
                  )),
                  (q[34] = eo),
                  (q[35] = ej.name),
                  (q[36] = e))
                : (e = q[36]),
                (h = e))
              break
            }
            case "playing": {
              let e
              ;(q[37] !== eo || q[38] !== ej.name
                ? ((e = eo.formatMessage(
                    { id: "settings.general.realtimeVoice.previewPause", defaultMessage: "Pause {name} preview" },
                    { name: ej.name },
                  )),
                  (q[37] = eo),
                  (q[38] = ej.name),
                  (q[39] = e))
                : (e = q[39]),
                (h = e))
            }
          }
          let eR = !en && "pt-5 pb-1"
          q[40] !== eR
            ? ((v = (0, n.A)("flex w-full flex-col items-center", eR)), (q[40] = eR), (q[41] = v))
            : (v = q[41])
          let eC = !ei,
            eN = en ? "preview" : "overlay",
            eI = "playing" === eh ? 0.48 : 0.08,
            eV = "playing" === eh ? "speaking" : "listening"
          ;(q[42] !== es || q[43] !== eN || q[44] !== eI || q[45] !== eV
            ? ((b = (0, r.jsx)(u.P, {
                glowEnabled: !1,
                paletteIndex: es,
                phase: "active",
                placement: "center",
                presentation: eN,
                previewAudioLevel: eI,
                voiceActivity: eV,
              })),
              (q[42] = es),
              (q[43] = eN),
              (q[44] = eI),
              (q[45] = eV),
              (q[46] = b))
            : (b = q[46]),
            q[47] !== h || q[48] !== ej.orbTreatment || q[49] !== eC || q[50] !== b || q[51] !== eS
              ? ((y = (0, r.jsx)("button", {
                  type: "button",
                  "aria-label": h,
                  className:
                    "relative size-36 cursor-interaction rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "data-orb-treatment": ej.orbTreatment,
                  disabled: eC,
                  onClick: eS,
                  children: b,
                })),
                (q[47] = h),
                (q[48] = ej.orbTreatment),
                (q[49] = eC),
                (q[50] = b),
                (q[51] = eS),
                (q[52] = y))
              : (y = q[52]))
          let eT = ei && eb ? ej.previewUrl : void 0
          ;(q[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = () => ev("ended")),
              (A = () => ev("error")),
              (j = () => ev("idle")),
              (_ = () => ev("playing")),
              (q[53] = w),
              (q[54] = A),
              (q[55] = j),
              (q[56] = _))
            : ((w = q[53]), (A = q[54]), (j = q[55]), (_ = q[56])),
            q[57] !== eT
              ? ((E = (0, r.jsx)("audio", {
                  ref: eu,
                  className: "hidden",
                  preload: "none",
                  src: eT,
                  onEnded: w,
                  onError: A,
                  onPause: j,
                  onPlay: _,
                })),
                (q[57] = eT),
                (q[58] = E))
              : (E = q[58]))
          let eO = en ? "mt-6 w-full max-w-72" : "mt-3 gap-6"
          ;(q[59] !== eO
            ? ((S = (0, n.A)("flex items-center text-center", eO)), (q[59] = eO), (q[60] = S))
            : (S = q[60]),
            q[61] !== eo
              ? ((R = eo.formatMessage({
                  id: "settings.general.realtimeVoice.previous",
                  defaultMessage: "Previous voice",
                })),
                (q[61] = eo),
                (q[62] = R))
              : (R = q[62]))
          let eM = ew.length < 2
          ;(q[63] !== eE || q[64] !== eA
            ? ((C = () => eE(eA - 1)), (q[63] = eE), (q[64] = eA), (q[65] = C))
            : (C = q[65]),
            q[66] !== en
              ? ((N = en
                  ? (0, r.jsx)(c.KBq, {})
                  : (0, r.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm rotate-180" })),
                (q[66] = en),
                (q[67] = N))
              : (N = q[67]),
            q[68] !== R || q[69] !== eM || q[70] !== C || q[71] !== N
              ? ((I = (0, r.jsx)("button", {
                  type: "button",
                  "aria-label": R,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: eM,
                  onClick: C,
                  children: N,
                })),
                (q[68] = R),
                (q[69] = eM),
                (q[70] = C),
                (q[71] = N),
                (q[72] = I))
              : (I = q[72]))
          let ek = en ? "min-w-0 flex-1" : "w-56 gap-1"
          ;(q[73] !== ek ? ((V = (0, n.A)("flex flex-col", ek)), (q[73] = ek), (q[74] = V)) : (V = q[74]),
            q[75] !== ej.name
              ? ((T = (0, r.jsx)("p", { className: "text-xl font-semibold", children: ej.name })),
                (q[75] = ej.name),
                (q[76] = T))
              : (T = q[76]),
            q[77] !== ej.description
              ? ((O = (0, r.jsx)("p", { className: "text-sm text-secondary", children: ej.description })),
                (q[77] = ej.description),
                (q[78] = O))
              : (O = q[78]),
            q[79] !== V || q[80] !== T || q[81] !== O
              ? ((M = (0, r.jsxs)("div", { className: V, children: [T, O] })),
                (q[79] = V),
                (q[80] = T),
                (q[81] = O),
                (q[82] = M))
              : (M = q[82]),
            q[83] !== eo
              ? ((k = eo.formatMessage({ id: "settings.general.realtimeVoice.next", defaultMessage: "Next voice" })),
                (q[83] = eo),
                (q[84] = k))
              : (k = q[84]))
          let eL = ew.length < 2
          ;(q[85] !== eE || q[86] !== eA
            ? ((L = () => eE(eA + 1)), (q[85] = eE), (q[86] = eA), (q[87] = L))
            : (L = q[87]),
            q[88] !== en
              ? ((P = en ? (0, r.jsx)(c.j1b, {}) : (0, r.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm" })),
                (q[88] = en),
                (q[89] = P))
              : (P = q[89]),
            q[90] !== k || q[91] !== eL || q[92] !== L || q[93] !== P
              ? ((D = (0, r.jsx)("button", {
                  type: "button",
                  "aria-label": k,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: eL,
                  onClick: L,
                  children: P,
                })),
                (q[90] = k),
                (q[91] = eL),
                (q[92] = L),
                (q[93] = P),
                (q[94] = D))
              : (D = q[94]),
            q[95] !== S || q[96] !== I || q[97] !== M || q[98] !== D
              ? ((U = (0, r.jsxs)("div", { className: S, children: [I, M, D] })),
                (q[95] = S),
                (q[96] = I),
                (q[97] = M),
                (q[98] = D),
                (q[99] = U))
              : (U = q[99]),
            q[100] !== eh
              ? ((z =
                  "error" === eh
                    ? (0, r.jsx)("p", {
                        role: "alert",
                        className: "mt-2 text-xs text-danger",
                        children: (0, r.jsx)(o.A, {
                          id: "settings.general.realtimeVoice.previewUnavailable",
                          defaultMessage: "Preview unavailable",
                        }),
                      })
                    : null),
                (q[100] = eh),
                (q[101] = z))
              : (z = q[101]))
          let eP = en ? "h-10" : "mt-4"
          if (
            (q[102] !== eP
              ? (($ = (0, n.A)("flex items-center gap-3", eP)), (q[102] = eP), (q[103] = $))
              : ($ = q[103]),
            q[104] !== eE || q[105] !== ew.length || q[106] !== eA
              ? ((F = (e) => {
                  let t = null
                  ;("ArrowLeft" === e.key || "ArrowUp" === e.key
                    ? (t = eA - 1)
                    : "ArrowRight" === e.key || "ArrowDown" === e.key
                      ? (t = eA + 1)
                      : "Home" === e.key
                        ? (t = 0)
                        : "End" === e.key && (t = ew.length - 1),
                    null != t && (e.preventDefault(), eE(t, !0)))
                }),
                (q[104] = eE),
                (q[105] = ew.length),
                (q[106] = eA),
                (q[107] = F))
              : (F = q[107]),
            q[108] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, r.jsx)(o.A, {
                  id: "settings.general.realtimeVoice.choose",
                  defaultMessage: "Choose a voice",
                })),
                (q[108] = B))
              : (B = q[108]),
            q[109] !== ec
              ? ((H = (0, r.jsx)("span", { id: ec, className: "sr-only", children: B })), (q[109] = ec), (q[110] = H))
              : (H = q[110]),
            q[111] !== el ||
              q[112] !== eE ||
              q[113] !== en ||
              q[114] !== eo ||
              q[115] !== ew ||
              q[116] !== ed ||
              q[117] !== ej.slug)
          ) {
            let e
            ;(q[119] !== el ||
            q[120] !== eE ||
            q[121] !== en ||
            q[122] !== eo ||
            q[123] !== ew.length ||
            q[124] !== ed ||
            q[125] !== ej.slug
              ? ((e = (e, t) => {
                  let a = e.slug === ej.slug
                  return (0, r.jsx)(
                    "button",
                    {
                      id: `${ed}-${e.slug}`,
                      type: "button",
                      role: "radio",
                      autoFocus: el && a,
                      "aria-checked": a,
                      "aria-label": eo.formatMessage(
                        { id: "settings.general.realtimeVoice.optionLabel", defaultMessage: "{name}: {description}" },
                        { description: e.description, name: e.name },
                      ),
                      "aria-posinset": t + 1,
                      "aria-setsize": ew.length,
                      className: (0, n.A)(
                        "cursor-interaction rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        en ? "size-2" : "size-2.5",
                        a ? "bg-text-emphasis" : "bg-text-tertiary/30",
                      ),
                      tabIndex: a ? 0 : -1,
                      onClick: () => eE(t),
                    },
                    e.slug,
                  )
                }),
                (q[119] = el),
                (q[120] = eE),
                (q[121] = en),
                (q[122] = eo),
                (q[123] = ew.length),
                (q[124] = ed),
                (q[125] = ej.slug),
                (q[126] = e))
              : (e = q[126]),
              (W = ew.map(e)),
              (q[111] = el),
              (q[112] = eE),
              (q[113] = en),
              (q[114] = eo),
              (q[115] = ew),
              (q[116] = ed),
              (q[117] = ej.slug),
              (q[118] = W))
          } else W = q[118]
          return (
            q[127] !== ec || q[128] !== $ || q[129] !== F || q[130] !== H || q[131] !== W
              ? ((Z = (0, r.jsxs)("div", {
                  role: "radiogroup",
                  "aria-labelledby": ec,
                  className: $,
                  tabIndex: -1,
                  onKeyDown: F,
                  children: [H, W],
                })),
                (q[127] = ec),
                (q[128] = $),
                (q[129] = F),
                (q[130] = H),
                (q[131] = W),
                (q[132] = Z))
              : (Z = q[132]),
            q[133] !== ej.description || q[134] !== ej.name
              ? ((K = (0, r.jsx)("span", {
                  className: "sr-only",
                  "aria-live": "polite",
                  children: (0, r.jsx)(o.A, {
                    id: "settings.general.realtimeVoice.selectedAnnouncement",
                    defaultMessage: "Selected voice: {name}. {description}",
                    values: { description: ej.description, name: ej.name },
                  }),
                })),
                (q[133] = ej.description),
                (q[134] = ej.name),
                (q[135] = K))
              : (K = q[135]),
            q[136] !== v || q[137] !== y || q[138] !== E || q[139] !== U || q[140] !== z || q[141] !== Z || q[142] !== K
              ? ((X = (0, r.jsxs)("div", { className: v, children: [y, E, U, z, Z, K] })),
                (q[136] = v),
                (q[137] = y),
                (q[138] = E),
                (q[139] = U),
                (q[140] = z),
                (q[141] = Z),
                (q[142] = K),
                (q[143] = X))
              : (X = q[143]),
            X
          )
        },
      },
    )
  },
  Nc5R(e, t, a) {
    a.d(t, { m5: () => w, aC: () => y, Kq: () => A })
    var r = a("iRMi"),
      l = a("qixt"),
      n = a("WFY2"),
      s = a("uIjo"),
      i = a("DBCl"),
      o = a("vpsD"),
      c = a("N2rm"),
      d = a("Dgwo"),
      u = a("shRG"),
      m = a("lqHG"),
      p = a("wCOm"),
      f = a("QLhf"),
      g = a("NF58"),
      x = a("BVdX"),
      h = a("tv8P"),
      v = a("ay73"),
      b = a("IJee")
    function y(e, t, a) {
      return null == a || ("chat" === a && "local" === t) ? e.get(l.e2) : "work" === a
    }
    function w(e) {
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
    async function A(e, t, a) {
      if ("exact" === e.type)
        return (
          t.startupAnalytics?.connectionSetup.setIsNewConversation(!1),
          a(
            !0 === e.ephemeral
              ? { locator: e.locator, memoryPreferencesToInitialize: null }
              : await s.F6.trackOperation(
                  t.startupAnalytics,
                  r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_OPEN,
                  () =>
                    (async function (e, t) {
                      let { conversationId: a, hostId: l } = e
                      if (
                        !(
                          await s.F6.trackOperation(
                            t.startupAnalytics,
                            r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_LOAD,
                            () => (0, d.V)(t.scope, l).loadRecentConversationIds([a]),
                          )
                        ).includes(a)
                      ) {
                        let e = Error("Voice chat is unavailable")
                        throw (
                          t.startupAnalytics?.recordErrorOperation(
                            e,
                            r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_LOAD,
                          ),
                          e
                        )
                      }
                      let n = await s.F6.trackOperation(
                        t.startupAnalytics,
                        r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                        () =>
                          (0, d.V)(t.scope, l).resumeConversation(
                            {
                              conversationId: a,
                              model: null,
                              reasoningEffort: null,
                              workspaceRoots: t.existingThreadVoiceEnabled ? t.workspaceRootsForLocalExecution : ["/"],
                              useAppServerPermissionDefault: !1,
                              preserveServerConfiguration: l === c.iw,
                              showThreadGoalResumeConfirmation: !1,
                            },
                            { readResumeInputs: (0, u.jQ)(t.scope, l) },
                          ),
                      )
                      if ("not-ready" === n.status) {
                        let e = new o.uZ(n)
                        throw (
                          t.startupAnalytics?.recordErrorOperation(
                            e,
                            r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                          ),
                          e
                        )
                      }
                      let { threadSource: i } = n
                      if (!t.existingThreadVoiceEnabled && i !== b.S) throw Error("This thread is not a voice chat")
                      return { locator: e, memoryPreferencesToInitialize: null }
                    })(e.locator, t),
                ),
          )
        )
      let l = await s.F6.trackOperation(
        t.startupAnalytics,
        r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_CREATE,
        () =>
          (async function (e, t) {
            let {
                activeCollaborationMode: a,
                agentMode: l,
                currentLocalExecutionCwd: n,
                existingThreadVoiceEnabled: o,
                memoryPreferences: c,
                permissionProfileId: u,
                projectId: v,
                pageCompanion: y,
                newThreadBaseInstructions: w,
                newThreadDeveloperInstructions: A,
                realtimeVoiceDynamicTools: j,
                realtimeVoiceToolsDeveloperInstructions: _,
                serviceTier: E,
                shouldSendPermissionOverrides: S,
                workspaceRootsForLocalExecution: R,
              } = t,
              C = null == v && (0, g.wW)(R),
              N = await s.F6.trackOperation(
                t.startupAnalytics,
                r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_WORKSPACE_SELECTION,
                () =>
                  null != v
                    ? (0, f.p)({ hostId: e, projectId: v, prompt: "", workspaceRoots: R })
                    : (0, g.fO)(R, { directoryName: "realtime-voice-chat" }),
              ),
              I = N.workspaceRoots,
              V = N.cwd ?? n,
              { config: T } = await s.F6.trackOperation(
                t.startupAnalytics,
                r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_CONFIG_READ,
                () =>
                  (0, d.V)(t.scope, e).sendRequest(
                    "config/read",
                    { includeLayers: !1, cwd: V },
                    { priority: "critical" },
                  ),
              ),
              O = c ?? (0, x.Y)(T),
              M = S ? (0, i.$5i)(l, I, (0, p.Y$)(T), u) : null,
              k = o ? A : [A, _].filter((e) => null != e).join("\n\n"),
              L = null != y ? "user" : "voice_chat"
            null != y && t.scope.get(h.spaceAccountId$) !== y.accountId && AbortSignal.abort().throwIfAborted()
            let P = await s.F6.trackOperation(
              t.startupAnalytics,
              r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_START,
              () =>
                (0, m.g)(t.scope, e, {
                  input: [],
                  cwd: V,
                  workspaceRoots: I,
                  projectAssignment: null == v ? void 0 : N.projectAssignment,
                  collaborationMode: a,
                  serviceTier: E,
                  ...(null == M
                    ? { useAppServerPermissionDefault: !0 }
                    : { permissionsConfig: M, approvalsReviewer: M.approvalsReviewer }),
                  threadSource: o ? L : b.S,
                  memoryPreferences: c,
                  workspaceKind: C ? "projectless" : "project",
                  skipFallbackConfigReadForProjectlessCwd: C,
                  threadStartKind: o ? "default" : "realtime_voice",
                  realtimeVoiceDynamicTools: j,
                  ...(o ? {} : { baseInstructions: w }),
                  ...(null == k ? {} : { additionalDeveloperInstructions: k }),
                  ...(C ? { projectlessOutputDirectory: N.projectlessOutputDirectory } : {}),
                }),
            )
            if ("created" !== P.status) {
              let e = (0, m.c)(t.scope, P)
              throw (
                t.startupAnalytics?.recordErrorOperation(
                  e,
                  r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_START,
                ),
                e
              )
            }
            return {
              locator: { hostId: e, conversationId: P.conversationId },
              initializationError: (0, m.c)(t.scope, P)?.message,
              memoryPreferencesToInitialize: O,
            }
          })(e.hostId, t),
      )
      if ((t.startupAnalytics?.connectionSetup.setIsNewConversation(!0), null != l.initializationError)) {
        let e = Error(l.initializationError)
        throw (
          t.startupAnalytics?.recordErrorOperation(
            e,
            r.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_INITIALIZE,
          ),
          e
        )
      }
      try {
        let e = await a(l)
        if ("active" === e)
          (0, d.V)(t.scope, l.locator.hostId)
            .setThreadTitle(l.locator.conversationId, t.pageCompanion?.title ?? i.fH5)
            .catch((e) => {
              n.v.warning("Failed to set realtime conversation title", { safe: {}, sensitive: { error: e } })
            })
        else await j(l, t)
        return e
      } catch (e) {
        throw (j(l, t), e)
      }
    }
    async function j(e, t) {
      try {
        await (async function (e, t) {
          await (0, d.V)(t.scope, e.locator.hostId).archiveConversation(e.locator.conversationId, {
            useAppServerPins: t.scope.get(v.XF),
            source: "realtime_voice_provisional",
          })
        })(e, t)
      } catch (e) {
        n.v.warning("Failed to discard provisional realtime voice thread", { safe: {}, sensitive: { error: e } })
      }
    }
  },
}
//# sourceMappingURL=679632.aaa23d2b88.js.map
