export const __rspack_esm_ids = [224153]
export const __webpack_modules__ = {
  VVkm(e, s, t) {
    var i = t("QosV"),
      a = t("T0Rc"),
      o = t("GaA7"),
      n = t("rvFo")
    function r(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    t.d(
      s,
      {},
      {
        T9: r,
        b4: function ({
          canUsePersonalizedSuggestions: e,
          generatedSuggestionsEnabled: s,
          hasGeneratedSuggestionsReadSettled: t,
          shouldUseCuratedNewChatPageSuggestions: i,
        }) {
          return !!i || !s || !e || t
        },
        fy: function (e) {
          var s, t
          let l,
            c,
            d,
            u = (0, i.c)(9),
            { accountId: p, enabled: g, hostId: m } = e
          return (
            u[0] !== p || u[1] !== m
              ? ((s = m), (t = p), (l = [...r(s), t]), (u[0] = p), (u[1] = m), (u[2] = l))
              : (l = u[2]),
            u[3] !== m
              ? ((c = async () =>
                  (await o.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: m })) ?? !1),
                (u[3] = m),
                (u[4] = c))
              : (c = u[4]),
            u[5] !== g || u[6] !== l || u[7] !== c
              ? ((d = { queryKey: l, queryFn: c, enabled: g, retry: !1, staleTime: n.D.FIVE_MINUTES }),
                (u[5] = g),
                (u[6] = l),
                (u[7] = c),
                (u[8] = d))
              : (d = u[8]),
            (0, a.I)(d)
          )
        },
        o1: function ({ debugOverride: e, experimentEligible: s, personalized: t }) {
          return e ?? (s && t ? "generated" : "curated")
        },
        qH: function ({
          areNewChatPageSuggestionsLoading: e,
          hasProjectRoot: s,
          shouldShowHomeSuggestions: t,
          shouldUseCuratedNewChatPageSuggestions: i,
        }) {
          return !e && (!!i || (s && t))
        },
      },
    )
  },
  IBgA(e, s, t) {
    var i = t("QosV"),
      a = t("irkb"),
      o = t("xSOA"),
      n = t("zTeN"),
      r = t("Qgfj"),
      l = t("Wf1j"),
      c = t("VVkm"),
      d = t("Dgwo"),
      u = t("HUHI"),
      p = t("OiCI"),
      g = t("SGsN"),
      m = t("B81s"),
      h = t("sLlu"),
      f = t("OWtl"),
      b = t("kfGJ"),
      x = t("OMIV"),
      w = t("WFY2")
    let y = (0, r.YK)({
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
    t.d(
      s,
      {},
      {
        J: function (e) {
          let s,
            t,
            r,
            j,
            v,
            A,
            M,
            U,
            C = (0, i.c)(36),
            S = e?.hostId ?? b.fI,
            k = (0, n.gh)(f.u),
            _ = (0, n.Ul)(p.vh),
            P = (0, a.jE)(),
            N = (0, h.B)(),
            E = (0, l.A)()
          C[0] !== _ || C[1] !== S || C[2] !== k
            ? ((s = (0, u.iC)(S, (0, x.ie)(k, "403472035"), void 0)), (C[0] = _), (C[1] = S), (C[2] = k), (C[3] = s))
            : (s = C[3])
          let T = s
          C[4] !== T || C[5] !== S || C[6] !== N
            ? ((t = async () => {
                await Promise.all([
                  N((0, c.T9)(S)),
                  N(T),
                  N([...m.Sn, S]),
                  N([...m.tP, S]),
                  N(m.Kj),
                  N(["user-saved-config"]),
                ])
              }),
              (C[4] = T),
              (C[5] = S),
              (C[6] = N),
              (C[7] = t))
            : (t = C[7])
          let I = t
          ;(C[8] !== S || C[9] !== P || C[10] !== k
            ? ((r = async (e) => {
                let { appId: s, enabled: t } = e,
                  i = await (0, m.dG)(k, P, S)
                if (
                  "okOverridden" ===
                  (
                    await (0, d.V)(k, S).sendRequest("config/batchWrite", {
                      edits: (function ({ appId: e, enabled: s }) {
                        return [{ keyPath: `apps.${e}.enabled`, value: s, mergeStrategy: "upsert" }]
                      })({ appId: s, enabled: t }),
                      filePath: i?.filePath ?? null,
                      expectedVersion: i?.expectedVersion ?? null,
                      reloadUserConfig: !0,
                    })
                  ).status
                )
                  throw Error("App setting is overridden by project configuration")
              }),
              (C[8] = S),
              (C[9] = P),
              (C[10] = k),
              (C[11] = r))
            : (r = C[11]),
            C[12] !== T || C[13] !== P
              ? ((j = async (e) => {
                  let { appId: s, enabled: t } = e
                  await P.cancelQueries({ queryKey: T })
                  let i = P.getQueryData(T)
                  return (
                    i &&
                      P.setQueryData(
                        T,
                        i.map((e) => (e.id !== s || e.isEnabled === t ? e : { ...e, isEnabled: t })),
                      ),
                    { previousApps: i }
                  )
                }),
                (C[12] = T),
                (C[13] = P),
                (C[14] = j))
              : (j = C[14]),
            C[15] !== T || C[16] !== E || C[17] !== N || C[18] !== P || C[19] !== k
              ? ((v = async (e, s, t) => {
                  let { appId: i, appName: a, enabled: o } = s
                  if (o && t?.previousApps?.find((e) => e.id === i)?.isEnabled === !1) {
                    await N(T)
                    let e = P.getQueryData(T)?.find((e) => e.id === i)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let n = a ?? P.getQueryData(T)?.find((e) => e.id === i)?.name ?? i
                  k.get(g.Id).success(E.formatMessage(o ? y.enableSuccess : y.disableSuccess, { appName: n }))
                }),
                (C[15] = T),
                (C[16] = E),
                (C[17] = N),
                (C[18] = P),
                (C[19] = k),
                (C[20] = v))
              : (v = C[20]),
            C[21] !== T || C[22] !== E || C[23] !== P || C[24] !== k
              ? ((A = (e, s, t) => {
                  ;(w.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    k
                      .get(g.Id)
                      .danger(E.formatMessage(y.updateError), {
                        errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                      }),
                    t?.previousApps && P.setQueryData(T, t.previousApps))
                }),
                (C[21] = T),
                (C[22] = E),
                (C[23] = P),
                (C[24] = k),
                (C[25] = A))
              : (A = C[25]),
            C[26] !== I || C[27] !== r || C[28] !== j || C[29] !== v || C[30] !== A
              ? ((M = { mutationFn: r, onMutate: j, onSuccess: v, onError: A, onSettled: I }),
                (C[26] = I),
                (C[27] = r),
                (C[28] = j),
                (C[29] = v),
                (C[30] = A),
                (C[31] = M))
              : (M = C[31]))
          let D = (0, o.n)(M),
            L = D.isPending ? (D.variables?.appId ?? null) : null
          return (
            C[32] !== D.isPending || C[33] !== D.mutateAsync || C[34] !== L
              ? ((U = { setAppEnabled: D.mutateAsync, isUpdating: D.isPending, updatingAppId: L }),
                (C[32] = D.isPending),
                (C[33] = D.mutateAsync),
                (C[34] = L),
                (C[35] = U))
              : (U = C[35]),
            U
          )
        },
      },
    )
  },
  UtcH(e, s, t) {
    var i = t("ABep"),
      a = t("QosV"),
      o = t("GlUR"),
      n = t("on57"),
      r = t("zd8w"),
      l = t("Wf1j"),
      c = t("HOLv"),
      d = t("ygO2")
    t.d(
      s,
      {},
      {
        V: function (e) {
          let s,
            t,
            u,
            p,
            g,
            m = (0, a.c)(17),
            { ancestors: h, current: f, textSm: b } = e,
            x = (0, l.A)()
          m[0] !== x
            ? ((s = x.formatMessage({
                id: "toolbarBreadcrumb.label",
                defaultMessage: "Breadcrumb",
                description: "Accessible label for toolbar breadcrumb navigation",
              })),
              (m[0] = x),
              (m[1] = s))
            : (s = m[1])
          let w = b ? "text-sm" : "text-base"
          if (
            (m[2] !== w
              ? ((t = (0, n.$)("flex min-w-0 items-center gap-1 text-codex-description", w)), (m[2] = w), (m[3] = t))
              : (t = m[3]),
            m[4] !== h || m[5] !== b)
          ) {
            let e
            ;(m[7] !== b
              ? ((e = (e, s) => {
                  let { id: t, ...a } = e,
                    l =
                      "content" in a
                        ? a.content
                        : (0, i.jsx)("span", { className: "min-w-0 truncate", children: a.label }),
                    u = l
                  if (!("content" in a)) {
                    let { label: e, ...s } = a,
                      t = { className: (0, n.$)("min-w-0", b && "text-sm"), color: "ghost", size: "toolbar" }
                    u =
                      null != s.to
                        ? (0, i.jsx)(d.z, { ...s, ...t, children: l })
                        : (0, i.jsx)(d.$, { ...t, onClick: s.onClick, children: l })
                  }
                  return (0, i.jsxs)(
                    r.Fragment,
                    { children: [s > 0 ? (0, i.jsx)(c.I, { className: "shrink-0", asset: o.q }) : null, u] },
                    t,
                  )
                }),
                (m[7] = b),
                (m[8] = e))
              : (e = m[8]),
              (u = h.map(e)),
              (m[4] = h),
              (m[5] = b),
              (m[6] = u))
          } else u = m[6]
          return (
            m[9] !== h.length || m[10] !== f
              ? ((p =
                  null != f
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          h.length > 0 ? (0, i.jsx)(c.I, { className: "shrink-0", asset: o.q }) : null,
                          (0, i.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: f,
                          }),
                        ],
                      })
                    : null),
                (m[9] = h.length),
                (m[10] = f),
                (m[11] = p))
              : (p = m[11]),
            m[12] !== s || m[13] !== t || m[14] !== u || m[15] !== p
              ? ((g = (0, i.jsxs)("nav", { "aria-label": s, className: t, children: [u, p] })),
                (m[12] = s),
                (m[13] = t),
                (m[14] = u),
                (m[15] = p),
                (m[16] = g))
              : (g = m[16]),
            g
          )
        },
      },
    )
  },
  NYUO(e, s, t) {
    var i = t("zTeN"),
      a = t("B81s"),
      o = t("xS4d"),
      n = t("uodG"),
      r = t("OWtl"),
      l = t("OMIV")
    let c = (0, i.i1)(
      r.u,
      (e, { get: s }) =>
        s(l.JW, "2296472986") &&
        (0, n.Zi)({ remoteControlConnectionsState: s(o.h9), slingshotEnabled: s(l.JW, "1042620455") }) &&
        s(a.b9, { hostId: e }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
    )
    t.d(s, {}, { I: c })
  },
  eP0O(e, s, t) {
    var i = t("QosV"),
      a = t("zTeN"),
      o = t("ndjw")
    function n(e) {
      let s,
        t = (0, i.c)(2)
      return (
        t[0] !== e ? ((s = null == e ? void 0 : { hostId: e }), (t[0] = e), (t[1] = s)) : (s = t[1]),
        (0, a._U)(o.d7, s)
      )
    }
    t.d(
      s,
      {},
      {
        A: n,
        m: function (e) {
          return n(e).data?.homeDirectory
        },
      },
    )
  },
  mwiM(e, s, t) {
    var i = t("ABep"),
      a = t("QosV"),
      o = t("on57"),
      n = t("Qgfj"),
      r = t("oyxz")
    let l = (0, n.YK)({
      installed: {
        id: "plugins.browserExtension.installed",
        defaultMessage: "Browser extension installed",
        description: "Status text shown when a browser extension is installed",
      },
      notInstalled: {
        id: "plugins.browserExtension.notInstalled",
        defaultMessage: "Browser extension not installed",
        description: "Status text shown when a browser extension is not installed",
      },
      loading: {
        id: "plugins.browserExtension.loading",
        defaultMessage: "Use the browser extension for additional control",
        description: "Status text shown while a browser extension install state is loading",
      },
    })
    t.d(
      s,
      {},
      {
        y: function (e) {
          let s,
            t,
            n,
            c,
            d = (0, a.c)(11),
            { status: u } = e
          if (u.isLoading) {
            let e
            return (
              d[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(r.A, { ...l.loading })), (d[0] = e))
                : (e = d[0]),
              e
            )
          }
          if (null != u.detectionError) {
            let e
            return (
              d[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(r.A, {
                    id: "plugins.browserExtension.detectionError",
                    defaultMessage: "Unable to check browser extension",
                    description:
                      "Browser extension status in Computer Use settings when the app cannot read the browser's installation data",
                  })),
                  (d[1] = e))
                : (e = d[1]),
              e
            )
          }
          let p = u.isInstalled ? "bg-[var(--app-color-icon-success)]" : "bg-[var(--app-color-icon-error)]"
          return (
            d[2] !== p ? ((s = (0, o.A)("h-2 w-2 shrink-0 rounded-full", p)), (d[2] = p), (d[3] = s)) : (s = d[3]),
            d[4] !== s ? ((t = (0, i.jsx)("span", { className: s })), (d[4] = s), (d[5] = t)) : (t = d[5]),
            d[6] !== u.isInstalled
              ? ((n = (0, i.jsx)("span", {
                  className: "min-w-0 truncate",
                  children: u.isInstalled
                    ? (0, i.jsx)(r.A, { ...l.installed })
                    : (0, i.jsx)(r.A, { ...l.notInstalled }),
                })),
                (d[6] = u.isInstalled),
                (d[7] = n))
              : (n = d[7]),
            d[8] !== t || d[9] !== n
              ? ((c = (0, i.jsxs)("span", {
                  className: "inline-flex max-w-full items-center gap-2",
                  children: [t, n],
                })),
                (d[8] = t),
                (d[9] = n),
                (d[10] = c))
              : (c = d[10]),
            c
          )
        },
      },
    )
  },
  uodG(e, s, t) {
    var i = t("QosV"),
      a = t("zTeN"),
      o = t("xS4d"),
      n = t("PIwo")
    function r({ remoteControlConnectionsState: e, slingshotEnabled: s }) {
      return s && (e?.available ?? !0) && e?.accessRequired !== !0
    }
    t.d(
      s,
      {},
      {
        HZ: function ({
          selectedConnectionsTab: e,
          showControlOtherDevices: s,
          showControlThisMacTab: t,
          showRemoteControlConnectionsSection: i,
          showRemoteSshConnections: a,
          showTabbedSshPage: o,
          isWslConnectionsLoading: n,
          showWslConnections: r,
        }) {
          return "wsl" === e && n
            ? "wsl"
            : i
              ? "control-this-mac" !== e || t
                ? "access-other-devices" !== e || s
                  ? "ssh" !== e || o
                    ? "wsl" !== e || r
                      ? e
                      : "ssh"
                    : s
                      ? "access-other-devices"
                      : "control-this-mac"
                  : t
                    ? "control-this-mac"
                    : "ssh"
                : s
                  ? "access-other-devices"
                  : "ssh"
              : "wsl" === e && r
                ? "wsl"
                : a
                  ? "ssh"
                  : "access-other-devices"
        },
        Zi: r,
        wi: function () {
          let e,
            s = (0, i.c)(3),
            t = (0, a.Ul)(o.h9),
            l = (0, n.mC)()
          return (
            s[0] !== t || s[1] !== l
              ? ((e = r({ remoteControlConnectionsState: t, slingshotEnabled: l })), (s[0] = t), (s[1] = l), (s[2] = e))
              : (e = s[2]),
            e
          )
        },
      },
    )
  },
  dWmd(e, s, t) {
    var i = t("zTeN"),
      a = t("GaA7"),
      o = t("q77y"),
      n = t("OWtl"),
      r = t("rvFo")
    let l = Promise.resolve(),
      c = (0, i.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(a.appServices.computerUseSettings.getAppApprovals(), e),
        queryKey: ["computer-use-app-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: r.D.ONE_MINUTE,
      })),
      d = (0, i.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(a.appServices.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: ["messages-read-decisions"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: r.D.ONE_MINUTE,
      })),
      u = (0, i.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(a.appServices.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: ["messages-send-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: r.D.ONE_MINUTE,
      })),
      p = (0, i.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(a.appServices.computerUseSettings.getSoundMode(), e),
        queryKey: ["computer-use-sound-mode"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: r.D.FIVE_SECONDS,
      })),
      g = (0, i.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, o.P)(a.appServices.computerUseSettings.getLockedUseState(), e),
        queryKey: ["locked-computer-use"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: r.D.FIVE_SECONDS,
      }))
    t.d(
      s,
      {},
      {
        Ks: d,
        Nu: async function (e, s, t) {
          return (0, o.P)(a.appServices.computerUseSettings.setMessagesReadDecision(e, s, t))
        },
        OJ: c,
        SW: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.removeMessagesSendApproval(e))
        },
        WP: g,
        XF: p,
        Xo: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.setMessagesReadAccessPolicy(e))
        },
        Y3: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.setMessagesSendAllowAllChats(e))
        },
        Zw: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.removeAppApproval(e))
        },
        _o: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.setLockedUseEnabled(e))
        },
        rX: u,
        xx: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.removeMessagesReadDecision(e))
        },
        yk: async function (e, s) {
          let t = l.then(() => (s.throwIfAborted(), (0, o.P)(a.appServices.computerUseSettings.searchMessagesChats(e))))
          l = t.then(
            () => void 0,
            () => void 0,
          )
          let i = await t
          return (s.throwIfAborted(), i)
        },
        zz: async function (e) {
          return (0, o.P)(a.appServices.computerUseSettings.setSoundMode(e))
        },
      },
    )
  },
  KHWn(e, s, t) {
    var i = t("yQP1")
    let a = "computer-use/:browserFamily",
      o = `/settings/${a}`
    t.d(
      s,
      {},
      {
        DM: a,
        XX: function (e) {
          return `/settings/computer-use/${e}`
        },
        YE: function (e) {
          return "google-chrome" === e ? "chrome" : null != e && (0, i.rUV)(e) ? e : null
        },
        zK: o,
      },
    )
  },
  McAN(e, s, t) {
    t.d(s, { Q: () => R })
    var i = t("ABep"),
      a = t("QosV"),
      o = t("zTeN"),
      n = t("oyxz"),
      r = t("evwP"),
      l = t("ly3T"),
      c = t("ykqL"),
      d = t("yQP1"),
      u = t("Zam4"),
      p = t("Wf1j"),
      g = t("HOLv"),
      m = t("F0xz"),
      h = t("B81s"),
      f = t("BSnr"),
      b = t("fnPc"),
      x = t("AWNZ"),
      w = t("ZEx5"),
      y = t("kfGJ")
    function j(e) {
      let s,
        t,
        o = (0, a.c)(4),
        { backend: r } = e,
        l = void 0 === r ? "iab" : r,
        { selectedHostId: c } = (0, b.D)()
      return "local" !== (0, y.Qz)(c).kind
        ? null
        : (o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(f.X.Header, {
                title: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.developerMode.title",
                  defaultMessage: "Developer mode",
                  description: "Title for full CDP developer mode settings",
                }),
              })),
              (o[0] = s))
            : (s = o[0]),
          o[1] !== l || o[2] !== c
            ? ((t = (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)(f.X, {
                  children: [
                    s,
                    (0, i.jsx)(f.X.Content, {
                      children: (0, i.jsx)(w.t, { children: (0, i.jsx)(v, { backend: l, hostId: c }) }),
                    }),
                  ],
                }),
              })),
              (o[1] = l),
              (o[2] = c),
              (o[3] = t))
            : (t = o[3]),
          t)
    }
    function v(e) {
      let s,
        t,
        r,
        f,
        b,
        w,
        y,
        j,
        v,
        A,
        M,
        U = (0, a.c)(27),
        { backend: C, hostId: S } = e,
        k = (0, p.A)(),
        { data: _, isLoading: P } = (0, o.Ul)(l.Rg)
      U[0] !== S ? ((s = { hostId: S }), (U[0] = S), (U[1] = s)) : (s = U[1])
      let { data: N, isPending: E } = (0, o._U)(h.b9, s)
      U[2] !== S ? ((t = { hostId: S }), (U[2] = S), (U[3] = t)) : (t = U[3])
      let T = (0, l.hY)(t),
        I = (0, o._U)(l.F1, S),
        D = "unsupported" !== I
      U[4] !== C || U[5] !== N || U[6] !== D
        ? ((r =
            (0, d.njf)(N?.requirements?.featureRequirements?.[d.P6k]) ||
            (D && null != N && !(0, u.md)(N.requirements, "iab" === C ? "iab" : "extension"))),
          (U[4] = C),
          (U[5] = N),
          (U[6] = D),
          (U[7] = r))
        : (r = U[7])
      let L = r,
        F = P || E || "loading" === I || "error" === I,
        O = _?.fullCdpAccessEnabled === !0 && !F && !L
      ;(U[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              (0, i.jsxs)("span", {
                className: "inline-flex items-center gap-1 font-medium text-warning",
                children: [
                  (0, i.jsx)(g.I, { className: "shrink-0", "aria-hidden": !1, asset: c.h }),
                  (0, i.jsx)(n.A, {
                    id: "settings.browserUse.fullCdp.elevatedRisk.label",
                    defaultMessage: "Elevated risk",
                    description: "Label for the elevated risk warning shown for the full CDP developer mode toggle",
                  }),
                ],
              }),
              (0, i.jsx)("span", {
                children: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.fullCdp.label",
                  defaultMessage: "Enable full CDP access",
                  description: "Label for the full CDP developer mode toggle",
                }),
              }),
            ],
          })),
          (U[8] = f))
        : (f = U[8]),
        U[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)("div", {
              children: (0, i.jsx)(n.A, {
                id: "settings.browserUse.fullCdp.description",
                defaultMessage:
                  "Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.",
                description: "Description for the full CDP developer mode toggle",
              }),
            })),
            (U[9] = b))
          : (b = U[9]),
        U[10] !== L || U[11] !== E
          ? ((w =
              !E && L
                ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(n.A, {
                      id: "settings.browserUse.fullCdp.blockedByPolicy",
                      defaultMessage: "Your organization has disabled this setting.",
                      description:
                        "Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.",
                    }),
                  })
                : null),
            (U[10] = L),
            (U[11] = E),
            (U[12] = w))
          : (w = U[12]),
        U[13] !== w
          ? ((y = (0, i.jsxs)("div", { className: "flex flex-col gap-1", children: [b, w] })), (U[13] = w), (U[14] = y))
          : (y = U[14]),
        U[15] !== k
          ? ((j = k.formatMessage({
              id: "settings.browserUse.fullCdp.ariaLabel",
              defaultMessage: "Toggle full CDP access",
              description: "Aria label for toggling full CDP access",
            })),
            (U[15] = k),
            (U[16] = j))
          : (j = U[16]))
      let W = F || L || T.isPending
      return (
        U[17] !== T
          ? ((v = (e) => {
              T.mutate(e)
            }),
            (U[17] = T),
            (U[18] = v))
          : (v = U[18]),
        U[19] !== O || U[20] !== v || U[21] !== j || U[22] !== W
          ? ((A = (0, i.jsx)(m.l, { ariaLabel: j, checked: O, disabled: W, onChange: v })),
            (U[19] = O),
            (U[20] = v),
            (U[21] = j),
            (U[22] = W),
            (U[23] = A))
          : (A = U[23]),
        U[24] !== A || U[25] !== y
          ? ((M = (0, i.jsx)(x.ic, { label: f, description: y, control: A })), (U[24] = A), (U[25] = y), (U[26] = M))
          : (M = U[26]),
        M
      )
    }
    var A = t("Ks4B"),
      M = t("bqtn"),
      U = t("GO7r"),
      C = t("SGsN"),
      S = t("OWtl")
    function k() {
      let e,
        s = (0, a.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(n.A, {
              id: "settings.browserUse.historyApproval.description",
              defaultMessage: "Choose if ChatGPT asks for approval before accessing your browser's history",
              description: "Description for browser use history approval mode setting",
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    function _() {
      let e,
        s = (0, a.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(n.A, {
              id: "settings.browserUse.iabHistoryApproval.description",
              defaultMessage: "Choose whether ChatGPT can access your built-in browser history",
              description: "Description for in-app browser history approval mode setting",
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    var P = t("bcDx"),
      N = t("Xq1Q"),
      E = t("khkh")
    function T(e) {
      let s,
        t,
        r,
        c,
        d,
        u,
        g = (0, a.c)(15),
        h = (0, p.A)(),
        f = (0, o.Ul)(E.k),
        { data: b, isLoading: w } = (0, o.Ul)(l.Rg),
        y = (0, l.pT)()
      ;(g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(n.A, {
            id: "settings.browserUse.webMcp.label",
            defaultMessage: "Use site tools by default",
            description: "Label for the default WebMCP permission; individual websites can override it",
          })),
          (g[0] = s))
        : (s = g[0]),
        g[1] !== f
          ? ((t = f
              ? (0, i.jsx)(n.A, {
                  id: "settings.browserUse.webMcp.description",
                  defaultMessage:
                    "Allow ChatGPT to discover and call tools provided by websites, including WebMCP, unless you set a different permission for a site",
                  description:
                    "Explains that the browser's default website tool permission does not override permissions saved for individual sites; WebMCP is the protocol name",
                })
              : (0, i.jsx)(n.A, {
                  id: "settings.browserUse.webMcp.unavailableDescription",
                  defaultMessage: "Site tools aren't available for this account",
                  description:
                    "Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools",
                })),
            (g[1] = f),
            (g[2] = t))
          : (t = g[2]),
        g[3] !== h
          ? ((r = h.formatMessage({
              id: "settings.browserUse.webMcp.ariaLabel",
              defaultMessage: "Toggle site tools by default",
              description:
                "Accessible name for the browser's default website tool permission; individual websites can override it",
            })),
            (g[3] = h),
            (g[4] = r))
          : (r = g[4]))
      let j = f && (b?.webMcpEnabled ?? !0),
        v = !f || w || y.isPending
      return (
        g[5] !== y
          ? ((c = (e) => {
              y.mutate(e)
            }),
            (g[5] = y),
            (g[6] = c))
          : (c = g[6]),
        g[7] !== r || g[8] !== j || g[9] !== v || g[10] !== c
          ? ((d = (0, i.jsx)(m.l, { ariaLabel: r, checked: j, disabled: v, onChange: c })),
            (g[7] = r),
            (g[8] = j),
            (g[9] = v),
            (g[10] = c),
            (g[11] = d))
          : (d = g[11]),
        g[12] !== t || g[13] !== d
          ? ((u = (0, i.jsx)(x.ic, { label: s, description: t, control: d })), (g[12] = t), (g[13] = d), (g[14] = u))
          : (u = g[14]),
        u
      )
    }
    var I = t("QyE3")
    function D(e) {
      let s,
        t,
        o,
        r = (0, a.c)(14),
        { backend: l, browserUseEnabled: c, showHistory: d, showWebMcp: u, siteSettingsRow: p } = e,
        g = void 0 === c || c,
        m = void 0 === d || d,
        h = void 0 !== u && u,
        b = null != p || (g && (m || h))
      return (
        r[0] !== l || r[1] !== g || r[2] !== b || r[3] !== m || r[4] !== h || r[5] !== p
          ? ((s = b
              ? (0, i.jsxs)(f.X, {
                  children: [
                    (0, i.jsx)(f.X.Header, {
                      title:
                        "chrome" === l
                          ? (0, i.jsx)(n.A, {
                              id: "settings.computerUse.chrome.policy.browserPermissions.title",
                              defaultMessage: "Browser permissions",
                              description: "Title for Chromium browser permissions settings section",
                            })
                          : (0, i.jsx)(n.A, {
                              id: "settings.browserUse.policy.browserPermissions.title",
                              defaultMessage: "Browser permissions",
                              description: "Title for browser use permissions settings section",
                            }),
                    }),
                    (0, i.jsx)(f.X.Content, {
                      children: (0, i.jsxs)(w.t, {
                        children: [
                          p,
                          g
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  m && "chrome" === l ? (0, i.jsx)(L, {}) : null,
                                  m && "iab" === l ? (0, i.jsx)(F, {}) : null,
                                  h ? (0, i.jsx)(T, { backend: l }) : null,
                                ],
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                })
              : null),
            (r[0] = l),
            (r[1] = g),
            (r[2] = b),
            (r[3] = m),
            (r[4] = h),
            (r[5] = p),
            (r[6] = s))
          : (s = r[6]),
        r[7] !== l || r[8] !== g || r[9] !== h
          ? ((t = g
              ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(N.af, { backend: l, showWebMcp: h }), (0, i.jsx)(j, { backend: l })],
                })
              : null),
            (r[7] = l),
            (r[8] = g),
            (r[9] = h),
            (r[10] = t))
          : (t = r[10]),
        r[11] !== s || r[12] !== t
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [s, t] })), (r[11] = s), (r[12] = t), (r[13] = o))
          : (o = r[13]),
        o
      )
    }
    function L() {
      let e,
        s,
        t = (0, a.c)(3),
        o = (0, l.yh)()
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(k, {})), (t[0] = e)) : (e = t[0]),
        t[1] !== o
          ? ((s = (0, i.jsx)(O, { backend: "chrome", description: e, writeApprovalModeMutation: o })),
            (t[1] = o),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function F() {
      let e,
        s,
        t = (0, a.c)(3),
        o = (0, l.w7)()
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(_, {})), (t[0] = e)) : (e = t[0]),
        t[1] !== o
          ? ((s = (0, i.jsx)(O, { backend: "iab", description: e, writeApprovalModeMutation: o })),
            (t[1] = o),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function O(e) {
      let s,
        t,
        r,
        c,
        d,
        p,
        g,
        m,
        f,
        w,
        y,
        j,
        v,
        k,
        _,
        N,
        E,
        T,
        D,
        L,
        F = (0, a.c)(62),
        { backend: O, description: W, writeApprovalModeMutation: R } = e,
        B = (0, o.gh)(S.u),
        { selectedHostId: G } = (0, b.D)(),
        { data: q, isLoading: H } = (0, o.Ul)(l.Rg),
        { data: V, isPending: z } = (0, o._U)(h.I2, G),
        X = (V?.configReadSucceeded === !0 ? V.config.browser_use?.allow_history_access : void 0) !== !1,
        K = "iab" === O ? q?.iabHistoryApprovalMode : q?.chromeHistoryApprovalMode
      F[0] !== G ? ((s = { failClosed: !0, hostId: G }), (F[0] = G), (F[1] = s)) : (s = F[1])
      let { data: Q, isError: Z, isPending: $ } = (0, o._U)(h.b9, s),
        Y = Q?.requirements ?? null,
        J = "iab" === O ? "iab" : "extension"
      F[2] !== Y || F[3] !== J ? ((t = (0, u.md)(Y, J)), (F[2] = Y), (F[3] = J), (F[4] = t)) : (t = F[4])
      let ee = t
      F[5] !== ee || F[6] !== Y
        ? ((r = ee && (0, u.s$)(Y, "history")), (F[5] = ee), (F[6] = Y), (F[7] = r))
        : (r = F[7])
      let es = r
      F[8] !== Y || F[9] !== es ? ((c = (0, u.Bv)(Y) && !es), (F[8] = Y), (F[9] = es), (F[10] = c)) : (c = F[10])
      let et = c
      F[11] !== ee || F[12] !== Y ? ((d = ee && (0, u.YP)(Y)), (F[11] = ee), (F[12] = Y), (F[13] = d)) : (d = F[13])
      let ei = d
      ;(F[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            id: "alwaysAsk",
            label: (0, i.jsx)(n.A, {
              id: "settings.browserUse.approval.alwaysAsk.label",
              defaultMessage: "Always ask",
              description: "Label for browser use always ask approval mode",
            }),
            description: (0, i.jsx)(n.A, {
              id: "settings.browserUse.historyApproval.alwaysAsk.description",
              defaultMessage: "Ask before accessing history",
              description: "Description for browser use always ask history approval mode",
            }),
          }),
          (F[14] = p))
        : (p = F[14]),
        F[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = {
              id: "neverAsk",
              label: (0, i.jsx)(n.A, {
                id: "settings.browserUse.approval.neverAsk.label",
                defaultMessage: "Always allow",
                description: "Label for browser use never ask approval mode",
              }),
              description: (0, i.jsx)(n.A, {
                id: "settings.browserUse.historyApproval.neverAsk.description",
                defaultMessage: "Access history without asking",
                description: "Description for browser use never ask history approval mode",
              }),
            }),
            (F[15] = g))
          : (g = F[15]),
        F[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = [
              p,
              g,
              {
                id: "disabled",
                label: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.historyApproval.disabled.label",
                  defaultMessage: "Disable",
                  description: "Label for disabled browser history approval mode",
                }),
                description: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.historyApproval.disabled.description",
                  defaultMessage: "Do not allow access to history",
                  description: "Description for disabled browser history approval mode",
                }),
              },
            ]),
            (F[16] = m))
          : (m = F[16]))
      let ea = m
      ;(F[17] !== es || F[18] !== K || F[19] !== X || F[20] !== ei
        ? ((f = K),
          es && X ? "neverAsk" !== K || ei || (f = "alwaysAsk") : (f = "disabled"),
          (F[17] = es),
          (F[18] = K),
          (F[19] = X),
          (F[20] = ei),
          (F[21] = f))
        : (f = F[21]),
        F[22] !== f ? ((w = ea.find((e) => e.id === f) ?? ea[0]), (F[22] = f), (F[23] = w)) : (w = F[23]))
      let eo = w,
        en = H || $ || z,
        er = R.isPending
      F[24] !== es ||
      F[25] !== K ||
      F[26] !== X ||
      F[27] !== er ||
      F[28] !== ei ||
      F[29] !== B ||
      F[30] !== G ||
      F[31] !== V ||
      F[32] !== R
        ? ((y = async (e) => {
            if ((e !== K || !X) && !er && (es || "disabled" === e) && ("neverAsk" !== e || ei))
              try {
                if ("disabled" === e)
                  return void (V?.configReadSucceeded === !0 && Object.hasOwn(V.config, "browser_use")
                    ? await (0, l.Rn)(B, G, V, { capability: "history", enabled: !1 })
                    : await R.mutateAsync(e))
                ;(e !== K && (await R.mutateAsync(e)),
                  X || (await (0, l.Rn)(B, G, V, { capability: "history", enabled: !0 })))
              } catch {
                B.get(C.Id).danger(
                  (0, i.jsx)(n.A, {
                    id: "settings.browserUse.historyApproval.saveError",
                    defaultMessage: "Unable to save history setting",
                    description: "Toast shown when saving browser use history approval mode fails",
                  }),
                  { errorAnalytics: { toastId: "settings.browserUse.historyApproval.saveError" } },
                )
              }
          }),
          (F[24] = es),
          (F[25] = K),
          (F[26] = X),
          (F[27] = er),
          (F[28] = ei),
          (F[29] = B),
          (F[30] = G),
          (F[31] = V),
          (F[32] = R),
          (F[33] = y))
        : (y = F[33])
      let el = y
      ;(F[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, i.jsx)("span", {
            className: "inline-flex items-center gap-2",
            children: (0, i.jsx)(n.A, {
              id: "settings.browserUse.historyApproval.label",
              defaultMessage: "History",
              description: "Label for browser use history approval mode setting",
            }),
          })),
          (F[34] = j))
        : (j = F[34]),
        F[35] !== W || F[36] !== et
          ? ((v = et
              ? (0, i.jsx)(n.A, {
                  id: "settings.browserUse.historyApproval.managedDescription",
                  defaultMessage: "History access is disabled by your organization",
                  description: "Explanation that an enterprise policy disables browser history access",
                })
              : W),
            (F[35] = W),
            (F[36] = et),
            (F[37] = v))
          : (v = F[37]))
      let ec = en || Z || er || !es,
        ed = en || Z || er || !es
      F[38] !== et
        ? ((k = et ? (0, i.jsx)(U.nr3, { className: "text-secondary" }) : null), (F[38] = et), (F[39] = k))
        : (k = F[39])
      let eu = eo?.label
      return (
        F[40] !== eu
          ? ((_ = (0, i.jsx)("span", { className: "truncate", children: eu })), (F[40] = eu), (F[41] = _))
          : (_ = F[41]),
        F[42] !== ed || F[43] !== k || F[44] !== _
          ? ((N = (0, i.jsxs)(I.vg, { className: "w-[152px]", disabled: ed, children: [k, _] })),
            (F[42] = ed),
            (F[43] = k),
            (F[44] = _),
            (F[45] = N))
          : (N = F[45]),
        F[46] !== f || F[47] !== el || F[48] !== es || F[49] !== er || F[50] !== ei
          ? ((E = (0, i.jsx)("div", {
              className: "flex flex-col",
              children: ea.map((e) => {
                let s = e.id === f
                return (0, i.jsx)(
                  M.ms.Item,
                  {
                    allowWrap: !0,
                    disabled: er || (!es && "disabled" !== e.id) || ("neverAsk" === e.id && !ei),
                    rightIconAsset: s ? A.G : void 0,
                    onSelect: () => {
                      el(e.id)
                    },
                    children: (0, i.jsxs)("div", {
                      className: "flex min-w-0 flex-col gap-0.5",
                      children: [
                        (0, i.jsx)("span", { className: "truncate", children: e.label }),
                        (0, i.jsx)("span", { className: "truncate text-sm text-secondary", children: e.description }),
                      ],
                    }),
                  },
                  e.id,
                )
              }),
            })),
            (F[46] = f),
            (F[47] = el),
            (F[48] = es),
            (F[49] = er),
            (F[50] = ei),
            (F[51] = E))
          : (E = F[51]),
        F[52] !== ec || F[53] !== N || F[54] !== E
          ? ((T = (0, i.jsx)(M.Ab, {
              contentWidth: "menuWide",
              align: "end",
              disabled: ec,
              triggerButton: N,
              children: E,
            })),
            (F[52] = ec),
            (F[53] = N),
            (F[54] = E),
            (F[55] = T))
          : (T = F[55]),
        F[56] !== et || F[57] !== T
          ? ((D = (0, i.jsx)(P.UL, { managed: et, children: T })), (F[56] = et), (F[57] = T), (F[58] = D))
          : (D = F[58]),
        F[59] !== v || F[60] !== D
          ? ((L = (0, i.jsx)(x.ic, { label: j, description: v, control: D })), (F[59] = v), (F[60] = D), (F[61] = L))
          : (L = F[61]),
        L
      )
    }
    var W = t("I7Ou")
    function R(e) {
      let s,
        t,
        c,
        d = (0, a.c)(18),
        { backend: u, browserUseEnabled: p, showHistory: g, showWebMcp: m, siteSettingsRow: h } = e,
        x = void 0 === p || p,
        y = void 0 === g || g,
        v = void 0 !== m && m,
        { selectedHostId: A } = (0, b.D)(),
        M = (0, o._U)(l.F1, A)
      if ("loading" === M) {
        let e
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(W.u, {
                children: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.config.loading",
                  defaultMessage: "Loading browser settings…",
                  description: "Loading status while reading user browser configuration",
                }),
              })),
              (d[0] = e))
            : (e = d[0]),
          e
        )
      }
      if ("error" === M) {
        let e
        return (
          d[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.W, {
                layout: "settings-row",
                children: (0, i.jsx)(n.A, {
                  id: "settings.browserUse.config.loadError",
                  defaultMessage: "Unable to load browser settings",
                  description:
                    "Error shown instead of editable browser permissions when user configuration cannot be loaded",
                }),
              })),
              (d[1] = e))
            : (e = d[1]),
          e
        )
      }
      if ("supported" === M) {
        let e
        return (
          d[2] !== u || d[3] !== x || d[4] !== y || d[5] !== v || d[6] !== h
            ? ((e = (0, i.jsx)(D, {
                backend: u,
                browserUseEnabled: x,
                showHistory: y,
                showWebMcp: v,
                siteSettingsRow: h,
              })),
              (d[2] = u),
              (d[3] = x),
              (d[4] = y),
              (d[5] = v),
              (d[6] = h),
              (d[7] = e))
            : (e = d[7]),
          e
        )
      }
      return (
        d[8] !== u || d[9] !== x || d[10] !== v || d[11] !== h
          ? ((s =
              null != h || (x && v)
                ? (0, i.jsxs)(f.X, {
                    children: [
                      (0, i.jsx)(f.X.Header, {
                        title:
                          "chrome" === u
                            ? (0, i.jsx)(n.A, {
                                id: "settings.computerUse.chrome.permissions.title",
                                defaultMessage: "Permissions",
                                description: "Title for Chromium browser permissions settings section",
                              })
                            : (0, i.jsx)(n.A, {
                                id: "settings.browserUse.permissions.title",
                                defaultMessage: "Permissions",
                                description: "Title for browser use permissions settings section",
                              }),
                      }),
                      (0, i.jsx)(f.X.Content, {
                        children: (0, i.jsxs)(w.t, { children: [h, x && v ? (0, i.jsx)(T, { backend: u }) : null] }),
                      }),
                    ],
                  })
                : null),
            (d[8] = u),
            (d[9] = x),
            (d[10] = v),
            (d[11] = h),
            (d[12] = s))
          : (s = d[12]),
        d[13] !== x ? ((t = x ? (0, i.jsx)(j, {}) : null), (d[13] = x), (d[14] = t)) : (t = d[14]),
        d[15] !== s || d[16] !== t
          ? ((c = (0, i.jsxs)(i.Fragment, { children: [s, t] })), (d[15] = s), (d[16] = t), (d[17] = c))
          : (c = d[17]),
        c
      )
    }
  },
  R2BH(e, s, t) {
    t.d(s, { ComputerUseSettings: () => e3 })
    var i = t("ABep"),
      a = t("QosV"),
      o = t("Ks4B")
    let n = (0, t("nkTT").a)({
      name: "sidebar-light-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 2.669922, y: 4.128906, width: 22.660156, height: 19.743164 },
        visualBounds: { x: 2.669922, y: 4.128906, width: 22.660156, height: 19.743164 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.669922, y: 4.128906, width: 22.660156, height: 19.743164 },
        center: { x: 14, y: 14.000488 },
        insets: { top: 4.128906, right: 2.669922, bottom: 4.12793, left: 2.669922 },
        anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14.000488 }, foreground: { x: 14, y: 14.000488 } },
      },
      capabilities: ["icon"],
      body: '<path d="M20.5 4.12891C23.1675 4.12891 25.3301 6.29145 25.3301 8.95898V19.043C25.3298 21.7103 23.1674 23.8721 20.5 23.8721H7.5C4.83263 23.8721 2.67019 21.7103 2.66992 19.043V8.95898C2.66992 6.29145 4.83246 4.12891 7.5 4.12891H20.5ZM11.3301 22.2129H20.5C22.2506 22.2129 23.6697 20.7935 23.6699 19.043V8.95898C23.6699 7.20824 22.2507 5.78906 20.5 5.78906H11.3301V22.2129ZM7.5 5.78906C5.74926 5.78906 4.33008 7.20824 4.33008 8.95898V19.043C4.33034 20.7935 5.74942 22.2129 7.5 22.2129H9.66992V5.78906H7.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = t("T0Rc"),
      l = t("xSOA"),
      c = t("yQP1"),
      d = t("on57"),
      u = t("i5ac"),
      p = t.n(u),
      g = t("zTeN"),
      m = t("DBCl"),
      h = t("Haiv"),
      f = t("zd8w"),
      b = t("oyxz"),
      x = t("Wf1j"),
      w = t("HZfM"),
      y = t("IBgA"),
      j = t("HUHI"),
      v = t.p + "assets/microsoft-excel-large.ccdf999e2d.png",
      A = t.p + "assets/microsoft-powerpoint-large.6c9c4e445f.png",
      M = t.p + "assets/microsoft-word-large.e6e10bd5ed.png",
      U = t("usf5"),
      C = t("oSZg"),
      S = t("aTcy"),
      k = t("ygO2"),
      _ = t("JNtf"),
      P = t("mUDD"),
      N = t("bqtn"),
      E = t("Ot7V"),
      T = t("HOLv"),
      I = t("evwP"),
      D = t("SGsN"),
      L = t("F0xz"),
      F = t("NYUO"),
      O = t("IIEq"),
      W = t("jWaO"),
      R = t("eP0O"),
      B = t("rO8L"),
      G = t("Vyeu"),
      q = t("wwME"),
      H = (e) =>
        (0, i.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M9 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H15V19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19V18H5C3.89543 18 3 17.1046 3 16V13H4C5.65685 13 7 11.6569 7 10C7 8.34315 5.65685 7 4 7H3V5C3 3.89543 3.89543 3 5 3H9Z",
            fill: "white",
            stroke: "#8E8E93",
            strokeWidth: 2,
            strokeLinejoin: "round",
          }),
        }),
      V = t("LdDb"),
      z = t("WXrt"),
      X = t("mwiM"),
      K = t("NFKX"),
      Q = t("BA9i"),
      Z = t("cLdu"),
      $ = t("ueue"),
      Y = t("GaA7"),
      J = t("OWtl"),
      ee = t("dWmd"),
      es = t("KHWn")
    function et(e) {
      let s,
        t,
        o,
        n = (0, a.c)(7),
        { computerImageDataUrl: r, lockImageDataUrl: l } = e
      return (
        n[0] !== r
          ? ((s = (0, i.jsx)("img", {
              alt: "",
              className: "absolute top-0 left-1 h-[53px] w-[53px] object-contain",
              draggable: !1,
              src: r,
            })),
            (n[0] = r),
            (n[1] = s))
          : (s = n[1]),
        n[2] !== l
          ? ((t = (0, i.jsx)("img", {
              alt: "",
              className: "absolute right-0 bottom-0 h-[33px] w-[27px] object-contain",
              draggable: !1,
              src: l,
            })),
            (n[2] = l),
            (n[3] = t))
          : (t = n[3]),
        n[4] !== s || n[5] !== t
          ? ((o = (0, i.jsxs)("span", {
              className: "relative inline-block h-[57px] w-[62px] shrink-0",
              children: [s, t],
            })),
            (n[4] = s),
            (n[5] = t),
            (n[6] = o))
          : (o = n[6]),
        o
      )
    }
    var ei = t("RxZZ"),
      ea = t("jxU8"),
      eo = t("McAN")
    function en(e) {
      switch (e) {
        case "macOS":
        case "linux":
          return ["chrome"]
        case "windows":
          return ["chrome", "edge"]
      }
    }
    var er = t("UtcH"),
      el = t("Qgfj")
    let ec = (0, el.YK)({
      control: {
        id: "settings.computerUse.install.title",
        defaultMessage: "Control",
        description: "Title for computer use plugin install settings section",
      },
      computerUse: {
        id: "settings.computerUse.breadcrumb.computerUse",
        defaultMessage: "Computer use",
        description: "Computer use breadcrumb label",
      },
      anyApp: {
        id: "settings.computerUse.anyApp.title",
        defaultMessage: "Any App",
        description: "Label for the Computer Use plugin row that lets Codex control 'Any App' on the user's computer",
      },
      googleChrome: {
        id: "settings.computerUse.chrome.pluginTitle",
        defaultMessage: "Google Chrome",
        description: "Title for the Google Chrome plugin control row",
      },
      microsoftEdge: {
        id: "settings.computerUse.edge.pluginTitle",
        defaultMessage: "Microsoft Edge",
        description: "Title for the Microsoft Edge browser control row",
      },
      safari: {
        id: "settings.computerUse.safari.pluginTitle",
        defaultMessage: "Safari",
        description: "Title for the Safari browser control row",
      },
      messages: {
        id: "settings.computerUse.messages.pluginTitle",
        defaultMessage: "Messages",
        description: "Title for the Messages plugin control row",
      },
      manage: {
        id: "settings.computerUse.manage",
        defaultMessage: "Manage",
        description: "Button label to manage Computer Use plugin settings",
      },
      microsoftExcel: {
        id: "settings.computerUse.microsoftExcel.pluginTitle",
        defaultMessage: "Microsoft Excel",
        description: "Title for the Microsoft Excel plugin control row",
      },
      microsoftExcelDescription: {
        id: "settings.computerUse.microsoftExcel.description",
        defaultMessage: "Let ChatGPT use Microsoft Excel add-in for additional control",
        description: "Description for the Microsoft Excel plugin control row",
      },
      microsoftExcelToggleAria: {
        id: "settings.computerUse.microsoftExcel.appToggleAria",
        defaultMessage: "Toggle Microsoft Excel live control",
        description: "Accessible label for toggling Microsoft Excel live control from Computer Use settings",
      },
      microsoftExcelDisableTooltip: {
        id: "settings.computerUse.microsoftExcel.disableToggleTooltip",
        defaultMessage: "Disable Microsoft Excel live control",
        description: "Tooltip label for disabling Microsoft Excel live control",
      },
      microsoftExcelEnableTooltip: {
        id: "settings.computerUse.microsoftExcel.enableToggleTooltip",
        defaultMessage: "Enable Microsoft Excel live control",
        description: "Tooltip label for enabling Microsoft Excel live control",
      },
      microsoftPowerPoint: {
        id: "settings.computerUse.microsoftPowerPoint.pluginTitle",
        defaultMessage: "Microsoft PowerPoint",
        description: "Title for the Microsoft PowerPoint plugin control row",
      },
      microsoftPowerPointDescription: {
        id: "settings.computerUse.microsoftPowerPoint.description",
        defaultMessage: "Let ChatGPT use Microsoft PowerPoint add-in for additional control",
        description: "Description for the Microsoft PowerPoint plugin control row",
      },
      microsoftPowerPointToggleAria: {
        id: "settings.computerUse.microsoftPowerPoint.appToggleAria",
        defaultMessage: "Toggle Microsoft PowerPoint live control",
        description: "Accessible label for toggling Microsoft PowerPoint live control from Computer Use settings",
      },
      microsoftPowerPointDisableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.disableToggleTooltip",
        defaultMessage: "Disable Microsoft PowerPoint live control",
        description: "Tooltip label for disabling Microsoft PowerPoint live control",
      },
      microsoftPowerPointEnableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.enableToggleTooltip",
        defaultMessage: "Enable Microsoft PowerPoint live control",
        description: "Tooltip label for enabling Microsoft PowerPoint live control",
      },
      microsoftWord: {
        id: "settings.computerUse.microsoftWord.pluginTitle",
        defaultMessage: "Microsoft Word",
        description: "Title for the Microsoft Word plugin control row",
      },
      microsoftWordDescription: {
        id: "settings.computerUse.microsoftWord.description",
        defaultMessage: "Let ChatGPT use Microsoft Word add-in for additional control",
        description: "Description for the Microsoft Word plugin control row",
      },
      microsoftWordToggleAria: {
        id: "settings.computerUse.microsoftWord.appToggleAria",
        defaultMessage: "Toggle Microsoft Word live control",
        description: "Accessible label for toggling Microsoft Word live control from Computer Use settings",
      },
      microsoftWordDisableTooltip: {
        id: "settings.computerUse.microsoftWord.disableToggleTooltip",
        defaultMessage: "Disable Microsoft Word live control",
        description: "Tooltip label for disabling Microsoft Word live control",
      },
      microsoftWordEnableTooltip: {
        id: "settings.computerUse.microsoftWord.enableToggleTooltip",
        defaultMessage: "Enable Microsoft Word live control",
        description: "Tooltip label for enabling Microsoft Word live control",
      },
      alwaysAllowedApps: {
        id: "settings.computerUse.allowedApps.title",
        defaultMessage: "Always-allowed apps",
        description: "Title for computer use always allowed apps list",
      },
      foregroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundClicks",
        defaultMessage: "Play sounds for foreground clicks",
        description: "Computer use sound setting option for foreground click sounds",
      },
      foregroundAndBackgroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundAndBackgroundClicks",
        defaultMessage: "Play sounds for foreground and background clicks",
        description: "Computer use sound setting option for foreground and background click sounds",
      },
      noClickSounds: {
        id: "settings.computerUse.sounds.off",
        defaultMessage: "Don’t play sounds",
        description: "Computer use sound setting option for no sounds",
      },
    })
    function ed(e) {
      let s,
        t,
        o,
        n = (0, a.c)(6),
        { current: r } = e,
        l = (0, w.Zp)()
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(b.A, { ...ec.computerUse })), (n[0] = s))
          : (s = n[0]),
        n[1] !== l
          ? ((t = [{ id: "computer-use", label: s, onClick: () => void l("/settings/computer-use") }]),
            (n[1] = l),
            (n[2] = t))
          : (t = n[2]),
        n[3] !== r || n[4] !== t
          ? ((o = (0, i.jsx)(er.V, { ancestors: t, current: r })), (n[3] = r), (n[4] = t), (n[5] = o))
          : (o = n[5]),
        o
      )
    }
    var eu = t("GO7r"),
      ep = t("BSnr"),
      eg = t("I7Ou"),
      em = t("AWNZ"),
      eh = t("ZEx5")
    function ef(e) {
      let s,
        t,
        o,
        n,
        r,
        l,
        c,
        d,
        u,
        p,
        g,
        m,
        h,
        f = (0, a.c)(35),
        { chat: x, permission: w, readAccessPolicy: y, isRemoving: j, onClose: v, onRemove: A } = e,
        M = void 0 === y ? "askPerChat" : y
      f[0] !== M
        ? ((s =
            "askPerChat" === M
              ? (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.removeDialog.subtitle",
                  defaultMessage: "ChatGPT will ask before using messages from this chat",
                  description:
                    "Explains that removing a saved Messages read permission restores the default approval requirement",
                })
              : (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.removeDialog.allowSubtitle",
                  defaultMessage: "ChatGPT will be able to read this chat without asking",
                  description:
                    "Explains that removing a saved Messages read permission allows reading without approval under the selected reading policy",
                })),
          (f[0] = M),
          (f[1] = s))
        : (s = f[1])
      let U = s,
        C = null != x
      return (
        f[2] !== v
          ? ((t = (e) => {
              e || v()
            }),
            (f[2] = v),
            (f[3] = t))
          : (t = f[3]),
        f[4] !== x || f[5] !== j || f[6] !== A
          ? ((o = (e) => {
              ;(e.preventDefault(), null == x || j || A(x.chatGUID))
            }),
            (f[4] = x),
            (f[5] = j),
            (f[6] = A),
            (f[7] = o))
          : (o = f[7]),
        f[8] !== x?.displayName || f[9] !== w
          ? ((n = (0, i.jsx)(_.L3, {
              asChild: !0,
              children: (0, i.jsx)("span", {
                children:
                  "read" === w
                    ? (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.readAccess.removeDialog.title",
                        defaultMessage: "Remove saved read permission for “{displayName}”?",
                        description:
                          "Confirmation title for removing a Messages chat's saved read permission, without deleting the chat",
                        values: { displayName: x?.displayName ?? "" },
                      })
                    : (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.allowedChats.removeDialog.title",
                        defaultMessage: "Remove saved send permission for “{displayName}”?",
                        description: "Confirmation title for removing an always allowed Messages chat",
                        values: { displayName: x?.displayName ?? "" },
                      }),
              }),
            })),
            (f[8] = x?.displayName),
            (f[9] = w),
            (f[10] = n))
          : (n = f[10]),
        f[11] !== w || f[12] !== U
          ? ((r = (0, i.jsx)(_.rr, {
              asChild: !0,
              children: (0, i.jsx)("span", {
                children:
                  "read" === w
                    ? U
                    : (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.allowedChats.removeDialog.subtitle",
                        defaultMessage: "ChatGPT will ask before sending messages to this chat",
                        description: "Confirmation description for removing an always allowed Messages chat",
                      }),
              }),
            })),
            (f[11] = w),
            (f[12] = U),
            (f[13] = r))
          : (r = f[13]),
        f[14] !== n || f[15] !== r
          ? ((l = (0, i.jsx)(P.OO, {
              children: (0, i.jsx)(P.c7, { titleClassName: "break-words pe-8", title: n, subtitle: r }),
            })),
            (f[14] = n),
            (f[15] = r),
            (f[16] = l))
          : (l = f[16]),
        f[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.removePermissionDialog.cancel",
              defaultMessage: "Cancel",
              description: "Cancel button label for removing a Messages chat's saved read or send permission",
            })),
            (f[17] = c))
          : (c = f[17]),
        f[18] !== j || f[19] !== v
          ? ((d = (0, i.jsx)(k.$, { color: "ghost", disabled: j, onClick: v, type: "button", children: c })),
            (f[18] = j),
            (f[19] = v),
            (f[20] = d))
          : (d = f[20]),
        f[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.removePermissionDialog.confirm",
              defaultMessage: "Remove",
              description: "Confirmation button label for removing a Messages chat's saved read or send permission",
            })),
            (f[21] = u))
          : (u = f[21]),
        f[22] !== j
          ? ((p = (0, i.jsx)(k.$, { color: "danger", loading: j, type: "submit", children: u })),
            (f[22] = j),
            (f[23] = p))
          : (p = f[23]),
        f[24] !== d || f[25] !== p
          ? ((g = (0, i.jsx)(P.OO, { children: (0, i.jsxs)(P.Es, { children: [d, p] }) })),
            (f[24] = d),
            (f[25] = p),
            (f[26] = g))
          : (g = f[26]),
        f[27] !== g || f[28] !== o || f[29] !== l
          ? ((m = (0, i.jsxs)(P.R4, { as: "form", onSubmit: o, children: [l, g] })),
            (f[27] = g),
            (f[28] = o),
            (f[29] = l),
            (f[30] = m))
          : (m = f[30]),
        f[31] !== m || f[32] !== C || f[33] !== t
          ? ((h = (0, i.jsx)(_.lG, {
              open: C,
              onOpenChange: t,
              dialogCloseClassName: "rtl:start-auto rtl:end-4",
              size: "compact",
              children: m,
            })),
            (f[31] = m),
            (f[32] = C),
            (f[33] = t),
            (f[34] = h))
          : (h = f[34]),
        h
      )
    }
    var eb = t("QyE3"),
      ex = t("irkb"),
      ew = t("qhiJ"),
      ey = t("ZZgR"),
      ej = t("Lhpx"),
      ev = t("nzx4"),
      eA = t("zLIa"),
      eM = t("rvFo"),
      eU = t("GEsy")
    function eC(e) {
      let s,
        t = (0, a.c)(2),
        { decision: o } = e,
        n = eS[o]
      return (t[0] !== n ? ((s = (0, i.jsx)(b.A, { ...n })), (t[0] = n), (t[1] = s)) : (s = t[1]), s)
    }
    let eS = (0, el.YK)({
      alwaysAllow: {
        id: "settings.computerUse.messages.readAccess.alwaysAllow",
        defaultMessage: "Always allow",
        description: "Messages read permission that allows access without asking",
      },
      ask: {
        id: "settings.computerUse.messages.readAccess.ask",
        defaultMessage: "Always ask",
        description: "Messages read permission that asks for approval when needed",
      },
      alwaysDeny: {
        id: "settings.computerUse.messages.readAccess.alwaysDeny",
        defaultMessage: "Never allow",
        description: "Messages read permission that denies access without asking",
      },
    })
    function ek(e) {
      let s,
        t,
        o,
        n,
        r,
        l,
        c = (0, a.c)(15),
        { defaultOpen: d, disabled: u, savedChats: p, isSaving: g, onAdd: m, triggerLabel: h } = e,
        [b, x] = (0, f.useState)(void 0 !== d && d)
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, i.jsx)(eu.xFs, {})), (c[0] = s)) : (s = c[0]),
        c[1] !== u || c[2] !== h
          ? ((t = (0, i.jsxs)(k.$, { color: "secondary", disabled: u, size: "toolbar", children: [s, h] })),
            (c[1] = u),
            (c[2] = h),
            (c[3] = t))
          : (t = c[3]),
        c[4] !== m ? ((o = (e, s) => m(e, s, () => x(!1))), (c[4] = m), (c[5] = o)) : (o = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = () => x(!1)), (c[6] = n)) : (n = c[6]),
        c[7] !== g || c[8] !== p || c[9] !== o
          ? ((r = (0, i.jsx)(e_, { savedChats: p, isSaving: g, onAdd: o, onCancel: n })),
            (c[7] = g),
            (c[8] = p),
            (c[9] = o),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== b || c[12] !== t || c[13] !== r
          ? ((l = (0, i.jsx)(_.lG, {
              open: b,
              onOpenChange: x,
              contentOverflow: "visible",
              size: "compact",
              triggerContent: t,
              children: r,
            })),
            (c[11] = b),
            (c[12] = t),
            (c[13] = r),
            (c[14] = l))
          : (l = c[14]),
        l
      )
    }
    function e_(e) {
      let s,
        t,
        o,
        n,
        l,
        c,
        d,
        u,
        p,
        g,
        m,
        h,
        w,
        y,
        j,
        v,
        A,
        M,
        U,
        C,
        S,
        E,
        T,
        I,
        D,
        L,
        F,
        O,
        W,
        R,
        B,
        G,
        q,
        H,
        V,
        z,
        X,
        K,
        Q,
        Z,
        $,
        Y,
        J,
        es,
        et = (0, a.c)(121),
        { savedChats: ei, isSaving: ea, onAdd: eo, onCancel: en } = e,
        er = (0, x.A)(),
        el = (0, ex.jE)(),
        ec = (0, f.useId)(),
        ed = (0, f.useId)(),
        eu = (0, f.useRef)(null),
        [ep, eg] = (0, f.useState)(null),
        [em, eh] = (0, f.useState)(""),
        [ef, eS] = (0, f.useState)(0),
        [ek, e_] = (0, f.useState)(!1),
        [eD, eL] = (0, f.useState)(),
        [eF, eO] = (0, f.useState)("ask")
      et[0] !== em ? ((s = em.trim()), (et[0] = em), (et[1] = s)) : (s = et[1])
      let eW = s,
        eR = ek && null == eD && "" !== eW,
        eB = (0, eU.o)(eW, 200)
      et[2] !== eB || et[3] !== ef
        ? ((t = ["messages-chat-search", { query: eB, searchSessionId: ef }]), (et[2] = eB), (et[3] = ef), (et[4] = t))
        : (t = et[4])
      let eG = t
      et[5] !== eB
        ? ((o = (e) => {
            let { signal: s } = e
            return (0, ee.yk)(eB, s)
          }),
          (et[5] = eB),
          (et[6] = o))
        : (o = et[6])
      let eq = null == eD && "" !== eW && eW === eB
      ;(et[7] !== ef
        ? ((n = (e, s) => (s?.queryKey[1].searchSessionId === ef ? e : void 0)), (et[7] = ef), (et[8] = n))
        : (n = et[8]),
        et[9] !== eG || et[10] !== o || et[11] !== eq || et[12] !== n
          ? ((l = {
              queryKey: eG,
              queryFn: o,
              enabled: eq,
              placeholderData: n,
              staleTime: eM.D.ONE_MINUTE,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (et[9] = eG),
            (et[10] = o),
            (et[11] = eq),
            (et[12] = n),
            (et[13] = l))
          : (l = et[13]))
      let { data: eH, isError: eV, isPending: ez, isFetching: eX, refetch: eK } = (0, r.I)(l),
        eQ = eH?.status === "ready" ? eH.chats : void 0,
        eZ = eV || eH?.status === "permissions_pending" || eH?.status === "permissions_required"
      if (ez) {
        let e
        ;(et[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.chatSearch.searching",
              defaultMessage: "Searching chats…",
              description: "Initial loading state while searching Messages chat metadata",
            })),
            (et[14] = e))
          : (e = et[14]),
          (c = e))
      } else if (eV || null == eH) {
        let e
        ;(et[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.chatSearch.error",
              defaultMessage: "Unable to search chats",
              description: "Error shown when Messages chat search is unavailable or fails",
            })),
            (et[15] = e))
          : (e = et[15]),
          (c = e))
      } else if ("permissions_pending" === eH.status) {
        let e
        ;(et[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.chatSearch.permissionsPending",
              defaultMessage: "Finish Messages permission setup, then try again",
              description: "Guidance when the native Messages permission setup window is still open",
            })),
            (et[16] = e))
          : (e = et[16]),
          (c = e))
      } else if ("permissions_required" === eH.status) {
        let e
        ;(et[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.chatSearch.permissionsRequired",
              defaultMessage: "Allow Messages permissions to search chats",
              description: "Guidance when required macOS permissions for Messages were not granted",
            })),
            (et[17] = e))
          : (e = et[17]),
          (c = e))
      } else if (eQ?.length === 0) {
        let e
        ;(et[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.chatSearch.empty",
              defaultMessage: "No chats found",
              description: "Empty search state when no Messages chats match the query",
            })),
            (et[18] = e))
          : (e = et[18]),
          (c = e))
      }
      ;(et[19] !== eF || et[20] !== ea || et[21] !== eo || et[22] !== eD
        ? ((d = (e) => {
            ;(e.preventDefault(), null == eD || ea || eo(eD, eF))
          }),
          (et[19] = eF),
          (et[20] = ea),
          (et[21] = eo),
          (et[22] = eD),
          (et[23] = d))
        : (d = et[23]),
        et[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(_.L3, {
              asChild: !0,
              children: (0, i.jsx)("span", {
                children: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.addDialog.title",
                  defaultMessage: "Add a chat",
                  description: "Title of the dialog for adding a chat-specific Messages read permission",
                }),
              }),
            })),
            (et[24] = u))
          : (u = et[24]),
        et[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(P.OO, {
              children: (0, i.jsx)(P.c7, {
                className: "select-none",
                title: u,
                subtitle: (0, i.jsx)(_.rr, {
                  asChild: !0,
                  children: (0, i.jsx)("span", {
                    children: (0, i.jsx)(b.A, {
                      id: "settings.computerUse.messages.readAccess.addDialog.description",
                      defaultMessage:
                        "Choose whether ChatGPT can use messages from a specific chat to respond to your requests",
                      description:
                        "Explains that the selected chat's read permission controls whether ChatGPT can use its messages to respond to the user's requests",
                    }),
                  }),
                }),
              }),
            })),
            (et[25] = p))
          : (p = et[25]),
        et[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("span", {
              className: "text-sm font-medium select-none",
              children: (0, i.jsx)(b.A, { ...eI.chatLabel }),
            })),
            (et[26] = g))
          : (g = et[26]),
        et[27] !== er ? ((m = er.formatMessage(eI.chatLabel)), (et[27] = er), (et[28] = m)) : (m = et[28]),
        et[29] !== er
          ? ((h = er.formatMessage({
              id: "settings.computerUse.messages.chatSearch.placeholder",
              defaultMessage: "Search chats",
              description: "Search placeholder for Messages group names, contacts, phone numbers, or email addresses",
            })),
            (et[29] = er),
            (et[30] = h))
          : (h = et[30]))
      let e$ = eD?.displayName ?? em
      ;(et[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = () => e_(!0)), (y = () => e_(!0)), (et[31] = w), (et[32] = y))
        : ((w = et[31]), (y = et[32])),
        et[33] !== eD
          ? ((j = (e) => {
              ;("ArrowDown" === e.key && e_(!0), null != eD && "Enter" === e.key && e.stopPropagation())
            }),
            (et[33] = eD),
            (et[34] = j))
          : (j = et[34]),
        et[35] !== eB || et[36] !== el || et[37] !== eG || et[38] !== eW
          ? ((v = (e) => {
              ;(e.trim() !== eB && el.cancelQueries({ queryKey: eG, exact: !0 }),
                "" === e.trim() && "" !== eW && eS(eT),
                eh(e),
                e_(!0),
                eL(void 0))
            }),
            (et[35] = eB),
            (et[36] = el),
            (et[37] = eG),
            (et[38] = eW),
            (et[39] = v))
          : (v = et[39]),
        et[40] !== eR ? ((A = (0, i.jsx)(eA.pd, { "aria-expanded": eR })), (et[40] = eR), (et[41] = A)) : (A = et[41]),
        et[42] !== ea || et[43] !== eR || et[44] !== h || et[45] !== e$ || et[46] !== j || et[47] !== v || et[48] !== A
          ? ((M = (0, i.jsx)(ev.dT, {
              asChild: !0,
              children: (0, i.jsx)(ew.uB.Input, {
                ref: eu,
                asChild: !0,
                "aria-expanded": eR,
                autoFocus: !0,
                disabled: ea,
                placeholder: h,
                value: e$,
                onClick: w,
                onFocus: y,
                onKeyDown: j,
                onValueChange: v,
                children: A,
              }),
            })),
            (et[42] = ea),
            (et[43] = eR),
            (et[44] = h),
            (et[45] = e$),
            (et[46] = j),
            (et[47] = v),
            (et[48] = A),
            (et[49] = M))
          : (M = et[49]),
        et[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = { maxHeight: (0, ej.J1)("list", "var(--radix-popover-content-available-height)") }), (et[50] = U))
          : (U = et[50]),
        et[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (e) => {
              e.target === eu.current && e.preventDefault()
            }),
            (et[51] = C))
          : (C = et[51]),
        et[52] !== eQ || et[53] !== eV || et[54] !== ea || et[55] !== el || et[56] !== eG || et[57] !== ei
          ? ((S = eV
              ? null
              : eQ?.map((e) =>
                  (0, i.jsx)(
                    ey.G.Item,
                    {
                      disabled: ea,
                      tooltipText: e.displayName,
                      tooltipOpenWhen: "trigger-overflows",
                      value: e.chatGUID,
                      onMouseDown: eP,
                      onSelect: () => {
                        ;(el.cancelQueries({ queryKey: eG, exact: !0 }),
                          eL(e),
                          eO(ei?.find((s) => s.chatGUID === e.chatGUID)?.decision ?? "ask"))
                      },
                      children: e.displayName,
                    },
                    e.chatGUID,
                  ),
                )),
            (et[52] = eQ),
            (et[53] = eV),
            (et[54] = ea),
            (et[55] = el),
            (et[56] = eG),
            (et[57] = ei),
            (et[58] = S))
          : (S = et[58]),
        et[59] !== c
          ? ((E = null != c ? (0, i.jsx)(N.ms.Message, { compact: !0, role: "status", children: c }) : null),
            (et[59] = c),
            (et[60] = E))
          : (E = et[60]),
        et[61] !== eZ || et[62] !== eX || et[63] !== eK
          ? ((T =
              eZ && !eX
                ? (0, i.jsx)(ey.G.Action, {
                    onClick: () => void eK(),
                    children: (0, i.jsx)(b.A, {
                      id: "settings.computerUse.messages.chatSearch.retry",
                      defaultMessage: "Try again",
                      description: "Action to retry Messages chat search after an error or permission setup",
                    }),
                  })
                : null),
            (et[61] = eZ),
            (et[62] = eX),
            (et[63] = eK),
            (et[64] = T))
          : (T = et[64]),
        et[65] !== eX || et[66] !== S || et[67] !== E || et[68] !== T
          ? ((I = (0, i.jsxs)(ey.G.List, { "aria-busy": eX, children: [S, E, T] })),
            (et[65] = eX),
            (et[66] = S),
            (et[67] = E),
            (et[68] = T),
            (et[69] = I))
          : (I = et[69]),
        et[70] !== ep || et[71] !== I
          ? ((D = (0, i.jsx)(ev.hl, {
              portalContainer: ep,
              role: "presentation",
              size: "anchor",
              variant: "menu",
              style: U,
              onOpenAutoFocus: eE,
              onCloseAutoFocus: eN,
              onInteractOutside: C,
              children: I,
            })),
            (et[70] = ep),
            (et[71] = I),
            (et[72] = D))
          : (D = et[72]),
        et[73] !== m || et[74] !== M || et[75] !== D
          ? ((L = (0, i.jsxs)(ey.G.Root, { label: m, children: [M, D] })),
            (et[73] = m),
            (et[74] = M),
            (et[75] = D),
            (et[76] = L))
          : (L = et[76]),
        et[77] !== eR || et[78] !== L
          ? ((F = (0, i.jsxs)("div", {
              ref: eg,
              className: "flex flex-col gap-1.5",
              children: [g, (0, i.jsx)(ev.AM, { modal: !1, open: eR, onOpenChange: e_, children: L })],
            })),
            (et[77] = eR),
            (et[78] = L),
            (et[79] = F))
          : (F = et[79]),
        et[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.access",
              defaultMessage: "Read access",
              description: "Label for the Messages read permission dropdown in the add chat dialog",
            })),
            (et[80] = O))
          : (O = et[80]),
        et[81] !== ec
          ? ((W = (0, i.jsx)("span", { id: ec, className: "text-sm font-medium select-none", children: O })),
            (et[81] = ec),
            (et[82] = W))
          : (W = et[82]))
      let eY = `${ec} ${ed}`
      ;(et[83] !== eF ? ((R = (0, i.jsx)(eC, { decision: eF })), (et[83] = eF), (et[84] = R)) : (R = et[84]),
        et[85] !== ed || et[86] !== R
          ? ((B = (0, i.jsx)("span", { id: ed, className: "truncate", children: R })),
            (et[85] = ed),
            (et[86] = R),
            (et[87] = B))
          : (B = et[87]),
        et[88] !== ea || et[89] !== eY || et[90] !== B
          ? ((G = (0, i.jsx)(eb.vg, {
              "aria-labelledby": eY,
              className: "w-full justify-between",
              disabled: ea,
              children: B,
            })),
            (et[88] = ea),
            (et[89] = eY),
            (et[90] = B),
            (et[91] = G))
          : (G = et[91]),
        et[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = ["alwaysAllow", "ask", "alwaysDeny"]), (et[92] = q))
          : (q = et[92]),
        et[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = q.map((e) =>
              (0, i.jsx)(
                N.ms.RadioItem,
                { value: e, onSelect: () => eO(e), children: (0, i.jsx)(eC, { decision: e }) },
                e,
              ),
            )),
            (et[93] = H))
          : (H = et[93]),
        et[94] !== eF
          ? ((V = (0, i.jsx)(N.ms.RadioGroup, { value: eF, children: H })), (et[94] = eF), (et[95] = V))
          : (V = et[95]),
        et[96] !== ea || et[97] !== G || et[98] !== V
          ? ((z = (0, i.jsx)(N.Ab, { align: "start", disabled: ea, triggerButton: G, children: V })),
            (et[96] = ea),
            (et[97] = G),
            (et[98] = V),
            (et[99] = z))
          : (z = et[99]),
        et[100] !== W || et[101] !== z
          ? ((X = (0, i.jsxs)("div", { className: "flex flex-col gap-1.5", children: [W, z] })),
            (et[100] = W),
            (et[101] = z),
            (et[102] = X))
          : (X = et[102]),
        et[103] !== F || et[104] !== X
          ? ((K = (0, i.jsxs)(P.OO, { className: "gap-3", children: [F, X] })),
            (et[103] = F),
            (et[104] = X),
            (et[105] = K))
          : (K = et[105]),
        et[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.cancel",
              defaultMessage: "Cancel",
              description: "Cancel button for adding a Messages chat read permission",
            })),
            (et[106] = Q))
          : (Q = et[106]),
        et[107] !== ea || et[108] !== en
          ? ((Z = (0, i.jsx)(k.$, { color: "outline", disabled: ea, onClick: en, type: "button", children: Q })),
            (et[107] = ea),
            (et[108] = en),
            (et[109] = Z))
          : (Z = et[109]))
      let eJ = null == eD || ea
      return (
        et[110] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.add",
              defaultMessage: "Add",
              description:
                "Confirm button for saving the selected chat's read permission, replacing its existing setting if present",
            })),
            (et[110] = $))
          : ($ = et[110]),
        et[111] !== ea || et[112] !== eJ
          ? ((Y = (0, i.jsx)(k.$, { color: "primary", disabled: eJ, loading: ea, type: "submit", children: $ })),
            (et[111] = ea),
            (et[112] = eJ),
            (et[113] = Y))
          : (Y = et[113]),
        et[114] !== Z || et[115] !== Y
          ? ((J = (0, i.jsx)(P.OO, { children: (0, i.jsxs)(P.Es, { children: [Z, Y] }) })),
            (et[114] = Z),
            (et[115] = Y),
            (et[116] = J))
          : (J = et[116]),
        et[117] !== K || et[118] !== J || et[119] !== d
          ? ((es = (0, i.jsxs)(P.R4, { as: "form", onSubmit: d, children: [p, K, J] })),
            (et[117] = K),
            (et[118] = J),
            (et[119] = d),
            (et[120] = es))
          : (es = et[120]),
        es
      )
    }
    function eP(e) {
      return e.preventDefault()
    }
    function eN(e) {
      return e.preventDefault()
    }
    function eE(e) {
      return e.preventDefault()
    }
    function eT(e) {
      return e + 1
    }
    let eI = (0, el.YK)({
      chatLabel: {
        id: "settings.computerUse.messages.readAccess.addDialog.chat",
        defaultMessage: "Chat",
        description: "Label for the Messages chat search field",
      },
    })
    function eD() {
      let e,
        s,
        t,
        o,
        n,
        r,
        c,
        d,
        u,
        p,
        m,
        h,
        w,
        y,
        j,
        v,
        A,
        M,
        U,
        C,
        S,
        _,
        P,
        E,
        T,
        L,
        F = (0, a.c)(78),
        O = (0, g.gh)(J.u),
        W = (0, x.A)(),
        [R, B] = (0, f.useState)(null),
        { data: G, isError: q, isLoading: H } = (0, g.Ul)(ee.Ks)
      F[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, i.jsx)(b.A, {
            id: "settings.computerUse.messages.readAccess.saveError",
            defaultMessage: "Unable to update read permission",
            description: "Toast shown when updating a Messages read permission fails",
          })),
          (F[0] = e))
        : (e = F[0])
      let V = e
      ;(F[1] !== O ? ((s = () => O.query.cancel(ee.Ks)), (F[1] = O), (F[2] = s)) : (s = F[2]),
        F[3] !== O
          ? ((t = (e) => {
              O.query.setData(ee.Ks, e)
            }),
            (o = () => {
              O.get(D.Id).danger(V, {
                errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.saveError" },
              })
            }),
            (F[3] = O),
            (F[4] = t),
            (F[5] = o))
          : ((t = F[4]), (o = F[5])),
        F[6] !== s || F[7] !== t || F[8] !== o
          ? ((n = { onMutate: s, mutationFn: eO, onSuccess: t, onError: o }),
            (F[6] = s),
            (F[7] = t),
            (F[8] = o),
            (F[9] = n))
          : (n = F[9]))
      let z = (0, l.n)(n)
      ;(F[10] !== O ? ((r = () => O.query.cancel(ee.Ks)), (F[10] = O), (F[11] = r)) : (r = F[11]),
        F[12] !== O
          ? ((c = (e) => {
              O.query.setData(ee.Ks, e)
            }),
            (d = () => {
              O.get(D.Id).danger(V, {
                errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.saveError" },
              })
            }),
            (F[12] = O),
            (F[13] = c),
            (F[14] = d))
          : ((c = F[13]), (d = F[14])),
        F[15] !== r || F[16] !== c || F[17] !== d
          ? ((u = { onMutate: r, mutationFn: eF, onSuccess: c, onError: d }),
            (F[15] = r),
            (F[16] = c),
            (F[17] = d),
            (F[18] = u))
          : (u = F[18]))
      let X = (0, l.n)(u)
      ;(F[19] !== O ? ((p = () => O.query.cancel(ee.Ks)), (F[19] = O), (F[20] = p)) : (p = F[20]),
        F[21] !== O
          ? ((m = (e) => {
              ;(O.query.setData(ee.Ks, e), B(null))
            }),
            (h = () => {
              O.get(D.Id).danger(
                (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.removeError",
                  defaultMessage: "Unable to remove read permission",
                  description: "Toast shown when removing a Messages chat's saved read permission fails",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.removeError" } },
              )
            }),
            (F[21] = O),
            (F[22] = m),
            (F[23] = h))
          : ((m = F[22]), (h = F[23])),
        F[24] !== m || F[25] !== h || F[26] !== p
          ? ((w = { onMutate: p, mutationFn: eL, onSuccess: m, onError: h }),
            (F[24] = m),
            (F[25] = h),
            (F[26] = p),
            (F[27] = w))
          : (w = F[27]))
      let K = (0, l.n)(w),
        Q = z.isPending || X.isPending || K.isPending,
        Z = G?.readAccessPolicy ?? "askPerChat",
        $ = "allowAllChats" === Z
      ;(F[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            id: "askPerChat",
            label: (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.askPerChat",
              defaultMessage: "Ask by default",
              description:
                "Label for asking before reading Messages chats without a saved decision, while honoring saved choices",
            }),
            description: (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.askPerChatDescription",
              defaultMessage: "Ask before reading chats without a saved choice",
              description:
                "Explains that the default Messages read policy asks before reading chats without a saved choice",
            }),
          }),
          (F[28] = y))
        : (y = F[28]),
        F[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = {
              id: "allowUnconfiguredChats",
              label: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.allowUnconfigured",
                defaultMessage: "Allow by default",
                description:
                  "Label for allowing Messages reads from chats without a saved decision, while honoring saved choices",
              }),
              description: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.allowUnconfiguredDescription",
                defaultMessage: "Allow reading chats without a saved choice",
                description:
                  "Explains that ChatGPT can read Messages chats without a saved choice without asking, while saved choices still apply",
              }),
            }),
            (F[29] = j))
          : (j = F[29]),
        F[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = [
              y,
              j,
              {
                id: "allowAllChats",
                label: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.allowAll",
                  defaultMessage: "Allow all chats",
                  description: "Label for reading all Messages chats without asking, overriding every saved decision",
                }),
                description: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.readAccess.allowAllDescription",
                  defaultMessage: "Saved choices, including Never allow, don't apply",
                  description: "Explains that global Messages read permission overrides even saved denials",
                }),
              },
            ]),
            (F[30] = v))
          : (v = F[30]))
      let Y = v
      if ($) {
        let e
        ;(F[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.policyOverridden",
              defaultMessage: "ChatGPT can read all chats to answer your requests",
              description: "Explains that ChatGPT can read all Messages chats to answer the user's requests",
            })),
            (F[31] = e))
          : (e = F[31]),
          (A = e))
      } else if ("askPerChat" === Z) {
        let e
        ;(F[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.policyAskPerChatDescription",
              defaultMessage: "ChatGPT asks before reading chats without a saved choice to answer your requests",
              description:
                "Explains that the default Messages read policy asks before reading chats without a saved choice for the user's requests",
            })),
            (F[32] = e))
          : (e = F[32]),
          (A = e))
      } else {
        let e
        ;(F[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.readAccess.policyDescription",
              defaultMessage: "ChatGPT can read chats without a saved choice to answer your requests",
              description:
                "Explains that unconfigured Messages chats can be read without asking for the user's requests while saved choices still apply",
            })),
            (F[33] = e))
          : (e = F[33]),
          (A = e))
      }
      if (H) {
        let e
        ;(F[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(eg.u, {
              children: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.loading",
                defaultMessage: "Loading read permissions…",
                description: "Loading state for saved Messages read permissions",
              }),
            })),
            (F[34] = e))
          : (e = F[34]),
          (M = e))
      } else if (q || null == G) {
        let e
        ;(F[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.W, {
              layout: "settings-row",
              children: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.loadError",
                defaultMessage: "Unable to load read permissions",
                description: "Error shown when saved Messages read permissions cannot be loaded",
              }),
            })),
            (F[35] = e))
          : (e = F[35]),
          (M = e))
      } else if (0 === G.chats.length) {
        let e
        ;(F[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.W, {
              layout: "settings-row",
              children: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.empty",
                defaultMessage: "None yet",
                description: "Empty state before any Messages read permissions have been saved",
              }),
            })),
            (F[36] = e))
          : (e = F[36]),
          (M = e))
      } else {
        let e
        if (F[37] !== G.chats || F[38] !== W || F[39] !== Q || F[40] !== X) {
          let s
          ;(F[42] !== W || F[43] !== Q || F[44] !== X
            ? ((s = (e) =>
                (0, i.jsx)(
                  em.ic,
                  {
                    label: (0, i.jsx)("span", { className: "font-medium", children: e.displayName }),
                    control: (s) =>
                      (0, i.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, i.jsx)(N.Ab, {
                            align: "end",
                            disabled: Q,
                            triggerButton: (0, i.jsx)(eb.vg, {
                              ...s,
                              className: "w-34",
                              disabled: Q,
                              children: (0, i.jsx)("span", {
                                className: "truncate",
                                children: (0, i.jsx)(eC, { decision: e.decision }),
                              }),
                            }),
                            children: (0, i.jsx)(N.ms.RadioGroup, {
                              value: e.decision,
                              children: ["alwaysAllow", "ask", "alwaysDeny"].map((s) =>
                                (0, i.jsx)(
                                  N.ms.RadioItem,
                                  {
                                    value: s,
                                    disabled: Q,
                                    onSelect: () => {
                                      s !== e.decision && X.mutate({ chat: e, decision: s })
                                    },
                                    children: (0, i.jsx)(eC, { decision: s }),
                                  },
                                  s,
                                ),
                              ),
                            }),
                          }),
                          (0, i.jsx)(k.$, {
                            "aria-label": W.formatMessage(
                              {
                                id: "settings.computerUse.messages.readAccess.removeAriaLabel",
                                defaultMessage: "Remove read permission for {displayName}",
                                description: "Accessible label for removing a Messages chat's saved read permission",
                              },
                              { displayName: e.displayName },
                            ),
                            color: "ghost",
                            disabled: Q,
                            onClick: () => B(e),
                            size: "icon",
                            children: (0, i.jsx)(eu.cSG, {}),
                          }),
                        ],
                      }),
                  },
                  e.chatGUID,
                )),
              (F[42] = W),
              (F[43] = Q),
              (F[44] = X),
              (F[45] = s))
            : (s = F[45]),
            (e = G.chats.map(s)),
            (F[37] = G.chats),
            (F[38] = W),
            (F[39] = Q),
            (F[40] = X),
            (F[41] = e))
        } else e = F[41]
        M = e
      }
      return (
        F[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, i.jsx)(ep.X.Header, {
              title: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.readAccess.title",
                defaultMessage: "Read access",
                description: "Heading for global and per-chat Messages reading permissions",
              }),
            })),
            (F[46] = U))
          : (U = F[46]),
        F[47] !== G || F[48] !== q || F[49] !== H || F[50] !== Q || F[51] !== A || F[52] !== Z || F[53] !== z
          ? ((C =
              !H &&
              !q &&
              null != G &&
              (0, i.jsx)(eh.t, {
                children: (0, i.jsx)(em.ic, {
                  label: (0, i.jsx)(b.A, {
                    id: "settings.computerUse.messages.readAccess.policyLabel",
                    defaultMessage: "Reading behavior",
                    description: "Label for choosing the global Messages reading behavior",
                  }),
                  description: A,
                  control: (e) =>
                    (0, i.jsx)(N.Ab, {
                      align: "end",
                      contentWidth: "menuWide",
                      disabled: Q,
                      triggerButton: (0, i.jsx)(eb.vg, {
                        ...e,
                        className: "w-max max-w-full",
                        disabled: Q,
                        children: (0, i.jsx)("span", {
                          className: "truncate",
                          children: Y.find((e) => e.id === Z)?.label,
                        }),
                      }),
                      children: (0, i.jsx)(N.ms.RadioGroup, {
                        value: Z,
                        children: Y.map((e) =>
                          (0, i.jsx)(
                            N.ms.RadioItem,
                            {
                              disabled: Q,
                              SubText: e.description,
                              value: e.id,
                              onSelect: () => {
                                e.id !== Z && z.mutate(e.id)
                              },
                              children: e.label,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                }),
              })),
            (F[47] = G),
            (F[48] = q),
            (F[49] = H),
            (F[50] = Q),
            (F[51] = A),
            (F[52] = Z),
            (F[53] = z),
            (F[54] = C))
          : (C = F[54]),
        F[55] !== M ||
        F[56] !== G ||
        F[57] !== q ||
        F[58] !== H ||
        F[59] !== $ ||
        F[60] !== Q ||
        F[61] !== X ||
        F[62] !== z.isPending
          ? ((S =
              !$ &&
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  (0, i.jsx)(ep.X.Header, {
                    size: "compact",
                    actions: (0, i.jsx)(ek, {
                      disabled: H || q || null == G || z.isPending,
                      savedChats: G?.chats,
                      isSaving: Q,
                      triggerLabel: (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.readAccess.add",
                        defaultMessage: "Add",
                        description: "Button to add a chat-specific Messages read permission",
                      }),
                      onAdd: (e, s, t) => {
                        X.mutate({ chat: e, decision: s }, { onSuccess: t })
                      },
                    }),
                    title: (0, i.jsx)("span", {
                      className: "text-secondary",
                      children: (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.readAccess.savedPermissions",
                        defaultMessage: "Per-chat permissions",
                        description: "Heading for saved Messages read permissions for individual chats",
                      }),
                    }),
                  }),
                  (0, i.jsx)(eh.t, { children: M }),
                ],
              })),
            (F[55] = M),
            (F[56] = G),
            (F[57] = q),
            (F[58] = H),
            (F[59] = $),
            (F[60] = Q),
            (F[61] = X),
            (F[62] = z.isPending),
            (F[63] = S))
          : (S = F[63]),
        F[64] !== C || F[65] !== S
          ? ((_ = (0, i.jsxs)(ep.X.Content, { className: "gap-3", children: [C, S] })),
            (F[64] = C),
            (F[65] = S),
            (F[66] = _))
          : (_ = F[66]),
        F[67] === Symbol.for("react.memo_cache_sentinel") ? ((P = () => B(null)), (F[67] = P)) : (P = F[67]),
        F[68] !== K ? ((E = (e) => K.mutate(e)), (F[68] = K), (F[69] = E)) : (E = F[69]),
        F[70] !== R || F[71] !== Z || F[72] !== K.isPending || F[73] !== E
          ? ((T = (0, i.jsx)(ef, {
              chat: R,
              permission: "read",
              readAccessPolicy: Z,
              isRemoving: K.isPending,
              onClose: P,
              onRemove: E,
            })),
            (F[70] = R),
            (F[71] = Z),
            (F[72] = K.isPending),
            (F[73] = E),
            (F[74] = T))
          : (T = F[74]),
        F[75] !== _ || F[76] !== T
          ? ((L = (0, i.jsxs)(ep.X, { children: [U, _, T] })), (F[75] = _), (F[76] = T), (F[77] = L))
          : (L = F[77]),
        L
      )
    }
    async function eL(e) {
      let s = await (0, ee.xx)(e)
      if (null == s) throw Error("Messages read decisions are unavailable")
      return s
    }
    async function eF(e) {
      let { chat: s, decision: t } = e,
        i = await (0, ee.Nu)(s.chatGUID, t, s.displayName)
      if (null == i) throw Error("Messages read decisions are unavailable")
      return i
    }
    async function eO(e) {
      let s = await (0, ee.Xo)(e)
      if (null == s) throw Error("Messages read decisions are unavailable")
      return s
    }
    function eW() {
      let e,
        s = (0, a.c)(4),
        { data: t, isError: o, isLoading: n } = (0, g.Ul)(ee.rX)
      return (
        s[0] !== t || s[1] !== o || s[2] !== n
          ? ((e = (0, i.jsx)(eR, { approvals: t, isError: o, isLoading: n })),
            (s[0] = t),
            (s[1] = o),
            (s[2] = n),
            (s[3] = e))
          : (e = s[3]),
        e
      )
    }
    function eR(e) {
      let s,
        t,
        o,
        n,
        r,
        l,
        c = (0, a.c)(10),
        { approvals: d, isError: u, isLoading: p } = e
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)(b.A, { ...ec.messages })), (c[0] = s))
        : (s = c[0])
      let g = s
      return (
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(ed, { current: g })), (c[1] = t))
          : (t = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(ep.X.Header, {
              title: (0, i.jsx)(b.A, {
                id: "settings.computerUse.messages.sendAccess.title",
                defaultMessage: "Send access",
                description: "Heading for global and per-chat Messages sending permissions",
              }),
            })),
            (c[2] = o))
          : (o = c[2]),
        c[3] !== d || c[4] !== u || c[5] !== p
          ? ((n = (0, i.jsxs)(ep.X, {
              children: [
                o,
                (0, i.jsx)(ep.X.Content, {
                  className: "gap-3",
                  children: (0, i.jsx)(eB, { approvals: d, isError: u, isLoading: p }),
                }),
              ],
            })),
            (c[3] = d),
            (c[4] = u),
            (c[5] = p),
            (c[6] = n))
          : (n = c[6]),
        c[7] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, i.jsx)(eD, {})), (c[7] = r)) : (r = c[7]),
        c[8] !== n
          ? ((l = (0, i.jsxs)(ea.P, { backSlot: t, title: g, children: [n, r] })), (c[8] = n), (c[9] = l))
          : (l = c[9]),
        l
      )
    }
    function eB(e) {
      let s,
        t = (0, a.c)(4),
        { approvals: o, isError: n, isLoading: r } = e
      if (r) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(eh.t, {
                children: (0, i.jsx)(eg.u, {
                  children: (0, i.jsx)(b.A, {
                    id: "settings.computerUse.messages.allowedChats.loading",
                    defaultMessage: "Loading allowed chats…",
                    description: "Loading state for always allowed Messages chats",
                  }),
                }),
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      if (n || null == o) {
        let e
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(eh.t, {
                children: (0, i.jsx)(I.W, {
                  layout: "settings-row",
                  children: (0, i.jsx)(b.A, {
                    id: "settings.computerUse.messages.allowedChats.loadError",
                    defaultMessage: "Unable to load allowed chats",
                    description: "Error shown when always allowed Messages chats fail to load",
                  }),
                }),
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (t[2] !== o ? ((s = (0, i.jsx)(eG, { approvals: o })), (t[2] = o), (t[3] = s)) : (s = t[3]), s)
    }
    function eG(e) {
      let s,
        t,
        o,
        n,
        r,
        c,
        d,
        u,
        p,
        m,
        h,
        w,
        y,
        j,
        v = (0, a.c)(36),
        { approvals: A } = e,
        M = (0, g.gh)(J.u),
        U = (0, x.A)(),
        [C, S] = (0, f.useState)(null)
      ;(v[0] !== M ? ((s = () => M.query.cancel(ee.rX)), (v[0] = M), (v[1] = s)) : (s = v[1]),
        v[2] !== M
          ? ((t = (e) => {
              M.query.setData(ee.rX, e)
            }),
            (o = () => {
              M.get(D.Id).danger(
                (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.sendAccess.saveError",
                  defaultMessage: "Unable to update send permission",
                  description: "Toast shown when saving the global Messages send permission fails",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.sendAccess.saveError" } },
              )
            }),
            (v[2] = M),
            (v[3] = t),
            (v[4] = o))
          : ((t = v[3]), (o = v[4])),
        v[5] !== s || v[6] !== t || v[7] !== o
          ? ((n = { onMutate: s, mutationFn: eH, onSuccess: t, onError: o }),
            (v[5] = s),
            (v[6] = t),
            (v[7] = o),
            (v[8] = n))
          : (n = v[8]))
      let _ = (0, l.n)(n)
      v[9] !== M
        ? ((r = {
            mutationFn: eq,
            onSuccess: (e) => {
              ;(M.query.setData(ee.rX, e), S(null))
            },
            onError: () => {
              M.get(D.Id).danger(
                (0, i.jsx)(b.A, {
                  id: "settings.computerUse.messages.allowedChats.removeError",
                  defaultMessage: "Unable to remove send permission",
                  description: "Toast shown when removing an always allowed Messages chat fails",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.allowedChats.removeError" } },
              )
            },
          }),
          (v[9] = M),
          (v[10] = r))
        : (r = v[10])
      let P = (0, l.n)(r)
      v[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)("span", {
            id: "messages-send-allow-all",
            children: (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.sendAccess.allowAll",
              defaultMessage: "Always allow sending to all chats",
              description: "Label for allowing Messages sends to any conversation without a confirmation",
            }),
          })),
          (d = (0, i.jsx)(b.A, {
            id: "settings.computerUse.messages.sendAccess.allowAllDescription",
            defaultMessage:
              "When on, ChatGPT can send to any chat without asking you to approve the message or its recipients",
            description:
              "Explains that enabling global Messages sending skips approval of messages and recipients for every chat",
          })),
          (v[11] = c),
          (v[12] = d))
        : ((c = v[11]), (d = v[12]))
      let N = _.isPending || P.isPending
      return (
        v[13] !== _ ? ((u = (e) => _.mutate(e)), (v[13] = _), (v[14] = u)) : (u = v[14]),
        v[15] !== A.allowAllChats || v[16] !== N || v[17] !== u
          ? ((p = (0, i.jsx)(eh.t, {
              children: (0, i.jsx)(em.ic, {
                label: c,
                description: d,
                control: (0, i.jsx)(L.l, {
                  "aria-labelledby": "messages-send-allow-all",
                  checked: A.allowAllChats,
                  disabled: N,
                  onChange: u,
                }),
              }),
            })),
            (v[15] = A.allowAllChats),
            (v[16] = N),
            (v[17] = u),
            (v[18] = p))
          : (p = v[18]),
        v[19] !== A.allowAllChats ||
        v[20] !== A.approvedChats ||
        v[21] !== U ||
        v[22] !== P.isPending ||
        v[23] !== _.isPending
          ? ((m =
              !A.allowAllChats &&
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  (0, i.jsx)(ep.X.Header, {
                    size: "compact",
                    title: (0, i.jsx)("span", {
                      className: "text-secondary",
                      children: (0, i.jsx)(b.A, {
                        id: "settings.computerUse.messages.allowedChats.savedApprovals",
                        defaultMessage: "Per-chat approvals",
                        description: "Heading for Messages chats approved for sending without asking",
                      }),
                    }),
                  }),
                  (0, i.jsx)(eh.t, {
                    children:
                      0 === A.approvedChats.length
                        ? (0, i.jsx)(I.W, {
                            layout: "settings-row",
                            children: (0, i.jsx)(b.A, {
                              id: "settings.computerUse.messages.allowedChats.empty",
                              defaultMessage: "None yet",
                              description: "Empty state for always allowed Messages chats",
                            }),
                          })
                        : A.approvedChats.map((e) =>
                            (0, i.jsx)(
                              em.ic,
                              {
                                label: (0, i.jsx)("span", { className: "font-medium", children: e.displayName }),
                                control: (0, i.jsx)(k.$, {
                                  "aria-label": U.formatMessage(
                                    {
                                      id: "settings.computerUse.messages.allowedChats.removeAriaLabel",
                                      defaultMessage: "Remove {displayName}",
                                      description: "Accessible label for removing an always allowed Messages chat",
                                    },
                                    { displayName: e.displayName },
                                  ),
                                  color: "ghost",
                                  disabled: P.isPending || _.isPending,
                                  onClick: () => {
                                    S(e)
                                  },
                                  size: "icon",
                                  children: (0, i.jsx)(eu.cSG, {}),
                                }),
                              },
                              e.chatGUID,
                            ),
                          ),
                  }),
                ],
              })),
            (v[19] = A.allowAllChats),
            (v[20] = A.approvedChats),
            (v[21] = U),
            (v[22] = P.isPending),
            (v[23] = _.isPending),
            (v[24] = m))
          : (m = v[24]),
        v[25] === Symbol.for("react.memo_cache_sentinel") ? ((h = () => S(null)), (v[25] = h)) : (h = v[25]),
        v[26] !== P ? ((w = (e) => P.mutate(e)), (v[26] = P), (v[27] = w)) : (w = v[27]),
        v[28] !== C || v[29] !== P.isPending || v[30] !== w
          ? ((y = (0, i.jsx)(ef, { chat: C, permission: "send", isRemoving: P.isPending, onClose: h, onRemove: w })),
            (v[28] = C),
            (v[29] = P.isPending),
            (v[30] = w),
            (v[31] = y))
          : (y = v[31]),
        v[32] !== p || v[33] !== m || v[34] !== y
          ? ((j = (0, i.jsxs)(i.Fragment, { children: [p, m, y] })), (v[32] = p), (v[33] = m), (v[34] = y), (v[35] = j))
          : (j = v[35]),
        j
      )
    }
    async function eq(e) {
      let s = await (0, ee.SW)(e)
      if (null == s) throw Error("Messages send approvals are unavailable")
      return s
    }
    async function eH(e) {
      let s = await (0, ee.Y3)(e)
      if (null == s) throw Error("Messages send approvals are unavailable")
      return s
    }
    var eV = t("fnPc"),
      ez = t("odCE"),
      eX = t("w4F7"),
      eK = t("oszP"),
      eQ = t("RHhA")
    function eZ(e, s, t) {
      let i = e.filter((e) => e.plugin.name === s || e.plugin.id.split("@")[0] === s),
        a = (0, m.v3D)((0, eQ.t)())
      return (
        (null == a ? void 0 : i.find((e) => e.marketplaceName === a)) ??
        i.find((e) => (0, m.foP)(e.marketplaceName)) ??
        i.find((e) => "openai-curated" === e.marketplaceName) ??
        i.find((e) => (0, eK.W9)(t, e.marketplacePath)) ??
        null
      )
    }
    var e$ = t("kfGJ"),
      eY = t("hZax")
    let eJ = "connector_openai_codex_document_control",
      e0 = "/settings/computer-use/messages",
      e1 = "foregroundClicks",
      e2 = [
        { value: "foregroundClicks", label: ec.foregroundClickSounds },
        { value: "foregroundAndBackgroundClicks", label: ec.foregroundAndBackgroundClickSounds },
        { value: "off", label: ec.noClickSounds },
      ]
    function e3() {
      let e,
        s,
        t,
        o,
        n,
        r,
        l,
        c,
        d,
        u,
        p = (0, a.c)(26),
        { selectedHostId: m } = (0, eV.D)(),
        h = (0, g._U)(F.I, m)
      p[0] !== m ? ((e = { hostId: m }), (p[0] = m), (p[1] = e)) : (e = p[1])
      let f = (0, O.H)(e),
        { platform: x } = (0, q.V)(),
        y = (0, U.l)(),
        { pathname: j } = (0, w.zy)()
      if (p[2] !== j) {
        let e = (0, w.B6)(es.zK, j)?.params.browserFamily
        ;((s = (0, es.YE)(e)), (p[2] = j), (p[3] = s))
      } else s = p[3]
      let v = s,
        A = null != (0, w.RQ)(e0)
      if (null != v && ("chrome" === v || y)) {
        let e
        return (p[4] !== v ? ((e = (0, i.jsx)(sr, { browserFamily: v })), (p[4] = v), (p[5] = e)) : (e = p[5]), e)
      }
      if (null != v) {
        let e
        return (
          p[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(w.C5, { to: "/settings/computer-use", replace: !0 })), (p[6] = e))
            : (e = p[6]),
          e
        )
      }
      if (A) {
        let e
        return (
          p[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(sn, {})), (p[7] = e)) : (e = p[7]),
          e
        )
      }
      return (
        p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(eb.s, { slug: "computer-use" })),
            (o = (0, i.jsx)(b.A, {
              id: "settings.computerUse.subtitle",
              defaultMessage: "Manage how ChatGPT uses other applications on your computer",
              description: "Subtitle for computer use settings",
            })),
            (p[8] = t),
            (p[9] = o))
          : ((t = p[8]), (o = p[9])),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(ep.X.Header, { title: (0, i.jsx)(b.A, { ...ec.control }) })), (p[10] = n))
          : (n = p[10]),
        p[11] !== f || p[12] !== x
          ? ((r = (0, i.jsx)(e4, { computerUseAvailability: f, platform: x })), (p[11] = f), (p[12] = x), (p[13] = r))
          : (r = p[13]),
        p[14] !== h || p[15] !== f.available || p[16] !== x
          ? ((l = "macOS" === x && f.available && h ? (0, i.jsx)(su, {}) : null),
            (p[14] = h),
            (p[15] = f.available),
            (p[16] = x),
            (p[17] = l))
          : (l = p[17]),
        p[18] !== r || p[19] !== l
          ? ((c = (0, i.jsxs)(ep.X, { children: [n, (0, i.jsxs)(ep.X.Content, { children: [r, l] })] })),
            (p[18] = r),
            (p[19] = l),
            (p[20] = c))
          : (c = p[20]),
        p[21] !== f.available
          ? ((d = f.available
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(ep.X, {
                      children: [
                        (0, i.jsx)(ep.X.Header, { title: (0, i.jsx)(b.A, { ...ec.alwaysAllowedApps }) }),
                        (0, i.jsx)(ep.X.Content, { children: (0, i.jsx)(eh.t, { children: (0, i.jsx)(sg, {}) }) }),
                      ],
                    }),
                    (0, i.jsx)(sc, {}),
                  ],
                })
              : null),
            (p[21] = f.available),
            (p[22] = d))
          : (d = p[22]),
        p[23] !== c || p[24] !== d
          ? ((u = (0, i.jsxs)(ea.P, { title: t, subtitle: o, children: [c, d] })),
            (p[23] = c),
            (p[24] = d),
            (p[25] = u))
          : (u = p[25]),
        u
      )
    }
    function e4(e) {
      var s
      let t,
        o,
        n,
        l,
        d,
        u,
        C,
        S,
        _,
        P,
        N,
        E,
        T,
        I,
        D,
        L,
        F,
        O = (0, a.c)(43),
        { computerUseAvailability: q, platform: H } = e,
        V = (0, g.gh)(J.u),
        [K, ee] = (0, f.useState)(!1),
        et = (0, x.A)(),
        ea = (0, w.Zp)(),
        { selectedHostId: eo } = (0, eV.D)(),
        er = "local" === (0, e$.Qz)(eo).kind,
        { data: el } = (0, g._U)(j.lb, eo)
      O[0] !== eo ? ((t = { hostId: eo }), (O[0] = eo), (O[1] = t)) : (t = O[1])
      let ed = (0, W.J)(t)
      O[2] !== eo ? ((o = { hostId: eo }), (O[2] = eo), (O[3] = o)) : (o = O[3])
      let { isUpdating: eu, setAppEnabled: ep, updatingAppId: eg } = (0, y.J)(o)
      O[4] !== eo ? ((n = { hostId: eo, enabled: !0 }), (O[4] = eo), (O[5] = n)) : (n = O[5])
      let em = (0, B.J)(n)
      ;(O[6] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (O[6] = l)) : (l = O[6]),
        O[7] !== em || O[8] !== eo
          ? ((d = { hostId: eo, roots: l, enabled: em }), (O[7] = em), (O[8] = eo), (O[9] = d))
          : (d = O[9]))
      let { data: eh, error: ef, isLoading: eb, refetch: ex } = (0, Z.Kj)(d)
      ;(O[10] !== em || O[11] !== eo
        ? ((u = em && !(0, Z.hE)(eo)), (O[10] = em), (O[11] = eo), (O[12] = u))
        : (u = O[12]),
        O[13] !== eo || O[14] !== u
          ? ((C = { hostId: eo, marketplaceKind: "local", enabled: u }), (O[13] = eo), (O[14] = u), (O[15] = C))
          : (C = O[15]))
      let { data: ew, error: ey, isLoading: ej, refetch: ev } = (0, $.y$)(C)
      O[16] !== q || O[17] !== eo
        ? ((S = { computerUseAvailability: q, hostId: eo }), (O[16] = q), (O[17] = eo), (O[18] = S))
        : (S = O[18])
      let eA = (0, G.l)(S),
        eU = (0, $.PM)({
          plugins: em ? (0, $.Qc)({ buildFlavor: (0, eQ.t)(), plugins: p()([...(eh ?? []), ...(ew ?? [])], se) }) : [],
          isComputerUseAvailable: q.available,
          isExternalBrowserUseAvailable: ed.available,
          isInAppBrowserUseAvailable: !1,
          isMessagesAvailable: eA.available,
        })
      O[19] !== ex || O[20] !== ev || O[21] !== eo
        ? ((_ = async () => {
            await Promise.all([ex(), ...((0, Z.hE)(eo) ? [] : [ev()])])
          }),
          (O[19] = ex),
          (O[20] = ev),
          (O[21] = eo),
          (O[22] = _))
        : (_ = O[22])
      let eC = _,
        eS = ef?.message ?? ey?.message ?? null,
        ek = eb || ej || eA.isLoading || q.isLoading || ed.isLoading
      O[23] !== eC || O[24] !== eS || O[25] !== ek
        ? ((P = { errorMessage: eS, isLoading: ek, reload: eC, retry: eC }),
          (O[23] = eC),
          (O[24] = eS),
          (O[25] = ek),
          (O[26] = P))
        : (P = O[26])
      let e_ = P,
        eP = (0, R.m)(eo),
        eN = (0, eY.Zj)(Q.J4),
        eE = (0, eY.Zj)(Q.tN),
        eT = (0, U.l)(),
        eI = Y.appServices?.chromiumBrowser,
        eD = er && null != eI
      ;(O[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = async () => (await eI?.getInstalledBrowserFamilies()) ?? []),
          (E = ["chromium-browser", "installed-browser-families"]),
          (O[27] = N),
          (O[28] = E))
        : ((N = O[27]), (E = O[28])),
        O[29] !== eD
          ? ((T = { enabled: eD, queryFn: N, queryKey: E, retry: !1, staleTime: eM.D.FIVE_SECONDS }),
            (O[29] = eD),
            (O[30] = T))
          : (T = O[30]))
      let { data: eL } = (0, r.I)(T),
        eF = (0, g.Ul)(z.aD),
        eO = eU.find(e8) ?? null,
        eW = (eT ? sf(eh ?? [], eT) : null) ?? sf(eU, eT),
        eR = eZ(eU, m.ovW, eP),
        eB = eU.find(Q.V0) ?? null,
        eG = eE ? (eU.find(Q.ho) ?? null) : null,
        eq = [
          {
            appControlId: "microsoft-excel-document-control-app",
            description: ec.microsoftExcelDescription,
            disableTooltip: ec.microsoftExcelDisableTooltip,
            enableTooltip: ec.microsoftExcelEnableTooltip,
            icon: v,
            plugin: eB,
            title: ec.microsoftExcel,
            toggleAriaLabel: ec.microsoftExcelToggleAria,
          },
          {
            appControlId: "microsoft-powerpoint-document-control-app",
            description: ec.microsoftPowerPointDescription,
            disableTooltip: ec.microsoftPowerPointDisableTooltip,
            enableTooltip: ec.microsoftPowerPointEnableTooltip,
            icon: A,
            plugin: eG,
            title: ec.microsoftPowerPoint,
            toggleAriaLabel: ec.microsoftPowerPointToggleAria,
          },
          {
            appControlId: "microsoft-word-document-control-app",
            description: ec.microsoftWordDescription,
            disableTooltip: ec.microsoftWordDisableTooltip,
            enableTooltip: ec.microsoftWordEnableTooltip,
            icon: M,
            plugin: eU.find(Q._c) ?? null,
            title: ec.microsoftWord,
            toggleAriaLabel: ec.microsoftWordToggleAria,
          },
        ],
        eH = eW?.plugin.installed === !0,
        ez = el?.find(e7)?.isEnabled ?? !0,
        eK = eu && eg === eJ
      O[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = Object.keys(c.Ypn).filter(c.rUV).map(e9)), (O[31] = I))
        : (I = O[31])
      let e1 = (0, z.D6)(I),
        e2 = eT ? en(H) : ["chrome"],
        e3 = eT
          ? ((s = er ? eL : void 0),
            (F = en(H)),
            Object.keys(c.Ypn)
              .filter(c.rUV)
              .filter((e) => !F.includes(e) && s?.includes(e) === !0))
          : [],
        e4 = er && !ed.isLoading && !ed.allowed,
        sn = []
      if (q.available && null != eO) {
        let e, s
        ;(O[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, { ...ec.anyApp })),
            (s = (0, i.jsx)(b.A, {
              id: "settings.computerUse.anyApp.description",
              defaultMessage: "Let ChatGPT control apps on your computer",
              description: "Description for the Computer Use plugin control row",
            })),
            (O[32] = e),
            (O[33] = s))
          : ((e = O[32]), (s = O[33])),
          sn.push({ plugin: eO, title: e, description: s }))
      }
      for (let [e, s] of [...e2, ...e3].entries())
        if (
          (e === e2.length &&
            sn.push({
              kind: "disclosure",
              description: (0, i.jsx)(b.A, {
                id: "settings.computerUse.moreBrowsers.description",
                defaultMessage: "Set up extensions for more browsers",
                description: "Description for the secondary Chromium browser controls",
              }),
              expanded: K,
              icon: (0, i.jsx)(si, { browserFamilies: e3 }),
              id: "more-browser-controls",
              onToggleExpanded: () => {
                ee(e6)
              },
              title: (0, i.jsx)(b.A, {
                id: "settings.computerUse.moreBrowsers.title",
                defaultMessage: "More browsers",
                description: "Label for the expandable secondary Chromium browser controls",
              }),
            }),
          !(e >= e2.length) || K)
        ) {
          if ("safari" !== s && (eW?.plugin.installed === !0 || !e4)) {
            let e = e1.get(s)
            if (null == e) continue
            let t = !0 === eF.get(s),
              a = c.Ypn[s].displayName,
              o = c.Ypn[s].shortDisplayName
            if (eW?.plugin.installed === !1 && null == e.detectionError) {
              sn.push({
                browserFamily: s,
                description: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.browser.installPluginDescription",
                  defaultMessage: "Install the {pluginName} plugin to enable browser control",
                  description:
                    "Explanation shown when browser control requires an available plugin to be installed first",
                  values: { pluginName: (0, h.V)(eW) },
                }),
                displayName: a,
                icon: st(s),
                id: `${s}-${eW.plugin.id}`,
                plugin: eW,
                title: (0, i.jsx)(ss, { browserFamily: s }),
              })
              continue
            }
            let n =
                null != e.detectionError
                  ? "manage"
                  : (function ({ isInstalled: e, isLoading: s, storeUrl: t }) {
                      return s ? null : e ? "manage" : null == t ? null : "install"
                    })({ isInstalled: e.isInstalled, isLoading: e.isLoading, storeUrl: e.installUrl }),
              r = null
            if (
              ("install" === n
                ? (r = (0, i.jsx)(so, {
                    browserFamily: s,
                    storeUrl: e.installUrl,
                    children: (0, i.jsx)(b.A, {
                      id: "settings.computerUse.browser.installExtension",
                      defaultMessage: "Install",
                      description: "Button label to install a Chromium browser extension",
                    }),
                  }))
                : "manage" === n &&
                  ("chrome" === s || eT) &&
                  (r = (0, i.jsx)(k.$, {
                    color: "secondary",
                    onClick: () => {
                      ea((0, es.XX)(s))
                    },
                    size: "toolbar",
                    children: (0, i.jsx)(b.A, {
                      id: "settings.computerUse.browser.manage",
                      defaultMessage: "Manage",
                      description: "Button label to manage browser control settings",
                    }),
                  })),
              !eT && null != eW && e.isInstalled)
            ) {
              sn.push({
                action: r,
                description: (0, i.jsx)(X.y, { status: e }),
                displayName: eH ? a : void 0,
                icon: st(s),
                id: `${s}-${eW.plugin.id}`,
                plugin: eW,
                title: (0, i.jsx)(ss, { browserFamily: s }),
              })
              continue
            }
            sn.push({
              kind: "app",
              action: r,
              description: (0, i.jsx)(X.y, { status: e }),
              enabled: t,
              icon: st(s),
              id: `${s}-browser-control`,
              onToggleEnabled: (e) => {
                ;(0, ei.gc)(V, m.aRT[s], e)
              },
              showEnableToggle: e.isInstalled,
              title: (0, i.jsx)(ss, { browserFamily: s }),
              toggleAriaLabel: et.formatMessage(
                {
                  id: "settings.computerUse.browser.toggleAria",
                  defaultMessage: "Toggle the @{browserName} browser reference",
                  description: "Accessible label for showing or hiding a browser reference in the composer",
                },
                { browserName: o },
              ),
              toggleTooltip: t
                ? (0, i.jsx)(b.A, {
                    id: "settings.computerUse.browser.disableTooltip",
                    defaultMessage: "Hide @{browserName} in the composer",
                    description: "Tooltip for hiding a Chromium browser reference from the composer",
                    values: { browserName: o },
                  })
                : (0, i.jsx)(b.A, {
                    id: "settings.computerUse.browser.enableTooltip",
                    defaultMessage: "Show @{browserName} in the composer",
                    description: "Tooltip for showing a Chromium browser reference in the composer",
                    values: { browserName: o },
                  }),
            })
            continue
          }
          sn.push({
            kind: "unavailable",
            description: (0, i.jsx)(sa, { browserFamily: s, isRestricted: e4 }),
            icon: st(s),
            id: `${s}-unavailable`,
            title: (0, i.jsx)(ss, { browserFamily: s }),
          })
        }
      if (eR?.plugin.installed === !0) {
        let e, s, t, a, o
        ;(O[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, { ...ec.messages })),
            (s = (0, i.jsx)(b.A, {
              id: "settings.computerUse.messages.description",
              defaultMessage: "Let ChatGPT read and send messages",
              description: "Description for the Messages plugin control row",
            })),
            (O[34] = e),
            (O[35] = s))
          : ((e = O[34]), (s = O[35])),
          O[36] !== ea
            ? ((t = () => {
                ea(e0)
              }),
              (O[36] = ea),
              (O[37] = t))
            : (t = O[37]),
          O[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, i.jsx)(b.A, { ...ec.manage })), (O[38] = a))
            : (a = O[38]),
          O[39] !== t
            ? ((o = (0, i.jsx)(k.$, { color: "secondary", onClick: t, size: "toolbar", children: a })),
              (O[39] = t),
              (O[40] = o))
            : (o = O[40]),
          sn.push({ plugin: eR, title: e, description: s, action: o }))
      }
      if (eN && ("macOS" === H || "windows" === H))
        for (let e of eq) {
          if (null == e.plugin) continue
          let s = e.plugin
          sn.push({
            ...(s.plugin.installed && s.plugin.enabled
              ? {
                  kind: "app",
                  enabled: ez,
                  id: e.appControlId,
                  isPending: eK,
                  onToggleEnabled: (s) => {
                    ep({ appId: eJ, appName: et.formatMessage(e.title), enabled: s }).catch(e5)
                  },
                  toggleAriaLabel: et.formatMessage(e.toggleAriaLabel),
                  toggleTooltip: ez
                    ? (0, i.jsx)(b.A, { ...e.disableTooltip })
                    : (0, i.jsx)(b.A, { ...e.enableTooltip }),
                }
              : { displayName: et.formatMessage(e.title), plugin: s }),
            icon: (0, i.jsx)("img", { alt: "", className: "h-full w-full object-contain", src: e.icon }),
            title: (0, i.jsx)(b.A, { ...e.title }),
            description: (0, i.jsx)(b.A, { ...e.description }),
          })
        }
      return (
        O[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(b.A, {
              id: "settings.computerUse.install.empty",
              defaultMessage: "Computer Use plugins unavailable",
              description: "Empty state shown when computer use plugins cannot be found",
            })),
            (L = (0, i.jsx)(b.A, {
              id: "settings.computerUse.install.button",
              defaultMessage: "Install",
              description: "Button label for installing a computer use plugin",
            })),
            (O[41] = D),
            (O[42] = L))
          : ((D = O[41]), (L = O[42])),
        (0, i.jsx)(eX.Z, { emptyStateTitle: D, installButtonLabel: L, items: sn, pluginsQuery: e_, selectedHostId: eo })
      )
    }
    function e5() {}
    function e6(e) {
      return !e
    }
    function e9(e) {
      return { browserFamily: e }
    }
    function e7(e) {
      return e.id === eJ
    }
    function e8(e) {
      let { plugin: s } = e
      return s.id === m.POp
    }
    function se(e) {
      let { plugin: s } = e
      return s.id
    }
    function ss(e) {
      let s,
        t = (0, a.c)(2),
        { browserFamily: o } = e
      return (
        t[0] !== o
          ? ((s =
              "safari" === o
                ? (0, i.jsx)(b.A, { ...ec.safari })
                : (0, i.jsx)(i.Fragment, { children: c.Ypn[o].displayName })),
            (t[0] = o),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    function st(e) {
      return "safari" === e
        ? (0, i.jsx)(T.I, { className: "text-secondary", "aria-hidden": !1, asset: n })
        : (0, i.jsxs)("span", {
            className: "relative block h-full w-full",
            children: [
              (0, i.jsx)("img", { alt: "", className: "h-full w-full object-contain", src: (0, C.$)(e) }),
              (0, i.jsx)(H, { className: "absolute right-0 bottom-0 h-1/2 w-1/2" }),
            ],
          })
    }
    function si(e) {
      let s,
        t,
        o,
        n,
        r = (0, a.c)(8),
        { browserFamilies: l } = e
      if (r[0] !== l) {
        let e = l.slice(0, 3)
        ;((s = "true"),
          (t = "relative block h-full w-full"),
          (o = e.map((s, t) =>
            (0, i.jsx)(
              "img",
              {
                alt: "",
                className: (0, d.A)(
                  1 === e.length ? "h-full w-full" : "absolute size-6",
                  0 === t && e.length > 1 && "top-0 left-0",
                  1 === t && (2 === e.length ? "right-0 bottom-0" : "top-0 right-0"),
                  2 === t && "bottom-0 left-1/2 -translate-x-1/2",
                ),
                src: (0, C.$)(s),
              },
              s,
            ),
          )),
          (r[0] = l),
          (r[1] = s),
          (r[2] = t),
          (r[3] = o))
      } else ((s = r[1]), (t = r[2]), (o = r[3]))
      return (
        r[4] !== s || r[5] !== t || r[6] !== o
          ? ((n = (0, i.jsx)("span", { "aria-hidden": s, className: t, children: o })),
            (r[4] = s),
            (r[5] = t),
            (r[6] = o),
            (r[7] = n))
          : (n = r[7]),
        n
      )
    }
    function sa(e) {
      let s,
        t = (0, a.c)(3),
        { browserFamily: o, isRestricted: n } = e
      if ("safari" === o) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(b.A, {
                id: "settings.computerUse.safari.description",
                defaultMessage: "Safari extension support is coming soon",
                description: "Description for unavailable Safari browser control",
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      if (n) {
        let e
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(b.A, { ...K.w.restrictedAvailabilityDescription })), (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(b.A, {
              id: "settings.computerUse.browser.description",
              defaultMessage: "Use a browser extension for added control",
              description: "Description for a browser control that has not been set up",
            })),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function so(e) {
      let s,
        t,
        o = (0, a.c)(9),
        { browserFamily: n, children: r, storeUrl: l } = e,
        c = (0, g.gh)(J.u),
        d = (0, x.A)(),
        u = null == l
      return (
        o[0] !== n || o[1] !== d || o[2] !== c || o[3] !== l
          ? ((s = () => {
              if (null == l) return
              let e = Y.appServices?.chromiumBrowser?.openUrl({ browserFamily: n, url: l })
              null == e
                ? (0, E.E0)({ href: l, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                : e.catch(() => {
                    c.get(D.Id).danger(
                      d.formatMessage({
                        id: "settings.computerUse.browser.openExtensionStoreError",
                        defaultMessage: "Unable to open browser extension page",
                        description:
                          "Toast shown when the app fails to open a Chromium browser extension install destination",
                      }),
                      { errorAnalytics: { toastId: "settings.computerUse.browser.openExtensionStoreError" } },
                    )
                  })
            }),
            (o[0] = n),
            (o[1] = d),
            (o[2] = c),
            (o[3] = l),
            (o[4] = s))
          : (s = o[4]),
        o[5] !== r || o[6] !== u || o[7] !== s
          ? ((t = (0, i.jsx)(k.$, { color: "secondary", disabled: u, onClick: s, size: "toolbar", children: r })),
            (o[5] = r),
            (o[6] = u),
            (o[7] = s),
            (o[8] = t))
          : (t = o[8]),
        t
      )
    }
    function sn() {
      let e,
        s,
        t,
        o,
        n = (0, a.c)(11),
        { selectedHostId: r } = (0, eV.D)()
      n[0] !== r ? ((e = { hostId: r }), (n[0] = r), (n[1] = e)) : (e = n[1])
      let l = (0, B.J)(e)
      ;(n[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (n[2] = s)) : (s = n[2]),
        n[3] !== l || n[4] !== r
          ? ((t = { enabled: l, hostId: r, roots: s }), (n[3] = l), (n[4] = r), (n[5] = t))
          : (t = n[5]))
      let { data: c, isLoading: d } = (0, Z.Kj)(t),
        u = (0, R.m)(r),
        p = eZ(c ?? [], m.ovW, u)
      if (d && null == p) {
        let e, s, t
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(b.A, { ...ec.messages })), (n[6] = e))
          : (e = n[6])
        let a = e
        return (
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(ed, { current: a })), (n[7] = s))
            : (s = n[7]),
          n[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(ea.P, {
                backSlot: s,
                title: a,
                children: (0, i.jsx)(ez.j, {
                  children: (0, i.jsx)(b.A, {
                    id: "settings.computerUse.messages.loading",
                    defaultMessage: "Loading Messages settings…",
                    description: "Loading state for Messages computer use settings",
                  }),
                }),
              })),
              (n[8] = t))
            : (t = n[8]),
          t
        )
      }
      if (!d && p?.plugin.installed !== !0) {
        let e
        return (
          n[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(w.C5, { to: "/settings/computer-use", replace: !0 })), (n[9] = e))
            : (e = n[9]),
          e
        )
      }
      return (
        n[10] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, i.jsx)(eW, {})), (n[10] = o)) : (o = n[10]),
        o
      )
    }
    function sr(e) {
      let s,
        t,
        o,
        n,
        r,
        l,
        d,
        u,
        p,
        m,
        h,
        f,
        x,
        y,
        j,
        v,
        A,
        M,
        C = (0, a.c)(55),
        { browserFamily: S } = e,
        _ = (0, g.gh)(J.u),
        { selectedHostId: P } = (0, eV.D)()
      C[0] !== P ? ((s = { hostId: P }), (C[0] = P), (C[1] = s)) : (s = C[1])
      let N = (0, W.J)(s)
      C[2] !== P ? ((t = { hostId: P }), (C[2] = P), (C[3] = t)) : (t = C[3])
      let E = (0, B.J)(t)
      ;(C[4] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), (C[4] = o)) : (o = C[4]),
        C[5] !== E || C[6] !== P
          ? ((n = { enabled: E, hostId: P, roots: o }), (C[5] = E), (C[6] = P), (C[7] = n))
          : (n = C[7]))
      let { data: T, isLoading: I } = (0, Z.Kj)(n),
        L = sf(T ?? [], (0, U.l)()),
        F = L?.plugin.installed === !0
      C[8] !== S ? ((r = (0, i.jsx)(ss, { browserFamily: S })), (C[8] = S), (C[9] = r)) : (r = C[9])
      let O = r
      C[10] !== S ? ((l = { browserFamily: S }), (C[10] = S), (C[11] = l)) : (l = C[11])
      let R = (0, z.Rn)(l),
        G = Y.appServices?.chromiumBrowser,
        { platform: H } = (0, q.V)()
      if (I && null == L) {
        let e, s, t
        return (
          C[12] !== O ? ((e = (0, i.jsx)(ed, { current: O })), (C[12] = O), (C[13] = e)) : (e = C[13]),
          C[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(ez.j, {
                children: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.browser.loading",
                  defaultMessage: "Loading browser settings…",
                  description: "Loading state for Chromium browser computer use settings",
                }),
              })),
              (C[14] = s))
            : (s = C[14]),
          C[15] !== e || C[16] !== O
            ? ((t = (0, i.jsx)(ea.P, { backSlot: e, title: O, children: s })), (C[15] = e), (C[16] = O), (C[17] = t))
            : (t = C[17]),
          t
        )
      }
      if (!I && !F && !R.isLoading && !R.isInstalled && null == R.detectionError) {
        let e
        return (
          C[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(w.C5, { to: "/settings/computer-use", replace: !0 })), (C[18] = e))
            : (e = C[18]),
          e
        )
      }
      ;(C[19] !== R.detectionError || C[20] !== R.retry
        ? ((d =
            null != R.detectionError &&
            (0, i.jsx)(k.$, {
              color: "secondary",
              onClick: R.retry,
              size: "toolbar",
              children: (0, i.jsx)(b.A, {
                id: "settings.computerUse.browser.retryDetection",
                defaultMessage: "Retry",
                description:
                  "Button in browser control settings to check extension installation again after a detection or permission error",
              }),
            })),
          (C[19] = R.detectionError),
          (C[20] = R.retry),
          (C[21] = d))
        : (d = C[21]),
        C[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(b.A, {
              id: "settings.computerUse.browser.reinstallExtension",
              defaultMessage: "Reinstall extension",
              description: "Button label to reinstall a Chromium browser extension",
            })),
            (C[22] = u))
          : (u = C[22]),
        C[23] !== S || C[24] !== R.installUrl
          ? ((p = (0, i.jsx)(so, { browserFamily: S, storeUrl: R.installUrl, children: u })),
            (C[23] = S),
            (C[24] = R.installUrl),
            (C[25] = p))
          : (p = C[25]))
      let V = null == G || null == R.installedExtensionId || R.isLoading
      return (
        C[26] !== S || C[27] !== R.installedExtensionId || C[28] !== _
          ? ((m = () => {
              null != G &&
                null != R.installedExtensionId &&
                G.openExtensionSettings({ browserFamily: S, extensionId: R.installedExtensionId }).catch(() => {
                  _.get(D.Id).danger(
                    (0, i.jsx)(b.A, {
                      id: "settings.computerUse.browser.openExtensionSettingsError",
                      defaultMessage: "Unable to open browser extension settings",
                      description: "Toast shown when the app fails to open Chromium browser extension settings",
                    }),
                    { errorAnalytics: { toastId: "settings.computerUse.browser.openExtensionSettingsError" } },
                  )
                })
            }),
            (C[26] = S),
            (C[27] = R.installedExtensionId),
            (C[28] = _),
            (C[29] = m))
          : (m = C[29]),
        C[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(b.A, {
              id: "settings.computerUse.browser.removeExtension",
              defaultMessage: "Remove extension",
              description: "Button label to remove a Chromium browser extension",
            })),
            (C[30] = h))
          : (h = C[30]),
        C[31] !== V || C[32] !== m
          ? ((f = (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(k.$, { color: "danger", disabled: V, onClick: m, size: "toolbar", children: h }),
            })),
            (C[31] = V),
            (C[32] = m),
            (C[33] = f))
          : (f = C[33]),
        C[34] !== f || C[35] !== d || C[36] !== p
          ? ((x = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [d, p, f] })),
            (C[34] = f),
            (C[35] = d),
            (C[36] = p),
            (C[37] = x))
          : (x = C[37]),
        C[38] !== O ? ((y = (0, i.jsx)(ed, { current: O })), (C[38] = O), (C[39] = y)) : (y = C[39]),
        C[40] !== R
          ? ((j =
              null != R.detectionError
                ? (0, i.jsx)(X.y, { status: R })
                : !R.isLoading && (0, i.jsx)(sl, { installed: R.isInstalled })),
            (C[40] = R),
            (C[41] = j))
          : (j = C[41]),
        C[42] !== S || C[43] !== R.detectionError || C[44] !== H
          ? ((v =
              null != R.detectionError &&
              (0, i.jsx)(ep.X, {
                children: (0, i.jsx)(em.ic, {
                  control: null,
                  label:
                    "permission-denied" === R.detectionError && "macOS" === H
                      ? (0, i.jsx)(b.A, {
                          id: "settings.computerUse.browser.permissionDenied",
                          defaultMessage:
                            "Allow this app to access {browserName} in System Settings → Privacy & Security → Files & Folders, then retry",
                          description:
                            "Recovery instructions in browser control settings after macOS denies access to browser data. browserName is the browser app name, such as Google Chrome. System Settings, Privacy & Security, and Files & Folders are macOS settings labels.",
                          values: { browserName: c.Ypn[S].displayName },
                        })
                      : (0, i.jsx)(b.A, {
                          id: "settings.computerUse.browser.detectionFailed",
                          defaultMessage: "Check this app’s permission to read browser data, then retry",
                          description:
                            "Recovery instructions in browser control settings when extension installation cannot be checked",
                        }),
                }),
              })),
            (C[42] = S),
            (C[43] = R.detectionError),
            (C[44] = H),
            (C[45] = v))
          : (v = C[45]),
        C[46] !== N.available
          ? ((A = (0, i.jsx)(eo.Q, { backend: "chrome", showWebMcp: N.available })), (C[46] = N.available), (C[47] = A))
          : (A = C[47]),
        C[48] !== x || C[49] !== y || C[50] !== j || C[51] !== v || C[52] !== A || C[53] !== O
          ? ((M = (0, i.jsxs)(ea.P, {
              action: x,
              backSlot: y,
              subtitle: j,
              subtitleClassName: "flex",
              title: O,
              children: [v, A],
            })),
            (C[48] = x),
            (C[49] = y),
            (C[50] = j),
            (C[51] = v),
            (C[52] = A),
            (C[53] = O),
            (C[54] = M))
          : (M = C[54]),
        M
      )
    }
    function sl(e) {
      let s,
        t,
        o,
        n,
        r,
        l = (0, a.c)(12),
        { installed: c } = e,
        u = c
          ? "bg-[var(--app-color-background-status-success)] text-[var(--color-text-success)]"
          : "bg-chart-red/10 text-chart-red"
      l[0] !== u
        ? ((s = (0, d.A)("inline-flex w-max items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium", u)),
          (l[0] = u),
          (l[1] = s))
        : (s = l[1])
      let p = c ? "bg-[var(--app-color-icon-success)]" : "bg-chart-red"
      return (
        l[2] !== p ? ((t = (0, d.A)("h-2 w-2 rounded-full", p)), (l[2] = p), (l[3] = t)) : (t = l[3]),
        l[4] !== t ? ((o = (0, i.jsx)("span", { className: t })), (l[4] = t), (l[5] = o)) : (o = l[5]),
        l[6] !== c
          ? ((n = c
              ? (0, i.jsx)(b.A, {
                  id: "settings.computerUse.chrome.installed",
                  defaultMessage: "Installed",
                  description: "Status badge for an installed Chromium browser extension",
                })
              : (0, i.jsx)(b.A, {
                  id: "settings.computerUse.chrome.notInstalled",
                  defaultMessage: "Not installed",
                  description: "Status badge for a Chromium browser extension that is not installed",
                })),
            (l[6] = c),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== s || l[9] !== o || l[10] !== n
          ? ((r = (0, i.jsxs)("span", { className: s, children: [o, n] })),
            (l[8] = s),
            (l[9] = o),
            (l[10] = n),
            (l[11] = r))
          : (r = l[11]),
        r
      )
    }
    function sc() {
      var e
      let s,
        t,
        n,
        r,
        c,
        d,
        u,
        p,
        m = (0, a.c)(20),
        h = (0, g.gh)(J.u),
        f = (0, g.Ul)(ee.XF)
      m[0] !== h
        ? ((s = {
            mutationFn: ee.zz,
            onSuccess: (e) => {
              h.query.setData(ee.XF, e)
            },
          }),
          (m[0] = h),
          (m[1] = s))
        : (s = m[1])
      let x = (0, l.n)(s)
      if (null == f.data) return null
      m[2] !== f.data
        ? ((e = f.data), (t = e2.some((s) => s.value === e) ? f.data : e1), (m[2] = f.data), (m[3] = t))
        : (t = m[3])
      let w = t
      m[4] !== w ? ((n = e2.find((e) => e.value === w) ?? e2.find(sd) ?? e2[0]), (m[4] = w), (m[5] = n)) : (n = m[5])
      let y = n,
        j = f.isLoading || x.isPending
      ;(m[6] !== y.label ? ((r = (0, i.jsx)(b.A, { ...y.label })), (m[6] = y.label), (m[7] = r)) : (r = m[7]),
        m[8] !== j || m[9] !== r
          ? ((c = (0, i.jsx)(eb.vg, {
              className: "w-max max-w-full",
              contentClassName: "flex-none",
              disabled: j,
              children: r,
            })),
            (m[8] = j),
            (m[9] = r),
            (m[10] = c))
          : (c = m[10]))
      let v = f.isLoading || x.isPending
      return (
        m[11] !== w || m[12] !== x
          ? ((d = e2.map((e) =>
              (0, i.jsx)(
                N.ms.Item,
                {
                  onSelect: () => {
                    x.mutate(e.value)
                  },
                  rightIconAsset: w === e.value ? o.G : void 0,
                  children: (0, i.jsx)("span", { className: "text-sm", children: (0, i.jsx)(b.A, { ...e.label }) }),
                },
                e.value,
              ),
            )),
            (m[11] = w),
            (m[12] = x),
            (m[13] = d))
          : (d = m[13]),
        m[14] !== d
          ? ((u = (0, i.jsx)("div", { className: "w-max max-w-[calc(100vw-2rem)]", children: d })),
            (m[14] = d),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== c || m[17] !== v || m[18] !== u
          ? ((p = (0, i.jsx)(N.Ab, { triggerButton: c, align: "start", disabled: v, children: u })),
            (m[16] = c),
            (m[17] = v),
            (m[18] = u),
            (m[19] = p))
          : (p = m[19]),
        p
      )
    }
    function sd(e) {
      return e.value === e1
    }
    function su() {
      let e,
        s,
        t,
        o,
        n,
        r,
        c,
        d,
        u = (0, a.c)(19),
        p = (0, g.gh)(J.u),
        m = (0, x.A)(),
        h = (0, g.Ul)(ee.WP)
      u[0] !== p
        ? ((e = {
            mutationFn: ee._o,
            onSuccess: (e) => {
              if (
                (p.query.setData(ee.WP, (s) => ({
                  computerIconDataURL: s?.computerIconDataURL ?? null,
                  enabled: e,
                  lockIconDataURL: s?.lockIconDataURL ?? null,
                })),
                null != e)
              ) {
                if (e)
                  return void p
                    .get(D.Id)
                    .success(
                      (0, i.jsx)(b.A, {
                        id: "settings.computerUse.backgroundAuth.enabled",
                        defaultMessage: "Locked use enabled",
                        description: "Toast shown after enabling Locked use",
                      }),
                    )
                p.get(D.Id).success(
                  (0, i.jsx)(b.A, {
                    id: "settings.computerUse.backgroundAuth.disabled",
                    defaultMessage: "Locked use disabled",
                    description: "Toast shown after disabling Locked use",
                  }),
                )
              }
            },
            onError: () => {
              p.get(D.Id).danger(
                (0, i.jsx)(b.A, {
                  id: "settings.computerUse.backgroundAuth.saveError",
                  defaultMessage: "Unable to update Locked use",
                  description: "Toast shown when updating Locked use fails",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.backgroundAuth.saveError" } },
              )
            },
          }),
          (u[0] = p),
          (u[1] = e))
        : (e = u[1])
      let f = (0, l.n)(e)
      if (h.data?.enabled == null) return null
      ;(u[2] !== h.data.computerIconDataURL || u[3] !== h.data.lockIconDataURL
        ? ((s =
            null != h.data.computerIconDataURL && null != h.data.lockIconDataURL
              ? (0, i.jsx)("span", {
                  className: "flex h-10 w-10 items-center justify-center",
                  children: (0, i.jsx)("span", {
                    className: "origin-center scale-[0.65]",
                    children: (0, i.jsx)(et, {
                      computerImageDataUrl: h.data.computerIconDataURL,
                      lockImageDataUrl: h.data.lockIconDataURL,
                    }),
                  }),
                })
              : null),
          (u[2] = h.data.computerIconDataURL),
          (u[3] = h.data.lockIconDataURL),
          (u[4] = s))
        : (s = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(b.A, {
              id: "settings.computerUse.backgroundAuth.label",
              defaultMessage: "Locked use",
              description: "Label for the Locked use toggle",
            })),
            (u[5] = t))
          : (t = u[5]),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(b.A, {
              id: "settings.computerUse.backgroundAuth.description",
              defaultMessage: "Let ChatGPT use your Mac when it's locked. <a>Learn more</a>",
              description: "Description for the Locked use toggle",
              values: { a: sp },
            })),
            (u[6] = o))
          : (o = u[6]),
        u[7] !== m
          ? ((n = m.formatMessage({
              id: "settings.computerUse.backgroundAuth.ariaLabel",
              defaultMessage: "Enable Locked use",
              description: "Accessible label for the Locked use toggle",
            })),
            (u[7] = m),
            (u[8] = n))
          : (n = u[8]))
      let w = h.isLoading || f.isPending
      return (
        u[9] !== f
          ? ((r = (e) => {
              f.mutate(e)
            }),
            (u[9] = f),
            (u[10] = r))
          : (r = u[10]),
        u[11] !== h.data.enabled || u[12] !== n || u[13] !== w || u[14] !== r
          ? ((c = (0, i.jsx)(L.l, { ariaLabel: n, checked: h.data.enabled, disabled: w, onChange: r })),
            (u[11] = h.data.enabled),
            (u[12] = n),
            (u[13] = w),
            (u[14] = r),
            (u[15] = c))
          : (c = u[15]),
        u[16] !== s || u[17] !== c
          ? ((d = (0, i.jsx)(eh.t, { children: (0, i.jsx)(em.ic, { icon: s, label: t, description: o, control: c }) })),
            (u[16] = s),
            (u[17] = c),
            (u[18] = d))
          : (d = u[18]),
        d
      )
    }
    function sp(e) {
      return (0, i.jsx)("a", {
        className: "inline-flex text-info",
        href: S.DU,
        target: "_blank",
        rel: "noreferrer",
        children: e,
      })
    }
    function sg() {
      let e,
        s,
        t,
        o = (0, a.c)(7),
        n = (0, g.gh)(J.u),
        r = (0, g.Ul)(ee.OJ)
      if (
        (o[0] !== n
          ? ((e = () => {
              n.get(ee.OJ).refetch()
            }),
            (s = [n]),
            (o[0] = n),
            (o[1] = e),
            (o[2] = s))
          : ((e = o[1]), (s = o[2])),
        (0, f.useEffect)(e, s),
        r.isLoading)
      ) {
        let e
        return (
          o[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(eg.u, {
                children: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.allowedApps.loading",
                  defaultMessage: "Loading allowed apps…",
                  description: "Message shown while loading computer use allowed apps",
                }),
              })),
              (o[3] = e))
            : (e = o[3]),
          e
        )
      }
      if (r.isError) {
        let e
        return (
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("div", {
                className: "p-4 text-sm text-secondary",
                children: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.allowedApps.loadError",
                  defaultMessage: "Unable to load allowed apps.",
                  description: "Message shown when computer use allowed apps fail to load",
                }),
              })),
              (o[4] = e))
            : (e = o[4]),
          e
        )
      }
      return (
        o[5] !== r.data ? ((t = (0, i.jsx)(sm, { approvals: r.data })), (o[5] = r.data), (o[6] = t)) : (t = o[6]),
        t
      )
    }
    function sm(e) {
      let s,
        t,
        o,
        n,
        r,
        c,
        d,
        u,
        p,
        m,
        h,
        w,
        y,
        j,
        v,
        A,
        M,
        U,
        C = (0, a.c)(41),
        { approvals: S } = e,
        N = (0, g.gh)(J.u),
        E = (0, x.A)(),
        [T, I] = (0, f.useState)(null)
      C[0] !== N
        ? ((s = {
            mutationFn: sh,
            onSuccess: (e) => {
              ;(N.query.setData(ee.OJ, e),
                N.get(D.Id).success(
                  (0, i.jsx)(b.A, {
                    id: "settings.computerUse.allowedApps.saved",
                    defaultMessage: "Allowed app removed",
                    description: "Toast shown after removing a computer use allowed app",
                  }),
                ))
            },
            onError: () => {
              N.get(D.Id).danger(
                (0, i.jsx)(b.A, {
                  id: "settings.computerUse.allowedApps.saveError",
                  defaultMessage: "Unable to save allowed apps",
                  description: "Toast shown when saving computer use allowed apps fails",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.allowedApps.saveError" } },
              )
            },
          }),
          (C[0] = N),
          (C[1] = s))
        : (s = C[1])
      let L = (0, l.n)(s)
      C[2] !== T || C[3] !== L
        ? ((t = async () => {
            null != T && (await L.mutateAsync(T.bundleIdentifier), I(null))
          }),
          (C[2] = T),
          (C[3] = L),
          (C[4] = t))
        : (t = C[4])
      let F = t
      ;(C[5] !== S?.approvedApps ? ((o = S?.approvedApps ?? []), (C[5] = S?.approvedApps), (C[6] = o)) : (o = C[6]),
        C[7] !== E || C[8] !== L.isPending || C[9] !== o
          ? ((n = (0, i.jsx)(sb, { approvedApps: o, intl: E, isSaving: L.isPending, onRequestRemoval: I })),
            (C[7] = E),
            (C[8] = L.isPending),
            (C[9] = o),
            (C[10] = n))
          : (n = C[10]))
      let O = null != T
      C[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (e) => {
            e || I(null)
          }),
          (C[11] = r))
        : (r = C[11])
      let W = T?.displayName ?? ""
      C[12] !== W
        ? ((c = (0, i.jsx)(_.L3, {
            children: (0, i.jsx)(b.A, {
              id: "settings.computerUse.allowedApps.removeDialogTitle",
              defaultMessage: "Remove “{displayName}” from always allowed apps?",
              description: "Title for dialog confirming removal of a computer use allowed app",
              values: { displayName: W },
            }),
          })),
          (C[12] = W),
          (C[13] = c))
        : (c = C[13])
      let R = T?.displayName ?? ""
      return (
        C[14] !== R
          ? ((d = (0, i.jsx)(_.rr, {
              children: (0, i.jsx)(b.A, {
                id: "settings.computerUse.allowedApps.removeDialogSubtitle",
                defaultMessage: "ChatGPT will ask to use “{displayName}” in the next computer use session.",
                description: "Subtitle for dialog confirming removal of a computer use allowed app",
                values: { displayName: R },
              }),
            })),
            (C[14] = R),
            (C[15] = d))
          : (d = C[15]),
        C[16] !== d || C[17] !== c
          ? ((u = (0, i.jsx)(P.OO, { children: (0, i.jsx)(P.c7, { title: c, subtitle: d }) })),
            (C[16] = d),
            (C[17] = c),
            (C[18] = u))
          : (u = C[18]),
        C[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = () => {
              I(null)
            }),
            (m = (0, i.jsx)(b.A, {
              id: "settings.computerUse.allowedApps.removeDialogCancel",
              defaultMessage: "Cancel",
              description: "Cancel button label for remove allowed app dialog",
            })),
            (C[19] = p),
            (C[20] = m))
          : ((p = C[19]), (m = C[20])),
        C[21] !== L.isPending
          ? ((h = (0, i.jsx)(k.$, { color: "ghost", disabled: L.isPending, onClick: p, children: m })),
            (C[21] = L.isPending),
            (C[22] = h))
          : (h = C[22]),
        C[23] !== F
          ? ((w = () => {
              F()
            }),
            (C[23] = F),
            (C[24] = w))
          : (w = C[24]),
        C[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(b.A, {
              id: "settings.computerUse.allowedApps.removeDialogConfirm",
              defaultMessage: "Remove",
              description: "Confirm button label for remove allowed app dialog",
            })),
            (C[25] = y))
          : (y = C[25]),
        C[26] !== L.isPending || C[27] !== w
          ? ((j = (0, i.jsx)(k.$, { color: "danger", loading: L.isPending, onClick: w, children: y })),
            (C[26] = L.isPending),
            (C[27] = w),
            (C[28] = j))
          : (j = C[28]),
        C[29] !== h || C[30] !== j
          ? ((v = (0, i.jsx)(P.OO, { children: (0, i.jsxs)(P.Es, { children: [h, j] }) })),
            (C[29] = h),
            (C[30] = j),
            (C[31] = v))
          : (v = C[31]),
        C[32] !== u || C[33] !== v
          ? ((A = (0, i.jsxs)(P.R4, { children: [u, v] })), (C[32] = u), (C[33] = v), (C[34] = A))
          : (A = C[34]),
        C[35] !== A || C[36] !== O
          ? ((M = (0, i.jsx)(_.lG, { open: O, onOpenChange: r, size: "compact", children: A })),
            (C[35] = A),
            (C[36] = O),
            (C[37] = M))
          : (M = C[37]),
        C[38] !== M || C[39] !== n
          ? ((U = (0, i.jsxs)(i.Fragment, { children: [n, M] })), (C[38] = M), (C[39] = n), (C[40] = U))
          : (U = C[40]),
        U
      )
    }
    async function sh(e) {
      let s = await (0, ee.Zw)(e)
      if (null == s) throw Error("Computer use app approvals are unavailable")
      return s
    }
    function sf(e, s) {
      let t = (0, eQ.t)(),
        i = [m.DVx.chrome]
      return (
        t === m.x1u.Dev
          ? i.unshift(m.DVx.chromeDev)
          : m.x1u.isInternal(t) && i.unshift(m.DVx.chromeInternal, m.DVx.chromeDev),
        s && (i = [m.DVx.browser]),
        i.map((s) => e.find(({ plugin: e }) => e.id === s)).find((e) => null != e) ?? null
      )
    }
    function sb(e) {
      let s,
        t,
        o = (0, a.c)(12),
        { approvedApps: n, intl: r, isSaving: l, onRequestRemoval: c } = e
      if (0 === n.length) {
        let e
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(I.W, {
                layout: "settings-row",
                children: (0, i.jsx)(b.A, {
                  id: "settings.computerUse.allowedApps.emptyTitle",
                  defaultMessage: "None yet",
                  description: "Empty state title for computer use allowed apps",
                }),
              })),
              (o[0] = e))
            : (e = o[0]),
          e
        )
      }
      if (o[1] !== n || o[2] !== r || o[3] !== l || o[4] !== c) {
        let e
        ;(o[6] !== r || o[7] !== l || o[8] !== c
          ? ((e = (e) =>
              (0, i.jsx)(
                em.ic,
                {
                  icon: (0, i.jsx)(sx, { approvedApp: e }),
                  label: (0, i.jsx)("span", { className: "font-medium", children: e.displayName }),
                  description: null,
                  control: (0, i.jsx)(k.$, {
                    "aria-label": r.formatMessage(
                      {
                        id: "settings.computerUse.allowedApps.removeAriaLabel",
                        defaultMessage: "Remove {displayName}",
                        description: "Aria label for button that removes a computer use allowed app",
                      },
                      { displayName: e.displayName },
                    ),
                    color: "danger",
                    disabled: l,
                    onClick: () => {
                      c(e)
                    },
                    size: "icon",
                    children: (0, i.jsx)(V.A, {}),
                  }),
                },
                e.bundleIdentifier,
              )),
            (o[6] = r),
            (o[7] = l),
            (o[8] = c),
            (o[9] = e))
          : (e = o[9]),
          (s = n.map(e)),
          (o[1] = n),
          (o[2] = r),
          (o[3] = l),
          (o[4] = c),
          (o[5] = s))
      } else s = o[5]
      return (o[10] !== s ? ((t = (0, i.jsx)(i.Fragment, { children: s })), (o[10] = s), (o[11] = t)) : (t = o[11]), t)
    }
    function sx(e) {
      let s,
        t,
        o = (0, a.c)(6),
        { approvedApp: n } = e
      if (null != n.iconDataURL) {
        let e
        return (
          o[0] !== n.iconDataURL
            ? ((e = (0, i.jsx)("img", {
                alt: "",
                className: "h-9 w-9 shrink-0 rounded-md",
                draggable: !1,
                src: n.iconDataURL,
              })),
              (o[0] = n.iconDataURL),
              (o[1] = e))
            : (e = o[1]),
          e
        )
      }
      return (
        o[2] !== n.displayName
          ? ((s = n.displayName.slice(0, 1).toUpperCase()), (o[2] = n.displayName), (o[3] = s))
          : (s = o[3]),
        o[4] !== s
          ? ((t = (0, i.jsx)("div", {
              className:
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-text/10 text-sm font-semibold text-codex-description",
              children: s,
            })),
            (o[4] = s),
            (o[5] = t))
          : (t = o[5]),
        t
      )
    }
  },
  w4F7(e, s, t) {
    t.d(s, { Z: () => P })
    var i = t("ABep"),
      a = t("QosV"),
      o = t("slpy"),
      n = t("z2Oi")
    let r = (0, t("nkTT").a)({
      name: "chevron-down-md-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 5.25, y: 9.25, width: 13.499878, height: 7.292969 },
        visualBounds: { x: 5.25, y: 9.25, width: 13.499878, height: 7.292969 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.25, y: 9.25, width: 13.499878, height: 7.292969 },
        center: { x: 11.999939, y: 12.896485 },
        insets: { top: 9.25, right: 5.250122, bottom: 7.457031, left: 5.25 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.999939, y: 12.896485 },
          foreground: { x: 11.999939, y: 12.896485 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M17.4697 9.46967C17.7626 9.17678 18.2373 9.17678 18.5302 9.46967C18.8231 9.76256 18.8231 10.2373 18.5302 10.5302L12.8837 16.1767C12.3956 16.6648 11.6043 16.6648 11.1162 16.1767L5.46967 10.5302C5.17678 10.2373 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23732 9.17678 6.53022 9.46967L11.9999 14.9394L17.4697 9.46967Z" fill="currentColor"/>',
    })
    var l = t("yu23"),
      c = t("w1tT"),
      d = t("on57"),
      u = t("Haiv"),
      p = t("SqAt"),
      g = t("oyxz"),
      m = t("Wf1j"),
      h = t("HZfM"),
      f = t("FvYa"),
      b = t("ygO2"),
      x = t("bqtn"),
      w = t("HOLv"),
      y = t("evwP"),
      j = t("f38C"),
      v = t("F0xz"),
      A = t("a0aG"),
      M = t("Yewb"),
      U = t("jEyg"),
      C = t("ugfi"),
      S = t("I7Ou"),
      k = t("AWNZ"),
      _ = t("ZEx5")
    function P(e) {
      let s,
        t,
        n,
        c,
        m,
        f,
        x = (0, a.c)(35),
        {
          emptyStateTitle: j,
          installButtonLabel: P,
          items: T,
          pluginsQuery: I,
          selectedHostId: L,
          unavailableItems: F,
        } = e
      x[0] !== F ? ((s = void 0 === F ? [] : F), (x[0] = F), (x[1] = s)) : (s = x[1])
      let O = s,
        W = (0, h.Zp)(),
        { installPlugin: R, status: B } = (0, M.XY)()
      x[2] !== L ? ((t = { hostId: L }), (x[2] = L), (x[3] = t)) : (t = x[3])
      let { pendingPluginId: G, setPluginEnabled: q } = (0, C.zQ)(t)
      x[4] !== L ? ((n = { hostId: L }), (x[4] = L), (x[5] = n)) : (n = x[5])
      let { pendingUninstallPluginId: H, uninstallPlugin: V } = (0, C.XV)(n),
        z = B?.hostId === L ? B.pluginId : null,
        X = G ?? z ?? H,
        K = T.length + O.length
      if (I.isLoading && 0 === K) {
        let e
        return (
          x[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(_.t, {
                children: (0, i.jsx)(S.u, {
                  children: (0, i.jsx)(g.A, {
                    id: "settings.plugins.controls.loading",
                    defaultMessage: "Loading plugins…",
                    description: "Loading state for plugin controls in settings",
                  }),
                }),
              })),
              (x[6] = e))
            : (e = x[6]),
          e
        )
      }
      if (null != I.errorMessage) {
        let e
        return (
          x[7] !== I
            ? ((e = (0, i.jsx)(_.t, {
                children:
                  null != I.retry
                    ? (0, i.jsx)(k.ic, {
                        control: (0, i.jsx)(b.$, {
                          color: "secondary",
                          size: "toolbar",
                          onClick: () => void I.retry?.(),
                          children: (0, i.jsx)(g.A, {
                            id: "settings.plugins.controls.retry",
                            defaultMessage: "Retry",
                            description: "Button to retry loading plugin settings after a request fails",
                          }),
                        }),
                        label: (0, i.jsx)("span", { role: "alert", children: I.errorMessage }),
                      })
                    : (0, i.jsx)(y.W, { layout: "settings-row", children: I.errorMessage }),
              })),
              (x[7] = I),
              (x[8] = e))
            : (e = x[8]),
          e
        )
      }
      if (0 === K) {
        let e
        return (
          x[9] !== j
            ? ((e = (0, i.jsx)(_.t, { children: (0, i.jsx)(y.W, { layout: "settings-row", children: j }) })),
              (x[9] = j),
              (x[10] = e))
            : (e = x[10]),
          e
        )
      }
      if (
        x[11] !== P ||
        x[12] !== R ||
        x[13] !== T ||
        x[14] !== W ||
        x[15] !== X ||
        x[16] !== I.reload ||
        x[17] !== L ||
        x[18] !== q ||
        x[19] !== V
      ) {
        let e
        ;(x[21] !== P ||
        x[22] !== R ||
        x[23] !== W ||
        x[24] !== X ||
        x[25] !== I.reload ||
        x[26] !== L ||
        x[27] !== q ||
        x[28] !== V
          ? ((e = (e) =>
              "disclosure" === e.kind
                ? (0, i.jsx)(
                    "button",
                    {
                      "aria-expanded": e.expanded,
                      className:
                        "group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                      onClick: e.onToggleExpanded,
                      type: "button",
                      children: (0, i.jsx)(k.ic, {
                        className: "min-h-[60px]",
                        control: (0, i.jsx)(w.I, {
                          className: (0, d.A)("text-secondary", e.expanded && "rotate-180"),
                          asset: r,
                          "aria-hidden": !1,
                        }),
                        description: e.description,
                        icon: (0, i.jsx)("span", {
                          className:
                            "flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent",
                          children:
                            e.icon ?? (0, i.jsx)(w.I, { className: "text-secondary", "aria-hidden": !1, asset: l.k }),
                        }),
                        label: e.title,
                      }),
                    },
                    e.id,
                  )
                : "unavailable" === e.kind
                  ? (0, i.jsx)(E, { item: e }, e.id)
                  : "app" === e.kind
                    ? (0, i.jsx)(
                        k.ic,
                        {
                          className: "min-h-[60px]",
                          control:
                            null == e.action && !1 === e.showEnableToggle
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: "flex shrink-0 items-center gap-2",
                                  children: [
                                    e.action,
                                    !1 === e.showEnableToggle
                                      ? null
                                      : (0, i.jsx)(o.m, {
                                          content: e.toggleTooltip,
                                          children: (0, i.jsx)(v.l, {
                                            ariaLabel: e.toggleAriaLabel,
                                            checked: e.enabled,
                                            disabled: !0 === e.isPending,
                                            onChange: e.onToggleEnabled,
                                          }),
                                        }),
                                  ],
                                }),
                          description: e.description,
                          icon: (0, i.jsx)("span", {
                            className:
                              "flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent",
                            children:
                              e.icon ?? (0, i.jsx)(w.I, { className: "text-secondary", "aria-hidden": !1, asset: l.k }),
                          }),
                          label: e.title,
                        },
                        e.id,
                      )
                    : (0, i.jsx)(
                        D,
                        {
                          installButtonLabel: P,
                          isPending: X === e.plugin.plugin.id,
                          item: e,
                          onInstallPlugin: (s) => {
                            R(s, {
                              browserFamily: e.browserFamily,
                              hostId: L,
                              marketplaceAnalytics: A.F.settings,
                              onSuccess: I.reload,
                            })
                          },
                          onOpenPluginDetails: (e) => {
                            W((0, U.CL)(e, { hostId: L, breadcrumb: "settings" }))
                          },
                          onToggleInstalledPluginEnabled: (s, t) => {
                            q({ pluginId: s.plugin.id, pluginDisplayName: e.displayName ?? (0, u.V)(s), enabled: t })
                          },
                          onUninstallPlugin: (e) => {
                            V({
                              marketplaceName: e.marketplaceName,
                              pluginDisplayName: (0, u.V)(e),
                              pluginId: e.plugin.id,
                              pluginName: e.plugin.name,
                              requestPluginId: (0, p.RQ)(e),
                            })
                          },
                        },
                        e.id ?? e.plugin.plugin.id,
                      )),
            (x[21] = P),
            (x[22] = R),
            (x[23] = W),
            (x[24] = X),
            (x[25] = I.reload),
            (x[26] = L),
            (x[27] = q),
            (x[28] = V),
            (x[29] = e))
          : (e = x[29]),
          (c = T.map(e)),
          (x[11] = P),
          (x[12] = R),
          (x[13] = T),
          (x[14] = W),
          (x[15] = X),
          (x[16] = I.reload),
          (x[17] = L),
          (x[18] = q),
          (x[19] = V),
          (x[20] = c))
      } else c = x[20]
      return (
        x[30] !== O ? ((m = O.map(N)), (x[30] = O), (x[31] = m)) : (m = x[31]),
        x[32] !== c || x[33] !== m
          ? ((f = (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(_.t, { children: [c, m] }) })),
            (x[32] = c),
            (x[33] = m),
            (x[34] = f))
          : (f = x[34]),
        f
      )
    }
    function N(e) {
      return (0, i.jsx)(E, { item: e }, e.id)
    }
    function E(e) {
      let s,
        t,
        o,
        n = (0, a.c)(8),
        { item: r } = e
      return (
        n[0] !== r.icon
          ? ((s = r.icon ?? (0, i.jsx)(w.I, { className: "text-secondary", "aria-hidden": !1, asset: l.k })),
            (n[0] = r.icon),
            (n[1] = s))
          : (s = n[1]),
        n[2] !== s
          ? ((t = (0, i.jsx)("span", {
              className:
                "flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent",
              children: s,
            })),
            (n[2] = s),
            (n[3] = t))
          : (t = n[3]),
        n[4] !== r.description || n[5] !== r.title || n[6] !== t
          ? ((o = (0, i.jsx)(k.ic, {
              className: "min-h-[60px] opacity-60",
              label: r.title,
              description: r.description,
              icon: t,
              control: T,
            })),
            (n[4] = r.description),
            (n[5] = r.title),
            (n[6] = t),
            (n[7] = o))
          : (o = n[7]),
        o
      )
    }
    function T(e) {
      return (0, i.jsx)(v.l, { ...e, checked: !1, disabled: !0, onChange: I })
    }
    function I() {}
    function D(e) {
      let s,
        t,
        r,
        p,
        h,
        y,
        A,
        M = (0, a.c)(41),
        {
          installButtonLabel: U,
          isPending: C,
          item: S,
          onInstallPlugin: k,
          onOpenPluginDetails: _,
          onToggleInstalledPluginEnabled: P,
          onUninstallPlugin: N,
        } = e,
        E = (0, m.A)()
      if (
        M[0] !== U ||
        M[1] !== E ||
        M[2] !== C ||
        M[3] !== S ||
        M[4] !== k ||
        M[5] !== _ ||
        M[6] !== P ||
        M[7] !== N
      ) {
        let e,
          a,
          m,
          y,
          A,
          T,
          I = S.displayName ?? (0, u.V)(S.plugin),
          D = S.plugin.plugin.installed
        ;((p = "group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap"),
          M[13] !== S.plugin || M[14] !== _
            ? ((e = () => {
                _(S.plugin)
              }),
              (M[13] = S.plugin),
              (M[14] = _),
              (M[15] = e))
            : (e = M[15]))
        let L = !1 === S.showIconBorder ? "border-0" : "border border-default"
        M[16] !== L
          ? ((a = (0, d.A)(
              "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent",
              L,
            )),
            (M[16] = L),
            (M[17] = a))
          : (a = M[17])
        let F =
          S.icon ??
          (0, i.jsx)(f.R, {
            alt: I,
            className: "h-full w-full object-contain",
            logoDarkUrl: S.plugin.logoDarkPath,
            logoUrl: S.plugin.logoPath,
            fallback: (0, i.jsx)(w.I, { className: "text-secondary", "aria-hidden": !1, asset: l.k }),
          })
        ;(M[18] !== a || M[19] !== F
          ? ((m = (0, i.jsx)("span", { className: a, children: F })), (M[18] = a), (M[19] = F), (M[20] = m))
          : (m = M[20]),
          M[21] !== S.title
            ? ((y = (0, i.jsx)("div", {
                className: "min-w-0 truncate text-sm font-medium text-default",
                children: S.title,
              })),
              (M[21] = S.title),
              (M[22] = y))
            : (y = M[22]),
          M[23] !== S.description || M[24] !== S.descriptionIndicator
            ? ((A =
                null != S.description
                  ? (0, i.jsx)("div", {
                      className: "min-w-0 truncate text-xs leading-4 text-secondary",
                      children:
                        null == S.descriptionIndicator
                          ? S.description
                          : (0, i.jsxs)("span", {
                              className: "inline-flex max-w-full items-center gap-2",
                              children: [
                                (0, i.jsx)("span", {
                                  className: (0, d.A)(
                                    "h-2 w-2 shrink-0 rounded-full",
                                    "success" === S.descriptionIndicator
                                      ? "bg-[var(--app-color-icon-success)]"
                                      : "bg-[var(--app-color-icon-error)]",
                                  ),
                                }),
                                (0, i.jsx)("span", { className: "min-w-0 truncate", children: S.description }),
                              ],
                            }),
                    })
                  : null),
              (M[23] = S.description),
              (M[24] = S.descriptionIndicator),
              (M[25] = A))
            : (A = M[25]),
          M[26] !== y || M[27] !== A
            ? ((T = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [y, A] })),
              (M[26] = y),
              (M[27] = A),
              (M[28] = T))
            : (T = M[28]),
          M[29] !== m || M[30] !== T || M[31] !== e
            ? ((h = (0, i.jsxs)("button", {
                className:
                  "flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                type: "button",
                onClick: e,
                children: [m, T],
              })),
              (M[29] = m),
              (M[30] = T),
              (M[31] = e),
              (M[32] = h))
            : (h = M[32]),
          (s = "flex shrink-0 items-center gap-2"),
          (t = S.action),
          (r = D
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  !0 === S.showManageActions
                    ? (0, i.jsx)("div", {
                        className:
                          "invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                        children: (0, i.jsxs)(x.Ab, {
                          align: "end",
                          contentWidth: "sm",
                          triggerButton: (0, i.jsx)(j.p, {
                            label: E.formatMessage({
                              id: "settings.pluginControls.moreActions",
                              defaultMessage: "More actions",
                              description: "Aria label for the more actions menu in settings plugin controls",
                            }),
                          }),
                          children: [
                            null == S.onTryInChat
                              ? null
                              : (0, i.jsx)(x.ms.Item, {
                                  leftIconAsset: n.Z,
                                  onSelect: () => {
                                    S.onTryInChat?.(S.plugin)
                                  },
                                  children: (0, i.jsx)(g.A, {
                                    id: "settings.pluginControls.tryItNow",
                                    defaultMessage: "Try now",
                                    description: "Menu item label for trying a plugin in task from settings",
                                  }),
                                }),
                            (0, i.jsx)(x.ms.Item, {
                              leftIconAsset: c.c,
                              className: "!text-danger",
                              leftIconClassName: "text-danger",
                              disabled: C,
                              onSelect: () => {
                                N(S.plugin)
                              },
                              children: (0, i.jsx)(g.A, {
                                id: "settings.pluginControls.delete",
                                defaultMessage: "Delete",
                                description: "Menu item label for deleting a plugin from settings",
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                  !1 === S.showEnableToggle
                    ? null
                    : (0, i.jsx)(o.m, {
                        content: S.plugin.plugin.enabled
                          ? (0, i.jsx)(g.A, {
                              id: "settings.pluginControls.disableToggleTooltip",
                              defaultMessage: "Disable {pluginName}",
                              description: "Tooltip label for disabling a plugin from settings",
                              values: { pluginName: I },
                            })
                          : (0, i.jsx)(g.A, {
                              id: "settings.pluginControls.enableToggleTooltip",
                              defaultMessage: "Enable {pluginName}",
                              description: "Tooltip label for enabling a plugin from settings",
                              values: { pluginName: I },
                            }),
                        children: (0, i.jsx)(v.l, {
                          checked: S.plugin.plugin.enabled,
                          disabled: C,
                          ariaLabel: E.formatMessage(
                            {
                              id: "settings.pluginControls.toggleAria",
                              defaultMessage: "Toggle {pluginName}",
                              description: "Accessible label for toggling a plugin from settings",
                            },
                            { pluginName: I },
                          ),
                          onChange: (e) => {
                            P(S.plugin, e)
                          },
                        }),
                      }),
                ],
              })
            : (0, i.jsx)(o.m, {
                content: (0, i.jsx)(g.A, {
                  id: "settings.pluginControls.installTooltip",
                  defaultMessage: "Install {pluginName}",
                  description: "Tooltip label for installing a plugin from settings",
                  values: { pluginName: I },
                }),
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(b.$, {
                    "aria-label": E.formatMessage(
                      {
                        id: "settings.pluginControls.installTooltip",
                        defaultMessage: "Install {pluginName}",
                        description: "Tooltip label for installing a plugin from settings",
                      },
                      { pluginName: I },
                    ),
                    color: "secondary",
                    disabled: C,
                    loading: C,
                    onClick: () => {
                      k(S.plugin)
                    },
                    size: "toolbar",
                    children: U,
                  }),
                }),
              })),
          (M[0] = U),
          (M[1] = E),
          (M[2] = C),
          (M[3] = S),
          (M[4] = k),
          (M[5] = _),
          (M[6] = P),
          (M[7] = N),
          (M[8] = s),
          (M[9] = t),
          (M[10] = r),
          (M[11] = p),
          (M[12] = h))
      } else ((s = M[8]), (t = M[9]), (r = M[10]), (p = M[11]), (h = M[12]))
      return (
        M[33] !== s || M[34] !== t || M[35] !== r
          ? ((y = (0, i.jsxs)("div", { className: s, children: [t, r] })),
            (M[33] = s),
            (M[34] = t),
            (M[35] = r),
            (M[36] = y))
          : (y = M[36]),
        M[37] !== p || M[38] !== h || M[39] !== y
          ? ((A = (0, i.jsxs)("div", { className: p, children: [h, y] })),
            (M[37] = p),
            (M[38] = h),
            (M[39] = y),
            (M[40] = A))
          : (A = M[40]),
        A
      )
    }
  },
  yu23(e, s, t) {
    let i = (0, t("nkTT").a)({
      name: "plugin-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        visualBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        center: { x: 12.247895, y: 11.999512 },
        insets: { top: 2.304688, right: 2.07843, bottom: 2.305664, left: 2.574219 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.247895, y: 11.999512 },
          foreground: { x: 12.247895, y: 11.999512 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6257 2.30469C18.8374 2.30503 21.9216 6.88615 21.9216 11.0254C21.9215 12.7845 21.1877 14.5709 19.8923 15.6016C19.2338 16.1254 18.4264 16.454 17.5173 16.459C16.719 16.4633 15.8896 16.2178 15.0583 15.709C14.3032 16.3179 13.4386 16.7129 12.5397 16.7881C11.4524 16.879 10.3888 16.4956 9.52705 15.6006L9.5124 15.585C9.50552 15.5777 9.49529 15.5657 9.48212 15.5518C9.4557 15.5239 9.41686 15.4833 9.36884 15.4326C9.27241 15.3309 9.13635 15.1889 8.98115 15.0254C8.67032 14.698 8.28009 14.2874 7.96064 13.9541C7.57892 13.5558 7.59172 12.9235 7.98896 12.541L8.27998 12.2598L7.3581 11.3018C7.07106 11.0033 7.08025 10.5284 7.37861 10.2412C7.67705 9.95424 8.15199 9.96339 8.43916 10.2617L9.36103 11.2197L11.5817 9.08301L10.6589 8.125C10.3718 7.82656 10.381 7.35164 10.6794 7.06445C10.9778 6.77748 11.4528 6.78663 11.7399 7.08496L12.6618 8.04297L12.9626 7.75488C13.362 7.37043 13.9983 7.38372 14.3806 7.78516L15.945 9.42773C16.8273 10.3361 17.1732 11.4149 17.0319 12.5C16.9344 13.2475 16.6105 13.9573 16.1354 14.5938C16.6496 14.8582 17.11 14.9611 17.5095 14.959C18.0455 14.956 18.5334 14.766 18.9587 14.4277C19.8308 13.7338 20.4215 12.4183 20.4216 11.0254C20.4216 7.614 17.9118 3.80502 12.6257 3.80469C8.211 3.80469 4.39325 7.17775 4.09638 11.4287C3.7645 16.1812 7.12793 20.1942 12.2477 20.1943C14.1885 20.1943 16.1114 19.7093 17.4489 18.6738C17.7764 18.4204 18.2481 18.4802 18.5017 18.8076C18.755 19.1351 18.6942 19.6068 18.3669 19.8604C16.6819 21.1647 14.3949 21.6943 12.2477 21.6943C6.20698 21.6942 2.21147 16.8921 2.60029 11.3242C2.95645 6.22419 7.48801 2.30469 12.6257 2.30469ZM9.3874 13.2773C9.62047 13.5217 9.86302 13.7752 10.069 13.9922C10.2247 14.1561 10.361 14.2993 10.4577 14.4014C10.5058 14.4521 10.5435 14.4935 10.57 14.5215L10.612 14.5645C11.1709 15.1427 11.795 15.3457 12.4147 15.2939C13.0586 15.24 13.7693 14.903 14.4265 14.2705C15.0903 13.6315 15.462 12.9395 15.5446 12.3057C15.6235 11.6997 15.4502 11.0693 14.8649 10.4688L14.8581 10.4619L13.6403 9.18359L9.3874 13.2773Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    t.d(s, {}, { k: i })
  },
}
//# sourceMappingURL=224153.d14796e32c.js.map
