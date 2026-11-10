import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, ORt as n, Qit as r, nat as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as a,
  Bl as o,
  CMr as s,
  Dx as c,
  Ex as l,
  Gl as u,
  Hl as d,
  Mx as f,
  Ox as p,
  QCr as m,
  Sx as h,
  Tx as g,
  VPn as _,
  Wl as v,
  fBr as y,
  kx as b,
  lBr as x,
  n0n as S,
  nwr as C,
  pYn as ee,
  wx as w,
  xMr as T,
  xx as E,
  yMr as D,
  zl as O,
} from "./app-initial-ad16eaadf81f.js";
import { n as k, r as A, t as j } from "./engagement-af28f336ab5e.js";
import {
  _ as te,
  a as ne,
  c as M,
  d as N,
  f as re,
  i as ie,
  l as ae,
  m as oe,
  n as se,
  o as ce,
  p as le,
  r as P,
  s as ue,
  t as de,
  u as F,
  v as fe,
  y as pe,
} from "./chatgpt-product-metrics-840cc61c7ee0.js";
function I(e, t, n, i, c, l, u = `response`) {
  if (t == null || n == null) return;
  let f = e.get(s).isChatgptBrowserReplacement,
    p = u === `response` && (n.type === `product` || n.render_as === `table`),
    m = t.messageId != null && !t.messageId.startsWith(`WEB:`),
    h = !L(n);
  if (h && !(f && m)) return;
  let g = t.contentReferences.indexOf(n),
    _ = h ? t.messageId : (t.contentReferenceMessageIds?.[g] ?? t.messageId);
  if (_ == null || _.startsWith(`WEB:`)) return;
  let y = h ? void 0 : ee(i.analytics_meta),
    b = (e) => (y != null && Object.hasOwn(y, e) ? String(y[e]) : void 0),
    x = b(`action`),
    S = new Map([
      [`show`, O.CHATGPT_CONTENT_REFERENCE_ACTION_SHOW],
      [`click`, O.CHATGPT_CONTENT_REFERENCE_ACTION_CLICK],
      [`hover`, O.CHATGPT_CONTENT_REFERENCE_ACTION_HOVER],
    ]),
    C = b(`type`) ?? (typeof n.type == `string` ? n.type : void 0),
    w =
      (!h &&
        c === o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN &&
        [`product`, `products`, `product_entity`].includes(C ?? ``) &&
        !t.shouldBlockExternalEgress &&
        (b(`offer_url`) || i.url || b(`site_url`) || b(`merchant_url`))) ||
      void 0,
    E;
  ((f && m) || (!f && u === `shopping_browse`)) &&
    ((E = v.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE),
    u === `shopping_browse`
      ? (E = v.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_BROWSE)
      : n.type === `explore_more` && (E = v.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_PREVIEW));
  let D = c === o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN,
    k = c,
    A = D ? `search_content_reference_shown` : `search_content_reference_clicked`;
  (h &&
    p &&
    (k = D
      ? o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN
      : o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_CLICKED),
    h &&
      p &&
      (A = D ? `chatgpt_shopping_content_reference_shown` : `chatgpt_shopping_content_reference_clicked`));
  let j = h ? void 0 : C;
  (h && p && (j = `product`),
    T(e, d, {
      eventType: k,
      shoppingContext: E,
      productId: i.id ?? void 0,
      productEventUuid: i.product_event_uuid ?? void 0,
      productIndex: !p && n.type !== `product_entity` && l != null ? r(l + 1) : void 0,
      contentReferenceStartIndex: typeof n.start_idx == `number` ? r(n.start_idx) : void 0,
      contentReferenceEndIndex: p && typeof n.end_idx == `number` ? r(n.end_idx) : void 0,
      renderAs:
        p && (n.render_as === `hero` || n.render_as === `block` || n.render_as === `table`)
          ? n.render_as
          : void 0,
      hasPopularTag:
        !p && n.type === `product_entity`
          ? (i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1)
          : void 0,
      legacyStatsigEventName: e.get(s).isChatgptBrowserReplacement ? A : void 0,
      action: S.get(x ?? ``),
      conversationId: b(`conversation_id`) ?? e.get(a, t.conversationId) ?? void 0,
      messageId: b(`message_id`) ?? _,
      contentReferenceType: j,
      ...(w === void 0 ? {} : { url: w }),
      category: b(`category`),
      ctaType: b(`cta_type`),
      linkType: b(`link_type`),
      widgetName: b(`widget_name`),
      businessId: b(`business_id`),
      sectionLocation: b(`section_location`),
      followupSource: b(`followup_source`),
    }));
}
function me(e, t, n, r, i, a, s) {
  if (
    t == null ||
    n == null ||
    (!L(n) && n.type !== `product` && n.type !== `product_entity`) ||
    t.trackShownImpressions === !1
  )
    return;
  let c = t.contentReferences.indexOf(n),
    l = t.contentReferenceMessageIds?.[c] ?? t.messageId;
  if (l == null || l.startsWith(`WEB:`)) return;
  let u = JSON.stringify([
    l,
    n.start_idx,
    n.type,
    r.id,
    ...(n.type === `product_entity` ? [] : [r.analytics_meta, r.product_event_uuid, r.title, r.url, i]),
  ]);
  a.has(u) ||
    (a.add(u),
    s?.(),
    I(e, { ...t, messageId: l }, n, r, o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN, i));
}
function L(e) {
  return (
    e.type === `products` ||
    e.type === `product_group` ||
    (e.type === `product_entity` && e.render_as !== `table`) ||
    e.type === `explore_more`
  );
}
function R() {
  return (R = e(() => {
    (u(), i(), D(), _());
  }))();
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = (function (e) {
      return (
        (e.CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED = `CHATGPT_SHOPPING_LINK_TYPE_UNSPECIFIED`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL = `CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER = `CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY = `CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT = `CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY = `CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT = `CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION = `CHATGPT_SHOPPING_LINK_TYPE_REVIEW_CITATION`),
        (e.CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION = `CHATGPT_SHOPPING_LINK_TYPE_RATIONALE_CITATION`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (B = { $type: `protobuf_analytics_events.v1.ChatgptShoppingLinkAction` }),
      (V = { $type: `protobuf_analytics_events.v1.ChatgptShoppingBrowseScrolled` }));
  }))();
}
function U(e, t, n) {
  e.get(s).isChatgptBrowserReplacement &&
    t.messageId != null &&
    !t.messageId.startsWith(`WEB:`) &&
    T(e, B, { ...n, messageId: t.messageId, conversationId: e.get(a, t.conversationId) ?? void 0 });
}
function he(e, t, n, i, a, o) {
  let s = t.productReference;
  if (s == null) return;
  let c = !o && (s.type === `product` || s.render_as === `table`),
    l = !o && s.type === `product_entity` && !c,
    u = {
      actionType:
        a === `show` ? E.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN : E.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      linkType: z.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL,
      surfaceLocation: h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      contentReferenceType:
        s.type === `products` ||
        s.type === `product_group` ||
        s.type === `product_entity` ||
        s.type === `explore_more`
          ? s.type
          : void 0,
      contentReferenceStartIndex: typeof s.start_idx == `number` ? r(s.start_idx) : void 0,
      productId: n.id ?? void 0,
      productEventUuid: n.product_event_uuid ?? void 0,
      productIndex: !c && !l && i != null ? r(i + 1) : void 0,
    };
  (o
    ? ((u.linkType = z.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER),
      (u.surfaceLocation = h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE),
      (u.contentReferenceType = `products`),
      (u.contentReferenceStartIndex = r(0)))
    : c
      ? ((u.linkType =
          s.render_as === `block`
            ? z.CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY
            : z.CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT),
        (u.contentReferenceType = `product`),
        (u.contentReferenceEndIndex = typeof s.end_idx == `number` ? r(s.end_idx) : void 0),
        (u.renderAs =
          s.render_as === `hero` || s.render_as === `block` || s.render_as === `table`
            ? s.render_as
            : void 0))
      : l
        ? ((u.linkType = z.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY),
          (u.hasPopularTag = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1))
        : s.type === `explore_more` && (u.linkType = z.CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT),
    U(e, t, u));
}
function W() {
  return (W = e(() => {
    (f(), H(), i(), D(), _());
  }))();
}
function G(e, t, i) {
  let o = i.productReference,
    s = i.messageId,
    c = s == null ? void 0 : e.get(S, i.conversationId)?.[s]?.message,
    l = C(c?.metadata?.model_dil),
    u = n().safeParse(o?.start_idx),
    d = u.success ? r(u.data) : void 0,
    f = [t.id, t.product_id].find((e) => typeof e == `string` && e.trim() !== ``)?.trim();
  return {
    conversationId: e.get(a, i.conversationId) ?? void 0,
    messageId: s,
    assistantMessageId: s,
    turnOrdinal: j(e, i.conversationId, s),
    contentReferenceStartIndex: d,
    contentReferenceType: K(o),
    isGenui:
      C(l?.dil)?.type != null || c?.metadata?.model_dil_v2 != null || c?.metadata?.genui_refresh != null,
    entityId: f,
    parentContext: { entityId: f, entityCategory: `product`, contentReferenceStartIndex: d, messageId: s },
  };
}
function K(e) {
  switch (e?.type) {
    case `product`:
      return e.render_as === `hero`
        ? `hero_product_entity`
        : e.render_as === `block`
          ? `rich_product_entity`
          : `product_entity`;
    case `product_entity`:
      return e.render_as === `table` ? `comparison_table_product_entity` : `product_entity`;
    case `explore_more`:
      return `products`;
    case `products`:
    case `product_group`:
      return e.type;
    default:
      return;
  }
}
function q(e, t, n) {
  if (t == null) return !1;
  let r = n == null ? -1 : t.contentReferences.indexOf(n),
    i = t.contentReferenceMessageIds?.[r] ?? t.messageId;
  return i != null && e.get(S, t.conversationId)?.[i]?.message?.metadata?.mercury_message === !0;
}
function J(
  e,
  t,
  n,
  i,
  a,
  c = n.productEngagementSurfaceLocation === h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
    ? `shopping_browse`
    : `response`,
) {
  e.get(s).isChatgptBrowserReplacement &&
    I(
      e,
      n,
      c === `shopping_browse` ? { type: `products`, start_idx: 0 } : n.productReference,
      t,
      o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED,
      i,
      c,
    );
  let { entityId: u, parentContext: d, ...f } = G(e, t, n);
  (a instanceof Element ? a.closest(`img`) : null) != null && c === `response`
    ? T(e, g, {
        ...f,
        actionType: E.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        surfaceLocation: h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        imageAffordance: l.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GROUP_TILE,
        imageIndex: r(i ?? 0),
        parentContext: d,
        tags: [],
      })
    : A(e, {
        ...f,
        conversationId: n.conversationId,
        contentReferenceType: f.contentReferenceType ?? `unrecognized`,
        actionType: E.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        surfaceLocation:
          c === `shopping_browse`
            ? h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
            : h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: w.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: u,
        entityCategory: `product`,
      });
}
function Y(e, t, n, r, i, a, o, s, l) {
  if (n.productReference == null) return;
  let { entityId: u, ...d } = G(e, t, n),
    f = n.productReference?.render_as === `table` ? `product` : n.productReference?.type;
  (T(e, c, {
    ...d,
    contentReferenceType: s ?? (typeof f == `string` ? f : void 0),
    actionType: i,
    surfaceLocation: o,
    linkType: b.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
    linkAffordance: a,
    url: n.shouldBlockExternalEgress ? void 0 : r,
  }),
    o !== h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR &&
      he(
        e,
        n,
        t,
        l,
        i === E.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN ? `show` : `click`,
        o === h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE,
      ));
}
function X(e, t, n, r = h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE, i) {
  if (
    n.productReference?.type === `product` &&
    n.productReference.render_as === `hero` &&
    !q(e, n, n.productReference)
  )
    return;
  let a = e.get(y)?.getLayer(`2128165686`).get(`disable_pdp_for_direct_link`, !1) ?? !1;
  if (!a && t.offers != null) return;
  let o =
    (a
      ? (t.offers?.find((e) => e.available === !0 && e.url?.trim()) ?? t.offers?.find((e) => e.url?.trim()))
      : void 0
    )?.url?.trim() || t.url?.trim();
  o &&
    Y(
      e,
      t,
      n,
      o,
      E.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
      n.productReference?.type === `product_entity` && n.productReference.render_as !== `table`
        ? p.CHATGPT_LINK_AFFORDANCE_TEXT
        : p.CHATGPT_LINK_AFFORDANCE_CARD,
      r,
      void 0,
      i,
    );
}
function ge(e, t, n, r, i, a) {
  (J(e, t, n, r, i),
    Y(
      e,
      t,
      n,
      a,
      E.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      n.productReference?.type === `product_entity` && n.productReference.render_as !== `table`
        ? p.CHATGPT_LINK_AFFORDANCE_TEXT
        : p.CHATGPT_LINK_AFFORDANCE_CARD,
      h.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      void 0,
      r,
    ));
}
function Z() {
  return (Z = e(() => {
    (u(), f(), i(), m(), t(), D(), x(), R(), _(), k(), W());
  }))();
}
function _e(e, t, n, r, i = !0, a) {
  let c = a?.reference == null ? n : { ...n, productReference: a.reference };
  (a?.url == null ? J(e, t, c, r, a?.target ?? null, a?.surfaceLocation) : ge(e, t, c, r, a.target, a.url),
    i &&
      (e.get(s).isChatgptBrowserReplacement ||
        I(e, n, n.productReference, t, o.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED, r),
      Q(e, t, n, r, M.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED)));
}
function ve(e, t, n, r) {
  let { context: i, reference: a } = n();
  if (t == null || i == null || a == null || i.trackShownImpressions === !1) return;
  let o = i.contentReferences.indexOf(a),
    s = i.contentReferenceMessageIds?.[o] ?? i.messageId;
  if (s == null || s.startsWith(`WEB:`)) return;
  let c = a.type === `product` || a.type === `product_entity`,
    l =
      c ||
      a.type === `explore_more` ||
      ((a.type === `products` || a.type === `product_group`) &&
        a.inline_carousel === !0 &&
        Array.isArray(a.products) &&
        a.products.length === 1),
    u = (i) => {
      let { context: a, reference: o, product: u, productIndex: d } = n();
      if (a == null || o == null || a.trackShownImpressions === !1) return;
      let f = {
          ...a,
          messageId: s,
          productReference:
            o.type === `product_entity` && t.closest(`th`) != null ? { ...o, render_as: `table` } : o,
        },
        p = JSON.stringify([`product-shown`, s, o.start_idx, c ? void 0 : u.id, c ? void 0 : d]);
      ((l ? !r.has(p) : i) && (l && r.add(p), Q(e, u, f, d, M.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SHOWN)),
        i && me(e, f, f.productReference, u, d, r, () => X(e, u, f, void 0, d)));
    };
  if ((u(!1), typeof IntersectionObserver > `u`)) {
    c && u(!0);
    return;
  }
  let d = !0,
    f = new IntersectionObserver(
      (e) => {
        if (d) for (let t of e) t.isIntersecting && u(!0);
      },
      {
        threshold:
          c || (a.inline_carousel === !0 && Array.isArray(a.products) && a.products.length === 1) ? 0 : 0.5,
      },
    );
  return (
    f.observe(t),
    () => {
      ((d = !1), f.disconnect());
    }
  );
}
function ye(e, t, n, r, i, a) {
  let o = {
    ...$(e, t, n),
    offerIndex: i,
    offerCount: a,
    offerUrl: r.url ?? void 0,
    offerMerchantName: r.merchant_name ?? void 0,
  };
  (n.productReference != null && P(e, t, o.contentReferenceType ?? `unrecognized`, `clicked`, a, r),
    T(e, ae, o),
    T(e, F, { ...o, type: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED }));
}
function be(e, t, n, i, a, o) {
  let c = {
    ...$(e, t, n),
    offerIndex: a,
    offerCount: o,
    offerUrl: i.url ?? void 0,
    offerMerchantName: i.merchant_name ?? void 0,
  };
  (n.productReference != null && P(e, t, c.contentReferenceType ?? `unrecognized`, `shown`, o, i),
    T(e, le, {
      ...c,
      productIndex:
        e.get(s).isChatgptBrowserReplacement &&
        n.productReference != null &&
        n.messageId != null &&
        !n.messageId.startsWith(`WEB:`) &&
        n.productDetailsProductIndex != null &&
        n.productDetailsProductIndex >= 0
          ? r(n.productDetailsProductIndex)
          : void 0,
    }),
    T(e, F, { ...c, type: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN }));
}
function xe(e, t, n, r) {
  let { hasPopularTag: i, ...a } = $(e, t, n),
    o = { ...a, offerCount: r };
  (n.productReference != null && P(e, t, o.contentReferenceType ?? `unrecognized`, `list_shown`, r),
    T(e, re, o),
    T(e, F, {
      ...o,
      hasPopularTag: i,
      type: N.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
    }));
}
function Q(e, t, n, r, i) {
  let { hasPopularTag: a, ...o } = Se(e, t, n),
    s = { ...o, productIndex: r },
    c = i === M.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED;
  (s.contentReferenceType === `products` || s.contentReferenceType === `product_group`
    ? T(e, c ? ne : ce, s)
    : s.contentReferenceType !== `unrecognized` && T(e, c ? te : fe, s),
    n.productReference != null &&
      se(e, t, s.contentReferenceType ?? `unrecognized`, c ? `clicked` : `shown`));
  let l = { ...s, hasPopularTag: a, productProvider: t.metadata_sources?.[0] };
  (T(e, c ? ie : oe, l), T(e, ue, { ...l, type: i }));
}
function $(e, t, n) {
  let r = `unrecognized`;
  switch (n.productReference?.type) {
    case `product`:
    case `product_entity`:
      r = `product_entity`;
      break;
    case `products`:
    case `product_group`:
    case `explore_more`:
      r = `products`;
  }
  return { ...Se(e, t, n), contentReferenceType: r };
}
function Se(e, t, r) {
  let i = K(r.productReference) ?? `unrecognized`,
    o = n().safeParse(r.productReference?.start_idx);
  return {
    conversationId: e.get(a, r.conversationId) ?? void 0,
    messageId: r.messageId,
    contentReferenceType: i,
    contentReferenceId: r.messageId && o.success ? `${r.messageId}-${o.data}` : void 0,
    productId: t.id ?? void 0,
    productEventUuid: t.product_event_uuid ?? void 0,
    productUrl: t.url ?? void 0,
    productTitle: t.title,
    productHostname: t.url && URL.canParse(t.url) ? new URL(t.url).hostname : void 0,
    productMerchants: t.merchants ?? void 0,
    hasPopularTag: t.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
  };
}
function Ce() {
  return (Ce = e(() => {
    (u(), pe(), i(), t(), D(), Z(), de(), R(), _());
  }))();
}
export {
  H as _,
  xe as a,
  G as c,
  Y as d,
  X as f,
  z as g,
  V as h,
  ye as i,
  Z as l,
  U as m,
  _e as n,
  be as o,
  W as p,
  Q as r,
  ve as s,
  Ce as t,
  q as u,
  R as v,
  I as y,
};
//# sourceMappingURL=chatgpt-product-analytics-ae26af19ef1e.js.map
