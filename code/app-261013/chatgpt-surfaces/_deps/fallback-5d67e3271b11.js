import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  VDt as n,
  YA as r,
  ZA as i,
  _Mt as a,
  cw as o,
  cz as s,
  gMt as c,
  jDt as l,
  lw as u,
  sz as d,
  vzt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  Es as h,
  GLn as g,
  HF as _,
  HXn as v,
  RXn as y,
  Ts as b,
  UF as x,
  ULn as S,
  UXn as C,
  VXn as w,
  Xl as T,
  Zl as E,
  _u as D,
  gu as O,
  iZn as k,
  xPn as A,
  yPn as j,
  zXn as M,
} from "./app-initial-5851df3f6cb1.js";
import { Us as N, Ws as P } from "./app-primary-fe8a450b3b04.js";
import { n as F, t as ee } from "./citation-pill-feee232e708d.js";
function I(e) {
  let t = (0, B.c)(60),
    { attributes: i, isTerminalInline: a, onClick: o, sources: s } = e,
    c = n(),
    l = (0, V.useContext)(T),
    [u, f] = (0, V.useState)(0),
    [p, m] = (0, V.useState)(!1),
    h,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    z,
    U,
    W,
    G;
  if (
    t[0] !== i.label ||
    t[1] !== i.supporting_count ||
    t[2] !== i.title ||
    t[3] !== i.url ||
    t[4] !== u ||
    t[5] !== l ||
    t[6] !== c ||
    t[7] !== a ||
    t[8] !== p ||
    t[9] !== o ||
    t[10] !== s
  ) {
    P = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = typeof i.label == `string` && i.label.trim().length > 0 ? i.label.trim() : null,
        n = typeof i.url == `string` && i.url.trim().length > 0 ? i.url.trim() : null,
        T = typeof i.title == `string` && i.title.trim().length > 0 ? i.title.trim() : null,
        B = re(i.supporting_count);
      if (e == null || n == null) {
        P = null;
        break bb0;
      }
      let V = r(n);
      if (V == null) {
        P = null;
        break bb0;
      }
      let K = R(s == null || s.length === 0 ? [{ kind: `primary`, label: e, title: T, url: n }] : s, {
          kind: `primary`,
          label: e,
          title: T,
          url: n,
          href: V,
        }),
        q = K[u] ?? K[0];
      if (q == null) {
        P = null;
        break bb0;
      }
      let J = p ? q : K[0];
      if (J == null) {
        P = null;
        break bb0;
      }
      let Y =
          B > 0
            ? c.formatMessage(
                {
                  id: `chatgpt.citation.aria.additionalSources`,
                  defaultMessage: `{supportingCount, plural, one {# additional source} other {# additional sources}}`,
                  description: `Accessible label segment that reports how many additional web sources support a citation`,
                },
                { supportingCount: B },
              )
            : null,
        X = ae({ label: J.label, supportingSourcesLabel: Y, title: J.title, url: J.url });
      ((v = d),
        (x = !0),
        (S = !0),
        t[34] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((C = (e) => {
              (m(e), e || f(0));
            }),
            (t[34] = C))
          : (C = t[34]),
        (w = 6),
        (E = `w-full`),
        (O = (0, H.jsx)(ne, { currentSourceIndex: u, onClick: o, setCurrentSourceIndex: f, sources: K })),
        (k = `min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`),
        (A = `start`),
        (j = `bottom`),
        (N = `rich`),
        (h = ee),
        (y = (e) => {
          if (e != null)
            return D(e, {
              highlight: g() ? `block` : `auto`,
              text: [...K.flatMap(te), g() ? e.textContent : void 0].join(` `),
            });
        }),
        (M = X),
        (F = J.href),
        (I = (0, H.jsx)(_, {
          href: J.href,
          className: `size-3 overflow-hidden rounded-full text-current [&>img]:rounded-full`,
          globeSize: 12,
          loadRemote: l !== `restricted`,
        })),
        (L = p),
        (z = a),
        (U = J.label),
        (W = o),
        (G = l === `restricted`),
        (b = B > 0 ? ie(B) : void 0));
    }
    ((t[0] = i.label),
      (t[1] = i.supporting_count),
      (t[2] = i.title),
      (t[3] = i.url),
      (t[4] = u),
      (t[5] = l),
      (t[6] = c),
      (t[7] = a),
      (t[8] = p),
      (t[9] = o),
      (t[10] = s),
      (t[11] = h),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = E),
      (t[20] = O),
      (t[21] = k),
      (t[22] = A),
      (t[23] = j),
      (t[24] = M),
      (t[25] = N),
      (t[26] = P),
      (t[27] = F),
      (t[28] = I),
      (t[29] = L),
      (t[30] = z),
      (t[31] = U),
      (t[32] = W),
      (t[33] = G));
  } else
    ((h = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]),
      (S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (E = t[19]),
      (O = t[20]),
      (k = t[21]),
      (A = t[22]),
      (j = t[23]),
      (M = t[24]),
      (N = t[25]),
      (P = t[26]),
      (F = t[27]),
      (I = t[28]),
      (L = t[29]),
      (z = t[30]),
      (U = t[31]),
      (W = t[32]),
      (G = t[33]));
  if (P !== Symbol.for(`react.early_return_sentinel`)) return P;
  let K;
  t[35] !== h ||
  t[36] !== y ||
  t[37] !== b ||
  t[38] !== M ||
  t[39] !== F ||
  t[40] !== I ||
  t[41] !== L ||
  t[42] !== z ||
  t[43] !== U ||
  t[44] !== W ||
  t[45] !== G
    ? ((K = (0, H.jsx)(h, {
        ref: y,
        ariaLabel: M,
        href: F,
        icon: I,
        isActive: L,
        isTerminalInline: z,
        label: U,
        onClick: W,
        requiresConfirmation: G,
        supportingCountLabel: b,
        testId: `chatgpt-citation`,
      })),
      (t[35] = h),
      (t[36] = y),
      (t[37] = b),
      (t[38] = M),
      (t[39] = F),
      (t[40] = I),
      (t[41] = L),
      (t[42] = z),
      (t[43] = U),
      (t[44] = W),
      (t[45] = G),
      (t[46] = K))
    : (K = t[46]);
  let q;
  return (
    t[47] !== v ||
    t[48] !== x ||
    t[49] !== S ||
    t[50] !== C ||
    t[51] !== w ||
    t[52] !== E ||
    t[53] !== O ||
    t[54] !== k ||
    t[55] !== A ||
    t[56] !== j ||
    t[57] !== N ||
    t[58] !== K
      ? ((q = (0, H.jsx)(v, {
          interactive: x,
          keyboardNavigation: S,
          onOpenChange: C,
          sideOffset: w,
          tooltipBodyClassName: E,
          tooltipContent: O,
          tooltipMaxWidth: k,
          align: A,
          side: j,
          variant: N,
          children: K,
        })),
        (t[47] = v),
        (t[48] = x),
        (t[49] = S),
        (t[50] = C),
        (t[51] = w),
        (t[52] = E),
        (t[53] = O),
        (t[54] = k),
        (t[55] = A),
        (t[56] = j),
        (t[57] = N),
        (t[58] = K),
        (t[59] = q))
      : (q = t[59]),
    q
  );
}
function te(e) {
  return [e.label, e.title, e.url, e.snippet];
}
function ne(e) {
  let r = (0, B.c)(41),
    { currentSourceIndex: i, onClick: a, setCurrentSourceIndex: o, sources: s } = e,
    l = n(),
    u = (0, V.useContext)(T),
    d = s[i] ?? s[0];
  if (d == null) return null;
  let f = s.length > 1,
    p;
  r[0] !== l || r[1] !== d.pubDate
    ? ((p =
        d.pubDate == null
          ? null
          : l.formatDate(d.pubDate * 1e3, { year: `numeric`, month: `long`, day: `numeric` })),
      (r[0] = l),
      (r[1] = d.pubDate),
      (r[2] = p))
    : (p = r[2]);
  let m = p,
    h;
  r[3] !== f || r[4] !== o || r[5] !== s.length
    ? ((h = (e) => {
        f &&
          (e.key === `ArrowLeft` && (e.preventDefault(), o((e) => L(e, s.length, -1))),
          e.key === `ArrowRight` && (e.preventDefault(), o((e) => L(e, s.length, 1))));
      }),
      (r[3] = f),
      (r[4] = o),
      (r[5] = s.length),
      (r[6] = h))
    : (h = r[6]);
  let g;
  r[7] !== i || r[8] !== f || r[9] !== l || r[10] !== o || r[11] !== s.length
    ? ((g = f
        ? (0, H.jsxs)(`div`, {
            className: `flex h-9 items-center justify-between gap-1.5`,
            children: [
              (0, H.jsxs)(`div`, {
                className: `mx-1.5 flex gap-1 text-secondary`,
                children: [
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    className: `h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                    "aria-label": l.formatMessage({
                      id: `chatgpt.citation.hover.previousSource`,
                      defaultMessage: `Previous source`,
                      description: `Accessible label for a button that moves to the previous web citation source in a citation hover carousel`,
                    }),
                    onClick: () => {
                      o((e) => L(e, s.length, -1));
                    },
                    children: (0, H.jsx)(b, { className: `icon-sm m-auto` }),
                  }),
                  (0, H.jsx)(`button`, {
                    type: `button`,
                    className: `h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                    "aria-label": l.formatMessage({
                      id: `chatgpt.citation.hover.nextSource`,
                      defaultMessage: `Next source`,
                      description: `Accessible label for a button that moves to the next web citation source in a citation hover carousel`,
                    }),
                    onClick: () => {
                      o((e) => L(e, s.length, 1));
                    },
                    children: (0, H.jsx)(b, { className: `icon-sm m-auto rotate-180` }),
                  }),
                ],
              }),
              (0, H.jsx)(`span`, {
                className: `mx-3.5 text-tertiary`,
                children: (0, H.jsx)(t, {
                  id: `chatgpt.citation.hover.sourcePosition`,
                  defaultMessage: `{currentSourceNumber}/{sourceCount}`,
                  description: `Position label for the active source in a web citation hover carousel`,
                  values: { currentSourceNumber: i + 1, sourceCount: s.length },
                }),
              }),
            ],
          })
        : null),
      (r[7] = i),
      (r[8] = f),
      (r[9] = l),
      (r[10] = o),
      (r[11] = s.length),
      (r[12] = g))
    : (g = r[12]);
  let v;
  r[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = c(
        `flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none`,
        `text-default focus-visible:ring-2 focus-visible:ring-ring`,
      )),
      (r[13] = v))
    : (v = r[13]);
  let y = d.href,
    x = u === `restricted`,
    S;
  r[14] === d ? (S = r[15]) : ((S = z(d)), (r[14] = d), (r[15] = S));
  let C = u !== `restricted`,
    w;
  r[16] !== d.href || r[17] !== C
    ? ((w = (0, H.jsx)(_, { href: d.href, className: `h-4 w-4 shrink-0 text-current`, loadRemote: C })),
      (r[16] = d.href),
      (r[17] = C),
      (r[18] = w))
    : (w = r[18]);
  let E;
  r[19] === d.label
    ? (E = r[20])
    : ((E = (0, H.jsx)(`span`, { className: `truncate text-default`, children: d.label })),
      (r[19] = d.label),
      (r[20] = E));
  let D;
  r[21] !== E || r[22] !== w
    ? ((D = (0, H.jsxs)(`span`, { className: `flex min-w-0 items-center gap-1.5`, children: [w, E] })),
      (r[21] = E),
      (r[22] = w),
      (r[23] = D))
    : (D = r[23]);
  let O;
  r[24] === d.title
    ? (O = r[25])
    : ((O = (0, H.jsx)(`span`, {
        className: `line-clamp-2 text-sm leading-5 font-medium break-words text-default`,
        children: d.title,
      })),
      (r[24] = d.title),
      (r[25] = O));
  let k;
  r[26] !== m || r[27] !== d.snippet
    ? ((k =
        m != null || d.snippet
          ? (0, H.jsx)(`span`, {
              className: `line-clamp-2 text-sm leading-5 break-words text-secondary`,
              children:
                m != null && d.snippet
                  ? (0, H.jsx)(t, {
                      id: `chatgpt.citation.hover.publicationSummary`,
                      defaultMessage: `{date} — {snippet}`,
                      description: `Publication metadata below the article title in a web citation popup. Date is the formatted publication date; snippet is the source-provided summary. Both values are present, and the combined text is limited to two visible lines.`,
                      values: { date: m, snippet: d.snippet },
                    })
                  : (m ?? d.snippet),
            })
          : null),
      (r[26] = m),
      (r[27] = d.snippet),
      (r[28] = k))
    : (k = r[28]);
  let A;
  r[29] !== a || r[30] !== d.href || r[31] !== D || r[32] !== O || r[33] !== k || r[34] !== x || r[35] !== S
    ? ((A = (0, H.jsxs)(j, {
        className: v,
        href: y,
        initiator: `markdown_link_click`,
        onClick: a,
        requiresConfirmation: x,
        "aria-label": S,
        children: [D, O, k],
      })),
      (r[29] = a),
      (r[30] = d.href),
      (r[31] = D),
      (r[32] = O),
      (r[33] = k),
      (r[34] = x),
      (r[35] = S),
      (r[36] = A))
    : (A = r[36]);
  let M;
  return (
    r[37] !== A || r[38] !== h || r[39] !== g
      ? ((M = (0, H.jsxs)(`div`, {
          className: `flex w-[20rem] max-w-[calc(100vw-16px)] flex-col overflow-hidden text-start text-xs font-normal`,
          role: `presentation`,
          onKeyDown: h,
          tabIndex: -1,
          children: [g, A],
        })),
        (r[37] = A),
        (r[38] = h),
        (r[39] = g),
        (r[40] = M))
      : (M = r[40]),
    M
  );
}
function re(e) {
  if (typeof e != `string`) return 0;
  let t = Number(e);
  return Number.isInteger(t) && t > 0 ? t : 0;
}
function ie(e) {
  return `+${e}`;
}
function L(e, t, n) {
  return (e + n + t) % t;
}
function ae({ label: e, supportingSourcesLabel: t, title: n, url: r }) {
  let i = [n != null && n !== e ? `${e}: ${n}` : e, r];
  return (t != null && i.push(t), i.join(`, `));
}
function R(e, t) {
  let n = [];
  for (let t of e) {
    let e = r(t.url);
    e != null && n.push({ ...t, href: e });
  }
  return n.length > 0 ? n : [t];
}
function z(e) {
  return [e.title != null && e.title !== e.label ? `${e.label}: ${e.title}` : e.label, e.url].join(`, `);
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = f()), S(), a(), (V = m()), l(), O(), A(), x(), s(), h(), i(), E(), F(), (H = p()));
  }))();
}
function W(e) {
  let t = (0, Z.c)(7),
    { isTerminalInline: n, reference: r } = e;
  switch (y(r)) {
    case `inline`: {
      let e;
      return (
        t[0] !== n || t[1] !== r
          ? ((e = (0, Q.jsx)(G, { isTerminalInline: n, reference: r })), (t[0] = n), (t[1] = r), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `block`: {
      let e;
      return (t[3] === r ? (e = t[4]) : ((e = (0, Q.jsx)(K, { reference: r })), (t[3] = r), (t[4] = e)), e);
    }
    case `alt`: {
      let e;
      return (t[5] === r ? (e = t[6]) : ((e = (0, Q.jsx)(J, { reference: r })), (t[5] = r), (t[6] = e)), e);
    }
    case `hidden`:
      return null;
  }
}
function G(e) {
  let t = (0, Z.c)(18),
    { isTerminalInline: n, reference: r } = e,
    i = r.alt;
  if (r.type === `alt_text` && r.render_as === `latex` && typeof i == `string` && i.trim().length > 0) {
    let e;
    t[0] === i ? (e = t[1]) : ((e = i.trim()), (t[0] = i), (t[1] = e));
    let n = e,
      r;
    return (
      t[2] === n
        ? (r = t[3])
        : ((r = (0, Q.jsx)(
            o,
            { token: { display: !1, raw: n, text: n, type: `math` } },
            `chatgpt-latex-alt-text`,
          )),
          (t[2] = n),
          (t[3] = r)),
      r
    );
  }
  let a;
  t[4] === r ? (a = t[5]) : ((a = C(r)), (t[4] = r), (t[5] = a));
  let s = a,
    c;
  t[6] === r ? (c = t[7]) : ((c = v(r)), (t[6] = r), (t[7] = c));
  let l = c;
  if (l == null) {
    let e;
    return (t[8] === r ? (e = t[9]) : ((e = (0, Q.jsx)(J, { reference: r })), (t[8] = r), (t[9] = e)), e);
  }
  if (s == null) {
    let e;
    return (
      t[10] === l
        ? (e = t[11])
        : ((e = (0, Q.jsx)(`span`, { className: `text-secondary`, children: l })), (t[10] = l), (t[11] = e)),
      e
    );
  }
  let u;
  t[12] !== l || t[13] !== s
    ? ((u = { label: l, title: l, url: s }), (t[12] = l), (t[13] = s), (t[14] = u))
    : (u = t[14]);
  let d;
  return (
    t[15] !== n || t[16] !== u
      ? ((d = (0, Q.jsx)(I, { attributes: u, isTerminalInline: n })), (t[15] = n), (t[16] = u), (t[17] = d))
      : (d = t[17]),
    d
  );
}
function K(e) {
  let t = (0, Z.c)(37),
    { reference: n } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = v(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = w(n)), (t[2] = n), (t[3] = o));
  let s = o,
    c;
  t[4] === n ? (c = t[5]) : ((c = M(n)), (t[4] = n), (t[5] = c));
  let l = c,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (t[6] !== l || t[7] !== n || t[8] !== s || t[9] !== a) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = X(n);
      if (a == null && s == null && l == null && e.length === 0) {
        d = null;
        break bb0;
      }
      let i;
      if (t[18] !== n) {
        let e = C(n);
        ((i = e == null ? null : r(e)), (t[18] = n), (t[19] = i));
      } else i = t[19];
      ((u = i),
        (f = `my-3 max-w-[36rem] rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default`),
        (p = `chatgpt-content-reference-card`),
        t[20] === a
          ? (m = t[21])
          : ((m =
              a == null ? null : (0, Q.jsx)(`div`, { className: `font-medium text-default`, children: a })),
            (t[20] = a),
            (t[21] = m)),
        t[22] === s
          ? (h = t[23])
          : ((h =
              s == null
                ? null
                : (0, Q.jsx)(`div`, { className: `mt-1 line-clamp-2 text-secondary`, children: s })),
            (t[22] = s),
            (t[23] = h)),
        t[24] !== l || t[25] !== a
          ? ((g =
              l == null || l === a
                ? null
                : (0, Q.jsx)(`div`, { className: `mt-1 line-clamp-2 text-secondary`, children: l })),
            (t[24] = l),
            (t[25] = a),
            (t[26] = g))
          : (g = t[26]),
        (_ =
          e.length === 0
            ? null
            : (0, Q.jsx)(`div`, { className: `mt-2 flex flex-col gap-1`, children: e.map(q) })));
    }
    ((t[6] = l),
      (t[7] = n),
      (t[8] = s),
      (t[9] = a),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _));
  } else
    ((u = t[10]), (d = t[11]), (f = t[12]), (p = t[13]), (m = t[14]), (h = t[15]), (g = t[16]), (_ = t[17]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let y;
  t[27] !== f || t[28] !== p || t[29] !== m || t[30] !== h || t[31] !== g || t[32] !== _
    ? ((y = (0, Q.jsxs)(`div`, { className: f, "data-testid": p, children: [m, h, g, _] })),
      (t[27] = f),
      (t[28] = p),
      (t[29] = m),
      (t[30] = h),
      (t[31] = g),
      (t[32] = _),
      (t[33] = y))
    : (y = t[33]);
  let b = y;
  if (u == null) return b;
  let x;
  return (
    t[34] !== b || t[35] !== u
      ? ((x = (0, Q.jsx)(Y, { href: u, children: b })), (t[34] = b), (t[35] = u), (t[36] = x))
      : (x = t[36]),
    x
  );
}
function q(e, t) {
  return (0, Q.jsx)(`div`, { className: `truncate`, children: e }, `${e}-${String(t)}`);
}
function J(e) {
  let t = (0, Z.c)(4),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = M(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = i == null ? null : (0, Q.jsx)(Q.Fragment, { children: i })), (t[2] = i), (t[3] = a)),
    a
  );
}
function Y(e) {
  let t = (0, Z.c)(3),
    { children: n, href: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Q.jsx)(N, {
          className: `block max-w-fit cursor-interaction rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring`,
          href: r,
          initiator: `markdown_link_click`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function X(e) {
  return (Array.isArray(e.items) ? e.items : [])
    .map((e) => {
      if (typeof e != `object` || !e) return null;
      let t = `title` in e ? e.title : null,
        n = `name` in e ? e.name : null;
      return typeof t == `string` && t.trim().length > 0
        ? t
        : typeof n == `string` && n.trim().length > 0
          ? n
          : null;
    })
    .filter((e) => e != null)
    .slice(0, 4);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = f()), k(), U(), u(), i(), P(), (Q = p()));
  }))();
}
export { $ as a, G as i, W as n, I as o, K as r, U as s, J as t };
//# sourceMappingURL=fallback-5d67e3271b11.js.map
