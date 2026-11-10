export const __rspack_esm_ids = [604319]
export const __webpack_modules__ = {
  xcgE(e, l, s) {
    var t = s("DBCl"),
      i = s("Qgfj"),
      n = s("H7Ld")
    let a = (0, i.zR)({
      id: "settings.chronicle.history.pluginDisplayName",
      defaultMessage: "Computer History",
      description: "Display name of the Computer History plugin in a prefilled conversation mention",
    })
    s.d(
      l,
      {},
      {
        b: a,
        c: function ({ intl: e, memoryFilePath: l, suggestion: s }) {
          return (0, n.KH)({
            defaultPrompt:
              "skill" === s.type
                ? e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedSkillPrompt",
                      defaultMessage:
                        'Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"',
                      description:
                        "Prefilled conversation request for creating a named reusable skill from a Computer history suggestion",
                    },
                    { name: s.name, request: s.description, memoryFilePath: l, paragraphBreak: "\n\n" },
                  )
                : e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedAutomationPrompt",
                      defaultMessage:
                        'Create a new "{name}" automation based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"{paragraphBreak}Use my local timezone and a new chat for scheduled runs.',
                      description:
                        "Prefilled conversation request for creating a named automation from a Computer history suggestion",
                    },
                    { name: s.name, request: s.description, memoryFilePath: l, paragraphBreak: "\n\n" },
                  ),
            pluginDisplayName: e.formatMessage(a),
            pluginId: `${t.IW7}@${t.MY3}`,
          })
        },
      },
    )
  },
  SIRb(e, l, s) {
    let t
    s.d(
      l,
      {},
      {
        A8: async function () {
          return (await s.e(195959).then(s.bind(s, "j5ZC"))).startSkillCreatorChat
        },
        Nm: async function () {
          return (await s.e(484610).then(s.bind(s, "FLsU"))).ReusableWorkflowTipSource
        },
        ON: async function () {
          return (
            await Promise.all([
              s.e(702243),
              s.e(310423),
              s.e(380245),
              s.e(398689),
              s.e(730496),
              s.e(707617),
              s.e(594156),
              s.e(305846),
            ]).then(s.bind(s, "KyAJ"))
          ).SkillDetails
        },
        Zd: async function () {
          let e = await s.e(912488).then(s.bind(s, "V0oe"))
          return ((t = e.submitWithBrowserSkills), e.BrowserSkillsComposer)
        },
        Zg: function (e) {
          return (
            t ??
            (e
              ? s
                  .e(675898)
                  .then(s.bind(s, "lsOY"))
                  .then((e) => (t = e.submitWithBrowserSkills))
              : void 0)
          )
        },
        ht: async function () {
          return (await s.e(919572).then(s.bind(s, "Xsss"))).HostedSkillMention
        },
        iw: async function () {
          return (
            await Promise.all([
              s.e(702243),
              s.e(310423),
              s.e(380245),
              s.e(398689),
              s.e(730496),
              s.e(286353),
              s.e(215515),
              s.e(961657),
              s.e(538945),
              s.e(7104),
              s.e(704837),
              s.e(978887),
              s.e(565116),
              s.e(514115),
              s.e(292339),
              s.e(594156),
              s.e(492075),
              s.e(765061),
            ]).then(s.bind(s, "OeSF"))
          ).BrowserSkillsDirectory
        },
        loadSkillData: async function () {
          return s.e(190944).then(s.bind(s, "jxLz"))
        },
        pI: async function () {
          return (
            await Promise.all([s.e(652500), s.e(473403), s.e(801119), s.e(569156), s.e(707617), s.e(473177)]).then(
              s.bind(s, "EOSE"),
            )
          ).BrowserSkillEditor
        },
      },
    )
  },
  IXY8(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("slpy"),
      a = s("Ks4B"),
      o = s("zd8w"),
      r = s("Wf1j"),
      d = s("oyxz"),
      c = s("ygO2"),
      u = s("bqtn"),
      m = s("GO7r"),
      h = s("YjNN"),
      f = s("KxVC"),
      p = s("kfGJ"),
      g = s("QyE3")
    function k() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("span", {
              "aria-hidden": !0,
              className: "block size-2 shrink-0 rounded-full bg-green-500",
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    s.d(
      l,
      {},
      {
        r: function (e) {
          let l,
            s,
            x,
            b,
            j,
            y,
            S,
            v,
            w,
            I = (0, i.c)(36),
            {
              connectedRemoteConnections: M,
              disabled: A,
              includeLocalHost: N,
              onSelectHost: C,
              selectedHostId: _,
              align: L,
              contentWidth: E,
              localIcon: P,
              localLabel: T,
              showConnectedIndicator: R,
              triggerVariant: B,
            } = e,
            U = void 0 !== A && A,
            F = void 0 === N || N,
            O = void 0 === P ? h.A : P,
            D = void 0 !== R && R,
            z = void 0 === B ? "selected-host" : B,
            H = (0, r.A)(),
            [q, Q] = (0, o.useState)(!1)
          I[0] !== M || I[1] !== _
            ? ((l = M.find((e) => e.hostId === _) ?? null), (I[0] = M), (I[1] = _), (I[2] = l))
            : (l = I[2])
          let G = l
          I[3] !== H || I[4] !== T
            ? ((s =
                T ??
                H.formatMessage({
                  id: "settings.hostDropdown.local",
                  defaultMessage: "Local",
                  description: "Label for the local host in settings connection dropdowns",
                })),
              (I[3] = H),
              (I[4] = T),
              (I[5] = s))
            : (s = I[5])
          let V = s,
            W = G?.displayName ?? V
          ;(I[6] !== F || I[7] !== V
            ? ((x = F ? [{ hostId: p.fI, displayName: V }] : []), (I[6] = F), (I[7] = V), (I[8] = x))
            : (x = I[8]),
            I[9] !== M || I[10] !== x ? ((b = [...x, ...M]), (I[9] = M), (I[10] = x), (I[11] = b)) : (b = I[11]))
          let K = b
          I[12] !== H
            ? ((j = H.formatMessage({
                id: "settings.hostDropdown.filter",
                defaultMessage: "Filter settings by host",
                description: "Tooltip and accessible label for the settings host filter dropdown button",
              })),
              (I[12] = H),
              (I[13] = j))
            : (j = I[13])
          let J = j
          I[14] !== O ||
          I[15] !== U ||
          I[16] !== J ||
          I[17] !== q ||
          I[18] !== W ||
          I[19] !== G ||
          I[20] !== D ||
          I[21] !== z
            ? ((y =
                "filter" === z
                  ? (0, t.jsx)(n.m, {
                      content: J,
                      disabled: U || q,
                      children: (0, t.jsx)(c.$, {
                        className: "sidebar-icon-button sidebar-hover-icon-button-tint",
                        "aria-label": J,
                        color: "ghostMuted",
                        disabled: U,
                        size: "compact",
                        uniform: !0,
                        children: (0, t.jsx)(m.uG0, {}),
                      }),
                    })
                  : (0, t.jsxs)(g.vg, {
                      disabled: U,
                      chevronClassName: U ? "hidden" : void 0,
                      children: [
                        null != G
                          ? (0, t.jsx)(f.z, { className: "icon-xs shrink-0", hostId: G.hostId })
                          : (0, t.jsx)(O, { className: "icon-xs shrink-0 text-default" }),
                        (0, t.jsx)("span", { className: "truncate text-start text-default", children: W }),
                        null != G && D ? (0, t.jsx)(k, {}) : null,
                      ],
                    })),
              (I[14] = O),
              (I[15] = U),
              (I[16] = J),
              (I[17] = q),
              (I[18] = W),
              (I[19] = G),
              (I[20] = D),
              (I[21] = z),
              (I[22] = y))
            : (y = I[22])
          let $ = y
          if (U) return $
          let Z = L ?? "end",
            Y = E ?? "menuWide"
          return (
            I[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, t.jsx)(u.ms.Title, {
                  children: (0, t.jsx)(d.A, {
                    id: "settings.hostDropdown.title",
                    defaultMessage: "Host",
                    description: "Title for the Host dropdown shown in settings pages",
                  }),
                })),
                (I[23] = S))
              : (S = I[23]),
            I[24] !== O || I[25] !== K || I[26] !== C || I[27] !== _ || I[28] !== D
              ? ((v = (0, t.jsx)(u.ms.Section, {
                  className: "max-h-40 overflow-y-auto",
                  children: K.map((e) =>
                    (0, t.jsx)(
                      u.ms.Item,
                      {
                        rightIconAsset: e.hostId === _ ? a.G : void 0,
                        onSelect: () => {
                          C(e.hostId)
                        },
                        children: (0, t.jsxs)("span", {
                          className: "flex min-w-0 items-center gap-2",
                          children: [
                            e.hostId === p.fI
                              ? (0, t.jsx)(O, { className: "icon-xs shrink-0" })
                              : (0, t.jsx)(f.z, { className: "icon-xs shrink-0", hostId: e.hostId }),
                            (0, t.jsx)("span", { className: "truncate", children: e.displayName }),
                            e.hostId !== p.fI && D ? (0, t.jsx)(k, {}) : null,
                          ],
                        }),
                      },
                      e.hostId,
                    ),
                  ),
                })),
                (I[24] = O),
                (I[25] = K),
                (I[26] = C),
                (I[27] = _),
                (I[28] = D),
                (I[29] = v))
              : (v = I[29]),
            I[30] !== q || I[31] !== Z || I[32] !== Y || I[33] !== v || I[34] !== $
              ? ((w = (0, t.jsxs)(u.Ab, {
                  open: q,
                  onOpenChange: Q,
                  align: Z,
                  contentWidth: Y,
                  triggerButton: $,
                  children: [S, v],
                })),
                (I[30] = q),
                (I[31] = Z),
                (I[32] = Y),
                (I[33] = v),
                (I[34] = $),
                (I[35] = w))
              : (w = I[35]),
            w
          )
        },
      },
    )
  },
  kEV3(e, l, s) {
    var t = s("Qgfj")
    let i = (0, t.YK)({
        system: { id: "skills.scope.system", defaultMessage: "System", description: "Indicates a system scoped skill" },
        repo: {
          id: "skills.scope.repo",
          defaultMessage: "Repo",
          description: "Indicates a skill scoped to the current repository",
        },
        user: { id: "skills.scope.user", defaultMessage: "User", description: "Indicates a skill scoped to the user" },
        admin: {
          id: "skills.scope.admin",
          defaultMessage: "Admin",
          description: "Indicates a skill scoped to the admin",
        },
      }),
      n = (0, t.YK)({
        system: { id: "skills.scope.builtIn", defaultMessage: "System", description: "Label for system skills" },
        repo: { id: "skills.scope.team", defaultMessage: "Team", description: "Label for team skills" },
        user: { id: "skills.scope.personal", defaultMessage: "Personal", description: "Label for personal skills" },
        admin: {
          id: "skills.scope.adminInstalled",
          defaultMessage: "Admin installed",
          description: "Label for admin installed skills",
        },
      })
    function a({ scope: e, intl: l, repoLabel: s, adminLabel: t }) {
      if ("repo" === e) return s ?? l.formatMessage(n.repo)
      if ("admin" === e) return t ?? l.formatMessage(n.admin)
      let o = n[e]
      return o ? l.formatMessage(o) : l.formatMessage(i[e])
    }
    function o({ skillPath: e, roots: l, fallbackLabel: s }) {
      let t,
        i,
        n = l.reduce((l, s) => (e.startsWith(s) && (!l || s.length > l.length) ? s : l), null)
      if (!n) return s
      let a =
        -1 === (i = Math.max((t = n.replace(/[\\/]+$/, "")).lastIndexOf("/"), t.lastIndexOf("\\"))) ? t : t.slice(i + 1)
      return a.length > 0 ? a : s
    }
    s.d(
      l,
      {},
      {
        IG: function ({ skill: e, roots: l, intl: s, fallbackRepoLabel: t, adminLabel: i }) {
          return a({
            scope: e.scope,
            intl: s,
            repoLabel: o({ skillPath: e.path, roots: l, fallbackLabel: t ?? a({ scope: "repo", intl: s }) }),
            adminLabel: i,
          })
        },
        V_: a,
        _i: o,
      },
    )
  },
  njDi(e, l, s) {
    var t = s("sLlu"),
      i = s("t4SC")
    s.d(
      l,
      {},
      {
        j: async function (e) {
          await Promise.all(
            [["skills"], i.w5, ["artifact-template-skill-manifests"], ["artifact-template-skill-creation-times"]].map(
              (l) => (0, t.y)(e, l),
            ),
          )
        },
      },
    )
  },
  mIfQ(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("on57"),
      a = s("zd8w"),
      o = s("oyxz")
    s.d(
      l,
      {},
      {
        Q: function (e) {
          let l,
            s,
            n,
            o = (0, i.c)(12),
            { children: r, items: d, batchSize: c, pinnedItem: u, renderExpandRow: m, visibleItemLimit: h } = e,
            [f, p] = (0, a.useState)(0),
            g = h + f * (c ?? d.length)
          if (o[0] !== r || o[1] !== d || o[2] !== u || o[3] !== m || o[4] !== f || o[5] !== g || o[6] !== h) {
            let e = d.slice(0, g),
              t = d.slice(g),
              i = null != u && t.includes(u),
              n = i ? t.filter((e) => e !== u) : t,
              a = f > 0 && 0 === n.length
            ;((l = r(i ? [...e, u] : e)),
              (s =
                d.length > h && (a || n.length > 0)
                  ? m({ hiddenItems: n, isExpanded: a, onToggle: () => p((e) => (a ? 0 : e + 1)) })
                  : null),
              (o[0] = r),
              (o[1] = d),
              (o[2] = u),
              (o[3] = m),
              (o[4] = f),
              (o[5] = g),
              (o[6] = h),
              (o[7] = l),
              (o[8] = s))
          } else ((l = o[7]), (s = o[8]))
          return (
            o[9] !== l || o[10] !== s
              ? ((n = (0, t.jsxs)(t.Fragment, { children: [l, s] })), (o[9] = l), (o[10] = s), (o[11] = n))
              : (n = o[11]),
            n
          )
        },
        s: function (e) {
          let l,
            s,
            a,
            r = (0, i.c)(10),
            { children: d, className: c, isExpanded: u, onClick: m } = e
          return (
            r[0] !== c
              ? ((l = (0, n.A)(
                  "flex min-h-[var(--height-token-row)] w-full cursor-interaction items-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm leading-relaxed font-normal text-codex-description outline-hidden hover:text-default focus-visible:text-default",
                  c,
                )),
                (r[0] = c),
                (r[1] = l))
              : (l = r[1]),
            r[2] !== d || r[3] !== u
              ? ((s = u
                  ? (0, t.jsx)(o.A, {
                      id: "skills.appsPage.section.showLess",
                      defaultMessage: "Show less",
                      description: "Label for the row that collapses an expanded plugins page section",
                    })
                  : d),
                (r[2] = d),
                (r[3] = u),
                (r[4] = s))
              : (s = r[4]),
            r[5] !== u || r[6] !== m || r[7] !== l || r[8] !== s
              ? ((a = (0, t.jsx)("button", {
                  className: l,
                  type: "button",
                  "aria-expanded": u,
                  onClick: m,
                  children: s,
                })),
                (r[5] = u),
                (r[6] = m),
                (r[7] = l),
                (r[8] = s),
                (r[9] = a))
              : (a = r[9]),
            a
          )
        },
      },
    )
  },
  fQ1s(e, l, s) {
    var t = s("QosV"),
      i = s("zTeN"),
      n = s("HZfM"),
      a = s("OiCI"),
      o = s("rO8L"),
      r = s("kfGJ"),
      d = s("oom3")
    s.d(
      l,
      {},
      {
        x: function () {
          let e,
            l,
            s = (0, t.c)(6),
            c = (0, n.zy)()
          s[0] !== c.search || s[1] !== c.state
            ? ((e = (0, d.qC)(c.state, c.search).initialHostId ?? r.fI),
              (s[0] = c.search),
              (s[1] = c.state),
              (s[2] = e))
            : (e = s[2])
          let u = e
          return (
            (0, i.Ul)(a.vh),
            s[3] !== u || !0 !== s[4]
              ? ((l = { enabled: !0, hostId: u }), (s[3] = u), (s[4] = !0), (s[5] = l))
              : (l = s[5]),
            (0, o.J)(l)
          )
        },
      },
    )
  },
  Ekos(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("slpy"),
      a = s("ECyk"),
      o = s("zKw6"),
      r = s.n(o),
      d = s("HJEB"),
      c = s("Qgfj"),
      u = s("Wf1j"),
      m = s("oyxz"),
      h = s("ygO2"),
      f = s("HOLv"),
      p = s("poBj"),
      g = s("axh8"),
      k = s("n4fT"),
      x = s("hobO"),
      b = s("vOoA")
    let j = (0, c.YK)({
      installSkill: {
        id: "skills.recommended.connectSkill",
        defaultMessage: "Install skill",
        description: "Button label for installing a recommended skill",
      },
      installed: {
        id: "skills.recommended.installed",
        defaultMessage: "Installed",
        description: "Label for installed recommended skills",
      },
    })
    function y(e) {
      let l,
        s,
        n,
        o,
        r = (0, i.c)(13),
        { canInstall: d, installing: c, isInstalled: u, onInstall: p, skill: g } = e,
        k = u || !d || c
      return (
        r[0] !== p || r[1] !== g
          ? ((l = (e) => {
              ;(e.stopPropagation(), p(g, null))
            }),
            (r[0] = p),
            (r[1] = g),
            (r[2] = l))
          : (l = r[2]),
        r[3] !== k
          ? ((s = k ? null : (0, t.jsx)(f.I, { "aria-hidden": !1, asset: a.f })), (r[3] = k), (r[4] = s))
          : (s = r[4]),
        r[5] !== u
          ? ((n = u
              ? (0, t.jsx)(m.A, { ...j.installed })
              : (0, t.jsx)(m.A, {
                  id: "skills.recommended.install",
                  defaultMessage: "Install skill",
                  description: "Button label to install a recommended skill",
                })),
            (r[5] = u),
            (r[6] = n))
          : (n = r[6]),
        r[7] !== c || r[8] !== k || r[9] !== l || r[10] !== s || r[11] !== n
          ? ((o = (0, t.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, t.jsxs)(h.$, {
                color: "primary",
                size: "toolbar",
                disabled: k,
                loading: c,
                onClick: l,
                children: [s, n],
              }),
            })),
            (r[7] = c),
            (r[8] = k),
            (r[9] = l),
            (r[10] = s),
            (r[11] = n),
            (r[12] = o))
          : (o = r[12]),
        o
      )
    }
    function S(e) {
      let l,
        s,
        n,
        a,
        o = (0, i.c)(16),
        { skill: r, size: d, basePath: c } = e,
        u = void 0 === d ? "small" : d,
        m = !!r.iconLarge
      if (
        ("small" === u ? (l = 24) : m || (l = 20),
        o[0] !== c ||
          o[1] !== l ||
          o[2] !== m ||
          o[3] !== u ||
          o[4] !== r.description ||
          o[5] !== r.iconLarge ||
          o[6] !== r.iconSmall ||
          o[7] !== r.name)
      ) {
        let e,
          t = (0, g.h)(null, {
            size: u,
            fallbackSize: l,
            fallbackClassName: "text-secondary",
            iconSmall: r.iconSmall,
            iconLarge: r.iconLarge,
            basePath: c,
            alt: r.name,
            fallbackName: r.name,
            fallbackDescription: r.description,
          })
        o[10] !== m || o[11] !== u
          ? ((e = (0, b.a)({ size: u, hasLargeIcon: m, largeFallbackClassName: "h-5 w-5" })),
            (o[10] = m),
            (o[11] = u),
            (o[12] = e))
          : (e = o[12])
        let i = `${e} text-secondary`
        ;((s = t),
          (n = (0, g.d8)(t, i, "text-secondary")),
          (o[0] = c),
          (o[1] = l),
          (o[2] = m),
          (o[3] = u),
          (o[4] = r.description),
          (o[5] = r.iconLarge),
          (o[6] = r.iconSmall),
          (o[7] = r.name),
          (o[8] = s),
          (o[9] = n))
      } else ((s = o[8]), (n = o[9]))
      return (
        o[13] !== s || o[14] !== n
          ? ((a = (0, t.jsx)(s, { ...n })), (o[13] = s), (o[14] = n), (o[15] = a))
          : (a = o[15]),
        a
      )
    }
    s.d(
      l,
      {},
      {
        D: function (e) {
          let l,
            s,
            a,
            o,
            c,
            f,
            g,
            b,
            v = (0, i.c)(37),
            {
              skill: w,
              canInstall: I,
              hostId: M,
              isHighlighted: A,
              isInstalled: N,
              isInstalling: C,
              repoRoot: _,
              onInstall: L,
            } = e,
            E = void 0 !== A && A,
            P = (0, u.A)(),
            T = w.shortDescription && w.shortDescription.length > 0 ? w.shortDescription : w.description
          v[0] !== _ || v[1] !== w.repoPath
            ? ((l = (function ({ repoRoot: e, repoPath: l }) {
                if (!e) return null
                let s = l.split("/").join(r().sep),
                  t = r().join(e, s)
                return t.toLowerCase().endsWith(".md") ? t : r().join(t, "SKILL.md")
              })({ repoRoot: _, repoPath: w.repoPath })),
              (v[0] = _),
              (v[1] = w.repoPath),
              (v[2] = l))
            : (l = v[2])
          let R = l
          v[3] !== w.name ? ((s = (0, d.l)(w.name)), (v[3] = w.name), (v[4] = s)) : (s = v[4])
          let B = s,
            U = w.iconLarge ? "large" : "small"
          v[5] !== w || v[6] !== R || v[7] !== U
            ? ((a = (0, t.jsx)(S, { skill: w, size: U, basePath: R })), (v[5] = w), (v[6] = R), (v[7] = U), (v[8] = a))
            : (a = v[8])
          let F = a,
            O = N || !I || C
          v[9] !== P || v[10] !== O || v[11] !== N || v[12] !== C || v[13] !== L || v[14] !== w
            ? ((o = N
                ? (0, t.jsx)(p.I, {
                    enabledStatusAriaLabel: P.formatMessage(j.installed),
                    isEnabled: !0,
                    isUninstalling: !1,
                    isUpdating: !1,
                  })
                : (0, t.jsx)(n.m, {
                    content: (0, t.jsx)(m.A, { ...j.installSkill }),
                    children: (0, t.jsx)(h.$, {
                      "aria-label": P.formatMessage(j.installSkill),
                      color: "secondary",
                      size: "composer",
                      disabled: O,
                      loading: C,
                      onClick: (e) => {
                        ;(e.stopPropagation(), O || L(w, null))
                      },
                      children: (0, t.jsx)(m.A, { ...j.installSkill }),
                    }),
                  })),
              (v[9] = P),
              (v[10] = O),
              (v[11] = N),
              (v[12] = C),
              (v[13] = L),
              (v[14] = w),
              (v[15] = o))
            : (o = v[15])
          let D = o
          return (
            v[16] !== B ? ((c = (0, t.jsx)(x.Rv, { kind: "Skill", title: B })), (v[16] = B), (v[17] = c)) : (c = v[17]),
            v[18] !== B || v[19] !== M || v[20] !== R
              ? ((f = (e) => {
                  let { isOpen: l } = e
                  return (0, t.jsx)(x.FG, { hostId: M, isOpen: l, skillPath: R, titleText: B })
                }),
                (v[18] = B),
                (v[19] = M),
                (v[20] = R),
                (v[21] = f))
              : (f = v[21]),
            v[22] !== I || v[23] !== N || v[24] !== C || v[25] !== L || v[26] !== w
              ? ((g = (0, t.jsx)(y, { canInstall: I, installing: C, isInstalled: N, onInstall: L, skill: w })),
                (v[22] = I),
                (v[23] = N),
                (v[24] = C),
                (v[25] = L),
                (v[26] = w),
                (v[27] = g))
              : (g = v[27]),
            v[28] !== D ||
            v[29] !== T ||
            v[30] !== B ||
            v[31] !== E ||
            v[32] !== F ||
            v[33] !== c ||
            v[34] !== f ||
            v[35] !== g
              ? ((b = (0, t.jsx)(k.C, {
                  cardIcon: F,
                  cardTitle: B,
                  cardDescription: T,
                  cardActions: D,
                  isHighlighted: E,
                  modalTitle: c,
                  modalTitleText: B,
                  modalDescription: T,
                  modalBody: f,
                  modalFooter: g,
                })),
                (v[28] = D),
                (v[29] = T),
                (v[30] = B),
                (v[31] = E),
                (v[32] = F),
                (v[33] = c),
                (v[34] = f),
                (v[35] = g),
                (v[36] = b))
              : (b = v[36]),
            b
          )
        },
      },
    )
  },
  UmGt(e, l, s) {
    var t = s("ASxG"),
      i = s("OMIV")
    let n = t.string().refine((e) => e.trim().length > 0),
      a = t
        .object({ skill_markdown_by_id: t.record(t.string(), t.unknown()).optional() })
        .catch({ skill_markdown_by_id: {} })
    s.d(
      l,
      {},
      {
        Uu: async function (e, l) {
          var s
          return (
            (s = (function (e) {
              let l = {}
              for (let [s, t] of Object.entries(a.parse(e).skill_markdown_by_id ?? {})) {
                let e = n.safeParse(t)
                e.success && (l[s] = e.data)
              }
              return l
            })(e.get(i.M9)?.getDynamicConfig("1852350085").value)),
            s[l]
          )
        },
      },
    )
  },
  t4SC(e, l, s) {
    var t = s("zTeN"),
      i = s("GaA7"),
      n = s("q77y"),
      a = s("OWtl"),
      o = s("rvFo")
    let r = ["recommendedSkills", "list"],
      d = (0, t.vU)(a.u, (e) => ({
        queryKey: [...r, e],
        enabled: i.appServices?.recommendedSkills != null,
        staleTime: o.D.FIVE_MINUTES,
        refetchOnMount: !0,
        queryFn: ({ signal: l }) => (0, n.P)(c().list({ hostId: e, refresh: !1 }), l),
      }))
    function c() {
      let e = i.appServices?.recommendedSkills
      if (null == e) throw Error("Recommended skills are not supported by this host")
      return e
    }
    s.d(
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
        w5: r,
      },
    )
  },
  xBcA(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("iRMi"),
      a = s("slpy"),
      o = s("z2Oi"),
      r = s("xSOA"),
      d = s("zTeN"),
      c = s("zd8w"),
      u = s("Qgfj"),
      m = s("Wf1j"),
      h = s("oyxz"),
      f = s("Dgwo"),
      p = s("TjgH"),
      g = s("ygO2"),
      k = s("bqtn"),
      x = s("HOLv"),
      b = s("f38C"),
      j = s("SGsN"),
      y = s("F0xz"),
      S = s("B09n"),
      v = s("wwME"),
      w = s("Q8aV"),
      I = s("poBj"),
      M = s("yGJW"),
      A = s("gBBC"),
      N = s("OWtl"),
      C = s("Oj9r"),
      _ = s("ndjw"),
      L = s("kfGJ"),
      E = s("MQKw"),
      P = s("axh8"),
      T = s("n4fT"),
      R = s("hobO"),
      B = s("hbRe"),
      U = s("Umiv"),
      F = s("aepO"),
      O = s("WFY2"),
      D = s("vOoA"),
      z = s("t4SC")
    let H = (0, u.YK)({
      disableSkill: {
        id: "skills.card.disableSkill",
        defaultMessage: "Disable skill",
        description: "Label for the disable skill toggle on skill cards",
      },
      enableSkill: {
        id: "skills.card.enableSkill",
        defaultMessage: "Enable skill",
        description: "Label for the enable skill toggle on skill cards",
      },
      enabledStatus: {
        id: "skills.card.enabledStatus",
        defaultMessage: "Skill enabled",
        description: "Status label for an installed skill that is enabled",
      },
      disabledStatus: {
        id: "skills.card.disabledStatus",
        defaultMessage: "Skill disabled",
        description: "Status label for an installed skill that is disabled",
      },
      enableButton: {
        id: "skills.card.enableButton",
        defaultMessage: "Enable",
        description: "Button label for enabling a disabled skill from a skill card",
      },
      uninstallSkill: {
        id: "skills.card.uninstallSkill",
        defaultMessage: "Uninstall skill",
        description: "Tooltip label for uninstalling a skill from a skill card",
      },
    })
    function q(e) {
      e.stopPropagation()
    }
    function Q(e) {
      let l,
        s,
        n,
        a,
        o = (0, i.c)(10),
        { hostId: r, path: c } = e,
        u = (0, d.gh)(N.u)
      o[0] !== r || o[1] !== c ? ((l = { hostId: r, path: c }), (o[0] = r), (o[1] = c), (o[2] = l)) : (l = o[2])
      let { contents: m, error: f } = (0, U.q)(l),
        p = void 0 === m || null != f
      return (
        o[3] !== m || o[4] !== u
          ? ((s = () => {
              void 0 !== m &&
                (0, F.E)(m).then((e) => {
                  e &&
                    u
                      .get(j.Id)
                      .success(
                        (0, t.jsx)(h.A, {
                          id: "skills.card.copiedSkillMarkdown",
                          defaultMessage: "Copied SKILL.md",
                          description: "Toast shown after copying an installed skill's original SKILL.md file",
                        }),
                      )
                })
            }),
            (o[3] = m),
            (o[4] = u),
            (o[5] = s))
          : (s = o[5]),
        o[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(h.A, {
              id: "skills.card.copySkillMarkdown",
              defaultMessage: "Copy Markdown",
              description: "Menu item for copying an installed skill's original SKILL.md file",
            })),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== p || o[8] !== s
          ? ((a = (0, t.jsx)(k.ms.Item, { disabled: p, onSelect: s, children: n })), (o[7] = p), (o[8] = s), (o[9] = a))
          : (a = o[9]),
        a
      )
    }
    function G(e) {
      let l,
        s,
        n,
        a,
        r,
        d,
        c = (0, i.c)(14),
        {
          canRemoveSkill: u,
          isRemoving: m,
          isUpdatingEnabled: f,
          effectiveSkillEnabled: p,
          onUninstall: k,
          onTryInThread: b,
        } = e
      ;(c[0] !== u || c[1] !== m || c[2] !== k
        ? ((l = u
            ? (0, t.jsx)(g.$, {
                radius: "full",
                color: "danger",
                size: "toolbar",
                disabled: m,
                onClick: k,
                children: (0, t.jsx)(h.A, {
                  id: "skills.card.uninstall",
                  defaultMessage: "Uninstall",
                  description: "Button label to remove a skill",
                }),
              })
            : null),
          (c[0] = u),
          (c[1] = m),
          (c[2] = k),
          (c[3] = l))
        : (l = c[3]),
        c[4] !== l
          ? ((s = (0, t.jsx)("div", { className: "flex items-center gap-2", children: l })), (c[4] = l), (c[5] = s))
          : (s = c[5]))
      let j = !p || f
      return (
        c[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(x.I, { "aria-hidden": !1, asset: o.Z })),
            (a = (0, t.jsx)(h.A, {
              id: "skills.card.try",
              defaultMessage: "Try now",
              description: "Button label to start a new task with a skill",
            })),
            (c[6] = n),
            (c[7] = a))
          : ((n = c[6]), (a = c[7])),
        c[8] !== b || c[9] !== j
          ? ((r = (0, t.jsx)("div", {
              className: "flex items-center gap-2",
              children: (0, t.jsxs)(g.$, {
                radius: "full",
                color: "primary",
                size: "toolbar",
                disabled: j,
                onClick: b,
                children: [n, a],
              }),
            })),
            (c[8] = b),
            (c[9] = j),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== s || c[12] !== r
          ? ((d = (0, t.jsxs)("div", {
              className: "flex w-full items-center justify-between gap-2",
              children: [s, r],
            })),
            (c[11] = s),
            (c[12] = r),
            (c[13] = d))
          : (d = c[13]),
        d
      )
    }
    function V(e) {
      let l,
        s,
        n,
        a,
        o = (0, i.c)(12),
        { skill: r, size: d } = e,
        c = void 0 === d ? "small" : d,
        u = !!r.interface?.iconLarge
      if (("small" === c ? (l = 24) : u || (l = 20), o[0] !== l || o[1] !== u || o[2] !== c || o[3] !== r)) {
        let e,
          t = (0, P.h)(r, { size: c, fallbackSize: l, fallbackClassName: "text-secondary" })
        o[6] !== u || o[7] !== c
          ? ((e = (0, D.a)({ size: c, hasLargeIcon: u, largeFallbackClassName: "h-5 w-5" })),
            (o[6] = u),
            (o[7] = c),
            (o[8] = e))
          : (e = o[8])
        let i = `${e} text-secondary`
        ;((s = t),
          (n = (0, P.d8)(t, i, "text-secondary")),
          (o[0] = l),
          (o[1] = u),
          (o[2] = c),
          (o[3] = r),
          (o[4] = s),
          (o[5] = n))
      } else ((s = o[4]), (n = o[5]))
      return (
        o[9] !== s || o[10] !== n ? ((a = (0, t.jsx)(s, { ...n })), (o[9] = s), (o[10] = n), (o[11] = a)) : (a = o[11]),
        a
      )
    }
    s.d(
      l,
      {},
      {
        A: function (e) {
          let l,
            s,
            o,
            u,
            g,
            x,
            P,
            U,
            F,
            D,
            W,
            K,
            J,
            $,
            Z,
            Y,
            X,
            ee,
            el,
            es,
            et,
            ei,
            en = (0, i.c)(127),
            {
              cardRef: ea,
              actionLabel: eo,
              cardIcon: er,
              cardIconContainer: ed,
              cardIconContainerVariant: ec,
              cardDescriptionPlacement: eu,
              cardTitle: em,
              hostId: eh,
              hideCardActions: ef,
              canPreview: ep,
              isHighlighted: eg,
              presentation: ek,
              skill: ex,
              displayName: eb,
              installedStateAction: ej,
              modalIconShape: ey,
              showModalUninstall: eS,
              toggleOnly: ev,
              scopeBadges: ew,
              onSkillsUpdated: eI,
            } = e,
            eM = void 0 === ed || ed,
            eA = void 0 !== ef && ef,
            eN = void 0 === ep || ep,
            eC = void 0 !== eg && eg,
            e_ = void 0 === ej ? "check" : ej,
            eL = void 0 === eS || eS,
            eE = void 0 !== ev && ev,
            eP = (0, d.gh)(N.u),
            eT = (0, d.gh)(C.GD),
            { platform: eR } = (0, v.V)(),
            eB = (0, m.A)(),
            eU = (0, w.p8)(),
            [eF, eO] = (0, c.useState)(null),
            eD = "local" !== (0, L.Qz)(eh).kind,
            ez = eb ?? ex.name
          ;(en[0] !== eI || en[1] !== eP.queryClient
            ? ((l = (e) => {
                ;(eI?.(e?.success === !0), eP.queryClient.invalidateQueries({ queryKey: z.w5 }))
              }),
              (en[0] = eI),
              (en[1] = eP.queryClient),
              (en[2] = l))
            : (l = en[2]),
            en[3] !== ez || en[4] !== eB || en[5] !== eP
              ? ((s = (e) => {
                  let { success: l } = e
                  l
                    ? eP
                        .get(j.Id)
                        .success(
                          (0, t.jsx)(h.A, {
                            id: "skills.card.removeSuccess",
                            defaultMessage: "{skillName} skill uninstalled",
                            description: "Toast shown after successfully uninstalling a skill",
                            values: { skillName: (0, t.jsx)("span", { className: "font-medium", children: ez }) },
                          }),
                        )
                    : eP
                        .get(j.Id)
                        .danger(
                          eB.formatMessage({
                            id: "skills.card.removeFailed",
                            defaultMessage: "Failed to uninstall skill",
                            description: "Toast message shown when uninstalling a skill fails",
                          }),
                          { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                        )
                }),
                (en[3] = ez),
                (en[4] = eB),
                (en[5] = eP),
                (en[6] = s))
              : (s = en[6]),
            en[7] !== eB || en[8] !== eP
              ? ((o = () => {
                  eP.get(j.Id).danger(
                    eB.formatMessage({
                      id: "skills.card.removeFailed",
                      defaultMessage: "Failed to uninstall skill",
                      description: "Toast message shown when uninstalling a skill fails",
                    }),
                    { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                  )
                }),
                (en[7] = eB),
                (en[8] = eP),
                (en[9] = o))
              : (o = en[9]),
            en[10] !== o || en[11] !== l || en[12] !== s
              ? ((u = { mutationFn: z._R, networkMode: "always", onSettled: l, onSuccess: s, onError: o }),
                (en[10] = o),
                (en[11] = l),
                (en[12] = s),
                (en[13] = u))
              : (u = en[13]))
          let eH = (0, r.n)(u)
          ;(en[14] !== eh || en[15] !== eP || en[16] !== ex.name || en[17] !== ex.path
            ? ((g = (e) => {
                let { enabled: l } = e
                return (0, f.V)(eP, eh).sendRequest(
                  "skills/config/write",
                  ex.name.includes(":") ? { name: ex.name, enabled: l } : { path: ex.path, enabled: l },
                )
              }),
              (en[14] = eh),
              (en[15] = eP),
              (en[16] = ex.name),
              (en[17] = ex.path),
              (en[18] = g))
            : (g = en[18]),
            en[19] !== ez || en[20] !== eI || en[21] !== eP
              ? ((x = (e, l) => {
                  let { enabled: s, restoreKeyboardFocus: i } = l
                  eI?.(!0, i)
                  let n = s
                    ? (0, t.jsx)(h.A, {
                        id: "skills.card.enableSuccess",
                        defaultMessage: "{skillName} skill enabled",
                        description: "Toast shown after successfully enabling a skill",
                        values: { skillName: (0, t.jsx)("span", { className: "font-medium", children: ez }) },
                      })
                    : (0, t.jsx)(h.A, {
                        id: "skills.card.disableSuccess",
                        defaultMessage: "{skillName} skill disabled",
                        description: "Toast shown after successfully disabling a skill",
                        values: { skillName: (0, t.jsx)("span", { className: "font-medium", children: ez }) },
                      })
                  eP.get(j.Id).success(n)
                }),
                (en[19] = ez),
                (en[20] = eI),
                (en[21] = eP),
                (en[22] = x))
              : (x = en[22]),
            en[23] !== eB || en[24] !== eP
              ? ((P = (e) => {
                  ;(eO(null),
                    O.v.error("Failed to update skill enabled state", { safe: {}, sensitive: { error: e } }),
                    eP
                      .get(j.Id)
                      .danger(
                        eB.formatMessage({
                          id: "skills.card.toggleEnabledError",
                          defaultMessage: "Failed to update skill",
                          description: "Toast message shown when enabling or disabling a skill fails",
                        }),
                        { errorAnalytics: { toastId: "skills.card.toggleEnabledError" } },
                      ))
                }),
                (en[23] = eB),
                (en[24] = eP),
                (en[25] = P))
              : (P = en[25]),
            en[26] !== g || en[27] !== x || en[28] !== P
              ? ((U = { mutationFn: g, onSuccess: x, onError: P }),
                (en[26] = g),
                (en[27] = x),
                (en[28] = P),
                (en[29] = U))
              : (U = en[29]))
          let eq = (0, r.n)(U),
            eQ = null != eF && (eq.isPending || ex.enabled !== eF) ? eF : ex.enabled
          en[30] !== ex ? ((F = (0, E.a)(ex)), (en[30] = ex), (en[31] = F)) : (F = en[31])
          let eG = F
          ;(en[32] !== eQ
            ? ((D = eQ
                ? null
                : (0, t.jsx)(p.E, {
                    variant: "outline",
                    children: (0, t.jsx)(h.A, {
                      id: "skills.card.disabledBadge",
                      defaultMessage: "Disabled",
                      description: "Label shown next to the skill name when a skill is disabled",
                    }),
                  })),
              (en[32] = eQ),
              (en[33] = D))
            : (D = en[33]),
            en[34] !== ez || en[35] !== D
              ? ((W = (0, t.jsx)(R.Rv, { kind: "Skill", title: ez, badge: D })),
                (en[34] = ez),
                (en[35] = D),
                (en[36] = W))
              : (W = en[36]))
          let eV = W
          en[37] !== er || en[38] !== ex
            ? ((K =
                void 0 === er ? (0, t.jsx)(V, { skill: ex, size: ex.interface?.iconLarge ? "large" : "small" }) : er),
              (en[37] = er),
              (en[38] = ex),
              (en[39] = K))
            : (K = en[39])
          let eW = K,
            eK = !eD && "admin" !== ex.scope,
            eJ = eH.isPending && eH.variables?.skillPath === ex.path,
            e$ = eq.isPending,
            eZ = !eQ
          en[40] !== eh || en[41] !== eT || en[42] !== ex.path
            ? ((J = () => {
                ;(0, S.openWorkspaceFile)({ scope: eT, path: ex.path, cwd: null, hostId: eh, openInSidePanel: !0 })
              }),
              (en[40] = eh),
              (en[41] = eT),
              (en[42] = ex.path),
              (en[43] = J))
            : (J = en[43])
          let eY = J
          en[44] !== eP || en[45] !== ex || en[46] !== eU
            ? (($ = () => {
                ;((0, M.yy)(eP, n.CodexSkillTryClicked, {}),
                  eU({ activeProject: (0, A.QO)(eP.get(_.Gt)), prefillPrompt: (0, B.Od)(ex), startInSidebar: !0 }))
              }),
              (en[44] = eP),
              (en[45] = ex),
              (en[46] = eU),
              (en[47] = $))
            : ($ = en[47])
          let eX = $,
            e0 = eQ ? H.disableSkill : H.enableSkill
          en[48] !== eQ ||
          en[49] !== eY ||
          en[50] !== eA ||
          en[51] !== eh ||
          en[52] !== eB ||
          en[53] !== eD ||
          en[54] !== e$ ||
          en[55] !== e0 ||
          en[56] !== eR ||
          en[57] !== eT ||
          en[58] !== ex.path ||
          en[59] !== eq
            ? ((Z = (e) => {
                let { closePreview: l } = e
                return (0, t.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    !eA &&
                      (0, t.jsx)(a.m, {
                        content: (0, t.jsx)(h.A, { ...e0 }),
                        children: (0, t.jsx)("div", {
                          className: "flex items-center",
                          children: (0, t.jsx)(y.l, {
                            className: "h-token-button-composer",
                            checked: eQ,
                            disabled: e$,
                            ariaLabel: eB.formatMessage(e0),
                            onChange: (e) => {
                              ;(eO(e), eq.mutate({ enabled: e }))
                            },
                          }),
                        }),
                      }),
                    (0, t.jsxs)(k.Ab, {
                      align: "end",
                      contentWidth: "icon",
                      triggerButton: (0, t.jsx)(b.p, {
                        pill: !0,
                        label: eB.formatMessage({
                          id: "skills.card.moreActions",
                          defaultMessage: "More actions",
                          description: "Aria label for the more actions menu in the skill preview modal",
                        }),
                      }),
                      children: [
                        (0, t.jsx)(k.ms.Item, {
                          disabled: eD,
                          onSelect: () => {
                            ;(eY(), l())
                          },
                          children: (0, t.jsx)(h.A, {
                            id: "skills.card.open",
                            defaultMessage: "Open",
                            description: "Button label to open a skill's files",
                          }),
                        }),
                        (0, t.jsxs)(k.ms.Item, {
                          disabled: eD,
                          onSelect: () => {
                            ;(0, S.openWorkspaceFile)({
                              scope: eT,
                              path: ex.path,
                              cwd: null,
                              hostId: eh,
                              target: "fileManager",
                            })
                          },
                          children: [
                            "macOS" === eR &&
                              (0, t.jsx)(h.A, {
                                id: "skills.card.revealInFinder",
                                defaultMessage: "Reveal in Finder",
                                description: "Menu item to reveal an installed skill's file in Finder on macOS",
                              }),
                            "windows" === eR &&
                              (0, t.jsx)(h.A, {
                                id: "skills.card.revealInFileExplorer",
                                defaultMessage: "Reveal in File Explorer",
                                description:
                                  "Menu item to reveal an installed skill's file in File Explorer on Windows",
                              }),
                            "linux" === eR &&
                              (0, t.jsx)(h.A, {
                                id: "skills.card.revealInFileManager",
                                defaultMessage: "Reveal in File Manager",
                                description:
                                  "Menu item to reveal an installed skill's file in the system file manager on Linux",
                              }),
                          ],
                        }),
                        (0, t.jsx)(Q, { hostId: eh, path: ex.path }),
                      ],
                    }),
                  ],
                })
              }),
              (en[48] = eQ),
              (en[49] = eY),
              (en[50] = eA),
              (en[51] = eh),
              (en[52] = eB),
              (en[53] = eD),
              (en[54] = e$),
              (en[55] = e0),
              (en[56] = eR),
              (en[57] = eT),
              (en[58] = ex.path),
              (en[59] = eq),
              (en[60] = Z))
            : (Z = en[60])
          let e1 = Z,
            e2 = eQ ? H.disableSkill : H.enableSkill
          en[61] !== eQ || en[62] !== eq
            ? ((Y = eQ
                ? (e, l) => {
                    ;(e.stopPropagation(), eO(!1), eq.mutate({ enabled: !1, restoreKeyboardFocus: l }))
                  }
                : void 0),
              (en[61] = eQ),
              (en[62] = eq),
              (en[63] = Y))
            : (Y = en[63])
          let e3 = Y
          en[64] !== eZ || en[65] !== eq
            ? ((X = eZ
                ? () => {
                    ;(eO(!0), eq.mutate({ enabled: !0 }))
                  }
                : void 0),
              (en[64] = eZ),
              (en[65] = eq),
              (en[66] = X))
            : (X = en[66])
          let e5 = X
          en[67] !== eK || en[68] !== eh || en[69] !== eH || en[70] !== ex.path
            ? ((ee = eK
                ? () => {
                    eH.mutate({ hostId: eh, skillPath: ex.path })
                  }
                : void 0),
              (en[67] = eK),
              (en[68] = eh),
              (en[69] = eH),
              (en[70] = ex.path),
              (en[71] = ee))
            : (ee = en[71])
          let e4 = ee
          en[72] !== eo ||
          en[73] !== eN ||
          en[74] !== eQ ||
          en[75] !== e3 ||
          en[76] !== e5 ||
          en[77] !== eY ||
          en[78] !== e4 ||
          en[79] !== eA ||
          en[80] !== e_ ||
          en[81] !== eB ||
          en[82] !== eD ||
          en[83] !== eJ ||
          en[84] !== e$ ||
          en[85] !== ek ||
          en[86] !== e2 ||
          en[87] !== eE ||
          en[88] !== eq
            ? ((el = eA
                ? void 0
                : "toggle" === e_
                  ? (e) => {
                      let { ignoreNextPreview: l, openPreview: s } = e
                      return (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          eo ? (0, t.jsx)("div", { className: "text-sm text-secondary", children: eo }) : null,
                          eE || !eN
                            ? null
                            : (0, t.jsx)("div", {
                                className:
                                  "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
                                children: (0, t.jsxs)(k.Ab, {
                                  align: "end",
                                  contentWidth: "icon",
                                  triggerButton: (0, t.jsx)(b.p, {
                                    pill: !0,
                                    label: eB.formatMessage({
                                      id: "skills.card.moreActions",
                                      defaultMessage: "More actions",
                                      description: "Aria label for the more actions menu in the skill preview modal",
                                    }),
                                  }),
                                  children: [
                                    (0, t.jsx)(k.ms.Item, {
                                      disabled: eD,
                                      onSelect: () => {
                                        ;(l(), eY())
                                      },
                                      children: (0, t.jsx)(h.A, {
                                        id: "skills.card.open",
                                        defaultMessage: "Open",
                                        description: "Button label to open a skill's files",
                                      }),
                                    }),
                                    (0, t.jsx)(k.ms.Item, {
                                      onSelect: s,
                                      children: (0, t.jsx)(h.A, {
                                        id: "skills.card.details",
                                        defaultMessage: "Details",
                                        description: "Dropdown item label to open the skill details modal",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                          (0, t.jsx)(a.m, {
                            content: (0, t.jsx)(h.A, { ...e2 }),
                            children: (0, t.jsx)(y.l, {
                              checked: eQ,
                              disabled: e$,
                              size: eE && "settings" !== ek ? "sm" : "default",
                              ariaLabel: eB.formatMessage(e2),
                              onClick: q,
                              onChange: (e) => {
                                ;(eO(e), eq.mutate({ enabled: e }))
                              },
                            }),
                          }),
                        ],
                      })
                    }
                  : "menu" === e_
                    ? (0, t.jsx)(I.I, {
                        disableMenuLabel: (0, t.jsx)(h.A, {
                          id: "skills.card.disableMenuItem",
                          defaultMessage: "Disable",
                          description: "Menu item label for disabling a skill from a skill card",
                        }),
                        enableButtonLabel: (0, t.jsx)(h.A, { ...H.enableButton }),
                        enabledStatusAriaLabel: eB.formatMessage(H.enabledStatus),
                        isEnabled: eQ,
                        isUninstalling: eJ,
                        isUpdating: e$,
                        menuLabel: eB.formatMessage({
                          id: "skills.card.actionsMenu",
                          defaultMessage: "Skill actions",
                          description: "Aria label for the skill card actions menu trigger",
                        }),
                        onDisable: e3,
                        onEnable: e5,
                        onUninstall: e4,
                        uninstallMenuLabel: (0, t.jsx)(h.A, {
                          id: "skills.card.uninstallMenuItem",
                          defaultMessage: "Uninstall",
                          description: "Menu item label for uninstalling a skill from a skill card",
                        }),
                      })
                    : (0, t.jsx)(I.I, {
                        enabledStatusAriaLabel: eB.formatMessage(H.enabledStatus),
                        isEnabled: eQ,
                        isUninstalling: eJ,
                        isUpdating: e$,
                      })),
              (en[72] = eo),
              (en[73] = eN),
              (en[74] = eQ),
              (en[75] = e3),
              (en[76] = e5),
              (en[77] = eY),
              (en[78] = e4),
              (en[79] = eA),
              (en[80] = e_),
              (en[81] = eB),
              (en[82] = eD),
              (en[83] = eJ),
              (en[84] = e$),
              (en[85] = ek),
              (en[86] = e2),
              (en[87] = eE),
              (en[88] = eq),
              (en[89] = el))
            : (el = en[89])
          let e6 = el,
            e8 = em ?? ez,
            e7 = "settings" === ek ? ex.description : eG
          return (
            en[90] !== ez || en[91] !== eh || en[92] !== ek || en[93] !== ex.path
              ? ((es = (e) => {
                  let { isOpen: l } = e
                  return (0, t.jsx)(R.FG, {
                    hostId: eh,
                    isOpen: l,
                    skillPath: ex.path,
                    titleText: ez,
                    presentation: "settings" === ek ? "contents" : "preview",
                  })
                }),
                (en[90] = ez),
                (en[91] = eh),
                (en[92] = ek),
                (en[93] = ex.path),
                (en[94] = es))
              : (es = en[94]),
            en[95] !== eK ||
            en[96] !== eQ ||
            en[97] !== eX ||
            en[98] !== eh ||
            en[99] !== eJ ||
            en[100] !== e$ ||
            en[101] !== eH ||
            en[102] !== eL ||
            en[103] !== ex.path
              ? ((et = (e) => {
                  let { closePreview: l } = e
                  return (0, t.jsx)(G, {
                    canRemoveSkill: eK && eL,
                    isRemoving: eJ,
                    isUpdatingEnabled: e$,
                    effectiveSkillEnabled: eQ,
                    onUninstall: () => {
                      ;(eH.mutate({ hostId: eh, skillPath: ex.path }), l())
                    },
                    onTryInThread: eX,
                  })
                }),
                (en[95] = eK),
                (en[96] = eQ),
                (en[97] = eX),
                (en[98] = eh),
                (en[99] = eJ),
                (en[100] = e$),
                (en[101] = eH),
                (en[102] = eL),
                (en[103] = ex.path),
                (en[104] = et))
              : (et = en[104]),
            en[105] !== e6 ||
            en[106] !== eN ||
            en[107] !== eu ||
            en[108] !== eM ||
            en[109] !== ec ||
            en[110] !== ea ||
            en[111] !== eG ||
            en[112] !== ez ||
            en[113] !== eZ ||
            en[114] !== eC ||
            en[115] !== e1 ||
            en[116] !== ey ||
            en[117] !== ek ||
            en[118] !== ew ||
            en[119] !== ex.name ||
            en[120] !== eW ||
            en[121] !== e8 ||
            en[122] !== e7 ||
            en[123] !== es ||
            en[124] !== et ||
            en[125] !== eV
              ? ((ei = (0, t.jsx)(T.C, {
                  cardRef: ea,
                  canPreview: eN,
                  cardIcon: eW,
                  cardIconContainer: eM,
                  cardIconContainerVariant: ec,
                  cardTitle: e8,
                  cardDescription: eG,
                  cardDescriptionPlacement: eu,
                  cardBadges: ew,
                  cardActions: e6,
                  isHighlighted: eC,
                  isContentDimmed: eZ,
                  presentation: ek,
                  modalIconShape: ey,
                  modalTitle: eV,
                  modalTitleText: ez,
                  modalName: ex.name,
                  modalHeaderActions: e1,
                  modalDescription: e7,
                  modalBody: es,
                  modalFooter: et,
                })),
                (en[105] = e6),
                (en[106] = eN),
                (en[107] = eu),
                (en[108] = eM),
                (en[109] = ec),
                (en[110] = ea),
                (en[111] = eG),
                (en[112] = ez),
                (en[113] = eZ),
                (en[114] = eC),
                (en[115] = e1),
                (en[116] = ey),
                (en[117] = ek),
                (en[118] = ew),
                (en[119] = ex.name),
                (en[120] = eW),
                (en[121] = e8),
                (en[122] = e7),
                (en[123] = es),
                (en[124] = et),
                (en[125] = eV),
                (en[126] = ei))
              : (ei = en[126]),
            ei
          )
        },
      },
    )
  },
  n4fT(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("on57"),
      a = s("zd8w"),
      o = s("GO7r"),
      r = s("Jqpj"),
      d = s("AWNZ"),
      c = s("TZ2Y"),
      u = s("hobO"),
      m = s("bIvi")
    s.d(
      l,
      {},
      {
        C: function (e) {
          let l,
            s,
            h,
            f,
            p,
            g,
            k,
            x,
            b,
            j,
            y,
            S,
            v = (0, i.c)(64),
            {
              cardRef: w,
              cardIcon: I,
              cardIconContainer: M,
              cardIconContainerVariant: A,
              cardTitle: N,
              cardDescription: C,
              cardDescriptionPlacement: _,
              cardBadges: L,
              cardActions: E,
              canPreview: P,
              isHighlighted: T,
              isContentDimmed: R,
              presentation: B,
              modalIconShape: U,
              modalTitle: F,
              modalTitleText: O,
              modalName: D,
              modalHeaderActions: z,
              modalDescription: H,
              modalBody: q,
              modalFooter: Q,
            } = e,
            G = void 0 === P || P,
            [V, W] = (0, a.useState)(!1),
            K = (0, a.useRef)(!1)
          v[0] !== G
            ? ((l = () => {
                if (G) {
                  if (K.current) {
                    K.current = !1
                    return
                  }
                  W(!0)
                }
              }),
              (v[0] = G),
              (v[1] = l))
            : (l = v[1])
          let J = (0, m.K)(l)
          v[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
                K.current = !0
              }),
              (v[2] = s))
            : (s = v[2])
          let $ = (0, m.K)(s)
          v[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = () => {
                W(!1)
              }),
              (v[3] = h))
            : (h = v[3])
          let Z = h,
            Y = I ?? null,
            X = G && V
          ;(v[4] !== z
            ? ((f = "function" == typeof z ? z({ closePreview: Z }) : z), (v[4] = z), (v[5] = f))
            : (f = v[5]),
            v[6] !== Q
              ? ((p = "function" == typeof Q ? Q({ closePreview: Z }) : Q), (v[6] = Q), (v[7] = p))
              : (p = v[7]),
            v[8] !== G || v[9] !== V || v[10] !== q
              ? ((g = "function" == typeof q ? q({ isOpen: G && V }) : q),
                (v[8] = G),
                (v[9] = V),
                (v[10] = q),
                (v[11] = g))
              : (g = v[11]),
            v[12] !== H || v[13] !== F || v[14] !== Y || v[15] !== X || v[16] !== f || v[17] !== p || v[18] !== g
              ? ((k = {
                  icon: Y,
                  title: F,
                  description: H,
                  isOpen: X,
                  onOpenChange: W,
                  headerActions: f,
                  footer: p,
                  children: g,
                }),
                (v[12] = H),
                (v[13] = F),
                (v[14] = Y),
                (v[15] = X),
                (v[16] = f),
                (v[17] = p),
                (v[18] = g),
                (v[19] = k))
              : (k = v[19]))
          let ee = k
          return (
            v[20] !== G || v[21] !== E || v[22] !== C || v[23] !== N || v[24] !== $ || v[25] !== J || v[26] !== B
              ? ((x =
                  "settings" !== B || G
                    ? null
                    : (0, t.jsx)(d.ic, {
                        label: N,
                        description: C,
                        control: "function" == typeof E ? E({ ignoreNextPreview: $, openPreview: J }) : E,
                      })),
                (v[20] = G),
                (v[21] = E),
                (v[22] = C),
                (v[23] = N),
                (v[24] = $),
                (v[25] = J),
                (v[26] = B),
                (v[27] = x))
              : (x = v[27]),
            v[28] !== G || v[29] !== E || v[30] !== C || v[31] !== N || v[32] !== $ || v[33] !== J || v[34] !== B
              ? ((b =
                  "settings" === B && G
                    ? (0, t.jsx)(d.kG, {
                        edgeRounding: "surface",
                        label: N,
                        description: C,
                        trailing: (0, t.jsx)(o.uM3, {}),
                        actionsPlacement: "before-trailing",
                        actions: "function" == typeof E ? E({ ignoreNextPreview: $, openPreview: J }) : E,
                        onClick: J,
                      })
                    : null),
                (v[28] = G),
                (v[29] = E),
                (v[30] = C),
                (v[31] = N),
                (v[32] = $),
                (v[33] = J),
                (v[34] = B),
                (v[35] = b))
              : (b = v[35]),
            v[36] !== G ||
            v[37] !== E ||
            v[38] !== L ||
            v[39] !== C ||
            v[40] !== _ ||
            v[41] !== I ||
            v[42] !== M ||
            v[43] !== A ||
            v[44] !== w ||
            v[45] !== N ||
            v[46] !== $ ||
            v[47] !== R ||
            v[48] !== T ||
            v[49] !== J ||
            v[50] !== B
              ? ((j =
                  "settings" !== B
                    ? (0, t.jsx)(r.D, {
                        ref: w,
                        className: (0, n.A)(
                          "justify-center text-base select-none",
                          "card" === B ? "p-4" : "border-none",
                          null != E && "group",
                        ),
                        contentClassName: (0, n.A)(R && "opacity-60"),
                        icon: I,
                        iconContainer: M,
                        iconContainerVariant: A,
                        title: N,
                        description: C,
                        descriptionClassName: "line-clamp-1 text-codex-description",
                        descriptionPlacement: _,
                        badges: L,
                        isHighlighted: T,
                        presentation: B,
                        actions: "function" == typeof E ? E({ ignoreNextPreview: $, openPreview: J }) : E,
                        actionsPlacement: "center",
                        onClick: G ? J : void 0,
                      })
                    : null),
                (v[36] = G),
                (v[37] = E),
                (v[38] = L),
                (v[39] = C),
                (v[40] = _),
                (v[41] = I),
                (v[42] = M),
                (v[43] = A),
                (v[44] = w),
                (v[45] = N),
                (v[46] = $),
                (v[47] = R),
                (v[48] = T),
                (v[49] = J),
                (v[50] = B),
                (v[51] = j))
              : (j = v[51]),
            v[52] !== U || v[53] !== D || v[54] !== ee || v[55] !== F || v[56] !== O || v[57] !== B
              ? ((y =
                  "settings" === B
                    ? (0, t.jsx)(c.P, { ...ee, name: D, title: O ?? F })
                    : (0, t.jsx)(u.d5, { ...ee, iconShape: U, titleText: O })),
                (v[52] = U),
                (v[53] = D),
                (v[54] = ee),
                (v[55] = F),
                (v[56] = O),
                (v[57] = B),
                (v[58] = y))
              : (y = v[58]),
            v[59] !== x || v[60] !== b || v[61] !== j || v[62] !== y
              ? ((S = (0, t.jsxs)(t.Fragment, { children: [x, b, j, y] })),
                (v[59] = x),
                (v[60] = b),
                (v[61] = j),
                (v[62] = y),
                (v[63] = S))
              : (S = v[63]),
            S
          )
        },
      },
    )
  },
  no0e(e, l, s) {
    s.d(l, { SkillsPage: () => ed })
    var t = s("ABep"),
      i = s("QosV"),
      n = s("SIRb"),
      a = s("iRMi"),
      o = s("mjZ0"),
      r = s("ECyk"),
      d = s("zTeN"),
      c = s("zd8w"),
      u = s("Wf1j"),
      m = s("oyxz"),
      h = s("HZfM"),
      f = s("oYYx"),
      p = s("OAko"),
      g = s("aTcy"),
      k = s("ygO2"),
      x = s("HOLv"),
      b = s("FrrB"),
      j = s("okCa"),
      y = s("Q8aV"),
      S = s("v4LA"),
      v = s("yGJW"),
      w = s("kx7U"),
      I = s("OWtl"),
      M = s("IXY8"),
      A = s("fHlE"),
      N = s("odCE"),
      C = s("kfGJ"),
      _ = s("khOd"),
      L = s("kEV3"),
      E = s("MQKw"),
      P = s("xAYF"),
      T = s("f22a"),
      R = s("oom3"),
      B = s("Ekos"),
      U = s("xBcA"),
      F = s("hbRe"),
      O = s("ZGaK"),
      D = s("XvU9"),
      z = s("NVRI"),
      H = s("kpIY")
    function q() {}
    var Q = s("bq7F"),
      G = s("xhdJ"),
      V = s("VgPM"),
      W = s("on57"),
      K = s("PkPj"),
      J = s("GKsW"),
      $ = s("pasN"),
      Z = s("funJ")
    function Y(e) {
      let l,
        s,
        n,
        a,
        o,
        r,
        f,
        p,
        g,
        k,
        x,
        b,
        j,
        y,
        S,
        v,
        w,
        M = (0, i.c)(37),
        { hostId: A } = e,
        N = (0, d.gh)(I.u),
        E = (0, d.Ul)(_.GB),
        B = (0, u.A)(),
        U = (0, h.zy)(),
        F = (0, d.Ul)($.l)
      M[0] !== U.state ? ((l = (0, R.qC)(U.state)), (M[0] = U.state), (M[1] = l)) : (l = M[1])
      let z = l
      M[2] !== U.search || M[3] !== z
        ? ((s = (0, R.a5)(U.search) ?? z.initialSearchQuery ?? ""), (M[2] = U.search), (M[3] = z), (M[4] = s))
        : (s = M[4])
      let [H, q] = (0, c.useState)(s),
        [V, Y] = (0, c.useState)(0),
        [et, ei] = (0, c.useState)(null),
        en = (0, c.useRef)(null),
        ea = (0, c.useRef)(null),
        eo = A === C.fI
      M[5] !== eo ? ((n = { enabled: eo }), (M[5] = eo), (M[6] = n)) : (n = M[6])
      let er = (0, d.Ul)(Q.$g, n),
        {
          forceReloadSkills: ed,
          installedSkillMatchKeys: ec,
          isLoading: eu,
          markSkillsUpdated: em,
          standaloneInstalledSkills: eh,
          workspaceRoots: ef,
        } = (0, D.Cy)(A),
        { canInstallRecommendedSkills: ep, defaultRecommendedRepoRoot: eg } = (0, D.p1)(A),
        { errorMessage: ek, isLoading: ex, repoRoot: eb, skills: ej } = (0, D.Jc)(eg, A, ep)
      ;(M[7] !== U.key || M[8] !== N
        ? ((a = () => {
            N.set(P.yb, U.key, !0)
          }),
          (M[7] = U.key),
          (M[8] = N),
          (M[9] = a))
        : (a = M[9]),
        M[10] !== ed || M[11] !== A || M[12] !== a
          ? ((o = { forceReloadSkills: ed, hostId: A, onInstalled: a }),
            (M[10] = ed),
            (M[11] = A),
            (M[12] = a),
            (M[13] = o))
          : (o = M[13]))
      let {
          clearInstalledRecommendedSkills: ey,
          installRecommendedSkill: eS,
          installedRecommendedSkillIds: ev,
          installingSkillId: ew,
        } = (0, D.zS)(o),
        eI = (0, R.NP)(B, "skills"),
        eM = H.trim().toLowerCase(),
        eA = eM.length > 0,
        eN = (0, T.sq)({ skills: eh, query: eM }),
        eC = (0, T.TI)({ query: eM, suggestions: A === C.fI ? er : null }),
        e_ = (0, T.Pg)({ skills: ej, query: eM }),
        eL = (0, T.NZ)(e_),
        eE = (0, T.EH)({ installedRecommendedSkillIds: ev, installedSkillMatchKeys: ec, skills: eA ? e_ : eL }),
        eP = (0, T.Qd)({ installedSkills: eN, recommendedSkills: eE }),
        eT = (function ({ intl: e, roots: l, skillEntries: s }) {
          let t = new Map()
          for (let i of s) {
            let s = (0, L.IG)({ skill: i.skill, roots: l, intl: e }),
              n = t.get(s)
            if (null == n) {
              t.set(s, {
                id: `skills-installed-${s
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`,
                title: s,
                skillEntries: [i],
              })
              continue
            }
            n.skillEntries.push(i)
          }
          return Array.from(t.values())
        })({ intl: B, roots: ef, skillEntries: eP }),
        eR = eA ? [...eC.map(es), ...eP.map(el), ...eE.map(ee)] : [],
        eB = 0 === eR.length ? null : Math.min(V, eR.length - 1),
        eU = null == eB ? null : (eR[eB] ?? null),
        eF = eu || eT.length > 0 || eP.length > 0,
        eO = ex || null != ek || eE.length > 0,
        eD = eI.sections.at(-1) ?? null,
        ez = [...eT.map(X), ...(eO && null != eD ? [eD] : [])],
        eH = ez.some((e) => e.id === et) ? et : (ez[0]?.id ?? null),
        eq = eF ? (eI.sections[0] ?? null) : null
      M[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (e) => {
            ;(q(e), Y(0))
          }),
          (M[14] = r))
        : (r = M[14])
      let eQ = r,
        eG = () => {
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
        ? ((p = () => {
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
          (M[17] = p))
        : (p = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel") ? ((g = []), (M[18] = g)) : (g = M[18]),
        (0, c.useEffect)(p, g),
        M[19] !== B
          ? ((k = B.formatMessage({
              id: "skills.appsPage.browseIntro.skillsTitle",
              defaultMessage: "Skills",
              description: "Title shown at the top of the skills browse page",
            })),
            (M[19] = B),
            (M[20] = k))
          : (k = M[20]),
        M[21] !== k ? ((x = (0, t.jsx)(J.Q, { title: k })), (M[21] = k), (M[22] = x)) : (x = M[22]),
        M[23] !== E
          ? ((b = E ? (0, t.jsx)(G.E, { browseTab: "skills", inline: !0 }) : void 0), (M[23] = E), (M[24] = b))
          : (b = M[24]),
        M[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, t.jsx)(m.A, {
              id: "skills.appsPage.browseIntro.skillsTitle",
              defaultMessage: "Skills",
              description: "Title shown at the top of the skills browse page",
            })),
            (M[25] = j))
          : (j = M[25]),
        M[26] !== F
          ? ((y =
              "codex" === F
                ? (0, t.jsx)(m.A, {
                    id: "skills.appsPage.browseIntro.codexSkillsSubtitle",
                    defaultMessage: "Extend Codex with task-specific skills",
                    description:
                      "Subtitle shown at the top of the skills browse page while the Codex product mode is selected",
                  })
                : (0, t.jsx)(m.A, {
                    id: "skills.appsPage.browseIntro.skillsSubtitle",
                    defaultMessage: "Extend ChatGPT with task-specific skills",
                    description: "Subtitle shown at the top of the skills browse page",
                  })),
            (M[26] = F),
            (M[27] = y))
          : (y = M[27]))
      let eW = !eA && "flex-1"
      M[28] !== eW ? ((S = (0, W.A)("flex min-h-0 flex-col gap-8", eW)), (M[28] = eW), (M[29] = S)) : (S = M[29])
      let eK =
        !eA || eR.length > 0
          ? (0, t.jsx)(Z.Z, {
              canInstallRecommendedSkills: ep,
              errorMessage: ek,
              hostId: A,
              highlightedInstalledSkillPath: eU?.startsWith("installed-skill:") ? eU.slice(16) : null,
              highlightedRecommendedSkillId: eU?.startsWith("recommended-skill:") ? eU.slice(18) : null,
              highlightedSuggestedSkillId: eU?.startsWith("suggested-skill:") ? eU.slice(16) : null,
              installedSkillGroups: eT,
              installedStateAction: "check",
              installedSection: eq,
              installedRecommendedSkillIds: ev,
              installedSkills: eP,
              installedSkillsForRecommendedActions: eh,
              installingSkillId: ew,
              isLoadingInstalledSkills: eu,
              isLoadingRecommendedSkills: ex,
              onInstallRecommendedSkill: eS,
              onInstalledRecommendedSkillUpdated: () => {
                ;(ey(), em())
              },
              onSelectSection: ei,
              onSkillsUpdated: em,
              recommendedRepoRoot: eb,
              recommendedSection: eO ? eD : null,
              recommendedSkills: eE,
              roots: ef,
              selectedSectionId: eH,
              suggestedSkills: eC,
              searchResultsTitle: eA
                ? (0, t.jsx)(m.A, {
                    id: "skills.appsPage.skillsFilter.all",
                    defaultMessage: "Skills",
                    description: "Label for the Skills option in the browse filter dropdown on the Skills & Apps page",
                  })
                : void 0,
            })
          : null
      return (
        M[30] !== eA || M[31] !== eR
          ? ((v =
              eA && 0 === eR.length
                ? (0, t.jsx)("div", {
                    className: "text-base text-secondary",
                    children: (0, t.jsx)(m.A, {
                      id: "skills.appsPage.empty.skills",
                      defaultMessage: "No skills found",
                      description: "Empty state title when no skills match filters on the Skills & Apps page",
                    }),
                  })
                : null),
            (M[30] = eA),
            (M[31] = eR),
            (M[32] = v))
          : (v = M[32]),
        M[33] !== S || M[34] !== eK || M[35] !== v
          ? ((w = (0, t.jsxs)("div", { className: S, children: [eK, v] })),
            (M[33] = S),
            (M[34] = eK),
            (M[35] = v),
            (M[36] = w))
          : (w = M[36]),
        (0, t.jsxs)(O.d, {
          className: "flex h-full w-full flex-1 flex-col gap-8",
          children: [
            x,
            (0, t.jsx)(K.Ql, {
              animateContentLayout: !1,
              contentClassName: E ? "pt-2" : void 0,
              contentWidth: "medium",
              headerPlacement: E ? "sticky" : "page",
              headerVariant: E ? "compact" : "inset",
              collapseHeaderOnScroll: E,
              expandSearchWhenWrapped: E,
              wrapActionsAtNarrowWidth: E,
              headerAction: b,
              scrollContainerRef: ea,
              title: j,
              subtitle: y,
              search: {
                variant: E ? "toolbar-compact" : "default",
                id: "plugins-page-search",
                inputRef: en,
                label: eI.searchLabel,
                onKeyDown: (e) => {
                  if (eA && 0 !== eR.length) {
                    if ("ArrowDown" === e.key) {
                      ;(e.preventDefault(), Y(Math.min((eB ?? 0) + 1, eR.length - 1)), eG())
                      return
                    }
                    if ("ArrowUp" === e.key) {
                      ;(e.preventDefault(), Y(Math.max((eB ?? 0) - 1, 0)), eG())
                      return
                    }
                    if ("Enter" === e.key) {
                      let l = ea.current?.querySelector("[data-search-result-active='true']")
                      l instanceof HTMLElement && (e.preventDefault(), l.click())
                    }
                  }
                },
                onSearchQueryChange: eQ,
                placeholder: eI.searchPlaceholder,
                searchQuery: H,
              },
              children: w,
            }),
          ],
        })
      )
    }
    function X(e) {
      return { id: e.id, title: e.title }
    }
    function ee(e) {
      return `recommended-skill:${e.id}`
    }
    function el(e) {
      let { skill: l } = e
      return `installed-skill:${l.path}`
    }
    function es(e) {
      return `suggested-skill:${e.id}`
    }
    function et(e) {
      let l,
        s,
        n,
        a = (0, i.c)(6),
        { navigation: o } = e,
        r = (0, d.Ul)(_.GB)
      return (
        a[0] !== r || a[1] !== o
          ? ((l = r ? null : (0, t.jsx)(G.E, { browseTab: "plugins", navigation: o })),
            (a[0] = r),
            (a[1] = o),
            (a[2] = l))
          : (l = a[2]),
        a[3] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, t.jsx)(V.p, {})), (a[3] = s)) : (s = a[3]),
        a[4] !== l
          ? ((n = (0, t.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [l, s] })),
            (a[4] = l),
            (a[5] = n))
          : (n = a[5]),
        n
      )
    }
    function ei(e) {
      let l,
        s,
        n,
        a,
        o = (0, i.c)(11),
        { hostId: r, navigation: c } = e,
        u = (0, d.Ul)(_.GB)
      return (
        o[0] !== r ? ((l = r === C.fI ? (0, t.jsx)(en, {}) : null), (o[0] = r), (o[1] = l)) : (l = o[1]),
        o[2] !== u || o[3] !== c
          ? ((s = u ? null : (0, t.jsx)(G.E, { browseTab: "skills", navigation: c })),
            (o[2] = u),
            (o[3] = c),
            (o[4] = s))
          : (s = o[4]),
        o[5] !== r ? ((n = (0, t.jsx)(Y, { hostId: r })), (o[5] = r), (o[6] = n)) : (n = o[6]),
        o[7] !== l || o[8] !== s || o[9] !== n
          ? ((a = (0, t.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [l, s, n] })),
            (o[7] = l),
            (o[8] = s),
            (o[9] = n),
            (o[10] = a))
          : (a = o[10]),
        a
      )
    }
    function en() {
      return (0, d.Ul)(Q.tr)
    }
    var ea = s("FgWs"),
      eo = s("fQ1s"),
      er = s("g5cM")
    function ed() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsxs)(t.Fragment, {
              children: [null, (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(ec, {}) })],
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    function ec() {
      let e,
        l,
        s = (0, i.c)(5),
        n = (0, h.zy)(),
        a = (0, eo.x)()
      s[0] !== n.search ? ((e = (0, R.a5)(n.search)), (s[0] = n.search), (s[1] = e)) : (e = s[1])
      let o = e
      if (a) {
        let e
        return (
          s[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(eu, {})), (s[2] = e)) : (e = s[2]),
          e
        )
      }
      return (s[3] !== o ? ((l = (0, t.jsx)(em, { initialSearchQuery: o })), (s[3] = o), (s[4] = l)) : (l = s[4]), l)
    }
    function eu() {
      let e,
        l,
        s,
        n,
        a,
        o,
        r = (0, i.c)(23),
        c = (0, d.gh)(I.u),
        u = (0, d.Ul)(_.GB),
        m = (0, h.zy)()
      r[0] !== m.search || r[1] !== m.state
        ? ((e = (0, R.qC)(m.state, m.search)), (r[0] = m.search), (r[1] = m.state), (r[2] = e))
        : (e = r[2])
      let p = e,
        g = (0, d._U)(P.Mi, m.key),
        k = null == g && "skills" === p.initialTab ? "skills" : "plugins"
      r[3] !== k || r[4] !== m.key
        ? ((l = { historyKey: m.key, initialTab: k }), (r[3] = k), (r[4] = m.key), (r[5] = l))
        : (l = r[5])
      let x = (0, d._U)(P._r, l),
        b = g?.selectedHostId ?? p.initialHostId ?? C.fI
      r[6] !== b || r[7] !== m.key
        ? ((s = { historyKey: m.key, initialHostId: b }), (r[6] = b), (r[7] = m.key), (r[8] = s))
        : (s = r[8])
      let j = (0, d._U)(P.ff, s),
        y = (0, d.Ul)(w.u8) ?? [],
        S = (0, f.g)(y)
      r[9] !== S || r[10] !== j ? ((n = (0, A.B)(j, S)), (r[9] = S), (r[10] = j), (r[11] = n)) : (n = r[11])
      let v = n,
        M = x
      ;(u && (M = "/skills" === m.pathname ? "skills" : "plugins"),
        r[12] !== M || r[13] !== u || r[14] !== k || r[15] !== m.key || r[16] !== c || r[17] !== v
          ? ((a = u
              ? void 0
              : (0, t.jsx)(er.C, {
                  currentBrowseTab: M,
                  hostId: v,
                  onBrowseTabSelect: (e) => {
                    c.set(P._r, { historyKey: m.key, initialTab: k }, e)
                  },
                })),
            (r[12] = M),
            (r[13] = u),
            (r[14] = k),
            (r[15] = m.key),
            (r[16] = c),
            (r[17] = v),
            (r[18] = a))
          : (a = r[18]))
      let N = a
      return (
        r[19] !== M || r[20] !== N || r[21] !== v
          ? ((o =
              "skills" === M ? (0, t.jsx)(ei, { hostId: v, navigation: N }, v) : (0, t.jsx)(et, { navigation: N }, v)),
            (r[19] = M),
            (r[20] = N),
            (r[21] = v),
            (r[22] = o))
          : (o = r[22]),
        o
      )
    }
    function em(e) {
      let l,
        s,
        n,
        h,
        g,
        b,
        S,
        N,
        _,
        P,
        T,
        R,
        B,
        U,
        Q,
        G,
        V,
        W,
        K,
        J,
        $,
        Z,
        Y,
        X,
        ee,
        el,
        es,
        et,
        ei,
        en,
        eo,
        er,
        ed,
        ec,
        eu = (0, i.c)(97),
        { initialSearchQuery: em } = e,
        ep = (0, d.gh)(I.u),
        ex = (0, u.A)(),
        { data: ej } = (0, p.YL)(),
        ey = (0, y.p8)(),
        eS = (0, d.Ul)(w.u8),
        ev = (0, f.g)(eS),
        [ew, eI] = (0, c.useState)(C.fI)
      eu[0] !== ev || eu[1] !== ew ? ((l = (0, A.B)(ew, ev)), (eu[0] = ev), (eu[1] = ew), (eu[2] = l)) : (l = eu[2])
      let eM = l,
        [eA, eN] = (0, c.useState)(null),
        [eC, e_] = (0, c.useState)(null)
      eu[3] !== eC || eu[4] !== eA
        ? ((s = { container: eA, target: eC }), (eu[3] = eC), (eu[4] = eA), (eu[5] = s))
        : (s = eu[5])
      let eL = (function (e) {
          let l,
            s,
            t = (0, i.c)(6),
            { container: n, target: a } = e
          t[0] !== n || t[1] !== a
            ? ((l = (e) => {
                if (!n || !a) return q
                let l = () => {
                  e()
                }
                n.addEventListener("scroll", l, { passive: !0 })
                let s = "u" < typeof ResizeObserver ? null : new ResizeObserver(l)
                return (
                  s && (s.observe(n), s.observe(a)),
                  () => {
                    ;(n.removeEventListener("scroll", l), s && s.disconnect())
                  }
                )
              }),
              (t[0] = n),
              (t[1] = a),
              (t[2] = l))
            : (l = t[2])
          let o = l
          t[3] !== n || t[4] !== a
            ? ((s = () => {
                if (!n || !a) return !0
                let e = n.getBoundingClientRect(),
                  l = a.getBoundingClientRect()
                return l.bottom > e.top && l.top < e.bottom
              }),
              (t[3] = n),
              (t[4] = a),
              (t[5] = s))
            : (s = t[5])
          let r = s
          return (0, c.useSyncExternalStore)(o, r, r)
        })(s),
        [eE, eP] = (0, c.useState)(void 0 === em ? "" : em),
        [eT, eR] = (0, c.useState)(!1),
        eB = (0, d.Ul)(ea.HL) ?? (0, H.TB)(ea.e2, !1),
        {
          forceReloadSkills: eU,
          installedSkillMatchKeys: eF,
          isFetching: eO,
          isLoading: eD,
          markSkillsUpdated: ez,
          standaloneInstalledSkills: eH,
          workspaceRoots: eq,
        } = (0, D.Cy)(eM),
        { canInstallRecommendedSkills: eQ, defaultRecommendedRepoRoot: eG, skillCreatorPath: eV } = (0, D.p1)(eM),
        { errorMessage: eW, isLoading: eK, refresh: eJ, repoRoot: e$, skills: eZ } = (0, D.Jc)(eG, eM, eQ)
      ;(eu[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            eR(!0)
          }),
          (eu[6] = n))
        : (n = eu[6]),
        eu[7] !== eU || eu[8] !== eM
          ? ((h = { forceReloadSkills: eU, hostId: eM, onInstalled: n }), (eu[7] = eU), (eu[8] = eM), (eu[9] = h))
          : (h = eu[9]))
      let { installRecommendedSkill: eY, installingSkillId: eX } = (0, D.zS)(h)
      eu[10] !== ex ? ((g = (0, L.V_)({ scope: "repo", intl: ex })), (eu[10] = ex), (eu[11] = g)) : (g = eu[11])
      let e0 = g,
        e1 = ej?.name ?? void 0
      eu[12] !== ex || eu[13] !== e1
        ? ((b = (0, L.V_)({ scope: "admin", intl: ex, adminLabel: e1 })), (eu[12] = ex), (eu[13] = e1), (eu[14] = b))
        : (b = eu[14])
      let e2 = b
      eu[15] !== ex || eu[16] !== e2 || eu[17] !== e0 || eu[18] !== eq
        ? ((S = (e) => {
            let { scope: l, skillPath: s } = e
            return (0, L.V_)({
              scope: l,
              intl: ex,
              repoLabel: (0, L._i)({ skillPath: s, roots: eq, fallbackLabel: e0 }),
              adminLabel: e2,
            })
          }),
          (eu[15] = ex),
          (eu[16] = e2),
          (eu[17] = e0),
          (eu[18] = eq),
          (eu[19] = S))
        : (S = eu[19])
      let e3 = S
      if (eu[20] !== eE || eu[21] !== eH) {
        let e = eE.trim().toLowerCase()
        ;((N = eH.filter((l) => {
          let { skill: s } = l
          if (0 === e.length) return !0
          let t = (0, E.a)(s).toLowerCase(),
            i = (0, F.nf)(s).toLowerCase()
          return s.name.toLowerCase().includes(e) || i.includes(e) || t.includes(e)
        })),
          (eu[20] = eE),
          (eu[21] = eH),
          (eu[22] = N))
      } else N = eu[22]
      let e5 = N
      eu[23] !== ez || eu[24] !== eJ
        ? ((_ = async () => {
            ;(ez(), await eJ(), eR(!1))
          }),
          (eu[23] = ez),
          (eu[24] = eJ),
          (eu[25] = _))
        : (_ = eu[25])
      let e4 = _
      ;(eu[26] === Symbol.for("react.memo_cache_sentinel") ? ((P = []), (eu[26] = P)) : (P = eu[26]),
        (0, c.useEffect)(ef, P),
        eu[27] !== eL
          ? ((T = eL
              ? null
              : (0, t.jsx)(m.A, {
                  id: "skills.page.heading",
                  defaultMessage: "Skills",
                  description: "Header title for the skills page",
                })),
            (eu[27] = eL),
            (eu[28] = T))
          : (T = eu[28]),
        eu[29] !== ev || eu[30] !== eM
          ? ((R =
              null != ev && ev.length > 0
                ? (0, t.jsx)(M.r, { connectedRemoteConnections: ev, onSelectHost: eI, selectedHostId: eM })
                : null),
            (eu[29] = ev),
            (eu[30] = eM),
            (eu[31] = R))
          : (R = eu[31]))
      let e6 = eT ? "secondary" : "ghost"
      eu[32] !== e4
        ? ((B = () => {
            e4()
          }),
          (eu[32] = e4),
          (eu[33] = B))
        : (B = eu[33])
      let e8 = eD || eO
      ;(eu[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = (0, t.jsx)(x.I, { "aria-hidden": !1, asset: o.S })), (eu[34] = U))
        : (U = eu[34]),
        eu[35] !== eT
          ? ((Q = (0, t.jsx)("span", {
              className: "hidden lg:inline",
              children: eT
                ? (0, t.jsx)(m.A, {
                    id: "skills.page.refreshSkillsToUseNew",
                    defaultMessage: "Refresh to use new skill(s)",
                    description:
                      "Button label shown when newly installed skills require a refresh before they can be used in the composer",
                  })
                : (0, t.jsx)(m.A, {
                    id: "skills.page.refreshSkills",
                    defaultMessage: "Refresh",
                    description: "Button label for reloading skills list",
                  }),
            })),
            (eu[35] = eT),
            (eu[36] = Q))
          : (Q = eu[36]),
        eu[37] !== e6 || eu[38] !== B || eu[39] !== e8 || eu[40] !== Q
          ? ((G = (0, t.jsxs)(k.$, { color: e6, size: "toolbar", onClick: B, disabled: e8, children: [U, Q] })),
            (eu[37] = e6),
            (eu[38] = B),
            (eu[39] = e8),
            (eu[40] = Q),
            (eu[41] = G))
          : (G = eu[41]),
        eu[42] !== ex
          ? ((V = ex.formatMessage({
              id: "skills.page.search.label",
              defaultMessage: "Search skills",
              description: "Label for the skills page search input",
            })),
            (eu[42] = ex),
            (eu[43] = V))
          : (V = eu[43]),
        eu[44] !== ex
          ? ((W = ex.formatMessage({
              id: "skills.page.search",
              defaultMessage: "Search skills",
              description: "Placeholder for the skills page search input",
            })),
            (eu[44] = ex),
            (eu[45] = W))
          : (W = eu[45]),
        eu[46] !== eE || eu[47] !== V || eu[48] !== W
          ? ((K = (0, t.jsx)("div", {
              className: "hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none",
              children: (0, t.jsx)(j.s, {
                id: "skills-search",
                autoFocus: !0,
                label: V,
                placeholder: W,
                searchQuery: eE,
                onSearchQueryChange: eP,
              }),
            })),
            (eu[46] = eE),
            (eu[47] = V),
            (eu[48] = W),
            (eu[49] = K))
          : (K = eu[49]),
        eu[50] !== eB || eu[51] !== ep || eu[52] !== eV || eu[53] !== ey
          ? ((J = () => {
              if (!eV) return
              ;(0, v.yy)(ep, a.CodexSkillNewClicked, {})
              let e = (0, ea.Px)({ creatorPath: eV, includeStarterPrompt: !eB, kind: "skill" })
              ;(eB || ep.set(ea.HL, !0), ey({ prefillPrompt: e, startInSidebar: !0 }))
            }),
            (eu[50] = eB),
            (eu[51] = ep),
            (eu[52] = eV),
            (eu[53] = ey),
            (eu[54] = J))
          : (J = eu[54]))
      let e7 = !eV
      return (
        eu[55] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, t.jsx)(x.I, { "aria-hidden": !1, asset: r.f })),
            (Z = (0, t.jsx)(m.A, {
              id: "skills.page.createSkill",
              defaultMessage: "New skill",
              description: "Button label for creating a new skill",
            })),
            (eu[55] = $),
            (eu[56] = Z))
          : (($ = eu[55]), (Z = eu[56])),
        eu[57] !== J || eu[58] !== e7
          ? ((Y = (0, t.jsxs)(k.$, { color: "primary", size: "toolbar", onClick: J, disabled: e7, children: [$, Z] })),
            (eu[57] = J),
            (eu[58] = e7),
            (eu[59] = Y))
          : (Y = eu[59]),
        eu[60] !== R || eu[61] !== G || eu[62] !== K || eu[63] !== Y
          ? ((X = (0, t.jsxs)("div", { className: "flex flex-nowrap items-center gap-1.5", children: [R, G, K, Y] })),
            (eu[60] = R),
            (eu[61] = G),
            (eu[62] = K),
            (eu[63] = Y),
            (eu[64] = X))
          : (X = eu[64]),
        eu[65] !== T || eu[66] !== X
          ? ((ee = (0, t.jsx)(z.J, { start: T, trailing: X })), (eu[65] = T), (eu[66] = X), (eu[67] = ee))
          : (ee = eu[67]),
        eu[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (e) => {
              eN(e)
            }),
            (eu[68] = el))
          : (el = eu[68]),
        eu[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              e_(e)
            }),
            (eu[69] = es))
          : (es = eu[69]),
        eu[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, t.jsx)("div", {
              className: "heading-xl font-normal text-default",
              children: (0, t.jsx)(m.A, {
                id: "skills.page.heading",
                defaultMessage: "Skills",
                description: "Header title for the skills page",
              }),
            })),
            (eu[70] = et))
          : (et = eu[70]),
        eu[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (0, t.jsx)("div", {
              className: "flex items-end justify-between gap-4",
              children: (0, t.jsxs)("div", {
                className: "flex flex-col gap-1",
                ref: es,
                children: [
                  et,
                  (0, t.jsx)("div", {
                    className: "text-lg font-normal text-codex-description",
                    children: (0, t.jsx)(m.A, {
                      id: "skills.page.subheading",
                      defaultMessage: "Add reusable workflows with Skills. <link>Learn more</link>",
                      description: "Subheading shown above the skills sections",
                      values: { link: eh },
                    }),
                  }),
                ],
              }),
            })),
            (eu[71] = ei))
          : (ei = eu[71]),
        eu[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, t.jsx)(m.A, {
              id: "skills.section.installed",
              defaultMessage: "Installed",
              description: "Heading for the installed skills section",
            })),
            (eu[72] = en))
          : (en = eu[72]),
        eu[73] !== e5 || eu[74] !== e3 || eu[75] !== eD || eu[76] !== ez || eu[77] !== eM || eu[78] !== eH.length
          ? ((eo = (0, t.jsx)(eg, {
              title: en,
              children: (0, t.jsx)(ek, {
                hostId: eM,
                isLoading: eD,
                uniqueSkillCount: eH.length,
                filteredSkills: e5,
                getScopeBadgeLabel: e3,
                onSkillsUpdated: ez,
              }),
            })),
            (eu[73] = e5),
            (eu[74] = e3),
            (eu[75] = eD),
            (eu[76] = ez),
            (eu[77] = eM),
            (eu[78] = eH.length),
            (eu[79] = eo))
          : (eo = eu[79]),
        eu[80] !== eQ ||
        eu[81] !== eY ||
        eu[82] !== eF ||
        eu[83] !== eX ||
        eu[84] !== eK ||
        eu[85] !== e$ ||
        eu[86] !== eZ ||
        eu[87] !== eW ||
        eu[88] !== eE ||
        eu[89] !== eM
          ? ((er = eQ
              ? (0, t.jsx)(eg, {
                  title: (0, t.jsx)(m.A, {
                    id: "skills.section.recommended",
                    defaultMessage: "Recommended",
                    description: "Heading for the recommended skills section",
                  }),
                  children: (0, t.jsx)(eb, {
                    hostId: eM,
                    isLoading: eK,
                    errorMessage: eW,
                    skills: eZ,
                    searchQuery: eE,
                    canInstall: !0,
                    repoRoot: e$,
                    onInstall: eY,
                    installedSkillMatchKeys: eF,
                    installingSkillId: eX,
                  }),
                })
              : null),
            (eu[80] = eQ),
            (eu[81] = eY),
            (eu[82] = eF),
            (eu[83] = eX),
            (eu[84] = eK),
            (eu[85] = e$),
            (eu[86] = eZ),
            (eu[87] = eW),
            (eu[88] = eE),
            (eu[89] = eM),
            (eu[90] = er))
          : (er = eu[90]),
        eu[91] !== eo || eu[92] !== er
          ? ((ed = (0, t.jsx)("div", {
              className: "flex-1 overflow-y-auto p-panel",
              ref: el,
              children: (0, t.jsxs)(O.d, {
                className:
                  "mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8",
                children: [
                  ei,
                  (0, t.jsx)("div", {
                    className: "flex min-h-0 w-full flex-1",
                    children: (0, t.jsxs)("div", {
                      className: "flex min-h-0 flex-1 flex-col gap-9 pb-10",
                      children: [eo, er],
                    }),
                  }),
                ],
              }),
            })),
            (eu[91] = eo),
            (eu[92] = er),
            (eu[93] = ed))
          : (ed = eu[93]),
        eu[94] !== ee || eu[95] !== ed
          ? ((ec = (0, t.jsxs)("div", { className: "me-4 flex h-full flex-col text-base", children: [ee, ed] })),
            (eu[94] = ee),
            (eu[95] = ed),
            (eu[96] = ec))
          : (ec = eu[96]),
        ec
      )
    }
    function eh(e) {
      return (0, t.jsx)("a", {
        href: g.T7,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-info",
        children: e,
      })
    }
    function ef() {
      return ((document.documentElement.dataset.hideHeaderDivider = "true"), ep)
    }
    function ep() {
      delete document.documentElement.dataset.hideHeaderDivider
    }
    function eg(e) {
      let l,
        s,
        n = (0, i.c)(5),
        { title: a, children: o } = e
      return (
        n[0] !== a
          ? ((l = (0, t.jsx)("div", {
              className: "ps-2 pe-0.5 text-base font-medium text-default opacity-75",
              children: a,
            })),
            (n[0] = a),
            (n[1] = l))
          : (l = n[1]),
        n[2] !== o || n[3] !== l
          ? ((s = (0, t.jsxs)("section", { className: "flex flex-col gap-4", children: [l, o] })),
            (n[2] = o),
            (n[3] = l),
            (n[4] = s))
          : (s = n[4]),
        s
      )
    }
    function ek(e) {
      let l,
        s,
        n = (0, i.c)(14),
        {
          hostId: a,
          isLoading: o,
          uniqueSkillCount: r,
          filteredSkills: d,
          getScopeBadgeLabel: c,
          onSkillsUpdated: u,
        } = e
      if (o) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, t.jsx)(N.j, {
                  children: (0, t.jsx)(m.A, {
                    id: "skills.page.loading",
                    defaultMessage: "Loading skills…",
                    description: "Loading label on the skills page",
                  }),
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (0 === r) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, t.jsx)(b.A, {
                  title: (0, t.jsx)(m.A, {
                    id: "skills.page.empty",
                    defaultMessage: "No skills found",
                    description: "Empty state on the skills page",
                  }),
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
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center",
                children: (0, t.jsx)(b.A, {
                  title: (0, t.jsx)(m.A, {
                    id: "skills.page.filteredEmpty",
                    defaultMessage: "No skills match your filters",
                    description: "Empty state when filters hide all skills",
                  }),
                  description: (0, t.jsx)(m.A, {
                    id: "skills.page.filteredEmptyDescription",
                    defaultMessage: "Try adjusting your search or scope filters",
                    description: "Description for filtered skills empty state",
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
                s =
                  "repo" === l.scope
                    ? [(0, t.jsx)(ex, { label: c({ scope: "repo", skillPath: l.path }) }, `${l.path}-repo`)]
                    : []
              return (0, t.jsx)(
                U.A,
                { skill: l, displayName: (0, F.nf)(l), hostId: a, scopeBadges: s, onSkillsUpdated: u },
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
      return (n[12] !== l ? ((s = (0, t.jsx)(O.q, { children: l })), (n[12] = l), (n[13] = s)) : (s = n[13]), s)
    }
    function ex(e) {
      let l,
        s = (0, i.c)(2),
        { label: n } = e
      return (
        s[0] !== n
          ? ((l = (0, t.jsx)("span", { className: "text-codex-description", children: n })), (s[0] = n), (s[1] = l))
          : (l = s[1]),
        l
      )
    }
    function eb(e) {
      let l,
        s,
        n,
        a,
        o = (0, i.c)(31),
        {
          hostId: r,
          isLoading: d,
          errorMessage: c,
          skills: u,
          searchQuery: h,
          canInstall: f,
          repoRoot: p,
          onInstall: g,
          installedSkillMatchKeys: k,
          installingSkillId: x,
        } = e
      if (
        o[0] !== f ||
        o[1] !== c ||
        o[2] !== r ||
        o[3] !== k ||
        o[4] !== x ||
        o[5] !== d ||
        o[6] !== g ||
        o[7] !== p ||
        o[8] !== h ||
        o[9] !== u
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let e, i
          o[13] !== k
            ? ((e = (e) => !(0, T.b9)({ installedSkillMatchKeys: k, skill: e })), (o[13] = k), (o[14] = e))
            : (e = o[14])
          let a = u.filter(e),
            j = h.trim().toLowerCase(),
            y = a.filter(
              (e) =>
                0 === j.length || [e.name, e.description, e.shortDescription ?? ""].join(" ").toLowerCase().includes(j),
            )
          if (d) {
            let e
            ;(o[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, t.jsx)(N.j, {
                    children: (0, t.jsx)(m.A, {
                      id: "skills.page.loading",
                      defaultMessage: "Loading skills…",
                      description: "Loading label on the skills page",
                    }),
                  }),
                })),
                (o[15] = e))
              : (e = o[15]),
              (n = e))
            break e
          }
          if (c) {
            let e, l
            ;(o[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "skills.recommended.error",
                  defaultMessage: "Unable to load recommended skills",
                  description: "Error title when recommended skills fail to load",
                })),
                (o[16] = e))
              : (e = o[16]),
              o[17] !== c
                ? ((l = (0, t.jsx)("div", {
                    className: "flex min-h-0 flex-1 items-center justify-center",
                    children: (0, t.jsx)(b.A, { title: e, description: c }),
                  })),
                  (o[17] = c),
                  (o[18] = l))
                : (l = o[18]),
              (n = l))
            break e
          }
          if (0 === a.length) {
            let e
            ;(o[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, t.jsx)(b.A, {
                    title: (0, t.jsx)(m.A, {
                      id: "skills.page.empty",
                      defaultMessage: "No skills found",
                      description: "Empty state on the skills page",
                    }),
                  }),
                })),
                (o[19] = e))
              : (e = o[19]),
              (n = e))
            break e
          }
          if (0 === y.length) {
            let e
            ;(o[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center",
                  children: (0, t.jsx)(b.A, {
                    title: (0, t.jsx)(m.A, {
                      id: "skills.page.filteredEmpty",
                      defaultMessage: "No skills match your filters",
                      description: "Empty state when filters hide all skills",
                    }),
                    description: (0, t.jsx)(m.A, {
                      id: "skills.page.filteredEmptyDescription",
                      defaultMessage: "Try adjusting your search or scope filters",
                      description: "Description for filtered skills empty state",
                    }),
                  }),
                })),
                (o[20] = e))
              : (e = o[20]),
              (n = e))
            break e
          }
          ;((l = O.q),
            o[21] !== f || o[22] !== r || o[23] !== k || o[24] !== x || o[25] !== g || o[26] !== p
              ? ((i = (e) => {
                  let l = (0, T.b9)({ installedSkillMatchKeys: k, skill: e }),
                    s = x === e.id
                  return (0, t.jsx)(
                    B.D,
                    { skill: e, canInstall: f, hostId: r, isInstalled: l, isInstalling: s, repoRoot: p, onInstall: g },
                    e.id,
                  )
                }),
                (o[21] = f),
                (o[22] = r),
                (o[23] = k),
                (o[24] = x),
                (o[25] = g),
                (o[26] = p),
                (o[27] = i))
              : (i = o[27]),
            (s = y.map(i)))
        }
        ;((o[0] = f),
          (o[1] = c),
          (o[2] = r),
          (o[3] = k),
          (o[4] = x),
          (o[5] = d),
          (o[6] = g),
          (o[7] = p),
          (o[8] = h),
          (o[9] = u),
          (o[10] = l),
          (o[11] = s),
          (o[12] = n))
      } else ((l = o[10]), (s = o[11]), (n = o[12]))
      return n !== Symbol.for("react.early_return_sentinel")
        ? n
        : (o[28] !== l || o[29] !== s
            ? ((a = (0, t.jsx)(l, { children: s })), (o[28] = l), (o[29] = s), (o[30] = a))
            : (a = o[30]),
          a)
    }
    ;(0, S.e)(n.iw)
  },
  funJ(e, l, s) {
    s.d(l, { j: () => P, Z: () => C })
    var t = s("ABep"),
      i = s("QosV"),
      n = s("zTeN"),
      a = s("zd8w"),
      o = s("Wf1j"),
      r = s("oyxz"),
      d = s("bq7F"),
      c = s("FrrB"),
      u = s("JZv7"),
      m = s("BrP7"),
      h = s("F40t"),
      f = s("odCE"),
      p = s("kEV3"),
      g = s("Ekos"),
      k = s("xBcA"),
      x = s("hbRe"),
      b = s("ZGaK"),
      j = s("xcgE"),
      y = s("ygO2"),
      S = s("Q8aV"),
      v = s("axh8"),
      w = s("n4fT"),
      I = s("hobO")
    function M(e) {
      let l,
        s,
        n,
        d,
        c,
        u,
        m,
        h,
        f,
        p = (0, i.c)(25),
        { isHighlighted: g, suggestion: k } = e,
        x = void 0 !== g && g,
        b = (0, o.A)(),
        M = (0, S.p8)()
      p[0] !== b || p[1] !== M || p[2] !== k
        ? ((l = () => {
            M({ prefillPrompt: (0, j.c)({ intl: b, memoryFilePath: k.memoryFilePath, suggestion: k }) })
          }),
          (p[0] = b),
          (p[1] = M),
          (p[2] = k),
          (p[3] = l))
        : (l = p[3])
      let A = l
      p[4] !== k.description || p[5] !== k.name
        ? ((s = (0, a.createElement)((0, v.h)(null, { fallbackDescription: k.description, fallbackName: k.name }), {
            className: "icon-sm",
          })),
          (p[4] = k.description),
          (p[5] = k.name),
          (p[6] = s))
        : (s = p[6])
      let N = s
      return (
        p[7] !== A
          ? ((n = (e) => {
              ;(e.stopPropagation(), A())
            }),
            (p[7] = A),
            (p[8] = n))
          : (n = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)(r.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
              description: "Button for creating a skill suggested from Computer History",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== n
          ? ((c = (0, t.jsx)(y.$, { color: "secondary", size: "composer", onClick: n, children: d })),
            (p[10] = n),
            (p[11] = c))
          : (c = p[11]),
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)(r.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
              description: "Button for creating a skill suggested from Computer History",
            })),
            (p[12] = u))
          : (u = p[12]),
        p[13] !== A
          ? ((m = (0, t.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, t.jsx)(y.$, { color: "primary", size: "toolbar", onClick: A, children: u }),
            })),
            (p[13] = A),
            (p[14] = m))
          : (m = p[14]),
        p[15] !== k.name
          ? ((h = (0, t.jsx)(I.Rv, { kind: "Skill", title: k.name })), (p[15] = k.name), (p[16] = h))
          : (h = p[16]),
        p[17] !== x ||
        p[18] !== N ||
        p[19] !== k.description ||
        p[20] !== k.name ||
        p[21] !== c ||
        p[22] !== m ||
        p[23] !== h
          ? ((f = (0, t.jsx)(w.C, {
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
            (p[17] = x),
            (p[18] = N),
            (p[19] = k.description),
            (p[20] = k.name),
            (p[21] = c),
            (p[22] = m),
            (p[23] = h),
            (p[24] = f))
          : (f = p[24]),
        f
      )
    }
    var A = s("mIfQ"),
      N = s("f22a")
    function C(e) {
      let l,
        s,
        n,
        d,
        h,
        f,
        p,
        g,
        k,
        x,
        b,
        j,
        y = (0, i.c)(100),
        {
          canInstallRecommendedSkills: S,
          errorMessage: v,
          installedStateAction: w,
          installedSkillGroups: I,
          installedSkills: M,
          installedSkillsForRecommendedActions: A,
          installedRecommendedSkillIds: C,
          highlightedInstalledSkillPath: E,
          highlightedRecommendedSkillId: T,
          highlightedSuggestedSkillId: R,
          hostId: B,
          installingSkillId: U,
          isLoadingInstalledSkills: F,
          isLoadingRecommendedSkills: D,
          onInstallRecommendedSkill: z,
          onInstalledRecommendedSkillUpdated: H,
          onSelectSection: q,
          onSkillsUpdated: Q,
          recommendedRepoRoot: G,
          recommendedSkills: V,
          roots: W,
          selectedSectionId: K,
          suggestedSkills: J,
          searchResultsTitle: $,
          installedSection: Z,
          recommendedSection: Y,
        } = e,
        X = void 0 === w ? "check" : w,
        ee = (0, o.A)(),
        el = (0, a.useRef)(null)
      ;(y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            el.current = null
          }),
          (y[0] = l))
        : (l = y[0]),
        (0, a.useLayoutEffect)(l),
        y[1] !== H
          ? ((s = (e) => {
              ;((el.current = e ?? null), H())
            }),
            (y[1] = H),
            (y[2] = s))
          : (s = y[2]))
      let es = s
      y[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (e, l) => {
            el.current === e &&
              ((el.current = null), l.ownerDocument.activeElement === l.ownerDocument.body && l.focus())
          }),
          (y[3] = n))
        : (n = y[3])
      let et = n
      if (y[4] !== C || y[5] !== A || y[6] !== V) {
        let e
        ;(y[8] !== C || y[9] !== A
          ? ((e = (e) => {
              let l = C.has(e.id)
              return {
                installedSkill: l ? (0, N.gQ)({ installedSkills: A, skill: e }) : null,
                isInstalled: l,
                skill: e,
              }
            }),
            (y[8] = C),
            (y[9] = A),
            (y[10] = e))
          : (e = y[10]),
          (d = V.map(e)),
          (y[4] = C),
          (y[5] = A),
          (y[6] = V),
          (y[7] = d))
      } else d = y[7]
      let ei = d,
        en = null != Z && (I.length > 0 || M.length > 0),
        ea = null != Y && ei.length > 0
      if (!F && !D && null == v && !en && !ea && 0 === J.length) {
        let e
        return (
          y[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, t.jsx)(c.A, {
                  title: (0, t.jsx)(r.A, {
                    id: "skills.appsPage.empty.skills",
                    defaultMessage: "No skills found",
                    description: "Empty state title when no skills match filters on the Skills & Apps page",
                  }),
                }),
              })),
              (y[11] = e))
            : (e = y[11]),
          e
        )
      }
      if (null != $) {
        let e, l, s
        return (
          y[12] !== R || y[13] !== J
            ? ((e = (0, t.jsx)(L, { highlightedSuggestionId: R, suggestions: J })),
              (y[12] = R),
              (y[13] = J),
              (y[14] = e))
            : (e = y[14]),
          y[15] !== S ||
          y[16] !== v ||
          y[17] !== es ||
          y[18] !== E ||
          y[19] !== T ||
          y[20] !== B ||
          y[21] !== M ||
          y[22] !== X ||
          y[23] !== U ||
          y[24] !== F ||
          y[25] !== D ||
          y[26] !== z ||
          y[27] !== Q ||
          y[28] !== G ||
          y[29] !== ei ||
          y[30] !== W ||
          y[31] !== $
            ? ((l =
                M.length > 0 || ei.length > 0
                  ? (0, t.jsx)(u.L, {
                      count: M.length + ei.length,
                      id: "skills-search-results",
                      title: $,
                      children: (0, t.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          M.length > 0
                            ? (0, t.jsx)(P, {
                                onCardMount: et,
                                hostId: B,
                                installedStateAction: X,
                                highlightedSkillPath: E,
                                isLoading: F,
                                roots: W,
                                skillEntries: M,
                                onSkillsUpdated: Q,
                              })
                            : null,
                          ei.length > 0
                            ? (0, t.jsx)(O, {
                                canInstall: S,
                                errorMessage: v,
                                highlightInstalledSkills: !1,
                                hostId: B,
                                highlightedSkillId: T,
                                entries: ei,
                                installingSkillId: U,
                                isLoading: D,
                                onInstall: z,
                                onSkillsUpdated: es,
                                repoRoot: G,
                                roots: W,
                                showAll: !0,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (y[15] = S),
              (y[16] = v),
              (y[17] = es),
              (y[18] = E),
              (y[19] = T),
              (y[20] = B),
              (y[21] = M),
              (y[22] = X),
              (y[23] = U),
              (y[24] = F),
              (y[25] = D),
              (y[26] = z),
              (y[27] = Q),
              (y[28] = G),
              (y[29] = ei),
              (y[30] = W),
              (y[31] = $),
              (y[32] = l))
            : (l = y[32]),
          y[33] !== e || y[34] !== l
            ? ((s = (0, t.jsxs)("div", { className: "flex flex-1 flex-col gap-8 pb-panel", children: [e, l] })),
              (y[33] = e),
              (y[34] = l),
              (y[35] = s))
            : (s = y[35]),
          s
        )
      }
      if (
        y[36] !== R ||
        y[37] !== B ||
        y[38] !== Z ||
        y[39] !== I ||
        y[40] !== M ||
        y[41] !== X ||
        y[42] !== ee ||
        y[43] !== F ||
        y[44] !== q ||
        y[45] !== Q ||
        y[46] !== Y ||
        y[47] !== W ||
        y[48] !== K ||
        y[49] !== J
      ) {
        let e,
          l = (function (e, l) {
            let s = []
            for (let l of e) s.push({ id: l.id, label: l.title })
            return (null != l && s.push({ id: l.id, label: l.title }), s)
          })(I, Y)
        if (y[55] !== I || y[56] !== K) {
          let l
          ;(y[58] !== K ? ((l = (e) => e.id === K), (y[58] = K), (y[59] = l)) : (l = y[59]),
            (e = I.find(l)),
            (y[55] = I),
            (y[56] = K),
            (y[57] = e))
        } else e = y[57]
        ;((h = e),
          (f = "flex flex-1 flex-col gap-8 pb-panel"),
          y[60] !== R || y[61] !== J
            ? ((p = (0, t.jsx)(L, { highlightedSuggestionId: R, suggestions: J })),
              (y[60] = R),
              (y[61] = J),
              (y[62] = p))
            : (p = y[62]),
          y[63] !== B || y[64] !== Z || y[65] !== M || y[66] !== X || y[67] !== F || y[68] !== Q || y[69] !== W
            ? ((g =
                null != Z
                  ? (0, t.jsx)(u.L, {
                      id: Z.id,
                      title: (0, t.jsx)(r.A, {
                        id: "skills.appsPage.section.installedSkillsOverview",
                        defaultMessage: "Installed",
                        description: "Heading for skills installed in Codex",
                      }),
                      children: (0, t.jsx)(P, {
                        onCardMount: et,
                        hostId: B,
                        installedStateAction: X,
                        isLoading: F,
                        maxVisibleSkills: 6,
                        roots: W,
                        skillEntries: M,
                        onSkillsUpdated: Q,
                      }),
                    })
                  : null),
              (y[63] = B),
              (y[64] = Z),
              (y[65] = M),
              (y[66] = X),
              (y[67] = F),
              (y[68] = Q),
              (y[69] = W),
              (y[70] = g))
            : (g = y[70]),
          (k =
            l.length > 0 && null != K
              ? (0, t.jsx)(m.t, {
                  className: "mb-2",
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: ee.formatMessage({
                    id: "skills.appsPage.skillDirectoryTabs.ariaLabel",
                    defaultMessage: "Skill directory",
                    description: "Accessible label for skill sections on the Skills page",
                  }),
                  tabs: l.map(_),
                  selectedKey: K,
                  onSelect: q,
                })
              : null),
          (y[36] = R),
          (y[37] = B),
          (y[38] = Z),
          (y[39] = I),
          (y[40] = M),
          (y[41] = X),
          (y[42] = ee),
          (y[43] = F),
          (y[44] = q),
          (y[45] = Q),
          (y[46] = Y),
          (y[47] = W),
          (y[48] = K),
          (y[49] = J),
          (y[50] = h),
          (y[51] = f),
          (y[52] = p),
          (y[53] = g),
          (y[54] = k))
      } else ((h = y[50]), (f = y[51]), (p = y[52]), (g = y[53]), (k = y[54]))
      return (
        y[71] !== E || y[72] !== B || y[73] !== X || y[74] !== F || y[75] !== Q || y[76] !== W || y[77] !== h
          ? ((x =
              null != h
                ? (0, t.jsx)(P, {
                    onCardMount: et,
                    hostId: B,
                    installedStateAction: X,
                    highlightedSkillPath: E,
                    isLoading: F,
                    maxVisibleSkills: 6,
                    onSkillsUpdated: Q,
                    roots: W,
                    skillEntries: h.skillEntries,
                  })
                : null),
            (y[71] = E),
            (y[72] = B),
            (y[73] = X),
            (y[74] = F),
            (y[75] = Q),
            (y[76] = W),
            (y[77] = h),
            (y[78] = x))
          : (x = y[78]),
        y[79] !== S ||
        y[80] !== v ||
        y[81] !== es ||
        y[82] !== T ||
        y[83] !== B ||
        y[84] !== U ||
        y[85] !== D ||
        y[86] !== z ||
        y[87] !== G ||
        y[88] !== Y?.id ||
        y[89] !== ei ||
        y[90] !== W ||
        y[91] !== K
          ? ((b =
              Y?.id === K
                ? (0, t.jsx)(O, {
                    canInstall: S,
                    errorMessage: v,
                    highlightInstalledSkills: !0,
                    hostId: B,
                    highlightedSkillId: T,
                    entries: ei,
                    installingSkillId: U,
                    isLoading: D,
                    onInstall: z,
                    onSkillsUpdated: es,
                    repoRoot: G,
                    roots: W,
                  })
                : null),
            (y[79] = S),
            (y[80] = v),
            (y[81] = es),
            (y[82] = T),
            (y[83] = B),
            (y[84] = U),
            (y[85] = D),
            (y[86] = z),
            (y[87] = G),
            (y[88] = Y?.id),
            (y[89] = ei),
            (y[90] = W),
            (y[91] = K),
            (y[92] = b))
          : (b = y[92]),
        y[93] !== x || y[94] !== b || y[95] !== f || y[96] !== p || y[97] !== g || y[98] !== k
          ? ((j = (0, t.jsxs)("div", { className: f, children: [p, g, k, x, b] })),
            (y[93] = x),
            (y[94] = b),
            (y[95] = f),
            (y[96] = p),
            (y[97] = g),
            (y[98] = k),
            (y[99] = j))
          : (j = y[99]),
        j
      )
    }
    function _(e) {
      let { id: l, label: s } = e
      return { key: l, name: s }
    }
    function L(e) {
      let l,
        s,
        o,
        c,
        m,
        h,
        f,
        p,
        g = (0, i.c)(24),
        { highlightedSuggestionId: k, suggestions: x } = e,
        { unreadSkillsSuggestions: j } = (0, n.Ul)(d.cx)
      g[0] !== j ? ((l = () => new Set(j.map(E))), (g[0] = j), (g[1] = l)) : (l = g[1])
      let [y] = (0, a.useState)(l)
      if (0 === x.length) return null
      if (g[2] !== y || g[3] !== x || g[4] !== j) {
        let e
        ;(g[6] !== y || g[7] !== j
          ? ((e = (e) => {
              let { id: l } = e
              return y.has(l) || j.some((e) => e.id === l)
            }),
            (g[6] = y),
            (g[7] = j),
            (g[8] = e))
          : (e = g[8]),
          (s = x.some(e)),
          (g[2] = y),
          (g[3] = x),
          (g[4] = j),
          (g[5] = s))
      } else s = g[5]
      let S = s
      if (
        (g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)(r.A, {
              id: "skills.computerHistorySuggestions.sectionTitle",
              defaultMessage: "Based on your Computer History",
              description: "Heading for personalized skills suggested from the user's Computer History",
            })),
            (g[9] = o))
          : (o = g[9]),
        g[10] !== S
          ? ((c = S
              ? (0, t.jsx)("span", {
                  "aria-hidden": !0,
                  className: "ms-0.5 size-1.5 shrink-0 rounded-full bg-text-info",
                })
              : null),
            (g[10] = S),
            (g[11] = c))
          : (c = g[11]),
        g[12] !== c ? ((m = (0, t.jsxs)(t.Fragment, { children: [o, c] })), (g[12] = c), (g[13] = m)) : (m = g[13]),
        g[14] !== k || g[15] !== x)
      ) {
        let e
        ;(g[17] !== k
          ? ((e = (e) => (0, t.jsx)(M, { isHighlighted: e.id === k, suggestion: e }, e.id)), (g[17] = k), (g[18] = e))
          : (e = g[18]),
          (h = x.map(e)),
          (g[14] = k),
          (g[15] = x),
          (g[16] = h))
      } else h = g[16]
      return (
        g[19] !== h ? ((f = (0, t.jsx)(b.q, { children: h })), (g[19] = h), (g[20] = f)) : (f = g[20]),
        g[21] !== m || g[22] !== f
          ? ((p = (0, t.jsx)(u.L, { id: "computer-history-suggested-skills", title: m, children: f })),
            (g[21] = m),
            (g[22] = f),
            (g[23] = p))
          : (p = g[23]),
        p
      )
    }
    function E(e) {
      let { id: l } = e
      return l
    }
    function P(e) {
      let l,
        s,
        n,
        a = (0, i.c)(39),
        {
          gap: o,
          hostId: d,
          highlightedSkillPath: u,
          installedStateAction: m,
          isLoading: h,
          isSingleColumn: p,
          maxVisibleSkills: g,
          roots: k,
          skillEntries: x,
          useCompactEmptyState: b,
          onCardMount: j,
          onSkillsUpdated: y,
        } = e,
        S = void 0 === m ? "check" : m,
        v = void 0 !== p && p,
        w = void 0 !== b && b
      if (h) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, t.jsx)(f.j, {
                  children: (0, t.jsx)(r.A, {
                    id: "skills.page.loading",
                    defaultMessage: "Loading skills…",
                    description: "Loading label on the skills page",
                  }),
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
          a[1] !== w
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: w
                  ? (0, t.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, t.jsx)(r.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                        description: "Empty state title when no skills match filters on the Skills & Apps page",
                      }),
                    })
                  : (0, t.jsx)(c.A, {
                      title: (0, t.jsx)(r.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                        description: "Empty state title when no skills match filters on the Skills & Apps page",
                      }),
                    }),
              })),
              (a[1] = w),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (null == g) {
        let e,
          l = o ?? "default"
        return (
          a[3] !== u ||
          a[4] !== d ||
          a[5] !== S ||
          a[6] !== v ||
          a[7] !== j ||
          a[8] !== y ||
          a[9] !== k ||
          a[10] !== x ||
          a[11] !== l
            ? ((e = (0, t.jsx)(B, {
                onCardMount: j,
                gap: l,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: x,
                onSkillsUpdated: y,
              })),
              (a[3] = u),
              (a[4] = d),
              (a[5] = S),
              (a[6] = v),
              (a[7] = j),
              (a[8] = y),
              (a[9] = k),
              (a[10] = x),
              (a[11] = l),
              (a[12] = e))
            : (e = a[12]),
          e
        )
      }
      a[13] !== g || a[14] !== x.length
        ? ((l = Q({ itemCount: x.length, visibleItemLimit: g })), (a[13] = g), (a[14] = x.length), (a[15] = l))
        : (l = a[15])
      let I = l
      if (null == I) {
        let e,
          l = o ?? "default"
        return (
          a[16] !== u ||
          a[17] !== d ||
          a[18] !== S ||
          a[19] !== v ||
          a[20] !== j ||
          a[21] !== y ||
          a[22] !== k ||
          a[23] !== x ||
          a[24] !== l
            ? ((e = (0, t.jsx)(B, {
                onCardMount: j,
                gap: l,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: x,
                onSkillsUpdated: y,
              })),
              (a[16] = u),
              (a[17] = d),
              (a[18] = S),
              (a[19] = v),
              (a[20] = j),
              (a[21] = y),
              (a[22] = k),
              (a[23] = x),
              (a[24] = l),
              (a[25] = e))
            : (e = a[25]),
          e
        )
      }
      return (
        a[26] !== o ||
        a[27] !== u ||
        a[28] !== d ||
        a[29] !== S ||
        a[30] !== v ||
        a[31] !== j ||
        a[32] !== y ||
        a[33] !== k
          ? ((s = (e) =>
              (0, t.jsx)(B, {
                onCardMount: j,
                gap: o ?? "compact",
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: S,
                isSingleColumn: v,
                roots: k,
                skillEntries: e,
                onSkillsUpdated: y,
              })),
            (a[26] = o),
            (a[27] = u),
            (a[28] = d),
            (a[29] = S),
            (a[30] = v),
            (a[31] = j),
            (a[32] = y),
            (a[33] = k),
            (a[34] = s))
          : (s = a[34]),
        a[35] !== x || a[36] !== s || a[37] !== I
          ? ((n = (0, t.jsx)(A.Q, { items: x, visibleItemLimit: I, renderExpandRow: T, children: s })),
            (a[35] = x),
            (a[36] = s),
            (a[37] = I),
            (a[38] = n))
          : (n = a[38]),
        n
      )
    }
    function T(e) {
      let { hiddenItems: l, isExpanded: s, onToggle: i } = e
      return (0, t.jsx)(q, { isExpanded: s, skillNames: l.map(R), onClick: i })
    }
    function R(e) {
      let { skill: l } = e
      return (0, x.nf)(l)
    }
    function B(e) {
      let l,
        s,
        n = (0, i.c)(19),
        {
          gap: a,
          hostId: o,
          highlightedSkillPath: r,
          installedStateAction: d,
          isSingleColumn: c,
          roots: u,
          skillEntries: m,
          onCardMount: h,
          onSkillsUpdated: f,
        } = e,
        p = void 0 === a ? "default" : a
      if (n[0] !== r || n[1] !== o || n[2] !== d || n[3] !== h || n[4] !== f || n[5] !== u || n[6] !== m) {
        let e
        ;(n[8] !== r || n[9] !== o || n[10] !== d || n[11] !== h || n[12] !== f || n[13] !== u
          ? ((e = (e) => {
              let { skill: l } = e
              return (0, t.jsx)(
                U,
                {
                  installedStateAction: d,
                  hostId: o,
                  isHighlighted: r === l.path,
                  onCardMount: h,
                  onSkillsUpdated: f,
                  roots: u,
                  skill: l,
                },
                l.path,
              )
            }),
            (n[8] = r),
            (n[9] = o),
            (n[10] = d),
            (n[11] = h),
            (n[12] = f),
            (n[13] = u),
            (n[14] = e))
          : (e = n[14]),
          (l = m.map(e)),
          (n[0] = r),
          (n[1] = o),
          (n[2] = d),
          (n[3] = h),
          (n[4] = f),
          (n[5] = u),
          (n[6] = m),
          (n[7] = l))
      } else l = n[7]
      return (
        n[15] !== p || n[16] !== c || n[17] !== l
          ? ((s = (0, t.jsx)(b.q, { gap: p, isSingleColumn: c, children: l })),
            (n[15] = p),
            (n[16] = c),
            (n[17] = l),
            (n[18] = s))
          : (s = n[18]),
        s
      )
    }
    function U(e) {
      let l,
        s,
        n,
        r,
        d,
        c,
        u,
        m = (0, i.c)(28),
        {
          hostId: h,
          installedStateAction: f,
          isHighlighted: g,
          onCardMount: b,
          onSkillsUpdated: j,
          roots: y,
          skill: S,
        } = e,
        v = (0, o.A)(),
        w = (0, a.useRef)(null)
      m[0] !== f || m[1] !== v || m[2] !== y || m[3] !== S
        ? ((l = "toggle" === f ? (0, p.IG)({ skill: S, roots: y, intl: v }) : void 0),
          (m[0] = f),
          (m[1] = v),
          (m[2] = y),
          (m[3] = S),
          (m[4] = l))
        : (l = m[4])
      let I = l
      ;(m[5] !== f || m[6] !== b || m[7] !== S
        ? ((s = (e) => {
            ;((w.current = e), null != e && "menu" !== f && b?.(S.path, e))
          }),
          (m[5] = f),
          (m[6] = b),
          (m[7] = S),
          (m[8] = s))
        : (s = m[8]),
        m[9] !== f ? ((n = "toggle" === f ? (0, t.jsx)(F, {}) : void 0), (m[9] = f), (m[10] = n)) : (n = m[10]))
      let M = "toggle" !== f
      return (
        m[11] !== S ? ((r = (0, x.nf)(S)), (m[11] = S), (m[12] = r)) : (r = m[12]),
        m[13] !== j || m[14] !== S
          ? ((d = (e, l) => {
              let s = w.current
              if (l && null != s) {
                let l = s.ownerDocument.activeElement
                if (l === s.ownerDocument.body || s.contains(l)) return void j(e, S.path)
              }
              j(e)
            }),
            (m[13] = j),
            (m[14] = S),
            (m[15] = d))
          : (d = m[15]),
        m[16] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (m[16] = c)) : (c = m[16]),
        m[17] !== I ||
        m[18] !== h ||
        m[19] !== f ||
        m[20] !== g ||
        m[21] !== S ||
        m[22] !== s ||
        m[23] !== n ||
        m[24] !== M ||
        m[25] !== r ||
        m[26] !== d
          ? ((u = (0, t.jsx)(k.A, {
              cardRef: s,
              cardIcon: n,
              cardIconContainer: M,
              actionLabel: I,
              displayName: r,
              hostId: h,
              installedStateAction: f,
              isHighlighted: g,
              onSkillsUpdated: d,
              scopeBadges: c,
              skill: S,
            })),
            (m[17] = I),
            (m[18] = h),
            (m[19] = f),
            (m[20] = g),
            (m[21] = S),
            (m[22] = s),
            (m[23] = n),
            (m[24] = M),
            (m[25] = r),
            (m[26] = d),
            (m[27] = u))
          : (u = m[27]),
        u
      )
    }
    function F() {
      let e,
        l = (0, i.c)(1)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("span", {
              className:
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-default text-secondary",
              children: (0, t.jsx)(h.A, { className: "icon-sm" }),
            })),
            (l[0] = e))
          : (e = l[0]),
        e
      )
    }
    function O(e) {
      let l,
        s = (0, i.c)(17),
        {
          canInstall: n,
          entries: a,
          errorMessage: o,
          highlightInstalledSkills: d,
          hostId: u,
          highlightedSkillId: m,
          installingSkillId: h,
          isLoading: p,
          onInstall: g,
          onSkillsUpdated: k,
          repoRoot: x,
          roots: b,
          showAll: j,
        } = e,
        y = void 0 !== j && j
      if (p) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, t.jsx)(f.j, {
                  children: (0, t.jsx)(r.A, {
                    id: "skills.page.loading",
                    defaultMessage: "Loading skills…",
                    description: "Loading label on the skills page",
                  }),
                }),
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if (o) {
        let e, l
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(r.A, {
                id: "skills.recommended.error",
                defaultMessage: "Unable to load recommended skills",
                description: "Error title when recommended skills fail to load",
              })),
              (s[1] = e))
            : (e = s[1]),
          s[2] !== o
            ? ((l = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, t.jsx)(c.A, { title: e, description: o }),
              })),
              (s[2] = o),
              (s[3] = l))
            : (l = s[3]),
          l
        )
      }
      if (0 === a.length) {
        let e
        return (
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, t.jsx)(c.A, {
                  title: (0, t.jsx)(r.A, {
                    id: "skills.appsPage.empty.skills",
                    defaultMessage: "No skills found",
                    description: "Empty state title when no skills match filters on the Skills & Apps page",
                  }),
                }),
              })),
              (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      return (
        s[5] !== n ||
        s[6] !== a ||
        s[7] !== d ||
        s[8] !== m ||
        s[9] !== u ||
        s[10] !== h ||
        s[11] !== g ||
        s[12] !== k ||
        s[13] !== x ||
        s[14] !== b ||
        s[15] !== y
          ? ((l = (0, t.jsx)(t.Fragment, {
              children: y
                ? (0, t.jsx)(H, {
                    canInstall: n,
                    entries: a,
                    highlightInstalledSkills: d,
                    hostId: u,
                    highlightedSkillId: m,
                    installingSkillId: h,
                    onInstall: g,
                    onSkillsUpdated: k,
                    repoRoot: x,
                    roots: b,
                  })
                : (0, t.jsx)(A.Q, {
                    items: a,
                    visibleItemLimit: Q({ itemCount: a.length, visibleItemLimit: 6 }) ?? a.length,
                    renderExpandRow: D,
                    children: (e) =>
                      (0, t.jsx)(H, {
                        canInstall: n,
                        entries: e,
                        highlightInstalledSkills: d,
                        hostId: u,
                        highlightedSkillId: m,
                        installingSkillId: h,
                        onInstall: g,
                        onSkillsUpdated: k,
                        repoRoot: x,
                        roots: b,
                      }),
                  }),
            })),
            (s[5] = n),
            (s[6] = a),
            (s[7] = d),
            (s[8] = m),
            (s[9] = u),
            (s[10] = h),
            (s[11] = g),
            (s[12] = k),
            (s[13] = x),
            (s[14] = b),
            (s[15] = y),
            (s[16] = l))
          : (l = s[16]),
        l
      )
    }
    function D(e) {
      let { hiddenItems: l, isExpanded: s, onToggle: i } = e
      return (0, t.jsx)(q, { isExpanded: s, skillNames: l.map(z), onClick: i })
    }
    function z(e) {
      let { skill: l } = e
      return l.name
    }
    function H(e) {
      let l,
        s,
        n = (0, i.c)(23),
        {
          canInstall: a,
          entries: o,
          highlightInstalledSkills: r,
          hostId: d,
          highlightedSkillId: c,
          installingSkillId: u,
          onInstall: m,
          onSkillsUpdated: h,
          repoRoot: f,
          roots: p,
        } = e
      if (
        n[0] !== a ||
        n[1] !== o ||
        n[2] !== r ||
        n[3] !== c ||
        n[4] !== d ||
        n[5] !== u ||
        n[6] !== m ||
        n[7] !== h ||
        n[8] !== f ||
        n[9] !== p
      ) {
        let e
        ;(n[11] !== a ||
        n[12] !== r ||
        n[13] !== c ||
        n[14] !== d ||
        n[15] !== u ||
        n[16] !== m ||
        n[17] !== h ||
        n[18] !== f ||
        n[19] !== p
          ? ((e = (e) => {
              let { installedSkill: l, isInstalled: s, skill: i } = e
              return null != l
                ? (0, t.jsx)(
                    U,
                    {
                      hostId: d,
                      installedStateAction: "menu",
                      isHighlighted: r || c === i.id,
                      onSkillsUpdated: (e, l) => {
                        e && h(l)
                      },
                      roots: p,
                      skill: l,
                    },
                    i.id,
                  )
                : (0, t.jsx)(
                    g.D,
                    {
                      canInstall: a,
                      hostId: d,
                      isHighlighted: s || c === i.id,
                      isInstalled: s,
                      isInstalling: u === i.id,
                      onInstall: m,
                      repoRoot: f,
                      skill: i,
                    },
                    i.id,
                  )
            }),
            (n[11] = a),
            (n[12] = r),
            (n[13] = c),
            (n[14] = d),
            (n[15] = u),
            (n[16] = m),
            (n[17] = h),
            (n[18] = f),
            (n[19] = p),
            (n[20] = e))
          : (e = n[20]),
          (l = o.map(e)),
          (n[0] = a),
          (n[1] = o),
          (n[2] = r),
          (n[3] = c),
          (n[4] = d),
          (n[5] = u),
          (n[6] = m),
          (n[7] = h),
          (n[8] = f),
          (n[9] = p),
          (n[10] = l))
      } else l = n[10]
      return (
        n[21] !== l ? ((s = (0, t.jsx)(b.q, { gap: "compact", children: l })), (n[21] = l), (n[22] = s)) : (s = n[22]),
        s
      )
    }
    function q(e) {
      let l,
        s,
        n,
        a = (0, i.c)(9),
        { isExpanded: o, skillNames: d, onClick: c } = e
      a[0] !== d ? ((l = d.slice(0, 2).join(", ")), (a[0] = d), (a[1] = l)) : (l = a[1])
      let u = Math.max(d.length - 2, 0)
      return (
        a[2] !== l || a[3] !== u
          ? ((s = (0, t.jsx)(r.A, {
              id: "skills.appsPage.section.seeAllSkillsDescription",
              defaultMessage: "See {skillNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}",
              description:
                "Label for the row that expands a skill section, previewing the next skills and the number of additional skills",
              values: { skillNames: l, remainingCount: u },
            })),
            (a[2] = l),
            (a[3] = u),
            (a[4] = s))
          : (s = a[4]),
        a[5] !== o || a[6] !== c || a[7] !== s
          ? ((n = (0, t.jsx)(A.s, { isExpanded: o, onClick: c, children: s })),
            (a[5] = o),
            (a[6] = c),
            (a[7] = s),
            (a[8] = n))
          : (n = a[8]),
        n
      )
    }
    function Q({ itemCount: e, visibleItemLimit: l }) {
      return e - l >= 3 ? l : void 0
    }
  },
  XvU9(e, l, s) {
    s.d(l, { zS: () => A, Cy: () => I, Jc: () => M, p1: () => w })
    var t = s("ABep"),
      i = s("QosV"),
      n = s("xSOA"),
      a = s("zTeN"),
      o = s("zKw6"),
      r = s.n(o),
      d = s("zd8w"),
      c = s("oyxz"),
      u = s("SGsN"),
      m = s("MI1z"),
      h = s("GaA7"),
      f = s("OWtl"),
      p = s("ndjw"),
      g = s("kfGJ"),
      k = s("njDi"),
      x = s("f22a"),
      b = s("oom3"),
      j = s("UmGt"),
      y = s("t4SC")
    function S(e, l) {
      let s = l.toLowerCase()
      return (
        e.find((e) => {
          let l = e.name.toLowerCase(),
            t = e.id.toLowerCase()
          return l === s || t === s
        }) ?? null
      )
    }
    var v = s("bPa2")
    function w(e) {
      let l,
        s,
        t = (0, i.c)(6),
        n = void 0 === e ? g.fI : e,
        a = (0, m.y)(n),
        o = h.appServices?.recommendedSkills != null && null != a
      t[0] !== a
        ? ((l = null == a ? null : r().join(a, "vendor_imports", "skills")), (t[0] = a), (t[1] = l))
        : (l = t[1])
      let d = null == a ? null : `${a}/skills/.system/skill-creator/SKILL.md`
      return (
        t[2] !== o || t[3] !== l || t[4] !== d
          ? ((s = { canInstallRecommendedSkills: o, defaultRecommendedRepoRoot: l, skillCreatorPath: d }),
            (t[2] = o),
            (t[3] = l),
            (t[4] = d),
            (t[5] = s))
          : (s = t[5]),
        s
      )
    }
    function I(e) {
      let l,
        s,
        t,
        n,
        o,
        r,
        d,
        c,
        u,
        m = (0, i.c)(27),
        h = void 0 === e ? g.fI : e,
        j = (0, a.gh)(f.u)
      m[0] !== h ? ((l = { hostId: h }), (m[0] = h), (m[1] = l)) : (l = m[1])
      let y = (0, a._U)(p.FM, l)
      m[2] !== y.data?.roots ? ((s = y.data?.roots ?? []), (m[2] = y.data?.roots), (m[3] = s)) : (s = m[3])
      let S = s,
        { skills: w, isFetching: I, isLoading: M, forceReload: A } = (0, v.a)(S, h)
      m[4] !== A
        ? ((t = async () => {
            await A()
          }),
          (m[4] = A),
          (m[5] = t))
        : (t = m[5])
      let N = t
      if (m[6] !== N || m[7] !== w) {
        let e
        ;((n = (0, b.i6)(w)),
          m[12] !== w ? ((e = (0, x.cy)(w)), (m[12] = w), (m[13] = e)) : (e = m[13]),
          (o = e),
          (r = N),
          (d = (0, x.OP)(n)),
          (m[6] = N),
          (m[7] = w),
          (m[8] = n),
          (m[9] = o),
          (m[10] = r),
          (m[11] = d))
      } else ((n = m[8]), (o = m[9]), (r = m[10]), (d = m[11]))
      let C = y.isFetching || I,
        _ = y.isLoading || M
      return (
        m[14] !== N || m[15] !== j
          ? ((c = () => {
              ;((0, k.j)(j.queryClient), N())
            }),
            (m[14] = N),
            (m[15] = j),
            (m[16] = c))
          : (c = m[16]),
        m[17] !== n ||
        m[18] !== w ||
        m[19] !== o ||
        m[20] !== r ||
        m[21] !== d ||
        m[22] !== C ||
        m[23] !== _ ||
        m[24] !== c ||
        m[25] !== S
          ? ((u = {
              forceReloadSkills: r,
              installedSkillMatchKeys: d,
              installedSkillMetadata: w,
              isFetching: C,
              isLoading: _,
              markSkillsUpdated: c,
              skills: n,
              standaloneInstalledSkills: o,
              workspaceRoots: S,
            }),
            (m[17] = n),
            (m[18] = w),
            (m[19] = o),
            (m[20] = r),
            (m[21] = d),
            (m[22] = C),
            (m[23] = _),
            (m[24] = c),
            (m[25] = S),
            (m[26] = u))
          : (u = m[26]),
        u
      )
    }
    function M(e, l, s) {
      let t,
        n,
        o,
        r,
        d = (0, i.c)(15)
      d[0] !== l || d[1] !== s ? ((t = { hostId: l, loadOnMount: s }), (d[0] = l), (d[1] = s), (d[2] = t)) : (t = d[2])
      let {
          data: c,
          errorMessage: u,
          isLoading: m,
          refresh: h,
        } = (function (e) {
          let l,
            s,
            t,
            n,
            o,
            r = (0, i.c)(19),
            { hostId: d, loadOnMount: c } = e,
            u = void 0 === c || c,
            m = (0, a.gh)(f.u)
          r[0] !== u ? ((l = { enabled: u }), (r[0] = u), (r[1] = l)) : (l = r[1])
          let h = (0, a._U)(y.ev, d, l),
            p = h.data?.error ?? (h.error ? (h.error.message ?? h.error) : null)
          r[2] !== d || r[3] !== m
            ? ((s = async () => {
                let e = await (0, y.q_)({ hostId: d, refresh: !0 })
                m.query.setData(y.ev, d, e)
              }),
              (r[2] = d),
              (r[3] = m),
              (r[4] = s))
            : (s = r[4])
          let g = s
          r[5] !== d || r[6] !== h.data?.skills || r[7] !== m
            ? ((t = async (e) => {
                let l = S(h.data?.skills ?? [], e)
                if (l) return l
                let s = await (0, y.q_)({ hostId: d, refresh: !1 })
                return (m.query.setData(y.ev, d, s), S(s.skills, e))
              }),
              (r[5] = d),
              (r[6] = h.data?.skills),
              (r[7] = m),
              (r[8] = t))
            : (t = r[8])
          let k = t
          r[9] !== d || r[10] !== m
            ? ((n = async (e) => {
                let { skill: l, installRoot: s } = e
                return (0, y.kL)({
                  hostId: d,
                  skillId: l.id,
                  repoPath: l.repoPath,
                  installRoot: void 0 === s ? null : s,
                  skillStatsigOverride: await (0, j.Uu)(m, l.id),
                })
              }),
              (r[9] = d),
              (r[10] = m),
              (r[11] = n))
            : (n = r[11])
          let x = n
          return (
            r[12] !== k || r[13] !== p || r[14] !== x || r[15] !== h.data || r[16] !== h.isLoading || r[17] !== g
              ? ((o = {
                  data: h.data,
                  errorMessage: p,
                  isLoading: h.isLoading,
                  refresh: g,
                  ensureSkillByName: k,
                  installSkill: x,
                }),
                (r[12] = k),
                (r[13] = p),
                (r[14] = x),
                (r[15] = h.data),
                (r[16] = h.isLoading),
                (r[17] = g),
                (r[18] = o))
              : (o = r[18]),
            o
          )
        })(t),
        p = s ? u : null,
        g = s && m
      d[3] !== s || d[4] !== h
        ? ((n = async () => {
            s && (await h())
          }),
          (d[3] = s),
          (d[4] = h),
          (d[5] = n))
        : (n = d[5])
      let k = s ? (c?.repoRoot ?? e) : null
      return (
        d[6] !== c?.skills || d[7] !== s
          ? ((o = s ? (c?.skills ?? []) : []), (d[6] = c?.skills), (d[7] = s), (d[8] = o))
          : (o = d[8]),
        d[9] !== p || d[10] !== g || d[11] !== n || d[12] !== k || d[13] !== o
          ? ((r = { errorMessage: p, isLoading: g, refresh: n, repoRoot: k, skills: o }),
            (d[9] = p),
            (d[10] = g),
            (d[11] = n),
            (d[12] = k),
            (d[13] = o),
            (d[14] = r))
          : (r = d[14]),
        r
      )
    }
    function A(e) {
      let l,
        s,
        o,
        r,
        h,
        p,
        g,
        x = (0, i.c)(20),
        { forceReloadSkills: b, hostId: S, onInstalled: v } = e,
        w = (0, a.gh)(f.u),
        I = null != (0, m.y)(S),
        [M, A] = (0, d.useState)(null)
      x[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = Symbol()), (x[0] = l)) : (l = x[0])
      let N = (0, d.useRef)(l)
      x[1] === Symbol.for("react.memo_cache_sentinel") ? ((s = {}), (x[1] = s)) : (s = x[1])
      let [C, _] = (0, d.useState)(s)
      x[2] !== w
        ? ((o = {
            mutationFn: async (e) => (0, y.kL)({ ...e, skillStatsigOverride: await (0, j.Uu)(w, e.skillId) }),
            networkMode: "always",
          }),
          (x[2] = w),
          (x[3] = o))
        : (o = x[3])
      let L = (0, n.n)(o)
      ;(x[4] !== S
        ? ((r = () => {
            ;((N.current = Symbol()), A(null), _((e) => ({ ...e, [S]: [] })))
          }),
          (x[4] = S),
          (x[5] = r))
        : (r = x[5]),
        x[6] !== I || x[7] !== b || x[8] !== S || x[9] !== L || x[10] !== v || x[11] !== w
          ? ((h = (e, l) => {
              if (!I) return
              let s = N.current
              ;(A(e.id),
                L.mutate(
                  { hostId: S, skillId: e.id, repoPath: e.repoPath, installRoot: l },
                  {
                    onSuccess: (l, i) => {
                      l.success &&
                        N.current === s &&
                        (_((e) => {
                          let l = e[i.hostId]
                          return l?.includes(i.skillId) ? e : { ...e, [i.hostId]: [...(l ?? []), i.skillId] }
                        }),
                        (0, k.j)(w.queryClient),
                        b(),
                        v?.(),
                        w
                          .get(u.Id)
                          .success(
                            (0, t.jsx)(c.A, {
                              id: "skills.recommended.installSuccess",
                              defaultMessage: "{skillName} skill installed",
                              description: "Toast shown after successfully installing a recommended skill",
                              values: { skillName: (0, t.jsx)("span", { className: "font-medium", children: e.name }) },
                            }),
                          ))
                    },
                    onSettled: () => {
                      N.current === s && A((l) => (l === e.id ? null : l))
                    },
                  },
                ))
            }),
            (x[6] = I),
            (x[7] = b),
            (x[8] = S),
            (x[9] = L),
            (x[10] = v),
            (x[11] = w),
            (x[12] = h))
          : (h = x[12]))
      let E = C[S]
      return (
        x[13] !== E ? ((p = new Set(E)), (x[13] = E), (x[14] = p)) : (p = x[14]),
        x[15] !== M || x[16] !== r || x[17] !== h || x[18] !== p
          ? ((g = {
              clearInstalledRecommendedSkills: r,
              installRecommendedSkill: h,
              installedRecommendedSkillIds: p,
              installingSkillId: M,
            }),
            (x[15] = M),
            (x[16] = r),
            (x[17] = h),
            (x[18] = p),
            (x[19] = g))
          : (g = x[19]),
        g
      )
    }
  },
  NVRI(e, l, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("slpy"),
      a = s("suct"),
      o = s("LIss"),
      r = s("iodE"),
      d = s("zTeN"),
      c = s("Wf1j"),
      u = s("bJfu"),
      m = s("gbrq"),
      h = s("T1PX"),
      f = s("V8uZ"),
      p = s("ZEXA")
    function g(e) {
      let l,
        s,
        n,
        a,
        d = (0, i.c)(12),
        { children: c, shouldReduceMotion: u, transition: m } = e,
        h = (0, r.tF)(),
        f = !h,
        p = !h
      ;(d[0] !== u ? ((l = !u && { opacity: 0, x: -4 }), (d[0] = u), (d[1] = l)) : (l = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = { opacity: 1, x: 0 }), (d[2] = s)) : (s = d[2]))
      let g = u ? 0 : -4
      return (
        d[3] !== g ? ((n = { opacity: 0, x: g }), (d[3] = g), (d[4] = n)) : (n = d[4]),
        d[5] !== c || d[6] !== f || d[7] !== p || d[8] !== l || d[9] !== n || d[10] !== m
          ? ((a = (0, t.jsx)(o.P.div, {
              "aria-hidden": f,
              inert: p,
              layout: "position",
              className: "flex min-w-0 items-center gap-1",
              initial: l,
              animate: s,
              exit: n,
              transition: m,
              children: c,
            })),
            (d[5] = c),
            (d[6] = f),
            (d[7] = p),
            (d[8] = l),
            (d[9] = n),
            (d[10] = m),
            (d[11] = a))
          : (a = d[11]),
        a
      )
    }
    function k(e) {
      let l,
        s,
        a,
        o,
        r = (0, i.c)(14),
        { project: u } = e,
        h = (0, c.A)()
      ;((0, d.Ul)(m.s1),
        r[0] !== h || r[1] !== u.name
          ? ((l =
              null == u.name
                ? void 0
                : h.formatMessage(
                    {
                      id: "localConversation.header.project",
                      defaultMessage: "Project: {projectName}",
                      description: "Accessible label for the project icon in a thread header",
                    },
                    { projectName: u.name },
                  )),
            (r[0] = h),
            (r[1] = u.name),
            (r[2] = l))
          : (l = r[2]))
      let f = l,
        p = u.iconInteractive ? void 0 : null == f,
        g = u.iconInteractive ? void 0 : f,
        k = u.iconInteractive ? void 0 : "img"
      return (
        r[3] !== u.icon || r[4] !== p || r[5] !== g || r[6] !== k
          ? ((s = (0, t.jsx)("span", {
              "aria-hidden": p,
              "aria-label": g,
              className:
                "pointer-events-auto flex aspect-square h-token-button-composer shrink-0 items-center justify-center no-drag",
              role: k,
              children: u.icon,
            })),
            (r[3] = u.icon),
            (r[4] = p),
            (r[5] = g),
            (r[6] = k),
            (r[7] = s))
          : (s = r[7]),
        r[8] !== u.name || r[9] !== s
          ? ((a = (0, t.jsx)(n.m, { content: u.name, children: s })), (r[8] = u.name), (r[9] = s), (r[10] = a))
          : (a = r[10]),
        null !== r[11] || r[12] !== a
          ? ((o = (0, t.jsxs)(t.Fragment, { children: [null, a] })), (r[11] = null), (r[12] = a), (r[13] = o))
          : (o = r[13]),
        o
      )
    }
    s.d(
      l,
      {},
      {
        H: k,
        J: function (e) {
          let l,
            s,
            n,
            r,
            d,
            c,
            m,
            x,
            b,
            j,
            y,
            S = (0, i.c)(36),
            {
              animateIdentity: v,
              inset: w,
              start: I,
              startActions: M,
              env: A,
              leading: N,
              project: C,
              secondary: _,
              trailing: L,
              hostConfig: E,
            } = e,
            P = void 0 !== v && v,
            T = void 0 === w ? "tab-strip" : w,
            R = (0, h.I)()
          S[0] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (S[0] = l)) : (l = S[0])
          let B = l,
            U = B.length > 0,
            F = null != L && U
          S[1] !== C ? ((s = null == C ? null : (0, t.jsx)(k, { project: C })), (S[1] = C), (S[2] = s)) : (s = S[2])
          let O = s,
            D = 0.3 * !R
          S[3] !== D ? ((n = { duration: D, ease: f.Wu }), (S[3] = D), (S[4] = n)) : (n = S[4])
          let z = n
          S[5] !== P || S[6] !== z || S[7] !== N || S[8] !== C || S[9] !== O || S[10] !== R || S[11] !== I
            ? ((r =
                P || null != C || I
                  ? (0, t.jsxs)("div", {
                      className: "flex min-w-0 items-center gap-1",
                      children: [
                        N,
                        P
                          ? (0, t.jsx)(a.N, {
                              initial: !1,
                              mode: "popLayout",
                              children:
                                null != O || I
                                  ? (0, t.jsxs)(
                                      g,
                                      {
                                        shouldReduceMotion: R,
                                        transition: z,
                                        children: [
                                          O,
                                          I
                                            ? (0, t.jsx)("div", {
                                                className:
                                                  "max-w-[320px] min-w-0 truncate focus-within:overflow-visible",
                                                children: I,
                                              })
                                            : null,
                                        ],
                                      },
                                      "thread-identity",
                                    )
                                  : null,
                            })
                          : null,
                        P ? null : O,
                        I && !P
                          ? (0, t.jsx)("div", {
                              className: "max-w-[320px] min-w-0 truncate focus-within:overflow-visible",
                              children: I,
                            })
                          : null,
                      ],
                    })
                  : null),
              (S[5] = P),
              (S[6] = z),
              (S[7] = N),
              (S[8] = C),
              (S[9] = O),
              (S[10] = R),
              (S[11] = I),
              (S[12] = r))
            : (r = S[12])
          let H = !!P && "position"
          return (
            S[13] !== A || S[14] !== E
              ? ((d =
                  "remote" === A
                    ? null != E
                      ? (0, t.jsx)(p.pZ, { hostId: E.id })
                      : null
                    : "worktree" === A
                      ? (0, t.jsx)(p.eL, {})
                      : "local" === A
                        ? (0, t.jsx)(p.MI, {})
                        : null),
                (S[13] = A),
                (S[14] = E),
                (S[15] = d))
              : (d = S[15]),
            S[16] !== _
              ? ((c = _
                  ? (0, t.jsx)("div", {
                      className: "flex min-w-0 truncate leading-[18px] font-normal text-codex-description",
                      children: _,
                    })
                  : null),
                (S[16] = _),
                (S[17] = c))
              : (c = S[17]),
            S[18] !== z || S[19] !== M || S[20] !== c || S[21] !== H || S[22] !== d
              ? ((m = (0, t.jsxs)(o.P.div, {
                  layout: H,
                  className: "flex items-center gap-1",
                  transition: z,
                  children: [d, c, M],
                })),
                (S[18] = z),
                (S[19] = M),
                (S[20] = c),
                (S[21] = H),
                (S[22] = d),
                (S[23] = m))
              : (m = S[23]),
            S[24] !== m || S[25] !== r
              ? ((x = (0, t.jsxs)("div", {
                  className:
                    "text-md flex min-w-0 flex-1 items-center gap-0 truncate text-base focus-within:overflow-visible electron:font-medium",
                  children: [r, m],
                })),
                (S[24] = m),
                (S[25] = r),
                (S[26] = x))
              : (x = S[26]),
            S[27] !== F
              ? ((b = U
                  ? (0, t.jsxs)("div", {
                      className: "flex items-center gap-0.5",
                      children: [F ? (0, t.jsx)("div", { className: "mx-2 h-[16px] w-px bg-border" }) : null, B],
                    })
                  : null),
                (S[27] = F),
                (S[28] = b))
              : (b = S[28]),
            S[29] !== b || S[30] !== L
              ? ((j = (0, t.jsxs)(u.G.HeaderToolbar.Actions, { children: [L, b] })),
                (S[29] = b),
                (S[30] = L),
                (S[31] = j))
              : (j = S[31]),
            S[32] !== T || S[33] !== x || S[34] !== j
              ? ((y = (0, t.jsxs)(u.G.HeaderToolbar, { inset: T, children: [x, j] })),
                (S[32] = T),
                (S[33] = x),
                (S[34] = j),
                (S[35] = y))
              : (y = S[35]),
            y
          )
        },
      },
    )
  },
  vOoA(e, l, s) {
    s.d(
      l,
      {},
      {
        a: function ({
          size: e,
          hasLargeIcon: l,
          smallClassName: s = "icon-md",
          largeFallbackClassName: t = "h-5 w-5",
        }) {
          return "large" === e ? (l ? "h-full w-full" : t) : s
        },
      },
    )
  },
}
//# sourceMappingURL=604319.7947499c94.js.map
