export const __rspack_esm_ids = [433468]
export const __webpack_modules__ = {
  HAL8(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      i = a("i1uX"),
      l = a("qmMi"),
      r = a("DBCl"),
      o = a("zd8w"),
      d = a("Wf1j"),
      c = a("oyxz"),
      u = a("GLfw"),
      g = a("ZHMx"),
      m = a("Sm6l"),
      f = a("JNtf"),
      p = a("mUDD"),
      y = a("Ot7V"),
      h = a("HOLv"),
      x = a("SGsN"),
      w = a("X5YM"),
      b = a("J3WM"),
      j = a("K1N8"),
      v = a("OWtl"),
      _ = a("D1V6"),
      A = a("WFY2")
    function C(e) {
      let t,
        a,
        C,
        S,
        M,
        k,
        N,
        O,
        I,
        R,
        P,
        D,
        L,
        T,
        q,
        E,
        z,
        K,
        G,
        B,
        V,
        F,
        U,
        W,
        $,
        Y,
        Q,
        J,
        Z = (0, n.c)(83),
        { hostId: H, onOpenChange: X, onAuthenticated: ee } = e,
        et = (0, l.gh)(v.u),
        ea = (0, d.A)(),
        es = (0, l._U)(w.Q, H),
        en = "ready" === es.status && es.chatgpt,
        ei = "ready" === es.status && es.api,
        [el, er] = (0, o.useState)(null),
        [eo, ed] = (0, o.useState)(""),
        [ec, eu] = (0, o.useState)(!1),
        [eg, em] = (0, o.useState)(null),
        ef = null != eg,
        ep = null != el
      ;(Z[0] !== el
        ? ((t = () => () => el?.abort()), (a = [el]), (Z[0] = el), (Z[1] = t), (Z[2] = a))
        : ((t = Z[1]), (a = Z[2])),
        (0, o.useEffect)(t, a),
        Z[3] !== eg
          ? ((C = () => () => eg?.abort()), (S = [eg]), (Z[3] = eg), (Z[4] = C), (Z[5] = S))
          : ((C = Z[4]), (S = Z[5])),
        (0, o.useEffect)(C, S),
        Z[6] !== el || Z[7] !== en
          ? ((M = () => {
              en || el?.abort()
            }),
            (k = [el, en]),
            (Z[6] = el),
            (Z[7] = en),
            (Z[8] = M),
            (Z[9] = k))
          : ((M = Z[8]), (k = Z[9])),
        (0, o.useEffect)(M, k),
        Z[10] !== ei || Z[11] !== eg
          ? ((N = () => {
              ei || eg?.abort()
            }),
            (O = [ei, eg]),
            (Z[10] = ei),
            (Z[11] = eg),
            (Z[12] = N),
            (Z[13] = O))
          : ((N = Z[12]), (O = Z[13])),
        (0, o.useEffect)(N, O),
        Z[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = () => {
              ;(er(null), ed(""), eu(!1), em(null))
            }),
            (Z[14] = I))
          : (I = Z[14]))
      let ey = I
      Z[15] !== el || Z[16] !== eg || Z[17] !== X
        ? ((R = (e) => {
            let { abortPendingLogin: t } = e
            ;(t && (el?.abort(), eg?.abort()), ey(), X(!1))
          }),
          (Z[15] = el),
          (Z[16] = eg),
          (Z[17] = X),
          (Z[18] = R))
        : (R = Z[18])
      let eh = R
      Z[19] !== ea || Z[20] !== et
        ? ((P = (e) => {
            et.get(x.Id).warning(
              ea.formatMessage(
                { id: "settings.remoteConnections.auth.error", defaultMessage: "Sign-in failed: {message}" },
                { message: (0, r.Rt_)(e) },
              ),
            )
          }),
          (Z[19] = ea),
          (Z[20] = et),
          (Z[21] = P))
        : (P = Z[21])
      let ex = P
      Z[22] !== el ||
      Z[23] !== eh ||
      Z[24] !== H ||
      Z[25] !== ep ||
      Z[26] !== es.chatgpt ||
      Z[27] !== es.status ||
      Z[28] !== ee ||
      Z[29] !== et ||
      Z[30] !== ex
        ? ((D = async () => {
            if (ep) {
              ;(el?.abort(), er(null))
              return
            }
            if ("ready" !== es.status || !es.chatgpt) return
            let e = new AbortController()
            ;(er(e),
              await (async () => {
                try {
                  let { authUrl: t, completion: a } = await (0, g.NR)({ scope: et, hostId: H, signal: e.signal })
                  e.signal.aborted ||
                    (0, y.E0)({
                      href: (0, _.Z)({
                        authUrl: t,
                        codexAppVersion: (0, _.y)(et),
                        useDesktopAuth: !1,
                        useStreamlinedLoginUx: !1,
                      }),
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                    })
                  let s = await a
                  if (e.signal.aborted) return
                  if (!s.success) {
                    ;(A.v.warning("[remote-connections/auth] chatgpt_sign_in_failed", {
                      safe: {},
                      sensitive: { hostId: H, error: s.error ?? "Unknown error" },
                    }),
                      ex(s.error ?? "Unknown error"))
                    return
                  }
                  ;(ee?.(H), eh({ abortPendingLogin: !1 }))
                } catch (e) {
                  if (e?.name === "AbortError") return
                  ;(A.v.warning("[remote-connections/auth] chatgpt_sign_in_failed", {
                    safe: {},
                    sensitive: { error: e, hostId: H },
                  }),
                    ex(e))
                }
              })().finally(() => {
                er((t) => (t === e ? null : t))
              }))
          }),
          (Z[22] = el),
          (Z[23] = eh),
          (Z[24] = H),
          (Z[25] = ep),
          (Z[26] = es.chatgpt),
          (Z[27] = es.status),
          (Z[28] = ee),
          (Z[29] = et),
          (Z[30] = ex),
          (Z[31] = D))
        : (D = Z[31])
      let ew = D
      Z[32] !== eo ||
      Z[33] !== eh ||
      Z[34] !== H ||
      Z[35] !== ef ||
      Z[36] !== es.api ||
      Z[37] !== es.status ||
      Z[38] !== ee ||
      Z[39] !== et ||
      Z[40] !== ex
        ? ((L = async () => {
            let e = eo.trim()
            if (!e || ef || "ready" !== es.status || !es.api) return
            let t = new AbortController()
            ;(em(t),
              await (async () => {
                try {
                  if ((await (0, u.ls)(et, H).loginWithApiKey(e), t.signal.aborted)) return
                  ;(ee?.(H), eh({ abortPendingLogin: !1 }))
                } catch (e) {
                  if (t.signal.aborted) return
                  ;(A.v.warning("[remote-connections/auth] api_key_sign_in_failed", {
                    safe: {},
                    sensitive: { error: e, hostId: H },
                  }),
                    ex(e))
                }
              })().finally(() => {
                em((e) => (e === t ? null : e))
              }))
          }),
          (Z[32] = eo),
          (Z[33] = eh),
          (Z[34] = H),
          (Z[35] = ef),
          (Z[36] = es.api),
          (Z[37] = es.status),
          (Z[38] = ee),
          (Z[39] = et),
          (Z[40] = ex),
          (Z[41] = L))
        : (L = Z[41])
      let eb = L
      return (
        Z[42] !== eh || Z[43] !== X
          ? ((T = (e) => {
              e ? X(!0) : eh({ abortPendingLogin: !0 })
            }),
            (Z[42] = eh),
            (Z[43] = X),
            (Z[44] = T))
          : (T = Z[44]),
        Z[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = { "aria-describedby": void 0 }), (Z[45] = q))
          : (q = Z[45]),
        Z[46] !== ea
          ? ((E = ea.formatMessage({ id: "settings.remoteConnections.auth.title", defaultMessage: "Login required" })),
            (Z[46] = ea),
            (Z[47] = E))
          : (E = Z[47]),
        Z[48] !== E
          ? ((z = (0, s.jsx)(f.L3, { className: "sr-only", children: E })), (Z[48] = E), (Z[49] = z))
          : (z = Z[49]),
        Z[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, s.jsx)(p.c7, {
              className: "min-w-0 flex-1",
              title: (0, s.jsx)(c.A, { id: "settings.remoteConnections.auth.title", defaultMessage: "Login required" }),
              subtitle: (0, s.jsx)(c.A, {
                id: "settings.remoteConnections.auth.description",
                defaultMessage: "Authenticate the Codex CLI on this remote machine to continue",
              }),
            })),
            (Z[50] = K))
          : (K = Z[50]),
        Z[51] !== ea
          ? ((G = ea.formatMessage({ id: "settings.remoteConnections.auth.closeIcon", defaultMessage: "Close" })),
            (Z[51] = ea),
            (Z[52] = G))
          : (G = Z[52]),
        Z[53] !== eh ? ((B = () => eh({ abortPendingLogin: !0 })), (Z[53] = eh), (Z[54] = B)) : (B = Z[54]),
        Z[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, s.jsx)(h.I, { "aria-hidden": !1, asset: i.Q })), (Z[55] = V))
          : (V = Z[55]),
        Z[56] !== G || Z[57] !== B
          ? ((F = (0, s.jsx)(p.OO, {
              children: (0, s.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  K,
                  (0, s.jsx)(m.$, {
                    "aria-label": G,
                    className: "-me-1 -mt-1 shrink-0",
                    color: "ghost",
                    size: "icon",
                    onClick: B,
                    children: V,
                  }),
                ],
              }),
            })),
            (Z[56] = G),
            (Z[57] = B),
            (Z[58] = F))
          : (F = Z[58]),
        Z[59] !== eo ||
        Z[60] !== eb ||
        Z[61] !== ew ||
        Z[62] !== H ||
        Z[63] !== ec ||
        Z[64] !== ef ||
        Z[65] !== ep ||
        Z[66] !== es.api ||
        Z[67] !== es.chatgpt ||
        Z[68] !== es.status
          ? ((U = (0, s.jsx)(p.OO, {
              children: (0, s.jsx)("div", {
                className: "flex justify-center pt-2",
                children:
                  "ready" === es.status && (es.api || es.chatgpt)
                    ? (0, s.jsx)(j.c, {
                        allowApiKey: es.api,
                        allowChatGpt: es.chatgpt,
                        apiKeyValue: eo,
                        isApiKeyEntryVisible: ec,
                        isApiKeySignInPending: ef,
                        isChatGptSignInPending: ep,
                        onApiKeySecondaryAction: () => {
                          ;(ed(""), eu(!1))
                        },
                        onApiKeySubmit: eb,
                        onApiKeyValueChange: ed,
                        onChatGptSignIn: ew,
                        onShowApiKeyEntry: () => eu(!0),
                        apiKeySecondaryActionLabel: (0, s.jsx)(c.A, {
                          id: "settings.remoteConnections.auth.back",
                          defaultMessage: "Back",
                        }),
                      })
                    : (0, s.jsx)(b.G, { hostId: H }),
              }),
            })),
            (Z[59] = eo),
            (Z[60] = eb),
            (Z[61] = ew),
            (Z[62] = H),
            (Z[63] = ec),
            (Z[64] = ef),
            (Z[65] = ep),
            (Z[66] = es.api),
            (Z[67] = es.chatgpt),
            (Z[68] = es.status),
            (Z[69] = U))
          : (U = Z[69]),
        Z[70] !== eh ? ((W = () => eh({ abortPendingLogin: !0 })), (Z[70] = eh), (Z[71] = W)) : (W = Z[71]),
        Z[72] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, s.jsx)(c.A, { id: "settings.remoteConnections.auth.close", defaultMessage: "Close" })),
            (Z[72] = $))
          : ($ = Z[72]),
        Z[73] !== W
          ? ((Y = (0, s.jsx)(p.OO, {
              children: (0, s.jsx)(p.Es, {
                children: (0, s.jsx)(m.$, { color: "ghost", type: "button", onClick: W, children: $ }),
              }),
            })),
            (Z[73] = W),
            (Z[74] = Y))
          : (Y = Z[74]),
        Z[75] !== z || Z[76] !== F || Z[77] !== U || Z[78] !== Y
          ? ((Q = (0, s.jsxs)(p.R4, { children: [z, F, U, Y] })),
            (Z[75] = z),
            (Z[76] = F),
            (Z[77] = U),
            (Z[78] = Y),
            (Z[79] = Q))
          : (Q = Z[79]),
        Z[80] !== T || Z[81] !== Q
          ? ((J = (0, s.jsx)(f.lG, {
              open: !0,
              onOpenChange: T,
              contentProps: q,
              showDialogClose: !1,
              size: "compact",
              children: Q,
            })),
            (Z[80] = T),
            (Z[81] = Q),
            (Z[82] = J))
          : (J = Z[82]),
        J
      )
    }
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            a = (0, n.c)(5),
            { hostId: i, open: l, onOpenChange: r, onAuthenticated: o } = e
          if (!l || null == i) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(s.Fragment, {})), (a[0] = e))
                : (e = a[0]),
              e
            )
          }
          return (
            a[1] !== i || a[2] !== o || a[3] !== r
              ? ((t = (0, s.jsx)(C, { hostId: i, onOpenChange: r, onAuthenticated: o }, i)),
                (a[1] = i),
                (a[2] = o),
                (a[3] = r),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  vcKR(e, t, a) {
    var s = a("qmMi"),
      n = a("Qgfj"),
      i = a("OWtl"),
      l = a("ZpNr")
    let r = (0, s.vU)(i.u, (e, { scope: t }) => ({
        queryKey: ["config", "gateways", e],
        staleTime: 1e4,
        retry: !1,
        queryFn: () => (0, l.QB)(t, e),
      })),
      o = (0, n.YK)({
        openAI: { id: "settings.gateways.provider.openai", defaultMessage: "OpenAI" },
        gateways: { id: "settings.gateways.list.heading", defaultMessage: "Provider & Gateway" },
      }),
      d = {
        openAI: { section: "gateways", id: "openai-model-provider", title: o.openAI },
        gateways: { section: "gateways", id: "configured-model-gateways", title: o.gateways },
      },
      c = (0, s.i1)(i.u, (e, { get: t }) => (null == t(r, e, { enabled: !1 }).data ? [] : Object.values(d)))
    a.d(t, {}, { $g: d, fU: c, oj: r })
  },
  vph7(e, t, a) {
    a.d(t, { GatewaysSettings: () => ep })
    var s = a("ABep"),
      n = a("QosV"),
      i = a("irkb"),
      l = a("hXDn"),
      r = a("qmMi"),
      o = a("Ehlj"),
      d = a("zd8w"),
      c = a("oyxz"),
      u = a("Ywss"),
      g = a("CfsC"),
      m = a("CnsO"),
      f = a("B81s"),
      p = a("sLlu"),
      y = a("HAL8"),
      h = a("OWtl"),
      x = a("fnPc"),
      w = a("kfGJ"),
      b = a("Sm6l"),
      j = a("JNtf"),
      v = a("mUDD"),
      _ = a("AWNZ"),
      A = a("ZEx5"),
      C = a("q4Sp5"),
      S = a("rB0G")
    function M(e) {
      let t,
        a,
        i,
        l,
        r,
        o,
        u,
        g,
        m,
        f,
        p,
        y,
        h,
        x,
        w,
        S = (0, n.c)(50),
        { gateway: M, current: N, gateways: O, busy: I, error: R, onClose: P, onDelete: D } = e,
        [L, T] = (0, d.useState)("")
      if (S[0] !== M.id || S[1] !== O) {
        let e
        ;(S[3] !== M.id
          ? ((e = (e) => {
              let { id: t } = e
              return t !== M.id
            }),
            (S[3] = M.id),
            (S[4] = e))
          : (e = S[4]),
          (t = [null, ...O.filter(e)].map(k)),
          (S[0] = M.id),
          (S[1] = O),
          (S[2] = t))
      } else t = S[2]
      let q = t
      S[5] !== I || S[6] !== N || S[7] !== q || S[8] !== L
        ? ((a = !I && (!N || q.some((e) => e.value === L))), (S[5] = I), (S[6] = N), (S[7] = q), (S[8] = L), (S[9] = a))
        : (a = S[9])
      let E = a
      ;(S[10] !== I || S[11] !== P
        ? ((i = (e) => {
            e || I || P()
          }),
          (S[10] = I),
          (S[11] = P),
          (S[12] = i))
        : (i = S[12]),
        S[13] !== E || S[14] !== N || S[15] !== D || S[16] !== L
          ? ((l = (e) => {
              ;(e.preventDefault(), E && D(N ? L : null))
            }),
            (S[13] = E),
            (S[14] = N),
            (S[15] = D),
            (S[16] = L),
            (S[17] = l))
          : (l = S[17]),
        S[18] !== M.name
          ? ((r = (0, s.jsx)(j.L3, {
              className: "heading-dialog",
              children: (0, s.jsx)(c.A, {
                id: "settings.gateways.delete.title",
                defaultMessage: "Delete {name}?",
                values: { name: M.name },
              }),
            })),
            (S[18] = M.name),
            (S[19] = r))
          : (r = S[19]),
        S[20] !== N
          ? ((o = (0, s.jsx)("p", {
              className: "text-sm text-secondary",
              children: N
                ? (0, s.jsx)(c.A, {
                    id: "settings.gateways.delete.replace",
                    defaultMessage: "Choose a replacement for your current provider before deleting it",
                  })
                : (0, s.jsx)(c.A, {
                    id: "settings.gateways.remove.description",
                    defaultMessage: "This removes its configuration from Codex. You can add it again later.",
                  }),
            })),
            (S[20] = N),
            (S[21] = o))
          : (o = S[21]),
        S[22] !== r || S[23] !== o
          ? ((u = (0, s.jsxs)(v.OO, { children: [r, o] })), (S[22] = r), (S[23] = o), (S[24] = u))
          : (u = S[24]),
        S[25] !== I || S[26] !== N || S[27] !== q || S[28] !== L
          ? ((g = N
              ? (0, s.jsx)(v.OO, {
                  children: (0, s.jsx)(A.t, {
                    variant: "form",
                    contentOverflow: "visible",
                    children: (0, s.jsx)(_.ic, {
                      label: (0, s.jsx)(c.A, { id: "settings.gateways.delete.switchTo", defaultMessage: "Switch to" }),
                      control: (0, s.jsx)(C.jN, {
                        value: L,
                        placeholder: (0, s.jsx)(c.A, {
                          id: "settings.gateways.delete.choose",
                          defaultMessage: "Choose provider",
                        }),
                        options: q,
                        disabled: I,
                        onChange: T,
                      }),
                    }),
                  }),
                })
              : null),
            (S[25] = I),
            (S[26] = N),
            (S[27] = q),
            (S[28] = L),
            (S[29] = g))
          : (g = S[29]),
        S[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(c.A, { id: "settings.gateways.cancel", defaultMessage: "Cancel" })), (S[30] = m))
          : (m = S[30]),
        S[31] !== I || S[32] !== P
          ? ((f = (0, s.jsx)(b.$, {
              type: "button",
              color: "secondary",
              size: "dialogAction",
              radius: "large",
              disabled: I,
              onClick: P,
              children: m,
            })),
            (S[31] = I),
            (S[32] = P),
            (S[33] = f))
          : (f = S[33]))
      let z = !E
      return (
        S[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(c.A, { id: "settings.gateways.delete.button", defaultMessage: "Delete" })), (S[34] = p))
          : (p = S[34]),
        S[35] !== I || S[36] !== z
          ? ((y = (0, s.jsx)(b.$, {
              type: "submit",
              color: "danger",
              size: "dialogAction",
              radius: "large",
              disabled: z,
              loading: I,
              children: p,
            })),
            (S[35] = I),
            (S[36] = z),
            (S[37] = y))
          : (y = S[37]),
        S[38] !== f || S[39] !== y
          ? ((h = (0, s.jsx)(v.OO, { children: (0, s.jsxs)(v.Es, { expandSingleButton: !1, children: [f, y] }) })),
            (S[38] = f),
            (S[39] = y),
            (S[40] = h))
          : (h = S[40]),
        S[41] !== R || S[42] !== h || S[43] !== l || S[44] !== u || S[45] !== g
          ? ((x = (0, s.jsxs)(v.R4, { as: "form", onSubmit: l, children: [u, R, g, h] })),
            (S[41] = R),
            (S[42] = h),
            (S[43] = l),
            (S[44] = u),
            (S[45] = g),
            (S[46] = x))
          : (x = S[46]),
        S[47] !== x || S[48] !== i
          ? ((w = (0, s.jsx)(j.lG, {
              open: !0,
              variant: "form",
              size: "medium",
              showDialogClose: !1,
              onOpenChange: i,
              children: x,
            })),
            (S[47] = x),
            (S[48] = i),
            (S[49] = w))
          : (w = S[49]),
        w
      )
    }
    function k(e) {
      return {
        value: e?.id ?? "openai",
        icon: (0, s.jsx)(S.s3, { type: e?.type ?? "openai" }),
        label: e?.type === "custom" ? e.name : (0, s.jsx)(S.te, { type: e?.type ?? "openai" }),
      }
    }
    var N = a("vTR8"),
      O = a("ZpNr"),
      I = a("uSOC"),
      R = a("vcKR"),
      P = a("T0Rc"),
      D = a("lkCH"),
      L = a("l00C"),
      T = a("SRbQ"),
      q = a("OeLR"),
      E = a("ASxG")
    let z = E.Ikc({
      message: E.YjP(),
      additionalDetails: E.YjP().nullish(),
      codexErrorInfo: E.KCZ([E.YjP(), E.g1P(E.YjP(), E.L5J())]).nullish(),
    })
    function K(e) {
      if ("string" == typeof e && e.trim()) return e
      let t = z.safeParse(e)
      if (t.success) {
        let { message: e, additionalDetails: a, codexErrorInfo: s } = t.data
        if (null != s) {
          let [t, n] = "string" == typeof s ? [s, null] : (Object.entries(s)[0] ?? [])
          if (t) {
            let s = E.Ikc({ httpStatusCode: E.aig().nullish() }).safeParse(n)
            return JSON.stringify(
              {
                error: t,
                ...(s.success && null != s.data.httpStatusCode ? { httpStatusCode: s.data.httpStatusCode } : {}),
                ...(a?.trim() ? { additionalDetails: a } : {}),
                ...(e.trim() ? { message: e } : {}),
              },
              null,
              2,
            )
          }
        }
        let n = [e, a].filter((e) => e?.trim()).join("\n\n")
        if (n) return n
      }
      return JSON.stringify({ error: "connectionTestFailed" }, null, 2)
    }
    let G = new WeakMap()
    function B(e, t, a, s, n = !0) {
      let i = null == e ? null : G.get(e)
      null != e && null == i && ((i = crypto.randomUUID()), G.set(e, i))
      let l = ["model-provider-connection-test", t]
      return {
        queryKey: [...l, i, a],
        enabled: n && null != e,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        queryFn: async ({ client: t }) => {
          if (null == e) throw Error("App server manager is unavailable")
          return (
            t.removeQueries({ queryKey: l, type: "inactive", predicate: (e) => e.queryKey[2] !== i }),
            {
              configurationKey: s,
              result: await (async function (e, t) {
                let { rpc: a } = e
                try {
                  let s,
                    { config: n } = await a.sendRequest(
                      "config/read",
                      { cwd: null, includeLayers: !1 },
                      { timeoutMs: 3e4 },
                    ),
                    i = null
                  do {
                    let e = await a.sendRequest("model/list", { cursor: i }, { timeoutMs: 3e4 })
                    ;((s = e.data.find((e) => e.isDefault)), (i = e.nextCursor))
                  } while (null == s && null != i)
                  let l = await a.sendRequest(
                      "thread/start",
                      {
                        ephemeral: !0,
                        model: s?.model ?? (0, q.Y$)(n).model,
                        cwd: await a.getCodexHome(),
                        approvalPolicy: "never",
                        sandbox: "read-only",
                        environments: [],
                        baseInstructions:
                          "This is a connection test. Reply with exactly gateway-ok. Do not use tools or read files.",
                        developerInstructions: "Reply with exactly gateway-ok. Do not use tools.",
                        config: {
                          ...(null == s ? {} : { model_reasoning_effort: s.defaultReasoningEffort }),
                          mcp_servers: Object.fromEntries(
                            Object.keys((0, N.YV)(n.mcp_servers)).map((e) => [e, { enabled: !1 }]),
                          ),
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
                    ),
                    r = l.thread.id
                  try {
                    if (l.modelProvider !== t) return { status: "pendingRestart" }
                    return await (async function ({ hostId: e, rpc: t }, a) {
                      let s = { stack: [], error: void 0, hasError: !1 }
                      try {
                        let n = (0, D.u)(),
                          i = null,
                          l = (0, T.mS)(
                            s,
                            t.subscribe({
                              type: "notification",
                              key: { hostId: e },
                              methods: "turn/completed",
                              listener: ({ params: e }) => {
                                e.threadId === a &&
                                  (null == i || e.turn.id === i) &&
                                  n.resolve(
                                    "completed" === e.turn.status
                                      ? { status: "passed" }
                                      : { status: "failed", details: K(e.turn.error) },
                                  )
                              },
                            }),
                            !1,
                          )
                        ;(0, T.mS)(s, await l, !1).onRpcBroken((e) => {
                          n.resolve({ status: "failed", details: K(e) })
                        })
                        let r = window.setTimeout(() => n.resolve(null), 3e4)
                        try {
                          let { turn: e } = await t.sendRequest(
                            "turn/start",
                            {
                              threadId: a,
                              input: [{ type: "text", text: "Reply with exactly: gateway-ok", text_elements: [] }],
                            },
                            { timeoutMs: 3e4 },
                          )
                          i = e.id
                          let s = await n.promise
                          if (null != s) return s
                          return (
                            await t
                              .sendRequest("turn/interrupt", { threadId: a, turnId: i }, { timeoutMs: 3e4 })
                              .catch(() => void 0),
                            { status: "failed", details: "timeout" }
                          )
                        } finally {
                          window.clearTimeout(r)
                        }
                      } catch (e) {
                        ;((s.error = e), (s.hasError = !0))
                      } finally {
                        ;(0, T.hk)(s)
                      }
                    })(e, r)
                  } finally {
                    await a.sendRequest("thread/unsubscribe", { threadId: r }, { timeoutMs: 3e4 }).catch(() => void 0)
                  }
                } catch (e) {
                  return { status: "failed", details: K(e) }
                }
              })(e, a),
            }
          )
        },
      }
    }
    let V = (0, a("ESTr").a)({
      name: "exclamationmark-triangle-fill-light-20",
      canvas: { width: 20, height: 20, viewBox: "0 0 20 20" },
      paint: { kind: "monochrome" },
      optical: { shape: "non-circular" },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.89517 3.57764C8.857 2.00374 11.1433 2.00374 12.1051 3.57764L18.3004 13.7144C19.3043 15.3579 18.1209 17.4671 16.195 17.4673H3.80533C1.87925 17.4672 0.696742 15.3579 1.70083 13.7144L7.89517 3.57764ZM10.0006 12.5562C9.43188 12.5562 8.97052 13.0167 8.97037 13.5855C8.97037 14.1543 9.43178 14.6157 10.0006 14.6157C10.5693 14.6155 11.0299 14.1542 11.0299 13.5855C11.0298 13.0169 10.5692 12.5564 10.0006 12.5562ZM10.0006 7.25244C9.63337 7.25244 9.3356 7.55021 9.3356 7.91748V10.6255C9.33588 10.9925 9.63354 11.2905 10.0006 11.2905C10.3674 11.2902 10.6654 10.9923 10.6657 10.6255V7.91748C10.6657 7.55043 10.3676 7.25279 10.0006 7.25244Z" fill="currentColor"/>',
    })
    var F = a("MM0V"),
      U = a("bqtn"),
      W = a("Ot7V"),
      $ = a("HOLv"),
      Y = a("jxU8"),
      Q = a("pO0d"),
      J = a("BSnr"),
      Z = a("QyE3"),
      H = a("on57"),
      X = a("Wf1j"),
      ee = a("bVeK"),
      et = a("RNul"),
      ea = a("uuN8"),
      es = a("aepO")
    function en(e) {
      let t,
        a,
        i,
        l,
        r,
        o,
        d,
        u = (0, n.c)(15),
        { details: g, onRetry: m, disabled: f } = e
      return (
        u[0] !== g
          ? ((t = (0, s.jsx)("pre", {
              className: "m-0 min-w-0 flex-1 text-xs break-words whitespace-pre-wrap select-text",
              children: (0, s.jsx)("code", { children: g }),
            })),
            (u[0] = g),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== g
          ? ((a = (0, s.jsx)(ea.i, { variant: "codeBlock", onCopy: (e) => (0, es.lW)(g, e) })), (u[2] = g), (u[3] = a))
          : (a = u[3]),
        u[4] !== t || u[5] !== a
          ? ((i = (0, s.jsxs)("div", {
              className: "flex items-start gap-2 bg-surface-secondary p-3",
              children: [t, a],
            })),
            (u[4] = t),
            (u[5] = a),
            (u[6] = i))
          : (i = u[6]),
        u[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)("p", {
              role: "alert",
              className: "text-xs text-danger",
              children: (0, s.jsx)(c.A, {
                id: "settings.gateways.error.test",
                defaultMessage:
                  "The inference test failed. Check the endpoint, model, credentials, and region, then try again.",
              }),
            })),
            (u[7] = l))
          : (l = u[7]),
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(c.A, { id: "settings.gateways.test.retry", defaultMessage: "Retry" })), (u[8] = r))
          : (r = u[8]),
        u[9] !== f || u[10] !== m
          ? ((o = (0, s.jsxs)("div", {
              className: "flex items-center justify-between gap-3 px-3 py-2",
              children: [
                l,
                (0, s.jsx)(b.$, {
                  type: "button",
                  color: "secondary",
                  size: "toolbar",
                  disabled: f,
                  onClick: m,
                  children: r,
                }),
              ],
            })),
            (u[9] = f),
            (u[10] = m),
            (u[11] = o))
          : (o = u[11]),
        u[12] !== i || u[13] !== o
          ? ((d = (0, s.jsxs)(A.t, { variant: "outlined", children: [i, o] })), (u[12] = i), (u[13] = o), (u[14] = d))
          : (d = u[14]),
        d
      )
    }
    function ei(e) {
      let t,
        a,
        i,
        l,
        r,
        o,
        d,
        u,
        g,
        m,
        f,
        p,
        y,
        h,
        x,
        w,
        j,
        v = (0, n.c)(74),
        {
          gateway: A,
          current: C,
          restartRequired: M,
          testResult: k,
          busy: O,
          readOnly: I,
          selectionManaged: P,
          onSelect: D,
          onEdit: L,
          onDelete: T,
          onTest: q,
        } = e,
        E = (0, X.A)(),
        z = A?.type ?? "openai"
      v[0] !== A?.name || v[1] !== E
        ? ((t = A?.name ?? E.formatMessage(R.$g.openAI.title)), (v[0] = A?.name), (v[1] = E), (v[2] = t))
        : (t = v[2])
      let K = t,
        G = null != A && !A.managed && !A.external,
        B = G && !I,
        V = G && (!C || !P)
      v[3] !== E || v[4] !== K
        ? ((a = E.formatMessage(
            { id: "settings.gateways.providerActions", defaultMessage: "Actions for {name}" },
            { name: K },
          )),
          (v[3] = E),
          (v[4] = K),
          (v[5] = a))
        : (a = v[5])
      let F = a,
        W = !O && !M && "testing" !== k.status
      ;(v[6] !== C || v[7] !== M || v[8] !== k
        ? ((i = C ? (0, s.jsx)(el, { result: k, pending: M }) : null), (v[6] = C), (v[7] = M), (v[8] = k), (v[9] = i))
        : (i = v[9]),
        v[10] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, s.jsx)(ee.l0Y, {})), (v[10] = l)) : (l = v[10]),
        v[11] !== O || v[12] !== F
          ? ((r = (0, s.jsx)(b.$, {
              size: "toolbar",
              uniform: !0,
              color: "ghostActive",
              "aria-label": F,
              disabled: O,
              children: l,
            })),
            (v[11] = O),
            (v[12] = F),
            (v[13] = r))
          : (r = v[13]),
        v[14] !== W || v[15] !== C || v[16] !== A?.id || v[17] !== D || v[18] !== q || v[19] !== P
          ? ((o = C
              ? (0, s.jsx)(U.ms.Item, {
                  leftIcon: (0, s.jsx)(ee._7Q, {}),
                  disabled: !W,
                  onClick: q,
                  children: (0, s.jsx)(c.A, { id: "settings.gateways.row.test", defaultMessage: "Test connection" }),
                })
              : (0, s.jsx)(U.ms.Item, {
                  leftIcon: (0, s.jsx)(ee.Bgg, {}),
                  disabled: P,
                  onClick: () => D(A?.id ?? "openai"),
                  children: (0, s.jsx)(c.A, { id: "settings.gateways.switch", defaultMessage: "Switch provider" }),
                })),
            (v[14] = W),
            (v[15] = C),
            (v[16] = A?.id),
            (v[17] = D),
            (v[18] = q),
            (v[19] = P),
            (v[20] = o))
          : (o = v[20]),
        v[21] !== B || v[22] !== A || v[23] !== L || v[24] !== z
          ? ((d =
              null != A
                ? (0, s.jsx)(U.ms.Item, {
                    leftIcon: B ? (0, s.jsx)(ee.JSV, {}) : (0, s.jsx)(ee.X9D, {}),
                    onClick: () => L(A),
                    children: B
                      ? (0, s.jsx)(c.A, {
                          id: "settings.gateways.row.edit",
                          defaultMessage: "{gateway, select, yes {Edit gateway} other {Edit provider}}",
                          values: { gateway: "custom" === z ? "yes" : "no" },
                        })
                      : (0, s.jsx)(c.A, { id: "settings.gateways.row.view", defaultMessage: "View configuration" }),
                  })
                : null),
            (v[21] = B),
            (v[22] = A),
            (v[23] = L),
            (v[24] = z),
            (v[25] = d))
          : (d = v[25]),
        v[26] !== V || v[27] !== A || v[28] !== T || v[29] !== z
          ? ((u =
              null != A && V
                ? (0, s.jsx)(U.ms.Item, {
                    leftIcon: (0, s.jsx)(ee.cSG, {}),
                    onClick: () => T(A),
                    children: (0, s.jsx)(c.A, {
                      id: "settings.gateways.row.delete",
                      defaultMessage: "{gateway, select, yes {Delete gateway} other {Delete provider}}",
                      values: { gateway: "custom" === z ? "yes" : "no" },
                    }),
                  })
                : null),
            (v[26] = V),
            (v[27] = A),
            (v[28] = T),
            (v[29] = z),
            (v[30] = u))
          : (u = v[30]),
        v[31] !== O || v[32] !== r || v[33] !== o || v[34] !== d || v[35] !== u
          ? ((g = (0, s.jsxs)(U.Ab, { align: "end", disabled: O, triggerButton: r, children: [o, d, u] })),
            (v[31] = O),
            (v[32] = r),
            (v[33] = o),
            (v[34] = d),
            (v[35] = u),
            (v[36] = g))
          : (g = v[36]),
        v[37] !== i || v[38] !== g
          ? ((m = (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [i, g] })),
            (v[37] = i),
            (v[38] = g),
            (v[39] = m))
          : (m = v[39]))
      let $ = m
      if (null == A) {
        let e
        ;(v[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, { id: "settings.gateways.provider.builtIn", defaultMessage: "Built-in provider" })),
            (v[40] = e))
          : (e = v[40]),
          (f = e))
      } else if ((0, N.PT)(z)) {
        let e
        ;(v[41] !== A.config.aws
          ? ((e = (0, N.r$)((0, N.YV)(A.config.aws).region)), (v[41] = A.config.aws), (v[42] = e))
          : (e = v[42]),
          (f = e))
      } else if ("gcp" === z) {
        let e, t, a
        ;(v[43] !== A.config.project_id
          ? ((e = (0, N.r$)(A.config.project_id)), (v[43] = A.config.project_id), (v[44] = e))
          : (e = v[44]),
          v[45] !== A.config.location
            ? ((t = (0, N.r$)(A.config.location) || "global"), (v[45] = A.config.location), (v[46] = t))
            : (t = v[46]),
          v[47] !== e || v[48] !== t
            ? ((a = [e, t].filter(Boolean)), (v[47] = e), (v[48] = t), (v[49] = a))
            : (a = v[49]),
          (f = a.join(" \xb7 ")))
      } else {
        let e
        ;(v[50] !== A.config.base_url
          ? ((e = (0, N.r$)(A.config.base_url)), (v[50] = A.config.base_url), (v[51] = e))
          : (e = v[51]),
          (f = e))
      }
      ;(v[52] !== z ? ((p = (0, s.jsx)(S.s3, { type: z, size: "medium" })), (v[52] = z), (v[53] = p)) : (p = v[53]),
        v[54] !== f
          ? ((y = (0, s.jsx)("span", { className: "break-all", children: f })), (v[54] = f), (v[55] = y))
          : (y = v[55]),
        v[56] !== $ || v[57] !== p || v[58] !== y
          ? ((h = { controlSizing: "content", icon: p, description: y, control: $ }),
            (v[56] = $),
            (v[57] = p),
            (v[58] = y),
            (v[59] = h))
          : (h = v[59]))
      let Y = h
      return (
        v[60] !== A || v[61] !== K || v[62] !== Y || v[63] !== z
          ? ((x =
              null == A
                ? (0, s.jsx)(Q.GC, { ...Y, entry: R.$g.openAI })
                : (0, s.jsx)(_.ic, { ...Y, label: "custom" === A.type ? K : (0, s.jsx)(S.te, { type: z }) })),
            (v[60] = A),
            (v[61] = K),
            (v[62] = Y),
            (v[63] = z),
            (v[64] = x))
          : (x = v[64]),
        v[65] !== W || v[66] !== C || v[67] !== q || v[68] !== M || v[69] !== k
          ? ((w =
              C && !M && "failed" === k.status
                ? (0, s.jsx)("div", {
                    className: "px-4 pb-4",
                    children: (0, s.jsx)(en, { details: k.details, onRetry: q, disabled: !W }),
                  })
                : null),
            (v[65] = W),
            (v[66] = C),
            (v[67] = q),
            (v[68] = M),
            (v[69] = k),
            (v[70] = w))
          : (w = v[70]),
        v[71] !== x || v[72] !== w
          ? ((j = (0, s.jsxs)("div", { children: [x, w] })), (v[71] = x), (v[72] = w), (v[73] = j))
          : (j = v[73]),
        j
      )
    }
    function el(e) {
      let t,
        a,
        i,
        l = (0, n.c)(7),
        { result: r, pending: o } = e,
        d = o ? "pending" : r.status
      return (
        l[0] !== d
          ? ((t =
              "testing" === d
                ? (0, s.jsx)(et.y, { className: "size-3" })
                : (0, s.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, H.A)("block size-2 shrink-0 rounded-full", {
                      "bg-green": "passed" === d,
                      "bg-red": "failed" === d,
                      "bg-text-tertiary": "untested" === d || "pending" === d,
                    }),
                  })),
            (l[0] = d),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== d
          ? ((a = (0, s.jsx)(c.A, {
              id: "settings.gateways.connectionStatus.v2",
              defaultMessage:
                "{state, select, passed {Connected} failed {Failed} testing {Checking\u2026} pending {Pending restart} other {Untested}}",
              values: { state: d },
            })),
            (l[2] = d),
            (l[3] = a))
          : (a = l[3]),
        l[4] !== t || l[5] !== a
          ? ((i = (0, s.jsxs)("span", {
              role: "status",
              className:
                "inline-flex button-toolbar items-center gap-1.5 border border-transparent py-0 text-sm leading-[18px] whitespace-nowrap text-default select-none",
              children: [t, a],
            })),
            (l[4] = t),
            (l[5] = a),
            (l[6] = i))
          : (i = l[6]),
        i
      )
    }
    let er = ["amazon-bedrock-runtime", "amazon-bedrock", "gcp", "custom"]
    function eo(e) {
      let t,
        a,
        i,
        l,
        r,
        o,
        d,
        u,
        g,
        m,
        f,
        p,
        y,
        h,
        x = (0, n.c)(77),
        {
          gateways: w,
          selectedProvider: j,
          selectionManaged: v,
          busy: _,
          error: C,
          testResult: M,
          restartRequired: k,
          onRestart: N,
          onSelect: O,
          onAdd: I,
          onEdit: P,
          onTest: D,
          onDelete: L,
          supportsGcp: T,
          children: q,
        } = e
      x[0] !== M ? ((t = void 0 === M ? { status: "untested" } : M), (x[0] = M), (x[1] = t)) : (t = x[1])
      let E = t
      if (
        x[2] !== _ ||
        x[3] !== C ||
        x[4] !== w ||
        x[5] !== I ||
        x[6] !== L ||
        x[7] !== P ||
        x[8] !== N ||
        x[9] !== O ||
        x[10] !== D ||
        x[11] !== k ||
        x[12] !== j ||
        x[13] !== v ||
        x[14] !== T ||
        x[15] !== E
      ) {
        let e, t, n, m, f, p
        x[24] !== j
          ? ((e = (e, t) => Number((t?.id ?? "openai") === j) - Number((e?.id ?? "openai") === j)),
            (x[24] = j),
            (x[25] = e))
          : (e = x[25])
        let y = [null, ...w].sort(e)
        if (
          ((r = ed),
          (u = C),
          x[26] !== _ || x[27] !== N || x[28] !== k
            ? ((g = k
                ? (0, s.jsx)(F.l, {
                    variant: "settings",
                    type: "warning",
                    role: "status",
                    icon: (0, s.jsx)($.I, { asset: V, className: "text-warning" }),
                    title: (0, s.jsx)(c.A, {
                      id: "settings.gateways.restart.title",
                      defaultMessage: "Provider changes are ready to apply",
                    }),
                    content: (0, s.jsx)(c.A, {
                      id: "settings.gateways.restart.notice",
                      defaultMessage: "Existing chats will stop running",
                    }),
                    primaryCtaText: (0, s.jsx)(c.A, {
                      id: "settings.gateways.restart.button",
                      defaultMessage: "Restart ChatGPT",
                    }),
                    primaryCtaColor: "primary",
                    isPrimaryCtaDisabled: _,
                    onPrimaryCtaClick: N,
                    showCtaSeparator: !1,
                    stackOnNarrow: !0,
                  })
                : null),
              (x[26] = _),
              (x[27] = N),
              (x[28] = k),
              (x[29] = g))
            : (g = x[29]),
          (l = J.X),
          x[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(Q.Ct, { title: R.$g.gateways.title })), (x[30] = t))
            : (t = x[30]),
          x[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)(c.A, { id: "settings.gateways.add.button", defaultMessage: "Add" })), (x[31] = n))
            : (n = x[31]),
          x[32] !== _
            ? ((m = (0, s.jsx)(b.$, { disabled: _, size: "toolbar", children: n })), (x[32] = _), (x[33] = m))
            : (m = x[33]),
          x[34] !== w || x[35] !== I || x[36] !== T)
        ) {
          let e, t
          ;(x[38] !== T ? ((e = (e) => "gcp" !== e || T), (x[38] = T), (x[39] = e)) : (e = x[39]),
            x[40] !== w || x[41] !== I
              ? ((t = (e) => {
                  let t = "custom" !== e && w.some((t) => t.type === e)
                  return (0, s.jsx)(
                    U.ms.Item,
                    {
                      leftIcon: (0, s.jsx)(S.s3, { type: e, size: "medium" }),
                      SubText: (0, s.jsx)(S.Wt, { type: e }),
                      disabled: t,
                      focusableWhenDisabled: t,
                      tooltipText: t
                        ? (0, s.jsx)(c.A, { id: "settings.gateways.alreadyAdded", defaultMessage: "Already added" })
                        : void 0,
                      onClick: () => I(e),
                      children: (0, s.jsx)(S.te, { type: e }),
                    },
                    e,
                  )
                }),
                (x[40] = w),
                (x[41] = I),
                (x[42] = t))
              : (t = x[42]),
            (f = er.filter(e).map(t)),
            (x[34] = w),
            (x[35] = I),
            (x[36] = T),
            (x[37] = f))
        } else f = x[37]
        ;(x[43] !== _ || x[44] !== m || x[45] !== f
          ? ((d = (0, s.jsx)(Q.ek, {
              entry: R.$g.gateways,
              children: (0, s.jsx)(J.X.Header, {
                title: t,
                actions: (0, s.jsx)(U.Ab, {
                  align: "end",
                  contentWidth: "panelWide",
                  disabled: _,
                  triggerButton: m,
                  children: f,
                }),
              }),
            })),
            (x[43] = _),
            (x[44] = m),
            (x[45] = f),
            (x[46] = d))
          : (d = x[46]),
          (i = J.X.Content),
          (a = A.t),
          x[47] !== _ ||
          x[48] !== L ||
          x[49] !== P ||
          x[50] !== O ||
          x[51] !== D ||
          x[52] !== k ||
          x[53] !== j ||
          x[54] !== v ||
          x[55] !== T ||
          x[56] !== E
            ? ((p = (e) =>
                (0, s.jsx)(
                  ei,
                  {
                    gateway: e,
                    current: (e?.id ?? "openai") === j,
                    restartRequired: k,
                    testResult: E,
                    busy: _,
                    readOnly: e?.type === "gcp" && !T,
                    selectionManaged: v,
                    onSelect: O,
                    onEdit: P,
                    onDelete: L,
                    onTest: D,
                  },
                  e?.id ?? "openai",
                )),
              (x[47] = _),
              (x[48] = L),
              (x[49] = P),
              (x[50] = O),
              (x[51] = D),
              (x[52] = k),
              (x[53] = j),
              (x[54] = v),
              (x[55] = T),
              (x[56] = E),
              (x[57] = p))
            : (p = x[57]),
          (o = y.map(p)),
          (x[2] = _),
          (x[3] = C),
          (x[4] = w),
          (x[5] = I),
          (x[6] = L),
          (x[7] = P),
          (x[8] = N),
          (x[9] = O),
          (x[10] = D),
          (x[11] = k),
          (x[12] = j),
          (x[13] = v),
          (x[14] = T),
          (x[15] = E),
          (x[16] = a),
          (x[17] = i),
          (x[18] = l),
          (x[19] = r),
          (x[20] = o),
          (x[21] = d),
          (x[22] = u),
          (x[23] = g))
      } else ((a = x[16]), (i = x[17]), (l = x[18]), (r = x[19]), (o = x[20]), (d = x[21]), (u = x[22]), (g = x[23]))
      return (
        x[58] !== a || x[59] !== o
          ? ((m = (0, s.jsx)(a, { children: o })), (x[58] = a), (x[59] = o), (x[60] = m))
          : (m = x[60]),
        x[61] !== v
          ? ((f = v
              ? (0, s.jsx)(J.X.Footer, {
                  children: (0, s.jsx)(c.A, {
                    id: "settings.gateways.managed",
                    defaultMessage: "Provider selection is managed by your organization",
                  }),
                })
              : null),
            (x[61] = v),
            (x[62] = f))
          : (f = x[62]),
        x[63] !== i || x[64] !== m || x[65] !== f
          ? ((p = (0, s.jsxs)(i, { children: [m, f] })), (x[63] = i), (x[64] = m), (x[65] = f), (x[66] = p))
          : (p = x[66]),
        x[67] !== l || x[68] !== d || x[69] !== p
          ? ((y = (0, s.jsxs)(l, { children: [d, p] })), (x[67] = l), (x[68] = d), (x[69] = p), (x[70] = y))
          : (y = x[70]),
        x[71] !== r || x[72] !== q || x[73] !== y || x[74] !== u || x[75] !== g
          ? ((h = (0, s.jsxs)(r, { children: [u, g, y, q] })),
            (x[71] = r),
            (x[72] = q),
            (x[73] = y),
            (x[74] = u),
            (x[75] = g),
            (x[76] = h))
          : (h = x[76]),
        h
      )
    }
    function ed(e) {
      let t,
        a,
        i,
        l = (0, n.c)(4),
        { children: r } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(Z.s, { slug: "gateways" })), (l[0] = t))
          : (t = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(c.A, {
              id: "settings.gateways.subtitle",
              defaultMessage: "Connect ChatGPT to a model provider or gateway. <a>Learn more</a>",
              values: { a: ec },
            })),
            (l[1] = a))
          : (a = l[1]),
        l[2] !== r
          ? ((i = (0, s.jsx)(Y.P, { title: t, subtitleClassName: "whitespace-normal", subtitle: a, children: r })),
            (l[2] = r),
            (l[3] = i))
          : (i = l[3]),
        i
      )
    }
    function ec(e) {
      return (0, s.jsx)(
        "a",
        {
          className: "inline-flex font-medium text-link-primary!",
          href: "https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers",
          target: "_blank",
          rel: "noreferrer",
          onClick: eu,
          children: e,
        },
        "provider-documentation",
      )
    }
    function eu(e) {
      ;(0, W.PQ)({ event: e, href: e.currentTarget.href, initiator: "external_link" })
    }
    let eg = (0, r.bD)(h.u, (e) => null),
      em = (0, r.bD)(h.u, (e) => !1),
      ef = (0, r.vU)(h.u, (e, { scope: t }) => ({
        queryKey: ["gateways", "bedrock-discovery", e],
        staleTime: 3e4,
        retry: !1,
        queryFn: () => (0, O.rr)(t, e),
      }))
    function ep() {
      let e,
        t = (0, n.c)(2),
        { selectedHostId: a } = (0, x.D8)()
      return (t[0] !== a ? ((e = (0, s.jsx)(ey, { hostId: a }, a)), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    function ey(e) {
      let t,
        a,
        l,
        x,
        b,
        j,
        v,
        _,
        A,
        S,
        k,
        T,
        q,
        E,
        z,
        K,
        G,
        V,
        F = (0, n.c)(97),
        { hostId: U } = e,
        W = (0, r.gh)(h.u),
        $ = (0, r._U)(g.B, U),
        Y = (0, i.jE)(),
        Q = (0, u.Zp)(),
        J = (0, r._U)(R.oj, U),
        Z = (0, r._U)(ef, U),
        [H, X] = (0, d.useState)(null),
        [ee, et] = (0, d.useState)(!1),
        [ea, es] = (0, d.useState)(!1),
        en = (0, r._U)(eg, U),
        ei = (0, r._U)(em, U),
        el = (0, d.useRef)(!1),
        [er, ec] = (0, d.useState)(null),
        eu = J.data?.requirements?.modelProvider ?? J.data?.response.config.model_provider ?? "openai",
        ep = ei || (null != en && en !== eu)
      F[0] !== J.data ? ((t = eh(J.data)), (F[0] = J.data), (F[1] = t)) : (t = F[1])
      let ey = (function (e, t, a, s) {
          let l,
            o,
            d,
            c,
            u,
            g = (0, n.c)(27),
            m = (0, r.gh)(h.u),
            f = (0, r._U)(L.u$, e),
            p = (0, i.jE)()
          g[0] !== f || g[1] !== a || g[2] !== s || g[3] !== e || g[4] !== t
            ? ((l = B(f, e, t, a, s)), (g[0] = f), (g[1] = a), (g[2] = s), (g[3] = e), (g[4] = t), (g[5] = l))
            : (l = g[5])
          let { data: y, isFetching: x, refetch: w } = (0, P.I)(l)
          return (
            g[6] !== a || g[7] !== y || g[8] !== s || g[9] !== x
              ? ((o = y?.result ?? { status: "untested" }),
                x || (s && null == y)
                  ? (o = { status: "testing" })
                  : null != y && y.configurationKey !== a && (o = { status: "pendingRestart" }),
                (g[6] = a),
                (g[7] = y),
                (g[8] = s),
                (g[9] = x),
                (g[10] = o))
              : (o = g[10]),
            g[11] !== f || g[12] !== s || g[13] !== w || g[14] !== o
              ? ((d = () => {
                  null != f && s && "pendingRestart" !== o.status && w({ cancelRefetch: !1 })
                }),
                (g[11] = f),
                (g[12] = s),
                (g[13] = w),
                (g[14] = o),
                (g[15] = d))
              : (d = g[15]),
            g[16] !== f || g[17] !== a || g[18] !== e || g[19] !== t || g[20] !== p || g[21] !== m
              ? ((c = async () => {
                  let s = await (async function (e, t, a) {
                    let s = (0, D.u)(),
                      n = e.watch((e) => {
                        let n = e.get(L.M4, t),
                          i = "request-only" === n.status ? n.requestClient : n.client
                        null != i && i !== a && s.resolve(i)
                      }),
                      i = window.setTimeout(() => s.reject(Error("App server manager is unavailable")), 3e4)
                    try {
                      return await s.promise
                    } finally {
                      ;(window.clearTimeout(i), n())
                    }
                  })(m, e, f)
                  p.prefetchQuery(B(s, e, t, a))
                }),
                (g[16] = f),
                (g[17] = a),
                (g[18] = e),
                (g[19] = t),
                (g[20] = p),
                (g[21] = m),
                (g[22] = c))
              : (c = g[22]),
            g[23] !== o || g[24] !== d || g[25] !== c
              ? ((u = { result: o, retry: d, startAfterRestart: c }),
                (g[23] = o),
                (g[24] = d),
                (g[25] = c),
                (g[26] = u))
              : (u = g[26]),
            u
          )
        })(U, eu, t, null != J.data && !ep && !ee && !ea),
        ex = ep || "pendingRestart" === ey.result.status
      F[2] !== $
        ? ((a = (0, o.JF)($, "gcpSetup") && (0, o.JF)($, "modelProviderSetup")), (F[2] = $), (F[3] = a))
        : (a = F[3])
      let ew = a
      F[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            ec(null)
          }),
          (F[4] = l))
        : (l = F[4])
      let eb = l,
        ej = J.data
      if (null == ej) {
        let e
        return (
          F[5] !== J.isError
            ? ((e = (0, s.jsx)(ed, {
                children: J.isError
                  ? (0, s.jsx)("p", {
                      role: "status",
                      children: (0, s.jsx)(c.A, {
                        id: "settings.gateways.load.error",
                        defaultMessage: "Couldn't load gateway settings. Reopen settings to try again.",
                      }),
                    })
                  : (0, s.jsx)(m.y, {
                      children: (0, s.jsx)("p", {
                        role: "status",
                        children: (0, s.jsx)(c.A, {
                          id: "settings.gateways.load.pending",
                          defaultMessage: "Loading gateways\u2026",
                        }),
                      }),
                    }),
              })),
              (F[5] = J.isError),
              (F[6] = e))
            : (e = F[6]),
          e
        )
      }
      let { response: ev, requirements: e_ } = ej
      F[7] !== ej.authMode || F[8] !== H || F[9] !== e_ || F[10] !== ev
        ? ((x = (0, N.Ay)(ev, e_, ej.authMode)),
          (b =
            null != H && "add" !== H.action
              ? x.find((e) => {
                  let { id: t } = e
                  return t === H.id
                })
              : void 0),
          (F[7] = ej.authMode),
          (F[8] = H),
          (F[9] = e_),
          (F[10] = ev),
          (F[11] = x),
          (F[12] = b))
        : ((x = F[11]), (b = F[12]))
      let eA = b
      F[13] !== e_ || F[14] !== ev ? ((j = (0, N.eL)(ev, e_)), (F[13] = e_), (F[14] = ev), (F[15] = j)) : (j = F[15])
      let eC = j
      F[16] !== ej || F[17] !== U || F[18] !== en || F[19] !== Y || F[20] !== W || F[21] !== eu
        ? ((v = async (e) => {
            if (el.current) return
            ;((el.current = !0), et(!0), ec(null), null == en && W.set(eg, U, eu))
            let t = !1
            await e()
              .catch((e) => {
                ;((t = !0), ec(e instanceof O.S8 ? e.reason : "save"))
              })
              .then(async () => {
                for (let e of Y.getQueryCache().findAll({
                  queryKey: ["config"],
                  predicate: (e) => e.queryKey[2] === U,
                }))
                  (0, p.y)(Y, e.queryKey)
                let e = ["config", "gateways", U]
                if ((await Y.invalidateQueries({ queryKey: e, exact: !0 }), t)) {
                  let t = Y.getQueryData(e)
                  null != t && (eh(t) !== eh(ej) || t.authMode !== ej.authMode) && W.set(em, U, !0)
                }
              })
              .finally(() => {
                ;((el.current = !1), et(!1))
              })
          }),
          (F[16] = ej),
          (F[17] = U),
          (F[18] = en),
          (F[19] = Y),
          (F[20] = W),
          (F[21] = eu),
          (F[22] = v))
        : (v = F[22])
      let eS = v,
        eM = null
      if ("busy" === er) {
        let e
        ;(F[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, {
              id: "settings.gateways.error.busy",
              defaultMessage: "Finish running chats before changing sign-in",
            })),
            (F[23] = e))
          : (e = F[23]),
          (eM = e))
      } else if ("test" === er) {
        let e
        ;(F[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, {
              id: "settings.gateways.test.unavailable",
              defaultMessage: "Couldn't start the connection test. Try again.",
            })),
            (F[24] = e))
          : (e = F[24]),
          (eM = e))
      } else if ("managed" === er) {
        let e
        ;(F[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, {
              id: "settings.gateways.error.managed",
              defaultMessage: "Your organization manages this setting",
            })),
            (F[25] = e))
          : (e = F[25]),
          (eM = e))
      } else if ("gcloudNotInstalled" === er || "credentialFileInvalid" === er || "authCommandFailed" === er) {
        let e
        ;(F[26] !== er
          ? ((e = (0, s.jsx)(c.A, {
              id: "settings.gateways.error.gcpAuth",
              defaultMessage:
                "{reason, select, gcloudNotInstalled {Install the Google Cloud CLI on this host and try again} credentialFileInvalid {Choose a readable Google Cloud credential JSON file and try again} other {Google Cloud could not get an access token. Check your credentials and try again.}}",
              values: { reason: er },
            })),
            (F[26] = er),
            (F[27] = e))
          : (e = F[27]),
          (eM = e))
      } else if (null != er) {
        let e
        ;(F[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, {
              id: "settings.gateways.error.save",
              defaultMessage: "Couldn't finish saving. Settings have been refreshed; review them and try again.",
            })),
            (F[28] = e))
          : (e = F[28]),
          (eM = e))
      }
      let ek = null
      if (null != eM) {
        let e
        ;(F[29] !== eM
          ? ((e = (0, s.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eM })),
            (F[29] = eM),
            (F[30] = e))
          : (e = F[30]),
          (ek = e))
      }
      let eN = null == H ? ek : null
      return (
        F[31] !== U || F[32] !== ev || F[33] !== eS || F[34] !== W || F[35] !== eu || F[36] !== eC
          ? ((_ = (e) => {
              e !== eu &&
                eS(async () => {
                  if (eC) throw new O.S8("managed")
                  await (0, O.Wo)(
                    W,
                    U,
                    [{ keyPath: "model_provider", value: e, mergeStrategy: "replace" }],
                    (0, f.uy)(ev.layers),
                  )
                })
            }),
            (F[31] = U),
            (F[32] = ev),
            (F[33] = eS),
            (F[34] = W),
            (F[35] = eu),
            (F[36] = eC),
            (F[37] = _))
          : (_ = F[37]),
        F[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (e) => {
              ;(eb(), X({ action: "add", providerType: e }))
            }),
            (A = (e) => {
              let { id: t } = e
              ;(eb(), X({ action: "edit", id: t }))
            }),
            (S = (e) => {
              let { id: t } = e
              ;(eb(), X({ action: "delete", id: t }))
            }),
            (F[38] = A),
            (F[39] = S),
            (F[40] = k))
          : ((A = F[38]), (S = F[39]), (k = F[40])),
        F[41] !== ey || F[42] !== U || F[43] !== Q || F[44] !== eS || F[45] !== W || F[46] !== eu
          ? ((T = () => {
              eS(async () => {
                let e = await (0, I.f)(W, U)
                ;(e || (await ey.startAfterRestart()),
                  W.set(eg, U, eu),
                  W.set(em, U, !1),
                  await (0, I.q)(W, U, !e),
                  e && (U === w.fI ? await Q("/login") : es(!0)))
              })
            }),
            (F[41] = ey),
            (F[42] = U),
            (F[43] = Q),
            (F[44] = eS),
            (F[45] = W),
            (F[46] = eu),
            (F[47] = T))
          : (T = F[47]),
        F[48] !== ey || F[49] !== ex
          ? ((q = () => {
              el.current || ex || (ec(null), ey.retry())
            }),
            (F[48] = ey),
            (F[49] = ex),
            (F[50] = q))
          : (q = F[50]),
        F[51] !== J
          ? ((E = () => {
              ;(es(!1), J.refetch())
            }),
            (F[51] = J),
            (F[52] = E))
          : (E = F[52]),
        F[53] !== ea || F[54] !== U || F[55] !== E
          ? ((z = (0, s.jsx)(y.$, { hostId: U, open: ea, onOpenChange: es, onAuthenticated: E })),
            (F[53] = ea),
            (F[54] = U),
            (F[55] = E),
            (F[56] = z))
          : (z = F[56]),
        F[57] !== ee ||
        F[58] !== ej ||
        F[59] !== H?.action ||
        F[60] !== eA ||
        F[61] !== ek ||
        F[62] !== x ||
        F[63] !== U ||
        F[64] !== eS ||
        F[65] !== W ||
        F[66] !== eu
          ? ((K =
              H?.action === "delete" && null != eA
                ? (0, s.jsx)(M, {
                    gateway: eA,
                    current: eA.id === eu,
                    gateways: x,
                    busy: ee,
                    error: ek,
                    onClose: () => {
                      ;(X(null), eb())
                    },
                    onDelete: (e) => {
                      eS(async () => {
                        ;(await (0, O.Ix)(W, U, eA.id, e, ej), X(null))
                      })
                    },
                  })
                : null),
            (F[57] = ee),
            (F[58] = ej),
            (F[59] = H?.action),
            (F[60] = eA),
            (F[61] = ek),
            (F[62] = x),
            (F[63] = U),
            (F[64] = eS),
            (F[65] = W),
            (F[66] = eu),
            (F[67] = K))
          : (K = F[67]),
        F[68] !== ee ||
        F[69] !== ej ||
        F[70] !== H ||
        F[71] !== Z ||
        F[72] !== eA ||
        F[73] !== ek ||
        F[74] !== U ||
        F[75] !== eS ||
        F[76] !== W ||
        F[77] !== eu ||
        F[78] !== eC ||
        F[79] !== ew ||
        F[80] !== $
          ? ((G =
              H?.action === "add" || (H?.action === "edit" && null != eA)
                ? (0, s.jsx)(
                    C.dj,
                    {
                      type: "add" === H.action ? H.providerType : eA?.type,
                      gateway: eA,
                      canChangeCurrent: !eC,
                      canBrowse: U === w.fI,
                      readOnly: eA?.type === "gcp" && !ew,
                      discovery: Z.data ?? void 0,
                      discoveryFailed: Z.isError,
                      supportsAwsCredentials: !Z.isSuccess || null != Z.data,
                      supportsAccessKeys: (0, o.JF)($, "bedrockAccessKeysLogin"),
                      busy: ee,
                      error: ek,
                      onChange: eb,
                      onClose: () => {
                        ;(X(null), eb())
                      },
                      isSelected: eA?.id === eu,
                      onSave: (e, t) => {
                        eS(async () => {
                          if (
                            eA?.managed ||
                            eA?.external ||
                            (eC && ((t && eA?.id !== eu) || "apiKey" === e.auth || "accessKeys" === e.auth))
                          )
                            throw new O.S8("managed")
                          ;((await (0, O.uL)(W, U, eA?.id ?? null, e, ej, t)) && W.set(em, U, !0), X(null))
                        })
                      },
                    },
                    "add" === H.action ? H.providerType : H.id,
                  )
                : null),
            (F[68] = ee),
            (F[69] = ej),
            (F[70] = H),
            (F[71] = Z),
            (F[72] = eA),
            (F[73] = ek),
            (F[74] = U),
            (F[75] = eS),
            (F[76] = W),
            (F[77] = eu),
            (F[78] = eC),
            (F[79] = ew),
            (F[80] = $),
            (F[81] = G))
          : (G = F[81]),
        F[82] !== ee ||
        F[83] !== ey.result ||
        F[84] !== x ||
        F[85] !== ex ||
        F[86] !== eu ||
        F[87] !== eC ||
        F[88] !== ew ||
        F[89] !== T ||
        F[90] !== q ||
        F[91] !== z ||
        F[92] !== K ||
        F[93] !== G ||
        F[94] !== eN ||
        F[95] !== _
          ? ((V = (0, s.jsxs)(eo, {
              gateways: x,
              selectedProvider: eu,
              selectionManaged: eC,
              busy: ee,
              supportsGcp: ew,
              error: eN,
              testResult: ey.result,
              restartRequired: ex,
              onSelect: _,
              onAdd: k,
              onEdit: A,
              onDelete: S,
              onRestart: T,
              onTest: q,
              children: [z, K, G],
            })),
            (F[82] = ee),
            (F[83] = ey.result),
            (F[84] = x),
            (F[85] = ex),
            (F[86] = eu),
            (F[87] = eC),
            (F[88] = ew),
            (F[89] = T),
            (F[90] = q),
            (F[91] = z),
            (F[92] = K),
            (F[93] = G),
            (F[94] = eN),
            (F[95] = _),
            (F[96] = V))
          : (V = F[96]),
        V
      )
    }
    function eh(e) {
      let t = e?.requirements?.modelProvider ?? e?.response.config.model_provider ?? "openai"
      return (0, l.sha256)(
        JSON.stringify([
          t,
          (0, N.YV)(e?.response.config.model_providers)[t],
          (0, N.YV)(e?.requirements?.modelProviders)[t],
        ]),
      )
    }
  },
  oFmV(e, t, a) {
    let s = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { S: s })
  },
  pO0d(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      i = a("oyxz"),
      l = a("Wf1j"),
      r = a("AWNZ"),
      o = a("DDOY")
    function d(e) {
      let t,
        a = (0, n.c)(2),
        { title: l } = e
      return (
        a[0] !== l
          ? ((t =
              "localizedText" in l ? (0, s.jsx)(s.Fragment, { children: l.localizedText }) : (0, s.jsx)(i.A, { ...l })),
            (a[0] = l),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    a.d(
      t,
      {},
      {
        Ct: d,
        GC: function (e) {
          let t,
            a,
            l,
            o,
            c,
            u,
            g,
            m,
            f,
            p = (0, n.c)(19)
          p[0] !== e
            ? (({ entry: a, anchored: c, description: t, renderLabel: o, ...l } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = a),
              (p[3] = l),
              (p[4] = o),
              (p[5] = c))
            : ((t = p[1]), (a = p[2]), (l = p[3]), (o = p[4]), (c = p[5]))
          let y = void 0 === c || c
          p[6] !== a.title ? ((u = (0, s.jsx)(d, { title: a.title })), (p[6] = a.title), (p[7] = u)) : (u = p[7])
          let h = u,
            x = y ? a.id : void 0
          return (
            p[8] !== h || p[9] !== o ? ((g = null == o ? h : o(h)), (p[8] = h), (p[9] = o), (p[10] = g)) : (g = p[10]),
            p[11] !== t || p[12] !== a.description
              ? ((m = null == a.description ? t : (0, s.jsx)(i.A, { ...a.description })),
                (p[11] = t),
                (p[12] = a.description),
                (p[13] = m))
              : (m = p[13]),
            p[14] !== l || p[15] !== x || p[16] !== g || p[17] !== m
              ? ((f = (0, s.jsx)(r.ic, { ...l, searchAnchor: x, label: g, description: m })),
                (p[14] = l),
                (p[15] = x),
                (p[16] = g),
                (p[17] = m),
                (p[18] = f))
              : (f = p[18]),
            f
          )
        },
        ek: function (e) {
          let t,
            a,
            i = (0, n.c)(12),
            { entry: r, anchored: d, className: c, children: u } = e,
            g = void 0 === d || d,
            m = (0, l.A)(),
            f = g ? r.id : void 0,
            p = g ? r.id : void 0,
            y = g ? -1 : void 0,
            h = g ? "group" : void 0
          return (
            i[0] !== g || i[1] !== r || i[2] !== m
              ? ((t = g ? (0, o.hz)(m, r.title) : void 0), (i[0] = g), (i[1] = r), (i[2] = m), (i[3] = t))
              : (t = i[3]),
            i[4] !== u || i[5] !== c || i[6] !== f || i[7] !== p || i[8] !== y || i[9] !== h || i[10] !== t
              ? ((a = (0, s.jsx)("div", {
                  id: f,
                  "data-settings-search-entry": p,
                  tabIndex: y,
                  role: h,
                  "aria-label": t,
                  className: c,
                  children: u,
                })),
                (i[4] = u),
                (i[5] = c),
                (i[6] = f),
                (i[7] = p),
                (i[8] = y),
                (i[9] = h),
                (i[10] = t),
                (i[11] = a))
              : (a = i[11]),
            a
          )
        },
        iu: function (e) {
          let t,
            a,
            i,
            l = (0, n.c)(6)
          return (
            l[0] !== e ? (({ action: t, ...a } = e), (l[0] = e), (l[1] = t), (l[2] = a)) : ((t = l[1]), (a = l[2])),
            l[3] !== t || l[4] !== a
              ? ((i = (0, s.jsx)(r.ic, { ...a, control: t })), (l[3] = t), (l[4] = a), (l[5] = i))
              : (i = l[5]),
            i
          )
        },
        kk: function (e) {
          let t,
            a,
            l,
            o,
            c,
            u,
            g,
            m = (0, n.c)(15)
          m[0] !== e
            ? (({ entry: a, anchored: o, description: t, ...l } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = a),
              (m[3] = l),
              (m[4] = o))
            : ((t = m[1]), (a = m[2]), (l = m[3]), (o = m[4]))
          let f = void 0 === o || o ? a.id : void 0
          return (
            m[5] !== a.title ? ((c = (0, s.jsx)(d, { title: a.title })), (m[5] = a.title), (m[6] = c)) : (c = m[6]),
            m[7] !== t || m[8] !== a.description
              ? ((u = null == a.description ? t : (0, s.jsx)(i.A, { ...a.description })),
                (m[7] = t),
                (m[8] = a.description),
                (m[9] = u))
              : (u = m[9]),
            m[10] !== l || m[11] !== f || m[12] !== c || m[13] !== u
              ? ((g = (0, s.jsx)(r.kG, { ...l, searchAnchor: f, label: c, description: u })),
                (m[10] = l),
                (m[11] = f),
                (m[12] = c),
                (m[13] = u),
                (m[14] = g))
              : (g = m[14]),
            g
          )
        },
      },
    )
  },
  BSnr(e, t, a) {
    a.d(t, { X: () => l })
    var s = a("ABep"),
      n = a("QosV"),
      i = a("on57")
    let l = Object.assign(
      function (e) {
        let t,
          a,
          l = (0, n.c)(6),
          { children: r, id: o, className: d } = e
        return (
          l[0] !== d ? ((t = (0, i.A)("flex flex-col", d)), (l[0] = d), (l[1] = t)) : (t = l[1]),
          l[2] !== r || l[3] !== o || l[4] !== t
            ? ((a = (0, s.jsx)("section", { id: o, className: t, children: r })),
              (l[2] = r),
              (l[3] = o),
              (l[4] = t),
              (l[5] = a))
            : (a = l[5]),
          a
        )
      },
      {
        Header: function (e) {
          let t,
            a,
            l,
            r,
            o,
            d,
            c,
            u = (0, n.c)(33),
            {
              title: g,
              subtitle: m,
              actions: f,
              actionsAlignment: p,
              className: y,
              size: h,
              showDivider: x,
              titleGap: w,
              spacing: b,
              subtitlePlacement: j,
              subtitleWrap: v,
            } = e,
            _ = void 0 === h ? "default" : h,
            A = void 0 === b ? "default" : b,
            C = void 0 === j ? "below-title" : j,
            S = void 0 === v ? "balance" : v,
            M = null != g,
            k = null != m,
            N = null != f,
            O = "compact" === _
          u[0] !== O || u[1] !== m || u[2] !== C || u[3] !== S
            ? ((t = m
                ? (0, s.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === S ? "text-balance" : "text-wrap",
                      O ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === C && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = O),
              (u[1] = m),
              (u[2] = C),
              (u[3] = S),
              (u[4] = t))
            : (t = u[4])
          let I = t
          if (!M && !k && !N) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(s.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let R =
              M && (void 0 === x || x) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            P = "below-header" === C ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            D = k && "compact" === A && "pb-2",
            L = k && "compact" !== A && "pb-3"
          u[6] !== y ||
          u[7] !== k ||
          u[8] !== O ||
          u[9] !== A ||
          u[10] !== D ||
          u[11] !== L ||
          u[12] !== R ||
          u[13] !== P
            ? ((a = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                R,
                P,
                D,
                L,
                !k && (0, i.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                k && O && "items-center",
                k && !O && "items-start",
                y,
              )),
              (u[6] = y),
              (u[7] = k),
              (u[8] = O),
              (u[9] = A),
              (u[10] = D),
              (u[11] = L),
              (u[12] = R),
              (u[13] = P),
              (u[14] = a))
            : (a = u[14])
          let T =
            "none" === (void 0 === w ? "default" : w)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== T ? ((l = (0, i.A)("flex min-w-0 flex-1 flex-col", T)), (u[15] = T), (u[16] = l)) : (l = u[16]),
            u[17] !== k || u[18] !== _ || u[19] !== g
              ? ((r = g
                  ? (0, s.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === _ && "text-sm leading-[18px]",
                        ("large" === _ || ("default" === _ && k)) && "text-lg",
                        ("base" === _ || ("default" === _ && !k)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (u[17] = k),
                (u[18] = _),
                (u[19] = g),
                (u[20] = r))
              : (r = u[20]))
          let q = "below-title" === C ? I : null
          ;(u[21] !== l || u[22] !== r || u[23] !== q
            ? ((o = (0, s.jsxs)("div", { className: l, children: [r, q] })),
              (u[21] = l),
              (u[22] = r),
              (u[23] = q),
              (u[24] = o))
            : (o = u[24]),
            u[25] !== f || u[26] !== p
              ? ((d = f
                  ? (0, s.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === p && "self-end"),
                      children: f,
                    })
                  : null),
                (u[25] = f),
                (u[26] = p),
                (u[27] = d))
              : (d = u[27]))
          let E = "below-header" === C ? I : null
          return (
            u[28] !== a || u[29] !== o || u[30] !== d || u[31] !== E
              ? ((c = (0, s.jsxs)("div", { className: a, children: [o, d, E] })),
                (u[28] = a),
                (u[29] = o),
                (u[30] = d),
                (u[31] = E),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            a,
            l = (0, n.c)(5),
            { children: r, className: o } = e
          return (
            l[0] !== o ? ((t = (0, i.A)("flex flex-col gap-1.5", o)), (l[0] = o), (l[1] = t)) : (t = l[1]),
            l[2] !== r || l[3] !== t
              ? ((a = (0, s.jsx)("div", { className: t, children: r })), (l[2] = r), (l[3] = t), (l[4] = a))
              : (a = l[4]),
            a
          )
        },
        Footer: function (e) {
          let t,
            a,
            l = (0, n.c)(6),
            { children: r, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            l[0] !== o || l[1] !== c
              ? ((t = (0, i.A)("text-balance text-secondary", c, o)), (l[0] = o), (l[1] = c), (l[2] = t))
              : (t = l[2]),
            l[3] !== r || l[4] !== t
              ? ((a = (0, s.jsx)("div", { className: t, children: r })), (l[3] = r), (l[4] = t), (l[5] = a))
              : (a = l[5]),
            a
          )
        },
      },
    )
  },
  DDOY(e, t, a) {
    var s = a("Ywss"),
      n = a("iiZm")
    function i(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    a.d(
      t,
      {},
      {
        Xl: function (e, t, a) {
          let n = (0, s.Rr)(e),
            i = new URLSearchParams(n.search)
          for (let [e, t] of Object.entries(a ?? {})) i.set(e, t)
          return (0, s.AO)({ ...n, search: i.toString(), hash: t })
        },
        hz: i,
        s9: function (e, t, a) {
          let s = a.trim()
          return 0 === s.length
            ? []
            : e
                .flatMap((e) => {
                  let a = i(t, e.title),
                    l = (0, n.gr)(a, s),
                    r = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(s.toLocaleLowerCase(t.locale)),
                    o = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, n.gr)(i(t, e), s) > 0)
                  return 0 !== l || r || o
                    ? [
                        {
                          id: e.id,
                          label: a,
                          score: l,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: a, path: s, searchParams: n }) => ({
                  id: e,
                  label: t,
                  sectionSlug: a,
                  ...(null == s ? {} : { path: s }),
                  searchParams: n,
                }))
        },
      },
    )
  },
}
//# sourceMappingURL=433468.338ed49a79.js.map
