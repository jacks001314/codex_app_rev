export const __rspack_esm_ids = [240269]
export const __webpack_modules__ = {
  z7pR(e, t, n) {
    var a = n("loz7"),
      i = n("Yewb")
    n.d(
      t,
      {},
      {
        U: function (e, t, { hostId: n, signal: l, appConnectOptions: r, suppressSuccessToast: s }) {
          return new Promise((o) => {
            let d = null,
              c = !1,
              u = (e) => {
                c || ((c = !0), l.removeEventListener("abort", g), o(e))
              },
              g = () => {
                let t = e.get(a.Tx)
                ;(null != d && "closed" !== t.kind && t.requestId === d && e.set(a.Tx, (0, a.Fi)(t)), u("cancelled"))
              }
            if ((l.addEventListener("abort", g, { once: !0 }), l.aborted)) return void g()
            if (
              !(0, i.installPlugin)(e, t, {
                hostId: n,
                appConnectOptions: r,
                suppressSuccessToast: s,
                onSuccess: () => u("installed"),
                onCancel: () => u("cancelled"),
                onError: () => u("failed"),
              })
            )
              return void u("failed")
            let p = e.get(a.Tx)
            d = "closed" === p.kind ? null : (p.requestId ?? null)
          })
        },
      },
    )
  },
  QGLS(e, t, n) {
    var a = n("DBCl"),
      i = n("pDRe"),
      l = n("OiCI"),
      r = n("SPnB"),
      s = n("eFn4"),
      o = n("X6Vn"),
      d = n("SGsN"),
      c = n("Wbxh"),
      u = n("svjy"),
      g = n("ndjw")
    n.d(
      t,
      {},
      {
        openWritingStyleDialog: async function (e, t, p) {
          let f = e.get(l.tT),
            m = e.get(r.PO).userId,
            b = () => !p?.aborted && e.get(l.tT) === f && e.get(r.PO).userId === m && "allowed" === e.get(s.lN).status
          if (null != f && null != m && b())
            try {
              let { AccountWritingStyleDialog: l } = await n.e(493889).then(n.bind(n, "Bvfk"))
              if (!b()) return
              if ((0, i.e)(t.hostId) || t.hostId === a.iwv)
                return void (0, o.qf)(e, l, { ...t, project: null, workspaceRoots: [], accountId: f, userId: m })
              if (
                void 0 === t.project &&
                void 0 === e.get(g.bs) &&
                (await e.query.getOrFetch(c.Mo, a.Q2Y.SELECTED_PROJECT), !b() || void 0 !== e.get(g.bs))
              )
                return
              let r = void 0 === t.project ? e.get(g.Gt) : t.project
              if (null != r) {
                let n = "remote" === r.type ? a.Q2Y.REMOTE_PROJECTS : a.Q2Y.LOCAL_PROJECTS
                if ((null == e.query.getData(c.Mo, n) && (await e.query.getOrFetch(c.Mo, n)), !b())) return
                let i = e.get(g.Gt)
                if (void 0 === t.project && (i?.type !== r.type || i.projectId !== r.projectId)) return
              }
              let s = r?.type === "remote" ? e.get(g.U1, r.projectId)?.hostId : "local",
                d = e.get(g.g, r)
              ;((s === t.hostId && (null == t.workspaceRoots || t.workspaceRoots.every((e) => d.includes(e)))) ||
                (r = null),
                (0, o.qf)(e, l, {
                  ...t,
                  project: r,
                  workspaceRoots: t.workspaceRoots ?? (null == r ? [] : d),
                  accountId: f,
                  userId: m,
                }))
            } catch {
              if (!b()) return
              e.get(d.Id).danger(
                e
                  .get(u.g)
                  .formatMessage({
                    id: "writingStyle.notReady",
                    defaultMessage: "Writing style isn't ready yet. Try again.",
                    description: "Recoverable error when the Writing style setup dialog could not be loaded",
                  }),
                { errorAnalytics: { toastId: "writingStyle.notReady" } },
              )
            }
        },
      },
    )
  },
  hUKi(e, t, n) {
    var a = n("zTeN"),
      i = n("DBCl"),
      l = n("PFjh"),
      r = n("pDRe"),
      s = n("OiCI"),
      o = n("SPnB"),
      d = n("eFn4"),
      c = n("WzdM"),
      u = n("ugfi"),
      g = n("jShI"),
      p = n("cLdu"),
      f = n("ueue"),
      m = n("sLlu"),
      b = n("OWtl"),
      x = n("rvFo"),
      h = n("HFSu"),
      y = n("rTZC"),
      v = n("z7pR")
    let w = (0, a.vU)(b.u, (e, { scope: t, get: n }) => {
        var a
        return {
          queryKey: ((a = e), [...f.qw, "writing-style-preference", y.b, a.accountId, a.userId, a.hostId]),
          queryFn: ({ signal: n }) =>
            (async function (e, t, n) {
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let a = AbortSignal.any([n, AbortSignal.timeout(3e4)]),
                [{ plugin_id: i }, l] = await Promise.all([
                  h.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                    parameters: { path: { app_id: y.b } },
                    additionalHeaders: (0, c.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                    signal: a,
                  }),
                  (0, p.yf)(e, {
                    productContext: (0, r.e)(t.hostId) ? "chatgpt" : "codex",
                    surface: "settings",
                    signal: a,
                  }),
                ])
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              let s = l.find((e) => e.plugin.remotePluginId === i) ?? l.find((e) => e.canonicalAppId === y.b),
                o =
                  s?.servicePlugin ??
                  (null == i
                    ? null
                    : await h.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                        parameters: { path: { plugin_id: i } },
                        additionalHeaders: (0, c.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                        signal: a,
                      }))
              if (!A(e, t)) throw new DOMException("Account changed", "AbortError")
              return {
                plugin: o,
                installed: null != s,
                enabled: s?.plugin.enabled === !0,
                canInstall:
                  o?.id === i &&
                  o.canonical_app_id === y.b &&
                  "ENABLED" === o.status &&
                  "NOT_AVAILABLE" !== o.installation_policy,
              }
            })(t, e, n),
          enabled: n(s.tT) === e.accountId && n(o.PO).userId === e.userId && "allowed" === n(d.lN).status,
          retry: !1,
          staleTime: x.D.ONE_MINUTE,
        }
      }),
      j = (0, a.c4)(
        b.u,
        (e, { scope: t }) => ({
          mutationKey: ["writing-style-preference", e.accountId, e.userId],
          mutationFn: async ({ entryPoint: a = "unknown", hostId: s, ...o }) => {
            let d = performance.now(),
              f = { enabled: String(o.enabled), entry_point: a }
            t.get(l.T$).count("default", "write_like_me.preference_change", { ...f, outcome: "started" })
            let b = await (async function (
                e,
                t,
                { enabled: a, signal: l, prepareForChat: s = !1, prepareForChatSignal: o },
              ) {
                let d = () => !l.aborted && A(e, t)
                if (!d()) return { status: "cancelled" }
                try {
                  let f = e.query.getData(w, t) ?? (await e.query.getOrFetch(w, t))
                  if (!d()) return { status: "cancelled" }
                  if ((null != f.plugin && f.plugin.canonical_app_id !== y.b) || (a && !f.canInstall))
                    return { status: "failed" }
                  if (a && !f.installed && null != f.plugin) {
                    let n = await (0, v.U)(
                      e,
                      {
                        displayName: f.plugin.release.display_name,
                        remotePluginId: f.plugin.id,
                        remoteMarketplaceName: i.xiH,
                      },
                      {
                        hostId: t.hostId,
                        signal: l,
                        suppressSuccessToast: !0,
                        appConnectOptions: { connectorId: y.b, productSku: (0, r.e)(t.hostId) ? "TPP" : "CODEX" },
                      },
                    )
                    if (!d() || "cancelled" === n) return { status: "cancelled" }
                    if ("failed" === n) return { status: "failed" }
                  } else if (!a && f.installed && null != f.plugin) {
                    let n = (0, p.YU)(f.plugin)
                    await (0, u.cu)({
                      scope: e,
                      hostId: t.hostId,
                      queryClient: e.queryClient,
                      marketplaceName: n.marketplaceName,
                      pluginId: n.plugin.id,
                      pluginName: n.plugin.name,
                      requestPluginId: f.plugin.id,
                      signal: l,
                    })
                  } else {
                    if (a && !f.enabled && null != f.plugin)
                      try {
                        await h.CodexRequest.safePost("/ps/plugins/{plugin_id}/enable", {
                          parameters: { path: { plugin_id: f.plugin.id } },
                          additionalHeaders: (0, c.A)((0, r.e)(t.hostId) ? "chatgpt" : "codex"),
                        })
                      } finally {
                        ;(0, u.lA)((t) => (0, m.y)(e.queryClient, t))
                      }
                    if (!d()) return { status: "cancelled" }
                    ;(0, p.hE)(t.hostId) ||
                      (a && s && f.enabled) ||
                      (await (0, g.T)({ scope: e, hostId: t.hostId, queryClient: e.queryClient }))
                  }
                  if (!d()) return { status: "cancelled" }
                  await e.query.invalidate(w, t, { refetchType: "none" })
                  let b = await e.query.fetch(w, t)
                  if (!d()) return { status: "cancelled" }
                  if (!(a ? b.enabled && b.plugin?.id === f.plugin?.id : !b.installed)) return { status: "failed" }
                  if (a && s && !o?.aborted && null != b.plugin) {
                    let { prepareWritingStyleForChat: a } = await n.e(842455).then(n.bind(n, "Xxi0")),
                      i = o ?? l,
                      r = await a(e, t, b.plugin, i, () => d() && !i.aborted, f.installed)
                    if ("ready" !== r) return { status: r }
                  }
                  return d() ? { status: "saved", enabled: a } : { status: "cancelled" }
                } catch {
                  return { status: d() ? "failed" : "cancelled" }
                }
              })(t, { ...e, hostId: s }, o),
              x = { saved: "success", cancelled: "aborted", failed: "failure" }[b.status]
            return (
              t.get(l.T$).count("default", "write_like_me.preference_change", { ...f, outcome: x }),
              t
                .get(l.T$)
                .hist(
                  "default",
                  "write_like_me.preference_change_duration_ms",
                  { ...f, outcome: x },
                  performance.now() - d,
                ),
              b
            )
          },
        }),
        { excludeFieldsFromKey: ["hostId"] },
      )
    function A(e, t) {
      return e.get(s.tT) === t.accountId && e.get(o.PO).userId === t.userId && "allowed" === e.get(d.lN).status
    }
    n.d(t, {}, { K: j, l: w })
  },
  pSGI(e, t, n) {
    n.d(t, { WritingStyleSettings: () => A })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("zTeN"),
      r = n("zd8w"),
      s = n("PFjh"),
      o = n("OiCI"),
      d = n("SPnB"),
      c = n("EOo5"),
      u = n("OWtl"),
      g = n("QGLS"),
      p = n("hUKi"),
      f = n("Wf1j"),
      m = n("oyxz"),
      b = n("Sm6l"),
      x = n("RNul"),
      h = n("F0xz"),
      y = n("BSnr"),
      v = n("AWNZ"),
      w = n("ZEx5")
    function j(e) {
      let t,
        n,
        l,
        r,
        s,
        o,
        d = (0, i.c)(15),
        { disabled: c, enabled: u, error: g, pending: p, onEnabledChange: j, onRetry: A } = e,
        I = (0, f.A)()
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(y.X.Header, {
              size: "large",
              title: (0, a.jsx)(m.A, {
                id: "writingStyle.settings.section",
                defaultMessage: "Writing",
                description: "Heading in Personalization settings for the optional writing-style preference",
              }),
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(m.A, {
              id: "writingStyle.settings.label",
              defaultMessage: "Reference my writing style",
              description:
                "Toggle for enabling the Writing style plugin in Personalization settings; refers to written voice, not typography",
            })),
            (l = (0, a.jsx)(m.A, {
              id: "writingStyle.settings.description",
              defaultMessage: "Let ChatGPT use your chats, Library files, and connected apps to write in your style",
              description:
                "Supporting text beneath the Writing style preference. Library is ChatGPT's file library, and connecting external apps is optional.",
            })),
            (d[1] = n),
            (d[2] = l))
          : ((n = d[1]), (l = d[2])),
        d[3] !== c || d[4] !== u || d[5] !== j || d[6] !== p
          ? ((r = (0, a.jsx)(w.t, {
              children: (0, a.jsx)(v.ic, {
                label: n,
                description: l,
                control: (e) =>
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      p ? (0, a.jsx)(x.y, {}) : null,
                      (0, a.jsx)(h.l, { ...e, "aria-busy": p, checked: u, disabled: p || (!u && c), onChange: j }),
                      p
                        ? (0, a.jsx)("span", {
                            className: "sr-only",
                            role: "status",
                            children: (0, a.jsx)(m.A, {
                              id: "writingStyle.settings.saving",
                              defaultMessage: "Checking writing style setting…",
                              description:
                                "Accessible status while the saved Writing style preference is loading or a change is awaiting confirmation",
                            }),
                          })
                        : null,
                    ],
                  }),
              }),
            })),
            (d[3] = c),
            (d[4] = u),
            (d[5] = j),
            (d[6] = p),
            (d[7] = r))
          : (r = d[7]),
        d[8] !== g || d[9] !== I || d[10] !== A
          ? ((s = g
              ? (0, a.jsxs)("div", {
                  role: "alert",
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(m.A, {
                        id: "writingStyle.settings.error",
                        defaultMessage: "Writing style couldn't be updated. Try again.",
                        description: "Recoverable error saving Writing style; the user can retry the change",
                      }),
                    }),
                    (0, a.jsx)(b.$, {
                      className: "shrink-0",
                      "aria-label": I.formatMessage({
                        id: "writingStyle.settings.retryLabel",
                        defaultMessage: "Retry updating writing style",
                        description:
                          "Accessible name of the action that retries a failed Writing style setting change or read",
                      }),
                      color: "secondary",
                      onClick: A,
                      size: "toolbar",
                      children: (0, a.jsx)(m.A, {
                        id: "writingStyle.settings.retry",
                        defaultMessage: "Retry",
                        description:
                          "Button to retry a failed Writing style setting change or read without reversing a change that already saved",
                      }),
                    }),
                  ],
                })
              : null),
            (d[8] = g),
            (d[9] = I),
            (d[10] = A),
            (d[11] = s))
          : (s = d[11]),
        d[12] !== r || d[13] !== s
          ? ((o = (0, a.jsxs)(y.X, { className: "select-none", children: [t, r, s] })),
            (d[12] = r),
            (d[13] = s),
            (d[14] = o))
          : (o = d[14]),
        o
      )
    }
    function A(e) {
      let t,
        n,
        l = (0, i.c)(7),
        { hostId: r } = e,
        { accountId: s, userId: o } = (0, c.As)()
      if (null == s || null == o) return null
      let d = `${s}:${o}:${r}`
      return (
        l[0] !== s || l[1] !== r || l[2] !== o
          ? ((t = { accountId: s, userId: o, hostId: r }), (l[0] = s), (l[1] = r), (l[2] = o), (l[3] = t))
          : (t = l[3]),
        l[4] !== d || l[5] !== t
          ? ((n = (0, a.jsx)(I, { account: t }, d)), (l[4] = d), (l[5] = t), (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    function I(e) {
      let t,
        n,
        c,
        f,
        m,
        b,
        x = (0, i.c)(20),
        { account: h } = e,
        y = (0, l.gh)(u.u),
        v = (0, l.Ul)(o.tT),
        { data: w, error: A, isFetching: I, refetch: k } = (0, l._U)(p.l, h),
        { isPending: _, mutateAsync: N, data: S, error: C, variables: T } = (0, l._U)(p.K, h),
        P = (0, r.useRef)(null),
        E = T?.hostId === h.hostId && (S?.status === "failed" || null != C) ? T.enabled : void 0,
        O = _ || (null == w && I) || v !== h.accountId
      ;(x[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            P.current = null
          }),
          (n = []),
          (x[0] = t),
          (x[1] = n))
        : ((t = x[0]), (n = x[1])),
        (0, r.useEffect)(t, n),
        x[2] !== h || x[3] !== N || x[4] !== y
          ? ((c = async (e) => {
              if (y.get(o.tT) !== h.accountId || y.get(d.PO).userId !== h.userId || y.get(p.K, h).isPending) return
              P.current?.abort()
              let t = new AbortController()
              P.current = t
              try {
                let n = await N({ enabled: e, entryPoint: "settings", signal: t.signal, hostId: h.hostId })
                if (e && "saved" === n.status && P.current === t && !t.signal.aborted) {
                  if (y.get(o.tT) !== h.accountId || y.get(d.PO).userId !== h.userId) return
                  await (0, g.openWritingStyleDialog)(y, { hostId: h.hostId, entryPoint: "settings" })
                }
              } catch {}
            }),
            (x[2] = h),
            (x[3] = N),
            (x[4] = y),
            (x[5] = c))
          : (c = x[5]))
      let R = c,
        z = O || w?.canInstall !== !0,
        q = w?.enabled === !0,
        W = !O && (null != E || null != A)
      return (
        x[6] !== R || x[7] !== y
          ? ((f = (e) => {
              ;(y.get(s.T$).count("default", "write_like_me.settings_toggle", { enabled: String(e) }), R(e))
            }),
            (x[6] = R),
            (x[7] = y),
            (x[8] = f))
          : (f = x[8]),
        x[9] !== R || x[10] !== E || x[11] !== k
          ? ((m = () => {
              null != E ? R(E) : k()
            }),
            (x[9] = R),
            (x[10] = E),
            (x[11] = k),
            (x[12] = m))
          : (m = x[12]),
        x[13] !== O || x[14] !== z || x[15] !== q || x[16] !== W || x[17] !== f || x[18] !== m
          ? ((b = (0, a.jsx)(j, { disabled: z, enabled: q, error: W, pending: O, onEnabledChange: f, onRetry: m })),
            (x[13] = O),
            (x[14] = z),
            (x[15] = q),
            (x[16] = W),
            (x[17] = f),
            (x[18] = m),
            (x[19] = b))
          : (b = x[19]),
        b
      )
    }
  },
  rTZC(e, t, n) {
    n.d(t, {}, { b: "connector_openai_write_like_me" })
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => r })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57")
    let r = Object.assign(
      function (e) {
        let t,
          n,
          r = (0, i.c)(6),
          { children: s, id: o, className: d } = e
        return (
          r[0] !== d ? ((t = (0, l.A)("flex flex-col", d)), (r[0] = d), (r[1] = t)) : (t = r[1]),
          r[2] !== s || r[3] !== o || r[4] !== t
            ? ((n = (0, a.jsx)("section", { id: o, className: t, children: s })),
              (r[2] = s),
              (r[3] = o),
              (r[4] = t),
              (r[5] = n))
            : (n = r[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            r,
            s,
            o,
            d,
            c,
            u = (0, i.c)(32),
            {
              title: g,
              subtitle: p,
              actions: f,
              actionsAlignment: m,
              className: b,
              size: x,
              titleGap: h,
              spacing: y,
              subtitlePlacement: v,
              subtitleWrap: w,
            } = e,
            j = void 0 === x ? "default" : x,
            A = void 0 === y ? "default" : y,
            I = void 0 === v ? "below-title" : v,
            k = void 0 === w ? "balance" : w,
            _ = null != g,
            N = null != p,
            S = null != f,
            C = "compact" === j
          u[0] !== C || u[1] !== p || u[2] !== I || u[3] !== k
            ? ((t = p
                ? (0, a.jsx)("div", {
                    className: (0, l.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === k ? "text-balance" : "text-wrap",
                      C ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === I && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = C),
              (u[1] = p),
              (u[2] = I),
              (u[3] = k),
              (u[4] = t))
            : (t = u[4])
          let T = t
          if (!_ && !N && !S) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === I ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            E = N && "compact" === A && "pb-2",
            O = N && "compact" !== A && "pb-3"
          u[6] !== b || u[7] !== N || u[8] !== C || u[9] !== A || u[10] !== P || u[11] !== E || u[12] !== O
            ? ((n = (0, l.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                E,
                O,
                !N && (0, l.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                N && C && "items-center",
                N && !C && "items-start",
                b,
              )),
              (u[6] = b),
              (u[7] = N),
              (u[8] = C),
              (u[9] = A),
              (u[10] = P),
              (u[11] = E),
              (u[12] = O),
              (u[13] = n))
            : (n = u[13])
          let R =
            "none" === (void 0 === h ? "default" : h)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== R ? ((r = (0, l.A)("flex min-w-0 flex-1 flex-col", R)), (u[14] = R), (u[15] = r)) : (r = u[15]),
            u[16] !== N || u[17] !== j || u[18] !== g
              ? ((s = g
                  ? (0, a.jsx)("div", {
                      className: (0, l.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && N)) && "text-lg",
                        ("base" === j || ("default" === j && !N)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (u[16] = N),
                (u[17] = j),
                (u[18] = g),
                (u[19] = s))
              : (s = u[19]))
          let z = "below-title" === I ? T : null
          ;(u[20] !== r || u[21] !== s || u[22] !== z
            ? ((o = (0, a.jsxs)("div", { className: r, children: [s, z] })),
              (u[20] = r),
              (u[21] = s),
              (u[22] = z),
              (u[23] = o))
            : (o = u[23]),
            u[24] !== f || u[25] !== m
              ? ((d = f
                  ? (0, a.jsx)("div", {
                      className: (0, l.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: f,
                    })
                  : null),
                (u[24] = f),
                (u[25] = m),
                (u[26] = d))
              : (d = u[26]))
          let q = "below-header" === I ? T : null
          return (
            u[27] !== n || u[28] !== o || u[29] !== d || u[30] !== q
              ? ((c = (0, a.jsxs)("div", { className: n, children: [o, d, q] })),
                (u[27] = n),
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
            n,
            r = (0, i.c)(5),
            { children: s, className: o } = e
          return (
            r[0] !== o ? ((t = (0, l.A)("flex flex-col gap-1.5", o)), (r[0] = o), (r[1] = t)) : (t = r[1]),
            r[2] !== s || r[3] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: s })), (r[2] = s), (r[3] = t), (r[4] = n))
              : (n = r[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            r = (0, i.c)(6),
            { children: s, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            r[0] !== o || r[1] !== c
              ? ((t = (0, l.A)("text-balance text-secondary", c, o)), (r[0] = o), (r[1] = c), (r[2] = t))
              : (t = r[2]),
            r[3] !== s || r[4] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: s })), (r[3] = s), (r[4] = t), (r[5] = n))
              : (n = r[5]),
            n
          )
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
      s = n("HZfM"),
      o = n("bVeK")
    function d(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        n,
        r,
        s,
        o,
        d,
        c,
        u = (0, i.c)(24),
        {
          label: g,
          labelId: p,
          labelSizing: f,
          labelWeight: m,
          description: b,
          descriptionId: x,
          icon: h,
          variant: y,
          verticalAlignment: v,
        } = e,
        w = "start" === v ? "items-start" : "items-center",
        j = "grow" === (void 0 === f ? "grow" : f) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, l.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== h
          ? ((n = null != h ? (0, a.jsx)("span", { className: "flex shrink-0", children: h }) : null),
            (u[3] = h),
            (u[4] = n))
          : (n = u[4]))
      let A = "featured" === y && "text-base",
        I = "recommendation" === y && "text-[13px] leading-[18.571429px]",
        k = "featured" !== y && "recommendation" !== y && "text-sm",
        _ = "nested" !== y && "medium" === (void 0 === m ? "medium" : m) && "font-medium"
      return (
        u[5] !== _ || u[6] !== A || u[7] !== I || u[8] !== k
          ? ((r = (0, l.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              I,
              k,
              _,
            )),
            (u[5] = _),
            (u[6] = A),
            (u[7] = I),
            (u[8] = k),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== g || u[11] !== p || u[12] !== r
          ? ((s = (0, a.jsx)("div", { id: p, className: r, children: g })),
            (u[10] = g),
            (u[11] = p),
            (u[12] = r),
            (u[13] = s))
          : (s = u[13]),
        u[14] !== b || u[15] !== x
          ? ((o = b
              ? (0, a.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: b,
                })
              : null),
            (u[14] = b),
            (u[15] = x),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== s || u[18] !== o
          ? ((d = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [s, o] })),
            (u[17] = s),
            (u[18] = o),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== n
          ? ((c = (0, a.jsxs)("div", { className: t, children: [n, d] })),
            (u[20] = d),
            (u[21] = t),
            (u[22] = n),
            (u[23] = c))
          : (c = u[23]),
        c
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
            d,
            c = (0, i.c)(18),
            { children: u, compactLabelInset: g, label: p, valueAlignment: f, variant: m } = e,
            b = void 0 === g || g,
            x = void 0 === f ? "start" : f,
            h = void 0 === m ? "default" : m,
            y =
              "compact" === h
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== y ? ((t = (0, l.A)("grid items-center", y)), (c[0] = y), (c[1] = t)) : (t = c[1]),
            c[2] !== b || c[3] !== h
              ? ((n = (0, l.A)(
                  "min-w-0",
                  "compact" === h
                    ? (0, l.A)("flex items-center pe-2 text-start", b && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = b),
                (c[3] = h),
                (c[4] = n))
              : (n = c[4]),
            c[5] !== p || c[6] !== n
              ? ((r = (0, a.jsx)("div", { className: n, children: p })), (c[5] = p), (c[6] = n), (c[7] = r))
              : (r = c[7]),
            c[8] !== x || c[9] !== h
              ? ((s = (0, l.A)(
                  "min-w-0",
                  "compact" === h
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, l.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (c[8] = x),
                (c[9] = h),
                (c[10] = s))
              : (s = c[10]),
            c[11] !== u || c[12] !== s
              ? ((o = (0, a.jsx)("div", { className: s, children: u })), (c[11] = u), (c[12] = s), (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== r || c[16] !== o
              ? ((d = (0, a.jsxs)("div", { className: t, children: [r, o] })),
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
            n,
            s,
            o,
            d = (0, i.c)(35),
            {
              label: u,
              labelSizing: g,
              labelWeight: p,
              layout: f,
              description: m,
              control: b,
              controlSizing: x,
              icon: h,
              className: y,
              id: v,
              inset: w,
              size: j,
              variant: A,
              verticalAlignment: I,
            } = e,
            k = void 0 === g ? "grow" : g,
            _ = void 0 === p ? "medium" : p,
            N = void 0 === f ? "default" : f,
            S = void 0 === x ? "minimum" : x,
            C = void 0 === w || w,
            T = void 0 === j ? "default" : j,
            P = void 0 === A ? "default" : A,
            E = void 0 === I ? "center" : I,
            O = (0, r.useId)(),
            R = null != u || null != m || null != h,
            z = "function" == typeof b,
            q = z && null != u ? `${O}-label` : void 0,
            W = z && m ? `${O}-description` : void 0,
            F = C && ("split" !== N || "default" !== P) && "px-4",
            M = C && "nested" === P && "group-data-[density=form]/settings:px-5",
            L =
              "stacked" === P &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            D =
              "nested" === P &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            B = "stacked" !== P && ("start" === E ? "items-start" : "items-center"),
            $ = "split" === N && "default" === P && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== y ||
            d[1] !== N ||
            d[2] !== T ||
            d[3] !== M ||
            d[4] !== L ||
            d[5] !== D ||
            d[6] !== B ||
            d[7] !== $ ||
            d[8] !== F ||
            d[9] !== P
              ? ((t = (0, l.A)(
                  "@container/settings-row",
                  F,
                  M,
                  L,
                  D,
                  B,
                  $,
                  "default" === N &&
                    ("default" === P || "featured" === P || "recommendation" === P) &&
                    (0, l.A)(
                      "flex justify-between",
                      "featured" === P && (0, l.A)("gap-6", "compact" === T ? "min-h-11 py-2" : "py-4"),
                      "featured" !== P && ("compact" === T ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === P && "dark:bg-secondary-ghost-hover",
                  y,
                )),
                (d[0] = y),
                (d[1] = N),
                (d[2] = T),
                (d[3] = M),
                (d[4] = L),
                (d[5] = D),
                (d[6] = B),
                (d[7] = $),
                (d[8] = F),
                (d[9] = P),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== m ||
            d[12] !== W ||
            d[13] !== R ||
            d[14] !== h ||
            d[15] !== u ||
            d[16] !== q ||
            d[17] !== k ||
            d[18] !== _ ||
            d[19] !== P ||
            d[20] !== E
              ? ((n = R
                  ? (0, a.jsx)(c, {
                      label: u,
                      labelId: q,
                      labelSizing: k,
                      labelWeight: _,
                      description: m,
                      descriptionId: W,
                      icon: h,
                      variant: P,
                      verticalAlignment: E,
                    })
                  : null),
                (d[11] = m),
                (d[12] = W),
                (d[13] = R),
                (d[14] = h),
                (d[15] = u),
                (d[16] = q),
                (d[17] = k),
                (d[18] = _),
                (d[19] = P),
                (d[20] = E),
                (d[21] = n))
              : (n = d[21]),
            d[22] !== b || d[23] !== S || d[24] !== W || d[25] !== z || d[26] !== q || d[27] !== N || d[28] !== P
              ? ((s =
                  null != b && !1 !== b
                    ? (0, a.jsx)("div", {
                        className: (0, l.A)(
                          "stacked" === P && "w-full",
                          "nested" === P && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === N &&
                            "default" === P &&
                            (0, l.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === S && "w-full",
                            ),
                          "default" === N &&
                            ("default" === P || "featured" === P || "recommendation" === P) &&
                            (0, l.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === S ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === S && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: z ? b({ "aria-labelledby": q, "aria-describedby": W }) : b,
                      })
                    : null),
                (d[22] = b),
                (d[23] = S),
                (d[24] = W),
                (d[25] = z),
                (d[26] = q),
                (d[27] = N),
                (d[28] = P),
                (d[29] = s))
              : (s = d[29]),
            d[30] !== v || d[31] !== t || d[32] !== n || d[33] !== s
              ? ((o = (0, a.jsxs)("div", { id: v, className: t, children: [n, s] })),
                (d[30] = v),
                (d[31] = t),
                (d[32] = n),
                (d[33] = s),
                (d[34] = o))
              : (o = d[34]),
            o
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
            o,
            u,
            g,
            p,
            f,
            m,
            b,
            x,
            h,
            y,
            v,
            w,
            j,
            A,
            I,
            k,
            _,
            N,
            S,
            C,
            T = (0, i.c)(54)
          T[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: n,
                ariaExpanded: r,
                ariaLabel: o,
                className: u,
                description: g,
                disabled: p,
                edgeRounding: h,
                icon: f,
                label: b,
                size: y,
                trailing: w,
                variant: v,
                ...m
              } = e),
              (T[0] = e),
              (T[1] = t),
              (T[2] = n),
              (T[3] = r),
              (T[4] = o),
              (T[5] = u),
              (T[6] = g),
              (T[7] = p),
              (T[8] = f),
              (T[9] = m),
              (T[10] = b),
              (T[11] = x),
              (T[12] = h),
              (T[13] = y),
              (T[14] = v),
              (T[15] = w))
            : ((t = T[1]),
              (n = T[2]),
              (r = T[3]),
              (o = T[4]),
              (u = T[5]),
              (g = T[6]),
              (p = T[7]),
              (f = T[8]),
              (m = T[9]),
              (b = T[10]),
              (x = T[11]),
              (h = T[12]),
              (y = T[13]),
              (v = T[14]),
              (w = T[15]))
          let P = void 0 === h ? "row" : h,
            E = void 0 === y ? "default" : y,
            O = void 0 === v ? "default" : v,
            R = "before-trailing" === (void 0 === x ? "end" : x) && !p && null != t && null != w,
            z = R ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          T[16] !== u || T[17] !== R || T[18] !== E || T[19] !== z || T[20] !== O
            ? ((j = (0, l.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                z,
                "empty" === O
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, l.A)(
                      "px-4 text-start",
                      "nested" === O && "min-h-10 py-0.5",
                      "nested" !== O && ("large" === E ? "py-4" : "py-3"),
                      R && "gap-2",
                      !R && ("nested" === O ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (T[16] = u),
              (T[17] = R),
              (T[18] = E),
              (T[19] = z),
              (T[20] = O),
              (T[21] = j))
            : (j = T[21])
          let q = j
          ;(T[22] !== g || T[23] !== f || T[24] !== b || T[25] !== O
            ? ((A =
                "empty" === O
                  ? (0, a.jsxs)(a.Fragment, { children: [f, b] })
                  : (0, a.jsx)(c, { label: b, description: g, icon: f, variant: O, verticalAlignment: "center" })),
              (T[22] = g),
              (T[23] = f),
              (T[24] = b),
              (T[25] = O),
              (T[26] = A))
            : (A = T[26]),
            T[27] !== w
              ? ((I =
                  null != w
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (T[27] = w),
                (T[28] = I))
              : (I = T[28]),
            T[29] !== A || T[30] !== I
              ? ((k = (0, a.jsxs)(a.Fragment, { children: [A, I] })), (T[29] = A), (T[30] = I), (T[31] = k))
              : (k = T[31]))
          let W = k,
            F = R ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            M = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            L = "recommendation" === O && "dark:bg-secondary-ghost-hover",
            D = !p && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            B =
              !p &&
              "recommendation" === O &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            T[32] !== F || T[33] !== M || T[34] !== L || T[35] !== D || T[36] !== B
              ? ((_ = (0, l.A)("group w-full items-center", F, M, L, D, B)),
                (T[32] = F),
                (T[33] = M),
                (T[34] = L),
                (T[35] = D),
                (T[36] = B),
                (T[37] = _))
              : (_ = T[37]),
            T[38] !== n || T[39] !== r || T[40] !== o || T[41] !== W || T[42] !== p || T[43] !== m || T[44] !== q
              ? ((N =
                  null != m.to
                    ? (0, a.jsx)(s.N_, {
                        ...m,
                        className: q,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        "aria-disabled": p || void 0,
                        tabIndex: p ? -1 : void 0,
                        onClick: p ? d : m.onClick,
                        children: W,
                      })
                    : (0, a.jsx)("button", {
                        ...m,
                        className: q,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        disabled: p,
                        type: "button",
                        children: W,
                      })),
                (T[38] = n),
                (T[39] = r),
                (T[40] = o),
                (T[41] = W),
                (T[42] = p),
                (T[43] = m),
                (T[44] = q),
                (T[45] = N))
              : (N = T[45]),
            T[46] !== t || T[47] !== p || T[48] !== R
              ? ((S =
                  p || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, l.A)(
                          "flex shrink-0 items-center gap-1",
                          R ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (T[46] = t),
                (T[47] = p),
                (T[48] = R),
                (T[49] = S))
              : (S = T[49]),
            T[50] !== _ || T[51] !== N || T[52] !== S
              ? ((C = (0, a.jsxs)("div", { className: _, children: [N, S] })),
                (T[50] = _),
                (T[51] = N),
                (T[52] = S),
                (T[53] = C))
              : (C = T[53]),
            C
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
            s,
            d,
            c,
            u,
            g,
            p,
            f,
            m = (0, i.c)(43),
            {
              id: b,
              ariaLabel: x,
              autoFocus: h,
              checked: y,
              description: v,
              highlightSelected: w,
              indicator: j,
              label: A,
              name: I,
              onChange: k,
              onClick: _,
              value: N,
              variant: S,
            } = e,
            C = void 0 === w || w,
            T = void 0 === j ? "radio" : j,
            P = void 0 === S ? "default" : S
          ;(m[0] !== y || m[1] !== v || m[2] !== C || m[3] !== T || m[4] !== P
            ? ((t = (0, l.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === P &&
                  (0, l.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != v ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === P && y && C && "radio" === T && "bg-background-neutral-soft-alpha",
                "form" === P && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === P && "items-center gap-2",
                "checkmark" === T && "after:ms-7",
              )),
              (m[0] = y),
              (m[1] = v),
              (m[2] = C),
              (m[3] = T),
              (m[4] = P),
              (m[5] = t))
            : (t = m[5]),
            m[6] !== x || m[7] !== b
              ? ((n = (0, a.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: b,
                })),
                (m[6] = x),
                (m[7] = b),
                (m[8] = n))
              : (n = m[8]),
            m[9] !== T || m[10] !== P
              ? ((r = (0, l.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === T
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, l.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === P ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (m[9] = T),
                (m[10] = P),
                (m[11] = r))
              : (r = m[11]))
          let E = null != v ? `${b}-description` : void 0
          ;(m[12] !== x ||
          m[13] !== h ||
          m[14] !== y ||
          m[15] !== b ||
          m[16] !== I ||
          m[17] !== k ||
          m[18] !== _ ||
          m[19] !== r ||
          m[20] !== E ||
          m[21] !== N
            ? ((s = (0, a.jsx)("input", {
                id: b,
                className: r,
                "aria-label": x,
                "aria-describedby": E,
                autoFocus: h,
                type: "radio",
                name: I,
                value: N,
                checked: y,
                onChange: k,
                onClick: _,
              })),
              (m[12] = x),
              (m[13] = h),
              (m[14] = y),
              (m[15] = b),
              (m[16] = I),
              (m[17] = k),
              (m[18] = _),
              (m[19] = r),
              (m[20] = E),
              (m[21] = N),
              (m[22] = s))
            : (s = m[22]),
            m[23] !== y || m[24] !== T
              ? ((d = "checkmark" === T ? (0, a.jsx)(o.ALZ, { className: (0, l.A)(!y && "invisible") }) : null),
                (m[23] = y),
                (m[24] = T),
                (m[25] = d))
              : (d = m[25]))
          let O = "default" === P ? "text-sm font-medium" : "text-base"
          return (
            m[26] !== O ? ((c = (0, l.A)("text-default", O)), (m[26] = O), (m[27] = c)) : (c = m[27]),
            m[28] !== A || m[29] !== c
              ? ((u = (0, a.jsx)("span", { className: c, children: A })), (m[28] = A), (m[29] = c), (m[30] = u))
              : (u = m[30]),
            m[31] !== v || m[32] !== b
              ? ((g =
                  null != v
                    ? (0, a.jsx)("span", {
                        id: `${b}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: v,
                      })
                    : null),
                (m[31] = v),
                (m[32] = b),
                (m[33] = g))
              : (g = m[33]),
            m[34] !== u || m[35] !== g
              ? ((p = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, g],
                })),
                (m[34] = u),
                (m[35] = g),
                (m[36] = p))
              : (p = m[36]),
            m[37] !== p || m[38] !== t || m[39] !== n || m[40] !== s || m[41] !== d
              ? ((f = (0, a.jsxs)("div", { className: t, children: [n, s, d, p] })),
                (m[37] = p),
                (m[38] = t),
                (m[39] = n),
                (m[40] = s),
                (m[41] = d),
                (m[42] = f))
              : (f = m[42]),
            f
          )
        },
      },
    )
  },
  ZEx5(e, t, n) {
    n.d(t, { t: () => s })
    var a = n("ABep"),
      i = n("QosV"),
      l = n("on57"),
      r = n("bZug")
    function s(e) {
      let t,
        n,
        s,
        o = (0, i.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: g, variant: p, decoration: f } = e,
        m = void 0 === p ? "default" : p,
        b = "flat" === m || "rows" === m ? r.s : r.r,
        x = void 0 === g || g ? b : "flex flex-col",
        h = "recommendation" === m && "rounded-[20px]",
        y = "recommendation" !== m && "flat" !== m && "rows" !== m && "outlinedLarge" !== m && "rounded-2xl",
        v = "outlinedLarge" === m && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === f && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === m &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        I = "metered" === m && "ring-1 ring-inset ring-border-subtle",
        k = "secondary" === m && "bg-surface-secondary/92",
        _ = "muted" === m && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
        N =
          "form" === m &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        S = "outlined" === m && "border border-subtle bg-transparent",
        C =
          "flat" === m &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        T = "input" === m && "border border-primary-outline bg-primary-soft",
        P = "recommendation" === m && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== c ||
        o[1] !== A ||
        o[2] !== I ||
        o[3] !== k ||
        o[4] !== _ ||
        o[5] !== N ||
        o[6] !== S ||
        o[7] !== C ||
        o[8] !== T ||
        o[9] !== P ||
        o[10] !== x ||
        o[11] !== h ||
        o[12] !== y ||
        o[13] !== v ||
        o[14] !== w ||
        o[15] !== j
          ? ((t = (0, l.A)(x, h, y, v, w, j, A, I, k, _, N, S, C, T, P, c)),
            (o[0] = c),
            (o[1] = A),
            (o[2] = I),
            (o[3] = k),
            (o[4] = _),
            (o[5] = N),
            (o[6] = S),
            (o[7] = C),
            (o[8] = T),
            (o[9] = P),
            (o[10] = x),
            (o[11] = h),
            (o[12] = y),
            (o[13] = v),
            (o[14] = w),
            (o[15] = j),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== m
          ? ((n =
              "default" === m || "metered" === m
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
                : void 0),
            (o[17] = m),
            (o[18] = n))
          : (n = o[18]),
        o[19] !== d || o[20] !== t || o[21] !== n
          ? ((s = (0, a.jsx)("div", { className: t, style: n, children: d })),
            (o[19] = d),
            (o[20] = t),
            (o[21] = n),
            (o[22] = s))
          : (s = o[22]),
        s
      )
    }
  },
}
//# sourceMappingURL=240269.c69a812fa3.js.map
