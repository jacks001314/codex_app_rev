export const __rspack_esm_ids = [837769]
export const __webpack_modules__ = {
  fanO(e, t, n) {
    var s = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 40,
          height: 48,
          fill: "none",
          viewBox: "0 0 40 48",
          ...e,
          children: (0, s.jsx)("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.67,
            d: "m38.963 18.927-3.072-5.963m3.072 5.963L33 22m5.963-3.073C24.132 13.427 10.5 15.5 1.11 22.47",
            opacity: 0.2,
          }),
        })))
  },
  lXcR(e, t, n) {
    var s = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: [
            (0, s.jsx)("path", {
              d: "M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z",
            }),
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              d: "M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z",
              clipRule: "evenodd",
            }),
          ],
        })))
  },
  VVkm(e, t, n) {
    var s = n("QosV"),
      r = n("T0Rc"),
      i = n("GaA7"),
      o = n("rvFo")
    function l(e) {
      return ["new-chat-suggestion-source", "has-accessible-enabled-ambient-suggestion-app", e]
    }
    n.d(
      t,
      {},
      {
        T9: l,
        b4: function ({
          canUsePersonalizedSuggestions: e,
          generatedSuggestionsEnabled: t,
          hasGeneratedSuggestionsReadSettled: n,
          shouldUseCuratedNewChatPageSuggestions: s,
        }) {
          return !!s || !t || !e || n
        },
        fy: function (e) {
          var t, n
          let a,
            c,
            d,
            u = (0, s.c)(9),
            { accountId: p, enabled: m, hostId: g } = e
          return (
            u[0] !== p || u[1] !== g
              ? ((t = g), (n = p), (a = [...l(t), n]), (u[0] = p), (u[1] = g), (u[2] = a))
              : (a = u[2]),
            u[3] !== g
              ? ((c = async () =>
                  (await i.appServices.ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId: g })) ?? !1),
                (u[3] = g),
                (u[4] = c))
              : (c = u[4]),
            u[5] !== m || u[6] !== a || u[7] !== c
              ? ((d = { queryKey: a, queryFn: c, enabled: m, retry: !1, staleTime: o.D.FIVE_MINUTES }),
                (u[5] = m),
                (u[6] = a),
                (u[7] = c),
                (u[8] = d))
              : (d = u[8]),
            (0, r.I)(d)
          )
        },
        o1: function ({ debugOverride: e, experimentEligible: t, personalized: n }) {
          return e ?? (t && n ? "generated" : "curated")
        },
        qH: function ({
          areNewChatPageSuggestionsLoading: e,
          hasProjectRoot: t,
          shouldShowHomeSuggestions: n,
          shouldUseCuratedNewChatPageSuggestions: s,
        }) {
          return !e && (!!s || (t && n))
        },
      },
    )
  },
  zvpH(e, t, n) {
    var s = n("GaA7"),
      r = n("q77y")
    let i = ["vscode", "ambient-suggestions"],
      o = ["vscode", "ambient-suggestions-refresh"]
    n.d(
      t,
      {},
      {
        Kd: function (e) {
          return [...o, JSON.stringify(e)]
        },
        SF: i,
        cM: o,
        tO: function (e) {
          return [...i, JSON.stringify(e)]
        },
        ty: async function (e, t) {
          let n = s.appServices?.ambientSuggestions
          null != n && (await (0, r.P)(n.refresh(e), t))
        },
      },
    )
  },
  AnoK(e, t, n) {
    var s = n("DBCl")
    n.d(
      t,
      {},
      {
        l: function (e) {
          return !0 !== e.ephemeral && e.threadSource !== s.ONi
        },
      },
    )
  },
  oxjR(e, t, n) {
    var s = n("DBCl"),
      r = n("VVkm"),
      i = n("zvpH"),
      o = n("sLlu"),
      l = n("rGp2")
    let a = [null, "science"]
    function c(e) {
      return e.isAccessible && e.isEnabled
    }
    n.d(
      t,
      {},
      {
        U: async function ({ hostId: e, queryClient: t, refreshAppsList: n }) {
          let d = t.getQueriesData({ queryKey: ["apps", "list", e] }),
            u = d.some(([, e]) => null != e) ? d.flatMap(([, e]) => e ?? []) : void 0,
            [p] = await Promise.all([n(), (0, o.y)(t, l.hH)])
          return (
            !(function ({ previousApps: e, nextApps: t }) {
              return null != e && !e.some(c) && t.some(c)
            })({ previousApps: u, nextApps: p }) ||
              (await (0, o.y)(t, (0, r.T9)(e)),
              await Promise.all(
                a.map((t) =>
                  (0, i.ty)({ domain: t, hostId: e, projectRoot: (0, s.DIv)(s.m20), mode: "first-plugin-connect" }),
                ),
              ),
              await Promise.all([t.invalidateQueries({ queryKey: i.SF }), t.invalidateQueries({ queryKey: i.cM })])),
            p
          )
        },
      },
    )
  },
  GK7D(e, t, n) {
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57")
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            o,
            l,
            a,
            c,
            d,
            u,
            p,
            m,
            g = (0, r.c)(30),
            { actions: h, asset: f, subtitle: y, subtitleClassName: x, title: b, variant: v } = e,
            j = void 0 === v ? "default" : v
          g[0] !== f
            ? ((t = null == f ? null : (0, s.jsx)("div", { className: "flex", children: f })), (g[0] = f), (g[1] = t))
            : (t = g[1])
          let A = "page" === j ? "flex-nowrap" : "flex-wrap"
          g[2] !== A
            ? ((n = (0, i.A)("flex min-w-0 items-start justify-between gap-4", A)), (g[2] = A), (g[3] = n))
            : (n = g[3])
          let w = "settingsCompact" === j ? "gap-1.25" : "gap-1.5"
          g[4] !== w ? ((o = (0, i.A)("flex min-w-0 flex-1 basis-64 flex-col", w)), (g[4] = w), (g[5] = o)) : (o = g[5])
          let C = "settings" === j && "heading-lg font-normal",
            S = "settingsCompact" === j && "heading-lg font-semibold leading-7",
            I = "page" === j && "heading-lg electron:heading-xl",
            M = "default" === j && "heading-base electron:heading-lg"
          return (
            g[6] !== M || g[7] !== C || g[8] !== S || g[9] !== I
              ? ((l = (0, i.A)("min-w-0 break-words text-default", C, S, I, M)),
                (g[6] = M),
                (g[7] = C),
                (g[8] = S),
                (g[9] = I),
                (g[10] = l))
              : (l = g[10]),
            g[11] !== l || g[12] !== b
              ? ((a = (0, s.jsx)("h1", { className: l, children: b })), (g[11] = l), (g[12] = b), (g[13] = a))
              : (a = g[13]),
            g[14] !== y || g[15] !== x
              ? ((c =
                  null == y
                    ? null
                    : (0, s.jsx)("div", { className: (0, i.A)("text-base text-secondary", x), children: y })),
                (g[14] = y),
                (g[15] = x),
                (g[16] = c))
              : (c = g[16]),
            g[17] !== a || g[18] !== c || g[19] !== o
              ? ((d = (0, s.jsxs)("div", { className: o, children: [a, c] })),
                (g[17] = a),
                (g[18] = c),
                (g[19] = o),
                (g[20] = d))
              : (d = g[20]),
            g[21] !== h
              ? ((u =
                  null == h
                    ? null
                    : (0, s.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: h })),
                (g[21] = h),
                (g[22] = u))
              : (u = g[22]),
            g[23] !== d || g[24] !== u || g[25] !== n
              ? ((p = (0, s.jsxs)("div", { className: n, children: [d, u] })),
                (g[23] = d),
                (g[24] = u),
                (g[25] = n),
                (g[26] = p))
              : (p = g[26]),
            g[27] !== p || g[28] !== t
              ? ((m = (0, s.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, p],
                })),
                (g[27] = p),
                (g[28] = t),
                (g[29] = m))
              : (m = g[29]),
            m
          )
        },
      },
    )
  },
  wqAy(e, t, n) {
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("GO7r"),
      l = n("f26W")
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            n,
            a,
            c,
            d,
            u = (0, r.c)(17),
            { className: p, label: m, onClick: g, show: h, showWorkingDots: f } = e,
            y = void 0 !== f && f,
            x = h ? "opacity-100" : "pointer-events-none opacity-0"
          u[0] !== p || u[1] !== x
            ? ((t = (0, i.A)(
                "group/scroll-to-bottom cursor-interaction absolute z-30 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full border border-default bg-surface bg-clip-padding text-secondary transition-opacity duration-basic ease-in-out end-1/2 print:hidden",
                x,
                p,
              )),
              (u[0] = p),
              (u[1] = x),
              (u[2] = t))
            : (t = u[2])
          let b = !h,
            v = h ? void 0 : -1,
            j = h ? g : void 0
          u[3] !== y
            ? ((n =
                y &&
                (0, s.jsx)("span", {
                  className: "group-hover/scroll-to-bottom:hidden group-focus-visible/scroll-to-bottom:hidden",
                  children: (0, s.jsx)(l.V, {}),
                })),
              (u[3] = y),
              (u[4] = n))
            : (n = u[4])
          let A = y && "hidden group-hover/scroll-to-bottom:block group-focus-visible/scroll-to-bottom:block"
          return (
            u[5] !== A ? ((a = (0, i.A)("text-default", A)), (u[5] = A), (u[6] = a)) : (a = u[6]),
            u[7] !== a ? ((c = (0, s.jsx)(o.b$U, { className: a })), (u[7] = a), (u[8] = c)) : (c = u[8]),
            u[9] !== m || u[10] !== c || u[11] !== t || u[12] !== b || u[13] !== v || u[14] !== j || u[15] !== n
              ? ((d = (0, s.jsxs)("button", {
                  className: t,
                  "aria-hidden": b,
                  "aria-label": m,
                  tabIndex: v,
                  type: "button",
                  onClick: j,
                  children: [n, c],
                })),
                (u[9] = m),
                (u[10] = c),
                (u[11] = t),
                (u[12] = b),
                (u[13] = v),
                (u[14] = j),
                (u[15] = n),
                (u[16] = d))
              : (d = u[16]),
            d
          )
        },
      },
    )
  },
  f26W(e, t, n) {
    n.d(t, { V: () => l })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("aqd9")
    function l() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("span", {
              ref: o.d,
              className: "flex items-center justify-center gap-1",
              "aria-hidden": !0,
              children: [0, 1, 2].map(a),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function a(e) {
      return (0, s.jsx)("span", { className: (0, i.A)("h-1 w-1 rounded-full bg-text/70", "waveDot-qgKugp") }, e)
    }
  },
  oeej(e, t, n) {
    var s = n("D7Ms"),
      r = n("zTeN"),
      i = n("Dgwo"),
      o = n("GaA7"),
      l = n("q77y"),
      a = n("OWtl"),
      c = n("rvFo"),
      d = n("Igx9"),
      u = n("zsK1")
    let p = (0, r.vP)(a.u, null),
      m = (0, r.vU)(a.u, (e, { scope: t }) => ({
        queryKey: [...d.bX, e],
        queryFn: () => (0, i.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => [...e.data].sort((e, t) => Number(t.completedAtMs) - Number(e.completedAtMs)),
        refetchOnMount: "always",
        staleTime: c.D.FIVE_MINUTES,
      })),
      g = (0, r.vU)(a.u, (e, { scope: t }) => ({
        queryKey: [...d.bX, e],
        queryFn: () => (0, i.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => e.connectors?.map((e) => ({ codexAppId: null, ...e })) ?? [],
        refetchOnMount: "always",
        staleTime: c.D.FIVE_MINUTES,
      })),
      h = (0, r.vU)(a.u, (e, { scope: t }) => ({
        queryKey: [...d.bX, "checklist", e],
        queryFn: () => (0, i.V)(t, e).sendRequest("externalAgentConfig/import/readHistories", void 0),
        select: (e) => e.data,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        staleTime: c.D.FIVE_MINUTES,
      })),
      f = (0, r.vU)(a.u, (e) => {
        let t = o.appServices?.externalAgentImport
        return {
          queryKey: [...d.EF, e],
          queryFn: null == t ? s.hT : ({ signal: n }) => (0, l.P)(t.readStatus(e), n),
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          retry: !1,
          staleTime: c.D.FIVE_MINUTES,
        }
      })
    function y(e) {
      return e.some((e) => e.successes.some((e) => "MCP_SERVER_CONFIG" === e.itemType && null != e.target))
    }
    n.d(
      t,
      {},
      {
        Al: function (e) {
          let t = e.find((e) => "completed" === e.kind)
          if (null == t) return e
          let n = Number(t.history.completedAtMs)
          return e.filter((e) => "running" === e.kind || n - Number(e.history.completedAtMs) <= 6e4)
        },
        NP: function (e) {
          return [...new Set(e.map((e) => e.itemType))].filter(u.KE).sort((e, t) => (0, u.Ud)(e) - (0, u.Ud)(t))
        },
        On: function ({ histories: e, importStatus: t }) {
          return (
            (t?.importedSessionCount ?? 0) > 0 ||
            t?.latestImportedAtMs != null ||
            e?.some((e) => e.successes.length > 0) === !0
          )
        },
        U6: h,
        Vh: g,
        W$: function ({ histories: e, mcpServerStatuses: t }) {
          let n = new Set(
            e.flatMap((e) =>
              e.successes.flatMap((e) => ("MCP_SERVER_CONFIG" === e.itemType && null != e.target ? [e.target] : [])),
            ),
          )
          return t.flatMap((e) => ("notLoggedIn" === e.authStatus && n.has(e.name) ? [e.name] : []))
        },
        Wp: function (e) {
          let t = new Map()
          for (let n of e.successes) {
            if (!(0, u.KE)(n.itemType)) continue
            let e = t.get(n.itemType) ?? { failedCount: 0, importedCount: 0, itemType: n.itemType }
            ;((e.importedCount += 1), t.set(n.itemType, e))
          }
          for (let n of e.failures) {
            if (!(0, u.KE)(n.itemType)) continue
            let e = t.get(n.itemType) ?? { failedCount: 0, importedCount: 0, itemType: n.itemType }
            ;((e.failedCount += 1), t.set(n.itemType, e))
          }
          return [...t.values()].sort((e, t) => (0, u.Ud)(e.itemType) - (0, u.Ud)(t.itemType))
        },
        Yu: function ({ histories: e, runningImport: t }) {
          let n = []
          for (let s of (null != t && n.push({ kind: "running", runningImport: t }), e))
            n.push({ history: s, kind: "completed" })
          return n
        },
        eB: y,
        ej: m,
        hL: f,
        iy: function ({ histories: e, historiesError: t, mcpServerStatuses: n, mcpServerStatusesError: s }) {
          return null == e
            ? null == t
              ? "loading"
              : "error"
            : y(e) && null == n
              ? null == s
                ? "loading"
                : "error"
              : "ready"
        },
        rz: p,
        uD: function (e) {
          return e.some((e) => e.successes.some((e) => "HOOKS" === e.itemType))
        },
      },
    )
  },
  ZgQ4(e, t, n) {
    var s = n("DBCl"),
      r = n("zsK1")
    function i({ homeItems: e, projectItems: t }) {
      let n = e.filter((e) => null == e.cwd || "" === e.cwd),
        s = e.filter((e) => null != e.cwd && "" !== e.cwd),
        o = (0, r.DA)((0, r.Jd)(n)),
        l = (0, r.DA)((0, r.Jd)([...s, ...t])),
        a = n.filter((e) => "SESSIONS" === e.itemType)
      return 0 === o.length && 0 === l.length && 0 === a.length
        ? null
        : { projectItems: l, sessionItems: a, toolsAndSetupItems: o }
    }
    function o({ detectedItems: e, providerIds: t }) {
      let n = e.filter((e) => t.includes(e.providerId))
      return i({
        homeItems: n.filter((e) => null == e.cwd || "" === e.cwd),
        projectItems: n.filter((e) => null != e.cwd && "" !== e.cwd),
      })
    }
    function l(e, t = []) {
      let n = new Set(t.map(s.XHz)),
        r = (0, s.jJJ)(e.sessionItems).filter((e) => !n.has((0, s.XHz)(e))),
        i = (0, s.jJJ)(e.projectItems),
        o = [...new Set([...r, ...i])].sort((e, t) => e.localeCompare(t))
      return [
        ...(function (e) {
          let t = new Map()
          for (let n of e) {
            let e =
                "claude-cowork" === n.providerId && (null == n.cwd || "" === n.cwd)
                  ? `${n.itemType}:${n.providerId}:home`
                  : d(n),
              s = t.get(e)
            if (null == s) {
              t.set(e, [n])
              continue
            }
            s.push(n)
          }
          return [...t].flatMap(([e, t]) => {
            let n = t[0]
            return null == n
              ? []
              : [
                  {
                    key: e,
                    kind: "migrationItem",
                    item: (function (e, t) {
                      var n
                      let s
                      if (1 === t.length) return e
                      let r = t.flatMap((e) => (null == e.details ? [] : [e.details]))
                      if (0 === r.length) return e
                      let i = r.flatMap((e) => e.memory ?? [])
                      return {
                        ...e,
                        details: {
                          commands: r.flatMap((e) => e.commands),
                          hooks: r.flatMap((e) => e.hooks),
                          mcpServers: r.flatMap((e) => e.mcpServers),
                          plugins:
                            ((n = r),
                            (s = new Set()),
                            n.flatMap((e) =>
                              e.plugins.flatMap((e) => {
                                let t = e.pluginNames.filter((e) => !s.has(e) && (s.add(e), !0))
                                return 0 === t.length ? [] : [{ ...e, pluginNames: t }]
                              }),
                            )),
                          sessions: r.flatMap((e) => e.sessions),
                          skills: r.flatMap((e) => e.skills),
                          subagents: r.flatMap((e) => e.subagents),
                          ...(0 === i.length ? {} : { memory: i }),
                        },
                      }
                    })(n, t),
                    items: t,
                  },
                ]
          })
        })(e.toolsAndSetupItems),
        ...(e.projectItems.length > 0 || o.length > 0
          ? [{ key: "projects", kind: "projects", count: o.length, projectRoots: o, items: e.projectItems }]
          : []),
        ...(e.sessionItems.length > 0
          ? [
              {
                key: "chats",
                kind: "chats",
                count: e.sessionItems.reduce((e, t) => e + (t.details?.sessions.length ?? 0), 0),
                items: e.sessionItems,
              },
            ]
          : []),
      ]
    }
    function a({ model: e, selection: t }) {
      let n = e.projectItems.some((e) => Object.prototype.hasOwnProperty.call(t, c(e))),
        s = l(e).filter((e) => {
          var n, s
          return (
            (n = e),
            (s = t),
            Object.prototype.hasOwnProperty.call(s, n.key)
              ? (s[n.key] ?? !1)
              : "migrationItem" === n.kind && n.items.some((e) => s[d(e)] ?? !1)
          )
        })
      return [
        ...s
          .filter((e) => "chats" !== e.kind)
          .flatMap((e) => {
            var s, r
            return "migrationItem" === e.kind
              ? ((s = e),
                (r = t),
                Object.prototype.hasOwnProperty.call(r, s.key)
                  ? r[s.key]
                    ? s.items
                    : []
                  : s.items.filter((e) => r[d(e)] ?? !1))
              : "projects" === e.kind && n
                ? e.items.filter((e) => t[c(e)] ?? !1)
                : e.items
          }),
        ...s.filter((e) => "chats" === e.kind).flatMap((e) => e.items),
      ]
    }
    function c(e) {
      return `projects:${d(e)}`
    }
    function d(e) {
      return `${e.itemType}:${e.providerId}:${e.cwd ?? "home"}:${e.description}`
    }
    n.d(
      t,
      {},
      {
        Li: a,
        Wk: function ({ detectedItems: e, providerIds: t, selection: n }) {
          let s = o({ detectedItems: e, providerIds: t })
          return null == s ? [] : a({ model: s, selection: n })
        },
        cN: o,
        pH: i,
        w_: l,
      },
    )
  },
  RIh2(e, t, n) {
    var s = n("DBCl"),
      r = n("Dgwo"),
      i = n("l00C"),
      o = n("tl5a"),
      l = n("FTq4"),
      a = n("AnoK"),
      c = n("eFn4"),
      d = n("GaA7"),
      u = n("q77y"),
      p = n("WFY2"),
      m = n("kpIY"),
      g = n("Igx9"),
      h = n("N34f")
    let f = "external-agent-import-discovery:",
      y = null,
      x = 0
    function b() {
      ;((x += 1), (0, m.zm)(f))
    }
    n.d(
      t,
      {},
      {
        EA: function ({ hostId: e, providers: t, sessionLimits: n, workspaceRoots: s }) {
          return [...g.yF, e, t, s, n?.maxSessionAgeMs, n?.maxSessionsPerSpace]
        },
        Sq: async function ({
          cache: e = !1,
          hostId: t,
          includeHome: n,
          providers: s,
          sessionLimits: r,
          workspaceRoots: i,
        }) {
          let o = n || null == i || 0 === i.length ? void 0 : i,
            l = { hostId: t, includeHome: n, providers: s, sessionLimits: r, workspaceRoots: o },
            a = f + s.join(","),
            c = JSON.stringify(l)
          if (e) {
            await (0, m.Uz)()
            let t = (0, m.TB)(a, void 0)
            if ("refresh" !== e && t?.requestKey === c && Date.now() - t.detectedAtMs < 432e5) return t.result
          }
          "refresh" === e && (x += 1)
          let p = x,
            g = d.appServices?.externalAgentImport
          if (null == g) throw Error("External agent import is not supported by this host")
          let h = await (0, u.P)(g.detect(l))
          return (e && p === x && (0, m.jx)(a, { requestKey: c, result: h, detectedAtMs: Date.now() }), h)
        },
        gu: async function (
          e,
          { hostId: t, importAttemptId: n, items: m, projectId: g, sessionLimits: f, source: x = "settings" },
        ) {
          if (0 === m.length || !0 === e.get(h.I))
            return { importedProjectIds: [], importedSessionThreadIds: [], projectRoots: [] }
          if (null != y) throw Error("External agent import already in progress")
          b()
          let v = Promise.resolve().then(async () => {
            let h =
                "first_time_onboarding" !== x &&
                "onboarding_checklist" !== x &&
                m.some((e) => "SESSIONS" === e.itemType)
                  ? await (async function (e, t) {
                      let n = e.get(i.u$, t),
                        s = e.get(c.VJ)
                      if (null == n || "allowed" !== s.status || !("accountId" in s)) return null
                      try {
                        for (let i of [!1, !0])
                          if (
                            (
                              await (0, r.V)(e, t).sendRequest(
                                "thread/list",
                                {
                                  archived: i,
                                  cursor: null,
                                  limit: 50,
                                  modelProviders: null,
                                  sortKey: "updated_at",
                                  useStateDbOnly: !0,
                                },
                                { priority: "background", source: "thread_list" },
                              )
                            ).data.some(a.l)
                          )
                            return { accountId: s.accountId, client: n }
                      } catch {}
                      return null
                    })(e, t)
                  : null,
              y = d.appServices?.externalAgentImport
            if (null == y) throw Error("External agent import is not supported by this host")
            let b = await (0, u.P)(
              y.import({ hostId: t, importAttemptId: n, items: m, projectId: g, sessionLimits: f }),
            )
            return (
              null != h &&
                (await (async function (e, t, n, a) {
                  let d = await l.OX.readWhenReady()
                  if (null == d || e.get(i.u$, t) !== a.client) return
                  let u = e.get(c.VJ)
                  if ("allowed" !== u.status || !("accountId" in u) || u.accountId !== a.accountId) return
                  let m = new Set(d[t]),
                    g = [...new Set(n.importedSessionThreadIds)].filter(
                      (n) => "" !== n && !m.has(n) && (0, o.bJ)(e.get, (0, s.JXB)(n)) !== t,
                    ),
                    h = (
                      await Promise.allSettled(g.map((n) => (0, r.V)(e, t).markConversationAsUnread((0, s.JXB)(n))))
                    ).filter((e) => "rejected" === e.status)
                  h.length > 0 &&
                    p.v.warning("Failed to mark some imported threads unread", {
                      safe: { failedThreadCount: h.length, totalThreadCount: g.length },
                      sensitive: { errors: h.map((e) => e.reason), hostId: t },
                    })
                })(e, t, b, h)),
              b
            )
          })
          y = v
          try {
            return await v
          } finally {
            ;(b(), y === v && (y = null))
          }
        },
        lH: function () {
          return null != y
        },
        tV: function () {
          return x
        },
      },
    )
  },
  zsK1(e, t, n) {
    var s = n("KUdL"),
      r = n.n(s)
    let i = {
      CONFIG: 0,
      AGENTS_MD: 1,
      SKILLS: 2,
      COMMANDS: 3,
      SUBAGENTS: 4,
      HOOKS: 5,
      PLUGINS: 6,
      MCP_SERVER_CONFIG: 7,
      MEMORY: 8,
      SESSIONS: 9,
    }
    function o(e, t) {
      switch (t) {
        case "AGENTS_MD":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.agentsMd",
            defaultMessage: "Instructions",
            description: "Label for instruction file external agent config migration item",
          })
        case "CONFIG":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.config",
            defaultMessage: "Settings",
            description: "Label for config external agent config migration item",
          })
        case "SKILLS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.skills",
            defaultMessage: "Skills",
            description: "Label for skills external agent config migration item",
          })
        case "PLUGINS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.plugins",
            defaultMessage: "Plugins",
            description: "Label for plugins external agent config migration item",
          })
        case "SUBAGENTS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.subagents",
            defaultMessage: "Agents",
            description: "Label for subagents external agent config migration item",
          })
        case "HOOKS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.hooks",
            defaultMessage: "Hooks",
            description: "Label for hooks external agent config migration item",
          })
        case "COMMANDS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.commands",
            defaultMessage: "Commands",
            description: "Label for commands external agent config migration item",
          })
        case "SESSIONS":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.sessions",
            defaultMessage: "Sessions",
            description: "Label for sessions external agent config migration item",
          })
        case "MCP_SERVER_CONFIG":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.mcpServerConfig",
            defaultMessage: "MCP servers",
            description: "Label for MCP server config external agent config migration item",
          })
        case "MEMORY":
          return e.formatMessage({
            id: "externalAgentConfig.itemType.memory",
            defaultMessage: "Memory",
            description: "Label for memory external agent config migration item",
          })
      }
    }
    function l(e) {
      return c(e.itemType) && "SESSIONS" !== e.itemType
    }
    function a(e) {
      return i[e] ?? 1 / 0
    }
    function c(e) {
      return Object.hasOwn(i, e)
    }
    n.d(
      t,
      {},
      {
        DA: function (e) {
          return r()(e, ({ itemType: e }) => a(e))
        },
        Jd: function (e) {
          return e.filter(l)
        },
        KE: c,
        UY: o,
        Ud: a,
        al: function (e, t) {
          return o(e, t.itemType)
        },
        du: function (e, t) {
          switch (t) {
            case "claude-code":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCode",
                defaultMessage: "Claude Code",
                description: "Claude Code provider name in external agent import",
              })
            case "claude-cowork":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCowork",
                defaultMessage: "Claude Cowork",
                description: "Claude Cowork provider name in external agent import",
              })
            case "cursor":
              return e.formatMessage({
                id: "electron.onboarding.welcomeV2.externalAgentImport.provider.cursor",
                defaultMessage: "Cursor",
                description: "Cursor provider name in external agent import",
              })
          }
        },
      },
    )
  },
  cCJy(e, t, n) {
    n.d(t, { i: () => c })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("fanO")
    n("zd8w")
    var l = (e) =>
        (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "none",
          viewBox: "0 0 20 20",
          ...e,
          children: (0, s.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m7.584 2.874.251.026c.58.085 1.125.338 1.565.73l.244.238c.111.113.15.15.186.183l.112.093q.138.102.291.175l2.09-.443.226-.037c.7-.076 1.373.182 1.844.66q.369.005.668.028c.436.036.821.112 1.18.294l.206.116c.471.288.855.703 1.107 1.198l.063.136c.137.319.2.662.23 1.042.036.428.035.957.035 1.612V12.7c0 .655 0 1.184-.034 1.612-.031.38-.094.723-.23 1.043l-.064.135c-.252.495-.636.91-1.107 1.199l-.207.115c-.358.182-.743.258-1.178.294-.428.035-.957.034-1.612.034h-6.9c-.655 0-1.184 0-1.612-.034-.38-.031-.723-.094-1.042-.23l-.136-.064a3 3 0 0 1-1.198-1.107l-.116-.207c-.182-.358-.258-.743-.294-1.178-.035-.428-.034-.957-.034-1.612V7.3c0-.655 0-1.184.034-1.612.036-.435.112-.82.294-1.178l.116-.207A3 3 0 0 1 3.76 3.196l.136-.063c.319-.137.662-.2 1.042-.23.428-.036.957-.035 1.612-.035h.695c.144 0 .242 0 .339.006M3.382 12.7c0 .675 0 1.144.03 1.508.03.357.083.558.16.708l.067.12c.167.273.408.496.695.643l.123.052c.137.05.317.085.585.107.364.03.833.03 1.508.03h6.9c.675 0 1.144 0 1.508-.03.357-.03.558-.083.708-.16l.12-.067c.273-.167.496-.408.643-.695l.052-.123c.05-.137.085-.317.107-.585.03-.364.03-.833.03-1.508V9.332H3.382zm12.132-4.632h1.1a10 10 0 0 0-.026-.651 2.3 2.3 0 0 0-.107-.585l-.052-.123a1.75 1.75 0 0 0-.643-.695l-.12-.068c-.14-.07-.324-.12-.636-.151zM12.69 5.162l-.092.015-6.204 1.318a.92.92 0 0 0-.71 1.092l.103.481h8.366l-.464-2.182a.92.92 0 0 0-.999-.724M6.55 4.132c-.675 0-1.144 0-1.508.03a2.3 2.3 0 0 0-.585.107l-.123.052c-.287.147-.528.37-.695.643l-.068.12c-.076.15-.13.351-.159.708-.03.364-.03.833-.03 1.508v.768h1.047l-.044-.205a2.25 2.25 0 0 1 1.733-2.669l2.527-.537-.085-.083a1.75 1.75 0 0 0-.909-.424l-.144-.015c-.05-.003-.103-.003-.262-.003z",
            clipRule: "evenodd",
          }),
        }),
      a = n("afqi")
    function c(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        m,
        g,
        h = (0, r.c)(21),
        { compact: f, sourceIconVariant: y } = e,
        x = void 0 !== f && f,
        b = x ? "gap-0.5" : "gap-4"
      h[0] !== b ? ((t = (0, i.A)("flex items-center", b)), (h[0] = b), (h[1] = t)) : (t = h[1])
      let v = x ? "size-4 rounded-md" : "size-12 rounded-xl",
        j = "orange" === y ? "bg-chart-orange text-inverse" : "bg-text/5 text-secondary"
      h[2] !== v || h[3] !== j
        ? ((n = (0, i.A)("flex shrink-0 items-center justify-center", v, j)), (h[2] = v), (h[3] = j), (h[4] = n))
        : (n = h[4])
      let A = x ? "size-2.5" : "size-6"
      ;(h[5] !== A ? ((c = (0, s.jsx)(l, { className: A })), (h[5] = A), (h[6] = c)) : (c = h[6]),
        h[7] !== n || h[8] !== c
          ? ((d = (0, s.jsx)("div", { className: n, children: c })), (h[7] = n), (h[8] = c), (h[9] = d))
          : (d = h[9]))
      let w = x ? "h-4 w-3" : "h-12 w-10"
      ;(h[10] !== w ? ((u = (0, i.A)("text-default", w)), (h[10] = w), (h[11] = u)) : (u = h[11]),
        h[12] !== u ? ((p = (0, s.jsx)(o.A, { className: u })), (h[12] = u), (h[13] = p)) : (p = h[13]))
      let C = x ? "size-4" : "size-12"
      return (
        h[14] !== C ? ((m = (0, s.jsx)(a.A, { className: C })), (h[14] = C), (h[15] = m)) : (m = h[15]),
        h[16] !== p || h[17] !== m || h[18] !== t || h[19] !== d
          ? ((g = (0, s.jsxs)("div", { className: t, "aria-hidden": "true", children: [d, p, m] })),
            (h[16] = p),
            (h[17] = m),
            (h[18] = t),
            (h[19] = d),
            (h[20] = g))
          : (g = h[20]),
        g
      )
    }
  },
  j6in(e, t, n) {
    let s = ["claude-code", "claude-cowork", "cursor"],
      r = s.slice(0, -1),
      i = [...s]
    n.d(
      t,
      {},
      {
        Pc: "3203613120",
        lM: function (e) {
          return e ? i : r
        },
        t_: s,
      },
    )
  },
  RBjS(e, t, n) {
    var s = n("QosV"),
      r = n("ASxG"),
      i = n("hZax")
    let o = "1094490005",
      l = r
        .number()
        .int()
        .positive()
        .optional()
        .catch(void 0),
      a = r.object({ max_session_age_days: l, max_sessions_per_space: l })
    function c(e) {
      let t = a.parse(e)
      if (null != t.max_session_age_days || null != t.max_sessions_per_space)
        return {
          maxSessionAgeMs: null == t.max_session_age_days ? void 0 : 864e5 * t.max_session_age_days,
          maxSessionsPerSpace: t.max_sessions_per_space,
        }
    }
    n.d(
      t,
      {},
      {
        Y9: function (e) {
          return c(e?.getDynamicConfig(o).value ?? {})
        },
        bG: function () {
          let e,
            t = (0, s.c)(2),
            { value: n } = (0, i.Fj)(o)
          return (t[0] !== n ? ((e = c(n)), (t[0] = n), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  F1TY(e, t, n) {
    n.d(t, { sJ: () => M, BN: () => C, hD: () => S })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("t5ha")
    let o = (0, n("nkTT").a)({
      name: "triangle-exclamation-mark-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.812012, y: 3.085938, width: 20.375488, height: 17.664551 },
        visualBounds: { x: 1.812012, y: 3.085938, width: 20.375488, height: 17.664551 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.812012, y: 3.085938, width: 20.375488, height: 17.664551 },
        center: { x: 11.999756, y: 11.918214 },
        insets: { top: 3.085938, right: 1.8125, bottom: 3.249511, left: 1.812012 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.999756, y: 11.918214 },
          foreground: { x: 11.999756, y: 11.918214 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.1217 15.1197C12.721 15.1805 13.1891 15.687 13.1891 16.3023C13.189 16.9585 12.6567 17.4906 12.0006 17.4908C11.3852 17.4908 10.8787 17.0228 10.818 16.4234L10.8121 16.3023L10.818 16.1803C10.879 15.5812 11.3855 15.1139 12.0006 15.1139L12.1217 15.1197Z" fill="currentColor"/> <path d="M12.0006 8.75058C12.4146 8.75084 12.7506 9.08653 12.7506 9.50058V12.7506C12.7503 13.1644 12.4144 13.5003 12.0006 13.5006C11.5865 13.5006 11.2509 13.1646 11.2506 12.7506V9.50058C11.2506 9.08636 11.5864 8.75058 12.0006 8.75058Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65294 4.40194C10.7253 2.64727 13.274 2.64727 14.3463 4.40194L21.7799 16.567C22.8994 18.3994 21.5806 20.7506 19.4332 20.7506H4.56603C2.419 20.7503 1.10035 18.3992 2.21935 16.567L9.65294 4.40194ZM13.066 5.18417C12.5786 4.38675 11.4206 4.38675 10.9332 5.18417L3.49865 17.3492C2.99081 18.1819 3.59051 19.2503 4.56603 19.2506H19.4332C20.4091 19.2506 21.0089 18.1821 20.5006 17.3492L13.066 5.18417Z" fill="currentColor"/>',
    })
    var l = n("on57"),
      a = n("zd8w"),
      c = n("oyxz"),
      d = n("Wf1j"),
      u = n("ygO2"),
      p = n("JNtf"),
      m = n("mUDD"),
      g = n("HOLv"),
      h = n("v0Gf"),
      f = n("RNul"),
      y = n("BrP7"),
      x = n("N5C1"),
      b = n("bb3f"),
      v = n("cCJy")
    let j = {
        apps: "external-agent-import-setup-apps-panel",
        hooks: "external-agent-import-setup-hooks-panel",
        mcps: "external-agent-import-setup-mcps-panel",
      },
      A = ["apps", "mcps", "hooks"],
      w = ["apps", "mcps"]
    function C(e) {
      let t,
        n,
        i,
        o,
        l,
        a,
        d,
        u,
        g,
        h = (0, r.c)(37),
        {
          appsRequiringConnection: f,
          connectedApps: y,
          hasImportedHooks: x,
          importedPlugins: b,
          isAppConnectPending: j,
          mcpServerNamesRequiringAuthentication: A,
          open: w,
          selectedTab: C,
          tabStatus: I,
          onConnectApp: k,
          onInstallPlugin: N,
          onOpenChange: T,
          onOpenHooksSettings: _,
          onAuthenticateMcp: E,
          onOpenSettings: O,
          onRetry: P,
          onSelectTab: L,
          onShown: R,
        } = e
      return (
        h[0] !== R
          ? ((t = {
              onOpenAutoFocus: (e) => {
                ;(e.preventDefault(),
                  e.currentTarget instanceof HTMLElement && e.currentTarget.querySelector("h2")?.focus(),
                  R?.())
              },
            }),
            (h[0] = R),
            (h[1] = t))
          : (t = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(c.A, {
              id: "externalAgentImport.setupDialog.close",
              defaultMessage: "Close imported setup",
              description: "Accessible label for closing the imported setup dialog",
            })),
            (h[2] = n))
          : (n = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = {
              maxHeight: "min(720px, calc(100dvh / var(--codex-window-zoom) - 64px))",
              minHeight: "min(480px, calc(100dvh / var(--codex-window-zoom) - 64px))",
            }),
            (h[3] = i))
          : (i = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)("div", {
              className: "flex justify-center",
              children: (0, s.jsx)(v.i, { sourceIconVariant: "neutral" }),
            })),
            (h[4] = o))
          : (o = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(p.L3, {
              className: "heading-xl mt-8 block text-default outline-none",
              tabIndex: -1,
              children: (0, s.jsx)(c.A, {
                id: "externalAgentImport.setupDialog.title",
                defaultMessage: "Continue with your existing setup",
                description: "Title for the imported setup follow-up dialog",
              }),
            })),
            (h[5] = l))
          : (l = h[5]),
        h[6] !== f || h[7] !== y || h[8] !== x || h[9] !== b || h[10] !== A || h[11] !== O || h[12] !== I
          ? ((a = (0, s.jsxs)("div", {
              className: "shrink-0 px-5 pt-5",
              children: [
                o,
                l,
                (0, s.jsx)(p.rr, {
                  className: "mt-2 text-base leading-6 text-codex-description",
                  children: (0, s.jsx)(S, {
                    appsRequiringConnection: f,
                    connectedApps: y,
                    hasImportedHooks: x,
                    importedPlugins: b,
                    mcpServerNamesRequiringAuthentication: A,
                    tabStatus: I,
                    onOpenSettings: O,
                  }),
                }),
              ],
            })),
            (h[6] = f),
            (h[7] = y),
            (h[8] = x),
            (h[9] = b),
            (h[10] = A),
            (h[11] = O),
            (h[12] = I),
            (h[13] = a))
          : (a = h[13]),
        h[14] !== f ||
        h[15] !== y ||
        h[16] !== x ||
        h[17] !== b ||
        h[18] !== j ||
        h[19] !== A ||
        h[20] !== E ||
        h[21] !== k ||
        h[22] !== N ||
        h[23] !== _ ||
        h[24] !== P ||
        h[25] !== L ||
        h[26] !== C ||
        h[27] !== I
          ? ((d = (0, s.jsx)(M, {
              appsRequiringConnection: f,
              connectedApps: y,
              hasImportedHooks: x,
              importedPlugins: b,
              isAppConnectPending: j,
              mcpServerNamesRequiringAuthentication: A,
              selectedTab: C,
              tabStatus: I,
              onConnectApp: k,
              onInstallPlugin: N,
              onOpenHooksSettings: _,
              onAuthenticateMcp: E,
              onRetry: P,
              onSelectTab: L,
            })),
            (h[14] = f),
            (h[15] = y),
            (h[16] = x),
            (h[17] = b),
            (h[18] = j),
            (h[19] = A),
            (h[20] = E),
            (h[21] = k),
            (h[22] = N),
            (h[23] = _),
            (h[24] = P),
            (h[25] = L),
            (h[26] = C),
            (h[27] = I),
            (h[28] = d))
          : (d = h[28]),
        h[29] !== a || h[30] !== d
          ? ((u = (0, s.jsxs)(m.R4, { className: "overflow-hidden select-none", style: i, children: [a, d] })),
            (h[29] = a),
            (h[30] = d),
            (h[31] = u))
          : (u = h[31]),
        h[32] !== T || h[33] !== w || h[34] !== t || h[35] !== u
          ? ((g = (0, s.jsx)(p.lG, {
              contentProps: t,
              dialogCloseLabel: n,
              open: w,
              size: "wide",
              onOpenChange: T,
              children: u,
            })),
            (h[32] = T),
            (h[33] = w),
            (h[34] = t),
            (h[35] = u),
            (h[36] = g))
          : (g = h[36]),
        g
      )
    }
    function S(e) {
      let t,
        n,
        i,
        o,
        l,
        a,
        d,
        u = (0, r.c)(29),
        {
          appsRequiringConnection: p,
          connectedApps: m,
          hasImportedHooks: g,
          importedPlugins: h,
          mcpServerNamesRequiringAuthentication: f,
          tabStatus: y,
          variant: x,
          onOpenSettings: b,
        } = e,
        v = void 0 === x ? "dialog" : x,
        j = "onboarding" === v || "conversational" === v ? w : A
      u[0] !== m ? ((t = new Set(m.map(I))), (u[0] = m), (u[1] = t)) : (t = u[1])
      let C = t
      if (u[2] !== C || u[3] !== h) {
        let e
        ;(u[5] !== C
          ? ((e = (e) => {
              let { app: t } = e
              return !C.has(t.id)
            }),
            (u[5] = C),
            (u[6] = e))
          : (e = u[6]),
          (n = h.filter(e)),
          (u[2] = C),
          (u[3] = h),
          (u[4] = n))
      } else n = u[4]
      let S = n.length
      if (u[7] !== p || u[8] !== C) {
        let e
        ;(u[10] !== C
          ? ((e = (e) => {
              let { id: t } = e
              return !C.has(t)
            }),
            (u[10] = C),
            (u[11] = e))
          : (e = u[11]),
          (i = p.filter(e)),
          (u[7] = p),
          (u[8] = C),
          (u[9] = i))
      } else i = u[9]
      let M = S + i.length + m.length,
        k = +!!g
      u[12] !== f.length || u[13] !== M || u[14] !== k
        ? ((o = { apps: M, hooks: k, mcps: f.length }), (u[12] = f.length), (u[13] = M), (u[14] = k), (u[15] = o))
        : (o = u[15])
      let N = o
      if (u[16] !== N || u[17] !== j || u[18] !== y) {
        let e
        ;(u[20] !== N || u[21] !== y
          ? ((e = (e) => ("mcps" === e ? N[e] > 0 : N[e] > 0 || "ready" !== y[e])),
            (u[20] = N),
            (u[21] = y),
            (u[22] = e))
          : (e = u[22]),
          (l = j.filter(e).join("_")),
          (u[16] = N),
          (u[17] = j),
          (u[18] = y),
          (u[19] = l))
      } else l = u[19]
      let T = l,
        _ = null == b ? "false" : "true"
      return (
        u[23] !== b
          ? ((a = (e) =>
              (0, s.jsx)(
                "button",
                {
                  className:
                    "cursor-interaction rounded-sm border-0 bg-transparent p-0 text-inherit underline decoration-current underline-offset-2 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                  type: "button",
                  onClick: b,
                  children: e,
                },
                "settings",
              )),
            (u[23] = b),
            (u[24] = a))
          : (a = u[24]),
        u[25] !== T || u[26] !== _ || u[27] !== a
          ? ((d = (0, s.jsx)(c.A, {
              id: "externalAgentImport.setup.subtitle.v3",
              defaultMessage:
                "Finish setting up the {categories, select, apps {plugins} mcps {MCPs} hooks {hooks} apps_mcps {plugins and MCPs} apps_hooks {plugins and hooks} mcps_hooks {MCPs and hooks} apps_mcps_hooks {plugins, MCPs, and hooks} other {tools}} you imported{settingsAvailable, select, true {. You can do this now or later in <settings>Settings</settings>} other {}}",
              description:
                "Description for imported plugin, MCP, and hook categories that still need setup. When available, the settings element opens Import settings.",
              values: { categories: T, settingsAvailable: _, settings: a },
            })),
            (u[25] = T),
            (u[26] = _),
            (u[27] = a),
            (u[28] = d))
          : (d = u[28]),
        d
      )
    }
    function I(e) {
      let { id: t } = e
      return t
    }
    function M(e) {
      let t,
        n,
        i,
        o,
        u,
        p,
        m,
        g,
        f,
        x,
        b,
        v,
        C,
        S,
        I,
        M,
        T,
        O,
        L,
        R,
        D,
        F,
        U = (0, r.c)(110),
        {
          appsRequiringConnection: q,
          connectedApps: z,
          hasImportedHooks: H,
          importedPlugins: V,
          isAppConnectPending: G,
          mcpServerNamesRequiringAuthentication: B,
          selectedTab: K,
          tabStatus: $,
          variant: W,
          onAllItemsComplete: Z,
          onConnectApp: X,
          onInstallPlugin: Y,
          onOpenHooksSettings: J,
          onAuthenticateMcp: Q,
          onRetry: ee,
          onSelectTab: et,
        } = e,
        en = void 0 === W ? "dialog" : W,
        es = (0, d.A)(),
        er = "dialog" === en || "settings" === en,
        ei = er ? A : w
      U[0] !== z ? ((t = new Set(z.map(k))), (U[0] = z), (U[1] = t)) : (t = U[1])
      let eo = t
      if (U[2] !== q || U[3] !== eo) {
        let e
        ;(U[5] !== eo
          ? ((e = (e) => {
              let { id: t } = e
              return !eo.has(t)
            }),
            (U[5] = eo),
            (U[6] = e))
          : (e = U[6]),
          (n = q.filter(e)),
          (U[2] = q),
          (U[3] = eo),
          (U[4] = n))
      } else n = U[4]
      let el = n
      if (U[7] !== eo || U[8] !== V) {
        let e
        ;(U[10] !== eo
          ? ((e = (e) => {
              let { app: t } = e
              return !eo.has(t.id)
            }),
            (U[10] = eo),
            (U[11] = e))
          : (e = U[11]),
          (i = V.filter(e)),
          (U[7] = eo),
          (U[8] = V),
          (U[9] = i))
      } else i = U[9]
      let ea = i
      U[12] !== z ||
      U[13] !== H ||
      U[14] !== G ||
      U[15] !== B.length ||
      U[16] !== Z ||
      U[17] !== el.length ||
      U[18] !== ea.length ||
      U[19] !== er ||
      U[20] !== ei ||
      U[21] !== $
        ? ((o =
            null != Z &&
            (!er || !H) &&
            0 === el.length &&
            0 === ea.length &&
            0 === B.length &&
            z.every((e) => e.isAccessible && e.isEnabled && !G(e.id)) &&
            ei.every((e) => "ready" === $[e])),
          (U[12] = z),
          (U[13] = H),
          (U[14] = G),
          (U[15] = B.length),
          (U[16] = Z),
          (U[17] = el.length),
          (U[18] = ea.length),
          (U[19] = er),
          (U[20] = ei),
          (U[21] = $),
          (U[22] = o))
        : (o = U[22])
      let ec = o
      U[23] !== Z ? ((u = () => Z?.()), (U[23] = Z), (U[24] = u)) : (u = U[24])
      let ed = (0, a.useEffectEvent)(u)
      ;(U[25] !== ec || U[26] !== ed
        ? ((p = () => {
            ec && ed()
          }),
          (U[25] = ec),
          (U[26] = ed),
          (U[27] = p))
        : (p = U[27]),
        U[28] !== ec ? ((m = [ec]), (U[28] = ec), (U[29] = m)) : (m = U[29]),
        (0, a.useEffect)(p, m))
      let eu = ea.length + el.length + z.length,
        ep = +!!H
      U[30] !== B.length || U[31] !== ep || U[32] !== eu
        ? ((g = { apps: eu, hooks: ep, mcps: B.length }), (U[30] = B.length), (U[31] = ep), (U[32] = eu), (U[33] = g))
        : (g = U[33])
      let em = g
      if (U[34] !== em || U[35] !== B.length || U[36] !== K || U[37] !== ei || U[38] !== $) {
        b = Symbol.for("react.early_return_sentinel")
        e: {
          let e
          if (
            (U[43] !== em || U[44] !== $
              ? ((e = (e) => ("mcps" === e ? em[e] > 0 : em[e] > 0 || "ready" !== $[e])),
                (U[43] = em),
                (U[44] = $),
                (U[45] = e))
              : (e = U[45]),
            null == (f = (v = ei.filter(e)).includes(K) ? K : v[0]))
          ) {
            b = null
            break e
          }
          x = [
            {
              key: "apps",
              name: (0, s.jsx)(c.A, {
                id: "externalAgentImport.setupDialog.tabs.plugins",
                defaultMessage: "{status, select, ready {Plugins ({count})} other {Plugins}}",
                description: "Plugins tab label with imported plugin setup count when available",
                values: { count: em.apps, status: $.apps },
              }),
              panelId: j.apps,
            },
            {
              key: "mcps",
              name: (0, s.jsx)(c.A, {
                id: "externalAgentImport.setupDialog.tabs.mcps.v3",
                defaultMessage: "{status, select, ready {MCPs ({count})} other {MCPs}}",
                description: "MCPs tab label with authentication-required count when available",
                values: { count: B.length, status: $.mcps },
              }),
              panelId: j.mcps,
            },
            {
              key: "hooks",
              name: (0, s.jsx)(c.A, {
                id: "externalAgentImport.setupDialog.tabs.hooks",
                defaultMessage: "Hooks",
                description: "Hooks tab label in the imported setup dialog",
              }),
              panelId: j.hooks,
            },
          ].filter((e) => v.includes(e.key))
        }
        ;((U[34] = em),
          (U[35] = B.length),
          (U[36] = K),
          (U[37] = ei),
          (U[38] = $),
          (U[39] = f),
          (U[40] = x),
          (U[41] = b),
          (U[42] = v))
      } else ((f = U[39]), (x = U[40]), (b = U[41]), (v = U[42]))
      if (b !== Symbol.for("react.early_return_sentinel")) return b
      let eg = x
      U[46] !== et || U[47] !== v
        ? ((C = (e) => {
            let t,
              n = v.findIndex(
                (t) => e.currentTarget.querySelector(`[aria-controls="${j[t]}"]`) === document.activeElement,
              )
            if (-1 === n) return
            switch (e.key) {
              case "Home":
                t = 0
                break
              case "End":
                t = v.length - 1
                break
              case "ArrowRight":
                t = (n + 1) % v.length
                break
              case "ArrowLeft":
                t = (n - 1 + v.length) % v.length
                break
              default:
                return
            }
            e.preventDefault()
            let s = v[t]
            null != s && (et(s), e.currentTarget.querySelector(`[aria-controls="${j[s]}"]`)?.focus())
          }),
          (U[46] = et),
          (U[47] = v),
          (U[48] = C))
        : (C = U[48])
      let eh = C,
        ef = "conversational" !== en && "px-5",
        ey = ("settings" === en || "onboarding" === en) && "pt-4"
      ;(U[49] !== ef || U[50] !== ey ? ((S = (0, l.A)(ef, ey)), (U[49] = ef), (U[50] = ey), (U[51] = S)) : (S = U[51]),
        U[52] !== es
          ? ((I = es.formatMessage({
              id: "externalAgentImport.setupDialog.tabs.ariaLabel",
              defaultMessage: "Imported setup categories",
              description: "Accessible label for tabs in the imported setup dialog",
            })),
            (U[52] = es),
            (U[53] = I))
          : (I = U[53]))
      let ex = "dialog" === en ? "mt-8" : void 0
      ;(U[54] !== f || U[55] !== et || U[56] !== I || U[57] !== ex || U[58] !== eg
        ? ((M = (0, s.jsx)(y.t, {
            ariaLabel: I,
            className: ex,
            selectedKey: f,
            tabs: eg,
            variant: "toolbar",
            onSelect: et,
          })),
          (U[54] = f),
          (U[55] = et),
          (U[56] = I),
          (U[57] = ex),
          (U[58] = eg),
          (U[59] = M))
        : (M = U[59]),
        U[60] !== eh || U[61] !== S || U[62] !== M
          ? ((T = (0, s.jsx)("div", { className: S, role: "presentation", onKeyDown: eh, children: M })),
            (U[60] = eh),
            (U[61] = S),
            (U[62] = M),
            (U[63] = T))
          : (T = U[63]))
      let eb = "dialog" === en ? "mt-5 grid min-h-0 flex-1 grid-cols-1" : "flex min-h-0 flex-1 flex-col pt-3",
        ev = ("settings" === en || "onboarding" === en) && "px-5 pb-3"
      if (
        (U[64] !== eb || U[65] !== ev ? ((O = (0, l.A)(eb, ev)), (U[64] = eb), (U[65] = ev), (U[66] = O)) : (O = U[66]),
        U[67] !== f || U[68] !== en || U[69] !== v
          ? ((L = "dialog" === en ? v : [f]), (U[67] = f), (U[68] = en), (U[69] = v), (U[70] = L))
          : (L = U[70]),
        U[71] !== f ||
          U[72] !== z ||
          U[73] !== es ||
          U[74] !== G ||
          U[75] !== em ||
          U[76] !== B ||
          U[77] !== Q ||
          U[78] !== X ||
          U[79] !== Y ||
          U[80] !== J ||
          U[81] !== ee ||
          U[82] !== el ||
          U[83] !== ea ||
          U[84] !== L ||
          U[85] !== $ ||
          U[86] !== en)
      ) {
        let e
        ;(U[88] !== f ||
        U[89] !== z ||
        U[90] !== es ||
        U[91] !== G ||
        U[92] !== em ||
        U[93] !== B ||
        U[94] !== Q ||
        U[95] !== X ||
        U[96] !== Y ||
        U[97] !== J ||
        U[98] !== ee ||
        U[99] !== el ||
        U[100] !== ea ||
        U[101] !== $ ||
        U[102] !== en
          ? ((e = (e) => {
              let t = e === f,
                n = em[e],
                r = $[e],
                i = (0, s.jsxs)(s.Fragment, {
                  children: [
                    "apps" === e &&
                      (0, s.jsx)(N, {
                        appsRequiringConnection: el,
                        connectedApps: z,
                        importedPlugins: ea,
                        isAppConnectPending: G,
                        onConnectApp: X,
                        onInstallPlugin: Y,
                      }),
                    "mcps" === e && (0, s.jsx)(_, { mcps: B, onAuthenticateMcp: Q }),
                    "hooks" === e && (0, s.jsx)(E, { onOpenHooksSettings: J }),
                  ],
                })
              return (0, s.jsx)(
                "div",
                {
                  id: j[e],
                  "aria-hidden": "dialog" === en ? !t : void 0,
                  "aria-label": es.formatMessage(
                    {
                      id: "externalAgentImport.setupDialog.panelAriaLabel.v3",
                      defaultMessage:
                        "{tab, select, apps {Imported plugins requiring setup} mcps {Imported MCPs requiring authentication} other {Imported hooks requiring review}}",
                      description: "Accessible label for the selected imported setup panel",
                    },
                    { tab: e },
                  ),
                  className: (0, l.A)(
                    "flex min-h-0 flex-1 flex-col",
                    "dialog" === en && "col-start-1 row-start-1",
                    "dialog" === en && !t && "invisible",
                  ),
                  inert: "dialog" === en ? !t : void 0,
                  role: "tabpanel",
                  tabIndex: t ? 0 : -1,
                  children:
                    0 === n
                      ? (0, s.jsx)(P, { status: "ready" === r ? "empty" : r, tab: e, onRetry: ee })
                      : "dialog" === en
                        ? (0, s.jsx)(h.Q, {
                            className: "relative min-h-0 flex-1",
                            fadeClassName: "inset-x-5",
                            scrollClassName: "h-full overflow-y-auto px-5 pb-1",
                            children: i,
                          })
                        : i,
                },
                e,
              )
            }),
            (U[88] = f),
            (U[89] = z),
            (U[90] = es),
            (U[91] = G),
            (U[92] = em),
            (U[93] = B),
            (U[94] = Q),
            (U[95] = X),
            (U[96] = Y),
            (U[97] = J),
            (U[98] = ee),
            (U[99] = el),
            (U[100] = ea),
            (U[101] = $),
            (U[102] = en),
            (U[103] = e))
          : (e = U[103]),
          (R = L.map(e)),
          (U[71] = f),
          (U[72] = z),
          (U[73] = es),
          (U[74] = G),
          (U[75] = em),
          (U[76] = B),
          (U[77] = Q),
          (U[78] = X),
          (U[79] = Y),
          (U[80] = J),
          (U[81] = ee),
          (U[82] = el),
          (U[83] = ea),
          (U[84] = L),
          (U[85] = $),
          (U[86] = en),
          (U[87] = R))
      } else R = U[87]
      return (
        U[104] !== O || U[105] !== R
          ? ((D = (0, s.jsx)("div", { className: O, children: R })), (U[104] = O), (U[105] = R), (U[106] = D))
          : (D = U[106]),
        U[107] !== T || U[108] !== D
          ? ((F = (0, s.jsxs)(s.Fragment, { children: [T, D] })), (U[107] = T), (U[108] = D), (U[109] = F))
          : (F = U[109]),
        F
      )
    }
    function k(e) {
      let { id: t } = e
      return t
    }
    function N(e) {
      let t,
        n = (0, r.c)(8),
        {
          appsRequiringConnection: i,
          connectedApps: o,
          importedPlugins: l,
          isAppConnectPending: a,
          onConnectApp: c,
          onInstallPlugin: u,
        } = e,
        p = (0, d.A)()
      if (n[0] !== i || n[1] !== o || n[2] !== l || n[3] !== p || n[4] !== a || n[5] !== c || n[6] !== u) {
        let e = [
          ...l.map((e) => {
            let { app: t, plugin: n } = e
            return {
              action: "install",
              app: t,
              key: `plugin:${n.plugin.id}`,
              onInstallApp: async () => {
                u(n, t)
              },
            }
          }),
          ...[...i.map(T), ...o].map((e) => ({
            action: "connect",
            app: e,
            key: `app:${e.id}`,
            onInstallApp: async () => {
              await c(e)
            },
          })),
        ]
        ;((t = (0, s.jsx)(s.Fragment, {
          children: e.map((e) => {
            let { action: t, app: n, key: r, onInstallApp: i } = e,
              o = a(n.id),
              l = "install" === t ? { ...n, isAccessible: !1 } : n
            return (0, s.jsx)(
              b.S,
              {
                app:
                  null == l.description
                    ? {
                        ...l,
                        description: p.formatMessage({
                          id: "externalAgentImport.setupDialog.apps.fallbackDescription",
                          defaultMessage: "Imported from another AI app",
                          description: "Fallback description for an app imported from another AI app",
                        }),
                      }
                    : l,
                cardIconContainerVariant: "outline",
                installActionDisabled: "install" === t && o,
                installActionType: t,
                installActionLabel:
                  "install" === t
                    ? p.formatMessage({
                        id: "externalAgentImport.setupDialog.installPluginAction",
                        defaultMessage: "Install",
                        description: "Button label for installing a plugin matched to an imported app",
                      })
                    : void 0,
                installedStateAction: "toggle",
                isConnectingApp: o,
                manageAction: "menu",
                presentation: "row",
                updatingAppId: null,
                onInstallApp: i,
              },
              r,
            )
          }),
        })),
          (n[0] = i),
          (n[1] = o),
          (n[2] = l),
          (n[3] = p),
          (n[4] = a),
          (n[5] = c),
          (n[6] = u),
          (n[7] = t))
      } else t = n[7]
      return t
    }
    function T(e) {
      return { ...e, isAccessible: !1 }
    }
    function _(e) {
      let t,
        n,
        i = (0, r.c)(7),
        { mcps: o, onAuthenticateMcp: l } = e
      if (i[0] !== o || i[1] !== l) {
        let e
        ;(i[3] !== l
          ? ((e = (e) =>
              (0, s.jsx)(
                O,
                {
                  action: "authenticate",
                  description: (0, s.jsx)(c.A, {
                    id: "externalAgentImport.setupDialog.mcps.description",
                    defaultMessage: "Authentication is required before this MCP server can be used",
                    description: "Description for an imported MCP server that requires authentication",
                  }),
                  icon: (0, s.jsx)(x.A, { "aria-hidden": "true", className: "icon-base text-secondary" }),
                  label: e,
                  onAction: () => {
                    l(e)
                  },
                },
                e,
              )),
            (i[3] = l),
            (i[4] = e))
          : (e = i[4]),
          (t = o.map(e)),
          (i[0] = o),
          (i[1] = l),
          (i[2] = t))
      } else t = i[2]
      return (i[5] !== t ? ((n = (0, s.jsx)(s.Fragment, { children: t })), (i[5] = t), (i[6] = n)) : (n = i[6]), n)
    }
    function E(e) {
      let t,
        n,
        o,
        l,
        a = (0, r.c)(7),
        { onOpenHooksSettings: u } = e,
        p = (0, d.A)()
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(c.A, {
              id: "externalAgentImport.setupDialog.hooks.description.v3",
              defaultMessage: "Review imported hooks before allowing them to run",
              description: "Description for the imported hooks review action",
            })),
            (n = (0, s.jsx)(g.I, { className: "text-secondary", asset: i.g, "aria-hidden": "true" })),
            (a[0] = t),
            (a[1] = n))
          : ((t = a[0]), (n = a[1])),
        a[2] !== p
          ? ((o = p.formatMessage({
              id: "externalAgentImport.setupDialog.hooks.label",
              defaultMessage: "Imported hooks",
              description: "Label for the imported hooks review action",
            })),
            (a[2] = p),
            (a[3] = o))
          : (o = a[3]),
        a[4] !== u || a[5] !== o
          ? ((l = (0, s.jsx)(O, { action: "openSettings", description: t, icon: n, label: o, onAction: u })),
            (a[4] = u),
            (a[5] = o),
            (a[6] = l))
          : (l = a[6]),
        l
      )
    }
    function O(e) {
      let t,
        n,
        i,
        o,
        l,
        a,
        p,
        m,
        g = (0, r.c)(23),
        { action: h, description: f, icon: y, label: x, onAction: b } = e,
        v = (0, d.A)()
      return (
        g[0] !== y
          ? ((t = (0, s.jsx)("span", {
              className:
                "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface",
              children: y,
            })),
            (g[0] = y),
            (g[1] = t))
          : (t = g[1]),
        g[2] !== x
          ? ((n = (0, s.jsx)("div", { className: "truncate text-sm font-medium text-default", children: x })),
            (g[2] = x),
            (g[3] = n))
          : (n = g[3]),
        g[4] !== f
          ? ((i = (0, s.jsx)("div", { className: "truncate text-xs leading-4 text-secondary", children: f })),
            (g[4] = f),
            (g[5] = i))
          : (i = g[5]),
        g[6] !== n || g[7] !== i
          ? ((o = (0, s.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [n, i] })),
            (g[6] = n),
            (g[7] = i),
            (g[8] = o))
          : (o = g[8]),
        g[9] !== h || g[10] !== v || g[11] !== x
          ? ((l = v.formatMessage(
              {
                id: "externalAgentImport.setupDialog.actionAriaLabel.v3",
                defaultMessage:
                  "{action, select, authenticate {Authenticate {name}} connect {Connect {name}} other {Open settings for {name}}}",
                description: "Accessible label for an action on a named imported app, MCP server, or hook group",
              },
              { action: h, name: x },
            )),
            (g[9] = h),
            (g[10] = v),
            (g[11] = x),
            (g[12] = l))
          : (l = g[12]),
        g[13] !== h
          ? ((a = (0, s.jsx)(c.A, {
              id: "externalAgentImport.setupDialog.action.v3",
              defaultMessage: "{action, select, authenticate {Authenticate} connect {Connect} other {Open settings}}",
              description: "Button label for an imported app, MCP server, or hook group action",
              values: { action: h },
            })),
            (g[13] = h),
            (g[14] = a))
          : (a = g[14]),
        g[15] !== b || g[16] !== l || g[17] !== a
          ? ((p = (0, s.jsx)(u.$, {
              "aria-label": l,
              className: "shrink-0",
              color: "outline",
              size: "medium",
              onClick: b,
              children: a,
            })),
            (g[15] = b),
            (g[16] = l),
            (g[17] = a),
            (g[18] = p))
          : (p = g[18]),
        g[19] !== t || g[20] !== o || g[21] !== p
          ? ((m = (0, s.jsxs)("div", { className: "flex items-center gap-3 py-2", children: [t, o, p] })),
            (g[19] = t),
            (g[20] = o),
            (g[21] = p),
            (g[22] = m))
          : (m = g[22]),
        m
      )
    }
    function P(e) {
      let t,
        n,
        i,
        l,
        a,
        d = (0, r.c)(18),
        { status: p, tab: m, onRetry: h } = e,
        y = "loading" === p ? "polite" : void 0,
        x = "error" === p ? "alert" : void 0
      return (
        d[0] !== p
          ? ((t = "loading" === p && (0, s.jsx)(f.y, { className: "icon-sm" })), (d[0] = p), (d[1] = t))
          : (t = d[1]),
        d[2] !== p
          ? ((n = "error" === p && (0, s.jsx)(g.I, { className: "text-secondary", asset: o, "aria-hidden": "true" })),
            (d[2] = p),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== p || d[5] !== m
          ? ((i = (0, s.jsx)(c.A, {
              id: "externalAgentImport.setupDialog.status.v3",
              defaultMessage:
                "{status, select, loading {{tab, select, apps {Loading imported plugins…} mcps {Loading imported MCPs…} other {Loading imported hooks…}}} error {{tab, select, apps {Imported plugins couldn't be fully checked} mcps {Imported MCPs couldn't be fully checked} other {Imported hooks couldn't be fully checked}}} other {{tab, select, apps {No imported plugins need setup} mcps {No imported MCPs need authentication} other {No imported hooks need review}}}}",
              description: "Status message for the selected imported setup category",
              values: { status: p, tab: m },
            })),
            (d[4] = p),
            (d[5] = m),
            (d[6] = i))
          : (i = d[6]),
        d[7] !== h || d[8] !== p || d[9] !== m
          ? ((l =
              "error" === p &&
              (0, s.jsx)(u.$, {
                color: "outline",
                size: "medium",
                onClick: () => h(m),
                children: (0, s.jsx)(c.A, {
                  id: "externalAgentImport.setupDialog.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry loading imported setup items",
                }),
              })),
            (d[7] = h),
            (d[8] = p),
            (d[9] = m),
            (d[10] = l))
          : (l = d[10]),
        d[11] !== y || d[12] !== x || d[13] !== t || d[14] !== n || d[15] !== i || d[16] !== l
          ? ((a = (0, s.jsxs)("div", {
              "aria-live": y,
              className:
                "flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center text-sm text-secondary",
              role: x,
              children: [t, n, i, l],
            })),
            (d[11] = y),
            (d[12] = x),
            (d[13] = t),
            (d[14] = n),
            (d[15] = i),
            (d[16] = l),
            (d[17] = a))
          : (a = d[17]),
        a
      )
    }
  },
  ltay(e, t, n) {
    var s = n("D7Ms"),
      r = n("zTeN"),
      i = n("GaA7"),
      o = n("q77y"),
      l = n("OWtl"),
      a = n("rvFo"),
      c = n("Igx9")
    let d = (0, r.vU)(l.u, (e) => {
      let t = i.appServices?.externalAgentImport
      return {
        queryKey: [c.Tt, e],
        queryFn:
          null == t
            ? s.hT
            : ({ signal: n }) => (0, o.P)(t.readImportedConnectors({ hostId: e, providers: ["claude-cowork"] }), n),
        retry: !1,
        staleTime: a.D.FIVE_MINUTES,
      }
    })
    n.d(
      t,
      {},
      {
        M: d,
        p: function ({ apps: e, candidates: t }) {
          let n = new Map(e.map((e) => [e.id, e])),
            s = new Map()
          for (let t of e) {
            let e = t.name.trim().toLowerCase()
            s.set(e, [...(s.get(e) ?? []), t])
          }
          let r = new Map()
          for (let e of t) {
            if (null == e.codexAppId) continue
            let t = n.get(e.codexAppId)
            null != t && r.set(e.name.trim().toLowerCase(), t)
          }
          let i = [],
            o = new Set()
          for (let e of t) {
            let t = e.name.trim().toLowerCase(),
              l = null == e.codexAppId ? void 0 : n.get(e.codexAppId),
              a = s.get(t) ?? [],
              c = l ?? r.get(t) ?? a.find((e) => null != e.logoUrl || null != e.logoUrlDark) ?? a[0]
            null == c || o.has(c.id) || (o.add(c.id), i.push(c))
          }
          return i
        },
      },
    )
  },
  U2Lm(e, t, n) {
    var s = n("hOO0"),
      r = n("C3Kr"),
      i = n("ueue"),
      o = n("ltay")
    function l(e, t) {
      return (
        (0, i._s)(t.marketplaceName) &&
        (null != t.canonicalAppId ? (0, s.$)(t.canonicalAppId) === (0, s.$)(e.id) : (0, r.Y)(e, t.plugin))
      )
    }
    n.d(
      t,
      {},
      {
        R: function ({ candidates: e, directoryApps: t, plugins: n, runtimeApps: s, useCanonicalAppIds: a = !1 }) {
          let c = [],
            d = [],
            u = new Map(s.map((e) => [e.id, e])),
            p = new Set()
          for (let s of (0, o.p)({ apps: t, candidates: e })) {
            let e = n.filter((e) => (a ? l(s, e) : (0, i._s)(e.marketplaceName) && (0, r.Y)(s, e.plugin)))
            if (0 === e.length || e.some((e) => e.plugin.installed)) {
              u.get(s.id)?.isAccessible || c.push(s)
              continue
            }
            let t = e[0]
            null == t || p.has(t.plugin.id) || (p.add(t.plugin.id), d.push({ app: s, plugin: t }))
          }
          return { appsRequiringConnection: c, importedPlugins: d }
        },
        k: l,
      },
    )
  },
  agQ0(e, t, n) {
    n.d(t, { O: () => T, u: () => N })
    var s = n("zTeN"),
      r = n("HUHI"),
      i = n("OiCI"),
      o = n("cLdu"),
      l = n("Gg2s"),
      a = n("OWtl"),
      c = n("kfGJ"),
      d = n("oeej"),
      u = n("ltay"),
      p = n("CpsU"),
      m = n.n(p),
      g = n("i5ac"),
      h = n.n(g),
      f = n("hOO0"),
      y = n("eFn4"),
      x = n("ygu7"),
      b = n("EEop"),
      v = n("Buqh"),
      j = n("mq2k"),
      A = n("ueue"),
      w = n("ndjw"),
      C = n("rvFo"),
      S = n("U2Lm")
    let I = (0, s.i1)(a.u, ({ hostId: e, apps: t }, { get: n }) => {
        let s = (0, o.hE)(e),
          r = n(i.tT),
          l = !!s || n(j.Y, e)
        if (null == l || (s && null == r) || (!s && e === c.fI && n(y.$S).authLoading))
          return { status: "loading", data: void 0 }
        let a = s ? null : n(w.FM, { hostId: e }),
          d = s ? null : n(w.lE, { hostId: e })
        if (a?.error != null || d?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              ;(a?.refetch(), d?.refetch())
            },
          }
        if (!s && (a?.data == null || d?.data == null)) return { status: "loading", data: void 0 }
        let u = s ? void 0 : (0, A.vZ)({ hostId: e, workspaceRoots: a?.data?.roots, codexHome: d?.data?.codexHome }),
          p = n(o.qF, { accountId: s ? r : null, hostId: e, roots: u }),
          m = s ? null : n(v.M, e),
          g = [a, d, p, m]
        if (g.some((e) => e?.error != null))
          return {
            status: "error",
            data: void 0,
            retry: () => {
              for (let e of g) e?.refetch()
            },
          }
        if (g.some((e) => null != e && null == e.data)) return { status: "loading", data: void 0 }
        let x = h()([...(p.data ?? []), ...(m?.data?.plugins ?? [])], ({ plugin: e }) => e.id),
          b = t.filter((e) => !x.some((t) => (0, S.k)(e, t))),
          C =
            l && null != r && b.length > 0 ? n(M, { hostId: e, appIds: b.map((e) => (0, f.$)(e.id)), roots: u }) : null
        if (C?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              C.refetch()
            },
          }
        if (null != C && null == C.data) return { status: "loading", data: void 0 }
        let I = new Map(x.map((e) => [e.plugin.id, e]))
        for (let e of C?.data ?? []) {
          let t = I.get(e.plugin.id)
          I.set(
            e.plugin.id,
            t?.plugin.installed
              ? {
                  ...e,
                  plugin: {
                    ...e.plugin,
                    installed: !0,
                    installedAt: t.plugin.installedAt,
                    enabled: t.plugin.enabled,
                    installPolicy: t.plugin.installPolicy,
                    installPolicySource: t.plugin.installPolicySource,
                    localVersion: t.plugin.localVersion,
                    remotePluginId: e.plugin.remotePluginId ?? t.plugin.remotePluginId,
                  },
                }
              : e,
          )
        }
        return {
          status: "ready",
          data: { plugins: Array.from(I.values()), isFetching: g.some((e) => e?.isFetching) || C?.isFetching === !0 },
        }
      }),
      M = (0, s.vU)(a.u, ({ hostId: e, appIds: t, roots: n }, { get: s, scope: r }) => {
        let o = s(i.tT)
        return {
          queryKey: ["plugins", "imported-details", e, o, t, n],
          queryFn: async ({ signal: s }) => {
            let i = []
            for (let l of m()(t, 4)) {
              s.throwIfAborted()
              let t = await Promise.all(
                l.map(async (t) => {
                  let { plugin_id: i } = await r.queryClient.fetchQuery((0, x.cO)(t, o))
                  if (null == i) return null
                  s.throwIfAborted()
                  let l = await r.queryClient.fetchQuery({
                    ...r.query.getOptions(b.Pc, (0, b.N$)({ hostId: e, pluginId: i, remotePluginId: i, roots: n })),
                    retry: !1,
                  })
                  return { ...(0, A.qA)(l), canonicalAppId: t }
                }),
              )
              i.push(...t.filter((e) => null != e))
            }
            return (s.throwIfAborted(), i)
          },
          retry: !1,
          staleTime: C.D.ONE_MINUTE,
        }
      }),
      k = (0, s.vU)(a.u, (e, { get: t, scope: n }) => (0, r.bK)(n, e, void 0)),
      N = (0, s.i1)(a.u, (e, { get: t }) => {
        let n = e === c.fI,
          s = n ? t(u.M, e) : null,
          i = t(d.Vh, e),
          a = n ? s?.data?.connectors : [],
          p = i.data
        if (null == p || (null == a && (s?.error != null || 0 === p.length)))
          return s?.error != null || null != i.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  ;(s?.refetch(), i.refetch())
                },
              }
            : { data: void 0, status: "loading" }
        let m = [...(a ?? []), ...p]
        if (0 === m.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let g = t(l.u9, e),
          h = g.data
        if (null == h)
          return null != g.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  g.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (!h.some((e) => "apps" === e.name && e.enabled))
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let f = t(k, e),
          y = f.data
        if (null == y)
          return null != f.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  f.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        let x = (0, u.p)({ apps: y, candidates: m })
        if (0 === x.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let b = t(r.lb, e),
          v = b.data
        if (null == v)
          return null != b.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  b.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (h.find((e) => "plugins" === e.name)?.enabled === !1) {
          let e = new Map(v.map((e) => [e.id, e]))
          return {
            data: {
              kind: "complete",
              setup: { appsRequiringConnection: x.filter((t) => !e.get(t.id)?.isAccessible), importedPlugins: [] },
            },
            status: "ready",
          }
        }
        if (e === c.fI || (0, o.hE)(e)) {
          let n = t(I, { hostId: e, apps: x })
          return "ready" !== n.status
            ? n
            : {
                status: "ready",
                data: {
                  kind: "targeted-plugins",
                  ...n.data,
                  setup: (0, S.R)({
                    candidates: m,
                    directoryApps: y,
                    plugins: n.data.plugins,
                    runtimeApps: v,
                    useCanonicalAppIds: !0,
                  }),
                },
              }
        }
        return { data: { candidates: m, directoryApps: y, kind: "plugin-directory", runtimeApps: v }, status: "ready" }
      })
    function T({ inputsResult: e, pluginDirectory: t }) {
      return "ready" !== e.status
        ? e
        : "plugin-directory" !== e.data.kind
          ? { data: e.data.setup, status: "ready" }
          : null != t.errorMessage
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  t.refetch()
                },
              }
            : t.isLoading
              ? { data: void 0, status: "loading" }
              : {
                  data: (0, S.R)({
                    candidates: e.data.candidates,
                    directoryApps: e.data.directoryApps,
                    plugins: t.plugins,
                    runtimeApps: e.data.runtimeApps,
                  }),
                  status: "ready",
                }
    }
  },
  rxTW(e, t, n) {
    var s = n("QosV"),
      r = n("irkb"),
      i = n("T0Rc"),
      o = n("xSOA"),
      l = n("zTeN"),
      a = n("OWtl"),
      c = n("ndjw"),
      d = n("kfGJ"),
      u = n("ZgQ4"),
      p = n("RIh2"),
      m = n("obo5"),
      g = n("N34f")
    let h = [],
      f = []
    function y(e) {
      return null != e.cwd && "" !== e.cwd
    }
    function x(e) {
      return null == e.cwd || "" === e.cwd
    }
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            n,
            b,
            v,
            j,
            A,
            w,
            C,
            S,
            I,
            M,
            k,
            N,
            T,
            _,
            E,
            O,
            P,
            L,
            R = (0, s.c)(78),
            {
              cacheDiscovery: D,
              detectedItems: F,
              enabled: U,
              hostId: q,
              providers: z,
              refetchOnWindowFocus: H,
              retry: V,
              sessionLimits: G,
              source: B,
              workspaceRoots: K,
            } = e,
            $ = void 0 !== D && D,
            W = void 0 === q ? d.fI : q,
            Z = void 0 === B ? "settings" : B,
            X = (0, l.gh)(a.u),
            Y = (0, l.Ul)(g.I),
            J = (0, r.jE)()
          R[0] !== W ? ((t = { hostId: W }), (R[0] = W), (R[1] = t)) : (t = R[1])
          let Q = U && !Y
          R[2] !== Q ? ((n = { enabled: Q }), (R[2] = Q), (R[3] = n)) : (n = R[3])
          let { data: ee } = (0, l._U)(c.FM, t, n),
            et = ee?.roots
          if (R[4] !== $ || R[5] !== W || R[6] !== z || R[7] !== G || R[8] !== K) {
            let e = (0, p.EA)({ hostId: W, providers: z, sessionLimits: G, workspaceRoots: K })
            ;((v = i.I),
              (b = $ ? [...e, "cached"] : e),
              (R[4] = $),
              (R[5] = W),
              (R[6] = z),
              (R[7] = G),
              (R[8] = K),
              (R[9] = b),
              (R[10] = v))
          } else ((b = R[9]), (v = R[10]))
          let en = !!$ || "always",
            es = !Y && U && null == F,
            er = !0 === H ? "always" : H
          ;(R[11] !== V ? ((j = null == V ? {} : { retry: V }), (R[11] = V), (R[12] = j)) : (j = R[12]),
            R[13] !== $ || R[14] !== W || R[15] !== Y || R[16] !== z || R[17] !== G || R[18] !== K
              ? ((A = async () =>
                  Y
                    ? { items: [], unsupportedProjects: [] }
                    : (0, p.Sq)({
                        cache: $,
                        hostId: W,
                        includeHome: !0,
                        providers: z,
                        sessionLimits: G,
                        workspaceRoots: K,
                      })),
                (R[13] = $),
                (R[14] = W),
                (R[15] = Y),
                (R[16] = z),
                (R[17] = G),
                (R[18] = K),
                (R[19] = A))
              : (A = R[19]),
            R[20] !== es || R[21] !== er || R[22] !== j || R[23] !== A || R[24] !== b || R[25] !== en
              ? ((w = {
                  queryKey: b,
                  staleTime: 6e4,
                  refetchOnMount: en,
                  enabled: es,
                  refetchOnWindowFocus: er,
                  ...j,
                  queryFn: A,
                }),
                (R[20] = es),
                (R[21] = er),
                (R[22] = j),
                (R[23] = A),
                (R[24] = b),
                (R[25] = en),
                (R[26] = w))
              : (w = R[26]))
          let { data: ei, isError: eo, isFetching: el, refetch: ea } = v(w),
            ec = Y ? h : (F ?? ei?.items ?? h)
          R[27] !== ec || R[28] !== z
            ? ((C = ec.every((e) => z.includes(e.providerId)) ? ec : ec.filter((e) => z.includes(e.providerId))),
              (R[27] = ec),
              (R[28] = z),
              (R[29] = C))
            : (C = R[29])
          let ed = C,
            eu = Y || null != F ? f : (ei?.unsupportedProjects ?? f)
          R[30] !== ed ? ((S = ed.filter(x)), (R[30] = ed), (R[31] = S)) : (S = R[31])
          let ep = S
          R[32] !== ed ? ((I = ed.filter(y)), (R[32] = ed), (R[33] = I)) : (I = R[33])
          let em = I
          R[34] !== ep || R[35] !== em
            ? ((M = (0, u.pH)({ homeItems: ep, projectItems: em })), (R[34] = ep), (R[35] = em), (R[36] = M))
            : (M = R[36])
          let eg = M
          R[37] !== et || R[38] !== eg
            ? ((k = null == eg ? [] : (0, u.w_)(eg, et)), (R[37] = et), (R[38] = eg), (R[39] = k))
            : (k = R[39])
          let eh = k
          R[40] !== eg
            ? ((N = (e) => (null == eg ? [] : (0, u.Li)({ model: eg, selection: e }))), (R[40] = eg), (R[41] = N))
            : (N = R[41])
          let ef = N
          R[42] !== W || R[43] !== z || R[44] !== X || R[45] !== G || R[46] !== Z
            ? ((T = {
                mutationFn: (e) => {
                  let { importAttemptId: t, items: n } = e
                  return (0, p.gu)(X, {
                    hostId: W,
                    importAttemptId: t,
                    items: n.filter((e) => z.includes(e.providerId)),
                    sessionLimits: G,
                    source: Z,
                  })
                },
              }),
              (R[42] = W),
              (R[43] = z),
              (R[44] = X),
              (R[45] = G),
              (R[46] = Z),
              (R[47] = T))
            : (T = R[47])
          let ey = (0, o.n)(T),
            ex = null != eg || eu.length > 0,
            eb = null != eg
          ;(R[48] !== ef || R[49] !== ey
            ? ((_ = (e, t) => ey.mutateAsync({ importAttemptId: t, items: ef(e) })),
              (R[48] = ef),
              (R[49] = ey),
              (R[50] = _))
            : (_ = R[50]),
            R[51] !== ey
              ? ((E = (e, t) => ey.mutateAsync({ importAttemptId: t, items: e })), (R[51] = ey), (R[52] = E))
              : (E = R[52]))
          let ev = !Y && U && null == F && el && null == eg,
            ej = !Y && U && null == F && el,
            eA = !Y && null == F && eo && null == eg,
            ew = !Y && null == F && eo
          return (
            R[53] !== Y || R[54] !== ea
              ? ((O = async () => {
                  if (Y) return h
                  let e = await ea()
                  return e.data?.items ?? h
                }),
                (R[53] = Y),
                (R[54] = ea),
                (R[55] = O))
              : (O = R[55]),
            R[56] !== Y || R[57] !== F || R[58] !== J || R[59] !== ea
              ? ((P = async () => {
                  if (Y) return h
                  if (null != F) return F
                  ;(0, m.c)(J)
                  let e = await ea()
                  return e.data?.items ?? h
                }),
                (R[56] = Y),
                (R[57] = F),
                (R[58] = J),
                (R[59] = ea),
                (R[60] = P))
              : (P = R[60]),
            R[61] !== eh ||
            R[62] !== ed ||
            R[63] !== et ||
            R[64] !== ef ||
            R[65] !== ey.isPending ||
            R[66] !== ex ||
            R[67] !== eb ||
            R[68] !== _ ||
            R[69] !== E ||
            R[70] !== ev ||
            R[71] !== ej ||
            R[72] !== eA ||
            R[73] !== ew ||
            R[74] !== O ||
            R[75] !== P ||
            R[76] !== eu
              ? ((L = {
                  choices: eh,
                  detectedItems: ed,
                  existingProjectRoots: et,
                  unsupportedProjects: eu,
                  getSelectedItems: ef,
                  hasDetectedItems: ex,
                  hasImportableItems: eb,
                  importSelected: _,
                  importItems: E,
                  isDetecting: ev,
                  isDetectionFetching: ej,
                  isDetectionError: eA,
                  hasDetectionRefreshError: ew,
                  isImporting: ey.isPending,
                  refetchDetectedItems: O,
                  refreshDetectedItemsAfterImport: P,
                }),
                (R[61] = eh),
                (R[62] = ed),
                (R[63] = et),
                (R[64] = ef),
                (R[65] = ey.isPending),
                (R[66] = ex),
                (R[67] = eb),
                (R[68] = _),
                (R[69] = E),
                (R[70] = ev),
                (R[71] = ej),
                (R[72] = eA),
                (R[73] = ew),
                (R[74] = O),
                (R[75] = P),
                (R[76] = eu),
                (R[77] = L))
              : (L = R[77]),
            L
          )
        },
      },
    )
  },
  Vmbu(e, t, n) {
    var s = n("QosV"),
      r = n("iRMi"),
      i = n("mfKi"),
      o = n("irkb"),
      l = n("zTeN"),
      a = n("zd8w"),
      c = n("HZfM"),
      d = n("Dgwo"),
      u = n("tl5a"),
      p = n("oxjR"),
      m = n("HUHI"),
      g = n("yxN2"),
      h = n("Ot7V"),
      f = n("Yewb"),
      y = n("yGJW"),
      x = n("B81s"),
      b = n("OWtl"),
      v = n("AN2V"),
      j = n("fnPc"),
      A = n("WFY2"),
      w = n("ASgY")
    n.d(
      t,
      {},
      {
        L: function (e) {
          let t,
            n,
            C,
            S,
            I,
            M,
            k,
            N,
            T,
            _,
            E,
            O,
            P,
            L,
            R,
            D,
            F,
            U,
            q = (0, s.c)(71),
            {
              hardRefetchAppsList: z,
              hasImportedMcpServers: H,
              hostId: V,
              onBeforeNavigate: G,
              retryImportHistories: B,
              retryImportedApps: K,
              retryMcpServerStatuses: $,
              surface: W,
            } = e,
            Z = void 0 === W ? r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP : W,
            X = (0, l.gh)(b.u),
            Y = (0, c.Zp)(),
            J = (0, o.jE)(),
            { installPlugin: Q, status: ee } = (0, f.XY)(),
            et = (0, l.Ul)(u.YT)
          q[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (q[0] = t)) : (t = q[0])
          let { data: en } = (0, l._U)(m.lb, V, t)
          q[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = new Map()), (q[1] = n)) : (n = q[1])
          let es = (0, a.useRef)(n),
            er = (0, a.useRef)(!0)
          q[2] === Symbol.for("react.memo_cache_sentinel") ? ((C = []), (q[2] = C)) : (C = q[2])
          let [ei, eo] = (0, a.useState)(C)
          ;(q[3] !== X || q[4] !== Z
            ? ((S = (e) => {
                ;(eo((t) =>
                  t.some((t) => {
                    let { app: n } = t
                    return n.id === e.id
                  })
                    ? t
                    : [...t, { app: e, installed: !1, pluginId: null }],
                ),
                  (0, y.yy)(X, i.CodexPluginAction, {
                    action: i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
                    connectorId: e.id,
                    result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                    source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
                    surface: Z,
                  }))
              }),
              (q[3] = X),
              (q[4] = Z),
              (q[5] = S))
            : (S = q[5]),
            q[6] !== V || q[7] !== S
              ? ((I = { hostId: V, onConnectStarted: S }), (q[6] = V), (q[7] = S), (q[8] = I))
              : (I = q[8]))
          let {
            clearConnectingApp: el,
            connectingApp: ea,
            handleAppConnectOAuthStarted: ec,
            handleConnectApp: ed,
            isAppConnectPending: eu,
          } = (0, g.t)(I)
          q[9] !== H || q[10] !== B || q[11] !== K || q[12] !== $
            ? ((M = (e) => {
                switch (e) {
                  case "apps":
                    return void K()
                  case "mcps":
                    ;(B(), H && $())
                    return
                  case "hooks":
                    return void B()
                }
              }),
              (q[9] = H),
              (q[10] = B),
              (q[11] = K),
              (q[12] = $),
              (q[13] = M))
            : (M = q[13])
          let ep = M
          q[14] !== V || q[15] !== Y || q[16] !== G || q[17] !== X
            ? ((k = (e) => {
                ;((0, j.a)(X, V), G?.(), Y(e))
              }),
              (q[14] = V),
              (q[15] = Y),
              (q[16] = G),
              (q[17] = X),
              (q[18] = k))
            : (k = q[18])
          let em = k
          q[19] !== V || q[20] !== X
            ? ((N = async (e) => {
                let t = es.current.get(e)
                if (void 0 !== t) {
                  null != t &&
                    (0, h.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                  return
                }
                es.current.set(e, null)
                try {
                  let { authorizationUrl: t } = await (0, d.V)(X, V).sendRequest("mcpServer/oauth/login", { name: e })
                  null != t &&
                    (es.current.set(e, t),
                    (0, h.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" }))
                } catch (t) {
                  ;(es.current.delete(e),
                    A.v.error("Failed to start login for imported MCP server", {
                      safe: { hostId: V },
                      sensitive: { error: t, serverName: e },
                    }))
                }
              }),
              (q[19] = V),
              (q[20] = X),
              (q[21] = N))
            : (N = q[21])
          let eg = N
          q[22] !== V || q[23] !== et || q[24] !== J
            ? ((T = () => {
                if (null == et || !es.current.has(et.name)) return
                let e = es.current.get(et.name)
                ;((et.success || null == e) && es.current.delete(et.name),
                  et.success && J.invalidateQueries({ queryKey: [...x.ey, V] }))
              }),
              (q[22] = V),
              (q[23] = et),
              (q[24] = J),
              (q[25] = T))
            : (T = q[25])
          let eh = (0, a.useEffectEvent)(T)
          if (
            (q[26] !== eh || q[27] !== V || q[28] !== et?.hostId
              ? ((_ = () => {
                  if (er.current) {
                    er.current = !1
                    return
                  }
                  et?.hostId === V && eh()
                }),
                (q[26] = eh),
                (q[27] = V),
                (q[28] = et?.hostId),
                (q[29] = _))
              : (_ = q[29]),
            q[30] !== V || q[31] !== et ? ((E = [V, et]), (q[30] = V), (q[31] = et), (q[32] = E)) : (E = q[32]),
            (0, a.useEffect)(_, E),
            q[33] !== ei || q[34] !== en)
          ) {
            let e
            ;(q[36] !== en
              ? ((e = (e) => {
                  let { app: t, installed: n, pluginId: s } = e
                  if (null != s && !n) return []
                  let r = en?.find((e) => {
                    let { id: n, isAccessible: s } = e
                    return n === t.id && s
                  })
                  return null == r ? [] : [r]
                }),
                (q[36] = en),
                (q[37] = e))
              : (e = q[37]),
              (O = ei.flatMap(e)),
              (q[33] = ei),
              (q[34] = en),
              (q[35] = O))
          } else O = q[35]
          return (
            q[38] !== z || q[39] !== V || q[40] !== J
              ? ((P = async () => {
                  try {
                    await (0, p.U)({ hostId: V, queryClient: J, refreshAppsList: z })
                  } catch {}
                }),
                (q[38] = z),
                (q[39] = V),
                (q[40] = J),
                (q[41] = P))
              : (P = q[41]),
            q[42] !== V || q[43] !== Q || q[44] !== ee || q[45] !== Z
              ? ((L = (e, t) => {
                  ;(ee?.hostId === V && ee.pluginId === e.plugin.id) ||
                    (eo((n) =>
                      n.some((e) => {
                        let { app: n } = e
                        return n.id === t.id
                      })
                        ? n
                        : [...n, { app: t, installed: !1, pluginId: e.plugin.id }],
                    ),
                    Q(e, {
                      hostId: V,
                      marketplaceAnalytics: {
                        source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
                        surface: Z,
                      },
                      onSuccess: () => {
                        eo((n) =>
                          n.map((n) => (n.app.id === t.id && n.pluginId === e.plugin.id ? { ...n, installed: !0 } : n)),
                        )
                      },
                      source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
                    }) ||
                      eo((e) =>
                        e.filter((e) => {
                          let { app: n } = e
                          return n.id !== t.id
                        }),
                      ))
                }),
                (q[42] = V),
                (q[43] = Q),
                (q[44] = ee),
                (q[45] = Z),
                (q[46] = L))
              : (L = q[46]),
            q[47] !== V || q[48] !== em
              ? ((R = () => {
                  em((0, v.NZ)({ hostId: V }))
                }),
                (q[47] = V),
                (q[48] = em),
                (q[49] = R))
              : (R = q[49]),
            q[50] !== em
              ? ((D = () => {
                  em(w.$)
                }),
                (q[50] = em),
                (q[51] = D))
              : (D = q[51]),
            q[52] !== ei || q[53] !== V || q[54] !== eu || q[55] !== ee?.hostId || q[56] !== ee?.pluginId
              ? ((F = (e) =>
                  eu(e) ||
                  ei.some((t) => {
                    let { app: n, pluginId: s } = t
                    return n.id === e && null != s && ee?.hostId === V && ee?.pluginId === s
                  })),
                (q[52] = ei),
                (q[53] = V),
                (q[54] = eu),
                (q[55] = ee?.hostId),
                (q[56] = ee?.pluginId),
                (q[57] = F))
              : (F = q[57]),
            q[58] !== el ||
            q[59] !== ea ||
            q[60] !== ec ||
            q[61] !== eg ||
            q[62] !== ed ||
            q[63] !== ep ||
            q[64] !== O ||
            q[65] !== P ||
            q[66] !== L ||
            q[67] !== R ||
            q[68] !== D ||
            q[69] !== F
              ? ((U = {
                  clearConnectingApp: el,
                  connectedApps: O,
                  connectingApp: ea,
                  handleAppConnectOAuthStarted: ec,
                  handleAppConnected: P,
                  handleAuthenticateMcp: eg,
                  handleConnectApp: ed,
                  handleInstallPlugin: L,
                  handleOpenHooksSettings: R,
                  handleOpenImportSettings: D,
                  handleRetry: ep,
                  isAppConnectPending: F,
                }),
                (q[58] = el),
                (q[59] = ea),
                (q[60] = ec),
                (q[61] = eg),
                (q[62] = ed),
                (q[63] = ep),
                (q[64] = O),
                (q[65] = P),
                (q[66] = L),
                (q[67] = R),
                (q[68] = D),
                (q[69] = F),
                (q[70] = U))
              : (U = q[70]),
            U
          )
        },
      },
    )
  },
  jxU8(e, t, n) {
    n.d(t, { P: () => h, Y: () => f })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("zd8w"),
      l = n("bJfu"),
      a = n("qbQ6"),
      c = n("GK7D"),
      d = n("PkPj"),
      u = n("DiyT"),
      p = n("ibLK"),
      m = n("V8uZ"),
      g = n("oFmV")
    function h(e) {
      let t,
        n,
        h,
        f,
        y,
        x,
        b,
        v,
        j,
        A,
        w,
        C,
        S,
        I,
        M,
        k,
        N,
        T,
        _,
        E,
        O,
        P,
        L,
        R,
        D,
        F,
        U,
        q,
        z,
        H,
        V,
        G,
        B,
        K,
        $,
        W,
        Z,
        X,
        Y,
        J,
        Q,
        ee,
        et,
        en,
        es = (0, r.c)(120)
      es[0] !== e
        ? (({
            title: T,
            asset: n,
            backSlot: h,
            subtitle: S,
            children: f,
            fullWidth: M,
            contentClassName: x,
            subtitleClassName: I,
            action: t,
            toolbarActions: _,
            stickyControls: C,
            footer: v,
            embedded: k,
            density: b,
            scrollResetKey: w,
            containTouchOverscroll: N,
            ref: j,
            className: y,
            ...A
          } = e),
          (es[0] = e),
          (es[1] = t),
          (es[2] = n),
          (es[3] = h),
          (es[4] = f),
          (es[5] = y),
          (es[6] = x),
          (es[7] = b),
          (es[8] = v),
          (es[9] = j),
          (es[10] = A),
          (es[11] = w),
          (es[12] = C),
          (es[13] = S),
          (es[14] = I),
          (es[15] = M),
          (es[16] = k),
          (es[17] = N),
          (es[18] = T),
          (es[19] = _))
        : ((t = es[1]),
          (n = es[2]),
          (h = es[3]),
          (f = es[4]),
          (y = es[5]),
          (x = es[6]),
          (b = es[7]),
          (v = es[8]),
          (j = es[9]),
          (A = es[10]),
          (w = es[11]),
          (C = es[12]),
          (S = es[13]),
          (I = es[14]),
          (M = es[15]),
          (k = es[16]),
          (N = es[17]),
          (T = es[18]),
          (_ = es[19]))
      let er = void 0 !== M && M,
        ei = void 0 !== k && k,
        eo = void 0 !== N && N,
        el = b ?? "default",
        ea = (0, o.useRef)(null),
        ec = (0, o.useRef)(null),
        ed = eo && !ei && !1
      ;((et = (0, r.c)(4)),
        (en = (0, p.U)(ed ? "(pointer: coarse)" : null)),
        et[0] !== en || et[1] !== ec
          ? ((Q = () => {
              let e = ec.current
              if (!en || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let n = e.closest("[data-app-shell-frame]") ?? e,
                s = e.closest("[data-app-shell-main-surface]"),
                r = null,
                i = 0,
                o = () => {
                  r = null
                },
                l = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n) return void o()
                  let l = t.composedPath().includes(e),
                    a = t.target,
                    c =
                      a instanceof Element &&
                      ((a.contains(e) && s?.contains(a)) || null != a.closest("[data-app-shell-main-titlebar]"))
                  l || c ? ((r = { x: n.clientX, y: n.clientY, inPanel: l }), (i = n.clientY)) : o()
                },
                a = (t) => {
                  let s = t.touches[0]
                  if (1 !== t.touches.length || null == s || null == r) return void o()
                  let l = s.clientY > i
                  if (
                    ((i = s.clientY),
                    !(!t.cancelable || !l || s.clientY - r.y <= Math.abs(s.clientX - r.x)) &&
                      (!r.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let s of t.composedPath()) {
                      if (s === e || s === n) break
                      if (
                        s instanceof HTMLElement &&
                        s.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(s).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                c = { capture: !0, passive: !0 }
              return (
                n.addEventListener("touchstart", l, c),
                n.addEventListener("touchmove", a, { capture: !0, passive: !1 }),
                n.addEventListener("touchend", o, c),
                n.addEventListener("touchcancel", o, c),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    n.removeEventListener("touchstart", l, !0),
                    n.removeEventListener("touchmove", a, !0),
                    n.removeEventListener("touchend", o, !0),
                    n.removeEventListener("touchcancel", o, !0))
                }
              )
            }),
            (ee = [en, ec]),
            (et[0] = en),
            (et[1] = ec),
            (et[2] = Q),
            (et[3] = ee))
          : ((Q = et[2]), (ee = et[3])),
        (0, o.useEffect)(Q, ee))
      let [eu, ep] = (0, o.useState)(!1),
        em = (0, o.useContext)(g.S),
        eg = !!em?.slateLayout && !ei
      ;(0, p.U)(a.mk)
      let eh = eg && !1,
        ef = em?.targetId ?? null,
        ey = em?.targetText ?? null,
        ex = em?.navigationKey ?? null
      ;(es[20] !== w
        ? ((E = () => {
            null != w && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (O = [w]),
          (es[20] = w),
          (es[21] = E),
          (es[22] = O))
        : ((E = es[21]), (O = es[22])),
        (0, o.useLayoutEffect)(E, O),
        es[23] !== ef || es[24] !== ey
          ? ((P = () => {
              let e, t
              if (null == ef && null == ey) return
              let n = ea.current
              if (null == n) return
              let s = () => {
                  if (null == ey) return null == ef ? null : document.getElementById(ef)
                  let e = ey.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    s = null
                  for (let r of n.querySelectorAll("*")) {
                    let n = (r.getAttribute("placeholder") ?? r.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == n ||
                      !t.every((e) => n.includes(e)) ||
                      null != r.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let i = n.includes(e)
                    ;(null == s || (i && !s.isContiguous) || (i === s.isContiguous && n.length <= s.text.length)) &&
                      (s = { element: r, isContiguous: i, text: n })
                  }
                  return s?.element ?? null
                },
                r = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ey)) return
                  let s = "true" === document.documentElement.dataset.reducedMotion,
                    r = t.closest("button"),
                    i = r?.parentElement ?? t
                  if (null == r) {
                    let e = t.closest("section")
                    for (let s = t.parentElement; null != s && s !== e && s !== n; s = s.parentElement)
                      if (
                        Array.from(s.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        i = s
                        break
                      }
                  }
                  e = i.animate?.(
                    s
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${m.Wu.join(", ")})` },
                  )
                },
                i =
                  null == ey
                    ? new ResizeObserver(() => {
                        let e = s()
                        null != e && r(e)
                      })
                    : null,
                o = () => {
                  for (let e of (t?.disconnect(), i?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    n.ownerDocument.removeEventListener(e, o)
                }
              if (null != i)
                for (let e of (i.observe(n), ["wheel", "pointerdown", "keydown"]))
                  n.ownerDocument.addEventListener(e, o, { passive: !0 })
              let l = s()
              return (
                null != l
                  ? r(l)
                  : (t = new MutationObserver(() => {
                      let e = s()
                      null != e && (r(e), t?.disconnect())
                    })).observe(null == ey ? document.body : n, { childList: !0, subtree: !0 }),
                () => {
                  ;(o(), e?.cancel())
                }
              )
            }),
            (es[23] = ef),
            (es[24] = ey),
            (es[25] = P))
          : (P = es[25]),
        es[26] !== ex || es[27] !== ef || es[28] !== ey
          ? ((L = [ex, ef, ey]), (es[26] = ex), (es[27] = ef), (es[28] = ey), (es[29] = L))
          : (L = es[29]),
        (0, o.useLayoutEffect)(P, L),
        es[30] !== _
          ? ((R =
              null == _
                ? null
                : (0, s.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: _,
                  })),
            (es[30] = _),
            (es[31] = R))
          : (R = es[31]),
        es[32] !== h || es[33] !== R
          ? ((D = (0, s.jsxs)(s.Fragment, { children: [h, R] })), (es[32] = h), (es[33] = R), (es[34] = D))
          : (D = es[34]))
      let eb = D,
        ev = ei ? "default" : "settings"
      "compact" === el && (ev = "settingsCompact")
      let ej = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        eA =
          "default" === b &&
          (ei && !er ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        ew = er ? null : ei ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(es[35] !== x || es[36] !== C || es[37] !== ej || es[38] !== eA || es[39] !== ew || es[40] !== eg
        ? ((F = (0, i.A)(
            "group/settings mx-auto flex w-full flex-col",
            ej,
            eA,
            ew,
            eg && ["px-panel pb-panel", null == C && "pt-panel"],
            x,
          )),
          (es[35] = x),
          (es[36] = C),
          (es[37] = ej),
          (es[38] = eA),
          (es[39] = ew),
          (es[40] = eg),
          (es[41] = F))
        : (F = es[41]),
        es[42] !== t ||
        es[43] !== n ||
        es[44] !== el ||
        es[45] !== ei ||
        es[46] !== ev ||
        es[47] !== S ||
        es[48] !== I ||
        es[49] !== T ||
        es[50] !== eg
          ? ((U =
              null == T || eg
                ? null
                : (0, s.jsx)("div", {
                    className: (0, i.A)("compact" === el && "pb-5.5", "default" === el && (ei ? "pb-panel" : "pb-8")),
                    children: (0, s.jsx)(c.z, {
                      actions: t,
                      asset: n,
                      subtitle: S,
                      subtitleClassName: (0, i.A)("text-balance", I),
                      title: T,
                      variant: ev,
                    }),
                  })),
            (es[42] = t),
            (es[43] = n),
            (es[44] = el),
            (es[45] = ei),
            (es[46] = ev),
            (es[47] = S),
            (es[48] = I),
            (es[49] = T),
            (es[50] = eg),
            (es[51] = U))
          : (U = es[51]),
        es[52] !== C
          ? ((q = null == C ? null : (0, s.jsx)(d.J1, { className: "top-0 pt-panel pb-2", children: C })),
            (es[52] = C),
            (es[53] = q))
          : (q = es[53]))
      let eC =
          ei && !er
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eS = null != C && "pt-5"
      ;(es[54] !== eC || es[55] !== eS
        ? ((z = (0, i.A)("flex flex-col", eC, eS)), (es[54] = eC), (es[55] = eS), (es[56] = z))
        : (z = es[56]),
        es[57] !== f || es[58] !== z
          ? ((H = (0, s.jsx)("div", { className: z, children: f })), (es[57] = f), (es[58] = z), (es[59] = H))
          : (H = es[59]),
        es[60] !== el || es[61] !== F || es[62] !== U || es[63] !== q || es[64] !== H
          ? ((V = (0, s.jsxs)("div", { ref: ea, className: F, "data-density": el, children: [U, q, H] })),
            (es[60] = el),
            (es[61] = F),
            (es[62] = U),
            (es[63] = q),
            (es[64] = H),
            (es[65] = V))
          : (V = es[65]))
      let eI = V
      if (ei) {
        let e, t, n
        return (
          es[66] !== y ? ((e = (0, i.A)("flex min-h-0 flex-col", y)), (es[66] = y), (es[67] = e)) : (e = es[67]),
          es[68] !== h || es[69] !== eb || es[70] !== _
            ? ((t =
                null != h || null != _
                  ? (0, s.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (es[68] = h),
              (es[69] = eb),
              (es[70] = _),
              (es[71] = t))
            : (t = es[71]),
          es[72] !== eI || es[73] !== j || es[74] !== A || es[75] !== e || es[76] !== t
            ? ((n = (0, s.jsxs)("div", { ref: j, className: e, ...A, children: [t, eI] })),
              (es[72] = eI),
              (es[73] = j),
              (es[74] = A),
              (es[75] = e),
              (es[76] = t),
              (es[77] = n))
            : (n = es[77]),
          n
        )
      }
      ;(es[78] !== y
        ? ((G = (0, i.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            y,
          )),
          (es[78] = y),
          (es[79] = G))
        : (G = es[79]),
        es[80] !== T || es[81] !== eh
          ? ((B = eh
              ? (0, s.jsx)(l.G.Header, {
                  divider: !1,
                  children: (0, s.jsx)(l.G.HeaderToolbar, {
                    children: (0, s.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: T,
                    }),
                  }),
                })
              : null),
            (es[80] = T),
            (es[81] = eh),
            (es[82] = B))
          : (B = es[82]),
        es[83] !== h || es[84] !== eb || es[85] !== _ || es[86] !== eg
          ? ((K =
              eg && null == h && null == _
                ? null
                : (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (es[83] = h),
            (es[84] = eb),
            (es[85] = _),
            (es[86] = eg),
            (es[87] = K))
          : (K = es[87]))
      let eM = ed || void 0,
        ek = eh ? eu : void 0,
        eN = eh || void 0
      es[88] !== eh
        ? (($ = eh ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (es[88] = eh), (es[89] = $))
        : ($ = es[89])
      let eT = !eg && "p-panel"
      return (
        es[90] !== eT
          ? ((W = (0, i.A)("flex-1 scrollbar-stable overflow-y-auto", eT)), (es[90] = eT), (es[91] = W))
          : (W = es[91]),
        es[92] !== t ||
        es[93] !== n ||
        es[94] !== el ||
        es[95] !== er ||
        es[96] !== S ||
        es[97] !== I ||
        es[98] !== T ||
        es[99] !== eh ||
        es[100] !== eg
          ? ((Z =
              null == T || !eg || eh
                ? null
                : (0, s.jsx)(u.g, {
                    className: er ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, s.jsxs)(s.Fragment, {
                      children: [
                        null == n ? null : (0, s.jsx)("div", { className: "flex", children: n }),
                        (0, s.jsx)("h1", {
                          className: (0, i.A)("text-default", "compact" === el ? "heading-lg" : "heading-xl"),
                          children: T,
                        }),
                        null == S
                          ? null
                          : (0, s.jsx)("div", {
                              className: (0, i.A)("text-base leading-6 text-balance text-secondary", I),
                              children: S,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, s.jsx)(u.T, { search: null, actions: t }),
                  })),
            (es[92] = t),
            (es[93] = n),
            (es[94] = el),
            (es[95] = er),
            (es[96] = S),
            (es[97] = I),
            (es[98] = T),
            (es[99] = eh),
            (es[100] = eg),
            (es[101] = Z))
          : (Z = es[101]),
        es[102] !== eI ||
        es[103] !== eM ||
        es[104] !== ek ||
        es[105] !== eN ||
        es[106] !== $ ||
        es[107] !== W ||
        es[108] !== Z
          ? ((X = (0, s.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": eM,
              "data-app-shell-page-scrolled": ek,
              "data-settings-mobile-header": eN,
              onScroll: $,
              className: W,
              children: [Z, eI],
            })),
            (es[102] = eI),
            (es[103] = eM),
            (es[104] = ek),
            (es[105] = eN),
            (es[106] = $),
            (es[107] = W),
            (es[108] = Z),
            (es[109] = X))
          : (X = es[109]),
        es[110] !== v
          ? ((Y =
              null != v &&
              (0, s.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: v,
              })),
            (es[110] = v),
            (es[111] = Y))
          : (Y = es[111]),
        es[112] !== j ||
        es[113] !== A ||
        es[114] !== G ||
        es[115] !== B ||
        es[116] !== K ||
        es[117] !== X ||
        es[118] !== Y
          ? ((J = (0, s.jsxs)("div", { ref: j, className: G, ...A, children: [B, K, X, Y] })),
            (es[112] = j),
            (es[113] = A),
            (es[114] = G),
            (es[115] = B),
            (es[116] = K),
            (es[117] = X),
            (es[118] = Y),
            (es[119] = J))
          : (J = es[119]),
        J
      )
    }
    function f(e) {
      let t,
        n,
        i = (0, r.c)(8),
        { children: o, navigationKey: l, slateLayout: a, targetId: c, targetText: d } = e,
        u = void 0 !== a && a,
        p = void 0 === d ? null : d
      return (
        i[0] !== l || i[1] !== u || i[2] !== c || i[3] !== p
          ? ((t =
              null != c || null != p || u ? { navigationKey: l, slateLayout: u, targetId: c, targetText: p } : null),
            (i[0] = l),
            (i[1] = u),
            (i[2] = c),
            (i[3] = p),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== o || i[6] !== t
          ? ((n = (0, s.jsx)(g.S.Provider, { value: t, children: o })), (i[5] = o), (i[6] = t), (i[7] = n))
          : (n = i[7]),
        n
      )
    }
  },
  oFmV(e, t, n) {
    let s = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { S: s })
  },
  vNmV(e, t, n) {
    let s = ["plugin", "user", "admin", "project", "sessionFlags", "unknown"],
      r = "__unknown__"
    function i(e, t, n) {
      let s = new Set(t),
        r = [
          ...s,
          ...Array.from(new Set(e))
            .filter((e) => !s.has(e))
            .sort((e, t) => e.localeCompare(t)),
        ]
      return (null == n || r.includes(n) || r.push(n), r)
    }
    function o(e) {
      return "untrusted" === e.trustStatus || "modified" === e.trustStatus
    }
    function l(e) {
      switch (e) {
        case "plugin":
          return "plugin"
        case "user":
          return "user"
        case "system":
        case "mdm":
        case "cloudRequirements":
        case "cloudManagedConfig":
        case "legacyManagedConfigFile":
        case "legacyManagedConfigMdm":
          return "admin"
        case "project":
          return "project"
        case "sessionFlags":
          return "sessionFlags"
        case "unknown":
          return "unknown"
      }
    }
    function a(e) {
      let t = e.hooks.filter((e) => "project" === l(e.source))
      return 0 === t.length ? null : { ...e, hooks: t }
    }
    function c(e, t) {
      let n = e.flatMap((e) => e.hooks.filter((e) => l(e.source) === t)),
        s = "unknown" === t ? e.filter(p) : []
      return 0 === n.length && 0 === s.length ? null : d(e, n, s)
    }
    function d(e, t, n = []) {
      let s = u(t),
        r = new Set(s.map((e) => e.key)),
        i = [...e.filter((e) => e.hooks.some((e) => r.has(e.key))), ...n]
      return {
        cwd: "",
        hooks: s,
        warnings: Array.from(new Set(i.flatMap((e) => e.warnings))),
        errors: (function (e) {
          let t = new Map()
          for (let n of e) t.set(`${n.path}:${n.message}`, n)
          return Array.from(t.values())
        })(i.flatMap((e) => e.errors)),
      }
    }
    function u(e) {
      let t = new Map()
      for (let n of e) t.has(n.key) || t.set(n.key, n)
      return Array.from(t.values())
    }
    function p(e) {
      return 0 === e.hooks.length && (e.warnings.length > 0 || e.errors.length > 0)
    }
    function m(e) {
      return "managed" === e.trustStatus || (e.enabled && "trusted" === e.trustStatus)
    }
    n.d(
      t,
      {},
      {
        Ab: function (e, t) {
          if (null == t) return []
          let n = new Set(t.hooks.map((e) => e.key))
          return u(
            e?.flatMap((e) =>
              e.hooks.filter((e) => "plugin" === e.source && e.pluginId === t.summary.id && n.has(e.key) && o(e)),
            ) ?? [],
          )
        },
        ED: function (e, t) {
          return e
            .filter((e) => e.eventName === t)
            .sort((e, t) => (e.displayOrder < t.displayOrder ? -1 : +(e.displayOrder > t.displayOrder)))
        },
        LX: function (e) {
          if (0 === e.length) return null
          let t = new Set(e.map(l))
          return 1 !== t.size ? null : (t.values().next().value ?? null)
        },
        ON: function (e) {
          return { issueCount: e.warnings.length + e.errors.length, needsReview: e.hooks.filter(o).length }
        },
        Pf: r,
        RS: function (e, t, n) {
          if (null == e || !e.summary.installed || 0 === e.hooks.length) return
          let s = i(t, n, null)
          return 0 === s.length ? void 0 : s
        },
        Y8: o,
        nh: function (e) {
          let t = []
          for (let n of s) {
            let s = (function (e, t) {
              switch (t) {
                case "project": {
                  let n = e.map(a).filter((e) => null != e)
                  if (0 === n.length) return null
                  return { id: t, projectEntries: n }
                }
                case "plugin": {
                  let n = c(e, t),
                    s = (function (e) {
                      let t = new Map()
                      for (let n of e)
                        for (let e of n.hooks) {
                          if ("plugin" !== l(e.source)) continue
                          let n = t.get(e.pluginId)
                          null == n ? t.set(e.pluginId, [e]) : n.push(e)
                        }
                      return Array.from(t.entries())
                        .sort(([e], [t]) => (null == e ? 1 : null == t ? -1 : e.localeCompare(t)))
                        .map(([t, n]) => ({ pluginId: t, entry: d(e, n) }))
                    })(e)
                  if (null == n || 0 === s.length) return null
                  return { id: t, entry: n, pluginEntries: s }
                }
                case "user":
                case "admin":
                case "sessionFlags":
                case "unknown": {
                  let n = c(e, t)
                  if (null == n) return null
                  return { id: t, entry: n }
                }
              }
            })(e, n)
            null != s && t.push(s)
          }
          return t
        },
        ni: i,
        p4: function (e, t) {
          if (null == t) return null
          let n = e.find((e) => e.id === t.source)
          return null == n
            ? null
            : "project" === t.source
              ? "project" !== n.id
                ? null
                : (n.projectEntries.find((e) => e.cwd === t.projectRoot) ?? null)
              : "plugin" === t.source
                ? "plugin" !== n.id
                  ? null
                  : void 0 === t.pluginId
                    ? n.entry
                    : (n.pluginEntries.find((e) => e.pluginId === t.pluginId)?.entry ?? null)
                : n.id !== t.source
                  ? null
                  : n.entry
        },
        rb: function (e) {
          return Array.from(new Set(e.map((e) => e.eventName)), (t) => {
            let n = e.filter((e) => e.eventName === t)
            return { eventName: t, active: n.filter(m).length, installed: n.length, needsReview: n.filter(o).length }
          })
        },
        vf: l,
        zC: function ({ pluginId: e, source: t, projectRoot: n, projectRoots: s }) {
          let i = (function (e) {
            switch (e) {
              case "plugin":
              case "user":
              case "admin":
              case "project":
              case "sessionFlags":
              case "unknown":
                return e
              default:
                return null
            }
          })(t)
          return ("project" === i || (null == i && null == t)) && null != n && s?.includes(n) === !0
            ? { source: "project", projectRoot: n }
            : null == i || "project" === i
              ? null
              : "plugin" === i
                ? null == e
                  ? { source: "plugin" }
                  : e === r
                    ? { source: "plugin", pluginId: null }
                    : { source: "plugin", pluginId: e }
                : { source: i }
        },
      },
    )
  },
  AN2V(e, t, n) {
    var s = n("vNmV")
    let r = "hooks-settings"
    function i({ hostId: e, pluginId: t, projectRoot: n, source: o }) {
      let l = new URLSearchParams()
      ;(null != e && l.set("hostId", e),
        null != o && l.set("source", o),
        null != o && null != n && l.set("projectRoot", n),
        "plugin" === o && void 0 !== t && l.set("pluginId", t ?? s.Pf))
      let a = l.toString()
      return "" === a ? r : `${r}?${a}`
    }
    n.d(
      t,
      {},
      {
        NZ: function ({ hostId: e, pluginId: t, projectRoot: n, source: s }) {
          return `/settings/${i({ hostId: e, pluginId: t, projectRoot: n, source: s })}`
        },
        Rf: i,
        mW: function (e, t, n) {
          if ((e.delete("hostId"), e.delete("pluginId"), e.delete("projectRoot"), e.delete("source"), null != n)) {
            if ((e.set("hostId", t), e.set("source", n.source), "project" === n.source))
              return void e.set("projectRoot", n.projectRoot)
            "plugin" === n.source && void 0 !== n.pluginId && e.set("pluginId", n.pluginId ?? s.Pf)
          }
        },
      },
    )
  },
  zMSM(e, t, n) {
    n.d(t, { ImportSettings: () => eU })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("zTeN"),
      o = n("zd8w"),
      l = n("oyxz"),
      a = n("CTWI"),
      c = n("HUHI"),
      d = n("ygO2"),
      u = n("oeej"),
      p = n("F1TY"),
      m = n("Wj2H"),
      g = n("ltay"),
      h = n("agQ0"),
      f = n("Vmbu"),
      y = n("ueue"),
      x = n("B81s"),
      b = n("ndjw"),
      v = n("jxU8"),
      j = n("ecE5"),
      A = n("BSnr"),
      w = n("I7Ou"),
      C = n("AWNZ"),
      S = n("QyE3"),
      I = n("ZEx5"),
      M = n("kfGJ"),
      k = n("hZax"),
      N = n("iRMi"),
      T = n("on57"),
      _ = n("Wf1j"),
      E = n("Qgfj"),
      O = n("xs0e"),
      P = n("RNul"),
      L = n("Hcqt"),
      R = n("ASgY"),
      D = n("zsK1"),
      F = n("j6in"),
      U = n("RBjS"),
      q = n("rxTW"),
      z = n("FBDz"),
      H = n("p38N"),
      V = n("l3mp"),
      G = n("lXcR"),
      B = n("p1ic"),
      K = n("yGJW"),
      $ = n("OWtl")
    let W = { "claude-code": z.A, "claude-cowork": H.A, cursor: V.A }
    function Z(e) {
      let t,
        n,
        o,
        c,
        p,
        m,
        g,
        h,
        f,
        y,
        x,
        b,
        v,
        j = (0, r.c)(46),
        { isImportContextLoading: w, latestSuccessfulImportAtMs: S, workspaceRoots: z } = e,
        H = (0, i.gh)($.u),
        V = (0, _.A)(),
        Z = (0, i.Ul)(u.rz),
        J = (0, k.Zj)(F.Pc)
      j[0] !== J ? ((t = (0, F.lM)(J)), (j[0] = J), (j[1] = t)) : (t = j[1])
      let Q = t,
        ee = (0, U.bG)()
      j[2] !== Q || j[3] !== ee || j[4] !== z
        ? ((n = { enabled: !0, hostId: M.fI, providers: Q, sessionLimits: ee, workspaceRoots: z }),
          (j[2] = Q),
          (j[3] = ee),
          (j[4] = z),
          (j[5] = n))
        : (n = j[5])
      let {
        detectedItems: et,
        existingProjectRoots: en,
        isDetecting: es,
        isDetectionError: er,
        refetchDetectedItems: ei,
        unsupportedProjects: eo,
      } = (0, q.e)(n)
      if (
        j[6] !== et ||
        j[7] !== en ||
        j[8] !== V ||
        j[9] !== es ||
        j[10] !== er ||
        j[11] !== w ||
        j[12] !== S ||
        j[13] !== ei ||
        j[14] !== Z ||
        j[15] !== H ||
        j[16] !== ee ||
        j[17] !== eo
      ) {
        let e,
          t,
          n = (0, B.R)(et),
          r = Z?.hostId === M.fI,
          i =
            r && null != Z
              ? (0, B.gp)({ detectedItems: Z.items, existingProjectRoots: en, intl: V, providerIds: (0, B.R)(Z.items) })
              : null
        ;((m = es || w),
          j[25] !== ei
            ? ((e = () => {
                ei()
              }),
              (j[25] = ei),
              (j[26] = e))
            : (e = j[26]))
        let u = e
        ;((p = A.X),
          (h = R.q),
          j[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(l.A, {
                id: "settings.agent.importSettings.sectionTitle.v2",
                defaultMessage: "Import from another AI app",
                description:
                  "Settings section heading for importing configuration, projects, and chat history from a different AI coding app",
              })),
              (j[27] = t))
            : (t = j[27]))
        let y =
          0 === n.length
            ? null
            : (0, s.jsx)(l.A, {
                id: "settings.agent.importSettings.sectionDescription",
                defaultMessage: "Detected setup that can be added to {appName}",
                description: "Description for the detected external agent apps that can be imported",
                values: { appName: a.C },
              })
        ;(j[28] !== y
          ? ((f = (0, s.jsx)(A.X.Header, { title: t, subtitle: y })), (j[28] = y), (j[29] = f))
          : (f = j[29]),
          (c = A.X.Content),
          (o = I.t),
          (g = r
            ? (0, s.jsx)(C.ic, {
                label: (0, s.jsx)(l.A, {
                  id: "settings.agent.importSettings.importingLabel",
                  defaultMessage: "Import in progress",
                  description: "Settings row label shown while an external agent import is running",
                }),
                description: null == i ? null : (0, s.jsx)(E.dT, { type: "unit", value: i.customizeItems.map(Y) }),
                control: (0, s.jsx)(P.y, { className: "icon-xs" }),
              })
            : m
              ? (0, s.jsx)(C.ic, {
                  label: (0, s.jsx)(l.A, {
                    id: "settings.agent.importSettings.loadingLabel.v2",
                    defaultMessage: "Checking for imports",
                    description: "Label shown while external agent setup is loading",
                  }),
                  description: (0, s.jsx)(l.A, {
                    id: "settings.agent.importSettings.detectingDescription.v2",
                    defaultMessage: "Looking for compatible setup, projects, and recent chats",
                    description: "Description shown while checking for external agent setup",
                  }),
                  control: (0, s.jsx)(P.y, { className: "icon-xs" }),
                })
              : er
                ? (0, s.jsx)(C.ic, {
                    label: (0, s.jsx)(l.A, {
                      id: "settings.import.error.label",
                      defaultMessage: "Couldn't check for imports",
                      description: "Settings row label shown when external agent setup detection fails",
                    }),
                    description: (0, s.jsx)(l.A, {
                      id: "settings.import.error.description",
                      defaultMessage: "Try again to look for compatible setup, projects, and recent chats",
                      description: "Settings row description shown when external agent setup detection fails",
                    }),
                    control: (0, s.jsx)(d.$, {
                      color: "secondary",
                      size: "toolbar",
                      onClick: u,
                      children: (0, s.jsx)(l.A, {
                        id: "settings.import.error.retry",
                        defaultMessage: "Retry",
                        description: "Button label to retry external agent setup detection",
                      }),
                    }),
                  })
                : 0 === n.length && 0 === eo.length && null == S
                  ? (0, s.jsx)(C.ic, {
                      label: (0, s.jsx)(l.A, {
                        id: "settings.import.empty.label",
                        defaultMessage: "Import from other AI apps",
                        description: "Settings row label shown when no external agent setup can currently be imported",
                      }),
                      description: (0, s.jsx)(l.A, {
                        id: "settings.import.empty.description",
                        defaultMessage: "No importable setup found",
                        description:
                          "Settings row description shown when no external agent setup can currently be imported",
                      }),
                      control: (0, s.jsx)(d.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: !0,
                        children: (0, s.jsx)(l.A, {
                          id: "settings.import.empty.button",
                          defaultMessage: "Import",
                          description:
                            "Disabled import button shown when no external agent setup can currently be imported",
                        }),
                      }),
                    })
                  : 0 === n.length && 0 === eo.length
                    ? (0, s.jsx)(C.ic, {
                        label: (0, s.jsx)(l.A, {
                          id: "settings.import.empty.noNewItems",
                          defaultMessage: "No new items found",
                          description:
                            "Settings row label shown when a previous import exists and no additional external agent setup is available",
                        }),
                        description:
                          null != S
                            ? (0, s.jsx)(l.A, {
                                id: "settings.import.empty.lastImported",
                                defaultMessage: "Last imported {relativeTime} ago",
                                description: "Description showing when another local agent setup was last imported",
                                values: {
                                  relativeTime: (0, s.jsx)(
                                    O.A,
                                    { dateString: new Date(S).toISOString() },
                                    "last-imported-at",
                                  ),
                                },
                              })
                            : null,
                        control: (0, s.jsx)(d.$, {
                          color: "secondary",
                          size: "toolbar",
                          onClick: u,
                          children: (0, s.jsx)(l.A, {
                            id: "settings.import.empty.checkAgain",
                            defaultMessage: "Check again",
                            description: "Button label to check again for importable external agent setup",
                          }),
                        }),
                      })
                    : n.map((e) => {
                        let t = W[e],
                          r = (0, D.du)(V, e)
                        return (0, s.jsx)(
                          C.ic,
                          {
                            icon: (0, s.jsx)("div", {
                              "aria-hidden": !0,
                              className: (0, T.A)(
                                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                                "cursor" === e ? "text-default" : "bg-chart-orange text-inverse",
                              ),
                              children: (0, s.jsx)(t, { className: "size-10" }),
                            }),
                            label: r,
                            control: (0, s.jsx)(d.$, {
                              "aria-label": V.formatMessage(
                                {
                                  id: "settings.agent.importSettings.importProviderAriaLabel",
                                  defaultMessage: "Import from {provider}",
                                  description:
                                    "Accessible button label to import setup from a specific external agent app",
                                },
                                { provider: r },
                              ),
                              color: "secondary",
                              size: "toolbar",
                              onClick: (t) => {
                                let s,
                                  r = t.currentTarget
                                null !=
                                  (s = (0, B.gp)({
                                    detectedItems: et,
                                    existingProjectRoots: en,
                                    intl: V,
                                    providerIds: [e],
                                  })) &&
                                  ((0, K.yy)(H, N.CodexOnboardingExternalAgentImportEvent, {
                                    source: "settings",
                                    action: "shown",
                                    ...(0, B.EJ)(s, (0, B.O9)(s), n),
                                  }),
                                  (0, L.openExternalAgentImport)(H, {
                                    hostId: M.fI,
                                    items: et,
                                    preselectedProviderIds: [e],
                                    restoreFocus: () => r.focus(),
                                    sessionLimits: ee,
                                    source: "settings",
                                  }))
                              },
                              children: (0, s.jsx)(l.A, {
                                id: "settings.agent.importSettings.importProvider",
                                defaultMessage: "Import",
                                description:
                                  "Button label to review and import setup from a detected external agent app",
                              }),
                            }),
                          },
                          e,
                        )
                      })),
          (j[6] = et),
          (j[7] = en),
          (j[8] = V),
          (j[9] = es),
          (j[10] = er),
          (j[11] = w),
          (j[12] = S),
          (j[13] = ei),
          (j[14] = Z),
          (j[15] = H),
          (j[16] = ee),
          (j[17] = eo),
          (j[18] = o),
          (j[19] = c),
          (j[20] = p),
          (j[21] = m),
          (j[22] = g),
          (j[23] = h),
          (j[24] = f))
      } else ((o = j[18]), (c = j[19]), (p = j[20]), (m = j[21]), (g = j[22]), (h = j[23]), (f = j[24]))
      return (
        j[30] !== m || j[31] !== er || j[32] !== eo
          ? ((y =
              m || er || !(eo.length > 0)
                ? null
                : (0, s.jsx)(C.ic, {
                    icon: (0, s.jsx)(G.A, { className: "icon-2xs shrink-0 text-warning" }),
                    label: (0, s.jsx)(l.A, {
                      id: "settings.import.unsupportedProjects.label",
                      defaultMessage:
                        "{count, plural, one {# project can't be imported} other {# projects can't be imported}}",
                      description: "Settings row label shown when detected external agent projects cannot be imported",
                      values: { count: eo.length },
                    }),
                    description: (0, s.jsx)(l.A, {
                      id: "settings.import.unsupportedProjects.description",
                      defaultMessage:
                        "{projects} {count, plural, one {uses} other {use}} an unsupported project configuration",
                      description:
                        "Settings row description listing detected external agent projects that cannot be imported",
                      values: {
                        count: eo.length,
                        projects: (0, s.jsx)(E.dT, { type: "conjunction", value: eo.map(X) }, "unsupported-projects"),
                      },
                    }),
                    control: null,
                  })),
            (j[30] = m),
            (j[31] = er),
            (j[32] = eo),
            (j[33] = y))
          : (y = j[33]),
        j[34] !== o || j[35] !== g || j[36] !== y
          ? ((x = (0, s.jsxs)(o, { children: [g, y] })), (j[34] = o), (j[35] = g), (j[36] = y), (j[37] = x))
          : (x = j[37]),
        j[38] !== c || j[39] !== x
          ? ((b = (0, s.jsx)(c, { children: x })), (j[38] = c), (j[39] = x), (j[40] = b))
          : (b = j[40]),
        j[41] !== p || j[42] !== h || j[43] !== f || j[44] !== b
          ? ((v = (0, s.jsxs)(p, { id: h, children: [f, b] })),
            (j[41] = p),
            (j[42] = h),
            (j[43] = f),
            (j[44] = b),
            (j[45] = v))
          : (v = j[45]),
        v
      )
    }
    function X(e) {
      return e.name
    }
    function Y(e) {
      return e.title
    }
    var J = n("GlUR"),
      Q = n("UxN3"),
      ee = n("MBM1"),
      et = n("cdAR"),
      en = n("e5hA"),
      es = n("EjYe"),
      er = n("h818"),
      ei = n("DBCl"),
      eo = n("HZfM"),
      el = n("tl5a"),
      ea = n("AN2V")
    function ec(e) {
      let t,
        n,
        i,
        o,
        a = (0, r.c)(20),
        { category: c, history: u } = e,
        p = (0, eo.Zp)()
      if (a[0] !== c.itemType || a[1] !== u.failures || a[2] !== u.successes) {
        let e, r, i, o
        a[5] !== c.itemType ? ((e = (e) => e.itemType === c.itemType), (a[5] = c.itemType), (a[6] = e)) : (e = a[6])
        let l = u.successes.filter(e)
        a[7] !== c.itemType ? ((r = (e) => e.itemType === c.itemType), (a[7] = c.itemType), (a[8] = r)) : (r = a[8])
        let d = u.failures.filter(r)
        ;(a[9] !== c.itemType
          ? ((i = (e, t) =>
              "SESSIONS" === c.itemType
                ? (0, s.jsx)(ed, { status: "success", target: e.target }, `success-${t}`)
                : (0, s.jsx)(
                    eu,
                    { itemType: c.itemType, label: e.source, status: "success", target: e.target },
                    `success-${t}`,
                  )),
            (a[9] = c.itemType),
            (a[10] = i))
          : (i = a[10]),
          (t = l.map(i)),
          a[11] !== c.itemType
            ? ((o = (e, t) =>
                "SESSIONS" === c.itemType
                  ? (0, s.jsx)(ed, { failureMessage: e.message, status: "error" }, `failure-${t}`)
                  : (0, s.jsx)(
                      eu,
                      { itemType: c.itemType, failureMessage: e.message, label: e.source, status: "error" },
                      `failure-${t}`,
                    )),
              (a[11] = c.itemType),
              (a[12] = o))
            : (o = a[12]),
          (n = d.map(o)),
          (a[0] = c.itemType),
          (a[1] = u.failures),
          (a[2] = u.successes),
          (a[3] = t),
          (a[4] = n))
      } else ((t = a[3]), (n = a[4]))
      return (
        a[13] !== c.itemType || a[14] !== p
          ? ((i =
              "HOOKS" === c.itemType
                ? (0, s.jsx)(C.ic, {
                    variant: "nested",
                    label: (0, s.jsx)(l.A, {
                      id: "settings.import.history.details.reviewHooks",
                      defaultMessage: "Manage imported hooks",
                      description: "Label for the inline action to manage imported hooks",
                    }),
                    control: (0, s.jsx)(d.$, {
                      color: "ghost",
                      onClick: () => {
                        p((0, ea.NZ)({ hostId: M.fI }))
                      },
                      children: (0, s.jsx)(l.A, {
                        id: "settings.import.history.details.openHooks",
                        defaultMessage: "Open hooks settings",
                        description: "Button label to open hooks settings from imported hooks",
                      }),
                    }),
                  })
                : null),
            (a[13] = c.itemType),
            (a[14] = p),
            (a[15] = i))
          : (i = a[15]),
        a[16] !== t || a[17] !== n || a[18] !== i
          ? ((o = (0, s.jsxs)(s.Fragment, { children: [t, n, i] })), (a[16] = t), (a[17] = n), (a[18] = i), (a[19] = o))
          : (o = a[19]),
        o
      )
    }
    function ed(e) {
      let t,
        n,
        o,
        a,
        c,
        u,
        p,
        m = (0, r.c)(21),
        g = (0, _.A)(),
        h = (0, eo.Zp)()
      m[0] !== e.status || m[1] !== e.target
        ? ((t = "success" === e.status && null != e.target ? (0, ei.JXB)(e.target) : null),
          (m[0] = e.status),
          (m[1] = e.target),
          (m[2] = t))
        : (t = m[2])
      let f = t
      m[3] !== f ? ((n = null == f ? null : { hostId: M.fI, threadId: f }), (m[3] = f), (m[4] = n)) : (n = m[4])
      let y = (0, i._U)(el.HX, n)
      m[5] !== f ? ((o = null == f ? null : { hostId: M.fI, threadId: f }), (m[5] = f), (m[6] = o)) : (o = m[6])
      let x = (0, i._U)(el.Nb, o),
        b = y ?? x?.title
      ;(m[7] !== e.status
        ? ((a =
            "error" === e.status
              ? (0, s.jsx)(Q.bF, {
                  className: "shrink-0 text-danger",
                  "aria-hidden": !1,
                  legacyIcon: G.A,
                  asset16: er.c,
                  legacyClassName: "icon-2xs",
                })
              : null),
          (m[7] = e.status),
          (m[8] = a))
        : (a = m[8]),
        m[9] !== b
          ? ((c =
              b ??
              (0, s.jsx)(l.A, {
                id: "settings.import.history.details.untitledChat",
                defaultMessage: "Untitled chat",
                description: "Fallback title for an imported chat without a loaded thread title",
              })),
            (m[9] = b),
            (m[10] = c))
          : (c = m[10]))
      let v = "error" === e.status ? e.failureMessage : null
      return (
        m[11] !== f || m[12] !== g || m[13] !== h || m[14] !== b
          ? ((u =
              null == f
                ? null
                : (0, s.jsx)(d.$, {
                    "aria-label":
                      null == b
                        ? g.formatMessage({
                            id: "settings.import.history.details.openUntitledChat",
                            defaultMessage: "Open untitled chat",
                            description: "Accessible label to open an imported chat without a loaded thread title",
                          })
                        : g.formatMessage(
                            {
                              id: "settings.import.history.details.openNamedChat",
                              defaultMessage: "Open {title}",
                              description: "Accessible label to open an imported chat by title",
                            },
                            { title: b },
                          ),
                    color: "ghost",
                    onClick: () => {
                      h((0, ei._RT)(f))
                    },
                    children: (0, s.jsx)(l.A, {
                      id: "settings.import.history.details.openChat",
                      defaultMessage: "Open chat",
                      description: "Button label to open an imported chat",
                    }),
                  })),
            (m[11] = f),
            (m[12] = g),
            (m[13] = h),
            (m[14] = b),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== a || m[17] !== c || m[18] !== v || m[19] !== u
          ? ((p = (0, s.jsx)(C.ic, { variant: "nested", icon: a, label: c, description: v, control: u })),
            (m[16] = a),
            (m[17] = c),
            (m[18] = v),
            (m[19] = u),
            (m[20] = p))
          : (p = m[20]),
        p
      )
    }
    function eu(e) {
      var t, n, i
      let o,
        a,
        c,
        u,
        p,
        m = (0, r.c)(21),
        g = (0, _.A)(),
        h = (0, eo.Zp)(),
        f = null
      if ("error" === e.status) f = e.failureMessage
      else if (null == e.target) {
        let e
        ;(m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.import.history.details.imported",
              defaultMessage: "Imported",
              description: "Fallback destination label for a successful import history detail item",
            })),
            (m[0] = e))
          : (e = m[0]),
          (f = e))
      } else e.target !== e.label && (f = e.target)
      m[1] !== e.itemType || m[2] !== e.label || m[3] !== e.status || m[4] !== e.target
        ? ((o =
            "success" === e.status && null != e.label
              ? ((t = e.itemType),
                (n = e.label),
                (i = e.target),
                "SKILLS" === t || "COMMANDS" === t || "MCP_SERVER_CONFIG" === t
                  ? `${"MCP_SERVER_CONFIG" === t ? "/settings/mcp-settings" : "/skills"}?search=${encodeURIComponent(i ?? n)}`
                  : "PLUGINS" === t
                    ? (0, ei.xXQ)({ hostId: M.fI, pluginId: i ?? n })
                    : null)
              : null),
          (m[1] = e.itemType),
          (m[2] = e.label),
          (m[3] = e.status),
          (m[4] = e.target),
          (m[5] = o))
        : (o = m[5])
      let y = o
      m[6] !== e.label
        ? ((a =
            e.label ??
            (0, s.jsx)(l.A, {
              id: "settings.import.history.details.unknownItem",
              defaultMessage: "Imported item",
              description: "Fallback label for an import history detail item without a source name",
            })),
          (m[6] = e.label),
          (m[7] = a))
        : (a = m[7])
      let x = a
      return (
        m[8] !== e.status
          ? ((c =
              "error" === e.status
                ? (0, s.jsx)(Q.bF, {
                    className: "shrink-0 text-danger",
                    "aria-hidden": !1,
                    legacyIcon: G.A,
                    asset16: er.c,
                    legacyClassName: "icon-2xs",
                  })
                : null),
            (m[8] = e.status),
            (m[9] = c))
          : (c = m[9]),
        m[10] !== g || m[11] !== h || m[12] !== y || m[13] !== e.itemType || m[14] !== e.label
          ? ((u =
              null == y
                ? null
                : (0, s.jsx)(d.$, {
                    "aria-label": g.formatMessage(
                      {
                        id: "settings.import.history.details.openItem",
                        defaultMessage: "Open {item}",
                        description: "Accessible label to open an imported item",
                      },
                      { item: e.label },
                    ),
                    color: "ghost",
                    onClick: () => {
                      h(y, {
                        state:
                          "SKILLS" === e.itemType || "COMMANDS" === e.itemType
                            ? { initialHostId: M.fI, initialTab: "skills" }
                            : void 0,
                      })
                    },
                    children:
                      "SKILLS" === e.itemType || "COMMANDS" === e.itemType
                        ? (0, s.jsx)(l.A, {
                            id: "settings.import.history.details.openInSkills",
                            defaultMessage: "Open in Skills",
                            description: "Button label to open an imported skill or converted command in Skills",
                          })
                        : "MCP_SERVER_CONFIG" === e.itemType
                          ? (0, s.jsx)(l.A, {
                              id: "settings.import.history.details.openMcpSettings",
                              defaultMessage: "Open MCP settings",
                              description: "Button label to open an imported MCP server in settings",
                            })
                          : (0, s.jsx)(l.A, {
                              id: "settings.import.history.details.openPlugin",
                              defaultMessage: "Open plugin",
                              description: "Button label to open an imported plugin",
                            }),
                  })),
            (m[10] = g),
            (m[11] = h),
            (m[12] = y),
            (m[13] = e.itemType),
            (m[14] = e.label),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== f || m[17] !== x || m[18] !== c || m[19] !== u
          ? ((p = (0, s.jsx)(C.ic, { variant: "nested", icon: c, label: x, description: f, control: u })),
            (m[16] = f),
            (m[17] = x),
            (m[18] = c),
            (m[19] = u),
            (m[20] = p))
          : (p = m[20]),
        p
      )
    }
    function ep(e) {
      let t,
        n = (0, r.c)(6),
        { defaultExpanded: i, entry: o, mcpServerStatuses: l } = e,
        a = void 0 !== i && i
      if ("running" === o.kind) {
        let e
        return (
          n[0] !== o.runningImport
            ? ((e = (0, s.jsx)(em, { runningImport: o.runningImport })), (n[0] = o.runningImport), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      return (
        n[2] !== a || n[3] !== o.history || n[4] !== l
          ? ((t = (0, s.jsx)(eg, { defaultExpanded: a, history: o.history, mcpServerStatuses: l })),
            (n[2] = a),
            (n[3] = o.history),
            (n[4] = l),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    function em(e) {
      let t,
        n = (0, r.c)(6),
        { runningImport: i } = e,
        o = (0, _.A)()
      if (n[0] !== o || n[1] !== i.items) {
        let e,
          r,
          a = (0, u.NP)(i.items)
        ;(n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(C.ic, {
              label: (0, s.jsx)(l.A, {
                id: "settings.import.history.running",
                defaultMessage: "Importing now",
                description: "Header for an import history entry while its results are pending",
              }),
              control: (0, s.jsx)(P.y, { className: "icon-xs shrink-0 text-secondary" }),
            })),
            (n[3] = e))
          : (e = n[3]),
          n[4] !== o
            ? ((r = (e) =>
                (0, s.jsx)(
                  C.ic,
                  {
                    variant: "nested",
                    label: (0, D.UY)(o, e),
                    control: (0, s.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, s.jsx)(l.A, {
                        id: "settings.import.history.runningBadge",
                        defaultMessage: "Importing",
                        description: "Status for an import history category while its results are pending",
                      }),
                    }),
                  },
                  e,
                )),
              (n[4] = o),
              (n[5] = r))
            : (r = n[5]),
          (t = (0, s.jsxs)(I.t, { children: [e, a.map(r)] })),
          (n[0] = o),
          (n[1] = i.items),
          (n[2] = t))
      } else t = n[2]
      return t
    }
    function eg(e) {
      let t,
        n,
        i,
        a,
        c,
        d,
        p,
        m,
        g,
        h,
        f,
        y,
        x,
        b,
        v = (0, r.c)(39),
        { defaultExpanded: j, history: A, mcpServerStatuses: w } = e,
        S = (0, u.Wp)(A),
        M = S.reduce(ex, 0),
        k = S.reduce(ey, 0)
      v[0] !== A || v[1] !== w
        ? ((t = (0, u.W$)({ histories: [A], mcpServerStatuses: w })), (v[0] = A), (v[1] = w), (v[2] = t))
        : (t = v[2])
      let N = t.length
      v[3] !== A.successes ? ((n = A.successes.filter(ef)), (v[3] = A.successes), (v[4] = n)) : (n = v[4])
      let _ = N + n.length,
        [O, P] = (0, o.useState)(j),
        [L, R] = (0, o.useState)(null),
        D = `import-history-${A.importId}`
      i =
        k > 0 && _ > 0
          ? (0, s.jsx)(l.A, {
              id: "settings.import.history.summaryWithFailuresAndWarnings",
              defaultMessage: "{importedCount} imported · {failedCount} did not import · {warningCount} need review",
              description: "Summary of imported, failed, and review-required items for a completed import",
              values: { importedCount: M, failedCount: k, warningCount: _ },
            })
          : k > 0
            ? (0, s.jsx)(l.A, {
                id: "settings.import.history.summaryWithFailures",
                defaultMessage: "{importedCount} imported · {failedCount} did not import",
                description: "Summary of imported and failed items for a completed import",
                values: { importedCount: M, failedCount: k },
              })
            : _ > 0
              ? (0, s.jsx)(l.A, {
                  id: "settings.import.history.summaryWithWarnings",
                  defaultMessage: "{importedCount} imported · {warningCount} need review",
                  description: "Summary of imported and review-required items for a completed import",
                  values: { importedCount: M, warningCount: _ },
                })
              : (0, s.jsx)(l.A, {
                  id: "settings.import.history.summary",
                  defaultMessage: "{importedCount} imported",
                  description: "Summary of imported items for a completed import",
                  values: { importedCount: M },
                })
      let F = I.t,
        U = es.H,
        q =
          0 === S.length
            ? (0, s.jsx)(C.ic, {
                variant: "nested",
                label: (0, s.jsx)(l.A, {
                  id: "settings.import.history.noResults",
                  defaultMessage: "No results recorded",
                  description: "Label shown when an import history entry has no category results",
                }),
                control: null,
              })
            : S.map((e) => {
                let t = `${D}-${e.itemType}`,
                  n = L === e.itemType
                return (0, s.jsx)(
                  es.H,
                  {
                    content: (0, s.jsx)(ec, { category: e, history: A }),
                    contentId: t,
                    expanded: n,
                    children: (0, s.jsx)(ej, {
                      category: e,
                      contentId: t,
                      expanded: n,
                      history: A,
                      mcpServerStatuses: w,
                      onToggleExpanded: () => {
                        R(n ? null : e.itemType)
                      },
                    }),
                  },
                  e.itemType,
                )
              })
      v[5] !== A.providerId
        ? ((a = (0, s.jsx)(eb, { providerId: A.providerId })), (v[5] = A.providerId), (v[6] = a))
        : (a = v[6])
      let z = Number(A.completedAtMs)
      ;(v[7] !== z
        ? ((c = (0, s.jsx)(E.XU, { value: z, dateStyle: "medium", timeStyle: "short" })), (v[7] = z), (v[8] = c))
        : (c = v[8]),
        v[9] !== i ? ((d = (0, s.jsx)("span", { children: i })), (v[9] = i), (v[10] = d)) : (d = v[10]),
        v[11] !== c || v[12] !== d
          ? ((p = (0, s.jsxs)("span", { className: "flex flex-wrap items-center gap-x-2", children: [c, d] })),
            (v[11] = c),
            (v[12] = d),
            (v[13] = p))
          : (p = v[13]),
        v[14] !== A.providerId
          ? ((m = (0, s.jsx)(ev, { providerId: A.providerId })), (v[14] = A.providerId), (v[15] = m))
          : (m = v[15]))
      let H = O && "rotate-180"
      return (
        v[16] !== H
          ? ((g = (0, T.A)("icon-2xs text-tertiary transition-transform", H)), (v[16] = H), (v[17] = g))
          : (g = v[17]),
        v[18] !== g
          ? ((h = (0, s.jsx)(et.A, { "aria-hidden": !0, className: g })), (v[18] = g), (v[19] = h))
          : (h = v[19]),
        v[20] !== P
          ? ((f = () => {
              P(eh)
            }),
            (v[20] = P),
            (v[21] = f))
          : (f = v[21]),
        v[22] !== D || v[23] !== O || v[24] !== m || v[25] !== h || v[26] !== f || v[27] !== a || v[28] !== p
          ? ((y = (0, s.jsx)(ew, {
              contentId: D,
              expanded: O,
              label: a,
              description: p,
              icon: m,
              control: h,
              onClick: f,
            })),
            (v[22] = D),
            (v[23] = O),
            (v[24] = m),
            (v[25] = h),
            (v[26] = f),
            (v[27] = a),
            (v[28] = p),
            (v[29] = y))
          : (y = v[29]),
        v[30] !== U || v[31] !== D || v[32] !== O || v[33] !== y || v[34] !== q
          ? ((x = (0, s.jsx)(U, { contentId: D, expanded: O, content: q, children: y })),
            (v[30] = U),
            (v[31] = D),
            (v[32] = O),
            (v[33] = y),
            (v[34] = q),
            (v[35] = x))
          : (x = v[35]),
        v[36] !== F || v[37] !== x
          ? ((b = (0, s.jsx)(F, { children: x })), (v[36] = F), (v[37] = x), (v[38] = b))
          : (b = v[38]),
        b
      )
    }
    function eh(e) {
      return !e
    }
    function ef(e) {
      return "HOOKS" === e.itemType
    }
    function ey(e, t) {
      return e + t.failedCount
    }
    function ex(e, t) {
      return e + t.importedCount
    }
    function eb(e) {
      let t = (0, r.c)(6),
        { providerId: n } = e,
        i = (0, _.A)()
      switch (n) {
        case "claude-code":
        case "claude-cowork":
        case "cursor": {
          let e, r
          return (
            t[0] !== i || t[1] !== n ? ((e = (0, D.du)(i, n)), (t[0] = i), (t[1] = n), (t[2] = e)) : (e = t[2]),
            t[3] !== e
              ? ((r = (0, s.jsx)(l.A, {
                  id: "settings.import.history.entryTitle.fromProvider",
                  defaultMessage: "Imported from {provider}",
                  description: "Title for a completed external agent import with a known source app",
                  values: { provider: e },
                })),
                (t[3] = e),
                (t[4] = r))
              : (r = t[4]),
            r
          )
        }
        default: {
          let e
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(l.A, {
                  id: "settings.import.history.entryTitle",
                  defaultMessage: "Import",
                  description: "Generic title for a completed external agent import",
                })),
                (t[5] = e))
              : (e = t[5]),
            e
          )
        }
      }
    }
    function ev(e) {
      let t = (0, r.c)(4),
        { providerId: n } = e
      switch (n) {
        case "claude-code":
        case "claude-cowork": {
          let e,
            r = "claude-code" === n ? z.A : H.A
          return (
            t[0] !== r
              ? ((e = (0, s.jsx)("div", {
                  "aria-hidden": !0,
                  className:
                    "flex size-10 shrink-0 items-center justify-center rounded-lg bg-chart-orange text-inverse",
                  children: (0, s.jsx)(r, { className: "size-10" }),
                })),
                (t[0] = r),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "cursor": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)("div", {
                  "aria-hidden": !0,
                  className: "flex size-10 shrink-0 items-center justify-center rounded-lg text-default",
                  children: (0, s.jsx)(V.A, { className: "size-10" }),
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        default: {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)("div", {
                  "aria-hidden": !0,
                  className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-text/5 text-secondary",
                  children: (0, s.jsx)(en.A, { className: "icon-sm" }),
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
      }
    }
    function ej(e) {
      let t,
        n,
        i,
        o,
        a,
        c,
        d,
        p,
        m = (0, r.c)(28),
        { category: g, contentId: h, expanded: f, history: y, mcpServerStatuses: x, onToggleExpanded: b } = e,
        v = (0, _.A)()
      m[0] !== g.itemType || m[1] !== y || m[2] !== x
        ? ((t = "MCP_SERVER_CONFIG" === g.itemType ? (0, u.W$)({ histories: [y], mcpServerStatuses: x }).length : 0),
          (m[0] = g.itemType),
          (m[1] = y),
          (m[2] = x),
          (m[3] = t))
        : (t = m[3])
      let j = t
      ;(m[4] !== g.itemType || m[5] !== v
        ? ((n = (0, D.UY)(v, g.itemType)), (m[4] = g.itemType), (m[5] = v), (m[6] = n))
        : (n = m[6]),
        m[7] !== j || m[8] !== g.importedCount || m[9] !== g.itemType
          ? ((i =
              "COMMANDS" === g.itemType
                ? (0, s.jsx)(l.A, {
                    id: "settings.import.history.destination.commands",
                    defaultMessage: "Converted into skills",
                    description: "Destination label for imported commands",
                  })
                : "HOOKS" === g.itemType && g.importedCount > 0
                  ? (0, s.jsx)(l.A, {
                      id: "settings.import.history.manageHooks",
                      defaultMessage: "Manage imported hooks in Hooks settings",
                      description: "Description for opening imported hooks in Hooks settings",
                    })
                  : j > 0
                    ? (0, s.jsx)(l.A, {
                        id: "settings.import.history.authRequiredCount.v2",
                        defaultMessage:
                          "{count, plural, one {# server needs authentication} other {# servers need authentication}}",
                        description: "Imported MCP server count that still requires authentication",
                        values: { count: j },
                      })
                    : null),
            (m[7] = j),
            (m[8] = g.importedCount),
            (m[9] = g.itemType),
            (m[10] = i))
          : (i = m[10]),
        m[11] !== j || m[12] !== g
          ? ((o = (0, s.jsx)(eA, { authRequiredCount: j, category: g })), (m[11] = j), (m[12] = g), (m[13] = o))
          : (o = m[13]))
      let A = f && "rotate-90"
      return (
        m[14] !== A
          ? ((a = (0, T.A)("shrink-0 text-tertiary transition-transform", A)), (m[14] = A), (m[15] = a))
          : (a = m[15]),
        m[16] !== a
          ? ((c = (0, s.jsx)(Q.bF, {
              className: a,
              "aria-hidden": !1,
              asset16: J.q,
              legacyIcon: ee.A,
              legacyClassName: "icon-2xs",
            })),
            (m[16] = a),
            (m[17] = c))
          : (c = m[17]),
        m[18] !== o || m[19] !== c
          ? ((d = (0, s.jsxs)("div", {
              className: "flex shrink-0 items-center gap-3 whitespace-nowrap",
              children: [o, c],
            })),
            (m[18] = o),
            (m[19] = c),
            (m[20] = d))
          : (d = m[20]),
        m[21] !== h || m[22] !== f || m[23] !== b || m[24] !== n || m[25] !== i || m[26] !== d
          ? ((p = (0, s.jsx)(ew, {
              contentId: h,
              expanded: f,
              variant: "nested",
              label: n,
              description: i,
              control: d,
              onClick: b,
            })),
            (m[21] = h),
            (m[22] = f),
            (m[23] = b),
            (m[24] = n),
            (m[25] = i),
            (m[26] = d),
            (m[27] = p))
          : (p = m[27]),
        p
      )
    }
    function eA(e) {
      let t,
        n,
        i = (0, r.c)(11),
        { authRequiredCount: o, category: a } = e
      if (a.failedCount > 0) {
        let e, t
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-chart-red" })), (i[0] = e))
            : (e = i[0]),
          i[1] !== a.failedCount || i[2] !== a.importedCount
            ? ((t = (0, s.jsxs)("span", {
                className:
                  "inline-flex items-center gap-2 rounded-lg bg-chart-red/10 px-2 py-1 text-xs font-medium text-chart-red",
                children: [
                  e,
                  (0, s.jsx)(l.A, {
                    id: "settings.import.history.categorySummaryWithFailures",
                    defaultMessage: "{importedCount} imported · {failedCount} did not import",
                    description: "Summary of imported and failed items for an import history category",
                    values: { importedCount: a.importedCount, failedCount: a.failedCount },
                  }),
                ],
              })),
              (i[1] = a.failedCount),
              (i[2] = a.importedCount),
              (i[3] = t))
            : (t = i[3]),
          t
        )
      }
      if (o > 0 || ("HOOKS" === a.itemType && a.importedCount > 0)) {
        let e, t
        return (
          i[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-text-warning" })), (i[4] = e))
            : (e = i[4]),
          i[5] !== o || i[6] !== a.importedCount
            ? ((t = (0, s.jsxs)("span", {
                className: "inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium text-warning",
                children: [
                  e,
                  o > 0
                    ? (0, s.jsx)(l.A, {
                        id: "settings.import.history.categorySummaryWithAuthentication",
                        defaultMessage:
                          "{importedCount} imported · {authRequiredCount, plural, one {# needs authentication} other {# need authentication}}",
                        description: "Summary of imported MCP servers and how many still require authentication",
                        values: { authRequiredCount: o, importedCount: a.importedCount },
                      })
                    : (0, s.jsx)(l.A, {
                        id: "settings.import.history.categorySummaryNeedsReview",
                        defaultMessage: "{importedCount} imported · Needs review",
                        description: "Summary of imported hooks that still need review",
                        values: { importedCount: a.importedCount },
                      }),
                ],
              })),
              (i[5] = o),
              (i[6] = a.importedCount),
              (i[7] = t))
            : (t = i[7]),
          t
        )
      }
      return (
        i[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)("span", { className: "size-2 shrink-0 rounded-full bg-chart-green" })), (i[8] = t))
          : (t = i[8]),
        i[9] !== a.importedCount
          ? ((n = (0, s.jsxs)("span", {
              className: "inline-flex items-center gap-2 text-xs font-medium text-default",
              children: [
                t,
                (0, s.jsx)(l.A, {
                  id: "settings.import.history.categorySummary",
                  defaultMessage: "{importedCount} imported",
                  description: "Summary of imported items for an import history category",
                  values: { importedCount: a.importedCount },
                }),
              ],
            })),
            (i[9] = a.importedCount),
            (i[10] = n))
          : (n = i[10]),
        n
      )
    }
    function ew(e) {
      let t,
        n,
        i = (0, r.c)(11),
        { contentId: o, control: l, description: a, expanded: c, icon: d, label: u, onClick: p, variant: m } = e
      return (
        i[0] !== l || i[1] !== a || i[2] !== d || i[3] !== u || i[4] !== m
          ? ((t = (0, s.jsx)(C.ic, { variant: m, label: u, description: a, icon: d, control: l })),
            (i[0] = l),
            (i[1] = a),
            (i[2] = d),
            (i[3] = u),
            (i[4] = m),
            (i[5] = t))
          : (t = i[5]),
        i[6] !== o || i[7] !== c || i[8] !== p || i[9] !== t
          ? ((n = (0, s.jsx)("button", {
              "aria-controls": o,
              "aria-expanded": c,
              className:
                "w-full cursor-interaction text-start hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
              onClick: p,
              type: "button",
              children: t,
            })),
            (i[6] = o),
            (i[7] = c),
            (i[8] = p),
            (i[9] = t),
            (i[10] = n))
          : (n = i[10]),
        n
      )
    }
    var eC = n("JNtf"),
      eS = n("F0xz"),
      eI = n("S1bN"),
      eM = n("fk2y"),
      ek = n("RxZZ"),
      eN = n("Xpvt"),
      eT = n("mUDD"),
      e_ = n("GO7r")
    let eE = (0, E.YK)({
        SESSIONS: {
          id: "settings.import.syncCategory.chats",
          defaultMessage: "Chats",
          description: "Conversation history category in automatic import sync settings",
        },
        AGENTS_MD: {
          id: "settings.import.syncCategory.instructions",
          defaultMessage: "Instructions",
          description: "Agent instruction files category in automatic import sync settings",
        },
        CONFIG: {
          id: "settings.import.syncCategory.settings",
          defaultMessage: "Settings",
          description: "Agent configuration category in automatic import sync settings",
        },
        SKILLS: {
          id: "settings.import.syncCategory.skills",
          defaultMessage: "Skills",
          description: "Skills category in automatic import sync settings",
        },
        PLUGINS: {
          id: "settings.import.syncCategory.plugins",
          defaultMessage: "Plugins",
          description: "Plugins category in automatic import sync settings",
        },
        MCP_SERVER_CONFIG: {
          id: "settings.import.syncCategory.mcpServers",
          defaultMessage: "MCP servers",
          description: "MCP server configuration category in automatic import sync settings",
        },
        SUBAGENTS: {
          id: "settings.import.syncCategory.agents",
          defaultMessage: "Agents",
          description: "Custom agents category in automatic import sync settings",
        },
        HOOKS: {
          id: "settings.import.syncCategory.hooks",
          defaultMessage: "Hooks",
          description: "Hooks category in automatic import sync settings",
        },
        COMMANDS: {
          id: "settings.import.syncCategory.commands",
          defaultMessage: "Commands",
          description: "Slash commands category in automatic import sync settings",
        },
        MEMORY: {
          id: "settings.import.syncCategory.memory",
          defaultMessage: "Memory",
          description: "Agent memory category in automatic import sync settings",
        },
      }),
      eO = (0, E.YK)({
        CONFIG: {
          id: "settings.import.autosync.settingsDescription",
          defaultMessage: "Cowork tools sync together with Settings",
          description:
            "Warns that Cowork account configuration includes tool setup that cannot be filtered through the separate content categories",
        },
        PLUGINS: {
          id: "settings.import.autosync.pluginsDescription",
          defaultMessage: "Bundled skills and MCP servers sync with their plugin",
          description: "Warns that importing plugins can also bring their bundled skills and MCP servers",
        },
        COMMANDS: {
          id: "settings.import.autosync.commandsDescription",
          defaultMessage: "Imported as skills",
          description: "Explains that imported slash commands are represented as skills in Codex",
        },
      }),
      eP = (0, E.YK)({
        content: {
          id: "settings.import.autosync.content",
          defaultMessage: "Content to sync",
          description: "Label and dialog title for selecting categories to import during automatic sync",
        },
      }),
      eL = {
        SESSIONS: (0, s.jsx)(e_.oMj, {}),
        AGENTS_MD: (0, s.jsx)(e_.o_G, {}),
        CONFIG: (0, s.jsx)(e_.zC5, {}),
        SKILLS: (0, s.jsx)(e_.IW0, {}),
        PLUGINS: (0, s.jsx)(e_.wdY, {}),
        MCP_SERVER_CONFIG: (0, s.jsx)(e_.zC5, {}),
        SUBAGENTS: (0, s.jsx)(e_.CVn, {}),
        HOOKS: (0, s.jsx)(e_.o1J, {}),
        COMMANDS: (0, s.jsx)(e_.h3q, {}),
        MEMORY: (0, s.jsx)(e_.o_G, {}),
      }
    function eR(e) {
      let t,
        n,
        i,
        c,
        u,
        p,
        m,
        g,
        h,
        f,
        y,
        x,
        b,
        v,
        j,
        A,
        w,
        S,
        M,
        k,
        N,
        T = (0, r.c)(68),
        { itemTypes: _, initialPreferences: E, isSaving: O, syncState: P, onCancel: L, onSave: R } = e,
        D = (0, o.useId)(),
        [F, U] = (0, o.useState)(E),
        [q, z] = (0, o.useState)(!1),
        [H, V] = (0, o.useState)(!1),
        G = H ? eM.lV : _,
        B = "all" === F ? G : _
      T[0] !== F || T[1] !== P || T[2] !== B
        ? ((t = (0, eM.Ww)({ preferences: F, syncState: P, itemTypes: B })),
          (T[0] = F),
          (T[1] = P),
          (T[2] = B),
          (T[3] = t))
        : (t = T[3])
      let K = t
      T[4] !== _ || T[5] !== F || T[6] !== P
        ? ((n = eM.lV.some((e) => !1 !== (0, eM.Lj)({ preferences: F, syncState: P, itemType: e, itemTypes: _ }))),
          (T[4] = _),
          (T[5] = F),
          (T[6] = P),
          (T[7] = n))
        : (n = T[7])
      let $ = n
      if (
        (T[8] !== $ || T[9] !== O || T[10] !== R || T[11] !== F
          ? ((i = (e) => {
              ;(e.preventDefault(),
                $ &&
                  !O &&
                  (z(!1),
                  R(F).catch(() => {
                    z(!0)
                  })))
            }),
            (T[8] = $),
            (T[9] = O),
            (T[10] = R),
            (T[11] = F),
            (T[12] = i))
          : (i = T[12]),
        T[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)(eC.L3, { children: (0, s.jsx)(l.A, { ...eP.content }) })), (T[13] = c))
          : (c = T[13]),
        T[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)(eT.OO, {
              className: "shrink-0",
              children: (0, s.jsx)(eT.c7, {
                title: c,
                subtitle: (0, s.jsx)(eC.rr, {
                  children: (0, s.jsx)(l.A, {
                    id: "settings.import.autosync.customizeDescription",
                    defaultMessage: "Applies to all connected sources and projects",
                    description:
                      "Explains that changing an automatic import category applies to all connected import sources and project-level content",
                  }),
                }),
              }),
            })),
            (T[14] = u))
          : (u = T[14]),
        T[15] !== K || T[16] !== D || T[17] !== O || T[18] !== _ || T[19] !== F || T[20] !== P || T[21] !== G)
      ) {
        let e
        ;(T[23] !== K || T[24] !== D || T[25] !== O || T[26] !== _ || T[27] !== F || T[28] !== P
          ? ((e = (e) => {
              let t = "CONFIG" !== e || P?.providerIds.includes("claude-cowork") ? eO[e] : void 0,
                n = `${D}-${e}`
              return (0, s.jsx)(
                "label",
                {
                  className: O ? void 0 : "cursor-interaction",
                  htmlFor: n,
                  children: (0, s.jsx)(C.ic, {
                    control: (t) =>
                      (0, s.jsx)("div", {
                        className: "relative",
                        children: (0, s.jsx)(eN.S, {
                          id: n,
                          ...t,
                          checked: (0, eM.Lj)({ preferences: F, syncState: P, itemType: e, itemTypes: _ }),
                          disabled: O,
                          onCheckedChange: (t) => {
                            ;(U({ ...K, [e]: t }), z(!1))
                          },
                        }),
                      }),
                    description: null == t ? void 0 : (0, s.jsx)(l.A, { ...t }),
                    icon: eL[e],
                    label: (0, s.jsx)(l.A, { ...eE[e] }),
                  }),
                },
                e,
              )
            }),
            (T[23] = K),
            (T[24] = D),
            (T[25] = O),
            (T[26] = _),
            (T[27] = F),
            (T[28] = P),
            (T[29] = e))
          : (e = T[29]),
          (p = G.map(e)),
          (T[15] = K),
          (T[16] = D),
          (T[17] = O),
          (T[18] = _),
          (T[19] = F),
          (T[20] = P),
          (T[21] = G),
          (T[22] = p))
      } else p = T[22]
      ;(T[30] !== p
        ? ((m = (0, s.jsx)(eT.OO, {
            className: "min-h-0 overflow-y-auto",
            children: (0, s.jsx)(I.t, { children: p }),
          })),
          (T[30] = p),
          (T[31] = m))
        : (m = T[31]),
        T[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.allCategories",
              defaultMessage: "Sync all categories",
              description:
                "Toggle to sync every import category from connected sources, including categories detected later",
            })),
            (g = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.allCategoriesDescription",
              defaultMessage: "Include categories found in the future",
              description:
                "Explains that syncing all categories automatically includes categories absent from the original import",
            })),
            (T[32] = g),
            (T[33] = h))
          : ((g = T[32]), (h = T[33])),
        T[34] !== K || T[35] !== O || T[36] !== F
          ? ((f = (0, s.jsx)(C.ic, {
              label: h,
              description: g,
              control: (e) =>
                (0, s.jsx)(eS.l, {
                  ...e,
                  checked: "all" === F,
                  disabled: O,
                  onChange: (e) => {
                    ;(U(e ? "all" : K), z(!1))
                  },
                }),
            })),
            (T[34] = K),
            (T[35] = O),
            (T[36] = F),
            (T[37] = f))
          : (f = T[37]),
        T[38] !== O || T[39] !== _.length || T[40] !== H
          ? ((y =
              _.length < eM.lV.length
                ? (0, s.jsx)(C.ic, {
                    label: (0, s.jsx)(l.A, {
                      id: "settings.import.autosync.showAllCategories",
                      defaultMessage: "Show all categories",
                      description:
                        "Toggle to also show automatic import categories not found in connected sources so they can be configured in advance",
                    }),
                    description: (0, s.jsx)(l.A, {
                      id: "settings.import.autosync.showAllCategoriesDescription",
                      defaultMessage: "Choose what to sync when new categories become available",
                      description:
                        "Explains that showing all import categories lets users choose in advance which categories to sync when their connected source apps have that content",
                    }),
                    control: (e) => (0, s.jsx)(eS.l, { ...e, checked: H, disabled: O, onChange: V }),
                  })
                : null),
            (T[38] = O),
            (T[39] = _.length),
            (T[40] = H),
            (T[41] = y))
          : (y = T[41]),
        T[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, s.jsx)("p", {
              className: "text-sm leading-4 text-secondary",
              children: (0, s.jsx)(l.A, {
                id: "settings.import.autosync.futureSyncs.v2",
                defaultMessage: "Changes apply to future syncs. Content already imported stays in {appName}",
                description:
                  "Explains that changing automatic import preferences does not remove content already imported into the named app",
                values: { appName: a.C },
              }),
            })),
            (T[42] = x))
          : (x = T[42]),
        T[43] !== $
          ? ((b = $
              ? null
              : (0, s.jsx)("p", {
                  className: "text-sm leading-4 text-secondary",
                  role: "alert",
                  children: (0, s.jsx)(l.A, {
                    id: "settings.import.autosync.noCategories",
                    defaultMessage: "Select at least one category. To stop syncing, turn off “Keep imports in sync”",
                    description:
                      "Validation message for an empty automatic import category selection, explaining how to pause sync instead",
                  }),
                })),
            (T[43] = $),
            (T[44] = b))
          : (b = T[44]),
        T[45] !== q
          ? ((v = q
              ? (0, s.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, s.jsx)(l.A, {
                    id: "settings.import.autosync.saveError",
                    defaultMessage: "Couldn’t save sync preferences. Try again",
                    description:
                      "Error shown when automatic import category preferences could not be saved; the dialog stays open for retry",
                  }),
                })
              : null),
            (T[45] = q),
            (T[46] = v))
          : (v = T[46]),
        T[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.cancel",
              defaultMessage: "Cancel",
              description: "Discard unsaved automatic import category changes and close the dialog",
            })),
            (T[47] = j))
          : (j = T[47]),
        T[48] !== O || T[49] !== L
          ? ((A = (0, s.jsx)(d.$, { type: "button", color: "outline", disabled: O, onClick: L, children: j })),
            (T[48] = O),
            (T[49] = L),
            (T[50] = A))
          : (A = T[50]))
      let W = !$ || O
      return (
        T[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.save",
              defaultMessage: "Save",
              description: "Save the selected categories for future automatic import syncs",
            })),
            (T[51] = w))
          : (w = T[51]),
        T[52] !== O || T[53] !== W
          ? ((S = (0, s.jsx)(d.$, { type: "submit", color: "primary", disabled: W, loading: O, children: w })),
            (T[52] = O),
            (T[53] = W),
            (T[54] = S))
          : (S = T[54]),
        T[55] !== A || T[56] !== S
          ? ((M = (0, s.jsxs)(eT.Es, { children: [A, S] })), (T[55] = A), (T[56] = S), (T[57] = M))
          : (M = T[57]),
        T[58] !== f || T[59] !== y || T[60] !== b || T[61] !== v || T[62] !== M
          ? ((k = (0, s.jsx)(eT.OO, {
              className: "shrink-0",
              children: (0, s.jsxs)(eT.RW, { children: [f, y, x, b, v, M] }),
            })),
            (T[58] = f),
            (T[59] = y),
            (T[60] = b),
            (T[61] = v),
            (T[62] = M),
            (T[63] = k))
          : (k = T[63]),
        T[64] !== k || T[65] !== i || T[66] !== m
          ? ((N = (0, s.jsxs)(eT.R4, {
              as: "form",
              className: "max-h-[min(720px,calc(100vh-64px))] overflow-hidden select-none",
              onSubmit: i,
              children: [u, m, k],
            })),
            (T[64] = k),
            (T[65] = i),
            (T[66] = m),
            (T[67] = N))
          : (N = T[67]),
        N
      )
    }
    function eD(e) {
      let t,
        n,
        a,
        c,
        p,
        m,
        g,
        h,
        f,
        y,
        x,
        b,
        v,
        j,
        w,
        S,
        N,
        T,
        _,
        O = (0, r.c)(63),
        { workspaceRoots: P } = e,
        L = (0, i.gh)($.u),
        R = (0, ek.iK)(ei.Hiz.syncEnabled),
        D = (0, ek.iK)(ei.Hiz.syncItemTypes),
        z = (0, i.Ul)(ek.dW),
        H = (0, i.Ul)(eI.wE),
        V = (0, k.Zj)(F.Pc)
      O[0] !== V ? ((t = (0, F.lM)(V)), (O[0] = V), (O[1] = t)) : (t = O[1])
      let G = t,
        B = (0, U.bG)(),
        K = null != H
      O[2] !== G || O[3] !== B || O[4] !== K || O[5] !== P
        ? ((n = { enabled: K, hostId: M.fI, providers: G, sessionLimits: B, workspaceRoots: P }),
          (O[2] = G),
          (O[3] = B),
          (O[4] = K),
          (O[5] = P),
          (O[6] = n))
        : (n = O[6])
      let { detectedItems: W } = (0, q.e)(n),
        { data: Z } = (0, i._U)(u.ej, M.fI),
        X = (0, eM.oN)({ syncState: H, detectedItems: W, histories: Z }),
        [Y, J] = (0, o.useState)(!1),
        [Q, ee] = (0, o.useState)(!1),
        [et, en] = (0, o.useState)(!1),
        es = eM.lV.filter((e) => !1 !== (0, eM.Lj)({ preferences: D, syncState: H, itemType: e, itemTypes: X })),
        er = z && H?.version === 1 && H.providerIds.length > 0,
        eo = E.dT,
        el = es.map(eF)
      O[7] !== eo || O[8] !== el
        ? ((a = (0, s.jsx)(eo, { type: "conjunction", value: el })), (O[7] = eo), (O[8] = el), (O[9] = a))
        : (a = O[9])
      let ea = a
      if ("all" === D) {
        let e
        ;(O[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.allCategoriesSummary",
              defaultMessage: "All categories, including new ones",
              description:
                "Summary when automatic import sync includes every category, even categories detected in the future",
            })),
            (O[10] = e))
          : (e = O[10]),
          (ea = e))
      } else if (0 === es.length) {
        let e
        ;(O[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.noneSelected",
              defaultMessage: "No content selected",
              description: "Summary when no categories are selected for automatic import sync",
            })),
            (O[11] = e))
          : (e = O[11]),
          (ea = e))
      } else if (1 === es.length && "SESSIONS" === es[0]) {
        let e
        ;(O[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.chatsOnly",
              defaultMessage: "Chats only",
              description: "Summary when conversation history is the only category selected for automatic import sync",
            })),
            (O[12] = e))
          : (e = O[12]),
          (ea = e))
      } else if (es.length > 3) {
        let e
        ;(O[13] !== es.length
          ? ((e = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.selectedCount",
              defaultMessage: "{count} categories selected",
              description: "Number of content categories selected for automatic import sync",
              values: { count: es.length },
            })),
            (O[13] = es.length),
            (O[14] = e))
          : (e = O[14]),
          (ea = e))
      }
      ;(O[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, s.jsx)(A.X.Header, {
            title: (0, s.jsx)(l.A, {
              id: "settings.import.autosync.title",
              defaultMessage: "Automatic sync",
              description: "Heading for the external agent import autosync settings",
            }),
          })),
          (O[15] = c))
        : (c = O[15]),
        O[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.label",
              defaultMessage: "Keep imports in sync",
              description: "Label for the external agent import autosync setting",
            })),
            (O[16] = p))
          : (p = O[16]),
        O[17] !== R
          ? ((m = R
              ? (0, s.jsx)(l.A, {
                  id: "settings.import.autosync.description",
                  defaultMessage: "Automatically sync new and updated content from connected sources",
                  description: "Description for the external agent import autosync setting",
                })
              : (0, s.jsx)(l.A, {
                  id: "settings.import.autosync.paused",
                  defaultMessage: "Sync paused. Your content selections are saved",
                  description: "Explains that automatic imports are paused without discarding category preferences",
                })),
            (O[17] = R),
            (O[18] = m))
          : (m = O[18]),
        O[19] !== L || O[20] !== en || O[21] !== z || O[22] !== R
          ? ((g = (e) =>
              (0, s.jsx)(eS.l, {
                ...e,
                checked: R,
                disabled: !z,
                onChange: (e) => {
                  ;(en(!1),
                    (0, ek.gc)(L, ei.Hiz.syncEnabled, e).catch(() => {
                      en(!0)
                    }))
                },
              })),
            (O[19] = L),
            (O[20] = en),
            (O[21] = z),
            (O[22] = R),
            (O[23] = g))
          : (g = O[23]),
        O[24] !== m || O[25] !== g
          ? ((h = (0, s.jsx)(C.ic, { label: p, description: m, control: g })), (O[24] = m), (O[25] = g), (O[26] = h))
          : (h = O[26]),
        O[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(l.A, { ...eP.content })), (O[27] = f))
          : (f = O[27]),
        O[28] !== ea || O[29] !== H
          ? ((y =
              null == H || 0 === H.providerIds.length
                ? (0, s.jsx)(l.A, {
                    id: "settings.import.autosync.afterImport",
                    defaultMessage: "Available after your first import",
                    description:
                      "Explains that automatic import category preferences become editable after an import connects a source",
                  })
                : ea),
            (O[28] = ea),
            (O[29] = H),
            (O[30] = y))
          : (y = O[30]),
        O[31] !== Q || O[32] !== J
          ? ((x = (e) => {
              Q || J(e)
            }),
            (O[31] = Q),
            (O[32] = J),
            (O[33] = x))
          : (x = O[33]))
      let ec = !er
      return (
        O[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, s.jsx)(l.A, {
              id: "settings.import.autosync.customize",
              defaultMessage: "Customize",
              description: "Open a dialog to choose the content categories for automatic import sync",
            })),
            (O[34] = b))
          : (b = O[34]),
        O[35] !== ec
          ? ((v = (0, s.jsx)(d.$, { color: "secondary", size: "toolbar", disabled: ec, children: b })),
            (O[35] = ec),
            (O[36] = v))
          : (v = O[36]),
        O[37] !== Y ||
        O[38] !== Q ||
        O[39] !== X ||
        O[40] !== D ||
        O[41] !== L ||
        O[42] !== J ||
        O[43] !== ee ||
        O[44] !== H
          ? ((j = Y
              ? (0, s.jsx)(eR, {
                  itemTypes: X,
                  initialPreferences: D,
                  isSaving: Q,
                  syncState: H,
                  onCancel: () => J(!1),
                  onSave: (e) => (
                    ee(!0),
                    (0, ek.gc)(L, ei.Hiz.syncItemTypes, e)
                      .then(() => {
                        J(!1)
                      })
                      .finally(() => {
                        ee(!1)
                      })
                  ),
                })
              : null),
            (O[37] = Y),
            (O[38] = Q),
            (O[39] = X),
            (O[40] = D),
            (O[41] = L),
            (O[42] = J),
            (O[43] = ee),
            (O[44] = H),
            (O[45] = j))
          : (j = O[45]),
        O[46] !== Y || O[47] !== Q || O[48] !== x || O[49] !== v || O[50] !== j
          ? ((w = (0, s.jsx)(eC.lG, {
              open: Y,
              onOpenChange: x,
              shouldIgnoreClickOutside: Q,
              showDialogClose: !1,
              size: "xwide",
              triggerContent: v,
              children: j,
            })),
            (O[46] = Y),
            (O[47] = Q),
            (O[48] = x),
            (O[49] = v),
            (O[50] = j),
            (O[51] = w))
          : (w = O[51]),
        O[52] !== y || O[53] !== w
          ? ((S = (0, s.jsx)(C.ic, { label: f, description: y, control: w })), (O[52] = y), (O[53] = w), (O[54] = S))
          : (S = O[54]),
        O[55] !== h || O[56] !== S
          ? ((N = (0, s.jsx)(A.X.Content, { children: (0, s.jsxs)(I.t, { children: [h, S] }) })),
            (O[55] = h),
            (O[56] = S),
            (O[57] = N))
          : (N = O[57]),
        O[58] !== et
          ? ((T = et
              ? (0, s.jsx)(A.X.Footer, {
                  children: (0, s.jsx)("span", {
                    className: "text-danger",
                    role: "alert",
                    children: (0, s.jsx)(l.A, {
                      id: "settings.import.autosync.toggleError",
                      defaultMessage: "Couldn’t change automatic sync. Try again",
                      description: "Error shown when the automatic import sync switch could not be saved",
                    }),
                  }),
                })
              : null),
            (O[58] = et),
            (O[59] = T))
          : (T = O[59]),
        O[60] !== N || O[61] !== T
          ? ((_ = (0, s.jsxs)(A.X, { className: "select-none", children: [c, N, T] })),
            (O[60] = N),
            (O[61] = T),
            (O[62] = _))
          : (_ = O[62]),
        _
      )
    }
    function eF(e) {
      return (0, s.jsx)(l.A, { ...eE[e] }, e)
    }
    function eU() {
      let e,
        t,
        n,
        p,
        f,
        j,
        N,
        T,
        _,
        E,
        O,
        P,
        L,
        R,
        D,
        F,
        U,
        q,
        z,
        H,
        V,
        G = (0, r.c)(76),
        B = (0, k.Zj)(m.o),
        K = (0, i.Ul)(b.c_),
        $ = null == K,
        W = (0, i.Ul)(b.Gt),
        X = (0, i.Ul)(b.Gv)
      G[0] !== X || G[1] !== W
        ? ((e = W?.type === "local" ? (X[W.projectId]?.rootPaths ?? []) : []), (G[0] = X), (G[1] = W), (G[2] = e))
        : (e = G[2])
      let Y = e,
        J = (0, i.Ul)(b.Qd),
        Q = (0, i.Ul)(u.rz),
        { data: ee, error: et, isLoading: en, refetch: es } = (0, i._U)(u.ej, M.fI)
      G[3] !== ee ? ((t = ee?.some(eH) ?? !1), (G[3] = ee), (G[4] = t)) : (t = G[4])
      let er = t
      ;(G[5] !== ee ? ((n = ee ?? []), (G[5] = ee), (G[6] = n)) : (n = G[6]),
        G[7] !== n ? ((p = (0, u.eB)(n)), (G[7] = n), (G[8] = p)) : (p = G[8]))
      let ei = p,
        { data: eo } = (0, i._U)(g.M, M.fI),
        { data: el } = (0, i._U)(u.Vh, M.fI)
      G[9] !== el || G[10] !== eo?.connectors
        ? ((f = eo?.connectors == null && null == el ? void 0 : [...(eo?.connectors ?? []), ...(el ?? [])]),
          (G[9] = el),
          (G[10] = eo?.connectors),
          (G[11] = f))
        : (f = G[11])
      let ea = f,
        ec = (ea?.length ?? 0) > 0
      G[12] !== ec ? ((j = { enabled: ec, hostId: M.fI }), (G[12] = ec), (G[13] = j)) : (j = G[13])
      let { hardRefetchAppsList: ed, loadError: eu } = (0, c.Ad)(j),
        em = (0, i._U)(h.u, M.fI),
        eg = "ready" === em.status && "plugin-directory" === em.data.kind
      G[14] !== eg ? ((N = { enabled: eg }), (G[14] = eg), (G[15] = N)) : (N = G[15])
      let { availablePlugins: eh, errorMessage: ef, isLoading: ey, refetch: ex } = (0, y.Z_)(M.fI, void 0, N)
      G[16] !== eh || G[17] !== em || G[18] !== ey || G[19] !== ef || G[20] !== ex
        ? ((T = (0, h.O)({
            inputsResult: em,
            pluginDirectory: { errorMessage: ef, isLoading: ey, plugins: eh, refetch: ex },
          })),
          (G[16] = eh),
          (G[17] = em),
          (G[18] = ey),
          (G[19] = ef),
          (G[20] = ex),
          (G[21] = T))
        : (T = G[21])
      let eb = T,
        ev = eb.data
      G[22] !== ei ? ((_ = { enabled: ei }), (G[22] = ei), (G[23] = _)) : (_ = G[23])
      let { data: ej, error: eA, refetch: ew } = (0, i._U)(x.lt, M.fI, _),
        eC = (0, u.Yu)({ histories: ee ?? [], runningImport: Q?.hostId === M.fI ? Q : null }),
        eS = (0, u.Al)(eC),
        [eI, eM] = (0, o.useState)(!1),
        [ek, eN] = (0, o.useState)(!1),
        eT = ek ? eC : eS
      G[24] !== ee ? ((E = ee?.find(ez)), (G[24] = ee), (G[25] = E)) : (E = G[25])
      let e_ = E
      G[26] !== ev?.appsRequiringConnection
        ? ((O = ev?.appsRequiringConnection ?? []), (G[26] = ev?.appsRequiringConnection), (G[27] = O))
        : (O = G[27])
      let eE = O,
        eO = null == eu ? eb.status : "error"
      G[28] !== ee || G[29] !== ej?.data
        ? ((P = (0, u.W$)({ histories: ee ?? [], mcpServerStatuses: ej?.data ?? [] })),
          (G[28] = ee),
          (G[29] = ej?.data),
          (G[30] = P))
        : (P = G[30])
      let eP = P
      ;(G[31] !== ee ? ((L = ee ?? []), (G[31] = ee), (G[32] = L)) : (L = G[32]),
        G[33] !== L ? ((R = (0, u.uD)(L)), (G[33] = L), (G[34] = R)) : (R = G[34]))
      let eL = R,
        eR = ej?.data
      G[35] !== ee || G[36] !== et || G[37] !== eA || G[38] !== eR
        ? ((D = (0, u.iy)({ histories: ee, historiesError: et, mcpServerStatuses: eR, mcpServerStatusesError: eA })),
          (G[35] = ee),
          (G[36] = et),
          (G[37] = eA),
          (G[38] = eR),
          (G[39] = D))
        : (D = G[39])
      let eF = D,
        eU = (er || ec) && "ready" !== eO,
        eG = ei && "ready" !== eF,
        eB = eG && "error" === eF,
        eK = (ev?.importedPlugins.length ?? 0) > 0 || eE.length > 0 || eU || eP.length > 0 || eL || eB,
        e$ = v.P
      ;(G[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = (0, s.jsx)(S.s, { slug: "import" })), (G[40] = F))
        : (F = G[40]),
        G[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, s.jsx)(l.A, {
              id: "settings.import.subtitle.v2",
              defaultMessage: "Bring setup, projects, and chats from other AI apps into {appName}",
              description:
                "Subtitle explaining that this page imports configuration, projects, and chat history from other AI coding apps into the named Codex app",
              values: { appName: a.C },
            })),
            (G[41] = U))
          : (U = G[41]),
        G[42] !== Y || G[43] !== K || G[44] !== B
          ? ((q = B ? (0, s.jsx)(eD, { workspaceRoots: null == K ? void 0 : Y }) : null),
            (G[42] = Y),
            (G[43] = K),
            (G[44] = B),
            (G[45] = q))
          : (q = G[45]))
      let eW = $ || J || en,
        eZ = null == e_ ? null : Number(e_.completedAtMs),
        eX = null == K ? void 0 : Y
      ;(G[46] !== eW || G[47] !== eZ || G[48] !== eX
        ? ((z = (0, s.jsx)(Z, { isImportContextLoading: eW, latestSuccessfulImportAtMs: eZ, workspaceRoots: eX })),
          (G[46] = eW),
          (G[47] = eZ),
          (G[48] = eX),
          (G[49] = z))
        : (z = G[49]),
        G[50] !== eu ||
        G[51] !== eE ||
        G[52] !== ed ||
        G[53] !== eL ||
        G[54] !== ei ||
        G[55] !== eI ||
        G[56] !== eO ||
        G[57] !== eP ||
        G[58] !== eF ||
        G[59] !== ev?.importedPlugins ||
        G[60] !== eb ||
        G[61] !== es ||
        G[62] !== ew ||
        G[63] !== eK ||
        G[64] !== eU ||
        G[65] !== eB ||
        G[66] !== eG
          ? ((H =
              eK || eI
                ? (0, s.jsx)(eV, {
                    appsRequiringConnection: eE,
                    hardRefetchAppsList: ed,
                    hasImportedHooks: eL,
                    hasImportedMcpServers: ei,
                    importedConnectorDiscoveryStatus: eO,
                    importedMcpServerNamesRequiringAuthentication: eP,
                    importedMcpSetupStatus: eF,
                    importedPlugins: ev?.importedPlugins ?? [],
                    retryImportHistories: () => {
                      es()
                    },
                    retryImportedApps: () => {
                      ;("error" === eb.status && eb.retry(), null != eu && ed().catch(eq))
                    },
                    retryMcpServerStatuses: () => {
                      ew()
                    },
                    onSetupStarted: () => {
                      eM(!0)
                    },
                    shouldShowImportedConnectorStatus: eU,
                    shouldShowMcpServerError: eB,
                    shouldShowMcpServerStatus: eG,
                  })
                : null),
            (G[50] = eu),
            (G[51] = eE),
            (G[52] = ed),
            (G[53] = eL),
            (G[54] = ei),
            (G[55] = eI),
            (G[56] = eO),
            (G[57] = eP),
            (G[58] = eF),
            (G[59] = ev?.importedPlugins),
            (G[60] = eb),
            (G[61] = es),
            (G[62] = ew),
            (G[63] = eK),
            (G[64] = eU),
            (G[65] = eB),
            (G[66] = eG),
            (G[67] = H))
          : (H = G[67]))
      let eY =
        eC.length > 0 || en || null != et
          ? (0, s.jsxs)(A.X, {
              children: [
                (0, s.jsx)(A.X.Header, {
                  title: (0, s.jsx)(l.A, {
                    id: "settings.import.history.latestTitle",
                    defaultMessage: "Import history",
                    description: "Heading for external agent import results",
                  }),
                }),
                (0, s.jsxs)(A.X.Content, {
                  children: [
                    eT.map((e) =>
                      (0, s.jsx)(
                        ep,
                        {
                          defaultExpanded: "completed" === e.kind && eS.includes(e),
                          entry: e,
                          mcpServerStatuses: ej?.data ?? [],
                        },
                        "running" === e.kind ? `running-${e.runningImport.startedAtMs}` : e.history.importId,
                      ),
                    ),
                    eT.length < eC.length
                      ? (0, s.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, s.jsx)(d.$, {
                            color: "secondary",
                            size: "toolbar",
                            onClick: () => {
                              eN(!0)
                            },
                            children: (0, s.jsx)(l.A, {
                              id: "settings.import.history.viewMore",
                              defaultMessage: "View more",
                              description: "Button label to reveal older external agent import history",
                            }),
                          }),
                        })
                      : null,
                    en
                      ? (0, s.jsx)(I.t, {
                          children: (0, s.jsx)(w.u, {
                            children: (0, s.jsx)(l.A, {
                              id: "settings.import.history.loading",
                              defaultMessage: "Loading import history",
                              description: "Label shown while import history is loading",
                            }),
                          }),
                        })
                      : null == ee && null != et
                        ? (0, s.jsx)(I.t, {
                            children: (0, s.jsx)(C.ic, {
                              label: (0, s.jsx)(l.A, {
                                id: "settings.import.history.error",
                                defaultMessage: "Couldn't load import history",
                                description: "Error shown when import history cannot be loaded",
                              }),
                              control: (0, s.jsx)(d.$, {
                                color: "secondary",
                                size: "toolbar",
                                onClick: () => {
                                  es()
                                },
                                children: (0, s.jsx)(l.A, {
                                  id: "settings.import.history.retry",
                                  defaultMessage: "Retry",
                                  description: "Button label to retry loading import history",
                                }),
                              }),
                            }),
                          })
                        : null,
                  ],
                }),
              ],
            })
          : null
      return (
        G[68] !== e$ || G[69] !== F || G[70] !== U || G[71] !== q || G[72] !== z || G[73] !== H || G[74] !== eY
          ? ((V = (0, s.jsxs)(e$, { title: F, subtitle: U, children: [q, z, H, eY] })),
            (G[68] = e$),
            (G[69] = F),
            (G[70] = U),
            (G[71] = q),
            (G[72] = z),
            (G[73] = H),
            (G[74] = eY),
            (G[75] = V))
          : (V = G[75]),
        V
      )
    }
    function eq() {}
    function ez(e) {
      return e.successes.length > 0
    }
    function eH(e) {
      return e.successes.length > 0
    }
    function eV(e) {
      let t,
        n,
        i,
        a,
        c,
        u,
        m,
        g,
        h,
        y,
        x,
        b = (0, r.c)(46),
        {
          appsRequiringConnection: v,
          hardRefetchAppsList: w,
          hasImportedHooks: S,
          hasImportedMcpServers: k,
          importedConnectorDiscoveryStatus: N,
          importedMcpServerNamesRequiringAuthentication: T,
          importedMcpSetupStatus: _,
          importedPlugins: E,
          retryImportHistories: O,
          retryImportedApps: P,
          retryMcpServerStatuses: L,
          shouldShowImportedConnectorStatus: R,
          shouldShowMcpServerError: D,
          shouldShowMcpServerStatus: F,
          onSetupStarted: U,
        } = e,
        [q, z] = (0, o.useState)("apps")
      b[0] !== w || b[1] !== k || b[2] !== O || b[3] !== P || b[4] !== L
        ? ((t = {
            hardRefetchAppsList: w,
            hasImportedMcpServers: k,
            hostId: M.fI,
            retryImportHistories: O,
            retryImportedApps: P,
            retryMcpServerStatuses: L,
          }),
          (b[0] = w),
          (b[1] = k),
          (b[2] = O),
          (b[3] = P),
          (b[4] = L),
          (b[5] = t))
        : (t = b[5])
      let {
          clearConnectingApp: H,
          connectedApps: V,
          connectingApp: G,
          handleAppConnectOAuthStarted: B,
          handleAppConnected: K,
          handleAuthenticateMcp: $,
          handleConnectApp: W,
          handleInstallPlugin: Z,
          handleOpenHooksSettings: X,
          handleRetry: Y,
          isAppConnectPending: J,
        } = (0, f.L)(t),
        Q = R ? N : "ready",
        ee = F ? _ : "ready"
      b[6] !== Q || b[7] !== ee
        ? ((n = { apps: Q, hooks: "ready", mcps: ee }), (b[6] = Q), (b[7] = ee), (b[8] = n))
        : (n = b[8])
      let et = n
      return (
        b[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(A.X.Header, {
              title: (0, s.jsx)(l.A, {
                id: "settings.import.attention.title",
                defaultMessage: "Needs attention",
                description: "Heading for imported setup that needs review or authentication",
              }),
              subtitle: (0, s.jsx)(l.A, {
                id: "settings.import.attention.subtitle",
                defaultMessage: "Finish setting up items from a previous import",
                description: "Subtitle for imported setup that needs review or authentication",
              }),
            })),
            (b[9] = i))
          : (i = b[9]),
        b[10] !== L || b[11] !== D
          ? ((a = D
              ? (0, s.jsx)(C.ic, {
                  label: (0, s.jsx)(l.A, {
                    id: "settings.import.attention.mcps.error",
                    defaultMessage: "Couldn't check imported MCP servers",
                    description:
                      "Error shown when Codex cannot determine whether imported MCP servers need authentication",
                  }),
                  control: (0, s.jsx)(d.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: L,
                    children: (0, s.jsx)(l.A, {
                      id: "settings.import.attention.mcps.retry",
                      defaultMessage: "Retry",
                      description: "Button label to retry checking whether imported MCP servers need authentication",
                    }),
                  }),
                })
              : null),
            (b[10] = L),
            (b[11] = D),
            (b[12] = a))
          : (a = b[12]),
        b[13] !== W || b[14] !== U ? ((c = (e) => (U(), W(e))), (b[13] = W), (b[14] = U), (b[15] = c)) : (c = b[15]),
        b[16] !== Z || b[17] !== U
          ? ((u = (e, t) => {
              ;(U(), Z(e, t))
            }),
            (b[16] = Z),
            (b[17] = U),
            (b[18] = u))
          : (u = b[18]),
        b[19] !== v ||
        b[20] !== V ||
        b[21] !== $ ||
        b[22] !== X ||
        b[23] !== Y ||
        b[24] !== S ||
        b[25] !== T ||
        b[26] !== E ||
        b[27] !== J ||
        b[28] !== q ||
        b[29] !== c ||
        b[30] !== u ||
        b[31] !== et
          ? ((m = (0, s.jsx)(p.sJ, {
              appsRequiringConnection: v,
              connectedApps: V,
              hasImportedHooks: S,
              importedPlugins: E,
              isAppConnectPending: J,
              mcpServerNamesRequiringAuthentication: T,
              selectedTab: q,
              tabStatus: et,
              variant: "settings",
              onConnectApp: c,
              onInstallPlugin: u,
              onOpenHooksSettings: X,
              onAuthenticateMcp: $,
              onRetry: Y,
              onSelectTab: z,
            })),
            (b[19] = v),
            (b[20] = V),
            (b[21] = $),
            (b[22] = X),
            (b[23] = Y),
            (b[24] = S),
            (b[25] = T),
            (b[26] = E),
            (b[27] = J),
            (b[28] = q),
            (b[29] = c),
            (b[30] = u),
            (b[31] = et),
            (b[32] = m))
          : (m = b[32]),
        b[33] !== a || b[34] !== m
          ? ((g = (0, s.jsxs)(A.X, {
              children: [i, (0, s.jsx)(A.X.Content, { children: (0, s.jsxs)(I.t, { children: [a, m] }) })],
            })),
            (b[33] = a),
            (b[34] = m),
            (b[35] = g))
          : (g = b[35]),
        b[36] !== H
          ? ((h = (e) => {
              e || H()
            }),
            (b[36] = H),
            (b[37] = h))
          : (h = b[37]),
        b[38] !== G || b[39] !== B || b[40] !== K || b[41] !== h
          ? ((y = (0, s.jsx)(j.Z, {
              oauthReferrer: "imported_plugin",
              app: G,
              hostId: M.fI,
              onOpenChange: h,
              onOAuthStarted: B,
              onConnected: K,
            })),
            (b[38] = G),
            (b[39] = B),
            (b[40] = K),
            (b[41] = h),
            (b[42] = y))
          : (y = b[42]),
        b[43] !== g || b[44] !== y
          ? ((x = (0, s.jsxs)(s.Fragment, { children: [g, y] })), (b[43] = g), (b[44] = y), (b[45] = x))
          : (x = b[45]),
        x
      )
    }
  },
  I7Ou(e, t, n) {
    var s = n("ABep"),
      r = n("QosV"),
      i = n("RNul"),
      o = n("AWNZ")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            l = (0, r.c)(3),
            { children: a } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(i.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== a
              ? ((n = (0, s.jsx)("div", {
                  role: "status",
                  children: (0, s.jsx)(o.ic, {
                    label: (0, s.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, s.jsx)("span", { className: "text-balance", children: a })],
                    }),
                    control: null,
                  }),
                })),
                (l[1] = a),
                (l[2] = n))
              : (n = l[2]),
            n
          )
        },
      },
    )
  },
  EjYe(e, t, n) {
    var s = n("ABep"),
      r = n("QosV"),
      i = n("bZug")
    n.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            n,
            o = (0, r.c)(7),
            { children: l, content: a, contentId: c, expanded: d } = e
          return (
            o[0] !== a || o[1] !== c || o[2] !== d
              ? ((t = d ? (0, s.jsx)("div", { id: c, className: i.r, children: a }) : null),
                (o[0] = a),
                (o[1] = c),
                (o[2] = d),
                (o[3] = t))
              : (t = o[3]),
            o[4] !== l || o[5] !== t
              ? ((n = (0, s.jsxs)("div", { className: i.r, children: [l, t] })), (o[4] = l), (o[5] = t), (o[6] = n))
              : (n = o[6]),
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
  ZEx5(e, t, n) {
    n.d(t, { t: () => l })
    var s = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("bZug")
    function l(e) {
      let t,
        n,
        l,
        a = (0, r.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: p, variant: m, decoration: g } = e,
        h = void 0 === m ? "default" : m,
        f = "flat" === h || "rows" === h ? o.s : o.r,
        y = void 0 === p || p ? f : "flex flex-col",
        x = "recommendation" === h && "rounded-[20px]",
        b = "recommendation" !== h && "flat" !== h && "rows" !== h && "outlinedLarge" !== h && "rounded-2xl",
        v = "outlinedLarge" === h && "rounded-[30px] border border-default bg-transparent",
        j = "daybreak" === g && "daybreak-VsXdEH",
        A = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        w =
          "default" === h &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        C = "metered" === h && "ring-1 ring-inset ring-border-subtle",
        S = "secondary" === h && "bg-surface-secondary/92",
        I = "muted" === h && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        M =
          "form" === h &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        k = "outlined" === h && "border border-subtle bg-transparent",
        N =
          "flat" === h &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        T = "input" === h && "border border-primary-outline bg-primary-soft",
        _ = "recommendation" === h && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        a[0] !== d ||
        a[1] !== w ||
        a[2] !== C ||
        a[3] !== S ||
        a[4] !== I ||
        a[5] !== M ||
        a[6] !== k ||
        a[7] !== N ||
        a[8] !== T ||
        a[9] !== _ ||
        a[10] !== y ||
        a[11] !== x ||
        a[12] !== b ||
        a[13] !== v ||
        a[14] !== j ||
        a[15] !== A
          ? ((t = (0, i.A)(y, x, b, v, j, A, w, C, S, I, M, k, N, T, _, d)),
            (a[0] = d),
            (a[1] = w),
            (a[2] = C),
            (a[3] = S),
            (a[4] = I),
            (a[5] = M),
            (a[6] = k),
            (a[7] = N),
            (a[8] = T),
            (a[9] = _),
            (a[10] = y),
            (a[11] = x),
            (a[12] = b),
            (a[13] = v),
            (a[14] = j),
            (a[15] = A),
            (a[16] = t))
          : (t = a[16]),
        a[17] !== h
          ? ((n =
              "default" === h || "metered" === h
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (a[17] = h),
            (a[18] = n))
          : (n = a[18]),
        a[19] !== c || a[20] !== t || a[21] !== n
          ? ((l = (0, s.jsx)("div", { className: t, style: n, children: c })),
            (a[19] = c),
            (a[20] = t),
            (a[21] = n),
            (a[22] = l))
          : (l = a[22]),
        l
      )
    }
  },
  ZRZE(e, t, n) {
    let s = (0, n("nkTT").a)({
      name: "checkmark-lg-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.494967, y: 4.234375, width: 16.984991, height: 15.447021 },
        visualBounds: { x: 3.494967, y: 4.234375, width: 16.984991, height: 15.447021 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.494967, y: 4.234375, width: 16.984991, height: 15.447021 },
        center: { x: 11.987463, y: 11.957886 },
        insets: { top: 4.234375, right: 3.520042, bottom: 4.318604, left: 3.494967 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.987463, y: 11.957886 },
          foreground: { x: 11.987463, y: 11.957886 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.113 4.55849C19.3483 4.21765 19.8151 4.13186 20.156 4.36709C20.4966 4.60235 20.5824 5.06924 20.3474 5.41006L10.7703 19.287L10.7712 19.288C10.454 19.7542 9.79154 19.8165 9.39233 19.4188L3.71655 13.788C3.4226 13.4962 3.42093 13.0214 3.71264 12.7274C4.0044 12.4335 4.47918 12.4318 4.77319 12.7235L9.94018 17.8505L19.113 4.55849Z" fill="currentColor"/>',
    })
    n.d(t, {}, { P: s })
  },
  mxbn(e, t, n) {
    let s = (0, n("nkTT").a)({
      name: "circle-xmark-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        visualBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.25, right: 2.25, bottom: 2.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.2979 8.6416C14.5907 8.34871 15.0655 8.34871 15.3584 8.6416C15.6512 8.9345 15.6513 9.40928 15.3584 9.70215L13.0605 11.999L15.3594 14.2979C15.652 14.5907 15.6519 15.0655 15.3594 15.3584C15.0665 15.6513 14.5907 15.6513 14.2979 15.3584L12 13.0605L9.70215 15.3584C9.40928 15.6513 8.9345 15.6512 8.6416 15.3584C8.34871 15.0655 8.34871 14.5907 8.6416 14.2979L10.9395 12L8.6416 9.70215C8.34871 9.40926 8.34871 8.93352 8.6416 8.64062C8.93446 8.3481 9.40934 8.34801 9.70215 8.64062L12 10.9385L14.2979 8.6416Z" fill="currentColor"/> <path d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { W: s })
  },
}
//# sourceMappingURL=837769.5833a3e219.js.map
