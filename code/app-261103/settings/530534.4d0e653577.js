export const __rspack_esm_ids = [530534]
export const __webpack_modules__ = {
  Sfgm(e, t, i) {
    var r = i("QosV"),
      s = i("zTeN"),
      o = i("zd8w"),
      n = i("Ietk"),
      a = i("OAko"),
      l = i("OWtl"),
      c = i("hZax"),
      d = i("WFY2"),
      u = i("Nwp9"),
      p = i("vw1R"),
      g = i("GDNt"),
      h = i("eFn4"),
      v = i("EOo5"),
      f = i("YitN")
    let m = (0, u.m3)("codexCloudAccess", null),
      y = (0, s.vP)(l.u, () => null),
      x = (0, s.i1)(l.u, (e, { get: t }) => {
        if ("chatgpt" !== e) return "disabled"
        let i = t(y) ?? "loading"
        return "loading" === i || "error" === i ? (t(m) ?? i) : i
      })
    function b(e) {
      let t,
        i,
        d,
        u,
        x,
        b = (0, r.c)(26),
        { enabled: j, checkEnvironmentSetup: A } = void 0 === e ? {} : e,
        R = void 0 === j || j,
        C = void 0 === A || A,
        S = (0, s.gh)(l.u),
        { authMethod: k } = (0, v.As)(),
        { data: M, isLoading: E, isError: N, isFetching: L, refetch: I } = (0, f.U)({ enabled: R }),
        T = M?.plan ?? void 0
      b[0] !== T ? ((t = (0, p.o)(T)), (b[0] = T), (b[1] = t)) : (t = b[1])
      let P = t,
        G = (0, s.Ul)(n.j8),
        q = "error" === G,
        {
          data: U,
          isLoading: H,
          isError: F,
          isFetching: z,
          refetch: O,
        } = (0, s._U)(h.Jk, M?.accountId ?? "", { enabled: R && !!M?.accountId && P && "chatgpt" === k }),
        { data: $, isLoading: Z, error: D, isFetching: B, refetch: W } = (0, a.sw)({ enabled: R && C }),
        V = (0, c.Zj)("1907601843"),
        X = (R && "loading" === G) || E || H || (C && Z),
        K = D instanceof g.fk && 404 === D.status,
        Q = (R && q) || N || (P && F) || (C && !!D && !K),
        Y = _(T, k, {
          isLoading: X,
          hasErrors: Q,
          needsOnboarding: C && (V ? K : $?.length === 0 || K),
          hasWorkspaceEnabledCodex: !P || (U?.beta_settings?.wham_access ?? !1),
        })
      ;(b[2] !== Y || b[3] !== C || b[4] !== R || b[5] !== S
        ? ((i = () => {
            R && C && (S.set(y, Y), "loading" !== Y && "error" !== Y && S.set(m, Y))
          }),
          (d = [Y, C, R, S]),
          (b[2] = Y),
          (b[3] = C),
          (b[4] = R),
          (b[5] = S),
          (b[6] = i),
          (b[7] = d))
        : ((i = b[6]), (d = b[7])),
        (0, o.useEffect)(i, d))
      let J = M?.accountId,
        ee = "error" === Y && (L || z || (C && B))
      return (
        b[8] !== M ||
        b[9] !== N ||
        b[10] !== C ||
        b[11] !== P ||
        b[12] !== D ||
        b[13] !== K ||
        b[14] !== I ||
        b[15] !== W ||
        b[16] !== O ||
        b[17] !== S ||
        b[18] !== q ||
        b[19] !== F
          ? ((u = async () => {
              if (q)
                try {
                  await (0, n.SG)(S)
                } catch {
                  return
                }
              await Promise.allSettled([
                N ? I() : void 0,
                P && F && M?.accountId != null
                  ? (0, n.ym)(M.accountId)
                      .catch(w)
                      .then(() => O())
                  : void 0,
                C && D && !K ? W() : void 0,
              ])
            }),
            (b[8] = M),
            (b[9] = N),
            (b[10] = C),
            (b[11] = P),
            (b[12] = D),
            (b[13] = K),
            (b[14] = I),
            (b[15] = W),
            (b[16] = O),
            (b[17] = S),
            (b[18] = q),
            (b[19] = F),
            (b[20] = u))
          : (u = b[20]),
        b[21] !== Y || b[22] !== J || b[23] !== ee || b[24] !== u
          ? ((x = { access: Y, accountId: J, isRetrying: ee, retry: u }),
            (b[21] = Y),
            (b[22] = J),
            (b[23] = ee),
            (b[24] = u),
            (b[25] = x))
          : (x = b[25]),
        x
      )
    }
    function w() {}
    function _(
      e,
      t,
      { isLoading: i, hasErrors: r, needsOnboarding: s, hasWorkspaceEnabledCodex: o, hasLoggedDisabledRef: n },
    ) {
      let a = (0, p.o)(e),
        l = (e) => {
          n && !n.current && (d.v.info(e), (n.current = !0))
        }
      return "chatgpt" !== t
        ? (l("Codex Cloud access disabled because user is not logged in via ChatGPT."), "disabled")
        : i
          ? "loading"
          : r
            ? "error"
            : a && !o
              ? (l("Codex Cloud access disabled because workspace has not enabled Codex."), "disabled")
              : s
                ? "enabled_needs_setup"
                : "enabled"
    }
    i.d(
      t,
      {},
      {
        P4: _,
        d_: b,
        ie: function () {
          return (b(), null)
        },
        tr: x,
      },
    )
  },
  dvDp(e, t, i) {
    var r = i("rxoR"),
      s = i("RxZZ"),
      o = i("OMIV")
    i.d(
      t,
      {},
      {
        $: function (e) {
          let t = (0, r.V)().githubLinkTarget
          return (0, s.g4)(e, t) ?? (e(o.JW, "2247892263") ? "code-review-tab" : (0, s.CN)(e, t))
        },
      },
    )
  },
  hXam(e, t, i) {
    let r = (0, i("Qgfj").YK)({
      title: {
        id: "settings.codeReview.localInstructions.title",
        defaultMessage: "Review instructions",
        description: "Title and accessible label for personal review instructions",
      },
      description: {
        id: "settings.codeReview.localInstructions.description",
        defaultMessage: "Added to reviews you start in Code Review, across all repositories",
        description: "Scope of the user's personal review instructions",
      },
      placeholder: {
        id: "settings.codeReview.localInstructions.placeholder",
        defaultMessage:
          "For example: I care most about the data model. Tell me where we might be overcomplicating things.",
        description: "Example personal review instructions",
      },
    })
    i.d(t, {}, { _: r })
  },
  GHsC(e, t, i) {
    i.d(t, { CodeReviewAppSettings: () => eQ })
    var r = i("ABep"),
      s = i("QosV"),
      o = i("xSOA"),
      n = i("zTeN"),
      a = i("rxoR"),
      l = i("Wf1j"),
      c = i("oyxz"),
      d = i("Qgfj"),
      u = i("dvDp"),
      p = i("hXam"),
      g = i("rOQy"),
      h = i("Bt0y"),
      v = i("SGsN"),
      f = i("OWtl"),
      m = i("RxZZ"),
      y = i("lSOQ"),
      x = i("zd8w"),
      b = i("HZfM"),
      w = i("ygO2"),
      _ = i("evwP"),
      j = i("PkPj"),
      A = i("BrP7"),
      R = i("F0xz"),
      C = i("WXto"),
      S = i("Sptq"),
      k = i("jxU8"),
      M = i("BSnr"),
      E = i("odCE"),
      N = i("AWNZ"),
      L = i("QyE3"),
      I = i("ZEx5"),
      T = i("uMwG"),
      P = i("u5Xi"),
      G = i("GO7r"),
      q = i("okCa"),
      U = i("GEsy"),
      H = i("Vujf")
    function F(e) {
      let t,
        i,
        o,
        a,
        d,
        u,
        p,
        g,
        h,
        v,
        f,
        m,
        y,
        b,
        j = (0, s.c)(59),
        { provider: A, onProviderChange: R, onSelectRepository: C } = e,
        S = (0, l.A)(),
        [k, L] = (0, x.useState)("")
      j[0] !== k ? ((t = k.trim()), (j[0] = k), (j[1] = t)) : (t = j[1])
      let G = (0, U.o)(t, 200),
        { data: F, isPending: Z, isError: D, refetch: B } = (0, T.wJ)(),
        { data: W, isPending: V, isError: X, refetch: K } = (0, n._U)(H.Hm, A),
        [Q, Y] = (0, x.useState)(null),
        J = "github" === A ? F?.preferred_github_connector_id : F?.preferred_gitlab_connector_id,
        ee = "github" === A ? "GitHub" : "GitLab"
      j[2] !== W || j[3] !== J || j[4] !== Q
        ? ((i = W?.find((e) => e.id === Q) ?? W?.find((e) => e.id === J) ?? W?.[0]),
          (j[2] = W),
          (j[3] = J),
          (j[4] = Q),
          (j[5] = i))
        : (i = j[5])
      let et = i
      if (V || Z) {
        let e
        ;(j[6] !== ee
          ? ((e = (0, r.jsx)(E.j, {
              children: (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.connections.loading.v2",
                defaultMessage: "Loading {provider} connections…",
                description:
                  "Loading state while selecting the user's saved or connected account for repository review settings. The provider is GitHub or GitLab.",
                values: { provider: ee },
              }),
            })),
            (j[6] = ee),
            (j[7] = e))
          : (e = j[7]),
          (o = e))
      } else if (X || D) {
        let e, t, i, s, n
        ;(j[8] !== ee
          ? ((e = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repositories.connections.error.v2",
              defaultMessage: "Unable to load {provider} connections",
              description:
                "Error shown when available accounts or the preferred account cannot be loaded for repository review settings. The provider is GitHub or GitLab.",
              values: { provider: ee },
            })),
            (j[8] = ee),
            (j[9] = e))
          : (e = j[9]),
          j[10] !== K || j[11] !== B
            ? ((t = () => {
                ;(K(), B())
              }),
              (j[10] = K),
              (j[11] = B),
              (j[12] = t))
            : (t = j[12]),
          j[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.connections.retry",
                defaultMessage: "Retry",
                description:
                  "Retry loading available connections and the preferred account for repository review settings.",
              })),
              (j[13] = i))
            : (i = j[13]),
          j[14] !== t
            ? ((s = (0, r.jsx)(w.$, { color: "secondary", size: "toolbar", onClick: t, children: i })),
              (j[14] = t),
              (j[15] = s))
            : (s = j[15]),
          j[16] !== e || j[17] !== s
            ? ((n = (0, r.jsx)(I.t, { children: (0, r.jsx)(N.ic, { label: e, control: s }) })),
              (j[16] = e),
              (j[17] = s),
              (j[18] = n))
            : (n = j[18]),
          (o = n))
      } else if (null == et) {
        let e
        ;(j[19] !== ee
          ? ((e = (0, r.jsx)(_.W, {
              layout: "settings-row",
              children: (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.connections.empty.v2",
                defaultMessage: "Connect a {provider} account to configure repository reviews",
                description:
                  "Empty state when the user has no linked account available for repository review settings. The provider is GitHub or GitLab.",
                values: { provider: ee },
              }),
            })),
            (j[19] = ee),
            (j[20] = e))
          : (e = j[20]),
          (o = e))
      } else {
        let e, t, i
        j[21] !== et.id || j[22] !== W || j[23] !== ee
          ? ((e =
              null != W && W.length > 1
                ? (0, r.jsx)(I.t, {
                    children: (0, r.jsx)(P._P, {
                      label: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repositories.connection.v2",
                        defaultMessage: "{provider} connection",
                        description:
                          "Label for selecting which connected account supplies repositories in review settings, including private server instances. The provider is GitHub or GitLab.",
                        values: { provider: ee },
                      }),
                      value: et.id,
                      options: W.map(O),
                      disabled: !1,
                      onChange: Y,
                      renderLabel: (e) => W.find((t) => t.id === e)?.name,
                    }),
                  })
                : null),
            (j[21] = et.id),
            (j[22] = W),
            (j[23] = ee),
            (j[24] = e))
          : (e = j[24])
        let s = `${et.id}:${G}`
        ;(j[25] !== et.id || j[26] !== G || j[27] !== C || j[28] !== A || j[29] !== s
          ? ((t = (0, r.jsx)($, { provider: A, connectorId: et.id, search: G, onSelectRepository: C }, s)),
            (j[25] = et.id),
            (j[26] = G),
            (j[27] = C),
            (j[28] = A),
            (j[29] = s),
            (j[30] = t))
          : (t = j[30]),
          j[31] !== e || j[32] !== t
            ? ((i = (0, r.jsxs)(r.Fragment, { children: [e, t] })), (j[31] = e), (j[32] = t), (j[33] = i))
            : (i = j[33]),
          (o = i))
      }
      return (
        j[34] !== S
          ? ((a = S.formatMessage({
              id: "settings.codeReview.repositories.provider",
              defaultMessage: "Git provider",
              description: "Accessible label for choosing GitHub or GitLab repositories in cloud review settings",
            })),
            (j[34] = S),
            (j[35] = a))
          : (a = j[35]),
        j[36] === Symbol.for("react.memo_cache_sentinel") ? ((d = ["github", "gitlab"]), (j[36] = d)) : (d = j[36]),
        j[37] !== R || j[38] !== A || j[39] !== a
          ? ((u = (0, r.jsx)(P.wW, {
              "aria-label": a,
              value: A,
              options: d,
              disabled: !1,
              onChange: R,
              renderLabel: z,
            })),
            (j[37] = R),
            (j[38] = A),
            (j[39] = a),
            (j[40] = u))
          : (u = j[40]),
        j[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repositories.title",
              defaultMessage: "Repositories",
              description: "Heading for repositories with configurable code and security reviews",
            })),
            (j[41] = p))
          : (p = j[41]),
        j[42] !== u ? ((g = (0, r.jsx)(M.X.Header, { actions: u, title: p })), (j[42] = u), (j[43] = g)) : (g = j[43]),
        j[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)("p", {
              className: "text-sm text-balance text-secondary",
              children: (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.description",
                defaultMessage: "Choose a repository to configure its automatic reviews",
                description: "Description of the repository list in Code Review settings",
              }),
            })),
            (j[44] = h))
          : (h = j[44]),
        j[45] !== S
          ? ((v = S.formatMessage({
              id: "settings.codeReview.repositories.search.label",
              defaultMessage: "Search repositories",
              description: "Accessible label for the repository search in Code Review settings",
            })),
            (j[45] = S),
            (j[46] = v))
          : (v = j[46]),
        j[47] !== S
          ? ((f = S.formatMessage({
              id: "settings.codeReview.repositories.search.placeholder",
              defaultMessage: "Search repositories",
              description: "Placeholder for the repository search in Code Review settings",
            })),
            (j[47] = S),
            (j[48] = f))
          : (f = j[48]),
        j[49] !== k || j[50] !== f || j[51] !== v
          ? ((m = (0, r.jsx)(q.s, {
              id: "code-review-repository-search",
              inputRole: "searchbox",
              label: v,
              placeholder: f,
              maxLength: 256,
              searchQuery: k,
              onSearchQueryChange: L,
            })),
            (j[49] = k),
            (j[50] = f),
            (j[51] = v),
            (j[52] = m))
          : (m = j[52]),
        j[53] !== o || j[54] !== m
          ? ((y = (0, r.jsxs)(M.X.Content, { children: [h, m, o] })), (j[53] = o), (j[54] = m), (j[55] = y))
          : (y = j[55]),
        j[56] !== y || j[57] !== g
          ? ((b = (0, r.jsxs)(M.X, { children: [g, y] })), (j[56] = y), (j[57] = g), (j[58] = b))
          : (b = j[58]),
        b
      )
    }
    function z(e) {
      return "github" === e ? "GitHub" : "GitLab"
    }
    function O(e) {
      return e.id
    }
    function $(e) {
      let t,
        i,
        o,
        a,
        l,
        d,
        u,
        p = (0, s.c)(33),
        { provider: g, connectorId: h, search: v, onSelectRepository: f } = e
      p[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [null]), (p[0] = t)) : (t = p[0])
      let [m, y] = (0, x.useState)(t)
      ;(p[1] !== m ? ((i = m.at(-1)), (p[1] = m), (p[2] = i)) : (i = p[2]),
        p[3] !== h || p[4] !== g || p[5] !== v || p[6] !== i
          ? ((o = { provider: g, connectorId: h, search: v, nextToken: i }),
            (p[3] = h),
            (p[4] = g),
            (p[5] = v),
            (p[6] = i),
            (p[7] = o))
          : (o = p[7]))
      let { data: b, isError: j, isPending: A, isFetching: R, refetch: C } = (0, n._U)(H.BX, o)
      if (A) {
        let e
        ;(p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(E.j, {
              children: (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.loading",
                defaultMessage: "Loading repositories…",
                description: "Loading state for the repository list in Code Review settings",
              }),
            })),
            (p[8] = e))
          : (e = p[8]),
          (a = e))
      } else if (j || null == b) {
        let e, t, i, s
        ;(p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repositories.error",
              defaultMessage: "Unable to load repositories",
              description: "Error shown when Code Review cannot load the user's repositories",
            })),
            (p[9] = e))
          : (e = p[9]),
          p[10] !== C ? ((t = () => void C()), (p[10] = C), (p[11] = t)) : (t = p[11]),
          p[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, r.jsx)(c.A, {
                id: "settings.codeReview.repositories.retry",
                defaultMessage: "Retry",
                description: "Button to retry loading repositories in Code Review settings",
              })),
              (p[12] = i))
            : (i = p[12]),
          p[13] !== t
            ? ((s = (0, r.jsx)(I.t, {
                children: (0, r.jsx)(N.ic, {
                  label: e,
                  control: (0, r.jsx)(w.$, { color: "secondary", size: "toolbar", onClick: t, children: i }),
                }),
              })),
              (p[13] = t),
              (p[14] = s))
            : (s = p[14]),
          (a = s))
      } else {
        let e, t
        ;(p[15] !== b.repo_review_settings || p[16] !== f
          ? ((e =
              0 === b.repo_review_settings.length
                ? (0, r.jsx)(_.W, {
                    layout: "settings-row",
                    children: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repositories.empty",
                      defaultMessage: "No repositories found",
                      description: "Empty state for the repository list or search in Code Review settings",
                    }),
                  })
                : b.repo_review_settings.map((e) => {
                    var t
                    return (0, r.jsx)(
                      N.kG,
                      {
                        label: e.repository.repository_full_name,
                        description: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repositories.status",
                          defaultMessage:
                            "Automatic code review: {policy, select, off {Off} all {All PRs} team {Team PRs} other {Follow personal preferences}}",
                          description: "Summary of which pull requests are automatically reviewed in a repository",
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
                        trailing: (0, r.jsx)(G.uM3, { className: "text-secondary" }),
                        onClick: () => f(e.repository.id),
                      },
                      e.repository.id,
                    )
                  })),
            (p[15] = b.repo_review_settings),
            (p[16] = f),
            (p[17] = e))
          : (e = p[17]),
          p[18] !== e ? ((t = (0, r.jsx)(I.t, { children: e })), (p[18] = e), (p[19] = t)) : (t = p[19]),
          (a = t))
      }
      return (
        p[20] !== j || p[21] !== A || p[22] !== m || p[23] !== g
          ? ((l =
              j || A || "github" !== g || 125 !== Number(m.at(-1))
                ? null
                : (0, r.jsx)(_.W, {
                    layout: "settings-row",
                    children: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repositories.searchLimit",
                      defaultMessage: "Search by repository name to narrow these results",
                      description:
                        "Guidance after reaching GitHub's repository search pagination limit. Users can change the search to find additional repositories.",
                    }),
                  })),
            (p[20] = j),
            (p[21] = A),
            (p[22] = m),
            (p[23] = g),
            (p[24] = l))
          : (l = p[24]),
        p[25] !== b?.next_token || p[26] !== R || p[27] !== m.length
          ? ((d =
              m.length > 1 || b?.next_token != null
                ? (0, r.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, r.jsx)(w.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: 1 === m.length || R,
                        onClick: () => y(Z),
                        children: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repositories.previous",
                          defaultMessage: "Previous",
                          description: "Button to show the previous page of Code Review repositories",
                        }),
                      }),
                      (0, r.jsx)(w.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: b?.next_token == null || R,
                        onClick: () => {
                          let e = b?.next_token
                          null != e && y((t) => [...t, e])
                        },
                        children: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repositories.next",
                          defaultMessage: "Next",
                          description: "Button to show the next page of Code Review repositories",
                        }),
                      }),
                    ],
                  })
                : null),
            (p[25] = b?.next_token),
            (p[26] = R),
            (p[27] = m.length),
            (p[28] = d))
          : (d = p[28]),
        p[29] !== a || p[30] !== l || p[31] !== d
          ? ((u = (0, r.jsxs)(r.Fragment, { children: [a, l, d] })), (p[29] = a), (p[30] = l), (p[31] = d), (p[32] = u))
          : (u = p[32]),
        u
      )
    }
    function Z(e) {
      return e.slice(0, -1)
    }
    var D = i("cdrE"),
      B = i("OAko"),
      W = i("zKCW"),
      V = i("HOLv"),
      X = i("GDNt"),
      K = i("ZtSy")
    let Q = [
      {
        fileName: "AGENTS.md",
        label: (0, r.jsx)(c.A, {
          id: "settings.codeReview.repository.instructions.fileName",
          defaultMessage: "AGENTS.md",
          description:
            "Name of the repository instruction file. Keep the exact filename AGENTS.md; do not translate it.",
        }),
        description: (0, r.jsx)(c.A, {
          id: "settings.codeReview.repository.instructions.description",
          defaultMessage: "Add review guidelines to AGENTS.md in this repository",
          description:
            "Explanation that users can customize code reviews by adding guidelines to the repository's AGENTS.md file. AGENTS.md is a filename and must not be translated.",
        }),
      },
      {
        fileName: "SECURITY.md",
        label: (0, r.jsx)(c.A, {
          id: "settings.codeReview.repository.instructions.securityFileName",
          defaultMessage: "SECURITY.md",
          description:
            "Name of the repository's security review instruction file in Code review settings. Keep the exact filename SECURITY.md; do not translate it.",
        }),
        description: (0, r.jsx)(c.A, {
          id: "settings.codeReview.repository.instructions.securityDescription",
          defaultMessage: "Add security review guidelines to SECURITY.md in this repository",
          description:
            "Helper text in the Review instructions section of repository Code review settings, explaining how users can guide security reviews. SECURITY.md is a filename and must not be translated.",
        }),
      },
    ]
    function Y(e) {
      let t,
        i,
        o,
        n = (0, s.c)(6),
        { repository: a } = e,
        d = (0, l.A)()
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(M.X.Header, {
              title: (0, r.jsx)(c.A, {
                id: "settings.codeReview.repository.instructions.title",
                defaultMessage: "Review instructions",
                description: "Heading for repository files that provide code review and security review instructions.",
              }),
            })),
            (n[0] = t))
          : (t = n[0]),
        n[1] !== d || n[2] !== a
          ? ((i = Q.map((e) => {
              let { fileName: t, label: i, description: s } = e,
                o = (function (e, t) {
                  let i = URL.parse(e.clone_url)
                  if (null == i || !["https:", "http:"].includes(i.protocol) || !e.default_branch) return null
                  let r = new URL(i.origin),
                    s = e.id.startsWith("gitlab-") ? "-/blob" : "blob"
                  return (
                    (r.pathname = `${i.pathname.replace(/\.git$/, "")}/${s}/${encodeURIComponent(e.default_branch)}/${t}`),
                    r.href
                  )
                })(a, t)
              return (0, r.jsx)(
                N.ic,
                {
                  icon: (0, r.jsx)(G.Z1A, {}),
                  label: i,
                  description: s,
                  control:
                    null != o
                      ? (0, r.jsx)(K.G, {
                          className: "text-sm",
                          appearance: "primary",
                          "aria-label": d.formatMessage(
                            {
                              id: "settings.codeReview.repository.instructions.openFileLabel",
                              defaultMessage: "Open file {fileName}",
                              description:
                                "Accessible name for a link that opens a repository instruction file. fileName is the exact filename, such as AGENTS.md or SECURITY.md, and must not be translated.",
                            },
                            { fileName: t },
                          ),
                          href: o,
                          initiator: "external_link",
                          children: (0, r.jsx)(c.A, {
                            id: "settings.codeReview.repository.instructions.open",
                            defaultMessage: "Open file",
                            description:
                              "Link to a repository instruction file on its default branch in the Git provider.",
                          }),
                        })
                      : null,
                },
                t,
              )
            })),
            (n[1] = d),
            (n[2] = a),
            (n[3] = i))
          : (i = n[3]),
        n[4] !== i
          ? ((o = (0, r.jsxs)(M.X, {
              children: [t, (0, r.jsx)(M.X.Content, { children: (0, r.jsx)(I.t, { children: i }) })],
            })),
            (n[4] = i),
            (n[5] = o))
          : (o = n[5]),
        o
      )
    }
    var J = i("zLIa"),
      ee = i("hZax")
    let et = ["critical", "high", "medium", "low"],
      ei = ["inherit", ...et]
    function er(e) {
      let t,
        i,
        o,
        n,
        a,
        l,
        d,
        u,
        p,
        g,
        h,
        v,
        f,
        m,
        y,
        b,
        _,
        j,
        A,
        C,
        S,
        k,
        M,
        E,
        L,
        I,
        T = (0, s.c)(82),
        { repository: G, preferences: q, disabled: U, onUpdate: H } = e,
        F = (0, ee.Zj)("579168209"),
        z = (0, ee.Zj)("1394080568"),
        [O, $] = (0, x.useState)(!1),
        Z = q.trigger_policy ?? "code_review",
        D = q.threat_model_source ?? "repository_file",
        B = q.severity_threshold ?? "high",
        V = q.blocking_severity_threshold ?? "critical",
        X = et.indexOf(B) >= et.indexOf(V),
        K = !U && !!G.permissions?.admin
      T[0] !== z || T[1] !== G
        ? ((t = z && !G.id.startsWith("gitlab-")), (T[0] = z), (T[1] = G), (T[2] = t))
        : (t = T[2])
      let Q = t
      ;(T[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, r.jsx)(c.A, {
            id: "settings.codeReview.repository.securityTitle",
            defaultMessage: "Review security vulnerabilities",
            description: "Heading for a repository's security review settings.",
          })),
          (T[3] = i))
        : (i = T[3]),
        T[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.securityTrigger",
              defaultMessage: "Trigger",
              description: "Label for when automatic repository security reviews run.",
            })),
            (T[4] = o))
          : (o = T[4]),
        T[5] !== F || T[6] !== Z
          ? ((n =
              F || "smart_detect" === Z
                ? ["pr_open", "every_push", "smart_detect", "code_review"]
                : ["pr_open", "every_push", "code_review"]),
            (T[5] = F),
            (T[6] = Z),
            (T[7] = n))
          : (n = T[7]),
        T[8] !== H ? ((a = (e) => H({ trigger_policy: e })), (T[8] = H), (T[9] = a)) : (a = T[9]),
        T[10] !== U || T[11] !== n || T[12] !== a || T[13] !== Z
          ? ((l = (0, r.jsx)(P._P, { label: o, value: Z, options: n, disabled: U, renderLabel: el, onChange: a })),
            (T[10] = U),
            (T[11] = n),
            (T[12] = a),
            (T[13] = Z),
            (T[14] = l))
          : (l = T[14]),
        T[15] !== U ||
        T[16] !== H ||
        T[17] !== q.codex_security_scan_configuration_id ||
        T[18] !== q.threat_model_source ||
        T[19] !== D
          ? ((d =
              q.codex_security_scan_configuration_id || "codex_security" === q.threat_model_source
                ? (0, r.jsx)(P._P, {
                    label: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repository.threatSource",
                      defaultMessage: "Threat model source",
                      description:
                        "Choose whether repository security reviews use the connected Codex Security threat model or a repository file.",
                    }),
                    value: D,
                    options: q.codex_security_scan_configuration_id
                      ? ["codex_security", "repository_file"]
                      : ["repository_file"],
                    disabled: U,
                    onChange: (e) => H({ threat_model_source: e }),
                    renderLabel: ea,
                  })
                : null),
            (T[15] = U),
            (T[16] = H),
            (T[17] = q.codex_security_scan_configuration_id),
            (T[18] = q.threat_model_source),
            (T[19] = D),
            (T[20] = d))
          : (d = T[20]),
        T[21] !== U || T[22] !== H || T[23] !== q.threat_model_file_path || T[24] !== D
          ? ((u =
              "repository_file" === D
                ? (0, r.jsx)(N.ic, {
                    variant: "stacked",
                    label: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repository.threatPath",
                      defaultMessage: "Path to threat model file in this repository",
                      description: "Label for the repository-relative path to a security threat model file.",
                    }),
                    description: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repository.threatPath.description",
                      defaultMessage:
                        "File path is relative to the repository root. If not specified, Codex generates a threat model for every review.",
                      description:
                        "Help text for a security review threat model path. Leaving the path empty uses a newly generated threat model for each review.",
                    }),
                    control: (e) =>
                      (0, r.jsx)(
                        eu,
                        {
                          ...e,
                          kind: "threat-model",
                          savedPath: q.threat_model_file_path ?? "",
                          disabled: U,
                          onSave: (e) =>
                            H({ threat_model_source: "repository_file", threat_model_file_path: e || null }),
                        },
                        q.threat_model_file_path ?? "",
                      ),
                  })
                : null),
            (T[21] = U),
            (T[22] = H),
            (T[23] = q.threat_model_file_path),
            (T[24] = D),
            (T[25] = u))
          : (u = T[25]),
        T[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.autoSeverity",
              defaultMessage: "Minimum auto review reporting severity",
              description: "Minimum vulnerability severity reported by automatic repository security reviews.",
            })),
            (p = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.autoSeverity.description",
              defaultMessage: "Choose the lowest severity Codex should report for automated reviews",
              description: "Help text for automatic security review severity.",
            })),
            (T[26] = p),
            (T[27] = g))
          : ((p = T[26]), (g = T[27])),
        T[28] !== V || T[29] !== q.merge_gate_enabled
          ? ((h = q.merge_gate_enabled ? et.slice(et.indexOf(V)) : et),
            (T[28] = V),
            (T[29] = q.merge_gate_enabled),
            (T[30] = h))
          : (h = T[30]),
        T[31] !== H ? ((v = (e) => H({ severity_threshold: e })), (T[31] = H), (T[32] = v)) : (v = T[32]),
        T[33] !== U || T[34] !== B || T[35] !== h || T[36] !== v
          ? ((f = (0, r.jsx)(P._P, {
              label: g,
              description: p,
              value: B,
              options: h,
              disabled: U,
              renderLabel: en,
              onChange: v,
            })),
            (T[33] = U),
            (T[34] = B),
            (T[35] = h),
            (T[36] = v),
            (T[37] = f))
          : (f = T[37]),
        T[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.manualSeverity",
              defaultMessage: "Minimum manual review reporting severity",
              description: "Minimum vulnerability severity reported by manually requested repository security reviews.",
            })),
            (y = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.manualSeverity.description",
              defaultMessage: "Choose the lowest severity Codex should report for reviews requested with @codex",
              description: "Help text for manually requested security review severity. Preserve the @codex mention.",
            })),
            (T[38] = m),
            (T[39] = y))
          : ((m = T[38]), (y = T[39])))
      let Y = q.manual_severity_threshold ?? "medium"
      ;(T[40] !== H ? ((b = (e) => H({ manual_severity_threshold: e })), (T[40] = H), (T[41] = b)) : (b = T[41]),
        T[42] !== U || T[43] !== Y || T[44] !== b
          ? ((_ = (0, r.jsx)(P._P, {
              label: m,
              description: y,
              value: Y,
              options: et,
              disabled: U,
              renderLabel: eo,
              onChange: b,
            })),
            (T[42] = U),
            (T[43] = Y),
            (T[44] = b),
            (T[45] = _))
          : (_ = T[45]),
        T[46] !== V ||
        T[47] !== K ||
        T[48] !== X ||
        T[49] !== H ||
        T[50] !== q.merge_gate_enabled ||
        T[51] !== B ||
        T[52] !== Q
          ? ((j = Q
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(W.l, {
                      variant: "settings",
                      content: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repository.mergeAdmin",
                        defaultMessage:
                          "Only GitHub repository admins can change merge protection and blocking severity",
                        description: "Permission notice for security review merge protection controls.",
                      }),
                    }),
                    (0, r.jsx)(N.ic, {
                      label: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repository.mergeProtection",
                        defaultMessage: "Merge protection",
                        description:
                          "Setting to publish a failing GitHub check when security findings exceed the repository's blocking threshold.",
                      }),
                      description: X
                        ? (0, r.jsx)(c.A, {
                            id: "settings.codeReview.repository.mergeProtection.description",
                            defaultMessage:
                              "Publish a GitHub check that fails when Security Review reports a finding at or above the blocking severity. To block merges, also require this check in GitHub.",
                            description:
                              "Help text explaining security review merge protection requires configuring the corresponding required check in GitHub.",
                          })
                        : (0, r.jsx)(c.A, {
                            id: "settings.codeReview.repository.mergeProtection.reportingRequired",
                            defaultMessage:
                              "Choose a blocking severity at least as high as the automatic reporting severity to enable merge protection",
                            description:
                              "Explains how to repair a blocking threshold whose findings would be excluded by the repository's automatic reporting threshold.",
                          }),
                      control: (e) =>
                        (0, r.jsx)(R.l, {
                          ...e,
                          checked: q.merge_gate_enabled ?? !1,
                          disabled: !K || (!q.merge_gate_enabled && !X),
                          onChange: (e) => H({ merge_gate_enabled: e }),
                        }),
                    }),
                    (0, r.jsx)(P._P, {
                      label: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repository.blockingSeverity",
                        defaultMessage: "Blocking severity",
                        description: "Minimum finding severity that fails the security review GitHub check.",
                      }),
                      description: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repository.blockingSeverity.description",
                        defaultMessage:
                          "Choose the lowest finding severity that should fail the Security Review GitHub check",
                        description: "Help text for the security review blocking severity setting.",
                      }),
                      value: V,
                      options: et.slice(0, et.indexOf(B) + 1),
                      disabled: !K,
                      renderLabel: es,
                      onChange: (e) => H({ blocking_severity_threshold: e }),
                    }),
                  ],
                })
              : null),
            (T[46] = V),
            (T[47] = K),
            (T[48] = X),
            (T[49] = H),
            (T[50] = q.merge_gate_enabled),
            (T[51] = B),
            (T[52] = Q),
            (T[53] = j))
          : (j = T[53]),
        T[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.pathRules",
              defaultMessage: "Path-based reporting severity override",
              description: "Heading for security reporting severity overrides for repository paths.",
            })),
            (C = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.pathRules.description",
              defaultMessage: "Override reporting severity for specific repository paths",
              description: "Help text for repository path-specific security severity rules.",
            })),
            (T[54] = A),
            (T[55] = C))
          : ((A = T[54]), (C = T[55])))
      let J = U || O
      return (
        T[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = () => $(!0)),
            (k = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.addPath",
              defaultMessage: "Add path override",
              description: "Button to add a path-specific security reporting severity rule.",
            })),
            (T[56] = S),
            (T[57] = k))
          : ((S = T[56]), (k = T[57])),
        T[58] !== J
          ? ((M = (0, r.jsx)(N.ic, {
              label: A,
              description: C,
              control: (0, r.jsx)(w.$, { color: "secondary", size: "toolbar", disabled: J, onClick: S, children: k }),
            })),
            (T[58] = J),
            (T[59] = M))
          : (M = T[59]),
        T[60] !== U || T[61] !== H || T[62] !== q.path_rules
          ? ((E = q.path_rules?.map((e, t) =>
              (0, r.jsx)(
                ec,
                {
                  rule: e,
                  disabled: U,
                  onUpdate: (e) => H({ path_rules: q.path_rules?.map((i, r) => (r === t ? e : i)) }),
                  onRemove: () => H({ path_rules: q.path_rules?.filter((e, i) => i !== t) }),
                },
                `${t}-${e.path_prefix}`,
              ),
            )),
            (T[60] = U),
            (T[61] = H),
            (T[62] = q.path_rules),
            (T[63] = E))
          : (E = T[63]),
        T[64] !== O || T[65] !== U || T[66] !== H || T[67] !== q.path_rules
          ? ((L = O
              ? (0, r.jsx)(N.ic, {
                  variant: "stacked",
                  label: (0, r.jsx)(c.A, {
                    id: "settings.codeReview.repository.newPath",
                    defaultMessage: "Repository path prefix",
                    description: "Label for the path prefix of a new security review severity override.",
                  }),
                  control: (e) =>
                    (0, r.jsx)(eu, {
                      ...e,
                      kind: "override",
                      savedPath: "",
                      disabled: U,
                      onCancel: () => $(!1),
                      onSave: (e) =>
                        H(
                          {
                            path_rules: [
                              ...(q.path_rules ?? []),
                              { path_prefix: e, auto_severity_threshold: null, manual_severity_threshold: null },
                            ],
                          },
                          () => $(!1),
                        ),
                    }),
                })
              : null),
            (T[64] = O),
            (T[65] = U),
            (T[66] = H),
            (T[67] = q.path_rules),
            (T[68] = L))
          : (L = T[68]),
        T[69] !== U ||
        T[70] !== H ||
        T[71] !== q ||
        T[72] !== f ||
        T[73] !== _ ||
        T[74] !== j ||
        T[75] !== M ||
        T[76] !== E ||
        T[77] !== L ||
        T[78] !== l ||
        T[79] !== d ||
        T[80] !== u
          ? ((I = (0, r.jsxs)(P.SA, {
              security: !0,
              preferences: q,
              disabled: U,
              onUpdate: H,
              title: i,
              children: [l, d, u, f, _, j, M, E, L],
            })),
            (T[69] = U),
            (T[70] = H),
            (T[71] = q),
            (T[72] = f),
            (T[73] = _),
            (T[74] = j),
            (T[75] = M),
            (T[76] = E),
            (T[77] = L),
            (T[78] = l),
            (T[79] = d),
            (T[80] = u),
            (T[81] = I))
          : (I = T[81]),
        I
      )
    }
    function es(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function eo(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function en(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function ea(e) {
      return (0, r.jsx)(c.A, {
        id: "settings.codeReview.repository.threatSource.option",
        defaultMessage: "{value, select, codex_security {Codex Security} other {Repository file}}",
        description:
          "Options for a repository security review threat model: Codex Security or a file in the repository.",
        values: { value: e },
      })
    }
    function el(e) {
      return (0, r.jsx)(P.dN, { value: e })
    }
    function ec(e) {
      let t,
        i,
        o,
        n,
        a,
        d,
        u = (0, s.c)(17),
        { rule: p, disabled: g, onUpdate: h, onRemove: v } = e,
        f = (0, l.A)()
      return (
        u[0] !== p.path_prefix
          ? ((t = (0, r.jsx)("span", { className: "font-mono select-text", children: p.path_prefix })),
            (u[0] = p.path_prefix),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== g || u[3] !== f || u[4] !== h || u[5] !== p
          ? ((i = ["auto_severity_threshold", "manual_severity_threshold"].map((e) =>
              (0, r.jsxs)(
                x.Fragment,
                {
                  children: [
                    (0, r.jsx)("span", {
                      className: "text-sm text-secondary",
                      children: (0, r.jsx)(c.A, {
                        id: "settings.codeReview.repository.pathRule.label",
                        defaultMessage: "{field, select, auto_severity_threshold {Automatic} other {Manual}}",
                        description:
                          "Label for the automatic or manual security review severity of a repository path override.",
                        values: { field: e },
                      }),
                    }),
                    (0, r.jsx)(P.wW, {
                      "aria-label": f.formatMessage(
                        {
                          id: "settings.codeReview.repository.pathRule.severity",
                          defaultMessage:
                            "{field, select, auto_severity_threshold {Automatic} other {Manual}} review severity for {path}",
                          description:
                            "Accessible label for a path override's automatic or manual security reporting severity. Path is the configured repository path.",
                        },
                        { field: e, path: p.path_prefix },
                      ),
                      value: p[e] ?? "inherit",
                      options: ei,
                      disabled: g,
                      renderLabel: ed,
                      onChange: (t) => h({ ...p, [e]: "inherit" === t ? null : t }),
                    }),
                  ],
                },
                e,
              ),
            )),
            (u[2] = g),
            (u[3] = f),
            (u[4] = h),
            (u[5] = p),
            (u[6] = i))
          : (i = u[6]),
        u[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.removePath",
              defaultMessage: "Remove",
              description: "Remove this repository path's security reporting severity override.",
            })),
            (u[7] = o))
          : (o = u[7]),
        u[8] !== g || u[9] !== v
          ? ((n = (0, r.jsx)(w.$, { color: "ghost", size: "toolbar", disabled: g, onClick: v, children: o })),
            (u[8] = g),
            (u[9] = v),
            (u[10] = n))
          : (n = u[10]),
        u[11] !== i || u[12] !== n
          ? ((a = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [i, n] })),
            (u[11] = i),
            (u[12] = n),
            (u[13] = a))
          : (a = u[13]),
        u[14] !== t || u[15] !== a
          ? ((d = (0, r.jsx)(N.ic, { label: t, variant: "stacked", control: a })),
            (u[14] = t),
            (u[15] = a),
            (u[16] = d))
          : (d = u[16]),
        d
      )
    }
    function ed(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function eu(e) {
      let t,
        i,
        o,
        n,
        a,
        d,
        u,
        p,
        g,
        h,
        v,
        f,
        m,
        y = (0, s.c)(35)
      y[0] !== e
        ? (({ kind: o, savedPath: d, disabled: i, onSave: a, onCancel: n, ...t } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = i),
          (y[3] = o),
          (y[4] = n),
          (y[5] = a),
          (y[6] = d))
        : ((t = y[1]), (i = y[2]), (o = y[3]), (n = y[4]), (a = y[5]), (d = y[6]))
      let b = (0, l.A)(),
        [_, j] = (0, x.useState)(d),
        A = "override" === o
      y[7] !== _ ? ((u = _.trim()), (y[7] = _), (y[8] = u)) : (u = y[8])
      let R = u !== d
      return (
        y[9] !== R || y[10] !== i || y[11] !== a || y[12] !== _
          ? ((p = (e) => {
              ;(e.preventDefault(), !i && R && a(_.trim()))
            }),
            (y[9] = R),
            (y[10] = i),
            (y[11] = a),
            (y[12] = _),
            (y[13] = p))
          : (p = y[13]),
        y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e) => j(e.currentTarget.value)), (y[14] = g))
          : (g = y[14]),
        y[15] !== A || y[16] !== b
          ? ((h = A
              ? b.formatMessage({
                  id: "settings.codeReview.repository.newPath.placeholder",
                  defaultMessage: "src/",
                  description:
                    "Example directory prefix for a repository security review override; preserve path syntax.",
                })
              : b.formatMessage({
                  id: "settings.codeReview.repository.threatPath.placeholder",
                  defaultMessage: "docs/threat-model.md",
                  description:
                    "Example repository-relative Markdown path for a threat model file; preserve the file path syntax.",
                })),
            (y[15] = A),
            (y[16] = b),
            (y[17] = h))
          : (h = y[17]),
        y[18] !== A || y[19] !== t || y[20] !== i || y[21] !== o || y[22] !== _ || y[23] !== h
          ? ((v = (0, r.jsx)(J.pd, {
              ...t,
              name: o,
              value: _,
              onChange: g,
              disabled: i,
              autoFocus: A,
              placeholder: h,
            })),
            (y[18] = A),
            (y[19] = t),
            (y[20] = i),
            (y[21] = o),
            (y[22] = _),
            (y[23] = h),
            (y[24] = v))
          : (v = y[24]),
        y[25] !== A || y[26] !== R || y[27] !== i || y[28] !== n || y[29] !== d
          ? ((f =
              A || R
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(w.$, {
                        type: "submit",
                        color: "primary",
                        size: "toolbar",
                        disabled: i || !R,
                        children: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repository.savePathEdit",
                          defaultMessage: "{adding, select, true {Add} other {Save}}",
                          description: "Submit a new path override or save an edited threat model file path.",
                          values: { adding: String(A) },
                        }),
                      }),
                      (0, r.jsx)(w.$, {
                        color: "ghost",
                        size: "toolbar",
                        disabled: i,
                        onClick: () => {
                          ;(j(d), n?.())
                        },
                        children: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repository.cancelPathEdit",
                          defaultMessage: "Cancel",
                          description: "Discard an unsaved repository path override or threat model file path edit.",
                        }),
                      }),
                    ],
                  })
                : null),
            (y[25] = A),
            (y[26] = R),
            (y[27] = i),
            (y[28] = n),
            (y[29] = d),
            (y[30] = f))
          : (f = y[30]),
        y[31] !== p || y[32] !== v || y[33] !== f
          ? ((m = (0, r.jsxs)("form", { className: "flex items-center gap-2", onSubmit: p, children: [v, f] })),
            (y[31] = p),
            (y[32] = v),
            (y[33] = f),
            (y[34] = m))
          : (m = y[34]),
        m
      )
    }
    function ep(e) {
      let t,
        i,
        o,
        a,
        l,
        d,
        u,
        p,
        g,
        h = (0, s.c)(29),
        { repositoryId: v, onBack: f } = e,
        { data: m, isError: y, isFetching: x, refetch: b } = (0, n._U)(H._E, v),
        { isPending: _, error: j, mutate: A } = (0, n._U)(H.uH, v),
        R = m?.edit_blocked_reason === null,
        C = _ || x || y || !R,
        S = j instanceof X.fk ? String(j.status) : "save"
      ;("409" === S && m?.funding_authorization_required && (S = "funding"),
        y && (S = "load"),
        h[0] !== A || h[1] !== m || h[2] !== v
          ? ((t = (e, t) => {
              null != m &&
                A(
                  {
                    repository: v,
                    review_preference: m.review_preference,
                    funding_generation: m.funding_generation,
                    ...e,
                  },
                  { onSuccess: t },
                )
            }),
            (h[0] = A),
            (h[1] = m),
            (h[2] = v),
            (h[3] = t))
          : (t = h[3]))
      let M = t,
        N = m?.repository.repository_full_name
      return (
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(G.z_d, {})),
            (o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.back",
              defaultMessage: "Code review",
              description: "Back button from repository review settings to the code review settings overview.",
            })),
            (h[4] = i),
            (h[5] = o))
          : ((i = h[4]), (o = h[5])),
        h[6] !== f
          ? ((a = (0, r.jsxs)(w.$, { color: "ghost", size: "toolbar", onClick: f, children: [i, o] })),
            (h[6] = f),
            (h[7] = a))
          : (a = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.subtitle",
              defaultMessage: "Manage how Codex reviews this repository",
              description: "Subtitle of the repository code and security review settings page.",
            })),
            (h[8] = l))
          : (l = h[8]),
        h[9] !== j || h[10] !== S || h[11] !== y || h[12] !== b
          ? ((d =
              y || null != j
                ? (0, r.jsx)(W.l, {
                    type: "error",
                    variant: "settings",
                    role: "alert",
                    content: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repository.error",
                      defaultMessage:
                        "{kind, select, load {Unable to load repository settings. Try again. If this continues, check that the correct GitHub or GitLab account is connected and ChatGPT has access to this repository. You may need to reconnect your account.} funding {Workspace funding was removed. Reviews for all PRs require it to be reconnected.} 403 {You do not have permission to change these repository settings} 409 {Repository settings changed. Review the current settings and try again.} other {Unable to save repository settings. Try again.}}",
                      description:
                        "Repository settings error. A load failure suggests retrying, then checking the connected GitHub or GitLab account and ChatGPT's repository access, with reconnection as a possible fix. Funding requires explicit reconnection; a conflict requires reviewing refreshed settings. PR means pull request.",
                      values: { kind: S },
                    }),
                    primaryCtaText:
                      "funding" !== S
                        ? (0, r.jsx)(c.A, {
                            id: "settings.codeReview.repository.retryAction",
                            defaultMessage: "{kind, select, load {Retry} other {Refresh}}",
                            description:
                              "Reload repository settings after a failed read or save. This does not retry a save or reconnect funding.",
                            values: { kind: S },
                          })
                        : void 0,
                    onPrimaryCtaClick: () => void b(),
                  })
                : null),
            (h[9] = j),
            (h[10] = S),
            (h[11] = y),
            (h[12] = b),
            (h[13] = d))
          : (d = h[13]),
        h[14] !== y || h[15] !== m
          ? ((u =
              null != m || y
                ? null
                : (0, r.jsx)(E.j, {
                    children: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.repository.loading",
                      defaultMessage: "Loading repository settings…",
                      description: "Status while fetching repository review settings.",
                    }),
                  })),
            (h[14] = y),
            (h[15] = m),
            (h[16] = u))
          : (u = h[16]),
        h[17] !== R || h[18] !== C || h[19] !== m || h[20] !== M
          ? ((p =
              null != m
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(W.l, {
                        variant: "settings",
                        layout: "verticalIcon",
                        icon: (0, r.jsx)(V.I, { asset: D.Z }),
                        title: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repository.sharedSettingsTitle",
                          defaultMessage: "Shared repository settings",
                          description:
                            "Heading for the notice that repository review settings are shared among contributors.",
                        }),
                        content: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.repository.sharedSettingsNotice",
                          defaultMessage:
                            "{reason, select, allowed {These shared settings control reviews for this repository} repository_admin_required {Only repository admins can change these shared review settings} repository_write_access_required {You need repository admin or push access to change these shared review settings} other {You don't have permission to change these shared review settings}}",
                          description:
                            "Notice above shared repository review settings. The allowed case identifies repository review settings that are shared among contributors. Otherwise the reason identifies the access required to edit: repository admin, repository admin or push access, or an unspecified permission restriction.",
                          values: { reason: R ? "allowed" : m.edit_blocked_reason },
                        }),
                      }),
                      m.funding_authorization_required
                        ? (0, r.jsx)(eg, { disabled: C, onAllow: () => M({ authorize_funding: !0 }) })
                        : null,
                      (0, r.jsx)(eh, { repository: m, disabled: C, onUpdate: M }),
                      null != m.security_review
                        ? (0, r.jsx)(er, {
                            repository: m.repository,
                            preferences: m.security_review,
                            disabled: C,
                            onUpdate: (e, t) => M({ security_review: e }, t),
                          })
                        : null,
                      (0, r.jsx)(Y, { repository: m.repository }),
                    ],
                  })
                : null),
            (h[17] = R),
            (h[18] = C),
            (h[19] = m),
            (h[20] = M),
            (h[21] = p))
          : (p = h[21]),
        h[22] !== _ || h[23] !== N || h[24] !== a || h[25] !== d || h[26] !== u || h[27] !== p
          ? ((g = (0, r.jsxs)(k.P, {
              className: "select-none",
              "aria-busy": _,
              title: N,
              backSlot: a,
              subtitle: l,
              children: [d, u, p],
            })),
            (h[22] = _),
            (h[23] = N),
            (h[24] = a),
            (h[25] = d),
            (h[26] = u),
            (h[27] = p),
            (h[28] = g))
          : (g = h[28]),
        g
      )
    }
    function eg(e) {
      let t,
        i,
        o,
        n,
        a = (0, s.c)(8),
        { disabled: l, onAllow: d } = e
      a[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (a[0] = t)) : (t = a[0])
      let { data: u } = (0, B.YL)(void 0, t)
      ;(a[1] !== u
        ? ((i =
            null == u
              ? (0, r.jsx)(c.A, {
                  id: "settings.codeReview.repository.funding",
                  defaultMessage:
                    "Workspace funding was removed from this repository. Reconnect funding to run automatic reviews.",
                  description:
                    "Notice when repository review funding was revoked and must be explicitly reauthorized before reviews run.",
                })
              : (0, r.jsx)(c.A, {
                  id: "settings.codeReview.repository.allowFunding",
                  defaultMessage:
                    "Allow {account} to fund automatic reviews for this repository? Review preferences will stay the same.",
                  description:
                    "Explicit consent to reconnect repository funding to the selected account. The account value is the current account name.",
                  values: { account: u.name },
                })),
          (a[1] = u),
          (a[2] = i))
        : (i = a[2]),
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.allowFundingAction",
              defaultMessage: "Allow funding",
              description:
                "Explicitly authorize the selected account to pay for automatic repository reviews after funding was removed.",
            })),
            (a[3] = o))
          : (o = a[3]))
      let p = l || null == u
      return (
        a[4] !== d || a[5] !== i || a[6] !== p
          ? ((n = (0, r.jsx)(W.l, {
              variant: "settings",
              content: i,
              primaryCtaText: o,
              isPrimaryCtaDisabled: p,
              onPrimaryCtaClick: d,
            })),
            (a[4] = d),
            (a[5] = i),
            (a[6] = p),
            (a[7] = n))
          : (n = a[7]),
        n
      )
    }
    function eh(e) {
      let t,
        i,
        o,
        n,
        a,
        l,
        d,
        u,
        p,
        g,
        h = (0, s.c)(23),
        { repository: v, disabled: f, onUpdate: m } = e,
        y = null == v.exhaustive_code_review ? "personal" : "off"
      ;(!0 === v.exhaustive_code_review && (y = "on"),
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.codeTitle",
              defaultMessage: "Review code",
              description: "Heading for repository automatic code review settings.",
            })),
            (h[0] = t))
          : (t = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.codeTrigger",
              defaultMessage: "Trigger",
              description: "Label for when repository code reviews are triggered.",
            })),
            (h[1] = i))
          : (i = h[1]))
      let x = v.code_review_trigger_policy ?? "personal"
      return (
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = ["personal", "pr_open", "every_push", "smart_detect"]), (h[2] = o))
          : (o = h[2]),
        h[3] !== m
          ? ((n = (e) => m({ code_review_trigger_policy: "personal" === e ? null : e })), (h[3] = m), (h[4] = n))
          : (n = h[4]),
        h[5] !== f || h[6] !== x || h[7] !== n
          ? ((a = (0, r.jsx)(P._P, { label: i, value: x, options: o, renderLabel: ef, disabled: f, onChange: n })),
            (h[5] = f),
            (h[6] = x),
            (h[7] = n),
            (h[8] = a))
          : (a = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(c.A, {
              id: "settings.codeReview.repository.exhaustive",
              defaultMessage: "Exhaustive review",
              description: "Label for repository exhaustive code review, which continues searching for new findings.",
            })),
            (h[9] = l))
          : (l = h[9]),
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = ["personal", "on", "off"]), (h[10] = d))
          : (d = h[10]),
        h[11] !== m
          ? ((u = (e) => m({ exhaustive_code_review: "personal" === e ? null : "on" === e })), (h[11] = m), (h[12] = u))
          : (u = h[12]),
        h[13] !== f || h[14] !== y || h[15] !== u
          ? ((p = (0, r.jsx)(P._P, { label: l, value: y, options: d, disabled: f, onChange: u, renderLabel: ev })),
            (h[13] = f),
            (h[14] = y),
            (h[15] = u),
            (h[16] = p))
          : (p = h[16]),
        h[17] !== f || h[18] !== m || h[19] !== v || h[20] !== p || h[21] !== a
          ? ((g = (0, r.jsxs)(P.SA, { preferences: v, disabled: f, onUpdate: m, title: t, children: [a, p] })),
            (h[17] = f),
            (h[18] = m),
            (h[19] = v),
            (h[20] = p),
            (h[21] = a),
            (h[22] = g))
          : (g = h[22]),
        g
      )
    }
    function ev(e) {
      return (0, r.jsx)(c.A, {
        id: "settings.codeReview.repository.exhaustive.option",
        defaultMessage: "{value, select, personal {Follow personal preferences} on {On} other {Off}}",
        description:
          "Choices for exhaustive repository code reviews: inherit the contributor's preference, enable, or disable.",
        values: { value: e },
      })
    }
    function ef(e) {
      return (0, r.jsx)(P.dN, { value: e })
    }
    let em = ["critical", "high", "medium", "low"]
    function ey(e) {
      let t,
        i,
        o,
        n,
        a,
        l,
        d,
        u,
        p,
        g,
        h,
        v,
        f,
        m,
        y,
        x,
        b,
        w,
        _,
        j = (0, s.c)(47),
        { disabled: A, preferences: S, allowCreditsForSecurityReviews: k, onUpdate: E } = e,
        L = (0, ee.Zj)("579168209"),
        { data: G } = (0, T.Zl)(),
        { canManageCreditSettings: q } = (0, C.AH)(),
        U = S.trigger_policy ?? "code_review"
      ;(j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(M.X.Header, {
            title: (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.title",
              defaultMessage: "Personal security review preferences",
              description: "Title for personal security review preferences",
            }),
          })),
          (j[0] = t))
        : (t = j[0]),
        j[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.autoReview.label",
              defaultMessage: "Automatic security review",
              description: "Label for automatic security review preference",
            })),
            (o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.autoReview.description",
              defaultMessage:
                "If a repository’s review setting differs from your personal preference, the repository setting takes priority",
              description: "Description for automatic security review preference",
            })),
            (j[1] = i),
            (j[2] = o))
          : ((i = j[1]), (o = j[2])),
        j[3] !== A || j[4] !== E || j[5] !== S.preference
          ? ((n = (0, r.jsx)(N.ic, {
              label: i,
              description: o,
              control: (e) =>
                (0, r.jsx)(R.l, {
                  ...e,
                  checked: "always" === S.preference,
                  disabled: A,
                  onChange: (e) => {
                    E({ security_review: { preference: e ? "always" : "repo_default" } })
                  },
                }),
            })),
            (j[3] = A),
            (j[4] = E),
            (j[5] = S.preference),
            (j[6] = n))
          : (n = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.trigger.label",
              defaultMessage: "Security review trigger",
              description: "Label for security review trigger preference",
            })),
            (l = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.trigger.description",
              defaultMessage: "Choose when Codex should review your pull requests for security",
              description: "Description for security review trigger preference",
            })),
            (j[7] = a),
            (j[8] = l))
          : ((a = j[7]), (l = j[8])),
        j[9] !== L || j[10] !== U
          ? ((d =
              L || "smart_detect" === U
                ? ["pr_open", "every_push", "smart_detect", "code_review"]
                : ["pr_open", "every_push", "code_review"]),
            (j[9] = L),
            (j[10] = U),
            (j[11] = d))
          : (d = j[11]),
        j[12] !== E
          ? ((u = (e) => E({ security_review: { trigger_policy: e } })), (j[12] = E), (j[13] = u))
          : (u = j[13]),
        j[14] !== A || j[15] !== d || j[16] !== u || j[17] !== U
          ? ((p = (0, r.jsx)(P._P, {
              label: a,
              description: l,
              value: U,
              options: d,
              disabled: A,
              onChange: u,
              renderLabel: ej,
              renderDescription: e_,
            })),
            (j[14] = A),
            (j[15] = d),
            (j[16] = u),
            (j[17] = U),
            (j[18] = p))
          : (p = j[18]),
        j[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.autoSeverity.label",
              defaultMessage: "Minimum automatic review reporting severity",
              description: "Label for the minimum automatic security review severity",
            })),
            (h = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.autoSeverity.description",
              defaultMessage: "Choose the lowest severity reported for automated reviews",
              description: "Description for the minimum automatic security review severity",
            })),
            (j[19] = g),
            (j[20] = h))
          : ((g = j[19]), (h = j[20])))
      let H = S.severity_threshold ?? "high"
      ;(j[21] !== E
        ? ((v = (e) => E({ security_review: { severity_threshold: e } })), (j[21] = E), (j[22] = v))
        : (v = j[22]),
        j[23] !== A || j[24] !== H || j[25] !== v
          ? ((f = (0, r.jsx)(P._P, {
              label: g,
              description: h,
              disabled: A,
              value: H,
              options: em,
              onChange: v,
              renderLabel: ew,
            })),
            (j[23] = A),
            (j[24] = H),
            (j[25] = v),
            (j[26] = f))
          : (f = j[26]),
        j[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.manualSeverity.label",
              defaultMessage: "Minimum manual review reporting severity",
              description: "Label for the minimum manual security review severity",
            })),
            (y = (0, r.jsx)(c.A, {
              id: "settings.codeReview.security.manualSeverity.description",
              defaultMessage: "Choose the lowest severity reported for reviews requested with @codex",
              description: "Description for the minimum manual security review severity",
            })),
            (j[27] = m),
            (j[28] = y))
          : ((m = j[27]), (y = j[28])))
      let F = S.manual_severity_threshold ?? "medium"
      return (
        j[29] !== E
          ? ((x = (e) => E({ security_review: { manual_severity_threshold: e } })), (j[29] = E), (j[30] = x))
          : (x = j[30]),
        j[31] !== A || j[32] !== F || j[33] !== x
          ? ((b = (0, r.jsx)(P._P, {
              label: m,
              description: y,
              disabled: A,
              value: F,
              options: em,
              onChange: x,
              renderLabel: eb,
            })),
            (j[31] = A),
            (j[32] = F),
            (j[33] = x),
            (j[34] = b))
          : (b = j[34]),
        j[35] !== k || j[36] !== q || j[37] !== A || j[38] !== E || j[39] !== G?.security_review_credits_available
          ? ((w =
              q && (G?.security_review_credits_available === !0 || !0 === k) && null != k
                ? (0, r.jsx)(N.ic, {
                    label: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.security.credits.label",
                      defaultMessage: "Use credits for security reviews",
                      description:
                        "Independent opt-in allowing personal credits to fund security reviews after the shared Codex allowance is exhausted",
                    }),
                    description: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.security.credits.description",
                      defaultMessage:
                        "Security reviews use this account's shared Codex allowance. Turn this on to use credits after that allowance runs out. This also applies to 'Review Everyone' security reviews you've enabled. <link>View usage</link>.",
                      description:
                        "Security review credit consent also covers the user's Review Everyone automation. The link opens this account's usage settings.",
                      values: { link: ex },
                    }),
                    control: (e) =>
                      (0, r.jsx)(R.l, {
                        ...e,
                        checked: k,
                        disabled: A,
                        onChange: (e) => E({ allow_credits_for_security_reviews: e }),
                      }),
                  })
                : null),
            (j[35] = k),
            (j[36] = q),
            (j[37] = A),
            (j[38] = E),
            (j[39] = G?.security_review_credits_available),
            (j[40] = w))
          : (w = j[40]),
        j[41] !== f || j[42] !== b || j[43] !== w || j[44] !== n || j[45] !== p
          ? ((_ = (0, r.jsxs)(M.X, {
              children: [t, (0, r.jsx)(M.X.Content, { children: (0, r.jsxs)(I.t, { children: [n, p, f, b, w] }) })],
            })),
            (j[41] = f),
            (j[42] = b),
            (j[43] = w),
            (j[44] = n),
            (j[45] = p),
            (j[46] = _))
          : (_ = j[46]),
        _
      )
    }
    function ex(e) {
      return (0, r.jsx)(b.N_, {
        className: "cursor-interaction text-info hover:underline",
        to: "/settings/usage",
        children: e,
      })
    }
    function eb(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function ew(e) {
      return (0, r.jsx)(P.Qt, { value: e })
    }
    function e_(e) {
      return (0, r.jsx)(c.A, {
        id: "settings.codeReview.security.trigger.option.description",
        defaultMessage:
          "{policy, select, pr_open {Review when a pull request is opened.} every_push {Review again whenever new commits are pushed after the initial review.} smart_detect {Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.} code_review {Review whenever Codex runs a code review.} other {}}",
        description: "Explanation for each security review trigger option",
        values: { policy: e },
      })
    }
    function ej(e) {
      return (0, r.jsx)(P.dN, { value: e })
    }
    function eA(e) {
      let t,
        i,
        o,
        a,
        l,
        d,
        u,
        p,
        g,
        h = (0, s.c)(48),
        { appPreferences: v, provider: f } = e,
        { repositoryId: m } = (0, b.g)(),
        y = (0, b.Zp)(),
        { search: w } = (0, b.zy)(),
        [R, C] = (0, b.ok)()
      h[0] !== R ? ((t = R.get("provider")), (h[0] = R), (h[1] = t)) : (t = h[1])
      let M = t,
        E = "github" === M || "gitlab" === M ? M : void 0 === f ? "github" : f,
        N = (0, n.Ul)(S.T)
      h[2] !== N.app.visible || h[3] !== N.cloud.visible || h[4] !== R
        ? ((i = N.app.visible && (!N.cloud.visible || "app" === R.get("tab"))),
          (h[2] = N.app.visible),
          (h[3] = N.cloud.visible),
          (h[4] = R),
          (h[5] = i))
        : (i = h[5])
      let I = i,
        T = N.cloud.visible && N.app.visible,
        P = I ? "app" : "cloud",
        G = (0, x.useId)(),
        q = `${G}-app`,
        U = `${G}-cloud`
      if (null != m && N.cloud.visible) {
        let e, t
        return (
          h[6] !== y || h[7] !== w
            ? ((e = () => void y({ pathname: "/settings/code-review", search: w })), (h[6] = y), (h[7] = w), (h[8] = e))
            : (e = h[8]),
          h[9] !== m || h[10] !== e
            ? ((t = (0, r.jsx)(ep, { repositoryId: m, onBack: e }, m)), (h[9] = m), (h[10] = e), (h[11] = t))
            : (t = h[11]),
          t
        )
      }
      ;(h[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, r.jsx)(L.s, { slug: "code-review" })), (h[12] = o))
        : (o = h[12]),
        h[13] !== q || h[14] !== U || h[15] !== P || h[16] !== C || h[17] !== T
          ? ((a = T
              ? (0, r.jsx)(j.J1, {
                  className: "-top-(--padding-panel) -mt-(--padding-panel) pt-panel",
                  fadeSize: "compact",
                  children: (0, r.jsx)(A.t, {
                    variant: "settings",
                    scrollable: !0,
                    ariaLabel: "Code Review",
                    selectedKey: P,
                    onSelect: (e) => {
                      e !== P && C((t) => (t.set("tab", e), t))
                    },
                    tabs: [
                      {
                        key: "app",
                        panelId: q,
                        name: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.privateTab",
                          defaultMessage: "Preferences",
                          description: "Tab for Code Review behavior and review instructions in the desktop app",
                        }),
                      },
                      {
                        key: "cloud",
                        panelId: U,
                        name: (0, r.jsx)(c.A, {
                          id: "settings.codeReview.cloudTab",
                          defaultMessage: "Review agent",
                          description: "Tab for configuring the agent that runs cloud code and security reviews",
                        }),
                      },
                    ],
                  }),
                })
              : null),
            (h[13] = q),
            (h[14] = U),
            (h[15] = P),
            (h[16] = C),
            (h[17] = T),
            (h[18] = a))
          : (a = h[18]),
        h[19] !== N.app.error || h[20] !== N.app.visible || h[21] !== N.cloud.error || h[22] !== N.cloud.visible
          ? ((l =
              !N.app.visible && !N.cloud.visible && (N.app.error || N.cloud.error)
                ? (0, r.jsx)(_.W, {
                    layout: "settings-row",
                    children: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.access.error",
                      defaultMessage: "Unable to load review access. Try again in a moment.",
                      description: "Error when checking whether code review settings are available",
                    }),
                  })
                : null),
            (h[19] = N.app.error),
            (h[20] = N.app.visible),
            (h[21] = N.cloud.error),
            (h[22] = N.cloud.visible),
            (h[23] = l))
          : (l = h[23]))
      let H = T ? "tabpanel" : void 0,
        z = T ? `${q}-tab` : void 0,
        O = !I,
        $ = I ? v : null
      h[24] !== q || h[25] !== $ || h[26] !== H || h[27] !== z || h[28] !== O
        ? ((d = (0, r.jsx)("div", {
            id: q,
            role: H,
            "aria-labelledby": z,
            hidden: O,
            className: "flex flex-col gap-[inherit]",
            children: $,
          })),
          (h[24] = q),
          (h[25] = $),
          (h[26] = H),
          (h[27] = z),
          (h[28] = O),
          (h[29] = d))
        : (d = h[29])
      let Z = T ? "tabpanel" : void 0,
        D = T ? `${U}-tab` : void 0,
        B = I || !N.cloud.visible
      return (
        h[30] !== N.cloud.visible || h[31] !== y || h[32] !== E || h[33] !== w || h[34] !== C || h[35] !== I
          ? ((u =
              !I && N.cloud.visible
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(
                        F,
                        {
                          provider: E,
                          onProviderChange: (e) => {
                            C((t) => (t.set("provider", e), t))
                          },
                          onSelectRepository: (e) =>
                            void y({
                              pathname: `/settings/code-review/repositories/${encodeURIComponent(e)}`,
                              search: w,
                            }),
                        },
                        E,
                      ),
                      (0, r.jsx)(eR, {}),
                    ],
                  })
                : null),
            (h[30] = N.cloud.visible),
            (h[31] = y),
            (h[32] = E),
            (h[33] = w),
            (h[34] = C),
            (h[35] = I),
            (h[36] = u))
          : (u = h[36]),
        h[37] !== U || h[38] !== Z || h[39] !== D || h[40] !== B || h[41] !== u
          ? ((p = (0, r.jsx)("div", {
              id: U,
              role: Z,
              "aria-labelledby": D,
              hidden: B,
              className: "flex flex-col gap-[inherit]",
              children: u,
            })),
            (h[37] = U),
            (h[38] = Z),
            (h[39] = D),
            (h[40] = B),
            (h[41] = u),
            (h[42] = p))
          : (p = h[42]),
        h[43] !== d || h[44] !== p || h[45] !== a || h[46] !== l
          ? ((g = (0, r.jsxs)(k.P, { className: "select-none", title: o, children: [a, l, d, p] })),
            (h[43] = d),
            (h[44] = p),
            (h[45] = a),
            (h[46] = l),
            (h[47] = g))
          : (g = h[47]),
        g
      )
    }
    function eR() {
      let e,
        t,
        i,
        o,
        a,
        d,
        u,
        p,
        g,
        h,
        m,
        y,
        x,
        b,
        _,
        j,
        A,
        S = (0, s.c)(51),
        k = (0, n.gh)(f.u),
        L = (0, l.A)(),
        { data: G, isError: q, refetch: U } = (0, T.wJ)(),
        { mutate: H, isPending: F } = (0, T.sN)(),
        { canManageCreditSettings: z } = (0, C.AH)()
      S[0] !== L || S[1] !== H || S[2] !== k
        ? ((e = (e) => {
            H(e, {
              onError: () => {
                k.get(v.Id).danger(
                  L.formatMessage({
                    id: "settings.codeReview.save.error",
                    defaultMessage: "Unable to save code review settings",
                    description: "Toast shown when saving code review settings fails",
                  }),
                  { errorAnalytics: { toastId: "settings.codeReview.save.error" } },
                )
              },
            })
          }),
          (S[0] = L),
          (S[1] = H),
          (S[2] = k),
          (S[3] = e))
        : (e = S[3])
      let O = e
      if (null == G) {
        let e
        if (q) {
          let e, t, i, s
          return (
            S[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(c.A, {
                  id: "settings.codeReview.error",
                  defaultMessage: "Unable to load code review settings",
                  description: "Error state for code review settings",
                })),
                (S[4] = e))
              : (e = S[4]),
            S[5] !== U ? ((t = () => void U()), (S[5] = U), (S[6] = t)) : (t = S[6]),
            S[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, r.jsx)(c.A, {
                  id: "settings.codeReview.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry loading code review settings",
                })),
                (S[7] = i))
              : (i = S[7]),
            S[8] !== t
              ? ((s = (0, r.jsx)(M.X, {
                  children: (0, r.jsx)(M.X.Content, {
                    children: (0, r.jsx)(I.t, {
                      children: (0, r.jsx)(N.ic, {
                        label: e,
                        control: (0, r.jsx)(w.$, { color: "secondary", size: "toolbar", onClick: t, children: i }),
                      }),
                    }),
                  }),
                })),
                (S[8] = t),
                (S[9] = s))
              : (s = S[9]),
            s
          )
        }
        return (
          S[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(E.j, {
                children: (0, r.jsx)(c.A, {
                  id: "settings.codeReview.loading",
                  defaultMessage: "Loading code review settings…",
                  description: "Loading state for code review settings",
                }),
              })),
              (S[10] = e))
            : (e = S[10]),
          e
        )
      }
      let $ = G.code_review_trigger_policy ?? "pr_open"
      return (
        S[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(M.X.Header, {
              title: (0, r.jsx)(c.A, {
                id: "settings.codeReview.personal.title",
                defaultMessage: "Personal preferences",
                description: "Title for personal code review preferences",
              }),
            })),
            (S[11] = t))
          : (t = S[11]),
        S[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.autoReview.label",
              defaultMessage: "Automatic review",
              description: "Label for automatic code review preference",
            })),
            (o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.autoReview.description",
              defaultMessage:
                "If a repository’s review setting differs from your personal preference, the repository setting takes priority",
              description: "Description for automatic code review preference",
            })),
            (S[12] = i),
            (S[13] = o))
          : ((i = S[12]), (o = S[13])),
        S[14] !== O || S[15] !== F || S[16] !== G.code_review_preference
          ? ((a = (0, r.jsx)(N.ic, {
              label: i,
              description: o,
              control: (e) =>
                (0, r.jsx)(R.l, {
                  ...e,
                  checked: "always" === G.code_review_preference,
                  disabled: F,
                  onChange: (e) => {
                    O({ code_review_preference: e ? "always" : "repo_default" })
                  },
                }),
            })),
            (S[14] = O),
            (S[15] = F),
            (S[16] = G.code_review_preference),
            (S[17] = a))
          : (a = S[17]),
        S[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.trigger.label",
              defaultMessage: "Review trigger",
              description: "Label for review trigger preference",
            })),
            (u = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.trigger.description",
              defaultMessage: "Choose when ChatGPT should review your pull requests",
              description: "Description for review trigger preference",
            })),
            (S[18] = d),
            (S[19] = u))
          : ((d = S[18]), (u = S[19])),
        S[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = ["pr_open", "every_push", "smart_detect"]), (S[20] = p))
          : (p = S[20]),
        S[21] !== O ? ((g = (e) => O({ code_review_trigger_policy: e })), (S[21] = O), (S[22] = g)) : (g = S[22]),
        S[23] !== F || S[24] !== g || S[25] !== $
          ? ((h = (0, r.jsx)(P._P, {
              label: d,
              description: u,
              value: $,
              options: p,
              disabled: F,
              onChange: g,
              renderLabel: eC,
            })),
            (S[23] = F),
            (S[24] = g),
            (S[25] = $),
            (S[26] = h))
          : (h = S[26]),
        S[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.exhaustive.label",
              defaultMessage: "Exhaustive code review",
              description: "Label for exhaustive code review preference",
            })),
            (y = (0, r.jsx)(c.A, {
              id: "settings.codeReview.personal.exhaustive.description",
              defaultMessage: "Keep looking for findings until ChatGPT stops finding new issues",
              description: "Description for exhaustive code review preference",
            })),
            (S[27] = m),
            (S[28] = y))
          : ((m = S[27]), (y = S[28])),
        S[29] !== O || S[30] !== F || S[31] !== G.exhaustive_code_review
          ? ((x = (0, r.jsx)(N.ic, {
              label: m,
              description: y,
              control: (e) =>
                (0, r.jsx)(R.l, {
                  ...e,
                  checked: G.exhaustive_code_review,
                  disabled: F,
                  onChange: (e) => {
                    O({ exhaustive_code_review: e })
                  },
                }),
            })),
            (S[29] = O),
            (S[30] = F),
            (S[31] = G.exhaustive_code_review),
            (S[32] = x))
          : (x = S[32]),
        S[33] !== z || S[34] !== O || S[35] !== F || S[36] !== G.allow_credits_for_code_reviews
          ? ((b = z
              ? (0, r.jsx)(N.ic, {
                  label: (0, r.jsx)(c.A, {
                    id: "settings.codeReview.personal.credits.label",
                    defaultMessage: "Use credits for reviews",
                    description: "Label for code review credits preference",
                  }),
                  description: (0, r.jsx)(c.A, {
                    id: "settings.codeReview.personal.credits.description",
                    defaultMessage: "Allow credits to be consumed for reviews after rate limits",
                    description: "Description for code review credits preference",
                  }),
                  control: (e) =>
                    (0, r.jsx)(R.l, {
                      ...e,
                      checked: G.allow_credits_for_code_reviews,
                      disabled: F,
                      onChange: (e) => {
                        O({ allow_credits_for_code_reviews: e })
                      },
                    }),
                })
              : null),
            (S[33] = z),
            (S[34] = O),
            (S[35] = F),
            (S[36] = G.allow_credits_for_code_reviews),
            (S[37] = b))
          : (b = S[37]),
        S[38] !== x || S[39] !== b || S[40] !== a || S[41] !== h
          ? ((_ = (0, r.jsxs)(M.X, {
              children: [t, (0, r.jsx)(M.X.Content, { children: (0, r.jsxs)(I.t, { children: [a, h, x, b] }) })],
            })),
            (S[38] = x),
            (S[39] = b),
            (S[40] = a),
            (S[41] = h),
            (S[42] = _))
          : (_ = S[42]),
        S[43] !== O || S[44] !== F || S[45] !== G.allow_credits_for_security_reviews || S[46] !== G.security_review
          ? ((j =
              null != G.security_review
                ? (0, r.jsx)(ey, {
                    disabled: F,
                    preferences: G.security_review,
                    allowCreditsForSecurityReviews: G.allow_credits_for_security_reviews,
                    onUpdate: O,
                  })
                : null),
            (S[43] = O),
            (S[44] = F),
            (S[45] = G.allow_credits_for_security_reviews),
            (S[46] = G.security_review),
            (S[47] = j))
          : (j = S[47]),
        S[48] !== _ || S[49] !== j
          ? ((A = (0, r.jsxs)(r.Fragment, { children: [_, j] })), (S[48] = _), (S[49] = j), (S[50] = A))
          : (A = S[50]),
        A
      )
    }
    function eC(e) {
      return (0, r.jsx)(P.dN, { value: e })
    }
    var eS = i("jpoq"),
      ek = i("Rvvc"),
      eM = i("Ot7V"),
      eE = i("aQvR"),
      eN = i("S5Ho")
    function eL() {
      let e,
        t,
        i,
        o,
        l,
        d,
        u,
        p = (0, s.c)(17)
      p[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.V)()), (p[0] = e)) : (e = p[0])
      let g = (0, m.iK)(e.githubConnection),
        h = null == g || g.connectorId === ek.qD,
        v = g?.connectorId ?? ek.qD,
        f = g?.accountLinkId
      p[1] !== v || p[2] !== f ? ((t = { connectorId: v, linkId: f }), (p[1] = v), (p[2] = f), (p[3] = t)) : (t = p[3])
      let y = !h
      p[4] !== y ? ((i = { enabled: y }), (p[4] = y), (p[5] = i)) : (i = p[5])
      let { data: x, isPending: b, isFetching: _, refetch: j } = (0, n._U)(eN.ky, t, i),
        A = h ? ek.rh : x?.app_installation_url
      return (
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(c.A, {
              id: "settings.codeReview.githubRepositoryAccess.label",
              defaultMessage: "Repository access",
              description: "Setting for the repositories the GitHub app can access",
            })),
            (p[6] = o))
          : (o = p[6]),
        p[7] !== A || p[8] !== b
          ? ((l =
              null != A || b
                ? void 0
                : (0, r.jsx)(c.A, {
                    id: "settings.codeReview.githubRepositoryAccess.error",
                    defaultMessage: "Unable to load GitHub repository settings",
                    description: "Error loading the selected GitHub instance's repository access settings link",
                  })),
            (p[7] = A),
            (p[8] = b),
            (p[9] = l))
          : (l = p[9]),
        p[10] !== A || p[11] !== _ || p[12] !== j
          ? ((d =
              null != A
                ? (0, r.jsxs)(w.z, {
                    color: "outline",
                    href: A,
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: (e) => {
                      ;(0, eM.PQ)({
                        event: e,
                        href: A,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      })
                    },
                    children: [
                      (0, r.jsx)(c.A, {
                        id: "settings.codeReview.githubRepositoryAccess.manage",
                        defaultMessage: "Manage on GitHub",
                        description: "Link to GitHub to install or configure the app's repository access",
                      }),
                      (0, r.jsx)(eE.g, { ExternalIcon: G.GRR, href: A, openTarget: "external-browser" }),
                    ],
                  })
                : (0, r.jsx)(w.$, {
                    color: "outline",
                    loading: _,
                    onClick: () => void j(),
                    children: (0, r.jsx)(c.A, {
                      id: "settings.codeReview.githubRepositoryAccess.retry",
                      defaultMessage: "Try again",
                      description: "Retry loading the selected GitHub instance's repository access settings link",
                    }),
                  })),
            (p[10] = A),
            (p[11] = _),
            (p[12] = j),
            (p[13] = d))
          : (d = p[13]),
        p[14] !== l || p[15] !== d
          ? ((u = (0, r.jsx)(N.ic, { className: "select-none", label: o, description: l, control: d })),
            (p[14] = l),
            (p[15] = d),
            (p[16] = u))
          : (u = p[16]),
        u
      )
    }
    var eI = i("bqtn")
    function eT(e) {
      let t,
        i,
        o,
        a,
        d,
        u = (0, s.c)(23),
        { provider: p, defaultHostname: g, options: h, selectedKey: m, isLoading: y, isError: b, onSelect: w } = e,
        _ = (0, n.gh)(f.u),
        j = (0, l.A)(),
        [A, R] = (0, x.useState)(!1)
      if (u[0] !== h || u[1] !== m) {
        let e
        ;(u[3] !== m ? ((e = (e) => e.key === m), (u[3] = m), (u[4] = e)) : (e = u[4]),
          (t = h.find(e)),
          (u[0] = h),
          (u[1] = m),
          (u[2] = t))
      } else t = u[2]
      let C = t,
        S = y || A
      return (
        u[5] !== p
          ? ((i = (0, r.jsx)(c.A, {
              id: "settings.codeReview.instance.label",
              defaultMessage: "{provider} instance",
              description: "Label for the named code hosting provider's selected server",
              values: { provider: p },
            })),
            (u[5] = p),
            (u[6] = i))
          : (i = u[6]),
        u[7] !== g || u[8] !== b || u[9] !== p
          ? ((o = b
              ? (0, r.jsx)(c.A, {
                  id: "settings.codeReview.instance.loadError",
                  defaultMessage: "Unable to load connected {provider} instances",
                  description: "Error loading the named code hosting provider's connections",
                  values: { provider: p },
                })
              : (0, r.jsx)(c.A, {
                  id: "settings.codeReview.instance.description",
                  defaultMessage: "Choose {hostname} or a connected instance",
                  description: "Explains choosing the default code hosting server or a connected enterprise instance",
                  values: { hostname: g },
                })),
            (u[7] = g),
            (u[8] = b),
            (u[9] = p),
            (u[10] = o))
          : (o = u[10]),
        u[11] !== S || u[12] !== j || u[13] !== w || u[14] !== h || u[15] !== p || u[16] !== _ || u[17] !== C
          ? ((a = (e) =>
              (0, r.jsx)(eI.Ab, {
                disabled: S,
                triggerButton: (0, r.jsx)(L.vg, {
                  ...e,
                  disabled: S,
                  children:
                    null == C
                      ? (0, r.jsx)(c.A, {
                          id: "settings.codeReview.instance.unavailable",
                          defaultMessage: "Selected connection unavailable",
                          description: "The saved code hosting connection is no longer available",
                        })
                      : (0, r.jsx)(eP, { hostname: C.hostname, name: C.name }),
                }),
                children: h.map((e) =>
                  (0, r.jsx)(
                    eI.ms.Item,
                    {
                      onSelect: () => {
                        ;(R(!0),
                          w(e.value)
                            .catch(() => {
                              _.get(v.Id).danger(
                                j.formatMessage(
                                  {
                                    id: "settings.codeReview.instance.saveError",
                                    defaultMessage: "Unable to save {provider} instance",
                                    description: "Error saving the named code hosting provider's connection",
                                  },
                                  { provider: p },
                                ),
                                { errorAnalytics: { toastId: "settings.codeReview.instance.saveError" } },
                              )
                            })
                            .finally(() => R(!1)))
                      },
                      children: (0, r.jsx)(eP, { hostname: e.hostname, name: e.name }),
                    },
                    e.key,
                  ),
                ),
              })),
            (u[11] = S),
            (u[12] = j),
            (u[13] = w),
            (u[14] = h),
            (u[15] = p),
            (u[16] = _),
            (u[17] = C),
            (u[18] = a))
          : (a = u[18]),
        u[19] !== i || u[20] !== o || u[21] !== a
          ? ((d = (0, r.jsx)(N.ic, { label: i, description: o, control: a })),
            (u[19] = i),
            (u[20] = o),
            (u[21] = a),
            (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    function eP(e) {
      let t,
        i = (0, s.c)(3),
        { hostname: o, name: n } = e
      return (
        i[0] !== o || i[1] !== n
          ? ((t = n
              ? (0, r.jsx)(c.A, {
                  id: "settings.codeReview.instance.option",
                  defaultMessage: "{hostname} — {name}",
                  description: "Code hosting server hostname and connection name",
                  values: { hostname: o, name: n },
                })
              : (0, r.jsx)(r.Fragment, { children: o })),
            (i[0] = o),
            (i[1] = n),
            (i[2] = t))
          : (t = i[2]),
        t
      )
    }
    function eG() {
      let e,
        t,
        i,
        o,
        l,
        c,
        d = (0, s.c)(14),
        u = (0, n.gh)(f.u)
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.V)()), (d[0] = e)) : (e = d[0])
      let p = e.githubConnection,
        g = (0, m.iK)(p),
        h = (0, m.xV)(),
        { data: v, isPending: y, isError: x } = (0, n.Ul)(eS.Py)
      d[1] !== g ? ((t = eU(g)), (d[1] = g), (d[2] = t)) : (t = d[2])
      let b = h || y
      return (
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { key: "github.com", hostname: "github.com", name: "", value: null }), (d[3] = i))
          : (i = d[3]),
        d[4] !== v ? ((o = [i, ...(v ?? []).map(eq)]), (d[4] = v), (d[5] = o)) : (o = d[5]),
        d[6] !== u ? ((l = (e) => (0, m.gc)(u, p, e)), (d[6] = u), (d[7] = l)) : (l = d[7]),
        d[8] !== x || d[9] !== t || d[10] !== b || d[11] !== o || d[12] !== l
          ? ((c = (0, r.jsx)(eT, {
              provider: "GitHub",
              defaultHostname: "github.com",
              selectedKey: t,
              isLoading: b,
              isError: x,
              options: o,
              onSelect: l,
            })),
            (d[8] = x),
            (d[9] = t),
            (d[10] = b),
            (d[11] = o),
            (d[12] = l),
            (d[13] = c))
          : (c = d[13]),
        c
      )
    }
    function eq(e) {
      let t = { hostname: e.hostname, ...e.connection }
      return { key: eU(t), hostname: e.hostname, name: e.name, value: t }
    }
    function eU(e) {
      return null == e ? "github.com" : JSON.stringify([e.hostname, e.connectorId, e.accountLinkId])
    }
    var eH = i("T0Rc"),
      eF = i("temr"),
      ez = i("EOo5"),
      eO = i("h4qV")
    function e$(e) {
      return { key: e.connectorId, hostname: e.hostname, name: e.name, value: e.connectorId }
    }
    let eZ = {
      github: function () {
        let e,
          t = (0, s.c)(2),
          i = (0, ee.Zj)("223049465")
        return (
          t[0] !== i
            ? ((e = i ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eG, {}), (0, r.jsx)(eL, {})] }) : null),
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
          o,
          l,
          c,
          d = (0, s.c)(15),
          u = (0, n.gh)(f.u),
          { accountId: p, userId: g } = (0, ez.As)()
        d[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.V)()), (d[0] = e)) : (e = d[0])
        let h = e.gitlabConnectorId,
          v = (0, m.iK)(h) ?? eF.M,
          y = (0, m.xV)()
        d[1] !== p || d[2] !== g
          ? ((t = (0, eO.Kv)({ accountId: p, userId: g })), (d[1] = p), (d[2] = g), (d[3] = t))
          : (t = d[3])
        let { data: x, isPending: b, isError: w } = (0, eH.I)(t),
          _ = y || b
        return (
          d[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { key: eF.M, hostname: "gitlab.com", name: "", value: null }), (d[4] = i))
            : (i = d[4]),
          d[5] !== x ? ((o = [i, ...(x ?? []).map(e$)]), (d[5] = x), (d[6] = o)) : (o = d[6]),
          d[7] !== u ? ((l = (e) => (0, m.gc)(u, h, e)), (d[7] = u), (d[8] = l)) : (l = d[8]),
          d[9] !== w || d[10] !== v || d[11] !== _ || d[12] !== o || d[13] !== l
            ? ((c = (0, r.jsx)(eT, {
                provider: "GitLab",
                defaultHostname: "gitlab.com",
                selectedKey: v,
                isLoading: _,
                isError: w,
                options: o,
                onSelect: l,
              })),
              (d[9] = w),
              (d[10] = v),
              (d[11] = _),
              (d[12] = o),
              (d[13] = l),
              (d[14] = c))
            : (c = d[14]),
          c
        )
      },
    }
    function eD() {
      let e,
        t = (0, s.c)(2),
        i = eZ[(0, n.Ul)(g.X)]
      return (t[0] !== i ? ((e = null == i ? null : (0, r.jsx)(i, {})), (t[0] = i), (t[1] = e)) : (e = t[1]), e)
    }
    var eB = i("i6yo")
    function eW() {
      let e,
        t,
        i,
        a,
        d,
        u,
        p,
        h = (0, s.c)(19),
        y = (0, n.gh)(f.u),
        x = (0, l.A)(),
        b = (0, n.Ul)(g.X),
        w = (0, n.Ul)(eB.l),
        _ = (0, m.xV)()
      ;(h[0] !== y ? ((e = (e) => (0, g.v)(y, e)), (h[0] = y), (h[1] = e)) : (e = h[1]),
        h[2] !== x || h[3] !== y
          ? ((t = () => {
              y.get(v.Id).danger(
                x.formatMessage({
                  id: "settings.codeReview.provider.saveError",
                  defaultMessage: "Unable to save review provider",
                  description: "Error when saving the default code hosting provider for Code Review fails",
                }),
                { errorAnalytics: { toastId: "settings.codeReview.provider.saveError" } },
              )
            }),
            (h[2] = x),
            (h[3] = y),
            (h[4] = t))
          : (t = h[4]),
        h[5] !== e || h[6] !== t
          ? ((i = { mutationFn: e, networkMode: "always", onError: t }), (h[5] = e), (h[6] = t), (h[7] = i))
          : (i = h[7]))
      let { mutate: j, isPending: A } = (0, o.n)(i)
      ;(h[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(c.A, {
            id: "settings.codeReview.provider.label",
            defaultMessage: "Review provider",
            description: "Setting selecting GitHub or GitLab as the Code Review provider",
          })),
          (h[8] = a))
        : (a = h[8]),
        h[9] !== w ? ((d = w ? ["github", "gitlab"] : ["github"]), (h[9] = w), (h[10] = d)) : (d = h[10]))
      let R = _ || A
      return (
        h[11] !== j || h[12] !== b
          ? ((u = (e) => {
              e !== b && j(e)
            }),
            (h[11] = j),
            (h[12] = b),
            (h[13] = u))
          : (u = h[13]),
        h[14] !== b || h[15] !== d || h[16] !== R || h[17] !== u
          ? ((p = (0, r.jsx)(P._P, { label: a, value: b, options: d, disabled: R, renderLabel: eV, onChange: u })),
            (h[14] = b),
            (h[15] = d),
            (h[16] = R),
            (h[17] = u),
            (h[18] = p))
          : (p = h[18]),
        p
      )
    }
    function eV(e) {
      return "github" === e
        ? (0, r.jsx)(c.A, {
            id: "settings.codeReview.provider.github",
            defaultMessage: "GitHub",
            description: "GitHub as the Code Review provider",
          })
        : (0, r.jsx)(c.A, {
            id: "settings.codeReview.provider.gitlab",
            defaultMessage: "GitLab",
            description: "GitLab as the Code Review provider",
          })
    }
    let eX = (0, a.V)(),
      eK = (0, n.un)(f.u, ({ get: e }) => (0, u.$)(e))
    function eQ() {
      let e,
        t,
        i = (0, s.c)(3),
        o = (0, m.iK)(eX.gitHostingProvider)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(eY, {})), (i[0] = e)) : (e = i[0]),
        i[1] !== o ? ((t = (0, r.jsx)(eA, { provider: o, appPreferences: e })), (i[1] = o), (i[2] = t)) : (t = i[2]),
        t
      )
    }
    function eY() {
      let e,
        t,
        i,
        a,
        d,
        u,
        x,
        b,
        w,
        _,
        j,
        A,
        R,
        C,
        S,
        k,
        E,
        N,
        L = (0, s.c)(36),
        T = (0, n.gh)(f.u),
        G = (0, l.A)(),
        q = (0, n.Ul)(eK),
        U = (0, n.Ul)(g.X),
        H = (0, n.Ul)(m.dW)
      L[0] !== U ? ((e = { page: "settings", provider: U, surface: "settings" }), (L[0] = U), (L[1] = e)) : (e = L[1])
      let F = (0, h.C)(e, H)
      ;(L[2] !== T ? ((t = (e) => (0, m.gc)(T, eX.githubLinkTarget, e)), (L[2] = T), (L[3] = t)) : (t = L[3]),
        L[4] !== G || L[5] !== T
          ? ((i = () =>
              T.get(v.Id).danger(
                G.formatMessage({
                  id: "settings.codeReview.githubLinks.saveError",
                  defaultMessage: "Unable to save where review links open",
                  description: "Error when saving the destination for pull request links",
                }),
                { errorAnalytics: { toastId: "settings.codeReview.githubLinks.saveError" } },
              )),
            (L[4] = G),
            (L[5] = T),
            (L[6] = i))
          : (i = L[6]),
        L[7] !== t || L[8] !== i
          ? ((a = { mutationFn: t, networkMode: "always", onError: i }), (L[7] = t), (L[8] = i), (L[9] = a))
          : (a = L[9]))
      let z = (0, o.n)(a)
      return (
        L[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(M.X.Header, {
              title: (0, r.jsx)(c.A, {
                id: "settings.codeReview.appPreferences.title",
                defaultMessage: "App preferences",
                description: "Heading for Code Review preferences saved in the app",
              }),
            })),
            (L[10] = d))
          : (d = L[10]),
        L[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(c.A, {
              id: "settings.codeReview.githubLinks.label",
              defaultMessage: "Open review links in",
              description: "Label for choosing where pull request and merge request links open",
            })),
            (L[11] = u))
          : (u = L[11]),
        L[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = ["code-review-tab", "github"]), (L[12] = x))
          : (x = L[12]),
        L[13] !== z ? ((b = (e) => z.mutate(e)), (L[13] = z), (L[14] = b)) : (b = L[14]),
        L[15] !== b || L[16] !== q || L[17] !== z.isPending
          ? ((w = (0, r.jsx)(P._P, {
              label: u,
              value: q,
              options: x,
              disabled: z.isPending,
              onChange: b,
              renderLabel: eJ,
            })),
            (L[15] = b),
            (L[16] = q),
            (L[17] = z.isPending),
            (L[18] = w))
          : (w = L[18]),
        L[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)(eW, {})), (_ = (0, r.jsx)(eD, {})), (L[19] = _), (L[20] = j))
          : ((_ = L[19]), (j = L[20])),
        L[21] !== w
          ? ((A = (0, r.jsxs)(M.X, {
              children: [d, (0, r.jsx)(M.X.Content, { children: (0, r.jsxs)(I.t, { children: [w, j, _] }) })],
            })),
            (L[21] = w),
            (L[22] = A))
          : (A = L[22]),
        L[23] !== G ? ((R = G.formatMessage(p._.title)), (L[23] = G), (L[24] = R)) : (R = L[24]),
        L[25] !== G ? ((C = G.formatMessage(p._.placeholder)), (L[25] = G), (L[26] = C)) : (C = L[26]),
        L[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(c.A, { ...p._.title })), (L[27] = S))
          : (S = L[27]),
        L[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, r.jsx)(c.A, { ...p._.description })), (L[28] = k))
          : (k = L[28]),
        L[29] !== R || L[30] !== C
          ? ((E = (0, r.jsx)(y.v, {
              ariaLabel: R,
              placeholder: C,
              rows: 10,
              setting: eX.localReviewInstructions,
              title: S,
              titleSize: "base",
              subtitle: k,
            })),
            (L[29] = R),
            (L[30] = C),
            (L[31] = E))
          : (E = L[31]),
        L[32] !== F || L[33] !== A || L[34] !== E
          ? ((N = (0, r.jsxs)("div", { className: "contents", ...F, children: [A, E] })),
            (L[32] = F),
            (L[33] = A),
            (L[34] = E),
            (L[35] = N))
          : (N = L[35]),
        N
      )
    }
    function eJ(e) {
      return (0, r.jsx)(c.A, { ...e1[e] })
    }
    let e1 = (0, d.YK)({
      "code-review-tab": {
        id: "settings.codeReview.githubLinks.codeReviewTab",
        defaultMessage: "Code Review Tab",
        description: "Option to open pull request links in the Code Review tab",
      },
      github: {
        id: "settings.codeReview.reviewLinks.followBrowserSettings",
        defaultMessage: "Follow Browser Settings",
        description: "Option to open review links using the user's general browser settings",
      },
    })
  },
  Bt0y(e, t, i) {
    i.d(t, { C: () => d })
    var r = i("QosV"),
      s = i("zTeN"),
      o = i("zd8w"),
      n = i("RU3e"),
      a = i("OWtl")
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
        let r =
          e?.surface !== this.context?.surface ||
          e?.page !== this.context?.page ||
          e?.provider !== this.context?.provider
        ;((r || !t) && this.flush(i),
          null == e
            ? ((this.visitId = null), (this.activeTimeMs = 0))
            : (null == this.visitId &&
                ((this.visitId = crypto.randomUUID()),
                this.emit({ type: "viewed", ...e, visitId: this.visitId }),
                (this.lastInput = i)),
              r && this.emit({ type: "interaction", ...e, action: "page_viewed" }),
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
    var c = i("SAl8")
    function d(e, t) {
      let i,
        d,
        u,
        p,
        g,
        h,
        v,
        f = (0, r.c)(25),
        { page: m, provider: y, surface: x } = e,
        b = (0, s.gh)(a.u)
      f[0] !== b ? ((i = () => new l((e) => (0, c.X)(b, e))), (f[0] = b), (f[1] = i)) : (i = f[1])
      let [w] = (0, o.useState)(i),
        _ = (0, o.useRef)(!1)
      f[2] !== m || f[3] !== y || f[4] !== b || f[5] !== x || f[6] !== w
        ? ((d = () => {
            if (!_.current) return !1
            let e = document.hidden ? null : { page: m, provider: y, surface: x },
              t = !0 === b.get(n.$)
            return (w.update(e, t, performance.now()), null != e && t)
          }),
          (f[2] = m),
          (f[3] = y),
          (f[4] = b),
          (f[5] = x),
          (f[6] = w),
          (f[7] = d))
        : (d = f[7])
      let j = (0, o.useEffectEvent)(d),
        A = (void 0 === t || t) && null != y
      if (
        (f[8] !== b || f[9] !== w || f[10] !== j || f[11] !== A
          ? ((u = () => {
              let e
              if (!A) return
              let t = () => {
                  void 0 !== e && (window.clearInterval(e), (e = void 0))
                },
                i = () => {
                  j() ? void 0 === e && (e = window.setInterval(() => w.flush(performance.now()), 3e4)) : t()
                },
                r = b.watch((e) => {
                  let { get: t } = e
                  ;(t(n.$), i())
                }),
                s = !1
              queueMicrotask(() => {
                s || ((_.current = !0), i())
              })
              let o = () => {
                ;(w.update(null, !1, performance.now()), t())
              }
              return (
                window.addEventListener("pagehide", o),
                window.addEventListener("pageshow", i),
                document.addEventListener("visibilitychange", i),
                () => {
                  ;((s = !0),
                    (_.current = !1),
                    r(),
                    o(),
                    window.removeEventListener("pagehide", o),
                    window.removeEventListener("pageshow", i),
                    document.removeEventListener("visibilitychange", i))
                }
              )
            }),
            (f[8] = b),
            (f[9] = w),
            (f[10] = j),
            (f[11] = A),
            (f[12] = u))
          : (u = f[12]),
        f[13] !== b || f[14] !== w || f[15] !== A
          ? ((p = [A, b, w]), (f[13] = b), (f[14] = w), (f[15] = A), (f[16] = p))
          : (p = f[16]),
        (0, o.useEffect)(u, p),
        f[17] !== j
          ? ((g = () => {
              j()
            }),
            (f[17] = j),
            (f[18] = g))
          : (g = f[18]),
        f[19] !== m || f[20] !== y || f[21] !== x
          ? ((h = [m, y, x]), (f[19] = m), (f[20] = y), (f[21] = x), (f[22] = h))
          : (h = f[22]),
        (0, o.useEffect)(g, h),
        f[23] !== w)
      ) {
        let e = (e) => {
          e.nativeEvent.isTrusted && w.input(performance.now())
        }
        ;((v = { onPointerDownCapture: e, onPointerMoveCapture: e, onWheelCapture: e, onKeyDownCapture: e }),
          (f[23] = w),
          (f[24] = v))
      } else v = f[24]
      return v
    }
  },
  GK7D(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      o = i("on57")
    i.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            i,
            n,
            a,
            l,
            c,
            d,
            u,
            p,
            g,
            h = (0, s.c)(30),
            { actions: v, asset: f, subtitle: m, subtitleClassName: y, title: x, variant: b } = e,
            w = void 0 === b ? "default" : b
          h[0] !== f
            ? ((t = null == f ? null : (0, r.jsx)("div", { className: "flex", children: f })), (h[0] = f), (h[1] = t))
            : (t = h[1])
          let _ = "page" === w ? "flex-nowrap" : "flex-wrap"
          h[2] !== _
            ? ((i = (0, o.A)("flex min-w-0 items-start justify-between gap-4", _)), (h[2] = _), (h[3] = i))
            : (i = h[3])
          let j = "settingsCompact" === w ? "gap-1.25" : "gap-1.5"
          h[4] !== j ? ((n = (0, o.A)("flex min-w-0 flex-1 basis-64 flex-col", j)), (h[4] = j), (h[5] = n)) : (n = h[5])
          let A = "settings" === w && "heading-lg font-normal",
            R = "settingsCompact" === w && "heading-lg font-semibold leading-7",
            C = "page" === w && "heading-lg electron:heading-xl",
            S = "default" === w && "heading-base electron:heading-lg"
          return (
            h[6] !== S || h[7] !== A || h[8] !== R || h[9] !== C
              ? ((a = (0, o.A)("min-w-0 break-words text-default", A, R, C, S)),
                (h[6] = S),
                (h[7] = A),
                (h[8] = R),
                (h[9] = C),
                (h[10] = a))
              : (a = h[10]),
            h[11] !== a || h[12] !== x
              ? ((l = (0, r.jsx)("h1", { className: a, children: x })), (h[11] = a), (h[12] = x), (h[13] = l))
              : (l = h[13]),
            h[14] !== m || h[15] !== y
              ? ((c =
                  null == m
                    ? null
                    : (0, r.jsx)("div", { className: (0, o.A)("text-base text-secondary", y), children: m })),
                (h[14] = m),
                (h[15] = y),
                (h[16] = c))
              : (c = h[16]),
            h[17] !== l || h[18] !== c || h[19] !== n
              ? ((d = (0, r.jsxs)("div", { className: n, children: [l, c] })),
                (h[17] = l),
                (h[18] = c),
                (h[19] = n),
                (h[20] = d))
              : (d = h[20]),
            h[21] !== v
              ? ((u =
                  null == v
                    ? null
                    : (0, r.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: v })),
                (h[21] = v),
                (h[22] = u))
              : (u = h[22]),
            h[23] !== d || h[24] !== u || h[25] !== i
              ? ((p = (0, r.jsxs)("div", { className: i, children: [d, u] })),
                (h[23] = d),
                (h[24] = u),
                (h[25] = i),
                (h[26] = p))
              : (p = h[26]),
            h[27] !== p || h[28] !== t
              ? ((g = (0, r.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, p],
                })),
                (h[27] = p),
                (h[28] = t),
                (h[29] = g))
              : (g = h[29]),
            g
          )
        },
      },
    )
  },
  WXto(e, t, i) {
    var r = i("QosV"),
      s = i("zTeN"),
      o = i("zd8w"),
      n = i("EOo5"),
      a = i("YitN"),
      l = i("Ghh3"),
      c = i("OAko"),
      d = i("laUo"),
      u = i("smwl"),
      p = i("jdiu"),
      g = i("eFxf"),
      h = i("OWtl"),
      v = i("hZax"),
      f = i("UR81"),
      m = i("LjYy")
    let y = "3909937021",
      x = "1014047933",
      b = (0, s.vU)(h.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => l.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      w = (0, s.vU)(h.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          l.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function _(e) {
      return e === m.x.FREE || e === m.x.GO
    }
    i.d(
      t,
      {},
      {
        AH: function (e, t) {
          let i,
            l,
            h,
            m,
            j,
            A,
            R,
            C,
            S = (0, r.c)(30),
            { accountId: k, userId: M, authMethod: E, isLoading: N } = (0, n.As)(),
            L = (0, s.Ul)(null),
            I = "chatgpt" === E,
            T = (0, v.AS)(),
            P = (0, v.Zj)(y),
            G = (0, v.DR)(y),
            q = (0, v.XR)(),
            { data: U, isLoading: H, hasEverErrored: F } = (0, c.YL)(),
            { data: z, isLoading: O } = (0, a.U)(),
            $ =
              I &&
              U?.id === k &&
              U?.structure === "workspace" &&
              "account-owner" === U.account_user_role &&
              (0, f.Hw)(U.plan_type),
            Z = I && !q && (0, p.b0)({ accountId: k, currentAccount: U, statsigClient: T }),
            D = U?.plan_type ?? (!H || F ? z?.plan : void 0),
            B = I && (0, f.Hw)(D),
            W = (0, v.Zj)(!!B && x),
            V = (0, v.DR)(B ? x : y)
          S[0] !== D ? ((i = _(D)), (S[0] = D), (S[1] = i)) : (i = S[1])
          let X = i,
            K = (0, f.uz)(D),
            Q = !!I && !!X && !q && (0, g.fV)(T, D),
            Y = U?.structure === "personal" && U.id === k
          S[2] !== k || S[3] !== U?.id || S[4] !== U?.plan_type || S[5] !== I || S[6] !== Y
            ? ((l = !1), (S[2] = k), (S[3] = U?.id), (S[4] = U?.plan_type), (S[5] = I), (S[6] = Y), (S[7] = l))
            : (l = S[7])
          let J = l
          S[8] !== J ? ((h = { enabled: J }), (S[8] = J), (S[9] = h)) : (h = S[9])
          let { data: ee, isLoading: et } = (0, s._U)(b, k ?? null, h),
            ei = I && ((0, d.IH)(D) || Q),
            er = k ?? null,
            es = M ?? null
          ;(S[10] !== er || S[11] !== es
            ? ((m = { accountId: er, userId: es }), (S[10] = er), (S[11] = es), (S[12] = m))
            : (m = S[12]),
            !1 !== S[13] ? ((j = { enabled: !1 }), (S[13] = !1), (S[14] = j)) : (j = S[14]))
          let { data: eo, isPending: en } = (0, s._U)(w, m, j),
            ea = I && Y && !ei
          S[15] !== ea ? ((A = { enabled: ea }), (S[15] = ea), (S[16] = A)) : (A = S[16])
          let { data: el, isLoading: ec } = (0, u.q7)(A),
            [ed, eu] = (0, o.useState)(null),
            ep = ea && el?.isEnabled === !0,
            eg = "usage" === t && ea && (ep || ed === k) ? k : null
          ed !== eg && eu(eg)
          let eh = ep || null != eg,
            ev = I && K && P,
            ef = I && !q && !("isNoop" in T),
            em = B && !q && W,
            ey = I && H && !F,
            ex = I && X && q,
            eb = I && K && (q || G)
          S[17] !== I || S[18] !== X || S[19] !== q || S[20] !== D
            ? ((R = I && (X || (0, f.Hw)(D)) && q), (S[17] = I), (S[18] = X), (S[19] = q), (S[20] = D), (S[21] = R))
            : (R = S[21])
          let ew = R,
            e_ = B && (q || V),
            ej = (function ({
              authMethod: e,
              hasCreditBalance: t = !1,
              hasEnabledAutoReload: i = !1,
              isPersonalAccount: r = !1,
              plan: s,
              isFreeOrGoCreditPurchaseEnabled: o = !1,
              hasStudentCreditAccess: n = !1,
              isEnterpriseUsageSettingsEnabled: a = !1,
              isConsumerUsageAnalyticsEnabled: l = !1,
              isBusinessUsageDashboardEnabled: c = !1,
              canPurchaseBusinessCredits: u = !1,
              isBusinessWorkspaceOwner: p = !1,
            }) {
              let g = "chatgpt" === e,
                h = g && _(s) && o,
                v = g && ((0, d.IH)(s) || h || (r && n)),
                m = _(s),
                y = (0, f.uz)(s),
                x = v || (g && (0, f.Hw)(s) && (u || p)) || (g && ((m && t) || (r && i)))
              return {
                canManageCreditSettings: v,
                canViewCreditSettings: x,
                isUsageSettingsVisible:
                  x || (g && m) || (g && (m || (0, f.Hw)(s)) && l) || (g && (0, f.Hw)(s) && c) || (g && y && a),
              }
            })({
              authMethod: E,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: eh,
              isPersonalAccount: Y,
              plan: D,
              isFreeOrGoCreditPurchaseEnabled: Q,
              hasStudentCreditAccess: !1,
              isEnterpriseUsageSettingsEnabled: ev,
              isConsumerUsageAnalyticsEnabled: ef,
              isBusinessUsageDashboardEnabled: em,
              canPurchaseBusinessCredits: Z,
              isBusinessWorkspaceOwner: $,
            }),
            eA = !0 === L || ej.isUsageSettingsVisible || (J && ee?.show_usage_tab === !0),
            eR = eh ? el : void 0,
            eC = N || (I && O) || ey || ex || eb || ew || e_ || (J && et) || (ea && ec && !eA)
          return (
            S[22] !== Z || S[23] !== $ || S[24] !== eA || S[25] !== D || S[26] !== eR || S[27] !== eC || S[28] !== ej
              ? ((C = {
                  autoReloadSettings: eR,
                  ...ej,
                  canPurchaseBusinessCredits: Z,
                  isBusinessWorkspaceOwner: $,
                  isUsageSettingsVisible: eA,
                  isUsageSettingsAccessLoading: eC,
                  plan: D,
                }),
                (S[22] = Z),
                (S[23] = $),
                (S[24] = eA),
                (S[25] = D),
                (S[26] = eR),
                (S[27] = eC),
                (S[28] = ej),
                (S[29] = C))
              : (C = S[29]),
            C
          )
        },
        t$: b,
      },
    )
  },
  Sptq(e, t, i) {
    var r = i("zTeN"),
      s = i("eFn4"),
      o = i("Sfgm"),
      n = i("S7UE"),
      a = i("KH2l"),
      l = i("OWtl"),
      c = i("vw1R")
    let d = (0, r.un)(l.u, ({ get: e }) => {
        let t = e(s.$S)
        if (t.authLoading) return "loading"
        let i = "chatgpt" === t.authMethod && null != t.accountId && (0, c.o)(t.plan) ? e(s.Jk, t.accountId) : null
        return (0, o.P4)(t.plan ?? void 0, t.authMethod, {
          isLoading: t.accountInfoLoading || i?.isPending === !0,
          hasErrors: t.accountInfoError || i?.isError === !0,
          hasWorkspaceEnabledCodex: i?.data?.beta_settings.wham_access === !0,
          needsOnboarding: !1,
        })
      }),
      u = (0, r.un)(l.u, ({ get: e }) => {
        let t = e(d),
          i = e(a.Am),
          r = e(n.u)
        return {
          cloud: { visible: "enabled" === t, pending: "loading" === t, error: "error" === t },
          app: {
            visible: i && "allowed" === r.status,
            pending: i && "loading" === r.status,
            error: i && "error" === r.status,
          },
        }
      })
    i.d(t, {}, { T: u, z: d })
  },
  jxU8(e, t, i) {
    i.d(t, { P: () => v, Y: () => f })
    var r = i("ABep"),
      s = i("QosV"),
      o = i("on57"),
      n = i("zd8w"),
      a = i("bJfu"),
      l = i("qbQ6"),
      c = i("GK7D"),
      d = i("PkPj"),
      u = i("DiyT"),
      p = i("ibLK"),
      g = i("V8uZ"),
      h = i("oFmV")
    function v(e) {
      let t,
        i,
        v,
        f,
        m,
        y,
        x,
        b,
        w,
        _,
        j,
        A,
        R,
        C,
        S,
        k,
        M,
        E,
        N,
        L,
        I,
        T,
        P,
        G,
        q,
        U,
        H,
        F,
        z,
        O,
        $,
        Z,
        D,
        B,
        W,
        V,
        X,
        K,
        Q,
        Y,
        J,
        ee,
        et,
        ei,
        er = (0, s.c)(120)
      er[0] !== e
        ? (({
            title: E,
            asset: i,
            backSlot: v,
            subtitle: R,
            children: f,
            fullWidth: S,
            contentClassName: y,
            subtitleClassName: C,
            action: t,
            toolbarActions: N,
            stickyControls: A,
            footer: b,
            embedded: k,
            density: x,
            scrollResetKey: j,
            containTouchOverscroll: M,
            ref: w,
            className: m,
            ..._
          } = e),
          (er[0] = e),
          (er[1] = t),
          (er[2] = i),
          (er[3] = v),
          (er[4] = f),
          (er[5] = m),
          (er[6] = y),
          (er[7] = x),
          (er[8] = b),
          (er[9] = w),
          (er[10] = _),
          (er[11] = j),
          (er[12] = A),
          (er[13] = R),
          (er[14] = C),
          (er[15] = S),
          (er[16] = k),
          (er[17] = M),
          (er[18] = E),
          (er[19] = N))
        : ((t = er[1]),
          (i = er[2]),
          (v = er[3]),
          (f = er[4]),
          (m = er[5]),
          (y = er[6]),
          (x = er[7]),
          (b = er[8]),
          (w = er[9]),
          (_ = er[10]),
          (j = er[11]),
          (A = er[12]),
          (R = er[13]),
          (C = er[14]),
          (S = er[15]),
          (k = er[16]),
          (M = er[17]),
          (E = er[18]),
          (N = er[19]))
      let es = void 0 !== S && S,
        eo = void 0 !== k && k,
        en = void 0 !== M && M,
        ea = x ?? "default",
        el = (0, n.useRef)(null),
        ec = (0, n.useRef)(null),
        ed = en && !eo && !1
      ;((et = (0, s.c)(4)),
        (ei = (0, p.U)(ed ? "(pointer: coarse)" : null)),
        et[0] !== ei || et[1] !== ec
          ? ((J = () => {
              let e = ec.current
              if (!ei || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let i = e.closest("[data-app-shell-frame]") ?? e,
                r = e.closest("[data-app-shell-main-surface]"),
                s = null,
                o = 0,
                n = () => {
                  s = null
                },
                a = (t) => {
                  let i = t.touches[0]
                  if (1 !== t.touches.length || null == i) return void n()
                  let a = t.composedPath().includes(e),
                    l = t.target,
                    c =
                      l instanceof Element &&
                      ((l.contains(e) && r?.contains(l)) || null != l.closest("[data-app-shell-main-titlebar]"))
                  a || c ? ((s = { x: i.clientX, y: i.clientY, inPanel: a }), (o = i.clientY)) : n()
                },
                l = (t) => {
                  let r = t.touches[0]
                  if (1 !== t.touches.length || null == r || null == s) return void n()
                  let a = r.clientY > o
                  if (
                    ((o = r.clientY),
                    !(!t.cancelable || !a || r.clientY - s.y <= Math.abs(r.clientX - s.x)) &&
                      (!s.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let r of t.composedPath()) {
                      if (r === e || r === i) break
                      if (
                        r instanceof HTMLElement &&
                        r.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(r).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                c = { capture: !0, passive: !0 }
              return (
                i.addEventListener("touchstart", a, c),
                i.addEventListener("touchmove", l, { capture: !0, passive: !1 }),
                i.addEventListener("touchend", n, c),
                i.addEventListener("touchcancel", n, c),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    i.removeEventListener("touchstart", a, !0),
                    i.removeEventListener("touchmove", l, !0),
                    i.removeEventListener("touchend", n, !0),
                    i.removeEventListener("touchcancel", n, !0))
                }
              )
            }),
            (ee = [ei, ec]),
            (et[0] = ei),
            (et[1] = ec),
            (et[2] = J),
            (et[3] = ee))
          : ((J = et[2]), (ee = et[3])),
        (0, n.useEffect)(J, ee))
      let [eu, ep] = (0, n.useState)(!1),
        eg = (0, n.useContext)(h.S),
        eh = !!eg?.slateLayout && !eo
      ;(0, p.U)(l.mk)
      let ev = eh && !1,
        ef = eg?.targetId ?? null,
        em = eg?.targetText ?? null,
        ey = eg?.navigationKey ?? null
      ;(er[20] !== j
        ? ((L = () => {
            null != j && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (I = [j]),
          (er[20] = j),
          (er[21] = L),
          (er[22] = I))
        : ((L = er[21]), (I = er[22])),
        (0, n.useLayoutEffect)(L, I),
        er[23] !== ef || er[24] !== em
          ? ((T = () => {
              let e, t
              if (null == ef && null == em) return
              let i = el.current
              if (null == i) return
              let r = () => {
                  if (null == em) return null == ef ? null : document.getElementById(ef)
                  let e = em.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    r = null
                  for (let s of i.querySelectorAll("*")) {
                    let i = (s.getAttribute("placeholder") ?? s.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == i ||
                      !t.every((e) => i.includes(e)) ||
                      null != s.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let o = i.includes(e)
                    ;(null == r || (o && !r.isContiguous) || (o === r.isContiguous && i.length <= r.text.length)) &&
                      (r = { element: s, isContiguous: o, text: i })
                  }
                  return r?.element ?? null
                },
                s = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == em)) return
                  let r = "true" === document.documentElement.dataset.reducedMotion,
                    s = t.closest("button"),
                    o = s?.parentElement ?? t
                  if (null == s) {
                    let e = t.closest("section")
                    for (let r = t.parentElement; null != r && r !== e && r !== i; r = r.parentElement)
                      if (
                        Array.from(r.children).some(
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
                        o = r
                        break
                      }
                  }
                  e = o.animate?.(
                    r
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${g.Wu.join(", ")})` },
                  )
                },
                o =
                  null == em
                    ? new ResizeObserver(() => {
                        let e = r()
                        null != e && s(e)
                      })
                    : null,
                n = () => {
                  for (let e of (t?.disconnect(), o?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    i.ownerDocument.removeEventListener(e, n)
                }
              if (null != o)
                for (let e of (o.observe(i), ["wheel", "pointerdown", "keydown"]))
                  i.ownerDocument.addEventListener(e, n, { passive: !0 })
              let a = r()
              return (
                null != a
                  ? s(a)
                  : (t = new MutationObserver(() => {
                      let e = r()
                      null != e && (s(e), t?.disconnect())
                    })).observe(null == em ? document.body : i, { childList: !0, subtree: !0 }),
                () => {
                  ;(n(), e?.cancel())
                }
              )
            }),
            (er[23] = ef),
            (er[24] = em),
            (er[25] = T))
          : (T = er[25]),
        er[26] !== ey || er[27] !== ef || er[28] !== em
          ? ((P = [ey, ef, em]), (er[26] = ey), (er[27] = ef), (er[28] = em), (er[29] = P))
          : (P = er[29]),
        (0, n.useLayoutEffect)(T, P),
        er[30] !== N
          ? ((G =
              null == N
                ? null
                : (0, r.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: N,
                  })),
            (er[30] = N),
            (er[31] = G))
          : (G = er[31]),
        er[32] !== v || er[33] !== G
          ? ((q = (0, r.jsxs)(r.Fragment, { children: [v, G] })), (er[32] = v), (er[33] = G), (er[34] = q))
          : (q = er[34]))
      let ex = q,
        eb = eo ? "default" : "settings"
      "compact" === ea && (eb = "settingsCompact")
      let ew = "compact" === x && "[--settings-section-gap:--spacing(5.5)]",
        e_ =
          "default" === x &&
          (eo && !es ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        ej = es ? null : eo ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(er[35] !== y || er[36] !== A || er[37] !== ew || er[38] !== e_ || er[39] !== ej || er[40] !== eh
        ? ((U = (0, o.A)(
            "group/settings mx-auto flex w-full flex-col",
            ew,
            e_,
            ej,
            eh && ["px-panel pb-panel", null == A && "pt-panel"],
            y,
          )),
          (er[35] = y),
          (er[36] = A),
          (er[37] = ew),
          (er[38] = e_),
          (er[39] = ej),
          (er[40] = eh),
          (er[41] = U))
        : (U = er[41]),
        er[42] !== t ||
        er[43] !== i ||
        er[44] !== ea ||
        er[45] !== eo ||
        er[46] !== eb ||
        er[47] !== R ||
        er[48] !== C ||
        er[49] !== E ||
        er[50] !== eh
          ? ((H =
              null == E || eh
                ? null
                : (0, r.jsx)("div", {
                    className: (0, o.A)("compact" === ea && "pb-5.5", "default" === ea && (eo ? "pb-panel" : "pb-8")),
                    children: (0, r.jsx)(c.z, {
                      actions: t,
                      asset: i,
                      subtitle: R,
                      subtitleClassName: (0, o.A)("text-balance", C),
                      title: E,
                      variant: eb,
                    }),
                  })),
            (er[42] = t),
            (er[43] = i),
            (er[44] = ea),
            (er[45] = eo),
            (er[46] = eb),
            (er[47] = R),
            (er[48] = C),
            (er[49] = E),
            (er[50] = eh),
            (er[51] = H))
          : (H = er[51]),
        er[52] !== A
          ? ((F = null == A ? null : (0, r.jsx)(d.J1, { className: "top-0 pt-panel pb-2", children: A })),
            (er[52] = A),
            (er[53] = F))
          : (F = er[53]))
      let eA =
          eo && !es
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eR = null != A && "pt-5"
      ;(er[54] !== eA || er[55] !== eR
        ? ((z = (0, o.A)("flex flex-col", eA, eR)), (er[54] = eA), (er[55] = eR), (er[56] = z))
        : (z = er[56]),
        er[57] !== f || er[58] !== z
          ? ((O = (0, r.jsx)("div", { className: z, children: f })), (er[57] = f), (er[58] = z), (er[59] = O))
          : (O = er[59]),
        er[60] !== ea || er[61] !== U || er[62] !== H || er[63] !== F || er[64] !== O
          ? (($ = (0, r.jsxs)("div", { ref: el, className: U, "data-density": ea, children: [H, F, O] })),
            (er[60] = ea),
            (er[61] = U),
            (er[62] = H),
            (er[63] = F),
            (er[64] = O),
            (er[65] = $))
          : ($ = er[65]))
      let eC = $
      if (eo) {
        let e, t, i
        return (
          er[66] !== m ? ((e = (0, o.A)("flex min-h-0 flex-col", m)), (er[66] = m), (er[67] = e)) : (e = er[67]),
          er[68] !== v || er[69] !== ex || er[70] !== N
            ? ((t =
                null != v || null != N
                  ? (0, r.jsx)("div", { className: "flex items-center pb-panel", children: ex })
                  : null),
              (er[68] = v),
              (er[69] = ex),
              (er[70] = N),
              (er[71] = t))
            : (t = er[71]),
          er[72] !== eC || er[73] !== w || er[74] !== _ || er[75] !== e || er[76] !== t
            ? ((i = (0, r.jsxs)("div", { ref: w, className: e, ..._, children: [t, eC] })),
              (er[72] = eC),
              (er[73] = w),
              (er[74] = _),
              (er[75] = e),
              (er[76] = t),
              (er[77] = i))
            : (i = er[77]),
          i
        )
      }
      ;(er[78] !== m
        ? ((Z = (0, o.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            m,
          )),
          (er[78] = m),
          (er[79] = Z))
        : (Z = er[79]),
        er[80] !== E || er[81] !== ev
          ? ((D = ev
              ? (0, r.jsx)(a.G.Header, {
                  divider: !1,
                  children: (0, r.jsx)(a.G.HeaderToolbar, {
                    children: (0, r.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: E,
                    }),
                  }),
                })
              : null),
            (er[80] = E),
            (er[81] = ev),
            (er[82] = D))
          : (D = er[82]),
        er[83] !== v || er[84] !== ex || er[85] !== N || er[86] !== eh
          ? ((B =
              eh && null == v && null == N
                ? null
                : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: ex,
                    }),
                  })),
            (er[83] = v),
            (er[84] = ex),
            (er[85] = N),
            (er[86] = eh),
            (er[87] = B))
          : (B = er[87]))
      let eS = ed || void 0,
        ek = ev ? eu : void 0,
        eM = ev || void 0
      er[88] !== ev
        ? ((W = ev ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (er[88] = ev), (er[89] = W))
        : (W = er[89])
      let eE = !eh && "p-panel"
      return (
        er[90] !== eE
          ? ((V = (0, o.A)("flex-1 scrollbar-stable overflow-y-auto", eE)), (er[90] = eE), (er[91] = V))
          : (V = er[91]),
        er[92] !== t ||
        er[93] !== i ||
        er[94] !== ea ||
        er[95] !== es ||
        er[96] !== R ||
        er[97] !== C ||
        er[98] !== E ||
        er[99] !== ev ||
        er[100] !== eh
          ? ((X =
              null == E || !eh || ev
                ? null
                : (0, r.jsx)(u.g, {
                    className: es ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, r.jsxs)(r.Fragment, {
                      children: [
                        null == i ? null : (0, r.jsx)("div", { className: "flex", children: i }),
                        (0, r.jsx)("h1", {
                          className: (0, o.A)("text-default", "compact" === ea ? "heading-lg" : "heading-xl"),
                          children: E,
                        }),
                        null == R
                          ? null
                          : (0, r.jsx)("div", {
                              className: (0, o.A)("text-base leading-6 text-balance text-secondary", C),
                              children: R,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, r.jsx)(u.T, { search: null, actions: t }),
                  })),
            (er[92] = t),
            (er[93] = i),
            (er[94] = ea),
            (er[95] = es),
            (er[96] = R),
            (er[97] = C),
            (er[98] = E),
            (er[99] = ev),
            (er[100] = eh),
            (er[101] = X))
          : (X = er[101]),
        er[102] !== eC ||
        er[103] !== eS ||
        er[104] !== ek ||
        er[105] !== eM ||
        er[106] !== W ||
        er[107] !== V ||
        er[108] !== X
          ? ((K = (0, r.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": eS,
              "data-app-shell-page-scrolled": ek,
              "data-settings-mobile-header": eM,
              onScroll: W,
              className: V,
              children: [X, eC],
            })),
            (er[102] = eC),
            (er[103] = eS),
            (er[104] = ek),
            (er[105] = eM),
            (er[106] = W),
            (er[107] = V),
            (er[108] = X),
            (er[109] = K))
          : (K = er[109]),
        er[110] !== b
          ? ((Q =
              null != b &&
              (0, r.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: b,
              })),
            (er[110] = b),
            (er[111] = Q))
          : (Q = er[111]),
        er[112] !== w ||
        er[113] !== _ ||
        er[114] !== Z ||
        er[115] !== D ||
        er[116] !== B ||
        er[117] !== K ||
        er[118] !== Q
          ? ((Y = (0, r.jsxs)("div", { ref: w, className: Z, ..._, children: [D, B, K, Q] })),
            (er[112] = w),
            (er[113] = _),
            (er[114] = Z),
            (er[115] = D),
            (er[116] = B),
            (er[117] = K),
            (er[118] = Q),
            (er[119] = Y))
          : (Y = er[119]),
        Y
      )
    }
    function f(e) {
      let t,
        i,
        o = (0, s.c)(8),
        { children: n, navigationKey: a, slateLayout: l, targetId: c, targetText: d } = e,
        u = void 0 !== l && l,
        p = void 0 === d ? null : d
      return (
        o[0] !== a || o[1] !== u || o[2] !== c || o[3] !== p
          ? ((t =
              null != c || null != p || u ? { navigationKey: a, slateLayout: u, targetId: c, targetText: p } : null),
            (o[0] = a),
            (o[1] = u),
            (o[2] = c),
            (o[3] = p),
            (o[4] = t))
          : (t = o[4]),
        o[5] !== n || o[6] !== t
          ? ((i = (0, r.jsx)(h.S.Provider, { value: t, children: n })), (o[5] = n), (o[6] = t), (o[7] = i))
          : (i = o[7]),
        i
      )
    }
  },
  oFmV(e, t, i) {
    let r = (0, i("zd8w").createContext)(null)
    i.d(t, {}, { S: r })
  },
  lSOQ(e, t, i) {
    i.d(t, { v: () => A })
    var r = i("ABep"),
      s = i("QosV"),
      o = i("zTeN"),
      n = i("OWtl"),
      a = i("RxZZ"),
      l = i("Ks4B"),
      c = i("oyxz"),
      d = i("ygO2"),
      u = i("UxN3"),
      p = i("zLIa"),
      g = i("vET2"),
      h = i("hGgS"),
      v = i("BSnr"),
      f = i("xSOA"),
      m = i("zd8w"),
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
        a,
        l,
        c,
        d = (0, s.c)(24),
        {
          ariaLabel: u,
          children: p,
          onSaved: g,
          placeholder: v,
          rows: _,
          savedValue: A,
          save: R,
          saveScope: C,
          subtitle: S,
          title: k,
          titleSize: M,
        } = e,
        E = void 0 === _ ? 6 : _
      d[0] !== g || d[1] !== R || d[2] !== C || d[3] !== A
        ? ((t = { savedValue: A, save: R, saveScope: C, onSaved: g }),
          (d[0] = g),
          (d[1] = R),
          (d[2] = C),
          (d[3] = A),
          (d[4] = t))
        : (t = d[4])
      let N = (function (e) {
          let t,
            i,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            g,
            h,
            v,
            _,
            j,
            A = (0, s.c)(38),
            { savedValue: R, save: C, saveScope: S, onSaved: k } = e,
            M = (0, o.gh)(n.u),
            E = (0, y.A)(),
            [N, L] = (0, m.useState)(null),
            [I, T] = (0, m.useState)(!1),
            P = (0, m.useRef)(null),
            G = (0, m.useRef)(null),
            q = `autosaving-instructions-${S}`
          ;(A[0] !== q ? ((t = { id: q }), (A[0] = q), (A[1] = t)) : (t = A[1]),
            A[2] !== C
              ? ((i = (e) => {
                  let { value: t } = e
                  return C(t)
                }),
                (A[2] = C),
                (A[3] = i))
              : (i = A[3]),
            A[4] !== k
              ? ((r = (e, t) => {
                  ;(P.current === t && ((P.current = null), L(null), T(!0)), k?.(t.value))
                }),
                (A[4] = k),
                (A[5] = r))
              : (r = A[5]),
            A[6] !== E || A[7] !== M
              ? ((a = () => {
                  M.get(x.Id).danger(
                    E.formatMessage({
                      id: "settings.git.instructions.autoSave.error",
                      defaultMessage: "Failed to save instructions",
                      description: "Error shown when automatically saving custom instructions fails",
                    }),
                    { errorAnalytics: { toastId: "settings.git.instructions.autoSave.error" } },
                  )
                }),
                (A[6] = E),
                (A[7] = M),
                (A[8] = a))
              : (a = A[8]),
            A[9] !== t || A[10] !== i || A[11] !== r || A[12] !== a
              ? ((l = { scope: t, networkMode: "always", mutationFn: i, onSuccess: r, onError: a }),
                (A[9] = t),
                (A[10] = i),
                (A[11] = r),
                (A[12] = a),
                (A[13] = l))
              : (l = A[13]))
          let U = (0, f.n)(l)
          A[14] !== U
            ? ((c = function (e) {
                let t = P.current
                if (null == t) return Promise.resolve(!0)
                let i = G.current
                if (i?.draft === t && !(void 0 !== e && e && U.isError && U.variables === t)) return i.result
                let r = U.mutateAsync(t).then(w, b)
                return ((G.current = { draft: t, result: r }), r)
              }),
              (A[14] = U),
              (A[15] = c))
            : (c = A[15])
          let H = c
          A[16] !== H
            ? ((d = () => {
                H()
              }),
              (A[16] = H),
              (A[17] = d))
            : (d = A[17])
          let F = (0, m.useEffectEvent)(d)
          ;(A[18] !== F || A[19] !== N
            ? ((u = () => {
                if (null == N) return
                let e = window.setTimeout(() => F(), 3e3)
                return () => window.clearTimeout(e)
              }),
              (A[18] = F),
              (A[19] = N),
              (A[20] = u))
            : (u = A[20]),
            A[21] !== N ? ((p = [N]), (A[21] = N), (A[22] = p)) : (p = A[22]),
            (0, m.useEffect)(u, p),
            A[23] !== F ? ((g = () => () => F()), (A[23] = F), (A[24] = g)) : (g = A[24]),
            A[25] === Symbol.for("react.memo_cache_sentinel") ? ((h = []), (A[25] = h)) : (h = A[25]),
            (0, m.useEffect)(g, h),
            A[26] !== I
              ? ((v = () => {
                  if (!I) return
                  let e = window.setTimeout(() => T(!1), 3e3)
                  return () => window.clearTimeout(e)
                }),
                (_ = [I]),
                (A[26] = I),
                (A[27] = v),
                (A[28] = _))
              : ((v = A[27]), (_ = A[28])),
            (0, m.useEffect)(v, _))
          let z = "idle"
          U.isPending ? (z = "saving") : null != N ? (z = "dirty") : I && (z = "saved")
          let O = N?.value ?? R,
            $ = U.isError && U.variables === N
          if (A[29] !== z || A[30] !== U || A[31] !== R || A[32] !== H || A[33] !== O || A[34] !== $) {
            let e
            ;(A[36] !== H ? ((e = () => H(!0)), (A[36] = H), (A[37] = e)) : (e = A[37]),
              (j = {
                value: O,
                actionState: z,
                saveFailed: $,
                change(e) {
                  ;((P.current = e !== R || U.isPending ? { value: e } : null), L(P.current), T(!1))
                },
                flush: e,
                discard() {
                  ;((P.current = null), L(null), U.reset())
                },
              }),
              (A[29] = z),
              (A[30] = U),
              (A[31] = R),
              (A[32] = H),
              (A[33] = O),
              (A[34] = $),
              (A[35] = j))
          } else j = A[35]
          return j
        })(t),
        L = "dirty" === N.actionState
      return (
        d[5] !== N
          ? ((i = (e) => {
              ;(e.preventDefault(), N.flush())
            }),
            (d[5] = N),
            (d[6] = i))
          : (i = d[6]),
        d[7] !== L || d[8] !== i
          ? ((a = { accelerator: "CmdOrCtrl+S", enabled: L, onKeyDown: i }), (d[7] = L), (d[8] = i), (d[9] = a))
          : (a = d[9]),
        (0, h.EE)(a),
        d[10] !== N ? ((l = () => void N.flush()), (d[10] = N), (d[11] = l)) : (l = d[11]),
        d[12] !== u ||
        d[13] !== p ||
        d[14] !== N.actionState ||
        d[15] !== N.change ||
        d[16] !== N.value ||
        d[17] !== v ||
        d[18] !== E ||
        d[19] !== S ||
        d[20] !== l ||
        d[21] !== k ||
        d[22] !== M
          ? ((c = (0, r.jsx)(j, {
              actionState: N.actionState,
              ariaLabel: u,
              currentValue: N.value,
              onChange: N.change,
              onSave: l,
              placeholder: v,
              rows: E,
              subtitle: S,
              title: k,
              titleSize: M,
              children: p,
            })),
            (d[12] = u),
            (d[13] = p),
            (d[14] = N.actionState),
            (d[15] = N.change),
            (d[16] = N.value),
            (d[17] = v),
            (d[18] = E),
            (d[19] = S),
            (d[20] = l),
            (d[21] = k),
            (d[22] = M),
            (d[23] = c))
          : (c = d[23]),
        c
      )
    }
    function j(e) {
      let t,
        i,
        o,
        n,
        a,
        h = (0, s.c)(25),
        {
          actionState: f,
          ariaLabel: m,
          children: y,
          currentValue: x,
          onChange: b,
          onSave: w,
          placeholder: _,
          rows: j,
          subtitle: A,
          title: R,
          titleSize: C,
        } = e,
        S = void 0 === j ? 6 : j,
        k = null
      if ("dirty" === f || "saving" === f) {
        let e,
          t,
          i = "saving" === f,
          s = "saving" === f
        ;(h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(c.A, {
              id: "settings.git.instructions.autoSave.save",
              defaultMessage: "Save",
              description: "Button that immediately saves pending custom instruction changes",
            })),
            (h[0] = e))
          : (e = h[0]),
          h[1] !== w || h[2] !== i || h[3] !== s
            ? ((t = (0, r.jsx)(d.$, {
                color: "secondary",
                disabled: i,
                loading: s,
                onClick: w,
                size: "toolbar",
                children: e,
              })),
              (h[1] = w),
              (h[2] = i),
              (h[3] = s),
              (h[4] = t))
            : (t = h[4]),
          (k = t))
      } else if ("saved" === f) {
        let e
        ;(h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsxs)("span", {
              className: "flex items-center gap-2 text-xs text-secondary",
              "aria-live": "polite",
              children: [
                (0, r.jsx)(u.bF, { "aria-hidden": !1, legacyIcon: g.A, asset16: l.G, legacyClassName: "icon-2xs" }),
                (0, r.jsx)(c.A, {
                  id: "settings.git.instructions.autoSave.saved",
                  defaultMessage: "Saved",
                  description: "Status shown after custom instruction changes are automatically saved",
                }),
              ],
            })),
            (h[5] = e))
          : (e = h[5]),
          (k = e))
      }
      return (
        h[6] !== k || h[7] !== A || h[8] !== R || h[9] !== C
          ? ((t = (0, r.jsx)(v.X.Header, { size: C, title: R, subtitle: A, actions: k })),
            (h[6] = k),
            (h[7] = A),
            (h[8] = R),
            (h[9] = C),
            (h[10] = t))
          : (t = h[10]),
        h[11] !== b
          ? ((i = (e) => {
              b(e.target.value)
            }),
            (h[11] = b),
            (h[12] = i))
          : (i = h[12]),
        h[13] !== m || h[14] !== x || h[15] !== _ || h[16] !== S || h[17] !== i
          ? ((o = (0, r.jsx)(p.TM, { value: x, onChange: i, placeholder: _, "aria-label": m, rows: S })),
            (h[13] = m),
            (h[14] = x),
            (h[15] = _),
            (h[16] = S),
            (h[17] = i),
            (h[18] = o))
          : (o = h[18]),
        h[19] !== y || h[20] !== o
          ? ((n = (0, r.jsxs)(v.X.Content, { children: [y, o] })), (h[19] = y), (h[20] = o), (h[21] = n))
          : (n = h[21]),
        h[22] !== t || h[23] !== n
          ? ((a = (0, r.jsxs)(v.X, { children: [t, n] })), (h[22] = t), (h[23] = n), (h[24] = a))
          : (a = h[24]),
        a
      )
    }
    function A(e) {
      let t,
        i,
        l,
        c,
        d = (0, s.c)(11)
      d[0] !== e ? (({ setting: i, ...t } = e), (d[0] = e), (d[1] = t), (d[2] = i)) : ((t = d[1]), (i = d[2]))
      let u = (0, o.gh)(n.u),
        p = (0, a.iK)(i)
      return (
        d[3] !== u || d[4] !== i ? ((l = (e) => (0, a.gc)(u, i, e)), (d[3] = u), (d[4] = i), (d[5] = l)) : (l = d[5]),
        d[6] !== t || d[7] !== p || d[8] !== i.key || d[9] !== l
          ? ((c = (0, r.jsx)(_, { ...t, savedValue: p, save: l, saveScope: i.key })),
            (d[6] = t),
            (d[7] = p),
            (d[8] = i.key),
            (d[9] = l),
            (d[10] = c))
          : (c = d[10]),
        c
      )
    }
  },
  uMwG(e, t, i) {
    var r = i("QosV"),
      s = i("T0Rc"),
      o = i("irkb"),
      n = i("xSOA"),
      a = i("zTeN"),
      l = i("SPnB"),
      c = i("eFn4"),
      d = i("EOo5"),
      u = i("GaA7"),
      p = i("hZax"),
      g = i("rvFo"),
      h = i("HFSu")
    function v(e) {
      return ["cloud-user-preferences", e]
    }
    function f(e) {
      return (0, a.Ul)(l.o8)
    }
    function m(e) {
      let { signal: t } = e
      return h.CodexRequest.safeGet("/wham/settings/user", { signal: t })
    }
    function y() {
      return h.CodexRequest.safeGet("/wham/settings/configs/user-preferences")
    }
    function x(e, t, i) {
      let r = e
      for (let e of t) r = r.replaceAll(e.value, i(e))
      return r
    }
    i.d(
      t,
      {},
      {
        If: f,
        Zl: function () {
          let e,
            t,
            i = (0, r.c)(6),
            { accountId: o, userId: n } = (0, d.As)()
          i[0] !== o || i[1] !== n
            ? ((e = ["cloud-preferences-config", o, n]), (i[0] = o), (i[1] = n), (i[2] = e))
            : (e = i[2])
          let a = null != o && null != n
          return (
            i[3] !== e || i[4] !== a
              ? ((t = { queryKey: e, queryFn: y, enabled: a, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (i[3] = e),
                (i[4] = a),
                (i[5] = t))
              : (t = i[5]),
            (0, s.I)(t)
          )
        },
        d9: function (e, t, i) {
          let r = (e.match(/{/g) ?? []).length
          if (r !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === r) return "missing-pattern"
          let s = i.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !s.includes(e))) return "invalid-pattern"
          let o = x(e, i, (e) => "x".repeat(e.char_count))
          return o.length > t
            ? "too-long"
            : o.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(o)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return x(e, t, (e) => e.example)
        },
        sN: function () {
          let e,
            t,
            i,
            s,
            a,
            l = (0, r.c)(13),
            { accountId: c, userId: p } = (0, d.As)(),
            g = f(p),
            m = (0, o.jE)()
          return (
            l[0] !== c || l[1] !== g
              ? ((e = ["update-cloud-user-preferences", c, g]),
                (t = (e) => {
                  if (null == c || null == g) throw Error("Sign in to update preferences")
                  return h.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: c, userId: g },
                    requestBody: e,
                  })
                }),
                (l[0] = c),
                (l[1] = g),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== g ? ((i = () => ({ queryKey: v(g) })), (l[4] = g), (l[5] = i)) : (i = l[5]),
            l[6] !== m
              ? ((s = async (e, t, i) => {
                  null != i &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (u.appServices?.clientCoordination ?? u.appServices?.queryCache)?.invalidateQueryCache({
                        queryKey: [...i.queryKey],
                      })),
                    m.setQueryData(i.queryKey, e))
                }),
                (l[6] = m),
                (l[7] = s))
              : (s = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== i || l[11] !== s
              ? ((a = { mutationKey: e, mutationFn: t, onMutate: i, onSuccess: s }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = i),
                (l[11] = s),
                (l[12] = a))
              : (a = l[12]),
            (0, n.n)(a)
          )
        },
        tz: function () {
          let e,
            t = (0, r.c)(3),
            { authMethod: i, isLoading: s } = (0, d.As)(),
            o = (0, p.Zj)("2826489636"),
            n = (0, p.Zj)((!!s || "chatgpt" === i || "chatgptAuthTokens" === i) && "1168186395"),
            l = (0, p.Zj)(!!n && "3816307151"),
            u = (0, a.Ul)(l ? c.L5 : null),
            g = l && (void 0 === u ? void 0 : (u?.cloudAccess ?? !0)),
            h = o || g
          return (
            t[0] !== g || t[1] !== h
              ? ((e = { cloudInstructionsEnabled: g, unifiedInstructions: h }), (t[0] = g), (t[1] = h), (t[2] = e))
              : (e = t[2]),
            e
          )
        },
        wJ: function () {
          let e,
            t,
            i = (0, r.c)(5),
            { userId: o } = (0, d.As)(),
            n = f(o)
          i[0] !== n ? ((e = v(n)), (i[0] = n), (i[1] = e)) : (e = i[1])
          let a = null != n
          return (
            i[2] !== e || i[3] !== a
              ? ((t = { queryKey: e, queryFn: m, enabled: a, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (i[2] = e),
                (i[3] = a),
                (i[4] = t))
              : (t = i[4]),
            (0, s.I)(t)
          )
        },
      },
    )
  },
  u5Xi(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      o = i("zd8w"),
      n = i("oyxz"),
      a = i("bqtn"),
      l = i("F0xz"),
      c = i("BSnr"),
      d = i("AWNZ"),
      u = i("QyE3"),
      p = i("ZEx5")
    function g(e) {
      let t,
        i,
        o,
        n,
        a,
        l = (0, s.c)(10)
      return (
        l[0] !== e
          ? (({ label: i, description: t, ...o } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = o))
          : ((t = l[1]), (i = l[2]), (o = l[3])),
        l[4] !== o ? ((n = (e) => (0, r.jsx)(h, { ...o, ...e })), (l[4] = o), (l[5] = n)) : (n = l[5]),
        l[6] !== t || l[7] !== i || l[8] !== n
          ? ((a = (0, r.jsx)(d.ic, { label: i, description: t, control: n })),
            (l[6] = t),
            (l[7] = i),
            (l[8] = n),
            (l[9] = a))
          : (a = l[9]),
        a
      )
    }
    function h(e) {
      let t,
        i,
        n,
        l,
        c,
        d,
        p,
        g,
        h,
        f,
        m,
        y,
        x,
        b,
        w = (0, s.c)(40)
      w[0] !== e
        ? (({ value: p, options: l, disabled: i, onChange: n, renderLabel: d, renderDescription: c, ...t } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = i),
          (w[3] = n),
          (w[4] = l),
          (w[5] = c),
          (w[6] = d),
          (w[7] = p))
        : ((t = w[1]), (i = w[2]), (n = w[3]), (l = w[4]), (c = w[5]), (d = w[6]), (p = w[7]))
      let _ = (0, o.useId)(),
        j = null == c ? void 0 : "panelWide",
        A = null == t["aria-labelledby"] ? void 0 : `${t["aria-labelledby"]} ${_}`
      if (
        (w[8] !== t || w[9] !== _
          ? ((g = null == t["aria-label"] ? t["aria-describedby"] : [t["aria-describedby"], _].filter(v).join(" ")),
            (w[8] = t),
            (w[9] = _),
            (w[10] = g))
          : (g = w[10]),
        w[11] !== d || w[12] !== p ? ((h = d(p)), (w[11] = d), (w[12] = p), (w[13] = h)) : (h = w[13]),
        w[14] !== h || w[15] !== _
          ? ((f = (0, r.jsx)("span", { id: _, children: h })), (w[14] = h), (w[15] = _), (w[16] = f))
          : (f = w[16]),
        w[17] !== t || w[18] !== i || w[19] !== A || w[20] !== g || w[21] !== f
          ? ((m = (0, r.jsx)(u.vg, { ...t, "aria-labelledby": A, "aria-describedby": g, disabled: i, children: f })),
            (w[17] = t),
            (w[18] = i),
            (w[19] = A),
            (w[20] = g),
            (w[21] = f),
            (w[22] = m))
          : (m = w[22]),
        w[23] !== n || w[24] !== l || w[25] !== c || w[26] !== d)
      ) {
        let e
        ;(w[28] !== n || w[29] !== c || w[30] !== d
          ? ((e = (e) =>
              (0, r.jsx)(a.ms.RadioItem, { value: e, onSelect: () => n(e), SubText: c?.(e), children: d(e) }, e)),
            (w[28] = n),
            (w[29] = c),
            (w[30] = d),
            (w[31] = e))
          : (e = w[31]),
          (y = l.map(e)),
          (w[23] = n),
          (w[24] = l),
          (w[25] = c),
          (w[26] = d),
          (w[27] = y))
      } else y = w[27]
      return (
        w[32] !== y || w[33] !== p
          ? ((x = (0, r.jsx)(a.ms.RadioGroup, { value: p, children: y })), (w[32] = y), (w[33] = p), (w[34] = x))
          : (x = w[34]),
        w[35] !== i || w[36] !== j || w[37] !== m || w[38] !== x
          ? ((b = (0, r.jsx)(a.Ab, { contentWidth: j, disabled: i, triggerButton: m, children: x })),
            (w[35] = i),
            (w[36] = j),
            (w[37] = m),
            (w[38] = x),
            (w[39] = b))
          : (b = w[39]),
        b
      )
    }
    function v(e) {
      return null != e
    }
    function f(e) {
      return (0, r.jsx)(n.A, {
        id: "settings.codeReview.repository.scope.option",
        defaultMessage: "{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}",
        description:
          "Automatic review scope in repository settings. All PRs includes every contributor, Team PRs preserves an existing workspace setting, and Follow personal preferences lets each contributor opt in. PR means pull request.",
        values: { scope: e },
      })
    }
    i.d(
      t,
      {},
      {
        Qt: function (e) {
          let t,
            i = (0, s.c)(2),
            { value: o } = e
          return (
            i[0] !== o
              ? ((t = (0, r.jsx)(n.A, {
                  id: "settings.codeReview.repository.severity.option.v2",
                  defaultMessage:
                    "{value, select, critical {Critical} high {High} medium {Medium} low {Low} inherit {Use repository setting} other {Unknown}}",
                  description:
                    "Minimum severity of vulnerability findings reported or blocked by repository security review. The inherit option uses the corresponding automatic or manual repository setting for a path override.",
                  values: { value: o },
                })),
                (i[0] = o),
                (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        SA: function (e) {
          let t,
            i,
            o,
            a,
            u,
            h,
            v,
            m,
            y = (0, s.c)(26),
            { title: x, children: b, security: w, preferences: _, disabled: j, onUpdate: A } = e,
            R = "never_review" !== _.global_review_preference,
            C = "team" === _.review_preference ? "team" : "personal"
          ;("review_everyone" === _.global_review_preference && (C = "everyone"),
            y[0] !== x ? ((t = (0, r.jsx)(c.X.Header, { title: x })), (y[0] = x), (y[1] = t)) : (t = y[1]))
          let S = String(void 0 !== w && w)
          ;(y[2] !== S
            ? ((i = (0, r.jsx)(n.A, {
                id: "settings.codeReview.repository.automatic",
                defaultMessage: "{security, select, true {Auto security review} other {Automatic review}}",
                description:
                  "Label for the repository setting that enables automatic reviews. Security reviews look for vulnerabilities; the other option reviews code.",
                values: { security: S },
              })),
              (y[2] = S),
              (y[3] = i))
            : (i = y[3]),
            y[4] !== R
              ? ((o = R
                  ? void 0
                  : (0, r.jsx)(n.A, {
                      id: "settings.codeReview.repository.manualReviewNotice",
                      defaultMessage: "You can still request a review with @codex",
                      description:
                        "Notice shown while automatic repository reviews are disabled. Signed-in Codex users can request a manual review by mentioning @codex.",
                    })),
                (y[4] = R),
                (y[5] = o))
              : (o = y[5]),
            y[6] !== j || y[7] !== R || y[8] !== A
              ? ((a = (e) =>
                  (0, r.jsx)(l.l, {
                    ...e,
                    checked: R,
                    disabled: j,
                    onChange: (e) => A({ global_review_preference: e ? "review_if_enabled" : "never_review" }),
                  })),
                (y[6] = j),
                (y[7] = R),
                (y[8] = A),
                (y[9] = a))
              : (a = y[9]),
            y[10] !== i || y[11] !== o || y[12] !== a
              ? ((u = (0, r.jsx)(d.ic, { label: i, description: o, control: a })),
                (y[10] = i),
                (y[11] = o),
                (y[12] = a),
                (y[13] = u))
              : (u = y[13]),
            y[14] !== j || y[15] !== R || y[16] !== A || y[17] !== C
              ? ((h = R
                  ? (0, r.jsx)(g, {
                      label: (0, r.jsx)(n.A, {
                        id: "settings.codeReview.repository.scope",
                        defaultMessage: "Review",
                        description:
                          "Label for selecting whose pull requests receive automatic reviews in repository settings.",
                      }),
                      value: C,
                      options: ["everyone", "team", "personal"],
                      disabled: j,
                      onChange: (e) =>
                        A({
                          global_review_preference: "everyone" === e ? "review_everyone" : "review_if_enabled",
                          review_preference: "personal" === e ? "never" : "team",
                        }),
                      renderLabel: f,
                    })
                  : null),
                (y[14] = j),
                (y[15] = R),
                (y[16] = A),
                (y[17] = C),
                (y[18] = h))
              : (h = y[18]))
          let k = R ? b : null
          return (
            y[19] !== u || y[20] !== h || y[21] !== k
              ? ((v = (0, r.jsx)(c.X.Content, { children: (0, r.jsxs)(p.t, { children: [u, h, k] }) })),
                (y[19] = u),
                (y[20] = h),
                (y[21] = k),
                (y[22] = v))
              : (v = y[22]),
            y[23] !== v || y[24] !== t
              ? ((m = (0, r.jsxs)(c.X, { children: [t, v] })), (y[23] = v), (y[24] = t), (y[25] = m))
              : (m = y[25]),
            m
          )
        },
        _P: g,
        dN: function (e) {
          let t,
            i = (0, s.c)(2),
            { value: o } = e
          return (
            i[0] !== o
              ? ((t = (0, r.jsx)(n.A, {
                  id: "settings.codeReview.repository.trigger.option",
                  defaultMessage:
                    "{value, select, personal {Follow personal preferences} pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}",
                  description:
                    "Options for when automatic repository reviews run. PR means pull request. Smart detect lets Codex decide whether changed code needs another review.",
                  values: { value: o },
                })),
                (i[0] = o),
                (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        wW: h,
      },
    )
  },
  Vujf(e, t, i) {
    var r = i("zTeN"),
      s = i("SUID"),
      o = i("uc7r"),
      n = i("SPnB"),
      a = i("OWtl"),
      l = i("rvFo"),
      c = i("HFSu"),
      d = i("GDNt")
    let u = (0, r.vU)(a.u, (e, { get: t, scope: i }) => {
        let r = t(n.chatGptAuthenticatedAccountId$),
          a = t(n.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["repository-review-connectors", r, a, e],
          enabled: !!r && !!a,
          queryFn: async ({ client: t, signal: l }) => {
            let c = (await (0, s.g)({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => "DISABLED_BY_ADMIN" !== e.status && e.labels?.admin_only_connector !== "true",
            )
            if (0 === c.length) return []
            l.throwIfAborted()
            let d = await t.fetchQuery({ ...(0, o.dZ)({ accountId: r, userId: a, productSku: "CODEX" }), staleTime: 0 })
            if (
              (l.throwIfAborted(),
              i.get(n.chatGptAuthenticatedAccountId$) !== r || i.get(n.chatGptAuthenticatedUserId$) !== a)
            )
              throw Error("Account changed while loading repository connections")
            let u = new Set(d.map((e) => e.connector_id))
            return c.filter((e) => u.has(e.id))
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: l.D.FIVE_MINUTES,
        }
      }),
      p = (0, r.vU)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(n.chatGptAuthenticatedAccountId$), "list", e],
        queryFn: () => f(e),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      g = (0, r.N3)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(n.chatGptAuthenticatedAccountId$), "infinite-list", e],
        initialPageParam: null,
        queryFn: ({ pageParam: t }) => f({ ...e, nextToken: t }),
        getNextPageParam: (e) => e.next_token ?? null,
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      h = (0, r.vU)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(n.chatGptAuthenticatedAccountId$), "detail", e],
        queryFn: () =>
          c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      v = (0, r.c4)(a.u, (e, { scope: t }) => ({
        mutationFn: (e) =>
          c.CodexRequest.safePatch("/wham/settings/code_review", {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] })
        },
        onError: async (i) => {
          i instanceof d.fk && 409 === i.status && (await t.query.invalidate(h, e))
        },
      }))
    async function f(e) {
      let t = e.search.trim()
      if (0 === t.length && "gitlab" === e.provider)
        return c.CodexRequest.safeGet("/wham/settings/code_review", {
          parameters: {
            query: { provider: e.provider, next_token: e.nextToken, connector_id: e.connectorId, per_page: 8 },
          },
        })
      let i = Number(e.nextToken ?? 1),
        r = (function (e, t) {
          let i = e,
            r = /^https?:\/\//i.test(i),
            s = i.replace(/^www\./i, "")
          if (r || s.toLowerCase().startsWith("gitlab" === t ? "gitlab.com/" : "github.com/")) {
            let e = URL.parse(r ? i : `https://${s}`)
            if (null == e) return null
            i = e.pathname
          }
          "github" === t && (i = i.toLowerCase())
          let o = (i = i.replace(/\.git$/, "")).split("/").filter(Boolean)
          if ("gitlab" === t) {
            let e = o.findIndex((e, t) => t >= 2 && "-" === e)
            ;-1 !== e && (o = o.slice(0, e))
          }
          return o.length < 2 ? null : "gitlab" === t ? o.join("/") : o.slice(0, 2).join("/")
        })(t, e.provider)
      if (1 === i && null != r)
        try {
          let t = await c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
            expectedErrorStatuses: [400, 403, 404],
            parameters: { path: { repo_id: `${e.provider}-${r}` }, query: { connector_id: e.connectorId } },
          })
          return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null }
        } catch (e) {
          if (!(e instanceof d.fk) || ![400, 403, 404].includes(e.status)) throw e
        }
      let s = await c.CodexRequest.safeGet("/wham/settings/code_review_search", {
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
        ...s,
        next_token: s.repo_review_settings.length < 8 || ("github" === e.provider && i >= 125) ? null : String(i + 1),
      }
    }
    i.d(t, {}, { BX: p, Hm: u, _E: h, jm: g, uH: v })
  },
  BSnr(e, t, i) {
    i.d(t, { X: () => n })
    var r = i("ABep"),
      s = i("QosV"),
      o = i("on57")
    let n = Object.assign(
      function (e) {
        let t,
          i,
          n = (0, s.c)(6),
          { children: a, id: l, className: c } = e
        return (
          n[0] !== c ? ((t = (0, o.A)("flex flex-col", c)), (n[0] = c), (n[1] = t)) : (t = n[1]),
          n[2] !== a || n[3] !== l || n[4] !== t
            ? ((i = (0, r.jsx)("section", { id: l, className: t, children: a })),
              (n[2] = a),
              (n[3] = l),
              (n[4] = t),
              (n[5] = i))
            : (i = n[5]),
          i
        )
      },
      {
        Header: function (e) {
          let t,
            i,
            n,
            a,
            l,
            c,
            d,
            u = (0, s.c)(32),
            {
              title: p,
              subtitle: g,
              actions: h,
              actionsAlignment: v,
              className: f,
              size: m,
              titleGap: y,
              spacing: x,
              subtitlePlacement: b,
              subtitleWrap: w,
            } = e,
            _ = void 0 === m ? "default" : m,
            j = void 0 === x ? "default" : x,
            A = void 0 === b ? "below-title" : b,
            R = void 0 === w ? "balance" : w,
            C = null != p,
            S = null != g,
            k = null != h,
            M = "compact" === _
          u[0] !== M || u[1] !== g || u[2] !== A || u[3] !== R
            ? ((t = g
                ? (0, r.jsx)("div", {
                    className: (0, o.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === R ? "text-balance" : "text-wrap",
                      M ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = M),
              (u[1] = g),
              (u[2] = A),
              (u[3] = R),
              (u[4] = t))
            : (t = u[4])
          let E = t
          if (!C && !S && !k) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(r.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let N = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            L = S && "compact" === j && "pb-2",
            I = S && "compact" !== j && "pb-3"
          u[6] !== f || u[7] !== S || u[8] !== M || u[9] !== j || u[10] !== N || u[11] !== L || u[12] !== I
            ? ((i = (0, o.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                N,
                L,
                I,
                !S && (0, o.A)("items-center pb-1.5", "compact" === j ? "min-h-8" : "min-h-toolbar"),
                S && M && "items-center",
                S && !M && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = S),
              (u[8] = M),
              (u[9] = j),
              (u[10] = N),
              (u[11] = L),
              (u[12] = I),
              (u[13] = i))
            : (i = u[13])
          let T =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== T ? ((n = (0, o.A)("flex min-w-0 flex-1 flex-col", T)), (u[14] = T), (u[15] = n)) : (n = u[15]),
            u[16] !== S || u[17] !== _ || u[18] !== p
              ? ((a = p
                  ? (0, r.jsx)("div", {
                      className: (0, o.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === _ && "text-sm leading-[18px]",
                        ("large" === _ || ("default" === _ && S)) && "text-lg",
                        ("base" === _ || ("default" === _ && !S)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = S),
                (u[17] = _),
                (u[18] = p),
                (u[19] = a))
              : (a = u[19]))
          let P = "below-title" === A ? E : null
          ;(u[20] !== n || u[21] !== a || u[22] !== P
            ? ((l = (0, r.jsxs)("div", { className: n, children: [a, P] })),
              (u[20] = n),
              (u[21] = a),
              (u[22] = P),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== h || u[25] !== v
              ? ((c = h
                  ? (0, r.jsx)("div", {
                      className: (0, o.A)("flex items-center gap-2", "end" === v && "self-end"),
                      children: h,
                    })
                  : null),
                (u[24] = h),
                (u[25] = v),
                (u[26] = c))
              : (c = u[26]))
          let G = "below-header" === A ? E : null
          return (
            u[27] !== i || u[28] !== l || u[29] !== c || u[30] !== G
              ? ((d = (0, r.jsxs)("div", { className: i, children: [l, c, G] })),
                (u[27] = i),
                (u[28] = l),
                (u[29] = c),
                (u[30] = G),
                (u[31] = d))
              : (d = u[31]),
            d
          )
        },
        Content: function (e) {
          let t,
            i,
            n = (0, s.c)(5),
            { children: a, className: l } = e
          return (
            n[0] !== l ? ((t = (0, o.A)("flex flex-col gap-1.5", l)), (n[0] = l), (n[1] = t)) : (t = n[1]),
            n[2] !== a || n[3] !== t
              ? ((i = (0, r.jsx)("div", { className: t, children: a })), (n[2] = a), (n[3] = t), (n[4] = i))
              : (i = n[4]),
            i
          )
        },
        Footer: function (e) {
          let t,
            i,
            n = (0, s.c)(6),
            { children: a, className: l, variant: c } = e,
            d =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            n[0] !== l || n[1] !== d
              ? ((t = (0, o.A)("text-balance text-secondary", d, l)), (n[0] = l), (n[1] = d), (n[2] = t))
              : (t = n[2]),
            n[3] !== a || n[4] !== t
              ? ((i = (0, r.jsx)("div", { className: t, children: a })), (n[3] = a), (n[4] = t), (n[5] = i))
              : (i = n[5]),
            i
          )
        },
      },
    )
  },
  odCE(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      o = i("oyxz"),
      n = i("RNul")
    i.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            i,
            a,
            l = (0, s.c)(5),
            { children: c } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(n.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== c
              ? ((i =
                  void 0 === c
                    ? (0, r.jsx)(o.A, {
                        id: "settings.panel.loading",
                        defaultMessage: "Loading settings…",
                        description: "Loading state shown while settings load",
                      })
                    : c),
                (l[1] = c),
                (l[2] = i))
              : (i = l[2]),
            l[3] !== i
              ? ((a = (0, r.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, r.jsx)("span", { className: "text-balance", children: i })],
                })),
                (l[3] = i),
                (l[4] = a))
              : (a = l[4]),
            a
          )
        },
      },
    )
  },
  bZug(e, t, i) {
    i.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      o = i("on57"),
      n = i("zd8w"),
      a = i("HZfM"),
      l = i("GO7r")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        i,
        n,
        a,
        l,
        c,
        d,
        u = (0, s.c)(24),
        {
          label: p,
          labelId: g,
          labelSizing: h,
          labelWeight: v,
          description: f,
          descriptionId: m,
          icon: y,
          variant: x,
          verticalAlignment: b,
        } = e,
        w = "start" === b ? "items-start" : "items-center",
        _ = "grow" === (void 0 === h ? "grow" : h) && "flex-1"
      ;(u[0] !== w || u[1] !== _
        ? ((t = (0, o.A)("flex min-w-0 gap-3", w, _)), (u[0] = w), (u[1] = _), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((i = null != y ? (0, r.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = i))
          : (i = u[4]))
      let j = "featured" === x && "text-base",
        A = "recommendation" === x && "text-[13px] leading-[18.571429px]",
        R = "featured" !== x && "recommendation" !== x && "text-sm",
        C = "nested" !== x && "medium" === (void 0 === v ? "medium" : v) && "font-medium"
      return (
        u[5] !== C || u[6] !== j || u[7] !== A || u[8] !== R
          ? ((n = (0, o.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              j,
              A,
              R,
              C,
            )),
            (u[5] = C),
            (u[6] = j),
            (u[7] = A),
            (u[8] = R),
            (u[9] = n))
          : (n = u[9]),
        u[10] !== p || u[11] !== g || u[12] !== n
          ? ((a = (0, r.jsx)("div", { id: g, className: n, children: p })),
            (u[10] = p),
            (u[11] = g),
            (u[12] = n),
            (u[13] = a))
          : (a = u[13]),
        u[14] !== f || u[15] !== m
          ? ((l = f
              ? (0, r.jsx)("div", {
                  id: m,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: f,
                })
              : null),
            (u[14] = f),
            (u[15] = m),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== a || u[18] !== l
          ? ((c = (0, r.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [a, l] })),
            (u[17] = a),
            (u[18] = l),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== i
          ? ((d = (0, r.jsxs)("div", { className: t, children: [i, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = i),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    i.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            i,
            n,
            a,
            l,
            c,
            d = (0, s.c)(18),
            { children: u, compactLabelInset: p, label: g, valueAlignment: h, variant: v } = e,
            f = void 0 === p || p,
            m = void 0 === h ? "start" : h,
            y = void 0 === v ? "default" : v,
            x =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== x ? ((t = (0, o.A)("grid items-center", x)), (d[0] = x), (d[1] = t)) : (t = d[1]),
            d[2] !== f || d[3] !== y
              ? ((i = (0, o.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, o.A)("flex items-center pe-2 text-start", f && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = f),
                (d[3] = y),
                (d[4] = i))
              : (i = d[4]),
            d[5] !== g || d[6] !== i
              ? ((n = (0, r.jsx)("div", { className: i, children: g })), (d[5] = g), (d[6] = i), (d[7] = n))
              : (n = d[7]),
            d[8] !== m || d[9] !== y
              ? ((a = (0, o.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, o.A)("break-words whitespace-normal text-sm text-default", "end" === m && "text-end"),
                )),
                (d[8] = m),
                (d[9] = y),
                (d[10] = a))
              : (a = d[10]),
            d[11] !== u || d[12] !== a
              ? ((l = (0, r.jsx)("div", { className: a, children: u })), (d[11] = u), (d[12] = a), (d[13] = l))
              : (l = d[13]),
            d[14] !== t || d[15] !== n || d[16] !== l
              ? ((c = (0, r.jsxs)("div", { className: t, children: [n, l] })),
                (d[14] = t),
                (d[15] = n),
                (d[16] = l),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            i,
            a,
            l,
            c = (0, s.c)(35),
            {
              label: u,
              labelSizing: p,
              labelWeight: g,
              layout: h,
              description: v,
              control: f,
              controlSizing: m,
              icon: y,
              className: x,
              id: b,
              inset: w,
              size: _,
              variant: j,
              verticalAlignment: A,
            } = e,
            R = void 0 === p ? "grow" : p,
            C = void 0 === g ? "medium" : g,
            S = void 0 === h ? "default" : h,
            k = void 0 === m ? "minimum" : m,
            M = void 0 === w || w,
            E = void 0 === _ ? "default" : _,
            N = void 0 === j ? "default" : j,
            L = void 0 === A ? "center" : A,
            I = (0, n.useId)(),
            T = null != u || null != v || null != y,
            P = "function" == typeof f,
            G = P && null != u ? `${I}-label` : void 0,
            q = P && v ? `${I}-description` : void 0,
            U = M && ("split" !== S || "default" !== N) && "px-4",
            H = M && "nested" === N && "group-data-[density=form]/settings:px-5",
            F =
              "stacked" === N &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            z =
              "nested" === N &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            O = "stacked" !== N && ("start" === L ? "items-start" : "items-center"),
            $ = "split" === S && "default" === N && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== x ||
            c[1] !== S ||
            c[2] !== E ||
            c[3] !== H ||
            c[4] !== F ||
            c[5] !== z ||
            c[6] !== O ||
            c[7] !== $ ||
            c[8] !== U ||
            c[9] !== N
              ? ((t = (0, o.A)(
                  "@container/settings-row",
                  U,
                  H,
                  F,
                  z,
                  O,
                  $,
                  "default" === S &&
                    ("default" === N || "featured" === N || "recommendation" === N) &&
                    (0, o.A)(
                      "flex justify-between",
                      "featured" === N && (0, o.A)("gap-6", "compact" === E ? "min-h-11 py-2" : "py-4"),
                      "featured" !== N && ("compact" === E ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === N && "dark:bg-primary-ghost-hover",
                  x,
                )),
                (c[0] = x),
                (c[1] = S),
                (c[2] = E),
                (c[3] = H),
                (c[4] = F),
                (c[5] = z),
                (c[6] = O),
                (c[7] = $),
                (c[8] = U),
                (c[9] = N),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== v ||
            c[12] !== q ||
            c[13] !== T ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== G ||
            c[17] !== R ||
            c[18] !== C ||
            c[19] !== N ||
            c[20] !== L
              ? ((i = T
                  ? (0, r.jsx)(d, {
                      label: u,
                      labelId: G,
                      labelSizing: R,
                      labelWeight: C,
                      description: v,
                      descriptionId: q,
                      icon: y,
                      variant: N,
                      verticalAlignment: L,
                    })
                  : null),
                (c[11] = v),
                (c[12] = q),
                (c[13] = T),
                (c[14] = y),
                (c[15] = u),
                (c[16] = G),
                (c[17] = R),
                (c[18] = C),
                (c[19] = N),
                (c[20] = L),
                (c[21] = i))
              : (i = c[21]),
            c[22] !== f || c[23] !== k || c[24] !== q || c[25] !== P || c[26] !== G || c[27] !== S || c[28] !== N
              ? ((a =
                  null != f && !1 !== f
                    ? (0, r.jsx)("div", {
                        className: (0, o.A)(
                          "stacked" === N && "w-full",
                          "nested" === N && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === N &&
                            (0, o.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === k && "w-full",
                            ),
                          "default" === S &&
                            ("default" === N || "featured" === N || "recommendation" === N) &&
                            (0, o.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === k ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === k && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: P ? f({ "aria-labelledby": G, "aria-describedby": q }) : f,
                      })
                    : null),
                (c[22] = f),
                (c[23] = k),
                (c[24] = q),
                (c[25] = P),
                (c[26] = G),
                (c[27] = S),
                (c[28] = N),
                (c[29] = a))
              : (a = c[29]),
            c[30] !== b || c[31] !== t || c[32] !== i || c[33] !== a
              ? ((l = (0, r.jsxs)("div", { id: b, className: t, children: [i, a] })),
                (c[30] = b),
                (c[31] = t),
                (c[32] = i),
                (c[33] = a),
                (c[34] = l))
              : (l = c[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            i = (0, s.c)(2),
            { children: o } = e
          return (
            i[0] !== o
              ? ((t = (0, r.jsx)("span", { className: "text-xs text-secondary", children: o })), (i[0] = o), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            i,
            n,
            l,
            u,
            p,
            g,
            h,
            v,
            f,
            m,
            y,
            x,
            b,
            w,
            _,
            j,
            A,
            R,
            C,
            S,
            k,
            M,
            E = (0, s.c)(54)
          E[0] !== e
            ? (({
                actions: t,
                actionsPlacement: m,
                ariaControls: i,
                ariaExpanded: n,
                ariaLabel: l,
                className: u,
                description: p,
                disabled: g,
                edgeRounding: y,
                icon: h,
                label: f,
                size: x,
                trailing: w,
                variant: b,
                ...v
              } = e),
              (E[0] = e),
              (E[1] = t),
              (E[2] = i),
              (E[3] = n),
              (E[4] = l),
              (E[5] = u),
              (E[6] = p),
              (E[7] = g),
              (E[8] = h),
              (E[9] = v),
              (E[10] = f),
              (E[11] = m),
              (E[12] = y),
              (E[13] = x),
              (E[14] = b),
              (E[15] = w))
            : ((t = E[1]),
              (i = E[2]),
              (n = E[3]),
              (l = E[4]),
              (u = E[5]),
              (p = E[6]),
              (g = E[7]),
              (h = E[8]),
              (v = E[9]),
              (f = E[10]),
              (m = E[11]),
              (y = E[12]),
              (x = E[13]),
              (b = E[14]),
              (w = E[15]))
          let N = void 0 === y ? "row" : y,
            L = void 0 === x ? "default" : x,
            I = void 0 === b ? "default" : b,
            T = "before-trailing" === (void 0 === m ? "end" : m) && !g && null != t && null != w,
            P = T ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          E[16] !== u || E[17] !== T || E[18] !== L || E[19] !== P || E[20] !== I
            ? ((_ = (0, o.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                P,
                "empty" === I
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, o.A)(
                      "px-4 text-start",
                      "nested" === I && "min-h-10 py-0.5",
                      "nested" !== I && ("large" === L ? "py-4" : "py-3"),
                      T && "gap-2",
                      !T && ("nested" === I ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (E[16] = u),
              (E[17] = T),
              (E[18] = L),
              (E[19] = P),
              (E[20] = I),
              (E[21] = _))
            : (_ = E[21])
          let G = _
          ;(E[22] !== p || E[23] !== h || E[24] !== f || E[25] !== I
            ? ((j =
                "empty" === I
                  ? (0, r.jsxs)(r.Fragment, { children: [h, f] })
                  : (0, r.jsx)(d, { label: f, description: p, icon: h, variant: I, verticalAlignment: "center" })),
              (E[22] = p),
              (E[23] = h),
              (E[24] = f),
              (E[25] = I),
              (E[26] = j))
            : (j = E[26]),
            E[27] !== w
              ? ((A =
                  null != w
                    ? (0, r.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (E[27] = w),
                (E[28] = A))
              : (A = E[28]),
            E[29] !== j || E[30] !== A
              ? ((R = (0, r.jsxs)(r.Fragment, { children: [j, A] })), (E[29] = j), (E[30] = A), (E[31] = R))
              : (R = E[31]))
          let q = R,
            U = T ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            H = "row" === N && "first:rounded-t-2xl last:rounded-b-2xl",
            F = "recommendation" === I && "dark:bg-primary-ghost-hover",
            z = !g && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            O =
              !g &&
              "recommendation" === I &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            E[32] !== U || E[33] !== H || E[34] !== F || E[35] !== z || E[36] !== O
              ? ((C = (0, o.A)("group w-full items-center", U, H, F, z, O)),
                (E[32] = U),
                (E[33] = H),
                (E[34] = F),
                (E[35] = z),
                (E[36] = O),
                (E[37] = C))
              : (C = E[37]),
            E[38] !== i || E[39] !== n || E[40] !== l || E[41] !== q || E[42] !== g || E[43] !== v || E[44] !== G
              ? ((S =
                  null != v.to
                    ? (0, r.jsx)(a.N_, {
                        ...v,
                        className: G,
                        "aria-controls": i,
                        "aria-expanded": n,
                        "aria-label": l,
                        "aria-disabled": g || void 0,
                        tabIndex: g ? -1 : void 0,
                        onClick: g ? c : v.onClick,
                        children: q,
                      })
                    : (0, r.jsx)("button", {
                        ...v,
                        className: G,
                        "aria-controls": i,
                        "aria-expanded": n,
                        "aria-label": l,
                        disabled: g,
                        type: "button",
                        children: q,
                      })),
                (E[38] = i),
                (E[39] = n),
                (E[40] = l),
                (E[41] = q),
                (E[42] = g),
                (E[43] = v),
                (E[44] = G),
                (E[45] = S))
              : (S = E[45]),
            E[46] !== t || E[47] !== g || E[48] !== T
              ? ((k =
                  g || null == t
                    ? null
                    : (0, r.jsx)("div", {
                        className: (0, o.A)(
                          "flex shrink-0 items-center gap-1",
                          T ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (E[46] = t),
                (E[47] = g),
                (E[48] = T),
                (E[49] = k))
              : (k = E[49]),
            E[50] !== C || E[51] !== S || E[52] !== k
              ? ((M = (0, r.jsxs)("div", { className: C, children: [S, k] })),
                (E[50] = C),
                (E[51] = S),
                (E[52] = k),
                (E[53] = M))
              : (M = E[53]),
            M
          )
        },
        kf: function (e) {
          let t,
            i = (0, s.c)(2),
            { children: o } = e
          return (
            i[0] !== o
              ? ((t = (0, r.jsx)("span", { className: "text-tertiary", children: o })), (i[0] = o), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            i,
            n,
            a,
            c,
            d,
            u,
            p,
            g,
            h,
            v = (0, s.c)(43),
            {
              id: f,
              ariaLabel: m,
              autoFocus: y,
              checked: x,
              description: b,
              highlightSelected: w,
              indicator: _,
              label: j,
              name: A,
              onChange: R,
              onClick: C,
              value: S,
              variant: k,
            } = e,
            M = void 0 === w || w,
            E = void 0 === _ ? "radio" : _,
            N = void 0 === k ? "default" : k
          ;(v[0] !== x || v[1] !== b || v[2] !== M || v[3] !== E || v[4] !== N
            ? ((t = (0, o.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === N &&
                  (0, o.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != b ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === N && x && M && "radio" === E && "bg-primary-soft-alpha",
                "form" === N && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === N && "items-center gap-2",
                "checkmark" === E && "after:ms-7",
              )),
              (v[0] = x),
              (v[1] = b),
              (v[2] = M),
              (v[3] = E),
              (v[4] = N),
              (v[5] = t))
            : (t = v[5]),
            v[6] !== m || v[7] !== f
              ? ((i = (0, r.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": m,
                  htmlFor: f,
                })),
                (v[6] = m),
                (v[7] = f),
                (v[8] = i))
              : (i = v[8]),
            v[9] !== E || v[10] !== N
              ? ((n = (0, o.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === E
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, o.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === N ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (v[9] = E),
                (v[10] = N),
                (v[11] = n))
              : (n = v[11]))
          let L = null != b ? `${f}-description` : void 0
          ;(v[12] !== m ||
          v[13] !== y ||
          v[14] !== x ||
          v[15] !== f ||
          v[16] !== A ||
          v[17] !== R ||
          v[18] !== C ||
          v[19] !== n ||
          v[20] !== L ||
          v[21] !== S
            ? ((a = (0, r.jsx)("input", {
                id: f,
                className: n,
                "aria-label": m,
                "aria-describedby": L,
                autoFocus: y,
                type: "radio",
                name: A,
                value: S,
                checked: x,
                onChange: R,
                onClick: C,
              })),
              (v[12] = m),
              (v[13] = y),
              (v[14] = x),
              (v[15] = f),
              (v[16] = A),
              (v[17] = R),
              (v[18] = C),
              (v[19] = n),
              (v[20] = L),
              (v[21] = S),
              (v[22] = a))
            : (a = v[22]),
            v[23] !== x || v[24] !== E
              ? ((c = "checkmark" === E ? (0, r.jsx)(l.ALZ, { className: (0, o.A)(!x && "invisible") }) : null),
                (v[23] = x),
                (v[24] = E),
                (v[25] = c))
              : (c = v[25]))
          let I = "default" === N ? "text-sm font-medium" : "text-base"
          return (
            v[26] !== I ? ((d = (0, o.A)("text-default", I)), (v[26] = I), (v[27] = d)) : (d = v[27]),
            v[28] !== j || v[29] !== d
              ? ((u = (0, r.jsx)("span", { className: d, children: j })), (v[28] = j), (v[29] = d), (v[30] = u))
              : (u = v[30]),
            v[31] !== b || v[32] !== f
              ? ((p =
                  null != b
                    ? (0, r.jsx)("span", {
                        id: `${f}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: b,
                      })
                    : null),
                (v[31] = b),
                (v[32] = f),
                (v[33] = p))
              : (p = v[33]),
            v[34] !== u || v[35] !== p
              ? ((g = (0, r.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, p],
                })),
                (v[34] = u),
                (v[35] = p),
                (v[36] = g))
              : (g = v[36]),
            v[37] !== g || v[38] !== t || v[39] !== i || v[40] !== a || v[41] !== c
              ? ((h = (0, r.jsxs)("div", { className: t, children: [i, a, c, g] })),
                (v[37] = g),
                (v[38] = t),
                (v[39] = i),
                (v[40] = a),
                (v[41] = c),
                (v[42] = h))
              : (h = v[42]),
            h
          )
        },
      },
    )
  },
  ZEx5(e, t, i) {
    i.d(t, { t: () => a })
    var r = i("ABep"),
      s = i("QosV"),
      o = i("on57"),
      n = i("bZug")
    function a(e) {
      let t,
        i,
        a,
        l = (0, s.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: p, variant: g, decoration: h } = e,
        v = void 0 === g ? "default" : g,
        f = "flat" === v || "rows" === v ? n.s : n.r,
        m = void 0 === p || p ? f : "flex flex-col",
        y = "recommendation" === v && "rounded-[20px]",
        x = "recommendation" !== v && "flat" !== v && "rows" !== v && "outlinedLarge" !== v && "rounded-2xl",
        b = "outlinedLarge" === v && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === h && "daybreak-VsXdEH",
        _ = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        j =
          "default" === v &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === v && "ring-1 ring-inset ring-border-subtle",
        R = "secondary" === v && "bg-surface-secondary/92",
        C = "muted" === v && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        S =
          "form" === v &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        k = "outlined" === v && "border border-subtle bg-transparent",
        M =
          "flat" === v &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        E = "input" === v && "border border-primary-outline bg-primary-soft",
        N = "recommendation" === v && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== d ||
        l[1] !== j ||
        l[2] !== A ||
        l[3] !== R ||
        l[4] !== C ||
        l[5] !== S ||
        l[6] !== k ||
        l[7] !== M ||
        l[8] !== E ||
        l[9] !== N ||
        l[10] !== m ||
        l[11] !== y ||
        l[12] !== x ||
        l[13] !== b ||
        l[14] !== w ||
        l[15] !== _
          ? ((t = (0, o.A)(m, y, x, b, w, _, j, A, R, C, S, k, M, E, N, d)),
            (l[0] = d),
            (l[1] = j),
            (l[2] = A),
            (l[3] = R),
            (l[4] = C),
            (l[5] = S),
            (l[6] = k),
            (l[7] = M),
            (l[8] = E),
            (l[9] = N),
            (l[10] = m),
            (l[11] = y),
            (l[12] = x),
            (l[13] = b),
            (l[14] = w),
            (l[15] = _),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== v
          ? ((i =
              "default" === v || "metered" === v
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (l[17] = v),
            (l[18] = i))
          : (i = l[18]),
        l[19] !== c || l[20] !== t || l[21] !== i
          ? ((a = (0, r.jsx)("div", { className: t, style: i, children: c })),
            (l[19] = c),
            (l[20] = t),
            (l[21] = i),
            (l[22] = a))
          : (a = l[22]),
        a
      )
    }
  },
  cdrE(e, t, i) {
    let r = (0, i("nkTT").a)({
      name: "person-group-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.20295, y: 4.21582, width: 19.587082, height: 11.835449 },
        visualBounds: { x: 0.20295, y: 4.21582, width: 19.587082, height: 11.835449 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.20295, y: 4.21582, width: 19.587082, height: 11.835449 },
        center: { x: 9.996491, y: 10.133545 },
        insets: { top: 4.21582, right: 0.209968, bottom: 3.948731, left: 0.20295 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.996491, y: 10.133545 },
          foreground: { x: 9.996491, y: 10.133545 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99942 10.8096C12.5889 10.8096 14.714 12.7964 14.934 15.3291C14.9657 15.695 14.6944 16.0171 14.3285 16.0488C13.9628 16.0805 13.6407 15.81 13.6088 15.4443C13.448 13.5929 11.8929 12.1396 9.99942 12.1396C8.10603 12.1397 6.55083 13.593 6.39005 15.4443C6.35814 15.8101 6.03612 16.0806 5.67032 16.0488C5.30454 16.017 5.03408 15.6949 5.06583 15.3291C5.28578 12.7964 7.41007 10.8097 9.99942 10.8096Z" fill="currentColor"/> <path d="M4.14591 11.0859C4.51224 11.0619 4.82968 11.3398 4.85391 11.7061C4.87791 12.0724 4.60006 12.3898 4.2338 12.4141C2.80375 12.5078 1.65418 13.6368 1.53067 15.0586C1.4989 15.4244 1.17677 15.6957 0.810946 15.6641C0.4451 15.6322 0.173709 15.3092 0.205477 14.9434C0.385736 12.8689 2.05935 11.2229 4.14591 11.0859Z" fill="currentColor"/> <path d="M15.8471 11.0859C17.9335 11.223 19.6073 12.869 19.7875 14.9434C19.8193 15.3091 19.5477 15.6321 19.182 15.6641C18.8162 15.6957 18.4941 15.4244 18.4623 15.0586C18.3388 13.637 17.1891 12.5079 15.7592 12.4141C15.3929 12.3898 15.1151 12.0724 15.1391 11.7061C15.1633 11.3398 15.4808 11.0619 15.8471 11.0859Z" fill="currentColor"/> <path d="M3.33829 5.50195C4.62559 5.50215 5.66915 6.54571 5.66934 7.83301C5.66908 9.12025 4.62555 10.1648 3.33829 10.165C2.05091 10.165 1.00652 9.12034 1.00626 7.83301C1.00646 6.54562 2.05087 5.502 3.33829 5.50195ZM3.33829 6.83203C2.7854 6.83208 2.33653 7.28016 2.33634 7.83301C2.3366 8.3858 2.78544 8.83491 3.33829 8.83496C3.89101 8.83476 4.339 8.38571 4.33927 7.83301C4.33907 7.28025 3.89105 6.83223 3.33829 6.83203Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M16.6557 5.50195C17.943 5.50217 18.9875 6.54572 18.9877 7.83301C18.9874 9.12024 17.9429 10.1648 16.6557 10.165C15.3684 10.1648 14.3249 9.12025 14.3246 7.83301C14.3248 6.54571 15.3684 5.50215 16.6557 5.50195ZM16.6557 6.83203C16.1029 6.83223 15.6549 7.28025 15.6547 7.83301C15.655 8.38571 16.103 8.83476 16.6557 8.83496C17.2084 8.83474 17.6574 8.3857 17.6576 7.83301C17.6574 7.28026 17.2084 6.83225 16.6557 6.83203Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M10.0004 4.21582C11.5886 4.21604 12.8764 5.50457 12.8764 7.09277C12.8761 8.68077 11.5884 9.96853 10.0004 9.96875C8.41222 9.96873 7.12469 8.68089 7.12442 7.09277C7.12444 5.50445 8.41207 4.21584 10.0004 4.21582ZM10.0004 5.54688C9.14661 5.5469 8.45452 6.23899 8.4545 7.09277C8.45476 7.94636 9.14676 8.63865 10.0004 8.63867C10.8539 8.63846 11.546 7.94623 11.5463 7.09277C11.5463 6.23911 10.854 5.54709 10.0004 5.54688Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { Z: r })
  },
}
//# sourceMappingURL=530534.4d0e653577.js.map
