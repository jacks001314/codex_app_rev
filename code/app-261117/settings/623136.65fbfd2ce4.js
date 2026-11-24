export const __rspack_esm_ids = [623136]
export const __webpack_modules__ = {
  QnK7(e, t, s) {
    var l = s("ABep")
    ;(s("zd8w"),
      (t.A = (e) =>
        (0, l.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M10.6299 1.33496C12.0335 1.33496 13.2695 2.25996 13.666 3.60645L13.8809 4.33496H17L17.1338 4.34863C17.4369 4.41057 17.665 4.67858 17.665 5C17.665 5.32142 17.4369 5.58943 17.1338 5.65137L17 5.66504H16.6543L15.8574 14.9912C15.7177 16.629 14.3478 17.8877 12.7041 17.8877H7.2959C5.75502 17.8877 4.45439 16.7815 4.18262 15.2939L4.14258 14.9912L3.34668 5.66504H3C2.63273 5.66504 2.33496 5.36727 2.33496 5C2.33496 4.63273 2.63273 4.33496 3 4.33496H6.11914L6.33398 3.60645L6.41797 3.3584C6.88565 2.14747 8.05427 1.33496 9.37012 1.33496H10.6299ZM5.46777 14.8779L5.49121 15.0537C5.64881 15.9161 6.40256 16.5576 7.2959 16.5576H12.7041C13.6571 16.5576 14.4512 15.8275 14.5322 14.8779L15.3193 5.66504H4.68164L5.46777 14.8779ZM7.66797 12.8271V8.66016C7.66797 8.29299 7.96588 7.99528 8.33301 7.99512C8.70028 7.99512 8.99805 8.29289 8.99805 8.66016V12.8271C8.99779 13.1942 8.70012 13.4912 8.33301 13.4912C7.96604 13.491 7.66823 13.1941 7.66797 12.8271ZM11.002 12.8271V8.66016C11.002 8.29289 11.2997 7.99512 11.667 7.99512C12.0341 7.9953 12.332 8.293 12.332 8.66016V12.8271C12.3318 13.1941 12.0339 13.491 11.667 13.4912C11.2999 13.4912 11.0022 13.1942 11.002 12.8271ZM9.37012 2.66504C8.60726 2.66504 7.92938 3.13589 7.6582 3.83789L7.60938 3.98145L7.50586 4.33496H12.4941L12.3906 3.98145C12.1607 3.20084 11.4437 2.66504 10.6299 2.66504H9.37012Z",
          }),
        })))
  },
  IBgA(e, t, s) {
    var l = s("QosV"),
      a = s("irkb"),
      i = s("xSOA"),
      n = s("qmMi"),
      r = s("Qgfj"),
      o = s("Wf1j"),
      d = s("VVkm"),
      c = s("Dgwo"),
      u = s("HUHI"),
      p = s("OiCI"),
      m = s("SGsN"),
      g = s("B81s"),
      h = s("sLlu"),
      f = s("OWtl"),
      x = s("kfGJ"),
      b = s("WFY2")
    let y = (0, r.YK)({
      enableSuccess: { id: "apps.enable.success", defaultMessage: "{appName} app enabled" },
      disableSuccess: { id: "apps.disable.success", defaultMessage: "{appName} app disabled" },
      updateError: { id: "apps.update.error", defaultMessage: "Failed to update app" },
    })
    s.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            s,
            r,
            v,
            j,
            k,
            S,
            M,
            A = (0, l.c)(35),
            w = e?.hostId ?? x.fI,
            C = (0, n.gh)(f.u)
          ;(0, n.Ul)(p.vh)
          let P = (0, a.jE)(),
            I = (0, h.B)(),
            _ = (0, o.A)(),
            N
          A[0] !== w || A[1] !== N ? ((t = (0, u.iC)(w, N)), (A[0] = w), (A[1] = N), (A[2] = t)) : (t = A[2])
          let E = t
          A[3] !== E || A[4] !== w || A[5] !== I
            ? ((s = async () => {
                await Promise.all([
                  I((0, d.T9)(w)),
                  I(E),
                  I([...g.Sn, w]),
                  I([...g.tP, w]),
                  I(g.Kj),
                  I(["user-saved-config"]),
                ])
              }),
              (A[3] = E),
              (A[4] = w),
              (A[5] = I),
              (A[6] = s))
            : (s = A[6])
          let L = s
          ;(A[7] !== w || A[8] !== P || A[9] !== C
            ? ((r = async (e) => {
                let { appId: t, enabled: s } = e,
                  l = await (0, g.dG)(C, P, w)
                if (
                  "okOverridden" ===
                  (
                    await (0, c.V)(C, w).sendRequest("config/batchWrite", {
                      edits: (function ({ appId: e, enabled: t }) {
                        return [{ keyPath: `apps.${e}.enabled`, value: t, mergeStrategy: "upsert" }]
                      })({ appId: t, enabled: s }),
                      filePath: l?.filePath ?? null,
                      expectedVersion: l?.expectedVersion ?? null,
                      reloadUserConfig: !0,
                    })
                  ).status
                )
                  throw Error("App setting is overridden by project configuration")
              }),
              (A[7] = w),
              (A[8] = P),
              (A[9] = C),
              (A[10] = r))
            : (r = A[10]),
            A[11] !== E || A[12] !== P
              ? ((v = async (e) => {
                  let { appId: t, enabled: s } = e
                  await P.cancelQueries({ queryKey: E })
                  let l = P.getQueryData(E)
                  return (
                    l &&
                      P.setQueryData(
                        E,
                        l.map((e) => (e.id !== t || e.isEnabled === s ? e : { ...e, isEnabled: s })),
                      ),
                    { previousApps: l }
                  )
                }),
                (A[11] = E),
                (A[12] = P),
                (A[13] = v))
              : (v = A[13]),
            A[14] !== E || A[15] !== _ || A[16] !== I || A[17] !== P || A[18] !== C
              ? ((j = async (e, t, s) => {
                  let { appId: l, appName: a, enabled: i } = t
                  if (i && s?.previousApps?.find((e) => e.id === l)?.isEnabled === !1) {
                    await I(E)
                    let e = P.getQueryData(E)?.find((e) => e.id === l)
                    if (e?.isEnabled === !1) throw Error("App remains disabled after updating its configuration")
                  }
                  let n = a ?? P.getQueryData(E)?.find((e) => e.id === l)?.name ?? l
                  C.get(m.Id).success(_.formatMessage(i ? y.enableSuccess : y.disableSuccess, { appName: n }))
                }),
                (A[14] = E),
                (A[15] = _),
                (A[16] = I),
                (A[17] = P),
                (A[18] = C),
                (A[19] = j))
              : (j = A[19]),
            A[20] !== E || A[21] !== _ || A[22] !== P || A[23] !== C
              ? ((k = (e, t, s) => {
                  ;(b.v.error("Failed to update app enablement", { safe: {}, sensitive: { error: e } }),
                    C.get(m.Id).danger(_.formatMessage(y.updateError), {
                      errorAnalytics: { toastId: "appsAvailability.onError.updateError" },
                    }),
                    s?.previousApps && P.setQueryData(E, s.previousApps))
                }),
                (A[20] = E),
                (A[21] = _),
                (A[22] = P),
                (A[23] = C),
                (A[24] = k))
              : (k = A[24]),
            A[25] !== L || A[26] !== r || A[27] !== v || A[28] !== j || A[29] !== k
              ? ((S = { mutationFn: r, onMutate: v, onSuccess: j, onError: k, onSettled: L }),
                (A[25] = L),
                (A[26] = r),
                (A[27] = v),
                (A[28] = j),
                (A[29] = k),
                (A[30] = S))
              : (S = A[30]))
          let R = (0, i.n)(S),
            D = R.isPending ? (R.variables?.appId ?? null) : null
          return (
            A[31] !== R.isPending || A[32] !== R.mutateAsync || A[33] !== D
              ? ((M = { setAppEnabled: R.mutateAsync, isUpdating: R.isPending, updatingAppId: D }),
                (A[31] = R.isPending),
                (A[32] = R.mutateAsync),
                (A[33] = D),
                (A[34] = M))
              : (M = A[34]),
            M
          )
        },
      },
    )
  },
  xcgE(e, t, s) {
    var l = s("DBCl"),
      a = s("Qgfj"),
      i = s("H7Ld")
    let n = (0, a.zR)({ id: "settings.chronicle.history.pluginDisplayName", defaultMessage: "Computer History" }),
      r = (0, a.YK)({
        todayTasksPrompt: {
          id: "settings.chronicle.history.todayTasksPrompt",
          defaultMessage: "Give me a list of tasks I\u2019ve worked on today and their status",
        },
        standupPrompt: {
          id: "settings.chronicle.history.standupPrompt",
          defaultMessage: "Prepare a summary of what I did yesterday for standup",
        },
        findDocumentPrompt: {
          id: "settings.chronicle.history.findDocumentPrompt",
          defaultMessage: "Where can I find the proposal document I was looking for earlier today?",
        },
        followUpsPrompt: {
          id: "settings.chronicle.history.followUpsPrompt",
          defaultMessage: "Who contacted me today that I need to follow up with?",
        },
        roastBehaviorPrompt: {
          id: "settings.chronicle.history.roastBehaviorPrompt",
          defaultMessage: "Roast my computer behavior",
        },
        distractionsPrompt: {
          id: "settings.chronicle.history.distractionsPrompt",
          defaultMessage: "How often do I get distracted, and what usually pulls me off task?",
        },
        dailyFeedbackPrompt: {
          id: "settings.chronicle.history.dailyFeedbackPrompt",
          defaultMessage: "Give me feedback on how I operate day to day",
        },
        writingStylePrompt: {
          id: "settings.chronicle.history.writingStylePrompt",
          defaultMessage:
            "Analyse the writing samples you have from me and describe my writing style with examples and guidelines",
        },
        writingStyleSkillPrompt: {
          id: "settings.chronicle.history.writingStyleSkillPrompt",
          defaultMessage: "Create a reusable skill that writes like me",
        },
        keyboardShortcutsPrompt: {
          id: "settings.chronicle.history.keyboardShortcutsPrompt",
          defaultMessage: "What keyboard shortcuts do I use most? And which should I be using more?",
        },
        aiOpportunitiesPrompt: {
          id: "settings.chronicle.history.aiOpportunitiesPrompt",
          defaultMessage: "Where am I being ineffective, and what should I be using AI for instead?",
        },
        commonPhrasePrompt: {
          id: "settings.chronicle.history.commonPhrasePrompt",
          defaultMessage: "What is my most commonly used phrase?",
        },
        focusPatternsPrompt: {
          id: "settings.chronicle.history.focusPatternsPrompt",
          defaultMessage:
            "How do I split my time between focused work, switching tabs, and returning to unfinished tasks?",
        },
        resumeWorkPrompt: {
          id: "settings.chronicle.history.resumeWorkPrompt",
          defaultMessage: "What was I working on before my last break?",
        },
      })
    s.d(
      t,
      {},
      {
        bk: n,
        c5: function ({ intl: e, memoryFilePath: t, suggestion: s }) {
          return (0, i.KH)({
            defaultPrompt:
              "skill" === s.type
                ? e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedSkillPrompt",
                      defaultMessage:
                        'Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"',
                    },
                    { name: s.name, request: s.description, memoryFilePath: t, paragraphBreak: "\n\n" },
                  )
                : e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedAutomationPrompt",
                      defaultMessage:
                        'Create a new "{name}" automation based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"{paragraphBreak}Use my local timezone and a new chat for scheduled runs.',
                    },
                    { name: s.name, request: s.description, memoryFilePath: t, paragraphBreak: "\n\n" },
                  ),
            pluginDisplayName: e.formatMessage(n),
            pluginId: `${l.IW7}@${l.MY3}`,
          })
        },
        wg: function (e) {
          let t = Object.values(r),
            s = t[Math.floor(Math.random() * t.length)]
          if (null != s)
            return (0, i.KH)({
              defaultPrompt: e.formatMessage(s),
              pluginDisplayName: e.formatMessage(n),
              pluginId: `${l.IW7}@${l.MY3}`,
            })
        },
      },
    )
  },
  eP0O(e, t, s) {
    var l = s("QosV"),
      a = s("qmMi"),
      i = s("ndjw")
    function n(e) {
      let t,
        s = (0, l.c)(2)
      return (
        s[0] !== e ? ((t = null == e ? void 0 : { hostId: e }), (s[0] = e), (s[1] = t)) : (t = s[1]),
        (0, a._U)(i.d7, t)
      )
    }
    s.d(
      t,
      {},
      {
        A: n,
        m: function (e) {
          return n(e).data?.homeDirectory
        },
      },
    )
  },
  KMWy(e, t, s) {
    var l = s("DBCl")
    let a = (0, s("Nwp9").m3)(l.xis, {}, { coerceStoredValue: (e) => l.kke.parse(e) })
    s.d(
      t,
      {},
      {
        Mb: function (e, t, s) {
          let a,
            i = e.map((e) => l.A47[e].feature),
            n = [
              ...new Set(["fullscreen", "encrypted-media", ...(t ?? []), ...i, ...(s ? ["local-network-access"] : [])]),
            ]
          return (
            (a =
              null != t || i.length > 0
                ? n.map((e) => `${e} *`).join("; ")
                : s
                  ? "encrypted-media *; local-network-access"
                  : "encrypted-media *"),
            { frameFeatures: n, iframeAllow: a }
          )
        },
        gy: function (e, t) {
          return (t ? l.qfz.options : l.rRf).filter((t) => e.permissions?.[t] != null)
        },
        p9: a,
      },
    )
  },
  YZuZ(e, t, s) {
    var l = s("DBCl")
    let a = `${new URL(l.WaA).origin}/plugins/share`
    s.d(
      t,
      {},
      {
        I: function (e) {
          let t = (0, l.zAW)(e)
          return null != t && ((0, l.foP)(t) || t === l.hEe) ? `${a}/${e}` : null
        },
      },
    )
  },
  Ee6v(e, t, s) {
    var l = s("DBCl")
    s.d(
      t,
      {},
      {
        z: function ({ localVersion: e, shareContext: t }) {
          return null != e && t?.remotePluginId != null && null != t.remoteVersion && (0, l.rT6)(e, t.remoteVersion) > 0
        },
      },
    )
  },
  q2la(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("on57")
    s.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            s,
            n = (0, a.c)(5),
            { children: r, className: o } = e
          return (
            n[0] !== o ? ((t = (0, i.A)("flex items-center gap-2", o)), (n[0] = o), (n[1] = t)) : (t = n[1]),
            n[2] !== r || n[3] !== t
              ? ((s = (0, l.jsx)("div", { className: t, children: r })), (n[2] = r), (n[3] = t), (n[4] = s))
              : (s = n[4]),
            s
          )
        },
      },
    )
  },
  rdAJ(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("D7Ms"),
      n = s("qmMi"),
      r = s("oyxz"),
      o = s("Qgfj"),
      d = s("OXR4"),
      c = s("bqtn"),
      u = s("SGsN"),
      p = s("KMWy"),
      m = s("GaA7"),
      g = s("OWtl"),
      h = s("PEAD"),
      f = s("BSnr"),
      x = s("AWNZ"),
      b = s("QyE3"),
      y = s("ZEx5")
    let v = (0, n.i1)(g.u, ({ servers: e, plugin: t }, { get: s }) => {
        let l = s(p.p9),
          a = new Map(e.map(({ identity: e, name: t }) => [(0, i.EN)([e]), t]))
        if (null != t)
          for (let e of Object.values(l))
            for (let { identity: s, pluginIds: l } of e.owners)
              "hostId" in s && s.hostId === t.hostId && l.includes(t.pluginId) && a.set((0, i.EN)([s]), s.serverName)
        return Object.entries(l).flatMap(([e, t]) => {
          let s = t.owners.filter(({ identity: e }) => a.has((0, i.EN)([e])))
          return 0 === s.length
            ? []
            : [
                {
                  key: e,
                  partition: t.partition,
                  origin: t.origin,
                  names: new Set(
                    s.flatMap(({ identity: e }) => {
                      let t = a.get((0, i.EN)([e]))
                      return null == t ? [] : [t]
                    }),
                  ),
                  permissions: t.permissions,
                },
              ]
        })
      }),
      j = (0, n.vU)(g.u, (e) => ({
        queryKey: ["mcp-app-permission", e.origin, e.partition, e.permission],
        queryFn: async () => {
          if (m.appServices?.mcpAppSandbox == null) throw Error("App permissions are unavailable")
          return m.appServices.mcpAppSandbox.getPermissionSetting(e)
        },
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        retry: !1,
      })),
      k = (0, n.c4)(g.u, (e, { scope: t }) => ({
        mutationFn: async (s) => {
          if (m.appServices?.mcpAppSandbox == null) throw Error("App permissions are unavailable")
          let l = t.query.snapshot(j, e)
          await l.cancel()
          let a = await m.appServices.mcpAppSandbox.setPermissionSetting({ ...e, setting: s })
          ;(await l.cancel(), l.setData(a))
        },
        onError: () => {
          t.get(u.Id).danger(
            (0, l.jsx)(r.A, {
              id: "mcpApp.permissions.settings.saveFailed",
              defaultMessage: "Couldn't save this permission",
            }),
            { errorAnalytics: { toastId: "mcpApp.permissions.settings.saveFailed" } },
          )
        },
        retry: !1,
      }))
    function S(e) {
      let t,
        s,
        i,
        o = (0, a.c)(7),
        c = (0, n._U)(v, e)
      if (0 === c.length) return null
      if (
        (o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(r.A, { id: "mcpApp.permissions.settings.title", defaultMessage: "Device access" })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== c)
      ) {
        let e
        ;(o[3] !== c.length
          ? ((e = (e) => {
              let { key: t, partition: s, origin: a, names: i, permissions: n } = e
              return (0, l.jsxs)(
                f.X,
                {
                  children: [
                    c.length > 1 &&
                      (0, l.jsx)(f.X.Header, { title: (0, l.jsx)("h3", { children: [...i].join(", ") || a }) }),
                    (0, l.jsx)(y.t, {
                      children: n.map((e) =>
                        (0, l.jsx)(
                          M,
                          {
                            request: { partition: s, origin: a, permission: e },
                            showOrigin: c.length > 1 || i.size > 1,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                },
                t,
              )
            }),
            (o[3] = c.length),
            (o[4] = e))
          : (e = o[4]),
          (s = c.map(e)),
          (o[1] = c),
          (o[2] = s))
      } else s = o[2]
      return (o[5] !== s ? ((i = (0, l.jsx)(d.J, { title: t, children: s })), (o[5] = s), (o[6] = i)) : (i = o[6]), i)
    }
    function M(e) {
      let t,
        s,
        i,
        o,
        d,
        u = (0, a.c)(19),
        { request: p, showOrigin: m } = e,
        { data: g, isError: f, isPending: y } = (0, n._U)(j, p),
        { mutate: v, isPending: S } = (0, n._U)(k, p),
        M = f ? void 0 : g
      u[0] !== M?.setting
        ? ((t = A.unavailable),
          M?.setting === "allow"
            ? (t = A.allow)
            : M?.setting === "block"
              ? (t = A.block)
              : M?.setting === "ask" && (t = A.ask),
          (u[0] = M?.setting),
          (u[1] = t))
        : (t = u[1])
      let w = null != M && "preference" !== M.source && "default" !== M.source,
        C = h.nk[p.permission]
      return (
        u[2] !== C ? ((s = (0, l.jsx)(r.A, { ...C })), (u[2] = C), (u[3] = s)) : (s = u[3]),
        u[4] !== w || u[5] !== p.origin || u[6] !== m
          ? ((i =
              (m || w) &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  m && (0, l.jsx)("div", { children: p.origin }),
                  w &&
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)(r.A, {
                        id: "mcpApp.permissions.settings.managed",
                        defaultMessage: "Managed by your browser or organization",
                      }),
                    }),
                ],
              })),
            (u[4] = w),
            (u[5] = p.origin),
            (u[6] = m),
            (u[7] = i))
          : (i = u[7]),
        u[8] !== M || u[9] !== y || u[10] !== S || u[11] !== w || u[12] !== v || u[13] !== t
          ? ((o = (e) =>
              (0, l.jsxs)(c.Ab, {
                matchTriggerWidth: !0,
                triggerButton: (0, l.jsx)(b.vg, {
                  ...e,
                  disabled: y || S || w || null == M,
                  "aria-busy": y || S,
                  children: (0, l.jsx)(r.A, { ...(y ? A.loading : t) }),
                }),
                children: [
                  (0, l.jsx)(c.ms.Item, { onSelect: () => v("allow"), children: (0, l.jsx)(r.A, { ...A.allow }) }),
                  (0, l.jsx)(c.ms.Item, { onSelect: () => v("block"), children: (0, l.jsx)(r.A, { ...A.block }) }),
                  (0, l.jsx)(c.ms.Item, { onSelect: () => v("default"), children: (0, l.jsx)(r.A, { ...A.reset }) }),
                ],
              })),
            (u[8] = M),
            (u[9] = y),
            (u[10] = S),
            (u[11] = w),
            (u[12] = v),
            (u[13] = t),
            (u[14] = o))
          : (o = u[14]),
        u[15] !== s || u[16] !== i || u[17] !== o
          ? ((d = (0, l.jsx)(x.ic, { label: s, description: i, control: o })),
            (u[15] = s),
            (u[16] = i),
            (u[17] = o),
            (u[18] = d))
          : (d = u[18]),
        d
      )
    }
    let A = (0, o.YK)({
      allow: { id: "mcpApp.permissions.allow", defaultMessage: "Allow" },
      block: { id: "mcpApp.permissions.block", defaultMessage: "Block" },
      ask: { id: "mcpApp.permissions.ask", defaultMessage: "Ask" },
      reset: { id: "mcpApp.permissions.reset", defaultMessage: "Reset" },
      loading: { id: "mcpApp.permissions.loading", defaultMessage: "Loading\u2026" },
      unavailable: { id: "mcpApp.permissions.unavailable", defaultMessage: "Unavailable" },
    })
    s.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            s = (0, a.c)(2)
          return (
            s[0] !== e
              ? ((t = (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(S, { ...e }) })), (s[0] = e), (s[1] = t))
              : (t = s[1]),
            t
          )
        },
      },
    )
  },
  oFmV(e, t, s) {
    let l = (0, s("zd8w").createContext)(null)
    s.d(t, {}, { S: l })
  },
  PEAD(e, t, s) {
    var l = s("DBCl"),
      a = s("Qgfj")
    let i = (0, a.YK)({
        camera: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.camera", defaultMessage: "Camera" },
        microphone: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.microphone",
          defaultMessage: "Microphone",
        },
        geolocation: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.location",
          defaultMessage: "Location",
        },
        clipboardWrite: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.clipboard",
          defaultMessage: "Clipboard",
        },
        localNetwork: { id: "mcpApp.permissions.localNetwork", defaultMessage: "Local network" },
        loopbackNetwork: { id: "mcpApp.permissions.loopbackNetwork", defaultMessage: "Apps on device" },
      }),
      n = (0, a.YK)({
        camera: i.camera,
        microphone: i.microphone,
        location: i.geolocation,
        clipboard: i.clipboardWrite,
        localNetwork: i.localNetwork,
        loopbackNetwork: i.loopbackNetwork,
        ads: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.ads", defaultMessage: "Intrusive ads" },
        automaticDownloads: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.automaticDownloads",
          defaultMessage: "Automatic downloads",
        },
        backgroundSync: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.backgroundSync",
          defaultMessage: "Background sync",
        },
        cookies: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.cookies",
          defaultMessage: "Third-party cookies",
        },
        federatedIdentityApi: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.embeddedContent",
          defaultMessage: "Embedded content",
        },
        images: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.images", defaultMessage: "Images" },
        javascript: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.javascript",
          defaultMessage: "JavaScript",
        },
        notifications: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.notifications",
          defaultMessage: "Notifications",
        },
        popups: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.popups",
          defaultMessage: "Pop-ups and redirects",
        },
        handlers: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.handlers",
          defaultMessage: "Protocol handlers",
        },
        protectedContent: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.protectedContent",
          defaultMessage: "Protected content IDs",
        },
        sound: { id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.sound", defaultMessage: "Sound" },
        usbDevices: {
          id: "settings.browserUse.browserSettings.breadcrumb.siteSettings.usbDevices",
          defaultMessage: "USB devices",
        },
      })
    s.d(
      t,
      {},
      {
        V6: function () {
          return Object.entries(n).map(([e, t]) => ({
            section: "browser-use",
            id: `browser-site-${e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}`,
            path: `${l.zJM}/${e}`,
            title: t,
          }))
        },
        YJ: function (e) {
          let t = e
          return (
            "geolocation" === e ? (t = "location") : "embeddedContent" === e && (t = "federatedIdentityApi"),
            Object.entries(n).find(([e]) => e === t)?.[1] ?? null
          )
        },
        nk: i,
      },
    )
  },
  ZJfA(e, t, s) {
    var l = s("Qgfj")
    let a = {
      section: "mcp-settings",
      id: "mcp-server-manager",
      title: (0, s("Y6nA").G)("mcp-settings"),
      description: (0, l.zR)({
        id: "settings.section.mcp-settings.subtitle",
        defaultMessage: "Connect external tools and data sources",
      }),
    }
    s.d(t, {}, { $: a })
  },
  pjIx(e, t, s) {
    let l = (0, s("Qgfj").YK)({
      codexInstructionsNavTitle: { id: "settings.personalization.instructions.codex", defaultMessage: "Codex" },
      dotDescription: {
        id: "settings.personalization.instructions.dotDescription",
        defaultMessage: "Tell your {dot} what to prioritize and how to work with you",
      },
      instructionsPlaceholder: {
        id: "settings.personalization.agents.placeholder",
        defaultMessage: "Add your custom instructions\u2026",
      },
      localCustomInstructions: { id: "settings.personalization.agents.title", defaultMessage: "Codex instructions" },
      customInstructions: {
        id: "settings.personalization.instructions.accountTitle",
        defaultMessage: "Custom instructions",
      },
      agentsMd: { id: "settings.personalization.agents.fileTitle", defaultMessage: "AGENTS.md" },
      loading: { id: "settings.personalization.loading", defaultMessage: "Loading personalization settings\u2026" },
      memory: { id: "settings.personalization.memory.title", defaultMessage: "Codex memory" },
      enableMemories: { id: "settings.memory.enableMemoriesLabel.host", defaultMessage: "Enable Codex memories" },
      allowMemoryGenerationFromToolAssistedTasks: {
        id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksLabel.host",
        defaultMessage: "Allow memories from tool-assisted chats",
      },
      resetMemories: { id: "settings.memory.resetMemoriesLabel.host", defaultMessage: "Delete Codex memories" },
    })
    s.d(t, {}, { i: l })
  },
  bXA4(e, t, s) {
    var l = s("qmMi"),
      a = s("Qgfj"),
      i = s("rO8L"),
      n = s("Gg2s"),
      r = s("OWtl")
    let o = {
        section: "plugins-settings",
        id: "browse-plugin-directory",
        title: (0, a.zR)({
          id: "settings.section.plugins-settings.browseDirectory",
          defaultMessage: "Browse directory",
        }),
      },
      d = {
        section: "skills-settings",
        id: "create-skill",
        title: (0, a.zR)({ id: "skills.page.createSkill", defaultMessage: "New skill" }),
      },
      c = (0, l.un)(r.u, ({ get: e }) => {
        let t = e(n.u9, "local", { enabled: !1 }).data
        return null == t || (0, i.W)(t) ? [] : [d]
      })
    s.d(t, {}, { AI: c, Am: d, k1: o })
  },
  ZS3G(e, t, s) {
    s.d(t, { PluginsSettings: () => t7 })
    var l = s("ABep"),
      a = s("QosV"),
      i = s("iRMi"),
      n = s("qmMi"),
      r = s("zd8w"),
      o = s("oyxz"),
      d = s("Ywss"),
      c = s("fzBE"),
      u = s("Sm6l"),
      p = s("Bbed"),
      m = s("QSWi"),
      g = s("JZ8t"),
      h = s("bXA4"),
      f = s("pO0d"),
      x = s("kfGJ"),
      b = s("irkb"),
      y = s("DBCl"),
      v = s("Haiv"),
      j = s("Wf1j"),
      k = s("Xjxo"),
      S = s("IBgA"),
      M = s("oxjR"),
      A = s("HUHI"),
      w = s("yxN2"),
      C = s("usf5"),
      P = s("YWcr"),
      I = s("MX6A"),
      _ = s("FrrB"),
      N = s("X6Vn"),
      E = s("okCa"),
      L = s("EShr"),
      R = s("SGsN"),
      D = s("GKsW"),
      U = s("IIEq"),
      T = s("jWaO"),
      O = s("eP0O"),
      H = s("yrds"),
      V = s("rO8L"),
      z = s("ibLK"),
      B = s("Vyeu"),
      W = s("T1PX"),
      F = s("Q8aV"),
      $ = s("YZuZ"),
      Q = s("oszP"),
      q = s("jEyg"),
      K = s("tlx5"),
      Y = s("IVVU"),
      G = s("H7Ld"),
      Z = s("dgqS"),
      J = s("YuLS"),
      X = s("Ee6v"),
      ee = s("dqiw"),
      et = s("YjEp"),
      es = s("cLdu"),
      el = s("Buqh"),
      ea = s("ueue"),
      ei = s("gBBC"),
      en = s("B81s"),
      er = s("OWtl"),
      eo = s("ndjw"),
      ed = s("jxU8"),
      ec = s("ecE5"),
      eu = s("slpy"),
      ep = s("RVZl"),
      em = s("ZOYk"),
      eg = s("ozCc"),
      eh = s("KUdL"),
      ef = s.n(eh),
      ex = s("nuXe"),
      eb = s.n(ex),
      ey = s("Dgwo"),
      ev = s("tl5a"),
      ej = s("V5rl"),
      ek = s("bqtn"),
      eS = s("Ot7V"),
      eM = s("HOLv"),
      eA = s("F0xz"),
      ew = s("TL6G"),
      eC = s("q2la"),
      eP = s("SZCv"),
      eI = s.n(eP)
    function e_(e, t) {
      return e instanceof Error && e.message.trim().length > 0 ? e.message : t
    }
    function eN(e) {
      return { ...e, stdio: { ...e.stdio, envVars: eE(e.stdio.envVars) } }
    }
    function eE(e) {
      return e.map((e) => e.trim()).filter((e) => e.length > 0)
    }
    function eL(e, t) {
      let s = e.base
      if ("streamable_http" === e.transportType) {
        let l = eD(e.http.httpHeaders, "http_headers", t?.httpHeaders),
          a = eD(e.http.envHttpHeaders, "env_http_headers", t?.envHttpHeaders)
        return {
          config: {
            ...s,
            url: e.http.url,
            auth: e.http.auth,
            oauth: e.http.oauth,
            scopes: e.http.scopes,
            oauth_resource: e.http.oauthResource,
            bearer_token_env_var: e.http.bearerTokenEnvVar.trim().length > 0 ? e.http.bearerTokenEnvVar.trim() : void 0,
            http_headers: l.record,
            env_http_headers: a.record,
          },
          duplicateKey: l.duplicateKey ?? a.duplicateKey,
        }
      }
      let l = eD(e.stdio.env, "env"),
        a = eE(e.stdio.envVars),
        i = e.stdio.args
      return {
        config: {
          ...s,
          command: e.stdio.command,
          args: i.length > 0 ? i : void 0,
          env: l.record,
          env_vars: a.length > 0 ? a : void 0,
          cwd: e.stdio.cwd.length > 0 ? e.stdio.cwd : void 0,
        },
        duplicateKey: l.duplicateKey,
      }
    }
    function eR(e) {
      let t = Object.entries(e)
      return 0 === t.length ? [{ key: "", value: "" }] : t.map(([e, t]) => ({ key: e, value: t }))
    }
    function eD(e, t, s) {
      let l,
        a = new Map(),
        i = new Set()
      return (
        e.forEach(({ key: e, value: s }, n) => {
          let r = "env" === t ? e : e.trim(),
            o = "env_http_headers" === t ? s.trim() : s
          if (0 === r.length || ("env_http_headers" === t && 0 === o.length)) return
          let d = "env" === t ? r : r.toLowerCase()
          ;(null == l && i.has(d) && (l = { field: t, index: n, key: r }), i.add(d), a.set(r, o))
        }),
        { record: a.size > 0 ? Object.fromEntries(a) : void 0, duplicateKey: eI()(e, s) ? void 0 : l }
      )
    }
    function eU(e, t) {
      let s = e
          .trim()
          .replace(/\s+/gu, "_")
          .replace(/[^a-zA-Z0-9-_]+/gu, "-")
          .replace(/-+/gu, "-"),
        l = s.length > 0 ? s.toLowerCase() : "custom-server"
      if (!t.includes(l)) return l
      let a = 2,
        i = `${l}-${a}`
      for (; t.includes(i);) ((a += 1), (i = `${l}-${a}`))
      return i
    }
    var eT = s("Qgfj")
    let eO = (0, eT.YK)({
      servers: { id: "settings.mcp.myServers", defaultMessage: "Servers" },
      noMatches: { id: "skills.appsPage.empty.mcps", defaultMessage: "No MCP servers found" },
      noServers: { id: "settings.mcp.empty", defaultMessage: "No MCP servers connected" },
      fromPlugins: { id: "settings.mcp.fromPlugins", defaultMessage: "From plugins" },
      autoShort: { id: "settings.mcp.server.clientRegistration.autoShort", defaultMessage: "Auto" },
      cimdShort: { id: "settings.mcp.server.clientRegistration.cimdShort", defaultMessage: "CIMD" },
      dcrShort: { id: "settings.mcp.server.clientRegistration.dcrShort", defaultMessage: "DCR" },
      auto: { id: "settings.mcp.server.clientRegistration.auto", defaultMessage: "Automatic" },
      cimd: { id: "settings.mcp.server.clientRegistration.cimd", defaultMessage: "Client ID metadata document (CIMD)" },
      dcr: { id: "settings.mcp.server.clientRegistration.dcr", defaultMessage: "Dynamic client registration (DCR)" },
      starting: { id: "settings.mcp.server.authenticationStarting", defaultMessage: "Starting\u2026" },
      authenticate: { id: "settings.mcp.server.login", defaultMessage: "Authenticate" },
      restartApp: { id: "settings.mcp.restartApp", defaultMessage: "Restart" },
      restartExtension: { id: "settings.mcp.restartExtension", defaultMessage: "Restart extension" },
      serverSettings: { id: "settings.mcp.server.settings", defaultMessage: "Settings" },
      registrationLabel: {
        id: "settings.mcp.server.clientRegistration.label",
        defaultMessage:
          "OAuth client registration: {strategy, select, auto {Automatic} cimd {CIMD} dcr {DCR} other {Automatic}}",
      },
      enable: { id: "settings.mcp.server.enable", defaultMessage: "Enable" },
      apps: { id: "settings.mcp.apps.title", defaultMessage: "MCP Apps" },
      appData: { id: "settings.mcp.apps.data.label", defaultMessage: "App data" },
      appDataDescription: {
        id: "settings.mcp.apps.data.description",
        defaultMessage: "Clear site data and cache from all MCP apps",
      },
      clearAppData: { id: "settings.mcp.apps.clearData", defaultMessage: "Clear all app data" },
    })
    var eH = s("GaA7"),
      eV = s("BSnr"),
      ez = s("AWNZ"),
      eB = s("ZEx5")
    function eW() {
      let e,
        t,
        s,
        i,
        d,
        c,
        p,
        m = (0, a.c)(12),
        g = (0, n.gh)(er.u),
        [h, f] = (0, r.useState)(!1),
        x = eH.appServices?.mcpAppSandbox
      if (null == x) return null
      m[0] !== h || m[1] !== g
        ? ((e = async () => {
            h ||
              (f(!0),
              await x
                .clearData()
                .then(() => {
                  g.get(R.Id).success(
                    (0, l.jsx)(o.A, {
                      id: "settings.mcp.apps.clearData.success",
                      defaultMessage: "MCP app data cleared",
                    }),
                  )
                })
                .catch(() => {
                  g.get(R.Id).danger(
                    (0, l.jsx)(o.A, {
                      id: "settings.mcp.apps.clearData.error",
                      defaultMessage: "Unable to clear MCP app data",
                    }),
                    { errorAnalytics: { toastId: "settings.mcp.apps.clearData.error" } },
                  )
                })
                .finally(() => {
                  f(!1)
                }))
          }),
          (m[0] = h),
          (m[1] = g),
          (m[2] = e))
        : (e = m[2])
      let b = e
      return (
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eV.X.Header, { title: (0, l.jsx)(o.A, { ...eO.apps }) })), (m[3] = t))
          : (t = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(o.A, { ...eO.appData })),
            (i = (0, l.jsx)(o.A, { ...eO.appDataDescription })),
            (m[4] = s),
            (m[5] = i))
          : ((s = m[4]), (i = m[5])),
        m[6] !== b ? ((d = () => void b()), (m[6] = b), (m[7] = d)) : (d = m[7]),
        m[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, l.jsx)(o.A, { ...eO.clearAppData })), (m[8] = c))
          : (c = m[8]),
        m[9] !== h || m[10] !== d
          ? ((p = (0, l.jsxs)(eV.X, {
              children: [
                t,
                (0, l.jsx)(eV.X.Content, {
                  children: (0, l.jsx)(eB.t, {
                    children: (0, l.jsx)(ez.ic, {
                      label: s,
                      description: i,
                      control: (0, l.jsx)(u.$, {
                        color: "secondary",
                        loading: h,
                        onClick: d,
                        size: "toolbar",
                        children: c,
                      }),
                    }),
                  }),
                }),
              ],
            })),
            (m[9] = h),
            (m[10] = d),
            (m[11] = p))
          : (p = m[11]),
        p
      )
    }
    var eF = s("cUQ9"),
      e$ = s("vjxO"),
      eQ = s("aTcy"),
      eq = s("P5dP"),
      eK = s("aQvR"),
      eY = s("zOE4"),
      eG = s("rdAJ"),
      eZ = s("UxN3"),
      eJ = s("zLIa"),
      eX = s("ukmp"),
      e0 = s("QnK7")
    function e1(e) {
      let t,
        s,
        i,
        n,
        o,
        d,
        c,
        p,
        m,
        g,
        h,
        f,
        x,
        b,
        y = (0, a.c)(56),
        v = e.inputType === eq.uY.String,
        k = e.inputType === eq.uY.Array,
        S = e.inputType === eq.uY.Record,
        M = S ? e.keyError : void 0,
        A = (0, r.useId)(),
        w = (0, j.A)()
      y[0] !== w
        ? ((t = w.formatMessage({ id: "settings.editRow.headerPlaceholder", defaultMessage: "Key" })),
          (y[0] = w),
          (y[1] = t))
        : (t = y[1])
      let C = t
      y[2] !== w
        ? ((s = w.formatMessage({ id: "settings.editRow.valuePlaceholder", defaultMessage: "Value" })),
          (y[2] = w),
          (y[3] = s))
        : (s = y[3])
      let P = s
      y[4] !== w
        ? ((i = w.formatMessage({ id: "settings.editRow.removeEntry", defaultMessage: "Remove entry" })),
          (y[4] = w),
          (y[5] = i))
        : (i = y[5])
      let I = i
      if (y[6] !== C || y[7] !== e.inputType || y[8] !== e.placeHolderValue || y[9] !== P) {
        if (((n = C), (o = P), e.inputType === eq.uY.Record)) {
          let [t] = e.placeHolderValue
          ;((n = t?.key ?? C), (o = t?.value ?? P))
        }
        ;((y[6] = C), (y[7] = e.inputType), (y[8] = e.placeHolderValue), (y[9] = P), (y[10] = n), (y[11] = o))
      } else ((n = y[10]), (o = y[11]))
      e: {
        let t
        if (!k) {
          let e
          ;(y[12] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (y[12] = e)) : (e = y[12]), (d = e))
          break e
        }
        if (e.value.length > 0) {
          d = e.value
          break e
        }
        ;(y[13] === Symbol.for("react.memo_cache_sentinel") ? ((t = [""]), (y[13] = t)) : (t = y[13]), (d = t))
      }
      let _ = d
      t: {
        let t
        if (!S) {
          let e
          ;(y[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (y[14] = e)) : (e = y[14]), (c = e))
          break t
        }
        if (e.value.length > 0) {
          c = e.value
          break t
        }
        ;(y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = [{ key: "", value: "" }]), (y[15] = t))
          : (t = y[15]),
          (c = t))
      }
      let N = c
      if (v) {
        let t, s, a, i
        y[16] !== e.title
          ? ((t = (0, l.jsx)("p", { className: "text-base font-medium text-default", children: e.title })),
            (y[16] = e.title),
            (y[17] = t))
          : (t = y[17])
        let n = v && "string" == typeof e.placeHolderValue ? e.placeHolderValue : void 0
        return (
          y[18] !== e
            ? ((s = (t) => {
                e.onEdit(t.target.value)
              }),
              (y[18] = e),
              (y[19] = s))
            : (s = y[19]),
          y[20] !== e.disabled || y[21] !== e.inputAriaLabel || y[22] !== e.value || y[23] !== n || y[24] !== s
            ? ((a = (0, l.jsx)(eJ.pd, {
                "aria-label": e.inputAriaLabel,
                disabled: e.disabled,
                value: e.value,
                placeholder: n,
                onChange: s,
              })),
              (y[20] = e.disabled),
              (y[21] = e.inputAriaLabel),
              (y[22] = e.value),
              (y[23] = n),
              (y[24] = s),
              (y[25] = a))
            : (a = y[25]),
          y[26] !== t || y[27] !== a
            ? ((i = (0, l.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-lg bg-primary-soft px-3 py-2",
                children: [t, a],
              })),
              (y[26] = t),
              (y[27] = a),
              (y[28] = i))
            : (i = y[28]),
          i
        )
      }
      ;(y[29] !== e.title
        ? ((p = (0, l.jsx)("p", { className: "text-base font-medium text-default", children: e.title })),
          (y[29] = e.title),
          (y[30] = p))
        : (p = y[30]),
        y[31] !== k ||
        y[32] !== M ||
        y[33] !== A ||
        y[34] !== _ ||
        y[35] !== e ||
        y[36] !== N ||
        y[37] !== n ||
        y[38] !== o ||
        y[39] !== I
          ? ((m = k
              ? _.map((t, s) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      children: [
                        (0, l.jsx)(eJ.pd, {
                          "aria-label": e.inputAriaLabel,
                          disabled: e.disabled,
                          value: t,
                          placeholder:
                            k && e.placeHolderValue.length > 0
                              ? (e.placeHolderValue[s] ?? e.placeHolderValue[0] ?? "")
                              : "",
                          onChange: (t) => {
                            let l = [..._]
                            ;((l[s] = t.target.value), e.onEdit(l))
                          },
                        }),
                        (0, l.jsx)(u.$, {
                          color: "ghost",
                          size: "icon",
                          disabled: e.disabled || 0 === e.value.length,
                          "aria-label": I,
                          onClick: () => {
                            let t = e.value.filter((e, t) => t !== s)
                            e.onEdit(t)
                          },
                          children: (0, l.jsx)(eZ.bF, {
                            "aria-hidden": !1,
                            asset16: e$.c,
                            legacyIcon: e0.A,
                            legacyClassName: "icon-2xs",
                          }),
                        }),
                      ],
                    },
                    `list-${s}`,
                  ),
                )
              : N.map((t, s) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className: "grid grid-cols-[1fr_1fr_auto] items-center gap-2",
                      children: [
                        (0, l.jsx)(eJ.pd, {
                          "aria-label": e.inputAriaLabel,
                          "aria-invalid": M?.index === s || void 0,
                          "aria-describedby": M?.index === s ? A : void 0,
                          disabled: e.disabled,
                          placeholder: n,
                          value: t.key,
                          onChange: (t) => {
                            let l = [...N],
                              a = l[s]
                            ;((l[s] = { ...a, key: t.target.value }), e.onEdit(l))
                          },
                        }),
                        (0, l.jsx)(eJ.pd, {
                          "aria-label": e.inputAriaLabel,
                          disabled: e.disabled,
                          placeholder: o,
                          value: t.value,
                          onChange: (t) => {
                            let l = [...N],
                              a = l[s]
                            ;((l[s] = { ...a, value: t.target.value }), e.onEdit(l))
                          },
                        }),
                        (0, l.jsx)(u.$, {
                          color: "ghost",
                          size: "icon",
                          disabled: e.disabled || 0 === e.value.length,
                          "aria-label": I,
                          onClick: () => {
                            let t = e.value.filter((e, t) => t !== s)
                            e.onEdit(t)
                          },
                          children: (0, l.jsx)(eZ.bF, {
                            "aria-hidden": !1,
                            asset16: e$.c,
                            legacyIcon: e0.A,
                            legacyClassName: "icon-2xs",
                          }),
                        }),
                        M?.index === s
                          ? (0, l.jsx)("p", {
                              id: A,
                              role: "alert",
                              className: "col-span-full text-sm text-danger",
                              children: M.message,
                            })
                          : null,
                      ],
                    },
                    `record-${s}`,
                  ),
                )),
            (y[31] = k),
            (y[32] = M),
            (y[33] = A),
            (y[34] = _),
            (y[35] = e),
            (y[36] = N),
            (y[37] = n),
            (y[38] = o),
            (y[39] = I),
            (y[40] = m))
          : (m = y[40]),
        y[41] !== m
          ? ((g = (0, l.jsx)("div", { className: "flex flex-col gap-2", children: m })), (y[41] = m), (y[42] = g))
          : (g = y[42]),
        y[43] !== k || y[44] !== e || y[45] !== N
          ? ((h = () => {
              if (k) {
                let t = e.value,
                  s = t.length > 0 ? [...t, ""] : [""]
                e.onEdit(s)
                return
              }
              let t = [...N, { key: "", value: "" }]
              e.onEdit(t)
            }),
            (y[43] = k),
            (y[44] = e),
            (y[45] = N),
            (y[46] = h))
          : (h = y[46]),
        y[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)(eZ.bF, {
              "aria-hidden": !1,
              legacyIcon: eX.A,
              asset16: eg.f,
              legacyClassName: "icon-2xs",
            })),
            (y[47] = f))
          : (f = y[47]))
      let E = e.addLabel ? e.addLabel : null
      return (
        y[48] !== e.disabled || y[49] !== E || y[50] !== h
          ? ((x = (0, l.jsxs)(u.$, {
              color: "secondary",
              radius: "small",
              size: "toolbar",
              className: "justify-center border border-dashed text-text-secondary/90",
              disabled: e.disabled,
              onClick: h,
              children: [f, E],
            })),
            (y[48] = e.disabled),
            (y[49] = E),
            (y[50] = h),
            (y[51] = x))
          : (x = y[51]),
        y[52] !== x || y[53] !== p || y[54] !== g
          ? ((b = (0, l.jsxs)("div", {
              className: "flex flex-col gap-3 rounded-lg bg-primary-soft px-3 py-2",
              children: [p, g, x],
            })),
            (y[52] = x),
            (y[53] = p),
            (y[54] = g),
            (y[55] = b))
          : (b = y[55]),
        b
      )
    }
    var e2 = s("SOLA")
    function e3(e) {
      var t
      let s,
        i,
        n,
        d,
        p,
        m,
        g,
        h,
        f,
        x,
        b,
        y,
        v,
        k,
        S,
        M,
        A,
        w,
        C,
        P,
        I,
        _,
        N,
        E,
        R = (0, a.c)(77),
        {
          config: D,
          initialKey: U,
          onSave: T,
          onCancel: O,
          onUninstall: H,
          embedded: V,
          serverIdentity: z,
          readOnly: B,
        } = e,
        W = void 0 !== V && V,
        F = void 0 !== B && B
      if (R[0] !== D || R[1] !== U) {
        let e
        ;((e = "command" in D ? "stdio" : "streamable_http"),
          (s = {
            base: {
              enabled: D.enabled ?? void 0,
              required: D.required,
              startup_timeout_sec: D.startup_timeout_sec ?? void 0,
              startup_timeout_ms: D.startup_timeout_ms ?? void 0,
              tool_timeout_sec: D.tool_timeout_sec ?? void 0,
              enabled_tools: D.enabled_tools ?? void 0,
              disabled_tools: D.disabled_tools ?? void 0,
            },
            label: U ?? D.name ?? "",
            transportType: e,
            stdio: {
              command: "command" in D ? D.command : "",
              args: "command" in D && D.args && D.args.length > 0 ? D.args : [],
              env: "command" in D && D.env ? eR(D.env) : [],
              envVars: "command" in D && D.env_vars && D.env_vars.length > 0 ? D.env_vars : [],
              cwd: "command" in D && D.cwd ? D.cwd : "",
            },
            http: {
              url: "url" in D ? D.url : "",
              auth: "url" in D ? D.auth : void 0,
              oauth: "url" in D ? D.oauth : void 0,
              scopes: "url" in D ? D.scopes : void 0,
              oauthResource: "url" in D ? D.oauth_resource : void 0,
              bearerTokenEnvVar: "url" in D && D.bearer_token_env_var ? D.bearer_token_env_var : "",
              httpHeaders: "url" in D && D.http_headers ? eR(D.http_headers) : [],
              envHttpHeaders: "url" in D && D.env_http_headers ? eR(D.env_http_headers) : [],
            },
          }),
          (R[0] = D),
          (R[1] = U),
          (R[2] = s))
      } else s = R[2]
      let $ = s,
        [Q, q] = (0, r.useState)($),
        [K, Y] = (0, r.useState)(!1),
        [G, Z] = (0, r.useState)(null),
        J = (0, j.A)()
      R[3] !== Q.label ? ((i = Q.label.trim()), (R[3] = Q.label), (R[4] = i)) : (i = R[4])
      let X = i,
        { config: ee, duplicateKey: et } = eL(Q, null == U ? void 0 : $.http)
      R[5] !== Q || R[6] !== $ ? ((n = !eI()(eN($), eN(Q))), (R[5] = Q), (R[6] = $), (R[7] = n)) : (n = R[7])
      let es = n,
        el = (0, r.useId)(),
        ea = (0, r.useContext)(c.X)
      ;((0, e2.iv)(el, es),
        R[8] !== Q.http || R[9] !== Q.stdio || R[10] !== Q.transportType
          ? ((d =
              "streamable_http" === Q.transportType
                ? 0 === Q.http.url.trim().length
                : 0 === Q.stdio.command.trim().length),
            (R[8] = Q.http),
            (R[9] = Q.stdio),
            (R[10] = Q.transportType),
            (R[11] = d))
          : (d = R[11]))
      let ei = d,
        en = X.length > 0 && !ei && es && !K && null == et,
        er = async () => {
          en &&
            (Z(null),
            Y(!0),
            await (async () => {
              try {
                let e,
                  t,
                  s,
                  l =
                    ((e = new Map(Object.entries(eL($).config))),
                    (t = new Map(Object.entries(ee))),
                    (s = new Set(
                      [...new Set([...e.keys(), ...t.keys()])].filter((s) => !t.has(s) || !eI()(e.get(s), t.get(s))),
                    )),
                    eI()($.stdio.env, Q.stdio.env) || s.add("env"),
                    eI()($.http.httpHeaders, Q.http.httpHeaders) || s.add("http_headers"),
                    eI()($.http.envHttpHeaders, Q.http.envHttpHeaders) || s.add("env_http_headers"),
                    [...s])
                await T(ee, Q.label, l)
              } catch (e) {
                Z(
                  e_(
                    e,
                    J.formatMessage({
                      id: "settings.mcp.detail.saveError",
                      defaultMessage: "Could not save MCP server",
                    }),
                  ),
                )
              }
            })().finally(() => {
              Y(!1)
            }))
        }
      R[12] !== D.name ? ((p = D.name && D.name.trim().length > 0), (R[12] = D.name), (R[13] = p)) : (p = R[13])
      let eo = p
      R[14] !== Q.label || R[15] !== J || R[16] !== H
        ? ((m = async () => {
            H &&
              (Z(null),
              Y(!0),
              await (async () => {
                try {
                  await H(Q.label)
                } catch (e) {
                  Z(
                    e_(
                      e,
                      J.formatMessage({
                        id: "settings.mcp.detail.uninstallError",
                        defaultMessage: "Could not uninstall MCP server",
                      }),
                    ),
                  )
                }
              })().finally(() => {
                Y(!1)
              }))
          }),
          (R[14] = Q.label),
          (R[15] = J),
          (R[16] = H),
          (R[17] = m))
        : (m = R[17])
      let ec = m
      R[18] !== D.name || R[19] !== eo
        ? ((g = eo
            ? (0, l.jsx)(o.A, {
                id: "settings.mcp.detail.titleExisting",
                defaultMessage: "Update {name} MCP",
                values: {
                  name: (t = D.name)
                    ? 0 === t.trim().length
                      ? t
                      : t === t.toLowerCase()
                        ? `${t[0]?.toUpperCase() ?? ""}${t.slice(1)}`
                        : t
                    : "",
                },
              })
            : (0, l.jsx)(o.A, { id: "settings.mcp.detail.titleNew", defaultMessage: "Connect to a custom MCP" })),
          (R[18] = D.name),
          (R[19] = eo),
          (R[20] = g))
        : (g = R[20])
      let eu = g,
        ep =
          null == et
            ? void 0
            : {
                index: et.index,
                message: J.formatMessage(
                  {
                    id: "settings.mcp.detail.duplicateKey",
                    defaultMessage: "Rename or remove the duplicate key \u201C{key}\u201D",
                  },
                  { key: et.key },
                ),
              },
        em = (e) => (et?.field === e ? ep : void 0),
        eg = ed.P
      ;(R[21] !== O || R[22] !== ea ? ((h = () => ea(O)), (R[21] = O), (R[22] = ea), (R[23] = h)) : (h = R[23]),
        R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)(eM.I, { "aria-hidden": !1, asset: eF.z })),
            (x = (0, l.jsx)(o.A, { id: "settings.mcp.detail.back", defaultMessage: "Back" })),
            (R[24] = f),
            (R[25] = x))
          : ((f = R[24]), (x = R[25])),
        R[26] !== h
          ? ((b = (0, l.jsxs)(u.$, { color: "ghost", size: "toolbar", onClick: h, children: [f, x] })),
            (R[26] = h),
            (R[27] = b))
          : (b = R[27]),
        R[28] !== J || R[29] !== eo
          ? ((y = eo
              ? null
              : (0, l.jsxs)("a", {
                  className: "inline-flex items-center gap-1 text-sm text-secondary hover:text-default",
                  href: eQ.bt,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: e6,
                  "aria-label": J.formatMessage({
                    id: "settings.mcp.detail.docs",
                    defaultMessage: "Open MCP documentation",
                  }),
                  children: [
                    (0, l.jsx)(o.A, { id: "settings.mcp.detail.docs.link", defaultMessage: "Docs" }),
                    (0, l.jsx)(eK.g, { size: 12, href: eQ.bt }),
                  ],
                })),
            (R[28] = J),
            (R[29] = eo),
            (R[30] = y))
          : (y = R[30]),
        R[31] !== Q.label || R[32] !== ec || R[33] !== K || R[34] !== H || R[35] !== F
          ? ((v =
              !F && H && Q.label.trim().length > 0
                ? (0, l.jsxs)(u.$, {
                    color: "danger",
                    size: "toolbar",
                    disabled: K,
                    onClick: () => {
                      ec()
                    },
                    children: [
                      (0, l.jsx)(eM.I, { "aria-hidden": !1, asset: e$.c }),
                      (0, l.jsx)(o.A, { id: "settings.mcp.detail.uninstall", defaultMessage: "Uninstall" }),
                    ],
                  })
                : null),
            (R[31] = Q.label),
            (R[32] = ec),
            (R[33] = K),
            (R[34] = H),
            (R[35] = F),
            (R[36] = v))
          : (v = R[36]),
        R[37] !== K
          ? ((k = K ? (0, l.jsx)(eY.LoadingPage, { overlay: !0 }) : null), (R[37] = K), (R[38] = k))
          : (k = R[38]))
      let eh = eV.X,
        ef = eV.X
      R[39] !== Q.label || R[40] !== Q.transportType || R[41] !== J || R[42] !== eo
        ? ((S = eo
            ? (0, l.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, l.jsx)(o.A, {
                  id: "settings.mcp.detail.switchTransportNotice",
                  defaultMessage: "If you would like to switch MCP server type, please uninstall first.",
                }),
              })
            : (0, l.jsxs)(eB.t, {
                children: [
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.name", defaultMessage: "Name" }),
                    value: Q.label,
                    placeHolderValue: "MCP server name",
                    inputType: eq.uY.String,
                    onEdit: (e) => {
                      q((t) => ({ ...t, label: e }))
                    },
                  }),
                  (0, l.jsx)(ez.ic, {
                    description: (0, l.jsx)(o.A, {
                      id: "settings.mcp.type.help",
                      defaultMessage: "How the app connects to this MCP server",
                    }),
                    label: (0, l.jsx)(o.A, { id: "settings.mcp.detail.transport.label", defaultMessage: "Type" }),
                    control: (0, l.jsx)(L.T, {
                      ariaLabel: J.formatMessage({
                        id: "settings.mcp.detail.transport.ariaLabel",
                        defaultMessage: "MCP server type",
                      }),
                      options: [
                        {
                          id: "stdio",
                          label: (0, l.jsx)(o.A, {
                            id: "settings.mcp.detail.transport.stdio",
                            defaultMessage: "STDIO",
                          }),
                        },
                        {
                          id: "streamable_http",
                          label: (0, l.jsx)(o.A, {
                            id: "settings.mcp.detail.transport.http",
                            defaultMessage: "Streamable HTTP",
                          }),
                        },
                      ],
                      selectedId: Q.transportType,
                      size: "toolbar",
                      onSelect: (e) => {
                        q((t) => ({ ...t, transportType: e }))
                      },
                    }),
                  }),
                ],
              })),
          (R[39] = Q.label),
          (R[40] = Q.transportType),
          (R[41] = J),
          (R[42] = eo),
          (R[43] = S))
        : (S = R[43])
      let ex = eB.t,
        eb =
          "stdio" === Q.transportType
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.command", defaultMessage: "Command to launch" }),
                    value: Q.stdio.command,
                    placeHolderValue: "openai-dev-mcp serve-sqlite",
                    inputType: eq.uY.String,
                    onEdit: (e) => {
                      q((t) => ({ ...t, stdio: { ...t.stdio, command: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.args", defaultMessage: "Arguments" }),
                    value: Q.stdio.args,
                    placeHolderValue: [],
                    inputType: eq.uY.Array,
                    addLabel: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.addArgument",
                      defaultMessage: "Add argument",
                    }),
                    onEdit: (e) => {
                      q((t) => ({ ...t, stdio: { ...t.stdio, args: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.envVars",
                      defaultMessage: "Environment variables",
                    }),
                    value: Q.stdio.env,
                    keyError: em("env"),
                    placeHolderValue: [],
                    inputType: eq.uY.Record,
                    addLabel: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.addEnvVar",
                      defaultMessage: "Add environment variable",
                    }),
                    onEdit: (e) => {
                      q((t) => ({ ...t, stdio: { ...t.stdio, env: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.envVarPassthrough",
                      defaultMessage: "Environment variable passthrough",
                    }),
                    value: Q.stdio.envVars,
                    placeHolderValue: [],
                    inputType: eq.uY.Array,
                    addLabel: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.addEnvVarPassthrough",
                      defaultMessage: "Add variable",
                    }),
                    onEdit: (e) => {
                      q((t) => ({ ...t, stdio: { ...t.stdio, envVars: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.cwd", defaultMessage: "Working directory" }),
                    value: Q.stdio.cwd,
                    placeHolderValue: "~/code",
                    inputType: eq.uY.String,
                    onEdit: (e) => {
                      q((t) => ({ ...t, stdio: { ...t.stdio, cwd: e } }))
                    },
                  }),
                ],
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.http.url", defaultMessage: "URL" }),
                    value: Q.http.url,
                    placeHolderValue: "https://mcp.example.com/mcp",
                    inputType: eq.uY.String,
                    onEdit: (e) => {
                      q((t) => ({ ...t, http: { ...t.http, url: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.http.bearerToken",
                      defaultMessage: "Bearer token env var",
                    }),
                    value: Q.http.bearerTokenEnvVar,
                    placeHolderValue: "MCP_BEARER_TOKEN",
                    inputType: eq.uY.String,
                    onEdit: (e) => {
                      q((t) => ({ ...t, http: { ...t.http, bearerTokenEnvVar: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, { id: "settings.mcp.detail.http.headers", defaultMessage: "Headers" }),
                    value: Q.http.httpHeaders,
                    keyError: em("http_headers"),
                    placeHolderValue: [],
                    inputType: eq.uY.Record,
                    addLabel: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.http.addHeader",
                      defaultMessage: "Add header",
                    }),
                    onEdit: (e) => {
                      q((t) => ({ ...t, http: { ...t.http, httpHeaders: e } }))
                    },
                  }),
                  (0, l.jsx)(e1, {
                    title: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.http.envHeaders",
                      defaultMessage: "Headers from environment variables",
                    }),
                    value: Q.http.envHttpHeaders,
                    keyError: em("env_http_headers"),
                    placeHolderValue: [],
                    inputType: eq.uY.Record,
                    addLabel: (0, l.jsx)(o.A, {
                      id: "settings.mcp.detail.http.addEnvHeader",
                      defaultMessage: "Add variable",
                    }),
                    onEdit: (e) => {
                      q((t) => ({ ...t, http: { ...t.http, envHttpHeaders: e } }))
                    },
                  }),
                ],
              })
      ;(R[44] !== ex || R[45] !== eb
        ? ((M = (0, l.jsx)(ex, { children: eb })), (R[44] = ex), (R[45] = eb), (R[46] = M))
        : (M = R[46]),
        R[47] !== G
          ? ((A =
              null != G
                ? (0, l.jsx)("p", {
                    role: "alert",
                    className: "rounded-md bg-background-danger-surface/20 px-3 py-2 text-sm text-danger",
                    children: G,
                  })
                : null),
            (R[47] = G),
            (R[48] = A))
          : (A = R[48]))
      let ey = !en
      return (
        R[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, l.jsx)(o.A, { id: "settings.mcp.detail.save", defaultMessage: "Save" })), (R[49] = w))
          : (w = R[49]),
        R[50] !== er || R[51] !== ey
          ? ((C = (0, l.jsx)("div", {
              className: "flex justify-end",
              children: (0, l.jsx)(u.$, { color: "primary", size: "toolbar", disabled: ey, onClick: er, children: w }),
            })),
            (R[50] = er),
            (R[51] = ey),
            (R[52] = C))
          : (C = R[52]),
        R[53] !== ef.Content || R[54] !== S || R[55] !== M || R[56] !== A || R[57] !== C
          ? ((P = (0, l.jsxs)(ef.Content, { children: [S, M, A, C] })),
            (R[53] = ef.Content),
            (R[54] = S),
            (R[55] = M),
            (R[56] = A),
            (R[57] = C),
            (R[58] = P))
          : (P = R[58]),
        R[59] !== eh || R[60] !== P
          ? ((I = (0, l.jsx)(eh, { children: P })), (R[59] = eh), (R[60] = P), (R[61] = I))
          : (I = R[61]),
        R[62] !== F || R[63] !== k || R[64] !== I
          ? ((_ = (0, l.jsxs)("fieldset", { className: "relative", disabled: F, children: [k, I] })),
            (R[62] = F),
            (R[63] = k),
            (R[64] = I),
            (R[65] = _))
          : (_ = R[65]),
        R[66] !== z
          ? ((N = null != z && (0, l.jsx)(eG.W, { servers: [{ identity: z }] })), (R[66] = z), (R[67] = N))
          : (N = R[67]),
        R[68] !== eg ||
        R[69] !== W ||
        R[70] !== b ||
        R[71] !== y ||
        R[72] !== v ||
        R[73] !== _ ||
        R[74] !== N ||
        R[75] !== eu
          ? ((E = (0, l.jsxs)(eg, {
              embedded: W,
              fullWidth: W,
              backSlot: b,
              title: eu,
              subtitle: y,
              action: v,
              children: [_, N],
            })),
            (R[68] = eg),
            (R[69] = W),
            (R[70] = b),
            (R[71] = y),
            (R[72] = v),
            (R[73] = _),
            (R[74] = N),
            (R[75] = eu),
            (R[76] = E))
          : (E = R[76]),
        E
      )
    }
    function e6(e) {
      ;(0, eS.PQ)({ event: e, href: eQ.bt, initiator: "open_in_browser_bridge" })
    }
    var e4 = s("odCE"),
      e5 = s("QyE3"),
      e7 = s("WFY2")
    let e9 = { command: "", args: [], env_vars: [], enabled: !0 }
    function e8(e) {
      let t,
        s,
        i,
        d,
        c,
        p,
        m,
        g,
        h,
        f,
        x,
        v,
        k,
        S,
        M,
        A,
        w,
        C,
        P,
        I,
        _,
        N,
        E,
        L,
        D,
        U,
        T,
        O = (0, a.c)(67),
        { creation: H, cwd: V, hostId: z, searchQuery: B, useActiveWorkspaceRoot: W } = e,
        F = (0, n.gh)(er.u),
        $ = H?.isAdding ?? !1
      O[0] !== z || O[1] !== W
        ? ((t = { hostId: z, useActiveWorkspaceRoot: W }), (O[0] = z), (O[1] = W), (O[2] = t))
        : (t = O[2])
      let { data: Q, isPending: q } = (0, en.oJ)(V, t),
        { data: K, isFetching: Y, isPending: G } = (0, n._U)(en.lt, z)
      O[3] !== z ? ((s = { hostId: z }), (O[3] = z), (O[4] = s)) : (s = O[4])
      let Z = (0, en.E7)(s)
      O[5] !== z ? ((i = { hostId: z }), (O[5] = z), (O[6] = i)) : (i = O[6])
      let J = (0, en.DH)(i),
        X = (0, b.jE)(),
        ee = (0, j.A)(),
        et = (0, n.Ul)(ev.YT),
        es = (0, n._U)(ev.B0, z)
      O[7] === Symbol.for("react.memo_cache_sentinel") ? ((d = {}), (O[7] = d)) : (d = O[7])
      let [el, ea] = (0, r.useState)(d)
      O[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (O[8] = c)) : (c = O[8])
      let [ei, eo] = (0, r.useState)(c)
      O[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = {}), (O[9] = p)) : (p = O[9])
      let [ed, ec] = (0, r.useState)(p),
        [em, eg] = (0, r.useState)(null),
        eh = $ ? null : (em?.key ?? null),
        ex = (0, r.useRef)(null)
      ;(O[10] !== em || O[11] !== $
        ? ((m = () => (
            (ex.current = null != em || $ ? Symbol() : null),
            () => {
              ex.current = null
            }
          )),
          (g = [em, $]),
          (O[10] = em),
          (O[11] = $),
          (O[12] = m),
          (O[13] = g))
        : ((m = O[12]), (g = O[13])),
        (0, r.useLayoutEffect)(m, g),
        O[14] !== es
          ? ((h = "0.0.0" === es || (null != es && (0, y.DE9)(es) && (0, y.rT6)(es, "0.148.0-alpha.9") >= 0)),
            (O[14] = es),
            (O[15] = h))
          : (h = O[15]))
      let ek = h
      O[16] !== Q?.servers ? ((f = Q?.servers ?? {}), (O[16] = Q?.servers), (O[17] = f)) : (f = O[17])
      let eA = f
      O[18] !== Q?.serverOrigins ? ((x = Q?.serverOrigins ?? {}), (O[18] = Q?.serverOrigins), (O[19] = x)) : (x = O[19])
      let eC = x,
        eP = Q?.configWriteTarget ?? null,
        eI = Object.entries(eA),
        e_ = eI.map(ti),
        eN = eI.filter(ta),
        eE = (void 0 === B ? "" : B).trim().toLowerCase(),
        eL = ef()(eN, tl, ts).filter((e) => {
          let [t, s] = e
          return 0 === eE.length || [t, s.name ?? t].some((e) => e.toLowerCase().includes(eE))
        }),
        eR = new Set(eI.flatMap(tt))
      O[20] !== z || O[21] !== ei ? ((v = ei.includes(z)), (O[20] = z), (O[21] = ei), (O[22] = v)) : (v = O[22])
      let eD = v
      O[23] !== eD || O[24] !== ed || O[25] !== z
        ? ((k = eD ? (ed[z] ?? []) : []), (O[23] = eD), (O[24] = ed), (O[25] = z), (O[26] = k))
        : (k = O[26])
      let eT = k,
        eH = null == Q ? [] : (K?.data ?? []),
        eF = ef()(
          eH.filter(
            (e) =>
              !(0, y.I1T)(e.name) &&
              !eR.has(e.name) &&
              !eT.includes(e.name) &&
              (0 === eE.length || e.name.toLowerCase().includes(eE)),
          ),
          te,
        ),
        e$ = eN.length > 0,
        eQ = eF.length > 0,
        eq = eE.length > 0 && 0 === eL.length && 0 === eF.length,
        eK = null == H && !eq && (e$ || eQ)
      O[27] !== ee ? ((S = ee.formatMessage(eO.restartApp)), (O[27] = ee), (O[28] = S)) : (S = O[28])
      let eY = S,
        eG = {}
      ;(null != K &&
        (K.data.forEach((e) => {
          eG[e.name] = e.authStatus
        }),
        eI.forEach((e) => {
          let [t, s] = e,
            l = eG[t] ?? (null == s.name ? void 0 : eG[s.name])
          null != l && (eG[t] = l)
        })),
        O[29] !== z
          ? ((M = () => {
              eo((e) => (e.includes(z) ? e : [...e, z]))
            }),
            (O[29] = z),
            (O[30] = M))
          : (M = O[30]))
      let eZ = M,
        eJ = () => {
          ;((ex.current = null), eg(null), H?.onClose())
        }
      O[31] !== eP || O[32] !== ee
        ? ((A = () => {
            if (null != eP) return eP.filePath
            throw Error(
              ee.formatMessage({
                id: "settings.mcp.noWritableConfig",
                defaultMessage: "MCP server settings are unavailable",
              }),
            )
          }),
          (O[31] = eP),
          (O[32] = ee),
          (O[33] = A))
        : (A = O[33])
      let eX = A
      O[34] !== eZ || O[35] !== J
        ? ((w = async (e, t) => {
            try {
              ;(await J.mutateAsync({ key: e, enabled: t }), eZ())
            } catch (e) {}
          }),
          (O[34] = eZ),
          (O[35] = J),
          (O[36] = w))
        : (w = O[36])
      let e0 = w
      O[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e) => {
            ea((t) => {
              let s = { ...t }
              return (delete s[e], s)
            })
          }),
          (O[37] = C))
        : (C = O[37])
      let e1 = C,
        e2 = async (e, t) => {
          if (!Y) {
            let t = eG[e]
            if (void 0 !== t && "notLoggedIn" !== t) return
          }
          let s = el[e]
          if (s)
            return void (0, eS.E0)({ href: s, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
          ea((t) => ({ ...t, [e]: null }))
          let a = (t) => {
            ;(e7.v.error("Failed to start login for MCP server", { safe: { serverName: e }, sensitive: { error: t } }),
              e1(e),
              F.get(R.Id).danger((0, l.jsx)(ej.f, { serverName: e }), {
                errorAnalytics: { toastId: "mcpServerManager.reportAuthenticationError" },
                id: `mcp-authentication-start-error:${JSON.stringify([z, e])}`,
              }))
          }
          try {
            let { authorizationUrl: s } = await (0, ey.V)(F, z).sendRequest("mcpServer/oauth/login", {
              name: e,
              ...(ek && "auto" !== t ? { clientRegistration: t } : {}),
            })
            if (0 === s.trim().length) return void a(Error("MCP OAuth login returned an empty authorization URL"))
            if (
              (ea((t) => ({ ...t, [e]: s })),
              !(0, eS.E0)({ href: s, initiator: "open_in_browser_bridge", openTarget: "external-browser" }))
            )
              return void a(Error("MCP OAuth login returned an invalid authorization URL"))
          } catch (e) {
            a(e)
          }
        }
      O[38] !== eZ || O[39] !== X
        ? ((P = (e, t) => {
            ;(e1(e), t && (eZ(), X.invalidateQueries({ queryKey: en.ey })))
          }),
          (O[38] = eZ),
          (O[39] = X),
          (O[40] = P))
        : (P = O[40])
      let e6 = (0, r.useEffectEvent)(P),
        e5 = (0, r.useRef)(!0)
      ;(O[41] !== e6 || O[42] !== z || O[43] !== et
        ? ((I = () => {
            if (e5.current) {
              e5.current = !1
              return
            }
            et?.hostId === z && e6(et.name, et.success)
          }),
          (O[41] = e6),
          (O[42] = z),
          (O[43] = et),
          (O[44] = I))
        : (I = O[44]),
        O[45] !== z || O[46] !== et ? ((_ = [et, z]), (O[45] = z), (O[46] = et), (O[47] = _)) : (_ = O[47]),
        (0, r.useEffect)(I, _),
        O[48] !== X
          ? ((N = (e) => {
              ;(eo((t) => t.filter((t) => t !== e.hostId)),
                ec((t) => {
                  let s = { ...t }
                  return (delete s[e.hostId], s)
                }),
                X.invalidateQueries({ queryKey: [...en.ey, e.hostId] }))
            }),
            (E = [X]),
            (O[48] = X),
            (O[49] = N),
            (O[50] = E))
          : ((N = O[49]), (E = O[50])),
        (0, ew.JX)("codex-app-server-initialized", N, E))
      let e8 = $ ? e9 : em?.config
      if (e8) {
        let e
        return (
          O[51] !== eh || O[52] !== z || O[53] !== Q
            ? ((e = null != eh && Q?.servers[eh] != null ? (0, en.cj)(z, eh, Q.layers) : void 0),
              (O[51] = eh),
              (O[52] = z),
              (O[53] = Q),
              (O[54] = e))
            : (e = O[54]),
          (0, l.jsx)(
            e3,
            {
              embedded: !0,
              config: e8,
              initialKey: eh,
              readOnly: null != eh && eC[eh]?.name.type === "project",
              serverIdentity: e,
              onCancel: eJ,
              onSave: async (e, t, s) => {
                let l = ex.current,
                  a = eh ?? eU(t, e_)
                try {
                  let t = await Z.mutateAsync({
                    filePath: eX(),
                    key: a,
                    value: e,
                    previousValue: null == eh ? void 0 : em?.config,
                    changedFields: s,
                  })
                  ;(null != t && eZ(), null != l && ex.current === l && eJ())
                } catch (e) {
                  throw (
                    e7.v.error("Failed to save MCP server", { safe: { targetKey: a }, sensitive: { error: e } }),
                    e
                  )
                }
              },
              onUninstall: eh
                ? async (e) => {
                    let t = ex.current,
                      s = eh ?? eU(e, e_)
                    try {
                      ;(await Z.mutateAsync({ filePath: eX(), key: s, value: null }),
                        ec((t) => ({ ...t, [z]: eb()([...(t[z] ?? []), s, e, eA[s]?.name ?? s]) })),
                        eZ(),
                        null != t && ex.current === t && eJ())
                    } catch (e) {
                      throw (
                        e7.v.error("Failed to uninstall MCP server", {
                          safe: { targetKey: s },
                          sensitive: { error: e },
                        }),
                        e
                      )
                    }
                  }
                : void 0,
            },
            eh ?? void 0,
          )
        )
      }
      O[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = () => {
            eg({ key: null, config: e9 })
          }),
          (O[55] = L))
        : (L = O[55])
      let to = L,
        td = null
      if (q || (G && 0 === eL.length)) {
        let e
        ;(O[56] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(e4.j, {})), (O[56] = e)) : (e = O[56]),
          (td = e))
      } else
        (eq || eL.length > 0 || (!e$ && !eQ)) &&
          (td = (0, l.jsx)(eB.t, {
            children:
              eL.length > 0
                ? eL.map((e) => {
                    let [t, s] = e
                    return (0, l.jsx)(
                      tn,
                      {
                        name: s.name ?? t,
                        statusLoading: Y,
                        enabled: !1 !== s.enabled,
                        authStatus: eG[t],
                        authenticationInProgress: Object.hasOwn(el, t),
                        authenticationPending: Object.hasOwn(el, t) && null == el[t],
                        onAuthenticateClicked: (e) => e2(t, e),
                        supportsOauthClientRegistration: ek,
                        onEnableClicked: (e) => e0(t, e),
                        onSettingsClicked: () => {
                          eg({ key: t, config: s })
                        },
                        isReadOnly: eC[t]?.name.type === "project",
                      },
                      t,
                    )
                  })
                : (0, l.jsx)(ez.ic, {
                    label: eq ? (0, l.jsx)(o.A, { ...eO.noMatches }) : (0, l.jsx)(o.A, { ...eO.noServers }),
                    control: eq || null != H ? null : (0, l.jsx)(tr, { onClick: to }),
                  }),
          }))
      O[57] !== eD || O[58] !== z || O[59] !== eY || O[60] !== td || O[61] !== eK
        ? ((D =
            null != td || eD || eK
              ? (0, l.jsxs)(eV.X, {
                  children: [
                    (0, l.jsx)(eV.X.Header, {
                      title: (0, l.jsx)(o.A, { ...eO.servers }),
                      actions:
                        (eD || eK) &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            eD
                              ? (0, l.jsx)(eu.m, {
                                  content: eY,
                                  children: (0, l.jsx)(u.$, {
                                    "aria-label": eY,
                                    color: "ghost",
                                    size: "icon",
                                    onClick: () => {
                                      ew.O1.dispatchMessage("codex-app-server-restart", {
                                        hostId: z,
                                        intent: "restart",
                                      })
                                    },
                                    children: (0, l.jsx)(eM.I, { "aria-hidden": !1, asset: ep.S }),
                                  }),
                                })
                              : null,
                            eK ? (0, l.jsx)(tr, { onClick: to }) : null,
                          ],
                        }),
                    }),
                    null != td ? (0, l.jsx)(eV.X.Content, { children: td }) : null,
                  ],
                })
              : null),
          (O[57] = eD),
          (O[58] = z),
          (O[59] = eY),
          (O[60] = td),
          (O[61] = eK),
          (O[62] = D))
        : (D = O[62])
      let tc =
        !eq && eQ
          ? (0, l.jsxs)(eV.X, {
              children: [
                (0, l.jsx)(eV.X.Header, { title: (0, l.jsx)(o.A, { ...eO.fromPlugins }) }),
                (0, l.jsx)(eV.X.Content, {
                  children: (0, l.jsx)(eB.t, {
                    children: eF.map((e) =>
                      (0, l.jsx)(
                        tn,
                        {
                          name: e.name,
                          statusLoading: Y,
                          authStatus: e.authStatus,
                          authenticationInProgress: Object.hasOwn(el, e.name),
                          authenticationPending: Object.hasOwn(el, e.name) && null == el[e.name],
                          onAuthenticateClicked: (t) => e2(e.name, t),
                          supportsOauthClientRegistration: ek,
                        },
                        e.name,
                      ),
                    ),
                  }),
                }),
              ],
            })
          : null
      return (
        O[63] === Symbol.for("react.memo_cache_sentinel") ? ((U = (0, l.jsx)(eW, {})), (O[63] = U)) : (U = O[63]),
        O[64] !== D || O[65] !== tc
          ? ((T = (0, l.jsxs)("div", { className: "flex flex-col gap-[var(--padding-panel)]", children: [D, tc, U] })),
            (O[64] = D),
            (O[65] = tc),
            (O[66] = T))
          : (T = O[66]),
        T
      )
    }
    function te(e) {
      return e.name
    }
    function tt(e) {
      let [t, s] = e
      return [t, s.name ?? t]
    }
    function ts(e) {
      let [t] = e
      return t
    }
    function tl(e) {
      let [t, s] = e
      return s.name?.trim() || t
    }
    function ta(e) {
      let [t] = e
      return !(0, y.I1T)(t)
    }
    function ti(e) {
      let [t] = e
      return t
    }
    function tn(e) {
      let t,
        s,
        i,
        n,
        d = (0, a.c)(21),
        {
          name: c,
          statusLoading: p,
          onAuthenticateClicked: m,
          authStatus: g,
          authenticationInProgress: h,
          authenticationPending: f,
          onEnableClicked: x,
          enabled: b,
          onSettingsClicked: y,
          isReadOnly: v,
          supportsOauthClientRegistration: k,
        } = e,
        S = (0, j.A)(),
        [M, A] = (0, r.useState)("auto"),
        w = !p && void 0 !== m && "notLoggedIn" === g,
        C = void 0 !== x || void 0 !== y || w
      d[0] !== S ? ((t = S.formatMessage(eO.serverSettings)), (d[0] = S), (d[1] = t)) : (t = d[1])
      let P = t
      return (
        d[2] !== c
          ? ((s = (0, l.jsx)("span", {
              className: "flex min-w-0 flex-col gap-0.5 text-sm",
              children: (0, l.jsx)("span", {
                className: "flex flex-wrap items-end gap-1",
                children: (0, l.jsx)("span", { className: "font-medium text-default", children: c }),
              }),
            })),
            (d[2] = c),
            (d[3] = s))
          : (s = d[3]),
        d[4] !== h ||
        d[5] !== f ||
        d[6] !== M ||
        d[7] !== b ||
        d[8] !== S ||
        d[9] !== v ||
        d[10] !== m ||
        d[11] !== x ||
        d[12] !== y ||
        d[13] !== P ||
        d[14] !== C ||
        d[15] !== w ||
        d[16] !== k
          ? ((i = C
              ? (0, l.jsxs)(eC.t, {
                  className: "max-sm:w-full max-sm:flex-wrap max-sm:justify-end",
                  children: [
                    w && k
                      ? (0, l.jsx)(ek.Ab, {
                          align: "end",
                          disabled: h,
                          triggerButton: (0, l.jsxs)(e5.vg, {
                            disabled: h,
                            "aria-label": S.formatMessage(eO.registrationLabel, { strategy: M }),
                            children: [
                              "auto" === M ? (0, l.jsx)(o.A, { ...eO.autoShort }) : null,
                              "cimd" === M ? (0, l.jsx)(o.A, { ...eO.cimdShort }) : null,
                              "dcr" === M ? (0, l.jsx)(o.A, { ...eO.dcrShort }) : null,
                            ],
                          }),
                          children: (0, l.jsxs)(ek.ms.RadioGroup, {
                            value: M,
                            children: [
                              (0, l.jsx)(ek.ms.RadioItem, {
                                value: "auto",
                                onSelect: () => A("auto"),
                                children: (0, l.jsx)(o.A, { ...eO.auto }),
                              }),
                              (0, l.jsx)(ek.ms.RadioItem, {
                                value: "cimd",
                                onSelect: () => A("cimd"),
                                children: (0, l.jsx)(o.A, { ...eO.cimd }),
                              }),
                              (0, l.jsx)(ek.ms.RadioItem, {
                                value: "dcr",
                                onSelect: () => A("dcr"),
                                children: (0, l.jsx)(o.A, { ...eO.dcr }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    w
                      ? (0, l.jsx)(u.$, {
                          color: "outline",
                          disabled: f,
                          size: "toolbar",
                          onClick: () => {
                            m(M)
                          },
                          children: f ? (0, l.jsx)(o.A, { ...eO.starting }) : (0, l.jsx)(o.A, { ...eO.authenticate }),
                        })
                      : null,
                    y
                      ? (0, l.jsx)(eu.m, {
                          content: P,
                          children: (0, l.jsx)(u.$, {
                            color: "ghost",
                            size: "toolbar",
                            uniform: !0,
                            onClick: y,
                            "aria-label": P,
                            children: (0, l.jsx)(eM.I, { "aria-hidden": !1, asset: em.T }),
                          }),
                        })
                      : null,
                    x
                      ? (0, l.jsx)(eA.l, {
                          disabled: !0 === v,
                          checked: !0 === b,
                          onChange: (e) => {
                            x(e)
                          },
                          ariaLabel: S.formatMessage(eO.enable),
                        })
                      : null,
                  ],
                })
              : null),
            (d[4] = h),
            (d[5] = f),
            (d[6] = M),
            (d[7] = b),
            (d[8] = S),
            (d[9] = v),
            (d[10] = m),
            (d[11] = x),
            (d[12] = y),
            (d[13] = P),
            (d[14] = C),
            (d[15] = w),
            (d[16] = k),
            (d[17] = i))
          : (i = d[17]),
        d[18] !== s || d[19] !== i
          ? ((n = (0, l.jsx)(ez.ic, { className: "max-sm:flex-col max-sm:items-stretch", label: s, control: i })),
            (d[18] = s),
            (d[19] = i),
            (d[20] = n))
          : (n = d[20]),
        n
      )
    }
    function tr(e) {
      let t,
        s,
        i,
        n = (0, a.c)(4),
        { onClick: r } = e
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(eM.I, { "aria-hidden": !1, asset: eg.f })),
            (s = (0, l.jsx)(o.A, { id: "settings.mcp.addServer", defaultMessage: "Add server" })),
            (n[0] = t),
            (n[1] = s))
          : ((t = n[0]), (s = n[1])),
        n[2] !== r
          ? ((i = (0, l.jsxs)(u.$, { color: "secondary", size: "toolbar", onClick: r, children: [t, s] })),
            (n[2] = r),
            (n[3] = i))
          : (i = n[3]),
        i
      )
    }
    var to = s("ZJfA"),
      td = s("hZax"),
      tc = s("aepO"),
      tu = s("a0aG"),
      tp = s("Yewb"),
      tm = s("ugfi"),
      tg = s("SlNh"),
      th = s("UBJK"),
      tf = s("MM0V"),
      tx = s("bb3f")
    function tb(e) {
      let t,
        s,
        i,
        n,
        r = (0, a.c)(8),
        { errorMessage: d, isRetrying: c, onRetry: u } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(o.A, { id: "skills.appsPage.loadError.title", defaultMessage: "Unable to load apps" })),
            (r[0] = t))
          : (t = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(o.A, { id: "skills.appsPage.loadError.retry", defaultMessage: "Retry" })), (r[1] = s))
          : (s = r[1]),
        r[2] !== u
          ? ((i = () => {
              u()
            }),
            (r[2] = u),
            (r[3] = i))
          : (i = r[3]),
        r[4] !== d || r[5] !== c || r[6] !== i
          ? ((n = (0, l.jsx)(tf.l, {
              title: t,
              content: d,
              type: "error",
              layout: "vertical",
              primaryCtaText: s,
              isPrimaryCtaDisabled: c,
              onPrimaryCtaClick: i,
            })),
            (r[4] = d),
            (r[5] = c),
            (r[6] = i),
            (r[7] = n))
          : (n = r[7]),
        n
      )
    }
    function ty(e) {
      let t,
        s,
        i,
        n,
        r,
        d = (0, a.c)(11),
        { errorMessage: c, isLoading: p, isRetrying: m, onRetry: g } = e
      if (p) {
        let e
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(e4.j, {
                  children: (0, l.jsx)(o.A, { id: "skills.appsPage.loading", defaultMessage: "Loading apps\u2026" }),
                }),
              })),
              (d[0] = e))
            : (e = d[0]),
          e
        )
      }
      return (
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(o.A, { id: "skills.appsPage.loadError.title", defaultMessage: "Unable to load apps" })),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== g
          ? ((s = () => {
              g()
            }),
            (d[2] = g),
            (d[3] = s))
          : (s = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(o.A, { id: "skills.appsPage.loadError.retry", defaultMessage: "Retry" })), (d[4] = i))
          : (i = d[4]),
        d[5] !== m || d[6] !== s
          ? ((n = (0, l.jsx)(u.$, { color: "outline", disabled: m, onClick: s, children: i })),
            (d[5] = m),
            (d[6] = s),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== c || d[9] !== n
          ? ((r = (0, l.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center py-8",
              children: (0, l.jsx)(_.A, { title: t, description: c, actions: n }),
            })),
            (d[8] = c),
            (d[9] = n),
            (d[10] = r))
          : (r = d[10]),
        r
      )
    }
    function tv(e) {
      let t,
        s,
        i = (0, a.c)(26),
        {
          apps: n,
          effectiveConfig: r,
          emptyStateTitle: o,
          installedStateAction: d,
          installActionLabel: c,
          isConfigPending: u,
          useCompactEmptyState: p,
          isAppConnectPending: m,
          updatingAppId: g,
          onInstallApp: h,
          onOpenAppTools: f,
          onSetAppEnabled: x,
        } = e,
        b = void 0 === d ? "check" : d,
        y = void 0 !== u && u,
        v = void 0 !== p && p
      if (0 === n.length) {
        let e
        return (
          i[0] !== o || i[1] !== v
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: v
                  ? (0, l.jsx)("div", { className: "text-sm text-secondary", children: o })
                  : (0, l.jsx)(_.A, { title: o }),
              })),
              (i[0] = o),
              (i[1] = v),
              (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      if (
        i[3] !== n ||
        i[4] !== r ||
        i[5] !== c ||
        i[6] !== b ||
        i[7] !== m ||
        i[8] !== y ||
        i[9] !== h ||
        i[10] !== f ||
        i[11] !== x ||
        i[12] !== g
      ) {
        let e
        ;(i[14] !== r ||
        i[15] !== c ||
        i[16] !== b ||
        i[17] !== m ||
        i[18] !== y ||
        i[19] !== h ||
        i[20] !== f ||
        i[21] !== x ||
        i[22] !== g
          ? ((e = (e) =>
              (0, l.jsx)(
                tx.S,
                {
                  app: e,
                  presentation: "settings",
                  appRestriction: (0, k.e)(e.id, r),
                  installedStateAction: b,
                  installActionLabel: c,
                  isConfigPending: y,
                  isConnectingApp: m(e.id),
                  updatingAppId: g,
                  onInstallApp: h,
                  onOpenAppTools: f,
                  onSetAppEnabled: x,
                },
                e.id,
              )),
            (i[14] = r),
            (i[15] = c),
            (i[16] = b),
            (i[17] = m),
            (i[18] = y),
            (i[19] = h),
            (i[20] = f),
            (i[21] = x),
            (i[22] = g),
            (i[23] = e))
          : (e = i[23]),
          (t = n.map(e)),
          (i[3] = n),
          (i[4] = r),
          (i[5] = c),
          (i[6] = b),
          (i[7] = m),
          (i[8] = y),
          (i[9] = h),
          (i[10] = f),
          (i[11] = x),
          (i[12] = g),
          (i[13] = t))
      } else t = i[13]
      return (i[24] !== t ? ((s = (0, l.jsx)(eB.t, { children: t })), (i[24] = t), (i[25] = s)) : (s = i[25]), s)
    }
    var tj = s("bVeK"),
      tk = (e) =>
        (0, l.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.8828 9.61914L11.043 9.66309L17.5928 11.9746C18.5062 12.297 18.5682 13.565 17.6904 13.9746L15.1562 15.1562L13.9746 17.6904C13.5907 18.5132 12.4525 18.5107 12.0459 17.7549L11.9746 17.5928L9.66309 11.043C9.37948 10.2394 10.087 9.46369 10.8828 9.61914ZM13.0264 16.5771L13.9902 14.5127L14.0342 14.4287C14.1447 14.2377 14.3114 14.0842 14.5127 13.9902L16.5771 13.0264L11.0889 11.0889L13.0264 16.5771Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M3.33301 12.668C3.70017 12.668 3.99787 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10342 16.0768 7.33074 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66815 12.966 2.96596 12.6681 3.33301 12.668Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M6.80078 2.68164C7.10349 2.74379 7.3309 3.01195 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81979 3.99818 3.99823 4.8198 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66815 4.08526 4.08525 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z",
              fill: "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M14.166 2.66797C15.9139 2.66797 17.3309 4.08518 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81972 15.1793 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96597 12.966 2.6681 13.333 2.66797H14.166Z",
              fill: "currentColor",
            }),
          ],
        }),
      tS = s("Jqpj"),
      tM = s("ZGaK"),
      tA = s("f22a")
    function tw(e) {
      let t,
        s,
        i,
        n = (0, a.c)(27),
        {
          errorMessage: r,
          isLoading: d,
          isRetrying: c,
          isUpgradingMarketplaces: p,
          marketplaceLoadErrors: m,
          marketplaces: g,
          configuredMarketplaceNames: h,
          configuredGitMarketplaceNames: f,
          onUpgradeMarketplace: x,
          onRemoveMarketplace: b,
          onRetry: y,
          pendingUpgradeMarketplaceName: v,
        } = e,
        k = (0, j.A)()
      if (d) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(e4.j, {
                  children: (0, l.jsx)(o.A, {
                    id: "skills.appsPage.marketplace.loading",
                    defaultMessage: "Loading marketplaces\u2026",
                  }),
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (r) {
        let e, t, s, a, i
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.appsPage.marketplace.loadError.title",
                defaultMessage: "Unable to load marketplaces",
              })),
              (n[1] = e))
            : (e = n[1]),
          n[2] !== y
            ? ((t = () => {
                y()
              }),
              (n[2] = y),
              (n[3] = t))
            : (t = n[3]),
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, l.jsx)(o.A, { id: "skills.appsPage.marketplace.loadError.retry", defaultMessage: "Retry" })),
              (n[4] = s))
            : (s = n[4]),
          n[5] !== c || n[6] !== t
            ? ((a = (0, l.jsx)(u.$, { color: "outline", disabled: c, onClick: t, children: s })),
              (n[5] = c),
              (n[6] = t),
              (n[7] = a))
            : (a = n[7]),
          n[8] !== r || n[9] !== a
            ? ((i = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(_.A, { title: e, description: r, actions: a }),
              })),
              (n[8] = r),
              (n[9] = a),
              (n[10] = i))
            : (i = n[10]),
          i
        )
      }
      return (
        n[11] !== c || n[12] !== m || n[13] !== y
          ? ((t = (0, l.jsx)(tI, { errors: m, isRetrying: c, onRetry: y })),
            (n[11] = c),
            (n[12] = m),
            (n[13] = y),
            (n[14] = t))
          : (t = n[14]),
        n[15] !== f ||
        n[16] !== h ||
        n[17] !== k ||
        n[18] !== p ||
        n[19] !== g ||
        n[20] !== b ||
        n[21] !== x ||
        n[22] !== v
          ? ((s =
              0 === g.length
                ? (0, l.jsx)("div", {
                    className: "flex min-h-0 flex-1 items-center justify-center py-8",
                    children: (0, l.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, l.jsx)(o.A, {
                        id: "skills.appsPage.empty.marketplace",
                        defaultMessage: "No marketplaces found",
                      }),
                    }),
                  })
                : (0, l.jsx)(tM.q, {
                    gap: "compact",
                    isSingleColumn: !0,
                    children: g.map((e) => {
                      let t = (0, tA.rX)(e, h),
                        s = (0, tA.ov)(e, f),
                        a = v === e.name && s,
                        i = p || null != v,
                        n = !s || i,
                        r = !t || i
                      return (0, l.jsx)(
                        tS.D,
                        {
                          className: "group justify-center border-none",
                          actionsPlacement: "center",
                          description: (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)("span", {
                                children: (0, l.jsx)(o.A, {
                                  id: "skills.appsPage.marketplace.pluginCount",
                                  defaultMessage: "{count, plural, one {# plugin} other {# plugins}}",
                                  values: { count: e.pluginCount },
                                }),
                              }),
                              null != e.path ? (0, l.jsx)("span", { className: "truncate", children: e.path }) : null,
                            ],
                          }),
                          descriptionClassName: "flex min-w-0 flex-col gap-0.5 leading-snug",
                          icon: (0, l.jsx)(tk, { className: "icon-sm text-secondary" }),
                          title: (0, tA.Zr)(e),
                          actions: (0, l.jsxs)(eC.t, {
                            children: [
                              (0, l.jsx)(eu.m, {
                                content: (0, l.jsx)(tC, { marketplace: e, isUpgradeable: s }),
                                children: (0, l.jsx)(u.$, {
                                  className: "shrink-0",
                                  color: "outline",
                                  size: "default",
                                  disabled: n,
                                  loading: a,
                                  "aria-label": k.formatMessage({
                                    id: "skills.appsPage.marketplace.upgrade.ariaLabel",
                                    defaultMessage: "Upgrade marketplace",
                                  }),
                                  onClick: (t) => {
                                    ;(t.stopPropagation(), s && x(e))
                                  },
                                  children: (0, l.jsx)(o.A, {
                                    id: "skills.appsPage.marketplace.upgrade.button",
                                    defaultMessage: "Upgrade",
                                  }),
                                }),
                              }),
                              (0, l.jsx)(eu.m, {
                                content: (0, l.jsx)(tP, { marketplace: e, isRemovable: t }),
                                children: (0, l.jsx)(u.$, {
                                  color: "ghost",
                                  size: "icon",
                                  disabled: r,
                                  "aria-label": k.formatMessage({
                                    id: "skills.appsPage.marketplace.remove.ariaLabel",
                                    defaultMessage: "Remove marketplace",
                                  }),
                                  onClick: (s) => {
                                    ;(s.stopPropagation(), t && b(e))
                                  },
                                  children: (0, l.jsx)(tj.cSG, {}),
                                }),
                              }),
                            ],
                          }),
                        },
                        `${e.name}:${e.path ?? "remote"}`,
                      )
                    }),
                  })),
            (n[15] = f),
            (n[16] = h),
            (n[17] = k),
            (n[18] = p),
            (n[19] = g),
            (n[20] = b),
            (n[21] = x),
            (n[22] = v),
            (n[23] = s))
          : (s = n[23]),
        n[24] !== t || n[25] !== s
          ? ((i = (0, l.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col gap-3", children: [t, s] })),
            (n[24] = t),
            (n[25] = s),
            (n[26] = i))
          : (i = n[26]),
        i
      )
    }
    function tC(e) {
      let t,
        s = (0, a.c)(3),
        { marketplace: i, isUpgradeable: n } = e
      if (n) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.appsPage.marketplace.upgrade",
                defaultMessage: "Upgrade marketplace",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if (i.isBuiltIn) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.appsPage.marketplace.upgrade.builtInDisabled",
                defaultMessage: "Built-in marketplaces update automatically",
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(o.A, {
              id: "skills.appsPage.marketplace.upgrade.localDisabled",
              defaultMessage: "Only Git marketplaces can be upgraded",
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function tP(e) {
      let t,
        s = (0, a.c)(3),
        { marketplace: i, isRemovable: n } = e
      if (n) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.appsPage.marketplace.remove",
                defaultMessage: "Remove marketplace",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if (i.isBuiltIn) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.appsPage.marketplace.remove.builtInDisabled",
                defaultMessage: "Built-in marketplaces cannot be removed",
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(o.A, {
              id: "skills.appsPage.marketplace.remove.configuredDisabled",
              defaultMessage: "Only configured marketplaces can be removed",
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function tI(e) {
      let t,
        s,
        i,
        n,
        r,
        d,
        c,
        p,
        m,
        g,
        h,
        f,
        x,
        b,
        y,
        v = (0, a.c)(32),
        { errors: j, isRetrying: k, onRetry: S } = e
      if (0 === j.length) return null
      if (v[0] !== j) {
        let e = j.slice(0, 3)
        ;((t = j.length - e.length),
          (c = "rounded-md border p-3"),
          (d = "flex flex-wrap items-start justify-between gap-3"),
          (n = "min-w-0 flex-1"),
          v[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, l.jsx)("div", {
                className: "text-sm font-medium",
                children: (0, l.jsx)(o.A, {
                  id: "skills.appsPage.marketplace.partialLoadError.title",
                  defaultMessage: "Some marketplaces could not be loaded",
                }),
              })),
              (v[8] = r))
            : (r = v[8]),
          (s = "mt-2 flex flex-col gap-2 text-xs text-secondary"),
          (i = e.map(t_)),
          (v[0] = j),
          (v[1] = t),
          (v[2] = s),
          (v[3] = i),
          (v[4] = n),
          (v[5] = r),
          (v[6] = d),
          (v[7] = c))
      } else ((t = v[1]), (s = v[2]), (i = v[3]), (n = v[4]), (r = v[5]), (d = v[6]), (c = v[7]))
      return (
        v[9] !== t
          ? ((p =
              t > 0
                ? (0, l.jsx)("div", {
                    children: (0, l.jsx)(o.A, {
                      id: "skills.appsPage.marketplace.partialLoadError.more",
                      defaultMessage:
                        "{count, plural, one {# more marketplace could not be loaded} other {# more marketplaces could not be loaded}}",
                      values: { count: t },
                    }),
                  })
                : null),
            (v[9] = t),
            (v[10] = p))
          : (p = v[10]),
        v[11] !== s || v[12] !== i || v[13] !== p
          ? ((m = (0, l.jsxs)("div", { className: s, children: [i, p] })),
            (v[11] = s),
            (v[12] = i),
            (v[13] = p),
            (v[14] = m))
          : (m = v[14]),
        v[15] !== n || v[16] !== r || v[17] !== m
          ? ((g = (0, l.jsxs)("div", { className: n, children: [r, m] })),
            (v[15] = n),
            (v[16] = r),
            (v[17] = m),
            (v[18] = g))
          : (g = v[18]),
        v[19] !== S
          ? ((h = () => {
              S()
            }),
            (v[19] = S),
            (v[20] = h))
          : (h = v[20]),
        v[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)(o.A, {
              id: "skills.appsPage.marketplace.partialLoadError.retry",
              defaultMessage: "Retry",
            })),
            (v[21] = f))
          : (f = v[21]),
        v[22] !== k || v[23] !== h
          ? ((x = (0, l.jsx)(u.$, { color: "outline", disabled: k, onClick: h, children: f })),
            (v[22] = k),
            (v[23] = h),
            (v[24] = x))
          : (x = v[24]),
        v[25] !== x || v[26] !== d || v[27] !== g
          ? ((b = (0, l.jsxs)("div", { className: d, children: [g, x] })),
            (v[25] = x),
            (v[26] = d),
            (v[27] = g),
            (v[28] = b))
          : (b = v[28]),
        v[29] !== b || v[30] !== c
          ? ((y = (0, l.jsx)("div", { className: c, children: b })), (v[29] = b), (v[30] = c), (v[31] = y))
          : (y = v[31]),
        y
      )
    }
    function t_(e, t) {
      return (0, l.jsxs)(
        "div",
        {
          className: "min-w-0",
          children: [
            (0, l.jsx)("div", { className: "truncate font-mono", children: e.marketplacePath }),
            (0, l.jsx)("div", { className: "break-words", children: e.message }),
          ],
        },
        `${e.marketplacePath}:${t}`,
      )
    }
    var tN = s("oom3"),
      tE = s("FvYa"),
      tL = s("JNtf"),
      tR = s("mUDD"),
      tD = s("v0Gf"),
      tU = s("RNul"),
      tT = s("SqAt"),
      tO = s("C0re")
    let tH = (0, n.vU)(er.u, ({ hostId: e, marketplace: t, roots: s }, { scope: l, queryClient: a }) => ({
        queryKey: [...(0, tO.Tr)(e, "marketplace-removal"), t.name, t.path, s],
        queryFn: async ({ signal: i }) => {
          let { marketplaces: n, marketplaceLoadErrors: r } = await l.query.fetch(es.Fu, { hostId: e, roots: s }),
            o = r.find((e) => e.marketplacePath === t.path)
          if (null != o) throw Error(o.message)
          return (0, ea.RR)({
            hostId: e,
            plugins: (0, ea.z0)(n.filter((e) => e.name === t.name)),
            queryClient: a,
            signal: i,
          })
        },
        retry: !1,
        staleTime: 0,
      })),
      tV = (0, eT.YK)({
        retryRemoval: { id: "skills.appsPage.marketplace.removeDialog.retryRemoval", defaultMessage: "Retry" },
        uninstallAndRemove: {
          id: "skills.appsPage.marketplace.removeDialog.uninstallAndRemove",
          defaultMessage: "Uninstall & remove",
        },
        confirm: { id: "skills.appsPage.marketplace.removeDialog.confirm", defaultMessage: "Remove" },
        title: { id: "skills.appsPage.marketplace.removeDialog.title", defaultMessage: 'Remove "{marketplaceName}"?' },
        pluginsError: {
          id: "skills.appsPage.marketplace.removeDialog.pluginsError",
          defaultMessage: "Unable to load installed plugins",
        },
        retryPlugins: { id: "skills.appsPage.marketplace.removeDialog.retryPlugins", defaultMessage: "Retry" },
        loadingPlugins: {
          id: "skills.appsPage.marketplace.removeDialog.loadingPlugins",
          defaultMessage: "Loading installed plugins\u2026",
        },
        noInstalledPlugins: {
          id: "skills.appsPage.marketplace.removeDialog.noInstalledPlugins",
          defaultMessage: "Its plugins will not appear or be available for installation unless you add it again",
        },
        installedPlugins: {
          id: "skills.appsPage.marketplace.removeDialog.installedPlugins",
          defaultMessage:
            "The following plugins will be uninstalled, and can't be re-installed unless you add this marketplace again.",
        },
        uninstalled: { id: "skills.appsPage.marketplace.removeDialog.uninstalled", defaultMessage: "Uninstalled" },
        uninstalling: { id: "skills.appsPage.marketplace.removeDialog.uninstalling", defaultMessage: "Uninstalling" },
        uninstallError: {
          id: "skills.appsPage.marketplace.removeDialog.uninstallError",
          defaultMessage: "Unable to uninstall {pluginName}. Retry to continue",
        },
        removeError: {
          id: "skills.appsPage.marketplace.removeDialog.removeError",
          defaultMessage: "Unable to remove the marketplace. Retry to continue",
        },
        cancel: { id: "skills.appsPage.marketplace.removeDialog.cancel", defaultMessage: "Cancel" },
      })
    function tz(e) {
      let t,
        s,
        i,
        o = (0, a.c)(11),
        { hostId: d, marketplace: c, onOpenChange: u, roots: p } = e
      ;(o[0] !== u ? ((t = () => u(!1)), (o[0] = u), (o[1] = t)) : (t = o[1]),
        o[2] !== d || o[3] !== c || o[4] !== p || o[5] !== t
          ? ((s = { hostId: d, marketplace: c, onRemoved: t, roots: p }),
            (o[2] = d),
            (o[3] = c),
            (o[4] = p),
            (o[5] = t),
            (o[6] = s))
          : (s = o[6]))
      let m = (function (e) {
        let t,
          s,
          l,
          i,
          o,
          d,
          c,
          u,
          p,
          m = (0, a.c)(30),
          { hostId: g, marketplace: h, onRemoved: f, roots: x } = e
        m[0] !== g || m[1] !== h || m[2] !== x
          ? ((t = { hostId: g, marketplace: h, roots: x }), (m[0] = g), (m[1] = h), (m[2] = x), (m[3] = t))
          : (t = m[3])
        let { data: b, error: y, isFetching: j, refetch: k } = (0, n._U)(tH, t)
        m[4] !== g ? ((s = { hostId: g }), (m[4] = g), (m[5] = s)) : (s = m[5])
        let { uninstallPlugin: S } = (0, tm.XV)(s)
        m[6] !== g ? ((l = { hostId: g }), (m[6] = g), (m[7] = l)) : (l = m[7])
        let { removeMarketplace: M } = (0, tm.p9)(l),
          [A, w] = (0, r.useState)(null),
          C = (0, r.useRef)(null)
        ;(m[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = () => () => C.current?.abort()), (o = []), (m[8] = i), (m[9] = o))
          : ((i = m[8]), (o = m[9])),
          (0, r.useEffect)(i, o))
        let P = A?.plugins ?? (j ? void 0 : b),
          I = null == A && null != y
        m[10] !== I ||
        m[11] !== h ||
        m[12] !== f ||
        m[13] !== P ||
        m[14] !== A?.completedCount ||
        m[15] !== M ||
        m[16] !== S
          ? ((d = async () => {
              if (null != C.current || null == P || I) return
              let e = new AbortController()
              C.current = e
              let t = A?.completedCount ?? 0
              w({ plugins: P, completedCount: t, isPending: !0, hasError: !1 })
              try {
                for (let s of P.slice(t))
                  (await S({
                    marketplaceName: s.marketplaceName,
                    pluginDisplayName: (0, v.V)(s),
                    pluginId: s.plugin.id,
                    pluginName: s.plugin.name,
                    requestPluginId: (0, tT.RQ)(s),
                  }),
                    e.signal.throwIfAborted(),
                    (t += 1),
                    w({ plugins: P, completedCount: t, isPending: !0, hasError: !1 }))
                ;(await M({ marketplaceDisplayName: (0, tA.Zr)(h), marketplaceName: h.name }),
                  e.signal.throwIfAborted(),
                  f())
              } catch {
                e.signal.aborted || w({ plugins: P, completedCount: t, isPending: !1, hasError: !0 })
              }
              C.current = null
            }),
            (m[10] = I),
            (m[11] = h),
            (m[12] = f),
            (m[13] = P),
            (m[14] = A?.completedCount),
            (m[15] = M),
            (m[16] = S),
            (m[17] = d))
          : (d = m[17])
        let _ = d,
          N = A?.completedCount ?? 0,
          E = A?.hasError ?? !1,
          L = A?.isPending ?? !1
        return (
          m[18] !== _
            ? ((c = () => {
                _()
              }),
              (m[18] = _),
              (m[19] = c))
            : (c = m[19]),
          m[20] !== k
            ? ((u = () => {
                k()
              }),
              (m[20] = k),
              (m[21] = u))
            : (u = m[21]),
          m[22] !== I || m[23] !== P || m[24] !== c || m[25] !== u || m[26] !== N || m[27] !== E || m[28] !== L
            ? ((p = {
                plugins: P,
                hasPluginsError: I,
                completedCount: N,
                hasRemovalError: E,
                isRemoving: L,
                onRemove: c,
                onRetryPlugins: u,
              }),
              (m[22] = I),
              (m[23] = P),
              (m[24] = c),
              (m[25] = u),
              (m[26] = N),
              (m[27] = E),
              (m[28] = L),
              (m[29] = p))
            : (p = m[29]),
          p
        )
      })(s)
      return (
        o[7] !== c || o[8] !== u || o[9] !== m
          ? ((i = (0, l.jsx)(tB, { ...m, marketplace: c, onOpenChange: u })),
            (o[7] = c),
            (o[8] = u),
            (o[9] = m),
            (o[10] = i))
          : (i = o[10]),
        i
      )
    }
    function tB(e) {
      let t,
        s,
        i,
        n,
        r,
        d,
        c,
        p,
        m,
        g,
        h,
        f,
        x,
        b,
        y,
        j,
        k,
        S,
        M = (0, a.c)(58),
        {
          plugins: A,
          completedCount: w,
          hasRemovalError: C,
          hasPluginsError: P,
          isRemoving: I,
          marketplace: _,
          onOpenChange: N,
          onRemove: E,
          onRetryPlugins: L,
        } = e,
        R = null != A && !P && !I,
        D = C ? A?.[w] : null
      if (C) {
        let e
        ;(M[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(o.A, { ...tV.retryRemoval })), (M[0] = e))
          : (e = M[0]),
          (t = e))
      } else if (null != A && A.length > 0) {
        let e
        ;(M[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(o.A, { ...tV.uninstallAndRemove })), (M[1] = e))
          : (e = M[1]),
          (t = e))
      } else {
        let e
        ;(M[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(o.A, { ...tV.confirm })), (M[2] = e))
          : (e = M[2]),
          (t = e))
      }
      M[3] !== I || M[4] !== N
        ? ((s = (e) => {
            I || N(e)
          }),
          (M[3] = I),
          (M[4] = N),
          (M[5] = s))
        : (s = M[5])
      let U = !I
      ;(M[6] !== R || M[7] !== E
        ? ((i = (e) => {
            ;(e.preventDefault(), R && E())
          }),
          (M[6] = R),
          (M[7] = E),
          (M[8] = i))
        : (i = M[8]),
        M[9] !== _ ? ((n = (0, tA.Zr)(_)), (M[9] = _), (M[10] = n)) : (n = M[10]),
        M[11] !== n
          ? ((r = (0, l.jsx)(tR.OO, {
              className: "shrink-0",
              children: (0, l.jsx)(tR.c7, {
                title: (0, l.jsx)(tL.L3, {
                  children: (0, l.jsx)(o.A, { ...tV.title, values: { marketplaceName: n } }),
                }),
              }),
            })),
            (M[11] = n),
            (M[12] = r))
          : (r = M[12]),
        M[13] !== P || M[14] !== L
          ? ((d =
              P &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, l.jsx)(o.A, { ...tV.pluginsError }),
                  }),
                  (0, l.jsx)(u.$, {
                    className: "self-start",
                    color: "secondary",
                    onClick: L,
                    children: (0, l.jsx)(o.A, { ...tV.retryPlugins }),
                  }),
                ],
              })),
            (M[13] = P),
            (M[14] = L),
            (M[15] = d))
          : (d = M[15]),
        M[16] !== P || M[17] !== A
          ? ((c = !P && null == A && (0, l.jsx)(e4.j, { children: (0, l.jsx)(o.A, { ...tV.loadingPlugins }) })),
            (M[16] = P),
            (M[17] = A),
            (M[18] = c))
          : (c = M[18]),
        M[19] !== P || M[20] !== A?.length
          ? ((p =
              !P &&
              A?.length === 0 &&
              (0, l.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, l.jsx)(o.A, { ...tV.noInstalledPlugins }),
              })),
            (M[19] = P),
            (M[20] = A?.length),
            (M[21] = p))
          : (p = M[21]),
        M[22] !== w || M[23] !== P || M[24] !== I || M[25] !== A
          ? ((m =
              !P &&
              null != A &&
              A.length > 0 &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("p", {
                    className: "shrink-0 text-sm text-secondary",
                    children: (0, l.jsx)(o.A, { ...tV.installedPlugins }),
                  }),
                  (0, l.jsx)(tD.Q, {
                    className: "relative grid min-h-0 flex-1 overflow-hidden",
                    fade: "mask",
                    scrollClassName: "min-h-0 overflow-y-auto",
                    children: (0, l.jsx)("ul", {
                      className: "flex flex-col gap-2 text-sm select-text",
                      "aria-live": "polite",
                      children: A.map((e, t) =>
                        (0, l.jsxs)(
                          "li",
                          {
                            className: "flex items-center gap-2",
                            children: [
                              (0, l.jsx)(tE.R, {
                                className: "size-5 shrink-0",
                                alt: "",
                                logoUrl: e.logoPath,
                                logoDarkUrl: e.logoDarkPath,
                                fallback: (0, l.jsx)(tj.wdY, { className: "text-secondary" }),
                              }),
                              (0, l.jsx)("span", { className: "min-w-0 flex-1 break-words", children: (0, v.V)(e) }),
                              t < w &&
                                (0, l.jsxs)("span", {
                                  className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                  children: [(0, l.jsx)(tj.yIE, {}), (0, l.jsx)(o.A, { ...tV.uninstalled })],
                                }),
                              I &&
                                t === w &&
                                (0, l.jsxs)("span", {
                                  className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                  children: [
                                    (0, l.jsx)(tU.y, { className: "icon-xs" }),
                                    (0, l.jsx)(o.A, { ...tV.uninstalling }),
                                  ],
                                }),
                            ],
                          },
                          (0, ea.vc)(e),
                        ),
                      ),
                    }),
                  }),
                ],
              })),
            (M[22] = w),
            (M[23] = P),
            (M[24] = I),
            (M[25] = A),
            (M[26] = m))
          : (m = M[26]),
        M[27] !== d || M[28] !== c || M[29] !== p || M[30] !== m
          ? ((g = (0, l.jsxs)(tR.OO, { className: "min-h-0 gap-4", children: [d, c, p, m] })),
            (M[27] = d),
            (M[28] = c),
            (M[29] = p),
            (M[30] = m),
            (M[31] = g))
          : (g = M[31]),
        M[32] !== D || M[33] !== C
          ? ((h =
              C &&
              (0, l.jsx)(tR.OO, {
                className: "shrink-0",
                children: (0, l.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    null != D
                      ? (0, l.jsx)(o.A, { ...tV.uninstallError, values: { pluginName: (0, v.V)(D) } })
                      : (0, l.jsx)(o.A, { ...tV.removeError }),
                }),
              })),
            (M[32] = D),
            (M[33] = C),
            (M[34] = h))
          : (h = M[34]),
        M[35] !== N
          ? ((f = () => {
              N(!1)
            }),
            (M[35] = N),
            (M[36] = f))
          : (f = M[36]),
        M[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, l.jsx)(o.A, { ...tV.cancel })), (M[37] = x))
          : (x = M[37]),
        M[38] !== I || M[39] !== f
          ? ((b = (0, l.jsx)(u.$, { color: "secondary", disabled: I, onClick: f, children: x })),
            (M[38] = I),
            (M[39] = f),
            (M[40] = b))
          : (b = M[40]))
      let T = !R
      return (
        M[41] !== t || M[42] !== I || M[43] !== T
          ? ((y = (0, l.jsx)(u.$, { color: "danger", disabled: T, loading: I, type: "submit", children: t })),
            (M[41] = t),
            (M[42] = I),
            (M[43] = T),
            (M[44] = y))
          : (y = M[44]),
        M[45] !== b || M[46] !== y
          ? ((j = (0, l.jsx)(tR.OO, { className: "shrink-0", children: (0, l.jsxs)(tR.Es, { children: [b, y] }) })),
            (M[45] = b),
            (M[46] = y),
            (M[47] = j))
          : (j = M[47]),
        M[48] !== g || M[49] !== h || M[50] !== j || M[51] !== i || M[52] !== r
          ? ((k = (0, l.jsxs)(tR.R4, {
              className: "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden select-none",
              as: "form",
              onSubmit: i,
              children: [r, g, h, j],
            })),
            (M[48] = g),
            (M[49] = h),
            (M[50] = j),
            (M[51] = i),
            (M[52] = r),
            (M[53] = k))
          : (k = M[53]),
        M[54] !== s || M[55] !== k || M[56] !== U
          ? ((S = (0, l.jsx)(tL.lG, { open: !0, onOpenChange: s, showDialogClose: U, size: "compact", children: k })),
            (M[54] = s),
            (M[55] = k),
            (M[56] = U),
            (M[57] = S))
          : (S = M[57]),
        S
      )
    }
    var tW = s("funJ"),
      tF = s("XvU9")
    function t$(e) {
      let t,
        s,
        i,
        u,
        p,
        m,
        h,
        _,
        L,
        $,
        el,
        eu,
        ep,
        em,
        eg,
        eh,
        ef,
        ex,
        eb,
        ey,
        ev,
        ej,
        ek,
        eS,
        eM,
        eA,
        ew,
        eC,
        eP,
        eI,
        e_,
        eN,
        eE,
        eL,
        eR,
        eD,
        eU,
        eT,
        eO,
        eH,
        eV,
        ez,
        eB,
        eW,
        eF,
        e$,
        eQ = (0, a.c)(131),
        { hostId: eq, initialManageTab: eK, mcpServerCreation: eY, onManageTabSelect: eG, requestedTab: eZ } = e,
        eJ = (0, n.gh)(er.u),
        eX = (0, j.A)(),
        e0 = (0, C.l)(),
        e1 = (0, z.U)("(max-width: 1023px)"),
        e2 = (0, d.zy)(),
        e3 = (0, d.Zp)(),
        e6 = (0, r.useContext)(c.X)
      eQ[0] !== e2.state ? ((t = (0, tN.qC)(e2.state)), (eQ[0] = e2.state), (eQ[1] = t)) : (t = eQ[1])
      let e4 = t
      eQ[2] !== e2.search || eQ[3] !== e4.initialSearchQuery
        ? ((s = (0, tN.a5)(e2.search) ?? e4.initialSearchQuery),
          (eQ[2] = e2.search),
          (eQ[3] = e4.initialSearchQuery),
          (eQ[4] = s))
        : (s = eQ[4])
      let e5 = s,
        e7 = (0, n.Ul)(eo.lo),
        e9 = (0, W.I)(),
        te = (0, F.p8)(),
        tt = (0, b.jE)(),
        ts = (0, r.useRef)(null)
      eQ[5] !== eq ? ((i = { hostId: eq }), (eQ[5] = eq), (eQ[6] = i)) : (i = eQ[6])
      let tl = (0, V.J)(i),
        ta = (0, n._U)(g.V, eq),
        [ti, tn] = (0, r.useState)(eK ?? e4.initialTab),
        tr = eZ ?? ti
      eQ[7] !== e4.connectAppId
        ? ((u = () => e4.connectAppId ?? null), (eQ[7] = e4.connectAppId), (eQ[8] = u))
        : (u = eQ[8])
      let [tf, tx] = (0, r.useState)(u),
        [tj, tk] = (0, r.useState)(e5 ?? ""),
        [tS, tw] = (0, r.useState)(!1),
        [tC, tP] = (0, r.useState)(null),
        [tI, t_] = (0, r.useState)(null),
        { data: tE, isLoading: tL } = (0, O.A)(eq),
        tR = tE?.homeDirectory,
        { installedSkillMetadata: tD, isLoading: tU, markSkillsUpdated: tT, workspaceRoots: tO } = (0, tF.Cy)(eq)
      eQ[9] !== eq ? ((p = { hostId: eq }), (eQ[9] = eq), (eQ[10] = p)) : (p = eQ[10])
      let { isPending: tH, isPlaceholderData: tV } = (0, n._U)(eo.FM, p),
        { canInstallRecommendedSkills: tB, defaultRecommendedRepoRoot: t$ } = (0, tF.p1)(eq),
        { errorMessage: t2, isLoading: t3, refresh: t6, skills: t4 } = (0, tF.Jc)(t$, eq, tB),
        t5 = (0, tA.Pe)({ recommendedSkills: t3 || null != t2 ? null : t4, skills: tD })
      eQ[11] !== tl || eQ[12] !== eq || eQ[13] !== tO
        ? ((m = { enabled: tl, hostId: eq, roots: tO }), (eQ[11] = tl), (eQ[12] = eq), (eQ[13] = tO), (eQ[14] = m))
        : (m = eQ[14])
      let { data: t7, error: t9, isLoading: t8, refetch: se } = (0, es.Kj)(m)
      eQ[15] !== tl || eQ[16] !== eq
        ? ((h = { enabled: tl, hostId: eq }), (eQ[15] = tl), (eQ[16] = eq), (eQ[17] = h))
        : (h = eQ[17])
      let st = (0, U.H)(h)
      eQ[18] !== tl || eQ[19] !== eq
        ? ((_ = { enabled: tl, hostId: eq }), (eQ[18] = tl), (eQ[19] = eq), (eQ[20] = _))
        : (_ = eQ[20])
      let ss = (0, T.J)(_)
      eQ[21] !== tl || eQ[22] !== eq
        ? ((L = { enabled: tl, hostId: eq }), (eQ[21] = tl), (eQ[22] = eq), (eQ[23] = L))
        : (L = eQ[23])
      let sl = (0, H.I)(L)
      eQ[24] !== st || eQ[25] !== eq
        ? (($ = { computerUseAvailability: st, hostId: eq }), (eQ[24] = st), (eQ[25] = eq), (eQ[26] = $))
        : ($ = eQ[26])
      let sa = (0, B.l)($),
        si =
          null == t7
            ? void 0
            : (0, ea.PM)({
                plugins: t7,
                isComputerUseAvailable: st.available,
                isExternalBrowserUseAvailable: ss.available,
                isInAppBrowserUseAvailable: sl.available,
                isMessagesAvailable: sa.available,
              }),
        sn = t9?.message ?? null,
        sr = t8 || st.isLoading || ss.isLoading || sl.isLoading || sa.isLoading
      eQ[27] !== se
        ? ((el = async () => {
            await se()
          }),
          (eQ[27] = se),
          (eQ[28] = el))
        : (el = eQ[28])
      let so = el,
        { value: sd } = (0, td.Fj)("1349514884"),
        { hiddenPluginIds: sc } = (0, Y.I4)(sd),
        su = (0, td.Zj)("1269116100")
      eQ[29] !== eq ? ((eu = { hostId: eq }), (eQ[29] = eq), (eQ[30] = eu)) : (eu = eQ[30])
      let { mutateAsync: sp } = (0, et.pC)(eu)
      eQ[31] !== eq ? ((ep = { hostId: eq }), (eQ[31] = eq), (eQ[32] = ep)) : (ep = eQ[32])
      let { mutateAsync: sm } = (0, et.oq)(ep),
        sg = (0, tg.nH)(si ?? [], sc, e0),
        sh = (0, tg.nH)(t7 ?? [], sc, e0),
        sf = eq === x.fI
      eQ[33] !== sf || eQ[34] !== eq
        ? ((em = { hostId: eq, useActiveWorkspaceRoot: sf }), (eQ[33] = sf), (eQ[34] = eq), (eQ[35] = em))
        : (em = eQ[35])
      let { data: sx } = (0, en.oJ)(null, em),
        sb = eq === x.fI
      eQ[36] !== tH || eQ[37] !== tV || eQ[38] !== eq || eQ[39] !== e7 || eQ[40] !== sb || eQ[41] !== tO
        ? ((eg = (0, k.K)({
            hostId: eq,
            isLocalHost: sb,
            selectedRemoteProject: e7,
            workspaceRoots: tO,
            areWorkspaceRootsPending: tH,
            isPlaceholderData: tV,
          })),
          (eQ[36] = tH),
          (eQ[37] = tV),
          (eQ[38] = eq),
          (eQ[39] = e7),
          (eQ[40] = sb),
          (eQ[41] = tO),
          (eQ[42] = eg))
        : (eg = eQ[42])
      let { cwd: sy, isPending: sv } = eg,
        sj = eq === x.fI ? "fallback-to-workspace" : "preserve-null",
        sk = !sv
      eQ[43] !== eq || eQ[44] !== sj || eQ[45] !== sk
        ? ((eh = { hostId: eq, cwdMode: sj, enabled: sk }), (eQ[43] = eq), (eQ[44] = sj), (eQ[45] = sk), (eQ[46] = eh))
        : (eh = eQ[46])
      let { data: sS, isError: sM, isPending: sA } = (0, en.PG)(sy, eh),
        sw = sv || sA,
        sC = sw || sM ? void 0 : sS
      eQ[47] !== eq ? ((ef = { hostId: eq }), (eQ[47] = eq), (eQ[48] = ef)) : (ef = eQ[48])
      let {
          data: sP,
          hardRefetchAppsList: sI,
          isHardRefetchingAppsList: s_,
          isLoading: sN,
          loadError: sE,
        } = (0, A.Ad)(ef),
        sL = sE?.message ?? null,
        { installPlugin: sR, status: sD, uninstalling: sU } = (0, tp.XY)()
      eQ[49] !== eq ? ((ex = { hostId: eq }), (eQ[49] = eq), (eQ[50] = ex)) : (ex = eQ[50])
      let { pendingPluginId: sT, setPluginEnabled: sO } = (0, tm.zQ)(ex)
      eQ[51] !== eq ? ((eb = { hostId: eq }), (eQ[51] = eq), (eQ[52] = eb)) : (eb = eQ[52])
      let { uninstallPlugin: sH } = (0, tm.XV)(eb)
      eQ[53] !== eq ? ((ey = { hostId: eq }), (eQ[53] = eq), (eQ[54] = ey)) : (ey = eQ[54])
      let { isUpgradingMarketplaces: sV, pendingUpgradeMarketplaceName: sz, upgradeMarketplaces: sB } = (0, tm.qW)(ey),
        { data: sW } = (0, n._U)(en.I2, eq)
      eQ[55] !== eq
        ? ((ev = { hostId: eq, oauthReferrer: "connector_settings" }), (eQ[55] = eq), (eQ[56] = ev))
        : (ev = eQ[56])
      let {
        clearConnectingApp: sF,
        connectingApp: s$,
        connectingOptions: sQ,
        handleAppConnectOAuthStarted: sq,
        handleConnectApp: sK,
        isAppConnectPending: sY,
      } = (0, w.t)(ev)
      eQ[57] !== eq ? ((ej = { hostId: eq }), (eQ[57] = eq), (eQ[58] = ej)) : (ej = eQ[58])
      let { setAppEnabled: sG, updatingAppId: sZ } = (0, S.J)(ej)
      eQ[59] !== sP || eQ[60] !== sC || eQ[61] !== tC
        ? ((eS =
            null == (ek = null == tC ? null : (sP?.find((e) => e.id === tC) ?? null)) ? null : (0, k.e)(ek.id, sC)),
          (eQ[59] = sP),
          (eQ[60] = sC),
          (eQ[61] = tC),
          (eQ[62] = ek),
          (eQ[63] = eS))
        : ((ek = eQ[62]), (eS = eQ[63]))
      let sJ = eS,
        sX = (0, A.Ys)(tC, sC),
        s0 = sW?.config
      eQ[64] !== s0 ? ((eM = (0, tA.Qv)(s0)), (eQ[64] = s0), (eQ[65] = eM)) : (eM = eQ[65])
      let s1 = eM,
        s2 = (0, tA.K1)(sW?.config)
      eQ[66] !== sP || eQ[67] !== tf
        ? ((eA = null == tf ? null : (sP?.find((e) => e.id === tf) ?? null)),
          (eQ[66] = sP),
          (eQ[67] = tf),
          (eQ[68] = eA))
        : (eA = eQ[68])
      let s3 = eA
      eQ[69] !== sY || eQ[70] !== tf
        ? ((ew = null != tf && sY(tf)), (eQ[69] = sY), (eQ[70] = tf), (eQ[71] = ew))
        : (ew = eQ[71])
      let s6 = ew,
        s4 = tj.trim().toLowerCase()
      eQ[72] !== su || eQ[73] !== eq
        ? ((eC = { enabled: su, hostId: eq }), (eQ[72] = su), (eQ[73] = eq), (eQ[74] = eC))
        : (eC = eQ[74])
      let { data: s5, isLoading: s7 } = (0, et.vW)(eC),
        { plugins: s9 } = (0, tg.gL)({
          availablePlugins: sg,
          createdByMeRemotePlugins: null,
          homeDirectory: tR,
          pluginShares: su && null != s5 ? (0, tg.nH)(s5, sc, e0) : null,
          storefrontPlugins: (0, tg.wu)(sg),
        }),
        s8 = (0, tg.iU)({
          createdByMePlugins: s9,
          installedPlugins: sh,
          sharedWithYouPlugins: [],
          workspacePlugins: [],
        }),
        le = (0, tg.cu)({ locale: eX.locale, plugins: s8, query: s4 }),
        lt = new Set([...sg, ...s9].map(tJ)),
        ls = new Set(s8.filter((e) => !lt.has(e.plugin.id)).map(tZ)),
        ll = (0, tA.sq)({ skills: t5, query: s4 })
      eQ[75] !== sP ? ((eP = sP ?? []), (eQ[75] = sP), (eQ[76] = eP)) : (eP = eQ[76])
      let { installedApps: la } = (0, tA.EB)(eP),
        li = (0, tA.LJ)({ locale: eX.locale, apps: la, query: s4 }),
        ln = la.length,
        lr = Array.from(s2).filter(tG).length
      eQ[77] !== sx?.servers
        ? ((eI = Object.keys(sx?.servers ?? {})), (eQ[77] = sx?.servers), (eQ[78] = eI))
        : (eI = eQ[78])
      let lo = { apps: ln, marketplace: lr, mcps: eI.length, plugins: s8.length, skills: t5.length },
        ld = su && s7,
        lc = eY?.isAdding
          ? "mcps"
          : (0, tA.Lq)({
              currentTab: tr,
              isCurrentTabLoading: "plugins" === tr && (sr || (su && tL) || ld),
              isManagePage: !0,
              isPluginsEnabled: tl,
              tabCounts: lo,
            }),
        lu = (0, tN.NP)(eX, lc)
      eQ[79] !== sI
        ? ((e_ = async () => {
            try {
              await sI()
            } catch {}
          }),
          (eQ[79] = sI),
          (eQ[80] = e_))
        : (e_ = eQ[80])
      let lp = e_,
        lm = tY
      eQ[81] !== eX || eQ[82] !== eJ
        ? ((eN = (e) => {
            eJ.get(R.Id).danger(
              eX.formatMessage({ id: "plugins.manage.copyShareLinkError", defaultMessage: "Couldn't copy share link" }),
              {
                ...(null == e ? void 0 : { description: (0, y.Rt_)(e) }),
                errorAnalytics: { toastId: "plugins.manage.copyShareLinkError" },
              },
            )
          }),
          (eQ[81] = eX),
          (eQ[82] = eJ),
          (eQ[83] = eN))
        : (eN = eQ[83])
      let lg = eN
      eQ[84] !== tR ||
      eQ[85] !== su ||
      eQ[86] !== so ||
      eQ[87] !== sp ||
      eQ[88] !== eJ ||
      eQ[89] !== eq ||
      eQ[90] !== lg
        ? ((eE = async (e) => {
            let t = (0, Q.t6)(tR, e.marketplacePath, e.plugin.source)
            try {
              let s = await (0, et.RD)({ scope: eJ, hostId: eq, params: (0, ea.R9)(e) }).catch(tK),
                l = s?.shareContext ?? e.plugin.shareContext,
                a = (0, J.Ab)({
                  pluginShareUrl: s?.pluginShareUrl ?? null,
                  shareContext: l,
                  savedShareUrl: null,
                  configuredShareUrl: lm(e),
                })
              if (
                (null == a &&
                  su &&
                  null != t &&
                  ((a = (
                    await (0, J.JI)({ pluginPath: t, remotePluginId: l?.remotePluginId ?? null, savePluginShare: sp })
                  ).shareUrl),
                  so()),
                null != a && a.length > 0)
              )
                return void (await (0, tc.lW)(a))
            } catch (e) {
              lg(e)
              return
            }
            lg()
          }),
          (eQ[84] = tR),
          (eQ[85] = su),
          (eQ[86] = so),
          (eQ[87] = sp),
          (eQ[88] = eJ),
          (eQ[89] = eq),
          (eQ[90] = lg),
          (eQ[91] = eE))
        : (eE = eQ[91])
      let lh = eE
      eQ[92] !== tR ||
      eQ[93] !== eX ||
      eQ[94] !== so ||
      eQ[95] !== sp ||
      eQ[96] !== eJ ||
      eQ[97] !== eq ||
      eQ[98] !== lg ||
      eQ[99] !== sm
        ? ((eL = async (e) => {
            let t = (0, Q.t6)(tR, e.marketplacePath, e.plugin.source)
            if (null == t) return
            let s = await (0, et.RD)({ scope: eJ, hostId: eq, params: (0, ea.R9)(e) }).catch(tq),
              l = e.plugin.shareContext,
              a = l?.sharePrincipals != null && null != l.remoteVersion ? l : (s?.shareContext ?? l)
            if (a?.remotePluginId != null && null == a.sharePrincipals)
              return void eJ
                .get(R.Id)
                .danger(
                  eX.formatMessage({
                    id: "plugins.manage.loadSharingError",
                    defaultMessage: "Couldn't load plugin sharing",
                  }),
                  { errorAnalytics: { toastId: "plugins.manage.loadSharingError" } },
                )
            let i = (0, J.VZ)({
              initialShare:
                null == a
                  ? null
                  : {
                      remotePluginId: a.remotePluginId,
                      sharePrincipals: (0, et.eA)(a),
                      shareUrl: (0, J.Ab)({
                        pluginShareUrl: s?.pluginShareUrl ?? null,
                        shareContext: s?.shareContext ?? a,
                        savedShareUrl: null,
                        configuredShareUrl: lm(e),
                      }),
                    },
              saveShare: (e) => (0, J.JI)({ pluginPath: t, remotePluginId: e, savePluginShare: sp }),
            })
            ;(0, N.qf)(eJ, Z.PluginShareDialog, {
              initialDiscoverability: s?.shareContext?.discoverability ?? a?.discoverability,
              initialSharePrincipals: i.getCurrentShare()?.sharePrincipals ?? [],
              pluginDisplayName: (0, v.V)(e),
              shouldShowCopyLinkCreationProgress: () => i.getCurrentShare()?.shareUrl == null,
              onCopyLink: async () => {
                try {
                  let e = i.getCurrentShare()?.shareUrl != null,
                    t = await i.getOrCreateShare()
                  if ((e || so(), 0 === t.shareUrl.length))
                    return (lg(), { canPublishToWorkspace: t.canPublishToWorkspace, didCopy: !1 })
                  return { canPublishToWorkspace: t.canPublishToWorkspace, didCopy: await (0, tc.lW)(t.shareUrl) }
                } catch (e) {
                  return (lg(e), { didCopy: !1 })
                }
              },
              onSaveShareTargets: async (e, t) => {
                try {
                  let s = await i.saveShareTargets(e, (e, s) =>
                    sm({ discoverability: t, remotePluginId: e, targets: s }),
                  )
                  return (so(), { canPublishToWorkspace: i.getCurrentShare()?.canPublishToWorkspace, principals: s })
                } catch (e) {
                  throw (
                    eJ
                      .get(R.Id)
                      .danger(
                        eX.formatMessage({
                          id: "plugins.manage.updateSharingError",
                          defaultMessage: "Couldn't update plugin sharing",
                        }),
                        {
                          errorAnalytics: { toastId: "plugins.manage.updateSharingError" },
                          description: (0, y.Rt_)(e),
                        },
                      ),
                    e
                  )
                }
              },
              onUpdateSharedVersion: async () => {
                if (a?.remotePluginId != null)
                  try {
                    ;(await sp({ pluginPath: t, remotePluginId: a.remotePluginId }),
                      so(),
                      eJ
                        .get(R.Id)
                        .success(
                          eX.formatMessage({
                            id: "plugins.manage.updateSharedVersionSuccess",
                            defaultMessage: "Shared version updated",
                          }),
                        ))
                  } catch (e) {
                    throw (
                      eJ
                        .get(R.Id)
                        .danger(
                          eX.formatMessage({
                            id: "plugins.manage.updateSharedVersionError",
                            defaultMessage: "Couldn't update shared version",
                          }),
                          {
                            errorAnalytics: { toastId: "plugins.manage.updateSharedVersionError" },
                            description: (0, y.Rt_)(e),
                          },
                        ),
                      e
                    )
                  }
              },
              shouldShowUpdateSharedVersion: (0, X.z)({ localVersion: e.plugin.localVersion, shareContext: a }),
            })
          }),
          (eQ[92] = tR),
          (eQ[93] = eX),
          (eQ[94] = so),
          (eQ[95] = sp),
          (eQ[96] = eJ),
          (eQ[97] = eq),
          (eQ[98] = lg),
          (eQ[99] = sm),
          (eQ[100] = eL))
        : (eL = eQ[100])
      let lf = eL
      eQ[101] !== lf || eQ[102] !== su
        ? ((eR = su
            ? (e) => {
                lf(e)
              }
            : void 0),
          (eQ[101] = lf),
          (eQ[102] = su),
          (eQ[103] = eR))
        : (eR = eQ[103])
      let lx = eR,
        lb = sr || (su && tL) || ld,
        ly = (0, n.Ul)(eo.Gt)
      eQ[104] !== ly ? ((eD = (0, ei.QO)(ly)), (eQ[104] = ly), (eQ[105] = eD)) : (eD = eQ[105])
      let lv = eD
      eQ[106] !== lv || eQ[107] !== te
        ? ((eU = (e) => {
            te({
              activeProject: lv,
              prefillPrompt: (0, G.KH)({
                defaultPrompt: (0, G.Dy)(e.plugin.interface?.defaultPrompt),
                pluginDisplayName: (0, v.V)(e),
                pluginId: e.plugin.id,
              }),
              startInSidebar: !0,
            })
          }),
          (eQ[106] = lv),
          (eQ[107] = te),
          (eQ[108] = eU))
        : (eU = eQ[108])
      let lj = eU
      eQ[109] !== sI || eQ[110] !== eX || eQ[111] !== tT || eQ[112] !== t6 || eQ[113] !== so || eQ[114] !== eJ
        ? ((eT = async () => {
            ;(tw(!0),
              await (async () => {
                try {
                  ;(tT(), await Promise.all([so(), t6(), sI()]))
                } catch {
                  eJ.get(R.Id).danger(
                    eX.formatMessage({
                      id: "skills.page.refreshFailed",
                      defaultMessage: "Failed to refresh skills and apps",
                    }),
                    { errorAnalytics: { toastId: "skills.page.refreshFailed" } },
                  )
                }
              })().finally(() => {
                tw(!1)
              }))
          }),
          (eQ[109] = sI),
          (eQ[110] = eX),
          (eQ[111] = tT),
          (eQ[112] = t6),
          (eQ[113] = so),
          (eQ[114] = eJ),
          (eQ[115] = eT))
        : (eT = eQ[115])
      let lk = eT
      eQ[116] !== eG
        ? ((eO = (e) => {
            ;(tn(e), eG?.(e))
          }),
          (eQ[116] = eG),
          (eQ[117] = eO))
        : (eO = eQ[117])
      let lS = eO
      eQ[118] !== ta || eQ[119] !== eq
        ? ((eH = (e) => (ta ? (0, q.$W)(e, eq) : (0, q.tK)(e, { hostId: eq }))),
          (eQ[118] = ta),
          (eQ[119] = eq),
          (eQ[120] = eH))
        : (eH = eQ[120])
      let lM = eH
      eQ[121] === Symbol.for("react.memo_cache_sentinel")
        ? ((eV = () => {
            ts.current?.focus()
          }),
          (eQ[121] = eV))
        : (eV = eQ[121])
      let lA = (0, r.useEffectEvent)(eV)
      eQ[122] !== sB
        ? ((ez = async (e) => {
            try {
              await sB({ marketplaceDisplayName: (0, tA.Zr)(e), marketplaceName: e.name })
            } catch {}
          }),
          (eQ[122] = sB),
          (eQ[123] = ez))
        : (ez = eQ[123])
      let lw = ez
      ;(eQ[124] !== lA
        ? ((eB = () => {
            let e = (e) => {
              ;(e.metaKey || e.ctrlKey) &&
                "f" === e.key.toLowerCase() &&
                !(function (e) {
                  if (!(e instanceof HTMLElement)) return !1
                  if (e.isContentEditable) return !0
                  let t = e.tagName.toLowerCase()
                  return (
                    "input" === t || "textarea" === t || "select" === t || null != e.closest("[contenteditable='true']")
                  )
                })(e.target) &&
                (e.preventDefault(), lA())
            }
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e)
              }
            )
          }),
          (eQ[124] = lA),
          (eQ[125] = eB))
        : (eB = eQ[125]),
        eQ[126] === Symbol.for("react.memo_cache_sentinel") ? ((eW = []), (eQ[126] = eW)) : (eW = eQ[126]),
        (0, r.useEffect)(eB, eW),
        eQ[127] !== eX
          ? ((eF = eX.formatMessage({
              id: "skills.appsPage.manageTabs.ariaLabel",
              defaultMessage: "Manage extensions",
            })),
            (eQ[127] = eX),
            (eQ[128] = eF))
          : (eF = eQ[128]))
      let lC = eF
      return (
        eQ[129] !== lC ? ((e$ = (0, l.jsx)(D.Q, { title: lC })), (eQ[129] = lC), (eQ[130] = e$)) : (e$ = eQ[130]),
        (0, l.jsxs)("div", {
          className: "flex h-full min-h-0 flex-col",
          children: [
            e$,
            (0, l.jsx)("div", {
              className: "flex min-h-0 flex-1 flex-col text-base select-none",
              children:
                tl || "mcps" === lc
                  ? (0, l.jsx)(l.Fragment, {
                      children: (0, l.jsxs)("div", {
                        className: "flex-1 overflow-hidden",
                        children: [
                          (0, l.jsx)(tM.d, {
                            className: "flex h-full w-full flex-1 flex-col gap-0",
                            children: (0, l.jsxs)(ed.P, {
                              embedded: !0,
                              fullWidth: !0,
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex flex-wrap items-center justify-between gap-3",
                                  children: [
                                    (0, l.jsx)(t1, {
                                      currentTab: lc,
                                      showNonMcpTabs: tl,
                                      tabCounts: lo,
                                      onSelectTab: lS,
                                    }),
                                    e1
                                      ? null
                                      : (0, l.jsx)("div", {
                                          className: "w-56 min-w-0",
                                          children: (0, l.jsx)(E.s, {
                                            id: "plugins-page-manage-search",
                                            inputRef: ts,
                                            label: lu.searchLabel,
                                            onSearchQueryChange: tk,
                                            placeholder: lu.searchPlaceholder,
                                            searchQuery: tj,
                                            variant: "settings",
                                          }),
                                        }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex min-h-0 flex-1 flex-col",
                                  children: [
                                    "plugins" === lc
                                      ? (0, l.jsx)(ee.S, {
                                          presentation: "settings",
                                          errorMessage: sn,
                                          hostId: eq,
                                          getCopyLinkUrl: lm,
                                          homeDirectory: tR,
                                          pluginInstallationStatus: sD,
                                          isLoading: lb,
                                          installedStateAction: "toggle",
                                          useCompactEmptyState: !0,
                                          onCopyShareLink: (e) => {
                                            lh(e)
                                          },
                                          getPluginDetailTo: lM,
                                          onOpenPluginDetails: (e, t) =>
                                            (0, K.y)(t, () =>
                                              e6(() => {
                                                e3(lM(e))
                                              }),
                                            ),
                                          onShareInstalledPlugin: lx,
                                          onTryInChat: su
                                            ? (e) => {
                                                lj(e)
                                              }
                                            : void 0,
                                          plugins: le,
                                          unavailablePluginIds: ls,
                                          onInstallPlugin: async (e) => {
                                            sR(e, {
                                              activeProject: lv,
                                              hostId: eq,
                                              marketplaceAnalytics: tu.F.settings,
                                              onSuccess: so,
                                            })
                                          },
                                          onUninstallInstalledPlugin: sH,
                                          onToggleInstalledPluginEnabled: sO,
                                          pendingPluginId: sT,
                                          uninstalling: sU,
                                          reducedMotion: e9,
                                          emptyStateTitle: (0, l.jsx)(o.A, {
                                            id: "skills.appsPage.empty.plugins",
                                            defaultMessage: "No plugins found",
                                          }),
                                        })
                                      : "skills" === lc
                                        ? (0, l.jsx)(tW.j, {
                                            gap: "compact",
                                            hostId: eq,
                                            installedStateAction: "toggle",
                                            isLoading: tU || t3,
                                            isSingleColumn: !0,
                                            roots: tO,
                                            skillEntries: ll,
                                            useCompactEmptyState: !0,
                                            onSkillsUpdated: tT,
                                          })
                                        : "mcps" === lc
                                          ? null
                                          : "marketplace" === lc
                                            ? (0, l.jsx)(t0, {
                                                configuredMarketplaceNames: s2,
                                                configuredGitMarketplaceNames: s1,
                                                hostId: eq,
                                                isRefreshingPage: tS,
                                                isUpgradingMarketplaces: sV,
                                                onUpgradeMarketplace: (e) => {
                                                  lw(e)
                                                },
                                                onRemoveMarketplace: (e) => {
                                                  t_({ hostId: eq, marketplace: e, roots: tO })
                                                },
                                                onRetry: lk,
                                                pendingUpgradeMarketplaceName: sz,
                                                searchQuery: s4,
                                              })
                                            : null == sP
                                              ? (0, l.jsx)(ty, {
                                                  errorMessage: sL,
                                                  isLoading: sN,
                                                  isRetrying: s_,
                                                  onRetry: lp,
                                                })
                                              : (0, l.jsxs)("div", {
                                                  className: "flex flex-col gap-6",
                                                  children: [
                                                    null != sL
                                                      ? (0, l.jsx)(tb, {
                                                          errorMessage: sL,
                                                          isRetrying: s_,
                                                          onRetry: lp,
                                                        })
                                                      : null,
                                                    (0, l.jsx)(tv, {
                                                      apps: li,
                                                      effectiveConfig: sC,
                                                      emptyStateTitle:
                                                        0 === la.length
                                                          ? (0, l.jsx)(o.A, {
                                                              id: "skills.appsPage.empty.installedApps",
                                                              defaultMessage: "No installed apps",
                                                            })
                                                          : (0, l.jsx)(o.A, {
                                                              id: "search.empty.title",
                                                              defaultMessage: "No results found",
                                                            }),
                                                      installedStateAction: "toggle",
                                                      isConfigPending: sw,
                                                      useCompactEmptyState: !0,
                                                      isAppConnectPending: sY,
                                                      updatingAppId: sZ,
                                                      onInstallApp: async (e) => {
                                                        ;(tx(null), await sK(e))
                                                      },
                                                      onOpenAppTools: (e) => {
                                                        tP(e.id)
                                                      },
                                                      onSetAppEnabled: sG,
                                                    }),
                                                  ],
                                                }),
                                    (0, l.jsx)(
                                      "div",
                                      {
                                        hidden: "mcps" !== lc,
                                        className: "flex min-h-0 flex-1 flex-col",
                                        children: (0, l.jsx)(f.ek, {
                                          entry: to.$,
                                          anchored: "mcps" === lc,
                                          className: "flex min-h-0 flex-1 flex-col",
                                          children: (0, l.jsx)(e8, {
                                            creation: eY,
                                            cwd: null,
                                            hostId: eq,
                                            searchQuery: tj,
                                            useActiveWorkspaceRoot: sf,
                                          }),
                                        }),
                                      },
                                      eq,
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          null != tI &&
                            (0, l.jsx)(
                              tz,
                              {
                                hostId: tI.hostId,
                                marketplace: tI.marketplace,
                                roots: tI.roots,
                                onOpenChange: (e) => {
                                  e || t_(null)
                                },
                              },
                              `${tI.hostId}:${tI.marketplace.name}`,
                            ),
                          (0, l.jsx)(ec.Z, {
                            app: s$ ?? s3,
                            appConnectOptions: sQ,
                            hostId: eq,
                            isCompletingConnection: s6,
                            onOpenChange: (e) => {
                              e || (sF(), tx(null))
                            },
                            onOAuthStarted: (e) => sq({ ...e, appConnectOptions: sQ }),
                            onConnected: () => {
                              ;(tx(null), (0, M.U)({ hostId: eq, queryClient: tt, refreshAppsList: sI }).catch(tQ))
                            },
                          }),
                          (0, l.jsx)(th.B, {
                            app: ek,
                            appRestriction: sJ,
                            errorMessage: sX.error?.message ?? null,
                            isConfigPending: sw,
                            isLoading: sX.isLoading,
                            onOpenChange: (e) => {
                              e || tP(null)
                            },
                            onSetAppEnabled: sG,
                            onTryInChat: (e) => {
                              te({
                                activeProject: lv,
                                prefillPrompt: `[@${e.name}](${(0, I.b4)((0, P.nw)(e.id))})`,
                                startInSidebar: !0,
                              })
                            },
                            tools: sX.data?.tools ?? [],
                            events: sX.data?.events ?? [],
                            updatingAppId: sZ,
                          }),
                        ],
                      }),
                    })
                  : (0, l.jsx)(tX, {}),
            }),
          ],
        })
      )
    }
    function tQ(e) {
      e7.v.error("Failed to refresh apps after directory app connect", { safe: {}, sensitive: { error: e } })
    }
    function tq() {
      return null
    }
    function tK() {
      return null
    }
    function tY(e) {
      return (0, $.I)(e.plugin.id)
    }
    function tG(e) {
      return !(0, ea._s)(e)
    }
    function tZ(e) {
      return e.plugin.id
    }
    function tJ(e) {
      return e.plugin.id
    }
    function tX() {
      let e,
        t = (0, a.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center",
              children: (0, l.jsx)(_.A, {
                title: (0, l.jsx)(o.A, {
                  id: "skills.appsPage.pluginsUnsupportedHost.title",
                  defaultMessage: "Plugins are not available for this host",
                }),
                description: (0, l.jsx)(o.A, {
                  id: "skills.appsPage.pluginsUnsupportedHost.description",
                  defaultMessage: "Choose another host to browse and manage plugins",
                }),
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function t0(e) {
      let t,
        s,
        i,
        r,
        o,
        d = (0, a.c)(24),
        {
          configuredGitMarketplaceNames: c,
          configuredMarketplaceNames: u,
          hostId: p,
          isRefreshingPage: m,
          isUpgradingMarketplaces: g,
          onRemoveMarketplace: h,
          onRetry: f,
          onUpgradeMarketplace: x,
          pendingUpgradeMarketplaceName: b,
          searchQuery: y,
        } = e,
        { data: v, error: j, isLoading: k, isFetching: S, refetch: M } = (0, n._U)(el.M, p)
      ;(d[0] !== v?.marketplaces ? ((t = v?.marketplaces ?? []), (d[0] = v?.marketplaces), (d[1] = t)) : (t = d[1]),
        d[2] !== u || d[3] !== y || d[4] !== t
          ? ((s = (0, tA.HZ)({ configuredMarketplaceNames: u, marketplaces: t, query: y })),
            (d[2] = u),
            (d[3] = y),
            (d[4] = t),
            (d[5] = s))
          : (s = d[5]))
      let A = s,
        w = j?.message ?? null,
        C = m || S
      return (
        d[6] !== v?.marketplaceLoadErrors
          ? ((i = v?.marketplaceLoadErrors ?? []), (d[6] = v?.marketplaceLoadErrors), (d[7] = i))
          : (i = d[7]),
        d[8] !== f || d[9] !== M
          ? ((r = async () => {
              await Promise.all([f(), M()])
            }),
            (d[8] = f),
            (d[9] = M),
            (d[10] = r))
          : (r = d[10]),
        d[11] !== c ||
        d[12] !== u ||
        d[13] !== k ||
        d[14] !== g ||
        d[15] !== A ||
        d[16] !== h ||
        d[17] !== x ||
        d[18] !== b ||
        d[19] !== w ||
        d[20] !== C ||
        d[21] !== i ||
        d[22] !== r
          ? ((o = (0, l.jsx)(tw, {
              configuredGitMarketplaceNames: c,
              configuredMarketplaceNames: u,
              errorMessage: w,
              isLoading: k,
              isRetrying: C,
              isUpgradingMarketplaces: g,
              marketplaceLoadErrors: i,
              marketplaces: A,
              onRemoveMarketplace: h,
              onRetry: r,
              onUpgradeMarketplace: x,
              pendingUpgradeMarketplaceName: b,
            })),
            (d[11] = c),
            (d[12] = u),
            (d[13] = k),
            (d[14] = g),
            (d[15] = A),
            (d[16] = h),
            (d[17] = x),
            (d[18] = b),
            (d[19] = w),
            (d[20] = C),
            (d[21] = i),
            (d[22] = r),
            (d[23] = o))
          : (o = d[23]),
        o
      )
    }
    function t1(e) {
      let t,
        s,
        i,
        n,
        r,
        o,
        d,
        c,
        u,
        p,
        m,
        g,
        h,
        f,
        x = (0, a.c)(41),
        { currentTab: b, onSelectTab: y, showNonMcpTabs: v, tabCounts: k } = e,
        S = (0, j.A)(),
        M = k.plugins
      ;(x[0] !== S
        ? ((t = S.formatMessage({ id: "skills.appsPage.manageTab.plugins", defaultMessage: "Plugins" })),
          (x[0] = S),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== t || x[3] !== k.plugins
          ? ((s = { count: M, id: "plugins", label: t }), (x[2] = t), (x[3] = k.plugins), (x[4] = s))
          : (s = x[4]))
      let A = k.apps
      ;(x[5] !== S
        ? ((i = S.formatMessage({ id: "skills.appsPage.manageTab.apps", defaultMessage: "Apps" })),
          (x[5] = S),
          (x[6] = i))
        : (i = x[6]),
        x[7] !== i || x[8] !== k.apps
          ? ((n = { count: A, id: "apps", label: i }), (x[7] = i), (x[8] = k.apps), (x[9] = n))
          : (n = x[9]))
      let w = k.mcps
      ;(x[10] !== S
        ? ((r = S.formatMessage({ id: "skills.appsPage.manageTab.mcps", defaultMessage: "MCPs" })),
          (x[10] = S),
          (x[11] = r))
        : (r = x[11]),
        x[12] !== r || x[13] !== k.mcps
          ? ((o = { count: w, id: "mcps", label: r }), (x[12] = r), (x[13] = k.mcps), (x[14] = o))
          : (o = x[14]))
      let C = k.skills
      ;(x[15] !== S
        ? ((d = S.formatMessage({ id: "skills.appsPage.manageTab.skills", defaultMessage: "Skills" })),
          (x[15] = S),
          (x[16] = d))
        : (d = x[16]),
        x[17] !== d || x[18] !== k.skills
          ? ((c = { count: C, id: "skills", label: d }), (x[17] = d), (x[18] = k.skills), (x[19] = c))
          : (c = x[19]))
      let P = k.marketplace
      ;(x[20] !== S
        ? ((u = S.formatMessage({ id: "skills.appsPage.manageTab.marketplace", defaultMessage: "Marketplace" })),
          (x[20] = S),
          (x[21] = u))
        : (u = x[21]),
        x[22] !== u || x[23] !== k.marketplace
          ? ((p = { count: P, id: "marketplace", label: u }), (x[22] = u), (x[23] = k.marketplace), (x[24] = p))
          : (p = x[24]),
        x[25] !== c || x[26] !== p || x[27] !== s || x[28] !== n || x[29] !== o
          ? ((m = [s, n, o, c, p]), (x[25] = c), (x[26] = p), (x[27] = s), (x[28] = n), (x[29] = o), (x[30] = m))
          : (m = x[30]))
      let I = m
      return (
        x[31] !== S
          ? ((g = S.formatMessage({ id: "skills.appsPage.manageTabs.ariaLabel", defaultMessage: "Manage extensions" })),
            (x[31] = S),
            (x[32] = g))
          : (g = x[32]),
        x[33] !== v || x[34] !== I
          ? ((h = I.filter((e) => "mcps" === e.id || (v && e.count > 0)).map(t2)),
            (x[33] = v),
            (x[34] = I),
            (x[35] = h))
          : (h = x[35]),
        x[36] !== b || x[37] !== y || x[38] !== g || x[39] !== h
          ? ((f = (0, l.jsx)(L.T, { ariaLabel: g, options: h, selectedId: b, size: "toolbar", onSelect: y })),
            (x[36] = b),
            (x[37] = y),
            (x[38] = g),
            (x[39] = h),
            (x[40] = f))
          : (f = x[40]),
        f
      )
    }
    function t2(e) {
      return {
        id: e.id,
        label: (0, l.jsxs)(l.Fragment, {
          children: [e.label, (0, l.jsx)("span", { className: "ms-0.5 text-tertiary", children: e.count })],
        }),
      }
    }
    var t3 = s("CV1W"),
      t6 = s("fnPc"),
      t4 = s("ueRx")
    let t5 = (0, p._)(
      async () =>
        (
          await Promise.all([
            s.e(579325),
            s.e(712262),
            s.e(978338),
            s.e(141674),
            s.e(584510),
            s.e(634780),
            s.e(474358),
            s.e(199339),
          ]).then(s.bind(s, "sVPp"))
        ).PluginDetailSettingsRoutes,
      { fallback: (0, l.jsx)(t4.M, { section: "plugins-settings" }), propagateLoadError: !0 },
    )
    function t7(e) {
      let t,
        s,
        p,
        b,
        y,
        v,
        j,
        k,
        S,
        M,
        A,
        w,
        C,
        P = (0, a.c)(40)
      P[0] !== e ? ((t = void 0 === e ? {} : e), (P[0] = e), (P[1] = t)) : (t = P[1])
      let { manageOnly: I } = t,
        _ = void 0 !== I && I,
        { selectedHostId: N } = (0, t6.D8)(),
        E = (0, d.zy)(),
        L = (0, d.Zp)(),
        R = (0, r.useContext)(c.X),
        D = (0, d.RQ)("/settings/plugins-settings/*"),
        U = (0, n._U)(g.V, x.fI),
        [T, O] = (0, r.useState)("plugins"),
        H = "mcps" === new URLSearchParams(E.search).get("tab") ? "mcps" : void 0,
        [V, z] = (0, r.useState)(!1)
      if (D?.params["*"]) {
        let e
        return (
          P[2] !== U
            ? ((e = U ? (0, l.jsx)(t5, {}) : (0, l.jsx)(d.C5, { replace: !0, to: (0, t3.i4)() })),
              (P[2] = U),
              (P[3] = e))
            : (e = P[3]),
          e
        )
      }
      let B = _ ? "mcps" : "plugins"
      ;(P[4] !== V || P[5] !== _
        ? ((s = _ ? void 0 : { isAdding: V, onClose: () => z(!1) }), (P[4] = V), (P[5] = _), (P[6] = s))
        : (s = P[6]),
        P[7] !== E || P[8] !== L || P[9] !== H
          ? ((p = (e) => {
              if ((O(e), null != H && e !== H)) {
                let e = new URLSearchParams(E.search)
                ;(e.delete("tab"), L({ ...E, search: e.toString() }, { replace: !0, state: E.state }))
              }
            }),
            (P[7] = E),
            (P[8] = L),
            (P[9] = H),
            (P[10] = p))
          : (p = P[10]),
        P[11] !== H || P[12] !== N || P[13] !== B || P[14] !== s || P[15] !== p
          ? ((b = (0, l.jsx)(t$, {
              hostId: N,
              initialManageTab: B,
              mcpServerCreation: s,
              requestedTab: H,
              onManageTabSelect: p,
            })),
            (P[11] = H),
            (P[12] = N),
            (P[13] = B),
            (P[14] = s),
            (P[15] = p),
            (P[16] = b))
          : (b = P[16]))
      let W = b
      return _
        ? W
        : (P[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = (0, l.jsx)(e5.s, { slug: "plugins-settings" })),
              (v = (0, l.jsx)(o.A, {
                id: "settings.section.plugins-settings.subtitle",
                defaultMessage: "Manage plugins, skills, and MCPs",
              })),
              (P[17] = y),
              (P[18] = v))
            : ((y = P[17]), (v = P[18])),
          P[19] !== L || P[20] !== R || P[21] !== H || P[22] !== N || P[23] !== T
            ? ((j = () =>
                R(() => {
                  L("/plugins", {
                    state: {
                      initialHostId: N,
                      initialTab: (H ?? T) === "skills" ? "skills" : "plugins",
                      pluginDirectoryEntrypoint:
                        i.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
                    },
                  })
                })),
              (P[19] = L),
              (P[20] = R),
              (P[21] = H),
              (P[22] = N),
              (P[23] = T),
              (P[24] = j))
            : (j = P[24]),
          P[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, l.jsx)(f.Ct, { title: h.k1.title })), (P[25] = k))
            : (k = P[25]),
          P[26] !== j
            ? ((S = (0, l.jsx)(f.ek, {
                entry: h.k1,
                children: (0, l.jsx)(u.$, { color: "outline", size: "toolbar", onClick: j, children: k }),
              })),
              (P[26] = j),
              (P[27] = S))
            : (S = P[27]),
          P[28] !== V || P[29] !== R
            ? ((M = () => {
                V || R(() => z(!0))
              }),
              (P[28] = V),
              (P[29] = R),
              (P[30] = M))
            : (M = P[30]),
          P[31] !== N || P[32] !== M
            ? ((A = (0, l.jsx)(m.o, {
                mode: "manage",
                hostId: N,
                onAddMcpServer: M,
                source: i.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
              })),
              (P[31] = N),
              (P[32] = M),
              (P[33] = A))
            : (A = P[33]),
          P[34] !== S || P[35] !== A
            ? ((w = (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [S, A] })),
              (P[34] = S),
              (P[35] = A),
              (P[36] = w))
            : (w = P[36]),
          P[37] !== W || P[38] !== w
            ? ((C = (0, l.jsx)(ed.P, { title: y, subtitle: v, action: w, children: W })),
              (P[37] = W),
              (P[38] = w),
              (P[39] = C))
            : (C = P[39]),
          C)
    }
  },
  pO0d(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("oyxz"),
      n = s("Wf1j"),
      r = s("AWNZ"),
      o = s("DDOY")
    function d(e) {
      let t,
        s = (0, a.c)(2),
        { title: n } = e
      return (
        s[0] !== n
          ? ((t =
              "localizedText" in n ? (0, l.jsx)(l.Fragment, { children: n.localizedText }) : (0, l.jsx)(i.A, { ...n })),
            (s[0] = n),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        Ct: d,
        GC: function (e) {
          let t,
            s,
            n,
            o,
            c,
            u,
            p,
            m,
            g,
            h = (0, a.c)(19)
          h[0] !== e
            ? (({ entry: s, anchored: c, description: t, renderLabel: o, ...n } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = s),
              (h[3] = n),
              (h[4] = o),
              (h[5] = c))
            : ((t = h[1]), (s = h[2]), (n = h[3]), (o = h[4]), (c = h[5]))
          let f = void 0 === c || c
          h[6] !== s.title ? ((u = (0, l.jsx)(d, { title: s.title })), (h[6] = s.title), (h[7] = u)) : (u = h[7])
          let x = u,
            b = f ? s.id : void 0
          return (
            h[8] !== x || h[9] !== o ? ((p = null == o ? x : o(x)), (h[8] = x), (h[9] = o), (h[10] = p)) : (p = h[10]),
            h[11] !== t || h[12] !== s.description
              ? ((m = null == s.description ? t : (0, l.jsx)(i.A, { ...s.description })),
                (h[11] = t),
                (h[12] = s.description),
                (h[13] = m))
              : (m = h[13]),
            h[14] !== n || h[15] !== b || h[16] !== p || h[17] !== m
              ? ((g = (0, l.jsx)(r.ic, { ...n, searchAnchor: b, label: p, description: m })),
                (h[14] = n),
                (h[15] = b),
                (h[16] = p),
                (h[17] = m),
                (h[18] = g))
              : (g = h[18]),
            g
          )
        },
        ek: function (e) {
          let t,
            s,
            i = (0, a.c)(12),
            { entry: r, anchored: d, className: c, children: u } = e,
            p = void 0 === d || d,
            m = (0, n.A)(),
            g = p ? r.id : void 0,
            h = p ? r.id : void 0,
            f = p ? -1 : void 0,
            x = p ? "group" : void 0
          return (
            i[0] !== p || i[1] !== r || i[2] !== m
              ? ((t = p ? (0, o.hz)(m, r.title) : void 0), (i[0] = p), (i[1] = r), (i[2] = m), (i[3] = t))
              : (t = i[3]),
            i[4] !== u || i[5] !== c || i[6] !== g || i[7] !== h || i[8] !== f || i[9] !== x || i[10] !== t
              ? ((s = (0, l.jsx)("div", {
                  id: g,
                  "data-settings-search-entry": h,
                  tabIndex: f,
                  role: x,
                  "aria-label": t,
                  className: c,
                  children: u,
                })),
                (i[4] = u),
                (i[5] = c),
                (i[6] = g),
                (i[7] = h),
                (i[8] = f),
                (i[9] = x),
                (i[10] = t),
                (i[11] = s))
              : (s = i[11]),
            s
          )
        },
        iu: function (e) {
          let t,
            s,
            i,
            n = (0, a.c)(6)
          return (
            n[0] !== e ? (({ action: t, ...s } = e), (n[0] = e), (n[1] = t), (n[2] = s)) : ((t = n[1]), (s = n[2])),
            n[3] !== t || n[4] !== s
              ? ((i = (0, l.jsx)(r.ic, { ...s, control: t })), (n[3] = t), (n[4] = s), (n[5] = i))
              : (i = n[5]),
            i
          )
        },
        kk: function (e) {
          let t,
            s,
            n,
            o,
            c,
            u,
            p,
            m = (0, a.c)(15)
          m[0] !== e
            ? (({ entry: s, anchored: o, description: t, ...n } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = s),
              (m[3] = n),
              (m[4] = o))
            : ((t = m[1]), (s = m[2]), (n = m[3]), (o = m[4]))
          let g = void 0 === o || o ? s.id : void 0
          return (
            m[5] !== s.title ? ((c = (0, l.jsx)(d, { title: s.title })), (m[5] = s.title), (m[6] = c)) : (c = m[6]),
            m[7] !== t || m[8] !== s.description
              ? ((u = null == s.description ? t : (0, l.jsx)(i.A, { ...s.description })),
                (m[7] = t),
                (m[8] = s.description),
                (m[9] = u))
              : (u = m[9]),
            m[10] !== n || m[11] !== g || m[12] !== c || m[13] !== u
              ? ((p = (0, l.jsx)(r.kG, { ...n, searchAnchor: g, label: c, description: u })),
                (m[10] = n),
                (m[11] = g),
                (m[12] = c),
                (m[13] = u),
                (m[14] = p))
              : (p = m[14]),
            p
          )
        },
      },
    )
  },
  BSnr(e, t, s) {
    s.d(t, { X: () => n })
    var l = s("ABep"),
      a = s("QosV"),
      i = s("on57")
    let n = Object.assign(
      function (e) {
        let t,
          s,
          n = (0, a.c)(6),
          { children: r, id: o, className: d } = e
        return (
          n[0] !== d ? ((t = (0, i.A)("flex flex-col", d)), (n[0] = d), (n[1] = t)) : (t = n[1]),
          n[2] !== r || n[3] !== o || n[4] !== t
            ? ((s = (0, l.jsx)("section", { id: o, className: t, children: r })),
              (n[2] = r),
              (n[3] = o),
              (n[4] = t),
              (n[5] = s))
            : (s = n[5]),
          s
        )
      },
      {
        Header: function (e) {
          let t,
            s,
            n,
            r,
            o,
            d,
            c,
            u = (0, a.c)(33),
            {
              title: p,
              subtitle: m,
              actions: g,
              actionsAlignment: h,
              className: f,
              size: x,
              showDivider: b,
              titleGap: y,
              spacing: v,
              subtitlePlacement: j,
              subtitleWrap: k,
            } = e,
            S = void 0 === x ? "default" : x,
            M = void 0 === v ? "default" : v,
            A = void 0 === j ? "below-title" : j,
            w = void 0 === k ? "balance" : k,
            C = null != p,
            P = null != m,
            I = null != g,
            _ = "compact" === S
          u[0] !== _ || u[1] !== m || u[2] !== A || u[3] !== w
            ? ((t = m
                ? (0, l.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === w ? "text-balance" : "text-wrap",
                      _ ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = _),
              (u[1] = m),
              (u[2] = A),
              (u[3] = w),
              (u[4] = t))
            : (t = u[4])
          let N = t
          if (!C && !P && !I) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(l.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let E =
              C && (void 0 === b || b) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            L = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            R = P && "compact" === M && "pb-2",
            D = P && "compact" !== M && "pb-3"
          u[6] !== f ||
          u[7] !== P ||
          u[8] !== _ ||
          u[9] !== M ||
          u[10] !== R ||
          u[11] !== D ||
          u[12] !== E ||
          u[13] !== L
            ? ((s = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                E,
                L,
                R,
                D,
                !P && (0, i.A)("items-center pb-1.5", "compact" === M ? "min-h-8" : "min-h-toolbar"),
                P && _ && "items-center",
                P && !_ && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = P),
              (u[8] = _),
              (u[9] = M),
              (u[10] = R),
              (u[11] = D),
              (u[12] = E),
              (u[13] = L),
              (u[14] = s))
            : (s = u[14])
          let U =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== U ? ((n = (0, i.A)("flex min-w-0 flex-1 flex-col", U)), (u[15] = U), (u[16] = n)) : (n = u[16]),
            u[17] !== P || u[18] !== S || u[19] !== p
              ? ((r = p
                  ? (0, l.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === S && "text-sm leading-[18px]",
                        ("large" === S || ("default" === S && P)) && "text-lg",
                        ("base" === S || ("default" === S && !P)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[17] = P),
                (u[18] = S),
                (u[19] = p),
                (u[20] = r))
              : (r = u[20]))
          let T = "below-title" === A ? N : null
          ;(u[21] !== n || u[22] !== r || u[23] !== T
            ? ((o = (0, l.jsxs)("div", { className: n, children: [r, T] })),
              (u[21] = n),
              (u[22] = r),
              (u[23] = T),
              (u[24] = o))
            : (o = u[24]),
            u[25] !== g || u[26] !== h
              ? ((d = g
                  ? (0, l.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: g,
                    })
                  : null),
                (u[25] = g),
                (u[26] = h),
                (u[27] = d))
              : (d = u[27]))
          let O = "below-header" === A ? N : null
          return (
            u[28] !== s || u[29] !== o || u[30] !== d || u[31] !== O
              ? ((c = (0, l.jsxs)("div", { className: s, children: [o, d, O] })),
                (u[28] = s),
                (u[29] = o),
                (u[30] = d),
                (u[31] = O),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            s,
            n = (0, a.c)(5),
            { children: r, className: o } = e
          return (
            n[0] !== o ? ((t = (0, i.A)("flex flex-col gap-1.5", o)), (n[0] = o), (n[1] = t)) : (t = n[1]),
            n[2] !== r || n[3] !== t
              ? ((s = (0, l.jsx)("div", { className: t, children: r })), (n[2] = r), (n[3] = t), (n[4] = s))
              : (s = n[4]),
            s
          )
        },
        Footer: function (e) {
          let t,
            s,
            n = (0, a.c)(6),
            { children: r, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            n[0] !== o || n[1] !== c
              ? ((t = (0, i.A)("text-balance text-secondary", c, o)), (n[0] = o), (n[1] = c), (n[2] = t))
              : (t = n[2]),
            n[3] !== r || n[4] !== t
              ? ((s = (0, l.jsx)("div", { className: t, children: r })), (n[3] = r), (n[4] = t), (n[5] = s))
              : (s = n[5]),
            s
          )
        },
      },
    )
  },
  ueRx(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("oyxz"),
      n = s("CnsO"),
      r = s("pjIx"),
      o = s("jxU8"),
      d = s("odCE"),
      c = s("QyE3")
    s.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            s,
            u,
            p,
            m,
            g = (0, a.c)(14),
            { section: h, showTitle: f } = e,
            x = void 0 !== f && f
          ;(g[0] !== h
            ? ((t = "personalization" === h ? (0, l.jsx)(i.A, { ...r.i.loading }) : void 0), (g[0] = h), (g[1] = t))
            : (t = g[1]),
            g[2] !== t ? ((s = (0, l.jsx)(d.j, { children: t })), (g[2] = t), (g[3] = s)) : (s = g[3]))
          let b = s
          g[4] !== h || g[5] !== x
            ? ((u = x ? (0, l.jsx)(c.s, { slug: h }) : null), (g[4] = h), (g[5] = x), (g[6] = u))
            : (u = g[6])
          let y = x ? void 0 : "min-h-full items-center justify-center"
          return (
            g[7] !== b || g[8] !== x
              ? ((p = x ? (0, l.jsx)(n.y, { children: b }) : b), (g[7] = b), (g[8] = x), (g[9] = p))
              : (p = g[9]),
            g[10] !== u || g[11] !== y || g[12] !== p
              ? ((m = (0, l.jsx)(o.P, { title: u, contentClassName: y, children: p })),
                (g[10] = u),
                (g[11] = y),
                (g[12] = p),
                (g[13] = m))
              : (m = g[13]),
            m
          )
        },
      },
    )
  },
  DDOY(e, t, s) {
    var l = s("Ywss"),
      a = s("iiZm")
    function i(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    s.d(
      t,
      {},
      {
        Xl: function (e, t, s) {
          let a = (0, l.Rr)(e),
            i = new URLSearchParams(a.search)
          for (let [e, t] of Object.entries(s ?? {})) i.set(e, t)
          return (0, l.AO)({ ...a, search: i.toString(), hash: t })
        },
        hz: i,
        s9: function (e, t, s) {
          let l = s.trim()
          return 0 === l.length
            ? []
            : e
                .flatMap((e) => {
                  let s = i(t, e.title),
                    n = (0, a.gr)(s, l),
                    r = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(l.toLocaleLowerCase(t.locale)),
                    o = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, a.gr)(i(t, e), l) > 0)
                  return 0 !== n || r || o
                    ? [
                        {
                          id: e.id,
                          label: s,
                          score: n,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: s, path: l, searchParams: a }) => ({
                  id: e,
                  label: t,
                  sectionSlug: s,
                  ...(null == l ? {} : { path: l }),
                  searchParams: a,
                }))
        },
      },
    )
  },
  UBJK(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("bTvG"),
      n = s("slpy"),
      r = s("HaM6"),
      o = s("on57"),
      d = s("qmMi"),
      c = s("zd8w"),
      u = s("Qgfj"),
      p = s("Wf1j"),
      m = s("oyxz"),
      g = s("hPoZ"),
      h = s("FvYa"),
      f = s("TjgH"),
      x = s("Sm6l"),
      b = s("HOLv"),
      y = s("F0xz"),
      v = s("GCsp"),
      j = s("Rvwy"),
      k = s("r4En"),
      S = s("BWYN"),
      M = s("yGJW"),
      A = s("OWtl"),
      w = s("hobO"),
      C = s("HipH")
    let P = (0, S.j$)({
        conversationId: null,
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
        openTarget: "external-browser",
      }),
      I = (0, u.YK)({
        disableApp: { id: "skills.appsPage.toolsDialog.disableApp", defaultMessage: "Disable app" },
        enableApp: { id: "skills.appsPage.toolsDialog.enableApp", defaultMessage: "Enable app" },
        unattributedDisablement: {
          id: "skills.appsPage.toolsDialog.unattributedDisablement",
          defaultMessage: "This app is disabled",
        },
        loadingProjectSettings: {
          id: "skills.appsPage.toolsDialog.loadingProjectSettings",
          defaultMessage: "Loading project settings\u2026",
        },
        disabledBadge: { id: "skills.appsPage.toolsDialog.disabledBadge", defaultMessage: "Disabled" },
        subtitle: { id: "skills.appsPage.toolsDialog.subtitle", defaultMessage: "Tools for this app" },
        subtitleWithEvents: {
          id: "skills.appsPage.toolsDialog.subtitleWithEvents",
          defaultMessage: "Tools and events for this app",
        },
      })
    function _(e) {
      return `${e.tools.length} ${e.title.toLowerCase()}`
    }
    function N(e) {
      let t,
        s = (0, a.c)(2)
      return (
        s[0] !== e
          ? ((t = (0, l.jsxs)(l.Fragment, {
              children: [null, (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(w.d5, { ...e }) })],
            })),
            (s[0] = e),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function E(e) {
      let t,
        s,
        i,
        n,
        r = (0, a.c)(16),
        { appId: d, events: u, isAppDisabledWithoutRestriction: p, toolSections: g } = e
      r[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (r[0] = t)) : (t = r[0])
      let [h, f] = (0, c.useState)(t)
      if (r[1] !== d || r[2] !== h || r[3] !== p || r[4] !== g) {
        let e
        ;(r[6] !== d || r[7] !== h || r[8] !== p
          ? ((e = (e) => {
              let t = !0 === h[e.title]
              return (0, l.jsxs)(
                "div",
                {
                  className: "border-b border-border/70 last:border-b-0",
                  children: [
                    (0, l.jsxs)("button", {
                      type: "button",
                      className:
                        "sticky top-0 z-10 flex w-full items-center justify-between bg-surface-secondary p-2.5 text-start text-base text-default",
                      "aria-expanded": !t,
                      onClick: () => {
                        f((s) => ({ ...s, [e.title]: !t }))
                      },
                      children: [
                        (0, l.jsxs)("span", {
                          children: [
                            e.title,
                            (0, l.jsx)("span", { className: "ms-2 text-tertiary", children: e.tools.length }),
                          ],
                        }),
                        (0, l.jsx)(v.A, {
                          className: t
                            ? "icon-xs shrink-0 -rotate-90 text-tertiary transition-transform"
                            : "icon-xs shrink-0 text-tertiary transition-transform",
                        }),
                      ],
                    }),
                    t
                      ? null
                      : (0, l.jsx)("div", {
                          className: "divide-y divide-border/70",
                          children: e.tools.map((e) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                className: (0, o.A)(
                                  "grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5",
                                  ("disabled_by_admin" === e.disabledReason ||
                                    null != e.configRestriction ||
                                    !1 === e.isEnabled) &&
                                    "opacity-60",
                                ),
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: "min-w-0 text-default",
                                    children: [
                                      (0, l.jsx)(R, { name: e.name }),
                                      (0, l.jsx)(C.QW, { appId: d, isAppDisabledWithoutRestriction: p, tool: e }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text-base text-secondary",
                                    children: (0, l.jsx)(k.Markdown, {
                                      className: "text-base",
                                      components: { a: P },
                                      cwd: null,
                                      children: e.description,
                                    }),
                                  }),
                                ],
                              },
                              e.name,
                            ),
                          ),
                        }),
                  ],
                },
                e.title,
              )
            }),
            (r[6] = d),
            (r[7] = h),
            (r[8] = p),
            (r[9] = e))
          : (e = r[9]),
          (s = g.map(e)),
          (r[1] = d),
          (r[2] = h),
          (r[3] = p),
          (r[4] = g),
          (r[5] = s))
      } else s = r[5]
      return (
        r[10] !== u || r[11] !== g.length
          ? ((i =
              u.length > 0
                ? (0, l.jsxs)("div", {
                    className: (0, o.A)("border-b border-border/70", g.length > 0 && "mt-4"),
                    children: [
                      (0, l.jsx)("div", {
                        className: "bg-surface-secondary p-2.5 text-base text-default",
                        children: (0, l.jsx)(m.A, {
                          id: "skills.appsPage.toolsDialog.events",
                          defaultMessage: "Events",
                        }),
                      }),
                      (0, l.jsx)("div", { className: "divide-y divide-border/70", children: u.map(L) }),
                    ],
                  })
                : null),
            (r[10] = u),
            (r[11] = g.length),
            (r[12] = i))
          : (i = r[12]),
        r[13] !== s || r[14] !== i
          ? ((n = (0, l.jsxs)("div", { className: "flex flex-col", children: [s, i] })),
            (r[13] = s),
            (r[14] = i),
            (r[15] = n))
          : (n = r[15]),
        n
      )
    }
    function L(e) {
      return (0, l.jsxs)(
        "div",
        {
          className: "grid grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-x-3 p-2.5",
          children: [
            (0, l.jsx)("div", { className: "min-w-0 text-default", children: (0, l.jsx)(R, { name: e.name }) }),
            (0, l.jsx)("div", {
              className: "text-base text-secondary",
              children: (0, l.jsx)(k.Markdown, {
                className: "text-base",
                components: { a: P },
                cwd: null,
                children: e.description,
              }),
            }),
          ],
        },
        e.name,
      )
    }
    function R(e) {
      let t,
        s,
        i = (0, a.c)(5),
        { name: r } = e
      return (
        i[0] !== r
          ? ((t = (0, l.jsx)("div", { className: "truncate text-base", children: r })), (i[0] = r), (i[1] = t))
          : (t = i[1]),
        i[2] !== r || i[3] !== t
          ? ((s = (0, l.jsx)(n.m, { content: r, enabledWhen: "target-overflows", children: t })),
            (i[2] = r),
            (i[3] = t),
            (i[4] = s))
          : (s = i[4]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            s,
            n,
            o,
            u,
            v,
            k,
            S,
            P,
            L,
            R,
            D,
            U,
            T,
            O,
            H,
            V,
            z = (0, a.c)(99),
            {
              app: B,
              appRestriction: W,
              errorMessage: F,
              events: $,
              isConfigPending: Q,
              isLoading: q,
              onOpenChange: K,
              onSetAppEnabled: Y,
              showEnableToggle: G,
              onTryInChat: Z,
              tools: J,
              updatingAppId: X,
            } = e,
            ee = void 0 === W ? null : W,
            et = void 0 !== Q && Q,
            es = void 0 === G || G,
            el = (0, d.gh)(A.u),
            ea = (0, p.A)()
          if (
            z[0] !== B ||
            z[1] !== ee ||
            z[2] !== $ ||
            z[3] !== ea ||
            z[4] !== et ||
            z[5] !== K ||
            z[6] !== Y ||
            z[7] !== Z ||
            z[8] !== el ||
            z[9] !== es ||
            z[10] !== J ||
            z[11] !== X
          ) {
            var ei
            let e, a, d, p, A, E
            if (
              ((E = (ei = J).filter((e) => e.accessBadges.includes("READ"))),
              (U = [
                { title: "Write", tools: ei.filter((e) => !e.accessBadges.includes("READ")) },
                { title: "Read", tools: E },
              ].flatMap((e) => (0 === e.tools.length ? [] : [e]))),
              z[25] !== B ||
                z[26] !== ee ||
                z[27] !== $ ||
                z[28] !== ea ||
                z[29] !== et ||
                z[30] !== Y ||
                z[31] !== es ||
                z[32] !== X)
            ) {
              let s,
                i,
                n,
                r,
                o = null == B ? null : (0, g.MS)(B),
                u = X === B?.id,
                x = u || ee?.isUserEditable === !1 || et,
                b = B?.isEnabled === !0 && null == ee
              a = B?.isAccessible === !0 && b && !et
              let v = b ? I.disableApp : I.enableApp
              if (((e = null), et)) {
                let t
                ;(z[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, l.jsx)(m.A, { ...I.loadingProjectSettings })), (z[41] = t))
                  : (t = z[41]),
                  (e = t))
              } else if (ee?.isUserEditable === !1) {
                let t
                ;(z[42] !== ee
                  ? ((t = (0, l.jsx)(C.ns, { restriction: ee, surface: "dialog" })), (z[42] = ee), (z[43] = t))
                  : (t = z[43]),
                  (e = t))
              } else if (null == ee && B?.isAccessible === !0 && !1 === B.isEnabled) {
                let t
                ;(z[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, l.jsx)(m.A, { ...I.unattributedDisablement })), (z[44] = t))
                  : (t = z[44]),
                  (e = t))
              }
              ;(z[45] !== B?.description || z[46] !== $ || z[47] !== ea
                ? ((s = B?.description ?? ea.formatMessage($.length > 0 ? I.subtitleWithEvents : I.subtitle)),
                  (z[45] = B?.description),
                  (z[46] = $),
                  (z[47] = ea),
                  (z[48] = s))
                : (s = z[48]),
                (p = s))
              let k = B?.name ?? ""
              ;(z[49] !== B || z[50] !== b
                ? ((i =
                    null != B && B.isAccessible && !b
                      ? (0, l.jsx)(f.E, { variant: "outline", children: (0, l.jsx)(m.A, { ...I.disabledBadge }) })
                      : null),
                  (z[49] = B),
                  (z[50] = b),
                  (z[51] = i))
                : (i = z[51]),
                z[52] !== k || z[53] !== i
                  ? ((n = (0, l.jsx)(w.Rv, { kind: "App", title: k, badge: i })), (z[52] = k), (z[53] = i), (z[54] = n))
                  : (n = z[54]),
                (A = n),
                z[55] !== B ||
                z[56] !== e ||
                z[57] !== ea ||
                z[58] !== b ||
                z[59] !== x ||
                z[60] !== u ||
                z[61] !== Y ||
                z[62] !== es ||
                z[63] !== v
                  ? ((r =
                      null != B && es && (B.isAccessible || !B.isEnabled || u)
                        ? (0, l.jsx)("div", {
                            className: "flex items-center",
                            children: (0, l.jsx)(C._O, {
                              "data-state": b ? "checked" : "unchecked",
                              isControlDisabled: x,
                              isExplanationFocusable: null != e,
                              content: e ?? (0, l.jsx)(m.A, { ...v }),
                              children: (0, l.jsx)(y.l, {
                                className: "h-token-button-composer",
                                checked: b,
                                disabled: x,
                                ariaLabel: ea.formatMessage(v),
                                onChange: (e) => {
                                  Y({ appId: B.id, enabled: e })
                                },
                              }),
                            }),
                          })
                        : null),
                    (z[55] = B),
                    (z[56] = e),
                    (z[57] = ea),
                    (z[58] = b),
                    (z[59] = x),
                    (z[60] = u),
                    (z[61] = Y),
                    (z[62] = es),
                    (z[63] = v),
                    (z[64] = r))
                  : (r = z[64]),
                (d = r),
                (t = N),
                (P = "wide"),
                (L =
                  null == B
                    ? null
                    : (0, l.jsx)(h.R, {
                        alt: B.name,
                        className: "icon-md",
                        logoUrl: B.logoUrl,
                        logoDarkUrl: B.logoUrlDark,
                        fallback:
                          null == o
                            ? (0, l.jsx)(j.A, { className: "icon-sm text-secondary" })
                            : (0, c.createElement)(o),
                      })),
                (z[25] = B),
                (z[26] = ee),
                (z[27] = $),
                (z[28] = ea),
                (z[29] = et),
                (z[30] = Y),
                (z[31] = es),
                (z[32] = X),
                (z[33] = t),
                (z[34] = e),
                (z[35] = a),
                (z[36] = d),
                (z[37] = p),
                (z[38] = P),
                (z[39] = L),
                (z[40] = A))
            } else
              ((t = z[33]), (e = z[34]), (a = z[35]), (d = z[36]), (p = z[37]), (P = z[38]), (L = z[39]), (A = z[40]))
            ;((R = A),
              (D = B?.name),
              (s = d),
              (n = p),
              (o = null != B),
              (u = K),
              z[65] !== B ||
              z[66] !== e ||
              z[67] !== ee?.isUserEditable ||
              z[68] !== a ||
              z[69] !== ea ||
              z[70] !== Z ||
              z[71] !== el
                ? ((v =
                    null == B
                      ? null
                      : (0, l.jsx)("div", {
                          className: "flex w-full items-center justify-end gap-2",
                          children: (0, l.jsx)(C._O, {
                            isControlDisabled: !a,
                            isExplanationFocusable: null != e || ee?.isUserEditable === !0,
                            content: a
                              ? null
                              : (e ??
                                (0, l.jsx)(m.A, {
                                  id: "skills.appsPage.toolsDialog.tryInChatDisabled",
                                  defaultMessage: "Enable and connect this app to try it now",
                                })),
                            children: (0, l.jsxs)(x.$, {
                              "aria-label": ea.formatMessage({
                                id: "skills.appsPage.toolsDialog.tryInChat",
                                defaultMessage: "Try now",
                              }),
                              color: "primary",
                              size: "toolbar",
                              disabled: !a,
                              onClick: () => {
                                a &&
                                  ((0, M.yy)(el, i.nt, {
                                    name: "CHATGPT_APP_CLICK_TARGET_START_CHAT",
                                    connectorId: B.id,
                                  }),
                                  Z(B))
                              },
                              children: [
                                (0, l.jsx)(b.I, { "aria-hidden": !1, asset: r.Z }),
                                (0, l.jsx)(m.A, {
                                  id: "skills.appsPage.toolsDialog.tryInChat",
                                  defaultMessage: "Try now",
                                }),
                              ],
                            }),
                          }),
                        })),
                  (z[65] = B),
                  (z[66] = e),
                  (z[67] = ee?.isUserEditable),
                  (z[68] = a),
                  (z[69] = ea),
                  (z[70] = Z),
                  (z[71] = el),
                  (z[72] = v))
                : (v = z[72]),
              (S = "flex h-full min-h-0 flex-col"),
              (k =
                null != B && J.length > 0
                  ? (0, l.jsx)("div", {
                      className: "shrink-0 text-base text-secondary",
                      children: (0, l.jsx)(m.A, {
                        id: "skills.appsPage.toolsDialog.summary",
                        defaultMessage: "The {appName} app contains {totalActions} tools ({actionTypes})",
                        values: { appName: B.name, totalActions: J.length, actionTypes: U.map(_).join(", ") },
                      }),
                    })
                  : null),
              (z[0] = B),
              (z[1] = ee),
              (z[2] = $),
              (z[3] = ea),
              (z[4] = et),
              (z[5] = K),
              (z[6] = Y),
              (z[7] = Z),
              (z[8] = el),
              (z[9] = es),
              (z[10] = J),
              (z[11] = X),
              (z[12] = t),
              (z[13] = s),
              (z[14] = n),
              (z[15] = o),
              (z[16] = u),
              (z[17] = v),
              (z[18] = k),
              (z[19] = S),
              (z[20] = P),
              (z[21] = L),
              (z[22] = R),
              (z[23] = D),
              (z[24] = U))
          } else
            ((t = z[12]),
              (s = z[13]),
              (n = z[14]),
              (o = z[15]),
              (u = z[16]),
              (v = z[17]),
              (k = z[18]),
              (S = z[19]),
              (P = z[20]),
              (L = z[21]),
              (R = z[22]),
              (D = z[23]),
              (U = z[24]))
          return (
            z[73] !== k ? ((T = (0, l.jsx)(l.Fragment, { children: k })), (z[73] = k), (z[74] = T)) : (T = z[74]),
            z[75] !== B || z[76] !== ee || z[77] !== F || z[78] !== $ || z[79] !== q || z[80] !== U || z[81] !== J
              ? ((O = (0, l.jsx)(w.SO, {
                  className: "flex-1",
                  surfaceClassName: "bg-transparent",
                  children: q
                    ? (0, l.jsx)("div", {
                        className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                        children: (0, l.jsx)(m.A, {
                          id: "skills.appsPage.toolsDialog.loading",
                          defaultMessage: "Loading tools\u2026",
                        }),
                      })
                    : null != F
                      ? (0, l.jsx)("div", {
                          className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                          children: (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("div", {
                                children: (0, l.jsx)(m.A, {
                                  id: "skills.appsPage.toolsDialog.error",
                                  defaultMessage: "Unable to load tools for this app.",
                                }),
                              }),
                              (0, l.jsx)("div", { children: F }),
                            ],
                          }),
                        })
                      : 0 === J.length && 0 === $.length
                        ? (0, l.jsx)("div", {
                            className: "flex h-full min-h-32 items-center justify-center text-base text-secondary",
                            children: (0, l.jsx)(m.A, {
                              id: "skills.appsPage.toolsDialog.empty",
                              defaultMessage: "No tools available for this app.",
                            }),
                          })
                        : (0, l.jsx)(E, {
                            appId: B?.id ?? null,
                            events: $,
                            isAppDisabledWithoutRestriction: B?.isAccessible === !0 && !1 === B.isEnabled && null == ee,
                            toolSections: U,
                          }),
                })),
                (z[75] = B),
                (z[76] = ee),
                (z[77] = F),
                (z[78] = $),
                (z[79] = q),
                (z[80] = U),
                (z[81] = J),
                (z[82] = O))
              : (O = z[82]),
            z[83] !== T || z[84] !== O || z[85] !== S
              ? ((H = (0, l.jsxs)("div", { className: S, children: [T, O] })),
                (z[83] = T),
                (z[84] = O),
                (z[85] = S),
                (z[86] = H))
              : (H = z[86]),
            z[87] !== t ||
            z[88] !== s ||
            z[89] !== n ||
            z[90] !== o ||
            z[91] !== u ||
            z[92] !== v ||
            z[93] !== H ||
            z[94] !== P ||
            z[95] !== L ||
            z[96] !== R ||
            z[97] !== D
              ? ((V = (0, l.jsx)(t, {
                  size: P,
                  icon: L,
                  title: R,
                  titleText: D,
                  headerActions: s,
                  description: n,
                  isOpen: o,
                  onOpenChange: u,
                  footer: v,
                  children: H,
                })),
                (z[87] = t),
                (z[88] = s),
                (z[89] = n),
                (z[90] = o),
                (z[91] = u),
                (z[92] = v),
                (z[93] = H),
                (z[94] = P),
                (z[95] = L),
                (z[96] = R),
                (z[97] = D),
                (z[98] = V))
              : (V = z[98]),
            V
          )
        },
      },
    )
  },
  kEV3(e, t, s) {
    var l = s("Qgfj")
    let a = (0, l.YK)({
        system: { id: "skills.scope.system", defaultMessage: "System" },
        repo: { id: "skills.scope.repo", defaultMessage: "Repo" },
        user: { id: "skills.scope.user", defaultMessage: "User" },
        admin: { id: "skills.scope.admin", defaultMessage: "Admin" },
      }),
      i = (0, l.YK)({
        system: { id: "skills.scope.builtIn", defaultMessage: "System" },
        repo: { id: "skills.scope.team", defaultMessage: "Team" },
        user: { id: "skills.scope.personal", defaultMessage: "Personal" },
        admin: { id: "skills.scope.adminInstalled", defaultMessage: "Admin installed" },
      })
    function n({ scope: e, intl: t, repoLabel: s, adminLabel: l }) {
      if ("repo" === e) return s ?? t.formatMessage(i.repo)
      if ("admin" === e) return l ?? t.formatMessage(i.admin)
      let r = i[e]
      return r ? t.formatMessage(r) : t.formatMessage(a[e])
    }
    function r({ skillPath: e, roots: t, fallbackLabel: s }) {
      let l,
        a,
        i = t.reduce((t, s) => (e.startsWith(s) && (!t || s.length > t.length) ? s : t), null)
      if (!i) return s
      let n =
        -1 === (a = Math.max((l = i.replace(/[\\/]+$/, "")).lastIndexOf("/"), l.lastIndexOf("\\"))) ? l : l.slice(a + 1)
      return n.length > 0 ? n : s
    }
    s.d(
      t,
      {},
      {
        IG: function ({ skill: e, roots: t, intl: s, fallbackRepoLabel: l, adminLabel: a }) {
          return n({
            scope: e.scope,
            intl: s,
            repoLabel: r({ skillPath: e.path, roots: t, fallbackLabel: l ?? n({ scope: "repo", intl: s }) }),
            adminLabel: a,
          })
        },
        V_: n,
        _i: r,
      },
    )
  },
  Ekos(e, t, s) {
    var l = s("ABep"),
      a = s("QosV"),
      i = s("slpy"),
      n = s("ozCc"),
      r = s("zKw6"),
      o = s.n(r),
      d = s("HJEB"),
      c = s("Qgfj"),
      u = s("Wf1j"),
      p = s("oyxz"),
      m = s("Sm6l"),
      g = s("HOLv"),
      h = s("poBj"),
      f = s("axh8"),
      x = s("n4fT"),
      b = s("hobO"),
      y = s("vOoA")
    let v = (0, c.YK)({
      installSkill: { id: "skills.recommended.connectSkill", defaultMessage: "Install skill" },
      installed: { id: "skills.recommended.installed", defaultMessage: "Installed" },
    })
    function j(e) {
      let t,
        s,
        i,
        r,
        o = (0, a.c)(13),
        { canInstall: d, installing: c, isInstalled: u, onInstall: h, skill: f } = e,
        x = u || !d || c
      return (
        o[0] !== h || o[1] !== f
          ? ((t = (e) => {
              ;(e.stopPropagation(), h(f, null))
            }),
            (o[0] = h),
            (o[1] = f),
            (o[2] = t))
          : (t = o[2]),
        o[3] !== x
          ? ((s = x ? null : (0, l.jsx)(g.I, { "aria-hidden": !1, asset: n.f })), (o[3] = x), (o[4] = s))
          : (s = o[4]),
        o[5] !== u
          ? ((i = u
              ? (0, l.jsx)(p.A, { ...v.installed })
              : (0, l.jsx)(p.A, { id: "skills.recommended.install", defaultMessage: "Install skill" })),
            (o[5] = u),
            (o[6] = i))
          : (i = o[6]),
        o[7] !== c || o[8] !== x || o[9] !== t || o[10] !== s || o[11] !== i
          ? ((r = (0, l.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, l.jsxs)(m.$, {
                color: "primary",
                size: "toolbar",
                disabled: x,
                loading: c,
                onClick: t,
                children: [s, i],
              }),
            })),
            (o[7] = c),
            (o[8] = x),
            (o[9] = t),
            (o[10] = s),
            (o[11] = i),
            (o[12] = r))
          : (r = o[12]),
        r
      )
    }
    function k(e) {
      let t,
        s,
        i,
        n,
        r = (0, a.c)(16),
        { skill: o, size: d, basePath: c } = e,
        u = void 0 === d ? "small" : d,
        p = !!o.iconLarge
      if (
        ("small" === u ? (t = 24) : p || (t = 20),
        r[0] !== c ||
          r[1] !== t ||
          r[2] !== p ||
          r[3] !== u ||
          r[4] !== o.description ||
          r[5] !== o.iconLarge ||
          r[6] !== o.iconSmall ||
          r[7] !== o.name)
      ) {
        let e,
          l = (0, f.h)(null, {
            size: u,
            fallbackSize: t,
            fallbackClassName: "text-secondary",
            iconSmall: o.iconSmall,
            iconLarge: o.iconLarge,
            basePath: c,
            alt: o.name,
            fallbackName: o.name,
            fallbackDescription: o.description,
          })
        r[10] !== p || r[11] !== u
          ? ((e = (0, y.a)({ size: u, hasLargeIcon: p, largeFallbackClassName: "h-5 w-5" })),
            (r[10] = p),
            (r[11] = u),
            (r[12] = e))
          : (e = r[12])
        let a = `${e} text-secondary`
        ;((s = l),
          (i = (0, f.d8)(l, a, "text-secondary")),
          (r[0] = c),
          (r[1] = t),
          (r[2] = p),
          (r[3] = u),
          (r[4] = o.description),
          (r[5] = o.iconLarge),
          (r[6] = o.iconSmall),
          (r[7] = o.name),
          (r[8] = s),
          (r[9] = i))
      } else ((s = r[8]), (i = r[9]))
      return (
        r[13] !== s || r[14] !== i
          ? ((n = (0, l.jsx)(s, { ...i })), (r[13] = s), (r[14] = i), (r[15] = n))
          : (n = r[15]),
        n
      )
    }
    s.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            s,
            n,
            r,
            c,
            g,
            f,
            y,
            S = (0, a.c)(37),
            {
              skill: M,
              canInstall: A,
              hostId: w,
              isHighlighted: C,
              isInstalled: P,
              isInstalling: I,
              repoRoot: _,
              onInstall: N,
            } = e,
            E = void 0 !== C && C,
            L = (0, u.A)(),
            R = M.shortDescription && M.shortDescription.length > 0 ? M.shortDescription : M.description
          S[0] !== _ || S[1] !== M.repoPath
            ? ((t = (function ({ repoRoot: e, repoPath: t }) {
                if (!e) return null
                let s = t.split("/").join(o().sep),
                  l = o().join(e, s)
                return l.toLowerCase().endsWith(".md") ? l : o().join(l, "SKILL.md")
              })({ repoRoot: _, repoPath: M.repoPath })),
              (S[0] = _),
              (S[1] = M.repoPath),
              (S[2] = t))
            : (t = S[2])
          let D = t
          S[3] !== M.name ? ((s = (0, d.l)(M.name)), (S[3] = M.name), (S[4] = s)) : (s = S[4])
          let U = s,
            T = M.iconLarge ? "large" : "small"
          S[5] !== M || S[6] !== D || S[7] !== T
            ? ((n = (0, l.jsx)(k, { skill: M, size: T, basePath: D })), (S[5] = M), (S[6] = D), (S[7] = T), (S[8] = n))
            : (n = S[8])
          let O = n,
            H = P || !A || I
          S[9] !== L || S[10] !== H || S[11] !== P || S[12] !== I || S[13] !== N || S[14] !== M
            ? ((r = P
                ? (0, l.jsx)(h.I, {
                    enabledStatusAriaLabel: L.formatMessage(v.installed),
                    isEnabled: !0,
                    isUninstalling: !1,
                    isUpdating: !1,
                  })
                : (0, l.jsx)(i.m, {
                    content: (0, l.jsx)(p.A, { ...v.installSkill }),
                    children: (0, l.jsx)(m.$, {
                      "aria-label": L.formatMessage(v.installSkill),
                      color: "secondary",
                      size: "composer",
                      disabled: H,
                      loading: I,
                      onClick: (e) => {
                        ;(e.stopPropagation(), H || N(M, null))
                      },
                      children: (0, l.jsx)(p.A, { ...v.installSkill }),
                    }),
                  })),
              (S[9] = L),
              (S[10] = H),
              (S[11] = P),
              (S[12] = I),
              (S[13] = N),
              (S[14] = M),
              (S[15] = r))
            : (r = S[15])
          let V = r
          return (
            S[16] !== U ? ((c = (0, l.jsx)(b.Rv, { kind: "Skill", title: U })), (S[16] = U), (S[17] = c)) : (c = S[17]),
            S[18] !== U || S[19] !== w || S[20] !== D
              ? ((g = (e) => {
                  let { isOpen: t } = e
                  return (0, l.jsx)(b.FG, { hostId: w, isOpen: t, skillPath: D, titleText: U })
                }),
                (S[18] = U),
                (S[19] = w),
                (S[20] = D),
                (S[21] = g))
              : (g = S[21]),
            S[22] !== A || S[23] !== P || S[24] !== I || S[25] !== N || S[26] !== M
              ? ((f = (0, l.jsx)(j, { canInstall: A, installing: I, isInstalled: P, onInstall: N, skill: M })),
                (S[22] = A),
                (S[23] = P),
                (S[24] = I),
                (S[25] = N),
                (S[26] = M),
                (S[27] = f))
              : (f = S[27]),
            S[28] !== V ||
            S[29] !== R ||
            S[30] !== U ||
            S[31] !== E ||
            S[32] !== O ||
            S[33] !== c ||
            S[34] !== g ||
            S[35] !== f
              ? ((y = (0, l.jsx)(x.C, {
                  cardIcon: O,
                  cardTitle: U,
                  cardDescription: R,
                  cardActions: V,
                  isHighlighted: E,
                  modalTitle: c,
                  modalTitleText: U,
                  modalDescription: R,
                  modalBody: g,
                  modalFooter: f,
                })),
                (S[28] = V),
                (S[29] = R),
                (S[30] = U),
                (S[31] = E),
                (S[32] = O),
                (S[33] = c),
                (S[34] = g),
                (S[35] = f),
                (S[36] = y))
              : (y = S[36]),
            y
          )
        },
      },
    )
  },
  UmGt(e, t, s) {
    var l = s("ASxG"),
      a = s("OMIV")
    let i = l.YjP().refine((e) => e.trim().length > 0),
      n = l.Ikc({ skill_markdown_by_id: l.g1P(l.YjP(), l.L5J()).optional() }).catch({ skill_markdown_by_id: {} })
    s.d(
      t,
      {},
      {
        Uu: async function (e, t) {
          var s
          return (
            (s = (function (e) {
              let t = {}
              for (let [s, l] of Object.entries(n.parse(e).skill_markdown_by_id ?? {})) {
                let e = i.safeParse(l)
                e.success && (t[s] = e.data)
              }
              return t
            })(e.get(a.M9)?.getDynamicConfig("1852350085").value)),
            s[t]
          )
        },
      },
    )
  },
  funJ(e, t, s) {
    s.d(t, { j: () => L, Z: () => I })
    var l = s("ABep"),
      a = s("QosV"),
      i = s("qmMi"),
      n = s("zd8w"),
      r = s("Wf1j"),
      o = s("oyxz"),
      d = s("bq7F"),
      c = s("FrrB"),
      u = s("JZv7"),
      p = s("BrP7"),
      m = s("TIw4"),
      g = s("odCE"),
      h = s("kEV3"),
      f = s("Ekos"),
      x = s("rJVD"),
      b = s("hbRe"),
      y = s("ZGaK"),
      v = s("xcgE"),
      j = s("Sm6l"),
      k = s("Q8aV"),
      S = s("axh8"),
      M = s("n4fT"),
      A = s("hobO")
    function w(e) {
      let t,
        s,
        i,
        d,
        c,
        u,
        p,
        m,
        g,
        h = (0, a.c)(25),
        { isHighlighted: f, suggestion: x } = e,
        b = void 0 !== f && f,
        y = (0, r.A)(),
        w = (0, k.p8)()
      h[0] !== y || h[1] !== w || h[2] !== x
        ? ((t = () => {
            w({ prefillPrompt: (0, v.c5)({ intl: y, memoryFilePath: x.memoryFilePath, suggestion: x }) })
          }),
          (h[0] = y),
          (h[1] = w),
          (h[2] = x),
          (h[3] = t))
        : (t = h[3])
      let C = t
      h[4] !== x.description || h[5] !== x.name
        ? ((s = (0, n.createElement)((0, S.h)(null, { fallbackDescription: x.description, fallbackName: x.name }), {
            className: "icon-sm",
          })),
          (h[4] = x.description),
          (h[5] = x.name),
          (h[6] = s))
        : (s = h[6])
      let P = s
      return (
        h[7] !== C
          ? ((i = (e) => {
              ;(e.stopPropagation(), C())
            }),
            (h[7] = C),
            (h[8] = i))
          : (i = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, l.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
            })),
            (h[9] = d))
          : (d = h[9]),
        h[10] !== i
          ? ((c = (0, l.jsx)(j.$, { color: "secondary", size: "composer", onClick: i, children: d })),
            (h[10] = i),
            (h[11] = c))
          : (c = h[11]),
        h[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
            })),
            (h[12] = u))
          : (u = h[12]),
        h[13] !== C
          ? ((p = (0, l.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, l.jsx)(j.$, { color: "primary", size: "toolbar", onClick: C, children: u }),
            })),
            (h[13] = C),
            (h[14] = p))
          : (p = h[14]),
        h[15] !== x.name
          ? ((m = (0, l.jsx)(A.Rv, { kind: "Skill", title: x.name })), (h[15] = x.name), (h[16] = m))
          : (m = h[16]),
        h[17] !== b ||
        h[18] !== P ||
        h[19] !== x.description ||
        h[20] !== x.name ||
        h[21] !== c ||
        h[22] !== p ||
        h[23] !== m
          ? ((g = (0, l.jsx)(M.C, {
              cardActions: c,
              cardDescription: x.description,
              cardIcon: P,
              cardTitle: x.name,
              isHighlighted: b,
              modalBody: null,
              modalDescription: x.description,
              modalFooter: p,
              modalTitle: m,
              modalTitleText: x.name,
            })),
            (h[17] = b),
            (h[18] = P),
            (h[19] = x.description),
            (h[20] = x.name),
            (h[21] = c),
            (h[22] = p),
            (h[23] = m),
            (h[24] = g))
          : (g = h[24]),
        g
      )
    }
    var C = s("mIfQ"),
      P = s("f22a")
    function I(e) {
      let t,
        s,
        i,
        d,
        m,
        g,
        h,
        f,
        x,
        b,
        y,
        v,
        j = (0, a.c)(100),
        {
          canInstallRecommendedSkills: k,
          errorMessage: S,
          installedStateAction: M,
          installedSkillGroups: A,
          installedSkills: w,
          installedSkillsForRecommendedActions: C,
          installedRecommendedSkillIds: I,
          highlightedInstalledSkillPath: E,
          highlightedRecommendedSkillId: R,
          highlightedSuggestedSkillId: D,
          hostId: U,
          installingSkillId: T,
          isLoadingInstalledSkills: O,
          isLoadingRecommendedSkills: V,
          onInstallRecommendedSkill: z,
          onInstalledRecommendedSkillUpdated: B,
          onSelectSection: W,
          onSkillsUpdated: F,
          recommendedRepoRoot: $,
          recommendedSkills: Q,
          roots: q,
          selectedSectionId: K,
          suggestedSkills: Y,
          searchResultsTitle: G,
          installedSection: Z,
          recommendedSection: J,
        } = e,
        X = void 0 === M ? "check" : M,
        ee = (0, r.A)(),
        et = (0, n.useRef)(null)
      ;(j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            et.current = null
          }),
          (j[0] = t))
        : (t = j[0]),
        (0, n.useLayoutEffect)(t),
        j[1] !== B
          ? ((s = (e) => {
              ;((et.current = e ?? null), B())
            }),
            (j[1] = B),
            (j[2] = s))
          : (s = j[2]))
      let es = s
      j[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e, t) => {
            et.current === e &&
              ((et.current = null), t.ownerDocument.activeElement === t.ownerDocument.body && t.focus())
          }),
          (j[3] = i))
        : (i = j[3])
      let el = i
      if (j[4] !== I || j[5] !== C || j[6] !== Q) {
        let e
        ;(j[8] !== I || j[9] !== C
          ? ((e = (e) => {
              let t = I.has(e.id)
              return {
                installedSkill: t ? (0, P.gQ)({ installedSkills: C, skill: e }) : null,
                isInstalled: t,
                skill: e,
              }
            }),
            (j[8] = I),
            (j[9] = C),
            (j[10] = e))
          : (e = j[10]),
          (d = Q.map(e)),
          (j[4] = I),
          (j[5] = C),
          (j[6] = Q),
          (j[7] = d))
      } else d = j[7]
      let ea = d,
        ei = null != Z && (A.length > 0 || w.length > 0),
        en = null != J && ea.length > 0
      if (!O && !V && null == S && !ei && !en && 0 === Y.length) {
        let e
        return (
          j[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(c.A, {
                  title: (0, l.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                }),
              })),
              (j[11] = e))
            : (e = j[11]),
          e
        )
      }
      if (null != G) {
        let e, t, s
        return (
          j[12] !== D || j[13] !== Y
            ? ((e = (0, l.jsx)(N, { highlightedSuggestionId: D, suggestions: Y })),
              (j[12] = D),
              (j[13] = Y),
              (j[14] = e))
            : (e = j[14]),
          j[15] !== k ||
          j[16] !== S ||
          j[17] !== es ||
          j[18] !== E ||
          j[19] !== R ||
          j[20] !== U ||
          j[21] !== w ||
          j[22] !== X ||
          j[23] !== T ||
          j[24] !== O ||
          j[25] !== V ||
          j[26] !== z ||
          j[27] !== F ||
          j[28] !== $ ||
          j[29] !== ea ||
          j[30] !== q ||
          j[31] !== G
            ? ((t =
                w.length > 0 || ea.length > 0
                  ? (0, l.jsx)(u.L, {
                      count: w.length + ea.length,
                      id: "skills-search-results",
                      title: G,
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          w.length > 0
                            ? (0, l.jsx)(L, {
                                onCardMount: el,
                                hostId: U,
                                installedStateAction: X,
                                highlightedSkillPath: E,
                                isLoading: O,
                                roots: q,
                                skillEntries: w,
                                onSkillsUpdated: F,
                              })
                            : null,
                          ea.length > 0
                            ? (0, l.jsx)(H, {
                                canInstall: k,
                                errorMessage: S,
                                highlightInstalledSkills: !1,
                                hostId: U,
                                highlightedSkillId: R,
                                entries: ea,
                                installingSkillId: T,
                                isLoading: V,
                                onInstall: z,
                                onSkillsUpdated: es,
                                repoRoot: $,
                                roots: q,
                                showAll: !0,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (j[15] = k),
              (j[16] = S),
              (j[17] = es),
              (j[18] = E),
              (j[19] = R),
              (j[20] = U),
              (j[21] = w),
              (j[22] = X),
              (j[23] = T),
              (j[24] = O),
              (j[25] = V),
              (j[26] = z),
              (j[27] = F),
              (j[28] = $),
              (j[29] = ea),
              (j[30] = q),
              (j[31] = G),
              (j[32] = t))
            : (t = j[32]),
          j[33] !== e || j[34] !== t
            ? ((s = (0, l.jsxs)("div", { className: "flex flex-1 flex-col gap-8 pb-panel", children: [e, t] })),
              (j[33] = e),
              (j[34] = t),
              (j[35] = s))
            : (s = j[35]),
          s
        )
      }
      if (
        j[36] !== D ||
        j[37] !== U ||
        j[38] !== Z ||
        j[39] !== A ||
        j[40] !== w ||
        j[41] !== X ||
        j[42] !== ee ||
        j[43] !== O ||
        j[44] !== W ||
        j[45] !== F ||
        j[46] !== J ||
        j[47] !== q ||
        j[48] !== K ||
        j[49] !== Y
      ) {
        let e,
          t = (function (e, t) {
            let s = []
            for (let t of e) s.push({ id: t.id, label: t.title })
            return (null != t && s.push({ id: t.id, label: t.title }), s)
          })(A, J)
        if (j[55] !== A || j[56] !== K) {
          let t
          ;(j[58] !== K ? ((t = (e) => e.id === K), (j[58] = K), (j[59] = t)) : (t = j[59]),
            (e = A.find(t)),
            (j[55] = A),
            (j[56] = K),
            (j[57] = e))
        } else e = j[57]
        ;((m = e),
          (g = "flex flex-1 flex-col gap-8 pb-panel"),
          j[60] !== D || j[61] !== Y
            ? ((h = (0, l.jsx)(N, { highlightedSuggestionId: D, suggestions: Y })),
              (j[60] = D),
              (j[61] = Y),
              (j[62] = h))
            : (h = j[62]),
          j[63] !== U || j[64] !== Z || j[65] !== w || j[66] !== X || j[67] !== O || j[68] !== F || j[69] !== q
            ? ((f =
                null != Z
                  ? (0, l.jsx)(u.L, {
                      id: Z.id,
                      title: (0, l.jsx)(o.A, {
                        id: "skills.appsPage.section.installedSkillsOverview",
                        defaultMessage: "Installed",
                      }),
                      children: (0, l.jsx)(L, {
                        onCardMount: el,
                        hostId: U,
                        installedStateAction: X,
                        isLoading: O,
                        maxVisibleSkills: 6,
                        roots: q,
                        skillEntries: w,
                        onSkillsUpdated: F,
                      }),
                    })
                  : null),
              (j[63] = U),
              (j[64] = Z),
              (j[65] = w),
              (j[66] = X),
              (j[67] = O),
              (j[68] = F),
              (j[69] = q),
              (j[70] = f))
            : (f = j[70]),
          (x =
            t.length > 0 && null != K
              ? (0, l.jsx)(p.t, {
                  className: "mb-2",
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: ee.formatMessage({
                    id: "skills.appsPage.skillDirectoryTabs.ariaLabel",
                    defaultMessage: "Skill directory",
                  }),
                  tabs: t.map(_),
                  selectedKey: K,
                  onSelect: W,
                })
              : null),
          (j[36] = D),
          (j[37] = U),
          (j[38] = Z),
          (j[39] = A),
          (j[40] = w),
          (j[41] = X),
          (j[42] = ee),
          (j[43] = O),
          (j[44] = W),
          (j[45] = F),
          (j[46] = J),
          (j[47] = q),
          (j[48] = K),
          (j[49] = Y),
          (j[50] = m),
          (j[51] = g),
          (j[52] = h),
          (j[53] = f),
          (j[54] = x))
      } else ((m = j[50]), (g = j[51]), (h = j[52]), (f = j[53]), (x = j[54]))
      return (
        j[71] !== E || j[72] !== U || j[73] !== X || j[74] !== O || j[75] !== F || j[76] !== q || j[77] !== m
          ? ((b =
              null != m
                ? (0, l.jsx)(L, {
                    onCardMount: el,
                    hostId: U,
                    installedStateAction: X,
                    highlightedSkillPath: E,
                    isLoading: O,
                    maxVisibleSkills: 6,
                    onSkillsUpdated: F,
                    roots: q,
                    skillEntries: m.skillEntries,
                  })
                : null),
            (j[71] = E),
            (j[72] = U),
            (j[73] = X),
            (j[74] = O),
            (j[75] = F),
            (j[76] = q),
            (j[77] = m),
            (j[78] = b))
          : (b = j[78]),
        j[79] !== k ||
        j[80] !== S ||
        j[81] !== es ||
        j[82] !== R ||
        j[83] !== U ||
        j[84] !== T ||
        j[85] !== V ||
        j[86] !== z ||
        j[87] !== $ ||
        j[88] !== J?.id ||
        j[89] !== ea ||
        j[90] !== q ||
        j[91] !== K
          ? ((y =
              J?.id === K
                ? (0, l.jsx)(H, {
                    canInstall: k,
                    errorMessage: S,
                    highlightInstalledSkills: !0,
                    hostId: U,
                    highlightedSkillId: R,
                    entries: ea,
                    installingSkillId: T,
                    isLoading: V,
                    onInstall: z,
                    onSkillsUpdated: es,
                    repoRoot: $,
                    roots: q,
                  })
                : null),
            (j[79] = k),
            (j[80] = S),
            (j[81] = es),
            (j[82] = R),
            (j[83] = U),
            (j[84] = T),
            (j[85] = V),
            (j[86] = z),
            (j[87] = $),
            (j[88] = J?.id),
            (j[89] = ea),
            (j[90] = q),
            (j[91] = K),
            (j[92] = y))
          : (y = j[92]),
        j[93] !== b || j[94] !== y || j[95] !== g || j[96] !== h || j[97] !== f || j[98] !== x
          ? ((v = (0, l.jsxs)("div", { className: g, children: [h, f, x, b, y] })),
            (j[93] = b),
            (j[94] = y),
            (j[95] = g),
            (j[96] = h),
            (j[97] = f),
            (j[98] = x),
            (j[99] = v))
          : (v = j[99]),
        v
      )
    }
    function _(e) {
      let { id: t, label: s } = e
      return { key: t, name: s }
    }
    function N(e) {
      let t,
        s,
        r,
        c,
        p,
        m,
        g,
        h,
        f = (0, a.c)(24),
        { highlightedSuggestionId: x, suggestions: b } = e,
        { unreadSkillsSuggestions: v } = (0, i.Ul)(d.cx)
      f[0] !== v ? ((t = () => new Set(v.map(E))), (f[0] = v), (f[1] = t)) : (t = f[1])
      let [j] = (0, n.useState)(t)
      if (0 === b.length) return null
      if (f[2] !== j || f[3] !== b || f[4] !== v) {
        let e
        ;(f[6] !== j || f[7] !== v
          ? ((e = (e) => {
              let { id: t } = e
              return j.has(t) || v.some((e) => e.id === t)
            }),
            (f[6] = j),
            (f[7] = v),
            (f[8] = e))
          : (e = f[8]),
          (s = b.some(e)),
          (f[2] = j),
          (f[3] = b),
          (f[4] = v),
          (f[5] = s))
      } else s = f[5]
      let k = s
      if (
        (f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.sectionTitle",
              defaultMessage: "Based on your Computer History",
            })),
            (f[9] = r))
          : (r = f[9]),
        f[10] !== k
          ? ((c = k
              ? (0, l.jsx)("span", { "aria-hidden": !0, className: "ms-0.5 size-1.5 shrink-0 rounded-full bg-accent" })
              : null),
            (f[10] = k),
            (f[11] = c))
          : (c = f[11]),
        f[12] !== c ? ((p = (0, l.jsxs)(l.Fragment, { children: [r, c] })), (f[12] = c), (f[13] = p)) : (p = f[13]),
        f[14] !== x || f[15] !== b)
      ) {
        let e
        ;(f[17] !== x
          ? ((e = (e) => (0, l.jsx)(w, { isHighlighted: e.id === x, suggestion: e }, e.id)), (f[17] = x), (f[18] = e))
          : (e = f[18]),
          (m = b.map(e)),
          (f[14] = x),
          (f[15] = b),
          (f[16] = m))
      } else m = f[16]
      return (
        f[19] !== m ? ((g = (0, l.jsx)(y.q, { children: m })), (f[19] = m), (f[20] = g)) : (g = f[20]),
        f[21] !== p || f[22] !== g
          ? ((h = (0, l.jsx)(u.L, { id: "computer-history-suggested-skills", title: p, children: g })),
            (f[21] = p),
            (f[22] = g),
            (f[23] = h))
          : (h = f[23]),
        h
      )
    }
    function E(e) {
      let { id: t } = e
      return t
    }
    function L(e) {
      let t,
        s,
        i,
        n = (0, a.c)(39),
        {
          gap: r,
          hostId: d,
          highlightedSkillPath: u,
          installedStateAction: p,
          isLoading: m,
          isSingleColumn: h,
          maxVisibleSkills: f,
          roots: x,
          skillEntries: b,
          useCompactEmptyState: y,
          onCardMount: v,
          onSkillsUpdated: j,
        } = e,
        k = void 0 === p ? "check" : p,
        S = void 0 !== h && h,
        M = void 0 !== y && y
      if (m) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(g.j, {
                  children: (0, l.jsx)(o.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (0 === b.length) {
        let e
        return (
          n[1] !== M
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: M
                  ? (0, l.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, l.jsx)(o.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                      }),
                    })
                  : (0, l.jsx)(c.A, {
                      title: (0, l.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                    }),
              })),
              (n[1] = M),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (null == f) {
        let e,
          t = r ?? "default"
        return (
          n[3] !== u ||
          n[4] !== d ||
          n[5] !== k ||
          n[6] !== S ||
          n[7] !== v ||
          n[8] !== j ||
          n[9] !== x ||
          n[10] !== b ||
          n[11] !== t
            ? ((e = (0, l.jsx)(U, {
                onCardMount: v,
                gap: t,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: k,
                isSingleColumn: S,
                roots: x,
                skillEntries: b,
                onSkillsUpdated: j,
              })),
              (n[3] = u),
              (n[4] = d),
              (n[5] = k),
              (n[6] = S),
              (n[7] = v),
              (n[8] = j),
              (n[9] = x),
              (n[10] = b),
              (n[11] = t),
              (n[12] = e))
            : (e = n[12]),
          e
        )
      }
      n[13] !== f || n[14] !== b.length
        ? ((t = F({ itemCount: b.length, visibleItemLimit: f })), (n[13] = f), (n[14] = b.length), (n[15] = t))
        : (t = n[15])
      let A = t
      if (null == A) {
        let e,
          t = r ?? "default"
        return (
          n[16] !== u ||
          n[17] !== d ||
          n[18] !== k ||
          n[19] !== S ||
          n[20] !== v ||
          n[21] !== j ||
          n[22] !== x ||
          n[23] !== b ||
          n[24] !== t
            ? ((e = (0, l.jsx)(U, {
                onCardMount: v,
                gap: t,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: k,
                isSingleColumn: S,
                roots: x,
                skillEntries: b,
                onSkillsUpdated: j,
              })),
              (n[16] = u),
              (n[17] = d),
              (n[18] = k),
              (n[19] = S),
              (n[20] = v),
              (n[21] = j),
              (n[22] = x),
              (n[23] = b),
              (n[24] = t),
              (n[25] = e))
            : (e = n[25]),
          e
        )
      }
      return (
        n[26] !== r ||
        n[27] !== u ||
        n[28] !== d ||
        n[29] !== k ||
        n[30] !== S ||
        n[31] !== v ||
        n[32] !== j ||
        n[33] !== x
          ? ((s = (e) =>
              (0, l.jsx)(U, {
                onCardMount: v,
                gap: r ?? "compact",
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: k,
                isSingleColumn: S,
                roots: x,
                skillEntries: e,
                onSkillsUpdated: j,
              })),
            (n[26] = r),
            (n[27] = u),
            (n[28] = d),
            (n[29] = k),
            (n[30] = S),
            (n[31] = v),
            (n[32] = j),
            (n[33] = x),
            (n[34] = s))
          : (s = n[34]),
        n[35] !== b || n[36] !== s || n[37] !== A
          ? ((i = (0, l.jsx)(C.Q, { items: b, visibleItemLimit: A, renderExpandRow: R, children: s })),
            (n[35] = b),
            (n[36] = s),
            (n[37] = A),
            (n[38] = i))
          : (i = n[38]),
        i
      )
    }
    function R(e) {
      let { hiddenItems: t, isExpanded: s, onToggle: a } = e
      return (0, l.jsx)(W, { isExpanded: s, skillNames: t.map(D), onClick: a })
    }
    function D(e) {
      let { skill: t } = e
      return (0, b.nf)(t)
    }
    function U(e) {
      let t,
        s,
        i = (0, a.c)(19),
        {
          gap: n,
          hostId: r,
          highlightedSkillPath: o,
          installedStateAction: d,
          isSingleColumn: c,
          roots: u,
          skillEntries: p,
          onCardMount: m,
          onSkillsUpdated: g,
        } = e,
        h = void 0 === n ? "default" : n
      if (i[0] !== o || i[1] !== r || i[2] !== d || i[3] !== m || i[4] !== g || i[5] !== u || i[6] !== p) {
        let e
        ;(i[8] !== o || i[9] !== r || i[10] !== d || i[11] !== m || i[12] !== g || i[13] !== u
          ? ((e = (e) => {
              let { skill: t } = e
              return (0, l.jsx)(
                T,
                {
                  installedStateAction: d,
                  hostId: r,
                  isHighlighted: o === t.path,
                  onCardMount: m,
                  onSkillsUpdated: g,
                  roots: u,
                  skill: t,
                },
                t.path,
              )
            }),
            (i[8] = o),
            (i[9] = r),
            (i[10] = d),
            (i[11] = m),
            (i[12] = g),
            (i[13] = u),
            (i[14] = e))
          : (e = i[14]),
          (t = p.map(e)),
          (i[0] = o),
          (i[1] = r),
          (i[2] = d),
          (i[3] = m),
          (i[4] = g),
          (i[5] = u),
          (i[6] = p),
          (i[7] = t))
      } else t = i[7]
      return (
        i[15] !== h || i[16] !== c || i[17] !== t
          ? ((s = (0, l.jsx)(y.q, { gap: h, isSingleColumn: c, children: t })),
            (i[15] = h),
            (i[16] = c),
            (i[17] = t),
            (i[18] = s))
          : (s = i[18]),
        s
      )
    }
    function T(e) {
      let t,
        s,
        i,
        o,
        d,
        c,
        u,
        p = (0, a.c)(28),
        {
          hostId: m,
          installedStateAction: g,
          isHighlighted: f,
          onCardMount: y,
          onSkillsUpdated: v,
          roots: j,
          skill: k,
        } = e,
        S = (0, r.A)(),
        M = (0, n.useRef)(null)
      p[0] !== g || p[1] !== S || p[2] !== j || p[3] !== k
        ? ((t = "toggle" === g ? (0, h.IG)({ skill: k, roots: j, intl: S }) : void 0),
          (p[0] = g),
          (p[1] = S),
          (p[2] = j),
          (p[3] = k),
          (p[4] = t))
        : (t = p[4])
      let A = t
      ;(p[5] !== g || p[6] !== y || p[7] !== k
        ? ((s = (e) => {
            ;((M.current = e), null != e && "menu" !== g && y?.(k.path, e))
          }),
          (p[5] = g),
          (p[6] = y),
          (p[7] = k),
          (p[8] = s))
        : (s = p[8]),
        p[9] !== g ? ((i = "toggle" === g ? (0, l.jsx)(O, {}) : void 0), (p[9] = g), (p[10] = i)) : (i = p[10]))
      let w = "toggle" !== g
      return (
        p[11] !== k ? ((o = (0, b.nf)(k)), (p[11] = k), (p[12] = o)) : (o = p[12]),
        p[13] !== v || p[14] !== k
          ? ((d = (e, t) => {
              let s = M.current
              if (t && null != s) {
                let t = s.ownerDocument.activeElement
                if (t === s.ownerDocument.body || s.contains(t)) return void v(e, k.path)
              }
              v(e)
            }),
            (p[13] = v),
            (p[14] = k),
            (p[15] = d))
          : (d = p[15]),
        p[16] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (p[16] = c)) : (c = p[16]),
        p[17] !== A ||
        p[18] !== m ||
        p[19] !== g ||
        p[20] !== f ||
        p[21] !== k ||
        p[22] !== s ||
        p[23] !== i ||
        p[24] !== w ||
        p[25] !== o ||
        p[26] !== d
          ? ((u = (0, l.jsx)(x.A, {
              cardRef: s,
              cardIcon: i,
              cardIconContainer: w,
              actionLabel: A,
              displayName: o,
              hostId: m,
              installedStateAction: g,
              isHighlighted: f,
              onSkillsUpdated: d,
              scopeBadges: c,
              skill: k,
            })),
            (p[17] = A),
            (p[18] = m),
            (p[19] = g),
            (p[20] = f),
            (p[21] = k),
            (p[22] = s),
            (p[23] = i),
            (p[24] = w),
            (p[25] = o),
            (p[26] = d),
            (p[27] = u))
          : (u = p[27]),
        u
      )
    }
    function O() {
      let e,
        t = (0, a.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("span", {
              className:
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-default text-secondary",
              children: (0, l.jsx)(m.A, { className: "icon-sm" }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function H(e) {
      let t,
        s = (0, a.c)(17),
        {
          canInstall: i,
          entries: n,
          errorMessage: r,
          highlightInstalledSkills: d,
          hostId: u,
          highlightedSkillId: p,
          installingSkillId: m,
          isLoading: h,
          onInstall: f,
          onSkillsUpdated: x,
          repoRoot: b,
          roots: y,
          showAll: v,
        } = e,
        j = void 0 !== v && v
      if (h) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(g.j, {
                  children: (0, l.jsx)(o.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                }),
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if (r) {
        let e, t
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(o.A, {
                id: "skills.recommended.error",
                defaultMessage: "Unable to load recommended skills",
              })),
              (s[1] = e))
            : (e = s[1]),
          s[2] !== r
            ? ((t = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(c.A, { title: e, description: r }),
              })),
              (s[2] = r),
              (s[3] = t))
            : (t = s[3]),
          t
        )
      }
      if (0 === n.length) {
        let e
        return (
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, l.jsx)(c.A, {
                  title: (0, l.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                }),
              })),
              (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      return (
        s[5] !== i ||
        s[6] !== n ||
        s[7] !== d ||
        s[8] !== p ||
        s[9] !== u ||
        s[10] !== m ||
        s[11] !== f ||
        s[12] !== x ||
        s[13] !== b ||
        s[14] !== y ||
        s[15] !== j
          ? ((t = (0, l.jsx)(l.Fragment, {
              children: j
                ? (0, l.jsx)(B, {
                    canInstall: i,
                    entries: n,
                    highlightInstalledSkills: d,
                    hostId: u,
                    highlightedSkillId: p,
                    installingSkillId: m,
                    onInstall: f,
                    onSkillsUpdated: x,
                    repoRoot: b,
                    roots: y,
                  })
                : (0, l.jsx)(C.Q, {
                    items: n,
                    visibleItemLimit: F({ itemCount: n.length, visibleItemLimit: 6 }) ?? n.length,
                    renderExpandRow: V,
                    children: (e) =>
                      (0, l.jsx)(B, {
                        canInstall: i,
                        entries: e,
                        highlightInstalledSkills: d,
                        hostId: u,
                        highlightedSkillId: p,
                        installingSkillId: m,
                        onInstall: f,
                        onSkillsUpdated: x,
                        repoRoot: b,
                        roots: y,
                      }),
                  }),
            })),
            (s[5] = i),
            (s[6] = n),
            (s[7] = d),
            (s[8] = p),
            (s[9] = u),
            (s[10] = m),
            (s[11] = f),
            (s[12] = x),
            (s[13] = b),
            (s[14] = y),
            (s[15] = j),
            (s[16] = t))
          : (t = s[16]),
        t
      )
    }
    function V(e) {
      let { hiddenItems: t, isExpanded: s, onToggle: a } = e
      return (0, l.jsx)(W, { isExpanded: s, skillNames: t.map(z), onClick: a })
    }
    function z(e) {
      let { skill: t } = e
      return t.name
    }
    function B(e) {
      let t,
        s,
        i = (0, a.c)(23),
        {
          canInstall: n,
          entries: r,
          highlightInstalledSkills: o,
          hostId: d,
          highlightedSkillId: c,
          installingSkillId: u,
          onInstall: p,
          onSkillsUpdated: m,
          repoRoot: g,
          roots: h,
        } = e
      if (
        i[0] !== n ||
        i[1] !== r ||
        i[2] !== o ||
        i[3] !== c ||
        i[4] !== d ||
        i[5] !== u ||
        i[6] !== p ||
        i[7] !== m ||
        i[8] !== g ||
        i[9] !== h
      ) {
        let e
        ;(i[11] !== n ||
        i[12] !== o ||
        i[13] !== c ||
        i[14] !== d ||
        i[15] !== u ||
        i[16] !== p ||
        i[17] !== m ||
        i[18] !== g ||
        i[19] !== h
          ? ((e = (e) => {
              let { installedSkill: t, isInstalled: s, skill: a } = e
              return null != t
                ? (0, l.jsx)(
                    T,
                    {
                      hostId: d,
                      installedStateAction: "menu",
                      isHighlighted: o || c === a.id,
                      onSkillsUpdated: (e, t) => {
                        e && m(t)
                      },
                      roots: h,
                      skill: t,
                    },
                    a.id,
                  )
                : (0, l.jsx)(
                    f.D,
                    {
                      canInstall: n,
                      hostId: d,
                      isHighlighted: s || c === a.id,
                      isInstalled: s,
                      isInstalling: u === a.id,
                      onInstall: p,
                      repoRoot: g,
                      skill: a,
                    },
                    a.id,
                  )
            }),
            (i[11] = n),
            (i[12] = o),
            (i[13] = c),
            (i[14] = d),
            (i[15] = u),
            (i[16] = p),
            (i[17] = m),
            (i[18] = g),
            (i[19] = h),
            (i[20] = e))
          : (e = i[20]),
          (t = r.map(e)),
          (i[0] = n),
          (i[1] = r),
          (i[2] = o),
          (i[3] = c),
          (i[4] = d),
          (i[5] = u),
          (i[6] = p),
          (i[7] = m),
          (i[8] = g),
          (i[9] = h),
          (i[10] = t))
      } else t = i[10]
      return (
        i[21] !== t ? ((s = (0, l.jsx)(y.q, { gap: "compact", children: t })), (i[21] = t), (i[22] = s)) : (s = i[22]),
        s
      )
    }
    function W(e) {
      let t,
        s,
        i,
        n = (0, a.c)(9),
        { isExpanded: r, skillNames: d, onClick: c } = e
      n[0] !== d ? ((t = d.slice(0, 2).join(", ")), (n[0] = d), (n[1] = t)) : (t = n[1])
      let u = Math.max(d.length - 2, 0)
      return (
        n[2] !== t || n[3] !== u
          ? ((s = (0, l.jsx)(o.A, {
              id: "skills.appsPage.section.seeAllSkillsDescription",
              defaultMessage: "See {skillNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}",
              values: { skillNames: t, remainingCount: u },
            })),
            (n[2] = t),
            (n[3] = u),
            (n[4] = s))
          : (s = n[4]),
        n[5] !== r || n[6] !== c || n[7] !== s
          ? ((i = (0, l.jsx)(C.s, { isExpanded: r, onClick: c, children: s })),
            (n[5] = r),
            (n[6] = c),
            (n[7] = s),
            (n[8] = i))
          : (i = n[8]),
        i
      )
    }
    function F({ itemCount: e, visibleItemLimit: t }) {
      return e - t >= 3 ? t : void 0
    }
  },
  XvU9(e, t, s) {
    s.d(t, { zS: () => C, Cy: () => A, Jc: () => w, p1: () => M })
    var l = s("ABep"),
      a = s("QosV"),
      i = s("xSOA"),
      n = s("qmMi"),
      r = s("zKw6"),
      o = s.n(r),
      d = s("zd8w"),
      c = s("oyxz"),
      u = s("SGsN"),
      p = s("MI1z"),
      m = s("GaA7"),
      g = s("OWtl"),
      h = s("ndjw"),
      f = s("kfGJ"),
      x = s("njDi"),
      b = s("f22a"),
      y = s("oom3"),
      v = s("UmGt"),
      j = s("t4SC")
    function k(e, t) {
      let s = t.toLowerCase()
      return (
        e.find((e) => {
          let t = e.name.toLowerCase(),
            l = e.id.toLowerCase()
          return t === s || l === s
        }) ?? null
      )
    }
    var S = s("bPa2")
    function M(e) {
      let t,
        s,
        l = (0, a.c)(6),
        i = void 0 === e ? f.fI : e,
        n = (0, p.y)(i),
        r = m.appServices?.recommendedSkills != null && null != n
      l[0] !== n
        ? ((t = null == n ? null : o().join(n, "vendor_imports", "skills")), (l[0] = n), (l[1] = t))
        : (t = l[1])
      let d = null == n ? null : `${n}/skills/.system/skill-creator/SKILL.md`
      return (
        l[2] !== r || l[3] !== t || l[4] !== d
          ? ((s = { canInstallRecommendedSkills: r, defaultRecommendedRepoRoot: t, skillCreatorPath: d }),
            (l[2] = r),
            (l[3] = t),
            (l[4] = d),
            (l[5] = s))
          : (s = l[5]),
        s
      )
    }
    function A(e) {
      let t,
        s,
        l,
        i,
        r,
        o,
        d,
        c,
        u,
        p = (0, a.c)(27),
        m = void 0 === e ? f.fI : e,
        v = (0, n.gh)(g.u)
      p[0] !== m ? ((t = { hostId: m }), (p[0] = m), (p[1] = t)) : (t = p[1])
      let j = (0, n._U)(h.FM, t)
      p[2] !== j.data?.roots ? ((s = j.data?.roots ?? []), (p[2] = j.data?.roots), (p[3] = s)) : (s = p[3])
      let k = s,
        { skills: M, isFetching: A, isLoading: w, forceReload: C } = (0, S.a)(k, m)
      p[4] !== C
        ? ((l = async () => {
            await C()
          }),
          (p[4] = C),
          (p[5] = l))
        : (l = p[5])
      let P = l
      if (p[6] !== P || p[7] !== M) {
        let e
        ;((i = (0, y.i6)(M)),
          p[12] !== M ? ((e = (0, b.cy)(M)), (p[12] = M), (p[13] = e)) : (e = p[13]),
          (r = e),
          (o = P),
          (d = (0, b.OP)(i)),
          (p[6] = P),
          (p[7] = M),
          (p[8] = i),
          (p[9] = r),
          (p[10] = o),
          (p[11] = d))
      } else ((i = p[8]), (r = p[9]), (o = p[10]), (d = p[11]))
      let I = j.isFetching || A,
        _ = j.isLoading || w
      return (
        p[14] !== P || p[15] !== v
          ? ((c = () => {
              ;((0, x.j)(v.queryClient), P())
            }),
            (p[14] = P),
            (p[15] = v),
            (p[16] = c))
          : (c = p[16]),
        p[17] !== i ||
        p[18] !== M ||
        p[19] !== r ||
        p[20] !== o ||
        p[21] !== d ||
        p[22] !== I ||
        p[23] !== _ ||
        p[24] !== c ||
        p[25] !== k
          ? ((u = {
              forceReloadSkills: o,
              installedSkillMatchKeys: d,
              installedSkillMetadata: M,
              isFetching: I,
              isLoading: _,
              markSkillsUpdated: c,
              skills: i,
              standaloneInstalledSkills: r,
              workspaceRoots: k,
            }),
            (p[17] = i),
            (p[18] = M),
            (p[19] = r),
            (p[20] = o),
            (p[21] = d),
            (p[22] = I),
            (p[23] = _),
            (p[24] = c),
            (p[25] = k),
            (p[26] = u))
          : (u = p[26]),
        u
      )
    }
    function w(e, t, s) {
      let l,
        i,
        r,
        o,
        d = (0, a.c)(15)
      d[0] !== t || d[1] !== s ? ((l = { hostId: t, loadOnMount: s }), (d[0] = t), (d[1] = s), (d[2] = l)) : (l = d[2])
      let {
          data: c,
          errorMessage: u,
          isLoading: p,
          refresh: m,
        } = (function (e) {
          let t,
            s,
            l,
            i,
            r,
            o = (0, a.c)(19),
            { hostId: d, loadOnMount: c } = e,
            u = void 0 === c || c,
            p = (0, n.gh)(g.u)
          o[0] !== u ? ((t = { enabled: u }), (o[0] = u), (o[1] = t)) : (t = o[1])
          let m = (0, n._U)(j.ev, d, t),
            h = m.data?.error ?? (m.error ? (m.error.message ?? m.error) : null)
          o[2] !== d || o[3] !== p
            ? ((s = async () => {
                let e = await (0, j.q_)({ hostId: d, refresh: !0 })
                p.query.setData(j.ev, d, e)
              }),
              (o[2] = d),
              (o[3] = p),
              (o[4] = s))
            : (s = o[4])
          let f = s
          o[5] !== d || o[6] !== m.data?.skills || o[7] !== p
            ? ((l = async (e) => {
                let t = k(m.data?.skills ?? [], e)
                if (t) return t
                let s = await (0, j.q_)({ hostId: d, refresh: !1 })
                return (p.query.setData(j.ev, d, s), k(s.skills, e))
              }),
              (o[5] = d),
              (o[6] = m.data?.skills),
              (o[7] = p),
              (o[8] = l))
            : (l = o[8])
          let x = l
          o[9] !== d || o[10] !== p
            ? ((i = async (e) => {
                let { skill: t, installRoot: s } = e
                return (0, j.kL)({
                  hostId: d,
                  skillId: t.id,
                  repoPath: t.repoPath,
                  installRoot: void 0 === s ? null : s,
                  skillStatsigOverride: await (0, v.Uu)(p, t.id),
                })
              }),
              (o[9] = d),
              (o[10] = p),
              (o[11] = i))
            : (i = o[11])
          let b = i
          return (
            o[12] !== x || o[13] !== h || o[14] !== b || o[15] !== m.data || o[16] !== m.isLoading || o[17] !== f
              ? ((r = {
                  data: m.data,
                  errorMessage: h,
                  isLoading: m.isLoading,
                  refresh: f,
                  ensureSkillByName: x,
                  installSkill: b,
                }),
                (o[12] = x),
                (o[13] = h),
                (o[14] = b),
                (o[15] = m.data),
                (o[16] = m.isLoading),
                (o[17] = f),
                (o[18] = r))
              : (r = o[18]),
            r
          )
        })(l),
        h = s ? u : null,
        f = s && p
      d[3] !== s || d[4] !== m
        ? ((i = async () => {
            s && (await m())
          }),
          (d[3] = s),
          (d[4] = m),
          (d[5] = i))
        : (i = d[5])
      let x = s ? (c?.repoRoot ?? e) : null
      return (
        d[6] !== c?.skills || d[7] !== s
          ? ((r = s ? (c?.skills ?? []) : []), (d[6] = c?.skills), (d[7] = s), (d[8] = r))
          : (r = d[8]),
        d[9] !== h || d[10] !== f || d[11] !== i || d[12] !== x || d[13] !== r
          ? ((o = { errorMessage: h, isLoading: f, refresh: i, repoRoot: x, skills: r }),
            (d[9] = h),
            (d[10] = f),
            (d[11] = i),
            (d[12] = x),
            (d[13] = r),
            (d[14] = o))
          : (o = d[14]),
        o
      )
    }
    function C(e) {
      let t,
        s,
        r,
        o,
        m,
        h,
        f,
        b = (0, a.c)(20),
        { forceReloadSkills: y, hostId: k, onInstalled: S } = e,
        M = (0, n.gh)(g.u),
        A = null != (0, p.y)(k),
        [w, C] = (0, d.useState)(null)
      b[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = Symbol()), (b[0] = t)) : (t = b[0])
      let P = (0, d.useRef)(t)
      b[1] === Symbol.for("react.memo_cache_sentinel") ? ((s = {}), (b[1] = s)) : (s = b[1])
      let [I, _] = (0, d.useState)(s)
      b[2] !== M
        ? ((r = {
            mutationFn: async (e) => (0, j.kL)({ ...e, skillStatsigOverride: await (0, v.Uu)(M, e.skillId) }),
            networkMode: "always",
          }),
          (b[2] = M),
          (b[3] = r))
        : (r = b[3])
      let N = (0, i.n)(r)
      ;(b[4] !== k
        ? ((o = () => {
            ;((P.current = Symbol()), C(null), _((e) => ({ ...e, [k]: [] })))
          }),
          (b[4] = k),
          (b[5] = o))
        : (o = b[5]),
        b[6] !== A || b[7] !== y || b[8] !== k || b[9] !== N || b[10] !== S || b[11] !== M
          ? ((m = (e, t) => {
              if (!A) return
              let s = P.current
              ;(C(e.id),
                N.mutate(
                  { hostId: k, skillId: e.id, repoPath: e.repoPath, installRoot: t },
                  {
                    onSuccess: (t, a) => {
                      t.success &&
                        P.current === s &&
                        (_((e) => {
                          let t = e[a.hostId]
                          return t?.includes(a.skillId) ? e : { ...e, [a.hostId]: [...(t ?? []), a.skillId] }
                        }),
                        (0, x.j)(M.queryClient),
                        y(),
                        S?.(),
                        M.get(u.Id).success(
                          (0, l.jsx)(c.A, {
                            id: "skills.recommended.installSuccess",
                            defaultMessage: "{skillName} skill installed",
                            values: { skillName: (0, l.jsx)("span", { className: "font-medium", children: e.name }) },
                          }),
                        ))
                    },
                    onSettled: () => {
                      P.current === s && C((t) => (t === e.id ? null : t))
                    },
                  },
                ))
            }),
            (b[6] = A),
            (b[7] = y),
            (b[8] = k),
            (b[9] = N),
            (b[10] = S),
            (b[11] = M),
            (b[12] = m))
          : (m = b[12]))
      let E = I[k]
      return (
        b[13] !== E ? ((h = new Set(E)), (b[13] = E), (b[14] = h)) : (h = b[14]),
        b[15] !== w || b[16] !== o || b[17] !== m || b[18] !== h
          ? ((f = {
              clearInstalledRecommendedSkills: o,
              installRecommendedSkill: m,
              installedRecommendedSkillIds: h,
              installingSkillId: w,
            }),
            (b[15] = w),
            (b[16] = o),
            (b[17] = m),
            (b[18] = h),
            (b[19] = f))
          : (f = b[19]),
        f
      )
    }
  },
}
//# sourceMappingURL=623136.65fbfd2ce4.js.map
