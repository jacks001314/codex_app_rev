export const __rspack_esm_ids = [647097]
export const __webpack_modules__ = {
  UnEf(e, t, a) {
    var s = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, s.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, s.jsx)("path", {
            d: "M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z",
            fill: "currentColor",
          }),
        })))
  },
  aMRi(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("uris"),
      n = a("zTeN"),
      l = a("zd8w"),
      o = a("oyxz"),
      c = a("HZfM"),
      d = a("Ghh3"),
      u = a("T8X0"),
      p = a("TjgH"),
      g = a("zjpG"),
      h = a("Sm6l"),
      m = a("bVeK"),
      f = a("FrrB"),
      y = a("RNul"),
      b = a("Jqpj"),
      x = a("gBBC"),
      v = a("OWtl"),
      _ = a("ZGaK"),
      j = a("rvFo"),
      w = a("lcic"),
      C = a("O9G5"),
      k = a("nBWL"),
      P = a("E4rW"),
      A = a("T4c2"),
      S = a("vzxm")
    function T(e) {
      let { gizmo: t } = e
      return "snorlax" !== t.gizmo_type
    }
    function M(e) {
      let { resource: t } = e
      return t
    }
    function G(e) {
      return e.list.items
    }
    function N(e) {
      return e.list.cursor ?? void 0
    }
    function z(e) {
      let { gizmo: t } = e
      return "snorlax" !== t.gizmo_type
    }
    function I(e) {
      return e.items
    }
    function q(e) {
      return e.cursor ?? void 0
    }
    function R(e) {
      return e.resource
    }
    function B(e) {
      let t,
        a,
        r,
        d,
        h,
        f,
        y,
        _,
        j,
        C,
        A,
        T,
        M,
        G,
        N,
        z,
        I = (0, i.c)(51),
        { accountId: q, isOwnerAndWorkspaceAllowsSpecific: R, rank: B, resource: D } = e,
        O = (0, n.gh)(v.u),
        U = (0, c.Zp)(),
        [W, F] = (0, l.useState)(!1)
      I[0] !== D.gizmo.display.name || I[1] !== D.gizmo.id
        ? ((t = D.gizmo.display.name.trim() || D.gizmo.id),
          (I[0] = D.gizmo.display.name),
          (I[1] = D.gizmo.id),
          (I[2] = t))
        : (t = I[2])
      let L = t
      ;(I[3] !== D.gizmo.display.profile_picture_url
        ? ((a = D.gizmo.display.profile_picture_url?.trim() || null),
          (I[3] = D.gizmo.display.profile_picture_url),
          (I[4] = a))
        : (a = I[4]),
        I[5] !== L || I[6] !== D.gizmo.id || I[7] !== a
          ? ((r = { iconUrl: a, id: D.gizmo.id, name: L }), (I[5] = L), (I[6] = D.gizmo.id), (I[7] = a), (I[8] = r))
          : (r = I[8]))
      let H = r
      I[9] !== R || I[10] !== D.gizmo.tags
        ? ((d = (0, P.m)(D.gizmo.tags, R)), (I[9] = R), (I[10] = D.gizmo.tags), (I[11] = d))
        : (d = I[11])
      let Z = d
      I[12] !== D.gizmo.author.display_name
        ? ((h = D.gizmo.author.display_name?.trim() || void 0), (I[12] = D.gizmo.author.display_name), (I[13] = h))
        : (h = I[13])
      let V = h
      I[14] !== D.gizmo.vanity_metrics?.num_conversations_str
        ? ((f = D.gizmo.vanity_metrics?.num_conversations_str?.trim()),
          (I[14] = D.gizmo.vanity_metrics?.num_conversations_str),
          (I[15] = f))
        : (f = I[15])
      let Q = f
      I[16] !== U || I[17] !== O
        ? ((y = (e, t) => {
            ;((0, x.yN)(O, null),
              (0, u.Rm)(O, "chat"),
              U((0, S.V9)(e.gizmo.short_url?.trim() || e.gizmo.id), { state: { prefillPrompt: t } }))
          }),
          (I[16] = U),
          (I[17] = O),
          (I[18] = y))
        : (y = I[18])
      let K = y
      I[19] !== Z
        ? ((_ =
            null == Z
              ? void 0
              : [
                  (0, s.jsx)(
                    p.E,
                    {
                      variant: "warning",
                      children: (0, s.jsx)(o.A, {
                        id: "chatgptConversations.gpts.discovery.restrictedBadge",
                        defaultMessage: "Restricted",
                        description:
                          "Compact badge on a GPT discovery row indicating that workspace policy or GPT availability limits access to it",
                      }),
                    },
                    "restriction",
                  ),
                ]),
          (I[19] = Z),
          (I[20] = _))
        : (_ = I[20])
      let Y = null == Z ? void 0 : "opacity-60"
      return (
        I[21] !== V || I[22] !== Q || I[23] !== D.gizmo.display.description || I[24] !== Z
          ? ((j =
              null == D.gizmo.display.description && null == V && null == Q && null == Z
                ? void 0
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      null == D.gizmo.display.description
                        ? null
                        : (0, s.jsx)("div", { className: "line-clamp-1", children: D.gizmo.display.description }),
                      null == V && null == Q
                        ? null
                        : (0, s.jsxs)("div", {
                            className: "flex items-center text-xs text-codex-description",
                            children: [
                              null == V
                                ? null
                                : (0, s.jsx)(o.A, {
                                    id: "chatgptConversations.gpts.discovery.byAuthor",
                                    defaultMessage: "By {author}",
                                    description:
                                      "Byline on a GPT discovery card naming the person or organization that created the GPT; author is the creator's display name",
                                    values: { author: V },
                                  }),
                              null == V || null == Q ? null : (0, s.jsx)(g.a, { className: "mx-1" }),
                              null == Q
                                ? null
                                : (0, s.jsxs)("span", {
                                    className: "flex items-center gap-1",
                                    children: [(0, s.jsx)(m.OHc, { "aria-hidden": !0 }), Q],
                                  }),
                            ],
                          }),
                      null == Z
                        ? null
                        : (0, s.jsx)("div", {
                            className: "text-xs text-warning",
                            children: (0, s.jsx)(E, { restriction: Z }),
                          }),
                    ],
                  })),
            (I[21] = V),
            (I[22] = Q),
            (I[23] = D.gizmo.display.description),
            (I[24] = Z),
            (I[25] = j))
          : (j = I[25]),
        I[26] !== B
          ? ((C =
              null == B
                ? null
                : (0, s.jsx)("span", { className: "w-5 text-center text-sm text-secondary", children: B })),
            (I[26] = B),
            (I[27] = C))
          : (C = I[27]),
        I[28] !== H
          ? ((A = (0, s.jsx)(w.S, { className: "size-9", customGpt: H, presentation: "avatar" })),
            (I[28] = H),
            (I[29] = A))
          : (A = I[29]),
        I[30] !== C || I[31] !== A
          ? ((T = (0, s.jsxs)("span", { className: "flex items-center gap-2", children: [C, A] })),
            (I[30] = C),
            (I[31] = A),
            (I[32] = T))
          : (T = I[32]),
        I[33] !== Z
          ? ((M =
              null == Z
                ? () => {
                    F(!0)
                  }
                : void 0),
            (I[33] = Z),
            (I[34] = M))
          : (M = I[34]),
        I[35] !== L || I[36] !== j || I[37] !== T || I[38] !== M || I[39] !== _ || I[40] !== Y
          ? ((G = (0, s.jsx)(b.D, {
              badges: _,
              className: "group justify-center border-none text-base select-none",
              contentClassName: Y,
              description: j,
              descriptionClassName: "flex flex-col gap-0.5 text-codex-description",
              icon: T,
              iconContainer: !1,
              title: L,
              onClick: M,
            })),
            (I[35] = L),
            (I[36] = j),
            (I[37] = T),
            (I[38] = M),
            (I[39] = _),
            (I[40] = Y),
            (I[41] = G))
          : (G = I[41]),
        I[42] !== q || I[43] !== W || I[44] !== R || I[45] !== D || I[46] !== K
          ? ((N = W
              ? (0, s.jsx)(k.x, {
                  accountId: q,
                  gizmo: D,
                  isOwnerAndWorkspaceAllowsSpecific: R,
                  onClose: () => F(!1),
                  onStartChat: K,
                })
              : null),
            (I[42] = q),
            (I[43] = W),
            (I[44] = R),
            (I[45] = D),
            (I[46] = K),
            (I[47] = N))
          : (N = I[47]),
        I[48] !== G || I[49] !== N
          ? ((z = (0, s.jsxs)(s.Fragment, { children: [G, N] })), (I[48] = G), (I[49] = N), (I[50] = z))
          : (z = I[50]),
        z
      )
    }
    function E(e) {
      let t = (0, i.c)(3),
        { restriction: a } = e
      switch (a) {
        case "fedramp_incompatible": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.fedrampRestricted",
                  defaultMessage: "Unavailable in this workspace's compliance mode",
                  description:
                    "Status below a GPT discovery card explaining that the GPT uses capabilities unavailable in the current compliance workspace",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "openai_gpt_workspace_disabled":
        case "workspace_disabled": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.workspaceRestricted",
                  defaultMessage: "Turned off by your workspace admin",
                  description:
                    "Status below a GPT discovery card explaining that the current workspace administrator has disabled access to it",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "interactions_disabled": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.interactionsDisabled",
                  defaultMessage: "Temporarily unavailable",
                  description:
                    "Status below a GPT discovery card explaining that conversations with this GPT are currently disabled",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
      }
    }
    function D() {
      let e,
        t,
        a = (0, i.c)(2)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(y.y, { className: "icon-md" })), (a[0] = e))
          : (e = a[0]),
        a[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsxs)("div", {
              "aria-live": "polite",
              className: "flex min-h-48 flex-1 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: (0, s.jsx)(o.A, {
                    id: "chatgptConversations.gpts.discovery.loading",
                    defaultMessage: "Loading GPTs",
                    description:
                      "Screen-reader status announced while the GPT discovery page is loading directory or search results",
                  }),
                }),
              ],
            })),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function O(e) {
      let t,
        a,
        r,
        n,
        l,
        c,
        d = (0, i.c)(8),
        { onRetry: u } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.retry",
              defaultMessage: "Try again",
              description: "Button label for retrying the GPT discovery or search request after it fails",
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] !== u
          ? ((a = (0, s.jsx)(h.$, { color: "secondary", type: "button", onClick: u, children: t })),
            (d[1] = u),
            (d[2] = a))
          : (a = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, s.jsx)(m.HJl, {})), (d[3] = r)) : (r = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.error",
              defaultMessage: "GPTs couldn't be loaded",
              description: "Error-state title on the GPT discovery page when the directory or search request fails",
            })),
            (l = (0, s.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.errorDescription",
              defaultMessage: "Check your connection and try again",
              description: "Short recovery guidance below the GPT discovery page error title",
            })),
            (d[4] = n),
            (d[5] = l))
          : ((n = d[4]), (l = d[5])),
        d[6] !== a
          ? ((c = (0, s.jsx)(f.A, {
              actions: a,
              illustration: r,
              illustrationSize: "icon",
              layout: "page",
              title: n,
              description: l,
            })),
            (d[6] = a),
            (d[7] = c))
          : (c = d[7]),
        c
      )
    }
    a.d(
      t,
      {},
      {
        _Q: D,
        hd: function (e) {
          let t,
            a,
            n,
            l,
            c,
            d,
            u,
            p,
            g,
            m,
            f,
            y,
            b,
            x,
            v = (0, i.c)(54),
            { accountId: w, cut: k, isOwnerAndWorkspaceAllowsSpecific: P, locale: S } = e
          ;(v[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [void 0]), (v[0] = t)) : (t = v[0]),
            v[1] !== k ? ((a = { pageParams: t, pages: [k] }), (v[1] = k), (v[2] = a)) : (a = v[2]),
            v[3] !== k.info.id || v[4] !== S
              ? ((n = (e) => {
                  let { pageParam: t } = e
                  return (0, C.S)({ cursor: t, cutId: k.info.id, limit: 6, locale: S })
                }),
                (v[3] = k.info.id),
                (v[4] = S),
                (v[5] = n))
              : (n = v[5]),
            v[6] !== w || v[7] !== k.info.id || v[8] !== S
              ? ((l = (0, A.bF)(w, k.info.id, S)), (v[6] = w), (v[7] = k.info.id), (v[8] = S), (v[9] = l))
              : (l = v[9]),
            v[10] !== a || v[11] !== n || v[12] !== l
              ? ((c = {
                  getNextPageParam: N,
                  initialData: a,
                  initialPageParam: void 0,
                  queryFn: n,
                  queryKey: l,
                  staleTime: j.D.ONE_MINUTE,
                }),
                (v[10] = a),
                (v[11] = n),
                (v[12] = l),
                (v[13] = c))
              : (c = v[13]))
          let {
              data: z,
              fetchNextPage: I,
              hasNextPage: q,
              isFetchNextPageError: R,
              isFetchingNextPage: E,
            } = (0, r.q)(c),
            D = z.pages
          if (
            v[14] !== w ||
            v[15] !== k.info.description ||
            v[16] !== k.info.display_type ||
            v[17] !== k.info.id ||
            v[18] !== k.info.title ||
            v[19] !== z.pages ||
            v[20] !== q ||
            v[21] !== P
          ) {
            p = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                t,
                a,
                i = D.flatMap(G).map(M).filter(T)
              if (0 === i.length && !q) {
                p = null
                break e
              }
              f = `gpt-discovery-cut-${k.info.id}`
              let r = `gpt-discovery-cut-${k.info.id}`
              ;(v[28] !== k.info.title || v[29] !== r
                ? ((e = (0, s.jsx)("h2", {
                    className: "heading-xl font-semibold text-default",
                    id: r,
                    children: k.info.title,
                  })),
                  (v[28] = k.info.title),
                  (v[29] = r),
                  (v[30] = e))
                : (e = v[30]),
                v[31] !== k.info.description
                  ? ((t =
                      null == k.info.description
                        ? null
                        : (0, s.jsx)("div", { className: "text-sm text-secondary", children: k.info.description })),
                    (v[31] = k.info.description),
                    (v[32] = t))
                  : (t = v[32]),
                v[33] !== e || v[34] !== t
                  ? ((u = (0, s.jsxs)("div", { className: "mb-3 flex flex-col gap-1 select-none", children: [e, t] })),
                    (v[33] = e),
                    (v[34] = t),
                    (v[35] = u))
                  : (u = v[35]),
                (d = _.q),
                (g = "catalog"),
                v[36] !== w || v[37] !== k.info.display_type || v[38] !== P
                  ? ((a = (e, t) =>
                      (0, s.jsx)(
                        B,
                        {
                          accountId: w,
                          isOwnerAndWorkspaceAllowsSpecific: P,
                          rank: "featured" === k.info.display_type ? void 0 : t + 1,
                          resource: e,
                        },
                        e.gizmo.id,
                      )),
                    (v[36] = w),
                    (v[37] = k.info.display_type),
                    (v[38] = P),
                    (v[39] = a))
                  : (a = v[39]),
                (m = i.map(a)))
            }
            ;((v[14] = w),
              (v[15] = k.info.description),
              (v[16] = k.info.display_type),
              (v[17] = k.info.id),
              (v[18] = k.info.title),
              (v[19] = z.pages),
              (v[20] = q),
              (v[21] = P),
              (v[22] = d),
              (v[23] = u),
              (v[24] = p),
              (v[25] = g),
              (v[26] = m),
              (v[27] = f))
          } else ((d = v[22]), (u = v[23]), (p = v[24]), (g = v[25]), (m = v[26]), (f = v[27]))
          return p !== Symbol.for("react.early_return_sentinel")
            ? p
            : (v[40] !== d || v[41] !== g || v[42] !== m
                ? ((y = (0, s.jsx)(d, { gap: g, children: m })), (v[40] = d), (v[41] = g), (v[42] = m), (v[43] = y))
                : (y = v[43]),
              v[44] !== I || v[45] !== q || v[46] !== R || v[47] !== E
                ? ((b = q
                    ? (0, s.jsx)("div", {
                        className: "mt-3 flex justify-center",
                        children: (0, s.jsx)(h.$, {
                          color: "secondary",
                          loading: E,
                          size: "toolbar",
                          type: "button",
                          onClick: () => {
                            I()
                          },
                          children: R
                            ? (0, s.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.retryMore",
                                defaultMessage: "Try again",
                                description:
                                  "Button label for retrying a failed request for more GPTs in one section of the GPT discovery page",
                              })
                            : (0, s.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.showMore",
                                defaultMessage: "See more",
                                description:
                                  "Button label for loading more GPTs in one section of the GPT discovery page",
                              }),
                        }),
                      })
                    : null),
                  (v[44] = I),
                  (v[45] = q),
                  (v[46] = R),
                  (v[47] = E),
                  (v[48] = b))
                : (b = v[48]),
              v[49] !== u || v[50] !== y || v[51] !== b || v[52] !== f
                ? ((x = (0, s.jsxs)("section", { "aria-labelledby": f, children: [u, y, b] })),
                  (v[49] = u),
                  (v[50] = y),
                  (v[51] = b),
                  (v[52] = f),
                  (v[53] = x))
                : (x = v[53]),
              x)
        },
        kj: function (e) {
          let t,
            a,
            n,
            l,
            c,
            u,
            p,
            g,
            y,
            b,
            x,
            v,
            w,
            k = (0, i.c)(49),
            { accountId: P, isOwnerAndWorkspaceAllowsSpecific: S, query: T, workspaceOnly: M } = e,
            G = null != P
          ;(k[0] !== T || k[1] !== M
            ? ((t = async (e) => {
                let { pageParam: t } = e
                return 0 === T.length
                  ? { items: (await (0, C.S)({ cutId: "recent", limit: 3 })).list.items.map(R), cursor: null }
                  : d.Request.safeGet("/gizmos/search", {
                      parameters: { query: { cursor: t, limit: 12, q: T, workspace_only: !!M || void 0 } },
                    })
              }),
              (k[0] = T),
              (k[1] = M),
              (k[2] = t))
            : (t = k[2]),
            k[3] !== P || k[4] !== T || k[5] !== M
              ? ((a = (0, A.J5)(P, T, M)), (k[3] = P), (k[4] = T), (k[5] = M), (k[6] = a))
              : (a = k[6]),
            k[7] !== G || k[8] !== t || k[9] !== a
              ? ((n = {
                  enabled: G,
                  initialPageParam: void 0,
                  queryFn: t,
                  getNextPageParam: q,
                  queryKey: a,
                  staleTime: j.D.ONE_MINUTE,
                }),
                (k[7] = G),
                (k[8] = t),
                (k[9] = a),
                (k[10] = n))
              : (n = k[10]))
          let {
            data: N,
            fetchNextPage: E,
            hasNextPage: U,
            isFetchNextPageError: W,
            isFetchingNextPage: F,
            isPending: L,
            refetch: H,
          } = (0, r.q)(n)
          if (L) {
            let e
            return (
              k[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(D, {})), (k[11] = e)) : (e = k[11]),
              e
            )
          }
          if (null == N) {
            let e
            return (
              k[12] !== H
                ? ((e = (0, s.jsx)(O, {
                    onRetry: () => {
                      H()
                    },
                  })),
                  (k[12] = H),
                  (k[13] = e))
                : (e = k[13]),
              e
            )
          }
          let Z = N.pages
          if (k[14] !== P || k[15] !== N.pages || k[16] !== U || k[17] !== S || k[18] !== T) {
            u = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                t = Z.flatMap(I).filter(z)
              if (0 === t.length && !U) {
                let e, t
                ;(k[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, s.jsx)(m.HJl, {})), (k[26] = e))
                  : (e = k[26]),
                  k[27] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, s.jsx)(f.A, {
                        illustration: e,
                        illustrationSize: "icon",
                        layout: "page",
                        title: (0, s.jsx)(o.A, {
                          id: "chatgptConversations.gpts.discovery.noSearchResults",
                          defaultMessage: "No GPTs found",
                          description:
                            "Empty-state title on the GPT discovery page when a user's search returns no matching custom GPTs",
                        }),
                        description: (0, s.jsx)(o.A, {
                          id: "chatgptConversations.gpts.discovery.noSearchResultsDescription",
                          defaultMessage: "Try another search",
                          description:
                            "Short suggestion below the empty GPT search result title asking the user to change their search terms",
                        }),
                      })),
                      (k[27] = t))
                    : (t = k[27]),
                  (u = t))
                break e
              }
              ;((y = "gpt-search-results-heading"),
                k[28] === Symbol.for("react.memo_cache_sentinel")
                  ? ((b = (0, s.jsx)("h2", {
                      className: "sr-only",
                      id: "gpt-search-results-heading",
                      children: (0, s.jsx)(o.A, {
                        id: "chatgptConversations.gpts.discovery.searchResultsHeading",
                        defaultMessage: "GPT search results",
                        description:
                          "Screen-reader-only heading above the matching cards on the GPT discovery search results page",
                      }),
                    })),
                    (k[28] = b))
                  : (b = k[28]),
                k[29] !== T.length
                  ? ((c =
                      0 === T.length
                        ? (0, s.jsx)("div", {
                            className: "px-3 py-2 text-sm text-secondary",
                            children: (0, s.jsx)(o.A, {
                              id: "chatgptConversations.gpts.search.recent",
                              defaultMessage: "Recently used",
                              description:
                                "Heading above recently used GPTs shown when focusing the public catalog search field without entering a query",
                            }),
                          })
                        : null),
                    (k[29] = T.length),
                    (k[30] = c))
                  : (c = k[30]),
                (l = _.q),
                (p = "catalog"),
                k[31] !== P || k[32] !== S
                  ? ((e = (e) =>
                      (0, s.jsx)(B, { accountId: P, isOwnerAndWorkspaceAllowsSpecific: S, resource: e }, e.gizmo.id)),
                    (k[31] = P),
                    (k[32] = S),
                    (k[33] = e))
                  : (e = k[33]),
                (g = t.map(e)))
            }
            ;((k[14] = P),
              (k[15] = N.pages),
              (k[16] = U),
              (k[17] = S),
              (k[18] = T),
              (k[19] = l),
              (k[20] = c),
              (k[21] = u),
              (k[22] = p),
              (k[23] = g),
              (k[24] = y),
              (k[25] = b))
          } else ((l = k[19]), (c = k[20]), (u = k[21]), (p = k[22]), (g = k[23]), (y = k[24]), (b = k[25]))
          return u !== Symbol.for("react.early_return_sentinel")
            ? u
            : (k[34] !== l || k[35] !== p || k[36] !== g
                ? ((x = (0, s.jsx)(l, { gap: p, children: g })), (k[34] = l), (k[35] = p), (k[36] = g), (k[37] = x))
                : (x = k[37]),
              k[38] !== E || k[39] !== U || k[40] !== W || k[41] !== F
                ? ((v = U
                    ? (0, s.jsx)("div", {
                        className: "mt-3 flex justify-center",
                        children: (0, s.jsx)(h.$, {
                          color: "secondary",
                          loading: F,
                          size: "toolbar",
                          type: "button",
                          onClick: () => {
                            E()
                          },
                          children: W
                            ? (0, s.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.retrySearch",
                                defaultMessage: "Try again",
                                description:
                                  "Button label for retrying a failed request for another page of GPT search results",
                              })
                            : (0, s.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.showMoreSearchResults",
                                defaultMessage: "See more",
                                description: "Button label for loading another page of GPT search results",
                              }),
                        }),
                      })
                    : null),
                  (k[38] = E),
                  (k[39] = U),
                  (k[40] = W),
                  (k[41] = F),
                  (k[42] = v))
                : (v = k[42]),
              k[43] !== c || k[44] !== x || k[45] !== v || k[46] !== y || k[47] !== b
                ? ((w = (0, s.jsxs)("section", { "aria-labelledby": y, children: [b, c, x, v] })),
                  (k[43] = c),
                  (k[44] = x),
                  (k[45] = v),
                  (k[46] = y),
                  (k[47] = b),
                  (k[48] = w))
                : (w = k[48]),
              w)
        },
        sU: O,
      },
    )
  },
  O9G5(e, t, a) {
    var s = a("DBCl"),
      i = a("Ghh3")
    a.d(
      t,
      {},
      {
        S: async function ({ cursor: e, cutId: t, limit: a, locale: r, signal: n }) {
          let l = (e) =>
              i.Request.safeGet("/public-api/gizmos/discovery/{category_or_cut_id}", {
                additionalHeaders: { [s.n1Q]: "1" },
                signal: n,
                parameters: { path: { category_or_cut_id: t }, query: { cursor: e, limit: a, locale: r } },
              }),
            o = await l(e)
          return 0 === o.list.items.length && null != o.list.cursor ? l(o.list.cursor) : o
        },
      },
    )
  },
  OiCX(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("Clvq"),
      n = a("zTeN"),
      l = a("oyxz"),
      o = a("HZfM"),
      c = a("OiCI"),
      d = a("Sm6l"),
      u = a("bqtn"),
      p = a("bVeK"),
      g = a("Bbed"),
      h = a("X6Vn"),
      m = a("ZTcy"),
      f = a("OWtl"),
      y = a("khOd"),
      b = a("hZax"),
      x = a("JYRT")
    let v = (0, g._)(async () => (await a.e(698757).then(a.bind(a, "y2N1"))).GptCreatePluginPrompt)
    a.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            a,
            g,
            _ = (0, i.c)(14),
            { asMenuItem: j, onNavigate: w } = e,
            C = void 0 !== j && j,
            k = (0, n.gh)(f.u),
            P = (0, o.Zp)(),
            A = (0, b.AS)(),
            S = (0, n._U)(x.X, "2513446768"),
            T = (0, b.Zj)("2160578039"),
            M = (0, n.Ul)(c.tT),
            G = (0, n.Ul)(y.GB)
          _[0] !== S ? ((t = S?.get("disable_gpt_creation", !1)), (_[0] = S), (_[1] = t)) : (t = _[1])
          let N = !0 === t
          if (N && (!T || null == M)) return null
          _[2] !== M || _[3] !== C || _[4] !== N || _[5] !== P || _[6] !== w || _[7] !== k || _[8] !== G || _[9] !== A
            ? ((a = (e) => {
                if (N && !e) return null
                let t = () => {
                    let t = k.get(c.tT)
                    if (
                      !A.getDynamicConfig("2513446768").get("disable_gpt_creation", !1) ||
                      (A.checkGate("2160578039") && A.checkGate("1663164947") && null != t && t === M && e)
                    ) {
                      if (A.checkGate("2160578039") && null != t) {
                        ;((0, h.qf)(k, v, { accountId: t }), w?.())
                        return
                      }
                      ;(P(r.m2), w?.())
                    }
                  },
                  a = (0, s.jsx)(l.A, {
                    id: "chatgptConversations.gpts.create.button",
                    defaultMessage: "Create",
                    description:
                      "Action on GPT discovery that opens creation options during migration to plugins, or the GPT editor before migration is enabled",
                  })
                return C
                  ? (0, s.jsx)(u.ms.Item, { onClick: t, children: a })
                  : (0, s.jsxs)(d.$, {
                      color: "primary",
                      size: "toolbar",
                      uniformAtMobile: G,
                      onClick: t,
                      children: [
                        (0, s.jsx)(p.ONy, {}),
                        (0, s.jsx)("span", { className: G ? "browser:max-md:sr-only" : void 0, children: a }),
                      ],
                    })
              }),
              (_[2] = M),
              (_[3] = C),
              (_[4] = N),
              (_[5] = P),
              (_[6] = w),
              (_[7] = k),
              (_[8] = G),
              (_[9] = A),
              (_[10] = a))
            : (a = _[10])
          let z = a
          return (
            _[11] !== N || _[12] !== z
              ? ((g = N
                  ? (0, s.jsx)(m.$, {
                      mode: "browse",
                      children: (e) => {
                        let { canCreatePlugin: t } = e
                        return z(t)
                      },
                    })
                  : z(!1)),
                (_[11] = N),
                (_[12] = z),
                (_[13] = g))
              : (g = _[13]),
            g
          )
        },
      },
    )
  },
  QG7U(e, t, a) {
    a.d(t, { GptDiscoveryPage: () => ej })
    var s = a("ABep"),
      i = a("QosV"),
      r = a("slpy"),
      n = a("zTeN"),
      l = a("zd8w"),
      o = a("Wf1j"),
      c = a("oyxz"),
      d = a("HZfM"),
      u = a("bJfu"),
      p = a("OAko"),
      g = a("Sm6l"),
      h = a("bqtn"),
      m = a("Ot7V"),
      f = a("bVeK"),
      y = a("PkPj"),
      b = a("EShr"),
      x = a("ibLK"),
      v = a("khOd"),
      _ = a("ZGaK"),
      j = a("hZax"),
      w = a("aMRi"),
      C = a("OiCX"),
      k = a("jjPm"),
      P = a("wrCb"),
      A = a("g0xd"),
      S = a("T0Rc"),
      T = a("D7Ms"),
      M = a("IjbW"),
      G = a("i5ac"),
      N = a.n(G),
      z = a("DBCl"),
      I = a("Ietk"),
      q = a("Ghh3"),
      R = a("wsqD"),
      B = a("zKCW"),
      E = a("FrrB"),
      D = a("BrP7"),
      O = a("GaA7"),
      U = a("OWtl"),
      W = a("rvFo"),
      F = a("GEsy")
    function L(e) {
      let t,
        a,
        r = (0, i.c)(3),
        { notice: n } = e
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            residency: (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.residencyRestriction",
              defaultMessage:
                "To comply with data residency requirements, only GPTs created within your workspace are accessible. All third-party GPTs are not available.",
              description:
                "Informational notice in the GPT directory explaining to workspace members why data residency rules exclude third-party GPTs",
            }),
            allow_none: (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.thirdPartyDisabled",
              defaultMessage: "Your admin has disabled all third-party GPTs. Only workspace GPTs are available.",
              description:
                "Informational notice in the GPT directory when the workspace administrator has blocked all third-party GPTs",
            }),
            allow_specific: (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.thirdPartySpecific",
              defaultMessage:
                "Your admin has disabled most third-party GPTs, except for specific ones that have been explicitly approved. Workspace GPTs are available.",
              description:
                "Informational notice in the GPT directory when workspace members can use only approved third-party GPTs and workspace GPTs",
            }),
            quorum: (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.thirdPartyGPTsWarningQuorum",
              defaultMessage:
                "Using third-party GPTs may exfiltrate your data. Use third-party GPTs in accordance with your obligations under HIPAA.",
              description:
                "Warning in the GPT directory for Quorum workspace users about third-party GPT data risks and their HIPAA obligations. Keep the cautionary tone and both sentences.",
            }),
          }),
          (r[0] = t))
        : (t = r[0])
      let l = t[n]
      return (
        r[1] !== l ? ((a = (0, s.jsx)(B.l, { type: "infoAccent", content: l })), (r[1] = l), (r[2] = a)) : (a = r[2]),
        a
      )
    }
    var H = a("E4rW"),
      Z = a("T4c2")
    function V(e) {
      let t,
        a,
        r,
        d,
        u,
        p,
        g,
        h,
        m,
        b,
        x,
        v,
        _,
        j,
        C = (0, i.c)(56),
        { account: k, search: P } = e,
        A = (0, n.gh)(U.u),
        G = (0, n.Ul)(I.nw),
        z = (0, o.A)(),
        q = (0, M.I)()
      C[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (C[0] = t)) : (t = C[0])
      let V = (0, l.useRef)(t),
        [J, ee] = (0, l.useState)(null)
      ;(C[1] !== k.id ? ((a = (0, Z.Jy)(k.id)), (C[1] = k.id), (C[2] = a)) : (a = C[2]),
        C[3] !== a
          ? ((r = { queryFn: X, queryKey: a, staleTime: W.D.ONE_MINUTE }), (C[3] = a), (C[4] = r))
          : (r = C[4]))
      let { data: et, isError: ea, isPending: es, refetch: ei } = (0, S.I)(r),
        er = "workspace" === k.structure ? k.id : null
      ;(C[5] !== A || C[6] !== er || C[7] !== G
        ? ((d =
            null == er
              ? T.hT
              : async (e) => {
                  let { signal: t } = e
                  if (G) throw Error("Account input subscription unavailable")
                  return (await (0, I.uc)(A, t), (0, R.K)(er, { signal: t }))
                }),
          (C[5] = A),
          (C[6] = er),
          (C[7] = G),
          (C[8] = d))
        : (d = C[8]),
        C[9] !== er ? ((u = ["accounts", "settings", er]), (C[9] = er), (C[10] = u)) : (u = C[10]),
        C[11] !== d || C[12] !== u
          ? ((p = { queryFn: d, queryKey: u, staleTime: O.appServices?.accessInputs == null ? W.D.ONE_MINUTE : 0 }),
            (C[11] = d),
            (C[12] = u),
            (C[13] = p))
          : (p = C[13]))
      let { data: en } = (0, S.I)(p),
        el = "account-owner" === k.account_user_role && en?.allow_third_party_gpts === "allow_specific"
      C[14] !== k || C[15] !== ea || C[16] !== et || C[17] !== en?.allow_third_party_gpts
        ? ((g = null == et || ea ? null : (0, H.w)(k, k.account_residency_region, en?.allow_third_party_gpts)),
          (C[14] = k),
          (C[15] = ea),
          (C[16] = et),
          (C[17] = en?.allow_third_party_gpts),
          (C[18] = g))
        : (g = C[18])
      let eo = g,
        ec =
          !ea &&
          et?.workspace_filtered &&
          "account-owner" !== k.account_user_role &&
          "quorum" === k.plan_type &&
          "quorum" !== eo,
        ed = et?.cuts.filter($),
        eu = N()(ed?.filter(Y).map(K) ?? [], "name")
      C[19] !== P ? ((h = P.trim()), (C[19] = P), (C[20] = h)) : (h = C[20])
      let ep = (0, F.o)(h, 250),
        eg =
          0 === ep.length && eu.length > 0
            ? (0, s.jsx)(y.uC, {
                children: (0, s.jsx)(D.t, {
                  ariaLabel: z.formatMessage({
                    id: "chatgptConversations.gpts.catalog.categories",
                    defaultMessage: "GPT categories",
                    description:
                      "Accessible name for the horizontal navigation that scrolls to sections of the public GPT catalog",
                  }),
                  onSelect: (e) => {
                    ;(ee(e), V.current.get(e)?.scrollIntoView({ behavior: q ? "instant" : "smooth", block: "start" }))
                  },
                  scrollable: !0,
                  selectedKey: J ?? eu[0].id,
                  tabs: eu.map(Q),
                  variant: "page",
                }),
              })
            : null
      if (ep.length > 0) {
        let e, t, a, i
        return (
          C[21] !== eo
            ? ((e = null != eo ? (0, s.jsx)(L, { notice: eo }) : null), (C[21] = eo), (C[22] = e))
            : (e = C[22]),
          C[23] !== k.id || C[24] !== el || C[25] !== ep
            ? ((t = (0, s.jsx)(w.kj, {
                accountId: k.id,
                isOwnerAndWorkspaceAllowsSpecific: el,
                query: ep,
                workspaceOnly: !1,
              })),
              (C[23] = k.id),
              (C[24] = el),
              (C[25] = ep),
              (C[26] = t))
            : (t = C[26]),
          C[27] !== ec
            ? ((a = ec ? (0, s.jsx)(L, { notice: "quorum" }) : null), (C[27] = ec), (C[28] = a))
            : (a = C[28]),
          C[29] !== eg || C[30] !== t || C[31] !== a || C[32] !== e
            ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-8", children: [e, eg, t, a] })),
              (C[29] = eg),
              (C[30] = t),
              (C[31] = a),
              (C[32] = e),
              (C[33] = i))
            : (i = C[33]),
          i
        )
      }
      ;(C[34] !== eo
        ? ((m = null != eo ? (0, s.jsx)(L, { notice: eo }) : null), (C[34] = eo), (C[35] = m))
        : (m = C[35]),
        C[36] !== k.plan_type || C[37] !== et?.workspace_filtered || C[38] !== eo
          ? ((b =
              et?.workspace_filtered && null == eo && "quorum" !== k.plan_type
                ? (0, s.jsx)(B.l, {
                    type: "infoAccent",
                    content: (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.discovery.workspaceFiltered",
                      defaultMessage: "Your workspace's GPT settings limit which GPTs appear here",
                      description:
                        "Informational notice explaining that administrator policy has filtered GPTs from the directory",
                    }),
                  })
                : null),
            (C[36] = k.plan_type),
            (C[37] = et?.workspace_filtered),
            (C[38] = eo),
            (C[39] = b))
          : (b = C[39]),
        C[40] !== es ? ((x = es ? (0, s.jsx)(w._Q, {}) : null), (C[40] = es), (C[41] = x)) : (x = C[41]),
        C[42] !== ea || C[43] !== ei
          ? ((v = ea
              ? (0, s.jsx)(w.sU, {
                  onRetry: () => {
                    ei()
                  },
                })
              : null),
            (C[42] = ea),
            (C[43] = ei),
            (C[44] = v))
          : (v = C[44]))
      let eh =
          ea || ed?.length !== 0
            ? null
            : (0, s.jsx)(E.A, {
                illustration: (0, s.jsx)(f.HJl, {}),
                illustrationSize: "icon",
                layout: "page",
                title: (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.discovery.emptyCatalog",
                  defaultMessage: "No GPTs available",
                  description:
                    "Empty state when the public GPT catalog has no accessible discovery sections for the current account",
                }),
              }),
        em =
          null == et || ea
            ? null
            : ed?.map((e) =>
                (0, s.jsx)(
                  "div",
                  {
                    ref: (t) => {
                      null == t ? V.current.delete(e.info.id) : V.current.set(e.info.id, t)
                    },
                    className: "scroll-mt-40",
                    children: (0, s.jsx)(w.hd, {
                      accountId: k.id,
                      cut: e,
                      isOwnerAndWorkspaceAllowsSpecific: el,
                      locale: e.info.locale ?? et.locale,
                    }),
                  },
                  e.info.id,
                ),
              )
      return (
        C[45] !== ec ? ((_ = ec ? (0, s.jsx)(L, { notice: "quorum" }) : null), (C[45] = ec), (C[46] = _)) : (_ = C[46]),
        C[47] !== eg ||
        C[48] !== m ||
        C[49] !== b ||
        C[50] !== x ||
        C[51] !== v ||
        C[52] !== eh ||
        C[53] !== em ||
        C[54] !== _
          ? ((j = (0, s.jsxs)("div", { className: "flex flex-col gap-8", children: [m, eg, b, x, v, eh, em, _] })),
            (C[47] = eg),
            (C[48] = m),
            (C[49] = b),
            (C[50] = x),
            (C[51] = v),
            (C[52] = eh),
            (C[53] = em),
            (C[54] = _),
            (C[55] = j))
          : (j = C[55]),
        j
      )
    }
    function Q(e) {
      return { key: e.id, name: e.name }
    }
    function K(e) {
      return { id: e.info.id, name: e.info.display_group }
    }
    function Y(e) {
      return null != e.info.display_group
    }
    function $(e) {
      return null != e.list.cursor || e.list.items.some(J)
    }
    function J(e) {
      let { resource: t } = e
      return "snorlax" !== t.gizmo.gizmo_type
    }
    function X() {
      return q.Request.safeGet("/public-api/gizmos/discovery", { additionalHeaders: { [z.n1Q]: "1" } })
    }
    var ee = a("vzxm"),
      et = a("uris"),
      ea = a("T8X0"),
      es = a("zjpG"),
      ei = a("Jqpj"),
      er = a("gBBC"),
      en = a("lcic"),
      el = a("nBWL")
    let eo = (0, a("Qgfj").YK)({
      research: {
        id: "chatgptConversations.gpts.category.research",
        defaultMessage: "Research",
        description: "Category option in the workspace GPT discovery filter for research assistants",
      },
      writing: {
        id: "chatgptConversations.gpts.category.writing",
        defaultMessage: "Writing",
        description: "Category option in the workspace GPT discovery filter for writing assistants",
      },
      programming: {
        id: "chatgptConversations.gpts.category.programming",
        defaultMessage: "Programming",
        description: "Category option in the workspace GPT discovery filter for programming assistants",
      },
      education: {
        id: "chatgptConversations.gpts.category.education",
        defaultMessage: "Education",
        description: "Category option in the workspace GPT discovery filter for learning assistants",
      },
      productivity: {
        id: "chatgptConversations.gpts.category.productivity",
        defaultMessage: "Productivity",
        description: "Category option in the workspace GPT discovery filter for productivity assistants",
      },
      lifestyle: {
        id: "chatgptConversations.gpts.category.lifestyle",
        defaultMessage: "Lifestyle",
        description: "Category option in the workspace GPT discovery filter for lifestyle assistants",
      },
      other: {
        id: "chatgptConversations.gpts.category.other",
        defaultMessage: "Other",
        description: "Category option in the workspace GPT discovery filter for GPTs outside the named categories",
      },
      searchCreators: {
        id: "chatgptConversations.gpts.workspace.searchCreators",
        defaultMessage: "Search creators",
        description: "Accessible label and placeholder for searching workspace members in the GPT creator filter",
      },
    })
    function ec(e) {
      let t,
        a,
        r,
        n,
        d,
        u,
        p,
        m,
        y,
        b,
        x,
        v,
        _,
        j,
        w,
        C,
        k,
        P,
        A,
        S,
        M,
        G,
        N,
        z,
        I = (0, i.c)(84),
        { accountId: R, categories: B, creators: E, onCategoriesChange: D, onCreatorsChange: O } = e,
        U = (0, o.A)(),
        [L, H] = (0, l.useState)(!1),
        [Z, V] = (0, l.useState)("")
      I[0] !== Z ? ((t = Z.trim()), (I[0] = Z), (I[1] = t)) : (t = I[1])
      let Q = (0, F.o)(t, 300)
      ;(I[2] !== R || I[3] !== Q
        ? ((a = ["chatgpt-gizmos", R, "creators", Q]), (I[2] = R), (I[3] = Q), (I[4] = a))
        : (a = I[4]),
        I[5] !== R || I[6] !== L || I[7] !== Q
          ? ((r = L
              ? async (e) => {
                  let { pageParam: t } = e,
                    a = await q.Request.safeGet("/accounts/{account_id}/users", {
                      parameters: { path: { account_id: R }, query: { limit: 30, offset: t, query: Q || void 0 } },
                    })
                  if (null == a.total) throw Error("Expected a counted workspace users response")
                  return a
                }
              : T.hT),
            (I[5] = R),
            (I[6] = L),
            (I[7] = Q),
            (I[8] = r))
          : (r = I[8]),
        I[9] !== a || I[10] !== r
          ? ((n = { initialPageParam: 0, queryKey: a, queryFn: r, getNextPageParam: eh, staleTime: W.D.ONE_MINUTE }),
            (I[9] = a),
            (I[10] = r),
            (I[11] = n))
          : (n = I[11]))
      let {
        data: K,
        isPending: Y,
        isError: $,
        refetch: J,
        hasNextPage: X,
        fetchNextPage: ee,
        isFetchingNextPage: ea,
      } = (0, et.q)(n)
      if (I[12] !== B || I[13] !== E[0] || I[14] !== E.length || I[15] !== U || I[16] !== D) {
        let e,
          t,
          a,
          i,
          r = [
            { value: "research", label: eo.research },
            { value: "writing", label: eo.writing },
            { value: "programming", label: eo.programming },
            { value: "education", label: eo.education },
            { value: "productivity", label: eo.productivity },
            { value: "lifestyle", label: eo.lifestyle },
            { value: "other", label: eo.other },
          ],
          n = r.find((e) => e.value === B[0])
        I[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.workspace.allCategories",
              defaultMessage: "All categories",
              description:
                "Workspace GPT category filter label when no category is selected and every category is included",
            })),
            (I[22] = e))
          : (e = I[22])
        let l = e
        if (1 === B.length && n) l = (0, s.jsx)(c.A, { ...n.label })
        else if (B.length > 1) {
          let e
          ;(I[23] !== B.length
            ? ((e = (0, s.jsx)(c.A, {
                id: "chatgptConversations.gpts.workspace.categoryCount",
                defaultMessage: "{count, plural, one {# category} other {# categories}}",
                description: "Workspace GPT filter summary; count is the number of selected categories",
                values: { count: B.length },
              })),
              (I[23] = B.length),
              (I[24] = e))
            : (e = I[24]),
            (l = e))
        }
        if (
          (I[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(c.A, {
                id: "chatgptConversations.gpts.workspace.anyCreator",
                defaultMessage: "Created by anyone",
                description: "Workspace GPT creator filter label when no creator is selected",
              })),
              (I[25] = t))
            : (t = I[25]),
          (u = t),
          1 === E.length)
        )
          u = E[0].name ?? E[0].email
        else if (E.length > 1) {
          let e
          ;(I[26] !== E.length
            ? ((e = (0, s.jsx)(c.A, {
                id: "chatgptConversations.gpts.workspace.creatorCount",
                defaultMessage: "{count, plural, one {# creator} other {# creators}}",
                description: "Workspace GPT filter summary; count is the number of selected creators",
                values: { count: E.length },
              })),
              (I[26] = E.length),
              (I[27] = e))
            : (e = I[27]),
            (u = e))
        }
        ;((y = "flex flex-wrap items-center gap-4 select-none"),
          (d = h.Ab),
          I[28] !== U
            ? ((a = U.formatMessage({
                id: "chatgptConversations.gpts.workspace.categoryFilter",
                defaultMessage: "Filter GPTs by category",
                description: "Accessible name of the workspace GPT category filter menu",
              })),
              (I[28] = U),
              (I[29] = a))
            : (a = I[29]),
          I[30] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, s.jsx)(f.Aq_, {})), (I[30] = i)) : (i = I[30]),
          I[31] !== l || I[32] !== a
            ? ((p = (0, s.jsxs)(g.$, { "aria-label": a, color: "ghost", size: "toolbar", children: [l, i] })),
              (I[31] = l),
              (I[32] = a),
              (I[33] = p))
            : (p = I[33]),
          (m = r.map((e) =>
            (0, s.jsx)(
              h.ms.CheckboxItem,
              {
                checked: B.includes(e.value),
                onSelect: eg,
                onCheckedChange: () => D(B.includes(e.value) ? B.filter((t) => t !== e.value) : [...B, e.value]),
                children: (0, s.jsx)(c.A, { ...e.label }),
              },
              e.value,
            ),
          )),
          (I[12] = B),
          (I[13] = E[0]),
          (I[14] = E.length),
          (I[15] = U),
          (I[16] = D),
          (I[17] = d),
          (I[18] = u),
          (I[19] = p),
          (I[20] = m),
          (I[21] = y))
      } else ((d = I[17]), (u = I[18]), (p = I[19]), (m = I[20]), (y = I[21]))
      return (
        I[34] !== d || I[35] !== p || I[36] !== m
          ? ((b = (0, s.jsx)(d, { triggerButton: p, children: m })), (I[34] = d), (I[35] = p), (I[36] = m), (I[37] = b))
          : (b = I[37]),
        I[38] === Symbol.for("react.memo_cache_sentinel") ? ((x = (0, s.jsx)(f.Aq_, {})), (I[38] = x)) : (x = I[38]),
        I[39] !== u
          ? ((v = (0, s.jsxs)(g.$, { color: "ghost", size: "toolbar", children: [u, x] })), (I[39] = u), (I[40] = v))
          : (v = I[40]),
        I[41] !== U ? ((_ = U.formatMessage(eo.searchCreators)), (I[41] = U), (I[42] = _)) : (_ = I[42]),
        I[43] !== U ? ((j = U.formatMessage(eo.searchCreators)), (I[43] = U), (I[44] = j)) : (j = I[44]),
        I[45] === Symbol.for("react.memo_cache_sentinel") ? ((w = (e) => V(e.target.value)), (I[45] = w)) : (w = I[45]),
        I[46] !== Z || I[47] !== _ || I[48] !== j
          ? ((C = (0, s.jsx)(h.ms.SearchInput, { "aria-label": _, placeholder: j, value: Z, onChange: w })),
            (I[46] = Z),
            (I[47] = _),
            (I[48] = j),
            (I[49] = C))
          : (C = I[49]),
        I[50] !== Y
          ? ((k = Y
              ? (0, s.jsx)(h.ms.Message, {
                  children: (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.workspace.loadingCreators",
                    defaultMessage: "Loading creators…",
                    description: "Status while the workspace GPT creator filter loads matching users",
                  }),
                })
              : null),
            (I[50] = Y),
            (I[51] = k))
          : (k = I[51]),
        I[52] !== $ || I[53] !== J
          ? ((P = $
              ? (0, s.jsx)(h.ms.Item, {
                  onSelect: () => {
                    J()
                  },
                  children: (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.workspace.retryCreators",
                    defaultMessage: "Couldn't load creators. Try again",
                    description: "Retry action shown when the workspace GPT creator filter cannot load users",
                  }),
                })
              : null),
            (I[52] = $),
            (I[53] = J),
            (I[54] = P))
          : (P = I[54]),
        I[55] !== E || I[56] !== K?.pages || I[57] !== K?.pages.flatMap || I[58] !== O
          ? ((A = K?.pages
              .flatMap(ep)
              .map((e) =>
                (0, s.jsx)(
                  h.ms.CheckboxItem,
                  {
                    checked: E.some((t) => t.account_user_id === e.account_user_id),
                    onSelect: eu,
                    onCheckedChange: () =>
                      O(
                        E.some((t) => t.account_user_id === e.account_user_id)
                          ? E.filter((t) => t.account_user_id !== e.account_user_id)
                          : [...E, e],
                      ),
                    children: e.name ?? e.email,
                  },
                  e.account_user_id,
                ),
              )),
            (I[55] = E),
            (I[56] = K?.pages),
            (I[57] = K?.pages.flatMap),
            (I[58] = O),
            (I[59] = A))
          : (A = I[59]),
        I[60] !== K?.pages || I[61] !== K?.pages.every
          ? ((S = K?.pages.every(ed)
              ? (0, s.jsx)(h.ms.Message, {
                  children: (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.workspace.noCreators",
                    defaultMessage: "No creators found",
                    description: "Empty state in the workspace GPT creator filter when no users match the search",
                  }),
                })
              : null),
            (I[60] = K?.pages),
            (I[61] = K?.pages.every),
            (I[62] = S))
          : (S = I[62]),
        I[63] !== ee || I[64] !== X || I[65] !== ea
          ? ((M = X
              ? (0, s.jsx)(h.ms.Item, {
                  disabled: ea,
                  onSelect: (e) => {
                    ;(e.preventDefault(), ee())
                  },
                  children: (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.workspace.moreCreators",
                    defaultMessage: "Load more",
                    description: "Action to load another page of users in the workspace GPT creator filter",
                  }),
                })
              : null),
            (I[63] = ee),
            (I[64] = X),
            (I[65] = ea),
            (I[66] = M))
          : (M = I[66]),
        I[67] !== E.length || I[68] !== O
          ? ((G =
              E.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(h.ms.Separator, {}),
                      (0, s.jsx)(h.ms.Item, {
                        onSelect: () => O([]),
                        children: (0, s.jsx)(c.A, {
                          id: "chatgptConversations.gpts.workspace.clearCreators",
                          defaultMessage: "Clear creator filter",
                          description: "Action clearing all selected users from the workspace GPT creator filter",
                        }),
                      }),
                    ],
                  })
                : null),
            (I[67] = E.length),
            (I[68] = O),
            (I[69] = G))
          : (G = I[69]),
        I[70] !== L ||
        I[71] !== v ||
        I[72] !== C ||
        I[73] !== k ||
        I[74] !== P ||
        I[75] !== A ||
        I[76] !== S ||
        I[77] !== M ||
        I[78] !== G
          ? ((N = (0, s.jsxs)(h.Ab, {
              contentVariant: "picker",
              open: L,
              onOpenChange: H,
              triggerButton: v,
              children: [C, k, P, A, S, M, G],
            })),
            (I[70] = L),
            (I[71] = v),
            (I[72] = C),
            (I[73] = k),
            (I[74] = P),
            (I[75] = A),
            (I[76] = S),
            (I[77] = M),
            (I[78] = G),
            (I[79] = N))
          : (N = I[79]),
        I[80] !== N || I[81] !== y || I[82] !== b
          ? ((z = (0, s.jsxs)("div", { className: y, children: [b, N] })),
            (I[80] = N),
            (I[81] = y),
            (I[82] = b),
            (I[83] = z))
          : (z = I[83]),
        z
      )
    }
    function ed(e) {
      return 0 === e.items.length
    }
    function eu(e) {
      return e.preventDefault()
    }
    function ep(e) {
      return e.items
    }
    function eg(e) {
      return e.preventDefault()
    }
    function eh(e, t) {
      let a = 30 * t.length
      return a < e.total ? a : void 0
    }
    function em(e) {
      let t,
        a,
        r,
        n,
        o,
        d,
        u,
        p,
        h,
        m,
        f,
        b,
        x,
        v,
        j = (0, i.c)(55),
        { account: C, search: k } = e
      j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (j[0] = t)) : (t = j[0])
      let [P, A] = (0, l.useState)(t)
      j[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = []), (j[1] = a)) : (a = j[1])
      let [S, T] = (0, l.useState)(a)
      j[2] !== k ? ((r = k.trim()), (j[2] = k), (j[3] = r)) : (r = j[3])
      let M = (0, F.o)(r, 300),
        G = C.id
      ;(j[4] !== S ? ((n = S.map(ev)), (j[4] = S), (j[5] = n)) : (n = j[5]),
        j[6] !== C.id || j[7] !== P || j[8] !== M || j[9] !== n
          ? ((o = ["chatgpt-gizmos", G, "workspace", M, P, n]),
            (j[6] = C.id),
            (j[7] = P),
            (j[8] = M),
            (j[9] = n),
            (j[10] = o))
          : (o = j[10]),
        j[11] !== C.id || j[12] !== P || j[13] !== S || j[14] !== M
          ? ((d = (e) => {
              let { pageParam: t } = e
              return q.Request.safeGet("/workspace-resources/{account_id}/gizmos", {
                parameters: {
                  path: { account_id: C.id },
                  query: {
                    query_continuation: t,
                    limit: 10,
                    search: M || void 0,
                    categories: P.length ? P : void 0,
                    user_ids: S.length ? S.map(ex) : void 0,
                  },
                },
              })
            }),
            (j[11] = C.id),
            (j[12] = P),
            (j[13] = S),
            (j[14] = M),
            (j[15] = d))
          : (d = j[15]),
        j[16] !== o || j[17] !== d
          ? ((u = {
              initialPageParam: void 0,
              queryKey: o,
              queryFn: d,
              getNextPageParam: eb,
              staleTime: W.D.ONE_MINUTE,
            }),
            (j[16] = o),
            (j[17] = d),
            (j[18] = u))
          : (u = j[18]))
      let {
        data: N,
        isPending: z,
        isError: I,
        refetch: R,
        hasNextPage: B,
        fetchNextPage: E,
        isFetchingNextPage: D,
        isFetchNextPageError: O,
      } = (0, et.q)(u)
      if (
        j[19] !== C.id ||
        j[20] !== P ||
        j[21] !== S ||
        j[22] !== N?.pages ||
        j[23] !== N?.pages.flatMap ||
        j[24] !== I ||
        j[25] !== O ||
        j[26] !== z ||
        j[27] !== R
      ) {
        let e = N?.pages.flatMap(ey)
        ;(j[33] !== C.id || j[34] !== P || j[35] !== S
          ? ((b = (0, s.jsx)(y.uC, {
              children: (0, s.jsx)(ec, {
                accountId: C.id,
                categories: P,
                creators: S,
                onCategoriesChange: A,
                onCreatorsChange: T,
              }),
            })),
            (j[33] = C.id),
            (j[34] = P),
            (j[35] = S),
            (j[36] = b))
          : (b = j[36]),
          j[37] !== z ? ((p = z ? (0, s.jsx)(w._Q, {}) : null), (j[37] = z), (j[38] = p)) : (p = j[38]),
          j[39] !== I || j[40] !== O || j[41] !== R
            ? ((h =
                I && !O
                  ? (0, s.jsx)(w.sU, {
                      onRetry: () => {
                        R()
                      },
                    })
                  : null),
              (j[39] = I),
              (j[40] = O),
              (j[41] = R),
              (j[42] = h))
            : (h = j[42]),
          (m =
            e?.length === 0
              ? (0, s.jsx)("div", {
                  className: "py-12 text-center text-secondary",
                  children: (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.workspace.empty",
                    defaultMessage: "No GPTs found",
                    description:
                      "Empty workspace GPT catalog state after searching or filtering; no accessible GPTs match the selected criteria",
                  }),
                })
              : null),
          (f =
            null != e && e.length > 0
              ? (0, s.jsx)(_.q, {
                  gap: "catalog",
                  children: e.map((e) => (0, s.jsx)(e_, { accountId: C.id, gizmo: e }, e.id)),
                })
              : null),
          (j[19] = C.id),
          (j[20] = P),
          (j[21] = S),
          (j[22] = N?.pages),
          (j[23] = N?.pages.flatMap),
          (j[24] = I),
          (j[25] = O),
          (j[26] = z),
          (j[27] = R),
          (j[28] = p),
          (j[29] = h),
          (j[30] = m),
          (j[31] = f),
          (j[32] = b))
      } else ((p = j[28]), (h = j[29]), (m = j[30]), (f = j[31]), (b = j[32]))
      return (
        j[43] !== E || j[44] !== B || j[45] !== O || j[46] !== D
          ? ((x = B
              ? (0, s.jsx)("div", {
                  className: "flex justify-center py-6",
                  ref: (e) => {
                    if (null == e || D || O) return
                    let t = new IntersectionObserver(
                      (e) => {
                        e.some(ef) && E()
                      },
                      { rootMargin: "0px 0px 400px 0px" },
                    )
                    return (t.observe(e), () => t.disconnect())
                  },
                  children: (0, s.jsx)(g.$, {
                    color: "secondary",
                    loading: D,
                    onClick: () => {
                      E()
                    },
                    size: "toolbar",
                    children: (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.workspace.more",
                      defaultMessage: "See more",
                      description:
                        "Button loading the next page of workspace GPTs, also available when automatic scrolling pagination fails",
                    }),
                  }),
                })
              : null),
            (j[43] = E),
            (j[44] = B),
            (j[45] = O),
            (j[46] = D),
            (j[47] = x))
          : (x = j[47]),
        j[48] !== p || j[49] !== h || j[50] !== m || j[51] !== f || j[52] !== x || j[53] !== b
          ? ((v = (0, s.jsxs)(s.Fragment, { children: [b, p, h, m, f, x] })),
            (j[48] = p),
            (j[49] = h),
            (j[50] = m),
            (j[51] = f),
            (j[52] = x),
            (j[53] = b),
            (j[54] = v))
          : (v = j[54]),
        v
      )
    }
    function ef(e) {
      return e.isIntersecting
    }
    function ey(e) {
      return e.gizmos
    }
    function eb(e) {
      return e.query_continuation ?? void 0
    }
    function ex(e) {
      return e.account_user_id
    }
    function ev(e) {
      return e.account_user_id
    }
    function e_(e) {
      let t,
        a,
        r,
        o,
        u,
        p,
        g,
        h,
        m = (0, i.c)(26),
        { accountId: y, gizmo: b } = e,
        x = (0, n.gh)(U.u),
        v = (0, d.Zp)(),
        [_, j] = (0, l.useState)(!1),
        w = b.creator_name ?? b.creator_email,
        C = b.accurate_num_paid_conversations ?? b.num_paid_conversations
      m[0] !== b.avatar_url || m[1] !== b.id || m[2] !== b.name
        ? ((t = { id: b.id, name: b.name, iconUrl: b.avatar_url }),
          (m[0] = b.avatar_url),
          (m[1] = b.id),
          (m[2] = b.name),
          (m[3] = t))
        : (t = m[3])
      let k = t
      m[4] !== v || m[5] !== x
        ? ((a = (e, t) => {
            ;((0, er.yN)(x, null),
              (0, ea.Rm)(x, "chat"),
              v((0, ee.V9)(e.gizmo.short_url?.trim() || e.gizmo.id), { state: { prefillPrompt: t } }))
          }),
          (m[4] = v),
          (m[5] = x),
          (m[6] = a))
        : (a = m[6])
      let P = a
      return (
        m[7] !== C || m[8] !== w || m[9] !== b.description
          ? ((r =
              null == b.description && null == w && null == C
                ? void 0
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      b.description ? (0, s.jsx)("div", { className: "line-clamp-1", children: b.description }) : null,
                      null == w && null == C
                        ? null
                        : (0, s.jsxs)("div", {
                            className: "flex items-center text-xs text-codex-description",
                            children: [
                              null == w
                                ? null
                                : (0, s.jsx)(c.A, {
                                    id: "chatgptConversations.gpts.workspace.creator",
                                    defaultMessage: "Created by {creator}",
                                    description:
                                      "Byline in a workspace GPT card; creator is the creator's display name or email supplied by the workspace catalog",
                                    values: { creator: w },
                                  }),
                              null == w || null == C ? null : (0, s.jsx)(es.a, { className: "mx-1" }),
                              null == C
                                ? null
                                : (0, s.jsxs)("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      (0, s.jsx)(f.OHc, { "aria-hidden": !0 }),
                                      (0, s.jsx)(c.A, {
                                        id: "chatgptConversations.gpts.workspace.conversations",
                                        defaultMessage: "{count, plural, one {# conversation} other {# conversations}}",
                                        description:
                                          "Usage count in a workspace GPT row; count is the number of conversations",
                                        values: { count: C },
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                    ],
                  })),
            (m[7] = C),
            (m[8] = w),
            (m[9] = b.description),
            (m[10] = r))
          : (r = m[10]),
        m[11] !== k
          ? ((o = (0, s.jsx)(en.S, { className: "size-9", customGpt: k, presentation: "avatar" })),
            (m[11] = k),
            (m[12] = o))
          : (o = m[12]),
        m[13] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => j(!0)), (m[13] = u)) : (u = m[13]),
        m[14] !== b.name || m[15] !== r || m[16] !== o
          ? ((p = (0, s.jsx)(ei.D, {
              className: "group justify-center border-none text-base select-none",
              description: r,
              descriptionClassName: "flex flex-col gap-0.5 text-codex-description",
              icon: o,
              iconContainer: !1,
              title: b.name,
              onClick: u,
            })),
            (m[14] = b.name),
            (m[15] = r),
            (m[16] = o),
            (m[17] = p))
          : (p = m[17]),
        m[18] !== y || m[19] !== b.id || m[20] !== _ || m[21] !== P
          ? ((g = _
              ? (0, s.jsx)(el.x, {
                  accountId: y,
                  gizmo: b.id,
                  isOwnerAndWorkspaceAllowsSpecific: !1,
                  onClose: () => j(!1),
                  onStartChat: P,
                })
              : null),
            (m[18] = y),
            (m[19] = b.id),
            (m[20] = _),
            (m[21] = P),
            (m[22] = g))
          : (g = m[22]),
        m[23] !== p || m[24] !== g
          ? ((h = (0, s.jsxs)(s.Fragment, { children: [p, g] })), (m[23] = p), (m[24] = g), (m[25] = h))
          : (h = m[25]),
        h
      )
    }
    function ej() {
      let e,
        t = (0, i.c)(2),
        { data: a } = (0, p.YL)()
      return (
        t[0] !== a
          ? ((e = null == a ? (0, s.jsx)(w._Q, {}) : (0, s.jsx)(ew, { account: a }, a.id)), (t[0] = a), (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function ew(e) {
      let t,
        a,
        p,
        w,
        S,
        T,
        M,
        G,
        N,
        z,
        I,
        q,
        R,
        B,
        E,
        D,
        O,
        U,
        W,
        F,
        L,
        H,
        Z = (0, i.c)(68),
        { account: Q } = e,
        K = (0, n.Ul)(v.GB),
        Y = (0, x.U)("(width < 48rem)"),
        $ = (0, o.A)(),
        J = (0, d.zy)(),
        X = (0, d.Zp)(),
        et = (0, j.Zj)("2160578039"),
        [ea, es] = (0, l.useState)(!1),
        ei = "workspace" === Q.structure && "quorum" !== Q.plan_type
      if (Z[0] !== J.search || Z[1] !== ei) {
        let e = new URLSearchParams(J.search)
        ;((t = ei && "public" !== e.get("view") ? "workspace" : "public"),
          (a = e.get("search") ?? ""),
          (Z[0] = J.search),
          (Z[1] = ei),
          (Z[2] = t),
          (Z[3] = a))
      } else ((t = Z[2]), (a = Z[3]))
      let er = a
      Z[4] !== $
        ? ((p = $.formatMessage({
            id: "chatgptConversations.gpts.discovery.searchLabel",
            defaultMessage: "Search GPTs",
            description: "Accessible label and placeholder for the search field in the GPT catalog",
          })),
          (Z[4] = $),
          (Z[5] = p))
        : (p = Z[5])
      let en = p
      Z[6] !== $
        ? ((w = $.formatMessage({
            id: "chatgptConversations.gpts.discovery.actions",
            defaultMessage: "GPT actions",
            description: "Accessible label for the GPT discovery menu containing My GPTs and Create actions",
          })),
          (Z[6] = $),
          (Z[7] = w))
        : (w = Z[7])
      let el = w
      Z[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, s.jsx)(c.A, {
            id: "chatgptConversations.gpts.discovery.myGpts",
            defaultMessage: "My GPTs",
            description:
              "Action on the GPT discovery page that opens the user's created GPTs and GPTs shared with them",
          })),
          (Z[8] = S))
        : (S = Z[8])
      let eo = S
      Z[9] !== et || Z[10] !== X
        ? ((T = (e) => {
            ;(et
              ? X(ee.w5)
              : (0, m.PQ)({
                  disposition: "current-tab",
                  event: e,
                  href: (0, P.K)("/gpts/mine"),
                  initiator: "open_in_browser_bridge",
                }),
              es(!1))
          }),
          (Z[9] = et),
          (Z[10] = X),
          (Z[11] = T))
        : (T = Z[11])
      let ec = T
      Z[12] !== t || Z[13] !== $ || Z[14] !== J.pathname || Z[15] !== J.search || Z[16] !== X || Z[17] !== ei
        ? ((M = ei
            ? (0, s.jsx)(b.T, {
                ariaLabel: $.formatMessage({
                  id: "chatgptConversations.gpts.catalog.tabs",
                  defaultMessage: "GPT catalog",
                  description: "Accessible name for the Workspace and Public tabs on the GPT discovery page",
                }),
                onSelect: (e) => {
                  let t = new URLSearchParams(J.search)
                  ;(t.set("view", e), X({ pathname: J.pathname, search: `?${t}` }))
                },
                options: [
                  {
                    id: "workspace",
                    label: (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.catalog.workspace",
                      defaultMessage: "Workspace",
                      description: "GPT catalog tab showing GPTs shared within the user's current workspace",
                    }),
                  },
                  {
                    id: "public",
                    label: (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.catalog.public",
                      defaultMessage: "Public",
                      description: "GPT catalog tab showing public discovery sections and search",
                    }),
                  },
                ],
                selectedId: t,
                size: "toolbar",
              })
            : null),
          (Z[12] = t),
          (Z[13] = $),
          (Z[14] = J.pathname),
          (Z[15] = J.search),
          (Z[16] = X),
          (Z[17] = ei),
          (Z[18] = M))
        : (M = Z[18])
      let ed = M
      ;(Z[19] !== ec
        ? ((G = (0, s.jsx)(g.$, { color: "ghostActive", size: "toolbar", onClick: ec, children: eo })),
          (Z[19] = ec),
          (Z[20] = G))
        : (G = Z[20]),
        Z[21] === Symbol.for("react.memo_cache_sentinel") ? ((N = (0, s.jsx)(C.i, {})), (Z[21] = N)) : (N = Z[21]),
        Z[22] !== G ? ((z = (0, s.jsxs)(s.Fragment, { children: [G, N] })), (Z[22] = G), (Z[23] = z)) : (z = Z[23]))
      let eu = z,
        ep = K ? void 0 : eu
      ;(Z[24] !== el || Z[25] !== ea || Z[26] !== eu || Z[27] !== K || Z[28] !== ec
        ? ((I = K
            ? eu
            : (0, s.jsxs)(h.Ab, {
                align: "end",
                contentWidth: "menu",
                open: ea,
                onOpenChange: es,
                triggerButton: (0, s.jsx)(r.m, {
                  content: el,
                  disabled: ea,
                  children: (0, s.jsx)(g.$, {
                    className: "@2xl/app-shell-header-toolbar:hidden",
                    "aria-label": el,
                    color: "ghostActive",
                    size: "toolbar",
                    uniform: !0,
                    children: (0, s.jsx)(f.e4G, {}),
                  }),
                }),
                children: [
                  (0, s.jsx)(h.ms.Item, { onClick: ec, children: eo }),
                  (0, s.jsx)(C.i, { asMenuItem: !0, onNavigate: () => es(!1) }),
                ],
              })),
          (Z[24] = el),
          (Z[25] = ea),
          (Z[26] = eu),
          (Z[27] = K),
          (Z[28] = ec),
          (Z[29] = I))
        : (I = Z[29]),
        Z[30] !== ep || Z[31] !== I
          ? ((q = (0, s.jsx)(k.H, { children: (0, s.jsx)(u.G.HeaderToolbar.Actions, { secondary: ep, children: I }) })),
            (Z[30] = ep),
            (Z[31] = I),
            (Z[32] = q))
          : (q = Z[32]))
      let eg = q
      ;(Z[33] !== eg || Z[34] !== ed || Z[35] !== K
        ? ((R = K ? null : (0, s.jsxs)(u.G.HeaderToolbar, { children: [ed, eg] })),
          (Z[33] = eg),
          (Z[34] = ed),
          (Z[35] = K),
          (Z[36] = R))
        : (R = Z[36]),
        Z[37] !== R
          ? ((B = (0, s.jsx)(u.G.Header, { className: "flex shrink-0 px-panel", children: R })),
            (Z[37] = R),
            (Z[38] = B))
          : (B = Z[38]),
        Z[39] === Symbol.for("react.memo_cache_sentinel") ? ((E = (0, s.jsx)(A.Z, {})), (Z[39] = E)) : (E = Z[39]))
      let eh = K && Y,
        ef = K ? "compact" : "inset",
        ey = K ? "sticky" : "page",
        eb = K ? "extraWide" : "default",
        ex = K ? eg : void 0,
        ev = K ? ed : void 0,
        e_ = K ? "toolbar-compact" : "default"
      return (
        Z[40] !== J.pathname || Z[41] !== J.search || Z[42] !== X
          ? ((D = (e) => {
              let t = new URLSearchParams(J.search)
              ;(e ? t.set("search", e) : t.delete("search"),
                X({ pathname: J.pathname, search: `?${t}` }, { replace: !0 }))
            }),
            (Z[40] = J.pathname),
            (Z[41] = J.search),
            (Z[42] = X),
            (Z[43] = D))
          : (D = Z[43]),
        Z[44] !== er || Z[45] !== en || Z[46] !== e_ || Z[47] !== D
          ? ((O = {
              variant: e_,
              id: "gpt-search",
              label: en,
              onSearchQueryChange: D,
              placeholder: en,
              searchQuery: er,
            }),
            (Z[44] = er),
            (Z[45] = en),
            (Z[46] = e_),
            (Z[47] = D),
            (Z[48] = O))
          : (O = Z[48]),
        Z[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.subtitle",
              defaultMessage:
                "Discover custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills",
              description: "Subtitle on the GPT catalog page describing the custom assistants users can discover",
            })),
            (W = (0, s.jsx)(c.A, {
              id: "chatgptConversations.gpts.discovery.title",
              defaultMessage: "GPTs",
              description: "Title of the GPT discovery page where ChatGPT users browse and search for custom GPTs",
            })),
            (Z[49] = U),
            (Z[50] = W))
          : ((U = Z[49]), (W = Z[50])),
        Z[51] !== Q || Z[52] !== t || Z[53] !== er
          ? ((F =
              "workspace" === t
                ? (0, s.jsx)(em, { account: Q, search: er })
                : (0, s.jsx)(V, { account: Q, search: er })),
            (Z[51] = Q),
            (Z[52] = t),
            (Z[53] = er),
            (Z[54] = F))
          : (F = Z[54]),
        Z[55] !== K ||
        Z[56] !== eh ||
        Z[57] !== ef ||
        Z[58] !== ey ||
        Z[59] !== eb ||
        Z[60] !== ex ||
        Z[61] !== ev ||
        Z[62] !== O ||
        Z[63] !== F
          ? ((L = (0, s.jsx)(_.d, {
              className: "flex h-full w-full flex-1 flex-col gap-8",
              children: (0, s.jsx)(y.Ql, {
                animateContentLayout: !1,
                banner: E,
                bannerAfterHeader: eh,
                headerVariant: ef,
                headerPlacement: ey,
                collapseHeaderOnScroll: K,
                expandSearchWhenWrapped: K,
                contentWidth: eb,
                headerAction: ex,
                stickyControls: ev,
                searchPlacement: "page",
                search: O,
                subtitle: U,
                title: W,
                children: F,
              }),
            })),
            (Z[55] = K),
            (Z[56] = eh),
            (Z[57] = ef),
            (Z[58] = ey),
            (Z[59] = eb),
            (Z[60] = ex),
            (Z[61] = ev),
            (Z[62] = O),
            (Z[63] = F),
            (Z[64] = L))
          : (L = Z[64]),
        Z[65] !== B || Z[66] !== L
          ? ((H = (0, s.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface text-default",
              children: [B, L],
            })),
            (Z[65] = B),
            (Z[66] = L),
            (Z[67] = H))
          : (H = Z[67]),
        H
      )
    }
  },
  jjPm(e, t, a) {
    var s = a("QosV"),
      i = a("zTeN"),
      r = a("eFn4"),
      n = a("EOo5"),
      l = a("OAko"),
      o = a("OWtl"),
      c = a("JYRT"),
      d = a("OMIV"),
      u = a("dXCv")
    let p = new Set([
        "business",
        "enterprise_cbp_usage_based",
        "enterprise_cbp_automation",
        "hc",
        "hc_consumption",
        "finserv",
        "law",
        "ent26",
        "enterprise",
        "education",
        "edu_plus",
        "edu_pro",
        "edu",
        "k12",
        "quorum",
      ]),
      g = (0, i.SZ)(
        o.u,
        ({ get: e }) => e(d.M9)?.getContext().user.customIDs?.account_id,
        ({ get: e, set: t }) => {
          let a = e(d.M9)
          if (null == a) return
          let s = () => {
            t(a.getContext().user.customIDs?.account_id)
          }
          return (a.on("values_updated", s), () => a.off("values_updated", s))
        },
      )
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            o,
            h = (0, s.c)(5),
            { children: m, loadingFallback: f, unavailableFallback: y, readOnlyFallback: b } = e,
            x = void 0 === y ? null : y,
            { accountId: v } = (0, n.As)()
          h[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (h[0] = t)) : (t = h[0])
          let { data: _, isError: j } = (0, l.YL)(void 0, t),
            w = null != v && _?.id === v && !j
          h[1] !== w ? ((a = { enabled: w }), (h[1] = w), (h[2] = a)) : (a = h[2])
          let { data: C, isError: k } = (0, i._U)(u.i, v ?? "", a),
            P = (0, i.Ul)(d.RS),
            A = (0, i.Ul)(g),
            S = (0, i._U)(c.X, "2826703856"),
            T = !P && A === v,
            M = S?.value.enable_gpt_fe_controls === !0,
            G = _?.id === v && C?.account.structure === "workspace" && T && M
          h[3] !== G ? ((o = { enabled: G }), (h[3] = G), (h[4] = o)) : (o = h[4])
          let { data: N, isPending: z, isError: I } = (0, i._U)(r.Jk, v ?? "", o)
          return j || k || (G && I)
            ? x
            : null == _ || _.id !== v || null == C || C.account.account_id !== v || !T || null == S || (G && z)
              ? void 0 === f
                ? null
                : f
              : (!0 === C.entitlement.has_active_subscription ||
                    p.has(C.account.plan_type ?? "free") ||
                    "free_workspace" === C.account.plan_type) &&
                  (!G || N?.permissions?.includes("chatgpt.workspace.gpt.crud"))
                ? m
                : (b ?? x)
        },
      },
    )
  },
  dXCv(e, t, a) {
    var s = a("zTeN"),
      i = a("DBCl"),
      r = a("Ietk"),
      n = a("Ghh3"),
      l = a("OWtl")
    let o = (0, s.vU)(l.u, (e, { scope: t }) => ({
      queryKey: ["accounts", "check", "v4-2023-04-27", e],
      staleTime: 0,
      refetchOnWindowFocus: !0,
      queryFn: async ({ signal: a }) => (
        await (0, r.uc)(t, a),
        n.Request.safeGet("/accounts/check/{version}", {
          parameters: { path: { version: "v4-2023-04-27" } },
          additionalHeaders: { [i.n1Q]: "1", [i.zBc]: e },
          signal: a,
        })
      ),
      select: (t) => t.accounts[e],
    }))
    a.d(t, {}, { i: o })
  },
  wrCb(e, t, a) {
    a.d(
      t,
      {},
      {
        K: function (e) {
          return new URL(e, "https://chatgpt.com").href
        },
      },
    )
  },
  H7Nt(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("zTeN"),
      n = a("oyxz"),
      l = a("SPnB"),
      o = a("bqtn"),
      c = a("bVeK"),
      d = a("Bbed"),
      u = a("X6Vn"),
      p = a("OWtl")
    let g = (0, d._)(async () => (await a.e(306529).then(a.bind(a, "GkN4"))).GptReportDialog)
    a.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            a,
            d,
            h,
            m = (0, i.c)(9),
            { resource: f, onSelect: y } = e,
            b = (0, r.gh)(p.u),
            x = (0, r.Ul)(l.chatGptAuthenticatedAccountId$)
          return null == x ||
            f.gizmo.tags?.includes("first_party") ||
            ("marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient)
            ? null
            : (m[0] !== x || m[1] !== y || m[2] !== f || m[3] !== b
                ? ((t = () => {
                    ;(y?.(), (0, u.qf)(b, g, { accountId: x, resource: f }))
                  }),
                  (m[0] = x),
                  (m[1] = y),
                  (m[2] = f),
                  (m[3] = b),
                  (m[4] = t))
                : (t = m[4]),
              m[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, s.jsx)(o.ms.ItemIcon, { children: (0, s.jsx)(c.YtZ, {}) })),
                  (d = (0, s.jsx)(n.A, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT",
                    description: "Menu action to report a publicly shared third-party GPT",
                  })),
                  (m[5] = a),
                  (m[6] = d))
                : ((a = m[5]), (d = m[6])),
              m[7] !== t
                ? ((h = (0, s.jsxs)(o.ms.Item, { onSelect: t, children: [a, d] })), (m[7] = t), (m[8] = h))
                : (h = m[8]),
              h)
        },
      },
    )
  },
  g0xd(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("T0Rc"),
      n = a("zTeN"),
      l = a("HZfM"),
      o = a("eFn4"),
      c = a("EOo5"),
      d = a("OAko"),
      u = a("jaeI"),
      p = a("OWtl"),
      g = a("hZax"),
      h = a("rvFo"),
      m = a("O9G5"),
      f = a("vzxm"),
      y = a("DY7H"),
      b = a("gNqU"),
      x = a("hfkq")
    function v(e) {
      let t,
        a,
        o,
        c,
        d = (0, i.c)(24),
        { showMigrationAction: u, account: g, userId: v, permissionDenied: w, permissions: C, rbacEnabled: k } = e,
        P = (0, n.gh)(p.u),
        A = (0, l.Zp)()
      ;(d[0] !== g.account_user_id ||
      d[1] !== g.account_user_role ||
      d[2] !== g.id ||
      d[3] !== w ||
      d[4] !== C ||
      d[5] !== k ||
      d[6] !== v
        ? ((t = [
            "chatgpt-gizmos",
            g.id,
            "has-migratable-owned-gpt",
            v,
            g.account_user_id,
            g.account_user_role,
            w,
            C,
            k,
          ]),
          (d[0] = g.account_user_id),
          (d[1] = g.account_user_role),
          (d[2] = g.id),
          (d[3] = w),
          (d[4] = C),
          (d[5] = k),
          (d[6] = v),
          (d[7] = t))
        : (t = d[7]),
        d[8] !== g || d[9] !== w || d[10] !== C || d[11] !== k || d[12] !== P || d[13] !== v
          ? ((a = async (e) => {
              let t,
                a,
                { signal: s } = e
              do {
                let { list: e } = await (0, m.S)({ cutId: "mine", limit: 20, cursor: t, signal: s }),
                  i = await Promise.allSettled(
                    e.items.map(async (e) => {
                      let { resource: t } = e,
                        a =
                          t.gizmo.migrated_plugin_id && t.gizmo.current_user_permission?.can_view_config
                            ? await P.queryClient.fetchQuery(
                                (0, x.d)({ gizmoId: t.gizmo.id, pluginId: t.gizmo.migrated_plugin_id }, g.id, v),
                              )
                            : void 0,
                        s = a?.deleted_plugin_id && a.gizmo_config_id ? a : void 0
                      return w
                        ? (!t.gizmo.migrated_plugin_id || null != s) &&
                            (0, y.rP)({
                              resource: t,
                              remigration: s,
                              account: g,
                              accountId: g.id,
                              permissions: C,
                              rbacEnabled: k,
                            })
                        : t.gizmo.current_user_permission?.can_view_config &&
                            (t.gizmo.current_user_permission.can_write || null != s) &&
                            (0, y.l5)({
                              resource: t,
                              remigration: s,
                              account: g,
                              accountId: g.id,
                              userId: v,
                              enabled: !0,
                            })
                    }),
                  )
                if (i.some(j)) return !0
                ;(null == a && (a = i.find(_)), (t = e.cursor ?? void 0))
              } while (null != t)
              if (a) throw a.reason
              return !1
            }),
            (d[8] = g),
            (d[9] = w),
            (d[10] = C),
            (d[11] = k),
            (d[12] = P),
            (d[13] = v),
            (d[14] = a))
          : (a = d[14]),
        d[15] !== t || d[16] !== a
          ? ((o = { queryKey: t, queryFn: a, staleTime: h.D.ONE_MINUTE }), (d[15] = t), (d[16] = a), (d[17] = o))
          : (o = d[17]))
      let { data: S, isError: T } = (0, r.I)(o)
      if (!T && null == S) return null
      if (T || !S) {
        let e
        return (
          d[18] !== A
            ? ((e = (0, s.jsx)(b.Xn, { onExplore: () => void A("/plugins") })), (d[18] = A), (d[19] = e))
            : (e = d[19]),
          e
        )
      }
      return (
        d[20] !== A || d[21] !== w || d[22] !== u
          ? ((c = w
              ? (0, s.jsx)(b.E_, { surface: "directory" })
              : (0, s.jsx)(b.m3, { surface: "directory", onMigrate: u ? () => void A(f.w5) : void 0 })),
            (d[20] = A),
            (d[21] = w),
            (d[22] = u),
            (d[23] = c))
          : (c = d[23]),
        c
      )
    }
    function _(e) {
      return "rejected" === e.status
    }
    function j(e) {
      return "fulfilled" === e.status && e.value
    }
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            r,
            p,
            h = (0, i.c)(19),
            { showMigrationAction: m } = e,
            f = void 0 === m || m,
            y = (0, l.Zp)(),
            x = (0, g.Zj)("2160578039"),
            _ = (0, g.Fj)("2562735250")
          h[0] !== _ ? ((t = _.get("enabled", !1)), (h[0] = _), (h[1] = t)) : (t = h[1])
          let j = t,
            { accountId: w, authMethod: C, isLoading: k, userId: P } = (0, c.As)()
          h[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (h[2] = a)) : (a = h[2])
          let { data: A } = (0, d.YL)(void 0, a),
            S = (0, u.l)(A, (0, g.Zj)("1355972088")),
            T = (0, g.Fj)("2826703856")
          h[3] !== T ? ((r = T.get("enable_gpt_fe_controls", !1)), (h[3] = T), (h[4] = r)) : (r = h[4])
          let M = r,
            G = x && j && null != w && A?.id === w && "workspace" === A.structure && (S || M),
            { data: N, isPending: z, isError: I } = (0, n._U)(o.Jk, w ?? "", { enabled: G })
          if (!x || k) return null
          if (null == C) {
            let e
            return (
              h[5] !== y
                ? ((e = (0, s.jsx)(b.Xn, { onExplore: () => void y("/plugins") })), (h[5] = y), (h[6] = e))
                : (e = h[6]),
              e
            )
          }
          if (null == w || null == P || A?.id !== w) return null
          if ("free" === A.plan_type || "guest" === A.plan_type || !j) {
            let e
            return (
              h[7] !== y
                ? ((e = (0, s.jsx)(b.Xn, { onExplore: () => void y("/plugins") })), (h[7] = y), (h[8] = e))
                : (e = h[8]),
              e
            )
          }
          if (G && z) return null
          let q = G && !I && N?.permissions != null && !(0, u.J)(A, S, N.permissions)
          if (!(0, u.J)(A, S, N?.permissions) && !q) {
            let e
            return (
              h[9] !== y
                ? ((e = (0, s.jsx)(b.Xn, { onExplore: () => void y("/plugins") })), (h[9] = y), (h[10] = e))
                : (e = h[10]),
              e
            )
          }
          let R = `${w}:${P}`,
            B = N?.permissions
          return (
            h[11] !== A || h[12] !== q || h[13] !== S || h[14] !== f || h[15] !== R || h[16] !== B || h[17] !== P
              ? ((p = (0, s.jsx)(
                  v,
                  {
                    account: A,
                    userId: P,
                    showMigrationAction: f,
                    permissionDenied: q,
                    permissions: B,
                    rbacEnabled: S,
                  },
                  R,
                )),
                (h[11] = A),
                (h[12] = q),
                (h[13] = S),
                (h[14] = f),
                (h[15] = R),
                (h[16] = B),
                (h[17] = P),
                (h[18] = p))
              : (p = h[18]),
            p
          )
        },
      },
    )
  },
  zjpG(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("on57"),
      n = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            l,
            o = (0, i.c)(5),
            { className: c } = e
          return (
            o[0] !== c ? ((t = (0, r.A)("last:hidden", c)), (o[0] = c), (o[1] = t)) : (t = o[1]),
            o[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, s.jsx)(n.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (o[2] = a))
              : (a = o[2]),
            o[3] !== t
              ? ((l = (0, s.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (o[3] = t), (o[4] = l))
              : (l = o[4]),
            l
          )
        },
      },
    )
  },
  ZTcy(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("zTeN"),
      n = a("eFn4"),
      l = a("EOo5"),
      o = a("OAko"),
      c = a("OWtl"),
      d = a("emkC"),
      u = a("hZax"),
      p = a("jaeI"),
      g = a("fo11")
    function h() {}
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            a,
            m,
            f,
            y = (0, i.c)(16),
            { children: b, currentBrowseTab: x, enabled: v, logSkillCreationEvent: _, mode: j, onNavigate: w } = e,
            C = (0, r.gh)(c.u),
            { accountId: k } = (0, l.As)()
          y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (y[0] = t)) : (t = y[0])
          let { data: P } = (0, o.YL)(void 0, t),
            A = null != k && P?.id === k,
            S = P?.structure === "workspace",
            T = (0, p.l)(P, (0, u.Zj)("1355972088")),
            { data: M } = (0, r._U)(n.Jk, k ?? "", { enabled: A && S && T }),
            G = (0, p.J)(P, T, M?.permissions),
            N = (void 0 === v || v) && A && (!S || G),
            z = A && S && null != M && !G
          return (
            y[1] !== w || y[2] !== C
              ? ((a = () => ({
                  activeProject: null,
                  codexAppMode: "allowed" === C.get(n.lN).status ? "work" : "chat",
                  startInSidebar: !0,
                  onNavigate: w,
                })),
                (y[1] = w),
                (y[2] = C),
                (y[3] = a))
              : (a = y[3]),
            y[4] !== b || y[5] !== x || y[6] !== A || y[7] !== S || y[8] !== z || y[9] !== j
              ? ((m = (e) => {
                  let t = {
                    ...e,
                    isPluginCreatorDisabledByAdmin: A && S && e.isPluginCreatorDisabledByAdmin,
                    isWorkspacePluginUseDenied: z,
                    canCreateSkill: !1,
                    onCreateSkill: h,
                    recordSkillAction: void 0,
                  }
                  return null == b ? (0, s.jsx)(d.e, { mode: j, currentBrowseTab: x, ...t }) : b(t)
                }),
                (y[4] = b),
                (y[5] = x),
                (y[6] = A),
                (y[7] = S),
                (y[8] = z),
                (y[9] = j),
                (y[10] = m))
              : (m = y[10]),
            y[11] !== N || y[12] !== _ || y[13] !== a || y[14] !== m
              ? ((f = (0, s.jsx)(g.y, {
                  canCreatePlugin: N,
                  logSkillCreationEvent: _,
                  getConversation: a,
                  children: m,
                })),
                (y[11] = N),
                (y[12] = _),
                (y[13] = a),
                (y[14] = m),
                (y[15] = f))
              : (f = y[15]),
            f
          )
        },
      },
    )
  },
  fo11(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("iRMi"),
      n = a("T0Rc"),
      l = a("zTeN"),
      o = a("zd8w"),
      c = a("Wf1j"),
      d = a("HZfM"),
      u = a("OiCI"),
      p = a("EOo5"),
      g = a("YWcr"),
      h = a("MX6A"),
      m = a("SGsN"),
      f = a("Q8aV"),
      y = a("loz7"),
      b = a("Y1iR"),
      x = a("ygu7"),
      v = a("yGJW"),
      _ = a("OWtl"),
      j = a("hZax")
    a.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            a,
            w,
            C,
            k,
            P,
            A = (0, i.c)(33),
            { canCreatePlugin: S, children: T, getConversation: M, hostId: G, logSkillCreationEvent: N } = e,
            z = void 0 === N || N,
            I = (0, l.gh)(_.u),
            q = (0, c.A)(),
            R = (0, d.zy)(),
            { accountId: B, userId: E } = (0, p.As)(),
            D = (0, l.Ul)(u.tT),
            O = (0, j.Zj)("1663164947"),
            U = S && O && null != B && B === D,
            W = U ? B : null
          A[0] !== W ? ((t = (0, x.cO)("connector_openai_plugin_creator", W)), (A[0] = W), (A[1] = t)) : (t = A[1])
          let { data: F } = (0, n.I)(t),
            L =
              U &&
              F?.plugin_id != null &&
              F.plugin?.installation_policy !== "NOT_AVAILABLE" &&
              F.plugin?.disabled_reason == null &&
              F.plugin?.status !== "DISABLED_BY_ADMIN",
            H =
              U &&
              (F?.plugin?.disabled_reason === "disabled_by_admin" ||
                (F?.plugin?.disabled_reason == null && F?.plugin?.status === "DISABLED_BY_ADMIN")),
            Z = (0, l.Ul)(y._X),
            [V, Q] = (0, o.useState)(null),
            K = (0, f.p8)()
          A[2] !== V ? ((a = () => () => V?.abort()), (A[2] = V), (A[3] = a)) : (a = A[3])
          let Y = F?.plugin_id
          ;(A[4] !== B ||
          A[5] !== L ||
          A[6] !== G ||
          A[7] !== R.key ||
          A[8] !== V ||
          A[9] !== D ||
          A[10] !== Y ||
          A[11] !== E
            ? ((w = [B, E, D, R.key, G, L, Y, V]),
              (A[4] = B),
              (A[5] = L),
              (A[6] = G),
              (A[7] = R.key),
              (A[8] = V),
              (A[9] = D),
              (A[10] = Y),
              (A[11] = E),
              (A[12] = w))
            : (w = A[12]),
            (0, o.useEffect)(a, w),
            A[13] !== B ||
            A[14] !== Z ||
            A[15] !== L ||
            A[16] !== F ||
            A[17] !== M ||
            A[18] !== G ||
            A[19] !== q ||
            A[20] !== z ||
            A[21] !== V ||
            A[22] !== I ||
            A[23] !== K
              ? ((C = () => {
                  if (I.get(u.tT) !== B || !L || F?.plugin_id == null || !Z || null != V) return
                  let e = M()
                  if (null == e) return
                  let t = {
                      ...e,
                      prefillPrompt: q.formatMessage(
                        {
                          id: "plugins.create.withCreatorPrompt",
                          defaultMessage: "{pluginCreator} help me create a plugin",
                          description:
                            "Editable, unsent prompt in a new task, Work, or Chat conversation after the user selects Create plugin in the Plugins Add menu. The pluginCreator placeholder is the Plugin Creator mention chip; preserve it. The user can describe their plugin before sending.",
                        },
                        { pluginCreator: (0, h.xR)("@Plugin Creator", (0, g.vt)(F.plugin_id)) },
                      ),
                    },
                    a = new AbortController()
                  ;(Q(a),
                    z && (0, v.yy)(I, r.CodexSkillNewClicked, {}),
                    (0, b.P)(I, a.signal, {
                      hostId: G,
                      postInstallComposerPrefill: t.prefillPrompt,
                      postInstallNewConversation: {
                        activeProject: t.activeProject,
                        codexAppMode: t.codexAppMode,
                        onNavigate: t.onNavigate,
                        startInSidebar: t.startInSidebar,
                        signal: a.signal,
                      },
                    })
                      .then((e) => {
                        e?.setupStarted || (Q(null), null == e || a.signal.aborted || I.get(u.tT) !== B || K(t))
                      })
                      .catch(() => {
                        ;(Q(null),
                          a.signal.aborted ||
                            I.get(m.Id).danger(
                              q.formatMessage({
                                id: "plugins.create.creatorSetupFailed",
                                defaultMessage: "Couldn’t set up Plugin Creator. Try again",
                                description:
                                  "Error shown after Create plugin in the Plugins Add menu cannot prepare Plugin Creator or its app connection. No task has been opened; the user can retry the menu action. No placeholders.",
                              }),
                              { errorAnalytics: { toastId: "plugins.create.creatorSetupFailed" } },
                            ))
                      }))
                }),
                (A[13] = B),
                (A[14] = Z),
                (A[15] = L),
                (A[16] = F),
                (A[17] = M),
                (A[18] = G),
                (A[19] = q),
                (A[20] = z),
                (A[21] = V),
                (A[22] = I),
                (A[23] = K),
                (A[24] = C))
              : (C = A[24]))
          let $ = C,
            J = L && Z && null == V,
            X = null != V
          return (
            A[25] !== T || A[26] !== $ || A[27] !== H || A[28] !== J || A[29] !== X
              ? ((k = T({
                  canCreatePlugin: J,
                  isCreatingPlugin: X,
                  isPluginCreatorDisabledByAdmin: H,
                  onCreatePlugin: $,
                })),
                (A[25] = T),
                (A[26] = $),
                (A[27] = H),
                (A[28] = J),
                (A[29] = X),
                (A[30] = k))
              : (k = A[30]),
            A[31] !== k ? ((P = (0, s.jsx)(s.Fragment, { children: k })), (A[31] = k), (A[32] = P)) : (P = A[32]),
            P
          )
        },
      },
    )
  },
  Y1iR(e, t, a) {
    var s = a("DBCl"),
      i = a("OiCI"),
      r = a("ygu7"),
      n = a("EEop")
    a("kfGJ")
    var l = a("TZ9K"),
      o = a("Yewb")
    let c = "connector_openai_plugin_creator"
    a.d(
      t,
      {},
      {
        P: async function (e, t, a) {
          let d = e.get(i.tT),
            u = () => !t.aborted && e.get(i.tT) === d
          if (null == d || !u()) return null
          let p = a?.hostId ?? s.iwv,
            g = { hostedAccountId: d, origin: "plugin_creator", requestedConnectorId: c, requiresAppSetup: !0 },
            h = (0, l._)(g),
            m = await e.queryClient.fetchQuery((0, r.cO)(c, d)).catch(() => null)
          if (!u()) return null
          if (m?.plugin_id == null) throw Error("Plugin Creator could not be loaded")
          let [f, y] = await Promise.all([
            e.query.fetch(n.Pc, {
              hostId: p,
              marketplacePath: null,
              pluginName: m.plugin_id,
              remoteMarketplaceName: s.vT_,
            }),
            h,
          ])
          if (!u()) return null
          let b = f.summary.remotePluginId ?? m.plugin_id
          return f.summary.installed &&
            f.summary.enabled &&
            null == f.summary.disabledReason &&
            "DISABLED_BY_ADMIN" !== f.summary.availability &&
            "ready" === y.kind
            ? { pluginId: b, setupStarted: !1 }
            : new Promise((i, r) => {
                let n = (e) => {
                    ;(t.removeEventListener("abort", l), i(e && u() ? { pluginId: b, setupStarted: !0 } : null))
                  },
                  l = () => n(!1)
                ;(t.addEventListener("abort", l, { once: !0 }),
                  (0, o.installPlugin)(
                    e,
                    {
                      connectionAppId: c,
                      displayName: f.summary.interface?.displayName ?? f.summary.name,
                      remotePluginId: b,
                      remoteMarketplaceName: s.vT_,
                    },
                    {
                      ...a,
                      ...g,
                      hostId: p,
                      onSuccess: () => n(!0),
                      onCancel: l,
                      onError: () => {
                        u() ? (t.removeEventListener("abort", l), r(Error("Plugin Creator setup failed"))) : l()
                      },
                    },
                  ) || l())
              })
        },
      },
    )
  },
  emkC(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      r = a("slpy"),
      n = a("a4Mw"),
      l = a("zTeN"),
      o = a("Wf1j"),
      c = a("oyxz"),
      d = a("HZfM"),
      u = a("bJfu"),
      p = a("Sm6l"),
      g = a("bqtn"),
      h = a("bVeK"),
      m = a("RNul"),
      f = a("UxN3"),
      y = a("faMt"),
      b = a("COSu"),
      x = a("UnEf"),
      v = a("dVGK"),
      _ = a("tlx5"),
      j = a("khOd")
    function w(e) {
      let t,
        a,
        d,
        u,
        m,
        _,
        w,
        P,
        A,
        S,
        T,
        M,
        G,
        N,
        z = (0, i.c)(73),
        {
          canCreatePlugin: I,
          canCreateSkill: q,
          isPluginCreatorDisabledByAdmin: R,
          isWorkspacePluginUseDenied: B,
          currentBrowseTab: E,
          hostedCreateAction: D,
          isCreatingPlugin: O,
          mode: U,
          onAddMarketplace: W,
          onAddMcpServer: F,
          onCreatePlugin: L,
          onCreateSkill: H,
          recordSkillAction: Z,
        } = e,
        V = void 0 !== O && O,
        Q = (0, o.A)(),
        K = (0, l.Ul)(j.GB),
        Y = "browse" === U && K,
        $ = !I
      ;(z[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(c.A, {
            id: "skills.appsPage.createPlugin",
            defaultMessage: "Create plugin",
            description: "Label for creating a new plugin on the Skills & Apps page",
          })),
          (z[0] = t))
        : (t = z[0]),
        z[1] !== I || z[2] !== R
          ? ((a =
              !I && R
                ? (0, s.jsx)(c.A, {
                    id: "plugins.create.creatorDisabledByAdmin",
                    defaultMessage:
                      "You do not have permission to create a plugin via conversation. Contact your admin to enable Plugin Creator",
                    description:
                      "Tooltip for the disabled Create plugin menu item when the workspace administrator has disabled Plugin Creator. Explains why conversation-based plugin creation is unavailable and who can enable it. No placeholders.",
                  })
                : void 0),
            (z[1] = I),
            (z[2] = R),
            (z[3] = a))
          : (a = z[3]),
        z[4] !== L || z[5] !== $ || z[6] !== a
          ? ((d = { disabled: $, Icon: y.A, id: "plugin", label: t, onSelect: L, tooltipText: a }),
            (z[4] = L),
            (z[5] = $),
            (z[6] = a),
            (z[7] = d))
          : (d = z[7]))
      let J = d,
        X = !q
      ;(z[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, s.jsx)(c.A, {
            id: "skills.appsPage.createSkill",
            defaultMessage: "Create skill",
            description: "Label for creating a new skill on the Skills & Apps page",
          })),
          (z[8] = u))
        : (u = z[8]),
        z[9] !== H || z[10] !== X
          ? ((m = { disabled: X, Icon: v.A, id: "skill", label: u, onSelect: H }), (z[9] = H), (z[10] = X), (z[11] = m))
          : (m = z[11]))
      let ee = m
      if (z[12] !== E || z[13] !== D || z[14] !== U || z[15] !== W || z[16] !== F || z[17] !== J || z[18] !== ee) {
        if (
          ((_ = []),
          "browse" === U && "skills" === E ? _.push(ee) : _.push(J),
          null != W && ("manage" === U || "plugins" === E))
        ) {
          let e, t
          ;(z[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(c.A, {
                id: "skills.appsPage.addMarketplace",
                defaultMessage: "Add a marketplace",
                description: "Label for adding a plugin marketplace on the Skills & Apps page",
              })),
              (z[20] = e))
            : (e = z[20]),
            z[21] !== W
              ? ((t = { disabled: !1, Icon: x.A, id: "marketplace", label: e, onSelect: W }), (z[21] = W), (z[22] = t))
              : (t = z[22]),
            _.push(t))
        }
        if ("browse" === U && "plugins" === E) {
          if (D?.canUploadArchive) {
            let e, t
            ;(z[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(c.A, {
                  id: "plugins.create.uploadArchiveAction",
                  defaultMessage: "Upload plugin archive",
                  description: "Open the hosted plugin archive upload dialog",
                })),
                (z[23] = e))
              : (e = z[23]),
              z[24] !== D
                ? ((t = { disabled: !1, Icon: h.mgx, id: "archive", label: e, onSelect: () => D.onCreate("archive") }),
                  (z[24] = D),
                  (z[25] = t))
                : (t = z[25]),
              _.push(t))
          }
          if (D?.canCreateMcpApp) {
            let e, t
            ;(z[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(c.A, {
                  id: "plugins.create.mcpApp",
                  defaultMessage: "Add custom MCP server",
                  description: "Open the hosted MCP app creation form",
                })),
                (z[26] = e))
              : (e = z[26]),
              z[27] !== D
                ? ((t = { disabled: !1, Icon: b.A, id: "hosted-mcp", label: e, onSelect: () => D.onCreate("mcp") }),
                  (z[27] = D),
                  (z[28] = t))
                : (t = z[28]),
              _.push(t))
          }
        }
        if ("manage" === U && null != F) {
          let e, t
          ;(z[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(c.A, {
                id: "settings.mcp.addServerFromPluginsMenu",
                defaultMessage: "Add MCP server",
                description: "Menu item for adding an MCP server from the Plugins settings Add dropdown",
              })),
              (z[29] = e))
            : (e = z[29]),
            z[30] !== F
              ? ((t = { disabled: !1, Icon: b.A, id: "mcp", label: e, onSelect: F }), (z[30] = F), (z[31] = t))
              : (t = z[31]),
            _.push(t))
        }
        ;((z[12] = E), (z[13] = D), (z[14] = U), (z[15] = W), (z[16] = F), (z[17] = J), (z[18] = ee), (z[19] = _))
      } else _ = z[19]
      let et = "browse" === U && "skills" === E,
        ea = _.every(k)
      if (0 === _.length && null == Z) {
        let e
        return (
          z[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(s.Fragment, {})), (z[32] = e))
            : (e = z[32]),
          e
        )
      }
      if (!V && et && ea && null == Z) {
        let e
        return (
          z[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(s.Fragment, {})), (z[33] = e))
            : (e = z[33]),
          e
        )
      }
      let es = !V && !et && ea && Z?.disabled !== !1,
        ei = 1 === _.length && null == Z ? _[0] : void 0
      z[34] !== Q
        ? ((w = Q.formatMessage({
            id: "skills.appsPage.add",
            defaultMessage: "Add",
            description: "Label for adding plugins, marketplaces, or skills from the Skills & Apps page",
          })),
          (z[34] = Q),
          (z[35] = w))
        : (w = z[35])
      let er = w,
        en = "manage" === U ? "default" : "full",
        el = es || void 0,
        eo = ei?.onSelect,
        ec = Y ? "browser:max-md:hidden" : void 0
      ;(z[36] !== er || z[37] !== ec
        ? ((P = (0, s.jsx)("span", { className: ec, children: er })), (z[36] = er), (z[37] = ec), (z[38] = P))
        : (P = z[38]),
        z[39] !== Y || z[40] !== V || z[41] !== ei
          ? ((A =
              V || null != ei
                ? null
                : (0, s.jsx)(f.b5, {
                    className: Y ? "browser:max-md:hidden" : void 0,
                    "aria-hidden": !1,
                    icon: { 16: h.Aq_, 20: h.Hsq },
                  })),
            (z[39] = Y),
            (z[40] = V),
            (z[41] = ei),
            (z[42] = A))
          : (A = z[42]),
        z[43] !== Y || z[44] !== V
          ? ((S = Y && !V ? (0, s.jsx)(h.ONy, { className: "hidden browser:max-md:block" }) : null),
            (z[43] = Y),
            (z[44] = V),
            (z[45] = S))
          : (S = z[45]),
        z[46] !== er ||
        z[47] !== Y ||
        z[48] !== es ||
        z[49] !== V ||
        z[50] !== en ||
        z[51] !== el ||
        z[52] !== eo ||
        z[53] !== P ||
        z[54] !== A ||
        z[55] !== S
          ? ((T = (0, s.jsxs)(p.$, {
              radius: en,
              "aria-label": er,
              "aria-busy": V,
              "aria-hidden": el,
              color: "primary",
              disabled: es,
              loading: V,
              size: "toolbar",
              uniformAtMobile: Y,
              onClick: eo,
              children: [P, A, S],
            })),
            (z[46] = er),
            (z[47] = Y),
            (z[48] = es),
            (z[49] = V),
            (z[50] = en),
            (z[51] = el),
            (z[52] = eo),
            (z[53] = P),
            (z[54] = A),
            (z[55] = S),
            (z[56] = T))
          : (T = z[56]))
      let ed = T
      if (es) {
        let e, t, a
        if (B) {
          let t
          ;(z[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(c.A, {
                id: "plugins.create.addDisabledByWorkspaceUsePermission",
                defaultMessage: "You don’t have permission to use plugins. Contact your workspace admin.",
                description:
                  "Tooltip for the disabled Add button when the user lacks workspace permission to use plugins and no other creation action is available. Explains the permission restriction and directs the user to their workspace admin. No placeholders.",
              })),
              (z[57] = t))
            : (t = z[57]),
            (e = t))
        } else if (R) {
          let t
          ;(z[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(c.A, {
                id: "plugins.create.addDisabledByAdmin",
                defaultMessage:
                  "You do not have permission to add plugins. Contact your admin to enable Plugin Creator or plugin uploads",
                description:
                  "Tooltip for the disabled Add button when all plugin creation actions are unavailable and the workspace administrator has disabled Plugin Creator. Asks the user to contact their admin to enable conversational creation or archive uploads. No placeholders.",
              })),
              (z[58] = t))
            : (t = z[58]),
            (e = t))
        }
        return (
          z[59] !== ed || z[60] !== er
            ? ((t = (0, s.jsx)("span", {
                className: "inline-flex",
                "aria-disabled": "true",
                "aria-label": er,
                role: "button",
                tabIndex: 0,
                children: ed,
              })),
              (z[59] = ed),
              (z[60] = er),
              (z[61] = t))
            : (t = z[61]),
          z[62] !== t || z[63] !== e
            ? ((a = (0, s.jsx)(r.m, { content: e, children: t })), (z[62] = t), (z[63] = e), (z[64] = a))
            : (a = z[64]),
          a
        )
      }
      return V || null != ei
        ? ed
        : (z[65] !== _ ? ((M = _.map(C)), (z[65] = _), (z[66] = M)) : (M = z[66]),
          z[67] !== Z
            ? ((G =
                null == Z
                  ? null
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(g.ms.Separator, {}),
                        (0, s.jsx)(g.ms.Item, {
                          leftIconAsset: n.X,
                          disabled: Z.disabled,
                          onSelect: Z.onSelect,
                          children: (0, s.jsx)(c.A, {
                            id: "skills.appsPage.recordSkill",
                            defaultMessage: "Record a skill",
                            description:
                              "Label for recording a workflow and turning it into a skill on the Skills & Apps page",
                          }),
                        }),
                      ],
                    })),
              (z[67] = Z),
              (z[68] = G))
            : (G = z[68]),
          z[69] !== ed || z[70] !== M || z[71] !== G
            ? ((N = (0, s.jsxs)(g.Ab, { align: "end", contentWidth: "icon", triggerButton: ed, children: [M, G] })),
              (z[69] = ed),
              (z[70] = M),
              (z[71] = G),
              (z[72] = N))
            : (N = z[72]),
          N)
    }
    function C(e) {
      return (0, s.jsx)(
        g.ms.Item,
        {
          LeftIcon: e.Icon,
          disabled: e.disabled,
          focusableWhenDisabled: null != e.tooltipText,
          onSelect: e.onSelect,
          tooltipText: e.tooltipText,
          children: e.label,
        },
        e.id,
      )
    }
    function k(e) {
      return e.disabled
    }
    a.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            a,
            n,
            l,
            g,
            y,
            b,
            x,
            v = (0, i.c)(42),
            j = (0, o.A)(),
            C = (0, d.$P)("/settings/plugins-settings")
          v[0] !== j
            ? ((t = j.formatMessage({
                id: "skills.appsPage.managePlugins",
                defaultMessage: "Manage",
                description: "Label for managing plugins from the Skills & Apps page header",
              })),
              (v[0] = j),
              (v[1] = t))
            : (t = v[1])
          let k = t,
            P = !1 !== e.showRefreshAction,
            A = e.breadcrumb ?? e.navigation
          ;(v[2] !== e.isRefreshDisabled ||
          v[3] !== e.isRefreshingPage ||
          v[4] !== e.needsSkillsRefresh ||
          v[5] !== e.onRefreshPage ||
          v[6] !== P
            ? ((a =
                P && e.needsSkillsRefresh
                  ? (0, s.jsxs)(p.$, {
                      radius: "full",
                      color: "ghost",
                      size: "toolbar",
                      className: "hidden shrink-0 md:inline-flex",
                      disabled: e.isRefreshDisabled,
                      onClick: e.onRefreshPage,
                      children: [
                        e.isRefreshingPage
                          ? (0, s.jsx)(m.y, { className: "icon-xs text-info" })
                          : (0, s.jsx)("span", {
                              className: "icon-xs relative scale-50",
                              children: (0, s.jsx)("span", {
                                className: "absolute inset-0 rounded-full",
                                style: { backgroundColor: "var(--color-text-info)" },
                              }),
                            }),
                        (0, s.jsx)(c.A, {
                          id: "skills.page.refreshSkillsToUseNew",
                          defaultMessage: "Refresh to use new skill(s)",
                          description:
                            "Button label shown when newly installed skills require a refresh before they can be used in the composer",
                        }),
                      ],
                    })
                  : null),
              (v[2] = e.isRefreshDisabled),
              (v[3] = e.isRefreshingPage),
              (v[4] = e.needsSkillsRefresh),
              (v[5] = e.onRefreshPage),
              (v[6] = P),
              (v[7] = a))
            : (a = v[7]),
            v[8] !== j ||
            v[9] !== e.isRefreshDisabled ||
            v[10] !== e.isRefreshingPage ||
            v[11] !== e.onRefreshPage ||
            v[12] !== P
              ? ((n = P
                  ? (0, s.jsx)(r.m, {
                      content: (0, s.jsx)(c.A, {
                        id: "skills.page.refreshSkills",
                        defaultMessage: "Refresh",
                        description: "Button label for reloading skills list",
                      }),
                      children: (0, s.jsx)(p.$, {
                        radius: "full",
                        "aria-label": j.formatMessage({
                          id: "skills.page.refreshSkills",
                          defaultMessage: "Refresh",
                          description: "Button label for reloading skills list",
                        }),
                        color: "ghost",
                        size: "toolbar",
                        className: "hidden md:inline-flex",
                        disabled: e.isRefreshDisabled,
                        uniform: !0,
                        onClick: e.onRefreshPage,
                        children: e.isRefreshingPage
                          ? (0, s.jsx)(m.y, { className: "icon-sm" })
                          : (0, s.jsx)(f.b5, { icon: { 16: h._7Q, 20: h.hVk } }),
                      }),
                    })
                  : null),
                (v[8] = j),
                (v[9] = e.isRefreshDisabled),
                (v[10] = e.isRefreshingPage),
                (v[11] = e.onRefreshPage),
                (v[12] = P),
                (v[13] = n))
              : (n = v[13]),
            v[14] !== C || v[15] !== k || v[16] !== e.onManage
              ? ((l =
                  null == e.onManage
                    ? null
                    : (0, s.jsx)(r.m, {
                        content: k,
                        children: (0, s.jsx)(p.z, {
                          radius: "full",
                          href: C,
                          "aria-label": k,
                          color: "ghost",
                          size: "toolbar",
                          uniform: !0,
                          onClick: (t) => (0, _.y)(t, e.onManage),
                          children: (0, s.jsx)(f.b5, { icon: { 16: h.dqq, 20: h.IR } }),
                        }),
                      })),
                (v[14] = C),
                (v[15] = k),
                (v[16] = e.onManage),
                (v[17] = l))
              : (l = v[17]),
            v[18] !== e.canCreatePlugin ||
            v[19] !== e.canCreateSkill ||
            v[20] !== e.currentBrowseTab ||
            v[21] !== e.hostedCreateAction ||
            v[22] !== e.isCreatingPlugin ||
            v[23] !== e.isPluginCreatorDisabledByAdmin ||
            v[24] !== e.isWorkspacePluginUseDenied ||
            v[25] !== e.onAddMarketplace ||
            v[26] !== e.onCreatePlugin ||
            v[27] !== e.onCreateSkill ||
            v[28] !== e.recordSkillAction
              ? ((g = (0, s.jsx)(w, {
                  mode: "browse",
                  canCreatePlugin: e.canCreatePlugin,
                  canCreateSkill: e.canCreateSkill,
                  isCreatingPlugin: e.isCreatingPlugin,
                  isPluginCreatorDisabledByAdmin: e.isPluginCreatorDisabledByAdmin,
                  isWorkspacePluginUseDenied: e.isWorkspacePluginUseDenied,
                  currentBrowseTab: e.currentBrowseTab,
                  hostedCreateAction: e.hostedCreateAction,
                  recordSkillAction: e.recordSkillAction,
                  onAddMarketplace: e.onAddMarketplace,
                  onCreatePlugin: e.onCreatePlugin,
                  onCreateSkill: e.onCreateSkill,
                })),
                (v[18] = e.canCreatePlugin),
                (v[19] = e.canCreateSkill),
                (v[20] = e.currentBrowseTab),
                (v[21] = e.hostedCreateAction),
                (v[22] = e.isCreatingPlugin),
                (v[23] = e.isPluginCreatorDisabledByAdmin),
                (v[24] = e.isWorkspacePluginUseDenied),
                (v[25] = e.onAddMarketplace),
                (v[26] = e.onCreatePlugin),
                (v[27] = e.onCreateSkill),
                (v[28] = e.recordSkillAction),
                (v[29] = g))
              : (g = v[29]),
            v[30] !== e.hostSelector || v[31] !== a || v[32] !== n || v[33] !== l || v[34] !== g
              ? ((y = (0, s.jsxs)("div", {
                  className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                  children: [a, e.hostSelector, n, l, g],
                })),
                (v[30] = e.hostSelector),
                (v[31] = a),
                (v[32] = n),
                (v[33] = l),
                (v[34] = g),
                (v[35] = y))
              : (y = v[35]),
            v[36] !== A || v[37] !== y
              ? ((b = (0, s.jsxs)(s.Fragment, { children: [A, y] })), (v[36] = A), (v[37] = y), (v[38] = b))
              : (b = v[38]))
          let S = b
          return (
            v[39] !== S || v[40] !== e.inline
              ? ((x = e.inline
                  ? (0, s.jsx)("div", { className: "flex min-w-0 items-center justify-end gap-2", children: S })
                  : (0, s.jsx)(u.G.HeaderToolbar, { children: S })),
                (v[39] = S),
                (v[40] = e.inline),
                (v[41] = x))
              : (x = v[41]),
            x
          )
        },
        e: w,
      },
    )
  },
}
//# sourceMappingURL=647097.46a6fb52b6.js.map
