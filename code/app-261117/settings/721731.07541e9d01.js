export const __rspack_esm_ids = [721731]
export const __webpack_modules__ = {
  VVkm(e, s, t) {
    var a = t("QosV"),
      l = t("T0Rc"),
      i = t("GaA7"),
      n = t("rvFo")
    function o(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    t.d(
      s,
      {},
      {
        T9: o,
        b4: function ({
          canUsePersonalizedSuggestions: e,
          generatedSuggestionsEnabled: s,
          hasGeneratedSuggestionsReadSettled: t,
          shouldUseCuratedNewChatPageSuggestions: a,
        }) {
          return !!a || !s || !e || t
        },
        fy: function (e) {
          var s, t
          let r,
            c,
            d,
            u = (0, a.c)(9),
            { accountId: m, enabled: g, hostId: p } = e
          return (
            u[0] !== m || u[1] !== p
              ? ((s = p), (t = m), (r = [...o(s), t]), (u[0] = m), (u[1] = p), (u[2] = r))
              : (r = u[2]),
            u[3] !== p
              ? ((c = async () =>
                  (await i.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: p })) ?? !1),
                (u[3] = p),
                (u[4] = c))
              : (c = u[4]),
            u[5] !== g || u[6] !== r || u[7] !== c
              ? ((d = { queryKey: r, queryFn: c, enabled: g, retry: !1, staleTime: n.D.FIVE_MINUTES }),
                (u[5] = g),
                (u[6] = r),
                (u[7] = c),
                (u[8] = d))
              : (d = u[8]),
            (0, l.I)(d)
          )
        },
        o1: function ({ debugOverride: e, experimentEligible: s, personalized: t }) {
          return e ?? (s && t ? "generated" : "curated")
        },
        qH: function ({
          areNewChatPageSuggestionsLoading: e,
          hasProjectRoot: s,
          shouldShowHomeSuggestions: t,
          shouldUseCuratedNewChatPageSuggestions: a,
        }) {
          return !e && (!!a || (s && t))
        },
      },
    )
  },
  IBgA(e, s, t) {
    var a = t("QosV"),
      l = t("irkb"),
      i = t("xSOA"),
      n = t("qmMi"),
      o = t("Qgfj"),
      r = t("Wf1j"),
      c = t("VVkm"),
      d = t("Dgwo"),
      u = t("HUHI"),
      m = t("OiCI"),
      g = t("SGsN"),
      p = t("B81s"),
      h = t("sLlu"),
      f = t("OWtl"),
      x = t("kfGJ"),
      b = t("WFY2")
    let y = (0, o.YK)({
      enableSuccess: { id: "apps.enable.success", defaultMessage: "{appName} app enabled" },
      disableSuccess: { id: "apps.disable.success", defaultMessage: "{appName} app disabled" },
      updateError: { id: "apps.update.error", defaultMessage: "Failed to update app" },
    })
    t.d(
      s,
      {},
      {
        J: function (e) {
          let s,
            t,
            o,
            j,
            w,
            A,
            v,
            M,
            U = (0, a.c)(35),
            C = e?.hostId ?? x.fI,
            S = (0, n.gh)(f.u)
          ;(0, n.Ul)(m.vh)
          let P = (0, l.jE)(),
            k = (0, h.B)(),
            _ = (0, r.A)(),
            N
          U[0] !== C || U[1] !== N ? ((s = (0, u.iC)(C, N)), (U[0] = C), (U[1] = N), (U[2] = s)) : (s = U[2])
          let E = s
          U[3] !== E || U[4] !== C || U[5] !== k
            ? ((t = async () => {
                await Promise.all([
                  k((0, c.T9)(C)),
                  k(E),
                  k([...p.Sn, C]),
                  k([...p.tP, C]),
                  k(p.Kj),
                  k(["user-saved-config"]),
                ])
              }),
              (U[3] = E),
              (U[4] = C),
              (U[5] = k),
              (U[6] = t))
            : (t = U[6])
          let I = t
          ;(U[7] !== C || U[8] !== P || U[9] !== S
            ? ((o = async (e) => {
                let { appId: s, enabled: t } = e,
                  a = await (0, p.dG)(S, P, C)
                if (
                  "okOverridden" ===
                  (
                    await (0, d.V)(S, C).sendRequest("config/batchWrite", {
                      edits: (function ({ appId: e, enabled: s }) {
                        return [{ keyPath: `apps.${e}.enabled`, value: s, mergeStrategy: "upsert" }]
                      })({ appId: s, enabled: t }),
                      filePath: a?.filePath ?? null,
                      expectedVersion: a?.expectedVersion ?? null,
                      reloadUserConfig: !0,
                    })
                  ).status
                )
                  throw Error("App setting is overridden by project configuration")
              }),
              (U[7] = C),
              (U[8] = P),
              (U[9] = S),
              (U[10] = o))
            : (o = U[10]),
            U[11] !== E || U[12] !== P
              ? ((j = async (e) => {
                  let { appId: s, enabled: t } = e
                  await P.cancelQueries({ queryKey: E })
                  let a = P.getQueryData(E)
                  return (
                    a &&
                      P.setQueryData(
                        E,
                        a.map((e) => (e.id !== s || e.isEnabled === t ? e : { ...e, isEnabled: t })),
                      ),
                    { previousApps: a }
                  )
                }),
                (U[11] = E),
                (U[12] = P),
                (U[13] = j))
              : (j = U[13]),
            U[14] !== E || U[15] !== _ || U[16] !== k || U[17] !== P || U[18] !== S
              ? ((w = async (e, s, t) => {
                  let { appId: a, appName: l, enabled: i } = s
                  if (i && t?.previousApps?.find((e) => e.id === a)?.isEnabled === !1) {
                    await k(E)
                    let e = P.getQueryData(E)?.find((e) => e.id === a)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let n = l ?? P.getQueryData(E)?.find((e) => e.id === a)?.name ?? a
                  S.get(g.Id).success(_.formatMessage(i ? y.enableSuccess : y.disableSuccess, { appName: n }))
                }),
                (U[14] = E),
                (U[15] = _),
                (U[16] = k),
                (U[17] = P),
                (U[18] = S),
                (U[19] = w))
              : (w = U[19]),
            U[20] !== E || U[21] !== _ || U[22] !== P || U[23] !== S
              ? ((A = (e, s, t) => {
                  ;(b.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    S.get(g.Id).danger(_.formatMessage(y.updateError), {
                      errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                    }),
                    t?.previousApps && P.setQueryData(E, t.previousApps))
                }),
                (U[20] = E),
                (U[21] = _),
                (U[22] = P),
                (U[23] = S),
                (U[24] = A))
              : (A = U[24]),
            U[25] !== I || U[26] !== o || U[27] !== j || U[28] !== w || U[29] !== A
              ? ((v = { mutationFn: o, onMutate: j, onSuccess: w, onError: A, onSettled: I }),
                (U[25] = I),
                (U[26] = o),
                (U[27] = j),
                (U[28] = w),
                (U[29] = A),
                (U[30] = v))
              : (v = U[30]))
          let D = (0, i.n)(v),
            T = D.isPending ? (D.variables?.appId ?? null) : null
          return (
            U[31] !== D.isPending || U[32] !== D.mutateAsync || U[33] !== T
              ? ((M = { setAppEnabled: D.mutateAsync, isUpdating: D.isPending, updatingAppId: T }),
                (U[31] = D.isPending),
                (U[32] = D.mutateAsync),
                (U[33] = T),
                (U[34] = M))
              : (M = U[34]),
            M
          )
        },
      },
    )
  },
  UtcH(e, s, t) {
    var a = t("ABep"),
      l = t("QosV"),
      i = t("yX0s"),
      n = t("on57"),
      o = t("zd8w"),
      r = t("Wf1j"),
      c = t("HOLv"),
      d = t("Sm6l")
    t.d(
      s,
      {},
      {
        V: function (e) {
          let s,
            t,
            u,
            m,
            g,
            p = (0, l.c)(17),
            { ancestors: h, current: f, textSm: x } = e,
            b = (0, r.A)()
          p[0] !== b
            ? ((s = b.formatMessage({ id: "toolbarBreadcrumb.label", defaultMessage: "Breadcrumb" })),
              (p[0] = b),
              (p[1] = s))
            : (s = p[1])
          let y = x ? "text-sm" : "text-base"
          if (
            (p[2] !== y
              ? ((t = (0, n.$)("flex min-w-0 items-center gap-1 text-codex-description", y)), (p[2] = y), (p[3] = t))
              : (t = p[3]),
            p[4] !== h || p[5] !== x)
          ) {
            let e
            ;(p[7] !== x
              ? ((e = (e, s) => {
                  let { id: t, ...l } = e,
                    r =
                      "content" in l
                        ? l.content
                        : (0, a.jsx)("span", { className: "min-w-0 truncate", children: l.label }),
                    u = r
                  if (!("content" in l)) {
                    let { label: e, ...s } = l,
                      t = { className: (0, n.$)("min-w-0", x && "text-sm"), color: "ghost", size: "toolbar" }
                    u =
                      null != s.to
                        ? (0, a.jsx)(d.z, { ...s, ...t, children: r })
                        : (0, a.jsx)(d.$, { ...t, onClick: s.onClick, children: r })
                  }
                  return (0, a.jsxs)(
                    o.Fragment,
                    { children: [s > 0 ? (0, a.jsx)(c.I, { className: "shrink-0", asset: i.q }) : null, u] },
                    t,
                  )
                }),
                (p[7] = x),
                (p[8] = e))
              : (e = p[8]),
              (u = h.map(e)),
              (p[4] = h),
              (p[5] = x),
              (p[6] = u))
          } else u = p[6]
          return (
            p[9] !== h.length || p[10] !== f
              ? ((m =
                  null != f
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          h.length > 0 ? (0, a.jsx)(c.I, { className: "shrink-0", asset: i.q }) : null,
                          (0, a.jsx)("span", {
                            "aria-current": "page",
                            className:
                              "flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default",
                            children: f,
                          }),
                        ],
                      })
                    : null),
                (p[9] = h.length),
                (p[10] = f),
                (p[11] = m))
              : (m = p[11]),
            p[12] !== s || p[13] !== t || p[14] !== u || p[15] !== m
              ? ((g = (0, a.jsxs)("nav", { "aria-label": s, className: t, children: [u, m] })),
                (p[12] = s),
                (p[13] = t),
                (p[14] = u),
                (p[15] = m),
                (p[16] = g))
              : (g = p[16]),
            g
          )
        },
      },
    )
  },
  NYUO(e, s, t) {
    var a = t("qmMi"),
      l = t("B81s"),
      i = t("xS4d"),
      n = t("uodG"),
      o = t("OWtl"),
      r = t("OMIV"),
      c = t("jBHQ")
    let d = (0, a.i1)(o.u, ({ hostId: e, consumer: s }, { get: t }) => {
        let a = "panel" === s ? r.JW : c.P
        if (
          !t(a, "2296472986") ||
          !(0, n.Zi)({ remoteControlConnectionsState: t(i.h9), slingshotEnabled: t(a, "1042620455") })
        )
          return !1
        let o = "search" === s ? t(l.b9, { hostId: e }, { enabled: !1 }) : t(l.b9, { hostId: e })
        return ("panel" === s || o.isSuccess) && o.data?.requirements?.computerUse?.allowLockedComputerUse !== !1
      }),
      u = (0, a.i1)(o.u, (e, { get: s }) => s(d, { hostId: e, consumer: "panel" })),
      m = (0, a.i1)(o.u, (e, { get: s }) => s(d, { hostId: e, consumer: "search" }))
    t.d(s, {}, { I: u, i: m })
  },
  eP0O(e, s, t) {
    var a = t("QosV"),
      l = t("qmMi"),
      i = t("ndjw")
    function n(e) {
      let s,
        t = (0, a.c)(2)
      return (
        t[0] !== e ? ((s = null == e ? void 0 : { hostId: e }), (t[0] = e), (t[1] = s)) : (s = t[1]),
        (0, l._U)(i.d7, s)
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
    var a = t("ABep"),
      l = t("QosV"),
      i = t("on57"),
      n = t("Qgfj"),
      o = t("oyxz")
    let r = (0, n.YK)({
      installed: { id: "plugins.browserExtension.installed", defaultMessage: "Browser extension installed" },
      notInstalled: { id: "plugins.browserExtension.notInstalled", defaultMessage: "Browser extension not installed" },
      loading: {
        id: "plugins.browserExtension.loading",
        defaultMessage: "Use the browser extension for additional control",
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
            d = (0, l.c)(11),
            { status: u } = e
          if (u.isLoading) {
            let e
            return (
              d[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(o.A, { ...r.loading })), (d[0] = e))
                : (e = d[0]),
              e
            )
          }
          if (null != u.detectionError) {
            let e
            return (
              d[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(o.A, {
                    id: "plugins.browserExtension.detectionError",
                    defaultMessage: "Unable to check browser extension",
                  })),
                  (d[1] = e))
                : (e = d[1]),
              e
            )
          }
          let m = u.isInstalled ? "bg-[var(--app-color-icon-success)]" : "bg-[var(--app-color-icon-error)]"
          return (
            d[2] !== m ? ((s = (0, i.A)("h-2 w-2 shrink-0 rounded-full", m)), (d[2] = m), (d[3] = s)) : (s = d[3]),
            d[4] !== s ? ((t = (0, a.jsx)("span", { className: s })), (d[4] = s), (d[5] = t)) : (t = d[5]),
            d[6] !== u.isInstalled
              ? ((n = (0, a.jsx)("span", {
                  className: "min-w-0 truncate",
                  children: u.isInstalled
                    ? (0, a.jsx)(o.A, { ...r.installed })
                    : (0, a.jsx)(o.A, { ...r.notInstalled }),
                })),
                (d[6] = u.isInstalled),
                (d[7] = n))
              : (n = d[7]),
            d[8] !== t || d[9] !== n
              ? ((c = (0, a.jsxs)("span", {
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
  PIwo(e, s, t) {
    var a = t("QosV"),
      l = t("qmMi"),
      i = t("tl5a"),
      n = t("B81s"),
      o = t("OWtl"),
      r = t("hZax"),
      c = t("OMIV"),
      d = t("jBHQ"),
      u = t("kx7U")
    let m = "1042620455",
      g = "4114442250",
      p = (0, l.un)(o.u, ({ get: e }) => {
        let s = e(i.Dc),
          { data: t } = e(n.I2, s)
        return h(t?.config, e(c.JW, g))
      })
    function h(e, s) {
      if (!0 === e?.["features.remote_connections"]) return !0
      let t = e?.features
      return null == t || "object" != typeof t || Array.isArray(t)
        ? s
        : Object.getOwnPropertyDescriptor(t, "remote_connections")?.value === !0 || s
    }
    function f(e) {
      return e.autoConnect ? [e.hostId] : []
    }
    ;((0, l.un)(o.u, ({ get: e }) => {
      let { data: s } = e(n.I2, e(i.Dc), { enabled: !1 })
      return h(s?.config, e(d.P, g))
    }),
      t.d(
        s,
        {},
        {
          Ik: function () {
            return (0, l.Ul)(p)
          },
          bc: p,
          i2: m,
          mC: function () {
            return (0, r.Zj)(m)
          },
          mw: function () {
            let e,
              s,
              t = (0, a.c)(5),
              i = (0, l.Ul)(u.u8) ?? []
            return (
              t[0] !== i ? ((e = new Set(i.flatMap(f))), (t[0] = i), (t[1] = e)) : (e = t[1]),
              t[2] !== i || t[3] !== e
                ? ((s = { remoteConnections: i, enabledRemoteHostIdSet: e }), (t[2] = i), (t[3] = e), (t[4] = s))
                : (s = t[4]),
              s
            )
          },
        },
      ))
  },
  uodG(e, s, t) {
    var a = t("QosV"),
      l = t("qmMi"),
      i = t("xS4d"),
      n = t("PIwo")
    function o({ remoteControlConnectionsState: e, slingshotEnabled: s }) {
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
          showRemoteControlConnectionsSection: a,
          showRemoteSshConnections: l,
          showTabbedSshPage: i,
          isWslConnectionsLoading: n,
          showWslConnections: o,
        }) {
          return "wsl" === e && n
            ? "wsl"
            : a
              ? "control-this-mac" !== e || t
                ? "access-other-devices" !== e || s
                  ? "ssh" !== e || i
                    ? "wsl" !== e || o
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
              : "wsl" === e && o
                ? "wsl"
                : l
                  ? "ssh"
                  : "access-other-devices"
        },
        Zi: o,
        wi: function () {
          let e,
            s = (0, a.c)(3),
            t = (0, l.Ul)(i.h9),
            r = (0, n.mC)()
          return (
            s[0] !== t || s[1] !== r
              ? ((e = o({ remoteControlConnectionsState: t, slingshotEnabled: r })), (s[0] = t), (s[1] = r), (s[2] = e))
              : (e = s[2]),
            e
          )
        },
      },
    )
  },
  dWmd(e, s, t) {
    var a = t("qmMi"),
      l = t("GaA7"),
      i = t("q77y"),
      n = t("OWtl"),
      o = t("rvFo")
    let r = Promise.resolve(),
      c = (0, a.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, i.P)(l.appServices.computerUseSettings.getAppApprovals(), e),
        queryKey: ["computer-use-app-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: o.D.ONE_MINUTE,
      })),
      d = (0, a.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, i.P)(l.appServices.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: ["messages-read-decisions"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: o.D.ONE_MINUTE,
      })),
      u = (0, a.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, i.P)(l.appServices.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: ["messages-send-approvals"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: o.D.ONE_MINUTE,
      })),
      m = (0, a.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, i.P)(l.appServices.computerUseSettings.getSoundMode(), e),
        queryKey: ["computer-use-sound-mode"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: o.D.FIVE_SECONDS,
      })),
      g = (0, a.RD)(n.u, () => ({
        queryFn: ({ signal: e }) => (0, i.P)(l.appServices.computerUseSettings.getLockedUseState(), e),
        queryKey: ["locked-computer-use"],
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        staleTime: o.D.FIVE_SECONDS,
      }))
    t.d(
      s,
      {},
      {
        Ks: d,
        Nu: async function (e, s, t) {
          return (0, i.P)(l.appServices.computerUseSettings.setMessagesReadDecision(e, s, t))
        },
        OJ: c,
        SW: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.removeMessagesSendApproval(e))
        },
        WP: g,
        XF: m,
        Xo: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.setMessagesReadAccessPolicy(e))
        },
        Y3: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.setMessagesSendAllowAllChats(e))
        },
        Zw: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.removeAppApproval(e))
        },
        _o: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.setLockedUseEnabled(e))
        },
        rX: u,
        xx: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.removeMessagesReadDecision(e))
        },
        yk: async function (e, s) {
          let t = r.then(() => (s.throwIfAborted(), (0, i.P)(l.appServices.computerUseSettings.searchMessagesChats(e))))
          r = t.then(
            () => void 0,
            () => void 0,
          )
          let a = await t
          return (s.throwIfAborted(), a)
        },
        zz: async function (e) {
          return (0, i.P)(l.appServices.computerUseSettings.setSoundMode(e))
        },
      },
    )
  },
  KHWn(e, s, t) {
    var a = t("pLGj")
    let l = "computer-use/:browserFamily",
      i = `/settings/${l}`
    t.d(
      s,
      {},
      {
        DM: l,
        XX: function (e) {
          return `/settings/computer-use/${e}`
        },
        YE: function (e) {
          return "google-chrome" === e ? "chrome" : null != e && (0, a.rUV)(e) ? e : null
        },
        zK: i,
      },
    )
  },
  VIJp(e, s, t) {
    var a = t("Qgfj")
    let l = (0, a.YK)({
        cameraDescription: {
          id: "settings.browserUse.siteSettings.description",
          defaultMessage: "Control camera and microphone permissions in the built-in browser",
        },
      }),
      i = (0, a.YK)({
        siteToolsUnavailable: {
          id: "settings.browserUse.webMcp.unavailableDescription",
          defaultMessage: "Site tools aren't available for this account",
        },
        elevatedRisk: { id: "settings.browserUse.fullCdp.elevatedRisk.label", defaultMessage: "Elevated risk" },
        fullCdp: { id: "settings.browserUse.fullCdp.label", defaultMessage: "Enable full CDP access" },
        fullCdpDescription: {
          id: "settings.browserUse.fullCdp.description",
          defaultMessage:
            "Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.",
        },
        fullCdpBlocked: {
          id: "settings.browserUse.fullCdp.blockedByPolicy",
          defaultMessage: "Your organization has disabled this setting.",
        },
        loading: { id: "settings.browserUse.config.loading", defaultMessage: "Loading browser settings\u2026" },
        loadError: { id: "settings.browserUse.config.loadError", defaultMessage: "Unable to load browser settings" },
      }),
      n = { ...l, ...i }
    t.d(s, {}, { i: n })
  },
  bNRj(e, s, t) {
    t.d(s, { Q: () => Q })
    var a = t("ABep"),
      l = t("QosV"),
      i = t("qmMi"),
      n = t("oyxz"),
      o = t("evwP"),
      r = t("ly3T"),
      c = t("VIJp"),
      d = t("IZqe"),
      u = t("pLGj"),
      m = t("Zam4"),
      g = t("Wf1j"),
      p = t("HOLv"),
      h = t("F0xz"),
      f = t("B81s"),
      x = t("pO0d"),
      b = t("BSnr"),
      y = t("fnPc"),
      j = t("AWNZ"),
      w = t("ZEx5"),
      A = t("kfGJ"),
      v = t("UwgY")
    function M(e) {
      let s,
        t,
        i = (0, l.c)(4),
        { backend: o } = e,
        r = void 0 === o ? "iab" : o,
        { selectedHostId: c } = (0, y.D8)()
      return "local" !== (0, A.Qz)(c).kind
        ? null
        : (i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(b.X.Header, {
                title: (0, a.jsx)(n.A, {
                  id: "settings.browserUse.developerMode.title",
                  defaultMessage: "Developer mode",
                }),
              })),
              (i[0] = s))
            : (s = i[0]),
          i[1] !== r || i[2] !== c
            ? ((t = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)(b.X, {
                  children: [
                    s,
                    (0, a.jsx)(b.X.Content, {
                      children: (0, a.jsx)(w.t, {
                        children: (0, a.jsx)(x.ek, {
                          entry: v.c.fullCdp,
                          children: (0, a.jsx)(U, { backend: r, hostId: c }),
                        }),
                      }),
                    }),
                  ],
                }),
              })),
              (i[1] = r),
              (i[2] = c),
              (i[3] = t))
            : (t = i[3]),
          t)
    }
    function U(e) {
      let s,
        t,
        o,
        c,
        x,
        b,
        y,
        w,
        A,
        M,
        U,
        C = (0, l.c)(27),
        { backend: S, hostId: P } = e,
        k = (0, g.A)(),
        { data: _, isLoading: N } = (0, i.Ul)(r.Rg)
      C[0] !== P ? ((s = { hostId: P }), (C[0] = P), (C[1] = s)) : (s = C[1])
      let { data: E, isPending: I } = (0, i._U)(f.b9, s)
      C[2] !== P ? ((t = { hostId: P }), (C[2] = P), (C[3] = t)) : (t = C[3])
      let D = (0, r.hY)(t),
        T = (0, i._U)(r.F1, P),
        L = "unsupported" !== T
      C[4] !== S || C[5] !== E || C[6] !== L
        ? ((o =
            (0, u.njf)(E?.requirements?.featureRequirements?.[u.P6k]) ||
            (L && null != E && !(0, m.md)(E.requirements, "iab" === S ? "iab" : "extension"))),
          (C[4] = S),
          (C[5] = E),
          (C[6] = L),
          (C[7] = o))
        : (o = C[7])
      let R = o,
        O = N || I || "loading" === T || "error" === T,
        W = _?.fullCdpAccessEnabled === !0 && !O && !R
      ;(C[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, a.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              (0, a.jsxs)("span", {
                className: "inline-flex items-center gap-1 font-medium text-warning",
                children: [
                  (0, a.jsx)(p.I, { className: "shrink-0", "aria-hidden": !1, asset: d.h }),
                  (0, a.jsx)(n.A, {
                    id: "settings.browserUse.fullCdp.elevatedRisk.label",
                    defaultMessage: "Elevated risk",
                  }),
                ],
              }),
              (0, a.jsx)("span", { children: (0, a.jsx)(n.A, { ...v.c.fullCdp.title }) }),
            ],
          })),
          (C[8] = c))
        : (c = C[8]),
        C[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)("div", {
              children: (0, a.jsx)(n.A, {
                id: "settings.browserUse.fullCdp.description",
                defaultMessage:
                  "Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.",
              }),
            })),
            (C[9] = x))
          : (x = C[9]),
        C[10] !== R || C[11] !== I
          ? ((b =
              !I && R
                ? (0, a.jsx)("div", {
                    children: (0, a.jsx)(n.A, {
                      id: "settings.browserUse.fullCdp.blockedByPolicy",
                      defaultMessage: "Your organization has disabled this setting.",
                    }),
                  })
                : null),
            (C[10] = R),
            (C[11] = I),
            (C[12] = b))
          : (b = C[12]),
        C[13] !== b
          ? ((y = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [x, b] })), (C[13] = b), (C[14] = y))
          : (y = C[14]),
        C[15] !== k
          ? ((w = k.formatMessage({
              id: "settings.browserUse.fullCdp.ariaLabel",
              defaultMessage: "Toggle full CDP access",
            })),
            (C[15] = k),
            (C[16] = w))
          : (w = C[16]))
      let F = O || R || D.isPending
      return (
        C[17] !== D
          ? ((A = (e) => {
              D.mutate(e)
            }),
            (C[17] = D),
            (C[18] = A))
          : (A = C[18]),
        C[19] !== W || C[20] !== A || C[21] !== w || C[22] !== F
          ? ((M = (0, a.jsx)(h.l, { ariaLabel: w, checked: W, disabled: F, onChange: A })),
            (C[19] = W),
            (C[20] = A),
            (C[21] = w),
            (C[22] = F),
            (C[23] = M))
          : (M = C[23]),
        C[24] !== M || C[25] !== y
          ? ((U = (0, a.jsx)(j.ic, { label: c, description: y, control: M })), (C[24] = M), (C[25] = y), (C[26] = U))
          : (U = C[26]),
        U
      )
    }
    var C = t("ClXH"),
      S = t("bqtn"),
      P = t("bVeK"),
      k = t("SGsN"),
      _ = t("OWtl"),
      N = t("Qgfj")
    let E = ["alwaysAsk", "neverAsk", "disabled"],
      I = {
        alwaysAsk: {
          label: (0, N.zR)({ id: "settings.browserUse.approval.alwaysAsk.label", defaultMessage: "Always ask" }),
          description: (0, N.zR)({
            id: "settings.browserUse.historyApproval.alwaysAsk.description",
            defaultMessage: "Ask before accessing history",
          }),
        },
        neverAsk: {
          label: (0, N.zR)({ id: "settings.browserUse.approval.neverAsk.label", defaultMessage: "Always allow" }),
          description: (0, N.zR)({
            id: "settings.browserUse.historyApproval.neverAsk.description",
            defaultMessage: "Access history without asking",
          }),
        },
        disabled: {
          label: (0, N.zR)({ id: "settings.browserUse.historyApproval.disabled.label", defaultMessage: "Disable" }),
          description: (0, N.zR)({
            id: "settings.browserUse.historyApproval.disabled.description",
            defaultMessage: "Do not allow access to history",
          }),
        },
      },
      D = (0, N.zR)({
        id: "settings.browserUse.iabHistoryApproval.description",
        defaultMessage: "Choose whether ChatGPT can access your built-in browser history",
      }),
      T = (0, N.YK)({
        managed: {
          id: "settings.browserUse.historyApproval.managedDescription",
          defaultMessage: "History access is disabled by your organization",
        },
        saveError: {
          id: "settings.browserUse.historyApproval.saveError",
          defaultMessage: "Unable to save history setting",
        },
      })
    function L() {
      let e,
        s = (0, l.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(n.A, {
              id: "settings.browserUse.historyApproval.description",
              defaultMessage: "Choose if ChatGPT asks for approval before accessing your browser's history",
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    function R() {
      let e,
        s = (0, l.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(n.A, { ...D })), (s[0] = e)) : (e = s[0]),
        e
      )
    }
    var O = t("bcDx"),
      W = t("zhzj"),
      F = t("khkh")
    function z(e) {
      let s,
        t,
        o,
        c,
        d,
        u = (0, l.c)(14),
        m = (0, g.A)(),
        p = (0, i.Ul)(F.k),
        { data: f, isLoading: b } = (0, i.Ul)(r.Rg),
        y = (0, r.pT)()
      ;(u[0] !== p
        ? ((s = p
            ? (0, a.jsx)(n.A, {
                id: "settings.browserUse.webMcp.description",
                defaultMessage:
                  "Allow ChatGPT to discover and call tools provided by websites, including WebMCP, unless you set a different permission for a site",
              })
            : (0, a.jsx)(n.A, {
                id: "settings.browserUse.webMcp.unavailableDescription",
                defaultMessage: "Site tools aren't available for this account",
              })),
          (u[0] = p),
          (u[1] = s))
        : (s = u[1]),
        u[2] !== m
          ? ((t = m.formatMessage({
              id: "settings.browserUse.webMcp.ariaLabel",
              defaultMessage: "Toggle site tools by default",
            })),
            (u[2] = m),
            (u[3] = t))
          : (t = u[3]))
      let j = p && (f?.webMcpEnabled ?? !0),
        w = !p || b || y.isPending
      return (
        u[4] !== y
          ? ((o = (e) => {
              y.mutate(e)
            }),
            (u[4] = y),
            (u[5] = o))
          : (o = u[5]),
        u[6] !== t || u[7] !== j || u[8] !== w || u[9] !== o
          ? ((c = (0, a.jsx)(h.l, { ariaLabel: t, checked: j, disabled: w, onChange: o })),
            (u[6] = t),
            (u[7] = j),
            (u[8] = w),
            (u[9] = o),
            (u[10] = c))
          : (c = u[10]),
        u[11] !== s || u[12] !== c
          ? ((d = (0, a.jsx)(x.GC, { entry: v.c.siteTools, description: s, control: c })),
            (u[11] = s),
            (u[12] = c),
            (u[13] = d))
          : (d = u[13]),
        d
      )
    }
    var q = t("QyE3")
    function B(e) {
      let s,
        t,
        i,
        o = (0, l.c)(14),
        { backend: r, browserUseEnabled: c, showHistory: d, showWebMcp: u, siteSettingsRow: m } = e,
        g = void 0 === c || c,
        p = void 0 === d || d,
        h = void 0 !== u && u,
        f = null != m || (g && (p || h))
      return (
        o[0] !== r || o[1] !== g || o[2] !== f || o[3] !== p || o[4] !== h || o[5] !== m
          ? ((s = f
              ? (0, a.jsxs)(b.X, {
                  children: [
                    (0, a.jsx)(b.X.Header, {
                      title:
                        "chrome" === r
                          ? (0, a.jsx)(n.A, {
                              id: "settings.computerUse.chrome.policy.browserPermissions.title",
                              defaultMessage: "Browser permissions",
                            })
                          : (0, a.jsx)(n.A, {
                              id: "settings.browserUse.policy.browserPermissions.title",
                              defaultMessage: "Browser permissions",
                            }),
                    }),
                    (0, a.jsx)(b.X.Content, {
                      children: (0, a.jsxs)(w.t, {
                        children: [
                          m,
                          g
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  p && "chrome" === r ? (0, a.jsx)(G, {}) : null,
                                  p && "iab" === r ? (0, a.jsx)(V, {}) : null,
                                  h ? (0, a.jsx)(z, { backend: r }) : null,
                                ],
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                })
              : null),
            (o[0] = r),
            (o[1] = g),
            (o[2] = f),
            (o[3] = p),
            (o[4] = h),
            (o[5] = m),
            (o[6] = s))
          : (s = o[6]),
        o[7] !== r || o[8] !== g || o[9] !== h
          ? ((t = g
              ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(W.af, { backend: r, showWebMcp: h }), (0, a.jsx)(M, { backend: r })],
                })
              : null),
            (o[7] = r),
            (o[8] = g),
            (o[9] = h),
            (o[10] = t))
          : (t = o[10]),
        o[11] !== s || o[12] !== t
          ? ((i = (0, a.jsxs)(a.Fragment, { children: [s, t] })), (o[11] = s), (o[12] = t), (o[13] = i))
          : (i = o[13]),
        i
      )
    }
    function G() {
      let e,
        s,
        t = (0, l.c)(3),
        i = (0, r.yh)()
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(L, {})), (t[0] = e)) : (e = t[0]),
        t[1] !== i
          ? ((s = (0, a.jsx)(H, { backend: "chrome", description: e, writeApprovalModeMutation: i })),
            (t[1] = i),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function V() {
      let e,
        s,
        t = (0, l.c)(3),
        i = (0, r.w7)()
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(R, {})), (t[0] = e)) : (e = t[0]),
        t[1] !== i
          ? ((s = (0, a.jsx)(H, { backend: "iab", description: e, writeApprovalModeMutation: i })),
            (t[1] = i),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function H(e) {
      let s,
        t,
        o,
        c,
        d,
        u,
        g,
        p,
        h,
        b,
        j,
        w,
        A,
        M,
        U,
        N,
        D,
        L = (0, l.c)(52),
        { backend: R, description: W, writeApprovalModeMutation: F } = e,
        z = (0, i.gh)(_.u),
        { selectedHostId: B } = (0, y.D8)(),
        { data: G, isLoading: V } = (0, i.Ul)(r.Rg),
        { data: H, isPending: X } = (0, i._U)(f.I2, B),
        Q = "iab" === R ? G?.iabHistoryApprovalMode : G?.chromeHistoryApprovalMode
      L[0] !== B ? ((s = { failClosed: !0, hostId: B }), (L[0] = B), (L[1] = s)) : (s = L[1])
      let { data: K, isError: Z, isPending: Y } = (0, i._U)(f.b9, s)
      if (
        L[2] !== R ||
        L[3] !== W ||
        L[4] !== Q ||
        L[5] !== V ||
        L[6] !== Z ||
        L[7] !== Y ||
        L[8] !== X ||
        L[9] !== K?.requirements ||
        L[10] !== z ||
        L[11] !== B ||
        L[12] !== H ||
        L[13] !== F.isPending ||
        L[14] !== F.mutateAsync
      ) {
        let e,
          s = (function ({ backend: e, historyApprovalMode: s, requirements: t, userConfigData: a }) {
            let l = (a?.configReadSucceeded === !0 ? a.config.browser_use?.allow_history_access : void 0) !== !1,
              i = (0, m.md)(t, "iab" === e ? "iab" : "extension"),
              n = i && (0, m.s$)(t, "history"),
              o = (0, m.Bv)(t) && !n,
              r = i && (0, m.YP)(t),
              c = s
            return (
              n && l ? "neverAsk" !== s || r || (c = "alwaysAsk") : (c = "disabled"),
              {
                historyApprovalMode: s,
                effectiveHistoryApprovalMode: c,
                historyAllowed: n,
                historyEnabledByUser: l,
                isManagedOff: o,
                persistentApprovalAllowed: r,
              }
            )
          })({ backend: R, historyApprovalMode: Q, requirements: K?.requirements ?? null, userConfigData: H }),
          { effectiveHistoryApprovalMode: l, historyAllowed: i, isManagedOff: f, persistentApprovalAllowed: y } = s,
          M = I[l ?? "alwaysAsk"],
          U = V || Y || X,
          _ = F.isPending
        ;((c = x.GC),
          (A = v.c.history),
          (d = f ? (0, a.jsx)(n.A, { ...T.managed }) : W),
          (o = O.UL),
          (w = f),
          (t = S.Ab),
          (p = "menuWide"),
          (h = "end"),
          (b = U || Z || _ || !i))
        let N = U || Z || _ || !i,
          D = f ? (0, a.jsx)(P.nr3, { className: "text-secondary" }) : null
        ;(L[27] !== M.label
          ? ((e = (0, a.jsx)("span", { className: "truncate", children: (0, a.jsx)(n.A, { ...M.label }) })),
            (L[27] = M.label),
            (L[28] = e))
          : (e = L[28]),
          L[29] !== N || L[30] !== D || L[31] !== e
            ? ((j = (0, a.jsxs)(q.vg, { className: "w-[152px]", disabled: N, children: [D, e] })),
              (L[29] = N),
              (L[30] = D),
              (L[31] = e),
              (L[32] = j))
            : (j = L[32]),
          (u = "flex flex-col"),
          (g = E.map((e) => {
            let t = I[e],
              o = e === l
            return (0, a.jsx)(
              S.ms.Item,
              {
                allowWrap: !0,
                disabled: _ || (!i && "disabled" !== e) || ("neverAsk" === e && !y),
                rightIconAsset: o ? C.G : void 0,
                onSelect: () => {
                  ;(async (e) => {
                    if (!_)
                      try {
                        await (async function ({
                          scope: e,
                          hostId: s,
                          userConfigData: t,
                          policy: a,
                          nextMode: l,
                          writeMode: i,
                        }) {
                          let { historyApprovalMode: n, historyEnabledByUser: o, historyAllowed: c } = a
                          if (
                            (l !== n || !o) &&
                            (c || "disabled" === l) &&
                            ("neverAsk" !== l || a.persistentApprovalAllowed)
                          ) {
                            if ("disabled" === l)
                              return void (t?.configReadSucceeded === !0 && Object.hasOwn(t.config, "browser_use")
                                ? await (0, r.Rn)(e, s, t, { capability: "history", enabled: !1 })
                                : await i(l))
                            ;(l !== n && (await i(l)),
                              o || (await (0, r.Rn)(e, s, t, { capability: "history", enabled: !0 })))
                          }
                        })({ scope: z, hostId: B, userConfigData: H, policy: s, nextMode: e, writeMode: F.mutateAsync })
                      } catch {
                        z.get(k.Id).danger((0, a.jsx)(n.A, { ...T.saveError }), {
                          errorAnalytics: { toastId: "settings.browserUse.historyApproval.saveError" },
                        })
                      }
                  })(e)
                },
                children: (0, a.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5",
                  children: [
                    (0, a.jsx)("span", { className: "truncate", children: (0, a.jsx)(n.A, { ...t.label }) }),
                    (0, a.jsx)("span", {
                      className: "truncate text-sm text-secondary",
                      children: (0, a.jsx)(n.A, { ...t.description }),
                    }),
                  ],
                }),
              },
              e,
            )
          })),
          (L[2] = R),
          (L[3] = W),
          (L[4] = Q),
          (L[5] = V),
          (L[6] = Z),
          (L[7] = Y),
          (L[8] = X),
          (L[9] = K?.requirements),
          (L[10] = z),
          (L[11] = B),
          (L[12] = H),
          (L[13] = F.isPending),
          (L[14] = F.mutateAsync),
          (L[15] = t),
          (L[16] = o),
          (L[17] = c),
          (L[18] = d),
          (L[19] = u),
          (L[20] = g),
          (L[21] = p),
          (L[22] = h),
          (L[23] = b),
          (L[24] = j),
          (L[25] = w),
          (L[26] = A))
      } else
        ((t = L[15]),
          (o = L[16]),
          (c = L[17]),
          (d = L[18]),
          (u = L[19]),
          (g = L[20]),
          (p = L[21]),
          (h = L[22]),
          (b = L[23]),
          (j = L[24]),
          (w = L[25]),
          (A = L[26]))
      return (
        L[33] !== u || L[34] !== g
          ? ((M = (0, a.jsx)("div", { className: u, children: g })), (L[33] = u), (L[34] = g), (L[35] = M))
          : (M = L[35]),
        L[36] !== t || L[37] !== M || L[38] !== p || L[39] !== h || L[40] !== b || L[41] !== j
          ? ((U = (0, a.jsx)(t, { contentWidth: p, align: h, disabled: b, triggerButton: j, children: M })),
            (L[36] = t),
            (L[37] = M),
            (L[38] = p),
            (L[39] = h),
            (L[40] = b),
            (L[41] = j),
            (L[42] = U))
          : (U = L[42]),
        L[43] !== o || L[44] !== U || L[45] !== w
          ? ((N = (0, a.jsx)(o, { managed: w, children: U })), (L[43] = o), (L[44] = U), (L[45] = w), (L[46] = N))
          : (N = L[46]),
        L[47] !== c || L[48] !== d || L[49] !== N || L[50] !== A
          ? ((D = (0, a.jsx)(c, { entry: A, description: d, control: N })),
            (L[47] = c),
            (L[48] = d),
            (L[49] = N),
            (L[50] = A),
            (L[51] = D))
          : (D = L[51]),
        D
      )
    }
    var X = t("I7Ou")
    function Q(e) {
      let s,
        t,
        d,
        u = (0, l.c)(18),
        { backend: m, browserUseEnabled: g, showHistory: p, showWebMcp: h, siteSettingsRow: f } = e,
        x = void 0 === g || g,
        j = void 0 === p || p,
        A = void 0 !== h && h,
        { selectedHostId: v } = (0, y.D8)(),
        U = (0, i._U)(r.F1, v)
      if ("loading" === U) {
        let e
        return (
          u[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(X.u, { children: (0, a.jsx)(n.A, { ...c.i.loading }) })), (u[0] = e))
            : (e = u[0]),
          e
        )
      }
      if ("error" === U) {
        let e
        return (
          u[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(o.W, { layout: "settings-row", children: (0, a.jsx)(n.A, { ...c.i.loadError }) })),
              (u[1] = e))
            : (e = u[1]),
          e
        )
      }
      if ("supported" === U) {
        let e
        return (
          u[2] !== m || u[3] !== x || u[4] !== j || u[5] !== A || u[6] !== f
            ? ((e = (0, a.jsx)(B, {
                backend: m,
                browserUseEnabled: x,
                showHistory: j,
                showWebMcp: A,
                siteSettingsRow: f,
              })),
              (u[2] = m),
              (u[3] = x),
              (u[4] = j),
              (u[5] = A),
              (u[6] = f),
              (u[7] = e))
            : (e = u[7]),
          e
        )
      }
      return (
        u[8] !== m || u[9] !== x || u[10] !== A || u[11] !== f
          ? ((s =
              null != f || (x && A)
                ? (0, a.jsxs)(b.X, {
                    children: [
                      (0, a.jsx)(b.X.Header, {
                        title:
                          "chrome" === m
                            ? (0, a.jsx)(n.A, {
                                id: "settings.computerUse.chrome.permissions.title",
                                defaultMessage: "Permissions",
                              })
                            : (0, a.jsx)(n.A, {
                                id: "settings.browserUse.permissions.title",
                                defaultMessage: "Permissions",
                              }),
                      }),
                      (0, a.jsx)(b.X.Content, {
                        children: (0, a.jsxs)(w.t, { children: [f, x && A ? (0, a.jsx)(z, { backend: m }) : null] }),
                      }),
                    ],
                  })
                : null),
            (u[8] = m),
            (u[9] = x),
            (u[10] = A),
            (u[11] = f),
            (u[12] = s))
          : (s = u[12]),
        u[13] !== x ? ((t = x ? (0, a.jsx)(M, {}) : null), (u[13] = x), (u[14] = t)) : (t = u[14]),
        u[15] !== s || u[16] !== t
          ? ((d = (0, a.jsxs)(a.Fragment, { children: [s, t] })), (u[15] = s), (u[16] = t), (u[17] = d))
          : (d = u[17]),
        d
      )
    }
  },
  qUZq(e, s, t) {
    var a = t("pLGj"),
      l = t("DBCl"),
      i = t("RHhA")
    function n(e) {
      switch (e) {
        case "macOS":
        case "linux":
          return ["chrome"]
        case "windows":
          return ["chrome", "edge"]
      }
    }
    t.d(
      s,
      {},
      {
        BT: function (e, s) {
          let t = (0, i.t)(),
            a = [l.DVx.chrome]
          return (
            t === l.x1u.Dev
              ? a.unshift(l.DVx.chromeDev)
              : l.x1u.isInternal(t) && a.unshift(l.DVx.chromeInternal, l.DVx.chromeDev),
            s && (a = [l.DVx.browser]),
            a.map((s) => e.find(({ plugin: e }) => e.id === s)).find((e) => null != e) ?? null
          )
        },
        N8: function ({ isInstalled: e, isLoading: s, storeUrl: t }) {
          return s ? null : e ? "manage" : null == t ? null : "install"
        },
        ju: n,
        mV: function (e, s) {
          let t = n(s)
          return Object.keys(a.Ypn)
            .filter(a.rUV)
            .filter((s) => !t.includes(s) && e?.includes(s) === !0)
        },
      },
    )
  },
  WRcv(e, s, t) {
    t.d(s, { B: () => b, C: () => x })
    var a = t("qmMi"),
      l = t.p + "assets/microsoft-excel-large.ccdf999e2d.png",
      i = t.p + "assets/microsoft-powerpoint-large.6c9c4e445f.png",
      n = t.p + "assets/microsoft-word-large.e6e10bd5ed.png",
      o = t("wLMK"),
      r = t("XYHU"),
      c = t("BA9i"),
      d = t("cLdu"),
      u = t("ueue"),
      m = t("OWtl"),
      g = t("jBHQ"),
      p = t("m213"),
      h = t("tgIT")
    let f = [
      {
        description: h.m.microsoftExcelDescription,
        disableTooltip: h.m.microsoftExcelDisableTooltip,
        enableTooltip: h.m.microsoftExcelEnableTooltip,
        entry: { section: "computer-use", id: "microsoft-excel-document-control-app", title: h.m.microsoftExcel },
        icon: l,
        matchesPlugin: c.V0,
        toggleAriaLabel: h.m.microsoftExcelToggleAria,
      },
      {
        description: h.m.microsoftPowerPointDescription,
        disableTooltip: h.m.microsoftPowerPointDisableTooltip,
        enableTooltip: h.m.microsoftPowerPointEnableTooltip,
        entry: {
          section: "computer-use",
          id: "microsoft-powerpoint-document-control-app",
          title: h.m.microsoftPowerPoint,
        },
        icon: i,
        matchesPlugin: c.ho,
        requiresPowerPointGate: !0,
        toggleAriaLabel: h.m.microsoftPowerPointToggleAria,
      },
      {
        description: h.m.microsoftWordDescription,
        disableTooltip: h.m.microsoftWordDisableTooltip,
        enableTooltip: h.m.microsoftWordEnableTooltip,
        entry: { section: "computer-use", id: "microsoft-word-document-control-app", title: h.m.microsoftWord },
        icon: n,
        matchesPlugin: c._c,
        toggleAriaLabel: h.m.microsoftWordToggleAria,
      },
    ]
    function x({ aliasesEnabled: e, platform: s, plugins: t, powerPointEnabled: a }) {
      return e && ("macOS" === s || "windows" === s)
        ? f.flatMap((e) => {
            if (e.requiresPowerPointGate && !a) return []
            let s = t.find(e.matchesPlugin)
            return null == s ? [] : [{ ...e, plugin: s }]
          })
        : []
    }
    let b = (0, a.i1)(m.u, ({ hostId: e, computerUse: s, externalBrowserUse: t }, { get: a }) => {
      let l = a(g.P, c.J4)
      if (!l) return []
      let i = a(d.qF, { accountId: null, cacheOnly: !0, hostId: e, roots: [] }),
        n = a(u.WY, e)
      return i.isError || n.isError
        ? []
        : x({
            aliasesEnabled: l,
            platform: (0, r.tR)(a(o.V, { enabled: !1 }).data?.platform),
            plugins: (0, p.W)({
              installedPlugins: i.data,
              localPlugins: n.data,
              computerUse: s,
              externalBrowserUse: t,
              messages: !1,
            }),
            powerPointEnabled: a(g.P, c.tN),
          }).map(({ entry: e }) => e)
    })
  },
  m213(e, s, t) {
    var a = t("i5ac"),
      l = t.n(a),
      i = t("ueue"),
      n = t("RHhA")
    t.d(
      s,
      {},
      {
        W: function ({ installedPlugins: e, localPlugins: s, computerUse: t, externalBrowserUse: a, messages: o }) {
          return (0, i.PM)({
            plugins: (0, i.Qc)({
              buildFlavor: (0, n.t)(),
              plugins: l()([...(e ?? []), ...(s ?? [])], ({ plugin: e }) => e.id),
            }),
            isComputerUseAvailable: t,
            isExternalBrowserUseAvailable: a,
            isInAppBrowserUseAvailable: !1,
            isMessagesAvailable: o,
          })
        },
      },
    )
  },
  PmQt(e, s, t) {
    var a = t("qmMi"),
      l = t("Qgfj"),
      i = t("NYUO"),
      n = t("wLMK"),
      o = t("OWtl"),
      r = t("dWmd"),
      c = t("tgIT"),
      d = t("PzrE")
    let u = [
        { value: "foregroundClicks", label: c.m.foregroundClickSounds },
        { value: "foregroundAndBackgroundClicks", label: c.m.foregroundAndBackgroundClickSounds },
        { value: "off", label: c.m.noClickSounds },
      ],
      m = { section: "computer-use", id: "computer-use-always-allowed-apps", title: c.m.alwaysAllowedApps },
      g = {
        section: "computer-use",
        id: "computer-use-locked-use",
        title: (0, l.zR)({ id: "settings.computerUse.backgroundAuth.label", defaultMessage: "Locked use" }),
      }
    function p(e) {
      let s = u.find((s) => s.value === e)
      return {
        section: "computer-use",
        id: "computer-use-sound-mode",
        title: s?.label ?? c.m.foregroundClickSounds,
        options: u.map(({ label: e }) => e),
      }
    }
    let h = (0, a.i1)(o.u, (e, { get: s }) => {
      let t = [m, ...s(d.V5, e)],
        a = s(r.XF, { enabled: !1 }).data
      return (
        null != a && t.push(p(a)),
        s(n.V, { enabled: !1 }).data?.platform === "darwin" &&
          s(i.i, e) &&
          s(r.WP, { enabled: !1 }).data?.enabled != null &&
          t.push(g),
        t
      )
    })
    t.d(s, {}, { FJ: g, JA: u, Re: h, cZ: p, vO: m })
  },
  tgIT(e, s, t) {
    let a = (0, t("Qgfj").YK)({
      control: { id: "settings.computerUse.install.title", defaultMessage: "Control" },
      computerUse: { id: "settings.computerUse.breadcrumb.computerUse", defaultMessage: "Computer use" },
      anyApp: { id: "settings.computerUse.anyApp.title", defaultMessage: "Any App" },
      googleChrome: { id: "settings.computerUse.chrome.pluginTitle", defaultMessage: "Google Chrome" },
      microsoftEdge: { id: "settings.computerUse.edge.pluginTitle", defaultMessage: "Microsoft Edge" },
      safari: { id: "settings.computerUse.safari.pluginTitle", defaultMessage: "Safari" },
      messages: { id: "settings.computerUse.messages.pluginTitle", defaultMessage: "Messages" },
      manage: { id: "settings.computerUse.manage", defaultMessage: "Manage" },
      microsoftExcel: { id: "settings.computerUse.microsoftExcel.pluginTitle", defaultMessage: "Microsoft Excel" },
      microsoftExcelDescription: {
        id: "settings.computerUse.microsoftExcel.description",
        defaultMessage: "Let ChatGPT use Microsoft Excel add-in for additional control",
      },
      microsoftExcelToggleAria: {
        id: "settings.computerUse.microsoftExcel.appToggleAria",
        defaultMessage: "Toggle Microsoft Excel live control",
      },
      microsoftExcelDisableTooltip: {
        id: "settings.computerUse.microsoftExcel.disableToggleTooltip",
        defaultMessage: "Disable Microsoft Excel live control",
      },
      microsoftExcelEnableTooltip: {
        id: "settings.computerUse.microsoftExcel.enableToggleTooltip",
        defaultMessage: "Enable Microsoft Excel live control",
      },
      microsoftPowerPoint: {
        id: "settings.computerUse.microsoftPowerPoint.pluginTitle",
        defaultMessage: "Microsoft PowerPoint",
      },
      microsoftPowerPointDescription: {
        id: "settings.computerUse.microsoftPowerPoint.description",
        defaultMessage: "Let ChatGPT use Microsoft PowerPoint add-in for additional control",
      },
      microsoftPowerPointToggleAria: {
        id: "settings.computerUse.microsoftPowerPoint.appToggleAria",
        defaultMessage: "Toggle Microsoft PowerPoint live control",
      },
      microsoftPowerPointDisableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.disableToggleTooltip",
        defaultMessage: "Disable Microsoft PowerPoint live control",
      },
      microsoftPowerPointEnableTooltip: {
        id: "settings.computerUse.microsoftPowerPoint.enableToggleTooltip",
        defaultMessage: "Enable Microsoft PowerPoint live control",
      },
      microsoftWord: { id: "settings.computerUse.microsoftWord.pluginTitle", defaultMessage: "Microsoft Word" },
      microsoftWordDescription: {
        id: "settings.computerUse.microsoftWord.description",
        defaultMessage: "Let ChatGPT use Microsoft Word add-in for additional control",
      },
      microsoftWordToggleAria: {
        id: "settings.computerUse.microsoftWord.appToggleAria",
        defaultMessage: "Toggle Microsoft Word live control",
      },
      microsoftWordDisableTooltip: {
        id: "settings.computerUse.microsoftWord.disableToggleTooltip",
        defaultMessage: "Disable Microsoft Word live control",
      },
      microsoftWordEnableTooltip: {
        id: "settings.computerUse.microsoftWord.enableToggleTooltip",
        defaultMessage: "Enable Microsoft Word live control",
      },
      alwaysAllowedApps: { id: "settings.computerUse.allowedApps.title", defaultMessage: "Always-allowed apps" },
      foregroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundClicks",
        defaultMessage: "Play sounds for foreground clicks",
      },
      foregroundAndBackgroundClickSounds: {
        id: "settings.computerUse.sounds.foregroundAndBackgroundClicks",
        defaultMessage: "Play sounds for foreground and background clicks",
      },
      noClickSounds: { id: "settings.computerUse.sounds.off", defaultMessage: "Don\u2019t play sounds" },
    })
    t.d(s, {}, { m: a })
  },
  i6Kb(e, s, t) {
    t.d(s, { ComputerUseSettings: () => eJ })
    var a = t("ABep"),
      l = t("QosV"),
      i = t("ClXH")
    let n = (0, t("ESTr").a)({
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
    var o = t("vjxO"),
      r = t("T0Rc"),
      c = t("xSOA"),
      d = t("pLGj"),
      u = t("on57"),
      m = t("qmMi"),
      g = t("DBCl"),
      p = t("Haiv"),
      h = t("zd8w"),
      f = t("oyxz"),
      x = t("Wf1j"),
      b = t("Ywss"),
      y = t("IBgA"),
      j = t("HUHI"),
      w = t("usf5"),
      A = t("oSZg"),
      v = t("aTcy"),
      M = t("Sm6l"),
      U = t("JNtf"),
      C = t("mUDD"),
      S = t("bqtn"),
      P = t("Ot7V"),
      k = t("HOLv"),
      _ = t("evwP"),
      N = t("SGsN"),
      E = t("F0xz"),
      I = t("NYUO"),
      D = t("IIEq"),
      T = t("jWaO"),
      L = t("eP0O"),
      R = t("rO8L"),
      O = t("Vyeu"),
      W = t("wwME"),
      F = (e) =>
        (0, a.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M9 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H15V19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19V18H5C3.89543 18 3 17.1046 3 16V13H4C5.65685 13 7 11.6569 7 10C7 8.34315 5.65685 7 4 7H3V5C3 3.89543 3.89543 3 5 3H9Z",
            fill: "white",
            stroke: "#8E8E93",
            strokeWidth: 2,
            strokeLinejoin: "round",
          }),
        }),
      z = t("WXrt"),
      q = t("mwiM"),
      B = t("NFKX"),
      G = t("BA9i"),
      V = t("cLdu"),
      H = t("ueue"),
      X = t("GaA7"),
      Q = t("OWtl"),
      K = t("dWmd"),
      Z = t("KHWn")
    function Y(e) {
      let s,
        t,
        i,
        n = (0, l.c)(7),
        { computerImageDataUrl: o, lockImageDataUrl: r } = e
      return (
        n[0] !== o
          ? ((s = (0, a.jsx)("img", {
              alt: "",
              className: "absolute top-0 left-1 h-[53px] w-[53px] object-contain",
              draggable: !1,
              src: o,
            })),
            (n[0] = o),
            (n[1] = s))
          : (s = n[1]),
        n[2] !== r
          ? ((t = (0, a.jsx)("img", {
              alt: "",
              className: "absolute right-0 bottom-0 h-[33px] w-[27px] object-contain",
              draggable: !1,
              src: r,
            })),
            (n[2] = r),
            (n[3] = t))
          : (t = n[3]),
        n[4] !== s || n[5] !== t
          ? ((i = (0, a.jsxs)("span", {
              className: "relative inline-block h-[57px] w-[62px] shrink-0",
              children: [s, t],
            })),
            (n[4] = s),
            (n[5] = t),
            (n[6] = i))
          : (i = n[6]),
        i
      )
    }
    var $ = t("RxZZ"),
      J = t("jxU8"),
      ee = t("bNRj"),
      es = t("qUZq"),
      et = t("UtcH"),
      ea = t("tgIT")
    function el(e) {
      let s,
        t,
        i,
        n = (0, l.c)(6),
        { current: o } = e,
        r = (0, b.Zp)()
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(f.A, { ...ea.m.computerUse })), (n[0] = s))
          : (s = n[0]),
        n[1] !== r
          ? ((t = [{ id: "computer-use", label: s, onClick: () => void r("/settings/computer-use") }]),
            (n[1] = r),
            (n[2] = t))
          : (t = n[2]),
        n[3] !== o || n[4] !== t
          ? ((i = (0, a.jsx)(et.V, { ancestors: t, current: o })), (n[3] = o), (n[4] = t), (n[5] = i))
          : (i = n[5]),
        i
      )
    }
    var ei = t("PzrE"),
      en = t("bVeK"),
      eo = t("pO0d"),
      er = t("BSnr"),
      ec = t("I7Ou"),
      ed = t("AWNZ"),
      eu = t("ZEx5")
    function em(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        c,
        d,
        u,
        m,
        g,
        p,
        h,
        x = (0, l.c)(35),
        { chat: b, permission: y, readAccessPolicy: j, isRemoving: w, onClose: A, onRemove: v } = e,
        S = void 0 === j ? "askPerChat" : j
      x[0] !== S
        ? ((s =
            "askPerChat" === S
              ? (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.removeDialog.subtitle",
                  defaultMessage: "ChatGPT will ask before using messages from this chat",
                })
              : (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.removeDialog.allowSubtitle",
                  defaultMessage: "ChatGPT will be able to read this chat without asking",
                })),
          (x[0] = S),
          (x[1] = s))
        : (s = x[1])
      let P = s,
        k = null != b
      return (
        x[2] !== A
          ? ((t = (e) => {
              e || A()
            }),
            (x[2] = A),
            (x[3] = t))
          : (t = x[3]),
        x[4] !== b || x[5] !== w || x[6] !== v
          ? ((i = (e) => {
              ;(e.preventDefault(), null == b || w || v(b.chatGUID))
            }),
            (x[4] = b),
            (x[5] = w),
            (x[6] = v),
            (x[7] = i))
          : (i = x[7]),
        x[8] !== b?.displayName || x[9] !== y
          ? ((n = (0, a.jsx)(U.L3, {
              asChild: !0,
              children: (0, a.jsx)("span", {
                children:
                  "read" === y
                    ? (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.readAccess.removeDialog.title",
                        defaultMessage: "Remove saved read permission for \u201C{displayName}\u201D?",
                        values: { displayName: b?.displayName ?? "" },
                      })
                    : (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.allowedChats.removeDialog.title",
                        defaultMessage: "Remove saved send permission for \u201C{displayName}\u201D?",
                        values: { displayName: b?.displayName ?? "" },
                      }),
              }),
            })),
            (x[8] = b?.displayName),
            (x[9] = y),
            (x[10] = n))
          : (n = x[10]),
        x[11] !== y || x[12] !== P
          ? ((o = (0, a.jsx)(U.rr, {
              asChild: !0,
              children: (0, a.jsx)("span", {
                children:
                  "read" === y
                    ? P
                    : (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.allowedChats.removeDialog.subtitle",
                        defaultMessage: "ChatGPT will ask before sending messages to this chat",
                      }),
              }),
            })),
            (x[11] = y),
            (x[12] = P),
            (x[13] = o))
          : (o = x[13]),
        x[14] !== n || x[15] !== o
          ? ((r = (0, a.jsx)(C.OO, {
              children: (0, a.jsx)(C.c7, { titleClassName: "break-words pe-8", title: n, subtitle: o }),
            })),
            (x[14] = n),
            (x[15] = o),
            (x[16] = r))
          : (r = x[16]),
        x[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.removePermissionDialog.cancel",
              defaultMessage: "Cancel",
            })),
            (x[17] = c))
          : (c = x[17]),
        x[18] !== w || x[19] !== A
          ? ((d = (0, a.jsx)(M.$, { color: "ghost", disabled: w, onClick: A, type: "button", children: c })),
            (x[18] = w),
            (x[19] = A),
            (x[20] = d))
          : (d = x[20]),
        x[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.removePermissionDialog.confirm",
              defaultMessage: "Remove",
            })),
            (x[21] = u))
          : (u = x[21]),
        x[22] !== w
          ? ((m = (0, a.jsx)(M.$, { color: "danger", loading: w, type: "submit", children: u })),
            (x[22] = w),
            (x[23] = m))
          : (m = x[23]),
        x[24] !== d || x[25] !== m
          ? ((g = (0, a.jsx)(C.OO, { children: (0, a.jsxs)(C.Es, { children: [d, m] }) })),
            (x[24] = d),
            (x[25] = m),
            (x[26] = g))
          : (g = x[26]),
        x[27] !== g || x[28] !== i || x[29] !== r
          ? ((p = (0, a.jsxs)(C.R4, { as: "form", onSubmit: i, children: [r, g] })),
            (x[27] = g),
            (x[28] = i),
            (x[29] = r),
            (x[30] = p))
          : (p = x[30]),
        x[31] !== p || x[32] !== k || x[33] !== t
          ? ((h = (0, a.jsx)(U.lG, {
              open: k,
              onOpenChange: t,
              dialogCloseClassName: "rtl:start-auto rtl:end-4",
              size: "compact",
              children: p,
            })),
            (x[31] = p),
            (x[32] = k),
            (x[33] = t),
            (x[34] = h))
          : (h = x[34]),
        h
      )
    }
    var eg = t("QyE3"),
      ep = t("irkb"),
      eh = t("qhiJ"),
      ef = t("Qgfj"),
      ex = t("ZZgR"),
      eb = t("Lhpx"),
      ey = t("nzx4"),
      ej = t("zLIa"),
      ew = t("rvFo"),
      eA = t("GEsy")
    function ev(e) {
      let s,
        t = (0, l.c)(2),
        { decision: i } = e,
        n = eM[i]
      return (t[0] !== n ? ((s = (0, a.jsx)(f.A, { ...n })), (t[0] = n), (t[1] = s)) : (s = t[1]), s)
    }
    let eM = (0, ef.YK)({
      alwaysAllow: { id: "settings.computerUse.messages.readAccess.alwaysAllow", defaultMessage: "Always allow" },
      ask: { id: "settings.computerUse.messages.readAccess.ask", defaultMessage: "Always ask" },
      alwaysDeny: { id: "settings.computerUse.messages.readAccess.alwaysDeny", defaultMessage: "Never allow" },
    })
    function eU(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        c = (0, l.c)(15),
        { defaultOpen: d, disabled: u, savedChats: m, isSaving: g, onAdd: p, triggerLabel: f } = e,
        [x, b] = (0, h.useState)(void 0 !== d && d)
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, a.jsx)(en.xFs, {})), (c[0] = s)) : (s = c[0]),
        c[1] !== u || c[2] !== f
          ? ((t = (0, a.jsxs)(M.$, { color: "secondary", disabled: u, size: "toolbar", children: [s, f] })),
            (c[1] = u),
            (c[2] = f),
            (c[3] = t))
          : (t = c[3]),
        c[4] !== p ? ((i = (e, s) => p(e, s, () => b(!1))), (c[4] = p), (c[5] = i)) : (i = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = () => b(!1)), (c[6] = n)) : (n = c[6]),
        c[7] !== g || c[8] !== m || c[9] !== i
          ? ((o = (0, a.jsx)(eC, { savedChats: m, isSaving: g, onAdd: i, onCancel: n })),
            (c[7] = g),
            (c[8] = m),
            (c[9] = i),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== x || c[12] !== t || c[13] !== o
          ? ((r = (0, a.jsx)(U.lG, {
              open: x,
              onOpenChange: b,
              contentOverflow: "visible",
              size: "compact",
              triggerContent: t,
              children: o,
            })),
            (c[11] = x),
            (c[12] = t),
            (c[13] = o),
            (c[14] = r))
          : (r = c[14]),
        r
      )
    }
    function eC(e) {
      let s,
        t,
        i,
        n,
        o,
        c,
        d,
        u,
        m,
        g,
        p,
        b,
        y,
        j,
        w,
        A,
        v,
        P,
        k,
        _,
        N,
        E,
        I,
        D,
        T,
        L,
        R,
        O,
        W,
        F,
        z,
        q,
        B,
        G,
        V,
        H,
        X,
        Q,
        Z,
        Y,
        $,
        J,
        ee,
        es,
        et = (0, l.c)(121),
        { savedChats: ea, isSaving: el, onAdd: ei, onCancel: en } = e,
        eo = (0, x.A)(),
        er = (0, ep.jE)(),
        ec = (0, h.useId)(),
        ed = (0, h.useId)(),
        eu = (0, h.useRef)(null),
        [em, ef] = (0, h.useState)(null),
        [eM, eU] = (0, h.useState)(""),
        [eC, eE] = (0, h.useState)(0),
        [eI, eD] = (0, h.useState)(!1),
        [eT, eL] = (0, h.useState)(),
        [eR, eO] = (0, h.useState)("ask")
      et[0] !== eM ? ((s = eM.trim()), (et[0] = eM), (et[1] = s)) : (s = et[1])
      let eW = s,
        eF = eI && null == eT && "" !== eW,
        ez = (0, eA.o)(eW, 200)
      et[2] !== ez || et[3] !== eC
        ? ((t = ["messages-chat-search", { query: ez, searchSessionId: eC }]), (et[2] = ez), (et[3] = eC), (et[4] = t))
        : (t = et[4])
      let eq = t
      et[5] !== ez
        ? ((i = (e) => {
            let { signal: s } = e
            return (0, K.yk)(ez, s)
          }),
          (et[5] = ez),
          (et[6] = i))
        : (i = et[6])
      let eB = null == eT && "" !== eW && eW === ez
      ;(et[7] !== eC
        ? ((n = (e, s) => (s?.queryKey[1].searchSessionId === eC ? e : void 0)), (et[7] = eC), (et[8] = n))
        : (n = et[8]),
        et[9] !== eq || et[10] !== i || et[11] !== eB || et[12] !== n
          ? ((o = {
              queryKey: eq,
              queryFn: i,
              enabled: eB,
              placeholderData: n,
              staleTime: ew.D.ONE_MINUTE,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (et[9] = eq),
            (et[10] = i),
            (et[11] = eB),
            (et[12] = n),
            (et[13] = o))
          : (o = et[13]))
      let { data: eG, isError: eV, isPending: eH, isFetching: eX, refetch: eQ } = (0, r.I)(o),
        eK = eG?.status === "ready" ? eG.chats : void 0,
        eZ = eV || eG?.status === "permissions_pending" || eG?.status === "permissions_required"
      if (eH) {
        let e
        ;(et[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.chatSearch.searching",
              defaultMessage: "Searching chats\u2026",
            })),
            (et[14] = e))
          : (e = et[14]),
          (c = e))
      } else if (eV || null == eG) {
        let e
        ;(et[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.chatSearch.error",
              defaultMessage: "Unable to search chats",
            })),
            (et[15] = e))
          : (e = et[15]),
          (c = e))
      } else if ("permissions_pending" === eG.status) {
        let e
        ;(et[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.chatSearch.permissionsPending",
              defaultMessage: "Finish Messages permission setup, then try again",
            })),
            (et[16] = e))
          : (e = et[16]),
          (c = e))
      } else if ("permissions_required" === eG.status) {
        let e
        ;(et[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.chatSearch.permissionsRequired",
              defaultMessage: "Allow Messages permissions to search chats",
            })),
            (et[17] = e))
          : (e = et[17]),
          (c = e))
      } else if (eK?.length === 0) {
        let e
        ;(et[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.chatSearch.empty",
              defaultMessage: "No chats found",
            })),
            (et[18] = e))
          : (e = et[18]),
          (c = e))
      }
      ;(et[19] !== eR || et[20] !== el || et[21] !== ei || et[22] !== eT
        ? ((d = (e) => {
            ;(e.preventDefault(), null == eT || el || ei(eT, eR))
          }),
          (et[19] = eR),
          (et[20] = el),
          (et[21] = ei),
          (et[22] = eT),
          (et[23] = d))
        : (d = et[23]),
        et[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(U.L3, {
              asChild: !0,
              children: (0, a.jsx)("span", {
                children: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.addDialog.title",
                  defaultMessage: "Add a chat",
                }),
              }),
            })),
            (et[24] = u))
          : (u = et[24]),
        et[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(C.OO, {
              children: (0, a.jsx)(C.c7, {
                className: "select-none",
                title: u,
                subtitle: (0, a.jsx)(U.rr, {
                  asChild: !0,
                  children: (0, a.jsx)("span", {
                    children: (0, a.jsx)(f.A, {
                      id: "settings.computerUse.messages.readAccess.addDialog.description",
                      defaultMessage:
                        "Choose whether ChatGPT can use messages from a specific chat to respond to your requests",
                    }),
                  }),
                }),
              }),
            })),
            (et[25] = m))
          : (m = et[25]),
        et[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("span", {
              className: "text-sm font-medium select-none",
              children: (0, a.jsx)(f.A, { ...eN.chatLabel }),
            })),
            (et[26] = g))
          : (g = et[26]),
        et[27] !== eo ? ((p = eo.formatMessage(eN.chatLabel)), (et[27] = eo), (et[28] = p)) : (p = et[28]),
        et[29] !== eo
          ? ((b = eo.formatMessage({
              id: "settings.computerUse.messages.chatSearch.placeholder",
              defaultMessage: "Search chats",
            })),
            (et[29] = eo),
            (et[30] = b))
          : (b = et[30]))
      let eY = eT?.displayName ?? eM
      ;(et[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = () => eD(!0)), (j = () => eD(!0)), (et[31] = y), (et[32] = j))
        : ((y = et[31]), (j = et[32])),
        et[33] !== eT
          ? ((w = (e) => {
              ;("ArrowDown" === e.key && eD(!0), null != eT && "Enter" === e.key && e.stopPropagation())
            }),
            (et[33] = eT),
            (et[34] = w))
          : (w = et[34]),
        et[35] !== ez || et[36] !== er || et[37] !== eq || et[38] !== eW
          ? ((A = (e) => {
              ;(e.trim() !== ez && er.cancelQueries({ queryKey: eq, exact: !0 }),
                "" === e.trim() && "" !== eW && eE(e_),
                eU(e),
                eD(!0),
                eL(void 0))
            }),
            (et[35] = ez),
            (et[36] = er),
            (et[37] = eq),
            (et[38] = eW),
            (et[39] = A))
          : (A = et[39]),
        et[40] !== eF ? ((v = (0, a.jsx)(ej.pd, { "aria-expanded": eF })), (et[40] = eF), (et[41] = v)) : (v = et[41]),
        et[42] !== el || et[43] !== eF || et[44] !== b || et[45] !== eY || et[46] !== w || et[47] !== A || et[48] !== v
          ? ((P = (0, a.jsx)(ey.dT, {
              asChild: !0,
              children: (0, a.jsx)(eh.uB.Input, {
                ref: eu,
                asChild: !0,
                "aria-expanded": eF,
                autoFocus: !0,
                disabled: el,
                placeholder: b,
                value: eY,
                onClick: y,
                onFocus: j,
                onKeyDown: w,
                onValueChange: A,
                children: v,
              }),
            })),
            (et[42] = el),
            (et[43] = eF),
            (et[44] = b),
            (et[45] = eY),
            (et[46] = w),
            (et[47] = A),
            (et[48] = v),
            (et[49] = P))
          : (P = et[49]),
        et[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = { maxHeight: (0, eb.J1)("list", "var(--radix-popover-content-available-height)") }), (et[50] = k))
          : (k = et[50]),
        et[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (e) => {
              e.target === eu.current && e.preventDefault()
            }),
            (et[51] = _))
          : (_ = et[51]),
        et[52] !== eK || et[53] !== eV || et[54] !== el || et[55] !== er || et[56] !== eq || et[57] !== ea
          ? ((N = eV
              ? null
              : eK?.map((e) =>
                  (0, a.jsx)(
                    ex.G.Item,
                    {
                      disabled: el,
                      tooltipText: e.displayName,
                      tooltipOpenWhen: "trigger-overflows",
                      value: e.chatGUID,
                      onMouseDown: eS,
                      onSelect: () => {
                        ;(er.cancelQueries({ queryKey: eq, exact: !0 }),
                          eL(e),
                          eO(ea?.find((s) => s.chatGUID === e.chatGUID)?.decision ?? "ask"))
                      },
                      children: e.displayName,
                    },
                    e.chatGUID,
                  ),
                )),
            (et[52] = eK),
            (et[53] = eV),
            (et[54] = el),
            (et[55] = er),
            (et[56] = eq),
            (et[57] = ea),
            (et[58] = N))
          : (N = et[58]),
        et[59] !== c
          ? ((E = null != c ? (0, a.jsx)(S.ms.Message, { compact: !0, role: "status", children: c }) : null),
            (et[59] = c),
            (et[60] = E))
          : (E = et[60]),
        et[61] !== eZ || et[62] !== eX || et[63] !== eQ
          ? ((I =
              eZ && !eX
                ? (0, a.jsx)(ex.G.Action, {
                    onClick: () => void eQ(),
                    children: (0, a.jsx)(f.A, {
                      id: "settings.computerUse.messages.chatSearch.retry",
                      defaultMessage: "Try again",
                    }),
                  })
                : null),
            (et[61] = eZ),
            (et[62] = eX),
            (et[63] = eQ),
            (et[64] = I))
          : (I = et[64]),
        et[65] !== eX || et[66] !== N || et[67] !== E || et[68] !== I
          ? ((D = (0, a.jsxs)(ex.G.List, { "aria-busy": eX, children: [N, E, I] })),
            (et[65] = eX),
            (et[66] = N),
            (et[67] = E),
            (et[68] = I),
            (et[69] = D))
          : (D = et[69]),
        et[70] !== em || et[71] !== D
          ? ((T = (0, a.jsx)(ey.hl, {
              portalContainer: em,
              role: "presentation",
              size: "anchor",
              variant: "menu",
              style: k,
              onOpenAutoFocus: ek,
              onCloseAutoFocus: eP,
              onInteractOutside: _,
              children: D,
            })),
            (et[70] = em),
            (et[71] = D),
            (et[72] = T))
          : (T = et[72]),
        et[73] !== p || et[74] !== P || et[75] !== T
          ? ((L = (0, a.jsxs)(ex.G.Root, { label: p, children: [P, T] })),
            (et[73] = p),
            (et[74] = P),
            (et[75] = T),
            (et[76] = L))
          : (L = et[76]),
        et[77] !== eF || et[78] !== L
          ? ((R = (0, a.jsxs)("div", {
              ref: ef,
              className: "flex flex-col gap-1.5",
              children: [g, (0, a.jsx)(ey.AM, { modal: !1, open: eF, onOpenChange: eD, children: L })],
            })),
            (et[77] = eF),
            (et[78] = L),
            (et[79] = R))
          : (R = et[79]),
        et[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.access",
              defaultMessage: "Read access",
            })),
            (et[80] = O))
          : (O = et[80]),
        et[81] !== ec
          ? ((W = (0, a.jsx)("span", { id: ec, className: "text-sm font-medium select-none", children: O })),
            (et[81] = ec),
            (et[82] = W))
          : (W = et[82]))
      let e$ = `${ec} ${ed}`
      ;(et[83] !== eR ? ((F = (0, a.jsx)(ev, { decision: eR })), (et[83] = eR), (et[84] = F)) : (F = et[84]),
        et[85] !== ed || et[86] !== F
          ? ((z = (0, a.jsx)("span", { id: ed, className: "truncate", children: F })),
            (et[85] = ed),
            (et[86] = F),
            (et[87] = z))
          : (z = et[87]),
        et[88] !== el || et[89] !== e$ || et[90] !== z
          ? ((q = (0, a.jsx)(eg.vg, {
              "aria-labelledby": e$,
              className: "w-full justify-between",
              disabled: el,
              children: z,
            })),
            (et[88] = el),
            (et[89] = e$),
            (et[90] = z),
            (et[91] = q))
          : (q = et[91]),
        et[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = ["alwaysAllow", "ask", "alwaysDeny"]), (et[92] = B))
          : (B = et[92]),
        et[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = B.map((e) =>
              (0, a.jsx)(
                S.ms.RadioItem,
                { value: e, onSelect: () => eO(e), children: (0, a.jsx)(ev, { decision: e }) },
                e,
              ),
            )),
            (et[93] = G))
          : (G = et[93]),
        et[94] !== eR
          ? ((V = (0, a.jsx)(S.ms.RadioGroup, { value: eR, children: G })), (et[94] = eR), (et[95] = V))
          : (V = et[95]),
        et[96] !== el || et[97] !== q || et[98] !== V
          ? ((H = (0, a.jsx)(S.Ab, { align: "start", disabled: el, triggerButton: q, children: V })),
            (et[96] = el),
            (et[97] = q),
            (et[98] = V),
            (et[99] = H))
          : (H = et[99]),
        et[100] !== W || et[101] !== H
          ? ((X = (0, a.jsxs)("div", { className: "flex flex-col gap-1.5", children: [W, H] })),
            (et[100] = W),
            (et[101] = H),
            (et[102] = X))
          : (X = et[102]),
        et[103] !== R || et[104] !== X
          ? ((Q = (0, a.jsxs)(C.OO, { className: "gap-3", children: [R, X] })),
            (et[103] = R),
            (et[104] = X),
            (et[105] = Q))
          : (Q = et[105]),
        et[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.cancel",
              defaultMessage: "Cancel",
            })),
            (et[106] = Z))
          : (Z = et[106]),
        et[107] !== el || et[108] !== en
          ? ((Y = (0, a.jsx)(M.$, { color: "outline", disabled: el, onClick: en, type: "button", children: Z })),
            (et[107] = el),
            (et[108] = en),
            (et[109] = Y))
          : (Y = et[109]))
      let eJ = null == eT || el
      return (
        et[110] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.addDialog.add",
              defaultMessage: "Add",
            })),
            (et[110] = $))
          : ($ = et[110]),
        et[111] !== el || et[112] !== eJ
          ? ((J = (0, a.jsx)(M.$, { color: "primary", disabled: eJ, loading: el, type: "submit", children: $ })),
            (et[111] = el),
            (et[112] = eJ),
            (et[113] = J))
          : (J = et[113]),
        et[114] !== Y || et[115] !== J
          ? ((ee = (0, a.jsx)(C.OO, { children: (0, a.jsxs)(C.Es, { children: [Y, J] }) })),
            (et[114] = Y),
            (et[115] = J),
            (et[116] = ee))
          : (ee = et[116]),
        et[117] !== Q || et[118] !== ee || et[119] !== d
          ? ((es = (0, a.jsxs)(C.R4, { as: "form", onSubmit: d, children: [m, Q, ee] })),
            (et[117] = Q),
            (et[118] = ee),
            (et[119] = d),
            (et[120] = es))
          : (es = et[120]),
        es
      )
    }
    function eS(e) {
      return e.preventDefault()
    }
    function eP(e) {
      return e.preventDefault()
    }
    function ek(e) {
      return e.preventDefault()
    }
    function e_(e) {
      return e + 1
    }
    let eN = (0, ef.YK)({
      chatLabel: { id: "settings.computerUse.messages.readAccess.addDialog.chat", defaultMessage: "Chat" },
    })
    function eE() {
      let e,
        s,
        t,
        i,
        n,
        o,
        r,
        d,
        u,
        g,
        p,
        b,
        y,
        j,
        w,
        A,
        v,
        U,
        C,
        P,
        k,
        E,
        I,
        D,
        T,
        L,
        R = (0, l.c)(78),
        O = (0, m.gh)(Q.u),
        W = (0, x.A)(),
        [F, z] = (0, h.useState)(null),
        { data: q, isError: B, isLoading: G } = (0, m.Ul)(K.Ks)
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, a.jsx)(f.A, {
            id: "settings.computerUse.messages.readAccess.saveError",
            defaultMessage: "Unable to update read permission",
          })),
          (R[0] = e))
        : (e = R[0])
      let V = e
      ;(R[1] !== O ? ((s = () => O.query.cancel(K.Ks)), (R[1] = O), (R[2] = s)) : (s = R[2]),
        R[3] !== O
          ? ((t = (e) => {
              O.query.setData(K.Ks, e)
            }),
            (i = () => {
              O.get(N.Id).danger(V, {
                errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.saveError" },
              })
            }),
            (R[3] = O),
            (R[4] = t),
            (R[5] = i))
          : ((t = R[4]), (i = R[5])),
        R[6] !== s || R[7] !== t || R[8] !== i
          ? ((n = { onMutate: s, mutationFn: eT, onSuccess: t, onError: i }),
            (R[6] = s),
            (R[7] = t),
            (R[8] = i),
            (R[9] = n))
          : (n = R[9]))
      let H = (0, c.n)(n)
      ;(R[10] !== O ? ((o = () => O.query.cancel(K.Ks)), (R[10] = O), (R[11] = o)) : (o = R[11]),
        R[12] !== O
          ? ((r = (e) => {
              O.query.setData(K.Ks, e)
            }),
            (d = () => {
              O.get(N.Id).danger(V, {
                errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.saveError" },
              })
            }),
            (R[12] = O),
            (R[13] = r),
            (R[14] = d))
          : ((r = R[13]), (d = R[14])),
        R[15] !== o || R[16] !== r || R[17] !== d
          ? ((u = { onMutate: o, mutationFn: eD, onSuccess: r, onError: d }),
            (R[15] = o),
            (R[16] = r),
            (R[17] = d),
            (R[18] = u))
          : (u = R[18]))
      let X = (0, c.n)(u)
      ;(R[19] !== O ? ((g = () => O.query.cancel(K.Ks)), (R[19] = O), (R[20] = g)) : (g = R[20]),
        R[21] !== O
          ? ((p = (e) => {
              ;(O.query.setData(K.Ks, e), z(null))
            }),
            (b = () => {
              O.get(N.Id).danger(
                (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.removeError",
                  defaultMessage: "Unable to remove read permission",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.readAccess.removeError" } },
              )
            }),
            (R[21] = O),
            (R[22] = p),
            (R[23] = b))
          : ((p = R[22]), (b = R[23])),
        R[24] !== p || R[25] !== b || R[26] !== g
          ? ((y = { onMutate: g, mutationFn: eI, onSuccess: p, onError: b }),
            (R[24] = p),
            (R[25] = b),
            (R[26] = g),
            (R[27] = y))
          : (y = R[27]))
      let Z = (0, c.n)(y),
        Y = H.isPending || X.isPending || Z.isPending,
        $ = q?.readAccessPolicy ?? "askPerChat",
        J = "allowAllChats" === $
      ;(R[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = {
            id: "askPerChat",
            label: (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.askPerChat",
              defaultMessage: "Ask by default",
            }),
            description: (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.askPerChatDescription",
              defaultMessage: "Ask before reading chats without a saved choice",
            }),
          }),
          (R[28] = j))
        : (j = R[28]),
        R[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = {
              id: "allowUnconfiguredChats",
              label: (0, a.jsx)(f.A, {
                id: "settings.computerUse.messages.readAccess.allowUnconfigured",
                defaultMessage: "Allow by default",
              }),
              description: (0, a.jsx)(f.A, {
                id: "settings.computerUse.messages.readAccess.allowUnconfiguredDescription",
                defaultMessage: "Allow reading chats without a saved choice",
              }),
            }),
            (R[29] = w))
          : (w = R[29]),
        R[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = [
              j,
              w,
              {
                id: "allowAllChats",
                label: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.allowAll",
                  defaultMessage: "Allow all chats",
                }),
                description: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.readAccess.allowAllDescription",
                  defaultMessage: "Saved choices, including Never allow, don't apply",
                }),
              },
            ]),
            (R[30] = A))
          : (A = R[30]))
      let ee = A
      if (J) {
        let e
        ;(R[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.policyOverridden",
              defaultMessage: "ChatGPT can read all chats to answer your requests",
            })),
            (R[31] = e))
          : (e = R[31]),
          (v = e))
      } else if ("askPerChat" === $) {
        let e
        ;(R[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.policyAskPerChatDescription",
              defaultMessage: "ChatGPT asks before reading chats without a saved choice to answer your requests",
            })),
            (R[32] = e))
          : (e = R[32]),
          (v = e))
      } else {
        let e
        ;(R[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.readAccess.policyDescription",
              defaultMessage: "ChatGPT can read chats without a saved choice to answer your requests",
            })),
            (R[33] = e))
          : (e = R[33]),
          (v = e))
      }
      if (G) {
        let e
        ;(R[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(ec.u, {
              children: (0, a.jsx)(f.A, {
                id: "settings.computerUse.messages.readAccess.loading",
                defaultMessage: "Loading read permissions\u2026",
              }),
            })),
            (R[34] = e))
          : (e = R[34]),
          (U = e))
      } else if (B || null == q) {
        let e
        ;(R[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(_.W, {
              layout: "settings-row",
              children: (0, a.jsx)(f.A, {
                id: "settings.computerUse.messages.readAccess.loadError",
                defaultMessage: "Unable to load read permissions",
              }),
            })),
            (R[35] = e))
          : (e = R[35]),
          (U = e))
      } else if (0 === q.chats.length) {
        let e
        ;(R[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(_.W, {
              layout: "settings-row",
              children: (0, a.jsx)(f.A, {
                id: "settings.computerUse.messages.readAccess.empty",
                defaultMessage: "None yet",
              }),
            })),
            (R[36] = e))
          : (e = R[36]),
          (U = e))
      } else {
        let e
        if (R[37] !== q.chats || R[38] !== W || R[39] !== Y || R[40] !== X) {
          let s
          ;(R[42] !== W || R[43] !== Y || R[44] !== X
            ? ((s = (e) =>
                (0, a.jsx)(
                  ed.ic,
                  {
                    label: (0, a.jsx)("span", { className: "font-medium", children: e.displayName }),
                    control: (s) =>
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)(S.Ab, {
                            align: "end",
                            disabled: Y,
                            triggerButton: (0, a.jsx)(eg.vg, {
                              ...s,
                              className: "w-34",
                              disabled: Y,
                              children: (0, a.jsx)("span", {
                                className: "truncate",
                                children: (0, a.jsx)(ev, { decision: e.decision }),
                              }),
                            }),
                            children: (0, a.jsx)(S.ms.RadioGroup, {
                              value: e.decision,
                              children: ["alwaysAllow", "ask", "alwaysDeny"].map((s) =>
                                (0, a.jsx)(
                                  S.ms.RadioItem,
                                  {
                                    value: s,
                                    disabled: Y,
                                    onSelect: () => {
                                      s !== e.decision && X.mutate({ chat: e, decision: s })
                                    },
                                    children: (0, a.jsx)(ev, { decision: s }),
                                  },
                                  s,
                                ),
                              ),
                            }),
                          }),
                          (0, a.jsx)(M.$, {
                            "aria-label": W.formatMessage(
                              {
                                id: "settings.computerUse.messages.readAccess.removeAriaLabel",
                                defaultMessage: "Remove read permission for {displayName}",
                              },
                              { displayName: e.displayName },
                            ),
                            color: "ghost",
                            disabled: Y,
                            onClick: () => z(e),
                            size: "icon",
                            children: (0, a.jsx)(en.cSG, {}),
                          }),
                        ],
                      }),
                  },
                  e.chatGUID,
                )),
              (R[42] = W),
              (R[43] = Y),
              (R[44] = X),
              (R[45] = s))
            : (s = R[45]),
            (e = q.chats.map(s)),
            (R[37] = q.chats),
            (R[38] = W),
            (R[39] = Y),
            (R[40] = X),
            (R[41] = e))
        } else e = R[41]
        U = e
      }
      return (
        R[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(eo.ek, {
              entry: ei.L2.readAccess,
              children: (0, a.jsx)(er.X.Header, { title: (0, a.jsx)(f.A, { ...ei.L2.readAccess.title }) }),
            })),
            (R[46] = C))
          : (C = R[46]),
        R[47] !== q || R[48] !== B || R[49] !== G || R[50] !== Y || R[51] !== v || R[52] !== $ || R[53] !== H
          ? ((P =
              !G &&
              !B &&
              null != q &&
              (0, a.jsx)(eu.t, {
                children: (0, a.jsx)(eo.GC, {
                  entry: ei.L2.readPolicy,
                  description: v,
                  control: (e) =>
                    (0, a.jsx)(S.Ab, {
                      align: "end",
                      contentWidth: "menuWide",
                      disabled: Y,
                      triggerButton: (0, a.jsx)(eg.vg, {
                        ...e,
                        className: "w-max max-w-full",
                        disabled: Y,
                        children: (0, a.jsx)("span", {
                          className: "truncate",
                          children: ee.find((e) => e.id === $)?.label,
                        }),
                      }),
                      children: (0, a.jsx)(S.ms.RadioGroup, {
                        value: $,
                        children: ee.map((e) =>
                          (0, a.jsx)(
                            S.ms.RadioItem,
                            {
                              disabled: Y,
                              SubText: e.description,
                              value: e.id,
                              onSelect: () => {
                                e.id !== $ && H.mutate(e.id)
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
            (R[47] = q),
            (R[48] = B),
            (R[49] = G),
            (R[50] = Y),
            (R[51] = v),
            (R[52] = $),
            (R[53] = H),
            (R[54] = P))
          : (P = R[54]),
        R[55] !== U ||
        R[56] !== q ||
        R[57] !== B ||
        R[58] !== G ||
        R[59] !== J ||
        R[60] !== Y ||
        R[61] !== X ||
        R[62] !== H.isPending
          ? ((k =
              !J &&
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  (0, a.jsx)(er.X.Header, {
                    size: "compact",
                    actions: (0, a.jsx)(eU, {
                      disabled: G || B || null == q || H.isPending,
                      savedChats: q?.chats,
                      isSaving: Y,
                      triggerLabel: (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.readAccess.add",
                        defaultMessage: "Add",
                      }),
                      onAdd: (e, s, t) => {
                        X.mutate({ chat: e, decision: s }, { onSuccess: t })
                      },
                    }),
                    title: (0, a.jsx)("span", {
                      className: "text-secondary",
                      children: (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.readAccess.savedPermissions",
                        defaultMessage: "Per-chat permissions",
                      }),
                    }),
                  }),
                  (0, a.jsx)(eu.t, { children: U }),
                ],
              })),
            (R[55] = U),
            (R[56] = q),
            (R[57] = B),
            (R[58] = G),
            (R[59] = J),
            (R[60] = Y),
            (R[61] = X),
            (R[62] = H.isPending),
            (R[63] = k))
          : (k = R[63]),
        R[64] !== P || R[65] !== k
          ? ((E = (0, a.jsxs)(er.X.Content, { className: "gap-3", children: [P, k] })),
            (R[64] = P),
            (R[65] = k),
            (R[66] = E))
          : (E = R[66]),
        R[67] === Symbol.for("react.memo_cache_sentinel") ? ((I = () => z(null)), (R[67] = I)) : (I = R[67]),
        R[68] !== Z ? ((D = (e) => Z.mutate(e)), (R[68] = Z), (R[69] = D)) : (D = R[69]),
        R[70] !== F || R[71] !== $ || R[72] !== Z.isPending || R[73] !== D
          ? ((T = (0, a.jsx)(em, {
              chat: F,
              permission: "read",
              readAccessPolicy: $,
              isRemoving: Z.isPending,
              onClose: I,
              onRemove: D,
            })),
            (R[70] = F),
            (R[71] = $),
            (R[72] = Z.isPending),
            (R[73] = D),
            (R[74] = T))
          : (T = R[74]),
        R[75] !== E || R[76] !== T
          ? ((L = (0, a.jsxs)(er.X, { children: [C, E, T] })), (R[75] = E), (R[76] = T), (R[77] = L))
          : (L = R[77]),
        L
      )
    }
    async function eI(e) {
      let s = await (0, K.xx)(e)
      if (null == s) throw Error("Messages read decisions are unavailable")
      return s
    }
    async function eD(e) {
      let { chat: s, decision: t } = e,
        a = await (0, K.Nu)(s.chatGUID, t, s.displayName)
      if (null == a) throw Error("Messages read decisions are unavailable")
      return a
    }
    async function eT(e) {
      let s = await (0, K.Xo)(e)
      if (null == s) throw Error("Messages read decisions are unavailable")
      return s
    }
    function eL() {
      let e,
        s = (0, l.c)(4),
        { data: t, isError: i, isLoading: n } = (0, m.Ul)(K.rX)
      return (
        s[0] !== t || s[1] !== i || s[2] !== n
          ? ((e = (0, a.jsx)(eR, { approvals: t, isError: i, isLoading: n })),
            (s[0] = t),
            (s[1] = i),
            (s[2] = n),
            (s[3] = e))
          : (e = s[3]),
        e
      )
    }
    function eR(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        c,
        d = (0, l.c)(11),
        { approvals: u, isError: m, isLoading: g } = e
      d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, a.jsx)(f.A, { ...ea.m.messages })), (d[0] = s))
        : (s = d[0])
      let p = s
      return (
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(f.A, {
              id: "settings.messages.permissions.overview",
              defaultMessage: "Review which conversations the assistant can read or send messages to",
            })),
            (i = (0, a.jsx)(el, { current: p })),
            (d[1] = t),
            (d[2] = i))
          : ((t = d[1]), (i = d[2])),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eo.ek, {
              entry: ei.L2.sendAccess,
              children: (0, a.jsx)(er.X.Header, { title: (0, a.jsx)(f.A, { ...ei.L2.sendAccess.title }) }),
            })),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== u || d[5] !== m || d[6] !== g
          ? ((o = (0, a.jsxs)(er.X, {
              children: [
                n,
                (0, a.jsx)(er.X.Content, {
                  className: "gap-3",
                  children: (0, a.jsx)(eO, { approvals: u, isError: m, isLoading: g }),
                }),
              ],
            })),
            (d[4] = u),
            (d[5] = m),
            (d[6] = g),
            (d[7] = o))
          : (o = d[7]),
        d[8] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(eE, {})), (d[8] = r)) : (r = d[8]),
        d[9] !== o
          ? ((c = (0, a.jsxs)(J.P, { overview: t, backSlot: i, title: p, children: [o, r] })), (d[9] = o), (d[10] = c))
          : (c = d[10]),
        c
      )
    }
    function eO(e) {
      let s,
        t = (0, l.c)(4),
        { approvals: i, isError: n, isLoading: o } = e
      if (o) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(eu.t, {
                children: (0, a.jsx)(ec.u, {
                  children: (0, a.jsx)(f.A, {
                    id: "settings.computerUse.messages.allowedChats.loading",
                    defaultMessage: "Loading allowed chats\u2026",
                  }),
                }),
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      if (n || null == i) {
        let e
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(eu.t, {
                children: (0, a.jsx)(_.W, {
                  layout: "settings-row",
                  children: (0, a.jsx)(f.A, {
                    id: "settings.computerUse.messages.allowedChats.loadError",
                    defaultMessage: "Unable to load allowed chats",
                  }),
                }),
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (t[2] !== i ? ((s = (0, a.jsx)(eW, { approvals: i })), (t[2] = i), (t[3] = s)) : (s = t[3]), s)
    }
    function eW(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        d,
        u,
        g,
        p,
        b,
        y,
        j = (0, l.c)(33),
        { approvals: w } = e,
        A = (0, m.gh)(Q.u),
        v = (0, x.A)(),
        [U, C] = (0, h.useState)(null)
      ;(j[0] !== A ? ((s = () => A.query.cancel(K.rX)), (j[0] = A), (j[1] = s)) : (s = j[1]),
        j[2] !== A
          ? ((t = (e) => {
              A.query.setData(K.rX, e)
            }),
            (i = () => {
              A.get(N.Id).danger(
                (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.sendAccess.saveError",
                  defaultMessage: "Unable to update send permission",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.sendAccess.saveError" } },
              )
            }),
            (j[2] = A),
            (j[3] = t),
            (j[4] = i))
          : ((t = j[3]), (i = j[4])),
        j[5] !== s || j[6] !== t || j[7] !== i
          ? ((n = { onMutate: s, mutationFn: ez, onSuccess: t, onError: i }),
            (j[5] = s),
            (j[6] = t),
            (j[7] = i),
            (j[8] = n))
          : (n = j[8]))
      let S = (0, c.n)(n)
      j[9] !== A
        ? ((o = {
            mutationFn: eF,
            onSuccess: (e) => {
              ;(A.query.setData(K.rX, e), C(null))
            },
            onError: () => {
              A.get(N.Id).danger(
                (0, a.jsx)(f.A, {
                  id: "settings.computerUse.messages.allowedChats.removeError",
                  defaultMessage: "Unable to remove send permission",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.messages.allowedChats.removeError" } },
              )
            },
          }),
          (j[9] = A),
          (j[10] = o))
        : (o = j[10])
      let P = (0, c.n)(o)
      return (
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.sendAccess.allowAllDescription",
              defaultMessage:
                "When on, ChatGPT can send to any chat without asking you to approve the message or its recipients",
            })),
            (j[11] = r))
          : (r = j[11]),
        j[12] !== w.allowAllChats || j[13] !== P.isPending || j[14] !== S
          ? ((d = (0, a.jsx)(eu.t, {
              children: (0, a.jsx)(eo.GC, {
                entry: ei.L2.allowAll,
                description: r,
                control: (e) =>
                  (0, a.jsx)(E.l, {
                    ...e,
                    checked: w.allowAllChats,
                    disabled: S.isPending || P.isPending,
                    onChange: (e) => S.mutate(e),
                  }),
              }),
            })),
            (j[12] = w.allowAllChats),
            (j[13] = P.isPending),
            (j[14] = S),
            (j[15] = d))
          : (d = j[15]),
        j[16] !== w.allowAllChats ||
        j[17] !== w.approvedChats ||
        j[18] !== v ||
        j[19] !== P.isPending ||
        j[20] !== S.isPending
          ? ((u =
              !w.allowAllChats &&
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  (0, a.jsx)(er.X.Header, {
                    size: "compact",
                    title: (0, a.jsx)("span", {
                      className: "text-secondary",
                      children: (0, a.jsx)(f.A, {
                        id: "settings.computerUse.messages.allowedChats.savedApprovals",
                        defaultMessage: "Per-chat approvals",
                      }),
                    }),
                  }),
                  (0, a.jsx)(eu.t, {
                    children:
                      0 === w.approvedChats.length
                        ? (0, a.jsx)(_.W, {
                            layout: "settings-row",
                            children: (0, a.jsx)(f.A, {
                              id: "settings.computerUse.messages.allowedChats.empty",
                              defaultMessage: "None yet",
                            }),
                          })
                        : w.approvedChats.map((e) =>
                            (0, a.jsx)(
                              ed.ic,
                              {
                                label: (0, a.jsx)("span", { className: "font-medium", children: e.displayName }),
                                control: (0, a.jsx)(M.$, {
                                  "aria-label": v.formatMessage(
                                    {
                                      id: "settings.computerUse.messages.allowedChats.removeAriaLabel",
                                      defaultMessage: "Remove {displayName}",
                                    },
                                    { displayName: e.displayName },
                                  ),
                                  color: "ghost",
                                  disabled: P.isPending || S.isPending,
                                  onClick: () => {
                                    C(e)
                                  },
                                  size: "icon",
                                  children: (0, a.jsx)(en.cSG, {}),
                                }),
                              },
                              e.chatGUID,
                            ),
                          ),
                  }),
                ],
              })),
            (j[16] = w.allowAllChats),
            (j[17] = w.approvedChats),
            (j[18] = v),
            (j[19] = P.isPending),
            (j[20] = S.isPending),
            (j[21] = u))
          : (u = j[21]),
        j[22] === Symbol.for("react.memo_cache_sentinel") ? ((g = () => C(null)), (j[22] = g)) : (g = j[22]),
        j[23] !== P ? ((p = (e) => P.mutate(e)), (j[23] = P), (j[24] = p)) : (p = j[24]),
        j[25] !== U || j[26] !== P.isPending || j[27] !== p
          ? ((b = (0, a.jsx)(em, { chat: U, permission: "send", isRemoving: P.isPending, onClose: g, onRemove: p })),
            (j[25] = U),
            (j[26] = P.isPending),
            (j[27] = p),
            (j[28] = b))
          : (b = j[28]),
        j[29] !== b || j[30] !== d || j[31] !== u
          ? ((y = (0, a.jsxs)(a.Fragment, { children: [d, u, b] })), (j[29] = b), (j[30] = d), (j[31] = u), (j[32] = y))
          : (y = j[32]),
        y
      )
    }
    async function eF(e) {
      let s = await (0, K.SW)(e)
      if (null == s) throw Error("Messages send approvals are unavailable")
      return s
    }
    async function ez(e) {
      let s = await (0, K.Y3)(e)
      if (null == s) throw Error("Messages send approvals are unavailable")
      return s
    }
    var eq = t("fnPc"),
      eB = t("QfeY"),
      eG = t("odCE"),
      eV = t("znB5"),
      eH = t("wRsh"),
      eX = t("kfGJ"),
      eQ = t("hZax"),
      eK = t("WRcv"),
      eZ = t("m213"),
      eY = t("PmQt")
    let e$ = "connector_openai_codex_document_control"
    function eJ() {
      let e,
        s,
        t,
        i,
        n,
        o,
        r,
        c,
        d,
        u = (0, l.c)(24),
        { selectedHostId: g } = (0, eq.D8)(),
        p = (0, m._U)(I.I, g)
      u[0] !== g ? ((e = { hostId: g }), (u[0] = g), (u[1] = e)) : (e = u[1])
      let h = (0, D.H)(e),
        { platform: x } = (0, W.V)(),
        y = (0, w.l)(),
        { pathname: j } = (0, b.zy)()
      if (u[2] !== j) {
        let e = (0, b.B6)(Z.zK, j)?.params.browserFamily
        ;((s = (0, Z.YE)(e)), (u[2] = j), (u[3] = s))
      } else s = u[3]
      let A = s,
        v = null != (0, b.RQ)(ei.by)
      if (null != A && ("chrome" === A || y)) {
        let e
        return (u[4] !== A ? ((e = (0, a.jsx)(st, { browserFamily: A })), (u[4] = A), (u[5] = e)) : (e = u[5]), e)
      }
      if (null != A) {
        let e
        return (
          u[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.C5, { to: "/settings/computer-use", replace: !0 })), (u[6] = e))
            : (e = u[6]),
          e
        )
      }
      if (v) {
        let e
        return (
          u[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(ss, {})), (u[7] = e)) : (e = u[7]),
          e
        )
      }
      return (
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(eg.s, { slug: "computer-use" })),
            (i = (0, a.jsx)(f.A, {
              id: "settings.computerUse.subtitle",
              defaultMessage: "Manage how ChatGPT uses other applications on your computer",
            })),
            (u[8] = t),
            (u[9] = i))
          : ((t = u[8]), (i = u[9])),
        u[10] !== h.available
          ? ((n = h.available
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(er.X, {
                      children: [
                        (0, a.jsx)(eo.ek, {
                          entry: eY.vO,
                          children: (0, a.jsx)(er.X.Header, { title: (0, a.jsx)(f.A, { ...eY.vO.title }) }),
                        }),
                        (0, a.jsx)(er.X.Content, { children: (0, a.jsx)(eu.t, { children: (0, a.jsx)(so, {}) }) }),
                      ],
                    }),
                    (0, a.jsx)(sl, {}),
                  ],
                })
              : null),
            (u[10] = h.available),
            (u[11] = n))
          : (n = u[11]),
        u[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(er.X.Header, { title: (0, a.jsx)(f.A, { ...ea.m.control }) })), (u[12] = o))
          : (o = u[12]),
        u[13] !== h || u[14] !== x
          ? ((r = (0, a.jsxs)(er.X, {
              children: [
                o,
                (0, a.jsx)(er.X.Content, { children: (0, a.jsx)(e0, { computerUseAvailability: h, platform: x }) }),
              ],
            })),
            (u[13] = h),
            (u[14] = x),
            (u[15] = r))
          : (r = u[15]),
        u[16] !== p || u[17] !== h.available || u[18] !== x
          ? ((c = "macOS" === x && h.available && p ? (0, a.jsx)(si, {}) : null),
            (u[16] = p),
            (u[17] = h.available),
            (u[18] = x),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== n || u[21] !== r || u[22] !== c
          ? ((d = (0, a.jsxs)(J.P, { title: t, subtitle: i, children: [n, r, c] })),
            (u[20] = n),
            (u[21] = r),
            (u[22] = c),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    function e0(e) {
      let s,
        t,
        i,
        n,
        o,
        c,
        u,
        A,
        v,
        U,
        C,
        S,
        P,
        k,
        _,
        N,
        E = (0, l.c)(45),
        { computerUseAvailability: I, platform: D } = e,
        W = (0, m.gh)(Q.u),
        [F, B] = (0, h.useState)(!1),
        K = (0, x.A)(),
        Y = (0, b.Zp)(),
        { selectedHostId: J } = (0, eq.D8)(),
        ee = "local" === (0, eX.Qz)(J).kind,
        { data: et } = (0, m._U)(j.lb, J)
      E[0] !== J ? ((s = { hostId: J }), (E[0] = J), (E[1] = s)) : (s = E[1])
      let el = (0, T.J)(s)
      E[2] !== J ? ((t = { hostId: J }), (E[2] = J), (E[3] = t)) : (t = E[3])
      let { isUpdating: en, setAppEnabled: eo, updatingAppId: er } = (0, y.J)(t)
      E[4] !== J ? ((i = { hostId: J, enabled: !0 }), (E[4] = J), (E[5] = i)) : (i = E[5])
      let ec = (0, R.J)(i)
      ;(E[6] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (E[6] = n)) : (n = E[6]),
        E[7] !== ec || E[8] !== J
          ? ((o = { hostId: J, roots: n, enabled: ec }), (E[7] = ec), (E[8] = J), (E[9] = o))
          : (o = E[9]))
      let { data: ed, error: eu, isLoading: em, refetch: eg } = (0, V.Kj)(o)
      ;(E[10] !== ec || E[11] !== J ? ((c = ec && !(0, V.hE)(J)), (E[10] = ec), (E[11] = J), (E[12] = c)) : (c = E[12]),
        E[13] !== J || E[14] !== c
          ? ((u = { hostId: J, marketplaceKind: "local", enabled: c }), (E[13] = J), (E[14] = c), (E[15] = u))
          : (u = E[15]))
      let { data: ep, error: eh, isLoading: ef, refetch: ex } = (0, H.y$)(u)
      E[16] !== I || E[17] !== J
        ? ((A = { computerUseAvailability: I, hostId: J }), (E[16] = I), (E[17] = J), (E[18] = A))
        : (A = E[18])
      let eb = (0, O.l)(A),
        ey = ec
          ? (0, eZ.W)({
              installedPlugins: ed,
              localPlugins: ep,
              computerUse: I.available,
              externalBrowserUse: el.available,
              messages: eb.available,
            })
          : []
      E[19] !== eg || E[20] !== ex || E[21] !== J
        ? ((v = async () => {
            await Promise.all([eg(), ...((0, V.hE)(J) ? [] : [ex()])])
          }),
          (E[19] = eg),
          (E[20] = ex),
          (E[21] = J),
          (E[22] = v))
        : (v = E[22])
      let ej = v,
        eA = eu?.message ?? eh?.message ?? null,
        ev = em || ef || eb.isLoading || I.isLoading || el.isLoading
      E[23] !== ej || E[24] !== eA || E[25] !== ev
        ? ((U = { errorMessage: eA, isLoading: ev, reload: ej, retry: ej }),
          (E[23] = ej),
          (E[24] = eA),
          (E[25] = ev),
          (E[26] = U))
        : (U = E[26])
      let eM = U,
        eU = (0, L.m)(J),
        eC = (0, eQ.Zj)(G.J4),
        eS = (0, eQ.Zj)(G.tN),
        eP = (0, w.l)(),
        ek = X.appServices?.chromiumBrowser,
        e_ = ee && null != ek
      ;(E[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = async () => (await ek?.getInstalledBrowserFamilies()) ?? []),
          (S = ["chromium-browser", "installed-browser-families"]),
          (E[27] = C),
          (E[28] = S))
        : ((C = E[27]), (S = E[28])),
        E[29] !== e_
          ? ((P = { enabled: e_, queryFn: C, queryKey: S, retry: !1, staleTime: ew.D.FIVE_SECONDS }),
            (E[29] = e_),
            (E[30] = P))
          : (P = E[30]))
      let { data: eN } = (0, r.I)(P),
        eE = (0, m.Ul)(z.aD),
        eI = ey.find(e5) ?? null,
        eD = (eP ? (0, es.BT)(ed ?? [], eP) : null) ?? (0, es.BT)(ey, eP),
        eT = (0, eH.N)(ey, g.ovW, eU),
        eL = (0, eK.C)({ aliasesEnabled: eC, platform: D, plugins: ey, powerPointEnabled: eS }),
        eR = eD?.plugin.installed === !0,
        eO = et?.find(e4)?.isEnabled ?? !0,
        eW = en && er === e$
      E[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = Object.keys(d.Ypn).filter(d.rUV).map(e3)), (E[31] = k))
        : (k = E[31])
      let eF = (0, z.D6)(k),
        ez = eP ? (0, es.ju)(D) : ["chrome"],
        eB = eP ? (0, es.mV)(ee ? eN : void 0, D) : [],
        eG = ee && !el.isLoading && !el.allowed,
        eY = []
      for (let [e, s] of [...ez, ...eB].entries())
        if (
          (e === ez.length &&
            eY.push({
              kind: "disclosure",
              description: (0, a.jsx)(f.A, {
                id: "settings.computerUse.moreBrowsers.description",
                defaultMessage: "Set up extensions for more browsers",
              }),
              expanded: F,
              icon: (0, a.jsx)(e7, { browserFamilies: eB }),
              id: "more-browser-controls",
              onToggleExpanded: () => {
                B(e2)
              },
              title: (0, a.jsx)(f.A, {
                id: "settings.computerUse.moreBrowsers.title",
                defaultMessage: "More browsers",
              }),
            }),
          !(e >= ez.length) || F)
        ) {
          if ("safari" !== s && (eD?.plugin.installed === !0 || !eG)) {
            let e = eF.get(s)
            if (null == e) continue
            let t = !0 === eE.get(s),
              l = d.Ypn[s].displayName,
              i = d.Ypn[s].shortDisplayName
            if (eD?.plugin.installed === !1 && null == e.detectionError) {
              eY.push({
                browserFamily: s,
                description: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.browser.installPluginDescription",
                  defaultMessage: "Install the {pluginName} plugin to enable browser control",
                  values: { pluginName: (0, p.V)(eD) },
                }),
                displayName: l,
                icon: e9(s),
                id: `${s}-${eD.plugin.id}`,
                plugin: eD,
                title: (0, a.jsx)(e6, { browserFamily: s }),
              })
              continue
            }
            let n =
                null != e.detectionError
                  ? "manage"
                  : (0, es.N8)({ isInstalled: e.isInstalled, isLoading: e.isLoading, storeUrl: e.installUrl }),
              o = null
            if (
              ("install" === n
                ? (o = (0, a.jsx)(se, {
                    browserFamily: s,
                    storeUrl: e.installUrl,
                    children: (0, a.jsx)(f.A, {
                      id: "settings.computerUse.browser.installExtension",
                      defaultMessage: "Install",
                    }),
                  }))
                : "manage" === n &&
                  ("chrome" === s || eP) &&
                  (o = (0, a.jsx)(M.$, {
                    color: "secondary",
                    onClick: () => {
                      Y((0, Z.XX)(s))
                    },
                    size: "toolbar",
                    children: (0, a.jsx)(f.A, { id: "settings.computerUse.browser.manage", defaultMessage: "Manage" }),
                  })),
              !eP && null != eD && e.isInstalled)
            ) {
              eY.push({
                action: o,
                description: (0, a.jsx)(q.y, { status: e }),
                displayName: eR ? l : void 0,
                icon: e9(s),
                id: `${s}-${eD.plugin.id}`,
                plugin: eD,
                title: (0, a.jsx)(e6, { browserFamily: s }),
              })
              continue
            }
            eY.push({
              kind: "app",
              action: o,
              description: (0, a.jsx)(q.y, { status: e }),
              enabled: t,
              icon: e9(s),
              id: `${s}-browser-control`,
              onToggleEnabled: (e) => {
                ;(0, $.gc)(W, g.aRT[s], e)
              },
              showEnableToggle: e.isInstalled,
              title: (0, a.jsx)(e6, { browserFamily: s }),
              toggleAriaLabel: K.formatMessage(
                {
                  id: "settings.computerUse.browser.toggleAria",
                  defaultMessage: "Toggle the @{browserName} browser reference",
                },
                { browserName: i },
              ),
              toggleTooltip: t
                ? (0, a.jsx)(f.A, {
                    id: "settings.computerUse.browser.disableTooltip",
                    defaultMessage: "Hide @{browserName} in the composer",
                    values: { browserName: i },
                  })
                : (0, a.jsx)(f.A, {
                    id: "settings.computerUse.browser.enableTooltip",
                    defaultMessage: "Show @{browserName} in the composer",
                    values: { browserName: i },
                  }),
            })
            continue
          }
          eY.push({
            kind: "unavailable",
            description: (0, a.jsx)(e8, { browserFamily: s, isRestricted: eG }),
            icon: e9(s),
            id: `${s}-unavailable`,
            title: (0, a.jsx)(e6, { browserFamily: s }),
          })
        }
      if (eT?.plugin.installed === !0) {
        let e, s, t, l, i
        ;(E[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, { ...ea.m.messages })),
            (s = (0, a.jsx)(f.A, {
              id: "settings.computerUse.messages.description",
              defaultMessage: "Let ChatGPT read and send messages",
            })),
            (E[32] = e),
            (E[33] = s))
          : ((e = E[32]), (s = E[33])),
          E[34] !== Y
            ? ((t = () => {
                Y(ei.by)
              }),
              (E[34] = Y),
              (E[35] = t))
            : (t = E[35]),
          E[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)(f.A, { ...ea.m.manage })), (E[36] = l))
            : (l = E[36]),
          E[37] !== t
            ? ((i = (0, a.jsx)(M.$, { color: "secondary", onClick: t, size: "toolbar", children: l })),
              (E[37] = t),
              (E[38] = i))
            : (i = E[38]),
          eY.push({ plugin: eT, title: e, description: s, action: i }))
      }
      for (let e of eL) {
        let s = e.plugin
        eY.push({
          ...(s.plugin.installed && s.plugin.enabled
            ? {
                kind: "app",
                enabled: eO,
                id: e.entry.id,
                isPending: eW,
                onToggleEnabled: (s) => {
                  eo({ appId: e$, appName: K.formatMessage(e.entry.title), enabled: s }).catch(e1)
                },
                toggleAriaLabel: K.formatMessage(e.toggleAriaLabel),
                toggleTooltip: eO ? (0, a.jsx)(f.A, { ...e.disableTooltip }) : (0, a.jsx)(f.A, { ...e.enableTooltip }),
              }
            : { displayName: K.formatMessage(e.entry.title), plugin: s }),
          icon: (0, a.jsx)("img", { alt: "", className: "h-full w-full object-contain", src: e.icon }),
          searchEntry: e.entry,
          title: (0, a.jsx)(f.A, { ...e.entry.title }),
          description: (0, a.jsx)(f.A, { ...e.description }),
        })
      }
      if (I.available && null != eI) {
        let e, s, t
        ;(E[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, { ...ea.m.anyApp })),
            (s = (0, a.jsx)(f.A, {
              id: "settings.computerUse.anyApp.description",
              defaultMessage: "Let ChatGPT control apps on your computer",
            })),
            (E[39] = e),
            (E[40] = s))
          : ((e = E[39]), (s = E[40])),
          E[41] !== eI ? ((t = { plugin: eI, title: e, description: s }), (E[41] = eI), (E[42] = t)) : (t = E[42]),
          eY.push(t))
      }
      return (
        E[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(f.A, {
              id: "settings.computerUse.install.empty",
              defaultMessage: "Computer Use plugins unavailable",
            })),
            (E[43] = _))
          : (_ = E[43]),
        E[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(f.A, { id: "settings.computerUse.install.button", defaultMessage: "Install" })),
            (E[44] = N))
          : (N = E[44]),
        (0, a.jsx)(eV.Z, {
          emptyStateTitle: _,
          iconSize: 36,
          installButtonLabel: N,
          items: eY,
          pluginsQuery: eM,
          selectedHostId: J,
        })
      )
    }
    function e1() {}
    function e2(e) {
      return !e
    }
    function e3(e) {
      return { browserFamily: e }
    }
    function e4(e) {
      return e.id === e$
    }
    function e5(e) {
      let { plugin: s } = e
      return s.id === g.POp
    }
    function e6(e) {
      let s,
        t = (0, l.c)(2),
        { browserFamily: i } = e
      return (
        t[0] !== i
          ? ((s =
              "safari" === i
                ? (0, a.jsx)(f.A, { ...ea.m.safari })
                : (0, a.jsx)(a.Fragment, { children: d.Ypn[i].displayName })),
            (t[0] = i),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    function e9(e) {
      return "safari" === e
        ? (0, a.jsx)(k.I, { className: "text-secondary", "aria-hidden": !1, asset: n })
        : (0, a.jsxs)("span", {
            className: "relative block h-full w-full",
            children: [
              (0, a.jsx)("img", { alt: "", className: "h-full w-full object-contain", src: (0, A.$)(e) }),
              (0, a.jsx)(F, { className: "absolute right-0 bottom-0 h-1/2 w-1/2" }),
            ],
          })
    }
    function e7(e) {
      let s,
        t,
        i,
        n,
        o = (0, l.c)(8),
        { browserFamilies: r } = e
      if (o[0] !== r) {
        let e = r.slice(0, 3)
        ;((s = "true"),
          (t = "relative block h-full w-full"),
          (i = e.map((s, t) =>
            (0, a.jsx)(
              "img",
              {
                alt: "",
                className: (0, u.A)(
                  1 === e.length ? "h-full w-full" : "absolute size-6",
                  0 === t && e.length > 1 && "top-0 left-0",
                  1 === t && (2 === e.length ? "right-0 bottom-0" : "top-0 right-0"),
                  2 === t && "bottom-0 left-1/2 -translate-x-1/2",
                ),
                src: (0, A.$)(s),
              },
              s,
            ),
          )),
          (o[0] = r),
          (o[1] = s),
          (o[2] = t),
          (o[3] = i))
      } else ((s = o[1]), (t = o[2]), (i = o[3]))
      return (
        o[4] !== s || o[5] !== t || o[6] !== i
          ? ((n = (0, a.jsx)("span", { "aria-hidden": s, className: t, children: i })),
            (o[4] = s),
            (o[5] = t),
            (o[6] = i),
            (o[7] = n))
          : (n = o[7]),
        n
      )
    }
    function e8(e) {
      let s,
        t = (0, l.c)(3),
        { browserFamily: i, isRestricted: n } = e
      if ("safari" === i) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(f.A, {
                id: "settings.computerUse.safari.description",
                defaultMessage: "Safari extension support is coming soon",
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
            ? ((e = (0, a.jsx)(f.A, { ...B.w.restrictedAvailabilityDescription })), (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(f.A, {
              id: "settings.computerUse.browser.description",
              defaultMessage: "Use a browser extension for added control",
            })),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function se(e) {
      let s,
        t,
        i = (0, l.c)(9),
        { browserFamily: n, children: o, storeUrl: r } = e,
        c = (0, m.gh)(Q.u),
        d = (0, x.A)(),
        u = null == r
      return (
        i[0] !== n || i[1] !== d || i[2] !== c || i[3] !== r
          ? ((s = () => {
              if (null == r) return
              let e = X.appServices?.chromiumBrowser?.openUrl({ browserFamily: n, url: r })
              null == e
                ? (0, P.E0)({ href: r, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                : e.catch(() => {
                    c.get(N.Id).danger(
                      d.formatMessage({
                        id: "settings.computerUse.browser.openExtensionStoreError",
                        defaultMessage: "Unable to open browser extension page",
                      }),
                      { errorAnalytics: { toastId: "settings.computerUse.browser.openExtensionStoreError" } },
                    )
                  })
            }),
            (i[0] = n),
            (i[1] = d),
            (i[2] = c),
            (i[3] = r),
            (i[4] = s))
          : (s = i[4]),
        i[5] !== o || i[6] !== u || i[7] !== s
          ? ((t = (0, a.jsx)(M.$, { color: "secondary", disabled: u, onClick: s, size: "toolbar", children: o })),
            (i[5] = o),
            (i[6] = u),
            (i[7] = s),
            (i[8] = t))
          : (t = i[8]),
        t
      )
    }
    function ss() {
      let e,
        s,
        t,
        i,
        n = (0, l.c)(11),
        { selectedHostId: o } = (0, eq.D8)()
      n[0] !== o ? ((e = { hostId: o }), (n[0] = o), (n[1] = e)) : (e = n[1])
      let r = (0, R.J)(e)
      ;(n[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (n[2] = s)) : (s = n[2]),
        n[3] !== r || n[4] !== o
          ? ((t = { enabled: r, hostId: o, roots: s }), (n[3] = r), (n[4] = o), (n[5] = t))
          : (t = n[5]))
      let { data: c, isLoading: d } = (0, V.Kj)(t),
        u = (0, L.m)(o),
        m = (0, eH.N)(c ?? [], g.ovW, u)
      if (d && null == m) {
        let e, s, t
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(f.A, { ...ea.m.messages })), (n[6] = e))
          : (e = n[6])
        let l = e
        return (
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(el, { current: l })), (n[7] = s))
            : (s = n[7]),
          n[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(J.P, {
                backSlot: s,
                title: l,
                children: (0, a.jsx)(eG.j, {
                  children: (0, a.jsx)(f.A, {
                    id: "settings.computerUse.messages.loading",
                    defaultMessage: "Loading Messages settings\u2026",
                  }),
                }),
              })),
              (n[8] = t))
            : (t = n[8]),
          t
        )
      }
      if (!d && m?.plugin.installed !== !0) {
        let e
        return (
          n[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.C5, { to: "/settings/computer-use", replace: !0 })), (n[9] = e))
            : (e = n[9]),
          e
        )
      }
      return (
        n[10] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, a.jsx)(eL, {})), (n[10] = i)) : (i = n[10]),
        i
      )
    }
    function st(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        c,
        u,
        g,
        p,
        h,
        x,
        y,
        j,
        A,
        v,
        U,
        C,
        S = (0, l.c)(55),
        { browserFamily: P } = e,
        k = (0, m.gh)(Q.u),
        { selectedHostId: _ } = (0, eq.D8)()
      S[0] !== _ ? ((s = { hostId: _ }), (S[0] = _), (S[1] = s)) : (s = S[1])
      let E = (0, T.J)(s)
      S[2] !== _ ? ((t = { hostId: _ }), (S[2] = _), (S[3] = t)) : (t = S[3])
      let I = (0, R.J)(t)
      ;(S[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = []), (S[4] = i)) : (i = S[4]),
        S[5] !== I || S[6] !== _
          ? ((n = { enabled: I, hostId: _, roots: i }), (S[5] = I), (S[6] = _), (S[7] = n))
          : (n = S[7]))
      let { data: D, isLoading: L } = (0, V.Kj)(n),
        O = (0, w.l)(),
        F = (0, es.BT)(D ?? [], O),
        B = F?.plugin.installed === !0
      S[8] !== P ? ((o = (0, a.jsx)(e6, { browserFamily: P })), (S[8] = P), (S[9] = o)) : (o = S[9])
      let G = o
      S[10] !== P ? ((r = { browserFamily: P }), (S[10] = P), (S[11] = r)) : (r = S[11])
      let H = (0, z.Rn)(r),
        K = X.appServices?.chromiumBrowser,
        { platform: Z } = (0, W.V)()
      if (L && null == F) {
        let e, s, t
        return (
          S[12] !== G ? ((e = (0, a.jsx)(el, { current: G })), (S[12] = G), (S[13] = e)) : (e = S[13]),
          S[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(eG.j, {
                children: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.browser.loading",
                  defaultMessage: "Loading browser settings\u2026",
                }),
              })),
              (S[14] = s))
            : (s = S[14]),
          S[15] !== e || S[16] !== G
            ? ((t = (0, a.jsx)(J.P, { backSlot: e, title: G, children: s })), (S[15] = e), (S[16] = G), (S[17] = t))
            : (t = S[17]),
          t
        )
      }
      if (!L && !B && !H.isLoading && !H.isInstalled && null == H.detectionError) {
        let e
        return (
          S[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.C5, { to: "/settings/computer-use", replace: !0 })), (S[18] = e))
            : (e = S[18]),
          e
        )
      }
      ;(S[19] !== H.detectionError || S[20] !== H.retry
        ? ((c =
            null != H.detectionError &&
            (0, a.jsx)(M.$, {
              color: "secondary",
              onClick: H.retry,
              size: "toolbar",
              children: (0, a.jsx)(f.A, { id: "settings.computerUse.browser.retryDetection", defaultMessage: "Retry" }),
            })),
          (S[19] = H.detectionError),
          (S[20] = H.retry),
          (S[21] = c))
        : (c = S[21]),
        S[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(f.A, {
              id: "settings.computerUse.browser.reinstallExtension",
              defaultMessage: "Reinstall extension",
            })),
            (S[22] = u))
          : (u = S[22]),
        S[23] !== P || S[24] !== H.installUrl
          ? ((g = (0, a.jsx)(se, { browserFamily: P, storeUrl: H.installUrl, children: u })),
            (S[23] = P),
            (S[24] = H.installUrl),
            (S[25] = g))
          : (g = S[25]))
      let Y = null == K || null == H.installedExtensionId || H.isLoading
      return (
        S[26] !== P || S[27] !== H.installedExtensionId || S[28] !== k
          ? ((p = () => {
              null != K &&
                null != H.installedExtensionId &&
                K.openExtensionSettings({ browserFamily: P, extensionId: H.installedExtensionId }).catch(() => {
                  k.get(N.Id).danger(
                    (0, a.jsx)(f.A, {
                      id: "settings.computerUse.browser.openExtensionSettingsError",
                      defaultMessage: "Unable to open browser extension settings",
                    }),
                    { errorAnalytics: { toastId: "settings.computerUse.browser.openExtensionSettingsError" } },
                  )
                })
            }),
            (S[26] = P),
            (S[27] = H.installedExtensionId),
            (S[28] = k),
            (S[29] = p))
          : (p = S[29]),
        S[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(f.A, {
              id: "settings.computerUse.browser.removeExtension",
              defaultMessage: "Remove extension",
            })),
            (S[30] = h))
          : (h = S[30]),
        S[31] !== Y || S[32] !== p
          ? ((x = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(M.$, { color: "danger", disabled: Y, onClick: p, size: "toolbar", children: h }),
            })),
            (S[31] = Y),
            (S[32] = p),
            (S[33] = x))
          : (x = S[33]),
        S[34] !== x || S[35] !== c || S[36] !== g
          ? ((y = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [c, g, x] })),
            (S[34] = x),
            (S[35] = c),
            (S[36] = g),
            (S[37] = y))
          : (y = S[37]),
        S[38] !== G ? ((j = (0, a.jsx)(el, { current: G })), (S[38] = G), (S[39] = j)) : (j = S[39]),
        S[40] !== H
          ? ((A =
              null != H.detectionError
                ? (0, a.jsx)(q.y, { status: H })
                : !H.isLoading && (0, a.jsx)(sa, { installed: H.isInstalled })),
            (S[40] = H),
            (S[41] = A))
          : (A = S[41]),
        S[42] !== P || S[43] !== H.detectionError || S[44] !== Z
          ? ((v =
              null != H.detectionError &&
              (0, a.jsx)(er.X, {
                children: (0, a.jsx)(ed.ic, {
                  control: null,
                  label:
                    "permission-denied" === H.detectionError && "macOS" === Z
                      ? (0, a.jsx)(f.A, {
                          id: "settings.computerUse.browser.permissionDenied",
                          defaultMessage:
                            "Allow this app to access {browserName} in System Settings \u2192 Privacy & Security \u2192 Files & Folders, then retry",
                          values: { browserName: d.Ypn[P].displayName },
                        })
                      : (0, a.jsx)(f.A, {
                          id: "settings.computerUse.browser.detectionFailed",
                          defaultMessage: "Check this app\u2019s permission to read browser data, then retry",
                        }),
                }),
              })),
            (S[42] = P),
            (S[43] = H.detectionError),
            (S[44] = Z),
            (S[45] = v))
          : (v = S[45]),
        S[46] !== E.available
          ? ((U = (0, a.jsx)(ee.Q, { backend: "chrome", showWebMcp: E.available })), (S[46] = E.available), (S[47] = U))
          : (U = S[47]),
        S[48] !== y || S[49] !== j || S[50] !== A || S[51] !== v || S[52] !== U || S[53] !== G
          ? ((C = (0, a.jsxs)(J.P, {
              action: y,
              backSlot: j,
              subtitle: A,
              subtitleClassName: "flex",
              title: G,
              children: [v, U],
            })),
            (S[48] = y),
            (S[49] = j),
            (S[50] = A),
            (S[51] = v),
            (S[52] = U),
            (S[53] = G),
            (S[54] = C))
          : (C = S[54]),
        C
      )
    }
    function sa(e) {
      let s,
        t,
        i,
        n,
        o,
        r = (0, l.c)(12),
        { installed: c } = e,
        d = c
          ? "bg-[var(--app-color-background-status-success)] text-[var(--color-text-success)]"
          : "bg-chart-red/10 text-chart-red"
      r[0] !== d
        ? ((s = (0, u.A)("inline-flex w-max items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium", d)),
          (r[0] = d),
          (r[1] = s))
        : (s = r[1])
      let m = c ? "bg-[var(--app-color-icon-success)]" : "bg-chart-red"
      return (
        r[2] !== m ? ((t = (0, u.A)("h-2 w-2 rounded-full", m)), (r[2] = m), (r[3] = t)) : (t = r[3]),
        r[4] !== t ? ((i = (0, a.jsx)("span", { className: t })), (r[4] = t), (r[5] = i)) : (i = r[5]),
        r[6] !== c
          ? ((n = c
              ? (0, a.jsx)(f.A, { id: "settings.computerUse.chrome.installed", defaultMessage: "Installed" })
              : (0, a.jsx)(f.A, { id: "settings.computerUse.chrome.notInstalled", defaultMessage: "Not installed" })),
            (r[6] = c),
            (r[7] = n))
          : (n = r[7]),
        r[8] !== s || r[9] !== i || r[10] !== n
          ? ((o = (0, a.jsxs)("span", { className: s, children: [i, n] })),
            (r[8] = s),
            (r[9] = i),
            (r[10] = n),
            (r[11] = o))
          : (o = r[11]),
        o
      )
    }
    function sl() {
      let e,
        s,
        t,
        n,
        o,
        r,
        d,
        u,
        g = (0, l.c)(21),
        p = (0, m.gh)(Q.u),
        h = (0, m.Ul)(K.XF)
      g[0] !== p
        ? ((e = {
            mutationFn: K.zz,
            onSuccess: (e) => {
              p.query.setData(K.XF, e)
            },
          }),
          (g[0] = p),
          (g[1] = e))
        : (e = g[1])
      let x = (0, c.n)(e)
      if (null == h.data) return null
      g[2] !== h.data ? ((s = (0, eY.cZ)(h.data)), (g[2] = h.data), (g[3] = s)) : (s = g[3])
      let b = s,
        y = h.isLoading || x.isPending
      ;(g[4] !== b.title ? ((t = (0, a.jsx)(f.A, { ...b.title })), (g[4] = b.title), (g[5] = t)) : (t = g[5]),
        g[6] !== y || g[7] !== t
          ? ((n = (0, a.jsx)(eg.vg, {
              className: "w-max max-w-full",
              contentClassName: "flex-none",
              disabled: y,
              children: t,
            })),
            (g[6] = y),
            (g[7] = t),
            (g[8] = n))
          : (n = g[8]))
      let j = h.isLoading || x.isPending
      return (
        g[9] !== b.title || g[10] !== x
          ? ((o = eY.JA.map((e) =>
              (0, a.jsx)(
                S.ms.Item,
                {
                  onSelect: () => {
                    x.mutate(e.value)
                  },
                  rightIconAsset: b.title.id === e.label.id ? i.G : void 0,
                  children: (0, a.jsx)("span", { className: "text-sm", children: (0, a.jsx)(f.A, { ...e.label }) }),
                },
                e.value,
              ),
            )),
            (g[9] = b.title),
            (g[10] = x),
            (g[11] = o))
          : (o = g[11]),
        g[12] !== o
          ? ((r = (0, a.jsx)("div", { className: "w-max max-w-[calc(100vw-2rem)]", children: o })),
            (g[12] = o),
            (g[13] = r))
          : (r = g[13]),
        g[14] !== n || g[15] !== j || g[16] !== r
          ? ((d = (0, a.jsx)(S.Ab, { triggerButton: n, align: "start", disabled: j, children: r })),
            (g[14] = n),
            (g[15] = j),
            (g[16] = r),
            (g[17] = d))
          : (d = g[17]),
        g[18] !== b || g[19] !== d
          ? ((u = (0, a.jsx)(eo.ek, { entry: b, children: d })), (g[18] = b), (g[19] = d), (g[20] = u))
          : (u = g[20]),
        u
      )
    }
    function si() {
      let e,
        s,
        t,
        i,
        n,
        o,
        r,
        d = (0, l.c)(18),
        u = (0, m.gh)(Q.u),
        g = (0, x.A)(),
        p = (0, m.Ul)(K.WP)
      d[0] !== u
        ? ((e = {
            mutationFn: K._o,
            onSuccess: (e) => {
              if (
                (u.query.setData(K.WP, (s) => ({
                  computerIconDataURL: s?.computerIconDataURL ?? null,
                  enabled: e,
                  lockIconDataURL: s?.lockIconDataURL ?? null,
                })),
                null != e)
              ) {
                if (e)
                  return void u
                    .get(N.Id)
                    .success(
                      (0, a.jsx)(f.A, {
                        id: "settings.computerUse.backgroundAuth.enabled",
                        defaultMessage: "Locked use enabled",
                      }),
                    )
                u.get(N.Id).success(
                  (0, a.jsx)(f.A, {
                    id: "settings.computerUse.backgroundAuth.disabled",
                    defaultMessage: "Locked use disabled",
                  }),
                )
              }
            },
            onError: () => {
              u.get(N.Id).danger(
                (0, a.jsx)(f.A, {
                  id: "settings.computerUse.backgroundAuth.saveError",
                  defaultMessage: "Unable to update Locked use",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.backgroundAuth.saveError" } },
              )
            },
          }),
          (d[0] = u),
          (d[1] = e))
        : (e = d[1])
      let h = (0, c.n)(e)
      if (p.data?.enabled == null) return null
      ;(d[2] !== p.data.computerIconDataURL || d[3] !== p.data.lockIconDataURL
        ? ((s =
            null != p.data.computerIconDataURL && null != p.data.lockIconDataURL
              ? (0, a.jsx)(eB.v, {
                  children: (0, a.jsx)("span", {
                    className: "origin-center scale-55",
                    children: (0, a.jsx)(Y, {
                      computerImageDataUrl: p.data.computerIconDataURL,
                      lockImageDataUrl: p.data.lockIconDataURL,
                    }),
                  }),
                })
              : null),
          (d[2] = p.data.computerIconDataURL),
          (d[3] = p.data.lockIconDataURL),
          (d[4] = s))
        : (s = d[4]),
        d[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(f.A, {
              id: "settings.computerUse.backgroundAuth.description",
              defaultMessage: "Let ChatGPT use your Mac when it's locked. <a>Learn more</a>",
              values: { a: sn },
            })),
            (d[5] = t))
          : (t = d[5]),
        d[6] !== g
          ? ((i = g.formatMessage({
              id: "settings.computerUse.backgroundAuth.ariaLabel",
              defaultMessage: "Enable Locked use",
            })),
            (d[6] = g),
            (d[7] = i))
          : (i = d[7]))
      let b = p.isLoading || h.isPending
      return (
        d[8] !== h
          ? ((n = (e) => {
              h.mutate(e)
            }),
            (d[8] = h),
            (d[9] = n))
          : (n = d[9]),
        d[10] !== p.data.enabled || d[11] !== i || d[12] !== b || d[13] !== n
          ? ((o = (0, a.jsx)(E.l, { ariaLabel: i, checked: p.data.enabled, disabled: b, onChange: n })),
            (d[10] = p.data.enabled),
            (d[11] = i),
            (d[12] = b),
            (d[13] = n),
            (d[14] = o))
          : (o = d[14]),
        d[15] !== s || d[16] !== o
          ? ((r = (0, a.jsx)(eu.t, {
              children: (0, a.jsx)(eo.GC, { entry: eY.FJ, icon: s, description: t, control: o }),
            })),
            (d[15] = s),
            (d[16] = o),
            (d[17] = r))
          : (r = d[17]),
        r
      )
    }
    function sn(e) {
      return (0, a.jsx)("a", {
        className: "inline-flex text-link-primary!",
        href: v.DU,
        target: "_blank",
        rel: "noreferrer",
        children: e,
      })
    }
    function so() {
      let e,
        s,
        t,
        i = (0, l.c)(7),
        n = (0, m.gh)(Q.u),
        o = (0, m.Ul)(K.OJ)
      if (
        (i[0] !== n
          ? ((e = () => {
              n.get(K.OJ).refetch()
            }),
            (s = [n]),
            (i[0] = n),
            (i[1] = e),
            (i[2] = s))
          : ((e = i[1]), (s = i[2])),
        (0, h.useEffect)(e, s),
        o.isLoading)
      ) {
        let e
        return (
          i[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(ec.u, {
                children: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.allowedApps.loading",
                  defaultMessage: "Loading allowed apps\u2026",
                }),
              })),
              (i[3] = e))
            : (e = i[3]),
          e
        )
      }
      if (o.isError) {
        let e
        return (
          i[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "p-4 text-sm text-secondary",
                children: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.allowedApps.loadError",
                  defaultMessage: "Unable to load allowed apps.",
                }),
              })),
              (i[4] = e))
            : (e = i[4]),
          e
        )
      }
      return (
        i[5] !== o.data ? ((t = (0, a.jsx)(sr, { approvals: o.data })), (i[5] = o.data), (i[6] = t)) : (t = i[6]),
        t
      )
    }
    function sr(e) {
      let s,
        t,
        i,
        n,
        o,
        r,
        d,
        u,
        g,
        p,
        b,
        y,
        j,
        w,
        A,
        v,
        S,
        P,
        k = (0, l.c)(41),
        { approvals: _ } = e,
        E = (0, m.gh)(Q.u),
        I = (0, x.A)(),
        [D, T] = (0, h.useState)(null)
      k[0] !== E
        ? ((s = {
            mutationFn: sc,
            onSuccess: (e) => {
              ;(E.query.setData(K.OJ, e),
                E.get(N.Id).success(
                  (0, a.jsx)(f.A, {
                    id: "settings.computerUse.allowedApps.saved",
                    defaultMessage: "Allowed app removed",
                  }),
                ))
            },
            onError: () => {
              E.get(N.Id).danger(
                (0, a.jsx)(f.A, {
                  id: "settings.computerUse.allowedApps.saveError",
                  defaultMessage: "Unable to save allowed apps",
                }),
                { errorAnalytics: { toastId: "settings.computerUse.allowedApps.saveError" } },
              )
            },
          }),
          (k[0] = E),
          (k[1] = s))
        : (s = k[1])
      let L = (0, c.n)(s)
      k[2] !== D || k[3] !== L
        ? ((t = async () => {
            null != D && (await L.mutateAsync(D.bundleIdentifier), T(null))
          }),
          (k[2] = D),
          (k[3] = L),
          (k[4] = t))
        : (t = k[4])
      let R = t
      ;(k[5] !== _?.approvedApps ? ((i = _?.approvedApps ?? []), (k[5] = _?.approvedApps), (k[6] = i)) : (i = k[6]),
        k[7] !== I || k[8] !== L.isPending || k[9] !== i
          ? ((n = (0, a.jsx)(sd, { approvedApps: i, intl: I, isSaving: L.isPending, onRequestRemoval: T })),
            (k[7] = I),
            (k[8] = L.isPending),
            (k[9] = i),
            (k[10] = n))
          : (n = k[10]))
      let O = null != D
      k[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (e) => {
            e || T(null)
          }),
          (k[11] = o))
        : (o = k[11])
      let W = D?.displayName ?? ""
      k[12] !== W
        ? ((r = (0, a.jsx)(U.L3, {
            children: (0, a.jsx)(f.A, {
              id: "settings.computerUse.allowedApps.removeDialogTitle",
              defaultMessage: "Remove \u201C{displayName}\u201D from always allowed apps?",
              values: { displayName: W },
            }),
          })),
          (k[12] = W),
          (k[13] = r))
        : (r = k[13])
      let F = D?.displayName ?? ""
      return (
        k[14] !== F
          ? ((d = (0, a.jsx)(U.rr, {
              children: (0, a.jsx)(f.A, {
                id: "settings.computerUse.allowedApps.removeDialogSubtitle",
                defaultMessage: "ChatGPT will ask to use \u201C{displayName}\u201D in the next computer use session.",
                values: { displayName: F },
              }),
            })),
            (k[14] = F),
            (k[15] = d))
          : (d = k[15]),
        k[16] !== d || k[17] !== r
          ? ((u = (0, a.jsx)(C.OO, { children: (0, a.jsx)(C.c7, { title: r, subtitle: d }) })),
            (k[16] = d),
            (k[17] = r),
            (k[18] = u))
          : (u = k[18]),
        k[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = () => {
              T(null)
            }),
            (p = (0, a.jsx)(f.A, {
              id: "settings.computerUse.allowedApps.removeDialogCancel",
              defaultMessage: "Cancel",
            })),
            (k[19] = g),
            (k[20] = p))
          : ((g = k[19]), (p = k[20])),
        k[21] !== L.isPending
          ? ((b = (0, a.jsx)(M.$, { color: "ghost", disabled: L.isPending, onClick: g, children: p })),
            (k[21] = L.isPending),
            (k[22] = b))
          : (b = k[22]),
        k[23] !== R
          ? ((y = () => {
              R()
            }),
            (k[23] = R),
            (k[24] = y))
          : (y = k[24]),
        k[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(f.A, {
              id: "settings.computerUse.allowedApps.removeDialogConfirm",
              defaultMessage: "Remove",
            })),
            (k[25] = j))
          : (j = k[25]),
        k[26] !== L.isPending || k[27] !== y
          ? ((w = (0, a.jsx)(M.$, { color: "danger", loading: L.isPending, onClick: y, children: j })),
            (k[26] = L.isPending),
            (k[27] = y),
            (k[28] = w))
          : (w = k[28]),
        k[29] !== b || k[30] !== w
          ? ((A = (0, a.jsx)(C.OO, { children: (0, a.jsxs)(C.Es, { children: [b, w] }) })),
            (k[29] = b),
            (k[30] = w),
            (k[31] = A))
          : (A = k[31]),
        k[32] !== u || k[33] !== A
          ? ((v = (0, a.jsxs)(C.R4, { children: [u, A] })), (k[32] = u), (k[33] = A), (k[34] = v))
          : (v = k[34]),
        k[35] !== v || k[36] !== O
          ? ((S = (0, a.jsx)(U.lG, { open: O, onOpenChange: o, size: "compact", children: v })),
            (k[35] = v),
            (k[36] = O),
            (k[37] = S))
          : (S = k[37]),
        k[38] !== S || k[39] !== n
          ? ((P = (0, a.jsxs)(a.Fragment, { children: [n, S] })), (k[38] = S), (k[39] = n), (k[40] = P))
          : (P = k[40]),
        P
      )
    }
    async function sc(e) {
      let s = await (0, K.Zw)(e)
      if (null == s) throw Error("Computer use app approvals are unavailable")
      return s
    }
    function sd(e) {
      let s,
        t,
        i = (0, l.c)(12),
        { approvedApps: n, intl: r, isSaving: c, onRequestRemoval: d } = e
      if (0 === n.length) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(_.W, {
                layout: "settings-row",
                children: (0, a.jsx)(f.A, {
                  id: "settings.computerUse.allowedApps.emptyTitle",
                  defaultMessage: "None yet",
                }),
              })),
              (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (i[1] !== n || i[2] !== r || i[3] !== c || i[4] !== d) {
        let e
        ;(i[6] !== r || i[7] !== c || i[8] !== d
          ? ((e = (e) =>
              (0, a.jsx)(
                ed.ic,
                {
                  icon: (0, a.jsx)(su, { approvedApp: e }),
                  label: (0, a.jsx)("span", { className: "font-medium", children: e.displayName }),
                  description: (0, a.jsx)(f.A, {
                    id: "settings.computerUse.allowedApps.permissionHelp",
                    defaultMessage: "ChatGPT can use this app without asking",
                  }),
                  control: (0, a.jsx)(M.$, {
                    "aria-label": r.formatMessage(
                      {
                        id: "settings.computerUse.allowedApps.removeAriaLabel",
                        defaultMessage: "Remove {displayName}",
                      },
                      { displayName: e.displayName },
                    ),
                    color: "danger",
                    disabled: c,
                    onClick: () => {
                      d(e)
                    },
                    size: "icon",
                    children: (0, a.jsx)("span", {
                      className: "grid size-5 place-items-center",
                      children: (0, a.jsx)(k.I, { asset: o.c }),
                    }),
                  }),
                },
                e.bundleIdentifier,
              )),
            (i[6] = r),
            (i[7] = c),
            (i[8] = d),
            (i[9] = e))
          : (e = i[9]),
          (s = n.map(e)),
          (i[1] = n),
          (i[2] = r),
          (i[3] = c),
          (i[4] = d),
          (i[5] = s))
      } else s = i[5]
      return (i[10] !== s ? ((t = (0, a.jsx)(a.Fragment, { children: s })), (i[10] = s), (i[11] = t)) : (t = i[11]), t)
    }
    function su(e) {
      let s,
        t = (0, l.c)(3),
        { approvedApp: i } = e
      return (
        t[0] !== i.displayName || t[1] !== i.iconDataURL
          ? ((s = (0, a.jsx)(eB.v, {
              children:
                null != i.iconDataURL
                  ? (0, a.jsx)("img", { alt: "", className: "size-full", draggable: !1, src: i.iconDataURL })
                  : (0, a.jsx)("span", {
                      className:
                        "flex size-full items-center justify-center bg-text/10 text-sm font-semibold text-codex-description",
                      children: i.displayName.slice(0, 1).toUpperCase(),
                    }),
            })),
            (t[0] = i.displayName),
            (t[1] = i.iconDataURL),
            (t[2] = s))
          : (s = t[2]),
        s
      )
    }
  },
  PzrE(e, s, t) {
    var a = t("qmMi"),
      l = t("DBCl"),
      i = t("Qgfj"),
      n = t("wLMK"),
      o = t("cLdu"),
      r = t("OWtl"),
      c = t("ndjw"),
      d = t("dWmd"),
      u = t("wRsh"),
      m = t("jBHQ"),
      g = t("tgIT")
    let p = "/settings/computer-use/messages",
      h = {
        sendAccess: {
          section: "computer-use",
          path: p,
          id: "messages-send-access",
          title: (0, i.zR)({ id: "settings.computerUse.messages.sendAccess.title", defaultMessage: "Send access" }),
          keywords: [g.m.messages],
        },
        readAccess: {
          section: "computer-use",
          path: p,
          id: "messages-read-access",
          title: (0, i.zR)({ id: "settings.computerUse.messages.readAccess.title", defaultMessage: "Read access" }),
          keywords: [g.m.messages],
        },
        allowAll: {
          section: "computer-use",
          path: p,
          id: "messages-allow-all-sends",
          title: (0, i.zR)({
            id: "settings.computerUse.messages.sendAccess.allowAll",
            defaultMessage: "Always allow sending to all chats",
          }),
        },
        readPolicy: {
          section: "computer-use",
          path: p,
          id: "messages-reading-behavior",
          title: (0, i.zR)({
            id: "settings.computerUse.messages.readAccess.policyLabel",
            defaultMessage: "Reading behavior",
          }),
        },
      },
      f = (0, a.i1)(r.u, (e, { get: s }) => {
        if ("local" !== e || s(n.V, { enabled: !1 }).data?.platform !== "darwin" || !s(m.P, "419294242")) return []
        let { data: t } = s(o.qF, { accountId: null, cacheOnly: !0, hostId: e, roots: [] }),
          a = s(c.d7, { hostId: e }, { enabled: !1 }).data?.homeDirectory,
          i = (0, u.N)(t ?? [], l.ovW, a)
        if (i?.plugin.installed !== !0) return []
        let r = [h.sendAccess, h.readAccess],
          g = s(d.rX, { enabled: !1 })
        g.isError || null == g.data || r.push(h.allowAll)
        let p = s(d.Ks, { enabled: !1 })
        return (p.isError || null == p.data || r.push(h.readPolicy), r)
      })
    t.d(s, {}, { L2: h, V5: f, by: p })
  },
  QfeY(e, s, t) {
    var a = t("ABep"),
      l = t("QosV"),
      i = t("on57")
    t.d(
      s,
      {},
      {
        v: function (e) {
          let s,
            t,
            n = (0, l.c)(6),
            { bordered: o, children: r, size: c } = e,
            d = 36 === (void 0 === c ? 36 : c) ? "size-9 rounded-md" : "size-10 rounded-lg",
            u = void 0 !== o && o && "border border-default"
          return (
            n[0] !== d || n[1] !== u
              ? ((s = (0, i.A)("flex shrink-0 items-center justify-center overflow-hidden", d, u)),
                (n[0] = d),
                (n[1] = u),
                (n[2] = s))
              : (s = n[2]),
            n[3] !== r || n[4] !== s
              ? ((t = (0, a.jsx)("span", { className: s, children: r })), (n[3] = r), (n[4] = s), (n[5] = t))
              : (t = n[5]),
            t
          )
        },
      },
    )
  },
  znB5(e, s, t) {
    t.d(s, { Z: () => E })
    var a = t("ABep"),
      l = t("QosV"),
      i = t("slpy"),
      n = t("HaM6")
    let o = (0, t("ESTr").a)({
      name: "chevron-down-md-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 5.25, y: 9.25, width: 13.5, height: 7.292969 },
        visualBounds: { x: 5.25, y: 9.25, width: 13.5, height: 7.292969 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.25, y: 9.25, width: 13.5, height: 7.292969 },
        center: { x: 12, y: 12.896485 },
        insets: { top: 9.25, right: 5.25, bottom: 7.457031, left: 5.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12.896485 }, foreground: { x: 12, y: 12.896485 } },
      },
      capabilities: ["icon"],
      body: '<path d="M17.4697 9.46967C17.7626 9.17678 18.2373 9.17678 18.5302 9.46967C18.8231 9.76256 18.8231 10.2373 18.5302 10.5302L12.8837 16.1767C12.3956 16.6648 11.6043 16.6648 11.1162 16.1767L5.46967 10.5302C5.17678 10.2373 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23732 9.17678 6.53022 9.46967L11.9999 14.9394L17.4697 9.46967Z" fill="currentColor"/>',
    })
    var r = t("yLkT"),
      c = t("vjxO"),
      d = t("on57"),
      u = t("Haiv"),
      m = t("SqAt"),
      g = t("oyxz"),
      p = t("Wf1j"),
      h = t("Ywss"),
      f = t("FvYa"),
      x = t("Sm6l"),
      b = t("bqtn"),
      y = t("HOLv"),
      j = t("evwP"),
      w = t("f38C"),
      A = t("F0xz"),
      v = t("a0aG"),
      M = t("Yewb"),
      U = t("jEyg"),
      C = t("ugfi"),
      S = t("pO0d"),
      P = t("QfeY"),
      k = t("I7Ou"),
      _ = t("AWNZ"),
      N = t("ZEx5")
    function E(e) {
      let s,
        t,
        n,
        c,
        p,
        f,
        b = (0, l.c)(40),
        {
          emptyStateTitle: w,
          iconSize: E,
          installButtonLabel: D,
          items: T,
          pluginsQuery: R,
          selectedHostId: O,
          unavailableItems: W,
        } = e,
        F = void 0 === E ? 40 : E
      b[0] !== W ? ((s = void 0 === W ? [] : W), (b[0] = W), (b[1] = s)) : (s = b[1])
      let z = s,
        q = (0, h.Zp)(),
        { installPlugin: B, status: G } = (0, M.XY)()
      b[2] !== O ? ((t = { hostId: O }), (b[2] = O), (b[3] = t)) : (t = b[3])
      let { pendingPluginId: V, setPluginEnabled: H } = (0, C.zQ)(t)
      b[4] !== O ? ((n = { hostId: O }), (b[4] = O), (b[5] = n)) : (n = b[5])
      let { pendingUninstallPluginId: X, uninstallPlugin: Q } = (0, C.XV)(n),
        K = G?.hostId === O ? G.pluginId : null,
        Z = V ?? K ?? X,
        Y = T.length + z.length
      if (R.isLoading && 0 === Y) {
        let e
        return (
          b[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.t, {
                className: "box-content min-h-[var(--height-token-settings-row)] justify-center",
                children: (0, a.jsx)(k.u, {
                  children: (0, a.jsx)(g.A, {
                    id: "settings.plugins.controls.loading",
                    defaultMessage: "Loading plugins\u2026",
                  }),
                }),
              })),
              (b[6] = e))
            : (e = b[6]),
          e
        )
      }
      if (null != R.errorMessage) {
        let e
        return (
          b[7] !== R
            ? ((e = (0, a.jsx)(N.t, {
                children:
                  null != R.retry
                    ? (0, a.jsx)(S.iu, {
                        action: (0, a.jsx)(x.$, {
                          color: "secondary",
                          size: "toolbar",
                          onClick: () => void R.retry?.(),
                          children: (0, a.jsx)(g.A, { id: "settings.plugins.controls.retry", defaultMessage: "Retry" }),
                        }),
                        label: (0, a.jsx)("span", { role: "alert", children: R.errorMessage }),
                      })
                    : (0, a.jsx)(j.W, { layout: "settings-row", children: R.errorMessage }),
              })),
              (b[7] = R),
              (b[8] = e))
            : (e = b[8]),
          e
        )
      }
      if (0 === Y) {
        let e
        return (
          b[9] !== w
            ? ((e = (0, a.jsx)(N.t, { children: (0, a.jsx)(j.W, { layout: "settings-row", children: w }) })),
              (b[9] = w),
              (b[10] = e))
            : (e = b[10]),
          e
        )
      }
      if (
        b[11] !== F ||
        b[12] !== D ||
        b[13] !== B ||
        b[14] !== T ||
        b[15] !== q ||
        b[16] !== Z ||
        b[17] !== R.reload ||
        b[18] !== O ||
        b[19] !== H ||
        b[20] !== Q
      ) {
        let e
        ;(b[22] !== F ||
        b[23] !== D ||
        b[24] !== B ||
        b[25] !== q ||
        b[26] !== Z ||
        b[27] !== R.reload ||
        b[28] !== O ||
        b[29] !== H ||
        b[30] !== Q
          ? ((e = (e) =>
              "disclosure" === e.kind
                ? (0, a.jsx)(
                    _.kG,
                    {
                      ariaExpanded: e.expanded,
                      edgeRounding: "none",
                      onClick: e.onToggleExpanded,
                      trailing: (0, a.jsx)(y.I, {
                        className: (0, d.A)("text-secondary", e.expanded && "rotate-180"),
                        asset: o,
                        "aria-hidden": !1,
                      }),
                      description: e.description,
                      icon: (0, a.jsx)(P.v, {
                        bordered: !0,
                        size: F,
                        children:
                          e.icon ?? (0, a.jsx)(y.I, { className: "text-secondary", "aria-hidden": !1, asset: r.k }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : "unavailable" === e.kind
                  ? (0, a.jsx)(I, { iconSize: F, item: e }, e.id)
                  : "app" === e.kind
                    ? (0, a.jsx)(
                        _.ic,
                        {
                          control:
                            null == e.action && !1 === e.showEnableToggle
                              ? null
                              : (0, a.jsxs)("div", {
                                  className: "flex shrink-0 items-center gap-2",
                                  children: [
                                    e.action,
                                    !1 === e.showEnableToggle
                                      ? null
                                      : (0, a.jsx)(i.m, {
                                          content: e.toggleTooltip,
                                          children: (0, a.jsx)(A.l, {
                                            ariaLabel: e.toggleAriaLabel,
                                            checked: e.enabled,
                                            disabled: !0 === e.isPending,
                                            onChange: e.onToggleEnabled,
                                          }),
                                        }),
                                  ],
                                }),
                          description: e.description,
                          icon: (0, a.jsx)(P.v, {
                            bordered: !0,
                            size: F,
                            children:
                              e.icon ?? (0, a.jsx)(y.I, { className: "text-secondary", "aria-hidden": !1, asset: r.k }),
                          }),
                          label: e.title,
                          searchAnchor: e.searchEntry?.id,
                        },
                        e.id,
                      )
                    : (0, a.jsx)(
                        L,
                        {
                          anchored: !0,
                          iconSize: F,
                          installButtonLabel: D,
                          isPending: Z === e.plugin.plugin.id,
                          item: e,
                          onInstallPlugin: (s) => {
                            B(s, {
                              browserFamily: e.browserFamily,
                              hostId: O,
                              marketplaceAnalytics: v.F.settings,
                              onSuccess: R.reload,
                            })
                          },
                          onOpenPluginDetails: (e) => {
                            q((0, U.CL)(e, { hostId: O, breadcrumb: "settings" }))
                          },
                          onToggleInstalledPluginEnabled: (s, t) => {
                            H({ pluginId: s.plugin.id, pluginDisplayName: e.displayName ?? (0, u.V)(s), enabled: t })
                          },
                          onUninstallPlugin: (e) => {
                            Q({
                              marketplaceName: e.marketplaceName,
                              pluginDisplayName: (0, u.V)(e),
                              pluginId: e.plugin.id,
                              pluginName: e.plugin.name,
                              requestPluginId: (0, m.RQ)(e),
                            })
                          },
                        },
                        e.id ?? e.plugin.plugin.id,
                      )),
            (b[22] = F),
            (b[23] = D),
            (b[24] = B),
            (b[25] = q),
            (b[26] = Z),
            (b[27] = R.reload),
            (b[28] = O),
            (b[29] = H),
            (b[30] = Q),
            (b[31] = e))
          : (e = b[31]),
          (c = T.map(e)),
          (b[11] = F),
          (b[12] = D),
          (b[13] = B),
          (b[14] = T),
          (b[15] = q),
          (b[16] = Z),
          (b[17] = R.reload),
          (b[18] = O),
          (b[19] = H),
          (b[20] = Q),
          (b[21] = c))
      } else c = b[21]
      if (b[32] !== F || b[33] !== z) {
        let e
        ;(b[35] !== F
          ? ((e = (e) => (0, a.jsx)(I, { iconSize: F, item: e }, e.id)), (b[35] = F), (b[36] = e))
          : (e = b[36]),
          (p = z.map(e)),
          (b[32] = F),
          (b[33] = z),
          (b[34] = p))
      } else p = b[34]
      return (
        b[37] !== c || b[38] !== p
          ? ((f = (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(N.t, { children: [c, p] }) })),
            (b[37] = c),
            (b[38] = p),
            (b[39] = f))
          : (f = b[39]),
        f
      )
    }
    function I(e) {
      let s,
        t,
        i,
        n = (0, l.c)(9),
        { iconSize: o, item: c } = e
      return (
        n[0] !== c.icon
          ? ((s = c.icon ?? (0, a.jsx)(y.I, { className: "text-secondary", "aria-hidden": !1, asset: r.k })),
            (n[0] = c.icon),
            (n[1] = s))
          : (s = n[1]),
        n[2] !== o || n[3] !== s
          ? ((t = (0, a.jsx)(P.v, { bordered: !0, size: o, children: s })), (n[2] = o), (n[3] = s), (n[4] = t))
          : (t = n[4]),
        n[5] !== c.description || n[6] !== c.title || n[7] !== t
          ? ((i = (0, a.jsx)(_.ic, {
              className: "opacity-60",
              label: c.title,
              description: c.description,
              icon: t,
              control: D,
            })),
            (n[5] = c.description),
            (n[6] = c.title),
            (n[7] = t),
            (n[8] = i))
          : (i = n[8]),
        i
      )
    }
    function D(e) {
      return (0, a.jsx)(A.l, { ...e, checked: !1, className: "disabled:opacity-100", disabled: !0, onChange: T })
    }
    function T() {}
    function L(e) {
      let s,
        t,
        o,
        m,
        h,
        j,
        v,
        M,
        U,
        C = (0, l.c)(41),
        {
          anchored: k,
          iconSize: N,
          installButtonLabel: E,
          isPending: I,
          item: D,
          onInstallPlugin: T,
          onOpenPluginDetails: L,
          onToggleInstalledPluginEnabled: R,
          onUninstallPlugin: O,
        } = e,
        W = (0, p.A)()
      C[0] !== D.displayName || C[1] !== D.plugin
        ? ((s = D.displayName ?? (0, u.V)(D.plugin)), (C[0] = D.displayName), (C[1] = D.plugin), (C[2] = s))
        : (s = C[2])
      let F = s,
        z = D.plugin.plugin.installed
      ;(C[3] !== E ||
      C[4] !== W ||
      C[5] !== z ||
      C[6] !== I ||
      C[7] !== D ||
      C[8] !== T ||
      C[9] !== R ||
      C[10] !== O ||
      C[11] !== F
        ? ((t = z
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  !0 === D.showManageActions
                    ? (0, a.jsx)("div", {
                        className:
                          "invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                        children: (0, a.jsxs)(b.Ab, {
                          align: "end",
                          contentWidth: "sm",
                          triggerButton: (0, a.jsx)(w.p, {
                            size: "toolbar",
                            label: W.formatMessage({
                              id: "settings.pluginControls.moreActions",
                              defaultMessage: "More actions",
                            }),
                          }),
                          children: [
                            null == D.onTryInChat
                              ? null
                              : (0, a.jsx)(b.ms.Item, {
                                  leftIconAsset: n.Z,
                                  onSelect: () => {
                                    D.onTryInChat?.(D.plugin)
                                  },
                                  children: (0, a.jsx)(g.A, {
                                    id: "settings.pluginControls.tryItNow",
                                    defaultMessage: "Try now",
                                  }),
                                }),
                            (0, a.jsx)(b.ms.Item, {
                              leftIconAsset: c.c,
                              className: "!text-danger",
                              leftIconClassName: "text-danger",
                              disabled: I,
                              onSelect: () => {
                                O(D.plugin)
                              },
                              children: (0, a.jsx)(g.A, {
                                id: "settings.pluginControls.delete",
                                defaultMessage: "Delete",
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                  !1 === D.showEnableToggle
                    ? null
                    : (0, a.jsx)(i.m, {
                        content: D.plugin.plugin.enabled
                          ? (0, a.jsx)(g.A, {
                              id: "settings.pluginControls.disableToggleTooltip",
                              defaultMessage: "Disable {pluginName}",
                              values: { pluginName: F },
                            })
                          : (0, a.jsx)(g.A, {
                              id: "settings.pluginControls.enableToggleTooltip",
                              defaultMessage: "Enable {pluginName}",
                              values: { pluginName: F },
                            }),
                        children: (0, a.jsx)(A.l, {
                          checked: D.plugin.plugin.enabled,
                          disabled: I,
                          ariaLabel: W.formatMessage(
                            { id: "settings.pluginControls.toggleAria", defaultMessage: "Toggle {pluginName}" },
                            { pluginName: F },
                          ),
                          onChange: (e) => {
                            R(D.plugin, e)
                          },
                        }),
                      }),
                ],
              })
            : (0, a.jsx)(i.m, {
                content: (0, a.jsx)(g.A, {
                  id: "settings.pluginControls.installTooltip",
                  defaultMessage: "Install {pluginName}",
                  values: { pluginName: F },
                }),
                children: (0, a.jsx)("div", {
                  children: (0, a.jsx)(x.$, {
                    "aria-label": W.formatMessage(
                      { id: "settings.pluginControls.installTooltip", defaultMessage: "Install {pluginName}" },
                      { pluginName: F },
                    ),
                    color: "secondary",
                    disabled: I,
                    loading: I,
                    onClick: () => {
                      T(D.plugin)
                    },
                    size: "toolbar",
                    children: E,
                  }),
                }),
              })),
          (C[3] = E),
          (C[4] = W),
          (C[5] = z),
          (C[6] = I),
          (C[7] = D),
          (C[8] = T),
          (C[9] = R),
          (C[10] = O),
          (C[11] = F),
          (C[12] = t))
        : (t = C[12]),
        C[13] !== D.action || C[14] !== t
          ? ((o = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
              children: [D.action, t],
            })),
            (C[13] = D.action),
            (C[14] = t),
            (C[15] = o))
          : (o = C[15]))
      let q = o
      C[16] !== D.description || C[17] !== D.descriptionIndicator
        ? ((m =
            null == D.descriptionIndicator || null == D.description
              ? D.description
              : (0, a.jsxs)("span", {
                  className: "inline-flex max-w-full items-center gap-2",
                  children: [
                    (0, a.jsx)("span", {
                      className: (0, d.A)(
                        "h-2 w-2 shrink-0 rounded-full",
                        "success" === D.descriptionIndicator
                          ? "bg-[var(--app-color-icon-success)]"
                          : "bg-[var(--app-color-icon-error)]",
                      ),
                    }),
                    (0, a.jsx)("span", { className: "min-w-0", children: D.description }),
                  ],
                })),
          (C[16] = D.description),
          (C[17] = D.descriptionIndicator),
          (C[18] = m))
        : (m = C[18])
      let B = !1 !== D.showIconBorder
      ;(C[19] !== D.icon || C[20] !== D.plugin.logoDarkPath || C[21] !== D.plugin.logoPath || C[22] !== F
        ? ((h =
            D.icon ??
            (0, a.jsx)(f.R, {
              alt: F,
              className: "h-full w-full object-contain",
              logoDarkUrl: D.plugin.logoDarkPath,
              logoUrl: D.plugin.logoPath,
              fallback: (0, a.jsx)(y.I, { className: "text-secondary", "aria-hidden": !1, asset: r.k }),
            })),
          (C[19] = D.icon),
          (C[20] = D.plugin.logoDarkPath),
          (C[21] = D.plugin.logoPath),
          (C[22] = F),
          (C[23] = h))
        : (h = C[23]),
        C[24] !== N || C[25] !== B || C[26] !== h
          ? ((j = (0, a.jsx)(P.v, { bordered: B, size: N, children: h })),
            (C[24] = N),
            (C[25] = B),
            (C[26] = h),
            (C[27] = j))
          : (j = C[27]),
        C[28] !== D.plugin || C[29] !== L
          ? ((v = () => L(D.plugin)), (C[28] = D.plugin), (C[29] = L), (C[30] = v))
          : (v = C[30]),
        C[31] !== q || C[32] !== D.title || C[33] !== m || C[34] !== j || C[35] !== v
          ? ((M = (0, a.jsx)(_.kG, {
              actions: q,
              edgeRounding: "none",
              wrapActions: !0,
              label: D.title,
              description: m,
              icon: j,
              onClick: v,
            })),
            (C[31] = q),
            (C[32] = D.title),
            (C[33] = m),
            (C[34] = j),
            (C[35] = v),
            (C[36] = M))
          : (M = C[36]))
      let G = M
      return (
        C[37] !== k || C[38] !== D.searchEntry || C[39] !== G
          ? ((U =
              k && null != D.searchEntry ? (0, a.jsx)(S.ek, { entry: D.searchEntry, anchored: !0, children: G }) : G),
            (C[37] = k),
            (C[38] = D.searchEntry),
            (C[39] = G),
            (C[40] = U))
          : (U = C[40]),
        U
      )
    }
  },
  wRsh(e, s, t) {
    var a = t("DBCl"),
      l = t("oszP"),
      i = t("RHhA")
    t.d(
      s,
      {},
      {
        N: function (e, s, t) {
          let n = e.filter((e) => e.plugin.name === s || e.plugin.id.split("@")[0] === s),
            o = (0, a.v3D)((0, i.t)())
          return (
            (null == o ? void 0 : n.find((e) => e.marketplaceName === o)) ??
            n.find((e) => (0, a.foP)(e.marketplaceName)) ??
            n.find((e) => "openai-curated" === e.marketplaceName) ??
            n.find((e) => (0, l.W9)(t, e.marketplacePath)) ??
            null
          )
        },
      },
    )
  },
  yLkT(e, s, t) {
    let a = (0, t("ESTr").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6257 2.30469C18.8374 2.30503 21.9216 6.88615 21.9216 11.0254C21.9215 12.7845 21.1877 14.5709 19.8923 15.6016C19.2023 16.1504 18.3817 16.459 17.4967 16.459C16.7049 16.459 15.8832 16.2131 15.0593 15.709C14.2555 16.3572 13.2769 16.8021 12.2306 16.8021C11.2525 16.8021 10.3076 16.4103 9.52802 15.6006L9.5124 15.585L8.98212 15.0254C8.67133 14.698 8.28105 14.2874 7.96162 13.9541C7.77577 13.7602 7.68342 13.5108 7.68342 13.2618C7.68342 12.9993 7.78604 12.7373 7.98994 12.541L8.27998 12.2607L7.11005 11.0537C6.96924 10.9082 6.89922 10.7202 6.89922 10.5324C6.89922 10.1179 7.23461 9.78236 7.64893 9.78236C7.84508 9.78236 8.04102 9.85877 8.18818 10.0107L9.36005 11.2217L11.5808 9.08398L10.4108 7.87695C10.27 7.73141 10.2 7.54346 10.2 7.35569C10.2 6.94116 10.5354 6.60561 10.9497 6.60561C11.1459 6.60561 11.3418 6.68201 11.489 6.83398L12.6608 8.04492C12.9809 7.73729 13.1873 7.47552 13.6557 7.47552C13.92 7.47552 14.1839 7.57957 14.3806 7.78613L15.945 9.42871C16.7005 10.2066 17.0634 11.1086 17.0634 12.0331C17.0634 12.9728 16.6913 13.8503 16.1354 14.5947C16.6442 14.8563 17.1006 14.959 17.4971 14.959C18.042 14.959 18.5348 14.765 18.9587 14.4277C19.8308 13.7338 20.4215 12.4183 20.4216 11.0254C20.4216 7.614 17.9118 3.80502 12.6257 3.80469C8.211 3.80469 4.39325 7.17775 4.09638 11.4287C4.0813 11.6447 4.07385 11.8592 4.07385 12.0718C4.07385 16.5377 7.36061 20.1942 12.2477 20.1943C14.1885 20.1943 16.1114 19.7093 17.4489 18.6738C17.5856 18.5681 17.7473 18.5169 17.9079 18.5169C18.3231 18.5169 18.6582 18.8523 18.6582 19.2655C18.6582 19.4901 18.5579 19.7124 18.3669 19.8604C16.6819 21.1647 14.3949 21.6943 12.2477 21.6943C6.47809 21.6942 2.57422 17.3134 2.57422 12.0689C2.57422 11.8224 2.58284 11.5741 2.60029 11.3242C2.95645 6.22419 7.48801 2.30469 12.6257 2.30469ZM9.38837 13.2773L10.571 14.5215L10.612 14.5645C11.1155 15.0854 11.6718 15.3017 12.2302 15.3017C12.2917 15.3017 12.3533 15.2991 12.4147 15.2939C13.0586 15.2401 13.7692 14.9031 14.4265 14.2705C15.0246 13.6947 15.5635 12.8942 15.5635 12.0337C15.5635 11.513 15.3636 10.9806 14.8659 10.4697L14.8591 10.4619L13.6403 9.18457L9.38837 13.2773Z" fill="currentColor"/>',
    })
    t.d(s, {}, { k: a })
  },
}
//# sourceMappingURL=721731.07541e9d01.js.map
