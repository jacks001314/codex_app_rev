export const __rspack_esm_ids = [71320]
export const __webpack_modules__ = {
  VSiS(e, t, i) {
    let s = {
      volume_discount_v1: {
        presentation: "base",
        additionalDiscountPercent: null,
        tiers: [
          { minimum_quantity: 2500, percent_off: 10 },
          { minimum_quantity: 5e3, percent_off: 20 },
          { minimum_quantity: 25e3, percent_off: 30 },
        ],
      },
      volume_discount_with_auto_reload_incentive_v1: {
        presentation: "boost",
        additionalDiscountPercent: 10,
        tiers: [
          { minimum_quantity: 1, percent_off: 10 },
          { minimum_quantity: 2500, percent_off: 20 },
          { minimum_quantity: 5e3, percent_off: 30 },
          { minimum_quantity: 25e3, percent_off: 40 },
        ],
      },
    }
    function r(e) {
      return "volume_discount_v1" === e || "volume_discount_with_auto_reload_incentive_v1" === e
    }
    function n(e, t) {
      return e.reduce((e, i) => (t >= i.minimum_quantity ? Math.max(e, i.percent_off) : e), 0)
    }
    i.d(
      t,
      {},
      {
        ZT: function ({ tiers: e, reloadAmount: t }) {
          let i = Number.parseInt(t.trim(), 10)
          if (!Number.isFinite(i) || i <= 0) return null
          let s = n(e, i)
          return s > 0 ? s : null
        },
        Zu: r,
        _3: function ({ isEnabled: e, offer: t, policy: i }) {
          var a
          if (e) {
            let e = r(i) ? s[i] : void 0
            return null == e ? { kind: "legacy" } : { kind: "active", ...e }
          }
          if (t?.auto_reload == null) return { kind: "legacy" }
          let o = [
            ...new Set([
              1,
              ...(a = t).one_time.tiers.map((e) => e.minimum_quantity),
              ...(a.auto_reload?.tiers.map((e) => e.minimum_quantity) ?? []),
            ]),
          ].reduce((e, t) => {
            let i = n(a.auto_reload?.tiers ?? [], t) - n(a.one_time.tiers, t)
            return i > 0 ? Math.max(e ?? 0, i) : e
          }, null)
          return {
            kind: "available",
            presentation: null == o ? "base" : "boost",
            additionalDiscountPercent: o,
            tiers: t.auto_reload.tiers,
            offer: t,
          }
        },
      },
    )
  },
  dvDp(e, t, i) {
    var s = i("rxoR"),
      r = i("RxZZ"),
      n = i("OMIV")
    i.d(
      t,
      {},
      {
        $: function (e) {
          let t = (0, s.V)().githubLinkTarget
          return (0, r.g4)(e, t) ?? (e(n.JW, "2247892263") ? "code-review-tab" : (0, r.CN)(e, t))
        },
      },
    )
  },
  hXam(e, t, i) {
    let s = (0, i("Qgfj").YK)({
      title: { id: "settings.codeReview.localInstructions.title", defaultMessage: "Review instructions" },
      description: {
        id: "settings.codeReview.localInstructions.description",
        defaultMessage: "Added to reviews you start in Code Review, across all repositories",
      },
      placeholder: {
        id: "settings.codeReview.localInstructions.placeholder",
        defaultMessage:
          "For example: I care most about the data model. Tell me where we might be overcomplicating things.",
      },
    })
    i.d(t, {}, { _: s })
  },
  WrZv(e, t, i) {
    var s = i("Qgfj")
    let r = { tab: "code-navigation" },
      n = (0, s.YK)({
        tab: { id: "settings.codeNavigation.title", defaultMessage: "Code Navigation" },
        enable: { id: "settings.codeNavigation.enable", defaultMessage: "Enable code navigation" },
        description: {
          id: "settings.codeNavigation.description",
          defaultMessage: "Use language servers to find definitions and references in your projects",
        },
      }),
      a = (0, s.YK)({
        java: { id: "settings.codeNavigation.language.java", defaultMessage: "Java" },
        javascript: { id: "settings.codeNavigation.language.javascript", defaultMessage: "JavaScript" },
        kotlin: { id: "settings.codeNavigation.language.kotlin", defaultMessage: "Kotlin" },
        latex: { id: "settings.codeNavigation.language.latex", defaultMessage: "LaTeX" },
        python: { id: "settings.codeNavigation.language.python", defaultMessage: "Python" },
        rust: { id: "settings.codeNavigation.language.rust", defaultMessage: "Rust" },
        swift: { id: "settings.codeNavigation.language.swift", defaultMessage: "Swift" },
        typescript: { id: "settings.codeNavigation.language.typescript", defaultMessage: "TypeScript" },
      }),
      o = { section: "code-review", id: "code-navigation", searchParams: r, title: n.tab },
      l = {
        section: "code-review",
        id: "code-navigation-enabled",
        searchParams: r,
        title: n.enable,
        description: n.description,
      },
      d = Object.entries(a).map(([e, t]) => ({
        languageId: e,
        entry: { section: "code-review", id: `code-navigation-language-${e}`, searchParams: r, title: t },
      }))
    i.d(t, {}, { Qh: d, dP: o, f_: l })
  },
  B02U(e, t, i) {
    i.d(t, { CodeReviewAppSettings: () => tm })
    var s = i("ABep"),
      r = i("QosV"),
      n = i("xSOA"),
      a = i("qmMi"),
      o = i("rxoR"),
      l = i("Wf1j"),
      d = i("oyxz"),
      c = i("dvDp"),
      u = i("hXam"),
      g = i("rOQy"),
      m = i("Bt0y"),
      p = i("SGsN"),
      v = i("GaA7"),
      h = i("OWtl"),
      f = i("RxZZ"),
      y = i("lSOQ"),
      x = i("VbfX"),
      b = i("zd8w"),
      w = i("Ywss"),
      _ = i("pO0d"),
      j = i("WrZv")
    function C() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(_.Ct, { title: j.dP.title })), (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var M = i("Sm6l"),
      S = i("evwP"),
      A = i("PkPj"),
      R = i("BrP7"),
      N = i("F0xz"),
      k = i("WXto"),
      I = i("Sptq"),
      P = i("jxU8"),
      E = i("BSnr"),
      T = i("odCE"),
      q = i("AWNZ"),
      U = i("QyE3"),
      L = i("ZEx5"),
      O = i("uMwG"),
      F = i("u5Xi"),
      z = i("bVeK"),
      $ = i("okCa"),
      B = i("GEsy"),
      G = i("Vujf")
    function D(e) {
      let t,
        i,
        n,
        o,
        c,
        u,
        g,
        m,
        p,
        v,
        h,
        f,
        y,
        x,
        w = (0, r.c)(59),
        { provider: _, onProviderChange: j, onSelectRepository: C } = e,
        A = (0, l.A)(),
        [R, N] = (0, b.useState)("")
      w[0] !== R ? ((t = R.trim()), (w[0] = R), (w[1] = t)) : (t = w[1])
      let k = (0, B.o)(t, 200),
        { data: I, isPending: P, isError: U, refetch: z } = (0, O.wJ)(),
        { data: D, isPending: W, isError: X, refetch: K } = (0, a._U)(G.Hm, _),
        [Q, Y] = (0, b.useState)(null),
        J = "github" === _ ? I?.preferred_github_connector_id : I?.preferred_gitlab_connector_id,
        ee = "github" === _ ? "GitHub" : "GitLab"
      w[2] !== D || w[3] !== J || w[4] !== Q
        ? ((i = D?.find((e) => e.id === Q) ?? D?.find((e) => e.id === J) ?? D?.[0]),
          (w[2] = D),
          (w[3] = J),
          (w[4] = Q),
          (w[5] = i))
        : (i = w[5])
      let et = i
      if (W || P) {
        let e
        ;(w[6] !== ee
          ? ((e = (0, s.jsx)(T.j, {
              children: (0, s.jsx)(d.A, {
                id: "settings.codeReview.repositories.connections.loading.v2",
                defaultMessage: "Loading {provider} connections\u2026",
                values: { provider: ee },
              }),
            })),
            (w[6] = ee),
            (w[7] = e))
          : (e = w[7]),
          (n = e))
      } else if (X || U) {
        let e, t, i, r, a
        ;(w[8] !== ee
          ? ((e = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repositories.connections.error.v2",
              defaultMessage: "Unable to load {provider} connections",
              values: { provider: ee },
            })),
            (w[8] = ee),
            (w[9] = e))
          : (e = w[9]),
          w[10] !== K || w[11] !== z
            ? ((t = () => {
                ;(K(), z())
              }),
              (w[10] = K),
              (w[11] = z),
              (w[12] = t))
            : (t = w[12]),
          w[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, s.jsx)(d.A, {
                id: "settings.codeReview.repositories.connections.retry",
                defaultMessage: "Retry",
              })),
              (w[13] = i))
            : (i = w[13]),
          w[14] !== t
            ? ((r = (0, s.jsx)(M.$, { color: "secondary", size: "toolbar", onClick: t, children: i })),
              (w[14] = t),
              (w[15] = r))
            : (r = w[15]),
          w[16] !== e || w[17] !== r
            ? ((a = (0, s.jsx)(L.t, { children: (0, s.jsx)(q.ic, { label: e, control: r }) })),
              (w[16] = e),
              (w[17] = r),
              (w[18] = a))
            : (a = w[18]),
          (n = a))
      } else if (null == et) {
        let e
        ;(w[19] !== ee
          ? ((e = (0, s.jsx)(S.W, {
              layout: "settings-row",
              children: (0, s.jsx)(d.A, {
                id: "settings.codeReview.repositories.connections.empty.v2",
                defaultMessage: "Connect a {provider} account to configure repository reviews",
                values: { provider: ee },
              }),
            })),
            (w[19] = ee),
            (w[20] = e))
          : (e = w[20]),
          (n = e))
      } else {
        let e, t, i
        w[21] !== et.id || w[22] !== D || w[23] !== ee
          ? ((e =
              null != D && D.length > 1
                ? (0, s.jsx)(L.t, {
                    children: (0, s.jsx)(F._P, {
                      label: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repositories.connection.v2",
                        defaultMessage: "{provider} connection",
                        values: { provider: ee },
                      }),
                      value: et.id,
                      options: D.map(H),
                      disabled: !1,
                      onChange: Y,
                      renderLabel: (e) => D.find((t) => t.id === e)?.name,
                    }),
                  })
                : null),
            (w[21] = et.id),
            (w[22] = D),
            (w[23] = ee),
            (w[24] = e))
          : (e = w[24])
        let r = `${et.id}:${k}`
        ;(w[25] !== et.id || w[26] !== k || w[27] !== C || w[28] !== _ || w[29] !== r
          ? ((t = (0, s.jsx)(V, { provider: _, connectorId: et.id, search: k, onSelectRepository: C }, r)),
            (w[25] = et.id),
            (w[26] = k),
            (w[27] = C),
            (w[28] = _),
            (w[29] = r),
            (w[30] = t))
          : (t = w[30]),
          w[31] !== e || w[32] !== t
            ? ((i = (0, s.jsxs)(s.Fragment, { children: [e, t] })), (w[31] = e), (w[32] = t), (w[33] = i))
            : (i = w[33]),
          (n = i))
      }
      return (
        w[34] !== A
          ? ((o = A.formatMessage({ id: "settings.codeReview.repositories.provider", defaultMessage: "Git provider" })),
            (w[34] = A),
            (w[35] = o))
          : (o = w[35]),
        w[36] === Symbol.for("react.memo_cache_sentinel") ? ((c = ["github", "gitlab"]), (w[36] = c)) : (c = w[36]),
        w[37] !== j || w[38] !== _ || w[39] !== o
          ? ((u = (0, s.jsx)(F.wW, {
              "aria-label": o,
              value: _,
              options: c,
              disabled: !1,
              onChange: j,
              renderLabel: Z,
            })),
            (w[37] = j),
            (w[38] = _),
            (w[39] = o),
            (w[40] = u))
          : (u = w[40]),
        w[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)(d.A, { id: "settings.codeReview.repositories.title", defaultMessage: "Repositories" })),
            (w[41] = g))
          : (g = w[41]),
        w[42] !== u ? ((m = (0, s.jsx)(E.X.Header, { actions: u, title: g })), (w[42] = u), (w[43] = m)) : (m = w[43]),
        w[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)("p", {
              className: "text-sm text-balance text-secondary",
              children: (0, s.jsx)(d.A, {
                id: "settings.codeReview.repositories.description",
                defaultMessage: "Choose a repository to configure its automatic reviews",
              }),
            })),
            (w[44] = p))
          : (p = w[44]),
        w[45] !== A
          ? ((v = A.formatMessage({
              id: "settings.codeReview.repositories.search.label",
              defaultMessage: "Search repositories",
            })),
            (w[45] = A),
            (w[46] = v))
          : (v = w[46]),
        w[47] !== A
          ? ((h = A.formatMessage({
              id: "settings.codeReview.repositories.search.placeholder",
              defaultMessage: "Search repositories",
            })),
            (w[47] = A),
            (w[48] = h))
          : (h = w[48]),
        w[49] !== R || w[50] !== h || w[51] !== v
          ? ((f = (0, s.jsx)($.s, {
              id: "code-review-repository-search",
              inputRole: "searchbox",
              label: v,
              placeholder: h,
              maxLength: 256,
              searchQuery: R,
              onSearchQueryChange: N,
            })),
            (w[49] = R),
            (w[50] = h),
            (w[51] = v),
            (w[52] = f))
          : (f = w[52]),
        w[53] !== n || w[54] !== f
          ? ((y = (0, s.jsxs)(E.X.Content, { children: [p, f, n] })), (w[53] = n), (w[54] = f), (w[55] = y))
          : (y = w[55]),
        w[56] !== y || w[57] !== m
          ? ((x = (0, s.jsxs)(E.X, { children: [m, y] })), (w[56] = y), (w[57] = m), (w[58] = x))
          : (x = w[58]),
        x
      )
    }
    function Z(e) {
      return "github" === e ? "GitHub" : "GitLab"
    }
    function H(e) {
      return e.id
    }
    function V(e) {
      let t,
        i,
        n,
        o,
        l,
        c,
        u,
        g = (0, r.c)(33),
        { provider: m, connectorId: p, search: v, onSelectRepository: h } = e
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [null]), (g[0] = t)) : (t = g[0])
      let [f, y] = (0, b.useState)(t)
      ;(g[1] !== f ? ((i = f.at(-1)), (g[1] = f), (g[2] = i)) : (i = g[2]),
        g[3] !== p || g[4] !== m || g[5] !== v || g[6] !== i
          ? ((n = { provider: m, connectorId: p, search: v, nextToken: i }),
            (g[3] = p),
            (g[4] = m),
            (g[5] = v),
            (g[6] = i),
            (g[7] = n))
          : (n = g[7]))
      let { data: x, isError: w, isPending: _, isFetching: j, refetch: C } = (0, a._U)(G.BX, n)
      if (_) {
        let e
        ;(g[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(T.j, {
              children: (0, s.jsx)(d.A, {
                id: "settings.codeReview.repositories.loading",
                defaultMessage: "Loading repositories\u2026",
              }),
            })),
            (g[8] = e))
          : (e = g[8]),
          (o = e))
      } else if (w || null == x) {
        let e, t, i, r
        ;(g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repositories.error",
              defaultMessage: "Unable to load repositories",
            })),
            (g[9] = e))
          : (e = g[9]),
          g[10] !== C ? ((t = () => void C()), (g[10] = C), (g[11] = t)) : (t = g[11]),
          g[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, s.jsx)(d.A, { id: "settings.codeReview.repositories.retry", defaultMessage: "Retry" })),
              (g[12] = i))
            : (i = g[12]),
          g[13] !== t
            ? ((r = (0, s.jsx)(L.t, {
                children: (0, s.jsx)(q.ic, {
                  label: e,
                  control: (0, s.jsx)(M.$, { color: "secondary", size: "toolbar", onClick: t, children: i }),
                }),
              })),
              (g[13] = t),
              (g[14] = r))
            : (r = g[14]),
          (o = r))
      } else {
        let e, t
        ;(g[15] !== x.repo_review_settings || g[16] !== h
          ? ((e =
              0 === x.repo_review_settings.length
                ? (0, s.jsx)(S.W, {
                    layout: "settings-row",
                    children: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repositories.empty",
                      defaultMessage: "No repositories found",
                    }),
                  })
                : x.repo_review_settings.map((e) => {
                    var t
                    return (0, s.jsx)(
                      q.kG,
                      {
                        label: e.repository.repository_full_name,
                        description: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repositories.status",
                          defaultMessage:
                            "Automatic code review: {policy, select, off {Off} all {All PRs} team {Team PRs} other {Follow personal preferences}}",
                          values: {
                            policy:
                              "never_review" === (t = e).global_review_preference
                                ? "off"
                                : "review_everyone" === t.global_review_preference
                                  ? "all"
                                  : "team" === t.review_preference
                                    ? "team"
                                    : "personal",
                          },
                        }),
                        edgeRounding: "surface",
                        trailing: (0, s.jsx)(z.uM3, { className: "text-secondary" }),
                        onClick: () => h(e.repository.id),
                      },
                      e.repository.id,
                    )
                  })),
            (g[15] = x.repo_review_settings),
            (g[16] = h),
            (g[17] = e))
          : (e = g[17]),
          g[18] !== e ? ((t = (0, s.jsx)(L.t, { children: e })), (g[18] = e), (g[19] = t)) : (t = g[19]),
          (o = t))
      }
      return (
        g[20] !== w || g[21] !== _ || g[22] !== f || g[23] !== m
          ? ((l =
              w || _ || "github" !== m || 125 !== Number(f.at(-1))
                ? null
                : (0, s.jsx)(S.W, {
                    layout: "settings-row",
                    children: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repositories.searchLimit",
                      defaultMessage: "Search by repository name to narrow these results",
                    }),
                  })),
            (g[20] = w),
            (g[21] = _),
            (g[22] = f),
            (g[23] = m),
            (g[24] = l))
          : (l = g[24]),
        g[25] !== x?.next_token || g[26] !== j || g[27] !== f.length
          ? ((c =
              f.length > 1 || x?.next_token != null
                ? (0, s.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, s.jsx)(M.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: 1 === f.length || j,
                        onClick: () => y(W),
                        children: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repositories.previous",
                          defaultMessage: "Previous",
                        }),
                      }),
                      (0, s.jsx)(M.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: x?.next_token == null || j,
                        onClick: () => {
                          let e = x?.next_token
                          null != e && y((t) => [...t, e])
                        },
                        children: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repositories.next",
                          defaultMessage: "Next",
                        }),
                      }),
                    ],
                  })
                : null),
            (g[25] = x?.next_token),
            (g[26] = j),
            (g[27] = f.length),
            (g[28] = c))
          : (c = g[28]),
        g[29] !== o || g[30] !== l || g[31] !== c
          ? ((u = (0, s.jsxs)(s.Fragment, { children: [o, l, c] })), (g[29] = o), (g[30] = l), (g[31] = c), (g[32] = u))
          : (u = g[32]),
        u
      )
    }
    function W(e) {
      return e.slice(0, -1)
    }
    var X = i("fLEh"),
      K = i("OAko"),
      Q = i("MM0V"),
      Y = i("HOLv"),
      J = i("GDNt"),
      ee = i("ZtSy")
    let et = [
      {
        fileName: "AGENTS.md",
        label: (0, s.jsx)(d.A, {
          id: "settings.codeReview.repository.instructions.fileName",
          defaultMessage: "AGENTS.md",
        }),
        description: (0, s.jsx)(d.A, {
          id: "settings.codeReview.repository.instructions.description",
          defaultMessage: "Add review guidelines to AGENTS.md in this repository",
        }),
      },
      {
        fileName: "SECURITY.md",
        label: (0, s.jsx)(d.A, {
          id: "settings.codeReview.repository.instructions.securityFileName",
          defaultMessage: "SECURITY.md",
        }),
        description: (0, s.jsx)(d.A, {
          id: "settings.codeReview.repository.instructions.securityDescription",
          defaultMessage: "Add security review guidelines to SECURITY.md in this repository",
        }),
      },
    ]
    function ei(e) {
      let t,
        i,
        n,
        a = (0, r.c)(6),
        { repository: o } = e,
        c = (0, l.A)()
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(E.X.Header, {
              title: (0, s.jsx)(d.A, {
                id: "settings.codeReview.repository.instructions.title",
                defaultMessage: "Review instructions",
              }),
            })),
            (a[0] = t))
          : (t = a[0]),
        a[1] !== c || a[2] !== o
          ? ((i = et.map((e) => {
              let { fileName: t, label: i, description: r } = e,
                n = (function (e, t) {
                  let i = URL.parse(e.clone_url)
                  if (null == i || !["https:", "http:"].includes(i.protocol) || !e.default_branch) return null
                  let s = new URL(i.origin),
                    r = e.id.startsWith("gitlab-") ? "-/blob" : "blob"
                  return (
                    (s.pathname = `${i.pathname.replace(/\.git$/, "")}/${r}/${encodeURIComponent(e.default_branch)}/${t}`),
                    s.href
                  )
                })(o, t)
              return (0, s.jsx)(
                q.ic,
                {
                  icon: (0, s.jsx)(z.Z1A, {}),
                  label: i,
                  description: r,
                  control:
                    null != n
                      ? (0, s.jsx)(ee.G, {
                          className: "text-sm",
                          appearance: "primary",
                          "aria-label": c.formatMessage(
                            {
                              id: "settings.codeReview.repository.instructions.openFileLabel",
                              defaultMessage: "Open file {fileName}",
                            },
                            { fileName: t },
                          ),
                          href: n,
                          initiator: "external_link",
                          children: (0, s.jsx)(d.A, {
                            id: "settings.codeReview.repository.instructions.open",
                            defaultMessage: "Open file",
                          }),
                        })
                      : null,
                },
                t,
              )
            })),
            (a[1] = c),
            (a[2] = o),
            (a[3] = i))
          : (i = a[3]),
        a[4] !== i
          ? ((n = (0, s.jsxs)(E.X, {
              children: [t, (0, s.jsx)(E.X.Content, { children: (0, s.jsx)(L.t, { children: i }) })],
            })),
            (a[4] = i),
            (a[5] = n))
          : (n = a[5]),
        n
      )
    }
    var es = i("zLIa"),
      er = i("hZax")
    let en = ["critical", "high", "medium", "low"],
      ea = ["inherit", ...en]
    function eo(e) {
      let t,
        i,
        n,
        a,
        o,
        l,
        c,
        u,
        g,
        m,
        p,
        v,
        h,
        f,
        y,
        x,
        w,
        _,
        j,
        C,
        S,
        A,
        R,
        k,
        I,
        P,
        E = (0, r.c)(82),
        { repository: T, preferences: U, disabled: L, onUpdate: O } = e,
        z = (0, er.Zj)("579168209"),
        $ = (0, er.Zj)("1394080568"),
        [B, G] = (0, b.useState)(!1),
        D = U.trigger_policy ?? "code_review",
        Z = U.threat_model_source ?? "repository_file",
        H = U.severity_threshold ?? "high",
        V = U.blocking_severity_threshold ?? "critical",
        W = en.indexOf(H) >= en.indexOf(V),
        X = !L && !!T.permissions?.admin
      E[0] !== $ || E[1] !== T
        ? ((t = $ && !T.id.startsWith("gitlab-")), (E[0] = $), (E[1] = T), (E[2] = t))
        : (t = E[2])
      let K = t
      ;(E[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, s.jsx)(d.A, {
            id: "settings.codeReview.repository.securityTitle",
            defaultMessage: "Review security vulnerabilities",
          })),
          (E[3] = i))
        : (i = E[3]),
        E[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(d.A, { id: "settings.codeReview.repository.securityTrigger", defaultMessage: "Trigger" })),
            (E[4] = n))
          : (n = E[4]),
        E[5] !== z || E[6] !== D
          ? ((a =
              z || "smart_detect" === D
                ? ["pr_open", "every_push", "smart_detect", "code_review"]
                : ["pr_open", "every_push", "code_review"]),
            (E[5] = z),
            (E[6] = D),
            (E[7] = a))
          : (a = E[7]),
        E[8] !== O ? ((o = (e) => O({ trigger_policy: e })), (E[8] = O), (E[9] = o)) : (o = E[9]),
        E[10] !== L || E[11] !== a || E[12] !== o || E[13] !== D
          ? ((l = (0, s.jsx)(F._P, { label: n, value: D, options: a, disabled: L, renderLabel: eg, onChange: o })),
            (E[10] = L),
            (E[11] = a),
            (E[12] = o),
            (E[13] = D),
            (E[14] = l))
          : (l = E[14]),
        E[15] !== L ||
        E[16] !== O ||
        E[17] !== U.codex_security_scan_configuration_id ||
        E[18] !== U.threat_model_source ||
        E[19] !== Z
          ? ((c =
              U.codex_security_scan_configuration_id || "codex_security" === U.threat_model_source
                ? (0, s.jsx)(F._P, {
                    label: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repository.threatSource",
                      defaultMessage: "Threat model source",
                    }),
                    value: Z,
                    options: U.codex_security_scan_configuration_id
                      ? ["codex_security", "repository_file"]
                      : ["repository_file"],
                    disabled: L,
                    onChange: (e) => O({ threat_model_source: e }),
                    renderLabel: eu,
                  })
                : null),
            (E[15] = L),
            (E[16] = O),
            (E[17] = U.codex_security_scan_configuration_id),
            (E[18] = U.threat_model_source),
            (E[19] = Z),
            (E[20] = c))
          : (c = E[20]),
        E[21] !== L || E[22] !== O || E[23] !== U.threat_model_file_path || E[24] !== Z
          ? ((u =
              "repository_file" === Z
                ? (0, s.jsx)(q.ic, {
                    variant: "stacked",
                    label: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repository.threatPath",
                      defaultMessage: "Path to threat model file in this repository",
                    }),
                    description: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repository.threatPath.description",
                      defaultMessage:
                        "File path is relative to the repository root. If not specified, Codex generates a threat model for every review.",
                    }),
                    control: (e) =>
                      (0, s.jsx)(
                        ev,
                        {
                          ...e,
                          kind: "threat-model",
                          savedPath: U.threat_model_file_path ?? "",
                          disabled: L,
                          onSave: (e) =>
                            O({ threat_model_source: "repository_file", threat_model_file_path: e || null }),
                        },
                        U.threat_model_file_path ?? "",
                      ),
                  })
                : null),
            (E[21] = L),
            (E[22] = O),
            (E[23] = U.threat_model_file_path),
            (E[24] = Z),
            (E[25] = u))
          : (u = E[25]),
        E[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.autoSeverity",
              defaultMessage: "Minimum auto review reporting severity",
            })),
            (g = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.autoSeverity.description",
              defaultMessage: "Choose the lowest severity Codex should report for automated reviews",
            })),
            (E[26] = g),
            (E[27] = m))
          : ((g = E[26]), (m = E[27])),
        E[28] !== V || E[29] !== U.merge_gate_enabled
          ? ((p = U.merge_gate_enabled ? en.slice(en.indexOf(V)) : en),
            (E[28] = V),
            (E[29] = U.merge_gate_enabled),
            (E[30] = p))
          : (p = E[30]),
        E[31] !== O ? ((v = (e) => O({ severity_threshold: e })), (E[31] = O), (E[32] = v)) : (v = E[32]),
        E[33] !== L || E[34] !== H || E[35] !== p || E[36] !== v
          ? ((h = (0, s.jsx)(F._P, {
              label: m,
              description: g,
              value: H,
              options: p,
              disabled: L,
              renderLabel: ec,
              onChange: v,
            })),
            (E[33] = L),
            (E[34] = H),
            (E[35] = p),
            (E[36] = v),
            (E[37] = h))
          : (h = E[37]),
        E[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.manualSeverity",
              defaultMessage: "Minimum manual review reporting severity",
            })),
            (y = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.manualSeverity.description",
              defaultMessage: "Choose the lowest severity Codex should report for reviews requested with @codex",
            })),
            (E[38] = f),
            (E[39] = y))
          : ((f = E[38]), (y = E[39])))
      let Y = U.manual_severity_threshold ?? "medium"
      ;(E[40] !== O ? ((x = (e) => O({ manual_severity_threshold: e })), (E[40] = O), (E[41] = x)) : (x = E[41]),
        E[42] !== L || E[43] !== Y || E[44] !== x
          ? ((w = (0, s.jsx)(F._P, {
              label: f,
              description: y,
              value: Y,
              options: en,
              disabled: L,
              renderLabel: ed,
              onChange: x,
            })),
            (E[42] = L),
            (E[43] = Y),
            (E[44] = x),
            (E[45] = w))
          : (w = E[45]),
        E[46] !== V ||
        E[47] !== X ||
        E[48] !== W ||
        E[49] !== O ||
        E[50] !== U.merge_gate_enabled ||
        E[51] !== H ||
        E[52] !== K
          ? ((_ = K
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(Q.l, {
                      variant: "settings",
                      content: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repository.mergeAdmin",
                        defaultMessage:
                          "Only GitHub repository admins can change merge protection and blocking severity",
                      }),
                    }),
                    (0, s.jsx)(q.ic, {
                      label: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repository.mergeProtection",
                        defaultMessage: "Merge protection",
                      }),
                      description: W
                        ? (0, s.jsx)(d.A, {
                            id: "settings.codeReview.repository.mergeProtection.description",
                            defaultMessage:
                              "Publish a GitHub check that fails when Security Review reports a finding at or above the blocking severity. To block merges, also require this check in GitHub.",
                          })
                        : (0, s.jsx)(d.A, {
                            id: "settings.codeReview.repository.mergeProtection.reportingRequired",
                            defaultMessage:
                              "Choose a blocking severity at least as high as the automatic reporting severity to enable merge protection",
                          }),
                      control: (e) =>
                        (0, s.jsx)(N.l, {
                          ...e,
                          checked: U.merge_gate_enabled ?? !1,
                          disabled: !X || (!U.merge_gate_enabled && !W),
                          onChange: (e) => O({ merge_gate_enabled: e }),
                        }),
                    }),
                    (0, s.jsx)(F._P, {
                      label: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repository.blockingSeverity",
                        defaultMessage: "Blocking severity",
                      }),
                      description: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repository.blockingSeverity.description",
                        defaultMessage:
                          "Choose the lowest finding severity that should fail the Security Review GitHub check",
                      }),
                      value: V,
                      options: en.slice(0, en.indexOf(H) + 1),
                      disabled: !X,
                      renderLabel: el,
                      onChange: (e) => O({ blocking_severity_threshold: e }),
                    }),
                  ],
                })
              : null),
            (E[46] = V),
            (E[47] = X),
            (E[48] = W),
            (E[49] = O),
            (E[50] = U.merge_gate_enabled),
            (E[51] = H),
            (E[52] = K),
            (E[53] = _))
          : (_ = E[53]),
        E[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.pathRules",
              defaultMessage: "Path-based reporting severity override",
            })),
            (C = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.pathRules.description",
              defaultMessage: "Override reporting severity for specific repository paths",
            })),
            (E[54] = j),
            (E[55] = C))
          : ((j = E[54]), (C = E[55])))
      let J = L || B
      return (
        E[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = () => G(!0)),
            (A = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.addPath",
              defaultMessage: "Add path override",
            })),
            (E[56] = S),
            (E[57] = A))
          : ((S = E[56]), (A = E[57])),
        E[58] !== J
          ? ((R = (0, s.jsx)(q.ic, {
              label: j,
              description: C,
              control: (0, s.jsx)(M.$, { color: "secondary", size: "toolbar", disabled: J, onClick: S, children: A }),
            })),
            (E[58] = J),
            (E[59] = R))
          : (R = E[59]),
        E[60] !== L || E[61] !== O || E[62] !== U.path_rules
          ? ((k = U.path_rules?.map((e, t) =>
              (0, s.jsx)(
                em,
                {
                  rule: e,
                  disabled: L,
                  onUpdate: (e) => O({ path_rules: U.path_rules?.map((i, s) => (s === t ? e : i)) }),
                  onRemove: () => O({ path_rules: U.path_rules?.filter((e, i) => i !== t) }),
                },
                `${t}-${e.path_prefix}`,
              ),
            )),
            (E[60] = L),
            (E[61] = O),
            (E[62] = U.path_rules),
            (E[63] = k))
          : (k = E[63]),
        E[64] !== B || E[65] !== L || E[66] !== O || E[67] !== U.path_rules
          ? ((I = B
              ? (0, s.jsx)(q.ic, {
                  description: (0, s.jsx)(d.A, {
                    id: "settings.codeReview.pathPrefix.help",
                    defaultMessage: "Apply this rule to paths that start with this prefix",
                  }),
                  variant: "stacked",
                  label: (0, s.jsx)(d.A, {
                    id: "settings.codeReview.repository.newPath",
                    defaultMessage: "Repository path prefix",
                  }),
                  control: (e) =>
                    (0, s.jsx)(ev, {
                      ...e,
                      kind: "override",
                      savedPath: "",
                      disabled: L,
                      onCancel: () => G(!1),
                      onSave: (e) =>
                        O(
                          {
                            path_rules: [
                              ...(U.path_rules ?? []),
                              { path_prefix: e, auto_severity_threshold: null, manual_severity_threshold: null },
                            ],
                          },
                          () => G(!1),
                        ),
                    }),
                })
              : null),
            (E[64] = B),
            (E[65] = L),
            (E[66] = O),
            (E[67] = U.path_rules),
            (E[68] = I))
          : (I = E[68]),
        E[69] !== L ||
        E[70] !== O ||
        E[71] !== U ||
        E[72] !== h ||
        E[73] !== w ||
        E[74] !== _ ||
        E[75] !== R ||
        E[76] !== k ||
        E[77] !== I ||
        E[78] !== l ||
        E[79] !== c ||
        E[80] !== u
          ? ((P = (0, s.jsxs)(F.SA, {
              security: !0,
              preferences: U,
              disabled: L,
              onUpdate: O,
              title: i,
              children: [l, c, u, h, w, _, R, k, I],
            })),
            (E[69] = L),
            (E[70] = O),
            (E[71] = U),
            (E[72] = h),
            (E[73] = w),
            (E[74] = _),
            (E[75] = R),
            (E[76] = k),
            (E[77] = I),
            (E[78] = l),
            (E[79] = c),
            (E[80] = u),
            (E[81] = P))
          : (P = E[81]),
        P
      )
    }
    function el(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function ed(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function ec(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function eu(e) {
      return (0, s.jsx)(d.A, {
        id: "settings.codeReview.repository.threatSource.option",
        defaultMessage: "{value, select, codex_security {Codex Security} other {Repository file}}",
        values: { value: e },
      })
    }
    function eg(e) {
      return (0, s.jsx)(F.dN, { value: e })
    }
    function em(e) {
      let t,
        i,
        n,
        a,
        o,
        c,
        u = (0, r.c)(17),
        { rule: g, disabled: m, onUpdate: p, onRemove: v } = e,
        h = (0, l.A)()
      return (
        u[0] !== g.path_prefix
          ? ((t = (0, s.jsx)("span", { className: "font-mono select-text", children: g.path_prefix })),
            (u[0] = g.path_prefix),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== m || u[3] !== h || u[4] !== p || u[5] !== g
          ? ((i = ["auto_severity_threshold", "manual_severity_threshold"].map((e) =>
              (0, s.jsxs)(
                b.Fragment,
                {
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(d.A, {
                        id: "settings.codeReview.repository.pathRule.label",
                        defaultMessage: "{field, select, auto_severity_threshold {Automatic} other {Manual}}",
                        values: { field: e },
                      }),
                    }),
                    (0, s.jsx)(F.wW, {
                      "aria-label": h.formatMessage(
                        {
                          id: "settings.codeReview.repository.pathRule.severity",
                          defaultMessage:
                            "{field, select, auto_severity_threshold {Automatic} other {Manual}} review severity for {path}",
                        },
                        { field: e, path: g.path_prefix },
                      ),
                      value: g[e] ?? "inherit",
                      options: ea,
                      disabled: m,
                      renderLabel: ep,
                      onChange: (t) => p({ ...g, [e]: "inherit" === t ? null : t }),
                    }),
                  ],
                },
                e,
              ),
            )),
            (u[2] = m),
            (u[3] = h),
            (u[4] = p),
            (u[5] = g),
            (u[6] = i))
          : (i = u[6]),
        u[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(d.A, { id: "settings.codeReview.repository.removePath", defaultMessage: "Remove" })),
            (u[7] = n))
          : (n = u[7]),
        u[8] !== m || u[9] !== v
          ? ((a = (0, s.jsx)(M.$, { color: "ghost", size: "toolbar", disabled: m, onClick: v, children: n })),
            (u[8] = m),
            (u[9] = v),
            (u[10] = a))
          : (a = u[10]),
        u[11] !== i || u[12] !== a
          ? ((o = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [i, a] })),
            (u[11] = i),
            (u[12] = a),
            (u[13] = o))
          : (o = u[13]),
        u[14] !== t || u[15] !== o
          ? ((c = (0, s.jsx)(q.ic, { label: t, variant: "stacked", control: o })),
            (u[14] = t),
            (u[15] = o),
            (u[16] = c))
          : (c = u[16]),
        c
      )
    }
    function ep(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function ev(e) {
      let t,
        i,
        n,
        a,
        o,
        c,
        u,
        g,
        m,
        p,
        v,
        h,
        f,
        y = (0, r.c)(35)
      y[0] !== e
        ? (({ kind: n, savedPath: c, disabled: i, onSave: o, onCancel: a, ...t } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = i),
          (y[3] = n),
          (y[4] = a),
          (y[5] = o),
          (y[6] = c))
        : ((t = y[1]), (i = y[2]), (n = y[3]), (a = y[4]), (o = y[5]), (c = y[6]))
      let x = (0, l.A)(),
        [w, _] = (0, b.useState)(c),
        j = "override" === n
      y[7] !== w ? ((u = w.trim()), (y[7] = w), (y[8] = u)) : (u = y[8])
      let C = u !== c
      return (
        y[9] !== C || y[10] !== i || y[11] !== o || y[12] !== w
          ? ((g = (e) => {
              ;(e.preventDefault(), !i && C && o(w.trim()))
            }),
            (y[9] = C),
            (y[10] = i),
            (y[11] = o),
            (y[12] = w),
            (y[13] = g))
          : (g = y[13]),
        y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (e) => _(e.currentTarget.value)), (y[14] = m))
          : (m = y[14]),
        y[15] !== j || y[16] !== x
          ? ((p = j
              ? x.formatMessage({ id: "settings.codeReview.repository.newPath.placeholder", defaultMessage: "src/" })
              : x.formatMessage({
                  id: "settings.codeReview.repository.threatPath.placeholder",
                  defaultMessage: "docs/threat-model.md",
                })),
            (y[15] = j),
            (y[16] = x),
            (y[17] = p))
          : (p = y[17]),
        y[18] !== j || y[19] !== t || y[20] !== i || y[21] !== n || y[22] !== w || y[23] !== p
          ? ((v = (0, s.jsx)(es.pd, {
              ...t,
              name: n,
              value: w,
              onChange: m,
              disabled: i,
              autoFocus: j,
              placeholder: p,
            })),
            (y[18] = j),
            (y[19] = t),
            (y[20] = i),
            (y[21] = n),
            (y[22] = w),
            (y[23] = p),
            (y[24] = v))
          : (v = y[24]),
        y[25] !== j || y[26] !== C || y[27] !== i || y[28] !== a || y[29] !== c
          ? ((h =
              j || C
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(M.$, {
                        type: "submit",
                        color: "primary",
                        size: "toolbar",
                        disabled: i || !C,
                        children: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repository.savePathEdit",
                          defaultMessage: "{adding, select, true {Add} other {Save}}",
                          values: { adding: String(j) },
                        }),
                      }),
                      (0, s.jsx)(M.$, {
                        color: "ghost",
                        size: "toolbar",
                        disabled: i,
                        onClick: () => {
                          ;(_(c), a?.())
                        },
                        children: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repository.cancelPathEdit",
                          defaultMessage: "Cancel",
                        }),
                      }),
                    ],
                  })
                : null),
            (y[25] = j),
            (y[26] = C),
            (y[27] = i),
            (y[28] = a),
            (y[29] = c),
            (y[30] = h))
          : (h = y[30]),
        y[31] !== g || y[32] !== v || y[33] !== h
          ? ((f = (0, s.jsxs)("form", { className: "flex items-center gap-2", onSubmit: g, children: [v, h] })),
            (y[31] = g),
            (y[32] = v),
            (y[33] = h),
            (y[34] = f))
          : (f = y[34]),
        f
      )
    }
    function eh(e) {
      let t,
        i,
        n,
        o,
        l,
        c,
        u,
        g,
        m,
        p = (0, r.c)(29),
        { repositoryId: v, onBack: h } = e,
        { data: f, isError: y, isFetching: x, refetch: b } = (0, a._U)(G._E, v),
        { isPending: w, error: _, mutate: j } = (0, a._U)(G.uH, v),
        C = f?.edit_blocked_reason === null,
        S = w || x || y || !C,
        A = _ instanceof J.fk ? String(_.status) : "save"
      ;("409" === A && f?.funding_authorization_required && (A = "funding"),
        y && (A = "load"),
        p[0] !== j || p[1] !== f || p[2] !== v
          ? ((t = (e, t) => {
              null != f &&
                j(
                  {
                    repository: v,
                    review_preference: f.review_preference,
                    funding_generation: f.funding_generation,
                    ...e,
                  },
                  { onSuccess: t },
                )
            }),
            (p[0] = j),
            (p[1] = f),
            (p[2] = v),
            (p[3] = t))
          : (t = p[3]))
      let R = t,
        N = f?.repository.repository_full_name
      return (
        p[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(z.z_d, {})),
            (n = (0, s.jsx)(d.A, { id: "settings.codeReview.repository.back", defaultMessage: "Code review" })),
            (p[4] = i),
            (p[5] = n))
          : ((i = p[4]), (n = p[5])),
        p[6] !== h
          ? ((o = (0, s.jsxs)(M.$, { color: "ghost", size: "toolbar", onClick: h, children: [i, n] })),
            (p[6] = h),
            (p[7] = o))
          : (o = p[7]),
        p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.subtitle",
              defaultMessage: "Manage how Codex reviews this repository",
            })),
            (p[8] = l))
          : (l = p[8]),
        p[9] !== _ || p[10] !== A || p[11] !== y || p[12] !== b
          ? ((c =
              y || null != _
                ? (0, s.jsx)(Q.l, {
                    type: "error",
                    variant: "settings",
                    role: "alert",
                    content: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repository.error",
                      defaultMessage:
                        "{kind, select, load {Unable to load repository settings. Try again. If this continues, check that the correct GitHub or GitLab account is connected and ChatGPT has access to this repository. You may need to reconnect your account.} funding {Workspace funding was removed. Reviews for all PRs require it to be reconnected.} 403 {You do not have permission to change these repository settings} 409 {Repository settings changed. Review the current settings and try again.} other {Unable to save repository settings. Try again.}}",
                      values: { kind: A },
                    }),
                    primaryCtaText:
                      "funding" !== A
                        ? (0, s.jsx)(d.A, {
                            id: "settings.codeReview.repository.retryAction",
                            defaultMessage: "{kind, select, load {Retry} other {Refresh}}",
                            values: { kind: A },
                          })
                        : void 0,
                    onPrimaryCtaClick: () => void b(),
                  })
                : null),
            (p[9] = _),
            (p[10] = A),
            (p[11] = y),
            (p[12] = b),
            (p[13] = c))
          : (c = p[13]),
        p[14] !== y || p[15] !== f
          ? ((u =
              null != f || y
                ? null
                : (0, s.jsx)(T.j, {
                    children: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.repository.loading",
                      defaultMessage: "Loading repository settings\u2026",
                    }),
                  })),
            (p[14] = y),
            (p[15] = f),
            (p[16] = u))
          : (u = p[16]),
        p[17] !== C || p[18] !== S || p[19] !== f || p[20] !== R
          ? ((g =
              null != f
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(Q.l, {
                        variant: "settings",
                        layout: "verticalIcon",
                        icon: (0, s.jsx)(Y.I, { asset: X.Z }),
                        title: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repository.sharedSettingsTitle",
                          defaultMessage: "Shared repository settings",
                        }),
                        content: (0, s.jsx)(d.A, {
                          id: "settings.codeReview.repository.sharedSettingsNotice",
                          defaultMessage:
                            "{reason, select, allowed {These shared settings control reviews for this repository} repository_admin_required {Only repository admins can change these shared review settings} repository_write_access_required {You need repository admin or push access to change these shared review settings} other {You don't have permission to change these shared review settings}}",
                          values: { reason: C ? "allowed" : f.edit_blocked_reason },
                        }),
                      }),
                      f.funding_authorization_required
                        ? (0, s.jsx)(ef, { disabled: S, onAllow: () => R({ authorize_funding: !0 }) })
                        : null,
                      (0, s.jsx)(ey, { repository: f, disabled: S, onUpdate: R }),
                      null != f.security_review
                        ? (0, s.jsx)(eo, {
                            repository: f.repository,
                            preferences: f.security_review,
                            disabled: S,
                            onUpdate: (e, t) => R({ security_review: e }, t),
                          })
                        : null,
                      (0, s.jsx)(ei, { repository: f.repository }),
                    ],
                  })
                : null),
            (p[17] = C),
            (p[18] = S),
            (p[19] = f),
            (p[20] = R),
            (p[21] = g))
          : (g = p[21]),
        p[22] !== w || p[23] !== N || p[24] !== o || p[25] !== c || p[26] !== u || p[27] !== g
          ? ((m = (0, s.jsxs)(P.P, {
              className: "select-none",
              "aria-busy": w,
              title: N,
              backSlot: o,
              subtitle: l,
              children: [c, u, g],
            })),
            (p[22] = w),
            (p[23] = N),
            (p[24] = o),
            (p[25] = c),
            (p[26] = u),
            (p[27] = g),
            (p[28] = m))
          : (m = p[28]),
        m
      )
    }
    function ef(e) {
      let t,
        i,
        n,
        a,
        o = (0, r.c)(8),
        { disabled: l, onAllow: c } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (o[0] = t)) : (t = o[0])
      let { data: u } = (0, K.YL)(void 0, t)
      ;(o[1] !== u
        ? ((i =
            null == u
              ? (0, s.jsx)(d.A, {
                  id: "settings.codeReview.repository.funding",
                  defaultMessage:
                    "Workspace funding was removed from this repository. Reconnect funding to run automatic reviews.",
                })
              : (0, s.jsx)(d.A, {
                  id: "settings.codeReview.repository.allowFunding",
                  defaultMessage:
                    "Allow {account} to fund automatic reviews for this repository? Review preferences will stay the same.",
                  values: { account: u.name },
                })),
          (o[1] = u),
          (o[2] = i))
        : (i = o[2]),
        o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.allowFundingAction",
              defaultMessage: "Allow funding",
            })),
            (o[3] = n))
          : (n = o[3]))
      let g = l || null == u
      return (
        o[4] !== c || o[5] !== i || o[6] !== g
          ? ((a = (0, s.jsx)(Q.l, {
              variant: "settings",
              content: i,
              primaryCtaText: n,
              isPrimaryCtaDisabled: g,
              onPrimaryCtaClick: c,
            })),
            (o[4] = c),
            (o[5] = i),
            (o[6] = g),
            (o[7] = a))
          : (a = o[7]),
        a
      )
    }
    function ey(e) {
      let t,
        i,
        n,
        a,
        o,
        l,
        c,
        u,
        g,
        m,
        p = (0, r.c)(23),
        { repository: v, disabled: h, onUpdate: f } = e,
        y = null == v.exhaustive_code_review ? "personal" : "off"
      ;(!0 === v.exhaustive_code_review && (y = "on"),
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(d.A, { id: "settings.codeReview.repository.codeTitle", defaultMessage: "Review code" })),
            (p[0] = t))
          : (t = p[0]),
        p[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(d.A, { id: "settings.codeReview.repository.codeTrigger", defaultMessage: "Trigger" })),
            (p[1] = i))
          : (i = p[1]))
      let x = v.code_review_trigger_policy ?? "personal"
      return (
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = ["personal", "pr_open", "every_push", "smart_detect"]), (p[2] = n))
          : (n = p[2]),
        p[3] !== f
          ? ((a = (e) => f({ code_review_trigger_policy: "personal" === e ? null : e })), (p[3] = f), (p[4] = a))
          : (a = p[4]),
        p[5] !== h || p[6] !== x || p[7] !== a
          ? ((o = (0, s.jsx)(F._P, { label: i, value: x, options: n, renderLabel: eb, disabled: h, onChange: a })),
            (p[5] = h),
            (p[6] = x),
            (p[7] = a),
            (p[8] = o))
          : (o = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(d.A, {
              id: "settings.codeReview.repository.exhaustive",
              defaultMessage: "Exhaustive review",
            })),
            (p[9] = l))
          : (l = p[9]),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = ["personal", "on", "off"]), (p[10] = c))
          : (c = p[10]),
        p[11] !== f
          ? ((u = (e) => f({ exhaustive_code_review: "personal" === e ? null : "on" === e })), (p[11] = f), (p[12] = u))
          : (u = p[12]),
        p[13] !== h || p[14] !== y || p[15] !== u
          ? ((g = (0, s.jsx)(F._P, { label: l, value: y, options: c, disabled: h, onChange: u, renderLabel: ex })),
            (p[13] = h),
            (p[14] = y),
            (p[15] = u),
            (p[16] = g))
          : (g = p[16]),
        p[17] !== h || p[18] !== f || p[19] !== v || p[20] !== g || p[21] !== o
          ? ((m = (0, s.jsxs)(F.SA, { preferences: v, disabled: h, onUpdate: f, title: t, children: [o, g] })),
            (p[17] = h),
            (p[18] = f),
            (p[19] = v),
            (p[20] = g),
            (p[21] = o),
            (p[22] = m))
          : (m = p[22]),
        m
      )
    }
    function ex(e) {
      return (0, s.jsx)(d.A, {
        id: "settings.codeReview.repository.exhaustive.option",
        defaultMessage: "{value, select, personal {Follow personal preferences} on {On} other {Off}}",
        values: { value: e },
      })
    }
    function eb(e) {
      return (0, s.jsx)(F.dN, { value: e })
    }
    function ew(e) {
      let t,
        i,
        n,
        a,
        o,
        l,
        c,
        u,
        g,
        m,
        p,
        v = (0, r.c)(39),
        { disabled: h, preferences: f, allowCreditsForSecurityReviews: y, onUpdate: b } = e,
        w = (0, er.Zj)(x.Cx),
        { data: j } = (0, O.Zl)(),
        { canManageCreditSettings: C } = (0, k.AH)(),
        M = f.trigger_policy ?? "code_review"
      ;(v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(E.X.Header, {
            title: (0, s.jsx)(d.A, {
              id: "settings.codeReview.security.title",
              defaultMessage: "Personal security review preferences",
            }),
          })),
          (v[0] = t))
        : (t = v[0]),
        v[1] !== h || v[2] !== b || v[3] !== f.preference
          ? ((i = (0, s.jsx)(_.GC, {
              entry: x.Mv.automaticSecurity,
              control: (e) =>
                (0, s.jsx)(N.l, {
                  ...e,
                  checked: "always" === f.preference,
                  disabled: h,
                  onChange: (e) => {
                    b({ security_review: { preference: e ? "always" : "repo_default" } })
                  },
                }),
            })),
            (v[1] = h),
            (v[2] = b),
            (v[3] = f.preference),
            (v[4] = i))
          : (i = v[4]),
        v[5] !== w || v[6] !== M ? ((n = (0, x.Eh)(w, M)), (v[5] = w), (v[6] = M), (v[7] = n)) : (n = v[7]),
        v[8] !== b ? ((a = (e) => b({ security_review: { trigger_policy: e } })), (v[8] = b), (v[9] = a)) : (a = v[9]),
        v[10] !== h || v[11] !== n || v[12] !== a || v[13] !== M
          ? ((o = (0, s.jsx)(F.CA, {
              entry: x.Mv.securityTrigger,
              anchored: !0,
              value: M,
              options: n,
              disabled: h,
              onChange: a,
              renderLabel: eS,
              renderDescription: eM,
            })),
            (v[10] = h),
            (v[11] = n),
            (v[12] = a),
            (v[13] = M),
            (v[14] = o))
          : (o = v[14]))
      let S = f.severity_threshold ?? "high"
      ;(v[15] !== b
        ? ((l = (e) => b({ security_review: { severity_threshold: e } })), (v[15] = b), (v[16] = l))
        : (l = v[16]),
        v[17] !== h || v[18] !== S || v[19] !== l
          ? ((c = (0, s.jsx)(F.CA, {
              entry: x.Mv.automaticSeverity,
              anchored: !0,
              disabled: h,
              value: S,
              options: x.fz,
              onChange: l,
              renderLabel: eC,
            })),
            (v[17] = h),
            (v[18] = S),
            (v[19] = l),
            (v[20] = c))
          : (c = v[20]))
      let A = f.manual_severity_threshold ?? "medium"
      return (
        v[21] !== b
          ? ((u = (e) => b({ security_review: { manual_severity_threshold: e } })), (v[21] = b), (v[22] = u))
          : (u = v[22]),
        v[23] !== h || v[24] !== u || v[25] !== A
          ? ((g = (0, s.jsx)(F.CA, {
              entry: x.Mv.manualSeverity,
              anchored: !0,
              disabled: h,
              value: A,
              options: x.fz,
              onChange: u,
              renderLabel: ej,
            })),
            (v[23] = h),
            (v[24] = u),
            (v[25] = A),
            (v[26] = g))
          : (g = v[26]),
        v[27] !== y || v[28] !== C || v[29] !== h || v[30] !== b || v[31] !== j?.security_review_credits_available
          ? ((m = (0, x.e8)(C, j?.security_review_credits_available, y)
              ? (0, s.jsx)(_.GC, {
                  entry: x.Mv.securityCredits,
                  description: (0, s.jsx)(d.A, {
                    id: "settings.codeReview.security.credits.description",
                    defaultMessage:
                      "Security reviews use this account's shared Codex allowance. Turn this on to use credits after that allowance runs out. This also applies to 'Review Everyone' security reviews you've enabled. <link>View usage</link>.",
                    values: { link: e_ },
                  }),
                  control: (e) =>
                    (0, s.jsx)(N.l, {
                      ...e,
                      checked: !0 === y,
                      disabled: h,
                      onChange: (e) => b({ allow_credits_for_security_reviews: e }),
                    }),
                })
              : null),
            (v[27] = y),
            (v[28] = C),
            (v[29] = h),
            (v[30] = b),
            (v[31] = j?.security_review_credits_available),
            (v[32] = m))
          : (m = v[32]),
        v[33] !== g || v[34] !== m || v[35] !== i || v[36] !== o || v[37] !== c
          ? ((p = (0, s.jsxs)(E.X, {
              children: [t, (0, s.jsx)(E.X.Content, { children: (0, s.jsxs)(L.t, { children: [i, o, c, g, m] }) })],
            })),
            (v[33] = g),
            (v[34] = m),
            (v[35] = i),
            (v[36] = o),
            (v[37] = c),
            (v[38] = p))
          : (p = v[38]),
        p
      )
    }
    function e_(e) {
      return (0, s.jsx)(w.N_, {
        className: "cursor-interaction text-link-primary! hover:underline",
        to: "/settings/usage",
        children: e,
      })
    }
    function ej(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function eC(e) {
      return (0, s.jsx)(F.Qt, { value: e })
    }
    function eM(e) {
      return (0, s.jsx)(d.A, {
        id: "settings.codeReview.security.trigger.option.description",
        defaultMessage:
          "{policy, select, pr_open {Review when a pull request is opened.} every_push {Review again whenever new commits are pushed after the initial review.} smart_detect {Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.} code_review {Review whenever Codex runs a code review.} other {}}",
        values: { policy: e },
      })
    }
    function eS(e) {
      return (0, s.jsx)(F.dN, { value: e })
    }
    function eA(e) {
      let t,
        i,
        n,
        o,
        l,
        c,
        u,
        g,
        m,
        p,
        v,
        h,
        f,
        y,
        x,
        _,
        j,
        M,
        N,
        k,
        E,
        T = (0, r.c)(63),
        { appPreferences: q, codeNavigation: L, provider: O } = e,
        { repositoryId: F } = (0, w.g)(),
        z = (0, w.Zp)(),
        { search: $ } = (0, w.zy)(),
        [B, G] = (0, w.ok)()
      T[0] !== B ? ((t = B.get("provider")), (T[0] = B), (T[1] = t)) : (t = T[1])
      let Z = t,
        H = "github" === Z || "gitlab" === Z ? Z : void 0 === O ? "github" : O,
        V = (0, a.Ul)(I.T),
        W = (0, b.useId)()
      if (null != F && V.cloud.visible) {
        let e, t
        return (
          T[2] !== z || T[3] !== $
            ? ((e = () => void z({ pathname: "/settings/code-review", search: $ })), (T[2] = z), (T[3] = $), (T[4] = e))
            : (e = T[4]),
          T[5] !== F || T[6] !== e
            ? ((t = (0, s.jsx)(eh, { repositoryId: F, onBack: e }, F)), (T[5] = F), (T[6] = e), (T[7] = t))
            : (t = T[7]),
          t
        )
      }
      let X = `${W}-app`
      ;(T[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, s.jsx)(d.A, { id: "settings.codeReview.privateTab", defaultMessage: "Preferences" })), (T[8] = i))
        : (i = T[8]),
        T[9] !== V.app.visible || T[10] !== q || T[11] !== X
          ? ((n = { key: "app", visible: V.app.visible, panelId: X, name: i, content: q }),
            (T[9] = V.app.visible),
            (T[10] = q),
            (T[11] = X),
            (T[12] = n))
          : (n = T[12]))
      let K = `${W}-cloud`
      ;(T[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, s.jsx)(d.A, { id: "settings.codeReview.cloudTab", defaultMessage: "Review agent" })), (T[13] = o))
        : (o = T[13]),
        T[14] !== G
          ? ((l = (e) => {
              G((t) => (t.set("provider", e), t))
            }),
            (T[14] = G),
            (T[15] = l))
          : (l = T[15]),
        T[16] !== z || T[17] !== $
          ? ((c = (e) =>
              void z({ pathname: `/settings/code-review/repositories/${encodeURIComponent(e)}`, search: $ })),
            (T[16] = z),
            (T[17] = $),
            (T[18] = c))
          : (c = T[18]),
        T[19] !== H || T[20] !== l || T[21] !== c
          ? ((u = (0, s.jsx)(D, { provider: H, onProviderChange: l, onSelectRepository: c }, H)),
            (T[19] = H),
            (T[20] = l),
            (T[21] = c),
            (T[22] = u))
          : (u = T[22]),
        T[23] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, s.jsx)(ek, {})), (T[23] = g)) : (g = T[23]),
        T[24] !== u ? ((m = (0, s.jsxs)(s.Fragment, { children: [u, g] })), (T[24] = u), (T[25] = m)) : (m = T[25]),
        T[26] !== V.cloud.visible || T[27] !== m || T[28] !== K
          ? ((p = { key: "cloud", visible: V.cloud.visible, panelId: K, name: o, content: m }),
            (T[26] = V.cloud.visible),
            (T[27] = m),
            (T[28] = K),
            (T[29] = p))
          : (p = T[29]))
      let Q = `${W}-code-navigation`
      ;(T[30] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, s.jsx)(C, {})), (T[30] = v)) : (v = T[30]),
        T[31] !== V.navigation.visible || T[32] !== L || T[33] !== Q
          ? ((h = { key: "code-navigation", visible: V.navigation.visible, panelId: Q, name: v, content: L }),
            (T[31] = V.navigation.visible),
            (T[32] = L),
            (T[33] = Q),
            (T[34] = h))
          : (h = T[34]),
        T[35] !== p || T[36] !== h || T[37] !== n
          ? ((f = [n, p, h].filter(eN)), (T[35] = p), (T[36] = h), (T[37] = n), (T[38] = f))
          : (f = T[38]))
      let Y = f
      T[39] !== B ? ((y = B.get("tab")), (T[39] = B), (T[40] = y)) : (y = T[40])
      let J = y
      T[41] !== J || T[42] !== Y
        ? ((x = Y.find((e) => e.key === J) ?? Y.find(eR) ?? Y[0]), (T[41] = J), (T[42] = Y), (T[43] = x))
        : (x = T[43])
      let ee = x,
        et = Y.length > 1
      return (
        T[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, s.jsx)(d.A, {
              id: "settings.overview.code-review",
              defaultMessage: "Choose how Codex reviews changes in your repositories",
            })),
            (T[44] = _))
          : (_ = T[44]),
        T[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, s.jsx)(U.s, { slug: "code-review" })), (T[45] = j))
          : (j = T[45]),
        T[46] !== ee || T[47] !== G || T[48] !== et || T[49] !== Y
          ? ((M =
              et && null != ee
                ? (0, s.jsx)(A.J1, {
                    className: "-top-(--padding-panel) -mt-(--padding-panel) pt-panel",
                    fadeSize: "compact",
                    children: (0, s.jsx)(R.t, {
                      variant: "settings",
                      scrollable: !0,
                      ariaLabel: "Code Review",
                      selectedKey: ee.key,
                      onSelect: (e) => {
                        e !== ee.key && G((t) => (t.set("tab", e), t))
                      },
                      tabs: Y,
                    }),
                  })
                : null),
            (T[46] = ee),
            (T[47] = G),
            (T[48] = et),
            (T[49] = Y),
            (T[50] = M))
          : (M = T[50]),
        T[51] !== V.app.error || T[52] !== V.cloud.error || T[53] !== ee
          ? ((N =
              null == ee && (V.app.error || V.cloud.error)
                ? (0, s.jsx)(S.W, {
                    layout: "settings-row",
                    children: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.access.error",
                      defaultMessage: "Unable to load review access. Try again in a moment.",
                    }),
                  })
                : null),
            (T[51] = V.app.error),
            (T[52] = V.cloud.error),
            (T[53] = ee),
            (T[54] = N))
          : (N = T[54]),
        T[55] !== ee || T[56] !== et || T[57] !== Y
          ? ((k = Y.map((e) =>
              (0, s.jsx)(
                "div",
                {
                  id: e.panelId,
                  role: et ? "tabpanel" : void 0,
                  "aria-labelledby": et ? `${e.panelId}-tab` : void 0,
                  hidden: e !== ee,
                  className: "flex flex-col gap-[inherit]",
                  children: e === ee ? e.content : null,
                },
                e.key,
              ),
            )),
            (T[55] = ee),
            (T[56] = et),
            (T[57] = Y),
            (T[58] = k))
          : (k = T[58]),
        T[59] !== M || T[60] !== N || T[61] !== k
          ? ((E = (0, s.jsxs)(P.P, { overview: _, className: "select-none", title: j, children: [M, N, k] })),
            (T[59] = M),
            (T[60] = N),
            (T[61] = k),
            (T[62] = E))
          : (E = T[62]),
        E
      )
    }
    function eR(e) {
      return "cloud" === e.key
    }
    function eN(e) {
      return e.visible
    }
    function ek() {
      let e,
        t,
        i,
        n,
        o,
        c,
        u,
        g,
        m,
        v,
        f = (0, r.c)(44),
        y = (0, a.gh)(h.u),
        b = (0, l.A)(),
        { data: w, isError: j, refetch: C } = (0, O.wJ)(),
        { mutate: S, isPending: A } = (0, O.sN)(),
        { canManageCreditSettings: R } = (0, k.AH)()
      f[0] !== b || f[1] !== S || f[2] !== y
        ? ((e = (e) => {
            S(e, {
              onError: () => {
                y.get(p.Id).danger(
                  b.formatMessage({
                    id: "settings.codeReview.save.error",
                    defaultMessage: "Unable to save code review settings",
                  }),
                  { errorAnalytics: { toastId: "settings.codeReview.save.error" } },
                )
              },
            })
          }),
          (f[0] = b),
          (f[1] = S),
          (f[2] = y),
          (f[3] = e))
        : (e = f[3])
      let I = e
      if (null == w) {
        let e
        if (j) {
          let e, t, i, r
          return (
            f[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(d.A, {
                  id: "settings.codeReview.error",
                  defaultMessage: "Unable to load code review settings",
                })),
                (f[4] = e))
              : (e = f[4]),
            f[5] !== C ? ((t = () => void C()), (f[5] = C), (f[6] = t)) : (t = f[6]),
            f[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, s.jsx)(d.A, { id: "settings.codeReview.retry", defaultMessage: "Retry" })), (f[7] = i))
              : (i = f[7]),
            f[8] !== t
              ? ((r = (0, s.jsx)(E.X, {
                  children: (0, s.jsx)(E.X.Content, {
                    children: (0, s.jsx)(L.t, {
                      children: (0, s.jsx)(q.ic, {
                        label: e,
                        control: (0, s.jsx)(M.$, { color: "secondary", size: "toolbar", onClick: t, children: i }),
                      }),
                    }),
                  }),
                })),
                (f[8] = t),
                (f[9] = r))
              : (r = f[9]),
            r
          )
        }
        return (
          f[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(T.j, {
                children: (0, s.jsx)(d.A, {
                  id: "settings.codeReview.loading",
                  defaultMessage: "Loading code review settings\u2026",
                }),
              })),
              (f[10] = e))
            : (e = f[10]),
          e
        )
      }
      let P = w.code_review_trigger_policy ?? "pr_open"
      return (
        f[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(E.X.Header, {
              title: (0, s.jsx)(d.A, {
                id: "settings.codeReview.personal.title",
                defaultMessage: "Personal preferences",
              }),
            })),
            (f[11] = t))
          : (t = f[11]),
        f[12] !== I || f[13] !== A || f[14] !== w.code_review_preference
          ? ((i = (0, s.jsx)(_.GC, {
              entry: x.Mv.automatic,
              control: (e) =>
                (0, s.jsx)(N.l, {
                  ...e,
                  checked: "always" === w.code_review_preference,
                  disabled: A,
                  onChange: (e) => {
                    I({ code_review_preference: e ? "always" : "repo_default" })
                  },
                }),
            })),
            (f[12] = I),
            (f[13] = A),
            (f[14] = w.code_review_preference),
            (f[15] = i))
          : (i = f[15]),
        f[16] !== I ? ((n = (e) => I({ code_review_trigger_policy: e })), (f[16] = I), (f[17] = n)) : (n = f[17]),
        f[18] !== A || f[19] !== n || f[20] !== P
          ? ((o = (0, s.jsx)(F.CA, {
              entry: x.Mv.trigger,
              anchored: !0,
              value: P,
              options: x.Jd,
              disabled: A,
              onChange: n,
              renderLabel: eI,
            })),
            (f[18] = A),
            (f[19] = n),
            (f[20] = P),
            (f[21] = o))
          : (o = f[21]),
        f[22] !== I || f[23] !== A || f[24] !== w.exhaustive_code_review
          ? ((c = (0, s.jsx)(_.GC, {
              entry: x.Mv.exhaustive,
              control: (e) =>
                (0, s.jsx)(N.l, {
                  ...e,
                  checked: w.exhaustive_code_review,
                  disabled: A,
                  onChange: (e) => {
                    I({ exhaustive_code_review: e })
                  },
                }),
            })),
            (f[22] = I),
            (f[23] = A),
            (f[24] = w.exhaustive_code_review),
            (f[25] = c))
          : (c = f[25]),
        f[26] !== R || f[27] !== I || f[28] !== A || f[29] !== w.allow_credits_for_code_reviews
          ? ((u = R
              ? (0, s.jsx)(_.GC, {
                  entry: x.Mv.credits,
                  control: (e) =>
                    (0, s.jsx)(N.l, {
                      ...e,
                      checked: w.allow_credits_for_code_reviews,
                      disabled: A,
                      onChange: (e) => {
                        I({ allow_credits_for_code_reviews: e })
                      },
                    }),
                })
              : null),
            (f[26] = R),
            (f[27] = I),
            (f[28] = A),
            (f[29] = w.allow_credits_for_code_reviews),
            (f[30] = u))
          : (u = f[30]),
        f[31] !== i || f[32] !== o || f[33] !== c || f[34] !== u
          ? ((g = (0, s.jsxs)(E.X, {
              children: [t, (0, s.jsx)(E.X.Content, { children: (0, s.jsxs)(L.t, { children: [i, o, c, u] }) })],
            })),
            (f[31] = i),
            (f[32] = o),
            (f[33] = c),
            (f[34] = u),
            (f[35] = g))
          : (g = f[35]),
        f[36] !== I || f[37] !== A || f[38] !== w.allow_credits_for_security_reviews || f[39] !== w.security_review
          ? ((m =
              null != w.security_review
                ? (0, s.jsx)(ew, {
                    disabled: A,
                    preferences: w.security_review,
                    allowCreditsForSecurityReviews: w.allow_credits_for_security_reviews,
                    onUpdate: I,
                  })
                : null),
            (f[36] = I),
            (f[37] = A),
            (f[38] = w.allow_credits_for_security_reviews),
            (f[39] = w.security_review),
            (f[40] = m))
          : (m = f[40]),
        f[41] !== g || f[42] !== m
          ? ((v = (0, s.jsxs)(s.Fragment, { children: [g, m] })), (f[41] = g), (f[42] = m), (f[43] = v))
          : (v = f[43]),
        v
      )
    }
    function eI(e) {
      return (0, s.jsx)(F.dN, { value: e })
    }
    var eP = i("DBCl"),
      eE = i("E44Z"),
      eT = i("XsHM"),
      eq = i("q77y"),
      eU = i("ndjw"),
      eL = i("kfGJ")
    let eO = (0, i("Qgfj").zR)({
      id: "settings.codeNavigation.saveError",
      defaultMessage: "Couldn\u2019t save your Code Navigation setting",
    })
    var eF = i("iNGw"),
      ez = i.n(eF),
      e$ = i("I7Ou"),
      eB = i("ARVD")
    let eG = (0, a.RD)(h.u, () => ({
      queryKey: ["installed-language-servers"],
      queryFn: ({ signal: e }) => (0, eq.P)(eV().listInstalledServers(), e),
      networkMode: "always",
      refetchOnMount: !0,
      staleTime: 0,
    }))
    function eD() {
      let e,
        t,
        i,
        o,
        c,
        u,
        g,
        m,
        p,
        v = (0, r.c)(34),
        f = (0, a.gh)(h.u),
        y = (0, l.A)(),
        { data: x, isPending: b, isError: w, refetch: j } = (0, a.Ul)(eG)
      v[0] !== f
        ? ((e = {
            mutationFn: eH,
            networkMode: "always",
            onSuccess: async (e) => {
              ;("removed" === e || "cleanup-pending" === e) && (await f.query.invalidate(eG))
            },
          }),
          (v[0] = f),
          (v[1] = e))
        : (e = v[1])
      let C = (0, n.n)(e)
      if (v[2] !== y || v[3] !== w || v[4] !== b || v[5] !== j || v[6] !== C || v[7] !== x) {
        let e = x?.map((e) => {
            var t
            return {
              server: e,
              name: ((t = e.version), /^v?\d+(?:[.+-]|$)/i.test(t))
                ? y.formatMessage(
                    { id: "settings.codeNavigation.installedRuntimeVersion", defaultMessage: "{runtime}@{version}" },
                    { runtime: e.languageId, version: e.version },
                  )
                : e.version,
              folder: e.key.replace(/([a-f0-9]{8})[a-f0-9]{56}$/u, "$1\u2026"),
            }
          }),
          r = ez()(e, "name"),
          n = ez()(e, "folder")
        ;(v[12] !== b
          ? ((t =
              b &&
              (0, s.jsx)(e$.u, {
                children: (0, s.jsx)(d.A, {
                  id: "settings.codeNavigation.loadingServers",
                  defaultMessage: "Loading installed servers\u2026",
                }),
              })),
            (v[12] = b),
            (v[13] = t))
          : (t = v[13]),
          v[14] !== w || v[15] !== j
            ? ((i =
                w &&
                (0, s.jsx)(_.iu, {
                  label: (0, s.jsx)(d.A, {
                    id: "settings.codeNavigation.listError",
                    defaultMessage: "Couldn\u2019t load installed servers",
                  }),
                  action: (0, s.jsx)(M.$, {
                    color: "secondary",
                    size: "compact",
                    onClick: () => void j(),
                    children: (0, s.jsx)(d.A, { id: "settings.codeNavigation.retry", defaultMessage: "Try again" }),
                  }),
                })),
              (v[14] = w),
              (v[15] = j),
              (v[16] = i))
            : (i = v[16]),
          v[17] !== x?.length
            ? ((o =
                x?.length === 0 &&
                (0, s.jsx)(S.W, {
                  layout: "settings-row",
                  children: (0, s.jsx)(d.A, {
                    id: "settings.codeNavigation.noServers",
                    defaultMessage: "No language servers installed",
                  }),
                })),
              (v[17] = x?.length),
              (v[18] = o))
            : (o = v[18]),
          (c = e?.map((e) => {
            let { server: t, name: i, folder: a } = e,
              o =
                (r[i] ?? 0) > 1
                  ? y.formatMessage(
                      { id: "settings.codeNavigation.installedServerFolder", defaultMessage: "{server} ({folder})" },
                      { server: i, folder: (n[a] ?? 0) > 1 ? t.key : a },
                    )
                  : i
            return (0, s.jsx)(
              _.iu,
              {
                label: o,
                description: null == t.downloadSizeBytes ? null : (0, eB.z)(t.downloadSizeBytes, y),
                action: (0, s.jsx)(M.$, {
                  "aria-label": y.formatMessage(
                    { id: "settings.codeNavigation.deleteServer", defaultMessage: "Delete {server}" },
                    { server: o },
                  ),
                  color: "ghost",
                  size: "icon",
                  disabled: C.isPending || !t.canRemove,
                  onClick: () => C.mutate(t.key),
                  children: (0, s.jsx)(z.cSG, {}),
                }),
              },
              t.key,
            )
          })),
          (v[2] = y),
          (v[3] = w),
          (v[4] = b),
          (v[5] = j),
          (v[6] = C),
          (v[7] = x),
          (v[8] = t),
          (v[9] = i),
          (v[10] = o),
          (v[11] = c))
      } else ((t = v[8]), (i = v[9]), (o = v[10]), (c = v[11]))
      return (
        v[19] !== x
          ? ((u =
              null != x &&
              x.length > 0 &&
              (0, s.jsx)(E.X.Footer, {
                children: x.some(eZ)
                  ? (0, s.jsx)(d.A, {
                      id: "settings.codeNavigation.linkedServerCache",
                      defaultMessage: "Servers in a linked cache folder can\u2019t be deleted from Settings.",
                    })
                  : (0, s.jsx)(d.A, {
                      id: "settings.codeNavigation.deleteServerHelp",
                      defaultMessage: "Before deleting a server, close any older Codex app that uses it",
                    }),
              })),
            (v[19] = x),
            (v[20] = u))
          : (u = v[20]),
        v[21] !== C.data
          ? ((g =
              "cleanup-pending" === C.data &&
              (0, s.jsx)("div", {
                role: "status",
                children: (0, s.jsx)(S.W, {
                  layout: "settings-row",
                  children: (0, s.jsx)(d.A, {
                    id: "settings.codeNavigation.serverCleanupPending",
                    defaultMessage:
                      "Server removed. Codex will retry deleting any remaining files when you reopen Settings.",
                  }),
                }),
              })),
            (v[21] = C.data),
            (v[22] = g))
          : (g = v[22]),
        v[23] !== C.data || v[24] !== C.isError
          ? ((m =
              (C.isError || "failed" === C.data || "in-use" === C.data) &&
              (0, s.jsx)("div", {
                role: "alert",
                children: (0, s.jsx)(S.W, {
                  layout: "settings-row",
                  children:
                    "in-use" === C.data
                      ? (0, s.jsx)(d.A, {
                          id: "settings.codeNavigation.serverInUse",
                          defaultMessage: "Pause Code Navigation before deleting a server that\u2019s in use",
                        })
                      : (0, s.jsx)(d.A, {
                          id: "settings.codeNavigation.deleteFailed",
                          defaultMessage: "Couldn\u2019t delete the language server. Try again.",
                        }),
                }),
              })),
            (v[23] = C.data),
            (v[24] = C.isError),
            (v[25] = m))
          : (m = v[25]),
        v[26] !== t || v[27] !== i || v[28] !== o || v[29] !== c || v[30] !== u || v[31] !== g || v[32] !== m
          ? ((p = (0, s.jsxs)(s.Fragment, { children: [t, i, o, c, u, g, m] })),
            (v[26] = t),
            (v[27] = i),
            (v[28] = o),
            (v[29] = c),
            (v[30] = u),
            (v[31] = g),
            (v[32] = m),
            (v[33] = p))
          : (p = v[33]),
        p
      )
    }
    function eZ(e) {
      return !e.canRemove
    }
    function eH(e) {
      return (0, eq.P)(eV().removeInstalledServer(e))
    }
    function eV() {
      if (null == v.appServices.lsp) throw Error("Code Navigation is unavailable")
      return v.appServices.lsp
    }
    function eW(e) {
      let t,
        i,
        o,
        c,
        u,
        g,
        m,
        v,
        y,
        x,
        b,
        w,
        C = (0, r.c)(32),
        { service: M } = e,
        S = (0, a.gh)(h.u),
        A = (0, l.A)(),
        R = (0, f.iK)(eP.$Mt.enabled),
        k = (0, a.Ul)(f.dW),
        I = (0, f.iK)(eP.$Mt.pausedLanguages)
      ;(C[0] !== S || C[1] !== M
        ? ((t = (e) => {
            let [t, i] = e
            return "global" === t ? (0, f.gc)(S, eP.$Mt.enabled, i) : (0, eq.P)(M.setEnabled(t, i))
          }),
          (C[0] = S),
          (C[1] = M),
          (C[2] = t))
        : (t = C[2]),
        C[3] !== A || C[4] !== S
          ? ((i = () =>
              S.get(p.Id).danger(A.formatMessage(eO), {
                errorAnalytics: { toastId: "settings.codeNavigation.saveError" },
              })),
            (C[3] = A),
            (C[4] = S),
            (C[5] = i))
          : (i = C[5]),
        C[6] !== t || C[7] !== i
          ? ((o = { mutationFn: t, networkMode: "always", onError: i }), (C[6] = t), (C[7] = i), (C[8] = o))
          : (o = C[8]))
      let { mutate: P, isPending: E } = (0, n.n)(o),
        T = !k || E
      ;(C[9] !== T || C[10] !== R || C[11] !== P
        ? ((c = (0, s.jsx)(L.t, {
            children: (0, s.jsx)(_.GC, {
              entry: j.f_,
              control: (e) => (0, s.jsx)(N.l, { ...e, checked: R, disabled: T, onChange: (e) => P(["global", e]) }),
            }),
          })),
          (C[9] = T),
          (C[10] = R),
          (C[11] = P),
          (C[12] = c))
        : (c = C[12]),
        C[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsx)(d.A, { id: "settings.codeNavigation.projects", defaultMessage: "Projects" })), (C[13] = u))
          : (u = C[13]))
      let q = T || !R
      return (
        C[14] !== P ? ((g = (e, t) => P([{ type: "project", key: e }, t])), (C[14] = P), (C[15] = g)) : (g = C[15]),
        C[16] !== q || C[17] !== g
          ? ((m = (0, s.jsx)(eY, { label: u, children: (0, s.jsx)(eX, { disabled: q, onChange: g }) })),
            (C[16] = q),
            (C[17] = g),
            (C[18] = m))
          : (m = C[18]),
        C[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, s.jsx)(d.A, { id: "settings.codeNavigation.languages", defaultMessage: "Languages" })),
            (C[19] = v))
          : (v = C[19]),
        C[20] !== T || C[21] !== R || C[22] !== P || C[23] !== I
          ? ((y = j.Qh.map((e) => {
              let { languageId: t, entry: i } = e
              return (0, s.jsx)(
                _.GC,
                {
                  entry: i,
                  control: (e) =>
                    (0, s.jsx)(N.l, {
                      ...e,
                      checked: !I?.includes(t),
                      disabled: T || !R,
                      onChange: (e) => P([{ type: "language", languageId: t }, e]),
                    }),
                },
                t,
              )
            })),
            (C[20] = T),
            (C[21] = R),
            (C[22] = P),
            (C[23] = I),
            (C[24] = y))
          : (y = C[24]),
        C[25] !== y ? ((x = (0, s.jsx)(eY, { label: v, children: y })), (C[25] = y), (C[26] = x)) : (x = C[26]),
        C[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, s.jsx)(eY, {
              label: (0, s.jsx)(d.A, { id: "settings.codeNavigation.servers", defaultMessage: "Installed servers" }),
              children: (0, s.jsx)(eD, {}),
            })),
            (C[27] = b))
          : (b = C[27]),
        C[28] !== x || C[29] !== c || C[30] !== m
          ? ((w = (0, s.jsxs)(_.ek, { className: "flex flex-col gap-[inherit]", entry: j.dP, children: [c, m, x, b] })),
            (C[28] = x),
            (C[29] = c),
            (C[30] = m),
            (C[31] = w))
          : (w = C[31]),
        w
      )
    }
    function eX(e) {
      let t,
        i,
        n,
        o,
        l = (0, r.c)(20),
        { disabled: c, onChange: u } = e,
        g = (0, f.iK)(eP.$Mt.pausedProjects),
        m = [...(0, eT.kz)((0, a.Ul)(eU.Gv)), ...(0, eT.Rn)((0, a.Ul)(eU.n8), (0, a.Ul)(eU.Qh))],
        p = Map,
        v = m.map(eK)
      if (l[0] !== g || l[1] !== p || l[2] !== v) {
        let e
        for (let i of ((t = new p(v)), l[4] !== g ? ((e = g ?? []), (l[4] = g), (l[5] = e)) : (e = l[5]), e))
          if (!t.has(i)) {
            let [e, s, r] = i.split("\0")
            t.set(i, { label: r ?? s ?? i, description: e === eL.fI ? void 0 : e })
          }
        ;((l[0] = g), (l[1] = p), (l[2] = v), (l[3] = t))
      } else t = l[3]
      if (
        (l[6] !== t.size
          ? ((i =
              0 === t.size &&
              (0, s.jsx)(_.iu, {
                label: (0, s.jsx)(d.A, {
                  id: "settings.codeNavigation.noProjects",
                  defaultMessage: "No saved projects",
                }),
              })),
            (l[6] = t.size),
            (l[7] = i))
          : (i = l[7]),
        l[8] !== c || l[9] !== u || l[10] !== g || l[11] !== t)
      ) {
        let e
        ;(l[13] !== c || l[14] !== u || l[15] !== g
          ? ((e = (e) => {
              let [t, i] = e
              return (0, s.jsx)(
                eQ,
                {
                  label: i.label,
                  description: i.description,
                  checked: !g?.includes(t),
                  disabled: c,
                  onChange: (e) => u(t, e),
                },
                t,
              )
            }),
            (l[13] = c),
            (l[14] = u),
            (l[15] = g),
            (l[16] = e))
          : (e = l[16]),
          (n = Array.from(t, e)),
          (l[8] = c),
          (l[9] = u),
          (l[10] = g),
          (l[11] = t),
          (l[12] = n))
      } else n = l[12]
      return (
        l[17] !== i || l[18] !== n
          ? ((o = (0, s.jsxs)(s.Fragment, { children: [i, n] })), (l[17] = i), (l[18] = n), (l[19] = o))
          : (o = l[19]),
        o
      )
    }
    function eK(e) {
      return [
        (0, eP.Sik)(e.hostId ?? eL.fI, e.path ?? "", (0, eP.Np8)(e.projectId)),
        { label: e.label, description: (0, eE.$)(e) },
      ]
    }
    function eQ(e) {
      let t,
        i,
        n,
        a,
        o,
        l = (0, r.c)(10)
      return (
        l[0] !== e
          ? (({ label: i, description: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = n))
          : ((t = l[1]), (i = l[2]), (n = l[3])),
        l[4] !== n ? ((a = (e) => (0, s.jsx)(N.l, { ...e, ...n })), (l[4] = n), (l[5] = a)) : (a = l[5]),
        l[6] !== t || l[7] !== i || l[8] !== a
          ? ((o = (0, s.jsx)(q.ic, { label: i, description: t, control: a })),
            (l[6] = t),
            (l[7] = i),
            (l[8] = a),
            (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function eY(e) {
      let t,
        i,
        n,
        a = (0, r.c)(7),
        { label: o, children: l } = e
      return (
        a[0] !== o
          ? ((t = (0, s.jsx)(E.X.Header, { size: "large", title: (0, s.jsx)("h2", { children: o }) })),
            (a[0] = o),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== l ? ((i = (0, s.jsx)(L.t, { children: l })), (a[2] = l), (a[3] = i)) : (i = a[3]),
        a[4] !== t || a[5] !== i
          ? ((n = (0, s.jsxs)(E.X, { children: [t, i] })), (a[4] = t), (a[5] = i), (a[6] = n))
          : (n = a[6]),
        n
      )
    }
    var eJ = i("jpoq"),
      e0 = i("Rvvc"),
      e1 = i("Ot7V"),
      e2 = i("aQvR"),
      e3 = i("S5Ho")
    function e5() {
      let e,
        t,
        i,
        n,
        l,
        c,
        u,
        g = (0, r.c)(17)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, o.V)()), (g[0] = e)) : (e = g[0])
      let m = (0, f.iK)(e.githubConnection),
        p = null == m || m.connectorId === e0.qD,
        v = m?.connectorId ?? e0.qD,
        h = m?.accountLinkId
      g[1] !== v || g[2] !== h ? ((t = { connectorId: v, linkId: h }), (g[1] = v), (g[2] = h), (g[3] = t)) : (t = g[3])
      let y = !p
      g[4] !== y ? ((i = { enabled: y }), (g[4] = y), (g[5] = i)) : (i = g[5])
      let { data: x, isPending: b, isFetching: w, refetch: _ } = (0, a._U)(e3.ky, t, i),
        j = p ? e0.rh : x?.app_installation_url
      return (
        g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(d.A, {
              id: "settings.codeReview.githubRepositoryAccess.label",
              defaultMessage: "Repository access",
            })),
            (g[6] = n))
          : (n = g[6]),
        g[7] !== j || g[8] !== b
          ? ((l =
              null != j || b
                ? void 0
                : (0, s.jsx)(d.A, {
                    id: "settings.codeReview.githubRepositoryAccess.error",
                    defaultMessage: "Unable to load GitHub repository settings",
                  })),
            (g[7] = j),
            (g[8] = b),
            (g[9] = l))
          : (l = g[9]),
        g[10] !== j || g[11] !== w || g[12] !== _
          ? ((c =
              null != j
                ? (0, s.jsxs)(M.z, {
                    color: "outline",
                    href: j,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: (e) => {
                      ;(0, e1.PQ)({
                        event: e,
                        href: j,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      })
                    },
                    children: [
                      (0, s.jsx)(d.A, {
                        id: "settings.codeReview.githubRepositoryAccess.manage",
                        defaultMessage: "Manage on GitHub",
                      }),
                      (0, s.jsx)(e2.g, { size: 16, href: j, openTarget: "external-browser" }),
                    ],
                  })
                : (0, s.jsx)(M.$, {
                    color: "outline",
                    loading: w,
                    onClick: () => void _(),
                    children: (0, s.jsx)(d.A, {
                      id: "settings.codeReview.githubRepositoryAccess.retry",
                      defaultMessage: "Try again",
                    }),
                  })),
            (g[10] = j),
            (g[11] = w),
            (g[12] = _),
            (g[13] = c))
          : (c = g[13]),
        g[14] !== l || g[15] !== c
          ? ((u = (0, s.jsx)(q.ic, { className: "select-none", label: n, description: l, control: c })),
            (g[14] = l),
            (g[15] = c),
            (g[16] = u))
          : (u = g[16]),
        u
      )
    }
    var e4 = i("bqtn")
    function e8(e) {
      let t,
        i,
        n,
        o,
        c,
        u = (0, r.c)(23),
        { provider: g, defaultHostname: m, options: v, selectedKey: f, isLoading: y, isError: x, onSelect: w } = e,
        _ = (0, a.gh)(h.u),
        j = (0, l.A)(),
        [C, M] = (0, b.useState)(!1)
      if (u[0] !== v || u[1] !== f) {
        let e
        ;(u[3] !== f ? ((e = (e) => e.key === f), (u[3] = f), (u[4] = e)) : (e = u[4]),
          (t = v.find(e)),
          (u[0] = v),
          (u[1] = f),
          (u[2] = t))
      } else t = u[2]
      let S = t,
        A = y || C
      return (
        u[5] !== g
          ? ((i = (0, s.jsx)(d.A, {
              id: "settings.codeReview.instance.label",
              defaultMessage: "{provider} instance",
              values: { provider: g },
            })),
            (u[5] = g),
            (u[6] = i))
          : (i = u[6]),
        u[7] !== m || u[8] !== x || u[9] !== g
          ? ((n = x
              ? (0, s.jsx)(d.A, {
                  id: "settings.codeReview.instance.loadError",
                  defaultMessage: "Unable to load connected {provider} instances",
                  values: { provider: g },
                })
              : (0, s.jsx)(d.A, {
                  id: "settings.codeReview.instance.description",
                  defaultMessage: "Choose {hostname} or a connected instance",
                  values: { hostname: m },
                })),
            (u[7] = m),
            (u[8] = x),
            (u[9] = g),
            (u[10] = n))
          : (n = u[10]),
        u[11] !== A || u[12] !== j || u[13] !== w || u[14] !== v || u[15] !== g || u[16] !== _ || u[17] !== S
          ? ((o = (e) =>
              (0, s.jsx)(e4.Ab, {
                disabled: A,
                triggerButton: (0, s.jsx)(U.vg, {
                  ...e,
                  disabled: A,
                  children:
                    null == S
                      ? (0, s.jsx)(d.A, {
                          id: "settings.codeReview.instance.unavailable",
                          defaultMessage: "Selected connection unavailable",
                        })
                      : (0, s.jsx)(e6, { hostname: S.hostname, name: S.name }),
                }),
                children: v.map((e) =>
                  (0, s.jsx)(
                    e4.ms.Item,
                    {
                      onSelect: () => {
                        ;(M(!0),
                          w(e.value)
                            .catch(() => {
                              _.get(p.Id).danger(
                                j.formatMessage(
                                  {
                                    id: "settings.codeReview.instance.saveError",
                                    defaultMessage: "Unable to save {provider} instance",
                                  },
                                  { provider: g },
                                ),
                                { errorAnalytics: { toastId: "settings.codeReview.instance.saveError" } },
                              )
                            })
                            .finally(() => M(!1)))
                      },
                      children: (0, s.jsx)(e6, { hostname: e.hostname, name: e.name }),
                    },
                    e.key,
                  ),
                ),
              })),
            (u[11] = A),
            (u[12] = j),
            (u[13] = w),
            (u[14] = v),
            (u[15] = g),
            (u[16] = _),
            (u[17] = S),
            (u[18] = o))
          : (o = u[18]),
        u[19] !== i || u[20] !== n || u[21] !== o
          ? ((c = (0, s.jsx)(q.ic, { label: i, description: n, control: o })),
            (u[19] = i),
            (u[20] = n),
            (u[21] = o),
            (u[22] = c))
          : (c = u[22]),
        c
      )
    }
    function e6(e) {
      let t,
        i = (0, r.c)(3),
        { hostname: n, name: a } = e
      return (
        i[0] !== n || i[1] !== a
          ? ((t = a
              ? (0, s.jsx)(d.A, {
                  id: "settings.codeReview.instance.option",
                  defaultMessage: "{hostname} \u2014 {name}",
                  values: { hostname: n, name: a },
                })
              : (0, s.jsx)(s.Fragment, { children: n })),
            (i[0] = n),
            (i[1] = a),
            (i[2] = t))
          : (t = i[2]),
        t
      )
    }
    function e7() {
      let e,
        t,
        i,
        n,
        l,
        d,
        c,
        u = (0, r.c)(16),
        g = (0, a.gh)(h.u)
      u[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, o.V)()), (u[0] = e)) : (e = u[0])
      let m = e.githubConnection,
        p = (0, f.iK)(m),
        v = (0, f.xV)(),
        { data: y, isPending: x, isError: b } = (0, a.Ul)(eJ.Py)
      u[1] !== p ? ((t = te(p)), (u[1] = p), (u[2] = t)) : (t = u[2])
      let w = v || x
      return (
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { key: "github.com", hostname: "github.com", name: "", value: null }), (u[3] = i))
          : (i = u[3]),
        u[4] !== y ? ((n = y ?? []), (u[4] = y), (u[5] = n)) : (n = u[5]),
        u[6] !== n ? ((l = [i, ...n.map(e9)]), (u[6] = n), (u[7] = l)) : (l = u[7]),
        u[8] !== g ? ((d = (e) => (0, f.gc)(g, m, e)), (u[8] = g), (u[9] = d)) : (d = u[9]),
        u[10] !== b || u[11] !== t || u[12] !== w || u[13] !== l || u[14] !== d
          ? ((c = (0, s.jsx)(e8, {
              provider: "GitHub",
              defaultHostname: "github.com",
              selectedKey: t,
              isLoading: w,
              isError: b,
              options: l,
              onSelect: d,
            })),
            (u[10] = b),
            (u[11] = t),
            (u[12] = w),
            (u[13] = l),
            (u[14] = d),
            (u[15] = c))
          : (c = u[15]),
        c
      )
    }
    function e9(e) {
      let t = { hostname: e.hostname, ...e.connection }
      return { key: te(t), hostname: e.hostname, name: e.name, value: t }
    }
    function te(e) {
      return null == e ? "github.com" : JSON.stringify([e.hostname, e.connectorId, e.accountLinkId])
    }
    var tt = i("T0Rc"),
      ti = i("temr"),
      ts = i("UOa8"),
      tr = i("h4qV")
    function tn(e) {
      return { key: e.connectorId, hostname: e.hostname, name: e.name, value: e.connectorId }
    }
    let ta = {
      github: function () {
        let e,
          t = (0, r.c)(2),
          i = (0, er.Zj)("223049465")
        return (
          t[0] !== i
            ? ((e = i ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(e7, {}), (0, s.jsx)(e5, {})] }) : null),
              (t[0] = i),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      },
      gitlab: function () {
        let e,
          t,
          i,
          n,
          l,
          d,
          c,
          u = (0, r.c)(17),
          g = (0, a.gh)(h.u),
          { accountId: m, userId: p } = (0, ts.As)()
        u[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, o.V)()), (u[0] = e)) : (e = u[0])
        let v = e.gitlabConnectorId,
          y = (0, f.iK)(v) ?? ti.MF,
          x = (0, f.xV)()
        u[1] !== m || u[2] !== p
          ? ((t = (0, tr.Kv)({ accountId: m, userId: p })), (u[1] = m), (u[2] = p), (u[3] = t))
          : (t = u[3])
        let { data: b, isPending: w, isError: _ } = (0, tt.I)(t),
          j = x || w
        return (
          u[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { key: ti.MF, hostname: "gitlab.com", name: "", value: null }), (u[4] = i))
            : (i = u[4]),
          u[5] !== b ? ((n = b ?? []), (u[5] = b), (u[6] = n)) : (n = u[6]),
          u[7] !== n ? ((l = [i, ...n.map(tn)]), (u[7] = n), (u[8] = l)) : (l = u[8]),
          u[9] !== g ? ((d = (e) => (0, f.gc)(g, v, e)), (u[9] = g), (u[10] = d)) : (d = u[10]),
          u[11] !== _ || u[12] !== y || u[13] !== j || u[14] !== l || u[15] !== d
            ? ((c = (0, s.jsx)(e8, {
                provider: "GitLab",
                defaultHostname: "gitlab.com",
                selectedKey: y,
                isLoading: j,
                isError: _,
                options: l,
                onSelect: d,
              })),
              (u[11] = _),
              (u[12] = y),
              (u[13] = j),
              (u[14] = l),
              (u[15] = d),
              (u[16] = c))
            : (c = u[16]),
          c
        )
      },
    }
    function to() {
      let e,
        t = (0, r.c)(2),
        i = ta[(0, a.Ul)(g.XC)]
      return (t[0] !== i ? ((e = null == i ? null : (0, s.jsx)(i, {})), (t[0] = i), (t[1] = e)) : (e = t[1]), e)
    }
    var tl = i("i6yo")
    function td() {
      let e,
        t,
        i,
        o,
        d,
        c,
        u = (0, r.c)(18),
        m = (0, a.gh)(h.u),
        v = (0, l.A)(),
        y = (0, a.Ul)(g.XC),
        b = (0, a.Ul)(tl.l),
        w = (0, f.xV)()
      ;(u[0] !== m ? ((e = (e) => (0, g.vC)(m, e)), (u[0] = m), (u[1] = e)) : (e = u[1]),
        u[2] !== v || u[3] !== m
          ? ((t = () => {
              m.get(p.Id).danger(
                v.formatMessage({
                  id: "settings.codeReview.provider.saveError",
                  defaultMessage: "Unable to save review provider",
                }),
                { errorAnalytics: { toastId: "settings.codeReview.provider.saveError" } },
              )
            }),
            (u[2] = v),
            (u[3] = m),
            (u[4] = t))
          : (t = u[4]),
        u[5] !== e || u[6] !== t
          ? ((i = { mutationFn: e, networkMode: "always", onError: t }), (u[5] = e), (u[6] = t), (u[7] = i))
          : (i = u[7]))
      let { mutate: _, isPending: j } = (0, n.n)(i)
      u[8] !== b ? ((o = (0, x.fG)(b)), (u[8] = b), (u[9] = o)) : (o = u[9])
      let C = w || j
      return (
        u[10] !== _ || u[11] !== y
          ? ((d = (e) => {
              e !== y && _(e)
            }),
            (u[10] = _),
            (u[11] = y),
            (u[12] = d))
          : (d = u[12]),
        u[13] !== y || u[14] !== o || u[15] !== C || u[16] !== d
          ? ((c = (0, s.jsx)(F.CA, {
              entry: x.Mv.provider,
              anchored: !0,
              value: y,
              options: o,
              disabled: C,
              renderLabel: tc,
              onChange: d,
            })),
            (u[13] = y),
            (u[14] = o),
            (u[15] = C),
            (u[16] = d),
            (u[17] = c))
          : (c = u[17]),
        c
      )
    }
    function tc(e) {
      return (0, s.jsx)(d.A, { ...x.gt[e] })
    }
    let tu = (0, o.V)(),
      tg = (0, a.un)(h.u, ({ get: e }) => (0, c.$)(e))
    function tm() {
      let e,
        t,
        i,
        n = (0, r.c)(4),
        a = (0, f.iK)(tu.gitHostingProvider)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(tp, {})),
            (t = v.appServices?.lsp && (0, s.jsx)(eW, { service: v.appServices.lsp })),
            (n[0] = e),
            (n[1] = t))
          : ((e = n[0]), (t = n[1])),
        n[2] !== a
          ? ((i = (0, s.jsx)(eA, { provider: a, appPreferences: e, codeNavigation: t })), (n[2] = a), (n[3] = i))
          : (i = n[3]),
        i
      )
    }
    function tp() {
      let e,
        t,
        i,
        o,
        c,
        v,
        b,
        w,
        j,
        C,
        M,
        S,
        A,
        R,
        N,
        k,
        I,
        P = (0, r.c)(35),
        T = (0, a.gh)(h.u),
        q = (0, l.A)(),
        U = (0, a.Ul)(tg),
        O = (0, a.Ul)(g.XC),
        z = (0, a.Ul)(f.dW)
      P[0] !== O ? ((e = { page: "settings", provider: O, surface: "settings" }), (P[0] = O), (P[1] = e)) : (e = P[1])
      let $ = (0, m.C)(e, z)
      ;(P[2] !== T ? ((t = (e) => (0, f.gc)(T, tu.githubLinkTarget, e)), (P[2] = T), (P[3] = t)) : (t = P[3]),
        P[4] !== q || P[5] !== T
          ? ((i = () =>
              T.get(p.Id).danger(
                q.formatMessage({
                  id: "settings.codeReview.githubLinks.saveError",
                  defaultMessage: "Unable to save where review links open",
                }),
                { errorAnalytics: { toastId: "settings.codeReview.githubLinks.saveError" } },
              )),
            (P[4] = q),
            (P[5] = T),
            (P[6] = i))
          : (i = P[6]),
        P[7] !== t || P[8] !== i
          ? ((o = { mutationFn: t, networkMode: "always", onError: i }), (P[7] = t), (P[8] = i), (P[9] = o))
          : (o = P[9]))
      let B = (0, n.n)(o)
      return (
        P[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)(E.X.Header, {
              title: (0, s.jsx)(d.A, {
                id: "settings.codeReview.appPreferences.title",
                defaultMessage: "App preferences",
              }),
            })),
            (P[10] = c))
          : (c = P[10]),
        P[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = ["code-review-tab", "github"]), (P[11] = v))
          : (v = P[11]),
        P[12] !== B ? ((b = (e) => B.mutate(e)), (P[12] = B), (P[13] = b)) : (b = P[13]),
        P[14] !== b || P[15] !== U || P[16] !== B.isPending
          ? ((w = (0, s.jsx)(F.CA, {
              entry: x.Mv.linkTarget,
              anchored: !0,
              value: U,
              options: v,
              disabled: B.isPending,
              onChange: b,
              renderLabel: tv,
            })),
            (P[14] = b),
            (P[15] = U),
            (P[16] = B.isPending),
            (P[17] = w))
          : (w = P[17]),
        P[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, s.jsx)(td, {})), (C = (0, s.jsx)(to, {})), (P[18] = j), (P[19] = C))
          : ((j = P[18]), (C = P[19])),
        P[20] !== w
          ? ((M = (0, s.jsxs)(E.X, {
              children: [c, (0, s.jsx)(E.X.Content, { children: (0, s.jsxs)(L.t, { children: [w, j, C] }) })],
            })),
            (P[20] = w),
            (P[21] = M))
          : (M = P[21]),
        P[22] !== q ? ((S = q.formatMessage(u._.title)), (P[22] = q), (P[23] = S)) : (S = P[23]),
        P[24] !== q ? ((A = q.formatMessage(u._.placeholder)), (P[24] = q), (P[25] = A)) : (A = P[25]),
        P[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, s.jsx)(_.Ct, { title: x.Mv.instructions.title })), (P[26] = R))
          : (R = P[26]),
        P[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, s.jsx)(d.A, { ...u._.description })), (P[27] = N))
          : (N = P[27]),
        P[28] !== S || P[29] !== A
          ? ((k = (0, s.jsx)(_.ek, {
              entry: x.Mv.instructions,
              children: (0, s.jsx)(y.v, {
                ariaLabel: S,
                placeholder: A,
                rows: 10,
                setting: tu.localReviewInstructions,
                title: R,
                titleSize: "base",
                subtitle: N,
              }),
            })),
            (P[28] = S),
            (P[29] = A),
            (P[30] = k))
          : (k = P[30]),
        P[31] !== $ || P[32] !== M || P[33] !== k
          ? ((I = (0, s.jsxs)("div", { className: "contents", ...$, children: [M, k] })),
            (P[31] = $),
            (P[32] = M),
            (P[33] = k),
            (P[34] = I))
          : (I = P[34]),
        I
      )
    }
    function tv(e) {
      return (0, s.jsx)(d.A, { ...x.q$[e] })
    }
  },
  Bt0y(e, t, i) {
    i.d(t, { C: () => c })
    var s = i("QosV"),
      r = i("qmMi"),
      n = i("zd8w"),
      a = i("RU3e"),
      o = i("OWtl")
    class l {
      emit
      context = null
      visitId = null
      focused = !1
      lastInput = 0
      sampledAt = 0
      activeTimeMs = 0
      constructor(e) {
        this.emit = e
      }
      update(e, t, i) {
        this.accrue(i)
        let s =
          e?.surface !== this.context?.surface ||
          e?.page !== this.context?.page ||
          e?.provider !== this.context?.provider
        ;((s || !t) && this.flush(i),
          null == e
            ? ((this.visitId = null), (this.activeTimeMs = 0))
            : (null == this.visitId &&
                ((this.visitId = crypto.randomUUID()),
                this.emit({ type: "viewed", ...e, visitId: this.visitId }),
                (this.lastInput = i)),
              s && this.emit({ type: "interaction", ...e, action: "page_viewed" }),
              t && !this.focused && (this.lastInput = i)),
          (this.context = e),
          (this.focused = t && null != e),
          (this.sampledAt = i))
      }
      input(e) {
        ;(this.accrue(e), this.focused && (this.lastInput = e))
      }
      flush(e) {
        this.accrue(e)
        let t = Math.floor(this.activeTimeMs)
        null != this.context &&
          null != this.visitId &&
          t > 0 &&
          (this.emit({ type: "engagement", ...this.context, visitId: this.visitId, activeTimeMs: t }),
          (this.activeTimeMs -= t))
      }
      accrue(e) {
        ;(this.focused &&
          null != this.context &&
          (this.activeTimeMs += Math.max(0, Math.min(e, this.lastInput + 6e4) - this.sampledAt)),
          (this.sampledAt = e))
      }
    }
    var d = i("SAl8")
    function c(e, t) {
      let i,
        c,
        u,
        g,
        m,
        p,
        v,
        h = (0, s.c)(25),
        { page: f, provider: y, surface: x } = e,
        b = (0, r.gh)(o.u)
      h[0] !== b ? ((i = () => new l((e) => (0, d.X)(b, e))), (h[0] = b), (h[1] = i)) : (i = h[1])
      let [w] = (0, n.useState)(i),
        _ = (0, n.useRef)(!1)
      h[2] !== f || h[3] !== y || h[4] !== b || h[5] !== x || h[6] !== w
        ? ((c = () => {
            if (!_.current) return !1
            let e = document.hidden ? null : { page: f, provider: y, surface: x },
              t = !0 === b.get(a.$O)
            return (w.update(e, t, performance.now()), null != e && t)
          }),
          (h[2] = f),
          (h[3] = y),
          (h[4] = b),
          (h[5] = x),
          (h[6] = w),
          (h[7] = c))
        : (c = h[7])
      let j = (0, n.useEffectEvent)(c),
        C = (void 0 === t || t) && null != y
      if (
        (h[8] !== b || h[9] !== w || h[10] !== j || h[11] !== C
          ? ((u = () => {
              let e
              if (!C) return
              let t = () => {
                  void 0 !== e && (window.clearInterval(e), (e = void 0))
                },
                i = () => {
                  j() ? void 0 === e && (e = window.setInterval(() => w.flush(performance.now()), 3e4)) : t()
                },
                s = b.watch((e) => {
                  let { get: t } = e
                  ;(t(a.$O), i())
                }),
                r = !1
              queueMicrotask(() => {
                r || ((_.current = !0), i())
              })
              let n = () => {
                ;(w.update(null, !1, performance.now()), t())
              }
              return (
                window.addEventListener("pagehide", n),
                window.addEventListener("pageshow", i),
                document.addEventListener("visibilitychange", i),
                () => {
                  ;((r = !0),
                    (_.current = !1),
                    s(),
                    n(),
                    window.removeEventListener("pagehide", n),
                    window.removeEventListener("pageshow", i),
                    document.removeEventListener("visibilitychange", i))
                }
              )
            }),
            (h[8] = b),
            (h[9] = w),
            (h[10] = j),
            (h[11] = C),
            (h[12] = u))
          : (u = h[12]),
        h[13] !== b || h[14] !== w || h[15] !== C
          ? ((g = [C, b, w]), (h[13] = b), (h[14] = w), (h[15] = C), (h[16] = g))
          : (g = h[16]),
        (0, n.useEffect)(u, g),
        h[17] !== j
          ? ((m = () => {
              j()
            }),
            (h[17] = j),
            (h[18] = m))
          : (m = h[18]),
        h[19] !== f || h[20] !== y || h[21] !== x
          ? ((p = [f, y, x]), (h[19] = f), (h[20] = y), (h[21] = x), (h[22] = p))
          : (p = h[22]),
        (0, n.useEffect)(m, p),
        h[23] !== w)
      ) {
        let e = (e) => {
          e.nativeEvent.isTrusted && w.input(performance.now())
        }
        ;((v = { onPointerDownCapture: e, onPointerMoveCapture: e, onWheelCapture: e, onKeyDownCapture: e }),
          (h[23] = w),
          (h[24] = v))
      } else v = h[24]
      return v
    }
  },
  E44Z(e, t, i) {
    i.d(
      t,
      {},
      {
        $: function (e) {
          return "remote" === e.projectKind && e.hostDisplayName
            ? `${e.hostDisplayName}: ${e.path}`
            : "local" === e.projectKind
              ? (e.path ?? e.rootPaths?.join(", "))
              : e.path
        },
      },
    )
  },
  BrP7(e, t, i) {
    i.d(t, { t: () => _ })
    var s = i("ABep"),
      r = i("QosV"),
      n = i("i1uX"),
      a = i("on57"),
      o = i("IjbW"),
      l = i("K4Cx"),
      d = i("zd8w"),
      c = i("UxN3"),
      u = i("SziE"),
      g = i("hZax"),
      m = i("Sm6l")
    let p = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function v(e) {
      let t,
        i,
        n,
        o,
        l,
        d,
        c,
        u,
        g,
        v,
        h,
        f,
        y = (0, r.c)(26)
      y[0] !== e
        ? (({ children: t, icon: i, size: o, surface: l, labelVisibility: d, ...n } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = i),
          (y[3] = n),
          (y[4] = o),
          (y[5] = l),
          (y[6] = d))
        : ((t = y[1]), (i = y[2]), (n = y[3]), (o = y[4]), (l = y[5]), (d = y[6]))
      let x = void 0 === l ? "elevated" : l,
        b = void 0 === d ? "visible" : d,
        w = "large" === o && "visible" === b && "pb-1.5"
      y[7] !== w ? ((c = (0, a.A)("group/labeled-icon flex-col gap-1.5", w)), (y[7] = w), (y[8] = c)) : (c = y[8])
      let _ = "elevated" === x ? "border shadow-xs" : "border-hairline",
        j = p[o]
      ;(y[9] !== _ || y[10] !== j.icon
        ? ((u = (0, a.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            _,
            j.icon,
          )),
          (y[9] = _),
          (y[10] = j.icon),
          (y[11] = u))
        : (u = y[11]),
        y[12] !== i || y[13] !== u
          ? ((g = (0, s.jsx)("span", { className: u, children: i })), (y[12] = i), (y[13] = u), (y[14] = g))
          : (g = y[14]))
      let C = "hidden" === b ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        M = "visible" === b && p[o].caption
      return (
        y[15] !== M || y[16] !== C ? ((v = (0, a.A)(C, M)), (y[15] = M), (y[16] = C), (y[17] = v)) : (v = y[17]),
        y[18] !== t || y[19] !== v
          ? ((h = (0, s.jsx)("span", { className: v, children: t })), (y[18] = t), (y[19] = v), (y[20] = h))
          : (h = y[20]),
        y[21] !== n || y[22] !== h || y[23] !== c || y[24] !== g
          ? ((f = (0, s.jsxs)(m.$, {
              ...n,
              className: c,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [g, h],
            })),
            (y[21] = n),
            (y[22] = h),
            (y[23] = c),
            (y[24] = g),
            (y[25] = f))
          : (f = y[25]),
        f
      )
    }
    let h = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      f = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${h} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      y = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      x = {
        ...f,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${y} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      b = {
        ...f,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      w = {
        text: {
          ...f,
          listClassName: "flex min-w-0 items-center justify-center gap-5",
          tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
          selectedClassName: "text-default font-semibold",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:text-default",
        },
        segmented: {
          closeButtonClassName: "px-1",
          itemClassName: "flex-1",
          listClassName: "border-default flex items-center rounded-lg border",
          segmentedEdges: !0,
          selectedClassName: "bg-text-emphasis/25 text-default",
          selectionIndicator: null,
          tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:bg-text-emphasis/5",
        },
        toolbar: f,
        settings: { ...f, tabButtonClassName: `${h} button-toolbar` },
        search: {
          ...f,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...f,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...f,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${f.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...f,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...f, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: x,
        sectionFilter: {
          ...x,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${y} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${y} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...f,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...f,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...f,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: b,
        segmentedPillMuted: {
          ...b,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...f,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...f, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
        underline: {
          closeButtonClassName: "px-1",
          itemClassName: "shrink-0 pb-2",
          listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
          segmentedEdges: !1,
          selectedClassName: "text-default",
          selectionIndicator: "underline",
          tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:text-default",
        },
      }
    function _(e) {
      let t,
        i = (0, r.c)(39),
        {
          tabs: o,
          selectedKey: l,
          onSelect: p,
          onTabClick: h,
          onTabHover: f,
          className: y,
          fill: x,
          scrollable: b,
          tabListRef: _,
          variant: M,
          ariaLabel: S,
          ariaLabelledBy: A,
          activationMode: R,
          animateSelection: N,
          dividerBefore: k,
        } = e,
        I = void 0 !== x && x,
        P = void 0 !== b && b,
        E = void 0 === M ? "segmented" : M,
        T = void 0 === R ? "automatic" : R,
        q = (0, d.useId)(),
        U = w[E],
        L = "inset" === E || "choice" === E,
        O = (0, g.Zj)(!L && "icon" !== E && "text-secondary" === U.unselectedTextClassName && "1244723012"),
        F = void 0 !== N && N && ("segmentedPill" === E || "segmentedPillMuted" === E),
        z = F ? "text-default font-medium" : U.selectedClassName
      if (
        i[0] !== T ||
        i[1] !== F ||
        i[2] !== S ||
        i[3] !== A ||
        i[4] !== y ||
        i[5] !== k ||
        i[6] !== I ||
        i[7] !== p ||
        i[8] !== h ||
        i[9] !== f ||
        i[10] !== U.closeButtonClassName ||
        i[11] !== U.itemClassName ||
        i[12] !== U.listClassName ||
        i[13] !== U.segmentedEdges ||
        i[14] !== U.selectionIndicator ||
        i[15] !== U.tabButtonClassName ||
        i[16] !== U.textSizeClassName ||
        i[17] !== U.unselectedClassName ||
        i[18] !== U.unselectedTextClassName ||
        i[19] !== P ||
        i[20] !== z ||
        i[21] !== l ||
        i[22] !== q ||
        i[23] !== _ ||
        i[24] !== o ||
        i[25] !== O ||
        i[26] !== L ||
        i[27] !== E
      ) {
        let e,
          r,
          d = (0, a.A)(O ? "text-tertiary" : U.unselectedTextClassName, U.unselectedClassName),
          g = L ? m.$ : "button",
          x = I && "w-full",
          b = P && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(i[29] !== y || i[30] !== U.listClassName || i[31] !== x || i[32] !== b
          ? ((e = (0, a.A)(U.listClassName, x, b, y)),
            (i[29] = y),
            (i[30] = U.listClassName),
            (i[31] = x),
            (i[32] = b),
            (i[33] = e))
          : (e = i[33]),
          i[34] !== T || i[35] !== p || i[36] !== P || i[37] !== o
            ? ((r = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let i = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  s = i.findIndex((t) => t === e.target)
                if (s < 0 || 0 === i.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let r = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? i.length - 1
                      : (s + (e.key === (r ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + i.length) % i.length),
                  i[t]?.focus(),
                  P && i[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let n = o[t]
                null != n && "automatic" === T && p(n.key, e.timeStamp)
              }),
              (i[34] = T),
              (i[35] = p),
              (i[36] = P),
              (i[37] = o),
              (i[38] = r))
            : (r = i[38]),
          (t = (0, s.jsx)("div", {
            ref: _,
            role: "tablist",
            tabIndex: -1,
            "aria-label": S,
            "aria-labelledby": A,
            className: e,
            onWheel: P ? j : void 0,
            onKeyDown: r,
            children: o.map((e, t) => {
              let i,
                r,
                m = e.key === l,
                y = m ? z : d,
                x = 0 === t,
                b = t === o.length - 1,
                w = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": m,
                  tabIndex: m ? 0 : -1,
                  onPointerEnter: null == f ? void 0 : () => f(e.key),
                  onClick: (t) => {
                    ;((m && "manual" !== T) || p(e.key, t.timeStamp), h?.(e.key))
                  },
                }
              return (
                "inset" === E
                  ? ((i = m ? "segmentedInsetSelected" : "ghost"), (r = "compact"))
                  : "choice" === E && ((i = m ? "choiceSelected" : "outlineGhost"), (r = "dialogAction")),
                (0, s.jsxs)(
                  "div",
                  {
                    className: (0, a.A)(
                      "relative flex min-w-0 items-center",
                      U.itemClassName,
                      I && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      x || e.key !== k
                        ? null
                        : (0, s.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === E
                        ? (0, s.jsx)(v, { ...w, icon: e.icon, size: "large", children: e.name })
                        : (0, s.jsxs)(g, {
                            ...w,
                            className: (0, a.A)(
                              I && "min-w-0 flex-1 justify-center",
                              F && "relative isolate",
                              !L && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                U.textSizeClassName ?? "text-sm",
                                U.tabButtonClassName,
                                P && "ring-inset",
                                U.segmentedEdges && x && "rounded-l-md",
                                U.segmentedEdges && b && "rounded-r-md",
                                "browse" === E && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", m && "ring-1 ring-border-strong"]
                                  : y,
                              ],
                            ),
                            color: i,
                            radius: "choice" === E ? "full" : void 0,
                            size: r,
                            children: [
                              F && m ? (0, s.jsx)(C, { layoutId: q }) : null,
                              null != e.icon
                                ? (0, s.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              I ? (0, s.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === U.selectionIndicator && m
                        ? (0, s.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, s.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, a.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              U.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, s.jsx)(c.bF, {
                              "aria-hidden": !1,
                              asset16: n.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      U.segmentedEdges && !b
                        ? (0, s.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (i[0] = T),
          (i[1] = F),
          (i[2] = S),
          (i[3] = A),
          (i[4] = y),
          (i[5] = k),
          (i[6] = I),
          (i[7] = p),
          (i[8] = h),
          (i[9] = f),
          (i[10] = U.closeButtonClassName),
          (i[11] = U.itemClassName),
          (i[12] = U.listClassName),
          (i[13] = U.segmentedEdges),
          (i[14] = U.selectionIndicator),
          (i[15] = U.tabButtonClassName),
          (i[16] = U.textSizeClassName),
          (i[17] = U.unselectedClassName),
          (i[18] = U.unselectedTextClassName),
          (i[19] = P),
          (i[20] = z),
          (i[21] = l),
          (i[22] = q),
          (i[23] = _),
          (i[24] = o),
          (i[25] = O),
          (i[26] = L),
          (i[27] = E),
          (i[28] = t))
      } else t = i[28]
      return t
    }
    function j(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function C(e) {
      let t,
        i,
        n = (0, r.c)(5),
        { layoutId: a } = e,
        d = 0.25 * !(0, o.I)()
      return (
        n[0] !== d ? ((t = { type: "spring", duration: d, bounce: 0 }), (n[0] = d), (n[1] = t)) : (t = n[1]),
        n[2] !== a || n[3] !== t
          ? ((i = (0, s.jsx)(l.P.span, {
              "aria-hidden": !0,
              layoutId: a,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (n[2] = a),
            (n[3] = t),
            (n[4] = i))
          : (i = n[4]),
        i
      )
    }
  },
  uSFS(e, t, i) {
    var s = i("qmMi"),
      r = i("Qgfj"),
      n = i("SPnB"),
      a = i("OAko"),
      o = i("smwl"),
      l = i("WXto"),
      d = i("NLdj"),
      c = i("OWtl"),
      u = i("OMIV"),
      g = i("O666"),
      m = i("UR81")
    let p = (0, r.YK)({
        manageHelp: {
          id: "settings.usage.credit.balance.autoReloadLabel.help",
          defaultMessage: "Automatically buy more credits when your balance drops below the minimum you set",
        },
        manage: { id: "settings.usage.credit.balance.autoReloadLabel", defaultMessage: "Automatic reload" },
        disable: { id: "settings.usage.credit.balance.automaticReload", defaultMessage: "Automatic reload" },
      }),
      v = { section: "usage", id: "usage-automatic-reload" },
      h = { ...v, title: p.manage, description: p.manageHelp },
      f = { ...v, title: p.disable },
      y = "702739930",
      x = (0, s.vU)(c.u, (e) => (0, o.Vc)(e)),
      b = (0, s.vU)(c.u, (e) => (0, o.bB)({ ...e, authMethod: "chatgpt" })),
      w = (0, s.un)(c.u, ({ get: e }) => {
        let { authMethod: t, authLoading: i, userId: s, authenticatedAccountId: r } = e(n.PO)
        if ("chatgpt" !== t || i || null == s || null == r) return null
        let o = (0, a.F7)(e(a.LI).data)
        if (o?.id !== r) return null
        let d = o.plan_type
        if ((0, m.Hw)(d)) return null
        let c = "personal" === o.structure,
          g = e(u.RS),
          { hasPlanCreditAccess: p } = (0, l.MQ)({ authMethod: t, plan: d, statsigClient: g ? null : e(u.M9) }),
          v = (0, l.E2)({ identityReady: !0, isStatsigLoading: g, isCurrentPersonalAccount: c, hasPlanCreditAccess: p })
            ? e(l.fQ, { accountId: r, userId: s }, { enabled: !1 }).data
            : null
        return {
          accountId: r,
          userId: s,
          canManageCreditSettings: p || v?.metadata?.enrollment_step === "enrolled",
          isCurrentPersonalAccount: c,
        }
      }),
      _ = (0, s.un)(c.u, ({ get: e }) => {
        let t = e(w)
        if (null == t) return null
        let { accountId: i, userId: s, canManageCreditSettings: r, isCurrentPersonalAccount: n } = t
        if (!r) {
          if (!n) return null
          let { data: t } = e(b, { accountId: i, userId: s, includePaymentMethod: !1 }, { enabled: !1 })
          return t?.isEnabled ? f : null
        }
        let { data: a } = e(x, i, { enabled: !1 }),
          o = (a?.payment_methods.length ?? 0) > 0,
          l =
            j({ canManageCreditSettings: r, hasPaymentMethodsInventory: null != a, hasSavedPaymentMethod: o }) &&
            e(g.H$, { layer: y, parameter: "enabled", disableExposureLog: !0 }),
          d = { canManageCreditSettings: r, canAddFirstPaymentMethod: l, hasSavedPaymentMethod: o },
          c = C(d) ? e(b, { accountId: i, userId: s, includePaymentMethod: !0 }, { enabled: !1 }).data : void 0
        return null != c && M(d, c) ? h : null
      })
    function j({ canManageCreditSettings: e, hasPaymentMethodsInventory: t, hasSavedPaymentMethod: i }) {
      return !1
    }
    function C({ canManageCreditSettings: e, canAddFirstPaymentMethod: t, hasSavedPaymentMethod: i }) {
      return e && !0
    }
    function M({ canManageCreditSettings: e, canAddFirstPaymentMethod: t, hasSavedPaymentMethod: i }, s) {
      return e && (i || t || (s?.isEnabled === !0 && (0, d.Zu)(s.autoReloadCreditDiscountPolicy)))
    }
    i.d(t, {}, { Cn: w, Ql: h, _K: M, bF: C, lb: _, pZ: f, pl: y, wO: j })
  },
  WXto(e, t, i) {
    var s = i("QosV"),
      r = i("qmMi"),
      n = i("zd8w"),
      a = i("UOa8"),
      o = i("YitN"),
      l = i("Kwur"),
      d = i("OAko"),
      c = i("laUo"),
      u = i("smwl"),
      g = i("jdiu"),
      m = i("eFxf"),
      p = i("OWtl"),
      v = i("hZax"),
      h = i("UR81"),
      f = i("LjYy")
    let y = "3909937021",
      x = "1014047933",
      b = (0, r.vU)(p.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => l.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      w = (0, r.vU)(p.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          l.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function _({ authMethod: e, plan: t, statsigClient: i }) {
      let s = "chatgpt" === e && M(t) && null != i && (0, m.fV)(i, t)
      return { hasPlanCreditAccess: "chatgpt" === e && ((0, c.IH)(t) || s), isFreeOrGoCreditPurchaseEnabled: s }
    }
    function j({ identityReady: e, isStatsigLoading: t, isCurrentPersonalAccount: i, hasPlanCreditAccess: s }) {
      return !1
    }
    function C({
      authMethod: e,
      hasCreditBalance: t = !1,
      hasEnabledAutoReload: i = !1,
      isPersonalAccount: s = !1,
      plan: r,
      isFreeOrGoCreditPurchaseEnabled: n = !1,
      hasStudentCreditAccess: a = !1,
      isEnterpriseUsageSettingsEnabled: o = !1,
      isConsumerUsageAnalyticsEnabled: l = !1,
      isBusinessUsageDashboardEnabled: d = !1,
      canPurchaseBusinessCredits: u = !1,
      isBusinessWorkspaceOwner: g = !1,
    }) {
      let m = "chatgpt" === e,
        p = m && M(r) && n,
        v = m && ((0, c.IH)(r) || p || (s && a)),
        f = M(r),
        y = (0, h.uz)(r),
        x = v || (m && (0, h.Hw)(r) && (u || g)) || (m && ((f && t) || (s && i)))
      return {
        canManageCreditSettings: v,
        canViewCreditSettings: x,
        isUsageSettingsVisible:
          x || (m && f) || (m && (f || (0, h.Hw)(r)) && l) || (m && (0, h.Hw)(r) && d) || (m && y && o),
      }
    }
    function M(e) {
      return e === f.x.FREE || e === f.x.GO
    }
    i.d(
      t,
      {},
      {
        AH: function (e, t) {
          let i,
            l,
            c,
            m,
            p,
            f,
            S,
            A,
            R = (0, s.c)(27),
            { accountId: N, userId: k, authMethod: I, isLoading: P } = (0, a.As)(),
            E = (0, r.Ul)(null),
            T = "chatgpt" === I,
            q = (0, v.AS)(),
            U = (0, v.Zj)(y),
            L = (0, v.DR)(y),
            O = (0, v.XR)(),
            { data: F, isLoading: z, hasEverErrored: $ } = (0, d.YL)(),
            { data: B, isLoading: G } = (0, o.Us)(),
            D =
              T &&
              F?.id === N &&
              F?.structure === "workspace" &&
              "account-owner" === F.account_user_role &&
              (0, h.Hw)(F.plan_type),
            Z = T && !O && (0, g.b0)({ accountId: N, currentAccount: F, statsigClient: q }),
            H = F?.plan_type ?? (!z || $ ? B?.plan : void 0)
          R[0] !== T || R[1] !== H ? ((i = T && (0, h.Hw)(H)), (R[0] = T), (R[1] = H), (R[2] = i)) : (i = R[2])
          let V = i,
            W = (0, v.Zj)(!!V && x),
            X = (0, v.DR)(V ? x : y)
          R[3] !== H ? ((l = M(H)), (R[3] = H), (R[4] = l)) : (l = R[4])
          let K = l
          R[5] !== H ? ((c = (0, h.uz)(H)), (R[5] = H), (R[6] = c)) : (c = R[6])
          let Q = c,
            { hasPlanCreditAccess: Y, isFreeOrGoCreditPurchaseEnabled: J } = _({
              authMethod: I,
              plan: H,
              statsigClient: O ? null : q,
            }),
            ee = F?.structure === "personal" && F.id === N
          !1 !== R[7] ? ((m = { enabled: !1 }), (R[7] = !1), (R[8] = m)) : (m = R[8])
          let { data: et, isLoading: ei } = (0, r._U)(b, N ?? null, m),
            es = j({
              identityReady: T && !P && null != k,
              isStatsigLoading: O,
              isCurrentPersonalAccount: ee,
              hasPlanCreditAccess: Y,
            }),
            er = es && "usage" === t,
            en = N ?? null,
            ea = k ?? null
          R[9] !== en || R[10] !== ea
            ? ((p = { accountId: en, userId: ea }), (R[9] = en), (R[10] = ea), (R[11] = p))
            : (p = R[11])
          let { data: eo, isPending: el } = (0, r._U)(w, p, { enabled: er }),
            ed = es && eo?.metadata?.enrollment_step === "enrolled",
            ec = Y || ed,
            eu = T && ee && !ec
          R[12] !== eu ? ((f = { enabled: eu }), (R[12] = eu), (R[13] = f)) : (f = R[13])
          let { data: eg, isLoading: em } = (0, u.q7)(f),
            [ep, ev] = (0, n.useState)(null),
            eh = eu && eg?.isEnabled === !0,
            ef = "usage" === t && eu && (eh || ep === N) ? N : null
          ep !== ef && ev(ef)
          let ey = eh || null != ef,
            ex = T && Q && U,
            eb = T && !O && !("isNoop" in q),
            ew = V && !O && W,
            e_ = T && z && !$,
            ej = T && K && O,
            eC = T && Q && (O || L)
          R[14] !== T || R[15] !== K || R[16] !== O || R[17] !== H
            ? ((S = T && (K || (0, h.Hw)(H)) && O), (R[14] = T), (R[15] = K), (R[16] = O), (R[17] = H), (R[18] = S))
            : (S = R[18])
          let eM = S,
            eS = V && (O || X),
            eA = C({
              authMethod: I,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: ey,
              isPersonalAccount: ee,
              plan: H,
              isFreeOrGoCreditPurchaseEnabled: J,
              hasStudentCreditAccess: ed,
              isEnterpriseUsageSettingsEnabled: ex,
              isConsumerUsageAnalyticsEnabled: eb,
              isBusinessUsageDashboardEnabled: ew,
              canPurchaseBusinessCredits: Z,
              isBusinessWorkspaceOwner: D,
            }),
            eR = !0 === E || eA.isUsageSettingsVisible || !1,
            eN = ey ? eg : void 0,
            ek = P || (T && G) || e_ || ej || eC || eM || eS || (er && el) || (eu && em && !eR)
          return (
            R[19] !== Z || R[20] !== D || R[21] !== eR || R[22] !== H || R[23] !== eN || R[24] !== ek || R[25] !== eA
              ? ((A = {
                  autoReloadSettings: eN,
                  ...eA,
                  canPurchaseBusinessCredits: Z,
                  isBusinessWorkspaceOwner: D,
                  isUsageSettingsVisible: eR,
                  isUsageSettingsAccessLoading: ek,
                  plan: H,
                }),
                (R[19] = Z),
                (R[20] = D),
                (R[21] = eR),
                (R[22] = H),
                (R[23] = eN),
                (R[24] = ek),
                (R[25] = eA),
                (R[26] = A))
              : (A = R[26]),
            A
          )
        },
        E2: j,
        M7: M,
        MQ: _,
        fQ: w,
        jJ: C,
        t$: b,
      },
    )
  },
  NLdj(e, t, i) {
    var s = i("VSiS"),
      r = i("z1BV")
    function n({ serverState: e, discountExperience: t, maximumQuantity: i = r.X6 }) {
      if ("legacy" === t.kind) return (0, r.OD)(e)
      let s = (0, r.sA)(e.rechargeThreshold ?? "") || String(125),
        a = (0, r.sA)(e.rechargeTarget ?? "")
      if (a.length > 0) return a
      if ("active" === t.kind) return (0, r.OD)(e)
      let o = Number.parseInt(s, 10),
        l = t.tiers
          .filter((e) => e.minimum_quantity > 1 && (!Number.isFinite(o) || o + e.minimum_quantity <= i))
          .reduce((e, t) => (null == e ? t.minimum_quantity : Math.min(e, t.minimum_quantity)), null)
      return null != l && Number.isFinite(o) ? String(o + l) : (0, r.OD)(e)
    }
    function a({ discountOffer: e, isEnablingAutoReload: t, payload: i }) {
      return t && e?.auto_reload != null ? { ...i, enroll_in_auto_reload_discount: !0 } : i
    }
    i.d(
      t,
      { Ij: () => n, KM: () => a, ZT: () => s.ZT, Zu: () => s.Zu, _3: () => s._3 },
      {
        vI: function ({ autoTopUpSettings: e, hasPaymentMethod: t, isManageAutoReload: i }) {
          return !t && (!i || null != e) && !(e?.isEnabled === !0 && (0, s.Zu)(e.autoReloadCreditDiscountPolicy))
        },
      },
    )
  },
  Sptq(e, t, i) {
    var s = i("qmMi"),
      r = i("eFn4"),
      n = i("S7UE"),
      a = i("KH2l"),
      o = i("aeqi"),
      l = i("GaA7"),
      d = i("OWtl")
    let c = (0, s.i1)(d.u, (e, { get: t }) => {
        let i = t(r.xm),
          s = t(a.Ot) ? t(n.u) : null,
          d = l.appServices?.lsp != null && t(o.P)
        return {
          navigation: { visible: !0 === d, pending: "panel" === e && null == d },
          cloud: { visible: "allowed" === i.status, pending: "loading" === i.status, error: "error" === i.status },
          app: { visible: s?.status === "allowed", pending: s?.status === "loading", error: s?.status === "error" },
        }
      }),
      u = (0, s.un)(d.u, ({ get: e }) => e(c, "panel")),
      g = (0, s.un)(d.u, ({ get: e }) => e(c, "search"))
    i.d(t, {}, { T: u, z: g })
  },
  oFmV(e, t, i) {
    let s = (0, i("zd8w").createContext)(null)
    i.d(t, {}, { S: s })
  },
  lSOQ(e, t, i) {
    i.d(t, { v: () => C })
    var s = i("ABep"),
      r = i("QosV"),
      n = i("qmMi"),
      a = i("OWtl"),
      o = i("RxZZ"),
      l = i("ClXH"),
      d = i("oyxz"),
      c = i("Sm6l"),
      u = i("UxN3"),
      g = i("zLIa"),
      m = i("g7Qx"),
      p = i("tO3J"),
      v = i("BSnr"),
      h = i("xSOA"),
      f = i("zd8w"),
      y = i("Wf1j"),
      x = i("SGsN")
    function b() {
      return !1
    }
    function w() {
      return !0
    }
    function _(e) {
      let t,
        i,
        o,
        l,
        d,
        c = (0, r.c)(24),
        {
          ariaLabel: u,
          children: g,
          onSaved: m,
          placeholder: v,
          rows: _,
          savedValue: C,
          save: M,
          saveScope: S,
          subtitle: A,
          title: R,
          titleSize: N,
        } = e,
        k = void 0 === _ ? 6 : _
      c[0] !== m || c[1] !== M || c[2] !== S || c[3] !== C
        ? ((t = { savedValue: C, save: M, saveScope: S, onSaved: m }),
          (c[0] = m),
          (c[1] = M),
          (c[2] = S),
          (c[3] = C),
          (c[4] = t))
        : (t = c[4])
      let I = (function (e) {
          let t,
            i,
            s,
            o,
            l,
            d,
            c,
            u,
            g,
            m,
            p,
            v,
            _,
            j,
            C = (0, r.c)(38),
            { savedValue: M, save: S, saveScope: A, onSaved: R } = e,
            N = (0, n.gh)(a.u),
            k = (0, y.A)(),
            [I, P] = (0, f.useState)(null),
            [E, T] = (0, f.useState)(!1),
            q = (0, f.useRef)(null),
            U = (0, f.useRef)(null),
            L = `autosaving-instructions-${A}`
          ;(C[0] !== L ? ((t = { id: L }), (C[0] = L), (C[1] = t)) : (t = C[1]),
            C[2] !== S
              ? ((i = (e) => {
                  let { value: t } = e
                  return S(t)
                }),
                (C[2] = S),
                (C[3] = i))
              : (i = C[3]),
            C[4] !== R
              ? ((s = (e, t) => {
                  ;(q.current === t && ((q.current = null), P(null), T(!0)), R?.(t.value))
                }),
                (C[4] = R),
                (C[5] = s))
              : (s = C[5]),
            C[6] !== k || C[7] !== N
              ? ((o = () => {
                  N.get(x.Id).danger(
                    k.formatMessage({
                      id: "settings.git.instructions.autoSave.error",
                      defaultMessage: "Failed to save instructions",
                    }),
                    { errorAnalytics: { toastId: "settings.git.instructions.autoSave.error" } },
                  )
                }),
                (C[6] = k),
                (C[7] = N),
                (C[8] = o))
              : (o = C[8]),
            C[9] !== t || C[10] !== i || C[11] !== s || C[12] !== o
              ? ((l = { scope: t, networkMode: "always", mutationFn: i, onSuccess: s, onError: o }),
                (C[9] = t),
                (C[10] = i),
                (C[11] = s),
                (C[12] = o),
                (C[13] = l))
              : (l = C[13]))
          let O = (0, h.n)(l)
          C[14] !== O
            ? ((d = function (e) {
                let t = q.current
                if (null == t) return Promise.resolve(!0)
                let i = U.current
                if (i?.draft === t && !(void 0 !== e && e && O.isError && O.variables === t)) return i.result
                let s = O.mutateAsync(t).then(w, b)
                return ((U.current = { draft: t, result: s }), s)
              }),
              (C[14] = O),
              (C[15] = d))
            : (d = C[15])
          let F = d
          C[16] !== F
            ? ((c = () => {
                F()
              }),
              (C[16] = F),
              (C[17] = c))
            : (c = C[17])
          let z = (0, f.useEffectEvent)(c)
          ;(C[18] !== z || C[19] !== I
            ? ((u = () => {
                if (null == I) return
                let e = window.setTimeout(() => z(), 3e3)
                return () => window.clearTimeout(e)
              }),
              (C[18] = z),
              (C[19] = I),
              (C[20] = u))
            : (u = C[20]),
            C[21] !== I ? ((g = [I]), (C[21] = I), (C[22] = g)) : (g = C[22]),
            (0, f.useEffect)(u, g),
            C[23] !== z ? ((m = () => () => z()), (C[23] = z), (C[24] = m)) : (m = C[24]),
            C[25] === Symbol.for("react.memo_cache_sentinel") ? ((p = []), (C[25] = p)) : (p = C[25]),
            (0, f.useEffect)(m, p),
            C[26] !== E
              ? ((v = () => {
                  if (!E) return
                  let e = window.setTimeout(() => T(!1), 3e3)
                  return () => window.clearTimeout(e)
                }),
                (_ = [E]),
                (C[26] = E),
                (C[27] = v),
                (C[28] = _))
              : ((v = C[27]), (_ = C[28])),
            (0, f.useEffect)(v, _))
          let $ = "idle"
          O.isPending ? ($ = "saving") : null != I ? ($ = "dirty") : E && ($ = "saved")
          let B = I?.value ?? M,
            G = O.isError && O.variables === I
          if (C[29] !== $ || C[30] !== O || C[31] !== M || C[32] !== F || C[33] !== B || C[34] !== G) {
            let e
            ;(C[36] !== F ? ((e = () => F(!0)), (C[36] = F), (C[37] = e)) : (e = C[37]),
              (j = {
                value: B,
                actionState: $,
                saveFailed: G,
                change(e) {
                  ;((q.current = e !== M || O.isPending ? { value: e } : null), P(q.current), T(!1))
                },
                flush: e,
                discard() {
                  ;((q.current = null), P(null), O.reset())
                },
              }),
              (C[29] = $),
              (C[30] = O),
              (C[31] = M),
              (C[32] = F),
              (C[33] = B),
              (C[34] = G),
              (C[35] = j))
          } else j = C[35]
          return j
        })(t),
        P = "dirty" === I.actionState
      return (
        c[5] !== I
          ? ((i = (e) => {
              ;(e.preventDefault(), I.flush())
            }),
            (c[5] = I),
            (c[6] = i))
          : (i = c[6]),
        c[7] !== P || c[8] !== i
          ? ((o = { accelerator: "CmdOrCtrl+S", enabled: P, onKeyDown: i }), (c[7] = P), (c[8] = i), (c[9] = o))
          : (o = c[9]),
        (0, p.EE)(o),
        c[10] !== I ? ((l = () => void I.flush()), (c[10] = I), (c[11] = l)) : (l = c[11]),
        c[12] !== u ||
        c[13] !== g ||
        c[14] !== I.actionState ||
        c[15] !== I.change ||
        c[16] !== I.value ||
        c[17] !== v ||
        c[18] !== k ||
        c[19] !== A ||
        c[20] !== l ||
        c[21] !== R ||
        c[22] !== N
          ? ((d = (0, s.jsx)(j, {
              actionState: I.actionState,
              ariaLabel: u,
              currentValue: I.value,
              onChange: I.change,
              onSave: l,
              placeholder: v,
              rows: k,
              subtitle: A,
              title: R,
              titleSize: N,
              children: g,
            })),
            (c[12] = u),
            (c[13] = g),
            (c[14] = I.actionState),
            (c[15] = I.change),
            (c[16] = I.value),
            (c[17] = v),
            (c[18] = k),
            (c[19] = A),
            (c[20] = l),
            (c[21] = R),
            (c[22] = N),
            (c[23] = d))
          : (d = c[23]),
        d
      )
    }
    function j(e) {
      let t,
        i,
        n,
        a,
        o,
        p = (0, r.c)(25),
        {
          actionState: h,
          ariaLabel: f,
          children: y,
          currentValue: x,
          onChange: b,
          onSave: w,
          placeholder: _,
          rows: j,
          subtitle: C,
          title: M,
          titleSize: S,
        } = e,
        A = void 0 === j ? 6 : j,
        R = null
      if ("dirty" === h || "saving" === h) {
        let e,
          t,
          i = "saving" === h,
          r = "saving" === h
        ;(p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(d.A, { id: "settings.git.instructions.autoSave.save", defaultMessage: "Save" })),
            (p[0] = e))
          : (e = p[0]),
          p[1] !== w || p[2] !== i || p[3] !== r
            ? ((t = (0, s.jsx)(c.$, {
                color: "secondary",
                disabled: i,
                loading: r,
                onClick: w,
                size: "toolbar",
                children: e,
              })),
              (p[1] = w),
              (p[2] = i),
              (p[3] = r),
              (p[4] = t))
            : (t = p[4]),
          (R = t))
      } else if ("saved" === h) {
        let e
        ;(p[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsxs)("span", {
              className: "flex items-center gap-2 text-xs text-secondary",
              "aria-live": "polite",
              children: [
                (0, s.jsx)(u.bF, { "aria-hidden": !1, legacyIcon: m.A, asset16: l.G, legacyClassName: "icon-2xs" }),
                (0, s.jsx)(d.A, { id: "settings.git.instructions.autoSave.saved", defaultMessage: "Saved" }),
              ],
            })),
            (p[5] = e))
          : (e = p[5]),
          (R = e))
      }
      return (
        p[6] !== R || p[7] !== C || p[8] !== M || p[9] !== S
          ? ((t = (0, s.jsx)(v.X.Header, { size: S, title: M, subtitle: C, actions: R })),
            (p[6] = R),
            (p[7] = C),
            (p[8] = M),
            (p[9] = S),
            (p[10] = t))
          : (t = p[10]),
        p[11] !== b
          ? ((i = (e) => {
              b(e.target.value)
            }),
            (p[11] = b),
            (p[12] = i))
          : (i = p[12]),
        p[13] !== f || p[14] !== x || p[15] !== _ || p[16] !== A || p[17] !== i
          ? ((n = (0, s.jsx)(g.TM, { value: x, onChange: i, placeholder: _, "aria-label": f, rows: A })),
            (p[13] = f),
            (p[14] = x),
            (p[15] = _),
            (p[16] = A),
            (p[17] = i),
            (p[18] = n))
          : (n = p[18]),
        p[19] !== y || p[20] !== n
          ? ((a = (0, s.jsxs)(v.X.Content, { children: [y, n] })), (p[19] = y), (p[20] = n), (p[21] = a))
          : (a = p[21]),
        p[22] !== t || p[23] !== a
          ? ((o = (0, s.jsxs)(v.X, { children: [t, a] })), (p[22] = t), (p[23] = a), (p[24] = o))
          : (o = p[24]),
        o
      )
    }
    function C(e) {
      let t,
        i,
        l,
        d,
        c = (0, r.c)(11)
      c[0] !== e ? (({ setting: i, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = i)) : ((t = c[1]), (i = c[2]))
      let u = (0, n.gh)(a.u),
        g = (0, o.iK)(i)
      return (
        c[3] !== u || c[4] !== i ? ((l = (e) => (0, o.gc)(u, i, e)), (c[3] = u), (c[4] = i), (c[5] = l)) : (l = c[5]),
        c[6] !== t || c[7] !== g || c[8] !== i.key || c[9] !== l
          ? ((d = (0, s.jsx)(_, { ...t, savedValue: g, save: l, saveScope: i.key })),
            (c[6] = t),
            (c[7] = g),
            (c[8] = i.key),
            (c[9] = l),
            (c[10] = d))
          : (d = c[10]),
        d
      )
    }
  },
  uMwG(e, t, i) {
    var s = i("QosV"),
      r = i("irkb"),
      n = i("xSOA"),
      a = i("qmMi"),
      o = i("SPnB"),
      l = i("CWeU"),
      d = i("eFn4"),
      c = i("UOa8"),
      u = i("GaA7"),
      g = i("OWtl"),
      m = i("OMIV"),
      p = i("rvFo"),
      v = i("kK7d")
    let h = (0, a.un)(g.u, ({ get: e }) => {
      let { authMethod: t, authLoading: i } = e(l.PO),
        s = e(m.JW, "2826489636"),
        r = (i || "chatgpt" === t || "chatgptAuthTokens" === t) && e(m.JW, "1168186395") && e(m.JW, "3816307151"),
        n = r ? e(d.L5) : null,
        a = r && (void 0 === n ? void 0 : (n?.cloudAccess ?? !0))
      return { cloudInstructionsEnabled: a, unifiedInstructions: s || a }
    })
    function f(e) {
      return ["cloud-user-preferences", e]
    }
    function y(e) {
      return (0, a.Ul)(o.o8)
    }
    let x = (0, a.vU)(g.u, (e) => ({
        queryKey: f(e),
        queryFn: ({ signal: e }) => v.CodexRequest.safeGet("/wham/settings/user", { signal: e }),
        enabled: null != e,
        retry: !1,
        staleTime: p.D.FIVE_MINUTES,
      })),
      b = (0, a.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["cloud-preferences-config", e, t],
        queryFn: () => v.CodexRequest.safeGet("/wham/settings/configs/user-preferences"),
        enabled: null != e && null != t,
        retry: !1,
        staleTime: p.D.FIVE_MINUTES,
      }))
    function w(e, t, i) {
      let s = e
      for (let e of t) s = s.replaceAll(e.value, i(e))
      return s
    }
    i.d(
      t,
      {},
      {
        $g: b,
        Gn: h,
        If: y,
        Zl: function () {
          let e,
            t = (0, s.c)(3),
            { accountId: i, userId: r } = (0, c.As)()
          return (
            t[0] !== i || t[1] !== r
              ? ((e = { accountId: i, userId: r }), (t[0] = i), (t[1] = r), (t[2] = e))
              : (e = t[2]),
            (0, a._U)(b, e)
          )
        },
        d9: function (e, t, i) {
          let s = (e.match(/{/g) ?? []).length
          if (s !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === s) return "missing-pattern"
          let r = i.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !r.includes(e))) return "invalid-pattern"
          let n = w(e, i, (e) => "x".repeat(e.char_count))
          return n.length > t
            ? "too-long"
            : n.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(n)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return w(e, t, (e) => e.example)
        },
        ky: x,
        sN: function () {
          let e,
            t,
            i,
            a,
            o,
            l = (0, s.c)(13),
            { accountId: d, userId: g } = (0, c.As)(),
            m = y(g),
            p = (0, r.jE)()
          return (
            l[0] !== d || l[1] !== m
              ? ((e = ["update-cloud-user-preferences", d, m]),
                (t = (e) => {
                  if (null == d || null == m) throw Error("Sign in to update preferences")
                  return v.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: d, userId: m },
                    requestBody: e,
                  })
                }),
                (l[0] = d),
                (l[1] = m),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== m ? ((i = () => ({ queryKey: f(m) })), (l[4] = m), (l[5] = i)) : (i = l[5]),
            l[6] !== p
              ? ((a = async (e, t, i) => {
                  null != i &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (u.appServices?.queryCache ?? u.appServices?.clientCoordination)?.invalidateQueryCache({
                        queryKey: [...i.queryKey],
                      })),
                    p.setQueryData(i.queryKey, e))
                }),
                (l[6] = p),
                (l[7] = a))
              : (a = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== i || l[11] !== a
              ? ((o = { mutationKey: e, mutationFn: t, onMutate: i, onSuccess: a }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = i),
                (l[11] = a),
                (l[12] = o))
              : (o = l[12]),
            (0, n.n)(o)
          )
        },
        wJ: function () {
          let { userId: e } = (0, c.As)(),
            t = y(e)
          return (0, a._U)(x, t)
        },
      },
    )
  },
  VbfX(e, t, i) {
    var s = i("qmMi"),
      r = i("Qgfj"),
      n = i("SPnB"),
      a = i("hXam"),
      o = i("WrZv"),
      l = i("uSFS"),
      d = i("OWtl"),
      c = i("Sptq"),
      u = i("jBHQ"),
      g = i("O666"),
      m = i("uMwG")
    let p = "579168209",
      v = ["pr_open", "every_push", "smart_detect"],
      h = ["critical", "high", "medium", "low"],
      f = { section: "code-review", searchParams: { tab: "cloud" } },
      y = { section: "code-review", searchParams: { tab: "app" } },
      x = (0, r.YK)({
        automatic: { id: "settings.codeReview.personal.autoReview.label", defaultMessage: "Automatic review" },
        automaticDescription: {
          id: "settings.codeReview.personal.autoReview.description",
          defaultMessage:
            "If a repository\u2019s review setting differs from your personal preference, the repository setting takes priority",
        },
        trigger: { id: "settings.codeReview.personal.trigger.label", defaultMessage: "Review trigger" },
        triggerDescription: {
          id: "settings.codeReview.personal.trigger.description",
          defaultMessage: "Choose when ChatGPT should review your pull requests",
        },
        exhaustive: { id: "settings.codeReview.personal.exhaustive.label", defaultMessage: "Exhaustive code review" },
        exhaustiveDescription: {
          id: "settings.codeReview.personal.exhaustive.description",
          defaultMessage: "Keep looking for findings until ChatGPT stops finding new issues",
        },
        credits: { id: "settings.codeReview.personal.credits.label", defaultMessage: "Use credits for reviews" },
        creditsDescription: {
          id: "settings.codeReview.personal.credits.description",
          defaultMessage: "Allow credits to be consumed for reviews after rate limits",
        },
        automaticSecurity: {
          id: "settings.codeReview.security.autoReview.label",
          defaultMessage: "Automatic security review",
        },
        automaticSecurityDescription: {
          id: "settings.codeReview.security.autoReview.description",
          defaultMessage:
            "If a repository\u2019s review setting differs from your personal preference, the repository setting takes priority",
        },
        securityTrigger: {
          id: "settings.codeReview.security.trigger.label",
          defaultMessage: "Security review trigger",
        },
        securityTriggerDescription: {
          id: "settings.codeReview.security.trigger.description",
          defaultMessage: "Choose when Codex should review your pull requests for security",
        },
        automaticSeverity: {
          id: "settings.codeReview.security.autoSeverity.label",
          defaultMessage: "Minimum automatic review reporting severity",
        },
        automaticSeverityDescription: {
          id: "settings.codeReview.security.autoSeverity.description",
          defaultMessage: "Choose the lowest severity reported for automated reviews",
        },
        manualSeverity: {
          id: "settings.codeReview.security.manualSeverity.label",
          defaultMessage: "Minimum manual review reporting severity",
        },
        manualSeverityDescription: {
          id: "settings.codeReview.security.manualSeverity.description",
          defaultMessage: "Choose the lowest severity reported for reviews requested with @codex",
        },
        securityCredits: {
          id: "settings.codeReview.security.credits.label",
          defaultMessage: "Use credits for security reviews",
        },
        triggerOption: {
          id: "settings.codeReview.repository.trigger.option",
          defaultMessage:
            "{value, select, personal {Follow personal preferences} pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}",
        },
        severityOption: {
          id: "settings.codeReview.repository.severity.option.v2",
          defaultMessage:
            "{value, select, critical {Critical} high {High} medium {Medium} low {Low} inherit {Use repository setting} other {Unknown}}",
        },
        linkTarget: { id: "settings.codeReview.githubLinks.label", defaultMessage: "Open review links in" },
        provider: { id: "settings.codeReview.provider.label", defaultMessage: "Review provider" },
        github: { id: "settings.codeReview.provider.github", defaultMessage: "GitHub" },
        gitlab: { id: "settings.codeReview.provider.gitlab", defaultMessage: "GitLab" },
        codeReviewTab: { id: "settings.codeReview.githubLinks.codeReviewTab", defaultMessage: "Code Review Tab" },
        browserSettings: {
          id: "settings.codeReview.reviewLinks.followBrowserSettings",
          defaultMessage: "Follow Browser Settings",
        },
      }),
      b = { "code-review-tab": x.codeReviewTab, github: x.browserSettings },
      w = {
        automatic: { ...f, id: "automatic-code-review", title: x.automatic, description: x.automaticDescription },
        trigger: {
          ...f,
          id: "code-review-trigger",
          title: x.trigger,
          description: x.triggerDescription,
          options: v.map((e) => ({ ...x.triggerOption, values: { value: e } })),
        },
        exhaustive: { ...f, id: "exhaustive-code-review", title: x.exhaustive, description: x.exhaustiveDescription },
        credits: { ...f, id: "code-review-credits", title: x.credits, description: x.creditsDescription },
        automaticSecurity: {
          ...f,
          id: "automatic-security-review",
          title: x.automaticSecurity,
          description: x.automaticSecurityDescription,
        },
        securityTrigger: {
          ...f,
          id: "security-review-trigger",
          title: x.securityTrigger,
          description: x.securityTriggerDescription,
        },
        automaticSeverity: {
          ...f,
          id: "automatic-security-severity",
          title: x.automaticSeverity,
          description: x.automaticSeverityDescription,
          options: h.map((e) => ({ ...x.severityOption, values: { value: e } })),
        },
        manualSeverity: {
          ...f,
          id: "manual-security-severity",
          title: x.manualSeverity,
          description: x.manualSeverityDescription,
          options: h.map((e) => ({ ...x.severityOption, values: { value: e } })),
        },
        securityCredits: { ...f, id: "security-review-credits", title: x.securityCredits },
        linkTarget: { ...y, id: "code-review-link-target", title: x.linkTarget, options: Object.values(b) },
        provider: { ...y, id: "code-review-provider", title: x.provider },
        instructions: { ...y, id: "personal-code-review-instructions", title: a._.title },
      },
      _ = (0, s.un)(d.u, ({ get: e }) => {
        let t = e(c.z),
          i = []
        if ((t.navigation.visible && i.push(o.dP, o.f_, ...o.Qh.map(({ entry: e }) => e)), t.app.visible)) {
          let t = e(g.H$, { layer: "2115119119", parameter: "enabled", disableExposureLog: !0 })
          i.push(w.linkTarget, { ...w.provider, options: j(t).map((e) => x[e]) }, w.instructions)
        }
        if (!t.cloud.visible) return i
        let { userId: s, authenticatedAccountId: r, authLoading: a } = e(n.PO),
          d = e(n.o8)
        if (a || null == d) return i
        let v = e(m.ky, d, { enabled: !1 }).data
        if (null == v) return i
        i.push(w.automatic, w.trigger, w.exhaustive)
        let h = e(l.Cn)?.canManageCreditSettings === !0
        if ((h && i.push(w.credits), null == v.security_review)) return i
        let f = v.security_review.trigger_policy ?? "code_review"
        i.push(
          w.automaticSecurity,
          { ...w.securityTrigger, options: C(e(u.P, p), f).map((e) => ({ ...x.triggerOption, values: { value: e } })) },
          w.automaticSeverity,
          w.manualSeverity,
        )
        let y = e(m.$g, { accountId: r, userId: s }, { enabled: !1 }).data
        return (
          M(h, y?.security_review_credits_available, v.allow_credits_for_security_reviews) && i.push(w.securityCredits),
          i
        )
      })
    function j(e) {
      return e ? ["github", "gitlab"] : ["github"]
    }
    function C(e, t) {
      return e || "smart_detect" === t
        ? ["pr_open", "every_push", "smart_detect", "code_review"]
        : ["pr_open", "every_push", "code_review"]
    }
    function M(e, t, i) {
      return e && null != i && (!0 === t || !0 === i)
    }
    i.d(t, {}, { Cx: p, Eh: C, Jd: v, Mv: w, cH: _, e8: M, fG: j, fz: h, gt: x, q$: b })
  },
  u5Xi(e, t, i) {
    var s = i("ABep"),
      r = i("QosV"),
      n = i("zd8w"),
      a = i("oyxz"),
      o = i("bqtn"),
      l = i("F0xz"),
      d = i("pO0d"),
      c = i("BSnr"),
      u = i("AWNZ"),
      g = i("QyE3"),
      m = i("ZEx5"),
      p = i("VbfX")
    function v(e) {
      let t,
        i,
        n,
        a,
        o,
        l = (0, r.c)(10)
      return (
        l[0] !== e
          ? (({ label: i, description: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = n))
          : ((t = l[1]), (i = l[2]), (n = l[3])),
        l[4] !== n ? ((a = (e) => (0, s.jsx)(h, { ...n, ...e })), (l[4] = n), (l[5] = a)) : (a = l[5]),
        l[6] !== t || l[7] !== i || l[8] !== a
          ? ((o = (0, s.jsx)(u.ic, { label: i, description: t, control: a })),
            (l[6] = t),
            (l[7] = i),
            (l[8] = a),
            (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function h(e) {
      let t,
        i,
        a,
        l,
        d,
        c,
        u,
        m,
        p,
        v,
        h,
        y,
        x,
        b,
        w = (0, r.c)(40)
      w[0] !== e
        ? (({ value: u, options: l, disabled: i, onChange: a, renderLabel: c, renderDescription: d, ...t } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = i),
          (w[3] = a),
          (w[4] = l),
          (w[5] = d),
          (w[6] = c),
          (w[7] = u))
        : ((t = w[1]), (i = w[2]), (a = w[3]), (l = w[4]), (d = w[5]), (c = w[6]), (u = w[7]))
      let _ = (0, n.useId)(),
        j = null == d ? void 0 : "panelWide",
        C = null == t["aria-labelledby"] ? void 0 : `${t["aria-labelledby"]} ${_}`
      if (
        (w[8] !== t || w[9] !== _
          ? ((m = null == t["aria-label"] ? t["aria-describedby"] : [t["aria-describedby"], _].filter(f).join(" ")),
            (w[8] = t),
            (w[9] = _),
            (w[10] = m))
          : (m = w[10]),
        w[11] !== c || w[12] !== u ? ((p = c(u)), (w[11] = c), (w[12] = u), (w[13] = p)) : (p = w[13]),
        w[14] !== p || w[15] !== _
          ? ((v = (0, s.jsx)("span", { id: _, children: p })), (w[14] = p), (w[15] = _), (w[16] = v))
          : (v = w[16]),
        w[17] !== t || w[18] !== i || w[19] !== C || w[20] !== m || w[21] !== v
          ? ((h = (0, s.jsx)(g.vg, { ...t, "aria-labelledby": C, "aria-describedby": m, disabled: i, children: v })),
            (w[17] = t),
            (w[18] = i),
            (w[19] = C),
            (w[20] = m),
            (w[21] = v),
            (w[22] = h))
          : (h = w[22]),
        w[23] !== a || w[24] !== l || w[25] !== d || w[26] !== c)
      ) {
        let e
        ;(w[28] !== a || w[29] !== d || w[30] !== c
          ? ((e = (e) =>
              (0, s.jsx)(o.ms.RadioItem, { value: e, onSelect: () => a(e), SubText: d?.(e), children: c(e) }, e)),
            (w[28] = a),
            (w[29] = d),
            (w[30] = c),
            (w[31] = e))
          : (e = w[31]),
          (y = l.map(e)),
          (w[23] = a),
          (w[24] = l),
          (w[25] = d),
          (w[26] = c),
          (w[27] = y))
      } else y = w[27]
      return (
        w[32] !== y || w[33] !== u
          ? ((x = (0, s.jsx)(o.ms.RadioGroup, { value: u, children: y })), (w[32] = y), (w[33] = u), (w[34] = x))
          : (x = w[34]),
        w[35] !== i || w[36] !== j || w[37] !== h || w[38] !== x
          ? ((b = (0, s.jsx)(o.Ab, { contentWidth: j, disabled: i, triggerButton: h, children: x })),
            (w[35] = i),
            (w[36] = j),
            (w[37] = h),
            (w[38] = x),
            (w[39] = b))
          : (b = w[39]),
        b
      )
    }
    function f(e) {
      return null != e
    }
    function y(e) {
      return (0, s.jsx)(a.A, {
        id: "settings.codeReview.repository.scope.option",
        defaultMessage: "{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}",
        values: { scope: e },
      })
    }
    i.d(
      t,
      {},
      {
        CA: function (e) {
          let t,
            i,
            n,
            a,
            o,
            l = (0, r.c)(10)
          return (
            l[0] !== e
              ? (({ entry: i, anchored: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = n))
              : ((t = l[1]), (i = l[2]), (n = l[3])),
            l[4] !== n ? ((a = (e) => (0, s.jsx)(h, { ...n, ...e })), (l[4] = n), (l[5] = a)) : (a = l[5]),
            l[6] !== t || l[7] !== i || l[8] !== a
              ? ((o = (0, s.jsx)(d.GC, { entry: i, anchored: t, control: a })),
                (l[6] = t),
                (l[7] = i),
                (l[8] = a),
                (l[9] = o))
              : (o = l[9]),
            o
          )
        },
        Qt: function (e) {
          let t,
            i = (0, r.c)(2),
            { value: n } = e
          return (
            i[0] !== n
              ? ((t = (0, s.jsx)(a.A, { ...p.gt.severityOption, values: { value: n } })), (i[0] = n), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        SA: function (e) {
          let t,
            i,
            n,
            o,
            d,
            g,
            p,
            h,
            f = (0, r.c)(26),
            { title: x, children: b, security: w, preferences: _, disabled: j, onUpdate: C } = e,
            M = "never_review" !== _.global_review_preference,
            S = "team" === _.review_preference ? "team" : "personal"
          ;("review_everyone" === _.global_review_preference && (S = "everyone"),
            f[0] !== x ? ((t = (0, s.jsx)(c.X.Header, { title: x })), (f[0] = x), (f[1] = t)) : (t = f[1]))
          let A = String(void 0 !== w && w)
          ;(f[2] !== A
            ? ((i = (0, s.jsx)(a.A, {
                id: "settings.codeReview.repository.automatic",
                defaultMessage: "{security, select, true {Auto security review} other {Automatic review}}",
                values: { security: A },
              })),
              (f[2] = A),
              (f[3] = i))
            : (i = f[3]),
            f[4] !== M
              ? ((n = M
                  ? void 0
                  : (0, s.jsx)(a.A, {
                      id: "settings.codeReview.repository.manualReviewNotice",
                      defaultMessage: "You can still request a review with @codex",
                    })),
                (f[4] = M),
                (f[5] = n))
              : (n = f[5]),
            f[6] !== j || f[7] !== M || f[8] !== C
              ? ((o = (e) =>
                  (0, s.jsx)(l.l, {
                    ...e,
                    checked: M,
                    disabled: j,
                    onChange: (e) => C({ global_review_preference: e ? "review_if_enabled" : "never_review" }),
                  })),
                (f[6] = j),
                (f[7] = M),
                (f[8] = C),
                (f[9] = o))
              : (o = f[9]),
            f[10] !== i || f[11] !== n || f[12] !== o
              ? ((d = (0, s.jsx)(u.ic, { label: i, description: n, control: o })),
                (f[10] = i),
                (f[11] = n),
                (f[12] = o),
                (f[13] = d))
              : (d = f[13]),
            f[14] !== j || f[15] !== M || f[16] !== C || f[17] !== S
              ? ((g = M
                  ? (0, s.jsx)(v, {
                      label: (0, s.jsx)(a.A, { id: "settings.codeReview.repository.scope", defaultMessage: "Review" }),
                      value: S,
                      options: ["everyone", "team", "personal"],
                      disabled: j,
                      onChange: (e) =>
                        C({
                          global_review_preference: "everyone" === e ? "review_everyone" : "review_if_enabled",
                          review_preference: "personal" === e ? "never" : "team",
                        }),
                      renderLabel: y,
                    })
                  : null),
                (f[14] = j),
                (f[15] = M),
                (f[16] = C),
                (f[17] = S),
                (f[18] = g))
              : (g = f[18]))
          let R = M ? b : null
          return (
            f[19] !== d || f[20] !== g || f[21] !== R
              ? ((p = (0, s.jsx)(c.X.Content, { children: (0, s.jsxs)(m.t, { children: [d, g, R] }) })),
                (f[19] = d),
                (f[20] = g),
                (f[21] = R),
                (f[22] = p))
              : (p = f[22]),
            f[23] !== p || f[24] !== t
              ? ((h = (0, s.jsxs)(c.X, { children: [t, p] })), (f[23] = p), (f[24] = t), (f[25] = h))
              : (h = f[25]),
            h
          )
        },
        _P: v,
        dN: function (e) {
          let t,
            i = (0, r.c)(2),
            { value: n } = e
          return (
            i[0] !== n
              ? ((t = (0, s.jsx)(a.A, { ...p.gt.triggerOption, values: { value: n } })), (i[0] = n), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        wW: h,
      },
    )
  },
  Vujf(e, t, i) {
    var s = i("qmMi"),
      r = i("SUID"),
      n = i("uc7r"),
      a = i("SPnB"),
      o = i("OWtl"),
      l = i("rvFo"),
      d = i("kK7d"),
      c = i("GDNt")
    let u = (0, s.vU)(o.u, (e, { get: t, scope: i }) => {
        let s = t(a.chatGptAuthenticatedAccountId$),
          o = t(a.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["repository-review-connectors", s, o, e],
          enabled: !!s && !!o,
          queryFn: async ({ client: t, signal: l }) => {
            let d = (await (0, r.g)({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => "DISABLED_BY_ADMIN" !== e.status && e.labels?.admin_only_connector !== "true",
            )
            if (0 === d.length) return []
            l.throwIfAborted()
            let c = await t.fetchQuery({ ...(0, n.dZ)({ accountId: s, userId: o, productSku: "CODEX" }), staleTime: 0 })
            if (
              (l.throwIfAborted(),
              i.get(a.chatGptAuthenticatedAccountId$) !== s || i.get(a.chatGptAuthenticatedUserId$) !== o)
            )
              throw Error("Account changed while loading repository connections")
            let u = new Set(c.map((e) => e.connector_id))
            return d.filter((e) => u.has(e.id))
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: l.D.FIVE_MINUTES,
        }
      }),
      g = (0, s.vU)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "list", e],
        queryFn: () => h(e),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      m = (0, s.N3)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "infinite-list", e],
        initialPageParam: null,
        queryFn: ({ pageParam: t }) => h({ ...e, nextToken: t }),
        getNextPageParam: (e) => e.next_token ?? null,
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      p = (0, s.vU)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "detail", e],
        queryFn: () =>
          d.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      v = (0, s.c4)(o.u, (e, { scope: t }) => ({
        mutationFn: (e) =>
          d.CodexRequest.safePatch("/wham/settings/code_review", {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] })
        },
        onError: async (i) => {
          i instanceof c.fk && 409 === i.status && (await t.query.invalidate(p, e))
        },
      }))
    async function h(e) {
      let t = e.search.trim()
      if (0 === t.length && "gitlab" === e.provider)
        return d.CodexRequest.safeGet("/wham/settings/code_review", {
          parameters: {
            query: { provider: e.provider, next_token: e.nextToken, connector_id: e.connectorId, per_page: 8 },
          },
        })
      let i = Number(e.nextToken ?? 1),
        s = (function (e, t) {
          let i = e,
            s = /^https?:\/\//i.test(i),
            r = i.replace(/^www\./i, "")
          if (s || r.toLowerCase().startsWith("gitlab" === t ? "gitlab.com/" : "github.com/")) {
            let e = URL.parse(s ? i : `https://${r}`)
            if (null == e) return null
            i = e.pathname
          }
          "github" === t && (i = i.toLowerCase())
          let n = (i = i.replace(/\.git$/, "")).split("/").filter(Boolean)
          if ("gitlab" === t) {
            let e = n.findIndex((e, t) => t >= 2 && "-" === e)
            ;-1 !== e && (n = n.slice(0, e))
          }
          return n.length < 2 ? null : "gitlab" === t ? n.join("/") : n.slice(0, 2).join("/")
        })(t, e.provider)
      if (1 === i && null != s)
        try {
          let t = await d.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
            expectedErrorStatuses: [400, 403, 404],
            parameters: { path: { repo_id: `${e.provider}-${s}` }, query: { connector_id: e.connectorId } },
          })
          return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null }
        } catch (e) {
          if (!(e instanceof c.fk) || ![400, 403, 404].includes(e.status)) throw e
        }
      let r = await d.CodexRequest.safeGet("/wham/settings/code_review_search", {
        parameters: {
          query: {
            query: "github" === e.provider ? `${t} archived:false`.trim() : t,
            limit: 8,
            page: i,
            provider: e.provider,
            connector_id: e.connectorId,
          },
        },
      })
      return {
        ...r,
        next_token: r.repo_review_settings.length < 8 || ("github" === e.provider && i >= 125) ? null : String(i + 1),
      }
    }
    i.d(t, {}, { BX: g, Hm: u, _E: p, jm: m, uH: v })
  },
  pO0d(e, t, i) {
    var s = i("ABep"),
      r = i("QosV"),
      n = i("oyxz"),
      a = i("Wf1j"),
      o = i("AWNZ"),
      l = i("DDOY")
    function d(e) {
      let t,
        i = (0, r.c)(2),
        { title: a } = e
      return (
        i[0] !== a
          ? ((t =
              "localizedText" in a ? (0, s.jsx)(s.Fragment, { children: a.localizedText }) : (0, s.jsx)(n.A, { ...a })),
            (i[0] = a),
            (i[1] = t))
          : (t = i[1]),
        t
      )
    }
    i.d(
      t,
      {},
      {
        Ct: d,
        GC: function (e) {
          let t,
            i,
            a,
            l,
            c,
            u,
            g,
            m,
            p,
            v = (0, r.c)(19)
          v[0] !== e
            ? (({ entry: i, anchored: c, description: t, renderLabel: l, ...a } = e),
              (v[0] = e),
              (v[1] = t),
              (v[2] = i),
              (v[3] = a),
              (v[4] = l),
              (v[5] = c))
            : ((t = v[1]), (i = v[2]), (a = v[3]), (l = v[4]), (c = v[5]))
          let h = void 0 === c || c
          v[6] !== i.title ? ((u = (0, s.jsx)(d, { title: i.title })), (v[6] = i.title), (v[7] = u)) : (u = v[7])
          let f = u,
            y = h ? i.id : void 0
          return (
            v[8] !== f || v[9] !== l ? ((g = null == l ? f : l(f)), (v[8] = f), (v[9] = l), (v[10] = g)) : (g = v[10]),
            v[11] !== t || v[12] !== i.description
              ? ((m = null == i.description ? t : (0, s.jsx)(n.A, { ...i.description })),
                (v[11] = t),
                (v[12] = i.description),
                (v[13] = m))
              : (m = v[13]),
            v[14] !== a || v[15] !== y || v[16] !== g || v[17] !== m
              ? ((p = (0, s.jsx)(o.ic, { ...a, searchAnchor: y, label: g, description: m })),
                (v[14] = a),
                (v[15] = y),
                (v[16] = g),
                (v[17] = m),
                (v[18] = p))
              : (p = v[18]),
            p
          )
        },
        ek: function (e) {
          let t,
            i,
            n = (0, r.c)(12),
            { entry: o, anchored: d, className: c, children: u } = e,
            g = void 0 === d || d,
            m = (0, a.A)(),
            p = g ? o.id : void 0,
            v = g ? o.id : void 0,
            h = g ? -1 : void 0,
            f = g ? "group" : void 0
          return (
            n[0] !== g || n[1] !== o || n[2] !== m
              ? ((t = g ? (0, l.hz)(m, o.title) : void 0), (n[0] = g), (n[1] = o), (n[2] = m), (n[3] = t))
              : (t = n[3]),
            n[4] !== u || n[5] !== c || n[6] !== p || n[7] !== v || n[8] !== h || n[9] !== f || n[10] !== t
              ? ((i = (0, s.jsx)("div", {
                  id: p,
                  "data-settings-search-entry": v,
                  tabIndex: h,
                  role: f,
                  "aria-label": t,
                  className: c,
                  children: u,
                })),
                (n[4] = u),
                (n[5] = c),
                (n[6] = p),
                (n[7] = v),
                (n[8] = h),
                (n[9] = f),
                (n[10] = t),
                (n[11] = i))
              : (i = n[11]),
            i
          )
        },
        iu: function (e) {
          let t,
            i,
            n,
            a = (0, r.c)(6)
          return (
            a[0] !== e ? (({ action: t, ...i } = e), (a[0] = e), (a[1] = t), (a[2] = i)) : ((t = a[1]), (i = a[2])),
            a[3] !== t || a[4] !== i
              ? ((n = (0, s.jsx)(o.ic, { ...i, control: t })), (a[3] = t), (a[4] = i), (a[5] = n))
              : (n = a[5]),
            n
          )
        },
        kk: function (e) {
          let t,
            i,
            a,
            l,
            c,
            u,
            g,
            m = (0, r.c)(15)
          m[0] !== e
            ? (({ entry: i, anchored: l, description: t, ...a } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = i),
              (m[3] = a),
              (m[4] = l))
            : ((t = m[1]), (i = m[2]), (a = m[3]), (l = m[4]))
          let p = void 0 === l || l ? i.id : void 0
          return (
            m[5] !== i.title ? ((c = (0, s.jsx)(d, { title: i.title })), (m[5] = i.title), (m[6] = c)) : (c = m[6]),
            m[7] !== t || m[8] !== i.description
              ? ((u = null == i.description ? t : (0, s.jsx)(n.A, { ...i.description })),
                (m[7] = t),
                (m[8] = i.description),
                (m[9] = u))
              : (u = m[9]),
            m[10] !== a || m[11] !== p || m[12] !== c || m[13] !== u
              ? ((g = (0, s.jsx)(o.kG, { ...a, searchAnchor: p, label: c, description: u })),
                (m[10] = a),
                (m[11] = p),
                (m[12] = c),
                (m[13] = u),
                (m[14] = g))
              : (g = m[14]),
            g
          )
        },
      },
    )
  },
  BSnr(e, t, i) {
    i.d(t, { X: () => a })
    var s = i("ABep"),
      r = i("QosV"),
      n = i("on57")
    let a = Object.assign(
      function (e) {
        let t,
          i,
          a = (0, r.c)(6),
          { children: o, id: l, className: d } = e
        return (
          a[0] !== d ? ((t = (0, n.A)("flex flex-col", d)), (a[0] = d), (a[1] = t)) : (t = a[1]),
          a[2] !== o || a[3] !== l || a[4] !== t
            ? ((i = (0, s.jsx)("section", { id: l, className: t, children: o })),
              (a[2] = o),
              (a[3] = l),
              (a[4] = t),
              (a[5] = i))
            : (i = a[5]),
          i
        )
      },
      {
        Header: function (e) {
          let t,
            i,
            a,
            o,
            l,
            d,
            c,
            u = (0, r.c)(33),
            {
              title: g,
              subtitle: m,
              actions: p,
              actionsAlignment: v,
              className: h,
              size: f,
              showDivider: y,
              titleGap: x,
              spacing: b,
              subtitlePlacement: w,
              subtitleWrap: _,
            } = e,
            j = void 0 === f ? "default" : f,
            C = void 0 === b ? "default" : b,
            M = void 0 === w ? "below-title" : w,
            S = void 0 === _ ? "balance" : _,
            A = null != g,
            R = null != m,
            N = null != p,
            k = "compact" === j
          u[0] !== k || u[1] !== m || u[2] !== M || u[3] !== S
            ? ((t = m
                ? (0, s.jsx)("div", {
                    className: (0, n.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === S ? "text-balance" : "text-wrap",
                      k ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === M && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = k),
              (u[1] = m),
              (u[2] = M),
              (u[3] = S),
              (u[4] = t))
            : (t = u[4])
          let I = t
          if (!A && !R && !N) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(s.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P =
              A && (void 0 === y || y) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            E = "below-header" === M ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            T = R && "compact" === C && "pb-2",
            q = R && "compact" !== C && "pb-3"
          u[6] !== h ||
          u[7] !== R ||
          u[8] !== k ||
          u[9] !== C ||
          u[10] !== T ||
          u[11] !== q ||
          u[12] !== P ||
          u[13] !== E
            ? ((i = (0, n.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                E,
                T,
                q,
                !R && (0, n.A)("items-center pb-1.5", "compact" === C ? "min-h-8" : "min-h-toolbar"),
                R && k && "items-center",
                R && !k && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = R),
              (u[8] = k),
              (u[9] = C),
              (u[10] = T),
              (u[11] = q),
              (u[12] = P),
              (u[13] = E),
              (u[14] = i))
            : (i = u[14])
          let U =
            "none" === (void 0 === x ? "default" : x)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== U ? ((a = (0, n.A)("flex min-w-0 flex-1 flex-col", U)), (u[15] = U), (u[16] = a)) : (a = u[16]),
            u[17] !== R || u[18] !== j || u[19] !== g
              ? ((o = g
                  ? (0, s.jsx)("div", {
                      className: (0, n.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && R)) && "text-lg",
                        ("base" === j || ("default" === j && !R)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (u[17] = R),
                (u[18] = j),
                (u[19] = g),
                (u[20] = o))
              : (o = u[20]))
          let L = "below-title" === M ? I : null
          ;(u[21] !== a || u[22] !== o || u[23] !== L
            ? ((l = (0, s.jsxs)("div", { className: a, children: [o, L] })),
              (u[21] = a),
              (u[22] = o),
              (u[23] = L),
              (u[24] = l))
            : (l = u[24]),
            u[25] !== p || u[26] !== v
              ? ((d = p
                  ? (0, s.jsx)("div", {
                      className: (0, n.A)("flex items-center gap-2", "end" === v && "self-end"),
                      children: p,
                    })
                  : null),
                (u[25] = p),
                (u[26] = v),
                (u[27] = d))
              : (d = u[27]))
          let O = "below-header" === M ? I : null
          return (
            u[28] !== i || u[29] !== l || u[30] !== d || u[31] !== O
              ? ((c = (0, s.jsxs)("div", { className: i, children: [l, d, O] })),
                (u[28] = i),
                (u[29] = l),
                (u[30] = d),
                (u[31] = O),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            i,
            a = (0, r.c)(5),
            { children: o, className: l } = e
          return (
            a[0] !== l ? ((t = (0, n.A)("flex flex-col gap-1.5", l)), (a[0] = l), (a[1] = t)) : (t = a[1]),
            a[2] !== o || a[3] !== t
              ? ((i = (0, s.jsx)("div", { className: t, children: o })), (a[2] = o), (a[3] = t), (a[4] = i))
              : (i = a[4]),
            i
          )
        },
        Footer: function (e) {
          let t,
            i,
            a = (0, r.c)(6),
            { children: o, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            a[0] !== l || a[1] !== c
              ? ((t = (0, n.A)("text-balance text-secondary", c, l)), (a[0] = l), (a[1] = c), (a[2] = t))
              : (t = a[2]),
            a[3] !== o || a[4] !== t
              ? ((i = (0, s.jsx)("div", { className: t, children: o })), (a[3] = o), (a[4] = t), (a[5] = i))
              : (i = a[5]),
            i
          )
        },
      },
    )
  },
  I7Ou(e, t, i) {
    var s = i("ABep"),
      r = i("QosV"),
      n = i("RNul"),
      a = i("AWNZ")
    i.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            i,
            o = (0, r.c)(3),
            { children: l } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(n.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== l
              ? ((i = (0, s.jsx)("div", {
                  role: "status",
                  children: (0, s.jsx)(a.ic, {
                    label: (0, s.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, s.jsx)("span", { className: "text-balance", children: l })],
                    }),
                    control: null,
                  }),
                })),
                (o[1] = l),
                (o[2] = i))
              : (i = o[2]),
            i
          )
        },
      },
    )
  },
  odCE(e, t, i) {
    var s = i("ABep"),
      r = i("QosV"),
      n = i("oyxz"),
      a = i("RNul")
    i.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            i,
            o,
            l = (0, r.c)(5),
            { children: d } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(a.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== d
              ? ((i =
                  void 0 === d
                    ? (0, s.jsx)(n.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : d),
                (l[1] = d),
                (l[2] = i))
              : (i = l[2]),
            l[3] !== i
              ? ((o = (0, s.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, s.jsx)("span", { className: "text-balance", children: i })],
                })),
                (l[3] = i),
                (l[4] = o))
              : (o = l[4]),
            o
          )
        },
      },
    )
  },
  DDOY(e, t, i) {
    var s = i("Ywss"),
      r = i("iiZm")
    function n(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    i.d(
      t,
      {},
      {
        Xl: function (e, t, i) {
          let r = (0, s.Rr)(e),
            n = new URLSearchParams(r.search)
          for (let [e, t] of Object.entries(i ?? {})) n.set(e, t)
          return (0, s.AO)({ ...r, search: n.toString(), hash: t })
        },
        hz: n,
        s9: function (e, t, i) {
          let s = i.trim()
          return 0 === s.length
            ? []
            : e
                .flatMap((e) => {
                  let i = n(t, e.title),
                    a = (0, r.gr)(i, s),
                    o = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(s.toLocaleLowerCase(t.locale)),
                    l = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, r.gr)(n(t, e), s) > 0)
                  return 0 !== a || o || l
                    ? [
                        {
                          id: e.id,
                          label: i,
                          score: a,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: i, path: s, searchParams: r }) => ({
                  id: e,
                  label: t,
                  sectionSlug: i,
                  ...(null == s ? {} : { path: s }),
                  searchParams: r,
                }))
        },
      },
    )
  },
  ARVD(e, t, i) {
    i.d(
      t,
      {},
      {
        z: function (e, t) {
          if (!Number.isFinite(e) || e <= 0)
            return t.formatNumber(0, { style: "unit", unit: "byte", unitDisplay: "long" })
          if (e < 1024) return t.formatNumber(e, { style: "unit", unit: "byte", unitDisplay: "long" })
          let i = ["kilobyte", "megabyte", "gigabyte", "terabyte"],
            s = e / 1024,
            r = 0
          for (; s >= 1024 && r < i.length - 1;) ((s /= 1024), (r += 1))
          return t.formatNumber(s, { maximumFractionDigits: 1, style: "unit", unit: i[r], unitDisplay: "short" })
        },
      },
    )
  },
  fLEh(e, t, i) {
    let s = (0, i("ESTr").a)({
      name: "person-group-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.202957, y: 4.21582, width: 19.587082, height: 11.835449 },
        visualBounds: { x: 0.202957, y: 4.21582, width: 19.587082, height: 11.835449 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.202957, y: 4.21582, width: 19.587082, height: 11.835449 },
        center: { x: 9.996498, y: 10.133545 },
        insets: { top: 4.21582, right: 0.209961, bottom: 3.948731, left: 0.202957 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.996498, y: 10.133545 },
          foreground: { x: 9.996498, y: 10.133545 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99943 10.8096C12.5889 10.8096 14.714 12.7964 14.934 15.3291C14.9657 15.695 14.6944 16.0171 14.3285 16.0488C13.9628 16.0805 13.6407 15.81 13.6088 15.4443C13.448 13.5929 11.8929 12.1396 9.99943 12.1396C8.10603 12.1397 6.55083 13.593 6.39006 15.4443C6.35814 15.8101 6.03613 16.0806 5.67033 16.0488C5.30455 16.017 5.03409 15.6949 5.06584 15.3291C5.28578 12.7964 7.41008 10.8097 9.99943 10.8096Z" fill="currentColor"/> <path d="M4.14591 11.0859C4.51225 11.0619 4.82969 11.3398 4.85392 11.7061C4.87792 12.0724 4.60007 12.3898 4.23381 12.4141C2.80375 12.5078 1.65418 13.6368 1.53068 15.0586C1.49891 15.4244 1.17678 15.6957 0.810954 15.6641C0.445108 15.6322 0.173716 15.3092 0.205485 14.9434C0.385743 12.8689 2.05936 11.2229 4.14591 11.0859Z" fill="currentColor"/> <path d="M15.8471 11.0859C17.9335 11.223 19.6073 12.869 19.7875 14.9434C19.8193 15.3091 19.5477 15.6321 19.182 15.6641C18.8162 15.6957 18.4941 15.4244 18.4623 15.0586C18.3388 13.637 17.1891 12.5079 15.7592 12.4141C15.3929 12.3898 15.1151 12.0724 15.1391 11.7061C15.1633 11.3398 15.4808 11.0619 15.8471 11.0859Z" fill="currentColor"/> <path d="M3.3383 5.50195C4.62559 5.50215 5.66915 6.54571 5.66935 7.83301C5.66909 9.12025 4.62555 10.1648 3.3383 10.165C2.05091 10.165 1.00653 9.12034 1.00627 7.83301C1.00646 6.54562 2.05087 5.502 3.3383 5.50195ZM3.3383 6.83203C2.78541 6.83208 2.33654 7.28016 2.33634 7.83301C2.33661 8.3858 2.78545 8.83491 3.3383 8.83496C3.89101 8.83476 4.33901 8.38571 4.33927 7.83301C4.33908 7.28025 3.89106 6.83223 3.3383 6.83203Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M16.6557 5.50195C17.943 5.50217 18.9875 6.54572 18.9877 7.83301C18.9874 9.12024 17.9429 10.1648 16.6557 10.165C15.3684 10.1648 14.3249 9.12025 14.3246 7.83301C14.3248 6.54571 15.3684 5.50215 16.6557 5.50195ZM16.6557 6.83203C16.1029 6.83223 15.6549 7.28025 15.6547 7.83301C15.655 8.38571 16.103 8.83476 16.6557 8.83496C17.2084 8.83474 17.6574 8.3857 17.6576 7.83301C17.6574 7.28026 17.2084 6.83225 16.6557 6.83203Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M10.0004 4.21582C11.5886 4.21604 12.8764 5.50457 12.8764 7.09277C12.8761 8.68077 11.5884 9.96853 10.0004 9.96875C8.41223 9.96873 7.12469 8.68089 7.12443 7.09277C7.12445 5.50445 8.41208 4.21584 10.0004 4.21582ZM10.0004 5.54688C9.14662 5.5469 8.45453 6.23899 8.45451 7.09277C8.45477 7.94636 9.14677 8.63865 10.0004 8.63867C10.8539 8.63846 11.546 7.94623 11.5463 7.09277C11.5463 6.23911 10.854 5.54709 10.0004 5.54688Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { Z: s })
  },
}
//# sourceMappingURL=71320.1460eb0aa0.js.map
