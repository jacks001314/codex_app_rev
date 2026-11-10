import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cot as r,
  IDt as i,
  Irt as a,
  Ixt as o,
  Pxt as s,
  TJ as c,
  VDt as l,
  YA as u,
  ZA as d,
  _Mt as f,
  gMt as p,
  jDt as m,
  t3 as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Xn as b,
  $yr as x,
  Bl as S,
  Cwr as C,
  HXn as w,
  Hl as T,
  QDr as E,
  RXn as D,
  Rl as ee,
  Ul as te,
  XDr as ne,
  XXn as re,
  Xl as O,
  YXn as k,
  ZXn as ie,
  Zl as A,
  eDr as ae,
  eOr as j,
  gwr as oe,
  iZn as se,
  nc as ce,
  oDr as le,
  ocr as ue,
  pZn as de,
  rc as M,
  tZn as fe,
  yjn as pe,
} from "./app-initial-5851df3f6cb1.js";
import { Us as N, Ws as P } from "./app-primary-fe8a450b3b04.js";
import { a as me, r as F } from "./fallback-5d67e3271b11.js";
import { n as he, t as ge } from "./entity.module-8388af796d53.js";
import { n as I, o as L, t as R } from "./chatgpt-product-analytics-d7be3b581237.js";
import { c as z, l as _e, s as B, u as ve } from "./product-image-placeholder-81b1dc646f67.js";
import {
  a as V,
  i as ye,
  n as H,
  o as be,
  r as xe,
  t as U,
} from "./chatgpt-product-carousel-1446766b4310.js";
import { n as Se, r as Ce, t as we } from "./chatgpt_shopping_interaction-fd478da92eca.js";
function Te(e) {
  let t = (0, W.c)(2),
    { reference: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsxs)(K.Fragment, {
          children: [(0, K.jsx)(K.Fragment, { children: (0, K.jsx)(Ee, { reference: n }) }), null],
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ee(e) {
  let r = (0, W.c)(30),
    { reference: s } = e,
    c = o(oe),
    l = M(),
    u = le(`2128165686`),
    d = (0, G.useContext)(O);
  if (
    !u.get(`browse_enabled`, !1) ||
    l == null ||
    l.shouldBlockExternalEgress ||
    d === `restricted` ||
    c.value.routeKind !== `chatgpt-thread` ||
    l == null
  ) {
    let e;
    return (r[0] === s ? (e = r[1]) : ((e = (0, K.jsx)(U, { reference: s })), (r[0] = s), (r[1] = e)), e);
  }
  let f, p, m, h, g, _, v;
  if (r[2] !== l || r[3] !== s || r[4] !== c) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = k(s);
      if (e.length === 0) {
        v = null;
        break bb0;
      }
      ((p = e.slice(-4)),
        (f = (t) => {
          let n = l.contentReferences.indexOf(s),
            r = l.contentReferenceMessageIds?.[n] ?? l.messageId;
          if (r && !r.startsWith(`WEB:`)) {
            let n = c.get(de, l.conversationId) ?? void 0,
              i;
            (c.get(j).isChatgptBrowserReplacement &&
              (i =
                t === `browse_all`
                  ? T.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_BROWSE_ALL
                  : T.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_HEADER),
              E(c, S, {
                eventType: ee.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED,
                legacyStatsigEventName: c.get(j).isChatgptBrowserReplacement
                  ? `search_content_reference_clicked`
                  : void 0,
                conversationId: n,
                messageId: r,
                contentReferenceType: `explore_more`,
                contentReferenceStartIndex: typeof s.start_idx == `number` ? a(s.start_idx) : void 0,
                productCount: a(e.length),
                shoppingContext: i,
              }),
              t === `browse_all` &&
                E(c, we, {
                  legacyStatsigEventName: c.get(j).isChatgptBrowserReplacement
                    ? `chatgpt_shopping_browse_all_clicked`
                    : void 0,
                  action: Se.CHATGPT_SHOPPING_INTERACTION_ACTION_BROWSE_ALL_CLICKED,
                  conversationId: n,
                  messageId: r,
                  productCount: a(e.length),
                }));
          }
          ve(c, l, s);
        }));
      let o;
      r[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, K.jsx)(i, {
            id: `chatgpt.contentReferences.exploreMore.title`,
            defaultMessage: `Explore more`,
            description: `Short heading above a strip of recommended shopping product previews in a ChatGPT answer. When shopping browse is available, clicking this heading opens all shopping results for the answer.`,
          })),
          (r[12] = o))
        : (o = r[12]);
      let u = o;
      g = `my-3 flex flex-col gap-3`;
      let d;
      (r[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((d = (0, K.jsx)(n, {})), (r[13] = d))
        : (d = r[13]),
        (_ = (0, K.jsx)(`h2`, {
          className: `text-base font-medium text-default`,
          children: (0, K.jsxs)(t, {
            color: `ghost`,
            size: `compact`,
            type: `button`,
            onClick: () => f(`header`),
            children: [u, d],
          }),
        })),
        (m = `grid grid-cols-5 gap-3`),
        (h = p.map((t, n) =>
          (0, K.jsx)(
            De,
            { product: t, productIndex: e.length - p.length + n, reference: s },
            t.id ?? `${t.title}-${n}`,
          ),
        )));
    }
    ((r[2] = l),
      (r[3] = s),
      (r[4] = c),
      (r[5] = f),
      (r[6] = p),
      (r[7] = m),
      (r[8] = h),
      (r[9] = g),
      (r[10] = _),
      (r[11] = v));
  } else ((f = r[5]), (p = r[6]), (m = r[7]), (h = r[8]), (g = r[9]), (_ = r[10]), (v = r[11]));
  if (v !== Symbol.for(`react.early_return_sentinel`)) return v;
  let y;
  r[14] === f ? (y = r[15]) : ((y = () => f(`browse_all`)), (r[14] = f), (r[15] = y));
  let b;
  r[16] === p
    ? (b = r[17])
    : ((b = (0, K.jsx)(`span`, {
        className: `grid aspect-square w-full grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl`,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) =>
          (0, K.jsx)(
            V,
            {
              className: `h-full w-full`,
              product: p[t % p.length],
              presentation: `collage`,
              imageAnalytics: { citationType: `explore_more`, surface: `explore_more` },
            },
            t,
          ),
        ),
      })),
      (r[16] = p),
      (r[17] = b));
  let x;
  r[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, K.jsxs)(`span`, {
        className: `flex items-center gap-1 px-1 text-sm font-semibold text-default select-none`,
        children: [
          (0, K.jsx)(i, {
            id: `chatgpt.contentReferences.exploreMore.browseAll`,
            defaultMessage: `Browse All`,
            description: `Short button label on the final tile of the Explore more shopping strip in a ChatGPT answer. Opens all shopping results for that answer, beyond the four product previews.`,
          }),
          (0, K.jsx)(n, {}),
        ],
      })),
      (r[18] = x))
    : (x = r[18]);
  let C;
  r[19] !== y || r[20] !== b
    ? ((C = (0, K.jsxs)(`button`, {
        className: `group flex min-w-0 cursor-interaction flex-col gap-2 rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        type: `button`,
        onClick: y,
        children: [b, x],
      })),
      (r[19] = y),
      (r[20] = b),
      (r[21] = C))
    : (C = r[21]);
  let w;
  r[22] !== m || r[23] !== h || r[24] !== C
    ? ((w = (0, K.jsxs)(`div`, { className: m, children: [h, C] })),
      (r[22] = m),
      (r[23] = h),
      (r[24] = C),
      (r[25] = w))
    : (w = r[25]);
  let D;
  return (
    r[26] !== w || r[27] !== g || r[28] !== _
      ? ((D = (0, K.jsxs)(`div`, { className: g, children: [_, w] })),
        (r[26] = w),
        (r[27] = g),
        (r[28] = _),
        (r[29] = D))
      : (D = r[29]),
    D
  );
}
function De(e) {
  let t = (0, W.c)(31),
    { product: n, productIndex: i, reference: a } = e,
    s = o(r),
    c = M(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = new Set()), (t[0] = l)) : (l = t[0]);
  let d = (0, G.useRef)(l),
    f;
  t[1] === n.offers
    ? (f = t[2])
    : ((f = n.offers?.find(ke) ?? n.offers?.find(Oe)), (t[1] = n.offers), (t[2] = f));
  let p = f?.url ?? n.url,
    m;
  t[3] === p ? (m = t[4]) : ((m = p == null ? null : u(p)), (t[3] = p), (t[4] = m));
  let h = m,
    g;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { citationType: `explore_more`, surface: `explore_more` }), (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === n
    ? (_ = t[7])
    : ((_ = (0, K.jsx)(V, {
        className: `aspect-square w-full`,
        product: n,
        presentation: `hero`,
        imageAnalytics: g,
      })),
      (t[6] = n),
      (t[7] = _));
  let v = _,
    y;
  t[8] !== c || t[9] !== h || t[10] !== v || t[11] !== n || t[12] !== i || t[13] !== a || t[14] !== s
    ? ((y =
        h == null
          ? v
          : (0, K.jsx)(N, {
              className: `group flex w-full min-w-0 cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
              href: h,
              initiator: `markdown_link_click`,
              onClick: (e) => {
                if (c == null) return;
                let t = c.contentReferences.indexOf(a);
                I(
                  s,
                  n,
                  { ...c, messageId: c.contentReferenceMessageIds?.[t] ?? c.messageId, productReference: a },
                  i,
                  !0,
                  { target: e.target, url: h },
                );
              },
              children: v,
            })),
      (t[8] = c),
      (t[9] = h),
      (t[10] = v),
      (t[11] = n),
      (t[12] = i),
      (t[13] = a),
      (t[14] = s),
      (t[15] = y))
    : (y = t[15]);
  let b = y,
    x;
  t[16] !== c || t[17] !== n || t[18] !== i || t[19] !== a || t[20] !== s
    ? ((x = (e) => L(s, e, () => ({ context: c, reference: a, product: n, productIndex: i }), d.current)),
      (t[16] = c),
      (t[17] = n),
      (t[18] = i),
      (t[19] = a),
      (t[20] = s),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== b || t[23] !== v || t[24] !== n || t[25] !== i || t[26] !== a
    ? ((S = (0, K.jsx)(B, {
        className: `group flex w-full min-w-0 cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        fallback: b,
        product: n,
        productIndex: i,
        reference: a,
        children: v,
      })),
      (t[22] = b),
      (t[23] = v),
      (t[24] = n),
      (t[25] = i),
      (t[26] = a),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== x || t[29] !== S
      ? ((C = (0, K.jsx)(`div`, { ref: x, className: `min-w-0`, children: S })),
        (t[28] = x),
        (t[29] = S),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function Oe(e) {
  return e.url?.trim();
}
function ke(e) {
  return e.available === !0 && e.url?.trim();
}
var W, G, K;
function Ae() {
  return (Ae = e(() => {
    ((W = g()),
      ue(),
      te(),
      Ce(),
      s(),
      se(),
      (G = y()),
      m(),
      h(),
      c(),
      d(),
      A(),
      ne(),
      _(),
      C(),
      ae(),
      P(),
      R(),
      H(),
      z(),
      pe(),
      ce(),
      be(),
      _e(),
      (K = v()));
  }))();
}
function je(e) {
  let t = (0, X.c)(14),
    { reference: n } = e;
  switch (ze(n)) {
    case `products`:
    case `product_group`: {
      let e;
      return (t[0] === n ? (e = t[1]) : ((e = (0, Q.jsx)(U, { reference: n })), (t[0] = n), (t[1] = e)), e);
    }
    case `explore_more`: {
      let e;
      return (t[2] === n ? (e = t[3]) : ((e = (0, Q.jsx)(Te, { reference: n })), (t[2] = n), (t[3] = e)), e);
    }
    case `product`: {
      let e;
      return (
        t[4] === n
          ? (e = t[5])
          : ((e = D(n) === `inline` ? (0, Q.jsx)(Ne, { reference: n }) : (0, Q.jsx)(Me, { reference: n })),
            (t[4] = n),
            (t[5] = e)),
        e
      );
    }
    case `product_entity`: {
      let e;
      return (t[6] === n ? (e = t[7]) : ((e = (0, Q.jsx)(Ne, { reference: n })), (t[6] = n), (t[7] = e)), e);
    }
    case `product_reviews`: {
      let e;
      return (t[8] === n ? (e = t[9]) : ((e = (0, Q.jsx)(Fe, { reference: n })), (t[8] = n), (t[9] = e)), e);
    }
    case `product_rationale`: {
      let e;
      return (
        t[10] === n ? (e = t[11]) : ((e = (0, Q.jsx)(Ie, { reference: n })), (t[10] = n), (t[11] = e)),
        e
      );
    }
    case `product_show_more_header`: {
      let e;
      return (
        t[12] === n ? (e = t[13]) : ((e = (0, Q.jsx)(Re, { reference: n })), (t[12] = n), (t[13] = e)),
        e
      );
    }
    case null:
      return null;
    default:
      return null;
  }
}
function Me(e) {
  let t = (0, X.c)(8),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = k(n)), (t[0] = n), (t[1] = r));
  let i = r[0];
  if (i == null) {
    let e;
    return (t[2] === n ? (e = t[3]) : ((e = (0, Q.jsx)(F, { reference: n })), (t[2] = n), (t[3] = e)), e);
  }
  let a = n.render_as === `hero` || n.render_as === `block` ? n.render_as : `card`,
    o;
  return (
    t[4] !== i || t[5] !== n || t[6] !== a
      ? ((o = (0, Q.jsx)(`div`, {
          className: `@container/product-reference my-3`,
          children: (0, Q.jsx)(xe, { presentation: a, product: i, reference: n }),
        })),
        (t[4] = i),
        (t[5] = n),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function Ne(e) {
  let t = (0, X.c)(26),
    { reference: n } = e,
    i = o(r),
    a = M(),
    s = (0, Z.useContext)(O),
    c = (0, Z.useRef)(new Set()),
    l = (0, Z.useRef)(null),
    u = k(n)[0];
  if (u == null) return null;
  let d = n.type === `product_entity`,
    f;
  t[0] === d
    ? (f = t[1])
    : ((f = d ? p(ge.inline, `focus-visible:ring-2 focus-visible:ring-ring`) : void 0),
      (t[0] = d),
      (t[1] = f));
  let m = f,
    h = [u.title, x(u.price), x(u.merchants)].filter(Pe),
    g = (e) =>
      L(
        i,
        e,
        () => ({
          context:
            a == null
              ? null
              : { ...a, shouldBlockExternalEgress: a.shouldBlockExternalEgress || s === `restricted` },
          reference: n,
          product: u,
          productIndex: void 0,
        }),
        c.current,
      ),
    _ = d
      ? `whitespace-normal`
      : `inline-flex max-w-full items-baseline gap-1 rounded bg-surface-secondary/92 px-1 text-default`,
    v = d
      ? u.title
      : (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`span`, { className: `truncate font-medium`, children: u.title }),
            x(u.price) == null
              ? null
              : (0, Q.jsx)(`span`, { className: `text-secondary`, children: u.price }),
            x(u.merchants) == null
              ? null
              : (0, Q.jsx)(`span`, { className: `truncate text-secondary`, children: u.merchants }),
          ],
        }),
    y;
  t[2] !== g || t[3] !== _ || t[4] !== v
    ? ((y = (0, Q.jsx)(`span`, { ref: g, className: _, children: v })),
      (t[2] = g),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    S;
  t[6] === u ? (S = t[7]) : ((S = Be(u)), (t[6] = u), (t[7] = S));
  let C = S,
    w;
  t[8] !== b ||
  t[9] !== a ||
  t[10] !== s ||
  t[11] !== C ||
  t[12] !== m ||
  t[13] !== d ||
  t[14] !== h ||
  t[15] !== u ||
  t[16] !== n ||
  t[17] !== i
    ? ((w =
        C == null
          ? b
          : (0, Q.jsx)(J, {
              className: m,
              "aria-label": d ? u.title : h.join(` `),
              href: C,
              onClick: (e) => {
                if (a == null) return;
                let t = a.contentReferences.indexOf(n),
                  r = a.contentReferenceMessageIds?.[t] ?? a.messageId,
                  o = {
                    ...a,
                    messageId: r,
                    shouldBlockExternalEgress: a.shouldBlockExternalEgress || s === `restricted`,
                    productReference:
                      n.type === `product_entity` && e.currentTarget.closest(`th`) != null
                        ? { ...n, render_as: `table` }
                        : n,
                  },
                  c = JSON.stringify([r, n.start_idx, u.id]);
                (I(
                  i,
                  u,
                  o,
                  void 0,
                  (n.type !== `product` && o.productReference.render_as !== `table`) || l.current !== c,
                  { target: e.target, url: C },
                ),
                  (l.current = c));
              },
              children: b,
            })),
      (t[8] = b),
      (t[9] = a),
      (t[10] = s),
      (t[11] = C),
      (t[12] = m),
      (t[13] = d),
      (t[14] = h),
      (t[15] = u),
      (t[16] = n),
      (t[17] = i),
      (t[18] = w))
    : (w = t[18]);
  let T = w,
    E =
      m ??
      `cursor-interaction text-start text-secondary underline decoration-current underline-offset-2 hover:text-default`,
    D;
  return (
    t[19] !== b || t[20] !== T || t[21] !== d || t[22] !== u || t[23] !== n || t[24] !== E
      ? ((D = (0, Q.jsx)(B, { className: E, fallback: T, inline: d, product: u, reference: n, children: b })),
        (t[19] = b),
        (t[20] = T),
        (t[21] = d),
        (t[22] = u),
        (t[23] = n),
        (t[24] = E),
        (t[25] = D))
      : (D = t[25]),
    D
  );
}
function Pe(e) {
  return e != null;
}
function Fe(e) {
  let t = (0, X.c)(12),
    { reference: n } = e,
    r = l(),
    a;
  t[0] === n ? (a = t[1]) : ((a = fe(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s,
    c;
  if (t[2] !== r || t[3] !== n || t[4] !== o) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = b(n);
      if (o == null && e.length === 0) {
        let e;
        (t[7] === n ? (e = t[8]) : ((e = (0, Q.jsx)(F, { reference: n })), (t[7] = n), (t[8] = e)), (c = e));
        break bb0;
      }
      let a;
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((a = (0, Q.jsx)(i, {
            id: `chatgpt.contentReferences.productReviews.title`,
            defaultMessage: `Product reviews`,
            description: `Title for a product reviews content reference card`,
          })),
          (t[9] = a))
        : (a = t[9]);
      let l;
      (t[10] === o
        ? (l = t[11])
        : ((l = o == null ? null : (0, Q.jsx)(`div`, { className: `text-secondary`, children: o })),
          (t[10] = o),
          (t[11] = l)),
        (s = (0, Q.jsxs)(q, {
          title: a,
          children: [
            l,
            e.length === 0
              ? null
              : (0, Q.jsx)(`div`, {
                  className: `mt-3 flex flex-col gap-2`,
                  children: e.slice(0, 3).map((e, t) => {
                    let n = x(e.source),
                      i = x(e.theme) ?? n ?? Ve(x(e.cite_url) ?? x(e.cite)),
                      a = Y(x(e.cite_url) ?? x(e.cite)),
                      o = He(e.rating, e.num_reviews, r);
                    return (0, Q.jsxs)(
                      `div`,
                      {
                        className: `rounded-md border border-subtle p-2`,
                        children: [
                          i == null
                            ? null
                            : (0, Q.jsx)(`div`, { className: `font-medium text-default`, children: i }),
                          x(e.summary) == null
                            ? null
                            : (0, Q.jsx)(`div`, { className: `mt-1 text-secondary`, children: e.summary }),
                          o == null && n == null
                            ? null
                            : (0, Q.jsxs)(`div`, {
                                className: `mt-1 flex flex-wrap gap-2 text-secondary`,
                                children: [
                                  o == null ? null : (0, Q.jsx)(`span`, { children: o }),
                                  n == null
                                    ? null
                                    : a == null
                                      ? (0, Q.jsx)(`span`, { children: n })
                                      : (0, Q.jsx)(J, { href: a, children: n }),
                                ],
                              }),
                        ],
                      },
                      `${i ?? `review`}-${String(t)}`,
                    );
                  }),
                }),
          ],
        })));
    }
    ((t[2] = r), (t[3] = n), (t[4] = o), (t[5] = s), (t[6] = c));
  } else ((s = t[5]), (c = t[6]));
  return c === Symbol.for(`react.early_return_sentinel`) ? s : c;
}
function Ie(e) {
  let t = (0, X.c)(11),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = re(n)), (t[0] = n), (t[1] = r));
  let a = r,
    o,
    s;
  if (t[2] !== a || t[3] !== n) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ie(n);
      if (a == null && e.length === 0) {
        let e;
        (t[6] === n ? (e = t[7]) : ((e = (0, Q.jsx)(F, { reference: n })), (t[6] = n), (t[7] = e)), (s = e));
        break bb0;
      }
      let r;
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(i, {
            id: `chatgpt.contentReferences.productRationale.title`,
            defaultMessage: `Why this product`,
            description: `Title for a product recommendation rationale content reference card`,
          })),
          (t[8] = r))
        : (r = t[8]);
      let c;
      (t[9] === a
        ? (c = t[10])
        : ((c = a == null ? null : (0, Q.jsx)(`div`, { className: `text-secondary`, children: a })),
          (t[9] = a),
          (t[10] = c)),
        (o = (0, Q.jsxs)(q, {
          title: r,
          children: [
            c,
            e.length === 0
              ? null
              : (0, Q.jsx)(`div`, {
                  className: `mt-2 flex flex-wrap gap-2`,
                  children: e.slice(0, 3).map(Le),
                }),
          ],
        })));
    }
    ((t[2] = a), (t[3] = n), (t[4] = o), (t[5] = s));
  } else ((o = t[4]), (s = t[5]));
  return s === Symbol.for(`react.early_return_sentinel`) ? o : s;
}
function Le(e, t) {
  let n = Y(x(e.url)),
    r = x(e.title) ?? Ve(x(e.url));
  return n == null || r == null ? null : (0, Q.jsx)(J, { href: n, children: r }, `${n}-${String(t)}`);
}
function Re(e) {
  let t = (0, X.c)(13),
    { reference: n } = e,
    r;
  t[0] === n.label ? (r = t[1]) : ((r = x(n.label)), (t[0] = n.label), (t[1] = r));
  let i = r,
    a;
  t[2] === n.query ? (a = t[3]) : ((a = x(n.query)), (t[2] = n.query), (t[3] = a));
  let o = a,
    s;
  t[4] !== i || t[5] !== n ? ((s = i ?? w(n)), (t[4] = i), (t[5] = n), (t[6] = s)) : (s = t[6]);
  let c = s;
  if (c == null && o == null) return null;
  let l;
  t[7] !== o || t[8] !== c
    ? ((l = o == null || o === c ? null : (0, Q.jsx)(`div`, { className: `text-secondary`, children: o })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== l || t[11] !== c
      ? ((u = (0, Q.jsx)(q, { title: c, children: l })), (t[10] = l), (t[11] = c), (t[12] = u))
      : (u = t[12]),
    u
  );
}
function q(e) {
  let t = (0, X.c)(7),
    { children: n, title: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Q.jsx)(`div`, { className: `font-medium text-default`, children: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`div`, { className: `mt-1`, children: n })), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Q.jsxs)(`div`, {
          className: `my-3 max-w-[36rem] rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default`,
          "data-testid": `chatgpt-content-reference-card`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function J(e) {
  let t = (0, X.c)(10),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: a, children: n, href: r, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o =
      a === void 0
        ? `cursor-interaction text-secondary underline decoration-current underline-offset-2 hover:text-default`
        : a,
    s;
  return (
    t[5] !== n || t[6] !== o || t[7] !== r || t[8] !== i
      ? ((s = (0, Q.jsx)(N, { ...i, className: o, href: r, initiator: `markdown_link_click`, children: n })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = r),
        (t[8] = i),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function ze(e) {
  return typeof e.type == `string` && e.type.length > 0 ? e.type : null;
}
function Be(e) {
  return Y(x(e.url));
}
function Y(e) {
  return e == null ? null : (u(e) ?? null);
}
function Ve(e) {
  if (e == null) return null;
  try {
    return new URL(e).hostname || e;
  } catch {
    return e;
  }
}
function He(e, t, n) {
  return e == null
    ? null
    : t == null
      ? n.formatNumber(e, { maximumFractionDigits: 1, minimumFractionDigits: 1 })
      : `${n.formatNumber(e, { maximumFractionDigits: 1, minimumFractionDigits: 1 })} (${n.formatNumber(t)})`;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = g()),
      f(),
      s(),
      se(),
      (Z = y()),
      m(),
      d(),
      A(),
      _(),
      P(),
      R(),
      ye(),
      H(),
      z(),
      ce(),
      Ae(),
      me(),
      he(),
      (Q = v()));
  }))();
}
$();
export { je as ChatGptProductContentReference };
//# sourceMappingURL=product-26c5634e933c.js.map
