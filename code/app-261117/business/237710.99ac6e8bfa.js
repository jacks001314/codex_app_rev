export const __rspack_esm_ids = [237710]
export const __webpack_modules__ = {
  YOiQ(e, s, t) {
    var i = t("zd8w"),
      n = t("oM1g"),
      l = t("Y44c"),
      a = ["axis"],
      r = (0, i.forwardRef)((e, s) =>
        i.createElement(l.P, {
          chartName: "AreaChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: a,
          tooltipPayloadSearcher: n.uN,
          categoricalChartProps: e,
          ref: s,
        }),
      )
    t.d(s, {}, { Q: r })
  },
  zRZS(e, s, t) {
    var i = t("ABep"),
      n = t("QosV"),
      l = t("zd8w"),
      a = t("Wf1j"),
      r = t("NxWE"),
      o = t("j2jv"),
      c = t("sGKa"),
      d = t("xAz2"),
      u = t("bIbG"),
      f = t("YOiQ"),
      h = t("phtB")
    let p = { month: "short", day: "numeric", timeZone: "UTC" }
    function m(e) {
      let { date: s } = e
      return { date: s }
    }
    function g(e) {
      return e.date
    }
    t.d(
      s,
      {},
      {
        v: function (e) {
          let s,
            t,
            r,
            b,
            _,
            x,
            y,
            v,
            w,
            j,
            A,
            C,
            S,
            k,
            I,
            P,
            M,
            N,
            T,
            D,
            E,
            q,
            F = (0, n.c)(52),
            { points: R, values: L, dataKey: O, label: B, empty: V, tooltip: U, revealClass: $ } = e,
            G = void 0 !== V && V,
            H = (0, a.A)(),
            z = (0, l.useId)()
          if (F[0] !== R) {
            let e
            ;(F[2] !== R.length
              ? ((e = (e, s) =>
                  [0, Math.round((R.length - 1) / 3), Math.round((2 * (R.length - 1)) / 3), R.length - 1].includes(s)),
                (F[2] = R.length),
                (F[3] = e))
              : (e = F[3]),
              (b = R.filter(e).map(g)),
              (F[0] = R),
              (F[1] = b))
          } else b = F[1]
          let W = b
          ;(F[4] !== G || F[5] !== L ? ((_ = G ? [] : L), (F[4] = G), (F[5] = L), (F[6] = _)) : (_ = F[6]),
            F[7] !== _
              ? ((s = Math.max(1, _.reduce((e, s) => Math.max(e, s ?? 0), 0) / 4)),
                (t = 10 ** Math.floor(Math.log10(s))),
                (x = [
                  0,
                  (r = [1, 2, 2.5, 5, 10].map((e) => e * t).find((e) => Number.isInteger(e) && e >= s) ?? 10 * t),
                  2 * r,
                  3 * r,
                  4 * r,
                ]),
                (F[7] = _),
                (F[8] = x))
              : (x = F[8]))
          let K = x,
            Q = G ? "opacity-25" : void 0,
            Z = !G
          ;(F[9] !== G || F[10] !== R
            ? ((y = G ? R.map(m) : [...R]), (F[9] = G), (F[10] = R), (F[11] = y))
            : (y = F[11]),
            F[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = { top: 32, right: 0, left: 0, bottom: 0 }), (F[12] = v))
              : (v = F[12]),
            F[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, i.jsx)("stop", { offset: "0", stopColor: "var(--chatgpt-blue-400)", stopOpacity: 0.15 })),
                (w = (0, i.jsx)("stop", { offset: "1", stopColor: "var(--chatgpt-blue-400)", stopOpacity: 0 })),
                (F[13] = w),
                (F[14] = j))
              : ((w = F[13]), (j = F[14])),
            F[15] !== z
              ? ((A = (0, i.jsx)("defs", {
                  children: (0, i.jsxs)("linearGradient", {
                    id: z,
                    x1: "0",
                    x2: "0",
                    y1: "0",
                    y2: "1",
                    children: [j, w],
                  }),
                })),
                (F[15] = z),
                (F[16] = A))
              : (A = F[16]),
            F[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, i.jsx)(o.d, { stroke: "var(--color-border-subtle)", vertical: !1 })), (F[17] = C))
              : (C = F[17]),
            F[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = { className: "text-xs", fill: "var(--color-text-tertiary)" }), (F[18] = S))
              : (S = F[18]),
            F[19] !== H ? ((k = (e) => H.formatDate(`${e}T00:00:00Z`, p)), (F[19] = H), (F[20] = k)) : (k = F[20]),
            F[21] !== W || F[22] !== k
              ? ((I = (0, i.jsx)(c.W, {
                  dataKey: "date",
                  axisLine: !1,
                  tickLine: !1,
                  ticks: W,
                  interval: "preserveStartEnd",
                  minTickGap: 24,
                  tickMargin: 16,
                  height: 40,
                  tick: S,
                  tickFormatter: k,
                })),
                (F[21] = W),
                (F[22] = k),
                (F[23] = I))
              : (I = F[23]),
            F[24] !== K[4] ? ((P = [0, K[4]]), (F[24] = K[4]), (F[25] = P)) : (P = F[25]),
            F[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = { className: "text-xs", fill: "var(--color-text-tertiary)" }), (F[26] = M))
              : (M = F[26]),
            F[27] !== H
              ? ((N = (e) => H.formatNumber(e, { notation: "compact", maximumFractionDigits: 1 })),
                (F[27] = H),
                (F[28] = N))
              : (N = F[28]),
            F[29] !== K || F[30] !== G || F[31] !== P || F[32] !== N
              ? ((T = (0, i.jsx)(d.h, {
                  hide: G,
                  orientation: "right",
                  axisLine: !1,
                  tickLine: !1,
                  tickMargin: 10,
                  width: 44,
                  allowDecimals: !1,
                  domain: P,
                  ticks: K,
                  tick: M,
                  tickFormatter: N,
                })),
                (F[29] = K),
                (F[30] = G),
                (F[31] = P),
                (F[32] = N),
                (F[33] = T))
              : (T = F[33]))
          let Y = !G && U
          return (
            F[34] !== O || F[35] !== G || F[36] !== z || F[37] !== B || F[38] !== $
              ? ((D =
                  !G &&
                  (0, i.jsx)(u.Gk, {
                    className: $,
                    type: "linear",
                    dataKey: O,
                    name: B,
                    stroke: "var(--chatgpt-blue-400)",
                    strokeWidth: 2,
                    fill: `url(#${z})`,
                    fillOpacity: 1,
                    dot: !1,
                    activeDot: { r: 4, stroke: "var(--color-surface)", strokeWidth: 2 },
                    connectNulls: !1,
                    isAnimationActive: !1,
                  })),
                (F[34] = O),
                (F[35] = G),
                (F[36] = z),
                (F[37] = B),
                (F[38] = $),
                (F[39] = D))
              : (D = F[39]),
            F[40] !== O ||
            F[41] !== A ||
            F[42] !== I ||
            F[43] !== T ||
            F[44] !== Y ||
            F[45] !== D ||
            F[46] !== Z ||
            F[47] !== y
              ? ((E = (0, i.jsxs)(f.Q, { accessibilityLayer: Z, data: y, margin: v, children: [A, C, I, T, Y, D] }, O)),
                (F[40] = O),
                (F[41] = A),
                (F[42] = I),
                (F[43] = T),
                (F[44] = Y),
                (F[45] = D),
                (F[46] = Z),
                (F[47] = y),
                (F[48] = E))
              : (E = F[48]),
            F[49] !== E || F[50] !== Q
              ? ((q = (0, i.jsx)(h.u, {
                  className: Q,
                  width: "100%",
                  height: "100%",
                  minWidth: 1,
                  minHeight: 1,
                  children: E,
                })),
                (F[49] = E),
                (F[50] = Q),
                (F[51] = q))
              : (q = F[51]),
            q
          )
        },
        y: function (e) {
          let s,
            t,
            l,
            o = (0, n.c)(6),
            { points: c, renderContent: d } = e,
            u = (0, a.A)()
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = { y: 0 }),
                (t = { stroke: "var(--chatgpt-blue-400)", strokeOpacity: 0.5, strokeDasharray: "4 4" }),
                (o[0] = s),
                (o[1] = t))
              : ((s = o[0]), (t = o[1])),
            o[2] !== u || o[3] !== c || o[4] !== d
              ? ((l = (0, i.jsx)(r.m, {
                  isAnimationActive: !1,
                  position: s,
                  cursor: t,
                  content: (e) => {
                    let { active: s, label: t } = e,
                      n = s ? c.find((e) => e.date === t) : void 0
                    if (!n) return null
                    let l = u.formatDate(`${n.date}T00:00:00Z`, p)
                    return (0, i.jsx)("div", {
                      role: "status",
                      className:
                        "rounded-xl bg-surface-elevated-secondary px-3 py-2 text-sm text-default shadow-lg ring-1 ring-border select-none",
                      children: d(n, l),
                    })
                  },
                })),
                (o[2] = u),
                (o[3] = c),
                (o[4] = d),
                (o[5] = l))
              : (l = o[5]),
            l
          )
        },
      },
    )
  },
  FQ6U(e, s, t) {
    var i = t("qmMi"),
      n = t("DBCl"),
      l = t("ASxG"),
      a = t("SPnB"),
      r = t("Kwur"),
      o = t("OWtl"),
      c = t("eShZ"),
      d = t("W7Gu"),
      u = t("JYBD"),
      f = t("UbDh")
    function h(e) {
      return e?.connection_pending === !0 || e?.admin_enrollment_pending === !0
    }
    let p = (0, i.vU)(
        o.u,
        ({
          authority: { accountId: e, userId: s, profileId: t },
          separateConnectionRecovery: i,
          passive: l,
          selectedAdAccountId: a,
        }) => ({
          queryKey: [
            "business-profiles",
            e,
            t,
            "ad-accounts",
            s,
            ...(i ? ["separate-recovery"] : []),
            "connection-lifecycle-v1",
            ...(l ? ["passive"] : []),
            ...(null == a ? [] : [a]),
          ],
          queryFn: ({ signal: o }) =>
            b(
              (c, d) =>
                r.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts", {
                  parameters: {
                    path: { business_profile_id: t },
                    query: {
                      ...(i ? { include_connection_recovery: !1 } : {}),
                      ...(d ? { include_admin_enrollment_recovery: !0 } : {}),
                      ...(c ? { include_connection_lifecycle: !0, ...(null == a ? {} : { ad_account_id: a }) } : {}),
                    },
                  },
                  additionalHeaders: { "ChatGPT-Account-ID": e, [n.zBc]: e, "x-openai-use-sheep": "1" },
                  expectedIdentity: { accountId: e, userId: s },
                  expectedErrorStatuses: [400, 401, 403, 404, 503],
                  ...(l ? { authRecovery: "passive" } : {}),
                  signal: o,
                }),
              { selectedAdAccountId: a, includeEnrollmentRecovery: !i && !l },
            ),
          ...d.I,
          staleTime: 3e5,
          gcTime: 9e5,
          retry: !1,
        }),
      ),
      m = (0, i.vU)(o.u, ({ authority: { accountId: e, userId: s, profileId: t }, separateConnectionRecovery: i }) => ({
        queryKey: [
          "business-profiles",
          e,
          t,
          "ad-account-recovery",
          s,
          ...(i ? ["separate-recovery"] : []),
          "connection-lifecycle-v1",
        ],
        queryFn: async ({ signal: i }) => {
          let l = await b(
            (l, a) =>
              r.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts", {
                parameters: {
                  path: { business_profile_id: t },
                  query: {
                    view: "recovery",
                    include_connection_recovery: !0,
                    ...(a ? { include_admin_enrollment_recovery: !0 } : {}),
                    ...(l ? { include_connection_lifecycle: !0 } : {}),
                  },
                },
                additionalHeaders: { "ChatGPT-Account-ID": e, [n.zBc]: e, "x-openai-use-sheep": "1" },
                expectedIdentity: { accountId: e, userId: s },
                expectedErrorStatuses: [400, 401, 403, 404, 422, 503],
                signal: i,
              }),
            { includeEnrollmentRecovery: !0 },
          )
          if (!0 !== l.connection_recovery_included)
            throw new c.FetchError("Connection recovery could not be confirmed. Try again.", 503)
          return l
        },
        ...d.I,
        staleTime: 3e5,
        gcTime: 9e5,
        retry: !1,
      })),
      g = (0, i.N3)(o.u, ({ authority: { accountId: e, userId: s, profileId: t }, separateConnectionRecovery: i }) => ({
        queryKey: [
          "business-profiles",
          e,
          t,
          "ad-account-candidates",
          s,
          ...(i ? ["separate-recovery"] : []),
          "connection-lifecycle-v1",
        ],
        initialPageParam: void 0,
        getNextPageParam: (e) => e.next_cursor ?? void 0,
        queryFn: async ({ pageParam: l, signal: a }) => {
          let o = {
            parameters: {
              path: { business_profile_id: t },
              query: {
                view: "candidates",
                pagination: !0,
                cursor: l,
                ...(i ? { include_connection_recovery: !1 } : {}),
              },
            },
            additionalHeaders: { "ChatGPT-Account-ID": e, [n.zBc]: e, "x-openai-use-sheep": "1" },
            expectedIdentity: { accountId: e, userId: s },
            expectedErrorStatuses: [400, 401, 403, 404, 422, 503],
            signal: a,
          }
          try {
            return await b(
              (e, s) =>
                r.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts", {
                  ...o,
                  parameters: {
                    ...o.parameters,
                    query: {
                      ...o.parameters.query,
                      ...(s ? { include_admin_enrollment_recovery: !0 } : {}),
                      ...(e ? { include_connection_lifecycle: !0 } : {}),
                    },
                  },
                }),
              { includeEnrollmentRecovery: !i },
            )
          } catch (e) {
            if (null != l || !_(e, ["pagination", "cursor"])) throw e
            return b(
              (e, s) =>
                r.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts", {
                  ...o,
                  parameters: {
                    path: o.parameters.path,
                    query: {
                      view: "candidates",
                      ...(s ? { include_admin_enrollment_recovery: !0 } : {}),
                      ...(e ? { include_connection_lifecycle: !0 } : {}),
                      ...(i ? { include_connection_recovery: !1 } : {}),
                    },
                  },
                }),
              { includeEnrollmentRecovery: !i },
            )
          }
        },
        ...d.I,
        staleTime: 3e5,
        gcTime: 9e5,
        retry: !1,
      }))
    async function b(e, { selectedAdAccountId: s, includeEnrollmentRecovery: t = !1 } = {}) {
      let i = async (t, n) => {
        try {
          return await e(t, n)
        } catch (e) {
          if (n && _(e, ["include_admin_enrollment_recovery"])) return i(t, !1)
          if (t && _(e, ["include_connection_lifecycle", ...(null == s ? [] : ["ad_account_id"])])) return i(!1, n)
          throw e
        }
      }
      return i(!0, t)
    }
    function _(e, s) {
      let t
      if (!(e instanceof c.FetchError) || 400 !== e.status || "unknown_parameter" !== e.errorCode) return !1
      try {
        t = JSON.parse(e.message)
      } catch {
        return !1
      }
      let i = l.Ikc({ error: l.Ikc({ code: l.euz("unknown_parameter"), param: l.YjP() }) }).safeParse(t)
      return i.success && s.includes(i.data.error.param)
    }
    t.d(
      s,
      {},
      {
        MQ: function (e, s, t) {
          return (
            !(e?.business_profile_id !== s.profileId || e.accounts.some((e) => e.id === t && h(e))) &&
            ((0, u.Qw)(e, s, t)?.state === "disconnected" ||
              e.ad_account_admin_enrollment_completed_ids?.includes(t) === !0)
          )
        },
        Tw: function (e, s) {
          let { authority: t } = s,
            i = !1,
            n = e.watch(({ get: n }) => {
              let l = n(a.PO),
                { data: r, error: o, hasNextPage: c, isFetching: d } = n(g, s)
              !(0, f.yD)(l, t) &&
                !d &&
                null == o &&
                c &&
                r?.pages.every((e) => e.business_profile_id === t.profileId && e.can_connect) &&
                queueMicrotask(() => {
                  if (i || (0, f.yD)(e.get(a.PO), t)) return
                  let n = e.get(g, s)
                  !n.isFetching && null == n.error && n.hasNextPage && n.fetchNextPage({ cancelRefetch: !1 })
                })
            })
          return () => {
            i || ((i = !0), n(), e.query.cancel(g, s))
          }
        },
        c6: m,
        fI: p,
        kT: h,
        xP: g,
      },
    )
  },
  FIwH(e, s, t) {
    var i = t("ABep"),
      n = t("QosV"),
      l = t("oyxz"),
      a = t("Qgfj"),
      r = t("MM0V"),
      o = t("bVeK")
    let c = (0, a.YK)({
      readTenantAuthenticationError: {
        id: "businessProfiles.adAccounts.readTenantAuthenticationError",
        defaultMessage:
          "Sign in again using a method approved by your organization to see ad accounts. If you still can\u2019t see them, contact your organization admin.",
      },
      readSessionAuthenticationError: {
        id: "businessProfiles.adAccounts.readSessionAuthenticationError",
        defaultMessage: "Sign in again to see ad accounts",
      },
      signInFailed: {
        id: "businessProfiles.adAccounts.signInFailed",
        defaultMessage: "Sign-in could not be completed. Try again or contact your organization admin.",
      },
      sessionAuthenticationError: {
        id: "businessProfiles.adAccounts.sessionAuthenticationError",
        defaultMessage: "Your session needs authentication. Sign in again to continue.",
      },
      tenantAuthenticationError: {
        id: "businessProfiles.adAccounts.tenantAuthenticationError",
        defaultMessage:
          "Please sign in again using a method approved by your organization. If you still can\u2019t connect, contact your organization admin.",
      },
    })
    t.d(
      s,
      {},
      {
        d: function (e) {
          let s,
            t,
            a,
            d,
            u = (0, n.c)(17),
            { ref: f, reason: h, signInFailed: p, reading: m, variant: g } = e,
            b = void 0 === g ? "text" : g
          if ("banner" === b && p) {
            let e
            ;(u[0] !== h
              ? ((e =
                  "tenant_policy" === h
                    ? (0, i.jsx)(l.A, {
                        id: "businessProfiles.adAccounts.connect.signInFailed.tenantPolicy",
                        defaultMessage:
                          "We couldn\u2019t sign you in. Try again using a method approved by your organization.",
                      })
                    : (0, i.jsx)(l.A, {
                        id: "businessProfiles.adAccounts.connect.signInFailed.session",
                        defaultMessage: "We couldn\u2019t sign you in. Please try again.",
                      })),
                (u[0] = h),
                (u[1] = e))
              : (e = u[1]),
              (s = e))
          } else if (void 0 !== m && m) {
            let e
            ;(u[2] !== h
              ? ((e =
                  "tenant_policy" === h
                    ? (0, i.jsx)(l.A, { ...c.readTenantAuthenticationError })
                    : (0, i.jsx)(l.A, { ...c.readSessionAuthenticationError })),
                (u[2] = h),
                (u[3] = e))
              : (e = u[3]),
              (s = e))
          } else {
            let e
            ;(u[4] !== h
              ? ((e =
                  "tenant_policy" === h
                    ? (0, i.jsx)(l.A, { ...c.tenantAuthenticationError })
                    : (0, i.jsx)(l.A, { ...c.sessionAuthenticationError })),
                (u[4] = h),
                (u[5] = e))
              : (e = u[5]),
              (s = e))
          }
          if ("banner" === b) {
            let e, t
            return (
              u[6] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(o.zOs, {})), (u[6] = e)) : (e = u[6]),
              u[7] !== s
                ? ((t = (0, i.jsx)(r.l, {
                    type: "error",
                    role: "alert",
                    variant: "callout",
                    layout: "verticalIcon",
                    icon: e,
                    content: s,
                  })),
                  (u[7] = s),
                  (u[8] = t))
                : (t = u[8]),
              t
            )
          }
          return (
            u[9] !== s
              ? ((t = (0, i.jsx)("p", { role: "alert", className: "text-sm leading-5 text-danger", children: s })),
                (u[9] = s),
                (u[10] = t))
              : (t = u[10]),
            u[11] !== p
              ? ((a = p
                  ? (0, i.jsx)("p", {
                      role: "alert",
                      className: "text-sm leading-5 text-danger",
                      children: (0, i.jsx)(l.A, { ...c.signInFailed }),
                    })
                  : null),
                (u[11] = p),
                (u[12] = a))
              : (a = u[12]),
            u[13] !== f || u[14] !== t || u[15] !== a
              ? ((d = (0, i.jsxs)("div", { ref: f, className: "flex flex-col gap-3", children: [t, a] })),
                (u[13] = f),
                (u[14] = t),
                (u[15] = a),
                (u[16] = d))
              : (d = u[16]),
            d
          )
        },
      },
    )
  },
  Sq3r(e, s, t) {
    let i = ["entity_shown", "profile_open", "website_click"]
    function n(e, s) {
      return 0 === e.length || e.some((e) => null == e.values[s]) ? null : e.reduce((e, t) => e + (t.values[s] ?? 0), 0)
    }
    function l(e) {
      return {
        entity_shown: e("entity_shown"),
        profile_open: e("profile_open"),
        website_click: e("website_click"),
        call_click: e("call_click"),
      }
    }
    t.d(
      s,
      {},
      {
        EH: ["entity_shown", "profile_open", "website_click", "call_click"],
        Jv: n,
        Mn: i,
        UT: function (e, s, t = 28) {
          if (7 === t)
            return l((t) => {
              let i = n(s.slice(-7), t),
                l = n(s.slice(-14, -7), t)
              if (
                s.length < 14 ||
                null == i ||
                null == l ||
                ("non_local" === e.analytics_scope &&
                  (0 === l || s.slice(-14).some((e) => e.statuses?.[t] !== "complete")))
              )
                return null
              let a = i - l
              return 0 === l ? { delta: a, percentChange: 0 === i ? 0 : null } : { delta: a, percentChange: a / l }
            })
          let i = Date.parse(`${e.start_date}T00:00:00Z`),
            a = new Date(i - (Date.parse(`${e.end_date}T00:00:00Z`) - i)).toISOString().slice(0, 10)
          return l((t) => {
            let i = e.summary.find((e) => e.metric === t)
            if ("non_local" === e.analytics_scope)
              return i?.status !== "complete" ||
                "complete" !== i.previous_status ||
                null == i.event_count ||
                null == i.previous_event_count ||
                0 === i.previous_event_count ||
                null == i.percent_change
                ? null
                : { delta: i.event_count - i.previous_event_count, percentChange: i.percent_change / 100 }
            if (
              null == n(s, t) ||
              null == e.metadata.available_start_date ||
              e.metadata.available_start_date > a ||
              null == e.metadata.available_end_date_exclusive ||
              e.metadata.available_end_date_exclusive < e.end_date ||
              e.metadata.missing_dates.length > 0 ||
              e.metadata.previous_missing_dates.length > 0 ||
              i?.unavailable_reason != null ||
              i?.event_count == null ||
              null == i.previous_event_count
            )
              return null
            let l = i.event_count - i.previous_event_count
            return 0 === i.previous_event_count
              ? { delta: l, percentChange: 0 === i.event_count ? 0 : null }
              : { delta: l, percentChange: l / i.previous_event_count }
          })
        },
        gu: function (e, s) {
          if (null == e || e.length < s) return null
          let t = e.slice(-s)
          if (t.some((e) => null != e.statuses && "complete" !== e.statuses.entity_shown)) return null
          let i = n(t, "entity_shown")
          return null == i ? null : i >= 15
        },
        i2: function (e, s) {
          let t = s.toISOString().slice(0, 10)
          return {
            start_date: new Date(Date.parse(`${t}T00:00:00Z`) - 864e5 * e).toISOString().slice(0, 10),
            end_date: t,
          }
        },
        oZ: function (e) {
          let s = new Map(e.timeseries.map((e) => [e.date, e])),
            t = new Set(e.metadata.missing_dates),
            n = [],
            a = Date.parse(`${e.end_date}T00:00:00Z`)
          for (let i = Date.parse(`${e.start_date}T00:00:00Z`); i < a; i += 864e5) {
            let a = new Date(i).toISOString().slice(0, 10),
              r = "non_local" !== e.analytics_scope && t.has(a) ? void 0 : s.get(a),
              o = l((s) => {
                let t = r?.metrics.find((e) => e.metric === s)
                return "non_local" === e.analytics_scope
                  ? t?.status === "complete" || t?.status === "observed"
                    ? (t.event_count ?? null)
                    : null
                  : t?.unavailable_reason == null
                    ? (t?.event_count ?? null)
                    : null
              })
            n.push({
              date: a,
              values: o,
              statuses:
                "non_local" === e.analytics_scope
                  ? l((e) => r?.metrics.find((s) => s.metric === e)?.status ?? "unavailable")
                  : void 0,
            })
          }
          return "non_local" === e.analytics_scope
            ? n
            : n.slice(0, n.findLastIndex((e) => i.some((s) => null != e.values[s])) + 1)
        },
        u0: function (e, s) {
          if (null == s || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return null
          let t = Date.parse(`${s}T00:00:00Z`)
          return !Number.isFinite(t) || new Date(t).toISOString().slice(0, 10) !== s || s >= e.end_date
            ? null
            : {
                start_date: new Date(t - (Date.parse(e.end_date) - Date.parse(e.start_date)))
                  .toISOString()
                  .slice(0, 10),
                end_date: s,
              }
        },
      },
    )
  },
  nUWW(e, s, t) {
    t.d(s, { BusinessInsightsMetrics: () => k, k: () => T })
    var i = t("ABep"),
      n = t("QosV"),
      l = t("zRZS"),
      a = t("slpy"),
      r = t("ESTr")
    let o = (0, r.a)({
        name: "arrow-down-right-md-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 4.141235, y: 4.141113, width: 7.052979, height: 7.050293 },
          visualBounds: { x: 4.141235, y: 4.141113, width: 7.052979, height: 7.050293 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.141235, y: 4.141113, width: 7.052979, height: 7.050293 },
          center: { x: 7.667725, y: 7.66626 },
          insets: { top: 4.141113, right: 4.805786, bottom: 4.808594, left: 4.141235 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.667725, y: 7.66626 }, foreground: { x: 7.667725, y: 7.66626 } },
        },
        capabilities: ["icon"],
        body: '<path d="M4.29483 4.29471C4.49975 4.0898 4.83295 4.09003 5.038 4.29471L10.1435 9.40018V5.99979C10.1435 5.70991 10.379 5.47449 10.6689 5.4744C10.9588 5.4744 11.1942 5.70986 11.1942 5.99979V10.1668C11.1941 10.7327 10.7348 11.1912 10.1689 11.1912H5.99991C5.71012 11.1911 5.47471 10.9565 5.47452 10.6668C5.47454 10.3769 5.71002 10.1414 5.99991 10.1414H9.39835L4.29483 5.03788C4.09015 4.83282 4.08992 4.49963 4.29483 4.29471Z" fill="currentColor"/>',
      }),
      c = (0, r.a)({
        name: "chevron-down-md-regular-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 4.124512, y: 7.458008, width: 11.750732, height: 6.577637 },
          visualBounds: { x: 4.124512, y: 7.458008, width: 11.750732, height: 6.577637 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.124512, y: 7.458008, width: 11.750732, height: 6.577637 },
          center: { x: 9.999878, y: 10.746827 },
          insets: { top: 7.458008, right: 4.124756, bottom: 5.964355, left: 4.124512 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 9.999878, y: 10.746827 },
            foreground: { x: 9.999878, y: 10.746827 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M14.3808 7.71429C14.7225 7.37258 15.2774 7.37258 15.6191 7.71429C15.9608 8.056 15.9608 8.61086 15.6191 8.95257L10.913 13.6576C10.4086 14.1618 9.59122 14.1618 9.08685 13.6576L4.38079 8.95257C4.03908 8.61086 4.03908 8.056 4.38079 7.71429C4.7225 7.37258 5.27737 7.37258 5.61907 7.71429L9.99993 12.0951L14.3808 7.71429Z" fill="currentColor"/>',
      })
    var d = t("GvFV"),
      u = t("on57"),
      f = t("qmMi"),
      h = t("zd8w"),
      p = t("Wf1j"),
      m = t("oyxz"),
      g = t("Qgfj"),
      b = t("XJQ3"),
      _ = t("Sm6l"),
      x = t("bqtn"),
      y = t("HOLv"),
      v = t("bVeK"),
      w = t("T1PX"),
      j = t("ZEx5"),
      A = t("OMIV"),
      C = t("GTUZ"),
      S = t("Sq3r")
    function k(e) {
      let s,
        t,
        r,
        o,
        g,
        v,
        k,
        D,
        E,
        q,
        F = (0, n.c)(36),
        {
          isEcommerce: R,
          points: L,
          changes: O,
          scope: B,
          summary: V,
          period: U,
          state: $,
          selectedMetric: G,
          onMetricChange: H,
          onRetry: z,
          websiteAccessStatus: W,
        } = e,
        K = (0, p.A)(),
        Q = (0, w.I)(),
        Z = (0, h.useId)(),
        Y = (0, h.useId)(),
        J = (0, f._U)(!!(void 0 !== R && R) && A.JW, "800601524")
      F[0] !== J ? ((s = (e) => !J || "profile_open" !== e), (F[0] = J), (F[1] = s)) : (s = F[1])
      let X = S.Mn.filter(s),
        [ee, es] = (0, h.useState)("entity_shown"),
        et = G ?? ee,
        ei = X.includes(et) ? et : "entity_shown"
      F[2] !== H
        ? ((t = (e) => {
            ;(es(e), H?.(e))
          }),
          (F[2] = H),
          (F[3] = t))
        : (t = F[3])
      let en = t,
        el = "non_local" === B
      F[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            entity_shown: N.mentionsDefinition,
            profile_open: N.profileViewsDefinition,
            website_click: N.websiteClicksDefinition,
          }),
          (F[4] = r))
        : (r = F[4])
      let ea = r,
        er = {
          entity_shown: N.mentionsHelpLabel,
          profile_open: N.profileViewsHelpLabel,
          website_click: N.websiteClicksHelpLabel,
        },
        eo = "empty" === $ || "insufficient" === $
      F[5] !== eo || F[6] !== el || F[7] !== L || F[8] !== V
        ? ((o = (e) => {
            if (eo) return null
            if (!el) return null == L ? null : (0, S.Jv)(L, e)
            let s = V?.find((s) => s.metric === e)
            return s?.status === "complete" || s?.status === "observed" ? (s.event_count ?? null) : null
          }),
          (F[5] = eo),
          (F[6] = el),
          (F[7] = L),
          (F[8] = V),
          (F[9] = o))
        : (o = F[9])
      let ec = o,
        ed = null != L && L.length > 0
      F[10] !== L || F[11] !== ei
        ? ((g = L?.findLast((e) => null != e.values[ei])?.date), (F[10] = L), (F[11] = ei), (F[12] = g))
        : (g = F[12])
      let eu = g
      if ("loading" === $) {
        let e, s, t, n
        return (
          F[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: (0, i.jsx)(m.A, { ...N.loading }),
              })),
              (s = (0, i.jsx)(C.X1, {})),
              (F[13] = e),
              (F[14] = s))
            : ((e = F[13]), (s = F[14])),
          F[15] !== W
            ? ((t =
                null != W
                  ? (0, i.jsx)(j.t, { variant: "outlinedLarge", dividers: !1, children: W }, "website-access")
                  : null),
              (F[15] = W),
              (F[16] = t))
            : (t = F[16]),
          F[17] !== t
            ? ((n = (0, i.jsxs)("section", {
                "aria-busy": "true",
                className: "flex min-w-0 flex-col gap-6",
                children: [e, s, t],
              })),
              (F[17] = t),
              (F[18] = n))
            : (n = F[18]),
          n
        )
      }
      ;(F[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, i.jsx)(m.A, { id: "businessProfiles.insights.performance", defaultMessage: "Performance" })),
          (F[19] = v))
        : (v = F[19]),
        F[20] !== Z
          ? ((k = (0, i.jsx)("h2", { id: Z, className: "sr-only", children: v })), (F[20] = Z), (F[21] = k))
          : (k = F[21]),
        F[22] !== eo || F[23] !== el || F[24] !== z || F[25] !== $
          ? ((D =
              "ready" === $ || eo || (el && "partial" === $)
                ? null
                : (0, i.jsx)(j.t, {
                    variant: "outlinedLarge",
                    dividers: !1,
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between gap-4 p-6 text-sm",
                      role: "error" === $ ? "alert" : "status",
                      children: [
                        (0, i.jsx)("div", {
                          className: "flex items-center gap-2",
                          children: (0, i.jsx)(m.A, { ...N[$] }),
                        }),
                        null != z && ["error", "partial", "unavailable", "unsupported"].includes($)
                          ? (0, i.jsx)(_.$, {
                              size: "dialogAction",
                              color: "secondary",
                              onClick: z,
                              children: (0, i.jsx)(m.A, {
                                id: "businessProfiles.insights.retry",
                                defaultMessage: "Try again",
                              }),
                            })
                          : null,
                      ],
                    }),
                  })),
            (F[22] = eo),
            (F[23] = el),
            (F[24] = z),
            (F[25] = $),
            (F[26] = D))
          : (D = F[26]))
      let ef = ed
          ? (0, i.jsx)(j.t, {
              variant: "outlinedLarge",
              dividers: !1,
              children: (0, i.jsx)("div", {
                className: "grid auto-cols-fr grid-flow-col divide-x divide-border",
                children: X.map((e) => {
                  let s = `${Z}-${e}`,
                    t = eo ? null : O?.[e]
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: "relative flex min-w-0",
                      children: [
                        (0, i.jsx)(_.$, {
                          className: "absolute inset-0 h-full w-full rounded-none",
                          color: "ghostActive",
                          size: "inline",
                          focusRing: "inset",
                          allowShrink: !0,
                          "aria-labelledby": `${s}-label ${s}-value`,
                          "aria-describedby": null != t ? `${s}-change` : void 0,
                          "aria-pressed": ei === e,
                          "aria-controls": Y,
                          onClick: () => en(e),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "pointer-events-none relative flex w-full min-w-0 flex-col items-start gap-1.5 px-3 py-4 text-start @[32rem]/performance:px-6 @[32rem]/performance:py-5",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "flex min-h-12 max-w-full items-center gap-1 text-secondary @[32rem]/performance:min-h-5",
                              children: [
                                (0, i.jsx)("span", {
                                  id: `${s}-label`,
                                  className:
                                    "min-w-0 text-[12px]/4 tracking-[-0.15px] wrap-anywhere select-none @[32rem]/performance:text-[14px]/5",
                                  children: (0, i.jsx)(m.A, { ...N[e] }),
                                }),
                                (0, i.jsx)(a.m, {
                                  preventDismissOnFastClick: !0,
                                  contentClassName: "text-start text-[13px] font-medium tracking-[-0.08px] text-wrap",
                                  content: (0, i.jsx)(m.A, { ...ea[e] }),
                                  children: (0, i.jsx)(_.$, {
                                    className: "pointer-events-auto shrink-0",
                                    type: "button",
                                    color: "ghostTertiary",
                                    size: "inline",
                                    "aria-label": K.formatMessage(er[e]),
                                    children: (0, i.jsx)(y.I, {
                                      asset: d.q,
                                      className: "shrink-0 text-(--app-color-icon-tertiary)",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("span", {
                              id: `${s}-value`,
                              className:
                                "max-w-full text-[20px]/[26px] font-semibold wrap-anywhere tabular-nums @[32rem]/performance:text-[24px]/7",
                              children: (0, i.jsx)(M, { value: ec(e) }),
                            }),
                            null != t &&
                              (0, i.jsx)("span", {
                                id: `${s}-change`,
                                className: "text-[14px]/5",
                                children: (0, i.jsx)(I, { value: t, period: U, compact: !0 }),
                              }),
                          ],
                        }),
                      ],
                    },
                    e,
                  )
                }),
              }),
            })
          : null,
        eh = ed
          ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(j.t, {
                variant: "outlinedLarge",
                dividers: !1,
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col p-6",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-start justify-between gap-4",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex min-w-0 flex-col select-none",
                          children: [
                            (0, i.jsx)("h3", {
                              className: "text-[20px]/[26px] font-medium @[32rem]/performance:text-card-title",
                              children: (0, i.jsx)(x.Ab, {
                                contentWidth: "panel",
                                triggerButton: (0, i.jsxs)(_.$, {
                                  className: "-my-1 -ms-2.5 min-h-[34px] px-2.5 @[32rem]/performance:min-h-9",
                                  color: "ghostActive",
                                  size: "inline",
                                  children: [
                                    (0, i.jsx)(m.A, { ...N[ei] }),
                                    (0, i.jsx)(y.I, { asset: c, className: "shrink-0 text-tertiary" }),
                                  ],
                                }),
                                children: (0, i.jsx)(x.ms.RadioGroup, {
                                  value: ei,
                                  children: X.map((e) =>
                                    (0, i.jsx)(
                                      x.ms.RadioItem,
                                      { value: e, onSelect: () => en(e), children: (0, i.jsx)(m.A, { ...N[e] }) },
                                      e,
                                    ),
                                  ),
                                }),
                              }),
                            }),
                            eo &&
                              (0, i.jsx)("p", {
                                className: "text-sm text-secondary",
                                children: (0, i.jsx)(M, { value: null }),
                              }),
                            !eo &&
                              el &&
                              null != eu &&
                              (0, i.jsx)("p", {
                                className: "text-sm text-secondary",
                                children: (0, i.jsx)(m.A, {
                                  id: "businessProfiles.insights.dataThrough",
                                  defaultMessage: "Data through {date} (UTC)",
                                  values: {
                                    date: K.formatDate(`${eu}T00:00:00Z`, {
                                      month: "short",
                                      day: "numeric",
                                      timeZone: "UTC",
                                    }),
                                  },
                                }),
                              }),
                            eo || O?.[ei] == null
                              ? null
                              : (0, i.jsx)("p", {
                                  className: "text-[14px]/5 text-secondary",
                                  children: (0, i.jsx)(I, { value: O[ei], period: U }),
                                }),
                          ],
                        }),
                        (0, i.jsx)("span", {
                          className:
                            "min-w-0 text-end text-[20px]/[26px] font-medium wrap-anywhere tabular-nums select-text @[32rem]/performance:text-card-title",
                          children: (0, i.jsx)(M, { value: ec(ei) }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("figure", {
                      id: Y,
                      children: [
                        (0, i.jsxs)("figcaption", {
                          className: "sr-only",
                          children: [
                            J &&
                              (0, i.jsx)(m.A, {
                                id: "businessProfiles.insights.ecommerceChartDescription",
                                defaultMessage:
                                  "Daily mentions and website clicks in UTC. Unknown counts appear as gaps.",
                              }),
                            !J &&
                              el &&
                              (0, i.jsx)(m.A, {
                                id: "businessProfiles.insights.nonlocalChartDescription",
                                defaultMessage:
                                  "Daily mentions and website clicks in UTC. Unknown counts appear as gaps. Profile views are unsupported",
                              }),
                            !J &&
                              !el &&
                              (0, i.jsx)(m.A, {
                                id: "businessProfiles.insights.dailyChartDescription",
                                defaultMessage:
                                  "Daily recorded events in UTC. Profile views count opens of this profile in ChatGPT. Website clicks count clicks on the business website link. Missing days appear as gaps.",
                              }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "relative h-[271px] w-full [&_.recharts-surface_g[tabindex='-1']:focus:not(:focus-visible)]:outline-none [&_.recharts-surface:focus:not(:focus-visible)]:outline-none",
                          children: [
                            (0, i.jsx)(l.v, {
                              points: L,
                              values: L.map((e) => e.values[ei] ?? null),
                              dataKey: `values.${ei}`,
                              label: K.formatMessage(N[ei]),
                              empty: eo,
                              revealClass: (0, u.A)(!Q && "reveal-vbrybL"),
                              tooltip: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(l.y, {
                                    points: L,
                                    renderContent: (e, s) => (0, i.jsx)(P, { date: s, point: e, metric: ei }),
                                  }),
                                  el &&
                                    L.map((e, s) => {
                                      let t = e.values[ei]
                                      return null == t || L[s - 1]?.values[ei] != null || L[s + 1]?.values[ei] != null
                                        ? null
                                        : (0, i.jsx)(
                                            b.r,
                                            {
                                              x: e.date,
                                              y: t,
                                              r: 4,
                                              fill: "var(--chatgpt-blue-400)",
                                              stroke: "var(--color-surface)",
                                              strokeWidth: 2,
                                            },
                                            e.date,
                                          )
                                    }),
                                ],
                              }),
                            }),
                            eo &&
                              (0, i.jsx)("div", {
                                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                                children:
                                  "insufficient" === $
                                    ? (0, i.jsx)("p", {
                                        className: "max-w-md px-4 text-center text-sm @[32rem]/performance:px-6",
                                        role: "status",
                                        children: (0, i.jsx)(m.A, {
                                          id: "businessProfiles.insights.insufficientMentions.description",
                                          defaultMessage:
                                            "See how often your business comes up in ChatGPT. Once there are enough mentions, you\u2019ll see trends here.",
                                        }),
                                      })
                                    : (0, i.jsx)(T, {}),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null
      return (
        F[27] !== W
          ? ((E =
              null != W
                ? (0, i.jsx)(j.t, { variant: "outlinedLarge", dividers: !1, children: W }, "website-access")
                : null),
            (F[27] = W),
            (F[28] = E))
          : (E = F[28]),
        F[29] !== D || F[30] !== ef || F[31] !== eh || F[32] !== E || F[33] !== k || F[34] !== Z
          ? ((q = (0, i.jsxs)("section", {
              "aria-labelledby": Z,
              className: "@container/performance flex min-w-0 flex-col gap-6",
              children: [k, D, ef, eh, E],
            })),
            (F[29] = D),
            (F[30] = ef),
            (F[31] = eh),
            (F[32] = E),
            (F[33] = k),
            (F[34] = Z),
            (F[35] = q))
          : (q = F[35]),
        q
      )
    }
    function I(e) {
      let s,
        t,
        l,
        a,
        r,
        c,
        d,
        f,
        h,
        g,
        b,
        _,
        x = (0, n.c)(38),
        { value: w, period: j, compact: A } = e,
        C = void 0 !== A && A,
        S = (0, p.A)()
      x[0] !== S || x[1] !== w.delta
        ? ((s = S.formatNumber(w.delta)), (x[0] = S), (x[1] = w.delta), (x[2] = s))
        : (s = x[2])
      let k = s
      x[3] !== S || x[4] !== w.percentChange
        ? ((t = S.formatNumber(Math.abs(w.percentChange ?? 0), { style: "percent", maximumFractionDigits: 2 })),
          (x[3] = S),
          (x[4] = w.percentChange),
          (x[5] = t))
        : (t = x[5])
      let I = t,
        P = "unchanged"
      ;(w.delta > 0 ? (P = "increase") : w.delta < 0 && (P = "decrease"),
        x[6] !== I || x[7] !== w.percentChange
          ? ((l =
              null == w.percentChange
                ? (0, i.jsx)(m.A, { id: "businessProfiles.insights.newMetricActivity", defaultMessage: "New" })
                : I),
            (x[6] = I),
            (x[7] = w.percentChange),
            (x[8] = l))
          : (l = x[8]))
      let M = l
      ;(x[9] !== w.delta
        ? ((c = (0, u.A)({ "text-green": w.delta > 0, "text-orange": w.delta < 0, "text-secondary": 0 === w.delta })),
          (a = "trend"),
          (r = (0, u.A)("inline-flex items-center align-top font-medium", c)),
          (x[9] = w.delta),
          (x[10] = a),
          (x[11] = r),
          (x[12] = c))
        : ((a = x[10]), (r = x[11]), (c = x[12])),
        x[13] !== w.delta
          ? ((d = w.delta > 0 ? (0, i.jsx)(v.$XR, {}) : null), (x[13] = w.delta), (x[14] = d))
          : (d = x[14]),
        x[15] !== w.delta
          ? ((f = w.delta < 0 ? (0, i.jsx)(y.I, { asset: o }) : null), (x[15] = w.delta), (x[16] = f))
          : (f = x[16]),
        x[17] !== a || x[18] !== r || x[19] !== d || x[20] !== f || x[21] !== M
          ? ((h = (0, i.jsxs)("span", { className: r, children: [d, f, M] }, a)),
            (x[17] = a),
            (x[18] = r),
            (x[19] = d),
            (x[20] = f),
            (x[21] = M),
            (x[22] = h))
          : (h = x[22]))
      let N = h
      return (
        x[23] !== P || x[24] !== I || x[25] !== j || x[26] !== w.delta || x[27] !== w.percentChange
          ? ((g = (0, i.jsx)("span", {
              className: "sr-only",
              children:
                null == w.percentChange
                  ? (0, i.jsx)(m.A, {
                      id: "businessProfiles.insights.newActivityPeriodAnnouncement",
                      defaultMessage: "Increased by {count, number} from zero vs. previous {days} days",
                      values: { count: w.delta, days: j },
                    })
                  : (0, i.jsx)(m.A, {
                      id: "businessProfiles.insights.periodChangeAnnouncement",
                      defaultMessage:
                        "{direction, select, increase {Increased by {count, number} ({percent})} decrease {Decreased by {count, number} ({percent})} other {No change}} vs. previous {days} days",
                      values: { direction: P, count: Math.abs(w.delta), percent: I, days: j },
                    }),
            })),
            (x[23] = P),
            (x[24] = I),
            (x[25] = j),
            (x[26] = w.delta),
            (x[27] = w.percentChange),
            (x[28] = g))
          : (g = x[28]),
        x[29] !== C || x[30] !== k || x[31] !== j || x[32] !== N || x[33] !== c
          ? ((b = (0, i.jsx)("span", {
              "aria-hidden": "true",
              children: C
                ? N
                : (0, i.jsx)(m.A, {
                    id: "businessProfiles.insights.chartPeriodChange",
                    defaultMessage: "<change>{count} ({trend})</change> \xb7 Last {days} days",
                    values: {
                      count: k,
                      trend: N,
                      days: j,
                      change: (e) => (0, i.jsx)("span", { className: c, children: e }, "change"),
                    },
                  }),
            })),
            (x[29] = C),
            (x[30] = k),
            (x[31] = j),
            (x[32] = N),
            (x[33] = c),
            (x[34] = b))
          : (b = x[34]),
        x[35] !== g || x[36] !== b
          ? ((_ = (0, i.jsxs)(i.Fragment, { children: [g, b] })), (x[35] = g), (x[36] = b), (x[37] = _))
          : (_ = x[37]),
        _
      )
    }
    function P(e) {
      let s,
        t = (0, n.c)(4),
        { date: l, point: a, metric: r } = e
      return (
        t[0] !== l || t[1] !== r || t[2] !== a.values
          ? ((s = (0, i.jsx)(i.Fragment, {
              children:
                null == a.values[r]
                  ? (0, i.jsx)(m.A, {
                      id: "businessProfiles.insights.unavailableTooltip",
                      defaultMessage: "{date} \xb7 Unavailable",
                      values: { date: l },
                    })
                  : (0, i.jsx)(m.A, {
                      ...{
                        entity_shown: N.mentionsTooltip,
                        profile_open: N.profileViewsTooltip,
                        website_click: N.websiteClicksTooltip,
                      }[r],
                      values: { date: l, count: a.values[r] },
                    }),
            })),
            (t[0] = l),
            (t[1] = r),
            (t[2] = a.values),
            (t[3] = s))
          : (s = t[3]),
        s
      )
    }
    function M(e) {
      let s,
        t = (0, n.c)(2),
        { value: l } = e
      return (
        t[0] !== l
          ? ((s =
              null == l
                ? (0, i.jsxs)("span", {
                    children: [
                      (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(m.A, {
                          id: "businessProfiles.insights.unavailableDash",
                          defaultMessage: "\u2014",
                        }),
                      }),
                      (0, i.jsx)("span", {
                        className: "sr-only",
                        children: (0, i.jsx)(m.A, { ...N.unavailableValue }),
                      }),
                    ],
                  })
                : (0, i.jsx)(g.Gr, { value: l })),
            (t[0] = l),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    let N = (0, g.YK)({
      mentionsDefinition: {
        id: "businessProfiles.insights.metricHelp.mentions.description",
        defaultMessage: "Number of times your business appeared in ChatGPT responses, including citations.",
      },
      profileViewsDefinition: {
        id: "businessProfiles.insights.metricHelp.profileViews.description",
        defaultMessage: "Number of times people opened your business profile in ChatGPT.",
      },
      websiteClicksDefinition: {
        id: "businessProfiles.insights.metricHelp.websiteClicks.description",
        defaultMessage:
          "Number of recorded clicks on links to your website in ChatGPT. Clicks don\u2019t confirm website visits or conversions.",
      },
      mentionsHelpLabel: {
        id: "businessProfiles.insights.metricHelp.mentions.label",
        defaultMessage: "About mentions",
      },
      profileViewsHelpLabel: {
        id: "businessProfiles.insights.metricHelp.profileViews.label",
        defaultMessage: "About profile views",
      },
      websiteClicksHelpLabel: {
        id: "businessProfiles.insights.metricHelp.websiteClicks.label",
        defaultMessage: "About website clicks",
      },
      entity_shown: { id: "businessProfiles.insights.mentions", defaultMessage: "Mentions" },
      mentionsTooltip: {
        id: "businessProfiles.insights.mentionsTooltip",
        defaultMessage: "{date} \xb7 {count, plural, one {# mention} other {# mentions}}",
      },
      profile_open: { id: "businessProfiles.insights.profileViews", defaultMessage: "Profile views" },
      website_click: { id: "businessProfiles.insights.websiteClicks", defaultMessage: "Website clicks" },
      profileViewsTooltip: {
        id: "businessProfiles.insights.profileViewsTooltip",
        defaultMessage: "{date} \xb7 {count, plural, one {# profile view} other {# profile views}}",
      },
      websiteClicksTooltip: {
        id: "businessProfiles.insights.websiteClicksTooltip",
        defaultMessage: "{date} \xb7 {count, plural, one {# website click} other {# website clicks}}",
      },
      loading: { id: "businessProfiles.insights.loading", defaultMessage: "Loading insights\u2026" },
      partial: {
        id: "businessProfiles.insights.partial",
        defaultMessage:
          "Some data is still unavailable. Incomplete totals are hidden, and missing days appear as gaps.",
      },
      unavailable: {
        id: "businessProfiles.insights.unavailable",
        defaultMessage: "Data isn\u2019t available for these dates yet",
      },
      unsupported: {
        id: "businessProfiles.insights.unsupported",
        defaultMessage: "Insights aren\u2019t available for this business yet",
      },
      forbidden: {
        id: "businessProfiles.insights.forbidden",
        defaultMessage: "Insights aren\u2019t available to this account",
      },
      error: { id: "businessProfiles.insights.error", defaultMessage: "Couldn\u2019t load insights" },
      unavailableValue: { id: "businessProfiles.insights.unavailableValue", defaultMessage: "Unavailable" },
    })
    function T() {
      let e,
        s = (0, n.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("p", {
              className: "max-w-[25rem] px-4 text-center text-sm",
              role: "status",
              children: (0, i.jsx)(m.A, {
                id: "businessProfiles.pendingOverview.emptyInsights",
                defaultMessage:
                  "No data is available for this timeframe. Try a different timeframe or check back later.",
              }),
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
  },
  A3R5(e, s, t) {
    t.d(s, { BusinessProfileManagerView: () => ie })
    var i = t("ABep"),
      n = t("QosV"),
      l = t("plnw"),
      a = t("ESTr")
    let r = (0, a.a)({
      name: "person-2-badge-plus-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.312012, y: 2.54248, width: 19.512114, height: 16.37207 },
        visualBounds: { x: 0.312012, y: 2.54248, width: 19.512114, height: 16.37207 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.312012, y: 2.54248, width: 19.512114, height: 16.37207 },
        center: { x: 10.068069, y: 10.728515 },
        insets: { top: 2.54248, right: 0.175874, bottom: 1.08545, left: 0.312012 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.068069, y: 10.728515 },
          foreground: { x: 10.068069, y: 10.728515 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M16.4491 12.1646C16.9324 12.1646 17.3241 12.5563 17.3241 13.0396V14.6646H18.9491C19.4324 14.6646 19.8241 15.0563 19.8241 15.5396C19.8239 16.0226 19.4322 16.4146 18.9491 16.4146H17.3241V18.0396C17.3239 18.5226 16.9322 18.9146 16.4491 18.9146C15.9661 18.9145 15.5744 18.5226 15.5741 18.0396V16.4146H13.9491C13.4661 16.4145 13.0744 16.0226 13.0741 15.5396C13.0741 15.0563 13.4659 14.6646 13.9491 14.6646H15.5741V13.0396C15.5741 12.5563 15.9659 12.1646 16.4491 12.1646Z" fill="currentColor"/> <path d="M13.2431 10.5347C13.7263 10.5347 14.1181 10.9264 14.1181 11.4097C14.1178 11.8927 13.7262 12.2847 13.2431 12.2847C10.804 12.2847 8.80077 14.1566 8.59366 16.5415C8.55155 17.0226 8.12763 17.3792 7.64639 17.3374C7.16523 17.2955 6.80904 16.8713 6.85049 16.3901C7.13546 13.1087 9.88824 10.5347 13.2431 10.5347Z" fill="currentColor"/> <path d="M5.78604 10.4146C6.15242 10.4146 6.51141 10.4535 6.85733 10.5269C7.32992 10.6272 7.63232 11.0913 7.53213 11.564C7.43185 12.0367 6.96676 12.339 6.49405 12.2388C6.26662 12.1906 6.02951 12.1646 5.78604 12.1646C3.83109 12.1649 2.22565 13.6652 2.05948 15.5767C2.01765 16.0581 1.59266 16.4144 1.11123 16.3726C0.630235 16.3303 0.273571 15.9064 0.315336 15.4253C0.559315 12.6173 2.91532 10.4149 5.78604 10.4146Z" fill="currentColor"/> <path d="M13.2431 2.54248C15.3044 2.54257 16.9754 4.21358 16.9755 6.2749C16.9755 8.3363 15.3044 10.0072 13.2431 10.0073C11.1817 10.0072 9.51065 8.33626 9.51065 6.2749C9.51074 4.21362 11.1818 2.54264 13.2431 2.54248ZM13.2431 4.29248C12.1483 4.29264 11.2607 5.18012 11.2606 6.2749C11.2606 7.36976 12.1482 8.25717 13.2431 8.25732C14.3379 8.25723 15.2255 7.3698 15.2255 6.2749C15.2254 5.18008 14.3379 4.29257 13.2431 4.29248Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M5.61416 3.27881C7.41186 3.27905 8.87002 4.73691 8.87002 6.53467C8.86977 8.33221 7.41171 9.78931 5.61416 9.78955C3.81663 9.7893 2.35953 8.3322 2.35928 6.53467C2.35928 4.73692 3.81647 3.27906 5.61416 3.27881ZM5.61416 5.02881C4.78297 5.02906 4.10928 5.70342 4.10928 6.53467C4.10953 7.3657 4.78313 8.0393 5.61416 8.03955C6.44521 8.03931 7.11977 7.36571 7.12002 6.53467C7.12002 5.70341 6.44536 5.02905 5.61416 5.02881Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = t("qmMi"),
      c = t("zd8w"),
      d = t("oyxz"),
      u = t("Wf1j"),
      f = t("Qgfj"),
      h = t("Ywss"),
      p = t("UOa8"),
      m = t("MM0V"),
      g = t("Sm6l"),
      b = t("ZtSy"),
      _ = t("HOLv"),
      x = t("bVeK"),
      y = t("Bbed"),
      v = t("PkPj"),
      w = t("RNul"),
      j = t("BrP7"),
      A = t("SGsN"),
      C = t("ibLK"),
      S = t("OWtl"),
      k = t("OMIV"),
      I = t("bIvi"),
      P = t("iC84"),
      M = t("i4z1"),
      N = t("C1dV"),
      T = t("Kwur"),
      D = t("eShZ")
    function E({ accountId: e, userId: s, profileId: t }) {
      return "business-profiles:agent-creation-prompt:v1:" + JSON.stringify([e, s, t])
    }
    var q = t("hZax"),
      F = t("bOSa"),
      R = t("TjJt"),
      L = t("FQ6U"),
      O = t("UbDh"),
      B = t("FIwH")
    let V = (0, y._)(() =>
      t
        .e(422435)
        .then(t.bind(t, "PGyQ"))
        .then((e) => e.BusinessProfileAdAccountsDialog),
    )
    function U(e) {
      let s,
        t,
        l,
        a,
        r,
        d,
        u = (0, n.c)(24),
        { manager: f, authority: p, manualDialogOpen: m, onConnected: g } = e,
        b = (0, o.gh)(S.u),
        _ = (0, o.Ul)(O.cX),
        [x] = (0, h.ok)()
      u[0] !== p.userId ? ((s = () => (0, R.ni)(p.userId)), (u[0] = p.userId), (u[1] = s)) : (s = u[1])
      let [y] = (0, c.useState)(s),
        v = (0, c.useSyncExternalStore)(R.nX, y.getSnapshot, R.Pe)
      u[2] !== p || u[3] !== v || u[4] !== x
        ? ((l =
            null == (t = (0, R.N5)(p.userId, p.profileId, (0, R.dk)(x), v)) ||
            (x.has("flow_id") && null == (0, R.dk)(x))
              ? null
              : $(p, t, x.has("flow_id"))),
          (u[2] = p),
          (u[3] = v),
          (u[4] = x),
          (u[5] = t),
          (u[6] = l))
        : ((t = u[5]), (l = u[6]))
      let w = l
      u[7] !== m || u[8] !== w || u[9] !== _ || u[10] !== b
        ? ((a = () => {
            _?.owner != null && (m || _.owner !== w) && (0, O.oC)(b, _.owner)
          }),
          (u[7] = m),
          (u[8] = w),
          (u[9] = _),
          (u[10] = b),
          (u[11] = a))
        : (a = u[11])
      let j = _?.owner
      return (
        u[12] !== m || u[13] !== w || u[14] !== b || u[15] !== j
          ? ((r = [m, w, j, b]), (u[12] = m), (u[13] = w), (u[14] = b), (u[15] = j), (u[16] = r))
          : (r = u[16]),
        (0, c.useEffect)(a, r),
        u[17] !== p || u[18] !== t || u[19] !== f || u[20] !== m || u[21] !== g || u[22] !== x
          ? ((d =
              null == t || m || (x.has("flow_id") && null == (0, R.dk)(x))
                ? null
                : (0, i.jsx)(
                    G,
                    { manager: f, authority: p, handoff: t, hasExplicitFlow: x.has("flow_id"), onConnected: g },
                    `${p.accountId}:${p.userId}:${p.profileId}:${t.flowId}`,
                  )),
            (u[17] = p),
            (u[18] = t),
            (u[19] = f),
            (u[20] = m),
            (u[21] = g),
            (u[22] = x),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    function $(e, s, t) {
      return JSON.stringify([e.accountId, e.userId, e.profileId, s.flowId, s.adAccountId, s.createdAt, t])
    }
    function G(e) {
      let s,
        t,
        l,
        a,
        r,
        u,
        f,
        g,
        b,
        _,
        x,
        y,
        v,
        w,
        j = (0, n.c)(88),
        { manager: A, authority: C, handoff: k, hasExplicitFlow: I, onConnected: P } = e,
        M = (0, o.gh)(S.u),
        N = (0, p.As)(),
        T = (0, o.Ul)(O.cX),
        D = (0, h.$P)("/auth/login")
      j[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = F.oD), (j[0] = s)) : (s = j[0])
      let E = (0, q.Zj)(s)
      j[1] !== C || j[2] !== E
        ? ((t = { authority: C, separateConnectionRecovery: E }), (j[1] = C), (j[2] = E), (j[3] = t))
        : (t = j[3])
      let { data: U, error: G, refetch: H } = (0, o._U)(L.fI, t)
      ;(j[4] !== C || j[5] !== E
        ? ((l = { authority: C, separateConnectionRecovery: E }), (j[4] = C), (j[5] = E), (j[6] = l))
        : (l = j[6]),
        j[7] !== E ? ((a = { enabled: E }), (j[7] = E), (j[8] = a)) : (a = j[8]))
      let z = (0, o._U)(L.c6, l, a),
        W = (0, o.Ul)(O.RX)
      if (j[9] !== W || j[10] !== C || j[11] !== k) {
        let e
        ;(j[13] !== C || j[14] !== k
          ? ((e = (e) => (0, O.Kk)(e.authority, C) && e.adAccountId === k.adAccountId && "submitted" === e.submission),
            (j[13] = C),
            (j[14] = k),
            (j[15] = e))
          : (e = j[15]),
          (r = W.find(e)),
          (j[9] = W),
          (j[10] = C),
          (j[11] = k),
          (j[12] = r))
      } else r = j[12]
      let K = r
      j[16] !== C || j[17] !== U || j[18] !== k || j[19] !== z.data || j[20] !== E || j[21] !== K?.addAdAccountAdmins
        ? ((u = K?.addAdAccountAdmins === !0 && (0, L.MQ)(E ? z.data : U, C, k.adAccountId)),
          (j[16] = C),
          (j[17] = U),
          (j[18] = k),
          (j[19] = z.data),
          (j[20] = E),
          (j[21] = K?.addAdAccountAdmins),
          (j[22] = u))
        : (u = j[22])
      let Q = u,
        Z = null == G && U?.business_profile_id === C.profileId
      j[23] !== C || j[24] !== k || j[25] !== z.data || j[26] !== z.error
        ? ((f =
            null == z.error &&
            z.data?.business_profile_id === C.profileId &&
            !z.data.accounts.some((e) => e.id === k.adAccountId)),
          (j[23] = C),
          (j[24] = k),
          (j[25] = z.data),
          (j[26] = z.error),
          (j[27] = f))
        : (f = j[27])
      let Y = f
      j[28] !== U || j[29] !== Q || j[30] !== k || j[31] !== Z || j[32] !== Y || j[33] !== E || j[34] !== K
        ? ((g = Z && (null == K || Q) && (!E || Y) && U.accounts.some((e) => e.id === k.adAccountId && !(0, L.kT)(e))),
          (j[28] = U),
          (j[29] = Q),
          (j[30] = k),
          (j[31] = Z),
          (j[32] = Y),
          (j[33] = E),
          (j[34] = K),
          (j[35] = g))
        : (g = j[35])
      let J = g
      ;(j[36] !== C || j[37] !== J || j[38] !== Q || j[39] !== k || j[40] !== M || j[41] !== K
        ? ((_ = () => {
            J && (Q && null != K && (0, O.pW)(M, C, k.adAccountId, K), (0, R.xr)(k, "completed"))
          }),
          (b = [C, J, Q, k, M, K]),
          (j[36] = C),
          (j[37] = J),
          (j[38] = Q),
          (j[39] = k),
          (j[40] = M),
          (j[41] = K),
          (j[42] = b),
          (j[43] = _))
        : ((b = j[42]), (_ = j[43])),
        (0, c.useEffect)(_, b),
        j[44] !== G ? ((x = (0, O.Di)(G)), (j[44] = G), (j[45] = x)) : (x = j[45]))
      let X = x
      if (null != X) {
        let e,
          s,
          t,
          n,
          l,
          a,
          r = T?.status === "error"
        ;(j[46] !== X || j[47] !== r
          ? ((e = (0, i.jsx)(B.d, { reason: X, signInFailed: r, reading: !0 })), (j[46] = X), (j[47] = r), (j[48] = e))
          : (e = j[48]),
          j[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(d.A, {
                id: "businessProfiles.adAccounts.signInAgain",
                defaultMessage: "Sign in again",
              })),
              (j[49] = s))
            : (s = j[49]))
        let o = T?.status === "signing-in" || N.isLoading || N.accountId !== C.accountId || N.userId !== C.userId
        return (
          j[50] !== C || j[51] !== k || j[52] !== I || j[53] !== D || j[54] !== X || j[55] !== M
            ? ((t = () =>
                void (0, O.F0)(M, C, X, D, {
                  owner: $(C, k, I),
                  isCurrent: () => {
                    let e = new URLSearchParams(window.location.search),
                      s = (0, R.dk)(e)
                    if (null != M.get(O.Vq) || e.has("flow_id") !== I || (e.has("flow_id") && null == s)) return !1
                    let t = (0, R.N5)(C.userId, C.profileId, s)
                    return null != t && t.createdAt === k.createdAt && $(C, t, I) === $(C, k, I)
                  },
                  subscribe: R.nX,
                })),
              (j[50] = C),
              (j[51] = k),
              (j[52] = I),
              (j[53] = D),
              (j[54] = X),
              (j[55] = M),
              (j[56] = t))
            : (t = j[56]),
          j[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(d.A, { id: "businessProfiles.adAccounts.handoffDismiss", defaultMessage: "Dismiss" })),
              (j[57] = n))
            : (n = j[57]),
          j[58] !== k || j[59] !== M
            ? ((l = () => {
                ;((0, O.D$)(M), (0, R.xr)(k, "dismissed"))
              }),
              (j[58] = k),
              (j[59] = M),
              (j[60] = l))
            : (l = j[60]),
          j[61] !== e || j[62] !== o || j[63] !== t || j[64] !== l
            ? ((a = (0, i.jsx)(m.l, {
                type: "warning",
                role: "alert",
                density: "compact",
                content: e,
                primaryCtaText: s,
                isPrimaryCtaDisabled: o,
                onPrimaryCtaClick: t,
                secondaryCtaText: n,
                onSecondaryCtaClick: l,
              })),
              (j[61] = e),
              (j[62] = o),
              (j[63] = t),
              (j[64] = l),
              (j[65] = a))
            : (a = j[65]),
          a
        )
      }
      if (null != G || (null != U && U.business_profile_id !== C.profileId)) {
        let e, s, t, n, l, a
        return (
          j[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.adAccounts.handoffReadError",
                defaultMessage: "Couldn\u2019t check your ad account connection",
              })),
              (s = (0, i.jsx)(d.A, { id: "businessProfiles.adAccounts.handoffRetry", defaultMessage: "Try again" })),
              (j[66] = e),
              (j[67] = s))
            : ((e = j[66]), (s = j[67])),
          j[68] !== H ? ((t = () => void H()), (j[68] = H), (j[69] = t)) : (t = j[69]),
          j[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(d.A, { id: "businessProfiles.adAccounts.handoffDismiss", defaultMessage: "Dismiss" })),
              (j[70] = n))
            : (n = j[70]),
          j[71] !== k ? ((l = () => (0, R.xr)(k, "dismissed")), (j[71] = k), (j[72] = l)) : (l = j[72]),
          j[73] !== t || j[74] !== l
            ? ((a = (0, i.jsx)(m.l, {
                type: "warning",
                role: "alert",
                density: "compact",
                content: e,
                primaryCtaText: s,
                onPrimaryCtaClick: t,
                secondaryCtaText: n,
                onSecondaryCtaClick: l,
              })),
              (j[73] = t),
              (j[74] = l),
              (j[75] = a))
            : (a = j[75]),
          a
        )
      }
      return !Z || J
        ? null
        : (j[76] !== k ? ((y = () => (0, R.xr)(k, "dismissed")), (j[76] = k), (j[77] = y)) : (y = j[77]),
          j[78] !== C.profileId || j[79] !== k || j[80] !== P
            ? ((v = (e) => {
                e.businessProfileId === C.profileId &&
                  (P(e), (0, R.xr)(k, e.adAccountId === k.adAccountId ? "completed" : "dismissed"))
              }),
              (j[78] = C.profileId),
              (j[79] = k),
              (j[80] = P),
              (j[81] = v))
            : (v = j[81]),
          j[82] !== C || j[83] !== k.adAccountId || j[84] !== A || j[85] !== y || j[86] !== v
            ? ((w = (0, i.jsx)(V, {
                manager: A,
                authority: C,
                initialView: "connect",
                preferredAdAccountId: k.adAccountId,
                onClose: y,
                onConnected: v,
              })),
              (j[82] = C),
              (j[83] = k.adAccountId),
              (j[84] = A),
              (j[85] = y),
              (j[86] = v),
              (j[87] = w))
            : (w = j[87]),
          w)
    }
    var H = t("kvmP"),
      z = t("Ot7V"),
      W = t.p + "assets/965923e6dc13.svg"
    function K(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c,
        d = (0, n.c)(18),
        { icon: u, title: f, content: h, customCtas: p, trailingAction: m } = e
      return (
        d[0] !== f
          ? ((s = (0, i.jsx)("h3", { className: "font-medium", children: f })), (d[0] = f), (d[1] = s))
          : (s = d[1]),
        d[2] !== h
          ? ((t = (0, i.jsx)("div", { className: "text-secondary", children: h })), (d[2] = h), (d[3] = t))
          : (t = d[3]),
        d[4] !== s || d[5] !== t
          ? ((l = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [s, t] })),
            (d[4] = s),
            (d[5] = t),
            (d[6] = l))
          : (l = d[6]),
        d[7] !== p || d[8] !== l
          ? ((a = (0, i.jsxs)("div", {
              className:
                "flex min-w-0 flex-1 flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
              children: [l, p],
            })),
            (d[7] = p),
            (d[8] = l),
            (d[9] = a))
          : (a = d[9]),
        d[10] !== u || d[11] !== a
          ? ((r = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 gap-3 md:items-center", children: [u, a] })),
            (d[10] = u),
            (d[11] = a),
            (d[12] = r))
          : (r = d[12]),
        d[13] !== m
          ? ((o = (0, i.jsx)("div", { className: "shrink-0 self-center", children: m })), (d[13] = m), (d[14] = o))
          : (o = d[14]),
        d[15] !== r || d[16] !== o
          ? ((c = (0, i.jsxs)("aside", {
              className:
                "flex w-full items-start gap-4 rounded-3xl border border-default bg-transparent p-4 text-sm leading-5 tracking-[-0.15px] text-default md:min-h-[94px] md:items-center",
              children: [r, o],
            })),
            (d[15] = r),
            (d[16] = o),
            (d[17] = c))
          : (c = d[17]),
        c
      )
    }
    var Q = t("Gnfq")
    function Z(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        f,
        h,
        p,
        m,
        b,
        _,
        y = (0, n.c)(20),
        { profileId: v } = e
      y[0] !== v ? ((s = (0, Q.ND)(v)), (y[0] = v), (y[1] = s)) : (s = y[1])
      let w = s,
        j = (0, u.A)(),
        [A, C] = (0, c.useState)(!1)
      return A
        ? null
        : (y[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("img", { className: "size-7 shrink-0", src: W, alt: "", width: 28, height: 28 })),
              (l = (0, i.jsx)(d.A, { id: "businessProfiles.adsUpsell.title", defaultMessage: "Advertise on ChatGPT" })),
              (a = (0, i.jsx)(d.A, {
                id: "businessProfiles.adsUpsell.description",
                defaultMessage: "Promote your business as people explore their options",
              })),
              (y[2] = t),
              (y[3] = l),
              (y[4] = a))
            : ((t = y[2]), (l = y[3]), (a = y[4])),
          y[5] !== w
            ? ((r = (e) => {
                ;(0, z.PQ)({
                  event: e,
                  href: w,
                  disposition: "new-tab",
                  initiator: "open_in_browser_bridge",
                  openAsWebsite: !0,
                })
              }),
              (y[5] = w),
              (y[6] = r))
            : (r = y[6]),
          y[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, i.jsx)(d.A, {
                id: "businessProfiles.adsUpsell.startAdvertising",
                defaultMessage: "Start advertising",
              })),
              (y[7] = o))
            : (o = y[7]),
          y[8] !== w || y[9] !== r
            ? ((f = (0, i.jsx)(g.z, {
                className: "max-w-full shrink-0 font-normal",
                color: "outlineGhost",
                size: "dialogAction",
                href: w,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: r,
                children: o,
              })),
              (y[8] = w),
              (y[9] = r),
              (y[10] = f))
            : (f = y[10]),
          y[11] !== j
            ? ((h = j.formatMessage({ id: "businessProfiles.adsUpsell.dismiss", defaultMessage: "Dismiss banner" })),
              (y[11] = j),
              (y[12] = h))
            : (h = y[12]),
          y[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = () => C(!0)), (p = (0, i.jsx)(x.pgK, {})), (y[13] = p), (y[14] = m))
            : ((p = y[13]), (m = y[14])),
          y[15] !== h
            ? ((b = (0, i.jsx)(g.$, { "aria-label": h, color: "ghost", size: "iconCircle", onClick: m, children: p })),
              (y[15] = h),
              (y[16] = b))
            : (b = y[16]),
          y[17] !== b || y[18] !== f
            ? ((_ = (0, i.jsx)(K, { icon: t, title: l, content: a, customCtas: f, trailingAction: b })),
              (y[17] = b),
              (y[18] = f),
              (y[19] = _))
            : (_ = y[19]),
          _)
    }
    var Y = t("ar75"),
      J = t("fNqR"),
      X = t("SZ12"),
      ee = t("hIcQ")
    let es = ({ accountId: e, profileId: s, flowId: t, checkKey: i, request: n, signal: l }) =>
      T.Request.safePost(
        "/chat/frontend/v1/business-profiles/{business_profile_id}/manager/verification-flows/{flow_id}/checks/{check_key}/challenge",
        {
          additionalHeaders: { "ChatGPT-Account-ID": e, "x-openai-use-sheep": "1" },
          parameters: {
            query: { consistency: "relaxed-v1", projection: "field" },
            path: { business_profile_id: s, flow_id: t, check_key: i },
          },
          requestBody: n,
          signal: l,
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426, 429],
        },
      )
    var et = t("naYv"),
      ei = t("HqVX"),
      en = t("nBtg"),
      el = t("rxm1"),
      ea = t("MnTr"),
      er = t("tnGT"),
      eo = t("WHI8"),
      ec = t("TjQQ"),
      ed = t("S2r0"),
      eu = t("T0Rc"),
      ef = t("DBCl"),
      eh = t("GECF"),
      ep = t("Oklx"),
      em = t("GTUZ"),
      eg = t("W7Gu"),
      eb = t("slpy")
    let e_ = (0, a.a)({
      name: "arrow-rotate-counterclockwise-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.833252, y: 1.833496, width: 16.333008, height: 16.333008 },
        visualBounds: { x: 1.833252, y: 1.833496, width: 16.333008, height: 16.333008 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.833252, y: 1.833496, width: 16.333008, height: 16.333008 },
        center: { x: 9.999756, y: 10 },
        insets: { top: 1.833496, right: 1.83374, bottom: 1.833496, left: 1.833252 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999756, y: 10 }, foreground: { x: 9.999756, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0002 1.8335C14.5104 1.83368 18.1663 5.49028 18.1663 10.0005C18.1661 14.5105 14.5103 18.1663 10.0002 18.1665C6.11259 18.1665 2.86067 15.4509 2.0354 11.814C1.92863 11.3428 2.22441 10.874 2.69556 10.7671C3.16672 10.6603 3.63551 10.9561 3.74243 11.4272C4.39094 14.2844 6.94777 16.4165 10.0002 16.4165C13.5438 16.4163 16.4161 13.5441 16.4163 10.0005C16.4163 6.45678 13.5439 3.58368 10.0002 3.5835C7.6669 3.58352 5.62297 4.82935 4.49927 6.69482H5.94946C6.43239 6.69508 6.82429 7.08688 6.82446 7.56982C6.8242 8.05269 6.43233 8.44457 5.94946 8.44482H2.70825C2.22517 8.44482 1.83352 8.05285 1.83325 7.56982V3.92432C1.83325 3.44107 2.225 3.04932 2.70825 3.04932C3.1915 3.04932 3.58325 3.44107 3.58325 3.92432V4.94873C5.07807 3.05257 7.39627 1.83352 10.0002 1.8335Z" fill="currentColor"/>',
    })
    var ex = t("irkb"),
      ey = t("xSOA"),
      ev = t("on57"),
      ew = t("ty20")
    function ej(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c,
        d,
        u = (0, n.c)(27),
        { manager: f, adminView: h } = e,
        { accountId: m } = (0, p.As)(),
        g = f.fields
      if (u[0] !== m || u[1] !== h || u[2] !== f.fields || u[3] !== f.profile) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          if (((r = g.find(eA)), null != h)) {
            let e,
              s = `${h.accountId}:${h.userId}:${f.profile.business_profile_id}`
            ;(u[9] !== h || u[10] !== f.profile.business_profile_id || u[11] !== s
              ? ((e = (0, i.jsx)("div", {
                  className: "@container/website",
                  children: (0, i.jsx)(eC, { adminView: h, profileId: f.profile.business_profile_id }, s),
                })),
                (u[9] = h),
                (u[10] = f.profile.business_profile_id),
                (u[11] = s),
                (u[12] = e))
              : (e = u[12]),
              (a = e))
            break e
          }
          if (null == m || "owner" !== f.profile.relationship || !f.profile.can_manage) {
            a = null
            break e
          }
          ;((l = "@container/website"),
            (s = eS),
            (t = JSON.stringify([m, f.profile.business_profile_id, r?.revision, r?.preview_value])))
        }
        ;((u[0] = m),
          (u[1] = h),
          (u[2] = f.fields),
          (u[3] = f.profile),
          (u[4] = s),
          (u[5] = t),
          (u[6] = l),
          (u[7] = a),
          (u[8] = r))
      } else ((s = u[4]), (t = u[5]), (l = u[6]), (a = u[7]), (r = u[8]))
      if (a !== Symbol.for("react.early_return_sentinel")) return a
      u[13] !== f.capabilities || u[14] !== r?.can_edit
        ? ((o = r?.can_edit === !0 && f.capabilities.editable_sections.includes("contact")),
          (u[13] = f.capabilities),
          (u[14] = r?.can_edit),
          (u[15] = o))
        : (o = u[15])
      let b = r?.revision,
        _ = r?.preview_value
      return (
        u[16] !== s ||
        u[17] !== m ||
        u[18] !== f.profile.business_profile_id ||
        u[19] !== t ||
        u[20] !== o ||
        u[21] !== b ||
        u[22] !== _
          ? ((c = (0, i.jsx)(
              s,
              {
                accountId: m,
                canEditWebsite: o,
                profileId: f.profile.business_profile_id,
                websiteRevision: b,
                websiteValue: _,
              },
              t,
            )),
            (u[16] = s),
            (u[17] = m),
            (u[18] = f.profile.business_profile_id),
            (u[19] = t),
            (u[20] = o),
            (u[21] = b),
            (u[22] = _),
            (u[23] = c))
          : (c = u[23]),
        u[24] !== l || u[25] !== c
          ? ((d = (0, i.jsx)("div", { className: l, children: c })), (u[24] = l), (u[25] = c), (u[26] = d))
          : (d = u[26]),
        d
      )
    }
    function eA(e) {
      return "website" === e.field_key
    }
    function eC(e) {
      let s,
        t,
        l,
        a = (0, n.c)(12),
        { adminView: r, profileId: o } = e
      a[0] !== r || a[1] !== o ? ((s = ek(r.accountId, o, r)), (a[0] = r), (a[1] = o), (a[2] = s)) : (s = a[2])
      let { data: c, dataUpdatedAt: d, error: u, isFetching: f, refetch: h } = (0, eu.I)(s)
      return (
        a[3] !== h ? ((t = () => h()), (a[3] = h), (a[4] = t)) : (t = a[4]),
        a[5] !== c || a[6] !== d || a[7] !== u || a[8] !== f || a[9] !== o || a[10] !== t
          ? ((l = (0, i.jsx)(eI, { profileId: o, data: c, dataUpdatedAt: d, error: u, isFetching: f, onRead: t })),
            (a[5] = c),
            (a[6] = d),
            (a[7] = u),
            (a[8] = f),
            (a[9] = o),
            (a[10] = t),
            (a[11] = l))
          : (l = a[11]),
        l
      )
    }
    function eS(e) {
      let s,
        t,
        l,
        a,
        r,
        c,
        d,
        u,
        f,
        h,
        p = (0, n.c)(41),
        { accountId: m, canEditWebsite: g, profileId: b, websiteRevision: _, websiteValue: x } = e,
        y = (0, ex.jE)(),
        v = (0, o._U)(k.JW, "2778625748"),
        w = (0, o._U)(k.dx, "2778625748")
      p[0] !== m || p[1] !== b || p[2] !== _ || p[3] !== x
        ? ((s = ek(m, b, void 0, _, x)), (p[0] = m), (p[1] = b), (p[2] = _), (p[3] = x), (p[4] = s))
        : (s = p[4])
      let j = s,
        A = j.queryKey
      p[5] !== m ? ((t = { "ChatGPT-Account-ID": m, "x-openai-use-sheep": "1" }), (p[5] = m), (p[6] = t)) : (t = p[6])
      let C = t
      p[7] !== b ? ((l = { path: { business_profile_id: b } }), (p[7] = b), (p[8] = l)) : (l = p[8])
      let S = l,
        { data: I, dataUpdatedAt: P, error: M, isFetching: N, refetch: E } = (0, eu.I)(j)
      ;(p[9] !== C || p[10] !== S
        ? ((a = () =>
            T.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/website-crawl/recrawl", {
              additionalHeaders: C,
              parameters: S,
              requestBody: {},
              retry: "never",
              expectedErrorStatuses: [401, 403, 404, 409, 429],
            })),
          (p[9] = C),
          (p[10] = S),
          (p[11] = a))
        : (a = p[11]),
        p[12] !== y || p[13] !== A
          ? ((r = (e) => {
              ;(null != e.next_allowed_at &&
                y.setQueryData(A, (s) =>
                  null == s || s.website_url !== e.website_url
                    ? s
                    : { ...s, can_request_recrawl: !1, next_allowed_at: e.next_allowed_at },
                ),
                y.invalidateQueries({ queryKey: A }))
            }),
            (p[12] = y),
            (p[13] = A),
            (p[14] = r))
          : (r = p[14]),
        p[15] !== a || p[16] !== r
          ? ((c = { mutationFn: a, onSuccess: r, retry: !1, gcTime: 0 }), (p[15] = a), (p[16] = r), (p[17] = c))
          : (c = p[17]))
      let { data: q, error: F, isPending: R, mutate: L, reset: O } = (0, ey.n)(c)
      p[18] !== b || p[19] !== E || p[20] !== F || p[21] !== O
        ? ((d = () =>
            E().then((e) => {
              e.isSuccess &&
                e.data.business_profile_id === b &&
                F instanceof D.FetchError &&
                [401, 403, 404].includes(F.status) &&
                O()
            })),
          (p[18] = b),
          (p[19] = E),
          (p[20] = F),
          (p[21] = O),
          (p[22] = d))
        : (d = p[22])
      let B = d
      return (
        p[23] !== L ? ((u = () => L()), (p[23] = L), (p[24] = u)) : (u = p[24]),
        p[25] !== g || p[26] !== R || p[27] !== v || p[28] !== w || p[29] !== q || p[30] !== F
          ? ((f = {
              canEditWebsite: g,
              recrawl: q,
              error: F,
              isPending: R,
              ownerWritesEnabled: v,
              ownerWritesLoading: w,
            }),
            (p[25] = g),
            (p[26] = R),
            (p[27] = v),
            (p[28] = w),
            (p[29] = q),
            (p[30] = F),
            (p[31] = f))
          : (f = p[31]),
        p[32] !== B ||
        p[33] !== I ||
        p[34] !== P ||
        p[35] !== M ||
        p[36] !== N ||
        p[37] !== b ||
        p[38] !== u ||
        p[39] !== f
          ? ((h = (0, i.jsx)(eI, {
              profileId: b,
              data: I,
              dataUpdatedAt: P,
              error: M,
              isFetching: N,
              onRead: B,
              onRequest: u,
              owner: f,
            })),
            (p[32] = B),
            (p[33] = I),
            (p[34] = P),
            (p[35] = M),
            (p[36] = N),
            (p[37] = b),
            (p[38] = u),
            (p[39] = f),
            (p[40] = h))
          : (h = p[40]),
        h
      )
    }
    function ek(e, s, t, i, n) {
      return (0, ed.j)({
        queryKey: null == t ? ["business-profiles", e, s, "website-crawl", i, n] : [...(0, N.L)(t, s), "website-crawl"],
        queryFn: async ({ signal: i }) => {
          let n = await T.Request.safeGet("/chat/frontend/v1/business-profiles/{business_profile_id}/website-crawl", {
            additionalHeaders: {
              "ChatGPT-Account-ID": e,
              "x-openai-use-sheep": "1",
              ...(null == t ? {} : { [ef.zBc]: e }),
            },
            parameters: { path: { business_profile_id: s }, ...(null == t ? {} : { query: (0, N.C0)(t) }) },
            expectedIdentity: t,
            expectedErrorStatuses: [401, 403, 404],
            signal: i,
          })
          return (i.throwIfAborted(), n)
        },
        ...eg.I,
        staleTime: 3e5,
        gcTime: 9e5,
        retry: !1,
      })
    }
    function eI(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        u,
        f,
        h,
        p,
        m,
        b,
        x,
        y,
        v,
        w,
        j,
        A,
        C,
        S,
        k,
        I,
        P,
        M,
        N = (0, n.c)(87),
        { profileId: T, data: D, dataUpdatedAt: E, error: q, isFetching: F, onRead: R, onRequest: L, owner: O } = e,
        [B, V] = (0, c.useState)(null),
        U = O?.recrawl,
        $ = O?.error,
        G = O?.isPending ?? !1,
        H = O?.ownerWritesEnabled ?? !1,
        z = O?.ownerWritesLoading ?? !1,
        W = [q, $].some(eP),
        K = W || null != q || D?.business_profile_id !== T ? void 0 : D,
        Z = W || null == D || U?.website_url !== D.website_url ? void 0 : U,
        Y = K?.status === "crawled" && null != K.last_crawled_at && Number.isFinite(Date.parse(K.last_crawled_at)),
        J = K?.status === "not_crawled" && "fetch_failed" === K.reason,
        X = W || null != q || K?.status === "unavailable",
        ee = Date.parse(Z?.next_allowed_at ?? ""),
        es =
          K?.can_request_recrawl === !0 &&
          ("not_crawled" === K.status || "unavailable" === K.status) &&
          (!Number.isFinite(ee) || E >= ee),
        et = "loading"
      Z?.outcome !== "requested" ||
      es ||
      (Y &&
        K?.last_crawled_at != null &&
        null != Z.requested_at &&
        Date.parse(K.last_crawled_at) >= Date.parse(Z.requested_at))
        ? Y
          ? (et = "success")
          : J
            ? (et = "failed")
            : K?.reason === "robots_blocked"
              ? (et = "blocked")
              : K?.status === "not_crawled" && null == K.reason
                ? (et = "no_data")
                : K?.status === "not_crawled"
                  ? (et = "not_crawled")
                  : K?.status === "no_website"
                    ? (et = "no_website")
                    : (X || null != K) && (et = "unavailable")
        : (et = "requested")
      let ei = "blocked" === et || "unavailable" === et
      N[0] !== W || N[1] !== ei || N[2] !== H || N[3] !== z || N[4] !== et || N[5] !== K
        ? ((s =
            !W &&
            H &&
            !z &&
            K?.website_url != null &&
            (["failed", "not_crawled", "no_data"].includes(et) || (ei && !0 === K.can_request_recrawl))),
          (N[0] = W),
          (N[1] = ei),
          (N[2] = H),
          (N[3] = z),
          (N[4] = et),
          (N[5] = K),
          (N[6] = s))
        : (s = N[6])
      let en = s
      ;(N[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(d.A, {
            id: "businessProfiles.websiteCrawl.websiteAccessTooltip",
            defaultMessage: "Whether ChatGPT has been able to read info from your website.",
          })),
          (N[7] = t))
        : (t = N[7]),
        N[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("h3", {
              children: (0, i.jsx)(eb.m, {
                preventDismissOnFastClick: !0,
                content: t,
                children: (0, i.jsx)(eb.m.TriggerDecorator, {
                  unstyled: !0,
                  children: (0, i.jsx)("span", {
                    className: "text-card-title select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.webAccessStatus",
                      defaultMessage: "Website access",
                    }),
                  }),
                }),
              }),
            })),
            (N[8] = l))
          : (l = N[8]),
        N[9] !== et || N[10] !== K?.website_url
          ? ((a =
              K?.website_url != null || "no_website" === et
                ? (0, i.jsx)("div", {
                    className: "text-sm break-words text-tertiary select-text",
                    "aria-hidden": "no_website" === et,
                    children:
                      K?.website_url ??
                      (0, i.jsx)(d.A, {
                        id: "businessProfiles.websiteCrawl.noWebsitePlaceholder",
                        defaultMessage: "-",
                      }),
                  })
                : null),
            (N[9] = et),
            (N[10] = K?.website_url),
            (N[11] = a))
          : (a = N[11]),
        N[12] !== a
          ? ((r = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [l, a] })),
            (N[12] = a),
            (N[13] = r))
          : (r = N[13]))
      let el = "no_website" === et
      return (
        N[14] !== el
          ? ((o = (0, ev.A)("flex min-w-0 flex-col @3xl/website:items-end @3xl/website:text-end", { "sr-only": el })),
            (N[14] = el),
            (N[15] = o))
          : (o = N[15]),
        N[16] !== et
          ? ((u =
              "loading" !== et && "no_website" !== et
                ? (0, i.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, ev.A)("block size-2 shrink-0 rounded-full bg-current", {
                      "text-green": "success" === et,
                      "text-danger": "failed" === et || "blocked" === et,
                      "text-tertiary": !["success", "failed", "blocked"].includes(et),
                    }),
                  })
                : null),
            (N[16] = et),
            (N[17] = u))
          : (u = N[17]),
        N[18] !== et
          ? ((f = (0, i.jsx)("span", {
              className: "text-base/relaxed font-normal select-none",
              role: "status",
              children:
                "no_data" === et
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.noCrawlData",
                      defaultMessage: "No crawl data available",
                    })
                  : (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.websiteAccessState",
                      defaultMessage:
                        "{state, select, success {Access confirmed} failed {Couldn\u2019t read website} blocked {Access blocked} not_crawled {Not read yet} no_website {No website} requested {Check requested} loading {Checking\u2026} other {Status unavailable}}",
                      values: { state: et },
                    }),
            })),
            (N[18] = et),
            (N[19] = f))
          : (f = N[19]),
        N[20] !== u || N[21] !== f
          ? ((h = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [u, f] })),
            (N[20] = u),
            (N[21] = f),
            (N[22] = h))
          : (h = N[22]),
        N[23] !== et || N[24] !== K
          ? ((p =
              "success" === et && K?.last_crawled_at != null
                ? (0, i.jsx)("div", {
                    className: "text-xs text-tertiary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.lastCrawled",
                      defaultMessage: "Last updated {at, date, medium} at {at, time, short}",
                      values: { at: new Date(K.last_crawled_at) },
                    }),
                  })
                : null),
            (N[23] = et),
            (N[24] = K),
            (N[25] = p))
          : (p = N[25]),
        N[26] !== et
          ? ((m =
              "failed" === et || "blocked" === et || "unavailable" === et
                ? (0, i.jsx)("div", {
                    className: "text-xs text-tertiary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.websiteAccessDescription",
                      defaultMessage:
                        "{state, select, failed {ChatGPT didn\u2019t receive any info from your website.} blocked {Your website\u2019s settings prevent ChatGPT from reading its info.} unavailable {We couldn\u2019t check your website\u2019s access status.} other {}}",
                      values: { state: et },
                    }),
                  })
                : null),
            (N[26] = et),
            (N[27] = m))
          : (m = N[27]),
        N[28] !== H || N[29] !== z || N[30] !== et || N[31] !== K
          ? ((b =
              H && !z && "success" !== et && K?.next_allowed_at != null
                ? (0, i.jsx)("div", {
                    className: "text-xs text-tertiary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.nextAllowed",
                      defaultMessage: "You can request another check after {at, date, medium} at {at, time, short}.",
                      values: { at: new Date(K.next_allowed_at) },
                    }),
                  })
                : null),
            (N[28] = H),
            (N[29] = z),
            (N[30] = et),
            (N[31] = K),
            (N[32] = b))
          : (b = N[32]),
        N[33] !== h || N[34] !== p || N[35] !== m || N[36] !== b || N[37] !== o
          ? ((x = (0, i.jsxs)("div", { className: o, children: [h, p, m, b] })),
            (N[33] = h),
            (N[34] = p),
            (N[35] = m),
            (N[36] = b),
            (N[37] = o),
            (N[38] = x))
          : (x = N[38]),
        N[39] !== W || N[40] !== O?.canEditWebsite || N[41] !== H || N[42] !== z || N[43] !== T || N[44] !== et
          ? ((y =
              !W && H && !z && O?.canEditWebsite && "no_website" === et
                ? (0, i.jsx)(g.z, {
                    color: "outlineGhost",
                    size: "beaconAction",
                    radius: "full",
                    to: (0, Q.Ds)(T, "edit/contact"),
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.addWebsite",
                      defaultMessage: "Add website",
                    }),
                  })
                : null),
            (N[39] = W),
            (N[40] = O?.canEditWebsite),
            (N[41] = H),
            (N[42] = z),
            (N[43] = T),
            (N[44] = et),
            (N[45] = y))
          : (y = N[45]),
        N[46] !== F ||
        N[47] !== G ||
        N[48] !== ei ||
        N[49] !== L ||
        N[50] !== en ||
        N[51] !== et ||
        N[52] !== K?.can_request_recrawl
          ? ((v =
              en || G
                ? (0, i.jsxs)(ew.d, {
                    color: "outlineGhost",
                    size: "dialogAction",
                    radius: "full",
                    disabled: K?.can_request_recrawl !== !0 || F || G,
                    loading: G,
                    onClick: L,
                    children: [
                      "failed" === et || ei ? (0, i.jsx)(_.I, { asset: e_ }) : null,
                      (0, i.jsx)(d.A, {
                        id: "businessProfiles.websiteCrawl.websiteAccessRequest",
                        defaultMessage:
                          "{pending, select, true {Requesting\u2026} other {{state, select, failed {Try again} blocked {Try again} unavailable {Try again} not_crawled {Check website} other {Check again}}}}",
                        values: { pending: "false", state: "no_data" === et ? "not_crawled" : et },
                      }),
                    ],
                  })
                : null),
            (N[46] = F),
            (N[47] = G),
            (N[48] = ei),
            (N[49] = L),
            (N[50] = en),
            (N[51] = et),
            (N[52] = K?.can_request_recrawl),
            (N[53] = v))
          : (v = N[53]),
        N[54] !== F ||
        N[55] !== G ||
        N[56] !== ei ||
        N[57] !== X ||
        N[58] !== R ||
        N[59] !== B ||
        N[60] !== $ ||
        N[61] !== en
          ? ((w =
              null != B || null != $ || (!en && (ei || X))
                ? (0, i.jsxs)(ew.d, {
                    color: "outlineGhost",
                    size: "dialogAction",
                    radius: "full",
                    disabled: F || G,
                    loading: null != B,
                    onClick: () => {
                      ;(V(!en && (ei || X) ? "retry" : "check"), R().finally(() => V(null)))
                    },
                    children: [
                      (0, i.jsx)(_.I, { asset: e_ }),
                      (0, i.jsx)(d.A, {
                        id: "businessProfiles.websiteCrawl.checkStatus",
                        defaultMessage: "{unavailable, select, true {Try again} other {Check status}}",
                        values: { unavailable: String(null != B ? "retry" === B : !en && (ei || X)) },
                      }),
                    ],
                  })
                : null),
            (N[54] = F),
            (N[55] = G),
            (N[56] = ei),
            (N[57] = X),
            (N[58] = R),
            (N[59] = B),
            (N[60] = $),
            (N[61] = en),
            (N[62] = w))
          : (w = N[62]),
        N[63] !== y || N[64] !== v || N[65] !== w
          ? ((j = (0, i.jsxs)("div", {
              className: "flex shrink-0 flex-wrap items-center gap-2 empty:hidden",
              children: [y, v, w],
            })),
            (N[63] = y),
            (N[64] = v),
            (N[65] = w),
            (N[66] = j))
          : (j = N[66]),
        N[67] !== x || N[68] !== j
          ? ((A = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-4 @3xl/website:flex-row @3xl/website:items-center",
              children: [x, j],
            })),
            (N[67] = x),
            (N[68] = j),
            (N[69] = A))
          : (A = N[69]),
        N[70] !== A || N[71] !== r
          ? ((C = (0, i.jsxs)("div", {
              className:
                "flex flex-col gap-4 @3xl/website:flex-row @3xl/website:items-center @3xl/website:justify-between",
              children: [r, A],
            })),
            (N[70] = A),
            (N[71] = r),
            (N[72] = C))
          : (C = N[72]),
        N[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)("span", {
              className: "sr-only",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.websiteCrawl.scope",
                defaultMessage:
                  "This status reflects the saved website URL. A re-crawl also visits eligible linked pages.",
              }),
            })),
            (N[73] = S))
          : (S = N[73]),
        N[74] !== et || N[75] !== K
          ? ((k =
              "requested" !== et && "failed" !== et && "blocked" !== et && K?.reason != null && "unknown" !== K.reason
                ? (0, i.jsx)("div", {
                    className: "text-xs text-secondary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.reason",
                      defaultMessage:
                        "{reason, select, robots_blocked {The website currently blocks our Search crawler in robots.txt} robots_unreachable {We couldn\u2019t reach the website\u2019s robots.txt} fetch_failed {The latest website fetch did not return content} other {}}",
                      values: { reason: K.reason },
                    }),
                  })
                : null),
            (N[74] = et),
            (N[75] = K),
            (N[76] = k))
          : (k = N[76]),
        N[77] !== Z
          ? ((I =
              null != Z && "requested" !== Z.outcome
                ? (0, i.jsxs)("div", {
                    role: "status",
                    className: "text-xs text-secondary select-none",
                    children: [
                      (0, i.jsx)(d.A, {
                        id: "businessProfiles.websiteCrawl.requestOutcome",
                        defaultMessage:
                          "{outcome, select, requested {Crawl requested. Updated pages may take time to appear in ChatGPT} already_fresh {The website was crawled recently} blocked {The crawl request was blocked} busy {The crawler is busy. Try again later} cooldown {A crawl was requested recently} other {}}",
                        values: { outcome: Z.outcome },
                      }),
                      null != Z.reason && "blocked" === Z.outcome
                        ? (0, i.jsx)("p", {
                            children: (0, i.jsx)(d.A, {
                              id: "businessProfiles.websiteCrawl.requestReason",
                              defaultMessage:
                                "{reason, select, robots_blocked {The website blocks our Search crawler in robots.txt} policy_blocked {The website is not eligible for this crawl request} other {}}",
                              values: { reason: Z.reason },
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (N[77] = Z),
            (N[78] = I))
          : (I = N[78]),
        N[79] !== W || N[80] !== $
          ? ((P =
              null == $ || W
                ? null
                : (0, i.jsx)("span", {
                    role: "alert",
                    className: "text-xs text-secondary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.websiteCrawl.requestError",
                      defaultMessage: "Couldn\u2019t confirm your crawl request. Check the status before trying again",
                    }),
                  })),
            (N[79] = W),
            (N[80] = $),
            (N[81] = P))
          : (P = N[81]),
        N[82] !== C || N[83] !== k || N[84] !== I || N[85] !== P
          ? ((M = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-2 p-6", children: [C, S, k, I, P] })),
            (N[82] = C),
            (N[83] = k),
            (N[84] = I),
            (N[85] = P),
            (N[86] = M))
          : (M = N[86]),
        M
      )
    }
    function eP(e) {
      return e instanceof D.FetchError && [401, 403, 404].includes(e.status)
    }
    var eM = t("Sq3r")
    function eN(e) {
      let s,
        t,
        l,
        a = (0, n.c)(8),
        { response: r, onRetry: o } = e
      if ("non_local" !== r.analytics_scope || null == r.identity) return null
      let { identity: c, metadata: u } = r
      return "resolved" === c.resolution_status && "stale" !== u.freshness_state
        ? null
        : (a[0] !== c.resolution_status
            ? ((s =
                "resolved" !== c.resolution_status &&
                (0, i.jsx)("p", {
                  children:
                    "ambiguous" === c.resolution_status
                      ? (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.websiteIdentityAmbiguous",
                          defaultMessage:
                            "Your business website identity needs to be resolved before insights are available",
                        })
                      : (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.websiteIdentityMissing",
                          defaultMessage:
                            "A confirmed business website is needed before insights are available. After verification, try again.",
                        }),
                })),
              (a[0] = c.resolution_status),
              (a[1] = s))
            : (s = a[1]),
          a[2] !== u.freshness_state || a[3] !== o
            ? ((t =
                "stale" === u.freshness_state &&
                (0, i.jsxs)("div", {
                  className: "flex flex-wrap items-center gap-2",
                  children: [
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.insights.websiteStale",
                        defaultMessage:
                          "Updates are delayed. Available history is shown; recent activity may be missing.",
                      }),
                    }),
                    null != o &&
                      (0, i.jsx)(g.$, {
                        color: "secondary",
                        onClick: o,
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.retry",
                          defaultMessage: "Try again",
                        }),
                      }),
                  ],
                })),
              (a[2] = u.freshness_state),
              (a[3] = o),
              (a[4] = t))
            : (t = a[4]),
          a[5] !== s || a[6] !== t
            ? ((l = (0, i.jsxs)("div", {
                className: "space-y-1 text-sm text-secondary",
                role: "status",
                children: [s, t],
              })),
              (a[5] = s),
              (a[6] = t),
              (a[7] = l))
            : (l = a[7]),
          l)
    }
    let eT = [7, 28]
    function eD(e) {
      let s,
        t,
        l,
        a,
        r = (0, n.c)(19),
        { period: o, showSevenDays: c, forTopics: f, onPeriodChange: h } = e,
        p = void 0 === c || c,
        m = void 0 !== f && f,
        g = (0, u.A)()
      if (
        (r[0] !== m || r[1] !== g
          ? ((s = m
              ? g.formatMessage({
                  id: "businessProfiles.insights.topicReportingPeriod",
                  defaultMessage: "Discovery topics reporting period",
                })
              : g.formatMessage({
                  id: "businessProfiles.insights.reportingPeriod",
                  defaultMessage: "Reporting period",
                })),
            (r[0] = m),
            (r[1] = g),
            (r[2] = s))
          : (s = r[2]),
        r[3] !== m || r[4] !== g || r[5] !== p)
      ) {
        let e, s
        ;(r[7] !== p ? ((e = (e) => 28 === e || p), (r[7] = p), (r[8] = e)) : (e = r[8]),
          r[9] !== m || r[10] !== g
            ? ((s = (e) => ({
                key: String(e),
                name: (0, i.jsx)(d.A, {
                  id: "businessProfiles.insights.compactDays",
                  defaultMessage: "{days}D",
                  values: { days: e },
                }),
                ariaLabel: g.formatMessage(
                  m
                    ? {
                        id: "businessProfiles.insights.lastTopicDays",
                        defaultMessage: "Last {days} days of discovery topics",
                        description: "Select a period for discovery topics",
                      }
                    : {
                        id: "businessProfiles.insights.lastDays",
                        defaultMessage: "Last {days} days",
                        description:
                          "Date range selector for the latest 7 or 28 published UTC reporting days of business insights",
                      },
                  { days: e },
                ),
              })),
              (r[9] = m),
              (r[10] = g),
              (r[11] = s))
            : (s = r[11]),
          (t = eT.filter(e).map(s)),
          (r[3] = m),
          (r[4] = g),
          (r[5] = p),
          (r[6] = t))
      } else t = r[6]
      let b = String(o)
      return (
        r[12] !== h ? ((l = (e) => h("7" === e ? 7 : 28)), (r[12] = h), (r[13] = l)) : (l = r[13]),
        r[14] !== s || r[15] !== t || r[16] !== b || r[17] !== l
          ? ((a = (0, i.jsx)(j.t, {
              variant: "browse",
              className: "ms-auto shrink-0 whitespace-nowrap",
              ariaLabel: s,
              tabs: t,
              selectedKey: b,
              onSelect: l,
            })),
            (r[14] = s),
            (r[15] = t),
            (r[16] = b),
            (r[17] = l),
            (r[18] = a))
          : (a = r[18]),
        a
      )
    }
    let eE = (0, y._)(
        () =>
          Promise.resolve()
            .then(t.bind(t, "nUWW"))
            .then((e) => e.BusinessInsightsMetrics),
        {
          fallback: (0, i.jsx)(ep.Bz, { variant: "insights" }),
          errorFallback: (0, i.jsx)("p", {
            role: "alert",
            className: "text-sm text-secondary",
            children: (0, i.jsx)(d.A, {
              id: "businessProfiles.insights.loadModuleError",
              defaultMessage: "Couldn\u2019t load insights. Reload the page to try again.",
            }),
          }),
        },
      ),
      eq = (0, y._)(
        () =>
          Promise.all([t.e(946663), t.e(564269)])
            .then(t.bind(t, "FCa5"))
            .then((e) => e.DiscoveryTopics),
        { fallback: (0, i.jsx)(em.qW, {}) },
      ),
      eF = (0, y._)(
        () =>
          Promise.all([t.e(118186), t.e(337258)])
            .then(t.bind(t, "btHO"))
            .then((e) => e.BusinessProfileAgentInsights),
        { fallback: (0, i.jsx)(eo.B, {}) },
      )
    function eR(e) {
      let s,
        t,
        l,
        a,
        r,
        f,
        m,
        b,
        _,
        x,
        y,
        v,
        w,
        A,
        C,
        I = (0, n.c)(72),
        { businessProfileId: M, manager: E, adminView: q, active: F } = e,
        R = void 0 === F || F,
        L = (0, o.gh)(S.u),
        O = (0, u.A)(),
        B = (0, c.useId)(),
        [V, U] = (0, h.ok)(),
        $ = (0, o._U)(k.JW, P.iL),
        G = (0, ec.n)(M),
        H = null != q || ($ && G?.insights != null),
        z = H && "agent" === V.get("insight") ? "agent" : "brand",
        { accountId: W, userId: K } = (0, p.As)(),
        Q = q?.accountId ?? W,
        Z = q?.userId ?? K,
        [Y, J] = (0, c.useState)(),
        [X, ee] = (0, c.useState)("entity_shown"),
        es = Y ?? 7,
        et = R && "brand" === z
      I[0] !== Q || I[1] !== q || I[2] !== M || I[3] !== Z
        ? ((s = (e) => (null == q ? ["business-profiles", Q, M, e, Z] : [...(0, N.L)(q, M), e])),
          (I[0] = Q),
          (I[1] = q),
          (I[2] = M),
          (I[3] = Z),
          (I[4] = s))
        : (s = I[4])
      let ei = s,
        en = ei("insights"),
        eo = (0, ed.j)({ queryKey: [...en, "requested-window"], queryFn: eV, staleTime: 1 / 0, gcTime: 1 / 0 }),
        ep =
          null == Q
            ? null
            : {
                additionalHeaders: { "ChatGPT-Account-ID": Q, "x-openai-use-sheep": "1", [ef.zBc]: Q },
                parameters: { path: { business_profile_id: M }, query: (0, N.C0)(q) },
                expectedIdentity: null == Z ? void 0 : { accountId: Q, userId: Z },
                expectedErrorStatuses: [401, 403, 404, 409, 503],
              },
        {
          data: eb,
          error: e_,
          isError: ex,
          refetch: ey,
        } = (0, eu.I)(
          (0, eh.W3)(L, null == q ? "insights_metrics" : null, {
            queryKey: en,
            enabled: et && null != ep,
            notifyOnChangeProps: et ? void 0 : [],
            queryFn: async (e) => {
              let { client: s } = e
              if (null == ep) throw Error("Insights requires a selected account")
              let t = await s.ensureQueryData(eo),
                i = (e, s) =>
                  T.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/insights", {
                    ...ep,
                    requestBody: { ...e, compare_previous: !0, ...(s ? { latest_available: !0 } : {}) },
                  }),
                n = await i(t, !0)
              if ("local" === n.analytics_scope && n.end_date !== t.end_date) {
                let e = (0, eM.u0)(t, t.start_date)?.start_date,
                  s = (0, eM.u0)(t, n.end_date)
                if (null == e || null == s || s.end_date <= e)
                  throw Error("Insights returned a reporting window outside the requested periods")
                return (eG(n, M, s), n)
              }
              eG(n, M, t)
              let l = (0, eM.u0)(t, n.metadata.available_end_date_exclusive)
              if (null == l) return n
              let a = await i(l, !1)
              return (eG(a, M, l), a)
            },
            retry: !1,
            ...eg.I,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          }),
        )
      I[5] !== e_ ? ((t = e$(e_)), (I[5] = e_), (I[6] = t)) : (t = I[6])
      let ev = t,
        {
          data: ew,
          error: eA,
          isSuccess: eC,
          isFetching: eS,
          refetch: ek,
        } = (0, eu.I)(
          (0, eh.W3)(L, null == q ? "insights_topics" : null, {
            queryKey: [...ei("discovery-topics"), es],
            enabled: et && null != ep && !ev,
            notifyOnChangeProps: et ? void 0 : [],
            queryFn: async (e) => {
              let { client: s } = e
              if (null == ep) throw Error("Discovery Topics requires an authorized reporting window")
              let t = await s.ensureQueryData(eo),
                i = (0, eM.i2)(es, new Date(t.end_date)),
                n = await T.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/insights/discovery-topics",
                  { ...ep, requestBody: { ...i, compare_previous: !0, latest_available: !0 } },
                )
              return (eG(n, M, i), n)
            },
            retry: !1,
            ...eg.I,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          }),
        )
      if (!R) return null
      I[7] !== ev || I[8] !== eA ? ((l = ev || e$(eA)), (I[7] = ev), (I[8] = eA), (I[9] = l)) : (l = I[9])
      let eI = l,
        eP = null == eb
      if (
        I[10] !== eI ||
        I[11] !== Q ||
        I[12] !== q ||
        I[13] !== H ||
        I[14] !== M ||
        I[15] !== eb ||
        I[16] !== ew ||
        I[17] !== e_ ||
        I[18] !== O ||
        I[19] !== ex ||
        I[20] !== E ||
        I[21] !== B ||
        I[22] !== eP ||
        I[23] !== Y ||
        I[24] !== ey ||
        I[25] !== ek ||
        I[26] !== X ||
        I[27] !== es ||
        I[28] !== z ||
        I[29] !== U ||
        I[30] !== eA ||
        I[31] !== eS ||
        I[32] !== eC
      ) {
        var eT, eR, eH
        let e = eI || ex || eP ? void 0 : (0, eM.oZ)(eb),
          s = (0, eM.gu)(e, 28),
          t = !1 === s || !1 !== (0, eM.gu)(e, 7),
          n = t ? es : 28,
          l = e?.slice(-n),
          o =
            ex || eP || null == l
              ? void 0
              : ((eT = eb),
                (eR = l),
                (eH = n),
                "non_local" !== eT.analytics_scope || 28 === eH
                  ? eT.summary
                  : eT.summary.map((e) => {
                      let s = eM.EH.find((s) => s === e.metric)
                      if (null == s) return e
                      let t = eR.filter((e) => null != e.values[s]),
                        i = "unavailable"
                      t.length > 0
                        ? (i =
                            eR.length === eH && t.length === eH && eR.every((e) => e.statuses?.[s] === "complete")
                              ? "complete"
                              : "observed")
                        : "unsupported" === e.status && (i = "unsupported")
                      let n = "unavailable" === i ? "coverage_unavailable" : null
                      return {
                        ...e,
                        event_count: t.length > 0 ? t.reduce((e, t) => e + (t.values[s] ?? 0), 0) : null,
                        status: i,
                        covered_days: t.length,
                        total_days: eH,
                        previous_event_count: null,
                        previous_status: "unavailable",
                        previous_covered_days: 0,
                        percent_change: null,
                        unavailable_reason: "unsupported" === i ? e.unavailable_reason : n,
                      }
                    })),
          u = "loading"
        eI
          ? (u = "forbidden")
          : ex
            ? (u = e_ instanceof D.FetchError && 409 === e_.status ? "unsupported" : "error")
            : null != l &&
              (u =
                !1 === s
                  ? "insufficient"
                  : l.some(eB)
                    ? eb?.analytics_scope === "non_local"
                      ? o?.some(eO)
                        ? "partial"
                        : "ready"
                      : l.some(eL)
                        ? "partial"
                        : "ready"
                    : "unavailable")
        let h = "brand" === z && !eI && "loading" !== u && (!eS || eC || null != Y)
        ;((b = "@container/insights flex min-w-0 flex-col gap-6 pb-8"),
          I[42] !== H ||
          I[43] !== O ||
          I[44] !== B ||
          I[45] !== n ||
          I[46] !== es ||
          I[47] !== z ||
          I[48] !== U ||
          I[49] !== h ||
          I[50] !== t ||
          I[51] !== eC
            ? ((_ =
                (H || h) &&
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-start gap-3 @lg/insights:flex-row @lg/insights:flex-wrap @lg/insights:items-center @lg/insights:justify-between",
                  children: [
                    H &&
                      (0, i.jsx)(j.t, {
                        variant: "sectionFilter",
                        ariaLabel: O.formatMessage(er.D.insightsViewLabel),
                        selectedKey: z,
                        tabs: [
                          {
                            key: "brand",
                            name: (0, i.jsx)(d.A, {
                              id: "businessProfiles.insights.businessView",
                              defaultMessage: "Brand insights",
                            }),
                            panelId: `${B}-brand`,
                          },
                          {
                            key: "agent",
                            name: (0, i.jsx)(d.A, {
                              id: "businessProfiles.insights.agentView",
                              defaultMessage: "Agent insights",
                            }),
                            panelId: `${B}-agent`,
                          },
                        ],
                        onSelect: (e) => {
                          U(
                            (s) => {
                              let t = new URLSearchParams(s)
                              return ("agent" === e ? t.set("insight", "agent") : t.delete("insight"), t)
                            },
                            { preventScrollReset: !0 },
                          )
                        },
                      }),
                    "agent" === z && (0, i.jsx)(eD, { period: es, onPeriodChange: J }),
                    h &&
                      (0, i.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, i.jsx)(eU, { waitForTopics: eC, period: n, showSevenDays: t, onPeriodChange: J }),
                      }),
                  ],
                })),
              (I[42] = H),
              (I[43] = O),
              (I[44] = B),
              (I[45] = n),
              (I[46] = es),
              (I[47] = z),
              (I[48] = U),
              (I[49] = h),
              (I[50] = t),
              (I[51] = eC),
              (I[52] = _))
            : (_ = I[52]),
          (x = `${B}-brand`),
          (y = "@container/performance"),
          (v = H ? "tabpanel" : void 0),
          (a = H ? 0 : void 0),
          (r = H ? `${B}-brand-tab` : void 0),
          (f = "brand" !== z),
          (m =
            "brand" === z &&
            (0, i.jsxs)(i.Fragment, {
              children: [
                !eI &&
                  !ex &&
                  !eP &&
                  (0, i.jsx)(eN, { response: eb, onRetry: "partial" === u ? () => void ey() : void 0 }),
                (0, i.jsx)(eE, {
                  isEcommerce: E?.profile.business_profile_id === M && "ecommerce" === (0, el.a)(E.profile),
                  points: l,
                  scope: eI || ex || eP ? void 0 : eb.analytics_scope,
                  summary: o,
                  websiteAccessStatus:
                    !eI &&
                    null != Q &&
                    E?.profile.business_profile_id === M &&
                    (null != q || ("owner" === E.profile.relationship && E.profile.can_manage))
                      ? (0, i.jsx)(ej, { manager: E, adminView: q })
                      : null,
                  changes: null != eb && null != e ? (0, eM.UT)(eb, e, n) : void 0,
                  period: n,
                  state: u,
                  selectedMetric: X,
                  onMetricChange: ee,
                  onRetry: () => void ey(),
                }),
                !eI && ("loading" === u || eS) && (0, i.jsx)(em.qW, {}),
                !eI &&
                  "loading" !== u &&
                  null != eA &&
                  !eS &&
                  (0, i.jsxs)("section", {
                    "aria-labelledby": `${B}-topics-error`,
                    className: "mt-6 flex flex-col gap-3 rounded-[30px] border border-border p-6",
                    children: [
                      (0, i.jsx)("h3", {
                        id: `${B}-topics-error`,
                        className: "text-xl font-medium",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.discoveryTopics.title",
                          defaultMessage: "Top 5 discovery topics",
                        }),
                      }),
                      (0, i.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-secondary",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.discoveryTopics.loadError",
                          defaultMessage: "Couldn\u2019t load discovery topics",
                        }),
                      }),
                      (0, i.jsx)(g.$, {
                        type: "button",
                        color: "outlineGhost",
                        className: "self-start",
                        size: "dialogAction",
                        onClick: () => void ek(),
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.insights.retry",
                          defaultMessage: "Try again",
                        }),
                      }),
                    ],
                  }),
                !eI &&
                  "loading" !== u &&
                  eC &&
                  !eS &&
                  (0, i.jsx)(eq, {
                    report: ew,
                    insufficient: "insufficient" === u,
                    periodPicker:
                      t && h
                        ? void 0
                        : (0, i.jsx)(c.Suspense, {
                            fallback: null,
                            children: (0, i.jsx)(eU, {
                              waitForTopics: !0,
                              forTopics: !0,
                              period: es,
                              onPeriodChange: J,
                            }),
                          }),
                  }),
              ],
            })),
          (I[10] = eI),
          (I[11] = Q),
          (I[12] = q),
          (I[13] = H),
          (I[14] = M),
          (I[15] = eb),
          (I[16] = ew),
          (I[17] = e_),
          (I[18] = O),
          (I[19] = ex),
          (I[20] = E),
          (I[21] = B),
          (I[22] = eP),
          (I[23] = Y),
          (I[24] = ey),
          (I[25] = ek),
          (I[26] = X),
          (I[27] = es),
          (I[28] = z),
          (I[29] = U),
          (I[30] = eA),
          (I[31] = eS),
          (I[32] = eC),
          (I[33] = a),
          (I[34] = r),
          (I[35] = f),
          (I[36] = m),
          (I[37] = b),
          (I[38] = _),
          (I[39] = x),
          (I[40] = y),
          (I[41] = v))
      } else
        ((a = I[33]),
          (r = I[34]),
          (f = I[35]),
          (m = I[36]),
          (b = I[37]),
          (_ = I[38]),
          (x = I[39]),
          (y = I[40]),
          (v = I[41]))
      return (
        I[53] !== a || I[54] !== r || I[55] !== f || I[56] !== m || I[57] !== x || I[58] !== y || I[59] !== v
          ? ((w = (0, i.jsx)("div", {
              id: x,
              className: y,
              role: v,
              tabIndex: a,
              "aria-labelledby": r,
              hidden: f,
              children: m,
            })),
            (I[53] = a),
            (I[54] = r),
            (I[55] = f),
            (I[56] = m),
            (I[57] = x),
            (I[58] = y),
            (I[59] = v),
            (I[60] = w))
          : (w = I[60]),
        I[61] !== q || I[62] !== M || I[63] !== B || I[64] !== es || I[65] !== z
          ? ((A =
              "agent" === z &&
              (0, i.jsx)("div", {
                id: `${B}-agent`,
                role: "tabpanel",
                tabIndex: 0,
                "aria-labelledby": `${B}-agent-tab`,
                children: (0, i.jsx)(ea.C, {
                  className: "min-w-0",
                  children: (0, i.jsx)(eF, { period: es, businessProfileId: M, adminView: q }),
                }),
              })),
            (I[61] = q),
            (I[62] = M),
            (I[63] = B),
            (I[64] = es),
            (I[65] = z),
            (I[66] = A))
          : (A = I[66]),
        I[67] !== b || I[68] !== _ || I[69] !== w || I[70] !== A
          ? ((C = (0, i.jsxs)("div", { className: b, children: [_, w, A] })),
            (I[67] = b),
            (I[68] = _),
            (I[69] = w),
            (I[70] = A),
            (I[71] = C))
          : (C = I[71]),
        C
      )
    }
    function eL(e) {
      return eM.Mn.some((s) => null == e.values[s])
    }
    function eO(e) {
      return "observed" === e.status || "unavailable" === e.status
    }
    function eB(e) {
      return eM.Mn.some((s) => null != e.values[s])
    }
    function eV() {
      return (0, eM.i2)(28, new Date())
    }
    function eU(e) {
      let s,
        t,
        l,
        a = (0, n.c)(5)
      return (
        a[0] !== e ? (({ waitForTopics: t, ...s } = e), (a[0] = e), (a[1] = s), (a[2] = t)) : ((s = a[1]), (t = a[2])),
        (0, c.use)(eE.prefetch()),
        t && (0, c.use)(eq.prefetch()),
        a[3] !== s ? ((l = (0, i.jsx)(eD, { ...s })), (a[3] = s), (a[4] = l)) : (l = a[4]),
        l
      )
    }
    function e$(e) {
      return e instanceof D.FetchError && [401, 403, 404].includes(e.status)
    }
    function eG(e, s, t) {
      if (e.business_profile_id !== s || e.start_date !== t.start_date || e.end_date !== t.end_date)
        throw Error("Insights response does not match the requested business and dates")
    }
    var eH = t("GgTS"),
      ez = t("ZEx5"),
      eW = t("nUWW"),
      eK = t.p + "assets/cc53ded3a818.svg",
      eQ = t("FrrB"),
      eZ = t.p + "assets/44ca35153369.svg"
    function eY(e) {
      let s,
        t,
        l,
        a,
        r = (0, n.c)(5),
        { actions: o } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("img", { src: eZ, alt: "", width: 48, height: 48 })),
            (t = (0, i.jsx)(d.A, {
              id: "businessProfiles.feeds.profileEmptyTitle",
              defaultMessage: "Bring your products into the conversation",
            })),
            (l = (0, i.jsx)(d.A, {
              id: "businessProfiles.feeds.profileEmptyDescription",
              defaultMessage:
                "Show your latest products in ChatGPT\u2019s responses when they match what people are looking for. They\u2019ll also appear in your business side panel, so people can explore more of what you offer.",
            })),
            (r[0] = s),
            (r[1] = t),
            (r[2] = l))
          : ((s = r[0]), (t = r[1]), (l = r[2])),
        r[3] !== o
          ? ((a = (0, i.jsx)("div", {
              className: "mx-auto w-full max-w-md py-6",
              children: (0, i.jsx)(eQ.A, { layout: "default", illustration: s, title: t, description: l, actions: o }),
            })),
            (r[3] = o),
            (r[4] = a))
          : (a = r[4]),
        a
      )
    }
    function eJ(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c = (0, n.c)(17),
        { isEcommerce: u, section: f, underReview: h, onVerify: p, promotions: m } = e,
        b = "agent" === f && h
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)("img", { src: eK, alt: "", width: 28, height: 28, className: "shrink-0 self-center" })),
          (c[0] = s))
        : (s = c[0]),
        c[1] !== b
          ? ((t = b
              ? (0, i.jsx)(d.A, {
                  id: "businessProfiles.agentBuilder.draft.underReview",
                  defaultMessage: "Your business verification is under review",
                })
              : (0, i.jsx)(d.A, {
                  id: "businessProfiles.pendingOverview.title",
                  defaultMessage: "Verify your identity with a government-issued ID",
                })),
            (c[1] = b),
            (c[2] = t))
          : (t = c[2]),
        c[3] !== f
          ? ((l =
              "agent" === f
                ? (0, i.jsx)(d.A, {
                    id: "businessProfiles.agentBuilder.draft.description",
                    defaultMessage:
                      "Verification is required to set up an agent that answers questions about your business in ChatGPT",
                  })
                : (0, i.jsx)(d.A, {
                    id: "businessProfiles.pendingOverview.description",
                    defaultMessage:
                      "To keep your business secure, this is required before editing business info or publishing your business agent.",
                  })),
            (c[3] = f),
            (c[4] = l))
          : (l = c[4]),
        c[5] !== b || c[6] !== p
          ? ((a =
              p &&
              (0, i.jsx)(g.$, {
                size: "beaconAction",
                color: "outlineGhost",
                "aria-haspopup": "dialog",
                onClick: p,
                children: b
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.pendingOverview.viewVerification",
                      defaultMessage: "View verification",
                    })
                  : (0, i.jsx)(d.A, { id: "businessProfiles.pendingOverview.verify", defaultMessage: "Verify" }),
              })),
            (c[5] = b),
            (c[6] = p),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== t || c[9] !== l || c[10] !== a
          ? ((r = (0, i.jsx)(K, { icon: s, title: t, content: l, customCtas: a })),
            (c[8] = t),
            (c[9] = l),
            (c[10] = a),
            (c[11] = r))
          : (r = c[11]))
      let _ = r
      return "agent" === f
        ? _
        : (c[12] !== _ || c[13] !== u || c[14] !== m || c[15] !== f
            ? ((o =
                "insights" === f
                  ? (0, i.jsx)(eX, { isEcommerce: u, children: (0, i.jsxs)(i.Fragment, { children: [_, m] }) })
                  : (0, i.jsxs)("div", { className: "flex flex-col gap-8", children: [_, (0, i.jsx)(eY, {})] })),
              (c[12] = _),
              (c[13] = u),
              (c[14] = m),
              (c[15] = f),
              (c[16] = o))
            : (o = c[16]),
          o)
    }
    function eX(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        u,
        f,
        h,
        p = (0, n.c)(22),
        { children: m, isEcommerce: g } = e,
        [b, _] = (0, c.useState)(7),
        [x] = (0, c.useState)(e1)
      if (p[0] !== b || p[1] !== x) {
        let { start_date: e } = (0, eM.i2)(b, x)
        ;((s = Date.parse(e)), (p[0] = b), (p[1] = x), (p[2] = s))
      } else s = p[2]
      let y = s
      if (p[3] !== b || p[4] !== y) {
        let e
        ;(p[6] !== y
          ? ((e = (e, s) => ({
              date: new Date(y + 864e5 * s).toISOString().slice(0, 10),
              values: { entity_shown: null, profile_open: null, website_click: null, call_click: null },
            })),
            (p[6] = y),
            (p[7] = e))
          : (e = p[7]),
          (t = Array.from({ length: b }, e)),
          (p[3] = b),
          (p[4] = y),
          (p[5] = t))
      } else t = p[5]
      let v = t
      return (
        p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("span", {
              className: "rounded-full bg-secondary-ghost-hover px-4 py-2 font-medium text-default",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.pendingOverview.brandInsights",
                defaultMessage: "Brand insights",
              }),
            })),
            (p[8] = l))
          : (l = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                l,
                (0, i.jsx)("span", {
                  className: "px-2",
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.pendingOverview.agentInsights",
                    defaultMessage: "Agent insights",
                  }),
                }),
              ],
            })),
            (p[9] = a))
          : (a = p[9]),
        p[10] !== b
          ? ((r = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2 text-sm text-secondary",
              children: [a, (0, i.jsx)(eD, { period: b, onPeriodChange: _ })],
            })),
            (p[10] = b),
            (p[11] = r))
          : (r = p[11]),
        p[12] !== g || p[13] !== b || p[14] !== v
          ? ((o = (0, i.jsx)(eW.BusinessInsightsMetrics, { isEcommerce: g, state: "empty", points: v, period: b })),
            (p[12] = g),
            (p[13] = b),
            (p[14] = v),
            (p[15] = o))
          : (o = p[15]),
        p[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)("h3", {
              className: "text-card-title",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.pendingOverview.discoveryTopics",
                defaultMessage: "Top 5 discovery topics",
              }),
            })),
            (p[16] = u))
          : (u = p[16]),
        p[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(ez.t, {
              variant: "outlinedLarge",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "p-6",
                children: [
                  u,
                  (0, i.jsx)("div", {
                    className: "flex min-h-64 items-center justify-center",
                    children: (0, i.jsx)(eW.k, {}),
                  }),
                ],
              }),
            })),
            (p[17] = f))
          : (f = p[17]),
        p[18] !== m || p[19] !== r || p[20] !== o
          ? ((h = (0, i.jsxs)("div", { className: "flex flex-col gap-8", children: [m, r, o, f] })),
            (p[18] = m),
            (p[19] = r),
            (p[20] = o),
            (p[21] = h))
          : (h = p[21]),
        h
      )
    }
    function e1() {
      return new Date()
    }
    var e0 = t("NFGs"),
      e2 = t.n(e0)
    function e4(e) {
      let s,
        t = (0, n.c)(4),
        { profileId: l, adminView: a } = e,
        { accountId: r } = (0, p.As)(),
        o = a?.accountId ?? r
      return (
        t[0] !== a || t[1] !== l || t[2] !== o
          ? ((s =
              null == o
                ? null
                : (0, i.jsx)(e3, { accountId: o, profileId: l, adminView: a }, `${o}:${a?.userId ?? "owner"}:${l}`)),
            (t[0] = a),
            (t[1] = l),
            (t[2] = o),
            (t[3] = s))
          : (s = t[3]),
        s
      )
    }
    function e3(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        d = (0, n.c)(20),
        { accountId: f, profileId: h, adminView: p } = e,
        m = (0, u.A)(),
        g = (0, ex.jE)()
      d[0] !== f || d[1] !== p || d[2] !== h || d[3] !== g
        ? ((s = () => ({
            subscribe: (e) =>
              g.getQueryCache().subscribe((s) => {
                let { query: t } = s,
                  i = t.queryKey
                "business-profiles" === i[0] &&
                  i[1] === f &&
                  ((i[2] === h &&
                    ("product-feeds" === i[3] || "feed-connection-summaries" === i[3] || "uploads" === i[4])) ||
                    (null == p && 3 === i.length && "product-feeds" === i[2])) &&
                  e()
              }),
            getSnapshot: () =>
              (function (e, s, t, i) {
                let n = ["business-profiles", s, t],
                  l = (0, N.Ot)(i),
                  a = Date.now() - 7776e6,
                  r = e.getQueriesData({
                    queryKey: [...n, "product-feeds"],
                    predicate: (e) => e.queryKey.length === 5 + l.length && l.every((s, t) => e.queryKey[t + 5] === s),
                  }),
                  o = new Map(),
                  c = null,
                  d = !1
                for (let s = 0; s < r.length; s++) {
                  let s = r.find(([e]) => e[4] === c)
                  if (null == s) break
                  if (e.getQueryState(s[0])?.error != null) return "error"
                  let t = s[1]
                  if (null == t) break
                  for (let e of t.items) o.set(e.feed_id, e)
                  if (null == t.next_cursor) {
                    d = !0
                    break
                  }
                  c = t.next_cursor
                }
                if (null == i && r.find(([e]) => null == e[4])?.[1] == null) {
                  let i = e.getQueryData(["business-profiles", s, "product-feeds"])
                  for (let e of i?.pages.filter((e) => e.profileId === t) ?? []) {
                    if (e.accessDenied) return "error"
                    for (let s of e.items) s.business_profile_id !== t || s.archived || o.set(s.feed_id, s)
                    d = null == e.nextCursor
                  }
                }
                let u = e.getQueriesData({
                    queryKey: [...n, "feed-connection-summaries"],
                    predicate: (e) => e.queryKey.length === 5 + l.length && l.every((s, t) => e.queryKey[t + 5] === s),
                  }),
                  f = new Map()
                for (let [s, t] of u) {
                  let i = e.getQueryState(s),
                    n = Math.max(i?.dataUpdatedAt ?? 0, i?.errorUpdatedAt ?? 0)
                  for (let e of i?.error != null && Array.isArray(s[4])
                    ? s[4].flatMap((e) => {
                        let s = "string" == typeof e ? o.get(e) : void 0
                        return null == s ? [] : [s]
                      })
                    : (t ?? [])) {
                    let s = o.get(e.feed_id)
                    if (null == s || s.archived || e.archived || (f.get(e.feed_id)?.updatedAt ?? -1) > n) continue
                    let t = e.connection_status?.latest_upload_status
                    ;(i?.isInvalidated || e.connection_status?.status === "unknown"
                      ? (t = void 0)
                      : e.connection_status?.latest_upload_at != null &&
                        Date.parse(e.connection_status.latest_upload_at) < a &&
                        (t = null),
                      f.set(e.feed_id, {
                        status: t,
                        uploadedAt: e.connection_status?.latest_upload_at,
                        updatedAt: n,
                        hasError: i?.error != null,
                      }))
                  }
                }
                if (f.size > 0) {
                  let e = [...f.values()]
                  if (e.some(({ hasError: e }) => e)) return "error"
                  let s =
                      d && [...o.values()].filter((e) => !e.archived).every((e) => f.get(e.feed_id)?.status !== void 0)
                        ? e.filter(({ status: e }) => null != e)
                        : [],
                    t = e2()(s, ({ uploadedAt: e }) => (null == e ? -1 / 0 : Date.parse(e))),
                    i = null != t && s.every(({ uploadedAt: e }) => null != e) ? [t] : s
                  if (i.length > 0 && i.every(({ status: e }) => "failed" === e || "completed_with_errors" === e))
                    return "issues"
                  if (
                    i.length > 0 &&
                    i.every(({ status: e }) => null != e && ["scanning", "received", "processing"].includes(e))
                  )
                    return "processing"
                  if (i.length > 0 && i.every(({ status: e }) => "completed" === e)) return "healthy"
                }
                let h = [],
                  p = !1
                for (let s of o.values()) {
                  if (s.archived) continue
                  let t = e.getQueryState([...n, s.feed_id, "uploads", 90, ...l])
                  if (t?.error != null) return "error"
                  if (t?.isInvalidated) {
                    p = !0
                    continue
                  }
                  ;((p = p || t?.data == null || !0 === t.data.truncated), h.push(...(t?.data?.uploads ?? [])))
                }
                if (p || !d) return null
                let m = e2()(
                  h.filter(({ uploaded_at: e }) => Date.parse(e) >= a),
                  ({ uploaded_at: e }) => Date.parse(e),
                )
                return null == m
                  ? null
                  : "failed" === m.status || "completed_with_errors" === m.status
                    ? "issues"
                    : ["scanning", "received", "processing"].includes(m.status)
                      ? "processing"
                      : "healthy"
              })(g, f, h, p),
          })),
          (d[0] = f),
          (d[1] = p),
          (d[2] = h),
          (d[3] = g),
          (d[4] = s))
        : (s = d[4])
      let [b] = (0, c.useState)(s),
        _ = (0, c.useSyncExternalStore)(b.subscribe, b.getSnapshot, e5)
      if (null == _) return null
      let x = "error" === _ || "issues" === _ ? "size-2 shrink-0" : "grid size-4 shrink-0 place-items-center"
      return (
        d[5] !== _ || d[6] !== m
          ? ((t = m.formatMessage(
              {
                id: "businessProfiles.products.feedHealth",
                defaultMessage:
                  "{health, select, error {Feed health: History unavailable} issues {Feed health: Upload issues} checking {Feed health: Checking\u2026} processing {Feed health: In progress} other {Feed health: Healthy}}",
              },
              { health: _ },
            )),
            (d[5] = _),
            (d[6] = m),
            (d[7] = t))
          : (t = d[7]),
        d[8] !== _
          ? ((l =
              "error" === _ || "issues" === _
                ? (0, i.jsx)("span", { className: "block size-2 rounded-full bg-orange" })
                : null),
            (d[8] = _),
            (d[9] = l))
          : (l = d[9]),
        d[10] !== _
          ? ((a = "processing" === _ ? (0, i.jsx)(w.y, { as: "span", className: "size-4" }) : null),
            (d[10] = _),
            (d[11] = a))
          : (a = d[11]),
        d[12] !== _
          ? ((r = "healthy" === _ ? (0, i.jsx)("span", { className: "block size-2 rounded-full bg-green" }) : null),
            (d[12] = _),
            (d[13] = r))
          : (r = d[13]),
        d[14] !== x || d[15] !== t || d[16] !== l || d[17] !== a || d[18] !== r
          ? ((o = (0, i.jsxs)("span", { className: x, role: "img", "aria-label": t, children: [l, a, r] })),
            (d[14] = x),
            (d[15] = t),
            (d[16] = l),
            (d[17] = a),
            (d[18] = r),
            (d[19] = o))
          : (o = d[19]),
        o
      )
    }
    function e5() {
      return null
    }
    var e6 = t("Evia"),
      e7 = t("SOml"),
      e9 = t("T1PX"),
      e8 = t("V8uZ"),
      se = t.p + "assets/shopify-logo.8ded0dc765.png",
      ss = t("X16R"),
      st = t("Uvab"),
      si = t("JHuz"),
      sn = t("x5X9"),
      sl = t("C7pe"),
      sa = t("wv9C"),
      sr = t("ESSU")
    function so(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        u,
        f,
        h,
        p = (0, n.c)(44),
        { accountId: m, manager: b, purpose: x, verifyAction: y, children: v } = e,
        w = void 0 === x ? "edit" : x,
        j = (0, ex.jE)(),
        [A, C] = (0, c.useState)(null),
        S = b.profile.business_profile_id
      if (p[0] !== m || p[1] !== S || p[2] !== w || p[3] !== j) {
        let e = (0, sa.o)(j, m, S)
        ;((s = (0, sl.d)(m, S, e, w)), (p[0] = m), (p[1] = S), (p[2] = w), (p[3] = j), (p[4] = s))
      } else s = p[4]
      let k = s,
        I = null == A
      p[5] !== k || p[6] !== I
        ? ((t = { ...k, staleTime: k.staleTime, enabled: I }), (p[5] = k), (p[6] = I), (p[7] = t))
        : (t = p[7])
      let { data: P, fetchStatus: M, isError: N } = (0, eu.I)(t),
        T = P?.status === "approved" && !N && ("edit" === w || "idle" === M)
      ;(null != A && T && C(null),
        p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(d.A, {
              id: "businessProfiles.overviewVerification.description",
              defaultMessage:
                "To keep your business secure, this is required before editing business info or publishing your business agent.",
            })),
            (p[8] = l))
          : (l = p[8]))
      let D = l
      if ("add-products" === w) {
        let e
        ;(p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "businessProfiles.productsVerification.description",
              defaultMessage: "Verify your identity with a government-issued ID to upload products to ChatGPT.",
            })),
            (p[9] = e))
          : (e = p[9]),
          (D = e))
      } else if (P?.status === "declined" && !N) {
        let e
        ;(p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, { ...sn.e.declinedDescription })), (p[10] = e))
          : (e = p[10]),
          (D = e))
      }
      let E = !N && P?.status === "declined" && P.can_verify ? P.challenge_id : null,
        q = null != E ? "headerUpsell" : "beaconAction",
        F = y?.busy
      ;(p[11] !== E || p[12] !== y
        ? ((a = () => {
            y?.busy || (null != y ? y.onOpen(E ?? void 0) : C(null == E ? {} : { retryChallengeId: E }))
          }),
          (p[11] = E),
          (p[12] = y),
          (p[13] = a))
        : (a = p[13]),
        p[14] !== E || p[15] !== y?.label
          ? ((r =
              null != E
                ? (0, i.jsx)(d.A, { ...sn.e.retryAction })
                : (y?.label ??
                  (0, i.jsx)(d.A, { id: "businessProfiles.overviewVerification.verify", defaultMessage: "Verify" }))),
            (p[14] = E),
            (p[15] = y?.label),
            (p[16] = r))
          : (r = p[16]),
        p[17] !== q || p[18] !== F || p[19] !== a || p[20] !== r
          ? ((o = (0, i.jsx)(g.$, {
              type: "button",
              size: q,
              radius: "full",
              color: "primary",
              "aria-haspopup": "dialog",
              "aria-disabled": F,
              onClick: a,
              children: r,
            })),
            (p[17] = q),
            (p[18] = F),
            (p[19] = a),
            (p[20] = r),
            (p[21] = o))
          : (o = p[21]))
      let R = o,
        L = null
      if (null != E) {
        let e, s, t
        ;(p[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(_.I, { asset: si.b, className: "size-6 shrink-0" })), (p[22] = e))
          : (e = p[22]),
          p[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1.5",
                children: [
                  (0, i.jsx)("h3", {
                    className: "font-semibold",
                    children: (0, i.jsx)(d.A, { ...sn.e.businessDeclined }),
                  }),
                  (0, i.jsx)("p", { children: (0, i.jsx)(d.A, { ...sn.e.declinedDescription }) }),
                ],
              })),
              (p[23] = s))
            : (s = p[23]),
          p[24] !== R
            ? ((t = (0, i.jsxs)("aside", {
                className: `${sr.A.verificationWarning} flex min-h-20 w-full items-center gap-3 rounded-2xl border border-(--business-verification-warning-border) bg-(--business-verification-warning-bg) p-4 text-sm leading-5 tracking-[-0.15px] text-(--business-verification-warning-text)`,
                children: [e, s, R],
              })),
              (p[24] = R),
              (p[25] = t))
            : (t = p[25]),
          (L = t))
      } else if (N || (null != P && "approved" !== P.status)) {
        let e, s, t
        ;(p[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("img", { src: eK, alt: "", width: 28, height: 28, className: "shrink-0 self-center" })),
            (p[26] = e))
          : (e = p[26]),
          p[27] !== w
            ? ((s =
                "add-products" === w
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.productsVerification.title",
                      defaultMessage: "Complete verification to upload your products",
                    })
                  : (0, i.jsx)(d.A, {
                      id: "businessProfiles.overviewVerification.title",
                      defaultMessage: "Verify your identity with a government-issued ID",
                    })),
              (p[27] = w),
              (p[28] = s))
            : (s = p[28]),
          p[29] !== R || p[30] !== D || p[31] !== s
            ? ((t = (0, i.jsx)(K, { icon: e, title: s, content: D, customCtas: R })),
              (p[29] = R),
              (p[30] = D),
              (p[31] = s),
              (p[32] = t))
            : (t = p[32]),
          (L = t))
      }
      return (
        p[33] !== T || p[34] !== L || p[35] !== v
          ? ((u = null == v ? L : v({ approved: T, banner: L })), (p[33] = T), (p[34] = L), (p[35] = v), (p[36] = u))
          : (u = p[36]),
        p[37] !== b || p[38] !== w || p[39] !== A
          ? ((f =
              null != A &&
              (0, i.jsx)(ee.BusinessProfileVerificationEntry, {
                manager: b,
                purpose: w,
                ...A,
                onExit: () => C(null),
                loadingContent: (0, i.jsx)(i.Fragment, {}),
                loadingFallback: (0, i.jsx)(i.Fragment, {}),
                children: (0, i.jsx)(i.Fragment, {}),
              })),
            (p[37] = b),
            (p[38] = w),
            (p[39] = A),
            (p[40] = f))
          : (f = p[40]),
        p[41] !== u || p[42] !== f
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [u, f] })), (p[41] = u), (p[42] = f), (p[43] = h))
          : (h = p[43]),
        h
      )
    }
    var sc = t("JNtf"),
      sd = t("mUDD")
    function su(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c,
        u,
        f,
        h,
        p,
        m,
        g,
        b,
        _,
        x,
        y,
        v = (0, n.c)(44),
        { accountId: w, feed: j, onClose: A } = e,
        C = (0, ex.jE)()
      ;(v[0] !== w || v[1] !== j
        ? ((s = () =>
            T.Request.safePost("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/archive", {
              additionalHeaders: { "ChatGPT-Account-ID": w },
              parameters: { path: { business_profile_id: j.business_profile_id, feed_id: j.feed_id } },
              expectedErrorStatuses: [400, 401, 403, 404, 409],
            })),
          (v[0] = w),
          (v[1] = j),
          (v[2] = s))
        : (s = v[2]),
        v[3] !== w || v[4] !== j || v[5] !== A || v[6] !== C
          ? ((t = async (e) => {
              let s = ["business-profiles", w, j.business_profile_id]
              ;(await C.cancelQueries({ queryKey: s }),
                C.setQueriesData({ queryKey: [...s, "product-feeds"] }, (s) =>
                  null == s
                    ? s
                    : {
                        ...s,
                        items: s.items.map((s) => (s.feed_id === e.feed_id ? { ...s, archived: e.archived } : s)),
                      },
                ),
                C.setQueryData([...s, "feed", j.feed_id], e),
                C.invalidateQueries({ queryKey: s }),
                C.resetQueries({ queryKey: ["business-profiles", w, "product-feeds"], exact: !0 }),
                A())
            }),
            (v[3] = w),
            (v[4] = j),
            (v[5] = A),
            (v[6] = C),
            (v[7] = t))
          : (t = v[7]),
        v[8] !== s || v[9] !== t
          ? ((l = { mutationFn: s, onSuccess: t, retry: !1 }), (v[8] = s), (v[9] = t), (v[10] = l))
          : (l = v[10]))
      let { mutate: S, isPending: k, error: I } = (0, ey.n)(l),
        P = !k
      return (
        v[11] !== k || v[12] !== A
          ? ((a = (e) => {
              e || k || A()
            }),
            (v[11] = k),
            (v[12] = A),
            (v[13] = a))
          : (a = v[13]),
        v[14] !== k || v[15] !== S
          ? ((r = (e) => {
              ;(e.preventDefault(), k || S())
            }),
            (v[14] = k),
            (v[15] = S),
            (v[16] = r))
          : (r = v[16]),
        v[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(sc.L3, {
              variant: "promotional",
              className: "text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.deleteTitle",
                defaultMessage: "Archive product feed?",
              }),
            })),
            (v[17] = o))
          : (o = v[17]),
        v[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(sc.rr, {
              className: "text-onboarding-body text-secondary select-none",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.deleteDescription",
                defaultMessage:
                  "All of the products in this feed will be archived from your business in ChatGPT in 24-48 hours.",
              }),
            })),
            (v[18] = c))
          : (c = v[18]),
        v[19] !== I
          ? ((u =
              null != I &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.deleteFailed",
                  defaultMessage: "Couldn\u2019t delete this feed. Try again",
                }),
              })),
            (v[19] = I),
            (v[20] = u))
          : (u = v[20]),
        v[21] !== u
          ? ((f = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [o, c, u] })),
            (v[21] = u),
            (v[22] = f))
          : (f = v[22]),
        v[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.confirmArchive", defaultMessage: "Yes, archive" })),
            (v[23] = h))
          : (h = v[23]),
        v[24] !== k
          ? ((p = (0, i.jsx)(ew.d, {
              className: "w-full",
              color: "dangerSolid",
              size: "promotionalAction",
              type: "submit",
              loading: k,
              disabled: k,
              children: h,
            })),
            (v[24] = k),
            (v[25] = p))
          : (p = v[25]),
        v[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.deleteCancel", defaultMessage: "Cancel" })),
            (v[26] = m))
          : (m = v[26]),
        v[27] !== k || v[28] !== A
          ? ((g = (0, i.jsx)(ew.d, {
              className: "w-full",
              color: "ghostSecondary",
              size: "promotionalLink",
              type: "button",
              disabled: k,
              onClick: A,
              children: m,
            })),
            (v[27] = k),
            (v[28] = A),
            (v[29] = g))
          : (g = v[29]),
        v[30] !== p || v[31] !== g
          ? ((b = (0, i.jsxs)(sd.Es, { className: "flex-col", children: [p, g] })),
            (v[30] = p),
            (v[31] = g),
            (v[32] = b))
          : (b = v[32]),
        v[33] !== f || v[34] !== b
          ? ((_ = (0, i.jsxs)("div", {
              className: "flex flex-col gap-8 p-6 pt-14 text-center sm:p-10",
              children: [f, b],
            })),
            (v[33] = f),
            (v[34] = b),
            (v[35] = _))
          : (_ = v[35]),
        v[36] !== _ || v[37] !== r
          ? ((x = (0, i.jsx)(sd.R4, { as: "form", variant: "chatgpt", onSubmit: r, children: _ })),
            (v[36] = _),
            (v[37] = r),
            (v[38] = x))
          : (x = v[38]),
        v[39] !== k || v[40] !== x || v[41] !== P || v[42] !== a
          ? ((y = (0, i.jsx)(sc.lG, {
              open: !0,
              variant: "centeredText",
              size: "feature",
              showDialogClose: P,
              shouldIgnoreClickOutside: k,
              onOpenChange: a,
              children: x,
            })),
            (v[39] = k),
            (v[40] = x),
            (v[41] = P),
            (v[42] = a),
            (v[43] = y))
          : (y = v[43]),
        y
      )
    }
    var sf = t("n87C"),
      sh = t("fxCc"),
      sp = t("bqtn"),
      sm = t("xs0e"),
      sg = t("DcH0"),
      sb = t("erDK"),
      s_ = t("e5OY"),
      sx = t("tzGG"),
      sy = t("D7Ms"),
      sv = t("aQvR"),
      sw = t("XcNx"),
      sj = t("I2Eu"),
      sA = t("VUft")
    let sC = (0, y._)(() =>
        Promise.resolve()
          .then(t.bind(t, "hIcQ"))
          .then((e) => e.BusinessProfileVerificationEntry),
      ),
      sS = "https://admin.shopify.com/apps/agentic"
    function sk(e) {
      let s,
        t,
        l,
        a,
        r,
        d,
        u,
        f = (0, n.c)(27),
        { accountId: h, profileId: m, manager: g, children: b } = e,
        _ = (0, p.As)(),
        x = (0, o._U)(k.JW, P.uu),
        y = (0, o._U)(k.JW, P.eA)
      f[0] !== h || f[1] !== _.userId || f[2] !== m
        ? ((s = JSON.stringify([h, _.userId, m])), (f[0] = h), (f[1] = _.userId), (f[2] = m), (f[3] = s))
        : (s = f[3])
      let v = s,
        w =
          x &&
          !_.isLoading &&
          ("chatgpt" === _.authMethod || "chatgptAuthTokens" === _.authMethod) &&
          _.accountId === h &&
          null != _.userId
      f[4] !== v ? ((t = { key: v, ready: !1 }), (f[4] = v), (f[5] = t)) : (t = f[5])
      let j = (0, c.useRef)(t)
      if (
        (f[6] !== v || f[7] !== w
          ? ((l = () => (
              (j.current = { key: v, ready: w }),
              () => {
                j.current = { key: v, ready: !1 }
              }
            )),
            (a = [v, w]),
            (f[6] = v),
            (f[7] = w),
            (f[8] = l),
            (f[9] = a))
          : ((l = f[8]), (a = f[9])),
        (0, c.useLayoutEffect)(l, a),
        !w || null == _.userId)
      ) {
        let e, s
        return (
          f[10] !== b ? ((e = b(null, !1, null)), (f[10] = b), (f[11] = e)) : (e = f[11]),
          f[12] !== e ? ((s = (0, i.jsx)(i.Fragment, { children: e })), (f[12] = e), (f[13] = s)) : (s = f[13]),
          s
        )
      }
      ;(f[14] !== v ? ((r = () => j.current.ready && j.current.key === v), (f[14] = v), (f[15] = r)) : (r = f[15]),
        f[16] !== h || f[17] !== _.userId || f[18] !== y || f[19] !== m || f[20] !== r
          ? ((d = { accountId: h, creationEnabled: y, profileId: m, userId: _.userId, isCurrent: r }),
            (f[16] = h),
            (f[17] = _.userId),
            (f[18] = y),
            (f[19] = m),
            (f[20] = r),
            (f[21] = d))
          : (d = f[21]))
      let A = d
      return (
        f[22] !== b || f[23] !== v || f[24] !== g || f[25] !== A
          ? ((u = (0, i.jsx)(sT, { scope: A, manager: g, children: b }, v)),
            (f[22] = b),
            (f[23] = v),
            (f[24] = g),
            (f[25] = A),
            (f[26] = u))
          : (u = f[26]),
        u
      )
    }
    function sI(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c,
        f,
        h,
        p,
        m,
        g,
        b,
        _,
        y,
        v,
        w,
        j,
        A,
        C = (0, n.c)(54),
        { connection: S, feed: k, summary: I, loadingSummary: P, showStatusColumn: M } = e,
        N = void 0 !== P && P,
        T = (0, u.A)(),
        D = S.phase
      ;(S.busy && (D = "checking"), S.error && (D = "needs-attention"))
      let E = "text-tertiary"
      ;("ready" === D
        ? (E = "text-success")
        : ("needs-attention" === D || "verification-required" === D) && (E = "text-warning"),
        C[0] !== T || C[1] !== D
          ? ((s = T.formatMessage(
              {
                id: "businessProfiles.feeds.shopify.rowStatus",
                defaultMessage:
                  "{phase, select, available {Not connected} verification_required {Verification required} checking {Checking\u2026} connected {Connected} connecting {Syncing} ready {Ready} needs_attention {Needs attention} disconnected {Disconnected} other {Status unavailable}}",
              },
              { phase: D.replaceAll("-", "_") },
            )),
            (C[0] = T),
            (C[1] = D),
            (C[2] = s))
          : (s = C[2]))
      let q = s,
        F = I?.connection_status?.latest_upload_at
      C[3] !== N
        ? ((t = N
            ? (0, i.jsx)(sg._, { variant: "prominent", animate: !1, className: "h-3.5 w-16 max-w-full rounded-md" })
            : (0, i.jsx)(d.A, { id: "businessProfiles.feeds.noValue", defaultMessage: "\u2014" })),
          (C[3] = N),
          (C[4] = t))
        : (t = C[4])
      let R = t
      C[5] !== k?.display_name || C[6] !== T
        ? ((l =
            k?.display_name ??
            T.formatMessage({ id: "businessProfiles.feeds.shopify.title", defaultMessage: "Shopify products" })),
          (C[5] = k?.display_name),
          (C[6] = T),
          (C[7] = l))
        : (l = C[7])
      let L = l,
        O = null
      if (S.error) {
        let e
        ;(C[8] !== S.outcomeUnknown
          ? ((e = S.outcomeUnknown
              ? (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.error.outcomeUnknown",
                  defaultMessage:
                    "We couldn\u2019t confirm your Shopify connection. Refresh this page to check its status before trying again",
                })
              : (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.error.statusDescription",
                  defaultMessage: "Couldn\u2019t update your Shopify connection",
                })),
            (C[8] = S.outcomeUnknown),
            (C[9] = e))
          : (e = C[9]),
          (O = e))
      }
      let B = S.busy || N
      ;(C[10] !== L
        ? ((a = (0, i.jsx)("span", { className: "min-w-0 truncate text-default", children: L })),
          (C[10] = L),
          (C[11] = a))
        : (a = C[11]),
        C[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)("img", {
              src: se,
              alt: "",
              width: 20,
              height: 20,
              className: "size-5 shrink-0 object-contain",
            })),
            (C[12] = r))
          : (r = C[12]),
        C[13] !== a
          ? ((o = (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-1.5", children: [a, r] })),
            (C[13] = a),
            (C[14] = o))
          : (o = C[14]),
        C[15] !== S.error || C[16] !== O || C[17] !== M
          ? ((c = !M && S.error ? (0, i.jsx)("p", { role: "alert", className: "text-danger", children: O }) : null),
            (C[15] = S.error),
            (C[16] = O),
            (C[17] = M),
            (C[18] = c))
          : (c = C[18]),
        C[19] !== o || C[20] !== c
          ? ((f = (0, i.jsx)("td", {
              className: "py-2.5 ps-4 pe-3",
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [o, c] }),
            })),
            (C[19] = o),
            (C[20] = c),
            (C[21] = f))
          : (f = C[21]),
        C[22] !== R || C[23] !== F
          ? ((h = (0, i.jsx)("td", {
              className: "px-3 py-2.5 text-secondary",
              children: (0, i.jsx)("span", {
                children: null == F ? R : (0, i.jsx)(sm.A, { dateString: F, format: "relative" }),
              }),
            })),
            (C[22] = R),
            (C[23] = F),
            (C[24] = h))
          : (h = C[24]),
        C[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)("td", {
              className: "px-3 py-2.5 text-secondary",
              children: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.shopify.method", defaultMessage: "Shopify" }),
            })),
            (C[25] = p))
          : (p = C[25]),
        C[26] !== S.reason || C[27] !== O || C[28] !== D || C[29] !== M || C[30] !== E || C[31] !== q
          ? ((m = M
              ? (0, i.jsx)("td", {
                  className: "px-3 py-2.5 text-secondary",
                  "aria-label": q,
                  children: (0, i.jsx)(eb.m, {
                    interactive: !0,
                    preventDismissOnFastClick: !0,
                    content: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, i.jsx)("p", { children: (0, i.jsx)(sN, { phase: D }) }),
                        (0, i.jsx)(sM, { reason: S.reason }),
                        null != O ? (0, i.jsx)("p", { children: O }) : null,
                      ],
                    }),
                    children: (0, i.jsxs)("button", {
                      type: "button",
                      "aria-label": q,
                      className: "flex cursor-interaction items-center gap-1.5 text-start hover:underline",
                      children: [
                        (0, i.jsx)("span", {
                          "aria-hidden": !0,
                          className: (0, ev.A)("size-1.5 shrink-0 rounded-full bg-current", E),
                        }),
                        (0, i.jsx)("span", { role: "status", children: q }),
                      ],
                    }),
                  }),
                })
              : null),
            (C[26] = S.reason),
            (C[27] = O),
            (C[28] = D),
            (C[29] = M),
            (C[30] = E),
            (C[31] = q),
            (C[32] = m))
          : (m = C[32]))
      let V = S.busy,
        U = S.busy
      return (
        C[33] !== T || C[34] !== L
          ? ((g = T.formatMessage(
              { id: "businessProfiles.feeds.shopify.menu.label", defaultMessage: "Shopify feed actions for {feed}" },
              { feed: L },
            )),
            (C[33] = T),
            (C[34] = L),
            (C[35] = g))
          : (g = C[35]),
        C[36] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, i.jsx)(x.e4G, {})), (C[36] = b)) : (b = C[36]),
        C[37] !== S.busy || C[38] !== g
          ? ((_ = (0, i.jsx)(ew.d, {
              color: "outlineGhost",
              size: "compact",
              uniform: !0,
              disabled: V,
              loading: U,
              "aria-label": g,
              children: b,
            })),
            (C[37] = S.busy),
            (C[38] = g),
            (C[39] = _))
          : (_ = C[39]),
        C[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(sv.g, { href: sS })), (C[40] = y))
          : (y = C[40]),
        C[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(sp.ms.Item, {
              href: sS,
              rightIcon: y,
              onClick: sP,
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.shopify.menu.openAdmin",
                defaultMessage: "Open Shopify admin",
              }),
            })),
            (C[41] = v))
          : (v = C[41]),
        C[42] !== S.disconnectAction
          ? ((w =
              null != S.disconnectAction
                ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(sp.ms.Separator, {}), S.disconnectAction] })
                : null),
            (C[42] = S.disconnectAction),
            (C[43] = w))
          : (w = C[43]),
        C[44] !== S.connectAction || C[45] !== _ || C[46] !== w
          ? ((j = (0, i.jsx)("td", {
              className: "px-3 py-2.5",
              children: (0, i.jsxs)(sp.Ab, { align: "end", triggerButton: _, children: [S.connectAction, v, w] }),
            })),
            (C[44] = S.connectAction),
            (C[45] = _),
            (C[46] = w),
            (C[47] = j))
          : (j = C[47]),
        C[48] !== f || C[49] !== h || C[50] !== m || C[51] !== j || C[52] !== B
          ? ((A = (0, i.jsxs)("tr", {
              className: "h-16 border-t border-subtle",
              "aria-busy": B,
              children: [f, h, p, m, j],
            })),
            (C[48] = f),
            (C[49] = h),
            (C[50] = m),
            (C[51] = j),
            (C[52] = B),
            (C[53] = A))
          : (A = C[53]),
        A
      )
    }
    function sP(e) {
      return (0, z.PQ)({ event: e, href: sS, disposition: "new-tab", initiator: "open_in_browser_bridge" })
    }
    function sM(e) {
      let s = (0, n.c)(3),
        { reason: t } = e
      switch (t) {
        case "verification_unavailable": {
          let e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("p", {
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.shopify.verificationUnavailableRefresh",
                    defaultMessage:
                      "We couldn\u2019t check your business verification. Refresh this page to check again",
                  }),
                })),
                (s[0] = e))
              : (e = s[0]),
            e
          )
        }
        case "installation_unavailable": {
          let e
          return (
            s[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("p", {
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.shopify.installationUnavailableAdmin",
                    defaultMessage:
                      "Your Shopify store connection is unavailable. Check your connection in Shopify admin",
                  }),
                })),
                (s[1] = e))
              : (e = s[1]),
            e
          )
        }
        case "source_changed": {
          let e
          return (
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("p", {
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.shopify.sourceChangedAdmin",
                    defaultMessage: "Your Shopify store connection has changed. Check your connection in Shopify admin",
                  }),
                })),
                (s[2] = e))
              : (e = s[2]),
            e
          )
        }
        case "not_connected":
        case "ready":
        case "sync_pending":
        case "verification_required":
        case null:
        case void 0:
          return null
      }
    }
    function sN(e) {
      let s = (0, n.c)(8),
        { phase: t } = e
      switch (t) {
        case "verification-required": {
          let e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.verification.description",
                  defaultMessage: "Shopify is linked. Verify your business before using its products in ChatGPT.",
                })),
                (s[0] = e))
              : (e = s[0]),
            e
          )
        }
        case "checking": {
          let e
          return (
            s[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.checking.description",
                  defaultMessage: "Checking your Shopify connection",
                })),
                (s[1] = e))
              : (e = s[1]),
            e
          )
        }
        case "connected": {
          let e
          return (
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.connected.syncUnavailable",
                  defaultMessage: "Shopify is connected. Sync status is unavailable",
                })),
                (s[2] = e))
              : (e = s[2]),
            e
          )
        }
        case "connecting": {
          let e
          return (
            s[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.connecting.description",
                  defaultMessage: "Your Shopify products are syncing",
                })),
                (s[3] = e))
              : (e = s[3]),
            e
          )
        }
        case "ready": {
          let e
          return (
            s[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.ready.description",
                  defaultMessage: "Your Shopify products are ready to use in ChatGPT",
                })),
                (s[4] = e))
              : (e = s[4]),
            e
          )
        }
        case "needs-attention": {
          let e
          return (
            s[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.attention.statusDescription",
                  defaultMessage: "Your Shopify connection needs attention",
                })),
                (s[5] = e))
              : (e = s[5]),
            e
          )
        }
        case "disconnected": {
          let e
          return (
            s[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.disconnected.description",
                  defaultMessage: "Shopify is disconnected from this business",
                })),
                (s[6] = e))
              : (e = s[6]),
            e
          )
        }
        case "available": {
          let e
          return (
            s[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.shopify.available.description",
                  defaultMessage: "Connect Shopify to bring your products to ChatGPT",
                })),
                (s[7] = e))
              : (e = s[7]),
            e
          )
        }
      }
    }
    function sT(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        u,
        f,
        h,
        p,
        m,
        g,
        b,
        _,
        x,
        y,
        v,
        w,
        j,
        A = (0, n.c)(70),
        { scope: C, manager: S, children: k } = e,
        I = (0, ex.jE)()
      A[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = new Set()), (A[0] = s)) : (s = A[0])
      let P = (0, c.useRef)(s),
        M = (0, c.useRef)(null),
        N = (0, c.useRef)(null),
        [E, q] = (0, c.useState)(null)
      ;(A[1] !== E
        ? ((t = () => {
            null != E && (N.current = null)
          }),
          (l = [E]),
          (A[1] = E),
          (A[2] = t),
          (A[3] = l))
        : ((t = A[2]), (l = A[3])),
        (0, c.useEffect)(t, l),
        A[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => {
              let e = P.current
              return () => {
                for (let s of e) s.abort()
                e.clear()
              }
            }),
            (r = []),
            (A[4] = a),
            (A[5] = r))
          : ((a = A[4]), (r = A[5])),
        (0, c.useEffect)(a, r))
      let { data: F, error: R, isFetching: L, isPending: O, isFetchedAfterMount: B, refetch: V } = sE(C)
      ;(A[6] !== F?.shop || A[7] !== I || A[8] !== C
        ? ((o = async (e) => {
            for (let s of ((M.current = e), P.current)) s.abort()
            let s = new AbortController()
            return (
              P.current.add(s),
              (async function (e, s, t, i) {
                let n = { "ChatGPT-Account-ID": e.accountId, [ef.zBc]: e.accountId },
                  l = { accountId: e.accountId, userId: e.userId },
                  a = { business_profile_id: e.profileId }
                return {
                  connection:
                    "connect" === s.action
                      ? await T.Request.safePost(
                          "/shopping/business-profiles/{business_profile_id}/shopify-products/connect",
                          {
                            additionalHeaders: n,
                            expectedIdentity: l,
                            assertRequestCurrent: () => sL(e, i),
                            parameters: { path: a },
                            requestBody: {
                              shop_gid: s.shopGid,
                              myshopify_domain: t?.shopDomain,
                              idempotency_key: s.idempotencyKey,
                            },
                            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503, 504],
                            retry: "never",
                            signal: i,
                          },
                        )
                      : await T.Request.safePost(
                          "/shopping/business-profiles/{business_profile_id}/shopify-products/disconnect",
                          {
                            additionalHeaders: n,
                            expectedIdentity: l,
                            assertRequestCurrent: () => sL(e, i),
                            parameters: { path: a },
                            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
                            retry: "never",
                            signal: i,
                          },
                        ),
                  shop: t,
                }
              })(
                C,
                e,
                F?.shop ?? null,
                AbortSignal.any([s.signal, AbortSignal.timeout("connect" === e.action ? 4e4 : 3e4)]),
              )
                .catch(async (t) => {
                  if ("connect" === e.action && sR(t)) {
                    let t = await (async function (e, s, t, i, n, l) {
                      let a = sq(s),
                        r = () => !n.aborted && s.isCurrent() && l() && "hidden" !== document.visibilityState
                      if (!r() || sF(e.getQueryState(a)?.error)) return null
                      await e.cancelQueries({ queryKey: a, exact: !0 })
                      let o = () => {
                        e.cancelQueries({ queryKey: a, exact: !0 })
                      }
                      n.addEventListener("abort", o, { once: !0 })
                      try {
                        for (let l = 0; l < 2 && r(); l++)
                          try {
                            if (
                              (l > 0 &&
                                (await (function (e) {
                                  return (
                                    e.throwIfAborted(),
                                    new Promise((s, t) => {
                                      let i = () => {
                                          ;(clearTimeout(n),
                                            t(new DOMException("Connection check canceled", "AbortError")))
                                        },
                                        n = setTimeout(() => {
                                          ;(e.removeEventListener("abort", i), s())
                                        }, 5e3)
                                      e.addEventListener("abort", i, { once: !0 })
                                    })
                                  )
                                })(n)),
                              !r() || sF(e.getQueryState(a)?.error))
                            )
                              return null
                            let o = await e.fetchQuery({
                              queryKey: a,
                              queryFn: async ({ signal: e }) => {
                                let l = await sO(s, AbortSignal.any([n, e, AbortSignal.timeout(2e4)]), {
                                  shop_gid: t.shopGid,
                                  myshopify_domain: i?.shopDomain,
                                })
                                if (!r()) throw new DOMException("Connection check canceled", "AbortError")
                                return { connection: l, shop: i }
                              },
                              staleTime: 0,
                              retry: !1,
                            })
                            if (!r()) return null
                            let c = o.connection,
                              d =
                                c.source_version === t.idempotencyKey ||
                                (null != t.sourceVersion && c.source_version === t.sourceVersion)
                            if (
                              c.shop_gid === t.shopGid &&
                              "connected" === c.connection_status &&
                              c.can_use_catalog &&
                              !c.verification_required &&
                              c.feed_id &&
                              c.source_version &&
                              d
                            )
                              return o
                            if (c.shop_gid !== t.shopGid || (null != c.source_version && !d)) break
                          } catch (e) {
                            if (!r() || sF(e) || (e instanceof D.FetchError && [409, 422].includes(e.status))) break
                          }
                        return null
                      } finally {
                        n.removeEventListener("abort", o)
                      }
                    })(
                      I,
                      C,
                      e,
                      F?.shop ?? null,
                      AbortSignal.any([s.signal, AbortSignal.timeout(3e4)]),
                      () => M.current === e,
                    )
                    if (null != t) return { ...t, confirmedByRead: !0 }
                  }
                  throw t
                })
                .finally(() => {
                  P.current.delete(s)
                })
            )
          }),
          (A[6] = F?.shop),
          (A[7] = I),
          (A[8] = C),
          (A[9] = o))
        : (o = A[9]),
        A[10] !== I || A[11] !== C
          ? ((u = (e, s) => {
              if (!C.isCurrent() || M.current !== s) return
              "disconnect" === s.action && (N.current = null)
              let t = "confirmedByRead" in e
              if (sF(I.getQueryState(sq(C))?.error)) return void sV(I, C, t)
              let i = sq(C),
                n =
                  t ||
                  ("connect" === s.action &&
                    "connected" === e.connection.connection_status &&
                    null != e.connection.shop_gid &&
                    !e.connection.can_verify_store &&
                    I.getQueryState(i)?.fetchStatus === "idle")
              ;(t || I.setQueryData(i, n ? { ...e, shop: null } : e), q(null), sV(I, C, n))
            }),
            (f = (e, s) => {
              C.isCurrent() &&
                M.current === s &&
                !("connect" === s.action && sR(e)) &&
                I.invalidateQueries({ queryKey: sq(C) })
            }),
            (A[10] = I),
            (A[11] = C),
            (A[12] = u),
            (A[13] = f))
          : ((u = A[12]), (f = A[13])),
        A[14] !== o || A[15] !== u || A[16] !== f
          ? ((h = { mutationFn: o, retry: !1, onSuccess: u, onError: f }),
            (A[14] = o),
            (A[15] = u),
            (A[16] = f),
            (A[17] = h))
          : (h = A[17]))
      let { mutate: U, isPending: $, error: G, variables: H } = (0, ey.n)(h)
      A[18] !== C
        ? ((p = {
            mutationFn: async (e) => {
              let s = sB(C, e),
                t = new AbortController()
              P.current.add(t)
              let i = AbortSignal.any([t.signal, AbortSignal.timeout(3e4)])
              await (0, sA.Ip)({
                actor: {
                  accountId: C.accountId,
                  userId: C.userId,
                  getAbortSignal: () => i,
                  assertCurrentActor: () => sL(C, i),
                },
                businessProfileId: C.profileId,
                routing: e,
                idempotencyKey: crypto.randomUUID(),
              })
                .then((t) => {
                  if ((sL(C, i), window.location.assign(t), null != s)) {
                    let t = sB(C, e)
                    null != t && t.attemptKey === s.attemptKey && t.session.clear()
                  }
                })
                .finally(() => {
                  P.current.delete(t)
                })
            },
            retry: !1,
          }),
          (A[18] = C),
          (A[19] = p))
        : (p = A[19])
      let z = (0, ey.n)(p),
        W = F?.connection
      A[20] !== H?.action || A[21] !== G
        ? ((m = H?.action === "connect" && sR(G)), (A[20] = H?.action), (A[21] = G), (A[22] = m))
        : (m = A[22])
      let K = m,
        Q = !L && null == R && null != W,
        Z = W?.shop_gid ?? F?.shop?.shopGid,
        Y = L || $ || z.isPending,
        J =
          Q &&
          W.verification_required &&
          "pending_verification" === W.connection_status &&
          !0 === S.capabilities.requires_business_verification
      A[23] !== W || A[24] !== F?.shop || A[25] !== Q
        ? ((g = Q && (0, sw.x)({ browser: !0 }) && W.can_verify_store && F?.shop != null),
          (A[23] = W),
          (A[24] = F?.shop),
          (A[25] = Q),
          (A[26] = g))
        : (g = A[26])
      let X = g,
        ee = Q && W.can_connect && !W.can_use_catalog && !X && !J && null != Z,
        es =
          Q &&
          !$ &&
          !W.verification_required &&
          !W.can_use_catalog &&
          W.can_connect &&
          "connecting" === W.connection_status &&
          null != Z
      A[27] !== K || A[28] !== W?.source_version || A[29] !== U || A[30] !== Z
        ? ((b = () => {
            if (null == Z || null != N.current || K) return
            let e = crypto.randomUUID()
            ;((N.current = e),
              U({
                action: "connect",
                shopGid: Z,
                idempotencyKey: e,
                sourceVersion: W?.source_version ?? null,
                automatic: !0,
              }))
          }),
          (A[27] = K),
          (A[28] = W?.source_version),
          (A[29] = U),
          (A[30] = Z),
          (A[31] = b))
        : (b = A[31])
      let et = (0, c.useEffectEvent)(b)
      if (
        (A[32] !== es || A[33] !== et
          ? ((_ = () => {
              es && et()
            }),
            (A[32] = es),
            (A[33] = et),
            (A[34] = _))
          : (_ = A[34]),
        A[35] !== es ? ((x = [es]), (A[35] = es), (A[36] = x)) : (x = A[36]),
        (0, c.useEffect)(_, x),
        A[37] !== G ||
          A[38] !== Y ||
          A[39] !== ee ||
          A[40] !== J ||
          A[41] !== X ||
          A[42] !== k ||
          A[43] !== K ||
          A[44] !== W ||
          A[45] !== F ||
          A[46] !== R ||
          A[47] !== B ||
          A[48] !== O ||
          A[49] !== S ||
          A[50] !== U ||
          A[51] !== Q ||
          A[52] !== V ||
          A[53] !== es ||
          A[54] !== C ||
          A[55] !== Z ||
          A[56] !== z ||
          A[57] !== E)
      ) {
        var ei
        let e = "checking"
        null != R
          ? (e = "needs-attention")
          : Q &&
            (e =
              "disconnected" === (ei = W).connection_status
                ? (ei.can_connect || ei.can_verify_store) && null == ei.source_version
                  ? "available"
                  : "disconnected"
                : ei.verification_required
                  ? "verification-required"
                  : "needs_attention" === ei.connection_status || "needs_attention" === ei.sync_status
                    ? "needs-attention"
                    : "connecting" !== ei.connection_status || ei.can_use_catalog
                      ? ei.can_use_catalog
                        ? "ready" === ei.sync_status
                          ? "ready"
                          : "processing" === ei.sync_status
                            ? "connecting"
                            : "connected"
                        : "needs-attention"
                      : "checking")
        let s =
          !sF(R) && (W?.shopify_detected || null != R)
            ? {
                feedId: W?.feed_id ?? null,
                phase: e,
                busy: Y,
                error: null != R || null != G || null != z.error,
                outcomeUnknown: null == R && null == z.error && K,
                reason: W?.reason,
                connectAction:
                  ee && (!es || null != G)
                    ? (0, i.jsx)(sp.ms.Item, {
                        disabled: Y,
                        onSelect: () => {
                          if (Y || null == Z) return
                          let e = null != G && es ? (N.current ?? crypto.randomUUID()) : crypto.randomUUID()
                          ;((N.current = e),
                            U({
                              action: "connect",
                              shopGid: Z,
                              idempotencyKey: e,
                              sourceVersion: W.source_version ?? null,
                            }))
                        },
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.shopify.menu.connect",
                          defaultMessage: "Connect",
                        }),
                      })
                    : null,
                disconnectAction:
                  Q && "disconnected" !== W.connection_status
                    ? (0, i.jsx)(sp.ms.Item, {
                        tone: "destructive",
                        disabled: Y,
                        onSelect: () => {
                          Y || U({ action: "disconnect" })
                        },
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.shopify.disconnect.button.label",
                          defaultMessage: "Disconnect",
                        }),
                      })
                    : null,
                verifyStoreAction: X
                  ? (0, i.jsx)(ew.d, {
                      type: "button",
                      color: "primary",
                      size: "beaconAction",
                      loading: z.isPending,
                      "aria-disabled": Y,
                      onClick: () => {
                        Y || F?.shop == null || z.mutate(F.shop)
                      },
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.feeds.shopify.verifyStore.button.label",
                        defaultMessage: "Verify with Shopify",
                      }),
                    })
                  : null,
                verifyBusinessAction: J
                  ? {
                      busy: Y,
                      label: (0, i.jsx)(d.A, {
                        id: "businessProfiles.feeds.shopify.verification.button.label",
                        defaultMessage: "Verify your business",
                      }),
                      onOpen: (e) => q({ retryChallengeId: e }),
                    }
                  : void 0,
              }
            : null
        ;((y = "flex flex-col gap-4"),
          A[61] !== S || A[62] !== V || A[63] !== C || A[64] !== E
            ? ((v =
                null != E
                  ? (0, i.jsx)(sC, {
                      manager: S,
                      purpose: "add-products",
                      retryChallengeId: E.retryChallengeId,
                      onExit: () => {
                        ;(q(null), V())
                      },
                      verificationContext: (0, i.jsx)("p", {
                        className: "text-sm text-secondary",
                        children: (0, i.jsx)(sN, { phase: "verification-required" }),
                      }),
                      children: (0, i.jsx)(sD, { scope: C }),
                    })
                  : null),
              (A[61] = S),
              (A[62] = V),
              (A[63] = C),
              (A[64] = E),
              (A[65] = v))
            : (v = A[65]),
          (w = k(W?.feed_id ?? null, O && !B, s)),
          (A[37] = G),
          (A[38] = Y),
          (A[39] = ee),
          (A[40] = J),
          (A[41] = X),
          (A[42] = k),
          (A[43] = K),
          (A[44] = W),
          (A[45] = F),
          (A[46] = R),
          (A[47] = B),
          (A[48] = O),
          (A[49] = S),
          (A[50] = U),
          (A[51] = Q),
          (A[52] = V),
          (A[53] = es),
          (A[54] = C),
          (A[55] = Z),
          (A[56] = z),
          (A[57] = E),
          (A[58] = y),
          (A[59] = v),
          (A[60] = w))
      } else ((y = A[58]), (v = A[59]), (w = A[60]))
      return (
        A[66] !== y || A[67] !== v || A[68] !== w
          ? ((j = (0, i.jsxs)("div", { className: y, children: [v, w] })),
            (A[66] = y),
            (A[67] = v),
            (A[68] = w),
            (A[69] = j))
          : (j = A[69]),
        j
      )
    }
    function sD(e) {
      let s,
        t = (0, n.c)(2),
        { scope: l } = e,
        { isFetching: a } = sE(l, !0)
      return (
        t[0] !== a
          ? ((s = a ? (0, i.jsx)("div", { role: "status", children: (0, i.jsx)(w.y, {}) }) : null),
            (t[0] = a),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    function sE(e, s) {
      let t,
        i,
        l,
        a,
        r = (0, n.c)(11),
        o = void 0 !== s && s
      return (
        r[0] !== e ? ((t = sq(e)), (r[0] = e), (r[1] = t)) : (t = r[1]),
        r[2] !== e
          ? ((i = async (s) => {
              let { signal: t } = s
              return (async function (e, s) {
                let t = await sO(e, s),
                  i = t,
                  n = null
                if (
                  (0, sw.x)({ browser: !0 }) &&
                  !("disconnected" !== t.connection_status && null != t.shop_gid && !t.can_verify_store)
                ) {
                  let l = (t) => sO(e, s, { shop_gid: t.shopGid, myshopify_domain: t.shopDomain }),
                    a = null == t.source_version ? sB(e) : null
                  if (null != a) {
                    let t = await l(a.shop)
                    if (t.can_verify_store) return (sL(e, s), { connection: t, shop: a.shop })
                  }
                  i =
                    null !=
                    (n = await (0, sA.K5)({
                      actor: {
                        accountId: e.accountId,
                        userId: e.userId,
                        getAbortSignal: () => s,
                        assertCurrentActor: () => sL(e, s),
                      },
                      businessProfileId: e.profileId,
                    }))
                      ? await l(n)
                      : t
                }
                return (sL(e, s), { connection: i, shop: n })
              })(e, AbortSignal.any([t, AbortSignal.timeout(2e4)]))
            }),
            (r[2] = e),
            (r[3] = i))
          : (i = r[3]),
        r[4] !== o || r[5] !== e
          ? ((l = () => (!o && null == sB(e)) || "always"), (r[4] = o), (r[5] = e), (r[6] = l))
          : (l = r[6]),
        r[7] !== t || r[8] !== i || r[9] !== l
          ? ((a = { queryKey: t, queryFn: i, ...eg.I, refetchOnMount: l, staleTime: 3e5, gcTime: 9e5, retry: !1 }),
            (r[7] = t),
            (r[8] = i),
            (r[9] = l),
            (r[10] = a))
          : (a = r[10]),
        (0, eu.I)(a)
      )
    }
    function sq(e) {
      return ["business-profiles", e.accountId, e.profileId, "shopify-products", e.userId]
    }
    function sF(e) {
      return e instanceof D.FetchError && [401, 403, 404].includes(e.status)
    }
    function sR(e) {
      return (
        (e instanceof Error && "TimeoutError" === e.name) ||
        (e instanceof D.FetchError &&
          ((504 === e.status && "shopify_connection_outcome_unknown" === e.errorCode) ||
            (null == e.responseStatus && "network" === e.errorKind) ||
            (null != e.responseStatus && e.responseStatus >= 200 && e.responseStatus < 300)))
      )
    }
    function sL(e, s) {
      if ((s.throwIfAborted(), !e.isCurrent())) throw Error("Business Profile account changed")
    }
    function sO(e, s, t = {}) {
      return T.Request.safeGet("/shopping/business-profiles/{business_profile_id}/shopify-products/connection", {
        additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [ef.zBc]: e.accountId },
        expectedIdentity: { accountId: e.accountId, userId: e.userId },
        assertRequestCurrent: () => sL(e, s),
        parameters: { path: { business_profile_id: e.profileId }, query: t },
        expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
        retry: "never",
        signal: s,
      })
    }
    function sB(e, s) {
      if (!e.creationEnabled || !(0, sw.x)({ browser: !0 })) return null
      let t = (0, sj.vC)(e.accountId, e.userId),
        i = t.pending(),
        n = i?.draft.shopifyRouting
      return i?.draft.profileId === e.profileId &&
        null != n &&
        (null == s || (n.shopGid === s.shopGid && n.shopDomain === s.shopDomain))
        ? { session: t, attemptKey: i.attemptKey, shop: { ...n, testOverride: !1 } }
        : null
    }
    function sV(e, s, t = !1) {
      return e.invalidateQueries({
        queryKey: ["business-profiles", s.accountId, s.profileId],
        predicate: (e) => !t || !(0, sy.MK)({ queryKey: sq(s), exact: !0 }, e),
      })
    }
    function sU(e) {
      let s,
        t,
        l,
        a,
        r,
        c,
        h,
        p,
        m,
        b,
        _,
        y,
        v,
        w,
        j,
        A,
        C,
        S,
        I,
        M,
        D,
        E,
        q,
        F = (0, n.c)(63),
        {
          accountId: R,
          profileId: L,
          feeds: O,
          onArchiveFeed: B,
          onUpdateFeed: V,
          includeConnectionStatus: U,
          shopifyFeedId: $,
          shopifyConnection: G,
          adminView: H,
        } = e,
        z = void 0 === U || U,
        W = (0, u.A)(),
        K = (0, o._U)(k.JW, P.hT)
      F[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.noValue", defaultMessage: "\u2014" })), (F[0] = s))
        : (s = F[0])
      let Q = s
      F[1] !== O ? ((t = O.map(sZ)), (F[1] = O), (F[2] = t)) : (t = F[2])
      let Z = t
      F[3] !== R || F[4] !== H || F[5] !== Z || F[6] !== L
        ? ((l = ["business-profiles", R, L, "feed-connection-summaries", Z, ...(0, N.Ot)(H)]),
          (a = async (e) => {
            let { signal: s } = e,
              t = []
            for (let e = 0; e < Z.length; e += 20)
              t.push(
                T.Request.safeGet("/shopping/business-profiles/{business_profile_id}/feed-summaries", {
                  additionalHeaders: { "ChatGPT-Account-ID": R },
                  parameters: {
                    path: { business_profile_id: L },
                    query: {
                      feed_ids: Z.slice(e, e + 20),
                      include_connection_status: !0,
                      include_catalog_summary: !1,
                      ...(0, N.C0)(H),
                    },
                  },
                  expectedIdentity: H,
                  expectedErrorStatuses: [401, 403, 404, 409, 429],
                  signal: s,
                }),
              )
            return (await Promise.all(t)).flat()
          }),
          (F[3] = R),
          (F[4] = H),
          (F[5] = Z),
          (F[6] = L),
          (F[7] = l),
          (F[8] = a))
        : ((l = F[7]), (a = F[8]))
      let Y = z && Z.length > 0
      F[9] !== l || F[10] !== a || F[11] !== Y
        ? ((r = { queryKey: l, queryFn: a, ...eg.I, enabled: Y, staleTime: 3e5, gcTime: 9e5, retry: !1 }),
          (F[9] = l),
          (F[10] = a),
          (F[11] = Y),
          (F[12] = r))
        : (r = F[12])
      let { data: J, error: X, isFetching: ee, refetch: es } = (0, eu.I)(r),
        et = z
          ? []
          : O.filter(
              (e) => e.feed_id.startsWith("bpfeed_") && !e.feed_id.startsWith("bpfeed_shopify_") && e.feed_id !== $,
            )
      F[13] !== R || F[14] !== H
        ? ((c = (e) => (0, s_.e)(R, e, H)), (F[13] = R), (F[14] = H), (F[15] = c))
        : (c = F[15])
      let ei = (0, sh.E)({ queries: et.map(c) })
      F[16] !== ei ? ((h = (e, s) => [e.feed_id, ei[s]]), (F[16] = ei), (F[17] = h)) : (h = F[17])
      let en = new Map(et.map(h)),
        el = z ? X : null
      F[18] !== el || F[19] !== ei
        ? ((p = [el, ...ei.map(sQ)].find(sK)), (F[18] = el), (F[19] = ei), (F[20] = p))
        : (p = F[20])
      let ea = p
      F[21] !== z || F[22] !== es || F[23] !== ei
        ? ((m = function () {
            for (let e of (z && es(), ei)) e.refetch()
          }),
          (F[21] = z),
          (F[22] = es),
          (F[23] = ei),
          (F[24] = m))
        : (m = F[24])
      let er = m
      if (null != ea) {
        let e
        return (
          F[25] !== ea || F[26] !== er
            ? ((e = (0, i.jsx)(sx.AB, { error: ea, onRetry: er })), (F[25] = ea), (F[26] = er), (F[27] = e))
            : (e = F[27]),
          e
        )
      }
      let eo = new Map(z && null == X ? J?.map(sW) : void 0)
      F[28] !== O || F[29] !== G?.feedId
        ? ((b = O.find((e) => e.feed_id === G?.feedId) ?? (G?.feedId == null ? O.find(sz) : void 0)),
          (F[28] = O),
          (F[29] = G?.feedId),
          (F[30] = b))
        : (b = F[30])
      let ec = b
      ;(F[31] !== ee || F[32] !== es || F[33] !== el
        ? ((_ =
            null != el
              ? (0, i.jsxs)("div", {
                  role: "status",
                  className: "flex flex-wrap items-center gap-2 text-sm text-secondary",
                  children: [
                    (0, i.jsx)(d.A, {
                      id: "businessProfiles.feedConnections.updatesUnavailable",
                      defaultMessage: "Feed updates are unavailable",
                    }),
                    (0, i.jsx)(sx.gh, {
                      refresh: es,
                      color: "outlineGhost",
                      size: "compact",
                      "aria-disabled": ee,
                      children: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.retry", defaultMessage: "Try again" }),
                    }),
                  ],
                })
              : null),
          (F[31] = ee),
          (F[32] = es),
          (F[33] = el),
          (F[34] = _))
        : (_ = F[34]),
        F[35] !== W
          ? ((y = W.formatMessage({
              id: "businessProfiles.feedConnections.table",
              defaultMessage: "Feed connections",
            })),
            (F[35] = W),
            (F[36] = y))
          : (y = F[36]),
        F[37] !== ee || F[38] !== ei ? ((v = ee || ei.some(sH)), (F[37] = ee), (F[38] = ei), (F[39] = v)) : (v = F[39]),
        F[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("th", {
              scope: "col",
              className: "w-2/5 py-3 ps-4 pe-3 text-start font-normal",
              children: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.feedColumn", defaultMessage: "Feed" }),
            })),
            (F[40] = w))
          : (w = F[40]),
        F[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)("th", {
              scope: "col",
              className: "px-3 py-3 text-start font-normal",
              children: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.updatedColumn", defaultMessage: "Updated" }),
            })),
            (F[41] = j))
          : (j = F[41]),
        F[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)("th", {
              scope: "col",
              className: "px-3 py-3 text-start font-normal",
              children: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.methodColumn", defaultMessage: "Method" }),
            })),
            (F[42] = A))
          : (A = F[42]),
        F[43] !== K
          ? ((C = K
              ? (0, i.jsx)("th", {
                  scope: "col",
                  className: "px-3 py-3 text-start font-normal",
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feedConnections.statusColumn",
                    defaultMessage: "Status",
                  }),
                })
              : null),
            (F[43] = K),
            (F[44] = C))
          : (C = F[44]),
        F[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)("th", {
              scope: "col",
              className: "w-14",
              children: (0, i.jsx)("span", {
                className: "sr-only",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.activity.feedActions",
                  defaultMessage: "Feed actions",
                }),
              }),
            })),
            (F[45] = S))
          : (S = F[45]),
        F[46] !== C
          ? ((I = (0, i.jsx)("thead", {
              className: "text-control-label text-tertiary select-none",
              children: (0, i.jsxs)("tr", { children: [w, j, A, C, S] }),
            })),
            (F[46] = C),
            (F[47] = I))
          : (I = F[47]),
        F[48] !== G || F[49] !== ec || F[50] !== K
          ? ((M = null != G && null == ec ? (0, i.jsx)(sI, { connection: G, showStatusColumn: K }) : null),
            (F[48] = G),
            (F[49] = ec),
            (F[50] = K),
            (F[51] = M))
          : (M = F[51]))
      let ed = O.map((e) => {
        let s = eo.get(e.feed_id)
        if (null != G && e === ec)
          return (0, i.jsx)(
            sI,
            { connection: G, feed: e, summary: s, loadingSummary: z && null == s && ee, showStatusColumn: K },
            e.feed_id,
          )
        let t = s?.connection_status,
          n = en.get(e.feed_id),
          l = n?.error == null ? n?.data?.uploads.toSorted(sG)[0] : void 0,
          a = (z && null == s && ee) || n?.isLoading === !0,
          r = t?.status ?? l?.status ?? "unknown"
        ;(t?.status === "needs_attention" && null != t.latest_upload_status && (r = t.latest_upload_status),
          n?.error != null && (r = "unknown"),
          a && (r = "checking"))
        let o = t?.latest_upload_at ?? l?.uploaded_at,
          c = a
            ? (0, i.jsx)(sg._, { variant: "prominent", animate: !1, className: "h-3.5 w-16 max-w-full rounded-md" })
            : Q,
          u = (0, i.jsxs)("span", {
            role: "status",
            className: "flex items-center gap-1.5",
            children: [
              (0, i.jsx)("span", {
                "aria-hidden": !0,
                className: (0, ev.A)(
                  "size-1.5 shrink-0 rounded-full bg-current",
                  (function (e) {
                    switch (e) {
                      case "failed":
                        return "text-danger"
                      case "synced":
                      case "completed":
                        return "text-success"
                      case "needs_attention":
                      case "completed_with_errors":
                        return "text-warning"
                      default:
                        return "text-tertiary"
                    }
                  })(r),
                ),
              }),
              "failed" === r
                ? (0, i.jsx)(sb.B, { feedId: e.feed_id, uploadId: t?.latest_upload_id ?? l?.upload_id, uploadedAt: o })
                : (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.overviewStatus",
                    defaultMessage:
                      "{status, select, not_configured {Not connected} waiting_for_upload {Waiting for upload} scanning {Waiting for processing} received {In progress} processing {In progress} synced {Uploaded} completed {Uploaded} completed_with_errors {Uploaded with issues} failed {Failed} needs_attention {Needs attention} paused {Paused} skipped {Skipped} checking {Checking\u2026} other {Status unavailable}}",
                    values: { status: r },
                  }),
            ],
          }),
          h = e.feed_id === $ || e.feed_id.startsWith("bpfeed_shopify_"),
          p = t?.configured_sources ?? n?.data?.configured_sources,
          m = h ? "shopify" : (t?.latest_upload_source ?? l?.source ?? t?.source ?? "unknown"),
          b = "unknown" === m && p?.length ? p : [m]
        return (0, i.jsxs)(
          "tr",
          {
            className: "h-16 border-t border-subtle",
            "aria-busy": a,
            children: [
              (0, i.jsx)("td", {
                className: "py-2.5 ps-4 pe-3",
                children: (0, i.jsxs)("div", {
                  className: "flex min-w-0 items-center gap-1.5",
                  children: [
                    (0, i.jsx)("span", {
                      className: "min-w-0 truncate text-default",
                      children: e.display_name ?? e.feed_id,
                    }),
                    h &&
                      (0, i.jsx)("img", {
                        src: se,
                        alt: "",
                        width: 20,
                        height: 20,
                        className: "size-5 shrink-0 object-contain",
                      }),
                  ],
                }),
              }),
              (0, i.jsx)("td", {
                className: "px-3 py-2.5 text-secondary",
                children: null == o ? c : (0, i.jsx)(sm.A, { dateString: o, format: "relative" }),
              }),
              (0, i.jsx)("td", {
                className: "px-3 py-2.5 text-secondary",
                children:
                  a && "unknown" === m
                    ? (0, i.jsx)(sg._, {
                        variant: "prominent",
                        animate: !1,
                        className: "h-3.5 w-24 max-w-full rounded-md",
                      })
                    : (0, i.jsx)(f.dT, { type: "unit", value: b.map(s$) }),
              }),
              K
                ? (0, i.jsx)("td", {
                    className: "px-3 py-2.5 text-secondary",
                    children:
                      n?.error != null
                        ? (0, i.jsx)(eb.m, {
                            interactive: !0,
                            preventDismissOnFastClick: !0,
                            content: (0, i.jsxs)("div", {
                              className: "flex flex-col items-start gap-2",
                              children: [
                                (0, i.jsx)(d.A, {
                                  id: "businessProfiles.feedConnections.uploadStatusUnavailable",
                                  defaultMessage: "Couldn\u2019t load this feed\u2019s status",
                                }),
                                (0, i.jsx)(sx.gh, {
                                  refresh: n.refetch,
                                  color: "outlineGhost",
                                  size: "compact",
                                  "aria-disabled": n.isFetching,
                                  children: (0, i.jsx)(d.A, {
                                    id: "businessProfiles.feeds.retry",
                                    defaultMessage: "Try again",
                                  }),
                                }),
                              ],
                            }),
                            children: (0, i.jsx)("button", {
                              type: "button",
                              className: "cursor-interaction text-start hover:underline",
                              children: u,
                            }),
                          })
                        : u,
                  })
                : null,
              (0, i.jsx)("td", {
                className: "px-3 py-2.5",
                children:
                  null != H || null == B || e.archived || e.feed_id === $
                    ? null
                    : (0, i.jsxs)(sp.Ab, {
                        align: "end",
                        triggerButton: (0, i.jsx)(g.$, {
                          color: "ghost",
                          size: "compact",
                          uniform: !0,
                          "aria-label": W.formatMessage(
                            { id: "businessProfiles.feeds.manageFeed", defaultMessage: "Feed actions for {feed}" },
                            { feed: e.display_name ?? e.feed_id },
                          ),
                          children: (0, i.jsx)(x.e4G, {}),
                        }),
                        children: [
                          null != V
                            ? (0, i.jsx)(sp.ms.Item, {
                                leftIconAsset: sf.D,
                                onSelect: () => V(e.feed_id),
                                children: (0, i.jsx)(d.A, {
                                  id: "businessProfiles.feeds.updateProducts",
                                  defaultMessage: "Update products",
                                }),
                              })
                            : null,
                          (0, i.jsx)(sp.ms.Item, {
                            leftIcon: (0, i.jsx)(x.zwW, {}),
                            tone: "destructive",
                            onSelect: () => B(e),
                            children: (0, i.jsx)(d.A, {
                              id: "businessProfiles.feeds.delete",
                              defaultMessage: "Delete feed",
                            }),
                          }),
                        ],
                      }),
              }),
            ],
          },
          e.feed_id,
        )
      })
      return (
        F[52] !== M || F[53] !== ed
          ? ((D = (0, i.jsxs)("tbody", { children: [M, ed] })), (F[52] = M), (F[53] = ed), (F[54] = D))
          : (D = F[54]),
        F[55] !== y || F[56] !== v || F[57] !== I || F[58] !== D
          ? ((E = (0, i.jsx)("div", {
              className: "overflow-x-auto rounded-2xl",
              children: (0, i.jsxs)("table", {
                className: "w-full min-w-xl table-fixed border-collapse text-start text-sm",
                "aria-label": y,
                "aria-busy": v,
                children: [I, D],
              }),
            })),
            (F[55] = y),
            (F[56] = v),
            (F[57] = I),
            (F[58] = D),
            (F[59] = E))
          : (E = F[59]),
        F[60] !== _ || F[61] !== E
          ? ((q = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [_, E] })),
            (F[60] = _),
            (F[61] = E),
            (F[62] = q))
          : (q = F[62]),
        q
      )
    }
    function s$(e) {
      return (0, i.jsx)(
        d.A,
        {
          id: "businessProfiles.feeds.method",
          defaultMessage:
            "{method, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} shopify {Shopify} other {\u2014}}",
          values: { method: e },
        },
        e,
      )
    }
    function sG(e, s) {
      return Date.parse(s.uploaded_at) - Date.parse(e.uploaded_at)
    }
    function sH(e) {
      return e.isFetching
    }
    function sz(e) {
      return e.feed_id.startsWith("bpfeed_shopify_")
    }
    function sW(e) {
      return [e.feed_id, e]
    }
    function sK(e) {
      return e instanceof D.FetchError && [401, 403, 404].includes(e.status)
    }
    function sQ(e) {
      return e.error
    }
    function sZ(e) {
      return e.feed_id
    }
    var sY = t("VPzX"),
      sJ = t("oXx6")
    let sX = { duration: 0.15, ease: e8.Yw },
      s1 = (0, y._)(() =>
        t
          .e(132931)
          .then(t.bind(t, "U1Yj"))
          .then((e) => e.FeedSetupForm),
      )
    function s0(e) {
      let s,
        t,
        l = (0, n.c)(9),
        { manager: a, adminView: r, managerReadsFeedList: o } = e,
        c = void 0 !== o && o,
        d = a.profile.business_profile_id,
        u = (0, p.As)(),
        f = r?.accountId ?? u.accountId
      if (null == f) return null
      let h = `${null == r ? "manager" : "admin"}:${r?.userId ?? u.userId}:${f}:${d}`
      return (
        l[0] !== r || l[1] !== a
          ? ((s = null == r ? { manager: a } : { manager: a, adminView: r }), (l[0] = r), (l[1] = a), (l[2] = s))
          : (s = l[2]),
        l[3] !== f || l[4] !== c || l[5] !== d || l[6] !== h || l[7] !== s
          ? ((t = (0, i.jsx)(s2, { accountId: f, profileId: d, managerReadsFeedList: c, ...s }, h)),
            (l[3] = f),
            (l[4] = c),
            (l[5] = d),
            (l[6] = h),
            (l[7] = s),
            (l[8] = t))
          : (t = l[8]),
        t
      )
    }
    function s2(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        u,
        f,
        p = (0, n.c)(37),
        { accountId: m, profileId: g, manager: b, adminView: _, managerReadsFeedList: x } = e,
        [y, v] = (0, h.ok)(),
        w = (0, ex.jE)(),
        j = (0, c.useState)("")
      p[0] !== y ? ((s = y.get("feed")), (p[0] = y), (p[1] = s)) : (s = p[1])
      let A = s
      p[2] !== _ || p[3] !== y
        ? ((t = null == _ && "1" === y.get("add")), (p[2] = _), (p[3] = y), (p[4] = t))
        : (t = p[4])
      let C = t
      p[5] !== b.profile.website_url
        ? ((l = b.profile.website_url?.trim().length ?? 0), (p[5] = b.profile.website_url), (p[6] = l))
        : (l = p[6])
      let S = l > 0,
        k = null == _ && S && !0 === b.website_domain_verified
      ;(p[7] !== _ || p[8] !== S
        ? ((a = () => {
            null == _ && S && s1.prefetch()
          }),
          (r = [_, S]),
          (p[7] = _),
          (p[8] = S),
          (p[9] = a),
          (p[10] = r))
        : ((a = p[9]), (r = p[10])),
        (0, c.useEffect)(a, r),
        p[11] !== v
          ? ((o = function () {
              v({})
            }),
            (p[11] = v),
            (p[12] = o))
          : (o = p[12]))
      let I = o
      if (null != _) {
        let e
        return (
          p[13] !== m || p[14] !== _ || p[15] !== A || p[16] !== S || p[17] !== b || p[18] !== g
            ? ((e =
                null == A
                  ? (0, i.jsx)(s3, {
                      accountId: m,
                      profileId: g,
                      hasDomain: S,
                      manager: b,
                      adminView: _,
                      setupActive: !1,
                    })
                  : (0, i.jsx)(sY.B, { accountId: m, profileId: g, feedId: A, manager: b, adminView: _ }, A)),
              (p[13] = m),
              (p[14] = _),
              (p[15] = A),
              (p[16] = S),
              (p[17] = b),
              (p[18] = g),
              (p[19] = e))
            : (e = p[19]),
          e
        )
      }
      return (
        p[20] !== m ||
        p[21] !== C ||
        p[22] !== k ||
        p[23] !== I ||
        p[24] !== A ||
        p[25] !== S ||
        p[26] !== b ||
        p[27] !== x ||
        p[28] !== j ||
        p[29] !== g ||
        p[30] !== w
          ? ((u = (e, s, t) => {
              let n = null != A && A === e,
                l = C && (null == A ? k : S) && !n
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  null != A && s
                    ? (0, i.jsx)("p", {
                        role: "status",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.loading",
                          defaultMessage: "Loading feeds\u2026",
                        }),
                      })
                    : C || null == A || n
                      ? (0, i.jsx)(s3, {
                          accountId: m,
                          profileId: g,
                          managerReadsFeedList: x,
                          hasDomain: S,
                          canCreateFeed: k,
                          manager: b,
                          shopifyFeedId: e,
                          shopifyConnection: t,
                          discoveringShopify: s,
                          setupActive: l,
                        })
                      : (0, i.jsx)(sY.B, { accountId: m, profileId: g, feedId: A, manager: b, onExit: I }, A),
                  l
                    ? (0, i.jsx)(s1, {
                        accountId: m,
                        manager: b,
                        feedId: A,
                        checkingExistingFeed: s,
                        nameDraft: j,
                        onCreated: () => {
                          w.invalidateQueries({ queryKey: ["business-profiles", m, g], predicate: s4 })
                        },
                        onExit: I,
                      })
                    : null,
                ],
              })
            }),
            (p[20] = m),
            (p[21] = C),
            (p[22] = k),
            (p[23] = I),
            (p[24] = A),
            (p[25] = S),
            (p[26] = b),
            (p[27] = x),
            (p[28] = j),
            (p[29] = g),
            (p[30] = w),
            (p[31] = u))
          : (u = p[31]),
        p[32] !== m || p[33] !== b || p[34] !== g || p[35] !== u
          ? ((f = (0, i.jsx)(sk, { accountId: m, profileId: g, manager: b, children: u })),
            (p[32] = m),
            (p[33] = b),
            (p[34] = g),
            (p[35] = u),
            (p[36] = f))
          : (f = p[36]),
        f
      )
    }
    function s4(e) {
      return "business-verification" !== e.queryKey[3]
    }
    function s3(e) {
      let s,
        t,
        l,
        a,
        r,
        f,
        m,
        g,
        b = (0, n.c)(48),
        {
          accountId: _,
          profileId: x,
          hasDomain: y,
          canCreateFeed: v,
          manager: w,
          adminView: A,
          managerReadsFeedList: C,
          setupActive: S,
          shopifyFeedId: I,
          shopifyConnection: M,
          discoveringShopify: D,
        } = e,
        E = void 0 !== v && v,
        q = void 0 !== D && D,
        { userId: F } = (0, p.As)(),
        R = (0, e9.I)(),
        L = (0, o._U)(k.JW, P.hT),
        [O, B] = (0, h.ok)()
      b[0] !== O ? ((s = O.get("activity")), (b[0] = O), (b[1] = s)) : (s = b[1])
      let V = s,
        U = "history" === V || "issues" === V ? V : "feeds",
        $ = (0, c.useRef)(null),
        G = (0, c.useRef)(null)
      ;(b[2] !== R
        ? ((t = () => (
            null != $.current && (G.current = (0, e7.i)($.current, { opacity: 1 }, R ? { duration: 0 } : sX)),
            () => {
              ;(G.current?.stop(), (G.current = null))
            }
          )),
          (b[2] = R),
          (b[3] = t))
        : (t = b[3]),
        b[4] !== R || b[5] !== U ? ((l = [U, R]), (b[4] = R), (b[5] = U), (b[6] = l)) : (l = b[6]),
        (0, c.useLayoutEffect)(t, l),
        b[7] !== R || b[8] !== B || b[9] !== U
          ? ((a = function (e) {
              if ((G.current?.stop(), e === U)) {
                null != $.current && (G.current = (0, e7.i)($.current, { opacity: 1 }, R ? { duration: 0 } : sX))
                return
              }
              let s = () => {
                B(
                  (s) => {
                    let t = new URLSearchParams(s)
                    return ("feeds" === e ? t.delete("activity") : t.set("activity", e), t)
                  },
                  { preventScrollReset: !0 },
                )
              }
              if (R || null == $.current) return void s()
              let t = (0, e7.i)($.current, { opacity: 0 }, sX)
              ;((G.current = t),
                t.then(() => {
                  G.current === t && s()
                }))
            }),
            (b[7] = R),
            (b[8] = B),
            (b[9] = U),
            (b[10] = a))
          : (a = b[10]))
      let H = a,
        z = (0, u.A)(),
        [W, Z] = (0, c.useState)(null),
        Y = O.get("cursor"),
        J = (0, ex.jE)(),
        X = (0, h.Zp)()
      b[11] !== _ || b[12] !== w || b[13] !== x || b[14] !== J
        ? ((r = {
            retry: !1,
            mutationFn: async () => {
              let e = w.fields.find(s6),
                s = e?.preview_value?.trim()
              if (!e?.can_edit || !s) throw Error("Website unavailable")
              let t = ei.i0.website.parse(s.includes("://") ? s.replace(/^http:/i, "https:") : `https://${s}`)
              if (null != e.pending_revision_id && null != e.verification_flow_id) {
                if (e.current_revision?.value === t) return e.verification_flow_id
                throw Error("A website change is pending")
              }
              let i = await T.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/manager/fields/{field_key}",
                  {
                    additionalHeaders: { "ChatGPT-Account-ID": _, "x-openai-use-sheep": "1" },
                    parameters: {
                      path: { business_profile_id: x, field_key: "website" },
                      query: { consistency: "relaxed-v1", include_media_urls: !1 },
                    },
                    requestBody: {
                      operation: "upsert",
                      value: t,
                      confirmed: !0,
                      expected_revision: e.revision,
                      idempotency_key: crypto.randomUUID(),
                      verify_website_domain: !0,
                    },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426],
                  },
                ),
                n = (0, st.pB)({ queryClient: J }, _, x, i, e.revision, "mutation")
              return (
                n?.field.verification_flow_id != null &&
                  J.setQueryData(["business-profiles", _, x, "verification", i.flow.id], n),
                i.flow.id
              )
            },
          }),
          (b[11] = _),
          (b[12] = w),
          (b[13] = x),
          (b[14] = J),
          (b[15] = r))
        : (r = b[15])
      let { mutate: ee, isPending: es, isError: et } = (0, ey.n)(r),
        en = function (e, s) {
          let t = void 0 === s ? "view" : s,
            i = eg?.items.find((s) => s.feed_id === e),
            n = ["business-profiles", _, x, "feed", e, ...(0, N.Ot)(A)],
            l = J.getQueryState(n),
            a = J.getQueryCache().find({ queryKey: er, exact: !0 })
          ;(null != i &&
            null != a &&
            !a.isStaleByTime(3e5) &&
            Math.max(l?.dataUpdatedAt ?? 0, l?.errorUpdatedAt ?? 0) < eb &&
            J.setQueryData(n, i, { updatedAt: eb }),
            B((s) => {
              let i = new URLSearchParams(s)
              return (i.set("feed", e), "update" === t && i.set("update", "1"), i.delete("cursor"), i)
            }))
        },
        el = (0, sJ.u)(_, F, x, Y, A),
        { queryKey: ea } = el,
        er = ea,
        {
          data: eo,
          dataUpdatedAt: ec,
          error: ed,
          isFetching: ef,
          isPlaceholderData: eh,
          refetch: ep,
        } = (0, eu.I)({ ...el, enabled: !(void 0 !== C && C), staleTime: el.staleTime }),
        eg = eo,
        eb = ec
      b[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)("h1", {
            className: "text-heading-app leading-8.5 font-normal select-none",
            children: (0, i.jsx)(d.A, { id: "businessProfiles.products.pageTitle", defaultMessage: "Products" }),
          })),
          (b[16] = f))
        : (f = b[16])
      let e_ = f
      if (null != ed) {
        let e, s
        return (
          b[17] !== ep ? ((e = () => void ep()), (b[17] = ep), (b[18] = e)) : (e = b[18]),
          b[19] !== ed || b[20] !== e
            ? ((s = (0, i.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [e_, (0, i.jsx)(sx.AB, { error: ed, onRetry: e })],
              })),
              (b[19] = ed),
              (b[20] = e),
              (b[21] = s))
            : (s = b[21]),
          s
        )
      }
      if (null == eg) {
        let e,
          s = null != A
        return (
          b[22] !== s || b[23] !== U
            ? ((e = (0, i.jsx)(em.jH, { tab: U, readOnly: s })), (b[22] = s), (b[23] = U), (b[24] = e))
            : (e = b[24]),
          e
        )
      }
      if (b[25] !== E || b[26] !== y || b[27] !== X || b[28] !== x || b[29] !== ee || b[30] !== et || b[31] !== es) {
        if (((m = null), !E && y)) {
          let e, s
          ;(b[33] !== X || b[34] !== x || b[35] !== ee || b[36] !== es
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.feeds.verifiedDomainRequiredBeforeAddingProducts",
                defaultMessage:
                  "Verify your business domain before adding products. <verifyDomain>Verify domain</verifyDomain>",
                values: {
                  verifyDomain: (e) =>
                    (0, i.jsx)("button", {
                      className: "underline",
                      type: "button",
                      disabled: es,
                      onClick: () =>
                        ee(void 0, {
                          onSuccess: (e) =>
                            void X(
                              `${P.CM}/${encodeURIComponent(x)}/verification/${encodeURIComponent(e)}?section=contact`,
                            ),
                        }),
                      children: e,
                    }),
                },
              })),
              (b[33] = X),
              (b[34] = x),
              (b[35] = ee),
              (b[36] = es),
              (b[37] = e))
            : (e = b[37]),
            b[38] !== et
              ? ((s =
                  et &&
                  (0, i.jsx)("p", {
                    role: "alert",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.domainVerificationStartFailed",
                      defaultMessage: "Couldn\u2019t start verification. Try again or check your website in Contact.",
                    }),
                  })),
                (b[38] = et),
                (b[39] = s))
              : (s = b[39]),
            (m = (0, i.jsxs)(i.Fragment, { children: [e, s] })))
        } else if (!E) {
          let e
          ;(b[40] !== x
            ? ((e = {
                addDomain: (e) =>
                  (0, i.jsx)(h.N_, { className: "underline", to: (0, Q.Ds)(x, "edit/contact"), children: e }),
              }),
              (b[40] = x),
              (b[41] = e))
            : (e = b[41]),
            (m = (0, i.jsx)(d.A, {
              id: "businessProfiles.feeds.addDomainBeforeAddingProducts",
              defaultMessage: "A business domain is required before adding products. <addDomain>Add domain</addDomain>",
              values: e,
            })))
        }
        ;((b[25] = E), (b[26] = y), (b[27] = X), (b[28] = x), (b[29] = ee), (b[30] = et), (b[31] = es), (b[32] = m))
      } else m = b[32]
      let ev = (e) => {
        let { approved: s, banner: t } = e,
          n = null == A ? (0, i.jsx)(s7, { domainRequirement: m, approved: s, onClick: () => B({ add: "1" }) }) : null,
          l = eg.items.filter(s5),
          a =
            0 === l.length && null == M && null == Y && null == eg.next_cursor
              ? (0, i.jsx)(eY, {
                  actions:
                    null == A
                      ? (0, i.jsx)(s7, {
                          domainRequirement: m,
                          approved: s,
                          prominent: !0,
                          onClick: () => B({ add: "1" }),
                        })
                      : void 0,
                })
              : void 0
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-8",
          children: [
            (0, i.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [e_, n] }),
            null != A || S || M?.verifyStoreAction == null
              ? null
              : (0, i.jsx)(K, {
                  icon: (0, i.jsx)("img", {
                    src: se,
                    alt: "",
                    width: 28,
                    height: 28,
                    className: "size-7 shrink-0 object-contain",
                  }),
                  title: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.shopify.verificationBanner.title",
                    defaultMessage: "Verify your Shopify store",
                  }),
                  content: (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.shopify.verificationBanner.description",
                    defaultMessage: "Verify your store with Shopify to connect its products to ChatGPT",
                  }),
                  customCtas: M.verifyStoreAction,
                }),
            t,
            (0, i.jsx)(j.t, {
              variant: "sectionFilter",
              selectedKey: U,
              onSelect: H,
              ariaLabel: z.formatMessage({ id: "businessProfiles.feeds.tabs", defaultMessage: "Product feeds view" }),
              tabs: [
                { key: "feeds", name: (0, i.jsx)(d.A, { id: "businessProfiles.feeds.tab", defaultMessage: "Feeds" }) },
                {
                  key: "history",
                  name: (0, i.jsx)(d.A, {
                    id: "businessProfiles.activity.productFeeds",
                    defaultMessage: "Upload history",
                  }),
                },
                {
                  key: "issues",
                  name: (0, i.jsx)(d.A, { id: "businessProfiles.activity.issues", defaultMessage: "Issues" }),
                },
              ],
            }),
            (0, i.jsx)("div", {
              ref: $,
              children:
                "feeds" === U
                  ? (a ??
                    (0, i.jsx)(
                      sU,
                      {
                        accountId: _,
                        profileId: x,
                        feeds: l,
                        includeConnectionStatus: L,
                        shopifyFeedId: I,
                        shopifyConnection: M,
                        onUpdateFeed: (e) => en(e, "update"),
                        onArchiveFeed: null != A || q ? void 0 : Z,
                        adminView: A,
                      },
                      Y ?? "first",
                    ))
                  : (0, i.jsx)(
                      ss.n,
                      {
                        accountId: _,
                        feeds: l,
                        profileWebsites: { [x]: w.profile.website_url },
                        createFeedAction: null,
                        onOpenFeed: (e, s) => en(s),
                        adminView: A,
                        layout: "products",
                        showTabs: !1,
                        emptyState: a,
                      },
                      Y ?? "first",
                    ),
            }),
            null != W && null == A && (0, i.jsx)(su, { accountId: _, feed: W, onClose: () => Z(null) }, W.feed_id),
            (0, i.jsx)(sx.ly, {
              cursor: Y,
              nextCursor: eg.next_cursor,
              isFetching: ef,
              isPlaceholderData: eh,
              onNavigate: (e) => {
                let s = new URLSearchParams(O)
                ;(null == e ? s.delete("cursor") : s.set("cursor", e), B(s))
              },
            }),
          ],
        })
      }
      if (null != A || S) {
        let e
        return (
          b[42] === Symbol.for("react.memo_cache_sentinel") ? ((e = { approved: !1 }), (b[42] = e)) : (e = b[42]),
          ev(e)
        )
      }
      let ew = M?.verifyBusinessAction
      return (
        b[43] !== _ || b[44] !== w || b[45] !== ev || b[46] !== ew
          ? ((g = (0, i.jsx)(so, {
              accountId: _,
              manager: w,
              purpose: "add-products",
              verifyAction: ew,
              children: ev,
            })),
            (b[43] = _),
            (b[44] = w),
            (b[45] = ev),
            (b[46] = ew),
            (b[47] = g))
          : (g = b[47]),
        g
      )
    }
    function s5(e) {
      return !e.archived
    }
    function s6(e) {
      return "website" === e.field_key
    }
    function s7(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        c = (0, n.c)(18),
        { domainRequirement: f, approved: h, onClick: p, prominent: m } = e,
        b = void 0 !== m && m,
        x = (0, u.A)(),
        y = null == f && h,
        v = null == f,
        w = b ? "primary" : "outlineGhost",
        j = !y
      return (
        c[0] !== x
          ? ((s = x.formatMessage({ id: "businessProfiles.feeds.addProducts", defaultMessage: "Add products" })),
            (c[0] = x),
            (c[1] = s))
          : (s = c[1]),
        c[2] !== y || c[3] !== p
          ? ((t = () => {
              y && p()
            }),
            (c[2] = y),
            (c[3] = p),
            (c[4] = t))
          : (t = c[4]),
        c[5] !== b ? ((l = b ? null : (0, i.jsx)(_.I, { asset: e6.M })), (c[5] = b), (c[6] = l)) : (l = c[6]),
        c[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(d.A, { id: "businessProfiles.feeds.addProducts", defaultMessage: "Add products" })),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== w || c[9] !== j || c[10] !== s || c[11] !== t || c[12] !== l
          ? ((r = (0, i.jsxs)(g.$, {
              color: w,
              size: "beaconAction",
              radius: "full",
              "aria-disabled": j,
              "aria-label": s,
              type: "button",
              onClick: t,
              children: [l, a],
            })),
            (c[8] = w),
            (c[9] = j),
            (c[10] = s),
            (c[11] = t),
            (c[12] = l),
            (c[13] = r))
          : (r = c[13]),
        c[14] !== f || c[15] !== v || c[16] !== r
          ? ((o = (0, i.jsx)(eb.m, {
              disabled: v,
              side: "top",
              maxWidth: 200,
              interactive: !0,
              preventDismissOnFastClick: !0,
              content: f,
              children: r,
            })),
            (c[14] = f),
            (c[15] = v),
            (c[16] = r),
            (c[17] = o))
          : (o = c[17]),
        o
      )
    }
    var s9 = t("uYQT"),
      s8 = t("m6S6"),
      te = t("RU3e"),
      ts = t("aepO"),
      tt = t("FS1B"),
      ti = t("yGJW"),
      tn = t("ASxG")
    let tl = "https://chatgpt.com/b/",
      ta = /^(?!id-)[a-z0-9]+(?:[-.][a-z0-9]+)*$/,
      tr = tn.Ikc({
        business_profile_id: tn.YjP().min(1).max(2304),
        can_share_as_owner: tn.zMY().optional().default(!1),
        public_share_key: tn
          .YjP()
          .regex(/^[0-9a-f]{32}$/)
          .nullish()
          .default(null),
        share_url: tn.YjP().length(57).nullish().default(null),
        vanity_url: tn.YjP().min(23).max(62).nullish().default(null),
      })
    class to extends Error {
      constructor() {
        ;(super("Business Profile sharing is temporarily unavailable"),
          (this.name = "BusinessProfileShareLinksTimeoutError"))
      }
    }
    function tc(e, s) {
      let t = tr.parse(e)
      if (t.business_profile_id !== s) throw Error("Business share identity changed")
      if (!t.can_share_as_owner) return { ...t, public_share_key: null, share_url: null, vanity_url: null }
      if (null == t.public_share_key) {
        if (null != t.share_url || null != t.vanity_url) throw Error("Business share identity is unavailable")
        return t
      }
      if (t.share_url !== `${tl}id-${t.public_share_key}`) throw Error("Business share identity is unavailable")
      if (null != t.vanity_url) {
        let e = t.vanity_url.slice(tl.length)
        if (!t.vanity_url.startsWith(tl) || e.length > 40 || !ta.test(e) || t.vanity_url !== `${tl}${e}`)
          throw Error("Business share identity is unavailable")
      }
      return t
    }
    function td(e) {
      let s = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      if (!s.test(e.shareId) || !s.test(e.shareSessionId)) throw Error("Business share session is unavailable")
      return {
        actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
        contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_BUSINESS_PROFILE",
        source: "CHATGPT_SHARE_FLOW_SOURCE_BUSINESS_PROFILE_HUB",
        shareSessionId: e.shareSessionId,
        shareId: e.shareId,
      }
    }
    function tu(e) {
      if (!/^[0-9a-f]{32}$/.test(e.publicShareKey)) throw Error("Business share identity is unavailable")
      return { ...td(e), publicShareKey: e.publicShareKey }
    }
    function tf(e, s, t, i) {
      ;(0, ti.yy)(e, tt.HX, { ...td(s), action: t, failureReason: i?.failureReason })
    }
    function th(e, s, t, i) {
      ;(0, ti.yy)(e, tt.HX, { ...tu(s), action: t, failureReason: i?.failureReason })
    }
    var tp = t("SPnB")
    function tm(e, s) {
      let t = e?.mode === "owner" && null != e.userId && s
      return {
        queryKey: ["business-profiles", "share-links", e?.mode, e?.accountId, e?.userId, e?.profileId],
        queryFn:
          t && null != e
            ? ({ signal: s }) =>
                (async function (e, s) {
                  let t
                  if ("owner" !== e.mode || null == e.userId) throw Error("Business owner access is required")
                  s.throwIfAborted()
                  let i = AbortSignal.timeout(25e3)
                  try {
                    t = await T.Request.safePost(
                      "/chat/frontend/v1/business-profiles/{business_profile_id}/share-links",
                      {
                        additionalHeaders: {
                          "ChatGPT-Account-ID": e.accountId,
                          [ef.zBc]: e.accountId,
                          "x-openai-use-sheep": "1",
                        },
                        parameters: { path: { business_profile_id: e.profileId } },
                        requestBody: {},
                        expectedIdentity: { accountId: e.accountId, userId: e.userId },
                        expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 426, 429, 503],
                        retry: "never",
                        signal: AbortSignal.any([s, i]),
                      },
                    )
                  } catch (e) {
                    if ((s.throwIfAborted(), i.aborted && e === i.reason)) throw new to()
                    throw e
                  }
                  if ((s.throwIfAborted(), i.aborted)) throw new to()
                  return tc(t, e.profileId)
                })(e, s)
            : sy.hT,
        enabled: !!t && ((e) => "pending" === e.state.status),
        retry: !1,
        retryOnMount: !1,
        staleTime: 0,
        gcTime: 0,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    }
    let tg = (0, o.un)(N.kM, ({ get: e }) => {
        let s = e(N.wE),
          t = e(tp.PO)
        return (
          s?.mode === "owner" &&
          null != s.userId &&
          !t.authLoading &&
          !0 === t.hasChatGptToken &&
          ("chatgpt" === t.authMethod || "chatgptAuthTokens" === t.authMethod) &&
          t.authenticatedAccountId === s.accountId &&
          t.authenticatedUserId === s.userId &&
          t.userId === s.userId
        )
      }),
      tb = (0, o.RD)(N.kM, ({ get: e }) => tm(e(N.wE), !0 === e(te.$O) && e(tg)))
    function t_(e) {
      let s,
        t,
        l,
        a,
        r,
        u,
        f,
        h = (0, n.c)(16),
        { compact: m } = e,
        b = (0, o.gh)(N.kM),
        _ = (0, o.Ul)(N.wE),
        y = (0, o.Ul)(tg),
        v = !0 === (0, o.Ul)(te.$O),
        { accountId: w, userId: j, isLoading: C } = (0, p.As)(),
        { data: S, isSuccess: k, isFetching: I, isError: P, error: M } = (0, o.Ul)(tb),
        [T, E] = (0, c.useState)(!1),
        q = (0, c.useRef)(null)
      ;(h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => () => {
            ;(q.current?.abort(), (q.current = null), E(!1))
          }),
          (h[0] = s))
        : (s = h[0]),
        h[1] !== b ? ((t = [b]), (h[1] = b), (h[2] = t)) : (t = h[2]),
        (0, c.useLayoutEffect)(s, t))
      let F = y && !C && _?.mode === "owner" && null != _.userId && _.accountId === w && _.userId === j && v,
        R =
          k ||
          I ||
          (P &&
            (M instanceof to ||
              (M instanceof D.FetchError &&
                ((0 === M.status && "network" === M.errorKind) ||
                  [408, 425, 429].includes(M.status) ||
                  (M.status >= 500 && M.status <= 599 && 501 !== M.status))))),
        L = F && R && S?.can_share_as_owner === !0 && null != S.public_share_key && null != S.share_url ? S : null
      h[3] !== b
        ? ((l = (e) => q.current === e && !e.signal.aborted && b.get(tg) && !0 === b.get(te.$O)),
          (h[3] = b),
          (h[4] = l))
        : (l = h[4])
      let O = l
      h[5] !== O || h[6] !== I || h[7] !== L || h[8] !== b
        ? ((a = (e) => {
            if (null == L || I || null != q.current) return
            let s = new AbortController()
            if (((q.current = s), !O(s))) {
              q.current = null
              return
            }
            E(!0)
            let t = { shareSessionId: crypto.randomUUID(), shareId: crypto.randomUUID() }
            ;(tf(b, t, "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"),
              tf(b, t, "CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_ATTEMPTED"),
              (async function (e, s, t, n, l) {
                let a,
                  r = (0, ef.udX)()
                r.promise.catch(() => void 0)
                let o = e.queryClient,
                  c = tm(e.get(N.wE), !0).queryKey,
                  u = () => {
                    ;(r.reject(new ts.M_()), null != c && o.cancelQueries({ queryKey: c, exact: !0 }))
                  }
                s.signal.addEventListener("abort", u, { once: !0 })
                let f = e.watch(({ get: e }) => {
                    let t = e(tg),
                      i = !0 === e(te.$O)
                    ;(t && i) || s.abort()
                  }),
                  h = !1
                try {
                  if (!l(s)) return
                  let o = e.get(tb).refetch({ throwOnError: !0, cancelRefetch: !0 }),
                    c = Promise.race([o, r.promise])
                      .then((e) => {
                        let t = e.data
                        if (
                          !l(s) ||
                          null == t ||
                          !t.can_share_as_owner ||
                          null == t.public_share_key ||
                          null == t.share_url
                        )
                          throw new ts.M_()
                        var i = (a = { ...n, publicShareKey: t.public_share_key })
                        if ((tu(i), t.public_share_key !== i.publicShareKey))
                          throw Error("Business share identity is unavailable")
                        let r = new URL(
                          (function (e) {
                            let s = tc(e, e.business_profile_id)
                            if (!s.can_share_as_owner || null == s.public_share_key || null == s.share_url)
                              throw Error("Business share identity is unavailable")
                            return s.vanity_url ?? s.share_url
                          })(t),
                        )
                        return (r.searchParams.set("share_id", i.shareId), r.toString())
                      })
                      .catch(() => {
                        throw ((h = !0), new ts.M_())
                      }),
                    u = await Promise.race([(0, ts.lW)(c, t, void 0, s.signal), r.promise])
                  if (!l(s)) return
                  if (u && null != a) {
                    ;(th(e, a, "CHATGPT_SHARE_FLOW_ACTION_COPY_LINK_SELECTED"),
                      e
                        .get(A.Id)
                        .success(
                          (0, i.jsx)(d.A, {
                            id: "businessProfiles.sharing.toast.copied",
                            defaultMessage: "Link copied to your clipboard",
                          }),
                          {
                            id: "business-profile-share-copied",
                            variant: "chatgptSuccess",
                            duration: 5,
                            hasCloseButton: !0,
                          },
                        ))
                    return
                  }
                  let f = h
                    ? "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED"
                    : "CHATGPT_SHARE_FLOW_FAILURE_REASON_CLIPBOARD_WRITE_FAILED"
                  ;(null == a
                    ? tf(e, n, "CHATGPT_SHARE_FLOW_ACTION_FAILED", { failureReason: f })
                    : th(e, a, "CHATGPT_SHARE_FLOW_ACTION_FAILED", { failureReason: f }),
                    h &&
                      e
                        .get(A.Id)
                        .danger(
                          (0, i.jsx)(d.A, {
                            id: "businessProfiles.sharing.toast.unavailable",
                            defaultMessage: "Sharing is unavailable right now",
                          }),
                          {
                            id: "business-profile-share-unavailable",
                            errorAnalytics: { toastId: "business_profile_share_unavailable" },
                          },
                        ))
                } catch {
                  l(s) &&
                    tf(e, n, "CHATGPT_SHARE_FLOW_ACTION_FAILED", {
                      failureReason: "CHATGPT_SHARE_FLOW_FAILURE_REASON_SHARE_DATA_RESOLUTION_FAILED",
                    })
                } finally {
                  ;(f(), s.signal.removeEventListener("abort", u))
                }
              })(b, s, e, t, O).finally(() => {
                q.current === s && ((q.current = null), E(!1))
              }))
          }),
          (h[5] = O),
          (h[6] = I),
          (h[7] = L),
          (h[8] = b),
          (h[9] = a))
        : (a = h[9])
      let B = a
      if (null == L) return null
      let V = void 0 !== m && m ? "entityRowAction" : "formAction",
        U = T || I
      return (
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(x._Ui, {})),
            (u = (0, i.jsx)(d.A, {
              id: "businessProfiles.sharing.button.copyPreferredLink",
              defaultMessage: "Share your business",
            })),
            (h[10] = r),
            (h[11] = u))
          : ((r = h[10]), (u = h[11])),
        h[12] !== B || h[13] !== V || h[14] !== U
          ? ((f = (0, i.jsxs)(g.$, {
              type: "button",
              color: "outlineGhost",
              size: V,
              radius: "full",
              disabled: U,
              onClick: B,
              children: [r, u],
            })),
            (h[12] = B),
            (h[13] = V),
            (h[14] = U),
            (h[15] = f))
          : (f = h[15]),
        f
      )
    }
    var tx = t("cE8H"),
      ty = t("YdA6"),
      tv = t.n(ty),
      tw = t("PTV7")
    function tj(e) {
      let s,
        t,
        l,
        a,
        r,
        f,
        h,
        p,
        m,
        g,
        b,
        _,
        x,
        y,
        v,
        w,
        j = (0, n.c)(55),
        { accountId: C, profileId: k, flowId: I, field: P, canCancel: M, disabled: N, onCancelled: T } = e,
        D = void 0 !== N && N,
        E = (0, o.gh)(S.u),
        q = (0, u.A)(),
        [F, R] = (0, c.useState)(!1)
      j[0] !== C || j[1] !== P || j[2] !== I || j[3] !== k || j[4] !== E
        ? ((s = { mutationFn: () => (0, tw.p)(E.queryClient, C, k, I, P.section), retry: !1 }),
          (j[0] = C),
          (j[1] = P),
          (j[2] = I),
          (j[3] = k),
          (j[4] = E),
          (j[5] = s))
        : (s = j[5])
      let { mutate: L, isPending: O, error: B, data: V, reset: U } = (0, ey.n)(s)
      j[6] !== M || j[7] !== D || j[8] !== O || j[9] !== U
        ? ((t = M
            ? (0, i.jsx)(ew.d, {
                type: "button",
                size: "formAction",
                color: "secondary",
                disabled: D || O,
                onClick: () => {
                  ;(U(), R(!0))
                },
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.cancel.label",
                  defaultMessage: "Cancel verification",
                }),
              })
            : null),
          (j[6] = M),
          (j[7] = D),
          (j[8] = O),
          (j[9] = U),
          (j[10] = t))
        : (t = j[10])
      let $ = !O
      ;(j[11] !== O
        ? ((l = (e) => {
            O || R(e)
          }),
          (a = {
            onEscapeKeyDown: (e) => {
              O && e.preventDefault()
            },
          }),
          (j[11] = O),
          (j[12] = l),
          (j[13] = a))
        : ((l = j[12]), (a = j[13])),
        j[14] !== C ||
        j[15] !== M ||
        j[16] !== D ||
        j[17] !== P ||
        j[18] !== I ||
        j[19] !== q ||
        j[20] !== O ||
        j[21] !== L ||
        j[22] !== T ||
        j[23] !== k ||
        j[24] !== E
          ? ((r = (e) => {
              ;(e.preventDefault(),
                !M ||
                  D ||
                  O ||
                  E.queryClient.isMutating({
                    mutationKey: ["business-profiles", C, k, "verification", I, "challenge"],
                  }) > 0 ||
                  L(void 0, {
                    onSuccess: (e) => {
                      ;(0, st.yt)(e.flow.status) ||
                        (R(!1),
                        ("approved" === e.flow.status || null != (0, st.f8)(P, e.flow)) &&
                          E.get(A.Id).success(
                            q.formatMessage({
                              id: "businessProfiles.field.publishedBeforeDiscard",
                              defaultMessage: "This edit was already published",
                            }),
                          ),
                        T())
                    },
                  }))
            }),
            (j[14] = C),
            (j[15] = M),
            (j[16] = D),
            (j[17] = P),
            (j[18] = I),
            (j[19] = q),
            (j[20] = O),
            (j[21] = L),
            (j[22] = T),
            (j[23] = k),
            (j[24] = E),
            (j[25] = r))
          : (r = j[25]),
        j[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(sd.OO, {
              children: (0, i.jsx)(sd.c7, {
                title: (0, i.jsx)(sc.L3, {
                  children: (0, i.jsx)(d.A, {
                    id: "businessProfiles.verification.cancel.title",
                    defaultMessage: "Cancel verification?",
                  }),
                }),
                subtitle: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.cancel.description",
                  defaultMessage:
                    "This will discard your pending change. You can edit your business profile again later.",
                }),
              }),
            })),
            (j[26] = f))
          : (f = j[26]),
        j[27] !== V || j[28] !== B
          ? ((h =
              null != B || (null != V && (0, st.yt)(V.flow.status))
                ? (0, i.jsx)(sd.OO, {
                    children: (0, i.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.verification.cancel.error",
                        defaultMessage: "Couldn\u2019t cancel this change. Try again.",
                      }),
                    }),
                  })
                : null),
            (j[27] = V),
            (j[28] = B),
            (j[29] = h))
          : (h = j[29]),
        j[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = () => R(!1)),
            (m = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.cancel.keepVerifying",
              defaultMessage: "Keep verifying",
            })),
            (j[30] = p),
            (j[31] = m))
          : ((p = j[30]), (m = j[31])),
        j[32] !== O
          ? ((g = (0, i.jsx)(ew.d, {
              type: "button",
              size: "formAction",
              color: "secondary",
              disabled: O,
              onClick: p,
              children: m,
            })),
            (j[32] = O),
            (j[33] = g))
          : (g = j[33]))
      let G = D || O || !M
      return (
        j[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.cancel.confirm",
              defaultMessage: "Discard change",
            })),
            (j[34] = b))
          : (b = j[34]),
        j[35] !== O || j[36] !== G
          ? ((_ = (0, i.jsx)(ew.d, {
              type: "submit",
              size: "formAction",
              color: "dangerSolid",
              loading: O,
              disabled: G,
              children: b,
            })),
            (j[35] = O),
            (j[36] = G),
            (j[37] = _))
          : (_ = j[37]),
        j[38] !== g || j[39] !== _
          ? ((x = (0, i.jsx)(sd.OO, { children: (0, i.jsxs)(sd.Es, { children: [g, _] }) })),
            (j[38] = g),
            (j[39] = _),
            (j[40] = x))
          : (x = j[40]),
        j[41] !== x || j[42] !== r || j[43] !== h
          ? ((y = (0, i.jsxs)(sd.R4, { as: "form", onSubmit: r, children: [f, h, x] })),
            (j[41] = x),
            (j[42] = r),
            (j[43] = h),
            (j[44] = y))
          : (y = j[44]),
        j[45] !== F || j[46] !== O || j[47] !== y || j[48] !== $ || j[49] !== l || j[50] !== a
          ? ((v = (0, i.jsx)(sc.lG, {
              open: F,
              showDialogClose: $,
              shouldIgnoreClickOutside: O,
              onOpenChange: l,
              contentProps: a,
              children: y,
            })),
            (j[45] = F),
            (j[46] = O),
            (j[47] = y),
            (j[48] = $),
            (j[49] = l),
            (j[50] = a),
            (j[51] = v))
          : (v = j[51]),
        j[52] !== v || j[53] !== t
          ? ((w = (0, i.jsxs)(i.Fragment, { children: [t, v] })), (j[52] = v), (j[53] = t), (j[54] = w))
          : (w = j[54]),
        w
      )
    }
    var tA = t("cwoy"),
      tC = t("S6xm"),
      tS = t("aUH2"),
      tk = t("IVLR"),
      tI = t("v7Fs"),
      tP = t("RZi8"),
      tM = t("la9L"),
      tN = t("py8O"),
      tT = t("XpF1"),
      tD = t("y4HA"),
      tE = t("A1JU"),
      tq = t("B5UP"),
      tF = t("LtFi")
    function tR(e) {
      let s,
        t,
        l,
        a,
        r,
        o = (0, n.c)(28),
        {
          disabled: u,
          submitting: f,
          error: h,
          canRetry: p,
          resendDisabled: m,
          resendLoading: b,
          cooldownSeconds: _,
          onSubmit: x,
          onResend: y,
          backButton: v,
        } = e,
        [w, j] = (0, c.useState)("")
      o[0] !== w || o[1] !== u || o[2] !== x
        ? ((s = (e) => {
            ;(e.preventDefault(), !u && /^\d{6}$/.test(w) && x(w))
          }),
          (o[0] = w),
          (o[1] = u),
          (o[2] = x),
          (o[3] = s))
        : (s = o[3])
      let A = null != h
      return (
        o[4] !== w ||
        o[5] !== _ ||
        o[6] !== u ||
        o[7] !== h ||
        o[8] !== y ||
        o[9] !== x ||
        o[10] !== m ||
        o[11] !== b ||
        o[12] !== f ||
        o[13] !== A
          ? ((t = (0, i.jsx)(tF.I, {
              code: w,
              disabled: u,
              pending: f,
              invalid: A,
              error: h,
              resendDisabled: m,
              resendLoading: b,
              cooldownSeconds: _,
              onChange: j,
              onVerify: x,
              onResend: y,
            })),
            (o[4] = w),
            (o[5] = _),
            (o[6] = u),
            (o[7] = h),
            (o[8] = y),
            (o[9] = x),
            (o[10] = m),
            (o[11] = b),
            (o[12] = f),
            (o[13] = A),
            (o[14] = t))
          : (t = o[14]),
        o[15] !== f || o[16] !== s || o[17] !== t
          ? ((l = (0, i.jsx)("form", { "aria-busy": f, onSubmit: s, children: t })),
            (o[15] = f),
            (o[16] = s),
            (o[17] = t),
            (o[18] = l))
          : (l = o[18]),
        o[19] !== v || o[20] !== p || o[21] !== w || o[22] !== u || o[23] !== x
          ? ((a =
              null != v || p
                ? (0, i.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    role: "status",
                    children: [
                      v,
                      p
                        ? (0, i.jsx)(g.$, {
                            type: "button",
                            size: "formAction",
                            radius: "full",
                            color: "primary",
                            disabled: u || !/^\d{6}$/.test(w),
                            onClick: () => x(w),
                            children: (0, i.jsx)(d.A, {
                              id: "businessProfiles.verification.code.retry",
                              defaultMessage: "Try again",
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (o[19] = v),
            (o[20] = p),
            (o[21] = w),
            (o[22] = u),
            (o[23] = x),
            (o[24] = a))
          : (a = o[24]),
        o[25] !== l || o[26] !== a
          ? ((r = (0, i.jsxs)("div", { className: "flex flex-col gap-6", children: [l, a] })),
            (o[25] = l),
            (o[26] = a),
            (o[27] = r))
          : (r = o[27]),
        r
      )
    }
    var tL = t("wODv"),
      tO = t("CNZc")
    function tB(e) {
      let s,
        t,
        l,
        a,
        r,
        f,
        h,
        p,
        m,
        b,
        _,
        x,
        y,
        v,
        w,
        j,
        A,
        C,
        k,
        I,
        P,
        M,
        N,
        T,
        E,
        q,
        F,
        R = (0, n.c)(215),
        {
          accountId: L,
          profileId: O,
          flowId: B,
          action: V,
          requests: U,
          onResult: $,
          verification: G,
          canChangePhoneNumber: H,
          submitContactChallenge: z,
          onBack: W,
          onCancel: K,
          backDisabled: Q,
          backLoading: Z,
        } = e,
        Y = void 0 !== H && H,
        J = void 0 !== Q && Q,
        X = void 0 !== Z && Z,
        ee = (0, o.gh)(S.u),
        es = (0, u.A)(),
        [et, ei] = (0, c.useState)(!1),
        [en, el] = (0, c.useState)(null),
        [ea, er] = (0, c.useState)(!1),
        eo = V.challenge
      if (R[0] !== eo?.domain_record?.name || R[1] !== eo?.domain_record?.name.replace) {
        let e = eo?.domain_record?.name.replace(/\.$/, "")
        ;((s = null == e ? null : (0, tP.FB)(e, { allowPrivateDomains: !0 })),
          (t = null == e || null == s ? null : e.slice(0, -s.length).replace(/\.$/, "") || "@"),
          (R[0] = eo?.domain_record?.name),
          (R[1] = eo?.domain_record?.name.replace),
          (R[2] = s),
          (R[3] = t))
      } else ((s = R[2]), (t = R[3]))
      let ec = t
      R[4] !== V.kind || R[5] !== eo
        ? ((l = () =>
            "phone_otp" === V.kind && eo?.destination_channel != null
              ? { challengeId: eo.id, destinationChannel: eo.destination_channel }
              : null),
          (R[4] = V.kind),
          (R[5] = eo),
          (R[6] = l))
        : (l = R[6])
      let [ed, eu] = (0, c.useState)(l)
      "phone_otp" === V.kind &&
        eo?.destination_channel != null &&
        ed?.challengeId !== eo.id &&
        eu({ challengeId: eo.id, destinationChannel: eo.destination_channel })
      let ef = (0, c.useRef)(null)
      ;(R[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            let e = new AbortController()
            return ((ef.current = e), () => e.abort())
          }),
          (R[7] = a))
        : (a = R[7]),
        R[8] !== L || R[9] !== V.check_key || R[10] !== V.content_revision_id || R[11] !== B || R[12] !== O
          ? ((r = [L, O, B, V.check_key, V.content_revision_id]),
            (R[8] = L),
            (R[9] = V.check_key),
            (R[10] = V.content_revision_id),
            (R[11] = B),
            (R[12] = O),
            (R[13] = r))
          : (r = R[13]),
        (0, c.useLayoutEffect)(a, r),
        R[14] !== L || R[15] !== B || R[16] !== O
          ? ((f = ["business-profiles", L, O, "verification", B, "challenge"]),
            (R[14] = L),
            (R[15] = B),
            (R[16] = O),
            (R[17] = f))
          : (f = R[17]),
        R[18] !== L || R[19] !== V.check_key || R[20] !== V.kind || R[21] !== B || R[22] !== O || R[23] !== ee
          ? ((h = (e, s) => {
              let { request: t, action: i, admission: n, attempt: l, lease: a, attempts: r } = s
              a.isCurrent() &&
                (!n.aborted || e !== n.reason) &&
                r.reconcile(l, "uncertain") &&
                (("phone_otp" === i.kind || "email_otp" === i.kind) &&
                  "submit" !== t.action &&
                  e instanceof D.FetchError &&
                  429 === e.status &&
                  "business_profile_verification_limit_reached" === e.errorCode &&
                  er(!0),
                (!(e instanceof D.FetchError) || (0, tD.iS)(e)) && null != i
                  ? (0, tD.zl)(ee.queryClient, L, O, B, i)
                  : (0, tD.hQ)(ee.queryClient, L, O, B, V.check_key),
                e instanceof D.FetchError && [401, 403, 426].includes(e.status) && (0, tT.xz)(ee.queryClient, L, O),
                e instanceof D.FetchError &&
                  ([404, 409].includes(e.status) ||
                    (("phone_otp" === V.kind || "email_otp" === V.kind) &&
                      "submit" !== t.action &&
                      429 === e.status &&
                      "business_profile_verification_cooldown" === e.errorCode) ||
                    ("domain" === V.kind &&
                      "submit" === t.action &&
                      429 === e.status &&
                      "business_profile_verification_limit_reached" === e.errorCode)) &&
                  ee.queryClient.invalidateQueries({ queryKey: ["business-profiles", L, O, "verification", B] }))
            }),
            (R[18] = L),
            (R[19] = V.check_key),
            (R[20] = V.kind),
            (R[21] = B),
            (R[22] = O),
            (R[23] = ee),
            (R[24] = h))
          : (h = R[24]))
      let {
          mutate: eh,
          isPending: ep,
          error: em,
          variables: eg,
        } = (0, ey.n)({
          mutationKey: f,
          mutationFn: async (e) => {
            let { request: s, admission: t, attempt: i, lease: n, attempts: l } = e
            ;(t.throwIfAborted(), n.throwIfStale())
            let a = { accountId: L, profileId: O, flowId: B, checkKey: V.check_key, signal: n.signal }
            if (null == z) throw Error("Verification provider unavailable")
            let r = await z({ ...a, request: s })
            return (
              n.isCurrent() &&
                (function (e, s, t) {
                  if (!t.isCurrent(s)) return
                  let i = $(e)
                  ;(t.reconcile(s, null == i ? "uncertain" : "completed"),
                    null != i
                      ? (0, tD.hQ)(ee.queryClient, L, O, B, V.check_key)
                      : (0, tD.zl)(ee.queryClient, L, O, B, V))
                })(r, i, l),
              r
            )
          },
          retry: !1,
          onError: h,
        }),
        eb = eg?.request,
        e_ = "phone_otp" === V.kind ? V.phone_delivery_channels : void 0,
        ex = "phone_otp" === V.kind ? (e_ ?? V.destination_channels) : void 0,
        ev = "phone_otp" === V.kind ? (ed?.destinationChannel ?? eo?.destination_channel ?? ex?.[0]) : void 0,
        ej = e_?.length === 0,
        eA = "sms" === ev && !V.destination_channels?.length
      R[25] !== eo?.status || R[26] !== ev || R[27] !== ex || R[28] !== eA
        ? ((p = eo?.status !== "verified" && null != ev && !eA && !ex?.includes(ev)),
          (R[25] = eo?.status),
          (R[26] = ev),
          (R[27] = ex),
          (R[28] = eA),
          (R[29] = p))
        : (p = R[29])
      let eC = p,
        eS = eb?.action === "start" || eb?.action === "start_phone",
        ek =
          eg?.attempt.selection.challengeId === (eo?.id ?? null) &&
          eg?.attempt.selection.challengeStatus === (eo?.status ?? null) &&
          eg?.attempt.selection.channel === (ev ?? null)
      R[30] !== eo?.id || R[31] !== em || R[32] !== ek || R[33] !== eS || R[34] !== eb
        ? ((m =
            ((eb?.action !== "submit" || eb.challenge_id === eo?.id) && (!eS || ek)) ||
            (em instanceof D.FetchError && [401, 403, 404].includes(em.status))
              ? em
              : null),
          (R[30] = eo?.id),
          (R[31] = em),
          (R[32] = ek),
          (R[33] = eS),
          (R[34] = eb),
          (R[35] = m))
        : (m = R[35])
      let eI = m,
        eP = eo?.domain_record?.expires_at,
        [eM, eN] = (0, c.useState)(tU)
      ;(R[36] !== eP || R[37] !== eM
        ? ((b = () => {
            if (null == eP) return
            let e = Date.parse(eP)
            if (!Number.isFinite(e) || e <= eM) return
            let s = setTimeout(() => eN(Date.now()), Math.max(0, Math.min(e - Date.now(), 0x7fffffff)))
            return () => clearTimeout(s)
          }),
          (_ = [eP, eM]),
          (R[36] = eP),
          (R[37] = eM),
          (R[38] = b),
          (R[39] = _))
        : ((b = R[38]), (_ = R[39])),
        (0, c.useEffect)(b, _),
        R[40] !== V.kind || R[41] !== eo || R[42] !== eP || R[43] !== eM
          ? ((x =
              "domain" === V.kind &&
              null != eo &&
              "verified" !== eo.status &&
              null != eP &&
              (!Number.isFinite(Date.parse(eP)) || Date.parse(eP) <= eM)),
            (R[40] = V.kind),
            (R[41] = eo),
            (R[42] = eP),
            (R[43] = eM),
            (R[44] = x))
          : (x = R[44]))
      let eT = x,
        eD = eo?.status === "failed" || eT,
        eE = "phone_otp" === V.kind || "email_otp" === V.kind,
        eq = eE ? G?.otp_resend_available_at : void 0,
        [eF, eR] = (0, c.useState)(null)
      R[45] !== eq || R[46] !== eF
        ? ((y = null != eq && eF?.deadline === eq ? eF.cooldown : (0, tk.P$)(eq, 0 / 0)),
          (R[45] = eq),
          (R[46] = eF),
          (R[47] = y))
        : (y = R[47])
      let eL = y
      ;(R[48] !== eq
        ? ((v = () => {
            if (null != eq) return (0, tI.x)(eq, (e) => eR({ deadline: eq, cooldown: e }))
          }),
          (w = [eq]),
          (R[48] = eq),
          (R[49] = v),
          (R[50] = w))
        : ((v = R[49]), (w = R[50])),
        (0, c.useEffect)(v, w))
      let eO = eE && ((ep && eS) || (eo?.status === "submitted" && G?.otp_send_count === 0)),
        eB = ep && eS ? en : null,
        eV = eE && ep && eb?.action === "submit",
        eU = eo?.status === "submitted"
      R[51] !== eI || R[52] !== eD
        ? ((j = eI instanceof D.FetchError && ([401, 403, 404].includes(eI.status) || (409 === eI.status && !eD))),
          (R[51] = eI),
          (R[52] = eD),
          (R[53] = j))
        : (j = R[53])
      let e$ = j,
        eG =
          eE &&
          eI instanceof D.FetchError &&
          429 === eI.status &&
          "business_profile_verification_limit_reached" === eI.errorCode,
        eH = eG && eb?.action === "submit"
      R[54] !== V ||
      R[55] !== eo?.id ||
      R[56] !== eo?.status ||
      R[57] !== ev ||
      R[58] !== eI ||
      R[59] !== eh ||
      R[60] !== U
        ? ((A = function (e) {
            let s = ef.current?.signal
            if (null == s || s.aborted) return
            let t = U.forAction(V),
              i = t.attempts.begin(
                {
                  checkKey: V.check_key,
                  target: JSON.stringify([
                    V.kind,
                    V.target_label,
                    "submit" === e.action ? "submit" : "start",
                    "submit" === e.action ? e.response : null,
                  ]),
                  channel: ev ?? null,
                  challengeId: eo?.id ?? null,
                  challengeStatus: eo?.status ?? null,
                },
                { newAttempt: null == eI },
              )
            eh({
              request: { ...e, idempotency_key: i.idempotencyKey },
              admission: s,
              attempt: i,
              lease: t.requests.begin(),
              attempts: t.attempts,
              action: V,
            })
          }),
          (R[54] = V),
          (R[55] = eo?.id),
          (R[56] = eo?.status),
          (R[57] = ev),
          (R[58] = eI),
          (R[59] = eh),
          (R[60] = U),
          (R[61] = A))
        : (A = R[61])
      let ez = A
      R[62] !== eo?.id ||
      R[63] !== eC ||
      R[64] !== ev ||
      R[65] !== eA ||
      R[66] !== ej ||
      R[67] !== eG ||
      R[68] !== ea ||
      R[69] !== eq ||
      R[70] !== ez
        ? ((C = function () {
            eG ||
              ea ||
              eC ||
              ej ||
              !(0, tk.P$)(eq, Date.now()).available ||
              (ei(!1),
              null != ev && eu({ challengeId: eo?.id, destinationChannel: ev }),
              ez(null == ev || eA ? { action: "start" } : { action: "start_phone", destination_channel: ev }))
          }),
          (R[62] = eo?.id),
          (R[63] = eC),
          (R[64] = ev),
          (R[65] = eA),
          (R[66] = ej),
          (R[67] = eG),
          (R[68] = ea),
          (R[69] = eq),
          (R[70] = ez),
          (R[71] = C))
        : (C = R[71])
      let eW = C
      R[72] !== eW
        ? ((k = function (e) {
            ;(el(e), eW())
          }),
          (R[72] = eW),
          (R[73] = k))
        : (k = R[73])
      let eK = k
      R[74] !== V.kind || R[75] !== eo || R[76] !== eP || R[77] !== eE || R[78] !== eH || R[79] !== ez
        ? ((I = function (e) {
            if (null == eo || eH) return
            if ("domain" === V.kind && null != eP && Date.parse(eP) <= Date.now()) return void eN(Date.now())
            let s = eE ? e : null
            ez({ action: "submit", challenge_id: eo.id, response: s })
          }),
          (R[74] = V.kind),
          (R[75] = eo),
          (R[76] = eP),
          (R[77] = eE),
          (R[78] = eH),
          (R[79] = ez),
          (R[80] = I))
        : (I = R[80])
      let eQ = I
      if (null == z) {
        let e
        return (
          R[81] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.providerUnavailable",
                  defaultMessage:
                    "Verification for this change is not available yet. You can return to your profile and keep editing.",
                }),
              })),
              (R[81] = e))
            : (e = R[81]),
          e
        )
      }
      let eZ = null
      if (e$) {
        let e
        ;(R[82] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.changed",
              defaultMessage:
                "This verification is no longer available; return to your profile to review the latest change",
            })),
            (R[82] = e))
          : (e = R[82]),
          (eZ = e))
      } else if (null != eI)
        if (
          eI instanceof D.FetchError &&
          429 === eI.status &&
          "business_profile_verification_cooldown" === eI.errorCode
        ) {
          let e
          ;(R[83] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.cooldown",
                defaultMessage: "Wait 30 seconds before trying again",
              })),
              (R[83] = e))
            : (e = R[83]),
            (eZ = e))
        } else if (
          eI instanceof D.FetchError &&
          429 === eI.status &&
          "business_profile_verification_limit_reached" === eI.errorCode
        ) {
          let e
          ;(R[84] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, { ...tN.f.limitReached })), (R[84] = e))
            : (e = R[84]),
            (eZ = e))
        } else if (eb?.action === "submit" && eE) {
          let e
          ;(R[85] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, { ...tN.f.rejected })), (R[85] = e))
            : (e = R[85]),
            (eZ = e))
        } else if (eb?.action === "submit" && "domain" === V.kind) {
          let e
          ;(R[86] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.domainNotVerified",
                defaultMessage: "We couldn\u2019t verify your domain. Check the DNS record and try again",
              })),
              (R[86] = e))
            : (e = R[86]),
            (eZ = e))
        } else if (eS && eE) {
          let e
          ;(R[87] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.codeNotSent",
                defaultMessage: "We couldn\u2019t send a code. Please try again",
              })),
              (R[87] = e))
            : (e = R[87]),
            (eZ = e))
        } else if (eI instanceof D.FetchError && [400, 422].includes(eI.status)) {
          let e
          ;(R[88] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.invalidResponse",
                defaultMessage: "Check your verification details and try again",
              })),
              (R[88] = e))
            : (e = R[88]),
            (eZ = e))
        } else {
          let e
          ;(R[89] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.requestError",
                defaultMessage: "We couldn\u2019t complete verification. Please try again",
              })),
              (R[89] = e))
            : (e = R[89]),
            (eZ = e))
        }
      else if ("phone_otp" === V.kind && eo?.status === "failed") {
        let e
        R[90] !== Y || R[91] !== ex || R[92] !== e_ || R[93] !== G
          ? ((e = (0, tE.z)(G, {
              canChangeNumber: Y,
              offerCallForLandline: ex?.includes("phone_voice_call"),
              confirmedChannels: e_,
            })),
            (R[90] = Y),
            (R[91] = ex),
            (R[92] = e_),
            (R[93] = G),
            (R[94] = e))
          : (e = R[94])
        let s = e
        if (s) {
          let e
          ;(R[95] !== s ? ((e = (0, i.jsx)(d.A, { ...s })), (R[95] = s), (R[96] = e)) : (e = R[96]), (eZ = e))
        }
      }
      if (eV) {
        let e
        ;(R[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.verifyingCode",
              defaultMessage: "Verifying\u2026",
            })),
            (R[97] = e))
          : (e = R[97]),
          (P = e))
      } else if (null != K) {
        let e
        ;(R[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, { id: "businessProfiles.verification.contact.cancel", defaultMessage: "Cancel" })),
            (R[98] = e))
          : (e = R[98]),
          (P = e))
      } else {
        let e
        ;(R[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, { id: "businessProfiles.verification.contact.back", defaultMessage: "Back" })),
            (R[99] = e))
          : (e = R[99]),
          (P = e))
      }
      let eY = eV ? g.$ : ew.d
      R[100] !== eY ||
      R[101] !== J ||
      R[102] !== X ||
      R[103] !== ep ||
      R[104] !== W ||
      R[105] !== K ||
      R[106] !== P ||
      R[107] !== eV
        ? ((M =
            null != W || null != K
              ? (0, i.jsx)(eY, {
                  type: "button",
                  size: "formAction",
                  radius: "full",
                  color: "outlineGhost",
                  onClick: K ?? W,
                  disabled: J || ep,
                  loading: eV || X,
                  children: P,
                })
              : null),
          (R[100] = eY),
          (R[101] = J),
          (R[102] = X),
          (R[103] = ep),
          (R[104] = W),
          (R[105] = K),
          (R[106] = P),
          (R[107] = eV),
          (R[108] = M))
        : (M = R[108])
      let eJ = M
      if (eE) {
        let e,
          s,
          t,
          n,
          l,
          a,
          r,
          o = null != eo && !eD && !eU && "verified" !== eo.status,
          c = null == eo || eD || ((eC || et) && !!ex?.length && "verified" !== eo.status)
        return (
          R[109] !== V.target_label || R[110] !== eO
            ? ((e = eO
                ? (0, i.jsx)("p", {
                    className: "text-sm text-secondary",
                    role: "status",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.sendingCode",
                      defaultMessage: "Sending a code to {target}\u2026",
                      values: { target: V.target_label },
                    }),
                  })
                : null),
              (R[109] = V.target_label),
              (R[110] = eO),
              (R[111] = e))
            : (e = R[111]),
          R[112] !== eB ||
          R[113] !== eJ ||
          R[114] !== eo ||
          R[115] !== eC ||
          R[116] !== e$ ||
          R[117] !== o ||
          R[118] !== eI ||
          R[119] !== eZ ||
          R[120] !== ep ||
          R[121] !== ej ||
          R[122] !== eH ||
          R[123] !== eG ||
          R[124] !== ea ||
          R[125] !== eK ||
          R[126] !== eL ||
          R[127] !== eQ ||
          R[128] !== eb?.action
            ? ((s = o
                ? (0, i.jsx)(
                    tR,
                    {
                      disabled: ep || e$ || eH,
                      submitting: ep,
                      error: eZ,
                      canRetry: null != eI && eb?.action === "submit" && !e$ && !eH,
                      resendDisabled: ep || e$ || eG || ea || eC || ej || !eL.available,
                      cooldownSeconds: eL.seconds,
                      onSubmit: eQ,
                      resendLoading: "resend" === eB,
                      onResend: () => eK("resend"),
                      backButton: eJ,
                    },
                    eo.id,
                  )
                : null),
              (R[112] = eB),
              (R[113] = eJ),
              (R[114] = eo),
              (R[115] = eC),
              (R[116] = e$),
              (R[117] = o),
              (R[118] = eI),
              (R[119] = eZ),
              (R[120] = ep),
              (R[121] = ej),
              (R[122] = eH),
              (R[123] = eG),
              (R[124] = ea),
              (R[125] = eK),
              (R[126] = eL),
              (R[127] = eQ),
              (R[128] = eb?.action),
              (R[129] = s))
            : (s = R[129]),
          R[130] !== eC
            ? ((t = eC
                ? (0, i.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.deliveryUnavailable",
                      defaultMessage:
                        "This delivery method is no longer available. Choose another method or use a code you already received",
                    }),
                  })
                : null),
              (R[130] = eC),
              (R[131] = t))
            : (t = R[131]),
          R[132] !== o || R[133] !== eZ
            ? ((n =
                null == eZ || o
                  ? null
                  : (0, i.jsx)("p", { className: "text-sm text-danger", role: "alert", children: eZ })),
              (R[132] = o),
              (R[133] = eZ),
              (R[134] = n))
            : (n = R[134]),
          R[135] !== eB ||
          R[136] !== eJ ||
          R[137] !== eo?.id ||
          R[138] !== eC ||
          R[139] !== c ||
          R[140] !== e$ ||
          R[141] !== ev ||
          R[142] !== ex ||
          R[143] !== o ||
          R[144] !== ep ||
          R[145] !== ej ||
          R[146] !== eG ||
          R[147] !== ea ||
          R[148] !== e_ ||
          R[149] !== eK ||
          R[150] !== eL
            ? ((l = c
                ? (0, i.jsxs)("form", {
                    className: "flex flex-1 flex-col gap-6 lg:flex-none",
                    onSubmit: (e) => {
                      ;(e.preventDefault(), ep || e$ || eK("get-code"))
                    },
                    "aria-busy": ep,
                    children: [
                      ex?.length || ej
                        ? (0, i.jsx)(tL.F, {
                            delivery: "phone_voice_call" === ev ? "call" : ev,
                            availableDeliveries: ex?.map(tV),
                            unavailableDeliveryMessages: (0, tE.J)(e_),
                            disabled: ep || e$,
                            onChange: (e) => {
                              ;(ei(!0),
                                eu({
                                  challengeId: eo?.id,
                                  destinationChannel: "call" === e ? "phone_voice_call" : "sms",
                                }))
                            },
                          })
                        : null,
                      (0, i.jsxs)("div", {
                        className: "mt-auto flex gap-2 pt-6 lg:mt-0 lg:pt-0",
                        children: [
                          o ? null : eJ,
                          (0, i.jsx)(ew.d, {
                            className: "flex-1 lg:flex-none",
                            type: "submit",
                            size: "formAction",
                            radius: "full",
                            color: "primary",
                            loading: "get-code" === eB,
                            disabled: ep || e$ || eG || ea || eC || ej || !eL.available,
                            children:
                              eL.seconds > 0
                                ? (0, i.jsx)(tO.j, { seconds: eL.seconds })
                                : (0, i.jsx)(d.A, {
                                    id: "businessProfiles.verification.sendCode",
                                    defaultMessage: "Get code",
                                  }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
              (R[135] = eB),
              (R[136] = eJ),
              (R[137] = eo?.id),
              (R[138] = eC),
              (R[139] = c),
              (R[140] = e$),
              (R[141] = ev),
              (R[142] = ex),
              (R[143] = o),
              (R[144] = ep),
              (R[145] = ej),
              (R[146] = eG),
              (R[147] = ea),
              (R[148] = e_),
              (R[149] = eK),
              (R[150] = eL),
              (R[151] = l))
            : (l = R[151]),
          R[152] !== eB ||
          R[153] !== eJ ||
          R[154] !== eo?.status ||
          R[155] !== eC ||
          R[156] !== c ||
          R[157] !== e$ ||
          R[158] !== ep ||
          R[159] !== eK ||
          R[160] !== eL ||
          R[161] !== eO ||
          R[162] !== eU
            ? ((a =
                eU || eo?.status === "verified"
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        eO
                          ? null
                          : (0, i.jsx)("p", {
                              role: "status",
                              className: "text-sm text-secondary",
                              children:
                                eo?.status === "verified"
                                  ? (0, i.jsx)(d.A, {
                                      id: "businessProfiles.field.saving",
                                      defaultMessage: "Saving\u2026",
                                    })
                                  : (0, i.jsx)(d.A, {
                                      id: "businessProfiles.verification.checking",
                                      defaultMessage:
                                        "Verification is in progress; you can return to your profile while we check",
                                    }),
                            }),
                        (0, i.jsxs)("div", {
                          className: "flex flex-wrap items-center gap-3",
                          children: [
                            c ? null : eJ,
                            eU
                              ? (0, i.jsx)(tO.l, {
                                  variant: "inline",
                                  disabled: ep || e$ || eC || !eL.available,
                                  cooldownSeconds: eL.seconds,
                                  loading: "resend" === eB,
                                  onResend: () => eK("resend"),
                                })
                              : null,
                          ],
                        }),
                      ],
                    })
                  : null),
              (R[152] = eB),
              (R[153] = eJ),
              (R[154] = eo?.status),
              (R[155] = eC),
              (R[156] = c),
              (R[157] = e$),
              (R[158] = ep),
              (R[159] = eK),
              (R[160] = eL),
              (R[161] = eO),
              (R[162] = eU),
              (R[163] = a))
            : (a = R[163]),
          R[164] !== e || R[165] !== s || R[166] !== t || R[167] !== n || R[168] !== l || R[169] !== a
            ? ((r = (0, i.jsxs)("div", {
                className: "flex flex-1 flex-col gap-6 lg:flex-none",
                children: [e, s, t, n, l, a],
              })),
              (R[164] = e),
              (R[165] = s),
              (R[166] = t),
              (R[167] = n),
              (R[168] = l),
              (R[169] = a),
              (R[170] = r))
            : (r = R[170]),
          r
        )
      }
      if (null == eo || eD) {
        let e,
          s,
          t,
          n = ep && eS,
          l = ep || e$
        ;(R[171] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.verifyDomain",
              defaultMessage: "Verify domain",
            })),
            (R[171] = e))
          : (e = R[171]),
          R[172] !== eW || R[173] !== n || R[174] !== l
            ? ((s = (0, i.jsx)(ew.d, {
                className: "flex-1 lg:flex-none",
                size: "formAction",
                radius: "full",
                color: "primary",
                loading: n,
                disabled: l,
                onClick: eW,
                children: e,
              })),
              (R[172] = eW),
              (R[173] = n),
              (R[174] = l),
              (R[175] = s))
            : (s = R[175]),
          R[176] !== eJ || R[177] !== s
            ? ((t = (0, i.jsxs)("div", { className: "mt-auto flex gap-2 pt-6 lg:mt-0 lg:pt-0", children: [eJ, s] })),
              (R[176] = eJ),
              (R[177] = s),
              (R[178] = t))
            : (t = R[178]),
          (N = t))
      } else if (eU || "verified" === eo.status) {
        let e, s, t, n
        if ("verified" === eo.status) {
          let s
          ;(R[179] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(d.A, { id: "businessProfiles.field.saving", defaultMessage: "Saving\u2026" })),
              (R[179] = s))
            : (s = R[179]),
            (e = s))
        } else {
          let s
          ;(R[180] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.checking",
                defaultMessage: "Verification is in progress; you can return to your profile while we check",
              })),
              (R[180] = s))
            : (s = R[180]),
            (e = s))
        }
        ;(R[181] !== e
          ? ((s = (0, i.jsx)("p", { role: "status", className: "text-sm text-secondary", children: e })),
            (R[181] = e),
            (R[182] = s))
          : (s = R[182]),
          R[183] !== eJ
            ? ((t = null != eJ ? (0, i.jsx)("div", { className: "mt-auto flex lg:mt-0", children: eJ }) : null),
              (R[183] = eJ),
              (R[184] = t))
            : (t = R[184]),
          R[185] !== s || R[186] !== t
            ? ((n = (0, i.jsxs)(i.Fragment, { children: [s, t] })), (R[185] = s), (R[186] = t), (R[187] = n))
            : (n = R[187]),
          (N = n))
      } else {
        let e,
          s,
          t,
          n,
          l = ep && eb?.action === "submit",
          a = ep || e$ || null == eo.domain_record
        ;(R[188] !== eQ ? ((e = () => eQ(null)), (R[188] = eQ), (R[189] = e)) : (e = R[189]),
          R[190] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.verifyDomain",
                defaultMessage: "Verify domain",
              })),
              (R[190] = s))
            : (s = R[190]),
          R[191] !== l || R[192] !== a || R[193] !== e
            ? ((t = (0, i.jsx)(ew.d, {
                className: "flex-1 lg:flex-none",
                size: "formAction",
                radius: "full",
                color: "primary",
                loading: l,
                disabled: a,
                onClick: e,
                children: s,
              })),
              (R[191] = l),
              (R[192] = a),
              (R[193] = e),
              (R[194] = t))
            : (t = R[194]),
          R[195] !== eJ || R[196] !== t
            ? ((n = (0, i.jsxs)("div", { className: "mt-auto flex gap-2 pt-6 lg:mt-0 lg:pt-0", children: [eJ, t] })),
              (R[195] = eJ),
              (R[196] = t),
              (R[197] = n))
            : (n = R[197]),
          (N = n))
      }
      return (
        R[198] !== e$ || R[199] !== eT
          ? ((T =
              eT && !e$
                ? (0, i.jsx)("p", {
                    className: "text-sm text-secondary",
                    role: "status",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.domain.expired",
                      defaultMessage: "This DNS record has expired. Verify your domain to get a new record",
                    }),
                  })
                : null),
            (R[198] = e$),
            (R[199] = eT),
            (R[200] = T))
          : (T = R[200]),
        R[201] !== eZ
          ? ((E =
              null != eZ ? (0, i.jsx)("p", { className: "text-sm text-danger", role: "alert", children: eZ }) : null),
            (R[201] = eZ),
            (R[202] = E))
          : (E = R[202]),
        R[203] !== eo || R[204] !== s || R[205] !== ec || R[206] !== eD || R[207] !== es || R[208] !== eU
          ? ((q =
              eo?.domain_record == null || eD || eU
                ? null
                : (0, i.jsx)(tq.m, {
                    variant: "manager",
                    recordName: eo.domain_record.name,
                    recordValue: eo.domain_record.value,
                    nameHelp:
                      null == s || null == ec
                        ? void 0
                        : {
                            label: es.formatMessage({
                              id: "businessProfiles.verification.dnsHostHelpLabel",
                              defaultMessage: "Help with DNS name or host",
                            }),
                            content: (0, i.jsxs)("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                (0, i.jsx)("p", {
                                  children: (0, i.jsx)(d.A, {
                                    id: "businessProfiles.verification.dnsHostHelpBusinessDomain",
                                    defaultMessage:
                                      "Your provider may automatically add {domain} to the end of the name",
                                    values: { domain: `.${s}` },
                                  }),
                                }),
                                (0, i.jsxs)("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    (0, i.jsx)("p", {
                                      className: "font-medium",
                                      children: (0, i.jsx)(d.A, {
                                        id: "businessProfiles.verification.dnsHostHelpEnterOnly",
                                        defaultMessage: "If so, enter only:",
                                      }),
                                    }),
                                    (0, i.jsx)(tM.CodeSnippet, {
                                      content: ec,
                                      language: "plaintext",
                                      variant: "preview",
                                      showActionBar: !1,
                                      showCopyButton: !1,
                                      shouldWrapCode: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                    valueHelp: {
                      label: es.formatMessage({
                        id: "businessProfiles.verification.dnsValueHelpLabel",
                        defaultMessage: "Help with DNS value",
                      }),
                      content: (0, i.jsx)(d.A, {
                        id: "businessProfiles.verification.dnsValueHelp",
                        defaultMessage:
                          "Your provider may call this Data, Text, or Content. Copy the entire value shown.",
                      }),
                    },
                  })),
            (R[203] = eo),
            (R[204] = s),
            (R[205] = ec),
            (R[206] = eD),
            (R[207] = es),
            (R[208] = eU),
            (R[209] = q))
          : (q = R[209]),
        R[210] !== N || R[211] !== T || R[212] !== E || R[213] !== q
          ? ((F = (0, i.jsxs)("div", { className: "flex flex-1 flex-col gap-6 lg:flex-none", children: [T, E, q, N] })),
            (R[210] = N),
            (R[211] = T),
            (R[212] = E),
            (R[213] = q),
            (R[214] = F))
          : (F = R[214]),
        F
      )
    }
    function tV(e) {
      return "phone_voice_call" === e ? "call" : "sms"
    }
    function tU() {
      return Date.now()
    }
    var t$ = t("jUt5"),
      tG = t("l4He"),
      tH = t("Qsgo"),
      tz = t("YNbN")
    function tW(e) {
      let s,
        t,
        l,
        a,
        r,
        o,
        d,
        f,
        h,
        p,
        m,
        b,
        _,
        x,
        y,
        v,
        w,
        j = (0, n.c)(43),
        { manager: A, section: C, stepKey: S, title: k, children: I, onBack: P, onClose: M, busy: N } = e,
        T = void 0 !== N && N,
        D = (0, u.A)(),
        [E, q] = (0, c.useState)(null),
        F = (0, c.useRef)(null),
        R = (0, c.useRef)(null)
      return (
        j[0] !== S
          ? ((s = () => {
              ;("code" !== S && F.current?.focus({ preventScroll: !0 }), null != R.current && (R.current.scrollTop = 0))
            }),
            (j[0] = S),
            (j[1] = s))
          : (s = j[1]),
        j[2] !== E || j[3] !== S ? ((t = [E, S]), (j[2] = E), (j[3] = S), (j[4] = t)) : (t = j[4]),
        (0, c.useLayoutEffect)(s, t),
        j[5] !== E
          ? ((l = () => {
              let e = E?.closest('[role="dialog"]')
              if (e instanceof HTMLElement) return (0, tH.$)(e)
            }),
            (a = [E]),
            (j[5] = E),
            (j[6] = l),
            (j[7] = a))
          : ((l = j[6]), (a = j[7])),
        (0, c.useLayoutEffect)(l, a),
        j[8] !== T
          ? ((r = {
              "aria-describedby": void 0,
              "aria-modal": !0,
              onInteractOutside: tZ,
              onEscapeKeyDown: (e) => {
                T && e.preventDefault()
              },
              onOpenAutoFocus: tQ,
              onCloseAutoFocus: tK,
            }),
            (j[8] = T),
            (j[9] = r))
          : (r = j[9]),
        j[10] !== T || j[11] !== M
          ? ((o = (e) => {
              e || T || M()
            }),
            (j[10] = T),
            (j[11] = M),
            (j[12] = o))
          : (o = j[12]),
        j[13] !== D
          ? ((d = D.formatMessage({
              id: "businessProfiles.verification.backToEditor.accessibleLabel",
              defaultMessage: "Back to the ChatGPT business profile editor",
            })),
            (j[13] = D),
            (j[14] = d))
          : (d = j[14]),
        j[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(t$.M, { variant: "edit" })), (j[15] = f))
          : (f = j[15]),
        j[16] !== T || j[17] !== P || j[18] !== d
          ? ((h = (0, i.jsx)("div", {
              className: "px-6 pt-6 lg:absolute lg:start-6 lg:top-6 lg:z-10 lg:p-0",
              children: (0, i.jsx)(g.$, {
                type: "button",
                size: "inline",
                color: "ghostActive",
                disabled: T,
                onClick: P,
                "aria-label": d,
                children: f,
              }),
            })),
            (j[16] = T),
            (j[17] = P),
            (j[18] = d),
            (j[19] = h))
          : (h = j[19]),
        j[20] !== k
          ? ((p = (0, i.jsx)(sc.L3, {
              asChild: !0,
              children: (0, i.jsx)("h1", {
                ref: F,
                tabIndex: -1,
                className: "text-heading-lg leading-7 font-normal outline-none lg:text-heading-app lg:leading-8.5",
                children: k,
              }),
            })),
            (j[20] = k),
            (j[21] = p))
          : (p = j[21]),
        j[22] !== I || j[23] !== p
          ? ((m = (0, i.jsx)("div", {
              className: "flex flex-1 flex-col px-6 py-6 lg:justify-center lg:px-12 lg:py-20 xl:px-20 2xl:px-32",
              children: (0, i.jsxs)("div", {
                className: "mx-auto flex w-full max-w-lg flex-1 flex-col gap-6 lg:flex-none",
                children: [p, I],
              }),
            })),
            (j[22] = I),
            (j[23] = p),
            (j[24] = m))
          : (m = j[24]),
        j[25] !== h || j[26] !== m
          ? ((b = (0, i.jsxs)("div", {
              ref: R,
              className: "relative flex min-w-0 flex-1 flex-col overflow-y-auto",
              children: [h, m],
            })),
            (j[25] = h),
            (j[26] = m),
            (j[27] = b))
          : (b = j[27]),
        j[28] !== D ? ((_ = D.formatMessage(tG.W.preview)), (j[28] = D), (j[29] = _)) : (_ = j[29]),
        j[30] !== A || j[31] !== C
          ? ((x = (0, i.jsx)("div", {
              className: "max-h-full w-full max-w-sm overflow-y-auto rounded-3xl bg-surface-card",
              children: (0, i.jsx)(tY, { manager: A, section: C }),
            })),
            (j[30] = A),
            (j[31] = C),
            (j[32] = x))
          : (x = j[32]),
        j[33] !== _ || j[34] !== x
          ? ((y = (0, i.jsx)("aside", {
              className: "hidden min-h-0 w-1/2 shrink-0 items-center justify-center bg-surface-tertiary p-12 lg:flex",
              "aria-label": _,
              children: x,
            })),
            (j[33] = _),
            (j[34] = x),
            (j[35] = y))
          : (y = j[35]),
        j[36] !== b || j[37] !== y
          ? ((v = (0, i.jsxs)("main", {
              ref: q,
              className: "relative flex h-full min-h-0 min-w-0 overflow-hidden bg-surface-card text-default",
              children: [b, y],
            })),
            (j[36] = b),
            (j[37] = y),
            (j[38] = v))
          : (v = j[38]),
        j[39] !== v || j[40] !== r || j[41] !== o
          ? ((w = (0, i.jsx)(sc.lG, {
              open: !0,
              modal: !1,
              unstyledContent: !0,
              viewportSized: !0,
              showDialogClose: !1,
              contentProps: r,
              onOpenChange: o,
              children: v,
            })),
            (j[39] = v),
            (j[40] = r),
            (j[41] = o),
            (j[42] = w))
          : (w = j[42]),
        w
      )
    }
    function tK(e) {
      return e.preventDefault()
    }
    function tQ(e) {
      return e.preventDefault()
    }
    function tZ(e) {
      return e.preventDefault()
    }
    function tY(e) {
      let s,
        t,
        l,
        a,
        r = (0, n.c)(8),
        { manager: o, section: d } = e,
        u = (0, c.useRef)(null),
        [f, h] = (0, c.useState)(!1)
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = () => {
              let e = u.current
              if (null == e) return
              let s = () => h(e.getBoundingClientRect().width > 0)
              s()
              let t = new ResizeObserver(s)
              return (t.observe(e), () => t.disconnect())
            }),
            (t = []),
            (r[0] = s),
            (r[1] = t))
          : ((s = r[0]), (t = r[1])),
        (0, c.useEffect)(s, t),
        r[2] !== o || r[3] !== d || r[4] !== f
          ? ((l = f ? (0, i.jsx)(tz.Z, { manager: o, section: d, inDialog: !0 }) : null),
            (r[2] = o),
            (r[3] = d),
            (r[4] = f),
            (r[5] = l))
          : (l = r[5]),
        r[6] !== l ? ((a = (0, i.jsx)("div", { ref: u, children: l })), (r[6] = l), (r[7] = a)) : (a = r[7]),
        a
      )
    }
    function tJ(e) {
      let s,
        t = (0, n.c)(5),
        { manager: l, flowId: a, submitContactChallenge: r } = e,
        { accountId: o } = (0, p.As)()
      return (
        t[0] !== o || t[1] !== a || t[2] !== l || t[3] !== r
          ? ((s =
              null == o
                ? (0, i.jsx)(ep.Bz, { variant: "form" })
                : (0, i.jsx)(
                    tX,
                    { accountId: o, manager: l, flowId: a, submitContactChallenge: r },
                    `${o}:${l.profile.business_profile_id}:${a}`,
                  )),
            (t[0] = o),
            (t[1] = a),
            (t[2] = l),
            (t[3] = r),
            (t[4] = s))
          : (s = t[4]),
        s
      )
    }
    function tX(e) {
      let s,
        t,
        l,
        a,
        r,
        f,
        p,
        m,
        g,
        b,
        _,
        x,
        y,
        v,
        w,
        j,
        C,
        k,
        I,
        P,
        M,
        N,
        T,
        D,
        E,
        q,
        F,
        R,
        L,
        O,
        B,
        V,
        U,
        $,
        G,
        H,
        z,
        W,
        K = (0, n.c)(258),
        { accountId: Z, manager: Y, flowId: J, submitContactChallenge: X } = e,
        ee = (0, o.gh)(S.u),
        es = (0, h.Zp)(),
        et = (0, u.A)(),
        ei = (0, c.useContext)(h.hf),
        en = (0, c.useRef)(!1),
        el = Y.profile.business_profile_id
      K[0] !== Z || K[1] !== J || K[2] !== el
        ? ((s = () => (0, tD.XF)({ accountId: Z, subjectId: el, flowId: J })),
          (K[0] = Z),
          (K[1] = J),
          (K[2] = el),
          (K[3] = s))
        : (s = K[3])
      let [ea] = (0, c.useState)(s)
      K[4] !== Z || K[5] !== J || K[6] !== el
        ? ((t = ["business-profiles", Z, el, "verification", J]), (K[4] = Z), (K[5] = J), (K[6] = el), (K[7] = t))
        : (t = K[7])
      let er = t
      K[8] !== er ? ((l = [...er, "challenge"]), (K[8] = er), (K[9] = l)) : (l = K[9])
      let eo = l
      K[10] !== eo ? ((a = { mutationKey: eo }), (K[10] = eo), (K[11] = a)) : (a = K[11])
      let ec = (0, tx.l)(a) > 0
      ;(K[12] !== Z || K[13] !== J || K[14] !== el || K[15] !== ee.queryClient
        ? ((r = (0, tD.hS)(ee.queryClient, Z, el, J)),
          (K[12] = Z),
          (K[13] = J),
          (K[14] = el),
          (K[15] = ee.queryClient),
          (K[16] = r))
        : (r = K[16]),
        K[17] !== r ? ((f = { ...r, staleTime: 3e3, refetchInterval: !1 }), (K[17] = r), (K[18] = f)) : (f = K[18]))
      let { data: ed, error: ef, isPending: eh, refetch: em } = (0, eu.I)(f)
      K[19] !== em ? ((p = { mutationFn: () => em({ cancelRefetch: !1 }) }), (K[19] = em), (K[20] = p)) : (p = K[20])
      let { mutate: eg, isPending: eb } = (0, ey.n)(p)
      if (K[21] !== ed || K[22] !== Y.fields) {
        let e
        ;(K[24] !== ed ? ((e = (e) => e.field_key === ed?.field.field_key), (K[24] = ed), (K[25] = e)) : (e = K[25]),
          (m = Y.fields.find(e)),
          (K[21] = ed),
          (K[22] = Y.fields),
          (K[23] = m))
      } else m = K[23]
      let e_ = m ?? ed?.field
      K[26] !== e_ || K[27] !== J || K[28] !== Y.fields
        ? ((g = e_ ?? Y.fields.find((e) => e.current_revision?.flow_id === J)),
          (K[26] = e_),
          (K[27] = J),
          (K[28] = Y.fields),
          (K[29] = g))
        : (g = K[29])
      let ex = g
      K[30] !== ex || K[31] !== J
        ? ((b =
            null != ex && ["phone", "email", "website"].includes(ex.field_key) && ex.current_revision?.flow_id === J),
          (K[30] = ex),
          (K[31] = J),
          (K[32] = b))
        : (b = K[32])
      let ev = b,
        ej = ex?.field_key === "email",
        eA = ex?.field_key === "phone" || ej,
        eC = ex?.field_key === "website"
      ;(K[33] !== eC || K[34] !== ej
        ? ((_ = "phone_otp"), eC ? (_ = "domain") : ej && (_ = "email_otp"), (K[33] = eC), (K[34] = ej), (K[35] = _))
        : (_ = K[35]),
        K[36] !== e_?.verification_actions || K[37] !== e_?.verification_actions.find || K[38] !== _
          ? ((x = e_?.verification_actions.find((e) => e.kind === _)),
            (K[36] = e_?.verification_actions),
            (K[37] = e_?.verification_actions.find),
            (K[38] = _),
            (K[39] = x))
          : (x = K[39]))
      let eS = x,
        ek = e_?.verification_actions.filter(t2) ?? [],
        eI = e_?.current_revision?.id
      ;(K[40] !== ea ? ((y = () => () => ea.cancel()), (K[40] = ea), (K[41] = y)) : (y = K[41]),
        K[42] !== eI || K[43] !== ea ? ((v = [ea, eI]), (K[42] = eI), (K[43] = ea), (K[44] = v)) : (v = K[44]),
        (0, c.useLayoutEffect)(y, v),
        K[45] !== e_?.section || K[46] !== J || K[47] !== Y.capabilities || K[48] !== Y.fields
          ? ((w =
              e_?.section ??
              Y.fields.find((e) => e.current_revision?.flow_id === J)?.section ??
              Y.capabilities.editable_sections[0] ??
              "about"),
            (K[45] = e_?.section),
            (K[46] = J),
            (K[47] = Y.capabilities),
            (K[48] = Y.fields),
            (K[49] = w))
          : (w = K[49]))
      let eP = w,
        eM = ed?.flow.status === "superseded" || (e_?.current_revision != null && e_.current_revision.flow_id !== J)
      K[50] !== ed || K[51] !== ex || K[52] !== J || K[53] !== eM
        ? ((j =
            (null == ed || (0, tD.pM)(ed)) &&
            !eM &&
            ex?.current_revision?.flow_id === J &&
            ex.verification_flow_id === J &&
            !0 === ex.can_cancel_pending),
          (K[50] = ed),
          (K[51] = ex),
          (K[52] = J),
          (K[53] = eM),
          (K[54] = j))
        : (j = K[54])
      let eN = j
      K[55] !== Z || K[56] !== J || K[57] !== el || K[58] !== ee.queryClient || K[59] !== eP
        ? ((C = { mutationFn: () => (0, tw.p)(ee.queryClient, Z, el, J, eP), retry: !1 }),
          (K[55] = Z),
          (K[56] = J),
          (K[57] = el),
          (K[58] = ee.queryClient),
          (K[59] = eP),
          (K[60] = C))
        : (C = K[60])
      let { mutate: eT, isPending: eD, error: eE, data: eq } = (0, ey.n)(C)
      K[61] !== ed || K[62] !== ef
        ? ((k = null != ed && (0, tD.iS)(ef)), (K[61] = ed), (K[62] = ef), (K[63] = k))
        : (k = K[63])
      let eF = k,
        eR =
          (ed?.flow.status === "approved" ||
            (e_?.current_revision?.flow_id === J && e_.approved_revision?.id === e_.current_revision.id)) &&
          !eM &&
          (null == ef || eF)
      K[64] !== et || K[65] !== es || K[66] !== el || K[67] !== ee || K[68] !== eP
        ? ((I = () => {
            ;(ee.get(A.Id).success(et.formatMessage({ id: "businessProfiles.field.saved", defaultMessage: "Saved" })),
              es((0, Q.Ds)(el, `edit/${eP}`), { replace: !0 }))
          }),
          (K[64] = et),
          (K[65] = es),
          (K[66] = el),
          (K[67] = ee),
          (K[68] = eP),
          (K[69] = I))
        : (I = K[69])
      let eL = (0, c.useEffectEvent)(I)
      ;(K[70] !== eR || K[71] !== eD || K[72] !== eL
        ? ((P = () => {
            !eR || eD || en.current || ((en.current = !0), eL())
          }),
          (K[70] = eR),
          (K[71] = eD),
          (K[72] = eL),
          (K[73] = P))
        : (P = K[73]),
        K[74] !== eR || K[75] !== eD ? ((M = [eR, eD]), (K[74] = eR), (K[75] = eD), (K[76] = M)) : (M = K[76]),
        (0, c.useEffect)(P, M),
        K[77] !== Z || K[78] !== Y.fields || K[79] !== el || K[80] !== er || K[81] !== ee
          ? ((N = function (e) {
              ee.queryClient.cancelQueries({ queryKey: er, exact: !0 })
              let s = (0, st.pB)(
                ee,
                Z,
                el,
                e,
                Y.fields.find((s) => s.field_key === e.field.field_key)?.revision,
                "mutation",
              )
              if (null != s) return (ee.queryClient.setQueryData(er, s), s)
            }),
            (K[77] = Z),
            (K[78] = Y.fields),
            (K[79] = el),
            (K[80] = er),
            (K[81] = ee),
            (K[82] = N))
          : (N = K[82]))
      let eO = N
      K[83] !== eN ||
      K[84] !== eo ||
      K[85] !== eT ||
      K[86] !== ev ||
      K[87] !== eD ||
      K[88] !== ex ||
      K[89] !== J ||
      K[90] !== et ||
      K[91] !== es ||
      K[92] !== el ||
      K[93] !== em ||
      K[94] !== ea ||
      K[95] !== ee ||
      K[96] !== eP
        ? ((T = function (e, s) {
            !eN || eD || ee.queryClient.isMutating({ mutationKey: eo }) > 0
              ? s?.()
              : (ea.retireRequests(),
                eT(void 0, {
                  onSuccess: (t) => {
                    let i = () => {
                      ;((en.current = !0),
                        ("approved" === t.flow.status || (null != ex && null != (0, st.f8)(ex, t.flow))) &&
                          ee
                            .get(A.Id)
                            .success(
                              et.formatMessage({
                                id: "businessProfiles.field.publishedBeforeDiscard",
                                defaultMessage: "This edit was already published",
                              }),
                            ),
                        null != e ? e() : es((0, Q.Ds)(el, `edit/${eP}`), { replace: !0 }))
                    }
                    ;(0, st.yt)(t.flow.status)
                      ? ev
                        ? em({ throwOnError: !0, cancelRefetch: !1 }).then(
                            (e) => {
                              e.data?.flow.id !== J ||
                              ((0, tD.pM)(e.data) && e.data.field.verification_actions.length > 0)
                                ? s?.()
                                : i()
                            },
                            () => s?.(),
                          )
                        : s?.()
                      : i()
                  },
                  onError: s,
                }))
          }),
          (K[83] = eN),
          (K[84] = eo),
          (K[85] = eT),
          (K[86] = ev),
          (K[87] = eD),
          (K[88] = ex),
          (K[89] = J),
          (K[90] = et),
          (K[91] = es),
          (K[92] = el),
          (K[93] = em),
          (K[94] = ea),
          (K[95] = ee),
          (K[96] = eP),
          (K[97] = T))
        : (T = K[97])
      let eB = T
      K[98] !== eN ||
      K[99] !== eo ||
      K[100] !== eB ||
      K[101] !== ev ||
      K[102] !== eD ||
      K[103] !== es ||
      K[104] !== el ||
      K[105] !== ee.queryClient ||
      K[106] !== eP
        ? ((D = function () {
            if (!(eD || ee.queryClient.isMutating({ mutationKey: eo }) > 0)) {
              if (ev && eN) return void eB()
              es((0, Q.Ds)(el, `edit/${eP}`))
            }
          }),
          (K[98] = eN),
          (K[99] = eo),
          (K[100] = eB),
          (K[101] = ev),
          (K[102] = eD),
          (K[103] = es),
          (K[104] = el),
          (K[105] = ee.queryClient),
          (K[106] = eP),
          (K[107] = D))
        : (D = K[107])
      let eV = D
      if (
        (K[108] !== Z ||
        K[109] !== eN ||
        K[110] !== ev ||
        K[111] !== J ||
        K[112] !== el ||
        K[113] !== ee.queryClient ||
        K[114] !== eP
          ? ((E = () => {
              if (!eN || !ev) return
              let e = () => {
                en.current || (0, tw.p)(ee.queryClient, Z, el, J, eP, !0).catch(t0)
              }
              return (window.addEventListener("pagehide", e), () => window.removeEventListener("pagehide", e))
            }),
            (K[108] = Z),
            (K[109] = eN),
            (K[110] = ev),
            (K[111] = J),
            (K[112] = el),
            (K[113] = ee.queryClient),
            (K[114] = eP),
            (K[115] = E))
          : (E = K[115]),
        K[116] !== Z ||
        K[117] !== eN ||
        K[118] !== ev ||
        K[119] !== J ||
        K[120] !== el ||
        K[121] !== ee ||
        K[122] !== eP
          ? ((q = [eN, ev, ee, Z, el, J, eP]),
            (K[116] = Z),
            (K[117] = eN),
            (K[118] = ev),
            (K[119] = J),
            (K[120] = el),
            (K[121] = ee),
            (K[122] = eP),
            (K[123] = q))
          : (q = K[123]),
        (0, c.useEffect)(E, q),
        eh)
      ) {
        let e
        ;(K[124] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(ep.Bz, { variant: "form" })), (K[124] = e))
          : (e = K[124]),
          (F = e))
      } else if (null == ef || eF)
        if (null != ed && eM) {
          let e
          ;(K[132] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.superseded",
                  defaultMessage: "This verification is no longer needed because you saved a newer change",
                }),
              })),
              (K[132] = e))
            : (e = K[132]),
            (F = e))
        } else if (eR) {
          let e
          ;(K[133] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, { id: "businessProfiles.field.saved", defaultMessage: "Saved" }),
              })),
              (K[133] = e))
            : (e = K[133]),
            (F = e))
        } else if (null != ed && !(0, tD.pM)(ed) && e_?.latest_failure?.verification_unavailable) {
          let e
          ;(K[134] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.unavailable",
                  defaultMessage: "Something went wrong, please try again",
                }),
              })),
              (K[134] = e))
            : (e = K[134]),
            (F = e))
        } else if (null != ed && (!(0, tD.pM)(ed) || tv()(e_?.pending_revision_id))) {
          let e
          ;(K[135] !== e_
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children:
                  e_?.latest_failure != null
                    ? (0, i.jsx)(tC.R, { failure: e_.latest_failure, fieldKey: e_.field_key })
                    : (0, i.jsx)(d.A, {
                        id: "businessProfiles.verification.inactive",
                        defaultMessage: "This verification has ended; return to your profile to review the change",
                      }),
              })),
              (K[135] = e_),
              (K[136] = e))
            : (e = K[136]),
            (F = e))
        } else if (null != e_ && !e_.can_edit && ek.length > 0) {
          let e
          ;(K[137] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.actionsUnavailable",
                  defaultMessage: "Verification is unavailable right now",
                }),
              })),
              (K[137] = e))
            : (e = K[137]),
            (F = e))
        } else if (null != e_ && e_.can_edit && ek.length > 0) {
          let e
          ;(K[138] !== Z ||
          K[139] !== eO ||
          K[140] !== eV ||
          K[141] !== eN ||
          K[142] !== ec ||
          K[143] !== ed ||
          K[144] !== eB ||
          K[145] !== eD ||
          K[146] !== e_ ||
          K[147] !== J ||
          K[148] !== el ||
          K[149] !== ea ||
          K[150] !== X
            ? ((e = (e) =>
                (0, i.jsx)(
                  tB,
                  {
                    accountId: Z,
                    profileId: el,
                    flowId: J,
                    action: e,
                    requests: ea,
                    verification: ed?.flow.verifications.find((s) => s.id === e.challenge?.id),
                    canChangePhoneNumber: "phone" === e_.field_key,
                    submitContactChallenge: X,
                    onBack: eV,
                    onCancel: "phone_otp" === e.kind && eN ? () => eB() : void 0,
                    backDisabled: eD || ec,
                    backLoading: eD,
                    onResult: eO,
                  },
                  `${e.check_key}:${e.content_revision_id}`,
                )),
              (K[138] = Z),
              (K[139] = eO),
              (K[140] = eV),
              (K[141] = eN),
              (K[142] = ec),
              (K[143] = ed),
              (K[144] = eB),
              (K[145] = eD),
              (K[146] = e_),
              (K[147] = J),
              (K[148] = el),
              (K[149] = ea),
              (K[150] = X),
              (K[151] = e))
            : (e = K[151]),
            (F = ek.map(e)))
        } else {
          let e
          ;(K[152] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(d.A, { id: "businessProfiles.field.saving", defaultMessage: "Saving\u2026" }),
              })),
              (K[152] = e))
            : (e = K[152]),
            (F = e))
        }
      else {
        let e, s, t, n
        ;(K[125] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("p", {
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.loadError",
                defaultMessage: "This verification couldn\u2019t be loaded",
              }),
            })),
            (K[125] = e))
          : (e = K[125]),
          K[126] !== eg ? ((s = () => eg()), (K[126] = eg), (K[127] = s)) : (s = K[127]),
          K[128] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(d.A, { id: "businessProfiles.verification.retryLoad", defaultMessage: "Try again" })),
              (K[128] = t))
            : (t = K[128]),
          K[129] !== eb || K[130] !== s
            ? ((n = (0, i.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                role: "alert",
                children: [
                  e,
                  (0, i.jsx)(ew.d, { size: "formAction", color: "secondary", loading: eb, onClick: s, children: t }),
                ],
              })),
              (K[129] = eb),
              (K[130] = s),
              (K[131] = n))
            : (n = K[131]),
          (F = n))
      }
      ;(K[153] !== Y.fields ? ((R = Y.fields.map(t1)), (K[153] = Y.fields), (K[154] = R)) : (R = K[154]),
        K[155] !== Y || K[156] !== R
          ? ((L = { ...Y, fields: R }), (K[155] = Y), (K[156] = R), (K[157] = L))
          : (L = K[157]))
      let eU = L
      K[158] !== eg || K[159] !== eb || K[160] !== eF
        ? ((O = eF
            ? (0, i.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                role: "status",
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.refreshError",
                      defaultMessage: "Couldn\u2019t refresh this verification. Your progress is still here",
                    }),
                  }),
                  (0, i.jsx)(ew.d, {
                    size: "formAction",
                    color: "secondary",
                    loading: eb,
                    onClick: () => eg(),
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.retryLoad",
                      defaultMessage: "Try again",
                    }),
                  }),
                ],
              })
            : null),
          (K[158] = eg),
          (K[159] = eb),
          (K[160] = eF),
          (K[161] = O))
        : (O = K[161])
      let e$ = O
      if (eA || eC) {
        let e, s, t, n, l, a, r, o, c
        if (
          !eD &&
          !eR &&
          null != ed &&
          e_?.latest_failure == null &&
          ("cancelled" === ed.flow.status || tv()(e_?.pending_revision_id))
        ) {
          let e,
            s,
            t = `edit/${eP}`
          return (
            K[162] !== el || K[163] !== t
              ? ((e = (0, Q.Ds)(el, t)), (K[162] = el), (K[163] = t), (K[164] = e))
              : (e = K[164]),
            K[165] !== e ? ((s = (0, i.jsx)(h.C5, { replace: !0, to: e })), (K[165] = e), (K[166] = s)) : (s = K[166]),
            s
          )
        }
        K[167] !== eR ||
        K[168] !== ed ||
        K[169] !== ef ||
        K[170] !== e_?.can_edit ||
        K[171] !== e_?.pending_revision_id ||
        K[172] !== eF ||
        K[173] !== X ||
        K[174] !== eM ||
        K[175] !== eS
          ? ((e =
              null != eS &&
              null != X &&
              e_?.can_edit &&
              null != ed &&
              (0, tD.pM)(ed) &&
              !tv()(e_?.pending_revision_id) &&
              !eM &&
              !eR &&
              (null == ef || eF)),
            (K[167] = eR),
            (K[168] = ed),
            (K[169] = ef),
            (K[170] = e_?.can_edit),
            (K[171] = e_?.pending_revision_id),
            (K[172] = eF),
            (K[173] = X),
            (K[174] = eM),
            (K[175] = eS),
            (K[176] = e))
          : (e = K[176])
        let u = e,
          f = eA && u && eS?.challenge?.status === "awaiting_response",
          p = eA && u && (eS?.challenge == null || "failed" === eS.challenge.status),
          m = "status"
        K[177] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.phone.title",
              defaultMessage: "Verify your phone number",
            })),
            (K[177] = s))
          : (s = K[177])
        let g = s
        if (ej) {
          let e
          ;(K[178] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.email.title",
                defaultMessage: "Verify your email address",
              })),
              (K[178] = e))
            : (e = K[178]),
            (g = e))
        }
        if (eC) {
          let e
          if (
            (K[179] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.domain.title",
                  defaultMessage: "Verify your website",
                })),
                (K[179] = e))
              : (e = K[179]),
            (g = e),
            u && eS.challenge?.status === "awaiting_response" && null != eS.challenge.domain_record)
          ) {
            let e
            ;((m = "domain"),
              K[180] !== eS.target_label
                ? ((e = (0, i.jsx)(d.A, {
                    id: "businessProfiles.verification.domainDescription",
                    defaultMessage: "Verify {target} by adding this DNS record with your domain provider",
                    values: { target: (0, i.jsx)("bdi", { className: "wrap-anywhere", children: eS.target_label }) },
                  })),
                  (K[180] = eS.target_label),
                  (K[181] = e))
                : (e = K[181]),
              (g = e))
          }
        }
        if (f) {
          let e
          ;((m = "code"),
            K[182] !== ej || K[183] !== eS.target_label
              ? ((e = ej
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.email.codeTitle",
                      defaultMessage: "Enter the verification code sent to {email}",
                      values: {
                        email: (0, i.jsx)("bdi", { className: "block wrap-anywhere", children: eS.target_label }),
                      },
                    })
                  : (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.phone.codeTitle",
                      defaultMessage: "Enter the verification code sent to {phone}",
                      values: { phone: (0, i.jsx)("bdi", { className: "block", children: eS.target_label }) },
                    })),
                (K[182] = ej),
                (K[183] = eS.target_label),
                (K[184] = e))
              : (e = K[184]),
            (g = e))
        } else if (p)
          if (((m = "delivery"), ej)) {
            let e
            ;(K[185] !== Y.profile.display_name
              ? ((e = (0, i.jsx)(d.A, {
                  id: "businessProfiles.verification.email.businessTitle",
                  defaultMessage:
                    "We\u2019ll send a verification code to an email address associated with {businessName}",
                  values: {
                    businessName: (0, i.jsx)("bdi", { className: "wrap-anywhere", children: Y.profile.display_name }),
                  },
                })),
                (K[185] = Y.profile.display_name),
                (K[186] = e))
              : (e = K[186]),
              (g = e))
          } else {
            let e
            ;(K[187] !== eS.destination_channels?.length || K[188] !== eS.target_label
              ? ((e = eS.destination_channels?.length
                  ? (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.phone.deliveryTitle",
                      defaultMessage: "How would you like to receive a verification code at {phone}?",
                      values: { phone: (0, i.jsx)("bdi", { children: eS.target_label }) },
                    })
                  : (0, i.jsx)(d.A, {
                      id: "businessProfiles.verification.phone.sendTitle",
                      defaultMessage: "Send a verification code to {phone}",
                      values: { phone: (0, i.jsx)("bdi", { children: eS.target_label }) },
                    })),
                (K[187] = eS.destination_channels?.length),
                (K[188] = eS.target_label),
                (K[189] = e))
              : (e = K[189]),
              (g = e))
          }
        let b = eD || ec
        ;(K[190] !== eV || K[191] !== eN || K[192] !== eB
          ? ((t = () => {
              eN ? eB() : eV()
            }),
            (K[190] = eV),
            (K[191] = eN),
            (K[192] = eB),
            (K[193] = t))
          : (t = K[193]),
          K[194] !== eN || K[195] !== ei || K[196] !== eB || K[197] !== ev
            ? ((n = null != ei ? (0, i.jsx)(t4, { shouldDiscard: () => ev && eN && !en.current, onLeave: eB }) : null),
              (K[194] = eN),
              (K[195] = ei),
              (K[196] = eB),
              (K[197] = ev),
              (K[198] = n))
            : (n = K[198]),
          K[199] !== eN || K[200] !== eE || K[201] !== eq
            ? ((l =
                null != eE || (null != eq && eN && (0, st.yt)(eq.flow.status))
                  ? (0, i.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.verification.discard.error",
                        defaultMessage: "Couldn\u2019t discard this change. Try again",
                      }),
                    })
                  : null),
              (K[199] = eN),
              (K[200] = eE),
              (K[201] = eq),
              (K[202] = l))
            : (l = K[202]))
        let _ = eD || ec
        return (
          K[203] !== p || K[204] !== ej || K[205] !== Y.profile || K[206] !== eS
            ? ((a =
                ej && p
                  ? (0, i.jsxs)("div", {
                      className:
                        "flex w-full max-w-full min-w-0 items-center gap-2 self-start rounded-xl border border-default p-4 lg:w-fit",
                      children: [
                        (0, i.jsx)("span", {
                          className: "shrink-0 rounded-full ring-1 ring-border",
                          children: (0, i.jsx)(tS.R, { profile: Y.profile }),
                        }),
                        (0, i.jsx)("bdi", {
                          className: "min-w-0 text-sm font-semibold wrap-anywhere",
                          children: eS.target_label,
                        }),
                      ],
                    })
                  : null),
              (K[203] = p),
              (K[204] = ej),
              (K[205] = Y.profile),
              (K[206] = eS),
              (K[207] = a))
            : (a = K[207]),
          K[208] !== F || K[209] !== eD || K[210] !== _ || K[211] !== a
            ? ((r = (0, i.jsxs)("fieldset", {
                className: "flex min-w-0 flex-1 flex-col gap-6 lg:flex-none",
                disabled: _,
                "aria-busy": eD,
                children: [a, F],
              })),
              (K[208] = F),
              (K[209] = eD),
              (K[210] = _),
              (K[211] = a),
              (K[212] = r))
            : (r = K[212]),
          K[213] !== eV || K[214] !== ec || K[215] !== eD || K[216] !== u
            ? ((o = u
                ? null
                : (0, i.jsx)("div", {
                    className: "flex",
                    children: (0, i.jsx)(ew.d, {
                      type: "button",
                      size: "formAction",
                      color: "outlineGhost",
                      radius: "full",
                      disabled: eD || ec,
                      loading: eD,
                      onClick: eV,
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.verification.backToEditor",
                        defaultMessage: "Back to editor",
                      }),
                    }),
                  })),
              (K[213] = eV),
              (K[214] = ec),
              (K[215] = eD),
              (K[216] = u),
              (K[217] = o))
            : (o = K[217]),
          K[218] !== eV ||
          K[219] !== eU ||
          K[220] !== e$ ||
          K[221] !== eP ||
          K[222] !== m ||
          K[223] !== b ||
          K[224] !== t ||
          K[225] !== n ||
          K[226] !== l ||
          K[227] !== r ||
          K[228] !== o ||
          K[229] !== g
            ? ((c = (0, i.jsxs)(tW, {
                manager: eU,
                section: eP,
                stepKey: m,
                title: g,
                busy: b,
                onBack: eV,
                onClose: t,
                children: [n, e$, l, r, o],
              })),
              (K[218] = eV),
              (K[219] = eU),
              (K[220] = e$),
              (K[221] = eP),
              (K[222] = m),
              (K[223] = b),
              (K[224] = t),
              (K[225] = n),
              (K[226] = l),
              (K[227] = r),
              (K[228] = o),
              (K[229] = g),
              (K[230] = c))
            : (c = K[230]),
          c
        )
      }
      return (
        K[231] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, i.jsx)("h2", {
              className: "text-heading-lg font-normal select-none",
              children: (0, i.jsx)(d.A, {
                id: "businessProfiles.verification.title",
                defaultMessage: "Verify your change",
              }),
            })),
            (K[231] = B))
          : (B = K[231]),
        K[232] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, i.jsx)(d.A, {
              id: "businessProfiles.verification.backToEditor",
              defaultMessage: "Back to editor",
            })),
            (K[232] = V))
          : (V = K[232]),
        K[233] !== eV
          ? ((U = (0, i.jsx)(ew.d, { size: "formAction", color: "secondary", onClick: eV, children: V })),
            (K[233] = eV),
            (K[234] = U))
          : (U = K[234]),
        K[235] !== Z ||
        K[236] !== eN ||
        K[237] !== ec ||
        K[238] !== e_ ||
        K[239] !== J ||
        K[240] !== es ||
        K[241] !== el ||
        K[242] !== eP
          ? (($ =
              null != e_
                ? (0, i.jsx)(tj, {
                    accountId: Z,
                    profileId: el,
                    flowId: J,
                    field: e_,
                    canCancel: eN,
                    disabled: ec,
                    onCancelled: () => void es((0, Q.Ds)(el, `edit/${eP}`), { replace: !0 }),
                  })
                : null),
            (K[235] = Z),
            (K[236] = eN),
            (K[237] = ec),
            (K[238] = e_),
            (K[239] = J),
            (K[240] = es),
            (K[241] = el),
            (K[242] = eP),
            (K[243] = $))
          : ($ = K[243]),
        K[244] !== U || K[245] !== $
          ? ((G = (0, i.jsxs)("div", { className: "flex flex-wrap gap-2", children: [U, $] })),
            (K[244] = U),
            (K[245] = $),
            (K[246] = G))
          : (G = K[246]),
        K[247] !== F || K[248] !== e$ || K[249] !== G
          ? ((H = (0, i.jsxs)("div", { className: "flex flex-col gap-6", children: [B, e$, F, G] })),
            (K[247] = F),
            (K[248] = e$),
            (K[249] = G),
            (K[250] = H))
          : (H = K[250]),
        K[251] !== eU || K[252] !== eP || K[253] !== H
          ? ((z = (0, i.jsx)(tA.v, { manager: eU, section: eP, children: H })),
            (K[251] = eU),
            (K[252] = eP),
            (K[253] = H),
            (K[254] = z))
          : (z = K[254]),
        K[255] !== ec || K[256] !== z
          ? ((W = (0, i.jsx)("fieldset", { className: "flex min-h-0 min-w-0 flex-1", disabled: ec, children: z })),
            (K[255] = ec),
            (K[256] = z),
            (K[257] = W))
          : (W = K[257]),
        W
      )
    }
    function t1(e) {
      return (0, en.bD)(e) ? { ...e, preview_value: (0, en.An)(e) } : e
    }
    function t0() {}
    function t2(e) {
      return "strong" !== e.kind
    }
    function t4(e) {
      let s,
        t,
        i,
        l = (0, n.c)(9),
        { shouldDiscard: a, onLeave: r } = e
      l[0] !== a
        ? ((s = (e) => {
            let { currentLocation: s, nextLocation: t } = e
            return s.pathname !== t.pathname && a()
          }),
          (l[0] = a),
          (l[1] = s))
        : (s = l[1])
      let o = (0, h.KP)(s),
        d = (0, c.useEffectEvent)(r)
      return (
        l[2] !== o.proceed || l[3] !== o.reset || l[4] !== o.state || l[5] !== d
          ? ((t = () => {
              "blocked" === o.state && d(o.proceed, o.reset)
            }),
            (l[2] = o.proceed),
            (l[3] = o.reset),
            (l[4] = o.state),
            (l[5] = d),
            (l[6] = t))
          : (t = l[6]),
        l[7] !== o ? ((i = [o]), (l[7] = o), (l[8] = i)) : (i = l[8]),
        (0, c.useEffect)(t, i),
        null
      )
    }
    let t3 = (0, y._)(() =>
        t
          .e(804071)
          .then(t.bind(t, "i5Tz"))
          .then((e) => e.BusinessProfileGetStarted),
      ),
      t5 = (0, y._)(() =>
        t
          .e(422435)
          .then(t.bind(t, "PGyQ"))
          .then((e) => e.BusinessProfileAdAccountsDialog),
      ),
      t6 = (0, y._)(() =>
        t
          .e(422742)
          .then(t.bind(t, "dkdH"))
          .then((e) => e.BusinessProfileAdAccountConnectionSuccess),
      ),
      t7 = (0, y._)(
        () =>
          t
            .e(385541)
            .then(t.bind(t, "dwvY"))
            .then((e) => e.BusinessProfileMembers),
        {
          fallback: ({ adminView: e, dialogOnly: s }) =>
            s ? null : (0, i.jsx)(ep.Bz, { variant: "members", readOnly: null != e }),
        },
      ),
      t9 = (0, y._)(
        () =>
          Promise.all([t.e(857739), t.e(118186), t.e(61375)])
            .then(t.bind(t, "llm4"))
            .then((e) => e.BusinessProfileAgentBuilderEntry),
        {
          fallback: (0, i.jsx)(ep.v4, { variant: "dashboard", section: "agent", withNavigation: !1 }),
          errorFallback: (0, i.jsx)("p", {
            role: "alert",
            children: (0, i.jsx)(d.A, {
              id: "businessProfiles.agentBuilder.loadModuleError",
              defaultMessage: "Couldn\u2019t load Agent builder. Reload the page to try again.",
            }),
          }),
        },
      )
    function t8() {
      t9.prefetch()
    }
    function ie(e) {
      let s,
        t,
        a,
        f,
        y,
        q,
        R,
        B,
        V,
        $,
        G,
        z,
        W,
        K,
        ea,
        er,
        eo,
        ec,
        ed,
        eu,
        ef,
        eh,
        em,
        eg,
        eb,
        e_,
        ex,
        ey,
        ev,
        ew,
        ej,
        eA,
        eC,
        eS,
        ek,
        eI,
        eP,
        eM = (0, n.c)(273),
        { manager: eN, linkedAdAccountId: eT, pendingSection: eD, loadingSection: eE, managerReadsFeedList: eq } = e,
        eF = void 0 !== eE && eE,
        eL = void 0 !== eq && eq,
        eO = (0, o.gh)(S.u),
        eB = (0, u.A)(),
        eV = (0, p.As)(),
        { accountId: eU, userId: e$, email: eG } = eV,
        ez = (0, o.Ul)(N.wE)
      eM[0] !== ez ? ((s = (0, N.Xb)(ez)), (eM[0] = ez), (eM[1] = s)) : (s = eM[1])
      let eW = s,
        eK = null != eW,
        eQ = (0, N.yL)(eN) ? eN : null,
        eZ = ez?.mode ?? "owner",
        eY = (0, o._U)(k.JW, P.iL),
        eX = (0, o._U)(k.JW, P.eA),
        e1 = eK || eY,
        e0 = (0, C.U)(e1 ? "(width < 48rem)" : null),
        [e2] = (0, h.ok)(),
        e3 = (0, h.zy)(),
        e5 = (0, h.Zp)(),
        { section: e6, flowId: e7 } = (0, h.g)(),
        e9 = (0, h.RQ)(`${P.CM}/:profileId/*`)?.params["*"] ?? "",
        e8 = "insights" === e9 || "members" === e9 || "products" === e9,
        { profile: se, capabilities: ss } = eN
      eM[2] !== eQ?.profile || eM[3] !== eK
        ? ((t = !eK && (0, el.o)(eQ?.profile)), (eM[2] = eQ?.profile), (eM[3] = eK), (eM[4] = t))
        : (t = eM[4])
      let st = t,
        [si, sn] = (0, c.useState)(!1),
        [sl, sa] = (0, c.useState)(null),
        sr = !eK && se.can_manage_members && null != eU,
        sc = sl?.profileId === se.business_profile_id && sl.accountId === eU ? sl.trigger : null
      eM[5] !== sr || eM[6] !== sc || eM[7] !== e5 || eM[8] !== se.business_profile_id || eM[9] !== e9
        ? ((a =
            sr && (null != sc || "members" === e9)
              ? {
                  trigger: sc,
                  onClose: () => {
                    ;(sa(null), "members" === e9 && e5((0, Q.Ds)(se.business_profile_id, "insights"), { replace: !0 }))
                  },
                }
              : void 0),
          (eM[5] = sr),
          (eM[6] = sc),
          (eM[7] = e5),
          (eM[8] = se.business_profile_id),
          (eM[9] = e9),
          (eM[10] = a))
        : (a = eM[10])
      let sd = a
      eM[11] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (eM[11] = f)) : (f = eM[11])
      let [su, sf] = (0, c.useState)(f),
        [sh, sp] = (0, c.useState)(null),
        sm = (0, o.Ul)(O.Vq),
        sg = (0, c.useRef)(null)
      eM[12] !== eU ||
      eM[13] !== eG ||
      eM[14] !== e8 ||
      eM[15] !== st ||
      eM[16] !== se ||
      eM[17] !== eK ||
      eM[18] !== e$
        ? ((y = e8 && !eK && !st && (0, H.Rb)(se, eG) && null != eU && null != e$),
          (eM[12] = eU),
          (eM[13] = eG),
          (eM[14] = e8),
          (eM[15] = st),
          (eM[16] = se),
          (eM[17] = eK),
          (eM[18] = e$),
          (eM[19] = y))
        : (y = eM[19])
      let sb = y
      ;(eM[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = () => () => sg.current?.abort()), (eM[20] = q))
        : (q = eM[20]),
        eM[21] !== eU ||
        eM[22] !== eY ||
        eM[23] !== eV.isLoading ||
        eM[24] !== sb ||
        eM[25] !== e3.key ||
        eM[26] !== se.business_profile_id ||
        eM[27] !== e$
          ? ((R = [eU, e$, se.business_profile_id, sb, eY, eV.isLoading, e3.key]),
            (eM[21] = eU),
            (eM[22] = eY),
            (eM[23] = eV.isLoading),
            (eM[24] = sb),
            (eM[25] = e3.key),
            (eM[26] = se.business_profile_id),
            (eM[27] = e$),
            (eM[28] = R))
          : (R = eM[28]),
        (0, c.useEffect)(q, R),
        eM[29] !== eU ||
        eM[30] !== eY ||
        eM[31] !== eV.isLoading ||
        eM[32] !== sb ||
        eM[33] !== e3.key ||
        eM[34] !== se.business_profile_id ||
        eM[35] !== e$
          ? ((B = (e, s, t) => {
              !s.signal.aborted &&
                sg.current === s &&
                t === e3.key &&
                !eV.isLoading &&
                sb &&
                eY &&
                e.accountId === eU &&
                e.userId === e$ &&
                e.profileId === se.business_profile_id &&
                (function (e) {
                  try {
                    let s = E(e)
                    if (null != localStorage.getItem(s)) return !1
                    return (localStorage.setItem(s, "1"), !0)
                  } catch {
                    return !1
                  }
                })(e) &&
                sp(e)
            }),
            (eM[29] = eU),
            (eM[30] = eY),
            (eM[31] = eV.isLoading),
            (eM[32] = sb),
            (eM[33] = e3.key),
            (eM[34] = se.business_profile_id),
            (eM[35] = e$),
            (eM[36] = B))
          : (B = eM[36]))
      let s_ = (0, I.K)(B)
      eM[37] !== eU ||
      eM[38] !== eY ||
      eM[39] !== eV.isLoading ||
      eM[40] !== sb ||
      eM[41] !== e3.key ||
      eM[42] !== s_ ||
      eM[43] !== se.business_profile_id ||
      eM[44] !== eO ||
      eM[45] !== e$
        ? ((V = (e) => {
            if (
              !eV.isLoading &&
              sb &&
              null != eU &&
              null != e$ &&
              e.businessProfileId === se.business_profile_id &&
              (sg.current?.abort(),
              (0, O.D$)(eO),
              sp(null),
              eO
                .get(A.Id)
                .success(
                  (0, i.jsx)(d.A, {
                    id: "businessProfiles.adAccounts.success.toast",
                    defaultMessage: "Ad account linked",
                  }),
                  { id: "business-profile-ad-account-linked" },
                ),
              eY)
            ) {
              let s = { accountId: eU, userId: e$, profileId: e.businessProfileId },
                t = new AbortController(),
                i = e3.key
              ;((sg.current = t),
                (async function (e, s) {
                  let { accountId: t, userId: i, profileId: n } = e
                  try {
                    if ((s.throwIfAborted(), null != localStorage.getItem(E(e)))) return !1
                    await T.Request.safeGet("/shopping/business-profiles/{business_profile_id}/agent-builder/v2", {
                      additionalHeaders: { "ChatGPT-Account-ID": t },
                      expectedIdentity: { accountId: t, userId: i },
                      parameters: { path: { business_profile_id: n }, query: { include_preparation: !1 } },
                      expectedErrorStatuses: [401, 403, 404, 409, 429, 503],
                      retry: "never",
                      cache: "no-store",
                      signal: AbortSignal.any([s, AbortSignal.timeout(2e4)]),
                    })
                  } catch (e) {
                    return (
                      !s.aborted &&
                      e instanceof D.FetchError &&
                      409 === e.status &&
                      "agent_not_configured" === e.errorCode
                    )
                  }
                  return !1
                })(s, t.signal).then((e) => {
                  e && s_(s, t, i)
                }))
            }
          }),
          (eM[37] = eU),
          (eM[38] = eY),
          (eM[39] = eV.isLoading),
          (eM[40] = sb),
          (eM[41] = e3.key),
          (eM[42] = s_),
          (eM[43] = se.business_profile_id),
          (eM[44] = eO),
          (eM[45] = e$),
          (eM[46] = V))
        : (V = eM[46])
      let sx = (0, I.K)(V),
        sy = eK || se.can_manage_members,
        sv = ss.editable_sections
      if (
        (eM[47] !== eN.available_sections || eM[48] !== eN.fields
          ? (($ = eN.available_sections ?? eN.fields.map(is)),
            (eM[47] = eN.available_sections),
            (eM[48] = eN.fields),
            (eM[49] = $))
          : ($ = eM[49]),
        eM[50] !== eZ ||
          eM[51] !== e1 ||
          eM[52] !== sy ||
          eM[53] !== ss.editable_sections ||
          eM[54] !== e7 ||
          eM[55] !== eN ||
          eM[56] !== eL ||
          eM[57] !== eQ ||
          eM[58] !== st ||
          eM[59] !== se.business_profile_id ||
          eM[60] !== eK ||
          eM[61] !== e2 ||
          eM[62] !== e6 ||
          eM[63] !== e9 ||
          eM[64] !== $)
      ) {
        K = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            s = [...sv, ...$]
          if (
            (eM[69] !== e6 ? ((e = (e) => e === e6), (eM[69] = e6), (eM[70] = e)) : (e = eM[70]),
            (z = M._I.find(e)),
            (G = "insights"),
            "members" === e9 && eK ? (G = "members") : "products" === e9 && (G = "products"),
            !eK && null == eQ)
          ) {
            let e
            ;(eM[71] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s9.CV, {})), (eM[71] = e))
              : (e = eM[71]),
              (K = e))
            break e
          }
          if (
            (st && (null != e6 || null != e7)) ||
            ("agent" === e9 && !e1) ||
            ("members" === e9 && !sy) ||
            (eK && null != e7) ||
            "" === e9 ||
            "dashboard" === e9 ||
            "chats" === e9 ||
            e9.startsWith("chats/") ||
            (null != e6 && (null == z || !(0, Q.Ys)(eN, z) || !s.includes(z)))
          ) {
            let e, s
            ;(eM[72] !== eZ || eM[73] !== se.business_profile_id
              ? ((e = (0, Q.Ds)(se.business_profile_id, "insights", eZ)),
                (eM[72] = eZ),
                (eM[73] = se.business_profile_id),
                (eM[74] = e))
              : (e = eM[74]),
              eM[75] !== e
                ? ((s = (0, i.jsx)(h.C5, { replace: !0, to: e })), (eM[75] = e), (eM[76] = s))
                : (s = eM[76]),
              (K = s))
            break e
          }
          if (null != e7 && null != eQ) {
            let e
            ;(eM[77] !== e7 || eM[78] !== eQ
              ? ((e = (0, i.jsx)(tJ, { manager: eQ, flowId: e7, submitContactChallenge: es }, e7)),
                (eM[77] = e7),
                (eM[78] = eQ),
                (eM[79] = e))
              : (e = eM[79]),
              (K = e))
            break e
          }
          if (
            !eK &&
            !st &&
            null != eQ &&
            "products" === G &&
            "1" !== e2.get("add") &&
            ("1" === e2.get("upload") || "1" === e2.get("sftp") || "1" === e2.get("hosted"))
          ) {
            let e
            ;(eM[80] !== eL || eM[81] !== eQ
              ? ((e = (0, i.jsx)(s0, { manager: eQ, managerReadsFeedList: eL })),
                (eM[80] = eL),
                (eM[81] = eQ),
                (eM[82] = e))
              : (e = eM[82]),
              (K = e))
            break e
          }
          W = s.includes("about") ? "about" : s.find((e) => "photos" !== e && (0, Q.Ys)(eN, e))
        }
        ;((eM[50] = eZ),
          (eM[51] = e1),
          (eM[52] = sy),
          (eM[53] = ss.editable_sections),
          (eM[54] = e7),
          (eM[55] = eN),
          (eM[56] = eL),
          (eM[57] = eQ),
          (eM[58] = st),
          (eM[59] = se.business_profile_id),
          (eM[60] = eK),
          (eM[61] = e2),
          (eM[62] = e6),
          (eM[63] = e9),
          (eM[64] = $),
          (eM[65] = G),
          (eM[66] = z),
          (eM[67] = W),
          (eM[68] = K))
      } else ((G = eM[65]), (z = eM[66]), (W = eM[67]), (K = eM[68]))
      if (K !== Symbol.for("react.early_return_sentinel")) return K
      let sw = W
      eM[83] !== eW || eM[84] !== st || eM[85] !== se.business_profile_id
        ? ((ea = st ? null : (0, i.jsx)(e4, { profileId: se.business_profile_id, adminView: eW }, "health")),
          (eM[83] = eW),
          (eM[84] = st),
          (eM[85] = se.business_profile_id),
          (eM[86] = ea))
        : (ea = eM[86])
      let sj = ea,
        sA = e1 ? null : sj
      eM[87] !== sA
        ? ((er = (0, i.jsx)("span", {
            className: "flex items-center gap-1.5",
            children: (0, i.jsx)(d.A, {
              id: "businessProfiles.productsWithHealth",
              defaultMessage: "Products {health}",
              values: { health: sA },
            }),
          })),
          (eM[87] = sA),
          (eM[88] = er))
        : (er = eM[88])
      let sC = er
      eM[89] !== eK
        ? ((eo = eK ? (0, i.jsx)(d.A, { ...s8.v.admins }) : null), (eM[89] = eK), (eM[90] = eo))
        : (eo = eM[90])
      let sS = eo
      eM[91] !== eZ ||
      eM[92] !== G ||
      eM[93] !== e1 ||
      eM[94] !== eB ||
      eM[95] !== sS ||
      eM[96] !== e5 ||
      eM[97] !== sC ||
      eM[98] !== se.business_profile_id
        ? ((ec = e1
            ? null
            : (0, i.jsx)(j.t, {
                className: "shrink-0",
                tabs: [
                  { key: "insights", name: (0, i.jsx)(d.A, { ...it.insights }) },
                  ...(null == sS ? [] : [{ key: "members", name: sS }]),
                  { key: "products", name: sC },
                ],
                selectedKey: G,
                onSelect: (e) => void e5((0, Q.Ds)(se.business_profile_id, e, eZ)),
                variant: "segmentedPill",
                scrollable: !0,
                ariaLabel: eB.formatMessage({
                  id: "businessProfiles.navigationLabel",
                  defaultMessage: "Business navigation",
                }),
              })),
          (eM[91] = eZ),
          (eM[92] = G),
          (eM[93] = e1),
          (eM[94] = eB),
          (eM[95] = sS),
          (eM[96] = e5),
          (eM[97] = sC),
          (eM[98] = se.business_profile_id),
          (eM[99] = ec))
        : (ec = eM[99])
      let sk = ec,
        sI = null
      if ("members" === G) {
        let e
        ;(eM[100] !== eW || eM[101] !== se.business_profile_id
          ? ((e = (0, i.jsx)(t7, { profileId: se.business_profile_id, adminView: eW })),
            (eM[100] = eW),
            (eM[101] = se.business_profile_id),
            (eM[102] = e))
          : (e = eM[102]),
          (sI = e))
      } else if ("products" === G) {
        if (null != eW) {
          let e
          ;(eM[103] !== eW || eM[104] !== eN
            ? ((e = (0, i.jsx)(s0, { manager: eN, adminView: eW })), (eM[103] = eW), (eM[104] = eN), (eM[105] = e))
            : (e = eM[105]),
            (sI = e))
        } else if (null != eQ) {
          let e
          ;(eM[106] !== eL || eM[107] !== eQ
            ? ((e = (0, i.jsx)(s0, { manager: eQ, managerReadsFeedList: eL })),
              (eM[106] = eL),
              (eM[107] = eQ),
              (eM[108] = e))
            : (e = eM[108]),
            (sI = e))
        }
      }
      let sP = !eK && (st || ss.editable_sections.length > 0)
      eM[109] !== sP || eM[110] !== eB
        ? ((ed = eB.formatMessage(sP ? it.editBusinessDetails : it.viewBusinessDetails)),
          (eM[109] = sP),
          (eM[110] = eB),
          (eM[111] = ed))
        : (ed = eM[111])
      let sM = ed,
        sN = sP ? x.AdZ : x.Q1h
      eM[112] !== sN ||
      eM[113] !== eZ ||
      eM[114] !== e0 ||
      eM[115] !== sM ||
      eM[116] !== z ||
      eM[117] !== sw ||
      eM[118] !== e5 ||
      eM[119] !== st ||
      eM[120] !== se.business_profile_id ||
      eM[121] !== e9
        ? ((eu =
            (st || null != sw) && "agent" !== e9
              ? (0, i.jsxs)(g.$, {
                  size: e0 ? "iconCircleLg" : "formAction",
                  color: "outlineGhost",
                  radius: "full",
                  className: "relative tracking-[-0.15px]",
                  disabled: null != z,
                  disabledAppearance: "unchanged",
                  "aria-busy": null != z,
                  "aria-haspopup": st ? "dialog" : void 0,
                  "aria-label": e0 ? sM : void 0,
                  onClick: () => {
                    st ? sn(!0) : null != sw && e5((0, Q.Ds)(se.business_profile_id, `edit/${sw}`, eZ))
                  },
                  children: [
                    (0, i.jsx)("span", {
                      className: null == z ? void 0 : "opacity-0",
                      children: e0 ? (0, i.jsx)(sN, {}) : sM,
                    }),
                    null != z
                      ? (0, i.jsx)("span", {
                          "aria-hidden": !0,
                          className: "absolute inset-0 flex items-center justify-center",
                          children: (0, i.jsx)(w.y, { as: "span", className: "icon-sm" }),
                        })
                      : null,
                  ],
                })
              : null),
          (eM[112] = sN),
          (eM[113] = eZ),
          (eM[114] = e0),
          (eM[115] = sM),
          (eM[116] = z),
          (eM[117] = sw),
          (eM[118] = e5),
          (eM[119] = st),
          (eM[120] = se.business_profile_id),
          (eM[121] = e9),
          (eM[122] = eu))
        : (eu = eM[122])
      let sT = eu
      eM[123] !== G || eM[124] !== st || eM[125] !== e2
        ? ((ef = !st && "products" === G && (null == e2.get("feed") || "1" === e2.get("add"))),
          (eM[123] = G),
          (eM[124] = st),
          (eM[125] = e2),
          (eM[126] = ef))
        : (ef = eM[126])
      let sD = ef
      eM[127] !== eU ||
      eM[128] !== e0 ||
      eM[129] !== st ||
      eM[130] !== sD ||
      eM[131] !== se.business_profile_id ||
      eM[132] !== se.can_manage ||
      eM[133] !== eK ||
      eM[134] !== e$
        ? ((eh =
            eK || st || !se.can_manage
              ? null
              : (0, i.jsx)(t_, { compact: e0 || sD }, `${eU}:${e$}:${se.business_profile_id}`)),
          (eM[127] = eU),
          (eM[128] = e0),
          (eM[129] = st),
          (eM[130] = sD),
          (eM[131] = se.business_profile_id),
          (eM[132] = se.can_manage),
          (eM[133] = eK),
          (eM[134] = e$),
          (eM[135] = eh))
        : (eh = eM[135])
      let sE = eh
      eM[136] !== eU ||
      eM[137] !== eV.isLoading ||
      eM[138] !== se.business_profile_id ||
      eM[139] !== eO ||
      eM[140] !== e$
        ? ((em = () => {
            if ((sg.current?.abort(), sp(null), null == eU || null == e$ || eV.isLoading)) return
            let e = { accountId: eU, userId: e$, profileId: se.business_profile_id }
            if (!t5.isLoaded()) {
              let s = eO.get(k.JW, F.oD),
                t = { authority: e, separateConnectionRecovery: s }
              ;(eO.queryClient.prefetchQuery(eO.query.getOptions(L.fI, t)),
                s && eO.queryClient.prefetchQuery(eO.query.getOptions(L.c6, t)))
            }
            eO.set(O.Vq, { authority: e, confirming: !1 })
          }),
          (eM[136] = eU),
          (eM[137] = eV.isLoading),
          (eM[138] = se.business_profile_id),
          (eM[139] = eO),
          (eM[140] = e$),
          (eM[141] = em))
        : (em = eM[141])
      let sq = em
      eM[142] !== eU ||
      eM[143] !== sb ||
      eM[144] !== sr ||
      eM[145] !== ss.can_manage_ad_accounts ||
      eM[146] !== e0 ||
      eM[147] !== eX ||
      eM[148] !== sd ||
      eM[149] !== sq ||
      eM[150] !== st ||
      eM[151] !== sD ||
      eM[152] !== se.business_profile_id ||
      eM[153] !== se.creation_status ||
      eM[154] !== eK ||
      eM[155] !== sE
        ? ((eg = eK
            ? null
            : (0, i.jsxs)("div", {
                className: "flex shrink-0 items-center gap-2",
                children: [
                  sr &&
                    (0, i.jsxs)(g.$, {
                      color: "ghostActive",
                      size: "dialog",
                      className: "gap-1.5 text-[14px] leading-5 tracking-[-0.15px]",
                      radius: "full",
                      "aria-haspopup": "dialog",
                      onClick: (e) =>
                        sa({ accountId: eU, profileId: se.business_profile_id, trigger: e.currentTarget }),
                      children: [
                        (0, i.jsx)(_.I, { asset: r }),
                        (0, i.jsx)(d.A, { id: "businessProfiles.members.header.invite", defaultMessage: "Invite" }),
                      ],
                    }),
                  null != sd && (0, i.jsx)(t7, { profileId: se.business_profile_id, headerInvite: sd, dialogOnly: !0 }),
                  sb &&
                    !0 === ss.can_manage_ad_accounts &&
                    (0, i.jsxs)(g.$, {
                      type: "button",
                      color: "ghostActive",
                      size: "entityRowAction",
                      onClick: sq,
                      children: [
                        (0, i.jsx)(_.I, { asset: l.T }),
                        (0, i.jsx)(d.A, {
                          id: "businessProfiles.adAccounts.manageTitle",
                          defaultMessage: "Manage ad accounts",
                        }),
                      ],
                    }),
                  (e0 || sD) && sE,
                  (0, i.jsx)(X.H, { profileId: se.business_profile_id, checkDraft: !1 }, se.business_profile_id),
                ],
              })),
          (eM[142] = eU),
          (eM[143] = sb),
          (eM[144] = sr),
          (eM[145] = ss.can_manage_ad_accounts),
          (eM[146] = e0),
          (eM[147] = eX),
          (eM[148] = sd),
          (eM[149] = sq),
          (eM[150] = st),
          (eM[151] = sD),
          (eM[152] = se.business_profile_id),
          (eM[153] = se.creation_status),
          (eM[154] = eK),
          (eM[155] = sE),
          (eM[156] = eg))
        : (eg = eM[156])
      let sF = eg
      eM[157] !== eN
        ? ((eb = (function (e) {
            let s = (0, el.a)(e.profile)
            if ("ecommerce" === s) {
              let s =
                  e.fields.find((e) => "website" === e.field_key)?.preview_value?.trim() ||
                  e.profile.website_url?.trim(),
                t = ei.Qo.safeParse(s)
              return t.success ? { text: new URL(t.data).hostname.replace(/^www\./, ""), href: t.data } : null
            }
            if ("local_business" !== s) return null
            let t =
              e.fields.find((e) => "address" === e.field_key)?.preview_value?.trim() ||
              e.profile.display_address?.trim()
            if (!t) return null
            let i = (0, en.oR)(t, en.Tq)
            return null == i
              ? t.startsWith("{") || t.startsWith("[")
                ? null
                : t
              : [
                  i.line1.trim(),
                  i.line2.trim(),
                  [i.city, i.region, i.postal_code]
                    .map((e) => e.trim())
                    .filter((e) => "" !== e)
                    .join(" "),
                ]
                  .filter((e) => "" !== e)
                  .join(", ") || null
          })(eN)),
          (eM[157] = eN),
          (eM[158] = eb))
        : (eb = eM[158])
      let sR = eb
      eM[159] !== eU ||
      eM[160] !== e1 ||
      eM[161] !== sb ||
      eM[162] !== su ||
      eM[163] !== eT ||
      eM[164] !== sq ||
      eM[165] !== eQ ||
      eM[166] !== eK ||
      eM[167] !== e9
        ? ((e_ =
            eK || "insights" !== e9 || null == eQ || null == eU
              ? null
              : (0, i.jsx)(t3, {
                  accountId: eU,
                  manager: eQ,
                  linkedAdAccountId: eT,
                  agentBuilderEnabled: e1,
                  dismissed: su,
                  onManageAdAccounts: sb ? sq : void 0,
                  onDismiss: (e) => sf((s) => [...s, e]),
                })),
          (eM[159] = eU),
          (eM[160] = e1),
          (eM[161] = sb),
          (eM[162] = su),
          (eM[163] = eT),
          (eM[164] = sq),
          (eM[165] = eQ),
          (eM[166] = eK),
          (eM[167] = e9),
          (eM[168] = e_))
        : (e_ = eM[168])
      let sL = e_,
        sO = sD ? "extraWide" : "profile",
        sB = eK && !sD,
        sV = eK ? "inset" : "edge"
      ;(eM[169] !== eK
        ? ((ex = eK
            ? (0, i.jsx)(m.l, {
                type: "infoAccent",
                density: "compact",
                content: (0, i.jsx)(d.A, {
                  id: "businessProfiles.adminView.readOnly",
                  defaultMessage: "Admin view \xb7 Read only",
                }),
              })
            : void 0),
          (eM[169] = eK),
          (eM[170] = ex))
        : (ex = eM[170]),
        eM[171] !== e0 ||
        eM[172] !== sT ||
        eM[173] !== eN ||
        eM[174] !== st ||
        eM[175] !== sD ||
        eM[176] !== sE ||
        eM[177] !== sR ||
        eM[178] !== e9
          ? ((ey = sD
              ? null
              : (0, i.jsx)(eH.Z, {
                  image: "insights" === e9 ? (0, i.jsx)(et.S, { manager: eN }) : void 0,
                  title: (0, i.jsx)(et.c, { manager: eN, overview: !0, pendingCreation: st }),
                  subtitle:
                    sR &&
                    ("string" == typeof sR
                      ? (0, i.jsx)("span", { className: "break-words select-text", children: sR })
                      : (0, i.jsx)(b.G, {
                          appearance: "inherit",
                          className: "break-words select-text",
                          href: sR.href,
                          initiator: "external_link",
                          openAsWebsite: !0,
                          underline: "hover",
                          children: sR.text,
                        })),
                  action:
                    e0 || (null == sT && null == sE)
                      ? null
                      : (0, i.jsxs)("div", {
                          className: "ms-auto flex shrink-0 items-center gap-3",
                          children: [sT, sE],
                        }),
                })),
            (eM[171] = e0),
            (eM[172] = sT),
            (eM[173] = eN),
            (eM[174] = st),
            (eM[175] = sD),
            (eM[176] = sE),
            (eM[177] = sR),
            (eM[178] = e9),
            (eM[179] = ey))
          : (ey = eM[179]),
        eM[180] !== eU ||
        eM[181] !== G ||
        eM[182] !== eW ||
        eM[183] !== sI ||
        eM[184] !== eN ||
        eM[185] !== eQ ||
        eM[186] !== st ||
        eM[187] !== sD ||
        eM[188] !== se ||
        eM[189] !== sL ||
        eM[190] !== eK ||
        eM[191] !== e9 ||
        eM[192] !== sk
          ? ((ev =
              st && "members" !== G
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      sk,
                      (0, i.jsx)(eJ, {
                        isEcommerce: "ecommerce" === (0, el.a)(se),
                        section: "agent" === e9 ? "agent" : G,
                        underReview: "under_review" === se.creation_status,
                        promotions: sL,
                        onVerify: () => sn(!0),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      eK || "insights" !== e9
                        ? null
                        : (0, i.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-6 empty:hidden",
                            children: [
                              !st &&
                                null != eQ &&
                                null != eU &&
                                eQ.capabilities.requires_business_verification &&
                                (0, i.jsx)(so, { accountId: eU, manager: eQ }),
                              sL,
                            ],
                          }),
                      eK || "insights" === e9 || sD ? null : (0, i.jsx)(Z, { profileId: se.business_profile_id }),
                      (0, i.jsxs)("div", {
                        className: "flex min-w-0 flex-col gap-6",
                        children: [
                          sk,
                          sI,
                          (0, i.jsx)(eR, {
                            businessProfileId: se.business_profile_id,
                            manager: eN,
                            active: "insights" === G && "members" !== e9,
                            adminView: eW,
                          }),
                        ],
                      }),
                    ],
                  })),
            (eM[180] = eU),
            (eM[181] = G),
            (eM[182] = eW),
            (eM[183] = sI),
            (eM[184] = eN),
            (eM[185] = eQ),
            (eM[186] = st),
            (eM[187] = sD),
            (eM[188] = se),
            (eM[189] = sL),
            (eM[190] = eK),
            (eM[191] = e9),
            (eM[192] = sk),
            (eM[193] = ev))
          : (ev = eM[193]),
        eM[194] !== ey || eM[195] !== ev
          ? ((ew = (0, i.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-8 select-none",
              children: [ey, ev],
            })),
            (eM[194] = ey),
            (eM[195] = ev),
            (eM[196] = ew))
          : (ew = eM[196]),
        eM[197] !== eU ||
        eM[198] !== eQ ||
        eM[199] !== st ||
        eM[200] !== se.business_profile_id ||
        eM[201] !== e$ ||
        eM[202] !== si
          ? ((ej =
              st &&
              si &&
              null != eQ &&
              null != eU &&
              null != e$ &&
              (0, i.jsx)(
                ee.z,
                { manager: eQ, accountId: eU, onExit: () => sn(!1) },
                `${eU}:${e$}:${se.business_profile_id}`,
              )),
            (eM[197] = eU),
            (eM[198] = eQ),
            (eM[199] = st),
            (eM[200] = se.business_profile_id),
            (eM[201] = e$),
            (eM[202] = si),
            (eM[203] = ej))
          : (ej = eM[203]),
        eM[204] !== eU ||
        eM[205] !== sm ||
        eM[206] !== sb ||
        eM[207] !== sh ||
        eM[208] !== sx ||
        eM[209] !== eQ ||
        eM[210] !== se.business_profile_id ||
        eM[211] !== e$
          ? ((eA =
              sb &&
              null != eQ &&
              null != eU &&
              null != e$ &&
              (0, i.jsx)(
                U,
                {
                  manager: eQ,
                  authority: { accountId: eU, userId: e$, profileId: se.business_profile_id },
                  manualDialogOpen: null != sm || null != sh,
                  onConnected: sx,
                },
                `${eU}:${e$}:${se.business_profile_id}`,
              )),
            (eM[204] = eU),
            (eM[205] = sm),
            (eM[206] = sb),
            (eM[207] = sh),
            (eM[208] = sx),
            (eM[209] = eQ),
            (eM[210] = se.business_profile_id),
            (eM[211] = e$),
            (eM[212] = eA))
          : (eA = eM[212]),
        eM[213] !== eU ||
        eM[214] !== sm ||
        eM[215] !== sb ||
        eM[216] !== sx ||
        eM[217] !== eQ ||
        eM[218] !== se.business_profile_id ||
        eM[219] !== eO ||
        eM[220] !== e$
          ? ((eC =
              null != sm &&
              sm.authority.accountId === eU &&
              sm.authority.userId === e$ &&
              sm.authority.profileId === se.business_profile_id &&
              sb &&
              null != eQ &&
              null != eU &&
              null != e$ &&
              (0, i.jsx)(
                t5,
                {
                  manager: eQ,
                  authority: { accountId: eU, userId: e$, profileId: se.business_profile_id },
                  preferredAdAccountId: sm.preferredAdAccountId,
                  resumedFromSignIn: sm.resumedFromSignIn,
                  onClose: () => (0, O.D$)(eO),
                  onConnected: sx,
                },
                `${eU}:${e$}:${se.business_profile_id}`,
              )),
            (eM[213] = eU),
            (eM[214] = sm),
            (eM[215] = sb),
            (eM[216] = sx),
            (eM[217] = eQ),
            (eM[218] = se.business_profile_id),
            (eM[219] = eO),
            (eM[220] = e$),
            (eM[221] = eC))
          : (eC = eM[221]),
        eM[222] !== eU ||
        eM[223] !== eY ||
        eM[224] !== sb ||
        eM[225] !== sh ||
        eM[226] !== e5 ||
        eM[227] !== se.business_profile_id ||
        eM[228] !== e$
          ? ((eS =
              sb &&
              eY &&
              sh?.accountId === eU &&
              sh.userId === e$ &&
              sh.profileId === se.business_profile_id &&
              (0, i.jsx)(t6, {
                onClose: () => sp(null),
                onBuildAgent: () => {
                  ;(sp(null), e5((0, Q.Ds)(se.business_profile_id, "agent")))
                },
              })),
            (eM[222] = eU),
            (eM[223] = eY),
            (eM[224] = sb),
            (eM[225] = sh),
            (eM[226] = e5),
            (eM[227] = se.business_profile_id),
            (eM[228] = e$),
            (eM[229] = eS))
          : (eS = eM[229]),
        eM[230] !== sO ||
        eM[231] !== sB ||
        eM[232] !== sV ||
        eM[233] !== ex ||
        eM[234] !== ew ||
        eM[235] !== ej ||
        eM[236] !== eA ||
        eM[237] !== eC ||
        eM[238] !== eS
          ? ((ek = (0, i.jsxs)(v.Ql, {
              animateContentLayout: !1,
              contentWidth: sO,
              headerPlacement: "none",
              horizontalPaddingClassName: "px-6 md:px-12",
              contentClassName: "pt-4 md:pb-12",
              headerVariant: "profileManager",
              balanceScrollbarGutter: sB,
              title: null,
              bannerPlacement: sV,
              contentInset: !1,
              banner: ex,
              children: [ew, ej, eA, eC, eS],
            })),
            (eM[230] = sO),
            (eM[231] = sB),
            (eM[232] = sV),
            (eM[233] = ex),
            (eM[234] = ew),
            (eM[235] = ej),
            (eM[236] = eA),
            (eM[237] = eC),
            (eM[238] = eS),
            (eM[239] = ek))
          : (ek = eM[239]))
      let sU = ek
      if ("agent" === e9) {
        let e,
          s,
          t = !eK && !st
        return (
          eM[240] !== eN || eM[241] !== sU || eM[242] !== st
            ? ((e = st
                ? sU
                : (0, i.jsx)(t9, {
                    manager: eN,
                    loadingContent: sU,
                    loadingFallback: (0, i.jsx)(ep.v4, { variant: "dashboard", section: "agent", withNavigation: !1 }),
                  })),
              (eM[240] = eN),
              (eM[241] = sU),
              (eM[242] = st),
              (eM[243] = e))
            : (e = eM[243]),
          eM[244] !== e0 ||
          eM[245] !== sS ||
          eM[246] !== sj ||
          eM[247] !== sC ||
          eM[248] !== se.business_profile_id ||
          eM[249] !== t ||
          eM[250] !== e
            ? ((s = (0, i.jsx)(Y.k, {
                profileId: se.business_profile_id,
                hasPageToolbar: !0,
                retainPanels: t,
                active: "agent",
                compact: e0,
                productsLabel: sC,
                productsStatus: sj,
                membersLabel: sS,
                children: e,
              })),
              (eM[244] = e0),
              (eM[245] = sS),
              (eM[246] = sj),
              (eM[247] = sC),
              (eM[248] = se.business_profile_id),
              (eM[249] = t),
              (eM[250] = e),
              (eM[251] = s))
            : (s = eM[251]),
          s
        )
      }
      eM[252] !== G ||
      eM[253] !== e1 ||
      eM[254] !== e0 ||
      eM[255] !== sT ||
      eM[256] !== e8 ||
      eM[257] !== sS ||
      eM[258] !== sF ||
      eM[259] !== sU ||
      eM[260] !== st ||
      eM[261] !== sj ||
      eM[262] !== sC ||
      eM[263] !== se.business_profile_id ||
      eM[264] !== se.display_name ||
      eM[265] !== eK
        ? ((eI = e1
            ? (0, i.jsx)(Y.k, {
                profileId: se.business_profile_id,
                profileName: eK ? void 0 : se.display_name,
                headerAction: sF,
                active: G,
                retainPanels: !eK && !st && e8,
                compact: e0,
                compactAction: sT,
                productsLabel: sC,
                productsStatus: sj,
                membersLabel: sS,
                prefetchAgentBuilder: st ? void 0 : t8,
                children: sU,
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [!eK && (0, i.jsx)(J.j, { name: se.display_name, actions: sF, section: G }), sU],
              })),
          (eM[252] = G),
          (eM[253] = e1),
          (eM[254] = e0),
          (eM[255] = sT),
          (eM[256] = e8),
          (eM[257] = sS),
          (eM[258] = sF),
          (eM[259] = sU),
          (eM[260] = st),
          (eM[261] = sj),
          (eM[262] = sC),
          (eM[263] = se.business_profile_id),
          (eM[264] = se.display_name),
          (eM[265] = eK),
          (eM[266] = eI))
        : (eI = eM[266])
      let s$ = eI
      return (
        eM[267] !== z || eM[268] !== eF || eM[269] !== eN || eM[270] !== s$ || eM[271] !== eD
          ? ((eP =
              null == z
                ? s$
                : (0, i.jsx)(ee.b, {
                    manager: eN,
                    section: z,
                    pendingSection: eD,
                    loadingSection: eF,
                    loadingContent: s$,
                  })),
            (eM[267] = z),
            (eM[268] = eF),
            (eM[269] = eN),
            (eM[270] = s$),
            (eM[271] = eD),
            (eM[272] = eP))
          : (eP = eM[272]),
        eP
      )
    }
    function is(e) {
      return e.section
    }
    let it = (0, f.YK)({
      editBusinessDetails: { id: "businessProfiles.editBusinessDetails", defaultMessage: "Edit business info" },
      viewBusinessDetails: { id: "businessProfiles.viewBusinessDetails", defaultMessage: "View business details" },
      insights: { id: "businessProfiles.insights", defaultMessage: "Insights" },
    })
  },
  GvFV(e, s, t) {
    let i = (0, t("ESTr").a)({
      name: "circle-info-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
        visualBounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
        center: { x: 6, y: 6 },
        insets: { top: 1.019531, right: 1.019531, bottom: 1.019531, left: 1.019531 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6 }, foreground: { x: 6, y: 6 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6 5.51953C6.2651 5.51953 6.48047 5.7349 6.48047 6V8C6.48047 8.2651 6.2651 8.48047 6 8.48047C5.7349 8.48047 5.51953 8.2651 5.51953 8V6C5.51953 5.7349 5.7349 5.51953 6 5.51953Z" fill="currentColor"/> <path d="M6.12305 3.58789C6.40097 3.64481 6.61035 3.8908 6.61035 4.18555C6.61035 4.52244 6.33689 4.7959 6 4.7959C5.70525 4.7959 5.45926 4.58651 5.40234 4.30859L5.38965 4.18555L5.40234 4.0625C5.45926 3.78458 5.70525 3.5752 6 3.5752L6.12305 3.58789Z" fill="currentColor"/> <path d="M6 1.01953C8.75038 1.01953 10.9805 3.24962 10.9805 6C10.9805 8.75038 8.75038 10.9805 6 10.9805C3.24962 10.9805 1.01953 8.75038 1.01953 6C1.01953 3.24962 3.24962 1.01953 6 1.01953ZM6 1.98047C3.77982 1.98047 1.98047 3.77982 1.98047 6C1.98047 8.22018 3.77982 10.0195 6 10.0195C8.22018 10.0195 10.0195 8.22018 10.0195 6C10.0195 3.77982 8.22018 1.98047 6 1.98047Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    t.d(s, {}, { q: i })
  },
  plnw(e, s, t) {
    let i = (0, t("ESTr").a)({
      name: "megaphone-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        visualBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        center: { x: 9.791992, y: 10.362671 },
        insets: { top: 2.350342, right: 1.624512, bottom: 1.625, left: 1.208496 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.791992, y: 10.362671 },
          foreground: { x: 9.791992, y: 10.362671 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.9507 2.51071C16.6106 1.89607 18.3753 3.12451 18.3755 4.8945V13.9375C18.3755 15.6723 16.6756 16.8972 15.0298 16.3486L12.1255 15.3799V15.417C12.1254 16.2155 11.8831 16.9743 11.3364 17.5371C10.7856 18.104 10.0195 18.3749 9.1665 18.375C8.31369 18.3749 7.54831 18.1039 6.99756 17.5371C6.45082 16.9743 6.20855 16.2156 6.2085 15.417V13.4101C6.13435 13.3877 6.05753 13.375 5.97998 13.375H3.75049C2.34676 13.375 1.2085 12.2367 1.2085 10.833V8.33298C1.20882 6.92952 2.34696 5.79196 3.75049 5.79196H5.95166C6.04536 5.79193 6.1382 5.77467 6.22607 5.74216L14.9507 2.51071ZM7.9585 15.417C7.95854 15.8678 8.09108 16.151 8.25244 16.3174C8.40993 16.4794 8.6866 16.6249 9.1665 16.625C9.64666 16.6249 9.92307 16.4794 10.0806 16.3174C10.2421 16.1511 10.3754 15.8681 10.3755 15.417V14.7968L7.9585 13.9912V15.417ZM16.6255 4.8945C16.6253 4.34332 16.075 3.96092 15.5581 4.15231L6.92236 7.35055V11.8017L15.5835 14.6884C16.096 14.8591 16.6255 14.4777 16.6255 13.9375V4.8945ZM3.75049 7.54196C3.31346 7.54196 2.95882 7.89602 2.9585 8.33298V10.833C2.9585 11.2702 3.31326 11.625 3.75049 11.625H5.17236V7.54196H3.75049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    t.d(s, {}, { T: i })
  },
  D1Cn(e, s, t) {
    t.d(s, {
      A: () =>
        function e(s, t, a = 0, r = 1 / 0, o) {
          if (
            ((t = Math.floor(t)),
            (a = Math.floor(Math.max(0, a))),
            (r = Math.floor(Math.min(s.length - 1, r))),
            !(a <= t && t <= r))
          )
            return s
          for (
            o =
              void 0 === o
                ? n
                : (function (e = i.A) {
                    if (e === i.A) return n
                    if ("function" != typeof e) throw TypeError("compare is not a function")
                    return (s, t) => {
                      let i = e(s, t)
                      return i || 0 === i ? i : (0 === e(t, t)) - (0 === e(s, s))
                    }
                  })(o);
            r > a;
          ) {
            if (r - a > 600) {
              let i = r - a + 1,
                n = t - a + 1,
                l = Math.log(i),
                c = 0.5 * Math.exp((2 * l) / 3),
                d = 0.5 * Math.sqrt((l * c * (i - c)) / i) * (n - i / 2 < 0 ? -1 : 1),
                u = Math.max(a, Math.floor(t - (n * c) / i + d)),
                f = Math.min(r, Math.floor(t + ((i - n) * c) / i + d))
              e(s, t, u, f, o)
            }
            let i = s[t],
              n = a,
              c = r
            for (l(s, a, t), o(s[r], i) > 0 && l(s, a, r); n < c;) {
              for (l(s, n, c), ++n, --c; 0 > o(s[n], i);) ++n
              for (; o(s[c], i) > 0;) --c
            }
            ;(0 === o(s[a], i) ? l(s, a, c) : l(s, ++c, r), c <= t && (a = c + 1), t <= c && (r = c - 1))
          }
          return s
        },
    })
    var i = t("GGMO")
    function n(e, s) {
      return (null == e || !(e >= e)) - (null == s || !(s >= s)) || (e < s ? -1 : +(e > s))
    }
    function l(e, s, t) {
      let i = e[s]
      ;((e[s] = e[t]), (e[t] = i))
    }
  },
}
//# sourceMappingURL=237710.99ac6e8bfa.js.map
