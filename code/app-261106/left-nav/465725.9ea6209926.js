export const __rspack_esm_ids = [465725]
export const __webpack_modules__ = {
  sNfo(e, t, a) {
    var s = a("ASxG"),
      n = a("odKs"),
      l = a("GIgU")
    let r = s.object({
      pluginId: s.string().min(1),
      template: s.object({
        key: s.string().min(1),
        name: s.string().trim().min(1),
        prompt: s.string().trim().min(1),
        rrule: s.string().trim().min(1),
      }),
    })
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t = r.safeParse(e)
          if (!t.success) return null
          let { pluginId: a, template: s } = t.data,
            o = (0, l.pG)({ pluginId: a, template: s })
          return (0, n.SK)({ ...o.scheduleConfig, mode: "custom", customRrule: s.rrule }) ? o : null
        },
      },
    )
  },
  hwNx(e, t, a) {
    var s = a("zTeN"),
      n = a("OWtl"),
      l = a("OMIV")
    let r = (0, s.un)(n.u, ({ get: e }) => e(l.JW, "2220834113") || e(l.JW, "834565546"))
    a.d(t, {}, { l: r })
  },
  HzCW(e, t, a) {
    var s = a("ASxG")
    let n = s.object({
      navigationSource: s.enum(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor"]),
    })
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t = n.safeParse(e)
          return t.success ? t.data.navigationSource : void 0
        },
      },
    )
  },
  g98G(e, t, a) {
    a.d(t, { Q: () => ej })
    var s = a("ABep"),
      n = a("QosV"),
      l = a("i5ac"),
      r = a.n(l),
      o = a("zTeN"),
      i = a("zd8w"),
      c = a("Wf1j"),
      u = a("SPnB"),
      d = a("bVeK"),
      m = a("pIbZ"),
      h = a("OWtl"),
      p = a("khOd"),
      f = a("nvO1"),
      g = a("GEsy"),
      x = a("GDNt"),
      b = a("sSHx"),
      y = a("jov5"),
      v = a("Ghh3"),
      _ = a("rvFo")
    let j = (0, o.N3)(h.u, (e, { get: t }) => {
      let a = t(u.chatGptAuthenticatedAccountId$)
      return {
        enabled: null != a && t(y.e) && t(b.B).isCapable,
        initialPageParam: null,
        queryKey: ["cloud-automations", "table", a, e],
        queryFn: ({ pageParam: t, signal: a }) =>
          v.Request.safePost("/automations/query", {
            requestBody: { ...e, cursor: t },
            signal: a,
            expectedErrorStatuses: [400, 403, 404, 409, 422, 503],
          }),
        getNextPageParam: (e) => e.cursor ?? void 0,
        refetchOnMount: !0,
        retry: !1,
        staleTime: _.D.ONE_MINUTE,
      }
    })
    var w = a("on57"),
      k = a("oyxz"),
      A = a("odKs"),
      S = a("SY7h"),
      N = a("zdvx"),
      M = a("hwNx"),
      P = a("bqtn"),
      I = a("EShr"),
      O = a("fJcH")
    function C(e) {
      let t,
        a,
        l,
        r = (0, n.c)(5),
        { query: i, onChangeQuery: c } = e
      return !0 !== (0, o.Ul)(O._V)
        ? null
        : (r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.ownerFilter",
                defaultMessage: "Owner",
                description: "Opens the Scheduled task owner filter, which allows selecting Personal, Teams, or both",
              })),
              (a = ["personal", "team"]),
              (r[0] = t),
              (r[1] = a))
            : ((t = r[0]), (a = r[1])),
          r[2] !== c || r[3] !== i
            ? ((l = (0, s.jsx)(P.ms.FlyoutSubmenuItem, {
                contentWidth: "menu",
                label: t,
                children: a.map((e) =>
                  (0, s.jsx)(
                    P.ms.CheckboxItem,
                    {
                      checked: "all" === i.scope || i.scope === e,
                      disabled: i.scope === e,
                      onCheckedChange: (t) => {
                        let a = "personal" === e ? "team" : "personal"
                        c({ ...i, scope: t ? "all" : a })
                      },
                      children: (0, s.jsx)(k.A, {
                        id: "automations.scheduled.table.ownerOption",
                        defaultMessage: "{owner, select, personal {Personal} other {Teams}}",
                        description:
                          "Owner filter choices: Personal includes the user's tasks; Teams includes tasks shared with their accessible Teams. At least one remains selected",
                        values: { owner: e },
                      }),
                    },
                    e,
                  ),
                ),
              })),
              (r[2] = c),
              (r[3] = i),
              (r[4] = l))
            : (l = r[4]),
          l)
    }
    function q(e) {
      let t,
        a,
        l,
        r,
        i,
        u = (0, n.c)(11),
        { query: d, onChangeQuery: m } = e,
        h = (0, c.A)()
      if (!0 !== (0, o.Ul)(O._V)) return null
      u[0] !== h
        ? ((t = h.formatMessage({
            id: "automations.scheduled.table.scopeLabel",
            defaultMessage: "Task ownership",
            description: "Switches between all, personal, and Team scheduled tasks",
          })),
          (u[0] = h),
          (u[1] = t))
        : (t = u[1])
      let p = d.scope ?? "all"
      return (
        u[2] !== m || u[3] !== d
          ? ((a = (e) => m({ ...d, scope: e })), (u[2] = m), (u[3] = d), (u[4] = a))
          : (a = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel") ? ((l = ["all", "personal", "team"]), (u[5] = l)) : (l = u[5]),
        u[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = l.map(F)), (u[6] = r)) : (r = u[6]),
        u[7] !== t || u[8] !== p || u[9] !== a
          ? ((i = (0, s.jsx)(I.T, { ariaLabel: t, size: "toolbar", selectedId: p, onSelect: a, options: r })),
            (u[7] = t),
            (u[8] = p),
            (u[9] = a),
            (u[10] = i))
          : (i = u[10]),
        i
      )
    }
    function F(e) {
      return {
        id: e,
        label: (0, s.jsx)(k.A, {
          id: "automations.scheduled.table.scopeOption",
          defaultMessage: "{scope, select, all {All} personal {Personal} other {Team}}",
          description: "Scheduled page tabs for all tasks, the user's tasks, or tasks shared with Teams",
          values: { scope: e },
        }),
      }
    }
    let T = (0, a("Qgfj").YK)({
      owner: {
        id: "automations.scheduled.table.owner",
        defaultMessage: "Owner",
        description: "Column heading for the canonical owner of a Scheduled task",
      },
      tooBroad: {
        id: "automations.scheduled.table.tooBroad",
        defaultMessage: "Too many tasks to load. Try Personal; a specific status may also help there.",
        description:
          "Scheduled query exceeded its discovery budget. Personal avoids Team discovery, and a status may reduce Personal discovery. Narrower search is not guaranteed to help",
      },
    })
    var E = a("HZfM"),
      U = a("Ro2M"),
      R = a("Sm6l"),
      B = a("fnPc"),
      G = a("kfGJ"),
      L = a("MXHX")
    function D(e) {
      let t,
        a,
        l,
        r,
        i,
        u,
        m = (0, n.c)(20),
        { automationId: p, name: f } = e,
        g = (0, o.gh)(h.u),
        x = (0, c.A)(),
        b = (0, E.Zp)(),
        y = (0, o.Ul)(U.H),
        { data: v } = (0, o._U)(L.X6, y)
      m[0] !== y || m[1] !== p || m[2] !== v
        ? ((t = v?.accountId === y ? v.items.find((e) => e.automation.id === p)?.teamId : void 0),
          (m[0] = y),
          (m[1] = p),
          (m[2] = v),
          (m[3] = t))
        : (t = m[3])
      let _ = t
      if (null == _) {
        let e
        return (
          m[4] !== f
            ? ((e = (0, s.jsx)("span", { className: "truncate", children: f })), (m[4] = f), (m[5] = e))
            : (e = m[5]),
          e
        )
      }
      return (
        m[6] !== x || m[7] !== f
          ? ((a = x.formatMessage(
              {
                id: "automations.scheduled.table.openNamedTeamSettings",
                defaultMessage: "Open {teamName} Team settings",
                description: "Accessible label for opening the named Team's settings from a scheduled task owner",
              },
              { teamName: f },
            )),
            (m[6] = x),
            (m[7] = f),
            (m[8] = a))
          : (a = m[8]),
        m[9] !== b || m[10] !== g || m[11] !== _
          ? ((l = () => {
              ;((0, B.a)(g, G.fI), b(`/settings/teams/${encodeURIComponent(_)}`))
            }),
            (m[9] = b),
            (m[10] = g),
            (m[11] = _),
            (m[12] = l))
          : (l = m[12]),
        m[13] !== f
          ? ((r = (0, s.jsx)("span", { className: "truncate", children: f })), (m[13] = f), (m[14] = r))
          : (r = m[14]),
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(d.$XR, {
              className: "group-hover:opacity-100 group-focus-visible:opacity-100 @2xl:opacity-0",
            })),
            (m[15] = i))
          : (i = m[15]),
        m[16] !== a || m[17] !== l || m[18] !== r
          ? ((u = (0, s.jsxs)(R.$, {
              className: "group relative",
              color: "ghostMuted",
              size: "inline",
              allowShrink: !0,
              "aria-label": a,
              onClick: l,
              children: [r, i],
            })),
            (m[16] = a),
            (m[17] = l),
            (m[18] = r),
            (m[19] = u))
          : (u = m[19]),
        u
      )
    }
    var z = a("BO0A"),
      $ = a("LhhH"),
      H = a("zjpG"),
      W = a("wZQ4"),
      Q = a("PkPj"),
      V = a("zWqe"),
      X = a("KIKs"),
      K = a("cWHY"),
      Y = a("DEA6"),
      Z = a("O666"),
      J = a("j89V"),
      ee = a("T0Rc"),
      et = a("Bl5Q"),
      ea = a("N2rm"),
      es = a("Dgwo"),
      en = a("l00C"),
      el = a("OMIV")
    function er(e) {
      let t,
        a,
        s,
        l,
        r = (0, n.c)(15),
        { automationIds: i } = e,
        c = (0, o.gh)(h.u),
        d = (0, o.Ul)(u.chatGptAuthenticatedAccountId$),
        m = (0, o._U)(el.JW, "1153277950"),
        p = (0, o._U)(f.lc, d),
        { status: g } = (0, o._U)(en.M4, ea.iw)
      r[0] !== i ? ((t = i.slice(0, 10)), (r[0] = i), (r[1] = t)) : (t = r[1])
      let x = t,
        b = x.length > 0 && p && "ready" === g
      return (
        r[2] !== d || r[3] !== m || r[4] !== x
          ? ((a = ["team-latest-run-history-prefetch", d, x, m]), (r[2] = d), (r[3] = m), (r[4] = x), (r[5] = a))
          : (a = r[5]),
        r[6] !== d || r[7] !== m || r[8] !== x || r[9] !== c
          ? ((s = async (e) => {
              let { signal: t } = e
              return (
                await (0, et.Ay)(
                  x,
                  async (e) => {
                    if ((await eo(t), t.throwIfAborted(), c.get(u.chatGptAuthenticatedAccountId$) !== d)) return
                    let a = await v.Request.safeGet("/automation/{automation_id}/runs/latest", {
                      parameters: { path: { automation_id: e } },
                      signal: t,
                      expectedErrorStatuses: [403, 404, 503],
                    })
                    t.throwIfAborted()
                    let s = a.last_run?.chat_ref ?? a.latest_update?.run?.chat_ref
                    s?.type === "codex" &&
                      (await eo(t),
                      t.throwIfAborted(),
                      c.get(u.chatGptAuthenticatedAccountId$) === d &&
                        (await (0, es.V)(c, ea.iw).prefetchSharedThreadTurns(s.id, m)))
                  },
                  { concurrency: 2, signal: t, stopOnError: !1 },
                ),
                !0
              )
            }),
            (r[6] = d),
            (r[7] = m),
            (r[8] = x),
            (r[9] = c),
            (r[10] = s))
          : (s = r[10]),
        r[11] !== b || r[12] !== a || r[13] !== s
          ? ((l = { enabled: b, queryKey: a, queryFn: s, retry: !1, staleTime: _.D.ONE_MINUTE }),
            (r[11] = b),
            (r[12] = a),
            (r[13] = s),
            (r[14] = l))
          : (l = r[14]),
        (0, ee.I)(l, c.queryClient),
        null
      )
    }
    function eo(e) {
      return (
        e.throwIfAborted(),
        new Promise((t, a) => {
          let s = () => {
              ;(window.cancelIdleCallback(n), a(new DOMException("Aborted", "AbortError")))
            },
            n = window.requestIdleCallback(() => {
              ;(e.removeEventListener("abort", s), t())
            })
          e.addEventListener("abort", s, { once: !0 })
        })
      )
    }
    function ei(e) {
      let t,
        a,
        l,
        r,
        o,
        i,
        u,
        h,
        p,
        f,
        g,
        x,
        b,
        y,
        v,
        _,
        j = (0, n.c)(36),
        { query: w, teamsEnabled: A, onChangeQuery: S } = e,
        N = (0, c.A)(),
        M = w.q ?? ""
      j[0] !== M ? ((t = M.trim()), (j[0] = M), (j[1] = t)) : (t = j[1])
      let I = t.length > 0
      ;(j[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { 16: d.uG0, 20: d.FuZ }), (j[2] = a)) : (a = j[2]),
        j[3] !== N
          ? ((l = N.formatMessage({
              id: "automations.scheduled.table.filters",
              defaultMessage: "Filter and sort tasks",
              description: "Opens the Scheduled table owner and status filters and ordering menu",
            })),
            (j[3] = N),
            (j[4] = l))
          : (l = j[4]),
        j[5] !== l
          ? ((r = (0, s.jsx)(m.p, { color: "secondary", variant: "ghost", icon: a, uniform: !0, "aria-label": l })),
            (j[5] = l),
            (j[6] = r))
          : (r = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(P.ms.SectionLabel, {
              children: (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.filterBy",
                defaultMessage: "Filter by",
                description: "Heading above the Scheduled task filter submenus",
              }),
            })),
            (j[7] = o))
          : (o = j[7]),
        j[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(k.A, {
              id: "automations.scheduled.table.status",
              defaultMessage: "Status",
              description: "Opens the task status choices in the Scheduled filter menu",
            })),
            (j[8] = i))
          : (i = j[8]))
      let O = w.status ?? "active"
      ;(j[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["all", "active", "paused", "finished"]), (j[9] = u))
        : (u = j[9]),
        j[10] !== S || j[11] !== w
          ? ((h = u.map((e) =>
              (0, s.jsx)(
                P.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => S({ ...w, status: e }),
                  children: (0, s.jsx)(k.A, {
                    id: "automations.scheduled.table.statusOption",
                    defaultMessage:
                      "{status, select, active {Active} paused {Paused} finished {Completed} other {All}}",
                    description:
                      "Task status filter choice in Scheduled. Active excludes paused and completed tasks; All includes every status",
                    values: { status: e },
                  }),
                },
                e,
              ),
            )),
            (j[10] = S),
            (j[11] = w),
            (j[12] = h))
          : (h = j[12]),
        j[13] !== h || j[14] !== O
          ? ((p = (0, s.jsx)(P.ms.FlyoutSubmenuItem, {
              contentWidth: "menu",
              label: i,
              children: (0, s.jsx)(P.ms.RadioGroup, { value: O, children: h }),
            })),
            (j[13] = h),
            (j[14] = O),
            (j[15] = p))
          : (p = j[15]),
        j[16] !== S || j[17] !== w || j[18] !== A
          ? ((f = A ? (0, s.jsx)(C, { query: w, onChangeQuery: S }) : null),
            (j[16] = S),
            (j[17] = w),
            (j[18] = A),
            (j[19] = f))
          : (f = j[19]),
        j[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)(P.ms.Separator, {})), (j[20] = g))
          : (g = j[20]),
        j[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, s.jsx)(k.A, {
              id: "automations.scheduled.table.sort",
              defaultMessage: "Sort by",
              description: "Opens the ordering choices in the Scheduled table filter menu",
            })),
            (j[21] = x))
          : (x = j[21]))
      let q = w.sort ?? "automatic"
      j[22] !== I
        ? ((b = ["automatic", "next_run_asc", "updated_at_desc", "title_asc", ...(I ? ["relevance"] : [])]),
          (j[22] = I),
          (j[23] = b))
        : (b = j[23])
      let F = b
      return (
        j[24] !== S || j[25] !== w || j[26] !== F
          ? ((y = F.map((e) =>
              (0, s.jsx)(
                P.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => S({ ...w, sort: "automatic" === e ? void 0 : e }),
                  children: (0, s.jsx)(k.A, {
                    id: "automations.scheduled.table.sortOption",
                    defaultMessage:
                      "{sort, select, automatic {Default} next_run_asc {Next run} updated_at_desc {Recently updated} title_asc {Name} other {Relevance}}",
                    description:
                      "Short ordering choice in the Scheduled table. Default lists active tasks before paused or completed tasks while browsing and uses relevance while searching; the other choices sort by next run, update time, or name",
                    values: { sort: e },
                  }),
                },
                e,
              ),
            )),
            (j[24] = S),
            (j[25] = w),
            (j[26] = F),
            (j[27] = y))
          : (y = j[27]),
        j[28] !== q || j[29] !== y
          ? ((v = (0, s.jsx)(P.ms.FlyoutSubmenuItem, {
              contentWidth: "menu",
              label: x,
              children: (0, s.jsx)(P.ms.RadioGroup, { value: q, children: y }),
            })),
            (j[28] = q),
            (j[29] = y),
            (j[30] = v))
          : (v = j[30]),
        j[31] !== p || j[32] !== f || j[33] !== v || j[34] !== r
          ? ((_ = (0, s.jsxs)(P.Ab, {
              align: "end",
              contentWidth: "menu",
              triggerButton: r,
              children: [o, p, f, g, v],
            })),
            (j[31] = p),
            (j[32] = f),
            (j[33] = v),
            (j[34] = r),
            (j[35] = _))
          : (_ = j[35]),
        _
      )
    }
    function ec(e) {
      let t,
        a,
        l,
        r,
        i,
        u,
        d,
        m,
        h,
        f,
        g,
        x,
        b,
        y,
        v,
        _,
        j,
        N,
        P,
        I,
        O,
        C,
        F,
        E,
        U,
        B,
        G = (0, n.c)(109),
        {
          query: L,
          items: X,
          selectedTask: ee,
          localTasks: et,
          error: ea,
          isLoading: es,
          isRefreshing: en,
          hasNextPage: el,
          isFetchingNextPage: eo,
          isFetchNextPageError: ec,
          teamsEnabled: ex,
          headerPlacement: eb,
          createAction: ej,
          onChangeQuery: ew,
          onOpen: ek,
          onRetry: eA,
          onLoadNextPage: eS,
        } = e,
        eN = (0, c.A)(),
        eM = (0, o.Ul)(p.GB)
      G[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { layer: "3435160418", parameter: "use_tasks_label" }), (G[0] = t))
        : (t = G[0])
      let eP = (0, o._U)(Z.H$, t),
        eI = (0, o.Ul)(M.l),
        eO = L.q ?? ""
      G[1] !== eO ? ((a = eO.trim()), (G[1] = eO), (G[2] = a)) : (a = G[2])
      let eC = a.length > 0,
        eq = ex && "personal" !== L.scope,
        eF = "toolbar" === eb
      G[3] !== et?.automations || G[4] !== et?.automations.map
        ? ((l = new Set(et?.automations.map(ef))), (G[3] = et?.automations), (G[4] = et?.automations.map), (G[5] = l))
        : (l = G[5])
      let eT = l
      if (
        G[6] !== ej ||
        G[7] !== eI ||
        G[8] !== ea ||
        G[9] !== eM ||
        G[10] !== eC ||
        G[11] !== eN ||
        G[12] !== eF ||
        G[13] !== eo ||
        G[14] !== es ||
        G[15] !== en ||
        G[16] !== X ||
        G[17] !== eT ||
        G[18] !== et ||
        G[19] !== ew ||
        G[20] !== ek ||
        G[21] !== eA ||
        G[22] !== L ||
        G[23] !== ee ||
        G[24] !== eq ||
        G[25] !== eP ||
        G[26] !== ex
      ) {
        let e, t, a, n, l
        ;(G[46] !== X ? ((e = X ?? []), (G[46] = X), (G[47] = e)) : (e = G[47]),
          G[48] !== eT ? ((t = (e) => !eT.has(e.id)), (G[48] = eT), (G[49] = t)) : (t = G[49]),
          (i = [
            ...(null == X || null == et || "team" === L.scope
              ? []
              : et.automations
                  .filter((e) => {
                    if ("DELETED" === e.status) return !1
                    let t = "PAUSED" === e.status ? "paused" : "active",
                      a = et.automationRowSummaries.get(e.id)
                    return (
                      ((L.status ?? "active") === "all" || (L.status ?? "active") === t) &&
                      (0, S.d)(L.q ?? "", [
                        e.name,
                        e.prompt,
                        et.sourcePluginsByAutomationId.get(e.id)?.displayName,
                        a?.workspaceLabel,
                        a?.scheduleLabel,
                      ])
                    )
                  })
                  .sort((e, t) =>
                    "updated_at_desc" === L.sort
                      ? t.updatedAt - e.updatedAt
                      : null != L.sort || eC
                        ? 0
                        : t.createdAt - e.createdAt,
                  )
                  .map((e) => ({ source: "local", automation: e, onOpen: () => et.onOpen(e) }))),
            ...e.filter(t).map(ep),
          ]),
          null != L.sort || eC
            ? null != et &&
              "team" !== L.scope &&
              ("title_asc" === L.sort ? i.sort(em) : "next_run_asc" === L.sort && i.sort(ed))
            : i.sort(eh),
          (r = Q.Ql),
          (u = !1),
          (d = eM),
          (m = eM),
          (h = "sticky"),
          (f = eM || eF ? "compact" : "default"),
          (g = eM ? "extraWide" : "wide"),
          G[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, s.jsx)(K.k, {
                children: (0, s.jsx)(k.A, {
                  id: "automations.scheduled.page.title",
                  defaultMessage: "Scheduled",
                  description: "Title of the page for viewing and managing scheduled tasks and monitors",
                }),
              })),
              (G[50] = x))
            : (x = G[50]),
          G[51] !== ej
            ? ((b = (0, s.jsx)("div", { className: "flex items-center gap-2", children: ej })),
              (G[51] = ej),
              (G[52] = b))
            : (b = G[52]),
          G[53] !== ew || G[54] !== L || G[55] !== ex
            ? ((y = (0, s.jsx)(ei, { query: L, teamsEnabled: ex, onChangeQuery: ew })),
              (v = ex ? (0, s.jsx)(q, { query: L, onChangeQuery: ew }) : null),
              (G[53] = ew),
              (G[54] = L),
              (G[55] = ex),
              (G[56] = y),
              (G[57] = v))
            : ((y = G[56]), (v = G[57])))
        let o = eM ? "ms-auto w-full" : "ms-auto w-full max-w-60"
        ;(G[58] !== eN
          ? ((a = eN.formatMessage({
              id: "automations.scheduled.table.searchLabel",
              defaultMessage: "Search scheduled tasks",
              description: "Accessible label for searching task titles and instructions in the Scheduled table",
            })),
            (G[58] = eN),
            (G[59] = a))
          : (a = G[59]),
          G[60] !== eN
            ? ((n = eN.formatMessage({
                id: "automations.scheduled.table.searchPlaceholder",
                defaultMessage: "Search",
                description: "Placeholder for searching task titles and instructions in the Scheduled table",
              })),
              (G[60] = eN),
              (G[61] = n))
            : (n = G[61]))
        let c = L.q ?? ""
        ;(G[62] !== ew || G[63] !== L
          ? ((l = (e) => ew({ ...L, q: e, sort: "" === e.trim() && "relevance" === L.sort ? void 0 : L.sort })),
            (G[62] = ew),
            (G[63] = L),
            (G[64] = l))
          : (l = G[64]),
          G[65] !== o || G[66] !== a || G[67] !== n || G[68] !== c || G[69] !== l
            ? ((_ = {
                className: o,
                variant: "toolbar-compact",
                autoFocus: !1,
                id: "scheduled-table-search",
                inputRole: "searchbox",
                maxLength: 256,
                label: a,
                placeholder: n,
                searchQuery: c,
                onSearchQueryChange: l,
              }),
              (G[65] = o),
              (G[66] = a),
              (G[67] = n),
              (G[68] = c),
              (G[69] = l),
              (G[70] = _))
            : (_ = G[70]),
          (j = ex && null != X ? (0, s.jsx)(er, { automationIds: i.flatMap(eu) }) : null),
          (N = "@container"),
          (P = en),
          G[71] !== ea || G[72] !== eo || G[73] !== eA
            ? ((I =
                null == ea
                  ? null
                  : (0, s.jsxs)("div", {
                      className: "flex items-center justify-between gap-4 py-4",
                      role: "alert",
                      children: [
                        (0, s.jsx)(e_, { error: ea }),
                        (0, s.jsx)(R.$, {
                          color: "outline",
                          size: "toolbar",
                          loading: eo,
                          onClick: eA,
                          children: (0, s.jsx)(k.A, {
                            id: "automations.scheduled.retry",
                            defaultMessage: "Retry",
                            description: "Retries loading scheduled tasks after a request fails",
                          }),
                        }),
                      ],
                    })),
              (G[71] = ea),
              (G[72] = eo),
              (G[73] = eA),
              (G[74] = I))
            : (I = G[74]),
          (O =
            es && null == X && 0 === i.length
              ? (0, s.jsx)(V.W, {
                  loadingLabel: (0, s.jsx)(k.A, {
                    id: "automations.scheduled.loading",
                    defaultMessage: "Loading tasks",
                    description: "Loading announcement for scheduled tasks",
                  }),
                })
              : null),
          (C =
            null == X && 0 === i.length
              ? null
              : (0, s.jsxs)("div", {
                  role: "table",
                  className: "select-none",
                  "aria-label": eP
                    ? eN.formatMessage(Y.U.tasks)
                    : eN.formatMessage({
                        id: "automations.scheduled.table.label",
                        defaultMessage: "Scheduled tasks",
                        description: "Accessible name of the table of scheduled tasks and monitors",
                      }),
                  children: [
                    (0, s.jsx)("div", {
                      className: "sr-only @2xl:not-sr-only",
                      children: (0, s.jsxs)("div", {
                        role: "row",
                        className: (0, w.A)(
                          "grid min-h-11 items-center gap-3 px-3 py-3 text-sm text-secondary",
                          eq ? "grid-cols-5" : "grid-cols-4",
                        ),
                        children: [
                          (0, s.jsx)("div", {
                            role: "columnheader",
                            className: "col-span-2",
                            children: (0, s.jsx)("span", {
                              className: "inline-flex w-8 justify-center",
                              children: (0, s.jsx)(k.A, {
                                id: "automations.scheduled.table.tasks",
                                defaultMessage: "Task",
                                description: "Column heading for Scheduled task names",
                              }),
                            }),
                          }),
                          eq
                            ? (0, s.jsx)("div", { role: "columnheader", children: (0, s.jsx)(k.A, { ...T.owner }) })
                            : null,
                          (0, s.jsx)("div", {
                            role: "columnheader",
                            children: (0, s.jsx)(k.A, {
                              id: "automations.scheduled.table.nextRun",
                              defaultMessage: "Next run",
                              description: "Column heading for the next planned Scheduled task occurrence",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            role: "columnheader",
                            children: (0, s.jsx)(k.A, {
                              id: "automations.scheduled.table.schedule",
                              defaultMessage: "Scheduled",
                              description: "Column heading for a task cadence or event trigger",
                            }),
                          }),
                        ],
                      }),
                    }),
                    i.map((e) => {
                      let t = e.source === ee?.source && e.automation.id === ee.id,
                        a = eg(e),
                        n = "cloud" === e.source ? e.automation.owner : null
                      return (0, s.jsx)(
                        "div",
                        {
                          className: "grid min-h-15 border-b border-subtle py-1",
                          children: (0, s.jsxs)("div", {
                            className: (0, w.A)(
                              "relative grid min-w-0 grid-cols-1 items-center gap-1 rounded-xl px-3 py-2 text-sm text-secondary @2xl:gap-3",
                              eq ? "@2xl:grid-cols-5" : "@2xl:grid-cols-4",
                              t ? "bg-primary-soft-active" : "hover:bg-secondary-ghost-hover",
                            ),
                            role: "row",
                            children: [
                              (0, s.jsxs)("div", {
                                role: "cell",
                                className: "flex min-w-0 items-center gap-3 text-default @2xl:col-span-2",
                                children: [
                                  (0, s.jsxs)("span", {
                                    className: "flex min-w-0 items-center gap-4",
                                    children: [
                                      eI && "cloud" === e.source && e.automation.display_emoji
                                        ? (0, s.jsx)(z.q, {
                                            className: "h-4.5 w-8 shrink-0 object-contain",
                                            iconUrl: e.automation.icon_url,
                                            source: "saved_task",
                                            fallback: (0, s.jsx)("span", {
                                              className:
                                                "inline-flex h-4.5 w-8 shrink-0 items-center justify-center text-lg leading-none",
                                              "aria-hidden": !0,
                                              children: e.automation.display_emoji,
                                            }),
                                          })
                                        : null,
                                      (0, s.jsx)("span", { className: "truncate", children: a }),
                                    ],
                                  }),
                                  "local" === e.source && et?.unreadAutomationIds?.includes(e.automation.id)
                                    ? (0, s.jsx)(J.N, { statusState: { type: "idle", unread: !0 } })
                                    : null,
                                  (0, s.jsx)("button", {
                                    type: "button",
                                    className:
                                      "absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                                    "aria-label": a,
                                    "aria-current": !!t || void 0,
                                    onClick: () => {
                                      "cloud" === e.source ? ek(e.automation.id) : e.onOpen()
                                    },
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex min-w-0 items-center gap-2 text-xs @2xl:contents @2xl:text-sm",
                                children: [
                                  eq
                                    ? (0, s.jsxs)(s.Fragment, {
                                        children: [
                                          (0, s.jsx)("div", {
                                            role: "cell",
                                            className: (0, w.A)(
                                              "flex min-w-0 items-center gap-2",
                                              (null == n || n.is_current_user) && "shrink-0",
                                            ),
                                            children:
                                              null == n || n.is_current_user
                                                ? (0, s.jsx)(k.A, {
                                                    id: "automations.scheduled.table.you",
                                                    defaultMessage: "Me",
                                                    description:
                                                      "Owner label for the current user's personal or local scheduled task",
                                                  })
                                                : (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                      (0, s.jsx)($.e, {
                                                        alt: "",
                                                        name: n.display_name,
                                                        src: n.avatar_url ?? null,
                                                        size: "xs",
                                                      }),
                                                      null == n.display_name
                                                        ? (0, s.jsx)("span", {
                                                            className: "truncate",
                                                            children: (0, s.jsx)(k.A, {
                                                              id: "automations.scheduled.table.ownerUnavailable",
                                                              defaultMessage: "Owner unavailable",
                                                              description:
                                                                "Fallback when a task owner's permitted display metadata cannot be loaded",
                                                            }),
                                                          })
                                                        : (0, s.jsx)(D, {
                                                            automationId: e.automation.id,
                                                            name: n.display_name,
                                                          }),
                                                    ],
                                                  }),
                                          }),
                                          (0, s.jsx)(H.a, { className: "shrink-0 @2xl:hidden" }),
                                        ],
                                      })
                                    : null,
                                  (0, s.jsx)("div", {
                                    role: "cell",
                                    className: "min-w-0 shrink-0 truncate @2xl:shrink",
                                    children: (0, s.jsx)(ey, { row: e }),
                                  }),
                                  (0, s.jsx)(H.a, { className: "shrink-0 @2xl:hidden" }),
                                  (0, s.jsx)("div", {
                                    role: "cell",
                                    className: "min-w-0 truncate @sm:shrink-0 @2xl:shrink",
                                    children:
                                      "cloud" === e.source
                                        ? (0, s.jsx)(ev, { schedule: e.automation.schedule })
                                        : (0, A.em)({
                                            rrule: e.automation.rrule,
                                            nextRunAt: e.automation.nextRunAt,
                                            intl: eN,
                                            fallbackMessage: eN.formatMessage({
                                              id: "settings.automations.rruleSummaryFallback",
                                              defaultMessage: "Custom schedule",
                                              description: "Fallback label when RRULE summary cannot be generated",
                                            }),
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        `${e.source}:${e.automation.id}`,
                      )
                    }),
                  ],
                })),
          (G[6] = ej),
          (G[7] = eI),
          (G[8] = ea),
          (G[9] = eM),
          (G[10] = eC),
          (G[11] = eN),
          (G[12] = eF),
          (G[13] = eo),
          (G[14] = es),
          (G[15] = en),
          (G[16] = X),
          (G[17] = eT),
          (G[18] = et),
          (G[19] = ew),
          (G[20] = ek),
          (G[21] = eA),
          (G[22] = L),
          (G[23] = ee),
          (G[24] = eq),
          (G[25] = eP),
          (G[26] = ex),
          (G[27] = r),
          (G[28] = i),
          (G[29] = u),
          (G[30] = d),
          (G[31] = m),
          (G[32] = h),
          (G[33] = f),
          (G[34] = g),
          (G[35] = x),
          (G[36] = b),
          (G[37] = y),
          (G[38] = v),
          (G[39] = _),
          (G[40] = j),
          (G[41] = N),
          (G[42] = P),
          (G[43] = I),
          (G[44] = O),
          (G[45] = C))
      } else
        ((r = G[27]),
          (i = G[28]),
          (u = G[29]),
          (d = G[30]),
          (m = G[31]),
          (h = G[32]),
          (f = G[33]),
          (g = G[34]),
          (x = G[35]),
          (b = G[36]),
          (y = G[37]),
          (v = G[38]),
          (_ = G[39]),
          (j = G[40]),
          (N = G[41]),
          (P = G[42]),
          (I = G[43]),
          (O = G[44]),
          (C = G[45]))
      return (
        G[75] !== ea || G[76] !== el || G[77] !== X || G[78] !== i
          ? ((F =
              null == X || 0 !== i.length || el || null != ea
                ? null
                : (0, s.jsx)("div", {
                    role: "status",
                    className: "py-6 text-sm text-secondary",
                    children: (0, s.jsx)(k.A, {
                      id: "automations.scheduled.table.empty",
                      defaultMessage: "No tasks match your filters",
                      description:
                        "Empty Scheduled table after all pages have loaded for the chosen scope, status, and search",
                    }),
                  })),
            (G[75] = ea),
            (G[76] = el),
            (G[77] = X),
            (G[78] = i),
            (G[79] = F))
          : (F = G[79]),
        G[80] !== ea || G[81] !== el || G[82] !== ec || G[83] !== eo || G[84] !== eS
          ? ((E =
              null != ea || ec
                ? null
                : (0, s.jsx)(W.D, { hasNextPage: el, isFetchingNextPage: eo, onLoadNextPage: eS })),
            (G[80] = ea),
            (G[81] = el),
            (G[82] = ec),
            (G[83] = eo),
            (G[84] = eS),
            (G[85] = E))
          : (E = G[85]),
        G[86] !== F || G[87] !== E || G[88] !== N || G[89] !== P || G[90] !== I || G[91] !== O || G[92] !== C
          ? ((U = (0, s.jsxs)("div", { className: N, "aria-busy": P, children: [I, O, C, F, E] })),
            (G[86] = F),
            (G[87] = E),
            (G[88] = N),
            (G[89] = P),
            (G[90] = I),
            (G[91] = O),
            (G[92] = C),
            (G[93] = U))
          : (U = G[93]),
        G[94] !== r ||
        G[95] !== u ||
        G[96] !== d ||
        G[97] !== m ||
        G[98] !== h ||
        G[99] !== f ||
        G[100] !== g ||
        G[101] !== x ||
        G[102] !== b ||
        G[103] !== y ||
        G[104] !== v ||
        G[105] !== _ ||
        G[106] !== j ||
        G[107] !== U
          ? ((B = (0, s.jsxs)(r, {
              animateContentLayout: u,
              collapseHeaderOnScroll: d,
              expandSearchWhenWrapped: m,
              headerPlacement: h,
              headerVariant: f,
              contentWidth: g,
              title: x,
              headerAction: b,
              searchToolbar: y,
              stickyControls: v,
              search: _,
              children: [j, U],
            })),
            (G[94] = r),
            (G[95] = u),
            (G[96] = d),
            (G[97] = m),
            (G[98] = h),
            (G[99] = f),
            (G[100] = g),
            (G[101] = x),
            (G[102] = b),
            (G[103] = y),
            (G[104] = v),
            (G[105] = _),
            (G[106] = j),
            (G[107] = U),
            (G[108] = B))
          : (B = G[108]),
        B
      )
    }
    function eu(e) {
      return "cloud" !== e.source || e.automation.owner.is_current_user ? [] : [e.automation.id]
    }
    function ed(e, t) {
      return (eb(e) ?? 1 / 0) - (eb(t) ?? 1 / 0) || eg(e).localeCompare(eg(t))
    }
    function em(e, t) {
      return eg(e).localeCompare(eg(t))
    }
    function eh(e, t) {
      return Number("active" !== ex(e)) - Number("active" !== ex(t))
    }
    function ep(e) {
      return { source: "cloud", automation: e }
    }
    function ef(e) {
      return e.id
    }
    function eg(e) {
      return "local" === e.source ? e.automation.name : e.automation.title
    }
    function ex(e) {
      return "cloud" === e.source ? e.automation.status : "PAUSED" === e.automation.status ? "paused" : "active"
    }
    function eb(e) {
      if ("local" === e.source) return "ACTIVE" === e.automation.status ? (0, N.b)(e.automation) : null
      let t = e.automation.schedule
      return "scheduled" === t.kind && null != t.next_run_at ? Date.parse(t.next_run_at) : null
    }
    function ey(e) {
      let t,
        a,
        l,
        r,
        o = (0, n.c)(12),
        { row: i } = e,
        u = (0, c.A)(),
        d = (0, X.wv)()
      o[0] !== i ? ((t = ex(i)), (o[0] = i), (o[1] = t)) : (t = o[1])
      let m = t
      if ("active" !== m) {
        let e
        return (
          o[2] !== m
            ? ((e = (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.inactive",
                defaultMessage: "{status, select, paused {Paused} other {Completed}}",
                description: "Next run cell for a task that is paused or completed",
                values: { status: m },
              })),
              (o[2] = m),
              (o[3] = e))
            : (e = o[3]),
          e
        )
      }
      if ("cloud" === i.source && "scheduled" !== i.automation.schedule.kind) {
        let e
        return (
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.alwaysOn",
                defaultMessage: "Always on",
                description: "Next run label for an active event or condition monitor",
              })),
              (o[4] = e))
            : (e = o[4]),
          e
        )
      }
      o[5] !== i ? ((a = eb(i)), (o[5] = i), (o[6] = a)) : (a = o[6])
      let h = a
      if (null == h) return "—"
      if (o[7] !== u || o[8] !== h || o[9] !== d) {
        r = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Date(h),
            t = new Date(d)
          if ((t.setDate(t.getDate() + 1), e.toDateString() === d.toDateString())) {
            r = (0, s.jsx)(k.A, {
              id: "automations.scheduled.table.today",
              defaultMessage: "Today at {time, time, short}",
              description: "Next Scheduled task run later today in the viewer's timezone",
              values: { time: e },
            })
            break e
          }
          if (e.toDateString() === t.toDateString()) {
            r = (0, s.jsx)(k.A, {
              id: "automations.scheduled.table.tomorrow",
              defaultMessage: "Tomorrow at {time, time, short}",
              description: "Next Scheduled task run tomorrow in the viewer's timezone",
              values: { time: e },
            })
            break e
          }
          l = u.formatDate(e, {
            month: "short",
            day: "numeric",
            year: e.getFullYear() === d.getFullYear() ? void 0 : "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        }
        ;((o[7] = u), (o[8] = h), (o[9] = d), (o[10] = l), (o[11] = r))
      } else ((l = o[10]), (r = o[11]))
      return r !== Symbol.for("react.early_return_sentinel") ? r : l
    }
    function ev(e) {
      let t,
        a = (0, n.c)(6),
        { schedule: l } = e
      if ("condition_watch" === l.kind) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.monitoring",
                defaultMessage: "Monitoring",
                description: "Schedule label for a condition-monitoring task",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if ("webhook" === l.kind) {
        let e,
          t = l.event_sources[0] ?? ""
        return (
          a[1] !== l.event_sources.length || a[2] !== t
            ? ((e = (0, s.jsx)(k.A, {
                id: "automations.scheduled.table.events",
                defaultMessage:
                  "{count, plural, =0 {On events} one {On {provider} events} other {On events from # apps}}",
                description:
                  "Task event trigger summary. provider is an untranslated app name such as Gmail; count is the number of event-source apps",
                values: { count: l.event_sources.length, provider: t },
              })),
              (a[1] = l.event_sources.length),
              (a[2] = t),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      return (
        a[4] !== l.frequency
          ? ((t = (0, s.jsx)(k.A, {
              id: "automations.scheduled.table.frequency",
              defaultMessage:
                "{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Yearly} custom {Custom} other {—}}",
              description: "Cadence of a scheduled task, or an em dash when no cadence is available",
              values: { frequency: l.frequency },
            })),
            (a[4] = l.frequency),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function e_(e) {
      let t,
        a = (0, n.c)(4),
        { error: l } = e
      if (l instanceof x.fk) {
        if ("automation_table_query_too_broad" === l.errorCode) {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(k.A, { ...T.tooBroad })), (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        if (400 === l.status || 409 === l.status) {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(k.A, {
                  id: "automations.scheduled.table.expired",
                  defaultMessage: "This list has changed or expired. Retry to load it again.",
                  description:
                    "The Scheduled pagination cursor is invalid, expired, or based on changed access; retry starts from the first page",
                })),
                (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        if (403 === l.status) {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(k.A, {
                  id: "automations.scheduled.table.denied",
                  defaultMessage: "You no longer have access to this view",
                  description: "Scheduled table request was denied; cached rows are hidden",
                })),
                (a[2] = e))
              : (e = a[2]),
            e
          )
        }
      }
      return (
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(k.A, {
              id: "automations.scheduled.loadError",
              defaultMessage: "Couldn’t load scheduled tasks",
              description: "Error when the Scheduled page cannot retrieve tasks",
            })),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function ej(e) {
      let t,
        a,
        l,
        b,
        y,
        v,
        _,
        w,
        k,
        A,
        S,
        N = (0, n.c)(48),
        { onOpen: M, onCreate: P, headerPlacement: I, localTasks: O, selectedTask: C, toolbarActions: q } = e,
        F = (0, o.gh)(h.u),
        T = (0, c.A)(),
        E = (0, o.Ul)(u.chatGptAuthenticatedAccountId$),
        U = (0, o.Ul)(p.GB),
        R = (0, o._U)(f.lc, E)
      N[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { scope: "all", q: "", status: "active", limit: 25 }), (N[0] = t))
        : (t = N[0])
      let [B, G] = (0, i.useState)(t),
        L = (0, g.o)(B.q ?? "", 250),
        D = R ? B.scope : "personal"
      N[1] !== L || N[2] !== B || N[3] !== D
        ? ((a = { ...B, scope: D, q: L }), (N[1] = L), (N[2] = B), (N[3] = D), (N[4] = a))
        : (a = N[4])
      let z = a,
        {
          data: $,
          error: H,
          isPending: W,
          isFetching: Q,
          hasNextPage: V,
          isFetchingNextPage: X,
          isFetchNextPageError: K,
          fetchNextPage: Y,
        } = (0, o._U)(j, z),
        Z = H instanceof x.fk && (400 === H.status || 403 === H.status || 404 === H.status || 409 === H.status)
      N[5] !== E || N[6] !== z || N[7] !== F.queryClient
        ? ((l = () => {
            F.queryClient.resetQueries({ queryKey: ["cloud-automations", "table", E, z], exact: !0 })
          }),
          (N[5] = E),
          (N[6] = z),
          (N[7] = F.queryClient),
          (N[8] = l))
        : (l = N[8])
      let J = l
      N[9] !== T
        ? ((b = T.formatMessage({
            id: "automations.scheduled.table.add",
            defaultMessage: "Add",
            description: "Opens the existing scheduled task creation flow",
          })),
          (N[9] = T),
          (N[10] = b))
        : (b = N[10])
      let ee = b
      ;(N[11] !== B || N[12] !== R
        ? ((y = R || "team" !== B.scope ? B : { ...B, scope: "all" }), (N[11] = B), (N[12] = R), (N[13] = y))
        : (y = N[13]),
        N[14] !== $ || N[15] !== Z
          ? ((v = null == $ || Z ? void 0 : r()($.pages.flatMap(ew), "id")), (N[14] = $), (N[15] = Z), (N[16] = v))
          : (v = N[16]))
      let et = Q || B.q !== L
      return (
        N[17] !== ee || N[18] !== U || N[19] !== P
          ? ((_ =
              null == P
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("span", {
                        className: U ? "browser:max-md:hidden" : void 0,
                        children: (0, s.jsx)(m.p, {
                          color: "primary",
                          icon: { 16: d.xFs, 20: d.ONy },
                          onClick: P,
                          children: ee,
                        }),
                      }),
                      U
                        ? (0, s.jsx)("span", {
                            className: "hidden browser:max-md:inline-flex",
                            children: (0, s.jsx)(m.p, {
                              color: "primary",
                              icon: { 16: d.xFs, 20: d.ONy },
                              uniform: !0,
                              "aria-label": ee,
                              onClick: P,
                            }),
                          })
                        : null,
                    ],
                  })),
            (N[17] = ee),
            (N[18] = U),
            (N[19] = P),
            (N[20] = _))
          : (_ = N[20]),
        N[21] !== _ || N[22] !== q
          ? ((w = (0, s.jsxs)(s.Fragment, { children: [q, _] })), (N[21] = _), (N[22] = q), (N[23] = w))
          : (w = N[23]),
        N[24] !== Y || N[25] !== K || N[26] !== Z || N[27] !== J
          ? ((k = () => {
              K && !Z ? Y() : J()
            }),
            (N[24] = Y),
            (N[25] = K),
            (N[26] = Z),
            (N[27] = J),
            (N[28] = k))
          : (k = N[28]),
        N[29] !== Y
          ? ((A = () => {
              Y()
            }),
            (N[29] = Y),
            (N[30] = A))
          : (A = N[30]),
        N[31] !== H ||
        N[32] !== V ||
        N[33] !== I ||
        N[34] !== K ||
        N[35] !== X ||
        N[36] !== W ||
        N[37] !== O ||
        N[38] !== M ||
        N[39] !== C ||
        N[40] !== w ||
        N[41] !== k ||
        N[42] !== A ||
        N[43] !== y ||
        N[44] !== v ||
        N[45] !== et ||
        N[46] !== R
          ? ((S = (0, s.jsx)(ec, {
              query: y,
              items: v,
              localTasks: O,
              selectedTask: C,
              error: H,
              isLoading: W,
              isRefreshing: et,
              hasNextPage: V,
              isFetchingNextPage: X,
              isFetchNextPageError: K,
              teamsEnabled: R,
              headerPlacement: I,
              createAction: w,
              onChangeQuery: G,
              onOpen: M,
              onRetry: k,
              onLoadNextPage: A,
            })),
            (N[31] = H),
            (N[32] = V),
            (N[33] = I),
            (N[34] = K),
            (N[35] = X),
            (N[36] = W),
            (N[37] = O),
            (N[38] = M),
            (N[39] = C),
            (N[40] = w),
            (N[41] = k),
            (N[42] = A),
            (N[43] = y),
            (N[44] = v),
            (N[45] = et),
            (N[46] = R),
            (N[47] = S))
          : (S = N[47]),
        S
      )
    }
    function ew(e) {
      return e.items
    }
  },
  BO0A(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      l = a("zTeN"),
      r = a("zd8w"),
      o = a("fVOX"),
      i = a("OWtl")
    function c(e) {
      let t,
        a,
        c,
        u,
        d,
        m = (0, n.c)(17),
        { className: h, fallback: p, iconUrl: f, source: g } = e,
        x = (0, l.gh)(i.u),
        [b, y] = (0, r.useState)(null)
      if ("load_error" === b) {
        let e
        return (m[0] !== p ? ((e = (0, s.jsx)(s.Fragment, { children: p })), (m[0] = p), (m[1] = e)) : (e = m[1]), e)
      }
      m[2] !== x || m[3] !== g
        ? ((t = (e) => {
            y(e)
            let t = x.get(o.u),
              a = { icon_source: g, outcome: e }
            ;(t.count("default", "scheduled_task_icon", a),
              t.log({ message: "Scheduled task icon load", status: "load_error" === e ? "error" : "info", context: a }))
          }),
          (m[2] = x),
          (m[3] = g),
          (m[4] = t))
        : (t = m[4])
      let v = t,
        _ = "loaded" !== b ? p : null,
        j = "loaded" !== b
      return (
        m[5] !== v
          ? ((a = () => v("loaded")), (c = () => v("load_error")), (m[5] = v), (m[6] = a), (m[7] = c))
          : ((a = m[6]), (c = m[7])),
        m[8] !== h || m[9] !== f || m[10] !== j || m[11] !== a || m[12] !== c
          ? ((u = (0, s.jsx)("img", {
              className: h,
              hidden: j,
              alt: "",
              "aria-hidden": "true",
              src: f,
              referrerPolicy: "no-referrer",
              onLoad: a,
              onError: c,
            })),
            (m[8] = h),
            (m[9] = f),
            (m[10] = j),
            (m[11] = a),
            (m[12] = c),
            (m[13] = u))
          : (u = m[13]),
        m[14] !== _ || m[15] !== u
          ? ((d = (0, s.jsxs)(s.Fragment, { children: [_, u] })), (m[14] = _), (m[15] = u), (m[16] = d))
          : (d = m[16]),
        d
      )
    }
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            l,
            r,
            o = (0, n.c)(8)
          ;(o[0] !== e ? (({ iconUrl: a, ...t } = e), (o[0] = e), (o[1] = t), (o[2] = a)) : ((t = o[1]), (a = o[2])),
            o[3] !== a
              ? ((l = (function (e) {
                  if (!e) return null
                  try {
                    let t = new URL(e)
                    if (t.username || t.password || t.search || t.hash) return null
                    let a =
                        "https://persistent.oaistatic.com" === t.origin &&
                        /^\/images\/illustrated-icons\/v[1-9][0-9]*\/96\/[a-z0-9_-]+\.webp$/.test(t.pathname),
                      s =
                        "https://openaiassets.z19.web.core.windows.net" === t.origin &&
                        /^\/scheduled-task-emojis\/v1\/[a-z0-9_-]+\.svg$/.test(t.pathname),
                      n =
                        "https://openaiassets.blob.core.windows.net" === t.origin &&
                        /^\/\$web\/tasks\/[a-z0-9_-]+\.(svg|png)$/.test(t.pathname)
                    return a || s || n ? t.href : null
                  } catch {
                    return null
                  }
                })(a)),
                (o[3] = a),
                (o[4] = l))
              : (l = o[4]))
          let i = l
          return (
            o[5] !== i || o[6] !== t
              ? ((r =
                  null == i
                    ? (0, s.jsx)(s.Fragment, { children: t.fallback })
                    : (0, s.jsx)(c, { ...t, iconUrl: i }, i)),
                (o[5] = i),
                (o[6] = t),
                (o[7] = r))
              : (r = o[7]),
            r
          )
        },
      },
    )
  },
  pIbZ(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      l = a("hwkA")
    a.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            a,
            r,
            o,
            i,
            c,
            u = (0, n.c)(12)
          if (u[0] !== e) {
            let { icon: s, children: n, squareOnMobile: l, className: i, ...c } = e
            ;((r = s), (t = n), (a = i), (o = c), (u[0] = e), (u[1] = t), (u[2] = a), (u[3] = r), (u[4] = o))
          } else ((t = u[1]), (a = u[2]), (r = u[3]), (o = u[4]))
          let d = r?.[16]
          return (
            r?.[20],
            u[5] !== d ? ((i = null == d ? null : (0, s.jsx)(d, {})), (u[5] = d), (u[6] = i)) : (i = u[6]),
            u[7] !== t || u[8] !== a || u[9] !== o || u[10] !== i
              ? ((c = (0, s.jsxs)(s.Fragment, {
                  children: [
                    null,
                    (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsxs)(l.$, { ...o, className: a, size: "lg", iconSize: "sm", children: [i, t] }),
                    }),
                  ],
                })),
                (u[7] = t),
                (u[8] = a),
                (u[9] = o),
                (u[10] = i),
                (u[11] = c))
              : (c = u[11]),
            c
          )
        },
      },
    )
  },
  fJcH(e, t, a) {
    a.d(t, {
      gt: () => N,
      T4: () => S,
      bd: () => k,
      PA: () => v,
      Xo: () => A,
      _V: () => b,
      Ab: () => j,
      Oy: () => w,
      Uo: () => y,
    })
    var s = a("zTeN"),
      n = a("SPnB"),
      l = a("fGpH"),
      r = a("Ro2M"),
      o = a("sSHx"),
      i = a("nlNF"),
      c = a("OWtl"),
      u = a("QaUy"),
      d = a("E61g"),
      m = a("nZBp"),
      h = a("OMIV")
    let p = (0, s.un)(c.u, ({ get: e }) => !e(h.RS) && e(o.B).isCapable && (e(m.aB) || e(d.Gf)))
    var f = a("FlC2"),
      g = a("MXHX"),
      x = a("nvO1")
    let b = (0, s.un)(c.u, ({ get: e }) => {
        if (e(o.B).isLoading || e(n.PO).accountLoading || "loading" === e(n.m0).status) return null
        let t = e(r.H)
        if (null == t || !e(o.B).isCapable || !e(x.lc, t)) return !1
        let a = e(x.IB, t).data
        return null == a ? null : a.length > 0
      }),
      y = (0, s.un)(c.u, ({ get: e }) => e(f.gQ, e(n.chatGptAuthenticatedAccountId$)) ?? "all"),
      v = (0, s.un)(c.u, ({ get: e }) => {
        if (!0 !== e(b)) return null
        let t = e(n.chatGptAuthenticatedAccountId$),
          a = e(f.O_, t),
          s = e(x.IB, t).data
        return null != a && a.length > 0 && !a.some((e) => "personal" === e || s?.some((t) => e === `team:${t.id}`))
          ? null
          : a
      }),
      _ = (0, s.un)(c.u, ({ get: e }) => {
        let t = (0, u.UP)(e(i.x2)),
          a = e(r.H)
        if (t?.source !== "cloud" || null == a || (null != t.accountId && t.accountId !== a) || !e(o.B).isCapable)
          return
        let s = e(r.jv, t.automationId).data
        return null != s && "paused" === (0, l.Xr)(s.automation) ? s : void 0
      }),
      j = (0, s.i1)(c.u, (e, { get: t }) => {
        let a = t(o.B).isCapable ? S(e).map((e) => t(r.GQ, e)) : [],
          s = (0, f.F0)(e)
        return {
          firstUnfinishedStatus: s[a.findIndex((e) => e.isLoading || e.hasNextPage)],
          items:
            0 === s.length || a.some(({ data: e }) => null != e)
              ? a.flatMap(({ data: e }) => e?.pages.flatMap((e) => e.items) ?? [])
              : void 0,
          isLoading: a.some(({ isLoading: e }) => e),
          isError: a.some(({ error: e }) => null != e),
          isIdle: a.every(({ fetchStatus: e }) => "idle" === e),
          isExhausted: a.every(({ data: e, hasNextPage: t }) => null != e && !t),
          hasNextPage: a.some(({ hasNextPage: e }) => e),
          isFetchingNextPage: a.some(({ isFetchingNextPage: e }) => e),
          fetchNextPage: async () => {
            await a.find(({ hasNextPage: e }) => e)?.fetchNextPage({ cancelRefetch: !1 })
          },
          retry: async () => {
            await Promise.all(a.map(({ isFetchNextPageError: e, fetchNextPage: t, refetch: a }) => (e ? t() : a())))
          },
        }
      }),
      w = (0, s.i1)(c.u, (e, { get: t }) => {
        let a = t(v),
          s = t(
            j,
            null == e.group
              ? e.status
              : (0, f.F0)(e.status).filter((t) => ("active" === e.group ? "active" === t : "active" !== t)),
          )
        return {
          hasNextPage: (null == a || a.includes("personal")) && s.hasNextPage,
          isFetchingNextPage: s.isFetchingNextPage,
          fetchNextPage: s.fetchNextPage,
        }
      }),
      k = (0, s.i1)(c.u, (e, { get: t }) => {
        let a = t(r.H)
        if (null == a || !t(o.B).isCapable) return
        let { items: s } = t(j, e),
          n = t(v),
          i = t(g.X6, a).data,
          c = t(_)
        if (null == s && null == i && null == c) return
        let u = t(x.lc, a),
          d = u && i?.accountId === a ? i.items : [],
          m = new Map(d.map(({ automation: e, teamId: t }) => [e.id, t]))
        return (0, l.dO)(
          [...(s ?? []), ...(null == c ? [] : [c.automation])],
          d.map(({ automation: e }) => e),
        )
          .map((e) => ({ ...e, teamId: m.get(e.automation.id) ?? e.automation.team_id ?? void 0 }))
          .filter(
            (a) =>
              (null == n || !!n.includes(null == a.teamId ? "personal" : `team:${a.teamId}`)) &&
              (null == a.teamId || !!u) &&
              (null != a.teamId || null == a.automation.aeon_id || !!t(p)) &&
              (0, f.F0)(e).includes((0, l.Xr)(a.automation)),
          )
      }),
      A = (0, s.un)(c.u, ({ get: e }) => null != e(v) || 3 !== (0, f.F0)(e(y)).length)
    function S(e) {
      return (0, f.F0)(e).map((e) => {
        switch (e) {
          case "active":
            return "scheduled"
          case "paused":
            return "paused"
          case "completed":
            return "finished"
        }
      })
    }
    async function N(e, t, a) {
      if (!e.get(o.B).isCapable) return
      let s = e.get(v)
      if (null != s && !s.includes("personal")) return
      let n = e.get(r.H)
      await Promise.all(
        S(t).map(async (t) => {
          try {
            for (await e.query.getOrFetch(r.GQ, t); e.get(r.H) === n;) {
              if (a?.aborted && null == e.get(f.cN, n)) return
              let s = e.get(v)
              if ((null != s && !s.includes("personal")) || !S(e.get(y)).includes(t)) return
              let l = e.get(r.GQ, t)
              if (!l.hasNextPage || l.isError) return
              await l.fetchNextPage({ cancelRefetch: !1 })
            }
          } catch {}
        }),
      )
    }
  },
}
//# sourceMappingURL=465725.9ea6209926.js.map
