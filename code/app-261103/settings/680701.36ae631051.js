export const __rspack_esm_ids = [680701]
export const __webpack_modules__ = {
  GK7D(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57")
    a.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            a,
            r,
            l,
            o,
            d,
            c,
            u,
            g,
            m,
            p = (0, s.c)(30),
            { actions: f, asset: h, subtitle: y, subtitleClassName: x, title: v, variant: b } = e,
            w = void 0 === b ? "default" : b
          p[0] !== h
            ? ((t = null == h ? null : (0, n.jsx)("div", { className: "flex", children: h })), (p[0] = h), (p[1] = t))
            : (t = p[1])
          let j = "page" === w ? "flex-nowrap" : "flex-wrap"
          p[2] !== j
            ? ((a = (0, i.A)("flex min-w-0 items-start justify-between gap-4", j)), (p[2] = j), (p[3] = a))
            : (a = p[3])
          let A = "settingsCompact" === w ? "gap-1.25" : "gap-1.5"
          p[4] !== A ? ((r = (0, i.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (p[4] = A), (p[5] = r)) : (r = p[5])
          let k = "settings" === w && "heading-lg font-normal",
            C = "settingsCompact" === w && "heading-lg font-semibold leading-7",
            _ = "page" === w && "heading-lg electron:heading-xl",
            S = "default" === w && "heading-base electron:heading-lg"
          return (
            p[6] !== S || p[7] !== k || p[8] !== C || p[9] !== _
              ? ((l = (0, i.A)("min-w-0 break-words text-default", k, C, _, S)),
                (p[6] = S),
                (p[7] = k),
                (p[8] = C),
                (p[9] = _),
                (p[10] = l))
              : (l = p[10]),
            p[11] !== l || p[12] !== v
              ? ((o = (0, n.jsx)("h1", { className: l, children: v })), (p[11] = l), (p[12] = v), (p[13] = o))
              : (o = p[13]),
            p[14] !== y || p[15] !== x
              ? ((d =
                  null == y
                    ? null
                    : (0, n.jsx)("div", { className: (0, i.A)("text-base text-secondary", x), children: y })),
                (p[14] = y),
                (p[15] = x),
                (p[16] = d))
              : (d = p[16]),
            p[17] !== o || p[18] !== d || p[19] !== r
              ? ((c = (0, n.jsxs)("div", { className: r, children: [o, d] })),
                (p[17] = o),
                (p[18] = d),
                (p[19] = r),
                (p[20] = c))
              : (c = p[20]),
            p[21] !== f
              ? ((u =
                  null == f
                    ? null
                    : (0, n.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: f })),
                (p[21] = f),
                (p[22] = u))
              : (u = p[22]),
            p[23] !== c || p[24] !== u || p[25] !== a
              ? ((g = (0, n.jsxs)("div", { className: a, children: [c, u] })),
                (p[23] = c),
                (p[24] = u),
                (p[25] = a),
                (p[26] = g))
              : (g = p[26]),
            p[27] !== g || p[28] !== t
              ? ((m = (0, n.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, g],
                })),
                (p[27] = g),
                (p[28] = t),
                (p[29] = m))
              : (m = p[29]),
            m
          )
        },
      },
    )
  },
  J3WM(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("zTeN"),
      r = a("oyxz"),
      l = a("ygO2"),
      o = a("zOE4"),
      d = a("B81s"),
      c = a("OWtl"),
      u = a("X5YM")
    a.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            a = (0, s.c)(4),
            { hostId: g } = e,
            m = (0, i.gh)(c.u),
            p = (0, i._U)(u.Q, g)
          return (
            a[0] !== g || a[1] !== p.status || a[2] !== m
              ? ((t = (0, n.jsx)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description select-none",
                  children:
                    "loading" === p.status
                      ? (0, n.jsx)(o.LoadingPage, { variant: "blossom" })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)("div", {
                              role: "alert",
                              children: [
                                "unsupported" === p.status
                                  ? (0, n.jsx)(r.A, {
                                      id: "electron.loginMethods.unsupported",
                                      defaultMessage:
                                        "Update Codex on this machine to read its managed sign-in requirements",
                                      description:
                                        "An older app-server cannot expose configured managed login restrictions, so sign-in options are hidden",
                                    })
                                  : null,
                                "ready" === p.status
                                  ? (0, n.jsx)(r.A, {
                                      id: "electron.loginMethods.noneAllowed",
                                      defaultMessage: "Your administrator has disabled all available sign-in methods",
                                      description: "No Desktop login method is permitted by managed requirements",
                                    })
                                  : null,
                                "error" === p.status
                                  ? (0, n.jsx)(r.A, {
                                      id: "electron.loginMethods.error",
                                      defaultMessage: "Unable to load sign-in requirements",
                                      description:
                                        "Managed sign-in requirements could not be read; sign-in options remain hidden until retry succeeds",
                                    })
                                  : null,
                              ],
                            }),
                            (0, n.jsx)(l.$, {
                              color: "secondary",
                              onClick: () => {
                                ;(m.get(d.b9, { hostId: g }).refetch(), m.get(d.I2, g).refetch())
                              },
                              children: (0, n.jsx)(r.A, {
                                id: "electron.loginMethods.retry",
                                defaultMessage: "Retry",
                                description: "Retry reading managed sign-in requirements",
                              }),
                            }),
                          ],
                        }),
                })),
                (a[0] = g),
                (a[1] = p.status),
                (a[2] = m),
                (a[3] = t))
              : (t = a[3]),
            t
          )
        },
      },
    )
  },
  K1N8(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("zd8w"),
      r = a("Wf1j"),
      l = a("oyxz"),
      o = a("ygO2"),
      d = a("zLIa")
    a.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            a,
            c,
            u = (0, s.c)(42),
            {
              allowApiKey: g,
              allowChatGpt: m,
              apiKeyHelp: p,
              apiKeyValue: f,
              isApiKeyEntryVisible: h,
              isApiKeySignInPending: y,
              isChatGptSignInPending: x,
              onApiKeySecondaryAction: v,
              onApiKeySubmit: b,
              onApiKeyValueChange: w,
              onChatGptSignIn: j,
              onShowApiKeyEntry: A,
              apiKeySecondaryActionLabel: k,
            } = e,
            C = (0, r.A)(),
            _ = (0, i.useId)()
          if (g && h) {
            let e, t, a, s, i, r, c, g, m, h, x
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "electron.onboarding.login.apikey.label",
                  defaultMessage: "OpenAI API key",
                  description: "Label for API key input on desktop onboarding",
                })),
                (u[0] = e))
              : (e = u[0])
            let j = null != p ? _ : void 0
            return (
              u[1] !== C
                ? ((t = C.formatMessage({
                    id: "electron.onboarding.login.apikey.placeholder",
                    defaultMessage: "sk-…",
                    description: "Placeholder for API key input on desktop onboarding",
                  })),
                  (u[1] = C),
                  (u[2] = t))
                : (t = u[2]),
              u[3] !== w ? ((a = (e) => w(e.target.value)), (u[3] = w), (u[4] = a)) : (a = u[4]),
              u[5] !== f || u[6] !== j || u[7] !== t || u[8] !== a
                ? ((s = (0, n.jsxs)("label", {
                    className: "flex flex-col gap-2 text-base font-medium text-default",
                    children: [
                      e,
                      (0, n.jsx)(d.pd, { "aria-describedby": j, autoFocus: !0, placeholder: t, value: f, onChange: a }),
                    ],
                  })),
                  (u[5] = f),
                  (u[6] = j),
                  (u[7] = t),
                  (u[8] = a),
                  (u[9] = s))
                : (s = u[9]),
              u[10] !== p || u[11] !== _
                ? ((i = null != p ? (0, n.jsx)("div", { id: _, children: p }) : null),
                  (u[10] = p),
                  (u[11] = _),
                  (u[12] = i))
                : (i = u[12]),
              u[13] !== k || u[14] !== v
                ? ((r = (0, n.jsx)(o.$, {
                    className: "flex-1 justify-center",
                    color: "secondary",
                    size: "large",
                    onClick: v,
                    children: k,
                  })),
                  (u[13] = k),
                  (u[14] = v),
                  (u[15] = r))
                : (r = u[15]),
              u[16] !== f || u[17] !== y
                ? ((c = 0 === f.trim().length || y), (u[16] = f), (u[17] = y), (u[18] = c))
                : (c = u[18]),
              u[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((g = (0, n.jsx)(l.A, {
                    id: "electron.onboarding.login.apikey.continue",
                    defaultMessage: "Continue",
                    description: "Continue button label for API key sign-in on desktop onboarding",
                  })),
                  (u[19] = g))
                : (g = u[19]),
              u[20] !== y || u[21] !== b || u[22] !== c
                ? ((m = (0, n.jsx)(o.$, {
                    className: "flex-1 justify-center",
                    onClick: b,
                    disabled: c,
                    loading: y,
                    size: "large",
                    children: g,
                  })),
                  (u[20] = y),
                  (u[21] = b),
                  (u[22] = c),
                  (u[23] = m))
                : (m = u[23]),
              u[24] !== m || u[25] !== r
                ? ((h = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [r, m] })),
                  (u[24] = m),
                  (u[25] = r),
                  (u[26] = h))
                : (h = u[26]),
              u[27] !== h || u[28] !== s || u[29] !== i
                ? ((x = (0, n.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [s, i, h] })),
                  (u[27] = h),
                  (u[28] = s),
                  (u[29] = i),
                  (u[30] = x))
                : (x = u[30]),
              x
            )
          }
          return (
            u[31] !== m || u[32] !== x || u[33] !== j
              ? ((t = m
                  ? (0, n.jsx)(o.$, {
                      color: "primary",
                      className: "w-full justify-center py-2.5",
                      onClick: j,
                      children: x
                        ? (0, n.jsx)(l.A, {
                            id: "electron.onboarding.login.chatgpt.cancel",
                            defaultMessage: "Cancel sign-in",
                            description:
                              "Cancel button label while ChatGPT sign-in is in progress on desktop onboarding",
                          })
                        : (0, n.jsx)(l.A, {
                            id: "electron.onboarding.login.chatgpt.continue",
                            defaultMessage: "Continue with ChatGPT",
                            description: "Button label to sign in with ChatGPT on desktop onboarding",
                          }),
                    })
                  : null),
                (u[31] = m),
                (u[32] = x),
                (u[33] = j),
                (u[34] = t))
              : (t = u[34]),
            u[35] !== g || u[36] !== x || u[37] !== A
              ? ((a =
                  g && !x
                    ? (0, n.jsx)(o.$, {
                        color: "outline",
                        className: "w-full justify-center py-2.5",
                        onClick: A,
                        children: (0, n.jsx)(l.A, {
                          id: "electron.onboarding.login.apikey.open",
                          defaultMessage: "Enter API key",
                          description: "Button label to open API key entry on desktop onboarding",
                        }),
                      })
                    : null),
                (u[35] = g),
                (u[36] = x),
                (u[37] = A),
                (u[38] = a))
              : (a = u[38]),
            u[39] !== t || u[40] !== a
              ? ((c = (0, n.jsxs)("div", { className: "flex w-full max-w-[200px] flex-col gap-3", children: [t, a] })),
                (u[39] = t),
                (u[40] = a),
                (u[41] = c))
              : (c = u[41]),
            c
          )
        },
      },
    )
  },
  HAL8(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("xv9C"),
      r = a("zTeN"),
      l = a("DBCl"),
      o = a("zd8w"),
      d = a("Wf1j"),
      c = a("oyxz"),
      u = a("GLfw"),
      g = a("ZHMx"),
      m = a("ygO2"),
      p = a("JNtf"),
      f = a("mUDD"),
      h = a("Ot7V"),
      y = a("HOLv"),
      x = a("SGsN"),
      v = a("X5YM"),
      b = a("J3WM"),
      w = a("K1N8"),
      j = a("OWtl"),
      A = a("D1V6"),
      k = a("WFY2")
    function C(e) {
      let t,
        a,
        C,
        _,
        S,
        M,
        N,
        K,
        L,
        z,
        I,
        P,
        R,
        q,
        E,
        B,
        O,
        T,
        V,
        W,
        D,
        $,
        U,
        G,
        F,
        Z,
        H,
        Q,
        Y = (0, s.c)(83),
        { hostId: X, onOpenChange: J, onAuthenticated: ee } = e,
        et = (0, r.gh)(j.u),
        ea = (0, d.A)(),
        en = (0, r._U)(v.Q, X),
        es = "ready" === en.status && en.chatgpt,
        ei = "ready" === en.status && en.api,
        [er, el] = (0, o.useState)(null),
        [eo, ed] = (0, o.useState)(""),
        [ec, eu] = (0, o.useState)(!1),
        [eg, em] = (0, o.useState)(null),
        ep = null != eg,
        ef = null != er
      ;(Y[0] !== er
        ? ((t = () => () => er?.abort()), (a = [er]), (Y[0] = er), (Y[1] = t), (Y[2] = a))
        : ((t = Y[1]), (a = Y[2])),
        (0, o.useEffect)(t, a),
        Y[3] !== eg
          ? ((C = () => () => eg?.abort()), (_ = [eg]), (Y[3] = eg), (Y[4] = C), (Y[5] = _))
          : ((C = Y[4]), (_ = Y[5])),
        (0, o.useEffect)(C, _),
        Y[6] !== er || Y[7] !== es
          ? ((S = () => {
              es || er?.abort()
            }),
            (M = [er, es]),
            (Y[6] = er),
            (Y[7] = es),
            (Y[8] = S),
            (Y[9] = M))
          : ((S = Y[8]), (M = Y[9])),
        (0, o.useEffect)(S, M),
        Y[10] !== ei || Y[11] !== eg
          ? ((N = () => {
              ei || eg?.abort()
            }),
            (K = [ei, eg]),
            (Y[10] = ei),
            (Y[11] = eg),
            (Y[12] = N),
            (Y[13] = K))
          : ((N = Y[12]), (K = Y[13])),
        (0, o.useEffect)(N, K),
        Y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = () => {
              ;(el(null), ed(""), eu(!1), em(null))
            }),
            (Y[14] = L))
          : (L = Y[14]))
      let eh = L
      Y[15] !== er || Y[16] !== eg || Y[17] !== J
        ? ((z = (e) => {
            let { abortPendingLogin: t } = e
            ;(t && (er?.abort(), eg?.abort()), eh(), J(!1))
          }),
          (Y[15] = er),
          (Y[16] = eg),
          (Y[17] = J),
          (Y[18] = z))
        : (z = Y[18])
      let ey = z
      Y[19] !== ea || Y[20] !== et
        ? ((I = (e) => {
            et.get(x.Id).warning(
              ea.formatMessage(
                {
                  id: "settings.remoteConnections.auth.error",
                  defaultMessage: "Sign-in failed: {message}",
                  description: "Toast shown when remote connection authentication fails",
                },
                { message: (0, l.Rt_)(e) },
              ),
            )
          }),
          (Y[19] = ea),
          (Y[20] = et),
          (Y[21] = I))
        : (I = Y[21])
      let ex = I
      Y[22] !== er ||
      Y[23] !== ey ||
      Y[24] !== X ||
      Y[25] !== ef ||
      Y[26] !== en.chatgpt ||
      Y[27] !== en.status ||
      Y[28] !== ee ||
      Y[29] !== et ||
      Y[30] !== ex
        ? ((P = async () => {
            if (ef) {
              ;(er?.abort(), el(null))
              return
            }
            if ("ready" !== en.status || !en.chatgpt) return
            let e = new AbortController()
            ;(el(e),
              await (async () => {
                try {
                  let { authUrl: t, completion: a } = await (0, g.NR)({ scope: et, hostId: X, signal: e.signal })
                  e.signal.aborted ||
                    (0, h.E0)({
                      href: (0, A.Z)({
                        authUrl: t,
                        codexAppVersion: (0, A.y)(et),
                        useDesktopAuth: !1,
                        useStreamlinedLoginUx: !1,
                      }),
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                    })
                  let n = await a
                  if (e.signal.aborted) return
                  if (!n.success) {
                    ;(k.v.warning("[remote-connections/auth] chatgpt_sign_in_failed", {
                      safe: {},
                      sensitive: { hostId: X, error: n.error ?? "Unknown error" },
                    }),
                      ex(n.error ?? "Unknown error"))
                    return
                  }
                  ;(ee?.(X), ey({ abortPendingLogin: !1 }))
                } catch (e) {
                  if (e?.name === "AbortError") return
                  ;(k.v.warning("[remote-connections/auth] chatgpt_sign_in_failed", {
                    safe: {},
                    sensitive: { error: e, hostId: X },
                  }),
                    ex(e))
                }
              })().finally(() => {
                el((t) => (t === e ? null : t))
              }))
          }),
          (Y[22] = er),
          (Y[23] = ey),
          (Y[24] = X),
          (Y[25] = ef),
          (Y[26] = en.chatgpt),
          (Y[27] = en.status),
          (Y[28] = ee),
          (Y[29] = et),
          (Y[30] = ex),
          (Y[31] = P))
        : (P = Y[31])
      let ev = P
      Y[32] !== eo ||
      Y[33] !== ey ||
      Y[34] !== X ||
      Y[35] !== ep ||
      Y[36] !== en.api ||
      Y[37] !== en.status ||
      Y[38] !== ee ||
      Y[39] !== et ||
      Y[40] !== ex
        ? ((R = async () => {
            let e = eo.trim()
            if (!e || ep || "ready" !== en.status || !en.api) return
            let t = new AbortController()
            ;(em(t),
              await (async () => {
                try {
                  if ((await (0, u.ls)(et, X).loginWithApiKey(e), t.signal.aborted)) return
                  ;(ee?.(X), ey({ abortPendingLogin: !1 }))
                } catch (e) {
                  if (t.signal.aborted) return
                  ;(k.v.warning("[remote-connections/auth] api_key_sign_in_failed", {
                    safe: {},
                    sensitive: { error: e, hostId: X },
                  }),
                    ex(e))
                }
              })().finally(() => {
                em((e) => (e === t ? null : e))
              }))
          }),
          (Y[32] = eo),
          (Y[33] = ey),
          (Y[34] = X),
          (Y[35] = ep),
          (Y[36] = en.api),
          (Y[37] = en.status),
          (Y[38] = ee),
          (Y[39] = et),
          (Y[40] = ex),
          (Y[41] = R))
        : (R = Y[41])
      let eb = R
      return (
        Y[42] !== ey || Y[43] !== J
          ? ((q = (e) => {
              e ? J(!0) : ey({ abortPendingLogin: !0 })
            }),
            (Y[42] = ey),
            (Y[43] = J),
            (Y[44] = q))
          : (q = Y[44]),
        Y[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = { "aria-describedby": void 0 }), (Y[45] = E))
          : (E = Y[45]),
        Y[46] !== ea
          ? ((B = ea.formatMessage({
              id: "settings.remoteConnections.auth.title",
              defaultMessage: "Login required",
              description: "Title for the remote connection login dialog",
            })),
            (Y[46] = ea),
            (Y[47] = B))
          : (B = Y[47]),
        Y[48] !== B
          ? ((O = (0, n.jsx)(p.L3, { className: "sr-only", children: B })), (Y[48] = B), (Y[49] = O))
          : (O = Y[49]),
        Y[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(f.c7, {
              className: "min-w-0 flex-1",
              title: (0, n.jsx)(c.A, {
                id: "settings.remoteConnections.auth.title",
                defaultMessage: "Login required",
                description: "Title for the remote connection login dialog",
              }),
              subtitle: (0, n.jsx)(c.A, {
                id: "settings.remoteConnections.auth.description",
                defaultMessage: "Authenticate the Codex CLI on this remote machine to continue",
                description: "Description for the remote connection login dialog",
              }),
            })),
            (Y[50] = T))
          : (T = Y[50]),
        Y[51] !== ea
          ? ((V = ea.formatMessage({
              id: "settings.remoteConnections.auth.closeIcon",
              defaultMessage: "Close",
              description: "Accessible label for the remote connection login dialog close button",
            })),
            (Y[51] = ea),
            (Y[52] = V))
          : (V = Y[52]),
        Y[53] !== ey ? ((W = () => ey({ abortPendingLogin: !0 })), (Y[53] = ey), (Y[54] = W)) : (W = Y[54]),
        Y[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, n.jsx)(y.I, { "aria-hidden": !1, asset: i.Q })), (Y[55] = D))
          : (D = Y[55]),
        Y[56] !== V || Y[57] !== W
          ? (($ = (0, n.jsx)(f.OO, {
              children: (0, n.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  T,
                  (0, n.jsx)(m.$, {
                    "aria-label": V,
                    className: "-me-1 -mt-1 shrink-0",
                    color: "ghost",
                    size: "icon",
                    onClick: W,
                    children: D,
                  }),
                ],
              }),
            })),
            (Y[56] = V),
            (Y[57] = W),
            (Y[58] = $))
          : ($ = Y[58]),
        Y[59] !== eo ||
        Y[60] !== eb ||
        Y[61] !== ev ||
        Y[62] !== X ||
        Y[63] !== ec ||
        Y[64] !== ep ||
        Y[65] !== ef ||
        Y[66] !== en.api ||
        Y[67] !== en.chatgpt ||
        Y[68] !== en.status
          ? ((U = (0, n.jsx)(f.OO, {
              children: (0, n.jsx)("div", {
                className: "flex justify-center pt-2",
                children:
                  "ready" === en.status && (en.api || en.chatgpt)
                    ? (0, n.jsx)(w.c, {
                        allowApiKey: en.api,
                        allowChatGpt: en.chatgpt,
                        apiKeyValue: eo,
                        isApiKeyEntryVisible: ec,
                        isApiKeySignInPending: ep,
                        isChatGptSignInPending: ef,
                        onApiKeySecondaryAction: () => {
                          ;(ed(""), eu(!1))
                        },
                        onApiKeySubmit: eb,
                        onApiKeyValueChange: ed,
                        onChatGptSignIn: ev,
                        onShowApiKeyEntry: () => eu(!0),
                        apiKeySecondaryActionLabel: (0, n.jsx)(c.A, {
                          id: "settings.remoteConnections.auth.back",
                          defaultMessage: "Back",
                          description: "Back button in the remote connection login dialog",
                        }),
                      })
                    : (0, n.jsx)(b.G, { hostId: X }),
              }),
            })),
            (Y[59] = eo),
            (Y[60] = eb),
            (Y[61] = ev),
            (Y[62] = X),
            (Y[63] = ec),
            (Y[64] = ep),
            (Y[65] = ef),
            (Y[66] = en.api),
            (Y[67] = en.chatgpt),
            (Y[68] = en.status),
            (Y[69] = U))
          : (U = Y[69]),
        Y[70] !== ey ? ((G = () => ey({ abortPendingLogin: !0 })), (Y[70] = ey), (Y[71] = G)) : (G = Y[71]),
        Y[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, n.jsx)(c.A, {
              id: "settings.remoteConnections.auth.close",
              defaultMessage: "Close",
              description: "Close button for the remote connection login dialog",
            })),
            (Y[72] = F))
          : (F = Y[72]),
        Y[73] !== G
          ? ((Z = (0, n.jsx)(f.OO, {
              children: (0, n.jsx)(f.Es, {
                children: (0, n.jsx)(m.$, { color: "ghost", type: "button", onClick: G, children: F }),
              }),
            })),
            (Y[73] = G),
            (Y[74] = Z))
          : (Z = Y[74]),
        Y[75] !== O || Y[76] !== $ || Y[77] !== U || Y[78] !== Z
          ? ((H = (0, n.jsxs)(f.R4, { children: [O, $, U, Z] })),
            (Y[75] = O),
            (Y[76] = $),
            (Y[77] = U),
            (Y[78] = Z),
            (Y[79] = H))
          : (H = Y[79]),
        Y[80] !== q || Y[81] !== H
          ? ((Q = (0, n.jsx)(p.lG, {
              open: !0,
              onOpenChange: q,
              contentProps: E,
              showDialogClose: !1,
              size: "compact",
              children: H,
            })),
            (Y[80] = q),
            (Y[81] = H),
            (Y[82] = Q))
          : (Q = Y[82]),
        Q
      )
    }
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            a = (0, s.c)(5),
            { hostId: i, open: r, onOpenChange: l, onAuthenticated: o } = e
          if (!r || null == i) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (a[0] = e))
                : (e = a[0]),
              e
            )
          }
          return (
            a[1] !== i || a[2] !== o || a[3] !== l
              ? ((t = (0, n.jsx)(C, { hostId: i, onOpenChange: l, onAuthenticated: o }, i)),
                (a[1] = i),
                (a[2] = o),
                (a[3] = l),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  Buxm(e, t, a) {
    a.d(t, { GatewaysSettings: () => eE })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("irkb"),
      r = a("zTeN"),
      l = a("Ehlj"),
      o = a("mdqK"),
      d = a("zd8w"),
      c = a("oyxz"),
      u = a("HZfM"),
      g = a("CfsC"),
      m = a("sLlu"),
      p = a("HAL8"),
      f = a("OWtl"),
      h = a("fnPc"),
      y = a("kfGJ"),
      x = a("HlCq"),
      v = a("slpy"),
      b = a("nkTT")
    let w = (0, b.a)({
      name: "arrow-left-arrow-right-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 5.63623, y: 3.18457, width: 20.727783, height: 25.799316 },
        visualBounds: { x: 5.63623, y: 3.18457, width: 20.727783, height: 25.799316 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.63623, y: 3.18457, width: 20.727783, height: 25.799316 },
        center: { x: 16.000121, y: 16.084228 },
        insets: { top: 3.18457, right: 5.635987, bottom: 3.016114, left: 5.63623 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 16.000121, y: 16.084228 },
          foreground: { x: 16.000121, y: 16.084228 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.6603 16.7879C20.0079 16.433 20.5776 16.427 20.9328 16.7743L25.8937 21.6307L26.004 21.7508C26.4841 22.3288 26.484 23.1718 26.004 23.7498L25.8937 23.87L20.9328 28.7264C20.5776 29.0742 20.0081 29.0688 19.6603 28.7137C19.313 28.3586 19.3191 27.7889 19.674 27.4412L23.5441 23.6512H7.41714C6.92013 23.6512 6.51682 23.2478 6.51674 22.7508C6.51674 22.2538 6.92008 21.8504 7.41714 21.8504H23.5441L19.674 18.0604C19.3193 17.7127 19.313 17.143 19.6603 16.7879Z" fill="currentColor"/> <path d="M11.0675 3.44124C11.4227 3.09375 11.9923 3.09986 12.34 3.45492C12.6871 3.81006 12.6812 4.37979 12.3263 4.72738L8.4562 8.51742H24.7501C25.2472 8.51742 25.6505 8.92075 25.6505 9.41781C25.6505 9.9148 25.2472 10.3182 24.7501 10.3182H8.4562L12.3263 14.1082C12.681 14.456 12.6875 15.0257 12.34 15.3807C11.9923 15.7358 11.4227 15.7409 11.0675 15.3934L6.10659 10.5369L5.99624 10.4168C5.51625 9.83879 5.51621 8.99582 5.99624 8.41781L6.10659 8.29769L11.0675 3.44124Z" fill="currentColor"/>',
    })
    var j = a("ygO2"),
      A = a("JNtf"),
      k = a("mUDD"),
      C = a("bqtn"),
      _ = a("HOLv"),
      S = a("GO7r"),
      M = a("zLIa"),
      N = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 50,
          height: 30,
          viewBox: "0 0 50 30",
          ...e,
          children: [
            (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z",
            }),
            (0, n.jsx)("path", {
              fill: "#FF9900",
              fillRule: "evenodd",
              d: "M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z",
            }),
            (0, n.jsx)("path", {
              fill: "#FF9900",
              fillRule: "evenodd",
              d: "M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z",
            }),
          ],
        }),
      K = a("AWNZ"),
      L = a("ZEx5"),
      z = a("Wf1j"),
      I = a("ZZgR"),
      P = a("QyE3")
    function R(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        u,
        g,
        m,
        p,
        f,
        h,
        y,
        x,
        v,
        b,
        w,
        j,
        A = (0, s.c)(53),
        { value: k, profiles: C, disabled: _, portalContainer: M, onChange: N } = e,
        K = (0, d.useId)(),
        L = (0, z.A)(),
        [R, E] = (0, d.useState)(!1),
        [B, O] = (0, d.useState)("")
      A[0] !== C || A[1] !== B || A[2] !== k
        ? ((a = Array.from(new Set([...C.map(q), k].filter(Boolean)))),
          (t = B.trim()),
          (i = a.filter((e) => e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))),
          (A[0] = C),
          (A[1] = B),
          (A[2] = k),
          (A[3] = t),
          (A[4] = a),
          (A[5] = i))
        : ((t = A[3]), (a = A[4]), (i = A[5]))
      let T = i
      A[6] !== N
        ? ((r = (e) => {
            ;(N(e), E(!1), O(""))
          }),
          (A[6] = N),
          (A[7] = r))
        : (r = A[7])
      let V = r
      A[8] !== L
        ? ((l = L.formatMessage({
            id: "settings.gateways.profile.search",
            defaultMessage: "Search profiles",
            description:
              "Accessible label and placeholder for searching AWS profiles or entering a custom profile name",
          })),
          (A[8] = L),
          (A[9] = l))
        : (l = A[9])
      let W = l,
        D = `${K}-label`
      ;(A[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, n.jsx)(c.A, {
            id: "settings.gateways.profile.label",
            defaultMessage: "Profile name",
            description: "AWS profile name field that also permits manual entry",
          })),
          (A[10] = o))
        : (o = A[10]),
        A[11] !== K || A[12] !== D
          ? ((u = (0, n.jsx)("label", { id: D, htmlFor: K, className: "select-none", children: o })),
            (A[11] = K),
            (A[12] = D),
            (A[13] = u))
          : (u = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e) => {
              ;(E(e), e || O(""))
            }),
            (A[14] = g))
          : (g = A[14]))
      let $ = `${K}-label ${K}-value`,
        U = `${K}-value`
      return (
        A[15] !== k
          ? ((m =
              k ||
              (0, n.jsx)(c.A, {
                id: "settings.gateways.profile.placeholder",
                defaultMessage: "Select a profile",
                description: "Placeholder when no AWS profile has been selected",
              })),
            (A[15] = k),
            (A[16] = m))
          : (m = A[16]),
        A[17] !== m || A[18] !== U
          ? ((p = (0, n.jsx)("span", { id: U, className: "min-w-0 text-start break-all", children: m })),
            (A[17] = m),
            (A[18] = U),
            (A[19] = p))
          : (p = A[19]),
        A[20] !== _ || A[21] !== K || A[22] !== p || A[23] !== $
          ? ((f = (0, n.jsx)(P.vg, {
              id: K,
              className: "w-full",
              type: "button",
              size: "formField",
              disabled: _,
              "aria-labelledby": $,
              children: p,
            })),
            (A[20] = _),
            (A[21] = K),
            (A[22] = p),
            (A[23] = $),
            (A[24] = f))
          : (f = A[24]),
        A[25] !== B || A[26] !== W
          ? ((h = (0, n.jsx)(I.G.Input, {
              presentation: "form",
              value: B,
              onValueChange: O,
              placeholder: W,
              "aria-label": W,
            })),
            (A[25] = B),
            (A[26] = W),
            (A[27] = h))
          : (h = A[27]),
        A[28] !== T || A[29] !== V || A[30] !== k
          ? ((y = T.map((e) =>
              (0, n.jsx)(
                I.G.Item,
                {
                  value: e,
                  onSelect: () => V(e),
                  rightIcon: e === k ? (0, n.jsx)(S.ALZ, {}) : void 0,
                  tooltipText: e,
                  tooltipOpenWhen: "trigger-overflows",
                  children: e,
                },
                e,
              ),
            )),
            (A[28] = T),
            (A[29] = V),
            (A[30] = k),
            (A[31] = y))
          : (y = A[31]),
        A[32] !== t || A[33] !== a || A[34] !== V
          ? ((x =
              t && !a.includes(t)
                ? (0, n.jsx)(I.G.Item, {
                    value: t,
                    onSelect: () => V(t),
                    children: (0, n.jsx)(c.A, {
                      id: "settings.gateways.profile.useName",
                      defaultMessage: "Use “{name}”",
                      description: "Option to use the typed AWS profile name; this does not create an AWS profile",
                      values: { name: t },
                    }),
                  })
                : null),
            (A[32] = t),
            (A[33] = a),
            (A[34] = V),
            (A[35] = x))
          : (x = A[35]),
        A[36] !== y || A[37] !== x
          ? ((v = (0, n.jsxs)(I.G.List, { children: [y, x] })), (A[36] = y), (A[37] = x), (A[38] = v))
          : (v = A[38]),
        A[39] !== W || A[40] !== h || A[41] !== v || A[42] !== k
          ? ((b = (0, n.jsxs)(I.G.Root, { label: W, defaultValue: k, children: [h, v] })),
            (A[39] = W),
            (A[40] = h),
            (A[41] = v),
            (A[42] = k),
            (A[43] = b))
          : (b = A[43]),
        A[44] !== _ || A[45] !== R || A[46] !== M || A[47] !== f || A[48] !== b
          ? ((w = (0, n.jsx)(I.A, {
              open: R,
              onOpenChange: g,
              disabled: _,
              modal: !0,
              presentation: "form",
              contentClassName: "w-[var(--radix-popover-trigger-width)]",
              portalContainer: M,
              triggerButton: f,
              children: b,
            })),
            (A[44] = _),
            (A[45] = R),
            (A[46] = M),
            (A[47] = f),
            (A[48] = b),
            (A[49] = w))
          : (w = A[49]),
        A[50] !== w || A[51] !== u
          ? ((j = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-2 text-sm", children: [u, w] })),
            (A[50] = w),
            (A[51] = u),
            (A[52] = j))
          : (j = A[52]),
        j
      )
    }
    function q(e) {
      let { name: t } = e
      return t
    }
    var E = a("ASxG")
    let B = E.record(E.string(), E.json()),
      O = new Set(["openai", "ollama", "lmstudio", "amazon-bedrock", "amazon-bedrock-runtime"])
    function T(e) {
      let t = B.safeParse(e)
      return t.success ? t.data : {}
    }
    function V(e, t, a) {
      let n = T(e.config.model_providers),
        s = T(t?.modelProviders),
        i = new Set([...Object.keys(n), ...Object.keys(s)]),
        r = t?.modelProvider ?? e.config.model_provider
      return (
        ("amazon-bedrock" === r || "amazon-bedrock-runtime" === r) && i.add(r),
        [...i]
          .filter((e) => !O.has(e) || e.startsWith("amazon-bedrock"))
          .map((t) => {
            let i,
              r = "amazon-bedrock" === t || "amazon-bedrock-runtime" === t ? t : "custom",
              l = { ...T(n[t]), ...T(s[t]) },
              d = T(l.aws)
            ;("bedrockApiKey" === a && (i = "apiKey"), "bedrockAccessKeys" === a && (i = "accessKeys"))
            let c = (0, o.yI)(e.origins, `model_providers.${t}`)
            return {
              id: t,
              type: r,
              config: l,
              name:
                "custom" === r
                  ? D(l.name) || t
                  : "amazon-bedrock" === r
                    ? "Amazon Bedrock Mantle"
                    : "Amazon Bedrock Runtime",
              savedAuth: i,
              managed: null != s[t] || (null != c && (0, o.IH)(c.name)),
              external:
                [
                  l.auth,
                  l.gateway_oauth,
                  l.http_headers,
                  l.env_http_headers,
                  l.experimental_bearer_token,
                  d.credential_export,
                  d.auth_refresh,
                ].some((e) => null != e) ||
                ("custom" === r && null != l.aws) ||
                !0 === l.requires_openai_auth ||
                (null != l.wire_api && "responses" !== l.wire_api) ||
                ("custom" !== r && null != l.base_url),
            }
          })
      )
    }
    function W(e) {
      let t = e?.config ?? {},
        a = T(t.aws),
        n = e ? "none" : "envKey"
      return (
        t.env_key && (n = "envKey"),
        null != e && "custom" !== e.type && ((n = e.savedAuth ? "saved" : "environment"), a.profile && (n = "profile")),
        e?.external && (n = "external"),
        {
          type: e?.type ?? "custom",
          name: e?.name ?? "",
          baseUrl: D(t.base_url),
          auth: n,
          envKey: D(t.env_key),
          region: D(a.region),
          profile: D(a.profile),
          apiKey: "",
          accessKeyId: "",
          secretAccessKey: "",
          sessionToken: "",
        }
      )
    }
    function D(e) {
      return "string" == typeof e ? e : ""
    }
    function $(e) {
      if ("external" === e.auth) return ["external"]
      let t = []
      if ("custom" !== e.type)
        return (
          e.region.trim()
            ? /^[a-z]{2}(?:-[a-z]+)+-\d+$/.test(e.region.trim()) || t.push("regionInvalid")
            : t.push("regionRequired"),
          "profile" !== e.auth || e.profile.trim() || t.push("profileRequired"),
          "apiKey" !== e.auth || e.apiKey.trim() || t.push("apiKeyRequired"),
          "accessKeys" === e.auth &&
            (e.accessKeyId.trim() || t.push("accessKeyRequired"),
            e.secretAccessKey.trim() || t.push("secretKeyRequired")),
          t
        )
      if ((e.name.trim() || t.push("nameRequired"), e.baseUrl.trim()))
        try {
          let a = new URL(e.baseUrl.trim())
          ;(["http:", "https:"].includes(a.protocol) || t.push("urlScheme"),
            (a.username || a.password) && t.push("urlCredentials"),
            a.hash && t.push("urlFragment"))
        } catch {
          t.push("urlInvalid")
        }
      else t.push("urlRequired")
      return (
        "envKey" === e.auth &&
          (e.envKey.trim()
            ? /^[A-Za-z_][A-Za-z0-9_]*$/.test(F(e.envKey)) || t.push("envInvalid")
            : t.push("envRequired")),
        t
      )
    }
    function U(e, t) {
      return Object.entries(
        "custom" === t.type
          ? {
              name: t.name.trim(),
              base_url: t.baseUrl.trim(),
              wire_api: "responses",
              env_key: "envKey" === t.auth ? F(t.envKey) : null,
            }
          : { "aws.region": t.region.trim(), "aws.profile": "profile" === t.auth ? t.profile.trim() : null },
      ).map(([t, a]) => ({ keyPath: `${G(e)}.${t}`, value: a, mergeStrategy: "replace" }))
    }
    function G(e) {
      return `model_providers.${JSON.stringify(e)}`
    }
    function F(e) {
      let t = e.trim(),
        a = /^\$(?:\{([A-Za-z_][A-Za-z0-9_]*)\}|([A-Za-z_][A-Za-z0-9_]*))$/u.exec(t)
      return a?.[1] ?? a?.[2] ?? t
    }
    let Z = (0, a("Qgfj").YK)({
      external: {
        id: "settings.gateways.validation.external",
        defaultMessage: "Edit this provider in its configuration file.",
        description: "Explains that externally configured provider authentication cannot be saved in this form",
      },
      nameRequired: {
        id: "settings.gateways.validation.nameRequired",
        defaultMessage: "Enter a name.",
        description: "Validation instruction for a missing provider or gateway name",
      },
      urlRequired: {
        id: "settings.gateways.validation.urlRequired",
        defaultMessage: "Enter a base URL.",
        description: "Validation instruction for a missing provider endpoint",
      },
      urlInvalid: {
        id: "settings.gateways.validation.urlInvalid",
        defaultMessage: "Enter a valid base URL, such as https://example.com/v1.",
        description: "Validation instruction for a malformed provider endpoint",
      },
      urlScheme: {
        id: "settings.gateways.validation.urlScheme",
        defaultMessage: "Start the base URL with http:// or https://.",
        description: "Validation instruction for an unsupported endpoint URL scheme",
      },
      urlCredentials: {
        id: "settings.gateways.validation.urlCredentials",
        defaultMessage: "Remove the username and password from the base URL.",
        description: "Validation instruction when the endpoint URL contains embedded credentials",
      },
      urlFragment: {
        id: "settings.gateways.validation.urlFragment",
        defaultMessage: "Remove the fragment (the # and anything after it) from the base URL.",
        description: "Validation instruction when the endpoint URL contains a fragment",
      },
      envRequired: {
        id: "settings.gateways.validation.envRequired",
        defaultMessage: "Enter the API key environment variable.",
        description: "Validation instruction for a missing API key environment variable name",
      },
      envInvalid: {
        id: "settings.gateways.validation.envInvalid",
        defaultMessage:
          "Use letters, numbers, and underscores for the environment variable name. Start with a letter or underscore.",
        description: "Explains the accepted environment variable name syntax after normalizing reference notation",
      },
      regionRequired: {
        id: "settings.gateways.validation.regionRequired",
        defaultMessage: "Enter an AWS region.",
        description: "Validation instruction for a missing Bedrock region",
      },
      regionInvalid: {
        id: "settings.gateways.validation.regionInvalid",
        defaultMessage: "Enter a valid AWS region, such as us-east-1.",
        description: "Validation instruction for a malformed Bedrock region",
      },
      profileRequired: {
        id: "settings.gateways.validation.profileRequired",
        defaultMessage: "Choose or enter an AWS profile.",
        description: "Validation instruction for missing profile authentication",
      },
      apiKeyRequired: {
        id: "settings.gateways.validation.apiKeyRequired",
        defaultMessage: "Enter a Bedrock API key.",
        description: "Validation instruction for missing Bedrock API key authentication",
      },
      accessKeyRequired: {
        id: "settings.gateways.validation.accessKeyRequired",
        defaultMessage: "Enter an AWS access key ID.",
        description: "Validation instruction for a missing AWS access key ID",
      },
      secretKeyRequired: {
        id: "settings.gateways.validation.secretKeyRequired",
        defaultMessage: "Enter an AWS secret access key.",
        description: "Validation instruction for a missing AWS secret access key",
      },
    })
    function H(e) {
      let t,
        a,
        i = (0, s.c)(4),
        { issues: r } = e
      return (
        i[0] !== r ? ((t = r.map(Q)), (i[0] = r), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((a = (0, n.jsx)("ul", { className: "list-disc space-y-1 ps-4 text-start", children: t })),
            (i[2] = t),
            (i[3] = a))
          : (a = i[3]),
        a
      )
    }
    function Q(e) {
      return (0, n.jsx)("li", { children: (0, n.jsx)(c.A, { ...Z[e] }) }, e)
    }
    function Y(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        u,
        g,
        m,
        p,
        f,
        h,
        y,
        b,
        w,
        C,
        _,
        S,
        M,
        N,
        z,
        I,
        P,
        q,
        E,
        B,
        O,
        T,
        V,
        D,
        U,
        G,
        F,
        Z = (0, s.c)(141),
        {
          gateway: Q,
          existingTypes: Y,
          discovery: en,
          discoveryFailed: el,
          supportsAwsCredentials: eo,
          supportsAccessKeys: ed,
          busy: ec,
          error: eu,
          onClose: eg,
          onSave: em,
          onDelete: ep,
          isSelected: ef,
          onChange: eh,
        } = e,
        ey = void 0 !== el && el,
        ex = void 0 === eo || eo,
        ev = void 0 === ed || ed,
        eb = void 0 !== ef && ef,
        [ew, ej] = (0, d.useState)(!1),
        [eA, ek] = (0, d.useState)(null)
      Z[0] !== Q ? ((t = () => W(Q)), (Z[0] = Q), (Z[1] = t)) : (t = Z[1])
      let [eC, e_] = (0, d.useState)(t)
      Z[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["profile", "environment", "accessKeys"]), (Z[2] = a))
        : (a = Z[2])
      let eS = a.includes(eC.auth) && (!ex || ("accessKeys" === eC.auth && !ev))
      Z[3] !== eC || Z[4] !== eS
        ? ((i = eS ? { ...eC, auth: "apiKey" } : eC), (Z[3] = eC), (Z[4] = eS), (Z[5] = i))
        : (i = Z[5])
      let eM = i,
        eN = Q?.managed || Q?.external
      Z[6] !== eM ? ((r = $(eM)), (Z[6] = eM), (Z[7] = r)) : (r = Z[7])
      let eK = r,
        eL = !eN && eK.length > 0
      Z[8] !== eM || Z[9] !== eh
        ? ((l = (e) => {
            ;(eh?.(), e_({ ...eM, ...e }))
          }),
          (Z[8] = eM),
          (Z[9] = eh),
          (Z[10] = l))
        : (l = Z[10])
      let ez = l,
        eI = "apiKey" === eM.auth || "accessKeys" === eM.auth,
        eP = null
      if (eb) {
        let e
        ;(Z[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "settings.gateways.remove.selectedHelp",
              defaultMessage: "Choose another default provider first.",
              description: "Explains why the currently selected provider cannot be removed",
            })),
            (Z[11] = e))
          : (e = Z[11]),
          (eP = e))
      }
      if (ew && Q && ep) {
        let e, t, a, s, i, r, l, o
        ;(Z[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e) => {
              e || ej(!1)
            }),
            (Z[12] = e))
          : (e = Z[12]),
          Z[13] !== Q.name
            ? ((t = (0, n.jsx)(k.OO, {
                children: (0, n.jsx)(A.L3, {
                  className: "text-form-title",
                  children: (0, n.jsx)(c.A, {
                    id: "settings.gateways.delete.title",
                    defaultMessage: "Delete {name}?",
                    description: "Confirmation title for deleting a saved provider or gateway",
                    values: { name: Q.name },
                  }),
                }),
              })),
              (Z[13] = Q.name),
              (Z[14] = t))
            : (t = Z[14]),
          Z[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(k.OO, {
                className: "text-codex-description",
                children: (0, n.jsx)(c.A, {
                  id: "settings.gateways.remove.description",
                  defaultMessage: "This removes its configuration from Codex. You can add it again later.",
                  description: "Explains the effect of removing a saved provider or gateway",
                }),
              })),
              (Z[15] = a))
            : (a = Z[15]),
          Z[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(j.$, {
                color: "secondary",
                onClick: () => ej(!1),
                children: (0, n.jsx)(c.A, {
                  id: "settings.gateways.cancel",
                  defaultMessage: "Cancel",
                  description: "Dismiss the gateway form without saving",
                }),
              })),
              (Z[16] = s))
            : (s = Z[16]))
        let d = ec || Q.managed || eb
        return (
          Z[17] !== ep
            ? ((i = () => {
                ;(ej(!1), ep())
              }),
              (Z[17] = ep),
              (Z[18] = i))
            : (i = Z[18]),
          Z[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(c.A, {
                id: "settings.gateways.delete.button",
                defaultMessage: "Delete",
                description: "Delete the saved provider or gateway configuration",
              })),
              (Z[19] = r))
            : (r = Z[19]),
          Z[20] !== d || Z[21] !== i
            ? ((l = (0, n.jsx)(k.OO, {
                children: (0, n.jsxs)(k.Es, {
                  children: [s, (0, n.jsx)(j.$, { color: "danger", disabled: d, onClick: i, children: r })],
                }),
              })),
              (Z[20] = d),
              (Z[21] = i),
              (Z[22] = l))
            : (l = Z[22]),
          Z[23] !== t || Z[24] !== l
            ? ((o = (0, n.jsx)(A.lG, {
                open: !0,
                showDialogClose: !1,
                onOpenChange: e,
                children: (0, n.jsxs)(k.R4, { children: [t, a, l] }),
              })),
              (Z[23] = t),
              (Z[24] = l),
              (Z[25] = o))
            : (o = Z[25]),
          o
        )
      }
      let eR = eA ?? void 0
      ;(Z[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { shouldStopPointerDownPropagation: !1 }), (Z[26] = o))
        : (o = Z[26]),
        Z[27] !== ec || Z[28] !== eg
          ? ((u = (e) => {
              e || ec || eg()
            }),
            (Z[27] = ec),
            (Z[28] = eg),
            (Z[29] = u))
          : (u = Z[29]),
        Z[30] !== ec || Z[31] !== eM || Z[32] !== em || Z[33] !== eN
          ? ((g = (e) => {
              ;(e.preventDefault(), ec || eN || 0 !== $(eM).length || em(eM))
            }),
            (Z[30] = ec),
            (Z[31] = eM),
            (Z[32] = em),
            (Z[33] = eN),
            (Z[34] = g))
          : (g = Z[34]),
        Z[35] !== Q
          ? ((m = (0, n.jsx)(k.OO, {
              children: (0, n.jsx)(A.L3, {
                className: "text-form-title",
                children: Q
                  ? (0, n.jsxs)("span", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(es, { size: "medium", type: Q.type }),
                        "custom" === Q.type
                          ? (0, n.jsx)(c.A, {
                              id: "settings.gateways.edit.namedTitle",
                              defaultMessage: "Edit {name}",
                              description:
                                "Title for editing a saved provider or gateway; name is its saved display name",
                              values: { name: Q.name },
                            })
                          : (0, n.jsx)(c.A, {
                              id: "settings.gateways.edit.bedrockTitle",
                              defaultMessage:
                                "{runtime, select, yes {Edit Bedrock Runtime} other {Edit Bedrock Mantle}}",
                              description: "Title for editing one of the built-in Amazon Bedrock providers",
                              values: { runtime: "amazon-bedrock-runtime" === Q.type ? "yes" : "no" },
                            }),
                      ],
                    })
                  : (0, n.jsx)(c.A, {
                      id: "settings.gateways.add.title",
                      defaultMessage: "Add provider or gateway",
                      description: "Title of the gateway creation dialog in desktop settings",
                    }),
              }),
            })),
            (Z[35] = Q),
            (Z[36] = m))
          : (m = Z[36]))
      let eq = ec || eN
      if (
        (Z[37] !== ec ||
        Z[38] !== en?.environmentCredentials ||
        Z[39] !== en?.profiles ||
        Z[40] !== eM.type ||
        Z[41] !== Y ||
        Z[42] !== Q ||
        Z[43] !== eN ||
        Z[44] !== ez
          ? ((p =
              null == Q
                ? (0, n.jsx)(L.t, {
                    variant: "form",
                    contentOverflow: "visible",
                    children: (0, n.jsx)(K.ic, {
                      label: (0, n.jsx)(c.A, {
                        id: "settings.gateways.modelProvider.label",
                        defaultMessage: "Model provider",
                        description: "Service selection within the model provider connection category",
                      }),
                      control: (0, n.jsx)(X, {
                        value: eM.type,
                        disabled: ec || eN,
                        onChange: (e) =>
                          ez({
                            ...W(),
                            type: e,
                            auth: "custom" === e ? "envKey" : "environment",
                            region: en?.environmentCredentials[0]?.region ?? "",
                            profile: en?.profiles[0]?.name ?? "",
                          }),
                        options: [
                          {
                            value: "amazon-bedrock-runtime",
                            icon: (0, n.jsx)(es, { type: "amazon-bedrock-runtime" }),
                            menuIcon: (0, n.jsx)(es, { size: "medium", type: "amazon-bedrock-runtime" }),
                            label: (0, n.jsx)(ee, { type: "amazon-bedrock-runtime" }),
                            disabled: Y.includes("amazon-bedrock-runtime"),
                            description: (0, n.jsx)(er, { type: "amazon-bedrock-runtime" }),
                            tooltip: Y.includes("amazon-bedrock-runtime") ? (0, n.jsx)(ei, {}) : void 0,
                          },
                          {
                            value: "amazon-bedrock",
                            icon: (0, n.jsx)(es, { type: "amazon-bedrock" }),
                            menuIcon: (0, n.jsx)(es, { size: "medium", type: "amazon-bedrock" }),
                            label: (0, n.jsx)(ee, { type: "amazon-bedrock" }),
                            disabled: Y.includes("amazon-bedrock"),
                            description: (0, n.jsx)(er, { type: "amazon-bedrock" }),
                            tooltip: Y.includes("amazon-bedrock") ? (0, n.jsx)(ei, {}) : void 0,
                          },
                          {
                            value: "custom",
                            icon: (0, n.jsx)(es, { type: "custom" }),
                            menuIcon: (0, n.jsx)(es, { size: "medium", type: "custom" }),
                            label: (0, n.jsx)(ee, { type: "custom" }),
                            description: (0, n.jsx)(c.A, {
                              id: "settings.gateways.type.gateway.description",
                              defaultMessage: "Connect an OpenAI-compatible gateway",
                              description: "Subtitle for adding a gateway with a custom OpenAI-compatible endpoint",
                            }),
                          },
                        ],
                      }),
                    }),
                  })
                : null),
            (Z[37] = ec),
            (Z[38] = en?.environmentCredentials),
            (Z[39] = en?.profiles),
            (Z[40] = eM.type),
            (Z[41] = Y),
            (Z[42] = Q),
            (Z[43] = eN),
            (Z[44] = ez),
            (Z[45] = p))
          : (p = Z[45]),
        Z[46] !== eM || Z[47] !== ez)
      )
        ((f =
          "custom" === eM.type
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(J, {
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.name.label",
                      defaultMessage: "Name",
                      description: "Label for a custom gateway display name, unrelated to model IDs",
                    }),
                    value: eM.name,
                    onChange: (e) => ez({ name: e }),
                  }),
                  (0, n.jsx)(J, {
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.url.label",
                      defaultMessage: "Base URL",
                      description: "Label for the Responses API base URL, including local endpoints",
                    }),
                    value: eM.baseUrl,
                    placeholder: "https://gateway.example.com/v1",
                    onChange: (e) => ez({ baseUrl: e }),
                  }),
                ],
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(J, {
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.region.label",
                      defaultMessage: "Region",
                      description: "AWS source region used by the Bedrock gateway",
                    }),
                    value: eM.region,
                    placeholder: "us-east-1",
                    disabled: "saved" === eM.auth,
                    onChange: (e) => ez({ region: e }),
                  }),
                  (0, n.jsx)("p", {
                    className: "text-xs break-all text-secondary select-text",
                    children:
                      "custom" === eM.type
                        ? eM.baseUrl
                        : eM.region
                          ? "amazon-bedrock" === eM.type
                            ? `https://bedrock-mantle.${eM.region}.api.aws/openai/v1`
                            : `https://bedrock-runtime.${eM.region}.amazonaws.com/openai/v1`
                          : "",
                  }),
                ],
              })),
          (Z[46] = eM),
          (Z[47] = ez),
          (Z[48] = f))
      else f = Z[48]
      Z[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, n.jsx)(c.A, {
            id: "settings.gateways.auth.label",
            defaultMessage: "Authentication",
            description: "Label for the gateway authentication method dropdown",
          })),
          (Z[49] = h))
        : (h = Z[49])
      let eE = eM.auth,
        eB = ec || eN
      return (
        Z[50] !== ez
          ? ((y = (e) => ez({ auth: e, apiKey: "", accessKeyId: "", secretAccessKey: "", sessionToken: "" })),
            (Z[50] = ez),
            (Z[51] = y))
          : (y = Z[51]),
        Z[52] !== eM || Z[53] !== Q || Z[54] !== ev || Z[55] !== ex
          ? ((b = (function (e, t, a, s) {
              if ("external" === e.auth) return [{ value: "external", label: (0, n.jsx)(et, {}) }]
              if ("custom" === e.type)
                return [
                  {
                    value: "envKey",
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.auth.envKey",
                      defaultMessage: "Environment variable",
                      description:
                        "Custom gateway auth option that reads a bearer token from a named environment variable",
                    }),
                  },
                  {
                    value: "none",
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.auth.none",
                      defaultMessage: "None",
                      description: "Custom gateway authentication option that sends no API key",
                    }),
                  },
                ]
              let i = [
                {
                  value: "environment",
                  label: (0, n.jsx)(c.A, {
                    id: "settings.gateways.auth.environment",
                    defaultMessage: "Automatic",
                    description: "Bedrock authentication using credentials available to the app-server process",
                  }),
                },
                {
                  value: "profile",
                  label: (0, n.jsx)(c.A, {
                    id: "settings.gateways.auth.profile",
                    defaultMessage: "AWS profile",
                    description: "Bedrock authentication using an existing named AWS profile",
                  }),
                },
                {
                  value: "apiKey",
                  label: (0, n.jsx)(c.A, {
                    id: "settings.gateways.auth.apiKey",
                    defaultMessage: "Bedrock API key",
                    description: "Bedrock authentication using an API key managed by Codex",
                  }),
                },
                {
                  value: "accessKeys",
                  label: (0, n.jsx)(c.A, {
                    id: "settings.gateways.auth.accessKeys",
                    defaultMessage: "AWS access keys",
                    description: "Bedrock authentication option for entering AWS access key credentials",
                  }),
                },
              ]
              return (
                t?.savedAuth &&
                  i.unshift({
                    value: "saved",
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.auth.saved",
                      defaultMessage: "Saved Bedrock credentials",
                      description: "Keep using the shared Bedrock credentials already managed by Codex",
                    }),
                  }),
                i.filter(({ value: e }) =>
                  "accessKeys" === e ? a && s : a || ("profile" !== e && "environment" !== e),
                )
              )
            })(eM, Q, ex, ev)),
            (Z[52] = eM),
            (Z[53] = Q),
            (Z[54] = ev),
            (Z[55] = ex),
            (Z[56] = b))
          : (b = Z[56]),
        Z[57] !== eM.auth || Z[58] !== eB || Z[59] !== y || Z[60] !== b
          ? ((w = (0, n.jsx)(L.t, {
              variant: "form",
              contentOverflow: "visible",
              children: (0, n.jsx)(K.ic, {
                label: h,
                control: (0, n.jsx)(X, { value: eE, disabled: eB, onChange: y, options: b }),
              }),
            })),
            (Z[57] = eM.auth),
            (Z[58] = eB),
            (Z[59] = y),
            (Z[60] = b),
            (Z[61] = w))
          : (w = Z[61]),
        Z[62] !== eM.auth || Z[63] !== eM.envKey || Z[64] !== ez
          ? ((C =
              "envKey" === eM.auth
                ? (0, n.jsx)(J, {
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.envKey.label",
                      defaultMessage: "API key environment variable",
                      description:
                        "Label for the name of an environment variable holding the provider or gateway API key",
                    }),
                    value: eM.envKey,
                    placeholder: "API_KEY",
                    onChange: (e) => ez({ envKey: e }),
                  })
                : null),
            (Z[62] = eM.auth),
            (Z[63] = eM.envKey),
            (Z[64] = ez),
            (Z[65] = C))
          : (C = Z[65]),
        Z[66] !== ec ||
        Z[67] !== en?.profiles ||
        Z[68] !== eM.auth ||
        Z[69] !== eM.profile ||
        Z[70] !== eM.region ||
        Z[71] !== eA ||
        Z[72] !== eN ||
        Z[73] !== ez
          ? ((_ =
              "profile" === eM.auth
                ? (0, n.jsx)(R, {
                    value: eM.profile,
                    profiles: en?.profiles ?? [],
                    portalContainer: eA ?? void 0,
                    disabled: ec || !!eN,
                    onChange: (e) =>
                      ez({ profile: e, region: en?.profiles.find((t) => t.name === e)?.region ?? eM.region }),
                  })
                : null),
            (Z[66] = ec),
            (Z[67] = en?.profiles),
            (Z[68] = eM.auth),
            (Z[69] = eM.profile),
            (Z[70] = eM.region),
            (Z[71] = eA),
            (Z[72] = eN),
            (Z[73] = ez),
            (Z[74] = _))
          : (_ = Z[74]),
        Z[75] !== en || Z[76] !== ey || Z[77] !== eM.auth
          ? ((S =
              "environment" === eM.auth
                ? (0, n.jsxs)("div", {
                    className: "space-y-2 text-xs text-secondary",
                    children: [
                      ey || !en?.environmentCredentials.length
                        ? (0, n.jsx)("p", {
                            children: (0, n.jsx)(c.A, {
                              id: "settings.gateways.auth.automatic.description",
                              defaultMessage:
                                "Uses a Bedrock API key from your environment, or your existing AWS credentials",
                              description:
                                "Explains automatic Bedrock authentication on the selected host: an environment bearer key takes priority over the AWS credential chain",
                            }),
                          })
                        : null,
                      (0, n.jsx)("p", {
                        role: ey ? "alert" : "status",
                        className: ey ? "text-warning" : void 0,
                        children: (0, n.jsx)(ea, { discovery: en, failed: ey }),
                      }),
                    ],
                  })
                : null),
            (Z[75] = en),
            (Z[76] = ey),
            (Z[77] = eM.auth),
            (Z[78] = S))
          : (S = Z[78]),
        Z[79] !== eM.apiKey || Z[80] !== eM.auth || Z[81] !== ez
          ? ((M =
              "apiKey" === eM.auth
                ? (0, n.jsx)(J, {
                    label: (0, n.jsx)(c.A, {
                      id: "settings.gateways.apiKey.label",
                      defaultMessage: "Bedrock API key",
                      description: "Label for a masked Bedrock API key input",
                    }),
                    type: "password",
                    value: eM.apiKey,
                    onChange: (e) => ez({ apiKey: e }),
                  })
                : null),
            (Z[79] = eM.apiKey),
            (Z[80] = eM.auth),
            (Z[81] = ez),
            (Z[82] = M))
          : (M = Z[82]),
        Z[83] !== eM.accessKeyId ||
        Z[84] !== eM.auth ||
        Z[85] !== eM.secretAccessKey ||
        Z[86] !== eM.sessionToken ||
        Z[87] !== ez
          ? ((N =
              "accessKeys" === eM.auth
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(J, {
                        label: (0, n.jsx)(c.A, {
                          id: "settings.gateways.accessKeyId.label",
                          defaultMessage: "Access key ID",
                          description: "AWS access key ID input label",
                        }),
                        value: eM.accessKeyId,
                        onChange: (e) => ez({ accessKeyId: e }),
                      }),
                      (0, n.jsx)(J, {
                        label: (0, n.jsx)(c.A, {
                          id: "settings.gateways.secretAccessKey.label",
                          defaultMessage: "Secret access key",
                          description: "Masked AWS secret access key input label",
                        }),
                        type: "password",
                        value: eM.secretAccessKey,
                        onChange: (e) => ez({ secretAccessKey: e }),
                      }),
                      (0, n.jsx)(J, {
                        label: (0, n.jsx)(c.A, {
                          id: "settings.gateways.sessionToken.label",
                          defaultMessage: "Session token (optional)",
                          description: "Masked optional AWS session token input label",
                        }),
                        help: (0, n.jsx)(c.A, {
                          id: "settings.gateways.sessionToken.help",
                          defaultMessage: "Required for temporary AWS credentials",
                          description:
                            "Session token is required with temporary AWS access keys, but not with long-term access keys",
                        }),
                        required: !1,
                        type: "password",
                        value: eM.sessionToken,
                        onChange: (e) => ez({ sessionToken: e }),
                      }),
                    ],
                  })
                : null),
            (Z[83] = eM.accessKeyId),
            (Z[84] = eM.auth),
            (Z[85] = eM.secretAccessKey),
            (Z[86] = eM.sessionToken),
            (Z[87] = ez),
            (Z[88] = N))
          : (N = Z[88]),
        Z[89] !== eM.auth
          ? ((z =
              "saved" === eM.auth
                ? (0, n.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, n.jsx)(c.A, {
                      id: "settings.gateways.saved.region",
                      defaultMessage:
                        "Shared Bedrock credentials use their saved region. Enter credentials again to change it.",
                      description:
                        "Explains why the region field cannot change the region stored with existing shared Bedrock credentials",
                    }),
                  })
                : null),
            (Z[89] = eM.auth),
            (Z[90] = z))
          : (z = Z[90]),
        Z[91] !== eI
          ? ((I = eI
              ? (0, n.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, n.jsx)(c.A, {
                    id: "settings.gateways.auth.replaceNotice",
                    defaultMessage: "Saving replaces your current sign-in with these Bedrock credentials.",
                    description: "Explains v1 global Bedrock credential replacement before Save and connect",
                  }),
                })
              : null),
            (Z[91] = eI),
            (Z[92] = I))
          : (I = Z[92]),
        Z[93] !== eu ||
        Z[94] !== p ||
        Z[95] !== f ||
        Z[96] !== w ||
        Z[97] !== C ||
        Z[98] !== _ ||
        Z[99] !== S ||
        Z[100] !== M ||
        Z[101] !== N ||
        Z[102] !== z ||
        Z[103] !== I
          ? ((P = (0, n.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-4",
              children: [eu, p, f, w, C, _, S, M, N, z, I],
            })),
            (Z[93] = eu),
            (Z[94] = p),
            (Z[95] = f),
            (Z[96] = w),
            (Z[97] = C),
            (Z[98] = _),
            (Z[99] = S),
            (Z[100] = M),
            (Z[101] = N),
            (Z[102] = z),
            (Z[103] = I),
            (Z[104] = P))
          : (P = Z[104]),
        Z[105] !== eq || Z[106] !== P
          ? ((q = (0, n.jsx)(k.OO, {
              spacing: "large",
              children: (0, n.jsx)("fieldset", { disabled: eq, className: "min-w-0", children: P }),
            })),
            (Z[105] = eq),
            (Z[106] = P),
            (Z[107] = q))
          : (q = Z[107]),
        Z[108] !== ec || Z[109] !== eP || Z[110] !== Q || Z[111] !== eb || Z[112] !== ep || Z[113] !== eN
          ? ((E =
              Q && ep && !eN
                ? (0, n.jsx)("div", {
                    className: "me-auto",
                    children: (0, n.jsx)(v.m, {
                      content: eP,
                      children: (0, n.jsx)("span", {
                        children: (0, n.jsx)(j.$, {
                          type: "button",
                          color: "danger",
                          size: "dialogAction",
                          radius: "full",
                          disabled: ec || eb,
                          onClick: () => ej(!0),
                          children: (0, n.jsx)(c.A, {
                            id: "settings.gateways.delete.button",
                            defaultMessage: "Delete",
                            description: "Delete the saved provider or gateway configuration",
                          }),
                        }),
                      }),
                    }),
                  })
                : null),
            (Z[108] = ec),
            (Z[109] = eP),
            (Z[110] = Q),
            (Z[111] = eb),
            (Z[112] = ep),
            (Z[113] = eN),
            (Z[114] = E))
          : (E = Z[114]),
        Z[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, n.jsx)(c.A, {
              id: "settings.gateways.cancel",
              defaultMessage: "Cancel",
              description: "Dismiss the gateway form without saving",
            })),
            (Z[115] = B))
          : (B = Z[115]),
        Z[116] !== ec || Z[117] !== eg
          ? ((O = (0, n.jsx)(j.$, {
              type: "button",
              color: "secondary",
              radius: "full",
              size: "dialogAction",
              disabled: ec,
              onClick: eg,
              children: B,
            })),
            (Z[116] = ec),
            (Z[117] = eg),
            (Z[118] = O))
          : (O = Z[118]),
        Z[119] !== ec || Z[120] !== eN || Z[121] !== eI || Z[122] !== eL || Z[123] !== eK
          ? ((T = eN
              ? null
              : (0, n.jsx)(v.m, {
                  content: eL ? (0, n.jsx)(H, { issues: eK }) : null,
                  children: (0, n.jsx)(j.$, {
                    type: "submit",
                    radius: "full",
                    size: "dialogAction",
                    loading: ec,
                    disabled: ec,
                    "aria-disabled": eL || void 0,
                    children: eI
                      ? (0, n.jsx)(c.A, {
                          id: "settings.gateways.saveConnect",
                          defaultMessage: "Save and connect",
                          description: "Save Bedrock credentials and select this gateway",
                        })
                      : (0, n.jsx)(c.A, {
                          id: "settings.gateways.save",
                          defaultMessage: "Save",
                          description: "Save a gateway configuration",
                        }),
                  }),
                })),
            (Z[119] = ec),
            (Z[120] = eN),
            (Z[121] = eI),
            (Z[122] = eL),
            (Z[123] = eK),
            (Z[124] = T))
          : (T = Z[124]),
        Z[125] !== E || Z[126] !== O || Z[127] !== T
          ? ((V = (0, n.jsx)(k.OO, {
              spacing: "large",
              children: (0, n.jsxs)(k.Es, { expandSingleButton: !1, children: [E, O, T] }),
            })),
            (Z[125] = E),
            (Z[126] = O),
            (Z[127] = T),
            (Z[128] = V))
          : (V = Z[128]),
        Z[129] !== g || Z[130] !== m || Z[131] !== q || Z[132] !== V
          ? ((D = (0, n.jsxs)(k.R4, {
              as: "form",
              className:
                "group/settings max-h-[min(var(--dialog-top-content-max-height),calc(85dvh/var(--codex-window-zoom)))] overflow-y-auto",
              "data-density": "form",
              onSubmit: g,
              children: [m, q, V],
            })),
            (Z[129] = g),
            (Z[130] = m),
            (Z[131] = q),
            (Z[132] = V),
            (Z[133] = D))
          : (D = Z[133]),
        Z[134] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, n.jsx)("div", { ref: ek })), (Z[134] = U))
          : (U = Z[134]),
        Z[135] !== u || Z[136] !== D
          ? ((G = (0, n.jsxs)(A.lG, {
              open: !0,
              variant: "form",
              contentProps: o,
              size: "wide",
              contentOverflow: "visible",
              onOpenChange: u,
              children: [D, U],
            })),
            (Z[135] = u),
            (Z[136] = D),
            (Z[137] = G))
          : (G = Z[137]),
        Z[138] !== eR || Z[139] !== G
          ? ((F = (0, n.jsx)(x.b, { radixPortalContainer: eR, children: G })),
            (Z[138] = eR),
            (Z[139] = G),
            (Z[140] = F))
          : (F = Z[140]),
        F
      )
    }
    function X(e) {
      let t,
        a,
        i,
        r,
        l,
        o = (0, s.c)(19),
        { value: d, options: c, disabled: u, onChange: g } = e
      if (o[0] !== c || o[1] !== d) {
        let e
        ;(o[3] !== d ? ((e = (e) => e.value === d), (o[3] = d), (o[4] = e)) : (e = o[4]),
          (t = c.find(e)),
          (o[0] = c),
          (o[1] = d),
          (o[2] = t))
      } else t = o[2]
      let m = t,
        p = m?.icon,
        f = m?.label ?? d
      if (
        (o[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(S.Aq_, { className: "text-tertiary" })), (o[5] = a))
          : (a = o[5]),
        o[6] !== u || o[7] !== p || o[8] !== f
          ? ((i = (0, n.jsxs)(j.$, { type: "button", color: "ghostActive", disabled: u, children: [p, f, a] })),
            (o[6] = u),
            (o[7] = p),
            (o[8] = f),
            (o[9] = i))
          : (i = o[9]),
        o[10] !== g || o[11] !== c)
      ) {
        let e
        ;(o[13] !== g
          ? ((e = (e) =>
              (0, n.jsx)(
                C.ms.Item,
                {
                  className: e.menuIcon ? "[--icon-leading-size:calc(var(--spacing)*5)]" : void 0,
                  disabled: e.disabled,
                  focusableWhenDisabled: !!e.tooltip,
                  tooltipText: e.tooltip,
                  leftIcon: e.menuIcon ?? e.icon,
                  SubText: e.description,
                  onClick: () => g(e.value),
                  children: e.label,
                },
                e.value,
              )),
            (o[13] = g),
            (o[14] = e))
          : (e = o[14]),
          (r = c.map(e)),
          (o[10] = g),
          (o[11] = c),
          (o[12] = r))
      } else r = o[12]
      return (
        o[15] !== u || o[16] !== i || o[17] !== r
          ? ((l = (0, n.jsx)(C.Ab, { disabled: u, triggerButton: i, children: r })),
            (o[15] = u),
            (o[16] = i),
            (o[17] = r),
            (o[18] = l))
          : (l = o[18]),
        l
      )
    }
    function J(e) {
      let t,
        a,
        i,
        r,
        l,
        o = (0, s.c)(21),
        { label: c, help: u, value: g, placeholder: m, type: p, required: f, disabled: h, onChange: y } = e,
        x = void 0 === p ? "text" : p,
        v = void 0 === f || f,
        b = void 0 !== h && h,
        w = (0, d.useId)()
      o[0] !== w || o[1] !== c
        ? ((t = (0, n.jsx)("label", { htmlFor: w, className: "select-none", children: c })),
          (o[0] = w),
          (o[1] = c),
          (o[2] = t))
        : (t = o[2])
      let j = u ? w + "-help" : void 0
      return (
        o[3] !== y ? ((a = (e) => y(e.target.value)), (o[3] = y), (o[4] = a)) : (a = o[4]),
        o[5] !== b || o[6] !== w || o[7] !== m || o[8] !== v || o[9] !== j || o[10] !== a || o[11] !== x || o[12] !== g
          ? ((i = (0, n.jsx)(M.pd, {
              id: w,
              "aria-describedby": j,
              variant: "form",
              type: x,
              value: g,
              placeholder: m,
              required: v,
              disabled: b,
              autoComplete: "off",
              spellCheck: !1,
              onChange: a,
            })),
            (o[5] = b),
            (o[6] = w),
            (o[7] = m),
            (o[8] = v),
            (o[9] = j),
            (o[10] = a),
            (o[11] = x),
            (o[12] = g),
            (o[13] = i))
          : (i = o[13]),
        o[14] !== u || o[15] !== w
          ? ((r = u ? (0, n.jsx)("span", { id: w + "-help", className: "text-xs text-secondary", children: u }) : null),
            (o[14] = u),
            (o[15] = w),
            (o[16] = r))
          : (r = o[16]),
        o[17] !== t || o[18] !== i || o[19] !== r
          ? ((l = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-2 text-sm", children: [t, i, r] })),
            (o[17] = t),
            (o[18] = i),
            (o[19] = r),
            (o[20] = l))
          : (l = o[20]),
        l
      )
    }
    function ee(e) {
      let t,
        a = (0, s.c)(2),
        { type: i } = e
      return (
        a[0] !== i
          ? ((t =
              "custom" === i
                ? (0, n.jsx)(c.A, {
                    id: "settings.gateways.type.custom",
                    defaultMessage: "Gateway",
                    description: "Gateway type for a custom OpenAI-compatible Responses API endpoint",
                  })
                : (0, n.jsx)(c.A, {
                    id: "settings.gateways.type.bedrock",
                    defaultMessage: "{runtime, select, yes {Bedrock Runtime} other {Bedrock Mantle}}",
                    description: "Bedrock model provider type; runtime selects Runtime versus Mantle",
                    values: { runtime: "amazon-bedrock-runtime" === i ? "yes" : "no" },
                  })),
            (a[0] = i),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function et() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "settings.gateways.external.label",
              defaultMessage: "Configured externally",
              description: "Indicates gateway settings controlled by external or advanced configuration",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function ea(e) {
      let t,
        a = (0, s.c)(5),
        { discovery: i, failed: r } = e
      if (r) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.discovery.failed",
                defaultMessage: "Couldn’t detect AWS credentials. You can still save and test the connection",
                description:
                  "Non-blocking warning when credential discovery fails on the selected host; saving and later testing the provider remain available",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if (null == i) {
        let e
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.discovery.loading",
                defaultMessage: "Checking for AWS credentials…",
                description: "Neutral status while AWS credential discovery is still loading on the selected host",
              })),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      if (0 === i.environmentCredentials.length) {
        let e
        return (
          a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.discovery.empty",
                defaultMessage:
                  "No credentials detected. Configure AWS credentials or choose another authentication method",
                description: "No AWS credentials were found in the app-server environment",
              })),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      let l = i.environmentCredentials.some(en) ? "yes" : "no"
      return (
        a[3] !== l
          ? ((t = (0, n.jsx)(c.A, {
              id: "settings.gateways.discovery.found.v4",
              defaultMessage:
                "{hasKey, select, yes {Detected a Bedrock API key in the environment} other {Detected AWS access keys in the environment}}",
              description:
                "Reports the highest-priority detected environment credential type; hasKey indicates whether a Bedrock bearer key is present",
              values: { hasKey: l },
            })),
            (a[3] = l),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function en(e) {
      return "bedrockApiKey" === e.type
    }
    function es(e) {
      let t,
        a,
        i = (0, s.c)(6),
        { type: r, size: l } = e,
        o = void 0 === l ? "small" : l
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { small: "size-4", medium: "size-5", large: "size-8" }), (i[0] = t))
        : (t = i[0])
      let d = t[o]
      if ("custom" === r) {
        let e
        return (
          i[1] !== o || i[2] !== d
            ? ((e = "large" === o ? (0, n.jsx)(_.I, { asset: w }) : (0, n.jsx)(S.Bgg, { className: d })),
              (i[1] = o),
              (i[2] = d),
              (i[3] = e))
            : (e = i[3]),
          e
        )
      }
      let c = `${d} shrink-0 text-default`
      return (
        i[4] !== c ? ((a = (0, n.jsx)(N, { className: c, "aria-hidden": !0 })), (i[4] = c), (i[5] = a)) : (a = i[5]),
        a
      )
    }
    function ei() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "settings.gateways.alreadyAdded",
              defaultMessage: "Already added",
              description: "Tooltip on a Bedrock provider option that is disabled because it is already configured",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function er(e) {
      let t,
        a = (0, s.c)(2),
        { type: i } = e
      return (
        a[0] !== i
          ? ((t =
              "amazon-bedrock" === i
                ? (0, n.jsx)(c.A, {
                    id: "settings.gateways.mantle.subtitle",
                    defaultMessage: "For in-region inference",
                    description: "Subtitle describing Bedrock Mantle in the provider dropdown",
                  })
                : (0, n.jsx)(c.A, {
                    id: "settings.gateways.runtime.subtitle",
                    defaultMessage: "For cross-region inference",
                    description: "Subtitle describing Bedrock Runtime in the provider dropdown",
                  })),
            (a[0] = i),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    var el = a("DBCl"),
      eo = a("Dgwo"),
      ed = a("B81s")
    class ec extends Error {
      reason
      details
      constructor(e, t) {
        ;(super(e), (this.reason = e), (this.details = t))
      }
    }
    async function eu(e, t, a, n) {
      try {
        let s = void 0 === n ? await (0, ed.dG)(e, e.queryClient, t) : n,
          i = await (0, eo.V)(e, t).sendRequest("config/batchWrite", {
            edits: a,
            filePath: s?.filePath ?? null,
            expectedVersion: s?.expectedVersion ?? null,
            reloadUserConfig: !1,
          })
        if (null != i.overriddenMetadata) throw new ec("managed")
      } catch (e) {
        if (e instanceof ec) throw e
        throw new ec("save")
      }
    }
    var eg = a("OeLR"),
      em = a("YWOa"),
      ep = a("Q4dB"),
      ef = a("GaA7")
    let eh = E.object({ message: E.string(), additionalDetails: E.string().nullish() })
    function ey(e) {
      if ("string" == typeof e && e.trim()) return e
      let t = eh.safeParse(e)
      if (t.success) {
        let { message: e, additionalDetails: a } = t.data,
          n = [e, a].filter((e) => e?.trim()).join("\n\n")
        if (n) return n
      }
      return JSON.stringify({ error: "connectionTestFailed" }, null, 2)
    }
    async function ex(e, t, a) {
      let n,
        s,
        i = ef.appServices?.executionPaths
      if (null == i) throw new ec("test")
      let r = (0, eo.V)(e, t),
        l = await i.readCodexHome(t),
        o = (0, el.udX)(),
        d = null,
        c = null,
        u = r.subscribe({
          type: "notification",
          key: { hostId: t },
          methods: "turn/completed",
          listener: ({ params: e }) => {
            e.threadId === d && o.resolve("completed" === e.turn.status ? null : ey(e.turn.error))
          },
        })
      try {
        let e
        s = await u
        let t = Object.fromEntries(Object.keys(T(a.mcp_servers)).map((e) => [e, { enabled: !1 }])),
          i = null
        do {
          let t = await r.sendRequest("model/list", { cursor: i }, { timeoutMs: 3e4 })
          ;((e = t.data.find((e) => e.isDefault)), (i = t.nextCursor))
        } while (null == e && null != i)
        ;((d = (
          await r.sendRequest(
            "thread/start",
            {
              ephemeral: !0,
              model: e?.model ?? (0, eg.Y$)(a).model,
              cwd: l,
              approvalPolicy: "never",
              sandbox: "read-only",
              environments: [],
              baseInstructions:
                "This is a connection test. Reply with exactly gateway-ok. Do not use tools or read files.",
              developerInstructions: "Reply with exactly gateway-ok. Do not use tools.",
              config: {
                ...(null == e ? {} : { model_reasoning_effort: e.defaultReasoningEffort }),
                mcp_servers: t,
                "features.shell_tool": !1,
                "features.view_image": !1,
                "features.code_mode": !1,
                "features.code_mode_host": !1,
                "features.multi_agent_v2": !1,
                "features.computer_use": !1,
                "features.browser_use": !1,
                "features.apply_patch_freeform": !1,
                "features.multi_agent": !1,
                "features.hooks": !1,
                "features.plugins": !1,
                "features.apps": !1,
                web_search: "disabled",
                project_doc_max_bytes: 0,
              },
            },
            { timeoutMs: 3e4 },
          )
        ).thread.id),
          (n = setTimeout(() => o.resolve(ey({ message: "timeout" })), 3e4)))
        let { turn: g } = await r.sendRequest(
          "turn/start",
          { threadId: d, input: [{ type: "text", text: "Reply with exactly: gateway-ok", text_elements: [] }] },
          { timeoutMs: 3e4 },
        )
        c = g.id
        let m = await o.promise
        if (null != m) throw new ec("test", m)
      } catch (e) {
        throw e instanceof ec ? e : new ec("test", ey(e))
      } finally {
        ;(clearTimeout(n),
          u[Symbol.dispose](),
          s?.[Symbol.dispose](),
          null != d &&
            (null != c && (await r.sendRequest("turn/interrupt", { threadId: d, turnId: c }).catch(() => void 0)),
            await r.sendRequest("thread/unsubscribe", { threadId: d }).catch(() => void 0)))
      }
    }
    let ev = (0, b.a)({
      name: "openai-logo-regular-lg-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0, y: 0.072266, width: 16, height: 15.857422 },
        visualBounds: { x: 0, y: 0.072266, width: 16, height: 15.857422 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0, y: 0.072266, width: 16, height: 15.857422 },
        center: { x: 8, y: 8.000977 },
        insets: { top: 0.072266, right: 0, bottom: 0.070312, left: 0 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.000977 }, foreground: { x: 8, y: 8.000977 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.13673 5.84428V4.33784C6.13673 4.21097 6.18433 4.11577 6.29529 4.05241L9.32409 2.30813C9.73639 2.0703 10.228 1.95934 10.7353 1.95934C12.6382 1.95934 13.8434 3.4341 13.8434 5.0039C13.8434 5.11486 13.8434 5.24174 13.8275 5.36861L10.6877 3.52914C10.4975 3.41818 10.3071 3.41818 10.1169 3.52914L6.13673 5.84428ZM13.209 11.7115V8.11183C13.209 7.88976 13.1138 7.7312 12.9236 7.62024L8.94346 5.3051L10.2437 4.55976C10.3547 4.4964 10.4499 4.4964 10.5609 4.55976L13.5897 6.30404C14.4619 6.81154 15.0485 7.88976 15.0485 8.9363C15.0485 10.1414 14.335 11.2514 13.209 11.7113V11.7115ZM5.20115 8.54005L3.90086 7.77895C3.7899 7.71559 3.74231 7.62039 3.74231 7.49352V4.00496C3.74231 2.30828 5.04259 1.02376 6.80279 1.02376C7.46885 1.02376 8.08716 1.24583 8.61058 1.64222L5.48674 3.45001C5.2965 3.56097 5.2013 3.71953 5.2013 3.9416V8.54021L5.20115 8.54005ZM8 10.1575L6.13673 9.11092V6.89097L8 5.84444L9.86312 6.89097V9.11092L8 10.1575ZM9.19721 14.9781C8.53115 14.9781 7.91284 14.7561 7.38942 14.3597L10.5133 12.5519C10.7035 12.4409 10.7987 12.2824 10.7987 12.0603V7.46169L12.1149 8.22279C12.2259 8.28615 12.2735 8.38135 12.2735 8.50822V11.9968C12.2735 13.6935 10.9573 14.978 9.19721 14.978V14.9781ZM5.43899 11.442L2.41019 9.6977C1.53797 9.1902 0.951341 8.11198 0.951341 7.06544C0.951341 5.84444 1.68076 4.7503 2.80658 4.2904V7.90583C2.80658 8.1279 2.90177 8.28645 3.09201 8.39741L7.05639 10.6966L5.7561 11.442C5.64514 11.5053 5.54995 11.5053 5.43899 11.442ZM5.26467 14.0426C3.47279 14.0426 2.15659 12.6947 2.15659 11.0297C2.15659 10.9028 2.1725 10.7759 2.18827 10.649L5.31211 12.4568C5.50235 12.5678 5.69274 12.5678 5.88298 12.4568L9.86312 10.1576V11.6641C9.86312 11.7909 9.81552 11.8861 9.70456 11.9495L6.67576 13.6938C6.26345 13.9316 5.77187 14.0426 5.26451 14.0426H5.26467ZM9.19721 15.9295C11.116 15.9295 12.7174 14.5658 13.0823 12.758C14.8583 12.2981 16 10.6331 16 8.93645C16 7.8264 15.5243 6.74818 14.668 5.97116C14.7473 5.63813 14.7949 5.3051 14.7949 4.97222C14.7949 2.70467 12.9554 1.00784 10.8305 1.00784C10.4025 1.00784 9.99015 1.0712 9.57784 1.214C8.86418 0.516255 7.88101 0.0722656 6.80279 0.0722656C4.88404 0.0722656 3.28255 1.43592 2.91769 3.24371C1.14173 3.70361 0 5.36861 0 7.06529C0 8.17534 0.475671 9.25356 1.33197 10.0306C1.25269 10.3636 1.20509 10.6966 1.20509 11.0295C1.20509 13.2971 3.04457 14.9939 5.16947 14.9939C5.59754 14.9939 6.00985 14.9305 6.42216 14.7877C7.13567 15.4855 8.11884 15.9295 9.19721 15.9295Z" fill="currentColor"/>',
    })
    var eb = a("zKCW"),
      ew = a("Ot7V"),
      ej = a("RNul"),
      eA = a("jxU8"),
      ek = a("BSnr"),
      eC = a("X4Bv"),
      e_ = a("uuN8"),
      eS = a("aepO")
    function eM(e) {
      let t,
        a,
        i,
        r = (0, s.c)(5),
        { details: l } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("p", {
              role: "alert",
              className: "text-danger",
              children: (0, n.jsx)(c.A, {
                id: "settings.gateways.error.test",
                defaultMessage:
                  "The inference test failed. Check the endpoint, model, credentials, and region, then try again.",
                description: "A synthetic gateway inference request failed or timed out",
              }),
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== l
          ? ((a = l
              ? (0, n.jsx)(eC.N, {
                  variant: "preview",
                  className: "bg-text/5!",
                  showActionBar: !1,
                  content: l,
                  source: (0, n.jsxs)("div", {
                    className: "flex items-start gap-2",
                    children: [
                      (0, n.jsx)("pre", {
                        className: "m-0 min-w-0 flex-1 text-xs break-words whitespace-pre-wrap",
                        children: (0, n.jsx)("code", { children: l }),
                      }),
                      (0, n.jsx)(e_.i, { variant: "codeBlock", onCopy: (e) => (0, eS.E)(l, e) }),
                    ],
                  }),
                })
              : null),
            (r[1] = l),
            (r[2] = a))
          : (a = r[2]),
        r[3] !== a
          ? ((i = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-3 text-sm", children: [t, a] })),
            (r[3] = a),
            (r[4] = i))
          : (i = r[4]),
        i
      )
    }
    function eN(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        d,
        u,
        g,
        m,
        p,
        f,
        h,
        y,
        x,
        b,
        w,
        A,
        k,
        C,
        M,
        N,
        I,
        P,
        R,
        q,
        E = (0, s.c)(88),
        {
          gateways: B,
          selectedProvider: O,
          selectionManaged: V,
          busy: W,
          error: $,
          testResult: U,
          restartRequired: G,
          onRestart: F,
          onSelect: Z,
          onAdd: H,
          onEdit: Q,
          onTest: Y,
          children: J,
        } = e
      E[0] !== U ? ((t = void 0 === U ? { status: "untested" } : U), (E[0] = U), (E[1] = t)) : (t = E[1])
      let ea = t
      if (E[2] !== B || E[3] !== O) {
        let e
        ;(E[5] !== O
          ? ((e = (e) => {
              let { id: t } = e
              return t === O
            }),
            (E[5] = O),
            (E[6] = e))
          : (e = E[6]),
          (a = B.find(e)),
          (E[2] = B),
          (E[3] = O),
          (E[4] = a))
      } else a = E[4]
      let en = a,
        ei = (0, z.A)()
      E[7] !== ei
        ? ((i = ei.formatMessage({
            id: "settings.gateways.test.button",
            defaultMessage: "Test connection",
            description: "Send a synthetic inference request through the selected provider",
          })),
          (E[7] = ei),
          (E[8] = i))
        : (i = E[8])
      let er = i,
        el = er
      E[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)("span", {
            className: "flex size-5 items-center justify-center",
            "aria-hidden": "true",
            children: (0, n.jsx)("span", { className: "size-2 rounded-full bg-text-tertiary" }),
          })),
          (E[9] = r))
        : (r = E[9])
      let eo = r
      switch (ea.status) {
        case "untested":
          break
        case "testing": {
          let e, t
          ;(E[10] !== ei
            ? ((e = ei.formatMessage({
                id: "settings.gateways.test.testing",
                defaultMessage: "Testing…",
                description: "A provider connection test is in progress",
              })),
              (E[10] = ei),
              (E[11] = e))
            : (e = E[11]),
            (el = e),
            E[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(ej.y, { className: "size-5" })), (E[12] = t))
              : (t = E[12]),
            (eo = t))
          break
        }
        case "passed": {
          let e, t
          ;(E[13] !== ei
            ? ((e = ei.formatMessage({
                id: "settings.gateways.test.passed",
                defaultMessage: "Passed",
                description: "The last provider connection test succeeded; click to test again",
              })),
              (E[13] = ei),
              (E[14] = e))
            : (e = E[14]),
            (el = e),
            E[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(S.gL9, { className: "text-success" })), (E[15] = t))
              : (t = E[15]),
            (eo = t))
          break
        }
        case "failed": {
          let e, t
          ;(E[16] !== ei
            ? ((e = ei.formatMessage({
                id: "settings.gateways.test.failed",
                defaultMessage: "Failed",
                description: "The last provider connection test failed; click to test again",
              })),
              (E[16] = ei),
              (E[17] = e))
            : (e = E[17]),
            (el = e),
            E[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(S.dGN, { className: "text-danger" })), (E[18] = t))
              : (t = E[18]),
            (eo = t))
        }
      }
      if (
        (E[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = {
              value: "openai",
              icon: (0, n.jsx)(_.I, { asset: ev }),
              label: (0, n.jsx)(c.A, {
                id: "settings.gateways.provider.openai",
                defaultMessage: "OpenAI",
                description: "Built-in OpenAI option in the model provider dropdown",
              }),
            }),
            (E[19] = l))
          : (l = E[19]),
        E[20] !== B || E[21] !== O)
      ) {
        if (!(o = [l, ...B.map(ez)]).some((e) => e.value === O)) {
          let e, t
          ;(E[23] !== O ? ((e = (0, n.jsx)(n.Fragment, { children: O })), (E[23] = O), (E[24] = e)) : (e = E[24]),
            E[25] !== O || E[26] !== e
              ? ((t = { value: O, label: e }), (E[25] = O), (E[26] = e), (E[27] = t))
              : (t = E[27]),
            o.push(t))
        }
        ;((E[20] = B), (E[21] = O), (E[22] = o))
      } else o = E[22]
      ;(E[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, n.jsx)(c.A, {
            id: "settings.gateways.title",
            defaultMessage: "Model Providers",
            description: "Title of desktop settings for model provider gateways",
          })),
          (E[28] = d))
        : (d = E[28]),
        E[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(c.A, {
              id: "settings.gateways.subtitle",
              defaultMessage: "Connect ChatGPT to a model provider or gateway. <a>Learn more</a>",
              description: "Model provider settings introduction linking to custom model provider documentation",
              values: { a: eK },
            })),
            (E[29] = u))
          : (u = E[29]),
        E[30] !== W || E[31] !== F || E[32] !== G
          ? ((g = G
              ? (0, n.jsx)(eb.l, {
                  variant: "settings",
                  type: "warning",
                  role: "status",
                  icon: (0, n.jsx)(S.dGN, { className: "text-warning" }),
                  title: (0, n.jsx)(c.A, {
                    id: "settings.gateways.restart.title",
                    defaultMessage: "Provider changes are ready to apply",
                    description: "Heading for the warning that a provider change needs a model catalog refresh",
                  }),
                  content: (0, n.jsx)(c.A, {
                    id: "settings.gateways.restart.notice",
                    defaultMessage: "Finish running chats first. ChatGPT will stay open.",
                    description:
                      "Advises finishing chats before reloading because reload interrupts active turns. This is a reminder, not a requirement; the app window stays open.",
                  }),
                  primaryCtaText: (0, n.jsx)(c.A, {
                    id: "settings.gateways.restart.button",
                    defaultMessage: "Reload ChatGPT",
                    description: "Restart Codex to load the saved provider's model catalog",
                  }),
                  primaryCtaColor: "secondary",
                  isPrimaryCtaDisabled: W,
                  onPrimaryCtaClick: F,
                  showCtaSeparator: !1,
                  stackOnNarrow: !0,
                })
              : null),
            (E[30] = W),
            (E[31] = F),
            (E[32] = G),
            (E[33] = g))
          : (g = E[33]),
        E[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(c.A, {
              id: "settings.gateways.provider.label",
              defaultMessage: "Model provider",
              description: "Dropdown choosing the default inference provider for new chats",
            })),
            (p = (0, n.jsx)(c.A, {
              id: "settings.gateways.provider.description",
              defaultMessage: "Default for new chats. Existing chats keep their provider.",
              description: "Explains that changing the model provider only changes the default for new chats",
            })),
            (E[34] = m),
            (E[35] = p))
          : ((m = E[34]), (p = E[35])))
      let ed = W || V
      if (
        (E[36] !== Z || E[37] !== o || E[38] !== O || E[39] !== ed
          ? ((f = (0, n.jsx)(X, { value: O, options: o, disabled: ed, onChange: Z })),
            (E[36] = Z),
            (E[37] = o),
            (E[38] = O),
            (E[39] = ed),
            (E[40] = f))
          : (f = E[40]),
        E[41] !== W ||
        E[42] !== Y ||
        E[43] !== G ||
        E[44] !== en ||
        E[45] !== er ||
        E[46] !== eo ||
        E[47] !== el ||
        E[48] !== ea.status
          ? ((h =
              null != en
                ? (0, n.jsx)(v.m, {
                    content: G
                      ? (0, n.jsx)(c.A, {
                          id: "settings.gateways.test.reloadFirst",
                          defaultMessage: "Reload Codex before testing this provider.",
                          description:
                            "Explains why testing waits until the selected provider's model catalog is loaded",
                        })
                      : null,
                    children: (0, n.jsx)("span", {
                      children: (0, n.jsxs)(j.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        "aria-label": er,
                        disabled: W || G || "testing" === ea.status,
                        onClick: () => Y(en),
                        children: [
                          (0, n.jsx)("span", {
                            className: "flex size-5 shrink-0 items-center justify-center",
                            "aria-hidden": "true",
                            children: eo,
                          }),
                          (0, n.jsx)("span", { role: "status", children: el }),
                        ],
                      }),
                    }),
                  })
                : null),
            (E[41] = W),
            (E[42] = Y),
            (E[43] = G),
            (E[44] = en),
            (E[45] = er),
            (E[46] = eo),
            (E[47] = el),
            (E[48] = ea.status),
            (E[49] = h))
          : (h = E[49]),
        E[50] !== f || E[51] !== h
          ? ((y = (0, n.jsx)(K.ic, {
              label: m,
              description: p,
              control: (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [f, h] }),
            })),
            (E[50] = f),
            (E[51] = h),
            (E[52] = y))
          : (y = E[52]),
        E[53] !== ea.details || E[54] !== ea.status
          ? ((x =
              "failed" === ea.status
                ? (0, n.jsx)("div", { className: "p-4", children: (0, n.jsx)(eM, { details: ea.details }) })
                : null),
            (E[53] = ea.details),
            (E[54] = ea.status),
            (E[55] = x))
          : (x = E[55]),
        E[56] !== V
          ? ((b = V
              ? (0, n.jsx)(K.ic, {
                  label: (0, n.jsx)(c.A, {
                    id: "settings.gateways.managed",
                    defaultMessage: "Provider selection is managed by your organization",
                    description: "Explains why the model provider dropdown is disabled",
                  }),
                  control: null,
                })
              : null),
            (E[56] = V),
            (E[57] = b))
          : (b = E[57]),
        E[58] !== y || E[59] !== x || E[60] !== b
          ? ((w = (0, n.jsxs)(L.t, { children: [y, x, b] })), (E[58] = y), (E[59] = x), (E[60] = b), (E[61] = w))
          : (w = E[61]),
        E[62] !== w || E[63] !== g
          ? ((A = (0, n.jsx)(ek.X, { children: (0, n.jsxs)(ek.X.Content, { className: "gap-3", children: [g, w] }) })),
            (E[62] = w),
            (E[63] = g),
            (E[64] = A))
          : (A = E[64]),
        E[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)(c.A, {
              id: "settings.gateways.list.title",
              defaultMessage: "Providers and gateways",
              description: "Heading above the saved model gateway configurations",
            })),
            (E[65] = k))
          : (k = E[65]),
        E[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, n.jsx)(c.A, {
              id: "settings.gateways.add.button",
              defaultMessage: "Add",
              description: "Open the gateway creation form",
            })),
            (E[66] = C))
          : (C = E[66]),
        E[67] !== W || E[68] !== H
          ? ((M = (0, n.jsx)(ek.X.Header, {
              title: k,
              actions: (0, n.jsx)(j.$, { color: "secondary", size: "toolbar", disabled: W, onClick: H, children: C }),
            })),
            (E[67] = W),
            (E[68] = H),
            (E[69] = M))
          : (M = E[69]),
        E[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, n.jsx)(K.ic, {
              className: "py-4",
              icon: (0, n.jsx)(_.I, { asset: ev, className: "size-5" }),
              label: (0, n.jsx)(c.A, {
                id: "settings.gateways.provider.openai",
                defaultMessage: "OpenAI",
                description: "Built-in OpenAI option in the model provider dropdown",
              }),
              description: (0, n.jsx)(c.A, {
                id: "settings.gateways.provider.builtIn",
                defaultMessage: "Built-in provider",
                description: "Description of the read-only OpenAI entry in the provider list",
              }),
              control: null,
            })),
            (E[70] = N))
          : (N = E[70]),
        E[71] !== W || E[72] !== B || E[73] !== Q)
      ) {
        let e
        ;(E[75] !== W || E[76] !== Q
          ? ((e = (e) =>
              (0, n.jsx)(
                K.kG,
                {
                  disabled: W,
                  edgeRounding: "surface",
                  onClick: () => Q(e),
                  trailing: (0, n.jsx)(S.uM3, {}),
                  label: "custom" === e.type ? e.name : (0, n.jsx)(ee, { type: e.type }),
                  icon: (0, n.jsx)(es, { size: "medium", type: e.type }),
                  description: (0, n.jsxs)("span", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, n.jsx)("span", {
                        className: "break-all",
                        children: "custom" === e.type ? D(e.config.base_url) : D(T(e.config.aws).region),
                      }),
                      e.managed || e.external ? (0, n.jsx)(et, {}) : null,
                    ],
                  }),
                },
                e.id,
              )),
            (E[75] = W),
            (E[76] = Q),
            (E[77] = e))
          : (e = E[77]),
          (I = B.map(e)),
          (E[71] = W),
          (E[72] = B),
          (E[73] = Q),
          (E[74] = I))
      } else I = E[74]
      return (
        E[78] !== I
          ? ((P = (0, n.jsx)(ek.X.Content, { children: (0, n.jsxs)(L.t, { children: [N, I] }) })),
            (E[78] = I),
            (E[79] = P))
          : (P = E[79]),
        E[80] !== M || E[81] !== P
          ? ((R = (0, n.jsxs)(ek.X, { children: [M, P] })), (E[80] = M), (E[81] = P), (E[82] = R))
          : (R = E[82]),
        E[83] !== J || E[84] !== $ || E[85] !== A || E[86] !== R
          ? ((q = (0, n.jsxs)(eA.P, {
              title: d,
              subtitleClassName: "whitespace-normal",
              subtitle: u,
              children: [$, A, R, J],
            })),
            (E[83] = J),
            (E[84] = $),
            (E[85] = A),
            (E[86] = R),
            (E[87] = q))
          : (q = E[87]),
        q
      )
    }
    function eK(e) {
      return (0, n.jsx)("a", {
        className: "inline-flex font-medium text-info",
        href: "https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers",
        target: "_blank",
        rel: "noreferrer",
        onClick: eL,
        children: e,
      })
    }
    function eL(e) {
      ;(0, ew.PQ)({ event: e, href: e.currentTarget.href, initiator: "external_link" })
    }
    function ez(e) {
      return {
        value: e.id,
        icon: (0, n.jsx)(es, { type: e.type }),
        label: "custom" === e.type ? (0, n.jsx)(n.Fragment, { children: e.name }) : (0, n.jsx)(ee, { type: e.type }),
      }
    }
    let eI = (0, r.bD)(f.u, (e) => null),
      eP = (0, r.bD)(f.u, (e) => !1),
      eR = (0, r.vU)(f.u, (e, { scope: t }) => ({
        queryKey: ["config", "gateways", e],
        staleTime: 1e4,
        retry: !1,
        queryFn: () =>
          (async function (e, t) {
            let a = (0, eo.V)(e, t),
              [n, { requirements: s }, i] = await Promise.all([
                a.sendRequest("config/read", { includeLayers: !0, cwd: null }),
                a.sendRequest("configRequirements/read", void 0),
                a.getAuthMethod(),
              ])
            return { response: n, requirements: s, authMode: i }
          })(t, e),
      })),
      eq = (0, r.vU)(f.u, (e, { scope: t }) => ({
        queryKey: ["gateways", "bedrock-discovery", e],
        staleTime: 3e4,
        retry: !1,
        queryFn: () =>
          (async function (e, t) {
            try {
              return await (0, eo.V)(e, t).sendRequest("account/bedrock/discover", {})
            } catch (e) {
              if ((0, el.Rg6)(e, "account/bedrock/discover")) return null
              throw e
            }
          })(t, e),
      }))
    function eE() {
      let e,
        t = (0, s.c)(2),
        { selectedHostId: a } = (0, h.D)()
      return (t[0] !== a ? ((e = (0, n.jsx)(eB, { hostId: a }, a)), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    function eB(e) {
      let t,
        a,
        h,
        x = (0, s.c)(64),
        { hostId: v } = e,
        b = (0, r.gh)(f.u),
        w = (0, r._U)(g.B, v),
        j = (0, i.jE)(),
        A = (0, u.Zp)(),
        k = (0, r._U)(eR, v),
        C = (0, r._U)(eq, v),
        [_, S] = (0, d.useState)(null),
        [M, N] = (0, d.useState)(!1),
        [K, L] = (0, d.useState)(!1),
        z = (0, r._U)(eI, v),
        I = (0, r._U)(eP, v),
        P = (0, d.useRef)(!1),
        [R, q] = (0, d.useState)(null),
        E = k.data?.requirements?.modelProvider ?? k.data?.response.config.model_provider ?? "openai"
      x[0] !== k.data ? ((t = eT(k.data)), (x[0] = k.data), (x[1] = t)) : (t = x[1])
      let B = (function (e) {
        let t,
          a,
          n,
          i,
          r,
          l = (0, s.c)(12)
        l[0] !== e ? ((t = { configurationKey: e, attempt: null }), (l[0] = e), (l[1] = t)) : (t = l[1])
        let [o, c] = (0, d.useState)(t)
        return (
          o.configurationKey !== e &&
            c({ configurationKey: e, attempt: o.attempt?.configurationKey === e ? o.attempt : null }),
          l[2] !== e || l[3] !== o.attempt
            ? ((a = o.attempt?.configurationKey === e ? o.attempt.result : { status: "untested" }),
              (l[2] = e),
              (l[3] = o.attempt),
              (l[4] = a))
            : (a = l[4]),
          l[5] !== e
            ? ((n = () => c({ configurationKey: e, attempt: null })),
              (i = async (t, a) => {
                let n,
                  s = { configurationKey: void 0 === a ? e : a, result: { status: "testing" } }
                c((e) => ({ ...e, attempt: s }))
                try {
                  ;(await t(), (n = { status: "passed" }))
                } catch (e) {
                  n = { status: "failed", details: e instanceof ec && e.details ? e.details : ey(e) }
                }
                c((e) => (e.attempt === s ? { ...e, attempt: { ...s, result: n } } : e))
              }),
              (l[5] = e),
              (l[6] = n),
              (l[7] = i))
            : ((n = l[6]), (i = l[7])),
          l[8] !== a || l[9] !== n || l[10] !== i
            ? ((r = { result: a, reset: n, run: i }), (l[8] = a), (l[9] = n), (l[10] = i), (l[11] = r))
            : (r = l[11]),
          r
        )
      })(t)
      x[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            q(null)
          }),
          (x[2] = a))
        : (a = x[2])
      let W = a,
        D = k.data
      if (null == D) {
        let e
        return (
          x[3] !== k.isError
            ? ((e = (0, n.jsx)("p", {
                role: "status",
                children: k.isError
                  ? (0, n.jsx)(c.A, {
                      id: "settings.gateways.load.error",
                      defaultMessage: "Couldn't load gateway settings. Reopen settings to try again.",
                      description: "Gateway configuration load failed; do not display a false empty state",
                    })
                  : (0, n.jsx)(c.A, {
                      id: "settings.gateways.load.pending",
                      defaultMessage: "Loading gateways…",
                      description: "Gateway settings loading indicator",
                    }),
              })),
              (x[3] = k.isError),
              (x[4] = e))
            : (e = x[4]),
          e
        )
      }
      let { response: $, requirements: F } = D
      if (
        x[5] !== K ||
        x[6] !== M ||
        x[7] !== B ||
        x[8] !== D.authMode ||
        x[9] !== C ||
        x[10] !== _ ||
        x[11] !== R ||
        x[12] !== v ||
        x[13] !== z ||
        x[14] !== A ||
        x[15] !== I ||
        x[16] !== j ||
        x[17] !== F ||
        x[18] !== $ ||
        x[19] !== b ||
        x[20] !== E ||
        x[21] !== k ||
        x[22] !== w
      ) {
        let e,
          t,
          a,
          s,
          i,
          r,
          d,
          u,
          g,
          f = V($, F, D.authMode),
          Z = I || (null != z && z !== E)
        if (x[24] !== F?.modelProvider || x[25] !== $.origins) {
          let t = (0, o.yI)($.origins, "model_provider")
          ;((e = F?.modelProvider != null || (null != t && (0, o.IH)(t.name))),
            (x[24] = F?.modelProvider),
            (x[25] = $.origins),
            (x[26] = e))
        } else e = x[26]
        let H = e
        x[27] !== v || x[28] !== j
          ? ((t = async (e) => {
              P.current ||
                ((P.current = !0),
                N(!0),
                q(null),
                await e()
                  .catch((e) => {
                    q(e instanceof ec ? e.reason : "save")
                  })
                  .then(async () => {
                    for (let e of j
                      .getQueryCache()
                      .findAll({ queryKey: ["config"], predicate: (e) => e.queryKey[2] === v }))
                      (0, m.y)(j, e.queryKey)
                    await j.invalidateQueries({ queryKey: ["config", "gateways", v], exact: !0 })
                  })
                  .finally(() => {
                    ;((P.current = !1), N(!1))
                  }))
            }),
            (x[27] = v),
            (x[28] = j),
            (x[29] = t))
          : (t = x[29])
        let Q = t,
          X = null
        if ("busy" === R) {
          let e
          ;(x[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.error.busy",
                defaultMessage: "Finish running chats before changing sign-in",
                description: "Changing provider sign-in is blocked while chats are running",
              })),
              (x[30] = e))
            : (e = x[30]),
            (X = e))
        } else if ("managed" === R) {
          let e
          ;(x[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.error.managed",
                defaultMessage: "Your organization manages this setting",
                description: "A managed configuration prevented the gateway change",
              })),
              (x[31] = e))
            : (e = x[31]),
            (X = e))
        } else if (null != R) {
          let e
          ;(x[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.gateways.error.save",
                defaultMessage: "Couldn't finish saving. Settings have been refreshed; review them and try again.",
                description: "Gateway save failed, possibly because the config version changed or an auth step failed",
              })),
              (x[32] = e))
            : (e = x[32]),
            (X = e))
        }
        let J = null
        if (null != X) {
          let e
          ;(x[33] !== X
            ? ((e = (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: X })),
              (x[33] = X),
              (x[34] = e))
            : (e = x[34]),
            (J = e))
        }
        ;(x[35] !== B || x[36] !== v || x[37] !== z || x[38] !== Q || x[39] !== b || x[40] !== E || x[41] !== H
          ? ((a = (e) => {
              e !== E &&
                Q(async () => {
                  if (H) throw new ec("managed")
                  ;(null == z && b.set(eI, v, E),
                    await eu(b, v, [{ keyPath: "model_provider", value: e, mergeStrategy: "replace" }]),
                    B.reset())
                })
            }),
            (x[35] = B),
            (x[36] = v),
            (x[37] = z),
            (x[38] = Q),
            (x[39] = b),
            (x[40] = E),
            (x[41] = H),
            (x[42] = a))
          : (a = x[42]),
          x[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
                ;(W(), S("new"))
              }),
              (i = (e) => {
                ;(W(), S(e))
              }),
              (x[43] = s),
              (x[44] = i))
            : ((s = x[43]), (i = x[44])),
          x[45] !== B || x[46] !== v || x[47] !== A || x[48] !== Q || x[49] !== b || x[50] !== E || x[51] !== k
            ? ((r = () => {
                Q(async () => {
                  if (
                    await (async function (e, t, a) {
                      if (ef.appServices?.appServerLifecycle == null) throw new ec("save")
                      ;(await ef.appServices.appServerLifecycle.restart(t), a?.())
                      let n = (0, eo.V)(e, t),
                        { account: s, requiresOpenaiAuth: i } = await n.getAccount(),
                        r = i && s?.type !== "chatgpt" && s?.type !== "apiKey"
                      if (!r) {
                        let a = await n.sendRequest("config/read", { includeLayers: !0, cwd: null }),
                          s = (0, eg.Y$)(a.config),
                          i = (0, o.yI)(a.origins, "model")
                        if (null == i || !(0, o.IH)(i.name)) {
                          let a = [],
                            i = null
                          do {
                            let e = await n.sendRequest(
                              "model/list",
                              { cursor: i, includeHidden: !0 },
                              { timeoutMs: 3e4 },
                            )
                            ;(a.push(...e.data), (i = e.nextCursor))
                          } while (null != i)
                          let r = a.find((e) => e.isDefault)
                          null == r ||
                            a.some((e) => e.model === s.model) ||
                            (await eu(
                              e,
                              t,
                              (0, eg.pd)(
                                r.model,
                                r.defaultReasoningEffort,
                                "string" == typeof s.profile ? s.profile : null,
                              ).edits,
                            ))
                        }
                        await n.clearPrewarmedThreads()
                      }
                      for (let a of [
                        ...e.queryClient
                          .getQueryCache()
                          .findAll({ queryKey: ["config"], predicate: (e) => e.queryKey[2] === t })
                          .map((e) => e.queryKey),
                        [...em.Od, t],
                        [...ep.$, t],
                      ])
                        (await e.queryClient.cancelQueries({ queryKey: a }), (0, m.y)(e.queryClient, a))
                      return r
                    })(b, v, () => {
                      ;(b.set(eI, v, E), b.set(eP, v, !1))
                    })
                  )
                    return void (v === y.fI ? await A("/login") : L(!0))
                  let e = await k.refetch({ throwOnError: !0 })
                  if (null == e.data) throw new ec("save")
                  let t = e.data,
                    a = t.requirements?.modelProvider ?? t.response.config.model_provider ?? "openai"
                  "openai" !== a &&
                    V(t.response, t.requirements, t.authMode).some((e) => e.id === a) &&
                    (await B.run(() => ex(b, v, t.response.config), eT(t)))
                })
              }),
              (x[45] = B),
              (x[46] = v),
              (x[47] = A),
              (x[48] = Q),
              (x[49] = b),
              (x[50] = E),
              (x[51] = k),
              (x[52] = r))
            : (r = x[52]),
          x[53] !== B || x[54] !== v || x[55] !== $.config || x[56] !== b
            ? ((d = () => {
                P.current ||
                  ((P.current = !0),
                  N(!0),
                  q(null),
                  B.run(() => ex(b, v, $.config)).finally(() => {
                    ;((P.current = !1), N(!1))
                  }))
              }),
              (x[53] = B),
              (x[54] = v),
              (x[55] = $.config),
              (x[56] = b),
              (x[57] = d))
            : (d = x[57]),
          x[58] !== k
            ? ((u = () => {
                ;(L(!1), k.refetch())
              }),
              (x[58] = k),
              (x[59] = u))
            : (u = x[59]),
          x[60] !== K || x[61] !== v || x[62] !== u
            ? ((g = (0, n.jsx)(p.$, { hostId: v, open: K, onOpenChange: L, onAuthenticated: u })),
              (x[60] = K),
              (x[61] = v),
              (x[62] = u),
              (x[63] = g))
            : (g = x[63]),
          (h = (0, n.jsxs)(eN, {
            gateways: f,
            selectedProvider: E,
            selectionManaged: H,
            busy: M,
            error: null == _ ? J : null,
            testResult: B.result,
            restartRequired: Z,
            onSelect: a,
            onAdd: s,
            onEdit: i,
            onRestart: r,
            onTest: d,
            children: [
              g,
              null != _
                ? (0, n.jsx)(
                    Y,
                    {
                      gateway: "new" === _ ? void 0 : _,
                      existingTypes: f.map(eO),
                      discovery: C.data ?? void 0,
                      discoveryFailed: C.isError,
                      supportsAwsCredentials: !C.isSuccess || null != C.data,
                      supportsAccessKeys: (0, l.JF)(w, "bedrockAccessKeysLogin"),
                      busy: M,
                      error: J,
                      onChange: W,
                      onClose: () => {
                        ;(S(null), W())
                      },
                      isSelected: "new" !== _ && _.id === E,
                      onDelete:
                        "new" === _
                          ? void 0
                          : () => {
                              Q(async () => {
                                if (_.managed || _.id === E) throw new ec("managed")
                                ;(await eu(b, v, [{ keyPath: G(_.id), value: null, mergeStrategy: "replace" }]),
                                  S(null))
                              })
                            },
                      onSave: (e) => {
                        Q(async () => {
                          if (H && ("apiKey" === e.auth || "accessKeys" === e.auth)) throw new ec("managed")
                          let t = "custom" === e.type ? null : e.type,
                            a = "new" === _ ? t : _.id,
                            n = await (async function (e, t, a, n, s) {
                              let i,
                                r = (0, eo.V)(e, t),
                                l = "custom" !== n.type && ("apiKey" === n.auth || "accessKeys" === n.auth),
                                d =
                                  "custom" !== n.type &&
                                  "environment" === n.auth &&
                                  ("bedrockApiKey" === s || "bedrockAccessKeys" === s)
                              ;(l || d) &&
                                (await (async function (e, t) {
                                  let a = (0, eo.V)(e, t),
                                    n = null
                                  do {
                                    let e = await a.sendRequest("thread/loaded/list", { cursor: n, limit: 100 })
                                    if (
                                      (
                                        await Promise.all(
                                          e.data.map((e) =>
                                            a.sendRequest("thread/read", { threadId: e, includeTurns: !1 }),
                                          ),
                                        )
                                      ).some(({ thread: e }) => "active" === e.status.type)
                                    )
                                      throw new ec("busy")
                                    n = e.nextCursor
                                  } while (null != n)
                                })(e, t))
                              let c = await (0, ed.W9)(e, e.queryClient, t, null, !0),
                                u =
                                  a ??
                                  (function (e, t) {
                                    let a =
                                        t
                                          .trim()
                                          .toLowerCase()
                                          .replace(/[^a-z0-9]+/g, "-")
                                          .replace(/^-+|-+$/g, "") || "gateway",
                                      n = new Set([...O, ...e]),
                                      s = a,
                                      i = 2
                                    for (; n.has(s);) s = `${a}-${i++}`
                                    return s
                                  })(Object.keys(T(c.config.model_providers)), n.name)
                              if (null == a) {
                                let e = (0, o.py)(c.layers),
                                  t = null == e ? null : (0, o.rg)(e.name)
                                i = null != e && null != t ? { filePath: t, expectedVersion: e.version } : null
                              }
                              if ((await eu(e, t, U(u, n), i), l)) {
                                "apiKey" === n.auth
                                  ? await r.sendRequest("account/login/start", {
                                      type: "amazonBedrock",
                                      apiKey: n.apiKey,
                                      region: n.region.trim(),
                                    })
                                  : await r.sendRequest("account/login/start", {
                                      type: "amazonBedrockAccessKeys",
                                      accessKeyId: n.accessKeyId,
                                      secretAccessKey: n.secretAccessKey,
                                      sessionToken: n.sessionToken.trim() || null,
                                      region: n.region.trim(),
                                    })
                                let a = [...U(u, n), { keyPath: "model_provider", value: u, mergeStrategy: "replace" }]
                                ;("amazon-bedrock" !== u &&
                                  a.push({
                                    keyPath: "model_providers.amazon-bedrock",
                                    value: T(T((0, o.py)(c.layers)?.config).model_providers)["amazon-bedrock"] ?? null,
                                    mergeStrategy: "replace",
                                  }),
                                  await eu(e, t, a))
                              } else
                                d &&
                                  (await r.sendRequest("account/logout", void 0),
                                  await eu(e, t, [
                                    {
                                      keyPath: "model_providers",
                                      value: T((0, o.py)(c.layers)?.config).model_providers ?? {},
                                      mergeStrategy: "replace",
                                    },
                                    ...U(u, n),
                                    {
                                      keyPath: "model_provider",
                                      value: c.config.model_provider,
                                      mergeStrategy: "replace",
                                    },
                                  ]))
                              return l || d || c.config.model_provider === u
                            })(b, v, a, e, D.authMode)
                          ;((a === E || "apiKey" === e.auth || "accessKeys" === e.auth) && B.reset(),
                            n && b.set(eP, v, !0),
                            S(null))
                        })
                      },
                    },
                    "new" === _ ? "new" : _.id,
                  )
                : null,
            ],
          })),
          (x[5] = K),
          (x[6] = M),
          (x[7] = B),
          (x[8] = D.authMode),
          (x[9] = C),
          (x[10] = _),
          (x[11] = R),
          (x[12] = v),
          (x[13] = z),
          (x[14] = A),
          (x[15] = I),
          (x[16] = j),
          (x[17] = F),
          (x[18] = $),
          (x[19] = b),
          (x[20] = E),
          (x[21] = k),
          (x[22] = w),
          (x[23] = h))
      } else h = x[23]
      return h
    }
    function eO(e) {
      return e.type
    }
    function eT(e) {
      let t = e?.requirements?.modelProvider ?? e?.response.config.model_provider ?? "openai"
      return JSON.stringify([
        t,
        T(e?.response.config.model_providers)[t],
        T(e?.requirements?.modelProviders)[t],
        e?.response.config.model,
        e?.authMode,
      ])
    }
  },
  jxU8(e, t, a) {
    a.d(t, { P: () => f, Y: () => h })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      l = a("bJfu"),
      o = a("qbQ6"),
      d = a("GK7D"),
      c = a("PkPj"),
      u = a("DiyT"),
      g = a("ibLK"),
      m = a("V8uZ"),
      p = a("oFmV")
    function f(e) {
      let t,
        a,
        f,
        h,
        y,
        x,
        v,
        b,
        w,
        j,
        A,
        k,
        C,
        _,
        S,
        M,
        N,
        K,
        L,
        z,
        I,
        P,
        R,
        q,
        E,
        B,
        O,
        T,
        V,
        W,
        D,
        $,
        U,
        G,
        F,
        Z,
        H,
        Q,
        Y,
        X,
        J,
        ee,
        et,
        ea,
        en = (0, s.c)(120)
      en[0] !== e
        ? (({
            title: K,
            asset: a,
            backSlot: f,
            subtitle: C,
            children: h,
            fullWidth: S,
            contentClassName: x,
            subtitleClassName: _,
            action: t,
            toolbarActions: L,
            stickyControls: k,
            footer: b,
            embedded: M,
            density: v,
            scrollResetKey: A,
            containTouchOverscroll: N,
            ref: w,
            className: y,
            ...j
          } = e),
          (en[0] = e),
          (en[1] = t),
          (en[2] = a),
          (en[3] = f),
          (en[4] = h),
          (en[5] = y),
          (en[6] = x),
          (en[7] = v),
          (en[8] = b),
          (en[9] = w),
          (en[10] = j),
          (en[11] = A),
          (en[12] = k),
          (en[13] = C),
          (en[14] = _),
          (en[15] = S),
          (en[16] = M),
          (en[17] = N),
          (en[18] = K),
          (en[19] = L))
        : ((t = en[1]),
          (a = en[2]),
          (f = en[3]),
          (h = en[4]),
          (y = en[5]),
          (x = en[6]),
          (v = en[7]),
          (b = en[8]),
          (w = en[9]),
          (j = en[10]),
          (A = en[11]),
          (k = en[12]),
          (C = en[13]),
          (_ = en[14]),
          (S = en[15]),
          (M = en[16]),
          (N = en[17]),
          (K = en[18]),
          (L = en[19]))
      let es = void 0 !== S && S,
        ei = void 0 !== M && M,
        er = void 0 !== N && N,
        el = v ?? "default",
        eo = (0, r.useRef)(null),
        ed = (0, r.useRef)(null),
        ec = er && !ei && !1
      ;((et = (0, s.c)(4)),
        (ea = (0, g.U)(ec ? "(pointer: coarse)" : null)),
        et[0] !== ea || et[1] !== ed
          ? ((J = () => {
              let e = ed.current
              if (!ea || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let a = e.closest("[data-app-shell-frame]") ?? e,
                n = e.closest("[data-app-shell-main-surface]"),
                s = null,
                i = 0,
                r = () => {
                  s = null
                },
                l = (t) => {
                  let a = t.touches[0]
                  if (1 !== t.touches.length || null == a) return void r()
                  let l = t.composedPath().includes(e),
                    o = t.target,
                    d =
                      o instanceof Element &&
                      ((o.contains(e) && n?.contains(o)) || null != o.closest("[data-app-shell-main-titlebar]"))
                  l || d ? ((s = { x: a.clientX, y: a.clientY, inPanel: l }), (i = a.clientY)) : r()
                },
                o = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n || null == s) return void r()
                  let l = n.clientY > i
                  if (
                    ((i = n.clientY),
                    !(!t.cancelable || !l || n.clientY - s.y <= Math.abs(n.clientX - s.x)) &&
                      (!s.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let n of t.composedPath()) {
                      if (n === e || n === a) break
                      if (
                        n instanceof HTMLElement &&
                        n.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(n).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                d = { capture: !0, passive: !0 }
              return (
                a.addEventListener("touchstart", l, d),
                a.addEventListener("touchmove", o, { capture: !0, passive: !1 }),
                a.addEventListener("touchend", r, d),
                a.addEventListener("touchcancel", r, d),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    a.removeEventListener("touchstart", l, !0),
                    a.removeEventListener("touchmove", o, !0),
                    a.removeEventListener("touchend", r, !0),
                    a.removeEventListener("touchcancel", r, !0))
                }
              )
            }),
            (ee = [ea, ed]),
            (et[0] = ea),
            (et[1] = ed),
            (et[2] = J),
            (et[3] = ee))
          : ((J = et[2]), (ee = et[3])),
        (0, r.useEffect)(J, ee))
      let [eu, eg] = (0, r.useState)(!1),
        em = (0, r.useContext)(p.S),
        ep = !!em?.slateLayout && !ei
      ;(0, g.U)(o.mk)
      let ef = ep && !1,
        eh = em?.targetId ?? null,
        ey = em?.targetText ?? null,
        ex = em?.navigationKey ?? null
      ;(en[20] !== A
        ? ((z = () => {
            null != A && null != ed.current && (ed.current.scrollTop = 0)
          }),
          (I = [A]),
          (en[20] = A),
          (en[21] = z),
          (en[22] = I))
        : ((z = en[21]), (I = en[22])),
        (0, r.useLayoutEffect)(z, I),
        en[23] !== eh || en[24] !== ey
          ? ((P = () => {
              let e, t
              if (null == eh && null == ey) return
              let a = eo.current
              if (null == a) return
              let n = () => {
                  if (null == ey) return null == eh ? null : document.getElementById(eh)
                  let e = ey.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    n = null
                  for (let s of a.querySelectorAll("*")) {
                    let a = (s.getAttribute("placeholder") ?? s.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == a ||
                      !t.every((e) => a.includes(e)) ||
                      null != s.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let i = a.includes(e)
                    ;(null == n || (i && !n.isContiguous) || (i === n.isContiguous && a.length <= n.text.length)) &&
                      (n = { element: s, isContiguous: i, text: a })
                  }
                  return n?.element ?? null
                },
                s = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ey)) return
                  let n = "true" === document.documentElement.dataset.reducedMotion,
                    s = t.closest("button"),
                    i = s?.parentElement ?? t
                  if (null == s) {
                    let e = t.closest("section")
                    for (let n = t.parentElement; null != n && n !== e && n !== a; n = n.parentElement)
                      if (
                        Array.from(n.children).some(
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
                        i = n
                        break
                      }
                  }
                  e = i.animate?.(
                    n
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
                i =
                  null == ey
                    ? new ResizeObserver(() => {
                        let e = n()
                        null != e && s(e)
                      })
                    : null,
                r = () => {
                  for (let e of (t?.disconnect(), i?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    a.ownerDocument.removeEventListener(e, r)
                }
              if (null != i)
                for (let e of (i.observe(a), ["wheel", "pointerdown", "keydown"]))
                  a.ownerDocument.addEventListener(e, r, { passive: !0 })
              let l = n()
              return (
                null != l
                  ? s(l)
                  : (t = new MutationObserver(() => {
                      let e = n()
                      null != e && (s(e), t?.disconnect())
                    })).observe(null == ey ? document.body : a, { childList: !0, subtree: !0 }),
                () => {
                  ;(r(), e?.cancel())
                }
              )
            }),
            (en[23] = eh),
            (en[24] = ey),
            (en[25] = P))
          : (P = en[25]),
        en[26] !== ex || en[27] !== eh || en[28] !== ey
          ? ((R = [ex, eh, ey]), (en[26] = ex), (en[27] = eh), (en[28] = ey), (en[29] = R))
          : (R = en[29]),
        (0, r.useLayoutEffect)(P, R),
        en[30] !== L
          ? ((q =
              null == L
                ? null
                : (0, n.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: L,
                  })),
            (en[30] = L),
            (en[31] = q))
          : (q = en[31]),
        en[32] !== f || en[33] !== q
          ? ((E = (0, n.jsxs)(n.Fragment, { children: [f, q] })), (en[32] = f), (en[33] = q), (en[34] = E))
          : (E = en[34]))
      let ev = E,
        eb = ei ? "default" : "settings"
      "compact" === el && (eb = "settingsCompact")
      let ew = "compact" === v && "[--settings-section-gap:--spacing(5.5)]",
        ej =
          "default" === v &&
          (ei && !es ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = es ? null : ei ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(en[35] !== x || en[36] !== k || en[37] !== ew || en[38] !== ej || en[39] !== eA || en[40] !== ep
        ? ((B = (0, i.A)(
            "group/settings mx-auto flex w-full flex-col",
            ew,
            ej,
            eA,
            ep && ["px-panel pb-panel", null == k && "pt-panel"],
            x,
          )),
          (en[35] = x),
          (en[36] = k),
          (en[37] = ew),
          (en[38] = ej),
          (en[39] = eA),
          (en[40] = ep),
          (en[41] = B))
        : (B = en[41]),
        en[42] !== t ||
        en[43] !== a ||
        en[44] !== el ||
        en[45] !== ei ||
        en[46] !== eb ||
        en[47] !== C ||
        en[48] !== _ ||
        en[49] !== K ||
        en[50] !== ep
          ? ((O =
              null == K || ep
                ? null
                : (0, n.jsx)("div", {
                    className: (0, i.A)("compact" === el && "pb-5.5", "default" === el && (ei ? "pb-panel" : "pb-8")),
                    children: (0, n.jsx)(d.z, {
                      actions: t,
                      asset: a,
                      subtitle: C,
                      subtitleClassName: (0, i.A)("text-balance", _),
                      title: K,
                      variant: eb,
                    }),
                  })),
            (en[42] = t),
            (en[43] = a),
            (en[44] = el),
            (en[45] = ei),
            (en[46] = eb),
            (en[47] = C),
            (en[48] = _),
            (en[49] = K),
            (en[50] = ep),
            (en[51] = O))
          : (O = en[51]),
        en[52] !== k
          ? ((T = null == k ? null : (0, n.jsx)(c.J1, { className: "top-0 pt-panel pb-2", children: k })),
            (en[52] = k),
            (en[53] = T))
          : (T = en[53]))
      let ek =
          ei && !es
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eC = null != k && "pt-5"
      ;(en[54] !== ek || en[55] !== eC
        ? ((V = (0, i.A)("flex flex-col", ek, eC)), (en[54] = ek), (en[55] = eC), (en[56] = V))
        : (V = en[56]),
        en[57] !== h || en[58] !== V
          ? ((W = (0, n.jsx)("div", { className: V, children: h })), (en[57] = h), (en[58] = V), (en[59] = W))
          : (W = en[59]),
        en[60] !== el || en[61] !== B || en[62] !== O || en[63] !== T || en[64] !== W
          ? ((D = (0, n.jsxs)("div", { ref: eo, className: B, "data-density": el, children: [O, T, W] })),
            (en[60] = el),
            (en[61] = B),
            (en[62] = O),
            (en[63] = T),
            (en[64] = W),
            (en[65] = D))
          : (D = en[65]))
      let e_ = D
      if (ei) {
        let e, t, a
        return (
          en[66] !== y ? ((e = (0, i.A)("flex min-h-0 flex-col", y)), (en[66] = y), (en[67] = e)) : (e = en[67]),
          en[68] !== f || en[69] !== ev || en[70] !== L
            ? ((t =
                null != f || null != L
                  ? (0, n.jsx)("div", { className: "flex items-center pb-panel", children: ev })
                  : null),
              (en[68] = f),
              (en[69] = ev),
              (en[70] = L),
              (en[71] = t))
            : (t = en[71]),
          en[72] !== e_ || en[73] !== w || en[74] !== j || en[75] !== e || en[76] !== t
            ? ((a = (0, n.jsxs)("div", { ref: w, className: e, ...j, children: [t, e_] })),
              (en[72] = e_),
              (en[73] = w),
              (en[74] = j),
              (en[75] = e),
              (en[76] = t),
              (en[77] = a))
            : (a = en[77]),
          a
        )
      }
      ;(en[78] !== y
        ? (($ = (0, i.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            y,
          )),
          (en[78] = y),
          (en[79] = $))
        : ($ = en[79]),
        en[80] !== K || en[81] !== ef
          ? ((U = ef
              ? (0, n.jsx)(l.G.Header, {
                  divider: !1,
                  children: (0, n.jsx)(l.G.HeaderToolbar, {
                    children: (0, n.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: K,
                    }),
                  }),
                })
              : null),
            (en[80] = K),
            (en[81] = ef),
            (en[82] = U))
          : (U = en[82]),
        en[83] !== f || en[84] !== ev || en[85] !== L || en[86] !== ep
          ? ((G =
              ep && null == f && null == L
                ? null
                : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: ev,
                    }),
                  })),
            (en[83] = f),
            (en[84] = ev),
            (en[85] = L),
            (en[86] = ep),
            (en[87] = G))
          : (G = en[87]))
      let eS = ec || void 0,
        eM = ef ? eu : void 0,
        eN = ef || void 0
      en[88] !== ef
        ? ((F = ef ? (e) => eg(e.currentTarget.scrollTop > 0) : void 0), (en[88] = ef), (en[89] = F))
        : (F = en[89])
      let eK = !ep && "p-panel"
      return (
        en[90] !== eK
          ? ((Z = (0, i.A)("flex-1 scrollbar-stable overflow-y-auto", eK)), (en[90] = eK), (en[91] = Z))
          : (Z = en[91]),
        en[92] !== t ||
        en[93] !== a ||
        en[94] !== el ||
        en[95] !== es ||
        en[96] !== C ||
        en[97] !== _ ||
        en[98] !== K ||
        en[99] !== ef ||
        en[100] !== ep
          ? ((H =
              null == K || !ep || ef
                ? null
                : (0, n.jsx)(u.g, {
                    className: es ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        null == a ? null : (0, n.jsx)("div", { className: "flex", children: a }),
                        (0, n.jsx)("h1", {
                          className: (0, i.A)("text-default", "compact" === el ? "heading-lg" : "heading-xl"),
                          children: K,
                        }),
                        null == C
                          ? null
                          : (0, n.jsx)("div", {
                              className: (0, i.A)("text-base leading-6 text-balance text-secondary", _),
                              children: C,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, n.jsx)(u.T, { search: null, actions: t }),
                  })),
            (en[92] = t),
            (en[93] = a),
            (en[94] = el),
            (en[95] = es),
            (en[96] = C),
            (en[97] = _),
            (en[98] = K),
            (en[99] = ef),
            (en[100] = ep),
            (en[101] = H))
          : (H = en[101]),
        en[102] !== e_ ||
        en[103] !== eS ||
        en[104] !== eM ||
        en[105] !== eN ||
        en[106] !== F ||
        en[107] !== Z ||
        en[108] !== H
          ? ((Q = (0, n.jsxs)("div", {
              ref: ed,
              "data-contain-touch-overscroll": eS,
              "data-app-shell-page-scrolled": eM,
              "data-settings-mobile-header": eN,
              onScroll: F,
              className: Z,
              children: [H, e_],
            })),
            (en[102] = e_),
            (en[103] = eS),
            (en[104] = eM),
            (en[105] = eN),
            (en[106] = F),
            (en[107] = Z),
            (en[108] = H),
            (en[109] = Q))
          : (Q = en[109]),
        en[110] !== b
          ? ((Y =
              null != b &&
              (0, n.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: b,
              })),
            (en[110] = b),
            (en[111] = Y))
          : (Y = en[111]),
        en[112] !== w ||
        en[113] !== j ||
        en[114] !== $ ||
        en[115] !== U ||
        en[116] !== G ||
        en[117] !== Q ||
        en[118] !== Y
          ? ((X = (0, n.jsxs)("div", { ref: w, className: $, ...j, children: [U, G, Q, Y] })),
            (en[112] = w),
            (en[113] = j),
            (en[114] = $),
            (en[115] = U),
            (en[116] = G),
            (en[117] = Q),
            (en[118] = Y),
            (en[119] = X))
          : (X = en[119]),
        X
      )
    }
    function h(e) {
      let t,
        a,
        i = (0, s.c)(8),
        { children: r, navigationKey: l, slateLayout: o, targetId: d, targetText: c } = e,
        u = void 0 !== o && o,
        g = void 0 === c ? null : c
      return (
        i[0] !== l || i[1] !== u || i[2] !== d || i[3] !== g
          ? ((t =
              null != d || null != g || u ? { navigationKey: l, slateLayout: u, targetId: d, targetText: g } : null),
            (i[0] = l),
            (i[1] = u),
            (i[2] = d),
            (i[3] = g),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== r || i[6] !== t
          ? ((a = (0, n.jsx)(p.S.Provider, { value: t, children: r })), (i[5] = r), (i[6] = t), (i[7] = a))
          : (a = i[7]),
        a
      )
    }
  },
  oFmV(e, t, a) {
    let n = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { S: n })
  },
  BSnr(e, t, a) {
    a.d(t, { X: () => r })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57")
    let r = Object.assign(
      function (e) {
        let t,
          a,
          r = (0, s.c)(6),
          { children: l, id: o, className: d } = e
        return (
          r[0] !== d ? ((t = (0, i.A)("flex flex-col", d)), (r[0] = d), (r[1] = t)) : (t = r[1]),
          r[2] !== l || r[3] !== o || r[4] !== t
            ? ((a = (0, n.jsx)("section", { id: o, className: t, children: l })),
              (r[2] = l),
              (r[3] = o),
              (r[4] = t),
              (r[5] = a))
            : (a = r[5]),
          a
        )
      },
      {
        Header: function (e) {
          let t,
            a,
            r,
            l,
            o,
            d,
            c,
            u = (0, s.c)(32),
            {
              title: g,
              subtitle: m,
              actions: p,
              actionsAlignment: f,
              className: h,
              size: y,
              titleGap: x,
              spacing: v,
              subtitlePlacement: b,
              subtitleWrap: w,
            } = e,
            j = void 0 === y ? "default" : y,
            A = void 0 === v ? "default" : v,
            k = void 0 === b ? "below-title" : b,
            C = void 0 === w ? "balance" : w,
            _ = null != g,
            S = null != m,
            M = null != p,
            N = "compact" === j
          u[0] !== N || u[1] !== m || u[2] !== k || u[3] !== C
            ? ((t = m
                ? (0, n.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === C ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === k && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = N),
              (u[1] = m),
              (u[2] = k),
              (u[3] = C),
              (u[4] = t))
            : (t = u[4])
          let K = t
          if (!_ && !S && !M) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let L = "below-header" === k ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            z = S && "compact" === A && "pb-2",
            I = S && "compact" !== A && "pb-3"
          u[6] !== h || u[7] !== S || u[8] !== N || u[9] !== A || u[10] !== L || u[11] !== z || u[12] !== I
            ? ((a = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                L,
                z,
                I,
                !S && (0, i.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                S && N && "items-center",
                S && !N && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = S),
              (u[8] = N),
              (u[9] = A),
              (u[10] = L),
              (u[11] = z),
              (u[12] = I),
              (u[13] = a))
            : (a = u[13])
          let P =
            "none" === (void 0 === x ? "default" : x)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== P ? ((r = (0, i.A)("flex min-w-0 flex-1 flex-col", P)), (u[14] = P), (u[15] = r)) : (r = u[15]),
            u[16] !== S || u[17] !== j || u[18] !== g
              ? ((l = g
                  ? (0, n.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && S)) && "text-lg",
                        ("base" === j || ("default" === j && !S)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (u[16] = S),
                (u[17] = j),
                (u[18] = g),
                (u[19] = l))
              : (l = u[19]))
          let R = "below-title" === k ? K : null
          ;(u[20] !== r || u[21] !== l || u[22] !== R
            ? ((o = (0, n.jsxs)("div", { className: r, children: [l, R] })),
              (u[20] = r),
              (u[21] = l),
              (u[22] = R),
              (u[23] = o))
            : (o = u[23]),
            u[24] !== p || u[25] !== f
              ? ((d = p
                  ? (0, n.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === f && "self-end"),
                      children: p,
                    })
                  : null),
                (u[24] = p),
                (u[25] = f),
                (u[26] = d))
              : (d = u[26]))
          let q = "below-header" === k ? K : null
          return (
            u[27] !== a || u[28] !== o || u[29] !== d || u[30] !== q
              ? ((c = (0, n.jsxs)("div", { className: a, children: [o, d, q] })),
                (u[27] = a),
                (u[28] = o),
                (u[29] = d),
                (u[30] = q),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let t,
            a,
            r = (0, s.c)(5),
            { children: l, className: o } = e
          return (
            r[0] !== o ? ((t = (0, i.A)("flex flex-col gap-1.5", o)), (r[0] = o), (r[1] = t)) : (t = r[1]),
            r[2] !== l || r[3] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: l })), (r[2] = l), (r[3] = t), (r[4] = a))
              : (a = r[4]),
            a
          )
        },
        Footer: function (e) {
          let t,
            a,
            r = (0, s.c)(6),
            { children: l, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            r[0] !== o || r[1] !== c
              ? ((t = (0, i.A)("text-balance text-secondary", c, o)), (r[0] = o), (r[1] = c), (r[2] = t))
              : (t = r[2]),
            r[3] !== l || r[4] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: l })), (r[3] = l), (r[4] = t), (r[5] = a))
              : (a = r[5]),
            a
          )
        },
      },
    )
  },
  bZug(e, t, a) {
    a.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      l = a("HZfM"),
      o = a("GO7r")
    function d(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        a,
        r,
        l,
        o,
        d,
        c,
        u = (0, s.c)(24),
        {
          label: g,
          labelId: m,
          labelSizing: p,
          labelWeight: f,
          description: h,
          descriptionId: y,
          icon: x,
          variant: v,
          verticalAlignment: b,
        } = e,
        w = "start" === b ? "items-start" : "items-center",
        j = "grow" === (void 0 === p ? "grow" : p) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, i.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== x
          ? ((a = null != x ? (0, n.jsx)("span", { className: "flex shrink-0", children: x }) : null),
            (u[3] = x),
            (u[4] = a))
          : (a = u[4]))
      let A = "featured" === v && "text-base",
        k = "recommendation" === v && "text-[13px] leading-[18.571429px]",
        C = "featured" !== v && "recommendation" !== v && "text-sm",
        _ = "nested" !== v && "medium" === (void 0 === f ? "medium" : f) && "font-medium"
      return (
        u[5] !== _ || u[6] !== A || u[7] !== k || u[8] !== C
          ? ((r = (0, i.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              k,
              C,
              _,
            )),
            (u[5] = _),
            (u[6] = A),
            (u[7] = k),
            (u[8] = C),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== g || u[11] !== m || u[12] !== r
          ? ((l = (0, n.jsx)("div", { id: m, className: r, children: g })),
            (u[10] = g),
            (u[11] = m),
            (u[12] = r),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== h || u[15] !== y
          ? ((o = h
              ? (0, n.jsx)("div", {
                  id: y,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = y),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== l || u[18] !== o
          ? ((d = (0, n.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [l, o] })),
            (u[17] = l),
            (u[18] = o),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== a
          ? ((c = (0, n.jsxs)("div", { className: t, children: [a, d] })),
            (u[20] = d),
            (u[21] = t),
            (u[22] = a),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    a.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            a,
            r,
            l,
            o,
            d,
            c = (0, s.c)(18),
            { children: u, compactLabelInset: g, label: m, valueAlignment: p, variant: f } = e,
            h = void 0 === g || g,
            y = void 0 === p ? "start" : p,
            x = void 0 === f ? "default" : f,
            v =
              "compact" === x
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== v ? ((t = (0, i.A)("grid items-center", v)), (c[0] = v), (c[1] = t)) : (t = c[1]),
            c[2] !== h || c[3] !== x
              ? ((a = (0, i.A)(
                  "min-w-0",
                  "compact" === x
                    ? (0, i.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = h),
                (c[3] = x),
                (c[4] = a))
              : (a = c[4]),
            c[5] !== m || c[6] !== a
              ? ((r = (0, n.jsx)("div", { className: a, children: m })), (c[5] = m), (c[6] = a), (c[7] = r))
              : (r = c[7]),
            c[8] !== y || c[9] !== x
              ? ((l = (0, i.A)(
                  "min-w-0",
                  "compact" === x
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, i.A)("break-words whitespace-normal text-sm text-default", "end" === y && "text-end"),
                )),
                (c[8] = y),
                (c[9] = x),
                (c[10] = l))
              : (l = c[10]),
            c[11] !== u || c[12] !== l
              ? ((o = (0, n.jsx)("div", { className: l, children: u })), (c[11] = u), (c[12] = l), (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== r || c[16] !== o
              ? ((d = (0, n.jsxs)("div", { className: t, children: [r, o] })),
                (c[14] = t),
                (c[15] = r),
                (c[16] = o),
                (c[17] = d))
              : (d = c[17]),
            d
          )
        },
        ic: function (e) {
          let t,
            a,
            l,
            o,
            d = (0, s.c)(35),
            {
              label: u,
              labelSizing: g,
              labelWeight: m,
              layout: p,
              description: f,
              control: h,
              controlSizing: y,
              icon: x,
              className: v,
              id: b,
              inset: w,
              size: j,
              variant: A,
              verticalAlignment: k,
            } = e,
            C = void 0 === g ? "grow" : g,
            _ = void 0 === m ? "medium" : m,
            S = void 0 === p ? "default" : p,
            M = void 0 === y ? "minimum" : y,
            N = void 0 === w || w,
            K = void 0 === j ? "default" : j,
            L = void 0 === A ? "default" : A,
            z = void 0 === k ? "center" : k,
            I = (0, r.useId)(),
            P = null != u || null != f || null != x,
            R = "function" == typeof h,
            q = R && null != u ? `${I}-label` : void 0,
            E = R && f ? `${I}-description` : void 0,
            B = N && ("split" !== S || "default" !== L) && "px-4",
            O = N && "nested" === L && "group-data-[density=form]/settings:px-5",
            T =
              "stacked" === L &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            V =
              "nested" === L &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            W = "stacked" !== L && ("start" === z ? "items-start" : "items-center"),
            D = "split" === S && "default" === L && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== v ||
            d[1] !== S ||
            d[2] !== K ||
            d[3] !== O ||
            d[4] !== T ||
            d[5] !== V ||
            d[6] !== W ||
            d[7] !== D ||
            d[8] !== B ||
            d[9] !== L
              ? ((t = (0, i.A)(
                  "@container/settings-row",
                  B,
                  O,
                  T,
                  V,
                  W,
                  D,
                  "default" === S &&
                    ("default" === L || "featured" === L || "recommendation" === L) &&
                    (0, i.A)(
                      "flex justify-between",
                      "featured" === L && (0, i.A)("gap-6", "compact" === K ? "min-h-11 py-2" : "py-4"),
                      "featured" !== L && ("compact" === K ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === L && "dark:bg-primary-ghost-hover",
                  v,
                )),
                (d[0] = v),
                (d[1] = S),
                (d[2] = K),
                (d[3] = O),
                (d[4] = T),
                (d[5] = V),
                (d[6] = W),
                (d[7] = D),
                (d[8] = B),
                (d[9] = L),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== f ||
            d[12] !== E ||
            d[13] !== P ||
            d[14] !== x ||
            d[15] !== u ||
            d[16] !== q ||
            d[17] !== C ||
            d[18] !== _ ||
            d[19] !== L ||
            d[20] !== z
              ? ((a = P
                  ? (0, n.jsx)(c, {
                      label: u,
                      labelId: q,
                      labelSizing: C,
                      labelWeight: _,
                      description: f,
                      descriptionId: E,
                      icon: x,
                      variant: L,
                      verticalAlignment: z,
                    })
                  : null),
                (d[11] = f),
                (d[12] = E),
                (d[13] = P),
                (d[14] = x),
                (d[15] = u),
                (d[16] = q),
                (d[17] = C),
                (d[18] = _),
                (d[19] = L),
                (d[20] = z),
                (d[21] = a))
              : (a = d[21]),
            d[22] !== h || d[23] !== M || d[24] !== E || d[25] !== R || d[26] !== q || d[27] !== S || d[28] !== L
              ? ((l =
                  null != h && !1 !== h
                    ? (0, n.jsx)("div", {
                        className: (0, i.A)(
                          "stacked" === L && "w-full",
                          "nested" === L && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === L &&
                            (0, i.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === M && "w-full",
                            ),
                          "default" === S &&
                            ("default" === L || "featured" === L || "recommendation" === L) &&
                            (0, i.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === M ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === M && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: R ? h({ "aria-labelledby": q, "aria-describedby": E }) : h,
                      })
                    : null),
                (d[22] = h),
                (d[23] = M),
                (d[24] = E),
                (d[25] = R),
                (d[26] = q),
                (d[27] = S),
                (d[28] = L),
                (d[29] = l))
              : (l = d[29]),
            d[30] !== b || d[31] !== t || d[32] !== a || d[33] !== l
              ? ((o = (0, n.jsxs)("div", { id: b, className: t, children: [a, l] })),
                (d[30] = b),
                (d[31] = t),
                (d[32] = a),
                (d[33] = l),
                (d[34] = o))
              : (o = d[34]),
            o
          )
        },
        jj: function (e) {
          let t,
            a = (0, s.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, n.jsx)("span", { className: "text-xs text-secondary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            a,
            r,
            o,
            u,
            g,
            m,
            p,
            f,
            h,
            y,
            x,
            v,
            b,
            w,
            j,
            A,
            k,
            C,
            _,
            S,
            M,
            N,
            K = (0, s.c)(54)
          K[0] !== e
            ? (({
                actions: t,
                actionsPlacement: y,
                ariaControls: a,
                ariaExpanded: r,
                ariaLabel: o,
                className: u,
                description: g,
                disabled: m,
                edgeRounding: x,
                icon: p,
                label: h,
                size: v,
                trailing: w,
                variant: b,
                ...f
              } = e),
              (K[0] = e),
              (K[1] = t),
              (K[2] = a),
              (K[3] = r),
              (K[4] = o),
              (K[5] = u),
              (K[6] = g),
              (K[7] = m),
              (K[8] = p),
              (K[9] = f),
              (K[10] = h),
              (K[11] = y),
              (K[12] = x),
              (K[13] = v),
              (K[14] = b),
              (K[15] = w))
            : ((t = K[1]),
              (a = K[2]),
              (r = K[3]),
              (o = K[4]),
              (u = K[5]),
              (g = K[6]),
              (m = K[7]),
              (p = K[8]),
              (f = K[9]),
              (h = K[10]),
              (y = K[11]),
              (x = K[12]),
              (v = K[13]),
              (b = K[14]),
              (w = K[15]))
          let L = void 0 === x ? "row" : x,
            z = void 0 === v ? "default" : v,
            I = void 0 === b ? "default" : b,
            P = "before-trailing" === (void 0 === y ? "end" : y) && !m && null != t && null != w,
            R = P ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          K[16] !== u || K[17] !== P || K[18] !== z || K[19] !== R || K[20] !== I
            ? ((j = (0, i.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                R,
                "empty" === I
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, i.A)(
                      "px-4 text-start",
                      "nested" === I && "min-h-10 py-0.5",
                      "nested" !== I && ("large" === z ? "py-4" : "py-3"),
                      P && "gap-2",
                      !P && ("nested" === I ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (K[16] = u),
              (K[17] = P),
              (K[18] = z),
              (K[19] = R),
              (K[20] = I),
              (K[21] = j))
            : (j = K[21])
          let q = j
          ;(K[22] !== g || K[23] !== p || K[24] !== h || K[25] !== I
            ? ((A =
                "empty" === I
                  ? (0, n.jsxs)(n.Fragment, { children: [p, h] })
                  : (0, n.jsx)(c, { label: h, description: g, icon: p, variant: I, verticalAlignment: "center" })),
              (K[22] = g),
              (K[23] = p),
              (K[24] = h),
              (K[25] = I),
              (K[26] = A))
            : (A = K[26]),
            K[27] !== w
              ? ((k =
                  null != w
                    ? (0, n.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (K[27] = w),
                (K[28] = k))
              : (k = K[28]),
            K[29] !== A || K[30] !== k
              ? ((C = (0, n.jsxs)(n.Fragment, { children: [A, k] })), (K[29] = A), (K[30] = k), (K[31] = C))
              : (C = K[31]))
          let E = C,
            B = P ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            O = "row" === L && "first:rounded-t-2xl last:rounded-b-2xl",
            T = "recommendation" === I && "dark:bg-primary-ghost-hover",
            V = !m && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            W =
              !m &&
              "recommendation" === I &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            K[32] !== B || K[33] !== O || K[34] !== T || K[35] !== V || K[36] !== W
              ? ((_ = (0, i.A)("group w-full items-center", B, O, T, V, W)),
                (K[32] = B),
                (K[33] = O),
                (K[34] = T),
                (K[35] = V),
                (K[36] = W),
                (K[37] = _))
              : (_ = K[37]),
            K[38] !== a || K[39] !== r || K[40] !== o || K[41] !== E || K[42] !== m || K[43] !== f || K[44] !== q
              ? ((S =
                  null != f.to
                    ? (0, n.jsx)(l.N_, {
                        ...f,
                        className: q,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": o,
                        "aria-disabled": m || void 0,
                        tabIndex: m ? -1 : void 0,
                        onClick: m ? d : f.onClick,
                        children: E,
                      })
                    : (0, n.jsx)("button", {
                        ...f,
                        className: q,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": o,
                        disabled: m,
                        type: "button",
                        children: E,
                      })),
                (K[38] = a),
                (K[39] = r),
                (K[40] = o),
                (K[41] = E),
                (K[42] = m),
                (K[43] = f),
                (K[44] = q),
                (K[45] = S))
              : (S = K[45]),
            K[46] !== t || K[47] !== m || K[48] !== P
              ? ((M =
                  m || null == t
                    ? null
                    : (0, n.jsx)("div", {
                        className: (0, i.A)(
                          "flex shrink-0 items-center gap-1",
                          P ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (K[46] = t),
                (K[47] = m),
                (K[48] = P),
                (K[49] = M))
              : (M = K[49]),
            K[50] !== _ || K[51] !== S || K[52] !== M
              ? ((N = (0, n.jsxs)("div", { className: _, children: [S, M] })),
                (K[50] = _),
                (K[51] = S),
                (K[52] = M),
                (K[53] = N))
              : (N = K[53]),
            N
          )
        },
        kf: function (e) {
          let t,
            a = (0, s.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, n.jsx)("span", { className: "text-tertiary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            a,
            r,
            l,
            d,
            c,
            u,
            g,
            m,
            p,
            f = (0, s.c)(43),
            {
              id: h,
              ariaLabel: y,
              autoFocus: x,
              checked: v,
              description: b,
              highlightSelected: w,
              indicator: j,
              label: A,
              name: k,
              onChange: C,
              onClick: _,
              value: S,
              variant: M,
            } = e,
            N = void 0 === w || w,
            K = void 0 === j ? "radio" : j,
            L = void 0 === M ? "default" : M
          ;(f[0] !== v || f[1] !== b || f[2] !== N || f[3] !== K || f[4] !== L
            ? ((t = (0, i.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === L &&
                  (0, i.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != b ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === L && v && N && "radio" === K && "bg-primary-soft-alpha",
                "form" === L && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === L && "items-center gap-2",
                "checkmark" === K && "after:ms-7",
              )),
              (f[0] = v),
              (f[1] = b),
              (f[2] = N),
              (f[3] = K),
              (f[4] = L),
              (f[5] = t))
            : (t = f[5]),
            f[6] !== y || f[7] !== h
              ? ((a = (0, n.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": y,
                  htmlFor: h,
                })),
                (f[6] = y),
                (f[7] = h),
                (f[8] = a))
              : (a = f[8]),
            f[9] !== K || f[10] !== L
              ? ((r = (0, i.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === K
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, i.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === L ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (f[9] = K),
                (f[10] = L),
                (f[11] = r))
              : (r = f[11]))
          let z = null != b ? `${h}-description` : void 0
          ;(f[12] !== y ||
          f[13] !== x ||
          f[14] !== v ||
          f[15] !== h ||
          f[16] !== k ||
          f[17] !== C ||
          f[18] !== _ ||
          f[19] !== r ||
          f[20] !== z ||
          f[21] !== S
            ? ((l = (0, n.jsx)("input", {
                id: h,
                className: r,
                "aria-label": y,
                "aria-describedby": z,
                autoFocus: x,
                type: "radio",
                name: k,
                value: S,
                checked: v,
                onChange: C,
                onClick: _,
              })),
              (f[12] = y),
              (f[13] = x),
              (f[14] = v),
              (f[15] = h),
              (f[16] = k),
              (f[17] = C),
              (f[18] = _),
              (f[19] = r),
              (f[20] = z),
              (f[21] = S),
              (f[22] = l))
            : (l = f[22]),
            f[23] !== v || f[24] !== K
              ? ((d = "checkmark" === K ? (0, n.jsx)(o.ALZ, { className: (0, i.A)(!v && "invisible") }) : null),
                (f[23] = v),
                (f[24] = K),
                (f[25] = d))
              : (d = f[25]))
          let I = "default" === L ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== I ? ((c = (0, i.A)("text-default", I)), (f[26] = I), (f[27] = c)) : (c = f[27]),
            f[28] !== A || f[29] !== c
              ? ((u = (0, n.jsx)("span", { className: c, children: A })), (f[28] = A), (f[29] = c), (f[30] = u))
              : (u = f[30]),
            f[31] !== b || f[32] !== h
              ? ((g =
                  null != b
                    ? (0, n.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: b,
                      })
                    : null),
                (f[31] = b),
                (f[32] = h),
                (f[33] = g))
              : (g = f[33]),
            f[34] !== u || f[35] !== g
              ? ((m = (0, n.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, g],
                })),
                (f[34] = u),
                (f[35] = g),
                (f[36] = m))
              : (m = f[36]),
            f[37] !== m || f[38] !== t || f[39] !== a || f[40] !== l || f[41] !== d
              ? ((p = (0, n.jsxs)("div", { className: t, children: [a, l, d, m] })),
                (f[37] = m),
                (f[38] = t),
                (f[39] = a),
                (f[40] = l),
                (f[41] = d),
                (f[42] = p))
              : (p = f[42]),
            p
          )
        },
      },
    )
  },
  ZEx5(e, t, a) {
    a.d(t, { t: () => l })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("bZug")
    function l(e) {
      let t,
        a,
        l,
        o = (0, s.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: g, variant: m, decoration: p } = e,
        f = void 0 === m ? "default" : m,
        h = "flat" === f || "rows" === f ? r.s : r.r,
        y = void 0 === g || g ? h : "flex flex-col",
        x = "recommendation" === f && "rounded-[20px]",
        v = "recommendation" !== f && "flat" !== f && "rows" !== f && "outlinedLarge" !== f && "rounded-2xl",
        b = "outlinedLarge" === f && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === p && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === f &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        k = "metered" === f && "ring-1 ring-inset ring-border-subtle",
        C = "secondary" === f && "bg-surface-secondary/92",
        _ = "muted" === f && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        S =
          "form" === f &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        M = "outlined" === f && "border border-subtle bg-transparent",
        N =
          "flat" === f &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        K = "input" === f && "border border-primary-outline bg-primary-soft",
        L = "recommendation" === f && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== c ||
        o[1] !== A ||
        o[2] !== k ||
        o[3] !== C ||
        o[4] !== _ ||
        o[5] !== S ||
        o[6] !== M ||
        o[7] !== N ||
        o[8] !== K ||
        o[9] !== L ||
        o[10] !== y ||
        o[11] !== x ||
        o[12] !== v ||
        o[13] !== b ||
        o[14] !== w ||
        o[15] !== j
          ? ((t = (0, i.A)(y, x, v, b, w, j, A, k, C, _, S, M, N, K, L, c)),
            (o[0] = c),
            (o[1] = A),
            (o[2] = k),
            (o[3] = C),
            (o[4] = _),
            (o[5] = S),
            (o[6] = M),
            (o[7] = N),
            (o[8] = K),
            (o[9] = L),
            (o[10] = y),
            (o[11] = x),
            (o[12] = v),
            (o[13] = b),
            (o[14] = w),
            (o[15] = j),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== f
          ? ((a =
              "default" === f || "metered" === f
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (o[17] = f),
            (o[18] = a))
          : (a = o[18]),
        o[19] !== d || o[20] !== t || o[21] !== a
          ? ((l = (0, n.jsx)("div", { className: t, style: a, children: d })),
            (o[19] = d),
            (o[20] = t),
            (o[21] = a),
            (o[22] = l))
          : (l = o[22]),
        l
      )
    }
  },
  D1V6(e, t, a) {
    var n = a("gXxh"),
      s = a("ReGc"),
      i = a("AAtN")
    let r = "/codex/desktop-auth",
      l = "codex_streamlined_login"
    function o(e, t, a, n, s, i, r) {
      ;(t && e.searchParams.set("allowed_workspace_id", t),
        a && e.searchParams.set("codex_app_version", a),
        n && e.searchParams.set("current_workspace_id", n),
        s && e.searchParams.set("login_hint", s),
        i && (e.searchParams.set("source_surface_stable_id", i), r && e.searchParams.set("codex_origin_stable_id", i)))
    }
    a.d(
      t,
      {},
      {
        Z: function ({
          allowedWorkspaceId: e,
          authUrl: t,
          codexAppVersion: a,
          currentWorkspaceId: s,
          desktopAuthOrigin: d,
          loginHint: c,
          sourceSurfaceStableId: u = n.StableID.get(i.E),
          includeCodexOriginStableId: g = !1,
          useDesktopAuth: m,
          useStreamlinedLoginUx: p,
        }) {
          let f = !!(e || a || s || c || u)
          if (!f && !m && !p) return t
          try {
            let n = new URL(t)
            if (n.pathname === r) {
              let t = n.searchParams.get("authorize_url")
              if (f && t) {
                let i = new URL(t)
                ;(o(i, e, a, s, c, u, g), n.searchParams.set("authorize_url", i.toString()))
              }
              return (p && n.searchParams.set(l, "true"), n.toString())
            }
            if ((f && o(n, e, a, s, c, u, g), p && n.searchParams.set(l, "true"), !m)) return n.toString()
            let i = new URL(r, d?.trim() || "https://chatgpt.com")
            return (i.searchParams.set("authorize_url", n.toString()), p && i.searchParams.set(l, "true"), i.toString())
          } catch {
            return t
          }
        },
        y: function (e) {
          return e.get(s.a).data?.version
        },
      },
    )
  },
}
//# sourceMappingURL=680701.36ae631051.js.map
