export const __rspack_esm_ids = [604319]
export const __webpack_modules__ = {
  xcgE(e, l, t) {
    var s = t("DBCl"),
      i = t("Qgfj"),
      n = t("H7Ld")
    let a = (0, i.zR)({ id: "settings.chronicle.history.pluginDisplayName", defaultMessage: "Computer History" }),
      r = (0, i.YK)({
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
    t.d(
      l,
      {},
      {
        bk: a,
        c5: function ({ intl: e, memoryFilePath: l, suggestion: t }) {
          return (0, n.KH)({
            defaultPrompt:
              "skill" === t.type
                ? e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedSkillPrompt",
                      defaultMessage:
                        'Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"',
                    },
                    { name: t.name, request: t.description, memoryFilePath: l, paragraphBreak: "\n\n" },
                  )
                : e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedAutomationPrompt",
                      defaultMessage:
                        'Create a new "{name}" automation based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"{paragraphBreak}Use my local timezone and a new chat for scheduled runs.',
                    },
                    { name: t.name, request: t.description, memoryFilePath: l, paragraphBreak: "\n\n" },
                  ),
            pluginDisplayName: e.formatMessage(a),
            pluginId: `${s.IW7}@${s.MY3}`,
          })
        },
        wg: function (e) {
          let l = Object.values(r),
            t = l[Math.floor(Math.random() * l.length)]
          if (null != t)
            return (0, n.KH)({
              defaultPrompt: e.formatMessage(t),
              pluginDisplayName: e.formatMessage(a),
              pluginId: `${s.IW7}@${s.MY3}`,
            })
        },
      },
    )
  },
  SIRb(e, l, t) {
    let s
    t.d(
      l,
      {},
      {
        A8: async function () {
          return (await t.e(195959).then(t.bind(t, "j5ZC"))).startSkillCreatorChat
        },
        Nm: async function () {
          return (await t.e(484610).then(t.bind(t, "FLsU"))).ReusableWorkflowTipSource
        },
        ON: async function () {
          return (await Promise.all([t.e(512663), t.e(708828), t.e(346276)]).then(t.bind(t, "KyAJ"))).SkillDetails
        },
        Zd: async function () {
          let e = await t.e(912488).then(t.bind(t, "V0oe"))
          return ((s = e.submitWithBrowserSkills), e.BrowserSkillsComposer)
        },
        Zg: function (e) {
          return (
            s ??
            (e
              ? t
                  .e(675898)
                  .then(t.bind(t, "lsOY"))
                  .then((e) => (s = e.submitWithBrowserSkills))
              : void 0)
          )
        },
        ht: async function () {
          return (await t.e(919572).then(t.bind(t, "Xsss"))).HostedSkillMention
        },
        iw: async function () {
          return (
            await Promise.all([
              t.e(725599),
              t.e(273709),
              t.e(704837),
              t.e(587355),
              t.e(269406),
              t.e(512663),
              t.e(871717),
              t.e(708828),
              t.e(93318),
              t.e(842627),
            ]).then(t.bind(t, "OeSF"))
          ).BrowserSkillsDirectory
        },
        loadSkillData: async function () {
          return t.e(190944).then(t.bind(t, "jxLz"))
        },
        pI: async function () {
          return (
            await Promise.all([t.e(652500), t.e(473403), t.e(801119), t.e(512663), t.e(569156), t.e(771643)]).then(
              t.bind(t, "EOSE"),
            )
          ).BrowserSkillEditor
        },
      },
    )
  },
  bXA4(e, l, t) {
    var s = t("qmMi"),
      i = t("Qgfj"),
      n = t("rO8L"),
      a = t("Gg2s"),
      r = t("OWtl")
    let o = {
        section: "plugins-settings",
        id: "browse-plugin-directory",
        title: (0, i.zR)({
          id: "settings.section.plugins-settings.browseDirectory",
          defaultMessage: "Browse directory",
        }),
      },
      d = {
        section: "skills-settings",
        id: "create-skill",
        title: (0, i.zR)({ id: "skills.page.createSkill", defaultMessage: "New skill" }),
      },
      c = (0, s.un)(r.u, ({ get: e }) => {
        let l = e(a.u9, "local", { enabled: !1 }).data
        return null == l || (0, n.W)(l) ? [] : [d]
      })
    t.d(l, {}, { AI: c, Am: d, k1: o })
  },
  pO0d(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("oyxz"),
      a = t("Wf1j"),
      r = t("AWNZ"),
      o = t("DDOY")
    function d(e) {
      let l,
        t = (0, i.c)(2),
        { title: a } = e
      return (
        t[0] !== a
          ? ((l =
              "localizedText" in a ? (0, s.jsx)(s.Fragment, { children: a.localizedText }) : (0, s.jsx)(n.A, { ...a })),
            (t[0] = a),
            (t[1] = l))
          : (l = t[1]),
        l
      )
    }
    t.d(
      l,
      {},
      {
        Ct: d,
        GC: function (e) {
          let l,
            t,
            a,
            o,
            c,
            u,
            m,
            h,
            f,
            g = (0, i.c)(19)
          g[0] !== e
            ? (({ entry: t, anchored: c, description: l, renderLabel: o, ...a } = e),
              (g[0] = e),
              (g[1] = l),
              (g[2] = t),
              (g[3] = a),
              (g[4] = o),
              (g[5] = c))
            : ((l = g[1]), (t = g[2]), (a = g[3]), (o = g[4]), (c = g[5]))
          let p = void 0 === c || c
          g[6] !== t.title ? ((u = (0, s.jsx)(d, { title: t.title })), (g[6] = t.title), (g[7] = u)) : (u = g[7])
          let k = u,
            x = p ? t.id : void 0
          return (
            g[8] !== k || g[9] !== o ? ((m = null == o ? k : o(k)), (g[8] = k), (g[9] = o), (g[10] = m)) : (m = g[10]),
            g[11] !== l || g[12] !== t.description
              ? ((h = null == t.description ? l : (0, s.jsx)(n.A, { ...t.description })),
                (g[11] = l),
                (g[12] = t.description),
                (g[13] = h))
              : (h = g[13]),
            g[14] !== a || g[15] !== x || g[16] !== m || g[17] !== h
              ? ((f = (0, s.jsx)(r.ic, { ...a, searchAnchor: x, label: m, description: h })),
                (g[14] = a),
                (g[15] = x),
                (g[16] = m),
                (g[17] = h),
                (g[18] = f))
              : (f = g[18]),
            f
          )
        },
        ek: function (e) {
          let l,
            t,
            n = (0, i.c)(12),
            { entry: r, anchored: d, className: c, children: u } = e,
            m = void 0 === d || d,
            h = (0, a.A)(),
            f = m ? r.id : void 0,
            g = m ? r.id : void 0,
            p = m ? -1 : void 0,
            k = m ? "group" : void 0
          return (
            n[0] !== m || n[1] !== r || n[2] !== h
              ? ((l = m ? (0, o.hz)(h, r.title) : void 0), (n[0] = m), (n[1] = r), (n[2] = h), (n[3] = l))
              : (l = n[3]),
            n[4] !== u || n[5] !== c || n[6] !== f || n[7] !== g || n[8] !== p || n[9] !== k || n[10] !== l
              ? ((t = (0, s.jsx)("div", {
                  id: f,
                  "data-settings-search-entry": g,
                  tabIndex: p,
                  role: k,
                  "aria-label": l,
                  className: c,
                  children: u,
                })),
                (n[4] = u),
                (n[5] = c),
                (n[6] = f),
                (n[7] = g),
                (n[8] = p),
                (n[9] = k),
                (n[10] = l),
                (n[11] = t))
              : (t = n[11]),
            t
          )
        },
        iu: function (e) {
          let l,
            t,
            n,
            a = (0, i.c)(6)
          return (
            a[0] !== e ? (({ action: l, ...t } = e), (a[0] = e), (a[1] = l), (a[2] = t)) : ((l = a[1]), (t = a[2])),
            a[3] !== l || a[4] !== t
              ? ((n = (0, s.jsx)(r.ic, { ...t, control: l })), (a[3] = l), (a[4] = t), (a[5] = n))
              : (n = a[5]),
            n
          )
        },
        kk: function (e) {
          let l,
            t,
            a,
            o,
            c,
            u,
            m,
            h = (0, i.c)(15)
          h[0] !== e
            ? (({ entry: t, anchored: o, description: l, ...a } = e),
              (h[0] = e),
              (h[1] = l),
              (h[2] = t),
              (h[3] = a),
              (h[4] = o))
            : ((l = h[1]), (t = h[2]), (a = h[3]), (o = h[4]))
          let f = void 0 === o || o ? t.id : void 0
          return (
            h[5] !== t.title ? ((c = (0, s.jsx)(d, { title: t.title })), (h[5] = t.title), (h[6] = c)) : (c = h[6]),
            h[7] !== l || h[8] !== t.description
              ? ((u = null == t.description ? l : (0, s.jsx)(n.A, { ...t.description })),
                (h[7] = l),
                (h[8] = t.description),
                (h[9] = u))
              : (u = h[9]),
            h[10] !== a || h[11] !== f || h[12] !== c || h[13] !== u
              ? ((m = (0, s.jsx)(r.kG, { ...a, searchAnchor: f, label: c, description: u })),
                (h[10] = a),
                (h[11] = f),
                (h[12] = c),
                (h[13] = u),
                (h[14] = m))
              : (m = h[14]),
            m
          )
        },
      },
    )
  },
  IXY8(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("slpy"),
      a = t("ClXH"),
      r = t("zd8w"),
      o = t("Wf1j"),
      d = t("oyxz"),
      c = t("Sm6l"),
      u = t("bqtn"),
      m = t("bVeK"),
      h = t("pZRQ"),
      f = t("KxVC"),
      g = t("kfGJ"),
      p = t("QyE3")
    function k() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("span", {
              "aria-hidden": !0,
              className: "block size-2 shrink-0 rounded-full bg-green-500",
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    t.d(
      l,
      {},
      {
        r: function (e) {
          let l,
            t,
            x,
            j,
            y,
            b,
            S,
            v,
            I,
            w = (0, i.c)(36),
            {
              connectedRemoteConnections: M,
              disabled: A,
              includeLocalHost: N,
              onSelectHost: P,
              selectedHostId: C,
              align: _,
              contentWidth: L,
              localIcon: E,
              localLabel: R,
              showConnectedIndicator: U,
              triggerVariant: D,
            } = e,
            F = void 0 !== A && A,
            O = void 0 === N || N,
            z = void 0 === E ? h.A : E,
            T = void 0 !== U && U,
            B = void 0 === D ? "selected-host" : D,
            W = (0, o.A)(),
            [q, H] = (0, r.useState)(!1)
          w[0] !== M || w[1] !== C
            ? ((l = M.find((e) => e.hostId === C) ?? null), (w[0] = M), (w[1] = C), (w[2] = l))
            : (l = w[2])
          let Q = l
          w[3] !== W || w[4] !== R
            ? ((t = R ?? W.formatMessage({ id: "settings.hostDropdown.local", defaultMessage: "Local" })),
              (w[3] = W),
              (w[4] = R),
              (w[5] = t))
            : (t = w[5])
          let V = t,
            G = Q?.displayName ?? V
          ;(w[6] !== O || w[7] !== V
            ? ((x = O ? [{ hostId: g.fI, displayName: V }] : []), (w[6] = O), (w[7] = V), (w[8] = x))
            : (x = w[8]),
            w[9] !== M || w[10] !== x ? ((j = [...x, ...M]), (w[9] = M), (w[10] = x), (w[11] = j)) : (j = w[11]))
          let K = j
          w[12] !== W
            ? ((y = W.formatMessage({ id: "settings.hostDropdown.filter", defaultMessage: "Filter settings by host" })),
              (w[12] = W),
              (w[13] = y))
            : (y = w[13])
          let Y = y
          w[14] !== z ||
          w[15] !== F ||
          w[16] !== Y ||
          w[17] !== q ||
          w[18] !== G ||
          w[19] !== Q ||
          w[20] !== T ||
          w[21] !== B
            ? ((b =
                "filter" === B
                  ? (0, s.jsx)(n.m, {
                      content: Y,
                      disabled: F || q,
                      children: (0, s.jsx)(c.$, {
                        className: "sidebar-icon-button sidebar-hover-icon-button-tint",
                        "aria-label": Y,
                        color: "ghostMuted",
                        disabled: F,
                        size: "compact",
                        uniform: !0,
                        children: (0, s.jsx)(m.uG0, {}),
                      }),
                    })
                  : (0, s.jsxs)(p.vg, {
                      disabled: F,
                      chevronClassName: F ? "hidden" : void 0,
                      children: [
                        null != Q
                          ? (0, s.jsx)(f.z, { className: "icon-xs shrink-0", hostId: Q.hostId })
                          : (0, s.jsx)(z, { className: "icon-xs shrink-0 text-default" }),
                        (0, s.jsx)("span", { className: "truncate text-start text-default", children: G }),
                        null != Q && T ? (0, s.jsx)(k, {}) : null,
                      ],
                    })),
              (w[14] = z),
              (w[15] = F),
              (w[16] = Y),
              (w[17] = q),
              (w[18] = G),
              (w[19] = Q),
              (w[20] = T),
              (w[21] = B),
              (w[22] = b))
            : (b = w[22])
          let J = b
          if (F) return J
          let $ = _ ?? "end",
            Z = L ?? "menuWide"
          return (
            w[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, s.jsx)(u.ms.Title, {
                  children: (0, s.jsx)(d.A, { id: "settings.hostDropdown.title", defaultMessage: "Host" }),
                })),
                (w[23] = S))
              : (S = w[23]),
            w[24] !== z || w[25] !== K || w[26] !== P || w[27] !== C || w[28] !== T
              ? ((v = (0, s.jsx)(u.ms.Section, {
                  className: "max-h-40 overflow-y-auto",
                  children: K.map((e) =>
                    (0, s.jsx)(
                      u.ms.Item,
                      {
                        rightIconAsset: e.hostId === C ? a.G : void 0,
                        onSelect: () => {
                          P(e.hostId)
                        },
                        children: (0, s.jsxs)("span", {
                          className: "flex min-w-0 items-center gap-2",
                          children: [
                            e.hostId === g.fI
                              ? (0, s.jsx)(z, { className: "icon-xs shrink-0" })
                              : (0, s.jsx)(f.z, { className: "icon-xs shrink-0", hostId: e.hostId }),
                            (0, s.jsx)("span", { className: "truncate", children: e.displayName }),
                            e.hostId !== g.fI && T ? (0, s.jsx)(k, {}) : null,
                          ],
                        }),
                      },
                      e.hostId,
                    ),
                  ),
                })),
                (w[24] = z),
                (w[25] = K),
                (w[26] = P),
                (w[27] = C),
                (w[28] = T),
                (w[29] = v))
              : (v = w[29]),
            w[30] !== q || w[31] !== $ || w[32] !== Z || w[33] !== v || w[34] !== J
              ? ((I = (0, s.jsxs)(u.Ab, {
                  open: q,
                  onOpenChange: H,
                  align: $,
                  contentWidth: Z,
                  triggerButton: J,
                  children: [S, v],
                })),
                (w[30] = q),
                (w[31] = $),
                (w[32] = Z),
                (w[33] = v),
                (w[34] = J),
                (w[35] = I))
              : (I = w[35]),
            I
          )
        },
      },
    )
  },
  DDOY(e, l, t) {
    var s = t("Ywss"),
      i = t("iiZm")
    function n(e, l) {
      return "localizedText" in l ? l.localizedText : e.formatMessage(l, l.values)
    }
    t.d(
      l,
      {},
      {
        Xl: function (e, l, t) {
          let i = (0, s.Rr)(e),
            n = new URLSearchParams(i.search)
          for (let [e, l] of Object.entries(t ?? {})) n.set(e, l)
          return (0, s.AO)({ ...i, search: n.toString(), hash: l })
        },
        hz: n,
        s9: function (e, l, t) {
          let s = t.trim()
          return 0 === s.length
            ? []
            : e
                .flatMap((e) => {
                  let t = n(l, e.title),
                    a = (0, i.gr)(t, s),
                    r = (null == e.description ? "" : l.formatMessage(e.description))
                      .toLocaleLowerCase(l.locale)
                      .includes(s.toLocaleLowerCase(l.locale)),
                    o = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, i.gr)(n(l, e), s) > 0)
                  return 0 !== a || r || o
                    ? [
                        {
                          id: e.id,
                          label: t,
                          score: a,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, l) => l.score - e.score)
                .map(({ id: e, label: l, sectionSlug: t, path: s, searchParams: i }) => ({
                  id: e,
                  label: l,
                  sectionSlug: t,
                  ...(null == s ? {} : { path: s }),
                  searchParams: i,
                }))
        },
      },
    )
  },
  kEV3(e, l, t) {
    var s = t("Qgfj")
    let i = (0, s.YK)({
        system: { id: "skills.scope.system", defaultMessage: "System" },
        repo: { id: "skills.scope.repo", defaultMessage: "Repo" },
        user: { id: "skills.scope.user", defaultMessage: "User" },
        admin: { id: "skills.scope.admin", defaultMessage: "Admin" },
      }),
      n = (0, s.YK)({
        system: { id: "skills.scope.builtIn", defaultMessage: "System" },
        repo: { id: "skills.scope.team", defaultMessage: "Team" },
        user: { id: "skills.scope.personal", defaultMessage: "Personal" },
        admin: { id: "skills.scope.adminInstalled", defaultMessage: "Admin installed" },
      })
    function a({ scope: e, intl: l, repoLabel: t, adminLabel: s }) {
      if ("repo" === e) return t ?? l.formatMessage(n.repo)
      if ("admin" === e) return s ?? l.formatMessage(n.admin)
      let r = n[e]
      return r ? l.formatMessage(r) : l.formatMessage(i[e])
    }
    function r({ skillPath: e, roots: l, fallbackLabel: t }) {
      let s,
        i,
        n = l.reduce((l, t) => (e.startsWith(t) && (!l || t.length > l.length) ? t : l), null)
      if (!n) return t
      let a =
        -1 === (i = Math.max((s = n.replace(/[\\/]+$/, "")).lastIndexOf("/"), s.lastIndexOf("\\"))) ? s : s.slice(i + 1)
      return a.length > 0 ? a : t
    }
    t.d(
      l,
      {},
      {
        IG: function ({ skill: e, roots: l, intl: t, fallbackRepoLabel: s, adminLabel: i }) {
          return a({
            scope: e.scope,
            intl: t,
            repoLabel: r({ skillPath: e.path, roots: l, fallbackLabel: s ?? a({ scope: "repo", intl: t }) }),
            adminLabel: i,
          })
        },
        V_: a,
        _i: r,
      },
    )
  },
  njDi(e, l, t) {
    var s = t("sLlu"),
      i = t("t4SC")
    t.d(
      l,
      {},
      {
        j: async function (e) {
          await Promise.all(
            [["skills"], i.w5, ["artifact-template-skill-manifests"], ["artifact-template-skill-creation-times"]].map(
              (l) => (0, s.y)(e, l),
            ),
          )
        },
      },
    )
  },
  mIfQ(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("on57"),
      a = t("zd8w"),
      r = t("oyxz")
    t.d(
      l,
      {},
      {
        Q: function (e) {
          let l,
            t,
            n,
            r = (0, i.c)(12),
            { children: o, items: d, batchSize: c, pinnedItem: u, renderExpandRow: m, visibleItemLimit: h } = e,
            [f, g] = (0, a.useState)(0),
            p = h + f * (c ?? d.length)
          if (r[0] !== o || r[1] !== d || r[2] !== u || r[3] !== m || r[4] !== f || r[5] !== p || r[6] !== h) {
            let e = d.slice(0, p),
              s = d.slice(p),
              i = null != u && s.includes(u),
              n = i ? s.filter((e) => e !== u) : s,
              a = f > 0 && 0 === n.length
            ;((l = o(i ? [...e, u] : e)),
              (t =
                d.length > h && (a || n.length > 0)
                  ? m({ hiddenItems: n, isExpanded: a, onToggle: () => g((e) => (a ? 0 : e + 1)) })
                  : null),
              (r[0] = o),
              (r[1] = d),
              (r[2] = u),
              (r[3] = m),
              (r[4] = f),
              (r[5] = p),
              (r[6] = h),
              (r[7] = l),
              (r[8] = t))
          } else ((l = r[7]), (t = r[8]))
          return (
            r[9] !== l || r[10] !== t
              ? ((n = (0, s.jsxs)(s.Fragment, { children: [l, t] })), (r[9] = l), (r[10] = t), (r[11] = n))
              : (n = r[11]),
            n
          )
        },
        s: function (e) {
          let l,
            t,
            a,
            o = (0, i.c)(10),
            { children: d, className: c, isExpanded: u, onClick: m } = e
          return (
            o[0] !== c
              ? ((l = (0, n.A)(
                  "flex min-h-[var(--height-token-row)] w-full cursor-interaction items-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm leading-relaxed font-normal text-codex-description outline-hidden hover:text-default focus-visible:text-default",
                  c,
                )),
                (o[0] = c),
                (o[1] = l))
              : (l = o[1]),
            o[2] !== d || o[3] !== u
              ? ((t = u ? (0, s.jsx)(r.A, { id: "skills.appsPage.section.showLess", defaultMessage: "Show less" }) : d),
                (o[2] = d),
                (o[3] = u),
                (o[4] = t))
              : (t = o[4]),
            o[5] !== u || o[6] !== m || o[7] !== l || o[8] !== t
              ? ((a = (0, s.jsx)("button", {
                  className: l,
                  type: "button",
                  "aria-expanded": u,
                  onClick: m,
                  children: t,
                })),
                (o[5] = u),
                (o[6] = m),
                (o[7] = l),
                (o[8] = t),
                (o[9] = a))
              : (a = o[9]),
            a
          )
        },
      },
    )
  },
  fQ1s(e, l, t) {
    var s = t("QosV"),
      i = t("qmMi"),
      n = t("Ywss"),
      a = t("OiCI"),
      r = t("rO8L"),
      o = t("kfGJ"),
      d = t("oom3")
    t.d(
      l,
      {},
      {
        x: function () {
          let e,
            l,
            t = (0, s.c)(6),
            c = (0, n.zy)()
          t[0] !== c.search || t[1] !== c.state
            ? ((e = (0, d.qC)(c.state, c.search).initialHostId ?? o.fI),
              (t[0] = c.search),
              (t[1] = c.state),
              (t[2] = e))
            : (e = t[2])
          let u = e
          return (
            (0, i.Ul)(a.vh),
            t[3] !== u || !0 !== t[4]
              ? ((l = { enabled: !0, hostId: u }), (t[3] = u), (t[4] = !0), (t[5] = l))
              : (l = t[5]),
            (0, r.J)(l)
          )
        },
      },
    )
  },
  Ekos(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("slpy"),
      a = t("ozCc"),
      r = t("zKw6"),
      o = t.n(r),
      d = t("HJEB"),
      c = t("Qgfj"),
      u = t("Wf1j"),
      m = t("oyxz"),
      h = t("Sm6l"),
      f = t("HOLv"),
      g = t("poBj"),
      p = t("axh8"),
      k = t("n4fT"),
      x = t("hobO"),
      j = t("vOoA")
    let y = (0, c.YK)({
      installSkill: { id: "skills.recommended.connectSkill", defaultMessage: "Install skill" },
      installed: { id: "skills.recommended.installed", defaultMessage: "Installed" },
    })
    function b(e) {
      let l,
        t,
        n,
        r,
        o = (0, i.c)(13),
        { canInstall: d, installing: c, isInstalled: u, onInstall: g, skill: p } = e,
        k = u || !d || c
      return (
        o[0] !== g || o[1] !== p
          ? ((l = (e) => {
              ;(e.stopPropagation(), g(p, null))
            }),
            (o[0] = g),
            (o[1] = p),
            (o[2] = l))
          : (l = o[2]),
        o[3] !== k
          ? ((t = k ? null : (0, s.jsx)(f.I, { "aria-hidden": !1, asset: a.f })), (o[3] = k), (o[4] = t))
          : (t = o[4]),
        o[5] !== u
          ? ((n = u
              ? (0, s.jsx)(m.A, { ...y.installed })
              : (0, s.jsx)(m.A, { id: "skills.recommended.install", defaultMessage: "Install skill" })),
            (o[5] = u),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== c || o[8] !== k || o[9] !== l || o[10] !== t || o[11] !== n
          ? ((r = (0, s.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, s.jsxs)(h.$, {
                color: "primary",
                size: "toolbar",
                disabled: k,
                loading: c,
                onClick: l,
                children: [t, n],
              }),
            })),
            (o[7] = c),
            (o[8] = k),
            (o[9] = l),
            (o[10] = t),
            (o[11] = n),
            (o[12] = r))
          : (r = o[12]),
        r
      )
    }
    function S(e) {
      let l,
        t,
        n,
        a,
        r = (0, i.c)(16),
        { skill: o, size: d, basePath: c } = e,
        u = void 0 === d ? "small" : d,
        m = !!o.iconLarge
      if (
        ("small" === u ? (l = 24) : m || (l = 20),
        r[0] !== c ||
          r[1] !== l ||
          r[2] !== m ||
          r[3] !== u ||
          r[4] !== o.description ||
          r[5] !== o.iconLarge ||
          r[6] !== o.iconSmall ||
          r[7] !== o.name)
      ) {
        let e,
          s = (0, p.h)(null, {
            size: u,
            fallbackSize: l,
            fallbackClassName: "text-secondary",
            iconSmall: o.iconSmall,
            iconLarge: o.iconLarge,
            basePath: c,
            alt: o.name,
            fallbackName: o.name,
            fallbackDescription: o.description,
          })
        r[10] !== m || r[11] !== u
          ? ((e = (0, j.a)({ size: u, hasLargeIcon: m, largeFallbackClassName: "h-5 w-5" })),
            (r[10] = m),
            (r[11] = u),
            (r[12] = e))
          : (e = r[12])
        let i = `${e} text-secondary`
        ;((t = s),
          (n = (0, p.d8)(s, i, "text-secondary")),
          (r[0] = c),
          (r[1] = l),
          (r[2] = m),
          (r[3] = u),
          (r[4] = o.description),
          (r[5] = o.iconLarge),
          (r[6] = o.iconSmall),
          (r[7] = o.name),
          (r[8] = t),
          (r[9] = n))
      } else ((t = r[8]), (n = r[9]))
      return (
        r[13] !== t || r[14] !== n
          ? ((a = (0, s.jsx)(t, { ...n })), (r[13] = t), (r[14] = n), (r[15] = a))
          : (a = r[15]),
        a
      )
    }
    t.d(
      l,
      {},
      {
        D: function (e) {
          let l,
            t,
            a,
            r,
            c,
            f,
            p,
            j,
            v = (0, i.c)(37),
            {
              skill: I,
              canInstall: w,
              hostId: M,
              isHighlighted: A,
              isInstalled: N,
              isInstalling: P,
              repoRoot: C,
              onInstall: _,
            } = e,
            L = void 0 !== A && A,
            E = (0, u.A)(),
            R = I.shortDescription && I.shortDescription.length > 0 ? I.shortDescription : I.description
          v[0] !== C || v[1] !== I.repoPath
            ? ((l = (function ({ repoRoot: e, repoPath: l }) {
                if (!e) return null
                let t = l.split("/").join(o().sep),
                  s = o().join(e, t)
                return s.toLowerCase().endsWith(".md") ? s : o().join(s, "SKILL.md")
              })({ repoRoot: C, repoPath: I.repoPath })),
              (v[0] = C),
              (v[1] = I.repoPath),
              (v[2] = l))
            : (l = v[2])
          let U = l
          v[3] !== I.name ? ((t = (0, d.l)(I.name)), (v[3] = I.name), (v[4] = t)) : (t = v[4])
          let D = t,
            F = I.iconLarge ? "large" : "small"
          v[5] !== I || v[6] !== U || v[7] !== F
            ? ((a = (0, s.jsx)(S, { skill: I, size: F, basePath: U })), (v[5] = I), (v[6] = U), (v[7] = F), (v[8] = a))
            : (a = v[8])
          let O = a,
            z = N || !w || P
          v[9] !== E || v[10] !== z || v[11] !== N || v[12] !== P || v[13] !== _ || v[14] !== I
            ? ((r = N
                ? (0, s.jsx)(g.I, {
                    enabledStatusAriaLabel: E.formatMessage(y.installed),
                    isEnabled: !0,
                    isUninstalling: !1,
                    isUpdating: !1,
                  })
                : (0, s.jsx)(n.m, {
                    content: (0, s.jsx)(m.A, { ...y.installSkill }),
                    children: (0, s.jsx)(h.$, {
                      "aria-label": E.formatMessage(y.installSkill),
                      color: "secondary",
                      size: "composer",
                      disabled: z,
                      loading: P,
                      onClick: (e) => {
                        ;(e.stopPropagation(), z || _(I, null))
                      },
                      children: (0, s.jsx)(m.A, { ...y.installSkill }),
                    }),
                  })),
              (v[9] = E),
              (v[10] = z),
              (v[11] = N),
              (v[12] = P),
              (v[13] = _),
              (v[14] = I),
              (v[15] = r))
            : (r = v[15])
          let T = r
          return (
            v[16] !== D ? ((c = (0, s.jsx)(x.Rv, { kind: "Skill", title: D })), (v[16] = D), (v[17] = c)) : (c = v[17]),
            v[18] !== D || v[19] !== M || v[20] !== U
              ? ((f = (e) => {
                  let { isOpen: l } = e
                  return (0, s.jsx)(x.FG, { hostId: M, isOpen: l, skillPath: U, titleText: D })
                }),
                (v[18] = D),
                (v[19] = M),
                (v[20] = U),
                (v[21] = f))
              : (f = v[21]),
            v[22] !== w || v[23] !== N || v[24] !== P || v[25] !== _ || v[26] !== I
              ? ((p = (0, s.jsx)(b, { canInstall: w, installing: P, isInstalled: N, onInstall: _, skill: I })),
                (v[22] = w),
                (v[23] = N),
                (v[24] = P),
                (v[25] = _),
                (v[26] = I),
                (v[27] = p))
              : (p = v[27]),
            v[28] !== T ||
            v[29] !== R ||
            v[30] !== D ||
            v[31] !== L ||
            v[32] !== O ||
            v[33] !== c ||
            v[34] !== f ||
            v[35] !== p
              ? ((j = (0, s.jsx)(k.C, {
                  cardIcon: O,
                  cardTitle: D,
                  cardDescription: R,
                  cardActions: T,
                  isHighlighted: L,
                  modalTitle: c,
                  modalTitleText: D,
                  modalDescription: R,
                  modalBody: f,
                  modalFooter: p,
                })),
                (v[28] = T),
                (v[29] = R),
                (v[30] = D),
                (v[31] = L),
                (v[32] = O),
                (v[33] = c),
                (v[34] = f),
                (v[35] = p),
                (v[36] = j))
              : (j = v[36]),
            j
          )
        },
      },
    )
  },
  UmGt(e, l, t) {
    var s = t("ASxG"),
      i = t("OMIV")
    let n = s.YjP().refine((e) => e.trim().length > 0),
      a = s.Ikc({ skill_markdown_by_id: s.g1P(s.YjP(), s.L5J()).optional() }).catch({ skill_markdown_by_id: {} })
    t.d(
      l,
      {},
      {
        Uu: async function (e, l) {
          var t
          return (
            (t = (function (e) {
              let l = {}
              for (let [t, s] of Object.entries(a.parse(e).skill_markdown_by_id ?? {})) {
                let e = n.safeParse(s)
                e.success && (l[t] = e.data)
              }
              return l
            })(e.get(i.M9)?.getDynamicConfig("1852350085").value)),
            t[l]
          )
        },
      },
    )
  },
  t4SC(e, l, t) {
    var s = t("qmMi"),
      i = t("GaA7"),
      n = t("q77y"),
      a = t("OWtl"),
      r = t("rvFo")
    let o = ["recommendedSkills", "list"],
      d = (0, s.vU)(a.u, (e) => ({
        queryKey: [...o, e],
        enabled: i.appServices?.recommendedSkills != null,
        staleTime: r.D.FIVE_MINUTES,
        refetchOnMount: !0,
        queryFn: ({ signal: l }) => (0, n.P)(c().list({ hostId: e, refresh: !1 }), l),
      }))
    function c() {
      let e = i.appServices?.recommendedSkills
      if (null == e) throw Error("Recommended skills are not supported by this host")
      return e
    }
    t.d(
      l,
      {},
      {
        _R: function (e) {
          return (0, n.P)(c().remove(e))
        },
        ev: d,
        kL: function (e) {
          return (0, n.P)(c().install(e))
        },
        q_: function (e) {
          return (0, n.P)(c().list(e))
        },
        w5: o,
      },
    )
  },
  rJVD(e, l, t) {
    t.d(l, { A: () => H })
    var s = t("ABep"),
      i = t("QosV"),
      n = t("iRMi"),
      a = t("slpy"),
      r = t("HaM6"),
      o = t("qmMi"),
      d = t("Qgfj"),
      c = t("Wf1j"),
      u = t("oyxz"),
      m = t("YWcr"),
      h = t("TjgH"),
      f = t("Sm6l"),
      g = t("bqtn"),
      p = t("HOLv"),
      k = t("f38C"),
      x = t("SGsN"),
      j = t("F0xz"),
      y = t("B09n"),
      b = t("wwME"),
      S = t("Q8aV"),
      v = t("poBj"),
      I = t("yGJW"),
      w = t("gBBC"),
      M = t("OWtl"),
      A = t("tSEg"),
      N = t("ndjw"),
      P = t("kfGJ"),
      C = t("MQKw"),
      _ = t("axh8"),
      L = t("n4fT"),
      E = t("hobO"),
      R = t("hbRe"),
      U = t("Umiv"),
      D = t("aepO"),
      F = t("vOoA"),
      O = t("xSOA"),
      z = t("zd8w"),
      T = t("Dgwo"),
      B = t("WFY2"),
      W = t("t4SC")
    let q = (0, d.YK)({
      disableSkill: { id: "skills.card.disableSkill", defaultMessage: "Disable skill" },
      enableSkill: { id: "skills.card.enableSkill", defaultMessage: "Enable skill" },
      enabledStatus: { id: "skills.card.enabledStatus", defaultMessage: "Skill enabled" },
      disabledStatus: { id: "skills.card.disabledStatus", defaultMessage: "Skill disabled" },
      enableButton: { id: "skills.card.enableButton", defaultMessage: "Enable" },
      uninstallSkill: { id: "skills.card.uninstallSkill", defaultMessage: "Uninstall skill" },
    })
    function H(e) {
      let l,
        t,
        d,
        _,
        U,
        D,
        F,
        H,
        K,
        Y,
        J,
        $,
        Z,
        X,
        ee = (0, i.c)(95),
        {
          cardRef: el,
          actionLabel: et,
          cardIcon: es,
          cardIconContainer: ei,
          cardIconContainerVariant: en,
          cardDescriptionPlacement: ea,
          cardTitle: er,
          hostId: eo,
          hideCardActions: ed,
          canPreview: ec,
          isHighlighted: eu,
          presentation: em,
          skill: eh,
          displayName: ef,
          installedStateAction: eg,
          modalIconShape: ep,
          showModalUninstall: ek,
          toggleOnly: ex,
          scopeBadges: ej,
          onSkillsUpdated: ey,
        } = e,
        eb = void 0 === ei || ei,
        eS = void 0 !== ed && ed,
        ev = void 0 === ec || ec,
        eI = void 0 !== eu && eu,
        ew = void 0 === eg ? "check" : eg,
        eM = void 0 === ek || ek,
        eA = void 0 !== ex && ex,
        eN = (0, o.gh)(M.u),
        eP = (0, o.gh)(A.GD),
        { platform: eC } = (0, b.V)(),
        e_ = (0, c.A)(),
        eL = (0, S.p8)(),
        eE = "local" !== (0, P.Qz)(eo).kind,
        eR = ef ?? eh.name
      ee[0] !== eR || ee[1] !== eo || ee[2] !== ey || ee[3] !== eh
        ? ((l = { hostId: eo, skill: eh, displayLabel: eR, onSkillsUpdated: ey }),
          (ee[0] = eR),
          (ee[1] = eo),
          (ee[2] = ey),
          (ee[3] = eh),
          (ee[4] = l))
        : (l = ee[4])
      let {
        enabled: eU,
        isUpdating: eD,
        isRemoving: eF,
        setEnabled: eO,
        uninstall: ez,
      } = (function (e) {
        let l,
          t,
          n,
          a,
          r,
          d,
          m,
          h,
          f,
          g,
          p,
          k = (0, i.c)(41),
          { hostId: j, skill: y, displayLabel: b, onSkillsUpdated: S } = e,
          v = (0, o.gh)(M.u),
          I = (0, c.A)(),
          [w, A] = (0, z.useState)(null)
        ;(k[0] !== S || k[1] !== v
          ? ((l = (e) => {
              ;(S?.(e?.success === !0), v.queryClient.invalidateQueries({ queryKey: W.w5 }))
            }),
            (k[0] = S),
            (k[1] = v),
            (k[2] = l))
          : (l = k[2]),
          k[3] !== b || k[4] !== I || k[5] !== v
            ? ((t = (e) => {
                let { success: l } = e
                l
                  ? v
                      .get(x.Id)
                      .success(
                        (0, s.jsx)(u.A, {
                          id: "skills.card.removeSuccess",
                          defaultMessage: "{skillName} skill uninstalled",
                          values: { skillName: (0, s.jsx)("span", { className: "font-medium", children: b }) },
                        }),
                      )
                  : v
                      .get(x.Id)
                      .danger(
                        I.formatMessage({
                          id: "skills.card.removeFailed",
                          defaultMessage: "Failed to uninstall skill",
                        }),
                        { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                      )
              }),
              (k[3] = b),
              (k[4] = I),
              (k[5] = v),
              (k[6] = t))
            : (t = k[6]),
          k[7] !== I || k[8] !== v
            ? ((n = () => {
                v.get(x.Id).danger(
                  I.formatMessage({ id: "skills.card.removeFailed", defaultMessage: "Failed to uninstall skill" }),
                  { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                )
              }),
              (k[7] = I),
              (k[8] = v),
              (k[9] = n))
            : (n = k[9]),
          k[10] !== l || k[11] !== t || k[12] !== n
            ? ((a = { mutationFn: W._R, networkMode: "always", onSettled: l, onSuccess: t, onError: n }),
              (k[10] = l),
              (k[11] = t),
              (k[12] = n),
              (k[13] = a))
            : (a = k[13]))
        let N = (0, O.n)(a)
        ;(k[14] !== j || k[15] !== v || k[16] !== y
          ? ((r = (e) => {
              let { enabled: l } = e
              return (0, T.V)(v, j).sendRequest(
                "skills/config/write",
                y.name.includes(":") ? { name: y.name, enabled: l } : { path: y.path, enabled: l },
              )
            }),
            (k[14] = j),
            (k[15] = v),
            (k[16] = y),
            (k[17] = r))
          : (r = k[17]),
          k[18] !== b || k[19] !== S || k[20] !== v
            ? ((d = (e, l) => {
                let { enabled: t, restoreKeyboardFocus: i } = l
                S?.(!0, i)
                let n = t
                  ? (0, s.jsx)(u.A, {
                      id: "skills.card.enableSuccess",
                      defaultMessage: "{skillName} skill enabled",
                      values: { skillName: (0, s.jsx)("span", { className: "font-medium", children: b }) },
                    })
                  : (0, s.jsx)(u.A, {
                      id: "skills.card.disableSuccess",
                      defaultMessage: "{skillName} skill disabled",
                      values: { skillName: (0, s.jsx)("span", { className: "font-medium", children: b }) },
                    })
                v.get(x.Id).success(n)
              }),
              (k[18] = b),
              (k[19] = S),
              (k[20] = v),
              (k[21] = d))
            : (d = k[21]),
          k[22] !== I || k[23] !== v
            ? ((m = (e) => {
                ;(A(null),
                  B.v.error("Failed to update skill enabled state", { safe: {}, sensitive: { error: e } }),
                  v
                    .get(x.Id)
                    .danger(
                      I.formatMessage({
                        id: "skills.card.toggleEnabledError",
                        defaultMessage: "Failed to update skill",
                      }),
                      { errorAnalytics: { toastId: "skills.card.toggleEnabledError" } },
                    ))
              }),
              (k[22] = I),
              (k[23] = v),
              (k[24] = m))
            : (m = k[24]),
          k[25] !== r || k[26] !== d || k[27] !== m
            ? ((h = { mutationFn: r, onSuccess: d, onError: m }), (k[25] = r), (k[26] = d), (k[27] = m), (k[28] = h))
            : (h = k[28]))
        let P = (0, O.n)(h),
          C = null != w && (P.isPending || y.enabled !== w) ? w : y.enabled,
          _ = N.isPending && N.variables?.skillPath === y.path
        return (
          k[29] !== P
            ? ((f = (e, l) => {
                ;(A(e), P.mutate({ enabled: e, restoreKeyboardFocus: l }))
              }),
              (k[29] = P),
              (k[30] = f))
            : (f = k[30]),
          k[31] !== j || k[32] !== N || k[33] !== y
            ? ((g = () => {
                N.mutate({ hostId: j, skillPath: y.path })
              }),
              (k[31] = j),
              (k[32] = N),
              (k[33] = y),
              (k[34] = g))
            : (g = k[34]),
          k[35] !== C || k[36] !== f || k[37] !== g || k[38] !== _ || k[39] !== P.isPending
            ? ((p = { enabled: C, isUpdating: P.isPending, isRemoving: _, setEnabled: f, uninstall: g }),
              (k[35] = C),
              (k[36] = f),
              (k[37] = g),
              (k[38] = _),
              (k[39] = P.isPending),
              (k[40] = p))
            : (p = k[40]),
          p
        )
      })(l)
      ee[5] !== eh ? ((t = (0, C.a)(eh)), (ee[5] = eh), (ee[6] = t)) : (t = ee[6])
      let eT = t
      ;(ee[7] !== eU
        ? ((d = eU
            ? null
            : (0, s.jsx)(h.E, {
                variant: "outline",
                children: (0, s.jsx)(u.A, { id: "skills.card.disabledBadge", defaultMessage: "Disabled" }),
              })),
          (ee[7] = eU),
          (ee[8] = d))
        : (d = ee[8]),
        ee[9] !== eR || ee[10] !== d
          ? ((_ = (0, s.jsx)(E.Rv, { kind: "Skill", title: eR, badge: d })), (ee[9] = eR), (ee[10] = d), (ee[11] = _))
          : (_ = ee[11]))
      let eB = _
      ee[12] !== es || ee[13] !== eh
        ? ((U = void 0 === es ? (0, s.jsx)(G, { skill: eh, size: eh.interface?.iconLarge ? "large" : "small" }) : es),
          (ee[12] = es),
          (ee[13] = eh),
          (ee[14] = U))
        : (U = ee[14])
      let eW = U,
        eq = !eE && "admin" !== eh.scope,
        eH = !eU
      ee[15] !== eo || ee[16] !== eP || ee[17] !== eh.path
        ? ((D = () => {
            ;(0, y.openWorkspaceFile)({ scope: eP, path: eh.path, cwd: null, hostId: eo, openInSidePanel: !0 })
          }),
          (ee[15] = eo),
          (ee[16] = eP),
          (ee[17] = eh.path),
          (ee[18] = D))
        : (D = ee[18])
      let eQ = D
      ee[19] !== eN || ee[20] !== eh || ee[21] !== eL
        ? ((F = () => {
            ;((0, I.yy)(eN, n.CodexSkillTryClicked, {}),
              eL({
                activeProject: (0, w.QO)(eN.get(N.Gt)),
                prefillPrompt: (0, R.Od)(eh),
                prefillPromptOnlyIfEmpty: !0,
                skillMentionForExistingDraft: (0, m.qP)(eh),
                startInSidebar: !0,
              }))
          }),
          (ee[19] = eN),
          (ee[20] = eh),
          (ee[21] = eL),
          (ee[22] = F))
        : (F = ee[22])
      let eV = F,
        eG = eU ? q.disableSkill : q.enableSkill
      ee[23] !== eU ||
      ee[24] !== eQ ||
      ee[25] !== eS ||
      ee[26] !== eo ||
      ee[27] !== e_ ||
      ee[28] !== eE ||
      ee[29] !== eD ||
      ee[30] !== eG ||
      ee[31] !== eC ||
      ee[32] !== eP ||
      ee[33] !== eO ||
      ee[34] !== eh.path
        ? ((H = (e) => {
            let { closePreview: l } = e
            return (0, s.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                !eS &&
                  (0, s.jsx)(a.m, {
                    content: (0, s.jsx)(u.A, { ...eG }),
                    children: (0, s.jsx)("div", {
                      className: "flex items-center",
                      children: (0, s.jsx)(j.l, {
                        className: "h-token-button-composer",
                        checked: eU,
                        disabled: eD,
                        ariaLabel: e_.formatMessage(eG),
                        onChange: eO,
                      }),
                    }),
                  }),
                (0, s.jsxs)(g.Ab, {
                  align: "end",
                  contentWidth: "icon",
                  triggerButton: (0, s.jsx)(k.p, {
                    pill: !0,
                    label: e_.formatMessage({ id: "skills.card.moreActions", defaultMessage: "More actions" }),
                  }),
                  children: [
                    (0, s.jsx)(g.ms.Item, {
                      disabled: eE,
                      onSelect: () => {
                        ;(eQ(), l())
                      },
                      children: (0, s.jsx)(u.A, { id: "skills.card.open", defaultMessage: "Open" }),
                    }),
                    (0, s.jsxs)(g.ms.Item, {
                      disabled: eE,
                      onSelect: () => {
                        ;(0, y.openWorkspaceFile)({
                          scope: eP,
                          path: eh.path,
                          cwd: null,
                          hostId: eo,
                          target: "fileManager",
                        })
                      },
                      children: [
                        "macOS" === eC &&
                          (0, s.jsx)(u.A, { id: "skills.card.revealInFinder", defaultMessage: "Reveal in Finder" }),
                        "windows" === eC &&
                          (0, s.jsx)(u.A, {
                            id: "skills.card.revealInFileExplorer",
                            defaultMessage: "Reveal in File Explorer",
                          }),
                        "linux" === eC &&
                          (0, s.jsx)(u.A, {
                            id: "skills.card.revealInFileManager",
                            defaultMessage: "Reveal in File Manager",
                          }),
                      ],
                    }),
                    (0, s.jsx)(V, { hostId: eo, path: eh.path }),
                  ],
                }),
              ],
            })
          }),
          (ee[23] = eU),
          (ee[24] = eQ),
          (ee[25] = eS),
          (ee[26] = eo),
          (ee[27] = e_),
          (ee[28] = eE),
          (ee[29] = eD),
          (ee[30] = eG),
          (ee[31] = eC),
          (ee[32] = eP),
          (ee[33] = eO),
          (ee[34] = eh.path),
          (ee[35] = H))
        : (H = ee[35])
      let eK = H,
        eY = eU ? q.disableSkill : q.enableSkill
      ee[36] !== eU || ee[37] !== eO
        ? ((K = eU
            ? (e, l) => {
                ;(e.stopPropagation(), eO(!1, l))
              }
            : void 0),
          (ee[36] = eU),
          (ee[37] = eO),
          (ee[38] = K))
        : (K = ee[38])
      let eJ = K
      ee[39] !== eH || ee[40] !== eO
        ? ((Y = eH ? () => eO(!0) : void 0), (ee[39] = eH), (ee[40] = eO), (ee[41] = Y))
        : (Y = ee[41])
      let e$ = Y,
        eZ = eq ? ez : void 0
      ee[42] !== et ||
      ee[43] !== ev ||
      ee[44] !== eU ||
      ee[45] !== eJ ||
      ee[46] !== e$ ||
      ee[47] !== eQ ||
      ee[48] !== eZ ||
      ee[49] !== eS ||
      ee[50] !== ew ||
      ee[51] !== e_ ||
      ee[52] !== eE ||
      ee[53] !== eF ||
      ee[54] !== eD ||
      ee[55] !== em ||
      ee[56] !== eO ||
      ee[57] !== eY ||
      ee[58] !== eA
        ? ((J = eS
            ? void 0
            : "toggle" === ew
              ? (e) => {
                  let { ignoreNextPreview: l, openPreview: t } = e
                  return (0, s.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      et ? (0, s.jsx)("div", { className: "text-sm text-secondary", children: et }) : null,
                      eA || !ev
                        ? null
                        : (0, s.jsx)("div", {
                            className:
                              "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
                            children: (0, s.jsxs)(g.Ab, {
                              align: "end",
                              contentWidth: "icon",
                              triggerButton: (0, s.jsx)(k.p, {
                                pill: !0,
                                label: e_.formatMessage({
                                  id: "skills.card.moreActions",
                                  defaultMessage: "More actions",
                                }),
                              }),
                              children: [
                                (0, s.jsx)(g.ms.Item, {
                                  disabled: eE,
                                  onSelect: () => {
                                    ;(l(), eQ())
                                  },
                                  children: (0, s.jsx)(u.A, { id: "skills.card.open", defaultMessage: "Open" }),
                                }),
                                (0, s.jsx)(g.ms.Item, {
                                  onSelect: t,
                                  children: (0, s.jsx)(u.A, { id: "skills.card.details", defaultMessage: "Details" }),
                                }),
                              ],
                            }),
                          }),
                      (0, s.jsx)(a.m, {
                        content: (0, s.jsx)(u.A, { ...eY }),
                        children: (0, s.jsx)(j.l, {
                          checked: eU,
                          disabled: eD,
                          size: eA && "settings" !== em ? "sm" : "default",
                          ariaLabel: e_.formatMessage(eY),
                          onClick: Q,
                          onChange: eO,
                        }),
                      }),
                    ],
                  })
                }
              : "menu" === ew
                ? (0, s.jsx)(v.I, {
                    disableMenuLabel: (0, s.jsx)(u.A, { id: "skills.card.disableMenuItem", defaultMessage: "Disable" }),
                    enableButtonLabel: (0, s.jsx)(u.A, { ...q.enableButton }),
                    enabledStatusAriaLabel: e_.formatMessage(q.enabledStatus),
                    isEnabled: eU,
                    isUninstalling: eF,
                    isUpdating: eD,
                    menuLabel: e_.formatMessage({ id: "skills.card.actionsMenu", defaultMessage: "Skill actions" }),
                    onDisable: eJ,
                    onEnable: e$,
                    onUninstall: eZ,
                    uninstallMenuLabel: (0, s.jsx)(u.A, {
                      id: "skills.card.uninstallMenuItem",
                      defaultMessage: "Uninstall",
                    }),
                  })
                : (0, s.jsx)(v.I, {
                    enabledStatusAriaLabel: e_.formatMessage(q.enabledStatus),
                    isEnabled: eU,
                    isUninstalling: eF,
                    isUpdating: eD,
                  })),
          (ee[42] = et),
          (ee[43] = ev),
          (ee[44] = eU),
          (ee[45] = eJ),
          (ee[46] = e$),
          (ee[47] = eQ),
          (ee[48] = eZ),
          (ee[49] = eS),
          (ee[50] = ew),
          (ee[51] = e_),
          (ee[52] = eE),
          (ee[53] = eF),
          (ee[54] = eD),
          (ee[55] = em),
          (ee[56] = eO),
          (ee[57] = eY),
          (ee[58] = eA),
          (ee[59] = J))
        : (J = ee[59])
      let eX = J,
        e0 = er ?? eR,
        e1 = "settings" === em ? eh.description : eT
      return (
        ee[60] !== eR || ee[61] !== eo || ee[62] !== em || ee[63] !== eh.path
          ? (($ = (e) => {
              let { isOpen: l } = e
              return (0, s.jsx)(E.FG, {
                hostId: eo,
                isOpen: l,
                skillPath: eh.path,
                titleText: eR,
                presentation: "settings" === em ? "contents" : "preview",
              })
            }),
            (ee[60] = eR),
            (ee[61] = eo),
            (ee[62] = em),
            (ee[63] = eh.path),
            (ee[64] = $))
          : ($ = ee[64]),
        ee[65] !== eq ||
        ee[66] !== eU ||
        ee[67] !== eV ||
        ee[68] !== eF ||
        ee[69] !== eD ||
        ee[70] !== eM ||
        ee[71] !== ez
          ? ((Z = (e) => {
              let { closePreview: l } = e
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  eq && eM
                    ? (0, s.jsx)(f.$, {
                        className: "me-auto",
                        radius: "full",
                        color: "danger",
                        size: "toolbar",
                        disabled: eF,
                        onClick: () => {
                          ;(ez(), l())
                        },
                        children: (0, s.jsx)(u.A, { id: "skills.card.uninstall", defaultMessage: "Uninstall" }),
                      })
                    : null,
                  (0, s.jsxs)(f.$, {
                    radius: "full",
                    color: "primary",
                    size: "toolbar",
                    disabled: !eU || eD,
                    onClick: eV,
                    children: [
                      (0, s.jsx)(p.I, { "aria-hidden": !1, asset: r.Z }),
                      (0, s.jsx)(u.A, { id: "skills.card.try", defaultMessage: "Try now" }),
                    ],
                  }),
                ],
              })
            }),
            (ee[65] = eq),
            (ee[66] = eU),
            (ee[67] = eV),
            (ee[68] = eF),
            (ee[69] = eD),
            (ee[70] = eM),
            (ee[71] = ez),
            (ee[72] = Z))
          : (Z = ee[72]),
        ee[73] !== eX ||
        ee[74] !== ev ||
        ee[75] !== ea ||
        ee[76] !== eb ||
        ee[77] !== en ||
        ee[78] !== el ||
        ee[79] !== eT ||
        ee[80] !== eR ||
        ee[81] !== eH ||
        ee[82] !== eI ||
        ee[83] !== eK ||
        ee[84] !== ep ||
        ee[85] !== em ||
        ee[86] !== ej ||
        ee[87] !== eh.name ||
        ee[88] !== eW ||
        ee[89] !== e0 ||
        ee[90] !== e1 ||
        ee[91] !== $ ||
        ee[92] !== Z ||
        ee[93] !== eB
          ? ((X = (0, s.jsx)(L.C, {
              cardRef: el,
              canPreview: ev,
              cardIcon: eW,
              cardIconContainer: eb,
              cardIconContainerVariant: en,
              cardTitle: e0,
              cardDescription: eT,
              cardDescriptionPlacement: ea,
              cardBadges: ej,
              cardActions: eX,
              isHighlighted: eI,
              isContentDimmed: eH,
              presentation: em,
              modalIconShape: ep,
              modalTitle: eB,
              modalTitleText: eR,
              modalName: eh.name,
              modalHeaderActions: eK,
              modalDescription: e1,
              modalBody: $,
              modalFooter: Z,
            })),
            (ee[73] = eX),
            (ee[74] = ev),
            (ee[75] = ea),
            (ee[76] = eb),
            (ee[77] = en),
            (ee[78] = el),
            (ee[79] = eT),
            (ee[80] = eR),
            (ee[81] = eH),
            (ee[82] = eI),
            (ee[83] = eK),
            (ee[84] = ep),
            (ee[85] = em),
            (ee[86] = ej),
            (ee[87] = eh.name),
            (ee[88] = eW),
            (ee[89] = e0),
            (ee[90] = e1),
            (ee[91] = $),
            (ee[92] = Z),
            (ee[93] = eB),
            (ee[94] = X))
          : (X = ee[94]),
        X
      )
    }
    function Q(e) {
      e.stopPropagation()
    }
    function V(e) {
      let l,
        t,
        n,
        a,
        r = (0, i.c)(10),
        { hostId: d, path: c } = e,
        m = (0, o.gh)(M.u)
      r[0] !== d || r[1] !== c ? ((l = { hostId: d, path: c }), (r[0] = d), (r[1] = c), (r[2] = l)) : (l = r[2])
      let { contents: h, error: f } = (0, U.q)(l),
        p = void 0 === h || null != f
      return (
        r[3] !== h || r[4] !== m
          ? ((t = () => {
              void 0 !== h &&
                (0, D.lW)(h).then((e) => {
                  e &&
                    m
                      .get(x.Id)
                      .success(
                        (0, s.jsx)(u.A, { id: "skills.card.copiedSkillMarkdown", defaultMessage: "Copied SKILL.md" }),
                      )
                })
            }),
            (r[3] = h),
            (r[4] = m),
            (r[5] = t))
          : (t = r[5]),
        r[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(u.A, { id: "skills.card.copySkillMarkdown", defaultMessage: "Copy Markdown" })),
            (r[6] = n))
          : (n = r[6]),
        r[7] !== p || r[8] !== t
          ? ((a = (0, s.jsx)(g.ms.Item, { disabled: p, onSelect: t, children: n })), (r[7] = p), (r[8] = t), (r[9] = a))
          : (a = r[9]),
        a
      )
    }
    function G(e) {
      let l,
        t,
        n,
        a,
        r = (0, i.c)(12),
        { skill: o, size: d } = e,
        c = void 0 === d ? "small" : d,
        u = !!o.interface?.iconLarge
      if (("small" === c ? (l = 24) : u || (l = 20), r[0] !== l || r[1] !== u || r[2] !== c || r[3] !== o)) {
        let e,
          s = (0, _.h)(o, { size: c, fallbackSize: l, fallbackClassName: "text-secondary" })
        r[6] !== u || r[7] !== c
          ? ((e = (0, F.a)({ size: c, hasLargeIcon: u, largeFallbackClassName: "h-5 w-5" })),
            (r[6] = u),
            (r[7] = c),
            (r[8] = e))
          : (e = r[8])
        let i = `${e} text-secondary`
        ;((t = s),
          (n = (0, _.d8)(s, i, "text-secondary")),
          (r[0] = l),
          (r[1] = u),
          (r[2] = c),
          (r[3] = o),
          (r[4] = t),
          (r[5] = n))
      } else ((t = r[4]), (n = r[5]))
      return (
        r[9] !== t || r[10] !== n ? ((a = (0, s.jsx)(t, { ...n })), (r[9] = t), (r[10] = n), (r[11] = a)) : (a = r[11]),
        a
      )
    }
  },
  n4fT(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("on57"),
      a = t("zd8w"),
      r = t("bVeK"),
      o = t("Jqpj"),
      d = t("AWNZ"),
      c = t("TZ2Y"),
      u = t("hobO"),
      m = t("bIvi")
    t.d(
      l,
      {},
      {
        C: function (e) {
          let l,
            t,
            h,
            f,
            g,
            p,
            k,
            x,
            j,
            y,
            b,
            S,
            v = (0, i.c)(64),
            {
              cardRef: I,
              cardIcon: w,
              cardIconContainer: M,
              cardIconContainerVariant: A,
              cardTitle: N,
              cardDescription: P,
              cardDescriptionPlacement: C,
              cardBadges: _,
              cardActions: L,
              canPreview: E,
              isHighlighted: R,
              isContentDimmed: U,
              presentation: D,
              modalIconShape: F,
              modalTitle: O,
              modalTitleText: z,
              modalName: T,
              modalHeaderActions: B,
              modalDescription: W,
              modalBody: q,
              modalFooter: H,
            } = e,
            Q = void 0 === E || E,
            [V, G] = (0, a.useState)(!1),
            K = (0, a.useRef)(!1)
          v[0] !== Q
            ? ((l = () => {
                if (Q) {
                  if (K.current) {
                    K.current = !1
                    return
                  }
                  G(!0)
                }
              }),
              (v[0] = Q),
              (v[1] = l))
            : (l = v[1])
          let Y = (0, m.K)(l)
          v[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                K.current = !0
              }),
              (v[2] = t))
            : (t = v[2])
          let J = (0, m.K)(t)
          v[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = () => {
                G(!1)
              }),
              (v[3] = h))
            : (h = v[3])
          let $ = h,
            Z = w ?? null,
            X = Q && V
          ;(v[4] !== B
            ? ((f = "function" == typeof B ? B({ closePreview: $ }) : B), (v[4] = B), (v[5] = f))
            : (f = v[5]),
            v[6] !== H
              ? ((g = "function" == typeof H ? H({ closePreview: $ }) : H), (v[6] = H), (v[7] = g))
              : (g = v[7]),
            v[8] !== Q || v[9] !== V || v[10] !== q
              ? ((p = "function" == typeof q ? q({ isOpen: Q && V }) : q),
                (v[8] = Q),
                (v[9] = V),
                (v[10] = q),
                (v[11] = p))
              : (p = v[11]),
            v[12] !== W || v[13] !== O || v[14] !== Z || v[15] !== X || v[16] !== f || v[17] !== g || v[18] !== p
              ? ((k = {
                  icon: Z,
                  title: O,
                  description: W,
                  isOpen: X,
                  onOpenChange: G,
                  headerActions: f,
                  footer: g,
                  children: p,
                }),
                (v[12] = W),
                (v[13] = O),
                (v[14] = Z),
                (v[15] = X),
                (v[16] = f),
                (v[17] = g),
                (v[18] = p),
                (v[19] = k))
              : (k = v[19]))
          let ee = k
          return (
            v[20] !== Q || v[21] !== L || v[22] !== P || v[23] !== N || v[24] !== J || v[25] !== Y || v[26] !== D
              ? ((x =
                  "settings" !== D || Q
                    ? null
                    : (0, s.jsx)(d.ic, {
                        label: N,
                        description: P,
                        control: "function" == typeof L ? L({ ignoreNextPreview: J, openPreview: Y }) : L,
                      })),
                (v[20] = Q),
                (v[21] = L),
                (v[22] = P),
                (v[23] = N),
                (v[24] = J),
                (v[25] = Y),
                (v[26] = D),
                (v[27] = x))
              : (x = v[27]),
            v[28] !== Q || v[29] !== L || v[30] !== P || v[31] !== N || v[32] !== J || v[33] !== Y || v[34] !== D
              ? ((j =
                  "settings" === D && Q
                    ? (0, s.jsx)(d.kG, {
                        edgeRounding: "surface",
                        label: N,
                        description: P,
                        trailing: (0, s.jsx)(r.uM3, {}),
                        actionsPlacement: "before-trailing",
                        actions: "function" == typeof L ? L({ ignoreNextPreview: J, openPreview: Y }) : L,
                        onClick: Y,
                      })
                    : null),
                (v[28] = Q),
                (v[29] = L),
                (v[30] = P),
                (v[31] = N),
                (v[32] = J),
                (v[33] = Y),
                (v[34] = D),
                (v[35] = j))
              : (j = v[35]),
            v[36] !== Q ||
            v[37] !== L ||
            v[38] !== _ ||
            v[39] !== P ||
            v[40] !== C ||
            v[41] !== w ||
            v[42] !== M ||
            v[43] !== A ||
            v[44] !== I ||
            v[45] !== N ||
            v[46] !== J ||
            v[47] !== U ||
            v[48] !== R ||
            v[49] !== Y ||
            v[50] !== D
              ? ((y =
                  "settings" !== D
                    ? (0, s.jsx)(o.D, {
                        ref: I,
                        className: (0, n.A)(
                          "justify-center text-base select-none",
                          "card" === D ? "p-4" : "border-none",
                          null != L && "group",
                        ),
                        contentClassName: (0, n.A)(U && "opacity-60"),
                        icon: w,
                        iconContainer: M,
                        iconContainerVariant: A,
                        title: N,
                        description: P,
                        descriptionClassName: "line-clamp-1 text-codex-description",
                        descriptionPlacement: C,
                        badges: _,
                        isHighlighted: R,
                        presentation: D,
                        actions: "function" == typeof L ? L({ ignoreNextPreview: J, openPreview: Y }) : L,
                        actionsPlacement: "center",
                        onClick: Q ? Y : void 0,
                      })
                    : null),
                (v[36] = Q),
                (v[37] = L),
                (v[38] = _),
                (v[39] = P),
                (v[40] = C),
                (v[41] = w),
                (v[42] = M),
                (v[43] = A),
                (v[44] = I),
                (v[45] = N),
                (v[46] = J),
                (v[47] = U),
                (v[48] = R),
                (v[49] = Y),
                (v[50] = D),
                (v[51] = y))
              : (y = v[51]),
            v[52] !== F || v[53] !== T || v[54] !== ee || v[55] !== O || v[56] !== z || v[57] !== D
              ? ((b =
                  "settings" === D
                    ? (0, s.jsx)(c.P, { ...ee, name: T, title: z ?? O })
                    : (0, s.jsx)(u.d5, { ...ee, iconShape: F, titleText: z })),
                (v[52] = F),
                (v[53] = T),
                (v[54] = ee),
                (v[55] = O),
                (v[56] = z),
                (v[57] = D),
                (v[58] = b))
              : (b = v[58]),
            v[59] !== x || v[60] !== j || v[61] !== y || v[62] !== b
              ? ((S = (0, s.jsxs)(s.Fragment, { children: [x, j, y, b] })),
                (v[59] = x),
                (v[60] = j),
                (v[61] = y),
                (v[62] = b),
                (v[63] = S))
              : (S = v[63]),
            S
          )
        },
      },
    )
  },
  no0e(e, l, t) {
    t.d(l, { SkillsPage: () => eu })
    var s = t("ABep"),
      i = t("QosV"),
      n = t("SIRb"),
      a = t("iRMi"),
      r = t("RVZl"),
      o = t("ozCc"),
      d = t("qmMi"),
      c = t("zd8w"),
      u = t("Wf1j"),
      m = t("oyxz"),
      h = t("Ywss"),
      f = t("oYYx"),
      g = t("OAko"),
      p = t("aTcy"),
      k = t("Sm6l"),
      x = t("HOLv"),
      j = t("FrrB"),
      y = t("okCa"),
      b = t("Q8aV"),
      S = t("v4LA"),
      v = t("yGJW"),
      I = t("kx7U"),
      w = t("OWtl"),
      M = t("bXA4"),
      A = t("pO0d"),
      N = t("IXY8"),
      P = t("fHlE"),
      C = t("odCE"),
      _ = t("kfGJ"),
      L = t("khOd"),
      E = t("kEV3"),
      R = t("MQKw"),
      U = t("xAYF"),
      D = t("f22a"),
      F = t("oom3"),
      O = t("Ekos"),
      z = t("rJVD"),
      T = t("hbRe"),
      B = t("ZGaK"),
      W = t("XvU9"),
      q = t("NVRI"),
      H = t("kpIY")
    function Q() {}
    var V = t("bq7F"),
      G = t("rQvh"),
      K = t("NbOT"),
      Y = t("on57"),
      J = t("PkPj"),
      $ = t("GKsW"),
      Z = t("pasN"),
      X = t("funJ")
    function ee(e) {
      let l,
        t,
        n,
        a,
        r,
        o,
        f,
        g,
        p,
        k,
        x,
        j,
        y,
        b,
        S,
        v,
        I,
        M = (0, i.c)(37),
        { hostId: A } = e,
        N = (0, d.gh)(w.u),
        P = (0, d.Ul)(L.GB),
        C = (0, u.A)(),
        R = (0, h.zy)(),
        O = (0, d.Ul)(Z.l)
      M[0] !== R.state ? ((l = (0, F.qC)(R.state)), (M[0] = R.state), (M[1] = l)) : (l = M[1])
      let z = l
      M[2] !== R.search || M[3] !== z
        ? ((t = (0, F.a5)(R.search) ?? z.initialSearchQuery ?? ""), (M[2] = R.search), (M[3] = z), (M[4] = t))
        : (t = M[4])
      let [T, q] = (0, c.useState)(t),
        [H, Q] = (0, c.useState)(0),
        [K, ee] = (0, c.useState)(null),
        en = (0, c.useRef)(null),
        ea = (0, c.useRef)(null),
        er = A === _.fI
      M[5] !== er ? ((n = { enabled: er }), (M[5] = er), (M[6] = n)) : (n = M[6])
      let eo = (0, d.Ul)(V.$g, n),
        {
          forceReloadSkills: ed,
          installedSkillMatchKeys: ec,
          isLoading: eu,
          markSkillsUpdated: em,
          standaloneInstalledSkills: eh,
          workspaceRoots: ef,
        } = (0, W.Cy)(A),
        { canInstallRecommendedSkills: eg, defaultRecommendedRepoRoot: ep } = (0, W.p1)(A),
        { errorMessage: ek, isLoading: ex, repoRoot: ej, skills: ey } = (0, W.Jc)(ep, A, eg)
      ;(M[7] !== R.key || M[8] !== N
        ? ((a = () => {
            N.set(U.yb, R.key, !0)
          }),
          (M[7] = R.key),
          (M[8] = N),
          (M[9] = a))
        : (a = M[9]),
        M[10] !== ed || M[11] !== A || M[12] !== a
          ? ((r = { forceReloadSkills: ed, hostId: A, onInstalled: a }),
            (M[10] = ed),
            (M[11] = A),
            (M[12] = a),
            (M[13] = r))
          : (r = M[13]))
      let {
          clearInstalledRecommendedSkills: eb,
          installRecommendedSkill: eS,
          installedRecommendedSkillIds: ev,
          installingSkillId: eI,
        } = (0, W.zS)(r),
        ew = (0, F.NP)(C, "skills"),
        eM = T.trim().toLowerCase(),
        eA = eM.length > 0,
        eN = (0, D.sq)({ skills: eh, query: eM }),
        eP = (0, D.TI)({ query: eM, suggestions: A === _.fI ? eo : null }),
        eC = (0, D.Pg)({ skills: ey, query: eM }),
        e_ = (0, D.NZ)(eC),
        eL = (0, D.EH)({ installedRecommendedSkillIds: ev, installedSkillMatchKeys: ec, skills: eA ? eC : e_ }),
        eE = (0, D.Qd)({ installedSkills: eN, recommendedSkills: eL }),
        eR = (function ({ intl: e, roots: l, skillEntries: t }) {
          let s = new Map()
          for (let i of t) {
            let t = (0, E.IG)({ skill: i.skill, roots: l, intl: e }),
              n = s.get(t)
            if (null == n) {
              s.set(t, {
                id: `skills-installed-${t
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`,
                title: t,
                skillEntries: [i],
              })
              continue
            }
            n.skillEntries.push(i)
          }
          return Array.from(s.values())
        })({ intl: C, roots: ef, skillEntries: eE }),
        eU = eA ? [...eP.map(ei), ...eE.map(es), ...eL.map(et)] : [],
        eD = 0 === eU.length ? null : Math.min(H, eU.length - 1),
        eF = null == eD ? null : (eU[eD] ?? null),
        eO = eu || eR.length > 0 || eE.length > 0,
        ez = ex || null != ek || eL.length > 0,
        eT = ew.sections.at(-1) ?? null,
        eB = [...eR.map(el), ...(ez && null != eT ? [eT] : [])],
        eW = eB.some((e) => e.id === K) ? K : (eB[0]?.id ?? null),
        eq = eO ? (ew.sections[0] ?? null) : null
      M[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (e) => {
            ;(q(e), Q(0))
          }),
          (M[14] = o))
        : (o = M[14])
      let eH = o,
        eQ = () => {
          window.requestAnimationFrame(() => {
            ea.current?.querySelector("[data-search-result-active='true']")?.scrollIntoView({ block: "nearest" })
          })
        }
      M[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = () => {
            en.current?.focus()
          }),
          (M[15] = f))
        : (f = M[15])
      let eV = (0, c.useEffectEvent)(f)
      ;(M[16] !== eV
        ? ((g = () => {
            let e = (e) => {
              ;(e.metaKey || e.ctrlKey) &&
                "f" === e.key.toLowerCase() &&
                !(function (e) {
                  if (!(e instanceof HTMLElement)) return !1
                  if (e.isContentEditable) return !0
                  let l = e.tagName.toLowerCase()
                  return (
                    "input" === l || "textarea" === l || "select" === l || null != e.closest("[contenteditable='true']")
                  )
                })(e.target) &&
                (e.preventDefault(), eV())
            }
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e)
              }
            )
          }),
          (M[16] = eV),
          (M[17] = g))
        : (g = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel") ? ((p = []), (M[18] = p)) : (p = M[18]),
        (0, c.useEffect)(g, p),
        M[19] !== C
          ? ((k = C.formatMessage({ id: "skills.appsPage.browseIntro.skillsTitle", defaultMessage: "Skills" })),
            (M[19] = C),
            (M[20] = k))
          : (k = M[20]),
        M[21] !== k ? ((x = (0, s.jsx)($.Q, { title: k })), (M[21] = k), (M[22] = x)) : (x = M[22]),
        M[23] !== P
          ? ((j = P ? (0, s.jsx)(G.E, { browseTab: "skills", inline: !0 }) : void 0), (M[23] = P), (M[24] = j))
          : (j = M[24]),
        M[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, s.jsx)(m.A, { id: "skills.appsPage.browseIntro.skillsTitle", defaultMessage: "Skills" })),
            (M[25] = y))
          : (y = M[25]),
        M[26] !== O
          ? ((b =
              "codex" === O
                ? (0, s.jsx)(m.A, {
                    id: "skills.appsPage.browseIntro.codexSkillsSubtitle",
                    defaultMessage: "Extend Codex with task-specific skills",
                  })
                : (0, s.jsx)(m.A, {
                    id: "skills.appsPage.browseIntro.skillsSubtitle",
                    defaultMessage: "Extend ChatGPT with task-specific skills",
                  })),
            (M[26] = O),
            (M[27] = b))
          : (b = M[27]))
      let eG = !eA && "flex-1"
      M[28] !== eG ? ((S = (0, Y.A)("flex min-h-0 flex-col gap-8", eG)), (M[28] = eG), (M[29] = S)) : (S = M[29])
      let eK =
        !eA || eU.length > 0
          ? (0, s.jsx)(X.Z, {
              canInstallRecommendedSkills: eg,
              errorMessage: ek,
              hostId: A,
              highlightedInstalledSkillPath: eF?.startsWith("installed-skill:") ? eF.slice(16) : null,
              highlightedRecommendedSkillId: eF?.startsWith("recommended-skill:") ? eF.slice(18) : null,
              highlightedSuggestedSkillId: eF?.startsWith("suggested-skill:") ? eF.slice(16) : null,
              installedSkillGroups: eR,
              installedStateAction: "check",
              installedSection: eq,
              installedRecommendedSkillIds: ev,
              installedSkills: eE,
              installedSkillsForRecommendedActions: eh,
              installingSkillId: eI,
              isLoadingInstalledSkills: eu,
              isLoadingRecommendedSkills: ex,
              onInstallRecommendedSkill: eS,
              onInstalledRecommendedSkillUpdated: () => {
                ;(eb(), em())
              },
              onSelectSection: ee,
              onSkillsUpdated: em,
              recommendedRepoRoot: ej,
              recommendedSection: ez ? eT : null,
              recommendedSkills: eL,
              roots: ef,
              selectedSectionId: eW,
              suggestedSkills: eP,
              searchResultsTitle: eA
                ? (0, s.jsx)(m.A, { id: "skills.appsPage.skillsFilter.all", defaultMessage: "Skills" })
                : void 0,
            })
          : null
      return (
        M[30] !== eA || M[31] !== eU
          ? ((v =
              eA && 0 === eU.length
                ? (0, s.jsx)("div", {
                    className: "text-base text-secondary",
                    children: (0, s.jsx)(m.A, {
                      id: "skills.appsPage.empty.skills",
                      defaultMessage: "No skills found",
                    }),
                  })
                : null),
            (M[30] = eA),
            (M[31] = eU),
            (M[32] = v))
          : (v = M[32]),
        M[33] !== S || M[34] !== eK || M[35] !== v
          ? ((I = (0, s.jsxs)("div", { className: S, children: [eK, v] })),
            (M[33] = S),
            (M[34] = eK),
            (M[35] = v),
            (M[36] = I))
          : (I = M[36]),
        (0, s.jsxs)(B.d, {
          className: "flex h-full w-full flex-1 flex-col gap-8",
          children: [
            x,
            (0, s.jsx)(J.Ql, {
              animateContentLayout: !1,
              contentClassName: P ? "pt-2" : void 0,
              contentWidth: "medium",
              headerPlacement: P ? "sticky" : "page",
              headerVariant: P ? "compact" : "inset",
              collapseHeaderOnScroll: P,
              expandSearchWhenWrapped: P,
              wrapActionsAtNarrowWidth: P,
              headerAction: j,
              scrollContainerRef: ea,
              title: y,
              subtitle: b,
              search: {
                variant: P ? "toolbar-compact" : "default",
                id: "plugins-page-search",
                inputRef: en,
                label: ew.searchLabel,
                onKeyDown: (e) => {
                  if (eA && 0 !== eU.length) {
                    if ("ArrowDown" === e.key) {
                      ;(e.preventDefault(), Q(Math.min((eD ?? 0) + 1, eU.length - 1)), eQ())
                      return
                    }
                    if ("ArrowUp" === e.key) {
                      ;(e.preventDefault(), Q(Math.max((eD ?? 0) - 1, 0)), eQ())
                      return
                    }
                    if ("Enter" === e.key) {
                      let l = ea.current?.querySelector("[data-search-result-active='true']")
                      l instanceof HTMLElement && (e.preventDefault(), l.click())
                    }
                  }
                },
                onSearchQueryChange: eH,
                placeholder: ew.searchPlaceholder,
                searchQuery: T,
              },
              children: I,
            }),
          ],
        })
      )
    }
    function el(e) {
      return { id: e.id, title: e.title }
    }
    function et(e) {
      return `recommended-skill:${e.id}`
    }
    function es(e) {
      let { skill: l } = e
      return `installed-skill:${l.path}`
    }
    function ei(e) {
      return `suggested-skill:${e.id}`
    }
    function en(e) {
      let l,
        t,
        n,
        a = (0, i.c)(8),
        { navigation: r } = e,
        o = (0, d.Ul)(!1)
      return (
        a[0] !== o || a[1] !== r ? ((l = null), (a[0] = o), (a[1] = r), (a[2] = l)) : (l = a[2]),
        a[3] !== r ? ((t = (0, s.jsx)(K.p, { navigation: r })), (a[3] = r), (a[4] = t)) : (t = a[4]),
        a[5] !== l || a[6] !== t
          ? ((n = (0, s.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [l, t] })),
            (a[5] = l),
            (a[6] = t),
            (a[7] = n))
          : (n = a[7]),
        n
      )
    }
    function ea(e) {
      let l,
        t,
        n,
        a,
        r = (0, i.c)(11),
        { hostId: o, navigation: c } = e,
        u = (0, d.Ul)(L.GB)
      return (
        r[0] !== o ? ((l = o === _.fI ? (0, s.jsx)(er, {}) : null), (r[0] = o), (r[1] = l)) : (l = r[1]),
        r[2] !== u || r[3] !== c
          ? ((t = u ? null : (0, s.jsx)(G.E, { browseTab: "skills", navigation: c })),
            (r[2] = u),
            (r[3] = c),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== o ? ((n = (0, s.jsx)(ee, { hostId: o })), (r[5] = o), (r[6] = n)) : (n = r[6]),
        r[7] !== l || r[8] !== t || r[9] !== n
          ? ((a = (0, s.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [l, t, n] })),
            (r[7] = l),
            (r[8] = t),
            (r[9] = n),
            (r[10] = a))
          : (a = r[10]),
        a
      )
    }
    function er() {
      return (0, d.Ul)(V.tr)
    }
    var eo = t("FgWs"),
      ed = t("fQ1s"),
      ec = t("g5cM")
    function eu() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsxs)(s.Fragment, {
              children: [null, (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(em, {}) })],
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    function em() {
      let e,
        l,
        t = (0, i.c)(5),
        n = (0, h.zy)(),
        a = (0, ed.x)()
      t[0] !== n.search ? ((e = (0, F.a5)(n.search)), (t[0] = n.search), (t[1] = e)) : (e = t[1])
      let r = e
      if (a) {
        let e
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(eh, {})), (t[2] = e)) : (e = t[2]),
          e
        )
      }
      return (t[3] !== r ? ((l = (0, s.jsx)(ef, { initialSearchQuery: r })), (t[3] = r), (t[4] = l)) : (l = t[4]), l)
    }
    function eh() {
      let e,
        l,
        t,
        n,
        a,
        r,
        o = (0, i.c)(23),
        c = (0, d.gh)(w.u),
        u = (0, d.Ul)(L.GB),
        m = (0, h.zy)()
      o[0] !== m.search || o[1] !== m.state
        ? ((e = (0, F.qC)(m.state, m.search)), (o[0] = m.search), (o[1] = m.state), (o[2] = e))
        : (e = o[2])
      let g = e,
        p = (0, d._U)(U.Mi, m.key),
        k = null == p && "skills" === g.initialTab ? "skills" : "plugins"
      o[3] !== k || o[4] !== m.key
        ? ((l = { historyKey: m.key, initialTab: k }), (o[3] = k), (o[4] = m.key), (o[5] = l))
        : (l = o[5])
      let x = (0, d._U)(U._r, l),
        j = p?.selectedHostId ?? g.initialHostId ?? _.fI
      o[6] !== j || o[7] !== m.key
        ? ((t = { historyKey: m.key, initialHostId: j }), (o[6] = j), (o[7] = m.key), (o[8] = t))
        : (t = o[8])
      let y = (0, d._U)(U.ff, t),
        b = (0, d.Ul)(I.u8) ?? [],
        S = (0, f.g)(b)
      o[9] !== S || o[10] !== y ? ((n = (0, P.B)(y, S)), (o[9] = S), (o[10] = y), (o[11] = n)) : (n = o[11])
      let v = n,
        M = x
      ;(u && (M = "/skills" === m.pathname ? "skills" : "plugins"),
        o[12] !== M || o[13] !== u || o[14] !== k || o[15] !== m.key || o[16] !== c || o[17] !== v
          ? ((a = u
              ? void 0
              : (0, s.jsx)(ec.C, {
                  currentBrowseTab: M,
                  hostId: v,
                  onBrowseTabSelect: (e) => {
                    c.set(U._r, { historyKey: m.key, initialTab: k }, e)
                  },
                })),
            (o[12] = M),
            (o[13] = u),
            (o[14] = k),
            (o[15] = m.key),
            (o[16] = c),
            (o[17] = v),
            (o[18] = a))
          : (a = o[18]))
      let A = a
      return (
        o[19] !== M || o[20] !== A || o[21] !== v
          ? ((r =
              "skills" === M ? (0, s.jsx)(ea, { hostId: v, navigation: A }, v) : (0, s.jsx)(en, { navigation: A }, v)),
            (o[19] = M),
            (o[20] = A),
            (o[21] = v),
            (o[22] = r))
          : (r = o[22]),
        r
      )
    }
    function ef(e) {
      let l,
        t,
        n,
        p,
        j,
        S,
        C,
        L,
        U,
        D,
        F,
        O,
        z,
        V,
        G,
        K,
        Y,
        J,
        $,
        Z,
        X,
        ee,
        el,
        et,
        es,
        ei,
        en,
        ea,
        er,
        ed,
        ec,
        eu,
        em,
        eh,
        ef,
        ek = (0, i.c)(100),
        { initialSearchQuery: ey } = e,
        eS = (0, d.gh)(w.u),
        ev = "/settings/skills-settings" === (0, h.zy)().pathname,
        eI = (0, u.A)(),
        { data: ew } = (0, g.YL)(),
        eM = (0, b.p8)(),
        eA = (0, d.Ul)(I.u8),
        eN = (0, f.g)(eA),
        [eP, eC] = (0, c.useState)(_.fI)
      ek[0] !== eN || ek[1] !== eP ? ((l = (0, P.B)(eP, eN)), (ek[0] = eN), (ek[1] = eP), (ek[2] = l)) : (l = ek[2])
      let e_ = l,
        [eL, eE] = (0, c.useState)(null),
        [eR, eU] = (0, c.useState)(null)
      ek[3] !== eR || ek[4] !== eL
        ? ((t = { container: eL, target: eR }), (ek[3] = eR), (ek[4] = eL), (ek[5] = t))
        : (t = ek[5])
      let eD = (function (e) {
          let l,
            t,
            s = (0, i.c)(6),
            { container: n, target: a } = e
          s[0] !== n || s[1] !== a
            ? ((l = (e) => {
                if (!n || !a) return Q
                let l = () => {
                  e()
                }
                n.addEventListener("scroll", l, { passive: !0 })
                let t = "u" < typeof ResizeObserver ? null : new ResizeObserver(l)
                return (
                  t && (t.observe(n), t.observe(a)),
                  () => {
                    ;(n.removeEventListener("scroll", l), t && t.disconnect())
                  }
                )
              }),
              (s[0] = n),
              (s[1] = a),
              (s[2] = l))
            : (l = s[2])
          let r = l
          s[3] !== n || s[4] !== a
            ? ((t = () => {
                if (!n || !a) return !0
                let e = n.getBoundingClientRect(),
                  l = a.getBoundingClientRect()
                return l.bottom > e.top && l.top < e.bottom
              }),
              (s[3] = n),
              (s[4] = a),
              (s[5] = t))
            : (t = s[5])
          let o = t
          return (0, c.useSyncExternalStore)(r, o, o)
        })(t),
        [eF, eO] = (0, c.useState)(void 0 === ey ? "" : ey),
        [ez, eT] = (0, c.useState)(!1),
        eB = (0, d.Ul)(eo.HL) ?? (0, H.TB)(eo.e2, !1),
        {
          forceReloadSkills: eW,
          installedSkillMatchKeys: eq,
          isFetching: eH,
          isLoading: eQ,
          markSkillsUpdated: eV,
          standaloneInstalledSkills: eG,
          workspaceRoots: eK,
        } = (0, W.Cy)(e_),
        { canInstallRecommendedSkills: eY, defaultRecommendedRepoRoot: eJ, skillCreatorPath: e$ } = (0, W.p1)(e_),
        { errorMessage: eZ, isLoading: eX, refresh: e0, repoRoot: e1, skills: e2 } = (0, W.Jc)(eJ, e_, eY)
      ;(ek[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            eT(!0)
          }),
          (ek[6] = n))
        : (n = ek[6]),
        ek[7] !== eW || ek[8] !== e_
          ? ((p = { forceReloadSkills: eW, hostId: e_, onInstalled: n }), (ek[7] = eW), (ek[8] = e_), (ek[9] = p))
          : (p = ek[9]))
      let { installRecommendedSkill: e3, installingSkillId: e4 } = (0, W.zS)(p)
      ek[10] !== eI ? ((j = (0, E.V_)({ scope: "repo", intl: eI })), (ek[10] = eI), (ek[11] = j)) : (j = ek[11])
      let e5 = j,
        e6 = ew?.name ?? void 0
      ek[12] !== eI || ek[13] !== e6
        ? ((S = (0, E.V_)({ scope: "admin", intl: eI, adminLabel: e6 })), (ek[12] = eI), (ek[13] = e6), (ek[14] = S))
        : (S = ek[14])
      let e8 = S
      ek[15] !== eI || ek[16] !== e8 || ek[17] !== e5 || ek[18] !== eK
        ? ((C = (e) => {
            let { scope: l, skillPath: t } = e
            return (0, E.V_)({
              scope: l,
              intl: eI,
              repoLabel: (0, E._i)({ skillPath: t, roots: eK, fallbackLabel: e5 }),
              adminLabel: e8,
            })
          }),
          (ek[15] = eI),
          (ek[16] = e8),
          (ek[17] = e5),
          (ek[18] = eK),
          (ek[19] = C))
        : (C = ek[19])
      let e7 = C
      if (ek[20] !== eF || ek[21] !== eG) {
        let e = eF.trim().toLowerCase()
        ;((L = eG.filter((l) => {
          let { skill: t } = l
          if (0 === e.length) return !0
          let s = (0, R.a)(t).toLowerCase(),
            i = (0, T.nf)(t).toLowerCase()
          return t.name.toLowerCase().includes(e) || i.includes(e) || s.includes(e)
        })),
          (ek[20] = eF),
          (ek[21] = eG),
          (ek[22] = L))
      } else L = ek[22]
      let e9 = L
      ek[23] !== eV || ek[24] !== e0
        ? ((U = async () => {
            ;(eV(), await e0(), eT(!1))
          }),
          (ek[23] = eV),
          (ek[24] = e0),
          (ek[25] = U))
        : (U = ek[25])
      let le = U
      ;(ek[26] === Symbol.for("react.memo_cache_sentinel") ? ((D = []), (ek[26] = D)) : (D = ek[26]),
        (0, c.useEffect)(ep, D),
        ek[27] !== eD
          ? ((F = eD ? null : (0, s.jsx)(m.A, { id: "skills.page.heading", defaultMessage: "Skills" })),
            (ek[27] = eD),
            (ek[28] = F))
          : (F = ek[28]),
        ek[29] !== eN || ek[30] !== e_
          ? ((O =
              null != eN && eN.length > 0
                ? (0, s.jsx)(N.r, { connectedRemoteConnections: eN, onSelectHost: eC, selectedHostId: e_ })
                : null),
            (ek[29] = eN),
            (ek[30] = e_),
            (ek[31] = O))
          : (O = ek[31]))
      let ll = ez ? "secondary" : "ghost"
      ek[32] !== le
        ? ((z = () => {
            le()
          }),
          (ek[32] = le),
          (ek[33] = z))
        : (z = ek[33])
      let lt = eQ || eH
      ;(ek[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = (0, s.jsx)(x.I, { "aria-hidden": !1, asset: r.S })), (ek[34] = V))
        : (V = ek[34]),
        ek[35] !== ez
          ? ((G = (0, s.jsx)("span", {
              className: "hidden lg:inline",
              children: ez
                ? (0, s.jsx)(m.A, {
                    id: "skills.page.refreshSkillsToUseNew",
                    defaultMessage: "Refresh to use new skill(s)",
                  })
                : (0, s.jsx)(m.A, { id: "skills.page.refreshSkills", defaultMessage: "Refresh" }),
            })),
            (ek[35] = ez),
            (ek[36] = G))
          : (G = ek[36]),
        ek[37] !== ll || ek[38] !== z || ek[39] !== lt || ek[40] !== G
          ? ((K = (0, s.jsxs)(k.$, { color: ll, size: "toolbar", onClick: z, disabled: lt, children: [V, G] })),
            (ek[37] = ll),
            (ek[38] = z),
            (ek[39] = lt),
            (ek[40] = G),
            (ek[41] = K))
          : (K = ek[41]),
        ek[42] !== eI
          ? ((Y = eI.formatMessage({ id: "skills.page.search.label", defaultMessage: "Search skills" })),
            (ek[42] = eI),
            (ek[43] = Y))
          : (Y = ek[43]),
        ek[44] !== eI
          ? ((J = eI.formatMessage({ id: "skills.page.search", defaultMessage: "Search skills" })),
            (ek[44] = eI),
            (ek[45] = J))
          : (J = ek[45]),
        ek[46] !== eF || ek[47] !== Y || ek[48] !== J
          ? (($ = (0, s.jsx)("div", {
              className: "hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none",
              children: (0, s.jsx)(y.s, {
                id: "skills-search",
                autoFocus: !0,
                label: Y,
                placeholder: J,
                searchQuery: eF,
                onSearchQueryChange: eO,
              }),
            })),
            (ek[46] = eF),
            (ek[47] = Y),
            (ek[48] = J),
            (ek[49] = $))
          : ($ = ek[49]),
        ek[50] !== eB || ek[51] !== eS || ek[52] !== e$ || ek[53] !== eM
          ? ((Z = () => {
              if (!e$) return
              ;(0, v.yy)(eS, a.CodexSkillNewClicked, {})
              let e = (0, eo.Px)({ creatorPath: e$, includeStarterPrompt: !eB, kind: "skill" })
              ;(eB || eS.set(eo.HL, !0), eM({ prefillPrompt: e, startInSidebar: !0 }))
            }),
            (ek[50] = eB),
            (ek[51] = eS),
            (ek[52] = e$),
            (ek[53] = eM),
            (ek[54] = Z))
          : (Z = ek[54]))
      let ls = !e$
      return (
        ek[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, s.jsx)(x.I, { "aria-hidden": !1, asset: o.f })),
            (ee = (0, s.jsx)(A.Ct, { title: M.Am.title })),
            (ek[55] = X),
            (ek[56] = ee))
          : ((X = ek[55]), (ee = ek[56])),
        ek[57] !== Z || ek[58] !== ls
          ? ((el = (0, s.jsxs)(k.$, {
              color: "primary",
              size: "toolbar",
              onClick: Z,
              disabled: ls,
              children: [X, ee],
            })),
            (ek[57] = Z),
            (ek[58] = ls),
            (ek[59] = el))
          : (el = ek[59]),
        ek[60] !== ev || ek[61] !== el
          ? ((et = (0, s.jsx)(A.ek, { entry: M.Am, anchored: ev, children: el })),
            (ek[60] = ev),
            (ek[61] = el),
            (ek[62] = et))
          : (et = ek[62]),
        ek[63] !== O || ek[64] !== K || ek[65] !== $ || ek[66] !== et
          ? ((es = (0, s.jsxs)("div", { className: "flex flex-nowrap items-center gap-1.5", children: [O, K, $, et] })),
            (ek[63] = O),
            (ek[64] = K),
            (ek[65] = $),
            (ek[66] = et),
            (ek[67] = es))
          : (es = ek[67]),
        ek[68] !== F || ek[69] !== es
          ? ((ei = (0, s.jsx)(q.J, { start: F, trailing: es })), (ek[68] = F), (ek[69] = es), (ek[70] = ei))
          : (ei = ek[70]),
        ek[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (e) => {
              eE(e)
            }),
            (ek[71] = en))
          : (en = ek[71]),
        ek[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((ea = (e) => {
              eU(e)
            }),
            (ek[72] = ea))
          : (ea = ek[72]),
        ek[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, s.jsx)("div", {
              className: "heading-xl font-normal text-default",
              children: (0, s.jsx)(m.A, { id: "skills.page.heading", defaultMessage: "Skills" }),
            })),
            (ek[73] = er))
          : (er = ek[73]),
        ek[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, s.jsx)("div", {
              className: "flex items-end justify-between gap-4",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col gap-1",
                ref: ea,
                children: [
                  er,
                  (0, s.jsx)("div", {
                    className: "text-lg font-normal text-codex-description",
                    children: (0, s.jsx)(m.A, {
                      id: "skills.page.subheading",
                      defaultMessage: "Add reusable workflows with Skills. <link>Learn more</link>",
                      values: { link: eg },
                    }),
                  }),
                ],
              }),
            })),
            (ek[74] = ed))
          : (ed = ek[74]),
        ek[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (0, s.jsx)(m.A, { id: "skills.section.installed", defaultMessage: "Installed" })), (ek[75] = ec))
          : (ec = ek[75]),
        ek[76] !== e9 || ek[77] !== e7 || ek[78] !== eQ || ek[79] !== eV || ek[80] !== e_ || ek[81] !== eG.length
          ? ((eu = (0, s.jsx)(ex, {
              title: ec,
              children: (0, s.jsx)(ej, {
                hostId: e_,
                isLoading: eQ,
                uniqueSkillCount: eG.length,
                filteredSkills: e9,
                getScopeBadgeLabel: e7,
                onSkillsUpdated: eV,
              }),
            })),
            (ek[76] = e9),
            (ek[77] = e7),
            (ek[78] = eQ),
            (ek[79] = eV),
            (ek[80] = e_),
            (ek[81] = eG.length),
            (ek[82] = eu))
          : (eu = ek[82]),
        ek[83] !== eY ||
        ek[84] !== e3 ||
        ek[85] !== eq ||
        ek[86] !== e4 ||
        ek[87] !== eX ||
        ek[88] !== e1 ||
        ek[89] !== e2 ||
        ek[90] !== eZ ||
        ek[91] !== eF ||
        ek[92] !== e_
          ? ((em = eY
              ? (0, s.jsx)(ex, {
                  title: (0, s.jsx)(m.A, { id: "skills.section.recommended", defaultMessage: "Recommended" }),
                  children: (0, s.jsx)(eb, {
                    hostId: e_,
                    isLoading: eX,
                    errorMessage: eZ,
                    skills: e2,
                    searchQuery: eF,
                    canInstall: !0,
                    repoRoot: e1,
                    onInstall: e3,
                    installedSkillMatchKeys: eq,
                    installingSkillId: e4,
                  }),
                })
              : null),
            (ek[83] = eY),
            (ek[84] = e3),
            (ek[85] = eq),
            (ek[86] = e4),
            (ek[87] = eX),
            (ek[88] = e1),
            (ek[89] = e2),
            (ek[90] = eZ),
            (ek[91] = eF),
            (ek[92] = e_),
            (ek[93] = em))
          : (em = ek[93]),
        ek[94] !== eu || ek[95] !== em
          ? ((eh = (0, s.jsx)("div", {
              className: "flex-1 overflow-y-auto p-panel",
              ref: en,
              children: (0, s.jsxs)(B.d, {
                className:
                  "mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8",
                children: [
                  ed,
                  (0, s.jsx)("div", {
                    className: "flex min-h-0 w-full flex-1",
                    children: (0, s.jsxs)("div", {
                      className: "flex min-h-0 flex-1 flex-col gap-9 pb-10",
                      children: [eu, em],
                    }),
                  }),
                ],
              }),
            })),
            (ek[94] = eu),
            (ek[95] = em),
            (ek[96] = eh))
          : (eh = ek[96]),
        ek[97] !== ei || ek[98] !== eh
          ? ((ef = (0, s.jsxs)("div", { className: "me-4 flex h-full flex-col text-base", children: [ei, eh] })),
            (ek[97] = ei),
            (ek[98] = eh),
            (ek[99] = ef))
          : (ef = ek[99]),
        ef
      )
    }
    function eg(e) {
      return (0, s.jsx)("a", {
        href: p.T7,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-link-primary!",
        children: e,
      })
    }
    function ep() {
      return ((document.documentElement.dataset.hideHeaderDivider = "true"), ek)
    }
    function ek() {
      delete document.documentElement.dataset.hideHeaderDivider
    }
    function ex(e) {
      let l,
        t,
        n = (0, i.c)(5),
        { title: a, children: r } = e
      return (
        n[0] !== a
          ? ((l = (0, s.jsx)("div", {
              className: "ps-2 pe-0.5 text-base font-medium text-default opacity-75",
              children: a,
            })),
            (n[0] = a),
            (n[1] = l))
          : (l = n[1]),
        n[2] !== r || n[3] !== l
          ? ((t = (0, s.jsxs)("section", { className: "flex flex-col gap-4", children: [l, r] })),
            (n[2] = r),
            (n[3] = l),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function ej(e) {
      let l,
        t,
        n = (0, i.c)(14),
        {
          hostId: a,
          isLoading: r,
          uniqueSkillCount: o,
          filteredSkills: d,
          getScopeBadgeLabel: c,
          onSkillsUpdated: u,
        } = e
      if (r) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, s.jsx)(C.j, {
                  children: (0, s.jsx)(m.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (0 === o) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, s.jsx)(j.A, {
                  title: (0, s.jsx)(m.A, { id: "skills.page.empty", defaultMessage: "No skills found" }),
                }),
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (0 === d.length) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, s.jsx)(j.A, {
                  title: (0, s.jsx)(m.A, {
                    id: "skills.page.filteredEmpty",
                    defaultMessage: "No skills match your filters",
                  }),
                  description: (0, s.jsx)(m.A, {
                    id: "skills.page.filteredEmptyDescription",
                    defaultMessage: "Try adjusting your search or scope filters",
                  }),
                }),
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (n[3] !== d || n[4] !== c || n[5] !== a || n[6] !== u) {
        let e
        ;(n[8] !== c || n[9] !== a || n[10] !== u
          ? ((e = (e) => {
              let { skill: l } = e,
                t =
                  "repo" === l.scope
                    ? [(0, s.jsx)(ey, { label: c({ scope: "repo", skillPath: l.path }) }, `${l.path}-repo`)]
                    : []
              return (0, s.jsx)(
                z.A,
                { skill: l, displayName: (0, T.nf)(l), hostId: a, scopeBadges: t, onSkillsUpdated: u },
                l.path,
              )
            }),
            (n[8] = c),
            (n[9] = a),
            (n[10] = u),
            (n[11] = e))
          : (e = n[11]),
          (l = d.map(e)),
          (n[3] = d),
          (n[4] = c),
          (n[5] = a),
          (n[6] = u),
          (n[7] = l))
      } else l = n[7]
      return (n[12] !== l ? ((t = (0, s.jsx)(B.q, { children: l })), (n[12] = l), (n[13] = t)) : (t = n[13]), t)
    }
    function ey(e) {
      let l,
        t = (0, i.c)(2),
        { label: n } = e
      return (
        t[0] !== n
          ? ((l = (0, s.jsx)("span", { className: "text-codex-description", children: n })), (t[0] = n), (t[1] = l))
          : (l = t[1]),
        l
      )
    }
    function eb(e) {
      let l,
        t,
        n,
        a,
        r = (0, i.c)(31),
        {
          hostId: o,
          isLoading: d,
          errorMessage: c,
          skills: u,
          searchQuery: h,
          canInstall: f,
          repoRoot: g,
          onInstall: p,
          installedSkillMatchKeys: k,
          installingSkillId: x,
        } = e
      if (
        r[0] !== f ||
        r[1] !== c ||
        r[2] !== o ||
        r[3] !== k ||
        r[4] !== x ||
        r[5] !== d ||
        r[6] !== p ||
        r[7] !== g ||
        r[8] !== h ||
        r[9] !== u
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e, i
          r[13] !== k
            ? ((e = (e) => !(0, D.b9)({ installedSkillMatchKeys: k, skill: e })), (r[13] = k), (r[14] = e))
            : (e = r[14])
          let a = u.filter(e),
            y = h.trim().toLowerCase(),
            b = a.filter(
              (e) =>
                0 === y.length || [e.name, e.description, e.shortDescription ?? ""].join(" ").toLowerCase().includes(y),
            )
          if (d) {
            let e
            ;(r[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, s.jsx)(C.j, {
                    children: (0, s.jsx)(m.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                  }),
                })),
                (r[15] = e))
              : (e = r[15]),
              (n = e))
            break e
          }
          if (c) {
            let e, l
            ;(r[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(m.A, {
                  id: "skills.recommended.error",
                  defaultMessage: "Unable to load recommended skills",
                })),
                (r[16] = e))
              : (e = r[16]),
              r[17] !== c
                ? ((l = (0, s.jsx)("div", {
                    className: "flex min-h-0 flex-1 items-center justify-center",
                    children: (0, s.jsx)(j.A, { title: e, description: c }),
                  })),
                  (r[17] = c),
                  (r[18] = l))
                : (l = r[18]),
              (n = l))
            break e
          }
          if (0 === a.length) {
            let e
            ;(r[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, s.jsx)(j.A, {
                    title: (0, s.jsx)(m.A, { id: "skills.page.empty", defaultMessage: "No skills found" }),
                  }),
                })),
                (r[19] = e))
              : (e = r[19]),
              (n = e))
            break e
          }
          if (0 === b.length) {
            let e
            ;(r[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, s.jsx)(j.A, {
                    title: (0, s.jsx)(m.A, {
                      id: "skills.page.filteredEmpty",
                      defaultMessage: "No skills match your filters",
                    }),
                    description: (0, s.jsx)(m.A, {
                      id: "skills.page.filteredEmptyDescription",
                      defaultMessage: "Try adjusting your search or scope filters",
                    }),
                  }),
                })),
                (r[20] = e))
              : (e = r[20]),
              (n = e))
            break e
          }
          ;((l = B.q),
            r[21] !== f || r[22] !== o || r[23] !== k || r[24] !== x || r[25] !== p || r[26] !== g
              ? ((i = (e) => {
                  let l = (0, D.b9)({ installedSkillMatchKeys: k, skill: e }),
                    t = x === e.id
                  return (0, s.jsx)(
                    O.D,
                    { skill: e, canInstall: f, hostId: o, isInstalled: l, isInstalling: t, repoRoot: g, onInstall: p },
                    e.id,
                  )
                }),
                (r[21] = f),
                (r[22] = o),
                (r[23] = k),
                (r[24] = x),
                (r[25] = p),
                (r[26] = g),
                (r[27] = i))
              : (i = r[27]),
            (t = b.map(i)))
        }
        ;((r[0] = f),
          (r[1] = c),
          (r[2] = o),
          (r[3] = k),
          (r[4] = x),
          (r[5] = d),
          (r[6] = p),
          (r[7] = g),
          (r[8] = h),
          (r[9] = u),
          (r[10] = l),
          (r[11] = t),
          (r[12] = n))
      } else ((l = r[10]), (t = r[11]), (n = r[12]))
      return n !== Symbol.for("react.early_return_sentinel")
        ? n
        : (r[28] !== l || r[29] !== t
            ? ((a = (0, s.jsx)(l, { children: t })), (r[28] = l), (r[29] = t), (r[30] = a))
            : (a = r[30]),
          a)
    }
    ;(0, S.e)(n.iw)
  },
  funJ(e, l, t) {
    t.d(l, { j: () => E, Z: () => P })
    var s = t("ABep"),
      i = t("QosV"),
      n = t("qmMi"),
      a = t("zd8w"),
      r = t("Wf1j"),
      o = t("oyxz"),
      d = t("bq7F"),
      c = t("FrrB"),
      u = t("JZv7"),
      m = t("BrP7"),
      h = t("TIw4"),
      f = t("odCE"),
      g = t("kEV3"),
      p = t("Ekos"),
      k = t("rJVD"),
      x = t("hbRe"),
      j = t("ZGaK"),
      y = t("xcgE"),
      b = t("Sm6l"),
      S = t("Q8aV"),
      v = t("axh8"),
      I = t("n4fT"),
      w = t("hobO")
    function M(e) {
      let l,
        t,
        n,
        d,
        c,
        u,
        m,
        h,
        f,
        g = (0, i.c)(25),
        { isHighlighted: p, suggestion: k } = e,
        x = void 0 !== p && p,
        j = (0, r.A)(),
        M = (0, S.p8)()
      g[0] !== j || g[1] !== M || g[2] !== k
        ? ((l = () => {
            M({ prefillPrompt: (0, y.c5)({ intl: j, memoryFilePath: k.memoryFilePath, suggestion: k }) })
          }),
          (g[0] = j),
          (g[1] = M),
          (g[2] = k),
          (g[3] = l))
        : (l = g[3])
      let A = l
      g[4] !== k.description || g[5] !== k.name
        ? ((t = (0, a.createElement)((0, v.h)(null, { fallbackDescription: k.description, fallbackName: k.name }), {
            className: "icon-sm",
          })),
          (g[4] = k.description),
          (g[5] = k.name),
          (g[6] = t))
        : (t = g[6])
      let N = t
      return (
        g[7] !== A
          ? ((n = (e) => {
              ;(e.stopPropagation(), A())
            }),
            (g[7] = A),
            (g[8] = n))
          : (n = g[8]),
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
            })),
            (g[9] = d))
          : (d = g[9]),
        g[10] !== n
          ? ((c = (0, s.jsx)(b.$, { color: "secondary", size: "composer", onClick: n, children: d })),
            (g[10] = n),
            (g[11] = c))
          : (c = g[11]),
        g[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
            })),
            (g[12] = u))
          : (u = g[12]),
        g[13] !== A
          ? ((m = (0, s.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, s.jsx)(b.$, { color: "primary", size: "toolbar", onClick: A, children: u }),
            })),
            (g[13] = A),
            (g[14] = m))
          : (m = g[14]),
        g[15] !== k.name
          ? ((h = (0, s.jsx)(w.Rv, { kind: "Skill", title: k.name })), (g[15] = k.name), (g[16] = h))
          : (h = g[16]),
        g[17] !== x ||
        g[18] !== N ||
        g[19] !== k.description ||
        g[20] !== k.name ||
        g[21] !== c ||
        g[22] !== m ||
        g[23] !== h
          ? ((f = (0, s.jsx)(I.C, {
              cardActions: c,
              cardDescription: k.description,
              cardIcon: N,
              cardTitle: k.name,
              isHighlighted: x,
              modalBody: null,
              modalDescription: k.description,
              modalFooter: m,
              modalTitle: h,
              modalTitleText: k.name,
            })),
            (g[17] = x),
            (g[18] = N),
            (g[19] = k.description),
            (g[20] = k.name),
            (g[21] = c),
            (g[22] = m),
            (g[23] = h),
            (g[24] = f))
          : (f = g[24]),
        f
      )
    }
    var A = t("mIfQ"),
      N = t("f22a")
    function P(e) {
      let l,
        t,
        n,
        d,
        h,
        f,
        g,
        p,
        k,
        x,
        j,
        y,
        b = (0, i.c)(100),
        {
          canInstallRecommendedSkills: S,
          errorMessage: v,
          installedStateAction: I,
          installedSkillGroups: w,
          installedSkills: M,
          installedSkillsForRecommendedActions: A,
          installedRecommendedSkillIds: P,
          highlightedInstalledSkillPath: L,
          highlightedRecommendedSkillId: R,
          highlightedSuggestedSkillId: U,
          hostId: D,
          installingSkillId: F,
          isLoadingInstalledSkills: O,
          isLoadingRecommendedSkills: T,
          onInstallRecommendedSkill: B,
          onInstalledRecommendedSkillUpdated: W,
          onSelectSection: q,
          onSkillsUpdated: H,
          recommendedRepoRoot: Q,
          recommendedSkills: V,
          roots: G,
          selectedSectionId: K,
          suggestedSkills: Y,
          searchResultsTitle: J,
          installedSection: $,
          recommendedSection: Z,
        } = e,
        X = void 0 === I ? "check" : I,
        ee = (0, r.A)(),
        el = (0, a.useRef)(null)
      ;(b[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            el.current = null
          }),
          (b[0] = l))
        : (l = b[0]),
        (0, a.useLayoutEffect)(l),
        b[1] !== W
          ? ((t = (e) => {
              ;((el.current = e ?? null), W())
            }),
            (b[1] = W),
            (b[2] = t))
          : (t = b[2]))
      let et = t
      b[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (e, l) => {
            el.current === e &&
              ((el.current = null), l.ownerDocument.activeElement === l.ownerDocument.body && l.focus())
          }),
          (b[3] = n))
        : (n = b[3])
      let es = n
      if (b[4] !== P || b[5] !== A || b[6] !== V) {
        let e
        ;(b[8] !== P || b[9] !== A
          ? ((e = (e) => {
              let l = P.has(e.id)
              return {
                installedSkill: l ? (0, N.gQ)({ installedSkills: A, skill: e }) : null,
                isInstalled: l,
                skill: e,
              }
            }),
            (b[8] = P),
            (b[9] = A),
            (b[10] = e))
          : (e = b[10]),
          (d = V.map(e)),
          (b[4] = P),
          (b[5] = A),
          (b[6] = V),
          (b[7] = d))
      } else d = b[7]
      let ei = d,
        en = null != $ && (w.length > 0 || M.length > 0),
        ea = null != Z && ei.length > 0
      if (!O && !T && null == v && !en && !ea && 0 === Y.length) {
        let e
        return (
          b[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, s.jsx)(c.A, {
                  title: (0, s.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                }),
              })),
              (b[11] = e))
            : (e = b[11]),
          e
        )
      }
      if (null != J) {
        let e, l, t
        return (
          b[12] !== U || b[13] !== Y
            ? ((e = (0, s.jsx)(_, { highlightedSuggestionId: U, suggestions: Y })),
              (b[12] = U),
              (b[13] = Y),
              (b[14] = e))
            : (e = b[14]),
          b[15] !== S ||
          b[16] !== v ||
          b[17] !== et ||
          b[18] !== L ||
          b[19] !== R ||
          b[20] !== D ||
          b[21] !== M ||
          b[22] !== X ||
          b[23] !== F ||
          b[24] !== O ||
          b[25] !== T ||
          b[26] !== B ||
          b[27] !== H ||
          b[28] !== Q ||
          b[29] !== ei ||
          b[30] !== G ||
          b[31] !== J
            ? ((l =
                M.length > 0 || ei.length > 0
                  ? (0, s.jsx)(u.L, {
                      count: M.length + ei.length,
                      id: "skills-search-results",
                      title: J,
                      children: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          M.length > 0
                            ? (0, s.jsx)(E, {
                                onCardMount: es,
                                hostId: D,
                                installedStateAction: X,
                                highlightedSkillPath: L,
                                isLoading: O,
                                roots: G,
                                skillEntries: M,
                                onSkillsUpdated: H,
                              })
                            : null,
                          ei.length > 0
                            ? (0, s.jsx)(z, {
                                canInstall: S,
                                errorMessage: v,
                                highlightInstalledSkills: !1,
                                hostId: D,
                                highlightedSkillId: R,
                                entries: ei,
                                installingSkillId: F,
                                isLoading: T,
                                onInstall: B,
                                onSkillsUpdated: et,
                                repoRoot: Q,
                                roots: G,
                                showAll: !0,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (b[15] = S),
              (b[16] = v),
              (b[17] = et),
              (b[18] = L),
              (b[19] = R),
              (b[20] = D),
              (b[21] = M),
              (b[22] = X),
              (b[23] = F),
              (b[24] = O),
              (b[25] = T),
              (b[26] = B),
              (b[27] = H),
              (b[28] = Q),
              (b[29] = ei),
              (b[30] = G),
              (b[31] = J),
              (b[32] = l))
            : (l = b[32]),
          b[33] !== e || b[34] !== l
            ? ((t = (0, s.jsxs)("div", { className: "flex flex-1 flex-col gap-8 pb-panel", children: [e, l] })),
              (b[33] = e),
              (b[34] = l),
              (b[35] = t))
            : (t = b[35]),
          t
        )
      }
      if (
        b[36] !== U ||
        b[37] !== D ||
        b[38] !== $ ||
        b[39] !== w ||
        b[40] !== M ||
        b[41] !== X ||
        b[42] !== ee ||
        b[43] !== O ||
        b[44] !== q ||
        b[45] !== H ||
        b[46] !== Z ||
        b[47] !== G ||
        b[48] !== K ||
        b[49] !== Y
      ) {
        let e,
          l = (function (e, l) {
            let t = []
            for (let l of e) t.push({ id: l.id, label: l.title })
            return (null != l && t.push({ id: l.id, label: l.title }), t)
          })(w, Z)
        if (b[55] !== w || b[56] !== K) {
          let l
          ;(b[58] !== K ? ((l = (e) => e.id === K), (b[58] = K), (b[59] = l)) : (l = b[59]),
            (e = w.find(l)),
            (b[55] = w),
            (b[56] = K),
            (b[57] = e))
        } else e = b[57]
        ;((h = e),
          (f = "flex flex-1 flex-col gap-8 pb-panel"),
          b[60] !== U || b[61] !== Y
            ? ((g = (0, s.jsx)(_, { highlightedSuggestionId: U, suggestions: Y })),
              (b[60] = U),
              (b[61] = Y),
              (b[62] = g))
            : (g = b[62]),
          b[63] !== D || b[64] !== $ || b[65] !== M || b[66] !== X || b[67] !== O || b[68] !== H || b[69] !== G
            ? ((p =
                null != $
                  ? (0, s.jsx)(u.L, {
                      id: $.id,
                      title: (0, s.jsx)(o.A, {
                        id: "skills.appsPage.section.installedSkillsOverview",
                        defaultMessage: "Installed",
                      }),
                      children: (0, s.jsx)(E, {
                        onCardMount: es,
                        hostId: D,
                        installedStateAction: X,
                        isLoading: O,
                        maxVisibleSkills: 6,
                        roots: G,
                        skillEntries: M,
                        onSkillsUpdated: H,
                      }),
                    })
                  : null),
              (b[63] = D),
              (b[64] = $),
              (b[65] = M),
              (b[66] = X),
              (b[67] = O),
              (b[68] = H),
              (b[69] = G),
              (b[70] = p))
            : (p = b[70]),
          (k =
            l.length > 0 && null != K
              ? (0, s.jsx)(m.t, {
                  className: "mb-2",
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: ee.formatMessage({
                    id: "skills.appsPage.skillDirectoryTabs.ariaLabel",
                    defaultMessage: "Skill directory",
                  }),
                  tabs: l.map(C),
                  selectedKey: K,
                  onSelect: q,
                })
              : null),
          (b[36] = U),
          (b[37] = D),
          (b[38] = $),
          (b[39] = w),
          (b[40] = M),
          (b[41] = X),
          (b[42] = ee),
          (b[43] = O),
          (b[44] = q),
          (b[45] = H),
          (b[46] = Z),
          (b[47] = G),
          (b[48] = K),
          (b[49] = Y),
          (b[50] = h),
          (b[51] = f),
          (b[52] = g),
          (b[53] = p),
          (b[54] = k))
      } else ((h = b[50]), (f = b[51]), (g = b[52]), (p = b[53]), (k = b[54]))
      return (
        b[71] !== L || b[72] !== D || b[73] !== X || b[74] !== O || b[75] !== H || b[76] !== G || b[77] !== h
          ? ((x =
              null != h
                ? (0, s.jsx)(E, {
                    onCardMount: es,
                    hostId: D,
                    installedStateAction: X,
                    highlightedSkillPath: L,
                    isLoading: O,
                    maxVisibleSkills: 6,
                    onSkillsUpdated: H,
                    roots: G,
                    skillEntries: h.skillEntries,
                  })
                : null),
            (b[71] = L),
            (b[72] = D),
            (b[73] = X),
            (b[74] = O),
            (b[75] = H),
            (b[76] = G),
            (b[77] = h),
            (b[78] = x))
          : (x = b[78]),
        b[79] !== S ||
        b[80] !== v ||
        b[81] !== et ||
        b[82] !== R ||
        b[83] !== D ||
        b[84] !== F ||
        b[85] !== T ||
        b[86] !== B ||
        b[87] !== Q ||
        b[88] !== Z?.id ||
        b[89] !== ei ||
        b[90] !== G ||
        b[91] !== K
          ? ((j =
              Z?.id === K
                ? (0, s.jsx)(z, {
                    canInstall: S,
                    errorMessage: v,
                    highlightInstalledSkills: !0,
                    hostId: D,
                    highlightedSkillId: R,
                    entries: ei,
                    installingSkillId: F,
                    isLoading: T,
                    onInstall: B,
                    onSkillsUpdated: et,
                    repoRoot: Q,
                    roots: G,
                  })
                : null),
            (b[79] = S),
            (b[80] = v),
            (b[81] = et),
            (b[82] = R),
            (b[83] = D),
            (b[84] = F),
            (b[85] = T),
            (b[86] = B),
            (b[87] = Q),
            (b[88] = Z?.id),
            (b[89] = ei),
            (b[90] = G),
            (b[91] = K),
            (b[92] = j))
          : (j = b[92]),
        b[93] !== x || b[94] !== j || b[95] !== f || b[96] !== g || b[97] !== p || b[98] !== k
          ? ((y = (0, s.jsxs)("div", { className: f, children: [g, p, k, x, j] })),
            (b[93] = x),
            (b[94] = j),
            (b[95] = f),
            (b[96] = g),
            (b[97] = p),
            (b[98] = k),
            (b[99] = y))
          : (y = b[99]),
        y
      )
    }
    function C(e) {
      let { id: l, label: t } = e
      return { key: l, name: t }
    }
    function _(e) {
      let l,
        t,
        r,
        c,
        m,
        h,
        f,
        g,
        p = (0, i.c)(24),
        { highlightedSuggestionId: k, suggestions: x } = e,
        { unreadSkillsSuggestions: y } = (0, n.Ul)(d.cx)
      p[0] !== y ? ((l = () => new Set(y.map(L))), (p[0] = y), (p[1] = l)) : (l = p[1])
      let [b] = (0, a.useState)(l)
      if (0 === x.length) return null
      if (p[2] !== b || p[3] !== x || p[4] !== y) {
        let e
        ;(p[6] !== b || p[7] !== y
          ? ((e = (e) => {
              let { id: l } = e
              return b.has(l) || y.some((e) => e.id === l)
            }),
            (p[6] = b),
            (p[7] = y),
            (p[8] = e))
          : (e = p[8]),
          (t = x.some(e)),
          (p[2] = b),
          (p[3] = x),
          (p[4] = y),
          (p[5] = t))
      } else t = p[5]
      let S = t
      if (
        (p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.sectionTitle",
              defaultMessage: "Based on your Computer History",
            })),
            (p[9] = r))
          : (r = p[9]),
        p[10] !== S
          ? ((c = S
              ? (0, s.jsx)("span", { "aria-hidden": !0, className: "ms-0.5 size-1.5 shrink-0 rounded-full bg-accent" })
              : null),
            (p[10] = S),
            (p[11] = c))
          : (c = p[11]),
        p[12] !== c ? ((m = (0, s.jsxs)(s.Fragment, { children: [r, c] })), (p[12] = c), (p[13] = m)) : (m = p[13]),
        p[14] !== k || p[15] !== x)
      ) {
        let e
        ;(p[17] !== k
          ? ((e = (e) => (0, s.jsx)(M, { isHighlighted: e.id === k, suggestion: e }, e.id)), (p[17] = k), (p[18] = e))
          : (e = p[18]),
          (h = x.map(e)),
          (p[14] = k),
          (p[15] = x),
          (p[16] = h))
      } else h = p[16]
      return (
        p[19] !== h ? ((f = (0, s.jsx)(j.q, { children: h })), (p[19] = h), (p[20] = f)) : (f = p[20]),
        p[21] !== m || p[22] !== f
          ? ((g = (0, s.jsx)(u.L, { id: "computer-history-suggested-skills", title: m, children: f })),
            (p[21] = m),
            (p[22] = f),
            (p[23] = g))
          : (g = p[23]),
        g
      )
    }
    function L(e) {
      let { id: l } = e
      return l
    }
    function E(e) {
      let l,
        t,
        n,
        a = (0, i.c)(39),
        {
          gap: r,
          hostId: d,
          highlightedSkillPath: u,
          installedStateAction: m,
          isLoading: h,
          isSingleColumn: g,
          maxVisibleSkills: p,
          roots: k,
          skillEntries: x,
          useCompactEmptyState: j,
          onCardMount: y,
          onSkillsUpdated: b,
        } = e,
        S = void 0 === m ? "check" : m,
        v = void 0 !== g && g,
        I = void 0 !== j && j
      if (h) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, s.jsx)(f.j, {
                  children: (0, s.jsx)(o.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                }),
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if (0 === x.length) {
        let e
        return (
          a[1] !== I
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: I
                  ? (0, s.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(o.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                      }),
                    })
                  : (0, s.jsx)(c.A, {
                      title: (0, s.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                    }),
              })),
              (a[1] = I),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (null == p) {
        let e,
          l = r ?? "default"
        return (
          a[3] !== u ||
          a[4] !== d ||
          a[5] !== S ||
          a[6] !== v ||
          a[7] !== y ||
          a[8] !== b ||
          a[9] !== k ||
          a[10] !== x ||
          a[11] !== l
            ? ((e = (0, s.jsx)(D, {
                onCardMount: y,
                gap: l,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: x,
                onSkillsUpdated: b,
              })),
              (a[3] = u),
              (a[4] = d),
              (a[5] = S),
              (a[6] = v),
              (a[7] = y),
              (a[8] = b),
              (a[9] = k),
              (a[10] = x),
              (a[11] = l),
              (a[12] = e))
            : (e = a[12]),
          e
        )
      }
      a[13] !== p || a[14] !== x.length
        ? ((l = H({ itemCount: x.length, visibleItemLimit: p })), (a[13] = p), (a[14] = x.length), (a[15] = l))
        : (l = a[15])
      let w = l
      if (null == w) {
        let e,
          l = r ?? "default"
        return (
          a[16] !== u ||
          a[17] !== d ||
          a[18] !== S ||
          a[19] !== v ||
          a[20] !== y ||
          a[21] !== b ||
          a[22] !== k ||
          a[23] !== x ||
          a[24] !== l
            ? ((e = (0, s.jsx)(D, {
                onCardMount: y,
                gap: l,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: x,
                onSkillsUpdated: b,
              })),
              (a[16] = u),
              (a[17] = d),
              (a[18] = S),
              (a[19] = v),
              (a[20] = y),
              (a[21] = b),
              (a[22] = k),
              (a[23] = x),
              (a[24] = l),
              (a[25] = e))
            : (e = a[25]),
          e
        )
      }
      return (
        a[26] !== r ||
        a[27] !== u ||
        a[28] !== d ||
        a[29] !== S ||
        a[30] !== v ||
        a[31] !== y ||
        a[32] !== b ||
        a[33] !== k
          ? ((t = (e) =>
              (0, s.jsx)(D, {
                onCardMount: y,
                gap: r ?? "compact",
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: e,
                onSkillsUpdated: b,
              })),
            (a[26] = r),
            (a[27] = u),
            (a[28] = d),
            (a[29] = S),
            (a[30] = v),
            (a[31] = y),
            (a[32] = b),
            (a[33] = k),
            (a[34] = t))
          : (t = a[34]),
        a[35] !== x || a[36] !== t || a[37] !== w
          ? ((n = (0, s.jsx)(A.Q, { items: x, visibleItemLimit: w, renderExpandRow: R, children: t })),
            (a[35] = x),
            (a[36] = t),
            (a[37] = w),
            (a[38] = n))
          : (n = a[38]),
        n
      )
    }
    function R(e) {
      let { hiddenItems: l, isExpanded: t, onToggle: i } = e
      return (0, s.jsx)(q, { isExpanded: t, skillNames: l.map(U), onClick: i })
    }
    function U(e) {
      let { skill: l } = e
      return (0, x.nf)(l)
    }
    function D(e) {
      let l,
        t,
        n = (0, i.c)(19),
        {
          gap: a,
          hostId: r,
          highlightedSkillPath: o,
          installedStateAction: d,
          isSingleColumn: c,
          roots: u,
          skillEntries: m,
          onCardMount: h,
          onSkillsUpdated: f,
        } = e,
        g = void 0 === a ? "default" : a
      if (n[0] !== o || n[1] !== r || n[2] !== d || n[3] !== h || n[4] !== f || n[5] !== u || n[6] !== m) {
        let e
        ;(n[8] !== o || n[9] !== r || n[10] !== d || n[11] !== h || n[12] !== f || n[13] !== u
          ? ((e = (e) => {
              let { skill: l } = e
              return (0, s.jsx)(
                F,
                {
                  installedStateAction: d,
                  hostId: r,
                  isHighlighted: o === l.path,
                  onCardMount: h,
                  onSkillsUpdated: f,
                  roots: u,
                  skill: l,
                },
                l.path,
              )
            }),
            (n[8] = o),
            (n[9] = r),
            (n[10] = d),
            (n[11] = h),
            (n[12] = f),
            (n[13] = u),
            (n[14] = e))
          : (e = n[14]),
          (l = m.map(e)),
          (n[0] = o),
          (n[1] = r),
          (n[2] = d),
          (n[3] = h),
          (n[4] = f),
          (n[5] = u),
          (n[6] = m),
          (n[7] = l))
      } else l = n[7]
      return (
        n[15] !== g || n[16] !== c || n[17] !== l
          ? ((t = (0, s.jsx)(j.q, { gap: g, isSingleColumn: c, children: l })),
            (n[15] = g),
            (n[16] = c),
            (n[17] = l),
            (n[18] = t))
          : (t = n[18]),
        t
      )
    }
    function F(e) {
      let l,
        t,
        n,
        o,
        d,
        c,
        u,
        m = (0, i.c)(28),
        {
          hostId: h,
          installedStateAction: f,
          isHighlighted: p,
          onCardMount: j,
          onSkillsUpdated: y,
          roots: b,
          skill: S,
        } = e,
        v = (0, r.A)(),
        I = (0, a.useRef)(null)
      m[0] !== f || m[1] !== v || m[2] !== b || m[3] !== S
        ? ((l = "toggle" === f ? (0, g.IG)({ skill: S, roots: b, intl: v }) : void 0),
          (m[0] = f),
          (m[1] = v),
          (m[2] = b),
          (m[3] = S),
          (m[4] = l))
        : (l = m[4])
      let w = l
      ;(m[5] !== f || m[6] !== j || m[7] !== S
        ? ((t = (e) => {
            ;((I.current = e), null != e && "menu" !== f && j?.(S.path, e))
          }),
          (m[5] = f),
          (m[6] = j),
          (m[7] = S),
          (m[8] = t))
        : (t = m[8]),
        m[9] !== f ? ((n = "toggle" === f ? (0, s.jsx)(O, {}) : void 0), (m[9] = f), (m[10] = n)) : (n = m[10]))
      let M = "toggle" !== f
      return (
        m[11] !== S ? ((o = (0, x.nf)(S)), (m[11] = S), (m[12] = o)) : (o = m[12]),
        m[13] !== y || m[14] !== S
          ? ((d = (e, l) => {
              let t = I.current
              if (l && null != t) {
                let l = t.ownerDocument.activeElement
                if (l === t.ownerDocument.body || t.contains(l)) return void y(e, S.path)
              }
              y(e)
            }),
            (m[13] = y),
            (m[14] = S),
            (m[15] = d))
          : (d = m[15]),
        m[16] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (m[16] = c)) : (c = m[16]),
        m[17] !== w ||
        m[18] !== h ||
        m[19] !== f ||
        m[20] !== p ||
        m[21] !== S ||
        m[22] !== t ||
        m[23] !== n ||
        m[24] !== M ||
        m[25] !== o ||
        m[26] !== d
          ? ((u = (0, s.jsx)(k.A, {
              cardRef: t,
              cardIcon: n,
              cardIconContainer: M,
              actionLabel: w,
              displayName: o,
              hostId: h,
              installedStateAction: f,
              isHighlighted: p,
              onSkillsUpdated: d,
              scopeBadges: c,
              skill: S,
            })),
            (m[17] = w),
            (m[18] = h),
            (m[19] = f),
            (m[20] = p),
            (m[21] = S),
            (m[22] = t),
            (m[23] = n),
            (m[24] = M),
            (m[25] = o),
            (m[26] = d),
            (m[27] = u))
          : (u = m[27]),
        u
      )
    }
    function O() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("span", {
              className:
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-default text-secondary",
              children: (0, s.jsx)(h.A, { className: "icon-sm" }),
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    function z(e) {
      let l,
        t = (0, i.c)(17),
        {
          canInstall: n,
          entries: a,
          errorMessage: r,
          highlightInstalledSkills: d,
          hostId: u,
          highlightedSkillId: m,
          installingSkillId: h,
          isLoading: g,
          onInstall: p,
          onSkillsUpdated: k,
          repoRoot: x,
          roots: j,
          showAll: y,
        } = e,
        b = void 0 !== y && y
      if (g) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, s.jsx)(f.j, {
                  children: (0, s.jsx)(o.A, { id: "skills.page.loading", defaultMessage: "Loading skills\u2026" }),
                }),
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      if (r) {
        let e, l
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(o.A, {
                id: "skills.recommended.error",
                defaultMessage: "Unable to load recommended skills",
              })),
              (t[1] = e))
            : (e = t[1]),
          t[2] !== r
            ? ((l = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, s.jsx)(c.A, { title: e, description: r }),
              })),
              (t[2] = r),
              (t[3] = l))
            : (l = t[3]),
          l
        )
      }
      if (0 === a.length) {
        let e
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, s.jsx)(c.A, {
                  title: (0, s.jsx)(o.A, { id: "skills.appsPage.empty.skills", defaultMessage: "No skills found" }),
                }),
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        )
      }
      return (
        t[5] !== n ||
        t[6] !== a ||
        t[7] !== d ||
        t[8] !== m ||
        t[9] !== u ||
        t[10] !== h ||
        t[11] !== p ||
        t[12] !== k ||
        t[13] !== x ||
        t[14] !== j ||
        t[15] !== b
          ? ((l = (0, s.jsx)(s.Fragment, {
              children: b
                ? (0, s.jsx)(W, {
                    canInstall: n,
                    entries: a,
                    highlightInstalledSkills: d,
                    hostId: u,
                    highlightedSkillId: m,
                    installingSkillId: h,
                    onInstall: p,
                    onSkillsUpdated: k,
                    repoRoot: x,
                    roots: j,
                  })
                : (0, s.jsx)(A.Q, {
                    items: a,
                    visibleItemLimit: H({ itemCount: a.length, visibleItemLimit: 6 }) ?? a.length,
                    renderExpandRow: T,
                    children: (e) =>
                      (0, s.jsx)(W, {
                        canInstall: n,
                        entries: e,
                        highlightInstalledSkills: d,
                        hostId: u,
                        highlightedSkillId: m,
                        installingSkillId: h,
                        onInstall: p,
                        onSkillsUpdated: k,
                        repoRoot: x,
                        roots: j,
                      }),
                  }),
            })),
            (t[5] = n),
            (t[6] = a),
            (t[7] = d),
            (t[8] = m),
            (t[9] = u),
            (t[10] = h),
            (t[11] = p),
            (t[12] = k),
            (t[13] = x),
            (t[14] = j),
            (t[15] = b),
            (t[16] = l))
          : (l = t[16]),
        l
      )
    }
    function T(e) {
      let { hiddenItems: l, isExpanded: t, onToggle: i } = e
      return (0, s.jsx)(q, { isExpanded: t, skillNames: l.map(B), onClick: i })
    }
    function B(e) {
      let { skill: l } = e
      return l.name
    }
    function W(e) {
      let l,
        t,
        n = (0, i.c)(23),
        {
          canInstall: a,
          entries: r,
          highlightInstalledSkills: o,
          hostId: d,
          highlightedSkillId: c,
          installingSkillId: u,
          onInstall: m,
          onSkillsUpdated: h,
          repoRoot: f,
          roots: g,
        } = e
      if (
        n[0] !== a ||
        n[1] !== r ||
        n[2] !== o ||
        n[3] !== c ||
        n[4] !== d ||
        n[5] !== u ||
        n[6] !== m ||
        n[7] !== h ||
        n[8] !== f ||
        n[9] !== g
      ) {
        let e
        ;(n[11] !== a ||
        n[12] !== o ||
        n[13] !== c ||
        n[14] !== d ||
        n[15] !== u ||
        n[16] !== m ||
        n[17] !== h ||
        n[18] !== f ||
        n[19] !== g
          ? ((e = (e) => {
              let { installedSkill: l, isInstalled: t, skill: i } = e
              return null != l
                ? (0, s.jsx)(
                    F,
                    {
                      hostId: d,
                      installedStateAction: "menu",
                      isHighlighted: o || c === i.id,
                      onSkillsUpdated: (e, l) => {
                        e && h(l)
                      },
                      roots: g,
                      skill: l,
                    },
                    i.id,
                  )
                : (0, s.jsx)(
                    p.D,
                    {
                      canInstall: a,
                      hostId: d,
                      isHighlighted: t || c === i.id,
                      isInstalled: t,
                      isInstalling: u === i.id,
                      onInstall: m,
                      repoRoot: f,
                      skill: i,
                    },
                    i.id,
                  )
            }),
            (n[11] = a),
            (n[12] = o),
            (n[13] = c),
            (n[14] = d),
            (n[15] = u),
            (n[16] = m),
            (n[17] = h),
            (n[18] = f),
            (n[19] = g),
            (n[20] = e))
          : (e = n[20]),
          (l = r.map(e)),
          (n[0] = a),
          (n[1] = r),
          (n[2] = o),
          (n[3] = c),
          (n[4] = d),
          (n[5] = u),
          (n[6] = m),
          (n[7] = h),
          (n[8] = f),
          (n[9] = g),
          (n[10] = l))
      } else l = n[10]
      return (
        n[21] !== l ? ((t = (0, s.jsx)(j.q, { gap: "compact", children: l })), (n[21] = l), (n[22] = t)) : (t = n[22]),
        t
      )
    }
    function q(e) {
      let l,
        t,
        n,
        a = (0, i.c)(9),
        { isExpanded: r, skillNames: d, onClick: c } = e
      a[0] !== d ? ((l = d.slice(0, 2).join(", ")), (a[0] = d), (a[1] = l)) : (l = a[1])
      let u = Math.max(d.length - 2, 0)
      return (
        a[2] !== l || a[3] !== u
          ? ((t = (0, s.jsx)(o.A, {
              id: "skills.appsPage.section.seeAllSkillsDescription",
              defaultMessage: "See {skillNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}",
              values: { skillNames: l, remainingCount: u },
            })),
            (a[2] = l),
            (a[3] = u),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== r || a[6] !== c || a[7] !== t
          ? ((n = (0, s.jsx)(A.s, { isExpanded: r, onClick: c, children: t })),
            (a[5] = r),
            (a[6] = c),
            (a[7] = t),
            (a[8] = n))
          : (n = a[8]),
        n
      )
    }
    function H({ itemCount: e, visibleItemLimit: l }) {
      return e - l >= 3 ? l : void 0
    }
  },
  XvU9(e, l, t) {
    t.d(l, { zS: () => A, Cy: () => w, Jc: () => M, p1: () => I })
    var s = t("ABep"),
      i = t("QosV"),
      n = t("xSOA"),
      a = t("qmMi"),
      r = t("zKw6"),
      o = t.n(r),
      d = t("zd8w"),
      c = t("oyxz"),
      u = t("SGsN"),
      m = t("MI1z"),
      h = t("GaA7"),
      f = t("OWtl"),
      g = t("ndjw"),
      p = t("kfGJ"),
      k = t("njDi"),
      x = t("f22a"),
      j = t("oom3"),
      y = t("UmGt"),
      b = t("t4SC")
    function S(e, l) {
      let t = l.toLowerCase()
      return (
        e.find((e) => {
          let l = e.name.toLowerCase(),
            s = e.id.toLowerCase()
          return l === t || s === t
        }) ?? null
      )
    }
    var v = t("bPa2")
    function I(e) {
      let l,
        t,
        s = (0, i.c)(6),
        n = void 0 === e ? p.fI : e,
        a = (0, m.y)(n),
        r = h.appServices?.recommendedSkills != null && null != a
      s[0] !== a
        ? ((l = null == a ? null : o().join(a, "vendor_imports", "skills")), (s[0] = a), (s[1] = l))
        : (l = s[1])
      let d = null == a ? null : `${a}/skills/.system/skill-creator/SKILL.md`
      return (
        s[2] !== r || s[3] !== l || s[4] !== d
          ? ((t = { canInstallRecommendedSkills: r, defaultRecommendedRepoRoot: l, skillCreatorPath: d }),
            (s[2] = r),
            (s[3] = l),
            (s[4] = d),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    function w(e) {
      let l,
        t,
        s,
        n,
        r,
        o,
        d,
        c,
        u,
        m = (0, i.c)(27),
        h = void 0 === e ? p.fI : e,
        y = (0, a.gh)(f.u)
      m[0] !== h ? ((l = { hostId: h }), (m[0] = h), (m[1] = l)) : (l = m[1])
      let b = (0, a._U)(g.FM, l)
      m[2] !== b.data?.roots ? ((t = b.data?.roots ?? []), (m[2] = b.data?.roots), (m[3] = t)) : (t = m[3])
      let S = t,
        { skills: I, isFetching: w, isLoading: M, forceReload: A } = (0, v.a)(S, h)
      m[4] !== A
        ? ((s = async () => {
            await A()
          }),
          (m[4] = A),
          (m[5] = s))
        : (s = m[5])
      let N = s
      if (m[6] !== N || m[7] !== I) {
        let e
        ;((n = (0, j.i6)(I)),
          m[12] !== I ? ((e = (0, x.cy)(I)), (m[12] = I), (m[13] = e)) : (e = m[13]),
          (r = e),
          (o = N),
          (d = (0, x.OP)(n)),
          (m[6] = N),
          (m[7] = I),
          (m[8] = n),
          (m[9] = r),
          (m[10] = o),
          (m[11] = d))
      } else ((n = m[8]), (r = m[9]), (o = m[10]), (d = m[11]))
      let P = b.isFetching || w,
        C = b.isLoading || M
      return (
        m[14] !== N || m[15] !== y
          ? ((c = () => {
              ;((0, k.j)(y.queryClient), N())
            }),
            (m[14] = N),
            (m[15] = y),
            (m[16] = c))
          : (c = m[16]),
        m[17] !== n ||
        m[18] !== I ||
        m[19] !== r ||
        m[20] !== o ||
        m[21] !== d ||
        m[22] !== P ||
        m[23] !== C ||
        m[24] !== c ||
        m[25] !== S
          ? ((u = {
              forceReloadSkills: o,
              installedSkillMatchKeys: d,
              installedSkillMetadata: I,
              isFetching: P,
              isLoading: C,
              markSkillsUpdated: c,
              skills: n,
              standaloneInstalledSkills: r,
              workspaceRoots: S,
            }),
            (m[17] = n),
            (m[18] = I),
            (m[19] = r),
            (m[20] = o),
            (m[21] = d),
            (m[22] = P),
            (m[23] = C),
            (m[24] = c),
            (m[25] = S),
            (m[26] = u))
          : (u = m[26]),
        u
      )
    }
    function M(e, l, t) {
      let s,
        n,
        r,
        o,
        d = (0, i.c)(15)
      d[0] !== l || d[1] !== t ? ((s = { hostId: l, loadOnMount: t }), (d[0] = l), (d[1] = t), (d[2] = s)) : (s = d[2])
      let {
          data: c,
          errorMessage: u,
          isLoading: m,
          refresh: h,
        } = (function (e) {
          let l,
            t,
            s,
            n,
            r,
            o = (0, i.c)(19),
            { hostId: d, loadOnMount: c } = e,
            u = void 0 === c || c,
            m = (0, a.gh)(f.u)
          o[0] !== u ? ((l = { enabled: u }), (o[0] = u), (o[1] = l)) : (l = o[1])
          let h = (0, a._U)(b.ev, d, l),
            g = h.data?.error ?? (h.error ? (h.error.message ?? h.error) : null)
          o[2] !== d || o[3] !== m
            ? ((t = async () => {
                let e = await (0, b.q_)({ hostId: d, refresh: !0 })
                m.query.setData(b.ev, d, e)
              }),
              (o[2] = d),
              (o[3] = m),
              (o[4] = t))
            : (t = o[4])
          let p = t
          o[5] !== d || o[6] !== h.data?.skills || o[7] !== m
            ? ((s = async (e) => {
                let l = S(h.data?.skills ?? [], e)
                if (l) return l
                let t = await (0, b.q_)({ hostId: d, refresh: !1 })
                return (m.query.setData(b.ev, d, t), S(t.skills, e))
              }),
              (o[5] = d),
              (o[6] = h.data?.skills),
              (o[7] = m),
              (o[8] = s))
            : (s = o[8])
          let k = s
          o[9] !== d || o[10] !== m
            ? ((n = async (e) => {
                let { skill: l, installRoot: t } = e
                return (0, b.kL)({
                  hostId: d,
                  skillId: l.id,
                  repoPath: l.repoPath,
                  installRoot: void 0 === t ? null : t,
                  skillStatsigOverride: await (0, y.Uu)(m, l.id),
                })
              }),
              (o[9] = d),
              (o[10] = m),
              (o[11] = n))
            : (n = o[11])
          let x = n
          return (
            o[12] !== k || o[13] !== g || o[14] !== x || o[15] !== h.data || o[16] !== h.isLoading || o[17] !== p
              ? ((r = {
                  data: h.data,
                  errorMessage: g,
                  isLoading: h.isLoading,
                  refresh: p,
                  ensureSkillByName: k,
                  installSkill: x,
                }),
                (o[12] = k),
                (o[13] = g),
                (o[14] = x),
                (o[15] = h.data),
                (o[16] = h.isLoading),
                (o[17] = p),
                (o[18] = r))
              : (r = o[18]),
            r
          )
        })(s),
        g = t ? u : null,
        p = t && m
      d[3] !== t || d[4] !== h
        ? ((n = async () => {
            t && (await h())
          }),
          (d[3] = t),
          (d[4] = h),
          (d[5] = n))
        : (n = d[5])
      let k = t ? (c?.repoRoot ?? e) : null
      return (
        d[6] !== c?.skills || d[7] !== t
          ? ((r = t ? (c?.skills ?? []) : []), (d[6] = c?.skills), (d[7] = t), (d[8] = r))
          : (r = d[8]),
        d[9] !== g || d[10] !== p || d[11] !== n || d[12] !== k || d[13] !== r
          ? ((o = { errorMessage: g, isLoading: p, refresh: n, repoRoot: k, skills: r }),
            (d[9] = g),
            (d[10] = p),
            (d[11] = n),
            (d[12] = k),
            (d[13] = r),
            (d[14] = o))
          : (o = d[14]),
        o
      )
    }
    function A(e) {
      let l,
        t,
        r,
        o,
        h,
        g,
        p,
        x = (0, i.c)(20),
        { forceReloadSkills: j, hostId: S, onInstalled: v } = e,
        I = (0, a.gh)(f.u),
        w = null != (0, m.y)(S),
        [M, A] = (0, d.useState)(null)
      x[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = Symbol()), (x[0] = l)) : (l = x[0])
      let N = (0, d.useRef)(l)
      x[1] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (x[1] = t)) : (t = x[1])
      let [P, C] = (0, d.useState)(t)
      x[2] !== I
        ? ((r = {
            mutationFn: async (e) => (0, b.kL)({ ...e, skillStatsigOverride: await (0, y.Uu)(I, e.skillId) }),
            networkMode: "always",
          }),
          (x[2] = I),
          (x[3] = r))
        : (r = x[3])
      let _ = (0, n.n)(r)
      ;(x[4] !== S
        ? ((o = () => {
            ;((N.current = Symbol()), A(null), C((e) => ({ ...e, [S]: [] })))
          }),
          (x[4] = S),
          (x[5] = o))
        : (o = x[5]),
        x[6] !== w || x[7] !== j || x[8] !== S || x[9] !== _ || x[10] !== v || x[11] !== I
          ? ((h = (e, l) => {
              if (!w) return
              let t = N.current
              ;(A(e.id),
                _.mutate(
                  { hostId: S, skillId: e.id, repoPath: e.repoPath, installRoot: l },
                  {
                    onSuccess: (l, i) => {
                      l.success &&
                        N.current === t &&
                        (C((e) => {
                          let l = e[i.hostId]
                          return l?.includes(i.skillId) ? e : { ...e, [i.hostId]: [...(l ?? []), i.skillId] }
                        }),
                        (0, k.j)(I.queryClient),
                        j(),
                        v?.(),
                        I.get(u.Id).success(
                          (0, s.jsx)(c.A, {
                            id: "skills.recommended.installSuccess",
                            defaultMessage: "{skillName} skill installed",
                            values: { skillName: (0, s.jsx)("span", { className: "font-medium", children: e.name }) },
                          }),
                        ))
                    },
                    onSettled: () => {
                      N.current === t && A((l) => (l === e.id ? null : l))
                    },
                  },
                ))
            }),
            (x[6] = w),
            (x[7] = j),
            (x[8] = S),
            (x[9] = _),
            (x[10] = v),
            (x[11] = I),
            (x[12] = h))
          : (h = x[12]))
      let L = P[S]
      return (
        x[13] !== L ? ((g = new Set(L)), (x[13] = L), (x[14] = g)) : (g = x[14]),
        x[15] !== M || x[16] !== o || x[17] !== h || x[18] !== g
          ? ((p = {
              clearInstalledRecommendedSkills: o,
              installRecommendedSkill: h,
              installedRecommendedSkillIds: g,
              installingSkillId: M,
            }),
            (x[15] = M),
            (x[16] = o),
            (x[17] = h),
            (x[18] = g),
            (x[19] = p))
          : (p = x[19]),
        p
      )
    }
  },
  NVRI(e, l, t) {
    var s = t("ABep"),
      i = t("QosV"),
      n = t("slpy"),
      a = t("suct"),
      r = t("K4Cx"),
      o = t("iodE"),
      d = t("qmMi"),
      c = t("Wf1j"),
      u = t("jNL7"),
      m = t("gbrq"),
      h = t("T1PX"),
      f = t("V8uZ"),
      g = t("Zt82"),
      p = t("ZEXA")
    function k(e) {
      let l,
        t,
        n,
        a,
        d = (0, i.c)(12),
        { children: c, shouldReduceMotion: u, transition: m } = e,
        h = (0, o.tF)(),
        f = !h,
        g = !h
      ;(d[0] !== u ? ((l = !u && { opacity: 0, x: -4 }), (d[0] = u), (d[1] = l)) : (l = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { opacity: 1, x: 0 }), (d[2] = t)) : (t = d[2]))
      let p = u ? 0 : -4
      return (
        d[3] !== p ? ((n = { opacity: 0, x: p }), (d[3] = p), (d[4] = n)) : (n = d[4]),
        d[5] !== c || d[6] !== f || d[7] !== g || d[8] !== l || d[9] !== n || d[10] !== m
          ? ((a = (0, s.jsx)(r.P.div, {
              "aria-hidden": f,
              inert: g,
              layout: "position",
              className: "flex min-w-0 items-center gap-1",
              initial: l,
              animate: t,
              exit: n,
              transition: m,
              children: c,
            })),
            (d[5] = c),
            (d[6] = f),
            (d[7] = g),
            (d[8] = l),
            (d[9] = n),
            (d[10] = m),
            (d[11] = a))
          : (a = d[11]),
        a
      )
    }
    function x(e) {
      let l,
        t,
        a,
        r,
        o = (0, i.c)(14),
        { project: u } = e,
        h = (0, c.A)()
      ;((0, d.Ul)(m.s1),
        o[0] !== h || o[1] !== u.name
          ? ((l = (0, g.V)(h, u.name)), (o[0] = h), (o[1] = u.name), (o[2] = l))
          : (l = o[2]))
      let f = l,
        p = u.iconInteractive ? void 0 : null == f,
        k = u.iconInteractive ? void 0 : f,
        x = u.iconInteractive ? void 0 : "img"
      return (
        o[3] !== u.icon || o[4] !== p || o[5] !== k || o[6] !== x
          ? ((t = (0, s.jsx)("span", {
              "aria-hidden": p,
              "aria-label": k,
              className:
                "pointer-events-auto flex aspect-square h-token-button-composer shrink-0 items-center justify-center no-drag",
              role: x,
              children: u.icon,
            })),
            (o[3] = u.icon),
            (o[4] = p),
            (o[5] = k),
            (o[6] = x),
            (o[7] = t))
          : (t = o[7]),
        o[8] !== u.name || o[9] !== t
          ? ((a = (0, s.jsx)(n.m, { content: u.name, children: t })), (o[8] = u.name), (o[9] = t), (o[10] = a))
          : (a = o[10]),
        null !== o[11] || o[12] !== a
          ? ((r = (0, s.jsxs)(s.Fragment, { children: [null, a] })), (o[11] = null), (o[12] = a), (o[13] = r))
          : (r = o[13]),
        r
      )
    }
    t.d(
      l,
      {},
      {
        H: x,
        J: function (e) {
          let l,
            t,
            n,
            o,
            d,
            c,
            m,
            g,
            j,
            y,
            b,
            S = (0, i.c)(38),
            {
              animateIdentity: v,
              className: I,
              inset: w,
              start: M,
              startActions: A,
              env: N,
              leading: P,
              project: C,
              titleIncludesProject: _,
              secondary: L,
              trailing: E,
              hostConfig: R,
            } = e,
            U = void 0 !== v && v,
            D = void 0 === w ? "tab-strip" : w,
            F = void 0 !== _ && _,
            O = (0, h.I)()
          S[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (S[0] = l)) : (l = S[0])
          let z = l,
            T = z.length > 0,
            B = null != E && T
          S[1] !== C || S[2] !== F
            ? ((t = null == C || (F && !C.iconInteractive) ? null : (0, s.jsx)(x, { project: C })),
              (S[1] = C),
              (S[2] = F),
              (S[3] = t))
            : (t = S[3])
          let W = t,
            q = 0.3 * !O
          S[4] !== q ? ((n = { duration: q, ease: f.Wu }), (S[4] = q), (S[5] = n)) : (n = S[5])
          let H = n
          S[6] !== U || S[7] !== H || S[8] !== P || S[9] !== C || S[10] !== W || S[11] !== O || S[12] !== M
            ? ((o =
                U || null != C || M
                  ? (0, s.jsxs)("div", {
                      className: "flex min-w-0 items-center gap-1",
                      children: [
                        P,
                        U
                          ? (0, s.jsx)(a.N, {
                              initial: !1,
                              mode: "popLayout",
                              children:
                                null != W || M
                                  ? (0, s.jsxs)(
                                      k,
                                      {
                                        shouldReduceMotion: O,
                                        transition: H,
                                        children: [
                                          W,
                                          M
                                            ? (0, s.jsx)("div", {
                                                className:
                                                  "max-w-[320px] min-w-0 truncate focus-within:overflow-visible",
                                                children: M,
                                              })
                                            : null,
                                        ],
                                      },
                                      "thread-identity",
                                    )
                                  : null,
                            })
                          : null,
                        U ? null : W,
                        M && !U
                          ? (0, s.jsx)("div", {
                              className: "max-w-[320px] min-w-0 truncate focus-within:overflow-visible",
                              children: M,
                            })
                          : null,
                      ],
                    })
                  : null),
              (S[6] = U),
              (S[7] = H),
              (S[8] = P),
              (S[9] = C),
              (S[10] = W),
              (S[11] = O),
              (S[12] = M),
              (S[13] = o))
            : (o = S[13])
          let Q = !!U && "position"
          return (
            S[14] !== N || S[15] !== R
              ? ((d =
                  "remote" === N
                    ? null != R
                      ? (0, s.jsx)(p.pZ, { hostId: R.id })
                      : null
                    : "worktree" === N
                      ? (0, s.jsx)(p.eL, {})
                      : "local" === N
                        ? (0, s.jsx)(p.MI, {})
                        : null),
                (S[14] = N),
                (S[15] = R),
                (S[16] = d))
              : (d = S[16]),
            S[17] !== L
              ? ((c = L
                  ? (0, s.jsx)("div", {
                      className: "flex min-w-0 truncate leading-[18px] font-normal text-codex-description",
                      children: L,
                    })
                  : null),
                (S[17] = L),
                (S[18] = c))
              : (c = S[18]),
            S[19] !== H || S[20] !== A || S[21] !== d || S[22] !== c || S[23] !== Q
              ? ((m = (0, s.jsxs)(r.P.div, {
                  layout: Q,
                  className: "flex min-w-0 items-center gap-1",
                  transition: H,
                  children: [d, c, A],
                })),
                (S[19] = H),
                (S[20] = A),
                (S[21] = d),
                (S[22] = c),
                (S[23] = Q),
                (S[24] = m))
              : (m = S[24]),
            S[25] !== m || S[26] !== o
              ? ((g = (0, s.jsxs)("div", {
                  className:
                    "text-md flex min-w-0 flex-1 items-center gap-0 truncate text-base focus-within:overflow-visible electron:font-medium",
                  children: [o, m],
                })),
                (S[25] = m),
                (S[26] = o),
                (S[27] = g))
              : (g = S[27]),
            S[28] !== B
              ? ((j = T
                  ? (0, s.jsxs)("div", {
                      className: "flex items-center gap-0.5",
                      children: [B ? (0, s.jsx)("div", { className: "mx-2 h-[16px] w-px bg-border" }) : null, z],
                    })
                  : null),
                (S[28] = B),
                (S[29] = j))
              : (j = S[29]),
            S[30] !== j || S[31] !== E
              ? ((y = (0, s.jsxs)(u.G.HeaderToolbar.Actions, { children: [E, j] })),
                (S[30] = j),
                (S[31] = E),
                (S[32] = y))
              : (y = S[32]),
            S[33] !== I || S[34] !== D || S[35] !== g || S[36] !== y
              ? ((b = (0, s.jsxs)(u.G.HeaderToolbar, { className: I, inset: D, children: [g, y] })),
                (S[33] = I),
                (S[34] = D),
                (S[35] = g),
                (S[36] = y),
                (S[37] = b))
              : (b = S[37]),
            b
          )
        },
      },
    )
  },
  vOoA(e, l, t) {
    t.d(
      l,
      {},
      {
        a: function ({
          size: e,
          hasLargeIcon: l,
          smallClassName: t = "icon-md",
          largeFallbackClassName: s = "h-5 w-5",
        }) {
          return "large" === e ? (l ? "h-full w-full" : s) : t
        },
      },
    )
  },
}
//# sourceMappingURL=604319.2bc75ad42a.js.map
