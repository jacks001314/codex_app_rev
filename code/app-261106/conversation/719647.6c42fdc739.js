export const __rspack_esm_ids = [719647]
export const __webpack_modules__ = {
  UnEf(e, i, t) {
    var n = t("ABep")
    ;(t("zd8w"),
      (i.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z",
            fill: "currentColor",
          }),
        })))
  },
  aMRi(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("uris"),
      r = t("zTeN"),
      l = t("zd8w"),
      o = t("oyxz"),
      c = t("HZfM"),
      d = t("Ghh3"),
      u = t("T8X0"),
      p = t("TjgH"),
      g = t("zjpG"),
      m = t("Sm6l"),
      h = t("bVeK"),
      f = t("FrrB"),
      y = t("RNul"),
      x = t("Jqpj"),
      b = t("gBBC"),
      v = t("OWtl"),
      _ = t("ZGaK"),
      j = t("rvFo"),
      w = t("lcic"),
      k = t("O9G5"),
      C = t("nBWL"),
      P = t("E4rW"),
      A = t("T4c2"),
      T = t("vzxm")
    function S(e) {
      let { gizmo: i } = e
      return "snorlax" !== i.gizmo_type
    }
    function M(e) {
      let { resource: i } = e
      return i
    }
    function z(e) {
      return e.list.items
    }
    function N(e) {
      return e.list.cursor ?? void 0
    }
    function G(e) {
      let { gizmo: i } = e
      return "snorlax" !== i.gizmo_type
    }
    function I(e) {
      return e.items
    }
    function B(e) {
      return e.cursor ?? void 0
    }
    function R(e) {
      return e.resource
    }
    function E(e) {
      let i,
        t,
        a,
        d,
        m,
        f,
        y,
        _,
        j,
        k,
        A,
        S,
        M,
        z,
        N,
        G,
        I = (0, s.c)(51),
        { accountId: B, isOwnerAndWorkspaceAllowsSpecific: R, rank: E, resource: D } = e,
        q = (0, r.gh)(v.u),
        U = (0, c.Zp)(),
        [Z, V] = (0, l.useState)(!1)
      I[0] !== D.gizmo.display.name || I[1] !== D.gizmo.id
        ? ((i = D.gizmo.display.name.trim() || D.gizmo.id),
          (I[0] = D.gizmo.display.name),
          (I[1] = D.gizmo.id),
          (I[2] = i))
        : (i = I[2])
      let F = i
      ;(I[3] !== D.gizmo.display.profile_picture_url
        ? ((t = D.gizmo.display.profile_picture_url?.trim() || null),
          (I[3] = D.gizmo.display.profile_picture_url),
          (I[4] = t))
        : (t = I[4]),
        I[5] !== F || I[6] !== D.gizmo.id || I[7] !== t
          ? ((a = { iconUrl: t, id: D.gizmo.id, name: F }), (I[5] = F), (I[6] = D.gizmo.id), (I[7] = t), (I[8] = a))
          : (a = I[8]))
      let H = a
      I[9] !== R || I[10] !== D.gizmo.tags
        ? ((d = (0, P.m)(D.gizmo.tags, R)), (I[9] = R), (I[10] = D.gizmo.tags), (I[11] = d))
        : (d = I[11])
      let L = d
      I[12] !== D.gizmo.author.display_name
        ? ((m = D.gizmo.author.display_name?.trim() || void 0), (I[12] = D.gizmo.author.display_name), (I[13] = m))
        : (m = I[13])
      let W = m
      I[14] !== D.gizmo.vanity_metrics?.num_conversations_str
        ? ((f = D.gizmo.vanity_metrics?.num_conversations_str?.trim()),
          (I[14] = D.gizmo.vanity_metrics?.num_conversations_str),
          (I[15] = f))
        : (f = I[15])
      let $ = f
      I[16] !== U || I[17] !== q
        ? ((y = (e, i) => {
            ;((0, b.yN)(q, null),
              (0, u.Rm)(q, "chat"),
              U((0, T.V9)(e.gizmo.short_url?.trim() || e.gizmo.id), { state: { prefillPrompt: i } }))
          }),
          (I[16] = U),
          (I[17] = q),
          (I[18] = y))
        : (y = I[18])
      let Q = y
      I[19] !== L
        ? ((_ =
            null == L
              ? void 0
              : [
                  (0, n.jsx)(
                    p.E,
                    {
                      variant: "warning",
                      children: (0, n.jsx)(o.A, {
                        id: "chatgptConversations.gpts.discovery.restrictedBadge",
                        defaultMessage: "Restricted",
                        description:
                          "Compact badge on a GPT discovery row indicating that workspace policy or GPT availability limits access to it",
                      }),
                    },
                    "restriction",
                  ),
                ]),
          (I[19] = L),
          (I[20] = _))
        : (_ = I[20])
      let K = null == L ? void 0 : "opacity-60"
      return (
        I[21] !== W || I[22] !== $ || I[23] !== D.gizmo.display.description || I[24] !== L
          ? ((j =
              null == D.gizmo.display.description && null == W && null == $ && null == L
                ? void 0
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      null == D.gizmo.display.description
                        ? null
                        : (0, n.jsx)("div", { className: "line-clamp-1", children: D.gizmo.display.description }),
                      null == W && null == $
                        ? null
                        : (0, n.jsxs)("div", {
                            className: "flex items-center text-xs text-codex-description",
                            children: [
                              null == W
                                ? null
                                : (0, n.jsx)(o.A, {
                                    id: "chatgptConversations.gpts.discovery.byAuthor",
                                    defaultMessage: "By {author}",
                                    description:
                                      "Byline on a GPT discovery card naming the person or organization that created the GPT; author is the creator's display name",
                                    values: { author: W },
                                  }),
                              null == W || null == $ ? null : (0, n.jsx)(g.a, { className: "mx-1" }),
                              null == $
                                ? null
                                : (0, n.jsxs)("span", {
                                    className: "flex items-center gap-1",
                                    children: [(0, n.jsx)(h.OHc, { "aria-hidden": !0 }), $],
                                  }),
                            ],
                          }),
                      null == L
                        ? null
                        : (0, n.jsx)("div", {
                            className: "text-xs text-warning",
                            children: (0, n.jsx)(O, { restriction: L }),
                          }),
                    ],
                  })),
            (I[21] = W),
            (I[22] = $),
            (I[23] = D.gizmo.display.description),
            (I[24] = L),
            (I[25] = j))
          : (j = I[25]),
        I[26] !== E
          ? ((k =
              null == E
                ? null
                : (0, n.jsx)("span", { className: "w-5 text-center text-sm text-secondary", children: E })),
            (I[26] = E),
            (I[27] = k))
          : (k = I[27]),
        I[28] !== H
          ? ((A = (0, n.jsx)(w.S, { className: "size-9", customGpt: H, presentation: "avatar" })),
            (I[28] = H),
            (I[29] = A))
          : (A = I[29]),
        I[30] !== k || I[31] !== A
          ? ((S = (0, n.jsxs)("span", { className: "flex items-center gap-2", children: [k, A] })),
            (I[30] = k),
            (I[31] = A),
            (I[32] = S))
          : (S = I[32]),
        I[33] !== L
          ? ((M =
              null == L
                ? () => {
                    V(!0)
                  }
                : void 0),
            (I[33] = L),
            (I[34] = M))
          : (M = I[34]),
        I[35] !== F || I[36] !== j || I[37] !== S || I[38] !== M || I[39] !== _ || I[40] !== K
          ? ((z = (0, n.jsx)(x.D, {
              badges: _,
              className: "group justify-center border-none text-base select-none",
              contentClassName: K,
              description: j,
              descriptionClassName: "flex flex-col gap-0.5 text-codex-description",
              icon: S,
              iconContainer: !1,
              title: F,
              onClick: M,
            })),
            (I[35] = F),
            (I[36] = j),
            (I[37] = S),
            (I[38] = M),
            (I[39] = _),
            (I[40] = K),
            (I[41] = z))
          : (z = I[41]),
        I[42] !== B || I[43] !== Z || I[44] !== R || I[45] !== D || I[46] !== Q
          ? ((N = Z
              ? (0, n.jsx)(C.x, {
                  accountId: B,
                  gizmo: D,
                  isOwnerAndWorkspaceAllowsSpecific: R,
                  onClose: () => V(!1),
                  onStartChat: Q,
                })
              : null),
            (I[42] = B),
            (I[43] = Z),
            (I[44] = R),
            (I[45] = D),
            (I[46] = Q),
            (I[47] = N))
          : (N = I[47]),
        I[48] !== z || I[49] !== N
          ? ((G = (0, n.jsxs)(n.Fragment, { children: [z, N] })), (I[48] = z), (I[49] = N), (I[50] = G))
          : (G = I[50]),
        G
      )
    }
    function O(e) {
      let i = (0, s.c)(3),
        { restriction: t } = e
      switch (t) {
        case "fedramp_incompatible": {
          let e
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.fedrampRestricted",
                  defaultMessage: "Unavailable in this workspace's compliance mode",
                  description:
                    "Status below a GPT discovery card explaining that the GPT uses capabilities unavailable in the current compliance workspace",
                })),
                (i[0] = e))
              : (e = i[0]),
            e
          )
        }
        case "openai_gpt_workspace_disabled":
        case "workspace_disabled": {
          let e
          return (
            i[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.workspaceRestricted",
                  defaultMessage: "Turned off by your workspace admin",
                  description:
                    "Status below a GPT discovery card explaining that the current workspace administrator has disabled access to it",
                })),
                (i[1] = e))
              : (e = i[1]),
            e
          )
        }
        case "interactions_disabled": {
          let e
          return (
            i[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(o.A, {
                  id: "chatgptConversations.gpts.discovery.interactionsDisabled",
                  defaultMessage: "Temporarily unavailable",
                  description:
                    "Status below a GPT discovery card explaining that conversations with this GPT are currently disabled",
                })),
                (i[2] = e))
              : (e = i[2]),
            e
          )
        }
      }
    }
    function D() {
      let e,
        i,
        t = (0, s.c)(2)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(y.y, { className: "icon-md" })), (t[0] = e))
          : (e = t[0]),
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsxs)("div", {
              "aria-live": "polite",
              className: "flex min-h-48 flex-1 items-center justify-center",
              role: "status",
              children: [
                e,
                (0, n.jsx)("span", {
                  className: "sr-only",
                  children: (0, n.jsx)(o.A, {
                    id: "chatgptConversations.gpts.discovery.loading",
                    defaultMessage: "Loading GPTs",
                    description:
                      "Screen-reader status announced while the GPT discovery page is loading directory or search results",
                  }),
                }),
              ],
            })),
            (t[1] = i))
          : (i = t[1]),
        i
      )
    }
    function q(e) {
      let i,
        t,
        a,
        r,
        l,
        c,
        d = (0, s.c)(8),
        { onRetry: u } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.retry",
              defaultMessage: "Try again",
              description: "Button label for retrying the GPT discovery or search request after it fails",
            })),
            (d[0] = i))
          : (i = d[0]),
        d[1] !== u
          ? ((t = (0, n.jsx)(m.$, { color: "secondary", type: "button", onClick: u, children: i })),
            (d[1] = u),
            (d[2] = t))
          : (t = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, n.jsx)(h.HJl, {})), (d[3] = a)) : (a = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.error",
              defaultMessage: "GPTs couldn't be loaded",
              description: "Error-state title on the GPT discovery page when the directory or search request fails",
            })),
            (l = (0, n.jsx)(o.A, {
              id: "chatgptConversations.gpts.discovery.errorDescription",
              defaultMessage: "Check your connection and try again",
              description: "Short recovery guidance below the GPT discovery page error title",
            })),
            (d[4] = r),
            (d[5] = l))
          : ((r = d[4]), (l = d[5])),
        d[6] !== t
          ? ((c = (0, n.jsx)(f.A, {
              actions: t,
              illustration: a,
              illustrationSize: "icon",
              layout: "page",
              title: r,
              description: l,
            })),
            (d[6] = t),
            (d[7] = c))
          : (c = d[7]),
        c
      )
    }
    t.d(
      i,
      {},
      {
        _Q: D,
        hd: function (e) {
          let i,
            t,
            r,
            l,
            c,
            d,
            u,
            p,
            g,
            h,
            f,
            y,
            x,
            b,
            v = (0, s.c)(54),
            { accountId: w, cut: C, isOwnerAndWorkspaceAllowsSpecific: P, locale: T } = e
          ;(v[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = [void 0]), (v[0] = i)) : (i = v[0]),
            v[1] !== C ? ((t = { pageParams: i, pages: [C] }), (v[1] = C), (v[2] = t)) : (t = v[2]),
            v[3] !== C.info.id || v[4] !== T
              ? ((r = (e) => {
                  let { pageParam: i } = e
                  return (0, k.S)({ cursor: i, cutId: C.info.id, limit: 6, locale: T })
                }),
                (v[3] = C.info.id),
                (v[4] = T),
                (v[5] = r))
              : (r = v[5]),
            v[6] !== w || v[7] !== C.info.id || v[8] !== T
              ? ((l = (0, A.bF)(w, C.info.id, T)), (v[6] = w), (v[7] = C.info.id), (v[8] = T), (v[9] = l))
              : (l = v[9]),
            v[10] !== t || v[11] !== r || v[12] !== l
              ? ((c = {
                  getNextPageParam: N,
                  initialData: t,
                  initialPageParam: void 0,
                  queryFn: r,
                  queryKey: l,
                  staleTime: j.D.ONE_MINUTE,
                }),
                (v[10] = t),
                (v[11] = r),
                (v[12] = l),
                (v[13] = c))
              : (c = v[13]))
          let {
              data: G,
              fetchNextPage: I,
              hasNextPage: B,
              isFetchNextPageError: R,
              isFetchingNextPage: O,
            } = (0, a.q)(c),
            D = G.pages
          if (
            v[14] !== w ||
            v[15] !== C.info.description ||
            v[16] !== C.info.display_type ||
            v[17] !== C.info.id ||
            v[18] !== C.info.title ||
            v[19] !== G.pages ||
            v[20] !== B ||
            v[21] !== P
          ) {
            p = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                i,
                t,
                s = D.flatMap(z).map(M).filter(S)
              if (0 === s.length && !B) {
                p = null
                break e
              }
              f = `gpt-discovery-cut-${C.info.id}`
              let a = `gpt-discovery-cut-${C.info.id}`
              ;(v[28] !== C.info.title || v[29] !== a
                ? ((e = (0, n.jsx)("h2", {
                    className: "heading-xl font-semibold text-default",
                    id: a,
                    children: C.info.title,
                  })),
                  (v[28] = C.info.title),
                  (v[29] = a),
                  (v[30] = e))
                : (e = v[30]),
                v[31] !== C.info.description
                  ? ((i =
                      null == C.info.description
                        ? null
                        : (0, n.jsx)("div", { className: "text-sm text-secondary", children: C.info.description })),
                    (v[31] = C.info.description),
                    (v[32] = i))
                  : (i = v[32]),
                v[33] !== e || v[34] !== i
                  ? ((u = (0, n.jsxs)("div", { className: "mb-3 flex flex-col gap-1 select-none", children: [e, i] })),
                    (v[33] = e),
                    (v[34] = i),
                    (v[35] = u))
                  : (u = v[35]),
                (d = _.q),
                (g = "catalog"),
                v[36] !== w || v[37] !== C.info.display_type || v[38] !== P
                  ? ((t = (e, i) =>
                      (0, n.jsx)(
                        E,
                        {
                          accountId: w,
                          isOwnerAndWorkspaceAllowsSpecific: P,
                          rank: "featured" === C.info.display_type ? void 0 : i + 1,
                          resource: e,
                        },
                        e.gizmo.id,
                      )),
                    (v[36] = w),
                    (v[37] = C.info.display_type),
                    (v[38] = P),
                    (v[39] = t))
                  : (t = v[39]),
                (h = s.map(t)))
            }
            ;((v[14] = w),
              (v[15] = C.info.description),
              (v[16] = C.info.display_type),
              (v[17] = C.info.id),
              (v[18] = C.info.title),
              (v[19] = G.pages),
              (v[20] = B),
              (v[21] = P),
              (v[22] = d),
              (v[23] = u),
              (v[24] = p),
              (v[25] = g),
              (v[26] = h),
              (v[27] = f))
          } else ((d = v[22]), (u = v[23]), (p = v[24]), (g = v[25]), (h = v[26]), (f = v[27]))
          return p !== Symbol.for("react.early_return_sentinel")
            ? p
            : (v[40] !== d || v[41] !== g || v[42] !== h
                ? ((y = (0, n.jsx)(d, { gap: g, children: h })), (v[40] = d), (v[41] = g), (v[42] = h), (v[43] = y))
                : (y = v[43]),
              v[44] !== I || v[45] !== B || v[46] !== R || v[47] !== O
                ? ((x = B
                    ? (0, n.jsx)("div", {
                        className: "mt-3 flex justify-center",
                        children: (0, n.jsx)(m.$, {
                          color: "secondary",
                          loading: O,
                          size: "toolbar",
                          type: "button",
                          onClick: () => {
                            I()
                          },
                          children: R
                            ? (0, n.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.retryMore",
                                defaultMessage: "Try again",
                                description:
                                  "Button label for retrying a failed request for more GPTs in one section of the GPT discovery page",
                              })
                            : (0, n.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.showMore",
                                defaultMessage: "See more",
                                description:
                                  "Button label for loading more GPTs in one section of the GPT discovery page",
                              }),
                        }),
                      })
                    : null),
                  (v[44] = I),
                  (v[45] = B),
                  (v[46] = R),
                  (v[47] = O),
                  (v[48] = x))
                : (x = v[48]),
              v[49] !== u || v[50] !== y || v[51] !== x || v[52] !== f
                ? ((b = (0, n.jsxs)("section", { "aria-labelledby": f, children: [u, y, x] })),
                  (v[49] = u),
                  (v[50] = y),
                  (v[51] = x),
                  (v[52] = f),
                  (v[53] = b))
                : (b = v[53]),
              b)
        },
        kj: function (e) {
          let i,
            t,
            r,
            l,
            c,
            u,
            p,
            g,
            y,
            x,
            b,
            v,
            w,
            C = (0, s.c)(49),
            { accountId: P, isOwnerAndWorkspaceAllowsSpecific: T, query: S, workspaceOnly: M } = e,
            z = null != P
          ;(C[0] !== S || C[1] !== M
            ? ((i = async (e) => {
                let { pageParam: i } = e
                return 0 === S.length
                  ? { items: (await (0, k.S)({ cutId: "recent", limit: 3 })).list.items.map(R), cursor: null }
                  : d.Request.safeGet("/gizmos/search", {
                      parameters: { query: { cursor: i, limit: 12, q: S, workspace_only: !!M || void 0 } },
                    })
              }),
              (C[0] = S),
              (C[1] = M),
              (C[2] = i))
            : (i = C[2]),
            C[3] !== P || C[4] !== S || C[5] !== M
              ? ((t = (0, A.J5)(P, S, M)), (C[3] = P), (C[4] = S), (C[5] = M), (C[6] = t))
              : (t = C[6]),
            C[7] !== z || C[8] !== i || C[9] !== t
              ? ((r = {
                  enabled: z,
                  initialPageParam: void 0,
                  queryFn: i,
                  getNextPageParam: B,
                  queryKey: t,
                  staleTime: j.D.ONE_MINUTE,
                }),
                (C[7] = z),
                (C[8] = i),
                (C[9] = t),
                (C[10] = r))
              : (r = C[10]))
          let {
            data: N,
            fetchNextPage: O,
            hasNextPage: U,
            isFetchNextPageError: Z,
            isFetchingNextPage: V,
            isPending: F,
            refetch: H,
          } = (0, a.q)(r)
          if (F) {
            let e
            return (
              C[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(D, {})), (C[11] = e)) : (e = C[11]),
              e
            )
          }
          if (null == N) {
            let e
            return (
              C[12] !== H
                ? ((e = (0, n.jsx)(q, {
                    onRetry: () => {
                      H()
                    },
                  })),
                  (C[12] = H),
                  (C[13] = e))
                : (e = C[13]),
              e
            )
          }
          let L = N.pages
          if (C[14] !== P || C[15] !== N.pages || C[16] !== U || C[17] !== T || C[18] !== S) {
            u = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                i = L.flatMap(I).filter(G)
              if (0 === i.length && !U) {
                let e, i
                ;(C[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(h.HJl, {})), (C[26] = e))
                  : (e = C[26]),
                  C[27] === Symbol.for("react.memo_cache_sentinel")
                    ? ((i = (0, n.jsx)(f.A, {
                        illustration: e,
                        illustrationSize: "icon",
                        layout: "page",
                        title: (0, n.jsx)(o.A, {
                          id: "chatgptConversations.gpts.discovery.noSearchResults",
                          defaultMessage: "No GPTs found",
                          description:
                            "Empty-state title on the GPT discovery page when a user's search returns no matching custom GPTs",
                        }),
                        description: (0, n.jsx)(o.A, {
                          id: "chatgptConversations.gpts.discovery.noSearchResultsDescription",
                          defaultMessage: "Try another search",
                          description:
                            "Short suggestion below the empty GPT search result title asking the user to change their search terms",
                        }),
                      })),
                      (C[27] = i))
                    : (i = C[27]),
                  (u = i))
                break e
              }
              ;((y = "gpt-search-results-heading"),
                C[28] === Symbol.for("react.memo_cache_sentinel")
                  ? ((x = (0, n.jsx)("h2", {
                      className: "sr-only",
                      id: "gpt-search-results-heading",
                      children: (0, n.jsx)(o.A, {
                        id: "chatgptConversations.gpts.discovery.searchResultsHeading",
                        defaultMessage: "GPT search results",
                        description:
                          "Screen-reader-only heading above the matching cards on the GPT discovery search results page",
                      }),
                    })),
                    (C[28] = x))
                  : (x = C[28]),
                C[29] !== S.length
                  ? ((c =
                      0 === S.length
                        ? (0, n.jsx)("div", {
                            className: "px-3 py-2 text-sm text-secondary",
                            children: (0, n.jsx)(o.A, {
                              id: "chatgptConversations.gpts.search.recent",
                              defaultMessage: "Recently used",
                              description:
                                "Heading above recently used GPTs shown when focusing the public catalog search field without entering a query",
                            }),
                          })
                        : null),
                    (C[29] = S.length),
                    (C[30] = c))
                  : (c = C[30]),
                (l = _.q),
                (p = "catalog"),
                C[31] !== P || C[32] !== T
                  ? ((e = (e) =>
                      (0, n.jsx)(E, { accountId: P, isOwnerAndWorkspaceAllowsSpecific: T, resource: e }, e.gizmo.id)),
                    (C[31] = P),
                    (C[32] = T),
                    (C[33] = e))
                  : (e = C[33]),
                (g = i.map(e)))
            }
            ;((C[14] = P),
              (C[15] = N.pages),
              (C[16] = U),
              (C[17] = T),
              (C[18] = S),
              (C[19] = l),
              (C[20] = c),
              (C[21] = u),
              (C[22] = p),
              (C[23] = g),
              (C[24] = y),
              (C[25] = x))
          } else ((l = C[19]), (c = C[20]), (u = C[21]), (p = C[22]), (g = C[23]), (y = C[24]), (x = C[25]))
          return u !== Symbol.for("react.early_return_sentinel")
            ? u
            : (C[34] !== l || C[35] !== p || C[36] !== g
                ? ((b = (0, n.jsx)(l, { gap: p, children: g })), (C[34] = l), (C[35] = p), (C[36] = g), (C[37] = b))
                : (b = C[37]),
              C[38] !== O || C[39] !== U || C[40] !== Z || C[41] !== V
                ? ((v = U
                    ? (0, n.jsx)("div", {
                        className: "mt-3 flex justify-center",
                        children: (0, n.jsx)(m.$, {
                          color: "secondary",
                          loading: V,
                          size: "toolbar",
                          type: "button",
                          onClick: () => {
                            O()
                          },
                          children: Z
                            ? (0, n.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.retrySearch",
                                defaultMessage: "Try again",
                                description:
                                  "Button label for retrying a failed request for another page of GPT search results",
                              })
                            : (0, n.jsx)(o.A, {
                                id: "chatgptConversations.gpts.discovery.showMoreSearchResults",
                                defaultMessage: "See more",
                                description: "Button label for loading another page of GPT search results",
                              }),
                        }),
                      })
                    : null),
                  (C[38] = O),
                  (C[39] = U),
                  (C[40] = Z),
                  (C[41] = V),
                  (C[42] = v))
                : (v = C[42]),
              C[43] !== c || C[44] !== b || C[45] !== v || C[46] !== y || C[47] !== x
                ? ((w = (0, n.jsxs)("section", { "aria-labelledby": y, children: [x, c, b, v] })),
                  (C[43] = c),
                  (C[44] = b),
                  (C[45] = v),
                  (C[46] = y),
                  (C[47] = x),
                  (C[48] = w))
                : (w = C[48]),
              w)
        },
        sU: q,
      },
    )
  },
  O9G5(e, i, t) {
    var n = t("DBCl"),
      s = t("Ghh3")
    t.d(
      i,
      {},
      {
        S: async function ({ cursor: e, cutId: i, limit: t, locale: a, signal: r }) {
          let l = (e) =>
              s.Request.safeGet("/public-api/gizmos/discovery/{category_or_cut_id}", {
                additionalHeaders: { [n.n1Q]: "1" },
                signal: r,
                parameters: { path: { category_or_cut_id: i }, query: { cursor: e, limit: t, locale: a } },
              }),
            o = await l(e)
          return 0 === o.list.items.length && null != o.list.cursor ? l(o.list.cursor) : o
        },
      },
    )
  },
  OiCX(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("Clvq"),
      r = t("zTeN"),
      l = t("oyxz"),
      o = t("HZfM"),
      c = t("OiCI"),
      d = t("Sm6l"),
      u = t("bqtn"),
      p = t("bVeK"),
      g = t("Bbed"),
      m = t("X6Vn"),
      h = t("ZTcy"),
      f = t("OWtl"),
      y = t("khOd"),
      x = t("hZax"),
      b = t("JYRT")
    let v = (0, g._)(async () => (await t.e(698757).then(t.bind(t, "y2N1"))).GptCreatePluginPrompt)
    t.d(
      i,
      {},
      {
        i: function (e) {
          let i,
            t,
            g,
            _ = (0, s.c)(14),
            { asMenuItem: j, onNavigate: w } = e,
            k = void 0 !== j && j,
            C = (0, r.gh)(f.u),
            P = (0, o.Zp)(),
            A = (0, x.AS)(),
            T = (0, r._U)(b.X, "2513446768"),
            S = (0, x.Zj)("2160578039"),
            M = (0, r.Ul)(c.tT),
            z = (0, r.Ul)(y.GB)
          _[0] !== T ? ((i = T?.get("disable_gpt_creation", !1)), (_[0] = T), (_[1] = i)) : (i = _[1])
          let N = !0 === i
          if (N && (!S || null == M)) return null
          _[2] !== M || _[3] !== k || _[4] !== N || _[5] !== P || _[6] !== w || _[7] !== C || _[8] !== z || _[9] !== A
            ? ((t = (e) => {
                if (N && !e) return null
                let i = () => {
                    let i = C.get(c.tT)
                    if (
                      !A.getDynamicConfig("2513446768").get("disable_gpt_creation", !1) ||
                      (A.checkGate("2160578039") && A.checkGate("1663164947") && null != i && i === M && e)
                    ) {
                      if (A.checkGate("2160578039") && null != i) {
                        ;((0, m.qf)(C, v, { accountId: i }), w?.())
                        return
                      }
                      ;(P(a.m2), w?.())
                    }
                  },
                  t = (0, n.jsx)(l.A, {
                    id: "chatgptConversations.gpts.create.button",
                    defaultMessage: "Create",
                    description:
                      "Action on GPT discovery that opens creation options during migration to plugins, or the GPT editor before migration is enabled",
                  })
                return k
                  ? (0, n.jsx)(u.ms.Item, { onClick: i, children: t })
                  : (0, n.jsxs)(d.$, {
                      color: "primary",
                      size: "toolbar",
                      uniformAtMobile: z,
                      onClick: i,
                      children: [
                        (0, n.jsx)(p.ONy, {}),
                        (0, n.jsx)("span", { className: z ? "browser:max-md:sr-only" : void 0, children: t }),
                      ],
                    })
              }),
              (_[2] = M),
              (_[3] = k),
              (_[4] = N),
              (_[5] = P),
              (_[6] = w),
              (_[7] = C),
              (_[8] = z),
              (_[9] = A),
              (_[10] = t))
            : (t = _[10])
          let G = t
          return (
            _[11] !== N || _[12] !== G
              ? ((g = N
                  ? (0, n.jsx)(h.$, {
                      mode: "browse",
                      children: (e) => {
                        let { canCreatePlugin: i } = e
                        return G(i)
                      },
                    })
                  : G(!1)),
                (_[11] = N),
                (_[12] = G),
                (_[13] = g))
              : (g = _[13]),
            g
          )
        },
      },
    )
  },
  wrCb(e, i, t) {
    t.d(
      i,
      {},
      {
        K: function (e) {
          return new URL(e, "https://chatgpt.com").href
        },
      },
    )
  },
  H7Nt(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("zTeN"),
      r = t("oyxz"),
      l = t("SPnB"),
      o = t("bqtn"),
      c = t("bVeK"),
      d = t("Bbed"),
      u = t("X6Vn"),
      p = t("OWtl")
    let g = (0, d._)(async () => (await t.e(306529).then(t.bind(t, "GkN4"))).GptReportDialog)
    t.d(
      i,
      {},
      {
        o: function (e) {
          let i,
            t,
            d,
            m,
            h = (0, s.c)(9),
            { resource: f, onSelect: y } = e,
            x = (0, a.gh)(p.u),
            b = (0, a.Ul)(l.chatGptAuthenticatedAccountId$)
          return null == b ||
            f.gizmo.tags?.includes("first_party") ||
            ("marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient)
            ? null
            : (h[0] !== b || h[1] !== y || h[2] !== f || h[3] !== x
                ? ((i = () => {
                    ;(y?.(), (0, u.qf)(x, g, { accountId: b, resource: f }))
                  }),
                  (h[0] = b),
                  (h[1] = y),
                  (h[2] = f),
                  (h[3] = x),
                  (h[4] = i))
                : (i = h[4]),
              h[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, n.jsx)(o.ms.ItemIcon, { children: (0, n.jsx)(c.YtZ, {}) })),
                  (d = (0, n.jsx)(r.A, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT",
                    description: "Menu action to report a publicly shared third-party GPT",
                  })),
                  (h[5] = t),
                  (h[6] = d))
                : ((t = h[5]), (d = h[6])),
              h[7] !== i
                ? ((m = (0, n.jsxs)(o.ms.Item, { onSelect: i, children: [t, d] })), (h[7] = i), (h[8] = m))
                : (m = h[8]),
              m)
        },
      },
    )
  },
  tV8b(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("pjm8"),
      r = t("Wf1j"),
      l = t("oyxz"),
      o = t("zKCW"),
      c = t("Sm6l"),
      d = t("HOLv"),
      u = t("hZax"),
      p = t("slBk")
    t.d(
      i,
      {},
      {
        v: function (e) {
          let i,
            t,
            g,
            m,
            h,
            f,
            y,
            x,
            b,
            v = (0, s.c)(34),
            { gptName: _, accessState: j, onUsePlugin: w, onKeepUsingGpt: k, onRetry: C } = e,
            P = (0, r.A)(),
            A = (0, u.Fj)("2513446768")
          v[0] !== A || v[1] !== P
            ? ((i = P.formatDate((0, p.l)(A.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (v[0] = A),
              (v[1] = P),
              (v[2] = i))
            : (i = v[2])
          let T = i
          if ("error" === j && null != C) {
            let e
            ;(v[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                  defaultMessage: "Try again",
                  description: "Retry checking access to the migrated plugin",
                })),
                (v[3] = e))
              : (e = v[3]),
              (t = e))
          } else if ("admin" === j) {
            let e
            ;(v[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.viewPlugin",
                  defaultMessage: "View Plugin",
                  description:
                    "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat",
                })),
                (v[4] = e))
              : (e = v[4]),
              (t = e))
          } else if ("allowed" === j || "pending" === j) {
            let e
            ;(v[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                  defaultMessage: "Use plugin",
                  description: "Opens the migrated plugin detail page from the initial GPT chat choice.",
                })),
                (v[5] = e))
              : (e = v[5]),
              (t = e))
          } else {
            let e
            ;(v[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                  defaultMessage: "Explore plugins",
                  description:
                    "Opens the plugin directory from a migrated GPT chat banner when access to its plugin was denied or could not be verified after a failed request.",
                })),
                (v[6] = e))
              : (e = v[6]),
              (t = e))
          }
          if ("error" === j && null == C) {
            let e
            ;(v[7] !== T
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                  defaultMessage:
                    "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                  description:
                    "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                  values: { deadline: T },
                })),
                (v[7] = T),
                (v[8] = e))
              : (e = v[8]),
              (g = e))
          } else if ("error" === j) {
            let e
            ;(v[9] !== T
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                  defaultMessage:
                    "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                  description:
                    "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                  values: { deadline: T },
                })),
                (v[9] = T),
                (v[10] = e))
              : (e = v[10]),
              (g = e))
          } else if ("denied" === j) {
            let e
            ;(v[11] !== T
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                  defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                  description:
                    "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                  values: { deadline: T },
                })),
                (v[11] = T),
                (v[12] = e))
              : (e = v[12]),
              (g = e))
          } else if (_.trim()) {
            let e
            ;(v[13] !== T || v[14] !== _
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                  defaultMessage:
                    "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                  description:
                    "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                  values: { gptName: _, deadline: T },
                })),
                (v[13] = T),
                (v[14] = _),
                (v[15] = e))
              : (e = v[15]),
              (g = e))
          } else {
            let e
            ;(v[16] !== T
              ? ((e = (0, n.jsx)(l.A, {
                  id: "chatgptConversations.gpts.migration.chatChoiceBody",
                  defaultMessage:
                    "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                  description:
                    "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                  values: { deadline: T },
                })),
                (v[16] = T),
                (v[17] = e))
              : (e = v[17]),
              (g = e))
          }
          ;(v[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, n.jsx)(d.I, { asset: a.k, className: "text-secondary" })), (v[18] = m))
            : (m = v[18]),
            v[19] !== _
              ? ((h = _.trim()
                  ? (0, n.jsx)(l.A, {
                      id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                      defaultMessage: "{gptName} is now a plugin",
                      description:
                        "Title of the migrated GPT chat choice shown before the composer. gptName is the user-provided GPT name.",
                      values: { gptName: _ },
                    })
                  : (0, n.jsx)(l.A, {
                      id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                      defaultMessage: "This GPT is now a plugin",
                      description: "Title of the migrated GPT chat choice when the GPT has no display name.",
                    })),
                (v[19] = _),
                (v[20] = h))
              : (h = v[20]))
          let S = "pending" === j,
            M = "error" === j && null != C ? C : w
          return (
            v[21] !== t || v[22] !== S || v[23] !== M
              ? ((f = (0, n.jsx)(c.$, {
                  color: "primary",
                  loading: S,
                  size: "dialog",
                  type: "button",
                  onClick: M,
                  children: t,
                })),
                (v[21] = t),
                (v[22] = S),
                (v[23] = M),
                (v[24] = f))
              : (f = v[24]),
            v[25] !== k
              ? ((y =
                  null == k
                    ? null
                    : (0, n.jsx)(c.$, {
                        color: "outline",
                        size: "dialog",
                        type: "button",
                        onClick: k,
                        children: (0, n.jsx)(l.A, {
                          id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                          defaultMessage: "Keep using GPT",
                          description:
                            "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened.",
                        }),
                      })),
                (v[25] = k),
                (v[26] = y))
              : (y = v[26]),
            v[27] !== f || v[28] !== y
              ? ((x = (0, n.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [f, y] })),
                (v[27] = f),
                (v[28] = y),
                (v[29] = x))
              : (x = v[29]),
            v[30] !== g || v[31] !== h || v[32] !== x
              ? ((b = (0, n.jsx)("div", {
                  className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                  children: (0, n.jsx)(o.l, {
                    variant: "announcement",
                    icon: m,
                    stackOnNarrow: !0,
                    wrapCtas: !0,
                    title: h,
                    content: g,
                    customCtas: x,
                  }),
                })),
                (v[30] = g),
                (v[31] = h),
                (v[32] = x),
                (v[33] = b))
              : (b = v[33]),
            b
          )
        },
      },
    )
  },
  g0xd(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("T0Rc"),
      r = t("zTeN"),
      l = t("HZfM"),
      o = t("eFn4"),
      c = t("EOo5"),
      d = t("OAko"),
      u = t("jaeI"),
      p = t("OWtl"),
      g = t("hZax"),
      m = t("rvFo"),
      h = t("O9G5"),
      f = t("vzxm"),
      y = t("DY7H"),
      x = t("gNqU"),
      b = t("hfkq")
    function v(e) {
      let i,
        t,
        o,
        c,
        d = (0, s.c)(24),
        { showMigrationAction: u, account: g, userId: v, permissionDenied: w, permissions: k, rbacEnabled: C } = e,
        P = (0, r.gh)(p.u),
        A = (0, l.Zp)()
      ;(d[0] !== g.account_user_id ||
      d[1] !== g.account_user_role ||
      d[2] !== g.id ||
      d[3] !== w ||
      d[4] !== k ||
      d[5] !== C ||
      d[6] !== v
        ? ((i = [
            "chatgpt-gizmos",
            g.id,
            "has-migratable-owned-gpt",
            v,
            g.account_user_id,
            g.account_user_role,
            w,
            k,
            C,
          ]),
          (d[0] = g.account_user_id),
          (d[1] = g.account_user_role),
          (d[2] = g.id),
          (d[3] = w),
          (d[4] = k),
          (d[5] = C),
          (d[6] = v),
          (d[7] = i))
        : (i = d[7]),
        d[8] !== g || d[9] !== w || d[10] !== k || d[11] !== C || d[12] !== P || d[13] !== v
          ? ((t = async (e) => {
              let i,
                t,
                { signal: n } = e
              do {
                let { list: e } = await (0, h.S)({ cutId: "mine", limit: 20, cursor: i, signal: n }),
                  s = await Promise.allSettled(
                    e.items.map(async (e) => {
                      let { resource: i } = e,
                        t =
                          i.gizmo.migrated_plugin_id && i.gizmo.current_user_permission?.can_view_config
                            ? await P.queryClient.fetchQuery(
                                (0, b.d)({ gizmoId: i.gizmo.id, pluginId: i.gizmo.migrated_plugin_id }, g.id, v),
                              )
                            : void 0,
                        n = t?.deleted_plugin_id && t.gizmo_config_id ? t : void 0
                      return w
                        ? (!i.gizmo.migrated_plugin_id || null != n) &&
                            (0, y.rP)({
                              resource: i,
                              remigration: n,
                              account: g,
                              accountId: g.id,
                              permissions: k,
                              rbacEnabled: C,
                            })
                        : i.gizmo.current_user_permission?.can_view_config &&
                            (i.gizmo.current_user_permission.can_write || null != n) &&
                            (0, y.l5)({
                              resource: i,
                              remigration: n,
                              account: g,
                              accountId: g.id,
                              userId: v,
                              enabled: !0,
                            })
                    }),
                  )
                if (s.some(j)) return !0
                ;(null == t && (t = s.find(_)), (i = e.cursor ?? void 0))
              } while (null != i)
              if (t) throw t.reason
              return !1
            }),
            (d[8] = g),
            (d[9] = w),
            (d[10] = k),
            (d[11] = C),
            (d[12] = P),
            (d[13] = v),
            (d[14] = t))
          : (t = d[14]),
        d[15] !== i || d[16] !== t
          ? ((o = { queryKey: i, queryFn: t, staleTime: m.D.ONE_MINUTE }), (d[15] = i), (d[16] = t), (d[17] = o))
          : (o = d[17]))
      let { data: T, isError: S } = (0, a.I)(o)
      if (!S && null == T) return null
      if (S || !T) {
        let e
        return (
          d[18] !== A
            ? ((e = (0, n.jsx)(x.Xn, { onExplore: () => void A("/plugins") })), (d[18] = A), (d[19] = e))
            : (e = d[19]),
          e
        )
      }
      return (
        d[20] !== A || d[21] !== w || d[22] !== u
          ? ((c = w
              ? (0, n.jsx)(x.E_, { surface: "directory" })
              : (0, n.jsx)(x.m3, { surface: "directory", onMigrate: u ? () => void A(f.w5) : void 0 })),
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
    t.d(
      i,
      {},
      {
        Z: function (e) {
          let i,
            t,
            a,
            p,
            m = (0, s.c)(19),
            { showMigrationAction: h } = e,
            f = void 0 === h || h,
            y = (0, l.Zp)(),
            b = (0, g.Zj)("2160578039"),
            _ = (0, g.Fj)("2562735250")
          m[0] !== _ ? ((i = _.get("enabled", !1)), (m[0] = _), (m[1] = i)) : (i = m[1])
          let j = i,
            { accountId: w, authMethod: k, isLoading: C, userId: P } = (0, c.As)()
          m[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (m[2] = t)) : (t = m[2])
          let { data: A } = (0, d.YL)(void 0, t),
            T = (0, u.l)(A, (0, g.Zj)("1355972088")),
            S = (0, g.Fj)("2826703856")
          m[3] !== S ? ((a = S.get("enable_gpt_fe_controls", !1)), (m[3] = S), (m[4] = a)) : (a = m[4])
          let M = a,
            z = b && j && null != w && A?.id === w && "workspace" === A.structure && (T || M),
            { data: N, isPending: G, isError: I } = (0, r._U)(o.Jk, w ?? "", { enabled: z })
          if (!b || C) return null
          if (null == k) {
            let e
            return (
              m[5] !== y
                ? ((e = (0, n.jsx)(x.Xn, { onExplore: () => void y("/plugins") })), (m[5] = y), (m[6] = e))
                : (e = m[6]),
              e
            )
          }
          if (null == w || null == P || A?.id !== w) return null
          if ("free" === A.plan_type || "guest" === A.plan_type || !j) {
            let e
            return (
              m[7] !== y
                ? ((e = (0, n.jsx)(x.Xn, { onExplore: () => void y("/plugins") })), (m[7] = y), (m[8] = e))
                : (e = m[8]),
              e
            )
          }
          if (z && G) return null
          let B = z && !I && N?.permissions != null && !(0, u.J)(A, T, N.permissions)
          if (!(0, u.J)(A, T, N?.permissions) && !B) {
            let e
            return (
              m[9] !== y
                ? ((e = (0, n.jsx)(x.Xn, { onExplore: () => void y("/plugins") })), (m[9] = y), (m[10] = e))
                : (e = m[10]),
              e
            )
          }
          let R = `${w}:${P}`,
            E = N?.permissions
          return (
            m[11] !== A || m[12] !== B || m[13] !== T || m[14] !== f || m[15] !== R || m[16] !== E || m[17] !== P
              ? ((p = (0, n.jsx)(
                  v,
                  {
                    account: A,
                    userId: P,
                    showMigrationAction: f,
                    permissionDenied: B,
                    permissions: E,
                    rbacEnabled: T,
                  },
                  R,
                )),
                (m[11] = A),
                (m[12] = B),
                (m[13] = T),
                (m[14] = f),
                (m[15] = R),
                (m[16] = E),
                (m[17] = P),
                (m[18] = p))
              : (p = m[18]),
            p
          )
        },
      },
    )
  },
  ZTXF(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("lRCm"),
      r = t("zTeN"),
      l = t("zd8w"),
      o = t("oyxz"),
      c = t("HZfM"),
      d = t("OiCI"),
      u = t("SPnB"),
      p = t("Sm6l"),
      g = t("HOLv"),
      m = t("OWtl"),
      h = t("tV8b"),
      f = t("bMrQ")
    function y() {
      return null
    }
    function x(e) {
      let i,
        t,
        a,
        l,
        o = (0, s.c)(17),
        { pluginId: d, gptName: u, onClose: p } = e,
        g = (0, r.gh)(m.u),
        h = (0, c.Zp)(),
        { data: y, isPending: x, isFetching: v, isError: _, refetch: j } = (0, r._U)(f.B, d),
        w = "denied"
      return (
        x || v
          ? (w = "pending")
          : _
            ? (w = "error")
            : y?.type === "admin"
              ? (w = "admin")
              : null != y && (w = "allowed"),
        o[0] !== y || o[1] !== h || o[2] !== p || o[3] !== d || o[4] !== g
          ? ((i = () => {
              null != y && (p?.(), (0, f.y)(g, d, y, h))
            }),
            (o[0] = y),
            (o[1] = h),
            (o[2] = p),
            (o[3] = d),
            (o[4] = g),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== j ? ((t = () => void j()), (o[6] = j), (o[7] = t)) : (t = o[7]),
        o[8] !== h || o[9] !== p
          ? ((a = () => {
              ;(p?.(), h("/plugins"))
            }),
            (o[8] = h),
            (o[9] = p),
            (o[10] = a))
          : (a = o[10]),
        o[11] !== w || o[12] !== u || o[13] !== i || o[14] !== t || o[15] !== a
          ? ((l = (0, n.jsx)(b, { accessState: w, gptName: u, onOpen: i, onRetry: t, onExplore: a })),
            (o[11] = w),
            (o[12] = u),
            (o[13] = i),
            (o[14] = t),
            (o[15] = a),
            (o[16] = l))
          : (l = o[16]),
        l
      )
    }
    function b(e) {
      let i,
        t = (0, s.c)(8),
        { accessState: a, gptName: r, presentation: l, onOpen: o, onRetry: c, onExplore: d } = e,
        u = void 0 === l ? "notice" : l
      if (null != r) {
        let e,
          i = "allowed" === a || "admin" === a ? o : d
        return (
          t[0] !== a || t[1] !== r || t[2] !== c || t[3] !== i
            ? ((e = (0, n.jsx)(h.v, { accessState: a, gptName: r, onRetry: c, onUsePlugin: i })),
              (t[0] = a),
              (t[1] = r),
              (t[2] = c),
              (t[3] = i),
              (t[4] = e))
            : (e = t[4]),
          e
        )
      }
      return (
        t[5] !== o || t[6] !== u
          ? ((i = (0, n.jsx)(v, { onOpen: o, presentation: u })), (t[5] = o), (t[6] = u), (t[7] = i))
          : (i = t[7]),
        i
      )
    }
    function v(e) {
      let i,
        t,
        r,
        l = (0, s.c)(7),
        { onOpen: c, presentation: d, loading: u } = e,
        m = void 0 === d ? "notice" : d,
        h = void 0 !== u && u,
        f = "row" === m ? "outlineGhost" : "primary",
        y = "row" === m ? "entityRowAction" : "beaconAction"
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(o.A, {
              id: "chatgptConversations.gpts.migration.openPlugin",
              defaultMessage: "Open plugin",
              description:
                "Button in a migrated GPT notice or migration success dialog that opens the destination plugin's detail page; it does not install or run the plugin",
            })),
            (t = (0, n.jsx)(g.I, { asset: a.e, className: "shrink-0" })),
            (l[0] = i),
            (l[1] = t))
          : ((i = l[0]), (t = l[1])),
        l[2] !== h || l[3] !== c || l[4] !== f || l[5] !== y
          ? ((r = (0, n.jsxs)(p.$, {
              className: "w-full",
              color: f,
              loading: h,
              size: y,
              type: "button",
              onClick: c,
              children: [i, t],
            })),
            (l[2] = h),
            (l[3] = c),
            (l[4] = f),
            (l[5] = y),
            (l[6] = r))
          : (r = l[6]),
        r
      )
    }
    t.d(
      i,
      {},
      {
        av: function (e) {
          let i,
            t,
            a = (0, s.c)(13),
            { pluginId: o, onClose: p, gptName: g, presentation: h } = e,
            b = void 0 === h ? "notice" : h,
            _ = (0, r.gh)(m.u),
            j = (0, c.Zp)(),
            [w, k] = (0, l.useState)(!1)
          if (null != g) {
            let e
            return (
              a[0] !== g || a[1] !== p || a[2] !== o
                ? ((e = (0, n.jsx)(x, { pluginId: o, gptName: g, onClose: p })),
                  (a[0] = g),
                  (a[1] = p),
                  (a[2] = o),
                  (a[3] = e))
                : (e = a[3]),
              e
            )
          }
          return (
            a[4] !== j || a[5] !== p || a[6] !== o || a[7] !== _
              ? ((i = () => {
                  let e = _.get(d.tT),
                    i = _.get(u.chatGptAuthenticatedUserId$)
                  ;(k(!0),
                    _.query
                      .fetch(f.B, o)
                      .catch(y)
                      .then((t) => {
                        if (_.get(d.tT) === e && _.get(u.chatGptAuthenticatedUserId$) === i)
                          return (p?.(), (0, f.y)(_, o, t ?? { type: "plugin" }, j))
                      })
                      .finally(() => {
                        k(!1)
                      }))
                }),
                (a[4] = j),
                (a[5] = p),
                (a[6] = o),
                (a[7] = _),
                (a[8] = i))
              : (i = a[8]),
            a[9] !== w || a[10] !== b || a[11] !== i
              ? ((t = (0, n.jsx)(v, { loading: w, presentation: b, onOpen: i })),
                (a[9] = w),
                (a[10] = b),
                (a[11] = i),
                (a[12] = t))
              : (t = a[12]),
            t
          )
        },
        lK: v,
      },
    )
  },
  zjpG(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("on57"),
      r = t("oyxz")
    t.d(
      i,
      {},
      {
        a: function (e) {
          let i,
            t,
            l,
            o = (0, s.c)(5),
            { className: c } = e
          return (
            o[0] !== c ? ((i = (0, a.A)("last:hidden", c)), (o[0] = c), (o[1] = i)) : (i = o[1]),
            o[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(r.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (o[2] = t))
              : (t = o[2]),
            o[3] !== i
              ? ((l = (0, n.jsx)("span", { "aria-hidden": !0, className: i, children: t })), (o[3] = i), (o[4] = l))
              : (l = o[4]),
            l
          )
        },
      },
    )
  },
  O9rm(e, i, t) {
    t.d(i, { MyGptsPage: () => X })
    var n = t("ABep"),
      s = t("QosV"),
      a = t("uris"),
      r = t("i5ac"),
      l = t.n(r),
      o = t("zTeN"),
      c = t("zd8w"),
      d = t("Wf1j"),
      u = t("oyxz"),
      p = t("bJfu"),
      g = t("EOo5"),
      m = t("aMRi"),
      h = t("O9G5"),
      f = t("OiCX"),
      y = t("g0xd"),
      x = t("OAko"),
      b = t("Sm6l"),
      v = t("PkPj"),
      _ = t("DiyT"),
      j = t("BrP7"),
      w = t("ibLK"),
      k = t("OWtl"),
      C = t("khOd"),
      P = t("ZGaK"),
      A = t("rvFo"),
      T = t("Clvq"),
      S = t("slpy"),
      M = t("HZfM"),
      z = t("eFn4"),
      N = t("lcic"),
      G = t("wrCb"),
      I = t("DY7H"),
      B = t("ZTXF"),
      R = t("g2DC"),
      E = t("hfkq"),
      O = t("vzxm"),
      D = t("T8X0"),
      q = t("Ot7V"),
      U = t("bVeK"),
      Z = t("Bbed"),
      V = t("X6Vn"),
      F = t("jaeI"),
      H = t("gBBC"),
      L = t("hZax")
    function W(e) {
      let i,
        t,
        a,
        r,
        l,
        o,
        c = (0, s.c)(22),
        { resource: d, account: p } = e,
        g = d.gizmo.share_recipient ?? "private",
        m = d.gizmo.vanity_metrics?.num_conversations_str
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.jsx)(U.$Rp, {})), (c[0] = t)) : (t = c[0])
      let h = t
      if ("link" === g || "marketplace" === g) {
        let e
        ;(c[1] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(U.X9D, {})), (c[1] = e)) : (e = c[1]),
          (h = e))
      } else if ("workspace" === g || "workspace_link" === g) {
        let e
        ;(c[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(U.MEe, {})), (c[2] = e)) : (e = c[2]),
          (h = e))
      }
      switch (g) {
        case "link": {
          let e
          ;(c[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.link",
                defaultMessage: "Anyone with the link",
                description: "GPT audience when anyone who has its link can use it",
              })),
              (c[3] = e))
            : (e = c[3]),
            (i = e))
          break
        }
        case "marketplace": {
          let e
          ;(c[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.public",
                defaultMessage: "Everyone",
                description: "GPT audience when published publicly in the GPT Store",
              })),
              (c[4] = e))
            : (e = c[4]),
            (i = e))
          break
        }
        case "workspace": {
          let e
          ;(c[5] !== p.name
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.workspace",
                defaultMessage: "Anyone at {workspaceName}",
                description: "GPT audience when shared with everyone in the named workspace",
                values: { workspaceName: p.name },
              })),
              (c[5] = p.name),
              (c[6] = e))
            : (e = c[6]),
            (i = e))
          break
        }
        case "workspace_link": {
          let e
          ;(c[7] !== p.name
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.workspaceLink",
                defaultMessage: "Anyone at {workspaceName} with the link",
                description: "GPT audience when anyone in the named workspace who has its link can use it",
                values: { workspaceName: p.name },
              })),
              (c[7] = p.name),
              (c[8] = e))
            : (e = c[8]),
            (i = e))
          break
        }
        case "email":
        case "group":
        case "user": {
          let e
          ;(c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.invited",
                defaultMessage: "Invite only",
                description: "GPT audience restricted to invited users and groups",
              })),
              (c[9] = e))
            : (e = c[9]),
            (i = e))
          break
        }
        case "private": {
          let e
          ;(c[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(u.A, {
                id: "chatgptConversations.gpts.mine.audience.private",
                defaultMessage: "Only me",
                description: "GPT audience when only its creator can use it",
              })),
              (c[10] = e))
            : (e = c[10]),
            (i = e))
        }
      }
      return (
        c[11] !== m || c[12] !== g
          ? ((a =
              "private" !== g && null != m
                ? (0, n.jsxs)("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, n.jsx)(U.OHc, {}),
                      (0, n.jsx)("span", {
                        className: "truncate",
                        children: (0, n.jsx)(u.A, {
                          id: "chatgptConversations.gpts.mine.chats",
                          defaultMessage: "{count} chats",
                          description:
                            "GPT usage count; count is an already formatted conversation count, such as 2.4k",
                          values: { count: m },
                        }),
                      }),
                    ],
                  })
                : null),
            (c[11] = m),
            (c[12] = g),
            (c[13] = a))
          : (a = c[13]),
        c[14] !== i
          ? ((r = (0, n.jsx)("span", { className: "truncate", children: i })), (c[14] = i), (c[15] = r))
          : (r = c[15]),
        c[16] !== h || c[17] !== r
          ? ((l = (0, n.jsxs)("div", { className: "flex items-center gap-1.5", children: [h, r] })),
            (c[16] = h),
            (c[17] = r),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== a || c[20] !== l
          ? ((o = (0, n.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1 text-sm text-secondary select-none",
              children: [a, l],
            })),
            (c[19] = a),
            (c[20] = l),
            (c[21] = o))
          : (o = c[21]),
        o
      )
    }
    let $ = (0, Z._)(async () => (await t.e(312708).then(t.bind(t, "uC11"))).GptPluginMigrationDialog),
      Q = (0, Z._)(async () => (await t.e(813563).then(t.bind(t, "ERYAF"))).MyGptDeleteDialog)
    function K(e) {
      let i,
        t,
        a,
        r,
        l,
        c,
        p,
        m,
        h,
        f,
        y,
        x,
        v,
        _,
        j,
        w,
        C,
        P,
        A,
        R,
        Z,
        $,
        K,
        X,
        J,
        ee = (0, s.c)(92),
        { resource: ei, account: et } = e,
        en = (0, o.gh)(k.u),
        es = (0, d.A)(),
        ea = (0, M.Zp)(),
        { accountId: er, userId: el } = (0, g.As)(),
        eo = (0, L.Zj)("2160578039"),
        ec = (0, F.l)(et, (0, L.Zj)("1355972088")),
        ed = (0, L.Fj)("2562735250")
      ee[0] !== ed ? ((i = ed.get("enabled", !1)), (ee[0] = ed), (ee[1] = i)) : (i = ee[1])
      let eu = i,
        ep = (0, L.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
        eg = (0, L.Fj)("2513446768")
      ee[2] !== eg ? ((t = eg.get("disable_gpt_updates", !1)), (ee[2] = eg), (ee[3] = t)) : (t = ee[3])
      let em = t,
        {
          data: eh,
          isPending: ef,
          isError: ey,
        } = (0, o._U)(z.Jk, et.id, { enabled: "workspace" === et.structure && (ec || ep) }),
        ex = (0, I.T8)({ account: et, rbacEnabled: ep, permissions: eh?.permissions, isPending: ef, isError: ey })
      ee[4] !== ei.gizmo.id || ee[5] !== ei.gizmo.migrated_plugin_id
        ? ((a = { gizmoId: ei.gizmo.id, pluginId: ei.gizmo.migrated_plugin_id }),
          (ee[4] = ei.gizmo.id),
          (ee[5] = ei.gizmo.migrated_plugin_id),
          (ee[6] = a))
        : (a = ee[6])
      let eb = (0, o._U)(E.f, a),
        ev =
          eu &&
          (0, I.l2)({
            resource: ei,
            remigration: eb,
            account: et,
            accountId: er,
            userId: el,
            enabled: eo,
            gptPermission: ex,
          }),
        e_ = eo && eu && (0, F.J)(et, ec, eh?.permissions),
        ej = eo ? ei.gizmo.migrated_plugin_id : null,
        ew = (ei.gizmo.live_version ?? 0) === 0 && null == ej
      ee[7] !== es || ee[8] !== ei.gizmo.display.name
        ? ((r =
            ei.gizmo.display.name.trim() ||
            es.formatMessage({
              id: "chatgptConversations.gpts.mine.untitled",
              defaultMessage: "Untitled",
              description: "Fallback name for a GPT with no name in My GPTs",
            })),
          (ee[7] = es),
          (ee[8] = ei.gizmo.display.name),
          (ee[9] = r))
        : (r = ee[9])
      let ek = r
      ee[10] !== et.structure || ee[11] !== ep || ee[12] !== eh?.permissions
        ? ((l = !ep || "personal" === et.structure || eh?.permissions?.includes("chatgpt.workspace.gpt.crud") === !0),
          (ee[10] = et.structure),
          (ee[11] = ep),
          (ee[12] = eh?.permissions),
          (ee[13] = l))
        : (l = ee[13])
      let eC = l,
        eP =
          null != ej &&
          ei.gizmo.author.user_id === ("personal" === et.structure ? el : et.account_user_id) &&
          (ei.gizmo.workspace_id ?? null) === ("workspace" === et.structure ? et.id : null),
        eA = null == ej && !em && eC && ei.gizmo.current_user_permission?.can_write,
        eT = !eA && ei.gizmo.current_user_permission?.can_view_config && (0 !== ei.gizmo.live_version || (em && eC)),
        eS = eC && (eP || ei.gizmo.current_user_permission?.can_delete)
      ee[14] !== es || ee[15] !== eA
        ? ((c = eA
            ? es.formatMessage({
                id: "chatgptConversations.gpts.mine.edit",
                defaultMessage: "Edit GPT",
                description: "Edit this GPT in the app builder for drafts or the web editor for published GPTs",
              })
            : es.formatMessage({
                id: "chatgptConversations.gpts.mine.view",
                defaultMessage: "View GPT",
                description:
                  "Short tooltip and accessible label for the eye icon on My GPTs. Opens the GPT's read-only configuration for users who can view its settings but cannot edit them, including after migration to a plugin.",
              })),
          (ee[14] = es),
          (ee[15] = eA),
          (ee[16] = c))
        : (c = ee[16])
      let eM = c
      ee[17] !== es
        ? ((p = es.formatMessage({
            id: "chatgptConversations.gpts.mine.delete",
            defaultMessage: "Delete GPT",
            description: "Open the confirmation dialog to permanently delete this GPT",
          })),
          (ee[17] = es),
          (ee[18] = p))
        : (p = ee[18])
      let ez = p
      ee[19] !== ew || ee[20] !== ea || ee[21] !== ei.gizmo.id || ee[22] !== eA
        ? ((m = function (e) {
            ew && eA
              ? ea({ pathname: T.m2, search: new URLSearchParams({ gizmo: ei.gizmo.id }).toString() })
              : (0, q.PQ)({
                  event: e,
                  href: `${(0, G.K)("/gpts/editor")}/${encodeURIComponent(ei.gizmo.id)}`,
                  initiator: "open_in_browser_bridge",
                  openTarget: eA ? "external-browser" : void 0,
                })
          }),
          (ee[19] = ew),
          (ee[20] = ea),
          (ee[21] = ei.gizmo.id),
          (ee[22] = eA),
          (ee[23] = m))
        : (m = ee[23])
      let eN = m,
        eG = null
      if (null == ej || eb) {
        if (e_ && (0, I.l5)({ resource: ei, remigration: eb, account: et, accountId: er, userId: el, enabled: eo })) {
          let e
          ;(ee[26] !== ev || ee[27] !== ex || ee[28] !== eb || ee[29] !== ei
            ? ((e = (0, n.jsx)(Y, { resource: ei, remigration: eb, canMigrate: ev, gptPermission: ex })),
              (ee[26] = ev),
              (ee[27] = ex),
              (ee[28] = eb),
              (ee[29] = ei),
              (ee[30] = e))
            : (e = ee[30]),
            (eG = e))
        }
      } else {
        let e
        ;(ee[24] !== ej
          ? ((e = (0, n.jsx)(B.av, { pluginId: ej, presentation: "row" })), (ee[24] = ej), (ee[25] = e))
          : (e = ee[25]),
          (eG = e))
      }
      let eI = ew && !eA && !eT
      ee[31] !== ew || ee[32] !== ea || ee[33] !== eN || ee[34] !== ei.gizmo.id || ee[35] !== en
        ? ((h = (e) => {
            ew ? eN(e) : ((0, D.Rm)(en, "chat"), (0, H.yN)(en, null), ea((0, O.V9)(ei.gizmo.id)))
          }),
          (ee[31] = ew),
          (ee[32] = ea),
          (ee[33] = eN),
          (ee[34] = ei.gizmo.id),
          (ee[35] = en),
          (ee[36] = h))
        : (h = ee[36])
      let eB = ei.gizmo.display.profile_picture_url ?? null
      return (
        ee[37] !== ek || ee[38] !== ei.gizmo.id || ee[39] !== eB
          ? ((f = (0, n.jsx)(N.S, {
              customGpt: { id: ei.gizmo.id, name: ek, iconUrl: eB },
              presentation: "avatar",
              className: "size-8 shrink-0",
            })),
            (ee[37] = ek),
            (ee[38] = ei.gizmo.id),
            (ee[39] = eB),
            (ee[40] = f))
          : (f = ee[40]),
        ee[41] !== ek
          ? ((y = (0, n.jsx)("span", { className: "truncate text-base font-semibold text-default", children: ek })),
            (ee[41] = ek),
            (ee[42] = y))
          : (y = ee[42]),
        ee[43] !== ew || ee[44] !== es
          ? ((x = ew
              ? (0, n.jsx)(S.m, {
                  content: es.formatMessage({
                    id: "chatgptConversations.gpts.mine.draft",
                    defaultMessage: "Draft",
                    description: "Unpublished GPT; migration requires a published version",
                  }),
                  children: (0, n.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-text-tertiary/30" }),
                })
              : null),
            (ee[43] = ew),
            (ee[44] = es),
            (ee[45] = x))
          : (x = ee[45]),
        ee[46] !== y || ee[47] !== x
          ? ((v = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [y, x] })),
            (ee[46] = y),
            (ee[47] = x),
            (ee[48] = v))
          : (v = ee[48]),
        ee[49] !== ei.gizmo.display.description
          ? ((_ = (0, n.jsx)("p", {
              className: "min-h-5 truncate text-sm text-secondary",
              children: ei.gizmo.display.description,
            })),
            (ee[49] = ei.gizmo.display.description),
            (ee[50] = _))
          : (_ = ee[50]),
        ee[51] !== v || ee[52] !== _
          ? ((j = (0, n.jsxs)("div", { className: "min-w-0 flex-1", children: [v, _] })),
            (ee[51] = v),
            (ee[52] = _),
            (ee[53] = j))
          : (j = ee[53]),
        ee[54] !== ek || ee[55] !== eI || ee[56] !== h || ee[57] !== f || ee[58] !== j
          ? ((w = (0, n.jsxs)("button", {
              type: "button",
              "aria-label": ek,
              className: "flex min-w-0 flex-1 cursor-interaction items-center gap-3 text-start select-none",
              disabled: eI,
              onClick: h,
              children: [f, j],
            })),
            (ee[54] = ek),
            (ee[55] = eI),
            (ee[56] = h),
            (ee[57] = f),
            (ee[58] = j),
            (ee[59] = w))
          : (w = ee[59]),
        ee[60] !== et || ee[61] !== ei
          ? ((C = (0, n.jsx)("div", {
              className: "hidden w-50 shrink-0 @2xl:block",
              children: (0, n.jsx)(W, { resource: ei, account: et }),
            })),
            (ee[60] = et),
            (ee[61] = ei),
            (ee[62] = C))
          : (C = ee[62]),
        ee[63] !== w || ee[64] !== C
          ? ((P = (0, n.jsxs)("div", {
              className: "flex min-w-0 flex-1 basis-full items-center gap-6 @lg:basis-auto",
              children: [w, C],
            })),
            (ee[63] = w),
            (ee[64] = C),
            (ee[65] = P))
          : (P = ee[65]),
        ee[66] !== et || ee[67] !== ei
          ? ((A = (0, n.jsx)("div", {
              className: "basis-full @2xl:hidden",
              children: (0, n.jsx)(W, { resource: ei, account: et }),
            })),
            (ee[66] = et),
            (ee[67] = ei),
            (ee[68] = A))
          : (A = ee[68]),
        ee[69] !== eG
          ? ((R = (0, n.jsx)("div", { className: "flex w-34.25 shrink-0 justify-end", children: eG })),
            (ee[69] = eG),
            (ee[70] = R))
          : (R = ee[70]),
        ee[71] !== eM || ee[72] !== eN || ee[73] !== eA || ee[74] !== eT
          ? ((Z =
              eA || eT
                ? (0, n.jsx)(S.m, {
                    content: eM,
                    children: (0, n.jsx)("span", {
                      className: "inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      children: (0, n.jsx)(b.$, {
                        "aria-label": eM,
                        color: "ghostActive",
                        size: "entityHeader",
                        onClick: eN,
                        children: eA ? (0, n.jsx)(U.Npl, {}) : (0, n.jsx)(U.X9D, {}),
                      }),
                    }),
                  })
                : null),
            (ee[71] = eM),
            (ee[72] = eN),
            (ee[73] = eA),
            (ee[74] = eT),
            (ee[75] = Z))
          : (Z = ee[75]),
        ee[76] !== ez || ee[77] !== ej || ee[78] !== ei || ee[79] !== en || ee[80] !== eS
          ? (($ = eS
              ? (0, n.jsx)(S.m, {
                  content:
                    null != ej
                      ? (0, n.jsx)(u.A, {
                          id: "chatgptConversations.gpts.mine.deleteMigratedTooltip",
                          defaultMessage: "This GPT has been migrated to a plugin and can no longer be deleted",
                          description: "Explains why the delete action is disabled for a migrated GPT",
                        })
                      : ez,
                  children: (0, n.jsx)("span", {
                    className:
                      "ms-auto inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    role: null != ej ? "group" : void 0,
                    "aria-label": null != ej ? ez : void 0,
                    "aria-disabled": null != ej || void 0,
                    tabIndex: null != ej ? 0 : void 0,
                    children: (0, n.jsx)(b.$, {
                      "aria-label": ez,
                      disabled: null != ej,
                      color: "ghostActive",
                      size: "entityHeader",
                      onClick: () => (0, V.qf)(en, Q, { resource: ei }),
                      children: (0, n.jsx)(U.cSG, { className: "text-danger" }),
                    }),
                  }),
                })
              : null),
            (ee[76] = ez),
            (ee[77] = ej),
            (ee[78] = ei),
            (ee[79] = en),
            (ee[80] = eS),
            (ee[81] = $))
          : ($ = ee[81]),
        ee[82] !== Z || ee[83] !== $
          ? ((K = (0, n.jsxs)("div", { className: "flex min-w-18 shrink-0 items-center", children: [Z, $] })),
            (ee[82] = Z),
            (ee[83] = $),
            (ee[84] = K))
          : (K = ee[84]),
        ee[85] !== R || ee[86] !== K
          ? ((X = (0, n.jsxs)("div", {
              className: "ms-auto flex min-w-55.25 shrink-0 items-center justify-end gap-3",
              children: [R, K],
            })),
            (ee[85] = R),
            (ee[86] = K),
            (ee[87] = X))
          : (X = ee[87]),
        ee[88] !== P || ee[89] !== A || ee[90] !== X
          ? ((J = (0, n.jsxs)("div", {
              role: "listitem",
              className: "flex flex-wrap items-center gap-x-6 gap-y-3 py-4 @lg:flex-nowrap",
              children: [P, A, X],
            })),
            (ee[88] = P),
            (ee[89] = A),
            (ee[90] = X),
            (ee[91] = J))
          : (J = ee[91]),
        J
      )
    }
    function Y(e) {
      let i,
        t,
        a,
        r,
        l,
        c = (0, s.c)(14),
        { resource: d, remigration: p, canMigrate: g, gptPermission: m } = e,
        h = (0, o.gh)(k.u)
      if ("allowed" !== m) {
        let e
        ;(c[0] !== m ? ((e = (0, n.jsx)(R.M, { permission: m })), (c[0] = m), (c[1] = e)) : (e = c[1]), (i = e))
      }
      let f = !g
      return (
        c[2] !== g || c[3] !== p || c[4] !== d || c[5] !== h
          ? ((t = () => {
              g && (0, V.qf)(h, $, { resource: d, remigration: p })
            }),
            (c[2] = g),
            (c[3] = p),
            (c[4] = d),
            (c[5] = h),
            (c[6] = t))
          : (t = c[6]),
        c[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(u.A, {
              id: "chatgptConversations.gpts.mine.migrate",
              defaultMessage: "Migrate to plugin",
              description: "Open migration confirmation for this published GPT",
            })),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== f || c[9] !== t
          ? ((r = (0, n.jsx)(b.$, {
              className: "w-full",
              "aria-disabled": f,
              color: "primary",
              size: "entityRowAction",
              onClick: t,
              children: a,
            })),
            (c[8] = f),
            (c[9] = t),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== i || c[12] !== r
          ? ((l = (0, n.jsx)(S.m, { content: i, children: r })), (c[11] = i), (c[12] = r), (c[13] = l))
          : (l = c[13]),
        l
      )
    }
    function X() {
      let e,
        i,
        t = (0, s.c)(6),
        a = (0, o.gh)(k.u),
        { accountId: r } = (0, g.As)()
      t[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (t[0] = e)) : (e = t[0])
      let { data: l, isError: c } = (0, x.YL)(void 0, e)
      if (c) {
        let e
        return (
          t[1] !== a.queryClient
            ? ((e = (0, n.jsx)(m.sU, {
                onRetry: () => void a.queryClient.refetchQueries({ queryKey: ["accounts", "check"] }),
              })),
              (t[1] = a.queryClient),
              (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      return (
        t[3] !== l || t[4] !== r
          ? ((i = null == l || l.id !== r ? (0, n.jsx)(m._Q, {}) : (0, n.jsx)(J, { account: l }, l.id)),
            (t[3] = l),
            (t[4] = r),
            (t[5] = i))
          : (i = t[5]),
        i
      )
    }
    function J(e) {
      let i,
        t,
        r,
        g,
        x,
        k,
        T,
        S,
        M,
        z,
        N,
        G,
        I,
        B = (0, s.c)(59),
        { account: R } = e,
        E = (0, o.Ul)(C.GB),
        O = (0, w.U)("(width < 48rem)"),
        D = (0, d.A)(),
        [q, U] = (0, c.useState)("mine")
      ;(B[0] !== R.id || B[1] !== q
        ? ((i = ["chatgpt-gizmos", R.id, "my-gpts", q]), (B[0] = R.id), (B[1] = q), (B[2] = i))
        : (i = B[2]),
        B[3] !== q
          ? ((t = (e) => {
              let { pageParam: i, signal: t } = e
              return (0, h.S)({ cutId: q, cursor: i, limit: 20, signal: t })
            }),
            (B[3] = q),
            (B[4] = t))
          : (t = B[4]),
        B[5] !== i || B[6] !== t
          ? ((r = {
              queryKey: i,
              initialPageParam: void 0,
              staleTime: A.D.ONE_MINUTE,
              getNextPageParam: en,
              queryFn: t,
            }),
            (B[5] = i),
            (B[6] = t),
            (B[7] = r))
          : (r = B[7]))
      let {
        data: Z,
        isPending: V,
        refetch: F,
        fetchNextPage: H,
        hasNextPage: L,
        isFetchingNextPage: W,
        isFetchNextPageError: $,
      } = (0, a.q)(r)
      if (
        B[8] !== R ||
        B[9] !== q ||
        B[10] !== Z ||
        B[11] !== H ||
        B[12] !== L ||
        B[13] !== $ ||
        B[14] !== W ||
        B[15] !== V ||
        B[16] !== F
      ) {
        let e = l()(Z?.pages.flatMap(ei) ?? [], ee)
        if (V) {
          let e
          ;(B[18] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(m._Q, {})), (B[18] = e)) : (e = B[18]),
            (g = e))
        } else if (null == Z) {
          let e
          ;(B[19] !== F ? ((e = (0, n.jsx)(m.sU, { onRetry: () => void F() })), (B[19] = F), (B[20] = e)) : (e = B[20]),
            (g = e))
        } else {
          let i, t, s
          B[21] !== R
            ? ((i = (e) => (0, n.jsx)(K, { resource: e, account: R }, e.gizmo.id)), (B[21] = R), (B[22] = i))
            : (i = B[22])
          let a = (0, n.jsx)("div", { role: "list", className: "@container flex flex-col", children: e.map(i) }),
            r =
              0 !== e.length || L
                ? null
                : (0, n.jsx)("p", {
                    className: "py-6 text-sm text-secondary select-none",
                    children:
                      "shared_with_me" === q
                        ? (0, n.jsx)(u.A, {
                            id: "chatgptConversations.gpts.mine.sharedEmpty",
                            defaultMessage: "No GPTs have been shared with you yet",
                            description:
                              "Empty state in the Shared with me tab when no GPTs have been shared with the current user",
                          })
                        : (0, n.jsx)(u.A, {
                            id: "chatgptConversations.gpts.mine.empty",
                            defaultMessage: "No GPTs here yet",
                            description: "Empty state in the Created by me tab when the current user has no GPTs",
                          }),
                  })
          ;(B[23] !== H || B[24] !== L || B[25] !== $ || B[26] !== W
            ? ((t = L
                ? (0, n.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, n.jsx)(b.$, {
                      color: "secondary",
                      loading: W,
                      onClick: () => void H(),
                      children: $
                        ? (0, n.jsx)(u.A, {
                            id: "chatgptConversations.gpts.mine.retryMore",
                            defaultMessage: "Try again",
                            description: "Retry loading the next page of My GPTs",
                          })
                        : (0, n.jsx)(u.A, {
                            id: "chatgptConversations.gpts.mine.loadMore",
                            defaultMessage: "Load more",
                            description: "Load the next page of created or shared GPTs",
                          }),
                    }),
                  })
                : null),
              (B[23] = H),
              (B[24] = L),
              (B[25] = $),
              (B[26] = W),
              (B[27] = t))
            : (t = B[27]),
            B[28] !== a || B[29] !== r || B[30] !== t
              ? ((s = (0, n.jsxs)(n.Fragment, { children: [a, r, t] })),
                (B[28] = a),
                (B[29] = r),
                (B[30] = t),
                (B[31] = s))
              : (s = B[31]),
            (g = s))
        }
        ;((B[8] = R),
          (B[9] = q),
          (B[10] = Z),
          (B[11] = H),
          (B[12] = L),
          (B[13] = $),
          (B[14] = W),
          (B[15] = V),
          (B[16] = F),
          (B[17] = g))
      } else g = B[17]
      B[32] !== R.structure || B[33] !== q || B[34] !== D
        ? ((x =
            "workspace" === R.structure
              ? (0, n.jsx)(j.t, {
                  variant: "underline",
                  ariaLabel: D.formatMessage({
                    id: "chatgptConversations.gpts.mine.tabs",
                    defaultMessage: "My GPTs",
                    description: "Navigation between GPTs created by the user and GPTs shared with them",
                  }),
                  selectedKey: q,
                  onSelect: U,
                  tabs: [
                    {
                      key: "mine",
                      name: (0, n.jsx)(u.A, {
                        id: "chatgptConversations.gpts.mine.created",
                        defaultMessage: "Created by me",
                        description: "Tab for GPTs owned by the current user",
                      }),
                    },
                    {
                      key: "shared_with_me",
                      name: (0, n.jsx)(u.A, {
                        id: "chatgptConversations.gpts.mine.shared",
                        defaultMessage: "Shared with me",
                        description: "Tab for GPTs shared with the current workspace member",
                      }),
                    },
                  ],
                })
              : void 0),
          (B[32] = R.structure),
          (B[33] = q),
          (B[34] = D),
          (B[35] = x))
        : (x = B[35])
      let Q = x
      ;(B[36] !== E
        ? ((k = E
            ? null
            : (0, n.jsx)(p.G.HeaderToolbar, {
                children: (0, n.jsx)(p.G.HeaderToolbar.Actions, { children: (0, n.jsx)(f.i, {}) }),
              })),
          (B[36] = E),
          (B[37] = k))
        : (k = B[37]),
        B[38] !== k
          ? ((T = (0, n.jsx)(p.G.Header, { className: "flex shrink-0 px-panel", children: k })),
            (B[38] = k),
            (B[39] = T))
          : (T = B[39]))
      let Y = E ? "sticky" : "page",
        X = E ? "extraWide" : "default"
      ;(B[40] !== E
        ? ((S = E ? (0, n.jsx)(_.T, { search: null, actions: (0, n.jsx)(f.i, {}) }) : void 0), (B[40] = E), (B[41] = S))
        : (S = B[41]),
        B[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsx)(u.A, {
              id: "chatgptConversations.gpts.mine.title",
              defaultMessage: "My GPTs",
              description: "Page containing GPTs created by or shared with the current user",
            })),
            (z = (0, n.jsx)(y.Z, { showMigrationAction: !1 })),
            (B[42] = M),
            (B[43] = z))
          : ((M = B[42]), (z = B[43])))
      let J = E && O,
        et = E ? Q : void 0
      return (
        B[44] !== Q || B[45] !== E
          ? ((N = E || null == Q ? void 0 : (0, n.jsx)(v.uC, { inset: !1, children: Q })),
            (B[44] = Q),
            (B[45] = E),
            (B[46] = N))
          : (N = B[46]),
        B[47] !== g ||
        B[48] !== E ||
        B[49] !== J ||
        B[50] !== et ||
        B[51] !== N ||
        B[52] !== Y ||
        B[53] !== X ||
        B[54] !== S
          ? ((G = (0, n.jsx)(P.d, {
              className: "flex h-full w-full flex-1 flex-col gap-8",
              children: (0, n.jsx)(v.Ql, {
                animateContentLayout: !1,
                headerVariant: "compact",
                headerPlacement: Y,
                collapseHeaderOnScroll: E,
                contentWidth: X,
                headerAction: S,
                title: M,
                banner: z,
                bannerAfterHeader: J,
                stickyControls: et,
                controls: N,
                children: g,
              }),
            })),
            (B[47] = g),
            (B[48] = E),
            (B[49] = J),
            (B[50] = et),
            (B[51] = N),
            (B[52] = Y),
            (B[53] = X),
            (B[54] = S),
            (B[55] = G))
          : (G = B[55]),
        B[56] !== G || B[57] !== T
          ? ((I = (0, n.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface text-default",
              children: [T, G],
            })),
            (B[56] = G),
            (B[57] = T),
            (B[58] = I))
          : (I = B[58]),
        I
      )
    }
    function ee(e) {
      return e.gizmo.id
    }
    function ei(e) {
      return e.list.items.map(et)
    }
    function et(e) {
      return e.resource
    }
    function en(e) {
      return e.list.cursor ?? void 0
    }
  },
  ZTcy(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("zTeN"),
      r = t("eFn4"),
      l = t("EOo5"),
      o = t("OAko"),
      c = t("OWtl"),
      d = t("emkC"),
      u = t("hZax"),
      p = t("jaeI"),
      g = t("fo11")
    function m() {}
    t.d(
      i,
      {},
      {
        $: function (e) {
          let i,
            t,
            h,
            f,
            y = (0, s.c)(16),
            { children: x, currentBrowseTab: b, enabled: v, logSkillCreationEvent: _, mode: j, onNavigate: w } = e,
            k = (0, a.gh)(c.u),
            { accountId: C } = (0, l.As)()
          y[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (y[0] = i)) : (i = y[0])
          let { data: P } = (0, o.YL)(void 0, i),
            A = null != C && P?.id === C,
            T = P?.structure === "workspace",
            S = (0, p.l)(P, (0, u.Zj)("1355972088")),
            { data: M } = (0, a._U)(r.Jk, C ?? "", { enabled: A && T && S }),
            z = (0, p.J)(P, S, M?.permissions),
            N = (void 0 === v || v) && A && (!T || z),
            G = A && T && null != M && !z
          return (
            y[1] !== w || y[2] !== k
              ? ((t = () => ({
                  activeProject: null,
                  codexAppMode: "allowed" === k.get(r.lN).status ? "work" : "chat",
                  startInSidebar: !0,
                  onNavigate: w,
                })),
                (y[1] = w),
                (y[2] = k),
                (y[3] = t))
              : (t = y[3]),
            y[4] !== x || y[5] !== b || y[6] !== A || y[7] !== T || y[8] !== G || y[9] !== j
              ? ((h = (e) => {
                  let i = {
                    ...e,
                    isPluginCreatorDisabledByAdmin: A && T && e.isPluginCreatorDisabledByAdmin,
                    isWorkspacePluginUseDenied: G,
                    canCreateSkill: !1,
                    onCreateSkill: m,
                    recordSkillAction: void 0,
                  }
                  return null == x ? (0, n.jsx)(d.e, { mode: j, currentBrowseTab: b, ...i }) : x(i)
                }),
                (y[4] = x),
                (y[5] = b),
                (y[6] = A),
                (y[7] = T),
                (y[8] = G),
                (y[9] = j),
                (y[10] = h))
              : (h = y[10]),
            y[11] !== N || y[12] !== _ || y[13] !== t || y[14] !== h
              ? ((f = (0, n.jsx)(g.y, {
                  canCreatePlugin: N,
                  logSkillCreationEvent: _,
                  getConversation: t,
                  children: h,
                })),
                (y[11] = N),
                (y[12] = _),
                (y[13] = t),
                (y[14] = h),
                (y[15] = f))
              : (f = y[15]),
            f
          )
        },
      },
    )
  },
  fo11(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("iRMi"),
      r = t("T0Rc"),
      l = t("zTeN"),
      o = t("zd8w"),
      c = t("Wf1j"),
      d = t("HZfM"),
      u = t("OiCI"),
      p = t("EOo5"),
      g = t("YWcr"),
      m = t("MX6A"),
      h = t("SGsN"),
      f = t("Q8aV"),
      y = t("loz7"),
      x = t("Y1iR"),
      b = t("ygu7"),
      v = t("yGJW"),
      _ = t("OWtl"),
      j = t("hZax")
    t.d(
      i,
      {},
      {
        y: function (e) {
          let i,
            t,
            w,
            k,
            C,
            P,
            A = (0, s.c)(33),
            { canCreatePlugin: T, children: S, getConversation: M, hostId: z, logSkillCreationEvent: N } = e,
            G = void 0 === N || N,
            I = (0, l.gh)(_.u),
            B = (0, c.A)(),
            R = (0, d.zy)(),
            { accountId: E, userId: O } = (0, p.As)(),
            D = (0, l.Ul)(u.tT),
            q = (0, j.Zj)("1663164947"),
            U = T && q && null != E && E === D,
            Z = U ? E : null
          A[0] !== Z ? ((i = (0, b.cO)("connector_openai_plugin_creator", Z)), (A[0] = Z), (A[1] = i)) : (i = A[1])
          let { data: V } = (0, r.I)(i),
            F =
              U &&
              V?.plugin_id != null &&
              V.plugin?.installation_policy !== "NOT_AVAILABLE" &&
              V.plugin?.disabled_reason == null &&
              V.plugin?.status !== "DISABLED_BY_ADMIN",
            H =
              U &&
              (V?.plugin?.disabled_reason === "disabled_by_admin" ||
                (V?.plugin?.disabled_reason == null && V?.plugin?.status === "DISABLED_BY_ADMIN")),
            L = (0, l.Ul)(y._X),
            [W, $] = (0, o.useState)(null),
            Q = (0, f.p8)()
          A[2] !== W ? ((t = () => () => W?.abort()), (A[2] = W), (A[3] = t)) : (t = A[3])
          let K = V?.plugin_id
          ;(A[4] !== E ||
          A[5] !== F ||
          A[6] !== z ||
          A[7] !== R.key ||
          A[8] !== W ||
          A[9] !== D ||
          A[10] !== K ||
          A[11] !== O
            ? ((w = [E, O, D, R.key, z, F, K, W]),
              (A[4] = E),
              (A[5] = F),
              (A[6] = z),
              (A[7] = R.key),
              (A[8] = W),
              (A[9] = D),
              (A[10] = K),
              (A[11] = O),
              (A[12] = w))
            : (w = A[12]),
            (0, o.useEffect)(t, w),
            A[13] !== E ||
            A[14] !== L ||
            A[15] !== F ||
            A[16] !== V ||
            A[17] !== M ||
            A[18] !== z ||
            A[19] !== B ||
            A[20] !== G ||
            A[21] !== W ||
            A[22] !== I ||
            A[23] !== Q
              ? ((k = () => {
                  if (I.get(u.tT) !== E || !F || V?.plugin_id == null || !L || null != W) return
                  let e = M()
                  if (null == e) return
                  let i = {
                      ...e,
                      prefillPrompt: B.formatMessage(
                        {
                          id: "plugins.create.withCreatorPrompt",
                          defaultMessage: "{pluginCreator} help me create a plugin",
                          description:
                            "Editable, unsent prompt in a new task, Work, or Chat conversation after the user selects Create plugin in the Plugins Add menu. The pluginCreator placeholder is the Plugin Creator mention chip; preserve it. The user can describe their plugin before sending.",
                        },
                        { pluginCreator: (0, m.xR)("@Plugin Creator", (0, g.vt)(V.plugin_id)) },
                      ),
                    },
                    t = new AbortController()
                  ;($(t),
                    G && (0, v.yy)(I, a.CodexSkillNewClicked, {}),
                    (0, x.P)(I, t.signal, {
                      hostId: z,
                      postInstallComposerPrefill: i.prefillPrompt,
                      postInstallNewConversation: {
                        activeProject: i.activeProject,
                        codexAppMode: i.codexAppMode,
                        onNavigate: i.onNavigate,
                        startInSidebar: i.startInSidebar,
                        signal: t.signal,
                      },
                    })
                      .then((e) => {
                        e?.setupStarted || ($(null), null == e || t.signal.aborted || I.get(u.tT) !== E || Q(i))
                      })
                      .catch(() => {
                        ;($(null),
                          t.signal.aborted ||
                            I.get(h.Id).danger(
                              B.formatMessage({
                                id: "plugins.create.creatorSetupFailed",
                                defaultMessage: "Couldn’t set up Plugin Creator. Try again",
                                description:
                                  "Error shown after Create plugin in the Plugins Add menu cannot prepare Plugin Creator or its app connection. No task has been opened; the user can retry the menu action. No placeholders.",
                              }),
                              { errorAnalytics: { toastId: "plugins.create.creatorSetupFailed" } },
                            ))
                      }))
                }),
                (A[13] = E),
                (A[14] = L),
                (A[15] = F),
                (A[16] = V),
                (A[17] = M),
                (A[18] = z),
                (A[19] = B),
                (A[20] = G),
                (A[21] = W),
                (A[22] = I),
                (A[23] = Q),
                (A[24] = k))
              : (k = A[24]))
          let Y = k,
            X = F && L && null == W,
            J = null != W
          return (
            A[25] !== S || A[26] !== Y || A[27] !== H || A[28] !== X || A[29] !== J
              ? ((C = S({
                  canCreatePlugin: X,
                  isCreatingPlugin: J,
                  isPluginCreatorDisabledByAdmin: H,
                  onCreatePlugin: Y,
                })),
                (A[25] = S),
                (A[26] = Y),
                (A[27] = H),
                (A[28] = X),
                (A[29] = J),
                (A[30] = C))
              : (C = A[30]),
            A[31] !== C ? ((P = (0, n.jsx)(n.Fragment, { children: C })), (A[31] = C), (A[32] = P)) : (P = A[32]),
            P
          )
        },
      },
    )
  },
  Y1iR(e, i, t) {
    var n = t("DBCl"),
      s = t("OiCI"),
      a = t("ygu7"),
      r = t("EEop")
    t("kfGJ")
    var l = t("TZ9K"),
      o = t("Yewb")
    let c = "connector_openai_plugin_creator"
    t.d(
      i,
      {},
      {
        P: async function (e, i, t) {
          let d = e.get(s.tT),
            u = () => !i.aborted && e.get(s.tT) === d
          if (null == d || !u()) return null
          let p = t?.hostId ?? n.iwv,
            g = { hostedAccountId: d, origin: "plugin_creator", requestedConnectorId: c, requiresAppSetup: !0 },
            m = (0, l._)(g),
            h = await e.queryClient.fetchQuery((0, a.cO)(c, d)).catch(() => null)
          if (!u()) return null
          if (h?.plugin_id == null) throw Error("Plugin Creator could not be loaded")
          let [f, y] = await Promise.all([
            e.query.fetch(r.Pc, {
              hostId: p,
              marketplacePath: null,
              pluginName: h.plugin_id,
              remoteMarketplaceName: n.vT_,
            }),
            m,
          ])
          if (!u()) return null
          let x = f.summary.remotePluginId ?? h.plugin_id
          return f.summary.installed &&
            f.summary.enabled &&
            null == f.summary.disabledReason &&
            "DISABLED_BY_ADMIN" !== f.summary.availability &&
            "ready" === y.kind
            ? { pluginId: x, setupStarted: !1 }
            : new Promise((s, a) => {
                let r = (e) => {
                    ;(i.removeEventListener("abort", l), s(e && u() ? { pluginId: x, setupStarted: !0 } : null))
                  },
                  l = () => r(!1)
                ;(i.addEventListener("abort", l, { once: !0 }),
                  (0, o.installPlugin)(
                    e,
                    {
                      connectionAppId: c,
                      displayName: f.summary.interface?.displayName ?? f.summary.name,
                      remotePluginId: x,
                      remoteMarketplaceName: n.vT_,
                    },
                    {
                      ...t,
                      ...g,
                      hostId: p,
                      onSuccess: () => r(!0),
                      onCancel: l,
                      onError: () => {
                        u() ? (i.removeEventListener("abort", l), a(Error("Plugin Creator setup failed"))) : l()
                      },
                    },
                  ) || l())
              })
        },
      },
    )
  },
  emkC(e, i, t) {
    var n = t("ABep"),
      s = t("QosV"),
      a = t("slpy"),
      r = t("a4Mw"),
      l = t("zTeN"),
      o = t("Wf1j"),
      c = t("oyxz"),
      d = t("HZfM"),
      u = t("bJfu"),
      p = t("Sm6l"),
      g = t("bqtn"),
      m = t("bVeK"),
      h = t("RNul"),
      f = t("UxN3"),
      y = t("faMt"),
      x = t("COSu"),
      b = t("UnEf"),
      v = t("dVGK"),
      _ = t("tlx5"),
      j = t("khOd")
    function w(e) {
      let i,
        t,
        d,
        u,
        h,
        _,
        w,
        P,
        A,
        T,
        S,
        M,
        z,
        N,
        G = (0, s.c)(73),
        {
          canCreatePlugin: I,
          canCreateSkill: B,
          isPluginCreatorDisabledByAdmin: R,
          isWorkspacePluginUseDenied: E,
          currentBrowseTab: O,
          hostedCreateAction: D,
          isCreatingPlugin: q,
          mode: U,
          onAddMarketplace: Z,
          onAddMcpServer: V,
          onCreatePlugin: F,
          onCreateSkill: H,
          recordSkillAction: L,
        } = e,
        W = void 0 !== q && q,
        $ = (0, o.A)(),
        Q = (0, l.Ul)(j.GB),
        K = "browse" === U && Q,
        Y = !I
      ;(G[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, n.jsx)(c.A, {
            id: "skills.appsPage.createPlugin",
            defaultMessage: "Create plugin",
            description: "Label for creating a new plugin on the Skills & Apps page",
          })),
          (G[0] = i))
        : (i = G[0]),
        G[1] !== I || G[2] !== R
          ? ((t =
              !I && R
                ? (0, n.jsx)(c.A, {
                    id: "plugins.create.creatorDisabledByAdmin",
                    defaultMessage:
                      "You do not have permission to create a plugin via conversation. Contact your admin to enable Plugin Creator",
                    description:
                      "Tooltip for the disabled Create plugin menu item when the workspace administrator has disabled Plugin Creator. Explains why conversation-based plugin creation is unavailable and who can enable it. No placeholders.",
                  })
                : void 0),
            (G[1] = I),
            (G[2] = R),
            (G[3] = t))
          : (t = G[3]),
        G[4] !== F || G[5] !== Y || G[6] !== t
          ? ((d = { disabled: Y, Icon: y.A, id: "plugin", label: i, onSelect: F, tooltipText: t }),
            (G[4] = F),
            (G[5] = Y),
            (G[6] = t),
            (G[7] = d))
          : (d = G[7]))
      let X = d,
        J = !B
      ;(G[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, n.jsx)(c.A, {
            id: "skills.appsPage.createSkill",
            defaultMessage: "Create skill",
            description: "Label for creating a new skill on the Skills & Apps page",
          })),
          (G[8] = u))
        : (u = G[8]),
        G[9] !== H || G[10] !== J
          ? ((h = { disabled: J, Icon: v.A, id: "skill", label: u, onSelect: H }), (G[9] = H), (G[10] = J), (G[11] = h))
          : (h = G[11]))
      let ee = h
      if (G[12] !== O || G[13] !== D || G[14] !== U || G[15] !== Z || G[16] !== V || G[17] !== X || G[18] !== ee) {
        if (
          ((_ = []),
          "browse" === U && "skills" === O ? _.push(ee) : _.push(X),
          null != Z && ("manage" === U || "plugins" === O))
        ) {
          let e, i
          ;(G[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "skills.appsPage.addMarketplace",
                defaultMessage: "Add a marketplace",
                description: "Label for adding a plugin marketplace on the Skills & Apps page",
              })),
              (G[20] = e))
            : (e = G[20]),
            G[21] !== Z
              ? ((i = { disabled: !1, Icon: b.A, id: "marketplace", label: e, onSelect: Z }), (G[21] = Z), (G[22] = i))
              : (i = G[22]),
            _.push(i))
        }
        if ("browse" === U && "plugins" === O) {
          if (D?.canUploadArchive) {
            let e, i
            ;(G[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(c.A, {
                  id: "plugins.create.uploadArchiveAction",
                  defaultMessage: "Upload plugin archive",
                  description: "Open the hosted plugin archive upload dialog",
                })),
                (G[23] = e))
              : (e = G[23]),
              G[24] !== D
                ? ((i = { disabled: !1, Icon: m.mgx, id: "archive", label: e, onSelect: () => D.onCreate("archive") }),
                  (G[24] = D),
                  (G[25] = i))
                : (i = G[25]),
              _.push(i))
          }
          if (D?.canCreateMcpApp) {
            let e, i
            ;(G[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(c.A, {
                  id: "plugins.create.mcpApp",
                  defaultMessage: "Add custom MCP server",
                  description: "Open the hosted MCP app creation form",
                })),
                (G[26] = e))
              : (e = G[26]),
              G[27] !== D
                ? ((i = { disabled: !1, Icon: x.A, id: "hosted-mcp", label: e, onSelect: () => D.onCreate("mcp") }),
                  (G[27] = D),
                  (G[28] = i))
                : (i = G[28]),
              _.push(i))
          }
        }
        if ("manage" === U && null != V) {
          let e, i
          ;(G[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "settings.mcp.addServerFromPluginsMenu",
                defaultMessage: "Add MCP server",
                description: "Menu item for adding an MCP server from the Plugins settings Add dropdown",
              })),
              (G[29] = e))
            : (e = G[29]),
            G[30] !== V
              ? ((i = { disabled: !1, Icon: x.A, id: "mcp", label: e, onSelect: V }), (G[30] = V), (G[31] = i))
              : (i = G[31]),
            _.push(i))
        }
        ;((G[12] = O), (G[13] = D), (G[14] = U), (G[15] = Z), (G[16] = V), (G[17] = X), (G[18] = ee), (G[19] = _))
      } else _ = G[19]
      let ei = "browse" === U && "skills" === O,
        et = _.every(C)
      if (0 === _.length && null == L) {
        let e
        return (
          G[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(n.Fragment, {})), (G[32] = e))
            : (e = G[32]),
          e
        )
      }
      if (!W && ei && et && null == L) {
        let e
        return (
          G[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(n.Fragment, {})), (G[33] = e))
            : (e = G[33]),
          e
        )
      }
      let en = !W && !ei && et && L?.disabled !== !1,
        es = 1 === _.length && null == L ? _[0] : void 0
      G[34] !== $
        ? ((w = $.formatMessage({
            id: "skills.appsPage.add",
            defaultMessage: "Add",
            description: "Label for adding plugins, marketplaces, or skills from the Skills & Apps page",
          })),
          (G[34] = $),
          (G[35] = w))
        : (w = G[35])
      let ea = w,
        er = "manage" === U ? "default" : "full",
        el = en || void 0,
        eo = es?.onSelect,
        ec = K ? "browser:max-md:hidden" : void 0
      ;(G[36] !== ea || G[37] !== ec
        ? ((P = (0, n.jsx)("span", { className: ec, children: ea })), (G[36] = ea), (G[37] = ec), (G[38] = P))
        : (P = G[38]),
        G[39] !== K || G[40] !== W || G[41] !== es
          ? ((A =
              W || null != es
                ? null
                : (0, n.jsx)(f.b5, {
                    className: K ? "browser:max-md:hidden" : void 0,
                    "aria-hidden": !1,
                    icon: { 16: m.Aq_, 20: m.Hsq },
                  })),
            (G[39] = K),
            (G[40] = W),
            (G[41] = es),
            (G[42] = A))
          : (A = G[42]),
        G[43] !== K || G[44] !== W
          ? ((T = K && !W ? (0, n.jsx)(m.ONy, { className: "hidden browser:max-md:block" }) : null),
            (G[43] = K),
            (G[44] = W),
            (G[45] = T))
          : (T = G[45]),
        G[46] !== ea ||
        G[47] !== K ||
        G[48] !== en ||
        G[49] !== W ||
        G[50] !== er ||
        G[51] !== el ||
        G[52] !== eo ||
        G[53] !== P ||
        G[54] !== A ||
        G[55] !== T
          ? ((S = (0, n.jsxs)(p.$, {
              radius: er,
              "aria-label": ea,
              "aria-busy": W,
              "aria-hidden": el,
              color: "primary",
              disabled: en,
              loading: W,
              size: "toolbar",
              uniformAtMobile: K,
              onClick: eo,
              children: [P, A, T],
            })),
            (G[46] = ea),
            (G[47] = K),
            (G[48] = en),
            (G[49] = W),
            (G[50] = er),
            (G[51] = el),
            (G[52] = eo),
            (G[53] = P),
            (G[54] = A),
            (G[55] = T),
            (G[56] = S))
          : (S = G[56]))
      let ed = S
      if (en) {
        let e, i, t
        if (E) {
          let i
          ;(G[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, n.jsx)(c.A, {
                id: "plugins.create.addDisabledByWorkspaceUsePermission",
                defaultMessage: "You don’t have permission to use plugins. Contact your workspace admin.",
                description:
                  "Tooltip for the disabled Add button when the user lacks workspace permission to use plugins and no other creation action is available. Explains the permission restriction and directs the user to their workspace admin. No placeholders.",
              })),
              (G[57] = i))
            : (i = G[57]),
            (e = i))
        } else if (R) {
          let i
          ;(G[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, n.jsx)(c.A, {
                id: "plugins.create.addDisabledByAdmin",
                defaultMessage:
                  "You do not have permission to add plugins. Contact your admin to enable Plugin Creator or plugin uploads",
                description:
                  "Tooltip for the disabled Add button when all plugin creation actions are unavailable and the workspace administrator has disabled Plugin Creator. Asks the user to contact their admin to enable conversational creation or archive uploads. No placeholders.",
              })),
              (G[58] = i))
            : (i = G[58]),
            (e = i))
        }
        return (
          G[59] !== ed || G[60] !== ea
            ? ((i = (0, n.jsx)("span", {
                className: "inline-flex",
                "aria-disabled": "true",
                "aria-label": ea,
                role: "button",
                tabIndex: 0,
                children: ed,
              })),
              (G[59] = ed),
              (G[60] = ea),
              (G[61] = i))
            : (i = G[61]),
          G[62] !== i || G[63] !== e
            ? ((t = (0, n.jsx)(a.m, { content: e, children: i })), (G[62] = i), (G[63] = e), (G[64] = t))
            : (t = G[64]),
          t
        )
      }
      return W || null != es
        ? ed
        : (G[65] !== _ ? ((M = _.map(k)), (G[65] = _), (G[66] = M)) : (M = G[66]),
          G[67] !== L
            ? ((z =
                null == L
                  ? null
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(g.ms.Separator, {}),
                        (0, n.jsx)(g.ms.Item, {
                          leftIconAsset: r.X,
                          disabled: L.disabled,
                          onSelect: L.onSelect,
                          children: (0, n.jsx)(c.A, {
                            id: "skills.appsPage.recordSkill",
                            defaultMessage: "Record a skill",
                            description:
                              "Label for recording a workflow and turning it into a skill on the Skills & Apps page",
                          }),
                        }),
                      ],
                    })),
              (G[67] = L),
              (G[68] = z))
            : (z = G[68]),
          G[69] !== ed || G[70] !== M || G[71] !== z
            ? ((N = (0, n.jsxs)(g.Ab, { align: "end", contentWidth: "icon", triggerButton: ed, children: [M, z] })),
              (G[69] = ed),
              (G[70] = M),
              (G[71] = z),
              (G[72] = N))
            : (N = G[72]),
          N)
    }
    function k(e) {
      return (0, n.jsx)(
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
    function C(e) {
      return e.disabled
    }
    t.d(
      i,
      {},
      {
        d: function (e) {
          let i,
            t,
            r,
            l,
            g,
            y,
            x,
            b,
            v = (0, s.c)(42),
            j = (0, o.A)(),
            k = (0, d.$P)("/settings/plugins-settings")
          v[0] !== j
            ? ((i = j.formatMessage({
                id: "skills.appsPage.managePlugins",
                defaultMessage: "Manage",
                description: "Label for managing plugins from the Skills & Apps page header",
              })),
              (v[0] = j),
              (v[1] = i))
            : (i = v[1])
          let C = i,
            P = !1 !== e.showRefreshAction,
            A = e.breadcrumb ?? e.navigation
          ;(v[2] !== e.isRefreshDisabled ||
          v[3] !== e.isRefreshingPage ||
          v[4] !== e.needsSkillsRefresh ||
          v[5] !== e.onRefreshPage ||
          v[6] !== P
            ? ((t =
                P && e.needsSkillsRefresh
                  ? (0, n.jsxs)(p.$, {
                      radius: "full",
                      color: "ghost",
                      size: "toolbar",
                      className: "hidden shrink-0 md:inline-flex",
                      disabled: e.isRefreshDisabled,
                      onClick: e.onRefreshPage,
                      children: [
                        e.isRefreshingPage
                          ? (0, n.jsx)(h.y, { className: "icon-xs text-info" })
                          : (0, n.jsx)("span", {
                              className: "icon-xs relative scale-50",
                              children: (0, n.jsx)("span", {
                                className: "absolute inset-0 rounded-full",
                                style: { backgroundColor: "var(--color-text-info)" },
                              }),
                            }),
                        (0, n.jsx)(c.A, {
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
              (v[7] = t))
            : (t = v[7]),
            v[8] !== j ||
            v[9] !== e.isRefreshDisabled ||
            v[10] !== e.isRefreshingPage ||
            v[11] !== e.onRefreshPage ||
            v[12] !== P
              ? ((r = P
                  ? (0, n.jsx)(a.m, {
                      content: (0, n.jsx)(c.A, {
                        id: "skills.page.refreshSkills",
                        defaultMessage: "Refresh",
                        description: "Button label for reloading skills list",
                      }),
                      children: (0, n.jsx)(p.$, {
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
                          ? (0, n.jsx)(h.y, { className: "icon-sm" })
                          : (0, n.jsx)(f.b5, { icon: { 16: m._7Q, 20: m.hVk } }),
                      }),
                    })
                  : null),
                (v[8] = j),
                (v[9] = e.isRefreshDisabled),
                (v[10] = e.isRefreshingPage),
                (v[11] = e.onRefreshPage),
                (v[12] = P),
                (v[13] = r))
              : (r = v[13]),
            v[14] !== k || v[15] !== C || v[16] !== e.onManage
              ? ((l =
                  null == e.onManage
                    ? null
                    : (0, n.jsx)(a.m, {
                        content: C,
                        children: (0, n.jsx)(p.z, {
                          radius: "full",
                          href: k,
                          "aria-label": C,
                          color: "ghost",
                          size: "toolbar",
                          uniform: !0,
                          onClick: (i) => (0, _.y)(i, e.onManage),
                          children: (0, n.jsx)(f.b5, { icon: { 16: m.dqq, 20: m.IR } }),
                        }),
                      })),
                (v[14] = k),
                (v[15] = C),
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
              ? ((g = (0, n.jsx)(w, {
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
            v[30] !== e.hostSelector || v[31] !== t || v[32] !== r || v[33] !== l || v[34] !== g
              ? ((y = (0, n.jsxs)("div", {
                  className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                  children: [t, e.hostSelector, r, l, g],
                })),
                (v[30] = e.hostSelector),
                (v[31] = t),
                (v[32] = r),
                (v[33] = l),
                (v[34] = g),
                (v[35] = y))
              : (y = v[35]),
            v[36] !== A || v[37] !== y
              ? ((x = (0, n.jsxs)(n.Fragment, { children: [A, y] })), (v[36] = A), (v[37] = y), (v[38] = x))
              : (x = v[38]))
          let T = x
          return (
            v[39] !== T || v[40] !== e.inline
              ? ((b = e.inline
                  ? (0, n.jsx)("div", { className: "flex min-w-0 items-center justify-end gap-2", children: T })
                  : (0, n.jsx)(u.G.HeaderToolbar, { children: T })),
                (v[39] = T),
                (v[40] = e.inline),
                (v[41] = b))
              : (b = v[41]),
            b
          )
        },
        e: w,
      },
    )
  },
}
//# sourceMappingURL=719647.6c42fdc739.js.map
