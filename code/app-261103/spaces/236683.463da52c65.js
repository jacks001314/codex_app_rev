export const __rspack_esm_ids = [236683]
export const __webpack_modules__ = {
  qMwT(e, t, a) {
    var n = a("Qgfj"),
      r = a("GO7r"),
      i = a("cyb2"),
      o = a("l5Vd")
    a.d(
      t,
      {},
      {
        y: function ({ scope: e, projectId: t, disabled: a, analyticsEnabled: l, source: s, navigate: d, onEdit: c }) {
          let u = (a, n) => {
            ;((0, i.Q_)(e, { action: a, projectId: t, source: s }), d(n))
          }
          return {
            edit: {
              id: "appgenPage.edit.label",
              message: (0, n.zR)({
                id: "appgenPage.edit.label",
                defaultMessage: "Edit",
                description: "Menu item for starting a new conversation to edit a site",
              }),
              icon: r.Npl,
              enabled: !a,
              onSelect: () => {
                ;((0, i.Q_)(e, {
                  action: i.lX.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                  projectId: t,
                  source: s,
                }),
                  c())
              },
            },
            settings: {
              id: "appgenPage.settings.label",
              message: (0, n.zR)({
                id: "appgenPage.settings.label",
                defaultMessage: "Settings",
                description: "Menu item for opening site settings",
              }),
              icon: r.dqq,
              enabled: !a,
              onSelect: () => u(i.lX.CODEX_APPGEN_INTERACTION_ACTION_SETTINGS_OPENED, (0, o.SJ)(t)),
            },
            analytics: l
              ? {
                  id: "appgenPage.analytics.label",
                  message: (0, n.zR)({
                    id: "appgenPage.analytics.label",
                    defaultMessage: "Analytics",
                    description: "Menu item for opening site analytics",
                  }),
                  icon: r.Fdu,
                  enabled: !a,
                  onSelect: () => u(i.lX.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED, (0, o.hI)(t)),
                }
              : null,
          }
        },
      },
    )
  },
  b3Qd(e, t, a) {
    let n = ".chatgpt-team.site",
      r = ".chatgpt.site",
      i = [n, r, ".appgardenapps.dev"]
    function o(e) {
      return e.endsWith(n) ? `${e.slice(0, -n.length)}${r}` : e
    }
    function l(e) {
      return e.replace(/\/+$/u, "") || "/"
    }
    a.d(
      t,
      {},
      {
        Go: function (e) {
          if (null == e) return null
          let t = new URL(e)
          return `${t.host}${"/" === t.pathname ? "" : t.pathname}${t.search}${t.hash}`
        },
        Q6: function (e, t) {
          if (null == e) return null
          try {
            let a = new URL(e).hostname,
              n = t.trim().toLowerCase()
            if (0 === n.length || !a.startsWith(`${n}.`) || !i.some((e) => a.endsWith(e))) return null
            return a.slice(n.length)
          } catch {
            return null
          }
        },
        VB: function (e) {
          let t = null == e ? null : URL.parse(e)
          return null == t ? null : ((t.hostname = o(t.hostname)), (t.pathname = l(t.pathname)), t.href)
        },
        oB: function (e, t) {
          try {
            let a = new URL(e),
              n = new URL(t)
            if (a.protocol !== n.protocol || a.port !== n.port || o(a.hostname) !== o(n.hostname)) return !1
            let r = l(n.pathname),
              i = l(a.pathname)
            return "/" === r || i === r || i.startsWith(`${r}/`)
          } catch {
            return !1
          }
        },
      },
    )
  },
  ikCk(e, t, a) {
    var n = a("zTeN"),
      r = a("Qgfj"),
      i = a("SGsN"),
      o = a("svjy"),
      l = a("OWtl"),
      s = a("OMIV"),
      d = a("TzYl")
    let c = (0, n.i1)(l.u, (e, { get: t }) => {
        if (!t(s.JW, "1425956883")) return null
        let { accountId: a, userId: n, projectId: r, title: l, initialPinned: c } = e,
          p = { accountId: a, userId: n, projectId: r },
          g = { ...p, initialPinned: c },
          f = t(d.Uv, g),
          { isPending: m } = t(d.CB, p),
          h = t(o.g)
        return {
          pinned: f,
          pending: m,
          label: h.formatMessage(f ? u.unpinSite : u.pinSite, { siteTitle: l }),
          indicatorLabel: h.formatMessage(u.indicator),
          menuMessage: f ? u.unpin : u.pin,
          prefetch: (e) => {
            null != a &&
              null != n &&
              null == e.get(d.Uv, g) &&
              e.get(d.zb, p, { enabled: !1 }).refetch({ cancelRefetch: !1 })
          },
          toggle: (t) => {
            let a = t.get(d.Uv, g),
              n = t.get(d.CB, p)
            null == a ||
              n.isPending ||
              n.mutateAsync({ isPinned: !a, site: e.site }).catch(() => {
                t.get(i.Id).danger(t.get(o.g).formatMessage(u.saveError), {
                  errorAnalytics: { toastId: "sites_pins_save_error" },
                })
              })
          },
        }
      }),
      u = (0, r.YK)({
        unpinSite: {
          id: "appgenPage.pins.unpinSite",
          defaultMessage: "Unpin {siteTitle}",
          description:
            "Accessible label for the button that removes a Site from the user's Pinned section in Space. siteTitle is the Site's title.",
        },
        pinSite: {
          id: "appgenPage.pins.pinSite",
          defaultMessage: "Pin {siteTitle}",
          description:
            "Accessible label for the button that saves a Site to the user's Pinned section in Space. siteTitle is the Site's title.",
        },
        indicator: {
          id: "appgenPage.pins.indicator",
          defaultMessage: "Pinned",
          description: "Accessible label for the icon marking a site as pinned",
        },
        unpin: {
          id: "appgenPage.pins.unpin",
          defaultMessage: "Unpin",
          description: "Menu action to remove a site from the user's personal Pinned tab",
        },
        pin: {
          id: "appgenPage.pins.pin",
          defaultMessage: "Pin",
          description: "Menu action to save a site to the user's personal Pinned tab",
        },
        saveError: {
          id: "appgenPage.pins.saveError",
          defaultMessage: "Unable to update pins. Try again.",
          description: "Error shown when saving or removing a pinned site fails",
        },
      })
    a.d(t, {}, { X: c })
  },
  TzYl(e, t, a) {
    var n = a("zTeN"),
      r = a("DBCl"),
      i = a("SPnB"),
      o = a("Ghh3"),
      l = a("v5SL"),
      s = a("OWtl"),
      d = a("rvFo"),
      c = a("cyb2"),
      u = a("SQbA"),
      p = a("QGkM"),
      g = a("CERd"),
      f = a("SdxB")
    let m = (0, n.vU)(s.u, ({ accountId: e, userId: t, projectId: a }) => ({
        queryKey: ["sites-pins", e, t, "status", a],
        queryFn: ({ signal: t }) =>
          o.Request.safeGet("/websites/{project_id}/pin", {
            parameters: { path: { project_id: a } },
            additionalHeaders: null == e ? void 0 : { [r.zBc]: e },
            signal: t,
          }),
        enabled: null != e && null != t,
        staleTime: d.D.THIRTY_SECONDS,
        refetchOnMount: !0,
        retryOnMount: !0,
        retry: !1,
      })),
      h = (0, n.N3)(s.u, ({ accountId: e, userId: t, query: a }, { get: n, scope: i }) => {
        let l = n(g.Q2, { accountId: e, userId: t }),
          s = ["sites-pins", e, t, "list", a]
        return {
          queryKey: s,
          initialPageParam: null,
          queryFn: ({ pageParam: n, signal: i }) => {
            if (null == e || null == t) throw Error("Sites pins require a signed-in account")
            return o.Request.safeGet("/websites/pinned", {
              parameters: { query: { limit: 20, after: n, query: a || void 0 } },
              additionalHeaders: null == e ? void 0 : { [r.zBc]: e },
              signal: i,
              expectedIdentity: { accountId: e, userId: t },
            })
          },
          getNextPageParam: (e) => e.cursor ?? null,
          select: (e) =>
            (0, g.vZ)(
              e.pages.flatMap((e) => e.items.map(f.G)),
              l,
              i.queryClient.getQueryState(s)?.dataUpdatedAt ?? 0,
              a,
            ),
          enabled: null != e && null != t,
          staleTime: "" === a ? d.D.THIRTY_SECONDS : 0,
          ...("" === a ? {} : { refetchOnMount: "always" }),
          retry: !1,
        }
      }),
      v = (0, n.i1)(s.u, ({ accountId: e, userId: t, projectId: a, initialPinned: n }, { get: r }) => {
        let { data: i, dataUpdatedAt: o } = r(m, { accountId: e, userId: t, projectId: a }, { enabled: !1 }),
          { data: l, dataUpdatedAt: s, hasNextPage: d } = r(h, { accountId: e, userId: t, query: "" }),
          c = r(g.Q2, { accountId: e, userId: t }).get(a)
        return null != c && (null == c.confirmedAt || c.confirmedAt >= Math.max(o, s))
          ? c.isPinned
          : null != i && o >= s
            ? i.is_pinned
            : !!l?.some((e) => e.id === a) || ((null == l || !!d) && (i?.is_pinned ?? n ?? void 0))
      }),
      y = (0, n.N3)(s.u, ({ accountId: e, userId: t, query: a }, { get: n, scope: l }) => {
        let s = n(g.Q2, { accountId: e, userId: t }),
          c = ["space-pins-search", e, t, n(i.PO).accountUserId ?? null, a]
        return {
          queryKey: c,
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: n }) =>
            o.Request.safeGet("/pins/content", {
              parameters: { query: { limit: 20, after: t, include_pages: !1, include_sites: !0, query: a } },
              additionalHeaders: null == e ? void 0 : { [r.zBc]: e },
              signal: n,
            }),
          getNextPageParam: (e) => e.cursor,
          select: (e) =>
            (0, g.vZ)(
              e.pages.flatMap((e) => (0, f._)(e.items)),
              s,
              l.queryClient.getQueryState(c)?.dataUpdatedAt ?? 0,
              a,
            ),
          enabled: null != e && null != t && a.length > 0,
          staleTime: d.D.THIRTY_SECONDS,
          retry: !1,
        }
      }),
      b = (0, n.c4)(s.u, ({ accountId: e, userId: t, projectId: a }, { scope: n }) => ({
        mutationKey: ["sites-pins", e, t, a],
        mutationFn: ({ isPinned: e }) =>
          e
            ? o.Request.safePost("/websites/{project_id}/pin", { parameters: { path: { project_id: a } } })
            : o.Request.safeDelete("/websites/{project_id}/pin", { parameters: { path: { project_id: a } } }),
        onMutate: ({ isPinned: r, site: i }) => {
          let o = { accountId: e, userId: t },
            l = n.get(g.Q2, o).get(a),
            s = { isPinned: r, site: i ?? (0, p.D3)(n.queryClient, a) ?? l?.site, confirmedAt: null }
          return (n.set(g.Q2, o, (e) => new Map(e).set(a, s)), { previous: l, change: s })
        },
        onError: (r, i, o) => {
          null != o &&
            n.set(g.Q2, { accountId: e, userId: t }, (e) => {
              if (e.get(a) !== o.change) return e
              let t = new Map(e)
              return (null == o.previous ? t.delete(a) : t.set(a, o.previous), t)
            })
        },
        onSuccess: async (r, i, o) => {
          ;(r.is_pinned && null != e && (0, l.al)(n, e, t),
            (0, c.Ju)(n, {
              action: r.is_pinned
                ? c.in.CODEX_SITES_PINS_INTERACTION_ACTION_PINNED
                : c.in.CODEX_SITES_PINS_INTERACTION_ACTION_UNPINNED,
              projectId: r.project_id,
            }))
          let s = ["sites-pins", e, t, "list"],
            d = ["space-page-pins", e, t],
            p = ["space-pins-search", e, t]
          ;(await Promise.all([
            n.query.cancel(m, { accountId: e, userId: t, projectId: a }),
            n.queryClient.cancelQueries({ queryKey: u.APPGEN_PROJECTS_QUERY_KEY }),
            n.queryClient.cancelQueries({ queryKey: s }),
            n.queryClient.cancelQueries({ queryKey: d }),
            n.queryClient.cancelQueries({ queryKey: p }),
          ]),
            n.set(g.Q2, { accountId: e, userId: t }, (e) =>
              e.get(a) === o?.change
                ? new Map(e).set(a, { ...o.change, isPinned: r.is_pinned, confirmedAt: Date.now() })
                : e,
            ),
            n.query.setData(m, { accountId: e, userId: t, projectId: a }, r),
            n.queryClient.setQueriesData({ queryKey: u.APPGEN_PROJECTS_QUERY_KEY }, (e) => {
              var t, a
              return (
                (t = e),
                (a = r),
                null == t
                  ? t
                  : {
                      ...t,
                      pages: t.pages.map((e) => ({
                        ...e,
                        items: e.items.map((e) => (e.id === a.project_id ? { ...e, is_pinned: a.is_pinned } : e)),
                      })),
                    }
              )
            }),
            await Promise.all([
              n.queryClient.invalidateQueries({ queryKey: u.APPGEN_PROJECTS_QUERY_KEY }),
              n.queryClient.invalidateQueries({ queryKey: s }),
              n.queryClient.invalidateQueries({ queryKey: d }),
              n.queryClient.invalidateQueries({ queryKey: p }),
            ]))
        },
      }))
    a.d(t, {}, { $B: h, CB: b, Uv: v, rw: y, zb: m })
  },
  nJU9(e, t, a) {
    var n = a("DBCl"),
      r = a("XpTL"),
      i = a("E8Sp"),
      o = a("SPnB"),
      l = a("T8X0"),
      s = a("YWcr"),
      d = a("MX6A")
    a("Ot7V")
    var c = a("svjy"),
      u = a("H7Ld"),
      p = a("ABl9"),
      g = a("l5Vd")
    a.d(
      t,
      {},
      {
        $: function (e, t, a, n) {
          let f,
            m = e.get(c.g)
          switch (a.type) {
            case "create-asset":
              switch (a.assetType) {
                case "document":
                case "spreadsheet":
                case "presentation":
                case "pdf": {
                  let e =
                    "pdf" === a.assetType
                      ? { label: "PDF", pluginId: "pdf@openai-primary-runtime" }
                      : r.V[a.assetType].artifact
                  f = (0, u.KH)({ defaultPrompt: null, pluginDisplayName: e.label, pluginId: e.pluginId })
                  break
                }
                case "image":
                  f = m.formatMessage({
                    id: "appgenPage.createMenu.imagePrompt",
                    defaultMessage: "Create an image of …",
                    description: "Prefill prompt for creating an image from the Library",
                  })
              }
              break
            case "create":
              ;((0, l.Rm)(e, "work"),
                (f = `${m.formatMessage({ id: "appgenConversation.createPrompt.withSitesMention", defaultMessage: "Create a new site with {sitesMention}", description: "Prefilled prompt for starting a new site from the Sites page. {sitesMention} is the serialized inline mention of the Sites website-building plugin; preserve it without adding another at sign." }, { sitesMention: (0, d.xR)("@Sites", (0, s.vt)(p.$n)) })} `))
              break
            case "edit":
              ;(0, i.oo)(e, (0, g.z9)(a.projectId), {
                state: {
                  ...n,
                  siteEditLiveUrl: a.liveUrl,
                  siteEditContext: {
                    accountId: e.get(o.chatGptAuthenticatedAccountId$),
                    userId: e.get(o.chatGptAuthenticatedUserId$),
                    projectId: a.projectId,
                    projectTitle: a.projectTitle,
                    latestEditContext: a.latestEditContext,
                    prompt: a.prompt,
                  },
                },
              })
              return
            case "publish": {
              ;(0, l.Rm)(e, "work")
              let t = (0, s.h4)({ projectId: a.projectId, title: a.projectTitle })
              f = `${(0, u.KH)({ defaultPrompt: m.formatMessage({ id: "appgenConversation.publishPrompt", defaultMessage: "{siteMention} publish this site", description: "Prompt for asking the model to publish an existing unpublished Site" }, { siteMention: t }), pluginDisplayName: "Sites", pluginId: p.$n })} `
            }
          }
          t({
            ...n,
            activeProject: null,
            libraryFileCreation:
              ("create-asset" === a.type && "image" !== a.assetType && !!a.cloudLibraryEnabled) || void 0,
            prefillPrompt: f,
            startInSidebar: !0,
          })
        },
        m: function (e, t, a, r, i, o) {
          if (null == i) return
          let l = e
            .get(c.g)
            .formatMessage(
              {
                id: "appgenConversation.editFilePrompt",
                defaultMessage: "{fileMention} make these changes…",
                description: "Prompt for continuing work on a Library file in its original task",
              },
              { fileMention: (0, d.xR)(a, r) },
            )
          t((0, n._RT)((0, n.JXB)(i)), { state: { ...o, prefillPrompt: `${l} ` } })
        },
      },
    )
  },
  so0T(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("G7Oa"),
      o = a("v7qY"),
      l = a("wD9O"),
      s = a("SMIv"),
      d = a("jZDY")
    a.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            a,
            c = (0, r.c)(5),
            { children: u } = e,
            p = (0, l.dz)()
          return (0, d.I)()
            ? (c[0] !== u || c[1] !== p
                ? ((t =
                    null == u
                      ? null
                      : (0, n.jsx)("div", {
                          "aria-hidden": !0,
                          inert: !0,
                          style: {
                            height: `calc(100% / ${p})`,
                            transform: `scale(${p})`,
                            transformOrigin: "top left",
                            width: `calc(100% / ${p})`,
                          },
                          children: u,
                        })),
                  (c[0] = u),
                  (c[1] = p),
                  (c[2] = t))
                : (t = c[2]),
              c[3] !== t
                ? ((a = (0, o.createPortal)(
                    (0, n.jsx)(i.Hd, {
                      adjustScale: !1,
                      className: "pointer-events-none",
                      dropAnimation: null,
                      zIndex: s.I,
                      children: t,
                    }),
                    document.body,
                  )),
                  (c[3] = t),
                  (c[4] = a))
                : (a = c[4]),
              a)
            : null
        },
      },
    )
  },
  xs0e(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("Wf1j"),
      o = a("oyxz"),
      l = a("tWaO"),
      s = a("KIKs")
    function d(e) {
      let t,
        a = (0, r.c)(5),
        { dateString: n, now: o, dayBasis: s } = e,
        d = (0, i.A)()
      if (a[0] !== n || a[1] !== s || a[2] !== d || a[3] !== o) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let { unit: e, value: a } = (0, l.w)(n, o, s)
          switch (e) {
            case "minute":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMinutesAgo",
                  defaultMessage: "{value}m",
                  description: "Compact minutes-ago format",
                },
                { value: a },
              )
              break e
            case "hour":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactHoursAgo",
                  defaultMessage: "{value}h",
                  description: "Compact hours-ago format",
                },
                { value: a },
              )
              break e
            case "day":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactDaysAgo",
                  defaultMessage: "{value}d",
                  description: "Compact days-ago format",
                },
                { value: a },
              )
              break e
            case "week":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactWeeksAgo",
                  defaultMessage: "{value}w",
                  description: "Compact weeks-ago format",
                },
                { value: a },
              )
              break e
            case "month":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMonthsAgo",
                  defaultMessage: "{value}mo",
                  description: "Compact months-ago format",
                },
                { value: a },
              )
              break e
            case "year":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactYearsAgo",
                  defaultMessage: "{value}y",
                  description: "Compact years-ago format",
                },
                { value: a },
              )
              break e
          }
        }
        ;((a[0] = n), (a[1] = s), (a[2] = d), (a[3] = o), (a[4] = t))
      } else t = a[4]
      if (t !== Symbol.for("react.early_return_sentinel")) return t
    }
    function c(e) {
      let t,
        a,
        n = (0, r.c)(17),
        { dateString: o, now: l } = e,
        s = (0, i.A)()
      if (n[0] !== o || n[1] !== l) {
        let e = new Date(o)
        ;((t = Math.floor((l.getTime() - e.getTime()) / 6e4)), (n[0] = o), (n[1] = l), (n[2] = t))
      } else t = n[2]
      let d = -t
      if (d <= 0) {
        let e
        return (
          n[3] !== s
            ? ((e = s.formatRelativeTime(0, "second", { numeric: "auto" })), (n[3] = s), (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      if (d < 60) {
        let e
        return (
          n[5] !== s || n[6] !== d
            ? ((e = s.formatRelativeTime(d, "minute", { numeric: "always" })), (n[5] = s), (n[6] = d), (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      let c = Math.ceil(d / 60)
      if (c < 24) {
        let e
        return (
          n[8] !== s || n[9] !== c
            ? ((e = s.formatRelativeTime(c, "hour", { numeric: "always" })), (n[8] = s), (n[9] = c), (n[10] = e))
            : (e = n[10]),
          e
        )
      }
      let u = Math.ceil(c / 24)
      if (u < 7) {
        let e
        return (
          n[11] !== s || n[12] !== u
            ? ((e = s.formatRelativeTime(u, "day", { numeric: "always" })), (n[11] = s), (n[12] = u), (n[13] = e))
            : (e = n[13]),
          e
        )
      }
      return (
        n[14] !== s || n[15] !== u
          ? ((a = s.formatRelativeTime(Math.ceil(u / 7), "week", { numeric: "always" })),
            (n[14] = s),
            (n[15] = u),
            (n[16] = a))
          : (a = n[16]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a = (0, r.c)(10),
            { dateString: c, format: u, dayBasis: p } = e,
            g = void 0 === p ? "calendar" : p,
            f = (0, i.A)(),
            m = (0, s.wv)()
          if (m.getTime() - new Date(c).getTime() < 6e4) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(o.A, {
                    id: "wham.formattedRelativeDateTime.justNow",
                    defaultMessage: "just now",
                    description: "Relative timestamp for an event that happened less than a minute ago",
                  })),
                  (a[0] = e))
                : (e = a[0]),
              e
            )
          }
          if ("relative" === (void 0 === u ? "compact" : u)) {
            let e
            if (a[1] !== c || a[2] !== g || a[3] !== f || a[4] !== m) {
              let { unit: t, value: n } = (0, l.w)(c, m, g)
              ;((e = f.formatRelativeTime(-n, t, { numeric: "always", style: "narrow" })),
                (a[1] = c),
                (a[2] = g),
                (a[3] = f),
                (a[4] = m),
                (a[5] = e))
            } else e = a[5]
            return e
          }
          return (
            a[6] !== c || a[7] !== g || a[8] !== m
              ? ((t = (0, n.jsx)(d, { dateString: c, now: m, dayBasis: g })),
                (a[6] = c),
                (a[7] = g),
                (a[8] = m),
                (a[9] = t))
              : (t = a[9]),
            t
          )
        },
        SA: function (e) {
          let t,
            a = (0, r.c)(3),
            { dateString: i } = e,
            o = (0, s.wv)()
          return (
            a[0] !== i || a[1] !== o
              ? ((t = (0, n.jsx)(c, { dateString: i, now: o })), (a[0] = i), (a[1] = o), (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  wZQ4(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("zd8w"),
      o = a("RNul")
    function l(e) {
      return e.isIntersecting
    }
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            s,
            d,
            c,
            u = (0, r.c)(20),
            {
              loadingPlaceholder: p,
              hasNextPage: g,
              isFetchingNextPage: f,
              onLoadNextPage: m,
              rootMargin: h,
              rootRef: v,
            } = e,
            y = (0, i.useRef)(null)
          u[0] !== g || u[1] !== f || u[2] !== m
            ? ((t = () => {
                g && !f && m()
              }),
              (u[0] = g),
              (u[1] = f),
              (u[2] = m),
              (u[3] = t))
            : (t = u[3])
          let b = (0, i.useEffectEvent)(t)
          if (
            (u[4] !== g || u[5] !== f || u[6] !== b || u[7] !== h || u[8] !== v
              ? ((a = () => {
                  let e = y.current
                  if (null == e || !g || f) return
                  if ("u" < typeof IntersectionObserver) return void b()
                  let t = new IntersectionObserver(
                    (e) => {
                      e.some(l) && (t.disconnect(), b())
                    },
                    { root: v?.current, rootMargin: h },
                  )
                  return (
                    t.observe(e),
                    () => {
                      t.disconnect()
                    }
                  )
                }),
                (u[4] = g),
                (u[5] = f),
                (u[6] = b),
                (u[7] = h),
                (u[8] = v),
                (u[9] = a))
              : (a = u[9]),
            u[10] !== g || u[11] !== f || u[12] !== h || u[13] !== v
              ? ((s = [g, f, h, v]), (u[10] = g), (u[11] = f), (u[12] = h), (u[13] = v), (u[14] = s))
              : (s = u[14]),
            (0, i.useEffect)(a, s),
            !g && !f)
          )
            return null
          if (!f) {
            let e
            return (
              u[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)("div", { ref: y, className: "min-h-px w-full" })), (u[15] = e))
                : (e = u[15]),
              e
            )
          }
          if (void 0 !== p) {
            let e
            return (
              u[16] !== p
                ? ((e = (0, n.jsx)("div", { ref: y, className: "min-h-px w-full", children: p })),
                  (u[16] = p),
                  (u[17] = e))
                : (e = u[17]),
              e
            )
          }
          u[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, n.jsx)("div", {
                ref: y,
                className: "flex w-full justify-center py-3",
                children: (0, n.jsx)(o.y, { className: "icon-xs text-secondary" }),
              })),
              (u[18] = d))
            : (d = u[18])
          let w = d
          return (
            u[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(n.Fragment, { children: w })] })),
                (u[19] = c))
              : (c = u[19]),
            c
          )
        },
      },
    )
  },
  gBBY(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("hwkA"),
      o = a("slpy"),
      l = a("on57")
    function s(e) {
      ;("Enter" === e.key || " " === e.key) && e.stopPropagation()
    }
    function d(e) {
      e.stopPropagation()
    }
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            c,
            u,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            b,
            w = (0, r.c)(27)
          w[0] !== e
            ? (({
                className: a,
                actions: t,
                leadingAction: c,
                trailingAction: m,
                isVisible: g,
                tooltipSide: f,
                onTouchStart: u,
                ...p
              } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = a),
              (w[3] = c),
              (w[4] = u),
              (w[5] = p),
              (w[6] = g),
              (w[7] = f),
              (w[8] = m))
            : ((t = w[1]), (a = w[2]), (c = w[3]), (u = w[4]), (p = w[5]), (g = w[6]), (f = w[7]), (m = w[8]))
          let _ = void 0 !== g && g,
            x = void 0 === f ? "top" : f
          if (0 === t.length && null == c && null == m) return null
          w[9] !== u
            ? ((h = (e) => {
                ;(e.stopPropagation(), u?.(e))
              }),
              (w[9] = u),
              (w[10] = h))
            : (h = w[10])
          let S = _
              ? "opacity-100"
              : "opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 [@media(hover:none)]:opacity-100",
            I = (null != c || null != m) && "has-[[data-state=open]]:opacity-100"
          if (
            (w[11] !== a || w[12] !== S || w[13] !== I
              ? ((v = (0, l.A)("flex items-center gap-2", S, I, a)), (w[11] = a), (w[12] = S), (w[13] = I), (w[14] = v))
              : (v = w[14]),
            w[15] !== t || w[16] !== x)
          ) {
            let e
            ;(w[18] !== x
              ? ((e = (e) => {
                  let t = null == e.label,
                    a = (0, n.jsxs)(i.$, {
                      color: "secondary",
                      variant: "transparent",
                      pill: !t && void 0,
                      size: t ? "3xs" : void 0,
                      uniform: t,
                      "aria-label": e.ariaLabel,
                      onClick: (t) => {
                        ;(t.stopPropagation(), e.onClick())
                      },
                      onPointerDown: d,
                      onKeyDown: s,
                      children: [e.label, e.icon],
                    })
                  return t
                    ? (0, n.jsx)(o.m, { side: x, content: e.ariaLabel, children: a }, e.id)
                    : (0, n.jsx)("div", { children: a }, e.id)
                }),
                (w[18] = x),
                (w[19] = e))
              : (e = w[19]),
              (y = t.map(e)),
              (w[15] = t),
              (w[16] = x),
              (w[17] = y))
          } else y = w[17]
          return (
            w[20] !== c || w[21] !== p || w[22] !== h || w[23] !== v || w[24] !== y || w[25] !== m
              ? ((b = (0, n.jsxs)("div", { ...p, onTouchStart: h, className: v, children: [c, y, m] })),
                (w[20] = c),
                (w[21] = p),
                (w[22] = h),
                (w[23] = v),
                (w[24] = y),
                (w[25] = m),
                (w[26] = b))
              : (b = w[26]),
            b
          )
        },
      },
    )
  },
  BkbV(e, t, a) {
    var n = a("zTeN"),
      r = a("OWtl"),
      i = a("jAir"),
      o = a("pyoT")
    let l = (0, n.A4)(
      r.u,
      (e, { scope: t }) => t.query.getData(o.spacePageQuery$, e)?.metadata,
      (e, { scope: t, set: a }) => {
        let n = t.query.snapshot(o.spacePageQuery$, e),
          r = t.query.snapshot(o.spacePageAncestryQuery$, e),
          l = t.query.snapshot(o.spacePagesQuery$),
          s = [n, r, l].map(({ queryKey: e }) => t.queryClient.defaultQueryOptions({ queryKey: e }).queryHash),
          d = () =>
            a(
              [n.getData()?.metadata, r.getData()?.metadata, l.getData()?.items.find((t) => t.page_id === e)].reduce(
                (e, t) => (null != t && (null == e || (0, i.gN)(t, e)) ? t : e),
                void 0,
              ),
            )
        return (
          d(),
          t.queryClient.getQueryCache().subscribe((e) => {
            ;("added" === e.type || "updated" === e.type || "removed" === e.type) &&
              s.includes(e.query.queryHash) &&
              d()
          })
        )
      },
      { autoDispose: 6e4 },
    )
    a.d(t, {}, { j: l })
  },
  Zv5q(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("sO5n")
    a.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            a,
            o = (0, r.c)(6),
            { children: l, enabled: s } = e,
            { exportToGoogleDrive: d, connectDialog: c } = (0, i.i)(s)
          return (
            o[0] !== l || o[1] !== d ? ((t = l(d)), (o[0] = l), (o[1] = d), (o[2] = t)) : (t = o[2]),
            o[3] !== c || o[4] !== t
              ? ((a = (0, n.jsxs)(n.Fragment, { children: [t, c] })), (o[3] = c), (o[4] = t), (o[5] = a))
              : (a = o[5]),
            a
          )
        },
      },
    )
  },
  Xjj2(e, t, a) {
    var n = a("Qgfj"),
      r = a("YYL2")
    let i = (0, n.zR)({
        id: "codex.space.page.actions.moving",
        defaultMessage: "Moving…",
        description: "Action label while a selected Page is already moving",
      }),
      o = (0, n.YK)({
        codeLoadError: {
          id: "codex.space.page.crossSpaceMove.codeLoadError",
          defaultMessage: "Couldn’t open Move. Reload the app and try again",
          description:
            "Error shown when the code for the Page move dialog cannot load. Reloading the app allows the code to be requested again.",
        },
        loadError: {
          id: "codex.space.page.crossSpaceMove.loadError",
          defaultMessage: "Couldn’t load destinations",
          description: "Error shown when Page move destinations fail to load",
        },
        retry: {
          id: "codex.space.page.crossSpaceMove.retry",
          defaultMessage: "Try again",
          description: "Button that retries loading Page move destinations",
        },
        prepareError: {
          id: "codex.space.page.crossSpaceMove.prepareError",
          defaultMessage: "Couldn’t move this page to that destination",
          description: "Error shown when the server cannot prepare a Page move to the selected destination",
        },
        sourceOwnerRequired: {
          id: "codex.space.page.crossSpaceMove.sourceOwnerRequired",
          defaultMessage: "Only the source Space owner can move this page.",
          description: "Shown when a drop requires ownership of the Space the Page is leaving",
        },
        sourceAccessUnavailable: {
          id: "codex.space.page.crossSpaceMove.sourceAccessUnavailable",
          defaultMessage: "Couldn’t check your access to the source Space. Try dragging again.",
          description: "Shown when the source Space ownership lookup fails during a drop",
        },
        personalDriveOwnerRequired: {
          id: "codex.space.page.crossSpaceMove.personalDriveOwnerRequired",
          defaultMessage: "Only the owner of this private drive can move this page into a Space",
          description: "Shown when someone tries to move a page from another person's private drive into a Space",
        },
        trashed: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.trashed",
          defaultMessage: "This Page contains items in Trash and can’t be moved to another Space",
          description:
            "Error in the Page move destination dialog or failure toast after moving a Page to another Space is blocked by a child item in Trash. Page and Space are product names. This does not promise that the item can be restored.",
        },
        initializing: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.initializing",
          defaultMessage: "A child Page hasn’t finished being created. Try moving this Page once it’s ready",
          description:
            "Error in the Page move destination dialog or failure toast when a child Page is still being created and prevents moving its parent to another Space. The user can try the move again manually once creation finishes. Page and Space are product names.",
        },
        unavailable: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.unavailable",
          defaultMessage: "One or more child Pages are unavailable, so this Page can’t be moved to another Space",
          description:
            "Error in the Page move destination dialog or failure toast when unavailable child Pages prevent moving their parent to another Space and no more specific explanation is known. Page and Space are product names. Child identities and recovery instructions are intentionally omitted.",
        },
        failed: {
          id: "codex.space.page.crossSpaceMove.failed",
          defaultMessage: "Couldn’t move this page",
          description: "Error toast shown after a cross-Space Page move definitively fails",
        },
        cancelled: {
          id: "codex.space.page.crossSpaceMove.cancelled",
          defaultMessage: "The move was canceled",
          description: "Toast shown when a move was canceled and the user can prepare a new one",
        },
        retryCancelled: {
          id: "codex.space.page.crossSpaceMove.retryCancelled",
          defaultMessage: "Try again",
          description: "Prepare a new move to the same destination after the previous move was canceled",
        },
        backgroundError: {
          id: "codex.space.page.crossSpaceMove.backgroundError",
          defaultMessage: "Couldn’t finish moving this page",
          description: "Error toast shown when a cross-Space Page move cannot be recovered automatically",
        },
        retryConfirmation: {
          id: "codex.space.page.crossSpaceMove.retryConfirmation",
          defaultMessage: "Retry",
          description: "Action in a failed cross-Space Page move toast that retries confirmation recovery",
        },
        recoveryRequired: {
          id: "codex.space.page.crossSpaceMove.recoveryRequired",
          defaultMessage: "Couldn’t finish moving this page",
          description: "Error toast shown when a cross-Space Page move requires the user to retry recovery",
        },
        retryRecovery: {
          id: "codex.space.page.crossSpaceMove.retryRecovery",
          defaultMessage: "Retry",
          description: "Action in a failed cross-Space Page move toast that retries recovery",
        },
      })
    a.d(
      t,
      {},
      {
        N3: i,
        ji: o,
        oj: function (e) {
          if (e instanceof r.y9) {
            if ("move_blocked_by_descendant" === e.code) return o[e.reason ?? "unavailable"]
            if ("rejected" === e.code && e.diagnostics?.backendCode === "personal_drive_move_owner_required")
              return o.personalDriveOwnerRequired
          }
        },
      },
    )
  },
  U0qr(e, t, a) {
    a.d(t, { IN: () => I, z9: () => x, pq: () => S, BV: () => _, mw: () => k, cB: () => P, Rn: () => M })
    var n = a("zTeN"),
      r = a("SPnB"),
      i = a("NRR1"),
      o = a("pKVr"),
      l = a("e1xH"),
      s = a("sX33"),
      d = a("h3C3"),
      c = a("EqWS"),
      u = a("OWtl"),
      p = a("eShZ"),
      g = a("CqWC"),
      f = a("pyoT"),
      m = a("sDuP"),
      h = a("yr2s"),
      v = a("YZ2L")
    let y = (0, n.T1)(u.u, (e) => ({ pageId: null, timeout: void 0, removeDragImage: void 0 })),
      b = (0, n.vP)(u.u, null),
      w = (0, n.vP)(u.u, null),
      _ = (0, n.i1)(u.u, (e, { get: t }) => {
        let a = t(b)
        return (
          t(l.ev) &&
          t(w)?.pageId === e &&
          t(w)?.position == null &&
          a?.accountId === t(i.DO) &&
          a?.userId === t(r.chatGptAuthenticatedUserId$)
        )
      }),
      x = (0, n.i1)(u.u, (e, { get: t }) => {
        let a = t(h.R)
        return t(l.ev) && a?.pageId === e && a.accountId === t(i.DO) && a.userId === t(r.chatGptAuthenticatedUserId$)
      }),
      S = (0, n.i1)(u.u, (e, { get: t }) => {
        let a = t(b)
        return t(l.ev) &&
          a?.accountId === t(i.DO) &&
          a?.userId === t(r.chatGptAuthenticatedUserId$) &&
          t(w)?.pageId === e
          ? t(w)?.position
          : void 0
      }),
      I = (0, n.i1)(u.u, (e, { get: t }) => {
        let a = t(b)
        return t(l.ev) && a?.pageId === e && a.accountId === t(i.DO) && a.userId === t(r.chatGptAuthenticatedUserId$)
      }),
      P = {
        start(e, t, a, n) {
          E(e, a, n)
            ? ((e.get(y, null).removeDragImage = (function (e) {
                if ("function" != typeof e.dataTransfer.setDragImage) return
                let t = e.currentTarget.querySelector("[data-library-item-icon]"),
                  a = e.currentTarget.querySelector("[data-library-item-title]")
                if (null == t || null == a) return
                let n = e.currentTarget.ownerDocument,
                  r = getComputedStyle(t),
                  i = getComputedStyle(a),
                  o = t.currentCSSZoom || 1,
                  l = e.currentTarget.getBoundingClientRect().width / o,
                  s = a.getBoundingClientRect().width / o,
                  d = e.currentTarget.closest("[data-theme]")?.getAttribute("data-theme"),
                  c = n.createElement("div")
                ;((c.className = "pointer-events-none fixed -left-full top-0 flex pt-4"),
                  (c.ariaHidden = "true"),
                  (c.inert = !0),
                  (c.dir = i.direction),
                  (c.style.zoom = String(o)),
                  (c.style.maxWidth = `min(${l}px, 20rem)`),
                  null != d && (c.dataset.theme = d))
                let u = n.importNode(t, !0)
                ;((u.style.width = r.width),
                  (u.style.height = r.height),
                  (u.style.font = r.font),
                  (u.style.color = r.color),
                  u.classList.add("shrink-0"))
                let p = n.importNode(a, !0)
                ;((p.style.maxWidth = `${s}px`),
                  (p.style.font = i.font),
                  (p.style.letterSpacing = i.letterSpacing),
                  (p.style.color = i.color),
                  p.classList.add("min-w-0", "truncate"))
                let g = n.createElement("div")
                return (
                  (g.className =
                    "inline-flex min-w-0 items-center gap-2 rounded-lg border border-default bg-surface-secondary px-3 py-2 shadow-lg"),
                  g.append(u, p),
                  c.append(g),
                  n.body.append(c),
                  e.dataTransfer.setDragImage(c, 0, 0),
                  () => c.remove()
                )
              })(t)),
              t.dataTransfer.clearData(),
              (t.dataTransfer.effectAllowed = "move"),
              t.dataTransfer.setData("application/x-codex-page-move", a))
            : t.preventDefault()
        },
        dropFromPointer(e, t, a, n) {
          t !== a && k(e, t, a, void 0) && E(e, t, n) && T(e, a)
        },
        end(e, t) {
          e.get(b)?.pageId === t ? A(e) : e.get(w)?.pageId === t && (e.set(w, null), j(e))
        },
        cancelSource(e, t) {
          ;(e.get(b)?.ownerId === t && A(e), e.get(h.R)?.ownerId === t && e.set(h.R, null))
        },
        over(e, t, a, n, r = !1) {
          let i = C(e)
          if (null == i) return
          ;(t.preventDefault(), t.stopPropagation())
          let o = D(t, r),
            s = e.get(l.Xk),
            d = e.get(w)
          if (d?.pageId === a && d.position === o && d.crossMovesEnabled === s) {
            t.dataTransfer.dropEffect = "move"
            return
          }
          if (i.pageId === a || !k(e, i.pageId, a, o)) {
            ;((t.dataTransfer.dropEffect = "none"), e.set(w, null), j(e))
            return
          }
          ;((t.dataTransfer.dropEffect = "move"), e.set(w, { pageId: a, position: o, crossMovesEnabled: s }))
          let c = e.get(y, null)
          ;(c.pageId === a && null == o) ||
            (j(e),
            null != a &&
              null == o &&
              null != n &&
              ((c.pageId = a),
              (c.timeout = setTimeout(() => {
                ;(j(e), C(e) === i && e.get(w)?.pageId === a && n())
              }, 500))))
        },
        leave(e, t, a) {
          ;(t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget)) ||
            (e.get(w)?.pageId === a && (e.set(w, null), j(e)))
        },
        drop(e, t, a, n = !1) {
          if (null == C(e)) return
          ;(t.preventDefault(), t.stopPropagation())
          let r = e.get(w),
            i = D(t, n)
          if (r?.pageId !== a || r.position !== i) {
            ;((t.dataTransfer.dropEffect = "none"), A(e))
            return
          }
          T(e, a, i)
        },
        expandDrop(e, t, a, n) {
          null != a &&
            e.get(l.ev) &&
            e.get(w)?.pageId === a &&
            e.get(w)?.position == null &&
            t.dataTransfer.types.includes("application/x-codex-page-move") &&
            t.dataTransfer.getData("application/x-codex-page-move") !== a &&
            n()
        },
        root: function (e, t) {
          if (!t.defaultPrevented && t.target instanceof Element && t.currentTarget.contains(t.target))
            if (
              null != t.target.closest("[data-library-item]") &&
              null == t.target.closest('[data-library-column="selection"]')
            ) {
              let t = e.get(w)
              null != t && null == t.pageId && e.set(w, null)
            } else "drop" === t.type ? P.drop(e, t, null) : P.over(e, t, null)
        },
      }
    function M(e, t, a) {
      return {
        onDragOverCapture: (n) => P.over(e, n, t, a?.onExpand, a?.allowPosition),
        onDragLeaveCapture: (a) => P.leave(e, a, t),
        onDropCapture: (n) => {
          ;(a?.onExpand != null && P.expandDrop(e, n, t, a.onExpand), P.drop(e, n, t, a?.allowPosition))
        },
      }
    }
    function C(e) {
      let t = e.get(b),
        a = e.get(h.R)
      if (
        null != t &&
        e.get(l.ev) &&
        null == e.get(s.Ez) &&
        (a?.accountId !== t.accountId || a?.userId !== t.userId) &&
        t.accountId === e.get(i.DO) &&
        t.userId === e.get(r.chatGptAuthenticatedUserId$)
      )
        return t
    }
    async function T(e, t, a) {
      let n = C(e)
      if ((A(e), null == n || n.pageId === t)) return
      let u = (0, c.zl)(e),
        y = u.get(n.pageId),
        b = null == t ? void 0 : u.get(t),
        w = e.query.getData(f.spacesQuery$)?.items.find((e) => e.root_page_id === t),
        _ = null == a && (0, v.Gc)(y, t),
        x =
          null != a &&
          b?.display_metadata_included !== !1 &&
          b?.parent != null &&
          "page_id" in b.parent &&
          (0, v.Gc)(y, b.parent.page_id),
        S = {
          ...n,
          display:
            null == a && null != y && (null == t || null != b || null != w)
              ? {
                  beforePageId: void 0,
                  page: {
                    ...y,
                    parent: null == t ? null : { page_id: t, title: b?.title ?? w?.name ?? "" },
                    drive_scope: null != w ? "space" : (b?.drive_scope ?? "personal"),
                    drive_space_id: w?.id ?? b?.drive_space_id ?? null,
                  },
                }
              : void 0,
        }
      e.set(h.R, S)
      let I = () =>
          e.get(h.R) === S &&
          e.get(l.ev) &&
          null == e.get(s.Ez) &&
          n.accountId === e.get(i.DO) &&
          n.userId === e.get(r.chatGptAuthenticatedUserId$),
        P = (t) =>
          (0, g.AQ)(e, t, n.accountId, n.userId, { parentMetadata: t === n.pageId && _ ? "refresh" : "required" })
      try {
        let r,
          [i, s] = x ? [y, b] : await Promise.all([P(n.pageId), null == t ? null : P(t)])
        if (!I()) return
        if (null == i || (null != t && null == s)) {
          ;((0, m.Me)(e), (0, d.v)(e))
          return
        }
        if ((null == a && (0, v.Gc)(i, t)) || !k(e, i.page_id, t, a)) return
        let u = (0, v._)(i, s)
        if (null == a && null != u && e.get(l.Xk) && !e.get(l.QV)) {
          let t,
            a = e.get(o.t5, u)?.isOwner
          if (null == a) {
            try {
              a = (await (0, o.hj)(e, u))?.isOwner
            } catch (e) {
              ;((t = e), e instanceof p.fk && [403, 404, 410].includes(e.status) && (a = !1))
            }
            if (!I()) return
          }
          if (!0 !== a && !e.get(l.QV)) {
            ;((0, m.Me)(e), (0, d.L)(e, !1 === a ? "owner_required" : "lookup_failed", t))
            return
          }
        }
        let g = t
        if (null != a) {
          if (s?.parent == null || !("page_id" in s.parent)) return
          g = s.parent.page_id
        }
        if (null != a && null != s && null != g) {
          let n = (0, c.ne)(s, g, (0, c.zl)(e).values()),
            o = n.findIndex((e) => e.page_id === i.page_id),
            l = n.findIndex((e) => e.page_id === s.page_id)
          if (-1 !== o && o === l + ("before" === a ? -1 : 1)) return
          let d = n.filter((e) => e.page_id !== i.page_id)
          r = "before" === a ? t : (d[d.findIndex((e) => e.page_id === s.page_id) + 1]?.page_id ?? null)
        }
        if (null != a && null != g && !x && (await P(g), !I())) return
        ;(0, v.ck)(
          e,
          { pageId: n.pageId, parentPageId: g, beforePageId: r },
          { ownerId: n.ownerId, onStarted: () => n.onStarted?.(g) },
        )
      } finally {
        e.get(h.R) === S && e.set(h.R, null)
      }
    }
    function A(e) {
      let t = e.get(y, null)
      ;(t.removeDragImage?.(), (t.removeDragImage = void 0), j(e), e.set(b, null), e.set(w, null))
    }
    function E(e, t, a) {
      return (
        A(e),
        !(!e.get(l.ev) || e.get(s.og, t) || e.get(x, t)) &&
          (e.set(b, { ...a, pageId: t, accountId: e.get(i.DO), userId: e.get(r.chatGptAuthenticatedUserId$) }), !0)
      )
    }
    function j(e) {
      let t = e.get(y, null)
      ;(clearTimeout(t.timeout), (t.timeout = void 0), (t.pageId = null))
    }
    function D(e, t) {
      if (!t) return
      let a = e.currentTarget.getBoundingClientRect()
      if (0 === a.height) return
      let n = (e.clientY - a.top) / a.height
      return n < 0.25 ? "before" : n > 0.75 ? "after" : void 0
    }
    function k(e, t, a, n) {
      if (null == a) return !1 !== (0, c.L1)(e, { pageId: t, parentPageId: null, beforePageId: void 0 })
      let r = (0, c.zl)(e),
        i = r.get(t),
        o = r.get(a)
      return (
        (null != n || null == o || !!(0, c.Sn)(o)) &&
        (null == i ||
          null == o ||
          ((null == n || !1 === o.display_metadata_included || (null != o.parent && "page_id" in o.parent)) &&
            ((i.drive_scope === o.drive_scope &&
              i.drive_space_id === o.drive_space_id &&
              i.owner_workspace_id === o.owner_workspace_id) ||
              (null == n && e.get(l.Xk)))))
      )
    }
  },
  YZ2L(e, t, a) {
    var n = a("SPnB"),
      r = a("NRR1"),
      i = a("e1xH"),
      o = a("EqWS"),
      l = a("sDuP"),
      s = a("sX33"),
      d = a("h3C3"),
      c = a("n8kT")
    function u(e, t, a) {
      return (
        null != e &&
        !1 !== e.display_metadata_included &&
        (null == e.parent
          ? null == t || (null != a && e.drive_space_id === a.id && t === a.root_page_id)
          : "page_id" in e.parent && e.parent.page_id === t)
      )
    }
    a.d(
      t,
      {},
      {
        Gc: u,
        _: function (e, t) {
          let a = e?.drive_space_id
          return e?.drive_scope !== "personal" && null != a && a !== t?.drive_space_id ? a : void 0
        },
        ck: function (e, t, a) {
          if (!e.get(i.ev) || null != e.get(s.Ez) || t.pageId === t.parentPageId) return
          if (u((0, o.zl)(e).get(t.pageId), t.parentPageId)) {
            if (null != t.parentPageId && void 0 !== t.beforePageId && !1 !== (0, o.L1)(e, t)) {
              let a = e.get(r.DO),
                i = e.get(n.chatGptAuthenticatedUserId$)
              e.get(o.O_).mutate(t, {
                onError: () => {
                  e.get(r.DO) === a && e.get(n.chatGptAuthenticatedUserId$) === i && (0, d.v)(e)
                },
              })
            }
            return
          }
          let p = (0, s.qq)(e, t.pageId, t.parentPageId, t.beforePageId),
            g = null == p ? void 0 : (0, s.QP)(e, t.pageId, p)
          if (null == g || null == p) {
            ;((0, l.Me)(e), (0, d.v)(e))
            return
          }
          ;(0, c.h)(e, g, p, a)
        },
      },
    )
  },
  h3C3(e, t, a) {
    var n = a("ABep"),
      r = a("oyxz"),
      i = a("SGsN"),
      o = a("mNPx"),
      l = a("Xjj2")
    a.d(
      t,
      {},
      {
        L: function (e, t, a) {
          let s = "owner_required" === t ? l.ji.sourceOwnerRequired : l.ji.sourceAccessUnavailable
          e.get(i.Id).danger((0, n.jsx)(r.A, { ...s }), {
            errorAnalytics: {
              toastId: "codex.space.page.crossSpaceMove.sourceAccess",
              userFacingError: null == a ? void 0 : (0, o.jq)("pages.move.prepare", a),
            },
          })
        },
        v: function (e, t, a) {
          let s = (0, l.oj)(t) ?? (a ? l.ji.cancelled : l.ji.failed)
          e.get(i.Id).danger((0, n.jsx)(r.A, { ...s }), {
            primaryAction: a && { label: (0, n.jsx)(r.A, { ...l.ji.retryCancelled }), onClick: a },
            errorAnalytics: {
              toastId: "codex.space.page.crossSpaceMove.failed",
              userFacingError: null == t ? void 0 : (0, o.jq)("pages.move.prepare", t),
            },
          })
        },
      },
    )
  },
  Mnlr(e, t, a) {
    var n = a("Vw7Q"),
      r = a("EXK0"),
      i = a("y5af"),
      o = a("Og9d")
    a.d(
      t,
      {},
      {
        i: function (e, t, a, l) {
          let s = t.indexOf(a),
            d = t.indexOf(l)
          if (-1 === s || -1 === d || s === d) return
          let c = e.get(o.lI),
            u = new Set(c)
          e.set(
            r.AG,
            (0, i.fp)({
              threadIds: [...c, ...t.filter((e) => !u.has(e))],
              visibleThreadIds: t,
              nextVisibleThreadIds: (0, n.be)(t, s, d),
            }),
          )
        },
      },
    )
  },
  rDD2(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("hwkA"),
      o = a("zTeN"),
      l = a("zd8w"),
      s = a("Wf1j"),
      d = a("ygO2"),
      c = a("rmk3"),
      u = a("GO7r"),
      p = a("pKVr"),
      g = a("Wj4L"),
      f = a("Emb5"),
      m = a("OWtl"),
      h = a("V5ob"),
      v = a("HgLj"),
      y = a("OoIX"),
      b = a("Um9I"),
      w = a("NobM"),
      _ = a("qLyg")
    function x(e) {
      let t,
        a,
        p,
        g,
        f,
        h,
        y = (0, r.c)(29),
        {
          ref: b,
          awaitBeforeOpen: x,
          libraryPresentation: S,
          documentType: I,
          getItems: P,
          kind: M,
          loadingMessage: C,
          onAfterClose: T,
          onBeforeOpen: A,
          onOpenChange: E,
          open: j,
          title: D,
        } = e,
        k = void 0 !== S && S,
        R = void 0 === I ? "page" : I,
        N = (0, o.gh)(m.u),
        O = (0, s.A)(),
        q = (0, l.useRef)(null)
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) =>
            e.map((e) =>
              "share-page-or-space" !== e.id
                ? e
                : {
                    ...e,
                    selectAfterClose: !0,
                    onSelect: () => {
                      ;(q.current?.isConnected && q.current.focus({ preventScroll: !0 }), e.onSelect?.())
                    },
                  },
            )),
          (y[0] = t))
        : (t = y[0])
      let B = t
      if ("space" === M) {
        let e
        ;(y[1] !== O || y[2] !== D
          ? ((e = O.formatMessage(
              {
                id: "codex.space.sidebar.spaceActions",
                defaultMessage: "Space actions for {title}",
                description:
                  "Accessible label for the actions menu beside a shared Space in the Pages sidebar. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
              },
              { title: D },
            )),
            (y[1] = O),
            (y[2] = D),
            (y[3] = e))
          : (e = y[3]),
          (a = e))
      } else if (D.trim()) {
        let e
        ;(y[4] !== R || y[5] !== O || y[6] !== D
          ? ((e = O.formatMessage(
              {
                id: "codex.space.page.actions.byDocumentType",
                defaultMessage:
                  "{documentType, select, granola_presentation {Slide actions for {title}} granola_workbook {Sheet actions for {title}} other {Page actions for {title}}}",
                description:
                  "Accessible label for the actions menu beside a Page title in the Space sidebar. documentType selects slide, sheet, or page for the current document.",
              },
              { documentType: R ?? "page", title: D },
            )),
            (y[4] = R),
            (y[5] = O),
            (y[6] = D),
            (y[7] = e))
          : (e = y[7]),
          (a = e))
      } else {
        let e
        ;(y[8] !== R || y[9] !== O
          ? ((e = O.formatMessage(
              {
                id: "codex.space.page.actions.untitled",
                defaultMessage:
                  "{documentType, select, granola_document {Page actions for Untitled doc} granola_whiteboard {Page actions for Untitled canvas} granola_workbook {Sheet actions for Untitled sheet} granola_presentation {Slide actions for Untitled slide} other {Page actions for Untitled page}}",
                description:
                  "Accessible label for the actions menu beside an untitled document in the Space sidebar. documentType selects the untitled name for a Doc, canvas, sheet, presentation, or ordinary Page.",
              },
              { documentType: R },
            )),
            (y[8] = R),
            (y[9] = O),
            (y[10] = e))
          : (e = y[10]),
          (a = e))
      }
      let Q = C ?? ("space" === M ? w.Nh.loadingSpace : void 0)
      return (
        y[11] !== P
          ? ((p = () => {
              let e = P()
              return Array.isArray(e) ? B(e) : e.then(B)
            }),
            (y[11] = P),
            (y[12] = p))
          : (p = y[12]),
        y[13] !== A || y[14] !== N
          ? ((g = () => (_.O.prefetch(N), A?.())), (y[13] = A), (y[14] = N), (y[15] = g))
          : (g = y[15]),
        y[16] !== k || y[17] !== j || y[18] !== b || y[19] !== a
          ? ((f = k
              ? (0, n.jsx)(d.$, {
                  ref: (0, v.P)(b, q),
                  "aria-expanded": j,
                  "aria-haspopup": "menu",
                  "aria-label": a,
                  color: "ghost",
                  size: "actionSm",
                  uniform: !0,
                  children: (0, n.jsx)(u.l0Y, {}),
                })
              : (0, n.jsx)(i.$, {
                  ref: (0, v.P)(b, q),
                  "aria-expanded": j,
                  "aria-haspopup": "menu",
                  "aria-label": a,
                  color: "secondary",
                  variant: "transparent",
                  size: "3xs",
                  uniform: !0,
                  children: (0, n.jsx)(u.l0Y, {}),
                })),
            (y[16] = k),
            (y[17] = j),
            (y[18] = b),
            (y[19] = a),
            (y[20] = f))
          : (f = y[20]),
        y[21] !== x || y[22] !== T || y[23] !== E || y[24] !== Q || y[25] !== p || y[26] !== g || y[27] !== f
          ? ((h = (0, n.jsx)(c.t, {
              preserveBrowserContextMenu: !0,
              align: "start",
              awaitBeforeOpen: x,
              contentWidth: "menuFixed",
              loadingMessage: Q,
              getItems: p,
              onBeforeOpen: g,
              onOpenChange: E,
              onAfterClose: T,
              trigger: "click",
              children: f,
            })),
            (y[21] = x),
            (y[22] = T),
            (y[23] = E),
            (y[24] = Q),
            (y[25] = p),
            (y[26] = g),
            (y[27] = f),
            (y[28] = h))
          : (h = y[28]),
        h
      )
    }
    a.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            a,
            i,
            d,
            c,
            v,
            w = (0, r.c)(31),
            { createDisabled: _, getItems: S, kind: I, onAddSubpage: P, ...M } = e,
            C = void 0 === I ? "page" : I,
            T = (0, o.gh)(m.u),
            { canCreatePage: A, page: E, pageId: j, title: D } = M,
            [k, R] = (0, l.useState)(!1),
            N = (0, s.A)(),
            O = A && null != P && !(0, g.qt)(E),
            q = (0, o._U)(b.jy, E ?? j),
            B = (0, o._U)(O ? y.m2 : null, j),
            Q = O && null == B && "request_changes" !== q,
            U = null == E ? "page" : (0, g.th)(E)
          t =
            "space" === C
              ? N.formatMessage(
                  {
                    id: "codex.space.sidebar.addPageToSpace",
                    defaultMessage: "Add page to {title}",
                    description:
                      "Accessible label and tooltip for the plus button that creates a Page inside the shared Space named {title}",
                  },
                  { title: D },
                )
              : D.trim()
                ? N.formatMessage(
                    {
                      id: "codex.space.page.addSubpageToPage",
                      defaultMessage: "Add subpage to {title}",
                      description:
                        "Accessible label and tooltip for the plus button that creates a child Page under the shared Page named {title}",
                    },
                    { title: D },
                  )
                : N.formatMessage(
                    {
                      id: "codex.space.page.addSubpageToPage.untitled",
                      defaultMessage:
                        "Add subpage to {documentType, select, granola_document {Untitled doc} granola_whiteboard {Untitled canvas} granola_workbook {Untitled sheet} granola_presentation {Untitled presentation} other {Untitled page}}",
                      description:
                        "Accessible label and tooltip for creating a child Page under an untitled document in the Space sidebar. documentType selects the untitled name for a Doc, canvas, sheet, presentation, or ordinary Page.",
                    },
                    { documentType: U },
                  )
          let L = E?.drive_space_id,
            z = null != S && void 0
          ;(w[0] !== M || w[1] !== A || w[2] !== S || w[3] !== C || w[4] !== T || w[5] !== L
            ? ((a =
                S ??
                (() =>
                  (0, f.Xc)({
                    ...M,
                    scope: T,
                    kind: C,
                    canCreatePage: "space" === C && null != L ? T.get(p.t5, L)?.canWrite === !0 : A,
                  }))),
              (w[0] = M),
              (w[1] = A),
              (w[2] = S),
              (w[3] = C),
              (w[4] = T),
              (w[5] = L),
              (w[6] = a))
            : (a = w[6]),
            w[7] !== S || w[8] !== C || w[9] !== T || w[10] !== L
              ? ((i = null == S && null != L ? () => (0, f.cZ)(T, L, C) : void 0),
                (w[7] = S),
                (w[8] = C),
                (w[9] = T),
                (w[10] = L),
                (w[11] = i))
              : (i = w[11]),
            w[12] !== U ||
            w[13] !== C ||
            w[14] !== k ||
            w[15] !== R ||
            w[16] !== z ||
            w[17] !== a ||
            w[18] !== i ||
            w[19] !== D
              ? ((d = (0, n.jsx)(x, {
                  awaitBeforeOpen: z,
                  documentType: U,
                  getItems: a,
                  kind: C,
                  onOpenChange: R,
                  open: k,
                  onBeforeOpen: i,
                  title: D,
                })),
                (w[12] = U),
                (w[13] = C),
                (w[14] = k),
                (w[15] = R),
                (w[16] = z),
                (w[17] = a),
                (w[18] = i),
                (w[19] = D),
                (w[20] = d))
              : (d = w[20]))
          let K = d
          w[21] !== t || w[22] !== Q || w[23] !== _ || w[24] !== P
            ? ((c = Q
                ? (0, n.jsx)(h.BE, { ariaLabel: t, disabled: _, onClick: P, children: (0, n.jsx)(u.mgx, {}) })
                : null),
              (w[21] = t),
              (w[22] = Q),
              (w[23] = _),
              (w[24] = P),
              (w[25] = c))
            : (c = w[25])
          let V = Q ? t : void 0
          return (
            w[26] !== K || w[27] !== k || w[28] !== c || w[29] !== V
              ? ((v = (0, n.jsx)(h.NF, { action: c, actionTooltipContent: V, isMenuOpen: k, menu: K })),
                (w[26] = K),
                (w[27] = k),
                (w[28] = c),
                (w[29] = V),
                (w[30] = v))
              : (v = w[30]),
            v
          )
        },
        w: x,
      },
    )
  },
  i4m7(e, t, a) {
    a.d(
      t,
      {},
      {
        E: function (e, t) {
          let a = e.state?.spaceSidebarAccountId === t ? e.state : null
          return {
            sidebarArea: "space",
            spaceSidebarAccountId: t ?? void 0,
            spaceSidebarRootPageId: a?.spaceSidebarRootPageId,
            spaceSidebarPersonal: a?.spaceSidebarPersonal ?? "/space/personal" === e.pathname,
          }
        },
      },
    )
  },
  kdKV(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("on57"),
      o = a("zd8w"),
      l = a("Lzlp")
    a.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            a,
            s = (0, r.c)(5),
            { active: d, indented: c, orientation: u } = e,
            p = void 0 !== c && c,
            g = void 0 === u ? "horizontal" : u,
            f = (0, o.useContext)(l.Bo)
          return !1 === d || (void 0 === d && null == f && void 0 !== f)
            ? null
            : (s[0] !== p || s[1] !== g
                ? ((t = (0, i.A)(
                    "relative before:absolute before:rounded-full before:bg-text-info before:content-[''] after:absolute after:size-2 after:rounded-full after:border-2 after:border-text-info after:bg-surface-secondary after:content-['']",
                    "vertical" === g
                      ? "h-full w-0 before:-left-px before:top-2 before:bottom-2 before:w-0.5 after:-left-1 after:top-1"
                      : (0, i.A)(
                          "h-0 before:top-[-1px] before:right-2 before:h-0.5 after:top-[-4px]",
                          p ? "before:left-8 after:left-7" : "before:left-2 after:left-1",
                        ),
                  )),
                  (s[0] = p),
                  (s[1] = g),
                  (s[2] = t))
                : (t = s[2]),
              s[3] !== t
                ? ((a = (0, n.jsx)("div", { "aria-hidden": !0, className: t, role: "presentation" })),
                  (s[3] = t),
                  (s[4] = a))
                : (a = s[4]),
              a)
        },
      },
    )
  },
  V5ob(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("hwkA"),
      o = a("slpy"),
      l = a("on57"),
      s = a("zd8w"),
      d = a("rmk3"),
      c = a("GO7r"),
      u = a("gBBY"),
      p = a("Fcgn"),
      g = a("gEXS")
    function f(e) {
      e.stopPropagation()
    }
    function m(e) {
      ;("Enter" === e.key || " " === e.key) && e.stopPropagation()
    }
    function h(e) {
      e.stopPropagation()
    }
    function v(e) {
      return e.stopPropagation()
    }
    a.d(
      t,
      {},
      {
        BE: function (e) {
          let t,
            a,
            o,
            s,
            d,
            c,
            u,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            b = (0, r.c)(30)
          b[0] !== e
            ? (({
                ariaBusy: t,
                ariaExpanded: a,
                ariaHaspopup: o,
                ariaLabel: s,
                children: d,
                className: c,
                disabled: u,
                iconSize: p,
                onClick: g,
                variant: m,
                ...f
              } = e),
              (b[0] = e),
              (b[1] = t),
              (b[2] = a),
              (b[3] = o),
              (b[4] = s),
              (b[5] = d),
              (b[6] = c),
              (b[7] = u),
              (b[8] = p),
              (b[9] = g),
              (b[10] = f),
              (b[11] = m))
            : ((t = b[1]),
              (a = b[2]),
              (o = b[3]),
              (s = b[4]),
              (d = b[5]),
              (c = b[6]),
              (u = b[7]),
              (p = b[8]),
              (g = b[9]),
              (f = b[10]),
              (m = b[11]))
          let w = void 0 === m ? "action" : m,
            _ = "disclosure" === w && "group/disclosure"
          b[12] !== c || b[13] !== _ ? ((h = (0, l.A)(_, c)), (b[12] = c), (b[13] = _), (b[14] = h)) : (h = b[14])
          let x = t ? "primary" : "secondary",
            S = "disclosure" === w ? "md" : "3xs"
          return (
            b[15] !== g
              ? ((v = (e) => {
                  ;(e.stopPropagation(), g?.(e))
                }),
                (b[15] = g),
                (b[16] = v))
              : (v = b[16]),
            b[17] !== t ||
            b[18] !== a ||
            b[19] !== o ||
            b[20] !== s ||
            b[21] !== d ||
            b[22] !== u ||
            b[23] !== p ||
            b[24] !== f ||
            b[25] !== h ||
            b[26] !== x ||
            b[27] !== S ||
            b[28] !== v
              ? ((y = (0, n.jsx)(i.$, {
                  ...f,
                  className: h,
                  color: x,
                  variant: "transparent",
                  size: S,
                  iconSize: p,
                  uniform: !0,
                  "aria-label": s,
                  "aria-haspopup": o,
                  "aria-busy": t,
                  "aria-expanded": a,
                  disabled: u,
                  onClick: v,
                  children: d,
                })),
                (b[17] = t),
                (b[18] = a),
                (b[19] = o),
                (b[20] = s),
                (b[21] = d),
                (b[22] = u),
                (b[23] = p),
                (b[24] = f),
                (b[25] = h),
                (b[26] = x),
                (b[27] = S),
                (b[28] = v),
                (b[29] = y))
              : (y = b[29]),
            y
          )
        },
        NF: function (e) {
          let t,
            a,
            i,
            s,
            d,
            c,
            g = (0, r.c)(20),
            {
              action: v,
              actionTooltipContent: y,
              actionTooltipDisabled: b,
              alwaysShowAction: w,
              indicator: _,
              indicatorLabel: x,
              isMenuOpen: S,
              menu: I,
            } = e,
            P = void 0 !== w && w,
            M =
              P || S
                ? "opacity-100"
                : "opacity-[var(--sidebar-row-action-opacity,0)] group-focus-visible/folder-row:opacity-100 group-hover/folder-row:opacity-100 [@media(hover:none)]:opacity-100",
            C = S
              ? "opacity-100"
              : "w-[var(--sidebar-row-menu-width,0px)] opacity-[var(--sidebar-row-action-opacity,0)] [overflow:var(--sidebar-row-menu-overflow,hidden)] group-focus-visible/folder-row:w-auto group-focus-visible/folder-row:overflow-visible group-focus-visible/folder-row:opacity-100 group-hover/folder-row:w-auto group-hover/folder-row:overflow-visible group-hover/folder-row:opacity-100 focus-within:w-auto focus-within:overflow-visible focus-within:opacity-100 [@media(hover:none)]:w-auto [@media(hover:none)]:overflow-visible [@media(hover:none)]:opacity-100",
            T = !P && null == _ && C
          return (
            g[0] !== T ? ((t = (0, l.A)("max-w-[50%] min-w-0", T)), (g[0] = T), (g[1] = t)) : (t = g[1]),
            g[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = []), (g[2] = a)) : (a = g[2]),
            g[3] !== I || g[4] !== C
              ? ((i =
                  null == I ? null : (0, n.jsx)("div", { className: (0, l.A)("flex items-center", C), children: I })),
                (g[3] = I),
                (g[4] = C),
                (g[5] = i))
              : (i = g[5]),
            g[6] !== v || g[7] !== y || g[8] !== b || g[9] !== M || g[10] !== _ || g[11] !== x || g[12] !== S
              ? ((s =
                  null == v && null == _
                    ? null
                    : (0, n.jsxs)("div", {
                        className: (0, l.A)(
                          "grid h-5 max-w-48 min-w-5 shrink grid-cols-1 items-center group-hover/folder-row:w-5 [@media(hover:hover)]:group-focus-visible/folder-row:w-5 [@media(hover:none)]:flex [@media(hover:none)]:w-auto",
                          S ? "w-5" : "w-[var(--sidebar-row-action-width,auto)]",
                        ),
                        children: [
                          null == _
                            ? null
                            : (0, n.jsxs)("div", {
                                className: (0, l.A)(
                                  "col-start-1 row-start-1 flex min-w-0 items-center justify-end gap-1.5 whitespace-nowrap group-hover/folder-row:invisible [@media(hover:hover)]:group-focus-visible/folder-row:invisible [@media(hover:none)]:visible",
                                  S ? "invisible" : "[visibility:var(--sidebar-row-indicator-visibility,visible)]",
                                ),
                                children: [
                                  null != x &&
                                    (0, n.jsx)("span", {
                                      className: "min-w-0 truncate text-codex-description",
                                      children: x,
                                    }),
                                  (0, n.jsx)(p.C, { children: _ }),
                                ],
                              }),
                          (0, n.jsx)(o.m, {
                            content: y,
                            disabled: b,
                            openDelay: 250,
                            children: (0, n.jsx)("span", {
                              className: (0, l.A)(
                                "col-start-1 row-start-1 inline-flex justify-self-end [@media(hover:none)]:shrink-0",
                                M,
                              ),
                              children: v,
                            }),
                          }),
                        ],
                      })),
                (g[6] = v),
                (g[7] = y),
                (g[8] = b),
                (g[9] = M),
                (g[10] = _),
                (g[11] = x),
                (g[12] = S),
                (g[13] = s))
              : (s = g[13]),
            g[14] !== i || g[15] !== s
              ? ((d = (0, n.jsx)(u.q, {
                  className: "pe-2",
                  actions: a,
                  isVisible: !0,
                  role: "presentation",
                  onClick: h,
                  onKeyDown: m,
                  onPointerDown: f,
                  leadingAction: i,
                  trailingAction: s,
                })),
                (g[14] = i),
                (g[15] = s),
                (g[16] = d))
              : (d = g[16]),
            g[17] !== t || g[18] !== d
              ? ((c = (0, n.jsx)("div", { className: t, children: d })), (g[17] = t), (g[18] = d), (g[19] = c))
              : (c = g[19]),
            c
          )
        },
        c6: function (e) {
          let t,
            a,
            o,
            l,
            u,
            p,
            f = (0, r.c)(26),
            {
              align: m,
              getContextMenuItems: h,
              disableNative: y,
              onBeforeOpen: b,
              onCloseAutoFocus: w,
              onOpenChange: _,
              open: x,
              ref: S,
              renderItem: I,
              triggerButton: P,
              triggerAriaLabel: M,
            } = e,
            C = void 0 === m ? "start" : m
          ;(f[0] !== h || f[1] !== b
            ? ((t = () => ({ getContextMenuItems: h, onBeforeOpen: b })), (f[0] = h), (f[1] = b), (f[2] = t))
            : (t = f[2]),
            (0, s.useImperativeHandle)(S, t),
            f[3] !== _ || f[4] !== x
              ? ((a = () => {
                  if (x) return (0, g.RL)(() => _(!1))
                }),
                (o = [_, x]),
                (f[3] = _),
                (f[4] = x),
                (f[5] = a),
                (f[6] = o))
              : ((a = f[5]), (o = f[6])),
            (0, s.useEffect)(a, o),
            f[7] !== x || f[8] !== M || f[9] !== P
              ? ((l =
                  null == P
                    ? (0, n.jsx)(i.$, {
                        color: "secondary",
                        variant: "transparent",
                        size: "3xs",
                        uniform: !0,
                        "aria-expanded": x,
                        "aria-haspopup": "menu",
                        "aria-label": M,
                        onClick: v,
                        children: (0, n.jsx)(c.l0Y, {}),
                      })
                    : (0, s.cloneElement)(P, { "aria-label": M, "aria-expanded": x, "aria-haspopup": "menu" })),
                (f[7] = x),
                (f[8] = M),
                (f[9] = P),
                (f[10] = l))
              : (l = f[10]))
          let T = l
          return (
            f[11] !== h || f[12] !== b || f[13] !== x
              ? ((u = null == b && x ? h() : void 0), (f[11] = h), (f[12] = b), (f[13] = x), (f[14] = u))
              : (u = f[14]),
            f[15] !== C ||
            f[16] !== y ||
            f[17] !== h ||
            f[18] !== b ||
            f[19] !== w ||
            f[20] !== _ ||
            f[21] !== x ||
            f[22] !== I ||
            f[23] !== u ||
            f[24] !== T
              ? ((p = (0, n.jsx)(d.t, {
                  align: C,
                  awaitBeforeOpen: !1,
                  contentWidth: "xs",
                  disableNative: y,
                  getItems: h,
                  items: u,
                  onBeforeOpen: b,
                  onCloseAutoFocus: w,
                  onOpenChange: _,
                  open: x,
                  preserveBrowserContextMenu: !0,
                  renderItem: I,
                  trigger: "click",
                  children: T,
                })),
                (f[15] = C),
                (f[16] = y),
                (f[17] = h),
                (f[18] = b),
                (f[19] = w),
                (f[20] = _),
                (f[21] = x),
                (f[22] = I),
                (f[23] = u),
                (f[24] = T),
                (f[25] = p))
              : (p = f[25]),
            p
          )
        },
      },
    )
  },
  VSSi(e, t, a) {
    var n = a("zTeN"),
      r = a("OWtl"),
      i = a("OMIV")
    let o = (0, n.SZ)(
      r.u,
      ({ get: e }) => e(i.M9)?.getContext().user.customIDs?.workspace_id,
      ({ get: e, set: t }) => {
        let a = e(i.M9)
        if (null == a) return
        let n = () => {
          t(a.getContext().user.customIDs?.workspace_id)
        }
        return (a.on("values_updated", n), () => a.off("values_updated", n))
      },
    )
    a.d(t, {}, { Q: o })
  },
  dHX4(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      i = a("zd8w"),
      o = a("v7qY"),
      l = a("giDA")
    let s = (0, i.createContext)([]),
      d = (0, i.createContext)(null)
    function c(e) {
      let { id: t, container: a, children: n } = e
      return (0, o.createPortal)(n, a, t)
    }
    a.d(
      t,
      {},
      {
        Dc: function () {
          let e,
            t,
            a = (0, r.c)(4),
            o = (0, i.useContext)(s)
          return (
            a[0] !== o ? ((e = o.map(c)), (a[0] = o), (a[1] = e)) : (e = a[1]),
            a[2] !== e ? ((t = (0, n.jsx)(n.Fragment, { children: e })), (a[2] = e), (a[3] = t)) : (t = a[3]),
            t
          )
        },
        MO: function (e) {
          let t,
            a = (0, r.c)(5),
            { children: o } = e,
            s = (0, i.useContext)(d),
            c = (0, i.useContext)(l.J),
            u = (0, i.useId)()
          return (
            a[0] !== o || a[1] !== u || a[2] !== c || a[3] !== s
              ? ((t =
                  null == s
                    ? (0, n.jsx)(n.Fragment, { children: o })
                    : (0, n.jsx)("div", {
                        className: "contents",
                        ref: (e) => {
                          if (null != e)
                            return (
                              s((t) => [
                                ...t,
                                { id: u, container: e, children: (0, n.jsx)(l.J, { value: c, children: o }) },
                              ]),
                              () => s((e) => e.filter((e) => e.id !== u))
                            )
                        },
                      })),
                (a[0] = o),
                (a[1] = u),
                (a[2] = c),
                (a[3] = s),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
        gq: function (e) {
          let t,
            a,
            o = (0, r.c)(4),
            { children: l } = e
          o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (o[0] = t)) : (t = o[0])
          let [c, u] = (0, i.useState)(t)
          return (
            o[1] !== l || o[2] !== c
              ? ((a = (0, n.jsx)(d, { value: u, children: (0, n.jsx)(s, { value: c, children: l }) })),
                (o[1] = l),
                (o[2] = c),
                (o[3] = a))
              : (a = o[3]),
            a
          )
        },
      },
    )
  },
  v7NL(e, t, a) {
    var n = a("QosV"),
      r = a("zd8w"),
      i = a("jDEJ"),
      o = a("bIvi")
    function l(e) {
      ;("function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation())
    }
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a,
            s,
            d,
            c,
            u,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            b,
            w,
            _,
            x,
            S,
            I = (0, n.c)(72),
            {
              items: P,
              isActive: M,
              getItemKey: C,
              onSelect: T,
              onHighlight: A,
              onEscape: E,
              autoHighlightFirst: j,
              clearHighlightOnMouseLeave: D,
              captureWindowKeydown: k,
              keyboardEventTarget: R,
              keyboardVariant: N,
              selectOnSpace: O,
              preserveHighlightOnItemsChange: q,
              numberShortcutCount: B,
              selectOnTab: Q,
              requireKeyboardNavigationForSelection: U,
              shouldHandleKeyDown: L,
              highlightResetKey: z,
            } = e,
            K = void 0 === j || j,
            V = void 0 !== D && D,
            $ = void 0 !== k && k,
            G = void 0 === N ? "default" : N,
            H = void 0 !== q && q,
            Y = void 0 === B ? 0 : B,
            W = void 0 !== Q && Q,
            X = void 0 !== U && U
          I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, i.Z)()), (I[0] = t)) : (t = I[0])
          let F = t,
            Z = (0, r.useRef)(null),
            J = (0, r.useRef)(null),
            ee = (0, r.useRef)(!1),
            et = (0, r.useRef)(!1),
            ea = (0, r.useRef)(null),
            en = null == P ? 0 : P.length,
            [er, ei] = (0, r.useState)(K && en > 0 ? 0 : -1),
            eo = M && er >= 0 && er < en ? (P?.[er] ?? null) : null
          I[1] !== C || I[2] !== eo
            ? ((a = null == eo ? null : (C?.(eo) ?? eo)), (I[1] = C), (I[2] = eo), (I[3] = a))
            : (a = I[3])
          let el = a
          I[4] !== P || I[5] !== A
            ? ((s = (e) => {
                A?.(P?.[e] ?? null, e)
              }),
              (I[4] = P),
              (I[5] = A),
              (I[6] = s))
            : (s = I[6])
          let es = (0, r.useEffectEvent)(s)
          ;(I[7] !== K ||
          I[8] !== C ||
          I[9] !== z ||
          I[10] !== er ||
          I[11] !== M ||
          I[12] !== P ||
          I[13] !== en ||
          I[14] !== H
            ? ((d = () => {
                let e = ea.current?.items,
                  t = null != ea.current && ea.current.highlightResetKey !== z
                ;(!M || t) && (et.current = !1)
                let a = !0 === H || ("user" === H && et.current),
                  n =
                    null == z || "user" === H
                      ? null != e && (t || null == P || e.length !== en || e.some((e, t) => e !== P[t]))
                      : null != ea.current && ea.current.highlightResetKey !== z
                if (((ea.current = { items: P, highlightResetKey: z }), !M || 0 === en)) {
                  ;((ee.current = !1), -1 !== er && ei(-1))
                  return
                }
                if (er >= 0 && er < en && ((a && null == C) || !n)) return
                let r = e?.[er],
                  i = a && null != C && null != r ? (P?.findIndex((e) => C(e) === C(r)) ?? -1) : -1,
                  o = K ? 0 : -1
                ;(i >= 0 ? (o = i) : n && (ee.current = !1), er !== o && ei(o))
              }),
              (c = [K, C, z, er, M, P, en, H]),
              (I[7] = K),
              (I[8] = C),
              (I[9] = z),
              (I[10] = er),
              (I[11] = M),
              (I[12] = P),
              (I[13] = en),
              (I[14] = H),
              (I[15] = d),
              (I[16] = c))
            : ((d = I[15]), (c = I[16])),
            (0, r.useEffect)(d, c),
            I[17] !== er || I[18] !== el || I[19] !== es
              ? ((u = () => {
                  null == el ? es(-1) : es(er)
                }),
                (I[17] = er),
                (I[18] = el),
                (I[19] = es),
                (I[20] = u))
              : (u = I[20]),
            I[21] !== er || I[22] !== el ? ((p = [er, el]), (I[21] = er), (I[22] = el), (I[23] = p)) : (p = I[23]),
            (0, r.useEffect)(u, p),
            I[24] !== er || I[25] !== M || I[26] !== en
              ? ((g = () => {
                  let e = J.current === er
                  if (((J.current = null), !M || e || er < 0 || er >= en)) return
                  let t = Z.current
                  if (!t) return
                  let a = t.querySelectorAll('[data-list-navigation-item="true"]').item(er)
                  a?.scrollIntoView({ block: "nearest" })
                }),
                (f = [er, M, en]),
                (I[24] = er),
                (I[25] = M),
                (I[26] = en),
                (I[27] = g),
                (I[28] = f))
              : ((g = I[27]), (f = I[28])),
            (0, r.useEffect)(g, f),
            I[29] !== P || I[30] !== en || I[31] !== T
              ? ((m = (e) => {
                  let t = null != P && e >= 0 && e < en ? P[e] : void 0
                  t && ((ee.current = !1), ei(e), T(t, e))
                }),
                (I[29] = P),
                (I[30] = en),
                (I[31] = T),
                (I[32] = m))
              : (m = I[32]))
          let ed = (0, o.K)(m)
          I[33] !== er || I[34] !== M || I[35] !== en
            ? ((h = (e) => {
                ;((ee.current = !1),
                  M && e >= 0 && e < en && (et.current = !0),
                  M && e >= 0 && e < en && e !== er && ((J.current = e), ei(e)))
              }),
              (I[33] = er),
              (I[34] = M),
              (I[35] = en),
              (I[36] = h))
            : (h = I[36])
          let ec = (0, o.K)(h)
          I[37] !== en
            ? ((v = (e) => {
                ;((ee.current = !0),
                  (et.current = !0),
                  (J.current = null),
                  ei((t) => {
                    if (0 === en) return -1
                    if (t < 0) return e >= 0 ? 0 : en - 1
                    if (en <= 0) return -1
                    let a = (t + e) % en
                    return a < 0 ? a + en : a
                  }))
              }),
              (I[37] = en),
              (I[38] = v))
            : (v = I[38])
          let eu = v
          I[39] !== K ||
          I[40] !== er ||
          I[41] !== eo ||
          I[42] !== M ||
          I[43] !== en ||
          I[44] !== G ||
          I[45] !== eu ||
          I[46] !== Y ||
          I[47] !== E ||
          I[48] !== X ||
          I[49] !== ed ||
          I[50] !== O ||
          I[51] !== W ||
          I[52] !== L
            ? ((y = (e) => {
                if (!M) return !1
                let t = "nativeEvent" in e ? e.nativeEvent : e
                if (L?.(t) === !1 || t.isComposing || 229 === t.keyCode) return !1
                let { key: a } = e
                if (0 === en) return "Escape" === a && !!E && (E(), l(e), !0)
                if ("ArrowDown" === a || (F && e.ctrlKey && "n" === a)) return (eu(1), l(e), !0)
                if ("ArrowUp" === a || (F && e.ctrlKey && "p" === a)) return (eu(-1), l(e), !0)
                if (Y > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-3]$/.test(a) && Number(a) <= Math.min(Y, en))
                  return (ed(Number(a) - 1), l(e), !0)
                if (
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.shiftKey &&
                  ("Enter" === a ||
                    ((W || "chatgpt" === G) && "Tab" === a) ||
                    ("chatgpt" === G && " " === a && null != eo && O?.(eo)))
                ) {
                  if (X && !ee.current) return !1
                  let t = er >= 0 ? er : K ? 0 : -1
                  return t >= 0 && t < en && (ed(t), l(e), !0)
                }
                return "Escape" === a
                  ? !!E && (E(), l(e), !0)
                  : (!X ||
                      (1 !== a.length && "Backspace" !== a && "Delete" !== a) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), ei(-1)),
                    !1)
              }),
              (I[39] = K),
              (I[40] = er),
              (I[41] = eo),
              (I[42] = M),
              (I[43] = en),
              (I[44] = G),
              (I[45] = eu),
              (I[46] = Y),
              (I[47] = E),
              (I[48] = X),
              (I[49] = ed),
              (I[50] = O),
              (I[51] = W),
              (I[52] = L),
              (I[53] = y))
            : (y = I[53])
          let ep = y
          ;(I[54] !== $ || I[55] !== ep || I[56] !== M || I[57] !== R || I[58] !== X
            ? ((b = () => {
                if (!$ || !M) return
                let e = (e) => {
                    ep(e)
                  },
                  t = () => {
                    ;((ee.current = !1), ei(-1))
                  },
                  a = R ?? window
                return (
                  a.addEventListener("keydown", e, !0),
                  X &&
                    (a.addEventListener("beforeinput", t, !0),
                    a.addEventListener("compositionstart", t, !0),
                    a.addEventListener("paste", t, !0)),
                  () => {
                    ;(a.removeEventListener("keydown", e, !0),
                      a.removeEventListener("beforeinput", t, !0),
                      a.removeEventListener("compositionstart", t, !0),
                      a.removeEventListener("paste", t, !0))
                  }
                )
              }),
              (w = [$, ep, M, R, X]),
              (I[54] = $),
              (I[55] = ep),
              (I[56] = M),
              (I[57] = R),
              (I[58] = X),
              (I[59] = b),
              (I[60] = w))
            : ((b = I[59]), (w = I[60])),
            (0, r.useEffect)(b, w),
            I[61] !== ep
              ? ((_ = (e) => {
                  let t = void 0 === e ? {} : e
                  return {
                    onKeyDown: (e) => {
                      ep(e) || t.onKeyDown?.(e)
                    },
                  }
                }),
                (I[61] = ep),
                (I[62] = _))
              : (_ = I[62]))
          let eg = _
          I[63] !== V || I[64] !== ec || I[65] !== ed
            ? ((x = (e, t) => {
                let a = void 0 === t ? {} : t
                return {
                  onClick: (t) => {
                    ;(ed(e), a.onClick?.(t))
                  },
                  onMouseMove: (t) => {
                    ;(ec(e), a.onMouseMove?.(t))
                  },
                  onMouseLeave: () => {
                    V && ((ee.current = !1), ei(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (I[63] = V),
              (I[64] = ec),
              (I[65] = ed),
              (I[66] = x))
            : (x = I[66])
          let ef = x
          return (
            I[67] !== eg || I[68] !== ef || I[69] !== ep || I[70] !== er
              ? ((S = {
                  highlightedIndex: er,
                  setHighlightedIndex: ei,
                  listRef: Z,
                  handleKeyDown: ep,
                  getInputProps: eg,
                  getItemProps: ef,
                }),
                (I[67] = eg),
                (I[68] = ef),
                (I[69] = ep),
                (I[70] = er),
                (I[71] = S))
              : (S = I[71]),
            S
          )
        },
      },
    )
  },
  KNkV(e, t, a) {
    let n = (0, a("nkTT").a)({
      name: "shopping-bag-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.643188, y: 1.834961, width: 14.713257, height: 16.324219 },
        visualBounds: { x: 2.643188, y: 1.834961, width: 14.713257, height: 16.324219 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.643188, y: 1.834961, width: 14.713257, height: 16.324219 },
        center: { x: 9.999817, y: 9.997071 },
        insets: { top: 1.834961, right: 2.643555, bottom: 1.84082, left: 2.643188 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999817, y: 9.997071 },
          foreground: { x: 9.999817, y: 9.997071 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99947 1.83496C12.1124 1.83496 13.1645 3.51572 13.1645 5V5.10547H13.6088C15.1157 5.10554 16.3829 6.23778 16.5483 7.73535L17.3383 14.8818C17.5315 16.6316 16.1591 18.159 14.3989 18.1592H5.60103C3.83306 18.1592 2.45824 16.6195 2.66353 14.8633L3.49947 7.7168C3.67368 6.22745 4.9373 5.10547 6.43697 5.10547H6.83443V5C6.83443 3.5158 7.88679 1.83516 9.99947 1.83496ZM6.43697 6.43555C5.61034 6.43555 4.91637 7.05365 4.82076 7.87109L3.98384 15.0176C3.87129 15.981 4.6264 16.8291 5.60103 16.8291H14.3989C15.3691 16.8289 16.1219 15.9881 16.0161 15.0283L15.227 7.88086C15.1361 7.05907 14.4393 6.43562 13.6088 6.43555H13.1645V7.5C13.1645 7.86727 12.8667 8.16504 12.4995 8.16504C12.1324 8.16484 11.8344 7.86715 11.8344 7.5V6.43555H8.16451V7.5C8.16451 7.86727 7.86674 8.16504 7.49947 8.16504C7.13237 8.16484 6.83443 7.86715 6.83443 7.5V6.43555H6.43697ZM9.99947 3.16504C8.7793 3.16522 8.16451 4.08174 8.16451 5V5.10547H11.8344V5C11.8344 4.08165 11.2199 3.16504 9.99947 3.16504Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { V: n })
  },
}
//# sourceMappingURL=236683.463da52c65.js.map
