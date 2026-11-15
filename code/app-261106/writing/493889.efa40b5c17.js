export const __rspack_esm_ids = [493889]
export const __webpack_modules__ = {
  VVkm(e, t, n) {
    var a = n("QosV"),
      i = n("T0Rc"),
      l = n("GaA7"),
      r = n("rvFo")
    function o(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    n.d(
      t,
      {},
      {
        T9: o,
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
          let s,
            c,
            d,
            u = (0, a.c)(9),
            { accountId: p, enabled: f, hostId: m } = e
          return (
            u[0] !== p || u[1] !== m
              ? ((t = m), (n = p), (s = [...o(t), n]), (u[0] = p), (u[1] = m), (u[2] = s))
              : (s = u[2]),
            u[3] !== m
              ? ((c = async () =>
                  (await l.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: m })) ?? !1),
                (u[3] = m),
                (u[4] = c))
              : (c = u[4]),
            u[5] !== f || u[6] !== s || u[7] !== c
              ? ((d = { queryKey: s, queryFn: c, enabled: f, retry: !1, staleTime: r.D.FIVE_MINUTES }),
                (u[5] = f),
                (u[6] = s),
                (u[7] = c),
                (u[8] = d))
              : (d = u[8]),
            (0, i.I)(d)
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
      i = n("QosV"),
      l = n("on57"),
      r = n("zd8w"),
      o = n("wD9O"),
      s = n("JNtf")
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
            f = (0, i.c)(19),
            { children: m, loading: g, onOpenChange: h } = e,
            [y, b] = (0, r.useState)(null),
            x = (0, o.dz)()
          ;(f[0] !== y || f[1] !== x
            ? ((t = null == y ? void 0 : { height: `min(${y}px, calc((100dvh - 2rem) / ${x}))` }),
              (f[0] = y),
              (f[1] = x),
              (f[2] = t))
            : (t = f[2]),
            f[3] !== t ? ((n = { "aria-describedby": void 0, style: t }), (f[3] = t), (f[4] = n)) : (n = f[4]),
            f[5] !== y || f[6] !== g
              ? ((c = (e) => {
                  !g && null == y && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }),
                (f[5] = y),
                (f[6] = g),
                (f[7] = c))
              : (c = f[7]))
          let w = (g || null != y) && "h-full",
            v = null != y && "overflow-y-auto"
          return (
            f[8] !== w || f[9] !== v ? ((d = (0, l.A)(w, v)), (f[8] = w), (f[9] = v), (f[10] = d)) : (d = f[10]),
            f[11] !== m || f[12] !== c || f[13] !== d
              ? ((u = (0, a.jsx)("div", { ref: c, className: d, children: m })),
                (f[11] = m),
                (f[12] = c),
                (f[13] = d),
                (f[14] = u))
              : (u = f[14]),
            f[15] !== h || f[16] !== n || f[17] !== u
              ? ((p = (0, a.jsx)(s.lG, {
                  open: !0,
                  onOpenChange: h,
                  autoFocusCloseButton: !0,
                  size: "setup",
                  contentProps: n,
                  children: u,
                })),
                (f[15] = h),
                (f[16] = n),
                (f[17] = u),
                (f[18] = p))
              : (p = f[18]),
            p
          )
        },
      },
    )
  },
  TC6X(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("oyxz"),
      r = n("Sm6l"),
      o = n("JNtf"),
      s = n("mUDD"),
      c = n("FROa"),
      d = n("lmaZ")
    function u(e) {
      let t,
        n,
        c,
        u,
        p,
        f,
        m,
        g,
        h,
        y,
        b,
        x,
        w = (0, i.c)(27),
        { isPending: v, embedded: _, isFetching: A, onOpenChange: k, onRetry: j } = e,
        I = void 0 !== _ && _,
        S = I ? "h2" : o.L3,
        C = I ? "p" : o.rr
      if (v) {
        let e
        return (w[0] !== I ? ((e = (0, a.jsx)(d.$, { embedded: I })), (w[0] = I), (w[1] = e)) : (e = w[1]), e)
      }
      return (
        w[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.title",
              defaultMessage: "Couldn’t load connector",
              description:
                "Error heading in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. Keep this concise and nontechnical; there are no placeholders.",
            })),
            (w[2] = t))
          : (t = w[2]),
        w[3] !== S ? ((n = (0, a.jsx)(S, { children: t })), (w[3] = S), (w[4] = n)) : (n = w[4]),
        w[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.description",
              defaultMessage: "Try again, or cancel and return to the previous page",
              description:
                "Actionable error explanation in the app connection dialog shown to an end user when connector details requested by the user could not be loaded. The dialog offers Retry and Cancel buttons. Keep this concise; there are no placeholders.",
            })),
            (w[5] = c))
          : (c = w[5]),
        w[6] !== C ? ((u = (0, a.jsx)(C, { children: c })), (w[6] = C), (w[7] = u)) : (u = w[7]),
        w[8] !== n || w[9] !== u
          ? ((p = (0, a.jsx)(s.c7, { title: n, subtitle: u })), (w[8] = n), (w[9] = u), (w[10] = p))
          : (p = w[10]),
        w[11] !== k ? ((f = () => k(!1)), (w[11] = k), (w[12] = f)) : (f = w[12]),
        w[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.button.cancel",
              defaultMessage: "Cancel",
              description:
                "Button label in the app connection dialog for closing it after connector details requested by the user failed to load. Keep this short; there are no placeholders.",
            })),
            (w[13] = m))
          : (m = w[13]),
        w[14] !== A || w[15] !== f
          ? ((g = (0, a.jsx)(r.$, { color: "secondary", disabled: A, onClick: f, type: "button", children: m })),
            (w[14] = A),
            (w[15] = f),
            (w[16] = g))
          : (g = w[16]),
        w[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.button.retry",
              defaultMessage: "Retry",
              description:
                "Button label in the app connection dialog for retrying connector details that failed to load after an end user requested an app connection. Keep this short; there are no placeholders.",
            })),
            (w[17] = h))
          : (h = w[17]),
        w[18] !== A || w[19] !== j
          ? ((y = (0, a.jsx)(r.$, { color: "primary", loading: A, onClick: j, type: "button", children: h })),
            (w[18] = A),
            (w[19] = j),
            (w[20] = y))
          : (y = w[20]),
        w[21] !== y || w[22] !== g
          ? ((b = (0, a.jsxs)(s.Es, { children: [g, y] })), (w[21] = y), (w[22] = g), (w[23] = b))
          : (b = w[23]),
        w[24] !== b || w[25] !== p
          ? ((x = (0, a.jsxs)(s.R4, { className: "select-none", children: [p, b] })),
            (w[24] = b),
            (w[25] = p),
            (w[26] = x))
          : (x = w[26]),
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
            l = (0, i.c)(6)
          return (
            l[0] !== e ? ((t = (0, a.jsx)(u, { ...e })), (l[0] = e), (l[1] = t)) : (t = l[1]),
            l[2] !== e.isPending || l[3] !== e.onOpenChange || l[4] !== t
              ? ((n = (0, a.jsx)(c.Y, { loading: e.isPending, onOpenChange: e.onOpenChange, children: t })),
                (l[2] = e.isPending),
                (l[3] = e.onOpenChange),
                (l[4] = t),
                (l[5] = n))
              : (n = l[5]),
            n
          )
        },
      },
    )
  },
  Sx5O(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("ecE5"),
      r = n("TC6X")
    n.d(
      t,
      { p: () => r.p },
      {
        B: function (e) {
          let t,
            n = (0, i.c)(2)
          return (n[0] !== e ? ((t = (0, a.jsx)(l.Z, { ...e, app: null })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
        },
      },
    )
  },
  LQko(e, t, n) {
    var a = n("rvFo"),
      i = n("HFSu"),
      l = n("rGp2"),
      r = n("o6hs")
    function o(e, t) {
      return {
        queryKey: ["mcp-settings", "app-connect", "tos", e, t],
        staleTime: a.D.FIVE_MINUTES,
        queryFn: ({ signal: n }) =>
          i.CodexRequest.safeGet("/aip/connectors/{connector_id}/tos", {
            surface: "connector_setup",
            parameters: { path: { connector_id: e } },
            additionalHeaders: { [l.ok]: t },
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
          ;(e.prefetchQuery((0, l.rJ)(t, { productSku: a?.productSku })),
            e.prefetchQuery(o(t, a?.productSku ?? (0, l.MR)())))
        },
        kp: o,
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
                await i.CodexRequest.safeGet("/aip/connectors/{connector_id}/mfa_requirement", {
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
      i = n("QosV"),
      l = n("oyxz"),
      r = n("JNtf"),
      o = n("mUDD"),
      s = n("X3K1")
    function c(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-b border-default py-2.5 last:border-none",
          children: [
            (0, a.jsx)(s.X, { className: "w-1/2" }),
            (0, a.jsx)(s.P, { lines: 2, seed: `app-connect-description-${e}`, size: "sm" }),
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
            f,
            m,
            g,
            h,
            y,
            b = (0, i.c)(12),
            { embedded: x } = e,
            w = void 0 !== x && x ? "h2" : r.L3
          return (
            b[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(l.A, {
                  id: "beacons.connectApp.loading.title",
                  defaultMessage: "Connect app",
                  description:
                    "Title of the dialog shown to an end user while app connection details requested by the user are loading. Keep this concise; there are no placeholders.",
                })),
                (b[0] = t))
              : (t = b[0]),
            b[1] !== w
              ? ((n = (0, a.jsx)(w, { className: "sr-only", children: t })), (b[1] = w), (b[2] = n))
              : (n = b[2]),
            b[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, a.jsx)("div", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(l.A, {
                    id: "beacons.connectApp.loading.description",
                    defaultMessage: "Loading connection details…",
                    description:
                      "Status message in the app connection dialog shown to an end user while connector details are loading. Keep this concise; there are no placeholders.",
                  }),
                })),
                (b[3] = d))
              : (d = b[3]),
            b[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)("div", {
                  className: "size-14 overflow-hidden rounded-xl",
                  children: (0, a.jsx)(s.X, { size: "fill" }),
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
              ? ((f = (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u,
                    p,
                    (0, a.jsx)("div", {
                      className: "size-14 overflow-hidden rounded-xl",
                      children: (0, a.jsx)(s.X, { size: "fill" }),
                    }),
                  ],
                })),
                (b[6] = f))
              : (f = b[6]),
            b[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex shrink-0 flex-col items-center gap-4",
                  children: [
                    f,
                    (0, a.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-2",
                      children: [
                        (0, a.jsx)("div", { className: "h-6 w-1/2", children: (0, a.jsx)(s.X, { size: "fill" }) }),
                        (0, a.jsx)(s.X, { className: "w-1/3", size: "sm" }),
                      ],
                    }),
                  ],
                })),
                (b[7] = m))
              : (m = b[7]),
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
                    m,
                    g,
                    (0, a.jsx)("div", {
                      className: "mt-auto h-9 shrink-0 overflow-hidden rounded-full",
                      children: (0, a.jsx)(s.X, { size: "fill" }),
                    }),
                  ],
                })),
                (b[9] = h))
              : (h = b[9]),
            b[10] !== n
              ? ((y = (0, a.jsxs)(o.R4, {
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
      i = n("irkb"),
      l = n("xSOA"),
      r = n("zTeN"),
      o = n("Qgfj"),
      s = n("Wf1j"),
      c = n("VVkm"),
      d = n("Dgwo"),
      u = n("HUHI"),
      p = n("OiCI"),
      f = n("SGsN"),
      m = n("B81s"),
      g = n("sLlu"),
      h = n("OWtl"),
      y = n("kfGJ"),
      b = n("WFY2")
    let x = (0, o.YK)({
      enableSuccess: {
        id: "apps.enable.success",
        defaultMessage: "{appName} app enabled",
        description: "Toast shown after successfully enabling an app",
      },
      disableSuccess: {
        id: "apps.disable.success",
        defaultMessage: "{appName} app disabled",
        description: "Toast shown after successfully disabling an app",
      },
      updateError: {
        id: "apps.update.error",
        defaultMessage: "Failed to update app",
        description: "Toast shown when enabling or disabling an app fails",
      },
    })
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            o,
            w,
            v,
            _,
            A,
            k,
            j = (0, a.c)(35),
            I = e?.hostId ?? y.fI,
            S = (0, r.gh)(h.u)
          ;(0, r.Ul)(p.vh)
          let C = (0, i.jE)(),
            N = (0, g.B)(),
            E = (0, s.A)(),
            T
          j[0] !== I || j[1] !== T ? ((t = (0, u.iC)(I, T)), (j[0] = I), (j[1] = T), (j[2] = t)) : (t = j[2])
          let O = t
          j[3] !== O || j[4] !== I || j[5] !== N
            ? ((n = async () => {
                await Promise.all([
                  N((0, c.T9)(I)),
                  N(O),
                  N([...m.Sn, I]),
                  N([...m.tP, I]),
                  N(m.Kj),
                  N(["user-saved-config"]),
                ])
              }),
              (j[3] = O),
              (j[4] = I),
              (j[5] = N),
              (j[6] = n))
            : (n = j[6])
          let M = n
          ;(j[7] !== I || j[8] !== C || j[9] !== S
            ? ((o = async (e) => {
                let { appId: t, enabled: n } = e,
                  a = await (0, m.dG)(S, C, I)
                if (
                  "okOverridden" ===
                  (
                    await (0, d.V)(S, I).sendRequest("config/batchWrite", {
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
              (j[7] = I),
              (j[8] = C),
              (j[9] = S),
              (j[10] = o))
            : (o = j[10]),
            j[11] !== O || j[12] !== C
              ? ((w = async (e) => {
                  let { appId: t, enabled: n } = e
                  await C.cancelQueries({ queryKey: O })
                  let a = C.getQueryData(O)
                  return (
                    a &&
                      C.setQueryData(
                        O,
                        a.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
                      ),
                    { previousApps: a }
                  )
                }),
                (j[11] = O),
                (j[12] = C),
                (j[13] = w))
              : (w = j[13]),
            j[14] !== O || j[15] !== E || j[16] !== N || j[17] !== C || j[18] !== S
              ? ((v = async (e, t, n) => {
                  let { appId: a, appName: i, enabled: l } = t
                  if (l && n?.previousApps?.find((e) => e.id === a)?.isEnabled === !1) {
                    await N(O)
                    let e = C.getQueryData(O)?.find((e) => e.id === a)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let r = i ?? C.getQueryData(O)?.find((e) => e.id === a)?.name ?? a
                  S.get(f.Id).success(E.formatMessage(l ? x.enableSuccess : x.disableSuccess, { appName: r }))
                }),
                (j[14] = O),
                (j[15] = E),
                (j[16] = N),
                (j[17] = C),
                (j[18] = S),
                (j[19] = v))
              : (v = j[19]),
            j[20] !== O || j[21] !== E || j[22] !== C || j[23] !== S
              ? ((_ = (e, t, n) => {
                  ;(b.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    S.get(f.Id).danger(E.formatMessage(x.updateError), {
                      errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                    }),
                    n?.previousApps && C.setQueryData(O, n.previousApps))
                }),
                (j[20] = O),
                (j[21] = E),
                (j[22] = C),
                (j[23] = S),
                (j[24] = _))
              : (_ = j[24]),
            j[25] !== M || j[26] !== o || j[27] !== w || j[28] !== v || j[29] !== _
              ? ((A = { mutationFn: o, onMutate: w, onSuccess: v, onError: _, onSettled: M }),
                (j[25] = M),
                (j[26] = o),
                (j[27] = w),
                (j[28] = v),
                (j[29] = _),
                (j[30] = A))
              : (A = j[30]))
          let P = (0, l.n)(A),
            R = P.isPending ? (P.variables?.appId ?? null) : null
          return (
            j[31] !== P.isPending || j[32] !== P.mutateAsync || j[33] !== R
              ? ((k = { setAppEnabled: P.mutateAsync, isUpdating: P.isPending, updatingAppId: R }),
                (j[31] = P.isPending),
                (j[32] = P.mutateAsync),
                (j[33] = R),
                (j[34] = k))
              : (k = j[34]),
            k
          )
        },
      },
    )
  },
  QSD9(e, t, n) {
    var a = n("SBbD"),
      i = n("CMv2")
    n.d(
      t,
      {},
      {
        B: function (e) {
          return (0, a.S)({
            ...e,
            getAvailableCompanions: (t) => (0, i.Nf)({ ...t, connectors: e.connectors }),
            getCompanionConnectorIds: (t) => (0, i.sR)(t, e.connectors),
          })
        },
      },
    )
  },
  bjbP(e, t, n) {
    var a = n("ASxG")
    let i = a
        .string()
        .trim()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      l = a.object({ tenantId: i, connectionName: a.string().min(1) })
    n.d(
      t,
      {},
      {
        $3: i,
        Ci: function (e) {
          return (
            "OAI" === e.developer_type &&
            ["onenote", "outlook", "power_bi", "sharepoint", "teams"].includes(e.service) &&
            e.supported_auth.some((e) => "OAUTH" === e.type)
          )
        },
        qB: l,
      },
    )
  },
  PraM(e, t, n) {
    var a = n("SBbD"),
      i = n("pxeg")
    n.d(
      t,
      {},
      {
        I: function (e) {
          return (0, a.S)({ ...e, getAvailableCompanions: i.qX, getCompanionConnectorIds: i.HD })
        },
      },
    )
  },
  pxeg(e, t, n) {
    var a = n("BTha"),
      i = n("K0Re")
    let l = "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      r = [
        { connectorId: "connector_4aaab2856305417b993eca9a216aaf6e", kind: "outlook-email" },
        { connectorId: "connector_e6a7394682e24467ac68c60696f275a4", kind: "outlook-calendar" },
        { connectorId: l, kind: "sharepoint" },
        { connectorId: "connector_246af0940da3457da0e751171dc1ce60", kind: "teams" },
      ],
      o = new Map(r.map((e) => [e.connectorId, e]))
    n.d(
      t,
      {},
      {
        HD: function (e) {
          return (0, i.X)(r, e)
        },
        Vk: function ({ connectorId: e, disableExposureLog: t = !1, statsigClient: n, planType: i }) {
          return !!o.has(e) && (0, a.R)(n, "enable-bundled-apps-msft", i, { disableExposureLog: t })
        },
        XI: function (e) {
          return o.get(e)
        },
        oI: l,
        qX: function ({ availableAppIds: e, companionConnectorIds: t, companionConnectors: n, companionLinks: a }) {
          return (0, i.k)({
            availableAppIds: e,
            companionConnectorIds: t,
            companionConnectors: n,
            companionLinks: a,
            connectorById: o,
          })
        },
        zd: r,
      },
    )
  },
  SBbD(e, t, n) {
    var a = n("DBCl"),
      i = n("tl5a"),
      l = n("rGp2"),
      r = n("S7fj"),
      o = n("BQbE"),
      s = n("pDRe"),
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
          freshLinkChecks: f = !1,
          getAvailableCompanions: m,
          getCompanionConnectorIds: g,
          hostId: h,
          primaryLink: y,
          productSku: b,
          queryClient: x,
        }) {
          if (null != y) return []
          let w = (0, c.dZ)({
            accountId: n ?? (0, d.RS)(e) ?? e.get(u.chatGptAuthenticatedAccountId$),
            userId: e.get(u.chatGptAuthenticatedUserId$),
            productSku: b,
          })
          if (!w.enabled) return []
          let v = g(t),
            [_, A, k, j] = await Promise.all([
              x.fetchQuery({ ...w, staleTime: f ? 0 : p.D.FIVE_MINUTES }).catch(() => void 0),
              (0, r.N)(h)
                ? x
                    .fetchQuery(
                      (0, s.p)({
                        userId: e.get(u.chatGptAuthenticatedUserId$),
                        accountId: n ?? (0, d.RS)(e) ?? null,
                        productSku: b,
                        appIds: v,
                        enabled: !0,
                      }),
                    )
                    .then(r.k)
                    .catch(() => new Set())
                : x
                    .fetchQuery(
                      (0, o.getAppsReadQueryOptions)({
                        scope: e,
                        appIds: v,
                        browserAccountId: n,
                        hostId: h,
                        queryClient: x,
                        supportsAppRead: (0, a.JFB)(e.get(i.B0, h), "appRead"),
                      }),
                    )
                    .then((e) => new Set(e.map(({ id: e }) => e)))
                    .catch(() => new Set()),
              x.fetchQuery((0, l.rJ)(t, { productSku: b })).catch(() => null),
              Promise.all(v.map((e) => x.fetchQuery((0, l.rJ)(e)).catch(() => null))),
            ])
          return null == _ || _.some((e) => e.connector_id === t) || null == k
            ? []
            : m({
                availableAppIds: A,
                companionConnectorIds: v,
                companionConnectors: j,
                companionLinks: v.map((e) => _.find((t) => t.connector_id === e) ?? null),
              })
        },
      },
    )
  },
  rAOw(e, t, n) {
    var a = n("ABep"),
      i = n("QosV")
    n.d(
      t,
      {},
      {
        a: function () {
          let e,
            t = (0, i.c)(2)
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
      i = n("irkb"),
      l = n("zTeN"),
      r = n("zd8w"),
      o = n("Wf1j"),
      s = n("HZfM"),
      c = n("rGp2"),
      d = n("o6hs"),
      u = n("JAom"),
      p = n("LQko"),
      f = n("Rvvc"),
      m = n("CMv2"),
      g = n("QSD9"),
      h = n("bjbP"),
      y = n("pxeg"),
      b = n("PraM")
    n("OiCI")
    var x = n("OAko"),
      w = n("Ot7V"),
      v = n("SGsN"),
      _ = n("Rbbe"),
      A = n("OWtl"),
      k = n("kfGJ"),
      j = n("hZax")
    function I(e) {
      ;(0, w.E0)({ disposition: void 0, href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function S() {
      return null
    }
    function C(e) {
      let t = e?.trim()
      t && (0, w.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
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
    function T(e) {
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
            w,
            O,
            M,
            P,
            R,
            z,
            q,
            D,
            F,
            $,
            B = (0, a.c)(74)
          B[0] !== e ? ((t = void 0 === e ? {} : e), (B[0] = e), (B[1] = t)) : (t = B[1])
          let {
              hostId: U,
              marketplaceAnalytics: L,
              oauthReferrer: Q,
              onConnectStarted: W,
              onConnectFailed: V,
              onExternalConnectStarted: H,
            } = t,
            G = (0, r.useContext)(s.di),
            K = (0, l.gh)(A.u),
            Z = (0, o.A)(),
            Y = (0, i.jE)(),
            X = U ?? k.fI,
            J = (0, j.Zj)("2761268526"),
            ee = (0, j.Zj)("3304228433"),
            et = (0, j.AS)()
          B[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { preview: !1 }), (B[2] = n)) : (n = B[2])
          let { data: en } = (0, x.YL)(void 0, n),
            {
              clearPendingAppConnect: ea,
              getPendingAppConnectForApp: ei,
              isAppConnectPending: el,
              markAppConnectOAuthPending: er,
            } = (0, u.ZN)(),
            [eo, es] = (0, r.useState)(null),
            [ec, ed] = (0, r.useState)(),
            [eu, ep] = (0, r.useState)(),
            [ef, em] = (0, r.useState)(null)
          B[3] !== ei || B[4] !== X
            ? ((w = (e, t) => ei(e, X, null == t || ("apps-tab" === t.kind && null == t.reauthLinkId) ? E : t)),
              (B[3] = ei),
              (B[4] = X),
              (B[5] = w))
            : (w = B[5])
          let eg = w
          if (
            B[6] !== ea ||
            B[7] !== eo?.id ||
            B[8] !== eu ||
            B[9] !== en?.plan_type ||
            B[10] !== ei ||
            B[11] !== eg ||
            B[12] !== X ||
            B[13] !== Z ||
            B[14] !== el ||
            B[15] !== J ||
            B[16] !== ee ||
            B[17] !== G?.location ||
            B[18] !== er ||
            B[19] !== L ||
            B[20] !== Q ||
            B[21] !== V ||
            B[22] !== W ||
            B[23] !== H ||
            B[24] !== ef ||
            B[25] !== Y ||
            B[26] !== K ||
            B[27] !== et
          ) {
            let e, t, n, a, i
            ;((R = async (e, t) => {
              let {
                  appConnectOptions: n,
                  marketplaceAnalytics: a,
                  addAccountAttempt: i,
                  forceInApp: l,
                  isAddingAccount: r,
                  hasExistingAccount: o,
                  reauthLinkId: s,
                  googleOAuthBundlePrepared: u,
                  microsoftOAuthBundlePrepared: x,
                  mustShowInstallationInterstitial: w,
                } = void 0 === t ? {} : t,
                _ = void 0 !== l && l,
                A = void 0 !== r && r,
                k = void 0 !== o && o
              if (null != ef) return
              let j = null == s && (!e.isAccessible || A) ? eg(e.id) : null,
                N = (0, d.Ye)(
                  e.id,
                  n ??
                    (null == s
                      ? j?.appConnectOptions
                      : eg(e.id, { kind: "apps-tab", reauthLinkId: s })?.appConnectOptions),
                ),
                E = null == Q ? N : { connectorId: e.id, ...N, oauthReferrer: N?.oauthReferrer ?? Q },
                T = j?.marketplaceAnalytics ?? a ?? ("function" == typeof L ? L() : L),
                O = W?.(e, T) ?? T
              if (!J && !_ && null == j) {
                ;(C((0, c.Cj)(e, E, O?.installAttemptId)), H?.(e))
                return
              }
              ;(0, p.bO)(Y, e.id, E)
              let P = (0, m.W9)({ planType: en?.plan_type, connectorId: e.id, statsigClient: et }),
                R = null != (0, m.w8)(e.id, P),
                z = (0, y.Vk)({ planType: en?.plan_type, connectorId: e.id, statsigClient: et })
              if (
                !_ &&
                !(void 0 !== u && u) &&
                !(void 0 !== x && x) &&
                null == j &&
                !0 !== e.isAccessible &&
                (R || z)
              ) {
                em(e.id)
                let t = { scope: K, appId: e.id, browserAccountId: void 0, hostId: X, queryClient: Y }
                await (R ? (0, g.B)({ ...t, connectors: P }) : (0, b.I)(t))
                  .catch((t) => {
                    throw (V?.(e, O, "request_failed"), t)
                  })
                  .finally(() => {
                    em(null)
                  })
              }
              if (null != j || (!1 === w && (!_ || A) && (!e.isAccessible || A) && (A || (!R && !z)))) {
                em(e.id)
                let t = await Y.fetchQuery((0, c.rJ)(e.id, { productSku: E?.productSku }))
                  .catch(S)
                  .then(async (t) =>
                    null != t &&
                    "DISABLED_BY_ADMIN" !== t.status &&
                    !(A && k && ee && (0, h.Ci)(t)) &&
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
                          installAttemptId: O?.installAttemptId,
                          requestedCompanionConnectorIds: j?.requestedCompanionConnectorIds,
                          onOAuthStarted: (n, a) => {
                            M({
                              app: e,
                              oauthFlowCorrelationId: a?.oauthFlowCorrelationId,
                              marketplaceAnalytics: O,
                              pastedLinkProductExperience: j?.pastedLinkProductExperience,
                              pluginInstallOAuthState:
                                j?.pluginInstallOAuthState ??
                                (j?.resumeTarget.kind === "plugin-install" ? j.oauthState : void 0),
                              previousOAuthState: j?.oauthState,
                              requestedCompanionConnectorIds: j?.requestedCompanionConnectorIds,
                              resumeTarget: j?.resumeTarget ?? { kind: "apps-tab", addAccountAttempt: i },
                              isGithubConnector: e.id === f.qD || t.template_id === f.Bk || "github" === t.service,
                              redirectUrl: n,
                              returnTo: E?.redirectAfter ?? j?.returnTo,
                              appConnectOptions: E,
                            })
                          },
                          openInBrowser: I,
                          queryClient: Y,
                        })
                      : null == t
                        ? null
                        : { kind: "requires-connection-form" },
                  )
                  .finally(() => {
                    em(null)
                  })
                if (t?.kind === "oauth-started") return void K.get(v.Id).info((0, c.oH)({ intl: Z }))
                if (
                  ((null == t || "failed" === t.kind) && V?.(e, O, null == t ? "request_failed" : "connect_failed"),
                  null != j && t?.kind !== "requires-connection-form" && t?.kind !== "requires-mfa")
                )
                  return void K.get(v.Id).danger((0, c.S4)(Z), {
                    errorAnalytics: { toastId: "useAppConnectFlow.handleConnectApp" },
                  })
              }
              ;(ep(O), ed(E), es(e))
            }),
              B[35] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = () => {
                    ;(es(null), ed(void 0), ep(void 0))
                  }),
                  (B[35] = e))
                : (e = B[35]),
              (O = e),
              B[36] !== eo?.id || B[37] !== eg || B[38] !== X || B[39] !== el || B[40] !== ef
                ? ((t = (e, t) => ef === e || eo?.id === e || el(e, t ?? E, X) || null != eg(e, t)),
                  (B[36] = eo?.id),
                  (B[37] = eg),
                  (B[38] = X),
                  (B[39] = el),
                  (B[40] = ef),
                  (B[41] = t))
                : (t = B[41]),
              (q = t),
              B[42] !== ea || B[43] !== eg || B[44] !== X || B[45] !== Z || B[46] !== K
                ? ((n = (e, t) => {
                    let n = eg(e, t)
                    if (null == n) return
                    let a =
                      n.pluginInstallOAuthState ?? ("plugin-install" === n.resumeTarget.kind ? n.oauthState : void 0)
                    ;(null != a &&
                      ((0, _.$4)(K, a)
                        ? K.get(v.Id).danger((0, c.ue)(Z), {
                            errorAnalytics: { toastId: "useAppConnectFlow.handleAppConnected" },
                          })
                        : (0, _.PA)(K, a)),
                      ea({ oauthState: n.oauthState, hostId: X }))
                  }),
                  (B[42] = ea),
                  (B[43] = eg),
                  (B[44] = X),
                  (B[45] = Z),
                  (B[46] = K),
                  (B[47] = n))
                : (n = B[47]),
              (P = n),
              B[48] !== ea || B[49] !== eg || B[50] !== X || B[51] !== Z || B[52] !== H || B[53] !== K
                ? ((a = (e, t) => {
                    let n = eg(e.id, t)
                    if (null != n) {
                      let e =
                        n.pluginInstallOAuthState ?? ("plugin-install" === n.resumeTarget.kind ? n.oauthState : void 0)
                      ;(null != e &&
                        (0, _.$4)(K, e) &&
                        K.get(v.Id).danger((0, c.ue)(Z), {
                          errorAnalytics: { toastId: "useAppConnectFlow.handleExternalConnectStarted" },
                        }),
                        ea({ oauthState: n.oauthState, hostId: X }))
                    }
                    H?.(e)
                  }),
                  (B[48] = ea),
                  (B[49] = eg),
                  (B[50] = X),
                  (B[51] = Z),
                  (B[52] = H),
                  (B[53] = K),
                  (B[54] = a))
                : (a = B[54]),
              (z = a),
              B[55] !== ei || B[56] !== X || B[57] !== el
                ? ((i = (e) => el(e, N, X) || null != ei(e, X, N)),
                  (B[55] = ei),
                  (B[56] = X),
                  (B[57] = el),
                  (B[58] = i))
                : (i = B[58]),
              (D = i),
              (M = (e) => {
                let {
                    app: t,
                    appConnectOptions: n,
                    isGithubConnector: a,
                    marketplaceAnalytics: i,
                    pastedLinkProductExperience: l,
                    pluginInstallOAuthState: r,
                    previousOAuthState: o,
                    oauthFlowCorrelationId: s,
                    requestedCompanionConnectorIds: c,
                    redirectUrl: d,
                    returnTo: u,
                    resumeTarget: p,
                  } = e,
                  f = i ?? eu ?? ("function" == typeof L ? L() : L),
                  m = null == o && (null == p || "apps-tab" === p.kind) ? eg(t.id, p) : null,
                  g = o ?? m?.oauthState,
                  h = m?.resumeTarget ?? p,
                  y = er({
                    app: t,
                    oauthFlowCorrelationId: s,
                    appConnectOptions: n ?? m?.appConnectOptions,
                    hostId: X,
                    isGithubConnector: a,
                    marketplaceAnalytics: m?.marketplaceAnalytics ?? f,
                    pastedLinkProductExperience: l ?? m?.pastedLinkProductExperience,
                    pluginInstallOAuthState:
                      r ??
                      m?.pluginInstallOAuthState ??
                      (m?.resumeTarget.kind === "plugin-install" ? m.oauthState : void 0),
                    requestedCompanionConnectorIds: c ?? m?.requestedCompanionConnectorIds,
                    redirectUrl: d,
                    returnTo:
                      h?.kind === "apps-tab" && null != h.reauthLinkId && null != h.addAccountAttempt
                        ? (m?.returnTo ?? T(G?.location))
                        : (u ?? m?.returnTo ?? T(G?.location)),
                    resumeTarget: h,
                  })
                return (null != y && null != g && g !== y && ea({ oauthState: g, hostId: X }), y)
              }),
              (B[6] = ea),
              (B[7] = eo?.id),
              (B[8] = eu),
              (B[9] = en?.plan_type),
              (B[10] = ei),
              (B[11] = eg),
              (B[12] = X),
              (B[13] = Z),
              (B[14] = el),
              (B[15] = J),
              (B[16] = ee),
              (B[17] = G?.location),
              (B[18] = er),
              (B[19] = L),
              (B[20] = Q),
              (B[21] = V),
              (B[22] = W),
              (B[23] = H),
              (B[24] = ef),
              (B[25] = Y),
              (B[26] = K),
              (B[27] = et),
              (B[28] = O),
              (B[29] = M),
              (B[30] = P),
              (B[31] = R),
              (B[32] = z),
              (B[33] = q),
              (B[34] = D))
          } else ((O = B[28]), (M = B[29]), (P = B[30]), (R = B[31]), (z = B[32]), (q = B[33]), (D = B[34]))
          return (
            B[59] !== ea || B[60] !== X
              ? ((F = (e) => {
                  ea({ ...e, hostId: X })
                }),
                (B[59] = ea),
                (B[60] = X),
                (B[61] = F))
              : (F = B[61]),
            B[62] !== O ||
            B[63] !== eo ||
            B[64] !== eu ||
            B[65] !== ec ||
            B[66] !== M ||
            B[67] !== P ||
            B[68] !== R ||
            B[69] !== z ||
            B[70] !== q ||
            B[71] !== D ||
            B[72] !== F
              ? (($ = {
                  connectingApp: eo,
                  connectingOptions: ec,
                  connectingMarketplaceAnalytics: eu,
                  clearConnectingApp: O,
                  clearPendingAppConnect: F,
                  handleAppConnected: P,
                  handleAppConnectOAuthStarted: M,
                  handleConnectApp: R,
                  handleExternalConnectStarted: z,
                  handleOpenAppUrl: C,
                  isAppConnectPending: q,
                  isAppReauthPending: D,
                }),
                (B[62] = O),
                (B[63] = eo),
                (B[64] = eu),
                (B[65] = ec),
                (B[66] = M),
                (B[67] = P),
                (B[68] = R),
                (B[69] = z),
                (B[70] = q),
                (B[71] = D),
                (B[72] = F),
                (B[73] = $))
              : ($ = B[73]),
            $
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
              "Look through my chats, Library files, and any connected apps for a new and real writing task you could help with. Briefly explain what you found, why you chose it, and which examples of my own writing you’ll use. Then produce a useful draft closely matching my style. Point out two specific choices you made to match my style. If you can’t find a clear task or enough examples, ask me for a draft, template, or writing sample instead of inventing one. Show the draft here; do not send, post, or modify anything.",
            description:
              "Request sent to ChatGPT when a user selects Show me in writing-style setup. Ask it to use available chats, Library files, and connected apps to find a new, real writing task, explain its choice and the user's own writing examples, produce a useful draft closely matching their writing style, and explain two style choices. If context is insufficient, ask for a draft, template, or sample instead of inventing one. The draft must stay in chat without sending, posting, or modifying anything. Library is the product's file library. Use natural first-person request wording. Plain text with no placeholders.",
          })
        },
      },
    )
  },
  NcBa(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57"),
      r = n("zd8w")
    let o = { small: "-ms-1 size-5", medium: "-ms-1.5 size-6" }
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            n,
            s,
            c,
            d,
            u,
            p,
            f = (0, i.c)(19),
            { ariaLabel: m, children: g, size: h, surface: y } = e,
            b = void 0 === h ? "small" : h,
            x = void 0 === y ? "default" : y
          if (f[0] !== m || f[1] !== g || f[2] !== b || f[3] !== x) {
            u = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                i = r.Children.toArray(g)
              if (0 === i.length) {
                u = null
                break e
              }
              ;((t = null == m || void 0),
                (n = m),
                (s = "flex shrink-0 items-center"),
                (c = null == m ? void 0 : "img"),
                f[10] !== b || f[11] !== x
                  ? ((e = (e) =>
                      (0, a.jsx)("span", {
                        className: (0, l.A)(
                          "flex items-center justify-center overflow-hidden rounded-md first:ms-0",
                          "transparent" !== x && "ring-1 ring-inset",
                          "white" === x
                            ? "bg-brand-logo-background text-brand-logo-foreground ring-brand-logo-foreground/10"
                            : "text-default",
                          "default" === x && "bg-surface ring-border",
                          "transparent" === x && "bg-transparent",
                          o[b],
                        ),
                        children: e,
                      })),
                    (f[10] = b),
                    (f[11] = x),
                    (f[12] = e))
                  : (e = f[12]),
                (d = r.Children.map(i, e)))
            }
            ;((f[0] = m),
              (f[1] = g),
              (f[2] = b),
              (f[3] = x),
              (f[4] = t),
              (f[5] = n),
              (f[6] = s),
              (f[7] = c),
              (f[8] = d),
              (f[9] = u))
          } else ((t = f[4]), (n = f[5]), (s = f[6]), (c = f[7]), (d = f[8]), (u = f[9]))
          return u !== Symbol.for("react.early_return_sentinel")
            ? u
            : (f[13] !== t || f[14] !== n || f[15] !== s || f[16] !== c || f[17] !== d
                ? ((p = (0, a.jsx)("span", { "aria-hidden": t, "aria-label": n, className: s, role: c, children: d })),
                  (f[13] = t),
                  (f[14] = n),
                  (f[15] = s),
                  (f[16] = c),
                  (f[17] = d),
                  (f[18] = p))
                : (p = f[18]),
              p)
        },
      },
    )
  },
  Bvfk(e, t, n) {
    n.d(t, { AccountWritingStyleDialog: () => ej })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("zTeN"),
      r = n("DBCl"),
      o = n("zd8w"),
      s = n("Wf1j"),
      c = n("PFjh"),
      d = n("E8Sp"),
      u = n("pDRe"),
      p = n("OiCI"),
      f = n("SPnB"),
      m = n("eFn4"),
      g = n("EOo5"),
      h = n("lBzi"),
      y = n("OOaz"),
      b = n("Sm7V"),
      x = n("jAnS"),
      w = n("yZT5"),
      v = n("j9xU"),
      _ = n("T8X0"),
      A = n("X6Vn"),
      k = n("SGsN"),
      j = n("Q8aV"),
      I = n("gBBC"),
      S = n("OWtl"),
      C = n("T0Rc"),
      N = n("S2r0"),
      E = n("v7qY"),
      T = n("oyxz"),
      O = n("Sx5O"),
      M = n("IBgA"),
      P = n("hOO0"),
      R = n("HUHI"),
      z = n("uc7r"),
      q = n("yxN2"),
      D = n("QufN"),
      F = n("WzdM"),
      $ = n("ugfi"),
      B = n("EEop"),
      U = n("bJEQ"),
      L = n("cLdu"),
      Q = n("ueue"),
      W = n("ecE5"),
      V = n("rvFo"),
      H = n("HFSu"),
      G = n("eShZ"),
      K = n("z7pR"),
      Z = n("hUKi"),
      Y = n("rAOw"),
      X = n("FvYa"),
      J = n("NcBa"),
      ee = n("Sm6l"),
      et = n("JNtf"),
      en = n("mUDD"),
      ea = n("bVeK"),
      ei = n("RNul"),
      el = n("AWNZ"),
      er = n("bZug")
    function eo(e) {
      let t,
        n,
        l = (0, i.c)(11),
        { apps: r, isContinuing: o, pendingAppId: s, onConnect: c } = e
      if (l[0] !== r || l[1] !== o || l[2] !== c || l[3] !== s) {
        let e
        ;(l[5] !== o || l[6] !== c || l[7] !== s
          ? ((e = (e) => (0, a.jsx)(ec, { app: e, disabled: o || null != s, pending: s === e.id, onConnect: c }, e.id)),
            (l[5] = o),
            (l[6] = c),
            (l[7] = s),
            (l[8] = e))
          : (e = l[8]),
          (t = [...r].sort(es).map(e)),
          (l[0] = r),
          (l[1] = o),
          (l[2] = c),
          (l[3] = s),
          (l[4] = t))
      } else t = l[4]
      return (
        l[9] !== t ? ((n = (0, a.jsx)("div", { className: er.r, children: t })), (l[9] = t), (l[10] = n)) : (n = l[10]),
        n
      )
    }
    function es(e, t) {
      return Number("connected" === e.connection) - Number("connected" === t.connection)
    }
    function ec(e) {
      let t,
        n,
        l,
        r,
        o,
        c,
        d = (0, i.c)(28),
        { app: u, disabled: p, pending: f, onConnect: m } = e,
        g = (0, s.A)()
      d[0] !== u.connection || d[1] !== u.name || d[2] !== g
        ? ((t = g.formatMessage(
            {
              id: "writingStyle.apps.sourceActionLabel",
              defaultMessage:
                "{action, select, reauth {Reconnect} disabled {Enable} refresh {Refresh} other {Connect}} {appName}",
              description:
                "Accessible action for a writing source. action indicates reauthorization, enablement, refreshing host readiness, or connecting. appName is the product name.",
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
        ;(d[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(ea.ONy, {})), (d[4] = e)) : (e = d[4]),
          (n = e))
      } else {
        let e
        ;(d[5] !== u.connection
          ? ((e = (0, a.jsx)(T.A, {
              id: "writingStyle.apps.sourceAction",
              defaultMessage: "{action, select, reauth {Reconnect} disabled {Enable} other {Refresh}}",
              description:
                "Action for an installed writing source needing authorization, enablement, or refreshed host readiness",
              values: { action: u.connection },
            })),
            (d[5] = u.connection),
            (d[6] = e))
          : (e = d[6]),
          (n = e))
      }
      if ("connected" === u.connection) {
        let e, t
        ;(d[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(ea.JwD, {})), (d[7] = e)) : (e = d[7]),
          d[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsxs)("span", {
                className: "flex size-9 shrink-0 items-center justify-center",
                role: "status",
                children: [
                  e,
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(T.A, {
                      id: "writingStyle.apps.connected",
                      defaultMessage: "Connected",
                      description: "Status of an app that can supply the user's writing examples",
                    }),
                  }),
                ],
              })),
              (d[8] = t))
            : (t = d[8]),
          (l = t))
      } else if ("unavailable" === u.connection) {
        let e
        ;(d[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(T.A, {
              id: "writingStyle.apps.unavailable",
              defaultMessage: "Unavailable",
              description: "Status of a writing source app that is unavailable for this account or execution host",
            })),
            (d[9] = e))
          : (e = d[9]),
          (l = e))
      } else {
        let e,
          t,
          i = y ? "inputIcon" : "medium"
        ;(d[10] !== u || d[11] !== m ? ((e = () => m(u)), (d[10] = u), (d[11] = m), (d[12] = e)) : (e = d[12]),
          d[13] !== h || d[14] !== n || d[15] !== p || d[16] !== f || d[17] !== i || d[18] !== e
            ? ((t = (0, a.jsx)(ee.$, {
                type: "button",
                color: "ghostSecondary",
                size: i,
                radius: "full",
                "aria-label": h,
                title: h,
                "aria-busy": f,
                disabled: p,
                onClick: e,
                children: n,
              })),
              (d[13] = h),
              (d[14] = n),
              (d[15] = p),
              (d[16] = f),
              (d[17] = i),
              (d[18] = e),
              (d[19] = t))
            : (t = d[19]),
          (l = t))
      }
      return (
        d[20] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(ea.wdY, {})), (d[20] = r)) : (r = d[20]),
        d[21] !== u.logoDarkUrl || d[22] !== u.logoUrl
          ? ((o = (0, a.jsx)(X.R, {
              className: "size-5",
              alt: "",
              logoUrl: u.logoUrl,
              logoDarkUrl: u.logoDarkUrl,
              fallback: r,
            })),
            (d[21] = u.logoDarkUrl),
            (d[22] = u.logoUrl),
            (d[23] = o))
          : (o = d[23]),
        d[24] !== u.name || d[25] !== l || d[26] !== o
          ? ((c = (0, a.jsx)(el.ic, { variant: "featured", label: u.name, icon: o, control: l })),
            (d[24] = u.name),
            (d[25] = l),
            (d[26] = o),
            (d[27] = c))
          : (c = d[27]),
        c
      )
    }
    let ed = ["messaging", "email", "documents"],
      eu = { messaging: ea.tv7, email: ea.hdW, documents: ea.Xvv }
    function ep(e) {
      let t,
        n,
        l,
        r,
        c,
        d,
        u,
        p,
        f,
        m,
        g,
        h,
        y,
        b,
        x,
        w,
        v,
        _,
        A,
        k,
        j,
        I,
        S,
        C,
        N,
        E,
        O,
        M,
        P,
        R,
        z,
        q = (0, i.c)(108),
        {
          apps: D,
          enabled: F,
          onManage: $,
          category: B,
          onCategoryChange: U,
          error: L,
          isContinuing: Q,
          isLoading: W,
          isRefreshing: V,
          pendingAppId: H,
          onClose: G,
          onConnect: K,
          onContinue: Z,
          onRetry: X,
        } = e,
        es = void 0 !== V && V,
        ec = (0, s.A)(),
        ep = (0, o.useRef)(null)
      if (
        q[0] !== D ||
        q[1] !== B ||
        q[2] !== F ||
        q[3] !== ec ||
        q[4] !== Q ||
        q[5] !== W ||
        q[6] !== U ||
        q[7] !== G ||
        q[8] !== Z ||
        q[9] !== $ ||
        q[10] !== H
      ) {
        let e,
          i,
          o,
          s = D?.filter(eh)
        ;((r = !(l = Q || null != H)),
          q[34] !== l || q[35] !== U
            ? ((e = (e) => {
                l || (U(e), ep.current?.focus())
              }),
              (q[34] = l),
              (q[35] = U),
              (q[36] = e))
            : (e = q[36]))
        let C = e
        ;((n = et.lG),
          (g = !0),
          (h = "setup"),
          (y = "chatgpt"),
          q[37] !== G ? ((b = (e) => !e && G()), (q[37] = G), (q[38] = b)) : (b = q[38]),
          q[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = {
                onOpenAutoFocus: (e) => {
                  ;(e.preventDefault(), ep.current?.focus())
                },
              }),
              (q[39] = w))
            : (w = q[39]),
          (t = en.R4),
          (I = "form"),
          (S = "full"),
          (c = "chatgpt"),
          (d = "relative overflow-hidden"),
          q[40] !== r || q[41] !== Z
            ? ((u = (e) => {
                ;(e.preventDefault(), r && Z())
              }),
              (q[40] = r),
              (q[41] = Z),
              (q[42] = u))
            : (u = q[42]),
          q[43] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(Y.a, {})), (q[43] = p)) : (p = q[43]),
          q[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, a.jsx)("div", {
                className: "relative flex shrink-0 items-center justify-center pt-8 select-none",
                children: (0, a.jsx)("span", {
                  className:
                    "flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-default bg-surface text-default shadow-sm",
                  children: (0, a.jsx)(ea.CY9, {}),
                }),
              })),
              (q[44] = f))
            : (f = q[44]),
          q[45] !== l || q[46] !== B || q[47] !== C || q[48] !== ec
            ? ((m =
                null != B
                  ? (0, a.jsx)(ee.$, {
                      className: "absolute top-6 left-6",
                      type: "button",
                      color: "ghostSecondary",
                      size: "inputIcon",
                      radius: "full",
                      disabled: l,
                      onClick: () => C(null),
                      "aria-label": ec.formatMessage({
                        id: "writingStyle.setup.back",
                        defaultMessage: "Back",
                        description:
                          "Button returning from the Writing style source picker to its overview without saving consent",
                      }),
                      children: (0, a.jsx)(ea.z_d, {}),
                    })
                  : null),
              (q[45] = l),
              (q[46] = B),
              (q[47] = C),
              (q[48] = ec),
              (q[49] = m))
            : (m = q[49]),
          (k = "relative flex min-h-0 flex-1 flex-col gap-4 px-8 pt-6 pb-4"),
          q[50] !== F
            ? ((i = (0, a.jsx)(et.L3, {
                asChild: !0,
                children: (0, a.jsx)("h2", {
                  ref: ep,
                  tabIndex: -1,
                  className: "heading-lg font-semibold",
                  children: F
                    ? (0, a.jsx)(T.A, {
                        id: "writingStyle.setup.enabledTitle",
                        defaultMessage: "Writing style is personalized",
                        description: "Heading confirming that writing-style personalization has been enabled",
                      })
                    : (0, a.jsx)(T.A, {
                        id: "writingStyle.setup.title",
                        defaultMessage: "Set up writing style",
                        description: "Heading while writing-style personalization has not yet been enabled",
                      }),
                }),
              })),
              (q[50] = F),
              (q[51] = i))
            : (i = q[51]),
          q[52] !== $
            ? ((o = (0, a.jsx)(et.rr, {
                className: "text-base text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "writingStyle.setup.descriptionWithManage",
                  defaultMessage:
                    "ChatGPT uses your chats and Library files to write in your style. <manage>Manage</manage>",
                  description:
                    "Writing-style setup description. Library is ChatGPT's file library. The inline Manage link closes setup and opens Personalization settings.",
                  values: {
                    manage: (e) =>
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "cursor-interaction underline",
                        onClick: $,
                        children: e,
                      }),
                  },
                }),
              })),
              (q[52] = $),
              (q[53] = o))
            : (o = q[53]),
          q[54] !== i || q[55] !== o
            ? ((j = (0, a.jsxs)("div", {
                className: "flex shrink-0 flex-col items-center gap-2 text-center select-none",
                children: [i, o],
              })),
              (q[54] = i),
              (q[55] = o),
              (q[56] = j))
            : (j = q[56]),
          (x = "flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto"),
          q[57] !== B
            ? ((v =
                null == B
                  ? (0, a.jsx)("h3", {
                      className: "font-semibold",
                      children: (0, a.jsx)(T.A, {
                        id: "writingStyle.setup.improve",
                        defaultMessage: "Connect apps to improve writing (optional)",
                        description: "Heading above optional app connections that provide additional writing examples",
                      }),
                    })
                  : null),
              (q[57] = B),
              (q[58] = v))
            : (v = q[58]),
          q[59] !== W
            ? ((_ = W
                ? (0, a.jsxs)("div", {
                    role: "status",
                    className: "flex items-center justify-center gap-2 text-secondary",
                    children: [
                      (0, a.jsx)(ei.y, {}),
                      (0, a.jsx)(T.A, {
                        id: "writingStyle.apps.loading",
                        defaultMessage: "Checking connected apps…",
                        description:
                          "Status while Writing style setup checks plugins, host availability and account links",
                      }),
                    ],
                  })
                : null),
              (q[59] = W),
              (q[60] = _))
            : (_ = q[60]),
          (A =
            null != D && null == B
              ? (0, a.jsx)("div", {
                  className: er.r,
                  children: ed.map((e) => {
                    let t = eu[e],
                      n = s?.filter((t) => t.category === e),
                      i = null != n && n.length > 0
                    return (0, a.jsx)(
                      el.ic,
                      {
                        className: "justify-between max-sm:flex-wrap",
                        variant: "featured",
                        icon: (0, a.jsx)(t, {}),
                        label: (0, a.jsx)(T.A, {
                          id: "writingStyle.setup.category",
                          defaultMessage: "{category, select, email {Email} messaging {Messaging} other {Documents}}",
                          description: "Writing category label in setup; category is email, messaging or documents",
                          values: { category: e },
                        }),
                        control: (0, a.jsxs)(a.Fragment, {
                          children: [
                            i
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(J.v, { ariaLabel: ec.formatList(n.map(eg)), children: n.map(em) }),
                                    (0, a.jsx)(T.A, {
                                      id: "writingStyle.apps.connected",
                                      defaultMessage: "Connected",
                                      description: "Status of an app that can supply the user's writing examples",
                                    }),
                                  ],
                                })
                              : null,
                            (0, a.jsx)(ee.$, {
                              type: "button",
                              color: "ghostSecondary",
                              size: "toolbar",
                              disabled: l,
                              "aria-label": i
                                ? ec.formatMessage(
                                    {
                                      id: "writingStyle.setup.connectedCategoryAction",
                                      defaultMessage:
                                        "{category, select, email {Connect more email apps} messaging {Connect more messaging apps} other {Connect more document apps}}. Connected: {apps}",
                                      description:
                                        "Accessible name for the connected-app chevron in Writing style setup. It opens that category picker; category is email, messaging or documents, and apps is the complete localized list of connected product names.",
                                    },
                                    { category: e, apps: ec.formatList(n.map(ef)) },
                                  )
                                : ec.formatMessage(
                                    {
                                      id: "writingStyle.setup.openCategory",
                                      defaultMessage:
                                        "{category, select, email {Set up email} messaging {Set up messaging} other {Set up documents}}",
                                      description:
                                        "Accessible action opening a category's app picker in Writing style setup, including with connected apps; category is email, messaging or documents",
                                    },
                                    { category: e },
                                  ),
                              onClick: () => C(e),
                              children: (0, a.jsx)(T.A, {
                                id: "writingStyle.setup.setUp",
                                defaultMessage: "Set up",
                                description: "Opens the optional app picker for a writing category",
                              }),
                            }),
                          ],
                        }),
                      },
                      e,
                    )
                  }),
                })
              : null),
          (q[0] = D),
          (q[1] = B),
          (q[2] = F),
          (q[3] = ec),
          (q[4] = Q),
          (q[5] = W),
          (q[6] = U),
          (q[7] = G),
          (q[8] = Z),
          (q[9] = $),
          (q[10] = H),
          (q[11] = t),
          (q[12] = n),
          (q[13] = l),
          (q[14] = r),
          (q[15] = c),
          (q[16] = d),
          (q[17] = u),
          (q[18] = p),
          (q[19] = f),
          (q[20] = m),
          (q[21] = g),
          (q[22] = h),
          (q[23] = y),
          (q[24] = b),
          (q[25] = x),
          (q[26] = w),
          (q[27] = v),
          (q[28] = _),
          (q[29] = A),
          (q[30] = k),
          (q[31] = j),
          (q[32] = I),
          (q[33] = S))
      } else
        ((t = q[11]),
          (n = q[12]),
          (l = q[13]),
          (r = q[14]),
          (c = q[15]),
          (d = q[16]),
          (u = q[17]),
          (p = q[18]),
          (f = q[19]),
          (m = q[20]),
          (g = q[21]),
          (h = q[22]),
          (y = q[23]),
          (b = q[24]),
          (x = q[25]),
          (w = q[26]),
          (v = q[27]),
          (_ = q[28]),
          (A = q[29]),
          (k = q[30]),
          (j = q[31]),
          (I = q[32]),
          (S = q[33]))
      ;(q[61] !== D || q[62] !== B || q[63] !== Q || q[64] !== es || q[65] !== K || q[66] !== H
        ? ((C =
            null != D && null != B
              ? (0, a.jsx)(eo, {
                  apps: D.filter((e) => e.category === B),
                  isContinuing: Q || es,
                  pendingAppId: H,
                  onConnect: K,
                })
              : null),
          (q[61] = D),
          (q[62] = B),
          (q[63] = Q),
          (q[64] = es),
          (q[65] = K),
          (q[66] = H),
          (q[67] = C))
        : (C = q[67]),
        q[68] !== l || q[69] !== L || q[70] !== es || q[71] !== X
          ? ((N =
              null != L
                ? (0, a.jsxs)("div", {
                    role: "alert",
                    className: "flex flex-col items-center gap-2",
                    children: [
                      (0, a.jsx)("p", { children: L }),
                      (0, a.jsx)(ee.$, {
                        type: "button",
                        color: "secondary",
                        disabled: l || es,
                        loading: es,
                        onClick: X,
                        children: (0, a.jsx)(T.A, {
                          id: "writingStyle.retry",
                          defaultMessage: "Retry",
                          description:
                            "Button to retry loading writing style or source app information after a failure",
                        }),
                      }),
                    ],
                  })
                : null),
            (q[68] = l),
            (q[69] = L),
            (q[70] = es),
            (q[71] = X),
            (q[72] = N))
          : (N = q[72]),
        q[73] !== x || q[74] !== C || q[75] !== N || q[76] !== v || q[77] !== _ || q[78] !== A
          ? ((E = (0, a.jsxs)("div", { className: x, children: [v, _, A, C, N] })),
            (q[73] = x),
            (q[74] = C),
            (q[75] = N),
            (q[76] = v),
            (q[77] = _),
            (q[78] = A),
            (q[79] = E))
          : (E = q[79]))
      let ey = !r
      return (
        q[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)(T.A, {
              id: "writingStyle.setup.showMe",
              defaultMessage: "Show me",
              description:
                "Saves writing-style personalization and starts a demonstration in chat; connecting apps is optional",
            })),
            (q[80] = O))
          : (O = q[80]),
        q[81] !== Q || q[82] !== ey
          ? ((M = (0, a.jsx)("div", {
              className: "flex shrink-0 flex-col gap-2",
              children: (0, a.jsx)(ee.$, {
                type: "submit",
                size: "beaconAction",
                "aria-busy": Q,
                disabled: ey,
                loading: Q,
                children: O,
              }),
            })),
            (q[81] = Q),
            (q[82] = ey),
            (q[83] = M))
          : (M = q[83]),
        q[84] !== E || q[85] !== M || q[86] !== k || q[87] !== j
          ? ((P = (0, a.jsxs)("div", { className: k, children: [j, E, M] })),
            (q[84] = E),
            (q[85] = M),
            (q[86] = k),
            (q[87] = j),
            (q[88] = P))
          : (P = q[88]),
        q[89] !== t ||
        q[90] !== c ||
        q[91] !== d ||
        q[92] !== u ||
        q[93] !== p ||
        q[94] !== f ||
        q[95] !== m ||
        q[96] !== P ||
        q[97] !== I ||
        q[98] !== S
          ? ((R = (0, a.jsxs)(t, { as: I, size: S, variant: c, className: d, onSubmit: u, children: [p, f, m, P] })),
            (q[89] = t),
            (q[90] = c),
            (q[91] = d),
            (q[92] = u),
            (q[93] = p),
            (q[94] = f),
            (q[95] = m),
            (q[96] = P),
            (q[97] = I),
            (q[98] = S),
            (q[99] = R))
          : (R = q[99]),
        q[100] !== n || q[101] !== g || q[102] !== h || q[103] !== y || q[104] !== b || q[105] !== w || q[106] !== R
          ? ((z = (0, a.jsx)(n, { open: g, size: h, variant: y, onOpenChange: b, contentProps: w, children: R })),
            (q[100] = n),
            (q[101] = g),
            (q[102] = h),
            (q[103] = y),
            (q[104] = b),
            (q[105] = w),
            (q[106] = R),
            (q[107] = z))
          : (z = q[107]),
        z
      )
    }
    function ef(e) {
      return e.name
    }
    function em(e) {
      return (0, a.jsx)(
        X.R,
        {
          className: "size-5",
          alt: "",
          logoUrl: e.logoUrl,
          logoDarkUrl: e.logoDarkUrl,
          fallback: (0, a.jsx)(ea.wdY, {}),
        },
        e.id,
      )
    }
    function eg(e) {
      return e.name
    }
    function eh(e) {
      return "connected" === e.connection
    }
    var ey = n("SaEY")
    let eb = [
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
    function ex(e, t, n, a, i, l) {
      let r = n?.apps.map(({ id: e }) => (0, P.$)(e)),
        o = ev(t.id, n, l),
        s = o?.plugin ?? n?.summary,
        c = null == l ? s?.installed === !0 : null != o,
        d = i?.filter((e) => "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::")),
        p = null == n ? void 0 : ew(n.apps, i),
        f = null != n && n.apps.length > 0 && null == p,
        m = a?.filter((e) => r?.includes((0, P.$)(e.id))),
        g = r?.every((e) => m?.some((t) => (0, P.$)(t.id) === e && t.isAccessible && t.isEnabled)),
        h = "disconnected"
      return (
        null == s ||
        r?.length === 0 ||
        (0, ey.Ei)(s) ||
        "NOT_AVAILABLE" === s.installPolicy ||
        ((0, u.e)(e) && m?.some((e) => !e.isEnabled))
          ? (h = "unavailable")
          : (c && !s.enabled) || m?.some((e) => !e.isEnabled)
            ? (h = "disabled")
            : f && g
              ? (h = "connected")
              : d?.some(
                    (e) =>
                      null != p && (0, P.$)(p.id) === (0, P.$)(e.connector_id) && "REAUTH_REQUIRED" === e.auth_status,
                  )
                ? (h = "reauth")
                : c && (h = f ? "refresh" : "connect"),
        {
          ...t,
          name: n?.summary.interface?.displayName ?? t.name,
          logoUrl: n?.summary.interface?.logoUrl ?? null,
          logoDarkUrl: n?.summary.interface?.logoUrlDark ?? null,
          connection: h,
        }
      )
    }
    function ew(e, t) {
      return e.find(
        (e) =>
          !t?.some(
            (t) =>
              "HIDDEN" !== t.visibility &&
              !t.id.startsWith("implicit_link::") &&
              (t.auth_status ?? "ACTIVE") === "ACTIVE" &&
              (0, P.$)(t.connector_id) === (0, P.$)(e.id),
          ),
      )
    }
    function ev(e, t, n) {
      return n?.find(
        ({ plugin: n, canonicalAppId: a }) =>
          n.remotePluginId === e ||
          n.id === t?.summary.id ||
          (null != a && t?.apps.some(({ id: e }) => (0, P.$)(e) === (0, P.$)(a))),
      )
    }
    function e_(e) {
      let t,
        n,
        r,
        d,
        g,
        h,
        y,
        b,
        x,
        v,
        _,
        A,
        k,
        j,
        I,
        G,
        Y,
        X,
        J,
        ee,
        et,
        en,
        ea,
        ei,
        el,
        er,
        eo,
        es,
        ec,
        ed,
        eu,
        ef = (0, i.c)(146),
        {
          accountId: em,
          hostId: eg,
          userId: eh,
          workspaceRoots: ey,
          entryPoint: e_,
          onClose: ej,
          onContinue: eI,
          onManage: eS,
        } = e,
        eC = void 0 === e_ ? "unknown" : e_,
        eN = (0, l.gh)(S.u),
        eE = (0, s.A)()
      ef[0] !== em || ef[1] !== eg || ef[2] !== eh
        ? ((t = { accountId: em, userId: eh, hostId: eg }), (ef[0] = em), (ef[1] = eg), (ef[2] = eh), (ef[3] = t))
        : (t = ef[3])
      let eT = (0, l._U)(Z.K, t),
        [eO, eM] = (0, o.useState)(null),
        eP = (0, o.useRef)(null)
      ef[4] !== em || ef[5] !== eg || ef[6] !== eh
        ? ((n = { accountId: em, userId: eh, hostId: eg }), (ef[4] = em), (ef[5] = eg), (ef[6] = eh), (ef[7] = n))
        : (n = ef[7])
      let { data: eR } = (0, l._U)(Z.l, n)
      ef[8] !== eg ? ((r = { hostId: eg }), (ef[8] = eg), (ef[9] = r)) : (r = ef[9])
      let { setPluginEnabled: ez } = (0, $.zQ)(r)
      ef[10] !== eg ? ((d = { hostId: eg }), (ef[10] = eg), (ef[11] = d)) : (d = ef[11])
      let { setAppEnabled: eq } = (0, M.J)(d)
      ef[12] !== eg || ef[13] !== ey
        ? ((g = { hostId: eg, roots: ey }), (ef[12] = eg), (ef[13] = ey), (ef[14] = g))
        : (g = ef[14])
      let { data: eD, error: eF, isLoading: e$, refetch: eB } = (0, L.Kj)(g),
        [eU, eL] = (0, o.useState)(null),
        [eQ, eW] = (0, o.useState)(null),
        [eV, eH] = (0, o.useState)(null),
        [eG, eK] = (0, o.useState)(null)
      ef[15] !== eg ? ((h = { hostId: eg }), (ef[15] = eg), (ef[16] = h)) : (h = ef[16])
      let { clearPendingAppConnect: eZ, handleAppConnectOAuthStarted: eY, isAppConnectPending: eX } = (0, q.t)(h)
      ef[17] !== eX || ef[18] !== eV || ef[19] !== eU || ef[20] !== eG?.sourceId
        ? ((y = eU ?? eG?.sourceId ?? (null != eV && eX(eV.appId) ? eV.sourceId : null)),
          (ef[17] = eX),
          (ef[18] = eV),
          (ef[19] = eU),
          (ef[20] = eG?.sourceId),
          (ef[21] = y))
        : (y = ef[21])
      let eJ = y,
        e0 = (0, o.useRef)(!1),
        e1 = (0, o.useRef)(!0),
        e2 = (0, o.useRef)(null)
      ;(ef[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = () => (
            (e1.current = !0),
            () => {
              ;((e1.current = !1), e2.current?.abort(), eP.current?.abort())
            }
          )),
          (b = []),
          (ef[22] = b),
          (ef[23] = x))
        : ((b = ef[22]), (x = ef[23])),
        (0, o.useEffect)(x, b))
      let [e3, e4] = (0, o.useState)(!1),
        [e5, e6] = (0, o.useState)(!1)
      ef[24] !== eg ? ((v = { hostId: eg }), (ef[24] = eg), (ef[25] = v)) : (v = ef[25])
      let {
        data: e8,
        loadError: e7,
        isLoading: e9,
        isFetching: te,
        isHardRefetchingAppsList: tt,
        hardRefetchAppsList: tn,
      } = (0, R.Ad)(v)
      ;(ef[26] !== em || ef[27] !== eh
        ? ((_ = (0, z.dZ)({ accountId: em, userId: eh })), (ef[26] = em), (ef[27] = eh), (ef[28] = _))
        : (_ = ef[28]),
        ef[29] !== eJ ? ((A = () => null == eJ && null == eP.current), (ef[29] = eJ), (ef[30] = A)) : (A = ef[30]),
        ef[31] !== _ || ef[32] !== A
          ? ((k = { ..._, staleTime: V.D.ONE_MINUTE, refetchOnWindowFocus: A }),
            (ef[31] = _),
            (ef[32] = A),
            (ef[33] = k))
          : (k = ef[33]))
      let { data: ta, error: ti, isLoading: tl, isFetching: tr, refetch: to } = (0, C.I)(k),
        ts = (0, u.e)(eg) ? "chatgpt" : "codex"
      if (ef[34] !== em || ef[35] !== ts || ef[36] !== eh) {
        let e
        ;(ef[38] !== em || ef[39] !== ts
          ? ((e = async (e) => {
              let { signal: t } = e
              return Object.fromEntries(
                (
                  await Promise.all(
                    eb.map(async (e) => {
                      let { id: n } = e,
                        a = await H.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                          parameters: { path: { plugin_id: n } },
                          additionalHeaders: { ...(0, F.A)(ts), "ChatGPT-Account-Id": em },
                          expectedErrorStatuses: [404],
                          signal: (0, U.w)(t),
                        }).catch(ek)
                      return null == a ? null : [n, a]
                    }),
                  )
                ).filter(eA),
              )
            }),
            (ef[38] = em),
            (ef[39] = ts),
            (ef[40] = e))
          : (e = ef[40]),
          (j = (0, N.j)({
            queryKey: ["plugins", "writing-style-sources", em, eh, ts],
            queryFn: e,
            retry: !1,
            staleTime: V.D.FIVE_MINUTES,
          })),
          (ef[34] = em),
          (ef[35] = ts),
          (ef[36] = eh),
          (ef[37] = j))
      } else j = ef[37]
      let tc = j,
        { data: td, error: tu, isLoading: tp, isFetching: tf, refetch: tm } = (0, C.I)(tc)
      if (
        ef[41] !== em ||
        ef[42] !== te ||
        ef[43] !== e9 ||
        ef[44] !== eQ ||
        ef[45] !== e8 ||
        ef[46] !== eg ||
        ef[47] !== e5 ||
        ef[48] !== eF ||
        ef[49] !== e$ ||
        ef[50] !== eD ||
        ef[51] !== tt ||
        ef[52] !== ta ||
        ef[53] !== ti ||
        ef[54] !== tr ||
        ef[55] !== tl ||
        ef[56] !== e7 ||
        ef[57] !== eN ||
        ef[58] !== td ||
        ef[59] !== tu ||
        ef[60] !== tf ||
        ef[61] !== tp ||
        ef[62] !== eh
      ) {
        let e, t
        ;(ef[69] !== td
          ? ((e = (e) => {
              let { id: t } = e,
                n = td?.[t]
              return null == n ? void 0 : (0, B.xU)(n)
            }),
            (ef[69] = td),
            (ef[70] = e))
          : (e = ef[70]),
          (J = eb.map(e)),
          ef[71] !== em || ef[72] !== eN || ef[73] !== eh
            ? ((t = () =>
                e1.current && eN.get(p.tT) === em && eN.get(f.PO).userId === eh && "allowed" === eN.get(m.lN).status),
              (ef[71] = em),
              (ef[72] = eN),
              (ef[73] = eh),
              (ef[74] = t))
            : (t = ef[74]),
          (G = t),
          (Y = e$ || e9 || tl || tp),
          (I = e5 || null != eQ || null != eF || null != e7 || null != ti || null != tu),
          (X = te || tt || tr || tf),
          (ee =
            null == eD || null == e8 || null == ta || null == td
              ? void 0
              : eb.map((e, t) => ex(eg, e, J[t], e8, ta, eD))),
          (ef[41] = em),
          (ef[42] = te),
          (ef[43] = e9),
          (ef[44] = eQ),
          (ef[45] = e8),
          (ef[46] = eg),
          (ef[47] = e5),
          (ef[48] = eF),
          (ef[49] = e$),
          (ef[50] = eD),
          (ef[51] = tt),
          (ef[52] = ta),
          (ef[53] = ti),
          (ef[54] = tr),
          (ef[55] = tl),
          (ef[56] = e7),
          (ef[57] = eN),
          (ef[58] = td),
          (ef[59] = tu),
          (ef[60] = tf),
          (ef[61] = tp),
          (ef[62] = eh),
          (ef[63] = I),
          (ef[64] = G),
          (ef[65] = Y),
          (ef[66] = X),
          (ef[67] = J),
          (ef[68] = ee))
      } else ((I = ef[63]), (G = ef[64]), (Y = ef[65]), (X = ef[66]), (J = ef[67]), (ee = ef[68]))
      let tg = ee
      ef[75] !== tn || ef[76] !== eg || ef[77] !== G || ef[78] !== eB || ef[79] !== to || ef[80] !== tm
        ? ((et = async (e) => {
            let [t, n, a, i] = await Promise.all([
              tn(),
              to({ throwOnError: !0 }),
              eB({ throwOnError: !0, cancelRefetch: !1 }),
              tm({ throwOnError: !0, cancelRefetch: !1 }),
            ])
            if (!G()) return null
            let l = eb.findIndex((t) => {
                let { id: n } = t
                return n === e
              }),
              r = null == e ? void 0 : i.data?.[e]
            return l < 0 ? null : ex(eg, eb[l], null == r ? void 0 : (0, B.xU)(r), t, n.data, a.data).connection
          }),
          (ef[75] = tn),
          (ef[76] = eg),
          (ef[77] = G),
          (ef[78] = eB),
          (ef[79] = to),
          (ef[80] = tm),
          (ef[81] = et))
        : (et = ef[81])
      let th = et,
        ty = eG?.app == null ? O.B : W.Z
      ef[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (0, E.createPortal)(
            (0, a.jsx)(D.U, { className: "pointer-events-none fixed inset-0" }),
            document.body,
          )),
          (ef[82] = en))
        : (en = ef[82])
      let tb = eR?.enabled === !0
      ;(ef[83] !== eC || ef[84] !== eN
        ? ((ea = (e) => {
            ;(eM(e),
              null != e &&
                eN
                  .get(c.T$)
                  .count("default", "write_like_me.setup_funnel", {
                    category: e,
                    entry_point: eC,
                    stage: "category_selected",
                  }))
          }),
          (ef[83] = eC),
          (ef[84] = eN),
          (ef[85] = ea))
        : (ea = ef[85]),
        ef[86] !== I
          ? ((ei = I
              ? (0, a.jsx)(T.A, {
                  id: "writingStyle.apps.error",
                  defaultMessage: "Couldn't finish Writing style setup. Try again.",
                  description: "Recoverable error loading sources, saving Writing style, or starting its ordinary chat",
                })
              : null),
            (ef[86] = I),
            (ef[87] = ei))
          : (ei = ef[87]))
      let tx = e3 || eT.isPending,
        tw = Y && null == tg
      return (
        ef[88] !== ej
          ? ((el = () => {
              ;((e1.current = !1), e2.current?.abort(), eP.current?.abort(), ej())
            }),
            (ef[88] = ej),
            (ef[89] = el))
          : (el = ef[89]),
        ef[90] !== eC ||
        ef[91] !== eQ ||
        ef[92] !== e8 ||
        ef[93] !== eg ||
        ef[94] !== eD ||
        ef[95] !== G ||
        ef[96] !== X ||
        ef[97] !== ta ||
        ef[98] !== eJ ||
        ef[99] !== J ||
        ef[100] !== th ||
        ef[101] !== eN ||
        ef[102] !== eq ||
        ef[103] !== ez
          ? ((er = (e) => {
              var t
              let n, a
              if (!G() || null != eJ || X || null != eP.current) return
              let i = eb.findIndex((t) => {
                  let { id: n } = t
                  return n === e.id
                }),
                l = J[i],
                r = ev(e.id, l, eD),
                o = null == l ? void 0 : { ...l, summary: r?.plugin ?? l.summary }
              if (null == o || "unavailable" === e.connection || ("connected" === e.connection && eQ !== e.id)) return
              ;(e2.current?.abort(), (e2.current = null), eW(null), eH(null), (e0.current = !1))
              let s =
                ((t = { category: e.category, connector: eb[i]?.connector ?? "unknown", entry_point: eC }),
                (n = performance.now()),
                (a = !1),
                eN.get(c.T$).count("default", "write_like_me.connector_engagement", { ...t, outcome: "started" }),
                (e) => {
                  a ||
                    ((a = !0),
                    eN.get(c.T$).count("default", "write_like_me.connector_engagement", { ...t, outcome: e }),
                    eN
                      .get(c.T$)
                      .hist(
                        "default",
                        "write_like_me.connector_duration_ms",
                        { ...t, outcome: e },
                        performance.now() - n,
                      ))
                })
              if ("reauth" === e.connection || "connect" === e.connection) {
                let t = ew(o.apps, ta)?.id,
                  n = ta?.find(
                    (e) =>
                      "HIDDEN" !== e.visibility &&
                      !e.id.startsWith("implicit_link::") &&
                      "REAUTH_REQUIRED" === e.auth_status &&
                      null != t &&
                      (0, P.$)(t) === (0, P.$)(e.connector_id),
                  ),
                  a = e8?.find((e) => {
                    let { id: n } = e
                    return (0, P.$)(n) === (0, P.$)(t ?? "")
                  })
                if (null == t || ("reauth" === e.connection && null == n)) {
                  ;(s("failure"), eW(e.id))
                  return
                }
                eK({ app: a, connectorId: t, linkId: n?.id, sourceId: e.id, recordOutcome: s })
                return
              }
              ;(eL(e.id), e6(!1))
              let d = new AbortController()
              ;((e2.current = d),
                (async () => {
                  if ("disabled" === e.connection)
                    for (let t of (null == r ||
                      r.plugin.enabled ||
                      (await ez({ pluginId: o.summary.id, pluginDisplayName: e.name, plugin: o.summary, enabled: !0 })),
                    e8 ?? [])) {
                      if (!G() || d.signal.aborted) return
                      !t.isEnabled &&
                        o.apps.some((e) => {
                          let { id: n } = e
                          return (0, P.$)(n) === (0, P.$)(t.id)
                        }) &&
                        (await eq({ appId: t.id, enabled: !0 }))
                    }
                  else if ("refresh" !== e.connection && "connected" !== e.connection) {
                    let t = await (0, K.U)(eN, (0, Q.qA)(o), { hostId: eg, signal: d.signal })
                    if ("installed" !== t) {
                      G() &&
                        !d.signal.aborted &&
                        (s("failed" === t ? "failure" : "cancelled"), eW("failed" === t ? e.id : null))
                      return
                    }
                  }
                  if (G() && !d.signal.aborted) {
                    let t = await th(e.id)
                    G() &&
                      !d.signal.aborted &&
                      ("connected" === t
                        ? s("success")
                        : "connect" === t || "reauth" === t
                          ? s("connection_required")
                          : s("failure"),
                      eW("connected" === t || "connect" === t || "reauth" === t ? null : e.id))
                  }
                })()
                  .catch(() => {
                    G() && !d.signal.aborted && (s("failure"), eW(e.id))
                  })
                  .finally(() => {
                    e2.current === d && ((e2.current = null), e1.current && eL(null))
                  }))
            }),
            (ef[90] = eC),
            (ef[91] = eQ),
            (ef[92] = e8),
            (ef[93] = eg),
            (ef[94] = eD),
            (ef[95] = G),
            (ef[96] = X),
            (ef[97] = ta),
            (ef[98] = eJ),
            (ef[99] = J),
            (ef[100] = th),
            (ef[101] = eN),
            (ef[102] = eq),
            (ef[103] = ez),
            (ef[104] = er))
          : (er = ef[104]),
        ef[105] !== em ||
        ef[106] !== eO ||
        ef[107] !== eC ||
        ef[108] !== eg ||
        ef[109] !== eE ||
        ef[110] !== G ||
        ef[111] !== eI ||
        ef[112] !== eJ ||
        ef[113] !== eT ||
        ef[114] !== eN ||
        ef[115] !== eh
          ? ((eo = () => {
              if (
                !G() ||
                null != eP.current ||
                null != eJ ||
                eN.get(Z.K, { accountId: em, userId: eh, hostId: eg }).isPending
              )
                return
              let e = new AbortController()
              ;((eP.current = e),
                eN
                  .get(c.T$)
                  .count("default", "write_like_me.setup_funnel", {
                    category: eO ?? "not_applicable",
                    entry_point: eC,
                    stage: "use_clicked",
                  }),
                e4(!0),
                e6(!1),
                (async () => {
                  let t = await eT.mutateAsync({
                    enabled: !0,
                    prepareForChat: !0,
                    prepareForChatSignal: e.signal,
                    entryPoint: eC,
                    hostId: eg,
                    signal: new AbortController().signal,
                  })
                  "cancelled" !== t.status &&
                    G() &&
                    ("failed" === t.status ? e6(!0) : G() && !e.signal.aborted && (await eI((0, w.o)(eE), e.signal)))
                })()
                  .catch(() => {
                    G() && e6(!0)
                  })
                  .finally(() => {
                    ;((eP.current = null), e1.current && e4(!1))
                  }))
            }),
            (ef[105] = em),
            (ef[106] = eO),
            (ef[107] = eC),
            (ef[108] = eg),
            (ef[109] = eE),
            (ef[110] = G),
            (ef[111] = eI),
            (ef[112] = eJ),
            (ef[113] = eT),
            (ef[114] = eN),
            (ef[115] = eh),
            (ef[116] = eo))
          : (eo = ef[116]),
        ef[117] !== G || ef[118] !== th
          ? ((es = () => {
              th()
                .then(() => {
                  G() && (e6(!1), eW(null))
                })
                .catch(() => {
                  G() && e6(!0)
                })
            }),
            (ef[117] = G),
            (ef[118] = th),
            (ef[119] = es))
          : (es = ef[119]),
        ef[120] !== tg ||
        ef[121] !== eO ||
        ef[122] !== X ||
        ef[123] !== eS ||
        ef[124] !== eJ ||
        ef[125] !== tb ||
        ef[126] !== ea ||
        ef[127] !== ei ||
        ef[128] !== tx ||
        ef[129] !== tw ||
        ef[130] !== el ||
        ef[131] !== er ||
        ef[132] !== eo ||
        ef[133] !== es
          ? ((ec = (0, a.jsx)(ep, {
              apps: tg,
              enabled: tb,
              onManage: eS,
              category: eO,
              onCategoryChange: ea,
              error: ei,
              isContinuing: tx,
              isLoading: tw,
              isRefreshing: X,
              pendingAppId: eJ,
              onClose: el,
              onConnect: er,
              onContinue: eo,
              onRetry: es,
            })),
            (ef[120] = tg),
            (ef[121] = eO),
            (ef[122] = X),
            (ef[123] = eS),
            (ef[124] = eJ),
            (ef[125] = tb),
            (ef[126] = ea),
            (ef[127] = ei),
            (ef[128] = tx),
            (ef[129] = tw),
            (ef[130] = el),
            (ef[131] = er),
            (ef[132] = eo),
            (ef[133] = es),
            (ef[134] = ec))
          : (ec = ef[134]),
        ef[135] !== ty ||
        ef[136] !== eZ ||
        ef[137] !== eY ||
        ef[138] !== eg ||
        ef[139] !== G ||
        ef[140] !== eG ||
        ef[141] !== th
          ? ((ed =
              null != eG
                ? (0, a.jsx)(ty, {
                    oauthReferrer: "writing_style_setup",
                    app: eG.app ?? null,
                    connectorId: eG.connectorId,
                    hostId: eg,
                    isReconnecting: eG?.linkId != null,
                    reauthLinkId: eG?.linkId,
                    beforeConnect: async () => G(),
                    onOpenChange: (e) => {
                      e || (e0.current || eG.recordOutcome("cancelled"), eK(null))
                    },
                    onExternalConnectStarted: () => eG.recordOutcome("connection_required"),
                    onOAuthStarted: (e) => {
                      eG.recordOutcome("connection_required")
                      let t = eY(e)
                      if (null != eG && null != t) {
                        let n = new AbortController()
                        ;((e2.current = n),
                          n.signal.addEventListener("abort", () => eZ({ oauthState: t }), { once: !0 }),
                          eH({ sourceId: eG.sourceId, appId: e.app.id, oauthState: t }))
                      }
                    },
                    onConnectFailed: () => {
                      G() && (eG.recordOutcome("failure"), eW(eG?.sourceId ?? null))
                    },
                    onConnected: async () => {
                      if (((e0.current = !0), G()))
                        try {
                          let e = await th(eG?.sourceId)
                          G() &&
                            (eG.recordOutcome("connected" === e ? "success" : "connection_required"),
                            eW("connected" === e ? null : (eG?.sourceId ?? null)))
                        } catch {
                          G() && (eG.recordOutcome("failure"), eW(eG?.sourceId ?? null))
                        }
                    },
                  })
                : null),
            (ef[135] = ty),
            (ef[136] = eZ),
            (ef[137] = eY),
            (ef[138] = eg),
            (ef[139] = G),
            (ef[140] = eG),
            (ef[141] = th),
            (ef[142] = ed))
          : (ed = ef[142]),
        ef[143] !== ec || ef[144] !== ed
          ? ((eu = (0, a.jsxs)(a.Fragment, { children: [en, ec, ed] })), (ef[143] = ec), (ef[144] = ed), (ef[145] = eu))
          : (eu = ef[145]),
        eu
      )
    }
    function eA(e) {
      return null != e
    }
    function ek(e) {
      if (e instanceof G.fk && 404 === e.status) return null
      throw e
    }
    function ej(e) {
      let t,
        n,
        C,
        N,
        E,
        T,
        O,
        M,
        P,
        R,
        z = (0, i.c)(50),
        { accountId: q, userId: D, hostId: F, entryPoint: $, onClose: B, workspaceRoots: U, project: L } = e,
        Q = void 0 === $ ? "unknown" : $,
        W = (0, l.gh)(S.u),
        V = (0, s.A)(),
        { userId: H } = (0, g.As)(),
        G = (0, l.Ul)(p.tT),
        K = (0, l.Ul)(m.lN),
        Z = (0, o.useRef)(null),
        Y = (0, o.useRef)(!1)
      z[0] !== Q || z[1] !== W
        ? ((t = () => {
            null == Z.current &&
              ((Z.current = performance.now()),
              W.get(c.T$).count("default", "write_like_me.setup_funnel", {
                category: "not_applicable",
                entry_point: Q,
                stage: "shown",
              }))
          }),
          (z[0] = Q),
          (z[1] = W),
          (z[2] = t))
        : (t = z[2])
      let X = (0, o.useEffectEvent)(t)
      z[3] !== Q || z[4] !== W
        ? ((n = (e) => {
            Y.current ||
              ((Y.current = !0),
              W.get(c.T$).count("default", "write_like_me.setup_funnel", {
                category: "not_applicable",
                entry_point: Q,
                stage: e,
              }),
              W.get(c.T$).hist(
                "default",
                "write_like_me.setup_duration_ms",
                { entry_point: Q, outcome: e },
                null == Z.current ? 0 : performance.now() - Z.current,
              ))
          }),
          (z[3] = Q),
          (z[4] = W),
          (z[5] = n))
        : (n = z[5])
      let J = n
      z[6] !== W
        ? ((C = () => {
            ;(0, A.Oo)(W, ej)
          }),
          (z[6] = W),
          (z[7] = C))
        : (C = z[7])
      let ee = (0, o.useEffectEvent)(C)
      if (
        (z[8] !== q || z[9] !== ee || z[10] !== G || z[11] !== H || z[12] !== X || z[13] !== D || z[14] !== K.status
          ? ((N = () => {
              G !== q || H !== D || "allowed" !== K.status ? ee() : X()
            }),
            (z[8] = q),
            (z[9] = ee),
            (z[10] = G),
            (z[11] = H),
            (z[12] = X),
            (z[13] = D),
            (z[14] = K.status),
            (z[15] = N))
          : (N = z[15]),
        z[16] !== q || z[17] !== G || z[18] !== H || z[19] !== D || z[20] !== K.status
          ? ((E = [G, H, q, D, K.status]),
            (z[16] = q),
            (z[17] = G),
            (z[18] = H),
            (z[19] = D),
            (z[20] = K.status),
            (z[21] = E))
          : (E = z[21]),
        (0, o.useEffect)(N, E),
        G !== q || H !== D || "allowed" !== K.status)
      )
        return null
      let et = `${q}:${D}:${F}`
      return (
        z[22] !== U ? ((T = U ?? []), (z[22] = U), (z[23] = T)) : (T = z[23]),
        z[24] !== B || z[25] !== J
          ? ((O = () => {
              ;(J("dismissed"), B())
            }),
            (z[24] = B),
            (z[25] = J),
            (z[26] = O))
          : (O = z[26]),
        z[27] !== B || z[28] !== J || z[29] !== W
          ? ((M = () => {
              ;(J("dismissed"), B(), W.get(d.gM).navigate("/settings/personalization"))
            }),
            (z[27] = B),
            (z[28] = J),
            (z[29] = W),
            (z[30] = M))
          : (M = z[30]),
        z[31] !== q ||
        z[32] !== F ||
        z[33] !== V ||
        z[34] !== B ||
        z[35] !== L ||
        z[36] !== J ||
        z[37] !== W ||
        z[38] !== D
          ? ((P = async (e, t) => {
              let n = () =>
                !t.aborted && W.get(p.tT) === q && W.get(f.PO).userId === D && "allowed" === W.get(m.lN).status
              if (!n()) return
              if ((0, u.e)(F)) {
                let a = await W.query.getOrFetch(h.av)
                if (!n()) return
                let i = (0, w.Y)(a),
                  l = (0, y.co)(),
                  r = W.get(d.gM).prepareNavigation((0, x.mv)(l))
                if (null == r || (await r(), !n())) return
                let o = await (0, b.submitChatGPTCompletion)(W, {
                  conversationId: l,
                  conversationOrigin: "tpp",
                  prompt: e,
                  model: i.slug,
                  thinkingEffort: i.thinkingEffort,
                  requireDispatchAcceptance: !0,
                  startupSignal: t,
                  isSubmissionCurrent: n,
                })
                if (!n()) return
                if (null == o) throw Error("Writing style sample was not accepted")
                ;(J("completed"), B())
                return
              }
              let a = F === r.iwv
              if (a && !W.get(v.Hn)) throw Error("Writing style cloud execution is unavailable")
              a || "local" === F || L?.type === "remote"
                ? (0, j.startNewConversation)(W, {
                    activeProject: a ? null : (0, I.QO)(L ?? null),
                    codexAppMode: a ? "codex" : void 0,
                    prefillPrompt: e,
                    prefillComposerMode: "local",
                    prefillCloudThreadPrototype: a,
                    startInSidebar: !0,
                    onNavigate: () => {
                      ;((0, _.Rm)(W, "work"), J("completed"), B())
                    },
                  })
                : W.get(k.Id).danger(
                    V.formatMessage({
                      id: "writingStyle.remoteProjectRequired",
                      defaultMessage:
                        "Close this dialog and select a project on the remote host to start Writing style",
                      description:
                        "Actionable error when starting a Writing style sample on an SSH host without a selected remote project",
                    }),
                    { errorAnalytics: { toastId: "writingStyle.remoteProjectRequired" } },
                  )
            }),
            (z[31] = q),
            (z[32] = F),
            (z[33] = V),
            (z[34] = B),
            (z[35] = L),
            (z[36] = J),
            (z[37] = W),
            (z[38] = D),
            (z[39] = P))
          : (P = z[39]),
        z[40] !== q ||
        z[41] !== Q ||
        z[42] !== F ||
        z[43] !== M ||
        z[44] !== P ||
        z[45] !== et ||
        z[46] !== T ||
        z[47] !== O ||
        z[48] !== D
          ? ((R = (0, a.jsx)(
              e_,
              {
                accountId: q,
                hostId: F,
                entryPoint: Q,
                userId: D,
                workspaceRoots: T,
                onClose: O,
                onManage: M,
                onContinue: P,
              },
              et,
            )),
            (z[40] = q),
            (z[41] = Q),
            (z[42] = F),
            (z[43] = M),
            (z[44] = P),
            (z[45] = et),
            (z[46] = T),
            (z[47] = O),
            (z[48] = D),
            (z[49] = R))
          : (R = z[49]),
        R
      )
    }
  },
  z7pR(e, t, n) {
    var a = n("loz7"),
      i = n("Yewb")
    n.d(
      t,
      {},
      {
        U: function (e, t, { hostId: n, signal: l, appConnectOptions: r, suppressSuccessToast: o }) {
          return new Promise((s) => {
            let c = null,
              d = !1,
              u = (e) => {
                d || ((d = !0), l.removeEventListener("abort", p), s(e))
              },
              p = () => {
                let t = e.get(a.Tx)
                ;(null != c && "closed" !== t.kind && t.requestId === c && e.set(a.Tx, (0, a.Fi)(t)), u("cancelled"))
              }
            if ((l.addEventListener("abort", p, { once: !0 }), l.aborted)) return void p()
            if (
              !(0, i.installPlugin)(e, t, {
                hostId: n,
                appConnectOptions: r,
                suppressSuccessToast: o,
                onSuccess: () => u("installed"),
                onCancel: () => u("cancelled"),
                onError: () => u("failed"),
              })
            )
              return void u("failed")
            let f = e.get(a.Tx)
            c = "closed" === f.kind ? null : (f.requestId ?? null)
          })
        },
      },
    )
  },
  hUKi(e, t, n) {
    var a = n("zTeN"),
      i = n("DBCl"),
      l = n("PFjh"),
      r = n("pDRe"),
      o = n("OiCI"),
      s = n("SPnB"),
      c = n("eFn4"),
      d = n("WzdM"),
      u = n("ugfi"),
      p = n("jShI"),
      f = n("cLdu"),
      m = n("ueue"),
      g = n("sLlu"),
      h = n("OWtl"),
      y = n("rvFo"),
      b = n("HFSu"),
      x = n("rTZC"),
      w = n("z7pR")
    let v = (0, a.vU)(h.u, (e, { scope: t, get: n }) => {
        var a
        return {
          queryKey: ((a = e), [...m.qw, "writing-style-preference", x.b, a.accountId, a.userId, a.hostId]),
          queryFn: ({ signal: n }) =>
            (async function (e, t, n) {
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let a = AbortSignal.any([n, AbortSignal.timeout(3e4)]),
                [{ plugin_id: i }, l] = await Promise.all([
                  b.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                    parameters: { path: { app_id: x.b } },
                    additionalHeaders: (0, d.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                    signal: a,
                  }),
                  (0, f.yf)(e, {
                    productContext: (0, r.e)(t.hostId) ? "chatgpt" : "codex",
                    surface: "settings",
                    signal: a,
                  }),
                ])
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let o = l.find((e) => e.plugin.remotePluginId === i) ?? l.find((e) => e.canonicalAppId === x.b),
                s =
                  o?.servicePlugin ??
                  (null == i
                    ? null
                    : await b.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                        parameters: { path: { plugin_id: i } },
                        additionalHeaders: (0, d.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                        signal: a,
                      }))
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              return {
                plugin: s,
                installed: null != o,
                enabled: o?.plugin.enabled === !0,
                canInstall:
                  s?.id === i &&
                  s.canonical_app_id === x.b &&
                  "ENABLED" === s.status &&
                  "NOT_AVAILABLE" !== s.installation_policy,
              }
            })(t, e, n),
          enabled: n(o.tT) === e.accountId && n(s.PO).userId === e.userId && "allowed" === n(c.lN).status,
          retry: !1,
          staleTime: y.D.ONE_MINUTE,
        }
      }),
      _ = (0, a.c4)(
        h.u,
        (e, { scope: t }) => ({
          mutationKey: ["writing-style-preference", e.accountId, e.userId],
          mutationFn: async ({ entryPoint: a = "unknown", hostId: o, ...s }) => {
            let c = performance.now(),
              m = { enabled: String(s.enabled), entry_point: a }
            t.get(l.T$).count("default", "write_like_me.preference_change", { ...m, outcome: "started" })
            let h = await (async function (
                e,
                t,
                { enabled: a, signal: l, prepareForChat: o = !1, prepareForChatSignal: s },
              ) {
                let c = () => !l.aborted && A(e, t)
                if (!c()) return { status: "cancelled" }
                try {
                  let m = e.query.getData(v, t) ?? (await e.query.getOrFetch(v, t))
                  if (!c()) return { status: "cancelled" }
                  if ((null != m.plugin && m.plugin.canonical_app_id !== x.b) || (a && !m.canInstall))
                    return { status: "failed" }
                  if (a && !m.installed && null != m.plugin) {
                    let n = await (0, w.U)(
                      e,
                      {
                        displayName: m.plugin.release.display_name,
                        remotePluginId: m.plugin.id,
                        remoteMarketplaceName: i.xiH,
                      },
                      {
                        hostId: t.hostId,
                        signal: l,
                        suppressSuccessToast: !0,
                        appConnectOptions: { connectorId: x.b, productSku: (0, r.e)(t.hostId) ? "TPP" : "CODEX" },
                      },
                    )
                    if (!c() || "cancelled" === n) return { status: "cancelled" }
                    if ("failed" === n) return { status: "failed" }
                  } else if (!a && m.installed && null != m.plugin) {
                    let n = (0, f.YU)(m.plugin)
                    await (0, u.cu)({
                      scope: e,
                      hostId: t.hostId,
                      queryClient: e.queryClient,
                      marketplaceName: n.marketplaceName,
                      pluginId: n.plugin.id,
                      pluginName: n.plugin.name,
                      requestPluginId: m.plugin.id,
                      signal: l,
                    })
                  } else {
                    if (a && !m.enabled && null != m.plugin)
                      try {
                        await b.CodexRequest.safePost("/ps/plugins/{plugin_id}/enable", {
                          parameters: { path: { plugin_id: m.plugin.id } },
                          additionalHeaders: (0, d.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                        })
                      } finally {
                        ;(0, u.lA)((t) => (0, g.y)(e.queryClient, t))
                      }
                    if (!c()) return { status: "cancelled" }
                    ;(0, f.hE)(t.hostId) ||
                      (a && o && m.enabled) ||
                      (await (0, p.T)({ scope: e, hostId: t.hostId, queryClient: e.queryClient }))
                  }
                  if (!c()) return { status: "cancelled" }
                  await e.query.invalidate(v, t, { refetchType: "none" })
                  let h = await e.query.fetch(v, t)
                  if (!c()) return { status: "cancelled" }
                  if (!(a ? h.enabled && h.plugin?.id === m.plugin?.id : !h.installed)) return { status: "failed" }
                  if (a && o && !s?.aborted && null != h.plugin) {
                    let { prepareWritingStyleForChat: a } = await n.e(842455).then(n.bind(n, "Xxi0")),
                      i = s ?? l,
                      r = await a(e, t, h.plugin, i, () => c() && !i.aborted, m.installed)
                    if ("ready" !== r) return { status: r }
                  }
                  return c() ? { status: "saved", enabled: a } : { status: "cancelled" }
                } catch {
                  return { status: c() ? "failed" : "cancelled" }
                }
              })(t, { ...e, hostId: o }, s),
              y = { saved: "success", cancelled: "aborted", failed: "failure" }[h.status]
            return (
              t.get(l.T$).count("default", "write_like_me.preference_change", { ...m, outcome: y }),
              t
                .get(l.T$)
                .hist(
                  "default",
                  "write_like_me.preference_change_duration_ms",
                  { ...m, outcome: y },
                  performance.now() - c,
                ),
              h
            )
          },
        }),
        { excludeFieldsFromKey: ["hostId"] },
      )
    function A(e, t) {
      return e.get(o.tT) === t.accountId && e.get(s.PO).userId === t.userId && "allowed" === e.get(c.lN).status
    }
    n.d(t, {}, { K: _, l: v })
  },
  rTZC(e, t, n) {
    n.d(t, {}, { b: "connector_openai_write_like_me" })
  },
  ecE5(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      l = n("zd8w"),
      r = n("oyxz"),
      o = n("lmaZ"),
      s = n("cZk2")
    let c = (0, n("Bbed")._)(
      async () => (await Promise.all([n.e(405765), n.e(781429)]).then(n.bind(n, "eiVC"))).AppConnectModal,
      { suspendToParent: !0, errorFallback: (e) => (0, a.jsx)(d, { ...e, failed: !0 }) },
    )
    function d(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        f = (0, i.c)(18),
        { app: m, connectorId: g, onOpenChange: h, onUserDismissed: y, onPreloadFailed: b, failed: x, embedded: w } = e,
        v = void 0 !== x && x,
        _ = (0, l.useRef)(!1),
        A = null != m || null != g
      return (
        f[0] !== v || f[1] !== b || f[2] !== A
          ? ((t = () => {
              A && v && null != b && !_.current && ((_.current = !0), b())
            }),
            (n = [v, b, A]),
            (f[0] = v),
            (f[1] = b),
            (f[2] = A),
            (f[3] = t),
            (f[4] = n))
          : ((t = f[3]), (n = f[4])),
        (0, l.useEffect)(t, n),
        f[5] !== h || f[6] !== y
          ? ((c = (e) => {
              ;(e || y?.(), h(e))
            }),
            (f[5] = h),
            (f[6] = y),
            (f[7] = c))
          : (c = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(r.A, {
              id: "appConnectModal.loadError",
              defaultMessage: "Couldn’t open app connection",
              description: "Title when downloading the app connection dialog fails after retrying",
            })),
            (f[8] = d))
          : (d = f[8]),
        f[9] !== w || f[10] !== v
          ? ((u = v ? null : (0, a.jsx)(o.$, { embedded: w })), (f[9] = w), (f[10] = v), (f[11] = u))
          : (u = f[11]),
        f[12] !== w || f[13] !== v || f[14] !== A || f[15] !== c || f[16] !== u
          ? ((p = (0, a.jsx)(s.k, {
              open: A,
              size: "setup",
              onOpenChange: c,
              failed: v,
              embedded: w,
              title: d,
              children: u,
            })),
            (f[12] = w),
            (f[13] = v),
            (f[14] = A),
            (f[15] = c),
            (f[16] = u),
            (f[17] = p))
          : (p = f[17]),
        p
      )
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n = (0, i.c)(3),
            r = null != e.app || null != e.connectorId,
            [o, s] = (0, l.useState)(r)
          return (
            r && !o && s(!0),
            n[0] !== o || n[1] !== e
              ? ((t = o
                  ? (0, a.jsx)(l.Suspense, {
                      fallback: !1 === e.showLoadingDialog ? null : (0, a.jsx)(d, { ...e }),
                      children: (0, a.jsx)(c, { ...e }),
                    })
                  : null),
                (n[0] = o),
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
      i = n("QosV"),
      l = n("on57"),
      r = n("zd8w"),
      o = n("HZfM"),
      s = n("bVeK")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        n,
        r,
        o,
        s,
        c,
        d,
        u = (0, i.c)(24),
        {
          label: p,
          labelId: f,
          labelSizing: m,
          labelWeight: g,
          description: h,
          descriptionId: y,
          icon: b,
          variant: x,
          verticalAlignment: w,
        } = e,
        v = "start" === w ? "items-start" : "items-center",
        _ = "grow" === (void 0 === m ? "grow" : m) && "flex-1"
      ;(u[0] !== v || u[1] !== _
        ? ((t = (0, l.A)("flex min-w-0 gap-3", v, _)), (u[0] = v), (u[1] = _), (u[2] = t))
        : (t = u[2]),
        u[3] !== b
          ? ((n = null != b ? (0, a.jsx)("span", { className: "flex shrink-0", children: b }) : null),
            (u[3] = b),
            (u[4] = n))
          : (n = u[4]))
      let A = "featured" === x && "text-base",
        k = "recommendation" === x && "text-[13px] leading-[18.571429px]",
        j = "featured" !== x && "recommendation" !== x && "text-sm",
        I = "nested" !== x && "medium" === (void 0 === g ? "medium" : g) && "font-medium"
      return (
        u[5] !== I || u[6] !== A || u[7] !== k || u[8] !== j
          ? ((r = (0, l.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              k,
              j,
              I,
            )),
            (u[5] = I),
            (u[6] = A),
            (u[7] = k),
            (u[8] = j),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== p || u[11] !== f || u[12] !== r
          ? ((o = (0, a.jsx)("div", { id: f, className: r, children: p })),
            (u[10] = p),
            (u[11] = f),
            (u[12] = r),
            (u[13] = o))
          : (o = u[13]),
        u[14] !== h || u[15] !== y
          ? ((s = h
              ? (0, a.jsx)("div", {
                  id: y,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = y),
            (u[16] = s))
          : (s = u[16]),
        u[17] !== o || u[18] !== s
          ? ((c = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [o, s] })),
            (u[17] = o),
            (u[18] = s),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== n
          ? ((d = (0, a.jsxs)("div", { className: t, children: [n, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = n),
            (u[23] = d))
          : (d = u[23]),
        d
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
            o,
            s,
            c,
            d = (0, i.c)(18),
            { children: u, compactLabelInset: p, label: f, valueAlignment: m, variant: g } = e,
            h = void 0 === p || p,
            y = void 0 === m ? "start" : m,
            b = void 0 === g ? "default" : g,
            x =
              "compact" === b
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== x ? ((t = (0, l.A)("grid items-center", x)), (d[0] = x), (d[1] = t)) : (t = d[1]),
            d[2] !== h || d[3] !== b
              ? ((n = (0, l.A)(
                  "min-w-0",
                  "compact" === b
                    ? (0, l.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = h),
                (d[3] = b),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== f || d[6] !== n
              ? ((r = (0, a.jsx)("div", { className: n, children: f })), (d[5] = f), (d[6] = n), (d[7] = r))
              : (r = d[7]),
            d[8] !== y || d[9] !== b
              ? ((o = (0, l.A)(
                  "min-w-0",
                  "compact" === b
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, l.A)("break-words whitespace-normal text-sm text-default", "end" === y && "text-end"),
                )),
                (d[8] = y),
                (d[9] = b),
                (d[10] = o))
              : (o = d[10]),
            d[11] !== u || d[12] !== o
              ? ((s = (0, a.jsx)("div", { className: o, children: u })), (d[11] = u), (d[12] = o), (d[13] = s))
              : (s = d[13]),
            d[14] !== t || d[15] !== r || d[16] !== s
              ? ((c = (0, a.jsxs)("div", { className: t, children: [r, s] })),
                (d[14] = t),
                (d[15] = r),
                (d[16] = s),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            n,
            o,
            s,
            c = (0, i.c)(35),
            {
              label: u,
              labelSizing: p,
              labelWeight: f,
              layout: m,
              description: g,
              control: h,
              controlSizing: y,
              icon: b,
              className: x,
              id: w,
              inset: v,
              size: _,
              variant: A,
              verticalAlignment: k,
            } = e,
            j = void 0 === p ? "grow" : p,
            I = void 0 === f ? "medium" : f,
            S = void 0 === m ? "default" : m,
            C = void 0 === y ? "minimum" : y,
            N = void 0 === v || v,
            E = void 0 === _ ? "default" : _,
            T = void 0 === A ? "default" : A,
            O = void 0 === k ? "center" : k,
            M = (0, r.useId)(),
            P = null != u || null != g || null != b,
            R = "function" == typeof h,
            z = R && null != u ? `${M}-label` : void 0,
            q = R && g ? `${M}-description` : void 0,
            D = N && ("split" !== S || "default" !== T) && "px-4",
            F = N && "nested" === T && "group-data-[density=form]/settings:px-5",
            $ =
              "stacked" === T &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            B =
              "nested" === T &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            U = "stacked" !== T && ("start" === O ? "items-start" : "items-center"),
            L = "split" === S && "default" === T && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== x ||
            c[1] !== S ||
            c[2] !== E ||
            c[3] !== F ||
            c[4] !== $ ||
            c[5] !== B ||
            c[6] !== U ||
            c[7] !== L ||
            c[8] !== D ||
            c[9] !== T
              ? ((t = (0, l.A)(
                  "@container/settings-row",
                  D,
                  F,
                  $,
                  B,
                  U,
                  L,
                  "default" === S &&
                    ("default" === T || "featured" === T || "recommendation" === T) &&
                    (0, l.A)(
                      "flex justify-between",
                      "featured" === T && (0, l.A)("gap-6", "compact" === E ? "min-h-11 py-2" : "py-4"),
                      "featured" !== T && ("compact" === E ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === T && "dark:bg-secondary-ghost-hover",
                  x,
                )),
                (c[0] = x),
                (c[1] = S),
                (c[2] = E),
                (c[3] = F),
                (c[4] = $),
                (c[5] = B),
                (c[6] = U),
                (c[7] = L),
                (c[8] = D),
                (c[9] = T),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== g ||
            c[12] !== q ||
            c[13] !== P ||
            c[14] !== b ||
            c[15] !== u ||
            c[16] !== z ||
            c[17] !== j ||
            c[18] !== I ||
            c[19] !== T ||
            c[20] !== O
              ? ((n = P
                  ? (0, a.jsx)(d, {
                      label: u,
                      labelId: z,
                      labelSizing: j,
                      labelWeight: I,
                      description: g,
                      descriptionId: q,
                      icon: b,
                      variant: T,
                      verticalAlignment: O,
                    })
                  : null),
                (c[11] = g),
                (c[12] = q),
                (c[13] = P),
                (c[14] = b),
                (c[15] = u),
                (c[16] = z),
                (c[17] = j),
                (c[18] = I),
                (c[19] = T),
                (c[20] = O),
                (c[21] = n))
              : (n = c[21]),
            c[22] !== h || c[23] !== C || c[24] !== q || c[25] !== R || c[26] !== z || c[27] !== S || c[28] !== T
              ? ((o =
                  null != h && !1 !== h
                    ? (0, a.jsx)("div", {
                        className: (0, l.A)(
                          "stacked" === T && "w-full",
                          "nested" === T && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === T &&
                            (0, l.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === C && "w-full",
                            ),
                          "default" === S &&
                            ("default" === T || "featured" === T || "recommendation" === T) &&
                            (0, l.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === C ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === C && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: R ? h({ "aria-labelledby": z, "aria-describedby": q }) : h,
                      })
                    : null),
                (c[22] = h),
                (c[23] = C),
                (c[24] = q),
                (c[25] = R),
                (c[26] = z),
                (c[27] = S),
                (c[28] = T),
                (c[29] = o))
              : (o = c[29]),
            c[30] !== w || c[31] !== t || c[32] !== n || c[33] !== o
              ? ((s = (0, a.jsxs)("div", { id: w, className: t, children: [n, o] })),
                (c[30] = w),
                (c[31] = t),
                (c[32] = n),
                (c[33] = o),
                (c[34] = s))
              : (s = c[34]),
            s
          )
        },
        jj: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: l } = e
          return (
            n[0] !== l
              ? ((t = (0, a.jsx)("span", { className: "text-xs text-secondary", children: l })), (n[0] = l), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            n,
            r,
            s,
            u,
            p,
            f,
            m,
            g,
            h,
            y,
            b,
            x,
            w,
            v,
            _,
            A,
            k,
            j,
            I,
            S,
            C,
            N,
            E = (0, i.c)(54)
          E[0] !== e
            ? (({
                actions: t,
                actionsPlacement: y,
                ariaControls: n,
                ariaExpanded: r,
                ariaLabel: s,
                className: u,
                description: p,
                disabled: f,
                edgeRounding: b,
                icon: m,
                label: h,
                size: x,
                trailing: v,
                variant: w,
                ...g
              } = e),
              (E[0] = e),
              (E[1] = t),
              (E[2] = n),
              (E[3] = r),
              (E[4] = s),
              (E[5] = u),
              (E[6] = p),
              (E[7] = f),
              (E[8] = m),
              (E[9] = g),
              (E[10] = h),
              (E[11] = y),
              (E[12] = b),
              (E[13] = x),
              (E[14] = w),
              (E[15] = v))
            : ((t = E[1]),
              (n = E[2]),
              (r = E[3]),
              (s = E[4]),
              (u = E[5]),
              (p = E[6]),
              (f = E[7]),
              (m = E[8]),
              (g = E[9]),
              (h = E[10]),
              (y = E[11]),
              (b = E[12]),
              (x = E[13]),
              (w = E[14]),
              (v = E[15]))
          let T = void 0 === b ? "row" : b,
            O = void 0 === x ? "default" : x,
            M = void 0 === w ? "default" : w,
            P = "before-trailing" === (void 0 === y ? "end" : y) && !f && null != t && null != v,
            R = P ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          E[16] !== u || E[17] !== P || E[18] !== O || E[19] !== R || E[20] !== M
            ? ((_ = (0, l.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                R,
                "empty" === M
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, l.A)(
                      "px-4 text-start",
                      "nested" === M && "min-h-10 py-0.5",
                      "nested" !== M && ("large" === O ? "py-4" : "py-3"),
                      P && "gap-2",
                      !P && ("nested" === M ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (E[16] = u),
              (E[17] = P),
              (E[18] = O),
              (E[19] = R),
              (E[20] = M),
              (E[21] = _))
            : (_ = E[21])
          let z = _
          ;(E[22] !== p || E[23] !== m || E[24] !== h || E[25] !== M
            ? ((A =
                "empty" === M
                  ? (0, a.jsxs)(a.Fragment, { children: [m, h] })
                  : (0, a.jsx)(d, { label: h, description: p, icon: m, variant: M, verticalAlignment: "center" })),
              (E[22] = p),
              (E[23] = m),
              (E[24] = h),
              (E[25] = M),
              (E[26] = A))
            : (A = E[26]),
            E[27] !== v
              ? ((k =
                  null != v
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (E[27] = v),
                (E[28] = k))
              : (k = E[28]),
            E[29] !== A || E[30] !== k
              ? ((j = (0, a.jsxs)(a.Fragment, { children: [A, k] })), (E[29] = A), (E[30] = k), (E[31] = j))
              : (j = E[31]))
          let q = j,
            D = P ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            F = "row" === T && "first:rounded-t-2xl last:rounded-b-2xl",
            $ = "recommendation" === M && "dark:bg-secondary-ghost-hover",
            B = !f && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            U =
              !f &&
              "recommendation" === M &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            E[32] !== D || E[33] !== F || E[34] !== $ || E[35] !== B || E[36] !== U
              ? ((I = (0, l.A)("group w-full items-center", D, F, $, B, U)),
                (E[32] = D),
                (E[33] = F),
                (E[34] = $),
                (E[35] = B),
                (E[36] = U),
                (E[37] = I))
              : (I = E[37]),
            E[38] !== n || E[39] !== r || E[40] !== s || E[41] !== q || E[42] !== f || E[43] !== g || E[44] !== z
              ? ((S =
                  null != g.to
                    ? (0, a.jsx)(o.N_, {
                        ...g,
                        className: z,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": s,
                        "aria-disabled": f || void 0,
                        tabIndex: f ? -1 : void 0,
                        onClick: f ? c : g.onClick,
                        children: q,
                      })
                    : (0, a.jsx)("button", {
                        ...g,
                        className: z,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": s,
                        disabled: f,
                        type: "button",
                        children: q,
                      })),
                (E[38] = n),
                (E[39] = r),
                (E[40] = s),
                (E[41] = q),
                (E[42] = f),
                (E[43] = g),
                (E[44] = z),
                (E[45] = S))
              : (S = E[45]),
            E[46] !== t || E[47] !== f || E[48] !== P
              ? ((C =
                  f || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, l.A)(
                          "flex shrink-0 items-center gap-1",
                          P ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (E[46] = t),
                (E[47] = f),
                (E[48] = P),
                (E[49] = C))
              : (C = E[49]),
            E[50] !== I || E[51] !== S || E[52] !== C
              ? ((N = (0, a.jsxs)("div", { className: I, children: [S, C] })),
                (E[50] = I),
                (E[51] = S),
                (E[52] = C),
                (E[53] = N))
              : (N = E[53]),
            N
          )
        },
        kf: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: l } = e
          return (
            n[0] !== l
              ? ((t = (0, a.jsx)("span", { className: "text-tertiary", children: l })), (n[0] = l), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            n,
            r,
            o,
            c,
            d,
            u,
            p,
            f,
            m,
            g = (0, i.c)(43),
            {
              id: h,
              ariaLabel: y,
              autoFocus: b,
              checked: x,
              description: w,
              highlightSelected: v,
              indicator: _,
              label: A,
              name: k,
              onChange: j,
              onClick: I,
              value: S,
              variant: C,
            } = e,
            N = void 0 === v || v,
            E = void 0 === _ ? "radio" : _,
            T = void 0 === C ? "default" : C
          ;(g[0] !== x || g[1] !== w || g[2] !== N || g[3] !== E || g[4] !== T
            ? ((t = (0, l.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === T &&
                  (0, l.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != w ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === T && x && N && "radio" === E && "bg-background-neutral-soft-alpha",
                "form" === T && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === T && "items-center gap-2",
                "checkmark" === E && "after:ms-7",
              )),
              (g[0] = x),
              (g[1] = w),
              (g[2] = N),
              (g[3] = E),
              (g[4] = T),
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
            g[9] !== E || g[10] !== T
              ? ((r = (0, l.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === E
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, l.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === T ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (g[9] = E),
                (g[10] = T),
                (g[11] = r))
              : (r = g[11]))
          let O = null != w ? `${h}-description` : void 0
          ;(g[12] !== y ||
          g[13] !== b ||
          g[14] !== x ||
          g[15] !== h ||
          g[16] !== k ||
          g[17] !== j ||
          g[18] !== I ||
          g[19] !== r ||
          g[20] !== O ||
          g[21] !== S
            ? ((o = (0, a.jsx)("input", {
                id: h,
                className: r,
                "aria-label": y,
                "aria-describedby": O,
                autoFocus: b,
                type: "radio",
                name: k,
                value: S,
                checked: x,
                onChange: j,
                onClick: I,
              })),
              (g[12] = y),
              (g[13] = b),
              (g[14] = x),
              (g[15] = h),
              (g[16] = k),
              (g[17] = j),
              (g[18] = I),
              (g[19] = r),
              (g[20] = O),
              (g[21] = S),
              (g[22] = o))
            : (o = g[22]),
            g[23] !== x || g[24] !== E
              ? ((c = "checkmark" === E ? (0, a.jsx)(s.ALZ, { className: (0, l.A)(!x && "invisible") }) : null),
                (g[23] = x),
                (g[24] = E),
                (g[25] = c))
              : (c = g[25]))
          let M = "default" === T ? "text-sm font-medium" : "text-base"
          return (
            g[26] !== M ? ((d = (0, l.A)("text-default", M)), (g[26] = M), (g[27] = d)) : (d = g[27]),
            g[28] !== A || g[29] !== d
              ? ((u = (0, a.jsx)("span", { className: d, children: A })), (g[28] = A), (g[29] = d), (g[30] = u))
              : (u = g[30]),
            g[31] !== w || g[32] !== h
              ? ((p =
                  null != w
                    ? (0, a.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: w,
                      })
                    : null),
                (g[31] = w),
                (g[32] = h),
                (g[33] = p))
              : (p = g[33]),
            g[34] !== u || g[35] !== p
              ? ((f = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, p],
                })),
                (g[34] = u),
                (g[35] = p),
                (g[36] = f))
              : (f = g[36]),
            g[37] !== f || g[38] !== t || g[39] !== n || g[40] !== o || g[41] !== c
              ? ((m = (0, a.jsxs)("div", { className: t, children: [n, o, c, f] })),
                (g[37] = f),
                (g[38] = t),
                (g[39] = n),
                (g[40] = o),
                (g[41] = c),
                (g[42] = m))
              : (m = g[42]),
            m
          )
        },
      },
    )
  },
}
//# sourceMappingURL=493889.efa40b5c17.js.map
