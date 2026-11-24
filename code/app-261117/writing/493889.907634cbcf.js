export const __rspack_esm_ids = [493889]
export const __webpack_modules__ = {
  VVkm(e, t, n) {
    var a = n("QosV"),
      l = n("T0Rc"),
      i = n("GaA7"),
      r = n("rvFo")
    function s(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    n.d(
      t,
      {},
      {
        T9: s,
        b4: function ({
          canUsePersonalizedSuggestions: e,
          generatedSuggestionsEnabled: t,
          hasGeneratedSuggestionsReadSettled: n,
          shouldUseCuratedNewChatPageSuggestions: a,
        }) {
          return !!a || !t || !e || n
        },
        fy: function (e) {
          var t, n
          let o,
            c,
            d,
            u = (0, a.c)(9),
            { accountId: p, enabled: m, hostId: f } = e
          return (
            u[0] !== p || u[1] !== f
              ? ((t = f), (n = p), (o = [...s(t), n]), (u[0] = p), (u[1] = f), (u[2] = o))
              : (o = u[2]),
            u[3] !== f
              ? ((c = async () =>
                  (await i.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: f })) ?? !1),
                (u[3] = f),
                (u[4] = c))
              : (c = u[4]),
            u[5] !== m || u[6] !== o || u[7] !== c
              ? ((d = { queryKey: o, queryFn: c, enabled: m, retry: !1, staleTime: r.D.FIVE_MINUTES }),
                (u[5] = m),
                (u[6] = o),
                (u[7] = c),
                (u[8] = d))
              : (d = u[8]),
            (0, l.I)(d)
          )
        },
        o1: function ({ debugOverride: e, experimentEligible: t, personalized: n }) {
          return e ?? (t && n ? "generated" : "curated")
        },
        qH: function ({
          areNewChatPageSuggestionsLoading: e,
          hasProjectRoot: t,
          shouldShowHomeSuggestions: n,
          shouldUseCuratedNewChatPageSuggestions: a,
        }) {
          return !e && (!!a || (t && n))
        },
      },
    )
  },
  FROa(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("on57"),
      r = n("zd8w"),
      s = n("wD9O"),
      o = n("JNtf")
    n.d(
      t,
      {},
      {
        A: "min(720px, calc(100vh - 2rem))",
        Y: function (e) {
          let t,
            n,
            c,
            d,
            u,
            p,
            m = (0, l.c)(19),
            { children: f, loading: g, onOpenChange: h } = e,
            [y, b] = (0, r.useState)(null),
            x = (0, s.dz)()
          ;(m[0] !== y || m[1] !== x
            ? ((t = null == y ? void 0 : { height: `min(${y}px, calc((100dvh - 2rem) / ${x}))` }),
              (m[0] = y),
              (m[1] = x),
              (m[2] = t))
            : (t = m[2]),
            m[3] !== t ? ((n = { "aria-describedby": void 0, style: t }), (m[3] = t), (m[4] = n)) : (n = m[4]),
            m[5] !== y || m[6] !== g
              ? ((c = (e) => {
                  !g && null == y && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }),
                (m[5] = y),
                (m[6] = g),
                (m[7] = c))
              : (c = m[7]))
          let v = (g || null != y) && "h-full",
            w = null != y && "overflow-y-auto"
          return (
            m[8] !== v || m[9] !== w ? ((d = (0, i.A)(v, w)), (m[8] = v), (m[9] = w), (m[10] = d)) : (d = m[10]),
            m[11] !== f || m[12] !== c || m[13] !== d
              ? ((u = (0, a.jsx)("div", { ref: c, className: d, children: f })),
                (m[11] = f),
                (m[12] = c),
                (m[13] = d),
                (m[14] = u))
              : (u = m[14]),
            m[15] !== h || m[16] !== n || m[17] !== u
              ? ((p = (0, a.jsx)(o.lG, {
                  open: !0,
                  onOpenChange: h,
                  autoFocusCloseButton: !0,
                  size: "setup",
                  contentProps: n,
                  children: u,
                })),
                (m[15] = h),
                (m[16] = n),
                (m[17] = u),
                (m[18] = p))
              : (p = m[18]),
            p
          )
        },
      },
    )
  },
  TC6X(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("oyxz"),
      r = n("Sm6l"),
      s = n("JNtf"),
      o = n("mUDD"),
      c = n("FROa"),
      d = n("lmaZ")
    function u(e) {
      let t,
        n,
        c,
        u,
        p,
        m,
        f,
        g,
        h,
        y,
        b,
        x,
        v = (0, l.c)(27),
        { isPending: w, embedded: _, isFetching: A, onOpenChange: I, onRetry: j } = e,
        k = void 0 !== _ && _,
        S = k ? "h2" : s.L3,
        C = k ? "p" : s.rr
      if (w) {
        let e
        return (v[0] !== k ? ((e = (0, a.jsx)(d.$, { embedded: k })), (v[0] = k), (v[1] = e)) : (e = v[1]), e)
      }
      return (
        v[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(i.A, {
              id: "beacons.connectApp.loadError.title",
              defaultMessage: "Couldn\u2019t load connector",
            })),
            (v[2] = t))
          : (t = v[2]),
        v[3] !== S ? ((n = (0, a.jsx)(S, { children: t })), (v[3] = S), (v[4] = n)) : (n = v[4]),
        v[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(i.A, {
              id: "beacons.connectApp.loadError.description",
              defaultMessage: "Try again, or cancel and return to the previous page",
            })),
            (v[5] = c))
          : (c = v[5]),
        v[6] !== C ? ((u = (0, a.jsx)(C, { children: c })), (v[6] = C), (v[7] = u)) : (u = v[7]),
        v[8] !== n || v[9] !== u
          ? ((p = (0, a.jsx)(o.c7, { title: n, subtitle: u })), (v[8] = n), (v[9] = u), (v[10] = p))
          : (p = v[10]),
        v[11] !== I ? ((m = () => I(!1)), (v[11] = I), (v[12] = m)) : (m = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(i.A, { id: "beacons.connectApp.loadError.button.cancel", defaultMessage: "Cancel" })),
            (v[13] = f))
          : (f = v[13]),
        v[14] !== A || v[15] !== m
          ? ((g = (0, a.jsx)(r.$, { color: "secondary", disabled: A, onClick: m, type: "button", children: f })),
            (v[14] = A),
            (v[15] = m),
            (v[16] = g))
          : (g = v[16]),
        v[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(i.A, { id: "beacons.connectApp.loadError.button.retry", defaultMessage: "Retry" })),
            (v[17] = h))
          : (h = v[17]),
        v[18] !== A || v[19] !== j
          ? ((y = (0, a.jsx)(r.$, { color: "primary", loading: A, onClick: j, type: "button", children: h })),
            (v[18] = A),
            (v[19] = j),
            (v[20] = y))
          : (y = v[20]),
        v[21] !== y || v[22] !== g
          ? ((b = (0, a.jsxs)(o.Es, { children: [g, y] })), (v[21] = y), (v[22] = g), (v[23] = b))
          : (b = v[23]),
        v[24] !== b || v[25] !== p
          ? ((x = (0, a.jsxs)(o.R4, { className: "select-none", children: [p, b] })),
            (v[24] = b),
            (v[25] = p),
            (v[26] = x))
          : (x = v[26]),
        x
      )
    }
    n.d(
      t,
      {},
      {
        m: u,
        p: function (e) {
          let t,
            n,
            i = (0, l.c)(6)
          return (
            i[0] !== e ? ((t = (0, a.jsx)(u, { ...e })), (i[0] = e), (i[1] = t)) : (t = i[1]),
            i[2] !== e.isPending || i[3] !== e.onOpenChange || i[4] !== t
              ? ((n = (0, a.jsx)(c.Y, { loading: e.isPending, onOpenChange: e.onOpenChange, children: t })),
                (i[2] = e.isPending),
                (i[3] = e.onOpenChange),
                (i[4] = t),
                (i[5] = n))
              : (n = i[5]),
            n
          )
        },
      },
    )
  },
  Sx5O(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("ecE5"),
      r = n("TC6X")
    function s(e) {
      let t,
        n = (0, l.c)(2)
      return (n[0] !== e ? ((t = (0, a.jsx)(i.Z, { ...e, app: null })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
    }
    n.d(t, { B: () => s, p: () => r.p })
  },
  LQko(e, t, n) {
    var a = n("rvFo"),
      l = n("kK7d"),
      i = n("rGp2"),
      r = n("o6hs")
    function s(e, t) {
      return {
        queryKey: ["mcp-settings", "app-connect", "tos", e, t],
        staleTime: a.D.FIVE_MINUTES,
        queryFn: ({ signal: n }) =>
          l.CodexRequest.safeGet("/aip/connectors/{connector_id}/tos", {
            surface: "connector_setup",
            parameters: { path: { connector_id: e } },
            additionalHeaders: { [i.ok]: t },
            signal: n,
          }),
      }
    }
    n.d(
      t,
      {},
      {
        MZ: function (e) {
          return e.some((e) => "app-data-sharing" === e.id)
        },
        bO: function (e, t, n) {
          let a = (0, r.Ye)(t, n)
          ;(e.prefetchQuery((0, i.rJ)(t, { productSku: a?.productSku })),
            e.prefetchQuery(s(t, a?.productSku ?? (0, i.MR)())))
        },
        kp: s,
        zu: function (e, t, n) {
          return {
            queryKey: ["app-connect-mfa-requirement", t, n, e],
            enabled: null != t && null != n,
            staleTime: 0,
            retry: !1,
            refetchOnMount: "always",
            refetchOnWindowFocus: "always",
            queryFn: async ({ signal: a }) => {
              if (null == t || null == n) throw Error("Connection requires an active account")
              return (
                await l.CodexRequest.safeGet("/aip/connectors/{connector_id}/mfa_requirement", {
                  surface: "connector_setup",
                  parameters: { path: { connector_id: e } },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: n },
                  signal: a,
                })
              ).requirement
            },
          }
        },
      },
    )
  },
  lmaZ(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("oyxz"),
      r = n("JNtf"),
      s = n("mUDD"),
      o = n("X3K1")
    function c(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-b border-default py-2.5 last:border-none",
          children: [
            (0, a.jsx)(o.X, { className: "w-1/2" }),
            (0, a.jsx)(o.P, { lines: 2, seed: `app-connect-description-${e}`, size: "sm" }),
          ],
        },
        e,
      )
    }
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            n,
            d,
            u,
            p,
            m,
            f,
            g,
            h,
            y,
            b = (0, l.c)(12),
            { embedded: x } = e,
            v = void 0 !== x && x ? "h2" : r.L3
          return (
            b[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.A, { id: "beacons.connectApp.loading.title", defaultMessage: "Connect app" })),
                (b[0] = t))
              : (t = b[0]),
            b[1] !== v
              ? ((n = (0, a.jsx)(v, { className: "sr-only", children: t })), (b[1] = v), (b[2] = n))
              : (n = b[2]),
            b[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, a.jsx)("div", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(i.A, {
                    id: "beacons.connectApp.loading.description",
                    defaultMessage: "Loading connection details\u2026",
                  }),
                })),
                (b[3] = d))
              : (d = b[3]),
            b[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)("div", {
                  className: "size-14 overflow-hidden rounded-xl",
                  children: (0, a.jsx)(o.X, { size: "fill" }),
                })),
                (b[4] = u))
              : (u = b[4]),
            b[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, a.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                  ],
                })),
                (b[5] = p))
              : (p = b[5]),
            b[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u,
                    p,
                    (0, a.jsx)("div", {
                      className: "size-14 overflow-hidden rounded-xl",
                      children: (0, a.jsx)(o.X, { size: "fill" }),
                    }),
                  ],
                })),
                (b[6] = m))
              : (m = b[6]),
            b[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, a.jsxs)("div", {
                  className: "flex shrink-0 flex-col items-center gap-4",
                  children: [
                    m,
                    (0, a.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-2",
                      children: [
                        (0, a.jsx)("div", { className: "h-6 w-1/2", children: (0, a.jsx)(o.X, { size: "fill" }) }),
                        (0, a.jsx)(o.X, { className: "w-1/3", size: "sm" }),
                      ],
                    }),
                  ],
                })),
                (b[7] = f))
              : (f = b[7]),
            b[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, a.jsx)("div", {
                  className: "min-h-0 overflow-hidden rounded-2xl border border-default px-4 py-2",
                  children: [0, 1, 2].map(c),
                })),
                (b[8] = g))
              : (g = b[8]),
            b[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, a.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-6",
                  "aria-hidden": !0,
                  children: [
                    f,
                    g,
                    (0, a.jsx)("div", {
                      className: "mt-auto h-9 shrink-0 overflow-hidden rounded-full",
                      children: (0, a.jsx)(o.X, { size: "fill" }),
                    }),
                  ],
                })),
                (b[9] = h))
              : (h = b[9]),
            b[10] !== n
              ? ((y = (0, a.jsxs)(s.R4, {
                  className: "gap-6 overflow-hidden px-6 pt-8 pb-6 select-none",
                  size: "full",
                  children: [n, d, h],
                })),
                (b[10] = n),
                (b[11] = y))
              : (y = b[11]),
            y
          )
        },
      },
    )
  },
  IBgA(e, t, n) {
    var a = n("QosV"),
      l = n("irkb"),
      i = n("xSOA"),
      r = n("qmMi"),
      s = n("Qgfj"),
      o = n("Wf1j"),
      c = n("VVkm"),
      d = n("Dgwo"),
      u = n("HUHI"),
      p = n("OiCI"),
      m = n("SGsN"),
      f = n("B81s"),
      g = n("sLlu"),
      h = n("OWtl"),
      y = n("kfGJ"),
      b = n("WFY2")
    let x = (0, s.YK)({
      enableSuccess: { id: "apps.enable.success", defaultMessage: "{appName} app enabled" },
      disableSuccess: { id: "apps.disable.success", defaultMessage: "{appName} app disabled" },
      updateError: { id: "apps.update.error", defaultMessage: "Failed to update app" },
    })
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            s,
            v,
            w,
            _,
            A,
            I,
            j = (0, a.c)(35),
            k = e?.hostId ?? y.fI,
            S = (0, r.gh)(h.u)
          ;(0, r.Ul)(p.vh)
          let C = (0, l.jE)(),
            N = (0, g.B)(),
            E = (0, o.A)(),
            O
          j[0] !== k || j[1] !== O ? ((t = (0, u.iC)(k, O)), (j[0] = k), (j[1] = O), (j[2] = t)) : (t = j[2])
          let T = t
          j[3] !== T || j[4] !== k || j[5] !== N
            ? ((n = async () => {
                await Promise.all([
                  N((0, c.T9)(k)),
                  N(T),
                  N([...f.Sn, k]),
                  N([...f.tP, k]),
                  N(f.Kj),
                  N(["user-saved-config"]),
                ])
              }),
              (j[3] = T),
              (j[4] = k),
              (j[5] = N),
              (j[6] = n))
            : (n = j[6])
          let M = n
          ;(j[7] !== k || j[8] !== C || j[9] !== S
            ? ((s = async (e) => {
                let { appId: t, enabled: n } = e,
                  a = await (0, f.dG)(S, C, k)
                if (
                  "okOverridden" ===
                  (
                    await (0, d.V)(S, k).sendRequest("config/batchWrite", {
                      edits: (function ({ appId: e, enabled: t }) {
                        return [{ keyPath: `apps.${e}.enabled`, value: t, mergeStrategy: "upsert" }]
                      })({ appId: t, enabled: n }),
                      filePath: a?.filePath ?? null,
                      expectedVersion: a?.expectedVersion ?? null,
                      reloadUserConfig: !0,
                    })
                  ).status
                )
                  throw Error("App setting is overridden by project configuration")
              }),
              (j[7] = k),
              (j[8] = C),
              (j[9] = S),
              (j[10] = s))
            : (s = j[10]),
            j[11] !== T || j[12] !== C
              ? ((v = async (e) => {
                  let { appId: t, enabled: n } = e
                  await C.cancelQueries({ queryKey: T })
                  let a = C.getQueryData(T)
                  return (
                    a &&
                      C.setQueryData(
                        T,
                        a.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
                      ),
                    { previousApps: a }
                  )
                }),
                (j[11] = T),
                (j[12] = C),
                (j[13] = v))
              : (v = j[13]),
            j[14] !== T || j[15] !== E || j[16] !== N || j[17] !== C || j[18] !== S
              ? ((w = async (e, t, n) => {
                  let { appId: a, appName: l, enabled: i } = t
                  if (i && n?.previousApps?.find((e) => e.id === a)?.isEnabled === !1) {
                    await N(T)
                    let e = C.getQueryData(T)?.find((e) => e.id === a)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let r = l ?? C.getQueryData(T)?.find((e) => e.id === a)?.name ?? a
                  S.get(m.Id).success(E.formatMessage(i ? x.enableSuccess : x.disableSuccess, { appName: r }))
                }),
                (j[14] = T),
                (j[15] = E),
                (j[16] = N),
                (j[17] = C),
                (j[18] = S),
                (j[19] = w))
              : (w = j[19]),
            j[20] !== T || j[21] !== E || j[22] !== C || j[23] !== S
              ? ((_ = (e, t, n) => {
                  ;(b.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    S.get(m.Id).danger(E.formatMessage(x.updateError), {
                      errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                    }),
                    n?.previousApps && C.setQueryData(T, n.previousApps))
                }),
                (j[20] = T),
                (j[21] = E),
                (j[22] = C),
                (j[23] = S),
                (j[24] = _))
              : (_ = j[24]),
            j[25] !== M || j[26] !== s || j[27] !== v || j[28] !== w || j[29] !== _
              ? ((A = { mutationFn: s, onMutate: v, onSuccess: w, onError: _, onSettled: M }),
                (j[25] = M),
                (j[26] = s),
                (j[27] = v),
                (j[28] = w),
                (j[29] = _),
                (j[30] = A))
              : (A = j[30]))
          let P = (0, i.n)(A),
            R = P.isPending ? (P.variables?.appId ?? null) : null
          return (
            j[31] !== P.isPending || j[32] !== P.mutateAsync || j[33] !== R
              ? ((I = { setAppEnabled: P.mutateAsync, isUpdating: P.isPending, updatingAppId: R }),
                (j[31] = P.isPending),
                (j[32] = P.mutateAsync),
                (j[33] = R),
                (j[34] = I))
              : (I = j[34]),
            I
          )
        },
      },
    )
  },
  QSD9(e, t, n) {
    var a = n("SBbD"),
      l = n("CMv2")
    n.d(
      t,
      {},
      {
        B: function (e) {
          return (0, a.S)({
            ...e,
            getAvailableCompanions: (t) => (0, l.Nf)({ ...t, connectors: e.connectors }),
            getCompanionConnectorIds: (t) => (0, l.sR)(t, e.connectors),
          })
        },
      },
    )
  },
  bjbP(e, t, n) {
    var a = n("ASxG")
    let l = a
        .YjP()
        .trim()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      i = a.Ikc({ tenantId: l, connectionName: a.YjP().min(1) })
    n.d(
      t,
      {},
      {
        $3: l,
        Ci: function (e) {
          return (
            "OAI" === e.developer_type &&
            ["onenote", "outlook", "power_bi", "sharepoint", "teams"].includes(e.service) &&
            e.supported_auth.some((e) => "OAUTH" === e.type)
          )
        },
        qB: i,
      },
    )
  },
  PraM(e, t, n) {
    var a = n("SBbD"),
      l = n("pxeg")
    n.d(
      t,
      {},
      {
        I: function (e) {
          return (0, a.S)({ ...e, getAvailableCompanions: l.qX, getCompanionConnectorIds: l.HD })
        },
      },
    )
  },
  pxeg(e, t, n) {
    var a = n("BTha"),
      l = n("K0Re")
    let i = "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      r = [
        { connectorId: "connector_4aaab2856305417b993eca9a216aaf6e", kind: "outlook-email" },
        { connectorId: "connector_e6a7394682e24467ac68c60696f275a4", kind: "outlook-calendar" },
        { connectorId: i, kind: "sharepoint" },
        { connectorId: "connector_246af0940da3457da0e751171dc1ce60", kind: "teams" },
      ],
      s = new Map(r.map((e) => [e.connectorId, e]))
    n.d(
      t,
      {},
      {
        HD: function (e) {
          return (0, l.X)(r, e)
        },
        Vk: function ({ connectorId: e, disableExposureLog: t = !1, statsigClient: n, planType: l }) {
          return !!s.has(e) && (0, a.R)(n, "enable-bundled-apps-msft", l, { disableExposureLog: t })
        },
        XI: function (e) {
          return s.get(e)
        },
        oI: i,
        qX: function ({ availableAppIds: e, companionConnectorIds: t, companionConnectors: n, companionLinks: a }) {
          return (0, l.k)({
            availableAppIds: e,
            companionConnectorIds: t,
            companionConnectors: n,
            companionLinks: a,
            connectorById: s,
          })
        },
        zd: r,
      },
    )
  },
  SBbD(e, t, n) {
    var a = n("DBCl"),
      l = n("tl5a"),
      i = n("rGp2"),
      r = n("S7fj"),
      s = n("BQbE"),
      o = n("pDRe"),
      c = n("uc7r"),
      d = n("OiCI"),
      u = n("SPnB"),
      p = n("rvFo")
    n.d(
      t,
      {},
      {
        S: async function ({
          scope: e,
          appId: t,
          browserAccountId: n,
          freshLinkChecks: m = !1,
          getAvailableCompanions: f,
          getCompanionConnectorIds: g,
          hostId: h,
          primaryLink: y,
          productSku: b,
          queryClient: x,
        }) {
          if (null != y) return []
          let v = (0, c.dZ)({
            accountId: n ?? (0, d.RS)(e) ?? e.get(u.chatGptAuthenticatedAccountId$),
            userId: e.get(u.chatGptAuthenticatedUserId$),
            productSku: b,
          })
          if (!v.enabled) return []
          let w = g(t),
            [_, A, I, j] = await Promise.all([
              x.fetchQuery({ ...v, staleTime: m ? 0 : p.D.FIVE_MINUTES }).catch(() => void 0),
              (0, r.N)(h)
                ? x
                    .fetchQuery(
                      (0, o.ps)({
                        userId: e.get(u.chatGptAuthenticatedUserId$),
                        accountId: n ?? (0, d.RS)(e) ?? null,
                        productSku: b,
                        appIds: w,
                        enabled: !0,
                      }),
                    )
                    .then(r.k)
                    .catch(() => new Set())
                : x
                    .fetchQuery(
                      (0, s.getAppsReadQueryOptions)({
                        scope: e,
                        appIds: w,
                        browserAccountId: n,
                        hostId: h,
                        queryClient: x,
                        supportsAppRead: (0, a.JFB)(e.get(l.B0, h), "appRead"),
                      }),
                    )
                    .then((e) => new Set(e.map(({ id: e }) => e)))
                    .catch(() => new Set()),
              x.fetchQuery((0, i.rJ)(t, { productSku: b })).catch(() => null),
              Promise.all(w.map((e) => x.fetchQuery((0, i.rJ)(e)).catch(() => null))),
            ])
          return null == _ || _.some((e) => e.connector_id === t) || null == I
            ? []
            : f({
                availableAppIds: A,
                companionConnectorIds: w,
                companionConnectors: j,
                companionLinks: w.map((e) => _.find((t) => t.connector_id === e) ?? null),
              })
        },
      },
    )
  },
  rAOw(e, t, n) {
    var a = n("ABep"),
      l = n("QosV")
    n.d(
      t,
      {},
      {
        a: function () {
          let e,
            t = (0, l.c)(2)
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("img", {
                          alt: "",
                          "aria-hidden": !0,
                          className: "pointer-events-none absolute inset-x-0 top-0 h-auto w-full dark:hidden",
                          src: "https://persistent.oaistatic.com/codex-app-prod/oauth-bundle-desktop-light.webp",
                        }),
                        (0, a.jsx)("img", {
                          alt: "",
                          "aria-hidden": !0,
                          className: "pointer-events-none absolute inset-x-0 top-0 hidden h-auto w-full dark:block",
                          src: "https://persistent.oaistatic.com/codex-app-prod/oauth-bundle-desktop-dark.webp",
                        }),
                      ],
                    }),
                    null,
                  ],
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        },
      },
    )
  },
  yxN2(e, t, n) {
    var a = n("QosV"),
      l = n("irkb"),
      i = n("qmMi"),
      r = n("zd8w"),
      s = n("Wf1j"),
      o = n("Ywss"),
      c = n("rGp2"),
      d = n("o6hs"),
      u = n("JAom"),
      p = n("LQko"),
      m = n("Rvvc"),
      f = n("CMv2"),
      g = n("QSD9"),
      h = n("bjbP"),
      y = n("pxeg"),
      b = n("PraM")
    n("OiCI")
    var x = n("OAko"),
      v = n("Ot7V"),
      w = n("SGsN"),
      _ = n("Rbbe"),
      A = n("OWtl"),
      I = n("kfGJ"),
      j = n("hZax")
    function k(e) {
      ;(0, v.E0)({ disposition: void 0, href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function S() {
      return null
    }
    function C(e) {
      let t = e?.trim()
      t && (0, v.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function N(e) {
      return "apps-tab" === e.kind && null != e.reauthLinkId
    }
    function E(e) {
      return (
        ("apps-tab" === e.kind && null == e.reauthLinkId) ||
        ("plugin-install" === e.kind &&
          null == e.origin &&
          null == e.pendingElicitationReply &&
          e.installOptions?.pendingElicitationReply == null)
      )
    }
    function O(e) {
      return null != e
        ? `${e.pathname}${e.search}${e.hash}`
        : `${window.location.pathname}${window.location.search}${window.location.hash}`
    }
    n.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            n,
            v,
            T,
            M,
            P,
            R,
            D,
            q,
            z,
            $,
            F,
            U = (0, a.c)(74)
          U[0] !== e ? ((t = void 0 === e ? {} : e), (U[0] = e), (U[1] = t)) : (t = U[1])
          let {
              hostId: B,
              marketplaceAnalytics: L,
              oauthReferrer: Q,
              onConnectStarted: V,
              onConnectFailed: G,
              onExternalConnectStarted: W,
            } = t,
            H = (0, r.useContext)(o.di),
            K = (0, i.gh)(A.u),
            Z = (0, s.A)(),
            Y = (0, l.jE)(),
            X = B ?? I.fI,
            J = (0, j.Zj)("2761268526"),
            ee = (0, j.Zj)("3304228433"),
            et = (0, j.AS)()
          U[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { preview: !1 }), (U[2] = n)) : (n = U[2])
          let { data: en } = (0, x.YL)(void 0, n),
            {
              clearPendingAppConnect: ea,
              getPendingAppConnectForApp: el,
              isAppConnectPending: ei,
              markAppConnectOAuthPending: er,
            } = (0, u.ZN)(),
            [es, eo] = (0, r.useState)(null),
            [ec, ed] = (0, r.useState)(),
            [eu, ep] = (0, r.useState)(),
            [em, ef] = (0, r.useState)(null)
          U[3] !== el || U[4] !== X
            ? ((v = (e, t) => el(e, X, null == t || ("apps-tab" === t.kind && null == t.reauthLinkId) ? E : t)),
              (U[3] = el),
              (U[4] = X),
              (U[5] = v))
            : (v = U[5])
          let eg = v
          if (
            U[6] !== ea ||
            U[7] !== es?.id ||
            U[8] !== eu ||
            U[9] !== en?.plan_type ||
            U[10] !== el ||
            U[11] !== eg ||
            U[12] !== X ||
            U[13] !== Z ||
            U[14] !== ei ||
            U[15] !== J ||
            U[16] !== ee ||
            U[17] !== H?.location ||
            U[18] !== er ||
            U[19] !== L ||
            U[20] !== Q ||
            U[21] !== G ||
            U[22] !== V ||
            U[23] !== W ||
            U[24] !== em ||
            U[25] !== Y ||
            U[26] !== K ||
            U[27] !== et
          ) {
            let e, t, n, a, l
            ;((R = async (e, t) => {
              let {
                  appConnectOptions: n,
                  marketplaceAnalytics: a,
                  addAccountAttempt: l,
                  forceInApp: i,
                  isAddingAccount: r,
                  hasExistingAccount: s,
                  reauthLinkId: o,
                  googleOAuthBundlePrepared: u,
                  microsoftOAuthBundlePrepared: x,
                  mustShowInstallationInterstitial: v,
                } = void 0 === t ? {} : t,
                _ = void 0 !== i && i,
                A = void 0 !== r && r,
                I = void 0 !== s && s
              if (null != em) return
              let j = null == o && (!e.isAccessible || A) ? eg(e.id) : null,
                N = (0, d.Ye)(
                  e.id,
                  n ??
                    (null == o
                      ? j?.appConnectOptions
                      : eg(e.id, { kind: "apps-tab", reauthLinkId: o })?.appConnectOptions),
                ),
                E = null == Q ? N : { connectorId: e.id, ...N, oauthReferrer: N?.oauthReferrer ?? Q },
                O = j?.marketplaceAnalytics ?? a ?? ("function" == typeof L ? L() : L),
                T = V?.(e, O) ?? O
              if (!J && !_ && null == j) {
                ;(C((0, c.Cj)(e, E, T?.installAttemptId)), W?.(e))
                return
              }
              ;(0, p.bO)(Y, e.id, E)
              let P = (0, f.W9)({ planType: en?.plan_type, connectorId: e.id, statsigClient: et }),
                R = null != (0, f.w8)(e.id, P),
                D = (0, y.Vk)({ planType: en?.plan_type, connectorId: e.id, statsigClient: et })
              if (
                !_ &&
                !(void 0 !== u && u) &&
                !(void 0 !== x && x) &&
                null == j &&
                !0 !== e.isAccessible &&
                (R || D)
              ) {
                ef(e.id)
                let t = { scope: K, appId: e.id, browserAccountId: void 0, hostId: X, queryClient: Y }
                await (R ? (0, g.B)({ ...t, connectors: P }) : (0, b.I)(t))
                  .catch((t) => {
                    throw (G?.(e, T, "request_failed"), t)
                  })
                  .finally(() => {
                    ef(null)
                  })
              }
              if (null != j || (!1 === v && (!_ || A) && (!e.isAccessible || A) && (A || (!R && !D)))) {
                ef(e.id)
                let t = await Y.fetchQuery((0, c.rJ)(e.id, { productSku: E?.productSku }))
                  .catch(S)
                  .then(async (t) =>
                    null != t &&
                    "DISABLED_BY_ADMIN" !== t.status &&
                    !(A && I && ee && (0, h.Ci)(t)) &&
                    null == (0, d.GE)(e.id, E) &&
                    (A || !(0, c.B7)(t, E?.authTypeOverride)) &&
                    (0, c.Yo)(t, E?.authTypeOverride) &&
                    "OAUTH" === (0, c.NT)(t, E?.authTypeOverride)
                      ? (0, c.CI)({
                          scope: K,
                          allowBrowserFallback: !1,
                          app: e,
                          appConnectOptions: E,
                          connector: t,
                          installAttemptId: T?.installAttemptId,
                          requestedCompanionConnectorIds: j?.requestedCompanionConnectorIds,
                          onOAuthStarted: (n, a) => {
                            M({
                              app: e,
                              oauthFlowCorrelationId: a?.oauthFlowCorrelationId,
                              marketplaceAnalytics: T,
                              pastedLinkProductExperience: j?.pastedLinkProductExperience,
                              pluginInstallOAuthState:
                                j?.pluginInstallOAuthState ??
                                (j?.resumeTarget.kind === "plugin-install" ? j.oauthState : void 0),
                              previousOAuthState: j?.oauthState,
                              requestedCompanionConnectorIds: j?.requestedCompanionConnectorIds,
                              resumeTarget: j?.resumeTarget ?? { kind: "apps-tab", addAccountAttempt: l },
                              isGithubConnector: e.id === m.qD || t.template_id === m.Bk || "github" === t.service,
                              redirectUrl: n,
                              returnTo: E?.redirectAfter ?? j?.returnTo,
                              appConnectOptions: E,
                            })
                          },
                          openInBrowser: k,
                          queryClient: Y,
                        })
                      : null == t
                        ? null
                        : { kind: "requires-connection-form" },
                  )
                  .finally(() => {
                    ef(null)
                  })
                if (t?.kind === "oauth-started") return void K.get(w.Id).info((0, c.oH)({ intl: Z }))
                if (
                  ((null == t || "failed" === t.kind) && G?.(e, T, null == t ? "request_failed" : "connect_failed"),
                  null != j && t?.kind !== "requires-connection-form" && t?.kind !== "requires-mfa")
                )
                  return void K.get(w.Id).danger((0, c.S4)(Z), {
                    errorAnalytics: { toastId: "useAppConnectFlow.handleConnectApp" },
                  })
              }
              ;(ep(T), ed(E), eo(e))
            }),
              U[35] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = () => {
                    ;(eo(null), ed(void 0), ep(void 0))
                  }),
                  (U[35] = e))
                : (e = U[35]),
              (T = e),
              U[36] !== es?.id || U[37] !== eg || U[38] !== X || U[39] !== ei || U[40] !== em
                ? ((t = (e, t) => em === e || es?.id === e || ei(e, t ?? E, X) || null != eg(e, t)),
                  (U[36] = es?.id),
                  (U[37] = eg),
                  (U[38] = X),
                  (U[39] = ei),
                  (U[40] = em),
                  (U[41] = t))
                : (t = U[41]),
              (q = t),
              U[42] !== ea || U[43] !== eg || U[44] !== X || U[45] !== Z || U[46] !== K
                ? ((n = (e, t) => {
                    let n = eg(e, t)
                    if (null == n) return
                    let a =
                      n.pluginInstallOAuthState ?? ("plugin-install" === n.resumeTarget.kind ? n.oauthState : void 0)
                    ;(null != a &&
                      ((0, _.$4)(K, a)
                        ? K.get(w.Id).danger((0, c.ue)(Z), {
                            errorAnalytics: { toastId: "useAppConnectFlow.handleAppConnected" },
                          })
                        : (0, _.PA)(K, a)),
                      ea({ oauthState: n.oauthState, hostId: X }))
                  }),
                  (U[42] = ea),
                  (U[43] = eg),
                  (U[44] = X),
                  (U[45] = Z),
                  (U[46] = K),
                  (U[47] = n))
                : (n = U[47]),
              (P = n),
              U[48] !== ea || U[49] !== eg || U[50] !== X || U[51] !== Z || U[52] !== W || U[53] !== K
                ? ((a = (e, t) => {
                    let n = eg(e.id, t)
                    if (null != n) {
                      let e =
                        n.pluginInstallOAuthState ?? ("plugin-install" === n.resumeTarget.kind ? n.oauthState : void 0)
                      ;(null != e &&
                        (0, _.$4)(K, e) &&
                        K.get(w.Id).danger((0, c.ue)(Z), {
                          errorAnalytics: { toastId: "useAppConnectFlow.handleExternalConnectStarted" },
                        }),
                        ea({ oauthState: n.oauthState, hostId: X }))
                    }
                    W?.(e)
                  }),
                  (U[48] = ea),
                  (U[49] = eg),
                  (U[50] = X),
                  (U[51] = Z),
                  (U[52] = W),
                  (U[53] = K),
                  (U[54] = a))
                : (a = U[54]),
              (D = a),
              U[55] !== el || U[56] !== X || U[57] !== ei
                ? ((l = (e) => ei(e, N, X) || null != el(e, X, N)),
                  (U[55] = el),
                  (U[56] = X),
                  (U[57] = ei),
                  (U[58] = l))
                : (l = U[58]),
              (z = l),
              (M = (e) => {
                let {
                    app: t,
                    appConnectOptions: n,
                    isGithubConnector: a,
                    marketplaceAnalytics: l,
                    pastedLinkProductExperience: i,
                    pluginInstallOAuthState: r,
                    previousOAuthState: s,
                    oauthFlowCorrelationId: o,
                    oauthReferrer: c,
                    requestedCompanionConnectorIds: d,
                    redirectUrl: u,
                    returnTo: p,
                    resumeTarget: m,
                  } = e,
                  f = l ?? eu ?? ("function" == typeof L ? L() : L),
                  g = null == s && (null == m || "apps-tab" === m.kind) ? eg(t.id, m) : null,
                  h = s ?? g?.oauthState,
                  y = g?.resumeTarget ?? m,
                  b = er({
                    app: t,
                    oauthFlowCorrelationId: o,
                    oauthReferrer: c,
                    appConnectOptions: n ?? g?.appConnectOptions,
                    hostId: X,
                    isGithubConnector: a,
                    marketplaceAnalytics: g?.marketplaceAnalytics ?? f,
                    pastedLinkProductExperience: i ?? g?.pastedLinkProductExperience,
                    pluginInstallOAuthState:
                      r ??
                      g?.pluginInstallOAuthState ??
                      (g?.resumeTarget.kind === "plugin-install" ? g.oauthState : void 0),
                    requestedCompanionConnectorIds: d ?? g?.requestedCompanionConnectorIds,
                    redirectUrl: u,
                    returnTo:
                      y?.kind === "apps-tab" && null != y.reauthLinkId && null != y.addAccountAttempt
                        ? (g?.returnTo ?? O(H?.location))
                        : (p ?? g?.returnTo ?? O(H?.location)),
                    resumeTarget: y,
                  })
                return (null != b && null != h && h !== b && ea({ oauthState: h, hostId: X }), b)
              }),
              (U[6] = ea),
              (U[7] = es?.id),
              (U[8] = eu),
              (U[9] = en?.plan_type),
              (U[10] = el),
              (U[11] = eg),
              (U[12] = X),
              (U[13] = Z),
              (U[14] = ei),
              (U[15] = J),
              (U[16] = ee),
              (U[17] = H?.location),
              (U[18] = er),
              (U[19] = L),
              (U[20] = Q),
              (U[21] = G),
              (U[22] = V),
              (U[23] = W),
              (U[24] = em),
              (U[25] = Y),
              (U[26] = K),
              (U[27] = et),
              (U[28] = T),
              (U[29] = M),
              (U[30] = P),
              (U[31] = R),
              (U[32] = D),
              (U[33] = q),
              (U[34] = z))
          } else ((T = U[28]), (M = U[29]), (P = U[30]), (R = U[31]), (D = U[32]), (q = U[33]), (z = U[34]))
          return (
            U[59] !== ea || U[60] !== X
              ? (($ = (e) => {
                  ea({ ...e, hostId: X })
                }),
                (U[59] = ea),
                (U[60] = X),
                (U[61] = $))
              : ($ = U[61]),
            U[62] !== T ||
            U[63] !== es ||
            U[64] !== eu ||
            U[65] !== ec ||
            U[66] !== M ||
            U[67] !== P ||
            U[68] !== R ||
            U[69] !== D ||
            U[70] !== q ||
            U[71] !== z ||
            U[72] !== $
              ? ((F = {
                  connectingApp: es,
                  connectingOptions: ec,
                  connectingMarketplaceAnalytics: eu,
                  clearConnectingApp: T,
                  clearPendingAppConnect: $,
                  handleAppConnected: P,
                  handleAppConnectOAuthStarted: M,
                  handleConnectApp: R,
                  handleExternalConnectStarted: D,
                  handleOpenAppUrl: C,
                  isAppConnectPending: q,
                  isAppReauthPending: z,
                }),
                (U[62] = T),
                (U[63] = es),
                (U[64] = eu),
                (U[65] = ec),
                (U[66] = M),
                (U[67] = P),
                (U[68] = R),
                (U[69] = D),
                (U[70] = q),
                (U[71] = z),
                (U[72] = $),
                (U[73] = F))
              : (F = U[73]),
            F
          )
        },
      },
    )
  },
  yZT5(e, t, n) {
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t = ["gpt-6-astra-wm", e.defaultModelSlug, ...e.options.map((e) => e.slug)].find(
            (t) =>
              e.options.some((e) => e.slug === t && !1 !== e.isAvailable) &&
              !e.categories?.some(
                (e) => e.is_soft_deprecated && (e.default_model === t || e.supported_models.includes(t)),
              ),
          )
          if (null == t) throw Error("No available Work model for the writing style demo")
          let n = e.modelConfigBySlug?.[t]?.thinkingEfforts?.some((e) => "standard" === e.thinking_effort)
          return { slug: t, thinkingEffort: n ? "standard" : (e.defaultThinkingEffortByModelSlug?.[t] ?? null) }
        },
        o: function (e) {
          return e.formatMessage({
            id: "tpp.write_like_me.sample_prompt.grounded_demo",
            defaultMessage:
              "Look through my chats, Library files, and any connected apps for a new and real writing task you could help with. Briefly explain what you found, why you chose it, and which examples of my own writing you\u2019ll use. Then produce a useful draft closely matching my style. Point out two specific choices you made to match my style. If you can\u2019t find a clear task or enough examples, ask me for a draft, template, or writing sample instead of inventing one. Show the draft here; do not send, post, or modify anything.",
          })
        },
      },
    )
  },
  NcBa(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("on57"),
      r = n("zd8w")
    let s = { small: "-ms-1 size-5", medium: "-ms-1.5 size-6" }
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            n,
            o,
            c,
            d,
            u,
            p,
            m = (0, l.c)(19),
            { ariaLabel: f, children: g, size: h, surface: y } = e,
            b = void 0 === h ? "small" : h,
            x = void 0 === y ? "default" : y
          if (m[0] !== f || m[1] !== g || m[2] !== b || m[3] !== x) {
            u = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                l = r.Children.toArray(g)
              if (0 === l.length) {
                u = null
                break e
              }
              ;((t = null == f || void 0),
                (n = f),
                (o = "flex shrink-0 items-center"),
                (c = null == f ? void 0 : "img"),
                m[10] !== b || m[11] !== x
                  ? ((e = (e) =>
                      (0, a.jsx)("span", {
                        className: (0, i.A)(
                          "flex items-center justify-center overflow-hidden rounded-md first:ms-0",
                          "transparent" !== x && "ring-1 ring-inset",
                          "white" === x
                            ? "bg-brand-logo-background text-brand-logo-foreground ring-brand-logo-foreground/10"
                            : "text-default",
                          "default" === x && "bg-surface ring-border",
                          "transparent" === x && "bg-transparent",
                          s[b],
                        ),
                        children: e,
                      })),
                    (m[10] = b),
                    (m[11] = x),
                    (m[12] = e))
                  : (e = m[12]),
                (d = r.Children.map(l, e)))
            }
            ;((m[0] = f),
              (m[1] = g),
              (m[2] = b),
              (m[3] = x),
              (m[4] = t),
              (m[5] = n),
              (m[6] = o),
              (m[7] = c),
              (m[8] = d),
              (m[9] = u))
          } else ((t = m[4]), (n = m[5]), (o = m[6]), (c = m[7]), (d = m[8]), (u = m[9]))
          return u !== Symbol.for("react.early_return_sentinel")
            ? u
            : (m[13] !== t || m[14] !== n || m[15] !== o || m[16] !== c || m[17] !== d
                ? ((p = (0, a.jsx)("span", { "aria-hidden": t, "aria-label": n, className: o, role: c, children: d })),
                  (m[13] = t),
                  (m[14] = n),
                  (m[15] = o),
                  (m[16] = c),
                  (m[17] = d),
                  (m[18] = p))
                : (p = m[18]),
              p)
        },
      },
    )
  },
  Bvfk(e, t, n) {
    n.d(t, { AccountWritingStyleDialog: () => eA })
    var a = n("ABep"),
      l = n("QosV"),
      i = n("qmMi"),
      r = n("DBCl"),
      s = n("zd8w"),
      o = n("Wf1j"),
      c = n("PFjh"),
      d = n("E8Sp"),
      u = n("pDRe"),
      p = n("OiCI"),
      m = n("SPnB"),
      f = n("eFn4"),
      g = n("UOa8"),
      h = n("CKur"),
      y = n("OOaz"),
      b = n("QBVt"),
      x = n("jAnS"),
      v = n("yZT5"),
      w = n("j9xU"),
      _ = n("T8X0"),
      A = n("X6Vn"),
      I = n("SGsN"),
      j = n("Q8aV"),
      k = n("gBBC"),
      S = n("OWtl"),
      C = n("T0Rc"),
      N = n("S2r0"),
      E = n("oyxz"),
      O = n("Sx5O"),
      T = n("IBgA"),
      M = n("hOO0"),
      P = n("HUHI"),
      R = n("uc7r"),
      D = n("yxN2"),
      q = n("WzdM"),
      z = n("ugfi"),
      $ = n("EEop"),
      F = n("bJEQ"),
      U = n("cLdu"),
      B = n("ueue"),
      L = n("ecE5"),
      Q = n("rvFo"),
      V = n("kK7d"),
      G = n("eShZ"),
      W = n("z7pR"),
      H = n("hUKi"),
      K = n("rAOw"),
      Z = n("FvYa"),
      Y = n("NcBa"),
      X = n("Sm6l"),
      J = n("JNtf"),
      ee = n("mUDD"),
      et = n("bVeK"),
      en = n("RNul"),
      ea = n("AWNZ"),
      el = n("bZug")
    function ei(e) {
      let t,
        n,
        i = (0, l.c)(11),
        { apps: r, isContinuing: s, pendingAppId: o, onConnect: c } = e
      if (i[0] !== r || i[1] !== s || i[2] !== c || i[3] !== o) {
        let e
        ;(i[5] !== s || i[6] !== c || i[7] !== o
          ? ((e = (e) => (0, a.jsx)(es, { app: e, disabled: s || null != o, pending: o === e.id, onConnect: c }, e.id)),
            (i[5] = s),
            (i[6] = c),
            (i[7] = o),
            (i[8] = e))
          : (e = i[8]),
          (t = [...r].sort(er).map(e)),
          (i[0] = r),
          (i[1] = s),
          (i[2] = c),
          (i[3] = o),
          (i[4] = t))
      } else t = i[4]
      return (
        i[9] !== t ? ((n = (0, a.jsx)("div", { className: el.r, children: t })), (i[9] = t), (i[10] = n)) : (n = i[10]),
        n
      )
    }
    function er(e, t) {
      return Number("connected" === e.connection) - Number("connected" === t.connection)
    }
    function es(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d = (0, l.c)(28),
        { app: u, disabled: p, pending: m, onConnect: f } = e,
        g = (0, o.A)()
      d[0] !== u.connection || d[1] !== u.name || d[2] !== g
        ? ((t = g.formatMessage(
            {
              id: "writingStyle.apps.sourceActionLabel",
              defaultMessage:
                "{action, select, reauth {Reconnect} disabled {Enable} refresh {Refresh} other {Connect}} {appName}",
            },
            { action: u.connection, appName: u.name },
          )),
          (d[0] = u.connection),
          (d[1] = u.name),
          (d[2] = g),
          (d[3] = t))
        : (t = d[3])
      let h = t,
        y = "disconnected" === u.connection || "connect" === u.connection
      if (y) {
        let e
        ;(d[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(et.ONy, {})), (d[4] = e)) : (e = d[4]),
          (n = e))
      } else {
        let e
        ;(d[5] !== u.connection
          ? ((e = (0, a.jsx)(E.A, {
              id: "writingStyle.apps.sourceAction",
              defaultMessage: "{action, select, reauth {Reconnect} disabled {Enable} other {Refresh}}",
              values: { action: u.connection },
            })),
            (d[5] = u.connection),
            (d[6] = e))
          : (e = d[6]),
          (n = e))
      }
      if ("connected" === u.connection) {
        let e, t
        ;(d[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(et.JwD, {})), (d[7] = e)) : (e = d[7]),
          d[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsxs)("span", {
                className: "flex size-9 shrink-0 items-center justify-center",
                role: "status",
                children: [
                  e,
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(E.A, { id: "writingStyle.apps.connected", defaultMessage: "Connected" }),
                  }),
                ],
              })),
              (d[8] = t))
            : (t = d[8]),
          (i = t))
      } else if ("unavailable" === u.connection) {
        let e
        ;(d[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(E.A, { id: "writingStyle.apps.unavailable", defaultMessage: "Unavailable" })), (d[9] = e))
          : (e = d[9]),
          (i = e))
      } else {
        let e,
          t,
          l = y ? "inputIcon" : "medium"
        ;(d[10] !== u || d[11] !== f ? ((e = () => f(u)), (d[10] = u), (d[11] = f), (d[12] = e)) : (e = d[12]),
          d[13] !== h || d[14] !== n || d[15] !== p || d[16] !== m || d[17] !== l || d[18] !== e
            ? ((t = (0, a.jsx)(X.$, {
                type: "button",
                color: "ghostSecondary",
                size: l,
                radius: "full",
                "aria-label": h,
                title: h,
                "aria-busy": m,
                disabled: p,
                onClick: e,
                children: n,
              })),
              (d[13] = h),
              (d[14] = n),
              (d[15] = p),
              (d[16] = m),
              (d[17] = l),
              (d[18] = e),
              (d[19] = t))
            : (t = d[19]),
          (i = t))
      }
      return (
        d[20] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(et.wdY, {})), (d[20] = r)) : (r = d[20]),
        d[21] !== u.logoDarkUrl || d[22] !== u.logoUrl
          ? ((s = (0, a.jsx)(Z.R, {
              className: "size-5",
              alt: "",
              logoUrl: u.logoUrl,
              logoDarkUrl: u.logoDarkUrl,
              fallback: r,
            })),
            (d[21] = u.logoDarkUrl),
            (d[22] = u.logoUrl),
            (d[23] = s))
          : (s = d[23]),
        d[24] !== u.name || d[25] !== i || d[26] !== s
          ? ((c = (0, a.jsx)(ea.ic, { variant: "featured", label: u.name, icon: s, control: i })),
            (d[24] = u.name),
            (d[25] = i),
            (d[26] = s),
            (d[27] = c))
          : (c = d[27]),
        c
      )
    }
    let eo = ["messaging", "email", "documents"],
      ec = { messaging: et.tv7, email: et.hdW, documents: et.Xvv }
    function ed(e) {
      let t,
        n,
        i,
        r,
        c,
        d,
        u,
        p,
        m,
        f,
        g,
        h,
        y,
        b,
        x,
        v,
        w,
        _,
        A,
        I,
        j,
        k,
        S,
        C,
        N,
        O,
        T,
        M,
        P,
        R,
        D,
        q = (0, l.c)(108),
        {
          apps: z,
          enabled: $,
          onManage: F,
          category: U,
          onCategoryChange: B,
          error: L,
          isContinuing: Q,
          isLoading: V,
          isRefreshing: G,
          pendingAppId: W,
          onClose: H,
          onConnect: Z,
          onContinue: er,
          onRetry: es,
        } = e,
        ed = void 0 !== G && G,
        eg = (0, o.A)(),
        eh = (0, s.useRef)(null)
      if (
        q[0] !== z ||
        q[1] !== U ||
        q[2] !== $ ||
        q[3] !== eg ||
        q[4] !== Q ||
        q[5] !== V ||
        q[6] !== B ||
        q[7] !== H ||
        q[8] !== er ||
        q[9] !== F ||
        q[10] !== W
      ) {
        let e,
          l,
          s,
          o = z?.filter(ef)
        ;((r = !(i = Q || null != W)),
          q[34] !== i || q[35] !== B
            ? ((e = (e) => {
                i || (B(e), eh.current?.focus())
              }),
              (q[34] = i),
              (q[35] = B),
              (q[36] = e))
            : (e = q[36]))
        let C = e
        ;((n = J.lG),
          (g = !0),
          (h = "setup"),
          (y = "chatgpt"),
          q[37] !== H ? ((b = (e) => !e && H()), (q[37] = H), (q[38] = b)) : (b = q[38]),
          q[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = {
                onOpenAutoFocus: (e) => {
                  ;(e.preventDefault(), eh.current?.focus())
                },
              }),
              (q[39] = v))
            : (v = q[39]),
          (t = ee.R4),
          (k = "form"),
          (S = "full"),
          (c = "chatgpt"),
          (d = "relative overflow-hidden"),
          q[40] !== r || q[41] !== er
            ? ((u = (e) => {
                ;(e.preventDefault(), r && er())
              }),
              (q[40] = r),
              (q[41] = er),
              (q[42] = u))
            : (u = q[42]),
          q[43] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(K.a, {})), (q[43] = p)) : (p = q[43]),
          q[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsx)("div", {
                className: "relative flex shrink-0 items-center justify-center pt-8 select-none",
                children: (0, a.jsx)("span", {
                  className:
                    "flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-default bg-surface text-default shadow-sm",
                  children: (0, a.jsx)(et.CY9, {}),
                }),
              })),
              (q[44] = m))
            : (m = q[44]),
          q[45] !== i || q[46] !== U || q[47] !== C || q[48] !== eg
            ? ((f =
                null != U
                  ? (0, a.jsx)(X.$, {
                      className: "absolute top-6 left-6",
                      type: "button",
                      color: "ghostSecondary",
                      size: "inputIcon",
                      radius: "full",
                      disabled: i,
                      onClick: () => C(null),
                      "aria-label": eg.formatMessage({ id: "writingStyle.setup.back", defaultMessage: "Back" }),
                      children: (0, a.jsx)(et.z_d, {}),
                    })
                  : null),
              (q[45] = i),
              (q[46] = U),
              (q[47] = C),
              (q[48] = eg),
              (q[49] = f))
            : (f = q[49]),
          (I = "relative flex min-h-0 flex-1 flex-col gap-4 px-8 pt-6 pb-4"),
          q[50] !== $
            ? ((l = (0, a.jsx)(J.L3, {
                asChild: !0,
                children: (0, a.jsx)("h2", {
                  ref: eh,
                  tabIndex: -1,
                  className: "heading-lg font-semibold",
                  children: $
                    ? (0, a.jsx)(E.A, {
                        id: "writingStyle.setup.enabledTitle",
                        defaultMessage: "Writing style is personalized",
                      })
                    : (0, a.jsx)(E.A, { id: "writingStyle.setup.title", defaultMessage: "Set up writing style" }),
                }),
              })),
              (q[50] = $),
              (q[51] = l))
            : (l = q[51]),
          q[52] !== F
            ? ((s = (0, a.jsx)(J.rr, {
                className: "text-base text-secondary",
                children: (0, a.jsx)(E.A, {
                  id: "writingStyle.setup.descriptionWithManage",
                  defaultMessage:
                    "ChatGPT uses your chats and Library files to write in your style. <manage>Manage</manage>",
                  values: {
                    manage: (e) =>
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "cursor-interaction underline",
                        onClick: F,
                        children: e,
                      }),
                  },
                }),
              })),
              (q[52] = F),
              (q[53] = s))
            : (s = q[53]),
          q[54] !== l || q[55] !== s
            ? ((j = (0, a.jsxs)("div", {
                className: "flex shrink-0 flex-col items-center gap-2 text-center select-none",
                children: [l, s],
              })),
              (q[54] = l),
              (q[55] = s),
              (q[56] = j))
            : (j = q[56]),
          (x = "flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto"),
          q[57] !== U
            ? ((w =
                null == U
                  ? (0, a.jsx)("h3", {
                      className: "font-semibold",
                      children: (0, a.jsx)(E.A, {
                        id: "writingStyle.setup.improve",
                        defaultMessage: "Connect apps to improve writing (optional)",
                      }),
                    })
                  : null),
              (q[57] = U),
              (q[58] = w))
            : (w = q[58]),
          q[59] !== V
            ? ((_ = V
                ? (0, a.jsxs)("div", {
                    role: "status",
                    className: "flex items-center justify-center gap-2 text-secondary",
                    children: [
                      (0, a.jsx)(en.y, {}),
                      (0, a.jsx)(E.A, {
                        id: "writingStyle.apps.loading",
                        defaultMessage: "Checking connected apps\u2026",
                      }),
                    ],
                  })
                : null),
              (q[59] = V),
              (q[60] = _))
            : (_ = q[60]),
          (A =
            null != z && null == U
              ? (0, a.jsx)("div", {
                  className: el.r,
                  children: eo.map((e) => {
                    let t = ec[e],
                      n = o?.filter((t) => t.category === e),
                      l = null != n && n.length > 0
                    return (0, a.jsx)(
                      ea.ic,
                      {
                        className: "justify-between max-sm:flex-wrap",
                        variant: "featured",
                        icon: (0, a.jsx)(t, {}),
                        label: (0, a.jsx)(E.A, {
                          id: "writingStyle.setup.category",
                          defaultMessage: "{category, select, email {Email} messaging {Messaging} other {Documents}}",
                          values: { category: e },
                        }),
                        control: (0, a.jsxs)(a.Fragment, {
                          children: [
                            l
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(Y.v, { ariaLabel: eg.formatList(n.map(em)), children: n.map(ep) }),
                                    (0, a.jsx)(E.A, { id: "writingStyle.apps.connected", defaultMessage: "Connected" }),
                                  ],
                                })
                              : null,
                            (0, a.jsx)(X.$, {
                              type: "button",
                              color: "ghostSecondary",
                              size: "toolbar",
                              disabled: i,
                              "aria-label": l
                                ? eg.formatMessage(
                                    {
                                      id: "writingStyle.setup.connectedCategoryAction",
                                      defaultMessage:
                                        "{category, select, email {Connect more email apps} messaging {Connect more messaging apps} other {Connect more document apps}}. Connected: {apps}",
                                    },
                                    { category: e, apps: eg.formatList(n.map(eu)) },
                                  )
                                : eg.formatMessage(
                                    {
                                      id: "writingStyle.setup.openCategory",
                                      defaultMessage:
                                        "{category, select, email {Set up email} messaging {Set up messaging} other {Set up documents}}",
                                    },
                                    { category: e },
                                  ),
                              onClick: () => C(e),
                              children: (0, a.jsx)(E.A, { id: "writingStyle.setup.setUp", defaultMessage: "Set up" }),
                            }),
                          ],
                        }),
                      },
                      e,
                    )
                  }),
                })
              : null),
          (q[0] = z),
          (q[1] = U),
          (q[2] = $),
          (q[3] = eg),
          (q[4] = Q),
          (q[5] = V),
          (q[6] = B),
          (q[7] = H),
          (q[8] = er),
          (q[9] = F),
          (q[10] = W),
          (q[11] = t),
          (q[12] = n),
          (q[13] = i),
          (q[14] = r),
          (q[15] = c),
          (q[16] = d),
          (q[17] = u),
          (q[18] = p),
          (q[19] = m),
          (q[20] = f),
          (q[21] = g),
          (q[22] = h),
          (q[23] = y),
          (q[24] = b),
          (q[25] = x),
          (q[26] = v),
          (q[27] = w),
          (q[28] = _),
          (q[29] = A),
          (q[30] = I),
          (q[31] = j),
          (q[32] = k),
          (q[33] = S))
      } else
        ((t = q[11]),
          (n = q[12]),
          (i = q[13]),
          (r = q[14]),
          (c = q[15]),
          (d = q[16]),
          (u = q[17]),
          (p = q[18]),
          (m = q[19]),
          (f = q[20]),
          (g = q[21]),
          (h = q[22]),
          (y = q[23]),
          (b = q[24]),
          (x = q[25]),
          (v = q[26]),
          (w = q[27]),
          (_ = q[28]),
          (A = q[29]),
          (I = q[30]),
          (j = q[31]),
          (k = q[32]),
          (S = q[33]))
      ;(q[61] !== z || q[62] !== U || q[63] !== Q || q[64] !== ed || q[65] !== Z || q[66] !== W
        ? ((C =
            null != z && null != U
              ? (0, a.jsx)(ei, {
                  apps: z.filter((e) => e.category === U),
                  isContinuing: Q || ed,
                  pendingAppId: W,
                  onConnect: Z,
                })
              : null),
          (q[61] = z),
          (q[62] = U),
          (q[63] = Q),
          (q[64] = ed),
          (q[65] = Z),
          (q[66] = W),
          (q[67] = C))
        : (C = q[67]),
        q[68] !== i || q[69] !== L || q[70] !== ed || q[71] !== es
          ? ((N =
              null != L
                ? (0, a.jsxs)("div", {
                    role: "alert",
                    className: "flex flex-col items-center gap-2",
                    children: [
                      (0, a.jsx)("p", { children: L }),
                      (0, a.jsx)(X.$, {
                        type: "button",
                        color: "secondary",
                        disabled: i || ed,
                        loading: ed,
                        onClick: es,
                        children: (0, a.jsx)(E.A, { id: "writingStyle.retry", defaultMessage: "Retry" }),
                      }),
                    ],
                  })
                : null),
            (q[68] = i),
            (q[69] = L),
            (q[70] = ed),
            (q[71] = es),
            (q[72] = N))
          : (N = q[72]),
        q[73] !== x || q[74] !== C || q[75] !== N || q[76] !== w || q[77] !== _ || q[78] !== A
          ? ((O = (0, a.jsxs)("div", { className: x, children: [w, _, A, C, N] })),
            (q[73] = x),
            (q[74] = C),
            (q[75] = N),
            (q[76] = w),
            (q[77] = _),
            (q[78] = A),
            (q[79] = O))
          : (O = q[79]))
      let ey = !r
      return (
        q[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)(E.A, { id: "writingStyle.setup.showMe", defaultMessage: "Show me" })), (q[80] = T))
          : (T = q[80]),
        q[81] !== Q || q[82] !== ey
          ? ((M = (0, a.jsx)("div", {
              className: "flex shrink-0 flex-col gap-2",
              children: (0, a.jsx)(X.$, {
                type: "submit",
                size: "beaconAction",
                "aria-busy": Q,
                disabled: ey,
                loading: Q,
                children: T,
              }),
            })),
            (q[81] = Q),
            (q[82] = ey),
            (q[83] = M))
          : (M = q[83]),
        q[84] !== O || q[85] !== M || q[86] !== I || q[87] !== j
          ? ((P = (0, a.jsxs)("div", { className: I, children: [j, O, M] })),
            (q[84] = O),
            (q[85] = M),
            (q[86] = I),
            (q[87] = j),
            (q[88] = P))
          : (P = q[88]),
        q[89] !== t ||
        q[90] !== c ||
        q[91] !== d ||
        q[92] !== u ||
        q[93] !== p ||
        q[94] !== m ||
        q[95] !== f ||
        q[96] !== P ||
        q[97] !== k ||
        q[98] !== S
          ? ((R = (0, a.jsxs)(t, { as: k, size: S, variant: c, className: d, onSubmit: u, children: [p, m, f, P] })),
            (q[89] = t),
            (q[90] = c),
            (q[91] = d),
            (q[92] = u),
            (q[93] = p),
            (q[94] = m),
            (q[95] = f),
            (q[96] = P),
            (q[97] = k),
            (q[98] = S),
            (q[99] = R))
          : (R = q[99]),
        q[100] !== n || q[101] !== g || q[102] !== h || q[103] !== y || q[104] !== b || q[105] !== v || q[106] !== R
          ? ((D = (0, a.jsx)(n, { open: g, size: h, variant: y, onOpenChange: b, contentProps: v, children: R })),
            (q[100] = n),
            (q[101] = g),
            (q[102] = h),
            (q[103] = y),
            (q[104] = b),
            (q[105] = v),
            (q[106] = R),
            (q[107] = D))
          : (D = q[107]),
        D
      )
    }
    function eu(e) {
      return e.name
    }
    function ep(e) {
      return (0, a.jsx)(
        Z.R,
        {
          className: "size-5",
          alt: "",
          logoUrl: e.logoUrl,
          logoDarkUrl: e.logoDarkUrl,
          fallback: (0, a.jsx)(et.wdY, {}),
        },
        e.id,
      )
    }
    function em(e) {
      return e.name
    }
    function ef(e) {
      return "connected" === e.connection
    }
    var eg = n("SaEY")
    let eh = [
      {
        id: "plugin_connector_1p_95d39881713c8191931482a62d6edff9",
        category: "email",
        name: "Gmail",
        connector: "gmail",
      },
      {
        id: "plugin_connector_1p_6bcb5879c73c819196abc70016166099",
        category: "email",
        name: "Outlook Email",
        connector: "outlook_email",
      },
      {
        id: "plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d",
        category: "messaging",
        name: "Slack",
        connector: "slack",
      },
      {
        id: "plugin_connector_1p_eba8b52fe53881918408d4b46b957644",
        category: "messaging",
        name: "Teams",
        connector: "teams",
      },
      {
        id: "plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7",
        category: "documents",
        name: "Google Drive",
        connector: "google_drive",
      },
      {
        id: "plugin_connector_1p_dca009ae2c848191ae14df3a47c5e7fd",
        category: "documents",
        name: "SharePoint",
        connector: "sharepoint",
      },
      {
        id: "plugin_asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
        category: "documents",
        name: "Notion",
        connector: "notion",
      },
    ]
    function ey(e, t, n, a, l, i) {
      let r = n?.apps.map(({ id: e }) => (0, M.$)(e)),
        s = ex(t.id, n, i),
        o = s?.plugin ?? n?.summary,
        c = null == i ? o?.installed === !0 : null != s,
        d = l?.filter((e) => "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::")),
        p = null == n ? void 0 : eb(n.apps, l),
        m = null != n && n.apps.length > 0 && null == p,
        f = a?.filter((e) => r?.includes((0, M.$)(e.id))),
        g = r?.every((e) => f?.some((t) => (0, M.$)(t.id) === e && t.isAccessible && t.isEnabled)),
        h = "disconnected"
      return (
        null == o ||
        r?.length === 0 ||
        (0, eg.Ei)(o) ||
        "NOT_AVAILABLE" === o.installPolicy ||
        ((0, u.el)(e) && f?.some((e) => !e.isEnabled))
          ? (h = "unavailable")
          : (c && !o.enabled) || f?.some((e) => !e.isEnabled)
            ? (h = "disabled")
            : m && g
              ? (h = "connected")
              : d?.some(
                    (e) =>
                      null != p && (0, M.$)(p.id) === (0, M.$)(e.connector_id) && "REAUTH_REQUIRED" === e.auth_status,
                  )
                ? (h = "reauth")
                : c && (h = m ? "refresh" : "connect"),
        {
          ...t,
          name: n?.summary.interface?.displayName ?? t.name,
          logoUrl: n?.summary.interface?.logoUrl ?? null,
          logoDarkUrl: n?.summary.interface?.logoUrlDark ?? null,
          connection: h,
        }
      )
    }
    function eb(e, t) {
      return e.find(
        (e) =>
          !t?.some(
            (t) =>
              "HIDDEN" !== t.visibility &&
              !t.id.startsWith("implicit_link::") &&
              (t.auth_status ?? "ACTIVE") === "ACTIVE" &&
              (0, M.$)(t.connector_id) === (0, M.$)(e.id),
          ),
      )
    }
    function ex(e, t, n) {
      return n?.find(
        ({ plugin: n, canonicalAppId: a }) =>
          n.remotePluginId === e ||
          n.id === t?.summary.id ||
          (null != a && t?.apps.some(({ id: e }) => (0, M.$)(e) === (0, M.$)(a))),
      )
    }
    function ev(e) {
      let t,
        n,
        r,
        d,
        g,
        h,
        y,
        b,
        x,
        w,
        _,
        A,
        I,
        j,
        k,
        G,
        K,
        Z,
        Y,
        X,
        J,
        ee,
        et,
        en,
        ea,
        el,
        ei,
        er,
        es,
        eo,
        ec = (0, l.c)(145),
        {
          accountId: eu,
          hostId: ep,
          userId: em,
          workspaceRoots: ef,
          entryPoint: eg,
          onClose: ev,
          onContinue: eA,
          onManage: eI,
        } = e,
        ej = void 0 === eg ? "unknown" : eg,
        ek = (0, i.gh)(S.u),
        eS = (0, o.A)()
      ec[0] !== eu || ec[1] !== ep || ec[2] !== em
        ? ((t = { accountId: eu, userId: em, hostId: ep }), (ec[0] = eu), (ec[1] = ep), (ec[2] = em), (ec[3] = t))
        : (t = ec[3])
      let eC = (0, i._U)(H.K, t),
        [eN, eE] = (0, s.useState)(null),
        eO = (0, s.useRef)(null)
      ec[4] !== eu || ec[5] !== ep || ec[6] !== em
        ? ((n = { accountId: eu, userId: em, hostId: ep }), (ec[4] = eu), (ec[5] = ep), (ec[6] = em), (ec[7] = n))
        : (n = ec[7])
      let { data: eT } = (0, i._U)(H.l, n)
      ec[8] !== ep ? ((r = { hostId: ep }), (ec[8] = ep), (ec[9] = r)) : (r = ec[9])
      let { setPluginEnabled: eM } = (0, z.zQ)(r)
      ec[10] !== ep ? ((d = { hostId: ep }), (ec[10] = ep), (ec[11] = d)) : (d = ec[11])
      let { setAppEnabled: eP } = (0, T.J)(d)
      ec[12] !== ep || ec[13] !== ef
        ? ((g = { hostId: ep, roots: ef }), (ec[12] = ep), (ec[13] = ef), (ec[14] = g))
        : (g = ec[14])
      let { data: eR, error: eD, isLoading: eq, refetch: ez } = (0, U.Kj)(g),
        [e$, eF] = (0, s.useState)(null),
        [eU, eB] = (0, s.useState)(null),
        [eL, eQ] = (0, s.useState)(null),
        [eV, eG] = (0, s.useState)(null)
      ec[15] !== ep ? ((h = { hostId: ep }), (ec[15] = ep), (ec[16] = h)) : (h = ec[16])
      let { clearPendingAppConnect: eW, handleAppConnectOAuthStarted: eH, isAppConnectPending: eK } = (0, D.t)(h)
      ec[17] !== eK || ec[18] !== eL || ec[19] !== e$ || ec[20] !== eV?.sourceId
        ? ((y = e$ ?? eV?.sourceId ?? (null != eL && eK(eL.appId) ? eL.sourceId : null)),
          (ec[17] = eK),
          (ec[18] = eL),
          (ec[19] = e$),
          (ec[20] = eV?.sourceId),
          (ec[21] = y))
        : (y = ec[21])
      let eZ = y,
        eY = (0, s.useRef)(!1),
        eX = (0, s.useRef)(!0),
        eJ = (0, s.useRef)(null)
      ;(ec[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = () => (
            (eX.current = !0),
            () => {
              ;((eX.current = !1), eJ.current?.abort(), eO.current?.abort())
            }
          )),
          (b = []),
          (ec[22] = b),
          (ec[23] = x))
        : ((b = ec[22]), (x = ec[23])),
        (0, s.useEffect)(x, b))
      let [e0, e1] = (0, s.useState)(!1),
        [e2, e3] = (0, s.useState)(!1)
      ec[24] !== ep ? ((w = { hostId: ep }), (ec[24] = ep), (ec[25] = w)) : (w = ec[25])
      let {
        data: e4,
        loadError: e5,
        isLoading: e6,
        isFetching: e7,
        isHardRefetchingAppsList: e8,
        hardRefetchAppsList: e9,
      } = (0, P.Ad)(w)
      ;(ec[26] !== eu || ec[27] !== em
        ? ((_ = (0, R.dZ)({ accountId: eu, userId: em })), (ec[26] = eu), (ec[27] = em), (ec[28] = _))
        : (_ = ec[28]),
        ec[29] !== eZ ? ((A = () => null == eZ && null == eO.current), (ec[29] = eZ), (ec[30] = A)) : (A = ec[30]),
        ec[31] !== _ || ec[32] !== A
          ? ((I = { ..._, staleTime: Q.D.ONE_MINUTE, refetchOnWindowFocus: A }),
            (ec[31] = _),
            (ec[32] = A),
            (ec[33] = I))
          : (I = ec[33]))
      let { data: te, error: tt, isLoading: tn, isFetching: ta, refetch: tl } = (0, C.I)(I),
        ti = (0, u.el)(ep) ? "chatgpt" : "codex"
      if (ec[34] !== eu || ec[35] !== ti || ec[36] !== em) {
        let e
        ;(ec[38] !== eu || ec[39] !== ti
          ? ((e = async (e) => {
              let { signal: t } = e
              return Object.fromEntries(
                (
                  await Promise.all(
                    eh.map(async (e) => {
                      let { id: n } = e,
                        a = await V.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                          parameters: { path: { plugin_id: n } },
                          additionalHeaders: { ...(0, q.A)(ti), "ChatGPT-Account-Id": eu },
                          expectedErrorStatuses: [404],
                          signal: (0, F.w)(t),
                        }).catch(e_)
                      return null == a ? null : [n, a]
                    }),
                  )
                ).filter(ew),
              )
            }),
            (ec[38] = eu),
            (ec[39] = ti),
            (ec[40] = e))
          : (e = ec[40]),
          (j = (0, N.j)({
            queryKey: ["plugins", "writing-style-sources", eu, em, ti],
            queryFn: e,
            retry: !1,
            staleTime: Q.D.FIVE_MINUTES,
          })),
          (ec[34] = eu),
          (ec[35] = ti),
          (ec[36] = em),
          (ec[37] = j))
      } else j = ec[37]
      let tr = j,
        { data: ts, error: to, isLoading: tc, isFetching: td, refetch: tu } = (0, C.I)(tr)
      if (
        ec[41] !== eu ||
        ec[42] !== e7 ||
        ec[43] !== e6 ||
        ec[44] !== eU ||
        ec[45] !== e4 ||
        ec[46] !== ep ||
        ec[47] !== e2 ||
        ec[48] !== eD ||
        ec[49] !== eq ||
        ec[50] !== eR ||
        ec[51] !== e8 ||
        ec[52] !== te ||
        ec[53] !== tt ||
        ec[54] !== ta ||
        ec[55] !== tn ||
        ec[56] !== e5 ||
        ec[57] !== ek ||
        ec[58] !== ts ||
        ec[59] !== to ||
        ec[60] !== td ||
        ec[61] !== tc ||
        ec[62] !== em
      ) {
        let e, t
        ;(ec[69] !== ts
          ? ((e = (e) => {
              let { id: t } = e,
                n = ts?.[t]
              return null == n ? void 0 : (0, $.xU)(n)
            }),
            (ec[69] = ts),
            (ec[70] = e))
          : (e = ec[70]),
          (Y = eh.map(e)),
          ec[71] !== eu || ec[72] !== ek || ec[73] !== em
            ? ((t = () =>
                eX.current && ek.get(p.tT) === eu && ek.get(m.PO).userId === em && "allowed" === ek.get(f.lN).status),
              (ec[71] = eu),
              (ec[72] = ek),
              (ec[73] = em),
              (ec[74] = t))
            : (t = ec[74]),
          (G = t),
          (K = eq || e6 || tn || tc),
          (k = e2 || null != eU || null != eD || null != e5 || null != tt || null != to),
          (Z = e7 || e8 || ta || td),
          (X =
            null == eR || null == e4 || null == te || null == ts
              ? void 0
              : eh.map((e, t) => ey(ep, e, Y[t], e4, te, eR))),
          (ec[41] = eu),
          (ec[42] = e7),
          (ec[43] = e6),
          (ec[44] = eU),
          (ec[45] = e4),
          (ec[46] = ep),
          (ec[47] = e2),
          (ec[48] = eD),
          (ec[49] = eq),
          (ec[50] = eR),
          (ec[51] = e8),
          (ec[52] = te),
          (ec[53] = tt),
          (ec[54] = ta),
          (ec[55] = tn),
          (ec[56] = e5),
          (ec[57] = ek),
          (ec[58] = ts),
          (ec[59] = to),
          (ec[60] = td),
          (ec[61] = tc),
          (ec[62] = em),
          (ec[63] = k),
          (ec[64] = G),
          (ec[65] = K),
          (ec[66] = Z),
          (ec[67] = Y),
          (ec[68] = X))
      } else ((k = ec[63]), (G = ec[64]), (K = ec[65]), (Z = ec[66]), (Y = ec[67]), (X = ec[68]))
      let tp = X
      ec[75] !== e9 || ec[76] !== ep || ec[77] !== G || ec[78] !== ez || ec[79] !== tl || ec[80] !== tu
        ? ((J = async (e) => {
            let [t, n, a, l] = await Promise.all([
              e9(),
              tl({ throwOnError: !0 }),
              ez({ throwOnError: !0, cancelRefetch: !1 }),
              tu({ throwOnError: !0, cancelRefetch: !1 }),
            ])
            if (!G()) return null
            let i = eh.findIndex((t) => {
                let { id: n } = t
                return n === e
              }),
              r = null == e ? void 0 : l.data?.[e]
            return i < 0 ? null : ey(ep, eh[i], null == r ? void 0 : (0, $.xU)(r), t, n.data, a.data).connection
          }),
          (ec[75] = e9),
          (ec[76] = ep),
          (ec[77] = G),
          (ec[78] = ez),
          (ec[79] = tl),
          (ec[80] = tu),
          (ec[81] = J))
        : (J = ec[81])
      let tm = J,
        tf = eV?.app == null ? O.B : L.Z,
        tg = eT?.enabled === !0
      ;(ec[82] !== ej || ec[83] !== ek
        ? ((ee = (e) => {
            ;(eE(e),
              null != e &&
                ek
                  .get(c.T$)
                  .count("default", "write_like_me.setup_funnel", {
                    category: e,
                    entry_point: ej,
                    stage: "category_selected",
                  }))
          }),
          (ec[82] = ej),
          (ec[83] = ek),
          (ec[84] = ee))
        : (ee = ec[84]),
        ec[85] !== k
          ? ((et = k
              ? (0, a.jsx)(E.A, {
                  id: "writingStyle.apps.error",
                  defaultMessage: "Couldn't finish Writing style setup. Try again.",
                })
              : null),
            (ec[85] = k),
            (ec[86] = et))
          : (et = ec[86]))
      let th = e0 || eC.isPending,
        ty = K && null == tp
      return (
        ec[87] !== ev
          ? ((en = () => {
              ;((eX.current = !1), eJ.current?.abort(), eO.current?.abort(), ev())
            }),
            (ec[87] = ev),
            (ec[88] = en))
          : (en = ec[88]),
        ec[89] !== ej ||
        ec[90] !== eU ||
        ec[91] !== e4 ||
        ec[92] !== ep ||
        ec[93] !== eR ||
        ec[94] !== G ||
        ec[95] !== Z ||
        ec[96] !== te ||
        ec[97] !== eZ ||
        ec[98] !== Y ||
        ec[99] !== tm ||
        ec[100] !== ek ||
        ec[101] !== eP ||
        ec[102] !== eM
          ? ((ea = (e) => {
              var t
              let n, a
              if (!G() || null != eZ || Z || null != eO.current) return
              let l = eh.findIndex((t) => {
                  let { id: n } = t
                  return n === e.id
                }),
                i = Y[l],
                r = ex(e.id, i, eR),
                s = null == i ? void 0 : { ...i, summary: r?.plugin ?? i.summary }
              if (null == s || "unavailable" === e.connection || ("connected" === e.connection && eU !== e.id)) return
              ;(eJ.current?.abort(), (eJ.current = null), eB(null), eQ(null), (eY.current = !1))
              let o =
                ((t = { category: e.category, connector: eh[l]?.connector ?? "unknown", entry_point: ej }),
                (n = performance.now()),
                (a = !1),
                ek.get(c.T$).count("default", "write_like_me.connector_engagement", { ...t, outcome: "started" }),
                (e) => {
                  a ||
                    ((a = !0),
                    ek.get(c.T$).count("default", "write_like_me.connector_engagement", { ...t, outcome: e }),
                    ek
                      .get(c.T$)
                      .hist(
                        "default",
                        "write_like_me.connector_duration_ms",
                        { ...t, outcome: e },
                        performance.now() - n,
                      ))
                })
              if ("reauth" === e.connection || "connect" === e.connection) {
                let t = eb(s.apps, te)?.id,
                  n = te?.find(
                    (e) =>
                      "HIDDEN" !== e.visibility &&
                      !e.id.startsWith("implicit_link::") &&
                      "REAUTH_REQUIRED" === e.auth_status &&
                      null != t &&
                      (0, M.$)(t) === (0, M.$)(e.connector_id),
                  ),
                  a = e4?.find((e) => {
                    let { id: n } = e
                    return (0, M.$)(n) === (0, M.$)(t ?? "")
                  })
                if (null == t || ("reauth" === e.connection && null == n)) {
                  ;(o("failure"), eB(e.id))
                  return
                }
                eG({ app: a, connectorId: t, linkId: n?.id, sourceId: e.id, recordOutcome: o })
                return
              }
              ;(eF(e.id), e3(!1))
              let d = new AbortController()
              ;((eJ.current = d),
                (async () => {
                  if ("disabled" === e.connection)
                    for (let t of (null == r ||
                      r.plugin.enabled ||
                      (await eM({ pluginId: s.summary.id, pluginDisplayName: e.name, plugin: s.summary, enabled: !0 })),
                    e4 ?? [])) {
                      if (!G() || d.signal.aborted) return
                      !t.isEnabled &&
                        s.apps.some((e) => {
                          let { id: n } = e
                          return (0, M.$)(n) === (0, M.$)(t.id)
                        }) &&
                        (await eP({ appId: t.id, enabled: !0 }))
                    }
                  else if ("refresh" !== e.connection && "connected" !== e.connection) {
                    let t = await (0, W.U)(ek, (0, B.qA)(s), { hostId: ep, signal: d.signal })
                    if ("installed" !== t) {
                      G() &&
                        !d.signal.aborted &&
                        (o("failed" === t ? "failure" : "cancelled"), eB("failed" === t ? e.id : null))
                      return
                    }
                  }
                  if (G() && !d.signal.aborted) {
                    let t = await tm(e.id)
                    G() &&
                      !d.signal.aborted &&
                      ("connected" === t
                        ? o("success")
                        : "connect" === t || "reauth" === t
                          ? o("connection_required")
                          : o("failure"),
                      eB("connected" === t || "connect" === t || "reauth" === t ? null : e.id))
                  }
                })()
                  .catch(() => {
                    G() && !d.signal.aborted && (o("failure"), eB(e.id))
                  })
                  .finally(() => {
                    eJ.current === d && ((eJ.current = null), eX.current && eF(null))
                  }))
            }),
            (ec[89] = ej),
            (ec[90] = eU),
            (ec[91] = e4),
            (ec[92] = ep),
            (ec[93] = eR),
            (ec[94] = G),
            (ec[95] = Z),
            (ec[96] = te),
            (ec[97] = eZ),
            (ec[98] = Y),
            (ec[99] = tm),
            (ec[100] = ek),
            (ec[101] = eP),
            (ec[102] = eM),
            (ec[103] = ea))
          : (ea = ec[103]),
        ec[104] !== eu ||
        ec[105] !== eN ||
        ec[106] !== ej ||
        ec[107] !== ep ||
        ec[108] !== eS ||
        ec[109] !== G ||
        ec[110] !== eA ||
        ec[111] !== eZ ||
        ec[112] !== eC ||
        ec[113] !== ek ||
        ec[114] !== em
          ? ((el = () => {
              if (
                !G() ||
                null != eO.current ||
                null != eZ ||
                ek.get(H.K, { accountId: eu, userId: em, hostId: ep }).isPending
              )
                return
              let e = new AbortController()
              ;((eO.current = e),
                ek
                  .get(c.T$)
                  .count("default", "write_like_me.setup_funnel", {
                    category: eN ?? "not_applicable",
                    entry_point: ej,
                    stage: "use_clicked",
                  }),
                e1(!0),
                e3(!1),
                (async () => {
                  let t = await eC.mutateAsync({
                    enabled: !0,
                    prepareForChat: !0,
                    prepareForChatSignal: e.signal,
                    entryPoint: ej,
                    hostId: ep,
                    signal: new AbortController().signal,
                  })
                  "cancelled" !== t.status &&
                    G() &&
                    ("failed" === t.status ? e3(!0) : G() && !e.signal.aborted && (await eA((0, v.o)(eS), e.signal)))
                })()
                  .catch(() => {
                    G() && e3(!0)
                  })
                  .finally(() => {
                    ;((eO.current = null), eX.current && e1(!1))
                  }))
            }),
            (ec[104] = eu),
            (ec[105] = eN),
            (ec[106] = ej),
            (ec[107] = ep),
            (ec[108] = eS),
            (ec[109] = G),
            (ec[110] = eA),
            (ec[111] = eZ),
            (ec[112] = eC),
            (ec[113] = ek),
            (ec[114] = em),
            (ec[115] = el))
          : (el = ec[115]),
        ec[116] !== G || ec[117] !== tm
          ? ((ei = () => {
              tm()
                .then(() => {
                  G() && (e3(!1), eB(null))
                })
                .catch(() => {
                  G() && e3(!0)
                })
            }),
            (ec[116] = G),
            (ec[117] = tm),
            (ec[118] = ei))
          : (ei = ec[118]),
        ec[119] !== tp ||
        ec[120] !== eN ||
        ec[121] !== Z ||
        ec[122] !== eI ||
        ec[123] !== eZ ||
        ec[124] !== tg ||
        ec[125] !== ee ||
        ec[126] !== et ||
        ec[127] !== th ||
        ec[128] !== ty ||
        ec[129] !== en ||
        ec[130] !== ea ||
        ec[131] !== el ||
        ec[132] !== ei
          ? ((er = (0, a.jsx)(ed, {
              apps: tp,
              enabled: tg,
              onManage: eI,
              category: eN,
              onCategoryChange: ee,
              error: et,
              isContinuing: th,
              isLoading: ty,
              isRefreshing: Z,
              pendingAppId: eZ,
              onClose: en,
              onConnect: ea,
              onContinue: el,
              onRetry: ei,
            })),
            (ec[119] = tp),
            (ec[120] = eN),
            (ec[121] = Z),
            (ec[122] = eI),
            (ec[123] = eZ),
            (ec[124] = tg),
            (ec[125] = ee),
            (ec[126] = et),
            (ec[127] = th),
            (ec[128] = ty),
            (ec[129] = en),
            (ec[130] = ea),
            (ec[131] = el),
            (ec[132] = ei),
            (ec[133] = er))
          : (er = ec[133]),
        ec[134] !== tf ||
        ec[135] !== eW ||
        ec[136] !== eH ||
        ec[137] !== ep ||
        ec[138] !== G ||
        ec[139] !== eV ||
        ec[140] !== tm
          ? ((es =
              null != eV
                ? (0, a.jsx)(tf, {
                    oauthReferrer: "writing_style_setup",
                    app: eV.app ?? null,
                    connectorId: eV.connectorId,
                    hostId: ep,
                    isReconnecting: eV?.linkId != null,
                    reauthLinkId: eV?.linkId,
                    beforeConnect: async () => G(),
                    onOpenChange: (e) => {
                      e || (eY.current || eV.recordOutcome("cancelled"), eG(null))
                    },
                    onExternalConnectStarted: () => eV.recordOutcome("connection_required"),
                    onOAuthStarted: (e) => {
                      eV.recordOutcome("connection_required")
                      let t = eH(e)
                      if (null != eV && null != t) {
                        let n = new AbortController()
                        ;((eJ.current = n),
                          n.signal.addEventListener("abort", () => eW({ oauthState: t }), { once: !0 }),
                          eQ({ sourceId: eV.sourceId, appId: e.app.id, oauthState: t }))
                      }
                    },
                    onConnectFailed: () => {
                      G() && (eV.recordOutcome("failure"), eB(eV?.sourceId ?? null))
                    },
                    onConnected: async () => {
                      if (((eY.current = !0), G()))
                        try {
                          let e = await tm(eV?.sourceId)
                          G() &&
                            (eV.recordOutcome("connected" === e ? "success" : "connection_required"),
                            eB("connected" === e ? null : (eV?.sourceId ?? null)))
                        } catch {
                          G() && (eV.recordOutcome("failure"), eB(eV?.sourceId ?? null))
                        }
                    },
                  })
                : null),
            (ec[134] = tf),
            (ec[135] = eW),
            (ec[136] = eH),
            (ec[137] = ep),
            (ec[138] = G),
            (ec[139] = eV),
            (ec[140] = tm),
            (ec[141] = es))
          : (es = ec[141]),
        ec[142] !== er || ec[143] !== es
          ? ((eo = (0, a.jsxs)(a.Fragment, { children: [er, es] })), (ec[142] = er), (ec[143] = es), (ec[144] = eo))
          : (eo = ec[144]),
        eo
      )
    }
    function ew(e) {
      return null != e
    }
    function e_(e) {
      if (e instanceof G.FetchError && 404 === e.status) return null
      throw e
    }
    function eA(e) {
      let t,
        n,
        C,
        N,
        E,
        O,
        T,
        M,
        P,
        R,
        D = (0, l.c)(50),
        { accountId: q, userId: z, hostId: $, entryPoint: F, onClose: U, workspaceRoots: B, project: L } = e,
        Q = void 0 === F ? "unknown" : F,
        V = (0, i.gh)(S.u),
        G = (0, o.A)(),
        { userId: W } = (0, g.As)(),
        H = (0, i.Ul)(p.tT),
        K = (0, i.Ul)(f.lN),
        Z = (0, s.useRef)(null),
        Y = (0, s.useRef)(!1)
      D[0] !== Q || D[1] !== V
        ? ((t = () => {
            null == Z.current &&
              ((Z.current = performance.now()),
              V.get(c.T$).count("default", "write_like_me.setup_funnel", {
                category: "not_applicable",
                entry_point: Q,
                stage: "shown",
              }))
          }),
          (D[0] = Q),
          (D[1] = V),
          (D[2] = t))
        : (t = D[2])
      let X = (0, s.useEffectEvent)(t)
      D[3] !== Q || D[4] !== V
        ? ((n = (e) => {
            Y.current ||
              ((Y.current = !0),
              V.get(c.T$).count("default", "write_like_me.setup_funnel", {
                category: "not_applicable",
                entry_point: Q,
                stage: e,
              }),
              V.get(c.T$).hist(
                "default",
                "write_like_me.setup_duration_ms",
                { entry_point: Q, outcome: e },
                null == Z.current ? 0 : performance.now() - Z.current,
              ))
          }),
          (D[3] = Q),
          (D[4] = V),
          (D[5] = n))
        : (n = D[5])
      let J = n
      D[6] !== V
        ? ((C = () => {
            ;(0, A.Oo)(V, eA)
          }),
          (D[6] = V),
          (D[7] = C))
        : (C = D[7])
      let ee = (0, s.useEffectEvent)(C)
      if (
        (D[8] !== q || D[9] !== ee || D[10] !== H || D[11] !== W || D[12] !== X || D[13] !== z || D[14] !== K.status
          ? ((N = () => {
              H !== q || W !== z || "allowed" !== K.status ? ee() : X()
            }),
            (D[8] = q),
            (D[9] = ee),
            (D[10] = H),
            (D[11] = W),
            (D[12] = X),
            (D[13] = z),
            (D[14] = K.status),
            (D[15] = N))
          : (N = D[15]),
        D[16] !== q || D[17] !== H || D[18] !== W || D[19] !== z || D[20] !== K.status
          ? ((E = [H, W, q, z, K.status]),
            (D[16] = q),
            (D[17] = H),
            (D[18] = W),
            (D[19] = z),
            (D[20] = K.status),
            (D[21] = E))
          : (E = D[21]),
        (0, s.useEffect)(N, E),
        H !== q || W !== z || "allowed" !== K.status)
      )
        return null
      let et = `${q}:${z}:${$}`
      return (
        D[22] !== B ? ((O = B ?? []), (D[22] = B), (D[23] = O)) : (O = D[23]),
        D[24] !== U || D[25] !== J
          ? ((T = () => {
              ;(J("dismissed"), U())
            }),
            (D[24] = U),
            (D[25] = J),
            (D[26] = T))
          : (T = D[26]),
        D[27] !== U || D[28] !== J || D[29] !== V
          ? ((M = () => {
              ;(J("dismissed"), U(), V.get(d.gM).navigate("/settings/personalization"))
            }),
            (D[27] = U),
            (D[28] = J),
            (D[29] = V),
            (D[30] = M))
          : (M = D[30]),
        D[31] !== q ||
        D[32] !== $ ||
        D[33] !== G ||
        D[34] !== U ||
        D[35] !== L ||
        D[36] !== J ||
        D[37] !== V ||
        D[38] !== z
          ? ((P = async (e, t) => {
              let n = () =>
                !t.aborted && V.get(p.tT) === q && V.get(m.PO).userId === z && "allowed" === V.get(f.lN).status
              if (!n()) return
              if ((0, u.el)($)) {
                let a = await V.query.getOrFetch(h.av)
                if (!n()) return
                let l = (0, v.Y)(a),
                  i = (0, y.co)(),
                  r = V.get(d.gM).prepareNavigation((0, x.mv)(i))
                if (null == r || (await r(), !n())) return
                let s = await (0, b.submitChatGPTCompletion)(V, {
                  conversationId: i,
                  conversationOrigin: "tpp",
                  prompt: e,
                  model: l.slug,
                  thinkingEffort: l.thinkingEffort,
                  requireDispatchAcceptance: !0,
                  startupSignal: t,
                  isSubmissionCurrent: n,
                })
                if (!n()) return
                if (null == s) throw Error("Writing style sample was not accepted")
                ;(J("completed"), U())
                return
              }
              let a = $ === r.iwv
              if (a && !V.get(w.Hn)) throw Error("Writing style cloud execution is unavailable")
              a || "local" === $ || L?.type === "remote"
                ? (0, j.startNewConversation)(V, {
                    activeProject: a ? null : (0, k.QO)(L ?? null),
                    codexAppMode: a ? "codex" : void 0,
                    prefillPrompt: e,
                    prefillComposerMode: "local",
                    prefillCloudThreadPrototype: a,
                    startInSidebar: !0,
                    onNavigate: () => {
                      ;((0, _.Rm)(V, "work"), J("completed"), U())
                    },
                  })
                : V.get(I.Id).danger(
                    G.formatMessage({
                      id: "writingStyle.remoteProjectRequired",
                      defaultMessage:
                        "Close this dialog and select a project on the remote host to start Writing style",
                    }),
                    { errorAnalytics: { toastId: "writingStyle.remoteProjectRequired" } },
                  )
            }),
            (D[31] = q),
            (D[32] = $),
            (D[33] = G),
            (D[34] = U),
            (D[35] = L),
            (D[36] = J),
            (D[37] = V),
            (D[38] = z),
            (D[39] = P))
          : (P = D[39]),
        D[40] !== q ||
        D[41] !== Q ||
        D[42] !== $ ||
        D[43] !== M ||
        D[44] !== P ||
        D[45] !== et ||
        D[46] !== O ||
        D[47] !== T ||
        D[48] !== z
          ? ((R = (0, a.jsx)(
              ev,
              {
                accountId: q,
                hostId: $,
                entryPoint: Q,
                userId: z,
                workspaceRoots: O,
                onClose: T,
                onManage: M,
                onContinue: P,
              },
              et,
            )),
            (D[40] = q),
            (D[41] = Q),
            (D[42] = $),
            (D[43] = M),
            (D[44] = P),
            (D[45] = et),
            (D[46] = O),
            (D[47] = T),
            (D[48] = z),
            (D[49] = R))
          : (R = D[49]),
        R
      )
    }
  },
  z7pR(e, t, n) {
    var a = n("loz7"),
      l = n("Yewb")
    n.d(
      t,
      {},
      {
        U: function (e, t, { hostId: n, signal: i, appConnectOptions: r, suppressSuccessToast: s }) {
          return new Promise((o) => {
            let c = null,
              d = !1,
              u = (e) => {
                d || ((d = !0), i.removeEventListener("abort", p), o(e))
              },
              p = () => {
                let t = e.get(a.Tx)
                ;(null != c && "closed" !== t.kind && t.requestId === c && e.set(a.Tx, (0, a.Fi)(t)), u("cancelled"))
              }
            if ((i.addEventListener("abort", p, { once: !0 }), i.aborted)) return void p()
            if (
              !(0, l.installPlugin)(e, t, {
                hostId: n,
                appConnectOptions: r,
                suppressSuccessToast: s,
                onSuccess: () => u("installed"),
                onCancel: () => u("cancelled"),
                onError: () => u("failed"),
              })
            )
              return void u("failed")
            let m = e.get(a.Tx)
            c = "closed" === m.kind ? null : (m.requestId ?? null)
          })
        },
      },
    )
  },
  hUKi(e, t, n) {
    var a = n("qmMi"),
      l = n("DBCl"),
      i = n("PFjh"),
      r = n("pDRe"),
      s = n("OiCI"),
      o = n("SPnB"),
      c = n("eFn4"),
      d = n("WzdM"),
      u = n("ugfi"),
      p = n("jShI"),
      m = n("cLdu"),
      f = n("ueue"),
      g = n("sLlu"),
      h = n("OWtl"),
      y = n("rvFo"),
      b = n("kK7d"),
      x = n("rTZC"),
      v = n("z7pR")
    let w = (0, a.vU)(h.u, (e, { scope: t, get: n }) => {
        var a
        return {
          queryKey: ((a = e), [...f.qw, "writing-style-preference", x.b, a.accountId, a.userId, a.hostId]),
          queryFn: ({ signal: n }) =>
            (async function (e, t, n) {
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let a = AbortSignal.any([n, AbortSignal.timeout(3e4)]),
                [{ plugin_id: l }, i] = await Promise.all([
                  b.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                    parameters: { path: { app_id: x.b } },
                    additionalHeaders: (0, d.A)((0, r.el)(t.hostId) ? "chatgpt" : "codex"),
                    signal: a,
                  }),
                  (0, m.yf)(e, {
                    productContext: (0, r.el)(t.hostId) ? "chatgpt" : "codex",
                    surface: "settings",
                    signal: a,
                  }),
                ])
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let s = i.find((e) => e.plugin.remotePluginId === l) ?? i.find((e) => e.canonicalAppId === x.b),
                o =
                  s?.servicePlugin ??
                  (null == l
                    ? null
                    : await b.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                        parameters: { path: { plugin_id: l } },
                        additionalHeaders: (0, d.A)((0, r.el)(t.hostId) ? "chatgpt" : "codex"),
                        signal: a,
                      }))
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              return {
                plugin: o,
                installed: null != s,
                enabled: s?.plugin.enabled === !0,
                canInstall:
                  o?.id === l &&
                  o.canonical_app_id === x.b &&
                  "ENABLED" === o.status &&
                  "NOT_AVAILABLE" !== o.installation_policy,
              }
            })(t, e, n),
          enabled: n(s.tT) === e.accountId && n(o.PO).userId === e.userId && "allowed" === n(c.lN).status,
          retry: !1,
          staleTime: y.D.ONE_MINUTE,
        }
      }),
      _ = (0, a.c4)(
        h.u,
        (e, { scope: t }) => ({
          mutationKey: ["writing-style-preference", e.accountId, e.userId],
          mutationFn: async ({ entryPoint: a = "unknown", hostId: s, ...o }) => {
            let c = performance.now(),
              f = { enabled: String(o.enabled), entry_point: a }
            t.get(i.T$).count("default", "write_like_me.preference_change", { ...f, outcome: "started" })
            let h = await (async function (
                e,
                t,
                { enabled: a, signal: i, prepareForChat: s = !1, prepareForChatSignal: o },
              ) {
                let c = () => !i.aborted && A(e, t)
                if (!c()) return { status: "cancelled" }
                try {
                  let f = e.query.getData(w, t) ?? (await e.query.getOrFetch(w, t))
                  if (!c()) return { status: "cancelled" }
                  if ((null != f.plugin && f.plugin.canonical_app_id !== x.b) || (a && !f.canInstall))
                    return { status: "failed" }
                  if (a && !f.installed && null != f.plugin) {
                    let n = await (0, v.U)(
                      e,
                      {
                        displayName: f.plugin.release.display_name,
                        remotePluginId: f.plugin.id,
                        remoteMarketplaceName: l.xiH,
                      },
                      {
                        hostId: t.hostId,
                        signal: i,
                        suppressSuccessToast: !0,
                        appConnectOptions: { connectorId: x.b, productSku: (0, r.el)(t.hostId) ? "TPP" : "CODEX" },
                      },
                    )
                    if (!c() || "cancelled" === n) return { status: "cancelled" }
                    if ("failed" === n) return { status: "failed" }
                  } else if (!a && f.installed && null != f.plugin) {
                    let n = (0, m.YU)(f.plugin)
                    await (0, u.cu)({
                      scope: e,
                      hostId: t.hostId,
                      queryClient: e.queryClient,
                      marketplaceName: n.marketplaceName,
                      pluginId: n.plugin.id,
                      pluginName: n.plugin.name,
                      requestPluginId: f.plugin.id,
                      signal: i,
                    })
                  } else {
                    if (a && !f.enabled && null != f.plugin)
                      try {
                        await b.CodexRequest.safePost("/ps/plugins/{plugin_id}/enable", {
                          parameters: { path: { plugin_id: f.plugin.id } },
                          additionalHeaders: (0, d.A)((0, r.el)(t.hostId) ? "chatgpt" : "codex"),
                        })
                      } finally {
                        ;(0, u.lA)((t) => (0, g.y)(e.queryClient, t))
                      }
                    if (!c()) return { status: "cancelled" }
                    ;(0, m.hE)(t.hostId) ||
                      (a && s && f.enabled) ||
                      (await (0, p.T)({ scope: e, hostId: t.hostId, queryClient: e.queryClient }))
                  }
                  if (!c()) return { status: "cancelled" }
                  await e.query.invalidate(w, t, { refetchType: "none" })
                  let h = await e.query.fetch(w, t)
                  if (!c()) return { status: "cancelled" }
                  if (!(a ? h.enabled && h.plugin?.id === f.plugin?.id : !h.installed)) return { status: "failed" }
                  if (a && s && !o?.aborted && null != h.plugin) {
                    let { prepareWritingStyleForChat: a } = await n.e(842455).then(n.bind(n, "Xxi0")),
                      l = o ?? i,
                      r = await a(e, t, h.plugin, l, () => c() && !l.aborted, f.installed)
                    if ("ready" !== r) return { status: r }
                  }
                  return c() ? { status: "saved", enabled: a } : { status: "cancelled" }
                } catch {
                  return { status: c() ? "failed" : "cancelled" }
                }
              })(t, { ...e, hostId: s }, o),
              y = { saved: "success", cancelled: "aborted", failed: "failure" }[h.status]
            return (
              t.get(i.T$).count("default", "write_like_me.preference_change", { ...f, outcome: y }),
              t
                .get(i.T$)
                .hist(
                  "default",
                  "write_like_me.preference_change_duration_ms",
                  { ...f, outcome: y },
                  performance.now() - c,
                ),
              h
            )
          },
        }),
        { excludeFieldsFromKey: ["hostId"] },
      )
    function A(e, t) {
      return e.get(s.tT) === t.accountId && e.get(o.PO).userId === t.userId && "allowed" === e.get(c.lN).status
    }
    n.d(t, {}, { K: _, l: w })
  },
  rTZC(e, t, n) {
    n.d(t, {}, { b: "connector_openai_write_like_me" })
  },
  ecE5(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("zd8w"),
      r = n("oyxz"),
      s = n("lmaZ"),
      o = n("cZk2")
    let c = (0, n("Bbed")._)(async () => (await n.e(270877).then(n.bind(n, "WAVn"))).AppConnectModal, {
      suspendToParent: !0,
      errorFallback: (e) => (0, a.jsx)(d, { ...e, failed: !0 }),
    })
    function d(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        m = (0, l.c)(18),
        { app: f, connectorId: g, onOpenChange: h, onUserDismissed: y, onPreloadFailed: b, failed: x, embedded: v } = e,
        w = void 0 !== x && x,
        _ = (0, i.useRef)(!1),
        A = null != f || null != g
      return (
        m[0] !== w || m[1] !== b || m[2] !== A
          ? ((t = () => {
              A && w && null != b && !_.current && ((_.current = !0), b())
            }),
            (n = [w, b, A]),
            (m[0] = w),
            (m[1] = b),
            (m[2] = A),
            (m[3] = t),
            (m[4] = n))
          : ((t = m[3]), (n = m[4])),
        (0, i.useEffect)(t, n),
        m[5] !== h || m[6] !== y
          ? ((c = (e) => {
              ;(e || y?.(), h(e))
            }),
            (m[5] = h),
            (m[6] = y),
            (m[7] = c))
          : (c = m[7]),
        m[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(r.A, {
              id: "appConnectModal.loadError",
              defaultMessage: "Couldn\u2019t open app connection",
            })),
            (m[8] = d))
          : (d = m[8]),
        m[9] !== v || m[10] !== w
          ? ((u = w ? null : (0, a.jsx)(s.$, { embedded: v })), (m[9] = v), (m[10] = w), (m[11] = u))
          : (u = m[11]),
        m[12] !== v || m[13] !== w || m[14] !== A || m[15] !== c || m[16] !== u
          ? ((p = (0, a.jsx)(o.k, {
              open: A,
              size: "setup",
              onOpenChange: c,
              failed: w,
              embedded: v,
              title: d,
              children: u,
            })),
            (m[12] = v),
            (m[13] = w),
            (m[14] = A),
            (m[15] = c),
            (m[16] = u),
            (m[17] = p))
          : (p = m[17]),
        p
      )
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n = (0, l.c)(3),
            r = null != e.app || null != e.connectorId,
            [s, o] = (0, i.useState)(r)
          return (
            r && !s && o(!0),
            n[0] !== s || n[1] !== e
              ? ((t = s
                  ? (0, a.jsx)(i.Suspense, {
                      fallback: !1 === e.showLoadingDialog ? null : (0, a.jsx)(d, { ...e }),
                      children: (0, a.jsx)(c, { ...e }),
                    })
                  : null),
                (n[0] = s),
                (n[1] = e),
                (n[2] = t))
              : (t = n[2]),
            t
          )
        },
        s: function () {
          return c.prefetch()
        },
      },
    )
  },
  bZug(e, t, n) {
    n.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      i = n("on57"),
      r = n("zd8w"),
      s = n("Ywss"),
      o = n("bVeK")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        n,
        r,
        s,
        o,
        c,
        d,
        u,
        p = (0, l.c)(29),
        {
          label: m,
          labelId: f,
          labelSizing: g,
          description: h,
          descriptionId: y,
          icon: b,
          labelWeight: x,
          variant: v,
          verticalAlignment: w,
        } = e,
        _ = "start" === w ? "items-start" : "items-center",
        A = "grow" === (void 0 === g ? "grow" : g) && "flex-1"
      ;(p[0] !== _ || p[1] !== A
        ? ((t = (0, i.A)("flex min-w-0 gap-3", _, A)), (p[0] = _), (p[1] = A), (p[2] = t))
        : (t = p[2]),
        p[3] !== b
          ? ((n = null != b ? (0, a.jsx)("span", { className: "flex shrink-0", children: b }) : null),
            (p[3] = b),
            (p[4] = n))
          : (n = p[4]))
      let I = h && "recommendation" !== v && "[[data-settings-panel]_&]:gap-1 [[data-settings-panel]_&]:py-0.5",
        j = "featured" === v && "text-base [[data-settings-standard-rows]_&]:text-sm",
        k = "recommendation" === v && "text-[13px] leading-[18.571429px]",
        S = "featured" !== v && "recommendation" !== v && "text-sm"
      p[5] !== I || p[6] !== j || p[7] !== k || p[8] !== S
        ? ((r = (0, i.A)(
            "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[density=compact]/settings:leading-4.5",
            I,
            j,
            k,
            S,
          )),
          (p[5] = I),
          (p[6] = j),
          (p[7] = k),
          (p[8] = S),
          (p[9] = r))
        : (r = p[9])
      let C = ("medium" === x || (null == x && "nested" !== v)) && "font-medium",
        N = null == x && "nested" === v && h && "[[data-settings-panel]_&]:font-medium"
      return (
        p[10] !== C || p[11] !== N
          ? ((s = (0, i.A)("min-w-0 break-words text-default", C, N)), (p[10] = C), (p[11] = N), (p[12] = s))
          : (s = p[12]),
        p[13] !== m || p[14] !== f || p[15] !== s
          ? ((o = (0, a.jsx)("div", { id: f, className: s, children: m })),
            (p[13] = m),
            (p[14] = f),
            (p[15] = s),
            (p[16] = o))
          : (o = p[16]),
        p[17] !== h || p[18] !== y || p[19] !== v
          ? ((c = h
              ? (0, a.jsx)("div", {
                  id: y,
                  className: (0, i.A)(
                    "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                    "recommendation" !== v &&
                      "[[data-settings-panel]_&]:[font-size:inherit] [[data-settings-panel]_&]:[line-height:inherit] [[data-settings-panel]_&]:font-normal",
                  ),
                  children: h,
                })
              : null),
            (p[17] = h),
            (p[18] = y),
            (p[19] = v),
            (p[20] = c))
          : (c = p[20]),
        p[21] !== r || p[22] !== o || p[23] !== c
          ? ((d = (0, a.jsxs)("div", { className: r, children: [o, c] })),
            (p[21] = r),
            (p[22] = o),
            (p[23] = c),
            (p[24] = d))
          : (d = p[24]),
        p[25] !== d || p[26] !== t || p[27] !== n
          ? ((u = (0, a.jsxs)("div", { className: t, children: [n, d] })),
            (p[25] = d),
            (p[26] = t),
            (p[27] = n),
            (p[28] = u))
          : (u = p[28]),
        u
      )
    }
    n.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            n,
            r,
            s,
            o,
            c,
            d = (0, l.c)(18),
            { children: u, compactLabelInset: p, label: m, valueAlignment: f, variant: g } = e,
            h = void 0 === p || p,
            y = void 0 === f ? "start" : f,
            b = void 0 === g ? "default" : g,
            x =
              "compact" === b
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== x ? ((t = (0, i.A)("grid items-center", x)), (d[0] = x), (d[1] = t)) : (t = d[1]),
            d[2] !== h || d[3] !== b
              ? ((n = (0, i.A)(
                  "min-w-0",
                  "compact" === b
                    ? (0, i.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = h),
                (d[3] = b),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== m || d[6] !== n
              ? ((r = (0, a.jsx)("div", { className: n, children: m })), (d[5] = m), (d[6] = n), (d[7] = r))
              : (r = d[7]),
            d[8] !== y || d[9] !== b
              ? ((s = (0, i.A)(
                  "min-w-0",
                  "compact" === b
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, i.A)("break-words whitespace-normal text-sm text-default", "end" === y && "text-end"),
                )),
                (d[8] = y),
                (d[9] = b),
                (d[10] = s))
              : (s = d[10]),
            d[11] !== u || d[12] !== s
              ? ((o = (0, a.jsx)("div", { className: s, children: u })), (d[11] = u), (d[12] = s), (d[13] = o))
              : (o = d[13]),
            d[14] !== t || d[15] !== r || d[16] !== o
              ? ((c = (0, a.jsxs)("div", { className: t, children: [r, o] })),
                (d[14] = t),
                (d[15] = r),
                (d[16] = o),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            n,
            s,
            o,
            c = (0, l.c)(37),
            {
              label: u,
              labelSizing: p,
              labelWeight: m,
              layout: f,
              description: g,
              control: h,
              controlSizing: y,
              icon: b,
              className: x,
              id: v,
              inset: w,
              size: _,
              searchAnchor: A,
              variant: I,
              verticalAlignment: j,
            } = e,
            k = void 0 === p ? "grow" : p,
            S = void 0 === f ? "default" : f,
            C = void 0 === y ? "minimum" : y,
            N = void 0 === w || w,
            E = void 0 === _ ? "default" : _,
            O = void 0 === I ? "default" : I,
            T = void 0 === j ? "center" : j,
            M = (0, r.useId)(),
            P = null != u || null != g || null != b,
            R = "function" == typeof h,
            D = R && null != u ? `${M}-label` : void 0,
            q = R && g ? `${M}-description` : void 0,
            z = A ?? v,
            $ = null == A ? void 0 : -1,
            F = N && ("split" !== S || "default" !== O) && "px-[var(--settings-row-padding-inline,--spacing(4))]",
            U =
              N &&
              "nested" === O &&
              "group-data-[density=form]/settings:px-[var(--settings-row-padding-inline,--spacing(5))]",
            B =
              "stacked" === O &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            L =
              "nested" === O &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            Q = "stacked" !== O && ("start" === T ? "items-start" : "items-center"),
            V = "split" === S && "default" === O && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== x ||
            c[1] !== S ||
            c[2] !== E ||
            c[3] !== F ||
            c[4] !== U ||
            c[5] !== B ||
            c[6] !== L ||
            c[7] !== Q ||
            c[8] !== V ||
            c[9] !== O
              ? ((t = (0, i.A)(
                  "@container/settings-row",
                  F,
                  U,
                  B,
                  L,
                  Q,
                  V,
                  "default" === S &&
                    ("default" === O || "featured" === O || "recommendation" === O) &&
                    (0, i.A)(
                      "flex justify-between",
                      "featured" === O &&
                        (0, i.A)(
                          "gap-6",
                          "compact" === E
                            ? "min-h-11 py-2 [[data-settings-standard-rows]_&]:min-h-0 [[data-settings-standard-rows]_&]:gap-4"
                            : "py-4 [[data-settings-standard-rows]_&]:py-3",
                        ),
                      "featured" !== O && ("compact" === E ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === O && "dark:bg-secondary-ghost-hover",
                  x,
                )),
                (c[0] = x),
                (c[1] = S),
                (c[2] = E),
                (c[3] = F),
                (c[4] = U),
                (c[5] = B),
                (c[6] = L),
                (c[7] = Q),
                (c[8] = V),
                (c[9] = O),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== g ||
            c[12] !== q ||
            c[13] !== P ||
            c[14] !== b ||
            c[15] !== u ||
            c[16] !== D ||
            c[17] !== k ||
            c[18] !== m ||
            c[19] !== O ||
            c[20] !== T
              ? ((n = P
                  ? (0, a.jsx)(d, {
                      label: u,
                      labelId: D,
                      labelSizing: k,
                      labelWeight: m,
                      description: g,
                      descriptionId: q,
                      icon: b,
                      variant: O,
                      verticalAlignment: T,
                    })
                  : null),
                (c[11] = g),
                (c[12] = q),
                (c[13] = P),
                (c[14] = b),
                (c[15] = u),
                (c[16] = D),
                (c[17] = k),
                (c[18] = m),
                (c[19] = O),
                (c[20] = T),
                (c[21] = n))
              : (n = c[21]),
            c[22] !== h || c[23] !== C || c[24] !== q || c[25] !== R || c[26] !== D || c[27] !== S || c[28] !== O
              ? ((s =
                  null != h && !1 !== h
                    ? (0, a.jsx)("div", {
                        className: (0, i.A)(
                          "stacked" === O && "w-full",
                          "nested" === O && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === O &&
                            (0, i.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === C && "w-full",
                            ),
                          "default" === S &&
                            ("default" === O || "featured" === O || "recommendation" === O) &&
                            (0, i.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === C ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === C && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: R ? h({ "aria-labelledby": D, "aria-describedby": q }) : h,
                      })
                    : null),
                (c[22] = h),
                (c[23] = C),
                (c[24] = q),
                (c[25] = R),
                (c[26] = D),
                (c[27] = S),
                (c[28] = O),
                (c[29] = s))
              : (s = c[29]),
            c[30] !== A || c[31] !== t || c[32] !== n || c[33] !== s || c[34] !== z || c[35] !== $
              ? ((o = (0, a.jsxs)("div", {
                  id: z,
                  "data-settings-search-entry": A,
                  tabIndex: $,
                  className: t,
                  children: [n, s],
                })),
                (c[30] = A),
                (c[31] = t),
                (c[32] = n),
                (c[33] = s),
                (c[34] = z),
                (c[35] = $),
                (c[36] = o))
              : (o = c[36]),
            o
          )
        },
        jj: function (e) {
          let t,
            n = (0, l.c)(2),
            { children: i } = e
          return (
            n[0] !== i
              ? ((t = (0, a.jsx)("span", { className: "text-xs text-secondary", children: i })), (n[0] = i), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            n,
            r,
            o,
            u,
            p,
            m,
            f,
            g,
            h,
            y,
            b,
            x,
            v,
            w,
            _,
            A,
            I,
            j,
            k,
            S,
            C,
            N,
            E,
            O,
            T,
            M = (0, l.c)(64)
          M[0] !== e
            ? (({
                actions: t,
                actionsPlacement: b,
                ariaControls: n,
                ariaExpanded: r,
                ariaLabel: o,
                className: u,
                description: p,
                disabled: m,
                edgeRounding: x,
                highlightOnFocus: v,
                icon: f,
                label: h,
                searchAnchor: y,
                size: w,
                trailing: I,
                variant: _,
                wrapActions: A,
                ...g
              } = e),
              (M[0] = e),
              (M[1] = t),
              (M[2] = n),
              (M[3] = r),
              (M[4] = o),
              (M[5] = u),
              (M[6] = p),
              (M[7] = m),
              (M[8] = f),
              (M[9] = g),
              (M[10] = h),
              (M[11] = y),
              (M[12] = b),
              (M[13] = x),
              (M[14] = v),
              (M[15] = w),
              (M[16] = _),
              (M[17] = A),
              (M[18] = I))
            : ((t = M[1]),
              (n = M[2]),
              (r = M[3]),
              (o = M[4]),
              (u = M[5]),
              (p = M[6]),
              (m = M[7]),
              (f = M[8]),
              (g = M[9]),
              (h = M[10]),
              (y = M[11]),
              (b = M[12]),
              (x = M[13]),
              (v = M[14]),
              (w = M[15]),
              (_ = M[16]),
              (A = M[17]),
              (I = M[18]))
          let P = void 0 === x ? "row" : x,
            R = void 0 === v || v,
            D = void 0 === w ? "default" : w,
            q = void 0 === _ ? "default" : _,
            z = "before-trailing" === (void 0 === b ? "end" : b) && !m && null != t && null != I,
            $ = void 0 !== A && A && !m && null != t && !z,
            F = $ && "basis-64",
            U = z ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          M[19] !== u || M[20] !== z || M[21] !== D || M[22] !== F || M[23] !== U || M[24] !== q
            ? ((j = (0, i.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                F,
                U,
                "empty" === q
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, i.A)(
                      "px-[var(--settings-row-padding-inline,--spacing(4))] text-start",
                      "nested" === q && "min-h-10 py-0.5",
                      "nested" !== q && ("large" === D ? "py-4" : "py-3"),
                      z && "gap-2",
                      !z && ("nested" === q ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (M[19] = u),
              (M[20] = z),
              (M[21] = D),
              (M[22] = F),
              (M[23] = U),
              (M[24] = q),
              (M[25] = j))
            : (j = M[25])
          let B = j
          ;(M[26] !== p || M[27] !== f || M[28] !== h || M[29] !== q
            ? ((k =
                "empty" === q
                  ? (0, a.jsxs)(a.Fragment, { children: [f, h] })
                  : (0, a.jsx)(d, { label: h, description: p, icon: f, variant: q, verticalAlignment: "center" })),
              (M[26] = p),
              (M[27] = f),
              (M[28] = h),
              (M[29] = q),
              (M[30] = k))
            : (k = M[30]),
            M[31] !== I
              ? ((S =
                  null != I
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: I })
                    : null),
                (M[31] = I),
                (M[32] = S))
              : (S = M[32]),
            M[33] !== k || M[34] !== S
              ? ((C = (0, a.jsxs)(a.Fragment, { children: [k, S] })), (M[33] = k), (M[34] = S), (M[35] = C))
              : (C = M[35]))
          let L = C,
            Q = null == y ? void 0 : -1,
            V = z ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            G = $ && "flex-wrap",
            W = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            H = "recommendation" === q && "dark:bg-secondary-ghost-hover",
            K = !m && "hover:bg-secondary-ghost-hover",
            Z = !m && R && "focus-within:bg-secondary-ghost-hover",
            Y = !m && "recommendation" === q && "dark:hover:bg-background-secondary-soft-alpha",
            X = !m && R && "recommendation" === q && "dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            M[36] !== V ||
            M[37] !== G ||
            M[38] !== W ||
            M[39] !== H ||
            M[40] !== K ||
            M[41] !== Z ||
            M[42] !== Y ||
            M[43] !== X
              ? ((N = (0, i.A)("group w-full items-center", V, G, W, H, K, Z, Y, X)),
                (M[36] = V),
                (M[37] = G),
                (M[38] = W),
                (M[39] = H),
                (M[40] = K),
                (M[41] = Z),
                (M[42] = Y),
                (M[43] = X),
                (M[44] = N))
              : (N = M[44]),
            M[45] !== n || M[46] !== r || M[47] !== o || M[48] !== L || M[49] !== m || M[50] !== g || M[51] !== B
              ? ((E =
                  null != g.to
                    ? (0, a.jsx)(s.N_, {
                        ...g,
                        className: B,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        "aria-disabled": m || void 0,
                        tabIndex: m ? -1 : void 0,
                        onClick: m ? c : g.onClick,
                        children: L,
                      })
                    : (0, a.jsx)("button", {
                        ...g,
                        className: B,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        disabled: m,
                        type: "button",
                        children: L,
                      })),
                (M[45] = n),
                (M[46] = r),
                (M[47] = o),
                (M[48] = L),
                (M[49] = m),
                (M[50] = g),
                (M[51] = B),
                (M[52] = E))
              : (E = M[52]),
            M[53] !== t || M[54] !== $ || M[55] !== m || M[56] !== z
              ? ((O =
                  m || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, i.A)(
                          "flex shrink-0 items-center gap-1",
                          $ && "ms-auto max-w-full py-2",
                          z
                            ? "relative col-start-2 row-start-1"
                            : "pe-[var(--settings-row-padding-inline,--spacing(4))]",
                        ),
                        children: t,
                      })),
                (M[53] = t),
                (M[54] = $),
                (M[55] = m),
                (M[56] = z),
                (M[57] = O))
              : (O = M[57]),
            M[58] !== y || M[59] !== Q || M[60] !== N || M[61] !== E || M[62] !== O
              ? ((T = (0, a.jsxs)("div", {
                  id: y,
                  "data-settings-search-entry": y,
                  tabIndex: Q,
                  className: N,
                  children: [E, O],
                })),
                (M[58] = y),
                (M[59] = Q),
                (M[60] = N),
                (M[61] = E),
                (M[62] = O),
                (M[63] = T))
              : (T = M[63]),
            T
          )
        },
        kf: function (e) {
          let t,
            n = (0, l.c)(2),
            { children: i } = e
          return (
            n[0] !== i
              ? ((t = (0, a.jsx)("span", { className: "text-tertiary", children: i })), (n[0] = i), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            n,
            r,
            s,
            c,
            d,
            u,
            p,
            m,
            f,
            g = (0, l.c)(43),
            {
              id: h,
              ariaLabel: y,
              autoFocus: b,
              checked: x,
              description: v,
              highlightSelected: w,
              indicator: _,
              label: A,
              name: I,
              onChange: j,
              onClick: k,
              value: S,
              variant: C,
            } = e,
            N = void 0 === w || w,
            E = void 0 === _ ? "radio" : _,
            O = void 0 === C ? "default" : C
          ;(g[0] !== x || g[1] !== v || g[2] !== N || g[3] !== E || g[4] !== O
            ? ((t = (0, i.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === O &&
                  (0, i.A)(
                    "gap-3 px-[var(--settings-row-padding-inline,--spacing(4))] py-3 hover:bg-secondary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === O && x && N && "radio" === E && "bg-background-neutral-soft-alpha",
                "form" === O && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === O && "items-center gap-2",
                "checkmark" === E && "after:ms-7",
              )),
              (g[0] = x),
              (g[1] = v),
              (g[2] = N),
              (g[3] = E),
              (g[4] = O),
              (g[5] = t))
            : (t = g[5]),
            g[6] !== y || g[7] !== h
              ? ((n = (0, a.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": y,
                  htmlFor: h,
                })),
                (g[6] = y),
                (g[7] = h),
                (g[8] = n))
              : (n = g[8]),
            g[9] !== E || g[10] !== O
              ? ((r = (0, i.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === E
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, i.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === O ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (g[9] = E),
                (g[10] = O),
                (g[11] = r))
              : (r = g[11]))
          let T = null != v ? `${h}-description` : void 0
          ;(g[12] !== y ||
          g[13] !== b ||
          g[14] !== x ||
          g[15] !== h ||
          g[16] !== I ||
          g[17] !== j ||
          g[18] !== k ||
          g[19] !== r ||
          g[20] !== T ||
          g[21] !== S
            ? ((s = (0, a.jsx)("input", {
                id: h,
                className: r,
                "aria-label": y,
                "aria-describedby": T,
                autoFocus: b,
                type: "radio",
                name: I,
                value: S,
                checked: x,
                onChange: j,
                onClick: k,
              })),
              (g[12] = y),
              (g[13] = b),
              (g[14] = x),
              (g[15] = h),
              (g[16] = I),
              (g[17] = j),
              (g[18] = k),
              (g[19] = r),
              (g[20] = T),
              (g[21] = S),
              (g[22] = s))
            : (s = g[22]),
            g[23] !== x || g[24] !== E
              ? ((c = "checkmark" === E ? (0, a.jsx)(o.ALZ, { className: (0, i.A)(!x && "invisible") }) : null),
                (g[23] = x),
                (g[24] = E),
                (g[25] = c))
              : (c = g[25]))
          let M = "default" === O ? "text-sm font-medium" : "text-base"
          return (
            g[26] !== M ? ((d = (0, i.A)("text-default", M)), (g[26] = M), (g[27] = d)) : (d = g[27]),
            g[28] !== A || g[29] !== d
              ? ((u = (0, a.jsx)("span", { className: d, children: A })), (g[28] = A), (g[29] = d), (g[30] = u))
              : (u = g[30]),
            g[31] !== v || g[32] !== h
              ? ((p =
                  null != v
                    ? (0, a.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: v,
                      })
                    : null),
                (g[31] = v),
                (g[32] = h),
                (g[33] = p))
              : (p = g[33]),
            g[34] !== u || g[35] !== p
              ? ((m = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, p],
                })),
                (g[34] = u),
                (g[35] = p),
                (g[36] = m))
              : (m = g[36]),
            g[37] !== m || g[38] !== t || g[39] !== n || g[40] !== s || g[41] !== c
              ? ((f = (0, a.jsxs)("div", { className: t, children: [n, s, c, m] })),
                (g[37] = m),
                (g[38] = t),
                (g[39] = n),
                (g[40] = s),
                (g[41] = c),
                (g[42] = f))
              : (f = g[42]),
            f
          )
        },
      },
    )
  },
}
//# sourceMappingURL=493889.907634cbcf.js.map
