export const __rspack_esm_ids = [679632]
export const __webpack_modules__ = {
  czNi(e, t, i) {
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
      f = i("irkb"),
      h = i("fA1m"),
      g = i("zd8w"),
      x = i("oyxz"),
      v = i("sT8g"),
      b = i("nDjx"),
      y = i("uNjk"),
      w = i("g2p6"),
      A = i("Sm6l"),
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
    let U = (0, h.h)()
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
        h,
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
        G = (0, r._U)(v.lN, z),
        Z = (0, f.jE)(),
        [K, X] = (0, g.useState)(P),
        [q, Y] = (0, g.useState)(null),
        [Q, J] = (0, g.useState)(!1),
        ee = (0, g.useRef)(P >= 1),
        et = (0, g.useRef)(!0),
        ei = (0, o.A)()
      A[0] !== z || A[1] !== Z || A[2] !== D
        ? ((t = async (e, t) => {
            let i = void 0 !== t && t
            ;(Y(e),
              J(!1),
              await (async () => {
                try {
                  if (i && !(await (0, v.MX)({ scope: D, hostId: z, queryClient: Z }))) return
                  ;(D.set(y.L, !0), await (0, T.gc)(D, U.screenContextEnabled, e))
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
      let ea = t
      A[4] !== H || A[5] !== ea
        ? ((i = () => {
            H ? (X(1), ee.current || ((ee.current = !0), ea(!0, !0))) : X(2)
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
              children: (0, m.jsx)(x.A, {
                id: "realtimeVoice.onboarding.title",
                defaultMessage: "Set up voice chat",
                description: "Accessible title for ChatGPT Voice onboarding",
              }),
            })),
            (A[14] = d))
          : (d = A[14]),
        A[15] !== er || A[16] !== S || A[17] !== K
          ? ((u =
              0 === K
                ? (0, m.jsx)(W, {
                    primaryAction: (0, m.jsx)(x.A, {
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
            (A[17] = K),
            (A[18] = u))
          : (u = A[18]),
        A[19] !== Q || A[20] !== G || A[21] !== q || A[22] !== ea || A[23] !== K
          ? ((p =
              1 === K
                ? (0, m.jsx)(B, {
                    isAppshotAvailable: !0 === q || G,
                    pendingEnabled: q,
                    updateError: Q,
                    onBack: () => X(0),
                    onEnabledChange: (e) => {
                      ea(e)
                    },
                    onNext: () => X(2),
                  })
                : null),
            (A[19] = Q),
            (A[20] = G),
            (A[21] = q),
            (A[22] = ea),
            (A[23] = K),
            (A[24] = p))
          : (p = A[24]),
        A[25] !== H ||
        A[26] !== en ||
        A[27] !== S ||
        A[28] !== k ||
        A[29] !== M ||
        A[30] !== _ ||
        A[31] !== K ||
        A[32] !== L
          ? ((h =
              2 === K
                ? (0, m.jsx)(F, {
                    onboarding: {
                      sourceComposerScope: _,
                      entryPoint: S,
                      originPath: k,
                      request: M,
                      workHomePolicyAcceptance: L,
                    },
                    isOpenRef: et,
                    onBack: () => X(+!!H),
                    onClose: en,
                  })
                : null),
            (A[25] = H),
            (A[26] = en),
            (A[27] = S),
            (A[28] = k),
            (A[29] = M),
            (A[30] = _),
            (A[31] = K),
            (A[32] = L),
            (A[33] = h))
          : (h = A[33]),
        A[34] !== p || A[35] !== h || A[36] !== u
          ? ((b = (0, m.jsxs)(E.R4, { className: "min-h-0 gap-5", size: "tall", children: [u, p, h] })),
            (A[34] = p),
            (A[35] = h),
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
        { isAppshotAvailable: c, pendingEnabled: d, updateError: u, onBack: p, onEnabledChange: f, onNext: h } = e,
        g = (0, T.iK)(U.screenContextEnabled),
        v = c && (d ?? g)
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, m.jsx)(x.A, {
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
              children: (0, m.jsx)(x.A, {
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
                  children: (0, m.jsx)(x.A, {
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
        l[4] !== v || l[5] !== c || l[6] !== f || l[7] !== w || l[8] !== u
          ? ((o = (0, m.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center",
              children: [
                i,
                n,
                (0, m.jsx)($, { enabled: v, isAppshotAvailable: c, isSaving: w, updateError: u, onEnabledChange: f }),
              ],
            })),
            (l[4] = v),
            (l[5] = c),
            (l[6] = f),
            (l[7] = w),
            (l[8] = u),
            (l[9] = o))
          : (o = l[9]),
        l[10] !== p || l[11] !== h || l[12] !== y || l[13] !== o
          ? ((s = (0, m.jsx)(W, { backAction: p, primaryAction: t, primaryDisabled: y, onSubmit: h, children: o })),
            (l[10] = p),
            (l[11] = h),
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
        { enabled: p, isAppshotAvailable: f, isSaving: h, updateError: g, onEnabledChange: v } = e,
        b = (0, o.A)()
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, m.jsx)(x.A, {
            id: "realtimeVoice.onboarding.appshots.toggleLabel",
            defaultMessage: "Use Appshots",
            description: "Label for the Appshots toggle in realtime voice onboarding",
          })),
          (i = (0, m.jsx)(x.A, {
            id: "realtimeVoice.onboarding.appshots.toggleDescription",
            defaultMessage: "You can turn this off anytime in Settings",
            description: "Description for the Appshots toggle in realtime voice onboarding",
          })),
          (u[0] = t),
          (u[1] = i))
        : ((t = u[0]), (i = u[1])),
        u[2] !== h
          ? ((r = h
              ? (0, m.jsxs)("span", {
                  className: "inline-flex",
                  role: "status",
                  children: [
                    (0, m.jsx)(_.y, { className: "icon-xs text-secondary" }),
                    (0, m.jsx)("span", {
                      className: "sr-only",
                      children: (0, m.jsx)(x.A, {
                        id: "realtimeVoice.onboarding.appshots.saving",
                        defaultMessage: "Saving Appshots preference",
                        description:
                          "Status announced while updating the Appshots preference in realtime voice onboarding",
                      }),
                    }),
                  ],
                })
              : null),
            (u[2] = h),
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
      let y = !f || h
      return (
        u[6] !== p || u[7] !== v || u[8] !== n || u[9] !== y
          ? ((s = (0, m.jsx)(S.l, { ariaLabel: n, checked: p, disabled: y, onChange: v })),
            (u[6] = p),
            (u[7] = v),
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
        u[14] !== f || u[15] !== g
          ? ((c =
              g || !f
                ? (0, m.jsx)("div", {
                    className: "border-t border-default px-4 py-3",
                    children: g
                      ? (0, m.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-danger",
                          children: (0, m.jsx)(x.A, {
                            id: "realtimeVoice.onboarding.appshots.error",
                            defaultMessage: "Appshots couldn’t be updated",
                            description: "Error shown when Appshots cannot be updated from realtime voice onboarding",
                          }),
                        })
                      : (0, m.jsx)("p", {
                          className: "text-sm text-tertiary",
                          children: (0, m.jsx)(x.A, {
                            id: "realtimeVoice.onboarding.appshots.unavailable",
                            defaultMessage: "Appshots aren’t available on this device",
                            description: "Unavailable state for Appshots in realtime voice onboarding",
                          }),
                        }),
                  })
                : null),
            (u[14] = f),
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
        f = null != u || d?.voices.length === 0
      n[0] !== d ? ((t = d?.voices.find((e) => e.slug === d.effectiveVoiceSlug)), (n[0] = d), (n[1] = t)) : (t = n[1])
      let h = t
      if (null == d || null == h) {
        let e, t, i, a
        n[2] !== f
          ? ((e = f
              ? (0, m.jsx)(x.A, {
                  id: "settings.general.realtimeVoice.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry loading compatible realtime voices",
                })
              : (0, m.jsx)(x.A, {
                  id: "settings.general.realtimeVoice.loading",
                  defaultMessage: "Loading…",
                  description: "Label shown while the selected realtime voice loads",
                })),
            (n[2] = f),
            (n[3] = e))
          : (e = n[3])
        let r = !f
        return (
          n[4] !== f || n[5] !== p
            ? ((t = () => {
                f && p()
              }),
              (n[4] = f),
              (n[5] = p),
              (n[6] = t))
            : (t = n[6]),
          n[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, m.jsx)(Z, {})), (n[7] = i)) : (i = n[7]),
          n[8] !== l || n[9] !== e || n[10] !== r || n[11] !== t
            ? ((a = (0, m.jsx)(W, { backAction: l, primaryAction: e, primaryDisabled: r, onSubmit: t, children: i })),
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
        n[13] !== h || n[14] !== s || n[15] !== l || n[16] !== c || n[17] !== o || n[18] !== d
          ? ((i = (0, m.jsx)(
              H,
              { initialVoice: h, onboarding: o, isOpenRef: s, voiceCatalog: d, onBack: l, onClose: c },
              h.slug,
            )),
            (n[13] = h),
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
        f = (0, a.c)(30),
        { initialVoice: h, onboarding: v, isOpenRef: b, onBack: y, onClose: A, voiceCatalog: j } = e,
        E = (0, r.gh)(R.u)
      f[0] !== E ? ((t = () => E.get(w.Sk)), (f[0] = E), (f[1] = t)) : (t = f[1])
      let [_] = (0, g.useState)(t),
        S = (0, r._U)(k.JW, "2182392068"),
        [C, N] = (0, g.useState)(h.slug),
        [T, V] = (0, g.useState)(!1),
        [I, O] = (0, g.useState)(!1)
      f[2] !== _ || f[3] !== h.slug || f[4] !== b || f[5] !== A || f[6] !== v || f[7] !== E || f[8] !== C
        ? ((i = async () => {
            ;(V(!0), O(!1))
            try {
              C !== h.slug && (await (0, M.H$)(E, C, _))
            } catch {
              b.current && (O(!0), V(!1))
              return
            }
            b.current &&
              (A(),
              await (0, u.eE)(E, v.sourceComposerScope, v.request, v.originPath, v.workHomePolicyAcceptance).catch(G))
          }),
          (f[2] = _),
          (f[3] = h.slug),
          (f[4] = b),
          (f[5] = A),
          (f[6] = v),
          (f[7] = E),
          (f[8] = C),
          (f[9] = i))
        : (i = f[9])
      let L = i
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, m.jsx)(x.A, {
              id: "realtimeVoice.onboarding.start",
              defaultMessage: "Start voice chat",
              description: "Button that completes realtime voice onboarding and starts voice",
            })),
            (f[10] = n))
          : (n = f[10]),
        f[11] !== L ? ((o = () => void L()), (f[11] = L), (f[12] = o)) : (o = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, m.jsx)(Z, {})), (f[13] = s)) : (s = f[13]),
        f[14] !== h || f[15] !== S || f[16] !== T || f[17] !== j.voices || f[18] !== C
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
                  initialVoice: j.voices.find((e) => e.slug === C) ?? h,
                  voices: j.voices,
                  onVoiceChange: (e) => N(e),
                })),
            (f[14] = h),
            (f[15] = S),
            (f[16] = T),
            (f[17] = j.voices),
            (f[18] = C),
            (f[19] = l))
          : (l = f[19]),
        f[20] !== I
          ? ((c = I
              ? (0, m.jsx)("p", {
                  role: "alert",
                  className: "mt-2 text-sm text-danger",
                  children: (0, m.jsx)(x.A, {
                    id: "settings.general.realtimeVoice.saveError",
                    defaultMessage: "Unable to save voice",
                    description: "Error shown when saving the realtime voice fails",
                  }),
                })
              : null),
            (f[20] = I),
            (f[21] = c))
          : (c = f[21]),
        f[22] !== l || f[23] !== c
          ? ((d = (0, m.jsxs)("div", {
              className: "mx-auto flex w-full max-w-xl flex-col items-center text-center",
              children: [s, l, c],
            })),
            (f[22] = l),
            (f[23] = c),
            (f[24] = d))
          : (d = f[24]),
        f[25] !== T || f[26] !== y || f[27] !== o || f[28] !== d
          ? ((p = (0, m.jsx)(W, { backAction: y, primaryAction: n, primaryLoading: T, onSubmit: o, children: d })),
            (f[25] = T),
            (f[26] = y),
            (f[27] = o),
            (f[28] = d),
            (f[29] = p))
          : (p = f[29]),
        p
      )
    }
    function G() {}
    function Z() {
      let e,
        t,
        i = (0, a.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, m.jsx)("h1", {
              className: "heading-lg font-normal tracking-tight text-default",
              children: (0, m.jsx)(x.A, {
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
                  children: (0, m.jsx)(x.A, {
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
    function W(e) {
      let t,
        i,
        r,
        n,
        o,
        s,
        l = (0, a.c)(18),
        { backAction: c, children: d, onSubmit: u, primaryAction: p, primaryDisabled: f, primaryLoading: h } = e,
        g = void 0 !== f && f,
        v = void 0 !== h && h
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
        l[4] !== c || l[5] !== v
          ? ((r =
              null == c
                ? (0, m.jsx)("span", {})
                : (0, m.jsx)(A.$, {
                    color: "secondary",
                    disabled: v,
                    onClick: c,
                    type: "button",
                    children: (0, m.jsx)(x.A, {
                      id: "realtimeVoice.onboarding.back",
                      defaultMessage: "Back",
                      description: "Button that returns to the previous realtime voice onboarding step",
                    }),
                  })),
            (l[4] = c),
            (l[5] = v),
            (l[6] = r))
          : (r = l[6]),
        l[7] !== p || l[8] !== g || l[9] !== v
          ? ((n = (0, m.jsx)(A.$, { color: "primary", disabled: g, loading: v, type: "submit", children: p })),
            (l[7] = p),
            (l[8] = g),
            (l[9] = v),
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
    var K = i("OTgW"),
      X = i("Nc5R"),
      q = i("WFY2"),
      Y = i("HK0a")
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
      startupAnalytics: f,
      treatment: h,
      workspaceRootsForLocalExecution: g,
    }) {
      try {
        await (0, X.Kq)(
          n,
          {
            scope: e,
            startupAnalytics: f,
            activeCollaborationMode: t,
            agentMode: a,
            currentLocalExecutionCwd: r,
            existingThreadVoiceEnabled: h.existingThreadVoiceEnabled,
            memoryPreferences: o,
            permissionProfileId: l,
            pageCompanion: c,
            projectId: d,
            newThreadBaseInstructions: h.newThread.baseInstructions,
            newThreadDeveloperInstructions: c?.developerInstructions ?? (m ? h.newThread.developerInstructions : null),
            realtimeVoiceDynamicTools: h.dynamicTools,
            realtimeVoiceToolsDeveloperInstructions: h.newThread.voiceToolsDeveloperInstructions,
            serviceTier: u,
            shouldSendPermissionOverrides: p,
            workspaceRootsForLocalExecution: g,
          },
          async ({ locator: e, memoryPreferencesToInitialize: t }) => i(e.conversationId, t),
        )
      } catch (e) {
        throw (
          q.v.error("Error starting realtime voice", {
            safe: { ...f?.getErrorDetails(e), realtimeSessionId: f?.sessionId },
            sensitive: { error: e },
          }),
          s(e),
          e
        )
      }
    }
    function J(e, t, i, m, f, h, g) {
      let x,
        v,
        b,
        y = (0, a.c)(15),
        w = void 0 === m ? null : m,
        A = (0, r.gh)(R.u),
        j = (0, o.A)(),
        E = (0, s.zy)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((x = { name: "voice.realtime" }), (y[0] = x)) : (x = y[0])
      let { isCapable: _ } = (0, r._U)(l.G, x)
      if (!_) return
      y[1] !== j || y[2] !== A
        ? ((v = (e) => {
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
          (y[3] = v))
        : (v = y[3])
      let S = v
      return (
        y[4] !== i ||
        y[5] !== t ||
        y[6] !== f ||
        y[7] !== g ||
        y[8] !== E ||
        y[9] !== h ||
        y[10] !== w?.projectId ||
        y[11] !== A ||
        y[12] !== S ||
        y[13] !== e
          ? ((b = async () => {
              var a
              let r
              if ((g ?? "work" === t) && null == h) {
                let e = (0, Y.e3)(A)
                if (null == e) return
                r = e
              }
              let n = A.get(d.bz),
                o = {
                  activeCollaborationMode: i,
                  pageCompanion: h,
                  hostId: f,
                  projectId: null == f ? w?.projectId : void 0,
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
                A.get(K.Yl) || (A.set(K.Yl, !0), (0, p.qf)(A, z, a), 0))
              )
                try {
                  await (0, u.eE)(A, e, o, s, r)
                } catch (e) {
                  A.get(u.RJ)?.phase !== "failed" && S(e)
                }
            }),
            (y[4] = i),
            (y[5] = t),
            (y[6] = f),
            (y[7] = g),
            (y[8] = E),
            (y[9] = h),
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
            f,
            h,
            g,
            x,
            v,
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
            Z = void 0 === U ? 0 : U,
            W = void 0 === B ? s.NY : B,
            [K, X] = (0, o.useState)(!1),
            q = (0, o.useRef)(null),
            Y = (0, o.useRef)(null),
            Q = (0, o.useRef)(null),
            J = (0, o.useRef)(null)
          ;(N[0] !== z ? ("live" !== z && (t = z), (N[0] = z), (N[1] = t)) : (t = N[1]),
            N[2] !== H || N[3] !== D || N[4] !== Z || N[5] !== t || N[6] !== $
              ? ((c = { paletteIndex: H, phase: D, previewAudioLevel: Z, previewTimeMs: t, voiceActivity: $ }),
                (N[2] = H),
                (N[3] = D),
                (N[4] = Z),
                (N[5] = t),
                (N[6] = $),
                (N[7] = c))
              : (c = N[7]))
          let ee = (0, o.useRef)(c)
          N[8] !== V || N[9] !== G || N[10] !== Z || N[11] !== t
            ? ((d = (e) => {
                "preview" === G || null != t || Z > 0 || V?.(e)
              }),
              (N[8] = V),
              (N[9] = G),
              (N[10] = Z),
              (N[11] = t),
              (N[12] = d))
            : (d = N[12])
          let et = (0, o.useEffectEvent)(d)
          N[13] !== k || N[14] !== G || N[15] !== Z || N[16] !== t
            ? ((u = (e) => {
                "preview" !== G && null == t && 0 === Z && k?.(e)
              }),
              (N[13] = k),
              (N[14] = G),
              (N[15] = Z),
              (N[16] = t),
              (N[17] = u))
            : (u = N[17])
          let ei = (0, o.useEffectEvent)(u)
          N[18] !== I
            ? ((p = () => {
                ;(X(!0), I?.())
              }),
              (N[18] = I),
              (N[19] = p))
            : (p = N[19])
          let ea = (0, o.useEffectEvent)(p)
          N[20] !== M || N[21] !== P
            ? ((m = (e) => {
                ;((Y.current = e), (null == e || e.dataset.avatarOverlayPlacement === M) && P?.(e, e?.parentElement))
              }),
              (N[20] = M),
              (N[21] = P),
              (N[22] = m))
            : (m = N[22])
          let er = m
          ;(N[23] !== et || N[24] !== ea || N[25] !== ei || N[26] !== K || !1 !== N[27] || N[28] !== G
            ? ((f = () => {
                if (K) return
                let e = Y.current,
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
                        : null != e && ((n = e), (q.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      r || ea()
                    }),
                  () => {
                    ;((r = !0), o?.disconnect(), n?.dispose(), (q.current = null))
                  }
                )
              }),
              (N[23] = et),
              (N[24] = ea),
              (N[25] = ei),
              (N[26] = K),
              (N[27] = !1),
              (N[28] = G),
              (N[29] = f))
            : (f = N[29]),
            N[30] !== K || !1 !== N[31] || N[32] !== G
              ? ((h = [K, !1, G]), (N[30] = K), (N[31] = !1), (N[32] = G), (N[33] = h))
              : (h = N[33]),
            (0, o.useLayoutEffect)(f, h),
            N[34] !== H || N[35] !== D || N[36] !== Z || N[37] !== t || N[38] !== $
              ? ((g = () => {
                  let e = { paletteIndex: H, phase: D, previewAudioLevel: Z, previewTimeMs: t, voiceActivity: $ }
                  ;((ee.current = e), q.current?.setInputs(e))
                }),
                (N[34] = H),
                (N[35] = D),
                (N[36] = Z),
                (N[37] = t),
                (N[38] = $),
                (N[39] = g))
              : (g = N[39]),
            N[40] !== H || N[41] !== D || N[42] !== Z || N[43] !== t || N[44] !== $
              ? ((x = [H, D, Z, t, $]), (N[40] = H), (N[41] = D), (N[42] = Z), (N[43] = t), (N[44] = $), (N[45] = x))
              : (x = N[45]),
            (0, o.useEffect)(g, x))
          let en = !K && "inactive" !== D
          ;(N[46] !== en || N[47] !== W
            ? ((v = () => {
                if (!en) {
                  ;((J.current = null), q.current?.setAudioLevels(null))
                  return
                }
                return W((e) => {
                  ;((J.current = e), q.current?.setAudioLevels(e))
                })
              }),
              (b = [en, W]),
              (N[46] = en),
              (N[47] = W),
              (N[48] = v),
              (N[49] = b))
            : ((v = N[48]), (b = N[49])),
            (0, o.useEffect)(v, b),
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
          N[52] !== K || N[53] !== H
            ? ((w = K ? (0, l.V)(H) : null), (N[52] = K), (N[53] = H), (N[54] = w))
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
      o = i("ZQ23"),
      s = i("czNi"),
      l = i("Tigz")
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
            f,
            h = (0, r.c)(14),
            { entryPoint: g } = e
          return (
            h[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("h1", {
                  className: "heading-2xl font-normal tracking-tight text-default",
                  children: (0, a.jsx)(n.A, {
                    id: "realtimeVoice.nux.title",
                    defaultMessage: "Meet ChatGPT Voice",
                    description: "Title of the first-use introduction inside a live voice chat",
                  }),
                })),
                (h[0] = t))
              : (t = h[0]),
            h[1] === Symbol.for("react.memo_cache_sentinel")
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
                (h[1] = i))
              : (i = h[1]),
            h[2] !== g
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
                (h[2] = g),
                (h[3] = c))
              : (c = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel")
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
                (h[4] = d))
              : (d = h[4]),
            h[5] !== g
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
                (h[5] = g),
                (h[6] = u))
              : (u = h[6]),
            h[7] === Symbol.for("react.memo_cache_sentinel")
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
                (h[7] = p))
              : (p = h[7]),
            h[8] !== g
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
                (h[8] = g),
                (h[9] = m))
              : (m = h[9]),
            h[10] !== c || h[11] !== u || h[12] !== m
              ? ((f = (0, a.jsxs)("div", {
                  className: "mx-auto flex w-full max-w-xl flex-col items-center gap-8 pt-4 text-center",
                  children: [
                    t,
                    (0, a.jsxs)("div", { className: "flex w-full max-w-lg flex-col gap-8", children: [c, u, m] }),
                  ],
                })),
                (h[10] = c),
                (h[11] = u),
                (h[12] = m),
                (h[13] = f))
              : (f = h[13]),
            f
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
            f,
            h,
            g,
            x,
            v,
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
          let [G, Z] = (0, o.useState)(t)
          A[1] !== F || A[2] !== L || A[3] !== I || A[4] !== k
            ? ((i = L && !k.some((e) => e.slug === I) ? F : k),
              (A[1] = F),
              (A[2] = L),
              (A[3] = I),
              (A[4] = k),
              (A[5] = i))
            : (i = A[5])
          let W = i,
            K = new Map()
          for (let e of W) {
            let t = e.accent?.trim() ?? "",
              i = K.get(t) ?? []
            ;(i.push(e), K.set(t, i))
          }
          let X = Array.from(K.keys()),
            q = X.some(d),
            Y = X.filter((e) => !G.includes(e))
          if (q && Y.length > 0) {
            let e =
              0 === G.length && void 0 !== V && V
                ? Array.from(K).find((e) => {
                    let [, t] = e
                    return t.some((e) => e.slug === $)
                  })?.[0]
                : void 0
            Z([...G, ...(null != e ? [e] : []), ...Y.filter((t) => t !== e)])
          }
          let Q = [...G.filter((e) => K.has(e)), ...Y]
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
          A[9] !== W || A[10] !== J || A[11] !== I
            ? ((p = () => {
                let e = W.find((e) => e.slug === I)
                null != e && J(e)
              }),
              (A[9] = W),
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
              ? ((f = [S, M, R]), (A[17] = S), (A[18] = M), (A[19] = R), (A[20] = f))
              : (f = A[20]),
            (0, o.useEffect)(m, f),
            A[21] !== j
              ? ((h = (0, n.A)("min-h-0 overflow-y-auto select-none", j)), (A[21] = j), (A[22] = h))
              : (h = A[22]),
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
                    children: (K.get(e) ?? []).map((e) =>
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
                            ;(L && H(W), C(e.slug), J(e))
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
              ? ((x = (0, a.jsx)("div", { className: "flex flex-col gap-6", children: et })), (A[24] = et), (A[25] = x))
              : (x = A[25]),
            A[26] !== S
              ? ((v = (0, a.jsx)("audio", {
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
            A[30] !== _ || A[31] !== g || A[32] !== x || A[33] !== v || A[34] !== b
              ? ((y = (0, a.jsxs)("fieldset", { disabled: _, children: [g, x, v, b] })),
                (A[30] = _),
                (A[31] = g),
                (A[32] = x),
                (A[33] = v),
                (A[34] = b),
                (A[35] = y))
              : (y = A[35]),
            A[36] !== h || A[37] !== y
              ? ((w = (0, a.jsx)("div", { className: h, children: y })), (A[36] = h), (A[37] = y), (A[38] = w))
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
      c = i("bVeK"),
      d = i("Hc2f"),
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
            f,
            h,
            g,
            x,
            v,
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
            Z,
            W,
            K,
            X = (0, r.c)(144),
            {
              autoFocusSelectedVoice: q,
              compactLayout: Y,
              initialVoice: Q,
              onVoiceChange: J,
              paletteIndex: ee,
              playPreviewOnInitialRender: et,
              previewEnabled: ei,
              voices: ea,
            } = e,
            er = void 0 !== q && q,
            en = void 0 !== Y && Y,
            eo = void 0 === ee ? 0 : ee,
            es = void 0 === ei || ei,
            el = (0, s.A)(),
            ec = (0, o.useId)(),
            ed = (0, o.useId)(),
            eu = (0, o.useRef)(null),
            [ep] = (0, o.useState)(ea),
            [em, ef] = (0, o.useState)(null),
            [eh, eg] = (0, o.useState)(Q.slug),
            [ex, ev] = (0, o.useState)("idle"),
            [eb, ey] = (0, o.useState)(void 0 !== et && et)
          X[0] !== ep || X[1] !== em || X[2] !== eh || X[3] !== ea
            ? ((t = em ?? (ea.some((e) => e.slug === eh) ? ea : ep)),
              (X[0] = ep),
              (X[1] = em),
              (X[2] = eh),
              (X[3] = ea),
              (X[4] = t))
            : (t = X[4])
          let ew = t
          X[5] !== eh ? ((i = (e) => e.slug === eh), (X[5] = eh), (X[6] = i)) : (i = X[6])
          let eA = ew.findIndex(i)
          X[7] !== ew || X[8] !== eA || X[9] !== eh || X[10] !== ea
            ? ((p = ea.find((e) => e.slug === eh) ?? ew[eA]),
              (X[7] = ew),
              (X[8] = eA),
              (X[9] = eh),
              (X[10] = ea),
              (X[11] = p))
            : (p = X[11])
          let ej = p
          X[12] !== es || X[13] !== eb
            ? ((m = () => {
                let e = eu.current
                if (null == e) return
                let t = !1
                return (
                  es &&
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
              (X[12] = es),
              (X[13] = eb),
              (X[14] = m))
            : (m = X[14])
          let eE = ej?.previewUrl
          if (
            (X[15] !== es || X[16] !== eb || X[17] !== eE
              ? ((f = [es, eE, eb]), (X[15] = es), (X[16] = eb), (X[17] = eE), (X[18] = f))
              : (f = X[18]),
            (0, o.useEffect)(m, f),
            null == ej)
          ) {
            let e
            return (
              X[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(l.A, {
                      id: "settings.general.realtimeVoice.noVoices",
                      defaultMessage: "No compatible voices are available",
                      description: "Message shown when no compatible realtime voices are available",
                    }),
                  })),
                  (X[19] = e))
                : (e = X[19]),
              e
            )
          }
          X[20] !== J || X[21] !== ew || X[22] !== ed || X[23] !== eh
            ? ((h = (e, t) => {
                let i = ew[(e + ew.length) % ew.length]
                null != i &&
                  i.slug !== eh &&
                  (eu.current?.pause(),
                  ef(ew),
                  ev("idle"),
                  ey(!0),
                  eg(i.slug),
                  J(i.slug),
                  void 0 !== t && t && document.getElementById(`${ed}-${i.slug}`)?.focus())
              }),
              (X[20] = J),
              (X[21] = ew),
              (X[22] = ed),
              (X[23] = eh),
              (X[24] = h))
            : (h = X[24])
          let e_ = h
          X[25] !== ex || X[26] !== eb
            ? ((g = () => {
                let e = eu.current
                if (null != e) {
                  if ("playing" === ex) return void e.pause()
                  if (!eb) return void ey(!0)
                  ;(("ended" === ex || "error" === ex) && ((e.currentTime = 0), ev("idle")),
                    e.play().catch(() => ev("error")))
                }
              }),
              (X[25] = ex),
              (X[26] = eb),
              (X[27] = g))
            : (g = X[27])
          let eS = g
          switch (ex) {
            case "ended": {
              let e
              ;(X[28] !== el || X[29] !== ej.name
                ? ((e = el.formatMessage(
                    {
                      id: "settings.general.realtimeVoice.previewReplay",
                      defaultMessage: "Replay {name} preview",
                      description: "Accessible label for replaying a voice preview",
                    },
                    { name: ej.name },
                  )),
                  (X[28] = el),
                  (X[29] = ej.name),
                  (X[30] = e))
                : (e = X[30]),
                (x = e))
              break
            }
            case "error": {
              let e
              ;(X[31] !== el || X[32] !== ej.name
                ? ((e = el.formatMessage(
                    {
                      id: "settings.general.realtimeVoice.previewRetry",
                      defaultMessage: "Retry {name} preview",
                      description: "Accessible label for retrying a voice preview",
                    },
                    { name: ej.name },
                  )),
                  (X[31] = el),
                  (X[32] = ej.name),
                  (X[33] = e))
                : (e = X[33]),
                (x = e))
              break
            }
            case "idle": {
              let e
              ;(X[34] !== el || X[35] !== ej.name
                ? ((e = el.formatMessage(
                    {
                      id: "settings.general.realtimeVoice.previewPlay",
                      defaultMessage: "Play {name} preview",
                      description: "Accessible label for playing a voice preview",
                    },
                    { name: ej.name },
                  )),
                  (X[34] = el),
                  (X[35] = ej.name),
                  (X[36] = e))
                : (e = X[36]),
                (x = e))
              break
            }
            case "playing": {
              let e
              ;(X[37] !== el || X[38] !== ej.name
                ? ((e = el.formatMessage(
                    {
                      id: "settings.general.realtimeVoice.previewPause",
                      defaultMessage: "Pause {name} preview",
                      description: "Accessible label for pausing a voice preview",
                    },
                    { name: ej.name },
                  )),
                  (X[37] = el),
                  (X[38] = ej.name),
                  (X[39] = e))
                : (e = X[39]),
                (x = e))
            }
          }
          let eC = !en && "pt-5 pb-1"
          X[40] !== eC
            ? ((v = (0, n.A)("flex w-full flex-col items-center", eC)), (X[40] = eC), (X[41] = v))
            : (v = X[41])
          let eN = !es,
            eR = en ? "preview" : "overlay",
            eT = "playing" === ex ? 0.48 : 0.08,
            eV = "playing" === ex ? "speaking" : "listening"
          ;(X[42] !== eo || X[43] !== eR || X[44] !== eT || X[45] !== eV
            ? ((b = (0, a.jsx)(u.P, {
                glowEnabled: !1,
                paletteIndex: eo,
                phase: "active",
                placement: "center",
                presentation: eR,
                previewAudioLevel: eT,
                voiceActivity: eV,
              })),
              (X[42] = eo),
              (X[43] = eR),
              (X[44] = eT),
              (X[45] = eV),
              (X[46] = b))
            : (b = X[46]),
            X[47] !== x || X[48] !== ej.orbTreatment || X[49] !== eN || X[50] !== b || X[51] !== eS
              ? ((y = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": x,
                  className:
                    "relative size-36 cursor-interaction rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "data-orb-treatment": ej.orbTreatment,
                  disabled: eN,
                  onClick: eS,
                  children: b,
                })),
                (X[47] = x),
                (X[48] = ej.orbTreatment),
                (X[49] = eN),
                (X[50] = b),
                (X[51] = eS),
                (X[52] = y))
              : (y = X[52]))
          let eI = es && eb ? ej.previewUrl : void 0
          ;(X[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = () => ev("ended")),
              (A = () => ev("error")),
              (j = () => ev("idle")),
              (E = () => ev("playing")),
              (X[53] = w),
              (X[54] = A),
              (X[55] = j),
              (X[56] = E))
            : ((w = X[53]), (A = X[54]), (j = X[55]), (E = X[56])),
            X[57] !== eI
              ? ((_ = (0, a.jsx)("audio", {
                  ref: eu,
                  className: "hidden",
                  preload: "none",
                  src: eI,
                  onEnded: w,
                  onError: A,
                  onPause: j,
                  onPlay: E,
                })),
                (X[57] = eI),
                (X[58] = _))
              : (_ = X[58]))
          let ek = en ? "mt-6 w-full max-w-72" : "mt-3 gap-6"
          ;(X[59] !== ek
            ? ((S = (0, n.A)("flex items-center text-center", ek)), (X[59] = ek), (X[60] = S))
            : (S = X[60]),
            X[61] !== el
              ? ((C = el.formatMessage({
                  id: "settings.general.realtimeVoice.previous",
                  defaultMessage: "Previous voice",
                  description: "Button to select the previous realtime voice",
                })),
                (X[61] = el),
                (X[62] = C))
              : (C = X[62]))
          let eO = ew.length < 2
          ;(X[63] !== e_ || X[64] !== eA
            ? ((N = () => e_(eA - 1)), (X[63] = e_), (X[64] = eA), (X[65] = N))
            : (N = X[65]),
            X[66] !== en
              ? ((R = en
                  ? (0, a.jsx)(c.KBq, {})
                  : (0, a.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm rotate-180" })),
                (X[66] = en),
                (X[67] = R))
              : (R = X[67]),
            X[68] !== C || X[69] !== eO || X[70] !== N || X[71] !== R
              ? ((T = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": C,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: eO,
                  onClick: N,
                  children: R,
                })),
                (X[68] = C),
                (X[69] = eO),
                (X[70] = N),
                (X[71] = R),
                (X[72] = T))
              : (T = X[72]))
          let eM = en ? "min-w-0 flex-1" : "w-56 gap-1"
          ;(X[73] !== eM ? ((V = (0, n.A)("flex flex-col", eM)), (X[73] = eM), (X[74] = V)) : (V = X[74]),
            X[75] !== ej.name
              ? ((I = (0, a.jsx)("p", { className: "text-xl font-semibold", children: ej.name })),
                (X[75] = ej.name),
                (X[76] = I))
              : (I = X[76]),
            X[77] !== ej.description
              ? ((k = (0, a.jsx)("p", { className: "text-sm text-secondary", children: ej.description })),
                (X[77] = ej.description),
                (X[78] = k))
              : (k = X[78]),
            X[79] !== V || X[80] !== I || X[81] !== k
              ? ((O = (0, a.jsxs)("div", { className: V, children: [I, k] })),
                (X[79] = V),
                (X[80] = I),
                (X[81] = k),
                (X[82] = O))
              : (O = X[82]),
            X[83] !== el
              ? ((M = el.formatMessage({
                  id: "settings.general.realtimeVoice.next",
                  defaultMessage: "Next voice",
                  description: "Button to select the next realtime voice",
                })),
                (X[83] = el),
                (X[84] = M))
              : (M = X[84]))
          let eL = ew.length < 2
          ;(X[85] !== e_ || X[86] !== eA
            ? ((L = () => e_(eA + 1)), (X[85] = e_), (X[86] = eA), (X[87] = L))
            : (L = X[87]),
            X[88] !== en
              ? ((P = en ? (0, a.jsx)(c.j1b, {}) : (0, a.jsx)(d.A, { "aria-hidden": !0, className: "icon-sm" })),
                (X[88] = en),
                (X[89] = P))
              : (P = X[89]),
            X[90] !== M || X[91] !== eL || X[92] !== L || X[93] !== P
              ? ((D = (0, a.jsx)("button", {
                  type: "button",
                  "aria-label": M,
                  className:
                    "cursor-interaction rounded-full p-2 text-tertiary hover:text-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  disabled: eL,
                  onClick: L,
                  children: P,
                })),
                (X[90] = M),
                (X[91] = eL),
                (X[92] = L),
                (X[93] = P),
                (X[94] = D))
              : (D = X[94]),
            X[95] !== S || X[96] !== T || X[97] !== O || X[98] !== D
              ? ((U = (0, a.jsxs)("div", { className: S, children: [T, O, D] })),
                (X[95] = S),
                (X[96] = T),
                (X[97] = O),
                (X[98] = D),
                (X[99] = U))
              : (U = X[99]),
            X[100] !== ex
              ? ((z =
                  "error" === ex
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
                (X[100] = ex),
                (X[101] = z))
              : (z = X[101]))
          let eP = en ? "h-10" : "mt-4"
          if (
            (X[102] !== eP
              ? ((B = (0, n.A)("flex items-center gap-3", eP)), (X[102] = eP), (X[103] = B))
              : (B = X[103]),
            X[104] !== e_ || X[105] !== ew.length || X[106] !== eA
              ? (($ = (e) => {
                  let t = null
                  ;("ArrowLeft" === e.key || "ArrowUp" === e.key
                    ? (t = eA - 1)
                    : "ArrowRight" === e.key || "ArrowDown" === e.key
                      ? (t = eA + 1)
                      : "Home" === e.key
                        ? (t = 0)
                        : "End" === e.key && (t = ew.length - 1),
                    null != t && (e.preventDefault(), e_(t, !0)))
                }),
                (X[104] = e_),
                (X[105] = ew.length),
                (X[106] = eA),
                (X[107] = $))
              : ($ = X[107]),
            X[108] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = (0, a.jsx)(l.A, {
                  id: "settings.general.realtimeVoice.choose",
                  defaultMessage: "Choose a voice",
                  description: "Accessible label for the realtime voice picker",
                })),
                (X[108] = F))
              : (F = X[108]),
            X[109] !== ec
              ? ((H = (0, a.jsx)("span", { id: ec, className: "sr-only", children: F })), (X[109] = ec), (X[110] = H))
              : (H = X[110]),
            X[111] !== er ||
              X[112] !== e_ ||
              X[113] !== en ||
              X[114] !== el ||
              X[115] !== ew ||
              X[116] !== ed ||
              X[117] !== ej.slug)
          ) {
            let e
            ;(X[119] !== er ||
            X[120] !== e_ ||
            X[121] !== en ||
            X[122] !== el ||
            X[123] !== ew.length ||
            X[124] !== ed ||
            X[125] !== ej.slug
              ? ((e = (e, t) => {
                  let i = e.slug === ej.slug
                  return (0, a.jsx)(
                    "button",
                    {
                      id: `${ed}-${e.slug}`,
                      type: "button",
                      role: "radio",
                      autoFocus: er && i,
                      "aria-checked": i,
                      "aria-label": el.formatMessage(
                        {
                          id: "settings.general.realtimeVoice.optionLabel",
                          defaultMessage: "{name}: {description}",
                          description: "Accessible label for one realtime voice option",
                        },
                        { description: e.description, name: e.name },
                      ),
                      "aria-posinset": t + 1,
                      "aria-setsize": ew.length,
                      className: (0, n.A)(
                        "cursor-interaction rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        en ? "size-2" : "size-2.5",
                        i ? "bg-text-emphasis" : "bg-text-tertiary/30",
                      ),
                      tabIndex: i ? 0 : -1,
                      onClick: () => e_(t),
                    },
                    e.slug,
                  )
                }),
                (X[119] = er),
                (X[120] = e_),
                (X[121] = en),
                (X[122] = el),
                (X[123] = ew.length),
                (X[124] = ed),
                (X[125] = ej.slug),
                (X[126] = e))
              : (e = X[126]),
              (G = ew.map(e)),
              (X[111] = er),
              (X[112] = e_),
              (X[113] = en),
              (X[114] = el),
              (X[115] = ew),
              (X[116] = ed),
              (X[117] = ej.slug),
              (X[118] = G))
          } else G = X[118]
          return (
            X[127] !== ec || X[128] !== B || X[129] !== $ || X[130] !== H || X[131] !== G
              ? ((Z = (0, a.jsxs)("div", {
                  role: "radiogroup",
                  "aria-labelledby": ec,
                  className: B,
                  tabIndex: -1,
                  onKeyDown: $,
                  children: [H, G],
                })),
                (X[127] = ec),
                (X[128] = B),
                (X[129] = $),
                (X[130] = H),
                (X[131] = G),
                (X[132] = Z))
              : (Z = X[132]),
            X[133] !== ej.description || X[134] !== ej.name
              ? ((W = (0, a.jsx)("span", {
                  className: "sr-only",
                  "aria-live": "polite",
                  children: (0, a.jsx)(l.A, {
                    id: "settings.general.realtimeVoice.selectedAnnouncement",
                    defaultMessage: "Selected voice: {name}. {description}",
                    description: "Screen reader announcement after selecting a realtime voice",
                    values: { description: ej.description, name: ej.name },
                  }),
                })),
                (X[133] = ej.description),
                (X[134] = ej.name),
                (X[135] = W))
              : (W = X[135]),
            X[136] !== v || X[137] !== y || X[138] !== _ || X[139] !== U || X[140] !== z || X[141] !== Z || X[142] !== W
              ? ((K = (0, a.jsxs)("div", { className: v, children: [y, _, U, z, Z, W] })),
                (X[136] = v),
                (X[137] = y),
                (X[138] = _),
                (X[139] = U),
                (X[140] = z),
                (X[141] = Z),
                (X[142] = W),
                (X[143] = K))
              : (K = X[143]),
            K
          )
        },
      },
    )
  },
  Nc5R(e, t, i) {
    i.d(t, { m5: () => w, aC: () => y, Kq: () => A })
    var a = i("iRMi"),
      r = i("qixt"),
      n = i("WFY2"),
      o = i("uIjo"),
      s = i("DBCl"),
      l = i("vpsD"),
      c = i("N2rm"),
      d = i("Dgwo"),
      u = i("shRG"),
      p = i("lqHG"),
      m = i("wCOm"),
      f = i("QLhf"),
      h = i("NF58"),
      g = i("BVdX"),
      x = i("pyoT"),
      v = i("ay73"),
      b = i("IJee")
    function y(e, t, i) {
      return null == i || ("chat" === i && "local" === t) ? e.get(r.e2) : "work" === i
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
    async function A(e, t, i) {
      if ("exact" === e.type)
        return (
          t.startupAnalytics?.connectionSetup.setIsNewConversation(!1),
          i(
            !0 === e.ephemeral
              ? { locator: e.locator, memoryPreferencesToInitialize: null }
              : await o.F6.trackOperation(
                  t.startupAnalytics,
                  a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_OPEN,
                  () =>
                    (async function (e, t) {
                      let { conversationId: i, hostId: r } = e
                      if (
                        !(
                          await o.F6.trackOperation(
                            t.startupAnalytics,
                            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_LOAD,
                            () => (0, d.V)(t.scope, r).loadRecentConversationIds([i]),
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
                      let n = await o.F6.trackOperation(
                        t.startupAnalytics,
                        a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                        () =>
                          (0, d.V)(t.scope, r).resumeConversation(
                            {
                              conversationId: i,
                              model: null,
                              reasoningEffort: null,
                              workspaceRoots: t.existingThreadVoiceEnabled ? t.workspaceRootsForLocalExecution : ["/"],
                              useAppServerPermissionDefault: !1,
                              preserveServerConfiguration: r === c.iw,
                              showThreadGoalResumeConfirmation: !1,
                            },
                            { readResumeInputs: (0, u.jQ)(t.scope, r) },
                          ),
                      )
                      if ("not-ready" === n.status) {
                        let e = new l.uZ(n)
                        throw (
                          t.startupAnalytics?.recordErrorOperation(
                            e,
                            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_RESUME,
                          ),
                          e
                        )
                      }
                      let { threadSource: s } = n
                      if (!t.existingThreadVoiceEnabled && s !== b.S) throw Error("This thread is not a voice chat")
                      return { locator: e, memoryPreferencesToInitialize: null }
                    })(e.locator, t),
                ),
          )
        )
      let r = await o.F6.trackOperation(
        t.startupAnalytics,
        a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_CREATE,
        () =>
          (async function (e, t) {
            let {
                activeCollaborationMode: i,
                agentMode: r,
                currentLocalExecutionCwd: n,
                existingThreadVoiceEnabled: l,
                memoryPreferences: c,
                permissionProfileId: u,
                projectId: v,
                pageCompanion: y,
                newThreadBaseInstructions: w,
                newThreadDeveloperInstructions: A,
                realtimeVoiceDynamicTools: j,
                realtimeVoiceToolsDeveloperInstructions: E,
                serviceTier: _,
                shouldSendPermissionOverrides: S,
                workspaceRootsForLocalExecution: C,
              } = t,
              N = null == v && (0, h.wW)(C),
              R = await o.F6.trackOperation(
                t.startupAnalytics,
                a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_WORKSPACE_SELECTION,
                () =>
                  null != v
                    ? (0, f.p)({ hostId: e, projectId: v, prompt: "", workspaceRoots: C })
                    : (0, h.fO)(C, { directoryName: "realtime-voice-chat" }),
              ),
              T = R.workspaceRoots,
              V = R.cwd ?? n,
              { config: I } = await o.F6.trackOperation(
                t.startupAnalytics,
                a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_CONFIG_READ,
                () =>
                  (0, d.V)(t.scope, e).sendRequest(
                    "config/read",
                    { includeLayers: !1, cwd: V },
                    { priority: "critical" },
                  ),
              ),
              k = c ?? (0, g.Y)(I),
              O = S ? (0, s.$5i)(r, T, (0, m.Y$)(I), u) : null,
              M = l ? A : [A, E].filter((e) => null != e).join("\n\n"),
              L = null != y ? "user" : "voice_chat"
            null != y && t.scope.get(x.spaceAccountId$) !== y.accountId && AbortSignal.abort().throwIfAborted()
            let P = await o.F6.trackOperation(
              t.startupAnalytics,
              a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_START,
              () =>
                (0, p.g)(t.scope, e, {
                  input: [],
                  cwd: V,
                  workspaceRoots: T,
                  projectAssignment: null == v ? void 0 : R.projectAssignment,
                  collaborationMode: i,
                  serviceTier: _,
                  ...(null == O
                    ? { useAppServerPermissionDefault: !0 }
                    : { permissionsConfig: O, approvalsReviewer: O.approvalsReviewer }),
                  threadSource: l ? L : b.S,
                  memoryPreferences: c,
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
              let e = (0, p.c)(t.scope, P)
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
              initializationError: (0, p.c)(t.scope, P)?.message,
              memoryPreferencesToInitialize: k,
            }
          })(e.hostId, t),
      )
      if ((t.startupAnalytics?.connectionSetup.setIsNewConversation(!0), null != r.initializationError)) {
        let e = Error(r.initializationError)
        throw (
          t.startupAnalytics?.recordErrorOperation(
            e,
            a.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_INITIALIZE,
          ),
          e
        )
      }
      try {
        let e = await i(r)
        if ("active" === e)
          (0, d.V)(t.scope, r.locator.hostId)
            .setThreadTitle(r.locator.conversationId, t.pageCompanion?.title ?? s.fH5)
            .catch((e) => {
              n.v.warning("Failed to set realtime conversation title", { safe: {}, sensitive: { error: e } })
            })
        else await j(r, t)
        return e
      } catch (e) {
        throw (j(r, t), e)
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
//# sourceMappingURL=679632.037e0f1624.js.map
