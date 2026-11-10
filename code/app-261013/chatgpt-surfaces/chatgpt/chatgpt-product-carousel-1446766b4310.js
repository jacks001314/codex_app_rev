import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  BV as r,
  Brt as i,
  Cot as a,
  IDt as o,
  Irt as s,
  Ixt as c,
  JR as l,
  LV as u,
  Pxt as d,
  TJ as f,
  VDt as p,
  XA as m,
  YA as h,
  YR as g,
  ZA as _,
  _Mt as v,
  awt as y,
  bz as b,
  gMt as x,
  iwt as S,
  jDt as C,
  t3 as w,
  vzt as T,
  wot as E,
  xMt as D,
  xz as O,
  yzt as k,
  z4 as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bl as j,
  Cwr as M,
  Hl as N,
  MRt as P,
  NRt as F,
  QDr as ee,
  Rl as te,
  Ul as I,
  XDr as L,
  Xl as ne,
  YXn as re,
  Zl as ie,
  _u as ae,
  cut as oe,
  eDr as se,
  eOr as ce,
  fut as R,
  gu as z,
  gwr as le,
  iZn as ue,
  nc as de,
  oDr as B,
  pZn as fe,
  rc as pe,
  yjn as me,
} from "./app-initial-5851df3f6cb1.js";
import { Us as he, Ws as V } from "./app-primary-fe8a450b3b04.js";
import { n as ge, r as H, t as _e } from "./card-carousel-scroll-956c5506fddb.js";
import { d as U, n as ve, o as ye, t as W, u as be } from "./chatgpt-product-analytics-d7be3b581237.js";
import {
  a as xe,
  c as G,
  i as K,
  l as Se,
  n as Ce,
  o as we,
  r as Te,
  s as Ee,
  t as De,
  u as Oe,
} from "./product-image-placeholder-81b1dc646f67.js";
import { n as ke, t as Ae } from "./product-favorite-action-391385a45ba0.js";
function je(e) {
  return (
    e.provider === `p4` || e.providers?.includes(`p4`) === !0 || e.metadata_sources?.includes(`p4`) === !0
  );
}
function Me(e) {
  return je(e) ? `Canopy` : e.merchants?.trim() || void 0;
}
function Ne(e) {
  return [
    ...new Set(
      [e.showcase_metadata?.image?.url, ...(e.image_urls ?? [])]
        .filter((t) => !e.shopping_vto?.generated_images?.some((e) => e.vto_image_url === t))
        .map((e) => (e?.trim() ? m(e) : void 0))
        .filter((e) => e != null),
    ),
  ];
}
function q() {
  return (q = e(() => {
    _();
  }))();
}
function Pe(e) {
  let t = (0, Le.c)(34),
    { className: n, onLoad: r, presentation: i, product: o, reference: s, imageAnalytics: l } = e,
    u = n === void 0 ? `aspect-[13/16] w-full` : n,
    d = i === void 0 ? `card` : i,
    f = c(a),
    p = pe(),
    m = Ne(o),
    h;
  t[0] !== l || t[1] !== d || t[2] !== s
    ? ((h = l ?? Ie(s, d)), (t[0] = l), (t[1] = d), (t[2] = s), (t[3] = h))
    : (h = t[3]);
  let g = h,
    _ = m.length === 0,
    v = p?.shouldBlockExternalEgress === !0,
    y;
  t[4] !== g || t[5] !== o || t[6] !== s || t[7] !== f || t[8] !== p
    ? ((y = () => {
        we(f, {
          ...g,
          isShoppingResearch:
            s?.type === `product` && g.surface !== `block` ? U(f, p, s) : g.isShoppingResearch,
          product: o,
          productId: o.id ?? ``,
          imageUrl: ``,
          reason: `missing_url`,
        });
      }),
      (t[4] = g),
      (t[5] = o),
      (t[6] = s),
      (t[7] = f),
      (t[8] = p),
      (t[9] = y))
    : (y = t[9]);
  let b = (0, Re.useEffectEvent)(y),
    x;
  t[10] !== v || t[11] !== b || t[12] !== _
    ? ((x = () => {
        _ && !v && b();
      }),
      (t[10] = v),
      (t[11] = b),
      (t[12] = _),
      (t[13] = x))
    : (x = t[13]);
  let S;
  if (
    (t[14] !== g.citationType ||
    t[15] !== g.surface ||
    t[16] !== v ||
    t[17] !== _ ||
    t[18] !== o.id ||
    t[19] !== o.product_lookup_key ||
    t[20] !== o.title ||
    t[21] !== o.url
      ? ((S = [_, v, o.id, o.product_lookup_key, o.url, o.title, g.citationType, g.surface]),
        (t[14] = g.citationType),
        (t[15] = g.surface),
        (t[16] = v),
        (t[17] = _),
        (t[18] = o.id),
        (t[19] = o.product_lookup_key),
        (t[20] = o.title),
        (t[21] = o.url),
        (t[22] = S))
      : (S = t[22]),
    (0, Re.useEffect)(x, S),
    d === `block` && m.length === 0)
  )
    return null;
  let C = Fe,
    w = JSON.stringify([o.id, m[0]]),
    T = p?.shouldBlockExternalEgress === !0,
    E;
  return (
    t[23] !== C ||
    t[24] !== g ||
    t[25] !== u ||
    t[26] !== m ||
    t[27] !== r ||
    t[28] !== d ||
    t[29] !== o ||
    t[30] !== s ||
    t[31] !== w ||
    t[32] !== T
      ? ((E = (0, J.jsx)(
          C,
          {
            className: u,
            imageUrls: m,
            imageAnalytics: g,
            reference: s,
            onLoad: r,
            presentation: d,
            product: o,
            shouldBlockExternalEgress: T,
          },
          w,
        )),
        (t[23] = C),
        (t[24] = g),
        (t[25] = u),
        (t[26] = m),
        (t[27] = r),
        (t[28] = d),
        (t[29] = o),
        (t[30] = s),
        (t[31] = w),
        (t[32] = T),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
function Fe(e) {
  let t = (0, Le.c)(36),
    {
      className: n,
      imageUrls: r,
      onLoad: i,
      presentation: a,
      product: o,
      shouldBlockExternalEgress: s,
      imageAnalytics: c,
      reference: l,
    } = e,
    [u, d] = (0, Re.useState)(0),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { width: 0, height: 0 }), (t[0] = f)) : (f = t[0]);
  let [p, m] = (0, Re.useState)(f),
    h = u == null ? void 0 : r[u],
    g =
      u === 0
        ? o.showcase_metadata?.slots?.[
            a === `hero` || a === `block` ? `product_square` : `product_portrait_card`
          ]
        : void 0,
    _ = g ? o.showcase_metadata?.background : null,
    v = a === `card` ? o.merchant_badges?.[0] : void 0,
    y = g?.placement,
    b = a === `collage` || Math.abs(p.width / p.height - 1) < 0.4 ? `cover` : `contain`,
    S = g && a !== `hero` ? g.fit : b,
    C = Math.min(g?.zoom != null && g.zoom > 0 ? g.zoom : 1, a === `hero` ? 1 : 1 / 0),
    w = `${Math.min(1, Math.max(0, g?.position?.x ?? 0.5)) * 100}% ${Math.min(1, Math.max(0, g?.position?.y ?? 0.5)) * 100}%`,
    T;
  if (
    y?.left_percent != null &&
    y.top_percent != null &&
    y.width_percent != null &&
    y.height_percent != null
  ) {
    let e = `${y.left_percent}%`,
      n = `${y.top_percent}%`,
      r = `${y.width_percent}%`,
      i = `${y.height_percent}%`,
      a;
    (t[1] !== e || t[2] !== n || t[3] !== r || t[4] !== i
      ? ((a = { inset: `auto`, left: e, top: n, width: r, height: i, maxWidth: `none`, maxHeight: `none` }),
        (t[1] = e),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
      (T = a));
  } else if (g) {
    let e = S === `cover` ? `cover` : `contain`,
      n = C === 1 ? void 0 : `scale(${C})`,
      r;
    (t[6] !== w || t[7] !== e || t[8] !== n
      ? ((r = { objectFit: e, objectPosition: w, transform: n, transformOrigin: w }),
        (t[6] = w),
        (t[7] = e),
        (t[8] = n),
        (t[9] = r))
      : (r = t[9]),
      (T = r));
  }
  let E = a !== `collage` && `rounded-xl`,
    D;
  t[10] !== n || t[11] !== E
    ? ((D = x(`relative overflow-clip bg-[#F3F3F3] dark:bg-[#F3F3F3]`, E, n)),
      (t[10] = n),
      (t[11] = E),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === _
    ? (O = t[14])
    : ((O = _?.primary
        ? {
            backgroundColor: _.primary,
            backgroundImage:
              _.type === `gradient` && _.secondary
                ? `linear-gradient(180deg, ${_.primary} 0%, ${_.secondary} 100%)`
                : void 0,
          }
        : void 0),
      (t[13] = _),
      (t[14] = O));
  let k;
  t[15] !== c ||
  t[16] !== u ||
  t[17] !== r ||
  t[18] !== b ||
  t[19] !== p ||
  t[20] !== i ||
  t[21] !== a ||
  t[22] !== o ||
  t[23] !== l ||
  t[24] !== s ||
  t[25] !== g ||
  t[26] !== h ||
  t[27] !== T
    ? ((k =
        !s &&
        (u != null && h
          ? (0, J.jsx)(
              Te,
              {
                className: x(
                  `absolute inset-0 m-0 block h-full w-full select-none`,
                  a === `card` &&
                    `transition-transform duration-200 ease-out group-hover/product-card:scale-[1.02] motion-reduce:transition-none`,
                  g?.image_blend_mode !== `normal` && `mix-blend-darken`,
                  g == null && (b === `cover` ? `object-cover` : `object-contain`),
                  g == null && (a === `collage` || p.height > p.width ? `object-top` : `object-center`),
                ),
                alt: o.title,
                product: o,
                reference: l,
                imageAnalytics: c,
                hasFallbackImage: a !== `hero` && a !== `block` && u + 1 < r.length,
                loadTimeoutMs:
                  a === `card` && (c.surface === `carousel` || c.surface === `inline_carousel`)
                    ? 8e3
                    : void 0,
                draggable: !1,
                onError: () => {
                  (d(a === `hero` || a === `block` ? null : u + 1), m({ width: 0, height: 0 }));
                },
                onLoad: (e) => {
                  (m({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight }),
                    i?.(e.currentTarget));
                },
                src: h,
                style: T,
              },
              h,
            )
          : (0, J.jsx)(De, { alt: o.title, compact: a === `block` }))),
      (t[15] = c),
      (t[16] = u),
      (t[17] = r),
      (t[18] = b),
      (t[19] = p),
      (t[20] = i),
      (t[21] = a),
      (t[22] = o),
      (t[23] = l),
      (t[24] = s),
      (t[25] = g),
      (t[26] = h),
      (t[27] = T),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] === v
    ? (A = t[30])
    : ((A =
        v == null
          ? null
          : (0, J.jsx)(`div`, {
              className: `pointer-events-none absolute start-2 end-12 top-2 group-has-[[data-vto-product-action]]/product-card:top-auto group-has-[[data-vto-product-action]]/product-card:bottom-2`,
              children: (0, J.jsx)(P, {
                className: `max-w-full`,
                variant: v.variant === `performance` ? `warning` : `neutral`,
                children: (0, J.jsx)(`span`, { className: `truncate`, children: v.text }),
              }),
            })),
      (t[29] = v),
      (t[30] = A));
  let j;
  return (
    t[31] !== D || t[32] !== O || t[33] !== k || t[34] !== A
      ? ((j = (0, J.jsxs)(`div`, { className: D, style: O, children: [k, A] })),
        (t[31] = D),
        (t[32] = O),
        (t[33] = k),
        (t[34] = A),
        (t[35] = j))
      : (j = t[35]),
    j
  );
}
function Ie(e, t) {
  if (e?.type === `products` || e?.type === `product_group`)
    return { citationType: e.type, surface: e.inline_carousel === !0 ? `inline_carousel` : `carousel` };
  let n = `inline`;
  return (
    t === `hero` ? (n = `hero`) : e?.render_as === `table` ? (n = `table`) : t === `block` && (n = `block`),
    {
      citationType: e?.type === `product_entity` ? `product_entity` : `product`,
      surface: n,
      isShoppingResearch: n === `block` && void 0,
    }
  );
}
var Le, Re, J;
function ze() {
  return (ze = e(() => {
    ((Le = T()), v(), d(), (Re = k()), F(), E(), be(), de(), K(), xe(), Ce(), q(), (J = D()));
  }))();
}
function Be(e) {
  let t = (0, We.c)(146),
    { className: n, presentation: r, product: i, productIndex: o, reference: l } = e,
    u = r === void 0 ? `card` : r,
    d = c(a),
    f = p(),
    [m, h] = (0, X.useState)(!0),
    [g, _] = (0, X.useState)(),
    v = pe(),
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = new Set()), (t[0] = y)) : (y = t[0]);
  let b = (0, X.useRef)(y),
    S;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = new Set()), (t[1] = S)) : (S = t[1]);
  let C = (0, X.useRef)(S),
    w = (0, X.useRef)(null),
    T = (0, X.useContext)(ne),
    E;
  t[2] !== v?.contentReferences || t[3] !== l
    ? ((E = l == null ? -1 : (v?.contentReferences.indexOf(l) ?? -1)),
      (t[2] = v?.contentReferences),
      (t[3] = l),
      (t[4] = E))
    : (E = t[4]);
  let D = E,
    O = (0, X.useRef)(null),
    k = v?.contentReferenceMessageIds?.[D] ?? v?.messageId,
    A = v != null && v.trackShownImpressions !== !1,
    M = l?.type,
    F = l?.start_idx,
    I = l?.inline_carousel === !0 && Array.isArray(l.products) && l.products.length === 1,
    L = (M === `products` || M === `product_group`) && !I,
    re;
  t[5] !== v || t[6] !== T || t[7] !== i || t[8] !== o || t[9] !== l
    ? ((re = () => ({
        context:
          v == null
            ? null
            : { ...v, shouldBlockExternalEgress: v.shouldBlockExternalEgress || T === `restricted` },
        reference: l,
        product: i,
        productIndex: o,
      })),
      (t[5] = v),
      (t[6] = T),
      (t[7] = i),
      (t[8] = o),
      (t[9] = l),
      (t[10] = re))
    : (re = t[10]);
  let ie = re,
    ae = (0, X.useEffectEvent)(ie),
    oe;
  t[11] !== ae || t[12] !== L || t[13] !== d
    ? ((oe = () => {
        if (L) return ye(d, O.current, ae, b.current);
      }),
      (t[11] = ae),
      (t[12] = L),
      (t[13] = d),
      (t[14] = oe))
    : (oe = t[14]);
  let se;
  (t[15] !== L || t[16] !== F || t[17] !== M || t[18] !== d || t[19] !== k || t[20] !== A
    ? ((se = [d, k, A, M, F, L]),
      (t[15] = L),
      (t[16] = F),
      (t[17] = M),
      (t[18] = d),
      (t[19] = k),
      (t[20] = A),
      (t[21] = se))
    : (se = t[21]),
    (0, X.useEffect)(oe, se));
  let R = u === `hero` && m,
    z = u === `block`,
    le;
  t[22] === i ? (le = t[23]) : ((le = je(i)), (t[22] = i), (t[23] = le));
  let ue = le,
    de;
  t[24] === i ? (de = t[25]) : ((de = He(i)), (t[24] = i), (t[25] = de));
  let B = de,
    me;
  t[26] !== ue || t[27] !== i.description || t[28] !== i.featured_tag
    ? ((me = ue ? Y(i.description) : (Y(i.featured_tag) ?? Y(i.description))),
      (t[26] = ue),
      (t[27] = i.description),
      (t[28] = i.featured_tag),
      (t[29] = me))
    : (me = t[29]);
  let V = me,
    ge;
  t[30] === i.price ? (ge = t[31]) : ((ge = Y(i.price)), (t[30] = i.price), (t[31] = ge));
  let H = ge,
    _e;
  t[32] === i ? (_e = t[33]) : ((_e = Me(i)), (t[32] = i), (t[33] = _e));
  let U = _e,
    W = U === `Canopy` ? null : U,
    be;
  t[34] !== f || t[35] !== i ? ((be = Ue(i, f)), (t[34] = f), (t[35] = i), (t[36] = be)) : (be = t[36]);
  let xe = be,
    G,
    K,
    Se;
  if (
    t[37] !== v ||
    t[38] !== z ||
    t[39] !== R ||
    t[40] !== U ||
    t[41] !== W ||
    t[42] !== u ||
    t[43] !== H ||
    t[44] !== i ||
    t[45] !== V ||
    t[46] !== o ||
    t[47] !== B ||
    t[48] !== l ||
    t[49] !== D ||
    t[50] !== xe ||
    t[51] !== d
  ) {
    K = x(
      `flex w-full min-w-0 shrink-0`,
      z ? `flex-row gap-4 py-2 @md/product-reference:gap-5` : `flex-col`,
      z && (i.description?.trim() ? `items-start` : `items-center`),
      R &&
        `gap-3 @md/product-reference:flex-row @md/product-reference:items-center @md/product-reference:gap-6`,
      !R && !z && `gap-2 pb-2`,
    );
    let e = null;
    if (R) {
      let n;
      (t[55] !== W || t[56] !== H
        ? ((n =
            H != null || W != null
              ? (0, Z.jsxs)(`div`, {
                  className: `flex min-w-0 flex-wrap gap-1 text-base text-default`,
                  children: [
                    H == null ? null : (0, Z.jsx)(`span`, { className: `shrink-0`, children: H }),
                    H != null && W != null ? (0, Z.jsx)(`span`, { "aria-hidden": !0, children: Ke }) : null,
                    W == null ? null : (0, Z.jsx)(`span`, { className: `break-words`, children: W }),
                  ],
                })
              : null),
          (t[55] = W),
          (t[56] = H),
          (t[57] = n))
        : (n = t[57]),
        (e = n));
    } else if (V != null) {
      let n;
      t[58] !== v ||
      t[59] !== i.description ||
      t[60] !== i.id ||
      t[61] !== i.product_event_uuid ||
      t[62] !== V ||
      t[63] !== o ||
      t[64] !== l ||
      t[65] !== D ||
      t[66] !== d
        ? ((n = (e) => {
            let t = v?.contentReferenceMessageIds?.[D] ?? v?.messageId;
            if (
              e == null ||
              v == null ||
              v.trackShownImpressions === !1 ||
              t == null ||
              t.startsWith(`WEB:`) ||
              (l?.type !== `products` && l?.type !== `product_group`) ||
              Y(i.description) !== V
            )
              return;
            let n = JSON.stringify([t, l.start_idx, i.id, V]);
            C.current.has(n) ||
              (C.current.add(n),
              d.get(ce).isChatgptBrowserReplacement &&
                ee(d, j, {
                  eventType: te.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN,
                  legacyStatsigEventName: `chatgpt_shopping_content_reference_shown`,
                  contentReferenceType: `product_carousel_description`,
                  shoppingContext: N.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE,
                  conversationId: d.get(fe, v.conversationId) ?? void 0,
                  messageId: t,
                  contentReferenceStartIndex: typeof l.start_idx == `number` ? s(l.start_idx) : void 0,
                  productIndex: o == null ? void 0 : s(o + 1),
                  productId: i.id ?? void 0,
                  productEventUuid: i.product_event_uuid ?? void 0,
                  descriptionLength: s(V.length),
                }));
          }),
          (t[58] = v),
          (t[59] = i.description),
          (t[60] = i.id),
          (t[61] = i.product_event_uuid),
          (t[62] = V),
          (t[63] = o),
          (t[64] = l),
          (t[65] = D),
          (t[66] = d),
          (t[67] = n))
        : (n = t[67]);
      let r;
      t[68] === H
        ? (r = t[69])
        : ((r =
            H == null
              ? null
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`span`, { className: `shrink-0`, children: H }),
                    (0, Z.jsx)(`span`, { className: `mx-1`, "aria-hidden": !0, children: Ke }),
                  ],
                })),
          (t[68] = H),
          (t[69] = r));
      let a;
      (t[70] !== V || t[71] !== n || t[72] !== r
        ? ((a = (0, Z.jsxs)(`div`, {
            ref: n,
            className: `line-clamp-2 text-sm text-secondary`,
            children: [r, V],
          })),
          (t[70] = V),
          (t[71] = n),
          (t[72] = r),
          (t[73] = a))
        : (a = t[73]),
        (e = a));
    } else if (H != null || W != null) {
      let n;
      t[74] === H
        ? (n = t[75])
        : ((n = H == null ? null : (0, Z.jsx)(`span`, { className: `shrink-0`, children: H })),
          (t[74] = H),
          (t[75] = n));
      let r;
      t[76] !== W || t[77] !== H
        ? ((r = H != null && W != null ? (0, Z.jsx)(`span`, { "aria-hidden": !0, children: Ke }) : null),
          (t[76] = W),
          (t[77] = H),
          (t[78] = r))
        : (r = t[78]);
      let i;
      t[79] === W
        ? (i = t[80])
        : ((i = W == null ? null : (0, Z.jsx)(`span`, { className: `truncate`, children: W })),
          (t[79] = W),
          (t[80] = i));
      let a;
      (t[81] !== n || t[82] !== r || t[83] !== i
        ? ((a = (0, Z.jsxs)(`div`, {
            className: `flex min-w-0 gap-1 text-sm text-secondary`,
            children: [n, r, i],
          })),
          (t[81] = n),
          (t[82] = r),
          (t[83] = i),
          (t[84] = a))
        : (a = t[84]),
        (e = a));
    }
    let n;
    t[85] !== z || t[86] !== R
      ? ((n =
          x(
            R &&
              `aspect-[1.45] w-full @md/product-reference:aspect-square @md/product-reference:size-45 @md/product-reference:shrink-0`,
            z && `size-22.5 shrink-0 border border-default @md/product-reference:size-28.5`,
          ) || void 0),
        (t[85] = z),
        (t[86] = R),
        (t[87] = n))
      : (n = t[87]);
    let r;
    t[88] === u
      ? (r = t[89])
      : ((r = (e) => {
          (_(e.currentSrc || e.src), u === `hero` && h(e.naturalWidth * e.naturalHeight >= 65536));
        }),
        (t[88] = u),
        (t[89] = r));
    let a = R || z ? u : `card`,
      c;
    t[90] !== i || t[91] !== l || t[92] !== n || t[93] !== r || t[94] !== a
      ? ((c = (0, Z.jsx)(Pe, { className: n, onLoad: r, presentation: a, product: i, reference: l })),
        (t[90] = i),
        (t[91] = l),
        (t[92] = n),
        (t[93] = r),
        (t[94] = a),
        (t[95] = c))
      : (c = t[95]);
    let f;
    t[96] !== z || t[97] !== R || t[98] !== U || t[99] !== i || t[100] !== e || t[101] !== B || t[102] !== xe
      ? ((f = z
          ? (0, Z.jsx)(Ve, { product: i, isLink: B != null })
          : (0, Z.jsxs)(`div`, {
              className: x(`flex min-w-0 flex-col gap-1`, !R && `px-1`),
              children: [
                R
                  ? (0, Z.jsx)(`h3`, {
                      className: `m-0 line-clamp-2 text-lg leading-tight font-semibold text-default`,
                      children: i.title,
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `line-clamp-2 text-sm font-medium text-default`,
                      children: i.title,
                    }),
                U === `Canopy`
                  ? (0, Z.jsx)(P, { className: `w-fit`, variant: `neutral`, children: U })
                  : null,
                e,
                xe == null
                  ? null
                  : (0, Z.jsx)(`div`, {
                      className: R ? `text-base text-default` : `text-sm text-secondary`,
                      children: xe,
                    }),
              ],
            })),
        (t[96] = z),
        (t[97] = R),
        (t[98] = U),
        (t[99] = i),
        (t[100] = e),
        (t[101] = B),
        (t[102] = xe),
        (t[103] = f))
      : (f = t[103]);
    let p;
    (t[104] !== c || t[105] !== f
      ? ((p = (0, Z.jsxs)(Z.Fragment, { children: [c, f] })), (t[104] = c), (t[105] = f), (t[106] = p))
      : (p = t[106]),
      (G = p),
      (Se = x(
        `group cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        K,
      )),
      (t[37] = v),
      (t[38] = z),
      (t[39] = R),
      (t[40] = U),
      (t[41] = W),
      (t[42] = u),
      (t[43] = H),
      (t[44] = i),
      (t[45] = V),
      (t[46] = o),
      (t[47] = B),
      (t[48] = l),
      (t[49] = D),
      (t[50] = xe),
      (t[51] = d),
      (t[52] = G),
      (t[53] = K),
      (t[54] = Se));
  } else ((G = t[52]), (K = t[53]), (Se = t[54]));
  let Ce = Se,
    we;
  t[107] !== G ||
  t[108] !== v ||
  t[109] !== T ||
  t[110] !== Ce ||
  t[111] !== K ||
  t[112] !== i ||
  t[113] !== o ||
  t[114] !== B ||
  t[115] !== l ||
  t[116] !== D ||
  t[117] !== d
    ? ((we =
        B == null
          ? (0, Z.jsx)(`div`, { className: K, "data-testid": `chatgpt-product-card`, children: G })
          : (0, Z.jsx)(he, {
              className: Ce,
              "data-testid": `chatgpt-product-card`,
              href: B,
              initiator: `markdown_link_click`,
              onClick: (e) => {
                if (v == null) return;
                let t = v.contentReferenceMessageIds?.[D] ?? v.messageId,
                  n = {
                    ...v,
                    messageId: t,
                    productReference: l,
                    shouldBlockExternalEgress: v.shouldBlockExternalEgress || T === `restricted`,
                  },
                  r = JSON.stringify([t, l?.start_idx, i.id]);
                (ve(d, i, n, o, l?.type !== `product` || l.render_as === `block` || w.current !== r, {
                  target: e.target,
                  url: B,
                }),
                  (w.current = r));
              },
              children: G,
            })),
      (t[107] = G),
      (t[108] = v),
      (t[109] = T),
      (t[110] = Ce),
      (t[111] = K),
      (t[112] = i),
      (t[113] = o),
      (t[114] = B),
      (t[115] = l),
      (t[116] = D),
      (t[117] = d),
      (t[118] = we))
    : (we = t[118]);
  let Te = we,
    De;
  t[119] !== ie || t[120] !== L || t[121] !== d
    ? ((De = L ? O : (e) => ye(d, e, ie, b.current)),
      (t[119] = ie),
      (t[120] = L),
      (t[121] = d),
      (t[122] = De))
    : (De = t[122]);
  let Oe = n ?? (R || z ? `w-full` : `w-[10.5rem]`),
    ke;
  t[123] === Oe
    ? (ke = t[124])
    : ((ke = x(`group/product-card relative min-w-0 shrink-0 snap-start`, Oe)), (t[123] = Oe), (t[124] = ke));
  let q;
  t[125] !== G || t[126] !== Te || t[127] !== Ce || t[128] !== i || t[129] !== o || t[130] !== l
    ? ((q = (0, Z.jsx)(Ee, {
        className: Ce,
        "data-testid": `chatgpt-product-card`,
        fallback: Te,
        product: i,
        productIndex: o,
        reference: l,
        children: G,
      })),
      (t[125] = G),
      (t[126] = Te),
      (t[127] = Ce),
      (t[128] = i),
      (t[129] = o),
      (t[130] = l),
      (t[131] = q))
    : (q = t[131]);
  let Fe;
  t[132] !== v ||
  t[133] !== g ||
  t[134] !== T ||
  t[135] !== z ||
  t[136] !== R ||
  t[137] !== i ||
  t[138] !== l ||
  t[139] !== D
    ? ((Fe =
        !z || Ne(i).length > 0
          ? (0, Z.jsxs)(`div`, {
              className: x(
                `pointer-events-none absolute start-0`,
                z
                  ? [
                      `size-22.5 @md/product-reference:size-28.5`,
                      i.description?.trim() ? `top-2` : `top-1/2 -translate-y-1/2`,
                    ]
                  : [`top-0 w-full`, R && `@md/product-reference:w-45`],
              ),
              children: [
                v != null && g != null
                  ? (0, Z.jsx)(`div`, {
                      className: `pointer-events-auto`,
                      children: (0, Z.jsx)(Ge, {
                        product: i,
                        context: {
                          ...v,
                          messageId: v.contentReferenceMessageIds?.[D] ?? v.messageId,
                          productReference: l,
                          shouldBlockExternalEgress: v.shouldBlockExternalEgress || T === `restricted`,
                        },
                        imageUrl: g,
                        compact: z,
                        surface: `product_card`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(Ae, {
                  className: `absolute end-2 top-2 z-10`,
                  product: i,
                  reference: l,
                  surface: `product_card`,
                }),
              ],
            })
          : null),
      (t[132] = v),
      (t[133] = g),
      (t[134] = T),
      (t[135] = z),
      (t[136] = R),
      (t[137] = i),
      (t[138] = l),
      (t[139] = D),
      (t[140] = Fe))
    : (Fe = t[140]);
  let Ie;
  return (
    t[141] !== De || t[142] !== ke || t[143] !== q || t[144] !== Fe
      ? ((Ie = (0, Z.jsxs)(`div`, { ref: De, className: ke, children: [q, Fe] })),
        (t[141] = De),
        (t[142] = ke),
        (t[143] = q),
        (t[144] = Fe),
        (t[145] = Ie))
      : (Ie = t[145]),
    Ie
  );
}
function Ve(e) {
  let t = (0, We.c)(31),
    { product: n, isLink: r } = e,
    i = p(),
    a;
  t[0] === n.description ? (a = t[1]) : ((a = Y(n.description)), (t[0] = n.description), (t[1] = a));
  let s = a,
    c;
  t[2] === n.price ? (c = t[3]) : ((c = Y(n.price)), (t[2] = n.price), (t[3] = c));
  let l = c,
    u;
  t[4] === n ? (u = t[5]) : ((u = Me(n)), (t[4] = n), (t[5] = u));
  let d = u,
    f = d === `Canopy` ? null : d,
    m = s != null && l != null ? `yes` : `no`,
    h = l ?? ``,
    g = n.rating != null && n.num_reviews != null && n.num_reviews > 20 ? `yes` : `no`,
    _;
  t[6] !== i || t[7] !== n.rating
    ? ((_ =
        n.rating == null
          ? ``
          : i.formatNumber(n.rating, { maximumFractionDigits: 1, minimumFractionDigits: 1 })),
      (t[6] = i),
      (t[7] = n.rating),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === r
    ? (v = t[10])
    : ((v = (e) =>
        (0, Z.jsx)(`span`, {
          className: x(`font-semibold`, r && `underline decoration-dotted underline-offset-4`),
          children: e,
        })),
      (t[9] = r),
      (t[10] = v));
  let y;
  t[11] !== n.title || t[12] !== m || t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== v
    ? ((y = (0, Z.jsx)(`div`, {
        className: `text-base text-default`,
        children: (0, Z.jsx)(o, {
          id: `chatgpt.product.block.title`,
          defaultMessage: `<title>{productName}</title>{showPrice, select, yes { · {price}} other {}}{showRating, select, yes { · {rating}} other {}}`,
          description: `Title line of a compact shopping recommendation in a ChatGPT answer. productName is the product's name, styled by the title tag. showPrice is yes when the product has both a description and a price; price is the merchant-formatted price including currency. showRating is yes when a rating and more than 20 reviews are available; rating is a formatted numeric score. Optional values are omitted when their selectors are not yes. Keep this a compact metadata line, preserving the title tag and separators between present values; the line may wrap.`,
          values: { productName: n.title, showPrice: m, price: h, showRating: g, rating: _, title: v },
        }),
      })),
      (t[11] = n.title),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== s || t[19] !== f || t[20] !== l
    ? ((b =
        s == null && (l != null || f != null)
          ? (0, Z.jsx)(`div`, {
              className: `text-sm text-secondary`,
              children: (0, Z.jsx)(o, {
                id: `chatgpt.product.block.metadata`,
                defaultMessage: `{price}{showSeparator, select, yes { · } other {}}{merchant}`,
                description: `Secondary metadata line beneath a compact shopping recommendation in a ChatGPT answer, shown when the product has no description. price is the seller-provided price already formatted with currency; merchant is the seller's display name. Either value may be empty, but not both. showSeparator is yes only when both values are present; omit the separator otherwise. The line can wrap. Reorder the values and adjust the separator and spacing as appropriate for the locale, preserving the supplied price and merchant values.`,
                values: {
                  price: l ?? ``,
                  merchant: f ?? ``,
                  showSeparator: l != null && f != null ? `yes` : `no`,
                },
              }),
            })
          : null),
      (t[18] = s),
      (t[19] = f),
      (t[20] = l),
      (t[21] = b))
    : (b = t[21]);
  let S;
  t[22] === d
    ? (S = t[23])
    : ((S = d === `Canopy` ? (0, Z.jsx)(P, { className: `w-fit`, variant: `neutral`, children: d }) : null),
      (t[22] = d),
      (t[23] = S));
  let C;
  t[24] === s
    ? (C = t[25])
    : ((C = s == null ? null : (0, Z.jsx)(`div`, { className: `text-base text-default`, children: s })),
      (t[24] = s),
      (t[25] = C));
  let w;
  return (
    t[26] !== b || t[27] !== S || t[28] !== C || t[29] !== y
      ? ((w = (0, Z.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-1 break-words whitespace-normal`,
          children: [y, b, S, C],
        })),
        (t[26] = b),
        (t[27] = S),
        (t[28] = C),
        (t[29] = y),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
function He(e) {
  let t = e.offers?.find((e) => e.available === !0 && Y(e.url) != null),
    n = e.offers?.find((e) => Y(e.url) != null),
    r = Y(t?.url) ?? Y(n?.url) ?? Y(e.url);
  return r == null ? null : (h(r) ?? null);
}
function Ue(e, t) {
  if (e.rating == null) return null;
  let n = t.formatNumber(e.rating, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  return e.num_reviews == null || e.num_reviews < 100
    ? n
    : `${n} (${t.formatNumber(e.num_reviews, { compactDisplay: `short`, maximumFractionDigits: 1, notation: `compact` })})`;
}
function Y(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
var We, X, Z, Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((We = T()),
      oe(),
      I(),
      i(),
      v(),
      d(),
      (X = k()),
      C(),
      F(),
      A(),
      _(),
      ie(),
      L(),
      E(),
      V(),
      W(),
      G(),
      me(),
      de(),
      ze(),
      q(),
      ke(),
      (Z = D()),
      (Ge = n(R)),
      (Ke = `·`));
  }))();
}
function Je(e) {
  let t = (0, Ye.c)(11),
    { products: n, reference: i } = e,
    a = c(le),
    s = pe(),
    l = B(`2128165686`);
  if (
    !(l.get(`browse_enabled`, !1) && l.get(`product_carousel_see_more_enabled`, !1)) ||
    s == null ||
    s.shouldBlockExternalEgress ||
    n.length < 3 ||
    (i.type !== `product_group` && i.can_browse !== !0)
  )
    return null;
  let u;
  t[0] !== s || t[1] !== i || t[2] !== a
    ? ((u = () => void Oe(a, s, i)), (t[0] = s), (t[1] = i), (t[2] = a), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== n || t[5] !== i
    ? ((d = (0, Xe.jsx)(`span`, {
        className: `grid aspect-[13/16] w-full grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl`,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) =>
          (0, Xe.jsx)(
            Pe,
            { className: `h-full w-full`, product: n[t % n.length], presentation: `collage`, reference: i },
            t,
          ),
        ),
      })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Xe.jsxs)(`span`, {
        className: `flex items-center gap-1 px-1 text-sm font-semibold text-default select-none`,
        children: [
          (0, Xe.jsx)(o, {
            id: `shopping.browseMore`,
            defaultMessage: `Browse more`,
            description: `Button at the end of a product carousel that opens more shopping results`,
          }),
          (0, Xe.jsx)(r, {}),
        ],
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== u || t[9] !== d
      ? ((p = (0, Xe.jsxs)(`button`, {
          className: `group flex min-w-0 shrink-0 basis-[calc((100%-1rem)/2)] cursor-interaction snap-start flex-col gap-2 rounded-xl pb-2 text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring @xl/product-carousel:basis-[calc((100%-2rem)/3)]`,
          type: `button`,
          onClick: u,
          children: [d, f],
        })),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var Ye, Xe;
function Ze() {
  return (Ze = e(() => {
    ((Ye = T()), d(), C(), f(), M(), se(), de(), ze(), Se(), (Xe = D()));
  }))();
}
function Qe(e) {
  let n = (0, tt.c)(40),
    { reference: i } = e,
    a;
  n[0] === i ? (a = n[1]) : ((a = re(i)), (n[0] = i), (n[1] = a));
  let s = a,
    c = p(),
    l = g(),
    d = (0, Q.useRef)(null),
    f = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    [h, _] = (0, Q.useState)(`ltr`),
    [v, y] = (0, Q.useState)(!1),
    [b, x] = (0, Q.useState)(!1),
    C;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        (m.current?.stop(), (m.current = null), d.current?.style.removeProperty(`scroll-snap-type`));
      }),
      (n[2] = C))
    : (C = n[2]);
  let w = C,
    T;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = et(e);
        _(t);
        let { maximum: n, minimum: r } = _e(e, t);
        t === `rtl`
          ? (y(e.scrollLeft < n - 1), x(e.scrollLeft > r + 1))
          : (y(e.scrollLeft > r + 1), x(e.scrollLeft < n - 1));
      }),
      (n[3] = T))
    : (T = n[3]);
  let E = O(T),
    D;
  n[4] !== s.length || n[5] !== E
    ? ((D = (e) => {
        if (
          (f.current?.disconnect(),
          w(),
          (d.current = e),
          e == null || s.length === 0 || (E(e), typeof ResizeObserver > `u`))
        )
          return;
        let t = new ResizeObserver(() => E(e));
        (t.observe(e),
          e.firstElementChild != null && t.observe(e.firstElementChild),
          e.lastElementChild != null && t.observe(e.lastElementChild),
          (f.current = t));
      }),
      (n[4] = s.length),
      (n[5] = E),
      (n[6] = D))
    : (D = n[6]);
  let k = D,
    A;
  n[7] !== l || n[8] !== E
    ? ((A = (e) => {
        let t = d.current;
        if (t == null) return;
        w();
        let n = et(t),
          r = ge(t, e, n);
        if (l) {
          (t.scrollTo({ left: r }), E(t));
          return;
        }
        ((t.style.scrollSnapType = `none`),
          (m.current = S(t.scrollLeft, r, {
            duration: 0.2,
            ease: [0.165, 0.84, 0.44, 1],
            onUpdate: (e) => t.scrollTo({ left: e }),
            onComplete: () => {
              (t.style.removeProperty(`scroll-snap-type`), d.current === t && E(t));
            },
          })));
      }),
      (n[7] = l),
      (n[8] = E),
      (n[9] = A))
    : (A = n[9]);
  let j = A;
  if (s.length === 0) return null;
  let M;
  n[10] === s
    ? (M = n[11])
    : ((M = (e) => {
        if (e != null) return ae(e, { text: s.flatMap($e).join(` `), highlight: `block` });
      }),
      (n[10] = s),
      (n[11] = M));
  let N;
  n[12] === s
    ? (N = n[13])
    : ((N = s.every(je)
        ? (0, $.jsx)(`h3`, {
            className: `mb-3 text-lg font-semibold text-default`,
            children: (0, $.jsx)(o, {
              id: `chatgpt.shopping.provider.carousel_heading`,
              defaultMessage: `Top picks from {merchantName}`,
              description: `Short heading displayed immediately above a shopping product carousel when every displayed product comes from the same special provider. It tells the end user that the recommendations are sourced from that provider. Placeholder {merchantName} is the provider's localized display name, such as Canopy; it is always non-empty and should remain concise because this is a single-line carousel heading.`,
              values: { merchantName: Me(s[0]) },
            }),
          })
        : null),
      (n[12] = s),
      (n[13] = N));
  let P;
  n[14] === E ? (P = n[15]) : ((P = (e) => E(e.currentTarget)), (n[14] = E), (n[15] = P));
  let F;
  if (n[16] !== s || n[17] !== i) {
    let e;
    (n[19] === i
      ? (e = n[20])
      : ((e = (e, t) =>
          (0, $.jsx)(
            Be,
            {
              className: `h-full basis-[calc((100%-1rem)/2)] @xl/product-carousel:basis-[calc((100%-2rem)/3)]`,
              product: e,
              productIndex: t,
              reference: i,
            },
            e.id ?? `${e.title}-${String(t)}`,
          )),
        (n[19] = i),
        (n[20] = e)),
      (F = s.map(e)),
      (n[16] = s),
      (n[17] = i),
      (n[18] = F));
  } else F = n[18];
  let ee;
  n[21] !== s || n[22] !== i
    ? ((ee = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Je, { products: s, reference: i }) })),
      (n[21] = s),
      (n[22] = i),
      (n[23] = ee))
    : (ee = n[23]);
  let te;
  n[24] !== k || n[25] !== ee || n[26] !== P || n[27] !== F
    ? ((te = (0, $.jsxs)(`div`, {
        ref: k,
        className: `hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto py-2`,
        "data-testid": `chatgpt-product-carousel-track`,
        onScroll: P,
        children: [F, ee],
      })),
      (n[24] = k),
      (n[25] = ee),
      (n[26] = P),
      (n[27] = F),
      (n[28] = te))
    : (te = n[28]);
  let I;
  n[29] !== v || n[30] !== b || n[31] !== h || n[32] !== c || n[33] !== j
    ? ((I =
        v || b
          ? (0, $.jsxs)(`div`, {
              className: `pointer-events-none absolute inset-0 hidden items-center md:flex`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `flex w-8 items-center justify-start`,
                  children: v
                    ? (0, $.jsx)(t, {
                        "aria-label": c.formatMessage({
                          id: `chatgpt.contentReferences.productCarousel.previous`,
                          defaultMessage: `Show previous products`,
                          description: `Accessible label for scrolling a product carousel backward`,
                        }),
                        className: `pointer-events-auto -translate-x-1/2 -translate-y-[135%] shadow-sm`,
                        color: `outlineSurface`,
                        onClick: () => j(-1),
                        radius: `full`,
                        size: `toolbar`,
                        uniform: !0,
                        children: h === `rtl` ? (0, $.jsx)(r, {}) : (0, $.jsx)(u, {}),
                      })
                    : null,
                }),
                (0, $.jsx)(`div`, {
                  className: `ms-auto flex w-8 items-center justify-end`,
                  children: b
                    ? (0, $.jsx)(t, {
                        "aria-label": c.formatMessage({
                          id: `chatgpt.contentReferences.productCarousel.next`,
                          defaultMessage: `Show more products`,
                          description: `Accessible label for scrolling a product carousel forward`,
                        }),
                        className: `pointer-events-auto translate-x-1/2 -translate-y-[135%] shadow-sm`,
                        color: `outlineSurface`,
                        onClick: () => j(1),
                        radius: `full`,
                        size: `toolbar`,
                        uniform: !0,
                        children: h === `rtl` ? (0, $.jsx)(u, {}) : (0, $.jsx)(r, {}),
                      })
                    : null,
                }),
              ],
            })
          : null),
      (n[29] = v),
      (n[30] = b),
      (n[31] = h),
      (n[32] = c),
      (n[33] = j),
      (n[34] = I))
    : (I = n[34]);
  let L;
  return (
    n[35] !== te || n[36] !== I || n[37] !== M || n[38] !== N
      ? ((L = (0, $.jsxs)(`div`, {
          ref: M,
          className: `@container/product-carousel relative my-3`,
          "data-testid": `chatgpt-product-carousel`,
          children: [N, te, I],
        })),
        (n[35] = te),
        (n[36] = I),
        (n[37] = M),
        (n[38] = N),
        (n[39] = L))
      : (L = n[39]),
    L
  );
}
function $e(e) {
  return [
    e.title,
    e.url,
    e.price,
    e.merchants,
    e.description,
    e.featured_tag,
    e.query,
    ...Object.entries(e.specs ?? {}).flat(),
  ];
}
function et(e) {
  return getComputedStyle(e).direction === `rtl` ? `rtl` : `ltr`;
}
var tt, Q, $;
function nt() {
  return (nt = e(() => {
    ((tt = T()), y(), ue(), (Q = k()), C(), z(), w(), H(), f(), l(), b(), qe(), Ze(), ($ = D()));
  }))();
}
export { Pe as a, qe as i, nt as n, ze as o, Be as r, Qe as t };
//# sourceMappingURL=chatgpt-product-carousel-1446766b4310.js.map
