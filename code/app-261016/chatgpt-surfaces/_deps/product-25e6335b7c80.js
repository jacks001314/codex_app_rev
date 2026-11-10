import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bj as r,
  FBt as i,
  IH as a,
  LNt as o,
  MNt as s,
  NNt as c,
  PBt as l,
  Qit as u,
  Qst as d,
  Rj as f,
  TY as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  okt as v,
  tkt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $l as b,
  B1n as x,
  Bl as S,
  C1n as C,
  CMr as w,
  Djr as T,
  Gl as E,
  Hl as ee,
  MOr as te,
  Ql as D,
  VPn as O,
  Wl as ne,
  Ydr as k,
  b1n as re,
  cc as A,
  g1n as ie,
  h1n as ae,
  m1n as j,
  r1n as oe,
  rwr as M,
  s1n as se,
  sc as ce,
  v1n as le,
  xMr as ue,
  xjr as de,
  yMr as fe,
  zOr as pe,
} from "./app-initial-ad16eaadf81f.js";
import { ec as N, tc as P } from "./app-primary-3e00728c2a4c.js";
import { a as me, r as F } from "./fallback-1dd4771b7d07.js";
import { n as he, t as ge } from "./entity.module-8388af796d53.js";
import { n as I, s as L, t as R } from "./chatgpt-product-analytics-ae26af19ef1e.js";
import { c as z, l as _e, s as B, u as ve } from "./product-image-placeholder-138c9a2a6059.js";
import {
  a as V,
  i as ye,
  n as H,
  o as be,
  r as xe,
  t as U,
} from "./chatgpt-product-carousel-3da532a01bac.js";
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
  let n = (0, W.c)(30),
    { reference: r } = e,
    i = t(te),
    o = A(),
    s = T(`2128165686`),
    c = (0, G.useContext)(D);
  if (
    !s.get(`browse_enabled`, !1) ||
    o == null ||
    o.shouldBlockExternalEgress ||
    c === `restricted` ||
    i.value.routeKind !== `chatgpt-thread` ||
    o == null
  ) {
    let e;
    return (n[0] === r ? (e = n[1]) : ((e = (0, K.jsx)(U, { reference: r })), (n[0] = r), (n[1] = e)), e);
  }
  let l, d, f, p, m, g, _;
  if (n[2] !== o || n[3] !== r || n[4] !== i) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = j(r);
      if (e.length === 0) {
        _ = null;
        break bb0;
      }
      ((d = e.slice(-4)),
        (l = (t) => {
          let n = o.contentReferences.indexOf(r),
            a = o.contentReferenceMessageIds?.[n] ?? o.messageId;
          if (a && !a.startsWith(`WEB:`)) {
            let n = i.get(x, o.conversationId) ?? void 0,
              s;
            (i.get(w).isChatgptBrowserReplacement &&
              (s =
                t === `browse_all`
                  ? ne.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_BROWSE_ALL
                  : ne.CHATGPT_CONTENT_REFERENCE_SHOPPING_CONTEXT_EXPLORE_HEADER),
              ue(i, ee, {
                eventType: S.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED,
                legacyStatsigEventName: i.get(w).isChatgptBrowserReplacement
                  ? `search_content_reference_clicked`
                  : void 0,
                conversationId: n,
                messageId: a,
                contentReferenceType: `explore_more`,
                contentReferenceStartIndex: typeof r.start_idx == `number` ? u(r.start_idx) : void 0,
                productCount: u(e.length),
                shoppingContext: s,
              }),
              t === `browse_all` &&
                ue(i, we, {
                  legacyStatsigEventName: i.get(w).isChatgptBrowserReplacement
                    ? `chatgpt_shopping_browse_all_clicked`
                    : void 0,
                  action: Se.CHATGPT_SHOPPING_INTERACTION_ACTION_BROWSE_ALL_CLICKED,
                  conversationId: n,
                  messageId: a,
                  productCount: u(e.length),
                }));
          }
          ve(i, o, r);
        }));
      let t;
      n[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, K.jsx)(y, {
            id: `chatgpt.contentReferences.exploreMore.title`,
            defaultMessage: `Explore more`,
            description: `Short heading above a strip of recommended shopping product previews in a ChatGPT answer. When shopping browse is available, clicking this heading opens all shopping results for the answer.`,
          })),
          (n[12] = t))
        : (t = n[12]);
      let s = t;
      m = `my-3 flex flex-col gap-3`;
      let c;
      (n[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((c = (0, K.jsx)(a, {})), (n[13] = c))
        : (c = n[13]),
        (g = (0, K.jsx)(`h2`, {
          className: `text-base font-medium text-default`,
          children: (0, K.jsxs)(h, {
            color: `ghost`,
            size: `compact`,
            type: `button`,
            onClick: () => l(`header`),
            children: [s, c],
          }),
        })),
        (f = `grid grid-cols-5 gap-3`),
        (p = d.map((t, n) =>
          (0, K.jsx)(
            De,
            { product: t, productIndex: e.length - d.length + n, reference: r },
            t.id ?? `${t.title}-${n}`,
          ),
        )));
    }
    ((n[2] = o),
      (n[3] = r),
      (n[4] = i),
      (n[5] = l),
      (n[6] = d),
      (n[7] = f),
      (n[8] = p),
      (n[9] = m),
      (n[10] = g),
      (n[11] = _));
  } else ((l = n[5]), (d = n[6]), (f = n[7]), (p = n[8]), (m = n[9]), (g = n[10]), (_ = n[11]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let v;
  n[14] === l ? (v = n[15]) : ((v = () => l(`browse_all`)), (n[14] = l), (n[15] = v));
  let b;
  n[16] === d
    ? (b = n[17])
    : ((b = (0, K.jsx)(`span`, {
        className: `grid aspect-square w-full grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-xl`,
        "aria-hidden": !0,
        children: Array.from({ length: 4 }, (e, t) =>
          (0, K.jsx)(
            V,
            {
              className: `h-full w-full`,
              product: d[t % d.length],
              presentation: `collage`,
              imageAnalytics: { citationType: `explore_more`, surface: `explore_more` },
            },
            t,
          ),
        ),
      })),
      (n[16] = d),
      (n[17] = b));
  let C;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, K.jsxs)(`span`, {
        className: `flex items-center gap-1 px-1 text-sm font-semibold text-default select-none`,
        children: [
          (0, K.jsx)(y, {
            id: `chatgpt.contentReferences.exploreMore.browseAll`,
            defaultMessage: `Browse All`,
            description: `Short button label on the final tile of the Explore more shopping strip in a ChatGPT answer. Opens all shopping results for that answer, beyond the four product previews.`,
          }),
          (0, K.jsx)(a, {}),
        ],
      })),
      (n[18] = C))
    : (C = n[18]);
  let E;
  n[19] !== v || n[20] !== b
    ? ((E = (0, K.jsxs)(`button`, {
        className: `group flex min-w-0 cursor-interaction flex-col gap-2 rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        type: `button`,
        onClick: v,
        children: [b, C],
      })),
      (n[19] = v),
      (n[20] = b),
      (n[21] = E))
    : (E = n[21]);
  let O;
  n[22] !== f || n[23] !== p || n[24] !== E
    ? ((O = (0, K.jsxs)(`div`, { className: f, children: [p, E] })),
      (n[22] = f),
      (n[23] = p),
      (n[24] = E),
      (n[25] = O))
    : (O = n[25]);
  let k;
  return (
    n[26] !== O || n[27] !== m || n[28] !== g
      ? ((k = (0, K.jsxs)(`div`, { className: m, children: [g, O] })),
        (n[26] = O),
        (n[27] = m),
        (n[28] = g),
        (n[29] = k))
      : (k = n[29]),
    k
  );
}
function De(e) {
  let n = (0, W.c)(31),
    { product: r, productIndex: i, reference: a } = e,
    o = t(d),
    s = A(),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Set()), (n[0] = c)) : (c = n[0]);
  let l = (0, G.useRef)(c),
    u;
  n[1] === r.offers
    ? (u = n[2])
    : ((u = r.offers?.find(ke) ?? r.offers?.find(Oe)), (n[1] = r.offers), (n[2] = u));
  let p = u?.url ?? r.url,
    m;
  n[3] === p ? (m = n[4]) : ((m = p == null ? null : f(p)), (n[3] = p), (n[4] = m));
  let h = m,
    g;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { citationType: `explore_more`, surface: `explore_more` }), (n[5] = g))
    : (g = n[5]);
  let _;
  n[6] === r
    ? (_ = n[7])
    : ((_ = (0, K.jsx)(V, {
        className: `aspect-square w-full`,
        product: r,
        presentation: `hero`,
        imageAnalytics: g,
      })),
      (n[6] = r),
      (n[7] = _));
  let v = _,
    y;
  n[8] !== s || n[9] !== h || n[10] !== v || n[11] !== r || n[12] !== i || n[13] !== a || n[14] !== o
    ? ((y =
        h == null
          ? v
          : (0, K.jsx)(N, {
              className: `group flex w-full min-w-0 cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
              href: h,
              initiator: `markdown_link_click`,
              onClick: (e) => {
                if (s == null) return;
                let t = s.contentReferences.indexOf(a);
                I(
                  o,
                  r,
                  { ...s, messageId: s.contentReferenceMessageIds?.[t] ?? s.messageId, productReference: a },
                  i,
                  !0,
                  { target: e.target, url: h },
                );
              },
              children: v,
            })),
      (n[8] = s),
      (n[9] = h),
      (n[10] = v),
      (n[11] = r),
      (n[12] = i),
      (n[13] = a),
      (n[14] = o),
      (n[15] = y))
    : (y = n[15]);
  let b = y,
    x;
  n[16] !== s || n[17] !== r || n[18] !== i || n[19] !== a || n[20] !== o
    ? ((x = (e) => L(o, e, () => ({ context: s, reference: a, product: r, productIndex: i }), l.current)),
      (n[16] = s),
      (n[17] = r),
      (n[18] = i),
      (n[19] = a),
      (n[20] = o),
      (n[21] = x))
    : (x = n[21]);
  let S;
  n[22] !== b || n[23] !== v || n[24] !== r || n[25] !== i || n[26] !== a
    ? ((S = (0, K.jsx)(B, {
        className: `group flex w-full min-w-0 cursor-interaction rounded-xl text-start no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        fallback: b,
        product: r,
        productIndex: i,
        reference: a,
        children: v,
      })),
      (n[22] = b),
      (n[23] = v),
      (n[24] = r),
      (n[25] = i),
      (n[26] = a),
      (n[27] = S))
    : (S = n[27]);
  let C;
  return (
    n[28] !== x || n[29] !== S
      ? ((C = (0, K.jsx)(`div`, { ref: x, className: `min-w-0`, children: S })),
        (n[28] = x),
        (n[29] = S),
        (n[30] = C))
      : (C = n[30]),
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
    ((W = l()),
      k(),
      E(),
      Ce(),
      _(),
      C(),
      (G = i()),
      m(),
      g(),
      p(),
      r(),
      b(),
      fe(),
      n(),
      pe(),
      de(),
      P(),
      R(),
      H(),
      z(),
      O(),
      ce(),
      be(),
      _e(),
      (K = o()));
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
          : ((e = oe(n) === `inline` ? (0, Q.jsx)(Ne, { reference: n }) : (0, Q.jsx)(Me, { reference: n })),
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
  t[0] === n ? (r = t[1]) : ((r = j(n)), (t[0] = n), (t[1] = r));
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
  let n = (0, X.c)(26),
    { reference: r } = e,
    i = t(d),
    a = A(),
    o = (0, Z.useContext)(D),
    c = (0, Z.useRef)(new Set()),
    l = (0, Z.useRef)(null),
    u = j(r)[0];
  if (u == null) return null;
  let f = r.type === `product_entity`,
    p;
  n[0] === f
    ? (p = n[1])
    : ((p = f ? s(ge.inline, `focus-visible:ring-2 focus-visible:ring-ring`) : void 0),
      (n[0] = f),
      (n[1] = p));
  let m = p,
    h = [u.title, M(u.price), M(u.merchants)].filter(Pe),
    g = (e) =>
      L(
        i,
        e,
        () => ({
          context:
            a == null
              ? null
              : { ...a, shouldBlockExternalEgress: a.shouldBlockExternalEgress || o === `restricted` },
          reference: r,
          product: u,
          productIndex: void 0,
        }),
        c.current,
      ),
    _ = f
      ? `whitespace-normal`
      : `inline-flex max-w-full items-baseline gap-1 rounded bg-surface-secondary/92 px-1 text-default`,
    v = f
      ? u.title
      : (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`span`, { className: `truncate font-medium`, children: u.title }),
            M(u.price) == null
              ? null
              : (0, Q.jsx)(`span`, { className: `text-secondary`, children: u.price }),
            M(u.merchants) == null
              ? null
              : (0, Q.jsx)(`span`, { className: `truncate text-secondary`, children: u.merchants }),
          ],
        }),
    y;
  n[2] !== g || n[3] !== _ || n[4] !== v
    ? ((y = (0, Q.jsx)(`span`, { ref: g, className: _, children: v })),
      (n[2] = g),
      (n[3] = _),
      (n[4] = v),
      (n[5] = y))
    : (y = n[5]);
  let b = y,
    x;
  n[6] === u ? (x = n[7]) : ((x = Be(u)), (n[6] = u), (n[7] = x));
  let S = x,
    C;
  n[8] !== b ||
  n[9] !== a ||
  n[10] !== o ||
  n[11] !== S ||
  n[12] !== m ||
  n[13] !== f ||
  n[14] !== h ||
  n[15] !== u ||
  n[16] !== r ||
  n[17] !== i
    ? ((C =
        S == null
          ? b
          : (0, Q.jsx)(J, {
              className: m,
              "aria-label": f ? u.title : h.join(` `),
              href: S,
              onClick: (e) => {
                if (a == null) return;
                let t = a.contentReferences.indexOf(r),
                  n = a.contentReferenceMessageIds?.[t] ?? a.messageId,
                  s = {
                    ...a,
                    messageId: n,
                    shouldBlockExternalEgress: a.shouldBlockExternalEgress || o === `restricted`,
                    productReference:
                      r.type === `product_entity` && e.currentTarget.closest(`th`) != null
                        ? { ...r, render_as: `table` }
                        : r,
                  },
                  c = JSON.stringify([n, r.start_idx, u.id]);
                (I(
                  i,
                  u,
                  s,
                  void 0,
                  (r.type !== `product` && s.productReference.render_as !== `table`) || l.current !== c,
                  { target: e.target, url: S },
                ),
                  (l.current = c));
              },
              children: b,
            })),
      (n[8] = b),
      (n[9] = a),
      (n[10] = o),
      (n[11] = S),
      (n[12] = m),
      (n[13] = f),
      (n[14] = h),
      (n[15] = u),
      (n[16] = r),
      (n[17] = i),
      (n[18] = C))
    : (C = n[18]);
  let w = C,
    T =
      m ??
      `cursor-interaction text-start text-secondary underline decoration-current underline-offset-2 hover:text-default`,
    E;
  return (
    n[19] !== b || n[20] !== w || n[21] !== f || n[22] !== u || n[23] !== r || n[24] !== T
      ? ((E = (0, Q.jsx)(B, { className: T, fallback: w, inline: f, product: u, reference: r, children: b })),
        (n[19] = b),
        (n[20] = w),
        (n[21] = f),
        (n[22] = u),
        (n[23] = r),
        (n[24] = T),
        (n[25] = E))
      : (E = n[25]),
    E
  );
}
function Pe(e) {
  return e != null;
}
function Fe(e) {
  let t = (0, X.c)(12),
    { reference: n } = e,
    r = v(),
    i;
  t[0] === n ? (i = t[1]) : ((i = re(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o,
    s;
  if (t[2] !== r || t[3] !== n || t[4] !== a) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = le(n);
      if (a == null && e.length === 0) {
        let e;
        (t[7] === n ? (e = t[8]) : ((e = (0, Q.jsx)(F, { reference: n })), (t[7] = n), (t[8] = e)), (s = e));
        break bb0;
      }
      let i;
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, Q.jsx)(y, {
            id: `chatgpt.contentReferences.productReviews.title`,
            defaultMessage: `Product reviews`,
            description: `Title for a product reviews content reference card`,
          })),
          (t[9] = i))
        : (i = t[9]);
      let c;
      (t[10] === a
        ? (c = t[11])
        : ((c = a == null ? null : (0, Q.jsx)(`div`, { className: `text-secondary`, children: a })),
          (t[10] = a),
          (t[11] = c)),
        (o = (0, Q.jsxs)(q, {
          title: i,
          children: [
            c,
            e.length === 0
              ? null
              : (0, Q.jsx)(`div`, {
                  className: `mt-3 flex flex-col gap-2`,
                  children: e.slice(0, 3).map((e, t) => {
                    let n = M(e.source),
                      i = M(e.theme) ?? n ?? Ve(M(e.cite_url) ?? M(e.cite)),
                      a = Y(M(e.cite_url) ?? M(e.cite)),
                      o = He(e.rating, e.num_reviews, r);
                    return (0, Q.jsxs)(
                      `div`,
                      {
                        className: `rounded-md border border-subtle p-2`,
                        children: [
                          i == null
                            ? null
                            : (0, Q.jsx)(`div`, { className: `font-medium text-default`, children: i }),
                          M(e.summary) == null
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
    ((t[2] = r), (t[3] = n), (t[4] = a), (t[5] = o), (t[6] = s));
  } else ((o = t[5]), (s = t[6]));
  return s === Symbol.for(`react.early_return_sentinel`) ? o : s;
}
function Ie(e) {
  let t = (0, X.c)(11),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = ae(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a,
    o;
  if (t[2] !== i || t[3] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ie(n);
      if (i == null && e.length === 0) {
        let e;
        (t[6] === n ? (e = t[7]) : ((e = (0, Q.jsx)(F, { reference: n })), (t[6] = n), (t[7] = e)), (o = e));
        break bb0;
      }
      let r;
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(y, {
            id: `chatgpt.contentReferences.productRationale.title`,
            defaultMessage: `Why this product`,
            description: `Title for a product recommendation rationale content reference card`,
          })),
          (t[8] = r))
        : (r = t[8]);
      let s;
      (t[9] === i
        ? (s = t[10])
        : ((s = i == null ? null : (0, Q.jsx)(`div`, { className: `text-secondary`, children: i })),
          (t[9] = i),
          (t[10] = s)),
        (a = (0, Q.jsxs)(q, {
          title: r,
          children: [
            s,
            e.length === 0
              ? null
              : (0, Q.jsx)(`div`, {
                  className: `mt-2 flex flex-wrap gap-2`,
                  children: e.slice(0, 3).map(Le),
                }),
          ],
        })));
    }
    ((t[2] = i), (t[3] = n), (t[4] = a), (t[5] = o));
  } else ((a = t[4]), (o = t[5]));
  return o === Symbol.for(`react.early_return_sentinel`) ? a : o;
}
function Le(e, t) {
  let n = Y(M(e.url)),
    r = M(e.title) ?? Ve(M(e.url));
  return n == null || r == null ? null : (0, Q.jsx)(J, { href: n, children: r }, `${n}-${String(t)}`);
}
function Re(e) {
  let t = (0, X.c)(13),
    { reference: n } = e,
    r;
  t[0] === n.label ? (r = t[1]) : ((r = M(n.label)), (t[0] = n.label), (t[1] = r));
  let i = r,
    a;
  t[2] === n.query ? (a = t[3]) : ((a = M(n.query)), (t[2] = n.query), (t[3] = a));
  let o = a,
    s;
  t[4] !== i || t[5] !== n ? ((s = i ?? se(n)), (t[4] = i), (t[5] = n), (t[6] = s)) : (s = t[6]);
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
  return Y(M(e.url));
}
function Y(e) {
  return e == null ? null : (f(e) ?? null);
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
    ((X = l()),
      c(),
      _(),
      C(),
      (Z = i()),
      m(),
      r(),
      b(),
      n(),
      P(),
      R(),
      ye(),
      H(),
      z(),
      ce(),
      Ae(),
      me(),
      he(),
      (Q = o()));
  }))();
}
$();
export { je as ChatGptProductContentReference };
//# sourceMappingURL=product-25e6335b7c80.js.map
