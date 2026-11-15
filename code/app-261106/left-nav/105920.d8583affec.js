export const __rspack_esm_ids = [105920]
export const __webpack_modules__ = {
  rUQK(e, t, a) {
    let l = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(l.map((e) => [e.id, e]))
    let n = l.map((e) => e.id)
    a.d(t, {}, { DR: n, MV: () => l })
  },
  SIrB(e, t, a) {
    let l = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function n(e) {
      return l[e]
    }
    a.d(
      t,
      {},
      {
        AH: function (e) {
          switch (e) {
            case "documents":
            case "documents-router":
            case "documents-router@openai-curated-remote":
            case "documents@openai-primary-runtime":
            case "connector_openai_documents":
            case "google-docs":
              return "document"
            case "presentations":
            case "presentations-router":
            case "presentations-router@openai-curated-remote":
            case "presentations@openai-primary-runtime":
            case "connector_openai_presentations":
            case "google-slides":
              return "presentation"
            case "spreadsheets":
            case "spreadsheets-router":
            case "spreadsheets-router@openai-curated-remote":
            case "spreadsheets@openai-primary-runtime":
            case "connector_openai_spreadsheets":
            case "google-sheets":
              return "spreadsheet"
            default:
              return null
          }
        },
        C$: function (e, t) {
          return e.filter((e) => t.includes(e.type))
        },
        IP: function (e, t) {
          let a = n(t),
            l = new Set()
          return e
            .filter(({ template: e, enabled: t }) => !(!t || !a.includes(e.type) || l.has(e.id)) && (l.add(e.id), !0))
            .toSorted((e, t) =>
              e.personal !== t.personal
                ? e.personal
                  ? -1
                  : 1
                : (e.personal && (t.template.createdAt ?? -1 / 0) - (e.template.createdAt ?? -1 / 0)) || 0,
            )
            .map(({ template: e }) => e)
        },
        K$: function e(t) {
          return "string" == typeof t ? "document" === t || "google-docs" === t : t.length > 0 && t.every(e)
        },
        Zk: function (e) {
          return Object.entries(l).find((t) => t[1].some((t) => t === e))?.[0] ?? null
        },
        qt: n,
      },
    )
  },
  sNfo(e, t, a) {
    var l = a("ASxG"),
      n = a("odKs"),
      s = a("GIgU")
    let r = l.object({
      pluginId: l.string().min(1),
      template: l.object({
        key: l.string().min(1),
        name: l.string().trim().min(1),
        prompt: l.string().trim().min(1),
        rrule: l.string().trim().min(1),
      }),
    })
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t = r.safeParse(e)
          if (!t.success) return null
          let { pluginId: a, template: l } = t.data,
            o = (0, s.pG)({ pluginId: a, template: l })
          return (0, n.SK)({ ...o.scheduleConfig, mode: "custom", customRrule: l.rrule }) ? o : null
        },
      },
    )
  },
  SY7h(e, t, a) {
    function l(e) {
      return e.toLocaleLowerCase().replace(/\s+/g, " ").trim()
    }
    a.d(
      t,
      {},
      {
        d: function (e, t) {
          let a = l(e)
          return 0 === a.length || l(t.join(" ")).includes(a)
        },
      },
    )
  },
  hwNx(e, t, a) {
    var l = a("zTeN"),
      n = a("OWtl"),
      s = a("OMIV")
    let r = (0, l.un)(n.u, ({ get: e }) => e(s.JW, "2220834113") || e(s.JW, "834565546"))
    a.d(t, {}, { l: r })
  },
  HzCW(e, t, a) {
    var l = a("ASxG")
    let n = l.object({
      navigationSource: l.enum(["scheduled_page", "notification", "conversation", "conversation_sidebar", "editor"]),
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
    var l = a("ABep"),
      n = a("QosV"),
      s = a("i5ac"),
      r = a.n(s),
      o = a("zTeN"),
      i = a("zd8w"),
      d = a("Wf1j"),
      c = a("SPnB"),
      u = a("bVeK"),
      m = a("pIbZ"),
      h = a("OWtl"),
      p = a("khOd"),
      f = a("nvO1"),
      g = a("GEsy"),
      x = a("GDNt"),
      b = a("sSHx"),
      v = a("jov5"),
      y = a("Ghh3"),
      w = a("rvFo")
    let j = (0, o.N3)(h.u, (e, { get: t }) => {
      let a = t(c.chatGptAuthenticatedAccountId$)
      return {
        enabled: null != a && t(v.e) && t(b.B).isCapable,
        initialPageParam: null,
        queryKey: ["cloud-automations", "table", a, e],
        queryFn: ({ pageParam: t, signal: a }) =>
          y.Request.safePost("/automations/query", {
            requestBody: { ...e, cursor: t },
            signal: a,
            expectedErrorStatuses: [400, 403, 404, 409, 422, 503],
          }),
        getNextPageParam: (e) => e.cursor ?? void 0,
        refetchOnMount: !0,
        retry: !1,
        staleTime: w.D.ONE_MINUTE,
      }
    })
    var A = a("on57"),
      N = a("oyxz"),
      _ = a("odKs"),
      S = a("SY7h"),
      k = a("zdvx"),
      I = a("hwNx"),
      C = a("bqtn"),
      P = a("EShr"),
      M = a("fJcH")
    function O(e) {
      let t,
        a,
        s,
        r = (0, n.c)(5),
        { query: i, onChangeQuery: d } = e
      return !0 !== (0, o.Ul)(M._V)
        ? null
        : (r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(N.A, {
                id: "automations.scheduled.table.ownerFilter",
                defaultMessage: "Owner",
                description: "Opens the Scheduled task owner filter, which allows selecting Personal, Teams, or both",
              })),
              (a = ["personal", "team"]),
              (r[0] = t),
              (r[1] = a))
            : ((t = r[0]), (a = r[1])),
          r[2] !== d || r[3] !== i
            ? ((s = (0, l.jsx)(C.ms.FlyoutSubmenuItem, {
                contentWidth: "menu",
                label: t,
                children: a.map((e) =>
                  (0, l.jsx)(
                    C.ms.CheckboxItem,
                    {
                      checked: "all" === i.scope || i.scope === e,
                      disabled: i.scope === e,
                      onCheckedChange: (t) => {
                        let a = "personal" === e ? "team" : "personal"
                        d({ ...i, scope: t ? "all" : a })
                      },
                      children: (0, l.jsx)(N.A, {
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
              (r[2] = d),
              (r[3] = i),
              (r[4] = s))
            : (s = r[4]),
          s)
    }
    function F(e) {
      let t,
        a,
        s,
        r,
        i,
        c = (0, n.c)(11),
        { query: u, onChangeQuery: m } = e,
        h = (0, d.A)()
      if (!0 !== (0, o.Ul)(M._V)) return null
      c[0] !== h
        ? ((t = h.formatMessage({
            id: "automations.scheduled.table.scopeLabel",
            defaultMessage: "Task ownership",
            description: "Switches between all, personal, and Team scheduled tasks",
          })),
          (c[0] = h),
          (c[1] = t))
        : (t = c[1])
      let p = u.scope ?? "all"
      return (
        c[2] !== m || c[3] !== u
          ? ((a = (e) => m({ ...u, scope: e })), (c[2] = m), (c[3] = u), (c[4] = a))
          : (a = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = ["all", "personal", "team"]), (c[5] = s)) : (s = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = s.map(T)), (c[6] = r)) : (r = c[6]),
        c[7] !== t || c[8] !== p || c[9] !== a
          ? ((i = (0, l.jsx)(P.T, { ariaLabel: t, size: "toolbar", selectedId: p, onSelect: a, options: r })),
            (c[7] = t),
            (c[8] = p),
            (c[9] = a),
            (c[10] = i))
          : (i = c[10]),
        i
      )
    }
    function T(e) {
      return {
        id: e,
        label: (0, l.jsx)(N.A, {
          id: "automations.scheduled.table.scopeOption",
          defaultMessage: "{scope, select, all {All} personal {Personal} other {Team}}",
          description: "Scheduled page tabs for all tasks, the user's tasks, or tasks shared with Teams",
          values: { scope: e },
        }),
      }
    }
    let q = (0, a("Qgfj").YK)({
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
    var R = a("HZfM"),
      L = a("Ro2M"),
      B = a("Sm6l"),
      E = a("fnPc"),
      U = a("kfGJ"),
      D = a("MXHX")
    function z(e) {
      let t,
        a,
        s,
        r,
        i,
        c,
        m = (0, n.c)(20),
        { automationId: p, name: f } = e,
        g = (0, o.gh)(h.u),
        x = (0, d.A)(),
        b = (0, R.Zp)(),
        v = (0, o.Ul)(L.H),
        { data: y } = (0, o._U)(D.X6, v)
      m[0] !== v || m[1] !== p || m[2] !== y
        ? ((t = y?.accountId === v ? y.items.find((e) => e.automation.id === p)?.teamId : void 0),
          (m[0] = v),
          (m[1] = p),
          (m[2] = y),
          (m[3] = t))
        : (t = m[3])
      let w = t
      if (null == w) {
        let e
        return (
          m[4] !== f
            ? ((e = (0, l.jsx)("span", { className: "truncate", children: f })), (m[4] = f), (m[5] = e))
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
        m[9] !== b || m[10] !== g || m[11] !== w
          ? ((s = () => {
              ;((0, E.a)(g, U.fI), b(`/settings/teams/${encodeURIComponent(w)}`))
            }),
            (m[9] = b),
            (m[10] = g),
            (m[11] = w),
            (m[12] = s))
          : (s = m[12]),
        m[13] !== f
          ? ((r = (0, l.jsx)("span", { className: "truncate", children: f })), (m[13] = f), (m[14] = r))
          : (r = m[14]),
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(u.$XR, {
              className: "group-hover:opacity-100 group-focus-visible:opacity-100 @2xl:opacity-0",
            })),
            (m[15] = i))
          : (i = m[15]),
        m[16] !== a || m[17] !== s || m[18] !== r
          ? ((c = (0, l.jsxs)(B.$, {
              className: "group relative",
              color: "ghostMuted",
              size: "inline",
              allowShrink: !0,
              "aria-label": a,
              onClick: s,
              children: [r, i],
            })),
            (m[16] = a),
            (m[17] = s),
            (m[18] = r),
            (m[19] = c))
          : (c = m[19]),
        c
      )
    }
    var G = a("BO0A"),
      W = a("LhhH"),
      H = a("zjpG"),
      $ = a("wZQ4"),
      Q = a("PkPj"),
      K = a("zWqe"),
      V = a("KIKs"),
      Y = a("cWHY"),
      X = a("DEA6"),
      J = a("O666"),
      Z = a("j89V"),
      ee = a("T0Rc"),
      et = a("Bl5Q"),
      ea = a("N2rm"),
      el = a("Dgwo"),
      en = a("l00C"),
      es = a("OMIV")
    function er(e) {
      let t,
        a,
        l,
        s,
        r = (0, n.c)(15),
        { automationIds: i } = e,
        d = (0, o.gh)(h.u),
        u = (0, o.Ul)(c.chatGptAuthenticatedAccountId$),
        m = (0, o._U)(es.JW, "1153277950"),
        p = (0, o._U)(f.lc, u),
        { status: g } = (0, o._U)(en.M4, ea.iw)
      r[0] !== i ? ((t = i.slice(0, 10)), (r[0] = i), (r[1] = t)) : (t = r[1])
      let x = t,
        b = x.length > 0 && p && "ready" === g
      return (
        r[2] !== u || r[3] !== m || r[4] !== x
          ? ((a = ["team-latest-run-history-prefetch", u, x, m]), (r[2] = u), (r[3] = m), (r[4] = x), (r[5] = a))
          : (a = r[5]),
        r[6] !== u || r[7] !== m || r[8] !== x || r[9] !== d
          ? ((l = async (e) => {
              let { signal: t } = e
              return (
                await (0, et.Ay)(
                  x,
                  async (e) => {
                    if ((await eo(t), t.throwIfAborted(), d.get(c.chatGptAuthenticatedAccountId$) !== u)) return
                    let a = await y.Request.safeGet("/automation/{automation_id}/runs/latest", {
                      parameters: { path: { automation_id: e } },
                      signal: t,
                      expectedErrorStatuses: [403, 404, 503],
                    })
                    t.throwIfAborted()
                    let l = a.last_run?.chat_ref ?? a.latest_update?.run?.chat_ref
                    l?.type === "codex" &&
                      (await eo(t),
                      t.throwIfAborted(),
                      d.get(c.chatGptAuthenticatedAccountId$) === u &&
                        (await (0, el.V)(d, ea.iw).prefetchSharedThreadTurns(l.id, m)))
                  },
                  { concurrency: 2, signal: t, stopOnError: !1 },
                ),
                !0
              )
            }),
            (r[6] = u),
            (r[7] = m),
            (r[8] = x),
            (r[9] = d),
            (r[10] = l))
          : (l = r[10]),
        r[11] !== b || r[12] !== a || r[13] !== l
          ? ((s = { enabled: b, queryKey: a, queryFn: l, retry: !1, staleTime: w.D.ONE_MINUTE }),
            (r[11] = b),
            (r[12] = a),
            (r[13] = l),
            (r[14] = s))
          : (s = r[14]),
        (0, ee.I)(s, d.queryClient),
        null
      )
    }
    function eo(e) {
      return (
        e.throwIfAborted(),
        new Promise((t, a) => {
          let l = () => {
              ;(window.cancelIdleCallback(n), a(new DOMException("Aborted", "AbortError")))
            },
            n = window.requestIdleCallback(() => {
              ;(e.removeEventListener("abort", l), t())
            })
          e.addEventListener("abort", l, { once: !0 })
        })
      )
    }
    function ei(e) {
      let t,
        a,
        s,
        r,
        o,
        i,
        c,
        h,
        p,
        f,
        g,
        x,
        b,
        v,
        y,
        w,
        j = (0, n.c)(36),
        { query: A, teamsEnabled: _, onChangeQuery: S } = e,
        k = (0, d.A)(),
        I = A.q ?? ""
      j[0] !== I ? ((t = I.trim()), (j[0] = I), (j[1] = t)) : (t = j[1])
      let P = t.length > 0
      ;(j[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { 16: u.uG0, 20: u.FuZ }), (j[2] = a)) : (a = j[2]),
        j[3] !== k
          ? ((s = k.formatMessage({
              id: "automations.scheduled.table.filters",
              defaultMessage: "Filter and sort tasks",
              description: "Opens the Scheduled table owner and status filters and ordering menu",
            })),
            (j[3] = k),
            (j[4] = s))
          : (s = j[4]),
        j[5] !== s
          ? ((r = (0, l.jsx)(m.p, { color: "secondary", variant: "ghost", icon: a, uniform: !0, "aria-label": s })),
            (j[5] = s),
            (j[6] = r))
          : (r = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(C.ms.SectionLabel, {
              children: (0, l.jsx)(N.A, {
                id: "automations.scheduled.table.filterBy",
                defaultMessage: "Filter by",
                description: "Heading above the Scheduled task filter submenus",
              }),
            })),
            (j[7] = o))
          : (o = j[7]),
        j[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(N.A, {
              id: "automations.scheduled.table.status",
              defaultMessage: "Status",
              description: "Opens the task status choices in the Scheduled filter menu",
            })),
            (j[8] = i))
          : (i = j[8]))
      let M = A.status ?? "active"
      ;(j[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["all", "active", "paused", "finished"]), (j[9] = c))
        : (c = j[9]),
        j[10] !== S || j[11] !== A
          ? ((h = c.map((e) =>
              (0, l.jsx)(
                C.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => S({ ...A, status: e }),
                  children: (0, l.jsx)(N.A, {
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
            (j[11] = A),
            (j[12] = h))
          : (h = j[12]),
        j[13] !== h || j[14] !== M
          ? ((p = (0, l.jsx)(C.ms.FlyoutSubmenuItem, {
              contentWidth: "menu",
              label: i,
              children: (0, l.jsx)(C.ms.RadioGroup, { value: M, children: h }),
            })),
            (j[13] = h),
            (j[14] = M),
            (j[15] = p))
          : (p = j[15]),
        j[16] !== S || j[17] !== A || j[18] !== _
          ? ((f = _ ? (0, l.jsx)(O, { query: A, onChangeQuery: S }) : null),
            (j[16] = S),
            (j[17] = A),
            (j[18] = _),
            (j[19] = f))
          : (f = j[19]),
        j[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, l.jsx)(C.ms.Separator, {})), (j[20] = g))
          : (g = j[20]),
        j[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, l.jsx)(N.A, {
              id: "automations.scheduled.table.sort",
              defaultMessage: "Sort by",
              description: "Opens the ordering choices in the Scheduled table filter menu",
            })),
            (j[21] = x))
          : (x = j[21]))
      let F = A.sort ?? "automatic"
      j[22] !== P
        ? ((b = ["automatic", "next_run_asc", "updated_at_desc", "title_asc", ...(P ? ["relevance"] : [])]),
          (j[22] = P),
          (j[23] = b))
        : (b = j[23])
      let T = b
      return (
        j[24] !== S || j[25] !== A || j[26] !== T
          ? ((v = T.map((e) =>
              (0, l.jsx)(
                C.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => S({ ...A, sort: "automatic" === e ? void 0 : e }),
                  children: (0, l.jsx)(N.A, {
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
            (j[25] = A),
            (j[26] = T),
            (j[27] = v))
          : (v = j[27]),
        j[28] !== F || j[29] !== v
          ? ((y = (0, l.jsx)(C.ms.FlyoutSubmenuItem, {
              contentWidth: "menu",
              label: x,
              children: (0, l.jsx)(C.ms.RadioGroup, { value: F, children: v }),
            })),
            (j[28] = F),
            (j[29] = v),
            (j[30] = y))
          : (y = j[30]),
        j[31] !== p || j[32] !== f || j[33] !== y || j[34] !== r
          ? ((w = (0, l.jsxs)(C.Ab, {
              align: "end",
              contentWidth: "menu",
              triggerButton: r,
              children: [o, p, f, g, y],
            })),
            (j[31] = p),
            (j[32] = f),
            (j[33] = y),
            (j[34] = r),
            (j[35] = w))
          : (w = j[35]),
        w
      )
    }
    function ed(e) {
      let t,
        a,
        s,
        r,
        i,
        c,
        u,
        m,
        h,
        f,
        g,
        x,
        b,
        v,
        y,
        w,
        j,
        k,
        C,
        P,
        M,
        O,
        T,
        R,
        L,
        E,
        U = (0, n.c)(109),
        {
          query: D,
          items: V,
          selectedTask: ee,
          localTasks: et,
          error: ea,
          isLoading: el,
          isRefreshing: en,
          hasNextPage: es,
          isFetchingNextPage: eo,
          isFetchNextPageError: ed,
          teamsEnabled: ex,
          headerPlacement: eb,
          createAction: ej,
          onChangeQuery: eA,
          onOpen: eN,
          onRetry: e_,
          onLoadNextPage: eS,
        } = e,
        ek = (0, d.A)(),
        eI = (0, o.Ul)(p.GB)
      U[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { layer: "3435160418", parameter: "use_tasks_label" }), (U[0] = t))
        : (t = U[0])
      let eC = (0, o._U)(J.H$, t),
        eP = (0, o.Ul)(I.l),
        eM = D.q ?? ""
      U[1] !== eM ? ((a = eM.trim()), (U[1] = eM), (U[2] = a)) : (a = U[2])
      let eO = a.length > 0,
        eF = ex && "personal" !== D.scope,
        eT = "toolbar" === eb
      U[3] !== et?.automations || U[4] !== et?.automations.map
        ? ((s = new Set(et?.automations.map(ef))), (U[3] = et?.automations), (U[4] = et?.automations.map), (U[5] = s))
        : (s = U[5])
      let eq = s
      if (
        U[6] !== ej ||
        U[7] !== eP ||
        U[8] !== ea ||
        U[9] !== eI ||
        U[10] !== eO ||
        U[11] !== ek ||
        U[12] !== eT ||
        U[13] !== eo ||
        U[14] !== el ||
        U[15] !== en ||
        U[16] !== V ||
        U[17] !== eq ||
        U[18] !== et ||
        U[19] !== eA ||
        U[20] !== eN ||
        U[21] !== e_ ||
        U[22] !== D ||
        U[23] !== ee ||
        U[24] !== eF ||
        U[25] !== eC ||
        U[26] !== ex
      ) {
        let e, t, a, n, s
        ;(U[46] !== V ? ((e = V ?? []), (U[46] = V), (U[47] = e)) : (e = U[47]),
          U[48] !== eq ? ((t = (e) => !eq.has(e.id)), (U[48] = eq), (U[49] = t)) : (t = U[49]),
          (i = [
            ...(null == V || null == et || "team" === D.scope
              ? []
              : et.automations
                  .filter((e) => {
                    if ("DELETED" === e.status) return !1
                    let t = "PAUSED" === e.status ? "paused" : "active",
                      a = et.automationRowSummaries.get(e.id)
                    return (
                      ((D.status ?? "active") === "all" || (D.status ?? "active") === t) &&
                      (0, S.d)(D.q ?? "", [
                        e.name,
                        e.prompt,
                        et.sourcePluginsByAutomationId.get(e.id)?.displayName,
                        a?.workspaceLabel,
                        a?.scheduleLabel,
                      ])
                    )
                  })
                  .sort((e, t) =>
                    "updated_at_desc" === D.sort
                      ? t.updatedAt - e.updatedAt
                      : null != D.sort || eO
                        ? 0
                        : t.createdAt - e.createdAt,
                  )
                  .map((e) => ({ source: "local", automation: e, onOpen: () => et.onOpen(e) }))),
            ...e.filter(t).map(ep),
          ]),
          null != D.sort || eO
            ? null != et &&
              "team" !== D.scope &&
              ("title_asc" === D.sort ? i.sort(em) : "next_run_asc" === D.sort && i.sort(eu))
            : i.sort(eh),
          (r = Q.Ql),
          (c = !1),
          (u = eI),
          (m = eI),
          (h = "sticky"),
          (f = eI || eT ? "compact" : "default"),
          (g = eI ? "extraWide" : "wide"),
          U[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, l.jsx)(Y.k, {
                children: (0, l.jsx)(N.A, {
                  id: "automations.scheduled.page.title",
                  defaultMessage: "Scheduled",
                  description: "Title of the page for viewing and managing scheduled tasks and monitors",
                }),
              })),
              (U[50] = x))
            : (x = U[50]),
          U[51] !== ej
            ? ((b = (0, l.jsx)("div", { className: "flex items-center gap-2", children: ej })),
              (U[51] = ej),
              (U[52] = b))
            : (b = U[52]),
          U[53] !== eA || U[54] !== D || U[55] !== ex
            ? ((v = (0, l.jsx)(ei, { query: D, teamsEnabled: ex, onChangeQuery: eA })),
              (y = ex ? (0, l.jsx)(F, { query: D, onChangeQuery: eA }) : null),
              (U[53] = eA),
              (U[54] = D),
              (U[55] = ex),
              (U[56] = v),
              (U[57] = y))
            : ((v = U[56]), (y = U[57])))
        let o = eI ? "ms-auto w-full" : "ms-auto w-full max-w-60"
        ;(U[58] !== ek
          ? ((a = ek.formatMessage({
              id: "automations.scheduled.table.searchLabel",
              defaultMessage: "Search scheduled tasks",
              description: "Accessible label for searching task titles and instructions in the Scheduled table",
            })),
            (U[58] = ek),
            (U[59] = a))
          : (a = U[59]),
          U[60] !== ek
            ? ((n = ek.formatMessage({
                id: "automations.scheduled.table.searchPlaceholder",
                defaultMessage: "Search",
                description: "Placeholder for searching task titles and instructions in the Scheduled table",
              })),
              (U[60] = ek),
              (U[61] = n))
            : (n = U[61]))
        let d = D.q ?? ""
        ;(U[62] !== eA || U[63] !== D
          ? ((s = (e) => eA({ ...D, q: e, sort: "" === e.trim() && "relevance" === D.sort ? void 0 : D.sort })),
            (U[62] = eA),
            (U[63] = D),
            (U[64] = s))
          : (s = U[64]),
          U[65] !== o || U[66] !== a || U[67] !== n || U[68] !== d || U[69] !== s
            ? ((w = {
                className: o,
                variant: "toolbar-compact",
                autoFocus: !1,
                id: "scheduled-table-search",
                inputRole: "searchbox",
                maxLength: 256,
                label: a,
                placeholder: n,
                searchQuery: d,
                onSearchQueryChange: s,
              }),
              (U[65] = o),
              (U[66] = a),
              (U[67] = n),
              (U[68] = d),
              (U[69] = s),
              (U[70] = w))
            : (w = U[70]),
          (j = ex && null != V ? (0, l.jsx)(er, { automationIds: i.flatMap(ec) }) : null),
          (k = "@container"),
          (C = en),
          U[71] !== ea || U[72] !== eo || U[73] !== e_
            ? ((P =
                null == ea
                  ? null
                  : (0, l.jsxs)("div", {
                      className: "flex items-center justify-between gap-4 py-4",
                      role: "alert",
                      children: [
                        (0, l.jsx)(ew, { error: ea }),
                        (0, l.jsx)(B.$, {
                          color: "outline",
                          size: "toolbar",
                          loading: eo,
                          onClick: e_,
                          children: (0, l.jsx)(N.A, {
                            id: "automations.scheduled.retry",
                            defaultMessage: "Retry",
                            description: "Retries loading scheduled tasks after a request fails",
                          }),
                        }),
                      ],
                    })),
              (U[71] = ea),
              (U[72] = eo),
              (U[73] = e_),
              (U[74] = P))
            : (P = U[74]),
          (M =
            el && null == V && 0 === i.length
              ? (0, l.jsx)(K.W, {
                  loadingLabel: (0, l.jsx)(N.A, {
                    id: "automations.scheduled.loading",
                    defaultMessage: "Loading tasks",
                    description: "Loading announcement for scheduled tasks",
                  }),
                })
              : null),
          (O =
            null == V && 0 === i.length
              ? null
              : (0, l.jsxs)("div", {
                  role: "table",
                  className: "select-none",
                  "aria-label": eC
                    ? ek.formatMessage(X.U.tasks)
                    : ek.formatMessage({
                        id: "automations.scheduled.table.label",
                        defaultMessage: "Scheduled tasks",
                        description: "Accessible name of the table of scheduled tasks and monitors",
                      }),
                  children: [
                    (0, l.jsx)("div", {
                      className: "sr-only @2xl:not-sr-only",
                      children: (0, l.jsxs)("div", {
                        role: "row",
                        className: (0, A.A)(
                          "grid min-h-11 items-center gap-3 px-3 py-3 text-sm text-secondary",
                          eF ? "grid-cols-5" : "grid-cols-4",
                        ),
                        children: [
                          (0, l.jsx)("div", {
                            role: "columnheader",
                            className: "col-span-2",
                            children: (0, l.jsx)("span", {
                              className: "inline-flex w-8 justify-center",
                              children: (0, l.jsx)(N.A, {
                                id: "automations.scheduled.table.tasks",
                                defaultMessage: "Task",
                                description: "Column heading for Scheduled task names",
                              }),
                            }),
                          }),
                          eF
                            ? (0, l.jsx)("div", { role: "columnheader", children: (0, l.jsx)(N.A, { ...q.owner }) })
                            : null,
                          (0, l.jsx)("div", {
                            role: "columnheader",
                            children: (0, l.jsx)(N.A, {
                              id: "automations.scheduled.table.nextRun",
                              defaultMessage: "Next run",
                              description: "Column heading for the next planned Scheduled task occurrence",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            role: "columnheader",
                            children: (0, l.jsx)(N.A, {
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
                      return (0, l.jsx)(
                        "div",
                        {
                          className: "grid min-h-15 border-b border-subtle py-1",
                          children: (0, l.jsxs)("div", {
                            className: (0, A.A)(
                              "relative grid min-w-0 grid-cols-1 items-center gap-1 rounded-xl px-3 py-2 text-sm text-secondary @2xl:gap-3",
                              eF ? "@2xl:grid-cols-5" : "@2xl:grid-cols-4",
                              t ? "bg-primary-soft-active" : "hover:bg-secondary-ghost-hover",
                            ),
                            role: "row",
                            children: [
                              (0, l.jsxs)("div", {
                                role: "cell",
                                className: "flex min-w-0 items-center gap-3 text-default @2xl:col-span-2",
                                children: [
                                  (0, l.jsxs)("span", {
                                    className: "flex min-w-0 items-center gap-4",
                                    children: [
                                      eP && "cloud" === e.source && e.automation.display_emoji
                                        ? (0, l.jsx)(G.q, {
                                            className: "h-4.5 w-8 shrink-0 object-contain",
                                            iconUrl: e.automation.icon_url,
                                            source: "saved_task",
                                            fallback: (0, l.jsx)("span", {
                                              className:
                                                "inline-flex h-4.5 w-8 shrink-0 items-center justify-center text-lg leading-none",
                                              "aria-hidden": !0,
                                              children: e.automation.display_emoji,
                                            }),
                                          })
                                        : null,
                                      (0, l.jsx)("span", { className: "truncate", children: a }),
                                    ],
                                  }),
                                  "local" === e.source && et?.unreadAutomationIds?.includes(e.automation.id)
                                    ? (0, l.jsx)(Z.N, { statusState: { type: "idle", unread: !0 } })
                                    : null,
                                  (0, l.jsx)("button", {
                                    type: "button",
                                    className:
                                      "absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                                    "aria-label": a,
                                    "aria-current": !!t || void 0,
                                    onClick: () => {
                                      "cloud" === e.source ? eN(e.automation.id) : e.onOpen()
                                    },
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "flex min-w-0 items-center gap-2 text-xs @2xl:contents @2xl:text-sm",
                                children: [
                                  eF
                                    ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            role: "cell",
                                            className: (0, A.A)(
                                              "flex min-w-0 items-center gap-2",
                                              (null == n || n.is_current_user) && "shrink-0",
                                            ),
                                            children:
                                              null == n || n.is_current_user
                                                ? (0, l.jsx)(N.A, {
                                                    id: "automations.scheduled.table.you",
                                                    defaultMessage: "Me",
                                                    description:
                                                      "Owner label for the current user's personal or local scheduled task",
                                                  })
                                                : (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                      (0, l.jsx)(W.e, {
                                                        alt: "",
                                                        name: n.display_name,
                                                        src: n.avatar_url ?? null,
                                                        size: "xs",
                                                      }),
                                                      null == n.display_name
                                                        ? (0, l.jsx)("span", {
                                                            className: "truncate",
                                                            children: (0, l.jsx)(N.A, {
                                                              id: "automations.scheduled.table.ownerUnavailable",
                                                              defaultMessage: "Owner unavailable",
                                                              description:
                                                                "Fallback when a task owner's permitted display metadata cannot be loaded",
                                                            }),
                                                          })
                                                        : (0, l.jsx)(z, {
                                                            automationId: e.automation.id,
                                                            name: n.display_name,
                                                          }),
                                                    ],
                                                  }),
                                          }),
                                          (0, l.jsx)(H.a, { className: "shrink-0 @2xl:hidden" }),
                                        ],
                                      })
                                    : null,
                                  (0, l.jsx)("div", {
                                    role: "cell",
                                    className: "min-w-0 shrink-0 truncate @2xl:shrink",
                                    children: (0, l.jsx)(ev, { row: e }),
                                  }),
                                  (0, l.jsx)(H.a, { className: "shrink-0 @2xl:hidden" }),
                                  (0, l.jsx)("div", {
                                    role: "cell",
                                    className: "min-w-0 truncate @sm:shrink-0 @2xl:shrink",
                                    children:
                                      "cloud" === e.source
                                        ? (0, l.jsx)(ey, { schedule: e.automation.schedule })
                                        : (0, _.em)({
                                            rrule: e.automation.rrule,
                                            nextRunAt: e.automation.nextRunAt,
                                            intl: ek,
                                            fallbackMessage: ek.formatMessage({
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
          (U[6] = ej),
          (U[7] = eP),
          (U[8] = ea),
          (U[9] = eI),
          (U[10] = eO),
          (U[11] = ek),
          (U[12] = eT),
          (U[13] = eo),
          (U[14] = el),
          (U[15] = en),
          (U[16] = V),
          (U[17] = eq),
          (U[18] = et),
          (U[19] = eA),
          (U[20] = eN),
          (U[21] = e_),
          (U[22] = D),
          (U[23] = ee),
          (U[24] = eF),
          (U[25] = eC),
          (U[26] = ex),
          (U[27] = r),
          (U[28] = i),
          (U[29] = c),
          (U[30] = u),
          (U[31] = m),
          (U[32] = h),
          (U[33] = f),
          (U[34] = g),
          (U[35] = x),
          (U[36] = b),
          (U[37] = v),
          (U[38] = y),
          (U[39] = w),
          (U[40] = j),
          (U[41] = k),
          (U[42] = C),
          (U[43] = P),
          (U[44] = M),
          (U[45] = O))
      } else
        ((r = U[27]),
          (i = U[28]),
          (c = U[29]),
          (u = U[30]),
          (m = U[31]),
          (h = U[32]),
          (f = U[33]),
          (g = U[34]),
          (x = U[35]),
          (b = U[36]),
          (v = U[37]),
          (y = U[38]),
          (w = U[39]),
          (j = U[40]),
          (k = U[41]),
          (C = U[42]),
          (P = U[43]),
          (M = U[44]),
          (O = U[45]))
      return (
        U[75] !== ea || U[76] !== es || U[77] !== V || U[78] !== i
          ? ((T =
              null == V || 0 !== i.length || es || null != ea
                ? null
                : (0, l.jsx)("div", {
                    role: "status",
                    className: "py-6 text-sm text-secondary",
                    children: (0, l.jsx)(N.A, {
                      id: "automations.scheduled.table.empty",
                      defaultMessage: "No tasks match your filters",
                      description:
                        "Empty Scheduled table after all pages have loaded for the chosen scope, status, and search",
                    }),
                  })),
            (U[75] = ea),
            (U[76] = es),
            (U[77] = V),
            (U[78] = i),
            (U[79] = T))
          : (T = U[79]),
        U[80] !== ea || U[81] !== es || U[82] !== ed || U[83] !== eo || U[84] !== eS
          ? ((R =
              null != ea || ed
                ? null
                : (0, l.jsx)($.D, { hasNextPage: es, isFetchingNextPage: eo, onLoadNextPage: eS })),
            (U[80] = ea),
            (U[81] = es),
            (U[82] = ed),
            (U[83] = eo),
            (U[84] = eS),
            (U[85] = R))
          : (R = U[85]),
        U[86] !== T || U[87] !== R || U[88] !== k || U[89] !== C || U[90] !== P || U[91] !== M || U[92] !== O
          ? ((L = (0, l.jsxs)("div", { className: k, "aria-busy": C, children: [P, M, O, T, R] })),
            (U[86] = T),
            (U[87] = R),
            (U[88] = k),
            (U[89] = C),
            (U[90] = P),
            (U[91] = M),
            (U[92] = O),
            (U[93] = L))
          : (L = U[93]),
        U[94] !== r ||
        U[95] !== c ||
        U[96] !== u ||
        U[97] !== m ||
        U[98] !== h ||
        U[99] !== f ||
        U[100] !== g ||
        U[101] !== x ||
        U[102] !== b ||
        U[103] !== v ||
        U[104] !== y ||
        U[105] !== w ||
        U[106] !== j ||
        U[107] !== L
          ? ((E = (0, l.jsxs)(r, {
              animateContentLayout: c,
              collapseHeaderOnScroll: u,
              expandSearchWhenWrapped: m,
              headerPlacement: h,
              headerVariant: f,
              contentWidth: g,
              title: x,
              headerAction: b,
              searchToolbar: v,
              stickyControls: y,
              search: w,
              children: [j, L],
            })),
            (U[94] = r),
            (U[95] = c),
            (U[96] = u),
            (U[97] = m),
            (U[98] = h),
            (U[99] = f),
            (U[100] = g),
            (U[101] = x),
            (U[102] = b),
            (U[103] = v),
            (U[104] = y),
            (U[105] = w),
            (U[106] = j),
            (U[107] = L),
            (U[108] = E))
          : (E = U[108]),
        E
      )
    }
    function ec(e) {
      return "cloud" !== e.source || e.automation.owner.is_current_user ? [] : [e.automation.id]
    }
    function eu(e, t) {
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
      if ("local" === e.source) return "ACTIVE" === e.automation.status ? (0, k.b)(e.automation) : null
      let t = e.automation.schedule
      return "scheduled" === t.kind && null != t.next_run_at ? Date.parse(t.next_run_at) : null
    }
    function ev(e) {
      let t,
        a,
        s,
        r,
        o = (0, n.c)(12),
        { row: i } = e,
        c = (0, d.A)(),
        u = (0, V.wv)()
      o[0] !== i ? ((t = ex(i)), (o[0] = i), (o[1] = t)) : (t = o[1])
      let m = t
      if ("active" !== m) {
        let e
        return (
          o[2] !== m
            ? ((e = (0, l.jsx)(N.A, {
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
            ? ((e = (0, l.jsx)(N.A, {
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
      if (o[7] !== c || o[8] !== h || o[9] !== u) {
        r = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Date(h),
            t = new Date(u)
          if ((t.setDate(t.getDate() + 1), e.toDateString() === u.toDateString())) {
            r = (0, l.jsx)(N.A, {
              id: "automations.scheduled.table.today",
              defaultMessage: "Today at {time, time, short}",
              description: "Next Scheduled task run later today in the viewer's timezone",
              values: { time: e },
            })
            break e
          }
          if (e.toDateString() === t.toDateString()) {
            r = (0, l.jsx)(N.A, {
              id: "automations.scheduled.table.tomorrow",
              defaultMessage: "Tomorrow at {time, time, short}",
              description: "Next Scheduled task run tomorrow in the viewer's timezone",
              values: { time: e },
            })
            break e
          }
          s = c.formatDate(e, {
            month: "short",
            day: "numeric",
            year: e.getFullYear() === u.getFullYear() ? void 0 : "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        }
        ;((o[7] = c), (o[8] = h), (o[9] = u), (o[10] = s), (o[11] = r))
      } else ((s = o[10]), (r = o[11]))
      return r !== Symbol.for("react.early_return_sentinel") ? r : s
    }
    function ey(e) {
      let t,
        a = (0, n.c)(6),
        { schedule: s } = e
      if ("condition_watch" === s.kind) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(N.A, {
                id: "automations.scheduled.table.monitoring",
                defaultMessage: "Monitoring",
                description: "Schedule label for a condition-monitoring task",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if ("webhook" === s.kind) {
        let e,
          t = s.event_sources[0] ?? ""
        return (
          a[1] !== s.event_sources.length || a[2] !== t
            ? ((e = (0, l.jsx)(N.A, {
                id: "automations.scheduled.table.events",
                defaultMessage:
                  "{count, plural, =0 {On events} one {On {provider} events} other {On events from # apps}}",
                description:
                  "Task event trigger summary. provider is an untranslated app name such as Gmail; count is the number of event-source apps",
                values: { count: s.event_sources.length, provider: t },
              })),
              (a[1] = s.event_sources.length),
              (a[2] = t),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      return (
        a[4] !== s.frequency
          ? ((t = (0, l.jsx)(N.A, {
              id: "automations.scheduled.table.frequency",
              defaultMessage:
                "{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Yearly} custom {Custom} other {—}}",
              description: "Cadence of a scheduled task, or an em dash when no cadence is available",
              values: { frequency: s.frequency },
            })),
            (a[4] = s.frequency),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function ew(e) {
      let t,
        a = (0, n.c)(4),
        { error: s } = e
      if (s instanceof x.fk) {
        if ("automation_table_query_too_broad" === s.errorCode) {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(N.A, { ...q.tooBroad })), (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        if (400 === s.status || 409 === s.status) {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(N.A, {
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
        if (403 === s.status) {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(N.A, {
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
          ? ((t = (0, l.jsx)(N.A, {
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
        s,
        b,
        v,
        y,
        w,
        A,
        N,
        _,
        S,
        k = (0, n.c)(48),
        { onOpen: I, onCreate: C, headerPlacement: P, localTasks: M, selectedTask: O, toolbarActions: F } = e,
        T = (0, o.gh)(h.u),
        q = (0, d.A)(),
        R = (0, o.Ul)(c.chatGptAuthenticatedAccountId$),
        L = (0, o.Ul)(p.GB),
        B = (0, o._U)(f.lc, R)
      k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { scope: "all", q: "", status: "active", limit: 25 }), (k[0] = t))
        : (t = k[0])
      let [E, U] = (0, i.useState)(t),
        D = (0, g.o)(E.q ?? "", 250),
        z = B ? E.scope : "personal"
      k[1] !== D || k[2] !== E || k[3] !== z
        ? ((a = { ...E, scope: z, q: D }), (k[1] = D), (k[2] = E), (k[3] = z), (k[4] = a))
        : (a = k[4])
      let G = a,
        {
          data: W,
          error: H,
          isPending: $,
          isFetching: Q,
          hasNextPage: K,
          isFetchingNextPage: V,
          isFetchNextPageError: Y,
          fetchNextPage: X,
        } = (0, o._U)(j, G),
        J = H instanceof x.fk && (400 === H.status || 403 === H.status || 404 === H.status || 409 === H.status)
      k[5] !== R || k[6] !== G || k[7] !== T.queryClient
        ? ((s = () => {
            T.queryClient.resetQueries({ queryKey: ["cloud-automations", "table", R, G], exact: !0 })
          }),
          (k[5] = R),
          (k[6] = G),
          (k[7] = T.queryClient),
          (k[8] = s))
        : (s = k[8])
      let Z = s
      k[9] !== q
        ? ((b = q.formatMessage({
            id: "automations.scheduled.table.add",
            defaultMessage: "Add",
            description: "Opens the existing scheduled task creation flow",
          })),
          (k[9] = q),
          (k[10] = b))
        : (b = k[10])
      let ee = b
      ;(k[11] !== E || k[12] !== B
        ? ((v = B || "team" !== E.scope ? E : { ...E, scope: "all" }), (k[11] = E), (k[12] = B), (k[13] = v))
        : (v = k[13]),
        k[14] !== W || k[15] !== J
          ? ((y = null == W || J ? void 0 : r()(W.pages.flatMap(eA), "id")), (k[14] = W), (k[15] = J), (k[16] = y))
          : (y = k[16]))
      let et = Q || E.q !== D
      return (
        k[17] !== ee || k[18] !== L || k[19] !== C
          ? ((w =
              null == C
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("span", {
                        className: L ? "browser:max-md:hidden" : void 0,
                        children: (0, l.jsx)(m.p, {
                          color: "primary",
                          icon: { 16: u.xFs, 20: u.ONy },
                          onClick: C,
                          children: ee,
                        }),
                      }),
                      L
                        ? (0, l.jsx)("span", {
                            className: "hidden browser:max-md:inline-flex",
                            children: (0, l.jsx)(m.p, {
                              color: "primary",
                              icon: { 16: u.xFs, 20: u.ONy },
                              uniform: !0,
                              "aria-label": ee,
                              onClick: C,
                            }),
                          })
                        : null,
                    ],
                  })),
            (k[17] = ee),
            (k[18] = L),
            (k[19] = C),
            (k[20] = w))
          : (w = k[20]),
        k[21] !== w || k[22] !== F
          ? ((A = (0, l.jsxs)(l.Fragment, { children: [F, w] })), (k[21] = w), (k[22] = F), (k[23] = A))
          : (A = k[23]),
        k[24] !== X || k[25] !== Y || k[26] !== J || k[27] !== Z
          ? ((N = () => {
              Y && !J ? X() : Z()
            }),
            (k[24] = X),
            (k[25] = Y),
            (k[26] = J),
            (k[27] = Z),
            (k[28] = N))
          : (N = k[28]),
        k[29] !== X
          ? ((_ = () => {
              X()
            }),
            (k[29] = X),
            (k[30] = _))
          : (_ = k[30]),
        k[31] !== H ||
        k[32] !== K ||
        k[33] !== P ||
        k[34] !== Y ||
        k[35] !== V ||
        k[36] !== $ ||
        k[37] !== M ||
        k[38] !== I ||
        k[39] !== O ||
        k[40] !== A ||
        k[41] !== N ||
        k[42] !== _ ||
        k[43] !== v ||
        k[44] !== y ||
        k[45] !== et ||
        k[46] !== B
          ? ((S = (0, l.jsx)(ed, {
              query: v,
              items: y,
              localTasks: M,
              selectedTask: O,
              error: H,
              isLoading: $,
              isRefreshing: et,
              hasNextPage: K,
              isFetchingNextPage: V,
              isFetchNextPageError: Y,
              teamsEnabled: B,
              headerPlacement: P,
              createAction: A,
              onChangeQuery: U,
              onOpen: I,
              onRetry: N,
              onLoadNextPage: _,
            })),
            (k[31] = H),
            (k[32] = K),
            (k[33] = P),
            (k[34] = Y),
            (k[35] = V),
            (k[36] = $),
            (k[37] = M),
            (k[38] = I),
            (k[39] = O),
            (k[40] = A),
            (k[41] = N),
            (k[42] = _),
            (k[43] = v),
            (k[44] = y),
            (k[45] = et),
            (k[46] = B),
            (k[47] = S))
          : (S = k[47]),
        S
      )
    }
    function eA(e) {
      return e.items
    }
  },
  BO0A(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("zTeN"),
      r = a("zd8w"),
      o = a("fVOX"),
      i = a("OWtl")
    function d(e) {
      let t,
        a,
        d,
        c,
        u,
        m = (0, n.c)(17),
        { className: h, fallback: p, iconUrl: f, source: g } = e,
        x = (0, s.gh)(i.u),
        [b, v] = (0, r.useState)(null)
      if ("load_error" === b) {
        let e
        return (m[0] !== p ? ((e = (0, l.jsx)(l.Fragment, { children: p })), (m[0] = p), (m[1] = e)) : (e = m[1]), e)
      }
      m[2] !== x || m[3] !== g
        ? ((t = (e) => {
            v(e)
            let t = x.get(o.u),
              a = { icon_source: g, outcome: e }
            ;(t.count("default", "scheduled_task_icon", a),
              t.log({ message: "Scheduled task icon load", status: "load_error" === e ? "error" : "info", context: a }))
          }),
          (m[2] = x),
          (m[3] = g),
          (m[4] = t))
        : (t = m[4])
      let y = t,
        w = "loaded" !== b ? p : null,
        j = "loaded" !== b
      return (
        m[5] !== y
          ? ((a = () => y("loaded")), (d = () => y("load_error")), (m[5] = y), (m[6] = a), (m[7] = d))
          : ((a = m[6]), (d = m[7])),
        m[8] !== h || m[9] !== f || m[10] !== j || m[11] !== a || m[12] !== d
          ? ((c = (0, l.jsx)("img", {
              className: h,
              hidden: j,
              alt: "",
              "aria-hidden": "true",
              src: f,
              referrerPolicy: "no-referrer",
              onLoad: a,
              onError: d,
            })),
            (m[8] = h),
            (m[9] = f),
            (m[10] = j),
            (m[11] = a),
            (m[12] = d),
            (m[13] = c))
          : (c = m[13]),
        m[14] !== w || m[15] !== c
          ? ((u = (0, l.jsxs)(l.Fragment, { children: [w, c] })), (m[14] = w), (m[15] = c), (m[16] = u))
          : (u = m[16]),
        u
      )
    }
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            s,
            r,
            o = (0, n.c)(8)
          ;(o[0] !== e ? (({ iconUrl: a, ...t } = e), (o[0] = e), (o[1] = t), (o[2] = a)) : ((t = o[1]), (a = o[2])),
            o[3] !== a
              ? ((s = (function (e) {
                  if (!e) return null
                  try {
                    let t = new URL(e)
                    if (t.username || t.password || t.search || t.hash) return null
                    let a =
                        "https://persistent.oaistatic.com" === t.origin &&
                        /^\/images\/illustrated-icons\/v[1-9][0-9]*\/96\/[a-z0-9_-]+\.webp$/.test(t.pathname),
                      l =
                        "https://openaiassets.z19.web.core.windows.net" === t.origin &&
                        /^\/scheduled-task-emojis\/v1\/[a-z0-9_-]+\.svg$/.test(t.pathname),
                      n =
                        "https://openaiassets.blob.core.windows.net" === t.origin &&
                        /^\/\$web\/tasks\/[a-z0-9_-]+\.(svg|png)$/.test(t.pathname)
                    return a || l || n ? t.href : null
                  } catch {
                    return null
                  }
                })(a)),
                (o[3] = a),
                (o[4] = s))
              : (s = o[4]))
          let i = s
          return (
            o[5] !== i || o[6] !== t
              ? ((r =
                  null == i
                    ? (0, l.jsx)(l.Fragment, { children: t.fallback })
                    : (0, l.jsx)(d, { ...t, iconUrl: i }, i)),
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
    var l = a("ABep"),
      n = a("QosV"),
      s = a("hwkA")
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
            d,
            c = (0, n.c)(12)
          if (c[0] !== e) {
            let { icon: l, children: n, squareOnMobile: s, className: i, ...d } = e
            ;((r = l), (t = n), (a = i), (o = d), (c[0] = e), (c[1] = t), (c[2] = a), (c[3] = r), (c[4] = o))
          } else ((t = c[1]), (a = c[2]), (r = c[3]), (o = c[4]))
          let u = r?.[16]
          return (
            r?.[20],
            c[5] !== u ? ((i = null == u ? null : (0, l.jsx)(u, {})), (c[5] = u), (c[6] = i)) : (i = c[6]),
            c[7] !== t || c[8] !== a || c[9] !== o || c[10] !== i
              ? ((d = (0, l.jsxs)(l.Fragment, {
                  children: [
                    null,
                    (0, l.jsx)(l.Fragment, {
                      children: (0, l.jsxs)(s.$, { ...o, className: a, size: "lg", iconSize: "sm", children: [i, t] }),
                    }),
                  ],
                })),
                (c[7] = t),
                (c[8] = a),
                (c[9] = o),
                (c[10] = i),
                (c[11] = d))
              : (d = c[11]),
            d
          )
        },
      },
    )
  },
  PkPj(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("on57"),
      r = a("IjbW"),
      o = a("xNuN"),
      i = a("suct"),
      d = a("LIss"),
      c = a("zTeN"),
      u = a("zd8w"),
      m = a("wD9O"),
      h = a("khOd"),
      p = a("HgLj"),
      f = a("MCtJ"),
      g = a("I7bK"),
      x = a("MeAu"),
      b = a("okCa"),
      v = a("DiyT")
    let y = {
      directory: { inset: "pt-24", title: "text-[28px] leading-9 font-semibold" },
      default: { inset: "pt-panel", title: "heading-xl" },
      inset: { inset: "pt-panel", title: "heading-xl" },
      hero: { inset: "pt-4", title: "text-3xl font-bold md:text-5xl" },
      catalog: { inset: "pt-4", title: "heading-xl font-semibold" },
      compact: { inset: "pt-6", title: "heading-lg" },
      profile: { inset: "pt-13", title: "text-heading-app leading-8.5 font-normal tracking-[0.39px]" },
      profileManager: {
        inset: "pt-[var(--business-manager-heading-inset,68px)]",
        title:
          "text-[22px] leading-7 font-semibold @lg/manager:text-heading-app @lg/manager:leading-8.5 @lg/manager:font-normal",
      },
    }
    function w() {
      return document.activeElement
    }
    function j(e, t, a) {
      let l = (0, m.Ud)(Math.max(0, e.getBoundingClientRect().top - t.getBoundingClientRect().top), a)
      t.style.setProperty("--header-background-top-inset", `${l}px`)
    }
    function A(e) {
      let t,
        a,
        r = (0, n.c)(8),
        { children: o, className: i, fadeSize: d, showScrollFade: c, sticky: u } = e,
        m = void 0 === u || u,
        h =
          m &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        p = m && ("compact" === (void 0 === d ? "default" : d) ? "after:h-2" : "after:h-8"),
        f = m && !(void 0 === c || c) && "after:hidden"
      return (
        r[0] !== i || r[1] !== h || r[2] !== p || r[3] !== f
          ? ((t = (0, s.A)("bg-surface", h, p, f, i)), (r[0] = i), (r[1] = h), (r[2] = p), (r[3] = f), (r[4] = t))
          : (t = r[4]),
        r[5] !== o || r[6] !== t
          ? ((a = (0, l.jsx)("div", { className: t, children: o })), (r[5] = o), (r[6] = t), (r[7] = a))
          : (a = r[7]),
        a
      )
    }
    function N(e) {
      let t,
        a,
        r = (0, n.c)(7),
        { children: o, inset: i, wrap: d, variant: c } = e,
        u = "directory" === (void 0 === c ? "default" : c) ? "pb-4" : "pb-2",
        m = void 0 !== d && d && "flex-wrap",
        h = (void 0 === i || i) && "px-3"
      return (
        r[0] !== u || r[1] !== m || r[2] !== h
          ? ((t = (0, s.A)("flex items-center justify-between gap-4", u, m, h)),
            (r[0] = u),
            (r[1] = m),
            (r[2] = h),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== o || r[5] !== t
          ? ((a = (0, l.jsx)("div", { className: t, children: o })), (r[4] = o), (r[5] = t), (r[6] = a))
          : (a = r[6]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        J1: A,
        Ql: function (e) {
          let t,
            a,
            _,
            S,
            k,
            I,
            C,
            P,
            M,
            O,
            F,
            T,
            q,
            R,
            L,
            B,
            E,
            U,
            D,
            z,
            G,
            W,
            H,
            $,
            Q,
            K,
            V,
            Y,
            X,
            J,
            Z,
            ee,
            et,
            ea = (0, n.c)(211),
            {
              animateContentLayout: el,
              collapseHeaderOnScroll: en,
              expandSearchWhenWrapped: es,
              banner: er,
              bannerAfterHeader: eo,
              bannerPlacement: ei,
              children: ed,
              contentClassName: ec,
              contentInset: eu,
              contentWidth: em,
              controls: eh,
              headerAction: ep,
              headerFade: ef,
              headerPlacement: eg,
              headerVariant: ex,
              horizontalPaddingClassName: eb,
              reserveSelectionGutter: ev,
              balanceScrollbarGutter: ey,
              navigation: ew,
              pageActions: ej,
              scrollContainerRef: eA,
              search: eN,
              searchContent: e_,
              searchPlacement: eS,
              searchToolbar: ek,
              stickyControls: eI,
              subtitle: eC,
              title: eP,
              titleRef: eM,
              toolbarActions: eO,
              toolbarInset: eF,
              wrapActionsAtNarrowWidth: eT,
            } = e,
            eq = void 0 !== en && en,
            eR = void 0 !== es && es,
            eL = void 0 !== eo && eo,
            eB = void 0 === eu || eu,
            eE = void 0 === em ? "default" : em,
            eU = void 0 === ef ? "always" : ef,
            eD = void 0 === eg ? "page" : eg,
            ez = void 0 === ex ? "default" : ex,
            eG = void 0 !== ev && ev,
            eW = void 0 !== ey && ey,
            eH = void 0 === eS ? "sticky" : eS,
            e$ = void 0 === eF || eF,
            eQ = (0, c.Ul)(h.GB),
            eK = (0, m.dz)(),
            eV = "profileManager" === ez,
            eY = "px-panel"
          ;("profile" === eE
            ? (eY = eV ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === eE && (eY = "px-4 md:px-panel"),
            ea[0] !== eE || ea[1] !== eY || ea[2] !== ez || ea[3] !== eb || ea[4] !== eG
              ? ((t = eG
                  ? "px-18"
                  : (eb ??
                    (0, s.A)(
                      eY,
                      ("medium" === eE || "extraWide" === eE) && "compact" === ez ? "px-6 lg:px-12" : void 0,
                    ))),
                (ea[0] = eE),
                (ea[1] = eY),
                (ea[2] = ez),
                (ea[3] = eb),
                (ea[4] = eG),
                (ea[5] = t))
              : (t = ea[5]))
          let eX = (0, s.A)(
              t,
              eQ &&
                (eG
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == eb && "profile" !== eE && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eJ] = (0, u.useState)(w),
            [eZ, e0] = (0, u.useState)(!1),
            [e1, e2] = (0, u.useState)(!1),
            e3 = (0, u.useRef)(null),
            e4 = (0, u.useRef)(null),
            e5 = (0, u.useRef)(null),
            [e6, e8] = (0, u.useState)(!1),
            [e7, e9] = (0, u.useState)(),
            te = (0, u.useRef)(null),
            tt = (0, u.useRef)(null)
          ea[6] !== eA ? ((a = (0, p.P)(e3, eA)), (ea[6] = eA), (ea[7] = a)) : (a = ea[7])
          let ta = a,
            tl = (0, u.useRef)(null),
            tn = (0, u.useRef)(null),
            [ts, tr] = (0, u.useState)(),
            to = document.activeElement,
            ti = "none" !== eD,
            td = "toolbar" === eD,
            tc = "scroll" === eD && e1,
            tu = td || tc,
            tm = y[ez],
            th = "directory" === ez,
            tp = "compact" === ez,
            tf = "profile" === ez || eV,
            tg = null != eN || null != e_,
            tx = "sticky" === eD,
            tb = tx && eq,
            tv = tx || "inline" === eD,
            ty = "bottom-on-scroll" === eH && tg && !tv,
            tw = eQ && !tf && !th && "browser:max-md:text-lg browser:max-md:font-medium",
            tj = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eV ? "max-w-[1144px]" : "max-w-4xl",
            }[eE],
            tA = (!td && null != ew) || null != ej,
            tN = (0, r.I)()
          ea[8] !== tN ? ((_ = tN ? { duration: 0 } : g.m9), (ea[8] = tN), (ea[9] = _)) : (_ = ea[9])
          let t_ = _,
            tS = eN?.autoFocus ?? (null == to || to === document.body || to === document.documentElement || to === eJ)
          ;(ea[10] !== ty
            ? ((S = () => {
                let e = e3.current,
                  t = e4.current,
                  a = e5.current
                if (!ty || null == e || null == t || null == a) return
                let l = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e8(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  n = new ResizeObserver((e) => {
                    let [t] = e,
                      l = t.borderBoxSize?.[0]?.blockSize ?? a.offsetHeight
                    l && e9(l)
                  })
                return (
                  l.observe(t),
                  n.observe(a, { box: "border-box" }),
                  () => {
                    ;(l.disconnect(), n.disconnect())
                  }
                )
              }),
              (k = [ty]),
              (ea[10] = ty),
              (ea[11] = S),
              (ea[12] = k))
            : ((S = ea[11]), (k = ea[12])),
            (0, u.useLayoutEffect)(S, k),
            ea[13] !== ty || ea[14] !== tN
              ? ((I = () => {
                  let e = e5.current
                  if (!ty || null == e) return
                  let t = (0, o.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tN },
                  )
                  return () => t.stop()
                }),
                (ea[13] = ty),
                (ea[14] = tN),
                (ea[15] = I))
              : (I = ea[15]),
            ea[16] !== ty || ea[17] !== e6 || ea[18] !== tN
              ? ((C = [ty, e6, tN]), (ea[16] = ty), (ea[17] = e6), (ea[18] = tN), (ea[19] = C))
              : (C = ea[19]),
            (0, u.useLayoutEffect)(I, C),
            ea[20] !== tx || ea[21] !== eQ || ea[22] !== eK
              ? ((P = () => {
                  let e = e3.current,
                    t = te.current
                  if (!eQ || !tx || null == e || null == t) return
                  let a = new ResizeObserver(() => {
                    j(e, t, eK)
                  })
                  return (
                    a.observe(e),
                    a.observe(t),
                    () => {
                      ;(a.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (M = [eQ, tx, eK]),
                (ea[20] = tx),
                (ea[21] = eQ),
                (ea[22] = eK),
                (ea[23] = P),
                (ea[24] = M))
              : ((P = ea[23]), (M = ea[24])),
            (0, u.useLayoutEffect)(P, M),
            ea[25] !== eD
              ? ((O = () => {
                  let e = tl.current,
                    t = e3.current
                  if ("scroll" !== eD || null == e || null == t) return
                  let a = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e2(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (a.observe(e), () => a.disconnect())
                }),
                (F = [eD]),
                (ea[25] = eD),
                (ea[26] = O),
                (ea[27] = F))
              : ((O = ea[26]), (F = ea[27])),
            (0, u.useLayoutEffect)(O, F),
            ea[28] !== eD || ea[29] !== tc
              ? ((T = () => {
                  let e = tn.current
                  if ("scroll" !== eD || tc || null == e) return
                  let t = new ResizeObserver(() => {
                    tr({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (q = [eD, tc]),
                (ea[28] = eD),
                (ea[29] = tc),
                (ea[30] = T),
                (ea[31] = q))
              : ((T = ea[30]), (q = ea[31])),
            (0, u.useLayoutEffect)(T, q))
          let tk =
            null == er
              ? null
              : (0, l.jsx)("div", {
                  className: (0, s.A)(
                    "w-full empty:hidden",
                    "inset" === (void 0 === ei ? "inset" : ei) && ["mx-auto pt-panel", tj, eX],
                  ),
                  children: er,
                })
          ea[32] !== ti ||
          ea[33] !== ep ||
          ea[34] !== ez ||
          ea[35] !== tf ||
          ea[36] !== td ||
          ea[37] !== ew ||
          ea[38] !== tc ||
          ea[39] !== tu ||
          ea[40] !== tw ||
          ea[41] !== eP ||
          ea[42] !== eM ||
          ea[43] !== eO ||
          ea[44] !== e$ ||
          ea[45] !== t_
            ? ((R =
                ti && (tu || null != eO)
                  ? (0, l.jsx)(f.F, {
                      divider: !tf,
                      children: (0, l.jsxs)(x.oE, {
                        inset: e$,
                        children: [
                          (0, l.jsx)(i.N, {
                            initial: !1,
                            children: tu
                              ? (0, l.jsx)(
                                  d.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    "data-app-shell-overlay-page-header": (tc && null == eO) || void 0,
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: t_,
                                    children:
                                      td && null != ew
                                        ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                              (0, l.jsx)("h1", { ref: eM, className: "sr-only", children: eP }),
                                              ew,
                                            ],
                                          })
                                        : (0, l.jsx)("h1", {
                                            ref: eM,
                                            className: (0, s.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              tw,
                                              "inset" === ez ? "px-2" : null,
                                            ),
                                            children: eP,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eO || tc
                            ? (0, l.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [tc ? ep : null, eO],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (ea[32] = ti),
              (ea[33] = ep),
              (ea[34] = ez),
              (ea[35] = tf),
              (ea[36] = td),
              (ea[37] = ew),
              (ea[38] = tc),
              (ea[39] = tu),
              (ea[40] = tw),
              (ea[41] = eP),
              (ea[42] = eM),
              (ea[43] = eO),
              (ea[44] = e$),
              (ea[45] = t_),
              (ea[46] = R))
            : (R = ea[46])
          let tI = ty || !ti ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tC = !ti && !eQ && "max-md:pt-[var(--height-toolbar)]",
            tP = !ti && eQ && "browser:max-md:pt-[var(--height-toolbar)]",
            tM = !ti && "profile" === eE && "bg-surface-card"
          ea[47] !== tI || ea[48] !== tC || ea[49] !== tP || ea[50] !== tM
            ? ((L = (0, s.A)(tI, tC, tP, tM)), (ea[47] = tI), (ea[48] = tC), (ea[49] = tP), (ea[50] = tM), (ea[51] = L))
            : (L = ea[51])
          let tO = eQ || void 0,
            tF = eV && "@container/manager",
            tT = "profile" === eE && "bg-surface-card",
            tq =
              th &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tR = !eW && "[scrollbar-gutter:stable]",
            tL = eW && (tf ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tB = !ty && "relative",
            tE = tc && "vertical-scroll-fade-mask-top"
          ea[52] !== tF ||
          ea[53] !== tT ||
          ea[54] !== tq ||
          ea[55] !== tR ||
          ea[56] !== tL ||
          ea[57] !== tB ||
          ea[58] !== tE
            ? ((B = (0, s.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tF, tT, tq, tR, tL, tB, tE)),
              (ea[52] = tF),
              (ea[53] = tT),
              (ea[54] = tq),
              (ea[55] = tR),
              (ea[56] = tL),
              (ea[57] = tB),
              (ea[58] = tE),
              (ea[59] = B))
            : (B = ea[59])
          let tU = (!td && null == eO && (!!ti || !tf)) || void 0,
            tD = "inline" === eD ? eZ : void 0
          ea[60] !== eq ||
          ea[61] !== tv ||
          ea[62] !== tg ||
          ea[63] !== tx ||
          ea[64] !== eU ||
          ea[65] !== eH ||
          ea[66] !== e0 ||
          ea[67] !== eQ ||
          ea[68] !== eI ||
          ea[69] !== eK
            ? ((E =
                tv || ("when-scrolled" === eU && "sticky" === eH && (tg || null != eI))
                  ? (e) => {
                      let t = te.current,
                        a = tt.current
                      if (eq && !eQ && null != t && null != a) {
                        t.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`)
                        let l = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((l.bottom - a.getBoundingClientRect().top) * t.offsetHeight) / l.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      ;(e0(
                        eQ && tx && null != t
                          ? e.currentTarget.scrollTop > 0 &&
                              t.getBoundingClientRect().top <=
                                e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(t).top)
                          : e.currentTarget.scrollTop > 0,
                      ),
                        eQ && tx && null != t && j(e.currentTarget, t, eK))
                    }
                  : void 0),
              (ea[60] = eq),
              (ea[61] = tv),
              (ea[62] = tg),
              (ea[63] = tx),
              (ea[64] = eU),
              (ea[65] = eH),
              (ea[66] = e0),
              (ea[67] = eQ),
              (ea[68] = eI),
              (ea[69] = eK),
              (ea[70] = E))
            : (E = ea[70])
          let tz = !ti && "h-full"
          ;(ea[71] !== tz
            ? ((U = (0, s.A)("flex min-h-full w-full flex-col", tz)), (ea[71] = tz), (ea[72] = U))
            : (U = ea[72]),
            ea[73] !== ty || ea[74] !== e7
              ? ((D = ty ? { paddingBottom: e7 } : void 0), (ea[73] = ty), (ea[74] = e7), (ea[75] = D))
              : (D = ea[75]))
          let tG = eL && tv ? null : tk
          ;(ea[76] !== eX ||
          ea[77] !== eR ||
          ea[78] !== tv ||
          ea[79] !== tg ||
          ea[80] !== tx ||
          ea[81] !== ep ||
          ea[82] !== tm ||
          ea[83] !== th ||
          ea[84] !== eZ ||
          ea[85] !== eN ||
          ea[86] !== e_ ||
          ea[87] !== ek ||
          ea[88] !== tS ||
          ea[89] !== tb ||
          ea[90] !== eQ ||
          ea[91] !== tw ||
          ea[92] !== eI ||
          ea[93] !== eC ||
          ea[94] !== eP ||
          ea[95] !== eM ||
          ea[96] !== tj ||
          ea[97] !== eT
            ? ((z = tv
                ? (0, l.jsx)(v.g, {
                    ref: te,
                    className: tj,
                    horizontalPaddingClassName: eX,
                    presentation: th ? "directory" : "default",
                    collapseOnScroll: tb,
                    expandSearchWhenWrapped: eR,
                    wrapActionsAtNarrowWidth: eT,
                    showDivider: tx && eZ,
                    sticky: tx,
                    title:
                      null == eP
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)("h1", {
                                ref: eM,
                                className: (0, s.A)(
                                  "flex min-h-9 items-center text-default",
                                  eQ && "browser:max-md:min-h-0",
                                  tw,
                                  tm.title,
                                ),
                                children: eP,
                              }),
                              null == eC || (eQ && !th)
                                ? null
                                : (0, l.jsx)("div", {
                                    className: (0, s.A)(
                                      "text-base leading-6 text-secondary",
                                      tb && "max-w-lg",
                                      eQ && !th && "browser:max-md:hidden",
                                    ),
                                    children: eC,
                                  }),
                            ],
                          }),
                    actions: tg
                      ? (0, l.jsx)(v.T, {
                          search:
                            e_ ??
                            (null == eN
                              ? null
                              : (0, l.jsx)(b.s, {
                                  ...eN,
                                  autoFocus: tS,
                                  className: (0, s.A)("min-w-0 flex-1", eN.className),
                                })),
                          controls: ek,
                          actions: ep,
                        })
                      : ep,
                    navigation: eQ ? void 0 : eI,
                  })
                : null),
              (ea[76] = eX),
              (ea[77] = eR),
              (ea[78] = tv),
              (ea[79] = tg),
              (ea[80] = tx),
              (ea[81] = ep),
              (ea[82] = tm),
              (ea[83] = th),
              (ea[84] = eZ),
              (ea[85] = eN),
              (ea[86] = e_),
              (ea[87] = ek),
              (ea[88] = tS),
              (ea[89] = tb),
              (ea[90] = eQ),
              (ea[91] = tw),
              (ea[92] = eI),
              (ea[93] = eC),
              (ea[94] = eP),
              (ea[95] = eM),
              (ea[96] = tj),
              (ea[97] = eT),
              (ea[98] = z))
            : (z = ea[98]),
            ea[99] !== eX ||
            ea[100] !== tv ||
            ea[101] !== th ||
            ea[102] !== eQ ||
            ea[103] !== eC ||
            ea[104] !== tj ||
            ea[105] !== eT
              ? ((G =
                  tv && eQ && !th && null != eC
                    ? (0, l.jsx)("div", {
                        className: eT ? "@container/searchable-header" : "contents",
                        children: (0, l.jsx)("div", {
                          "data-page-subtitle": eT || void 0,
                          className: (0, s.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            tj,
                            eX,
                          ),
                          children: (0, l.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eC }),
                        }),
                      })
                    : null),
                (ea[99] = eX),
                (ea[100] = tv),
                (ea[101] = th),
                (ea[102] = eQ),
                (ea[103] = eC),
                (ea[104] = tj),
                (ea[105] = eT),
                (ea[106] = G))
              : (G = ea[106]),
            ea[107] !== eX || ea[108] !== tv || ea[109] !== eQ || ea[110] !== eI || ea[111] !== tj
              ? ((W =
                  tv && eQ && null != eI
                    ? (0, l.jsx)("div", {
                        className: (0, s.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tj, eX),
                        children: eI,
                      })
                    : null),
                (ea[107] = eX),
                (ea[108] = tv),
                (ea[109] = eQ),
                (ea[110] = eI),
                (ea[111] = tj),
                (ea[112] = W))
              : (W = ea[112]))
          let tW = eL && tv ? tk : null
          ;(ea[113] !== eX ||
          ea[114] !== tv ||
          ea[115] !== ti ||
          ea[116] !== tg ||
          ea[117] !== ep ||
          ea[118] !== ts ||
          ea[119] !== tm ||
          ea[120] !== ez ||
          ea[121] !== tp ||
          ea[122] !== tf ||
          ea[123] !== eV ||
          ea[124] !== td ||
          ea[125] !== tc ||
          ea[126] !== eQ ||
          ea[127] !== tw ||
          ea[128] !== eC ||
          ea[129] !== eP ||
          ea[130] !== eM ||
          ea[131] !== t_ ||
          ea[132] !== tj
            ? ((H =
                !ti || td || tv
                  ? null
                  : (0, l.jsx)(
                      d.P.div,
                      {
                        ref: tl,
                        "aria-hidden": tc || void 0,
                        inert: tc,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: t_,
                        children: (0, l.jsx)("div", {
                          className: (0, s.A)(
                            "mx-auto w-full",
                            tj,
                            tm.inset,
                            !tg && eV && "pb-8",
                            !tg && !eV && (tp || tf ? "pb-6" : "pb-4"),
                            eX,
                          ),
                          children: (0, l.jsxs)("div", {
                            className: (0, s.A)(
                              "flex justify-between",
                              "profile" === ez ? "gap-2 px-1" : "gap-4",
                              tp && "flex-wrap items-center",
                              tf && "items-center",
                              !tp && !tf && "items-start",
                              "hero" === ez && "justify-center text-center",
                              "inset" === ez ? "px-2" : null,
                            ),
                            children: [
                              (0, l.jsxs)("div", {
                                className: (0, s.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === ez || "hero" === ez ? "gap-2" : !eV && "gap-1",
                                ),
                                children: [
                                  (0, l.jsx)("h1", {
                                    ref: tc ? void 0 : eM,
                                    className: (0, s.A)("text-default", tw, tm.title),
                                    children: eP,
                                  }),
                                  null == eC
                                    ? null
                                    : (0, l.jsx)("div", {
                                        className: (0, s.A)(
                                          "text-secondary",
                                          eV
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tf ? "leading-6.5" : "leading-6"],
                                          "profile" === ez && "tracking-[-0.32px] sm:truncate",
                                          eV && "tracking-[-0.4px]",
                                          eQ && !tf && "browser:max-md:hidden",
                                        ),
                                        children: eC,
                                      }),
                                ],
                              }),
                              null == ep
                                ? null
                                : (0, l.jsx)("div", {
                                    ref: tn,
                                    className: (0, s.A)("min-w-0", tp ? "max-w-full" : "shrink-0"),
                                    style: tc ? ts : void 0,
                                    children: tc ? null : ep,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (ea[113] = eX),
              (ea[114] = tv),
              (ea[115] = ti),
              (ea[116] = tg),
              (ea[117] = ep),
              (ea[118] = ts),
              (ea[119] = tm),
              (ea[120] = ez),
              (ea[121] = tp),
              (ea[122] = tf),
              (ea[123] = eV),
              (ea[124] = td),
              (ea[125] = tc),
              (ea[126] = eQ),
              (ea[127] = tw),
              (ea[128] = eC),
              (ea[129] = eP),
              (ea[130] = eM),
              (ea[131] = t_),
              (ea[132] = tj),
              (ea[133] = H))
            : (H = ea[133]),
            ea[134] !== H
              ? (($ = (0, l.jsx)(i.N, { initial: !1, mode: "popLayout", children: H })), (ea[134] = H), (ea[135] = $))
              : ($ = ea[135]),
            ea[136] !== eX ||
            ea[137] !== ty ||
            ea[138] !== tv ||
            ea[139] !== tg ||
            ea[140] !== eU ||
            ea[141] !== ez ||
            ea[142] !== eZ ||
            ea[143] !== eN ||
            ea[144] !== e_ ||
            ea[145] !== e6 ||
            ea[146] !== e7 ||
            ea[147] !== eH ||
            ea[148] !== ek ||
            ea[149] !== tS ||
            ea[150] !== eI ||
            ea[151] !== tj
              ? ((Q =
                  !tg || tv
                    ? null
                    : (0, l.jsx)("div", {
                        ref: e4,
                        className: ty ? void 0 : "contents",
                        style: ty ? { height: e7 } : void 0,
                        children: (0, l.jsx)("div", {
                          ref: e5,
                          className: (0, s.A)(!ty && "contents", ty && e6 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, l.jsxs)(A, {
                            className: "top-0",
                            showScrollFade: "always" === eU || eZ,
                            sticky: "sticky" === eH,
                            children: [
                              (0, l.jsxs)("div", {
                                className: (0, s.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tj,
                                  "hero" === ez && "pt-6",
                                  "catalog" === ez && "pt-4",
                                  "hero" !== ez && "catalog" !== ez && "pt-panel",
                                  eX,
                                ),
                                children: [
                                  e_ ??
                                    (null == eN
                                      ? null
                                      : (0, l.jsx)(b.s, {
                                          ...eN,
                                          autoFocus: tS,
                                          className: (0, s.A)("min-w-0 flex-1", eN.className),
                                        })),
                                  ek,
                                ],
                              }),
                              null == eI
                                ? null
                                : (0, l.jsx)("div", {
                                    className: (0, s.A)("mx-auto w-full", tj, "hero" === ez && "pt-12", eX),
                                    children: eI,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (ea[136] = eX),
                (ea[137] = ty),
                (ea[138] = tv),
                (ea[139] = tg),
                (ea[140] = eU),
                (ea[141] = ez),
                (ea[142] = eZ),
                (ea[143] = eN),
                (ea[144] = e_),
                (ea[145] = e6),
                (ea[146] = e7),
                (ea[147] = eH),
                (ea[148] = ek),
                (ea[149] = tS),
                (ea[150] = eI),
                (ea[151] = tj),
                (ea[152] = Q))
              : (Q = ea[152]),
            ea[153] !== eX ||
            ea[154] !== tv ||
            ea[155] !== tg ||
            ea[156] !== eU ||
            ea[157] !== tp ||
            ea[158] !== eZ ||
            ea[159] !== eH ||
            ea[160] !== eI ||
            ea[161] !== tj
              ? ((K =
                  tg || null == eI || tv
                    ? null
                    : (0, l.jsx)(A, {
                        className: "top-0",
                        showScrollFade: "always" === eU || eZ,
                        sticky: "sticky" === eH,
                        children: (0, l.jsx)("div", {
                          className: (0, s.A)("mx-auto w-full", !tp && "py-2", tj, eX),
                          children: eI,
                        }),
                      })),
                (ea[153] = eX),
                (ea[154] = tv),
                (ea[155] = tg),
                (ea[156] = eU),
                (ea[157] = tp),
                (ea[158] = eZ),
                (ea[159] = eH),
                (ea[160] = eI),
                (ea[161] = tj),
                (ea[162] = K))
              : (K = ea[162]))
          let tH = !!(void 0 === el || el) && "position",
            t$ = eV && "pb-16",
            tQ = "profile" === ez && "pb-23",
            tK = !tf && (eQ && tp ? "pb-4" : "pb-panel"),
            tV = eB && tp && !tv && "pt-3.5",
            tY = eB && !tp && !tg && null == eI && "pt-panel",
            tX = eB && !tp && (tg || null != eI) && (th ? "pt-3 md:pt-5" : "pt-5")
          return (
            ea[163] !== ec ||
            ea[164] !== eX ||
            ea[165] !== t$ ||
            ea[166] !== tQ ||
            ea[167] !== tK ||
            ea[168] !== tV ||
            ea[169] !== tY ||
            ea[170] !== tX ||
            ea[171] !== tj
              ? ((V = (0, s.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", t$, tQ, tK, tj, tV, tY, tX, ec, eX)),
                (ea[163] = ec),
                (ea[164] = eX),
                (ea[165] = t$),
                (ea[166] = tQ),
                (ea[167] = tK),
                (ea[168] = tV),
                (ea[169] = tY),
                (ea[170] = tX),
                (ea[171] = tj),
                (ea[172] = V))
              : (V = ea[172]),
            ea[173] !== tA || ea[174] !== td || ea[175] !== ew || ea[176] !== ej
              ? ((Y = tA
                  ? (0, l.jsxs)(N, {
                      children: [
                        td ? null : ew,
                        null == ej ? null : (0, l.jsx)("div", { className: "ms-auto", children: ej }),
                      ],
                    })
                  : null),
                (ea[173] = tA),
                (ea[174] = td),
                (ea[175] = ew),
                (ea[176] = ej),
                (ea[177] = Y))
              : (Y = ea[177]),
            ea[178] !== ed || ea[179] !== eh || ea[180] !== tH || ea[181] !== V || ea[182] !== Y || ea[183] !== t_
              ? ((X = (0, l.jsxs)(d.P.div, {
                  ref: tt,
                  layout: tH,
                  className: V,
                  transition: t_,
                  children: [Y, eh, ed],
                })),
                (ea[178] = ed),
                (ea[179] = eh),
                (ea[180] = tH),
                (ea[181] = V),
                (ea[182] = Y),
                (ea[183] = t_),
                (ea[184] = X))
              : (X = ea[184]),
            ea[185] !== U ||
            ea[186] !== D ||
            ea[187] !== tG ||
            ea[188] !== z ||
            ea[189] !== G ||
            ea[190] !== W ||
            ea[191] !== tW ||
            ea[192] !== $ ||
            ea[193] !== Q ||
            ea[194] !== K ||
            ea[195] !== X
              ? ((J = (0, l.jsxs)("div", { className: U, style: D, children: [tG, z, G, W, tW, $, Q, K, X] })),
                (ea[185] = U),
                (ea[186] = D),
                (ea[187] = tG),
                (ea[188] = z),
                (ea[189] = G),
                (ea[190] = W),
                (ea[191] = tW),
                (ea[192] = $),
                (ea[193] = Q),
                (ea[194] = K),
                (ea[195] = X),
                (ea[196] = J))
              : (J = ea[196]),
            ea[197] !== ta ||
            ea[198] !== tO ||
            ea[199] !== B ||
            ea[200] !== tU ||
            ea[201] !== tD ||
            ea[202] !== E ||
            ea[203] !== J
              ? ((Z = (0, l.jsx)("div", {
                  ref: ta,
                  "data-new-slate-layout": tO,
                  className: B,
                  "data-app-shell-inline-page-header": tU,
                  "data-app-shell-page-scrolled": tD,
                  onScroll: E,
                  children: J,
                })),
                (ea[197] = ta),
                (ea[198] = tO),
                (ea[199] = B),
                (ea[200] = tU),
                (ea[201] = tD),
                (ea[202] = E),
                (ea[203] = J),
                (ea[204] = Z))
              : (Z = ea[204]),
            ea[205] !== L || ea[206] !== Z
              ? ((ee = (0, l.jsx)("div", { className: L, children: Z })), (ea[205] = L), (ea[206] = Z), (ea[207] = ee))
              : (ee = ea[207]),
            ea[208] !== R || ea[209] !== ee
              ? ((et = (0, l.jsxs)(l.Fragment, { children: [R, ee] })), (ea[208] = R), (ea[209] = ee), (ea[210] = et))
              : (et = ea[210]),
            et
          )
        },
        uC: N,
      },
    )
  },
  DiyT(e, t, a) {
    a.d(t, { g: () => p, T: () => g })
    var l = a("ABep"),
      n = a("QosV"),
      s = a("on57"),
      r = a("W5pg"),
      o = a("LIss"),
      i = a("zd8w"),
      d = a("I7bK"),
      c = a("HgLj"),
      u = "title-x3JvHx",
      m = "titleContent-nEpGod",
      h = "toolbar-wpnXAF"
    function p(e) {
      let t,
        a,
        r,
        o,
        d,
        p,
        g,
        x,
        b,
        v,
        y,
        w,
        j = (0, n.c)(35),
        {
          ref: A,
          className: N,
          horizontalPaddingClassName: _,
          collapseOnScroll: S,
          presentation: k,
          expandSearchWhenWrapped: I,
          showDivider: C,
          sticky: P,
          wrapActionsAtNarrowWidth: M,
          title: O,
          actions: F,
          navigation: T,
        } = e,
        q = void 0 === _ ? "px-panel" : _,
        R = void 0 !== S && S,
        L = (0, i.useRef)(null)
      j[0] !== A ? ((t = (0, c.P)(L, A)), (j[0] = A), (j[1] = t)) : (t = j[1])
      let B = t,
        E = (0, i.useRef)(null)
      ;(j[2] !== R
        ? ((a = () => {
            let e = L.current,
              t = E.current
            if (!e || !t) return
            let a = new ResizeObserver(() => {
                let a = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${a}px`)
                let l = t.querySelector(`.${h}`)
                if (!R || null == l) return void e.removeAttribute("data-collapsible")
                let n = t.querySelector(`.${m}`)
                if (null == n) return
                let s = n.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(s?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              l = () => {
                for (let e of (a.disconnect(), [t, ...t.querySelectorAll(`.${u}`)])) a.observe(e)
              },
              n = new MutationObserver(l)
            return (
              n.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
              l(),
              () => {
                ;(a.disconnect(), n.disconnect())
              }
            )
          }),
          (r = [R]),
          (j[2] = R),
          (j[3] = a),
          (j[4] = r))
        : ((a = j[3]), (r = j[4])),
        (0, i.useLayoutEffect)(a, r))
      let U = R || void 0,
        D = (void 0 !== I && I) || void 0,
        z = C || void 0,
        G = void 0 === P || P || void 0,
        W = M || void 0,
        H = "directory" === (void 0 === k ? "default" : k) && "directoryShell-WYPHEM",
        $ = C ? "border-subtle" : "border-transparent"
      ;(j[5] !== H || j[6] !== $
        ? ((o = (0, s.A)("shell-yWQKe6", H, $)), (j[5] = H), (j[6] = $), (j[7] = o))
        : (o = j[7]),
        j[8] !== D || j[9] !== z || j[10] !== G || j[11] !== W || j[12] !== o || j[13] !== U
          ? ((d = {
              "data-scroll-collapse": U,
              "data-expand-search": D,
              "data-scrolled": z,
              "data-sticky": G,
              "data-wrap-actions": W,
              className: o,
            }),
            (j[8] = D),
            (j[9] = z),
            (j[10] = G),
            (j[11] = W),
            (j[12] = o),
            (j[13] = U),
            (j[14] = d))
          : (d = j[14]))
      let Q = d
      ;(j[15] !== N || j[16] !== q
        ? ((p = (0, s.A)("content-ymUHGU", "mx-auto w-full", q, N)), (j[15] = N), (j[16] = q), (j[17] = p))
        : (p = j[17]),
        j[18] !== O
          ? ((g =
              null == O
                ? null
                : (0, l.jsx)("div", { className: u, children: (0, l.jsx)("div", { className: m, children: O }) })),
            (j[18] = O),
            (j[19] = g))
          : (g = j[19]),
        j[20] !== F
          ? ((x = (0, l.jsx)("div", { className: "actions-hHaS5d", children: F })), (j[20] = F), (j[21] = x))
          : (x = j[21]),
        j[22] !== g || j[23] !== x
          ? ((b = (0, l.jsxs)("div", { className: "headerRow-4OaZM9", children: [g, x] })),
            (j[22] = g),
            (j[23] = x),
            (j[24] = b))
          : (b = j[24]),
        j[25] !== T
          ? ((v = (0, l.jsx)("div", { className: "navigation-AqGYXP", children: T })), (j[25] = T), (j[26] = v))
          : (v = j[26]),
        j[27] !== p || j[28] !== b || j[29] !== v
          ? ((y = (0, l.jsxs)("div", { ref: E, className: p, children: [b, v] })),
            (j[27] = p),
            (j[28] = b),
            (j[29] = v),
            (j[30] = y))
          : (y = j[30]))
      let K = y
      return (
        j[31] !== K || j[32] !== Q || j[33] !== B
          ? ((w = (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(l.Fragment, { children: (0, l.jsx)(f, { ref: B, ...Q, children: K }) }), null],
            })),
            (j[31] = K),
            (j[32] = Q),
            (j[33] = B),
            (j[34] = w))
          : (w = j[34]),
        w
      )
    }
    function f(e) {
      let t,
        a,
        s,
        c = (0, n.c)(8),
        u = (0, i.useContext)(d.f$)
      c[0] !== u?.titleBarLeftInset || c[1] !== u?.titleBarLeftInset.get
        ? ((t = () => `${u?.titleBarLeftInset.get() ?? 0}px`),
          (c[0] = u?.titleBarLeftInset),
          (c[1] = u?.titleBarLeftInset.get),
          (c[2] = t))
        : (t = c[2])
      let m = (0, r.G)(t)
      c[3] !== m ? ((a = { "--app-shell-titlebar-left-inset": m }), (c[3] = m), (c[4] = a)) : (a = c[4])
      let h = a
      return (
        c[5] !== e || c[6] !== h
          ? ((s = (0, l.jsx)(o.P.div, { ...e, style: h })), (c[5] = e), (c[6] = h), (c[7] = s))
          : (s = c[7]),
        s
      )
    }
    function g(e) {
      let t,
        a,
        s,
        r,
        o,
        i = (0, n.c)(14),
        { filterTags: d, controls: c, search: u, actions: m, fixedSearchWidth: p } = e
      return (
        i[0] !== d
          ? ((t = (0, l.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, l.jsx)("div", { className: "filterTagsContent-VSk9tY", children: d }),
            })),
            (i[0] = d),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== c
          ? ((a = (0, l.jsx)("div", { className: "viewControls-ty6WO3", children: c })), (i[2] = c), (i[3] = a))
          : (a = i[3]),
        i[4] !== p || i[5] !== u
          ? ((s =
              null != u &&
              (0, l.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": p || void 0, children: u })),
            (i[4] = p),
            (i[5] = u),
            (i[6] = s))
          : (s = i[6]),
        i[7] !== m
          ? ((r = (0, l.jsx)("div", { className: "pageActions-Q2Fd0B", children: m })), (i[7] = m), (i[8] = r))
          : (r = i[8]),
        i[9] !== t || i[10] !== a || i[11] !== s || i[12] !== r
          ? ((o = (0, l.jsxs)("div", { className: h, children: [t, a, s, r] })),
            (i[9] = t),
            (i[10] = a),
            (i[11] = s),
            (i[12] = r),
            (i[13] = o))
          : (o = i[13]),
        o
      )
    }
  },
  fJcH(e, t, a) {
    a.d(t, {
      gt: () => k,
      T4: () => S,
      bd: () => N,
      PA: () => y,
      Xo: () => _,
      _V: () => b,
      Ab: () => j,
      Oy: () => A,
      Uo: () => v,
    })
    var l = a("zTeN"),
      n = a("SPnB"),
      s = a("fGpH"),
      r = a("Ro2M"),
      o = a("sSHx"),
      i = a("nlNF"),
      d = a("OWtl"),
      c = a("QaUy"),
      u = a("E61g"),
      m = a("nZBp"),
      h = a("OMIV")
    let p = (0, l.un)(d.u, ({ get: e }) => !e(h.RS) && e(o.B).isCapable && (e(m.aB) || e(u.Gf)))
    var f = a("FlC2"),
      g = a("MXHX"),
      x = a("nvO1")
    let b = (0, l.un)(d.u, ({ get: e }) => {
        if (e(o.B).isLoading || e(n.PO).accountLoading || "loading" === e(n.m0).status) return null
        let t = e(r.H)
        if (null == t || !e(o.B).isCapable || !e(x.lc, t)) return !1
        let a = e(x.IB, t).data
        return null == a ? null : a.length > 0
      }),
      v = (0, l.un)(d.u, ({ get: e }) => e(f.gQ, e(n.chatGptAuthenticatedAccountId$)) ?? "all"),
      y = (0, l.un)(d.u, ({ get: e }) => {
        if (!0 !== e(b)) return null
        let t = e(n.chatGptAuthenticatedAccountId$),
          a = e(f.O_, t),
          l = e(x.IB, t).data
        return null != a && a.length > 0 && !a.some((e) => "personal" === e || l?.some((t) => e === `team:${t.id}`))
          ? null
          : a
      }),
      w = (0, l.un)(d.u, ({ get: e }) => {
        let t = (0, c.UP)(e(i.x2)),
          a = e(r.H)
        if (t?.source !== "cloud" || null == a || (null != t.accountId && t.accountId !== a) || !e(o.B).isCapable)
          return
        let l = e(r.jv, t.automationId).data
        return null != l && "paused" === (0, s.Xr)(l.automation) ? l : void 0
      }),
      j = (0, l.i1)(d.u, (e, { get: t }) => {
        let a = t(o.B).isCapable ? S(e).map((e) => t(r.GQ, e)) : [],
          l = (0, f.F0)(e)
        return {
          firstUnfinishedStatus: l[a.findIndex((e) => e.isLoading || e.hasNextPage)],
          items:
            0 === l.length || a.some(({ data: e }) => null != e)
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
      A = (0, l.i1)(d.u, (e, { get: t }) => {
        let a = t(y),
          l = t(
            j,
            null == e.group
              ? e.status
              : (0, f.F0)(e.status).filter((t) => ("active" === e.group ? "active" === t : "active" !== t)),
          )
        return {
          hasNextPage: (null == a || a.includes("personal")) && l.hasNextPage,
          isFetchingNextPage: l.isFetchingNextPage,
          fetchNextPage: l.fetchNextPage,
        }
      }),
      N = (0, l.i1)(d.u, (e, { get: t }) => {
        let a = t(r.H)
        if (null == a || !t(o.B).isCapable) return
        let { items: l } = t(j, e),
          n = t(y),
          i = t(g.X6, a).data,
          d = t(w)
        if (null == l && null == i && null == d) return
        let c = t(x.lc, a),
          u = c && i?.accountId === a ? i.items : [],
          m = new Map(u.map(({ automation: e, teamId: t }) => [e.id, t]))
        return (0, s.dO)(
          [...(l ?? []), ...(null == d ? [] : [d.automation])],
          u.map(({ automation: e }) => e),
        )
          .map((e) => ({ ...e, teamId: m.get(e.automation.id) ?? e.automation.team_id ?? void 0 }))
          .filter(
            (a) =>
              (null == n || !!n.includes(null == a.teamId ? "personal" : `team:${a.teamId}`)) &&
              (null == a.teamId || !!c) &&
              (null != a.teamId || null == a.automation.aeon_id || !!t(p)) &&
              (0, f.F0)(e).includes((0, s.Xr)(a.automation)),
          )
      }),
      _ = (0, l.un)(d.u, ({ get: e }) => null != e(y) || 3 !== (0, f.F0)(e(v)).length)
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
    async function k(e, t, a) {
      if (!e.get(o.B).isCapable) return
      let l = e.get(y)
      if (null != l && !l.includes("personal")) return
      let n = e.get(r.H)
      await Promise.all(
        S(t).map(async (t) => {
          try {
            for (await e.query.getOrFetch(r.GQ, t); e.get(r.H) === n;) {
              if (a?.aborted && null == e.get(f.cN, n)) return
              let l = e.get(y)
              if ((null != l && !l.includes("personal")) || !S(e.get(v)).includes(t)) return
              let s = e.get(r.GQ, t)
              if (!s.hasNextPage || s.isError) return
              await s.fetchNextPage({ cancelRefetch: !1 })
            }
          } catch {}
        }),
      )
    }
  },
  QaUy(e, t, a) {
    var l = a("DBCl"),
      n = a("SPnB"),
      s = a("mgfw"),
      r = a("bEqT"),
      o = a("jAnS"),
      i = a("rvFo")
    function d(e, t, a) {
      let l = c(e)
      return l?.automationId === t && l.source === a
    }
    function c(e) {
      if (null == e) return null
      let t = e.state,
        a = "/scheduled" === e.pathname || "/automations" === e.pathname,
        l = new URLSearchParams(e.search),
        n = a ? l.get("automationId") : t?.sidebarAutomationId,
        s = a ? (l.get("automationSource") ?? "local") : t?.sidebarAutomationSource
      return null != n && ("local" === s || "cloud" === s)
        ? { automationId: n, source: s, accountId: t?.sidebarAutomationAccountId ?? null }
        : null
    }
    function u(e, t) {
      let a = e.queryClient.getQueryCache().find({ queryKey: e.query.getOptions(r.n, t).queryKey, exact: !0 }),
        l = null,
        n = 0
      a?.state.status !== "success" ||
        "idle" !== a.state.fetchStatus ||
        a.isStaleByTime(i.D.FIVE_SECONDS) ||
        a.state.data?.pages.length !== 1 ||
        ((l = a.state.data.pages[0]?.runs[0] ?? null), (n = a.state.dataUpdatedAt))
      let s = e.queryClient
        .getQueryCache()
        .find({ queryKey: e.query.getOptions(r.Tu, { automationId: t, runId: null }).queryKey, exact: !0 })
      return (
        s?.state.status === "success" &&
          "idle" === s.state.fetchStatus &&
          !s.isStaleByTime(i.D.FIVE_SECONDS) &&
          s.state.dataUpdatedAt >= n &&
          (l = s.state.data?.last_run ?? s.state.data?.latest_update?.run ?? null),
        l
      )
    }
    a.d(
      t,
      {},
      {
        CM: function (e, t, a, l) {
          d(e, a, l) && t("/scheduled", { state: null })
        },
        Jv: function (e, t) {
          let a
          if ((0, l.Qj8)(e)) return e.targetThreadId
          for (let l of t)
            l.automationId === e.id &&
              null != l.threadId &&
              "ARCHIVED" !== l.status &&
              (null == a || l.createdAt > a.createdAt) &&
              (a = l)
          return a?.threadId ?? null
        },
        UP: c,
        ei: d,
        i5: function (e, t) {
          u(e, t)?.chat_ref == null &&
            e.queryClient.prefetchQuery(e.query.getOptions(r.Tu, { automationId: t, runId: null }))
        },
        oC: function (
          e,
          { automationId: t, navigationSource: a, run: i, navigate: d, navigateToLocalConversation: c, replace: m },
        ) {
          let h = i ?? u(e, t)
          if (null != i && null == i.chat_ref) {
            let a = e.query.getData(r.Tu, { automationId: t, runId: i.id })?.last_run?.chat_ref
            null != a && (h = { ...i, chat_ref: a })
          }
          let p = {
              navigationSource: a,
              sidebarArea: "scheduled",
              sidebarPrimaryContent: "scheduled_page" === a || void 0,
              sidebarAutomationId: t,
              sidebarAutomationSource: "cloud",
              sidebarAutomationRunId: h?.id,
              sidebarAutomationAccountId: e.get(n.chatGptAuthenticatedAccountId$),
            },
            f = h?.chat_ref
          null == h || null == f
            ? d(
                {
                  pathname: "/scheduled",
                  search: new URLSearchParams({
                    automationId: t,
                    automationSource: "cloud",
                    runId: i?.id ?? "latest",
                  }).toString(),
                },
                { state: p, replace: m },
              )
            : (h.is_unread && (0, r.FL)(e, t, h).catch(() => void 0),
              (0, s.sZ)(e, { taskId: t, conversationId: f.id, source: a, destination: "conversation" }),
              "codex" === f.type
                ? c(f.id, l.iwv, { threadAccess: "shared", state: p, replace: m })
                : d((0, o.mv)(f.id), { state: p, replace: m }))
        },
      },
    )
  },
  FlC2(e, t, a) {
    var l = a("zTeN"),
      n = a("OWtl")
    let s = ["active", "paused", "completed"],
      r = (0, l.bD)(n.u, (e) => null),
      o = (0, l.bD)(n.u, (e) => null),
      i = (0, l.bD)(n.u, (e) => 3),
      d = (0, l.bD)(n.u, (e) => 0),
      c = (0, l.bD)(n.u, (e) => void 0)
    a.d(
      t,
      {},
      {
        AU: s,
        F0: function (e) {
          return null == e || "all" === e ? s : "string" == typeof e ? [e] : e
        },
        Gu: d,
        Lg: i,
        O_: o,
        cN: c,
        gQ: r,
      },
    )
  },
}
//# sourceMappingURL=105920.d8583affec.js.map
