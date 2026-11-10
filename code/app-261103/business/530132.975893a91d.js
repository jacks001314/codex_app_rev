export const __rspack_esm_ids = [530132]
export const __webpack_modules__ = {
  UYRh(e, t) {
    t.A = {
      collectionList: "collectionList-dnkKFN",
      rowArtworkSlot: "rowArtworkSlot-CMfKII",
      rowSkeletonArtwork: "rowSkeletonArtwork-Ki7Jhx",
      rowMetadata: "rowMetadata-tkRYX9",
      stackedMetadata: "stackedMetadata-gxV6ma",
      listHeader: "listHeader-GtOdLF",
      containedStage: "containedStage-sz_0Pu",
      card: "card-ineZLT",
      previewStage: "previewStage-LVQXDO",
      previewFrame: "previewFrame-MqFT2r",
      portraitPreview: "portraitPreview-zLWHYX",
      landscapePreview: "landscapePreview-hYNmkX",
      fitPreviewImage: "fitPreviewImage-l57qZb",
      insetPreview: "insetPreview-VM60sy",
      cardArtwork: "cardArtwork-s8Od6S",
      cardHeaderCopy: "cardHeaderCopy-TbOYhE",
      cardHeaderCopyPinned: "cardHeaderCopyPinned-oQj_fP",
      cardHeaderCopyWithPin: "cardHeaderCopyWithPin-Et3Na1",
      mediaHeaderBlur: "mediaHeaderBlur-I6tgFr",
      mediaHeaderShade: "mediaHeaderShade-BaLjCT",
      folderStack: "folderStack-b3Sa55",
      folderFan: "folderFan-jsiXyr",
      folderStackBack: "folderStackBack-C2nWn7",
      folderStackMiddle: "folderStackMiddle-SZlkcc",
      folderStackFront: "folderStackFront-mC0Nhx",
      photoStackLayers: "photoStackLayers-dY6lIb",
      photoStackLayer: "photoStackLayer-j4nBZd",
    }
  },
  piij(e, t, r) {
    e.exports = r.p + "assets/space-recovery.105d9c61fe.png"
  },
  wbH5(e, t, r) {
    r.d(t, { ShoppingForYouPage: () => tn })
    var n = r("ABep"),
      a = r("QosV"),
      o = r("zTeN"),
      l = r("zd8w"),
      i = r("oyxz"),
      s = r("Wf1j"),
      c = r("HZfM"),
      d = r("ASxG"),
      u = r("ygO2"),
      p = r("Bbed"),
      f = r("PkPj"),
      g = r("BrP7"),
      m = r("IxWh"),
      h = r("bqtn"),
      x = r("GO7r"),
      y = r("OWtl"),
      _ = r("eGPX"),
      v = r("Qgfj")
    let b = ["tech", "home", "style", "beauty", "outdoors", "gifts"],
      w = {
        continue_shopping: "intent",
        upcoming: "intent",
        favorite_brands: "preference",
        ownership_complements: "ownership",
      },
      j = { intent: 0, preference: 1, ownership: 2, exploration: 3 }
    function A(e) {
      return "deal" in e && Number.isFinite(e.deal.sale_price) && !(e.deal.sale_price <= 0) && e.deal.currency.trim()
        ? { amount: e.deal.sale_price, currency: e.deal.currency }
        : null
    }
    function T({
      items: e,
      page: t,
      category: r,
      subcategory: n,
      sort: a = "recommended",
      additionalCategoryItems: o = [],
    }) {
      let l = new Set(),
        i = []
      for (let t of e) l.has(t.id) || (l.add(t.id), i.push(t))
      let s = i.filter((e) => null == r || e.category === r),
        c = [
          ...new Set(
            [...s, ...o.filter((e) => e.category === r)].flatMap((e) => (null == e.subcategory ? [] : [e.subcategory])),
          ),
        ],
        d = null != n && c.includes(n) ? n : void 0,
        u = N(s.filter((e) => null == d || e.subcategory === d)),
        p = new Set(
          u.flatMap((e) => {
            let t = A(e)
            return t ? [t.currency] : []
          }),
        ),
        f = 1 === p.size && u.every(A) ? ([...p][0] ?? null) : null
      "recommended" !== a &&
        null != f &&
        u.sort((e, t) => {
          let r = A(e),
            n = A(t)
          return r ? (n ? ("price_asc" === a ? r.amount - n.amount : n.amount - r.amount) : -1) : +!!n
        })
      let g = (t?.shopping_profile ?? []).flatMap((e, t) => {
        if (null == e.collection_kind || !e.topic.trim() || w[e.collection_kind] !== e.kind) return []
        let r = s.filter((e) => Number.isInteger(e.profile_bucket_index) && e.profile_bucket_index === t)
        return r.length
          ? [{ index: t, topic: e.topic, kind: e.kind, collectionKind: e.collection_kind, products: N(r) }]
          : []
      })
      return (
        g.sort((e, t) => j[e.kind] - j[t.kind]),
        {
          products: N(i),
          filteredProducts: u,
          collections: g,
          subcategories: c,
          effectiveSubcategory: d,
          priceSortCurrency: f,
        }
      )
    }
    function N(e) {
      let t = [...e],
        r = [],
        n = new Map(),
        a = (e) => {
          let t = e.product.semantic_id
          return t ? [2, 1].map((e) => `${t.model_version}:${e}:${t.codes.slice(0, e).join(".")}`) : []
        }
      for (; t.length;) {
        let e = 0
        if (t[0]?.product.semantic_id)
          for (let r = 1; r < Math.min(10, t.length); r++) {
            let o = t[r],
              l = t[e]
            if (!o?.product.semantic_id || !l) continue
            let [i = 0, s = 0] = a(o).map((e) => n.get(e) ?? 0),
              [c = 0, d = 0] = a(l).map((e) => n.get(e) ?? 0)
            ;(i < c || (i === c && s < d)) && (e = r)
          }
        let [o] = t.splice(e, 1)
        if (o) for (let e of (r.push(o), a(o))) n.set(e, (n.get(e) ?? 0) + 1)
      }
      return r
    }
    var C = r("rKAs"),
      k = r("SPnB"),
      S = r("rWfF"),
      E = r("VBQw"),
      I = r("DC2G"),
      P = r("DixB"),
      M = r("TjgH"),
      R = r("ZtSy"),
      O = r("RjIR"),
      G = r("zSQm"),
      D = r("hZax"),
      H = r("RcOP")
    function L(e) {
      if (!e) return null
      try {
        let t = new URL(e)
        return !["https:", "http:"].includes(t.protocol) || t.username || t.password ? null : t.href
      } catch {
        return null
      }
    }
    function F(e) {
      let t,
        r,
        l,
        c,
        d,
        u,
        p,
        f,
        g,
        m,
        h,
        x,
        y,
        _,
        v,
        b = (0, a.c)(50),
        { item: w } = e,
        j = (0, s.A)(),
        A = (0, C.b$)({ type: "products", products: [w.product] })[0],
        T = (0, o.Ul)(O._),
        N = (0, o.Ul)(k.chatGptAuthenticatedAccountId$),
        S = (0, o.Ul)(k.chatGptAuthenticatedUserId$),
        E = (0, D.Fj)("2347841422")
      if (!A) return null
      let I = "assumed_deal" in w ? w.assumed_deal : null,
        G = "deal" in w ? w.deal : null,
        F = G ?? I,
        B = L(A.url),
        U = A.image_urls?.flatMap(Y) ?? [],
        q = (0, P.S)(A, void 0),
        K = JSON.stringify([A.id, U[0]])
      ;(b[0] !== z || b[1] !== U || b[2] !== A || b[3] !== K
        ? ((t = (0, n.jsx)(z, { product: A, images: U }, K)),
          (b[0] = z),
          (b[1] = U),
          (b[2] = A),
          (b[3] = K),
          (b[4] = t))
        : (t = b[4]),
        b[5] !== A.title
          ? ((r = (0, n.jsx)("h3", { className: "line-clamp-2 text-sm font-medium text-default", children: A.title })),
            (b[5] = A.title),
            (b[6] = r))
          : (r = b[6]),
        b[7] !== A.merchants
          ? ((l = (0, n.jsx)("p", { className: "text-sm text-secondary", children: A.merchants })),
            (b[7] = A.merchants),
            (b[8] = l))
          : (l = b[8]),
        b[9] !== w.reason
          ? ((c = w.reason ? (0, n.jsx)("p", { className: "text-sm text-secondary", children: w.reason }) : null),
            (b[9] = w.reason),
            (b[10] = c))
          : (c = b[10]),
        b[11] !== F || b[12] !== j || b[13] !== A.price
          ? ((d = F ? j.formatNumber(F.sale_price, { style: "currency", currency: F.currency }) : A.price),
            (b[11] = F),
            (b[12] = j),
            (b[13] = A.price),
            (b[14] = d))
          : (d = b[14]),
        b[15] !== d
          ? ((u = (0, n.jsx)("span", { className: "font-semibold", children: d })), (b[15] = d), (b[16] = u))
          : (u = b[16]),
        b[17] !== F || b[18] !== j
          ? ((p = F
              ? (0, n.jsx)("s", {
                  className: "text-secondary",
                  children: j.formatNumber(F.original_price, { style: "currency", currency: F.currency }),
                })
              : null),
            (b[17] = F),
            (b[18] = j),
            (b[19] = p))
          : (p = b[19]),
        b[20] !== u || b[21] !== p
          ? ((f = (0, n.jsxs)("div", { className: "flex flex-wrap items-baseline gap-2 text-sm", children: [u, p] })),
            (b[20] = u),
            (b[21] = p),
            (b[22] = f))
          : (f = b[22]),
        b[23] !== G
          ? ((g = G
              ? (0, n.jsx)(M.E, {
                  variant: "success",
                  children:
                    G.discount_percent > 0 && G.discount_percent < 1
                      ? (0, n.jsx)(i.A, { id: "shopping.forYou.discountUnderOnePercent", defaultMessage: "<1% off" })
                      : (0, n.jsx)(i.A, {
                          id: "shopping.forYou.discount",
                          defaultMessage: "{discount}% off",
                          values: { discount: Math.floor(G.discount_percent) },
                        }),
                })
              : null),
            (b[23] = G),
            (b[24] = g))
          : (g = b[24]),
        b[25] !== I
          ? ((m = I
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(M.E, {
                      variant: "warning",
                      children: (0, n.jsx)(i.A, {
                        id: "shopping.forYou.assumed",
                        defaultMessage: "USD assumed · Not verified",
                      }),
                    }),
                    (0, n.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, n.jsx)(i.A, {
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
        b[27] !== g || b[28] !== m || b[29] !== r || b[30] !== l || b[31] !== c || b[32] !== f
          ? ((h = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-1 px-1", children: [r, l, c, f, g, m] })),
            (b[27] = g),
            (b[28] = m),
            (b[29] = r),
            (b[30] = l),
            (b[31] = c),
            (b[32] = f),
            (b[33] = h))
          : (h = b[33]),
        b[34] !== h || b[35] !== t
          ? ((x = (0, n.jsxs)(n.Fragment, { children: [t, h] })), (b[34] = h), (b[35] = t), (b[36] = x))
          : (x = b[36]))
      let V = x
      return (
        b[37] !== V || b[38] !== B
          ? ((y = B
              ? (0, n.jsx)(R.G, {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  appearance: "inherit",
                  underline: "none",
                  href: B,
                  initiator: "markdown_link_click",
                  children: V,
                })
              : (0, n.jsx)("div", {
                  className: "flex w-full min-w-0 flex-col gap-2 rounded-xl pb-2 text-start",
                  children: V,
                })),
            (b[37] = V),
            (b[38] = B),
            (b[39] = y))
          : (y = b[39]),
        b[40] !== N || b[41] !== I || b[42] !== E || b[43] !== T || b[44] !== q || b[45] !== S
          ? ((_ =
              !I && T && N && S && q && E.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
                ? (0, n.jsx)(H.ProductFavoriteAction, {
                    className: "absolute end-2 top-2",
                    accountId: N,
                    userId: S,
                    conversationId: void 0,
                    messageId: void 0,
                    request: q,
                    surface: "product_card",
                  })
                : null),
            (b[40] = N),
            (b[41] = I),
            (b[42] = E),
            (b[43] = T),
            (b[44] = q),
            (b[45] = S),
            (b[46] = _))
          : (_ = b[46]),
        b[47] !== y || b[48] !== _
          ? ((v = (0, n.jsxs)("article", { className: "relative flex min-w-0 flex-col gap-2", children: [y, _] })),
            (b[47] = y),
            (b[48] = _),
            (b[49] = v))
          : (v = b[49]),
        v
      )
    }
    function Y(e) {
      let t = (0, G.ex)(e)
      return t ? [t] : []
    }
    function z(e) {
      let t,
        r,
        i,
        s,
        c = (0, a.c)(14),
        { product: d, images: u } = e,
        p = (0, o.gh)(y.u),
        [f, g] = (0, l.useState)(0),
        m = u[f],
        h = 0 === u.length
      c[0] !== d || c[1] !== p
        ? ((t = () => {
            ;(0, E.b2)(p, {
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
      let x = (0, l.useEffectEvent)(t)
      return (
        c[3] !== x || c[4] !== h
          ? ((r = () => {
              h && x()
            }),
            (c[3] = x),
            (c[4] = h),
            (c[5] = r))
          : (r = c[5]),
        c[6] !== h || c[7] !== d.id ? ((i = [h, d.id]), (c[6] = h), (c[7] = d.id), (c[8] = i)) : (i = c[8]),
        (0, l.useEffect)(r, i),
        c[9] !== m || c[10] !== f || c[11] !== u.length || c[12] !== d
          ? ((s = (0, n.jsx)("div", {
              className: "relative isolate aspect-square w-full overflow-hidden rounded-xl bg-artifact-photo-paper",
              children: m
                ? (0, n.jsx)(
                    S.u,
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
                : (0, n.jsx)(I.Y, { alt: d.title }),
            })),
            (c[9] = m),
            (c[10] = f),
            (c[11] = u.length),
            (c[12] = d),
            (c[13] = s))
          : (s = c[13]),
        s
      )
    }
    var B = r("CWeU"),
      U = r("Ghh3"),
      q = r("Oj9r"),
      K = r("eShZ")
    let V = { "target.com": "Target", "walmart.com": "Walmart", "bestbuy.com": "Best Buy" },
      $ = ["most_drop", "target.com", "walmart.com", "bestbuy.com"],
      W = d.object({ data: d.string().min(1), version: d.string().min(1) }),
      Q = (0, o.T1)(
        q.GD,
        (e, { signal: t, scope: r }) => {
          let n = e.category,
            a = !0,
            o = new Map(),
            l = t(Z(), {
              onMount: (e) => {
                ;((a = !1), e(Z()))
                let t = !1,
                  n = r.watch(({ get: r }) => {
                    i(r(B.PO)) ? t || ((t = !0), c()) : ((t = !1), s(), e(Z()))
                  })
                return () => {
                  ;((a = !0), n(), s(), e(Z()))
                }
              },
            })
          function i(t = r.get(B.PO)) {
            return (
              !a &&
              null != n &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function s() {
            for (let e of o.values()) e.abort()
            o.clear()
          }
          async function c(t, a = !1) {
            let d = t ?? "all"
            if (null == n || !i() || o.has("all") || o.has(d)) return
            let u = t ? [t] : $,
              p = new AbortController()
            ;(o.set(d, p),
              r.set(l, (e) => {
                let t = { ...e }
                for (let e of u) t[e] = { data: null, loading: !0, error: !1 }
                return t
              }))
            let f = () => {
              if (!i() || p.signal.aborted) throw new DOMException("The shopping category changed", "AbortError")
            }
            try {
              let o = await U.Request.safeGet("/shopping/category-deals", {
                parameters: { query: { category: n, section: t, refresh: a } },
                additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                expectedIdentity: { accountId: e.accountId, userId: e.userId },
                assertRequestCurrent: f,
                signal: p.signal,
              })
              if ((f(), o.category !== n)) throw Error("Shopping category response mismatch")
              r.set(l, (e) => {
                let t = { ...e }
                for (let e of u) {
                  let r = "most_drop" === e ? o.most_drop : o.merchant_sections?.find((t) => t.domain === e),
                    a =
                      r?.items?.filter(
                        (e) =>
                          e.category === n &&
                          e.deal?.currency === "USD" &&
                          Number.isFinite(e.deal.original_price) &&
                          Number.isFinite(e.deal.sale_price) &&
                          Number.isFinite(e.deal.discount_percent) &&
                          e.deal.discount_percent > 0 &&
                          e.deal.sale_price > 0 &&
                          e.deal.sale_price < e.deal.original_price &&
                          W.safeParse(e.product.product_lookup_key).success,
                      ) ?? [],
                    l = null == r || "unavailable" === r.status || ("ready" === r.status && 0 === a.length)
                  t[e] = { data: l || null == r ? null : { ...r, items: a }, loading: !1, error: l }
                }
                return t
              })
            } catch (t) {
              if (!i() || p.signal.aborted) return
              let e = t instanceof K.fk && [401, 403].includes(t.status)
              ;(e && s(),
                r.set(l, (t) => {
                  let r = { ...t }
                  for (let t of e ? $ : u) r[t] = { data: null, loading: !1, error: !0 }
                  return r
                }))
            } finally {
              o.get(d) === p && o.delete(d)
            }
          }
          return {
            state$: l,
            retry: (e) => c(e, !0),
            refresh: () => (s(), c(void 0, !0)),
            cancel: () => {
              ;(s(),
                i() &&
                  r.set(l, (e) => {
                    let t = { ...e }
                    for (let r of $) e[r].loading && (t[r] = { data: null, loading: !1, error: !1, cancelled: !0 })
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
    function X(e) {
      let t,
        r,
        o,
        s,
        c,
        d,
        u,
        p,
        f,
        m,
        h,
        x,
        y,
        _,
        v,
        b,
        w,
        j,
        A,
        T = (0, a.c)(46),
        { state: C, subcategory: k, onRetry: S } = e,
        E = (0, l.useId)(),
        I = (0, l.useId)(),
        [P, M] = (0, l.useState)("percent")
      if (T[0] !== P || T[1] !== C.most_drop || T[2] !== k) {
        let e
        ;(T[4] !== P
          ? ((e = (e, t) => ("percent" === P ? t.deal.discount_percent - e.deal.discount_percent : et(t) - et(e))),
            (T[4] = P),
            (T[5] = e))
          : (e = T[5]),
          (t = ee(C.most_drop, k).toSorted(e)),
          (T[0] = P),
          (T[1] = C.most_drop),
          (T[2] = k),
          (T[3] = t))
      } else t = T[3]
      let R = t
      ;(T[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(i.A, { id: "shopping.categoryDeals.mostDrop", defaultMessage: "Most drop" })), (T[6] = r))
        : (r = T[6]),
        T[7] !== E
          ? ((o = (0, n.jsx)("h2", { id: E, className: "heading-md", children: r })), (T[7] = E), (T[8] = o))
          : (o = T[8]),
        T[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = {
              key: "percent",
              name: (0, n.jsx)(i.A, { id: "shopping.categoryDeals.percent", defaultMessage: "Highest % off" }),
            }),
            (T[9] = s))
          : (s = T[9]),
        T[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              s,
              {
                key: "amount",
                name: (0, n.jsx)(i.A, { id: "shopping.categoryDeals.amount", defaultMessage: "Most dollars off" }),
              },
            ]),
            (T[10] = c))
          : (c = T[10]),
        T[11] !== P
          ? ((d = (0, n.jsx)(g.t, { variant: "filter", selectedKey: P, onSelect: M, tabs: c })),
            (T[11] = P),
            (T[12] = d))
          : (d = T[12]),
        T[13] !== o || T[14] !== d
          ? ((u = (0, n.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [o, d],
            })),
            (T[13] = o),
            (T[14] = d),
            (T[15] = u))
          : (u = T[15]),
        T[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, n.jsx)(i.A, {
                id: "shopping.categoryDeals.savingsFound",
                defaultMessage: "Deals with the biggest savings we found",
              }),
            })),
            (T[16] = p))
          : (p = T[16]))
      let O = `${C.most_drop.data?.snapshot_id}:${k}:${P}`
      return (
        T[17] !== S ? ((f = () => S("most_drop")), (T[17] = S), (T[18] = f)) : (f = T[18]),
        T[19] !== R || T[20] !== C.most_drop || T[21] !== f || T[22] !== O
          ? ((m = (0, n.jsx)(J, { state: C.most_drop, items: R, showSavings: !0, onRetry: f }, O)),
            (T[19] = R),
            (T[20] = C.most_drop),
            (T[21] = f),
            (T[22] = O),
            (T[23] = m))
          : (m = T[23]),
        T[24] !== E || T[25] !== m || T[26] !== u
          ? ((h = (0, n.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": E,
              children: [u, p, m],
            })),
            (T[24] = E),
            (T[25] = m),
            (T[26] = u),
            (T[27] = h))
          : (h = T[27]),
        T[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(i.A, { id: "shopping.categoryDeals.siteWide", defaultMessage: "Site-wide deals" })),
            (T[28] = x))
          : (x = T[28]),
        T[29] !== I
          ? ((y = (0, n.jsx)("h2", { id: I, className: "heading-md", children: x })), (T[29] = I), (T[30] = y))
          : (y = T[30]),
        T[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, n.jsx)(i.A, {
                id: "shopping.categoryDeals.merchantDescription",
                defaultMessage: "Deals in this category from these stores",
              }),
            })),
            (T[31] = _))
          : (_ = T[31]),
        T[32] !== y
          ? ((v = (0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [y, _] })), (T[32] = y), (T[33] = v))
          : (v = T[33]),
        T[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = ["target.com", "walmart.com", "bestbuy.com"]), (T[34] = b))
          : (b = T[34]),
        T[35] !== S || T[36] !== C || T[37] !== k
          ? ((w = b.map((e) =>
              (0, n.jsxs)(
                "section",
                {
                  className: "flex min-w-0 flex-col gap-4",
                  "aria-label": V[e],
                  children: [
                    (0, n.jsx)("h3", { className: "heading-sm", children: V[e] }),
                    (0, n.jsx)(
                      J,
                      { state: C[e], items: N(ee(C[e], k)), onRetry: () => S(e) },
                      `${C[e].data?.snapshot_id}:${k}`,
                    ),
                  ],
                },
                e,
              ),
            )),
            (T[35] = S),
            (T[36] = C),
            (T[37] = k),
            (T[38] = w))
          : (w = T[38]),
        T[39] !== I || T[40] !== v || T[41] !== w
          ? ((j = (0, n.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-6",
              "aria-labelledby": I,
              children: [v, w],
            })),
            (T[39] = I),
            (T[40] = v),
            (T[41] = w),
            (T[42] = j))
          : (j = T[42]),
        T[43] !== h || T[44] !== j
          ? ((A = (0, n.jsxs)(n.Fragment, { children: [h, j] })), (T[43] = h), (T[44] = j), (T[45] = A))
          : (A = T[45]),
        A
      )
    }
    function J(e) {
      let t,
        r,
        o,
        s,
        c = (0, a.c)(27),
        { state: d, items: p, showSavings: f, onRetry: g } = e,
        m = void 0 !== f && f,
        [h, x] = (0, l.useState)(5)
      if (d.loading || (!d.data && !d.error && !d.cancelled)) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, n.jsx)(i.A, { id: "shopping.categoryDeals.loading", defaultMessage: "Loading deals…" }),
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
          a,
          o,
          l = d.cancelled ? "status" : "alert"
        return (
          c[1] !== d.cancelled
            ? ((e = d.cancelled
                ? (0, n.jsx)(i.A, { id: "shopping.categoryDeals.stopped", defaultMessage: "Stopped loading deals" })
                : (0, n.jsx)(i.A, {
                    id: "shopping.categoryDeals.failed",
                    defaultMessage: "These deals couldn't be loaded",
                  })),
              (c[1] = d.cancelled),
              (c[2] = e))
            : (e = c[2]),
          c[3] !== l || c[4] !== e
            ? ((t = (0, n.jsx)("p", { role: l, className: "text-sm text-secondary", children: e })),
              (c[3] = l),
              (c[4] = e),
              (c[5] = t))
            : (t = c[5]),
          c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(i.A, { id: "shopping.categoryDeals.retry", defaultMessage: "Retry deals" })), (c[6] = r))
            : (r = c[6]),
          c[7] !== g
            ? ((a = (0, n.jsx)(u.$, { color: "secondary", onClick: g, children: r })), (c[7] = g), (c[8] = a))
            : (a = c[8]),
          c[9] !== t || c[10] !== a
            ? ((o = (0, n.jsxs)("div", { className: "flex flex-col items-start gap-3", children: [t, a] })),
              (c[9] = t),
              (c[10] = a),
              (c[11] = o))
            : (o = c[11]),
          o
        )
      }
      if (0 === p.length) {
        let e
        return (
          c[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, n.jsx)(i.A, {
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
              return (0, n.jsxs)(
                "div",
                {
                  className: "flex min-w-0 flex-col gap-2",
                  children: [
                    (0, n.jsx)(F, { item: e }),
                    m
                      ? (0, n.jsx)("p", {
                          className: "px-1 text-sm text-secondary",
                          children:
                            et((t = e)) >= 0.01 - Number.EPSILON * t.deal.original_price
                              ? (0, n.jsx)(i.A, {
                                  id: "shopping.categoryDeals.dollarsSaved",
                                  defaultMessage: "{amount} off",
                                  values: {
                                    amount: (0, n.jsx)(
                                      v.Gr,
                                      { value: et(e), style: "currency", currency: "USD" },
                                      "amount",
                                    ),
                                  },
                                })
                              : (0, n.jsx)(i.A, {
                                  id: "shopping.categoryDeals.fractionalSavings",
                                  defaultMessage: "Less than {amount} off",
                                  values: {
                                    amount: (0, n.jsx)(
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
          ? ((r = (0, n.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (c[19] = t),
            (c[20] = r))
          : (r = c[20]),
        c[21] !== p.length || c[22] !== h
          ? ((o =
              h < p.length
                ? (0, n.jsx)(u.$, {
                    color: "secondary",
                    className: "self-center",
                    onClick: () => x(h + 5),
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.categoryDeals.showMore",
                      defaultMessage: "Show more deals",
                    }),
                  })
                : null),
            (c[21] = p.length),
            (c[22] = h),
            (c[23] = o))
          : (o = c[23]),
        c[24] !== r || c[25] !== o
          ? ((s = (0, n.jsxs)(n.Fragment, { children: [r, o] })), (c[24] = r), (c[25] = o), (c[26] = s))
          : (s = c[26]),
        s
      )
    }
    function ee(e, t) {
      return e.data?.status === "ready" ? (e.data.items ?? []).filter((e) => null == t || e.subcategory === t) : []
    }
    function et(e) {
      return e.deal.original_price - e.deal.sale_price
    }
    let er = (0, v.YK)({
        tech: { id: "shopping.for_you.discovery.category.tech", defaultMessage: "Tech" },
        home: { id: "shopping.for_you.discovery.category.home", defaultMessage: "Home" },
        style: { id: "shopping.for_you.discovery.category.style", defaultMessage: "Style" },
        beauty: { id: "shopping.for_you.discovery.category.beauty", defaultMessage: "Beauty" },
        outdoors: { id: "shopping.for_you.discovery.category.outdoors", defaultMessage: "Outdoors" },
        gifts: { id: "shopping.for_you.discovery.category.gifts", defaultMessage: "Gifts" },
      }),
      en = (0, v.YK)({
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
      ea = (0, v.YK)({
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
      eo = (0, v.YK)({
        recommended: { id: "shopping.for_you.discovery.sort.recommended", defaultMessage: "Recommended" },
        price_asc: { id: "shopping.for_you.discovery.sort.price_asc", defaultMessage: "Price: low to high" },
        price_desc: { id: "shopping.for_you.discovery.sort.price_desc", defaultMessage: "Price: high to low" },
      })
    function el(e) {
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
        r,
        o,
        c,
        d,
        p,
        f,
        m,
        x,
        y,
        _,
        v,
        b = (0, a.c)(49),
        { state: w, category: j, connectionCard: A, onLoadMore: N, categoryDeals: C } = e,
        k = (0, s.A)(),
        S = (0, l.useId)(),
        E = (0, l.useId)(),
        [I, P] = (0, l.useState)(),
        [M, R] = (0, l.useState)("recommended"),
        [O, G] = (0, l.useState)(),
        [D, H] = (0, l.useState)(15),
        [L, F] = (0, l.useState)(15)
      if (
        b[0] !== j ||
        b[1] !== C ||
        b[2] !== A ||
        b[3] !== k ||
        b[4] !== E ||
        b[5] !== O ||
        b[6] !== M ||
        b[7] !== w.cancelled ||
        b[8] !== w.items ||
        b[9] !== w.loading ||
        b[10] !== w.page ||
        b[11] !== w.pageError ||
        b[12] !== I ||
        b[13] !== S ||
        b[14] !== D ||
        b[15] !== L
      ) {
        let e,
          a,
          l = [...w.items, ...(w.page?.recommendations ?? []), ...(C ? Object.values(C.state).flatMap(eg) : [])]
        t = T({ items: w.items, page: w.page, category: j, subcategory: I, sort: M, additionalCategoryItems: l })
        let s = T({
          items: w.page?.recommendations ?? [],
          page: w.page,
          category: j,
          subcategory: t.effectiveSubcategory,
          additionalCategoryItems: l,
        }).filteredProducts
        ;(b[25] !== O
          ? ((e = (e) =>
              null != O && e.index === O.index && e.topic === O.topic && e.collectionKind === O.collectionKind),
            (b[25] = O),
            (b[26] = e))
          : (e = b[26]),
          (r = t.collections.find(e)))
        let y = !j && !r,
          _ = y ? t.products.slice(0, 8) : [],
          v = new Set(_.map(ef)),
          N = r ? new Set(r.products.map(ep)) : null,
          Y = t.filteredProducts.filter((e) => (!N || N.has(e.id)) && (!y || !v.has(e.id))),
          z = w.page?.gmail_state === "connected" || el(w.page),
          B = z && !w.loading && !w.pageError && !w.cancelled,
          U = null != j && t.products.length > 0 && t.products.every(eu)
        b[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => {
              ;(P(void 0), R("recommended"), H(15), F(15))
            }),
            (b[27] = a))
          : (a = b[27])
        let q = a
        ;((o = "flex min-w-0 flex-col gap-8"),
          (c =
            j && !r
              ? (0, n.jsx)("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: (0, n.jsx)(g.t, {
                    variant: "filter",
                    scrollable: !0,
                    selectedKey: t.effectiveSubcategory ?? "all",
                    onSelect: (e) => {
                      ;(P("all" === e ? void 0 : e), H(15), F(15))
                    },
                    tabs: [
                      { key: "all", name: (0, n.jsx)(i.A, { id: "shopping.forYou.all", defaultMessage: "All" }) },
                      ...t.subcategories.map(ed),
                    ],
                  }),
                })
              : null),
          (d =
            !r && (s.length > 0 || B)
              ? (0, n.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": E,
                  children: [
                    (0, n.jsx)("h2", {
                      id: E,
                      className: "heading-md",
                      children: (0, n.jsx)(i.A, {
                        id: "shopping.forYou.recommendedProducts",
                        defaultMessage: "Recommended products",
                      }),
                    }),
                    (0, n.jsx)(em, { products: s.slice(0, L) }),
                    0 === s.length
                      ? (0, n.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.noRecommendedProducts",
                            defaultMessage: "No matching product recommendations yet",
                          }),
                        })
                      : null,
                    L < s.length
                      ? (0, n.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => F(L + 15),
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.moreProducts",
                            defaultMessage: "Show more products",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (p = _.length > 0 ? (0, n.jsx)(ex, { products: _ }) : null),
          (f = r
            ? null
            : (0, n.jsxs)("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                  y || 0 === t.products.length ? A : null,
                  t.collections.slice(0, y ? 2 : 3).map((e) =>
                    (0, n.jsxs)(
                      "section",
                      {
                        className: "flex min-w-0 flex-col gap-3 rounded-xl border border-default p-4",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, n.jsx)(i.A, { ...ea[e.collectionKind] }),
                          }),
                          (0, n.jsx)("h2", { className: "heading-md", children: e.topic }),
                          (0, n.jsx)("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: e.products.slice(0, y ? 4 : 2).map(ec),
                          }),
                          (0, n.jsx)(u.$, {
                            color: "secondary",
                            onClick: () => {
                              ;(q(), G(e))
                            },
                            children: (0, n.jsx)(i.A, {
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
          (m = y ? t.collections.slice(2).map(es) : null),
          (x =
            Y.length > 0 || j || r || (z && 0 === t.products.length)
              ? (0, n.jsxs)("section", {
                  className: "flex flex-col gap-4",
                  "aria-labelledby": S,
                  children: [
                    r
                      ? (0, n.jsx)(u.$, {
                          color: "ghost",
                          className: "self-start",
                          onClick: () => {
                            ;(q(), G(void 0))
                          },
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.backCollections",
                            defaultMessage: "Back to collections",
                          }),
                        })
                      : null,
                    (0, n.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between gap-3",
                      children: [
                        (0, n.jsxs)("h2", {
                          id: S,
                          className: "heading-md",
                          children: [
                            r?.topic,
                            !r && j
                              ? (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.recommendedCategoryDeals",
                                  defaultMessage: "Recommended deals",
                                })
                              : null,
                            r || j
                              ? null
                              : (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.moreToDiscover",
                                  defaultMessage: "More deals to discover",
                                }),
                          ],
                        }),
                        j && !r
                          ? (0, n.jsx)(h.Ab, {
                              triggerButton: (0, n.jsx)(u.$, {
                                color: "secondary",
                                "aria-label": k.formatMessage({
                                  id: "shopping.forYou.sort",
                                  defaultMessage: "Sort deals",
                                }),
                                children: (0, n.jsx)(i.A, { ...eo[t.priceSortCurrency ? M : "recommended"] }),
                              }),
                              children: ["recommended", "price_asc", "price_desc"].map((e) =>
                                (0, n.jsx)(
                                  h.ms.Item,
                                  {
                                    disabled: "recommended" !== e && !t.priceSortCurrency,
                                    onSelect: () => R(e),
                                    children: (0, n.jsx)(i.A, { ...eo[e] }),
                                  },
                                  e,
                                ),
                              ),
                            })
                          : null,
                      ],
                    }),
                    (0, n.jsx)(em, { products: Y.slice(0, D) }),
                    0 === Y.length && B
                      ? (0, n.jsx)("p", {
                          role: "status",
                          className: "text-sm text-secondary",
                          children: U
                            ? (0, n.jsx)(i.A, {
                                id: "shopping.forYou.noCategories",
                                defaultMessage:
                                  "Category filters aren't available for these results yet. Try refreshing your recommendations",
                              })
                            : (0, n.jsx)(i.A, {
                                id: "shopping.forYou.noMatches",
                                defaultMessage: "No matching products in these results yet",
                              }),
                        })
                      : null,
                    D < Y.length
                      ? (0, n.jsx)(u.$, {
                          color: "secondary",
                          className: "self-center",
                          onClick: () => H(D + 15),
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.moreFinds",
                            defaultMessage: "Show more finds",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (b[0] = j),
          (b[1] = C),
          (b[2] = A),
          (b[3] = k),
          (b[4] = E),
          (b[5] = O),
          (b[6] = M),
          (b[7] = w.cancelled),
          (b[8] = w.items),
          (b[9] = w.loading),
          (b[10] = w.page),
          (b[11] = w.pageError),
          (b[12] = I),
          (b[13] = S),
          (b[14] = D),
          (b[15] = L),
          (b[16] = t),
          (b[17] = r),
          (b[18] = o),
          (b[19] = c),
          (b[20] = d),
          (b[21] = p),
          (b[22] = f),
          (b[23] = m),
          (b[24] = x))
      } else
        ((t = b[16]),
          (r = b[17]),
          (o = b[18]),
          (c = b[19]),
          (d = b[20]),
          (p = b[21]),
          (f = b[22]),
          (m = b[23]),
          (x = b[24]))
      return (
        b[28] !== N ||
        b[29] !== w.loading ||
        b[30] !== w.loadingMore ||
        b[31] !== w.page?.next_cursor ||
        b[32] !== w.refreshingGmail
          ? ((y = w.page?.next_cursor
              ? (0, n.jsx)(u.$, {
                  color: "secondary",
                  className: "self-center",
                  disabled: w.loading || w.loadingMore || w.refreshingGmail,
                  onClick: N,
                  children: (0, n.jsx)(i.A, { id: "shopping.forYou.moreDeals", defaultMessage: "Show more deals" }),
                })
              : null),
            (b[28] = N),
            (b[29] = w.loading),
            (b[30] = w.loadingMore),
            (b[31] = w.page?.next_cursor),
            (b[32] = w.refreshingGmail),
            (b[33] = y))
          : (y = b[33]),
        b[34] !== j || b[35] !== C || b[36] !== t || b[37] !== r
          ? ((_ =
              j && !r && C
                ? (0, n.jsx)(X, { state: C.state, subcategory: t.effectiveSubcategory, onRetry: C.onRetry })
                : null),
            (b[34] = j),
            (b[35] = C),
            (b[36] = t),
            (b[37] = r),
            (b[38] = _))
          : (_ = b[38]),
        b[39] !== o ||
        b[40] !== c ||
        b[41] !== d ||
        b[42] !== p ||
        b[43] !== f ||
        b[44] !== m ||
        b[45] !== x ||
        b[46] !== y ||
        b[47] !== _
          ? ((v = (0, n.jsxs)("div", { className: o, children: [c, d, p, f, m, x, y, _] })),
            (b[39] = o),
            (b[40] = c),
            (b[41] = d),
            (b[42] = p),
            (b[43] = f),
            (b[44] = m),
            (b[45] = x),
            (b[46] = y),
            (b[47] = _),
            (b[48] = v))
          : (v = b[48]),
        v
      )
    }
    function es(e) {
      return (0, n.jsxs)(
        "section",
        {
          className: "flex flex-col gap-4",
          children: [
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("h2", { className: "heading-md", children: e.topic }),
                (0, n.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(i.A, { ...ea[e.collectionKind] }),
                }),
              ],
            }),
            (0, n.jsx)(em, { products: e.products }),
          ],
        },
        e.index,
      )
    }
    function ec(e) {
      return (0, n.jsx)(F, { item: e }, e.id)
    }
    function ed(e) {
      return { key: e, name: (0, n.jsx)(i.A, { ...en[e] }) }
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
        r,
        o = (0, a.c)(4),
        { products: l } = e
      return (
        o[0] !== l ? ((t = l.map(eh)), (o[0] = l), (o[1] = t)) : (t = o[1]),
        o[2] !== t
          ? ((r = (0, n.jsx)("div", {
              className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: t,
            })),
            (o[2] = t),
            (o[3] = r))
          : (r = o[3]),
        r
      )
    }
    function eh(e) {
      return (0, n.jsx)(F, { item: e }, e.id)
    }
    function ex(e) {
      let t,
        r,
        c,
        d,
        p,
        f,
        g,
        h,
        v,
        b,
        w,
        j,
        A,
        T,
        N,
        C,
        k = (0, a.c)(35),
        { products: S } = e,
        E = (0, o.gh)(y.u),
        I = (0, s.A)(),
        P = (0, l.useRef)(null),
        M = (0, l.useId)()
      k[0] !== E
        ? ((t = (e) => {
            let t = P.current
            if (!t) return
            let r = "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"
            t.scrollTo({ left: (0, m.z)(t, e, r), behavior: E.get(_.x) ? "instant" : "smooth" })
          }),
          (k[0] = E),
          (k[1] = t))
        : (t = k[1])
      let R = t
      return (
        k[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(i.A, { id: "shopping.forYou.worthALook", defaultMessage: "Recommended deals" })),
            (k[2] = r))
          : (r = k[2]),
        k[3] !== M
          ? ((c = (0, n.jsx)("h2", { id: M, className: "heading-md", children: r })), (k[3] = M), (k[4] = c))
          : (c = k[4]),
        k[5] !== I
          ? ((d = I.formatMessage({ id: "shopping.forYou.previousDeals", defaultMessage: "Previous deals" })),
            (k[5] = I),
            (k[6] = d))
          : (d = k[6]),
        k[7] !== R ? ((p = () => R(-1)), (k[7] = R), (k[8] = p)) : (p = k[8]),
        k[9] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, n.jsx)(x.z_d, {})), (k[9] = f)) : (f = k[9]),
        k[10] !== d || k[11] !== p
          ? ((g = (0, n.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": d,
              onClick: p,
              children: f,
            })),
            (k[10] = d),
            (k[11] = p),
            (k[12] = g))
          : (g = k[12]),
        k[13] !== I
          ? ((h = I.formatMessage({ id: "shopping.forYou.nextDeals", defaultMessage: "Next deals" })),
            (k[13] = I),
            (k[14] = h))
          : (h = k[14]),
        k[15] !== R ? ((v = () => R(1)), (k[15] = R), (k[16] = v)) : (v = k[16]),
        k[17] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, n.jsx)(x.uM3, {})), (k[17] = b)) : (b = k[17]),
        k[18] !== h || k[19] !== v
          ? ((w = (0, n.jsx)(u.$, {
              color: "secondary",
              radius: "full",
              uniform: !0,
              "aria-label": h,
              onClick: v,
              children: b,
            })),
            (k[18] = h),
            (k[19] = v),
            (k[20] = w))
          : (w = k[20]),
        k[21] !== w || k[22] !== g
          ? ((j = (0, n.jsxs)("div", { className: "flex gap-2", children: [g, w] })),
            (k[21] = w),
            (k[22] = g),
            (k[23] = j))
          : (j = k[23]),
        k[24] !== j || k[25] !== c
          ? ((A = (0, n.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [c, j] })),
            (k[24] = j),
            (k[25] = c),
            (k[26] = A))
          : (A = k[26]),
        k[27] !== S ? ((T = S.map(ey)), (k[27] = S), (k[28] = T)) : (T = k[28]),
        k[29] !== T
          ? ((N = (0, n.jsx)("div", {
              ref: P,
              className: "relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2",
              children: T,
            })),
            (k[29] = T),
            (k[30] = N))
          : (N = k[30]),
        k[31] !== A || k[32] !== N || k[33] !== M
          ? ((C = (0, n.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-labelledby": M,
              children: [A, N],
            })),
            (k[31] = A),
            (k[32] = N),
            (k[33] = M),
            (k[34] = C))
          : (C = k[34]),
        C
      )
    }
    function ey(e) {
      return (0, n.jsx)(
        "div",
        {
          className: "min-w-0 shrink-0 basis-40 snap-start sm:basis-48 xl:basis-56",
          children: (0, n.jsx)(F, { item: e }),
        },
        e.id,
      )
    }
    var e_ = r("CMv2"),
      ev = r("DBCl"),
      eb = r("yxN2"),
      ew = r("ecE5")
    function ej(e) {
      let t,
        r,
        o,
        l,
        i,
        s = (0, a.c)(16),
        { connectorId: c, open: d, onOpenChange: u, onConnected: p } = e
      s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { hostId: ev.iwv }), (s[0] = t)) : (t = s[0])
      let { handleAppConnectOAuthStarted: f, handleAppConnected: g } = (0, eb.t)(t)
      s[1] !== c
        ? ((r = { connectorId: c, redirectAfter: "/shopping", oauthReferrer: "shopping_gmail" }),
          (s[1] = c),
          (s[2] = r))
        : (r = s[2])
      let m = r,
        h = d ? c : void 0
      return (
        s[3] !== m || s[4] !== f
          ? ((o = (e) => {
              f({ ...e, appConnectOptions: m })
            }),
            (s[3] = m),
            (s[4] = f),
            (s[5] = o))
          : (o = s[5]),
        s[6] !== c || s[7] !== g || s[8] !== p
          ? ((l = async () => {
              ;(g(c), await p())
            }),
            (s[6] = c),
            (s[7] = g),
            (s[8] = p),
            (s[9] = l))
          : (l = s[9]),
        s[10] !== m || s[11] !== u || s[12] !== h || s[13] !== o || s[14] !== l
          ? ((i = (0, n.jsx)(ew.Z, {
              app: null,
              connectorId: h,
              appConnectOptions: m,
              hostId: ev.iwv,
              postConnectSource: null,
              waitForConnectedHandler: !0,
              getOAuthResumeContext: eA,
              onOAuthStarted: o,
              onConnected: l,
              onOpenChange: u,
            })),
            (s[10] = m),
            (s[11] = u),
            (s[12] = h),
            (s[13] = o),
            (s[14] = l),
            (s[15] = i))
          : (i = s[15]),
        i
      )
    }
    function eA() {
      return { returnTo: "/shopping" }
    }
    var eT = r("OiCI"),
      eN = r("ygu7"),
      eC = r("CV1W")
    function ek(e) {
      let t,
        r,
        s,
        d,
        p,
        f,
        g,
        m = (0, a.c)(23),
        { status: h, onConnected: x } = e,
        _ = (0, o.gh)(y.u),
        v = (0, c.Zp)(),
        [b, w] = (0, l.useState)(!1),
        [j, A] = (0, l.useState)("idle")
      if ("disconnected" !== h && "reconnect_required" !== h) return null
      let T = "reconnect_required" === h
      m[0] !== v || m[1] !== _
        ? ((t = async () => {
            let e = _.get(eT.tT),
              t = _.get(B.PO).authenticatedUserId
            if (null != e && null != t) {
              A("loading")
              try {
                let r = await (0, eN.NG)(_, e_.$G)
                if (_.get(eT.tT) !== e || _.get(B.PO).authenticatedUserId !== t) return void A("idle")
                if (null == r) return void A("failed")
                ;(await v((0, eC.i4)(r, "apps", e_.$G)), A("idle"))
              } catch {
                A("failed")
              }
            }
          }),
          (m[0] = v),
          (m[1] = _),
          (m[2] = t))
        : (t = m[2])
      let N = t,
        C = b || "loading" === j,
        k = "loading" === j,
        S = T ? void 0 : "dialog"
      return (
        m[3] !== N || m[4] !== T
          ? ((r = () => {
              T ? N() : w(!0)
            }),
            (m[3] = N),
            (m[4] = T),
            (m[5] = r))
          : (r = m[5]),
        m[6] !== T
          ? ((s = T
              ? (0, n.jsx)(i.A, {
                  id: "shopping.forYou.manageGmailConnection",
                  defaultMessage: "Manage Gmail connection",
                })
              : (0, n.jsx)(i.A, { id: "shopping.forYou.connectGmail", defaultMessage: "Connect Gmail" })),
            (m[6] = T),
            (m[7] = s))
          : (s = m[7]),
        m[8] !== C || m[9] !== k || m[10] !== S || m[11] !== r || m[12] !== s
          ? ((d = (0, n.jsx)(u.$, {
              color: "secondary",
              disabled: C,
              loading: k,
              "aria-haspopup": S,
              onClick: r,
              children: s,
            })),
            (m[8] = C),
            (m[9] = k),
            (m[10] = S),
            (m[11] = r),
            (m[12] = s),
            (m[13] = d))
          : (d = m[13]),
        m[14] !== j
          ? ((p =
              "failed" === j
                ? (0, n.jsx)("p", {
                    role: "alert",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.gmailSettingsFailed",
                      defaultMessage: "Couldn’t open Gmail settings. Try again",
                    }),
                  })
                : null),
            (m[14] = j),
            (m[15] = p))
          : (p = m[15]),
        m[16] !== x || m[17] !== b
          ? ((f = (0, n.jsx)(ej, { connectorId: e_.$G, open: b, onOpenChange: w, onConnected: x })),
            (m[16] = x),
            (m[17] = b),
            (m[18] = f))
          : (f = m[18]),
        m[19] !== d || m[20] !== p || m[21] !== f
          ? ((g = (0, n.jsxs)(n.Fragment, { children: [d, p, f] })), (m[19] = d), (m[20] = p), (m[21] = f), (m[22] = g))
          : (g = m[22]),
        g
      )
    }
    function eS(e) {
      let t,
        r,
        o,
        l = (0, a.c)(37),
        { state: c, onLoad: d, onCheck: p, onCancel: f, onOpenEmail: g } = e,
        m = (0, s.A)(),
        h = c.page?.gmail_state ?? c.entryStatus
      if (c.page?.gmail_state === "connected") {
        let e, r, a, o
        ;(l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("h2", {
              className: "heading-md",
              children: (0, n.jsx)(i.A, { id: "shopping.forYou.emailCardTitle", defaultMessage: "Your email offers" }),
            })),
            (l[0] = e))
          : (e = l[0]),
          l[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, n.jsx)(i.A, {
                  id: "shopping.forYou.emailCardDescription",
                  defaultMessage: "Explore offers from your connected Gmail",
                }),
              })),
              (l[1] = r))
            : (r = l[1]),
          l[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(i.A, { id: "shopping.forYou.openEmail", defaultMessage: "View email offers" })),
              (l[2] = a))
            : (a = l[2]),
          l[3] !== g
            ? ((o = (0, n.jsxs)(n.Fragment, {
                children: [e, r, (0, n.jsx)(u.$, { color: "secondary", onClick: g, children: a })],
              })),
              (l[3] = g),
              (l[4] = o))
            : (o = l[4]),
          (t = o))
      } else if (c.loading || c.refreshingGmail) {
        let e, r, a
        ;(l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("p", {
              role: "status",
              children: (0, n.jsx)(i.A, {
                id: "shopping.forYou.loading",
                defaultMessage: "Loading your recommendations…",
              }),
            })),
            (l[5] = e))
          : (e = l[5]),
          l[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" })), (l[6] = r))
            : (r = l[6]),
          l[7] !== f
            ? ((a = (0, n.jsxs)(n.Fragment, {
                children: [e, (0, n.jsx)(u.$, { color: "secondary", onClick: f, children: r })],
              })),
              (l[7] = f),
              (l[8] = a))
            : (a = l[8]),
          (t = a))
      } else if ("checking" === h) {
        let e
        ;(l[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("p", {
              role: "status",
              children: (0, n.jsx)(i.A, {
                id: "shopping.forYou.checking",
                defaultMessage: "Checking your Gmail connection…",
              }),
            })),
            (l[9] = e))
          : (e = l[9]),
          (t = e))
      } else if ("connected" === h) {
        let e, r, a, o, s, p, f
        ;(l[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("h2", {
              className: "heading-md",
              children: (0, n.jsx)(i.A, { id: "shopping.forYou.readyTitle", defaultMessage: "Find deals for you" }),
            })),
            (l[10] = e))
          : (e = l[10]),
          l[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, n.jsx)(i.A, {
                  id: "shopping.forYou.readyDescription",
                  defaultMessage:
                    "Gmail is connected. Find deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (l[11] = r))
            : (r = l[11]),
          l[12] !== c.pageError
            ? ((a = c.pageError
                ? (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.failed",
                      defaultMessage: "We couldn't load these deals. Please try again",
                    }),
                  })
                : null),
              (l[12] = c.pageError),
              (l[13] = a))
            : (a = l[13]),
          l[14] !== c.cancelled
            ? ((o = c.cancelled
                ? (0, n.jsx)("p", {
                    role: "status",
                    children: (0, n.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                  })
                : null),
              (l[14] = c.cancelled),
              (l[15] = o))
            : (o = l[15]),
          l[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(i.A, { id: "shopping.forYou.load", defaultMessage: "Load recommendations" })),
              (l[16] = s))
            : (s = l[16]),
          l[17] !== d
            ? ((p = (0, n.jsx)(u.$, { color: "primary", onClick: d, children: s })), (l[17] = d), (l[18] = p))
            : (p = l[18]),
          l[19] !== a || l[20] !== o || l[21] !== p
            ? ((f = (0, n.jsxs)(n.Fragment, { children: [e, r, a, o, p] })),
              (l[19] = a),
              (l[20] = o),
              (l[21] = p),
              (l[22] = f))
            : (f = l[22]),
          (t = f))
      } else if ("disconnected" === h || "reconnect_required" === h) {
        let e, r, a
        ;(l[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("h2", {
              className: "heading-md",
              children: (0, n.jsx)(i.A, { id: "shopping.forYou.connectTitle", defaultMessage: "Connect Gmail" }),
            })),
            (l[23] = e))
          : (e = l[23]),
          l[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, n.jsx)(i.A, {
                  id: "shopping.forYou.connectDescription",
                  defaultMessage: "Connect Gmail for deals and picks inspired by your purchases and favorite brands",
                }),
              })),
              (l[24] = r))
            : (r = l[24]),
          l[25] !== p || l[26] !== h
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [e, r, (0, n.jsx)(ek, { status: h, onConnected: p })] })),
              (l[25] = p),
              (l[26] = h),
              (l[27] = a))
            : (a = l[27]),
          (t = a))
      } else {
        let e, r, a
        ;(l[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("p", {
              role: "alert",
              children: (0, n.jsx)(i.A, {
                id: "shopping.forYou.checkFailed",
                defaultMessage: "We couldn't check your Gmail connection. Please try again",
              }),
            })),
            (l[28] = e))
          : (e = l[28]),
          l[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(i.A, { id: "shopping.forYou.retry", defaultMessage: "Try again" })), (l[29] = r))
            : (r = l[29]),
          l[30] !== p
            ? ((a = (0, n.jsxs)(n.Fragment, {
                children: [e, (0, n.jsx)(u.$, { color: "secondary", onClick: p, children: r })],
              })),
              (l[30] = p),
              (l[31] = a))
            : (a = l[31]),
          (t = a))
      }
      return (
        l[32] !== m
          ? ((r = m.formatMessage({ id: "shopping.forYou.gmailRegion", defaultMessage: "Gmail" })),
            (l[32] = m),
            (l[33] = r))
          : (r = l[33]),
        l[34] !== t || l[35] !== r
          ? ((o = (0, n.jsx)("section", {
              className: "flex min-w-0 flex-col items-start gap-4 rounded-xl border border-default p-4",
              "aria-label": r,
              children: t,
            })),
            (l[34] = t),
            (l[35] = r),
            (l[36] = o))
          : (o = l[36]),
        o
      )
    }
    var eE = r("i5ac"),
      eI = r.n(eE),
      eP = r("Nwp9")
    let eM = d.object({
        id: d.string().min(1),
        received_at: d.string(),
        expires_at: d.string().nullish(),
        saved_at: d.number(),
      }),
      eR = d.array(eM),
      eO = (0, eP.Kn)(({ accountId: e, userId: t }) => `shopping-for-you-email:${JSON.stringify([e, t])}`, void 0),
      eG = (0, o.T1)(q.GD, (e, { scope: t, derived: r }) => {
        let n = r((t, { scope: r }) => {
          let n = eR.safeParse(r.get(eO, e))
          if (!n.success) return []
          let a = Date.now()
          return n.data
            .filter(
              (e) => e.saved_at <= a && a - e.saved_at < 2592e6 && (!e.expires_at || Date.parse(e.expires_at) > a),
            )
            .slice(0, 50)
        })
        return {
          references$: n,
          toggle(r) {
            let a = t.get(n),
              o = a.find((e) => e.id === r.id || e.id === r.source_id)
            t.set(
              eO,
              e,
              o
                ? a.filter((e) => e.id !== o.id)
                : [
                    { id: r.id, received_at: r.received_at, expires_at: r.expires_at, saved_at: Date.now() },
                    ...a,
                  ].slice(0, 50),
            )
          },
          remove(r) {
            t.set(
              eO,
              e,
              t.get(n).filter((e) => e.id !== r),
            )
          },
        }
      })
    function eD(e, t) {
      e.set(eO, t, [])
    }
    let eH = d.object({ data: d.string().min(1), version: d.string().min(1) }),
      eL = d.object({ detail: d.literal("for_you_updating") }),
      eF = (0, o.T1)(
        q.GD,
        (e, { signal: t, scope: r }) => {
          let n = !0,
            a = null,
            o = null,
            l = null,
            i = null,
            s = !1,
            c = null,
            d = [],
            u = t(eY(), {
              onMount: (t) => {
                ;((n = !1), t(eY()))
                let a = !1,
                  o = r.watch(({ get: r }) => {
                    let n = r(B.PO)
                    n.authLoading ||
                    "chatgpt" !== n.authMethod ||
                    !n.hasChatGptToken ||
                    n.authenticatedAccountId !== e.accountId ||
                    n.authenticatedUserId !== e.userId
                      ? ((a = !1), x(), t(eY()))
                      : a || ((a = !0), y())
                  })
                return () => {
                  ;((n = !0), o(), x(), t(eY()))
                }
              },
            }),
            p = { "ChatGPT-Account-ID": e.accountId },
            f = { accountId: e.accountId, userId: e.userId }
          function g() {
            let t = r.get(B.PO)
            return (
              !n &&
              !t.authLoading &&
              "chatgpt" === t.authMethod &&
              !0 === t.hasChatGptToken &&
              t.authenticatedAccountId === e.accountId &&
              t.authenticatedUserId === e.userId
            )
          }
          function m(e) {
            g() && r.set(u, (t) => ({ ...t, ...e }))
          }
          function h(e) {
            if (e.signal.aborted || !g()) throw new DOMException("The shopping account changed", "AbortError")
          }
          function x() {
            ;(i?.abort(),
              (i = null),
              a?.abort(),
              (a = null),
              o?.abort(),
              l?.abort(),
              (o = null),
              (l = null),
              (c = null),
              (d = []),
              (s = !1))
          }
          async function y() {
            if (!g()) return
            a?.abort()
            let t = new AbortController()
            ;((a = t), m({ entryStatus: "checking" }))
            try {
              let n = await U.Request.safeGet("/shopping/for-you/gmail", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(t),
                signal: t.signal,
              })
              if (!g() || a !== t) return
              if ("disconnected" === n.gmail_state || "reconnect_required" === n.gmail_state) {
                ;(x(), eD(r, e), m({ ...eY(), entryStatus: n.gmail_state }))
                return
              }
              m({ entryStatus: n.gmail_state ?? "unavailable" })
            } catch (e) {
              g() && a === t && !t.signal.aborted && (_(e), m({ entryStatus: "unavailable" }))
            } finally {
              a === t && (a = null)
            }
          }
          function _(t) {
            return (
              t instanceof K.fk &&
              !![401, 403, 404, 409].includes(t.status) &&
              (x(), eD(r, e), m({ ...eY(), entryStatus: "unavailable", pageError: !0 }), !0)
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
                (d = d.filter((r) => r.productId !== t.id || r.offerId !== e)).push({ productId: t.id, offerId: e })
            }
            for (; d.length > 0;) {
              let e = v()
              if (d.length <= 90 && e.excluded_product_ids.length + e.excluded_offer_ids.length <= 16384) break
              d.shift()
            }
          }
          async function w(t = !0, n = !1, y, T) {
            if (!g() || r.get(u).selectingProfile) return
            ;(i?.abort(),
              (i = null),
              a?.abort(),
              (a = null),
              t && (s = !1),
              (c = { refresh: n, preference: y, taskId: T }),
              o?.abort())
            let N = new AbortController()
            ;((o = N),
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
              if (!r.get(u).profileTasksUnavailable) {
                let e = await j(N)
                ;(h(N), e && (t = r.get(u).profileTasks))
              }
              let a = T ?? (t?.selected_task_id == null ? t?.tasks[0]?.task_id : void 0)
              if (null != a) {
                ;(l?.abort(), (l = null), m({ selectingProfile: !0, refreshingGmail: !1 }))
                try {
                  let e = await U.Request.safePost("/shopping/for-you/profile-selection", {
                    requestBody: { task_id: a },
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(N),
                    signal: N.signal,
                  })
                  ;(h(N),
                    (d = []),
                    m({
                      profileTasks: { tasks: t?.tasks ?? [], selected_task_id: e.task_id },
                      page: null,
                      items: [],
                      selectingProfile: !1,
                    }),
                    (c = { refresh: !0, preference: y }))
                } catch (e) {
                  if (g() && o === N && !N.signal.aborted) {
                    let t = e instanceof K.fk && 422 === e.status
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
              let i = await eB(
                () =>
                  void 0 !== y
                    ? U.Request.safePost("/shopping/for-you", {
                        requestBody: {
                          refresh: !0,
                          preference: y,
                          excluded_product_ids: [...new Set(d.map((e) => e.productId))],
                          excluded_offer_ids: [...new Set(d.map((e) => e.offerId))],
                        },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(N),
                        signal: N.signal,
                      })
                    : U.Request.safeGet("/shopping/for-you", {
                        parameters: n || null != a ? { query: { refresh: !0, ...v() } } : void 0,
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(N),
                        signal: N.signal,
                      }),
                N.signal,
              )
              if (!g() || o !== N) return
              if (!el(i) && ("disconnected" === i.gmail_state || "reconnect_required" === i.gmail_state)) {
                ;(x(), eD(r, e), m({ ...eY(), entryStatus: i.gmail_state }))
                return
              }
              "connected" !== i.gmail_state && eD(r, e)
              let _ = a ?? t?.selected_task_id,
                w = i.dream_inputs?.filter(
                  (e) => "shopping_profile_v1_retrieval" === e.source || "shopping_profile_v1_ranking" === e.source,
                )
              if (_ && i.snapshot_id && (!w?.length || w.some((e) => e.task_id !== _))) {
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
              let C = r.get(u).page
              null != c &&
                "connected" === i.gmail_state &&
                i.needs_gmail_refresh &&
                !i.snapshot_id &&
                C?.gmail_state === "connected" &&
                C.snapshot_id &&
                (i = { ...C, needs_gmail_refresh: !0 })
              let k = (i = ez(i)).items ?? []
              ;(b(k),
                m({
                  page: i,
                  items: k,
                  loading: !1,
                  recommendationsUpdated: !1,
                  entryStatus: i.gmail_state ?? "unavailable",
                }),
                "connected" === i.gmail_state && i.needs_gmail_refresh && !s && A())
            } catch (e) {
              !g() || o !== N || N.signal.aborted || _(e) || m({ loading: !1, pageError: !0 })
            } finally {
              o === N && ((o = null), m({ selectingProfile: !1 }))
            }
          }
          async function j(e) {
            m({ loadingProfileTasks: !0 })
            try {
              let t = await U.Request.safeGet("/shopping/for-you/profile-tasks", {
                additionalHeaders: p,
                expectedIdentity: f,
                assertRequestCurrent: () => h(e),
                signal: e.signal,
              })
              return (h(e), m({ profileTasks: t, profileTasksUnavailable: !1, profileTaskError: null }), !0)
            } catch (t) {
              if ((h(e), t instanceof K.fk && (403 === t.status || 404 === t.status)))
                return (m({ profileTasks: null, profileTasksUnavailable: !0, profileTaskError: null }), !1)
              if (
                (m({ profileTasks: null, profileTaskError: "list" }),
                t instanceof K.fk && (429 === t.status || t.status >= 500))
              )
                return !1
              throw t
            } finally {
              e.signal.aborted || m({ loadingProfileTasks: !1 })
            }
          }
          async function A() {
            if (!g() || l || r.get(u).selectingProfile) return
            ;(o?.abort(), (o = null), (s = !0))
            let t = new AbortController()
            ;((l = t), m({ refreshingGmail: !0, loading: !1, loadingMore: !1, gmailError: !1, cancelled: !1 }))
            try {
              let n = await eB(
                () =>
                  U.Request.safePost("/shopping/for-you/gmail-refresh", {
                    additionalHeaders: p,
                    expectedIdentity: f,
                    assertRequestCurrent: () => h(t),
                    signal: t.signal,
                  }),
                t.signal,
              )
              if (!g() || l !== t) return
              let a = r.get(u)
              if (((l = null), "unavailable" === n.gmail_state || null == n.gmail_state))
                return void m({ refreshingGmail: !1, gmailError: !0, entryStatus: "unavailable" })
              if ("connected" !== n.gmail_state) {
                ;(x(),
                  eD(r, e),
                  m({ ...eY(), entryStatus: n.gmail_state ?? "unavailable", page: { gmail_state: n.gmail_state } }),
                  el(a.page) && (await w(!1)))
                return
              }
              ;(m({
                refreshingGmail: !1,
                entryStatus: n.gmail_state,
                page: {
                  ...a.page,
                  gmail_state: n.gmail_state,
                  email_offers: n.email_offers,
                  email_offers_status: n.email_offers_status,
                  shopping_signals_status: n.shopping_signals_status,
                  refreshed_at: n.refreshed_at,
                  needs_gmail_refresh: !1,
                },
              }),
                null == c ||
                (!c.refresh &&
                  (a.items.length || a.page?.recommendations?.length || a.page?.currency_assumed_items?.length))
                  ? n.updated &&
                    (a.page?.snapshot_id ||
                      a.page?.planned_queries?.length ||
                      a.page?.items?.length ||
                      a.page?.recommendations?.length ||
                      a.page?.currency_assumed_items?.length) &&
                    m({ recommendationsUpdated: !0 })
                  : await w(!1, c.refresh, c.preference, c.taskId))
            } catch (e) {
              !g() || l !== t || t.signal.aborted || _(e) || m({ gmailError: !0 })
            } finally {
              l === t && ((l = null), m({ refreshingGmail: !1 }))
            }
          }
          return {
            state$: u,
            checkGmail: y,
            loadFirst: w,
            loadMore: async function () {
              if (!g()) return
              let t = r.get(u)
              if (!t.page?.snapshot_id || !t.page.next_cursor || t.loading || t.loadingMore) return
              let n = new AbortController()
              ;((o = n), m({ loadingMore: !0, pageError: !1, cancelled: !1 }))
              try {
                let a = await eB(
                    () =>
                      U.Request.safeGet("/shopping/for-you", {
                        parameters: { query: { cursor: t.page?.next_cursor } },
                        additionalHeaders: p,
                        expectedIdentity: f,
                        assertRequestCurrent: () => h(n),
                        signal: n.signal,
                      }),
                    n.signal,
                  ),
                  l = r.get(u).page
                if (!g() || o !== n || null == l || l?.snapshot_id !== t.page.snapshot_id) return
                if (!el(a) && ("disconnected" === a.gmail_state || "reconnect_required" === a.gmail_state)) {
                  ;(x(), eD(r, e), m({ ...eY(), entryStatus: a.gmail_state }))
                  return
                }
                if (t.page.snapshot_id !== a.snapshot_id)
                  return void m({ loadingMore: !1, pageError: !0, recommendationsUpdated: !0 })
                let i = ez({
                    ...a,
                    items: eI()([...(t.page.items ?? []), ...(a.items ?? [])], "id"),
                    email_offers: l.email_offers,
                    email_offers_status: l.email_offers_status,
                    shopping_signals_status: l.shopping_signals_status,
                    refreshed_at: l.refreshed_at,
                    needs_gmail_refresh: l.needs_gmail_refresh,
                  }),
                  s = i.items ?? []
                ;(b(s), m({ page: i, items: s, loadingMore: !1 }))
              } catch (e) {
                !g() || o !== n || n.signal.aborted || _(e) || m({ loadingMore: !1, pageError: !0 })
              } finally {
                o === n && (o = null)
              }
            },
            refreshGmail: A,
            loadProfileTasks: async function () {
              if (!g() || r.get(u).loading || r.get(u).selectingProfile) return
              i?.abort()
              let e = new AbortController()
              i = e
              try {
                await j(e)
              } catch (t) {
                !e.signal.aborted && g() && _(t)
              } finally {
                i === e && (i = null)
              }
            },
            selectProfileTask: (e, t) => w(!0, !0, t?.trim(), e),
            refresh: (e) => w(!0, !0, e?.trim()),
            cancel: () => {
              let e = r.get(u).selectingProfile
              ;(a?.abort(),
                (a = null),
                o?.abort(),
                l?.abort(),
                (o = null),
                (l = null),
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
    function eY() {
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
    function ez(e) {
      return {
        ...e,
        items: e.items?.filter((e) => eH.safeParse(e.product.product_lookup_key).success),
        recommendations: e.recommendations?.filter((e) => eH.safeParse(e.product.product_lookup_key).success),
        currency_assumed_items: e.currency_assumed_items?.filter(
          (e) => eH.safeParse(e.product.product_lookup_key).success,
        ),
      }
    }
    async function eB(e, t) {
      for (; !t.aborted;)
        try {
          return await e()
        } catch (e) {
          if (
            !(function (e) {
              if (!(e instanceof K.fk) || 429 !== e.status) return !1
              if (null != e.errorCode) return "for_you_updating" === e.errorCode
              try {
                return eL.safeParse(JSON.parse(e.message)).success
              } catch {
                return !1
              }
            })(e)
          )
            throw e
          await new Promise((e, r) => {
            let n = () => {
                ;(clearTimeout(a), r(new DOMException("The shopping request was cancelled", "AbortError")))
              },
              a = setTimeout(() => {
                ;(t.removeEventListener("abort", n), e())
              }, 5e3)
            ;(t.addEventListener("abort", n, { once: !0 }), t.aborted && n())
          })
        }
      throw t.reason
    }
    var eU = r("uuN8"),
      eq = r("okCa"),
      eK = r("aepO")
    function eV(e) {
      let t,
        r,
        o,
        c,
        d,
        p,
        f,
        m,
        h,
        x,
        y,
        _ = (0, a.c)(69),
        {
          offers: v,
          unavailable: b,
          updatedAt: w,
          busy: j,
          error: A,
          savedIds: T,
          onToggleSaved: N,
          onRefresh: C,
          onStop: k,
        } = e,
        S = (0, s.A)(),
        [E, I] = (0, l.useState)(""),
        [P, M] = (0, l.useState)("all")
      if (
        _[0] !== j ||
        _[1] !== P ||
        _[2] !== A ||
        _[3] !== S ||
        _[4] !== v ||
        _[5] !== C ||
        _[6] !== k ||
        _[7] !== N ||
        _[8] !== E ||
        _[9] !== T ||
        _[10] !== b ||
        _[11] !== w
      ) {
        let e, a, l, s, x, y, R, O, G
        ;(_[21] !== P || _[22] !== E
          ? ((e = (e) =>
              ("all" === P || e.category === P) &&
              `${e.title} ${e.merchant} ${e.category}`.toLocaleLowerCase().includes(E.trim().toLocaleLowerCase())),
            (_[21] = P),
            (_[22] = E),
            (_[23] = e))
          : (e = _[23]),
          (t = v.filter(e)),
          (r = "flex flex-col gap-6"),
          (o = "shopping-email-title"),
          _[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)("h2", {
                id: "shopping-email-title",
                className: "heading-md",
                children: (0, n.jsx)(i.A, {
                  id: "shopping.forYou.email.title",
                  defaultMessage: "Deals from your inbox",
                }),
              })),
              (_[24] = a))
            : (a = _[24]),
          _[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, n.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  a,
                  (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.email.description",
                      defaultMessage: "Promotions from your recent emails. Offers are not verified",
                    }),
                  }),
                ],
              })),
              (_[25] = l))
            : (l = _[25]),
          _[26] !== S || _[27] !== w
            ? ((s = w
                ? (0, n.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.email.updated",
                      defaultMessage: "Updated {time}",
                      values: { time: S.formatTime(w) },
                    }),
                  })
                : null),
              (_[26] = S),
              (_[27] = w),
              (_[28] = s))
            : (s = _[28]),
          _[29] !== s
            ? ((c = (0, n.jsxs)("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: [l, s],
              })),
              (_[29] = s),
              (_[30] = c))
            : (c = _[30]),
          _[31] !== j || _[32] !== C || _[33] !== k
            ? ((x = j
                ? (0, n.jsx)(u.$, {
                    color: "secondary",
                    onClick: k,
                    children: (0, n.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                  })
                : (0, n.jsx)(u.$, {
                    color: "secondary",
                    onClick: C,
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.email.find",
                      defaultMessage: "Find email offers",
                    }),
                  })),
              (_[31] = j),
              (_[32] = C),
              (_[33] = k),
              (_[34] = x))
            : (x = _[34]),
          _[35] !== j
            ? ((y = j
                ? (0, n.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.email.loading",
                      defaultMessage: "Finding email offers…",
                    }),
                  })
                : null),
              (_[35] = j),
              (_[36] = y))
            : (y = _[36]),
          _[37] !== x || _[38] !== y
            ? ((d = (0, n.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [x, y] })),
              (_[37] = x),
              (_[38] = y),
              (_[39] = d))
            : (d = _[39]),
          _[40] !== A || _[41] !== b
            ? ((p =
                A || b
                  ? (0, n.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-secondary",
                      children: (0, n.jsx)(i.A, {
                        id: "shopping.forYou.email.failed",
                        defaultMessage: "Email offers couldn't be loaded. Try again",
                      }),
                    })
                  : null),
              (_[40] = A),
              (_[41] = b),
              (_[42] = p))
            : (p = _[42]),
          _[43] !== S
            ? ((R = S.formatMessage({
                id: "shopping.forYou.email.searchLabel",
                defaultMessage: "Search email offers",
              })),
              (_[43] = S),
              (_[44] = R))
            : (R = _[44]),
          _[45] !== S
            ? ((O = S.formatMessage({
                id: "shopping.forYou.email.searchPlaceholder",
                defaultMessage: "Search offers or brands",
              })),
              (_[45] = S),
              (_[46] = O))
            : (O = _[46]),
          _[47] !== E || _[48] !== R || _[49] !== O
            ? ((f = (0, n.jsx)(eq.s, {
                id: "shopping-email-search",
                label: R,
                placeholder: O,
                searchQuery: E,
                onSearchQueryChange: I,
                autoFocus: !1,
              })),
              (_[47] = E),
              (_[48] = R),
              (_[49] = O),
              (_[50] = f))
            : (f = _[50]),
          _[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = Object.entries(eZ).map(e$)), (_[51] = G))
            : (G = _[51]),
          _[52] !== P
            ? ((m = (0, n.jsx)(g.t, { variant: "filter", scrollable: !0, selectedKey: P, onSelect: M, tabs: G })),
              (_[52] = P),
              (_[53] = m))
            : (m = _[53]),
          (h =
            t.length > 0
              ? (0, n.jsx)("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) =>
                    (0, n.jsx)(
                      eW,
                      { offer: e, saved: T.has(e.id) || T.has(e.source_id), onToggleSaved: () => N(e) },
                      e.id,
                    ),
                  ),
                })
              : null),
          (_[0] = j),
          (_[1] = P),
          (_[2] = A),
          (_[3] = S),
          (_[4] = v),
          (_[5] = C),
          (_[6] = k),
          (_[7] = N),
          (_[8] = E),
          (_[9] = T),
          (_[10] = b),
          (_[11] = w),
          (_[12] = t),
          (_[13] = r),
          (_[14] = o),
          (_[15] = c),
          (_[16] = d),
          (_[17] = p),
          (_[18] = f),
          (_[19] = m),
          (_[20] = h))
      } else
        ((t = _[12]),
          (r = _[13]),
          (o = _[14]),
          (c = _[15]),
          (d = _[16]),
          (p = _[17]),
          (f = _[18]),
          (m = _[19]),
          (h = _[20]))
      return (
        _[54] !== j || _[55] !== A || _[56] !== t.length || _[57] !== b
          ? ((x =
              0 !== t.length || j || A || b
                ? null
                : (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.forYou.email.empty",
                      defaultMessage: "No email offers match right now",
                    }),
                  })),
            (_[54] = j),
            (_[55] = A),
            (_[56] = t.length),
            (_[57] = b),
            (_[58] = x))
          : (x = _[58]),
        _[59] !== r ||
        _[60] !== o ||
        _[61] !== c ||
        _[62] !== d ||
        _[63] !== p ||
        _[64] !== f ||
        _[65] !== m ||
        _[66] !== h ||
        _[67] !== x
          ? ((y = (0, n.jsxs)("section", { className: r, "aria-labelledby": o, children: [c, d, p, f, m, h, x] })),
            (_[59] = r),
            (_[60] = o),
            (_[61] = c),
            (_[62] = d),
            (_[63] = p),
            (_[64] = f),
            (_[65] = m),
            (_[66] = h),
            (_[67] = x),
            (_[68] = y))
          : (y = _[68]),
        y
      )
    }
    function e$(e) {
      let [t, r] = e
      return { key: t, name: (0, n.jsx)(i.A, { ...r }) }
    }
    function eW(e) {
      let t,
        r,
        o,
        c,
        d,
        p,
        f,
        g,
        m,
        h,
        x,
        y,
        _,
        v,
        b,
        w,
        j,
        A = (0, a.c)(44),
        { offer: T, saved: N, onToggleSaved: C } = e,
        k = (0, s.A)(),
        [S, E] = (0, l.useState)(!1),
        I = T.offer_url && T.image?.source_id === T.source_id ? T.image : null
      A[0] !== T.offer_url ? ((t = L(T.offer_url)), (A[0] = T.offer_url), (A[1] = t)) : (t = A[1])
      let P = t
      A[2] !== T.source_url ? ((r = L(T.source_url)), (A[2] = T.source_url), (A[3] = r)) : (r = A[3])
      let O = r
      return (
        A[4] !== T.merchant
          ? ((o = (0, n.jsx)("p", { className: "text-xs text-secondary", children: T.merchant })),
            (A[4] = T.merchant),
            (A[5] = o))
          : (o = A[5]),
        A[6] !== T.title
          ? ((c = (0, n.jsx)("h3", { className: "text-base font-semibold wrap-anywhere", children: T.title })),
            (A[6] = T.title),
            (A[7] = c))
          : (c = A[7]),
        A[8] !== o || A[9] !== c
          ? ((d = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [o, c] })),
            (A[8] = o),
            (A[9] = c),
            (A[10] = d))
          : (d = A[10]),
        A[11] !== N
          ? ((p = N
              ? (0, n.jsx)(i.A, { id: "shopping.forYou.email.unsave", defaultMessage: "Remove" })
              : (0, n.jsx)(i.A, { id: "shopping.forYou.email.save", defaultMessage: "Save" })),
            (A[11] = N),
            (A[12] = p))
          : (p = A[12]),
        A[13] !== C || A[14] !== N || A[15] !== p
          ? ((f = (0, n.jsx)(u.$, {
              color: "secondary",
              size: "actionSm",
              "aria-pressed": N,
              onClick: C,
              children: p,
            })),
            (A[13] = C),
            (A[14] = N),
            (A[15] = p),
            (A[16] = f))
          : (f = A[16]),
        A[17] !== d || A[18] !== f
          ? ((g = (0, n.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [d, f] })),
            (A[17] = d),
            (A[18] = f),
            (A[19] = g))
          : (g = A[19]),
        A[20] !== I
          ? ((m = I ? (0, n.jsx)(eQ, { image: I }, `${I.source_id}:${I.url}`) : null), (A[20] = I), (A[21] = m))
          : (m = A[21]),
        A[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsx)(M.E, {
              variant: "warning",
              children: (0, n.jsx)(i.A, {
                id: "shopping.forYou.email.unverified",
                defaultMessage: "Not verified · Email source",
              }),
            })),
            (A[22] = h))
          : (h = A[22]),
        A[23] !== k || A[24] !== T.expires_at
          ? ((x = T.expires_at
              ? (0, n.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, n.jsx)(i.A, {
                    id: "shopping.forYou.email.expires",
                    defaultMessage: "Email says offer ends {date}",
                    values: { date: k.formatDate(T.expires_at, { month: "short", day: "numeric" }) },
                  }),
                })
              : null),
            (A[23] = k),
            (A[24] = T.expires_at),
            (A[25] = x))
          : (x = A[25]),
        A[26] !== O
          ? ((y = O
              ? (0, n.jsx)(R.G, {
                  href: O,
                  initiator: "markdown_link_click",
                  appearance: "secondary",
                  children: (0, n.jsx)(i.A, { id: "shopping.forYou.email.source", defaultMessage: "From your email" }),
                })
              : null),
            (A[26] = O),
            (A[27] = y))
          : (y = A[27]),
        A[28] !== k || A[29] !== T.coupon_code
          ? ((_ = T.coupon_code
              ? (0, n.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-2",
                  children: [
                    (0, n.jsx)("code", { className: "min-w-0 text-sm break-all select-text", children: T.coupon_code }),
                    (0, n.jsx)(eU.i, {
                      ariaLabel: k.formatMessage({
                        id: "shopping.forYou.email.copy",
                        defaultMessage: "Copy coupon code",
                      }),
                      onCopy: async () => {
                        let e = await (0, eK.E)(T.coupon_code ?? "")
                        return (E(!e), e)
                      },
                    }),
                  ],
                })
              : null),
            (A[28] = k),
            (A[29] = T.coupon_code),
            (A[30] = _))
          : (_ = A[30]),
        A[31] !== S
          ? ((v = S
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-secondary",
                  children: (0, n.jsx)(i.A, {
                    id: "shopping.forYou.email.copyError",
                    defaultMessage: "Couldn't copy the code. Try again",
                  }),
                })
              : null),
            (A[31] = S),
            (A[32] = v))
          : (v = A[32]),
        A[33] !== P
          ? ((b = P
              ? (0, n.jsx)(R.G, {
                  href: P,
                  initiator: "markdown_link_click",
                  appearance: "button",
                  children: (0, n.jsx)(i.A, { id: "shopping.forYou.email.view", defaultMessage: "View offer" }),
                })
              : null),
            (A[33] = P),
            (A[34] = b))
          : (b = A[34]),
        A[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, n.jsx)(i.A, {
                id: "shopping.forYou.email.terms",
                defaultMessage: "Advertised in email. Terms and eligibility apply",
              }),
            })),
            (A[35] = w))
          : (w = A[35]),
        A[36] !== x || A[37] !== y || A[38] !== _ || A[39] !== v || A[40] !== b || A[41] !== g || A[42] !== m
          ? ((j = (0, n.jsxs)("article", {
              className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
              children: [g, m, h, x, y, _, v, b, w],
            })),
            (A[36] = x),
            (A[37] = y),
            (A[38] = _),
            (A[39] = v),
            (A[40] = b),
            (A[41] = g),
            (A[42] = m),
            (A[43] = j))
          : (j = A[43]),
        j
      )
    }
    function eQ(e) {
      let t,
        r,
        o,
        c = (0, a.c)(8),
        { image: d } = e,
        p = (0, s.A)(),
        [f, g] = (0, l.useState)("idle")
      c[0] !== d.url
        ? ((r = L(d.url)), (t = r?.startsWith("https:")), (c[0] = d.url), (c[1] = t), (c[2] = r))
        : ((t = c[1]), (r = c[2]))
      let m = t
      return (
        c[3] !== m || c[4] !== p || c[5] !== f || c[6] !== r
          ? ((o = (0, n.jsx)("div", {
              className:
                "flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-artifact-photo-paper",
              children:
                "requested" === f && m
                  ? (0, n.jsx)("img", {
                      src: r ?? void 0,
                      alt: p.formatMessage({
                        id: "shopping.forYou.email.image",
                        defaultMessage: "Promotional email image",
                      }),
                      referrerPolicy: "no-referrer",
                      className: "block h-full w-full object-contain",
                      onError: () => g("failed"),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("p", {
                          className: "text-xs text-secondary",
                          children:
                            "failed" !== f && m
                              ? (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageConsent",
                                  defaultMessage: "Remote email image",
                                })
                              : (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.email.imageUnavailable",
                                  defaultMessage: "Image unavailable",
                                }),
                        }),
                        m
                          ? (0, n.jsx)(u.$, {
                              color: "secondary",
                              size: "actionSm",
                              onClick: () => g("requested"),
                              children: (0, n.jsx)(i.A, {
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
            (c[6] = r),
            (c[7] = o))
          : (o = c[7]),
        o
      )
    }
    let eZ = (0, v.YK)({
      all: { id: "shopping.forYou.email.category.all", defaultMessage: "All" },
      clothing: { id: "shopping.forYou.email.category.clothing", defaultMessage: "Clothing" },
      shoes: { id: "shopping.forYou.email.category.shoes", defaultMessage: "Shoes" },
      home: { id: "shopping.forYou.email.category.home", defaultMessage: "Home" },
      tech: { id: "shopping.forYou.email.category.tech", defaultMessage: "Tech" },
    })
    var eX = r("Fmx8"),
      eJ = r("ahQQ"),
      e0 = r("IFqo"),
      e1 = r("FFnF")
    let e2 = (0, eX.ER)("/library", "?tab=favorites")
    function e3(e) {
      let t,
        r,
        l,
        i,
        s = (0, a.c)(7),
        { accountId: c, userId: d } = e,
        u = (0, o.Ul)(k.PO),
        p = (0, o.Ul)(O._),
        f = (0, D.Fj)("2347841422")
      return !u.authLoading &&
        "chatgpt" === u.authMethod &&
        u.hasChatGptToken &&
        u.authenticatedAccountId === c &&
        u.authenticatedUserId === d &&
        null != u.userId &&
        p &&
        f.get("enabled_entity_categories", []).includes("product_rationale_and_reviews")
        ? (s[0] !== c || s[1] !== u.userId
            ? ((t = { accountId: c, userId: u.userId }), (s[0] = c), (s[1] = u.userId), (s[2] = t))
            : (t = s[2]),
          s[3] === Symbol.for("react.memo_cache_sentinel") ? ((r = { embedded: !0 }), (s[3] = r)) : (r = s[3]),
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, n.jsx)(o.Ui, {
                scope: eJ.vn,
                value: r,
                children: (0, n.jsx)(o.Ui, { scope: eJ.Qy, value: e2, children: (0, n.jsx)(e4, {}) }),
              })),
              (s[4] = l))
            : (l = s[4]),
          s[5] !== t
            ? ((i = (0, n.jsx)(o.Ui, { scope: eJ.oD, value: t, children: l })), (s[5] = t), (s[6] = i))
            : (i = s[6]),
          i)
        : null
    }
    function e4() {
      let e,
        t,
        r,
        l,
        s,
        c,
        d,
        p,
        f,
        g = (0, a.c)(28),
        m = (0, o.Ul)(eX.i3),
        h = (0, o.Ul)(eX.AH)
      return (
        g[0] !== h || g[1] !== m
          ? ((e = h?.filter(e6)),
            (t = "flex flex-col gap-4"),
            g[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, n.jsx)("h2", {
                  className: "heading-md",
                  children: (0, n.jsx)(i.A, { id: "shopping.forYou.savedProducts", defaultMessage: "Saved products" }),
                })),
                (g[8] = r))
              : (r = g[8]),
            g[9] !== m.isPending
              ? ((l = m.isPending
                  ? (0, n.jsx)("p", {
                      className: "text-sm text-secondary",
                      role: "status",
                      children: (0, n.jsx)(i.A, {
                        id: "shopping.forYou.loadingSavedProducts",
                        defaultMessage: "Loading saved products…",
                      }),
                    })
                  : null),
                (g[9] = m.isPending),
                (g[10] = l))
              : (l = g[10]),
            g[11] !== m
              ? ((s = m.isError
                  ? (0, n.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      role: "alert",
                      children: [
                        (0, n.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.savedProductsFailed",
                            defaultMessage: "Couldn't load saved products",
                          }),
                        }),
                        (0, n.jsx)(u.$, {
                          color: "secondary",
                          onClick: () => void m.refetch(),
                          children: (0, n.jsx)(i.A, {
                            id: "shopping.forYou.retrySavedProducts",
                            defaultMessage: "Try again",
                          }),
                        }),
                      ],
                    })
                  : null),
                (g[11] = m),
                (g[12] = s))
              : (s = g[12]),
            (c = e?.length
              ? (0, n.jsx)("div", {
                  className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
                  children: e.map(e5),
                })
              : null),
            (g[0] = h),
            (g[1] = m),
            (g[2] = e),
            (g[3] = t),
            (g[4] = r),
            (g[5] = l),
            (g[6] = s),
            (g[7] = c))
          : ((e = g[2]), (t = g[3]), (r = g[4]), (l = g[5]), (s = g[6]), (c = g[7])),
        g[13] !== e?.length || g[14] !== m.hasNextPage || g[15] !== m.isError || g[16] !== m.isPending
          ? ((d =
              e?.length || m.isPending || m.isError || m.hasNextPage
                ? null
                : (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(i.A, {
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
              ? (0, n.jsx)(u.$, {
                  color: "secondary",
                  className: "self-start",
                  disabled: m.isFetching,
                  loading: m.isFetchingNextPage,
                  onClick: () => void m.fetchNextPage({ cancelRefetch: !1 }),
                  children: (0, n.jsx)(i.A, {
                    id: "shopping.forYou.moreSavedProducts",
                    defaultMessage: "Load more saved products",
                  }),
                })
              : null),
            (g[18] = m),
            (g[19] = p))
          : (p = g[19]),
        g[20] !== t || g[21] !== r || g[22] !== l || g[23] !== s || g[24] !== c || g[25] !== d || g[26] !== p
          ? ((f = (0, n.jsxs)("section", { className: t, children: [r, l, s, c, d, p] })),
            (g[20] = t),
            (g[21] = r),
            (g[22] = l),
            (g[23] = s),
            (g[24] = c),
            (g[25] = d),
            (g[26] = p),
            (g[27] = f))
          : (f = g[27]),
        f
      )
    }
    function e5(e) {
      return (0, n.jsx)(e7, { entry: e }, e.node.id)
    }
    function e6(e) {
      return e.node.saved_entity?.saved_target.sidebar_params.category === "product_rationale_and_reviews"
    }
    function e7(e) {
      let t,
        r,
        l,
        i,
        s = (0, a.c)(15),
        { entry: c } = e,
        d = (0, o.gh)(q.GD),
        u = (0, o.gh)(eJ.oD),
        p = c.node.saved_entity,
        f = u.value.userId
      return null == p || null == f
        ? null
        : (s[0] !== p || s[1] !== d
            ? ((t = (e) => {
                let t = e?.currentTarget,
                  r = d.get(k.PO)
                ;(0, e1.K)(d, p, "grid", () => {
                  let e = d.get(k.PO)
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
              (s[0] = p),
              (s[1] = d),
              (s[2] = t))
            : (t = s[2]),
          s[3] !== p.display_data || s[4] !== p.origin || s[5] !== p.saved_target
            ? ((r = { saved_target: p.saved_target, display_data: p.display_data, origin: p.origin }),
              (s[3] = p.display_data),
              (s[4] = p.origin),
              (s[5] = p.saved_target),
              (s[6] = r))
            : (r = s[6]),
          s[7] !== u.value.accountId || s[8] !== r || s[9] !== f
            ? ((l = [
                {
                  key: "favorite",
                  component: (0, n.jsx)(H.ProductFavoriteAction, {
                    accountId: u.value.accountId,
                    userId: f,
                    conversationId: void 0,
                    messageId: void 0,
                    request: r,
                    surface: "product_card",
                  }),
                },
              ]),
              (s[7] = u.value.accountId),
              (s[8] = r),
              (s[9] = f),
              (s[10] = l))
            : (l = s[10]),
          s[11] !== c || s[12] !== t || s[13] !== l
            ? ((i = (0, n.jsx)(e0.H$, { entry: c, onOpen: t, actions: l })),
              (s[11] = c),
              (s[12] = t),
              (s[13] = l),
              (s[14] = i))
            : (i = s[14]),
          i)
    }
    var e8 = r("ZZgR")
    function e9(e) {
      let t,
        r,
        o,
        c,
        d,
        p,
        f,
        g,
        m,
        h,
        x,
        y,
        _,
        v,
        b,
        w,
        j,
        A,
        T,
        N,
        C,
        k,
        S,
        E,
        I,
        P,
        M,
        R = (0, a.c)(98),
        { state: O, onLoad: G, onSelect: D } = e,
        H = (0, s.A)(),
        [L, F] = (0, l.useState)(!1),
        [Y, z] = (0, l.useState)("")
      if (
        R[0] !== H ||
        R[1] !== G ||
        R[2] !== D ||
        R[3] !== L ||
        R[4] !== Y ||
        R[5] !== O.loading ||
        R[6] !== O.loadingMore ||
        R[7] !== O.loadingProfileTasks ||
        R[8] !== O.page ||
        R[9] !== O.profileTasks?.selected_task_id ||
        R[10] !== O.profileTasks?.tasks ||
        R[11] !== O.profileTasksUnavailable ||
        R[12] !== O.refreshingGmail ||
        R[13] !== O.selectingProfile
      ) {
        h = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a,
            l,
            s,
            T,
            N = O.profileTasks?.tasks ?? []
          R[32] !== Y
            ? ((e = (e) => `${e.task_id} ${e.schema_version}`.toLowerCase().includes(Y.trim().toLowerCase())),
              (R[32] = Y),
              (R[33] = e))
            : (e = R[33])
          let C = N.filter(e)
          if (O.profileTasksUnavailable) {
            h = null
            break e
          }
          let k = O.loading || O.loadingMore || O.refreshingGmail || O.selectingProfile
          ;(R[34] !== O.page || R[35] !== O.profileTasks?.selected_task_id
            ? ((a = O.page?.snapshot_id ? O.page.dream_inputs?.find(te)?.task_id : O.profileTasks?.selected_task_id),
              (R[34] = O.page),
              (R[35] = O.profileTasks?.selected_task_id),
              (R[36] = a))
            : (a = R[36]),
            (c = a),
            (m = "flex flex-col items-start gap-2"),
            (o = e8.A),
            (w = L),
            R[37] !== G
              ? ((j = (e) => {
                  ;(F(e), e && (z(""), G()))
                }),
                (R[37] = G),
                (R[38] = j))
              : (j = R[38]),
            (A = k),
            (p = "panelWide"),
            (f = "max-w-[calc(100vw-2rem)]"),
            R[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, n.jsx)(i.A, { id: "shopping.profileTasks.label", defaultMessage: "Shopping Profile task" })),
                (R[39] = l))
              : (l = R[39]),
            R[40] !== c
              ? ((s = c ? (0, n.jsx)("span", { className: "font-mono", children: c.slice(0, 8) }) : null),
                (R[40] = c),
                (R[41] = s))
              : (s = R[41]),
            R[42] !== k || R[43] !== s
              ? ((g = (0, n.jsxs)(u.$, { color: "secondary", disabled: k, children: [l, s] })),
                (R[42] = k),
                (R[43] = s),
                (R[44] = g))
              : (g = R[44]),
            (r = e8.G.Root),
            R[45] !== H
              ? ((v = H.formatMessage({
                  id: "shopping.profileTasks.listLabel",
                  defaultMessage: "Recent Shopping Profile tasks",
                })),
                (R[45] = H),
                (R[46] = v))
              : (v = R[46]),
            R[47] !== H
              ? ((T = H.formatMessage({
                  id: "shopping.profileTasks.search",
                  defaultMessage: "Search task ID or schema version",
                })),
                (R[47] = H),
                (R[48] = T))
              : (T = R[48]),
            R[49] !== Y || R[50] !== T
              ? ((b = (0, n.jsx)(e8.G.Input, { value: Y, onValueChange: z, placeholder: T })),
                (R[49] = Y),
                (R[50] = T),
                (R[51] = b))
              : (b = R[51]),
            (t = e8.G.List),
            R[52] !== O.loadingProfileTasks
              ? ((d = O.loadingProfileTasks
                  ? (0, n.jsx)("p", {
                      className: "px-3 py-2 text-sm text-secondary",
                      role: "status",
                      children: (0, n.jsx)(i.A, {
                        id: "shopping.profileTasks.loading",
                        defaultMessage: "Loading tasks…",
                      }),
                    })
                  : null),
                (R[52] = O.loadingProfileTasks),
                (R[53] = d))
              : (d = R[53]),
            R[54] !== O.loadingProfileTasks || R[55] !== O.profileTasks?.tasks
              ? ((x =
                  O.loadingProfileTasks || O.profileTasks?.tasks.length !== 0
                    ? null
                    : (0, n.jsx)("p", {
                        className: "px-3 py-2 text-sm text-secondary",
                        children: (0, n.jsx)(i.A, {
                          id: "shopping.profileTasks.empty",
                          defaultMessage: "No saved Shopping Profile outputs found in recent history",
                        }),
                      })),
                (R[54] = O.loadingProfileTasks),
                (R[55] = O.profileTasks?.tasks),
                (R[56] = x))
              : (x = R[56]),
            (y =
              !O.loadingProfileTasks && N.length > 0 && 0 === C.length
                ? (0, n.jsx)("p", {
                    className: "px-3 py-2 text-sm text-secondary",
                    role: "status",
                    children: (0, n.jsx)(i.A, {
                      id: "shopping.profileTasks.noMatches",
                      defaultMessage: "No matching tasks",
                    }),
                  })
                : null),
            (_ = O.loadingProfileTasks
              ? null
              : C.map((e) =>
                  (0, n.jsx)(
                    e8.G.Item,
                    {
                      value: `${e.task_id} ${e.schema_version}`,
                      checked: e.task_id === c,
                      onSelect: () => {
                        ;(F(!1), D(e.task_id))
                      },
                      children: (0, n.jsxs)("div", {
                        className: "flex min-w-0 flex-col gap-1 whitespace-normal",
                        children: [
                          (0, n.jsxs)("span", {
                            children: [
                              H.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                              e.task_id === N[0]?.task_id
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      " ",
                                      (0, n.jsx)(i.A, { id: "shopping.profileTasks.latest", defaultMessage: "Latest" }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, n.jsx)("span", {
                            className: "text-xs text-secondary",
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.profileTasks.signalCount",
                              defaultMessage: "{schema} · {count, plural, one {# signal} other {# signals}}",
                              values: { schema: e.schema_version, count: e.signal_count },
                            }),
                          }),
                          (0, n.jsx)("span", {
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
        ;((R[0] = H),
          (R[1] = G),
          (R[2] = D),
          (R[3] = L),
          (R[4] = Y),
          (R[5] = O.loading),
          (R[6] = O.loadingMore),
          (R[7] = O.loadingProfileTasks),
          (R[8] = O.page),
          (R[9] = O.profileTasks?.selected_task_id),
          (R[10] = O.profileTasks?.tasks),
          (R[11] = O.profileTasksUnavailable),
          (R[12] = O.refreshingGmail),
          (R[13] = O.selectingProfile),
          (R[14] = t),
          (R[15] = r),
          (R[16] = o),
          (R[17] = c),
          (R[18] = d),
          (R[19] = p),
          (R[20] = f),
          (R[21] = g),
          (R[22] = m),
          (R[23] = h),
          (R[24] = x),
          (R[25] = y),
          (R[26] = _),
          (R[27] = v),
          (R[28] = b),
          (R[29] = w),
          (R[30] = j),
          (R[31] = A))
      } else
        ((t = R[14]),
          (r = R[15]),
          (o = R[16]),
          (c = R[17]),
          (d = R[18]),
          (p = R[19]),
          (f = R[20]),
          (g = R[21]),
          (m = R[22]),
          (h = R[23]),
          (x = R[24]),
          (y = R[25]),
          (_ = R[26]),
          (v = R[27]),
          (b = R[28]),
          (w = R[29]),
          (j = R[30]),
          (A = R[31]))
      return h !== Symbol.for("react.early_return_sentinel")
        ? h
        : (R[57] !== t || R[58] !== d || R[59] !== x || R[60] !== y || R[61] !== _
            ? ((T = (0, n.jsxs)(t, { children: [d, x, y, _] })),
              (R[57] = t),
              (R[58] = d),
              (R[59] = x),
              (R[60] = y),
              (R[61] = _),
              (R[62] = T))
            : (T = R[62]),
          R[63] !== r || R[64] !== T || R[65] !== v || R[66] !== b
            ? ((N = (0, n.jsxs)(r, { label: v, children: [b, T] })),
              (R[63] = r),
              (R[64] = T),
              (R[65] = v),
              (R[66] = b),
              (R[67] = N))
            : (N = R[67]),
          R[68] !== o ||
          R[69] !== p ||
          R[70] !== f ||
          R[71] !== g ||
          R[72] !== N ||
          R[73] !== w ||
          R[74] !== j ||
          R[75] !== A
            ? ((C = (0, n.jsx)(o, {
                open: w,
                onOpenChange: j,
                disabled: A,
                contentWidth: p,
                contentClassName: f,
                triggerButton: g,
                children: N,
              })),
              (R[68] = o),
              (R[69] = p),
              (R[70] = f),
              (R[71] = g),
              (R[72] = N),
              (R[73] = w),
              (R[74] = j),
              (R[75] = A),
              (R[76] = C))
            : (C = R[76]),
          R[77] !== O.selectingProfile
            ? ((k = O.selectingProfile
                ? (0, n.jsx)(i.A, { id: "shopping.profileTasks.applying", defaultMessage: "Checking task access…" })
                : null),
              (R[77] = O.selectingProfile),
              (R[78] = k))
            : (k = R[78]),
          R[79] !== c || R[80] !== O.loading || R[81] !== O.selectingProfile
            ? ((S =
                !O.selectingProfile && O.loading && c
                  ? (0, n.jsx)(i.A, {
                      id: "shopping.profileTasks.refreshing",
                      defaultMessage: "Loading recommendations and Profile for this task…",
                    })
                  : null),
              (R[79] = c),
              (R[80] = O.loading),
              (R[81] = O.selectingProfile),
              (R[82] = S))
            : (S = R[82]),
          R[83] !== c || R[84] !== O.loading || R[85] !== O.selectingProfile
            ? ((E =
                O.selectingProfile || (O.loading && c)
                  ? null
                  : (0, n.jsx)(i.A, {
                      id: "shopping.profileTasks.help",
                      defaultMessage:
                        "Choose a saved profile to reload recommendations and Profile. Shadow tasks are supported. Your first load uses the latest task; later loads keep your selection.",
                    })),
              (R[83] = c),
              (R[84] = O.loading),
              (R[85] = O.selectingProfile),
              (R[86] = E))
            : (E = R[86]),
          R[87] !== k || R[88] !== S || R[89] !== E
            ? ((I = (0, n.jsxs)("p", { className: "text-sm text-secondary", role: "status", children: [k, S, E] })),
              (R[87] = k),
              (R[88] = S),
              (R[89] = E),
              (R[90] = I))
            : (I = R[90]),
          R[91] !== O.profileTaskError
            ? ((P = O.profileTaskError
                ? (0, n.jsxs)("p", {
                    role: "alert",
                    className: "text-sm text-secondary",
                    children: [
                      "list" === O.profileTaskError
                        ? (0, n.jsx)(i.A, {
                            id: "shopping.profileTasks.listError",
                            defaultMessage: "Tasks couldn't be loaded. Open the picker to retry.",
                          })
                        : null,
                      "not_applied" === O.profileTaskError
                        ? (0, n.jsx)(i.A, {
                            id: "shopping.profileTasks.notApplied",
                            defaultMessage: "This task couldn't be used for the feed. Choose another saved profile.",
                          })
                        : null,
                      "selection" === O.profileTaskError
                        ? (0, n.jsx)(i.A, {
                            id: "shopping.profileTasks.selectionError",
                            defaultMessage: "The selection couldn't be confirmed. Reopen the picker and try again.",
                          })
                        : null,
                    ],
                  })
                : null),
              (R[91] = O.profileTaskError),
              (R[92] = P))
            : (P = R[92]),
          R[93] !== m || R[94] !== C || R[95] !== I || R[96] !== P
            ? ((M = (0, n.jsxs)("div", { className: m, children: [C, I, P] })),
              (R[93] = m),
              (R[94] = C),
              (R[95] = I),
              (R[96] = P),
              (R[97] = M))
            : (M = R[97]),
          M)
    }
    function te(e) {
      return null != e.task_id
    }
    let tt = d.enum(["for-you", "email", "saved", "profile", ...b]).catch("for-you"),
      tr = (0, p._)(async () => (await r.e(64017).then(r.bind(r, "PM8E"))).ShoppingProfilePanel, {
        fallback: (0, n.jsx)("p", {
          role: "status",
          className: "text-sm text-secondary",
          children: (0, n.jsx)(i.A, {
            id: "shopping.profile.loading",
            defaultMessage: "Loading your shopper profile…",
          }),
        }),
        errorFallback: (0, n.jsx)("p", {
          role: "alert",
          className: "text-sm text-secondary",
          children: (0, n.jsx)(i.A, {
            id: "shopping.profile.loadError",
            defaultMessage: "Your shopper profile couldn't be loaded. Please try again",
          }),
        }),
      })
    function tn(e) {
      let t,
        r,
        d,
        p,
        m,
        h,
        x,
        y,
        _,
        v,
        w,
        j,
        A,
        T,
        N,
        C,
        k,
        S,
        E,
        I,
        P,
        M,
        R,
        O,
        G,
        D,
        H,
        L,
        F,
        Y = (0, a.c)(124),
        { accountId: z, userId: B } = e,
        U = (0, s.A)(),
        [q, K] = (0, c.ok)()
      Y[0] !== z || Y[1] !== B ? ((t = { accountId: z, userId: B }), (Y[0] = z), (Y[1] = B), (Y[2] = t)) : (t = Y[2])
      let V = (0, o.uO)(eF, t),
        $ = (0, o.Ul)(V.state$)
      Y[3] !== z || Y[4] !== B ? ((r = { accountId: z, userId: B }), (Y[3] = z), (Y[4] = B), (Y[5] = r)) : (r = Y[5])
      let W = (0, o.uO)(eG, r),
        Z = (0, o.Ul)(W.references$)
      Y[6] !== q ? ((d = tt.parse(q.get("tab"))), (Y[6] = q), (Y[7] = d)) : (d = Y[7])
      let X = d
      Y[8] !== X ? ((p = b.find((e) => e === X)), (Y[8] = X), (Y[9] = p)) : (p = Y[9])
      let J = p
      Y[10] !== z || Y[11] !== J || Y[12] !== B
        ? ((m = { accountId: z, userId: B, category: J }), (Y[10] = z), (Y[11] = J), (Y[12] = B), (Y[13] = m))
        : (m = Y[13])
      let ee = (0, o.uO)(Q, m),
        et = (0, o.Ul)(J ? ee.state$ : null)
      Y[14] !== K
        ? ((h = (e) => {
            K((t) => {
              let r = new URLSearchParams(t)
              return ("for-you" === e ? r.delete("tab") : r.set("tab", e), r)
            })
          }),
          (Y[14] = K),
          (Y[15] = h))
        : (h = Y[15])
      let er = h,
        [en, ea] = (0, l.useState)(null),
        [eo, es] = (0, l.useState)(!1),
        ec = $.page,
        ed = en ?? ec?.preference ?? "",
        eu = ec?.gmail_state === "connected"
      Y[16] !== eu || Y[17] !== ec ? ((x = eu || el(ec)), (Y[16] = eu), (Y[17] = ec), (Y[18] = x)) : (x = Y[18])
      let ep = x,
        ef = $.loading || $.loadingMore || $.refreshingGmail || $.selectingProfile
      Y[19] !== et || Y[20] !== ef
        ? ((y = ef || (null != et && Object.values(et).some(ti))), (Y[19] = et), (Y[20] = ef), (Y[21] = y))
        : (y = Y[21])
      let eg = y,
        em = "email" !== X && "saved" !== X && "profile" !== X
      Y[22] !== eu || Y[23] !== ec
        ? ((_ = eu ? (ec.email_offers ?? []) : []), (Y[22] = eu), (Y[23] = ec), (Y[24] = _))
        : (_ = Y[24])
      let eh = _
      Y[25] !== Z ? ((v = new Set(Z.map(tl))), (Y[25] = Z), (Y[26] = v)) : (v = Y[26])
      let ex = v
      Y[27] !== W
        ? ((w = (e) => {
            try {
              ;(W.toggle(e), es(!1))
            } catch {
              es(!0)
            }
          }),
          (Y[27] = W),
          (Y[28] = w))
        : (w = Y[28])
      let ey = w
      Y[29] !== ep || Y[30] !== ee || Y[31] !== J || Y[32] !== V || Y[33] !== ed
        ? ((j = () => {
            ;(ep && V.refresh(ed), J && ee.refresh())
          }),
          (Y[29] = ep),
          (Y[30] = ee),
          (Y[31] = J),
          (Y[32] = V),
          (Y[33] = ed),
          (Y[34] = j))
        : (j = Y[34])
      let e_ = j
      Y[35] !== ee || Y[36] !== V || Y[37] !== ef
        ? ((A = () => {
            ;(ef && V.cancel(), ee.cancel())
          }),
          (Y[35] = ee),
          (Y[36] = V),
          (Y[37] = ef),
          (Y[38] = A))
        : (A = Y[38])
      let ev = A
      ;(Y[39] !== V || Y[40] !== ed
        ? ((T = () => void (ed.trim() ? V.refresh(ed) : V.loadFirst())), (Y[39] = V), (Y[40] = ed), (Y[41] = T))
        : (T = Y[41]),
        Y[42] !== V ? ((N = () => void V.checkGmail()), (Y[42] = V), (Y[43] = N)) : (N = Y[43]),
        Y[44] !== er ? ((C = () => er("email")), (Y[44] = er), (Y[45] = C)) : (C = Y[45]),
        Y[46] !== ev || Y[47] !== $ || Y[48] !== T || Y[49] !== N || Y[50] !== C
          ? ((k = (0, n.jsx)(eS, { state: $, onLoad: T, onCheck: N, onCancel: ev, onOpenEmail: C })),
            (Y[46] = ev),
            (Y[47] = $),
            (Y[48] = T),
            (Y[49] = N),
            (Y[50] = C),
            (Y[51] = k))
          : (k = Y[51]))
      let eb = k
      return (
        Y[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)(i.A, { id: "shopping.forYou.title", defaultMessage: "Shopping" })), (Y[52] = S))
          : (S = Y[52]),
        Y[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = [
              { key: "for-you", name: (0, n.jsx)(i.A, { id: "shopping.forYou.tab", defaultMessage: "For you" }) },
              ...b.map(to),
              {
                key: "email",
                name: (0, n.jsx)(i.A, { id: "shopping.forYou.emailTab", defaultMessage: "Email offers" }),
              },
              { key: "saved", name: (0, n.jsx)(i.A, { id: "shopping.forYou.savedTab", defaultMessage: "Saved" }) },
              {
                key: "profile",
                highlighted: !0,
                name: (0, n.jsx)(i.A, { id: "shopping.profile.tab", defaultMessage: "Profile" }),
              },
            ]),
            (Y[53] = E))
          : (E = Y[53]),
        Y[54] !== er || Y[55] !== X
          ? ((I = (0, n.jsx)(f.uC, {
              inset: !1,
              children: (0, n.jsx)(g.t, { variant: "browse", scrollable: !0, selectedKey: X, onSelect: er, tabs: E }),
            })),
            (Y[54] = er),
            (Y[55] = X),
            (Y[56] = I))
          : (I = Y[56]),
        Y[57] !== em || Y[58] !== eg || Y[59] !== ep || Y[60] !== U || Y[61] !== ed || Y[62] !== e_
          ? ((P = em
              ? {
                  id: "shopping-for-you-preference",
                  autoFocus: !1,
                  maxLength: 2e3,
                  searchQuery: ed,
                  onSearchQueryChange: ea,
                  label: U.formatMessage({
                    id: "shopping.forYou.preferenceLabel",
                    defaultMessage: "Shopping preference",
                  }),
                  placeholder: U.formatMessage({
                    id: "shopping.forYou.preferencePlaceholder",
                    defaultMessage: "What are you shopping for?",
                  }),
                  onKeyDown: (e) => {
                    "Enter" === e.key && !eg && ep && (e.preventDefault(), e_())
                  },
                  trailingControl: (0, n.jsx)(u.$, {
                    color: "primary",
                    disabled: eg || !ep,
                    onClick: e_,
                    children: (0, n.jsx)(i.A, { id: "shopping.forYou.search", defaultMessage: "Search deals" }),
                  }),
                }
              : void 0),
            (Y[57] = em),
            (Y[58] = eg),
            (Y[59] = ep),
            (Y[60] = U),
            (Y[61] = ed),
            (Y[62] = e_),
            (Y[63] = P))
          : (P = Y[63]),
        Y[64] !== V || Y[65] !== ec?.preference || Y[66] !== en || Y[67] !== $ || Y[68] !== X
          ? ((M =
              ("for-you" === X || "profile" === X) &&
              (0, n.jsx)(e9, {
                state: $,
                onLoad: () => void V.loadProfileTasks(),
                onSelect: (e) => void V.selectProfileTask(e, en ?? ec?.preference ?? void 0),
              })),
            (Y[64] = V),
            (Y[65] = ec?.preference),
            (Y[66] = en),
            (Y[67] = $),
            (Y[68] = X),
            (Y[69] = M))
          : (M = Y[69]),
        Y[70] !== z || Y[71] !== ec || Y[72] !== er || Y[73] !== B || Y[74] !== X
          ? ((R =
              "profile" === X
                ? (0, n.jsx)(
                    tr,
                    { page: ec, onShowForYou: () => er("for-you") },
                    `${z}:${B}:${ec?.snapshot_id ?? "entry"}`,
                  )
                : null),
            (Y[70] = z),
            (Y[71] = ec),
            (Y[72] = er),
            (Y[73] = B),
            (Y[74] = X),
            (Y[75] = R))
          : (R = Y[75]),
        Y[76] !== eo
          ? ((O = eo
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(i.A, {
                    id: "shopping.forYou.saveError",
                    defaultMessage: "Your saved items couldn't be updated on this device",
                  }),
                })
              : null),
            (Y[76] = eo),
            (Y[77] = O))
          : (O = Y[77]),
        Y[78] !== em ||
        Y[79] !== eg ||
        Y[80] !== ep ||
        Y[81] !== ev ||
        Y[82] !== ee ||
        Y[83] !== et ||
        Y[84] !== J ||
        Y[85] !== eb ||
        Y[86] !== V ||
        Y[87] !== ec ||
        Y[88] !== e_ ||
        Y[89] !== $ ||
        Y[90] !== X
          ? ((G =
              em &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  ep || J
                    ? (0, n.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                          (0, n.jsx)(u.$, {
                            color: "secondary",
                            disabled: eg,
                            onClick: e_,
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.forYou.refresh",
                              defaultMessage: "Refresh deals",
                            }),
                          }),
                          $.recommendationsUpdated
                            ? (0, n.jsx)(u.$, {
                                color: "secondary",
                                disabled: eg,
                                onClick: e_,
                                children: (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.updated",
                                  defaultMessage: "Show updated deals",
                                }),
                              })
                            : null,
                          eg
                            ? (0, n.jsx)(u.$, {
                                color: "secondary",
                                onClick: ev,
                                children: (0, n.jsx)(i.A, { id: "shopping.forYou.stop", defaultMessage: "Stop" }),
                              })
                            : null,
                          $.loading || $.loadingMore
                            ? (0, n.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.loading",
                                  defaultMessage: "Loading your recommendations…",
                                }),
                              })
                            : null,
                          $.refreshingGmail
                            ? (0, n.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.email.loading",
                                  defaultMessage: "Finding email offers…",
                                }),
                              })
                            : null,
                          $.pageError
                            ? (0, n.jsx)("p", {
                                role: "alert",
                                className: "text-sm text-secondary",
                                children: (0, n.jsx)(i.A, {
                                  id: "shopping.forYou.failed",
                                  defaultMessage: "We couldn't load these deals. Please try again",
                                }),
                              })
                            : null,
                          $.gmailError
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("p", {
                                    role: "alert",
                                    className: "text-sm text-secondary",
                                    children: (0, n.jsx)(i.A, {
                                      id: "shopping.forYou.gmailFailed",
                                      defaultMessage: "Gmail could not be updated. Please try again",
                                    }),
                                  }),
                                  (0, n.jsx)(u.$, {
                                    color: "secondary",
                                    disabled: $.refreshingGmail,
                                    onClick: () => void V.refreshGmail(),
                                    children: (0, n.jsx)(i.A, {
                                      id: "shopping.forYou.gmailRetry",
                                      defaultMessage: "Retry Gmail",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          $.cancelled
                            ? (0, n.jsx)("p", {
                                role: "status",
                                className: "text-sm text-secondary",
                                children: (0, n.jsx)(i.A, { id: "shopping.forYou.stopped", defaultMessage: "Stopped" }),
                              })
                            : null,
                        ],
                      })
                    : null,
                  (0, n.jsx)(
                    ei,
                    {
                      state: $,
                      category: J,
                      connectionCard: eb,
                      onLoadMore: () => void V.loadMore(),
                      categoryDeals: et ? { state: et, onRetry: (e) => void ee.retry(e) } : void 0,
                    },
                    `${X}:${ec?.snapshot_id ?? "entry"}`,
                  ),
                  ep && ec && "for-you" === X && (ec.shopping_profile?.length ?? 0) > 0
                    ? (0, n.jsxs)("details", {
                        className: "text-sm text-secondary",
                        children: [
                          (0, n.jsx)("summary", {
                            className: "cursor-interaction select-none",
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.forYou.profile",
                              defaultMessage: "How we picked these",
                            }),
                          }),
                          (0, n.jsx)("p", {
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.forYou.inferred",
                              defaultMessage:
                                "Inferred from available context. Exploration topics are suggestions, not confirmed interests",
                            }),
                          }),
                          (0, n.jsx)("ul", {
                            className: "list-inside list-disc",
                            children: ec.shopping_profile?.map(ta),
                          }),
                        ],
                      })
                    : null,
                ],
              })),
            (Y[78] = em),
            (Y[79] = eg),
            (Y[80] = ep),
            (Y[81] = ev),
            (Y[82] = ee),
            (Y[83] = et),
            (Y[84] = J),
            (Y[85] = eb),
            (Y[86] = V),
            (Y[87] = ec),
            (Y[88] = e_),
            (Y[89] = $),
            (Y[90] = X),
            (Y[91] = G))
          : (G = Y[91]),
        Y[92] !== eu ||
        Y[93] !== eb ||
        Y[94] !== V ||
        Y[95] !== eh ||
        Y[96] !== ec ||
        Y[97] !== ex ||
        Y[98] !== $.gmailError ||
        Y[99] !== $.refreshingGmail ||
        Y[100] !== $.selectingProfile ||
        Y[101] !== ey ||
        Y[102] !== X
          ? ((D =
              "email" === X &&
              (eu
                ? (0, n.jsx)(eV, {
                    offers: eh,
                    unavailable: "unavailable" === ec.email_offers_status,
                    updatedAt: ec.refreshed_at,
                    busy: $.refreshingGmail || $.selectingProfile,
                    error: $.gmailError,
                    savedIds: ex,
                    onToggleSaved: ey,
                    onRefresh: () => void V.refreshGmail(),
                    onStop: V.cancel,
                  })
                : eb)),
            (Y[92] = eu),
            (Y[93] = eb),
            (Y[94] = V),
            (Y[95] = eh),
            (Y[96] = ec),
            (Y[97] = ex),
            (Y[98] = $.gmailError),
            (Y[99] = $.refreshingGmail),
            (Y[100] = $.selectingProfile),
            (Y[101] = ey),
            (Y[102] = X),
            (Y[103] = D))
          : (D = Y[103]),
        Y[104] !== z ||
        Y[105] !== eh ||
        Y[106] !== Z ||
        Y[107] !== W ||
        Y[108] !== er ||
        Y[109] !== ey ||
        Y[110] !== B ||
        Y[111] !== X
          ? ((H =
              "saved" === X &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(e3, { accountId: z, userId: B }),
                  Z.length > 0
                    ? (0, n.jsxs)("section", {
                        className: "flex flex-col gap-4",
                        children: [
                          (0, n.jsx)("h2", {
                            className: "heading-md",
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailTitle",
                              defaultMessage: "Saved email offers",
                            }),
                          }),
                          (0, n.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, n.jsx)(i.A, {
                              id: "shopping.forYou.savedEmailRetention",
                              defaultMessage: "Email offer references are saved on this device for 30 days",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: Z.map((e) => {
                              let t = eh.find((t) => t.id === e.id || t.source_id === e.id)
                              return t
                                ? (0, n.jsx)(eW, { offer: t, saved: !0, onToggleSaved: () => ey(t) }, e.id)
                                : (0, n.jsxs)(
                                    "article",
                                    {
                                      className: "flex min-w-0 flex-col gap-4 rounded-xl border border-default p-4",
                                      children: [
                                        (0, n.jsx)("p", {
                                          children: (0, n.jsx)(i.A, {
                                            id: "shopping.forYou.savedEmailPlaceholder",
                                            defaultMessage: "Refresh Gmail to view this saved offer",
                                          }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                          color: "secondary",
                                          onClick: () => er("email"),
                                          children: (0, n.jsx)(i.A, {
                                            id: "shopping.forYou.openEmail",
                                            defaultMessage: "View email offers",
                                          }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                          color: "ghost",
                                          onClick: () => {
                                            try {
                                              ;(W.remove(e.id), es(!1))
                                            } catch {
                                              es(!0)
                                            }
                                          },
                                          children: (0, n.jsx)(i.A, {
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
            (Y[104] = z),
            (Y[105] = eh),
            (Y[106] = Z),
            (Y[107] = W),
            (Y[108] = er),
            (Y[109] = ey),
            (Y[110] = B),
            (Y[111] = X),
            (Y[112] = H))
          : (H = Y[112]),
        Y[113] !== M || Y[114] !== R || Y[115] !== O || Y[116] !== G || Y[117] !== D || Y[118] !== H
          ? ((L = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-6", children: [M, R, O, G, D, H] })),
            (Y[113] = M),
            (Y[114] = R),
            (Y[115] = O),
            (Y[116] = G),
            (Y[117] = D),
            (Y[118] = H),
            (Y[119] = L))
          : (L = Y[119]),
        Y[120] !== I || Y[121] !== P || Y[122] !== L
          ? ((F = (0, n.jsx)(f.Ql, {
              headerVariant: "compact",
              contentWidth: "wide",
              title: S,
              controls: I,
              search: P,
              children: L,
            })),
            (Y[120] = I),
            (Y[121] = P),
            (Y[122] = L),
            (Y[123] = F))
          : (F = Y[123]),
        F
      )
    }
    function ta(e, t) {
      return (0, n.jsx)("li", { children: e.topic }, t)
    }
    function to(e) {
      return { key: e, name: (0, n.jsx)(i.A, { ...er[e] }) }
    }
    function tl(e) {
      return e.id
    }
    function ti(e) {
      return e.loading
    }
  },
  rUQK(e, t, r) {
    let n = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(n.map((e) => [e.id, e]))
    let a = n.map((e) => e.id)
    r.d(t, {}, { DR: a, MV: () => n })
  },
  Rt8w(e, t, r) {
    var n,
      a =
        (((n = {}).CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED = "CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY = "CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT = "CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT = "CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION = "CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION"),
        (n.CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION = "CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n)
    r.d(
      t,
      {},
      {
        _X: { $type: "protobuf_analytics_events.v1.ChatgptShoppingBrowseScrolled" },
        _m: a,
        iZ: { $type: "protobuf_analytics_events.v1.ChatgptShoppingLinkAction" },
      },
    )
  },
  oYYx(e, t, r) {
    var n = r("QosV"),
      a = r("rDUz")
    r.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            r = (0, n.c)(5),
            o = (0, a.m)(e)
          if (null != e && null != o) {
            if (r[0] !== o || r[1] !== e) {
              let n
              ;(r[3] !== o ? ((n = (e) => "connected" === o[e.hostId]), (r[3] = o), (r[4] = n)) : (n = r[4]),
                (t = e.filter(n)),
                (r[0] = o),
                (r[1] = e),
                (r[2] = t))
            } else t = r[2]
            return t
          }
        },
      },
    )
  },
  rDUz(e, t, r) {
    var n = r("QosV"),
      a = r("KUdL"),
      o = r.n(a),
      l = r("zTeN"),
      i = r("tl5a"),
      s = r("OWtl")
    let c = (0, l.i1)(s.u, (e, { get: t }) => {
      if (null != e) return Object.fromEntries(e.map((e) => [e, t(i.y2, e)]))
    })
    function d(e) {
      let { hostId: t } = e
      return t
    }
    r.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            r = (0, n.c)(2)
          return (
            r[0] !== e ? ((t = null == e ? void 0 : o()(e.map(d))), (r[0] = e), (r[1] = t)) : (t = r[1]),
            (0, l._U)(c, t)
          )
        },
      },
    )
  },
  sM3V(e, t, r) {
    var n = r("zTeN"),
      a = r("B81s"),
      o = r("OWtl"),
      l = r("tl5a")
    let i = (0, n.i1)(o.u, ({ hostId: e, conversationId: t }, { get: r }) => {
        if (t.startsWith("chatgpt:")) return null
        let n = r(l.zp, { hostId: e, threadId: t })
        return null != n && "notLoaded" !== n.type ? t : null
      }),
      s = (0, n.i1)(o.u, (e, { get: t }) => {
        let r = t(i, { hostId: e.hostId, conversationId: e.threadId }),
          { data: n } =
            null == r ? t(a.pu, e.hostId) : t(a.Dr, { hostId: e.hostId, threadId: r, serverName: e.serverName })
        return n?.data.find((t) => t.name === e.serverName)?.serverInfo ?? null
      })
    r.d(t, {}, { f: s, n: i })
  },
  LQko(e, t, r) {
    var n = r("rvFo"),
      a = r("HFSu"),
      o = r("rGp2"),
      l = r("o6hs")
    function i(e, t) {
      return {
        queryKey: ["mcp-settings", "app-connect", "tos", e, t],
        staleTime: n.D.FIVE_MINUTES,
        queryFn: ({ signal: r }) =>
          a.CodexRequest.safeGet("/aip/connectors/{connector_id}/tos", {
            surface: "connector_setup",
            parameters: { path: { connector_id: e } },
            additionalHeaders: { [o.ok]: t },
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
          let n = (0, l.Ye)(t, r)
          ;(e.prefetchQuery((0, o.rJ)(t, { productSku: n?.productSku })),
            e.prefetchQuery(i(t, n?.productSku ?? (0, o.MR)())))
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
            queryFn: async ({ signal: n }) => {
              if (null == t || null == r) throw Error("Connection requires an active account")
              return (
                await a.CodexRequest.safeGet("/aip/connectors/{connector_id}/mfa_requirement", {
                  surface: "connector_setup",
                  parameters: { path: { connector_id: e } },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: r },
                  signal: n,
                })
              ).requirement
            },
          }
        },
      },
    )
  },
  lmaZ(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("oyxz"),
      l = r("JNtf"),
      i = r("mUDD"),
      s = r("X3K1")
    function c(e) {
      return (0, n.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1 border-b border-default py-2.5 last:border-none",
          children: [
            (0, n.jsx)(s.X, { className: "w-1/2" }),
            (0, n.jsx)(s.P, { lines: 2, seed: `app-connect-description-${e}`, size: "sm" }),
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
            g,
            m,
            h,
            x,
            y = (0, a.c)(12),
            { embedded: _ } = e,
            v = void 0 !== _ && _ ? "h2" : l.L3
          return (
            y[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(o.A, {
                  id: "beacons.connectApp.loading.title",
                  defaultMessage: "Connect app",
                  description:
                    "Title of the dialog shown to an end user while app connection details requested by the user are loading. Keep this concise; there are no placeholders.",
                })),
                (y[0] = t))
              : (t = y[0]),
            y[1] !== v
              ? ((r = (0, n.jsx)(v, { className: "sr-only", children: t })), (y[1] = v), (y[2] = r))
              : (r = y[2]),
            y[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, n.jsx)("div", {
                  className: "sr-only",
                  role: "status",
                  children: (0, n.jsx)(o.A, {
                    id: "beacons.connectApp.loading.description",
                    defaultMessage: "Loading connection details…",
                    description:
                      "Status message in the app connection dialog shown to an end user while connector details are loading. Keep this concise; there are no placeholders.",
                  }),
                })),
                (y[3] = d))
              : (d = y[3]),
            y[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, n.jsx)("div", {
                  className: "size-14 overflow-hidden rounded-xl",
                  children: (0, n.jsx)(s.X, { size: "fill" }),
                })),
                (y[4] = u))
              : (u = y[4]),
            y[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, n.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, n.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, n.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                    (0, n.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
                  ],
                })),
                (y[5] = p))
              : (p = y[5]),
            y[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u,
                    p,
                    (0, n.jsx)("div", {
                      className: "size-14 overflow-hidden rounded-xl",
                      children: (0, n.jsx)(s.X, { size: "fill" }),
                    }),
                  ],
                })),
                (y[6] = f))
              : (f = y[6]),
            y[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, n.jsxs)("div", {
                  className: "flex shrink-0 flex-col items-center gap-4",
                  children: [
                    f,
                    (0, n.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-2",
                      children: [
                        (0, n.jsx)("div", { className: "h-6 w-1/2", children: (0, n.jsx)(s.X, { size: "fill" }) }),
                        (0, n.jsx)(s.X, { className: "w-1/3", size: "sm" }),
                      ],
                    }),
                  ],
                })),
                (y[7] = g))
              : (g = y[7]),
            y[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, n.jsx)("div", {
                  className: "min-h-0 overflow-hidden rounded-2xl border border-default px-4 py-2",
                  children: [0, 1, 2].map(c),
                })),
                (y[8] = m))
              : (m = y[8]),
            y[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, n.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-6",
                  "aria-hidden": !0,
                  children: [
                    g,
                    m,
                    (0, n.jsx)("div", {
                      className: "mt-auto h-9 shrink-0 overflow-hidden rounded-full",
                      children: (0, n.jsx)(s.X, { size: "fill" }),
                    }),
                  ],
                })),
                (y[9] = h))
              : (h = y[9]),
            y[10] !== r
              ? ((x = (0, n.jsxs)(i.R4, {
                  className: "gap-6 overflow-hidden px-6 pt-8 pb-6 select-none",
                  size: "full",
                  children: [r, d, h],
                })),
                (y[10] = r),
                (y[11] = x))
              : (x = y[11]),
            x
          )
        },
      },
    )
  },
  Ooax(e, t, r) {
    var n = r("ASxG")
    let a = n.string().regex(/^link_[0-9a-f]{32}$/),
      o = n
        .string()
        .min(1)
        .max(512)
        .regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
      l = n.object({ connector_id: o, target_link_id: a }),
      i = n.object({
        connector_id: o,
        connector_name: n.string().optional(),
        auth_type: n.enum(["OAUTH", "API_KEY", "NONE"]).optional(),
        auth_strategy_id: n.string().nullish(),
        auth_reason: n.enum(["oauth_upgrade_required", "reauthentication_required"]),
      }),
      s = n.object({
        isError: n.literal(!1).optional(),
        structuredContent: n.object({
          kind: n.literal("connector_auth_request"),
          version: n.literal(3),
          status: n.literal("requested"),
          link_id: a,
        }),
        _meta: n.object({ _codex_apps: n.object({ connector_auth_request: i }) }),
      })
    r.d(
      t,
      {},
      {
        Ee: function (e) {
          return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
        },
        hc: "internal://plugin-management-connector-auth",
        pc: function (e, t) {
          let r = l.safeParse(e).data,
            n = s.safeParse(t).data
          if (null == r || null == n) return null
          let a = n._meta._codex_apps.connector_auth_request,
            { link_id: o } = n.structuredContent
          return r.target_link_id !== o ? null : { ...a, link_id: o }
        },
      },
    )
  },
  PrVQ(e, t, r) {
    var n = r("kSHG"),
      a = r("zTeN"),
      o = r("P61R"),
      l = r("DKJJ"),
      i = r("P93s"),
      s = r("OWtl"),
      c = r("Oj9r"),
      d = r("WFY2"),
      u = r("rGp2"),
      p = r("Ooax"),
      f = r("Sbyb")
    let g = (0, a.bD)(s.u, (e) => !1)
    r.d(
      t,
      {},
      {
        S: async function () {
          throw (0, i.zF)("This action is unavailable for the sign-in widget", n.O4.MethodNotFound)
        },
        u: function ({
          scope: e,
          productSku: t,
          hostId: r,
          sourceId: n,
          resourceUri: a,
          access: i,
          toolInput: s,
          toolResult: m,
          assertActive: h,
          onReconnected: x,
        }) {
          if (
            a !== p.hc ||
            null == m ||
            null == i ||
            !("connectorId" in i.serverIdentity) ||
            i.serverIdentity.connectorId !== o.iq
          )
            return
          let y = (0, p.pc)(s, (0, l.Jb)({ isCodexAppsServer: !0, toolResult: m }))
          if (null == y) return
          let _ =
            null == y.auth_type
              ? null
              : (0, u.H9)({
                  id: y.link_id,
                  connector_id: y.connector_id,
                  auth_type: y.auth_type,
                  auth_strategy_id: y.auth_strategy_id,
                })
          if ("API_KEY" === y.auth_type && null == _) return
          let v = (t) => {
            if ((t.throwIfAborted(), h?.(), e.get(c.Rj) || "current" !== i.status(e.get)))
              throw Error("Connector sign-in is unavailable for this widget")
          }
          return async (a) => {
            v(a)
            let o = await (0, f.requestMcpConnectSheet)(e, {
                connectorId: y.connector_id,
                hostId: r,
                oauthPresentation: void 0,
                productSku: t,
                startOAuthDirectly: "reauthentication_required" === y.auth_reason && "OAUTH" === _,
                payload: { requireAuth: !0, reauthLinkId: y.link_id, authReason: y.auth_reason },
                beforeConnect: async () => (v(a), !0),
                signal: a,
              }),
              l = o.didConnect && o.linkId === y.link_id
            if (l && null != x) {
              let t = JSON.stringify([r, i.accountId, i.uiUserId, n, y.link_id])
              e.get(g, t) ||
                (v(a),
                e.set(g, t, !0),
                x(y.connector_name?.trim() || y.connector_id).catch((e) => {
                  d.v.warning("Failed to deliver connector reconnect follow-up", { safe: {}, sensitive: { error: e } })
                }))
            }
            return { didConnect: l }
          }
        },
      },
    )
  },
  QSD9(e, t, r) {
    var n = r("SBbD"),
      a = r("CMv2")
    r.d(
      t,
      {},
      {
        B: function (e) {
          return (0, n.S)({
            ...e,
            getAvailableCompanions: (t) => (0, a.Nf)({ ...t, connectors: e.connectors }),
            getCompanionConnectorIds: (t) => (0, a.sR)(t, e.connectors),
          })
        },
      },
    )
  },
  bjbP(e, t, r) {
    var n = r("ASxG")
    let a = n
        .string()
        .trim()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      o = n.object({ tenantId: a, connectionName: n.string().min(1) })
    r.d(
      t,
      {},
      {
        $3: a,
        Ci: function (e) {
          return (
            "OAI" === e.developer_type &&
            ["onenote", "outlook", "power_bi", "sharepoint", "teams"].includes(e.service) &&
            e.supported_auth.some((e) => "OAUTH" === e.type)
          )
        },
        qB: o,
      },
    )
  },
  PraM(e, t, r) {
    var n = r("SBbD"),
      a = r("pxeg")
    r.d(
      t,
      {},
      {
        I: function (e) {
          return (0, n.S)({ ...e, getAvailableCompanions: a.qX, getCompanionConnectorIds: a.HD })
        },
      },
    )
  },
  pxeg(e, t, r) {
    var n = r("BTha"),
      a = r("K0Re")
    let o = "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      l = [
        { connectorId: "connector_4aaab2856305417b993eca9a216aaf6e", kind: "outlook-email" },
        { connectorId: "connector_e6a7394682e24467ac68c60696f275a4", kind: "outlook-calendar" },
        { connectorId: o, kind: "sharepoint" },
        { connectorId: "connector_246af0940da3457da0e751171dc1ce60", kind: "teams" },
      ],
      i = new Map(l.map((e) => [e.connectorId, e]))
    r.d(
      t,
      {},
      {
        HD: function (e) {
          return (0, a.X)(l, e)
        },
        Vk: function ({ connectorId: e, disableExposureLog: t = !1, statsigClient: r }) {
          return !!i.has(e) && (0, n.R)(r, "enable-bundled-apps-msft", { disableExposureLog: t })
        },
        XI: function (e) {
          return i.get(e)
        },
        oI: o,
        qX: function ({ availableAppIds: e, companionConnectorIds: t, companionConnectors: r, companionLinks: n }) {
          return (0, a.k)({
            availableAppIds: e,
            companionConnectorIds: t,
            companionConnectors: r,
            companionLinks: n,
            connectorById: i,
          })
        },
        zd: l,
      },
    )
  },
  SBbD(e, t, r) {
    var n = r("DBCl"),
      a = r("tl5a"),
      o = r("rGp2"),
      l = r("S7fj"),
      i = r("BQbE"),
      s = r("pDRe"),
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
          getAvailableCompanions: g,
          getCompanionConnectorIds: m,
          hostId: h,
          primaryLink: x,
          productSku: y,
          queryClient: _,
        }) {
          if (null != x) return []
          let v = (0, c.dZ)({
            accountId: r ?? (0, d.RS)(e) ?? e.get(u.chatGptAuthenticatedAccountId$),
            userId: e.get(u.chatGptAuthenticatedUserId$),
            productSku: y,
          })
          if (!v.enabled) return []
          let b = m(t),
            [w, j, A, T] = await Promise.all([
              _.fetchQuery({ ...v, staleTime: f ? 0 : p.D.FIVE_MINUTES }).catch(() => void 0),
              (0, l.N)(h)
                ? _.fetchQuery(
                    (0, s.p)({
                      userId: e.get(u.chatGptAuthenticatedUserId$),
                      accountId: r ?? (0, d.RS)(e) ?? null,
                      productSku: y,
                      appIds: b,
                      enabled: !0,
                    }),
                  )
                    .then(l.k)
                    .catch(() => new Set())
                : _.fetchQuery(
                    (0, i.getAppsReadQueryOptions)({
                      scope: e,
                      appIds: b,
                      browserAccountId: r,
                      hostId: h,
                      queryClient: _,
                      supportsAppRead: (0, n.JFB)(e.get(a.B0, h), "appRead"),
                    }),
                  )
                    .then((e) => new Set(e.map(({ id: e }) => e)))
                    .catch(() => new Set()),
              _.fetchQuery((0, o.rJ)(t, { productSku: y })).catch(() => null),
              Promise.all(b.map((e) => _.fetchQuery((0, o.rJ)(e)).catch(() => null))),
            ])
          return null == w || w.some((e) => e.connector_id === t) || null == A
            ? []
            : g({
                availableAppIds: j,
                companionConnectorIds: b,
                companionConnectors: T,
                companionLinks: b.map((e) => w.find((t) => t.connector_id === e) ?? null),
              })
        },
      },
    )
  },
  PYah(e, t, r) {
    var n = r("Dgwo")
    r.d(
      t,
      {},
      {
        k: async function (e, t, r, a) {
          let { apps: o } = await (0, n.V)(e, t).sendRequest(
            "app/installed",
            { forceRefresh: !0, threadId: r },
            null == a ? void 0 : { threadAccess: a, coalesce: !1 },
          )
          return new Set(o.filter(({ callable: e, enabled: t }) => e && t).map(({ id: e }) => e))
        },
      },
    )
  },
  yxN2(e, t, r) {
    var n = r("QosV"),
      a = r("irkb"),
      o = r("zTeN"),
      l = r("zd8w"),
      i = r("Wf1j"),
      s = r("HZfM"),
      c = r("rGp2"),
      d = r("o6hs"),
      u = r("JAom"),
      p = r("LQko"),
      f = r("Rvvc"),
      g = r("CMv2"),
      m = r("QSD9"),
      h = r("bjbP"),
      x = r("pxeg"),
      y = r("PraM")
    r("OiCI")
    var _ = r("Ot7V"),
      v = r("SGsN"),
      b = r("Rbbe"),
      w = r("OWtl"),
      j = r("kfGJ"),
      A = r("hZax")
    function T(e) {
      ;(0, _.E0)({ disposition: void 0, href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function N() {
      return null
    }
    function C(e) {
      let t = e?.trim()
      t && (0, _.E0)({ href: t, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
    function k(e) {
      return "apps-tab" === e.kind && null != e.reauthLinkId
    }
    function S(e) {
      return (
        ("apps-tab" === e.kind && null == e.reauthLinkId) ||
        ("plugin-install" === e.kind &&
          null == e.origin &&
          null == e.pendingElicitationReply &&
          e.installOptions?.pendingElicitationReply == null)
      )
    }
    function E(e) {
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
            _,
            I,
            P,
            M,
            R,
            O,
            G,
            D,
            H,
            L = (0, n.c)(72)
          L[0] !== e ? ((t = void 0 === e ? {} : e), (L[0] = e), (L[1] = t)) : (t = L[1])
          let {
              hostId: F,
              marketplaceAnalytics: Y,
              oauthReferrer: z,
              onConnectStarted: B,
              onConnectFailed: U,
              onExternalConnectStarted: q,
            } = t,
            K = (0, l.useContext)(s.di),
            V = (0, o.gh)(w.u),
            $ = (0, i.A)(),
            W = (0, a.jE)(),
            Q = F ?? j.fI,
            Z = (0, A.Zj)("2761268526"),
            X = (0, A.Zj)("3304228433"),
            J = (0, A.AS)(),
            {
              clearPendingAppConnect: ee,
              getPendingAppConnectForApp: et,
              isAppConnectPending: er,
              markAppConnectOAuthPending: en,
            } = (0, u.ZN)(),
            [ea, eo] = (0, l.useState)(null),
            [el, ei] = (0, l.useState)(),
            [es, ec] = (0, l.useState)(),
            [ed, eu] = (0, l.useState)(null)
          L[2] !== et || L[3] !== Q
            ? ((r = (e, t) => et(e, Q, null == t || ("apps-tab" === t.kind && null == t.reauthLinkId) ? S : t)),
              (L[2] = et),
              (L[3] = Q),
              (L[4] = r))
            : (r = L[4])
          let ep = r
          if (
            L[5] !== ee ||
            L[6] !== ea?.id ||
            L[7] !== es ||
            L[8] !== et ||
            L[9] !== ep ||
            L[10] !== Q ||
            L[11] !== $ ||
            L[12] !== er ||
            L[13] !== Z ||
            L[14] !== X ||
            L[15] !== K?.location ||
            L[16] !== en ||
            L[17] !== Y ||
            L[18] !== z ||
            L[19] !== U ||
            L[20] !== B ||
            L[21] !== q ||
            L[22] !== ed ||
            L[23] !== W ||
            L[24] !== V ||
            L[25] !== J
          ) {
            let e, t, r, n, a
            ;((M = async (e, t) => {
              let {
                  appConnectOptions: r,
                  marketplaceAnalytics: n,
                  addAccountAttempt: a,
                  forceInApp: o,
                  isAddingAccount: l,
                  hasExistingAccount: i,
                  reauthLinkId: s,
                  googleOAuthBundlePrepared: u,
                  microsoftOAuthBundlePrepared: _,
                  mustShowInstallationInterstitial: b,
                } = void 0 === t ? {} : t,
                w = void 0 !== o && o,
                j = void 0 !== l && l,
                A = void 0 !== i && i
              if (null != ed) return
              let k = null == s && (!e.isAccessible || j) ? ep(e.id) : null,
                S = (0, d.Ye)(
                  e.id,
                  r ??
                    (null == s
                      ? k?.appConnectOptions
                      : ep(e.id, { kind: "apps-tab", reauthLinkId: s })?.appConnectOptions),
                ),
                E = null == z ? S : { connectorId: e.id, ...S, oauthReferrer: S?.oauthReferrer ?? z },
                P = k?.marketplaceAnalytics ?? n ?? ("function" == typeof Y ? Y() : Y),
                M = B?.(e, P) ?? P
              if (!Z && !w && null == k) {
                ;(C((0, c.Cj)(e, E, M?.installAttemptId)), q?.(e))
                return
              }
              ;(0, p.bO)(W, e.id, E)
              let R = (0, g.W9)({ connectorId: e.id, statsigClient: J }),
                O = null != (0, g.w8)(e.id, R),
                G = (0, x.Vk)({ connectorId: e.id, statsigClient: J })
              if (
                !w &&
                !(void 0 !== u && u) &&
                !(void 0 !== _ && _) &&
                null == k &&
                !0 !== e.isAccessible &&
                (O || G)
              ) {
                eu(e.id)
                let t = { scope: V, appId: e.id, browserAccountId: void 0, hostId: Q, queryClient: W }
                await (O ? (0, m.B)({ ...t, connectors: R }) : (0, y.I)(t))
                  .catch((t) => {
                    throw (U?.(e, M, "request_failed"), t)
                  })
                  .finally(() => {
                    eu(null)
                  })
              }
              if (null != k || (!1 === b && (!w || j) && (!e.isAccessible || j) && (j || (!O && !G)))) {
                eu(e.id)
                let t = await W.fetchQuery((0, c.rJ)(e.id, { productSku: E?.productSku }))
                  .catch(N)
                  .then(async (t) =>
                    null != t &&
                    "DISABLED_BY_ADMIN" !== t.status &&
                    !(j && A && X && (0, h.Ci)(t)) &&
                    null == (0, d.GE)(e.id, E) &&
                    (j || !(0, c.B7)(t, E?.authTypeOverride)) &&
                    (0, c.Yo)(t, E?.authTypeOverride) &&
                    "OAUTH" === (0, c.NT)(t, E?.authTypeOverride)
                      ? (0, c.CI)({
                          scope: V,
                          allowBrowserFallback: !1,
                          app: e,
                          appConnectOptions: E,
                          connector: t,
                          installAttemptId: M?.installAttemptId,
                          requestedCompanionConnectorIds: k?.requestedCompanionConnectorIds,
                          onOAuthStarted: (r, n) => {
                            I({
                              app: e,
                              oauthFlowCorrelationId: n?.oauthFlowCorrelationId,
                              marketplaceAnalytics: M,
                              pastedLinkProductExperience: k?.pastedLinkProductExperience,
                              pluginInstallOAuthState:
                                k?.pluginInstallOAuthState ??
                                (k?.resumeTarget.kind === "plugin-install" ? k.oauthState : void 0),
                              previousOAuthState: k?.oauthState,
                              requestedCompanionConnectorIds: k?.requestedCompanionConnectorIds,
                              resumeTarget: k?.resumeTarget ?? { kind: "apps-tab", addAccountAttempt: a },
                              isGithubConnector: e.id === f.qD || t.template_id === f.Bk || "github" === t.service,
                              redirectUrl: r,
                              returnTo: E?.redirectAfter ?? k?.returnTo,
                              appConnectOptions: E,
                            })
                          },
                          openInBrowser: T,
                          queryClient: W,
                        })
                      : null == t
                        ? null
                        : { kind: "requires-connection-form" },
                  )
                  .finally(() => {
                    eu(null)
                  })
                if (t?.kind === "oauth-started") return void V.get(v.Id).info((0, c.oH)({ intl: $ }))
                if (
                  ((null == t || "failed" === t.kind) && U?.(e, M, null == t ? "request_failed" : "connect_failed"),
                  null != k && t?.kind !== "requires-connection-form" && t?.kind !== "requires-mfa")
                )
                  return void V.get(v.Id).danger((0, c.S4)($), {
                    errorAnalytics: { toastId: "useAppConnectFlow.handleConnectApp" },
                  })
              }
              ;(ec(M), ei(E), eo(e))
            }),
              L[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = () => {
                    ;(eo(null), ei(void 0), ec(void 0))
                  }),
                  (L[33] = e))
                : (e = L[33]),
              (_ = e),
              L[34] !== ea?.id || L[35] !== ep || L[36] !== Q || L[37] !== er || L[38] !== ed
                ? ((t = (e, t) => ed === e || ea?.id === e || er(e, t ?? S, Q) || null != ep(e, t)),
                  (L[34] = ea?.id),
                  (L[35] = ep),
                  (L[36] = Q),
                  (L[37] = er),
                  (L[38] = ed),
                  (L[39] = t))
                : (t = L[39]),
              (O = t),
              L[40] !== ee || L[41] !== ep || L[42] !== Q || L[43] !== $ || L[44] !== V
                ? ((r = (e, t) => {
                    let r = ep(e, t)
                    if (null == r) return
                    let n =
                      r.pluginInstallOAuthState ?? ("plugin-install" === r.resumeTarget.kind ? r.oauthState : void 0)
                    ;(null != n &&
                      ((0, b.$4)(V, n)
                        ? V.get(v.Id).danger((0, c.ue)($), {
                            errorAnalytics: { toastId: "useAppConnectFlow.handleAppConnected" },
                          })
                        : (0, b.PA)(V, n)),
                      ee({ oauthState: r.oauthState, hostId: Q }))
                  }),
                  (L[40] = ee),
                  (L[41] = ep),
                  (L[42] = Q),
                  (L[43] = $),
                  (L[44] = V),
                  (L[45] = r))
                : (r = L[45]),
              (P = r),
              L[46] !== ee || L[47] !== ep || L[48] !== Q || L[49] !== $ || L[50] !== q || L[51] !== V
                ? ((n = (e, t) => {
                    let r = ep(e.id, t)
                    if (null != r) {
                      let e =
                        r.pluginInstallOAuthState ?? ("plugin-install" === r.resumeTarget.kind ? r.oauthState : void 0)
                      ;(null != e &&
                        (0, b.$4)(V, e) &&
                        V.get(v.Id).danger((0, c.ue)($), {
                          errorAnalytics: { toastId: "useAppConnectFlow.handleExternalConnectStarted" },
                        }),
                        ee({ oauthState: r.oauthState, hostId: Q }))
                    }
                    q?.(e)
                  }),
                  (L[46] = ee),
                  (L[47] = ep),
                  (L[48] = Q),
                  (L[49] = $),
                  (L[50] = q),
                  (L[51] = V),
                  (L[52] = n))
                : (n = L[52]),
              (R = n),
              L[53] !== et || L[54] !== Q || L[55] !== er
                ? ((a = (e) => er(e, k, Q) || null != et(e, Q, k)),
                  (L[53] = et),
                  (L[54] = Q),
                  (L[55] = er),
                  (L[56] = a))
                : (a = L[56]),
              (G = a),
              (I = (e) => {
                let {
                    app: t,
                    appConnectOptions: r,
                    isGithubConnector: n,
                    marketplaceAnalytics: a,
                    pastedLinkProductExperience: o,
                    pluginInstallOAuthState: l,
                    previousOAuthState: i,
                    oauthFlowCorrelationId: s,
                    requestedCompanionConnectorIds: c,
                    redirectUrl: d,
                    returnTo: u,
                    resumeTarget: p,
                  } = e,
                  f = a ?? es ?? ("function" == typeof Y ? Y() : Y),
                  g = null == i && (null == p || "apps-tab" === p.kind) ? ep(t.id, p) : null,
                  m = i ?? g?.oauthState,
                  h = g?.resumeTarget ?? p,
                  x = en({
                    app: t,
                    oauthFlowCorrelationId: s,
                    appConnectOptions: r ?? g?.appConnectOptions,
                    hostId: Q,
                    isGithubConnector: n,
                    marketplaceAnalytics: g?.marketplaceAnalytics ?? f,
                    pastedLinkProductExperience: o ?? g?.pastedLinkProductExperience,
                    pluginInstallOAuthState:
                      l ??
                      g?.pluginInstallOAuthState ??
                      (g?.resumeTarget.kind === "plugin-install" ? g.oauthState : void 0),
                    requestedCompanionConnectorIds: c ?? g?.requestedCompanionConnectorIds,
                    redirectUrl: d,
                    returnTo:
                      h?.kind === "apps-tab" && null != h.reauthLinkId && null != h.addAccountAttempt
                        ? (g?.returnTo ?? E(K?.location))
                        : (u ?? g?.returnTo ?? E(K?.location)),
                    resumeTarget: h,
                  })
                return (null != x && null != m && m !== x && ee({ oauthState: m, hostId: Q }), x)
              }),
              (L[5] = ee),
              (L[6] = ea?.id),
              (L[7] = es),
              (L[8] = et),
              (L[9] = ep),
              (L[10] = Q),
              (L[11] = $),
              (L[12] = er),
              (L[13] = Z),
              (L[14] = X),
              (L[15] = K?.location),
              (L[16] = en),
              (L[17] = Y),
              (L[18] = z),
              (L[19] = U),
              (L[20] = B),
              (L[21] = q),
              (L[22] = ed),
              (L[23] = W),
              (L[24] = V),
              (L[25] = J),
              (L[26] = _),
              (L[27] = I),
              (L[28] = P),
              (L[29] = M),
              (L[30] = R),
              (L[31] = O),
              (L[32] = G))
          } else ((_ = L[26]), (I = L[27]), (P = L[28]), (M = L[29]), (R = L[30]), (O = L[31]), (G = L[32]))
          return (
            L[57] !== ee || L[58] !== Q
              ? ((D = (e) => {
                  ee({ ...e, hostId: Q })
                }),
                (L[57] = ee),
                (L[58] = Q),
                (L[59] = D))
              : (D = L[59]),
            L[60] !== _ ||
            L[61] !== ea ||
            L[62] !== es ||
            L[63] !== el ||
            L[64] !== I ||
            L[65] !== P ||
            L[66] !== M ||
            L[67] !== R ||
            L[68] !== O ||
            L[69] !== G ||
            L[70] !== D
              ? ((H = {
                  connectingApp: ea,
                  connectingOptions: el,
                  connectingMarketplaceAnalytics: es,
                  clearConnectingApp: _,
                  clearPendingAppConnect: D,
                  handleAppConnected: P,
                  handleAppConnectOAuthStarted: I,
                  handleConnectApp: M,
                  handleExternalConnectStarted: R,
                  handleOpenAppUrl: C,
                  isAppConnectPending: O,
                  isAppReauthPending: G,
                }),
                (L[60] = _),
                (L[61] = ea),
                (L[62] = es),
                (L[63] = el),
                (L[64] = I),
                (L[65] = P),
                (L[66] = M),
                (L[67] = R),
                (L[68] = O),
                (L[69] = G),
                (L[70] = D),
                (L[71] = H))
              : (H = L[71]),
            H
          )
        },
      },
    )
  },
  cgvl(e, t, r) {
    let n = (0, r("zd8w").createContext)(null)
    r.d(t, {}, { M: n })
  },
  KDax(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("zTeN"),
      l = r("zd8w"),
      i = r("ZtSy"),
      s = r("BZrL")
    r("MExO")
    var c = r("WAdu"),
      d = r("Oj9r"),
      u = r("hZax"),
      p = r("cgvl"),
      f = r("TUMj")
    r.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            r = (0, a.c)(7),
            { requiresConfirmation: o, ...s } = e,
            d = (0, f.Rn)(),
            u = (0, l.useContext)(p.M),
            g = (0, l.useContext)(c.c),
            m = !0 === o || d?.shouldBlockExternalEgress === !0 || "restricted" === g,
            h = u?.externalLinkTarget ?? s.openTarget
          return (
            r[3] !== m || r[4] !== h || r[5] !== s
              ? ((t = (0, n.jsx)(i.G, { ...s, openTarget: h, requiresConfirmation: m })),
                (r[3] = m),
                (r[4] = h),
                (r[5] = s),
                (r[6] = t))
              : (t = r[6]),
            t
          )
        },
      },
    )
  },
  EY6e(e, t, r) {
    var n = r("S2r0"),
      a = r("suf3"),
      o = r("DBCl"),
      l = r("SPnB"),
      i = r("hrUs"),
      s = r("smHt"),
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
          postId: g,
          requestSource: m,
          signal: h,
          maxBytes: x,
          versionNumber: y,
          modifiedAt: _,
          readBlob: v,
          target: b,
        }) {
          let w = (e, n) =>
            v?.(e, x) ??
            (0, c.fetchChatGptFileBlob)({
              conversationId: t,
              downloadIntent: r,
              gizmoId: p,
              effectiveGizmoId: n,
              sharedConversationId: f,
              postId: g,
              requestSource: m,
              signal: e,
              maxBytes: x,
              target: b,
            })
          h?.throwIfAborted()
          let j = e.get(l.chatGptAuthenticatedAccountId$),
            A = e.get(l.o8)
          if (
            null == j ||
            null == A ||
            r ||
            null != f ||
            null != g ||
            "mounted-library" === b.type ||
            "page-file" === b.type ||
            null == b.fileId ||
            null != (0, i.Um)(b.fileId)
          )
            return w(h)
          let T = (t = h) => {
              if ((t?.throwIfAborted(), e.get(l.chatGptAuthenticatedAccountId$) !== j || e.get(l.o8) !== A))
                throw new DOMException("File preview identity changed", "AbortError")
            },
            N = (e) =>
              (0, c.lb)({
                conversationId: null == t || (0, d.YA)(t) ? void 0 : t,
                fileId: b.fileId,
                gizmoId: p,
                libraryFileId: b.libraryFileId,
                signal: e,
              }),
            C = y || _,
            k = "file-id" === b.type && null != b.libraryFileId && (0, o.PKK)(b.libraryFileId) ? b.libraryFileId : null,
            S = null != k && null != C ? [...u, j, A, "library", k, C] : null
          if (null != S) {
            let t = e.queryClient
                .getQueryCache()
                .findAll({ queryKey: S })
                .find(
                  (e) => null != e.state.data && !e.state.isInvalidated && Date.now() - e.state.dataUpdatedAt < 3e5,
                ),
              r = null == t ? void 0 : e.queryClient.getQueryData(t.queryKey)
            if (null != r) {
              if ((T(), null != x && r.blob.size > x)) throw new s.m5(r.blob.size)
              return r.blob
            }
          }
          let E = null == S ? [...u, j, A, t, p, b, y, x] : [...S, x],
            I = e.queryClient.getQueryState(E),
            P = I?.data
          if (
            null != I &&
            null != P &&
            null == S &&
            !P.requireFreshAccess &&
            !I.isInvalidated &&
            Date.now() - I.dataUpdatedAt < 3e4
          )
            return (
              e.queryClient
                .fetchQuery({
                  queryKey: ["chatgpt-file-preview-context", ...E.slice(1)],
                  queryFn: ({ signal: e }) => N(e),
                  staleTime: 0,
                  gcTime: 0,
                  retry: !1,
                })
                .then((t) => {
                  let r = e.queryClient.getQueryState(E)
                  r?.fetchStatus === "idle" &&
                    r.data === P &&
                    r.dataUpdatedAt === I.dataUpdatedAt &&
                    (t.requireFreshAccess || t.gizmoId !== P.gizmoId) &&
                    e.queryClient.removeQueries({ queryKey: E, exact: !0 })
                })
                .catch(() => void 0),
              T(),
              P.blob
            )
          let M = (0, n.j)({
              queryKey: E,
              queryFn: async ({ signal: e }) => {
                let t = null == v ? await N(e) : { gizmoId: p ?? void 0, requireFreshAccess: !0 }
                T(e)
                let r = await w(e, t.gizmoId ?? null)
                return (T(e), { ...t, blob: r })
              },
              staleTime: 3e4 * (null == S),
              gcTime: null == S ? 3e4 : 3e5,
              retry: !1,
            }),
            R = new a.$(e.queryClient, { ...M, enabled: !1 }).subscribe(() => {}),
            O = (0, o.udX)(),
            G = () => O.reject(h?.reason)
          h?.addEventListener("abort", G, { once: !0 })
          try {
            let t = await Promise.race([e.queryClient.fetchQuery(M), O.promise])
            return (
              t.requireFreshAccess && null == S && e.queryClient.removeQueries({ queryKey: E, exact: !0 }),
              (function (e) {
                let t = 0,
                  r = e.queryClient.getQueryCache()
                for (let n of r
                  .findAll({ queryKey: u })
                  .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)) {
                  let a = e.queryClient.getQueryData(n.queryKey)
                  null != a && (t + a.blob.size > o.jQ ? r.remove(n) : (t += a.blob.size))
                }
              })(e),
              T(),
              t.blob
            )
          } finally {
            ;(h?.removeEventListener("abort", G), R())
          }
        },
      },
    )
  },
  wwvo(e, t, r) {
    var n = r("zTeN"),
      a = r("Ghh3"),
      o = r("RILR"),
      l = r("OWtl"),
      i = r("rvFo"),
      s = r("zGlb"),
      c = r("VaAS"),
      d = r("GgLN"),
      u = r("TIpx"),
      p = r("fwnP")
    function f(e, t) {
      return [
        "business-agent-gizmo",
        e.accountId,
        t,
        e.context.interactionId,
        ...(null == e.context.nativeRuntimeVersion ? [] : ["native-consumer-v1"]),
      ]
    }
    function g() {
      return ["chatgpt-gizmos", "pinned"]
    }
    let m = (0, n.RD)(l.u, () => ({
        queryFn: () => a.Request.safeGet("/gizmos/bootstrap", { parameters: { query: { limit: 20 } } }),
        queryKey: ["chatgpt-gizmos", "bootstrap", 20],
        staleTime: i.D.ONE_MINUTE,
      })),
      h = (0, n.vU)(l.u, (e, { scope: t, get: r }) => {
        let n = "object" == typeof e ? (e?.gizmoId ?? null) : e,
          o = "object" == typeof e ? e?.conversationId : void 0,
          l = null == o ? null : r(d.O8, o),
          u = l?.status === "ready" && l.context.gizmoId === n ? l : null
        return {
          enabled: null != n && (null == l || null != u),
          queryFn: async () => {
            function e() {
              let e = null == o ? null : (0, d.ft)(t, o)
              if (
                (null != e || null != u) &&
                (e?.status !== "ready" ||
                  e.accountId !== u?.accountId ||
                  e.userId !== u?.userId ||
                  e.context.gizmoId !== n ||
                  e.context.businessAgentId !== u?.context.businessAgentId ||
                  e.context.interactionId !== u?.context.interactionId ||
                  e.context.nativeRuntimeVersion !== u?.context.nativeRuntimeVersion)
              )
                throw new DOMException("Business Agent context changed", "AbortError")
            }
            if ((e(), null == n)) throw Error("Expected a custom GPT identifier")
            if (null != u) {
              null != u.context.nativeRuntimeVersion && (0, s.DQ)(t)
              let r = await a.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                parameters: { path: { gizmo_id_or_short_url: n } },
                additionalHeaders: (0, c.Rx)(u, null == u.context.nativeRuntimeVersion ? o : t.get(p.jS, o ?? null)),
                ...(null != u.context.nativeRuntimeVersion && null != u.userId
                  ? { expectedIdentity: { accountId: u.accountId, userId: u.userId } }
                  : {}),
              })
              return (null != u.context.nativeRuntimeVersion && ((0, s.DQ)(t), (0, s.GL)(r, n), e()), r)
            }
            return a.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
              parameters: { path: { gizmo_id_or_short_url: n } },
            })
          },
          queryKey: null == u ? ["chatgpt-gizmos", "detail", n] : f(u, o),
          staleTime: i.D.ONE_MINUTE,
        }
      }),
      x = (0, n.RD)(l.u, () => ({
        queryFn: () =>
          a.Request.safeGet("/pins", { parameters: { query: { item_type: "gizmo" } } }).then((e) => e.filter(y)),
        queryKey: g(),
        staleTime: i.D.ONE_MINUTE,
      }))
    function y(e) {
      return (
        e?.item_type === "gizmo" &&
        "string" == typeof e.item?.gizmo?.id &&
        "string" == typeof e.item.gizmo.display?.name &&
        "snorlax" !== e.item.gizmo.gizmo_type
      )
    }
    r.d(
      t,
      {},
      {
        H: f,
        kV: m,
        kd: x,
        mJ: async function (e, t, r) {
          let n = g(),
            a = e.queryClient.getQueryData(n)
          e.queryClient.setQueryData(n, (e) => {
            let n = (e ?? []).filter(({ item: e }) => e.gizmo.id !== t.gizmo.id)
            return r ? [...n, { item: t, item_type: "gizmo", pinned_at: new Date().toISOString() }] : n
          })
          try {
            ;(await (0, o.GV)("gizmo", t.gizmo.id, r),
              (0, u.Y)(e, { isPinned: r, itemId: t.gizmo.id, itemType: "gizmo", outcome: "success" }))
          } catch (o) {
            throw (
              (0, u.Y)(e, { isPinned: r, itemId: t.gizmo.id, itemType: "gizmo", outcome: "error" }),
              e.queryClient.setQueryData(n, a ?? []),
              o
            )
          }
        },
        os: h,
      },
    )
  },
  Ve8c(e, t, r) {
    var n = r("ASxG")
    let a = n
      .object({
        multithreadingTipEntryId: n.string().optional(),
        chatGptCustomGptHomepage: n.boolean().optional(),
        chatGptCustomGptId: n.string().min(1).nullable().optional(),
        chatGptCustomGptIconUrl: n.string().min(1).nullable().optional(),
        chatGptCustomGptName: n.string().min(1).nullable().optional(),
        chatGptProjectId: n.string().min(1).nullable().optional(),
        prefillChatGptSystemHints: n.array(n.string().min(1)).optional(),
        prefillPrompt: n.string().optional(),
        prefillPromptFormat: n.enum(["plain", "markdown"]).optional(),
      })
      .loose()
    r.d(
      t,
      {},
      {
        D$: function (e, t, r = !1) {
          let n = a.safeParse(e)
          return {
            ...(n.success ? n.data : {}),
            chatGptCustomGptHomepage: r,
            chatGptCustomGptId: t?.id ?? null,
            chatGptCustomGptIconUrl: t?.iconUrl ?? null,
            chatGptCustomGptName: t?.name ?? null,
            chatGptProjectId: null,
            prefillChatGptSystemHints: void 0,
            initialChatGptConversationId: void 0,
            initialChatGptBusinessAgentGizmoId: void 0,
            prefillPrompt: void 0,
            prefillLibraryFolders: void 0,
            prefillLibraryFiles: void 0,
            prefillPromptFormat: void 0,
          }
        },
        Hw: function (e) {
          let t = a.safeParse(e)
          return t.success && null != t.data.chatGptCustomGptId
            ? {
                iconUrl: t.data.chatGptCustomGptIconUrl ?? null,
                id: t.data.chatGptCustomGptId,
                name: t.data.chatGptCustomGptName ?? t.data.chatGptCustomGptId,
              }
            : null
        },
        e_: "local-project-to-chat",
        nv: function (e, t) {
          let r = a.safeParse(e)
          return {
            ...(r.success ? r.data : {}),
            chatGptCustomGptId: null,
            chatGptCustomGptIconUrl: null,
            chatGptCustomGptName: null,
            chatGptProjectId: t,
            prefillChatGptSystemHints: void 0,
            initialChatGptConversationId: void 0,
            initialChatGptBusinessAgentGizmoId: void 0,
            prefillPrompt: void 0,
            prefillLibraryFolders: void 0,
            prefillLibraryFiles: void 0,
            prefillPromptFormat: void 0,
          }
        },
        xf: function (e) {
          let t = a.safeParse(e)
          return t.success ? (t.data.chatGptProjectId ?? null) : null
        },
      },
    )
  },
  Zr0J(e, t, r) {
    var n = r("EA6X"),
      a = r("D015"),
      o = r("AuIy"),
      l = r("ASxG"),
      i = r("yGJW"),
      s = r("OMIV"),
      c = r("fUon"),
      d = r("MrGp"),
      u = r("xof2"),
      p = r("kOsy")
    function f(e, t, r) {
      let n = r.productReference,
        i = r.messageId,
        s = null == i ? void 0 : e.get(d.Jv, r.conversationId)?.[i]?.message,
        c = (0, o.Lv)(s?.metadata?.model_dil),
        p = l.number().safeParse(n?.start_idx),
        f = p.success ? (0, a.At)(p.data) : void 0,
        m = [t.id, t.product_id].find((e) => "string" == typeof e && "" !== e.trim())?.trim()
      return {
        conversationId: e.get(d.jS, r.conversationId) ?? void 0,
        messageId: i,
        assistantMessageId: i,
        turnOrdinal: (0, u.y7)(e, r.conversationId, i),
        contentReferenceStartIndex: f,
        contentReferenceType: g(n),
        isGenui:
          (0, o.Lv)(c?.dil)?.type != null || s?.metadata?.model_dil_v2 != null || s?.metadata?.genui_refresh != null,
        entityId: m,
        parentContext: { entityId: m, entityCategory: "product", contentReferenceStartIndex: f, messageId: i },
      }
    }
    function g(e) {
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
    function m(e, t, r) {
      if (null == t) return !1
      let n = null == r ? -1 : t.contentReferences.indexOf(r),
        a = t.contentReferenceMessageIds?.[n] ?? t.messageId
      return null != a && e.get(d.Jv, t.conversationId)?.[a]?.message?.metadata?.mercury_message === !0
    }
    function h(
      e,
      t,
      r,
      o,
      l,
      s = r.productEngagementSurfaceLocation === n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
        ? "shopping_browse"
        : "response",
    ) {
      if (e.get(i.YV).isChatgptBrowserReplacement) {
        let n = "shopping_browse" === s ? { type: "products", start_idx: 0 } : r.productReference
        ;(0, c.d)(e, r, n, t, "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED", o, s)
      }
      let { entityId: d, parentContext: p, ...g } = f(e, t, r)
      null != (l instanceof Element ? l.closest("img") : null) && "response" === s
        ? (0, u.dz)(e, {
            ...g,
            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
            surfaceLocation: n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
            imageAffordance: n.CK.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GROUP_TILE,
            imageIndex: (0, a.At)(o ?? 0),
            parentContext: p,
            tags: [],
          })
        : (0, u.tA)(e, {
            ...g,
            conversationId: r.conversationId,
            contentReferenceType: g.contentReferenceType ?? "unrecognized",
            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
            surfaceLocation:
              "shopping_browse" === s
                ? n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
                : n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
            entityAffordance: n.YY.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
            entityId: d,
            entityCategory: "product",
          })
    }
    function x(e, t, r, a, o, l, i, s, c) {
      if (null == r.productReference) return
      let { entityId: d, ...g } = f(e, t, r),
        m = r.productReference?.render_as === "table" ? "product" : r.productReference?.type
      ;((0, u.qJ)(e, {
        ...g,
        contentReferenceType: s ?? ("string" == typeof m ? m : void 0),
        actionType: o,
        surfaceLocation: i,
        linkType: "CHATGPT_LINK_TYPE_PRODUCT_OFFER",
        linkAffordance: l,
        url: r.shouldBlockExternalEgress ? void 0 : a,
      }),
        i !== n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR &&
          (0, p.E)(
            e,
            r,
            t,
            c,
            "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" === o ? "show" : "click",
            i === n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE,
          ))
    }
    r.d(
      t,
      {},
      {
        Cw: m,
        Ks: function (e, t, r, a, o, l) {
          ;(h(e, t, r, a, o),
            x(
              e,
              t,
              r,
              l,
              "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              r.productReference?.type === "product_entity" && "table" !== r.productReference.render_as
                ? n.Bw.CHATGPT_LINK_AFFORDANCE_TEXT
                : n.Bw.CHATGPT_LINK_AFFORDANCE_CARD,
              n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              void 0,
              a,
            ))
        },
        T: g,
        dL: f,
        u0: h,
        uu: function (e, t, r, a = n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE, o) {
          if (
            r.productReference?.type === "product" &&
            "hero" === r.productReference.render_as &&
            !m(e, r, r.productReference)
          )
            return
          let l = e.get(s.M9)?.getLayer("2128165686").get("disable_pdp_for_direct_link", !1) ?? !1
          if (!l && null != t.offers) return
          let i = l
              ? (t.offers?.find((e) => !0 === e.available && e.url?.trim()) ?? t.offers?.find((e) => e.url?.trim()))
              : void 0,
            c = i?.url?.trim() || t.url?.trim()
          c &&
            x(
              e,
              t,
              r,
              c,
              "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN",
              r.productReference?.type === "product_entity" && "table" !== r.productReference.render_as
                ? n.Bw.CHATGPT_LINK_AFFORDANCE_TEXT
                : n.Bw.CHATGPT_LINK_AFFORDANCE_CARD,
              a,
              void 0,
              o,
            )
        },
        zX: x,
      },
    )
  },
  fUon(e, t, r) {
    var n = r("tBe6"),
      a = r("D015"),
      o = r("yGJW"),
      l = r("DIH2"),
      i = r("MrGp")
    function s(e, t, r, d, u, p, f = "response") {
      let g
      if (null == t || null == r) return
      let m = e.get(o.YV).isChatgptBrowserReplacement,
        h = "response" === f && ("product" === r.type || "table" === r.render_as),
        x = null != t.messageId && !t.messageId.startsWith("WEB:"),
        y = !c(r)
      if (y && !(m && x)) return
      let _ = t.contentReferences.indexOf(r),
        v = y ? t.messageId : (t.contentReferenceMessageIds?.[_] ?? t.messageId)
      if (null == v || v.startsWith("WEB:")) return
      let b = y ? void 0 : (0, l.Lv)(d.analytics_meta),
        w = (e) => (null != b && Object.hasOwn(b, e) ? String(b[e]) : void 0),
        j = w("action"),
        A = new Map([
          ["show", "CHATGPT_CONTENT_REFERENCE_ACTION_SHOW"],
          ["click", "CHATGPT_CONTENT_REFERENCE_ACTION_CLICK"],
          ["hover", "CHATGPT_CONTENT_REFERENCE_ACTION_HOVER"],
        ]),
        T = w("type") ?? ("string" == typeof r.type ? r.type : void 0),
        N =
          (!y &&
            "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN" === u &&
            ["product", "products", "product_entity"].includes(T ?? "") &&
            !t.shouldBlockExternalEgress &&
            (w("offer_url") || d.url || w("site_url") || w("merchant_url"))) ||
          void 0
      ;((m && x) || (!m && "shopping_browse" === f)) &&
        ((g = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE"),
        "shopping_browse" === f
          ? (g = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_BROWSE")
          : "explore_more" === r.type && (g = "CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_PREVIEW"))
      let C = "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN" === u,
        k = u,
        S = C ? "search_content_reference_shown" : "search_content_reference_clicked"
      ;(y &&
        h &&
        (k = C
          ? "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN"
          : "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_CLICKED"),
        y && h && (S = C ? "chatgpt_shopping_content_reference_shown" : "chatgpt_shopping_content_reference_clicked"))
      let E = y ? void 0 : T
      ;(y && h && (E = "product"),
        (0, o.yy)(e, n.qX, {
          eventType: k,
          shoppingContext: g,
          productId: d.id ?? void 0,
          productEventUuid: d.product_event_uuid ?? void 0,
          productIndex: h || "product_entity" === r.type || null == p ? void 0 : (0, a.At)(p + 1),
          contentReferenceStartIndex: "number" == typeof r.start_idx ? (0, a.At)(r.start_idx) : void 0,
          contentReferenceEndIndex: h && "number" == typeof r.end_idx ? (0, a.At)(r.end_idx) : void 0,
          renderAs:
            h && ("hero" === r.render_as || "block" === r.render_as || "table" === r.render_as) ? r.render_as : void 0,
          hasPopularTag:
            h || "product_entity" !== r.type
              ? void 0
              : (d.popularity_metadata?.product_tags?.includes("popular") ?? !1),
          legacyStatsigEventName: e.get(o.YV).isChatgptBrowserReplacement ? S : void 0,
          action: A.get(j ?? ""),
          conversationId: w("conversation_id") ?? e.get(i.jS, t.conversationId) ?? void 0,
          messageId: w("message_id") ?? v,
          contentReferenceType: E,
          ...(void 0 === N ? {} : { url: N }),
          category: w("category"),
          ctaType: w("cta_type"),
          linkType: w("link_type"),
          widgetName: w("widget_name"),
          businessId: w("business_id"),
          sectionLocation: w("section_location"),
          followupSource: w("followup_source"),
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
        _: function (e, t, r, n, a, o, l) {
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
            n.id,
            ...("product_entity" === r.type ? [] : [n.analytics_meta, n.product_event_uuid, n.title, n.url, a]),
          ])
          o.has(u) ||
            (o.add(u),
            l?.(),
            s(e, { ...t, messageId: d }, r, n, "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN", a))
        },
        d: s,
      },
    )
  },
  sWz1(e, t, r) {
    var n = r("zTeN"),
      a = r("OWtl"),
      o = r("g2p6")
    let l = (0, n.bD)(a.u, (e) => null),
      i = (0, n.i1)(a.u, (e, { get: t }) => {
        let r = t(l, e)
        return r?.accountId === t(o.Sk) && r?.isCurrent?.(t) !== !1 ? r : null
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
    var n = r("ABep"),
      a = r("QosV"),
      o = r("zTeN"),
      l = r("zd8w"),
      i = r("OWtl"),
      s = r("Zr0J"),
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
            g,
            m,
            h,
            x,
            y,
            _,
            v,
            b,
            w,
            j,
            A,
            T,
            N,
            C = (0, a.c)(46)
          C[0] !== e
            ? (({
                product: m,
                reference: x,
                imageAnalytics: r,
                hasFallbackImage: t,
                loadTimeoutMs: u,
                onLoad: g,
                onError: f,
                src: y,
                alt: _,
                loading: p,
                ...h
              } = e),
              (C[0] = e),
              (C[1] = t),
              (C[2] = r),
              (C[3] = u),
              (C[4] = p),
              (C[5] = f),
              (C[6] = g),
              (C[7] = m),
              (C[8] = h),
              (C[9] = x),
              (C[10] = y),
              (C[11] = _))
            : ((t = C[1]),
              (r = C[2]),
              (u = C[3]),
              (p = C[4]),
              (f = C[5]),
              (g = C[6]),
              (m = C[7]),
              (h = C[8]),
              (x = C[9]),
              (y = C[10]),
              (_ = C[11]))
          let k = void 0 === _ ? "" : _,
            S = (0, o.gh)(i.u),
            E = (0, c.Rn)(),
            I = (0, l.useRef)(null),
            P = (0, l.useRef)(null),
            M = (0, l.useRef)(void 0),
            R = (0, l.useRef)(void 0)
          C[12] !== r || C[13] !== m || C[14] !== x || C[15] !== S || C[16] !== y || C[17] !== E
            ? ((v = () => ({
                ...r,
                isShoppingResearch:
                  x?.type === "product" && "block" !== r.surface ? (0, s.Cw)(S, E, x) : r.isShoppingResearch,
                product: m,
                productId: m.id ?? "",
                imageUrl: y,
                isVirtualTryOnImage: m.shopping_vto?.generated_images?.some((e) => e.vto_image_url === y),
              })),
              (C[12] = r),
              (C[13] = m),
              (C[14] = x),
              (C[15] = S),
              (C[16] = y),
              (C[17] = E),
              (C[18] = v))
            : (v = C[18])
          let O = v
          C[19] !== O || C[20] !== S
            ? ((b = () => (0, d.QN)(S, O())), (C[19] = O), (C[20] = S), (C[21] = b))
            : (b = C[21])
          let G = (0, l.useEffectEvent)(b)
          return (
            C[22] !== u || C[23] !== p || C[24] !== G
              ? ((w = () => {
                  if (null == u || P.current === I.current) return
                  let e = !1,
                    t = () => {
                      e || P.current === I.current || ((e = !0), (M.current = setTimeout(() => G(), u)))
                    }
                  return (
                    "lazy" === p && null != I.current && "u" > typeof IntersectionObserver
                      ? ((R.current = new IntersectionObserver((e) => {
                          let [r] = e
                          r.isIntersecting && (R.current?.disconnect(), t())
                        })),
                        R.current.observe(I.current))
                      : t(),
                    () => {
                      ;(clearTimeout(M.current), R.current?.disconnect())
                    }
                  )
                }),
                (C[22] = u),
                (C[23] = p),
                (C[24] = G),
                (C[25] = w))
              : (w = C[25]),
            C[26] !== u || C[27] !== p || C[28] !== y
              ? ((j = [y, u, p]), (C[26] = u), (C[27] = p), (C[28] = y), (C[29] = j))
              : (j = C[29]),
            (0, l.useEffect)(w, j),
            C[30] !== O || C[31] !== g || C[32] !== S
              ? ((A = (e) => {
                  ;((P.current = e.currentTarget),
                    clearTimeout(M.current),
                    R.current?.disconnect(),
                    (0, d.kE)(S, O()),
                    g?.(e))
                }),
                (C[30] = O),
                (C[31] = g),
                (C[32] = S),
                (C[33] = A))
              : (A = C[33]),
            C[34] !== O || C[35] !== t || C[36] !== f || C[37] !== S
              ? ((T = (e) => {
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
                    ? (0, d.kE)(S, { ...O(), imageFetchResponseStatus: r })
                    : (0, d.ZA)(S, O(), e, { imageFetchResponseStatus: r }),
                    f?.(e))
                }),
                (C[34] = O),
                (C[35] = t),
                (C[36] = f),
                (C[37] = S),
                (C[38] = T))
              : (T = C[38]),
            C[39] !== k || C[40] !== p || C[41] !== h || C[42] !== y || C[43] !== A || C[44] !== T
              ? ((N = (0, n.jsx)("img", { ref: I, ...h, alt: k, src: y, loading: p, onLoad: A, onError: T }, y)),
                (C[39] = k),
                (C[40] = p),
                (C[41] = h),
                (C[42] = y),
                (C[43] = A),
                (C[44] = T),
                (C[45] = N))
              : (N = C[45]),
            N
          )
        },
      },
    )
  },
  VBQw(e, t, r) {
    var n = r("ASxG"),
      a = r("PFjh"),
      o = r("OMIV")
    let l = "product_image.render_opportunity",
      i = new WeakMap()
    function s(e) {
      let t = i.get(e.node)
      return (null == t && ((t = { attempts: new Set(), failures: new Set() }), i.set(e.node, t)), t)
    }
    function c({ product: e, productId: t, citationType: r, surface: n }) {
      return JSON.stringify([t || (e.product_lookup_key?.data ? e.product_lookup_key : e.url || e.title), r, n])
    }
    function d(
      e,
      {
        product: t,
        productId: r,
        imageUrl: a,
        citationType: l,
        surface: i,
        isShoppingResearch: s,
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
        })(a),
        f = "images.openai.com" === p,
        g = f
          ? (function (e) {
              if (!e) return ""
              try {
                let { pathname: t } = new URL(e),
                  r = t.split("/").filter(Boolean),
                  n = []
                for (let e of r) {
                  if (e.length > 16 || n.length >= 2) break
                  n.push(e)
                }
                if (0 === n.length) return ""
                return n.join("/") + (n.length > 1 ? "/" : "")
              } catch {
                return ""
              }
            })(a)
          : "",
        m = e.get(o.M9)?.getContext().user,
        h = m?.country,
        x = (function () {
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
          let n = u(t.downlink)
          return (
            void 0 !== n && (e.client_downlink_mbps = n),
            "boolean" == typeof t.saveData && (e.client_save_data = t.saveData),
            e
          )
        })(),
        y = (function (e) {
          let t = { image_resource_timing_available: !1 }
          if (!e || "u" < typeof performance || "function" != typeof performance.getEntriesByName) return t
          try {
            var r
            let n = (function (e) {
              let t = performance.getEntriesByName(e, "resource")
              for (let e = t.length - 1; e >= 0; e -= 1) {
                var r
                let n = t[e]
                if (((r = n), "resource" === r.entryType)) return n
              }
            })(e)
            if (!n) return t
            t.image_resource_timing_available = !0
            let a = u(n.responseStatus)
            void 0 !== a &&
              ((t.image_resource_response_status = a),
              (r = a),
              (t.image_resource_status_bucket =
                0 === r ? "no_http_response" : r >= 100 && r < 600 ? `${Math.floor(r / 100)}xx` : "unknown"))
            let o = u(n.duration)
            void 0 !== o && (t.image_resource_duration_ms = o)
            let l = u(n.responseStart)
            void 0 !== l && (t.image_resource_response_start_ms = l)
            let i = u(n.responseEnd)
            void 0 !== i && (t.image_resource_response_end_ms = i)
            let s = u(n.transferSize)
            void 0 !== s && (t.image_resource_transfer_size_bytes = s)
            let c = u(n.encodedBodySize)
            void 0 !== c && (t.image_resource_encoded_body_size_bytes = c)
            let d = u(n.decodedBodySize)
            ;(void 0 !== d && (t.image_resource_decoded_body_size_bytes = d),
              n.nextHopProtocol && (t.image_resource_next_hop_protocol = n.nextHopProtocol))
          } catch {}
          return t
        })(a)
      return {
        product_id: r,
        citation_type: l,
        surface: i,
        image_url: c || ("" !== a && !/^https?:\/\//i.test(a)) ? void 0 : a,
        tags: c ? ["vto_image"] : void 0,
        image_url_hostname: p,
        from_oai_images: f,
        is_authenticated: m?.custom?.auth_status == null ? void 0 : "logged_in" === m.custom.auth_status,
        ...x,
        ...y,
        oai_img_path_prefix: g || void 0,
        has_showcase_metadata: !!t.showcase_metadata,
        provider: n.array(n.string()).safeParse(t.providers).data?.[0] ?? t.provider,
        user_country: h,
        is_shopping_research: s,
      }
    }
    function u(e) {
      return "number" == typeof e && Number.isFinite(e) ? e : void 0
    }
    function p(e) {
      return void 0 === e ? "unknown" : e ? "true" : "false"
    }
    function f(e, t, r, n) {
      var o, l
      let i
      e.get(a.T$).count("shopping", t, {
        citation_type: r.citation_type,
        surface: r.surface,
        reason: n,
        product_provider: r.provider ?? "unknown",
        has_showcase_metadata: p(r.has_showcase_metadata),
        from_oai_images: p(r.from_oai_images),
        image_origin: (o = r).image_url
          ? o.from_oai_images
            ? "oai_images"
            : o.image_url_hostname
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
    function g(e, t) {
      let { reason: r } = t,
        n = c(t)
      if (s(e).failures.has(n)) return
      s(e).failures.add(n)
      let a = d(e, t)
      ;(x("shopping.product_image.not_rendered", {
        ...a,
        reason: r,
        ...("load_error" === r
          ? { error_stack_trace: t.isVirtualTryOnImage ? "Virtual try-on image failed to load" : t.errorStackTrace }
          : {}),
      }),
        f(e, "product_image.not_rendered", a, r),
        "missing_url" === r && f(e, l, a, r))
    }
    function m(e, t) {
      let { imageFetchResponseStatus: r } = t,
        n = c(t)
      if (s(e).attempts.has(n)) return
      s(e).attempts.add(n)
      let a = d(e, t)
      ;(x("shopping.product_image.load_attempt", { ...a, image_fetch_response_status: r }), f(e, l, a, "load_attempt"))
    }
    function h(e) {
      return e.length > 2e3 ? e.slice(0, 2e3) + "…" : e
    }
    function x(e, t) {
      let r = {}
      for (let [e, n] of Object.entries(t)) void 0 !== n && (r[e] = n)
    }
    r.d(
      t,
      {},
      {
        QN: function (e, t) {
          ;(m(e, t), g(e, { ...t, reason: "load_timeout" }))
        },
        ZA: function (e, t, r, n) {
          ;(m(e, { ...t, imageFetchResponseStatus: n?.imageFetchResponseStatus }),
            g(e, {
              ...t,
              reason: "load_error",
              errorStackTrace: (function e(t) {
                let r
                if (t instanceof Error) {
                  let e = t.name || "Error",
                    r = t.message.trim(),
                    n = r ? `${e}: ${r}` : e
                  return h(t.stack?.trim() || n)
                }
                return "string" == typeof t && t
                  ? h(t)
                  : ((r = Error("Product image load error")),
                    "function" == typeof Error.captureStackTrace && Error.captureStackTrace(r, e),
                    h(r.stack?.trim() || r.message))
              })(r),
            }))
        },
        b2: g,
        kE: m,
      },
    )
  },
  DC2G(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("ZaI7"),
      l = r("t8Uy"),
      i = r("HOLv")
    r.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            r,
            s = (0, a.c)(5),
            { alt: c, compact: d } = e,
            u = void 0 !== d && d ? o.v : l.U
          return (
            s[0] !== u ? ((t = (0, n.jsx)(i.I, { asset: u })), (s[0] = u), (s[1] = t)) : (t = s[1]),
            s[2] !== c || s[3] !== t
              ? ((r = (0, n.jsx)("div", {
                  "data-theme": "light",
                  className: "absolute inset-0 flex items-center justify-center text-tertiary",
                  role: "img",
                  "aria-label": c,
                  children: t,
                })),
                (s[2] = c),
                (s[3] = t),
                (s[4] = r))
              : (r = s[4]),
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
            n = e.title.trim()
          return r && n && null != e.url && null != e.query && null != e.provider
            ? {
                saved_target: {
                  identity: { namespace: "product", key: r },
                  sidebar_params: {
                    name: n,
                    category: "product_rationale_and_reviews",
                    multi_message_mode: !0,
                    extra_params: {
                      product_lookup_key: e.product_lookup_key ?? void 0,
                      rewritten_queries: t?.length ? t : void 0,
                      saved_product_shell: { id: r, url: e.url, query: e.query, provider: e.provider },
                    },
                  },
                },
                display_data: { name: n, image_url: e.image_urls?.[0] ?? null },
              }
            : null
        },
      },
    )
  },
  kOsy(e, t, r) {
    var n = r("EA6X"),
      a = r("Rt8w"),
      o = r("D015"),
      l = r("yGJW"),
      i = r("MrGp")
    function s(e, t, r) {
      !e.get(l.YV).isChatgptBrowserReplacement ||
        null == t.messageId ||
        t.messageId.startsWith("WEB:") ||
        (0, l.yy)(e, a.iZ, {
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
        E: function (e, t, r, a, l, i) {
          let c = t.productReference
          if (null == c) return
          let d = !i && ("product" === c.type || "table" === c.render_as),
            u = !i && "product_entity" === c.type && !d,
            p = {
              actionType:
                "show" === l ? "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
              linkType: "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL",
              surfaceLocation: n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
              contentReferenceType:
                "products" === c.type ||
                "product_group" === c.type ||
                "product_entity" === c.type ||
                "explore_more" === c.type
                  ? c.type
                  : void 0,
              contentReferenceStartIndex: "number" == typeof c.start_idx ? (0, o.At)(c.start_idx) : void 0,
              productId: r.id ?? void 0,
              productEventUuid: r.product_event_uuid ?? void 0,
              productIndex: d || u || null == a ? void 0 : (0, o.At)(a + 1),
            }
          ;(i
            ? ((p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER"),
              (p.surfaceLocation = n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE),
              (p.contentReferenceType = "products"),
              (p.contentReferenceStartIndex = (0, o.At)(0)))
            : d
              ? ((p.linkType =
                  "block" === c.render_as
                    ? "CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY"
                    : "CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT"),
                (p.contentReferenceType = "product"),
                (p.contentReferenceEndIndex = "number" == typeof c.end_idx ? (0, o.At)(c.end_idx) : void 0),
                (p.renderAs =
                  "hero" === c.render_as || "block" === c.render_as || "table" === c.render_as ? c.render_as : void 0))
              : u
                ? ((p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY"),
                  (p.hasPopularTag = r.popularity_metadata?.product_tags?.includes("popular") ?? !1))
                : "explore_more" === c.type && (p.linkType = "CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT"),
            s(e, t, p))
        },
        L: s,
      },
    )
  },
  zjpG(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      l = r("oyxz")
    r.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            r,
            i,
            s = (0, a.c)(5),
            { className: c } = e
          return (
            s[0] !== c ? ((t = (0, o.A)("last:hidden", c)), (s[0] = c), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, n.jsx)(l.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (s[2] = r))
              : (r = s[2]),
            s[3] !== t
              ? ((i = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: r })), (s[3] = t), (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  IxWh(e, t, r) {
    var n = r("Vzyk"),
      a = r.n(n)
    function o(e, t = "ltr") {
      let r = Math.max(0, e.scrollWidth - e.clientWidth)
      if ("rtl" === t) return { maximum: 0, minimum: -r }
      let n = e.firstElementChild,
        a = Math.min(r, n instanceof HTMLElement ? Math.max(0, l(e, n, t)) : 0)
      return { maximum: r, minimum: a }
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
        b: o,
        z: function (e, t, r = "ltr") {
          let { maximum: n, minimum: s } = o(e, r),
            c = "rtl" === r ? -t : t,
            d = a()(e.scrollLeft + c * (e.clientWidth - i(e, r)), s, n),
            u = e.children
          for (let o = 1 === t ? 0 : u.length - 1; o >= 0 && o < u.length; o += t) {
            let t = u.item(o)
            if (!(t instanceof HTMLElement)) continue
            let i = a()(l(e, t, r), s, n)
            if ((1 === c && i >= d - 1) || (-1 === c && i <= d + 1)) return i
          }
          return 1 === c ? n : s
        },
      },
    )
  },
  tWaO(e, t, r) {
    r.d(
      t,
      {},
      {
        w: function (e, t, r = "calendar") {
          let n = new Date(e),
            a = Math.max(1, Math.floor((t.getTime() - n.getTime()) / 6e4))
          if (a < 60) return { unit: "minute", value: a }
          let o = Math.floor(a / 60)
          if (o < 24) return { unit: "hour", value: o }
          let l = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            i = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
            s = "elapsed" === r ? Math.floor(o / 24) : Math.max(1, Math.round((l.getTime() - i.getTime()) / 864e5))
          return s < 7
            ? { unit: "day", value: s }
            : s < 30
              ? { unit: "week", value: Math.floor(s / 7) }
              : s < 365
                ? { unit: "month", value: Math.floor(s / 30) }
                : { unit: "year", value: Math.floor(s / 365) }
        },
      },
    )
  },
  xs0e(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("Wf1j"),
      l = r("oyxz"),
      i = r("tWaO"),
      s = r("KIKs")
    function c(e) {
      let t,
        r = (0, a.c)(5),
        { dateString: n, now: l, dayBasis: s } = e,
        c = (0, o.A)()
      if (r[0] !== n || r[1] !== s || r[2] !== c || r[3] !== l) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let { unit: e, value: r } = (0, i.w)(n, l, s)
          switch (e) {
            case "minute":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMinutesAgo",
                  defaultMessage: "{value}m",
                  description: "Compact minutes-ago format",
                },
                { value: r },
              )
              break e
            case "hour":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactHoursAgo",
                  defaultMessage: "{value}h",
                  description: "Compact hours-ago format",
                },
                { value: r },
              )
              break e
            case "day":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactDaysAgo",
                  defaultMessage: "{value}d",
                  description: "Compact days-ago format",
                },
                { value: r },
              )
              break e
            case "week":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactWeeksAgo",
                  defaultMessage: "{value}w",
                  description: "Compact weeks-ago format",
                },
                { value: r },
              )
              break e
            case "month":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMonthsAgo",
                  defaultMessage: "{value}mo",
                  description: "Compact months-ago format",
                },
                { value: r },
              )
              break e
            case "year":
              t = c.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactYearsAgo",
                  defaultMessage: "{value}y",
                  description: "Compact years-ago format",
                },
                { value: r },
              )
              break e
          }
        }
        ;((r[0] = n), (r[1] = s), (r[2] = c), (r[3] = l), (r[4] = t))
      } else t = r[4]
      if (t !== Symbol.for("react.early_return_sentinel")) return t
    }
    function d(e) {
      let t,
        r,
        n = (0, a.c)(17),
        { dateString: l, now: i } = e,
        s = (0, o.A)()
      if (n[0] !== l || n[1] !== i) {
        let e = new Date(l)
        ;((t = Math.floor((i.getTime() - e.getTime()) / 6e4)), (n[0] = l), (n[1] = i), (n[2] = t))
      } else t = n[2]
      let c = -t
      if (c <= 0) {
        let e
        return (
          n[3] !== s
            ? ((e = s.formatRelativeTime(0, "second", { numeric: "auto" })), (n[3] = s), (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      if (c < 60) {
        let e
        return (
          n[5] !== s || n[6] !== c
            ? ((e = s.formatRelativeTime(c, "minute", { numeric: "always" })), (n[5] = s), (n[6] = c), (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      let d = Math.ceil(c / 60)
      if (d < 24) {
        let e
        return (
          n[8] !== s || n[9] !== d
            ? ((e = s.formatRelativeTime(d, "hour", { numeric: "always" })), (n[8] = s), (n[9] = d), (n[10] = e))
            : (e = n[10]),
          e
        )
      }
      let u = Math.ceil(d / 24)
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
          ? ((r = s.formatRelativeTime(Math.ceil(u / 7), "week", { numeric: "always" })),
            (n[14] = s),
            (n[15] = u),
            (n[16] = r))
          : (r = n[16]),
        r
      )
    }
    r.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            r = (0, a.c)(10),
            { dateString: d, format: u, dayBasis: p } = e,
            f = void 0 === p ? "calendar" : p,
            g = (0, o.A)(),
            m = (0, s.wv)()
          if (m.getTime() - new Date(d).getTime() < 6e4) {
            let e
            return (
              r[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(l.A, {
                    id: "wham.formattedRelativeDateTime.justNow",
                    defaultMessage: "just now",
                    description: "Relative timestamp for an event that happened less than a minute ago",
                  })),
                  (r[0] = e))
                : (e = r[0]),
              e
            )
          }
          if ("relative" === (void 0 === u ? "compact" : u)) {
            let e
            if (r[1] !== d || r[2] !== f || r[3] !== g || r[4] !== m) {
              let { unit: t, value: n } = (0, i.w)(d, m, f)
              ;((e = g.formatRelativeTime(-n, t, { numeric: "always", style: "narrow" })),
                (r[1] = d),
                (r[2] = f),
                (r[3] = g),
                (r[4] = m),
                (r[5] = e))
            } else e = r[5]
            return e
          }
          return (
            r[6] !== d || r[7] !== f || r[8] !== m
              ? ((t = (0, n.jsx)(c, { dateString: d, now: m, dayBasis: f })),
                (r[6] = d),
                (r[7] = f),
                (r[8] = m),
                (r[9] = t))
              : (t = r[9]),
            t
          )
        },
        SA: function (e) {
          let t,
            r = (0, a.c)(3),
            { dateString: o } = e,
            l = (0, s.wv)()
          return (
            r[0] !== o || r[1] !== l
              ? ((t = (0, n.jsx)(d, { dateString: o, now: l })), (r[0] = o), (r[1] = l), (r[2] = t))
              : (t = r[2]),
            t
          )
        },
      },
    )
  },
  PkPj(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      l = r("IjbW"),
      i = r("xNuN"),
      s = r("suct"),
      c = r("LIss"),
      d = r("zTeN"),
      u = r("zd8w"),
      p = r("wD9O"),
      f = r("khOd"),
      g = r("HgLj"),
      m = r("MCtJ"),
      h = r("I7bK"),
      x = r("MeAu"),
      y = r("okCa"),
      _ = r("DiyT")
    let v = {
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
    function b() {
      return document.activeElement
    }
    function w(e, t, r) {
      let n = (0, p.Ud)(Math.max(0, e.getBoundingClientRect().top - t.getBoundingClientRect().top), r)
      t.style.setProperty("--header-background-top-inset", `${n}px`)
    }
    function j(e) {
      let t,
        r,
        l = (0, a.c)(8),
        { children: i, className: s, fadeSize: c, showScrollFade: d, sticky: u } = e,
        p = void 0 === u || u,
        f =
          p &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        g = p && ("compact" === (void 0 === c ? "default" : c) ? "after:h-2" : "after:h-8"),
        m = p && !(void 0 === d || d) && "after:hidden"
      return (
        l[0] !== s || l[1] !== f || l[2] !== g || l[3] !== m
          ? ((t = (0, o.A)("bg-surface", f, g, m, s)), (l[0] = s), (l[1] = f), (l[2] = g), (l[3] = m), (l[4] = t))
          : (t = l[4]),
        l[5] !== i || l[6] !== t
          ? ((r = (0, n.jsx)("div", { className: t, children: i })), (l[5] = i), (l[6] = t), (l[7] = r))
          : (r = l[7]),
        r
      )
    }
    function A(e) {
      let t,
        r,
        l = (0, a.c)(7),
        { children: i, inset: s, wrap: c, variant: d } = e,
        u = "directory" === (void 0 === d ? "default" : d) ? "pb-4" : "pb-2",
        p = void 0 !== c && c && "flex-wrap",
        f = (void 0 === s || s) && "px-3"
      return (
        l[0] !== u || l[1] !== p || l[2] !== f
          ? ((t = (0, o.A)("flex items-center justify-between gap-4", u, p, f)),
            (l[0] = u),
            (l[1] = p),
            (l[2] = f),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== i || l[5] !== t
          ? ((r = (0, n.jsx)("div", { className: t, children: i })), (l[4] = i), (l[5] = t), (l[6] = r))
          : (r = l[6]),
        r
      )
    }
    r.d(
      t,
      {},
      {
        J1: j,
        Ql: function (e) {
          let t,
            r,
            T,
            N,
            C,
            k,
            S,
            E,
            I,
            P,
            M,
            R,
            O,
            G,
            D,
            H,
            L,
            F,
            Y,
            z,
            B,
            U,
            q,
            K,
            V,
            $,
            W,
            Q,
            Z,
            X,
            J,
            ee,
            et = (0, a.c)(205),
            {
              animateContentLayout: er,
              collapseHeaderOnScroll: en,
              expandSearchWhenWrapped: ea,
              banner: eo,
              bannerAfterHeader: el,
              bannerPlacement: ei,
              children: es,
              contentClassName: ec,
              contentInset: ed,
              contentWidth: eu,
              controls: ep,
              headerAction: ef,
              headerFade: eg,
              headerPlacement: em,
              headerVariant: eh,
              horizontalPaddingClassName: ex,
              reserveSelectionGutter: ey,
              balanceScrollbarGutter: e_,
              navigation: ev,
              pageActions: eb,
              scrollContainerRef: ew,
              search: ej,
              searchContent: eA,
              searchPlacement: eT,
              searchToolbar: eN,
              stickyControls: eC,
              subtitle: ek,
              title: eS,
              titleRef: eE,
              toolbarActions: eI,
              toolbarInset: eP,
              wrapActionsAtNarrowWidth: eM,
            } = e,
            eR = void 0 !== en && en,
            eO = void 0 !== ea && ea,
            eG = void 0 !== el && el,
            eD = void 0 === ed || ed,
            eH = void 0 === eu ? "default" : eu,
            eL = void 0 === eg ? "always" : eg,
            eF = void 0 === em ? "page" : em,
            eY = void 0 === eh ? "default" : eh,
            ez = void 0 !== ey && ey,
            eB = void 0 !== e_ && e_,
            eU = void 0 === eT ? "sticky" : eT,
            eq = void 0 === eP || eP,
            eK = (0, d.Ul)(f.GB),
            eV = (0, p.dz)(),
            e$ = "profileManager" === eY,
            eW = "px-panel"
          "profile" === eH
            ? (eW = e$ ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === eH && (eW = "px-4 md:px-panel")
          let eQ = (0, o.A)(
              ez
                ? "px-18"
                : (ex ??
                    (0, o.A)(
                      eW,
                      ("medium" === eH || "extraWide" === eH) && "compact" === eY ? "px-6 lg:px-12" : void 0,
                    )),
              eK &&
                (ez
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == ex && "profile" !== eH && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eZ] = (0, u.useState)(b),
            [eX, eJ] = (0, u.useState)(!1),
            [e0, e1] = (0, u.useState)(!1),
            e2 = (0, u.useRef)(null),
            e3 = (0, u.useRef)(null),
            e4 = (0, u.useRef)(null),
            [e5, e6] = (0, u.useState)(!1),
            [e7, e8] = (0, u.useState)(),
            e9 = (0, u.useRef)(null),
            te = (0, u.useRef)(null)
          et[0] !== ew ? ((t = (0, g.P)(e2, ew)), (et[0] = ew), (et[1] = t)) : (t = et[1])
          let tt = t,
            tr = (0, u.useRef)(null),
            tn = (0, u.useRef)(null),
            [ta, to] = (0, u.useState)(),
            tl = document.activeElement,
            ti = "none" !== eF,
            ts = "toolbar" === eF,
            tc = "scroll" === eF && e0,
            td = ts || tc,
            tu = v[eY],
            tp = "directory" === eY,
            tf = "compact" === eY,
            tg = "profile" === eY || e$,
            tm = null != ej || null != eA,
            th = "sticky" === eF,
            tx = th && eR,
            ty = th || "inline" === eF,
            t_ = "bottom-on-scroll" === eU && tm && !ty,
            tv = eK && !tg && !tp && "browser:max-md:text-lg browser:max-md:font-medium",
            tb = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: e$ ? "max-w-[1144px]" : "max-w-4xl",
            }[eH],
            tw = (!ts && null != ev) || null != eb,
            tj = (0, l.I)()
          et[2] !== tj ? ((r = tj ? { duration: 0 } : h.m9), (et[2] = tj), (et[3] = r)) : (r = et[3])
          let tA = r,
            tT = ej?.autoFocus ?? (null == tl || tl === document.body || tl === document.documentElement || tl === eZ)
          ;(et[4] !== t_
            ? ((T = () => {
                let e = e2.current,
                  t = e3.current,
                  r = e4.current
                if (!t_ || null == e || null == t || null == r) return
                let n = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e6(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  a = new ResizeObserver((e) => {
                    let [t] = e,
                      n = t.borderBoxSize?.[0]?.blockSize ?? r.offsetHeight
                    n && e8(n)
                  })
                return (
                  n.observe(t),
                  a.observe(r, { box: "border-box" }),
                  () => {
                    ;(n.disconnect(), a.disconnect())
                  }
                )
              }),
              (N = [t_]),
              (et[4] = t_),
              (et[5] = T),
              (et[6] = N))
            : ((T = et[5]), (N = et[6])),
            (0, u.useLayoutEffect)(T, N),
            et[7] !== t_ || et[8] !== tj
              ? ((C = () => {
                  let e = e4.current
                  if (!t_ || null == e) return
                  let t = (0, i.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tj },
                  )
                  return () => t.stop()
                }),
                (et[7] = t_),
                (et[8] = tj),
                (et[9] = C))
              : (C = et[9]),
            et[10] !== t_ || et[11] !== e5 || et[12] !== tj
              ? ((k = [t_, e5, tj]), (et[10] = t_), (et[11] = e5), (et[12] = tj), (et[13] = k))
              : (k = et[13]),
            (0, u.useLayoutEffect)(C, k),
            et[14] !== th || et[15] !== eK || et[16] !== eV
              ? ((S = () => {
                  let e = e2.current,
                    t = e9.current
                  if (!eK || !th || null == e || null == t) return
                  let r = new ResizeObserver(() => {
                    w(e, t, eV)
                  })
                  return (
                    r.observe(e),
                    r.observe(t),
                    () => {
                      ;(r.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (E = [eK, th, eV]),
                (et[14] = th),
                (et[15] = eK),
                (et[16] = eV),
                (et[17] = S),
                (et[18] = E))
              : ((S = et[17]), (E = et[18])),
            (0, u.useLayoutEffect)(S, E),
            et[19] !== eF
              ? ((I = () => {
                  let e = tr.current,
                    t = e2.current
                  if ("scroll" !== eF || null == e || null == t) return
                  let r = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e1(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (r.observe(e), () => r.disconnect())
                }),
                (P = [eF]),
                (et[19] = eF),
                (et[20] = I),
                (et[21] = P))
              : ((I = et[20]), (P = et[21])),
            (0, u.useLayoutEffect)(I, P),
            et[22] !== eF || et[23] !== tc
              ? ((M = () => {
                  let e = tn.current
                  if ("scroll" !== eF || tc || null == e) return
                  let t = new ResizeObserver(() => {
                    to({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (R = [eF, tc]),
                (et[22] = eF),
                (et[23] = tc),
                (et[24] = M),
                (et[25] = R))
              : ((M = et[24]), (R = et[25])),
            (0, u.useLayoutEffect)(M, R))
          let tN =
            null == eo
              ? null
              : (0, n.jsx)("div", {
                  className: (0, o.A)(
                    "w-full empty:hidden",
                    "inset" === (void 0 === ei ? "inset" : ei) && ["mx-auto pt-panel", tb, eQ],
                  ),
                  children: eo,
                })
          et[26] !== ti ||
          et[27] !== ef ||
          et[28] !== eY ||
          et[29] !== tg ||
          et[30] !== ts ||
          et[31] !== ev ||
          et[32] !== tc ||
          et[33] !== td ||
          et[34] !== tv ||
          et[35] !== eS ||
          et[36] !== eE ||
          et[37] !== eI ||
          et[38] !== eq ||
          et[39] !== tA
            ? ((O =
                ti && (td || null != eI)
                  ? (0, n.jsx)(m.F, {
                      divider: !tg,
                      children: (0, n.jsxs)(x.oE, {
                        inset: eq,
                        children: [
                          (0, n.jsx)(s.N, {
                            initial: !1,
                            children: td
                              ? (0, n.jsx)(
                                  c.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    "data-app-shell-overlay-page-header": (tc && null == eI) || void 0,
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: tA,
                                    children:
                                      ts && null != ev
                                        ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              (0, n.jsx)("h1", { ref: eE, className: "sr-only", children: eS }),
                                              ev,
                                            ],
                                          })
                                        : (0, n.jsx)("h1", {
                                            ref: eE,
                                            className: (0, o.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              tv,
                                              "inset" === eY ? "px-2" : null,
                                            ),
                                            children: eS,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eI || tc
                            ? (0, n.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [tc ? ef : null, eI],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (et[26] = ti),
              (et[27] = ef),
              (et[28] = eY),
              (et[29] = tg),
              (et[30] = ts),
              (et[31] = ev),
              (et[32] = tc),
              (et[33] = td),
              (et[34] = tv),
              (et[35] = eS),
              (et[36] = eE),
              (et[37] = eI),
              (et[38] = eq),
              (et[39] = tA),
              (et[40] = O))
            : (O = et[40])
          let tC = t_ || !ti ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tk = !ti && !eK && "max-md:pt-[var(--height-toolbar)]",
            tS = !ti && eK && "browser:max-md:pt-[var(--height-toolbar)]",
            tE = !ti && "profile" === eH && "bg-surface-card"
          et[41] !== tC || et[42] !== tk || et[43] !== tS || et[44] !== tE
            ? ((G = (0, o.A)(tC, tk, tS, tE)), (et[41] = tC), (et[42] = tk), (et[43] = tS), (et[44] = tE), (et[45] = G))
            : (G = et[45])
          let tI = eK || void 0,
            tP = e$ && "@container/manager",
            tM = "profile" === eH && "bg-surface-card",
            tR =
              tp &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tO = !eB && "[scrollbar-gutter:stable]",
            tG = eB && (tg ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tD = !t_ && "relative",
            tH = tc && "vertical-scroll-fade-mask-top"
          et[46] !== tP ||
          et[47] !== tM ||
          et[48] !== tR ||
          et[49] !== tO ||
          et[50] !== tG ||
          et[51] !== tD ||
          et[52] !== tH
            ? ((D = (0, o.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tP, tM, tR, tO, tG, tD, tH)),
              (et[46] = tP),
              (et[47] = tM),
              (et[48] = tR),
              (et[49] = tO),
              (et[50] = tG),
              (et[51] = tD),
              (et[52] = tH),
              (et[53] = D))
            : (D = et[53])
          let tL = (!ts && null == eI && (!!ti || !tg)) || void 0,
            tF = "inline" === eF ? eX : void 0
          et[54] !== eR ||
          et[55] !== ty ||
          et[56] !== tm ||
          et[57] !== th ||
          et[58] !== eL ||
          et[59] !== eU ||
          et[60] !== eJ ||
          et[61] !== eK ||
          et[62] !== eC ||
          et[63] !== eV
            ? ((H =
                ty || ("when-scrolled" === eL && "sticky" === eU && (tm || null != eC))
                  ? (e) => {
                      let t = e9.current,
                        r = te.current
                      if (eR && !eK && null != t && null != r) {
                        t.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`)
                        let n = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((n.bottom - r.getBoundingClientRect().top) * t.offsetHeight) / n.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      ;(eJ(
                        eK && th && null != t
                          ? e.currentTarget.scrollTop > 0 &&
                              t.getBoundingClientRect().top <=
                                e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(t).top)
                          : e.currentTarget.scrollTop > 0,
                      ),
                        eK && th && null != t && w(e.currentTarget, t, eV))
                    }
                  : void 0),
              (et[54] = eR),
              (et[55] = ty),
              (et[56] = tm),
              (et[57] = th),
              (et[58] = eL),
              (et[59] = eU),
              (et[60] = eJ),
              (et[61] = eK),
              (et[62] = eC),
              (et[63] = eV),
              (et[64] = H))
            : (H = et[64])
          let tY = !ti && "h-full"
          ;(et[65] !== tY
            ? ((L = (0, o.A)("flex min-h-full w-full flex-col", tY)), (et[65] = tY), (et[66] = L))
            : (L = et[66]),
            et[67] !== t_ || et[68] !== e7
              ? ((F = t_ ? { paddingBottom: e7 } : void 0), (et[67] = t_), (et[68] = e7), (et[69] = F))
              : (F = et[69]))
          let tz = eG && ty ? null : tN
          ;(et[70] !== eQ ||
          et[71] !== eO ||
          et[72] !== ty ||
          et[73] !== tm ||
          et[74] !== th ||
          et[75] !== ef ||
          et[76] !== tu ||
          et[77] !== tp ||
          et[78] !== eX ||
          et[79] !== ej ||
          et[80] !== eA ||
          et[81] !== eN ||
          et[82] !== tT ||
          et[83] !== tx ||
          et[84] !== eK ||
          et[85] !== tv ||
          et[86] !== eC ||
          et[87] !== ek ||
          et[88] !== eS ||
          et[89] !== eE ||
          et[90] !== tb ||
          et[91] !== eM
            ? ((Y = ty
                ? (0, n.jsx)(_.g, {
                    ref: e9,
                    className: tb,
                    horizontalPaddingClassName: eQ,
                    presentation: tp ? "directory" : "default",
                    collapseOnScroll: tx,
                    expandSearchWhenWrapped: eO,
                    wrapActionsAtNarrowWidth: eM,
                    showDivider: th && eX,
                    sticky: th,
                    title:
                      null == eS
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("h1", {
                                ref: eE,
                                className: (0, o.A)(
                                  "flex min-h-9 items-center text-default",
                                  eK && "browser:max-md:min-h-0",
                                  tv,
                                  tu.title,
                                ),
                                children: eS,
                              }),
                              null == ek || (eK && !tp)
                                ? null
                                : (0, n.jsx)("div", {
                                    className: (0, o.A)(
                                      "text-base leading-6 text-secondary",
                                      tx && "max-w-lg",
                                      eK && !tp && "browser:max-md:hidden",
                                    ),
                                    children: ek,
                                  }),
                            ],
                          }),
                    actions: tm
                      ? (0, n.jsx)(_.T, {
                          search:
                            eA ??
                            (null == ej
                              ? null
                              : (0, n.jsx)(y.s, {
                                  ...ej,
                                  autoFocus: tT,
                                  className: (0, o.A)("min-w-0 flex-1", ej.className),
                                })),
                          controls: eN,
                          actions: ef,
                        })
                      : ef,
                    navigation: eK ? void 0 : eC,
                  })
                : null),
              (et[70] = eQ),
              (et[71] = eO),
              (et[72] = ty),
              (et[73] = tm),
              (et[74] = th),
              (et[75] = ef),
              (et[76] = tu),
              (et[77] = tp),
              (et[78] = eX),
              (et[79] = ej),
              (et[80] = eA),
              (et[81] = eN),
              (et[82] = tT),
              (et[83] = tx),
              (et[84] = eK),
              (et[85] = tv),
              (et[86] = eC),
              (et[87] = ek),
              (et[88] = eS),
              (et[89] = eE),
              (et[90] = tb),
              (et[91] = eM),
              (et[92] = Y))
            : (Y = et[92]),
            et[93] !== eQ ||
            et[94] !== ty ||
            et[95] !== tp ||
            et[96] !== eK ||
            et[97] !== ek ||
            et[98] !== tb ||
            et[99] !== eM
              ? ((z =
                  ty && eK && !tp && null != ek
                    ? (0, n.jsx)("div", {
                        className: eM ? "@container/searchable-header" : "contents",
                        children: (0, n.jsx)("div", {
                          "data-page-subtitle": eM || void 0,
                          className: (0, o.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            tb,
                            eQ,
                          ),
                          children: (0, n.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: ek }),
                        }),
                      })
                    : null),
                (et[93] = eQ),
                (et[94] = ty),
                (et[95] = tp),
                (et[96] = eK),
                (et[97] = ek),
                (et[98] = tb),
                (et[99] = eM),
                (et[100] = z))
              : (z = et[100]),
            et[101] !== eQ || et[102] !== ty || et[103] !== eK || et[104] !== eC || et[105] !== tb
              ? ((B =
                  ty && eK && null != eC
                    ? (0, n.jsx)("div", {
                        className: (0, o.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tb, eQ),
                        children: eC,
                      })
                    : null),
                (et[101] = eQ),
                (et[102] = ty),
                (et[103] = eK),
                (et[104] = eC),
                (et[105] = tb),
                (et[106] = B))
              : (B = et[106]))
          let tB = eG && ty ? tN : null
          ;(et[107] !== eQ ||
          et[108] !== ty ||
          et[109] !== ti ||
          et[110] !== tm ||
          et[111] !== ef ||
          et[112] !== ta ||
          et[113] !== tu ||
          et[114] !== eY ||
          et[115] !== tf ||
          et[116] !== tg ||
          et[117] !== e$ ||
          et[118] !== ts ||
          et[119] !== tc ||
          et[120] !== eK ||
          et[121] !== tv ||
          et[122] !== ek ||
          et[123] !== eS ||
          et[124] !== eE ||
          et[125] !== tA ||
          et[126] !== tb
            ? ((U =
                !ti || ts || ty
                  ? null
                  : (0, n.jsx)(
                      c.P.div,
                      {
                        ref: tr,
                        "aria-hidden": tc || void 0,
                        inert: tc,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: tA,
                        children: (0, n.jsx)("div", {
                          className: (0, o.A)(
                            "mx-auto w-full",
                            tb,
                            tu.inset,
                            !tm && e$ && "pb-8",
                            !tm && !e$ && (tf || tg ? "pb-6" : "pb-4"),
                            eQ,
                          ),
                          children: (0, n.jsxs)("div", {
                            className: (0, o.A)(
                              "flex justify-between",
                              "profile" === eY ? "gap-2 px-1" : "gap-4",
                              tf && "flex-wrap items-center",
                              tg && "items-center",
                              !tf && !tg && "items-start",
                              "hero" === eY && "justify-center text-center",
                              "inset" === eY ? "px-2" : null,
                            ),
                            children: [
                              (0, n.jsxs)("div", {
                                className: (0, o.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === eY || "hero" === eY ? "gap-2" : !e$ && "gap-1",
                                ),
                                children: [
                                  (0, n.jsx)("h1", {
                                    ref: tc ? void 0 : eE,
                                    className: (0, o.A)("text-default", tv, tu.title),
                                    children: eS,
                                  }),
                                  null == ek
                                    ? null
                                    : (0, n.jsx)("div", {
                                        className: (0, o.A)(
                                          "text-secondary",
                                          e$
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tg ? "leading-6.5" : "leading-6"],
                                          "profile" === eY && "tracking-[-0.32px] sm:truncate",
                                          e$ && "tracking-[-0.4px]",
                                          eK && !tg && "browser:max-md:hidden",
                                        ),
                                        children: ek,
                                      }),
                                ],
                              }),
                              null == ef
                                ? null
                                : (0, n.jsx)("div", {
                                    ref: tn,
                                    className: (0, o.A)("min-w-0", tf ? "max-w-full" : "shrink-0"),
                                    style: tc ? ta : void 0,
                                    children: tc ? null : ef,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (et[107] = eQ),
              (et[108] = ty),
              (et[109] = ti),
              (et[110] = tm),
              (et[111] = ef),
              (et[112] = ta),
              (et[113] = tu),
              (et[114] = eY),
              (et[115] = tf),
              (et[116] = tg),
              (et[117] = e$),
              (et[118] = ts),
              (et[119] = tc),
              (et[120] = eK),
              (et[121] = tv),
              (et[122] = ek),
              (et[123] = eS),
              (et[124] = eE),
              (et[125] = tA),
              (et[126] = tb),
              (et[127] = U))
            : (U = et[127]),
            et[128] !== U
              ? ((q = (0, n.jsx)(s.N, { initial: !1, mode: "popLayout", children: U })), (et[128] = U), (et[129] = q))
              : (q = et[129]),
            et[130] !== eQ ||
            et[131] !== t_ ||
            et[132] !== ty ||
            et[133] !== tm ||
            et[134] !== eL ||
            et[135] !== eY ||
            et[136] !== eX ||
            et[137] !== ej ||
            et[138] !== eA ||
            et[139] !== e5 ||
            et[140] !== e7 ||
            et[141] !== eU ||
            et[142] !== eN ||
            et[143] !== tT ||
            et[144] !== eC ||
            et[145] !== tb
              ? ((K =
                  !tm || ty
                    ? null
                    : (0, n.jsx)("div", {
                        ref: e3,
                        className: t_ ? void 0 : "contents",
                        style: t_ ? { height: e7 } : void 0,
                        children: (0, n.jsx)("div", {
                          ref: e4,
                          className: (0, o.A)(!t_ && "contents", t_ && e5 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, n.jsxs)(j, {
                            className: "top-0",
                            showScrollFade: "always" === eL || eX,
                            sticky: "sticky" === eU,
                            children: [
                              (0, n.jsxs)("div", {
                                className: (0, o.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tb,
                                  "hero" === eY && "pt-6",
                                  "catalog" === eY && "pt-4",
                                  "hero" !== eY && "catalog" !== eY && "pt-panel",
                                  eQ,
                                ),
                                children: [
                                  eA ??
                                    (null == ej
                                      ? null
                                      : (0, n.jsx)(y.s, {
                                          ...ej,
                                          autoFocus: tT,
                                          className: (0, o.A)("min-w-0 flex-1", ej.className),
                                        })),
                                  eN,
                                ],
                              }),
                              null == eC
                                ? null
                                : (0, n.jsx)("div", {
                                    className: (0, o.A)("mx-auto w-full", tb, "hero" === eY && "pt-12", eQ),
                                    children: eC,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (et[130] = eQ),
                (et[131] = t_),
                (et[132] = ty),
                (et[133] = tm),
                (et[134] = eL),
                (et[135] = eY),
                (et[136] = eX),
                (et[137] = ej),
                (et[138] = eA),
                (et[139] = e5),
                (et[140] = e7),
                (et[141] = eU),
                (et[142] = eN),
                (et[143] = tT),
                (et[144] = eC),
                (et[145] = tb),
                (et[146] = K))
              : (K = et[146]),
            et[147] !== eQ ||
            et[148] !== ty ||
            et[149] !== tm ||
            et[150] !== eL ||
            et[151] !== tf ||
            et[152] !== eX ||
            et[153] !== eU ||
            et[154] !== eC ||
            et[155] !== tb
              ? ((V =
                  tm || null == eC || ty
                    ? null
                    : (0, n.jsx)(j, {
                        className: "top-0",
                        showScrollFade: "always" === eL || eX,
                        sticky: "sticky" === eU,
                        children: (0, n.jsx)("div", {
                          className: (0, o.A)("mx-auto w-full", !tf && "py-2", tb, eQ),
                          children: eC,
                        }),
                      })),
                (et[147] = eQ),
                (et[148] = ty),
                (et[149] = tm),
                (et[150] = eL),
                (et[151] = tf),
                (et[152] = eX),
                (et[153] = eU),
                (et[154] = eC),
                (et[155] = tb),
                (et[156] = V))
              : (V = et[156]))
          let tU = !!(void 0 === er || er) && "position",
            tq = e$ && "pb-16",
            tK = "profile" === eY && "pb-23",
            tV = !tg && (eK && tf ? "pb-4" : "pb-panel"),
            t$ = eD && tf && !ty && "pt-3.5",
            tW = eD && !tf && !tm && null == eC && "pt-panel",
            tQ = eD && !tf && (tm || null != eC) && (tp ? "pt-3 md:pt-5" : "pt-5")
          return (
            et[157] !== ec ||
            et[158] !== eQ ||
            et[159] !== tq ||
            et[160] !== tK ||
            et[161] !== tV ||
            et[162] !== t$ ||
            et[163] !== tW ||
            et[164] !== tQ ||
            et[165] !== tb
              ? (($ = (0, o.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", tq, tK, tV, tb, t$, tW, tQ, ec, eQ)),
                (et[157] = ec),
                (et[158] = eQ),
                (et[159] = tq),
                (et[160] = tK),
                (et[161] = tV),
                (et[162] = t$),
                (et[163] = tW),
                (et[164] = tQ),
                (et[165] = tb),
                (et[166] = $))
              : ($ = et[166]),
            et[167] !== tw || et[168] !== ts || et[169] !== ev || et[170] !== eb
              ? ((W = tw
                  ? (0, n.jsxs)(A, {
                      children: [
                        ts ? null : ev,
                        null == eb ? null : (0, n.jsx)("div", { className: "ms-auto", children: eb }),
                      ],
                    })
                  : null),
                (et[167] = tw),
                (et[168] = ts),
                (et[169] = ev),
                (et[170] = eb),
                (et[171] = W))
              : (W = et[171]),
            et[172] !== es || et[173] !== ep || et[174] !== tU || et[175] !== $ || et[176] !== W || et[177] !== tA
              ? ((Q = (0, n.jsxs)(c.P.div, {
                  ref: te,
                  layout: tU,
                  className: $,
                  transition: tA,
                  children: [W, ep, es],
                })),
                (et[172] = es),
                (et[173] = ep),
                (et[174] = tU),
                (et[175] = $),
                (et[176] = W),
                (et[177] = tA),
                (et[178] = Q))
              : (Q = et[178]),
            et[179] !== L ||
            et[180] !== F ||
            et[181] !== tz ||
            et[182] !== Y ||
            et[183] !== z ||
            et[184] !== B ||
            et[185] !== tB ||
            et[186] !== q ||
            et[187] !== K ||
            et[188] !== V ||
            et[189] !== Q
              ? ((Z = (0, n.jsxs)("div", { className: L, style: F, children: [tz, Y, z, B, tB, q, K, V, Q] })),
                (et[179] = L),
                (et[180] = F),
                (et[181] = tz),
                (et[182] = Y),
                (et[183] = z),
                (et[184] = B),
                (et[185] = tB),
                (et[186] = q),
                (et[187] = K),
                (et[188] = V),
                (et[189] = Q),
                (et[190] = Z))
              : (Z = et[190]),
            et[191] !== tt ||
            et[192] !== tI ||
            et[193] !== D ||
            et[194] !== tL ||
            et[195] !== tF ||
            et[196] !== H ||
            et[197] !== Z
              ? ((X = (0, n.jsx)("div", {
                  ref: tt,
                  "data-new-slate-layout": tI,
                  className: D,
                  "data-app-shell-inline-page-header": tL,
                  "data-app-shell-page-scrolled": tF,
                  onScroll: H,
                  children: Z,
                })),
                (et[191] = tt),
                (et[192] = tI),
                (et[193] = D),
                (et[194] = tL),
                (et[195] = tF),
                (et[196] = H),
                (et[197] = Z),
                (et[198] = X))
              : (X = et[198]),
            et[199] !== G || et[200] !== X
              ? ((J = (0, n.jsx)("div", { className: G, children: X })), (et[199] = G), (et[200] = X), (et[201] = J))
              : (J = et[201]),
            et[202] !== O || et[203] !== J
              ? ((ee = (0, n.jsxs)(n.Fragment, { children: [O, J] })), (et[202] = O), (et[203] = J), (et[204] = ee))
              : (ee = et[204]),
            ee
          )
        },
        uC: A,
      },
    )
  },
  DiyT(e, t, r) {
    r.d(t, { g: () => g, T: () => h })
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      l = r("W5pg"),
      i = r("LIss"),
      s = r("zd8w"),
      c = r("I7bK"),
      d = r("HgLj"),
      u = "title-x3JvHx",
      p = "titleContent-nEpGod",
      f = "toolbar-wpnXAF"
    function g(e) {
      let t,
        r,
        l,
        i,
        c,
        g,
        h,
        x,
        y,
        _,
        v,
        b,
        w = (0, a.c)(35),
        {
          ref: j,
          className: A,
          horizontalPaddingClassName: T,
          collapseOnScroll: N,
          presentation: C,
          expandSearchWhenWrapped: k,
          showDivider: S,
          sticky: E,
          wrapActionsAtNarrowWidth: I,
          title: P,
          actions: M,
          navigation: R,
        } = e,
        O = void 0 === T ? "px-panel" : T,
        G = void 0 !== N && N,
        D = (0, s.useRef)(null)
      w[0] !== j ? ((t = (0, d.P)(D, j)), (w[0] = j), (w[1] = t)) : (t = w[1])
      let H = t,
        L = (0, s.useRef)(null)
      ;(w[2] !== G
        ? ((r = () => {
            let e = D.current,
              t = L.current
            if (!e || !t) return
            let r = new ResizeObserver(() => {
                let r = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${r}px`)
                let n = t.querySelector(`.${f}`)
                if (!G || null == n) return void e.removeAttribute("data-collapsible")
                let a = t.querySelector(`.${p}`)
                if (null == a) return
                let o = a.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(o?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              n = () => {
                for (let e of (r.disconnect(), [t, ...t.querySelectorAll(`.${u}`)])) r.observe(e)
              },
              a = new MutationObserver(n)
            return (
              a.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
              n(),
              () => {
                ;(r.disconnect(), a.disconnect())
              }
            )
          }),
          (l = [G]),
          (w[2] = G),
          (w[3] = r),
          (w[4] = l))
        : ((r = w[3]), (l = w[4])),
        (0, s.useLayoutEffect)(r, l))
      let F = G || void 0,
        Y = (void 0 !== k && k) || void 0,
        z = S || void 0,
        B = void 0 === E || E || void 0,
        U = I || void 0,
        q = "directory" === (void 0 === C ? "default" : C) && "directoryShell-WYPHEM",
        K = S ? "border-subtle" : "border-transparent"
      ;(w[5] !== q || w[6] !== K
        ? ((i = (0, o.A)("shell-yWQKe6", q, K)), (w[5] = q), (w[6] = K), (w[7] = i))
        : (i = w[7]),
        w[8] !== Y || w[9] !== z || w[10] !== B || w[11] !== U || w[12] !== i || w[13] !== F
          ? ((c = {
              "data-scroll-collapse": F,
              "data-expand-search": Y,
              "data-scrolled": z,
              "data-sticky": B,
              "data-wrap-actions": U,
              className: i,
            }),
            (w[8] = Y),
            (w[9] = z),
            (w[10] = B),
            (w[11] = U),
            (w[12] = i),
            (w[13] = F),
            (w[14] = c))
          : (c = w[14]))
      let V = c
      ;(w[15] !== A || w[16] !== O
        ? ((g = (0, o.A)("content-ymUHGU", "mx-auto w-full", O, A)), (w[15] = A), (w[16] = O), (w[17] = g))
        : (g = w[17]),
        w[18] !== P
          ? ((h =
              null == P
                ? null
                : (0, n.jsx)("div", { className: u, children: (0, n.jsx)("div", { className: p, children: P }) })),
            (w[18] = P),
            (w[19] = h))
          : (h = w[19]),
        w[20] !== M
          ? ((x = (0, n.jsx)("div", { className: "actions-hHaS5d", children: M })), (w[20] = M), (w[21] = x))
          : (x = w[21]),
        w[22] !== h || w[23] !== x
          ? ((y = (0, n.jsxs)("div", { className: "headerRow-4OaZM9", children: [h, x] })),
            (w[22] = h),
            (w[23] = x),
            (w[24] = y))
          : (y = w[24]),
        w[25] !== R
          ? ((_ = (0, n.jsx)("div", { className: "navigation-AqGYXP", children: R })), (w[25] = R), (w[26] = _))
          : (_ = w[26]),
        w[27] !== g || w[28] !== y || w[29] !== _
          ? ((v = (0, n.jsxs)("div", { ref: L, className: g, children: [y, _] })),
            (w[27] = g),
            (w[28] = y),
            (w[29] = _),
            (w[30] = v))
          : (v = w[30]))
      let $ = v
      return (
        w[31] !== $ || w[32] !== V || w[33] !== H
          ? ((b = (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(n.Fragment, { children: (0, n.jsx)(m, { ref: H, ...V, children: $ }) }), null],
            })),
            (w[31] = $),
            (w[32] = V),
            (w[33] = H),
            (w[34] = b))
          : (b = w[34]),
        b
      )
    }
    function m(e) {
      let t,
        r,
        o,
        d = (0, a.c)(7),
        u = (0, s.useContext)(c.f$)
      d[0] !== u?.titleBarLeftInset
        ? ((t = () => `${u?.titleBarLeftInset.get() ?? 0}px`), (d[0] = u?.titleBarLeftInset), (d[1] = t))
        : (t = d[1])
      let p = (0, l.G)(t)
      d[2] !== p ? ((r = { "--app-shell-titlebar-left-inset": p }), (d[2] = p), (d[3] = r)) : (r = d[3])
      let f = r
      return (
        d[4] !== e || d[5] !== f
          ? ((o = (0, n.jsx)(i.P.div, { ...e, style: f })), (d[4] = e), (d[5] = f), (d[6] = o))
          : (o = d[6]),
        o
      )
    }
    function h(e) {
      let t,
        r,
        o,
        l,
        i,
        s = (0, a.c)(14),
        { filterTags: c, controls: d, search: u, actions: p, fixedSearchWidth: g } = e
      return (
        s[0] !== c
          ? ((t = (0, n.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, n.jsx)("div", { className: "filterTagsContent-VSk9tY", children: c }),
            })),
            (s[0] = c),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== d
          ? ((r = (0, n.jsx)("div", { className: "viewControls-ty6WO3", children: d })), (s[2] = d), (s[3] = r))
          : (r = s[3]),
        s[4] !== g || s[5] !== u
          ? ((o =
              null != u &&
              (0, n.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": g || void 0, children: u })),
            (s[4] = g),
            (s[5] = u),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== p
          ? ((l = (0, n.jsx)("div", { className: "pageActions-Q2Fd0B", children: p })), (s[7] = p), (s[8] = l))
          : (l = s[8]),
        s[9] !== t || s[10] !== r || s[11] !== o || s[12] !== l
          ? ((i = (0, n.jsxs)("div", { className: f, children: [t, r, o, l] })),
            (s[9] = t),
            (s[10] = r),
            (s[11] = o),
            (s[12] = l),
            (s[13] = i))
          : (i = s[13]),
        i
      )
    }
  },
  zkPp(e, t, r) {
    r.d(t, { fy: () => d, eb: () => s, Pn: () => c })
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      l = r("HZfM"),
      i = r("DVfE")
    function s(e) {
      let t,
        r,
        l,
        i,
        s,
        c = (0, a.c)(10)
      c[0] !== e
        ? (({ className: t, density: r, ...l } = e), (c[0] = e), (c[1] = t), (c[2] = r), (c[3] = l))
        : ((t = c[1]), (r = c[2]), (l = c[3]))
      let d = "preview" === r && "previewGroup-UWHyK1"
      return (
        c[4] !== t || c[5] !== d
          ? ((i = (0, o.A)("group-Zlx1HD", d, t)), (c[4] = t), (c[5] = d), (c[6] = i))
          : (i = c[6]),
        c[7] !== l || c[8] !== i
          ? ((s = (0, n.jsx)("div", { ...l, className: i })), (c[7] = l), (c[8] = i), (c[9] = s))
          : (s = c[9]),
        s
      )
    }
    function c(e) {
      let t,
        r,
        l,
        i,
        s = (0, a.c)(8)
      return (
        s[0] !== e ? (({ className: t, ...r } = e), (s[0] = e), (s[1] = t), (s[2] = r)) : ((t = s[1]), (r = s[2])),
        s[3] !== t ? ((l = (0, o.A)("groupItem-WKdBwf", t)), (s[3] = t), (s[4] = l)) : (l = s[4]),
        s[5] !== r || s[6] !== l
          ? ((i = (0, n.jsx)("div", { ...r, className: l })), (s[5] = r), (s[6] = l), (s[7] = i))
          : (i = s[7]),
        i
      )
    }
    function d(e) {
      let t,
        r,
        s,
        c,
        d,
        u,
        p = (0, a.c)(53),
        {
          ariaCurrent: f,
          ariaDescribedBy: g,
          ariaLabel: m,
          buttonProps: h,
          children: x,
          className: y,
          compactSecondLine: _,
          density: v,
          hasInteractiveContent: b,
          icon: w,
          isDisabled: j,
          isSelected: A,
          onSelect: T,
          onContextMenu: N,
          rightText: C,
          rightTextPosition: k,
          role: S,
          secondaryTitle: E,
          secondLine: I,
          secondLineRightText: P,
          showDivider: M,
          surface: R,
          tone: O,
          title: G,
          titleAdornment: D,
          titleWrap: H,
          to: L,
        } = e,
        F = void 0 !== _ && _,
        Y = void 0 === v ? "default" : v,
        z = void 0 !== b && b,
        B = void 0 !== j && j,
        U = void 0 === R ? "plain" : R,
        q = void 0 === O ? "default" : O,
        K = void 0 !== H && H,
        V = "default" !== Y,
        $ = M ?? "plain" === U
      p[0] !== T ? ((t = { onSelect: T }), (p[0] = T), (p[1] = t)) : (t = p[1])
      let W = (0, i.D)(t),
        Q = null != C && "center" === (void 0 === k ? "top" : k)
      p[2] !== x ||
      p[3] !== F ||
      p[4] !== Y ||
      p[5] !== Q ||
      p[6] !== w ||
      p[7] !== V ||
      p[8] !== C ||
      p[9] !== I ||
      p[10] !== P ||
      p[11] !== E ||
      p[12] !== G ||
      p[13] !== D ||
      p[14] !== K ||
      p[15] !== q
        ? ((r =
            x ??
            (0, n.jsxs)("div", {
              className: (0, o.A)("relative flex min-w-0 gap-2", V && !K ? "items-center" : "items-start"),
              children: [
                w &&
                  (0, n.jsx)("span", {
                    className: (0, o.A)("flex min-w-4 shrink-0 items-center justify-center", V ? "min-h-5" : "min-h-6"),
                    children: w,
                  }),
                (0, n.jsxs)("div", {
                  className: (0, o.A)("flex min-w-0 flex-1 flex-col", F ? "gap-0" : V ? "gap-0.5" : "gap-1"),
                  children: [
                    (0, n.jsxs)("div", {
                      className: (0, o.A)(
                        "flex min-w-0 gap-3",
                        V && !K && ("row" === Y || !I) && "items-center",
                        (K || ("compact" === Y && !!I)) && "items-start",
                        !V && !K && "items-baseline",
                      ),
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, o.A)(
                            "flex min-w-0 flex-1 items-baseline gap-2",
                            V && K ? "text-sm leading-5" : "text-base leading-6",
                          ),
                          children: [
                            (0, n.jsx)("span", {
                              className: (0, o.A)(
                                "min-w-0",
                                K ? "wrap-anywhere" : "truncate",
                                "default" === q && "text-default",
                              ),
                              children: G,
                            }),
                            null != E
                              ? (0, n.jsx)("span", {
                                  className: "max-w-48 shrink-0 truncate text-codex-description",
                                  children: E,
                                })
                              : null,
                            null != D
                              ? (0, n.jsx)("span", { className: "flex min-w-0 shrink self-center", children: D })
                              : null,
                          ],
                        }),
                        null == C || Q
                          ? null
                          : (0, n.jsx)("div", {
                              className: (0, o.A)(
                                "flex shrink-0 items-center text-codex-description",
                                V ? "min-h-5 text-xs" : "min-h-6 text-base",
                              ),
                              children: C,
                            }),
                      ],
                    }),
                    I &&
                      (0, n.jsxs)("div", {
                        className: (0, o.A)(
                          "flex min-w-0 items-center justify-between text-codex-description",
                          V ? "gap-2 text-xs" : "gap-3 text-sm",
                          V || F ? "leading-4" : "leading-[22px]",
                        ),
                        children: [
                          (0, n.jsx)("div", { className: "min-w-0 flex-1", children: I }),
                          P &&
                            (0, n.jsx)("div", {
                              className: (0, o.A)("flex shrink-0 items-center", V ? "min-h-4" : "min-h-[22px]"),
                              children: P,
                            }),
                        ],
                      }),
                  ],
                }),
                Q
                  ? (0, n.jsx)("div", {
                      className: "flex min-h-6 shrink-0 items-center self-center text-base text-codex-description",
                      children: C,
                    })
                  : null,
              ],
            })),
          (p[2] = x),
          (p[3] = F),
          (p[4] = Y),
          (p[5] = Q),
          (p[6] = w),
          (p[7] = V),
          (p[8] = C),
          (p[9] = I),
          (p[10] = P),
          (p[11] = E),
          (p[12] = G),
          (p[13] = D),
          (p[14] = K),
          (p[15] = q),
          (p[16] = r))
        : (r = p[16])
      let Z = r
      if (
        p[17] !== f ||
        p[18] !== g ||
        p[19] !== m ||
        p[20] !== y ||
        p[21] !== Z ||
        p[22] !== Y ||
        p[23] !== $ ||
        p[24] !== z ||
        p[25] !== V ||
        p[26] !== B ||
        p[27] !== A ||
        p[28] !== h ||
        p[29] !== N ||
        p[30] !== T ||
        p[31] !== S ||
        p[32] !== U ||
        p[33] !== L ||
        p[34] !== q
      ) {
        c = Symbol.for("react.early_return_sentinel")
        e: if (
          ((s = (0, o.A)(
            "group w-full text-start text-base outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
            "row-_z4Vo0",
            "row" === Y && "tableRow-GphDVD",
            "profile" === Y && "profile-nyFLvQ",
            $ && "divider-nxTXf9",
            A && "selected-uOOibA",
            B && "disabled-tU2D9v",
            "muted" === q && (A ? "text-default" : "text-secondary"),
            "muted" === q && !B && "hover:text-default focus-within:text-default",
            "profile" === Y && "min-h-18 border-b border-transparent py-4",
            "row" === Y && "px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y",
            "profile" !== Y && "row" !== Y && ["min-h-10 px-3", V ? "py-2.5" : "py-3"],
            "raised" === U && "rounded-2xl",
            "plain" === U && (V ? "rounded-xl" : "rounded-lg"),
            "raised" === U && "border border-subtle shadow-card",
            "raised" === U && !B && !A && "hover:border-strong",
            "raised" === U && !A && "bg-surface-elevated/60",
            B ? "cursor-default opacity-50" : "cursor-interaction",
            "embedded" !== U && !B && A && "bg-primary-soft-active",
            ("plain" === U || "flush" === U) && !B && !A && "hover:bg-primary-ghost-hover",
            y,
          )),
          (z || null != L) && "row" !== S)
        ) {
          let e,
            t = {
              className: (0, o.A)(
                "absolute inset-0 cursor-interaction outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-default",
                "raised" === U && "rounded-2xl",
                "plain" === U && "rounded-lg",
                "embedded" === U && "rounded-xl focus-visible:ring-inset",
              ),
              "aria-current": f,
              "aria-label": m,
              "aria-describedby": g,
            }
          ;(p[37] !== Z
            ? ((e = (0, n.jsx)("div", { className: "pointer-events-none relative", children: Z })),
              (p[37] = Z),
              (p[38] = e))
            : (e = p[38]),
            (c = (0, n.jsxs)("div", {
              className: (0, o.A)("relative", s),
              onContextMenu: N,
              children: [
                null == L || B
                  ? (0, n.jsx)("button", {
                      ...t,
                      type: "button",
                      disabled: B,
                      onClick: T,
                      ...h,
                      className: (0, o.A)(t.className, h?.className),
                    })
                  : (0, n.jsx)(l.N_, { ...t, to: L }),
                e,
              ],
            })))
          break e
        }
        ;((p[17] = f),
          (p[18] = g),
          (p[19] = m),
          (p[20] = y),
          (p[21] = Z),
          (p[22] = Y),
          (p[23] = $),
          (p[24] = z),
          (p[25] = V),
          (p[26] = B),
          (p[27] = A),
          (p[28] = h),
          (p[29] = N),
          (p[30] = T),
          (p[31] = S),
          (p[32] = U),
          (p[33] = L),
          (p[34] = q),
          (p[35] = s),
          (p[36] = c))
      } else ((s = p[35]), (c = p[36]))
      if (c !== Symbol.for("react.early_return_sentinel")) return c
      p[39] !== W || p[40] !== B ? ((d = B ? {} : W), (p[39] = W), (p[40] = B), (p[41] = d)) : (d = p[41])
      let X = S ?? W.role,
        J = "row" === S ? A : void 0
      return (
        p[42] !== f ||
        p[43] !== g ||
        p[44] !== m ||
        p[45] !== Z ||
        p[46] !== B ||
        p[47] !== N ||
        p[48] !== s ||
        p[49] !== d ||
        p[50] !== X ||
        p[51] !== J
          ? ((u = (0, n.jsx)("div", {
              "aria-current": f,
              "aria-describedby": g,
              "aria-label": m,
              "aria-disabled": B,
              className: s,
              onContextMenu: N,
              ...d,
              role: X,
              "aria-selected": J,
              children: Z,
            })),
            (p[42] = f),
            (p[43] = g),
            (p[44] = m),
            (p[45] = Z),
            (p[46] = B),
            (p[47] = N),
            (p[48] = s),
            (p[49] = d),
            (p[50] = X),
            (p[51] = J),
            (p[52] = u))
          : (u = p[52]),
        u
      )
    }
  },
  r21w(e, t, r) {
    r.d(t, { a: () => l })
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57")
    function l(e) {
      let t,
        r,
        l,
        i,
        s = (0, a.c)(8)
      return (
        s[0] !== e ? (({ className: t, ...r } = e), (s[0] = e), (s[1] = t), (s[2] = r)) : ((t = s[1]), (r = s[2])),
        s[3] !== t ? ((l = (0, o.A)("Placeholder-M5Cmfu", t)), (s[3] = t), (s[4] = l)) : (l = s[4]),
        s[5] !== r || s[6] !== l
          ? ((i = (0, n.jsx)("div", { className: l, ...r })), (s[5] = r), (s[6] = l), (s[7] = i))
          : (i = s[7]),
        i
      )
    }
  },
  T7QO(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("slpy"),
      l = r("on57"),
      i = r("HZfM"),
      s = r("ZtSy"),
      c = r("zkPp"),
      d = r("YCVA"),
      u = r("UYRh")
    function p(e) {
      let { key: t, component: r, alwaysVisible: a } = e
      return (0, n.jsx)(
        "span",
        {
          className: (0, l.A)(
            "inline-flex items-center",
            !a &&
              "opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[data-state=open]]:opacity-100 pointer-coarse:opacity-100",
          ),
          children: r,
        },
        t,
      )
    }
    function f(e) {
      let { component: t } = e
      return null != t
    }
    function g(e) {
      let t,
        r,
        o = (0, a.c)(5),
        { artwork: l, badge: i } = e
      return (
        o[0] !== l
          ? ((t = (0, n.jsx)("span", {
              className:
                "flex size-full items-center justify-center overflow-hidden rounded-lg border border-default bg-surface",
              "data-library-item-icon": "",
              children: l,
            })),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== i || o[3] !== t
          ? ((r = (0, n.jsxs)("span", { className: "relative size-8 shrink-0", children: [t, i] })),
            (o[2] = i),
            (o[3] = t),
            (o[4] = r))
          : (r = o[4]),
        r
      )
    }
    function m(e) {
      let t,
        r,
        o,
        l = (0, a.c)(8),
        { depth: i, disclosure: s } = e,
        c = null == s || void 0
      return (
        l[0] !== i ? ((t = Array.from({ length: Math.min(i, 2) }, h)), (l[0] = i), (l[1] = t)) : (t = l[1]),
        l[2] !== s
          ? ((r = (0, n.jsx)("span", {
              className: "relative z-10 flex size-4 shrink-0 items-center justify-center",
              children: s,
            })),
            (l[2] = s),
            (l[3] = r))
          : (r = l[3]),
        l[4] !== c || l[5] !== t || l[6] !== r
          ? ((o = (0, n.jsxs)("span", {
              className: "-ms-1 flex max-w-1/4 min-w-4 items-center pe-1",
              "aria-hidden": c,
              children: [t, r],
            })),
            (l[4] = c),
            (l[5] = t),
            (l[6] = r),
            (l[7] = o))
          : (o = l[7]),
        o
      )
    }
    function h(e, t) {
      return (0, n.jsx)("span", { className: "w-7 shrink" }, t)
    }
    function x(e) {
      let t,
        r,
        o = (0, a.c)(3),
        { artwork: i } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.A)(u.A.cardArtwork, "[&>span]:[font-size:inherit] [&_img]:size-14 [&_svg]:size-14")),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== i
          ? ((r = (0, n.jsx)("span", {
              className: "absolute inset-0 flex items-center justify-center",
              children: (0, n.jsx)("span", { className: t, children: i }),
            })),
            (o[1] = i),
            (o[2] = r))
          : (r = o[2]),
        r
      )
    }
    function y(e) {
      let t,
        r,
        o = (0, a.c)(22),
        {
          name: l,
          description: c,
          link: u,
          href: p,
          onActivate: f,
          onOpen: g,
          onSelect: m,
          className: h,
          tabIndex: x,
          children: y,
        } = e
      o[0] !== y || o[1] !== h || o[2] !== c || o[3] !== l || o[4] !== x
        ? ((t = {
            className: h,
            tabIndex: x,
            "aria-label": l,
            "data-library-item-action": "",
            "aria-description": c,
            children: y,
          }),
          (o[0] = y),
          (o[1] = h),
          (o[2] = c),
          (o[3] = l),
          (o[4] = x),
          (o[5] = t))
        : (t = o[5])
      let _ = t
      if (null != u) {
        let e, t, r
        return (
          o[6] !== f || o[7] !== g
            ? ((e = (e) => {
                ;(f?.(e), null != g && (e.preventDefault(), g(e)))
              }),
              (o[6] = f),
              (o[7] = g),
              (o[8] = e))
            : (e = o[8]),
          o[9] !== g
            ? ((t = (e) => {
                1 === e.button && null != g && (e.preventDefault(), g(e))
              }),
              (o[9] = g),
              (o[10] = t))
            : (t = o[10]),
          o[11] !== u || o[12] !== _ || o[13] !== e || o[14] !== t
            ? ((r = (0, n.jsx)(s.G, {
                ..._,
                ...u,
                draggable: !1,
                onClick: e,
                onAuxClick: t,
                showHoverActions: !1,
                underline: "none",
              })),
              (o[11] = u),
              (o[12] = _),
              (o[13] = e),
              (o[14] = t),
              (o[15] = r))
            : (r = o[15]),
          r
        )
      }
      return (
        o[16] !== p || o[17] !== f || o[18] !== g || o[19] !== m || o[20] !== _
          ? ((r =
              null != p
                ? (0, n.jsx)(i.N_, {
                    ..._,
                    to: p,
                    onClick: (e) => {
                      ;(f?.(e),
                        0 === e.button && !e.metaKey && !e.ctrlKey && !e.altKey && m?.(e)
                          ? e.preventDefault()
                          : null != g && (0, d.W)(e) && (e.preventDefault(), g(e)))
                    },
                  })
                : (0, n.jsx)("button", {
                    ..._,
                    type: "button",
                    disabled: null == g,
                    onClick: (e) => {
                      ;(f?.(e), m?.(e) || g?.(e))
                    },
                  })),
            (o[16] = p),
            (o[17] = f),
            (o[18] = g),
            (o[19] = m),
            (o[20] = _),
            (o[21] = r))
          : (r = o[21]),
        r
      )
    }
    r.d(
      t,
      {},
      {
        JV: function (e) {
          let t,
            r,
            o,
            i,
            s,
            c,
            d,
            u,
            p,
            f = (0, a.c)(23),
            { heading: g, headingAccessory: m, artwork: h, footer: y } = e,
            _ = null != g && "min-h-10"
          ;(f[0] !== _
            ? ((t = (0, l.A)("line-clamp-2 min-w-0 leading-5 font-medium break-words wrap-anywhere", _)),
              (f[0] = _),
              (f[1] = t))
            : (t = f[1]),
            f[2] !== g || f[3] !== t
              ? ((r = (0, n.jsx)("span", { className: t, children: g })), (f[2] = g), (f[3] = t), (f[4] = r))
              : (r = f[4]),
            f[5] !== m
              ? ((o =
                  null != m
                    ? (0, n.jsx)("span", { className: "flex h-5 shrink-0 items-center text-secondary", children: m })
                    : null),
                (f[5] = m),
                (f[6] = o))
              : (o = f[6]),
            f[7] !== r || f[8] !== o
              ? ((i = (0, n.jsxs)("span", {
                  className: "flex shrink-0 items-start gap-1 py-3.5 ps-5 pe-14",
                  children: [r, o],
                })),
                (f[7] = r),
                (f[8] = o),
                (f[9] = i))
              : (i = f[9]))
          let v = null != g && "min-h-10"
          return (
            f[10] !== v
              ? ((s = (0, l.A)("relative flex flex-1 items-center justify-center", v)), (f[10] = v), (f[11] = s))
              : (s = f[11]),
            f[12] !== h ? ((c = (0, n.jsx)(x, { artwork: h })), (f[12] = h), (f[13] = c)) : (c = f[13]),
            f[14] !== s || f[15] !== c
              ? ((d = (0, n.jsx)("span", { className: s, children: c })), (f[14] = s), (f[15] = c), (f[16] = d))
              : (d = f[16]),
            f[17] !== y
              ? ((u = (0, n.jsx)("span", {
                  className: "flex shrink-0 items-center gap-1 px-5 py-3.5 text-xs text-secondary",
                  children: y,
                })),
                (f[17] = y),
                (f[18] = u))
              : (u = f[18]),
            f[19] !== u || f[20] !== i || f[21] !== d
              ? ((p = (0, n.jsxs)("span", {
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
        K0: g,
        Qe: x,
        Xg: function (e) {
          let t,
            r,
            o,
            i = (0, a.c)(6),
            { children: s, layout: c, selection: d } = e
          return "stacked" === (void 0 === c ? "columns" : c)
            ? null
            : (i[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, l.A)(
                    "group relative flex h-10.5 items-center gap-4 text-sm leading-5 text-secondary select-none",
                    "px-[var(--padding-row-cell-x,var(--padding-row-x))]",
                    u.A.listHeader,
                  )),
                  (i[0] = t))
                : (t = i[0]),
              i[1] !== d
                ? ((r =
                    null != d
                      ? (0, n.jsx)("div", {
                          role: "columnheader",
                          "data-library-column": "selection",
                          className: "absolute -start-6 top-1/2 flex w-4 -translate-y-1/2 items-center justify-center",
                          children: d,
                        })
                      : null),
                  (i[1] = d),
                  (i[2] = r))
                : (r = i[2]),
              i[3] !== s || i[4] !== r
                ? ((o = (0, n.jsx)("div", {
                    className: "@container/library-row",
                    children: (0, n.jsxs)("div", {
                      "data-selectable-list-row-group-header": "",
                      role: "row",
                      className: t,
                      children: [r, s],
                    }),
                  })),
                  (i[3] = s),
                  (i[4] = r),
                  (i[5] = o))
                : (o = i[5]),
              o)
        },
        aH: m,
        cu: function (e) {
          let t,
            r,
            o,
            i,
            s,
            c,
            d,
            p,
            f,
            g,
            m,
            h,
            x,
            _,
            v,
            b,
            w,
            j,
            A,
            T,
            N,
            C,
            k,
            S = (0, a.c)(112),
            {
              structuredGridEnabled: E,
              ref: I,
              name: P,
              description: M,
              link: R,
              backdrop: O,
              leadingAccessory: G,
              children: D,
              badge: H,
              caption: L,
              documentHeader: F,
              header: Y,
              overlayHeader: z,
              square: B,
              landscape: U,
              autoHeight: q,
              fullBleed: K,
              previewStageClassName: V,
              onOpen: $,
              onSelect: W,
              href: Q,
              onActivate: Z,
              actions: X,
              pinAction: J,
              reorderAction: ee,
              actionIndicator: et,
              selection: er,
              selected: en,
              isDropTarget: ea,
              selectionActive: eo,
              stretch: el,
              highlighted: ei,
            } = e,
            es = void 0 !== E && E,
            ec = void 0 !== z && z,
            ed = void 0 !== U && U,
            eu = void 0 !== q && q,
            ep = void 0 !== K && K,
            ef = void 0 !== en && en,
            eg = void 0 !== ea && ea,
            em = void 0 !== el && el,
            eh = F ?? Y,
            ex = !ed && null != F,
            ey = D
          if (es) {
            let e, t, r
            ;(S[0] !== V
              ? ((e = (0, l.A)(u.A.containedStage, u.A.previewStage, V)), (S[0] = V), (S[1] = e))
              : (e = S[1]),
              S[2] !== eu || S[3] !== D || S[4] !== ep || S[5] !== ed || S[6] !== ex
                ? ((t = ep
                    ? D
                    : (0, n.jsx)("span", {
                        className: (0, l.A)(
                          u.A.previewFrame,
                          ex && u.A.portraitPreview,
                          ed && u.A.landscapePreview,
                          ed && eu && u.A.fitPreviewImage,
                          !ed && !ex && u.A.insetPreview,
                        ),
                        children: D,
                      })),
                  (S[2] = eu),
                  (S[3] = D),
                  (S[4] = ep),
                  (S[5] = ed),
                  (S[6] = ex),
                  (S[7] = t))
                : (t = S[7]),
              S[8] !== e || S[9] !== t
                ? ((r = (0, n.jsx)("span", { "data-space-preview-stage": "", className: e, children: t })),
                  (S[8] = e),
                  (S[9] = t),
                  (S[10] = r))
                : (r = S[10]),
              (ey = r))
          } else if (ed && !eu) {
            let e
            ;(S[11] !== D
              ? ((e = (0, n.jsx)("span", {
                  className: "relative flex aspect-video w-full overflow-hidden",
                  children: D,
                })),
                (S[11] = D),
                (S[12] = e))
              : (e = S[12]),
              (ey = e))
          }
          let e_ = eg && "bg-text-info/10",
            ev = !eg && (ef ? "bg-text/5" : "bg-text/2 dark:bg-text/5"),
            eb = !ef && !eg && "opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
          ;(S[13] !== e_ || S[14] !== ev || S[15] !== eb
            ? ((t = (0, l.A)("pointer-events-none absolute inset-0", e_, ev, eb)),
              (S[13] = e_),
              (S[14] = ev),
              (S[15] = eb),
              (S[16] = t))
            : (t = S[16]),
            S[17] !== t
              ? ((r = (0, n.jsx)("span", { "aria-hidden": "true", className: t })), (S[17] = t), (S[18] = r))
              : (r = S[18]))
          let ew = r,
            ej = em && "flex h-full flex-col"
          S[19] !== ej
            ? ((o = (0, l.A)(u.A.card, "group relative min-w-0 break-inside-avoid select-none", ej)),
              (S[19] = ej),
              (S[20] = o))
            : (o = S[20])
          let eA = !es && "overflow-hidden border bg-surface-elevated",
            eT =
              !(void 0 !== ei && ei) || ef || eg
                ? !es && "border-subtle shadow-card"
                : "activity-glow border-content-blue/40 text-content-blue/30",
            eN = eg ? "ring-2 ring-text-info" : ef && !es && "ring-2 ring-text",
            eC = null != O && "hover:border-media-background focus-within:border-media-background",
            ek = em && "flex flex-1 flex-col"
          S[21] !== eA || S[22] !== eT || S[23] !== eN || S[24] !== eC || S[25] !== ek
            ? ((i = (0, l.A)(
                "relative rounded-2xl has-[>:focus-visible]:ring-2 has-[>:focus-visible]:ring-text has-[>:focus-visible]:ring-offset-2 has-[>:focus-visible]:ring-offset-surface",
                eA,
                eT,
                eN,
                eC,
                ek,
              )),
              (S[21] = eA),
              (S[22] = eT),
              (S[23] = eN),
              (S[24] = eC),
              (S[25] = ek),
              (S[26] = i))
            : (i = S[26])
          let eS = es && "items-center gap-3",
            eE = !es && !eu && ex && "aspect-4/5",
            eI = !es && !eu && !ed && null == F && B && "aspect-square",
            eP = em && "flex-1 justify-start"
          ;(S[27] !== eS || S[28] !== eE || S[29] !== eI || S[30] !== eP
            ? ((s = (0, l.A)(
                "flex w-full cursor-interaction flex-col text-start text-sm text-default outline-none",
                eS,
                eE,
                eI,
                eP,
              )),
              (S[27] = eS),
              (S[28] = eE),
              (S[29] = eI),
              (S[30] = eP),
              (S[31] = s))
            : (s = S[31]),
            S[32] !== et || S[33] !== eh || S[34] !== ec || S[35] !== J || S[36] !== ee || S[37] !== es
              ? ((c =
                  es || null == eh
                    ? null
                    : (0, n.jsx)("span", {
                        className: (0, l.A)(
                          "flex h-11 w-full shrink-0 items-center ps-3 pe-3.5",
                          ec
                            ? "absolute inset-x-0 top-0 z-10 text-media-foreground"
                            : "relative border-b border-subtle",
                        ),
                        children: (0, n.jsx)("span", {
                          className: (0, l.A)(
                            "flex min-w-0 flex-1 items-center gap-2",
                            u.A.cardHeaderCopy,
                            null != et && u.A.cardHeaderCopyPinned,
                            null != J && u.A.cardHeaderCopyWithPin,
                            null != ee && "me-8",
                          ),
                          children: eh,
                        }),
                      })),
                (S[32] = et),
                (S[33] = eh),
                (S[34] = ec),
                (S[35] = J),
                (S[36] = ee),
                (S[37] = es),
                (S[38] = c))
              : (c = S[38]),
            S[39] !== eh || S[40] !== P || S[41] !== es
              ? ((d =
                  es &&
                  (0, n.jsx)("span", {
                    title: P,
                    className:
                      "flex max-w-full items-center justify-center gap-1 truncate text-center text-sm leading-5",
                    children: eh ?? (0, n.jsx)("span", { className: "truncate", children: P }),
                  })),
                (S[39] = eh),
                (S[40] = P),
                (S[41] = es),
                (S[42] = d))
              : (d = S[42]),
            S[43] !== M ||
            S[44] !== Q ||
            S[45] !== R ||
            S[46] !== P ||
            S[47] !== Z ||
            S[48] !== $ ||
            S[49] !== W ||
            S[50] !== ey ||
            S[51] !== s ||
            S[52] !== c ||
            S[53] !== d
              ? ((p = (0, n.jsxs)(y, {
                  name: P,
                  description: M,
                  link: R,
                  href: Q,
                  onActivate: Z,
                  className: s,
                  onOpen: $,
                  onSelect: W,
                  children: [c, ey, d],
                })),
                (S[43] = M),
                (S[44] = Q),
                (S[45] = R),
                (S[46] = P),
                (S[47] = Z),
                (S[48] = $),
                (S[49] = W),
                (S[50] = ey),
                (S[51] = s),
                (S[52] = c),
                (S[53] = d),
                (S[54] = p))
              : (p = S[54]),
            S[55] !== ec || S[56] !== es
              ? ((f = !es && ec && (0, n.jsx)("span", { "aria-hidden": !0, className: u.A.mediaHeaderShade })),
                (S[55] = ec),
                (S[56] = es),
                (S[57] = f))
              : (f = S[57]),
            S[58] !== eg || S[59] !== ef || S[60] !== es
              ? ((g = es
                  ? (0, l.A)(
                      u.A.containedStage,
                      "pointer-events-none absolute inset-x-0 top-0",
                      ef && !eg && "ring-2 ring-text",
                    )
                  : "contents"),
                (S[58] = eg),
                (S[59] = ef),
                (S[60] = es),
                (S[61] = g))
              : (g = S[61]))
          let eM = !es && ec ? "z-10 text-media-foreground" : "text-default",
            eR = es && "absolute inset-x-2 top-2 flex h-8 items-center justify-end",
            eO =
              !es && (null != eh ? "absolute end-2 top-2 flex h-7 items-center justify-center" : "absolute end-3 top-3")
          ;(S[62] !== eM || S[63] !== eR || S[64] !== eO
            ? ((m = (0, l.A)("pointer-events-none", eM, eR, eO)), (S[62] = eM), (S[63] = eR), (S[64] = eO), (S[65] = m))
            : (m = S[65]),
            S[66] !== et || S[67] !== es
              ? ((h =
                  null != et
                    ? (0, n.jsx)("div", {
                        className: (0, l.A)(
                          "pointer-events-none absolute top-0 flex items-center justify-center group-hover:opacity-0 group-has-[:focus-visible]:opacity-0 group-has-[[aria-expanded=true]]:opacity-0 pointer-coarse:opacity-0",
                          es ? "start-0 size-8" : "end-0 size-7",
                        ),
                        children: et,
                      })
                    : null),
                (S[66] = et),
                (S[67] = es),
                (S[68] = h))
              : (h = S[68]),
            S[69] !== J || S[70] !== es
              ? ((x =
                  es &&
                  null != J &&
                  (0, n.jsx)("span", {
                    className:
                      "pointer-events-none absolute start-0 top-0 flex size-8 items-center justify-center *:pointer-events-auto",
                    children: J,
                  })),
                (S[69] = J),
                (S[70] = es),
                (S[71] = x))
              : (x = S[71]),
            S[72] !== ee
              ? ((_ =
                  null != ee
                    ? (0, n.jsx)("span", { className: "flex size-7 items-center justify-center", children: ee })
                    : null),
                (S[72] = ee),
                (S[73] = _))
              : (_ = S[73]))
          let eG = !es && J
          ;(S[74] !== X || S[75] !== x || S[76] !== _ || S[77] !== eG
            ? ((v = (0, n.jsxs)("div", {
                className:
                  "pointer-events-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[aria-expanded=true]]:opacity-100 has-[[data-state=open]]:opacity-100 pointer-coarse:opacity-100",
                children: [x, _, X, eG],
              })),
              (S[74] = X),
              (S[75] = x),
              (S[76] = _),
              (S[77] = eG),
              (S[78] = v))
            : (v = S[78]),
            S[79] !== m || S[80] !== h || S[81] !== v
              ? ((b = (0, n.jsxs)("div", { className: m, children: [h, v] })),
                (S[79] = m),
                (S[80] = h),
                (S[81] = v),
                (S[82] = b))
              : (b = S[82]))
          let eD = !es && null != er && "group-hover:opacity-0 group-has-[:focus-visible]:opacity-0",
            eH = (ef || (!es && void 0 !== eo && eo)) && "opacity-0"
          ;(S[83] !== eD || S[84] !== eH
            ? ((w = (0, l.A)(eD, eH)), (S[83] = eD), (S[84] = eH), (S[85] = w))
            : (w = S[85]),
            S[86] !== H || S[87] !== w
              ? ((j = (0, n.jsx)("div", { className: w, children: H })), (S[86] = H), (S[87] = w), (S[88] = j))
              : (j = S[88]))
          let eL = es ? "end-3.5 bottom-3.5" : "end-4.5 bottom-4.5"
          return (
            S[89] !== eL
              ? ((A = (0, l.A)("pointer-events-auto absolute flex items-center", eL)), (S[89] = eL), (S[90] = A))
              : (A = S[90]),
            S[91] !== er || S[92] !== A
              ? ((T = (0, n.jsx)("div", { className: A, children: er })), (S[91] = er), (S[92] = A), (S[93] = T))
              : (T = S[93]),
            S[94] !== ew || S[95] !== G || S[96] !== g || S[97] !== b || S[98] !== j || S[99] !== T
              ? ((N = (0, n.jsxs)("div", { className: g, children: [ew, G, b, j, T] })),
                (S[94] = ew),
                (S[95] = G),
                (S[96] = g),
                (S[97] = b),
                (S[98] = j),
                (S[99] = T),
                (S[100] = N))
              : (N = S[100]),
            S[101] !== i || S[102] !== p || S[103] !== f || S[104] !== N
              ? ((C = (0, n.jsxs)("div", { className: i, children: [p, f, N] })),
                (S[101] = i),
                (S[102] = p),
                (S[103] = f),
                (S[104] = N),
                (S[105] = C))
              : (C = S[105]),
            S[106] !== O || S[107] !== L || S[108] !== I || S[109] !== o || S[110] !== C
              ? ((k = (0, n.jsxs)("div", { ref: I, className: o, children: [O, C, L] })),
                (S[106] = O),
                (S[107] = L),
                (S[108] = I),
                (S[109] = o),
                (S[110] = C),
                (S[111] = k))
              : (k = S[111]),
            k
          )
        },
        kt: function (e) {
          let t,
            r,
            i,
            s,
            d,
            h,
            x,
            _,
            v,
            b,
            w,
            j,
            A,
            T,
            N,
            C,
            k,
            S,
            E,
            I,
            P,
            M,
            R,
            O,
            G,
            D,
            H,
            L,
            F,
            Y,
            z = (0, a.c)(105),
            {
              ref: B,
              layout: U,
              name: q,
              link: K,
              displayName: V,
              artwork: $,
              thumbnail: W,
              badge: Q,
              favoriteMarker: Z,
              sharingIndicator: X,
              activity: J,
              detail: ee,
              sizeBeforeDate: et,
              sharedBy: er,
              source: en,
              onOpen: ea,
              onSelect: eo,
              href: el,
              onActivate: ei,
              actions: es,
              selection: ec,
              selected: ed,
              isDropTarget: eu,
              tree: ep,
              reserveDisclosureSpace: ef,
            } = e,
            eg = void 0 !== et && et,
            em = void 0 !== ed && ed,
            eh = void 0 !== ef && ef,
            ex = "stacked" === (void 0 === U ? "columns" : U)
          z[0] !== ee || z[1] !== eg || z[2] !== ex
            ? ((t =
                null != ee
                  ? (0, n.jsx)("span", {
                      role: ex ? void 0 : "gridcell",
                      "data-library-column": ex ? void 0 : "size",
                      tabIndex: ex ? void 0 : 0,
                      className: (0, l.A)(
                        u.A.rowMetadata,
                        ex
                          ? "shrink-0 text-secondary empty:hidden"
                          : "hidden w-22 shrink-0 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @lg/library-row:block",
                        !ex && eg && "@3xl/library-row:w-40",
                      ),
                      children: ex && ("—" === ee || "-" === ee) ? null : ee,
                    })
                  : null),
              (z[0] = ee),
              (z[1] = eg),
              (z[2] = ex),
              (z[3] = t))
            : (t = z[3])
          let ey = t
          ;(z[4] !== eg || z[5] !== en || z[6] !== ex
            ? ((r =
                void 0 !== en
                  ? (0, n.jsx)("span", {
                      role: ex ? void 0 : "gridcell",
                      "data-library-column": ex ? void 0 : "source",
                      tabIndex: ex ? void 0 : 0,
                      className: (0, l.A)(
                        u.A.rowMetadata,
                        ex
                          ? "flex min-w-0 items-center gap-1.5 text-secondary empty:hidden"
                          : "hidden shrink-0 items-center gap-2 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @3xl/library-row:flex",
                        !ex && (eg ? "w-40" : "w-60"),
                      ),
                      children: ex && ("—" === en || "-" === en) ? null : en,
                    })
                  : null),
              (z[4] = eg),
              (z[5] = en),
              (z[6] = ex),
              (z[7] = r))
            : (r = z[7]),
            z[8] !== er || z[9] !== ex
              ? ((i =
                  null != er
                    ? (0, n.jsx)("span", {
                        role: ex ? void 0 : "gridcell",
                        "data-library-column": ex ? void 0 : "shared",
                        tabIndex: ex ? void 0 : 0,
                        className: (0, l.A)(
                          u.A.rowMetadata,
                          ex
                            ? "flex min-w-0 items-center gap-1.5 text-secondary empty:hidden"
                            : "hidden w-60 shrink-0 items-center gap-2 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @3xl/library-row:flex",
                        ),
                        children: ex && ("—" === er || "-" === er) ? null : er,
                      })
                    : null),
                (z[8] = er),
                (z[9] = ex),
                (z[10] = i))
              : (i = z[10]))
          let e_ = eg ? ey : null,
            ev = ex ? void 0 : "gridcell",
            eb = ex ? void 0 : "date",
            ew = ex ? void 0 : 0,
            ej = ex
              ? "shrink-0 text-secondary empty:hidden"
              : "hidden w-40 shrink-0 text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring @lg/library-row:block"
          z[11] !== ej ? ((s = (0, l.A)(u.A.rowMetadata, ej)), (z[11] = ej), (z[12] = s)) : (s = z[12])
          let eA = ex && ("—" === J || "-" === J) ? null : J
          z[13] !== ev || z[14] !== eb || z[15] !== ew || z[16] !== s || z[17] !== eA
            ? ((d = (0, n.jsx)("span", {
                role: ev,
                "data-library-column": eb,
                tabIndex: ew,
                className: s,
                children: eA,
              })),
              (z[13] = ev),
              (z[14] = eb),
              (z[15] = ew),
              (z[16] = s),
              (z[17] = eA),
              (z[18] = d))
            : (d = z[18])
          let eT = eg ? null : ey
          z[19] !== d || z[20] !== eT || z[21] !== r || z[22] !== i || z[23] !== e_
            ? ((h = (0, n.jsxs)(n.Fragment, { children: [r, i, e_, d, eT] })),
              (z[19] = d),
              (z[20] = eT),
              (z[21] = r),
              (z[22] = i),
              (z[23] = e_),
              (z[24] = h))
            : (h = z[24])
          let eN = h,
            eC = void 0 !== eu && eu && "rounded-xl bg-text-info/10 ring-2 ring-text-info"
          ;(z[25] !== eC
            ? ((x = (0, l.A)("group relative @container/library-row", eC)), (z[25] = eC), (z[26] = x))
            : (x = z[26]),
            z[27] !== ea || z[28] !== eo
              ? ((_ = (e) => {
                  !e.defaultPrevented &&
                    ("Enter" === e.key || " " === e.key) &&
                    e.target instanceof HTMLElement &&
                    e.target.matches('[role="gridcell"]') &&
                    (e.preventDefault(), eo?.(e) || ea?.(e))
                }),
                (z[27] = ea),
                (z[28] = eo),
                (z[29] = _))
              : (_ = z[29]))
          let ek = null != el && "relative isolate"
          ;(z[30] !== ek ? ((v = (0, l.A)("select-none", ek)), (z[30] = ek), (z[31] = v)) : (v = z[31]),
            z[32] !== ea || z[33] !== eo
              ? ((b = (e) => {
                  !(
                    e.target instanceof Element &&
                    (!e.currentTarget.contains(e.target) ||
                      e.target.closest('button, [role=checkbox], a, [data-library-column="selection"]'))
                  ) &&
                    (eo?.(e) || ea?.(e))
                }),
                (z[32] = ea),
                (z[33] = eo),
                (z[34] = b))
              : (b = z[34]))
          let eS = ex && "ps-0.5"
          ;(z[35] !== eS
            ? ((w = (0, l.A)("flex min-h-10 min-w-0 items-center gap-4", eS)), (z[35] = eS), (z[36] = w))
            : (w = z[36]),
            z[37] !== ec
              ? ((j = (0, n.jsx)("span", {
                  role: "gridcell",
                  "data-library-column": "selection",
                  className: "absolute inset-y-0 -start-6 end-full z-10 flex cursor-default items-center",
                  children: ec,
                })),
                (z[37] = ec),
                (z[38] = j))
              : (j = z[38]),
            z[39] !== ep
              ? ((A = (e) => {
                  e.target === e.currentTarget &&
                    ep?.onToggle != null &&
                    ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                    ep.expanded !== ("ArrowRight" === e.key) &&
                    (e.preventDefault(), ep.onToggle("ArrowRight" === e.key))
                }),
                (z[39] = ep),
                (z[40] = A))
              : (A = z[40]),
            z[41] !== eh || z[42] !== ep
              ? ((T = null != ep || eh ? (0, n.jsx)(m, { depth: ep?.depth ?? 0, disclosure: ep?.disclosure }) : null),
                (z[41] = eh),
                (z[42] = ep),
                (z[43] = T))
              : (T = z[43]),
            z[44] !== $ || z[45] !== Q || z[46] !== W
              ? ((N = W ?? (0, n.jsx)(g, { artwork: $, badge: Q })), (z[44] = $), (z[45] = Q), (z[46] = W), (z[47] = N))
              : (N = z[47]),
            z[48] !== N
              ? ((C = (0, n.jsx)("span", { className: u.A.rowArtworkSlot, children: N })), (z[48] = N), (z[49] = C))
              : (C = z[49]))
          let eE = ex && "leading-5"
          z[50] !== eE
            ? ((k = (0, l.A)("flex min-w-0 items-center gap-2 text-base font-normal text-default browser:text-sm", eE)),
              (z[50] = eE),
              (z[51] = k))
            : (k = z[51])
          let eI = null != el && "after:absolute after:inset-0 after:z-0"
          z[52] !== eI
            ? ((S = (0, l.A)("min-w-0 cursor-interaction truncate text-start", eI)), (z[52] = eI), (z[53] = S))
            : (S = z[53])
          let eP = V ?? q
          ;(z[54] !== eP
            ? ((E = (0, n.jsx)("span", {
                className: "block truncate",
                "data-library-item-title": "",
                "data-tooltip-enablement-target": !0,
                children: eP,
              })),
              (z[54] = eP),
              (z[55] = E))
            : (E = z[55]),
            z[56] !== el ||
            z[57] !== K ||
            z[58] !== q ||
            z[59] !== ei ||
            z[60] !== ea ||
            z[61] !== eo ||
            z[62] !== S ||
            z[63] !== E
              ? ((I = (0, n.jsx)(y, {
                  name: q,
                  link: K,
                  href: el,
                  onActivate: ei,
                  tabIndex: -1,
                  className: S,
                  onOpen: ea,
                  onSelect: eo,
                  children: E,
                })),
                (z[56] = el),
                (z[57] = K),
                (z[58] = q),
                (z[59] = ei),
                (z[60] = ea),
                (z[61] = eo),
                (z[62] = S),
                (z[63] = E),
                (z[64] = I))
              : (I = z[64]))
          let eM = ex ? X : null
          ;(z[65] !== Z || z[66] !== k || z[67] !== I || z[68] !== eM
            ? ((P = (0, n.jsxs)("span", { className: k, children: [I, eM, Z] })),
              (z[65] = Z),
              (z[66] = k),
              (z[67] = I),
              (z[68] = eM),
              (z[69] = P))
            : (P = z[69]),
            z[70] !== eN || z[71] !== ex
              ? ((M = ex
                  ? (0, n.jsx)("span", {
                      className: (0, l.A)(
                        u.A.stackedMetadata,
                        "flex min-w-0 items-center gap-1 text-xs leading-4.5 font-normal",
                      ),
                      "data-library-item-metadata": "",
                      children: eN,
                    })
                  : null),
                (z[70] = eN),
                (z[71] = ex),
                (z[72] = M))
              : (M = z[72]),
            z[73] !== P || z[74] !== M
              ? ((R = (0, n.jsxs)("span", { className: "ms-3 flex min-w-0 flex-1 flex-col", children: [P, M] })),
                (z[73] = P),
                (z[74] = M),
                (z[75] = R))
              : (R = z[75]),
            z[76] !== A || z[77] !== T || z[78] !== C || z[79] !== R
              ? ((O = (0, n.jsxs)("div", {
                  role: "gridcell",
                  "data-library-column": "name",
                  tabIndex: 0,
                  onKeyDown: A,
                  className:
                    "flex min-w-0 flex-1 items-center outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: [T, C, R],
                })),
                (z[76] = A),
                (z[77] = T),
                (z[78] = C),
                (z[79] = R),
                (z[80] = O))
              : (O = z[80]),
            z[81] !== q || z[82] !== O
              ? ((G = (0, n.jsx)(o.m, { content: q, enabledWhen: "target-overflows", children: O })),
                (z[81] = q),
                (z[82] = O),
                (z[83] = G))
              : (G = z[83]))
          let eR = ex ? null : eN
          return (
            z[84] !== es ? ((D = es?.filter(f).map(p)), (z[84] = es), (z[85] = D)) : (D = z[85]),
            z[86] !== D
              ? ((H = (0, n.jsx)("span", {
                  role: "gridcell",
                  "data-library-column": "actions",
                  className:
                    "relative z-10 flex min-h-9 min-w-9 shrink-0 items-center justify-end gap-1 @lg/library-row:min-w-16",
                  children: D,
                })),
                (z[86] = D),
                (z[87] = H))
              : (H = z[87]),
            z[88] !== w || z[89] !== j || z[90] !== G || z[91] !== eR || z[92] !== H
              ? ((L = (0, n.jsxs)("div", { className: w, children: [j, G, eR, H] })),
                (z[88] = w),
                (z[89] = j),
                (z[90] = G),
                (z[91] = eR),
                (z[92] = H),
                (z[93] = L))
              : (L = z[93]),
            z[94] !== q || z[95] !== em || z[96] !== v || z[97] !== b || z[98] !== L
              ? ((F = (0, n.jsx)(c.fy, {
                  className: v,
                  ariaLabel: q,
                  density: "row",
                  role: "row",
                  isSelected: em,
                  onSelect: b,
                  title: q,
                  children: L,
                })),
                (z[94] = q),
                (z[95] = em),
                (z[96] = v),
                (z[97] = b),
                (z[98] = L),
                (z[99] = F))
              : (F = z[99]),
            z[100] !== B || z[101] !== x || z[102] !== _ || z[103] !== F
              ? ((Y = (0, n.jsx)("div", { ref: B, className: x, role: "presentation", onKeyDown: _, children: F })),
                (z[100] = B),
                (z[101] = x),
                (z[102] = _),
                (z[103] = F),
                (z[104] = Y))
              : (Y = z[104]),
            Y
          )
        },
      },
    )
  },
  FFnF(e, t, r) {
    r.d(t, { K: () => m })
    var n = r("EA6X"),
      a = r("MVHH")
    ;(r("E8Sp"), r("SPnB"))
    var o = r("OOaz"),
      l = r("TJEh"),
      i = r("zRlR"),
      s = r("SGsN"),
      c = r("svjy"),
      d = r("yGJW")
    r("kfGJ")
    var u = r("OMIV"),
      p = r("rKAs"),
      f = r("ASxG")
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
    async function m(e, t, r, m) {
      let { sidebar_params: h, identity: x } = t.saved_target,
        y = "generic_entity"
      ;((0, l.PN)(h.category)
        ? (y = "local_business")
        : "product" === h.category || "product_rationale_and_reviews" === h.category
          ? (y = "product")
          : "image" === h.category && (y = "image"),
        (0, d.yy)(e, n.HR, {
          actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
          surfaceLocation: n.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_LIBRARY,
          entityAffordance: n.YY.CHATGPT_ENTITY_AFFORDANCE_SAVED_ENTITY_LIBRARY_ITEM,
          entityId: x?.key,
          entityCategory: y,
          contentReferenceType: "entity",
        }),
        (0, d.yy)(e, a.aF, {
          eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_LIBRARY_ITEM_CLICKED",
          entityKind: y,
          surface: "grid" === r ? "library_grid" : "library_list",
        }))
      let _ = e.get(c.g)
      if (!e.get(u.M9)?.getDynamicConfig("2347841422").get("enabled_entity_categories", []).includes(h.category))
        return void e
          .get(s.Id)
          .danger(
            _.formatMessage({
              id: "library.savedEntity.unsupportedCategory",
              defaultMessage: "We do not support saving this entity category yet",
              description: "Error when a saved Library item has an entity category that cannot be opened",
            }),
            { errorAnalytics: { toastId: "library.savedEntity.unsupportedCategory" } },
          )
      let v = (0, o.co)()
      ;("product_rationale_and_reviews" === h.category &&
        (function (e) {
          let t = e.saved_target.sidebar_params.extra_params,
            r = g.safeParse(t?.saved_product_shell)
          if (!r.success) return
          let n = r.data.image_urls
          n?.length || (n = e.display_data.image_url ? [e.display_data.image_url] : void 0)
          let [a] = (0, p.b$)({
            type: "product",
            product: {
              ...r.data,
              title: e.display_data.name,
              image_urls: n,
              product_lookup_key: t?.product_lookup_key,
            },
          })
          if (null == a) return
          let o = t?.rewritten_queries,
            l = Array.isArray(o) ? o.filter((e) => "string" == typeof e && e.length > 0) : void 0
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
          })(a.product_lookup_key),
            l?.length)
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
          businessPreview: (0, l.PN)(h.category)
            ? { name: t.display_data.name, image_url: t.display_data.image_url }
            : void 0,
        }))
    }
  },
  we56(e, t, r) {
    var n = r("zTeN"),
      a = r("i8Zd"),
      o = r("OWtl")
    let l = (0, n.un)(
      o.u,
      ({ get: e }) => (
        e(a.fn),
        (function () {
          let e = getComputedStyle(document.documentElement),
            t = document.createElement("div")
          ;((t.style.display = "none"), t.setAttribute("aria-hidden", "true"), document.body.appendChild(t))
          let r = (t) => {
              let r = e.getPropertyValue(t).trim()
              return r.length > 0 ? r : void 0
            },
            n = (r) => {
              let n = i(e, t, r, "color"),
                a = i(e, t, "--color-surface-tertiary", "color")
              if (null != n && null != a) return `color-mix(in srgb, ${n} 12%, ${a})`
            }
          try {
            let a,
              o,
              l,
              s,
              c,
              d,
              u,
              p,
              f,
              g,
              m,
              h,
              x,
              y,
              _,
              v,
              b,
              w,
              j,
              A,
              T,
              N,
              C,
              k,
              S,
              E,
              I,
              P,
              M,
              R,
              O,
              G,
              D,
              H,
              L,
              F
            return {
              "--color-background-primary":
                ((a = "--app-color-background-surface"),
                i(e, t, a, "color") ?? ((o = "--color-surface-tertiary"), i(e, t, o, "color"))),
              "--color-background-secondary": ((l = "--color-surface-elevated"), i(e, t, l, "color")),
              "--color-background-tertiary": ((s = "--color-surface-secondary"), i(e, t, s, "color")),
              "--color-background-inverse": ((c = "--color-text"), i(e, t, c, "color")),
              "--color-background-ghost": "transparent",
              "--color-background-info":
                ((d = "--codex-theme-accent-background-subtle"),
                i(e, t, d, "color") ?? ((u = "--color-background-info-soft"), i(e, t, u, "color"))),
              "--color-background-danger": ((p = "--color-background-danger-surface"), i(e, t, p, "color")),
              "--color-background-success": n("--color-codex-git-added"),
              "--color-background-warning": n("--color-text-warning"),
              "--color-background-disabled": ((f = "--color-background-primary-soft-active"), i(e, t, f, "color")),
              "--color-text-primary": ((g = "--color-text"), i(e, t, g, "color")),
              "--color-text-secondary": ((m = "--color-text-secondary"), i(e, t, m, "color")),
              "--color-text-tertiary": ((h = "--color-codex-description"), i(e, t, h, "color")),
              "--color-text-inverse":
                ((x = "--color-text-inverse"),
                i(e, t, x, "color") ?? ((y = "--color-surface-tertiary"), i(e, t, y, "color"))),
              "--color-text-ghost": ((_ = "--color-codex-description"), i(e, t, _, "color")),
              "--color-text-info": ((v = "--color-text-info"), i(e, t, v, "color")),
              "--color-text-danger": ((b = "--color-text-danger"), i(e, t, b, "color")),
              "--color-text-success": ((w = "--color-codex-git-added"), i(e, t, w, "color")),
              "--color-text-warning": ((j = "--color-text-warning"), i(e, t, j, "color")),
              "--color-text-disabled": ((A = "--color-codex-description"), i(e, t, A, "color")),
              "--color-border-primary": ((T = "--color-border-primary-outline"), i(e, t, T, "color")),
              "--color-border-secondary": ((N = "--color-border"), i(e, t, N, "color")),
              "--color-border-tertiary": ((C = "--color-border"), i(e, t, C, "color")),
              "--color-border-inverse": ((k = "--color-text"), i(e, t, k, "color")),
              "--color-border-ghost": "transparent",
              "--color-border-info": ((S = "--color-ring"), i(e, t, S, "color")),
              "--color-border-danger": ((E = "--color-text-danger"), i(e, t, E, "color")),
              "--color-border-success": ((I = "--color-codex-git-added"), i(e, t, I, "color")),
              "--color-border-warning": ((P = "--color-text-warning"), i(e, t, P, "color")),
              "--color-border-disabled": ((M = "--color-border-primary-outline"), i(e, t, M, "color")),
              "--color-ring-primary": ((R = "--color-ring"), i(e, t, R, "color")),
              "--color-ring-secondary": ((O = "--color-ring"), i(e, t, O, "color")),
              "--color-ring-inverse": ((G = "--color-ring"), i(e, t, G, "color")),
              "--color-ring-info": ((D = "--color-ring"), i(e, t, D, "color")),
              "--color-ring-danger": ((H = "--color-text-danger"), i(e, t, H, "color")),
              "--color-ring-success": ((L = "--color-codex-git-added"), i(e, t, L, "color")),
              "--color-ring-warning": ((F = "--color-text-warning"), i(e, t, F, "color")),
              "--font-sans": i(e, t, "--font-sans", "fontFamily"),
              "--font-mono": i(e, t, "--font-mono", "fontFamily"),
              "--font-weight-normal": i(e, t, "--font-ui-weight", "fontWeight"),
              "--font-weight-medium": i(e, t, "--font-weight-medium", "fontWeight"),
              "--font-weight-semibold": i(e, t, "--font-weight-semibold", "fontWeight"),
              "--font-weight-bold": i(e, t, "--font-weight-bold", "fontWeight"),
              "--font-text-xs-size": i(e, t, "--text-xs", "fontSize"),
              "--font-text-sm-size": i(e, t, "--text-sm", "fontSize"),
              "--font-text-md-size": i(e, t, "--text-base", "fontSize"),
              "--font-text-lg-size": i(e, t, "--text-lg", "fontSize"),
              "--font-heading-xs-size": i(e, t, "--text-heading-sm", "fontSize"),
              "--font-heading-sm-size": i(e, t, "--text-heading-md", "fontSize"),
              "--font-heading-md-size": i(e, t, "--text-heading-lg", "fontSize"),
              "--font-heading-lg-size": i(e, t, "--text-xl", "fontSize"),
              "--font-heading-xl-size": i(e, t, "--text-2xl", "fontSize"),
              "--font-heading-2xl-size": i(e, t, "--text-3xl", "fontSize"),
              "--font-heading-3xl-size": i(e, t, "--text-4xl", "fontSize"),
              "--font-text-xs-line-height": r("--text-xs--line-height"),
              "--font-text-sm-line-height": r("--text-sm--line-height"),
              "--font-text-md-line-height": r("--text-base--line-height"),
              "--font-text-lg-line-height": r("--text-lg--line-height"),
              "--font-heading-xs-line-height": "1.33",
              "--font-heading-sm-line-height": "1.33",
              "--font-heading-md-line-height": "1.2",
              "--font-heading-lg-line-height": "1.2",
              "--font-heading-xl-line-height": "1",
              "--font-heading-2xl-line-height": "1",
              "--font-heading-3xl-line-height": "1",
              "--border-radius-xs": i(e, t, "--radius-xs", "borderRadius"),
              "--border-radius-sm": i(e, t, "--radius-sm", "borderRadius"),
              "--border-radius-md": i(e, t, "--radius-md", "borderRadius"),
              "--border-radius-lg": i(e, t, "--radius-lg", "borderRadius"),
              "--border-radius-xl": i(e, t, "--radius-xl", "borderRadius"),
              "--border-radius-full": i(e, t, "--radius-full", "borderRadius"),
              "--border-width-regular": "1px",
              "--shadow-hairline": i(e, t, "--shadow-hairline", "boxShadow"),
              "--shadow-sm": i(e, t, "--shadow-sm", "boxShadow"),
              "--shadow-md": i(e, t, "--shadow-md", "boxShadow"),
              "--shadow-lg": i(e, t, "--shadow-lg", "boxShadow"),
            }
          } finally {
            t.remove()
          }
        })()
      ),
    )
    function i(e, t, r, n) {
      let a = e.getPropertyValue(r).trim()
      if (0 === a.length) return
      t.style[n] = `var(${r})`
      let o = getComputedStyle(t)[n].trim()
      return 0 === o.length || o === `var(${r})` ? a : o
    }
    r.d(t, {}, { y: l })
  },
  tbqK(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("slpy"),
      l = r("zTeN"),
      i = r("Wf1j"),
      s = r("ygO2"),
      c = r("GO7r"),
      d = r("ALWK"),
      u = r("Oj9r")
    r.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            r,
            p,
            f,
            g,
            m = (0, a.c)(13),
            { disabled: h, mcpAppId: x } = e,
            y = (0, l.gh)(u.GD),
            _ = (0, i.A)(),
            v = (0, l._U)(d.Et, x)
          if (!v.availableDisplayModes?.includes("fullscreen")) return null
          m[0] !== _
            ? ((t = _.formatMessage({
                id: "codex.mcpTool.openAppInTab",
                defaultMessage: "Open app in tab",
                description: "Opens an MCP app in a tab from its tool call row",
              })),
              (m[0] = _),
              (m[1] = t))
            : (t = m[1])
          let b = t
          return (
            m[2] !== x || m[3] !== y
              ? ((r = () => (0, d.Gz)(y, x, "fullscreen")), (m[2] = x), (m[3] = y), (m[4] = r))
              : (r = m[4]),
            m[5] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, n.jsx)(c.Zdv, {})), (m[5] = p)) : (p = m[5]),
            m[6] !== h || m[7] !== b || m[8] !== r
              ? ((f = (0, n.jsx)(s.$, {
                  className: "relative",
                  "aria-label": b,
                  color: "ghost",
                  disabled: h,
                  size: "icon",
                  onClick: r,
                  children: p,
                })),
                (m[6] = h),
                (m[7] = b),
                (m[8] = r),
                (m[9] = f))
              : (f = m[9]),
            m[10] !== b || m[11] !== f
              ? ((g = (0, n.jsx)(o.m, { content: b, children: f })), (m[10] = b), (m[11] = f), (m[12] = g))
              : (g = m[12]),
            g
          )
        },
      },
    )
  },
  RcOP(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("zTeN"),
      l = r("HZfM"),
      i = r("FtQW"),
      s = r("Fmx8"),
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
            f = (0, a.c)(17),
            { className: g, accountId: m, userId: h, conversationId: x, messageId: y, request: _, surface: v } = e,
            b = (0, l.Zp)()
          ;(f[0] !== m || f[1] !== h
            ? ((t = { accountId: m, userId: h }), (f[0] = m), (f[1] = h), (f[2] = t))
            : (t = f[2]),
            f[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = { product_card: "product-card", image_tile: "media-overlay", product_sidebar: "entity-header" }),
                (f[3] = r))
              : (r = f[3]))
          let w = r[v]
          return (
            f[4] !== b
              ? ((d = (e) => {
                  b((0, c.h)(null == e ? "/library?tab=favorites" : `/library/d/${encodeURIComponent(e)}`, "banner"))
                }),
                (f[4] = b),
                (f[5] = d))
              : (d = f[5]),
            f[6] !== g || f[7] !== x || f[8] !== y || f[9] !== _ || f[10] !== v || f[11] !== w || f[12] !== d
              ? ((u = (0, n.jsx)(i.g, {
                  className: g,
                  appearance: w,
                  conversationId: x,
                  messageId: y,
                  request: _,
                  surface: v,
                  onOpenLibrary: d,
                })),
                (f[6] = g),
                (f[7] = x),
                (f[8] = y),
                (f[9] = _),
                (f[10] = v),
                (f[11] = w),
                (f[12] = d),
                (f[13] = u))
              : (u = f[13]),
            f[14] !== t || f[15] !== u
              ? ((p = (0, n.jsx)(o.Ui, { scope: s.oD, value: t, children: u })), (f[14] = t), (f[15] = u), (f[16] = p))
              : (p = f[16]),
            p
          )
        },
      },
    )
  },
  MX3C(e, t, r) {
    var n = r("zTeN"),
      a = r("ASxG"),
      o = r("hOO0"),
      l = r("OWtl"),
      i = r("kpIY"),
      s = r("Nwp9")
    let c = "selected-plugin-links-v1",
      d = a.record(a.string(), a.string().nullable().catch(null)).catch({}),
      u = (0, s.m3)(c, {}, { coerceStoredValue: (e) => d.parse(e) }),
      p = (0, n.i1)(l.u, (e, { get: t }) => t(u)[f(e)] ?? null)
    function f({ accountId: e, userId: t, appId: r }) {
      return JSON.stringify([e, t, r])
    }
    r.d(
      t,
      {},
      {
        C5: p,
        Tm: function (e, t) {
          let r = (0, o.$)(t)
          return e.filter(
            (e) => (0, o.$)(e.connector_id) === r && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"),
          )
        },
        Yv: function (e, t, r) {
          return e.some(
            (e) =>
              (0, o.r)(e, t) &&
              "OAUTH" === e.auth_type &&
              "DISABLED_BY_ADMIN" !== e.connector_status &&
              null == e.unavailable_reason &&
              e.owners.some((e) => "USER" === e.type && e.id === r),
          )
        },
        i_: function (e, t, r) {
          ;((0, i.EG)(c, { entries: { [f(t)]: null == r ? null : { value: r } }, maxEntries: 100 }),
            e.set(u, (0, i.TB)(c, {})))
        },
      },
    )
  },
  uzkw(e, t, r) {
    var n = r("Ghh3")
    r.d(
      t,
      {},
      {
        d: function ({
          connectorId: e,
          conversationId: t,
          eventType: r,
          expectedIdentity: a,
          messageId: o,
          pluginId: l,
          productSurface: i,
          suggestionMessageId: s,
        }) {
          n.Request.safePost("/unified_user_signals", {
            expectedIdentity: a,
            requestBody: {
              signal_type: "ecosystem_suggestion_interaction",
              product_surface: i,
              signal_metadata: {},
              user_metadata: {},
              signal_detail: {
                common_metadata: { conversation_id: t, message_id: o },
                ecosystem_suggestion_interaction: {
                  connector_id: e ?? "",
                  plugin_id: l,
                  suggestion_message_id: s,
                  event_type: r,
                },
              },
            },
          }).catch(() => void 0)
        },
      },
    )
  },
  ecE5(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("zd8w"),
      l = r("oyxz"),
      i = r("lmaZ"),
      s = r("cZk2")
    let c = (0, r("Bbed")._)(
      async () => (await Promise.all([r.e(405765), r.e(941253)]).then(r.bind(r, "eiVC"))).AppConnectModal,
      { suspendToParent: !0, errorFallback: (e) => (0, n.jsx)(d, { ...e, failed: !0 }) },
    )
    function d(e) {
      let t,
        r,
        o,
        c,
        d = (0, a.c)(13),
        { app: u, connectorId: p, onOpenChange: f, onUserDismissed: g, failed: m, embedded: h } = e,
        x = void 0 !== m && m,
        y = null != u || null != p
      return (
        d[0] !== f || d[1] !== g
          ? ((t = (e) => {
              ;(e || g?.(), f(e))
            }),
            (d[0] = f),
            (d[1] = g),
            (d[2] = t))
          : (t = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(l.A, {
              id: "appConnectModal.loadError",
              defaultMessage: "Couldn’t open app connection",
              description: "Title when downloading the app connection dialog fails after retrying",
            })),
            (d[3] = r))
          : (r = d[3]),
        d[4] !== h || d[5] !== x
          ? ((o = x ? null : (0, n.jsx)(i.$, { embedded: h })), (d[4] = h), (d[5] = x), (d[6] = o))
          : (o = d[6]),
        d[7] !== h || d[8] !== x || d[9] !== y || d[10] !== t || d[11] !== o
          ? ((c = (0, n.jsx)(s.k, {
              open: y,
              size: "setup",
              onOpenChange: t,
              failed: x,
              embedded: h,
              title: r,
              children: o,
            })),
            (d[7] = h),
            (d[8] = x),
            (d[9] = y),
            (d[10] = t),
            (d[11] = o),
            (d[12] = c))
          : (c = d[12]),
        c
      )
    }
    r.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            r = (0, a.c)(3),
            l = null != e.app || null != e.connectorId,
            [i, s] = (0, o.useState)(l)
          return (
            l && !i && s(!0),
            r[0] !== i || r[1] !== e
              ? ((t = i
                  ? (0, n.jsx)(o.Suspense, {
                      fallback: !1 === e.showLoadingDialog ? null : (0, n.jsx)(d, { ...e }),
                      children: (0, n.jsx)(c, { ...e }),
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
    var n = r("QosV"),
      a = r("zTeN"),
      o = r("HZfM"),
      l = r("oYYx"),
      i = r("eFn4"),
      s = r("kx7U"),
      c = r("OWtl"),
      d = r("kfGJ"),
      u = r("fHlE")
    let p = (0, a.vP)(c.u, d.fI)
    function f(e, t) {
      e.set(p, t)
    }
    r.d(
      t,
      {},
      {
        D: function () {
          let e,
            t,
            r,
            g,
            m = (0, n.c)(20),
            h = (0, a.gh)(c.u),
            x = (0, o.Zp)(),
            [y, _] = (0, o.ok)(),
            v = null != (0, o.RQ)("/settings/*"),
            b = (0, o.RQ)("/settings/plugins-settings/hosts/:hostId/plugins/:pluginId"),
            w = (0, a.Ul)(i.Xr),
            j = (0, a.Ul)(s.u8),
            A = (0, l.g)(j),
            T = (0, a.Ul)(p)
          m[0] !== b?.params.hostId || m[1] !== v || m[2] !== y || m[3] !== T
            ? ((e = b?.params.hostId || (v ? y.get("hostId")?.trim() : null) || T),
              (m[0] = b?.params.hostId),
              (m[1] = v),
              (m[2] = y),
              (m[3] = T),
              (m[4] = e))
            : (e = m[4])
          let N = e,
            C = w ? A : void 0
          return (
            m[5] !== w || m[6] !== A || m[7] !== N
              ? ((t = w ? (0, u.B)(N, A) : d.fI), (m[5] = w), (m[6] = A), (m[7] = N), (m[8] = t))
              : (t = m[8]),
            m[9] !== b || m[10] !== v || m[11] !== x || m[12] !== h || m[13] !== y || m[14] !== _
              ? ((r = (e) => {
                  ;(f(h, e), null != b)
                    ? x(
                        {
                          pathname: "/settings/plugins-settings",
                          search: new URLSearchParams({ hostId: e }).toString(),
                        },
                        { replace: !0 },
                      )
                    : v && y.has("hostId") && _((t) => (t.set("hostId", e), t), { replace: !0 })
                }),
                (m[9] = b),
                (m[10] = v),
                (m[11] = x),
                (m[12] = h),
                (m[13] = y),
                (m[14] = _),
                (m[15] = r))
              : (r = m[15]),
            m[16] !== C || m[17] !== t || m[18] !== r
              ? ((g = { connectedRemoteConnections: C, selectedHostId: t, setSelectedHostId: r }),
                (m[16] = C),
                (m[17] = t),
                (m[18] = r),
                (m[19] = g))
              : (g = m[19]),
            g
          )
        },
        a: f,
      },
    )
  },
  fHlE(e, t, r) {
    var n = r("kfGJ")
    r.d(
      t,
      {},
      {
        B: function (e, t) {
          return null == t || e === n.fI || t.some((t) => t.hostId === e) ? e : n.fI
        },
        j: function (e, t) {
          return e.filter((e) =>
            t === n.fI ? "local" === e.projectKind : "remote" === e.projectKind && e.hostId === t,
          )
        },
      },
    )
  },
  soaw(e, t, r) {
    var n = r("QosV"),
      a = r("zd8w")
    r.d(
      t,
      {},
      {
        a: function () {
          let e,
            t,
            r,
            o = (0, n.c)(3),
            l = (0, a.useRef)(!1)
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => (
                  (l.current = !0),
                  () => {
                    l.current = !1
                  }
                )),
                (t = []),
                (o[0] = e),
                (o[1] = t))
              : ((e = o[0]), (t = o[1])),
            (0, a.useEffect)(e, t),
            o[2] === Symbol.for("react.memo_cache_sentinel") ? ((r = () => l.current), (o[2] = r)) : (r = o[2]),
            r
          )
        },
      },
    )
  },
  mghv(e, t, r) {
    let n = (0, r("nkTT").a)({
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
      body: '<path d="M12 6.25C12.4142 6.25003 12.75 6.58581 12.75 7V11.793C12.75 12.1244 12.6182 12.4424 12.3838 12.6768L10.0303 15.0303C9.73739 15.3232 9.26262 15.3231 8.96973 15.0303C8.67683 14.7374 8.67683 14.2626 8.96973 13.9697L11.25 11.6895V7C11.25 6.58579 11.5858 6.25 12 6.25Z" fill="currentColor"/> <path d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    r.d(t, {}, { p: n })
  },
  AOqo(e, t, r) {
    let n = (0, r("nkTT").a)({
      name: "person-2-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.52356, y: 2.752441, width: 18.905396, height: 14.37854 },
        visualBounds: { x: 0.52356, y: 2.752441, width: 18.905396, height: 14.37854 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.52356, y: 2.752441, width: 18.905396, height: 14.37854 },
        center: { x: 9.976258, y: 9.941711 },
        insets: { top: 2.752441, right: 0.571044, bottom: 2.869019, left: 0.52356 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.976258, y: 9.941711 },
          foreground: { x: 9.976258, y: 9.941711 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M6.70871 10.7446C9.95334 10.7448 12.6165 13.2342 12.8923 16.4077C12.924 16.7733 12.6533 17.0963 12.2878 17.1284C11.9219 17.1602 11.5989 16.8888 11.5671 16.5229C11.3505 14.0307 9.25743 12.0749 6.70871 12.0747C4.15995 12.0749 2.0669 14.0307 1.85031 16.5229C1.81855 16.8887 1.49632 17.16 1.13059 17.1284C0.764729 17.0966 0.494323 16.7736 0.526096 16.4077C0.801964 13.2342 3.46408 10.7448 6.70871 10.7446Z" fill="currentColor"/> <path d="M14.1657 10.6245C16.9267 10.6248 19.192 12.7433 19.4265 15.4438C19.4579 15.8094 19.1875 16.1316 18.822 16.1636C18.4564 16.1953 18.1345 15.9246 18.1023 15.5591C17.9269 13.5399 16.2307 11.9549 14.1657 11.9546C13.9075 11.9546 13.6555 11.9815 13.4138 12.0327C13.0548 12.1087 12.7021 11.8789 12.6257 11.52C12.5497 11.1608 12.7792 10.8081 13.1384 10.7319C13.4701 10.6616 13.8141 10.6245 14.1657 10.6245Z" fill="currentColor"/> <path d="M6.70871 2.75244C8.65396 2.75264 10.2311 4.32963 10.2312 6.2749C10.2312 8.22025 8.65402 9.79717 6.70871 9.79736C4.76332 9.79727 3.18625 8.22032 3.18625 6.2749C3.18635 4.32956 4.76338 2.75253 6.70871 2.75244ZM6.70871 4.08252C5.49791 4.08261 4.51642 5.0641 4.51633 6.2749C4.51633 7.48578 5.49786 8.46719 6.70871 8.46729C7.91948 8.46709 8.9011 7.48572 8.9011 6.2749C8.901 5.06417 7.91942 4.08272 6.70871 4.08252Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.3376 3.48877C16.0193 3.48902 17.3825 4.8529 17.3825 6.53467C17.3823 8.21622 16.0192 9.57934 14.3376 9.57959C12.6559 9.57952 11.292 8.21634 11.2917 6.53467C11.2917 4.85278 12.6558 3.48884 14.3376 3.48877ZM14.3376 4.81885C13.3903 4.81891 12.6218 5.58732 12.6218 6.53467C12.6221 7.4818 13.3904 8.24945 14.3376 8.24951C15.2846 8.24926 16.0522 7.48168 16.0525 6.53467C16.0525 5.58744 15.2848 4.8191 14.3376 4.81885Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    r.d(t, {}, { s: n })
  },
  ZaI7(e, t, r) {
    let n = (0, r("nkTT").a)({
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
      body: '<path d="M15.0625 6.65039C16.7469 6.65039 18.1122 8.01582 18.1123 9.7002C18.112 11.3844 16.7468 12.75 15.0625 12.75C13.3783 12.7498 12.013 11.3843 12.0127 9.7002C12.0128 8.01592 13.3782 6.65056 15.0625 6.65039ZM15.0625 8.15039C14.2067 8.15056 13.5128 8.84435 13.5127 9.7002C13.513 10.5559 14.2068 11.2498 15.0625 11.25C15.9184 11.25 16.612 10.556 16.6123 9.7002C16.6122 8.84424 15.9185 8.15039 15.0625 8.15039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M18.2002 3.25C20.1607 3.25011 21.7499 4.83935 21.75 6.7998V17.2002C21.7499 19.1607 20.1607 20.7499 18.2002 20.75H5.7998C3.83935 20.7499 2.25011 19.1607 2.25 17.2002V6.7998C2.25011 4.83935 3.83935 3.25011 5.7998 3.25H18.2002ZM5.7998 4.75C4.66778 4.75011 3.75011 5.66778 3.75 6.7998V14.1553L5.11328 12.792C6.3825 11.523 8.44082 11.5229 9.70996 12.792L16.168 19.25H18.2002C19.3322 19.2499 20.2499 18.3322 20.25 17.2002V6.7998C20.2499 5.66778 19.3322 4.75011 18.2002 4.75H5.7998ZM8.64941 13.8525C7.96606 13.1692 6.85726 13.1693 6.17383 13.8525L3.81445 16.2119L3.75 16.1475V17.2002C3.75011 18.3322 4.66778 19.2499 5.7998 19.25H14.0459L8.64941 13.8525Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    r.d(t, {}, { v: n })
  },
  KNkV(e, t, r) {
    let n = (0, r("nkTT").a)({
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
    r.d(t, {}, { V: n })
  },
  duD4(e, t, r) {
    function n(e, [t, r]) {
      return Math.min(r, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(n, "name", { value: "clamp", configurable: !0 }), r.d(t, {}, { q: n }))
  },
  YAOF(e, t, r) {
    r.d(t, { Q6: () => G, bL: () => k, zi: () => z, CC: () => R })
    var n = r("zd8w"),
      a = r("duD4"),
      o = r("kUVq"),
      l = r("lVCP"),
      i = r("zWxU"),
      s = r("Hj0L"),
      c = r("k5JT")
    function d(e) {
      let t = n.useRef({ value: e, previous: e })
      return n.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(d, "name", { value: "usePrevious", configurable: !0 })
    var u = r("Vuge"),
      p = r("Fc3g"),
      f = r("gMOs"),
      g = r("ABep"),
      m = Object.defineProperty,
      h = (e, t) => m(e, "name", { value: t, configurable: !0 }),
      x = ["PageUp", "PageDown"],
      y = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      _ = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      v = "Slider",
      [b, w, j] = (0, f.N)(v),
      [A, T] = (0, i.A)(v, [j]),
      [N, C] = A(v),
      k = n.forwardRef(
        h(function (e, t) {
          let {
              name: r,
              min: i = 0,
              max: c = 100,
              step: d = 1,
              orientation: u = "horizontal",
              disabled: p = !1,
              minStepsBetweenThumbs: f = 0,
              defaultValue: m = [i],
              value: _,
              onValueChange: v = h(() => {}, "onValueChange"),
              onValueCommit: w = h(() => {}, "onValueCommit"),
              inverted: j = !1,
              form: A,
              ...T
            } = e,
            C = n.useRef(new Set()),
            k = n.useRef(0),
            S = n.useRef(!1),
            E = "horizontal" === u,
            [M, R] = n.useState(null),
            O = (0, l.s)(t, R),
            [G = [], D] = (0, s.i)({
              prop: _,
              defaultProp: m,
              onChange: h((e) => {
                let t = [...C.current]
                ;(t[k.current]?.focus({ preventScroll: !0, focusVisible: S.current }), (S.current = !1), v(e))
              }, "onChange"),
            }),
            H = n.useRef(G),
            L = n.useRef(G)
          function F(e) {
            let t = V(G, e)
            B(e, t)
          }
          function Y(e) {
            B(e, k.current)
          }
          function z() {
            String(G) !== String(H.current) && w(G)
          }
          function B(e, t, { commit: r } = { commit: !1 }) {
            let n = X(d),
              o = J(Math.round((e - i) / d) * d + i, n),
              l = (0, a.q)(o, [i, c])
            D((e = []) => {
              let n = U(e, l, t)
              if (!Q(n, f * d)) return e
              {
                k.current = n.indexOf(l)
                let t = String(n) !== String(e)
                return (t && r && w(n), t ? n : e)
              }
            })
          }
          return (
            n.useEffect(() => {
              let e = A ? M?.ownerDocument.getElementById(A) : M?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = h(() => D(L.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [M, A, D]),
            h(F, "handleSlideStart"),
            h(Y, "handleSlideMove"),
            h(z, "handleSlideEnd"),
            h(B, "updateValues"),
            (0, g.jsx)(N, {
              scope: e.__scopeSlider,
              name: r,
              disabled: p,
              min: i,
              max: c,
              valueIndexToChangeRef: k,
              thumbs: C.current,
              values: G,
              orientation: u,
              form: A,
              children: (0, g.jsx)(b.Provider, {
                scope: e.__scopeSlider,
                children: (0, g.jsx)(b.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, g.jsx)(E ? I : P, {
                    "aria-disabled": p,
                    "data-disabled": p ? "" : void 0,
                    ...T,
                    ref: O,
                    onPointerDown: (0, o.mK)(T.onPointerDown, () => {
                      p || ((H.current = G), (S.current = !1))
                    }),
                    min: i,
                    max: c,
                    inverted: j,
                    onSlideStart: p ? void 0 : F,
                    onSlideMove: p ? void 0 : Y,
                    onSlideEnd: p ? void 0 : z,
                    onHomeKeyDown: () => {
                      p || ((S.current = !0), B(i, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      p || ((S.current = !0), B(c, G.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!p) {
                        S.current = !0
                        let r = x.includes(e.key) || (e.shiftKey && y.includes(e.key)),
                          n = k.current
                        B(ee(G[n], { min: i, step: d, direction: t, multiplier: r ? 10 : 1 }), n, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [S, E] = A(v, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      I = n.forwardRef(
        h(function (e, t) {
          let {
              min: r,
              max: a,
              dir: o,
              inverted: i,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: u,
              onStepKeyDown: p,
              ...f
            } = e,
            [m, x] = n.useState(null),
            y = (0, l.s)(t, x),
            v = n.useRef(void 0),
            b = (0, c.useDirection)(o),
            w = "ltr" === b,
            j = (w && !i) || (!w && i)
          function A(e) {
            let t = v.current || m.getBoundingClientRect(),
              n = Z([0, t.width], j ? [r, a] : [a, r])
            return ((v.current = t), n(e - t.left))
          }
          return (
            h(A, "getValueFromPointer"),
            (0, g.jsx)(S, {
              scope: e.__scopeSlider,
              startEdge: j ? "left" : "right",
              endEdge: j ? "right" : "left",
              direction: j ? 1 : -1,
              size: "width",
              children: (0, g.jsx)(M, {
                dir: b,
                "data-orientation": "horizontal",
                ...f,
                ref: y,
                style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = A(e.clientX)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = A(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((v.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = _[j ? "from-left" : "from-right"].includes(e.key)
                  p?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      P = n.forwardRef(
        h(function (e, t) {
          let {
              min: r,
              max: a,
              inverted: o,
              onSlideStart: i,
              onSlideMove: s,
              onSlideEnd: c,
              onStepKeyDown: d,
              ...u
            } = e,
            p = n.useRef(null),
            f = (0, l.s)(t, p),
            m = n.useRef(void 0),
            x = !o
          function y(e) {
            let t = m.current || p.current.getBoundingClientRect(),
              n = Z([0, t.height], x ? [a, r] : [r, a])
            return ((m.current = t), n(e - t.top))
          }
          return (
            h(y, "getValueFromPointer"),
            (0, g.jsx)(S, {
              scope: e.__scopeSlider,
              startEdge: x ? "bottom" : "top",
              endEdge: x ? "top" : "bottom",
              size: "height",
              direction: x ? 1 : -1,
              children: (0, g.jsx)(M, {
                "data-orientation": "vertical",
                ...u,
                ref: f,
                style: { ...u.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = y(e.clientY)
                  i?.(t)
                },
                onSlideMove: (e) => {
                  let t = y(e.clientY)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((m.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = _[x ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      M = n.forwardRef(
        h(function (e, t) {
          let {
              __scopeSlider: r,
              onSlideStart: n,
              onSlideMove: a,
              onSlideEnd: l,
              onHomeKeyDown: i,
              onEndKeyDown: s,
              onStepKeyDown: c,
              ...d
            } = e,
            u = C(v, r)
          return (0, g.jsx)(p.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, o.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (i(e), e.preventDefault())
                : "End" === e.key
                  ? (s(e), e.preventDefault())
                  : x.concat(y).includes(e.key) && (c(e), e.preventDefault())
            }),
            onPointerDown: (0, o.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                u.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : n(e))
            }),
            onPointerMove: (0, o.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && a(e)
            }),
            onPointerUp: (0, o.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
            }),
          })
        }, "SliderImpl"),
      ),
      R = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: r, ...n } = e,
            a = C("SliderTrack", r)
          return (0, g.jsx)(p.sG.span, {
            "data-disabled": a.disabled ? "" : void 0,
            "data-orientation": a.orientation,
            ...n,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      O = "SliderRange",
      G = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: r, ...a } = e,
            o = C(O, r),
            i = E(O, r),
            s = n.useRef(null),
            c = (0, l.s)(t, s),
            d = o.values.length,
            u = o.values.map((e) => q(e, o.min, o.max)),
            f = d > 1 ? Math.min(...u) : 0,
            m = 100 - Math.max(...u)
          return (0, g.jsx)(p.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...a,
            ref: c,
            style: { ...e.style, [i.startEdge]: f + "%", [i.endEdge]: m + "%" },
          })
        }, "SliderRange"),
      ),
      [D, H] = A("SliderThumb")
    function L(e) {
      let { __scopeSlider: t, name: r, children: a, internal_do_not_use_render: o } = e,
        l = C("SliderThumbProvider", t),
        i = w(t),
        [s, c] = n.useState(null),
        d = n.useMemo(() => (s ? i().findIndex((e) => e.ref.current === s) : -1), [i, s]),
        p = (0, u.X)(s),
        f = !s || !!l.form || !!s.closest("form"),
        m = l.values[d],
        h = r ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
        x = void 0 === m ? 0 : q(m, l.min, l.max)
      n.useEffect(() => {
        if (s)
          return (
            l.thumbs.add(s),
            () => {
              l.thumbs.delete(s)
            }
          )
      }, [s, l.thumbs])
      let y = {
        value: m,
        name: h,
        form: l.form,
        isFormControl: f,
        index: d,
        thumb: s,
        onThumbChange: c,
        percent: x,
        size: p,
      }
      return (0, g.jsx)(D, { scope: t, ...y, children: et(o) ? o(y) : a })
    }
    h(L, "SliderThumbProvider")
    var F = "SliderThumbTrigger",
      Y = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: r, ...n } = e,
            a = C(F, r),
            i = E(F, r),
            { index: s, value: c, percent: d, size: u, onThumbChange: f } = H(F, r),
            m = (0, l.s)(t, f),
            h = K(s, a.values.length),
            x = u?.[i.size],
            y = x ? $(x, d, i.direction) : 0
          return (0, g.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${d}% + ${y}px)`,
            },
            children: (0, g.jsx)(b.ItemSlot, {
              scope: r,
              children: (0, g.jsx)(p.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || h,
                "aria-valuemin": a.min,
                "aria-valuenow": c,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...n,
                ref: m,
                style: void 0 === c ? { display: "none" } : e.style,
                onFocus: (0, o.mK)(e.onFocus, () => {
                  a.valueIndexToChangeRef.current = s
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      z = n.forwardRef(
        h(function (e, t) {
          let { __scopeSlider: r, name: n, ...a } = e
          return (0, g.jsx)(L, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({ index: e, isFormControl: n }) =>
              (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(Y, { ...a, ref: t, __scopeSlider: r }),
                  n ? (0, g.jsx)(B, { __scopeSlider: r }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      B = n.forwardRef(
        h(function ({ __scopeSlider: e, ...t }, r) {
          let { value: a, name: o, form: i } = H("SliderBubbleInput", e),
            s = n.useRef(null),
            c = (0, l.s)(s, r),
            u = d(a)
          return (
            n.useEffect(() => {
              let e = s.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (u !== a && t) {
                let r = new Event("input", { bubbles: !0 })
                ;(t.call(e, a), e.dispatchEvent(r))
              }
            }, [u, a]),
            (0, g.jsx)(p.sG.input, { style: { display: "none" }, name: o, form: i, ...t, ref: c, defaultValue: a })
          )
        }, "SliderBubbleInput"),
      )
    function U(e = [], t, r) {
      let n = [...e]
      return ((n[r] = t), n.sort((e, t) => e - t))
    }
    function q(e, t, r) {
      return (0, a.q)((100 / (r - t)) * (e - t), [0, 100])
    }
    function K(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function V(e, t) {
      if (1 === e.length) return 0
      let r = e.map((e) => Math.abs(e - t)),
        n = Math.min(...r)
      return r.indexOf(n)
    }
    function $(e, t, r) {
      let n = e / 2,
        a = Z([0, 50], [0, n])
      return (n - a(t) * r) * r
    }
    function W(e) {
      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
    }
    function Q(e, t) {
      return !(t > 0) || Math.min(...W(e)) >= t
    }
    function Z(e, t) {
      return (r) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let n = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + n * (r - e[0])
      }
    }
    function X(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, r] = t.split("e"),
          n = e.split(".")[1] || "",
          a = Number(r)
        return Math.max(0, n.length - a)
      }
      let r = t.split(".")[1]
      return r ? r.length : 0
    }
    function J(e, t) {
      let r = Math.pow(10, t)
      return Math.round(e * r) / r
    }
    function ee(e, { min: t, step: r, direction: n, multiplier: a }) {
      let o,
        l = X(r),
        i = (e - t) / r,
        s = Math.round(i)
      return ((o = J(s * r + t, l) === J(e, l) ? s + a * n : n > 0 ? Math.ceil(i) : Math.floor(i)), J(o * r + t, l))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(h(U, "getNextSortedValues"),
      h(q, "convertValueToPercentage"),
      h(K, "getLabel"),
      h(V, "getClosestValueIndex"),
      h($, "getThumbInBoundsOffset"),
      h(W, "getStepsBetweenValues"),
      h(Q, "hasMinStepsBetweenValues"),
      h(Z, "linearScale"),
      h(X, "getDecimalCount"),
      h(J, "roundValue"),
      h(ee, "getNextStepValue"),
      h(et, "isFunction"))
  },
  abZZ(e, t, r) {
    r.d(
      t,
      {},
      {
        A: function (e, t) {
          let r = t || {}
          return ("" === e[e.length - 1] ? [...e, ""] : e)
            .join((r.padRight ? " " : "") + "," + (!1 === r.padLeft ? "" : " "))
            .trim()
        },
        q: function (e) {
          let t = [],
            r = String(e || ""),
            n = r.indexOf(","),
            a = 0,
            o = !1
          for (; !o;) {
            ;-1 === n && ((n = r.length), (o = !0))
            let e = r.slice(a, n).trim()
            ;((e || !o) && t.push(e), (a = n + 1), (n = r.indexOf(",", a)))
          }
          return t
        },
      },
    )
  },
  N3yO(e, t, r) {
    let n = /[ \t\n\f\r]/g
    function a(e) {
      return "" === e.replace(n, "")
    }
    r.d(
      t,
      {},
      {
        m: function (e) {
          return "object" == typeof e ? "text" === e.type && a(e.value) : a(e)
        },
      },
    )
  },
  gMH0(e, t, r) {
    r.d(
      t,
      {},
      {
        A: function (e) {
          return e.join(" ").trim()
        },
        q: function (e) {
          let t = String(e || "").trim()
          return t ? t.split(/[ \t\n\r\f]+/g) : []
        },
      },
    )
  },
}
//# sourceMappingURL=530132.975893a91d.js.map
