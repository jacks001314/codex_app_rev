export const __rspack_esm_ids = [296884]
export const __webpack_modules__ = {
  wbH5(e, t, a) {
    a.d(t, { ShoppingForYouPage: () => tr })
    var r = a("ABep"),
      s = a("QosV"),
      n = a("zTeN"),
      o = a("zd8w"),
      i = a("oyxz"),
      l = a("Wf1j"),
      c = a("HZfM"),
      d = a("ASxG"),
      u = a("Sm6l"),
      p = a("Bbed"),
      f = a("PkPj"),
      g = a("BrP7"),
      m = a("IxWh"),
      h = a("bqtn"),
      y = a("bVeK"),
      x = a("OWtl"),
      _ = a("eGPX"),
      v = a("Qgfj")
    let b = ["tech", "home", "style", "beauty", "outdoors", "gifts"],
      j = {
        continue_shopping: "intent",
        upcoming: "intent",
        favorite_brands: "preference",
        ownership_complements: "ownership",
      },
      k = { intent: 0, preference: 1, ownership: 2, exploration: 3 }
    function w(e) {
      return "deal" in e && Number.isFinite(e.deal.sale_price) && !(e.deal.sale_price <= 0) && e.deal.currency.trim()
        ? { amount: e.deal.sale_price, currency: e.deal.currency }
        : null
    }
    function A({
      items: e,
      page: t,
      category: a,
      subcategory: r,
      sort: s = "recommended",
      additionalCategoryItems: n = [],
    }) {
      let o = new Set(),
        i = []
      for (let t of e) o.has(t.id) || (o.add(t.id), i.push(t))
      let l = i.filter((e) => null == a || e.category === a),
        c = [
          ...new Set(
            [...l, ...n.filter((e) => e.category === a)].flatMap((e) => (null == e.subcategory ? [] : [e.subcategory])),
          ),
        ],
        d = null != r && c.includes(r) ? r : void 0,
        u = M(l.filter((e) => null == d || e.subcategory === d)),
        p = new Set(
          u.flatMap((e) => {
            let t = w(e)
            return t ? [t.currency] : []
          }),
        ),
        f = 1 === p.size && u.every(w) ? ([...p][0] ?? null) : null
      "recommended" !== s &&
        null != f &&
        u.sort((e, t) => {
          let a = w(e),
            r = w(t)
          return a ? (r ? ("price_asc" === s ? a.amount - r.amount : r.amount - a.amount) : -1) : +!!r
        })
      let g = (t?.shopping_profile ?? []).flatMap((e, t) => {
        if (null == e.collection_kind || !e.topic.trim() || j[e.collection_kind] !== e.kind) return []
        let a = l.filter((e) => Number.isInteger(e.profile_bucket_index) && e.profile_bucket_index === t)
        return a.length
          ? [{ index: t, topic: e.topic, kind: e.kind, collectionKind: e.collection_kind, products: M(a) }]
          : []
      })
      return (
        g.sort((e, t) => k[e.kind] - k[t.kind]),
        {
          products: M(i),
          filteredProducts: u,
          collections: g,
          subcategories: c,
          effectiveSubcategory: d,
          priceSortCurrency: f,
        }
      )
    }
    function M(e) {
      let t = [...e],
        a = [],
        r = new Map(),
        s = (e) => {
          let t = e.product.semantic_id
          return t ? [2, 1].map((e) => `${t.model_version}:${e}:${t.codes.slice(0, e).join(".")}`) : []
        }
      for (; t.length;) {
        let e = 0
        if (t[0]?.product.semantic_id)
          for (let a = 1; a < Math.min(10, t.length); a++) {
            let n = t[a],
              o = t[e]
            if (!n?.product.semantic_id || !o) continue
            let [i = 0, l = 0] = s(n).map((e) => r.get(e) ?? 0),
              [c = 0, d = 0] = s(o).map((e) => r.get(e) ?? 0)
            ;(i < c || (i === c && l < d)) && (e = a)
          }
        let [n] = t.splice(e, 1)
        if (n) for (let e of (a.push(n), s(n))) r.set(e, (r.get(e) ?? 0) + 1)
      }
      return a
    }
    var S = a("rKAs"),
      C = a("SPnB"),
      N = a("rWfF"),
      T = a("VBQw"),
      I = a("DC2G"),
      P = a("DixB"),
      E = a("TjgH"),
      Y = a("ZtSy"),
      D = a("RjIR"),
      R = a("zSQm"),
      O = a("hZax"),
      G = a("RcOP")
    function F(e) {
      if (!e) return null
      try {
        let t = new URL(e)
        return !["https:", "http:"].includes(t.protocol) || t.username || t.password ? null : t.href
      } catch {
        return null
      }
    }
    function q(e) {
      let t,
        a,
        o,
        c,
        d,
        u,
        p,
        f,
        g,
        m,
        h,
        y,
        x,
        _,
        v,
        b = (0, s.c)(50),
        { item: j } = e,
        k = (0, l.A)(),
        w = (0, S.b$)({ type: "products", products: [j.product] })[0],
        A = (0, n.Ul)(D._),
        M = (0, n.Ul)(C.chatGptAuthenticatedAccountId$),
        N = (0, n.Ul)(C.chatGptAuthenticatedUserId$),
        T = (0, O.Fj)("2347841422")
      if (!w) return null
      let I = "assumed_deal" in j ? j.assumed_deal : null,
        R = "deal" in j ? j.deal : null,
        q = R ?? I,
        $ = F(w.url),
        B = w.image_urls?.flatMap(L) ?? [],
        z = (0, P.S)(w, void 0),
        H = JSON.stringify([w.id, B[0]])
      ;(b[0] !== U || b[1] !== B || b[2] !== w || b[3] !== H
        ? ((t = (0, r.jsx)(U, { product: w, images: B }, H)),
          (b[0] = U),
          (b[1] = B),
          (b[2] = w),
          (b[3] = H),
          (b[4] = t))
        : (t = b[4]),
        b[5] !== w.title
          ? ((a = (0, r.jsx)("h3", { className: "line-clamp-2 text-sm font-medium text-default", children: w.title })),
            (b[5] = w.title),
            (b[6] = a))
          : (a = b[6]),
        b[7] !== w.merchants
          ? ((o = (0, r.jsx)("p", { className: "text-sm text-secondary", children: w.merchants })),
            (b[7] = w.merchants),
            (b[8] = o))
          : (o = b[8]),
        b[9] !== j.reason
          ? ((c = j.reason ? (0, r.jsx)("p", { className: "text-sm text-secondary", children: j.reason }) : null),
            (b[9] = j.reason),
            (b[10] = c))
          : (c = b[10]),
        b[11] !== q || b[12] !== k || b[13] !== w.price
          ? ((d = q ? k.formatNumber(q.sale_price, { style: "currency", currency: q.currency }) : w.price),
            (b[11] = q),
            (b[12] = k),
            (b[13] = w.price),
            (b[14] = d))
          : (d = b[14]),
        b[15] !== d
          ? ((u = (0, r.jsx)("span", { className: "font-semibold", children: d })), (b[15] = d), (b[16] = u))
          : (u = b[16]),
        b[17] !== q || b[18] !== k
          ? ((p = q
              ? (0, r.jsx)("s", {
                  className: "text-secondary",
                  children: k.formatNumber(q.original_price, { style: "currency", currency: q.currency }),
                })
              : null),
            (b[17] = q),
            (b[18] = k),
            (b[19] = p))
          : (p = b[19]),
        b[20] !== u || b[21] !== p
          ? ((f = (0, r.jsxs)("div", { className: "flex flex-wrap items-baseline gap-2 text-sm", children: [u, p] })),
            (b[20] = u),
            (b[21] = p),
            (b[22] = f))
          : (f = b[22]),
        b[23] !== R
          ? ((g = R
              ? (0, r.jsx)(E.E, {
                  variant: "success",
                  children:
                    R.discount_percent > 0 && R.discount_percent < 1
                      ? (0, r.jsx)(i.A, { id: "shopping.forYou.discountUnderOnePercent", defaultMessage: "<1% off" })
                      : (0, r.jsx)(i.A, {
                          id: "shopping.forYou.discount",
                          defaultMessage: "{discount}% off",
                          values: { discount: Math.floor(R.discount_percent) },
                        }),
                })
              : null),
            (b[23] = R),
            (b[24] = g))
          : (g = b[24]),
        b[25] !== I
          ? ((m = I
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(E.E, {
                      variant: "warning",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.forYou.assumed",
                        defaultMessage: "USD assumed · Not verified",
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.forYou.assumedDiscount",
                        defaultMessage: "{discount}% off if USD",
                        values: { discount: Math.floor(I.discount_percent) },
                      }),
                    }),
                  ],
                })
              : null),
            (b[25] = I),
            (b[26] = m))
          : (m = b[26]),
        b[27] !== g || b[28] !== m || b[29] !== a || b[30] !== o || b[31] !== c || b[32] !== f
          ? ((h = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-1 px-1", children: [a, o, c, f, g, m] })),
            (b[27] = g),
            (b[28] = m),
            (b[29] = a),
            (b[30] = o),
            (b[31] = c),
            (b[32] = f),
            (b[33] = h))
          : (h = b[33]),
        b[34] !== h || b[35] !== t
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [t, h] })), (b[34] = h), (b[35] = t), (b[36] = y))
          : (y = b[36]))
      let V = y
      return (
        b[37] !== V || b[38] !== $
          ? ((x = $
              ? (0, r.jsx)(Y.G, {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  appearance: "inherit",
                  underline: "none",
                  href: $,
                  initiator: "markdown_link_click",
                  children: V,
                })
              : (0, r.jsx)("div", {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  children: V,
                })),
            (b[37] = V),
            (b[38] = $),
            (b[39] = x))
          : (x = b[39]),
        b[40] !== M || b[41] !== I || b[42] !== T || b[43] !== A || b[44] !== z || b[45] !== N
          ? ((_ =
              !I && A && M && N && z && T.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
                ? (0, r.jsx)(G.ProductFavoriteAction, {
                    className: "absolute end-2 top-2",
                    accountId: M,
                    userId: N,
                    conversationId: void 0,
                    messageId: void 0,
                    request: z,
                    surface: "product_card",
                  })
                : null),
            (b[40] = M),
            (b[41] = I),
            (b[42] = T),
            (b[43] = A),
            (b[44] = z),
            (b[45] = N),
            (b[46] = _))
          : (_ = b[46]),
        b[47] !== x || b[48] !== _
          ? ((v = (0, r.jsxs)("article", { className: "relative flex min-w-0 flex-col gap-2", children: [x, _] })),
            (b[47] = x),
            (b[48] = _),
            (b[49] = v))
          : (v = b[49]),
        v
      )
    }
    function L(e) {
      let t = (0, R.ex)(e)
      return t ? [t] : []
    }
    function U(e) {
      let t,
        a,
        i,
        l,
        c = (0, s.c)(14),
        { product: d, images: u } = e,
        p = (0, n.gh)(x.u),
        [f, g] = (0, o.useState)(0),
        m = u[f],
        h = 0 === u.length
      c[0] !== d || c[1] !== p
        ? ((t = () => {
            ;(0, T.b2)(p, {
              product: d,
              productId: d.id ?? "",
              imageUrl: "",
              citationType: "product",
              surface: "block",
              reason: "missing_url",
            })
          }),
          (c[0] = d),
          (c[1] = p),
          (c[2] = t))
        : (t = c[2])
      let y = (0, o.useEffectEvent)(t)
      return (
        c[3] !== y || c[4] !== h
          ? ((a = () => {
              h && y()
            }),
            (c[3] = y),
            (c[4] = h),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== h || c[7] !== d.id ? ((i = [h, d.id]), (c[6] = h), (c[7] = d.id), (c[8] = i)) : (i = c[8]),
        (0, o.useEffect)(a, i),
        c[9] !== m || c[10] !== f || c[11] !== u.length || c[12] !== d
          ? ((l = (0, r.jsx)("div", {
              className: "relative isolate aspect-square w-full overflow-hidden rounded-xl bg-artifact-photo-paper",
              children: m
                ? (0, r.jsx)(
                    N.u,
                    {
                      src: m,
                      product: d,
                      imageAnalytics: { citationType: "product", surface: "block" },
                      hasFallbackImage: f + 1 < u.length,
                      loadTimeoutMs: 8e3,
                      alt: d.title,
                      loading: "lazy",
                      draggable: !1,
                      className: "m-0 block h-full w-full object-contain mix-blend-darken select-none",
                      onError: () => g(f + 1),
                    },
                    m,
                  )
                : (0, r.jsx)(I.Y, { alt: d.title }),
            })),
            (c[9] = m),
            (c[10] = f),
            (c[11] = u.length),
            (c[12] = d),
            (c[13] = l))
          : (l = c[13]),
        l
      )
    }
    var $ = a("CWeU"),
      B = a("Ghh3"),
      z = a("Oj9r"),
      H = a("eShZ")
    let V = { "target.com": "Target", "walmart.com": "Walmart", "bestbuy.com": "Best Buy" },
      Q = ["most_drop", "target.com", "walmart.com", "bestbuy.com"],
      K = d.object({ data: d.string().min(1), version: d.string().min(1) }),
      W = (0, n.T1)(
        z.GD,
        (e, { signal: t, scope: a }) => {
          let r = e.category,
            s = !0,
            n = new Map(),
            o = t(Z(), {
              onMount: (e) => {
                ;((s = !1), e(Z()))
                let t = !1,
                  r = a.watch(({ get: a }) => {
                    i(a($.PO)) ? t || ((t = !0), c()) : ((t = !1), l(), e(Z()))
                  })
                return () => {
                  ;((s = !0), r(), l(), e(Z()))
                }
              },
            })
          function i(t = a.get($.PO)) {
            return (
              !s &&
              null != r &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function l() {
            for (let e of n.values()) e.abort()
            n.clear()
          }
          async function c(t, s = !1) {
            let d = t ?? "all"
            if (null == r || !i() || n.has("all") || n.has(d)) return
            let u = t ? [t] : Q,
              p = new AbortController()
            ;(n.set(d, p),
              a.set(o, (e) => {
                let t = { ...e }
                for (let e of u) t[e] = { data: null, loading: !0, error: !1 }
                return t
              }))
            let f = () => {
              if (!i() || p.signal.aborted) throw new DOMException("The shopping category changed", "AbortError")
            }
            try {
              let n = await B.Request.safeGet("/shopping/category-deals", {
                parameters: { query: { category: r, section: t, refresh: s } },
                additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                expectedIdentity: { accountId: e.accountId, userId: e.userId },
                assertRequestCurrent: f,
                signal: p.signal,
              })
              if ((f(), n.category !== r)) throw Error("Shopping category response mismatch")
              a.set(o, (e) => {
                let t = { ...e }
                for (let e of u) {
                  let a = "most_drop" === e ? n.most_drop : n.merchant_sections?.find((t) => t.domain === e),
                    s =
                      a?.items?.filter(
                        (e) =>
                          e.category === r &&
                          e.deal?.currency === "USD" &&
                          Number.isFinite(e.deal.original_price) &&
                          Number.isFinite(e.deal.sale_price) &&
                          Number.isFinite(e.deal.discount_percent) &&
                          e.deal.discount_percent > 0 &&
                          e.deal.sale_price > 0 &&
                          e.deal.sale_price < e.deal.original_price &&
                          K.safeParse(e.product.product_lookup_key).success,
                      ) ?? [],
                    o = null == a || "unavailable" === a.status || ("ready" === a.status && 0 === s.length)
                  t[e] = { data: o || null == a ? null : { ...a, items: s }, loading: !1, error: o }
                }
                return t
              })
            } catch (t) {
              if (!i() || p.signal.aborted) return
              let e = t instanceof H.fk && [401, 403].includes(t.status)
              ;(e && l(),
                a.set(o, (t) => {
                  let a = { ...t }
                  for (let t of e ? Q : u) a[t] = { data: null, loading: !1, error: !0 }
                  return a
                }))
            } finally {
              n.get(d) === p && n.delete(d)
            }
          }
          return {
            state$: o,
            retry: (e) => c(e, !0),
            refresh: () => (l(), c(void 0, !0)),
            cancel: () => {
              ;(l(),
                i() &&
                  a.set(o, (e) => {
                    let t = { ...e }
                    for (let a of Q) e[a].loading && (t[a] = { data: null, loading: !1, error: !1, cancelled: !0 })
                    return t
                  }))
            },
          }
        },
        { autoDispose: !0 },
      )
    function Z() {
      return {
        most_drop: { data: null, loading: !1, error: !1 },
        "target.com": { data: null, loading: !1, error: !1 },
        "walmart.com": { data: null, loading: !1, error: !1 },
        "bestbuy.com": { data: null, loading: !1, error: !1 },
      }
    }
    function J(e) {
      let t,
        a,
        n,
        l,
        c,
        d,
        u,
        p,
        f,
        m,
        h,
        y,
        x,
        _,
        v,
        b,
        j,
        k,
        w,
        A = (0, s.c)(46),
        { state: S, subcategory: C, onRetry: N } = e,
        T = (0, o.useId)(),
        I = (0, o.useId)(),
        [P, E] = (0, o.useState)("percent")
      if (A[0] !== P || A[1] !== S.most_drop || A[2] !== C) {
        let e
        ;(A[4] !== P
          ? ((e = (e, t) => ("percent" === P ? t.deal.discount_percent - e.deal.discount_percent : et(t) - et(e))),
            (A[4] = P),
            (A[5] = e))
          : (e = A[5]),
          (t = ee(S.most_drop, C).toSorted(e)),
          (A[0] = P),
          (A[1] = S.most_drop),
          (A[2] = C),
          (A[3] = t))
      } else t = A[3]
      let Y = t
      ;(A[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(i.A, { id: "shopping.categoryDeals.mostDrop", defaultMessage: "Most drop" })), (A[6] = a))
        : (a = A[6]),
        A[7] !== T
          ? ((n = (0, r.jsx)("h2", { id: T, className: "heading-md", children: a })), (A[7] = T), (A[8] = n))
          : (n = A[8]),
        A[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = {
              key: "percent",
              name: (0, r.jsx)(i.A, { id: "shopping.categoryDeals.percent", defaultMessage: "Highest % off" }),
            }),
            (A[9] = l))
          : (l = A[9]),
        A[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              l,
              {
                key: "amount",
                name: (0, r.jsx)(i.A, { id: "shopping.categoryDeals.amount", defaultMessage: "Most dollars off" }),
              },
            ]),
            (A[10] = c))
          : (c = A[10]),
        A[11] !== P
          ? ((d = (0, r.jsx)(g.t, { variant: "filter", selectedKey: P, onSelect: E, tabs: c })),
            (A[11] = P),
            (A[12] = d))
          : (d = A[12]),
        A[13] !== n || A[14] !== d
          ? ((u = (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [n, d],
            })),
            (A[13] = n),
            (A[14] = d),
            (A[15] = u))
          : (u = A[15]),
        A[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, r.jsx)(i.A, {
                id: "shopping.categoryDeals.savingsFound",
                defaultMessage: "Deals with the biggest savings we found",
              }),
            })),
            (A[16] = p))
          : (p = A[16]))
      let D = `${S.most_drop.data?.snapshot_id}:${C}:${P}`
      return (
        A[17] !== N ? ((f = () => N("most_drop")), (A[17] = N), (A[18] = f)) : (f = A[18]),
        A[19] !== Y || A[20] !== S.most_drop || A[21] !== f || A[22] !== D
          ? ((m = (0, r.jsx)(X, { state: S.most_drop, items: Y, showSavings: !0, onRetry: f }, D)),
            (A[19] = Y),
            (A[20] = S.most_drop),
            (A[21] = f),
            (A[22] = D),
            (A[23] = m))
          : (m = A[23]),
        A[24] !== T || A[25] !== m || A[26] !== u
          ? ((h = (0, r.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": T,
              children: [u, p, m],
            })),
            (A[24] = T),
            (A[25] = m),
            (A[26] = u),
            (A[27] = h))
          : (h = A[27]),
        A[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)(i.A, { id: "shopping.categoryDeals.siteWide", defaultMessage: "Site-wide deals" })),
            (A[28] = y))
          : (y = A[28]),
        A[29] !== I
          ? ((x = (0, r.jsx)("h2", { id: I, className: "heading-md", children: y })), (A[29] = I), (A[30] = x))
          : (x = A[30]),
        A[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, r.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, r.jsx)(i.A, {
                id: "shopping.categoryDeals.merchantDescription",
                defaultMessage: "Deals in this category from these stores",
              }),
            })),
            (A[31] = _))
          : (_ = A[31]),
        A[32] !== x
          ? ((v = (0, r.jsxs)("div", { className: "flex flex-col gap-1", children: [x, _] })), (A[32] = x), (A[33] = v))
          : (v = A[33]),
        A[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = ["target.com", "walmart.com", "bestbuy.com"]), (A[34] = b))
          : (b = A[34]),
        A[35] !== N || A[36] !== S || A[37] !== C
          ? ((j = b.map((e) =>
              (0, r.jsxs)(
                "section",
                {
                  className: "flex min-w-0 flex-col gap-4",
                  "aria-label": V[e],
                  children: [
                    (0, r.jsx)("h3", { className: "heading-sm", children: V[e] }),
                    (0, r.jsx)(
                      X,
                      { state: S[e], items: M(ee(S[e], C)), onRetry: () => N(e) },
                      `${S[e].data?.snapshot_id}:${C}`,
                    ),
                  ],
                },
                e,
              ),
            )),
            (A[35] = N),
            (A[36] = S),
            (A[37] = C),
            (A[38] = j))
          : (j = A[38]),
        A[39] !== I || A[40] !== v || A[41] !== j
          ? ((k = (0, r.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-6",
              "aria-labelledby": I,
              children: [v, j],
            })),
            (A[39] = I),
            (A[40] = v),
            (A[41] = j),
            (A[42] = k))
          : (k = A[42]),
        A[43] !== h || A[44] !== k
          ? ((w = (0, r.jsxs)(r.Fragment, { children: [h, k] })), (A[43] = h), (A[44] = k), (A[45] = w))
          : (w = A[45]),
        w
      )
    }
    function X(e) {
      let t,
        a,
        n,
        l,
        c = (0, s.c)(27),
        { state: d, items: p, showSavings: f, onRetry: g } = e,
        m = void 0 !== f && f,
        [h, y] = (0, o.useState)(5)
      if (d.loading || (!d.data && !d.error && !d.cancelled)) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, r.jsx)(i.A, { id: "shopping.categoryDeals.loading", defaultMessage: "Loading deals…" }),
              })),
              (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      if (d.error || d.cancelled) {
        let e,
          t,
          a,
          s,
          n,
          o = d.cancelled ? "status" : "alert"
        return (
          c[1] !== d.cancelled
            ? ((e = d.cancelled
                ? (0, r.jsx)(i.A, { id: "shopping.categoryDeals.stopped", defaultMessage: "Stopped loading deals" })
                : (0, r.jsx)(i.A, {
                    id: "shopping.categoryDeals.failed",
                    defaultMessage: "These deals couldn't be loaded",
                  })),
              (c[1] = d.cancelled),
              (c[2] = e))
            : (e = c[2]),
          c[3] !== o || c[4] !== e
            ? ((t = (0, r.jsx)("p", { role: o, className: "text-sm text-secondary", children: e })),
              (c[3] = o),
              (c[4] = e),
              (c[5] = t))
            : (t = c[5]),
          c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)(i.A, { id: "shopping.categoryDeals.retry", defaultMessage: "Retry deals" })), (c[6] = a))
            : (a = c[6]),
          c[7] !== g
            ? ((s = (0, r.jsx)(u.$, { color: "secondary", onClick: g, children: a })), (c[7] = g), (c[8] = s))
            : (s = c[8]),
          c[9] !== t || c[10] !== s
            ? ((n = (0, r.jsxs)("div", { className: "flex flex-col items-start gap-3", children: [t, s] })),
              (c[9] = t),
              (c[10] = s),
              (c[11] = n))
            : (n = c[11]),
          n
        )
      }
      if (0 === p.length) {
        let e
        return (
          c[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, r.jsx)(i.A, {
                  id: "shopping.categoryDeals.empty",
                  defaultMessage: "No matching deals found",
                }),
              })),
              (c[12] = e))
            : (e = c[12]),
          e
        )
      }
      if (c[13] !== p || c[14] !== m || c[15] !== h) {
        let e
        ;(c[17] !== m
          ? ((e = (e) => {
              var t
              return (0, r.jsxs)(
                "div",
                {
                  className: "flex min-w-0 flex-col gap-2",
                  children: [
                    (0, r.jsx)(q, { item: e }),
                    m
                      ? (0, r.jsx)("p", {
                          className: "px-1 text-sm text-secondary",
                          children:
                            et((t = e)) >= 0.01 - Number.EPSILON * t.deal.original_price
                              ? (0, r.jsx)(i.A, {
                                  id: "shopping.categoryDeals.dollarsSaved",
                                  defaultMessage: "{amount} off",
                                  values: {
                                    amount: (0, r.jsx)(
                                      v.Gr,
                                      { value: et(e), style: "currency", currency: "USD" },
                                      "amount",
                                    ),
                                  },
                                })
                              : (0, r.jsx)(i.A, {
                                  id: "shopping.categoryDeals.fractionalSavings",
                                  defaultMessage: "Less than {amount} off",
                                  values: {
                                    amount: (0, r.jsx)(
                                      v.Gr,
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
            (c[17] = m),
            (c[18] = e))
          : (e = c[18]),
          (t = p.slice(0, h).map(e)),
          (c[13] = p),
          (c[14] = m),
          (c[15] = h),
          (c[16] = t))
      } else t = c[16]
      return (
        c[19] !== t
          ? ((a = (0, r.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (c[19] = t),
            (c[20] = a))
          : (a = c[20]),
        c[21] !== p.length || c[22] !== h
          ? ((n =
              h < p.length
                ? (0, r.jsx)(u.$, {
                    color: "secondary",
                    className: "self-center",
                    onClick: () => y(h + 5),
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.categoryDeals.showMore",
                      defaultMessage: "Show more deals",
                    }),
                  })
                : null),
            (c[21] = p.length),
            (c[22] = h),
            (c[23] = n))
          : (n = c[23]),
        c[24] !== a || c[25] !== n
          ? ((l = (0, r.jsxs)(r.Fragment, { children: [a, n] })), (c[24] = a), (c[25] = n), (c[26] = l))
          : (l = c[26]),
        l
      )
    }
    function ee(e, t) {
      return e.data?.status === "ready" ? (e.data.items ?? []).filter((e) => null == t || e.subcategory === t) : []
    }
    function et(e) {
      return e.deal.original_price - e.deal.sale_price
    }
    let ea = (0, v.YK)({
        tech: { id: "shopping.for_you.discovery.category.tech", defaultMessage: "Tech" },
        home: { id: "shopping.for_you.discovery.category.home", defaultMessage: "Home" },
        style: { id: "shopping.for_you.discovery.category.style", defaultMessage: "Style" },
        beauty: { id: "shopping.for_you.discovery.category.beauty", defaultMessage: "Beauty" },
        outdoors: { id: "shopping.for_you.discovery.category.outdoors", defaultMessage: "Outdoors" },
        gifts: { id: "shopping.for_you.discovery.category.gifts", defaultMessage: "Gifts" },
      }),
      er = (0, v.YK)({
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
      es = (0, v.YK)({
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
      en = (0, v.YK)({
        recommended: { id: "shopping.for_you.discovery.sort.recommended", defaultMessage: "Recommended" },
        price_asc: { id: "shopping.for_you.discovery.sort.price_asc", defaultMessage: "Price: low to high" },
        price_desc: { id: "shopping.for_you.discovery.sort.price_desc", defaultMessage: "Price: high to low" },
      })
    function eo(e) {
      return (
        e?.dream_inputs?.some(
          (e) =>
            null != e.task_id &&
            ("shopping_profile_v1_retrieval" === e.source || "shopping_profile_v1_ranking" === e.source),
        ) ?? !1
      )
    }
    function ei(e) {
      let t,
        a,
        n,
        c,
        d,
        p,
        f,
        m,
        y,
        x,
        _,
        v,
        b,
        j = (0, s.c)(54),
        { state: k, category: w, connectionCard: M, onLoadMore: S, categoryDeals: C } = e,
        N = (0, l.A)(),
        T = (0, o.useId)(),
        I = (0, o.useId)(),
        [P, E] = (0, o.useState)(),
        [Y, D] = (0, o.useState)("recommended"),
        [R, O] = (0, o.useState)(),
        [G, F] = (0, o.useState)(15),
        [q, L] = (0, o.useState)(15)
      if (
        (j[0] !== k.page?.recommendations
          ? ((t = k.page?.recommendations ?? []), (j[0] = k.page?.recommendations), (j[1] = t))
          : (t = j[1]),
        j[2] !== w ||
          j[3] !== C ||
          j[4] !== M ||
          j[5] !== N ||
          j[6] !== I ||
          j[7] !== R ||
          j[8] !== Y ||
          j[9] !== k.cancelled ||
          j[10] !== k.items ||
          j[11] !== k.loading ||
          j[12] !== k.page ||
          j[13] !== k.pageError ||
          j[14] !== P ||
          j[15] !== t ||
          j[16] !== T ||
          j[17] !== G ||
          j[18] !== q)
      ) {
        let e,
          s,
          o,
          l = [...k.items, ...t, ...(C ? Object.values(C.state).flatMap(eg) : [])]
        ;((a = A({ items: k.items, page: k.page, category: w, subcategory: P, sort: Y, additionalCategoryItems: l })),
          j[28] !== k.page?.recommendations
            ? ((e = k.page?.recommendations ?? []), (j[28] = k.page?.recommendations), (j[29] = e))
            : (e = j[29]))
        let _ = A({
          items: e,
          page: k.page,
          category: w,
          subcategory: a.effectiveSubcategory,
          additionalCategoryItems: l,
        }).filteredProducts
        ;(j[30] !== R
          ? ((s = (e) =>
              null != R && e.index === R.index && e.topic === R.topic && e.collectionKind === R.collectionKind),
            (j[30] = R),
            (j[31] = s))
          : (s = j[31]),
          (n = a.collections.find(s)))
        let v = !w && !n,
          b = v ? a.products.slice(0, 8) : [],
          S = new Set(b.map(ef)),
          U = n ? new Set(n.products.map(ep)) : null,
          $ = a.filteredProducts.filter((e) => (!U || U.has(e.id)) && (!v || !S.has(e.id))),
          B = k.page?.gmail_state === "connected" || eo(k.page),
          z = B && !k.loading && !k.pageError && !k.cancelled,
          H = null != w && a.products.length > 0 && a.products.every(eu)
        j[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = () => {
              ;(E(void 0), D("recommended"), F(15), L(15))
            }),
            (j[32] = o))
          : (o = j[32])
        let V = o
        ;((c = "flex min-w-0 flex-col gap-8"),
          (d =
            w && !n
              ? (0, r.jsx)("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: (0, r.jsx)(g.t, {
                    variant: "filter",
                    scrollable: !0,
                    selectedKey: a.effectiveSubcategory ?? "all",
                    onSelect: (e) => {
                      ;(E("all" === e ? void 0 : e), F(15), L(15))
                    },
                    tabs: [
                      { key: "all", name: (0, r.jsx)(i.A, { id: "shopping.forYou.all", defaultMessage: "All" }) },
                      ...a.subcategories.map(ed),
                    ],
                  }),
                })
              : null),
          (p =
            !n && (_.length > 0 || z)
              ? (0, r.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": I,
                  children: [
                    (0, r.jsx)("h2", {
                      id: I,
                      className: "heading-md",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.forYou.recommendedProducts",
                        defaultMessage: "Recommended products",
                      }),
                    }),
                    (0, r.jsx)(em, { products: _.slice(0, q) }),
                    0 === _.length
                      ? (0, r.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.noRecommendedProducts",
                            defaultMessage: "No matching product recommendations yet",
                          }),
                        })
                      : null,
                    q < _.length
                      ? (0, r.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => L(q + 15),
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.moreProducts",
                            defaultMessage: "Show more products",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (f = b.length > 0 ? (0, r.jsx)(ey, { products: b }) : null),
          (m = n
            ? null
            : (0, r.jsxs)("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                  v || 0 === a.products.length ? M : null,
                  a.collections.slice(0, v ? 2 : 3).map((e) =>
                    (0, r.jsxs)(
                      "section",
                      {
                        className: "flex min-w-0 flex-col gap-3 rounded-xl border border-default p-4",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, r.jsx)(i.A, { ...es[e.collectionKind] }),
                          }),
                          (0, r.jsx)("h2", { className: "heading-md", children: e.topic }),
                          (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: e.products.slice(0, v ? 4 : 2).map(ec),
                          }),
                          (0, r.jsx)(u.$, {
                            color: "secondary",
                            onClick: () => {
                              ;(V(), O(e))
                            },
                            children: (0, r.jsx)(i.A, {
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
          (y = v ? a.collections.slice(2).map(el) : null),
          (x =
            $.length > 0 || w || n || (B && 0 === a.products.length)
              ? (0, r.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": T,
                  children: [
                    n
                      ? (0, r.jsx)(u.$, {
                          color: "ghost",
                          className: "self-start",
                          onClick: () => {
                            ;(V(), O(void 0))
                          },
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.backCollections",
                            defaultMessage: "Back to collections",
                          }),
                        })
                      : null,
                    (0, r.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between gap-3",
                      children: [
                        (0, r.jsxs)("h2", {
                          id: T,
                          className: "heading-md",
                          children: [
                            n?.topic,
                            !n && w
                              ? (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.recommendedCategoryDeals",
                                  defaultMessage: "Recommended deals",
                                })
                              : null,
                            n || w
                              ? null
                              : (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.moreToDiscover",
                                  defaultMessage: "More deals to discover",
                                }),
                          ],
                        }),
                        w && !n
                          ? (0, r.jsx)(h.Ab, {
                              triggerButton: (0, r.jsx)(u.$, {
                                color: "secondary",
                                "aria-label": N.formatMessage({
                                  id: "shopping.forYou.sort",
                                  defaultMessage: "Sort deals",
                                }),
                                children: (0, r.jsx)(i.A, { ...en[a.priceSortCurrency ? Y : "recommended"] }),
                              }),
                              children: ["recommended", "price_asc", "price_desc"].map((e) =>
                                (0, r.jsx)(
                                  h.ms.Item,
                                  {
                                    disabled: "recommended" !== e && !a.priceSortCurrency,
                                    onSelect: () => D(e),
                                    children: (0, r.jsx)(i.A, { ...en[e] }),
                                  },
                                  e,
                                ),
                              ),
                            })
                          : null,
                      ],
                    }),
                    (0, r.jsx)(em, { products: $.slice(0, G) }),
                    0 === $.length && z
                      ? (0, r.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: H
                            ? (0, r.jsx)(i.A, {
                                id: "shopping.forYou.noCategories",
                                defaultMessage:
                                  "Category filters aren't available for these results yet. Try refreshing your recommendations",
                              })
                            : (0, r.jsx)(i.A, {
                                id: "shopping.forYou.noMatches",
                                defaultMessage: "No matching products in these results yet",
                              }),
                        })
                      : null,
                    G < $.length
                      ? (0, r.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => F(G + 15),
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.moreFinds",
                            defaultMessage: "Show more finds",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (j[2] = w),
          (j[3] = C),
          (j[4] = M),
          (j[5] = N),
          (j[6] = I),
          (j[7] = R),
          (j[8] = Y),
          (j[9] = k.cancelled),
          (j[10] = k.items),
          (j[11] = k.loading),
          (j[12] = k.page),
          (j[13] = k.pageError),
          (j[14] = P),
          (j[15] = t),
          (j[16] = T),
          (j[17] = G),
          (j[18] = q),
          (j[19] = a),
          (j[20] = n),
          (j[21] = c),
          (j[22] = d),
          (j[23] = p),
          (j[24] = f),
          (j[25] = m),
          (j[26] = y),
          (j[27] = x))
      } else
        ((a = j[19]),
          (n = j[20]),
          (c = j[21]),
          (d = j[22]),
          (p = j[23]),
          (f = j[24]),
          (m = j[25]),
          (y = j[26]),
          (x = j[27]))
      return (
        j[33] !== S ||
        j[34] !== k.loading ||
        j[35] !== k.loadingMore ||
        j[36] !== k.page?.next_cursor ||
        j[37] !== k.refreshingGmail
          ? ((_ = k.page?.next_cursor
              ? (0, r.jsx)(u.$, {
                  color: "secondary",
                  className: "self-center",
                  disabled: k.loading || k.loadingMore || k.refreshingGmail,
                  onClick: S,
                  children: (0, r.jsx)(i.A, { id: "shopping.forYou.moreDeals", defaultMessage: "Show more deals" }),
                })
              : null),
            (j[33] = S),
            (j[34] = k.loading),
            (j[35] = k.loadingMore),
            (j[36] = k.page?.next_cursor),
            (j[37] = k.refreshingGmail),
            (j[38] = _))
          : (_ = j[38]),
        j[39] !== w || j[40] !== C || j[41] !== a || j[42] !== n
          ? ((v =
              w && !n && C
                ? (0, r.jsx)(J, { state: C.state, subcategory: a.effectiveSubcategory, onRetry: C.onRetry })
                : null),
            (j[39] = w),
            (j[40] = C),
            (j[41] = a),
            (j[42] = n),
            (j[43] = v))
          : (v = j[43]),
        j[44] !== v ||
        j[45] !== c ||
        j[46] !== d ||
        j[47] !== p ||
        j[48] !== f ||
        j[49] !== m ||
        j[50] !== y ||
        j[51] !== x ||
        j[52] !== _
          ? ((b = (0, r.jsxs)("div", { className: c, children: [d, p, f, m, y, x, _, v] })),
            (j[44] = v),
            (j[45] = c),
            (j[46] = d),
            (j[47] = p),
            (j[48] = f),
            (j[49] = m),
            (j[50] = y),
            (j[51] = x),
            (j[52] = _),
            (j[53] = b))
          : (b = j[53]),
        b
      )
    }
    function el(e) {
      return (0, r.jsxs)(
        "section",
        {
          className: "flex flex-col gap-4",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h2", { className: "heading-md", children: e.topic }),
                (0, r.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, r.jsx)(i.A, { ...es[e.collectionKind] }),
                }),
              ],
            }),
            (0, r.jsx)(em, { products: e.products }),
          ],
        },
        e.index,
      )
    }
    function ec(e) {
      return (0, r.jsx)(q, { item: e }, e.id)
    }
    function ed(e) {
      return { key: e, name: (0, r.jsx)(i.A, { ...er[e] }) }
    }
    function eu(e) {
      return null == e.category
    }
    function ep(e) {
      return e.id
    }
    function ef(e) {
      return e.id
    }
    function eg(e) {
      return e.data?.status === "ready" ? (e.data.items ?? []) : []
    }
    function em(e) {
      let t,
        a,
        n = (0, s.c)(4),
        { products: o } = e
      return (
        n[0] !== o ? ((t = o.map(eh)), (n[0] = o), (n[1] = t)) : (t = n[1]),
        n[2] !== t
          ? ((a = (0, r.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (n[2] = t),
            (n[3] = a))
          : (a = n[3]),
        a
      )
    }
    function eh(e) {
      return (0, r.jsx)(q, { item: e }, e.id)
    }
    function ey(e) {
      let t,
        a,
        c,
        d,
        p,
        f,
        g,
        h,
        v,
        b,
        j,
        k,
        w,
        A,
        M,
        S,
        C = (0, s.c)(35),
        { products: N } = e,
        T = (0, n.gh)(x.u),
        I = (0, l.A)(),
        P = (0, o.useRef)(null),
        E = (0, o.useId)()
      C[0] !== T
        ? ((t = (e) => {
            let t = P.current
            if (!t) return
            let a = "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"
            t.scrollTo({ left: (0, m.z)(t, e, a), behavior: T.get(_.x) ? "instant" : "smooth" })
          }),
          (C[0] = T),
          (C[1] = t))
        : (t = C[1])
      let Y = t
      return (
        C[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(i.A, { id: "shopping.forYou.worthALook", defaultMessage: "Recommended deals" })),
            (C[2] = a))
          : (a = C[2]),
        C[3] !== E
          ? ((c = (0, r.jsx)("h2", { id: E, className: "heading-md", children: a })), (C[3] = E), (C[4] = c))
          : (c = C[4]),
        C[5] !== I
          ? ((d = I.formatMessage({ id: "shopping.forYou.previousDeals", defaultMessage: "Previous deals" })),
            (C[5] = I),
            (C[6] = d))
          : (d = C[6]),
        C[7] !== Y ? ((p = () => Y(-1)), (C[7] = Y), (C[8] = p)) : (p = C[8]),
        C[9] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, r.jsx)(y.z_d, {})), (C[9] = f)) : (f = C[9]),
        C[10] !== d || C[11] !== p
          ? ((g = (0, r.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": d,
              onClick: p,
              children: f,
            })),
            (C[10] = d),
            (C[11] = p),
            (C[12] = g))
          : (g = C[12]),
        C[13] !== I
          ? ((h = I.formatMessage({ id: "shopping.forYou.nextDeals", defaultMessage: "Next deals" })),
            (C[13] = I),
            (C[14] = h))
          : (h = C[14]),
        C[15] !== Y ? ((v = () => Y(1)), (C[15] = Y), (C[16] = v)) : (v = C[16]),
        C[17] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, r.jsx)(y.uM3, {})), (C[17] = b)) : (b = C[17]),
        C[18] !== h || C[19] !== v
          ? ((j = (0, r.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": h,
              onClick: v,
              children: b,
            })),
            (C[18] = h),
            (C[19] = v),
            (C[20] = j))
          : (j = C[20]),
        C[21] !== j || C[22] !== g
          ? ((k = (0, r.jsxs)("div", { className: "flex gap-2", children: [g, j] })),
            (C[21] = j),
            (C[22] = g),
            (C[23] = k))
          : (k = C[23]),
        C[24] !== k || C[25] !== c
          ? ((w = (0, r.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [c, k] })),
            (C[24] = k),
            (C[25] = c),
            (C[26] = w))
          : (w = C[26]),
        C[27] !== N ? ((A = N.map(ex)), (C[27] = N), (C[28] = A)) : (A = C[28]),
        C[29] !== A
          ? ((M = (0, r.jsx)("div", {
              ref: P,
              className: "relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2",
              children: A,
            })),
            (C[29] = A),
            (C[30] = M))
          : (M = C[30]),
        C[31] !== w || C[32] !== M || C[33] !== E
          ? ((S = (0, r.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": E,
              children: [w, M],
            })),
            (C[31] = w),
            (C[32] = M),
            (C[33] = E),
            (C[34] = S))
          : (S = C[34]),
        S
      )
    }
    function ex(e) {
      return (0, r.jsx)(
        "div",
        {
          className: "min-w-0 shrink-0 basis-40 snap-start sm:basis-48 xl:basis-56",
          children: (0, r.jsx)(q, { item: e }),
        },
        e.id,
      )
    }
    var e_ = a("CMv2"),
      ev = a("DBCl"),
      eb = a("yxN2"),
      ej = a("ecE5")
    function ek(e) {
      let t,
        a,
        n,
        o,
        i,
        l = (0, s.c)(16),
        { connectorId: c, open: d, onOpenChange: u, onConnected: p } = e
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { hostId: ev.iwv }), (l[0] = t)) : (t = l[0])
      let { handleAppConnectOAuthStarted: f, handleAppConnected: g } = (0, eb.t)(t)
      l[1] !== c
        ? ((a = { connectorId: c, redirectAfter: "/shopping", oauthReferrer: "shopping_gmail" }),
          (l[1] = c),
          (l[2] = a))
        : (a = l[2])
      let m = a,
        h = d ? c : void 0
      return (
        l[3] !== m || l[4] !== f
          ? ((n = (e) => {
              f({ ...e, appConnectOptions: m })
            }),
            (l[3] = m),
            (l[4] = f),
            (l[5] = n))
          : (n = l[5]),
        l[6] !== c || l[7] !== g || l[8] !== p
          ? ((o = async () => {
              ;(g(c), await p())
            }),
            (l[6] = c),
            (l[7] = g),
            (l[8] = p),
            (l[9] = o))
          : (o = l[9]),
        l[10] !== m || l[11] !== u || l[12] !== h || l[13] !== n || l[14] !== o
          ? ((i = (0, r.jsx)(ej.Z, {
              app: null,
              connectorId: h,
              appConnectOptions: m,
              hostId: ev.iwv,
              postConnectSource: null,
              waitForConnectedHandler: !0,
              getOAuthResumeContext: ew,
              onOAuthStarted: n,
              onConnected: o,
              onOpenChange: u,
            })),
            (l[10] = m),
            (l[11] = u),
            (l[12] = h),
            (l[13] = n),
            (l[14] = o),
            (l[15] = i))
          : (i = l[15]),
        i
      )
    }
    function ew() {
      return { returnTo: "/shopping" }
    }
    var eA = a("OiCI"),
      eM = a("ygu7"),
      eS = a("CV1W")
    function eC(e) {
      let t,
        a,
        l,
        d,
        p,
        f,
        g,
        m = (0, s.c)(23),
        { status: h, onConnected: y } = e,
        _ = (0, n.gh)(x.u),
        v = (0, c.Zp)(),
        [b, j] = (0, o.useState)(!1),
        [k, w] = (0, o.useState)("idle")
      if ("disconnected" !== h && "reconnect_required" !== h) return null
      let A = "reconnect_required" === h
      m[0] !== v || m[1] !== _
        ? ((t = async () => {
            let e = _.get(eA.tT),
              t = _.get($.PO).authenticatedUserId
            if (null != e && null != t) {
              w("loading")
              try {
                let a = await (0, eM.NG)(_, e_.$G)
                if (_.get(eA.tT) !== e || _.get($.PO).authenticatedUserId !== t) return void w("idle")
                if (null == a) return void w("failed")
                ;(await v((0, eS.i4)(a, "apps", e_.$G)), w("idle"))
              } catch {
                w("failed")
              }
            }
          }),
          (m[0] = v),
          (m[1] = _),
          (m[2] = t))
        : (t = m[2])
      let M = t,
        S = b || "loading" === k,
        C = "loading" === k,
        N = A ? void 0 : "dialog"
      return (
        m[3] !== M || m[4] !== A
          ? ((a = () => {
              A ? M() : j(!0)
            }),
            (m[3] = M),
            (m[4] = A),
            (m[5] = a))
          : (a = m[5]),
        m[6] !== A
          ? ((l = A
              ? (0, r.jsx)(i.A, {
                  id: "shopping.forYou.manageGmailConnection",
                  defaultMessage: "Manage Gmail connection",
                })
              : (0, r.jsx)(i.A, { id: "shopping.forYou.connectGmail", defaultMessage: "Connect Gmail" })),
            (m[6] = A),
            (m[7] = l))
          : (l = m[7]),
        m[8] !== S || m[9] !== C || m[10] !== N || m[11] !== a || m[12] !== l
          ? ((d = (0, r.jsx)(u.$, {
              color: "secondary",
              disabled: S,
              loading: C,
              "aria-haspopup": N,
              onClick: a,
              children: l,
            })),
            (m[8] = S),
            (m[9] = C),
            (m[10] = N),
            (m[11] = a),
            (m[12] = l),
            (m[13] = d))
          : (d = m[13]),
        m[14] !== k
          ? ((p =
              "failed" === k
                ? (0, r.jsx)("p", {
                    role: "alert",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.gmailSettingsFailed",
                      defaultMessage: "Couldn’t open Gmail settings. Try again",
                    }),
                  })
                : null),
            (m[14] = k),
            (m[15] = p))
          : (p = m[15]),
        m[16] !== y || m[17] !== b
          ? ((f = (0, r.jsx)(ek, { connectorId: e_.$G, open: b, onOpenChange: j, onConnected: y })),
            (m[16] = y),
            (m[17] = b),
            (m[18] = f))
          : (f = m[18]),
        m[19] !== d || m[20] !== p || m[21] !== f
          ? ((g = (0, r.jsxs)(r.Fragment, { children: [d, p, f] })), (m[19] = d), (m[20] = p), (m[21] = f), (m[22] = g))
          : (g = m[22]),
        g
      )
    }
    function eN(e) {
      let t,
        a,
        n,
        o = (0, s.c)(37),
        { state: c, onLoad: d, onCheck: p, onCancel: f, onOpenEmail: g } = e,
        m = (0, l.A)(),
        h = c.page?.gmail_state ?? c.entryStatus
      if (c.page?.gmail_state === "connected") {
        let e, a, s, n
        ;(o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("h2", {
              className: "heading-md",
              children: (0, r.jsx)(i.A, { id: "shopping.forYou.emailCardTitle", defaultMessage: "Your email offers" }),
            })),
            (o[0] = e))
          : (e = o[0]),
          o[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, r.jsx)(i.A, {
                  id: "shopping.forYou.emailCardDescription",
                  defaultMessage: "Explore offers from your connected Gmail",
                }),
              })),
              (o[1] = a))
            : (a = o[1]),
          o[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)(i.A, { id: "shopping.forYou.openEmail", defaultMessage: "View email offers" })),
              (o[2] = s))
            : (s = o[2]),
          o[3] !== g
            ? ((n = (0, r.jsxs)(r.Fragment, {
                children: [e, a, (0, r.jsx)(u.$, { color: "secondary", onClick: g, children: s })],
              })),
              (o[3] = g),
              (o[4] = n))
            : (n = o[4]),
          (t = n))
      } else if (c.loading || c.refreshingGmail) {
        let e, a, s
        ;(o[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "status",
              children: (0, r.jsx)(i.A, {
                id: "shopping.forYou.loading",
                defaultMessage: "Loading your recommendations…",
              }),
            })),
            (o[5] = e))
          : (e = o[5]),
          o[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" })), (o[6] = a))
            : (a = o[6]),
          o[7] !== f
            ? ((s = (0, r.jsxs)(r.Fragment, {
                children: [e, (0, r.jsx)(u.$, { color: "secondary", onClick: f, children: a })],
              })),
              (o[7] = f),
              (o[8] = s))
            : (s = o[8]),
          (t = s))
      } else if ("checking" === h) {
        let e
        ;(o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "status",
              children: (0, r.jsx)(i.A, {
                id: "shopping.forYou.checking",
                defaultMessage: "Checking your Gmail connection…",
              }),
            })),
            (o[9] = e))
          : (e = o[9]),
          (t = e))
      } else if ("connected" === h) {
        let e, a, s, n, l, p, f
        ;(o[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("h2", {
              className: "heading-md",
              children: (0, r.jsx)(i.A, { id: "shopping.forYou.readyTitle", defaultMessage: "Find deals for you" }),
            })),
            (o[10] = e))
          : (e = o[10]),
          o[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, r.jsx)(i.A, {
                  id: "shopping.forYou.readyDescription",
                  defaultMessage:
                    "Gmail is connected. Find deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (o[11] = a))
            : (a = o[11]),
          o[12] !== c.pageError
            ? ((s = c.pageError
                ? (0, r.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.failed",
                      defaultMessage: "We couldn't load these deals. Please try again",
                    }),
                  })
                : null),
              (o[12] = c.pageError),
              (o[13] = s))
            : (s = o[13]),
          o[14] !== c.cancelled
            ? ((n = c.cancelled
                ? (0, r.jsx)("p", {
                    role: "status",
                    children: (0, r.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                  })
                : null),
              (o[14] = c.cancelled),
              (o[15] = n))
            : (n = o[15]),
          o[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, r.jsx)(i.A, { id: "shopping.forYou.load", defaultMessage: "Load recommendations" })),
              (o[16] = l))
            : (l = o[16]),
          o[17] !== d
            ? ((p = (0, r.jsx)(u.$, { color: "primary", onClick: d, children: l })), (o[17] = d), (o[18] = p))
            : (p = o[18]),
          o[19] !== s || o[20] !== n || o[21] !== p
            ? ((f = (0, r.jsxs)(r.Fragment, { children: [e, a, s, n, p] })),
              (o[19] = s),
              (o[20] = n),
              (o[21] = p),
              (o[22] = f))
            : (f = o[22]),
          (t = f))
      } else if ("disconnected" === h || "reconnect_required" === h) {
        let e, a, s
        ;(o[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("h2", {
              className: "heading-md",
              children: (0, r.jsx)(i.A, { id: "shopping.forYou.connectTitle", defaultMessage: "Connect Gmail" }),
            })),
            (o[23] = e))
          : (e = o[23]),
          o[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, r.jsx)(i.A, {
                  id: "shopping.forYou.connectDescription",
                  defaultMessage: "Connect Gmail for deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (o[24] = a))
            : (a = o[24]),
          o[25] !== p || o[26] !== h
            ? ((s = (0, r.jsxs)(r.Fragment, { children: [e, a, (0, r.jsx)(eC, { status: h, onConnected: p })] })),
              (o[25] = p),
              (o[26] = h),
              (o[27] = s))
            : (s = o[27]),
          (t = s))
      } else {
        let e, a, s
        ;(o[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              role: "alert",
              children: (0, r.jsx)(i.A, {
                id: "shopping.forYou.checkFailed",
                defaultMessage: "We couldn't check your Gmail connection. Please try again",
              }),
            })),
            (o[28] = e))
          : (e = o[28]),
          o[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, r.jsx)(i.A, { id: "shopping.forYou.retry", defaultMessage: "Try again" })), (o[29] = a))
            : (a = o[29]),
          o[30] !== p
            ? ((s = (0, r.jsxs)(r.Fragment, {
                children: [e, (0, r.jsx)(u.$, { color: "secondary", onClick: p, children: a })],
              })),
              (o[30] = p),
              (o[31] = s))
            : (s = o[31]),
          (t = s))
      }
      return (
        o[32] !== m
          ? ((a = m.formatMessage({ id: "shopping.forYou.gmailRegion", defaultMessage: "Gmail" })),
            (o[32] = m),
            (o[33] = a))
          : (a = o[33]),
        o[34] !== t || o[35] !== a
          ? ((n = (0, r.jsx)("section", {
              className: "flex min-w-0 flex-col items-start gap-4 rounded-xl border border-default p-4",
              "aria-label": a,
              children: t,
            })),
            (o[34] = t),
            (o[35] = a),
            (o[36] = n))
          : (n = o[36]),
        n
      )
    }
    var eT = a("i5ac"),
      eI = a.n(eT),
      eP = a("Nwp9")
    let eE = d.object({
        id: d.string().min(1),
        received_at: d.string(),
        expires_at: d.string().nullish(),
        saved_at: d.number(),
      }),
      eY = d.array(eE),
      eD = (0, eP.Kn)(({ accountId: e, userId: t }) => `shopping-for-you-email:${JSON.stringify([e, t])}`, void 0),
      eR = (0, n.T1)(z.GD, (e, { scope: t, derived: a }) => {
        let r = a((t, { scope: a }) => {
          let r = eY.safeParse(a.get(eD, e))
          if (!r.success) return []
          let s = Date.now()
          return r.data
            .filter(
              (e) => e.saved_at <= s && s - e.saved_at < 2592e6 && (!e.expires_at || Date.parse(e.expires_at) > s),
            )
            .slice(0, 50)
        })
        return {
          references$: r,
          toggle(a) {
            let s = t.get(r),
              n = s.find((e) => e.id === a.id || e.id === a.source_id)
            t.set(
              eD,
              e,
              n
                ? s.filter((e) => e.id !== n.id)
                : [
                    { id: a.id, received_at: a.received_at, expires_at: a.expires_at, saved_at: Date.now() },
                    ...s,
                  ].slice(0, 50),
            )
          },
          remove(a) {
            t.set(
              eD,
              e,
              t.get(r).filter((e) => e.id !== a),
            )
          },
        }
      })
    function eO(e, t) {
      e.set(eD, t, [])
    }
    let eG = d.object({ data: d.string().min(1), version: d.string().min(1) }),
      eF = d.object({ detail: d.literal("for_you_updating") }),
      eq = (0, n.T1)(
        z.GD,
        (e, { signal: t, scope: a }) => {
          let r = !0,
            s = null,
            n = null,
            o = null,
            i = null,
            l = !1,
            c = null,
            d = [],
            u = t(eL(), {
              onMount: (t) => {
                ;((r = !1), t(eL()))
                let s = !1,
                  n = a.watch(({ get: a }) => {
                    let r = a($.PO)
                    r.authLoading ||
                    "chatgpt" !== r.authMethod ||
                    !r.hasChatGptToken ||
                    r.authenticatedAccountId !== e.accountId ||
                    r.authenticatedUserId !== e.userId
                      ? ((s = !1), y(), t(eL()))
                      : s || ((s = !0), x())
                  })
                return () => {
                  ;((r = !0), n(), y(), t(eL()))
                }
              },
            }),
            p = { "ChatGPT-Account-ID": e.accountId },
            f = { accountId: e.accountId, userId: e.userId }
          function g() {
            let t = a.get($.PO)
            return (
              !r &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function m(e) {
            g() && a.set(u, (t) => ({ ...t, ...e }))
          }
          function h(e) {
            if (e.signal.aborted || !g()) throw new DOMException("The shopping account changed", "AbortError")
          }
          function y() {
            ;(i?.abort(),
              (i = null),
              s?.abort(),
              (s = null),
              n?.abort(),
              o?.abort(),
              (n = null),
              (o = null),
              (c = null),
              (d = []),
              (l = !1))
          }
          async function x() {
            if (!g()) return
            s?.abort()
            let t = new AbortController()
            ;((s = t), m({ entryStatus: "checking" }))
            try {
              let r = await B.Request.safeGet("/shopping/for-you/gmail", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(t),
                signal: t.signal,
              })
              if (!g() || s !== t) return
              if ("disconnected" === r.gmail_state || "reconnect_required" === r.gmail_state) {
                ;(y(), eO(a, e), m({ ...eL(), entryStatus: r.gmail_state }))
                return
              }
              m({ entryStatus: r.gmail_state ?? "unavailable" })
            } catch (e) {
              g() && s === t && !t.signal.aborted && (_(e), m({ entryStatus: "unavailable" }))
            } finally {
              s === t && (s = null)
            }
          }
          function _(t) {
            return (
              t instanceof H.fk &&
              !![401, 403, 404, 409].includes(t.status) &&
              (y(), eO(a, e), m({ ...eL(), entryStatus: "unavailable", pageError: !0 }), !0)
            )
          }
          function v() {
            return {
              excluded_product_ids: [...new Set(d.map((e) => e.productId))].join(","),
              excluded_offer_ids: [...new Set(d.map((e) => e.offerId))].join(","),
            }
          }
          function b(e) {
            for (let t of e) {
              let e = t.deal.offer_id
              !t.id ||
                t.id.length > 256 ||
                t.id.includes(",") ||
                !e ||
                e.length > 512 ||
                e.includes(",") ||
                (d = d.filter((a) => a.productId !== t.id || a.offerId !== e)).push({ productId: t.id, offerId: e })
            }
            for (; d.length > 0;) {
              let e = v()
              if (d.length <= 90 && e.excluded_product_ids.length + e.excluded_offer_ids.length <= 16384) break
              d.shift()
            }
          }
          async function j(t = !0, r = !1, x, A) {
            if (!g() || a.get(u).selectingProfile) return
            ;(i?.abort(),
              (i = null),
              s?.abort(),
              (s = null),
              t && (l = !1),
              (c = { refresh: r, preference: x, taskId: A }),
              n?.abort())
            let M = new AbortController()
            ;((n = M),
              m({
                loading: !0,
                loadingMore: !1,
                pageError: !1,
                cancelled: !1,
                loadingProfileTasks: !1,
                profileTaskError: null,
              }))
            try {
              let t = null
              if (!a.get(u).profileTasksUnavailable) {
                let e = await k(M)
                ;(h(M), e && (t = a.get(u).profileTasks))
              }
              let s = A ?? (t?.selected_task_id == null ? t?.tasks[0]?.task_id : void 0)
              if (null != s) {
                ;(o?.abort(), (o = null), m({ selectingProfile: !0, refreshingGmail: !1 }))
                try {
                  let e = await B.Request.safePost("/shopping/for-you/profile-selection", {
                    requestBody: { task_id: s },
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(M),
                    signal: M.signal,
                  })
                  ;(h(M),
                    (d = []),
                    m({
                      profileTasks: { tasks: t?.tasks ?? [], selected_task_id: e.task_id },
                      page: null,
                      items: [],
                      selectingProfile: !1,
                    }),
                    (c = { refresh: !0, preference: x }))
                } catch (e) {
                  if (g() && n === M && !M.signal.aborted) {
                    let t = e instanceof H.fk && 422 === e.status
                    ;((c = null),
                      m({
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
              let i = await e$(
                () =>
                  void 0 !== x
                    ? B.Request.safePost("/shopping/for-you", {
                        requestBody: {
                          refresh: !0,
                          preference: x,
                          excluded_product_ids: [...new Set(d.map((e) => e.productId))],
                          excluded_offer_ids: [...new Set(d.map((e) => e.offerId))],
                        },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(M),
                        signal: M.signal,
                      })
                    : B.Request.safeGet("/shopping/for-you", {
                        parameters: r || null != s ? { query: { refresh: !0, ...v() } } : void 0,
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(M),
                        signal: M.signal,
                      }),
                M.signal,
              )
              if (!g() || n !== M) return
              if (!eo(i) && ("disconnected" === i.gmail_state || "reconnect_required" === i.gmail_state)) {
                ;(y(), eO(a, e), m({ ...eL(), entryStatus: i.gmail_state }))
                return
              }
              "connected" !== i.gmail_state && eO(a, e)
              let _ = s ?? t?.selected_task_id,
                j = i.dream_inputs?.filter(
                  (e) => "shopping_profile_v1_retrieval" === e.source || "shopping_profile_v1_ranking" === e.source,
                )
              if (_ && i.snapshot_id && (!j?.length || j.some((e) => e.task_id !== _))) {
                ;((c = null), m({ page: null, items: [], loading: !1, profileTaskError: "not_applied" }))
                return
              }
              ;(!i.needs_gmail_refresh ||
                i.snapshot_id ||
                i.planned_queries?.length ||
                i.items?.length ||
                i.recommendations?.length ||
                i.currency_assumed_items?.length) &&
                (c = null)
              let S = a.get(u).page
              null != c &&
                "connected" === i.gmail_state &&
                i.needs_gmail_refresh &&
                !i.snapshot_id &&
                S?.gmail_state === "connected" &&
                S.snapshot_id &&
                (i = { ...S, needs_gmail_refresh: !0 })
              let C = (i = eU(i)).items ?? []
              ;(b(C),
                m({
                  page: i,
                  items: C,
                  loading: !1,
                  recommendationsUpdated: !1,
                  entryStatus: i.gmail_state ?? "unavailable",
                }),
                "connected" === i.gmail_state && i.needs_gmail_refresh && !l && w())
            } catch (e) {
              !g() || n !== M || M.signal.aborted || _(e) || m({ loading: !1, pageError: !0 })
            } finally {
              n === M && ((n = null), m({ selectingProfile: !1 }))
            }
          }
          async function k(e) {
            m({ loadingProfileTasks: !0 })
            try {
              let t = await B.Request.safeGet("/shopping/for-you/profile-tasks", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(e),
                signal: e.signal,
              })
              return (h(e), m({ profileTasks: t, profileTasksUnavailable: !1, profileTaskError: null }), !0)
            } catch (t) {
              if ((h(e), t instanceof H.fk && (403 === t.status || 404 === t.status)))
                return (m({ profileTasks: null, profileTasksUnavailable: !0, profileTaskError: null }), !1)
              if (
                (m({ profileTasks: null, profileTaskError: "list" }),
                t instanceof H.fk && (429 === t.status || t.status >= 500))
              )
                return !1
              throw t
            } finally {
              e.signal.aborted || m({ loadingProfileTasks: !1 })
            }
          }
          async function w() {
            if (!g() || o || a.get(u).selectingProfile) return
            ;(n?.abort(), (n = null), (l = !0))
            let t = new AbortController()
            ;((o = t), m({ refreshingGmail: !0, loading: !1, loadingMore: !1, gmailError: !1, cancelled: !1 }))
            try {
              let r = await e$(
                () =>
                  B.Request.safePost("/shopping/for-you/gmail-refresh", {
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(t),
                    signal: t.signal,
                  }),
                t.signal,
              )
              if (!g() || o !== t) return
              let s = a.get(u)
              if (((o = null), "unavailable" === r.gmail_state || null == r.gmail_state))
                return void m({ refreshingGmail: !1, gmailError: !0, entryStatus: "unavailable" })
              if ("connected" !== r.gmail_state) {
                ;(y(),
                  eO(a, e),
                  m({ ...eL(), entryStatus: r.gmail_state ?? "unavailable", page: { gmail_state: r.gmail_state } }),
                  eo(s.page) && (await j(!1)))
                return
              }
              ;(m({
                refreshingGmail: !1,
                entryStatus: r.gmail_state,
                page: {
                  ...s.page,
                  gmail_state: r.gmail_state,
                  email_offers: r.email_offers,
                  email_offers_status: r.email_offers_status,
                  shopping_signals_status: r.shopping_signals_status,
                  refreshed_at: r.refreshed_at,
                  needs_gmail_refresh: !1,
                },
              }),
                null == c ||
                (!c.refresh &&
                  (s.items.length || s.page?.recommendations?.length || s.page?.currency_assumed_items?.length))
                  ? r.updated &&
                    (s.page?.snapshot_id ||
                      s.page?.planned_queries?.length ||
                      s.page?.items?.length ||
                      s.page?.recommendations?.length ||
                      s.page?.currency_assumed_items?.length) &&
                    m({ recommendationsUpdated: !0 })
                  : await j(!1, c.refresh, c.preference, c.taskId))
            } catch (e) {
              !g() || o !== t || t.signal.aborted || _(e) || m({ gmailError: !0 })
            } finally {
              o === t && ((o = null), m({ refreshingGmail: !1 }))
            }
          }
          return {
            state$: u,
            checkGmail: x,
            loadFirst: j,
            loadMore: async function () {
              if (!g()) return
              let t = a.get(u)
              if (!t.page?.snapshot_id || !t.page.next_cursor || t.loading || t.loadingMore) return
              let r = new AbortController()
              ;((n = r), m({ loadingMore: !0, pageError: !1, cancelled: !1 }))
              try {
                let s = await e$(
                    () =>
                      B.Request.safeGet("/shopping/for-you", {
                        parameters: { query: { cursor: t.page?.next_cursor } },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(r),
                        signal: r.signal,
                      }),
                    r.signal,
                  ),
                  o = a.get(u).page
                if (!g() || n !== r || null == o || o?.snapshot_id !== t.page.snapshot_id) return
                if (!eo(s) && ("disconnected" === s.gmail_state || "reconnect_required" === s.gmail_state)) {
                  ;(y(), eO(a, e), m({ ...eL(), entryStatus: s.gmail_state }))
                  return
                }
                if (t.page.snapshot_id !== s.snapshot_id)
                  return void m({ loadingMore: !1, pageError: !0, recommendationsUpdated: !0 })
                let i = eU({
                    ...s,
                    items: eI()([...(t.page.items ?? []), ...(s.items ?? [])], "id"),
                    email_offers: o.email_offers,
                    email_offers_status: o.email_offers_status,
                    shopping_signals_status: o.shopping_signals_status,
                    refreshed_at: o.refreshed_at,
                    needs_gmail_refresh: o.needs_gmail_refresh,
                  }),
                  l = i.items ?? []
                ;(b(l), m({ page: i, items: l, loadingMore: !1 }))
              } catch (e) {
                !g() || n !== r || r.signal.aborted || _(e) || m({ loadingMore: !1, pageError: !0 })
              } finally {
                n === r && (n = null)
              }
            },
            refreshGmail: w,
            loadProfileTasks: async function () {
              if (!g() || a.get(u).loading || a.get(u).selectingProfile) return
              i?.abort()
              let e = new AbortController()
              i = e
              try {
                await k(e)
              } catch (t) {
                !e.signal.aborted && g() && _(t)
              } finally {
                i === e && (i = null)
              }
            },
            selectProfileTask: (e, t) => j(!0, !0, t?.trim(), e),
            refresh: (e) => j(!0, !0, e?.trim()),
            cancel: () => {
              let e = a.get(u).selectingProfile
              ;(s?.abort(),
                (s = null),
                n?.abort(),
                o?.abort(),
                (n = null),
                (o = null),
                (c = null),
                m({
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
    function eU(e) {
      return {
        ...e,
        items: e.items?.filter((e) => eG.safeParse(e.product.product_lookup_key).success),
        recommendations: e.recommendations?.filter((e) => eG.safeParse(e.product.product_lookup_key).success),
        currency_assumed_items: e.currency_assumed_items?.filter(
          (e) => eG.safeParse(e.product.product_lookup_key).success,
        ),
      }
    }
    async function e$(e, t) {
      for (; !t.aborted;)
        try {
          return await e()
        } catch (e) {
          if (
            !(function (e) {
              if (!(e instanceof H.fk) || 429 !== e.status) return !1
              if (null != e.errorCode) return "for_you_updating" === e.errorCode
              try {
                return eF.safeParse(JSON.parse(e.message)).success
              } catch {
                return !1
              }
            })(e)
          )
            throw e
          await new Promise((e, a) => {
            let r = () => {
                ;(clearTimeout(s), a(new DOMException("The shopping request was cancelled", "AbortError")))
              },
              s = setTimeout(() => {
                ;(t.removeEventListener("abort", r), e())
              }, 5e3)
            ;(t.addEventListener("abort", r, { once: !0 }), t.aborted && r())
          })
        }
      throw t.reason
    }
    var eB = a("uuN8"),
      ez = a("okCa"),
      eH = a("aepO")
    function eV(e) {
      let t,
        a,
        n,
        c,
        d,
        p,
        f,
        m,
        h,
        y,
        x,
        _ = (0, s.c)(69),
        {
          offers: v,
          unavailable: b,
          updatedAt: j,
          busy: k,
          error: w,
          savedIds: A,
          onToggleSaved: M,
          onRefresh: S,
          onStop: C,
        } = e,
        N = (0, l.A)(),
        [T, I] = (0, o.useState)(""),
        [P, E] = (0, o.useState)("all")
      if (
        _[0] !== k ||
        _[1] !== P ||
        _[2] !== w ||
        _[3] !== N ||
        _[4] !== v ||
        _[5] !== S ||
        _[6] !== C ||
        _[7] !== M ||
        _[8] !== T ||
        _[9] !== A ||
        _[10] !== b ||
        _[11] !== j
      ) {
        let e, s, o, l, y, x, Y, D, R
        ;(_[21] !== P || _[22] !== T
          ? ((e = (e) =>
              ("all" === P || e.category === P) &&
              `${e.title} ${e.merchant} ${e.category}`.toLocaleLowerCase().includes(T.trim().toLocaleLowerCase())),
            (_[21] = P),
            (_[22] = T),
            (_[23] = e))
          : (e = _[23]),
          (t = v.filter(e)),
          (a = "flex flex-col gap-6"),
          (n = "shopping-email-title"),
          _[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)("h2", {
                id: "shopping-email-title",
                className: "heading-md",
                children: (0, r.jsx)(i.A, {
                  id: "shopping.forYou.email.title",
                  defaultMessage: "Deals from your inbox",
                }),
              })),
              (_[24] = s))
            : (s = _[24]),
          _[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, r.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  s,
                  (0, r.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.email.description",
                      defaultMessage: "Promotions from your recent emails. Offers are not verified",
                    }),
                  }),
                ],
              })),
              (_[25] = o))
            : (o = _[25]),
          _[26] !== N || _[27] !== j
            ? ((l = j
                ? (0, r.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.email.updated",
                      defaultMessage: "Updated {time}",
                      values: { time: N.formatTime(j) },
                    }),
                  })
                : null),
              (_[26] = N),
              (_[27] = j),
              (_[28] = l))
            : (l = _[28]),
          _[29] !== l
            ? ((c = (0, r.jsxs)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: [o, l],
              })),
              (_[29] = l),
              (_[30] = c))
            : (c = _[30]),
          _[31] !== k || _[32] !== S || _[33] !== C
            ? ((y = k
                ? (0, r.jsx)(u.$, {
                    color: "secondary",
                    onClick: C,
                    children: (0, r.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                  })
                : (0, r.jsx)(u.$, {
                    color: "secondary",
                    onClick: S,
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.email.find",
                      defaultMessage: "Find email offers",
                    }),
                  })),
              (_[31] = k),
              (_[32] = S),
              (_[33] = C),
              (_[34] = y))
            : (y = _[34]),
          _[35] !== k
            ? ((x = k
                ? (0, r.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.email.loading",
                      defaultMessage: "Finding email offers…",
                    }),
                  })
                : null),
              (_[35] = k),
              (_[36] = x))
            : (x = _[36]),
          _[37] !== y || _[38] !== x
            ? ((d = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [y, x] })),
              (_[37] = y),
              (_[38] = x),
              (_[39] = d))
            : (d = _[39]),
          _[40] !== w || _[41] !== b
            ? ((p =
                w || b
                  ? (0, r.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-secondary",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.forYou.email.failed",
                        defaultMessage: "Email offers couldn't be loaded. Try again",
                      }),
                    })
                  : null),
              (_[40] = w),
              (_[41] = b),
              (_[42] = p))
            : (p = _[42]),
          _[43] !== N
            ? ((Y = N.formatMessage({
                id: "shopping.forYou.email.searchLabel",
                defaultMessage: "Search email offers",
              })),
              (_[43] = N),
              (_[44] = Y))
            : (Y = _[44]),
          _[45] !== N
            ? ((D = N.formatMessage({
                id: "shopping.forYou.email.searchPlaceholder",
                defaultMessage: "Search offers or brands",
              })),
              (_[45] = N),
              (_[46] = D))
            : (D = _[46]),
          _[47] !== T || _[48] !== Y || _[49] !== D
            ? ((f = (0, r.jsx)(ez.s, {
                id: "shopping-email-search",
                label: Y,
                placeholder: D,
                searchQuery: T,
                onSearchQueryChange: I,
                autoFocus: !1,
              })),
              (_[47] = T),
              (_[48] = Y),
              (_[49] = D),
              (_[50] = f))
            : (f = _[50]),
          _[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = Object.entries(eZ).map(eQ)), (_[51] = R))
            : (R = _[51]),
          _[52] !== P
            ? ((m = (0, r.jsx)(g.t, { variant: "filter", scrollable: !0, selectedKey: P, onSelect: E, tabs: R })),
              (_[52] = P),
              (_[53] = m))
            : (m = _[53]),
          (h =
            t.length > 0
              ? (0, r.jsx)("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) =>
                    (0, r.jsx)(
                      eK,
                      { offer: e, saved: A.has(e.id) || A.has(e.source_id), onToggleSaved: () => M(e) },
                      e.id,
                    ),
                  ),
                })
              : null),
          (_[0] = k),
          (_[1] = P),
          (_[2] = w),
          (_[3] = N),
          (_[4] = v),
          (_[5] = S),
          (_[6] = C),
          (_[7] = M),
          (_[8] = T),
          (_[9] = A),
          (_[10] = b),
          (_[11] = j),
          (_[12] = t),
          (_[13] = a),
          (_[14] = n),
          (_[15] = c),
          (_[16] = d),
          (_[17] = p),
          (_[18] = f),
          (_[19] = m),
          (_[20] = h))
      } else
        ((t = _[12]),
          (a = _[13]),
          (n = _[14]),
          (c = _[15]),
          (d = _[16]),
          (p = _[17]),
          (f = _[18]),
          (m = _[19]),
          (h = _[20]))
      return (
        _[54] !== k || _[55] !== w || _[56] !== t.length || _[57] !== b
          ? ((y =
              0 !== t.length || k || w || b
                ? null
                : (0, r.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.email.empty",
                      defaultMessage: "No email offers match right now",
                    }),
                  })),
            (_[54] = k),
            (_[55] = w),
            (_[56] = t.length),
            (_[57] = b),
            (_[58] = y))
          : (y = _[58]),
        _[59] !== a ||
        _[60] !== n ||
        _[61] !== c ||
        _[62] !== d ||
        _[63] !== p ||
        _[64] !== f ||
        _[65] !== m ||
        _[66] !== h ||
        _[67] !== y
          ? ((x = (0, r.jsxs)("section", { className: a, "aria-labelledby": n, children: [c, d, p, f, m, h, y] })),
            (_[59] = a),
            (_[60] = n),
            (_[61] = c),
            (_[62] = d),
            (_[63] = p),
            (_[64] = f),
            (_[65] = m),
            (_[66] = h),
            (_[67] = y),
            (_[68] = x))
          : (x = _[68]),
        x
      )
    }
    function eQ(e) {
      let [t, a] = e
      return { key: t, name: (0, r.jsx)(i.A, { ...a }) }
    }
    function eK(e) {
      let t,
        a,
        n,
        c,
        d,
        p,
        f,
        g,
        m,
        h,
        y,
        x,
        _,
        v,
        b,
        j,
        k,
        w = (0, s.c)(44),
        { offer: A, saved: M, onToggleSaved: S } = e,
        C = (0, l.A)(),
        [N, T] = (0, o.useState)(!1),
        I = A.offer_url && A.image?.source_id === A.source_id ? A.image : null
      w[0] !== A.offer_url ? ((t = F(A.offer_url)), (w[0] = A.offer_url), (w[1] = t)) : (t = w[1])
      let P = t
      w[2] !== A.source_url ? ((a = F(A.source_url)), (w[2] = A.source_url), (w[3] = a)) : (a = w[3])
      let D = a
      return (
        w[4] !== A.merchant
          ? ((n = (0, r.jsx)("p", { className: "text-xs text-secondary", children: A.merchant })),
            (w[4] = A.merchant),
            (w[5] = n))
          : (n = w[5]),
        w[6] !== A.title
          ? ((c = (0, r.jsx)("h3", { className: "text-base font-semibold wrap-anywhere", children: A.title })),
            (w[6] = A.title),
            (w[7] = c))
          : (c = w[7]),
        w[8] !== n || w[9] !== c
          ? ((d = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [n, c] })),
            (w[8] = n),
            (w[9] = c),
            (w[10] = d))
          : (d = w[10]),
        w[11] !== M
          ? ((p = M
              ? (0, r.jsx)(i.A, { id: "shopping.forYou.email.unsave", defaultMessage: "Remove" })
              : (0, r.jsx)(i.A, { id: "shopping.forYou.email.save", defaultMessage: "Save" })),
            (w[11] = M),
            (w[12] = p))
          : (p = w[12]),
        w[13] !== S || w[14] !== M || w[15] !== p
          ? ((f = (0, r.jsx)(u.$, {
              color: "secondary",
              size: "actionSm",
              "aria-pressed": M,
              onClick: S,
              children: p,
            })),
            (w[13] = S),
            (w[14] = M),
            (w[15] = p),
            (w[16] = f))
          : (f = w[16]),
        w[17] !== d || w[18] !== f
          ? ((g = (0, r.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [d, f] })),
            (w[17] = d),
            (w[18] = f),
            (w[19] = g))
          : (g = w[19]),
        w[20] !== I
          ? ((m = I ? (0, r.jsx)(eW, { image: I }, `${I.source_id}:${I.url}`) : null), (w[20] = I), (w[21] = m))
          : (m = w[21]),
        w[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)(E.E, {
              variant: "warning",
              children: (0, r.jsx)(i.A, {
                id: "shopping.forYou.email.unverified",
                defaultMessage: "Not verified · Email source",
              }),
            })),
            (w[22] = h))
          : (h = w[22]),
        w[23] !== C || w[24] !== A.expires_at
          ? ((y = A.expires_at
              ? (0, r.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, r.jsx)(i.A, {
                    id: "shopping.forYou.email.expires",
                    defaultMessage: "Email says offer ends {date}",
                    values: { date: C.formatDate(A.expires_at, { month: "short", day: "numeric" }) },
                  }),
                })
              : null),
            (w[23] = C),
            (w[24] = A.expires_at),
            (w[25] = y))
          : (y = w[25]),
        w[26] !== D
          ? ((x = D
              ? (0, r.jsx)(Y.G, {
                  href: D,
                  initiator: "markdown_link_click",
                  appearance: "secondary",
                  children: (0, r.jsx)(i.A, { id: "shopping.forYou.email.source", defaultMessage: "From your email" }),
                })
              : null),
            (w[26] = D),
            (w[27] = x))
          : (x = w[27]),
        w[28] !== C || w[29] !== A.coupon_code
          ? ((_ = A.coupon_code
              ? (0, r.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-2",
                  children: [
                    (0, r.jsx)("code", { className: "min-w-0 text-sm break-all select-text", children: A.coupon_code }),
                    (0, r.jsx)(eB.i, {
                      ariaLabel: C.formatMessage({
                        id: "shopping.forYou.email.copy",
                        defaultMessage: "Copy coupon code",
                      }),
                      onCopy: async () => {
                        let e = await (0, eH.E)(A.coupon_code ?? "")
                        return (T(!e), e)
                      },
                    }),
                  ],
                })
              : null),
            (w[28] = C),
            (w[29] = A.coupon_code),
            (w[30] = _))
          : (_ = w[30]),
        w[31] !== N
          ? ((v = N
              ? (0, r.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-secondary",
                  children: (0, r.jsx)(i.A, {
                    id: "shopping.forYou.email.copyError",
                    defaultMessage: "Couldn't copy the code. Try again",
                  }),
                })
              : null),
            (w[31] = N),
            (w[32] = v))
          : (v = w[32]),
        w[33] !== P
          ? ((b = P
              ? (0, r.jsx)(Y.G, {
                  href: P,
                  initiator: "markdown_link_click",
                  appearance: "button",
                  children: (0, r.jsx)(i.A, { id: "shopping.forYou.email.view", defaultMessage: "View offer" }),
                })
              : null),
            (w[33] = P),
            (w[34] = b))
          : (b = w[34]),
        w[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, r.jsx)(i.A, {
                id: "shopping.forYou.email.terms",
                defaultMessage: "Advertised in email. Terms and eligibility apply",
              }),
            })),
            (w[35] = j))
          : (j = w[35]),
        w[36] !== y || w[37] !== x || w[38] !== _ || w[39] !== v || w[40] !== b || w[41] !== g || w[42] !== m
          ? ((k = (0, r.jsxs)("article", {
              className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
              children: [g, m, h, y, x, _, v, b, j],
            })),
            (w[36] = y),
            (w[37] = x),
            (w[38] = _),
            (w[39] = v),
            (w[40] = b),
            (w[41] = g),
            (w[42] = m),
            (w[43] = k))
          : (k = w[43]),
        k
      )
    }
    function eW(e) {
      let t,
        a,
        n,
        c = (0, s.c)(8),
        { image: d } = e,
        p = (0, l.A)(),
        [f, g] = (0, o.useState)("idle")
      c[0] !== d.url
        ? ((a = F(d.url)), (t = a?.startsWith("https:")), (c[0] = d.url), (c[1] = t), (c[2] = a))
        : ((t = c[1]), (a = c[2]))
      let m = t
      return (
        c[3] !== m || c[4] !== p || c[5] !== f || c[6] !== a
          ? ((n = (0, r.jsx)("div", {
              className:
                "flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-artifact-photo-paper",
              children:
                "requested" === f && m
                  ? (0, r.jsx)("img", {
                      src: a ?? void 0,
                      alt: p.formatMessage({
                        id: "shopping.forYou.email.image",
                        defaultMessage: "Promotional email image",
                      }),
                      referrerPolicy: "no-referrer",
                      className: "block h-full w-full object-contain",
                      onError: () => g("failed"),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-xs text-secondary",
                          children:
                            "failed" !== f && m
                              ? (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageConsent",
                                  defaultMessage: "Remote email image",
                                })
                              : (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageUnavailable",
                                  defaultMessage: "Image unavailable",
                                }),
                        }),
                        m
                          ? (0, r.jsx)(u.$, {
                              color: "secondary",
                              size: "actionSm",
                              onClick: () => g("requested"),
                              children: (0, r.jsx)(i.A, {
                                id: "shopping.forYou.email.loadImage",
                                defaultMessage: "Load images",
                              }),
                            })
                          : null,
                      ],
                    }),
            })),
            (c[3] = m),
            (c[4] = p),
            (c[5] = f),
            (c[6] = a),
            (c[7] = n))
          : (n = c[7]),
        n
      )
    }
    let eZ = (0, v.YK)({
      all: { id: "shopping.forYou.email.category.all", defaultMessage: "All" },
      clothing: { id: "shopping.forYou.email.category.clothing", defaultMessage: "Clothing" },
      shoes: { id: "shopping.forYou.email.category.shoes", defaultMessage: "Shoes" },
      home: { id: "shopping.forYou.email.category.home", defaultMessage: "Home" },
      tech: { id: "shopping.forYou.email.category.tech", defaultMessage: "Tech" },
    })
    var eJ = a("jU86"),
      eX = a("ahQQ"),
      e0 = a("UbZA"),
      e1 = a("FFnF")
    let e2 = (0, eJ.ER)("/library", "?tab=favorites")
    function e3(e) {
      let t,
        a,
        o,
        i,
        l = (0, s.c)(7),
        { accountId: c, userId: d } = e,
        u = (0, n.Ul)(C.PO),
        p = (0, n.Ul)(D._),
        f = (0, O.Fj)("2347841422")
      return !u.authLoading &&
        "chatgpt" === u.authMethod &&
        u.hasChatGptToken &&
        u.authenticatedAccountId === c &&
        u.authenticatedUserId === d &&
        null != u.userId &&
        p &&
        f.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
        ? (l[0] !== c || l[1] !== u.userId
            ? ((t = { accountId: c, userId: u.userId }), (l[0] = c), (l[1] = u.userId), (l[2] = t))
            : (t = l[2]),
          l[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = { embedded: !0 }), (l[3] = a)) : (a = l[3]),
          l[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, r.jsx)(n.Ui, {
                scope: eX.vn,
                value: a,
                children: (0, r.jsx)(n.Ui, { scope: eX.Qy, value: e2, children: (0, r.jsx)(e4, {}) }),
              })),
              (l[4] = o))
            : (o = l[4]),
          l[5] !== t
            ? ((i = (0, r.jsx)(n.Ui, { scope: eX.oD, value: t, children: o })), (l[5] = t), (l[6] = i))
            : (i = l[6]),
          i)
        : null
    }
    function e4() {
      let e,
        t,
        a,
        o,
        l,
        c,
        d,
        p,
        f,
        g = (0, s.c)(28),
        m = (0, n.Ul)(eJ.i3),
        h = (0, n.Ul)(eJ.AH)
      return (
        g[0] !== h || g[1] !== m
          ? ((e = h?.filter(e6)),
            (t = "flex flex-col gap-4"),
            g[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsx)("h2", {
                  className: "heading-md",
                  children: (0, r.jsx)(i.A, { id: "shopping.forYou.savedProducts", defaultMessage: "Saved products" }),
                })),
                (g[8] = a))
              : (a = g[8]),
            g[9] !== m.isPending
              ? ((o = m.isPending
                  ? (0, r.jsx)("p", {
                      className: "text-sm text-secondary",
                      role: "status",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.forYou.loadingSavedProducts",
                        defaultMessage: "Loading saved products…",
                      }),
                    })
                  : null),
                (g[9] = m.isPending),
                (g[10] = o))
              : (o = g[10]),
            g[11] !== m
              ? ((l = m.isError
                  ? (0, r.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      role: "alert",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.savedProductsFailed",
                            defaultMessage: "Couldn't load saved products",
                          }),
                        }),
                        (0, r.jsx)(u.$, {
                          color: "secondary",
                          onClick: () => void m.refetch(),
                          children: (0, r.jsx)(i.A, {
                            id: "shopping.forYou.retrySavedProducts",
                            defaultMessage: "Try again",
                          }),
                        }),
                      ],
                    })
                  : null),
                (g[11] = m),
                (g[12] = l))
              : (l = g[12]),
            (c = e?.length
              ? (0, r.jsx)("div", {
                  className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
                  children: e.map(e5),
                })
              : null),
            (g[0] = h),
            (g[1] = m),
            (g[2] = e),
            (g[3] = t),
            (g[4] = a),
            (g[5] = o),
            (g[6] = l),
            (g[7] = c))
          : ((e = g[2]), (t = g[3]), (a = g[4]), (o = g[5]), (l = g[6]), (c = g[7])),
        g[13] !== e?.length || g[14] !== m.hasNextPage || g[15] !== m.isError || g[16] !== m.isPending
          ? ((d =
              e?.length || m.isPending || m.isError || m.hasNextPage
                ? null
                : (0, r.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.forYou.noSavedProducts",
                      defaultMessage: "Save products to find them here",
                    }),
                  })),
            (g[13] = e?.length),
            (g[14] = m.hasNextPage),
            (g[15] = m.isError),
            (g[16] = m.isPending),
            (g[17] = d))
          : (d = g[17]),
        g[18] !== m
          ? ((p = m.hasNextPage
              ? (0, r.jsx)(u.$, {
                  color: "secondary",
                  className: "self-start",
                  disabled: m.isFetching,
                  loading: m.isFetchingNextPage,
                  onClick: () => void m.fetchNextPage({ cancelRefetch: !1 }),
                  children: (0, r.jsx)(i.A, {
                    id: "shopping.forYou.moreSavedProducts",
                    defaultMessage: "Load more saved products",
                  }),
                })
              : null),
            (g[18] = m),
            (g[19] = p))
          : (p = g[19]),
        g[20] !== t || g[21] !== a || g[22] !== o || g[23] !== l || g[24] !== c || g[25] !== d || g[26] !== p
          ? ((f = (0, r.jsxs)("section", { className: t, children: [a, o, l, c, d, p] })),
            (g[20] = t),
            (g[21] = a),
            (g[22] = o),
            (g[23] = l),
            (g[24] = c),
            (g[25] = d),
            (g[26] = p),
            (g[27] = f))
          : (f = g[27]),
        f
      )
    }
    function e5(e) {
      return (0, r.jsx)(e7, { entry: e }, e.node.id)
    }
    function e6(e) {
      return e.node.saved_entity?.saved_target.sidebar_params.category === "product_rationale_and_reviews"
    }
    function e7(e) {
      let t,
        a,
        o,
        i,
        l = (0, s.c)(15),
        { entry: c } = e,
        d = (0, n.gh)(z.GD),
        u = (0, n.gh)(eX.oD),
        p = c.node.saved_entity,
        f = u.value.userId
      return null == p || null == f
        ? null
        : (l[0] !== p || l[1] !== d
            ? ((t = (e) => {
                let t = e?.currentTarget,
                  a = d.get(C.PO)
                ;(0, e1.K)(d, p, "grid", () => {
                  let e = d.get(C.PO)
                  return (
                    t instanceof Node &&
                    t.isConnected &&
                    !e.authLoading &&
                    "chatgpt" === e.authMethod &&
                    !0 === e.hasChatGptToken &&
                    e.authenticatedAccountId === a.authenticatedAccountId &&
                    e.authenticatedUserId === a.authenticatedUserId
                  )
                })
              }),
              (l[0] = p),
              (l[1] = d),
              (l[2] = t))
            : (t = l[2]),
          l[3] !== p.display_data || l[4] !== p.origin || l[5] !== p.saved_target
            ? ((a = { saved_target: p.saved_target, display_data: p.display_data, origin: p.origin }),
              (l[3] = p.display_data),
              (l[4] = p.origin),
              (l[5] = p.saved_target),
              (l[6] = a))
            : (a = l[6]),
          l[7] !== u.value.accountId || l[8] !== a || l[9] !== f
            ? ((o = [
                {
                  key: "favorite",
                  component: (0, r.jsx)(G.ProductFavoriteAction, {
                    accountId: u.value.accountId,
                    userId: f,
                    conversationId: void 0,
                    messageId: void 0,
                    request: a,
                    surface: "product_card",
                  }),
                },
              ]),
              (l[7] = u.value.accountId),
              (l[8] = a),
              (l[9] = f),
              (l[10] = o))
            : (o = l[10]),
          l[11] !== c || l[12] !== t || l[13] !== o
            ? ((i = (0, r.jsx)(e0.H$, { entry: c, onOpen: t, actions: o })),
              (l[11] = c),
              (l[12] = t),
              (l[13] = o),
              (l[14] = i))
            : (i = l[14]),
          i)
    }
    var e8 = a("ZZgR")
    function e9(e) {
      let t,
        a,
        n,
        c,
        d,
        p,
        f,
        g,
        m,
        h,
        y,
        x,
        _,
        v,
        b,
        j,
        k,
        w,
        A,
        M,
        S,
        C,
        N,
        T,
        I,
        P,
        E,
        Y,
        D = (0, s.c)(100),
        { state: R, onLoad: O, onSelect: G } = e,
        F = (0, l.A)(),
        [q, L] = (0, o.useState)(!1),
        [U, $] = (0, o.useState)("")
      D[0] !== R.profileTasks?.tasks
        ? ((t = R.profileTasks?.tasks ?? []), (D[0] = R.profileTasks?.tasks), (D[1] = t))
        : (t = D[1])
      let B = t
      if (
        D[2] !== F ||
        D[3] !== O ||
        D[4] !== G ||
        D[5] !== q ||
        D[6] !== U ||
        D[7] !== R.loading ||
        D[8] !== R.loadingMore ||
        D[9] !== R.loadingProfileTasks ||
        D[10] !== R.page ||
        D[11] !== R.profileTasks ||
        D[12] !== R.profileTasksUnavailable ||
        D[13] !== R.refreshingGmail ||
        D[14] !== R.selectingProfile ||
        D[15] !== B
      ) {
        y = Symbol.for("react.early_return_sentinel")
        e: {
          let e, t, s, o, l
          D[34] !== U
            ? ((e = (e) => `${e.task_id} ${e.schema_version}`.toLowerCase().includes(U.trim().toLowerCase())),
              (D[34] = U),
              (D[35] = e))
            : (e = D[35])
          let M = B.filter(e)
          if (R.profileTasksUnavailable) {
            y = null
            break e
          }
          let S = R.loading || R.loadingMore || R.refreshingGmail || R.selectingProfile
          ;(D[36] !== R.page || D[37] !== R.profileTasks?.selected_task_id
            ? ((t = R.page?.snapshot_id ? R.page.dream_inputs?.find(te)?.task_id : R.profileTasks?.selected_task_id),
              (D[36] = R.page),
              (D[37] = R.profileTasks?.selected_task_id),
              (D[38] = t))
            : (t = D[38]),
            (d = t),
            (h = "flex flex-col items-start gap-2"),
            (c = e8.A),
            (w = q),
            D[39] !== O
              ? ((A = (e) => {
                  ;(L(e), e && ($(""), O()))
                }),
                (D[39] = O),
                (D[40] = A))
              : (A = D[40]),
            (p = S),
            (f = "panelWide"),
            (g = "max-w-[calc(100vw-2rem)]"),
            D[41] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, r.jsx)(i.A, { id: "shopping.profileTasks.label", defaultMessage: "Shopping Profile task" })),
                (D[41] = s))
              : (s = D[41]),
            D[42] !== d
              ? ((o = d ? (0, r.jsx)("span", { className: "font-mono", children: d.slice(0, 8) }) : null),
                (D[42] = d),
                (D[43] = o))
              : (o = D[43]),
            D[44] !== S || D[45] !== o
              ? ((m = (0, r.jsxs)(u.$, { color: "secondary", disabled: S, children: [s, o] })),
                (D[44] = S),
                (D[45] = o),
                (D[46] = m))
              : (m = D[46]),
            (n = e8.G.Root),
            D[47] !== F
              ? ((j = F.formatMessage({
                  id: "shopping.profileTasks.listLabel",
                  defaultMessage: "Recent Shopping Profile tasks",
                })),
                (D[47] = F),
                (D[48] = j))
              : (j = D[48]),
            D[49] !== F
              ? ((l = F.formatMessage({
                  id: "shopping.profileTasks.search",
                  defaultMessage: "Search task ID or schema version",
                })),
                (D[49] = F),
                (D[50] = l))
              : (l = D[50]),
            D[51] !== U || D[52] !== l
              ? ((k = (0, r.jsx)(e8.G.Input, { value: U, onValueChange: $, placeholder: l })),
                (D[51] = U),
                (D[52] = l),
                (D[53] = k))
              : (k = D[53]),
            (a = e8.G.List),
            D[54] !== R.loadingProfileTasks
              ? ((x = R.loadingProfileTasks
                  ? (0, r.jsx)("p", {
                      className: "px-3 py-2 text-sm text-secondary",
                      role: "status",
                      children: (0, r.jsx)(i.A, {
                        id: "shopping.profileTasks.loading",
                        defaultMessage: "Loading tasks…",
                      }),
                    })
                  : null),
                (D[54] = R.loadingProfileTasks),
                (D[55] = x))
              : (x = D[55]),
            D[56] !== R.loadingProfileTasks || D[57] !== R.profileTasks
              ? ((_ =
                  R.loadingProfileTasks || R.profileTasks?.tasks.length !== 0
                    ? null
                    : (0, r.jsx)("p", {
                        className: "px-3 py-2 text-sm text-secondary",
                        children: (0, r.jsx)(i.A, {
                          id: "shopping.profileTasks.empty",
                          defaultMessage: "No saved Shopping Profile outputs found in recent history",
                        }),
                      })),
                (D[56] = R.loadingProfileTasks),
                (D[57] = R.profileTasks),
                (D[58] = _))
              : (_ = D[58]),
            (v =
              !R.loadingProfileTasks && B.length > 0 && 0 === M.length
                ? (0, r.jsx)("p", {
                    className: "px-3 py-2 text-sm text-secondary",
                    role: "status",
                    children: (0, r.jsx)(i.A, {
                      id: "shopping.profileTasks.noMatches",
                      defaultMessage: "No matching tasks",
                    }),
                  })
                : null),
            (b = R.loadingProfileTasks
              ? null
              : M.map((e) =>
                  (0, r.jsx)(
                    e8.G.Item,
                    {
                      value: `${e.task_id} ${e.schema_version}`,
                      checked: e.task_id === d,
                      onSelect: () => {
                        ;(L(!1), G(e.task_id))
                      },
                      children: (0, r.jsxs)("div", {
                        className: "flex min-w-0 flex-col gap-1 whitespace-normal",
                        children: [
                          (0, r.jsxs)("span", {
                            children: [
                              F.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                              e.task_id === B[0]?.task_id
                                ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      " ",
                                      (0, r.jsx)(i.A, { id: "shopping.profileTasks.latest", defaultMessage: "Latest" }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, r.jsx)("span", {
                            className: "text-xs text-secondary",
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.profileTasks.signalCount",
                              defaultMessage: "{schema} · {count, plural, one {# signal} other {# signals}}",
                              values: { schema: e.schema_version, count: e.signal_count },
                            }),
                          }),
                          (0, r.jsx)("span", {
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
        ;((D[2] = F),
          (D[3] = O),
          (D[4] = G),
          (D[5] = q),
          (D[6] = U),
          (D[7] = R.loading),
          (D[8] = R.loadingMore),
          (D[9] = R.loadingProfileTasks),
          (D[10] = R.page),
          (D[11] = R.profileTasks),
          (D[12] = R.profileTasksUnavailable),
          (D[13] = R.refreshingGmail),
          (D[14] = R.selectingProfile),
          (D[15] = B),
          (D[16] = a),
          (D[17] = n),
          (D[18] = c),
          (D[19] = d),
          (D[20] = p),
          (D[21] = f),
          (D[22] = g),
          (D[23] = m),
          (D[24] = h),
          (D[25] = y),
          (D[26] = x),
          (D[27] = _),
          (D[28] = v),
          (D[29] = b),
          (D[30] = j),
          (D[31] = k),
          (D[32] = w),
          (D[33] = A))
      } else
        ((a = D[16]),
          (n = D[17]),
          (c = D[18]),
          (d = D[19]),
          (p = D[20]),
          (f = D[21]),
          (g = D[22]),
          (m = D[23]),
          (h = D[24]),
          (y = D[25]),
          (x = D[26]),
          (_ = D[27]),
          (v = D[28]),
          (b = D[29]),
          (j = D[30]),
          (k = D[31]),
          (w = D[32]),
          (A = D[33]))
      return y !== Symbol.for("react.early_return_sentinel")
        ? y
        : (D[59] !== a || D[60] !== x || D[61] !== _ || D[62] !== v || D[63] !== b
            ? ((M = (0, r.jsxs)(a, { children: [x, _, v, b] })),
              (D[59] = a),
              (D[60] = x),
              (D[61] = _),
              (D[62] = v),
              (D[63] = b),
              (D[64] = M))
            : (M = D[64]),
          D[65] !== n || D[66] !== M || D[67] !== j || D[68] !== k
            ? ((S = (0, r.jsxs)(n, { label: j, children: [k, M] })),
              (D[65] = n),
              (D[66] = M),
              (D[67] = j),
              (D[68] = k),
              (D[69] = S))
            : (S = D[69]),
          D[70] !== c ||
          D[71] !== p ||
          D[72] !== f ||
          D[73] !== g ||
          D[74] !== m ||
          D[75] !== S ||
          D[76] !== w ||
          D[77] !== A
            ? ((C = (0, r.jsx)(c, {
                open: w,
                onOpenChange: A,
                disabled: p,
                contentWidth: f,
                contentClassName: g,
                triggerButton: m,
                children: S,
              })),
              (D[70] = c),
              (D[71] = p),
              (D[72] = f),
              (D[73] = g),
              (D[74] = m),
              (D[75] = S),
              (D[76] = w),
              (D[77] = A),
              (D[78] = C))
            : (C = D[78]),
          D[79] !== R.selectingProfile
            ? ((N = R.selectingProfile
                ? (0, r.jsx)(i.A, { id: "shopping.profileTasks.applying", defaultMessage: "Checking task access…" })
                : null),
              (D[79] = R.selectingProfile),
              (D[80] = N))
            : (N = D[80]),
          D[81] !== d || D[82] !== R.loading || D[83] !== R.selectingProfile
            ? ((T =
                !R.selectingProfile && R.loading && d
                  ? (0, r.jsx)(i.A, {
                      id: "shopping.profileTasks.refreshing",
                      defaultMessage: "Loading recommendations and Profile for this task…",
                    })
                  : null),
              (D[81] = d),
              (D[82] = R.loading),
              (D[83] = R.selectingProfile),
              (D[84] = T))
            : (T = D[84]),
          D[85] !== d || D[86] !== R.loading || D[87] !== R.selectingProfile
            ? ((I =
                R.selectingProfile || (R.loading && d)
                  ? null
                  : (0, r.jsx)(i.A, {
                      id: "shopping.profileTasks.help",
                      defaultMessage:
                        "Choose a saved profile to reload recommendations and Profile. Shadow tasks are supported. Your first load uses the latest task; later loads keep your selection.",
                    })),
              (D[85] = d),
              (D[86] = R.loading),
              (D[87] = R.selectingProfile),
              (D[88] = I))
            : (I = D[88]),
          D[89] !== N || D[90] !== T || D[91] !== I
            ? ((P = (0, r.jsxs)("p", { className: "text-sm text-secondary", role: "status", children: [N, T, I] })),
              (D[89] = N),
              (D[90] = T),
              (D[91] = I),
              (D[92] = P))
            : (P = D[92]),
          D[93] !== R.profileTaskError
            ? ((E = R.profileTaskError
                ? (0, r.jsxs)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: [
                      "list" === R.profileTaskError
                        ? (0, r.jsx)(i.A, {
                            id: "shopping.profileTasks.listError",
                            defaultMessage: "Tasks couldn't be loaded. Open the picker to retry.",
                          })
                        : null,
                      "not_applied" === R.profileTaskError
                        ? (0, r.jsx)(i.A, {
                            id: "shopping.profileTasks.notApplied",
                            defaultMessage: "This task couldn't be used for the feed. Choose another saved profile.",
                          })
                        : null,
                      "selection" === R.profileTaskError
                        ? (0, r.jsx)(i.A, {
                            id: "shopping.profileTasks.selectionError",
                            defaultMessage: "The selection couldn't be confirmed. Reopen the picker and try again.",
                          })
                        : null,
                    ],
                  })
                : null),
              (D[93] = R.profileTaskError),
              (D[94] = E))
            : (E = D[94]),
          D[95] !== h || D[96] !== C || D[97] !== P || D[98] !== E
            ? ((Y = (0, r.jsxs)("div", { className: h, children: [C, P, E] })),
              (D[95] = h),
              (D[96] = C),
              (D[97] = P),
              (D[98] = E),
              (D[99] = Y))
            : (Y = D[99]),
          Y)
    }
    function te(e) {
      return null != e.task_id
    }
    let tt = d.enum(["for-you", "email", "saved", "profile", ...b]).catch("for-you"),
      ta = (0, p._)(async () => (await a.e(398257).then(a.bind(a, "Atcs"))).ShoppingProfilePanel, {
        fallback: (0, r.jsx)("p", {
          role: "status",
          className: "text-sm text-secondary",
          children: (0, r.jsx)(i.A, {
            id: "shopping.profile.loading",
            defaultMessage: "Loading your shopper profile…",
          }),
        }),
        errorFallback: (0, r.jsx)("p", {
          role: "alert",
          className: "text-sm text-secondary",
          children: (0, r.jsx)(i.A, {
            id: "shopping.profile.loadError",
            defaultMessage: "Your shopper profile couldn't be loaded. Please try again",
          }),
        }),
      })
    function tr(e) {
      let t,
        a,
        d,
        p,
        m,
        h,
        y,
        x,
        _,
        v,
        j,
        k,
        w,
        A,
        M,
        S,
        C,
        N,
        T,
        I,
        P,
        E,
        Y,
        D,
        R,
        O,
        G,
        F,
        q,
        L = (0, s.c)(124),
        { accountId: U, userId: $ } = e,
        B = (0, l.A)(),
        [z, H] = (0, c.ok)()
      L[0] !== U || L[1] !== $ ? ((t = { accountId: U, userId: $ }), (L[0] = U), (L[1] = $), (L[2] = t)) : (t = L[2])
      let V = (0, n.uO)(eq, t),
        Q = (0, n.Ul)(V.state$)
      L[3] !== U || L[4] !== $ ? ((a = { accountId: U, userId: $ }), (L[3] = U), (L[4] = $), (L[5] = a)) : (a = L[5])
      let K = (0, n.uO)(eR, a),
        Z = (0, n.Ul)(K.references$)
      L[6] !== z ? ((d = tt.parse(z.get("tab"))), (L[6] = z), (L[7] = d)) : (d = L[7])
      let J = d
      L[8] !== J ? ((p = b.find((e) => e === J)), (L[8] = J), (L[9] = p)) : (p = L[9])
      let X = p
      L[10] !== U || L[11] !== X || L[12] !== $
        ? ((m = { accountId: U, userId: $, category: X }), (L[10] = U), (L[11] = X), (L[12] = $), (L[13] = m))
        : (m = L[13])
      let ee = (0, n.uO)(W, m),
        et = (0, n.Ul)(X ? ee.state$ : null)
      L[14] !== H
        ? ((h = (e) => {
            H((t) => {
              let a = new URLSearchParams(t)
              return ("for-you" === e ? a.delete("tab") : a.set("tab", e), a)
            })
          }),
          (L[14] = H),
          (L[15] = h))
        : (h = L[15])
      let ea = h,
        [er, es] = (0, o.useState)(null),
        [en, el] = (0, o.useState)(!1),
        ec = Q.page,
        ed = er ?? ec?.preference ?? "",
        eu = ec?.gmail_state === "connected"
      L[16] !== eu || L[17] !== ec ? ((y = eu || eo(ec)), (L[16] = eu), (L[17] = ec), (L[18] = y)) : (y = L[18])
      let ep = y,
        ef = Q.loading || Q.loadingMore || Q.refreshingGmail || Q.selectingProfile
      L[19] !== et || L[20] !== ef
        ? ((x = ef || (null != et && Object.values(et).some(ti))), (L[19] = et), (L[20] = ef), (L[21] = x))
        : (x = L[21])
      let eg = x,
        em = "email" !== J && "saved" !== J && "profile" !== J
      L[22] !== eu || L[23] !== ec
        ? ((_ = eu ? (ec.email_offers ?? []) : []), (L[22] = eu), (L[23] = ec), (L[24] = _))
        : (_ = L[24])
      let eh = _
      L[25] !== Z ? ((v = new Set(Z.map(to))), (L[25] = Z), (L[26] = v)) : (v = L[26])
      let ey = v
      L[27] !== K
        ? ((j = (e) => {
            try {
              ;(K.toggle(e), el(!1))
            } catch {
              el(!0)
            }
          }),
          (L[27] = K),
          (L[28] = j))
        : (j = L[28])
      let ex = j
      L[29] !== ep || L[30] !== ee || L[31] !== X || L[32] !== V || L[33] !== ed
        ? ((k = () => {
            ;(ep && V.refresh(ed), X && ee.refresh())
          }),
          (L[29] = ep),
          (L[30] = ee),
          (L[31] = X),
          (L[32] = V),
          (L[33] = ed),
          (L[34] = k))
        : (k = L[34])
      let e_ = k
      L[35] !== ee || L[36] !== V || L[37] !== ef
        ? ((w = () => {
            ;(ef && V.cancel(), ee.cancel())
          }),
          (L[35] = ee),
          (L[36] = V),
          (L[37] = ef),
          (L[38] = w))
        : (w = L[38])
      let ev = w
      ;(L[39] !== V || L[40] !== ed
        ? ((A = () => void (ed.trim() ? V.refresh(ed) : V.loadFirst())), (L[39] = V), (L[40] = ed), (L[41] = A))
        : (A = L[41]),
        L[42] !== V ? ((M = () => void V.checkGmail()), (L[42] = V), (L[43] = M)) : (M = L[43]),
        L[44] !== ea ? ((S = () => ea("email")), (L[44] = ea), (L[45] = S)) : (S = L[45]),
        L[46] !== ev || L[47] !== Q || L[48] !== A || L[49] !== M || L[50] !== S
          ? ((C = (0, r.jsx)(eN, { state: Q, onLoad: A, onCheck: M, onCancel: ev, onOpenEmail: S })),
            (L[46] = ev),
            (L[47] = Q),
            (L[48] = A),
            (L[49] = M),
            (L[50] = S),
            (L[51] = C))
          : (C = L[51]))
      let eb = C
      return (
        L[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)(i.A, { id: "shopping.forYou.title", defaultMessage: "Shopping" })), (L[52] = N))
          : (N = L[52]),
        L[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = [
              { key: "for-you", name: (0, r.jsx)(i.A, { id: "shopping.forYou.tab", defaultMessage: "For you" }) },
              ...b.map(tn),
              {
                key: "email",
                name: (0, r.jsx)(i.A, { id: "shopping.forYou.emailTab", defaultMessage: "Email offers" }),
              },
              { key: "saved", name: (0, r.jsx)(i.A, { id: "shopping.forYou.savedTab", defaultMessage: "Saved" }) },
              {
                key: "profile",
                highlighted: !0,
                name: (0, r.jsx)(i.A, { id: "shopping.profile.tab", defaultMessage: "Profile" }),
              },
            ]),
            (L[53] = T))
          : (T = L[53]),
        L[54] !== ea || L[55] !== J
          ? ((I = (0, r.jsx)(f.uC, {
              inset: !1,
              children: (0, r.jsx)(g.t, { variant: "browse", scrollable: !0, selectedKey: J, onSelect: ea, tabs: T }),
            })),
            (L[54] = ea),
            (L[55] = J),
            (L[56] = I))
          : (I = L[56]),
        L[57] !== em || L[58] !== eg || L[59] !== ep || L[60] !== B || L[61] !== ed || L[62] !== e_
          ? ((P = em
              ? {
                  id: "shopping-for-you-preference",
                  autoFocus: !1,
                  maxLength: 2e3,
                  searchQuery: ed,
                  onSearchQueryChange: es,
                  label: B.formatMessage({
                    id: "shopping.forYou.preferenceLabel",
                    defaultMessage: "Shopping preference",
                  }),
                  placeholder: B.formatMessage({
                    id: "shopping.forYou.preferencePlaceholder",
                    defaultMessage: "What are you shopping for?",
                  }),
                  onKeyDown: (e) => {
                    "Enter" === e.key && !eg && ep && (e.preventDefault(), e_())
                  },
                  trailingControl: (0, r.jsx)(u.$, {
                    color: "primary",
                    disabled: eg || !ep,
                    onClick: e_,
                    children: (0, r.jsx)(i.A, { id: "shopping.forYou.search", defaultMessage: "Search deals" }),
                  }),
                }
              : void 0),
            (L[57] = em),
            (L[58] = eg),
            (L[59] = ep),
            (L[60] = B),
            (L[61] = ed),
            (L[62] = e_),
            (L[63] = P))
          : (P = L[63]),
        L[64] !== V || L[65] !== ec?.preference || L[66] !== er || L[67] !== Q || L[68] !== J
          ? ((E =
              ("for-you" === J || "profile" === J) &&
              (0, r.jsx)(e9, {
                state: Q,
                onLoad: () => void V.loadProfileTasks(),
                onSelect: (e) => void V.selectProfileTask(e, er ?? ec?.preference ?? void 0),
              })),
            (L[64] = V),
            (L[65] = ec?.preference),
            (L[66] = er),
            (L[67] = Q),
            (L[68] = J),
            (L[69] = E))
          : (E = L[69]),
        L[70] !== U || L[71] !== ec || L[72] !== ea || L[73] !== $ || L[74] !== J
          ? ((Y =
              "profile" === J
                ? (0, r.jsx)(
                    ta,
                    { page: ec, onShowForYou: () => ea("for-you") },
                    `${U}:${$}:${ec?.snapshot_id ?? "entry"}`,
                  )
                : null),
            (L[70] = U),
            (L[71] = ec),
            (L[72] = ea),
            (L[73] = $),
            (L[74] = J),
            (L[75] = Y))
          : (Y = L[75]),
        L[76] !== en
          ? ((D = en
              ? (0, r.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-secondary",
                  children: (0, r.jsx)(i.A, {
                    id: "shopping.forYou.saveError",
                    defaultMessage: "Your saved items couldn't be updated on this device",
                  }),
                })
              : null),
            (L[76] = en),
            (L[77] = D))
          : (D = L[77]),
        L[78] !== em ||
        L[79] !== eg ||
        L[80] !== ep ||
        L[81] !== ev ||
        L[82] !== ee ||
        L[83] !== et ||
        L[84] !== X ||
        L[85] !== eb ||
        L[86] !== V ||
        L[87] !== ec ||
        L[88] !== e_ ||
        L[89] !== Q ||
        L[90] !== J
          ? ((R =
              em &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  ep || X
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                          (0, r.jsx)(u.$, {
                            color: "secondary",
                            disabled: eg,
                            onClick: e_,
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.forYou.refresh",
                              defaultMessage: "Refresh deals",
                            }),
                          }),
                          Q.recommendationsUpdated
                            ? (0, r.jsx)(u.$, {
                                color: "secondary",
                                disabled: eg,
                                onClick: e_,
                                children: (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.updated",
                                  defaultMessage: "Show updated deals",
                                }),
                              })
                            : null,
                          eg
                            ? (0, r.jsx)(u.$, {
                                color: "secondary",
                                onClick: ev,
                                children: (0, r.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                              })
                            : null,
                          Q.loading || Q.loadingMore
                            ? (0, r.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.loading",
                                  defaultMessage: "Loading your recommendations…",
                                }),
                              })
                            : null,
                          Q.refreshingGmail
                            ? (0, r.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.email.loading",
                                  defaultMessage: "Finding email offers…",
                                }),
                              })
                            : null,
                          Q.pageError
                            ? (0, r.jsx)("p", {
                                role: "alert",
                                className: "text-sm text-secondary",
                                children: (0, r.jsx)(i.A, {
                                  id: "shopping.forYou.failed",
                                  defaultMessage: "We couldn't load these deals. Please try again",
                                }),
                              })
                            : null,
                          Q.gmailError
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("p", {
                                    role: "alert",
                                    className: "text-sm text-secondary",
                                    children: (0, r.jsx)(i.A, {
                                      id: "shopping.forYou.gmailFailed",
                                      defaultMessage: "Gmail could not be updated. Please try again",
                                    }),
                                  }),
                                  (0, r.jsx)(u.$, {
                                    color: "secondary",
                                    disabled: Q.refreshingGmail,
                                    onClick: () => void V.refreshGmail(),
                                    children: (0, r.jsx)(i.A, {
                                      id: "shopping.forYou.gmailRetry",
                                      defaultMessage: "Retry Gmail",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          Q.cancelled
                            ? (0, r.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, r.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                              })
                            : null,
                        ],
                      })
                    : null,
                  (0, r.jsx)(
                    ei,
                    {
                      state: Q,
                      category: X,
                      connectionCard: eb,
                      onLoadMore: () => void V.loadMore(),
                      categoryDeals: et ? { state: et, onRetry: (e) => void ee.retry(e) } : void 0,
                    },
                    `${J}:${ec?.snapshot_id ?? "entry"}`,
                  ),
                  ep && ec && "for-you" === J && (ec.shopping_profile?.length ?? 0) > 0
                    ? (0, r.jsxs)("details", {
                        className: "text-sm text-secondary",
                        children: [
                          (0, r.jsx)("summary", {
                            className: "cursor-interaction select-none",
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.forYou.profile",
                              defaultMessage: "How we picked these",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.forYou.inferred",
                              defaultMessage:
                                "Inferred from available context. Exploration topics are suggestions, not confirmed interests",
                            }),
                          }),
                          (0, r.jsx)("ul", {
                            className: "list-inside list-disc",
                            children: ec.shopping_profile?.map(ts),
                          }),
                        ],
                      })
                    : null,
                ],
              })),
            (L[78] = em),
            (L[79] = eg),
            (L[80] = ep),
            (L[81] = ev),
            (L[82] = ee),
            (L[83] = et),
            (L[84] = X),
            (L[85] = eb),
            (L[86] = V),
            (L[87] = ec),
            (L[88] = e_),
            (L[89] = Q),
            (L[90] = J),
            (L[91] = R))
          : (R = L[91]),
        L[92] !== eu ||
        L[93] !== eb ||
        L[94] !== V ||
        L[95] !== eh ||
        L[96] !== ec ||
        L[97] !== ey ||
        L[98] !== Q.gmailError ||
        L[99] !== Q.refreshingGmail ||
        L[100] !== Q.selectingProfile ||
        L[101] !== ex ||
        L[102] !== J
          ? ((O =
              "email" === J &&
              (eu
                ? (0, r.jsx)(eV, {
                    offers: eh,
                    unavailable: "unavailable" === ec.email_offers_status,
                    updatedAt: ec.refreshed_at,
                    busy: Q.refreshingGmail || Q.selectingProfile,
                    error: Q.gmailError,
                    savedIds: ey,
                    onToggleSaved: ex,
                    onRefresh: () => void V.refreshGmail(),
                    onStop: V.cancel,
                  })
                : eb)),
            (L[92] = eu),
            (L[93] = eb),
            (L[94] = V),
            (L[95] = eh),
            (L[96] = ec),
            (L[97] = ey),
            (L[98] = Q.gmailError),
            (L[99] = Q.refreshingGmail),
            (L[100] = Q.selectingProfile),
            (L[101] = ex),
            (L[102] = J),
            (L[103] = O))
          : (O = L[103]),
        L[104] !== U ||
        L[105] !== eh ||
        L[106] !== Z ||
        L[107] !== K ||
        L[108] !== ea ||
        L[109] !== ex ||
        L[110] !== $ ||
        L[111] !== J
          ? ((G =
              "saved" === J &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(e3, { accountId: U, userId: $ }),
                  Z.length > 0
                    ? (0, r.jsxs)("section", {
                        className: "flex flex-col gap-4",
                        children: [
                          (0, r.jsx)("h2", {
                            className: "heading-md",
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailTitle",
                              defaultMessage: "Saved email offers",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, r.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailRetention",
                              defaultMessage: "Email offer references are saved on this device for 30 days",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: Z.map((e) => {
                              let t = eh.find((t) => t.id === e.id || t.source_id === e.id)
                              return t
                                ? (0, r.jsx)(eK, { offer: t, saved: !0, onToggleSaved: () => ex(t) }, e.id)
                                : (0, r.jsxs)(
                                    "article",
                                    {
                                      className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
                                      children: [
                                        (0, r.jsx)("p", {
                                          children: (0, r.jsx)(i.A, {
                                            id: "shopping.forYou.savedEmailPlaceholder",
                                            defaultMessage: "Refresh Gmail to view this saved offer",
                                          }),
                                        }),
                                        (0, r.jsx)(u.$, {
                                          color: "secondary",
                                          onClick: () => ea("email"),
                                          children: (0, r.jsx)(i.A, {
                                            id: "shopping.forYou.openEmail",
                                            defaultMessage: "View email offers",
                                          }),
                                        }),
                                        (0, r.jsx)(u.$, {
                                          color: "ghost",
                                          onClick: () => {
                                            try {
                                              ;(K.remove(e.id), el(!1))
                                            } catch {
                                              el(!0)
                                            }
                                          },
                                          children: (0, r.jsx)(i.A, {
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
            (L[104] = U),
            (L[105] = eh),
            (L[106] = Z),
            (L[107] = K),
            (L[108] = ea),
            (L[109] = ex),
            (L[110] = $),
            (L[111] = J),
            (L[112] = G))
          : (G = L[112]),
        L[113] !== E || L[114] !== Y || L[115] !== D || L[116] !== R || L[117] !== O || L[118] !== G
          ? ((F = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-6", children: [E, Y, D, R, O, G] })),
            (L[113] = E),
            (L[114] = Y),
            (L[115] = D),
            (L[116] = R),
            (L[117] = O),
            (L[118] = G),
            (L[119] = F))
          : (F = L[119]),
        L[120] !== I || L[121] !== P || L[122] !== F
          ? ((q = (0, r.jsx)(f.Ql, {
              headerVariant: "compact",
              contentWidth: "wide",
              title: N,
              controls: I,
              search: P,
              children: F,
            })),
            (L[120] = I),
            (L[121] = P),
            (L[122] = F),
            (L[123] = q))
          : (q = L[123]),
        q
      )
    }
    function ts(e, t) {
      return (0, r.jsx)("li", { children: e.topic }, t)
    }
    function tn(e) {
      return { key: e, name: (0, r.jsx)(i.A, { ...ea[e] }) }
    }
    function to(e) {
      return e.id
    }
    function ti(e) {
      return e.loading
    }
  },
  oYYx(e, t, a) {
    var r = a("QosV"),
      s = a("rDUz")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a = (0, r.c)(5),
            n = (0, s.m)(e)
          if (null != e && null != n) {
            if (a[0] !== n || a[1] !== e) {
              let r
              ;(a[3] !== n ? ((r = (e) => "connected" === n[e.hostId]), (a[3] = n), (a[4] = r)) : (r = a[4]),
                (t = e.filter(r)),
                (a[0] = n),
                (a[1] = e),
                (a[2] = t))
            } else t = a[2]
            return t
          }
        },
      },
    )
  },
  rDUz(e, t, a) {
    var r = a("QosV"),
      s = a("KUdL"),
      n = a.n(s),
      o = a("zTeN"),
      i = a("tl5a"),
      l = a("OWtl")
    let c = (0, o.i1)(l.u, (e, { get: t }) => {
      if (null != e) return Object.fromEntries(e.map((e) => [e, t(i.y2, e)]))
    })
    function d(e) {
      let { hostId: t } = e
      return t
    }
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a = (0, r.c)(2)
          return (
            a[0] !== e ? ((t = null == e ? void 0 : n()(e.map(d))), (a[0] = e), (a[1] = t)) : (t = a[1]),
            (0, o._U)(c, t)
          )
        },
      },
    )
  },
  LQko(e, t, a) {
    var r = a("rvFo"),
      s = a("HFSu"),
      n = a("rGp2"),
      o = a("o6hs")
    function i(e, t) {
      return {
        queryKey: ["mcp-settings", "app-connect", "tos", e, t],
        staleTime: r.D.FIVE_MINUTES,
        queryFn: ({ signal: a }) =>
          s.CodexRequest.safeGet("/aip/connectors/{connector_id}/tos", {
            surface: "connector_setup",
            parameters: { path: { connector_id: e } },
            additionalHeaders: { [n.ok]: t },
            signal: a,
          }),
      }
    }
    a.d(
      t,
      {},
      {
        MZ: function (e) {
          return e.some((e) => "app-data-sharing" === e.id)
        },
        bO: function (e, t, a) {
          let r = (0, o.Ye)(t, a)
          ;(e.prefetchQuery((0, n.rJ)(t, { productSku: r?.productSku })),
            e.prefetchQuery(i(t, r?.productSku ?? (0, n.MR)())))
        },
        kp: i,
        zu: function (e, t, a) {
          return {
            queryKey: ["app-connect-mfa-requirement", t, a, e],
            enabled: null != t && null != a,
            staleTime: 0,
            retry: !1,
            refetchOnMount: "always",
            refetchOnWindowFocus: "always",
            queryFn: async ({ signal: r }) => {
              if (null == t || null == a) throw Error("Connection requires an active account")
              return (
                await s.CodexRequest.safeGet("/aip/connectors/{connector_id}/mfa_requirement", {
                  surface: "connector_setup",
                  parameters: { path: { connector_id: e } },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: a },
                  signal: r,
                })
              ).requirement
            },
          }
        },
      },
    )
  },
  lmaZ(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("oyxz"),
      o = a("JNtf"),
      i = a("mUDD"),
      l = a("X3K1")
    function c(e) {
      return (0, r.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-b border-default py-2.5 last:border-none",
          children: [
            (0, r.jsx)(l.X, { className: "w-1/2" }),
            (0, r.jsx)(l.P, { lines: 2, seed: `app-connect-description-${e}`, size: "sm" }),
          ],
        },
        e,
      )
    }
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            a,
            d,
            u,
            p,
            f,
            g,
            m,
            h,
            y,
            x = (0, s.c)(12),
            { embedded: _ } = e,
            v = void 0 !== _ && _ ? "h2" : o.L3
          return (
            x[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(n.A, {
                  id: "beacons.connectApp.loading.title",
                  defaultMessage: "Connect app",
                  description:
                    "Title of the dialog shown to an end user while app connection details requested by the user are loading. Keep this concise; there are no placeholders.",
                })),
                (x[0] = t))
              : (t = x[0]),
            x[1] !== v
              ? ((a = (0, r.jsx)(v, { className: "sr-only", children: t })), (x[1] = v), (x[2] = a))
              : (a = x[2]),
            x[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, r.jsx)("div", {
                  className: "sr-only",
                  role: "status",
                  children: (0, r.jsx)(n.A, {
                    id: "beacons.connectApp.loading.description",
                    defaultMessage: "Loading connection details…",
                    description:
                      "Status message in the app connection dialog shown to an end user while connector details are loading. Keep this concise; there are no placeholders.",
                  }),
                })),
                (x[3] = d))
              : (d = x[3]),
            x[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, r.jsx)("div", {
                  className: "size-14 overflow-hidden rounded-xl",
                  children: (0, r.jsx)(l.X, { size: "fill" }),
                })),
                (x[4] = u))
              : (u = x[4]),
            x[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, r.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, r.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, r.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, r.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                  ],
                })),
                (x[5] = p))
              : (p = x[5]),
            x[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u,
                    p,
                    (0, r.jsx)("div", {
                      className: "size-14 overflow-hidden rounded-xl",
                      children: (0, r.jsx)(l.X, { size: "fill" }),
                    }),
                  ],
                })),
                (x[6] = f))
              : (f = x[6]),
            x[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, r.jsxs)("div", {
                  className: "flex shrink-0 flex-col items-center gap-4",
                  children: [
                    f,
                    (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-2",
                      children: [
                        (0, r.jsx)("div", { className: "h-6 w-1/2", children: (0, r.jsx)(l.X, { size: "fill" }) }),
                        (0, r.jsx)(l.X, { className: "w-1/3", size: "sm" }),
                      ],
                    }),
                  ],
                })),
                (x[7] = g))
              : (g = x[7]),
            x[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, r.jsx)("div", {
                  className: "min-h-0 overflow-hidden rounded-2xl border border-default px-4 py-2",
                  children: [0, 1, 2].map(c),
                })),
                (x[8] = m))
              : (m = x[8]),
            x[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, r.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-6",
                  "aria-hidden": !0,
                  children: [
                    g,
                    m,
                    (0, r.jsx)("div", {
                      className: "mt-auto h-9 shrink-0 overflow-hidden rounded-full",
                      children: (0, r.jsx)(l.X, { size: "fill" }),
                    }),
                  ],
                })),
                (x[9] = h))
              : (h = x[9]),
            x[10] !== a
              ? ((y = (0, r.jsxs)(i.R4, {
                  className: "gap-6 overflow-hidden px-6 pt-8 pb-6 select-none",
                  size: "full",
                  children: [a, d, h],
                })),
                (x[10] = a),
                (x[11] = y))
              : (y = x[11]),
            y
          )
        },
      },
    )
  },
  QSD9(e, t, a) {
    var r = a("SBbD"),
      s = a("CMv2")
    a.d(
      t,
      {},
      {
        B: function (e) {
          return (0, r.S)({
            ...e,
            getAvailableCompanions: (t) => (0, s.Nf)({ ...t, connectors: e.connectors }),
            getCompanionConnectorIds: (t) => (0, s.sR)(t, e.connectors),
          })
        },
      },
    )
  },
  bjbP(e, t, a) {
    var r = a("ASxG")
    let s = r
        .string()
        .trim()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      n = r.object({ tenantId: s, connectionName: r.string().min(1) })
    a.d(
      t,
      {},
      {
        $3: s,
        Ci: function (e) {
          return (
            "OAI" === e.developer_type &&
            ["onenote", "outlook", "power_bi", "sharepoint", "teams"].includes(e.service) &&
            e.supported_auth.some((e) => "OAUTH" === e.type)
          )
        },
        qB: n,
      },
    )
  },
  PraM(e, t, a) {
    var r = a("SBbD"),
      s = a("pxeg")
    a.d(
      t,
      {},
      {
        I: function (e) {
          return (0, r.S)({ ...e, getAvailableCompanions: s.qX, getCompanionConnectorIds: s.HD })
        },
      },
    )
  },
  pxeg(e, t, a) {
    var r = a("BTha"),
      s = a("K0Re")
    let n = "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      o = [
        { connectorId: "connector_4aaab2856305417b993eca9a216aaf6e", kind: "outlook-email" },
        { connectorId: "connector_e6a7394682e24467ac68c60696f275a4", kind: "outlook-calendar" },
        { connectorId: n, kind: "sharepoint" },
        { connectorId: "connector_246af0940da3457da0e751171dc1ce60", kind: "teams" },
      ],
      i = new Map(o.map((e) => [e.connectorId, e]))
    a.d(
      t,
      {},
      {
        HD: function (e) {
          return (0, s.X)(o, e)
        },
        Vk: function ({ connectorId: e, disableExposureLog: t = !1, statsigClient: a, planType: s }) {
          return !!i.has(e) && (0, r.R)(a, "enable-bundled-apps-msft", s, { disableExposureLog: t })
        },
        XI: function (e) {
          return i.get(e)
        },
        oI: n,
        qX: function ({ availableAppIds: e, companionConnectorIds: t, companionConnectors: a, companionLinks: r }) {
          return (0, s.k)({
            availableAppIds: e,
            companionConnectorIds: t,
            companionConnectors: a,
            companionLinks: r,
            connectorById: i,
          })
        },
        zd: o,
      },
    )
  },
  SBbD(e, t, a) {
    var r = a("DBCl"),
      s = a("tl5a"),
      n = a("rGp2"),
      o = a("S7fj"),
      i = a("BQbE"),
      l = a("pDRe"),
      c = a("uc7r"),
      d = a("OiCI"),
      u = a("SPnB"),
      p = a("rvFo")
    a.d(
      t,
      {},
      {
        S: async function ({
          scope: e,
          appId: t,
          browserAccountId: a,
          freshLinkChecks: f = !1,
          getAvailableCompanions: g,
          getCompanionConnectorIds: m,
          hostId: h,
          primaryLink: y,
          productSku: x,
          queryClient: _,
        }) {
          if (null != y) return []
          let v = (0, c.dZ)({
            accountId: a ?? (0, d.RS)(e) ?? e.get(u.chatGptAuthenticatedAccountId$),
            userId: e.get(u.chatGptAuthenticatedUserId$),
            productSku: x,
          })
          if (!v.enabled) return []
          let b = m(t),
            [j, k, w, A] = await Promise.all([
              _.fetchQuery({ ...v, staleTime: f ? 0 : p.D.FIVE_MINUTES }).catch(() => void 0),
              (0, o.N)(h)
                ? _.fetchQuery(
                    (0, l.p)({
                      userId: e.get(u.chatGptAuthenticatedUserId$),
                      accountId: a ?? (0, d.RS)(e) ?? null,
                      productSku: x,
                      appIds: b,
                      enabled: !0,
                    }),
                  )
                    .then(o.k)
                    .catch(() => new Set())
                : _.fetchQuery(
                    (0, i.getAppsReadQueryOptions)({
                      scope: e,
                      appIds: b,
                      browserAccountId: a,
                      hostId: h,
                      queryClient: _,
                      supportsAppRead: (0, r.JFB)(e.get(s.B0, h), "appRead"),
                    }),
                  )
                    .then((e) => new Set(e.map(({ id: e }) => e)))
                    .catch(() => new Set()),
              _.fetchQuery((0, n.rJ)(t, { productSku: x })).catch(() => null),
              Promise.all(b.map((e) => _.fetchQuery((0, n.rJ)(e)).catch(() => null))),
            ])
          return null == j || j.some((e) => e.connector_id === t) || null == w
            ? []
            : g({
                availableAppIds: k,
                companionConnectorIds: b,
                companionConnectors: A,
                companionLinks: b.map((e) => j.find((t) => t.connector_id === e) ?? null),
              })
        },
      },
    )
  },
  yxN2(e, t, a) {
    var r = a("QosV"),
      s = a("irkb"),
      n = a("zTeN"),
      o = a("zd8w"),
      i = a("Wf1j"),
      l = a("HZfM"),
      c = a("rGp2"),
      d = a("o6hs"),
      u = a("JAom"),
      p = a("LQko"),
      f = a("Rvvc"),
      g = a("CMv2"),
      m = a("QSD9"),
      h = a("bjbP"),
      y = a("pxeg"),
      x = a("PraM")
    a("OiCI")
    var _ = a("OAko"),
      v = a("Ot7V"),
      b = a("SGsN"),
      j = a("Rbbe"),
      k = a("OWtl"),
      w = a("kfGJ"),
      A = a("hZax")
    function M(e) {
      ;(0, v.E0)({ disposition: void 0, href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function S() {
      return null
    }
    function C(e) {
      let t = e?.trim()
      t && (0, v.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function N(e) {
      return "apps-tab" === e.kind && null != e.reauthLinkId
    }
    function T(e) {
      return (
        ("apps-tab" === e.kind && null == e.reauthLinkId) ||
        ("plugin-install" === e.kind &&
          null == e.origin &&
          null == e.pendingElicitationReply &&
          e.installOptions?.pendingElicitationReply == null)
      )
    }
    function I(e) {
      return null != e
        ? `${e.pathname}${e.search}${e.hash}`
        : `${window.location.pathname}${window.location.search}${window.location.hash}`
    }
    a.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            a,
            v,
            P,
            E,
            Y,
            D,
            R,
            O,
            G,
            F,
            q,
            L = (0, r.c)(74)
          L[0] !== e ? ((t = void 0 === e ? {} : e), (L[0] = e), (L[1] = t)) : (t = L[1])
          let {
              hostId: U,
              marketplaceAnalytics: $,
              oauthReferrer: B,
              onConnectStarted: z,
              onConnectFailed: H,
              onExternalConnectStarted: V,
            } = t,
            Q = (0, o.useContext)(l.di),
            K = (0, n.gh)(k.u),
            W = (0, i.A)(),
            Z = (0, s.jE)(),
            J = U ?? w.fI,
            X = (0, A.Zj)("2761268526"),
            ee = (0, A.Zj)("3304228433"),
            et = (0, A.AS)()
          L[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (L[2] = a)) : (a = L[2])
          let { data: ea } = (0, _.YL)(void 0, a),
            {
              clearPendingAppConnect: er,
              getPendingAppConnectForApp: es,
              isAppConnectPending: en,
              markAppConnectOAuthPending: eo,
            } = (0, u.ZN)(),
            [ei, el] = (0, o.useState)(null),
            [ec, ed] = (0, o.useState)(),
            [eu, ep] = (0, o.useState)(),
            [ef, eg] = (0, o.useState)(null)
          L[3] !== es || L[4] !== J
            ? ((v = (e, t) => es(e, J, null == t || ("apps-tab" === t.kind && null == t.reauthLinkId) ? T : t)),
              (L[3] = es),
              (L[4] = J),
              (L[5] = v))
            : (v = L[5])
          let em = v
          if (
            L[6] !== er ||
            L[7] !== ei?.id ||
            L[8] !== eu ||
            L[9] !== ea?.plan_type ||
            L[10] !== es ||
            L[11] !== em ||
            L[12] !== J ||
            L[13] !== W ||
            L[14] !== en ||
            L[15] !== X ||
            L[16] !== ee ||
            L[17] !== Q?.location ||
            L[18] !== eo ||
            L[19] !== $ ||
            L[20] !== B ||
            L[21] !== H ||
            L[22] !== z ||
            L[23] !== V ||
            L[24] !== ef ||
            L[25] !== Z ||
            L[26] !== K ||
            L[27] !== et
          ) {
            let e, t, a, r, s
            ;((D = async (e, t) => {
              let {
                  appConnectOptions: a,
                  marketplaceAnalytics: r,
                  addAccountAttempt: s,
                  forceInApp: n,
                  isAddingAccount: o,
                  hasExistingAccount: i,
                  reauthLinkId: l,
                  googleOAuthBundlePrepared: u,
                  microsoftOAuthBundlePrepared: _,
                  mustShowInstallationInterstitial: v,
                } = void 0 === t ? {} : t,
                j = void 0 !== n && n,
                k = void 0 !== o && o,
                w = void 0 !== i && i
              if (null != ef) return
              let A = null == l && (!e.isAccessible || k) ? em(e.id) : null,
                N = (0, d.Ye)(
                  e.id,
                  a ??
                    (null == l
                      ? A?.appConnectOptions
                      : em(e.id, { kind: "apps-tab", reauthLinkId: l })?.appConnectOptions),
                ),
                T = null == B ? N : { connectorId: e.id, ...N, oauthReferrer: N?.oauthReferrer ?? B },
                I = A?.marketplaceAnalytics ?? r ?? ("function" == typeof $ ? $() : $),
                P = z?.(e, I) ?? I
              if (!X && !j && null == A) {
                ;(C((0, c.Cj)(e, T, P?.installAttemptId)), V?.(e))
                return
              }
              ;(0, p.bO)(Z, e.id, T)
              let Y = (0, g.W9)({ planType: ea?.plan_type, connectorId: e.id, statsigClient: et }),
                D = null != (0, g.w8)(e.id, Y),
                R = (0, y.Vk)({ planType: ea?.plan_type, connectorId: e.id, statsigClient: et })
              if (
                !j &&
                !(void 0 !== u && u) &&
                !(void 0 !== _ && _) &&
                null == A &&
                !0 !== e.isAccessible &&
                (D || R)
              ) {
                eg(e.id)
                let t = { scope: K, appId: e.id, browserAccountId: void 0, hostId: J, queryClient: Z }
                await (D ? (0, m.B)({ ...t, connectors: Y }) : (0, x.I)(t))
                  .catch((t) => {
                    throw (H?.(e, P, "request_failed"), t)
                  })
                  .finally(() => {
                    eg(null)
                  })
              }
              if (null != A || (!1 === v && (!j || k) && (!e.isAccessible || k) && (k || (!D && !R)))) {
                eg(e.id)
                let t = await Z.fetchQuery((0, c.rJ)(e.id, { productSku: T?.productSku }))
                  .catch(S)
                  .then(async (t) =>
                    null != t &&
                    "DISABLED_BY_ADMIN" !== t.status &&
                    !(k && w && ee && (0, h.Ci)(t)) &&
                    null == (0, d.GE)(e.id, T) &&
                    (k || !(0, c.B7)(t, T?.authTypeOverride)) &&
                    (0, c.Yo)(t, T?.authTypeOverride) &&
                    "OAUTH" === (0, c.NT)(t, T?.authTypeOverride)
                      ? (0, c.CI)({
                          scope: K,
                          allowBrowserFallback: !1,
                          app: e,
                          appConnectOptions: T,
                          connector: t,
                          installAttemptId: P?.installAttemptId,
                          requestedCompanionConnectorIds: A?.requestedCompanionConnectorIds,
                          onOAuthStarted: (a, r) => {
                            E({
                              app: e,
                              oauthFlowCorrelationId: r?.oauthFlowCorrelationId,
                              marketplaceAnalytics: P,
                              pastedLinkProductExperience: A?.pastedLinkProductExperience,
                              pluginInstallOAuthState:
                                A?.pluginInstallOAuthState ??
                                (A?.resumeTarget.kind === "plugin-install" ? A.oauthState : void 0),
                              previousOAuthState: A?.oauthState,
                              requestedCompanionConnectorIds: A?.requestedCompanionConnectorIds,
                              resumeTarget: A?.resumeTarget ?? { kind: "apps-tab", addAccountAttempt: s },
                              isGithubConnector: e.id === f.qD || t.template_id === f.Bk || "github" === t.service,
                              redirectUrl: a,
                              returnTo: T?.redirectAfter ?? A?.returnTo,
                              appConnectOptions: T,
                            })
                          },
                          openInBrowser: M,
                          queryClient: Z,
                        })
                      : null == t
                        ? null
                        : { kind: "requires-connection-form" },
                  )
                  .finally(() => {
                    eg(null)
                  })
                if (t?.kind === "oauth-started") return void K.get(b.Id).info((0, c.oH)({ intl: W }))
                if (
                  ((null == t || "failed" === t.kind) && H?.(e, P, null == t ? "request_failed" : "connect_failed"),
                  null != A && t?.kind !== "requires-connection-form" && t?.kind !== "requires-mfa")
                )
                  return void K.get(b.Id).danger((0, c.S4)(W), {
                    errorAnalytics: { toastId: "useAppConnectFlow.handleConnectApp" },
                  })
              }
              ;(ep(P), ed(T), el(e))
            }),
              L[35] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = () => {
                    ;(el(null), ed(void 0), ep(void 0))
                  }),
                  (L[35] = e))
                : (e = L[35]),
              (P = e),
              L[36] !== ei?.id || L[37] !== em || L[38] !== J || L[39] !== en || L[40] !== ef
                ? ((t = (e, t) => ef === e || ei?.id === e || en(e, t ?? T, J) || null != em(e, t)),
                  (L[36] = ei?.id),
                  (L[37] = em),
                  (L[38] = J),
                  (L[39] = en),
                  (L[40] = ef),
                  (L[41] = t))
                : (t = L[41]),
              (O = t),
              L[42] !== er || L[43] !== em || L[44] !== J || L[45] !== W || L[46] !== K
                ? ((a = (e, t) => {
                    let a = em(e, t)
                    if (null == a) return
                    let r =
                      a.pluginInstallOAuthState ?? ("plugin-install" === a.resumeTarget.kind ? a.oauthState : void 0)
                    ;(null != r &&
                      ((0, j.$4)(K, r)
                        ? K.get(b.Id).danger((0, c.ue)(W), {
                            errorAnalytics: { toastId: "useAppConnectFlow.handleAppConnected" },
                          })
                        : (0, j.PA)(K, r)),
                      er({ oauthState: a.oauthState, hostId: J }))
                  }),
                  (L[42] = er),
                  (L[43] = em),
                  (L[44] = J),
                  (L[45] = W),
                  (L[46] = K),
                  (L[47] = a))
                : (a = L[47]),
              (Y = a),
              L[48] !== er || L[49] !== em || L[50] !== J || L[51] !== W || L[52] !== V || L[53] !== K
                ? ((r = (e, t) => {
                    let a = em(e.id, t)
                    if (null != a) {
                      let e =
                        a.pluginInstallOAuthState ?? ("plugin-install" === a.resumeTarget.kind ? a.oauthState : void 0)
                      ;(null != e &&
                        (0, j.$4)(K, e) &&
                        K.get(b.Id).danger((0, c.ue)(W), {
                          errorAnalytics: { toastId: "useAppConnectFlow.handleExternalConnectStarted" },
                        }),
                        er({ oauthState: a.oauthState, hostId: J }))
                    }
                    V?.(e)
                  }),
                  (L[48] = er),
                  (L[49] = em),
                  (L[50] = J),
                  (L[51] = W),
                  (L[52] = V),
                  (L[53] = K),
                  (L[54] = r))
                : (r = L[54]),
              (R = r),
              L[55] !== es || L[56] !== J || L[57] !== en
                ? ((s = (e) => en(e, N, J) || null != es(e, J, N)),
                  (L[55] = es),
                  (L[56] = J),
                  (L[57] = en),
                  (L[58] = s))
                : (s = L[58]),
              (G = s),
              (E = (e) => {
                let {
                    app: t,
                    appConnectOptions: a,
                    isGithubConnector: r,
                    marketplaceAnalytics: s,
                    pastedLinkProductExperience: n,
                    pluginInstallOAuthState: o,
                    previousOAuthState: i,
                    oauthFlowCorrelationId: l,
                    requestedCompanionConnectorIds: c,
                    redirectUrl: d,
                    returnTo: u,
                    resumeTarget: p,
                  } = e,
                  f = s ?? eu ?? ("function" == typeof $ ? $() : $),
                  g = null == i && (null == p || "apps-tab" === p.kind) ? em(t.id, p) : null,
                  m = i ?? g?.oauthState,
                  h = g?.resumeTarget ?? p,
                  y = eo({
                    app: t,
                    oauthFlowCorrelationId: l,
                    appConnectOptions: a ?? g?.appConnectOptions,
                    hostId: J,
                    isGithubConnector: r,
                    marketplaceAnalytics: g?.marketplaceAnalytics ?? f,
                    pastedLinkProductExperience: n ?? g?.pastedLinkProductExperience,
                    pluginInstallOAuthState:
                      o ??
                      g?.pluginInstallOAuthState ??
                      (g?.resumeTarget.kind === "plugin-install" ? g.oauthState : void 0),
                    requestedCompanionConnectorIds: c ?? g?.requestedCompanionConnectorIds,
                    redirectUrl: d,
                    returnTo:
                      h?.kind === "apps-tab" && null != h.reauthLinkId && null != h.addAccountAttempt
                        ? (g?.returnTo ?? I(Q?.location))
                        : (u ?? g?.returnTo ?? I(Q?.location)),
                    resumeTarget: h,
                  })
                return (null != y && null != m && m !== y && er({ oauthState: m, hostId: J }), y)
              }),
              (L[6] = er),
              (L[7] = ei?.id),
              (L[8] = eu),
              (L[9] = ea?.plan_type),
              (L[10] = es),
              (L[11] = em),
              (L[12] = J),
              (L[13] = W),
              (L[14] = en),
              (L[15] = X),
              (L[16] = ee),
              (L[17] = Q?.location),
              (L[18] = eo),
              (L[19] = $),
              (L[20] = B),
              (L[21] = H),
              (L[22] = z),
              (L[23] = V),
              (L[24] = ef),
              (L[25] = Z),
              (L[26] = K),
              (L[27] = et),
              (L[28] = P),
              (L[29] = E),
              (L[30] = Y),
              (L[31] = D),
              (L[32] = R),
              (L[33] = O),
              (L[34] = G))
          } else ((P = L[28]), (E = L[29]), (Y = L[30]), (D = L[31]), (R = L[32]), (O = L[33]), (G = L[34]))
          return (
            L[59] !== er || L[60] !== J
              ? ((F = (e) => {
                  er({ ...e, hostId: J })
                }),
                (L[59] = er),
                (L[60] = J),
                (L[61] = F))
              : (F = L[61]),
            L[62] !== P ||
            L[63] !== ei ||
            L[64] !== eu ||
            L[65] !== ec ||
            L[66] !== E ||
            L[67] !== Y ||
            L[68] !== D ||
            L[69] !== R ||
            L[70] !== O ||
            L[71] !== G ||
            L[72] !== F
              ? ((q = {
                  connectingApp: ei,
                  connectingOptions: ec,
                  connectingMarketplaceAnalytics: eu,
                  clearConnectingApp: P,
                  clearPendingAppConnect: F,
                  handleAppConnected: Y,
                  handleAppConnectOAuthStarted: E,
                  handleConnectApp: D,
                  handleExternalConnectStarted: R,
                  handleOpenAppUrl: C,
                  isAppConnectPending: O,
                  isAppReauthPending: G,
                }),
                (L[62] = P),
                (L[63] = ei),
                (L[64] = eu),
                (L[65] = ec),
                (L[66] = E),
                (L[67] = Y),
                (L[68] = D),
                (L[69] = R),
                (L[70] = O),
                (L[71] = G),
                (L[72] = F),
                (L[73] = q))
              : (q = L[73]),
            q
          )
        },
      },
    )
  },
  JIuM(e, t, a) {
    var r = a("QosV"),
      s = a("zHp1"),
      n = a("HFSu")
    let o = ["/backend-api/estuary/content", "/backend-api/estuary/public_content/enc"],
      i = {
        cacheKey: ["profile-picture"],
        resolveAsset: (e) => Promise.resolve({ kind: "available", downloadUrl: e, requestHeaders: { ...(0, n.Jc)() } }),
      }
    function l(e, t) {
      let a,
        n,
        o = (0, r.c)(7),
        { allowExternalUrls: l } = void 0 === t ? {} : t
      o[0] !== e ? ((a = c(e) ? e : ""), (o[0] = e), (o[1] = a)) : (a = o[1])
      let d = a,
        { dataUrl: u, isError: p, src: f } = (0, s.vM)(d, i)
      if (d) {
        let e,
          t = u ?? f
        return (
          o[2] !== p || o[3] !== t ? ((e = { isError: p, src: t }), (o[2] = p), (o[3] = t), (o[4] = e)) : (e = o[4]),
          e
        )
      }
      let g = void 0 === l || l ? (e ?? null) : null
      return (o[5] !== g ? ((n = { isError: !1, src: g }), (o[5] = g), (o[6] = n)) : (n = o[6]), n)
    }
    function c(e) {
      if (!e) return !1
      try {
        let t = new URL(e),
          a = t.host.toLowerCase(),
          r = "chatgpt.com" === a || (a.endsWith(".chatgpt.com") && !a.startsWith("ab."))
        return "https:" === t.protocol && r && o.some((e) => t.pathname === e || t.pathname.startsWith(`${e}/`))
      } catch {
        return !1
      }
    }
    a.d(
      t,
      {},
      {
        Dv: function (e, t) {
          return l(e, t).src
        },
        _w: l,
        gj: async function (e, t) {
          return c(t) ? (0, s.il)(e, t, i) : null
        },
      },
    )
  },
  EY6e(e, t, a) {
    var r = a("S2r0"),
      s = a("suf3"),
      n = a("DBCl"),
      o = a("SPnB"),
      i = a("hrUs"),
      l = a("smHt"),
      c = a("vldH"),
      d = a("OOaz")
    let u = ["chatgpt-file-preview"]
    a.d(
      t,
      {},
      {
        f: async function ({
          scope: e,
          conversationId: t,
          downloadIntent: a = !1,
          gizmoId: p,
          sharedConversationId: f,
          postId: g,
          requestSource: m,
          signal: h,
          maxBytes: y,
          versionNumber: x,
          modifiedAt: _,
          readBlob: v,
          target: b,
        }) {
          let j = (e, r) =>
            v?.(e, y) ??
            (0, c.fetchChatGptFileBlob)({
              conversationId: t,
              downloadIntent: a,
              gizmoId: p,
              effectiveGizmoId: r,
              sharedConversationId: f,
              postId: g,
              requestSource: m,
              signal: e,
              maxBytes: y,
              target: b,
            })
          h?.throwIfAborted()
          let k = e.get(o.chatGptAuthenticatedAccountId$),
            w = e.get(o.o8)
          if (
            null == k ||
            null == w ||
            a ||
            null != f ||
            null != g ||
            "mounted-library" === b.type ||
            "page-file" === b.type ||
            null == b.fileId ||
            null != (0, i.Um)(b.fileId)
          )
            return j(h)
          let A = (t = h) => {
              if ((t?.throwIfAborted(), e.get(o.chatGptAuthenticatedAccountId$) !== k || e.get(o.o8) !== w))
                throw new DOMException("File preview identity changed", "AbortError")
            },
            M = (e) =>
              (0, c.lb)({
                conversationId: null == t || (0, d.YA)(t) ? void 0 : t,
                fileId: b.fileId,
                gizmoId: p,
                libraryFileId: b.libraryFileId,
                signal: e,
              }),
            S = x || _,
            C = "file-id" === b.type && null != b.libraryFileId && (0, n.PKK)(b.libraryFileId) ? b.libraryFileId : null,
            N = null != C && null != S ? [...u, k, w, "library", C, S] : null
          if (null != N) {
            let t = e.queryClient
                .getQueryCache()
                .findAll({ queryKey: N })
                .find(
                  (e) => null != e.state.data && !e.state.isInvalidated && Date.now() - e.state.dataUpdatedAt < 3e5,
                ),
              a = null == t ? void 0 : e.queryClient.getQueryData(t.queryKey)
            if (null != a) {
              if ((A(), null != y && a.blob.size > y)) throw new l.m5(a.blob.size)
              return a.blob
            }
          }
          let T = null == N ? [...u, k, w, t, p, b, x, y] : [...N, y],
            I = e.queryClient.getQueryState(T),
            P = I?.data
          if (
            null != I &&
            null != P &&
            null == N &&
            !P.requireFreshAccess &&
            !I.isInvalidated &&
            Date.now() - I.dataUpdatedAt < 3e4
          )
            return (
              e.queryClient
                .fetchQuery({
                  queryKey: ["chatgpt-file-preview-context", ...T.slice(1)],
                  queryFn: ({ signal: e }) => M(e),
                  staleTime: 0,
                  gcTime: 0,
                  retry: !1,
                })
                .then((t) => {
                  let a = e.queryClient.getQueryState(T)
                  a?.fetchStatus === "idle" &&
                    a.data === P &&
                    a.dataUpdatedAt === I.dataUpdatedAt &&
                    (t.requireFreshAccess || t.gizmoId !== P.gizmoId) &&
                    e.queryClient.removeQueries({ queryKey: T, exact: !0 })
                })
                .catch(() => void 0),
              A(),
              P.blob
            )
          let E = (0, r.j)({
              queryKey: T,
              queryFn: async ({ signal: e }) => {
                let t = null == v ? await M(e) : { gizmoId: p ?? void 0, requireFreshAccess: !0 }
                A(e)
                let a = await j(e, t.gizmoId ?? null)
                return (A(e), { ...t, blob: a })
              },
              staleTime: 3e4 * (null == N),
              gcTime: null == N ? 3e4 : 3e5,
              retry: !1,
            }),
            Y = new s.$(e.queryClient, { ...E, enabled: !1 }).subscribe(() => {}),
            D = (0, n.udX)(),
            R = () => D.reject(h?.reason)
          h?.addEventListener("abort", R, { once: !0 })
          try {
            let t = await Promise.race([e.queryClient.fetchQuery(E), D.promise])
            return (
              t.requireFreshAccess && null == N && e.queryClient.removeQueries({ queryKey: T, exact: !0 }),
              (function (e) {
                let t = 0,
                  a = e.queryClient.getQueryCache()
                for (let r of a
                  .findAll({ queryKey: u })
                  .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)) {
                  let s = e.queryClient.getQueryData(r.queryKey)
                  null != s && (t + s.blob.size > n.jQ ? a.remove(r) : (t += s.blob.size))
                }
              })(e),
              A(),
              t.blob
            )
          } finally {
            ;(h?.removeEventListener("abort", R), Y())
          }
        },
      },
    )
  },
  rWfF(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("zTeN"),
      o = a("zd8w"),
      i = a("OWtl"),
      l = a("Zr0J"),
      c = a("TUMj"),
      d = a("VBQw")
    a.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            a,
            u,
            p,
            f,
            g,
            m,
            h,
            y,
            x,
            _,
            v,
            b,
            j,
            k,
            w,
            A,
            M,
            S = (0, s.c)(46)
          S[0] !== e
            ? (({
                product: m,
                reference: y,
                imageAnalytics: a,
                hasFallbackImage: t,
                loadTimeoutMs: u,
                onLoad: g,
                onError: f,
                src: x,
                alt: _,
                loading: p,
                ...h
              } = e),
              (S[0] = e),
              (S[1] = t),
              (S[2] = a),
              (S[3] = u),
              (S[4] = p),
              (S[5] = f),
              (S[6] = g),
              (S[7] = m),
              (S[8] = h),
              (S[9] = y),
              (S[10] = x),
              (S[11] = _))
            : ((t = S[1]),
              (a = S[2]),
              (u = S[3]),
              (p = S[4]),
              (f = S[5]),
              (g = S[6]),
              (m = S[7]),
              (h = S[8]),
              (y = S[9]),
              (x = S[10]),
              (_ = S[11]))
          let C = void 0 === _ ? "" : _,
            N = (0, n.gh)(i.u),
            T = (0, c.Rn)(),
            I = (0, o.useRef)(null),
            P = (0, o.useRef)(null),
            E = (0, o.useRef)(void 0),
            Y = (0, o.useRef)(void 0)
          S[12] !== a || S[13] !== m || S[14] !== y || S[15] !== N || S[16] !== x || S[17] !== T
            ? ((v = () => ({
                ...a,
                isShoppingResearch:
                  y?.type === "product" && "block" !== a.surface ? (0, l.Cw)(N, T, y) : a.isShoppingResearch,
                product: m,
                productId: m.id ?? "",
                imageUrl: x,
                isVirtualTryOnImage: m.shopping_vto?.generated_images?.some((e) => e.vto_image_url === x),
              })),
              (S[12] = a),
              (S[13] = m),
              (S[14] = y),
              (S[15] = N),
              (S[16] = x),
              (S[17] = T),
              (S[18] = v))
            : (v = S[18])
          let D = v
          S[19] !== D || S[20] !== N
            ? ((b = () => (0, d.QN)(N, D())), (S[19] = D), (S[20] = N), (S[21] = b))
            : (b = S[21])
          let R = (0, o.useEffectEvent)(b)
          return (
            S[22] !== u || S[23] !== p || S[24] !== R
              ? ((j = () => {
                  if (null == u || P.current === I.current) return
                  let e = !1,
                    t = () => {
                      e || P.current === I.current || ((e = !0), (E.current = setTimeout(() => R(), u)))
                    }
                  return (
                    "lazy" === p && null != I.current && "u" > typeof IntersectionObserver
                      ? ((Y.current = new IntersectionObserver((e) => {
                          let [a] = e
                          a.isIntersecting && (Y.current?.disconnect(), t())
                        })),
                        Y.current.observe(I.current))
                      : t(),
                    () => {
                      ;(clearTimeout(E.current), Y.current?.disconnect())
                    }
                  )
                }),
                (S[22] = u),
                (S[23] = p),
                (S[24] = R),
                (S[25] = j))
              : (j = S[25]),
            S[26] !== u || S[27] !== p || S[28] !== x
              ? ((k = [x, u, p]), (S[26] = u), (S[27] = p), (S[28] = x), (S[29] = k))
              : (k = S[29]),
            (0, o.useEffect)(j, k),
            S[30] !== D || S[31] !== g || S[32] !== N
              ? ((w = (e) => {
                  ;((P.current = e.currentTarget),
                    clearTimeout(E.current),
                    Y.current?.disconnect(),
                    (0, d.kE)(N, D()),
                    g?.(e))
                }),
                (S[30] = D),
                (S[31] = g),
                (S[32] = N),
                (S[33] = w))
              : (w = S[33]),
            S[34] !== D || S[35] !== t || S[36] !== f || S[37] !== N
              ? ((A = (e) => {
                  ;((P.current = e.currentTarget), clearTimeout(E.current), Y.current?.disconnect())
                  let a = (function (e) {
                    try {
                      if ("u" < typeof performance || "function" != typeof performance.getEntriesByName) return
                      for (let t of performance.getEntriesByName(e.currentSrc || e.src, "resource").toReversed())
                        if ("resource" === t.entryType && "responseStatus" in t && "number" == typeof t.responseStatus)
                          return t.responseStatus
                    } catch {}
                  })(e.currentTarget)
                  ;(t
                    ? (0, d.kE)(N, { ...D(), imageFetchResponseStatus: a })
                    : (0, d.ZA)(N, D(), e, { imageFetchResponseStatus: a }),
                    f?.(e))
                }),
                (S[34] = D),
                (S[35] = t),
                (S[36] = f),
                (S[37] = N),
                (S[38] = A))
              : (A = S[38]),
            S[39] !== C || S[40] !== p || S[41] !== h || S[42] !== x || S[43] !== w || S[44] !== A
              ? ((M = (0, r.jsx)("img", { ref: I, ...h, alt: C, src: x, loading: p, onLoad: w, onError: A }, x)),
                (S[39] = C),
                (S[40] = p),
                (S[41] = h),
                (S[42] = x),
                (S[43] = w),
                (S[44] = A),
                (S[45] = M))
              : (M = S[45]),
            M
          )
        },
      },
    )
  },
  VBQw(e, t, a) {
    var r = a("ASxG"),
      s = a("PFjh"),
      n = a("OMIV")
    let o = "product_image.render_opportunity",
      i = new WeakMap()
    function l(e) {
      let t = i.get(e.node)
      return (null == t && ((t = { attempts: new Set(), failures: new Set() }), i.set(e.node, t)), t)
    }
    function c({ product: e, productId: t, citationType: a, surface: r }) {
      return JSON.stringify([t || (e.product_lookup_key?.data ? e.product_lookup_key : e.url || e.title), a, r])
    }
    function d(
      e,
      {
        product: t,
        productId: a,
        imageUrl: s,
        citationType: o,
        surface: i,
        isShoppingResearch: l,
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
        })(s),
        f = "images.openai.com" === p,
        g = f
          ? (function (e) {
              if (!e) return ""
              try {
                let { pathname: t } = new URL(e),
                  a = t.split("/").filter(Boolean),
                  r = []
                for (let e of a) {
                  if (e.length > 16 || r.length >= 2) break
                  r.push(e)
                }
                if (0 === r.length) return ""
                return r.join("/") + (r.length > 1 ? "/" : "")
              } catch {
                return ""
              }
            })(s)
          : "",
        m = e.get(n.M9)?.getContext().user,
        h = m?.country,
        y = (function () {
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
          let a = u(t.rtt)
          void 0 !== a && (e.client_rtt_ms = a)
          let r = u(t.downlink)
          return (
            void 0 !== r && (e.client_downlink_mbps = r),
            "boolean" == typeof t.saveData && (e.client_save_data = t.saveData),
            e
          )
        })(),
        x = (function (e) {
          let t = { image_resource_timing_available: !1 }
          if (!e || "u" < typeof performance || "function" != typeof performance.getEntriesByName) return t
          try {
            var a
            let r = (function (e) {
              let t = performance.getEntriesByName(e, "resource")
              for (let e = t.length - 1; e >= 0; e -= 1) {
                var a
                let r = t[e]
                if (((a = r), "resource" === a.entryType)) return r
              }
            })(e)
            if (!r) return t
            t.image_resource_timing_available = !0
            let s = u(r.responseStatus)
            void 0 !== s &&
              ((t.image_resource_response_status = s),
              (a = s),
              (t.image_resource_status_bucket =
                0 === a ? "no_http_response" : a >= 100 && a < 600 ? `${Math.floor(a / 100)}xx` : "unknown"))
            let n = u(r.duration)
            void 0 !== n && (t.image_resource_duration_ms = n)
            let o = u(r.responseStart)
            void 0 !== o && (t.image_resource_response_start_ms = o)
            let i = u(r.responseEnd)
            void 0 !== i && (t.image_resource_response_end_ms = i)
            let l = u(r.transferSize)
            void 0 !== l && (t.image_resource_transfer_size_bytes = l)
            let c = u(r.encodedBodySize)
            void 0 !== c && (t.image_resource_encoded_body_size_bytes = c)
            let d = u(r.decodedBodySize)
            ;(void 0 !== d && (t.image_resource_decoded_body_size_bytes = d),
              r.nextHopProtocol && (t.image_resource_next_hop_protocol = r.nextHopProtocol))
          } catch {}
          return t
        })(s)
      return {
        product_id: a,
        citation_type: o,
        surface: i,
        image_url: c || ("" !== s && !/^https?:\/\//i.test(s)) ? void 0 : s,
        tags: c ? ["vto_image"] : void 0,
        image_url_hostname: p,
        from_oai_images: f,
        is_authenticated: m?.custom?.auth_status == null ? void 0 : "logged_in" === m.custom.auth_status,
        ...y,
        ...x,
        oai_img_path_prefix: g || void 0,
        has_showcase_metadata: !!t.showcase_metadata,
        provider: r.array(r.string()).safeParse(t.providers).data?.[0] ?? t.provider,
        user_country: h,
        is_shopping_research: l,
      }
    }
    function u(e) {
      return "number" == typeof e && Number.isFinite(e) ? e : void 0
    }
    function p(e) {
      return void 0 === e ? "unknown" : e ? "true" : "false"
    }
    function f(e, t, a, r) {
      var n, o
      let i
      e.get(s.T$).count("shopping", t, {
        citation_type: a.citation_type,
        surface: a.surface,
        reason: r,
        product_provider: a.provider ?? "unknown",
        has_showcase_metadata: p(a.has_showcase_metadata),
        from_oai_images: p(a.from_oai_images),
        image_origin: (n = a).image_url
          ? n.from_oai_images
            ? "oai_images"
            : n.image_url_hostname
              ? "external"
              : "invalid_url"
          : "missing_url",
        oai_img_path_prefix:
          ((o = a.oai_img_path_prefix), (i = o?.split("/").filter(Boolean).join("_")) && i.length > 0 ? i : "none"),
        image_resource_timing_available: p(a.image_resource_timing_available),
        image_resource_response_status: a.image_resource_response_status?.toString() ?? "unknown",
        image_resource_status_bucket: a.image_resource_status_bucket ?? "unknown",
        client_online: p(a.client_online),
        client_effective_connection_type: a.client_effective_connection_type ?? "unknown",
        client_save_data: p(a.client_save_data),
        user_country: a.user_country ?? "unknown",
        is_authenticated: p(a.is_authenticated),
        is_shopping_research: p(a.is_shopping_research),
      })
    }
    function g(e, t) {
      let { reason: a } = t,
        r = c(t)
      if (l(e).failures.has(r)) return
      l(e).failures.add(r)
      let s = d(e, t)
      ;(y("shopping.product_image.not_rendered", {
        ...s,
        reason: a,
        ...("load_error" === a
          ? { error_stack_trace: t.isVirtualTryOnImage ? "Virtual try-on image failed to load" : t.errorStackTrace }
          : {}),
      }),
        f(e, "product_image.not_rendered", s, a),
        "missing_url" === a && f(e, o, s, a))
    }
    function m(e, t) {
      let { imageFetchResponseStatus: a } = t,
        r = c(t)
      if (l(e).attempts.has(r)) return
      l(e).attempts.add(r)
      let s = d(e, t)
      ;(y("shopping.product_image.load_attempt", { ...s, image_fetch_response_status: a }), f(e, o, s, "load_attempt"))
    }
    function h(e) {
      return e.length > 2e3 ? e.slice(0, 2e3) + "…" : e
    }
    function y(e, t) {
      let a = {}
      for (let [e, r] of Object.entries(t)) void 0 !== r && (a[e] = r)
    }
    a.d(
      t,
      {},
      {
        QN: function (e, t) {
          ;(m(e, t), g(e, { ...t, reason: "load_timeout" }))
        },
        ZA: function (e, t, a, r) {
          ;(m(e, { ...t, imageFetchResponseStatus: r?.imageFetchResponseStatus }),
            g(e, {
              ...t,
              reason: "load_error",
              errorStackTrace: (function e(t) {
                let a
                if (t instanceof Error) {
                  let e = t.name || "Error",
                    a = t.message.trim(),
                    r = a ? `${e}: ${a}` : e
                  return h(t.stack?.trim() || r)
                }
                return "string" == typeof t && t
                  ? h(t)
                  : ((a = Error("Product image load error")),
                    "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, e),
                    h(a.stack?.trim() || a.message))
              })(a),
            }))
        },
        b2: g,
        kE: m,
      },
    )
  },
  DC2G(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("oyMi"),
      o = a("WPM3"),
      i = a("HOLv")
    a.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            a,
            l = (0, s.c)(5),
            { alt: c, compact: d } = e,
            u = void 0 !== d && d ? n.v : o.U
          return (
            l[0] !== u ? ((t = (0, r.jsx)(i.I, { asset: u })), (l[0] = u), (l[1] = t)) : (t = l[1]),
            l[2] !== c || l[3] !== t
              ? ((a = (0, r.jsx)("div", {
                  "data-theme": "light",
                  className: "absolute inset-0 flex items-center justify-center text-tertiary",
                  role: "img",
                  "aria-label": c,
                  children: t,
                })),
                (l[2] = c),
                (l[3] = t),
                (l[4] = a))
              : (a = l[4]),
            a
          )
        },
      },
    )
  },
  DixB(e, t, a) {
    a.d(
      t,
      {},
      {
        S: function (e, t) {
          let a = e.id?.trim(),
            r = e.title.trim()
          return a && r && null != e.url && null != e.query && null != e.provider
            ? {
                saved_target: {
                  identity: { namespace: "product", key: a },
                  sidebar_params: {
                    name: r,
                    category: "product_rationale_and_reviews",
                    multi_message_mode: !0,
                    extra_params: {
                      product_lookup_key: e.product_lookup_key ?? void 0,
                      rewritten_queries: t?.length ? t : void 0,
                      saved_product_shell: { id: a, url: e.url, query: e.query, provider: e.provider },
                    },
                  },
                },
                display_data: { name: r, image_url: e.image_urls?.[0] ?? null },
              }
            : null
        },
      },
    )
  },
  IxWh(e, t, a) {
    var r = a("Vzyk"),
      s = a.n(r)
    function n(e, t = "ltr") {
      let a = Math.max(0, e.scrollWidth - e.clientWidth)
      if ("rtl" === t) return { maximum: 0, minimum: -a }
      let r = e.firstElementChild,
        s = Math.min(a, r instanceof HTMLElement ? Math.max(0, o(e, r, t)) : 0)
      return { maximum: a, minimum: s }
    }
    function o(e, t, a) {
      return "rtl" === a
        ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, a)
        : t.offsetLeft - e.offsetLeft - i(e, a)
    }
    function i(e, t) {
      let a = Number.parseFloat(
        "rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft,
      )
      return Number.isNaN(a) ? 0 : a
    }
    a.d(
      t,
      {},
      {
        b: n,
        z: function (e, t, a = "ltr") {
          let { maximum: r, minimum: l } = n(e, a),
            c = "rtl" === a ? -t : t,
            d = s()(e.scrollLeft + c * (e.clientWidth - i(e, a)), l, r),
            u = e.children
          for (let n = 1 === t ? 0 : u.length - 1; n >= 0 && n < u.length; n += t) {
            let t = u.item(n)
            if (!(t instanceof HTMLElement)) continue
            let i = s()(o(e, t, a), l, r)
            if ((1 === c && i >= d - 1) || (-1 === c && i <= d + 1)) return i
          }
          return 1 === c ? r : l
        },
      },
    )
  },
  tWaO(e, t, a) {
    a.d(
      t,
      {},
      {
        w: function (e, t, a = "calendar") {
          let r = new Date(e),
            s = Math.max(1, Math.floor((t.getTime() - r.getTime()) / 6e4))
          if (s < 60) return { unit: "minute", value: s }
          let n = Math.floor(s / 60)
          if (n < 24) return { unit: "hour", value: n }
          let o = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            i = new Date(r.getFullYear(), r.getMonth(), r.getDate()),
            l = "elapsed" === a ? Math.floor(n / 24) : Math.max(1, Math.round((o.getTime() - i.getTime()) / 864e5))
          return l < 7
            ? { unit: "day", value: l }
            : l < 30
              ? { unit: "week", value: Math.floor(l / 7) }
              : l < 365
                ? { unit: "month", value: Math.floor(l / 30) }
                : { unit: "year", value: Math.floor(l / 365) }
        },
      },
    )
  },
  xs0e(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("Wf1j"),
      o = a("oyxz"),
      i = a("tWaO"),
      l = a("KIKs")
    function c(e) {
      let t,
        a = (0, s.c)(5),
        { dateString: r, now: o, dayBasis: l } = e,
        c = (0, n.A)()
      if (a[0] !== r || a[1] !== l || a[2] !== c || a[3] !== o) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let { unit: e, value: a } = (0, i.w)(r, o, l)
          switch (e) {
            case "minute":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMinutesAgo",
                  defaultMessage: "{value}m",
                  description: "Compact minutes-ago format",
                },
                { value: a },
              )
              break e
            case "hour":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactHoursAgo",
                  defaultMessage: "{value}h",
                  description: "Compact hours-ago format",
                },
                { value: a },
              )
              break e
            case "day":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactDaysAgo",
                  defaultMessage: "{value}d",
                  description: "Compact days-ago format",
                },
                { value: a },
              )
              break e
            case "week":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactWeeksAgo",
                  defaultMessage: "{value}w",
                  description: "Compact weeks-ago format",
                },
                { value: a },
              )
              break e
            case "month":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMonthsAgo",
                  defaultMessage: "{value}mo",
                  description: "Compact months-ago format",
                },
                { value: a },
              )
              break e
            case "year":
              t = c.formatMessage(
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
        ;((a[0] = r), (a[1] = l), (a[2] = c), (a[3] = o), (a[4] = t))
      } else t = a[4]
      if (t !== Symbol.for("react.early_return_sentinel")) return t
    }
    function d(e) {
      let t,
        a,
        r = (0, s.c)(17),
        { dateString: o, now: i } = e,
        l = (0, n.A)()
      if (r[0] !== o || r[1] !== i) {
        let e = new Date(o)
        ;((t = Math.floor((i.getTime() - e.getTime()) / 6e4)), (r[0] = o), (r[1] = i), (r[2] = t))
      } else t = r[2]
      let c = -t
      if (c <= 0) {
        let e
        return (
          r[3] !== l
            ? ((e = l.formatRelativeTime(0, "second", { numeric: "auto" })), (r[3] = l), (r[4] = e))
            : (e = r[4]),
          e
        )
      }
      if (c < 60) {
        let e
        return (
          r[5] !== l || r[6] !== c
            ? ((e = l.formatRelativeTime(c, "minute", { numeric: "always" })), (r[5] = l), (r[6] = c), (r[7] = e))
            : (e = r[7]),
          e
        )
      }
      let d = Math.ceil(c / 60)
      if (d < 24) {
        let e
        return (
          r[8] !== l || r[9] !== d
            ? ((e = l.formatRelativeTime(d, "hour", { numeric: "always" })), (r[8] = l), (r[9] = d), (r[10] = e))
            : (e = r[10]),
          e
        )
      }
      let u = Math.ceil(d / 24)
      if (u < 7) {
        let e
        return (
          r[11] !== l || r[12] !== u
            ? ((e = l.formatRelativeTime(u, "day", { numeric: "always" })), (r[11] = l), (r[12] = u), (r[13] = e))
            : (e = r[13]),
          e
        )
      }
      return (
        r[14] !== l || r[15] !== u
          ? ((a = l.formatRelativeTime(Math.ceil(u / 7), "week", { numeric: "always" })),
            (r[14] = l),
            (r[15] = u),
            (r[16] = a))
          : (a = r[16]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a = (0, s.c)(10),
            { dateString: d, format: u, dayBasis: p } = e,
            f = void 0 === p ? "calendar" : p,
            g = (0, n.A)(),
            m = (0, l.wv)()
          if (m.getTime() - new Date(d).getTime() < 6e4) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(o.A, {
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
            if (a[1] !== d || a[2] !== f || a[3] !== g || a[4] !== m) {
              let { unit: t, value: r } = (0, i.w)(d, m, f)
              ;((e = g.formatRelativeTime(-r, t, { numeric: "always", style: "narrow" })),
                (a[1] = d),
                (a[2] = f),
                (a[3] = g),
                (a[4] = m),
                (a[5] = e))
            } else e = a[5]
            return e
          }
          return (
            a[6] !== d || a[7] !== f || a[8] !== m
              ? ((t = (0, r.jsx)(c, { dateString: d, now: m, dayBasis: f })),
                (a[6] = d),
                (a[7] = f),
                (a[8] = m),
                (a[9] = t))
              : (t = a[9]),
            t
          )
        },
        SA: function (e) {
          let t,
            a = (0, s.c)(3),
            { dateString: n } = e,
            o = (0, l.wv)()
          return (
            a[0] !== n || a[1] !== o
              ? ((t = (0, r.jsx)(d, { dateString: n, now: o })), (a[0] = n), (a[1] = o), (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  zkPp(e, t, a) {
    a.d(t, { fy: () => d, eb: () => l, Pn: () => c })
    var r = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      o = a("HZfM"),
      i = a("DVfE")
    function l(e) {
      let t,
        a,
        o,
        i,
        l,
        c = (0, s.c)(10)
      c[0] !== e
        ? (({ className: t, density: a, ...o } = e), (c[0] = e), (c[1] = t), (c[2] = a), (c[3] = o))
        : ((t = c[1]), (a = c[2]), (o = c[3]))
      let d = "preview" === a && "previewGroup-UWHyK1"
      return (
        c[4] !== t || c[5] !== d
          ? ((i = (0, n.A)("group-Zlx1HD", d, t)), (c[4] = t), (c[5] = d), (c[6] = i))
          : (i = c[6]),
        c[7] !== o || c[8] !== i
          ? ((l = (0, r.jsx)("div", { ...o, className: i })), (c[7] = o), (c[8] = i), (c[9] = l))
          : (l = c[9]),
        l
      )
    }
    function c(e) {
      let t,
        a,
        o,
        i,
        l = (0, s.c)(8)
      return (
        l[0] !== e ? (({ className: t, ...a } = e), (l[0] = e), (l[1] = t), (l[2] = a)) : ((t = l[1]), (a = l[2])),
        l[3] !== t ? ((o = (0, n.A)("groupItem-WKdBwf", t)), (l[3] = t), (l[4] = o)) : (o = l[4]),
        l[5] !== a || l[6] !== o
          ? ((i = (0, r.jsx)("div", { ...a, className: o })), (l[5] = a), (l[6] = o), (l[7] = i))
          : (i = l[7]),
        i
      )
    }
    function d(e) {
      let t,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        g,
        m,
        h,
        y,
        x,
        _,
        v,
        b,
        j,
        k,
        w,
        A,
        M,
        S,
        C,
        N,
        T,
        I,
        P,
        E,
        Y,
        D,
        R,
        O,
        G,
        F,
        q,
        L,
        U = (0, s.c)(91)
      U[0] !== e
        ? (({
            ariaCurrent: t,
            ariaDescribedBy: a,
            ariaLabel: l,
            buttonProps: f,
            children: c,
            className: d,
            compactSecondLine: k,
            density: w,
            hasInteractiveContent: A,
            icon: u,
            isDisabled: M,
            isSelected: p,
            onSelect: m,
            onContextMenu: g,
            rightText: h,
            rightTextPosition: S,
            role: y,
            secondaryTitle: b,
            secondLine: _,
            secondLineRightText: v,
            showDivider: j,
            surface: C,
            tone: N,
            title: I,
            titleAdornment: P,
            titleWrap: T,
            to: E,
            ...x
          } = e),
          (U[0] = e),
          (U[1] = t),
          (U[2] = a),
          (U[3] = l),
          (U[4] = c),
          (U[5] = d),
          (U[6] = u),
          (U[7] = p),
          (U[8] = f),
          (U[9] = g),
          (U[10] = m),
          (U[11] = h),
          (U[12] = y),
          (U[13] = x),
          (U[14] = _),
          (U[15] = v),
          (U[16] = b),
          (U[17] = j),
          (U[18] = k),
          (U[19] = w),
          (U[20] = A),
          (U[21] = M),
          (U[22] = S),
          (U[23] = C),
          (U[24] = N),
          (U[25] = T),
          (U[26] = I),
          (U[27] = P),
          (U[28] = E))
        : ((t = U[1]),
          (a = U[2]),
          (l = U[3]),
          (c = U[4]),
          (d = U[5]),
          (u = U[6]),
          (p = U[7]),
          (f = U[8]),
          (g = U[9]),
          (m = U[10]),
          (h = U[11]),
          (y = U[12]),
          (x = U[13]),
          (_ = U[14]),
          (v = U[15]),
          (b = U[16]),
          (j = U[17]),
          (k = U[18]),
          (w = U[19]),
          (A = U[20]),
          (M = U[21]),
          (S = U[22]),
          (C = U[23]),
          (N = U[24]),
          (T = U[25]),
          (I = U[26]),
          (P = U[27]),
          (E = U[28]))
      let $ = void 0 !== k && k,
        B = void 0 === w ? "default" : w,
        z = void 0 !== A && A,
        H = void 0 !== M && M,
        V = void 0 === S ? "top" : S,
        Q = void 0 === C ? "plain" : C,
        K = void 0 === N ? "default" : N,
        W = void 0 !== T && T,
        Z = "default" !== B,
        J = j ?? "plain" === Q
      U[29] !== m ? ((Y = { onSelect: m }), (U[29] = m), (U[30] = Y)) : (Y = U[30])
      let X = (0, i.D)(Y),
        ee = null != h && "center" === V
      U[31] !== c ||
      U[32] !== $ ||
      U[33] !== B ||
      U[34] !== ee ||
      U[35] !== u ||
      U[36] !== Z ||
      U[37] !== h ||
      U[38] !== _ ||
      U[39] !== v ||
      U[40] !== b ||
      U[41] !== I ||
      U[42] !== P ||
      U[43] !== W ||
      U[44] !== K
        ? ((D =
            c ??
            (0, r.jsxs)("div", {
              className: (0, n.A)("relative flex min-w-0 gap-2", Z && !W ? "items-center" : "items-start"),
              children: [
                u &&
                  (0, r.jsx)("span", {
                    className: (0, n.A)("flex min-w-4 shrink-0 items-center justify-center", Z ? "min-h-5" : "min-h-6"),
                    children: u,
                  }),
                (0, r.jsxs)("div", {
                  className: (0, n.A)("flex min-w-0 flex-1 flex-col", $ ? "gap-0" : Z ? "gap-0.5" : "gap-1"),
                  children: [
                    (0, r.jsxs)("div", {
                      className: (0, n.A)(
                        "flex min-w-0 gap-3",
                        Z && !W && ("row" === B || !_) && "items-center",
                        (W || ("compact" === B && !!_)) && "items-start",
                        !Z && !W && "items-baseline",
                      ),
                      children: [
                        (0, r.jsxs)("div", {
                          className: (0, n.A)(
                            "flex min-w-0 flex-1 items-baseline gap-2",
                            Z && W ? "text-sm leading-5" : "text-base leading-6",
                          ),
                          children: [
                            (0, r.jsx)("span", {
                              className: (0, n.A)(
                                "min-w-0",
                                W ? "wrap-anywhere" : "truncate",
                                "default" === K && "text-default",
                              ),
                              children: I,
                            }),
                            null != b
                              ? (0, r.jsx)("span", {
                                  className: "max-w-48 shrink-0 truncate text-codex-description",
                                  children: b,
                                })
                              : null,
                            null != P
                              ? (0, r.jsx)("span", { className: "flex min-w-0 shrink self-center", children: P })
                              : null,
                          ],
                        }),
                        null == h || ee
                          ? null
                          : (0, r.jsx)("div", {
                              className: (0, n.A)(
                                "flex shrink-0 items-center text-codex-description",
                                Z ? "min-h-5 text-xs" : "min-h-6 text-base",
                              ),
                              children: h,
                            }),
                      ],
                    }),
                    _ &&
                      (0, r.jsxs)("div", {
                        className: (0, n.A)(
                          "flex min-w-0 items-center justify-between text-codex-description",
                          Z ? "gap-2 text-xs" : "gap-3 text-sm",
                          Z || $ ? "leading-4" : "leading-[22px]",
                        ),
                        children: [
                          (0, r.jsx)("div", { className: "min-w-0 flex-1", children: _ }),
                          v &&
                            (0, r.jsx)("div", {
                              className: (0, n.A)("flex shrink-0 items-center", Z ? "min-h-4" : "min-h-[22px]"),
                              children: v,
                            }),
                        ],
                      }),
                  ],
                }),
                ee
                  ? (0, r.jsx)("div", {
                      className: "flex min-h-6 shrink-0 items-center self-center text-base text-codex-description",
                      children: h,
                    })
                  : null,
              ],
            })),
          (U[31] = c),
          (U[32] = $),
          (U[33] = B),
          (U[34] = ee),
          (U[35] = u),
          (U[36] = Z),
          (U[37] = h),
          (U[38] = _),
          (U[39] = v),
          (U[40] = b),
          (U[41] = I),
          (U[42] = P),
          (U[43] = W),
          (U[44] = K),
          (U[45] = D))
        : (D = U[45])
      let et = D
      if (
        U[46] !== t ||
        U[47] !== a ||
        U[48] !== l ||
        U[49] !== d ||
        U[50] !== et ||
        U[51] !== B ||
        U[52] !== J ||
        U[53] !== z ||
        U[54] !== Z ||
        U[55] !== H ||
        U[56] !== p ||
        U[57] !== f ||
        U[58] !== g ||
        U[59] !== m ||
        U[60] !== y ||
        U[61] !== x ||
        U[62] !== Q ||
        U[63] !== E ||
        U[64] !== K
      ) {
        O = Symbol.for("react.early_return_sentinel")
        e: if (
          ((R = (0, n.A)(
            "group w-full text-start text-base outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
            "row-_z4Vo0",
            "row" === B && "tableRow-GphDVD",
            "profile" === B && "profile-nyFLvQ",
            J && "divider-nxTXf9",
            p && "selected-uOOibA",
            H && "disabled-tU2D9v",
            "muted" === K && (p ? "text-default" : "text-secondary"),
            "muted" === K && !H && "hover:text-default focus-within:text-default",
            "profile" === B && "min-h-18 border-b border-transparent py-4",
            "row" === B && "px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y",
            "profile" !== B && "row" !== B && ["min-h-10 px-3", Z ? "py-2.5" : "py-3"],
            "raised" === Q && "rounded-2xl",
            "plain" === Q && (Z ? "rounded-xl" : "rounded-lg"),
            "raised" === Q && "border border-subtle shadow-card",
            "raised" === Q && !H && !p && "hover:border-strong",
            "raised" === Q && !p && "bg-surface-elevated/60",
            H ? "cursor-default opacity-50" : "cursor-interaction",
            "embedded" !== Q && !H && p && "bg-primary-soft-active",
            ("plain" === Q || "flush" === Q) && !H && !p && "hover:bg-secondary-ghost-hover",
            d,
          )),
          (z || null != E) && "row" !== y)
        ) {
          let e,
            s = {
              className: (0, n.A)(
                "absolute inset-0 cursor-interaction outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-default",
                "raised" === Q && "rounded-2xl",
                "plain" === Q && "rounded-lg",
                "embedded" === Q && "rounded-xl focus-visible:ring-inset",
              ),
              "aria-current": t,
              "aria-label": l,
              "aria-describedby": a,
            }
          ;(U[67] !== et
            ? ((e = (0, r.jsx)("div", { className: "pointer-events-none relative", children: et })),
              (U[67] = et),
              (U[68] = e))
            : (e = U[68]),
            (O = (0, r.jsxs)("div", {
              ...x,
              className: (0, n.A)("relative", R),
              onContextMenu: g,
              children: [
                null == E || H
                  ? (0, r.jsx)("button", {
                      ...s,
                      type: "button",
                      disabled: H,
                      onClick: m,
                      ...f,
                      className: (0, n.A)(s.className, f?.className),
                    })
                  : (0, r.jsx)(o.N_, { ...s, to: E }),
                e,
              ],
            })))
          break e
        }
        ;((U[46] = t),
          (U[47] = a),
          (U[48] = l),
          (U[49] = d),
          (U[50] = et),
          (U[51] = B),
          (U[52] = J),
          (U[53] = z),
          (U[54] = Z),
          (U[55] = H),
          (U[56] = p),
          (U[57] = f),
          (U[58] = g),
          (U[59] = m),
          (U[60] = y),
          (U[61] = x),
          (U[62] = Q),
          (U[63] = E),
          (U[64] = K),
          (U[65] = R),
          (U[66] = O))
      } else ((R = U[65]), (O = U[66]))
      if (O !== Symbol.for("react.early_return_sentinel")) return O
      let ea = a ?? x["aria-describedby"],
        er = l ?? x["aria-label"]
      U[69] !== X || U[70] !== H ? ((G = H ? {} : X), (U[69] = X), (U[70] = H), (U[71] = G)) : (G = U[71])
      let es = y ?? "button",
        en = "row" === y ? p : void 0
      return (
        U[72] !== X || U[73] !== H || U[74] !== x
          ? ((F = (e) => {
              ;(H || X.onClick?.(e), x.onClick?.(e))
            }),
            (q = (e) => {
              ;(H || X.onKeyDown?.(e), x.onKeyDown?.(e))
            }),
            (U[72] = X),
            (U[73] = H),
            (U[74] = x),
            (U[75] = F),
            (U[76] = q))
          : ((F = U[75]), (q = U[76])),
        U[77] !== t ||
        U[78] !== et ||
        U[79] !== H ||
        U[80] !== g ||
        U[81] !== x ||
        U[82] !== R ||
        U[83] !== ea ||
        U[84] !== er ||
        U[85] !== G ||
        U[86] !== es ||
        U[87] !== en ||
        U[88] !== F ||
        U[89] !== q
          ? ((L = (0, r.jsx)("div", {
              ...x,
              "aria-current": t,
              "aria-describedby": ea,
              "aria-label": er,
              "aria-disabled": H,
              className: R,
              onContextMenu: g,
              ...G,
              role: es,
              "aria-selected": en,
              onClick: F,
              onKeyDown: q,
              children: et,
            })),
            (U[77] = t),
            (U[78] = et),
            (U[79] = H),
            (U[80] = g),
            (U[81] = x),
            (U[82] = R),
            (U[83] = ea),
            (U[84] = er),
            (U[85] = G),
            (U[86] = es),
            (U[87] = en),
            (U[88] = F),
            (U[89] = q),
            (U[90] = L))
          : (L = U[90]),
        L
      )
    }
  },
  r21w(e, t, a) {
    a.d(t, { a: () => o })
    var r = a("ABep"),
      s = a("QosV"),
      n = a("on57")
    function o(e) {
      let t,
        a,
        o,
        i,
        l = (0, s.c)(8)
      return (
        l[0] !== e ? (({ className: t, ...a } = e), (l[0] = e), (l[1] = t), (l[2] = a)) : ((t = l[1]), (a = l[2])),
        l[3] !== t ? ((o = (0, n.A)("Placeholder-M5Cmfu", t)), (l[3] = t), (l[4] = o)) : (o = l[4]),
        l[5] !== a || l[6] !== o
          ? ((i = (0, r.jsx)("div", { className: o, ...a })), (l[5] = a), (l[6] = o), (l[7] = i))
          : (i = l[7]),
        i
      )
    }
  },
  FFnF(e, t, a) {
    a.d(t, { K: () => m })
    var r = a("EA6X"),
      s = a("MVHH")
    ;(a("E8Sp"), a("SPnB"))
    var n = a("OOaz"),
      o = a("TJEh"),
      i = a("zRlR"),
      l = a("SGsN"),
      c = a("svjy"),
      d = a("yGJW")
    a("kfGJ")
    var u = a("OMIV"),
      p = a("rKAs"),
      f = a("ASxG")
    let g = f.object({
      id: f.string(),
      url: f.string(),
      query: f.string(),
      provider: f.string(),
      image_urls: f
        .array(f.string().min(1))
        .optional()
        .catch(void 0),
    })
    async function m(e, t, a, m) {
      let { sidebar_params: h, identity: y } = t.saved_target,
        x = "generic_entity"
      ;((0, o.PN)(h.category)
        ? (x = "local_business")
        : "product" === h.category || "product_rationale_and_reviews" === h.category
          ? (x = "product")
          : "image" === h.category && (x = "image"),
        (0, d.yy)(e, r.HR, {
          actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
          surfaceLocation: r.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_LIBRARY,
          entityAffordance: r.YY.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_LIBRARY_ITEM,
          entityId: y?.key,
          entityCategory: x,
          contentReferenceType: "entity",
        }),
        (0, d.yy)(e, s.aF, {
          eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_LIBRARY_ITEM_CLICKED",
          entityKind: x,
          surface: "grid" === a ? "library_grid" : "library_list",
        }))
      let _ = e.get(c.g)
      if (!e.get(u.M9)?.getDynamicConfig("2347841422").get("enabled_entity_categories", []).includes(h.category))
        return void e
          .get(l.Id)
          .danger(
            _.formatMessage({
              id: "library.savedEntity.unsupportedCategory",
              defaultMessage: "We do not support saving this entity category yet",
              description: "Error when a saved Library item has an entity category that cannot be opened",
            }),
            { errorAnalytics: { toastId: "library.savedEntity.unsupportedCategory" } },
          )
      let v = (0, n.co)()
      ;("product_rationale_and_reviews" === h.category &&
        (function (e) {
          let t = e.saved_target.sidebar_params.extra_params,
            a = g.safeParse(t?.saved_product_shell)
          if (!a.success) return
          let r = a.data.image_urls
          r?.length || (r = e.display_data.image_url ? [e.display_data.image_url] : void 0)
          let [s] = (0, p.b$)({
            type: "product",
            product: {
              ...a.data,
              title: e.display_data.name,
              image_urls: r,
              product_lookup_key: t?.product_lookup_key,
            },
          })
          if (null == s) return
          let n = t?.rewritten_queries,
            o = Array.isArray(n) ? n.filter((e) => "string" == typeof e && e.length > 0) : void 0
          ;((function (e) {
            if ((e?.version !== "0" && e?.version !== "1") || !e.data) return
            try {
              let t = f.record(f.string(), f.unknown()).safeParse(JSON.parse(e.data))
              if (!t.success) return e
              ;({
                ...e,
                data: JSON.stringify({
                  ...t.data,
                  known_ids: t.data.all_ids ?? t.data.known_ids,
                  metadata_sources: null,
                  included_image_hashes: [],
                  variant_sources:
                    null != e.variant_options_query && Object.keys(e.variant_options_query).length > 0
                      ? t.data.variant_sources
                      : null,
                }),
              })
            } catch {
              return e
            }
          })(s.product_lookup_key),
            o?.length)
        })(t),
        await (0, i.openChatGptEntitySidePanel)(e, {
          libraryOrigin: t.origin,
          savedEntityTarget: t.saved_target,
          category: h.category,
          extraParams: h.extra_params,
          locale: _.locale,
          messageId: "client-created-root",
          query: h.name,
          shouldBlockExternalEgress: !1,
          sourceConversationId: v,
          businessPreview: (0, o.PN)(h.category)
            ? { name: t.display_data.name, image_url: t.display_data.image_url }
            : void 0,
        }))
    }
  },
  RcOP(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("zTeN"),
      o = a("HZfM"),
      i = a("FtQW"),
      l = a("jU86"),
      c = a("wHLp")
    a.d(
      t,
      {},
      {
        ProductFavoriteAction: function (e) {
          let t,
            a,
            d,
            u,
            p,
            f = (0, s.c)(17),
            { className: g, accountId: m, userId: h, conversationId: y, messageId: x, request: _, surface: v } = e,
            b = (0, o.Zp)()
          ;(f[0] !== m || f[1] !== h
            ? ((t = { accountId: m, userId: h }), (f[0] = m), (f[1] = h), (f[2] = t))
            : (t = f[2]),
            f[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = { product_card: "product-card", image_tile: "media-overlay", product_sidebar: "entity-header" }),
                (f[3] = a))
              : (a = f[3]))
          let j = a[v]
          return (
            f[4] !== b
              ? ((d = (e) => {
                  b((0, c.h)(null == e ? "/library?tab=favorites" : `/library/d/${encodeURIComponent(e)}`, "banner"))
                }),
                (f[4] = b),
                (f[5] = d))
              : (d = f[5]),
            f[6] !== g || f[7] !== y || f[8] !== x || f[9] !== _ || f[10] !== v || f[11] !== j || f[12] !== d
              ? ((u = (0, r.jsx)(i.g, {
                  className: g,
                  appearance: j,
                  conversationId: y,
                  messageId: x,
                  request: _,
                  surface: v,
                  onOpenLibrary: d,
                })),
                (f[6] = g),
                (f[7] = y),
                (f[8] = x),
                (f[9] = _),
                (f[10] = v),
                (f[11] = j),
                (f[12] = d),
                (f[13] = u))
              : (u = f[13]),
            f[14] !== t || f[15] !== u
              ? ((p = (0, r.jsx)(n.Ui, { scope: l.oD, value: t, children: u })), (f[14] = t), (f[15] = u), (f[16] = p))
              : (p = f[16]),
            p
          )
        },
      },
    )
  },
  AOG7(e, t, a) {
    var r = a("QosV"),
      s = a("T0Rc"),
      n = a("EOo5"),
      o = a("rvFo"),
      i = a("HFSu"),
      l = a("GEsy"),
      c = a("eShZ")
    async function d(e, t, a, { includeProfilePhotos: r = !1, includeTotal: s, limit: n = 10 } = {}) {
      return (
        await i.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: n, offset: 0, query: t, include_profile_photos: r, include_total: s },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, a) {
          let r = t.trim().toLowerCase(),
            s = await d(e, r, a)
          return s.find((e) => e.email?.trim().toLowerCase() === r)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            c,
            d,
            u,
            p,
            f,
            g = (0, r.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeMemberCounts: m } = a,
            h = void 0 !== m && m,
            { accountId: y, authMethod: x } = (0, n.As)()
          g[2] !== e ? ((c = e.trim()), (g[2] = e), (g[3] = c)) : (c = g[3])
          let _ = c,
            v = (0, l.o)(_, 150)
          ;(g[4] !== h ? ((d = h ? ["member-counts"] : []), (g[4] = h), (g[5] = d)) : (d = g[5]),
            g[6] !== y || g[7] !== _ || g[8] !== d
              ? ((u = ["workspace-groups", y, _, ...d]), (g[6] = y), (g[7] = _), (g[8] = d), (g[9] = u))
              : (u = g[9]))
          let b = ("chatgpt" === x || "chatgptAuthTokens" === x) && null != y && _.length > 0 && _ === v
          return (
            g[10] !== y || g[11] !== h || g[12] !== _
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == y) throw Error("account id is required")
                  return (
                    await i.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: y },
                        query: { limit: 10, offset: 0, query: _, include_member_counts: h, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (g[10] = y),
                (g[11] = h),
                (g[12] = _),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== b || g[16] !== p
              ? ((f = {
                  queryKey: u,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = b),
                (g[16] = p),
                (g[17] = f))
              : (f = g[17]),
            (0, s.I)(f)
          )
        },
        Nv: function (e, t) {
          let a,
            i,
            c,
            u,
            p,
            f,
            g = (0, r.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeProfilePhotos: m } = a,
            h = void 0 !== m && m,
            { accountId: y, authMethod: x } = (0, n.As)()
          g[2] !== e ? ((i = e.trim()), (g[2] = e), (g[3] = i)) : (i = g[3])
          let _ = i,
            v = (0, l.o)(_, 150)
          ;(g[4] !== h ? ((c = h ? ["profile-photos"] : []), (g[4] = h), (g[5] = c)) : (c = g[5]),
            g[6] !== y || g[7] !== _ || g[8] !== c
              ? ((u = ["workspace-users", y, _, ...c]), (g[6] = y), (g[7] = _), (g[8] = c), (g[9] = u))
              : (u = g[9]))
          let b = ("chatgpt" === x || "chatgptAuthTokens" === x) && null != y && _.length > 0 && _ === v
          return (
            g[10] !== y || g[11] !== h || g[12] !== _
              ? ((p = (e) => {
                  let { signal: t } = e
                  if (null == y) throw Error("account id is required")
                  return d(y, _, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: h })
                }),
                (g[10] = y),
                (g[11] = h),
                (g[12] = _),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== b || g[16] !== p
              ? ((f = {
                  queryKey: u,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: o.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = b),
                (g[16] = p),
                (g[17] = f))
              : (f = g[17]),
            (0, s.I)(f)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await i.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.fk && 404 === e.status)) throw e
          }
          return d(e, t, a)
        },
      },
    )
  },
  ecE5(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("zd8w"),
      o = a("oyxz"),
      i = a("lmaZ"),
      l = a("cZk2")
    let c = (0, a("Bbed")._)(
      async () => (await Promise.all([a.e(405765), a.e(781429)]).then(a.bind(a, "eiVC"))).AppConnectModal,
      { suspendToParent: !0, errorFallback: (e) => (0, r.jsx)(d, { ...e, failed: !0 }) },
    )
    function d(e) {
      let t,
        a,
        c,
        d,
        u,
        p,
        f = (0, s.c)(18),
        { app: g, connectorId: m, onOpenChange: h, onUserDismissed: y, onPreloadFailed: x, failed: _, embedded: v } = e,
        b = void 0 !== _ && _,
        j = (0, n.useRef)(!1),
        k = null != g || null != m
      return (
        f[0] !== b || f[1] !== x || f[2] !== k
          ? ((t = () => {
              k && b && null != x && !j.current && ((j.current = !0), x())
            }),
            (a = [b, x, k]),
            (f[0] = b),
            (f[1] = x),
            (f[2] = k),
            (f[3] = t),
            (f[4] = a))
          : ((t = f[3]), (a = f[4])),
        (0, n.useEffect)(t, a),
        f[5] !== h || f[6] !== y
          ? ((c = (e) => {
              ;(e || y?.(), h(e))
            }),
            (f[5] = h),
            (f[6] = y),
            (f[7] = c))
          : (c = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(o.A, {
              id: "appConnectModal.loadError",
              defaultMessage: "Couldn’t open app connection",
              description: "Title when downloading the app connection dialog fails after retrying",
            })),
            (f[8] = d))
          : (d = f[8]),
        f[9] !== v || f[10] !== b
          ? ((u = b ? null : (0, r.jsx)(i.$, { embedded: v })), (f[9] = v), (f[10] = b), (f[11] = u))
          : (u = f[11]),
        f[12] !== v || f[13] !== b || f[14] !== k || f[15] !== c || f[16] !== u
          ? ((p = (0, r.jsx)(l.k, {
              open: k,
              size: "setup",
              onOpenChange: c,
              failed: b,
              embedded: v,
              title: d,
              children: u,
            })),
            (f[12] = v),
            (f[13] = b),
            (f[14] = k),
            (f[15] = c),
            (f[16] = u),
            (f[17] = p))
          : (p = f[17]),
        p
      )
    }
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a = (0, s.c)(3),
            o = null != e.app || null != e.connectorId,
            [i, l] = (0, n.useState)(o)
          return (
            o && !i && l(!0),
            a[0] !== i || a[1] !== e
              ? ((t = i
                  ? (0, r.jsx)(n.Suspense, {
                      fallback: !1 === e.showLoadingDialog ? null : (0, r.jsx)(d, { ...e }),
                      children: (0, r.jsx)(c, { ...e }),
                    })
                  : null),
                (a[0] = i),
                (a[1] = e),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
        s: function () {
          return c.prefetch()
        },
      },
    )
  },
  fnPc(e, t, a) {
    var r = a("QosV"),
      s = a("zTeN"),
      n = a("HZfM"),
      o = a("oYYx"),
      i = a("eFn4"),
      l = a("kx7U"),
      c = a("OWtl"),
      d = a("kfGJ"),
      u = a("fHlE")
    let p = (0, s.vP)(c.u, d.fI)
    function f(e, t) {
      e.set(p, t)
    }
    a.d(
      t,
      {},
      {
        D: function () {
          let e,
            t,
            a,
            g,
            m = (0, r.c)(20),
            h = (0, s.gh)(c.u),
            y = (0, n.Zp)(),
            [x, _] = (0, n.ok)(),
            v = null != (0, n.RQ)("/settings/*"),
            b = (0, n.RQ)("/settings/plugins-settings/hosts/:hostId/plugins/:pluginId"),
            j = (0, s.Ul)(i.Xr),
            k = (0, s.Ul)(l.u8),
            w = (0, o.g)(k),
            A = (0, s.Ul)(p)
          m[0] !== b?.params.hostId || m[1] !== v || m[2] !== x || m[3] !== A
            ? ((e = b?.params.hostId || (v ? x.get("hostId")?.trim() : null) || A),
              (m[0] = b?.params.hostId),
              (m[1] = v),
              (m[2] = x),
              (m[3] = A),
              (m[4] = e))
            : (e = m[4])
          let M = e,
            S = j ? w : void 0
          return (
            m[5] !== j || m[6] !== w || m[7] !== M
              ? ((t = j ? (0, u.B)(M, w) : d.fI), (m[5] = j), (m[6] = w), (m[7] = M), (m[8] = t))
              : (t = m[8]),
            m[9] !== b || m[10] !== v || m[11] !== y || m[12] !== h || m[13] !== x || m[14] !== _
              ? ((a = (e) => {
                  ;(f(h, e), null != b)
                    ? y(
                        {
                          pathname: "/settings/plugins-settings",
                          search: new URLSearchParams({ hostId: e }).toString(),
                        },
                        { replace: !0 },
                      )
                    : v && x.has("hostId") && _((t) => (t.set("hostId", e), t), { replace: !0 })
                }),
                (m[9] = b),
                (m[10] = v),
                (m[11] = y),
                (m[12] = h),
                (m[13] = x),
                (m[14] = _),
                (m[15] = a))
              : (a = m[15]),
            m[16] !== S || m[17] !== t || m[18] !== a
              ? ((g = { connectedRemoteConnections: S, selectedHostId: t, setSelectedHostId: a }),
                (m[16] = S),
                (m[17] = t),
                (m[18] = a),
                (m[19] = g))
              : (g = m[19]),
            g
          )
        },
        a: f,
      },
    )
  },
  fHlE(e, t, a) {
    var r = a("kfGJ")
    a.d(
      t,
      {},
      {
        B: function (e, t) {
          return null == t || e === r.fI || t.some((t) => t.hostId === e) ? e : r.fI
        },
        j: function (e, t) {
          return e.filter((e) =>
            t === r.fI ? "local" === e.projectKind : "remote" === e.projectKind && e.hostId === t,
          )
        },
      },
    )
  },
  VSSi(e, t, a) {
    var r = a("zTeN"),
      s = a("OWtl"),
      n = a("OMIV")
    let o = (0, r.SZ)(
      s.u,
      ({ get: e }) => e(n.M9)?.getContext().user.customIDs?.workspace_id,
      ({ get: e, set: t }) => {
        let a = e(n.M9)
        if (null == a) return
        let r = () => {
          t(a.getContext().user.customIDs?.workspace_id)
        }
        return (a.on("values_updated", r), () => a.off("values_updated", r))
      },
    )
    a.d(t, {}, { Q: o })
  },
  dHX4(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("zd8w"),
      o = a("v7qY"),
      i = a("giDA")
    let l = (0, n.createContext)([]),
      c = (0, n.createContext)(null)
    function d(e) {
      let { id: t, container: a, children: r } = e
      return (0, o.createPortal)(r, a, t)
    }
    a.d(
      t,
      {},
      {
        Dc: function () {
          let e,
            t,
            a = (0, s.c)(4),
            o = (0, n.useContext)(l)
          return (
            a[0] !== o ? ((e = o.map(d)), (a[0] = o), (a[1] = e)) : (e = a[1]),
            a[2] !== e ? ((t = (0, r.jsx)(r.Fragment, { children: e })), (a[2] = e), (a[3] = t)) : (t = a[3]),
            t
          )
        },
        MO: function (e) {
          let t,
            a = (0, s.c)(5),
            { children: o } = e,
            l = (0, n.useContext)(c),
            d = (0, n.useContext)(i.J),
            u = (0, n.useId)()
          return (
            a[0] !== o || a[1] !== u || a[2] !== d || a[3] !== l
              ? ((t =
                  null == l
                    ? (0, r.jsx)(r.Fragment, { children: o })
                    : (0, r.jsx)("div", {
                        className: "contents",
                        ref: (e) => {
                          if (null != e)
                            return (
                              l((t) => [
                                ...t,
                                { id: u, container: e, children: (0, r.jsx)(i.J, { value: d, children: o }) },
                              ]),
                              () => l((e) => e.filter((e) => e.id !== u))
                            )
                        },
                      })),
                (a[0] = o),
                (a[1] = u),
                (a[2] = d),
                (a[3] = l),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
        gq: function (e) {
          let t,
            a,
            o = (0, s.c)(4),
            { children: i } = e
          o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (o[0] = t)) : (t = o[0])
          let [d, u] = (0, n.useState)(t)
          return (
            o[1] !== i || o[2] !== d
              ? ((a = (0, r.jsx)(c, { value: u, children: (0, r.jsx)(l, { value: d, children: i }) })),
                (o[1] = i),
                (o[2] = d),
                (o[3] = a))
              : (a = o[3]),
            a
          )
        },
      },
    )
  },
  WYtE(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "clock-light-24",
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
      body: '<path d="M12 6.25C12.4142 6.25003 12.75 6.58581 12.75 7V11.793C12.75 12.1244 12.6182 12.4424 12.3838 12.6768L10.0303 15.0303C9.88383 15.1767 9.69193 15.2499 9.50001 15.2499C9.08581 15.2499 8.75006 14.9142 8.75006 14.5C8.75006 14.3081 8.82328 14.1162 8.96973 13.9697L11.25 11.6895V7C11.25 6.58579 11.5858 6.25 12 6.25Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill="currentColor"/>',
    })
    a.d(t, {}, { p: r })
  },
  oyMi(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "photo-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
        visualBounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
        center: { x: 12, y: 12 },
        insets: { top: 3.25, right: 2.25, bottom: 3.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0625 6.65039C16.7469 6.65039 18.1122 8.01582 18.1123 9.7002C18.112 11.3844 16.7468 12.75 15.0625 12.75C13.3783 12.7499 12.013 11.3844 12.0127 9.7002C12.0128 8.01588 13.3782 6.6505 15.0625 6.65039ZM15.0625 8.15039C14.2066 8.1505 13.5128 8.84431 13.5127 9.7002C13.513 10.5559 14.2067 11.2499 15.0625 11.25C15.9184 11.25 16.612 10.556 16.6123 9.7002C16.6122 8.84424 15.9185 8.15039 15.0625 8.15039Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2002 3.25C20.1607 3.25011 21.7499 4.83935 21.75 6.7998V17.2002C21.7499 19.1607 20.1607 20.7499 18.2002 20.75H5.7998C3.83935 20.7499 2.25011 19.1607 2.25 17.2002V6.7998C2.25011 4.83935 3.83935 3.25011 5.7998 3.25H18.2002ZM3.75 14.1553L5.11328 12.792C5.74788 12.1574 6.57975 11.8401 7.41162 11.8401C8.24349 11.8401 9.07536 12.1574 9.70996 12.792L16.168 19.25H18.2002C19.3322 19.2499 20.2499 18.3322 20.25 17.2002V6.7998C20.2499 5.66778 19.3322 4.75011 18.2002 4.75H5.7998C4.66778 4.75011 3.75011 5.66778 3.75 6.7998V14.1553ZM7.41162 13.34C6.96358 13.34 6.51554 13.5108 6.17383 13.8525L3.81445 16.2119L3.75 16.1475V17.2002C3.75011 18.3322 4.66778 19.2499 5.7998 19.25H14.0459L8.64941 13.8525C8.30771 13.5108 7.85967 13.34 7.41162 13.34Z" fill="currentColor"/>',
    })
    a.d(t, {}, { v: r })
  },
  JvQE(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "shopping-bag-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.643188, y: 1.834961, width: 14.713318, height: 16.324219 },
        visualBounds: { x: 2.643188, y: 1.834961, width: 14.713318, height: 16.324219 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.643188, y: 1.834961, width: 14.713318, height: 16.324219 },
        center: { x: 9.999847, y: 9.997071 },
        insets: { top: 1.834961, right: 2.643494, bottom: 1.84082, left: 2.643188 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999847, y: 9.997071 },
          foreground: { x: 9.999847, y: 9.997071 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99947 1.83496C12.1124 1.83496 13.1645 3.51572 13.1645 5V5.10547H13.6088C15.1157 5.10554 16.3829 6.23778 16.5483 7.73535L17.3383 14.8818C17.5315 16.6316 16.1591 18.159 14.3989 18.1592H5.60103C3.83306 18.1592 2.45824 16.6195 2.66353 14.8633L3.49947 7.7168C3.67368 6.22745 4.9373 5.10547 6.43697 5.10547H6.83443V5C6.83443 3.5158 7.88679 1.83516 9.99947 1.83496ZM6.43697 6.43555C5.61034 6.43555 4.91637 7.05365 4.82076 7.87109L3.98384 15.0176C3.87129 15.981 4.6264 16.8291 5.60103 16.8291H14.3989C15.3691 16.8289 16.1219 15.9881 16.0161 15.0283L15.227 7.88086C15.1361 7.05907 14.4393 6.43562 13.6088 6.43555H13.1645V7.5C13.1645 7.86727 12.8667 8.16504 12.4995 8.16504C12.1324 8.16484 11.8344 7.86715 11.8344 7.5V6.43555H8.16451V7.5C8.16451 7.86727 7.86674 8.16504 7.49947 8.16504C7.13237 8.16484 6.83443 7.86715 6.83443 7.5V6.43555H6.43697ZM9.99947 3.16504C8.7793 3.16522 8.16451 4.08174 8.16451 5V5.10547H11.8344V5C11.8344 4.08165 11.2199 3.16504 9.99947 3.16504Z" fill="currentColor"/>',
    })
    a.d(t, {}, { V: r })
  },
}
//# sourceMappingURL=296884.ab9cdcad8b.js.map
