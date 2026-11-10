import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bj as r,
  CTt as i,
  F3 as a,
  FBt as o,
  I3 as s,
  IH as c,
  LNt as l,
  MNt as u,
  NH as d,
  NNt as f,
  PBt as p,
  Qit as m,
  Qst as h,
  Rj as g,
  TY as _,
  Uz as v,
  Wz as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZSt as C,
  gB as w,
  hB as T,
  nat as E,
  okt as D,
  tkt as O,
  wTt as k,
  zj as A,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $l as j,
  B1n as M,
  BFt as N,
  Bl as P,
  C1n as F,
  CMr as ee,
  Djr as I,
  Gl as L,
  Hl as te,
  MOr as ne,
  Ql as re,
  VPn as ie,
  Wl as ae,
  _dt as oe,
  cc as se,
  m1n as ce,
  pdt as R,
  sc as z,
  vu as le,
  xMr as ue,
  xjr as de,
  yMr as fe,
  yu as B,
  zFt as pe,
  zOr as me,
} from "./app-initial-ad16eaadf81f.js";
import { ec as he, tc as V } from "./app-primary-3e00728c2a4c.js";
import { n as ge, r as H, t as _e } from "./card-carousel-scroll-edf238b6bc28.js";
import { l as U, n as ve, s as ye, t as W, u as be } from "./chatgpt-product-analytics-ae26af19ef1e.js";
import {
  a as G,
  c as K,
  i as q,
  l as xe,
  n as Se,
  o as Ce,
  r as we,
  s as Te,
  t as Ee,
  u as De,
} from "./product-image-placeholder-138c9a2a6059.js";
import { n as Oe, t as ke } from "./product-favorite-action-157a8d6ad017.js";
function Ae(e) {
  return (
    e.provider === `p4` || e.providers?.includes(`p4`) === !0 || e.metadata_sources?.includes(`p4`) === !0
  );
}
function je(e) {
  return Ae(e) ? `Canopy` : e.merchants?.trim() || void 0;
}
function Me(e) {
  return [
    ...new Set(
      [e.showcase_metadata?.image?.url, ...(e.image_urls ?? [])]
        .filter((t) => !e.shopping_vto?.generated_images?.some((e) => e.vto_image_url === t))
        .map((e) => (e?.trim() ? A(e) : void 0))
        .filter((e) => e != null),
    ),
  ];
}
function J() {
  return (J = e(() => {
    r();
  }))();
}
function Ne(e) {
  let n = (0, Ie.c)(34),
    { className: r, onLoad: i, presentation: a, product: o, reference: s, imageAnalytics: c } = e,
    l = r === void 0 ? `aspect-[13/16] w-full` : r,
    u = a === void 0 ? `card` : a,
    d = t(h),
    f = se(),
    p = Me(o),
    m;
  n[0] !== c || n[1] !== u || n[2] !== s
    ? ((m = c ?? Fe(s, u)), (n[0] = c), (n[1] = u), (n[2] = s), (n[3] = m))
    : (m = n[3]);
  let g = m,
    _ = p.length === 0,
    v = f?.shouldBlockExternalEgress === !0,
    y;
  n[4] !== g || n[5] !== o || n[6] !== s || n[7] !== d || n[8] !== f
    ? ((y = () => {
        Ce(d, {
          ...g,
          isShoppingResearch:
            s?.type === `product` && g.surface !== `block` ? be(d, f, s) : g.isShoppingResearch,
          product: o,
          productId: o.id ?? ``,
          imageUrl: ``,
          reason: `missing_url`,
        });
      }),
      (n[4] = g),
      (n[5] = o),
      (n[6] = s),
      (n[7] = d),
      (n[8] = f),
      (n[9] = y))
    : (y = n[9]);
  let b = (0, Le.useEffectEvent)(y),
    x;
  n[10] !== v || n[11] !== b || n[12] !== _
    ? ((x = () => {
        _ && !v && b();
      }),
      (n[10] = v),
      (n[11] = b),
      (n[12] = _),
      (n[13] = x))
    : (x = n[13]);
  let S;
  if (
    (n[14] !== g.citationType ||
    n[15] !== g.surface ||
    n[16] !== v ||
    n[17] !== _ ||
    n[18] !== o.id ||
    n[19] !== o.product_lookup_key ||
    n[20] !== o.title ||
    n[21] !== o.url
      ? ((S = [_, v, o.id, o.product_lookup_key, o.url, o.title, g.citationType, g.surface]),
        (n[14] = g.citationType),
        (n[15] = g.surface),
        (n[16] = v),
        (n[17] = _),
        (n[18] = o.id),
        (n[19] = o.product_lookup_key),
        (n[20] = o.title),
        (n[21] = o.url),
        (n[22] = S))
      : (S = n[22]),
    (0, Le.useEffect)(x, S),
    u === `block` && p.length === 0)
  )
    return null;
  let C = Pe,
    w = JSON.stringify([o.id, p[0]]),
    T = f?.shouldBlockExternalEgress === !0,
    E;
  return (
    n[23] !== C ||
    n[24] !== g ||
    n[25] !== l ||
    n[26] !== p ||
    n[27] !== i ||
    n[28] !== u ||
    n[29] !== o ||
    n[30] !== s ||
    n[31] !== w ||
    n[32] !== T
      ? ((E = (0, Y.jsx)(
          C,
          {
            className: l,
            imageUrls: p,
            imageAnalytics: g,
            reference: s,
            onLoad: i,
            presentation: u,
            product: o,
            shouldBlockExternalEgress: T,
          },
          w,
        )),
        (n[23] = C),
        (n[24] = g),
        (n[25] = l),
        (n[26] = p),
        (n[27] = i),
        (n[28] = u),
        (n[29] = o),
        (n[30] = s),
        (n[31] = w),
        (n[32] = T),
        (n[33] = E))
      : (E = n[33]),
    E
  );
}
function Pe(e) {
  let t = (0, Ie.c)(36),
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
    [d, f] = (0, Le.useState)(0),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = { width: 0, height: 0 }), (t[0] = p)) : (p = t[0]);
  let [m, h] = (0, Le.useState)(p),
    g = d == null ? void 0 : r[d],
    _ =
      d === 0
        ? o.showcase_metadata?.slots?.[
            a === `hero` || a === `block` ? `product_square` : `product_portrait_card`
          ]
        : void 0,
    v = _ ? o.showcase_metadata?.background : null,
    y = a === `card` ? o.merchant_badges?.[0] : void 0,
    b = _?.placement,
    x = a === `collage` || Math.abs(m.width / m.height - 1) < 0.4 ? `cover` : `contain`,
    S = _ && a !== `hero` ? _.fit : x,
    C = Math.min(_?.zoom != null && _.zoom > 0 ? _.zoom : 1, a === `hero` ? 1 : 1 / 0),
    w = `${Math.min(1, Math.max(0, _?.position?.x ?? 0.5)) * 100}% ${Math.min(1, Math.max(0, _?.position?.y ?? 0.5)) * 100}%`,
    T;
  if (
    b?.left_percent != null &&
    b.top_percent != null &&
    b.width_percent != null &&
    b.height_percent != null
  ) {
    let e = `${b.left_percent}%`,
      n = `${b.top_percent}%`,
      r = `${b.width_percent}%`,
      i = `${b.height_percent}%`,
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
  } else if (_) {
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
    ? ((D = u(`relative overflow-clip bg-[#F3F3F3] dark:bg-[#F3F3F3]`, E, n)),
      (t[10] = n),
      (t[11] = E),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === v
    ? (O = t[14])
    : ((O = v?.primary
        ? {
            backgroundColor: v.primary,
            backgroundImage:
              v.type === `gradient` && v.secondary
                ? `linear-gradient(180deg, ${v.primary} 0%, ${v.secondary} 100%)`
                : void 0,
          }
        : void 0),
      (t[13] = v),
      (t[14] = O));
  let k;
  t[15] !== c ||
  t[16] !== d ||
  t[17] !== r ||
  t[18] !== x ||
  t[19] !== m ||
  t[20] !== i ||
  t[21] !== a ||
  t[22] !== o ||
  t[23] !== l ||
  t[24] !== s ||
  t[25] !== _ ||
  t[26] !== g ||
  t[27] !== T
    ? ((k =
        !s &&
        (d != null && g
          ? (0, Y.jsx)(
              we,
              {
                className: u(
                  `absolute inset-0 m-0 block h-full w-full select-none`,
                  a === `card` &&
                    `transition-transform duration-200 ease-out group-hover/product-card:scale-[1.02] motion-reduce:transition-none`,
                  _?.image_blend_mode !== `normal` && `mix-blend-darken`,
                  _ == null && (x === `cover` ? `object-cover` : `object-contain`),
                  _ == null && (a === `collage` || m.height > m.width ? `object-top` : `object-center`),
                ),
                alt: o.title,
                product: o,
                reference: l,
                imageAnalytics: c,
                hasFallbackImage: a !== `hero` && a !== `block` && d + 1 < r.length,
                loadTimeoutMs:
                  a === `card` && (c.surface === `carousel` || c.surface === `inline_carousel`)
                    ? 8e3
                    : void 0,
                draggable: !1,
                onError: () => {
                  (f(a === `hero` || a === `block` ? null : d + 1), h({ width: 0, height: 0 }));
                },
                onLoad: (e) => {
                  (h({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight }),
                    i?.(e.currentTarget));
                },
                src: g,
                style: T,
              },
              g,
            )
          : (0, Y.jsx)(Ee, { alt: o.title, compact: a === `block` }))),
      (t[15] = c),
      (t[16] = d),
      (t[17] = r),
      (t[18] = x),
      (t[19] = m),
      (t[20] = i),
      (t[21] = a),
      (t[22] = o),
      (t[23] = l),
      (t[24] = s),
      (t[25] = _),
      (t[26] = g),
      (t[27] = T),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] === y
    ? (A = t[30])
    : ((A =
        y == null
          ? null
          : (0, Y.jsx)(`div`, {
              className: `pointer-events-none absolute start-2 end-12 top-2 group-has-[[data-vto-product-action]]/product-card:top-auto group-has-[[data-vto-product-action]]/product-card:bottom-2`,
              children: (0, Y.jsx)(pe, {
                className: `max-w-full`,
                variant: y.variant === `performance` ? `warning` : `neutral`,
                children: (0, Y.jsx)(`span`, { className: `truncate`, children: y.text }),
              }),
            })),
      (t[29] = y),
      (t[30] = A));
  let j;
  return (
    t[31] !== D || t[32] !== O || t[33] !== k || t[34] !== A
      ? ((j = (0, Y.jsxs)(`div`, { className: D, style: O, children: [k, A] })),
        (t[31] = D),
        (t[32] = O),
        (t[33] = k),
        (t[34] = A),
        (t[35] = j))
      : (j = t[35]),
    j
  );
}
function Fe(e, t) {
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
var Ie, Le, Y;
function Re() {
  return (Re = e(() => {
    ((Ie = p()), f(), C(), (Le = o()), N(), n(), U(), z(), q(), G(), Se(), J(), (Y = l()));
  }))();
}
function ze(e) {
  let n = (0, Ue.c)(146),
    { className: r, presentation: i, product: a, productIndex: o, reference: s } = e,
    c = i === void 0 ? `card` : i,
    l = t(h),
    d = D(),
    [f, p] = (0, Z.useState)(!0),
    [g, _] = (0, Z.useState)(),
    v = se(),
    y;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = new Set()), (n[0] = y)) : (y = n[0]);
  let b = (0, Z.useRef)(y),
    x;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = new Set()), (n[1] = x)) : (x = n[1]);
  let S = (0, Z.useRef)(x),
    C = (0, Z.useRef)(null),
    w = (0, Z.useContext)(re),
    T;
  n[2] !== v?.contentReferences || n[3] !== s
    ? ((T = s == null ? -1 : (v?.contentReferences.indexOf(s) ?? -1)),
      (n[2] = v?.contentReferences),
      (n[3] = s),
      (n[4] = T))
    : (T = n[4]);
  let E = T,
    O = (0, Z.useRef)(null),
    k = v?.contentReferenceMessageIds?.[E] ?? v?.messageId,
    A = v != null && v.trackShownImpressions !== !1,
    j = s?.type,
    N = s?.start_idx,
    F = s?.inline_carousel === !0 && Array.isArray(s.products) && s.products.length === 1,
    I = (j === `products` || j === `product_group`) && !F,
    L;
  n[5] !== v || n[6] !== w || n[7] !== a || n[8] !== o || n[9] !== s
    ? ((L = () => ({
        context:
          v == null
            ? null
            : { ...v, shouldBlockExternalEgress: v.shouldBlockExternalEgress || w === `restricted` },
        reference: s,
        product: a,
        productIndex: o,
      })),
      (n[5] = v),
      (n[6] = w),
      (n[7] = a),
      (n[8] = o),
      (n[9] = s),
      (n[10] = L))
    : (L = n[10]);
  let ne = L,
    ie = (0, Z.useEffectEvent)(ne),
    oe;
  n[11] !== ie || n[12] !== I || n[13] !== l
    ? ((oe = () => {
        if (I) return ye(l, O.current, ie, b.current);
      }),
      (n[11] = ie),
      (n[12] = I),
      (n[13] = l),
      (n[14] = oe))
    : (oe = n[14]);
  let ce;
  (n[15] !== I || n[16] !== N || n[17] !== j || n[18] !== l || n[19] !== k || n[20] !== A
    ? ((ce = [l, k, A, j, N, I]),
      (n[15] = I),
      (n[16] = N),
      (n[17] = j),
      (n[18] = l),
      (n[19] = k),
      (n[20] = A),
      (n[21] = ce))
    : (ce = n[21]),
    (0, Z.useEffect)(oe, ce));
  let R = c === `hero` && f,
    z = c === `block`,
    le;
  n[22] === a ? (le = n[23]) : ((le = Ae(a)), (n[22] = a), (n[23] = le));
  let de = le,
    fe;
  n[24] === a ? (fe = n[25]) : ((fe = Ve(a)), (n[24] = a), (n[25] = fe));
  let B = fe,
    me;
  n[26] !== de || n[27] !== a.description || n[28] !== a.featured_tag
    ? ((me = de ? X(a.description) : (X(a.featured_tag) ?? X(a.description))),
      (n[26] = de),
      (n[27] = a.description),
      (n[28] = a.featured_tag),
      (n[29] = me))
    : (me = n[29]);
  let V = me,
    ge;
  n[30] === a.price ? (ge = n[31]) : ((ge = X(a.price)), (n[30] = a.price), (n[31] = ge));
  let H = ge,
    _e;
  n[32] === a ? (_e = n[33]) : ((_e = je(a)), (n[32] = a), (n[33] = _e));
  let U = _e,
    W = U === `Canopy` ? null : U,
    be;
  n[34] !== d || n[35] !== a ? ((be = He(a, d)), (n[34] = d), (n[35] = a), (n[36] = be)) : (be = n[36]);
  let G = be,
    K,
    q,
    xe;
  if (
    n[37] !== v ||
    n[38] !== z ||
    n[39] !== R ||
    n[40] !== U ||
    n[41] !== W ||
    n[42] !== c ||
    n[43] !== H ||
    n[44] !== a ||
    n[45] !== V ||
    n[46] !== o ||
    n[47] !== B ||
    n[48] !== s ||
    n[49] !== E ||
    n[50] !== G ||
    n[51] !== l
  ) {
    q = u(
      `flex w-full min-w-0 shrink-0`,
      z ? `flex-row gap-4 py-2 @md/product-reference:gap-5` : `flex-col`,
      z && (a.description?.trim() ? `items-start` : `items-center`),
      R &&
        `gap-3 @md/product-reference:flex-row @md/product-reference:items-center @md/product-reference:gap-6`,
      !R && !z && `gap-2 pb-2`,
    );
    let e = null;
    if (R) {
      let t;
      (n[55] !== W || n[56] !== H
        ? ((t =
            H != null || W != null
              ? (0, Q.jsxs)(`div`, {
                  className: `flex min-w-0 flex-wrap gap-1 text-base text-default`,
                  children: [
                    H == null ? null : (0, Q.jsx)(`span`, { className: `shrink-0`, children: H }),
                    H != null && W != null ? (0, Q.jsx)(`span`, { "aria-hidden": !0, children: Ge }) : null,
                    W == null ? null : (0, Q.jsx)(`span`, { className: `break-words`, children: W }),
                  ],
                })
              : null),
          (n[55] = W),
          (n[56] = H),
          (n[57] = t))
        : (t = n[57]),
        (e = t));
    } else if (V != null) {
      let t;
      n[58] !== v ||
      n[59] !== a.description ||
      n[60] !== a.id ||
      n[61] !== a.product_event_uuid ||
      n[62] !== V ||
      n[63] !== o ||
      n[64] !== s ||
      n[65] !== E ||
      n[66] !== l
        ? ((t = (e) => {
            let t = v?.contentReferenceMessageIds?.[E] ?? v?.messageId;
            if (
              e == null ||
              v == null ||
              v.trackShownImpressions === !1 ||
              t == null ||
              t.startsWith(`WEB:`) ||
              (s?.type !== `products` && s?.type !== `product_group`) ||
              X(a.description) !== V
            )
              return;
            let n = JSON.stringify([t, s.start_idx, a.id, V]);
            S.current.has(n) ||
              (S.current.add(n),
              l.get(ee).isChatgptBrowserReplacement &&
                ue(l, te, {
                  eventType: P.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SHOPPING_REFERENCE_SHOWN,
                  legacyStatsigEventName: `chatgpt_shopping_content_reference_shown`,
                  contentReferenceType: `product_carousel_description`,
                  shoppingContext: ae.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_RESPONSE,
                  conversationId: l.get(M, v.conversationId) ?? void 0,
                  messageId: t,
                  contentReferenceStartIndex: typeof s.start_idx == `number` ? m(s.start_idx) : void 0,
                  productIndex: o == null ? void 0 : m(o + 1),
                  productId: a.id ?? void 0,
                  productEventUuid: a.product_event_uuid ?? void 0,
                  descriptionLength: m(V.length),
                }));
          }),
          (n[58] = v),
          (n[59] = a.description),
          (n[60] = a.id),
          (n[61] = a.product_event_uuid),
          (n[62] = V),
          (n[63] = o),
          (n[64] = s),
          (n[65] = E),
          (n[66] = l),
          (n[67] = t))
        : (t = n[67]);
      let r;
      n[68] === H
        ? (r = n[69])
        : ((r =
            H == null
              ? null
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(`span`, { className: `shrink-0`, children: H }),
                    (0, Q.jsx)(`span`, { className: `mx-1`, "aria-hidden": !0, children: Ge }),
                  ],
                })),
          (n[68] = H),
          (n[69] = r));
      let i;
      (n[70] !== V || n[71] !== t || n[72] !== r
        ? ((i = (0, Q.jsxs)(`div`, {
            ref: t,
            className: `line-clamp-2 text-sm text-secondary`,
            children: [r, V],
          })),
          (n[70] = V),
          (n[71] = t),
          (n[72] = r),
          (n[73] = i))
        : (i = n[73]),
        (e = i));
    } else if (H != null || W != null) {
      let t;
      n[74] === H
        ? (t = n[75])
        : ((t = H == null ? null : (0, Q.jsx)(`span`, { className: `shrink-0`, children: H })),
          (n[74] = H),
          (n[75] = t));
      let r;
      n[76] !== W || n[77] !== H
        ? ((r = H != null && W != null ? (0, Q.jsx)(`span`, { "aria-hidden": !0, children: Ge }) : null),
          (n[76] = W),
          (n[77] = H),
          (n[78] = r))
        : (r = n[78]);
      let i;
      n[79] === W
        ? (i = n[80])
        : ((i = W == null ? null : (0, Q.jsx)(`span`, { className: `truncate`, children: W })),
          (n[79] = W),
          (n[80] = i));
      let a;
      (n[81] !== t || n[82] !== r || n[83] !== i
        ? ((a = (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 gap-1 text-sm text-secondary`,
            children: [t, r, i],
          })),
          (n[81] = t),
          (n[82] = r),
          (n[83] = i),
          (n[84] = a))
        : (a = n[84]),
        (e = a));
    }
    let t;
    n[85] !== z || n[86] !== R
      ? ((t =
          u(
            R &&
              `aspect-[1.45] w-full @md/product-reference:aspect-square @md/product-reference:size-45 @md/product-reference:shrink-0`,
            z && `size-22.5 shrink-0 border border-default @md/product-reference:size-28.5`,
          ) || void 0),
        (n[85] = z),
        (n[86] = R),
        (n[87] = t))
      : (t = n[87]);
    let r;
    n[88] === c
      ? (r = n[89])
      : ((r = (e) => {
          (_(e.currentSrc || e.src), c === `hero` && p(e.naturalWidth * e.naturalHeight >= 65536));
        }),
        (n[88] = c),
        (n[89] = r));
    let i = R || z ? c : `card`,
      d;
    n[90] !== a || n[91] !== s || n[92] !== t || n[93] !== r || n[94] !== i
      ? ((d = (0, Q.jsx)(Ne, { className: t, onLoad: r, presentation: i, product: a, reference: s })),
        (n[90] = a),
        (n[91] = s),
        (n[92] = t),
        (n[93] = r),
        (n[94] = i),
        (n[95] = d))
      : (d = n[95]);
    let f;
    n[96] !== z || n[97] !== R || n[98] !== U || n[99] !== a || n[100] !== e || n[101] !== B || n[102] !== G
      ? ((f = z
          ? (0, Q.jsx)(Be, { product: a, isLink: B != null })
          : (0, Q.jsxs)(`div`, {
              className: u(`flex min-w-0 flex-col gap-1`, !R && `px-1`),
              children: [
                R
                  ? (0, Q.jsx)(`h3`, {
                      className: `m-0 line-clamp-2 text-lg leading-tight font-semibold text-default`,
                      children: a.title,
                    })
                  : (0, Q.jsx)(`div`, {
                      className: `line-clamp-2 text-sm font-medium text-default`,
                      children: a.title,
                    }),
                U === `Canopy`
                  ? (0, Q.jsx)(pe, { className: `w-fit`, variant: `neutral`, children: U })
                  : null,
                e,
                G == null
                  ? null
                  : (0, Q.jsx)(`div`, {
                      className: R ? `text-base text-default` : `text-sm text-secondary`,
                      children: G,
                    }),
              ],
            })),
        (n[96] = z),
        (n[97] = R),
        (n[98] = U),
        (n[99] = a),
        (n[100] = e),
        (n[101] = B),
        (n[102] = G),
        (n[103] = f))
      : (f = n[103]);
    let h;
    (n[104] !== d || n[105] !== f
      ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [d, f] })), (n[104] = d), (n[105] = f), (n[106] = h))
      : (h = n[106]),
      (K = h),
      (xe = u(
        `group cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        q,
      )),
      (n[37] = v),
      (n[38] = z),
      (n[39] = R),
      (n[40] = U),
      (n[41] = W),
      (n[42] = c),
      (n[43] = H),
      (n[44] = a),
      (n[45] = V),
      (n[46] = o),
      (n[47] = B),
      (n[48] = s),
      (n[49] = E),
      (n[50] = G),
      (n[51] = l),
      (n[52] = K),
      (n[53] = q),
      (n[54] = xe));
  } else ((K = n[52]), (q = n[53]), (xe = n[54]));
  let Se = xe,
    Ce;
  n[107] !== K ||
  n[108] !== v ||
  n[109] !== w ||
  n[110] !== Se ||
  n[111] !== q ||
  n[112] !== a ||
  n[113] !== o ||
  n[114] !== B ||
  n[115] !== s ||
  n[116] !== E ||
  n[117] !== l
    ? ((Ce =
        B == null
          ? (0, Q.jsx)(`div`, { className: q, "data-testid": `chatgpt-product-card`, children: K })
          : (0, Q.jsx)(he, {
              className: Se,
              "data-testid": `chatgpt-product-card`,
              href: B,
              initiator: `markdown_link_click`,
              onClick: (e) => {
                if (v == null) return;
                let t = v.contentReferenceMessageIds?.[E] ?? v.messageId,
                  n = {
                    ...v,
                    messageId: t,
                    productReference: s,
                    shouldBlockExternalEgress: v.shouldBlockExternalEgress || w === `restricted`,
                  },
                  r = JSON.stringify([t, s?.start_idx, a.id]);
                (ve(l, a, n, o, s?.type !== `product` || s.render_as === `block` || C.current !== r, {
                  target: e.target,
                  url: B,
                }),
                  (C.current = r));
              },
              children: K,
            })),
      (n[107] = K),
      (n[108] = v),
      (n[109] = w),
      (n[110] = Se),
      (n[111] = q),
      (n[112] = a),
      (n[113] = o),
      (n[114] = B),
      (n[115] = s),
      (n[116] = E),
      (n[117] = l),
      (n[118] = Ce))
    : (Ce = n[118]);
  let we = Ce,
    Ee;
  n[119] !== ne || n[120] !== I || n[121] !== l
    ? ((Ee = I ? O : (e) => ye(l, e, ne, b.current)),
      (n[119] = ne),
      (n[120] = I),
      (n[121] = l),
      (n[122] = Ee))
    : (Ee = n[122]);
  let De = r ?? (R || z ? `w-full` : `w-[10.5rem]`),
    Oe;
  n[123] === De
    ? (Oe = n[124])
    : ((Oe = u(`group/product-card relative min-w-0 shrink-0 snap-start`, De)), (n[123] = De), (n[124] = Oe));
  let J;
  n[125] !== K || n[126] !== we || n[127] !== Se || n[128] !== a || n[129] !== o || n[130] !== s
    ? ((J = (0, Q.jsx)(Te, {
        className: Se,
        "data-testid": `chatgpt-product-card`,
        fallback: we,
        product: a,
        productIndex: o,
        reference: s,
        children: K,
      })),
      (n[125] = K),
      (n[126] = we),
      (n[127] = Se),
      (n[128] = a),
      (n[129] = o),
      (n[130] = s),
      (n[131] = J))
    : (J = n[131]);
  let Pe;
  n[132] !== v ||
  n[133] !== g ||
  n[134] !== w ||
  n[135] !== z ||
  n[136] !== R ||
  n[137] !== a ||
  n[138] !== s ||
  n[139] !== E
    ? ((Pe =
        !z || Me(a).length > 0
          ? (0, Q.jsxs)(`div`, {
              className: u(
                `pointer-events-none absolute start-0`,
                z
                  ? [
                      `size-22.5 @md/product-reference:size-28.5`,
                      a.description?.trim() ? `top-2` : `top-1/2 -translate-y-1/2`,
                    ]
                  : [`top-0 w-full`, R && `@md/product-reference:w-45`],
              ),
              children: [
                v != null && g != null
                  ? (0, Q.jsx)(`div`, {
                      className: `pointer-events-auto`,
                      children: (0, Q.jsx)(We, {
                        product: a,
                        context: {
                          ...v,
                          messageId: v.contentReferenceMessageIds?.[E] ?? v.messageId,
                          productReference: s,
                          shouldBlockExternalEgress: v.shouldBlockExternalEgress || w === `restricted`,
                        },
                        imageUrl: g,
                        compact: z,
                        surface: `product_card`,
                      }),
                    })
                  : null,
                (0, Q.jsx)(ke, {
                  className: `absolute end-2 top-2 z-10`,
                  product: a,
                  reference: s,
                  surface: `product_card`,
                }),
              ],
            })
          : null),
      (n[132] = v),
      (n[133] = g),
      (n[134] = w),
      (n[135] = z),
      (n[136] = R),
      (n[137] = a),
      (n[138] = s),
      (n[139] = E),
      (n[140] = Pe))
    : (Pe = n[140]);
  let Fe;
  return (
    n[141] !== Ee || n[142] !== Oe || n[143] !== J || n[144] !== Pe
      ? ((Fe = (0, Q.jsxs)(`div`, { ref: Ee, className: Oe, children: [J, Pe] })),
        (n[141] = Ee),
        (n[142] = Oe),
        (n[143] = J),
        (n[144] = Pe),
        (n[145] = Fe))
      : (Fe = n[145]),
    Fe
  );
}
function Be(e) {
  let t = (0, Ue.c)(31),
    { product: n, isLink: r } = e,
    i = D(),
    a;
  t[0] === n.description ? (a = t[1]) : ((a = X(n.description)), (t[0] = n.description), (t[1] = a));
  let o = a,
    s;
  t[2] === n.price ? (s = t[3]) : ((s = X(n.price)), (t[2] = n.price), (t[3] = s));
  let c = s,
    l;
  t[4] === n ? (l = t[5]) : ((l = je(n)), (t[4] = n), (t[5] = l));
  let d = l,
    f = d === `Canopy` ? null : d,
    p = o != null && c != null ? `yes` : `no`,
    m = c ?? ``,
    h = n.rating != null && n.num_reviews != null && n.num_reviews > 20 ? `yes` : `no`,
    g;
  t[6] !== i || t[7] !== n.rating
    ? ((g =
        n.rating == null
          ? ``
          : i.formatNumber(n.rating, { maximumFractionDigits: 1, minimumFractionDigits: 1 })),
      (t[6] = i),
      (t[7] = n.rating),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] === r
    ? (_ = t[10])
    : ((_ = (e) =>
        (0, Q.jsx)(`span`, {
          className: u(`font-semibold`, r && `underline decoration-dotted underline-offset-4`),
          children: e,
        })),
      (t[9] = r),
      (t[10] = _));
  let v;
  t[11] !== n.title || t[12] !== p || t[13] !== m || t[14] !== h || t[15] !== g || t[16] !== _
    ? ((v = (0, Q.jsx)(`div`, {
        className: `text-base text-default`,
        children: (0, Q.jsx)(O, {
          id: `chatgpt.product.block.title`,
          defaultMessage: `<title>{productName}</title>{showPrice, select, yes { · {price}} other {}}{showRating, select, yes { · {rating}} other {}}`,
          description: `Title line of a compact shopping recommendation in a ChatGPT answer. productName is the product's name, styled by the title tag. showPrice is yes when the product has both a description and a price; price is the merchant-formatted price including currency. showRating is yes when a rating and more than 20 reviews are available; rating is a formatted numeric score. Optional values are omitted when their selectors are not yes. Keep this a compact metadata line, preserving the title tag and separators between present values; the line may wrap.`,
          values: { productName: n.title, showPrice: p, price: m, showRating: h, rating: g, title: _ },
        }),
      })),
      (t[11] = n.title),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== o || t[19] !== f || t[20] !== c
    ? ((y =
        o == null && (c != null || f != null)
          ? (0, Q.jsx)(`div`, {
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(O, {
                id: `chatgpt.product.block.metadata`,
                defaultMessage: `{price}{showSeparator, select, yes { · } other {}}{merchant}`,
                description: `Secondary metadata line beneath a compact shopping recommendation in a ChatGPT answer, shown when the product has no description. price is the seller-provided price already formatted with currency; merchant is the seller's display name. Either value may be empty, but not both. showSeparator is yes only when both values are present; omit the separator otherwise. The line can wrap. Reorder the values and adjust the separator and spacing as appropriate for the locale, preserving the supplied price and merchant values.`,
                values: {
                  price: c ?? ``,
                  merchant: f ?? ``,
                  showSeparator: c != null && f != null ? `yes` : `no`,
                },
              }),
            })
          : null),
      (t[18] = o),
      (t[19] = f),
      (t[20] = c),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] === d
    ? (b = t[23])
    : ((b = d === `Canopy` ? (0, Q.jsx)(pe, { className: `w-fit`, variant: `neutral`, children: d }) : null),
      (t[22] = d),
      (t[23] = b));
  let x;
  t[24] === o
    ? (x = t[25])
    : ((x = o == null ? null : (0, Q.jsx)(`div`, { className: `text-base text-default`, children: o })),
      (t[24] = o),
      (t[25] = x));
  let S;
  return (
    t[26] !== y || t[27] !== b || t[28] !== x || t[29] !== v
      ? ((S = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-1 break-words whitespace-normal`,
          children: [v, y, b, x],
        })),
        (t[26] = y),
        (t[27] = b),
        (t[28] = x),
        (t[29] = v),
        (t[30] = S))
      : (S = t[30]),
    S
  );
}
function Ve(e) {
  let t = e.offers?.find((e) => e.available === !0 && X(e.url) != null),
    n = e.offers?.find((e) => X(e.url) != null),
    r = X(t?.url) ?? X(n?.url) ?? X(e.url);
  return r == null ? null : (g(r) ?? null);
}
function He(e, t) {
  if (e.rating == null) return null;
  let n = t.formatNumber(e.rating, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  return e.num_reviews == null || e.num_reviews < 100
    ? n
    : `${n} (${t.formatNumber(e.num_reviews, { compactDisplay: `short`, maximumFractionDigits: 1, notation: `compact` })})`;
}
function X(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
var Ue, Z, Q, We, Ge;
function Ke() {
  return (Ke = e(() => {
    ((Ue = p()),
      R(),
      L(),
      E(),
      f(),
      C(),
      (Z = o()),
      b(),
      N(),
      a(),
      r(),
      j(),
      fe(),
      n(),
      V(),
      W(),
      K(),
      ie(),
      z(),
      Re(),
      J(),
      Oe(),
      (Q = l()),
      (We = s(oe)),
      (Ge = `·`));
  }))();
}
function qe(e) {
  let n = (0, Je.c)(11),
    { products: r, reference: i } = e,
    a = t(ne),
    o = se(),
    s = I(`2128165686`);
  if (
    !(s.get(`browse_enabled`, !1) && s.get(`product_carousel_see_more_enabled`, !1)) ||
    o == null ||
    o.shouldBlockExternalEgress ||
    r.length < 3 ||
    (i.type !== `product_group` && i.can_browse !== !0)
  )
    return null;
  let l;
  n[0] !== o || n[1] !== i || n[2] !== a
    ? ((l = () => void De(a, o, i)), (n[0] = o), (n[1] = i), (n[2] = a), (n[3] = l))
    : (l = n[3]);
  let u;
  n[4] !== r || n[5] !== i
    ? ((u = (0, Ye.jsx)(`span`, {
        className: `grid aspect-[13/16] w-full grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl`,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) =>
          (0, Ye.jsx)(
            Ne,
            { className: `h-full w-full`, product: r[t % r.length], presentation: `collage`, reference: i },
            t,
          ),
        ),
      })),
      (n[4] = r),
      (n[5] = i),
      (n[6] = u))
    : (u = n[6]);
  let d;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Ye.jsxs)(`span`, {
        className: `flex items-center gap-1 px-1 text-sm font-semibold text-default select-none`,
        children: [
          (0, Ye.jsx)(O, {
            id: `shopping.browseMore`,
            defaultMessage: `Browse more`,
            description: `Button at the end of a product carousel that opens more shopping results`,
          }),
          (0, Ye.jsx)(c, {}),
        ],
      })),
      (n[7] = d))
    : (d = n[7]);
  let f;
  return (
    n[8] !== l || n[9] !== u
      ? ((f = (0, Ye.jsxs)(`button`, {
          className: `group flex min-w-0 shrink-0 basis-[calc((100%-1rem)/2)] cursor-interaction snap-start flex-col gap-2 rounded-xl pb-2 text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring @xl/product-carousel:basis-[calc((100%-2rem)/3)]`,
          type: `button`,
          onClick: l,
          children: [u, d],
        })),
        (n[8] = l),
        (n[9] = u),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
var Je, Ye;
function Xe() {
  return (Xe = e(() => {
    ((Je = p()), C(), b(), _(), me(), de(), z(), Re(), xe(), (Ye = l()));
  }))();
}
function Ze(e) {
  let t = (0, et.c)(40),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = ce(n)), (t[0] = n), (t[1] = r));
  let a = r,
    o = D(),
    s = y(),
    l = (0, tt.useRef)(null),
    u = (0, tt.useRef)(null),
    f = (0, tt.useRef)(null),
    [p, m] = (0, tt.useState)(`ltr`),
    [h, g] = (0, tt.useState)(!1),
    [_, v] = (0, tt.useState)(!1),
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => {
        (f.current?.stop(), (f.current = null), l.current?.style.removeProperty(`scroll-snap-type`));
      }),
      (t[2] = b))
    : (b = t[2]);
  let S = b,
    C;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (e) => {
        let t = $e(e);
        m(t);
        let { maximum: n, minimum: r } = _e(e, t);
        t === `rtl`
          ? (g(e.scrollLeft < n - 1), v(e.scrollLeft > r + 1))
          : (g(e.scrollLeft > r + 1), v(e.scrollLeft < n - 1));
      }),
      (t[3] = C))
    : (C = t[3]);
  let T = w(C),
    E;
  t[4] !== a.length || t[5] !== T
    ? ((E = (e) => {
        if (
          (u.current?.disconnect(),
          S(),
          (l.current = e),
          e == null || a.length === 0 || (T(e), typeof ResizeObserver > `u`))
        )
          return;
        let t = new ResizeObserver(() => T(e));
        (t.observe(e),
          e.firstElementChild != null && t.observe(e.firstElementChild),
          e.lastElementChild != null && t.observe(e.lastElementChild),
          (u.current = t));
      }),
      (t[4] = a.length),
      (t[5] = T),
      (t[6] = E))
    : (E = t[6]);
  let k = E,
    A;
  t[7] !== s || t[8] !== T
    ? ((A = (e) => {
        let t = l.current;
        if (t == null) return;
        S();
        let n = $e(t),
          r = ge(t, e, n);
        if (s) {
          (t.scrollTo({ left: r }), T(t));
          return;
        }
        ((t.style.scrollSnapType = `none`),
          (f.current = i(t.scrollLeft, r, {
            duration: 0.2,
            ease: [0.165, 0.84, 0.44, 1],
            onUpdate: (e) => t.scrollTo({ left: e }),
            onComplete: () => {
              (t.style.removeProperty(`scroll-snap-type`), l.current === t && T(t));
            },
          })));
      }),
      (t[7] = s),
      (t[8] = T),
      (t[9] = A))
    : (A = t[9]);
  let j = A;
  if (a.length === 0) return null;
  let M;
  t[10] === a
    ? (M = t[11])
    : ((M = (e) => {
        if (e != null) return B(e, { text: a.flatMap(Qe).join(` `), highlight: `block` });
      }),
      (t[10] = a),
      (t[11] = M));
  let N;
  t[12] === a
    ? (N = t[13])
    : ((N = a.every(Ae)
        ? (0, $.jsx)(`h3`, {
            className: `mb-3 text-lg font-semibold text-default`,
            children: (0, $.jsx)(O, {
              id: `chatgpt.shopping.provider.carousel_heading`,
              defaultMessage: `Top picks from {merchantName}`,
              description: `Short heading displayed immediately above a shopping product carousel when every displayed product comes from the same special provider. It tells the end user that the recommendations are sourced from that provider. Placeholder {merchantName} is the provider's localized display name, such as Canopy; it is always non-empty and should remain concise because this is a single-line carousel heading.`,
              values: { merchantName: je(a[0]) },
            }),
          })
        : null),
      (t[12] = a),
      (t[13] = N));
  let P;
  t[14] === T ? (P = t[15]) : ((P = (e) => T(e.currentTarget)), (t[14] = T), (t[15] = P));
  let F;
  if (t[16] !== a || t[17] !== n) {
    let e;
    (t[19] === n
      ? (e = t[20])
      : ((e = (e, t) =>
          (0, $.jsx)(
            ze,
            {
              className: `h-full basis-[calc((100%-1rem)/2)] @xl/product-carousel:basis-[calc((100%-2rem)/3)]`,
              product: e,
              productIndex: t,
              reference: n,
            },
            e.id ?? `${e.title}-${String(t)}`,
          )),
        (t[19] = n),
        (t[20] = e)),
      (F = a.map(e)),
      (t[16] = a),
      (t[17] = n),
      (t[18] = F));
  } else F = t[18];
  let ee;
  t[21] !== a || t[22] !== n
    ? ((ee = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(qe, { products: a, reference: n }) })),
      (t[21] = a),
      (t[22] = n),
      (t[23] = ee))
    : (ee = t[23]);
  let I;
  t[24] !== k || t[25] !== ee || t[26] !== P || t[27] !== F
    ? ((I = (0, $.jsxs)(`div`, {
        ref: k,
        className: `hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto py-2`,
        "data-testid": `chatgpt-product-carousel-track`,
        onScroll: P,
        children: [F, ee],
      })),
      (t[24] = k),
      (t[25] = ee),
      (t[26] = P),
      (t[27] = F),
      (t[28] = I))
    : (I = t[28]);
  let L;
  t[29] !== h || t[30] !== _ || t[31] !== p || t[32] !== o || t[33] !== j
    ? ((L =
        h || _
          ? (0, $.jsxs)(`div`, {
              className: `pointer-events-none absolute inset-0 hidden items-center md:flex`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `flex w-8 items-center justify-start`,
                  children: h
                    ? (0, $.jsx)(x, {
                        "aria-label": o.formatMessage({
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
                        children: p === `rtl` ? (0, $.jsx)(c, {}) : (0, $.jsx)(d, {}),
                      })
                    : null,
                }),
                (0, $.jsx)(`div`, {
                  className: `ms-auto flex w-8 items-center justify-end`,
                  children: _
                    ? (0, $.jsx)(x, {
                        "aria-label": o.formatMessage({
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
                        children: p === `rtl` ? (0, $.jsx)(d, {}) : (0, $.jsx)(c, {}),
                      })
                    : null,
                }),
              ],
            })
          : null),
      (t[29] = h),
      (t[30] = _),
      (t[31] = p),
      (t[32] = o),
      (t[33] = j),
      (t[34] = L))
    : (L = t[34]);
  let te;
  return (
    t[35] !== I || t[36] !== L || t[37] !== M || t[38] !== N
      ? ((te = (0, $.jsxs)(`div`, {
          ref: M,
          className: `@container/product-carousel relative my-3`,
          "data-testid": `chatgpt-product-carousel`,
          children: [N, I, L],
        })),
        (t[35] = I),
        (t[36] = L),
        (t[37] = M),
        (t[38] = N),
        (t[39] = te))
      : (te = t[39]),
    te
  );
}
function Qe(e) {
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
function $e(e) {
  return getComputedStyle(e).direction === `rtl` ? `rtl` : `ltr`;
}
var et, tt, $;
function nt() {
  return (nt = e(() => {
    ((et = p()), k(), F(), (tt = o()), b(), le(), S(), H(), _(), v(), T(), Ke(), Xe(), ($ = l()));
  }))();
}
export { Ne as a, Ke as i, nt as n, Re as o, ze as r, Ze as t };
//# sourceMappingURL=chatgpt-product-carousel-3da532a01bac.js.map
