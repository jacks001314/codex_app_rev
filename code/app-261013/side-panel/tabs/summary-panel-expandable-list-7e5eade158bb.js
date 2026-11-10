import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  BV as r,
  Hh as i,
  IDt as a,
  Mz as o,
  Nz as s,
  TJ as c,
  Vh as l,
  XD as u,
  YD as d,
  _Mt as f,
  cz as p,
  gMt as m,
  jDt as h,
  sz as g,
  t3 as _,
  tMt as v,
  vzt as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1 as S,
  Q1 as C,
  a1 as w,
  e0 as T,
  i1 as E,
  xPn as D,
  yPn as O,
} from "./app-initial-5851df3f6cb1.js";
function k(e) {
  let t = (0, B.c)(24),
    n,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]))
    : (({ children: n, className: i, disabled: s, interactive: c, multiline: l, ref: o, tone: u, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  let d = s !== void 0 && s,
    f = c !== void 0 && c,
    p = l !== void 0 && l,
    h = u === void 0 ? `default` : u,
    g = d || void 0,
    _ = J[h],
    v = !d && f && W,
    y = d && `cursor-not-allowed text-tertiary`,
    b;
  t[9] !== i || t[10] !== _ || t[11] !== v || t[12] !== y
    ? ((b = m(U, _, v, y, i)), (t[9] = i), (t[10] = _), (t[11] = v), (t[12] = y), (t[13] = b))
    : (b = t[13]);
  let x = p || void 0,
    S;
  t[14] === f
    ? (S = t[15])
    : ((S =
        f &&
        (0, H.jsx)(r, { className: `hidden text-tertiary group-data-[variant=card]/summary-card:block` })),
      (t[14] = f),
      (t[15] = S));
  let C;
  return (
    t[16] !== n || t[17] !== a || t[18] !== o || t[19] !== x || t[20] !== S || t[21] !== g || t[22] !== b
      ? ((C = (0, H.jsxs)(`div`, {
          ...a,
          "aria-disabled": g,
          className: b,
          "data-slot": `thread-summary-panel-item`,
          "data-multiline": x,
          ref: o,
          children: [n, S],
        })),
        (t[16] = n),
        (t[17] = a),
        (t[18] = o),
        (t[19] = x),
        (t[20] = S),
        (t[21] = g),
        (t[22] = b),
        (t[23] = C))
      : (C = t[23]),
    C
  );
}
function A(e) {
  let t = (0, B.c)(36),
    n,
    i,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    h;
  t[0] === e
    ? ((n = t[1]),
      (i = t[2]),
      (o = t[3]),
      (s = t[4]),
      (c = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (h = t[11]))
    : (({
        children: n,
        className: i,
        disabled: c,
        interaction: l,
        multiline: u,
        ref: s,
        showChevron: d,
        tone: f,
        type: p,
        unread: h,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = h));
  let g = c !== void 0 && c,
    _ = l === void 0 ? `background` : l,
    v = u !== void 0 && u,
    y = d === void 0 || d,
    b = f === void 0 ? `default` : f,
    x = p === void 0 ? `button` : p,
    S = h !== void 0 && h,
    C = (0, V.useId)(),
    w;
  t[12] !== o || t[13] !== S || t[14] !== C
    ? ((w = S ? [o[`aria-describedby`], C].filter(Boolean).join(` `) : o[`aria-describedby`]),
      (t[12] = o),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w))
    : (w = t[15]);
  let T = w,
    E = !g && G[_],
    D = J[b],
    O;
  t[16] !== i || t[17] !== D || t[18] !== E
    ? ((O = m(U, E, K, `disabled:cursor-not-allowed disabled:text-tertiary`, D, i)),
      (t[16] = i),
      (t[17] = D),
      (t[18] = E),
      (t[19] = O))
    : (O = t[19]);
  let k = v || void 0,
    A;
  t[20] !== S || t[21] !== C
    ? ((A = S
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(`span`, {
                "aria-hidden": !0,
                className: `h-1.5 w-1.5 shrink-0 rounded-full bg-blue`,
              }),
              (0, H.jsx)(`span`, {
                id: C,
                className: `sr-only`,
                children: (0, H.jsx)(a, {
                  id: `sidebar.navItem.unread`,
                  defaultMessage: `Unread updates`,
                  description: `Accessible description for a navigation item with unread updates`,
                }),
              }),
            ],
          })
        : null),
      (t[20] = S),
      (t[21] = C),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] === y
    ? (j = t[24])
    : ((j =
        y &&
        (0, H.jsx)(r, { className: `hidden text-tertiary group-data-[variant=card]/summary-card:block` })),
      (t[23] = y),
      (t[24] = j));
  let M;
  return (
    t[25] !== n ||
    t[26] !== T ||
    t[27] !== g ||
    t[28] !== o ||
    t[29] !== s ||
    t[30] !== O ||
    t[31] !== k ||
    t[32] !== A ||
    t[33] !== j ||
    t[34] !== x
      ? ((M = (0, H.jsxs)(`button`, {
          ...o,
          "aria-describedby": T,
          className: O,
          "data-slot": `thread-summary-panel-item-button`,
          "data-multiline": k,
          disabled: g,
          ref: s,
          type: x,
          children: [n, A, j],
        })),
        (t[25] = n),
        (t[26] = T),
        (t[27] = g),
        (t[28] = o),
        (t[29] = s),
        (t[30] = O),
        (t[31] = k),
        (t[32] = A),
        (t[33] = j),
        (t[34] = x),
        (t[35] = M))
      : (M = t[35]),
    M
  );
}
function j(e) {
  let t = (0, B.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, tone: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = J[i === void 0 ? `default` : i],
    o;
  t[4] !== n || t[5] !== a
    ? ((o = m(U, W, K, a, `no-underline`, n)), (t[4] = n), (t[5] = a), (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, H.jsx)(O, { ...r, className: o, "data-slot": `thread-summary-panel-item-link` })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function M(e) {
  let t = (0, B.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, type: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === void 0 ? `button` : a,
    s;
  t[5] === r
    ? (s = t[6])
    : ((s = m(
        `flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0`,
        K,
        r,
      )),
      (t[5] = r),
      (t[6] = s));
  let c;
  return (
    t[7] !== n || t[8] !== i || t[9] !== s || t[10] !== o
      ? ((c = (0, H.jsx)(`button`, {
          ...i,
          className: s,
          "data-slot": `thread-summary-panel-item-trigger`,
          type: o,
          children: n,
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = s),
        (t[10] = o),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function ee(e) {
  let t = (0, B.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, density: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === r
    ? (o = t[6])
    : ((o = m(
        `relative z-10 flex min-w-0 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0 group-data-[variant=card]/summary-card:mx-0 group-data-[variant=card]/summary-card:gap-0 group-data-[variant=card]/summary-card:px-0`,
        `group/summary-row-density`,
        r,
      )),
      (t[5] = r),
      (t[6] = o));
  let s;
  return (
    t[7] !== n || t[8] !== i || t[9] !== a || t[10] !== o
      ? ((s = (0, H.jsx)(`div`, {
          ...a,
          className: o,
          "data-slot": `thread-summary-panel-item-group`,
          "data-summary-row-density": i,
          children: n,
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s))
      : (s = t[11]),
    s
  );
}
function te(e) {
  let t = (0, B.c)(15),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, variant: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === void 0 ? `glyph` : a,
    s = X[o],
    c = Y[o],
    l;
  t[5] !== r || t[6] !== c
    ? ((l = m(
        `me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4`,
        c,
        r,
      )),
      (t[5] = r),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== n || t[9] !== s
    ? ((u =
        s == null
          ? n
          : (0, H.jsx)(`span`, {
              className: m(`flex shrink-0 items-center justify-center`, s),
              children: n,
            })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== i || t[12] !== l || t[13] !== u
      ? ((d = (0, H.jsx)(`span`, {
          ...i,
          className: l,
          "data-slot": `thread-summary-panel-item-leading`,
          children: u,
        })),
        (t[11] = i),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function N(e) {
  let t = (0, B.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, type: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === void 0 ? `button` : a,
    s;
  t[5] === r
    ? (s = t[6])
    : ((s = m(
        `flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring [&>img]:size-4 [&>svg]:size-4`,
        r,
      )),
      (t[5] = r),
      (t[6] = s));
  let c;
  return (
    t[7] !== n || t[8] !== i || t[9] !== s || t[10] !== o
      ? ((c = (0, H.jsx)(`button`, {
          ...i,
          className: s,
          "data-slot": `thread-summary-panel-item-avatar-button`,
          type: o,
          children: n,
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = s),
        (t[10] = o),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function ne(e) {
  let t = (0, B.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r
    ? (a = t[5])
    : ((a = m(`flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4`, r)),
      (t[4] = r),
      (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, H.jsx)(`span`, {
          ...i,
          className: a,
          "data-slot": `thread-summary-panel-item-avatar-group`,
          children: n,
        })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function re(e) {
  let t = (0, B.c)(18),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ children: n, className: r, description: i, truncate: o, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s = o === void 0 || o,
    c;
  t[6] === r
    ? (c = t[7])
    : ((c = m(
        `min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row`,
        r,
      )),
      (t[6] = r),
      (t[7] = c));
  let l;
  t[8] !== n || t[9] !== s
    ? ((l = s ? (0, H.jsx)(E, { animateOnGroupHover: !0, children: n }) : n),
      (t[8] = n),
      (t[9] = s),
      (t[10] = l))
    : (l = t[10]);
  let u;
  t[11] !== a || t[12] !== c || t[13] !== l
    ? ((u = (0, H.jsx)(`span`, {
        ...a,
        className: c,
        "data-slot": `thread-summary-panel-item-label`,
        children: l,
      })),
      (t[11] = a),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let d = u,
    f;
  return (
    t[15] !== i || t[16] !== d
      ? ((f =
          i == null
            ? d
            : (0, H.jsxs)(`span`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0`,
                children: [
                  d,
                  (0, H.jsx)(P, {
                    children: (0, H.jsx)(`span`, { className: `text-fade-truncate`, children: i }),
                  }),
                ],
              })),
        (t[15] = i),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function P(e) {
  let t = (0, B.c)(22),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({ children: n, className: r, tone: a, truncate: o, variant: s, visibility: c, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l = a === void 0 ? `muted` : a,
    u = o !== void 0 && o,
    d = s === void 0 ? `text` : s,
    f = c === void 0 ? `always` : c,
    p = u ? `max-w-1/2 min-w-0 shrink` : `shrink-0`,
    h = Z[l],
    g = Q[d],
    _ =
      f === `interaction` &&
      `opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100`,
    v =
      f === `rest` &&
      `group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0`,
    y;
  t[8] !== r || t[9] !== p || t[10] !== h || t[11] !== g || t[12] !== _ || t[13] !== v
    ? ((y = m(
        `flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row`,
        p,
        h,
        g,
        _,
        v,
        r,
      )),
      (t[8] = r),
      (t[9] = p),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== n || t[16] !== u
    ? ((b = u ? (0, H.jsx)(`span`, { className: `text-fade-truncate`, children: n }) : n),
      (t[15] = n),
      (t[16] = u),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== i || t[19] !== y || t[20] !== b
      ? ((x = (0, H.jsx)(`span`, {
          ...i,
          className: y,
          "data-slot": `thread-summary-panel-item-meta`,
          children: b,
        })),
        (t[18] = i),
        (t[19] = y),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function F() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(P, { variant: `icon`, children: (0, H.jsx)(d, {}) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function I(e) {
  let t = (0, B.c)(30),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]))
    : (({
        align: c,
        placement: l,
        children: n,
        className: r,
        visibility: u,
        onClick: i,
        onKeyDown: a,
        onPointerDown: o,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u));
  let d = c === void 0 ? `content` : c,
    f = l === void 0 ? `inline` : l,
    p = u === void 0 ? `always` : u,
    h = d === `section-actions` && `-me-1.5`,
    g = d === `preview` && `me-2 w-15 justify-center`,
    _ = f === `overlay` && `absolute inset-y-0 end-0 my-auto`,
    v;
  t[10] !== r || t[11] !== f || t[12] !== h || t[13] !== g || t[14] !== _ || t[15] !== p
    ? ((v = m(
        `flex h-5 shrink-0 items-center`,
        h,
        g,
        _,
        p === `interaction` && [
          `pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100`,
          f === `inline` && `pointer-coarse:pointer-events-auto pointer-coarse:opacity-100`,
        ],
        r,
      )),
      (t[10] = r),
      (t[11] = f),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = p),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] === i
    ? (y = t[18])
    : ((y = (e) => {
        (e.stopPropagation(), i?.(e));
      }),
      (t[17] = i),
      (t[18] = y));
  let b;
  t[19] === a
    ? (b = t[20])
    : ((b = (e) => {
        (e.stopPropagation(), a?.(e));
      }),
      (t[19] = a),
      (t[20] = b));
  let x;
  t[21] === o
    ? (x = t[22])
    : ((x = (e) => {
        (e.stopPropagation(), o?.(e));
      }),
      (t[21] = o),
      (t[22] = x));
  let S;
  return (
    t[23] !== n || t[24] !== s || t[25] !== x || t[26] !== v || t[27] !== y || t[28] !== b
      ? ((S = (0, H.jsx)(`span`, {
          ...s,
          className: v,
          "data-slot": `thread-summary-panel-item-actions`,
          role: `presentation`,
          onClick: y,
          onKeyDown: b,
          onPointerDown: x,
          children: n,
        })),
        (t[23] = n),
        (t[24] = s),
        (t[25] = x),
        (t[26] = v),
        (t[27] = y),
        (t[28] = b),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function L(e) {
  let t = (0, B.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, H.jsx)(z, { className: `-me-1.5`, ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function ie(e) {
  let t = (0, B.c)(17),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, label: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === r
    ? (o = t[6])
    : ((o = m(
        `-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default`,
        K,
        r,
      )),
      (t[5] = r),
      (t[6] = o));
  let s;
  t[7] === n ? (s = t[8]) : ((s = (0, H.jsx)(`span`, { className: q, children: n })), (t[7] = n), (t[8] = s));
  let c;
  t[9] !== i || t[10] !== a || t[11] !== o || t[12] !== s
    ? ((c = (0, H.jsx)(`a`, {
        ...a,
        "aria-label": i,
        className: o,
        "data-slot": `thread-summary-panel-item-action-link`,
        children: s,
      })),
      (t[9] = i),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = c))
    : (c = t[13]);
  let l;
  return (
    t[14] !== i || t[15] !== c
      ? ((l = (0, H.jsx)(g, { tooltipContent: i, delayOpen: !0, children: c })),
        (t[14] = i),
        (t[15] = c),
        (t[16] = l))
      : (l = t[16]),
    l
  );
}
function R(e) {
  let t = (0, B.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = m(`ms-auto flex items-center gap-0.5`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, H.jsx)(`span`, {
          ...i,
          className: a,
          "data-slot": `thread-summary-panel-section-actions`,
          children: n,
        })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function z(e) {
  let t = (0, B.c)(24),
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]))
    : (({
        children: r,
        className: i,
        color: l,
        disableTooltip: a,
        label: o,
        shortcut: c,
        tooltipContent: u,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  let d = l === void 0 ? `ghost` : l,
    f = u === void 0 ? o : u,
    p;
  t[9] === i ? (p = t[10]) : ((p = m(`size-6`, K, i)), (t[9] = i), (t[10] = p));
  let h;
  t[11] === r
    ? (h = t[12])
    : ((h = (0, H.jsx)(`span`, { className: q, children: r })), (t[11] = r), (t[12] = h));
  let _;
  t[13] !== d || t[14] !== o || t[15] !== s || t[16] !== p || t[17] !== h
    ? ((_ = (0, H.jsx)(n, {
        ...s,
        "aria-label": o,
        className: p,
        color: d,
        "data-slot": `thread-summary-panel-icon-button`,
        focusRing: `inset`,
        size: `icon`,
        uniform: !0,
        children: h,
      })),
      (t[13] = d),
      (t[14] = o),
      (t[15] = s),
      (t[16] = p),
      (t[17] = h),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== a || t[20] !== c || t[21] !== _ || t[22] !== f
      ? ((v = (0, H.jsx)(g, { disabled: a, tooltipContent: f, shortcut: c, delayOpen: !0, children: _ })),
        (t[19] = a),
        (t[20] = c),
        (t[21] = _),
        (t[22] = f),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function ae() {
  return (ae = e(() => {
    ((B = y()),
      f(),
      (V = x()),
      h(),
      _(),
      D(),
      c(),
      w(),
      p(),
      u(),
      (H = b()),
      (U = `group group/summary-panel-item relative isolate flex min-h-token-button-composer w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border`),
      (W = `cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-primary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none`),
      (G = { background: W, foreground: `cursor-interaction hover:text-default` }),
      (K = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`),
      (q = `icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full`),
      (J = {
        "conversation-summary": `text-text/40`,
        critical: `text-chart-red`,
        default: `text-default`,
        muted: `text-secondary`,
        tertiary: `text-tertiary`,
      }),
      (Y = {
        intrinsic: null,
        custom: `w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4`,
        glyph: `w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4`,
        preview: `icon-sm overflow-hidden rounded-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:[&>svg]:size-full`,
        status: `w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4`,
        thumbnail: null,
      }),
      (X = {
        intrinsic: null,
        custom: null,
        glyph: `icon-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&>*]:size-full [&_svg]:size-full`,
        preview: null,
        status: `icon-xs [&>*]:size-full [&_svg]:size-full`,
        thumbnail: `relative size-12 overflow-hidden rounded-xl bg-surface-secondary text-default`,
      }),
      (Z = { critical: `text-chart-red`, default: `text-default`, muted: `text-tertiary` }),
      (Q = {
        "action-preview": `min-w-token-button-composer justify-end overflow-hidden text-sm group-focus-within/summary-panel-item:w-token-button-composer group-hover/summary-panel-item:w-token-button-composer group-has-[[aria-expanded=true]]/summary-panel-item:w-token-button-composer`,
        icon: `icon-xs [&>*]:size-full [&_svg]:size-full`,
        text: `text-sm`,
      }));
  }))();
}
function oe(e) {
  let t = (0, le.c)(79),
    {
      children: r,
      empty: i,
      getKey: s,
      getNewItemPosition: c,
      isLoadingMore: u,
      items: d,
      listAriaLabel: f,
      listClassName: p,
      onVisibleItemsChange: h,
      onLoadMore: g,
      paginationButtonClassName: _,
      presentation: v,
      preserveExpandedOrder: y,
      renderFooter: b,
      renderPagination: x,
      visibleItemIncrement: w,
      visibleItemLimit: T,
    } = e,
    E = u !== void 0 && u,
    D = v === void 0 ? `summary` : v,
    O = y !== void 0 && y,
    k = T === void 0 ? fe : T,
    [j, M] = (0, de.useState)(k),
    [N, ne] = (0, de.useState)(null),
    P;
  if (t[0] !== N || t[1] !== s || t[2] !== c || t[3] !== d || t[4] !== O || t[5] !== j) {
    if (((P = d), O && N != null)) {
      let e;
      t[7] === s ? (e = t[8]) : ((e = (e, t) => ({ item: e, key: s(e, t) })), (t[7] = s), (t[8] = e));
      let n;
      t[9] !== N || t[10] !== c
        ? ((n = (e) => {
            let { item: t, key: n } = e;
            return N.get(n) ?? (c?.(t) === `end` ? 1 / 0 : -1);
          }),
          (t[9] = N),
          (t[10] = c),
          (t[11] = n))
        : (n = t[11]);
      let r = (0, ue.default)(d.map(e), n);
      if (
        ((P = r.map(ce)),
        r.length !== N.size ||
          r.some((e) => {
            let { key: t } = e;
            return !N.has(t);
          }))
      ) {
        ne(new Map(r.map(se)));
        let e;
        (t[12] !== N || t[13] !== j
          ? ((e = (e) => {
              let { key: t } = e;
              return (N.get(t) ?? 1 / 0) < j;
            }),
            (t[12] = N),
            (t[13] = j),
            (t[14] = e))
          : (e = t[14]),
          M(Math.max(j, r.findLastIndex(e) + 1)));
      }
    }
    ((t[0] = N), (t[1] = s), (t[2] = c), (t[3] = d), (t[4] = O), (t[5] = j), (t[6] = P));
  } else P = t[6];
  let F;
  t[15] !== P || t[16] !== j ? ((F = P.slice(0, j)), (t[15] = P), (t[16] = j), (t[17] = F)) : (F = t[17]);
  let I = F,
    L,
    ie;
  if (
    (t[18] !== h || t[19] !== I
      ? ((L = () => {
          h?.(I);
        }),
        (ie = [h, I]),
        (t[18] = h),
        (t[19] = I),
        (t[20] = L),
        (t[21] = ie))
      : ((L = t[20]), (ie = t[21])),
    (0, de.useEffect)(L, ie),
    d.length === 0 && g == null)
  )
    return i ?? null;
  let R = d.length > k || g != null,
    z = d.length - I.length,
    B = z === 0 && g == null,
    V = w ?? pe,
    H = g == null ? Math.min(z, V) : V,
    U;
  t[22] !== s ||
  t[23] !== z ||
  t[24] !== B ||
  t[25] !== E ||
  t[26] !== d.length ||
  t[27] !== g ||
  t[28] !== P ||
  t[29] !== O ||
  t[30] !== V ||
  t[31] !== k
    ? ((U = () => {
        E ||
          (O && ne(B ? null : new Map(P.map((e, t) => [s(e, t), t]))),
          M((e) => (B ? k : g == null ? Math.min(d.length, e + V) : e + V)),
          z < V && g?.());
      }),
      (t[22] = s),
      (t[23] = z),
      (t[24] = B),
      (t[25] = E),
      (t[26] = d.length),
      (t[27] = g),
      (t[28] = P),
      (t[29] = O),
      (t[30] = V),
      (t[31] = k),
      (t[32] = U))
    : (U = t[32]);
  let W = U,
    G;
  t[33] !== r || t[34] !== s || t[35] !== f || t[36] !== p || t[37] !== I
    ? ((G =
        f == null
          ? (0, $.jsx)(ee, {
              className: p,
              children: I.map((e, t) => (0, $.jsx)(de.Fragment, { children: r(e, t) }, s(e, t))),
            })
          : (0, $.jsx)(ee, {
              "aria-label": f,
              className: p,
              role: `list`,
              children: I.map((e, t) => (0, $.jsx)(`div`, { role: `listitem`, children: r(e, t) }, s(e, t))),
            })),
      (t[33] = r),
      (t[34] = s),
      (t[35] = f),
      (t[36] = p),
      (t[37] = I),
      (t[38] = G))
    : (G = t[38]);
  let K = G,
    q;
  t[39] !== b || t[40] !== I ? ((q = b?.(I)), (t[39] = b), (t[40] = I), (t[41] = q)) : (q = t[41]);
  let J;
  t[42] !== R || t[43] !== B || t[44] !== E || t[45] !== H || t[46] !== x || t[47] !== W
    ? ((J = R && x != null ? x({ nextRevealCount: H, isExpanded: B, isLoadingMore: E, onToggle: W }) : null),
      (t[42] = R),
      (t[43] = B),
      (t[44] = E),
      (t[45] = H),
      (t[46] = x),
      (t[47] = W),
      (t[48] = J))
    : (J = t[48]);
  let Y;
  t[49] !== R || t[50] !== B || t[51] !== E || t[52] !== D || t[53] !== x || t[54] !== W
    ? ((Y =
        R && x == null && D === `plain`
          ? (0, $.jsx)(S, {
              children: (0, $.jsx)(C, {
                alignment: `content`,
                disabled: E,
                onClick: W,
                children: B
                  ? (0, $.jsx)(a, {
                      id: `sidebarElectron.showLess`,
                      defaultMessage: `Show less`,
                      description: `Button label for restoring the initial item limit of an expanded sidebar list`,
                    })
                  : (0, $.jsx)(a, {
                      id: `sidebarElectron.showMore`,
                      defaultMessage: `Show more`,
                      description: `Button label for expanding a task list in the sidebar`,
                    }),
              }),
            })
          : null),
      (t[49] = R),
      (t[50] = B),
      (t[51] = E),
      (t[52] = D),
      (t[53] = x),
      (t[54] = W),
      (t[55] = Y))
    : (Y = t[55]);
  let X;
  t[56] !== R || t[57] !== B || t[58] !== E || t[59] !== D || t[60] !== x || t[61] !== W
    ? ((X =
        R && x == null && D === `card`
          ? (0, $.jsxs)(A, {
              disabled: E,
              onClick: W,
              children: [
                (0, $.jsx)(te, { variant: `custom`, children: (0, $.jsx)(o, { asset: l }) }),
                (0, $.jsx)(re, {
                  children: B
                    ? (0, $.jsx)(a, {
                        id: `codex.summaryPanel.card.showLess`,
                        defaultMessage: `Show less`,
                        description: `Collapse an expanded list in a profile card`,
                      })
                    : (0, $.jsx)(a, {
                        id: `codex.summaryPanel.card.showMore`,
                        defaultMessage: `Show more`,
                        description: `Expand a list in a profile card to show additional items`,
                      }),
                }),
              ],
            })
          : null),
      (t[56] = R),
      (t[57] = B),
      (t[58] = E),
      (t[59] = D),
      (t[60] = x),
      (t[61] = W),
      (t[62] = X))
    : (X = t[62]);
  let Z;
  t[63] !== R ||
  t[64] !== B ||
  t[65] !== E ||
  t[66] !== H ||
  t[67] !== _ ||
  t[68] !== D ||
  t[69] !== x ||
  t[70] !== W
    ? ((Z =
        R && x == null && D === `summary`
          ? (0, $.jsx)(n, {
              className: m(`!px-0 !py-0 text-tertiary hover:text-secondary`, _),
              color: `ghostMuted`,
              size: `default`,
              disabled: E,
              onClick: W,
              children: B
                ? (0, $.jsx)(a, {
                    id: `codex.localConversation.summaryPanelExpandableList.showLess`,
                    defaultMessage: `Show less`,
                    description: `Button label that collapses a long list in the conversation summary panel`,
                  })
                : (0, $.jsx)(a, {
                    id: `codex.localConversation.summaryPanelExpandableList.showMore`,
                    defaultMessage: `Show {count, number} more`,
                    description: `Button label that expands a long list in the conversation summary panel`,
                    values: { count: H },
                  }),
            })
          : null),
      (t[63] = R),
      (t[64] = B),
      (t[65] = E),
      (t[66] = H),
      (t[67] = _),
      (t[68] = D),
      (t[69] = x),
      (t[70] = W),
      (t[71] = Z))
    : (Z = t[71]);
  let Q;
  return (
    t[72] !== K || t[73] !== q || t[74] !== J || t[75] !== Y || t[76] !== X || t[77] !== Z
      ? ((Q = (0, $.jsxs)($.Fragment, { children: [K, q, J, Y, X, Z] })),
        (t[72] = K),
        (t[73] = q),
        (t[74] = J),
        (t[75] = Y),
        (t[76] = X),
        (t[77] = Z),
        (t[78] = Q))
      : (Q = t[78]),
    Q
  );
}
function se(e, t) {
  let { key: n } = e;
  return [n, t];
}
function ce(e) {
  let { item: t } = e;
  return t;
}
var le, ue, de, $, fe, pe;
function me() {
  return (me = e(() => {
    ((le = y()),
      i(),
      f(),
      (ue = t(v(), 1)),
      (de = x()),
      h(),
      _(),
      s(),
      T(),
      ae(),
      ($ = b()),
      (fe = 6),
      (pe = 50));
  }))();
}
export {
  M as _,
  L as a,
  N as c,
  F as d,
  ee as f,
  P as g,
  j as h,
  k as i,
  ne as l,
  te as m,
  me as n,
  ie as o,
  re as p,
  z as r,
  I as s,
  oe as t,
  A as u,
  R as v,
  ae as y,
};
//# sourceMappingURL=summary-panel-expandable-list-7e5eade158bb.js.map
