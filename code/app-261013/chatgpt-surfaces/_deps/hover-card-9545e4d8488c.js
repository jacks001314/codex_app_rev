import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fz as t,
  IDt as n,
  Pz as r,
  TJ as i,
  Vq as a,
  XA as o,
  YMt as s,
  ZA as c,
  _Mt as l,
  cz as u,
  gMt as d,
  gNt as f,
  jDt as p,
  lgt as m,
  rst as h,
  sz as g,
  vzt as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  HF as b,
  UF as x,
  Xl as S,
  Zl as C,
  _zt as w,
  gzt as T,
  hjt as E,
  mjt as D,
} from "./app-initial-5851df3f6cb1.js";
function O(e) {
  let r = (0, k.c)(14),
    { appId: i, showName: s } = e,
    c = s !== void 0 && s,
    l = (0, A.useContext)(S),
    u;
  r[0] === i ? (u = r[1]) : ((u = [i]), (r[0] = i), (r[1] = u));
  let d = l !== `restricted`,
    f;
  r[2] !== u || r[3] !== d
    ? ((f = { appIds: u, hostId: m, enabled: d }), (r[2] = u), (r[3] = d), (r[4] = f))
    : (f = r[4]);
  let { data: p } = E(f),
    h = p?.find((e) => e.id === i),
    g = t() ? (h?.iconUrlDark ?? h?.iconUrl) : h?.iconUrl,
    _ = g == null ? void 0 : o(g),
    v;
  r[5] !== l || r[6] !== _
    ? ((v =
        l !== `restricted` && _ != null
          ? (0, j.jsx)(T, { className: `size-4 shrink-0`, alt: ``, src: _, fallback: (0, j.jsx)(a, {}) }, _)
          : (0, j.jsx)(a, {})),
      (r[5] = l),
      (r[6] = _),
      (r[7] = v))
    : (v = r[7]);
  let y;
  r[8] !== h?.name || r[9] !== c
    ? ((y =
        c &&
        (h?.name ??
          (0, j.jsx)(n, {
            id: `mcpCitation.ehrSource`,
            defaultMessage: `EHR`,
            description: `Electronic health record source label on a chart citation preview`,
          }))),
      (r[8] = h?.name),
      (r[9] = c),
      (r[10] = y))
    : (y = r[10]);
  let b;
  return (
    r[11] !== v || r[12] !== y
      ? ((b = (0, j.jsxs)(j.Fragment, { children: [v, y] })), (r[11] = v), (r[12] = y), (r[13] = b))
      : (b = r[13]),
    b
  );
}
var k, A, j;
function M() {
  return (M = e(() => {
    ((k = _()), h(), (A = y()), p(), D(), i(), w(), c(), C(), r(), (j = v()));
  }))();
}
function N(e) {
  let t = (0, F.c)(19),
    {
      children: n,
      disabled: r,
      metadata: i,
      sourceAppId: a,
      followUp: o,
      keepOpen: s,
      openOnClick: c,
      closeOnTriggerClick: l,
    } = e,
    u = l === void 0 || l,
    d = s ? !0 : void 0,
    f = i.hoverCard != null,
    p = i.hoverCard != null,
    m = a != null,
    h = i.hoverCard == null ? void 0 : 150,
    _ = i.hoverCard == null ? void 0 : `start`,
    v = i.hoverCard == null ? void 0 : `bottom`,
    y = i.hoverCard == null ? void 0 : 6,
    b = i.hoverCard == null ? `tooltip` : `rich`,
    x;
  t[0] !== o || t[1] !== i || t[2] !== a
    ? ((x = i.hoverCard == null ? i.title : (0, L.jsx)(P, { metadata: i, sourceAppId: a, followUp: o })),
      (t[0] = o),
      (t[1] = i),
      (t[2] = a),
      (t[3] = x))
    : (x = t[3]);
  let S;
  return (
    t[4] !== n ||
    t[5] !== u ||
    t[6] !== r ||
    t[7] !== c ||
    t[8] !== b ||
    t[9] !== x ||
    t[10] !== d ||
    t[11] !== f ||
    t[12] !== p ||
    t[13] !== m ||
    t[14] !== h ||
    t[15] !== _ ||
    t[16] !== v ||
    t[17] !== y
      ? ((S = (0, L.jsx)(g, {
          open: d,
          openOnClick: c,
          closeOnTriggerClick: u,
          disabled: r,
          openOnFocusWithin: f,
          selectable: p,
          keyboardNavigation: m,
          delayDuration: h,
          align: _,
          side: v,
          sideOffset: y,
          variant: b,
          tooltipContent: x,
          children: n,
        })),
        (t[4] = n),
        (t[5] = u),
        (t[6] = r),
        (t[7] = c),
        (t[8] = b),
        (t[9] = x),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y),
        (t[18] = S))
      : (S = t[18]),
    S
  );
}
function P(e) {
  let t = (0, F.c)(43),
    { metadata: n, sourceAppId: r, followUp: i } = e,
    c = (0, I.useContext)(S),
    l;
  if (t[0] !== n.icons?.[0]) {
    let { data: e } = s.safeParse(n.icons?.[0]),
      r = e?.src;
    ((l = r == null ? void 0 : o(r)), (t[0] = n.icons?.[0]), (t[1] = l));
  } else l = t[1];
  let u = l,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, L.jsx)(a, {})), (t[2] = f)) : (f = t[2]);
  let p = f;
  if (c !== `restricted`) {
    if (n.url != null) {
      let e;
      (t[3] === n.url
        ? (e = t[4])
        : ((e = (0, L.jsx)(b, { href: n.url, className: `size-4` })), (t[3] = n.url), (t[4] = e)),
        (p = e));
    } else if (u != null) {
      let e = r == null && `dark:brightness-0 dark:invert`,
        n;
      t[5] === e
        ? (n = t[6])
        : ((n = d(`size-4 shrink-0 rounded-sm object-contain`, e)), (t[5] = e), (t[6] = n));
      let i;
      (t[7] !== u || t[8] !== n
        ? ((i = (0, L.jsx)(`img`, {
            alt: ``,
            className: n,
            draggable: !1,
            referrerPolicy: `no-referrer`,
            src: u,
          })),
          (t[7] = u),
          (t[8] = n),
          (t[9] = i))
        : (i = t[9]),
        (p = i));
    }
  }
  if (r != null) {
    let e;
    t[10] === r
      ? (e = t[11])
      : ((e = (0, L.jsx)(`div`, {
          className: `flex min-w-0 items-center gap-1.5 text-xs text-secondary`,
          children: (0, L.jsx)(O, { appId: r, showName: !0 }),
        })),
        (t[10] = r),
        (t[11] = e));
    let a = n.hoverCard?.title ?? n.title,
      o;
    t[12] === a
      ? (o = t[13])
      : ((o = (0, L.jsx)(`div`, { className: `line-clamp-2 font-medium break-words`, children: a })),
        (t[12] = a),
        (t[13] = o));
    let s;
    t[14] === n.hoverCard
      ? (s = t[15])
      : ((s =
          n.hoverCard?.subtitle != null &&
          (0, L.jsx)(`div`, {
            className: `line-clamp-2 break-words text-secondary`,
            children: n.hoverCard.subtitle,
          })),
        (t[14] = n.hoverCard),
        (t[15] = s));
    let c;
    t[16] !== n.hoverCard || t[17] !== n.title
      ? ((c =
          n.hoverCard?.body != null &&
          (0, L.jsx)(`div`, {
            className: d(
              `min-h-0 break-words text-secondary`,
              n.hoverCard.body.includes(`
`)
                ? `max-h-48 overflow-y-auto whitespace-pre-line`
                : `line-clamp-3`,
            ),
            role: `region`,
            "aria-label": n.title,
            tabIndex: n.hoverCard.body.includes(`
`)
              ? 0
              : void 0,
            children: n.hoverCard.body,
          })),
        (t[16] = n.hoverCard),
        (t[17] = n.title),
        (t[18] = c))
      : (c = t[18]);
    let l;
    return (
      t[19] !== i || t[20] !== e || t[21] !== o || t[22] !== s || t[23] !== c
        ? ((l = (0, L.jsxs)(`div`, {
            className: `flex w-80 max-w-full min-w-0 flex-col gap-1.5 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default`,
            children: [e, o, s, c, i],
          })),
          (t[19] = i),
          (t[20] = e),
          (t[21] = o),
          (t[22] = s),
          (t[23] = c),
          (t[24] = l))
        : (l = t[24]),
      l
    );
  }
  let m = n.hoverCard?.title ?? n.title,
    h;
  t[25] === m
    ? (h = t[26])
    : ((h = (0, L.jsx)(`div`, { className: `line-clamp-2 font-medium break-words`, children: m })),
      (t[25] = m),
      (t[26] = h));
  let g;
  t[27] === n.hoverCard
    ? (g = t[28])
    : ((g =
        n.hoverCard?.subtitle != null &&
        (0, L.jsx)(`div`, {
          className: `line-clamp-2 text-xs break-words text-secondary`,
          children: n.hoverCard.subtitle,
        })),
      (t[27] = n.hoverCard),
      (t[28] = g));
  let _;
  t[29] !== h || t[30] !== g
    ? ((_ = (0, L.jsxs)(`div`, { className: `shrink-0 pb-1`, children: [h, g] })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _))
    : (_ = t[31]);
  let v;
  t[32] === n.hoverCard
    ? (v = t[33])
    : ((v =
        n.hoverCard?.body != null &&
        (0, L.jsx)(`div`, {
          className: `min-h-0 overflow-hidden border-s-2 border-default ps-2`,
          children: (0, L.jsx)(`div`, {
            className: `line-clamp-8 break-words whitespace-pre-wrap`,
            children: n.hoverCard.body,
          }),
        })),
      (t[32] = n.hoverCard),
      (t[33] = v));
  let y;
  t[34] === n.title
    ? (y = t[35])
    : ((y = (0, L.jsx)(`div`, { className: `min-w-0 truncate`, children: n.title })),
      (t[34] = n.title),
      (t[35] = y));
  let x;
  t[36] !== p || t[37] !== y
    ? ((x = (0, L.jsxs)(`div`, {
        className: `flex min-w-0 shrink-0 items-center gap-2 text-secondary`,
        children: [p, y],
      })),
      (t[36] = p),
      (t[37] = y),
      (t[38] = x))
    : (x = t[38]);
  let C;
  return (
    t[39] !== _ || t[40] !== v || t[41] !== x
      ? ((C = (0, L.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2 p-3 text-start text-sm leading-5 font-normal whitespace-normal text-default`,
          children: [_, v, x],
        })),
        (t[39] = _),
        (t[40] = v),
        (t[41] = x),
        (t[42] = C))
      : (C = t[42]),
    C
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = _()), f(), l(), (I = y()), x(), i(), u(), c(), C(), M(), (L = v()));
  }))();
}
export { M as i, R as n, O as r, N as t };
//# sourceMappingURL=hover-card-9545e4d8488c.js.map
