export const __rspack_esm_ids = [180682]
export const __webpack_modules__ = {
  efhA(e, t) {
    t.A = { list: "list-kEHX_S", header: "header-cSxN5F", selectedRow: "selectedRow-nK_EGL" }
  },
  wbH5(e, t, r) {
    r.d(t, { ShoppingForYouPage: () => te })
    var a = r("ABep"),
      n = r("QosV"),
      s = r("qmMi"),
      l = r("zd8w"),
      i = r("oyxz"),
      o = r("Wf1j"),
      c = r("Ywss"),
      d = r("ASxG"),
      u = r("Sm6l"),
      p = r("Bbed"),
      f = r("PkPj"),
      m = r("BrP7"),
      g = r("IxWh"),
      h = r("bqtn"),
      _ = r("bVeK"),
      x = r("OWtl"),
      y = r("eGPX"),
      b = r("Qgfj")
    let v = ["tech", "home", "style", "beauty", "outdoors", "gifts"],
      N = {
        continue_shopping: "intent",
        upcoming: "intent",
        favorite_brands: "preference",
        ownership_complements: "ownership",
      },
      j = { intent: 0, preference: 1, ownership: 2, exploration: 3 }
    function w(e) {
      return "deal" in e && Number.isFinite(e.deal.sale_price) && !(e.deal.sale_price <= 0) && e.deal.currency.trim()
        ? { amount: e.deal.sale_price, currency: e.deal.currency }
        : null
    }
    function C({
      items: e,
      page: t,
      category: r,
      subcategory: a,
      sort: n = "recommended",
      additionalCategoryItems: s = [],
    }) {
      let l = new Set(),
        i = []
      for (let t of e) l.has(t.id) || (l.add(t.id), i.push(t))
      let o = i.filter((e) => null == r || e.category === r),
        c = [
          ...new Set(
            [...o, ...s.filter((e) => e.category === r)].flatMap((e) => (null == e.subcategory ? [] : [e.subcategory])),
          ),
        ],
        d = null != a && c.includes(a) ? a : void 0,
        u = A(o.filter((e) => null == d || e.subcategory === d)),
        p = new Set(
          u.flatMap((e) => {
            let t = w(e)
            return t ? [t.currency] : []
          }),
        ),
        f = 1 === p.size && u.every(w) ? ([...p][0] ?? null) : null
      "recommended" !== n &&
        null != f &&
        u.sort((e, t) => {
          let r = w(e),
            a = w(t)
          return r ? (a ? ("price_asc" === n ? r.amount - a.amount : a.amount - r.amount) : -1) : +!!a
        })
      let m = (t?.shopping_profile ?? []).flatMap((e, t) => {
        if (null == e.collection_kind || !e.topic.trim() || N[e.collection_kind] !== e.kind) return []
        let r = o.filter((e) => Number.isInteger(e.profile_bucket_index) && e.profile_bucket_index === t)
        return r.length
          ? [{ index: t, topic: e.topic, kind: e.kind, collectionKind: e.collection_kind, products: A(r) }]
          : []
      })
      return (
        m.sort((e, t) => j[e.kind] - j[t.kind]),
        {
          products: A(i),
          filteredProducts: u,
          collections: m,
          subcategories: c,
          effectiveSubcategory: d,
          priceSortCurrency: f,
        }
      )
    }
    function A(e) {
      let t = [...e],
        r = [],
        a = new Map(),
        n = (e) => {
          let t = e.product.semantic_id
          return t ? [2, 1].map((e) => `${t.model_version}:${e}:${t.codes.slice(0, e).join(".")}`) : []
        }
      for (; t.length;) {
        let e = 0
        if (t[0]?.product.semantic_id)
          for (let r = 1; r < Math.min(10, t.length); r++) {
            let s = t[r],
              l = t[e]
            if (!s?.product.semantic_id || !l) continue
            let [i = 0, o = 0] = n(s).map((e) => a.get(e) ?? 0),
              [c = 0, d = 0] = n(l).map((e) => a.get(e) ?? 0)
            ;(i < c || (i === c && o < d)) && (e = r)
          }
        let [s] = t.splice(e, 1)
        if (s) for (let e of (r.push(s), n(s))) a.set(e, (a.get(e) ?? 0) + 1)
      }
      return r
    }
    var T = r("rKAs"),
      k = r("SPnB"),
      E = r("DixB"),
      I = r("TjgH"),
      S = r("ZtSy"),
      P = r("RjIR"),
      M = r("zSQm"),
      R = r("hZax"),
      O = r("RcOP"),
      G = r("SxYm")
    function Y(e) {
      if (!e) return null
      try {
        let t = new URL(e)
        return !["https:", "http:"].includes(t.protocol) || t.username || t.password ? null : t.href
      } catch {
        return null
      }
    }
    function L(e) {
      let t,
        r,
        l,
        c,
        d,
        u,
        p,
        f,
        m,
        g,
        h,
        _,
        x,
        y,
        b,
        v,
        N = (0, n.c)(51),
        { item: j } = e,
        w = (0, o.A)(),
        C = (0, T.b$)({ type: "products", products: [j.product] })[0],
        A = (0, s.Ul)(P._),
        M = (0, s.Ul)(k.chatGptAuthenticatedAccountId$),
        L = (0, s.Ul)(k.chatGptAuthenticatedUserId$),
        F = (0, R.Fj)("2347841422")
      if (!C) return null
      let H = "assumed_deal" in j ? j.assumed_deal : null,
        U = "deal" in j ? j.deal : null,
        B = U ?? H,
        q = Y(C.url),
        z = C.image_urls?.flatMap(D) ?? [],
        $ = (0, E.S)(C, void 0),
        K = G.x,
        W = JSON.stringify([C.id, z[0]])
      ;(N[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { citationType: "product", surface: "block" }), (N[0] = t))
        : (t = N[0]),
        N[1] !== K || N[2] !== z || N[3] !== C || N[4] !== W
          ? ((r = (0, a.jsx)(K, { product: C, images: z, imageAnalytics: t }, W)),
            (N[1] = K),
            (N[2] = z),
            (N[3] = C),
            (N[4] = W),
            (N[5] = r))
          : (r = N[5]),
        N[6] !== C.title
          ? ((l = (0, a.jsx)("h3", { className: "line-clamp-2 text-sm font-medium text-default", children: C.title })),
            (N[6] = C.title),
            (N[7] = l))
          : (l = N[7]),
        N[8] !== C.merchants
          ? ((c = (0, a.jsx)("p", { className: "text-sm text-secondary", children: C.merchants })),
            (N[8] = C.merchants),
            (N[9] = c))
          : (c = N[9]),
        N[10] !== j.reason
          ? ((d = j.reason ? (0, a.jsx)("p", { className: "text-sm text-secondary", children: j.reason }) : null),
            (N[10] = j.reason),
            (N[11] = d))
          : (d = N[11]),
        N[12] !== B || N[13] !== w || N[14] !== C.price
          ? ((u = B ? w.formatNumber(B.sale_price, { style: "currency", currency: B.currency }) : C.price),
            (N[12] = B),
            (N[13] = w),
            (N[14] = C.price),
            (N[15] = u))
          : (u = N[15]),
        N[16] !== u
          ? ((p = (0, a.jsx)("span", { className: "font-semibold", children: u })), (N[16] = u), (N[17] = p))
          : (p = N[17]),
        N[18] !== B || N[19] !== w
          ? ((f = B
              ? (0, a.jsx)("s", {
                  className: "text-secondary",
                  children: w.formatNumber(B.original_price, { style: "currency", currency: B.currency }),
                })
              : null),
            (N[18] = B),
            (N[19] = w),
            (N[20] = f))
          : (f = N[20]),
        N[21] !== p || N[22] !== f
          ? ((m = (0, a.jsxs)("div", { className: "flex flex-wrap items-baseline gap-2 text-sm", children: [p, f] })),
            (N[21] = p),
            (N[22] = f),
            (N[23] = m))
          : (m = N[23]),
        N[24] !== U
          ? ((g = U
              ? (0, a.jsx)(I.E, {
                  variant: "success",
                  children:
                    U.discount_percent > 0 && U.discount_percent < 1
                      ? (0, a.jsx)(i.A, { id: "shopping.forYou.discountUnderOnePercent", defaultMessage: "<1% off" })
                      : (0, a.jsx)(i.A, {
                          id: "shopping.forYou.discount",
                          defaultMessage: "{discount}% off",
                          values: { discount: Math.floor(U.discount_percent) },
                        }),
                })
              : null),
            (N[24] = U),
            (N[25] = g))
          : (g = N[25]),
        N[26] !== H
          ? ((h = H
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(I.E, {
                      variant: "warning",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.forYou.assumed",
                        defaultMessage: "USD assumed \xb7 Not verified",
                      }),
                    }),
                    (0, a.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.forYou.assumedDiscount",
                        defaultMessage: "{discount}% off if USD",
                        values: { discount: Math.floor(H.discount_percent) },
                      }),
                    }),
                  ],
                })
              : null),
            (N[26] = H),
            (N[27] = h))
          : (h = N[27]),
        N[28] !== m || N[29] !== g || N[30] !== h || N[31] !== l || N[32] !== c || N[33] !== d
          ? ((_ = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1 px-1", children: [l, c, d, m, g, h] })),
            (N[28] = m),
            (N[29] = g),
            (N[30] = h),
            (N[31] = l),
            (N[32] = c),
            (N[33] = d),
            (N[34] = _))
          : (_ = N[34]),
        N[35] !== _ || N[36] !== r
          ? ((x = (0, a.jsxs)(a.Fragment, { children: [r, _] })), (N[35] = _), (N[36] = r), (N[37] = x))
          : (x = N[37]))
      let V = x
      return (
        N[38] !== V || N[39] !== q
          ? ((y = q
              ? (0, a.jsx)(S.G, {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  appearance: "inherit",
                  underline: "none",
                  href: q,
                  initiator: "markdown_link_click",
                  children: V,
                })
              : (0, a.jsx)("div", {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  children: V,
                })),
            (N[38] = V),
            (N[39] = q),
            (N[40] = y))
          : (y = N[40]),
        N[41] !== M || N[42] !== H || N[43] !== F || N[44] !== A || N[45] !== $ || N[46] !== L
          ? ((b =
              !H && A && M && L && $ && F.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
                ? (0, a.jsx)(O.ProductFavoriteAction, {
                    className: "absolute end-2 top-2",
                    accountId: M,
                    userId: L,
                    conversationId: void 0,
                    messageId: void 0,
                    request: $,
                    surface: "product_card",
                  })
                : null),
            (N[41] = M),
            (N[42] = H),
            (N[43] = F),
            (N[44] = A),
            (N[45] = $),
            (N[46] = L),
            (N[47] = b))
          : (b = N[47]),
        N[48] !== y || N[49] !== b
          ? ((v = (0, a.jsxs)("article", { className: "relative flex min-w-0 flex-col gap-2", children: [y, b] })),
            (N[48] = y),
            (N[49] = b),
            (N[50] = v))
          : (v = N[50]),
        v
      )
    }
    function D(e) {
      let t = (0, M.ex)(e)
      return t ? [t] : []
    }
    var F = r("CWeU"),
      H = r("Kwur"),
      U = r("tSEg"),
      B = r("eShZ")
    let q = { "target.com": "Target", "walmart.com": "Walmart", "bestbuy.com": "Best Buy" },
      z = ["most_drop", "target.com", "walmart.com", "bestbuy.com"],
      $ = d.Ikc({ data: d.YjP().min(1), version: d.YjP().min(1) }),
      K = (0, s.T1)(
        U.GD,
        (e, { signal: t, scope: r }) => {
          let a = e.category,
            n = !0,
            s = new Map(),
            l = t(W(), {
              onMount: (e) => {
                ;((n = !1), e(W()))
                let t = !1,
                  a = r.watch(({ get: r }) => {
                    i(r(F.PO)) ? t || ((t = !0), c()) : ((t = !1), o(), e(W()))
                  })
                return () => {
                  ;((n = !0), a(), o(), e(W()))
                }
              },
            })
          function i(t = r.get(F.PO)) {
            return (
              !n &&
              null != a &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function o() {
            for (let e of s.values()) e.abort()
            s.clear()
          }
          async function c(t, n = !1) {
            let d = t ?? "all"
            if (null == a || !i() || s.has("all") || s.has(d)) return
            let u = t ? [t] : z,
              p = new AbortController()
            ;(s.set(d, p),
              r.set(l, (e) => {
                let t = { ...e }
                for (let e of u) t[e] = { data: null, loading: !0, error: !1 }
                return t
              }))
            let f = () => {
              if (!i() || p.signal.aborted) throw new DOMException("The shopping category changed", "AbortError")
            }
            try {
              let s = await H.Request.safeGet("/shopping/category-deals", {
                parameters: { query: { category: a, section: t, refresh: n } },
                additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                expectedIdentity: { accountId: e.accountId, userId: e.userId },
                assertRequestCurrent: f,
                signal: p.signal,
              })
              if ((f(), s.category !== a)) throw Error("Shopping category response mismatch")
              r.set(l, (e) => {
                let t = { ...e }
                for (let e of u) {
                  let r = "most_drop" === e ? s.most_drop : s.merchant_sections?.find((t) => t.domain === e),
                    n =
                      r?.items?.filter(
                        (e) =>
                          e.category === a &&
                          e.deal?.currency === "USD" &&
                          Number.isFinite(e.deal.original_price) &&
                          Number.isFinite(e.deal.sale_price) &&
                          Number.isFinite(e.deal.discount_percent) &&
                          e.deal.discount_percent > 0 &&
                          e.deal.sale_price > 0 &&
                          e.deal.sale_price < e.deal.original_price &&
                          $.safeParse(e.product.product_lookup_key).success,
                      ) ?? [],
                    l = null == r || "unavailable" === r.status || ("ready" === r.status && 0 === n.length)
                  t[e] = { data: l || null == r ? null : { ...r, items: n }, loading: !1, error: l }
                }
                return t
              })
            } catch (t) {
              if (!i() || p.signal.aborted) return
              let e = t instanceof B.FetchError && [401, 403].includes(t.status)
              ;(e && o(),
                r.set(l, (t) => {
                  let r = { ...t }
                  for (let t of e ? z : u) r[t] = { data: null, loading: !1, error: !0 }
                  return r
                }))
            } finally {
              s.get(d) === p && s.delete(d)
            }
          }
          return {
            state$: l,
            retry: (e) => c(e, !0),
            refresh: () => (o(), c(void 0, !0)),
            cancel: () => {
              ;(o(),
                i() &&
                  r.set(l, (e) => {
                    let t = { ...e }
                    for (let r of z) e[r].loading && (t[r] = { data: null, loading: !1, error: !1, cancelled: !0 })
                    return t
                  }))
            },
          }
        },
        { autoDispose: !0 },
      )
    function W() {
      return {
        most_drop: { data: null, loading: !1, error: !1 },
        "target.com": { data: null, loading: !1, error: !1 },
        "walmart.com": { data: null, loading: !1, error: !1 },
        "bestbuy.com": { data: null, loading: !1, error: !1 },
      }
    }
    function V(e) {
      let t,
        r,
        s,
        o,
        c,
        d,
        u,
        p,
        f,
        g,
        h,
        _,
        x,
        y,
        b,
        v,
        N,
        j,
        w,
        C = (0, n.c)(46),
        { state: T, subcategory: k, onRetry: E } = e,
        I = (0, l.useId)(),
        S = (0, l.useId)(),
        [P, M] = (0, l.useState)("percent")
      if (C[0] !== P || C[1] !== T.most_drop || C[2] !== k) {
        let e
        ;(C[4] !== P
          ? ((e = (e, t) => ("percent" === P ? t.deal.discount_percent - e.deal.discount_percent : Z(t) - Z(e))),
            (C[4] = P),
            (C[5] = e))
          : (e = C[5]),
          (t = X(T.most_drop, k).toSorted(e)),
          (C[0] = P),
          (C[1] = T.most_drop),
          (C[2] = k),
          (C[3] = t))
      } else t = C[3]
      let R = t
      ;(C[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, a.jsx)(i.A, { id: "shopping.categoryDeals.mostDrop", defaultMessage: "Most drop" })), (C[6] = r))
        : (r = C[6]),
        C[7] !== I
          ? ((s = (0, a.jsx)("h2", { id: I, className: "heading-md", children: r })), (C[7] = I), (C[8] = s))
          : (s = C[8]),
        C[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = {
              key: "percent",
              name: (0, a.jsx)(i.A, { id: "shopping.categoryDeals.percent", defaultMessage: "Highest % off" }),
            }),
            (C[9] = o))
          : (o = C[9]),
        C[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              o,
              {
                key: "amount",
                name: (0, a.jsx)(i.A, { id: "shopping.categoryDeals.amount", defaultMessage: "Most dollars off" }),
              },
            ]),
            (C[10] = c))
          : (c = C[10]),
        C[11] !== P
          ? ((d = (0, a.jsx)(m.t, { variant: "filter", selectedKey: P, onSelect: M, tabs: c })),
            (C[11] = P),
            (C[12] = d))
          : (d = C[12]),
        C[13] !== s || C[14] !== d
          ? ((u = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [s, d],
            })),
            (C[13] = s),
            (C[14] = d),
            (C[15] = u))
          : (u = C[15]),
        C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(i.A, {
                id: "shopping.categoryDeals.savingsFound",
                defaultMessage: "Deals with the biggest savings we found",
              }),
            })),
            (C[16] = p))
          : (p = C[16]))
      let O = `${T.most_drop.data?.snapshot_id}:${k}:${P}`
      return (
        C[17] !== E ? ((f = () => E("most_drop")), (C[17] = E), (C[18] = f)) : (f = C[18]),
        C[19] !== R || C[20] !== T.most_drop || C[21] !== f || C[22] !== O
          ? ((g = (0, a.jsx)(Q, { state: T.most_drop, items: R, showSavings: !0, onRetry: f }, O)),
            (C[19] = R),
            (C[20] = T.most_drop),
            (C[21] = f),
            (C[22] = O),
            (C[23] = g))
          : (g = C[23]),
        C[24] !== I || C[25] !== g || C[26] !== u
          ? ((h = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": I,
              children: [u, p, g],
            })),
            (C[24] = I),
            (C[25] = g),
            (C[26] = u),
            (C[27] = h))
          : (h = C[27]),
        C[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(i.A, { id: "shopping.categoryDeals.siteWide", defaultMessage: "Site-wide deals" })),
            (C[28] = _))
          : (_ = C[28]),
        C[29] !== S
          ? ((x = (0, a.jsx)("h2", { id: S, className: "heading-md", children: _ })), (C[29] = S), (C[30] = x))
          : (x = C[30]),
        C[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(i.A, {
                id: "shopping.categoryDeals.merchantDescription",
                defaultMessage: "Deals in this category from these stores",
              }),
            })),
            (C[31] = y))
          : (y = C[31]),
        C[32] !== x
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [x, y] })), (C[32] = x), (C[33] = b))
          : (b = C[33]),
        C[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = ["target.com", "walmart.com", "bestbuy.com"]), (C[34] = v))
          : (v = C[34]),
        C[35] !== E || C[36] !== T || C[37] !== k
          ? ((N = v.map((e) =>
              (0, a.jsxs)(
                "section",
                {
                  className: "flex min-w-0 flex-col gap-4",
                  "aria-label": q[e],
                  children: [
                    (0, a.jsx)("h3", { className: "heading-sm", children: q[e] }),
                    (0, a.jsx)(
                      Q,
                      { state: T[e], items: A(X(T[e], k)), onRetry: () => E(e) },
                      `${T[e].data?.snapshot_id}:${k}`,
                    ),
                  ],
                },
                e,
              ),
            )),
            (C[35] = E),
            (C[36] = T),
            (C[37] = k),
            (C[38] = N))
          : (N = C[38]),
        C[39] !== S || C[40] !== b || C[41] !== N
          ? ((j = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-6",
              "aria-labelledby": S,
              children: [b, N],
            })),
            (C[39] = S),
            (C[40] = b),
            (C[41] = N),
            (C[42] = j))
          : (j = C[42]),
        C[43] !== h || C[44] !== j
          ? ((w = (0, a.jsxs)(a.Fragment, { children: [h, j] })), (C[43] = h), (C[44] = j), (C[45] = w))
          : (w = C[45]),
        w
      )
    }
    function Q(e) {
      let t,
        r,
        s,
        o,
        c = (0, n.c)(27),
        { state: d, items: p, showSavings: f, onRetry: m } = e,
        g = void 0 !== f && f,
        [h, _] = (0, l.useState)(5)
      if (d.loading || (!d.data && !d.error && !d.cancelled)) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.categoryDeals.loading",
                  defaultMessage: "Loading deals\u2026",
                }),
              })),
              (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      if (d.error || d.cancelled) {
        let e,
          t,
          r,
          n,
          s,
          l = d.cancelled ? "status" : "alert"
        return (
          c[1] !== d.cancelled
            ? ((e = d.cancelled
                ? (0, a.jsx)(i.A, { id: "shopping.categoryDeals.stopped", defaultMessage: "Stopped loading deals" })
                : (0, a.jsx)(i.A, {
                    id: "shopping.categoryDeals.failed",
                    defaultMessage: "These deals couldn't be loaded",
                  })),
              (c[1] = d.cancelled),
              (c[2] = e))
            : (e = c[2]),
          c[3] !== l || c[4] !== e
            ? ((t = (0, a.jsx)("p", { role: l, className: "text-sm text-secondary", children: e })),
              (c[3] = l),
              (c[4] = e),
              (c[5] = t))
            : (t = c[5]),
          c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(i.A, { id: "shopping.categoryDeals.retry", defaultMessage: "Retry deals" })), (c[6] = r))
            : (r = c[6]),
          c[7] !== m
            ? ((n = (0, a.jsx)(u.$, { color: "secondary", onClick: m, children: r })), (c[7] = m), (c[8] = n))
            : (n = c[8]),
          c[9] !== t || c[10] !== n
            ? ((s = (0, a.jsxs)("div", { className: "flex flex-col items-start gap-3", children: [t, n] })),
              (c[9] = t),
              (c[10] = n),
              (c[11] = s))
            : (s = c[11]),
          s
        )
      }
      if (0 === p.length) {
        let e
        return (
          c[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.categoryDeals.empty",
                  defaultMessage: "No matching deals found",
                }),
              })),
              (c[12] = e))
            : (e = c[12]),
          e
        )
      }
      if (c[13] !== p || c[14] !== g || c[15] !== h) {
        let e
        ;(c[17] !== g
          ? ((e = (e) => {
              var t
              return (0, a.jsxs)(
                "div",
                {
                  className: "flex min-w-0 flex-col gap-2",
                  children: [
                    (0, a.jsx)(L, { item: e }),
                    g
                      ? (0, a.jsx)("p", {
                          className: "px-1 text-sm text-secondary",
                          children:
                            Z((t = e)) >= 0.01 - Number.EPSILON * t.deal.original_price
                              ? (0, a.jsx)(i.A, {
                                  id: "shopping.categoryDeals.dollarsSaved",
                                  defaultMessage: "{amount} off",
                                  values: {
                                    amount: (0, a.jsx)(
                                      b.Gr,
                                      { value: Z(e), style: "currency", currency: "USD" },
                                      "amount",
                                    ),
                                  },
                                })
                              : (0, a.jsx)(i.A, {
                                  id: "shopping.categoryDeals.fractionalSavings",
                                  defaultMessage: "Less than {amount} off",
                                  values: {
                                    amount: (0, a.jsx)(
                                      b.Gr,
                                      { value: 0.01, style: "currency", currency: "USD" },
                                      "amount",
                                    ),
                                  },
                                }),
                        })
                      : null,
                  ],
                },
                e.id,
              )
            }),
            (c[17] = g),
            (c[18] = e))
          : (e = c[18]),
          (t = p.slice(0, h).map(e)),
          (c[13] = p),
          (c[14] = g),
          (c[15] = h),
          (c[16] = t))
      } else t = c[16]
      return (
        c[19] !== t
          ? ((r = (0, a.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (c[19] = t),
            (c[20] = r))
          : (r = c[20]),
        c[21] !== p.length || c[22] !== h
          ? ((s =
              h < p.length
                ? (0, a.jsx)(u.$, {
                    color: "secondary",
                    className: "self-center",
                    onClick: () => _(h + 5),
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.categoryDeals.showMore",
                      defaultMessage: "Show more deals",
                    }),
                  })
                : null),
            (c[21] = p.length),
            (c[22] = h),
            (c[23] = s))
          : (s = c[23]),
        c[24] !== r || c[25] !== s
          ? ((o = (0, a.jsxs)(a.Fragment, { children: [r, s] })), (c[24] = r), (c[25] = s), (c[26] = o))
          : (o = c[26]),
        o
      )
    }
    function X(e, t) {
      return e.data?.status === "ready" ? (e.data.items ?? []).filter((e) => null == t || e.subcategory === t) : []
    }
    function Z(e) {
      return e.deal.original_price - e.deal.sale_price
    }
    let J = (0, b.YK)({
        tech: { id: "shopping.for_you.discovery.category.tech", defaultMessage: "Tech" },
        home: { id: "shopping.for_you.discovery.category.home", defaultMessage: "Home" },
        style: { id: "shopping.for_you.discovery.category.style", defaultMessage: "Style" },
        beauty: { id: "shopping.for_you.discovery.category.beauty", defaultMessage: "Beauty" },
        outdoors: { id: "shopping.for_you.discovery.category.outdoors", defaultMessage: "Outdoors" },
        gifts: { id: "shopping.for_you.discovery.category.gifts", defaultMessage: "Gifts" },
      }),
      ee = (0, b.YK)({
        audio: { id: "shopping.for_you.discovery.subcategory.audio", defaultMessage: "Audio" },
        computing: { id: "shopping.for_you.discovery.subcategory.computing", defaultMessage: "Computing" },
        mobile: { id: "shopping.for_you.discovery.subcategory.mobile", defaultMessage: "Mobile" },
        wearables: { id: "shopping.for_you.discovery.subcategory.wearables", defaultMessage: "Wearables" },
        kitchen: { id: "shopping.for_you.discovery.subcategory.kitchen", defaultMessage: "Kitchen" },
        lighting: { id: "shopping.for_you.discovery.subcategory.lighting", defaultMessage: "Lighting" },
        furniture: { id: "shopping.for_you.discovery.subcategory.furniture", defaultMessage: "Furniture" },
        decor: { id: "shopping.for_you.discovery.subcategory.decor", defaultMessage: "Decor" },
        organization: { id: "shopping.for_you.discovery.subcategory.organization", defaultMessage: "Organization" },
        clothing: { id: "shopping.for_you.discovery.subcategory.clothing", defaultMessage: "Clothing" },
        shoes: { id: "shopping.for_you.discovery.subcategory.shoes", defaultMessage: "Shoes" },
        bags: { id: "shopping.for_you.discovery.subcategory.bags", defaultMessage: "Bags" },
        accessories: { id: "shopping.for_you.discovery.subcategory.accessories", defaultMessage: "Accessories" },
        skincare: { id: "shopping.for_you.discovery.subcategory.skincare", defaultMessage: "Skincare" },
        makeup: { id: "shopping.for_you.discovery.subcategory.makeup", defaultMessage: "Makeup" },
        haircare: { id: "shopping.for_you.discovery.subcategory.haircare", defaultMessage: "Haircare" },
        fragrance: { id: "shopping.for_you.discovery.subcategory.fragrance", defaultMessage: "Fragrance" },
        camping: { id: "shopping.for_you.discovery.subcategory.camping", defaultMessage: "Camping" },
        hiking: { id: "shopping.for_you.discovery.subcategory.hiking", defaultMessage: "Hiking" },
        fitness: { id: "shopping.for_you.discovery.subcategory.fitness", defaultMessage: "Fitness" },
        cycling: { id: "shopping.for_you.discovery.subcategory.cycling", defaultMessage: "Cycling" },
        toys: { id: "shopping.for_you.discovery.subcategory.toys", defaultMessage: "Toys" },
        games: { id: "shopping.for_you.discovery.subcategory.games", defaultMessage: "Games" },
        crafts: { id: "shopping.for_you.discovery.subcategory.crafts", defaultMessage: "Crafts" },
      }),
      et = (0, b.YK)({
        continue_shopping: {
          id: "shopping.for_you.discovery.collection.continue_shopping",
          defaultMessage: "Continue shopping",
        },
        upcoming: { id: "shopping.for_you.discovery.collection.upcoming", defaultMessage: "For what's coming up" },
        favorite_brands: {
          id: "shopping.for_you.discovery.collection.favorite_brands",
          defaultMessage: "From brands you like",
        },
        ownership_complements: {
          id: "shopping.for_you.discovery.collection.ownership_complements",
          defaultMessage: "For things you own",
        },
      }),
      er = (0, b.YK)({
        recommended: { id: "shopping.for_you.discovery.sort.recommended", defaultMessage: "Recommended" },
        price_asc: { id: "shopping.for_you.discovery.sort.price_asc", defaultMessage: "Price: low to high" },
        price_desc: { id: "shopping.for_you.discovery.sort.price_desc", defaultMessage: "Price: high to low" },
      })
    function ea(e) {
      return (
        e?.dream_inputs?.some(
          (e) =>
            null != e.task_id &&
            ("shopping_profile_v1_retrieval" === e.source || "shopping_profile_v1_ranking" === e.source),
        ) ?? !1
      )
    }
    function en(e) {
      let t,
        r,
        s,
        c,
        d,
        p,
        f,
        g,
        _,
        x,
        y,
        b,
        v,
        N = (0, n.c)(54),
        { state: j, category: w, connectionCard: A, onLoadMore: T, categoryDeals: k } = e,
        E = (0, o.A)(),
        I = (0, l.useId)(),
        S = (0, l.useId)(),
        [P, M] = (0, l.useState)(),
        [R, O] = (0, l.useState)("recommended"),
        [G, Y] = (0, l.useState)(),
        [L, D] = (0, l.useState)(15),
        [F, H] = (0, l.useState)(15)
      if (
        (N[0] !== j.page?.recommendations
          ? ((t = j.page?.recommendations ?? []), (N[0] = j.page?.recommendations), (N[1] = t))
          : (t = N[1]),
        N[2] !== w ||
          N[3] !== k ||
          N[4] !== A ||
          N[5] !== E ||
          N[6] !== S ||
          N[7] !== G ||
          N[8] !== R ||
          N[9] !== j.cancelled ||
          N[10] !== j.items ||
          N[11] !== j.loading ||
          N[12] !== j.page ||
          N[13] !== j.pageError ||
          N[14] !== P ||
          N[15] !== t ||
          N[16] !== I ||
          N[17] !== L ||
          N[18] !== F)
      ) {
        let e,
          n,
          l,
          o = [...j.items, ...t, ...(k ? Object.values(k.state).flatMap(eu) : [])]
        ;((r = C({ items: j.items, page: j.page, category: w, subcategory: P, sort: R, additionalCategoryItems: o })),
          N[28] !== j.page?.recommendations
            ? ((e = j.page?.recommendations ?? []), (N[28] = j.page?.recommendations), (N[29] = e))
            : (e = N[29]))
        let y = C({
          items: e,
          page: j.page,
          category: w,
          subcategory: r.effectiveSubcategory,
          additionalCategoryItems: o,
        }).filteredProducts
        ;(N[30] !== G
          ? ((n = (e) =>
              null != G && e.index === G.index && e.topic === G.topic && e.collectionKind === G.collectionKind),
            (N[30] = G),
            (N[31] = n))
          : (n = N[31]),
          (s = r.collections.find(n)))
        let b = !w && !s,
          v = b ? r.products.slice(0, 8) : [],
          T = new Set(v.map(ed)),
          U = s ? new Set(s.products.map(ec)) : null,
          B = r.filteredProducts.filter((e) => (!U || U.has(e.id)) && (!b || !T.has(e.id))),
          q = j.page?.gmail_state === "connected" || ea(j.page),
          z = q && !j.loading && !j.pageError && !j.cancelled,
          $ = null != w && r.products.length > 0 && r.products.every(eo)
        N[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = () => {
              ;(M(void 0), O("recommended"), D(15), H(15))
            }),
            (N[32] = l))
          : (l = N[32])
        let K = l
        ;((c = "flex min-w-0 flex-col gap-8"),
          (d =
            w && !s
              ? (0, a.jsx)("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: (0, a.jsx)(m.t, {
                    variant: "filter",
                    scrollable: !0,
                    selectedKey: r.effectiveSubcategory ?? "all",
                    onSelect: (e) => {
                      ;(M("all" === e ? void 0 : e), D(15), H(15))
                    },
                    tabs: [
                      { key: "all", name: (0, a.jsx)(i.A, { id: "shopping.forYou.all", defaultMessage: "All" }) },
                      ...r.subcategories.map(ei),
                    ],
                  }),
                })
              : null),
          (p =
            !s && (y.length > 0 || z)
              ? (0, a.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": S,
                  children: [
                    (0, a.jsx)("h2", {
                      id: S,
                      className: "heading-md",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.forYou.recommendedProducts",
                        defaultMessage: "Recommended products",
                      }),
                    }),
                    (0, a.jsx)(ep, { products: y.slice(0, F) }),
                    0 === y.length
                      ? (0, a.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.noRecommendedProducts",
                            defaultMessage: "No matching product recommendations yet",
                          }),
                        })
                      : null,
                    F < y.length
                      ? (0, a.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => H(F + 15),
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.moreProducts",
                            defaultMessage: "Show more products",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (f = v.length > 0 ? (0, a.jsx)(em, { products: v }) : null),
          (g = s
            ? null
            : (0, a.jsxs)("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                  b || 0 === r.products.length ? A : null,
                  r.collections.slice(0, b ? 2 : 3).map((e) =>
                    (0, a.jsxs)(
                      "section",
                      {
                        className: "flex min-w-0 flex-col gap-3 rounded-xl border border-default p-4",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, a.jsx)(i.A, { ...et[e.collectionKind] }),
                          }),
                          (0, a.jsx)("h2", { className: "heading-md", children: e.topic }),
                          (0, a.jsx)("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: e.products.slice(0, b ? 4 : 2).map(el),
                          }),
                          (0, a.jsx)(u.$, {
                            color: "secondary",
                            onClick: () => {
                              ;(K(), Y(e))
                            },
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.openCollection",
                              defaultMessage: "View collection",
                            }),
                          }),
                        ],
                      },
                      e.index,
                    ),
                  ),
                ],
              })),
          (_ = b ? r.collections.slice(2).map(es) : null),
          (x =
            B.length > 0 || w || s || (q && 0 === r.products.length)
              ? (0, a.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": I,
                  children: [
                    s
                      ? (0, a.jsx)(u.$, {
                          color: "ghost",
                          className: "self-start",
                          onClick: () => {
                            ;(K(), Y(void 0))
                          },
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.backCollections",
                            defaultMessage: "Back to collections",
                          }),
                        })
                      : null,
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between gap-3",
                      children: [
                        (0, a.jsxs)("h2", {
                          id: I,
                          className: "heading-md",
                          children: [
                            s?.topic,
                            !s && w
                              ? (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.recommendedCategoryDeals",
                                  defaultMessage: "Recommended deals",
                                })
                              : null,
                            s || w
                              ? null
                              : (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.moreToDiscover",
                                  defaultMessage: "More deals to discover",
                                }),
                          ],
                        }),
                        w && !s
                          ? (0, a.jsx)(h.Ab, {
                              triggerButton: (0, a.jsx)(u.$, {
                                color: "secondary",
                                "aria-label": E.formatMessage({
                                  id: "shopping.forYou.sort",
                                  defaultMessage: "Sort deals",
                                }),
                                children: (0, a.jsx)(i.A, { ...er[r.priceSortCurrency ? R : "recommended"] }),
                              }),
                              children: ["recommended", "price_asc", "price_desc"].map((e) =>
                                (0, a.jsx)(
                                  h.ms.Item,
                                  {
                                    disabled: "recommended" !== e && !r.priceSortCurrency,
                                    onSelect: () => O(e),
                                    children: (0, a.jsx)(i.A, { ...er[e] }),
                                  },
                                  e,
                                ),
                              ),
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsx)(ep, { products: B.slice(0, L) }),
                    0 === B.length && z
                      ? (0, a.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: $
                            ? (0, a.jsx)(i.A, {
                                id: "shopping.forYou.noCategories",
                                defaultMessage:
                                  "Category filters aren't available for these results yet. Try refreshing your recommendations",
                              })
                            : (0, a.jsx)(i.A, {
                                id: "shopping.forYou.noMatches",
                                defaultMessage: "No matching products in these results yet",
                              }),
                        })
                      : null,
                    L < B.length
                      ? (0, a.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => D(L + 15),
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.moreFinds",
                            defaultMessage: "Show more finds",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (N[2] = w),
          (N[3] = k),
          (N[4] = A),
          (N[5] = E),
          (N[6] = S),
          (N[7] = G),
          (N[8] = R),
          (N[9] = j.cancelled),
          (N[10] = j.items),
          (N[11] = j.loading),
          (N[12] = j.page),
          (N[13] = j.pageError),
          (N[14] = P),
          (N[15] = t),
          (N[16] = I),
          (N[17] = L),
          (N[18] = F),
          (N[19] = r),
          (N[20] = s),
          (N[21] = c),
          (N[22] = d),
          (N[23] = p),
          (N[24] = f),
          (N[25] = g),
          (N[26] = _),
          (N[27] = x))
      } else
        ((r = N[19]),
          (s = N[20]),
          (c = N[21]),
          (d = N[22]),
          (p = N[23]),
          (f = N[24]),
          (g = N[25]),
          (_ = N[26]),
          (x = N[27]))
      return (
        N[33] !== T ||
        N[34] !== j.loading ||
        N[35] !== j.loadingMore ||
        N[36] !== j.page?.next_cursor ||
        N[37] !== j.refreshingGmail
          ? ((y = j.page?.next_cursor
              ? (0, a.jsx)(u.$, {
                  color: "secondary",
                  className: "self-center",
                  disabled: j.loading || j.loadingMore || j.refreshingGmail,
                  onClick: T,
                  children: (0, a.jsx)(i.A, { id: "shopping.forYou.moreDeals", defaultMessage: "Show more deals" }),
                })
              : null),
            (N[33] = T),
            (N[34] = j.loading),
            (N[35] = j.loadingMore),
            (N[36] = j.page?.next_cursor),
            (N[37] = j.refreshingGmail),
            (N[38] = y))
          : (y = N[38]),
        N[39] !== w || N[40] !== k || N[41] !== r || N[42] !== s
          ? ((b =
              w && !s && k
                ? (0, a.jsx)(V, { state: k.state, subcategory: r.effectiveSubcategory, onRetry: k.onRetry })
                : null),
            (N[39] = w),
            (N[40] = k),
            (N[41] = r),
            (N[42] = s),
            (N[43] = b))
          : (b = N[43]),
        N[44] !== b ||
        N[45] !== c ||
        N[46] !== d ||
        N[47] !== p ||
        N[48] !== f ||
        N[49] !== g ||
        N[50] !== _ ||
        N[51] !== x ||
        N[52] !== y
          ? ((v = (0, a.jsxs)("div", { className: c, children: [d, p, f, g, _, x, y, b] })),
            (N[44] = b),
            (N[45] = c),
            (N[46] = d),
            (N[47] = p),
            (N[48] = f),
            (N[49] = g),
            (N[50] = _),
            (N[51] = x),
            (N[52] = y),
            (N[53] = v))
          : (v = N[53]),
        v
      )
    }
    function es(e) {
      return (0, a.jsxs)(
        "section",
        {
          className: "flex flex-col gap-4",
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("h2", { className: "heading-md", children: e.topic }),
                (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(i.A, { ...et[e.collectionKind] }),
                }),
              ],
            }),
            (0, a.jsx)(ep, { products: e.products }),
          ],
        },
        e.index,
      )
    }
    function el(e) {
      return (0, a.jsx)(L, { item: e }, e.id)
    }
    function ei(e) {
      return { key: e, name: (0, a.jsx)(i.A, { ...ee[e] }) }
    }
    function eo(e) {
      return null == e.category
    }
    function ec(e) {
      return e.id
    }
    function ed(e) {
      return e.id
    }
    function eu(e) {
      return e.data?.status === "ready" ? (e.data.items ?? []) : []
    }
    function ep(e) {
      let t,
        r,
        s = (0, n.c)(4),
        { products: l } = e
      return (
        s[0] !== l ? ((t = l.map(ef)), (s[0] = l), (s[1] = t)) : (t = s[1]),
        s[2] !== t
          ? ((r = (0, a.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (s[2] = t),
            (s[3] = r))
          : (r = s[3]),
        r
      )
    }
    function ef(e) {
      return (0, a.jsx)(L, { item: e }, e.id)
    }
    function em(e) {
      let t,
        r,
        c,
        d,
        p,
        f,
        m,
        h,
        b,
        v,
        N,
        j,
        w,
        C,
        A,
        T,
        k = (0, n.c)(35),
        { products: E } = e,
        I = (0, s.gh)(x.u),
        S = (0, o.A)(),
        P = (0, l.useRef)(null),
        M = (0, l.useId)()
      k[0] !== I
        ? ((t = (e) => {
            let t = P.current
            if (!t) return
            let r = "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"
            t.scrollTo({ left: (0, g.z)(t, e, r), behavior: I.get(y.x) ? "instant" : "smooth" })
          }),
          (k[0] = I),
          (k[1] = t))
        : (t = k[1])
      let R = t
      return (
        k[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(i.A, { id: "shopping.forYou.worthALook", defaultMessage: "Recommended deals" })),
            (k[2] = r))
          : (r = k[2]),
        k[3] !== M
          ? ((c = (0, a.jsx)("h2", { id: M, className: "heading-md", children: r })), (k[3] = M), (k[4] = c))
          : (c = k[4]),
        k[5] !== S
          ? ((d = S.formatMessage({ id: "shopping.forYou.previousDeals", defaultMessage: "Previous deals" })),
            (k[5] = S),
            (k[6] = d))
          : (d = k[6]),
        k[7] !== R ? ((p = () => R(-1)), (k[7] = R), (k[8] = p)) : (p = k[8]),
        k[9] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, a.jsx)(_.z_d, {})), (k[9] = f)) : (f = k[9]),
        k[10] !== d || k[11] !== p
          ? ((m = (0, a.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": d,
              onClick: p,
              children: f,
            })),
            (k[10] = d),
            (k[11] = p),
            (k[12] = m))
          : (m = k[12]),
        k[13] !== S
          ? ((h = S.formatMessage({ id: "shopping.forYou.nextDeals", defaultMessage: "Next deals" })),
            (k[13] = S),
            (k[14] = h))
          : (h = k[14]),
        k[15] !== R ? ((b = () => R(1)), (k[15] = R), (k[16] = b)) : (b = k[16]),
        k[17] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, a.jsx)(_.uM3, {})), (k[17] = v)) : (v = k[17]),
        k[18] !== h || k[19] !== b
          ? ((N = (0, a.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": h,
              onClick: b,
              children: v,
            })),
            (k[18] = h),
            (k[19] = b),
            (k[20] = N))
          : (N = k[20]),
        k[21] !== N || k[22] !== m
          ? ((j = (0, a.jsxs)("div", { className: "flex gap-2", children: [m, N] })),
            (k[21] = N),
            (k[22] = m),
            (k[23] = j))
          : (j = k[23]),
        k[24] !== j || k[25] !== c
          ? ((w = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [c, j] })),
            (k[24] = j),
            (k[25] = c),
            (k[26] = w))
          : (w = k[26]),
        k[27] !== E ? ((C = E.map(eg)), (k[27] = E), (k[28] = C)) : (C = k[28]),
        k[29] !== C
          ? ((A = (0, a.jsx)("div", {
              ref: P,
              className: "relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2",
              children: C,
            })),
            (k[29] = C),
            (k[30] = A))
          : (A = k[30]),
        k[31] !== w || k[32] !== A || k[33] !== M
          ? ((T = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": M,
              children: [w, A],
            })),
            (k[31] = w),
            (k[32] = A),
            (k[33] = M),
            (k[34] = T))
          : (T = k[34]),
        T
      )
    }
    function eg(e) {
      return (0, a.jsx)(
        "div",
        {
          className: "min-w-0 shrink-0 basis-40 snap-start sm:basis-48 xl:basis-56",
          children: (0, a.jsx)(L, { item: e }),
        },
        e.id,
      )
    }
    var eh = r("CMv2"),
      e_ = r("DBCl"),
      ex = r("yxN2"),
      ey = r("ecE5")
    function eb(e) {
      let t,
        r,
        s,
        l,
        i,
        o = (0, n.c)(16),
        { connectorId: c, open: d, onOpenChange: u, onConnected: p } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { hostId: e_.iwv }), (o[0] = t)) : (t = o[0])
      let { handleAppConnectOAuthStarted: f, handleAppConnected: m } = (0, ex.t)(t)
      o[1] !== c
        ? ((r = { connectorId: c, redirectAfter: "/shopping", oauthReferrer: "shopping_gmail" }),
          (o[1] = c),
          (o[2] = r))
        : (r = o[2])
      let g = r,
        h = d ? c : void 0
      return (
        o[3] !== g || o[4] !== f
          ? ((s = (e) => {
              f({ ...e, appConnectOptions: g })
            }),
            (o[3] = g),
            (o[4] = f),
            (o[5] = s))
          : (s = o[5]),
        o[6] !== c || o[7] !== m || o[8] !== p
          ? ((l = async () => {
              ;(m(c), await p())
            }),
            (o[6] = c),
            (o[7] = m),
            (o[8] = p),
            (o[9] = l))
          : (l = o[9]),
        o[10] !== g || o[11] !== u || o[12] !== h || o[13] !== s || o[14] !== l
          ? ((i = (0, a.jsx)(ey.Z, {
              app: null,
              connectorId: h,
              appConnectOptions: g,
              hostId: e_.iwv,
              postConnectSource: null,
              waitForConnectedHandler: !0,
              getOAuthResumeContext: ev,
              onOAuthStarted: s,
              onConnected: l,
              onOpenChange: u,
            })),
            (o[10] = g),
            (o[11] = u),
            (o[12] = h),
            (o[13] = s),
            (o[14] = l),
            (o[15] = i))
          : (i = o[15]),
        i
      )
    }
    function ev() {
      return { returnTo: "/shopping" }
    }
    var eN = r("OiCI"),
      ej = r("ygu7"),
      ew = r("CV1W")
    function eC(e) {
      let t,
        r,
        o,
        d,
        p,
        f,
        m,
        g = (0, n.c)(23),
        { status: h, onConnected: _ } = e,
        y = (0, s.gh)(x.u),
        b = (0, c.Zp)(),
        [v, N] = (0, l.useState)(!1),
        [j, w] = (0, l.useState)("idle")
      if ("disconnected" !== h && "reconnect_required" !== h) return null
      let C = "reconnect_required" === h
      g[0] !== b || g[1] !== y
        ? ((t = async () => {
            let e = y.get(eN.tT),
              t = y.get(F.PO).authenticatedUserId
            if (null != e && null != t) {
              w("loading")
              try {
                let r = await (0, ej.NG)(y, eh.$G)
                if (y.get(eN.tT) !== e || y.get(F.PO).authenticatedUserId !== t) return void w("idle")
                if (null == r) return void w("failed")
                ;(await b((0, ew.i4)(r, "apps", eh.$G)), w("idle"))
              } catch {
                w("failed")
              }
            }
          }),
          (g[0] = b),
          (g[1] = y),
          (g[2] = t))
        : (t = g[2])
      let A = t,
        T = v || "loading" === j,
        k = "loading" === j,
        E = C ? void 0 : "dialog"
      return (
        g[3] !== A || g[4] !== C
          ? ((r = () => {
              C ? A() : N(!0)
            }),
            (g[3] = A),
            (g[4] = C),
            (g[5] = r))
          : (r = g[5]),
        g[6] !== C
          ? ((o = C
              ? (0, a.jsx)(i.A, {
                  id: "shopping.forYou.manageGmailConnection",
                  defaultMessage: "Manage Gmail connection",
                })
              : (0, a.jsx)(i.A, { id: "shopping.forYou.connectGmail", defaultMessage: "Connect Gmail" })),
            (g[6] = C),
            (g[7] = o))
          : (o = g[7]),
        g[8] !== T || g[9] !== k || g[10] !== E || g[11] !== r || g[12] !== o
          ? ((d = (0, a.jsx)(u.$, {
              color: "secondary",
              disabled: T,
              loading: k,
              "aria-haspopup": E,
              onClick: r,
              children: o,
            })),
            (g[8] = T),
            (g[9] = k),
            (g[10] = E),
            (g[11] = r),
            (g[12] = o),
            (g[13] = d))
          : (d = g[13]),
        g[14] !== j
          ? ((p =
              "failed" === j
                ? (0, a.jsx)("p", {
                    role: "alert",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.gmailSettingsFailed",
                      defaultMessage: "Couldn\u2019t open Gmail settings. Try again",
                    }),
                  })
                : null),
            (g[14] = j),
            (g[15] = p))
          : (p = g[15]),
        g[16] !== _ || g[17] !== v
          ? ((f = (0, a.jsx)(eb, { connectorId: eh.$G, open: v, onOpenChange: N, onConnected: _ })),
            (g[16] = _),
            (g[17] = v),
            (g[18] = f))
          : (f = g[18]),
        g[19] !== d || g[20] !== p || g[21] !== f
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, p, f] })), (g[19] = d), (g[20] = p), (g[21] = f), (g[22] = m))
          : (m = g[22]),
        m
      )
    }
    function eA(e) {
      let t,
        r,
        s,
        l = (0, n.c)(37),
        { state: c, onLoad: d, onCheck: p, onCancel: f, onOpenEmail: m } = e,
        g = (0, o.A)(),
        h = c.page?.gmail_state ?? c.entryStatus
      if (c.page?.gmail_state === "connected") {
        let e, r, n, s
        ;(l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("h2", {
              className: "heading-md",
              children: (0, a.jsx)(i.A, { id: "shopping.forYou.emailCardTitle", defaultMessage: "Your email offers" }),
            })),
            (l[0] = e))
          : (e = l[0]),
          l[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.forYou.emailCardDescription",
                  defaultMessage: "Explore offers from your connected Gmail",
                }),
              })),
              (l[1] = r))
            : (r = l[1]),
          l[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(i.A, { id: "shopping.forYou.openEmail", defaultMessage: "View email offers" })),
              (l[2] = n))
            : (n = l[2]),
          l[3] !== m
            ? ((s = (0, a.jsxs)(a.Fragment, {
                children: [e, r, (0, a.jsx)(u.$, { color: "secondary", onClick: m, children: n })],
              })),
              (l[3] = m),
              (l[4] = s))
            : (s = l[4]),
          (t = s))
      } else if (c.loading || c.refreshingGmail) {
        let e, r, n
        ;(l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "status",
              children: (0, a.jsx)(i.A, {
                id: "shopping.forYou.loading",
                defaultMessage: "Loading your recommendations\u2026",
              }),
            })),
            (l[5] = e))
          : (e = l[5]),
          l[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" })), (l[6] = r))
            : (r = l[6]),
          l[7] !== f
            ? ((n = (0, a.jsxs)(a.Fragment, {
                children: [e, (0, a.jsx)(u.$, { color: "secondary", onClick: f, children: r })],
              })),
              (l[7] = f),
              (l[8] = n))
            : (n = l[8]),
          (t = n))
      } else if ("checking" === h) {
        let e
        ;(l[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "status",
              children: (0, a.jsx)(i.A, {
                id: "shopping.forYou.checking",
                defaultMessage: "Checking your Gmail connection\u2026",
              }),
            })),
            (l[9] = e))
          : (e = l[9]),
          (t = e))
      } else if ("connected" === h) {
        let e, r, n, s, o, p, f
        ;(l[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("h2", {
              className: "heading-md",
              children: (0, a.jsx)(i.A, { id: "shopping.forYou.readyTitle", defaultMessage: "Find deals for you" }),
            })),
            (l[10] = e))
          : (e = l[10]),
          l[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.forYou.readyDescription",
                  defaultMessage:
                    "Gmail is connected. Find deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (l[11] = r))
            : (r = l[11]),
          l[12] !== c.pageError
            ? ((n = c.pageError
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.failed",
                      defaultMessage: "We couldn't load these deals. Please try again",
                    }),
                  })
                : null),
              (l[12] = c.pageError),
              (l[13] = n))
            : (n = l[13]),
          l[14] !== c.cancelled
            ? ((s = c.cancelled
                ? (0, a.jsx)("p", {
                    role: "status",
                    children: (0, a.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                  })
                : null),
              (l[14] = c.cancelled),
              (l[15] = s))
            : (s = l[15]),
          l[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(i.A, { id: "shopping.forYou.load", defaultMessage: "Load recommendations" })),
              (l[16] = o))
            : (o = l[16]),
          l[17] !== d
            ? ((p = (0, a.jsx)(u.$, { color: "primary", onClick: d, children: o })), (l[17] = d), (l[18] = p))
            : (p = l[18]),
          l[19] !== n || l[20] !== s || l[21] !== p
            ? ((f = (0, a.jsxs)(a.Fragment, { children: [e, r, n, s, p] })),
              (l[19] = n),
              (l[20] = s),
              (l[21] = p),
              (l[22] = f))
            : (f = l[22]),
          (t = f))
      } else if ("disconnected" === h || "reconnect_required" === h) {
        let e, r, n
        ;(l[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("h2", {
              className: "heading-md",
              children: (0, a.jsx)(i.A, { id: "shopping.forYou.connectTitle", defaultMessage: "Connect Gmail" }),
            })),
            (l[23] = e))
          : (e = l[23]),
          l[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.forYou.connectDescription",
                  defaultMessage: "Connect Gmail for deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (l[24] = r))
            : (r = l[24]),
          l[25] !== p || l[26] !== h
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [e, r, (0, a.jsx)(eC, { status: h, onConnected: p })] })),
              (l[25] = p),
              (l[26] = h),
              (l[27] = n))
            : (n = l[27]),
          (t = n))
      } else {
        let e, r, n
        ;(l[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "alert",
              children: (0, a.jsx)(i.A, {
                id: "shopping.forYou.checkFailed",
                defaultMessage: "We couldn't check your Gmail connection. Please try again",
              }),
            })),
            (l[28] = e))
          : (e = l[28]),
          l[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(i.A, { id: "shopping.forYou.retry", defaultMessage: "Try again" })), (l[29] = r))
            : (r = l[29]),
          l[30] !== p
            ? ((n = (0, a.jsxs)(a.Fragment, {
                children: [e, (0, a.jsx)(u.$, { color: "secondary", onClick: p, children: r })],
              })),
              (l[30] = p),
              (l[31] = n))
            : (n = l[31]),
          (t = n))
      }
      return (
        l[32] !== g
          ? ((r = g.formatMessage({ id: "shopping.forYou.gmailRegion", defaultMessage: "Gmail" })),
            (l[32] = g),
            (l[33] = r))
          : (r = l[33]),
        l[34] !== t || l[35] !== r
          ? ((s = (0, a.jsx)("section", {
              className: "flex min-w-0 flex-col items-start gap-4 rounded-xl border border-default p-4",
              "aria-label": r,
              children: t,
            })),
            (l[34] = t),
            (l[35] = r),
            (l[36] = s))
          : (s = l[36]),
        s
      )
    }
    var eT = r("i5ac"),
      ek = r.n(eT),
      eE = r("Nwp9")
    let eI = d.Ikc({ id: d.YjP().min(1), received_at: d.YjP(), expires_at: d.YjP().nullish(), saved_at: d.aig() }),
      eS = d.YOg(eI),
      eP = (0, eE.Kn)(({ accountId: e, userId: t }) => `shopping-for-you-email:${JSON.stringify([e, t])}`, void 0),
      eM = (0, s.T1)(U.GD, (e, { scope: t, derived: r }) => {
        let a = r((t, { scope: r }) => {
          let a = eS.safeParse(r.get(eP, e))
          if (!a.success) return []
          let n = Date.now()
          return a.data
            .filter(
              (e) => e.saved_at <= n && n - e.saved_at < 2592e6 && (!e.expires_at || Date.parse(e.expires_at) > n),
            )
            .slice(0, 50)
        })
        return {
          references$: a,
          toggle(r) {
            let n = t.get(a),
              s = n.find((e) => e.id === r.id || e.id === r.source_id)
            t.set(
              eP,
              e,
              s
                ? n.filter((e) => e.id !== s.id)
                : [
                    { id: r.id, received_at: r.received_at, expires_at: r.expires_at, saved_at: Date.now() },
                    ...n,
                  ].slice(0, 50),
            )
          },
          remove(r) {
            t.set(
              eP,
              e,
              t.get(a).filter((e) => e.id !== r),
            )
          },
        }
      })
    function eR(e, t) {
      e.set(eP, t, [])
    }
    let eO = d.Ikc({ data: d.YjP().min(1), version: d.YjP().min(1) }),
      eG = d.Ikc({ detail: d.euz("for_you_updating") }),
      eY = (0, s.T1)(
        U.GD,
        (e, { signal: t, scope: r }) => {
          let a = !0,
            n = null,
            s = null,
            l = null,
            i = null,
            o = !1,
            c = null,
            d = [],
            u = t(eL(), {
              onMount: (t) => {
                ;((a = !1), t(eL()))
                let n = !1,
                  s = r.watch(({ get: r }) => {
                    let a = r(F.PO)
                    a.authLoading ||
                    "chatgpt" !== a.authMethod ||
                    !a.hasChatGptToken ||
                    a.authenticatedAccountId !== e.accountId ||
                    a.authenticatedUserId !== e.userId
                      ? ((n = !1), _(), t(eL()))
                      : n || ((n = !0), x())
                  })
                return () => {
                  ;((a = !0), s(), _(), t(eL()))
                }
              },
            }),
            p = { "ChatGPT-Account-ID": e.accountId },
            f = { accountId: e.accountId, userId: e.userId }
          function m() {
            let t = r.get(F.PO)
            return (
              !a &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function g(e) {
            m() && r.set(u, (t) => ({ ...t, ...e }))
          }
          function h(e) {
            if (e.signal.aborted || !m()) throw new DOMException("The shopping account changed", "AbortError")
          }
          function _() {
            ;(i?.abort(),
              (i = null),
              n?.abort(),
              (n = null),
              s?.abort(),
              l?.abort(),
              (s = null),
              (l = null),
              (c = null),
              (d = []),
              (o = !1))
          }
          async function x() {
            if (!m()) return
            n?.abort()
            let t = new AbortController()
            ;((n = t), g({ entryStatus: "checking" }))
            try {
              let a = await H.Request.safeGet("/shopping/for-you/gmail", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(t),
                signal: t.signal,
              })
              if (!m() || n !== t) return
              if ("disconnected" === a.gmail_state || "reconnect_required" === a.gmail_state) {
                ;(_(), eR(r, e), g({ ...eL(), entryStatus: a.gmail_state }))
                return
              }
              g({ entryStatus: a.gmail_state ?? "unavailable" })
            } catch (e) {
              m() && n === t && !t.signal.aborted && (y(e), g({ entryStatus: "unavailable" }))
            } finally {
              n === t && (n = null)
            }
          }
          function y(t) {
            return (
              t instanceof B.FetchError &&
              !![401, 403, 404, 409].includes(t.status) &&
              (_(), eR(r, e), g({ ...eL(), entryStatus: "unavailable", pageError: !0 }), !0)
            )
          }
          function b() {
            return {
              excluded_product_ids: [...new Set(d.map((e) => e.productId))].join(","),
              excluded_offer_ids: [...new Set(d.map((e) => e.offerId))].join(","),
            }
          }
          function v(e) {
            for (let t of e) {
              let e = t.deal.offer_id
              !t.id ||
                t.id.length > 256 ||
                t.id.includes(",") ||
                !e ||
                e.length > 512 ||
                e.includes(",") ||
                (d = d.filter((r) => r.productId !== t.id || r.offerId !== e)).push({ productId: t.id, offerId: e })
            }
            for (; d.length > 0;) {
              let e = b()
              if (d.length <= 90 && e.excluded_product_ids.length + e.excluded_offer_ids.length <= 16384) break
              d.shift()
            }
          }
          async function N(t = !0, a = !1, x, C) {
            if (!m() || r.get(u).selectingProfile) return
            ;(i?.abort(),
              (i = null),
              n?.abort(),
              (n = null),
              t && (o = !1),
              (c = { refresh: a, preference: x, taskId: C }),
              s?.abort())
            let A = new AbortController()
            ;((s = A),
              g({
                loading: !0,
                loadingMore: !1,
                pageError: !1,
                cancelled: !1,
                loadingProfileTasks: !1,
                profileTaskError: null,
              }))
            try {
              let t = null
              if (!r.get(u).profileTasksUnavailable) {
                let e = await j(A)
                ;(h(A), e && (t = r.get(u).profileTasks))
              }
              let n = C ?? (t?.selected_task_id == null ? t?.tasks[0]?.task_id : void 0)
              if (null != n) {
                ;(l?.abort(), (l = null), g({ selectingProfile: !0, refreshingGmail: !1 }))
                try {
                  let e = await H.Request.safePost("/shopping/for-you/profile-selection", {
                    requestBody: { task_id: n },
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(A),
                    signal: A.signal,
                  })
                  ;(h(A),
                    (d = []),
                    g({
                      profileTasks: { tasks: t?.tasks ?? [], selected_task_id: e.task_id },
                      page: null,
                      items: [],
                      selectingProfile: !1,
                    }),
                    (c = { refresh: !0, preference: x }))
                } catch (e) {
                  if (m() && s === A && !A.signal.aborted) {
                    let t = e instanceof B.FetchError && 422 === e.status
                    ;((c = null),
                      g({
                        profileTaskError: t ? "not_applied" : "selection",
                        loading: !1,
                        selectingProfile: !1,
                        profileTasks: null,
                        page: null,
                        items: [],
                      }))
                  }
                  return
                }
              }
              let i = await eF(
                () =>
                  void 0 !== x
                    ? H.Request.safePost("/shopping/for-you", {
                        requestBody: {
                          refresh: !0,
                          preference: x,
                          excluded_product_ids: [...new Set(d.map((e) => e.productId))],
                          excluded_offer_ids: [...new Set(d.map((e) => e.offerId))],
                        },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(A),
                        signal: A.signal,
                      })
                    : H.Request.safeGet("/shopping/for-you", {
                        parameters: a || null != n ? { query: { refresh: !0, ...b() } } : void 0,
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(A),
                        signal: A.signal,
                      }),
                A.signal,
              )
              if (!m() || s !== A) return
              if (!ea(i) && ("disconnected" === i.gmail_state || "reconnect_required" === i.gmail_state)) {
                ;(_(), eR(r, e), g({ ...eL(), entryStatus: i.gmail_state }))
                return
              }
              "connected" !== i.gmail_state && eR(r, e)
              let y = n ?? t?.selected_task_id,
                N = i.dream_inputs?.filter(
                  (e) => "shopping_profile_v1_retrieval" === e.source || "shopping_profile_v1_ranking" === e.source,
                )
              if (y && i.snapshot_id && (!N?.length || N.some((e) => e.task_id !== y))) {
                ;((c = null), g({ page: null, items: [], loading: !1, profileTaskError: "not_applied" }))
                return
              }
              ;(!i.needs_gmail_refresh ||
                i.snapshot_id ||
                i.planned_queries?.length ||
                i.items?.length ||
                i.recommendations?.length ||
                i.currency_assumed_items?.length) &&
                (c = null)
              let T = r.get(u).page
              null != c &&
                "connected" === i.gmail_state &&
                i.needs_gmail_refresh &&
                !i.snapshot_id &&
                T?.gmail_state === "connected" &&
                T.snapshot_id &&
                (i = { ...T, needs_gmail_refresh: !0 })
              let k = (i = eD(i)).items ?? []
              ;(v(k),
                g({
                  page: i,
                  items: k,
                  loading: !1,
                  recommendationsUpdated: !1,
                  entryStatus: i.gmail_state ?? "unavailable",
                }),
                "connected" === i.gmail_state && i.needs_gmail_refresh && !o && w())
            } catch (e) {
              !m() || s !== A || A.signal.aborted || y(e) || g({ loading: !1, pageError: !0 })
            } finally {
              s === A && ((s = null), g({ selectingProfile: !1 }))
            }
          }
          async function j(e) {
            g({ loadingProfileTasks: !0 })
            try {
              let t = await H.Request.safeGet("/shopping/for-you/profile-tasks", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(e),
                signal: e.signal,
              })
              return (h(e), g({ profileTasks: t, profileTasksUnavailable: !1, profileTaskError: null }), !0)
            } catch (t) {
              if ((h(e), t instanceof B.FetchError && (403 === t.status || 404 === t.status)))
                return (g({ profileTasks: null, profileTasksUnavailable: !0, profileTaskError: null }), !1)
              if (
                (g({ profileTasks: null, profileTaskError: "list" }),
                t instanceof B.FetchError && (429 === t.status || t.status >= 500))
              )
                return !1
              throw t
            } finally {
              e.signal.aborted || g({ loadingProfileTasks: !1 })
            }
          }
          async function w() {
            if (!m() || l || r.get(u).selectingProfile) return
            ;(s?.abort(), (s = null), (o = !0))
            let t = new AbortController()
            ;((l = t), g({ refreshingGmail: !0, loading: !1, loadingMore: !1, gmailError: !1, cancelled: !1 }))
            try {
              let a = await eF(
                () =>
                  H.Request.safePost("/shopping/for-you/gmail-refresh", {
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(t),
                    signal: t.signal,
                  }),
                t.signal,
              )
              if (!m() || l !== t) return
              let n = r.get(u)
              if (((l = null), "unavailable" === a.gmail_state || null == a.gmail_state))
                return void g({ refreshingGmail: !1, gmailError: !0, entryStatus: "unavailable" })
              if ("connected" !== a.gmail_state) {
                ;(_(),
                  eR(r, e),
                  g({ ...eL(), entryStatus: a.gmail_state ?? "unavailable", page: { gmail_state: a.gmail_state } }),
                  ea(n.page) && (await N(!1)))
                return
              }
              ;(g({
                refreshingGmail: !1,
                entryStatus: a.gmail_state,
                page: {
                  ...n.page,
                  gmail_state: a.gmail_state,
                  email_offers: a.email_offers,
                  email_offers_status: a.email_offers_status,
                  shopping_signals_status: a.shopping_signals_status,
                  refreshed_at: a.refreshed_at,
                  needs_gmail_refresh: !1,
                },
              }),
                null == c ||
                (!c.refresh &&
                  (n.items.length || n.page?.recommendations?.length || n.page?.currency_assumed_items?.length))
                  ? a.updated &&
                    (n.page?.snapshot_id ||
                      n.page?.planned_queries?.length ||
                      n.page?.items?.length ||
                      n.page?.recommendations?.length ||
                      n.page?.currency_assumed_items?.length) &&
                    g({ recommendationsUpdated: !0 })
                  : await N(!1, c.refresh, c.preference, c.taskId))
            } catch (e) {
              !m() || l !== t || t.signal.aborted || y(e) || g({ gmailError: !0 })
            } finally {
              l === t && ((l = null), g({ refreshingGmail: !1 }))
            }
          }
          return {
            state$: u,
            checkGmail: x,
            loadFirst: N,
            loadMore: async function () {
              if (!m()) return
              let t = r.get(u)
              if (!t.page?.snapshot_id || !t.page.next_cursor || t.loading || t.loadingMore) return
              let a = new AbortController()
              ;((s = a), g({ loadingMore: !0, pageError: !1, cancelled: !1 }))
              try {
                let n = await eF(
                    () =>
                      H.Request.safeGet("/shopping/for-you", {
                        parameters: { query: { cursor: t.page?.next_cursor } },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(a),
                        signal: a.signal,
                      }),
                    a.signal,
                  ),
                  l = r.get(u).page
                if (!m() || s !== a || null == l || l?.snapshot_id !== t.page.snapshot_id) return
                if (!ea(n) && ("disconnected" === n.gmail_state || "reconnect_required" === n.gmail_state)) {
                  ;(_(), eR(r, e), g({ ...eL(), entryStatus: n.gmail_state }))
                  return
                }
                if (t.page.snapshot_id !== n.snapshot_id)
                  return void g({ loadingMore: !1, pageError: !0, recommendationsUpdated: !0 })
                let i = eD({
                    ...n,
                    items: ek()([...(t.page.items ?? []), ...(n.items ?? [])], "id"),
                    email_offers: l.email_offers,
                    email_offers_status: l.email_offers_status,
                    shopping_signals_status: l.shopping_signals_status,
                    refreshed_at: l.refreshed_at,
                    needs_gmail_refresh: l.needs_gmail_refresh,
                  }),
                  o = i.items ?? []
                ;(v(o), g({ page: i, items: o, loadingMore: !1 }))
              } catch (e) {
                !m() || s !== a || a.signal.aborted || y(e) || g({ loadingMore: !1, pageError: !0 })
              } finally {
                s === a && (s = null)
              }
            },
            refreshGmail: w,
            loadProfileTasks: async function () {
              if (!m() || r.get(u).loading || r.get(u).selectingProfile) return
              i?.abort()
              let e = new AbortController()
              i = e
              try {
                await j(e)
              } catch (t) {
                !e.signal.aborted && m() && y(t)
              } finally {
                i === e && (i = null)
              }
            },
            selectProfileTask: (e, t) => N(!0, !0, t?.trim(), e),
            refresh: (e) => N(!0, !0, e?.trim()),
            cancel: () => {
              let e = r.get(u).selectingProfile
              ;(n?.abort(),
                (n = null),
                s?.abort(),
                l?.abort(),
                (s = null),
                (l = null),
                (c = null),
                g({
                  loading: !1,
                  loadingMore: !1,
                  refreshingGmail: !1,
                  cancelled: !0,
                  loadingProfileTasks: !1,
                  selectingProfile: !1,
                  ...(e ? { profileTasks: null, page: null, items: [], profileTaskError: "selection" } : {}),
                }))
            },
          }
        },
        { autoDispose: !0 },
      )
    function eL() {
      return {
        entryStatus: "checking",
        page: null,
        items: [],
        loading: !1,
        loadingMore: !1,
        refreshingGmail: !1,
        pageError: !1,
        gmailError: !1,
        recommendationsUpdated: !1,
        cancelled: !1,
        profileTasks: null,
        loadingProfileTasks: !1,
        profileTasksUnavailable: !1,
        selectingProfile: !1,
        profileTaskError: null,
      }
    }
    function eD(e) {
      return {
        ...e,
        items: e.items?.filter((e) => eO.safeParse(e.product.product_lookup_key).success),
        recommendations: e.recommendations?.filter((e) => eO.safeParse(e.product.product_lookup_key).success),
        currency_assumed_items: e.currency_assumed_items?.filter(
          (e) => eO.safeParse(e.product.product_lookup_key).success,
        ),
      }
    }
    async function eF(e, t) {
      for (; !t.aborted;)
        try {
          return await e()
        } catch (e) {
          if (
            !(function (e) {
              if (!(e instanceof B.FetchError) || 429 !== e.status) return !1
              if (null != e.errorCode) return "for_you_updating" === e.errorCode
              try {
                return eG.safeParse(JSON.parse(e.message)).success
              } catch {
                return !1
              }
            })(e)
          )
            throw e
          await new Promise((e, r) => {
            let a = () => {
                ;(clearTimeout(n), r(new DOMException("The shopping request was cancelled", "AbortError")))
              },
              n = setTimeout(() => {
                ;(t.removeEventListener("abort", a), e())
              }, 5e3)
            ;(t.addEventListener("abort", a, { once: !0 }), t.aborted && a())
          })
        }
      throw t.reason
    }
    var eH = r("uuN8"),
      eU = r("okCa"),
      eB = r("aepO")
    function eq(e) {
      let t,
        r,
        s,
        c,
        d,
        p,
        f,
        g,
        h,
        _,
        x,
        y = (0, n.c)(69),
        {
          offers: b,
          unavailable: v,
          updatedAt: N,
          busy: j,
          error: w,
          savedIds: C,
          onToggleSaved: A,
          onRefresh: T,
          onStop: k,
        } = e,
        E = (0, o.A)(),
        [I, S] = (0, l.useState)(""),
        [P, M] = (0, l.useState)("all")
      if (
        y[0] !== j ||
        y[1] !== P ||
        y[2] !== w ||
        y[3] !== E ||
        y[4] !== b ||
        y[5] !== T ||
        y[6] !== k ||
        y[7] !== A ||
        y[8] !== I ||
        y[9] !== C ||
        y[10] !== v ||
        y[11] !== N
      ) {
        let e, n, l, o, _, x, R, O, G
        ;(y[21] !== P || y[22] !== I
          ? ((e = (e) =>
              ("all" === P || e.category === P) &&
              `${e.title} ${e.merchant} ${e.category}`.toLocaleLowerCase().includes(I.trim().toLocaleLowerCase())),
            (y[21] = P),
            (y[22] = I),
            (y[23] = e))
          : (e = y[23]),
          (t = b.filter(e)),
          (r = "flex flex-col gap-6"),
          (s = "shopping-email-title"),
          y[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("h2", {
                id: "shopping-email-title",
                className: "heading-md",
                children: (0, a.jsx)(i.A, {
                  id: "shopping.forYou.email.title",
                  defaultMessage: "Deals from your inbox",
                }),
              })),
              (y[24] = n))
            : (n = y[24]),
          y[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  n,
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.email.description",
                      defaultMessage: "Promotions from your recent emails. Offers are not verified",
                    }),
                  }),
                ],
              })),
              (y[25] = l))
            : (l = y[25]),
          y[26] !== E || y[27] !== N
            ? ((o = N
                ? (0, a.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.email.updated",
                      defaultMessage: "Updated {time}",
                      values: { time: E.formatTime(N) },
                    }),
                  })
                : null),
              (y[26] = E),
              (y[27] = N),
              (y[28] = o))
            : (o = y[28]),
          y[29] !== o
            ? ((c = (0, a.jsxs)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: [l, o],
              })),
              (y[29] = o),
              (y[30] = c))
            : (c = y[30]),
          y[31] !== j || y[32] !== T || y[33] !== k
            ? ((_ = j
                ? (0, a.jsx)(u.$, {
                    color: "secondary",
                    onClick: k,
                    children: (0, a.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                  })
                : (0, a.jsx)(u.$, {
                    color: "secondary",
                    onClick: T,
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.email.find",
                      defaultMessage: "Find email offers",
                    }),
                  })),
              (y[31] = j),
              (y[32] = T),
              (y[33] = k),
              (y[34] = _))
            : (_ = y[34]),
          y[35] !== j
            ? ((x = j
                ? (0, a.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.email.loading",
                      defaultMessage: "Finding email offers\u2026",
                    }),
                  })
                : null),
              (y[35] = j),
              (y[36] = x))
            : (x = y[36]),
          y[37] !== _ || y[38] !== x
            ? ((d = (0, a.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [_, x] })),
              (y[37] = _),
              (y[38] = x),
              (y[39] = d))
            : (d = y[39]),
          y[40] !== w || y[41] !== v
            ? ((p =
                w || v
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.forYou.email.failed",
                        defaultMessage: "Email offers couldn't be loaded. Try again",
                      }),
                    })
                  : null),
              (y[40] = w),
              (y[41] = v),
              (y[42] = p))
            : (p = y[42]),
          y[43] !== E
            ? ((R = E.formatMessage({
                id: "shopping.forYou.email.searchLabel",
                defaultMessage: "Search email offers",
              })),
              (y[43] = E),
              (y[44] = R))
            : (R = y[44]),
          y[45] !== E
            ? ((O = E.formatMessage({
                id: "shopping.forYou.email.searchPlaceholder",
                defaultMessage: "Search offers or brands",
              })),
              (y[45] = E),
              (y[46] = O))
            : (O = y[46]),
          y[47] !== I || y[48] !== R || y[49] !== O
            ? ((f = (0, a.jsx)(eU.s, {
                id: "shopping-email-search",
                label: R,
                placeholder: O,
                searchQuery: I,
                onSearchQueryChange: S,
                autoFocus: !1,
              })),
              (y[47] = I),
              (y[48] = R),
              (y[49] = O),
              (y[50] = f))
            : (f = y[50]),
          y[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = Object.entries(eW).map(ez)), (y[51] = G))
            : (G = y[51]),
          y[52] !== P
            ? ((g = (0, a.jsx)(m.t, { variant: "filter", scrollable: !0, selectedKey: P, onSelect: M, tabs: G })),
              (y[52] = P),
              (y[53] = g))
            : (g = y[53]),
          (h =
            t.length > 0
              ? (0, a.jsx)("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) =>
                    (0, a.jsx)(
                      e$,
                      { offer: e, saved: C.has(e.id) || C.has(e.source_id), onToggleSaved: () => A(e) },
                      e.id,
                    ),
                  ),
                })
              : null),
          (y[0] = j),
          (y[1] = P),
          (y[2] = w),
          (y[3] = E),
          (y[4] = b),
          (y[5] = T),
          (y[6] = k),
          (y[7] = A),
          (y[8] = I),
          (y[9] = C),
          (y[10] = v),
          (y[11] = N),
          (y[12] = t),
          (y[13] = r),
          (y[14] = s),
          (y[15] = c),
          (y[16] = d),
          (y[17] = p),
          (y[18] = f),
          (y[19] = g),
          (y[20] = h))
      } else
        ((t = y[12]),
          (r = y[13]),
          (s = y[14]),
          (c = y[15]),
          (d = y[16]),
          (p = y[17]),
          (f = y[18]),
          (g = y[19]),
          (h = y[20]))
      return (
        y[54] !== j || y[55] !== w || y[56] !== t.length || y[57] !== v
          ? ((_ =
              0 !== t.length || j || w || v
                ? null
                : (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.email.empty",
                      defaultMessage: "No email offers match right now",
                    }),
                  })),
            (y[54] = j),
            (y[55] = w),
            (y[56] = t.length),
            (y[57] = v),
            (y[58] = _))
          : (_ = y[58]),
        y[59] !== r ||
        y[60] !== s ||
        y[61] !== c ||
        y[62] !== d ||
        y[63] !== p ||
        y[64] !== f ||
        y[65] !== g ||
        y[66] !== h ||
        y[67] !== _
          ? ((x = (0, a.jsxs)("section", { className: r, "aria-labelledby": s, children: [c, d, p, f, g, h, _] })),
            (y[59] = r),
            (y[60] = s),
            (y[61] = c),
            (y[62] = d),
            (y[63] = p),
            (y[64] = f),
            (y[65] = g),
            (y[66] = h),
            (y[67] = _),
            (y[68] = x))
          : (x = y[68]),
        x
      )
    }
    function ez(e) {
      let [t, r] = e
      return { key: t, name: (0, a.jsx)(i.A, { ...r }) }
    }
    function e$(e) {
      let t,
        r,
        s,
        c,
        d,
        p,
        f,
        m,
        g,
        h,
        _,
        x,
        y,
        b,
        v,
        N,
        j,
        w = (0, n.c)(44),
        { offer: C, saved: A, onToggleSaved: T } = e,
        k = (0, o.A)(),
        [E, P] = (0, l.useState)(!1),
        M = C.offer_url && C.image?.source_id === C.source_id ? C.image : null
      w[0] !== C.offer_url ? ((t = Y(C.offer_url)), (w[0] = C.offer_url), (w[1] = t)) : (t = w[1])
      let R = t
      w[2] !== C.source_url ? ((r = Y(C.source_url)), (w[2] = C.source_url), (w[3] = r)) : (r = w[3])
      let O = r
      return (
        w[4] !== C.merchant
          ? ((s = (0, a.jsx)("p", { className: "text-xs text-secondary", children: C.merchant })),
            (w[4] = C.merchant),
            (w[5] = s))
          : (s = w[5]),
        w[6] !== C.title
          ? ((c = (0, a.jsx)("h3", { className: "text-base font-semibold wrap-anywhere", children: C.title })),
            (w[6] = C.title),
            (w[7] = c))
          : (c = w[7]),
        w[8] !== s || w[9] !== c
          ? ((d = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [s, c] })),
            (w[8] = s),
            (w[9] = c),
            (w[10] = d))
          : (d = w[10]),
        w[11] !== A
          ? ((p = A
              ? (0, a.jsx)(i.A, { id: "shopping.forYou.email.unsave", defaultMessage: "Remove" })
              : (0, a.jsx)(i.A, { id: "shopping.forYou.email.save", defaultMessage: "Save" })),
            (w[11] = A),
            (w[12] = p))
          : (p = w[12]),
        w[13] !== T || w[14] !== A || w[15] !== p
          ? ((f = (0, a.jsx)(u.$, {
              color: "secondary",
              size: "actionSm",
              "aria-pressed": A,
              onClick: T,
              children: p,
            })),
            (w[13] = T),
            (w[14] = A),
            (w[15] = p),
            (w[16] = f))
          : (f = w[16]),
        w[17] !== d || w[18] !== f
          ? ((m = (0, a.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [d, f] })),
            (w[17] = d),
            (w[18] = f),
            (w[19] = m))
          : (m = w[19]),
        w[20] !== M
          ? ((g = M ? (0, a.jsx)(eK, { image: M }, `${M.source_id}:${M.url}`) : null), (w[20] = M), (w[21] = g))
          : (g = w[21]),
        w[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(I.E, {
              variant: "warning",
              children: (0, a.jsx)(i.A, {
                id: "shopping.forYou.email.unverified",
                defaultMessage: "Not verified \xb7 Email source",
              }),
            })),
            (w[22] = h))
          : (h = w[22]),
        w[23] !== k || w[24] !== C.expires_at
          ? ((_ = C.expires_at
              ? (0, a.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, a.jsx)(i.A, {
                    id: "shopping.forYou.email.expires",
                    defaultMessage: "Email says offer ends {date}",
                    values: { date: k.formatDate(C.expires_at, { month: "short", day: "numeric" }) },
                  }),
                })
              : null),
            (w[23] = k),
            (w[24] = C.expires_at),
            (w[25] = _))
          : (_ = w[25]),
        w[26] !== O
          ? ((x = O
              ? (0, a.jsx)(S.G, {
                  href: O,
                  initiator: "markdown_link_click",
                  appearance: "secondary",
                  children: (0, a.jsx)(i.A, { id: "shopping.forYou.email.source", defaultMessage: "From your email" }),
                })
              : null),
            (w[26] = O),
            (w[27] = x))
          : (x = w[27]),
        w[28] !== k || w[29] !== C.coupon_code
          ? ((y = C.coupon_code
              ? (0, a.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-2",
                  children: [
                    (0, a.jsx)("code", { className: "min-w-0 text-sm break-all select-text", children: C.coupon_code }),
                    (0, a.jsx)(eH.i, {
                      ariaLabel: k.formatMessage({
                        id: "shopping.forYou.email.copy",
                        defaultMessage: "Copy coupon code",
                      }),
                      onCopy: async () => {
                        let e = await (0, eB.lW)(C.coupon_code ?? "")
                        return (P(!e), e)
                      },
                    }),
                  ],
                })
              : null),
            (w[28] = k),
            (w[29] = C.coupon_code),
            (w[30] = y))
          : (y = w[30]),
        w[31] !== E
          ? ((b = E
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-secondary",
                  children: (0, a.jsx)(i.A, {
                    id: "shopping.forYou.email.copyError",
                    defaultMessage: "Couldn't copy the code. Try again",
                  }),
                })
              : null),
            (w[31] = E),
            (w[32] = b))
          : (b = w[32]),
        w[33] !== R
          ? ((v = R
              ? (0, a.jsx)(S.G, {
                  href: R,
                  initiator: "markdown_link_click",
                  appearance: "button",
                  children: (0, a.jsx)(i.A, { id: "shopping.forYou.email.view", defaultMessage: "View offer" }),
                })
              : null),
            (w[33] = R),
            (w[34] = v))
          : (v = w[34]),
        w[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(i.A, {
                id: "shopping.forYou.email.terms",
                defaultMessage: "Advertised in email. Terms and eligibility apply",
              }),
            })),
            (w[35] = N))
          : (N = w[35]),
        w[36] !== _ || w[37] !== x || w[38] !== y || w[39] !== b || w[40] !== v || w[41] !== m || w[42] !== g
          ? ((j = (0, a.jsxs)("article", {
              className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
              children: [m, g, h, _, x, y, b, v, N],
            })),
            (w[36] = _),
            (w[37] = x),
            (w[38] = y),
            (w[39] = b),
            (w[40] = v),
            (w[41] = m),
            (w[42] = g),
            (w[43] = j))
          : (j = w[43]),
        j
      )
    }
    function eK(e) {
      let t,
        r,
        s,
        c = (0, n.c)(8),
        { image: d } = e,
        p = (0, o.A)(),
        [f, m] = (0, l.useState)("idle")
      c[0] !== d.url
        ? ((r = Y(d.url)), (t = r?.startsWith("https:")), (c[0] = d.url), (c[1] = t), (c[2] = r))
        : ((t = c[1]), (r = c[2]))
      let g = t
      return (
        c[3] !== g || c[4] !== p || c[5] !== f || c[6] !== r
          ? ((s = (0, a.jsx)("div", {
              className:
                "flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-artifact-photo-paper",
              children:
                "requested" === f && g
                  ? (0, a.jsx)("img", {
                      src: r ?? void 0,
                      alt: p.formatMessage({
                        id: "shopping.forYou.email.image",
                        defaultMessage: "Promotional email image",
                      }),
                      referrerPolicy: "no-referrer",
                      className: "block h-full w-full object-contain",
                      onError: () => m("failed"),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-xs text-secondary",
                          children:
                            "failed" !== f && g
                              ? (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageConsent",
                                  defaultMessage: "Remote email image",
                                })
                              : (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageUnavailable",
                                  defaultMessage: "Image unavailable",
                                }),
                        }),
                        g
                          ? (0, a.jsx)(u.$, {
                              color: "secondary",
                              size: "actionSm",
                              onClick: () => m("requested"),
                              children: (0, a.jsx)(i.A, {
                                id: "shopping.forYou.email.loadImage",
                                defaultMessage: "Load images",
                              }),
                            })
                          : null,
                      ],
                    }),
            })),
            (c[3] = g),
            (c[4] = p),
            (c[5] = f),
            (c[6] = r),
            (c[7] = s))
          : (s = c[7]),
        s
      )
    }
    let eW = (0, b.YK)({
      all: { id: "shopping.forYou.email.category.all", defaultMessage: "All" },
      clothing: { id: "shopping.forYou.email.category.clothing", defaultMessage: "Clothing" },
      shoes: { id: "shopping.forYou.email.category.shoes", defaultMessage: "Shoes" },
      home: { id: "shopping.forYou.email.category.home", defaultMessage: "Home" },
      tech: { id: "shopping.forYou.email.category.tech", defaultMessage: "Tech" },
    })
    var eV = r("jU86"),
      eQ = r("ahQQ"),
      eX = r("Nw6v"),
      eZ = r("FFnF")
    let eJ = (0, eV.ER)("/library", "?tab=favorites")
    function e0(e) {
      let t,
        r,
        l,
        i,
        o = (0, n.c)(7),
        { accountId: c, userId: d } = e,
        u = (0, s.Ul)(k.PO),
        p = (0, s.Ul)(P._),
        f = (0, R.Fj)("2347841422")
      return !u.authLoading &&
        "chatgpt" === u.authMethod &&
        u.hasChatGptToken &&
        u.authenticatedAccountId === c &&
        u.authenticatedUserId === d &&
        null != u.userId &&
        p &&
        f.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
        ? (o[0] !== c || o[1] !== u.userId
            ? ((t = { accountId: c, userId: u.userId }), (o[0] = c), (o[1] = u.userId), (o[2] = t))
            : (t = o[2]),
          o[3] === Symbol.for("react.memo_cache_sentinel") ? ((r = { embedded: !0 }), (o[3] = r)) : (r = o[3]),
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)(s.Ui, {
                scope: eQ.vn,
                value: r,
                children: (0, a.jsx)(s.Ui, { scope: eQ.Qy, value: eJ, children: (0, a.jsx)(e1, {}) }),
              })),
              (o[4] = l))
            : (l = o[4]),
          o[5] !== t
            ? ((i = (0, a.jsx)(s.Ui, { scope: eQ.oD, value: t, children: l })), (o[5] = t), (o[6] = i))
            : (i = o[6]),
          i)
        : null
    }
    function e1() {
      let e,
        t,
        r,
        l,
        o,
        c,
        d,
        p,
        f,
        m = (0, n.c)(28),
        g = (0, s.Ul)(eV.i3),
        h = (0, s.Ul)(eV.AH)
      return (
        m[0] !== h || m[1] !== g
          ? ((e = h?.filter(e3)),
            (t = "flex flex-col gap-4"),
            m[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)("h2", {
                  className: "heading-md",
                  children: (0, a.jsx)(i.A, { id: "shopping.forYou.savedProducts", defaultMessage: "Saved products" }),
                })),
                (m[8] = r))
              : (r = m[8]),
            m[9] !== g.isPending
              ? ((l = g.isPending
                  ? (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      role: "status",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.forYou.loadingSavedProducts",
                        defaultMessage: "Loading saved products\u2026",
                      }),
                    })
                  : null),
                (m[9] = g.isPending),
                (m[10] = l))
              : (l = m[10]),
            m[11] !== g
              ? ((o = g.isError
                  ? (0, a.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      role: "alert",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.savedProductsFailed",
                            defaultMessage: "Couldn't load saved products",
                          }),
                        }),
                        (0, a.jsx)(u.$, {
                          color: "secondary",
                          onClick: () => void g.refetch(),
                          children: (0, a.jsx)(i.A, {
                            id: "shopping.forYou.retrySavedProducts",
                            defaultMessage: "Try again",
                          }),
                        }),
                      ],
                    })
                  : null),
                (m[11] = g),
                (m[12] = o))
              : (o = m[12]),
            (c = e?.length
              ? (0, a.jsx)("div", {
                  className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
                  children: e.map(e2),
                })
              : null),
            (m[0] = h),
            (m[1] = g),
            (m[2] = e),
            (m[3] = t),
            (m[4] = r),
            (m[5] = l),
            (m[6] = o),
            (m[7] = c))
          : ((e = m[2]), (t = m[3]), (r = m[4]), (l = m[5]), (o = m[6]), (c = m[7])),
        m[13] !== e?.length || m[14] !== g.hasNextPage || m[15] !== g.isError || m[16] !== g.isPending
          ? ((d =
              e?.length || g.isPending || g.isError || g.hasNextPage
                ? null
                : (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.forYou.noSavedProducts",
                      defaultMessage: "Save products to find them here",
                    }),
                  })),
            (m[13] = e?.length),
            (m[14] = g.hasNextPage),
            (m[15] = g.isError),
            (m[16] = g.isPending),
            (m[17] = d))
          : (d = m[17]),
        m[18] !== g
          ? ((p = g.hasNextPage
              ? (0, a.jsx)(u.$, {
                  color: "secondary",
                  className: "self-start",
                  disabled: g.isFetching,
                  loading: g.isFetchingNextPage,
                  onClick: () => void g.fetchNextPage({ cancelRefetch: !1 }),
                  children: (0, a.jsx)(i.A, {
                    id: "shopping.forYou.moreSavedProducts",
                    defaultMessage: "Load more saved products",
                  }),
                })
              : null),
            (m[18] = g),
            (m[19] = p))
          : (p = m[19]),
        m[20] !== t || m[21] !== r || m[22] !== l || m[23] !== o || m[24] !== c || m[25] !== d || m[26] !== p
          ? ((f = (0, a.jsxs)("section", { className: t, children: [r, l, o, c, d, p] })),
            (m[20] = t),
            (m[21] = r),
            (m[22] = l),
            (m[23] = o),
            (m[24] = c),
            (m[25] = d),
            (m[26] = p),
            (m[27] = f))
          : (f = m[27]),
        f
      )
    }
    function e2(e) {
      return (0, a.jsx)(e4, { entry: e }, e.node.id)
    }
    function e3(e) {
      return e.node.saved_entity?.saved_target.sidebar_params.category === "product_rationale_and_reviews"
    }
    function e4(e) {
      let t,
        r,
        l,
        i = (0, n.c)(11),
        { entry: o } = e,
        c = (0, s.gh)(U.GD),
        d = (0, s.gh)(eQ.oD),
        u = o.node.saved_entity,
        p = d.value.userId
      return null == u || null == p
        ? null
        : (i[0] !== u || i[1] !== c
            ? ((t = (e) => {
                let t = e?.currentTarget,
                  r = c.get(k.PO)
                ;(0, eZ.K)(c, u, "grid", () => {
                  let e = c.get(k.PO)
                  return (
                    t instanceof Node &&
                    t.isConnected &&
                    !e.authLoading &&
                    "chatgpt" === e.authMethod &&
                    !0 === e.hasChatGptToken &&
                    e.authenticatedAccountId === r.authenticatedAccountId &&
                    e.authenticatedUserId === r.authenticatedUserId
                  )
                })
              }),
              (i[0] = u),
              (i[1] = c),
              (i[2] = t))
            : (t = i[2]),
          i[3] !== d.value.accountId || i[4] !== u || i[5] !== p
            ? ((r = [
                {
                  key: "favorite",
                  render: () =>
                    (0, a.jsx)(O.ProductFavoriteAction, {
                      accountId: d.value.accountId,
                      userId: p,
                      conversationId: void 0,
                      messageId: void 0,
                      request: { saved_target: u.saved_target, display_data: u.display_data, origin: u.origin },
                      surface: "product_card",
                    }),
                },
              ]),
              (i[3] = d.value.accountId),
              (i[4] = u),
              (i[5] = p),
              (i[6] = r))
            : (r = i[6]),
          i[7] !== o || i[8] !== t || i[9] !== r
            ? ((l = (0, a.jsx)(eX.H$, { entry: o, onOpen: t, actions: r })),
              (i[7] = o),
              (i[8] = t),
              (i[9] = r),
              (i[10] = l))
            : (l = i[10]),
          l)
    }
    var e5 = r("ZZgR")
    function e6(e) {
      let t,
        r,
        s,
        c,
        d,
        p,
        f,
        m,
        g,
        h,
        _,
        x,
        y,
        b,
        v,
        N,
        j,
        w,
        C,
        A,
        T,
        k,
        E,
        I,
        S,
        P,
        M,
        R,
        O = (0, n.c)(100),
        { state: G, onLoad: Y, onSelect: L } = e,
        D = (0, o.A)(),
        [F, H] = (0, l.useState)(!1),
        [U, B] = (0, l.useState)("")
      O[0] !== G.profileTasks?.tasks
        ? ((t = G.profileTasks?.tasks ?? []), (O[0] = G.profileTasks?.tasks), (O[1] = t))
        : (t = O[1])
      let q = t
      if (
        O[2] !== D ||
        O[3] !== Y ||
        O[4] !== L ||
        O[5] !== F ||
        O[6] !== U ||
        O[7] !== G.loading ||
        O[8] !== G.loadingMore ||
        O[9] !== G.loadingProfileTasks ||
        O[10] !== G.page ||
        O[11] !== G.profileTasks ||
        O[12] !== G.profileTasksUnavailable ||
        O[13] !== G.refreshingGmail ||
        O[14] !== G.selectingProfile ||
        O[15] !== q
      ) {
        _ = Symbol.for("react.early_return_sentinel")
        e: {
          let e, t, n, l, o
          O[34] !== U
            ? ((e = (e) => `${e.task_id} ${e.schema_version}`.toLowerCase().includes(U.trim().toLowerCase())),
              (O[34] = U),
              (O[35] = e))
            : (e = O[35])
          let A = q.filter(e)
          if (G.profileTasksUnavailable) {
            _ = null
            break e
          }
          let T = G.loading || G.loadingMore || G.refreshingGmail || G.selectingProfile
          ;(O[36] !== G.page || O[37] !== G.profileTasks?.selected_task_id
            ? ((t = G.page?.snapshot_id ? G.page.dream_inputs?.find(e7)?.task_id : G.profileTasks?.selected_task_id),
              (O[36] = G.page),
              (O[37] = G.profileTasks?.selected_task_id),
              (O[38] = t))
            : (t = O[38]),
            (d = t),
            (h = "flex flex-col items-start gap-2"),
            (c = e5.A),
            (w = F),
            O[39] !== Y
              ? ((C = (e) => {
                  ;(H(e), e && (B(""), Y()))
                }),
                (O[39] = Y),
                (O[40] = C))
              : (C = O[40]),
            (p = T),
            (f = "panelWide"),
            (m = "max-w-[calc(100vw-2rem)]"),
            O[41] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(i.A, { id: "shopping.profileTasks.label", defaultMessage: "Shopping Profile task" })),
                (O[41] = n))
              : (n = O[41]),
            O[42] !== d
              ? ((l = d ? (0, a.jsx)("span", { className: "font-mono", children: d.slice(0, 8) }) : null),
                (O[42] = d),
                (O[43] = l))
              : (l = O[43]),
            O[44] !== T || O[45] !== l
              ? ((g = (0, a.jsxs)(u.$, { color: "secondary", disabled: T, children: [n, l] })),
                (O[44] = T),
                (O[45] = l),
                (O[46] = g))
              : (g = O[46]),
            (s = e5.G.Root),
            O[47] !== D
              ? ((N = D.formatMessage({
                  id: "shopping.profileTasks.listLabel",
                  defaultMessage: "Recent Shopping Profile tasks",
                })),
                (O[47] = D),
                (O[48] = N))
              : (N = O[48]),
            O[49] !== D
              ? ((o = D.formatMessage({
                  id: "shopping.profileTasks.search",
                  defaultMessage: "Search task ID or schema version",
                })),
                (O[49] = D),
                (O[50] = o))
              : (o = O[50]),
            O[51] !== U || O[52] !== o
              ? ((j = (0, a.jsx)(e5.G.Input, { value: U, onValueChange: B, placeholder: o })),
                (O[51] = U),
                (O[52] = o),
                (O[53] = j))
              : (j = O[53]),
            (r = e5.G.List),
            O[54] !== G.loadingProfileTasks
              ? ((x = G.loadingProfileTasks
                  ? (0, a.jsx)("p", {
                      className: "px-3 py-2 text-sm text-secondary",
                      role: "status",
                      children: (0, a.jsx)(i.A, {
                        id: "shopping.profileTasks.loading",
                        defaultMessage: "Loading tasks\u2026",
                      }),
                    })
                  : null),
                (O[54] = G.loadingProfileTasks),
                (O[55] = x))
              : (x = O[55]),
            O[56] !== G.loadingProfileTasks || O[57] !== G.profileTasks
              ? ((y =
                  G.loadingProfileTasks || G.profileTasks?.tasks.length !== 0
                    ? null
                    : (0, a.jsx)("p", {
                        className: "px-3 py-2 text-sm text-secondary",
                        children: (0, a.jsx)(i.A, {
                          id: "shopping.profileTasks.empty",
                          defaultMessage: "No saved Shopping Profile outputs found in recent history",
                        }),
                      })),
                (O[56] = G.loadingProfileTasks),
                (O[57] = G.profileTasks),
                (O[58] = y))
              : (y = O[58]),
            (b =
              !G.loadingProfileTasks && q.length > 0 && 0 === A.length
                ? (0, a.jsx)("p", {
                    className: "px-3 py-2 text-sm text-secondary",
                    role: "status",
                    children: (0, a.jsx)(i.A, {
                      id: "shopping.profileTasks.noMatches",
                      defaultMessage: "No matching tasks",
                    }),
                  })
                : null),
            (v = G.loadingProfileTasks
              ? null
              : A.map((e) =>
                  (0, a.jsx)(
                    e5.G.Item,
                    {
                      value: `${e.task_id} ${e.schema_version}`,
                      checked: e.task_id === d,
                      onSelect: () => {
                        ;(H(!1), L(e.task_id))
                      },
                      children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 flex-col gap-1 whitespace-normal",
                        children: [
                          (0, a.jsxs)("span", {
                            children: [
                              D.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                              e.task_id === q[0]?.task_id
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      " ",
                                      (0, a.jsx)(i.A, { id: "shopping.profileTasks.latest", defaultMessage: "Latest" }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className: "text-xs text-secondary",
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.profileTasks.signalCount",
                              defaultMessage: "{schema} \xb7 {count, plural, one {# signal} other {# signals}}",
                              values: { schema: e.schema_version, count: e.signal_count },
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "font-mono text-xs break-all text-secondary",
                            children: e.task_id,
                          }),
                        ],
                      }),
                    },
                    e.task_id,
                  ),
                )))
        }
        ;((O[2] = D),
          (O[3] = Y),
          (O[4] = L),
          (O[5] = F),
          (O[6] = U),
          (O[7] = G.loading),
          (O[8] = G.loadingMore),
          (O[9] = G.loadingProfileTasks),
          (O[10] = G.page),
          (O[11] = G.profileTasks),
          (O[12] = G.profileTasksUnavailable),
          (O[13] = G.refreshingGmail),
          (O[14] = G.selectingProfile),
          (O[15] = q),
          (O[16] = r),
          (O[17] = s),
          (O[18] = c),
          (O[19] = d),
          (O[20] = p),
          (O[21] = f),
          (O[22] = m),
          (O[23] = g),
          (O[24] = h),
          (O[25] = _),
          (O[26] = x),
          (O[27] = y),
          (O[28] = b),
          (O[29] = v),
          (O[30] = N),
          (O[31] = j),
          (O[32] = w),
          (O[33] = C))
      } else
        ((r = O[16]),
          (s = O[17]),
          (c = O[18]),
          (d = O[19]),
          (p = O[20]),
          (f = O[21]),
          (m = O[22]),
          (g = O[23]),
          (h = O[24]),
          (_ = O[25]),
          (x = O[26]),
          (y = O[27]),
          (b = O[28]),
          (v = O[29]),
          (N = O[30]),
          (j = O[31]),
          (w = O[32]),
          (C = O[33]))
      return _ !== Symbol.for("react.early_return_sentinel")
        ? _
        : (O[59] !== r || O[60] !== x || O[61] !== y || O[62] !== b || O[63] !== v
            ? ((A = (0, a.jsxs)(r, { children: [x, y, b, v] })),
              (O[59] = r),
              (O[60] = x),
              (O[61] = y),
              (O[62] = b),
              (O[63] = v),
              (O[64] = A))
            : (A = O[64]),
          O[65] !== s || O[66] !== A || O[67] !== N || O[68] !== j
            ? ((T = (0, a.jsxs)(s, { label: N, children: [j, A] })),
              (O[65] = s),
              (O[66] = A),
              (O[67] = N),
              (O[68] = j),
              (O[69] = T))
            : (T = O[69]),
          O[70] !== c ||
          O[71] !== p ||
          O[72] !== f ||
          O[73] !== m ||
          O[74] !== g ||
          O[75] !== T ||
          O[76] !== w ||
          O[77] !== C
            ? ((k = (0, a.jsx)(c, {
                open: w,
                onOpenChange: C,
                disabled: p,
                contentWidth: f,
                contentClassName: m,
                triggerButton: g,
                children: T,
              })),
              (O[70] = c),
              (O[71] = p),
              (O[72] = f),
              (O[73] = m),
              (O[74] = g),
              (O[75] = T),
              (O[76] = w),
              (O[77] = C),
              (O[78] = k))
            : (k = O[78]),
          O[79] !== G.selectingProfile
            ? ((E = G.selectingProfile
                ? (0, a.jsx)(i.A, {
                    id: "shopping.profileTasks.applying",
                    defaultMessage: "Checking task access\u2026",
                  })
                : null),
              (O[79] = G.selectingProfile),
              (O[80] = E))
            : (E = O[80]),
          O[81] !== d || O[82] !== G.loading || O[83] !== G.selectingProfile
            ? ((I =
                !G.selectingProfile && G.loading && d
                  ? (0, a.jsx)(i.A, {
                      id: "shopping.profileTasks.refreshing",
                      defaultMessage: "Loading recommendations and Profile for this task\u2026",
                    })
                  : null),
              (O[81] = d),
              (O[82] = G.loading),
              (O[83] = G.selectingProfile),
              (O[84] = I))
            : (I = O[84]),
          O[85] !== d || O[86] !== G.loading || O[87] !== G.selectingProfile
            ? ((S =
                G.selectingProfile || (G.loading && d)
                  ? null
                  : (0, a.jsx)(i.A, {
                      id: "shopping.profileTasks.help",
                      defaultMessage:
                        "Choose a saved profile to reload recommendations and Profile. Shadow tasks are supported. Your first load uses the latest task; later loads keep your selection.",
                    })),
              (O[85] = d),
              (O[86] = G.loading),
              (O[87] = G.selectingProfile),
              (O[88] = S))
            : (S = O[88]),
          O[89] !== E || O[90] !== I || O[91] !== S
            ? ((P = (0, a.jsxs)("p", { className: "text-sm text-secondary", role: "status", children: [E, I, S] })),
              (O[89] = E),
              (O[90] = I),
              (O[91] = S),
              (O[92] = P))
            : (P = O[92]),
          O[93] !== G.profileTaskError
            ? ((M = G.profileTaskError
                ? (0, a.jsxs)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: [
                      "list" === G.profileTaskError
                        ? (0, a.jsx)(i.A, {
                            id: "shopping.profileTasks.listError",
                            defaultMessage: "Tasks couldn't be loaded. Open the picker to retry.",
                          })
                        : null,
                      "not_applied" === G.profileTaskError
                        ? (0, a.jsx)(i.A, {
                            id: "shopping.profileTasks.notApplied",
                            defaultMessage: "This task couldn't be used for the feed. Choose another saved profile.",
                          })
                        : null,
                      "selection" === G.profileTaskError
                        ? (0, a.jsx)(i.A, {
                            id: "shopping.profileTasks.selectionError",
                            defaultMessage: "The selection couldn't be confirmed. Reopen the picker and try again.",
                          })
                        : null,
                    ],
                  })
                : null),
              (O[93] = G.profileTaskError),
              (O[94] = M))
            : (M = O[94]),
          O[95] !== h || O[96] !== k || O[97] !== P || O[98] !== M
            ? ((R = (0, a.jsxs)("div", { className: h, children: [k, P, M] })),
              (O[95] = h),
              (O[96] = k),
              (O[97] = P),
              (O[98] = M),
              (O[99] = R))
            : (R = O[99]),
          R)
    }
    function e7(e) {
      return null != e.task_id
    }
    let e8 = d.k5n(["for-you", "email", "saved", "profile", ...v]).catch("for-you"),
      e9 = (0, p._)(async () => (await r.e(398257).then(r.bind(r, "Atcs"))).ShoppingProfilePanel, {
        fallback: (0, a.jsx)("p", {
          role: "status",
          className: "text-sm text-secondary",
          children: (0, a.jsx)(i.A, {
            id: "shopping.profile.loading",
            defaultMessage: "Loading your shopper profile\u2026",
          }),
        }),
        errorFallback: (0, a.jsx)("p", {
          role: "alert",
          className: "text-sm text-secondary",
          children: (0, a.jsx)(i.A, {
            id: "shopping.profile.loadError",
            defaultMessage: "Your shopper profile couldn't be loaded. Please try again",
          }),
        }),
      })
    function te(e) {
      let t,
        r,
        d,
        p,
        g,
        h,
        _,
        x,
        y,
        b,
        N,
        j,
        w,
        C,
        A,
        T,
        k,
        E,
        I,
        S,
        P,
        M,
        R,
        O,
        G,
        Y,
        L,
        D,
        F,
        H = (0, n.c)(124),
        { accountId: U, userId: B } = e,
        q = (0, o.A)(),
        [z, $] = (0, c.ok)()
      H[0] !== U || H[1] !== B ? ((t = { accountId: U, userId: B }), (H[0] = U), (H[1] = B), (H[2] = t)) : (t = H[2])
      let W = (0, s.uO)(eY, t),
        V = (0, s.Ul)(W.state$)
      H[3] !== U || H[4] !== B ? ((r = { accountId: U, userId: B }), (H[3] = U), (H[4] = B), (H[5] = r)) : (r = H[5])
      let Q = (0, s.uO)(eM, r),
        X = (0, s.Ul)(Q.references$)
      H[6] !== z ? ((d = e8.parse(z.get("tab"))), (H[6] = z), (H[7] = d)) : (d = H[7])
      let Z = d
      H[8] !== Z ? ((p = v.find((e) => e === Z)), (H[8] = Z), (H[9] = p)) : (p = H[9])
      let J = p
      H[10] !== U || H[11] !== J || H[12] !== B
        ? ((g = { accountId: U, userId: B, category: J }), (H[10] = U), (H[11] = J), (H[12] = B), (H[13] = g))
        : (g = H[13])
      let ee = (0, s.uO)(K, g),
        et = (0, s.Ul)(J ? ee.state$ : null)
      H[14] !== $
        ? ((h = (e) => {
            $((t) => {
              let r = new URLSearchParams(t)
              return ("for-you" === e ? r.delete("tab") : r.set("tab", e), r)
            })
          }),
          (H[14] = $),
          (H[15] = h))
        : (h = H[15])
      let er = h,
        [es, el] = (0, l.useState)(null),
        [ei, eo] = (0, l.useState)(!1),
        ec = V.page,
        ed = es ?? ec?.preference ?? "",
        eu = ec?.gmail_state === "connected"
      H[16] !== eu || H[17] !== ec ? ((_ = eu || ea(ec)), (H[16] = eu), (H[17] = ec), (H[18] = _)) : (_ = H[18])
      let ep = _,
        ef = V.loading || V.loadingMore || V.refreshingGmail || V.selectingProfile
      H[19] !== et || H[20] !== ef
        ? ((x = ef || (null != et && Object.values(et).some(tn))), (H[19] = et), (H[20] = ef), (H[21] = x))
        : (x = H[21])
      let em = x,
        eg = "email" !== Z && "saved" !== Z && "profile" !== Z
      H[22] !== eu || H[23] !== ec
        ? ((y = eu ? (ec.email_offers ?? []) : []), (H[22] = eu), (H[23] = ec), (H[24] = y))
        : (y = H[24])
      let eh = y
      H[25] !== X ? ((b = new Set(X.map(ta))), (H[25] = X), (H[26] = b)) : (b = H[26])
      let e_ = b
      H[27] !== Q
        ? ((N = (e) => {
            try {
              ;(Q.toggle(e), eo(!1))
            } catch {
              eo(!0)
            }
          }),
          (H[27] = Q),
          (H[28] = N))
        : (N = H[28])
      let ex = N
      H[29] !== ep || H[30] !== ee || H[31] !== J || H[32] !== W || H[33] !== ed
        ? ((j = () => {
            ;(ep && W.refresh(ed), J && ee.refresh())
          }),
          (H[29] = ep),
          (H[30] = ee),
          (H[31] = J),
          (H[32] = W),
          (H[33] = ed),
          (H[34] = j))
        : (j = H[34])
      let ey = j
      H[35] !== ee || H[36] !== W || H[37] !== ef
        ? ((w = () => {
            ;(ef && W.cancel(), ee.cancel())
          }),
          (H[35] = ee),
          (H[36] = W),
          (H[37] = ef),
          (H[38] = w))
        : (w = H[38])
      let eb = w
      ;(H[39] !== W || H[40] !== ed
        ? ((C = () => void (ed.trim() ? W.refresh(ed) : W.loadFirst())), (H[39] = W), (H[40] = ed), (H[41] = C))
        : (C = H[41]),
        H[42] !== W ? ((A = () => void W.checkGmail()), (H[42] = W), (H[43] = A)) : (A = H[43]),
        H[44] !== er ? ((T = () => er("email")), (H[44] = er), (H[45] = T)) : (T = H[45]),
        H[46] !== eb || H[47] !== V || H[48] !== C || H[49] !== A || H[50] !== T
          ? ((k = (0, a.jsx)(eA, { state: V, onLoad: C, onCheck: A, onCancel: eb, onOpenEmail: T })),
            (H[46] = eb),
            (H[47] = V),
            (H[48] = C),
            (H[49] = A),
            (H[50] = T),
            (H[51] = k))
          : (k = H[51]))
      let ev = k
      return (
        H[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(i.A, { id: "shopping.forYou.title", defaultMessage: "Shopping" })), (H[52] = E))
          : (E = H[52]),
        H[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = [
              { key: "for-you", name: (0, a.jsx)(i.A, { id: "shopping.forYou.tab", defaultMessage: "For you" }) },
              ...v.map(tr),
              {
                key: "email",
                name: (0, a.jsx)(i.A, { id: "shopping.forYou.emailTab", defaultMessage: "Email offers" }),
              },
              { key: "saved", name: (0, a.jsx)(i.A, { id: "shopping.forYou.savedTab", defaultMessage: "Saved" }) },
              {
                key: "profile",
                highlighted: !0,
                name: (0, a.jsx)(i.A, { id: "shopping.profile.tab", defaultMessage: "Profile" }),
              },
            ]),
            (H[53] = I))
          : (I = H[53]),
        H[54] !== er || H[55] !== Z
          ? ((S = (0, a.jsx)(f.uC, {
              inset: !1,
              children: (0, a.jsx)(m.t, { variant: "browse", scrollable: !0, selectedKey: Z, onSelect: er, tabs: I }),
            })),
            (H[54] = er),
            (H[55] = Z),
            (H[56] = S))
          : (S = H[56]),
        H[57] !== eg || H[58] !== em || H[59] !== ep || H[60] !== q || H[61] !== ed || H[62] !== ey
          ? ((P = eg
              ? {
                  id: "shopping-for-you-preference",
                  autoFocus: !1,
                  maxLength: 2e3,
                  searchQuery: ed,
                  onSearchQueryChange: el,
                  label: q.formatMessage({
                    id: "shopping.forYou.preferenceLabel",
                    defaultMessage: "Shopping preference",
                  }),
                  placeholder: q.formatMessage({
                    id: "shopping.forYou.preferencePlaceholder",
                    defaultMessage: "What are you shopping for?",
                  }),
                  onKeyDown: (e) => {
                    "Enter" === e.key && !em && ep && (e.preventDefault(), ey())
                  },
                  trailingControl: (0, a.jsx)(u.$, {
                    color: "primary",
                    disabled: em || !ep,
                    onClick: ey,
                    children: (0, a.jsx)(i.A, { id: "shopping.forYou.search", defaultMessage: "Search deals" }),
                  }),
                }
              : void 0),
            (H[57] = eg),
            (H[58] = em),
            (H[59] = ep),
            (H[60] = q),
            (H[61] = ed),
            (H[62] = ey),
            (H[63] = P))
          : (P = H[63]),
        H[64] !== W || H[65] !== ec?.preference || H[66] !== es || H[67] !== V || H[68] !== Z
          ? ((M =
              ("for-you" === Z || "profile" === Z) &&
              (0, a.jsx)(e6, {
                state: V,
                onLoad: () => void W.loadProfileTasks(),
                onSelect: (e) => void W.selectProfileTask(e, es ?? ec?.preference ?? void 0),
              })),
            (H[64] = W),
            (H[65] = ec?.preference),
            (H[66] = es),
            (H[67] = V),
            (H[68] = Z),
            (H[69] = M))
          : (M = H[69]),
        H[70] !== U || H[71] !== ec || H[72] !== er || H[73] !== B || H[74] !== Z
          ? ((R =
              "profile" === Z
                ? (0, a.jsx)(
                    e9,
                    { page: ec, onShowForYou: () => er("for-you") },
                    `${U}:${B}:${ec?.snapshot_id ?? "entry"}`,
                  )
                : null),
            (H[70] = U),
            (H[71] = ec),
            (H[72] = er),
            (H[73] = B),
            (H[74] = Z),
            (H[75] = R))
          : (R = H[75]),
        H[76] !== ei
          ? ((O = ei
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(i.A, {
                    id: "shopping.forYou.saveError",
                    defaultMessage: "Your saved items couldn't be updated on this device",
                  }),
                })
              : null),
            (H[76] = ei),
            (H[77] = O))
          : (O = H[77]),
        H[78] !== eg ||
        H[79] !== em ||
        H[80] !== ep ||
        H[81] !== eb ||
        H[82] !== ee ||
        H[83] !== et ||
        H[84] !== J ||
        H[85] !== ev ||
        H[86] !== W ||
        H[87] !== ec ||
        H[88] !== ey ||
        H[89] !== V ||
        H[90] !== Z
          ? ((G =
              eg &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  ep || J
                    ? (0, a.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                          (0, a.jsx)(u.$, {
                            color: "secondary",
                            disabled: em,
                            onClick: ey,
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.refresh",
                              defaultMessage: "Refresh deals",
                            }),
                          }),
                          V.recommendationsUpdated
                            ? (0, a.jsx)(u.$, {
                                color: "secondary",
                                disabled: em,
                                onClick: ey,
                                children: (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.updated",
                                  defaultMessage: "Show updated deals",
                                }),
                              })
                            : null,
                          em
                            ? (0, a.jsx)(u.$, {
                                color: "secondary",
                                onClick: eb,
                                children: (0, a.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                              })
                            : null,
                          V.loading || V.loadingMore
                            ? (0, a.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.loading",
                                  defaultMessage: "Loading your recommendations\u2026",
                                }),
                              })
                            : null,
                          V.refreshingGmail
                            ? (0, a.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.email.loading",
                                  defaultMessage: "Finding email offers\u2026",
                                }),
                              })
                            : null,
                          V.pageError
                            ? (0, a.jsx)("p", {
                                role: "alert",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(i.A, {
                                  id: "shopping.forYou.failed",
                                  defaultMessage: "We couldn't load these deals. Please try again",
                                }),
                              })
                            : null,
                          V.gmailError
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("p", {
                                    role: "alert",
                                    className: "text-sm text-secondary",
                                    children: (0, a.jsx)(i.A, {
                                      id: "shopping.forYou.gmailFailed",
                                      defaultMessage: "Gmail could not be updated. Please try again",
                                    }),
                                  }),
                                  (0, a.jsx)(u.$, {
                                    color: "secondary",
                                    disabled: V.refreshingGmail,
                                    onClick: () => void W.refreshGmail(),
                                    children: (0, a.jsx)(i.A, {
                                      id: "shopping.forYou.gmailRetry",
                                      defaultMessage: "Retry Gmail",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          V.cancelled
                            ? (0, a.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                              })
                            : null,
                        ],
                      })
                    : null,
                  (0, a.jsx)(
                    en,
                    {
                      state: V,
                      category: J,
                      connectionCard: ev,
                      onLoadMore: () => void W.loadMore(),
                      categoryDeals: et ? { state: et, onRetry: (e) => void ee.retry(e) } : void 0,
                    },
                    `${Z}:${ec?.snapshot_id ?? "entry"}`,
                  ),
                  ep && ec && "for-you" === Z && (ec.shopping_profile?.length ?? 0) > 0
                    ? (0, a.jsxs)("details", {
                        className: "text-sm text-secondary",
                        children: [
                          (0, a.jsx)("summary", {
                            className: "cursor-interaction select-none",
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.profile",
                              defaultMessage: "How we picked these",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.inferred",
                              defaultMessage:
                                "Inferred from available context. Exploration topics are suggestions, not confirmed interests",
                            }),
                          }),
                          (0, a.jsx)("ul", {
                            className: "list-inside list-disc",
                            children: ec.shopping_profile?.map(tt),
                          }),
                        ],
                      })
                    : null,
                ],
              })),
            (H[78] = eg),
            (H[79] = em),
            (H[80] = ep),
            (H[81] = eb),
            (H[82] = ee),
            (H[83] = et),
            (H[84] = J),
            (H[85] = ev),
            (H[86] = W),
            (H[87] = ec),
            (H[88] = ey),
            (H[89] = V),
            (H[90] = Z),
            (H[91] = G))
          : (G = H[91]),
        H[92] !== eu ||
        H[93] !== ev ||
        H[94] !== W ||
        H[95] !== eh ||
        H[96] !== ec ||
        H[97] !== e_ ||
        H[98] !== V.gmailError ||
        H[99] !== V.refreshingGmail ||
        H[100] !== V.selectingProfile ||
        H[101] !== ex ||
        H[102] !== Z
          ? ((Y =
              "email" === Z &&
              (eu
                ? (0, a.jsx)(eq, {
                    offers: eh,
                    unavailable: "unavailable" === ec.email_offers_status,
                    updatedAt: ec.refreshed_at,
                    busy: V.refreshingGmail || V.selectingProfile,
                    error: V.gmailError,
                    savedIds: e_,
                    onToggleSaved: ex,
                    onRefresh: () => void W.refreshGmail(),
                    onStop: W.cancel,
                  })
                : ev)),
            (H[92] = eu),
            (H[93] = ev),
            (H[94] = W),
            (H[95] = eh),
            (H[96] = ec),
            (H[97] = e_),
            (H[98] = V.gmailError),
            (H[99] = V.refreshingGmail),
            (H[100] = V.selectingProfile),
            (H[101] = ex),
            (H[102] = Z),
            (H[103] = Y))
          : (Y = H[103]),
        H[104] !== U ||
        H[105] !== eh ||
        H[106] !== X ||
        H[107] !== Q ||
        H[108] !== er ||
        H[109] !== ex ||
        H[110] !== B ||
        H[111] !== Z
          ? ((L =
              "saved" === Z &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(e0, { accountId: U, userId: B }),
                  X.length > 0
                    ? (0, a.jsxs)("section", {
                        className: "flex flex-col gap-4",
                        children: [
                          (0, a.jsx)("h2", {
                            className: "heading-md",
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailTitle",
                              defaultMessage: "Saved email offers",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, a.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailRetention",
                              defaultMessage: "Email offer references are saved on this device for 30 days",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: X.map((e) => {
                              let t = eh.find((t) => t.id === e.id || t.source_id === e.id)
                              return t
                                ? (0, a.jsx)(e$, { offer: t, saved: !0, onToggleSaved: () => ex(t) }, e.id)
                                : (0, a.jsxs)(
                                    "article",
                                    {
                                      className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
                                      children: [
                                        (0, a.jsx)("p", {
                                          children: (0, a.jsx)(i.A, {
                                            id: "shopping.forYou.savedEmailPlaceholder",
                                            defaultMessage: "Refresh Gmail to view this saved offer",
                                          }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                          color: "secondary",
                                          onClick: () => er("email"),
                                          children: (0, a.jsx)(i.A, {
                                            id: "shopping.forYou.openEmail",
                                            defaultMessage: "View email offers",
                                          }),
                                        }),
                                        (0, a.jsx)(u.$, {
                                          color: "ghost",
                                          onClick: () => {
                                            try {
                                              ;(Q.remove(e.id), eo(!1))
                                            } catch {
                                              eo(!0)
                                            }
                                          },
                                          children: (0, a.jsx)(i.A, {
                                            id: "shopping.forYou.email.unsave",
                                            defaultMessage: "Remove",
                                          }),
                                        }),
                                      ],
                                    },
                                    e.id,
                                  )
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              })),
            (H[104] = U),
            (H[105] = eh),
            (H[106] = X),
            (H[107] = Q),
            (H[108] = er),
            (H[109] = ex),
            (H[110] = B),
            (H[111] = Z),
            (H[112] = L))
          : (L = H[112]),
        H[113] !== M || H[114] !== R || H[115] !== O || H[116] !== G || H[117] !== Y || H[118] !== L
          ? ((D = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-6", children: [M, R, O, G, Y, L] })),
            (H[113] = M),
            (H[114] = R),
            (H[115] = O),
            (H[116] = G),
            (H[117] = Y),
            (H[118] = L),
            (H[119] = D))
          : (D = H[119]),
        H[120] !== S || H[121] !== P || H[122] !== D
          ? ((F = (0, a.jsx)(f.Ql, {
              headerVariant: "compact",
              contentWidth: "wide",
              title: E,
              controls: S,
              search: P,
              children: D,
            })),
            (H[120] = S),
            (H[121] = P),
            (H[122] = D),
            (H[123] = F))
          : (F = H[123]),
        F
      )
    }
    function tt(e, t) {
      return (0, a.jsx)("li", { children: e.topic }, t)
    }
    function tr(e) {
      return { key: e, name: (0, a.jsx)(i.A, { ...J[e] }) }
    }
    function ta(e) {
      return e.id
    }
    function tn(e) {
      return e.loading
    }
  },
  Rt8w(e, t, r) {
    var a,
      n =
        (((a = {}).CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED = "CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY = "CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT = "CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT = "CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION = "CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION"),
        (a.CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION = "CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a)
    r.d(
      t,
      {},
      {
        _X: { $type: "protobuf_analytics_events.v1.ChatgptShoppingBrowseScrolled" },
        _m: n,
        iZ: { $type: "protobuf_analytics_events.v1.ChatgptShoppingLinkAction" },
      },
    )
  },
  L6k2(e, t, r) {
    let a = [137, 80, 78, 71, 13, 10, 26, 10],
      n = "OpenAI-Presentation"
    function s(e) {
      if (null == e || "object" != typeof e) return
      let { slideCount: t, backgroundColor: r } = e
      if ("number" == typeof t && Number.isSafeInteger(t) && !(t < 1))
        return {
          slideCount: t,
          ...("string" == typeof r &&
          r.length <= 96 &&
          /^(?:#[\da-f]{3}(?:[\da-f]{3})?|rgba?\(\s*(?:\d+(?:\.\d+)?\s*,\s*){2}\d+(?:\.\d+)?(?:\s*,\s*(?:\d+(?:\.\d+)?|\.\d+))?\s*\))$/i.test(
            r,
          )
            ? { backgroundColor: r }
            : {}),
        }
    }
    r.d(
      t,
      {},
      {
        dA: s,
        q$: function (e) {
          var t
          if (
            !(
              (t = e).length >= 33 &&
              a.every((e, r) => t[r] === e) &&
              13 === new DataView(t.buffer, t.byteOffset).getUint32(8) &&
              73 === t[12] &&
              72 === t[13] &&
              68 === t[14] &&
              82 === t[15]
            ) ||
            e.length < 45
          )
            return
          let r = Math.min(e.length, 301),
            l = new DataView(e.buffer, e.byteOffset, r),
            i = 45 + l.getUint32(33)
          if (
            0x74455874 !== l.getUint32(37) ||
            i > r ||
            (function (e) {
              let t = 0xffffffff
              for (let r of e) {
                t ^= r
                for (let e = 0; e < 8; e++) t = (t >>> 1) ^ (1 & t ? 0xedb88320 : 0)
              }
              return (0xffffffff ^ t) >>> 0
            })(e.subarray(37, i - 4)) !== l.getUint32(i - 4)
          )
            return
          let o = new TextDecoder().decode(e.subarray(41, i - 4))
          if (o.startsWith(`${n}\0`))
            try {
              return s(JSON.parse(o.slice(n.length + 1)))
            } catch {
              return
            }
        },
      },
    )
  },
  LQko(e, t, r) {
    var a = r("rvFo"),
      n = r("kK7d"),
      s = r("rGp2"),
      l = r("o6hs")
    function i(e, t) {
      return {
        queryKey: ["mcp-settings", "app-connect", "tos", e, t],
        staleTime: a.D.FIVE_MINUTES,
        queryFn: ({ signal: r }) =>
          n.CodexRequest.safeGet("/aip/connectors/{connector_id}/tos", {
            surface: "connector_setup",
            parameters: { path: { connector_id: e } },
            additionalHeaders: { [s.ok]: t },
            signal: r,
          }),
      }
    }
    r.d(
      t,
      {},
      {
        MZ: function (e) {
          return e.some((e) => "app-data-sharing" === e.id)
        },
        bO: function (e, t, r) {
          let a = (0, l.Ye)(t, r)
          ;(e.prefetchQuery((0, s.rJ)(t, { productSku: a?.productSku })),
            e.prefetchQuery(i(t, a?.productSku ?? (0, s.MR)())))
        },
        kp: i,
        zu: function (e, t, r) {
          return {
            queryKey: ["app-connect-mfa-requirement", t, r, e],
            enabled: null != t && null != r,
            staleTime: 0,
            retry: !1,
            refetchOnMount: "always",
            refetchOnWindowFocus: "always",
            queryFn: async ({ signal: a }) => {
              if (null == t || null == r) throw Error("Connection requires an active account")
              return (
                await n.CodexRequest.safeGet("/aip/connectors/{connector_id}/mfa_requirement", {
                  surface: "connector_setup",
                  parameters: { path: { connector_id: e } },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: r },
                  signal: a,
                })
              ).requirement
            },
          }
        },
      },
    )
  },
  lmaZ(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("oyxz"),
      l = r("JNtf"),
      i = r("mUDD"),
      o = r("X3K1")
    function c(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-b border-default py-2.5 last:border-none",
          children: [
            (0, a.jsx)(o.X, { className: "w-1/2" }),
            (0, a.jsx)(o.P, { lines: 2, seed: `app-connect-description-${e}`, size: "sm" }),
          ],
        },
        e,
      )
    }
    r.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            r,
            d,
            u,
            p,
            f,
            m,
            g,
            h,
            _,
            x = (0, n.c)(12),
            { embedded: y } = e,
            b = void 0 !== y && y ? "h2" : l.L3
          return (
            x[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(s.A, { id: "beacons.connectApp.loading.title", defaultMessage: "Connect app" })),
                (x[0] = t))
              : (t = x[0]),
            x[1] !== b
              ? ((r = (0, a.jsx)(b, { className: "sr-only", children: t })), (x[1] = b), (x[2] = r))
              : (r = x[2]),
            x[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, a.jsx)("div", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(s.A, {
                    id: "beacons.connectApp.loading.description",
                    defaultMessage: "Loading connection details\u2026",
                  }),
                })),
                (x[3] = d))
              : (d = x[3]),
            x[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)("div", {
                  className: "size-14 overflow-hidden rounded-xl",
                  children: (0, a.jsx)(o.X, { size: "fill" }),
                })),
                (x[4] = u))
              : (u = x[4]),
            x[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, a.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, a.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                  ],
                })),
                (x[5] = p))
              : (p = x[5]),
            x[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u,
                    p,
                    (0, a.jsx)("div", {
                      className: "size-14 overflow-hidden rounded-xl",
                      children: (0, a.jsx)(o.X, { size: "fill" }),
                    }),
                  ],
                })),
                (x[6] = f))
              : (f = x[6]),
            x[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex shrink-0 flex-col items-center gap-4",
                  children: [
                    f,
                    (0, a.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-2",
                      children: [
                        (0, a.jsx)("div", { className: "h-6 w-1/2", children: (0, a.jsx)(o.X, { size: "fill" }) }),
                        (0, a.jsx)(o.X, { className: "w-1/3", size: "sm" }),
                      ],
                    }),
                  ],
                })),
                (x[7] = m))
              : (m = x[7]),
            x[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, a.jsx)("div", {
                  className: "min-h-0 overflow-hidden rounded-2xl border border-default px-4 py-2",
                  children: [0, 1, 2].map(c),
                })),
                (x[8] = g))
              : (g = x[8]),
            x[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, a.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-6",
                  "aria-hidden": !0,
                  children: [
                    m,
                    g,
                    (0, a.jsx)("div", {
                      className: "mt-auto h-9 shrink-0 overflow-hidden rounded-full",
                      children: (0, a.jsx)(o.X, { size: "fill" }),
                    }),
                  ],
                })),
                (x[9] = h))
              : (h = x[9]),
            x[10] !== r
              ? ((_ = (0, a.jsxs)(i.R4, {
                  className: "gap-6 overflow-hidden px-6 pt-8 pb-6 select-none",
                  size: "full",
                  children: [r, d, h],
                })),
                (x[10] = r),
                (x[11] = _))
              : (_ = x[11]),
            _
          )
        },
      },
    )
  },
  QSD9(e, t, r) {
    var a = r("SBbD"),
      n = r("CMv2")
    r.d(
      t,
      {},
      {
        B: function (e) {
          return (0, a.S)({
            ...e,
            getAvailableCompanions: (t) => (0, n.Nf)({ ...t, connectors: e.connectors }),
            getCompanionConnectorIds: (t) => (0, n.sR)(t, e.connectors),
          })
        },
      },
    )
  },
  bjbP(e, t, r) {
    var a = r("ASxG")
    let n = a
        .YjP()
        .trim()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      s = a.Ikc({ tenantId: n, connectionName: a.YjP().min(1) })
    r.d(
      t,
      {},
      {
        $3: n,
        Ci: function (e) {
          return (
            "OAI" === e.developer_type &&
            ["onenote", "outlook", "power_bi", "sharepoint", "teams"].includes(e.service) &&
            e.supported_auth.some((e) => "OAUTH" === e.type)
          )
        },
        qB: s,
      },
    )
  },
  PraM(e, t, r) {
    var a = r("SBbD"),
      n = r("pxeg")
    r.d(
      t,
      {},
      {
        I: function (e) {
          return (0, a.S)({ ...e, getAvailableCompanions: n.qX, getCompanionConnectorIds: n.HD })
        },
      },
    )
  },
  pxeg(e, t, r) {
    var a = r("BTha"),
      n = r("K0Re")
    let s = "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      l = [
        { connectorId: "connector_4aaab2856305417b993eca9a216aaf6e", kind: "outlook-email" },
        { connectorId: "connector_e6a7394682e24467ac68c60696f275a4", kind: "outlook-calendar" },
        { connectorId: s, kind: "sharepoint" },
        { connectorId: "connector_246af0940da3457da0e751171dc1ce60", kind: "teams" },
      ],
      i = new Map(l.map((e) => [e.connectorId, e]))
    r.d(
      t,
      {},
      {
        HD: function (e) {
          return (0, n.X)(l, e)
        },
        Vk: function ({ connectorId: e, disableExposureLog: t = !1, statsigClient: r, planType: n }) {
          return !!i.has(e) && (0, a.R)(r, "enable-bundled-apps-msft", n, { disableExposureLog: t })
        },
        XI: function (e) {
          return i.get(e)
        },
        oI: s,
        qX: function ({ availableAppIds: e, companionConnectorIds: t, companionConnectors: r, companionLinks: a }) {
          return (0, n.k)({
            availableAppIds: e,
            companionConnectorIds: t,
            companionConnectors: r,
            companionLinks: a,
            connectorById: i,
          })
        },
        zd: l,
      },
    )
  },
  SBbD(e, t, r) {
    var a = r("DBCl"),
      n = r("tl5a"),
      s = r("rGp2"),
      l = r("S7fj"),
      i = r("BQbE"),
      o = r("pDRe"),
      c = r("uc7r"),
      d = r("OiCI"),
      u = r("SPnB"),
      p = r("rvFo")
    r.d(
      t,
      {},
      {
        S: async function ({
          scope: e,
          appId: t,
          browserAccountId: r,
          freshLinkChecks: f = !1,
          getAvailableCompanions: m,
          getCompanionConnectorIds: g,
          hostId: h,
          primaryLink: _,
          productSku: x,
          queryClient: y,
        }) {
          if (null != _) return []
          let b = (0, c.dZ)({
            accountId: r ?? (0, d.RS)(e) ?? e.get(u.chatGptAuthenticatedAccountId$),
            userId: e.get(u.chatGptAuthenticatedUserId$),
            productSku: x,
          })
          if (!b.enabled) return []
          let v = g(t),
            [N, j, w, C] = await Promise.all([
              y.fetchQuery({ ...b, staleTime: f ? 0 : p.D.FIVE_MINUTES }).catch(() => void 0),
              (0, l.N)(h)
                ? y
                    .fetchQuery(
                      (0, o.ps)({
                        userId: e.get(u.chatGptAuthenticatedUserId$),
                        accountId: r ?? (0, d.RS)(e) ?? null,
                        productSku: x,
                        appIds: v,
                        enabled: !0,
                      }),
                    )
                    .then(l.k)
                    .catch(() => new Set())
                : y
                    .fetchQuery(
                      (0, i.getAppsReadQueryOptions)({
                        scope: e,
                        appIds: v,
                        browserAccountId: r,
                        hostId: h,
                        queryClient: y,
                        supportsAppRead: (0, a.JFB)(e.get(n.B0, h), "appRead"),
                      }),
                    )
                    .then((e) => new Set(e.map(({ id: e }) => e)))
                    .catch(() => new Set()),
              y.fetchQuery((0, s.rJ)(t, { productSku: x })).catch(() => null),
              Promise.all(v.map((e) => y.fetchQuery((0, s.rJ)(e)).catch(() => null))),
            ])
          return null == N || N.some((e) => e.connector_id === t) || null == w
            ? []
            : m({
                availableAppIds: j,
                companionConnectorIds: v,
                companionConnectors: C,
                companionLinks: v.map((e) => N.find((t) => t.connector_id === e) ?? null),
              })
        },
      },
    )
  },
  yxN2(e, t, r) {
    var a = r("QosV"),
      n = r("irkb"),
      s = r("qmMi"),
      l = r("zd8w"),
      i = r("Wf1j"),
      o = r("Ywss"),
      c = r("rGp2"),
      d = r("o6hs"),
      u = r("JAom"),
      p = r("LQko"),
      f = r("Rvvc"),
      m = r("CMv2"),
      g = r("QSD9"),
      h = r("bjbP"),
      _ = r("pxeg"),
      x = r("PraM")
    r("OiCI")
    var y = r("OAko"),
      b = r("Ot7V"),
      v = r("SGsN"),
      N = r("Rbbe"),
      j = r("OWtl"),
      w = r("kfGJ"),
      C = r("hZax")
    function A(e) {
      ;(0, b.E0)({ disposition: void 0, href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function T() {
      return null
    }
    function k(e) {
      let t = e?.trim()
      t && (0, b.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function E(e) {
      return "apps-tab" === e.kind && null != e.reauthLinkId
    }
    function I(e) {
      return (
        ("apps-tab" === e.kind && null == e.reauthLinkId) ||
        ("plugin-install" === e.kind &&
          null == e.origin &&
          null == e.pendingElicitationReply &&
          e.installOptions?.pendingElicitationReply == null)
      )
    }
    function S(e) {
      return null != e
        ? `${e.pathname}${e.search}${e.hash}`
        : `${window.location.pathname}${window.location.search}${window.location.hash}`
    }
    r.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            r,
            b,
            P,
            M,
            R,
            O,
            G,
            Y,
            L,
            D,
            F,
            H = (0, a.c)(74)
          H[0] !== e ? ((t = void 0 === e ? {} : e), (H[0] = e), (H[1] = t)) : (t = H[1])
          let {
              hostId: U,
              marketplaceAnalytics: B,
              oauthReferrer: q,
              onConnectStarted: z,
              onConnectFailed: $,
              onExternalConnectStarted: K,
            } = t,
            W = (0, l.useContext)(o.di),
            V = (0, s.gh)(j.u),
            Q = (0, i.A)(),
            X = (0, n.jE)(),
            Z = U ?? w.fI,
            J = (0, C.Zj)("2761268526"),
            ee = (0, C.Zj)("3304228433"),
            et = (0, C.AS)()
          H[2] === Symbol.for("react.memo_cache_sentinel") ? ((r = { preview: !1 }), (H[2] = r)) : (r = H[2])
          let { data: er } = (0, y.YL)(void 0, r),
            {
              clearPendingAppConnect: ea,
              getPendingAppConnectForApp: en,
              isAppConnectPending: es,
              markAppConnectOAuthPending: el,
            } = (0, u.ZN)(),
            [ei, eo] = (0, l.useState)(null),
            [ec, ed] = (0, l.useState)(),
            [eu, ep] = (0, l.useState)(),
            [ef, em] = (0, l.useState)(null)
          H[3] !== en || H[4] !== Z
            ? ((b = (e, t) => en(e, Z, null == t || ("apps-tab" === t.kind && null == t.reauthLinkId) ? I : t)),
              (H[3] = en),
              (H[4] = Z),
              (H[5] = b))
            : (b = H[5])
          let eg = b
          if (
            H[6] !== ea ||
            H[7] !== ei?.id ||
            H[8] !== eu ||
            H[9] !== er?.plan_type ||
            H[10] !== en ||
            H[11] !== eg ||
            H[12] !== Z ||
            H[13] !== Q ||
            H[14] !== es ||
            H[15] !== J ||
            H[16] !== ee ||
            H[17] !== W?.location ||
            H[18] !== el ||
            H[19] !== B ||
            H[20] !== q ||
            H[21] !== $ ||
            H[22] !== z ||
            H[23] !== K ||
            H[24] !== ef ||
            H[25] !== X ||
            H[26] !== V ||
            H[27] !== et
          ) {
            let e, t, r, a, n
            ;((O = async (e, t) => {
              let {
                  appConnectOptions: r,
                  marketplaceAnalytics: a,
                  addAccountAttempt: n,
                  forceInApp: s,
                  isAddingAccount: l,
                  hasExistingAccount: i,
                  reauthLinkId: o,
                  googleOAuthBundlePrepared: u,
                  microsoftOAuthBundlePrepared: y,
                  mustShowInstallationInterstitial: b,
                } = void 0 === t ? {} : t,
                N = void 0 !== s && s,
                j = void 0 !== l && l,
                w = void 0 !== i && i
              if (null != ef) return
              let C = null == o && (!e.isAccessible || j) ? eg(e.id) : null,
                E = (0, d.Ye)(
                  e.id,
                  r ??
                    (null == o
                      ? C?.appConnectOptions
                      : eg(e.id, { kind: "apps-tab", reauthLinkId: o })?.appConnectOptions),
                ),
                I = null == q ? E : { connectorId: e.id, ...E, oauthReferrer: E?.oauthReferrer ?? q },
                S = C?.marketplaceAnalytics ?? a ?? ("function" == typeof B ? B() : B),
                P = z?.(e, S) ?? S
              if (!J && !N && null == C) {
                ;(k((0, c.Cj)(e, I, P?.installAttemptId)), K?.(e))
                return
              }
              ;(0, p.bO)(X, e.id, I)
              let R = (0, m.W9)({ planType: er?.plan_type, connectorId: e.id, statsigClient: et }),
                O = null != (0, m.w8)(e.id, R),
                G = (0, _.Vk)({ planType: er?.plan_type, connectorId: e.id, statsigClient: et })
              if (
                !N &&
                !(void 0 !== u && u) &&
                !(void 0 !== y && y) &&
                null == C &&
                !0 !== e.isAccessible &&
                (O || G)
              ) {
                em(e.id)
                let t = { scope: V, appId: e.id, browserAccountId: void 0, hostId: Z, queryClient: X }
                await (O ? (0, g.B)({ ...t, connectors: R }) : (0, x.I)(t))
                  .catch((t) => {
                    throw ($?.(e, P, "request_failed"), t)
                  })
                  .finally(() => {
                    em(null)
                  })
              }
              if (null != C || (!1 === b && (!N || j) && (!e.isAccessible || j) && (j || (!O && !G)))) {
                em(e.id)
                let t = await X.fetchQuery((0, c.rJ)(e.id, { productSku: I?.productSku }))
                  .catch(T)
                  .then(async (t) =>
                    null != t &&
                    "DISABLED_BY_ADMIN" !== t.status &&
                    !(j && w && ee && (0, h.Ci)(t)) &&
                    null == (0, d.GE)(e.id, I) &&
                    (j || !(0, c.B7)(t, I?.authTypeOverride)) &&
                    (0, c.Yo)(t, I?.authTypeOverride) &&
                    "OAUTH" === (0, c.NT)(t, I?.authTypeOverride)
                      ? (0, c.CI)({
                          scope: V,
                          allowBrowserFallback: !1,
                          app: e,
                          appConnectOptions: I,
                          connector: t,
                          installAttemptId: P?.installAttemptId,
                          requestedCompanionConnectorIds: C?.requestedCompanionConnectorIds,
                          onOAuthStarted: (r, a) => {
                            M({
                              app: e,
                              oauthFlowCorrelationId: a?.oauthFlowCorrelationId,
                              marketplaceAnalytics: P,
                              pastedLinkProductExperience: C?.pastedLinkProductExperience,
                              pluginInstallOAuthState:
                                C?.pluginInstallOAuthState ??
                                (C?.resumeTarget.kind === "plugin-install" ? C.oauthState : void 0),
                              previousOAuthState: C?.oauthState,
                              requestedCompanionConnectorIds: C?.requestedCompanionConnectorIds,
                              resumeTarget: C?.resumeTarget ?? { kind: "apps-tab", addAccountAttempt: n },
                              isGithubConnector: e.id === f.qD || t.template_id === f.Bk || "github" === t.service,
                              redirectUrl: r,
                              returnTo: I?.redirectAfter ?? C?.returnTo,
                              appConnectOptions: I,
                            })
                          },
                          openInBrowser: A,
                          queryClient: X,
                        })
                      : null == t
                        ? null
                        : { kind: "requires-connection-form" },
                  )
                  .finally(() => {
                    em(null)
                  })
                if (t?.kind === "oauth-started") return void V.get(v.Id).info((0, c.oH)({ intl: Q }))
                if (
                  ((null == t || "failed" === t.kind) && $?.(e, P, null == t ? "request_failed" : "connect_failed"),
                  null != C && t?.kind !== "requires-connection-form" && t?.kind !== "requires-mfa")
                )
                  return void V.get(v.Id).danger((0, c.S4)(Q), {
                    errorAnalytics: { toastId: "useAppConnectFlow.handleConnectApp" },
                  })
              }
              ;(ep(P), ed(I), eo(e))
            }),
              H[35] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = () => {
                    ;(eo(null), ed(void 0), ep(void 0))
                  }),
                  (H[35] = e))
                : (e = H[35]),
              (P = e),
              H[36] !== ei?.id || H[37] !== eg || H[38] !== Z || H[39] !== es || H[40] !== ef
                ? ((t = (e, t) => ef === e || ei?.id === e || es(e, t ?? I, Z) || null != eg(e, t)),
                  (H[36] = ei?.id),
                  (H[37] = eg),
                  (H[38] = Z),
                  (H[39] = es),
                  (H[40] = ef),
                  (H[41] = t))
                : (t = H[41]),
              (Y = t),
              H[42] !== ea || H[43] !== eg || H[44] !== Z || H[45] !== Q || H[46] !== V
                ? ((r = (e, t) => {
                    let r = eg(e, t)
                    if (null == r) return
                    let a =
                      r.pluginInstallOAuthState ?? ("plugin-install" === r.resumeTarget.kind ? r.oauthState : void 0)
                    ;(null != a &&
                      ((0, N.$4)(V, a)
                        ? V.get(v.Id).danger((0, c.ue)(Q), {
                            errorAnalytics: { toastId: "useAppConnectFlow.handleAppConnected" },
                          })
                        : (0, N.PA)(V, a)),
                      ea({ oauthState: r.oauthState, hostId: Z }))
                  }),
                  (H[42] = ea),
                  (H[43] = eg),
                  (H[44] = Z),
                  (H[45] = Q),
                  (H[46] = V),
                  (H[47] = r))
                : (r = H[47]),
              (R = r),
              H[48] !== ea || H[49] !== eg || H[50] !== Z || H[51] !== Q || H[52] !== K || H[53] !== V
                ? ((a = (e, t) => {
                    let r = eg(e.id, t)
                    if (null != r) {
                      let e =
                        r.pluginInstallOAuthState ?? ("plugin-install" === r.resumeTarget.kind ? r.oauthState : void 0)
                      ;(null != e &&
                        (0, N.$4)(V, e) &&
                        V.get(v.Id).danger((0, c.ue)(Q), {
                          errorAnalytics: { toastId: "useAppConnectFlow.handleExternalConnectStarted" },
                        }),
                        ea({ oauthState: r.oauthState, hostId: Z }))
                    }
                    K?.(e)
                  }),
                  (H[48] = ea),
                  (H[49] = eg),
                  (H[50] = Z),
                  (H[51] = Q),
                  (H[52] = K),
                  (H[53] = V),
                  (H[54] = a))
                : (a = H[54]),
              (G = a),
              H[55] !== en || H[56] !== Z || H[57] !== es
                ? ((n = (e) => es(e, E, Z) || null != en(e, Z, E)),
                  (H[55] = en),
                  (H[56] = Z),
                  (H[57] = es),
                  (H[58] = n))
                : (n = H[58]),
              (L = n),
              (M = (e) => {
                let {
                    app: t,
                    appConnectOptions: r,
                    isGithubConnector: a,
                    marketplaceAnalytics: n,
                    pastedLinkProductExperience: s,
                    pluginInstallOAuthState: l,
                    previousOAuthState: i,
                    oauthFlowCorrelationId: o,
                    oauthReferrer: c,
                    requestedCompanionConnectorIds: d,
                    redirectUrl: u,
                    returnTo: p,
                    resumeTarget: f,
                  } = e,
                  m = n ?? eu ?? ("function" == typeof B ? B() : B),
                  g = null == i && (null == f || "apps-tab" === f.kind) ? eg(t.id, f) : null,
                  h = i ?? g?.oauthState,
                  _ = g?.resumeTarget ?? f,
                  x = el({
                    app: t,
                    oauthFlowCorrelationId: o,
                    oauthReferrer: c,
                    appConnectOptions: r ?? g?.appConnectOptions,
                    hostId: Z,
                    isGithubConnector: a,
                    marketplaceAnalytics: g?.marketplaceAnalytics ?? m,
                    pastedLinkProductExperience: s ?? g?.pastedLinkProductExperience,
                    pluginInstallOAuthState:
                      l ??
                      g?.pluginInstallOAuthState ??
                      (g?.resumeTarget.kind === "plugin-install" ? g.oauthState : void 0),
                    requestedCompanionConnectorIds: d ?? g?.requestedCompanionConnectorIds,
                    redirectUrl: u,
                    returnTo:
                      _?.kind === "apps-tab" && null != _.reauthLinkId && null != _.addAccountAttempt
                        ? (g?.returnTo ?? S(W?.location))
                        : (p ?? g?.returnTo ?? S(W?.location)),
                    resumeTarget: _,
                  })
                return (null != x && null != h && h !== x && ea({ oauthState: h, hostId: Z }), x)
              }),
              (H[6] = ea),
              (H[7] = ei?.id),
              (H[8] = eu),
              (H[9] = er?.plan_type),
              (H[10] = en),
              (H[11] = eg),
              (H[12] = Z),
              (H[13] = Q),
              (H[14] = es),
              (H[15] = J),
              (H[16] = ee),
              (H[17] = W?.location),
              (H[18] = el),
              (H[19] = B),
              (H[20] = q),
              (H[21] = $),
              (H[22] = z),
              (H[23] = K),
              (H[24] = ef),
              (H[25] = X),
              (H[26] = V),
              (H[27] = et),
              (H[28] = P),
              (H[29] = M),
              (H[30] = R),
              (H[31] = O),
              (H[32] = G),
              (H[33] = Y),
              (H[34] = L))
          } else ((P = H[28]), (M = H[29]), (R = H[30]), (O = H[31]), (G = H[32]), (Y = H[33]), (L = H[34]))
          return (
            H[59] !== ea || H[60] !== Z
              ? ((D = (e) => {
                  ea({ ...e, hostId: Z })
                }),
                (H[59] = ea),
                (H[60] = Z),
                (H[61] = D))
              : (D = H[61]),
            H[62] !== P ||
            H[63] !== ei ||
            H[64] !== eu ||
            H[65] !== ec ||
            H[66] !== M ||
            H[67] !== R ||
            H[68] !== O ||
            H[69] !== G ||
            H[70] !== Y ||
            H[71] !== L ||
            H[72] !== D
              ? ((F = {
                  connectingApp: ei,
                  connectingOptions: ec,
                  connectingMarketplaceAnalytics: eu,
                  clearConnectingApp: P,
                  clearPendingAppConnect: D,
                  handleAppConnected: R,
                  handleAppConnectOAuthStarted: M,
                  handleConnectApp: O,
                  handleExternalConnectStarted: G,
                  handleOpenAppUrl: k,
                  isAppConnectPending: Y,
                  isAppReauthPending: L,
                }),
                (H[62] = P),
                (H[63] = ei),
                (H[64] = eu),
                (H[65] = ec),
                (H[66] = M),
                (H[67] = R),
                (H[68] = O),
                (H[69] = G),
                (H[70] = Y),
                (H[71] = L),
                (H[72] = D),
                (H[73] = F))
              : (F = H[73]),
            F
          )
        },
      },
    )
  },
  JIuM(e, t, r) {
    var a = r("QosV"),
      n = r("zHp1"),
      s = r("kK7d")
    let l = ["/backend-api/estuary/content", "/backend-api/estuary/public_content/enc"],
      i = {
        cacheKey: ["profile-picture"],
        resolveAsset: (e) => Promise.resolve({ kind: "available", downloadUrl: e, requestHeaders: { ...(0, s.Jc)() } }),
      }
    function o(e, t) {
      let r,
        s,
        l = (0, a.c)(7),
        { allowExternalUrls: o } = void 0 === t ? {} : t
      l[0] !== e ? ((r = c(e) ? e : ""), (l[0] = e), (l[1] = r)) : (r = l[1])
      let d = r,
        { dataUrl: u, isError: p, src: f } = (0, n.vM)(d, i)
      if (d) {
        let e,
          t = u ?? f
        return (
          l[2] !== p || l[3] !== t ? ((e = { isError: p, src: t }), (l[2] = p), (l[3] = t), (l[4] = e)) : (e = l[4]),
          e
        )
      }
      let m = void 0 === o || o ? (e ?? null) : null
      return (l[5] !== m ? ((s = { isError: !1, src: m }), (l[5] = m), (l[6] = s)) : (s = l[6]), s)
    }
    function c(e) {
      if (!e) return !1
      try {
        let t = new URL(e),
          r = t.host.toLowerCase(),
          a = "chatgpt.com" === r || (r.endsWith(".chatgpt.com") && !r.startsWith("ab."))
        return "https:" === t.protocol && a && l.some((e) => t.pathname === e || t.pathname.startsWith(`${e}/`))
      } catch {
        return !1
      }
    }
    r.d(
      t,
      {},
      {
        Dv: function (e, t) {
          return o(e, t).src
        },
        _w: o,
        gj: async function (e, t) {
          return c(t) ? (0, n.il)(e, t, i) : null
        },
      },
    )
  },
  zHQF(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("qmMi"),
      l = r("oyxz"),
      i = r("Sm6l"),
      o = r("OWtl"),
      c = r("KV28")
    function d() {
      let e,
        t = (0, n.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(l.A, {
              id: "chatgpt.ads.business_agent.organic.unavailable",
              defaultMessage: "This client or account can\u2019t open this business chat",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    r.d(
      t,
      {},
      {
        F: d,
        S: function (e) {
          let t,
            r,
            u,
            p,
            f = (0, n.c)(7),
            m = (0, s.gh)(o.u)
          return (
            f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(d, {})), (f[0] = t)) : (t = f[0]),
            f[1] !== e || f[2] !== m
              ? ((r =
                  "retry" in e
                    ? e.retry
                    : () => {
                        m.query.invalidate(c.Dg, e.target)
                      }),
                (f[1] = e),
                (f[2] = m),
                (f[3] = r))
              : (r = f[3]),
            f[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)(l.A, {
                  id: "chatgpt.entity.businessProfile.chatInit.retry",
                  defaultMessage: "Try again",
                })),
                (f[4] = u))
              : (u = f[4]),
            f[5] !== r
              ? ((p = (0, a.jsxs)("div", {
                  role: "alert",
                  className: "flex items-center justify-center gap-2 text-sm",
                  children: [t, (0, a.jsx)(i.$, { color: "secondary", onClick: r, children: u })],
                })),
                (f[5] = r),
                (f[6] = p))
              : (p = f[6]),
            p
          )
        },
      },
    )
  },
  EY6e(e, t, r) {
    var a = r("S2r0"),
      n = r("suf3"),
      s = r("DBCl"),
      l = r("SPnB"),
      i = r("hrUs"),
      o = r("smHt"),
      c = r("vldH"),
      d = r("OOaz")
    let u = ["chatgpt-file-preview"]
    r.d(
      t,
      {},
      {
        f: async function ({
          scope: e,
          conversationId: t,
          downloadIntent: r = !1,
          gizmoId: p,
          sharedConversationId: f,
          postId: m,
          requestSource: g,
          signal: h,
          maxBytes: _,
          versionNumber: x,
          modifiedAt: y,
          readBlob: b,
          target: v,
        }) {
          let N = (e, a) =>
            b?.(e, _) ??
            (0, c.fetchChatGptFileBlob)({
              conversationId: t,
              downloadIntent: r,
              gizmoId: p,
              effectiveGizmoId: a,
              sharedConversationId: f,
              postId: m,
              requestSource: g,
              signal: e,
              maxBytes: _,
              target: v,
            })
          h?.throwIfAborted()
          let j = e.get(l.chatGptAuthenticatedAccountId$),
            w = e.get(l.o8)
          if (
            null == j ||
            null == w ||
            r ||
            null != f ||
            null != m ||
            "mounted-library" === v.type ||
            "page-file" === v.type ||
            null == v.fileId ||
            null != (0, i.Um)(v.fileId)
          )
            return N(h)
          let C = (t = h) => {
              if ((t?.throwIfAborted(), e.get(l.chatGptAuthenticatedAccountId$) !== j || e.get(l.o8) !== w))
                throw new DOMException("File preview identity changed", "AbortError")
            },
            A = (e) =>
              (0, c.lb)({
                conversationId: null == t || (0, d.YA)(t) ? void 0 : t,
                fileId: v.fileId,
                gizmoId: p,
                libraryFileId: v.libraryFileId,
                signal: e,
              }),
            T = x || y,
            k = "file-id" === v.type && null != v.libraryFileId && (0, s.PKK)(v.libraryFileId) ? v.libraryFileId : null,
            E = null != k && null != T ? [...u, j, w, "library", k, T] : null
          if (null != E) {
            let t = e.queryClient
                .getQueryCache()
                .findAll({ queryKey: E })
                .find(
                  (e) => null != e.state.data && !e.state.isInvalidated && Date.now() - e.state.dataUpdatedAt < 3e5,
                ),
              r = null == t ? void 0 : e.queryClient.getQueryData(t.queryKey)
            if (null != r) {
              if ((C(), null != _ && r.blob.size > _)) throw new o.m5(r.blob.size)
              return r.blob
            }
          }
          let I = null == E ? [...u, j, w, t, p, v, x, _] : [...E, _],
            S = e.queryClient.getQueryState(I),
            P = S?.data
          if (
            null != S &&
            null != P &&
            null == E &&
            !P.requireFreshAccess &&
            !S.isInvalidated &&
            Date.now() - S.dataUpdatedAt < 3e4
          )
            return (
              e.queryClient
                .fetchQuery({
                  queryKey: ["chatgpt-file-preview-context", ...I.slice(1)],
                  queryFn: ({ signal: e }) => A(e),
                  staleTime: 0,
                  gcTime: 0,
                  retry: !1,
                })
                .then((t) => {
                  let r = e.queryClient.getQueryState(I)
                  r?.fetchStatus === "idle" &&
                    r.data === P &&
                    r.dataUpdatedAt === S.dataUpdatedAt &&
                    (t.requireFreshAccess || t.gizmoId !== P.gizmoId) &&
                    e.queryClient.removeQueries({ queryKey: I, exact: !0 })
                })
                .catch(() => void 0),
              C(),
              P.blob
            )
          let M = (0, a.j)({
              queryKey: I,
              queryFn: async ({ signal: e }) => {
                let t = null == b ? await A(e) : { gizmoId: p ?? void 0, requireFreshAccess: !0 }
                C(e)
                let r = await N(e, t.gizmoId ?? null)
                return (C(e), { ...t, blob: r })
              },
              staleTime: 3e4 * (null == E),
              gcTime: null == E ? 3e4 : 3e5,
              retry: !1,
            }),
            R = new n.$(e.queryClient, { ...M, enabled: !1 }).subscribe(() => {}),
            O = (0, s.udX)(),
            G = () => O.reject(h?.reason)
          h?.addEventListener("abort", G, { once: !0 })
          try {
            let t = await Promise.race([e.queryClient.fetchQuery(M), O.promise])
            return (
              t.requireFreshAccess && null == E && e.queryClient.removeQueries({ queryKey: I, exact: !0 }),
              (function (e) {
                let t = 0,
                  r = e.queryClient.getQueryCache()
                for (let a of r
                  .findAll({ queryKey: u })
                  .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)) {
                  let n = e.queryClient.getQueryData(a.queryKey)
                  null != n && (t + n.blob.size > s.jQ ? r.remove(a) : (t += n.blob.size))
                }
              })(e),
              C(),
              t.blob
            )
          } finally {
            ;(h?.removeEventListener("abort", G), R())
          }
        },
      },
    )
  },
  Zr0J(e, t, r) {
    var a = r("EA6X"),
      n = r("D015"),
      s = r("AuIy"),
      l = r("ASxG"),
      i = r("yGJW"),
      o = r("OMIV"),
      c = r("fUon"),
      d = r("MrGp"),
      u = r("xof2"),
      p = r("kOsy")
    function f(e, t, r) {
      let a = r.productReference,
        i = r.messageId,
        o = null == i ? void 0 : e.get(d.Jv, r.conversationId)?.[i]?.message,
        c = (0, s.Lv)(o?.metadata?.model_dil),
        p = l.aig().safeParse(a?.start_idx),
        f = p.success ? (0, n.At)(p.data) : void 0,
        g = [t.id, t.product_id].find((e) => "string" == typeof e && "" !== e.trim())?.trim()
      return {
        conversationId: e.get(d.jS, r.conversationId) ?? void 0,
        messageId: i,
        assistantMessageId: i,
        turnOrdinal: (0, u.y7)(e, r.conversationId, i),
        contentReferenceStartIndex: f,
        contentReferenceType: m(a),
        isGenui:
          (0, s.Lv)(c?.dil)?.type != null || o?.metadata?.model_dil_v2 != null || o?.metadata?.genui_refresh != null,
        entityId: g,
        parentContext: { entityId: g, entityCategory: "product", contentReferenceStartIndex: f, messageId: i },
      }
    }
    function m(e) {
      switch (e?.type) {
        case "product":
          if ("hero" === e.render_as) return "hero_product_entity"
          if ("block" === e.render_as) return "rich_product_entity"
          return "product_entity"
        case "product_entity":
          return "table" === e.render_as ? "comparison_table_product_entity" : "product_entity"
        case "explore_more":
          return "products"
        case "products":
        case "product_group":
          return e.type
        default:
          return
      }
    }
    function g(e, t, r) {
      if (null == t) return !1
      let a = null == r ? -1 : t.contentReferences.indexOf(r),
        n = t.contentReferenceMessageIds?.[a] ?? t.messageId
      return null != n && e.get(d.Jv, t.conversationId)?.[n]?.message?.metadata?.mercury_message === !0
    }
    function h(
      e,
      t,
      r,
      s,
      l,
      o = r.productEngagementSurfaceLocation === a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
        ? "shopping_browse"
        : "response",
    ) {
      if (e.get(i.YV).isChatgptBrowserReplacement) {
        let a = "shopping_browse" === o ? { type: "products", start_idx: 0 } : r.productReference
        ;(0, c.d)(e, r, a, t, "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED", s, o)
      }
      let { entityId: d, parentContext: p, ...m } = f(e, t, r)
      null != (l instanceof Element ? l.closest("img") : null) && "response" === o
        ? (0, u.dz)(e, {
            ...m,
            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
            surfaceLocation: a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
            imageAffordance: a.CK.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GROUP_TILE,
            imageIndex: (0, n.At)(s ?? 0),
            parentContext: p,
            tags: [],
          })
        : (0, u.tA)(e, {
            ...m,
            conversationId: r.conversationId,
            contentReferenceType: m.contentReferenceType ?? "unrecognized",
            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
            surfaceLocation:
              "shopping_browse" === o
                ? a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
                : a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
            entityAffordance: a.YY.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
            entityId: d,
            entityCategory: "product",
          })
    }
    function _(e, t, r, n, s, l, i, o, c) {
      if (null == r.productReference) return
      let { entityId: d, ...m } = f(e, t, r),
        g = r.productReference?.render_as === "table" ? "product" : r.productReference?.type
      ;((0, u.qJ)(e, {
        ...m,
        contentReferenceType: o ?? ("string" == typeof g ? g : void 0),
        actionType: s,
        surfaceLocation: i,
        linkType: "CHATGPT_LINK_TYPE_PRODUCT_OFFER",
        linkAffordance: l,
        url: r.shouldBlockExternalEgress ? void 0 : n,
      }),
        i !== a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR &&
          (0, p.E)(
            e,
            r,
            t,
            c,
            "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" === s ? "show" : "click",
            i === a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE,
          ))
    }
    r.d(
      t,
      {},
      {
        Cw: g,
        Ks: function (e, t, r, n, s, l) {
          ;(h(e, t, r, n, s),
            _(
              e,
              t,
              r,
              l,
              "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              r.productReference?.type === "product_entity" && "table" !== r.productReference.render_as
                ? a.Bw.CHATGPT_LINK_AFFORDANCE_TEXT
                : a.Bw.CHATGPT_LINK_AFFORDANCE_CARD,
              a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              void 0,
              n,
            ))
        },
        T: m,
        dL: f,
        u0: h,
        uu: function (e, t, r, n = a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE, s) {
          if (
            r.productReference?.type === "product" &&
            "hero" === r.productReference.render_as &&
            !g(e, r, r.productReference)
          )
            return
          let l = e.get(o.M9)?.getLayer("2128165686").get("disable_pdp_for_direct_link", !1) ?? !1
          if (!l && null != t.offers) return
          let i = l
              ? (t.offers?.find((e) => !0 === e.available && e.url?.trim()) ?? t.offers?.find((e) => e.url?.trim()))
              : void 0,
            c = i?.url?.trim() || t.url?.trim()
          c &&
            _(
              e,
              t,
              r,
              c,
              "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN",
              r.productReference?.type === "product_entity" && "table" !== r.productReference.render_as
                ? a.Bw.CHATGPT_LINK_AFFORDANCE_TEXT
                : a.Bw.CHATGPT_LINK_AFFORDANCE_CARD,
              n,
              void 0,
              s,
            )
        },
        zX: _,
      },
    )
  },
  fUon(e, t, r) {
    var a = r("tBe6"),
      n = r("D015"),
      s = r("yGJW"),
      l = r("DIH2"),
      i = r("MrGp")
    function o(e, t, r, d, u, p, f = "response") {
      let m
      if (null == t || null == r) return
      let g = e.get(s.YV).isChatgptBrowserReplacement,
        h = "response" === f && ("product" === r.type || "table" === r.render_as),
        _ = null != t.messageId && !t.messageId.startsWith("WEB:"),
        x = !c(r)
      if (x && !(g && _)) return
      let y = t.contentReferences.indexOf(r),
        b = x ? t.messageId : (t.contentReferenceMessageIds?.[y] ?? t.messageId)
      if (null == b || b.startsWith("WEB:")) return
      let v = x ? void 0 : (0, l.Lv)(d.analytics_meta),
        N = (e) => (null != v && Object.hasOwn(v, e) ? String(v[e]) : void 0),
        j = N("action"),
        w = new Map([
          ["show", "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW"],
          ["click", "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK"],
          ["hover", "CHATGPT_CONTENT_REFERENCE_ACTION_HOVER"],
        ]),
        C = N("type") ?? ("string" == typeof r.type ? r.type : void 0),
        A =
          (!x &&
            "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN" === u &&
            ["product", "products", "product_entity"].includes(C ?? "") &&
            !t.shouldBlockExternalEgress &&
            (N("offer_url") || d.url || N("site_url") || N("merchant_url"))) ||
          void 0
      ;((g && _) || (!g && "shopping_browse" === f)) &&
        ((m = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE"),
        "shopping_browse" === f
          ? (m = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_BROWSE")
          : "explore_more" === r.type && (m = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_PREVIEW"))
      let T = "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN" === u,
        k = u,
        E = T ? "search_content_reference_shown" : "search_content_reference_clicked"
      ;(x &&
        h &&
        (k = T
          ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN"
          : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_CLICKED"),
        x && h && (E = T ? "chatgpt_shopping_content_reference_shown" : "chatgpt_shopping_content_reference_clicked"))
      let I = x ? void 0 : C
      ;(x && h && (I = "product"),
        (0, s.yy)(e, a.qX, {
          eventType: k,
          shoppingContext: m,
          productId: d.id ?? void 0,
          productEventUuid: d.product_event_uuid ?? void 0,
          productIndex: h || "product_entity" === r.type || null == p ? void 0 : (0, n.At)(p + 1),
          contentReferenceStartIndex: "number" == typeof r.start_idx ? (0, n.At)(r.start_idx) : void 0,
          contentReferenceEndIndex: h && "number" == typeof r.end_idx ? (0, n.At)(r.end_idx) : void 0,
          renderAs:
            h && ("hero" === r.render_as || "block" === r.render_as || "table" === r.render_as) ? r.render_as : void 0,
          hasPopularTag:
            h || "product_entity" !== r.type
              ? void 0
              : (d.popularity_metadata?.product_tags?.includes("popular") ?? !1),
          legacyStatsigEventName: e.get(s.YV).isChatgptBrowserReplacement ? E : void 0,
          action: w.get(j ?? ""),
          conversationId: N("conversation_id") ?? e.get(i.jS, t.conversationId) ?? void 0,
          messageId: N("message_id") ?? b,
          contentReferenceType: I,
          ...(void 0 === A ? {} : { url: A }),
          category: N("category"),
          ctaType: N("cta_type"),
          linkType: N("link_type"),
          widgetName: N("widget_name"),
          businessId: N("business_id"),
          sectionLocation: N("section_location"),
          followupSource: N("followup_source"),
        }))
    }
    function c(e) {
      return (
        "products" === e.type ||
        "product_group" === e.type ||
        ("product_entity" === e.type && "table" !== e.render_as) ||
        "explore_more" === e.type
      )
    }
    r.d(
      t,
      {},
      {
        _: function (e, t, r, a, n, s, l) {
          if (
            null == t ||
            null == r ||
            (!c(r) && "product" !== r.type && "product_entity" !== r.type) ||
            !1 === t.trackShownImpressions
          )
            return
          let i = t.contentReferences.indexOf(r),
            d = t.contentReferenceMessageIds?.[i] ?? t.messageId
          if (null == d || d.startsWith("WEB:")) return
          let u = JSON.stringify([
            d,
            r.start_idx,
            r.type,
            a.id,
            ...("product_entity" === r.type ? [] : [a.analytics_meta, a.product_event_uuid, a.title, a.url, n]),
          ])
          s.has(u) ||
            (s.add(u),
            l?.(),
            o(e, { ...t, messageId: d }, r, a, "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN", n))
        },
        d: o,
      },
    )
  },
  sWz1(e, t, r) {
    var a = r("qmMi"),
      n = r("OWtl"),
      s = r("g2p6")
    let l = (0, a.bD)(n.u, (e) => null),
      i = (0, a.i1)(n.u, (e, { get: t }) => {
        let r = t(l, e)
        return r?.accountId === t(s.Sk) && r?.isCurrent?.(t) !== !1 ? r : null
      })
    r.d(
      t,
      {},
      {
        G: function (e, t, r) {
          e.set(l, t, r)
        },
        X: i,
      },
    )
  },
  rWfF(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("qmMi"),
      l = r("zd8w"),
      i = r("OWtl"),
      o = r("Zr0J"),
      c = r("TUMj"),
      d = r("VBQw")
    r.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            r,
            u,
            p,
            f,
            m,
            g,
            h,
            _,
            x,
            y,
            b,
            v,
            N,
            j,
            w,
            C,
            A,
            T = (0, n.c)(46)
          T[0] !== e
            ? (({
                product: g,
                reference: _,
                imageAnalytics: r,
                hasFallbackImage: t,
                loadTimeoutMs: u,
                onLoad: m,
                onError: f,
                src: x,
                alt: y,
                loading: p,
                ...h
              } = e),
              (T[0] = e),
              (T[1] = t),
              (T[2] = r),
              (T[3] = u),
              (T[4] = p),
              (T[5] = f),
              (T[6] = m),
              (T[7] = g),
              (T[8] = h),
              (T[9] = _),
              (T[10] = x),
              (T[11] = y))
            : ((t = T[1]),
              (r = T[2]),
              (u = T[3]),
              (p = T[4]),
              (f = T[5]),
              (m = T[6]),
              (g = T[7]),
              (h = T[8]),
              (_ = T[9]),
              (x = T[10]),
              (y = T[11]))
          let k = void 0 === y ? "" : y,
            E = (0, s.gh)(i.u),
            I = (0, c.Rn)(),
            S = (0, l.useRef)(null),
            P = (0, l.useRef)(null),
            M = (0, l.useRef)(void 0),
            R = (0, l.useRef)(void 0)
          T[12] !== r || T[13] !== g || T[14] !== _ || T[15] !== E || T[16] !== x || T[17] !== I
            ? ((b = () => ({
                ...r,
                isShoppingResearch:
                  _?.type === "product" && "block" !== r.surface ? (0, o.Cw)(E, I, _) : r.isShoppingResearch,
                product: g,
                productId: g.id ?? "",
                imageUrl: x,
                isVirtualTryOnImage: g.shopping_vto?.generated_images?.some((e) => e.vto_image_url === x),
              })),
              (T[12] = r),
              (T[13] = g),
              (T[14] = _),
              (T[15] = E),
              (T[16] = x),
              (T[17] = I),
              (T[18] = b))
            : (b = T[18])
          let O = b
          T[19] !== O || T[20] !== E
            ? ((v = () => (0, d.QN)(E, O())), (T[19] = O), (T[20] = E), (T[21] = v))
            : (v = T[21])
          let G = (0, l.useEffectEvent)(v)
          return (
            T[22] !== u || T[23] !== p || T[24] !== G
              ? ((N = () => {
                  if (null == u || P.current === S.current) return
                  let e = !1,
                    t = () => {
                      e || P.current === S.current || ((e = !0), (M.current = setTimeout(() => G(), u)))
                    }
                  return (
                    "lazy" === p && null != S.current && "u" > typeof IntersectionObserver
                      ? ((R.current = new IntersectionObserver((e) => {
                          let [r] = e
                          r.isIntersecting && (R.current?.disconnect(), t())
                        })),
                        R.current.observe(S.current))
                      : t(),
                    () => {
                      ;(clearTimeout(M.current), R.current?.disconnect())
                    }
                  )
                }),
                (T[22] = u),
                (T[23] = p),
                (T[24] = G),
                (T[25] = N))
              : (N = T[25]),
            T[26] !== u || T[27] !== p || T[28] !== x
              ? ((j = [x, u, p]), (T[26] = u), (T[27] = p), (T[28] = x), (T[29] = j))
              : (j = T[29]),
            (0, l.useEffect)(N, j),
            T[30] !== O || T[31] !== m || T[32] !== E
              ? ((w = (e) => {
                  ;((P.current = e.currentTarget),
                    clearTimeout(M.current),
                    R.current?.disconnect(),
                    (0, d.kE)(E, O()),
                    m?.(e))
                }),
                (T[30] = O),
                (T[31] = m),
                (T[32] = E),
                (T[33] = w))
              : (w = T[33]),
            T[34] !== O || T[35] !== t || T[36] !== f || T[37] !== E
              ? ((C = (e) => {
                  ;((P.current = e.currentTarget), clearTimeout(M.current), R.current?.disconnect())
                  let r = (function (e) {
                    try {
                      if ("u" < typeof performance || "function" != typeof performance.getEntriesByName) return
                      for (let t of performance.getEntriesByName(e.currentSrc || e.src, "resource").toReversed())
                        if ("resource" === t.entryType && "responseStatus" in t && "number" == typeof t.responseStatus)
                          return t.responseStatus
                    } catch {}
                  })(e.currentTarget)
                  ;(t
                    ? (0, d.kE)(E, { ...O(), imageFetchResponseStatus: r })
                    : (0, d.ZA)(E, O(), e, { imageFetchResponseStatus: r }),
                    f?.(e))
                }),
                (T[34] = O),
                (T[35] = t),
                (T[36] = f),
                (T[37] = E),
                (T[38] = C))
              : (C = T[38]),
            T[39] !== k || T[40] !== p || T[41] !== h || T[42] !== x || T[43] !== w || T[44] !== C
              ? ((A = (0, a.jsx)("img", { ref: S, ...h, alt: k, src: x, loading: p, onLoad: w, onError: C }, x)),
                (T[39] = k),
                (T[40] = p),
                (T[41] = h),
                (T[42] = x),
                (T[43] = w),
                (T[44] = C),
                (T[45] = A))
              : (A = T[45]),
            A
          )
        },
      },
    )
  },
  VBQw(e, t, r) {
    var a = r("ASxG"),
      n = r("PFjh"),
      s = r("OMIV")
    let l = "product_image.render_opportunity",
      i = new WeakMap()
    function o(e) {
      let t = i.get(e.node)
      return (null == t && ((t = { attempts: new Set(), failures: new Set() }), i.set(e.node, t)), t)
    }
    function c({ product: e, productId: t, citationType: r, surface: a }) {
      return JSON.stringify([t || (e.product_lookup_key?.data ? e.product_lookup_key : e.url || e.title), r, a])
    }
    function d(
      e,
      {
        product: t,
        productId: r,
        imageUrl: n,
        citationType: l,
        surface: i,
        isShoppingResearch: o,
        isVirtualTryOnImage: c = !1,
      },
    ) {
      let p = (function (e) {
          if (!e) return ""
          try {
            return new URL(e).hostname
          } catch {
            return ""
          }
        })(n),
        f = "images.openai.com" === p,
        m = f
          ? (function (e) {
              if (!e) return ""
              try {
                let { pathname: t } = new URL(e),
                  r = t.split("/").filter(Boolean),
                  a = []
                for (let e of r) {
                  if (e.length > 16 || a.length >= 2) break
                  a.push(e)
                }
                if (0 === a.length) return ""
                return a.join("/") + (a.length > 1 ? "/" : "")
              } catch {
                return ""
              }
            })(n)
          : "",
        g = e.get(s.M9)?.getContext().user,
        h = g?.country,
        _ = (function () {
          let e = {}
          if ("u" < typeof navigator) return e
          if (
            ("boolean" == typeof navigator.onLine && (e.client_online = navigator.onLine),
            !("connection" in navigator) || !navigator.connection)
          )
            return e
          let { connection: t } = navigator
          "string" == typeof t.effectiveType &&
            t.effectiveType.length > 0 &&
            (e.client_effective_connection_type = t.effectiveType)
          let r = u(t.rtt)
          void 0 !== r && (e.client_rtt_ms = r)
          let a = u(t.downlink)
          return (
            void 0 !== a && (e.client_downlink_mbps = a),
            "boolean" == typeof t.saveData && (e.client_save_data = t.saveData),
            e
          )
        })(),
        x = (function (e) {
          let t = { image_resource_timing_available: !1 }
          if (!e || "u" < typeof performance || "function" != typeof performance.getEntriesByName) return t
          try {
            var r
            let a = (function (e) {
              let t = performance.getEntriesByName(e, "resource")
              for (let e = t.length - 1; e >= 0; e -= 1) {
                var r
                let a = t[e]
                if (((r = a), "resource" === r.entryType)) return a
              }
            })(e)
            if (!a) return t
            t.image_resource_timing_available = !0
            let n = u(a.responseStatus)
            void 0 !== n &&
              ((t.image_resource_response_status = n),
              (r = n),
              (t.image_resource_status_bucket =
                0 === r ? "no_http_response" : r >= 100 && r < 600 ? `${Math.floor(r / 100)}xx` : "unknown"))
            let s = u(a.duration)
            void 0 !== s && (t.image_resource_duration_ms = s)
            let l = u(a.responseStart)
            void 0 !== l && (t.image_resource_response_start_ms = l)
            let i = u(a.responseEnd)
            void 0 !== i && (t.image_resource_response_end_ms = i)
            let o = u(a.transferSize)
            void 0 !== o && (t.image_resource_transfer_size_bytes = o)
            let c = u(a.encodedBodySize)
            void 0 !== c && (t.image_resource_encoded_body_size_bytes = c)
            let d = u(a.decodedBodySize)
            ;(void 0 !== d && (t.image_resource_decoded_body_size_bytes = d),
              a.nextHopProtocol && (t.image_resource_next_hop_protocol = a.nextHopProtocol))
          } catch {}
          return t
        })(n)
      return {
        product_id: r,
        citation_type: l,
        surface: i,
        image_url: c || ("" !== n && !/^https?:\/\//i.test(n)) ? void 0 : n,
        tags: c ? ["vto_image"] : void 0,
        image_url_hostname: p,
        from_oai_images: f,
        is_authenticated: g?.custom?.auth_status == null ? void 0 : "logged_in" === g.custom.auth_status,
        ..._,
        ...x,
        oai_img_path_prefix: m || void 0,
        has_showcase_metadata: !!t.showcase_metadata,
        provider: a.YOg(a.YjP()).safeParse(t.providers).data?.[0] ?? t.provider,
        user_country: h,
        is_shopping_research: o,
      }
    }
    function u(e) {
      return "number" == typeof e && Number.isFinite(e) ? e : void 0
    }
    function p(e) {
      return void 0 === e ? "unknown" : e ? "true" : "false"
    }
    function f(e, t, r, a) {
      var s, l
      let i
      e.get(n.T$).count("shopping", t, {
        citation_type: r.citation_type,
        surface: r.surface,
        reason: a,
        product_provider: r.provider ?? "unknown",
        has_showcase_metadata: p(r.has_showcase_metadata),
        from_oai_images: p(r.from_oai_images),
        image_origin: (s = r).image_url
          ? s.from_oai_images
            ? "oai_images"
            : s.image_url_hostname
              ? "external"
              : "invalid_url"
          : "missing_url",
        oai_img_path_prefix:
          ((l = r.oai_img_path_prefix), (i = l?.split("/").filter(Boolean).join("_")) && i.length > 0 ? i : "none"),
        image_resource_timing_available: p(r.image_resource_timing_available),
        image_resource_response_status: r.image_resource_response_status?.toString() ?? "unknown",
        image_resource_status_bucket: r.image_resource_status_bucket ?? "unknown",
        client_online: p(r.client_online),
        client_effective_connection_type: r.client_effective_connection_type ?? "unknown",
        client_save_data: p(r.client_save_data),
        user_country: r.user_country ?? "unknown",
        is_authenticated: p(r.is_authenticated),
        is_shopping_research: p(r.is_shopping_research),
      })
    }
    function m(e, t) {
      let { reason: r } = t,
        a = c(t)
      if (o(e).failures.has(a)) return
      o(e).failures.add(a)
      let n = d(e, t)
      ;(_("shopping.product_image.not_rendered", {
        ...n,
        reason: r,
        ...("load_error" === r
          ? { error_stack_trace: t.isVirtualTryOnImage ? "Virtual try-on image failed to load" : t.errorStackTrace }
          : {}),
      }),
        f(e, "product_image.not_rendered", n, r),
        "missing_url" === r && f(e, l, n, r))
    }
    function g(e, t) {
      let { imageFetchResponseStatus: r } = t,
        a = c(t)
      if (o(e).attempts.has(a)) return
      o(e).attempts.add(a)
      let n = d(e, t)
      ;(_("shopping.product_image.load_attempt", { ...n, image_fetch_response_status: r }), f(e, l, n, "load_attempt"))
    }
    function h(e) {
      return e.length > 2e3 ? e.slice(0, 2e3) + "\u2026" : e
    }
    function _(e, t) {
      let r = {}
      for (let [e, a] of Object.entries(t)) void 0 !== a && (r[e] = a)
    }
    r.d(
      t,
      {},
      {
        QN: function (e, t) {
          ;(g(e, t), m(e, { ...t, reason: "load_timeout" }))
        },
        ZA: function (e, t, r, a) {
          ;(g(e, { ...t, imageFetchResponseStatus: a?.imageFetchResponseStatus }),
            m(e, {
              ...t,
              reason: "load_error",
              errorStackTrace: (function e(t) {
                let r
                if (t instanceof Error) {
                  let e = t.name || "Error",
                    r = t.message.trim(),
                    a = r ? `${e}: ${r}` : e
                  return h(t.stack?.trim() || a)
                }
                return "string" == typeof t && t
                  ? h(t)
                  : ((r = Error("Product image load error")),
                    "function" == typeof Error.captureStackTrace && Error.captureStackTrace(r, e),
                    h(r.stack?.trim() || r.message))
              })(r),
            }))
        },
        b2: m,
        kE: g,
      },
    )
  },
  DC2G(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("HD8A"),
      l = r("J5Ia"),
      i = r("HOLv")
    r.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            r,
            o = (0, n.c)(5),
            { alt: c, compact: d } = e,
            u = void 0 !== d && d ? s.v : l.U
          return (
            o[0] !== u ? ((t = (0, a.jsx)(i.I, { asset: u })), (o[0] = u), (o[1] = t)) : (t = o[1]),
            o[2] !== c || o[3] !== t
              ? ((r = (0, a.jsx)("div", {
                  "data-theme": "light",
                  className: "absolute inset-0 flex items-center justify-center text-tertiary",
                  role: "img",
                  "aria-label": c,
                  children: t,
                })),
                (o[2] = c),
                (o[3] = t),
                (o[4] = r))
              : (r = o[4]),
            r
          )
        },
      },
    )
  },
  DixB(e, t, r) {
    r.d(
      t,
      {},
      {
        S: function (e, t) {
          let r = e.id?.trim(),
            a = e.title.trim()
          return r && a && null != e.url && null != e.query && null != e.provider
            ? {
                saved_target: {
                  identity: { namespace: "product", key: r },
                  sidebar_params: {
                    name: a,
                    category: "product_rationale_and_reviews",
                    multi_message_mode: !0,
                    extra_params: {
                      product_lookup_key: e.product_lookup_key ?? void 0,
                      rewritten_queries: t?.length ? t : void 0,
                      saved_product_shell: { id: r, url: e.url, query: e.query, provider: e.provider },
                    },
                  },
                },
                display_data: { name: a, image_url: e.image_urls?.[0] ?? null },
              }
            : null
        },
      },
    )
  },
  kOsy(e, t, r) {
    var a = r("EA6X"),
      n = r("Rt8w"),
      s = r("D015"),
      l = r("yGJW"),
      i = r("MrGp")
    function o(e, t, r) {
      !e.get(l.YV).isChatgptBrowserReplacement ||
        null == t.messageId ||
        t.messageId.startsWith("WEB:") ||
        (0, l.yy)(e, n.iZ, {
          ...r,
          shoppingContext: t.shoppingContext,
          shopImageSessionId: t.shopImageSessionId,
          messageId: t.messageId,
          conversationId: e.get(i.jS, t.conversationId) ?? void 0,
        })
    }
    r.d(
      t,
      {},
      {
        E: function (e, t, r, n, l, i) {
          let c = t.productReference
          if (null == c) return
          let d = !i && ("product" === c.type || "table" === c.render_as),
            u = !i && "product_entity" === c.type && !d,
            p = {
              actionType:
                "show" === l ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              linkType: "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL",
              surfaceLocation: a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              contentReferenceType:
                "products" === c.type ||
                "product_group" === c.type ||
                "product_entity" === c.type ||
                "explore_more" === c.type
                  ? c.type
                  : void 0,
              contentReferenceStartIndex: "number" == typeof c.start_idx ? (0, s.At)(c.start_idx) : void 0,
              productId: r.id ?? void 0,
              productEventUuid: r.product_event_uuid ?? void 0,
              productIndex: d || u || null == n ? void 0 : (0, s.At)(n + 1),
            }
          ;(i
            ? ((p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER"),
              (p.surfaceLocation = a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE),
              (p.contentReferenceType = "products"),
              (p.contentReferenceStartIndex = (0, s.At)(0)))
            : d
              ? ((p.linkType =
                  "block" === c.render_as
                    ? "CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY"
                    : "CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT"),
                (p.contentReferenceType = "product"),
                (p.contentReferenceEndIndex = "number" == typeof c.end_idx ? (0, s.At)(c.end_idx) : void 0),
                (p.renderAs =
                  "hero" === c.render_as || "block" === c.render_as || "table" === c.render_as ? c.render_as : void 0))
              : u
                ? ((p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY"),
                  (p.hasPopularTag = r.popularity_metadata?.product_tags?.includes("popular") ?? !1))
                : "explore_more" === c.type && (p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT"),
            o(e, t, p))
        },
        L: o,
      },
    )
  },
  IxWh(e, t, r) {
    var a = r("Vzyk"),
      n = r.n(a)
    function s(e, t = "ltr") {
      let r = Math.max(0, e.scrollWidth - e.clientWidth)
      if ("rtl" === t) return { maximum: 0, minimum: -r }
      let a = e.firstElementChild,
        n = Math.min(r, a instanceof HTMLElement ? Math.max(0, l(e, a, t)) : 0)
      return { maximum: r, minimum: n }
    }
    function l(e, t, r) {
      return "rtl" === r
        ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, r)
        : t.offsetLeft - e.offsetLeft - i(e, r)
    }
    function i(e, t) {
      let r = Number.parseFloat(
        "rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft,
      )
      return Number.isNaN(r) ? 0 : r
    }
    r.d(
      t,
      {},
      {
        b: s,
        z: function (e, t, r = "ltr") {
          let { maximum: a, minimum: o } = s(e, r),
            c = "rtl" === r ? -t : t,
            d = n()(e.scrollLeft + c * (e.clientWidth - i(e, r)), o, a),
            u = e.children
          for (let s = 1 === t ? 0 : u.length - 1; s >= 0 && s < u.length; s += t) {
            let t = u.item(s)
            if (!(t instanceof HTMLElement)) continue
            let i = n()(l(e, t, r), o, a)
            if ((1 === c && i >= d - 1) || (-1 === c && i <= d + 1)) return i
          }
          return 1 === c ? a : o
        },
      },
    )
  },
  BrP7(e, t, r) {
    r.d(t, { t: () => N })
    var a = r("ABep"),
      n = r("QosV"),
      s = r("i1uX"),
      l = r("on57"),
      i = r("IjbW"),
      o = r("K4Cx"),
      c = r("zd8w"),
      d = r("UxN3"),
      u = r("SziE"),
      p = r("hZax"),
      f = r("Sm6l")
    let m = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function g(e) {
      let t,
        r,
        s,
        i,
        o,
        c,
        d,
        u,
        p,
        g,
        h,
        _,
        x = (0, n.c)(26)
      x[0] !== e
        ? (({ children: t, icon: r, size: i, surface: o, labelVisibility: c, ...s } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = r),
          (x[3] = s),
          (x[4] = i),
          (x[5] = o),
          (x[6] = c))
        : ((t = x[1]), (r = x[2]), (s = x[3]), (i = x[4]), (o = x[5]), (c = x[6]))
      let y = void 0 === o ? "elevated" : o,
        b = void 0 === c ? "visible" : c,
        v = "large" === i && "visible" === b && "pb-1.5"
      x[7] !== v ? ((d = (0, l.A)("group/labeled-icon flex-col gap-1.5", v)), (x[7] = v), (x[8] = d)) : (d = x[8])
      let N = "elevated" === y ? "border shadow-xs" : "border-hairline",
        j = m[i]
      ;(x[9] !== N || x[10] !== j.icon
        ? ((u = (0, l.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            N,
            j.icon,
          )),
          (x[9] = N),
          (x[10] = j.icon),
          (x[11] = u))
        : (u = x[11]),
        x[12] !== r || x[13] !== u
          ? ((p = (0, a.jsx)("span", { className: u, children: r })), (x[12] = r), (x[13] = u), (x[14] = p))
          : (p = x[14]))
      let w = "hidden" === b ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        C = "visible" === b && m[i].caption
      return (
        x[15] !== C || x[16] !== w ? ((g = (0, l.A)(w, C)), (x[15] = C), (x[16] = w), (x[17] = g)) : (g = x[17]),
        x[18] !== t || x[19] !== g
          ? ((h = (0, a.jsx)("span", { className: g, children: t })), (x[18] = t), (x[19] = g), (x[20] = h))
          : (h = x[20]),
        x[21] !== s || x[22] !== h || x[23] !== d || x[24] !== p
          ? ((_ = (0, a.jsxs)(f.$, {
              ...s,
              className: d,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [p, h],
            })),
            (x[21] = s),
            (x[22] = h),
            (x[23] = d),
            (x[24] = p),
            (x[25] = _))
          : (_ = x[25]),
        _
      )
    }
    let h = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      _ = {
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
      x = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      y = {
        ..._,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${x} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      b = {
        ..._,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      v = {
        text: {
          ..._,
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
        toolbar: _,
        settings: { ..._, tabButtonClassName: `${h} button-toolbar` },
        search: {
          ..._,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ..._,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ..._,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${_.tabButtonClassName} ring-inset`,
        },
        pill: {
          ..._,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ..._, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: y,
        sectionFilter: {
          ...y,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${x} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...y,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${x} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ..._,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ..._,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ..._,
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
          ..._,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ..._, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
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
    function N(e) {
      let t,
        r = (0, n.c)(39),
        {
          tabs: i,
          selectedKey: o,
          onSelect: m,
          onTabClick: h,
          onTabHover: _,
          className: x,
          fill: y,
          scrollable: b,
          tabListRef: N,
          variant: C,
          ariaLabel: A,
          ariaLabelledBy: T,
          activationMode: k,
          animateSelection: E,
          dividerBefore: I,
        } = e,
        S = void 0 !== y && y,
        P = void 0 !== b && b,
        M = void 0 === C ? "segmented" : C,
        R = void 0 === k ? "automatic" : k,
        O = (0, c.useId)(),
        G = v[M],
        Y = "inset" === M || "choice" === M,
        L = (0, p.Zj)(!Y && "icon" !== M && "text-secondary" === G.unselectedTextClassName && "1244723012"),
        D = void 0 !== E && E && ("segmentedPill" === M || "segmentedPillMuted" === M),
        F = D ? "text-default font-medium" : G.selectedClassName
      if (
        r[0] !== R ||
        r[1] !== D ||
        r[2] !== A ||
        r[3] !== T ||
        r[4] !== x ||
        r[5] !== I ||
        r[6] !== S ||
        r[7] !== m ||
        r[8] !== h ||
        r[9] !== _ ||
        r[10] !== G.closeButtonClassName ||
        r[11] !== G.itemClassName ||
        r[12] !== G.listClassName ||
        r[13] !== G.segmentedEdges ||
        r[14] !== G.selectionIndicator ||
        r[15] !== G.tabButtonClassName ||
        r[16] !== G.textSizeClassName ||
        r[17] !== G.unselectedClassName ||
        r[18] !== G.unselectedTextClassName ||
        r[19] !== P ||
        r[20] !== F ||
        r[21] !== o ||
        r[22] !== O ||
        r[23] !== N ||
        r[24] !== i ||
        r[25] !== L ||
        r[26] !== Y ||
        r[27] !== M
      ) {
        let e,
          n,
          c = (0, l.A)(L ? "text-tertiary" : G.unselectedTextClassName, G.unselectedClassName),
          p = Y ? f.$ : "button",
          y = S && "w-full",
          b = P && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(r[29] !== x || r[30] !== G.listClassName || r[31] !== y || r[32] !== b
          ? ((e = (0, l.A)(G.listClassName, y, b, x)),
            (r[29] = x),
            (r[30] = G.listClassName),
            (r[31] = y),
            (r[32] = b),
            (r[33] = e))
          : (e = r[33]),
          r[34] !== R || r[35] !== m || r[36] !== P || r[37] !== i
            ? ((n = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let r = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  a = r.findIndex((t) => t === e.target)
                if (a < 0 || 0 === r.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let n = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? r.length - 1
                      : (a + (e.key === (n ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + r.length) % r.length),
                  r[t]?.focus(),
                  P && r[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let s = i[t]
                null != s && "automatic" === R && m(s.key, e.timeStamp)
              }),
              (r[34] = R),
              (r[35] = m),
              (r[36] = P),
              (r[37] = i),
              (r[38] = n))
            : (n = r[38]),
          (t = (0, a.jsx)("div", {
            ref: N,
            role: "tablist",
            tabIndex: -1,
            "aria-label": A,
            "aria-labelledby": T,
            className: e,
            onWheel: P ? j : void 0,
            onKeyDown: n,
            children: i.map((e, t) => {
              let r,
                n,
                f = e.key === o,
                x = f ? F : c,
                y = 0 === t,
                b = t === i.length - 1,
                v = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": f,
                  tabIndex: f ? 0 : -1,
                  onPointerEnter: null == _ ? void 0 : () => _(e.key),
                  onClick: (t) => {
                    ;((f && "manual" !== R) || m(e.key, t.timeStamp), h?.(e.key))
                  },
                }
              return (
                "inset" === M
                  ? ((r = f ? "segmentedInsetSelected" : "ghost"), (n = "compact"))
                  : "choice" === M && ((r = f ? "choiceSelected" : "outlineGhost"), (n = "dialogAction")),
                (0, a.jsxs)(
                  "div",
                  {
                    className: (0, l.A)(
                      "relative flex min-w-0 items-center",
                      G.itemClassName,
                      S && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      y || e.key !== I
                        ? null
                        : (0, a.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === M
                        ? (0, a.jsx)(g, { ...v, icon: e.icon, size: "large", children: e.name })
                        : (0, a.jsxs)(p, {
                            ...v,
                            className: (0, l.A)(
                              S && "min-w-0 flex-1 justify-center",
                              D && "relative isolate",
                              !Y && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                G.textSizeClassName ?? "text-sm",
                                G.tabButtonClassName,
                                P && "ring-inset",
                                G.segmentedEdges && y && "rounded-l-md",
                                G.segmentedEdges && b && "rounded-r-md",
                                "browse" === M && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", f && "ring-1 ring-border-strong"]
                                  : x,
                              ],
                            ),
                            color: r,
                            radius: "choice" === M ? "full" : void 0,
                            size: n,
                            children: [
                              D && f ? (0, a.jsx)(w, { layoutId: O }) : null,
                              null != e.icon
                                ? (0, a.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              S ? (0, a.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === G.selectionIndicator && f
                        ? (0, a.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, a.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, l.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              G.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, a.jsx)(d.bF, {
                              "aria-hidden": !1,
                              asset16: s.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      G.segmentedEdges && !b
                        ? (0, a.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (r[0] = R),
          (r[1] = D),
          (r[2] = A),
          (r[3] = T),
          (r[4] = x),
          (r[5] = I),
          (r[6] = S),
          (r[7] = m),
          (r[8] = h),
          (r[9] = _),
          (r[10] = G.closeButtonClassName),
          (r[11] = G.itemClassName),
          (r[12] = G.listClassName),
          (r[13] = G.segmentedEdges),
          (r[14] = G.selectionIndicator),
          (r[15] = G.tabButtonClassName),
          (r[16] = G.textSizeClassName),
          (r[17] = G.unselectedClassName),
          (r[18] = G.unselectedTextClassName),
          (r[19] = P),
          (r[20] = F),
          (r[21] = o),
          (r[22] = O),
          (r[23] = N),
          (r[24] = i),
          (r[25] = L),
          (r[26] = Y),
          (r[27] = M),
          (r[28] = t))
      } else t = r[28]
      return t
    }
    function j(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function w(e) {
      let t,
        r,
        s = (0, n.c)(5),
        { layoutId: l } = e,
        c = 0.25 * !(0, i.I)()
      return (
        s[0] !== c ? ((t = { type: "spring", duration: c, bounce: 0 }), (s[0] = c), (s[1] = t)) : (t = s[1]),
        s[2] !== l || s[3] !== t
          ? ((r = (0, a.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: l,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (s[2] = l),
            (s[3] = t),
            (s[4] = r))
          : (r = s[4]),
        r
      )
    }
  },
  aYc1(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("X3K1")
    r.d(
      t,
      {},
      {
        i: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 overflow-hidden rounded-lg peer-data-[space-image-thumbnail-ready]/progressive-preview:hidden",
                  children: (0, a.jsx)(s.X, { as: "span", size: "fill", variant: "chatgpt-project" }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  T7QO(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("slpy"),
      l = r("on57"),
      i = r("zd8w"),
      o = r("Ywss"),
      c = r("ZtSy"),
      d = r("giDA"),
      u = r("zkPp"),
      p = r("hZax"),
      f = r("YCVA"),
      m = r("bIvi"),
      g = r("e3Ux"),
      h = r("PyW6"),
      _ = r("VDXL"),
      x = r("efhA")
    function y(e) {
      let { key: t, render: r, alwaysVisible: n } = e
      return null == r
        ? null
        : (0, a.jsx)(
            "span",
            {
              className: "pointer-events-auto inline-flex items-center",
              children: r({
                className: n
                  ? void 0
                  : "opacity-0 focus-visible:opacity-100 aria-expanded:opacity-100 group-hover/library-item:opacity-100 pointer-coarse:opacity-100",
              }),
            },
            t,
          )
    }
    function b(e) {
      let { content: t } = e
      return null != t && !1 !== t && "" !== t && "\u2014" !== t && "-" !== t
    }
    function v(e) {
      let t,
        r,
        s = (0, n.c)(5),
        { children: i, className: o } = e
      return (
        s[0] !== o ? ((t = (0, l.A)("text-base font-normal browser:text-sm", o)), (s[0] = o), (s[1] = t)) : (t = s[1]),
        s[2] !== i || s[3] !== t
          ? ((r = (0, a.jsx)("span", { className: t, children: i })), (s[2] = i), (s[3] = t), (s[4] = r))
          : (r = s[4]),
        r
      )
    }
    function N(e) {
      let t,
        r,
        s = (0, n.c)(5),
        { artwork: l, badge: i } = e
      return (
        s[0] !== l
          ? ((t = (0, a.jsx)("span", {
              className:
                "flex size-full items-center justify-center overflow-hidden rounded-lg border border-default bg-surface",
              "data-library-item-icon": "",
              children: l,
            })),
            (s[0] = l),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== i || s[3] !== t
          ? ((r = (0, a.jsxs)("span", { className: "relative size-8 shrink-0", children: [t, i] })),
            (s[2] = i),
            (s[3] = t),
            (s[4] = r))
          : (r = s[4]),
        r
      )
    }
    function j(e) {
      let t,
        r,
        s,
        l = (0, n.c)(8),
        { depth: i, disclosure: o } = e,
        c = null == o || void 0
      return (
        l[0] !== i ? ((t = Array.from({ length: Math.min(i, 2) }, w)), (l[0] = i), (l[1] = t)) : (t = l[1]),
        l[2] !== o
          ? ((r = (0, a.jsx)("span", {
              className: "relative z-10 flex size-4 shrink-0 items-center justify-center",
              children: o,
            })),
            (l[2] = o),
            (l[3] = r))
          : (r = l[3]),
        l[4] !== c || l[5] !== t || l[6] !== r
          ? ((s = (0, a.jsxs)("span", {
              className: "-ms-1 flex max-w-1/4 min-w-4 items-center pe-1",
              "aria-hidden": c,
              children: [t, r],
            })),
            (l[4] = c),
            (l[5] = t),
            (l[6] = r),
            (l[7] = s))
          : (s = l[7]),
        s
      )
    }
    function w(e, t) {
      return (0, a.jsx)("span", { className: "w-7 shrink" }, t)
    }
    function C(e) {
      let t,
        r,
        s,
        o,
        c,
        u,
        p,
        f,
        h,
        _,
        x,
        y,
        b,
        v,
        N,
        j,
        w,
        C,
        E,
        I,
        P,
        M,
        R,
        O,
        G,
        Y,
        L,
        D,
        F,
        H,
        U = (0, n.c)(174),
        {
          imageMasonry: B,
          structuredGridEnabled: q,
          ref: z,
          name: $,
          description: K,
          link: W,
          backdrop: V,
          leadingAccessory: Q,
          children: X,
          badge: Z,
          caption: J,
          documentHeader: ee,
          header: et,
          overlayHeader: er,
          square: ea,
          landscape: en,
          autoHeight: es,
          fullBleed: el,
          spaceImageThumbnail: ei,
          folderPlaceholder: eo,
          previewStageClassName: ec,
          sitePreview: ed,
          deckPreview: eu,
          onOpen: ep,
          onSelect: ef,
          href: em,
          onActivate: eg,
          actions: eh,
          pinAction: e_,
          reorderAction: ex,
          actionIndicator: ey,
          selection: eb,
          selected: ev,
          isDropTarget: eN,
          selectionActive: ej,
          stretch: ew,
          highlighted: eC,
        } = e,
        eA = void 0 !== B && B,
        eT = void 0 !== q && q,
        ek = void 0 !== er && er,
        eE = void 0 !== en && en,
        eI = void 0 !== es && es,
        eS = void 0 !== el && el,
        eP = void 0 !== ei && ei,
        eM = void 0 !== ed && ed,
        eR = void 0 !== eu && eu,
        eO = void 0 !== ev && ev,
        eG = void 0 !== eN && eN,
        eY = void 0 !== ew && ew,
        eL = (0, i.useContext)(g.pr)
      U[0] !== eo || U[1] !== eL
        ? ((t = null != eo && [...eL.values()].some(k)), (U[0] = eo), (U[1] = eL), (U[2] = t))
        : (t = U[2])
      let eD = t,
        eF = (0, i.useContext)(d.J),
        eH = (0, i.useId)(),
        [eU, eB] = (0, i.useState)(0),
        eq =
          0 === eU
            ? "opacity-0 focus-visible:opacity-100 aria-expanded:opacity-100 group-hover/library-card:opacity-100 pointer-coarse:opacity-100"
            : void 0
      U[3] !== eF
        ? ((r = () => {
            let e = eF?.registerOpen?.()
            return (
              eB(T),
              () => {
                ;(e?.(), eB(A))
              }
            )
          }),
          (U[3] = eF),
          (U[4] = r))
        : (r = U[4])
      let ez = (0, m.K)(r),
        e$ = ee ?? et,
        eK = !eE && null != ee,
        eW = void 0 !== eC && eC && !eO && !eG,
        eV = X
      if (eA) {
        let e,
          t,
          r = eP || void 0,
          n = ea && "aspect-square bg-surface-tertiary"
        ;(U[5] !== n
          ? ((e = (0, l.A)(
              "pointer-events-none relative col-start-1 row-start-1 flex min-h-20 w-full items-center overflow-hidden rounded-lg",
              n,
            )),
            (U[5] = n),
            (U[6] = e))
          : (e = U[6]),
          U[7] !== X || U[8] !== r || U[9] !== e
            ? ((t = (0, a.jsx)("span", {
                "aria-hidden": "true",
                "data-space-image-thumbnail": r,
                className: e,
                children: X,
              })),
              (U[7] = X),
              (U[8] = r),
              (U[9] = e),
              (U[10] = t))
            : (t = U[10]),
          (eV = t))
      } else if (eT) {
        let e,
          t,
          r,
          n,
          s,
          i,
          o = eo ? "" : void 0,
          c =
            eo &&
            "[@media(hover:hover)_and_(pointer:fine)]:motion-safe:peer-focus-visible/library-action:[--preview-frame-scale:1.02]",
          d = eM && "border border-transparent! px-8.5"
        ;(U[11] !== eR
          ? ((e = eR && [
              "artifact-preview-deck",
              "before:[background-color:hsl(from_var(--preview-deck-cover-color,var(--color-surface-elevated))_h_s_calc(l_+_2_*_min(10,(100_-_l)/2)))]",
              "after:[background-color:hsl(from_var(--preview-deck-cover-color,var(--color-surface-elevated))_h_s_calc(l_+_min(10,(100_-_l)/2)))]",
              "[@media(hover:hover)_and_(pointer:fine)]:before:[scale:var(--preview-deck-hover-scale,1)] [@media(hover:hover)_and_(pointer:fine)]:after:[scale:var(--preview-deck-hover-scale,1)]",
              "[@media(hover:hover)_and_(pointer:fine)]:before:transition-[scale] [@media(hover:hover)_and_(pointer:fine)]:after:transition-[scale] before:duration-moderate after:duration-moderate before:ease-spring-snappy after:ease-spring-snappy",
              "pointer-fine:motion-safe:group-hover/library-card:[--preview-deck-hover-scale:1.02]",
            ]),
            (U[11] = eR),
            (U[12] = e))
          : (e = U[12]),
          U[13] !== ec || U[14] !== c || U[15] !== d || U[16] !== e
            ? ((t = (0, l.A)(
                "pointer-events-none col-start-1 row-start-1 text-start text-sm text-default",
                "relative isolate flex aspect-7/5 w-full items-center justify-center overflow-hidden rounded-3xl [content-visibility:auto] space-preview-stage",
                "pointer-fine:motion-safe:group-hover/library-card:[--preview-frame-scale:1.02]",
                c,
                d,
                e,
                ec,
              )),
              (U[13] = ec),
              (U[14] = c),
              (U[15] = d),
              (U[16] = e),
              (U[17] = t))
            : (t = U[17]),
          U[18] !== eo || U[19] !== eD
            ? ((r =
                eo &&
                (0, a.jsx)("span", {
                  className: (0, l.A)("pointer-events-none absolute inset-0", !eD && "hidden"),
                  children: eo,
                })),
              (U[18] = eo),
              (U[19] = eD),
              (U[20] = r))
            : (r = U[20]))
        let u = eP || void 0,
          p = eD && "opacity-0"
        ;(U[21] !== eR || U[22] !== eS || U[23] !== eE || U[24] !== eK || U[25] !== eM || U[26] !== p
          ? ((n = (0, l.A)(
              "flex min-h-0 min-w-0 flex-col overflow-hidden",
              "[@media(hover:hover)_and_(pointer:fine)]:motion-safe:[transform:scale(var(--preview-frame-scale,1))] [@media(hover:hover)_and_(pointer:fine)]:motion-safe:transition-transform duration-moderate ease-spring-snappy",
              p,
              eS
                ? "absolute inset-0"
                : [
                    eK && "artifact-preview-page space-preview-paper",
                    eE && [
                      "bg-surface-elevated",
                      eM
                        ? [
                            "relative aspect-16/10 w-full rounded-(--radius-xl-base) border-0 shadow-[0_10px_15px_-3px_rgb(0_0_0/10%),0_4px_6px_-4px_rgb(0_0_0/10%)]",
                            "after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_light-dark(rgb(0_0_0/5%),rgb(255_255_255/5%))] after:content-['']",
                          ]
                        : [
                            "border border-subtle shadow-card",
                            eR ? "artifact-preview-slide" : "relative aspect-video w-5/6 rounded-xl",
                          ],
                    ],
                    !eE && !eK && "relative h-4/5 w-5/6",
                  ],
            )),
            (U[21] = eR),
            (U[22] = eS),
            (U[23] = eE),
            (U[24] = eK),
            (U[25] = eM),
            (U[26] = p),
            (U[27] = n))
          : (n = U[27]),
          U[28] !== X || U[29] !== u || U[30] !== n
            ? ((s = (0, a.jsx)("span", { "data-space-image-thumbnail": u, className: n, children: X })),
              (U[28] = X),
              (U[29] = u),
              (U[30] = n),
              (U[31] = s))
            : (s = U[31]),
          U[32] !== o || U[33] !== t || U[34] !== r || U[35] !== s
            ? ((i = (0, a.jsxs)("span", {
                "aria-hidden": "true",
                "data-space-preview-stage": "",
                "data-folder-stage": o,
                className: t,
                children: [r, s],
              })),
              (U[32] = o),
              (U[33] = t),
              (U[34] = r),
              (U[35] = s),
              (U[36] = i))
            : (i = U[36]),
          (eV = i))
      } else if (eE && !eI) {
        let e
        ;(U[37] !== X
          ? ((e = (0, a.jsx)("span", { className: "relative flex aspect-video w-full overflow-hidden", children: X })),
            (U[37] = X),
            (U[38] = e))
          : (e = U[38]),
          (eV = e))
      }
      let eQ = eF?.id ?? eH
      U[39] !== eF || U[40] !== ez || U[41] !== eQ
        ? ((s = { ...eF, id: eQ, registerOpen: ez }), (U[39] = eF), (U[40] = ez), (U[41] = eQ), (U[42] = s))
        : (s = U[42])
      let eX = eT && "pointer-fine:hover:[--space-preview-stage-light:var(--gray-100)]",
        eZ = eY && "flex h-full flex-col"
      U[43] !== eX || U[44] !== eZ
        ? ((o = (0, l.A)(
            eX,
            "group group/library-item group/library-card relative min-w-0 break-inside-avoid select-none",
            eZ,
          )),
          (U[43] = eX),
          (U[44] = eZ),
          (U[45] = o))
        : (o = U[45])
      let eJ = eT ? "grid" : "flex flex-col",
        e0 = eT && !eA && "gap-y-3",
        e1 = eW ? "activity-glow border-content-blue/40 text-content-blue/30" : !eT && "border-subtle",
        e2 = eT && eG && "ring-2 ring-ring",
        e3 = null != V && "hover:border-media-background focus-within:border-media-background",
        e4 = eY && "flex-1"
      ;(U[46] !== eJ || U[47] !== e0 || U[48] !== e1 || U[49] !== e2 || U[50] !== e3 || U[51] !== e4
        ? ((c = (0, l.A)("relative rounded-2xl", eJ, e0, e1, e2, e3, e4)),
          (U[46] = eJ),
          (U[47] = e0),
          (U[48] = e1),
          (U[49] = e2),
          (U[50] = e3),
          (U[51] = e4),
          (U[52] = c))
        : (c = U[52]),
        U[53] !== eW ||
        U[54] !== eI ||
        U[55] !== ee ||
        U[56] !== eA ||
        U[57] !== eG ||
        U[58] !== eE ||
        U[59] !== eK ||
        U[60] !== eO ||
        U[61] !== ea ||
        U[62] !== eY ||
        U[63] !== eT
          ? ((u = (0, l.A)(
              "peer/library-action [corner-shape:inherit]",
              "cursor-interaction text-start text-sm text-default outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
              eT
                ? (0, l.A)(
                    "col-start-1 row-start-1 grid w-full grid-rows-subgrid justify-items-center",
                    eA ? "rounded-lg" : "row-span-2 rounded-[inherit]",
                  )
                : "relative box-content flex w-auto flex-col overflow-hidden rounded-[inherit] border border-inherit bg-surface-elevated",
              !eT && !eW && "shadow-card",
              !eT && (eG ? "ring-2 ring-ring" : eO && "ring-2 ring-text"),
              !eT && !eI && eK && "aspect-4/5",
              !eT && !eI && !eE && null == ee && ea && "aspect-square",
              eY && "flex-1 justify-start",
            )),
            (U[53] = eW),
            (U[54] = eI),
            (U[55] = ee),
            (U[56] = eA),
            (U[57] = eG),
            (U[58] = eE),
            (U[59] = eK),
            (U[60] = eO),
            (U[61] = ea),
            (U[62] = eY),
            (U[63] = eT),
            (U[64] = u))
          : (u = U[64]),
        U[65] !== ey || U[66] !== e$ || U[67] !== eU || U[68] !== ek || U[69] !== e_ || U[70] !== ex || U[71] !== eT
          ? ((p =
              eT || null == e$
                ? null
                : (0, a.jsx)("span", {
                    className: (0, l.A)(
                      "flex h-11 w-full shrink-0 items-center ps-3 pe-3.5",
                      ek ? "absolute inset-x-0 top-0 z-10 text-media-foreground" : "relative border-b border-subtle",
                    ),
                    children: (0, a.jsx)("span", {
                      className: (0, l.A)(
                        "flex min-w-0 flex-1 items-center gap-2",
                        "[--card-header-fade-direction:to_right] rtl:[--card-header-fade-direction:to_left]",
                        "[--card-header-mask:linear-gradient(var(--card-header-fade-direction),black_calc(100%_-_var(--card-header-fade-start,--spacing(12))),transparent_calc(100%_-_var(--card-header-fade-end,--spacing(5))))]",
                        "pointer-coarse:mask-(--card-header-mask) group-hover/library-card:mask-(--card-header-mask) group-focus-within/library-card:mask-(--card-header-mask)",
                        (null != ey || eU > 0) && "mask-(--card-header-mask)",
                        null != e_ && [
                          "pointer-coarse:[--card-header-fade-start:--spacing(19)] pointer-coarse:[--card-header-fade-end:--spacing(12)]",
                          "group-hover/library-card:[--card-header-fade-start:--spacing(19)] group-hover/library-card:[--card-header-fade-end:--spacing(12)] group-focus-within/library-card:[--card-header-fade-start:--spacing(19)] group-focus-within/library-card:[--card-header-fade-end:--spacing(12)]",
                          eU > 0 && "[--card-header-fade-start:--spacing(19)] [--card-header-fade-end:--spacing(12)]",
                        ],
                        null != ex && "me-8",
                      ),
                      children: e$,
                    }),
                  })),
            (U[65] = ey),
            (U[66] = e$),
            (U[67] = eU),
            (U[68] = ek),
            (U[69] = e_),
            (U[70] = ex),
            (U[71] = eT),
            (U[72] = p))
          : (p = U[72]))
      let e5 = !eT && eV
      ;(U[73] !== e$ || U[74] !== eA || U[75] !== $ || U[76] !== eT
        ? ((f =
            eT &&
            !eA &&
            (0, a.jsx)("span", {
              title: $,
              className:
                "row-start-2 flex max-w-full items-center justify-center gap-1 truncate text-center text-sm leading-5",
              children: e$ ?? (0, a.jsx)("span", { className: "truncate", children: $ }),
            })),
          (U[73] = e$),
          (U[74] = eA),
          (U[75] = $),
          (U[76] = eT),
          (U[77] = f))
        : (f = U[77]),
        U[78] !== K ||
        U[79] !== em ||
        U[80] !== W ||
        U[81] !== $ ||
        U[82] !== eg ||
        U[83] !== ep ||
        U[84] !== ef ||
        U[85] !== u ||
        U[86] !== p ||
        U[87] !== e5 ||
        U[88] !== f
          ? ((h = (0, a.jsxs)(S, {
              name: $,
              description: K,
              link: W,
              href: em,
              onActivate: eg,
              className: u,
              onOpen: ep,
              onSelect: ef,
              children: [p, e5, f],
            })),
            (U[78] = K),
            (U[79] = em),
            (U[80] = W),
            (U[81] = $),
            (U[82] = eg),
            (U[83] = ep),
            (U[84] = ef),
            (U[85] = u),
            (U[86] = p),
            (U[87] = e5),
            (U[88] = f),
            (U[89] = h))
          : (h = U[89]))
      let e6 = eT && eV
      ;(U[90] !== eA || U[91] !== eG || U[92] !== eO || U[93] !== eT
        ? ((_ = eT
            ? (0, l.A)(
                "group/library-card-controls pointer-events-none absolute inset-0 col-start-1 row-start-1 row-end-2 overflow-hidden",
                eA ? "rounded-lg" : "rounded-3xl",
                eO && !eG && "ring-2 ring-media-background ring-inset dark:ring-media-foreground",
              )
            : "group/library-card-controls pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] border border-transparent [corner-shape:inherit]"),
          (U[90] = eA),
          (U[91] = eG),
          (U[92] = eO),
          (U[93] = eT),
          (U[94] = _))
        : (_ = U[94]),
        U[95] !== ek || U[96] !== eT
          ? ((x =
              !eT &&
              ek &&
              (0, a.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(color-mix(in_srgb,var(--color-media-background)_48%,transparent)_0,color-mix(in_srgb,var(--color-media-background)_33%,transparent)_--spacing(13),color-mix(in_srgb,var(--color-media-background)_11%,transparent)_--spacing(24),transparent_--spacing(36))]",
              })),
            (U[95] = ek),
            (U[96] = eT),
            (U[97] = x))
          : (x = U[97]))
      let e7 = eG && "bg-text-accent/10",
        e8 = !eG && !eT && (eO ? "bg-text/5" : "bg-text/2 dark:bg-text/5"),
        e9 = !eO && !eG && "opacity-0 group-hover/library-card:opacity-100"
      ;(U[98] !== e7 || U[99] !== e8 || U[100] !== e9
        ? ((y = (0, l.A)("pointer-events-none absolute inset-0", e7, e8, e9)),
          (U[98] = e7),
          (U[99] = e8),
          (U[100] = e9),
          (U[101] = y))
        : (y = U[101]),
        U[102] !== y
          ? ((b = (0, a.jsx)("span", { "aria-hidden": "true", className: y })), (U[102] = y), (U[103] = b))
          : (b = U[103]),
        U[104] !== e$ || U[105] !== eA || U[106] !== $
          ? ((v =
              eA &&
              (0, a.jsx)("span", {
                "aria-hidden": "true",
                className:
                  "absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-1 bg-linear-to-t from-media-background/70 to-transparent px-3 pe-14 pt-8 pb-3 text-sm text-media-foreground opacity-0 group-focus-within/library-card:opacity-100 group-hover/library-card:opacity-100 pointer-coarse:opacity-100",
                children: e$ ?? $,
              })),
            (U[104] = e$),
            (U[105] = eA),
            (U[106] = $),
            (U[107] = v))
          : (v = U[107]))
      let te = !eT && ek ? "z-10 text-media-foreground" : "text-default",
        tt = eT && "absolute inset-x-2 top-2 flex h-8 items-center justify-end",
        tr = !eT && (null != e$ ? "absolute end-2 top-2 flex h-7 items-center justify-center" : "absolute end-3 top-3")
      ;(U[108] !== te || U[109] !== tt || U[110] !== tr
        ? ((N = (0, l.A)("group/library-card-actions pointer-events-none", te, tt, tr)),
          (U[108] = te),
          (U[109] = tt),
          (U[110] = tr),
          (U[111] = N))
        : (N = U[111]),
        U[112] !== ey || U[113] !== eU || U[114] !== eT
          ? ((j =
              null != ey
                ? (0, a.jsx)("div", {
                    className: (0, l.A)(
                      "pointer-events-none absolute top-0 flex items-center justify-center group-hover/library-card:opacity-0 group-focus-within/library-card-actions:opacity-0 pointer-coarse:opacity-0",
                      eU > 0 && "opacity-0",
                      eT ? "start-0 size-8" : "end-0 size-7",
                    ),
                    children: ey,
                  })
                : null),
            (U[112] = ey),
            (U[113] = eU),
            (U[114] = eT),
            (U[115] = j))
          : (j = U[115]),
        U[116] !== eq || U[117] !== e_ || U[118] !== eT
          ? ((w =
              eT &&
              null != e_ &&
              (0, a.jsx)("span", {
                className: "pointer-events-none absolute start-0 top-0 flex size-8 items-center justify-center",
                children: e_({ className: (0, l.A)("pointer-events-auto", eq) }),
              })),
            (U[116] = eq),
            (U[117] = e_),
            (U[118] = eT),
            (U[119] = w))
          : (w = U[119]),
        U[120] !== eq || U[121] !== ex
          ? ((C =
              null != ex
                ? (0, a.jsx)("span", {
                    className: "flex size-7 items-center justify-center",
                    children: ex({ className: eq }),
                  })
                : null),
            (U[120] = eq),
            (U[121] = ex),
            (U[122] = C))
          : (C = U[122]),
        U[123] !== eq || U[124] !== eh
          ? ((E = eh?.({ className: eq })), (U[123] = eq), (U[124] = eh), (U[125] = E))
          : (E = U[125]),
        U[126] !== eq || U[127] !== e_ || U[128] !== eT
          ? ((I = !eT && e_?.({ className: eq })), (U[126] = eq), (U[127] = e_), (U[128] = eT), (U[129] = I))
          : (I = U[129]),
        U[130] !== w || U[131] !== C || U[132] !== E || U[133] !== I
          ? ((P = (0, a.jsxs)("div", {
              className: "pointer-events-auto flex items-center gap-1",
              children: [w, C, E, I],
            })),
            (U[130] = w),
            (U[131] = C),
            (U[132] = E),
            (U[133] = I),
            (U[134] = P))
          : (P = U[134]),
        U[135] !== N || U[136] !== j || U[137] !== P
          ? ((M = (0, a.jsxs)("div", { className: N, children: [j, P] })),
            (U[135] = N),
            (U[136] = j),
            (U[137] = P),
            (U[138] = M))
          : (M = U[138]))
      let ta =
          !eT && null != eb && "group-hover/library-card:opacity-0 group-focus-within/library-card-controls:opacity-0",
        tn = (eO || (void 0 !== ej && ej)) && "opacity-0"
      ;(U[139] !== ta || U[140] !== tn
        ? ((R = (0, l.A)(ta, tn)), (U[139] = ta), (U[140] = tn), (U[141] = R))
        : (R = U[141]),
        U[142] !== Z || U[143] !== R
          ? ((O = (0, a.jsx)("div", { className: R, children: Z })), (U[142] = Z), (U[143] = R), (U[144] = O))
          : (O = U[144]))
      let ts = eT ? "end-3.5 bottom-3.5" : "end-4.5 bottom-4.5"
      return (
        U[145] !== ts
          ? ((G = (0, l.A)("pointer-events-auto absolute flex items-center", ts)), (U[145] = ts), (U[146] = G))
          : (G = U[146]),
        U[147] !== eb || U[148] !== G
          ? ((Y = (0, a.jsx)("div", { className: G, children: eb })), (U[147] = eb), (U[148] = G), (U[149] = Y))
          : (Y = U[149]),
        U[150] !== Q ||
        U[151] !== _ ||
        U[152] !== x ||
        U[153] !== b ||
        U[154] !== v ||
        U[155] !== M ||
        U[156] !== O ||
        U[157] !== Y
          ? ((L = (0, a.jsxs)("div", { className: _, children: [x, b, v, Q, M, O, Y] })),
            (U[150] = Q),
            (U[151] = _),
            (U[152] = x),
            (U[153] = b),
            (U[154] = v),
            (U[155] = M),
            (U[156] = O),
            (U[157] = Y),
            (U[158] = L))
          : (L = U[158]),
        U[159] !== c || U[160] !== h || U[161] !== e6 || U[162] !== L
          ? ((D = (0, a.jsxs)("div", { className: c, children: [h, e6, L] })),
            (U[159] = c),
            (U[160] = h),
            (U[161] = e6),
            (U[162] = L),
            (U[163] = D))
          : (D = U[163]),
        U[164] !== V || U[165] !== J || U[166] !== z || U[167] !== eT || U[168] !== o || U[169] !== D
          ? ((F = (0, a.jsxs)("div", {
              ref: z,
              "data-library-card": "",
              "data-structured": eT,
              className: o,
              children: [V, D, J],
            })),
            (U[164] = V),
            (U[165] = J),
            (U[166] = z),
            (U[167] = eT),
            (U[168] = o),
            (U[169] = D),
            (U[170] = F))
          : (F = U[170]),
        U[171] !== s || U[172] !== F
          ? ((H = (0, a.jsx)(d.J, { value: s, children: F })), (U[171] = s), (U[172] = F), (U[173] = H))
          : (H = U[173]),
        H
      )
    }
    function A(e) {
      return e - 1
    }
    function T(e) {
      return e + 1
    }
    function k(e) {
      return e.pending
    }
    function E(e) {
      let t,
        r,
        s = (0, n.c)(5),
        { artwork: i, structuredGridEnabled: o } = e,
        c = !(void 0 !== o && o) && "-translate-y-1.5"
      return (
        s[0] !== c
          ? ((t = (0, l.A)("flex size-14 items-center justify-center text-5xl leading-none", c)),
            (s[0] = c),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== i || s[3] !== t
          ? ((r = (0, a.jsx)("span", {
              className: "absolute inset-0 flex items-center justify-center",
              children: (0, a.jsx)("span", { "data-library-card-artwork": "", className: t, children: i }),
            })),
            (s[2] = i),
            (s[3] = t),
            (s[4] = r))
          : (r = s[4]),
        r
      )
    }
    let I =
      "relative after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-px after:border-b after:border-subtle"
    function S(e) {
      let t,
        r,
        s = (0, n.c)(25),
        {
          name: l,
          description: i,
          ariaDescribedBy: d,
          link: u,
          href: p,
          onActivate: m,
          onOpen: g,
          onSelect: h,
          className: _,
          tabIndex: x,
          children: y,
        } = e
      s[0] !== d || s[1] !== y || s[2] !== _ || s[3] !== i || s[4] !== l || s[5] !== x
        ? ((t = {
            className: _,
            tabIndex: x,
            "aria-label": l,
            "aria-describedby": d,
            "data-library-item-action": "",
            "aria-description": i,
            children: y,
          }),
          (s[0] = d),
          (s[1] = y),
          (s[2] = _),
          (s[3] = i),
          (s[4] = l),
          (s[5] = x),
          (s[6] = t))
        : (t = s[6])
      let b = t
      if (null != u) {
        let e, t, r
        return (
          s[7] !== u.onUnmodifiedClick || s[8] !== m || s[9] !== g
            ? ((e = (e) => {
                ;(m?.(e), null == u.onUnmodifiedClick && null != g && (e.preventDefault(), g(e)))
              }),
              (s[7] = u.onUnmodifiedClick),
              (s[8] = m),
              (s[9] = g),
              (s[10] = e))
            : (e = s[10]),
          s[11] !== u.onUnmodifiedClick || s[12] !== g
            ? ((t = (e) => {
                null == u.onUnmodifiedClick && 1 === e.button && null != g && (e.preventDefault(), g(e))
              }),
              (s[11] = u.onUnmodifiedClick),
              (s[12] = g),
              (s[13] = t))
            : (t = s[13]),
          s[14] !== u || s[15] !== b || s[16] !== e || s[17] !== t
            ? ((r = (0, a.jsx)(c.G, {
                ...b,
                ...u,
                draggable: !1,
                onClick: e,
                onAuxClick: t,
                showHoverActions: !1,
                underline: "none",
              })),
              (s[14] = u),
              (s[15] = b),
              (s[16] = e),
              (s[17] = t),
              (s[18] = r))
            : (r = s[18]),
          r
        )
      }
      return (
        s[19] !== p || s[20] !== m || s[21] !== g || s[22] !== h || s[23] !== b
          ? ((r =
              null != p
                ? (0, a.jsx)(o.N_, {
                    ...b,
                    to: p,
                    onClick: (e) => {
                      ;(m?.(e),
                        0 === e.button && !e.metaKey && !e.ctrlKey && !e.altKey && h?.(e)
                          ? e.preventDefault()
                          : null != g && (0, f.W)(e) && (e.preventDefault(), g(e)))
                    },
                  })
                : (0, a.jsx)("button", {
                    ...b,
                    type: "button",
                    disabled: null == g,
                    onClick: (e) => {
                      ;(m?.(e), h?.(e) || g?.(e))
                    },
                  })),
            (s[19] = p),
            (s[20] = m),
            (s[21] = g),
            (s[22] = h),
            (s[23] = b),
            (s[24] = r))
          : (r = s[24]),
        r
      )
    }
    r.d(
      t,
      {},
      {
        Df: function (e) {
          let t,
            r,
            s = (0, n.c)(5),
            { children: i, position: o } = e,
            c =
              "back" === o
                ? "opacity-72 [transform:translate(-2px,1px)_rotate(-0.4deg)] group-hover/library-card:[transform:translate(-10px,-6px)_rotate(-1.8deg)]"
                : "opacity-86 [transform:translate(2px,1px)_rotate(0.4deg)] group-hover/library-card:[transform:translate(10px,-5px)_rotate(1.8deg)]"
          return (
            s[0] !== c
              ? ((t = (0, l.A)(
                  "absolute inset-1 overflow-hidden rounded-2xl bg-surface-elevated transition-transform duration-basic ease-out motion-reduce:transition-none",
                  c,
                )),
                (s[0] = c),
                (s[1] = t))
              : (t = s[1]),
            s[2] !== i || s[3] !== t
              ? ((r = (0, a.jsx)("span", { className: t, children: i })), (s[2] = i), (s[3] = t), (s[4] = r))
              : (r = s[4]),
            r
          )
        },
        JV: function (e) {
          let t,
            r,
            s,
            i,
            o,
            c,
            d,
            u,
            p,
            f = (0, n.c)(23),
            { heading: m, headingAccessory: g, artwork: h, footer: _ } = e,
            x = null != m && "min-h-10"
          ;(f[0] !== x
            ? ((t = (0, l.A)("line-clamp-2 min-w-0 leading-5 font-medium break-words wrap-anywhere", x)),
              (f[0] = x),
              (f[1] = t))
            : (t = f[1]),
            f[2] !== m || f[3] !== t
              ? ((r = (0, a.jsx)("span", { className: t, children: m })), (f[2] = m), (f[3] = t), (f[4] = r))
              : (r = f[4]),
            f[5] !== g
              ? ((s =
                  null != g
                    ? (0, a.jsx)("span", { className: "flex h-5 shrink-0 items-center text-secondary", children: g })
                    : null),
                (f[5] = g),
                (f[6] = s))
              : (s = f[6]),
            f[7] !== r || f[8] !== s
              ? ((i = (0, a.jsxs)("span", {
                  className: "flex shrink-0 items-start gap-1 py-3.5 ps-5 pe-14",
                  children: [r, s],
                })),
                (f[7] = r),
                (f[8] = s),
                (f[9] = i))
              : (i = f[9]))
          let y = null != m && "min-h-10"
          return (
            f[10] !== y
              ? ((o = (0, l.A)("relative flex flex-1 items-center justify-center", y)), (f[10] = y), (f[11] = o))
              : (o = f[11]),
            f[12] !== h ? ((c = (0, a.jsx)(E, { artwork: h })), (f[12] = h), (f[13] = c)) : (c = f[13]),
            f[14] !== o || f[15] !== c
              ? ((d = (0, a.jsx)("span", { className: o, children: c })), (f[14] = o), (f[15] = c), (f[16] = d))
              : (d = f[16]),
            f[17] !== _
              ? ((u = (0, a.jsx)("span", {
                  className: "flex shrink-0 items-center gap-1 px-5 py-3.5 text-xs text-secondary",
                  children: _,
                })),
                (f[17] = _),
                (f[18] = u))
              : (u = f[18]),
            f[19] !== u || f[20] !== i || f[21] !== d
              ? ((p = (0, a.jsxs)("span", {
                  className: "flex h-full min-h-min w-full flex-1 flex-col",
                  children: [i, d, u],
                })),
                (f[19] = u),
                (f[20] = i),
                (f[21] = d),
                (f[22] = p))
              : (p = f[22]),
            p
          )
        },
        K0: N,
        Ov: v,
        Qe: E,
        Xg: function (e) {
          let t,
            r,
            s,
            i,
            o = (0, n.c)(7),
            { children: c, layout: d, selection: u } = e
          return "stacked" === (void 0 === d ? "columns" : d)
            ? null
            : (o[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, l.A)("@container/library-row", x.A.header)), (o[0] = t))
                : (t = o[0]),
              o[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, l.A)(
                    "group group/library-item flex h-10.5 items-center gap-4 text-sm leading-5 text-secondary select-none",
                    "px-[var(--padding-row-cell-x,var(--padding-row-x))]",
                    I,
                  )),
                  (o[1] = r))
                : (r = o[1]),
              o[2] !== u
                ? ((s =
                    null != u
                      ? (0, a.jsx)("div", {
                          role: "columnheader",
                          "data-library-column": "selection",
                          className: "absolute -start-6 top-1/2 flex w-4 -translate-y-1/2 items-center justify-center",
                          children: u,
                        })
                      : null),
                  (o[2] = u),
                  (o[3] = s))
                : (s = o[3]),
              o[4] !== c || o[5] !== s
                ? ((i = (0, a.jsx)("div", {
                    className: t,
                    children: (0, a.jsxs)("div", {
                      "data-selectable-list-row-group-header": "",
                      role: "row",
                      className: r,
                      children: [s, c],
                    }),
                  })),
                  (o[4] = c),
                  (o[5] = s),
                  (o[6] = i))
                : (i = o[6]),
              i)
        },
        _4: function (e) {
          let t,
            r = (0, n.c)(2),
            { children: s } = e
          return (
            r[0] !== s
              ? ((t = (0, a.jsx)("span", {
                  "aria-hidden": !0,
                  className: "pointer-events-none absolute inset-0 motion-reduce:transition-none",
                  children: s,
                })),
                (r[0] = s),
                (r[1] = t))
              : (t = r[1]),
            t
          )
        },
        aH: j,
        cu: function (e) {
          let t,
            r,
            s = (0, n.c)(5)
          s[0] !== e ? ((t = (0, a.jsx)(C, { ...e })), (s[0] = e), (s[1] = t)) : (t = s[1])
          let l = t
          return (
            s[2] !== l || s[3] !== e.folderPlaceholder
              ? ((r = null == e.folderPlaceholder ? l : (0, a.jsx)(h.H, { children: l })),
                (s[2] = l),
                (s[3] = e.folderPlaceholder),
                (s[4] = r))
              : (r = s[4]),
            r
          )
        },
        gr: function (e) {
          let t,
            r = (0, n.c)(2)
          return (
            r[0] !== e
              ? ((t = (0, a.jsx)("img", {
                  alt: "",
                  ...e,
                  className:
                    "pointer-events-none absolute inset-0 size-full origin-top scale-105 mask-[linear-gradient(rgb(0_0_0/55%)_0,rgb(0_0_0/55%)_--spacing(11),rgb(0_0_0/38%)_--spacing(19),rgb(0_0_0/16%)_--spacing(29),transparent_--spacing(39))] object-cover blur-md",
                })),
                (r[0] = e),
                (r[1] = t))
              : (t = r[1]),
            t
          )
        },
        kt: function (e) {
          let t,
            r,
            o,
            c,
            d,
            f,
            m,
            h,
            w,
            C,
            A,
            T,
            k,
            E,
            I,
            P,
            M,
            R,
            O,
            G,
            Y,
            L,
            D,
            F,
            H,
            U,
            B,
            q,
            z,
            $,
            K = (0, n.c)(114),
            {
              ref: W,
              layout: V,
              name: Q,
              ariaDescribedBy: X,
              link: Z,
              displayName: J,
              activateLinkFromNameCell: ee,
              artwork: et,
              thumbnail: er,
              badge: ea,
              favoriteMarker: en,
              activity: es,
              detail: el,
              sizeBeforeDate: ei,
              sharedBy: eo,
              source: ec,
              owner: ed,
              onOpen: eu,
              onSelect: ep,
              href: ef,
              onActivate: em,
              actions: eg,
              selection: eh,
              selected: e_,
              isDropTarget: ex,
              tree: ey,
              reserveDisclosureSpace: eb,
              reserveSelectionColumn: ev,
            } = e,
            eN = void 0 !== ee && ee,
            ej = void 0 !== ei && ei,
            ew = void 0 !== e_ && e_,
            eC = void 0 !== eb && eb,
            eA = void 0 === ev || ev,
            eT = "stacked" === (void 0 === V ? "columns" : V),
            { defer: ek, pageList: eE } = (0, i.useContext)(g.hm),
            eI = (0, p.Zj)(eT && "1244723012"),
            eS = null != ef || Z?.onUnmodifiedClick != null
          K[0] !== el || K[1] !== ej
            ? ((t =
                null != el
                  ? (0, a.jsx)("span", {
                      role: "gridcell",
                      "data-library-column": "size",
                      tabIndex: 0,
                      className: (0, l.A)(
                        "hidden w-16 shrink-0 text-sm leading-5 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @lg/library-row:block",
                        ej && "@3xl/library-row:w-40",
                      ),
                      children: el,
                    })
                  : null),
              (K[0] = el),
              (K[1] = ej),
              (K[2] = t))
            : (t = K[2])
          let eP = t
          K[3] !== es || K[4] !== el || K[5] !== eo || K[6] !== ej || K[7] !== eP || K[8] !== ec || K[9] !== eT
            ? ((r = (e, t) => {
                let { iconOnly: r } = void 0 === t ? {} : t,
                  n = void 0 !== r && r
                if (eT) {
                  let t = { key: "date", content: es },
                    r = { key: "size", content: el },
                    s = [{ key: "source", content: e }, ...(ej ? [r, t] : [t, r])].filter(b)
                  return s.map((e, t) => {
                    let { key: r, content: l } = e
                    return (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          t > 0 && !(n && s[t - 1]?.key === "source")
                            ? (0, a.jsx)(
                                "span",
                                { "aria-hidden": "true", className: "before:content-['\xb7']" },
                                "separator",
                              )
                            : null,
                          (0, a.jsx)(
                            "span",
                            {
                              className: "source" === r ? "flex min-w-0 items-center gap-1.5" : "shrink-0",
                              children: l,
                            },
                            "content",
                          ),
                        ],
                      },
                      r,
                    )
                  })
                }
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    void 0 !== ec
                      ? (0, a.jsx)("span", {
                          role: "gridcell",
                          "data-library-column": "source",
                          tabIndex: 0,
                          className: (0, l.A)(
                            "hidden shrink-0 items-center gap-2 text-sm leading-5 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @3xl/library-row:flex",
                            ej ? "w-40" : "w-60",
                          ),
                          children: e,
                        })
                      : null,
                    null != eo
                      ? (0, a.jsx)("span", {
                          role: "gridcell",
                          "data-library-column": "shared",
                          tabIndex: 0,
                          className:
                            "hidden w-60 shrink-0 items-center gap-2 text-sm leading-5 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @3xl/library-row:flex",
                          children: eo,
                        })
                      : null,
                    ej ? eP : null,
                    (0, a.jsx)("span", {
                      role: "gridcell",
                      "data-library-column": "date",
                      tabIndex: 0,
                      className:
                        "hidden w-28 shrink-0 text-sm leading-5 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @lg/library-row:block",
                      children: es,
                    }),
                    ej ? null : eP,
                  ],
                })
              }),
              (K[3] = es),
              (K[4] = el),
              (K[5] = eo),
              (K[6] = ej),
              (K[7] = eP),
              (K[8] = ec),
              (K[9] = eT),
              (K[10] = r))
            : (r = K[10])
          let eM = r
          K[11] !== eM || K[12] !== ec
            ? ((o = "function" == typeof ec ? ec(eM) : eM(ec)), (K[11] = eM), (K[12] = ec), (K[13] = o))
            : (o = K[13])
          let eR = o,
            eO =
              ek &&
              !ey?.expanded &&
              "supports-[overflow-clip-margin:4px]:-mx-7 supports-[overflow-clip-margin:4px]:px-7 supports-[overflow-clip-margin:4px]:[overflow-clip-margin:var(--spacing)] supports-[overflow-clip-margin:4px]:[content-visibility:auto] supports-[overflow-clip-margin:4px]:[contain-intrinsic-block-size:auto_max(var(--height-token-row),--spacing(16))]",
            eG = void 0 !== ex && ex && "rounded-xl bg-text-accent/10 ring-2 ring-ring"
          ;(K[14] !== eO || K[15] !== eG
            ? ((c = (0, l.A)("group group/library-item relative @container/library-row", eO, eG)),
              (K[14] = eO),
              (K[15] = eG),
              (K[16] = c))
            : (c = K[16]),
            K[17] !== eu || K[18] !== ep
              ? ((d = (e) => {
                  !e.defaultPrevented &&
                    ("Enter" === e.key || " " === e.key) &&
                    e.target instanceof HTMLElement &&
                    e.target.matches('[role="gridcell"]') &&
                    (e.preventDefault(), ep?.(e) || eu?.(e))
                }),
                (K[17] = eu),
                (K[18] = ep),
                (K[19] = d))
              : (d = K[19]))
          let eY = eS && "relative isolate",
            eL = eE && ew && x.A.selectedRow
          K[20] !== eY || K[21] !== eL
            ? ((f = (0, l.A)("select-none", eY, eL)), (K[20] = eY), (K[21] = eL), (K[22] = f))
            : (f = K[22])
          let eD = !eE && void 0
          K[23] !== eu || K[24] !== ep
            ? ((m = (e) => {
                !(
                  e.target instanceof Element &&
                  (!e.currentTarget.contains(e.target) ||
                    e.target.closest('button, [role=checkbox], a, [data-library-column="selection"]'))
                ) &&
                  (ep?.(e) || eu?.(e))
              }),
              (K[23] = eu),
              (K[24] = ep),
              (K[25] = m))
            : (m = K[25])
          let eF = eT && "ps-0.5"
          ;(K[26] !== eF
            ? ((h = (0, l.A)("flex min-h-10 min-w-0 items-center gap-4", eF)), (K[26] = eF), (K[27] = h))
            : (h = K[27]),
            K[28] !== eA || K[29] !== eh
              ? ((w =
                  (eA || null != eh) &&
                  (0, a.jsx)("span", {
                    role: "gridcell",
                    "data-library-column": "selection",
                    className: "absolute inset-y-0 -start-6 end-full z-10 flex cursor-default items-center",
                    children: eh,
                  })),
                (K[28] = eA),
                (K[29] = eh),
                (K[30] = w))
              : (w = K[30]),
            K[31] !== eN || K[32] !== ey
              ? ((C = (e) => {
                  e.target === e.currentTarget &&
                    (!eN ||
                    ("Enter" !== e.key && " " !== e.key) ||
                    e.defaultPrevented ||
                    e.repeat ||
                    e.nativeEvent.isComposing ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey
                      ? ey?.onToggle != null &&
                        ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                        ey.expanded !== ("ArrowRight" === e.key) &&
                        (e.preventDefault(), ey.onToggle("ArrowRight" === e.key))
                      : (e.preventDefault(), e.currentTarget.querySelector("a[data-library-item-action]")?.click()))
                }),
                (K[31] = eN),
                (K[32] = ey),
                (K[33] = C))
              : (C = K[33]),
            K[34] !== eC || K[35] !== ey
              ? ((A = null != ey || eC ? (0, a.jsx)(j, { depth: ey?.depth ?? 0, disclosure: ey?.disclosure }) : null),
                (K[34] = eC),
                (K[35] = ey),
                (K[36] = A))
              : (A = K[36]))
          let eH = eT ? "flex size-10 shrink-0 items-center justify-center" : "contents"
          ;(K[37] !== et || K[38] !== ea || K[39] !== er
            ? ((T = er ?? (0, a.jsx)(N, { artwork: et, badge: ea })),
              (K[37] = et),
              (K[38] = ea),
              (K[39] = er),
              (K[40] = T))
            : (T = K[40]),
            K[41] !== eH || K[42] !== T
              ? ((k = (0, a.jsx)("span", { className: eH, children: T })), (K[41] = eH), (K[42] = T), (K[43] = k))
              : (k = K[43]))
          let eU = eT && "leading-5"
          K[44] !== eU
            ? ((E = (0, l.A)("flex min-w-0 items-center gap-2 text-default", eU)), (K[44] = eU), (K[45] = E))
            : (E = K[45])
          let eB = eS && "after:absolute after:inset-0 after:z-0"
          K[46] !== eB
            ? ((I = (0, l.A)("min-w-0 cursor-interaction truncate text-start", eB)), (K[46] = eB), (K[47] = I))
            : (I = K[47])
          let eq = J ?? Q
          ;(K[48] !== eq
            ? ((P = (0, a.jsx)("span", {
                className: "block truncate",
                "data-library-item-title": "",
                "data-tooltip-enablement-target": !0,
                children: eq,
              })),
              (K[48] = eq),
              (K[49] = P))
            : (P = K[49]),
            K[50] !== X ||
            K[51] !== ef ||
            K[52] !== Z ||
            K[53] !== Q ||
            K[54] !== em ||
            K[55] !== eu ||
            K[56] !== ep ||
            K[57] !== I ||
            K[58] !== P
              ? ((M = (0, a.jsx)(S, {
                  name: Q,
                  ariaDescribedBy: X,
                  link: Z,
                  href: ef,
                  onActivate: em,
                  tabIndex: -1,
                  className: I,
                  onOpen: eu,
                  onSelect: ep,
                  children: P,
                })),
                (K[50] = X),
                (K[51] = ef),
                (K[52] = Z),
                (K[53] = Q),
                (K[54] = em),
                (K[55] = eu),
                (K[56] = ep),
                (K[57] = I),
                (K[58] = P),
                (K[59] = M))
              : (M = K[59]),
            K[60] !== en || K[61] !== E || K[62] !== M
              ? ((R = (0, a.jsxs)(v, { className: E, children: [M, en] })),
                (K[60] = en),
                (K[61] = E),
                (K[62] = M),
                (K[63] = R))
              : (R = K[63]),
            K[64] !== eR || K[65] !== eT || K[66] !== eI
              ? ((O = eT
                  ? (0, a.jsx)("span", {
                      className: (0, l.A)(
                        "flex min-w-0 items-center gap-1 text-xs leading-4.5 font-normal",
                        eI ? "text-tertiary" : "text-secondary",
                      ),
                      "data-library-item-metadata": "",
                      children: eR,
                    })
                  : null),
                (K[64] = eR),
                (K[65] = eT),
                (K[66] = eI),
                (K[67] = O))
              : (O = K[67]),
            K[68] !== R || K[69] !== O
              ? ((G = (0, a.jsxs)("span", { className: "ms-3 flex min-w-0 flex-1 flex-col", children: [R, O] })),
                (K[68] = R),
                (K[69] = O),
                (K[70] = G))
              : (G = K[70]),
            K[71] !== C || K[72] !== A || K[73] !== k || K[74] !== G
              ? ((Y = (0, a.jsxs)("div", {
                  role: "gridcell",
                  "data-library-column": "name",
                  tabIndex: 0,
                  onKeyDown: C,
                  className:
                    "group/library-row-title flex min-w-0 flex-1 items-center outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: [A, k, G],
                })),
                (K[71] = C),
                (K[72] = A),
                (K[73] = k),
                (K[74] = G),
                (K[75] = Y))
              : (Y = K[75]),
            K[76] !== Q || K[77] !== Y
              ? ((L = (0, a.jsx)(s.m, { content: Q, enabledWhen: "target-overflows", children: Y })),
                (K[76] = Q),
                (K[77] = Y),
                (K[78] = L))
              : (L = K[78]))
          let ez = eT ? null : eR
          return (
            K[79] !== eo || K[80] !== eT
              ? ((D =
                  eT && null != eo
                    ? (0, a.jsx)("span", {
                        role: "gridcell",
                        "data-library-column": "shared",
                        className: (0, l.A)(
                          "relative z-10 overflow-hidden text-sm leading-5 whitespace-nowrap text-secondary",
                          _.D,
                        ),
                        children: eo,
                      })
                    : null),
                (K[79] = eo),
                (K[80] = eT),
                (K[81] = D))
              : (D = K[81]),
            K[82] !== ed
              ? ((F =
                  null != ed
                    ? (0, a.jsx)("span", {
                        role: "gridcell",
                        "data-library-column": "owner",
                        className:
                          "pointer-events-none relative z-10 hidden w-40 shrink-0 text-sm leading-5 @lg/library-row:block",
                        children: ed,
                      })
                    : null),
                (K[82] = ed),
                (K[83] = F))
              : (F = K[83]),
            K[84] !== Z?.onUnmodifiedClick || K[85] !== eo || K[86] !== eT
              ? ((H = (0, l.A)(
                  "relative z-10 flex min-h-9 items-center justify-end gap-1",
                  (0, _.H)(eT && null != eo),
                  Z?.onUnmodifiedClick != null && "pointer-events-none",
                )),
                (K[84] = Z?.onUnmodifiedClick),
                (K[85] = eo),
                (K[86] = eT),
                (K[87] = H))
              : (H = K[87]),
            K[88] !== eg ? ((U = eg?.map(y)), (K[88] = eg), (K[89] = U)) : (U = K[89]),
            K[90] !== H || K[91] !== U
              ? ((B = (0, a.jsx)("span", {
                  role: "gridcell",
                  "data-library-column": "actions",
                  className: H,
                  children: U,
                })),
                (K[90] = H),
                (K[91] = U),
                (K[92] = B))
              : (B = K[92]),
            K[93] !== h || K[94] !== w || K[95] !== L || K[96] !== ez || K[97] !== D || K[98] !== F || K[99] !== B
              ? ((q = (0, a.jsxs)("div", { className: h, children: [w, L, ez, D, F, B] })),
                (K[93] = h),
                (K[94] = w),
                (K[95] = L),
                (K[96] = ez),
                (K[97] = D),
                (K[98] = F),
                (K[99] = B),
                (K[100] = q))
              : (q = K[100]),
            K[101] !== X ||
            K[102] !== Q ||
            K[103] !== ew ||
            K[104] !== f ||
            K[105] !== eD ||
            K[106] !== m ||
            K[107] !== q
              ? ((z = (0, a.jsx)(u.fy, {
                  className: f,
                  ariaLabel: Q,
                  ariaDescribedBy: X,
                  density: "row",
                  role: "row",
                  isSelected: ew,
                  showDivider: eD,
                  onSelect: m,
                  title: Q,
                  children: q,
                })),
                (K[101] = X),
                (K[102] = Q),
                (K[103] = ew),
                (K[104] = f),
                (K[105] = eD),
                (K[106] = m),
                (K[107] = q),
                (K[108] = z))
              : (z = K[108]),
            K[109] !== W || K[110] !== c || K[111] !== d || K[112] !== z
              ? (($ = (0, a.jsx)("div", { ref: W, className: c, role: "presentation", onKeyDown: d, children: z })),
                (K[109] = W),
                (K[110] = c),
                (K[111] = d),
                (K[112] = z),
                (K[113] = $))
              : ($ = K[113]),
            $
          )
        },
        zs: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("div", {
                  "aria-hidden": "true",
                  className: x.A.header,
                  children: (0, a.jsx)("div", { "data-selectable-list-row-group-header": "", className: I }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  e3Ux(e, t, r) {
    var a = r("zd8w")
    let n = (0, a.createContext)(new Map()),
      s = (0, a.createContext)(void 0),
      l = (0, a.createContext)(void 0),
      i = (0, a.createContext)({ defer: !1, pageList: !1 })
    r.d(t, {}, { fR: s, hm: i, pr: n, rk: l })
  },
  PyW6(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("zd8w"),
      l = r("e3Ux")
    r.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            r,
            i = (0, n.c)(4),
            { children: o } = e
          i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (i[0] = t)) : (t = i[0])
          let [c, d] = (0, s.useState)(t)
          return (
            i[1] !== o || i[2] !== c
              ? ((r = (0, a.jsx)(l.fR, { value: d, children: (0, a.jsx)(l.pr, { value: c, children: o }) })),
                (i[1] = o),
                (i[2] = c),
                (i[3] = r))
              : (r = i[3]),
            r
          )
        },
        s: function (e) {
          let t,
            r,
            a = (0, n.c)(7),
            { pending: i, landscape: o } = e,
            c = void 0 !== i && i,
            d = (0, s.useContext)(l.fR),
            u = (0, s.useContext)(l.rk),
            p = (0, s.useId)()
          return (
            a[0] !== p || a[1] !== o || a[2] !== u || a[3] !== c || a[4] !== d
              ? ((t = () => (
                  d?.((e) => new Map(e).set(p, { leaf: u, pending: c, landscape: o })),
                  () =>
                    d?.((e) => {
                      let t = new Map(e)
                      return (t.delete(p), t)
                    })
                )),
                (r = [d, p, u, c, o]),
                (a[0] = p),
                (a[1] = o),
                (a[2] = u),
                (a[3] = c),
                (a[4] = d),
                (a[5] = t),
                (a[6] = r))
              : ((t = a[5]), (r = a[6])),
            (0, s.useLayoutEffect)(t, r),
            null
          )
        },
      },
    )
  },
  VDXL(e, t, r) {
    var a = r("on57")
    r.d(
      t,
      {},
      {
        D: "w-5 shrink-0 @2xl/library-row:w-32 @4xl/library-row:w-40 @6xl/library-row:w-60",
        H: function (e) {
          return (0, a.A)("w-24 shrink-0 pointer-coarse:w-32", e && "@max-2xl/library-row:w-15")
        },
      },
    )
  },
  FNdB(e, t, r) {
    r.d(t, { k: () => i })
    var a = r("ABep"),
      n = r("QosV"),
      s = r("on57"),
      l = "sheet-O6z1ek"
    function i(e) {
      let t,
        r,
        i,
        o,
        c,
        d,
        u,
        p,
        f,
        m = (0, n.c)(27),
        { children: g, metadata: h, fallbackBackground: _, placeholder: x, hidden: y, template: b, variant: v } = e,
        N = void 0 !== b && b,
        j = void 0 === v ? "contained" : v,
        w = Math.min(3, h?.slideCount ?? 3),
        C = w - 1,
        A = h?.backgroundColor ?? _
      m[0] !== C || m[1] !== A
        ? ((t = { "--slide-stack-steps": C, "--slide-stack-background": A }), (m[0] = C), (m[1] = A), (m[2] = t))
        : (t = m[2])
      let T = t,
        k = void 0 !== y && y && "invisible",
        E = N && "template-hnIovS",
        I = void 0 !== x && x && "placeholder-QofXX3",
        S = "contained-2" === j && "contained2-BrWa8U",
        P = "contained-3" === j && "contained3-qDOTMi"
      m[3] !== I || m[4] !== S || m[5] !== P || m[6] !== k || m[7] !== E
        ? ((r = (0, s.A)("stage-ZNSnIy", k, E, I, S, P)),
          (m[3] = I),
          (m[4] = S),
          (m[5] = P),
          (m[6] = k),
          (m[7] = E),
          (m[8] = r))
        : (r = m[8])
      let M = N && "space-template-artwork"
      return (
        m[9] !== M ? ((i = (0, s.A)("stack-dWUzjw", M)), (m[9] = M), (m[10] = i)) : (i = m[10]),
        m[11] !== w
          ? ((o = w >= 3 && (0, a.jsx)("span", { className: (0, s.A)(l, "back-C5iO1t") })), (m[11] = w), (m[12] = o))
          : (o = m[12]),
        m[13] !== w
          ? ((c = w >= 2 && (0, a.jsx)("span", { className: (0, s.A)(l, "middle-oWWdxG") })), (m[13] = w), (m[14] = c))
          : (c = m[14]),
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.A)(l, "front-YhxEeu")), (m[15] = d))
          : (d = m[15]),
        m[16] !== g ? ((u = (0, a.jsx)("span", { className: d, children: g })), (m[16] = g), (m[17] = u)) : (u = m[17]),
        m[18] !== i || m[19] !== o || m[20] !== c || m[21] !== u
          ? ((p = (0, a.jsxs)("span", { className: i, children: [o, c, u] })),
            (m[18] = i),
            (m[19] = o),
            (m[20] = c),
            (m[21] = u),
            (m[22] = p))
          : (p = m[22]),
        m[23] !== T || m[24] !== r || m[25] !== p
          ? ((f = (0, a.jsx)("span", {
              "aria-hidden": !0,
              "data-slide-stack": "",
              className: r,
              style: T,
              children: p,
            })),
            (m[23] = T),
            (m[24] = r),
            (m[25] = p),
            (m[26] = f))
          : (f = m[26]),
        f
      )
    }
  },
  LhrG(e, t, r) {
    var a = r("tFxw"),
      n = r("D7Ms"),
      s = r("Kwur"),
      l = r("eShZ"),
      i = r("jgEm"),
      o = r("MExO")
    async function c(e, t, r) {
      let n,
        c = (0, o.CN)(e)
      if (null != c) {
        r.throwIfAborted()
        let n = await s.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
          parameters: { path: { provider_key: c.provider } },
          requestBody: { file_id: e },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
          signal: r,
        })
        r.throwIfAborted()
        let l = (0, o.CN)(n.file_id)
        if (
          n.file_id !== e &&
          ((0, a.YO)(e)?.encodedAccountKey != null || l?.provider !== c.provider || l.nativeFileId !== c.nativeFileId)
        )
          throw Error("Provider file metadata does not match the requested file")
        return {
          id: n.file_id,
          kind: "file",
          name: n.name,
          parent_directory_id: null,
          access_kind: "mounted",
          mime_type: n.mime_type,
          file_size_bytes: n.file_size_bytes,
        }
      }
      let d = {
        parameters: { path: { library_file_id: e } },
        additionalHeaders: { "ChatGPT-Account-ID": t },
        expectedErrorStatuses: [403, 404],
        signal: r,
      }
      if ((r.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
        let t = await s.Request.safeGet("/files/library/files/{library_file_id}/node", d)
        return (r.throwIfAborted(), (0, i.U9)(t, e))
      }
      try {
        let e = await s.Request.safeGet("/files/library/files/{library_file_id}", d)
        return (r.throwIfAborted(), e)
      } catch (e) {
        if (!(e instanceof l.FetchError) || (403 !== e.status && 404 !== e.status)) throw e
      }
      r.throwIfAborted()
      try {
        if (
          ((n = await s.Request.safeGet("/files/library/files/{library_file_id}/node", d)),
          r.throwIfAborted(),
          "owned" === n.access_kind && "image" === n.library_file_category && null == n.library_artifact_type)
        ) {
          let e = await s.Request.safeGet("/files/library/files/{library_file_id}/versions", {
            ...d,
            parameters: { ...d.parameters, query: { limit: 1 } },
          })
          return (
            r.throwIfAborted(),
            { ...n, library_artifact_type: e.items[0]?.library_artifact_type ?? n.library_artifact_type }
          )
        }
        return (0, i.U9)(n, e)
      } catch (o) {
        if (!(o instanceof l.FetchError) || (403 !== o.status && 404 !== o.status)) throw o
        let t = null,
          a = new Set()
        do {
          r.throwIfAborted()
          let n = await s.Request.safePost("/files/library", {
            requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
            additionalHeaders: d.additionalHeaders,
            expectedErrorStatuses: [403, 404],
            signal: r,
          })
          r.throwIfAborted()
          let l = n.items.find((t) => t.id === e)
          if (null != l) return l
          if (null == (t = n.cursor ?? null) || a.has(t)) break
          a.add(t)
        } while (null != t)
        if (null != n) return (0, i.U9)(n, e)
        throw o
      }
    }
    r.d(
      t,
      {},
      {
        F: c,
        h: function (e, t, r) {
          return {
            queryKey: ["library-api", e, t, "file", r],
            queryFn: null != r && null != e ? ({ signal: t }) => c(r, e, t) : n.hT,
            gcTime: 0,
            staleTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
          }
        },
      },
    )
  },
  HBVP(e, t, r) {
    var a = r("DBCl"),
      n = r("Kwur"),
      s = r("WLtw"),
      l = r("zHp1"),
      i = r("rvFo"),
      o = r("LhrG"),
      c = r("UxLW"),
      d = r("vvmK")
    function u({
      accountId: e,
      userId: t,
      file: r,
      browserLibraryFileId: l = r.id,
      currentVersion: i,
      thumbnailSize: o,
      modifiedAt: c,
      useDownloadUrlAsImageSrc: p = !1,
    }) {
      let f = p && null != l && (0, a.PKK)(l) ? l : r.file_id
      return {
        cacheKey: [
          "library-file-preview-image",
          {
            accountId: e ?? null,
            userId: t ?? null,
            fileId: f,
            browserLibraryFileId: l ?? null,
            currentVersion: i ?? 0,
            ...(null != o && { thumbnailSize: o }),
            modifiedAt: i ? null : (c ?? null),
            useDownloadUrlAsImageSrc: p,
          },
        ],
        useDownloadUrlAsImageSrc: p,
        omitRasterDataUrl: p,
        resolveAsset: async () => {
          let a =
            null != o && null != l
              ? await (async function (e, t, r, a) {
                  let l = { library_file_id: e },
                    i = {
                      expectedIdentity: null != r && null != a ? { accountId: r, userId: a } : void 0,
                      additionalHeaders: null != r ? { "ChatGPT-Account-ID": r } : void 0,
                      retry: "never",
                    },
                    o = n.Request.safeGet("/files/library/files/{library_file_id}/content_url", {
                      ...i,
                      parameters: { path: l },
                    })
                  o.catch(() => void 0)
                  let { thumbnail_url: c } = await n.Request.safeGet(
                    "/files/library/files/{library_file_id}/thumbnail_url",
                    { ...i, parameters: { path: l, query: { size: t, generate_if_missing: !1 } } },
                  )
                  return (0, s.LX)({ download_url: c ?? (await o).content_url })
                })(l, o, e, t)
              : await (0, d.n$)({ ...r, file_id: f }, { browserLibraryFileId: l, showInline: !0 })
          return null != a.libraryFileState
            ? { kind: "trashed", libraryFileId: a.libraryFileState.libraryFileId }
            : {
                kind: "available",
                ...a,
                requestHeaders:
                  null == a.requestHeaders || null == e
                    ? a.requestHeaders
                    : { ...a.requestHeaders, "ChatGPT-Account-ID": e },
              }
        },
      }
    }
    r.d(
      t,
      {},
      {
        L: u,
        g: async function (e, t, r, a, n) {
          if (a.aborted || !n() || null != (0, c.AG)(t)) return
          let { accountId: s, userId: d, requestUserId: p } = r,
            f = await e.fetchQuery({
              queryKey: ["library-api", s, d, "file", t],
              queryFn: () => (0, o.F)(t, s, a),
              staleTime: i.D.FIVE_MINUTES,
              gcTime: i.D.FIVE_MINUTES,
              retry: !1,
            })
          if (
            a.aborted ||
            !n() ||
            !(f.mime_type?.startsWith("image/") || "image" === f.library_file_category) ||
            null != (0, c.AG)(f.id)
          )
            return
          let m = "current_version_number" in f ? f.current_version_number : void 0,
            g = f.file_upload_time ?? null,
            h = {
              id: f.id,
              file_id: "file_name" in f ? (f.file_id ?? f.id) : f.id,
              file_name: "file_name" in f ? f.file_name : f.name,
              gizmo_id: f.gizmo_id,
              mime_type: f.mime_type,
            }
          await (0, l.r1)(
            e,
            f.id,
            u({
              accountId: s,
              userId: p,
              file: h,
              browserLibraryFileId: f.id,
              currentVersion: m,
              modifiedAt: g,
              useDownloadUrlAsImageSrc: !0,
            }),
            a,
            n,
          )
        },
      },
    )
  },
  RcOP(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("qmMi"),
      l = r("Ywss"),
      i = r("FtQW"),
      o = r("jU86"),
      c = r("wHLp")
    r.d(
      t,
      {},
      {
        ProductFavoriteAction: function (e) {
          let t,
            r,
            d,
            u,
            p,
            f = (0, n.c)(18),
            {
              className: m,
              visibility: g,
              accountId: h,
              userId: _,
              conversationId: x,
              messageId: y,
              request: b,
              surface: v,
            } = e,
            N = (0, l.Zp)()
          ;(f[0] !== h || f[1] !== _
            ? ((t = { accountId: h, userId: _ }), (f[0] = h), (f[1] = _), (f[2] = t))
            : (t = f[2]),
            f[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = { product_card: "product-card", image_tile: "media-overlay", product_sidebar: "entity-header" }),
                (f[3] = r))
              : (r = f[3]))
          let j = r[v]
          return (
            f[4] !== N
              ? ((d = (e) => {
                  N((0, c.h)(null == e ? "/library?tab=favorites" : `/library/d/${encodeURIComponent(e)}`, "banner"))
                }),
                (f[4] = N),
                (f[5] = d))
              : (d = f[5]),
            f[6] !== m ||
            f[7] !== x ||
            f[8] !== y ||
            f[9] !== b ||
            f[10] !== v ||
            f[11] !== j ||
            f[12] !== d ||
            f[13] !== g
              ? ((u = (0, a.jsx)(i.g, {
                  className: m,
                  visibility: g,
                  appearance: j,
                  conversationId: x,
                  messageId: y,
                  request: b,
                  surface: v,
                  onOpenLibrary: d,
                })),
                (f[6] = m),
                (f[7] = x),
                (f[8] = y),
                (f[9] = b),
                (f[10] = v),
                (f[11] = j),
                (f[12] = d),
                (f[13] = g),
                (f[14] = u))
              : (u = f[14]),
            f[15] !== t || f[16] !== u
              ? ((p = (0, a.jsx)(s.Ui, { scope: o.oD, value: t, children: u })), (f[15] = t), (f[16] = u), (f[17] = p))
              : (p = f[17]),
            p
          )
        },
      },
    )
  },
  SxYm(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("qmMi"),
      l = r("zd8w"),
      i = r("rWfF"),
      o = r("VBQw"),
      c = r("DC2G"),
      d = r("OWtl")
    function u(e) {
      return "" !== e.trim()
    }
    r.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            r,
            p,
            f,
            m,
            g,
            h,
            _ = (0, n.c)(23),
            { product: x, images: y, imageAnalytics: b } = e,
            v = (0, s.gh)(d.u),
            [N, j] = (0, l.useState)(0)
          ;(_[0] !== y ? ((t = new Set(y.filter(u))), (_[0] = y), (_[1] = t)) : (t = _[1]),
            _[2] !== t ? ((r = [...t]), (_[2] = t), (_[3] = r)) : (r = _[3]))
          let w = r,
            C = w[N],
            A = 0 === w.length
          _[4] !== b || _[5] !== x || _[6] !== v
            ? ((p = () => {
                ;(0, o.b2)(v, { product: x, productId: x.id ?? "", imageUrl: "", ...b, reason: "missing_url" })
              }),
              (_[4] = b),
              (_[5] = x),
              (_[6] = v),
              (_[7] = p))
            : (p = _[7])
          let T = (0, l.useEffectEvent)(p)
          ;(_[8] !== T || _[9] !== A
            ? ((f = () => {
                A && T()
              }),
              (_[8] = T),
              (_[9] = A),
              (_[10] = f))
            : (f = _[10]),
            _[11] !== A || _[12] !== x.id ? ((m = [A, x.id]), (_[11] = A), (_[12] = x.id), (_[13] = m)) : (m = _[13]),
            (0, l.useEffect)(f, m))
          let k = "browse" === b.surface || void 0
          return (
            _[14] !== C || _[15] !== b || _[16] !== N || _[17] !== w.length || _[18] !== x
              ? ((g = C
                  ? (0, a.jsx)(
                      i.u,
                      {
                        src: C,
                        product: x,
                        imageAnalytics: b,
                        hasFallbackImage: N + 1 < w.length,
                        loadTimeoutMs: 8e3,
                        alt: x.title,
                        loading: "lazy",
                        draggable: !1,
                        className: "m-0 block h-full w-full object-contain mix-blend-darken select-none",
                        onError: () => j(N + 1),
                      },
                      C,
                    )
                  : (0, a.jsx)(c.Y, { alt: x.title })),
                (_[14] = C),
                (_[15] = b),
                (_[16] = N),
                (_[17] = w.length),
                (_[18] = x),
                (_[19] = g))
              : (g = _[19]),
            _[20] !== k || _[21] !== g
              ? ((h = (0, a.jsx)("div", {
                  className: "relative isolate aspect-square w-full overflow-hidden rounded-xl bg-artifact-photo-paper",
                  "data-shopping-browse-product-image": k,
                  children: g,
                })),
                (_[20] = k),
                (_[21] = g),
                (_[22] = h))
              : (h = _[22]),
            h
          )
        },
      },
    )
  },
  EZCZ(e, t, r) {
    r.d(
      t,
      {},
      {
        E: function (e) {
          let t = document.createElement("canvas")
          ;((t.width = 16), (t.height = 16))
          let r = t.getContext("2d", { willReadFrequently: !0 })
          if (null != r)
            try {
              r.drawImage(e, 0, 0, 16, 16)
              let t = r.getImageData(0, 0, 16, 16).data,
                a = new Map()
              for (let e = 0; e < 16; e++)
                for (let r = 0; r < 16; r++) {
                  if (r > 1 && r < 14 && e > 1 && e < 14) continue
                  let n = (16 * e + r) * 4
                  if (t[n + 3] < 128) continue
                  let [s, l, i] = [t[n], t[n + 1], t[n + 2]],
                    o = `${Math.floor(s / 16)}:${Math.floor(l / 16)}:${Math.floor(i / 16)}`,
                    c = a.get(o) ?? { count: 0, r: 0, g: 0, b: 0 }
                  ;(c.count++, (c.r += s), (c.g += l), (c.b += i), a.set(o, c))
                }
              let n = [...a.values()].sort((e, t) => t.count - e.count)[0]
              if (null == n) return
              return `rgb(${Math.round(n.r / n.count)}, ${Math.round(n.g / n.count)}, ${Math.round(n.b / n.count)})`
            } catch {
              return
            }
        },
      },
    )
  },
  ecE5(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("zd8w"),
      l = r("oyxz"),
      i = r("lmaZ"),
      o = r("cZk2")
    let c = (0, r("Bbed")._)(async () => (await r.e(270877).then(r.bind(r, "WAVn"))).AppConnectModal, {
      suspendToParent: !0,
      errorFallback: (e) => (0, a.jsx)(d, { ...e, failed: !0 }),
    })
    function d(e) {
      let t,
        r,
        c,
        d,
        u,
        p,
        f = (0, n.c)(18),
        { app: m, connectorId: g, onOpenChange: h, onUserDismissed: _, onPreloadFailed: x, failed: y, embedded: b } = e,
        v = void 0 !== y && y,
        N = (0, s.useRef)(!1),
        j = null != m || null != g
      return (
        f[0] !== v || f[1] !== x || f[2] !== j
          ? ((t = () => {
              j && v && null != x && !N.current && ((N.current = !0), x())
            }),
            (r = [v, x, j]),
            (f[0] = v),
            (f[1] = x),
            (f[2] = j),
            (f[3] = t),
            (f[4] = r))
          : ((t = f[3]), (r = f[4])),
        (0, s.useEffect)(t, r),
        f[5] !== h || f[6] !== _
          ? ((c = (e) => {
              ;(e || _?.(), h(e))
            }),
            (f[5] = h),
            (f[6] = _),
            (f[7] = c))
          : (c = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(l.A, {
              id: "appConnectModal.loadError",
              defaultMessage: "Couldn\u2019t open app connection",
            })),
            (f[8] = d))
          : (d = f[8]),
        f[9] !== b || f[10] !== v
          ? ((u = v ? null : (0, a.jsx)(i.$, { embedded: b })), (f[9] = b), (f[10] = v), (f[11] = u))
          : (u = f[11]),
        f[12] !== b || f[13] !== v || f[14] !== j || f[15] !== c || f[16] !== u
          ? ((p = (0, a.jsx)(o.k, {
              open: j,
              size: "setup",
              onOpenChange: c,
              failed: v,
              embedded: b,
              title: d,
              children: u,
            })),
            (f[12] = b),
            (f[13] = v),
            (f[14] = j),
            (f[15] = c),
            (f[16] = u),
            (f[17] = p))
          : (p = f[17]),
        p
      )
    }
    r.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            r = (0, n.c)(3),
            l = null != e.app || null != e.connectorId,
            [i, o] = (0, s.useState)(l)
          return (
            l && !i && o(!0),
            r[0] !== i || r[1] !== e
              ? ((t = i
                  ? (0, a.jsx)(s.Suspense, {
                      fallback: !1 === e.showLoadingDialog ? null : (0, a.jsx)(d, { ...e }),
                      children: (0, a.jsx)(c, { ...e }),
                    })
                  : null),
                (r[0] = i),
                (r[1] = e),
                (r[2] = t))
              : (t = r[2]),
            t
          )
        },
        s: function () {
          return c.prefetch()
        },
      },
    )
  },
  fnPc(e, t, r) {
    var a = r("QosV"),
      n = r("qmMi"),
      s = r("Ywss"),
      l = r("tl5a"),
      i = r("eFn4"),
      o = r("kx7U"),
      c = r("OWtl"),
      d = r("kfGJ"),
      u = r("fHlE")
    let p = (0, n.vP)(c.u, d.fI),
      f = (0, n.un)(c.u, ({ get: e }) => e(o.u8)?.filter(({ hostId: t }) => "connected" === e(l.y2, t)))
    function m(e, t) {
      e.set(p, t)
    }
    r.d(
      t,
      {},
      {
        D8: function () {
          let e,
            t,
            r,
            l,
            o = (0, a.c)(20),
            g = (0, n.gh)(c.u),
            h = (0, s.Zp)(),
            [_, x] = (0, s.ok)(),
            y = null != (0, s.RQ)("/settings/*"),
            b = (0, s.RQ)("/settings/plugins-settings/hosts/:hostId/plugins/:pluginId"),
            v = (0, n.Ul)(i.Xr),
            N = (0, n.Ul)(f),
            j = (0, n.Ul)(p)
          o[0] !== b?.params.hostId || o[1] !== y || o[2] !== _ || o[3] !== j
            ? ((e = b?.params.hostId || (y ? _.get("hostId")?.trim() : null) || j),
              (o[0] = b?.params.hostId),
              (o[1] = y),
              (o[2] = _),
              (o[3] = j),
              (o[4] = e))
            : (e = o[4])
          let w = e,
            C = v ? N : void 0
          return (
            o[5] !== v || o[6] !== N || o[7] !== w
              ? ((t = v ? (0, u.B)(w, N) : d.fI), (o[5] = v), (o[6] = N), (o[7] = w), (o[8] = t))
              : (t = o[8]),
            o[9] !== b || o[10] !== y || o[11] !== h || o[12] !== g || o[13] !== _ || o[14] !== x
              ? ((r = (e) => {
                  ;(m(g, e), null != b)
                    ? h(
                        {
                          pathname: "/settings/plugins-settings",
                          search: new URLSearchParams({ hostId: e }).toString(),
                        },
                        { replace: !0 },
                      )
                    : y && _.has("hostId") && x((t) => (t.set("hostId", e), t), { replace: !0 })
                }),
                (o[9] = b),
                (o[10] = y),
                (o[11] = h),
                (o[12] = g),
                (o[13] = _),
                (o[14] = x),
                (o[15] = r))
              : (r = o[15]),
            o[16] !== C || o[17] !== t || o[18] !== r
              ? ((l = { connectedRemoteConnections: C, selectedHostId: t, setSelectedHostId: r }),
                (o[16] = C),
                (o[17] = t),
                (o[18] = r),
                (o[19] = l))
              : (l = o[19]),
            l
          )
        },
        aY: m,
      },
    )
  },
  fHlE(e, t, r) {
    var a = r("kfGJ")
    r.d(
      t,
      {},
      {
        B: function (e, t) {
          return null == t || e === a.fI || t.some((t) => t.hostId === e) ? e : a.fI
        },
        j: function (e, t) {
          return e.filter((e) =>
            t === a.fI ? "local" === e.projectKind : "remote" === e.projectKind && e.hostId === t,
          )
        },
      },
    )
  },
  VSSi(e, t, r) {
    var a = r("qmMi"),
      n = r("OWtl"),
      s = r("OMIV")
    let l = (0, a.SZ)(
      n.u,
      ({ get: e }) => e(s.M9)?.getContext().user.customIDs?.workspace_id,
      ({ get: e, set: t }) => {
        let r = e(s.M9)
        if (null == r) return
        let a = () => {
          t(r.getContext().user.customIDs?.workspace_id)
        }
        return (r.on("values_updated", a), () => r.off("values_updated", a))
      },
    )
    r.d(t, {}, { Q: l })
  },
  q5VV(e, t, r) {
    var a = r("ABep"),
      n = r("ASxG"),
      s = r("EpL9"),
      l = r("bVeK"),
      i = r("Bbed"),
      o = r("vNsB")
    let c = (0, i._)(
        async () =>
          (
            await Promise.all([
              r.e(273709),
              r.e(877217),
              r.e(90304),
              r.e(584510),
              r.e(403035),
              r.e(8431),
              r.e(93318),
              r.e(231570),
            ]).then(r.bind(r, "lhHX"))
          ).ProfileTabContent,
      ),
      d = n.KCZ([n.Ikc({ profileUrl: n.YjP().min(1) }), n.Ikc({ username: n.YjP().min(1) })]),
      u = { kind: "profile", durableRoute: { version: 1 }, isAvailable: () => !0 }
    r.d(
      t,
      {},
      {
        A: u,
        Y: function ({ open: e }) {
          return (0, s.v)(u.kind, c, {
            durableRoute: {
              version: u.durableRoute.version,
              serialize: (e, { profileUrl: t }) => ({ kind: u.kind, payloadVersion: 1, params: { profileUrl: t } }),
              restore: ({
                scope: t,
                descriptor: r,
                insertPosition: a,
                revealAndFocus: n,
                target: s,
                isDisconnected: l,
              }) => {
                let i = d.safeParse(r.params)
                if (1 !== r.payloadVersion || !i.success) return !1
                let o = "profileUrl" in i.data ? i.data.profileUrl : `/u/${encodeURIComponent(i.data.username)}`
                return l() || e(t, o, { tabId: r.tabId, insertPosition: a, revealAndFocus: n, target: s })
              },
            },
            getIcon: () => (0, a.jsx)(l.ZDC, {}),
            getTitle: (e, { profileUrl: t }) => `@${(0, o.G)(t)?.username ?? ""}`,
            isAvailable: u.isAvailable,
            showInNewTabLauncher: !1,
            open: e,
          })
        },
      },
    )
  },
  dHX4(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      s = r("zd8w"),
      l = r("v7qY"),
      i = r("giDA")
    let o = (0, s.createContext)([]),
      c = (0, s.createContext)(null)
    function d(e) {
      let { id: t, container: r, children: a } = e
      return (0, l.createPortal)(a, r, t)
    }
    r.d(
      t,
      {},
      {
        Dc: function () {
          let e,
            t,
            r = (0, n.c)(4),
            l = (0, s.useContext)(o)
          return (
            r[0] !== l ? ((e = l.map(d)), (r[0] = l), (r[1] = e)) : (e = r[1]),
            r[2] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (r[2] = e), (r[3] = t)) : (t = r[3]),
            t
          )
        },
        MO: function (e) {
          let t,
            r = (0, n.c)(5),
            { children: l } = e,
            o = (0, s.useContext)(c),
            d = (0, s.useContext)(i.J),
            u = (0, s.useId)()
          return (
            r[0] !== l || r[1] !== u || r[2] !== d || r[3] !== o
              ? ((t =
                  null == o
                    ? (0, a.jsx)(a.Fragment, { children: l })
                    : (0, a.jsx)("div", {
                        className: "contents",
                        ref: (e) => {
                          if (null != e)
                            return (
                              o((t) => [
                                ...t,
                                { id: u, container: e, children: (0, a.jsx)(i.J, { value: d, children: l }) },
                              ]),
                              () => o((e) => e.filter((e) => e.id !== u))
                            )
                        },
                      })),
                (r[0] = l),
                (r[1] = u),
                (r[2] = d),
                (r[3] = o),
                (r[4] = t))
              : (t = r[4]),
            t
          )
        },
        gq: function (e) {
          let t,
            r,
            l = (0, n.c)(4),
            { children: i } = e
          l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (l[0] = t)) : (t = l[0])
          let [d, u] = (0, s.useState)(t)
          return (
            l[1] !== i || l[2] !== d
              ? ((r = (0, a.jsx)(c, { value: u, children: (0, a.jsx)(o, { value: d, children: i }) })),
                (l[1] = i),
                (l[2] = d),
                (l[3] = r))
              : (r = l[3]),
            r
          )
        },
      },
    )
  },
  GEsy(e, t, r) {
    var a = r("QosV"),
      n = r("zd8w")
    r.d(
      t,
      {},
      {
        o: function (e, t) {
          let r,
            s,
            l = (0, a.c)(4),
            [i, o] = (0, n.useState)(e)
          return (
            l[0] !== t || l[1] !== e
              ? ((r = () => {
                  let r = window.setTimeout(() => o(e), t)
                  return () => window.clearTimeout(r)
                }),
                (s = [e, t]),
                (l[0] = t),
                (l[1] = e),
                (l[2] = r),
                (l[3] = s))
              : ((r = l[2]), (s = l[3])),
            (0, n.useEffect)(r, s),
            i
          )
        },
      },
    )
  },
  Ax48(e, t, r) {
    let a = (0, r("ESTr").a)({
      name: "flashcards-landscape-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.026367, y: 1.326172, width: 17.891602, height: 17.405273 },
        visualBounds: { x: 1.026367, y: 1.326172, width: 17.891602, height: 17.405273 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.026367, y: 1.326172, width: 17.891602, height: 17.405273 },
        center: { x: 9.972168, y: 10.028809 },
        insets: { top: 1.326172, right: 1.082031, bottom: 1.268555, left: 1.026367 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.972168, y: 10.028809 },
          foreground: { x: 9.972168, y: 10.028809 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M5.26122 3.43315C5.51105 2.02663 6.87242 1.11945 8.27489 1.36674L16.7544 2.86284C18.1576 3.11043 19.1275 4.42931 18.8794 5.83745L17.6567 12.772C17.4752 13.8017 16.6969 14.5607 15.7436 14.7994C15.8308 16.1384 14.847 17.3177 13.4995 17.5074L4.97118 18.7056C3.56006 18.9037 2.22982 17.9497 2.03075 16.5337L1.05126 9.5601C0.852434 8.14412 1.86767 6.86007 3.2788 6.66167L4.71141 6.45952L5.26122 3.43315ZM11.9917 6.77983L3.46434 7.97807C2.74909 8.07865 2.27666 8.71729 2.36864 9.37456L3.34813 16.3482C3.44054 17.0057 4.0711 17.4897 4.78661 17.3892L13.314 16.19C14.0294 16.0894 14.5021 15.451 14.4097 14.7935L13.4292 7.82085C13.3366 7.16359 12.707 6.67951 11.9917 6.77983ZM8.04344 2.67729C7.33202 2.55194 6.68428 3.01286 6.56883 3.66655V3.67046L6.09813 6.26421L11.8061 5.46245C13.2173 5.26418 14.5474 6.21936 14.7466 7.6353L15.5659 13.4654C15.9668 13.3133 16.2715 12.97 16.3472 12.5415L17.5708 5.606C17.6856 4.95233 17.2343 4.29784 16.5229 4.17241L8.04344 2.67729Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    r.d(t, {}, { H: a })
  },
}
//# sourceMappingURL=180682.5e85675387.js.map
