import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Brt as t, EPt as n, Irt as r, fLt as i } from "./app-shared-bbfeca5e5737.js";
import {
  $b as a,
  Bl as o,
  Hl as s,
  Jyr as c,
  Ll as l,
  OPr as u,
  QDr as d,
  Qb as f,
  Qyr as p,
  Rl as m,
  Ul as h,
  WGn as ee,
  XDr as g,
  Xb as _,
  Yb as v,
  dIn as y,
  eOr as b,
  ex as x,
  jPr as te,
  kZn as S,
  nx as C,
  ox as w,
  pZn as T,
  rx as E,
  tx as D,
  uIn as O,
  yjn as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, r as ne, t as re } from "./engagement-4e2b4c5a0bbe.js";
var j, M, ie, N, P, F, ae, I, oe, se, L, ce, le, ue, de;
function R() {
  return (R = e(() => {
    ((j = (function (e) {
      return (
        (e.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_UNSPECIFIED = `CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_UNSPECIFIED`),
        (e.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED = `CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED`),
        (e.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SHOWN = `CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SHOWN`),
        (e.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SAVED = `CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SAVED`),
        (e.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_UNSAVED = `CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_UNSAVED`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (M = (function (e) {
        return (
          (e.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_UNSPECIFIED = `CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_UNSPECIFIED`),
          (e.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED = `CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED`),
          (e.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN = `CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN`),
          (e.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN = `CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (ie = (function (e) {
        return (
          (e.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_UNSPECIFIED = `CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_UNSPECIFIED`),
          (e.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED = `CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_ENRICHED`),
          (e.CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG = `CHATGPT_PRODUCT_SIDEBAR_ENTITY_SOURCE_SOURCE_CATALOG`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (N = { $type: `protobuf_analytics_events.v1.ChatgptProductInteractionEvent` }),
      (P = { $type: `protobuf_analytics_events.v1.ChatgptProductClickedEvent` }),
      (F = { $type: `protobuf_analytics_events.v1.ChatgptProductShownEvent` }),
      (ae = { $type: `protobuf_analytics_events.v1.ChatgptProductGroupClickedEvent` }),
      (I = { $type: `protobuf_analytics_events.v1.ChatgptProductGroupShownEvent` }),
      (oe = { $type: `protobuf_analytics_events.v1.ChatgptSingleProductClickedEvent` }),
      (se = { $type: `protobuf_analytics_events.v1.ChatgptSingleProductShownEvent` }),
      (L = { $type: `protobuf_analytics_events.v1.ChatgptProductOfferInteractionEvent` }),
      (ce = { $type: `protobuf_analytics_events.v1.ChatgptProductOfferClickedEvent` }),
      (le = { $type: `protobuf_analytics_events.v1.ChatgptProductOfferShownEvent` }),
      (ue = { $type: `protobuf_analytics_events.v1.ChatgptProductOfferListShownEvent` }),
      (de = { $type: `protobuf_analytics_events.v1.ChatgptProductSidebarEntityLoaded` }));
  }))();
}
function z(e, t, n, i, a, c, u = `response`) {
  if (t == null || n == null) return;
  let f = e.get(b).isChatgptBrowserReplacement,
    p = u === `response` && (n.type === `product` || n.render_as === `table`),
    h = t.messageId != null && !t.messageId.startsWith(`WEB:`),
    g = !B(n);
  if (g && !(f && h)) return;
  let _ = t.contentReferences.indexOf(n),
    v = g ? t.messageId : (t.contentReferenceMessageIds?.[_] ?? t.messageId);
  if (v == null || v.startsWith(`WEB:`)) return;
  let y = g ? void 0 : ee(i.analytics_meta),
    x = (e) => (y != null && Object.hasOwn(y, e) ? String(y[e]) : void 0),
    te = x(`action`),
    S = new Map([
      [`show`, l.CHATGPT_CONTENT_REFERENCE_ACTION_SHOW],
      [`click`, l.CHATGPT_CONTENT_REFERENCE_ACTION_CLICK],
      [`hover`, l.CHATGPT_CONTENT_REFERENCE_ACTION_HOVER],
    ]),
    C = x(`type`) ?? (typeof n.type == `string` ? n.type : void 0),
    w =
      (!g &&
        a === m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN &&
        [`product`, `products`, `product_entity`].includes(C ?? ``) &&
        !t.shouldBlockExternalEgress &&
        (x(`offer_url`) || i.url || x(`site_url`) || x(`merchant_url`))) ||
      void 0,
    E;
  ((f && h) || (!f && u === `shopping_browse`)) &&
    ((E = s.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE),
    u === `shopping_browse`
      ? (E = s.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_BROWSE)
      : n.type === `explore_more` && (E = s.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_PREVIEW));
  let D = a === m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN,
    O = a,
    k = D ? `search_content_reference_shown` : `search_content_reference_clicked`;
  (g &&
    p &&
    (O = D
      ? m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN
      : m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_CLICKED),
    g &&
      p &&
      (k = D ? `chatgpt_shopping_content_reference_shown` : `chatgpt_shopping_content_reference_clicked`));
  let A = g ? void 0 : C;
  (g && p && (A = `product`),
    d(e, o, {
      eventType: O,
      shoppingContext: E,
      productId: i.id ?? void 0,
      productEventUuid: i.product_event_uuid ?? void 0,
      productIndex: !p && n.type !== `product_entity` && c != null ? r(c + 1) : void 0,
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
      legacyStatsigEventName: e.get(b).isChatgptBrowserReplacement ? k : void 0,
      action: S.get(te ?? ``),
      conversationId: x(`conversation_id`) ?? e.get(T, t.conversationId) ?? void 0,
      messageId: x(`message_id`) ?? v,
      contentReferenceType: A,
      ...(w === void 0 ? {} : { url: w }),
      category: x(`category`),
      ctaType: x(`cta_type`),
      linkType: x(`link_type`),
      widgetName: x(`widget_name`),
      businessId: x(`business_id`),
      sectionLocation: x(`section_location`),
      followupSource: x(`followup_source`),
    }));
}
function fe(e, t, n, r, i, a, o) {
  if (
    t == null ||
    n == null ||
    (!B(n) && n.type !== `product` && n.type !== `product_entity`) ||
    t.trackShownImpressions === !1
  )
    return;
  let s = t.contentReferences.indexOf(n),
    c = t.contentReferenceMessageIds?.[s] ?? t.messageId;
  if (c == null || c.startsWith(`WEB:`)) return;
  let l = JSON.stringify([
    c,
    n.start_idx,
    n.type,
    r.id,
    ...(n.type === `product_entity` ? [] : [r.analytics_meta, r.product_event_uuid, r.title, r.url, i]),
  ]);
  a.has(l) ||
    (a.add(l),
    o?.(),
    z(e, { ...t, messageId: c }, n, r, m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN, i));
}
function B(e) {
  return (
    e.type === `products` ||
    e.type === `product_group` ||
    (e.type === `product_entity` && e.render_as !== `table`) ||
    e.type === `explore_more`
  );
}
function V() {
  return (V = e(() => {
    (h(), t(), g(), k());
  }))();
}
var H, U, pe;
function W() {
  return (W = e(() => {
    ((H = (function (e) {
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
      (U = { $type: `protobuf_analytics_events.v1.ChatgptShoppingLinkAction` }),
      (pe = { $type: `protobuf_analytics_events.v1.ChatgptShoppingBrowseScrolled` }));
  }))();
}
function me(e, t, n) {
  e.get(b).isChatgptBrowserReplacement &&
    t.messageId != null &&
    !t.messageId.startsWith(`WEB:`) &&
    d(e, U, { ...n, messageId: t.messageId, conversationId: e.get(T, t.conversationId) ?? void 0 });
}
function he(e, t, n, i, a, o) {
  let s = t.productReference;
  if (s == null) return;
  let c = !o && (s.type === `product` || s.render_as === `table`),
    l = !o && s.type === `product_entity` && !c,
    u = {
      actionType:
        a === `show` ? v.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN : v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      linkType: H.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_CAROUSEL,
      surfaceLocation: _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
    ? ((u.linkType = H.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_OFFER),
      (u.surfaceLocation = _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE),
      (u.contentReferenceType = `products`),
      (u.contentReferenceStartIndex = r(0)))
    : c
      ? ((u.linkType =
          s.render_as === `block`
            ? H.CHATGPT_SHOPPING_LINK_TYPE_BLOCK_PRODUCT_ENTITY
            : H.CHATGPT_SHOPPING_LINK_TYPE_SHOPPING_PRODUCT),
        (u.contentReferenceType = `product`),
        (u.contentReferenceEndIndex = typeof s.end_idx == `number` ? r(s.end_idx) : void 0),
        (u.renderAs =
          s.render_as === `hero` || s.render_as === `block` || s.render_as === `table`
            ? s.render_as
            : void 0))
      : l
        ? ((u.linkType = H.CHATGPT_SHOPPING_LINK_TYPE_PRODUCT_ENTITY),
          (u.hasPopularTag = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1))
        : s.type === `explore_more` && (u.linkType = H.CHATGPT_SHOPPING_LINK_TYPE_EXPLORE_MORE_PRODUCT),
    me(e, t, u));
}
function G() {
  return (G = e(() => {
    (w(), W(), t(), g(), k());
  }))();
}
function K(e, t, n) {
  let a = n.productReference,
    o = n.messageId,
    s = o == null ? void 0 : e.get(S, n.conversationId)?.[o]?.message,
    c = p(s?.metadata?.model_dil),
    l = i().safeParse(a?.start_idx),
    u = l.success ? r(l.data) : void 0,
    d = [t.id, t.product_id].find((e) => typeof e == `string` && e.trim() !== ``)?.trim();
  return {
    conversationId: e.get(T, n.conversationId) ?? void 0,
    messageId: o,
    assistantMessageId: o,
    turnOrdinal: re(e, n.conversationId, o),
    contentReferenceStartIndex: u,
    contentReferenceType: ge(a),
    isGenui:
      p(c?.dil)?.type != null || s?.metadata?.model_dil_v2 != null || s?.metadata?.genui_refresh != null,
    entityId: d,
    parentContext: { entityId: d, entityCategory: `product`, contentReferenceStartIndex: u, messageId: o },
  };
}
function ge(e) {
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
function _e(e, t, n) {
  if (t == null) return !1;
  let r = n == null ? -1 : t.contentReferences.indexOf(n),
    i = t.contentReferenceMessageIds?.[r] ?? t.messageId;
  return i != null && e.get(S, t.conversationId)?.[i]?.message?.metadata?.mercury_message === !0;
}
function ve(
  e,
  t,
  n,
  i,
  o,
  s = n.productEngagementSurfaceLocation === _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
    ? `shopping_browse`
    : `response`,
) {
  e.get(b).isChatgptBrowserReplacement &&
    z(
      e,
      n,
      s === `shopping_browse` ? { type: `products`, start_idx: 0 } : n.productReference,
      t,
      m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED,
      i,
      s,
    );
  let { entityId: c, parentContext: l, ...u } = K(e, t, n);
  (o instanceof Element ? o.closest(`img`) : null) != null && s === `response`
    ? d(e, a, {
        ...u,
        actionType: v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        surfaceLocation: _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        imageAffordance: x.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GROUP_TILE,
        imageIndex: r(i ?? 0),
        parentContext: l,
        tags: [],
      })
    : ne(e, {
        ...u,
        conversationId: n.conversationId,
        contentReferenceType: u.contentReferenceType ?? `unrecognized`,
        actionType: v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        surfaceLocation:
          s === `shopping_browse`
            ? _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE
            : _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: f.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: c,
        entityCategory: `product`,
      });
}
function q(e, t, n, r, i, a, o, s, c) {
  if (n.productReference == null) return;
  let { entityId: l, ...u } = K(e, t, n),
    f = n.productReference?.render_as === `table` ? `product` : n.productReference?.type;
  (d(e, D, {
    ...u,
    contentReferenceType: s ?? (typeof f == `string` ? f : void 0),
    actionType: i,
    surfaceLocation: o,
    linkType: E.CHATGPT_LINK_TYPE_PRODUCT_OFFER,
    linkAffordance: a,
    url: n.shouldBlockExternalEgress ? void 0 : r,
  }),
    o !== _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR &&
      he(
        e,
        n,
        t,
        c,
        i === v.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN ? `show` : `click`,
        o === _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SHOPPING_BROWSE,
      ));
}
function ye(e, t, n, r = _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE, i) {
  if (
    n.productReference?.type === `product` &&
    n.productReference.render_as === `hero` &&
    !_e(e, n, n.productReference)
  )
    return;
  let a = e.get(te)?.getLayer(`2128165686`).get(`disable_pdp_for_direct_link`, !1) ?? !1;
  if (!a && t.offers != null) return;
  let o =
    (a
      ? (t.offers?.find((e) => e.available === !0 && e.url?.trim()) ?? t.offers?.find((e) => e.url?.trim()))
      : void 0
    )?.url?.trim() || t.url?.trim();
  o &&
    q(
      e,
      t,
      n,
      o,
      v.CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN,
      n.productReference?.type === `product_entity` && n.productReference.render_as !== `table`
        ? C.CHATGPT_LINK_AFFORDANCE_TEXT
        : C.CHATGPT_LINK_AFFORDANCE_CARD,
      r,
      void 0,
      i,
    );
}
function be(e, t, n, r, i, a) {
  (ve(e, t, n, r, i),
    q(
      e,
      t,
      n,
      a,
      v.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      n.productReference?.type === `product_entity` && n.productReference.render_as !== `table`
        ? C.CHATGPT_LINK_AFFORDANCE_TEXT
        : C.CHATGPT_LINK_AFFORDANCE_CARD,
      _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      void 0,
      r,
    ));
}
function J() {
  return (J = e(() => {
    (h(), w(), t(), c(), n(), g(), u(), V(), k(), A(), G());
  }))();
}
function Y(e, t, n, r) {
  let { count: i, hist: a } = e.get(O),
    o = xe(t, n);
  i(`shopping`, r === `shown` ? `products_shown` : `products_clicked`, o);
  let s = Se(t.price);
  s != null && a(`shopping`, r === `shown` ? `product_cited_price` : `product_clicked_price`, o, s);
}
function X(e, t, n, r, i, a) {
  let { count: o, hist: s } = e.get(O),
    c = xe(t, n);
  if (r === `list_shown`)
    (o(`shopping`, `offer_lists_shown`, c), i > 0 && o(`shopping`, `offers_shown`, c, i));
  else if (r === `shown`) o(`shopping`, `offer_cards_shown`, c);
  else {
    o(`shopping`, `offers_clicked`, c);
    let e = Se(a?.price);
    e != null && s(`shopping`, `offer_clicked_price`, c, e);
  }
}
function xe(e, t) {
  return {
    content_reference_type: t,
    product_provider: e.metadata_sources?.[0] ?? `unknown`,
    has_popular_tag: e.popularity_metadata?.product_tags?.includes(`popular`) ? `true` : `false`,
  };
}
function Se(e) {
  let t = e?.replaceAll(`,`, ``).match(/\d+(?:\.\d+)?/);
  if (t == null) return;
  let n = Number(t[0]);
  return Number.isFinite(n) ? n : void 0;
}
function Z() {
  return (Z = e(() => {
    y();
  }))();
}
function Ce(e, t, n, r, i = !0, a) {
  let o = a?.reference == null ? n : { ...n, productReference: a.reference };
  (a?.url == null ? ve(e, t, o, r, a?.target ?? null, a?.surfaceLocation) : be(e, t, o, r, a.target, a.url),
    i &&
      (e.get(b).isChatgptBrowserReplacement ||
        z(e, n, n.productReference, t, m.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED, r),
      Oe(e, t, n, r, j.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED)));
}
function we(e, t, n, r) {
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
      ((l ? !r.has(p) : i) && (l && r.add(p), Oe(e, u, f, d, j.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_SHOWN)),
        i && fe(e, f, f.productReference, u, d, r, () => ye(e, u, f, void 0, d)));
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
function Te(e, t, n, r, i, a) {
  let o = {
    ...Q(e, t, n),
    offerIndex: i,
    offerCount: a,
    offerUrl: r.url ?? void 0,
    offerMerchantName: r.merchant_name ?? void 0,
  };
  (n.productReference != null && X(e, t, o.contentReferenceType ?? `unrecognized`, `clicked`, a, r),
    d(e, ce, o),
    d(e, L, { ...o, type: M.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_CLICKED }));
}
function Ee(e, t, n, i, a, o) {
  let s = {
    ...Q(e, t, n),
    offerIndex: a,
    offerCount: o,
    offerUrl: i.url ?? void 0,
    offerMerchantName: i.merchant_name ?? void 0,
  };
  (n.productReference != null && X(e, t, s.contentReferenceType ?? `unrecognized`, `shown`, o, i),
    d(e, le, {
      ...s,
      productIndex:
        e.get(b).isChatgptBrowserReplacement &&
        n.productReference != null &&
        n.messageId != null &&
        !n.messageId.startsWith(`WEB:`) &&
        n.productDetailsProductIndex != null &&
        n.productDetailsProductIndex >= 0
          ? r(n.productDetailsProductIndex)
          : void 0,
    }),
    d(e, L, { ...s, type: M.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_SHOWN }));
}
function De(e, t, n, r) {
  let { hasPopularTag: i, ...a } = Q(e, t, n),
    o = { ...a, offerCount: r };
  (n.productReference != null && X(e, t, o.contentReferenceType ?? `unrecognized`, `list_shown`, r),
    d(e, ue, o),
    d(e, L, {
      ...o,
      hasPopularTag: i,
      type: M.CHATGPT_PRODUCT_OFFER_INTERACTION_EVENT_TYPE_OFFER_LIST_SHOWN,
    }));
}
function Oe(e, t, n, r, i) {
  let { hasPopularTag: a, ...o } = ke(e, t, n),
    s = { ...o, productIndex: r },
    c = i === j.CHATGPT_PRODUCT_INTERACTION_EVENT_TYPE_CLICKED;
  (s.contentReferenceType === `products` || s.contentReferenceType === `product_group`
    ? d(e, c ? ae : I, s)
    : s.contentReferenceType !== `unrecognized` && d(e, c ? oe : se, s),
    n.productReference != null && Y(e, t, s.contentReferenceType ?? `unrecognized`, c ? `clicked` : `shown`));
  let l = { ...s, hasPopularTag: a, productProvider: t.metadata_sources?.[0] };
  (d(e, c ? P : F, l), d(e, N, { ...l, type: i }));
}
function Q(e, t, n) {
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
  return { ...ke(e, t, n), contentReferenceType: r };
}
function ke(e, t, n) {
  let r = ge(n.productReference) ?? `unrecognized`,
    a = i().safeParse(n.productReference?.start_idx);
  return {
    conversationId: e.get(T, n.conversationId) ?? void 0,
    messageId: n.messageId,
    contentReferenceType: r,
    contentReferenceId: n.messageId && a.success ? `${n.messageId}-${a.data}` : void 0,
    productId: t.id ?? void 0,
    productEventUuid: t.product_event_uuid ?? void 0,
    productUrl: t.url ?? void 0,
    productTitle: t.title,
    productHostname: t.url && URL.canParse(t.url) ? new URL(t.url).hostname : void 0,
    productMerchants: t.merchants ?? void 0,
    hasPopularTag: t.popularity_metadata?.product_tags?.includes(`popular`) ?? !1,
  };
}
function $() {
  return ($ = e(() => {
    (h(), R(), t(), n(), g(), J(), Z(), V(), k());
  }))();
}
export {
  j as C,
  R as D,
  ie as E,
  N as S,
  de as T,
  H as _,
  Ee as a,
  z as b,
  Y as c,
  _e as d,
  q as f,
  pe as g,
  me as h,
  De as i,
  K as l,
  G as m,
  Ce as n,
  we as o,
  ye as p,
  Te as r,
  Z as s,
  $ as t,
  J as u,
  W as v,
  F as w,
  I as x,
  V as y,
};
//# sourceMappingURL=chatgpt-product-analytics-d7be3b581237.js.map
