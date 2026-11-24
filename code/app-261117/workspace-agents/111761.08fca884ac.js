export const __rspack_esm_ids = [111761]
export const __webpack_modules__ = {
  FROa(e, t, l) {
    var o = l("ABep"),
      n = l("QosV"),
      a = l("on57"),
      s = l("zd8w"),
      i = l("wD9O"),
      r = l("JNtf")
    l.d(
      t,
      {},
      {
        A: "min(720px, calc(100vh - 2rem))",
        Y: function (e) {
          let t,
            l,
            c,
            d,
            u,
            p,
            h = (0, n.c)(19),
            { children: C, loading: g, onOpenChange: m } = e,
            [x, f] = (0, s.useState)(null),
            b = (0, i.dz)()
          ;(h[0] !== x || h[1] !== b
            ? ((t = null == x ? void 0 : { height: `min(${x}px, calc((100dvh - 2rem) / ${b}))` }),
              (h[0] = x),
              (h[1] = b),
              (h[2] = t))
            : (t = h[2]),
            h[3] !== t ? ((l = { "aria-describedby": void 0, style: t }), (h[3] = t), (h[4] = l)) : (l = h[4]),
            h[5] !== x || h[6] !== g
              ? ((c = (e) => {
                  !g && null == x && null != e && e.offsetHeight > 0 && f(e.offsetHeight)
                }),
                (h[5] = x),
                (h[6] = g),
                (h[7] = c))
              : (c = h[7]))
          let y = (g || null != x) && "h-full",
            k = null != x && "overflow-y-auto"
          return (
            h[8] !== y || h[9] !== k ? ((d = (0, a.A)(y, k)), (h[8] = y), (h[9] = k), (h[10] = d)) : (d = h[10]),
            h[11] !== C || h[12] !== c || h[13] !== d
              ? ((u = (0, o.jsx)("div", { ref: c, className: d, children: C })),
                (h[11] = C),
                (h[12] = c),
                (h[13] = d),
                (h[14] = u))
              : (u = h[14]),
            h[15] !== m || h[16] !== l || h[17] !== u
              ? ((p = (0, o.jsx)(r.lG, {
                  open: !0,
                  onOpenChange: m,
                  autoFocusCloseButton: !0,
                  size: "setup",
                  contentProps: l,
                  children: u,
                })),
                (h[15] = m),
                (h[16] = l),
                (h[17] = u),
                (h[18] = p))
              : (p = h[18]),
            p
          )
        },
      },
    )
  },
  TC6X(e, t, l) {
    var o = l("ABep"),
      n = l("QosV"),
      a = l("oyxz"),
      s = l("Sm6l"),
      i = l("JNtf"),
      r = l("mUDD"),
      c = l("FROa"),
      d = l("lmaZ")
    function u(e) {
      let t,
        l,
        c,
        u,
        p,
        h,
        C,
        g,
        m,
        x,
        f,
        b,
        y = (0, n.c)(27),
        { isPending: k, embedded: w, isFetching: A, onOpenChange: M, onRetry: v } = e,
        _ = void 0 !== w && w,
        I = _ ? "h2" : i.L3,
        R = _ ? "p" : i.rr
      if (k) {
        let e
        return (y[0] !== _ ? ((e = (0, o.jsx)(d.$, { embedded: _ })), (y[0] = _), (y[1] = e)) : (e = y[1]), e)
      }
      return (
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, o.jsx)(a.A, {
              id: "beacons.connectApp.loadError.title",
              defaultMessage: "Couldn\u2019t load connector",
            })),
            (y[2] = t))
          : (t = y[2]),
        y[3] !== I ? ((l = (0, o.jsx)(I, { children: t })), (y[3] = I), (y[4] = l)) : (l = y[4]),
        y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, o.jsx)(a.A, {
              id: "beacons.connectApp.loadError.description",
              defaultMessage: "Try again, or cancel and return to the previous page",
            })),
            (y[5] = c))
          : (c = y[5]),
        y[6] !== R ? ((u = (0, o.jsx)(R, { children: c })), (y[6] = R), (y[7] = u)) : (u = y[7]),
        y[8] !== l || y[9] !== u
          ? ((p = (0, o.jsx)(r.c7, { title: l, subtitle: u })), (y[8] = l), (y[9] = u), (y[10] = p))
          : (p = y[10]),
        y[11] !== M ? ((h = () => M(!1)), (y[11] = M), (y[12] = h)) : (h = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, o.jsx)(a.A, { id: "beacons.connectApp.loadError.button.cancel", defaultMessage: "Cancel" })),
            (y[13] = C))
          : (C = y[13]),
        y[14] !== A || y[15] !== h
          ? ((g = (0, o.jsx)(s.$, { color: "secondary", disabled: A, onClick: h, type: "button", children: C })),
            (y[14] = A),
            (y[15] = h),
            (y[16] = g))
          : (g = y[16]),
        y[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, o.jsx)(a.A, { id: "beacons.connectApp.loadError.button.retry", defaultMessage: "Retry" })),
            (y[17] = m))
          : (m = y[17]),
        y[18] !== A || y[19] !== v
          ? ((x = (0, o.jsx)(s.$, { color: "primary", loading: A, onClick: v, type: "button", children: m })),
            (y[18] = A),
            (y[19] = v),
            (y[20] = x))
          : (x = y[20]),
        y[21] !== x || y[22] !== g
          ? ((f = (0, o.jsxs)(r.Es, { children: [g, x] })), (y[21] = x), (y[22] = g), (y[23] = f))
          : (f = y[23]),
        y[24] !== f || y[25] !== p
          ? ((b = (0, o.jsxs)(r.R4, { className: "select-none", children: [p, f] })),
            (y[24] = f),
            (y[25] = p),
            (y[26] = b))
          : (b = y[26]),
        b
      )
    }
    l.d(
      t,
      {},
      {
        m: u,
        p: function (e) {
          let t,
            l,
            a = (0, n.c)(6)
          return (
            a[0] !== e ? ((t = (0, o.jsx)(u, { ...e })), (a[0] = e), (a[1] = t)) : (t = a[1]),
            a[2] !== e.isPending || a[3] !== e.onOpenChange || a[4] !== t
              ? ((l = (0, o.jsx)(c.Y, { loading: e.isPending, onOpenChange: e.onOpenChange, children: t })),
                (a[2] = e.isPending),
                (a[3] = e.onOpenChange),
                (a[4] = t),
                (a[5] = l))
              : (l = a[5]),
            l
          )
        },
      },
    )
  },
  Sx5O(e, t, l) {
    var o = l("ABep"),
      n = l("QosV"),
      a = l("ecE5"),
      s = l("TC6X")
    function i(e) {
      let t,
        l = (0, n.c)(2)
      return (l[0] !== e ? ((t = (0, o.jsx)(a.Z, { ...e, app: null })), (l[0] = e), (l[1] = t)) : (t = l[1]), t)
    }
    l.d(t, { B: () => i, p: () => s.p })
  },
  keHI(e, t, l) {
    var o = l("S2r0"),
      n = l("CpsU"),
      a = l.n(n),
      s = l("i5ac"),
      i = l.n(s),
      r = l("Kwur"),
      c = l("rvFo")
    l.d(
      t,
      {},
      {
        T3: function (e, t, l) {
          return (0, o.j)({
            queryKey: ["workspace-agent", "connector-actions", e, t, l],
            enabled: null != t,
            queryFn: async ({ signal: o }) => {
              if (null == t) throw Error("Sign in before loading agent app actions")
              return (
                await r.Request.safeGet("/aip/connectors/{connector_id}/actions", {
                  expectedIdentity: { accountId: e, userId: t },
                  parameters: { path: { connector_id: l } },
                  signal: o,
                })
              ).actions.map((e) => ({
                name: e.name,
                title: e.title ?? null,
                description: e.description,
                isEnabled: !1 !== e.is_enabled,
                isPrivate: "private" === e.visibility,
                isReadOnly: !0 === e.is_read_only,
                isConsequential: !1 !== e.is_consequential,
              }))
            },
            retry: !1,
            staleTime: c.D.FIVE_MINUTES,
          })
        },
        T9: function (e, t, l = !0) {
          return (0, o.j)({
            queryKey: ["workspace-agent", "app-catalog", e, t],
            enabled: l && null != t,
            queryFn: async ({ signal: l }) => {
              if (null == t) throw Error("Sign in before loading agent apps")
              let o = await r.Request.safeGet("/hermes/apps/browse", {
                  expectedIdentity: { accountId: e, userId: t },
                  signal: l,
                }),
                n = [
                  ["recommended", o.recommended_apps],
                  ["workspace", o.workspace_apps],
                  ["public", o.public_apps],
                ]
              return i()(
                n.flatMap(([e, t]) =>
                  t.map((t) => ({
                    id: t.id,
                    name: t.display_name,
                    description: t.subtitle ?? null,
                    logoUrl: t.logo_url ?? null,
                    logoDarkUrl: t.logo_dark_url ?? null,
                    source: e,
                    disabledByAdmin: !0 === t.disabled_by_admin,
                    connectorType: null,
                    status: null,
                    supportedAuthTypes: null,
                  })),
                ),
                "id",
              )
            },
            retry: !1,
            staleTime: c.D.FIVE_MINUTES,
          })
        },
        ve: function ({ accountId: e, userId: t, connectorIds: l, enabled: n = !0 }) {
          let s = [...new Set(l)].sort()
          return (0, o.j)({
            queryKey: ["workspace-agent", "apps", e, t, s],
            queryFn: ({ signal: l }) =>
              (async function (e, t, l, o) {
                if (null == t) throw Error("Sign in before loading agent apps")
                let n = await Promise.all(
                  a()(l, 500).map((l) =>
                    r.Request.safePost("/hermes/apps/content", {
                      requestBody: { app_ids: l },
                      expectedIdentity: { accountId: e, userId: t },
                      signal: o,
                    }),
                  ),
                )
                return {
                  apps: n.flatMap((e) =>
                    e.apps.map((e) => ({
                      id: e.id,
                      name: e.name,
                      description: e.description?.trim() || null,
                      logoUrl: e.logo_url ?? null,
                      logoDarkUrl: e.logo_url_dark ?? null,
                      source: "selected",
                      disabledByAdmin: !1,
                      connectorType: e.connector_type ?? null,
                      status: e.status ?? null,
                      supportedAuthTypes: e.supported_auth_types ?? null,
                    })),
                  ),
                  missingConnectorIds: n.flatMap((e) => e.missing_app_ids),
                }
              })(e, t, s, l),
            enabled: n && null != t,
            retry: !1,
            staleTime: c.D.FIVE_MINUTES,
          })
        },
      },
    )
  },
  esvS(e, t, l) {
    var o = l("ABep"),
      n = l("QosV"),
      a = l("qmMi"),
      s = l("DBCl"),
      i = l("zd8w"),
      r = l("Wf1j"),
      c = l("oyxz"),
      d = l("Ywss"),
      u = l("ASxG"),
      p = l("Sx5O"),
      h = l("JAom"),
      C = l("SPnB"),
      g = l("MM0V"),
      m = l("Sm6l"),
      x = l("RNul"),
      f = l("OWtl"),
      b = l("AWNZ"),
      y = l("ZEx5"),
      k = l("soaw"),
      w = l("H253")
    let A = u.Ikc({ workspaceAgentPersonalConnectionFailed: u.zMY() })
    function M(e) {
      let t,
        l,
        u,
        M,
        _,
        I,
        R,
        j,
        L = (0, n.c)(37),
        { accountId: T, userId: S, agentId: V, returnTo: z, children: E } = e,
        F = (0, a.gh)(f.u),
        H = (0, r.A)(),
        B = (0, k.a)(),
        Z = (0, d.zy)(),
        { data: N, isPending: O, isError: P, refetch: G } = (0, a._U)(w.Q, V),
        [D, U] = (0, i.useState)(null)
      L[0] !== Z.state
        ? ((t = A.safeParse(Z.state).data?.workspaceAgentPersonalConnectionFailed ?? !1), (L[0] = Z.state), (L[1] = t))
        : (t = L[1])
      let [Y, q] = (0, i.useState)(t),
        { markAppConnectOAuthPending: $ } = (0, h.ZN)()
      L[2] !== T || L[3] !== B || L[4] !== F || L[5] !== S
        ? ((l = () => B() && F.get(C.chatGptAuthenticatedAccountId$) === T && F.get(C.o8) === S),
          (L[2] = T),
          (L[3] = B),
          (L[4] = F),
          (L[5] = S),
          (L[6] = l))
        : (l = L[6])
      let W = l
      L[7] !== z
        ? ((u = () => ({
            returnTo: z,
            resumeTarget: {
              kind: "return-to-location-state",
              successState: { workspaceAgentPersonalConnectionFailed: !1 },
              failureState: { workspaceAgentPersonalConnectionFailed: !0 },
            },
          })),
          (L[7] = z),
          (L[8] = u))
        : (u = L[8])
      let K = u
      if (O) {
        let e
        return (
          L[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsxs)("div", {
                role: "status",
                children: [
                  (0, o.jsx)(x.y, {}),
                  (0, o.jsx)(c.A, {
                    id: "workspaceAgents.connections.loading",
                    defaultMessage: "Checking app connections\u2026",
                  }),
                ],
              })),
              (L[9] = e))
            : (e = L[9]),
          e
        )
      }
      if (P) {
        let e, t, l, n
        return (
          L[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(c.A, {
                id: "workspaceAgents.connections.loadError",
                defaultMessage: "Unable to check app connections",
              })),
              (L[10] = e))
            : (e = L[10]),
          L[11] !== G ? ((t = () => void G()), (L[11] = G), (L[12] = t)) : (t = L[12]),
          L[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, o.jsx)(c.A, { id: "workspaceAgents.connections.retry", defaultMessage: "Retry" })), (L[13] = l))
            : (l = L[13]),
          L[14] !== t
            ? ((n = (0, o.jsx)(g.l, {
                type: "error",
                content: e,
                customCtas: (0, o.jsx)(m.$, { color: "secondary", onClick: t, children: l }),
              })),
              (L[14] = t),
              (L[15] = n))
            : (n = L[15]),
          n
        )
      }
      if (L[16] !== E || L[17] !== D || L[18] !== N || L[19] !== H) {
        let e = N?.filter(v)
        ;((M = D?.link_status === "missing_link" ? void 0 : (D?.link_id ?? void 0)),
          (_ =
            null == E
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    e?.length === 0
                      ? (0, o.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, o.jsx)(c.A, {
                            id: "workspaceAgents.connections.none",
                            defaultMessage: "This agent does not need a personal app connection",
                          }),
                        })
                      : null,
                    (0, o.jsx)(y.t, {
                      children: e?.map((e) => {
                        let t = e.needs_binding || "healthy" !== e.link_status,
                          l = (0, o.jsx)(c.A, {
                            id: "workspaceAgents.connections.connected",
                            defaultMessage: "Connected",
                          })
                        return (
                          t &&
                            (l =
                              "self" === e.fixability
                                ? (0, o.jsx)(m.$, {
                                    color: "secondary",
                                    size: "toolbar",
                                    disabled: null != D,
                                    onClick: () => {
                                      ;(q(!1), U(e))
                                    },
                                    children:
                                      "missing_link" === e.link_status
                                        ? (0, o.jsx)(c.A, {
                                            id: "workspaceAgents.connections.connect",
                                            defaultMessage: "Connect",
                                          })
                                        : (0, o.jsx)(c.A, {
                                            id: "workspaceAgents.connections.reconnect",
                                            defaultMessage: "Reconnect",
                                          }),
                                  })
                                : (0, o.jsx)(c.A, {
                                    id: "workspaceAgents.connections.unavailable",
                                    defaultMessage: "Unavailable",
                                  })),
                          (0, o.jsx)(
                            b.ic,
                            {
                              description: e.account_label,
                              label:
                                e.connector_name?.trim() ||
                                H.formatMessage({
                                  id: "workspaceAgents.connections.unnamed",
                                  defaultMessage: "Unnamed app",
                                }),
                              control: l,
                            },
                            e.connector_id,
                          )
                        )
                      }),
                    }),
                  ],
                })
              : E({
                  connections: N ?? [],
                  connecting: null != D,
                  onConnect: (e) => {
                    ;(q(!1), U(e))
                  },
                })),
          (L[16] = E),
          (L[17] = D),
          (L[18] = N),
          (L[19] = H),
          (L[20] = M),
          (L[21] = _))
      } else ((M = L[20]), (_ = L[21]))
      return (
        L[22] !== Y
          ? ((I = Y
              ? (0, o.jsx)(g.l, {
                  type: "error",
                  content: (0, o.jsx)(c.A, {
                    id: "workspaceAgents.connections.failed",
                    defaultMessage: "Unable to connect the app. Try again",
                  }),
                })
              : null),
            (L[22] = Y),
            (L[23] = I))
          : (I = L[23]),
        L[24] !== V ||
        L[25] !== D ||
        L[26] !== K ||
        L[27] !== W ||
        L[28] !== $ ||
        L[29] !== M ||
        L[30] !== G ||
        L[31] !== F
          ? ((R =
              null == D
                ? null
                : (0, o.jsx)(p.B, {
                    connectorId: D.connector_id,
                    hostId: s.iwv,
                    appConnectOptions: {
                      connectorId: D.connector_id,
                      productSku: "HERMES",
                      oauthReferrer: "workspace_agent_connections",
                    },
                    reauthLinkId: M,
                    isReconnecting: null != M,
                    beforeConnect: async () => W(),
                    getOAuthResumeContext: K,
                    postConnectSource: null,
                    showConnectedToast: !1,
                    waitForConnectedHandler: !0,
                    onOAuthStarted: (e) => {
                      ;($({
                        ...e,
                        ...K(),
                        hostId: s.iwv,
                        appConnectOptions: {
                          connectorId: D.connector_id,
                          productSku: "HERMES",
                          oauthReferrer: "workspace_agent_connections",
                        },
                      }),
                        F.query.invalidate(w.Q, V))
                    },
                    onConnected: async () => {
                      if (!W()) throw Error("The active account changed during app connection")
                      let e = await G()
                      if (W()) {
                        if (e.isError) throw e.error
                        ;(q(!1), U(null))
                      }
                    },
                    onConnectFailed: () => {
                      W() && q(!0)
                    },
                    onOpenChange: (e) => {
                      e || U(null)
                    },
                  })),
            (L[24] = V),
            (L[25] = D),
            (L[26] = K),
            (L[27] = W),
            (L[28] = $),
            (L[29] = M),
            (L[30] = G),
            (L[31] = F),
            (L[32] = R))
          : (R = L[32]),
        L[33] !== _ || L[34] !== I || L[35] !== R
          ? ((j = (0, o.jsxs)(o.Fragment, { children: [_, I, R] })), (L[33] = _), (L[34] = I), (L[35] = R), (L[36] = j))
          : (j = L[36]),
        j
      )
    }
    function v(e) {
      return "PERSONAL" === e.auth_type
    }
    l.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            l = (0, n.c)(6),
            { agentId: s, returnTo: i, children: r } = e,
            c = (0, a.Ul)(C.chatGptAuthenticatedAccountId$),
            d = (0, a.Ul)(C.o8)
          return (
            l[0] !== c || l[1] !== s || l[2] !== r || l[3] !== i || l[4] !== d
              ? ((t =
                  null == c || null == d
                    ? (0, o.jsx)(x.y, {})
                    : (0, o.jsx)(
                        M,
                        { accountId: c, userId: d, agentId: s, returnTo: i, children: r },
                        `${c}:${d}:${s}`,
                      )),
                (l[0] = c),
                (l[1] = s),
                (l[2] = r),
                (l[3] = i),
                (l[4] = d),
                (l[5] = t))
              : (t = l[5]),
            t
          )
        },
      },
    )
  },
  H253(e, t, l) {
    var o = l("qmMi"),
      n = l("SPnB"),
      a = l("OWtl"),
      s = l("QxT8")
    let i = (0, o.vU)(a.u, (e, { get: t }) => {
      let l = t(n.chatGptAuthenticatedAccountId$),
        o = t(n.o8)
      return (0, s.As)({
        accountId: l ?? "",
        userId: o,
        agentId: e,
        versionScope: "published",
        enabled: null != l && null != o,
      })
    })
    l.d(t, {}, { Q: i })
  },
  r9FN(e, t, l) {
    l.d(t, { WorkspaceAgentDirectoryDetails: () => I })
    var o = l("ABep"),
      n = l("QosV"),
      a = l("vvDI"),
      s = l("qmMi"),
      i = l("zd8w"),
      r = l("oyxz"),
      c = l("Ywss"),
      d = l("MM0V"),
      u = l("Sm6l"),
      p = l("Sezd"),
      h = l("JNtf"),
      C = l("mUDD"),
      g = l("RNul"),
      m = l("yGJW"),
      x = l("OWtl"),
      f = l("AWNZ"),
      b = l("ZEx5"),
      y = l("soaw"),
      k = l("esvS"),
      w = l("Pagv"),
      A = l("KYL2"),
      M = l("xm0K"),
      v = l("tYw1"),
      _ = l("zfwA")
    function I(e) {
      let t,
        l,
        f,
        _,
        I,
        L,
        T,
        S,
        V,
        z,
        E,
        F,
        H,
        B,
        Z,
        N,
        O,
        P,
        G,
        D,
        U,
        Y,
        q,
        $,
        W,
        K = (0, n.c)(124),
        { agentId: Q, onClose: X } = e,
        J = (0, s.gh)(x.u),
        ee = (0, c.Zp)(),
        et = (0, c.zy)(),
        el = (0, y.a)(),
        eo = (0, i.useId)(),
        { data: en, isPending: ea, isError: es, refetch: ei } = (0, s._U)(A.a3, Q),
        er = (0, s._U)(v.VB, Q),
        [ec, ed] = (0, i.useState)(!1),
        [eu, ep] = (0, i.useState)(!1),
        [eh, eC] = (0, i.useState)(!1)
      if (
        K[0] !== Q ||
        K[1] !== en?.latest_published_version ||
        K[2] !== eh ||
        K[3] !== es ||
        K[4] !== el ||
        K[5] !== ea ||
        K[6] !== er ||
        K[7] !== et.pathname ||
        K[8] !== et.search ||
        K[9] !== ee ||
        K[10] !== eu ||
        K[11] !== ec ||
        K[12] !== ei ||
        K[13] !== J
      ) {
        let e, n, s
        ;((L = new URLSearchParams(et.search)),
          (t = en?.latest_published_version),
          K[22] !== t?.config?.tools.connectors
            ? ((e = t?.config?.tools.connectors?.some(j)), (K[22] = t?.config?.tools.connectors), (K[23] = e))
            : (e = K[23]))
        let i = !0 === e
        if (
          ((S = i && L.has("setup")),
          (_ = i && !S),
          K[24] !== t?.name || K[25] !== t?.name.trim || K[26] !== Q
            ? ((n = t?.name.trim() || Q), (K[24] = t?.name), (K[25] = t?.name.trim), (K[26] = Q), (K[27] = n))
            : (n = K[27]),
          (f = n),
          K[28] !== t ||
          K[29] !== Q ||
          K[30] !== es ||
          K[31] !== el ||
          K[32] !== er ||
          K[33] !== f ||
          K[34] !== ee ||
          K[35] !== eu ||
          K[36] !== ec ||
          K[37] !== J
            ? ((s = () => {
                null == t ||
                  es ||
                  eu ||
                  (ep(!0),
                  eC(!1),
                  (0, m.yy)(J, a.QS, {
                    actionType:
                      ec && !er
                        ? "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK"
                        : "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK",
                    surface: "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL",
                    agentId: Q,
                    isPinned: !0 === er,
                  }),
                  (ec && !er ? (0, v.HS)(J, { id: Q, name: f, icon: t.icon }, !0) : Promise.resolve())
                    .then(() => {
                      el() && ee((0, w.OH)(Q))
                    })
                    .catch(() => {
                      el() && eC(!0)
                    })
                    .finally(() => {
                      el() && ep(!1)
                    }))
              }),
              (K[28] = t),
              (K[29] = Q),
              (K[30] = es),
              (K[31] = el),
              (K[32] = er),
              (K[33] = f),
              (K[34] = ee),
              (K[35] = eu),
              (K[36] = ec),
              (K[37] = J),
              (K[38] = s))
            : (s = K[38]),
          (I = s),
          _)
        ) {
          let e
          ;(K[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(r.A, {
                id: "workspaceAgents.discovery.setupDot",
                defaultMessage: "Set up {dot}",
                values: { dot: "agent" },
              })),
              (K[39] = e))
            : (e = K[39]),
            (T = e))
        } else if (ec && !er) {
          let e
          ;(K[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(r.A, { id: "workspaceAgents.discovery.add", defaultMessage: "Add agent" })), (K[40] = e))
            : (e = K[40]),
            (T = e))
        } else {
          let e
          ;(K[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(r.A, { id: "workspaceAgents.discovery.view", defaultMessage: "View agent" })),
              (K[41] = e))
            : (e = K[41]),
            (T = e))
        }
        if (ea) {
          let e
          ;(K[42] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, o.jsx)(g.y, {})), (K[42] = e)) : (e = K[42]),
            (l = e))
        } else if (es || null == t) {
          let e, t, n, a
          ;(K[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(r.A, {
                id: "workspaceAgents.discovery.unavailable",
                defaultMessage: "This agent is unavailable",
              })),
              (K[43] = e))
            : (e = K[43]),
            K[44] !== ei ? ((t = () => void ei()), (K[44] = ei), (K[45] = t)) : (t = K[45]),
            K[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, o.jsx)(r.A, { id: "workspaceAgents.discovery.retry", defaultMessage: "Retry" })), (K[46] = n))
              : (n = K[46]),
            K[47] !== t
              ? ((a = (0, o.jsx)(d.l, {
                  type: "error",
                  content: e,
                  customCtas: (0, o.jsx)(u.$, { color: "secondary", onClick: t, children: n }),
                })),
                (K[47] = t),
                (K[48] = a))
              : (a = K[48]),
            (l = a))
        } else {
          let e,
            n,
            a = S
              ? (0, o.jsx)(k.x, { agentId: Q, returnTo: `${et.pathname}?${L.toString()}` })
              : (0, o.jsx)(o.Fragment, {
                  children:
                    0 === t.starter_prompts.length
                      ? null
                      : (0, o.jsx)("div", {
                          className: "border-t border-subtle",
                          children: (0, o.jsx)(b.t, {
                            variant: "rows",
                            dividers: !1,
                            children: t.starter_prompts.slice(0, 3).map(R),
                          }),
                        }),
                })
          ;(K[49] !== eh
            ? ((e = eh
                ? (0, o.jsx)(d.l, {
                    type: "error",
                    content: (0, o.jsx)(r.A, {
                      id: "workspaceAgents.discovery.pinError",
                      defaultMessage: "Unable to pin this agent. Try again",
                    }),
                  })
                : null),
              (K[49] = eh),
              (K[50] = e))
            : (e = K[50]),
            K[51] !== a || K[52] !== e
              ? ((n = (0, o.jsxs)(o.Fragment, { children: [a, e] })), (K[51] = a), (K[52] = e), (K[53] = n))
              : (n = K[53]),
            (l = n))
        }
        ;((K[0] = Q),
          (K[1] = en?.latest_published_version),
          (K[2] = eh),
          (K[3] = es),
          (K[4] = el),
          (K[5] = ea),
          (K[6] = er),
          (K[7] = et.pathname),
          (K[8] = et.search),
          (K[9] = ee),
          (K[10] = eu),
          (K[11] = ec),
          (K[12] = ei),
          (K[13] = J),
          (K[14] = t),
          (K[15] = l),
          (K[16] = f),
          (K[17] = _),
          (K[18] = I),
          (K[19] = L),
          (K[20] = T),
          (K[21] = S))
      } else ((t = K[14]), (l = K[15]), (f = K[16]), (_ = K[17]), (I = K[18]), (L = K[19]), (T = K[20]), (S = K[21]))
      ;(K[54] !== X || K[55] !== eu
        ? ((V = (e) => {
            e || eu || X()
          }),
          (K[54] = X),
          (K[55] = eu),
          (K[56] = V))
        : (V = K[56]),
        K[57] !== Q ||
        K[58] !== er ||
        K[59] !== et.pathname ||
        K[60] !== ee ||
        K[61] !== _ ||
        K[62] !== I ||
        K[63] !== L ||
        K[64] !== J
          ? ((z = (e) => {
              ;(e.preventDefault(),
                e.target === e.currentTarget &&
                  (_
                    ? ((0, m.yy)(J, a.QS, {
                        actionType: "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK",
                        surface: "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL",
                        agentId: Q,
                        isPinned: !0 === er,
                      }),
                      L.set("setup", "1"),
                      ee({ pathname: et.pathname, search: L.toString() }))
                    : I()))
            }),
            (K[57] = Q),
            (K[58] = er),
            (K[59] = et.pathname),
            (K[60] = ee),
            (K[61] = _),
            (K[62] = I),
            (K[63] = L),
            (K[64] = J),
            (K[65] = z))
          : (z = K[65]),
        K[66] !== t || K[67] !== es || K[68] !== ea || K[69] !== S
          ? ((E = null == t || es || ea || S ? null : (0, o.jsx)(M.WorkspaceAgentGraphic, { icon: t.icon, size: 56 })),
            (K[66] = t),
            (K[67] = es),
            (K[68] = ea),
            (K[69] = S),
            (K[70] = E))
          : (E = K[70]),
        K[71] !== t || K[72] !== f
          ? ((F =
              null == t
                ? (0, o.jsx)(r.A, { id: "workspaceAgents.discovery.details", defaultMessage: "Agent details" })
                : f),
            (K[71] = t),
            (K[72] = f),
            (K[73] = F))
          : (F = K[73]),
        K[74] !== F
          ? ((H = (0, o.jsx)(h.L3, { className: "title-g7Keii", children: F })), (K[74] = F), (K[75] = H))
          : (H = K[75]))
      let eg = t?.tagline || t?.description
      ;(K[76] !== eg ? ((B = (0, o.jsx)(h.rr, { children: eg })), (K[76] = eg), (K[77] = B)) : (B = K[77]),
        K[78] !== en || K[79] !== es || K[80] !== ea
          ? ((Z =
              !es && !ea && en?.agent.creator_name
                ? (0, o.jsx)("p", {
                    className: "text-sm text-tertiary",
                    children: (0, o.jsx)(r.A, {
                      id: "workspaceAgents.discovery.by",
                      defaultMessage: "By {creatorName}",
                      values: { creatorName: en.agent.creator_name },
                    }),
                  })
                : null),
            (K[78] = en),
            (K[79] = es),
            (K[80] = ea),
            (K[81] = Z))
          : (Z = K[81]),
        K[82] !== B || K[83] !== Z
          ? ((N = (0, o.jsxs)("div", {
              className: "flex flex-col gap-2 text-sm leading-normal tracking-normal text-codex-description",
              children: [B, Z],
            })),
            (K[82] = B),
            (K[83] = Z),
            (K[84] = N))
          : (N = K[84]),
        K[85] !== H || K[86] !== N
          ? ((O = (0, o.jsxs)("div", { className: "flex min-w-0 flex-col gap-2 self-stretch", children: [H, N] })),
            (K[85] = H),
            (K[86] = N),
            (K[87] = O))
          : (O = K[87]),
        K[88] !== O || K[89] !== E
          ? ((P = (0, o.jsxs)(C.OO, { className: "shrink-0 gap-5", children: [E, O] })),
            (K[88] = O),
            (K[89] = E),
            (K[90] = P))
          : (P = K[90]),
        K[91] !== l
          ? ((G = (0, o.jsx)(C.OO, {
              className: "min-h-0 overflow-y-auto",
              children: (0, o.jsx)("div", { className: "shrink-0", children: l }),
            })),
            (K[91] = l),
            (K[92] = G))
          : (G = K[92]),
        K[93] !== t ||
        K[94] !== es ||
        K[95] !== ea ||
        K[96] !== er ||
        K[97] !== _ ||
        K[98] !== eu ||
        K[99] !== ec ||
        K[100] !== eo
          ? ((D =
              null == t || es || ea || _ || er
                ? null
                : (0, o.jsxs)("div", {
                    className: "relative me-auto flex items-center gap-2",
                    children: [
                      (0, o.jsx)(p.S, { id: eo, checked: ec, disabled: eu, onCheckedChange: ed }),
                      (0, o.jsx)("label", {
                        htmlFor: eo,
                        className: "text-sm text-default",
                        children: (0, o.jsx)(r.A, {
                          id: "workspaceAgents.discovery.pin",
                          defaultMessage: "Pin to sidebar",
                        }),
                      }),
                    ],
                  })),
            (K[93] = t),
            (K[94] = es),
            (K[95] = ea),
            (K[96] = er),
            (K[97] = _),
            (K[98] = eu),
            (K[99] = ec),
            (K[100] = eo),
            (K[101] = D))
          : (D = K[101]),
        K[102] !== et.pathname || K[103] !== ee || K[104] !== L || K[105] !== S
          ? ((U = S
              ? (0, o.jsx)(u.$, {
                  color: "secondary",
                  onClick: () => {
                    ;(L.delete("setup"), ee({ pathname: et.pathname, search: L.toString() }, { replace: !0 }))
                  },
                  children: (0, o.jsx)(r.A, { id: "workspaceAgents.discovery.back", defaultMessage: "Back" }),
                })
              : null),
            (K[102] = et.pathname),
            (K[103] = ee),
            (K[104] = L),
            (K[105] = S),
            (K[106] = U))
          : (U = K[106]))
      let em = null == t || es || eu
      return (
        K[107] !== eu || K[108] !== T || K[109] !== em
          ? ((Y = (0, o.jsx)(u.$, {
              color: "primary",
              size: "dialog",
              disabled: em,
              loading: eu,
              type: "submit",
              children: T,
            })),
            (K[107] = eu),
            (K[108] = T),
            (K[109] = em),
            (K[110] = Y))
          : (Y = K[110]),
        K[111] !== _ || K[112] !== D || K[113] !== U || K[114] !== Y
          ? ((q = (0, o.jsx)(C.OO, { children: (0, o.jsxs)(C.Es, { expandSingleButton: _, children: [D, U, Y] }) })),
            (K[111] = _),
            (K[112] = D),
            (K[113] = U),
            (K[114] = Y),
            (K[115] = q))
          : (q = K[115]),
        K[116] !== P || K[117] !== G || K[118] !== q || K[119] !== z
          ? (($ = (0, o.jsxs)(C.R4, {
              as: "form",
              size: "scrollable",
              className: "p-6",
              variant: "chatgpt",
              onSubmit: z,
              children: [P, G, q],
            })),
            (K[116] = P),
            (K[117] = G),
            (K[118] = q),
            (K[119] = z),
            (K[120] = $))
          : ($ = K[120]),
        K[121] !== V || K[122] !== $
          ? ((W = (0, o.jsx)(h.lG, {
              open: !0,
              size: "responsiveSheet",
              unstyledContent: !0,
              contentClassName: "overview-VTFlfU",
              onOpenChange: V,
              children: $,
            })),
            (K[121] = V),
            (K[122] = $),
            (K[123] = W))
          : (W = K[123]),
        W
      )
    }
    function R(e, t) {
      return (0, o.jsx)(
        f.ic,
        {
          icon: (0, o.jsx)(_.v, { name: e.icon }),
          inset: !1,
          labelWeight: "normal",
          label: (0, o.jsx)("span", { className: "line-clamp-2", children: e.title }),
          control: null,
        },
        `${e.title}:${t}`,
      )
    }
    function j(e) {
      return "LINK_PLACEHOLDER" === e.auth.type
    }
  },
  KYL2(e, t, l) {
    var o = l("qmMi"),
      n = l("keHI"),
      a = l("SPnB"),
      s = l("Kwur"),
      i = l("OWtl"),
      r = l("rvFo"),
      c = l("LNWO")
    let d = (0, o.vU)(i.u, (e, { get: t }) => {
        let l = t(a.chatGptAuthenticatedAccountId$),
          o = t(a.o8)
        return {
          enabled: null != l && null != o && !0 === t(c.XL),
          queryKey: ["workspace-agent", "detail", l, e, o],
          queryFn: ({ signal: t }) => {
            if (null == l || null == o) throw Error("Missing workspace identity")
            return s.Request.safeGet("/hermes/agent/{agent_id}/detail-view", {
              parameters: { path: { agent_id: e } },
              signal: t,
              expectedIdentity: { accountId: l, userId: o },
            })
          },
          retry: !1,
          staleTime: r.D.ONE_MINUTE,
        }
      }),
      u = (0, o.N3)(i.u, (e, { get: t }) => {
        let l = t(a.chatGptAuthenticatedAccountId$),
          o = t(a.o8)
        return {
          enabled: null != l && null != o && !0 === t(c.XL),
          initialPageParam: null,
          queryKey: ["workspace-agent", "activity", l, e, o],
          queryFn: ({ pageParam: t, signal: n }) => {
            if (null == l || null == o) throw Error("Cannot load Workspace Agent activity without an identity")
            return s.Request.safeGet("/hermes/agent/{agent_id}/conversations", {
              parameters: { path: { agent_id: e }, query: { cursor: t, limit: 25 } },
              expectedIdentity: { accountId: l, userId: o },
              signal: n,
            })
          },
          getNextPageParam: (e) => e.cursor ?? void 0,
          retry: !1,
          staleTime: r.D.ONE_MINUTE,
        }
      }),
      p = (0, o.vU)(i.u, (e, { get: t }) => {
        let l = t(a.chatGptAuthenticatedAccountId$)
        return {
          ...(0, n.ve)({ accountId: l ?? "", userId: t(a.o8), connectorIds: e }),
          enabled: null != l && null != t(a.o8) && e.length > 0 && !0 === t(c.XL),
        }
      })
    l.d(t, {}, { a3: d, lL: p, sy: u })
  },
  zfwA(e, t, l) {
    l.d(t, { v: () => p })
    var o = l("ABep"),
      n = l("QosV"),
      a = l("ESTr")
    let s = (0, a.a)({
        name: "multicolor-skills-dark-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
          visualBounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#FFCC38",
              bounds: { x: 3.333252, y: 5.755615, width: 5.467041, height: 13.470947 },
              wideGamut: "color(display-p3 1.0000 0.8000 0.2196)",
            },
            {
              role: "fixed",
              color: "#FF3D5F",
              bounds: { x: 8.800537, y: 4.508057, width: 7.866211, height: 14.718994 },
              wideGamut: "color(display-p3 1.0000 0.2392 0.3725)",
            },
            {
              role: "fixed",
              color: "#2A5CDA",
              bounds: { x: 8.800537, y: 9.53125, width: 7.866211, height: 9.696045 },
              wideGamut: "color(display-p3 0.1647 0.3608 0.8549)",
            },
            {
              role: "fixed",
              color: "#6491F4",
              bounds: { x: 3.333252, y: 10.806885, width: 5.467041, height: 8.419678 },
              wideGamut: "color(display-p3 0.3922 0.5686 0.9569)",
            },
            {
              role: "fixed",
              color: "#FF933B",
              bounds: { x: 3.535156, y: 1.070068, width: 12.884033, height: 8.20752 },
              wideGamut: "color(display-p3 1.0000 0.5765 0.2314)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
          center: { x: 10, y: 10.148681 },
          insets: { top: 1.070068, right: 3.333252, bottom: 0.772705, left: 3.333252 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10.148681 } },
        },
        capabilities: ["icon"],
        body: '<path d="M8.80058 9.27796V19.2267C8.79091 19.2265 8.78108 19.227 8.77133 19.2267C8.3825 19.2198 8.02426 19.1055 7.69791 18.8833L4.21891 16.5078C3.9413 16.3135 3.72266 16.0701 3.56299 15.7786C3.41032 15.4871 3.33355 15.1743 3.3335 14.8411V6.63314C3.3335 6.32121 3.4008 6.02856 3.53532 5.75586L8.80058 9.27796Z" fill="#FFCC38"/> <path d="M16.437 4.53874C16.5898 4.81651 16.6665 5.11529 16.6665 5.43474V13.6533C16.6665 13.9935 16.5796 14.3163 16.4061 14.6217C16.2395 14.9273 16.0065 15.1704 15.7079 15.3509L9.87454 18.9341C9.54279 19.1371 9.18488 19.2344 8.80029 19.2262V9.26689L16.42 4.50781C16.4256 4.51813 16.4315 4.5283 16.437 4.53874Z" fill="#FF3D5F"/> <path d="M16.6665 13.6539C16.6665 13.9941 16.5796 14.3169 16.4061 14.6223C16.2395 14.9279 16.0065 15.171 15.7079 15.3515L9.87454 18.9347C9.54279 19.1377 9.18488 19.235 8.80029 19.2268V14.4352L16.42 9.67608C16.4278 9.68475 16.6665 9.53125 16.6665 9.53125V13.6539Z" fill="#2A5CDA"/> <path d="M8.80058 14.4451V19.2262C8.79091 19.2261 8.78108 19.2266 8.77133 19.2262C8.3825 19.2193 8.02426 19.105 7.69791 18.8828L4.21891 16.5073C3.9413 16.313 3.72266 16.0696 3.56299 15.7781C3.41032 15.4866 3.33355 15.1738 3.3335 14.8406V10.8066L8.80058 14.4451Z" fill="#6491F4"/> <path d="M3.53516 5.75571C3.55034 5.72493 3.56626 5.69403 3.58316 5.66375C3.74982 5.35831 3.98287 5.1151 4.28141 4.93458L10.083 1.37257C10.4163 1.16424 10.7781 1.06371 11.167 1.07065C11.5557 1.07072 11.9133 1.18138 12.2396 1.4035L15.8122 3.84083C16.0727 4.02117 16.2744 4.24432 16.4192 4.50815L8.80041 9.26725V9.27783L3.53516 5.75571Z" fill="#FF933B"/>',
      }),
      i = (0, a.a)({
        name: "multicolor-skills-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
          visualBounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#FFCC38",
              bounds: { x: 3.333252, y: 5.755615, width: 5.467041, height: 13.470947 },
              wideGamut: "color(display-p3 1.0000 0.8000 0.2196)",
            },
            {
              role: "fixed",
              color: "#FF3D5F",
              bounds: { x: 8.800537, y: 4.508057, width: 7.866211, height: 14.718994 },
              wideGamut: "color(display-p3 1.0000 0.2392 0.3725)",
            },
            {
              role: "fixed",
              color: "#234FC9",
              bounds: { x: 8.800537, y: 9.53125, width: 7.866211, height: 9.696045 },
              wideGamut: "color(display-p3 0.1373 0.3098 0.7882)",
            },
            {
              role: "fixed",
              color: "#8295F5",
              bounds: { x: 3.333252, y: 10.806885, width: 5.467041, height: 8.419678 },
              wideGamut: "color(display-p3 0.5098 0.5843 0.9608)",
            },
            {
              role: "fixed",
              color: "#FF933B",
              bounds: { x: 3.535156, y: 1.070068, width: 12.884033, height: 8.20752 },
              wideGamut: "color(display-p3 1.0000 0.5765 0.2314)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.333252, y: 1.070068, width: 13.333496, height: 18.157227 },
          center: { x: 10, y: 10.148681 },
          insets: { top: 1.070068, right: 3.333252, bottom: 0.772705, left: 3.333252 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10.148681 } },
        },
        capabilities: ["icon"],
        body: '<path d="M8.80058 9.27796V19.2267C8.79091 19.2265 8.78108 19.227 8.77133 19.2267C8.3825 19.2198 8.02426 19.1055 7.69791 18.8833L4.21891 16.5078C3.9413 16.3135 3.72266 16.0701 3.56299 15.7786C3.41032 15.4871 3.33355 15.1743 3.3335 14.8411V6.63314C3.3335 6.32121 3.4008 6.02856 3.53532 5.75586L8.80058 9.27796Z" fill="#FFCC38"/> <path d="M16.437 4.53874C16.5898 4.81651 16.6665 5.11529 16.6665 5.43474V13.6533C16.6665 13.9935 16.5796 14.3163 16.4061 14.6217C16.2395 14.9273 16.0065 15.1704 15.7079 15.3509L9.87454 18.9341C9.54279 19.1371 9.18488 19.2344 8.80029 19.2262V9.26689L16.42 4.50781C16.4256 4.51813 16.4315 4.5283 16.437 4.53874Z" fill="#FF3D5F"/> <path d="M16.6665 13.6539C16.6665 13.9941 16.5796 14.3169 16.4061 14.6223C16.2395 14.9279 16.0065 15.171 15.7079 15.3515L9.87454 18.9347C9.54279 19.1377 9.18488 19.235 8.80029 19.2268V14.4352L16.42 9.67608C16.4278 9.68475 16.6665 9.53125 16.6665 9.53125V13.6539Z" fill="#234FC9"/> <path d="M8.80058 14.4451V19.2262C8.79091 19.2261 8.78108 19.2266 8.77133 19.2262C8.3825 19.2193 8.02426 19.105 7.69791 18.8828L4.21891 16.5073C3.9413 16.313 3.72266 16.0696 3.56299 15.7781C3.41032 15.4866 3.33355 15.1738 3.3335 14.8406V10.8066L8.80058 14.4451Z" fill="#8295F5"/> <path d="M3.53516 5.75571C3.55034 5.72493 3.56626 5.69403 3.58316 5.66375C3.74982 5.35831 3.98287 5.1151 4.28141 4.93458L10.083 1.37257C10.4163 1.16424 10.7781 1.06371 11.167 1.07065C11.5557 1.07072 11.9133 1.18138 12.2396 1.4035L15.8122 3.84083C16.0727 4.02117 16.2744 4.24432 16.4192 4.50815L8.80041 9.26725V9.27783L3.53516 5.75571Z" fill="#FF933B"/>',
      })
    var r = l("on57"),
      c = l("HOLv"),
      d = l("a6Zv"),
      u = l("YkWO")
    function p(e) {
      let t,
        l,
        a,
        p = (0, n.c)(9),
        { name: h } = e,
        C = (0, d.Y)()
      if (p[0] !== C || p[1] !== h) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          if (null == (t = h ? u.c.get(h) : void 0)) {
            let e,
              t = C ? s : i
            ;(p[4] !== t
              ? ((e = (0, o.jsx)(c.I, { asset: t, className: "shrink-0" })), (p[4] = t), (p[5] = e))
              : (e = p[5]),
              (l = e))
            break e
          }
          if (null != t.asset) {
            l = (0, o.jsx)(c.I, { asset: t.asset, className: (0, r.A)("shrink-0", t.color), focusable: "false" })
            break e
          }
        }
        ;((p[0] = C), (p[1] = h), (p[2] = t), (p[3] = l))
      } else ((t = p[2]), (l = p[3]))
      if (l !== Symbol.for("react.early_return_sentinel")) return l
      let g = t.icon
      return (
        p[6] !== g || p[7] !== t.color
          ? ((a = (0, o.jsx)(g, { className: t.color })), (p[6] = g), (p[7] = t.color), (p[8] = a))
          : (a = p[8]),
        a
      )
    }
  },
  YkWO(e, t, l) {
    l.d(t, { c: () => h })
    var o = l("SAG6"),
      n = l("ESTr")
    let a = (0, n.a)({
      name: "deep-research-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.803589, y: 1.823486, width: 16.460106, height: 16.341309 },
        visualBounds: { x: 1.803589, y: 1.823486, width: 16.460106, height: 16.341309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.803589, y: 1.823486, width: 16.460106, height: 16.341309 },
        center: { x: 10.033642, y: 9.994141 },
        insets: { top: 1.823486, right: 1.736305, bottom: 1.835205, left: 1.803589 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.033642, y: 9.994141 },
          foreground: { x: 10.033642, y: 9.994141 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 1.94098C14.7977 1.5535 16.0299 2.15572 16.4176 3.28669L18.1462 8.33161C18.5338 9.46254 17.9312 10.6937 16.8004 11.0816L15.696 11.4605C14.8723 11.7426 13.9977 11.4975 13.4323 10.9078L12.4489 11.1588C12.4573 11.1814 12.4683 11.2032 12.4762 11.2261C12.8489 12.3138 12.4986 13.4733 11.6833 14.1861L13.8961 17.0982C14.118 17.3905 14.0613 17.8067 13.7692 18.0289C13.4768 18.2511 13.0598 18.1942 12.8376 17.9019L10.4772 14.7984C10.1466 14.873 9.81411 14.882 9.49283 14.8365L7.17349 17.9019C6.95172 18.1942 6.53448 18.2513 6.24185 18.0299C5.94955 17.8081 5.89245 17.3909 6.11392 17.0982L8.22135 14.3121C7.79759 13.9932 7.46106 13.5487 7.27603 13.0093C7.21968 12.8449 7.18117 12.6782 7.15689 12.5123L4.85025 13.1031C3.84096 13.3612 2.80235 12.8005 2.46451 11.815L1.91177 10.2017C1.57433 9.21635 2.05029 8.13656 3.00552 7.72126L11.1071 4.19977C11.1723 3.36494 11.7206 2.6077 12.5631 2.31891L13.6667 1.94098ZM11.2184 11.6578C10.9644 10.9168 10.1567 10.522 9.41568 10.7759C8.67494 11.0301 8.28088 11.8368 8.53482 12.5777C8.78896 13.3183 9.59486 13.7132 10.3356 13.4595C11.0765 13.2056 11.4721 12.3987 11.2184 11.6578ZM3.5358 8.94098C3.21633 9.0799 3.05669 9.4415 3.16959 9.77106L3.7233 11.3843C3.83651 11.7136 4.1838 11.9003 4.52115 11.814L7.32681 11.0963C7.61398 10.3801 8.19708 9.78709 8.98404 9.51716C9.92012 9.1963 10.9093 9.41219 11.6217 9.99762L12.8024 9.69587L11.3756 5.53278L3.5358 8.94098ZM15.1588 3.71833C15.0094 3.2822 14.5344 3.0495 14.0983 3.1988L12.9948 3.5777C12.5585 3.72723 12.3257 4.20201 12.4753 4.63825L14.2047 9.68317C14.3544 10.1192 14.8291 10.3512 15.2653 10.2017L16.3688 9.8238C16.8048 9.67417 17.0377 9.19933 16.8883 8.76325L15.1588 3.71833Z" fill="currentColor"/>',
    })
    var s = l("PVUo"),
      i = l("XFVH"),
      r = l("Ye2I")
    let c = (0, n.a)({
      name: "map-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.834961, y: 2.736328, width: 16.330078, height: 14.526367 },
        visualBounds: { x: 1.834961, y: 2.736328, width: 16.330078, height: 14.526367 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.834961, y: 2.736328, width: 16.330078, height: 14.526367 },
        center: { x: 10, y: 9.999512 },
        insets: { top: 2.736328, right: 1.834961, bottom: 2.737305, left: 1.834961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999512 }, foreground: { x: 10, y: 9.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.8887 2.83545C12.2852 2.70329 12.7148 2.70329 13.1113 2.83545L16.8438 4.0796C17.6325 4.34256 18.165 5.08121 18.165 5.9126V14.9087C18.1646 16.2267 16.8726 17.1575 15.6221 16.7407L12.6904 15.7632C12.5669 15.722 12.4331 15.722 12.3096 15.7632L8.11133 17.1636C7.71491 17.2957 7.28509 17.2957 6.88867 17.1636L3.15625 15.9185C2.36769 15.6556 1.83525 14.9176 1.83496 14.0864V5.09034C1.83496 3.77186 3.12711 2.84039 4.37793 3.25733L7.30957 4.23487C7.43298 4.27597 7.56702 4.27597 7.69043 4.23487L11.8887 2.83545ZM3.95703 4.51905C3.56743 4.38918 3.16504 4.67966 3.16504 5.09034V14.0864C3.16533 14.345 3.33086 14.5748 3.57617 14.6567L6.83496 15.7427V5.47803L3.95703 4.51905ZM8.16504 5.47803V15.7427L11.835 14.519V4.2544L8.16504 5.47803ZM13.165 14.519L16.043 15.479C16.4323 15.6087 16.8345 15.3189 16.835 14.9087V5.9126C16.835 5.65375 16.6693 5.42331 16.4238 5.34131L13.165 4.2544V14.519Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var d = l("WJj2"),
      u = l("Qgfj"),
      p = l("bVeK")
    let h = new Map(
      Object.entries({
        bolt: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.bolt", defaultMessage: "Lightning" }),
          icon: p.o1J,
          color: "text-orange",
        },
        chart: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.chart", defaultMessage: "Chart" }),
          icon: p.sBI,
          color: "text-green",
        },
        chat: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.chat", defaultMessage: "Chat" }),
          icon: p.VhP,
          color: "text-blue",
        },
        code: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.code", defaultMessage: "Code" }),
          icon: p.u1Q,
          color: "text-purple",
        },
        cursor: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.cursor", defaultMessage: "Cursor" }),
          icon: p.cW$,
          color: "text-blue",
        },
        heart: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.heart", defaultMessage: "Heart" }),
          icon: p.BaQ,
          color: "text-red",
        },
        hierarchy: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.hierarchy", defaultMessage: "Hierarchy" }),
          icon: p.Evk,
          color: "text-blue",
        },
        pen: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.pen", defaultMessage: "Pen" }),
          icon: p.aRI,
          color: "text-purple",
        },
        radar: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.radar", defaultMessage: "Radar" }),
          icon: p.ysX,
          color: "text-green",
        },
        search: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.search", defaultMessage: "Search" }),
          icon: p.zcw,
          color: "text-blue",
        },
        lightbulb: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.lightbulb", defaultMessage: "Light bulb" }),
          icon: p.ufP,
          color: "text-orange",
        },
        bubble: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.bubble", defaultMessage: "Speech bubble" }),
          icon: p.VhP,
          color: "text-blue",
        },
        "bubble-on-bubble": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.bubble-on-bubble", defaultMessage: "Conversation" }),
          icon: p.oMj,
          color: "text-blue",
        },
        person: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.person", defaultMessage: "Person" }),
          icon: p.CVn,
          color: "text-blue",
        },
        "text-bubble-figure": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.text-bubble-figure", defaultMessage: "Text message" }),
          icon: p.izo,
          color: "text-blue",
        },
        microphone: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.microphone", defaultMessage: "Microphone" }),
          icon: p.rK5,
          color: "text-red",
        },
        audiowave: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.audiowave", defaultMessage: "Audio" }),
          icon: p.n1L,
          color: "text-red",
        },
        newspaper: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.newspaper", defaultMessage: "Newspaper" }),
          asset: d._,
          color: "text-purple",
        },
        envelope: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.envelope", defaultMessage: "Envelope" }),
          icon: p.VDi,
          color: "text-blue",
        },
        paperclip: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.paperclip", defaultMessage: "Paperclip" }),
          icon: p.rjw,
          color: "text-blue",
        },
        "paint-palette": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.paint-palette", defaultMessage: "Paint palette" }),
          icon: p.UpC,
          color: "text-pink",
        },
        media: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.media", defaultMessage: "Photo" }),
          icon: p.pYT,
          color: "text-pink",
        },
        "color-swatches": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.color-swatches", defaultMessage: "Colors" }),
          icon: p.UpC,
          color: "text-pink",
        },
        presentation: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.presentation", defaultMessage: "Presentation" }),
          icon: p.jXf,
          color: "text-orange",
        },
        "file-video": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.file-video", defaultMessage: "Video" }),
          icon: p.Tv9,
          color: "text-pink",
        },
        "book-open": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.book-open", defaultMessage: "Book" }),
          icon: p.AcO,
          color: "text-blue",
        },
        notepad: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.notepad", defaultMessage: "Notebook" }),
          icon: p.Sh$,
          color: "text-purple",
        },
        calendar: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.calendar", defaultMessage: "Calendar" }),
          icon: p.h8o,
          color: "text-red",
        },
        briefcase: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.briefcase", defaultMessage: "Briefcase" }),
          icon: p.c8T,
          color: "text-green",
        },
        "credit-card": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.credit-card", defaultMessage: "Credit card" }),
          icon: p.Y5G,
          color: "text-green",
        },
        calculator: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.calculator", defaultMessage: "Calculator" }),
          asset: o.v,
          color: "text-green",
        },
        checklist: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.checklist", defaultMessage: "Checklist" }),
          asset: r.I,
          color: "text-green",
        },
        summary: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.summary", defaultMessage: "Summary" }),
          asset: i.V,
          color: "text-purple",
        },
        "document-search": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.document-search", defaultMessage: "Document search" }),
          asset: s.a,
          color: "text-blue",
        },
        "components-window": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.components-window", defaultMessage: "Components" }),
          icon: p.MhR,
          color: "text-purple",
        },
        terminal: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.terminal", defaultMessage: "Terminal" }),
          icon: p.h3q,
          color: "text-purple",
        },
        gear: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.gear", defaultMessage: "Settings" }),
          icon: p.IR,
          color: "text-blue",
        },
        map: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.map", defaultMessage: "Map" }),
          asset: c,
          color: "text-green",
        },
        "map-pin": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.map-pin", defaultMessage: "Map pin" }),
          icon: p.vP7,
          color: "text-red",
        },
        pointer: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.pointer", defaultMessage: "Pointer" }),
          icon: p.cW$,
          color: "text-blue",
        },
        "deep-research": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.deep-research", defaultMessage: "Research" }),
          asset: a,
          color: "text-blue",
        },
        globe: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.globe", defaultMessage: "Globe" }),
          icon: p.cfl,
          color: "text-blue",
        },
        flask: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.flask", defaultMessage: "Flask" }),
          icon: p.qPR,
          color: "text-green",
        },
        toolbox: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.toolbox", defaultMessage: "Tools" }),
          icon: p.IW0,
          color: "text-orange",
        },
        puzzle: {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.puzzle", defaultMessage: "Puzzle" }),
          icon: p.HUG,
          color: "text-purple",
        },
        "game-controller": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.game-controller", defaultMessage: "Game controller" }),
          icon: p.HUG,
          color: "text-purple",
        },
        "star-bookmark": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.star-bookmark", defaultMessage: "Star" }),
          icon: p.YTp,
          color: "text-orange",
        },
        "heart-text-clipboard": {
          label: (0, u.zR)({ id: "workspaceAgents.skillIcon.heart-text-clipboard", defaultMessage: "Care" }),
          icon: p.BaQ,
          color: "text-red",
        },
      }),
    )
  },
  SAG6(e, t, l) {
    let o = (0, l("ESTr").a)({
      name: "calculator-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.084961, y: 2.251465, width: 13.830078, height: 15.49707 },
        visualBounds: { x: 3.084961, y: 2.251465, width: 13.830078, height: 15.49707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.084961, y: 2.251465, width: 13.830078, height: 15.49707 },
        center: { x: 10, y: 10 },
        insets: { top: 2.251465, right: 3.084961, bottom: 2.251465, left: 3.084961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.91316 10.384C7.91316 10.9286 7.47171 11.37 6.92716 11.37C6.38261 11.37 5.94116 10.9286 5.94116 10.384C5.94116 9.83946 6.38261 9.39801 6.92716 9.39801C7.47171 9.39801 7.91316 9.83946 7.91316 10.384Z" fill="currentColor"/> <path d="M11.2197 10.384C11.2197 10.9286 10.7782 11.37 10.2337 11.37C9.68913 11.37 9.24768 10.9286 9.24768 10.384C9.24768 9.83946 9.68913 9.39801 10.2337 9.39801C10.7782 9.39801 11.2197 9.83946 11.2197 10.384Z" fill="currentColor"/> <path d="M7.91316 13.3332C7.91316 13.8778 7.47171 14.3192 6.92716 14.3192C6.38261 14.3192 5.94116 13.8778 5.94116 13.3332C5.94116 12.7887 6.38261 12.3472 6.92716 12.3472C7.47171 12.3472 7.91316 12.7887 7.91316 13.3332Z" fill="currentColor"/> <path d="M11.2197 13.3332C11.2197 13.8778 10.7782 14.3192 10.2337 14.3192C9.68913 14.3192 9.24768 13.8778 9.24768 13.3332C9.24768 12.7887 9.68913 12.3472 10.2337 12.3472C10.7782 12.3472 11.2197 12.7887 11.2197 13.3332Z" fill="currentColor"/> <path d="M15.585 6.6499C15.585 5.98553 15.5847 5.52711 15.5557 5.17139C15.5273 4.82367 15.4747 4.63284 15.4033 4.49268C15.2434 4.17876 14.9877 3.92313 14.6738 3.76318C14.5337 3.69182 14.3428 3.63925 13.9951 3.61084C13.6394 3.58178 13.181 3.58154 12.5166 3.58154H7.4834C6.81903 3.58154 6.36061 3.58178 6.00488 3.61084C5.65717 3.63925 5.46633 3.69182 5.32617 3.76318C5.01226 3.92313 4.75663 4.17876 4.59668 4.49268C4.52532 4.63284 4.47275 4.82367 4.44434 5.17139C4.41527 5.52711 4.41504 5.98553 4.41504 6.6499V13.3501C4.41504 14.0143 4.41528 14.4729 4.44434 14.8286C4.47277 15.1763 4.52527 15.3672 4.59668 15.5073C4.75663 15.8212 5.01226 16.0769 5.32617 16.2368C5.46631 16.3081 5.65731 16.3598 6.00488 16.3882C6.36061 16.4172 6.81903 16.4185 7.4834 16.4185H12.5166C13.181 16.4185 13.6394 16.4172 13.9951 16.3882C14.3427 16.3598 14.5337 16.3081 14.6738 16.2368C14.9877 16.0769 15.2434 15.8212 15.4033 15.5073C15.4747 15.3672 15.5272 15.1763 15.5557 14.8286C15.5847 14.4729 15.585 14.0143 15.585 13.3501V6.6499ZM16.915 13.3501C16.915 13.9922 16.9153 14.5137 16.8809 14.936C16.8457 15.3662 16.7708 15.7519 16.5879 16.1108C16.3005 16.6749 15.8423 17.1339 15.2783 17.4214C14.9194 17.6043 14.5337 17.6792 14.1035 17.7144C13.6811 17.7489 13.159 17.7485 12.5166 17.7485H7.4834C6.84098 17.7485 6.31893 17.7489 5.89648 17.7144C5.46633 17.6792 5.08057 17.6043 4.72168 17.4214C4.15766 17.1339 3.69951 16.6749 3.41211 16.1108C3.22924 15.7519 3.15429 15.3662 3.11914 14.936C3.08467 14.5137 3.08496 13.9922 3.08496 13.3501V6.6499C3.08496 6.00748 3.08463 5.48544 3.11914 5.06299C3.1543 4.63285 3.22925 4.24707 3.41211 3.88818C3.6995 3.32439 4.15788 2.86601 4.72168 2.57861C5.08057 2.39575 5.46634 2.3208 5.89648 2.28564C6.31893 2.25113 6.84098 2.25146 7.4834 2.25146H12.5166C13.159 2.25146 13.6811 2.25113 14.1035 2.28564C14.5337 2.3208 14.9194 2.39575 15.2783 2.57861C15.8421 2.86601 16.3005 3.32439 16.5879 3.88818C16.7708 4.24707 16.8457 4.63285 16.8809 5.06299C16.9154 5.48544 16.915 6.00748 16.915 6.6499V13.3501Z" fill="currentColor"/> <path d="M12.7334 13.5412V10.2082C12.7334 9.84092 13.0312 9.54315 13.3984 9.54315C13.7657 9.54315 14.0635 9.84092 14.0635 10.2082V13.5412C14.0635 13.9085 13.7657 14.2062 13.3984 14.2062C13.0312 14.2062 12.7334 13.9085 12.7334 13.5412Z" fill="currentColor"/> <path d="M12.8516 6.0014C13.2188 6.0014 13.5166 6.29917 13.5166 6.66644C13.5166 7.03371 13.2188 7.33148 12.8516 7.33148H7.14844C6.78117 7.33148 6.4834 7.03371 6.4834 6.66644C6.4834 6.29917 6.78117 6.0014 7.14844 6.0014H12.8516Z" fill="currentColor"/>',
    })
    l.d(t, {}, { v: o })
  },
  PVUo(e, t, l) {
    let o = (0, l("ESTr").a)({
      name: "document-badge-magnifyingglass-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.016602, y: 2.251465, width: 15.150635, height: 16.775635 },
        visualBounds: { x: 3.016602, y: 2.251465, width: 15.150635, height: 16.775635 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.016602, y: 2.251465, width: 15.150635, height: 16.775635 },
        center: { x: 10.59192, y: 10.639283 },
        insets: { top: 2.251465, right: 1.832763, bottom: 0.9729, left: 3.016602 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.59192, y: 10.639283 },
          foreground: { x: 10.59192, y: 10.639283 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    l.d(t, {}, { a: o })
  },
  XFVH(e, t, l) {
    let o = (0, l("ESTr").a)({
      name: "document-text-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
        visualBounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
        center: { x: 10, y: 10.000488 },
        insets: { top: 2.251953, right: 3.084961, bottom: 2.250977, left: 3.084961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10.000488 }, foreground: { x: 10, y: 10.000488 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.5 12.6689C12.8673 12.6689 13.165 12.9667 13.165 13.334C13.165 13.7013 12.8673 13.999 12.5 13.999H7.5C7.13273 13.999 6.83496 13.7013 6.83496 13.334C6.83496 12.9667 7.13273 12.6689 7.5 12.6689H12.5Z" fill="currentColor"/> <path d="M10.833 9.33496C11.2003 9.33496 11.498 9.63273 11.498 10C11.498 10.3673 11.2003 10.665 10.833 10.665H7.5C7.13273 10.665 6.83496 10.3673 6.83496 10C6.83496 9.63273 7.13273 9.33496 7.5 9.33496H10.833Z" fill="currentColor"/> <path d="M11.8809 2.25195C12.7202 2.25195 13.5256 2.58524 14.1191 3.17871L15.9883 5.04785C16.5817 5.64139 16.915 6.44679 16.915 7.28613V14.584C16.9149 16.3318 15.4979 17.749 13.75 17.749H6.25C4.50213 17.749 3.08514 16.3318 3.08496 14.584V5.41699C3.08496 3.66901 4.50202 2.25195 6.25 2.25195H11.8809ZM6.25 3.58203C5.23656 3.58203 4.41504 4.40355 4.41504 5.41699V14.584C4.41521 15.5973 5.23667 16.4189 6.25 16.4189H13.75C14.7633 16.4189 15.5848 15.5973 15.585 14.584V8.58105H13.334C12.0462 8.58105 11.002 7.53677 11.002 6.24902V3.58203H6.25ZM12.332 6.24902C12.332 6.80223 12.7808 7.25098 13.334 7.25098H15.583C15.5739 6.77709 15.3836 6.32409 15.0479 5.98828L13.1787 4.11914C12.9432 3.88364 12.6496 3.72017 12.332 3.63965V6.24902Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    l.d(t, {}, { V: o })
  },
  Ye2I(e, t, l) {
    let o = (0, l("ESTr").a)({
      name: "list-checkmark-circle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.697998, y: 2.705078, width: 16.467773, height: 14.626953 },
        visualBounds: { x: 1.697998, y: 2.705078, width: 16.467773, height: 14.626953 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.697998, y: 2.705078, width: 16.467773, height: 14.626953 },
        center: { x: 9.931885, y: 10.018555 },
        insets: { top: 2.705078, right: 1.834229, bottom: 2.667969, left: 1.697998 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.931885, y: 10.018555 },
          foreground: { x: 9.931885, y: 10.018555 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M4.89038 10.9463C6.65339 10.9463 8.08261 12.3757 8.08276 14.1387C8.08276 15.9018 6.65349 17.3311 4.89038 17.3311C3.12729 17.3311 1.698 15.9018 1.698 14.1387C1.69815 12.3757 3.12739 10.9463 4.89038 10.9463ZM4.89038 12.2764C3.86193 12.2764 3.02823 13.1103 3.02808 14.1387C3.02808 15.1673 3.86183 16.001 4.89038 16.001C5.91895 16.001 6.75269 15.1673 6.75269 14.1387C6.75253 13.1103 5.91885 12.2764 4.89038 12.2764Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M17.5007 13.5137C17.8676 13.5141 18.1658 13.8117 18.1658 14.1787C18.1655 14.5455 17.8675 14.8433 17.5007 14.8438H10.8337C10.4666 14.8438 10.169 14.5458 10.1687 14.1787C10.1687 13.8115 10.4665 13.5137 10.8337 13.5137H17.5007Z" fill="currentColor"/> <path d="M6.84155 3.02835C7.03076 2.71369 7.4399 2.61073 7.75464 2.79983C8.02989 2.96534 8.14255 3.29928 8.03979 3.59085L7.98218 3.71292L7.9812 3.71487C7.9812 3.71487 7.97867 3.71755 7.97729 3.71975C7.97435 3.72464 7.97031 3.73271 7.9646 3.74221C7.95309 3.76134 7.93585 3.78966 7.91382 3.8262C7.86961 3.89952 7.80466 4.00642 7.72339 4.14065C7.56061 4.40953 7.32986 4.78902 7.0603 5.22952C6.52162 6.1098 5.82415 7.2392 5.19116 8.22756C4.86778 8.73249 4.15888 8.79165 3.75366 8.3594L2.10327 6.59768C1.85237 6.32982 1.86597 5.90937 2.13354 5.65823C2.40154 5.40728 2.8229 5.42058 3.07397 5.6885L4.3562 7.05667C4.90014 6.19811 5.47078 5.27992 5.92651 4.53518C6.19471 4.0969 6.4238 3.71958 6.58569 3.45217C6.66644 3.3188 6.73031 3.21241 6.77417 3.13967C6.79606 3.10337 6.8136 3.07455 6.82495 3.05569C6.83034 3.04675 6.83483 3.03986 6.83765 3.03518C6.83897 3.03293 6.84058 3.02932 6.84058 3.02932L6.84155 3.02835Z" fill="currentColor"/> <path d="M17.5007 5.16604C17.8676 5.16648 18.1658 5.46408 18.1658 5.83108C18.1656 6.19797 17.8675 6.49568 17.5007 6.49612H10.8337C10.4666 6.49612 10.1688 6.19824 10.1687 5.83108C10.1687 5.46381 10.4665 5.16604 10.8337 5.16604H17.5007Z" fill="currentColor"/>',
    })
    l.d(t, {}, { I: o })
  },
  WJj2(e, t, l) {
    let o = (0, l("ESTr").a)({
      name: "newspaper-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.834961, y: 2.668213, width: 16.330078, height: 14.663086 },
        visualBounds: { x: 1.834961, y: 2.668213, width: 16.330078, height: 14.663086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.834961, y: 2.668213, width: 16.330078, height: 14.663086 },
        center: { x: 10, y: 9.999756 },
        insets: { top: 2.668213, right: 1.834961, bottom: 2.668701, left: 1.834961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999756 }, foreground: { x: 10, y: 9.999756 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    l.d(t, {}, { _: o })
  },
}
//# sourceMappingURL=111761.08fca884ac.js.map
