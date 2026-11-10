import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  CPt as r,
  Cot as i,
  Cxt as a,
  DE as o,
  DV as s,
  EE as c,
  Ext as l,
  HG as u,
  HR as d,
  IDt as f,
  Ixt as p,
  MO as m,
  Pxt as h,
  Qot as g,
  RU as _,
  SPt as v,
  TJ as y,
  UR as b,
  VDt as x,
  Vxt as S,
  Xot as C,
  Yot as w,
  Zot as T,
  _Mt as E,
  _k as D,
  _xt as O,
  aD as k,
  cz as A,
  e3 as j,
  gMt as M,
  gk as N,
  hyt as P,
  iD as F,
  jDt as I,
  jO as L,
  lgt as R,
  nyt as z,
  rst as B,
  sz as ee,
  t3 as te,
  vzt as ne,
  wot as re,
  wxt as ie,
  xMt as ae,
  yzt as oe,
  zxt as se,
} from "./app-shared-bbfeca5e5737.js";
import {
  A0n as ce,
  ACn as le,
  Bcr as ue,
  C2 as de,
  Cit as V,
  Es as fe,
  Ftn as H,
  Fur as pe,
  Gdr as me,
  Icr as he,
  Itn as ge,
  JAr as _e,
  JPn as ve,
  K1n as ye,
  Kur as be,
  Nur as U,
  OPn as xe,
  Ocr as W,
  QAr as G,
  Rcr as Se,
  Scr as Ce,
  Tl as we,
  Ts as Te,
  US as Ee,
  Udr as K,
  WS as De,
  XPn as Oe,
  Xrt as ke,
  Ycr as Ae,
  _$n as je,
  alr as Me,
  bF as Ne,
  bl as Pe,
  eDr as q,
  elr as Fe,
  gOr as Ie,
  hOr as Le,
  htn as Re,
  hzt as ze,
  idr as Be,
  jCn as Ve,
  kPn as He,
  l2 as Ue,
  lit as J,
  mtn as We,
  mzt as Ge,
  nDr as Ke,
  no as qe,
  oFr as Je,
  pOr as Ye,
  q1n as Xe,
  r2 as Ze,
  ro as Qe,
  tDr as $e,
  w2 as et,
  wit as tt,
  xF as nt,
  yl as rt,
} from "./app-initial-5851df3f6cb1.js";
import { by as it, xy as at } from "./app-primary-fe8a450b3b04.js";
import {
  A as ot,
  D as st,
  M as ct,
  N as lt,
  O as ut,
  j as dt,
  k as ft,
  t as pt,
} from "./src-c65a930b3c0e.js";
import { n as mt, r as ht } from "./plugin-connector-setup-a797a3cdb718.js";
import { r as gt, t as _t } from "./plugin-connected-account-links-8dea8c830000.js";
import { r as vt, t as yt } from "./hooks-settings-route-8191acda142e.js";
import { n as bt, t as xt } from "./plugin-detail-settings-enabled-caa9d391daad.js";
import { n as St, t as Ct } from "./card-tile-a92df345e9ab.js";
import { n as wt } from "./plugin-settings-url-shared-a0d1dde5984d.js";
import { t as Tt } from "./plugin-settings-url-946196948d5f.js";
import { n as Et, t as Dt } from "./app-card-23a383c72dd0.js";
import { a as Ot, i as kt, n as At, r as jt, s as Mt, t as Nt } from "./plugin-origin-badge-1e1f880d2dac.js";
import { n as Pt, t as Ft } from "./empty-state-puzzle-piece-29c3e2d41acb.js";
import { n as It, t as Lt } from "./profile-lock-17cb9817089d.js";
import { n as Rt, t as zt } from "./plugin-disabled-reason-9ae34b32db06.js";
import { n as Bt, t as Vt } from "./plugin-description-a9a8252b63cb.js";
import { n as Ht, r as Ut, t as Wt } from "./detail-page-affba5a9d44d.js";
import {
  _ as Gt,
  a as Kt,
  c as qt,
  d as Jt,
  f as Yt,
  g as Xt,
  h as Zt,
  l as Qt,
  n as $t,
  o as en,
  s as tn,
  t as nn,
  u as rn,
} from "./skills-6b6661642f04.js";
function an(e) {
  let n = (0, on.c)(21),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ className: r, muted: a, ...i } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = a));
  let o = a !== void 0 && a,
    s,
    c;
  if (n[4] !== r || n[5] !== o || n[6] !== i) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: if (
      ((s = M(
        `h-8 min-w-0 items-center gap-1 rounded-full border ps-2 pe-3 py-0 text-sm leading-[18px] whitespace-nowrap select-none`,
        o ? `border-transparent bg-text/5 text-tertiary` : `border-default bg-surface`,
        i.as !== `span` &&
          (o
            ? `not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10`
            : `not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`),
        r,
      )),
      i.as === `span`)
    ) {
      let e;
      if (n[9] !== i) {
        let { as: t, ...r } = i;
        ((e = r), (n[9] = i), (n[10] = e));
      } else e = n[10];
      c = (0, sn.jsx)(`span`, { className: M(`inline-flex`, s), ...e });
      break bb0;
    }
    ((n[4] = r), (n[5] = o), (n[6] = i), (n[7] = s), (n[8] = c));
  } else ((s = n[7]), (c = n[8]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  if (i.as === `a`) {
    let e;
    if (n[11] !== i) {
      let { as: t, ...r } = i;
      ((e = r), (n[11] = i), (n[12] = e));
    } else e = n[12];
    let t;
    return (
      n[13] !== s || n[14] !== e
        ? ((t = (0, sn.jsx)(j, { className: s, ...e, unstyled: !0 })), (n[13] = s), (n[14] = e), (n[15] = t))
        : (t = n[15]),
      t
    );
  }
  let l;
  if (n[16] !== i) {
    let { as: e, ...t } = i;
    ((l = t), (n[16] = i), (n[17] = l));
  } else l = n[17];
  let u;
  return (
    n[18] !== l || n[19] !== s
      ? ((u = (0, sn.jsx)(t, { className: s, ...l, unstyled: !0 })), (n[18] = l), (n[19] = s), (n[20] = u))
      : (u = n[20]),
    u
  );
}
var on, sn;
function cn() {
  return (cn = e(() => {
    ((on = ne()), E(), te(), (sn = ae()));
  }))();
}
function ln(e) {
  let t = (0, gn.c)(63),
    { group: n, hostId: r } = e,
    i = x(),
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = { hostId: r, roots: void 0, resolveActiveRoots: !0 }), (t[0] = r), (t[1] = a));
  let { data: o } = ue(a),
    s;
  if (t[2] !== n.providers || t[3] !== o) {
    let e;
    (t[5] === o
      ? (e = t[6])
      : ((e = (e) => ({
          ...e,
          is_installed:
            o?.some((t) => {
              let { plugin: n } = t;
              return n.installed && (n.remotePluginId ?? n.shareContext?.remotePluginId) === e.plugin_id;
            }) ?? null,
        })),
        (t[5] = o),
        (t[6] = e)),
      (s = n.providers.map(e)),
      (t[2] = n.providers),
      (t[3] = o),
      (t[4] = s));
  } else s = t[4];
  let c = s,
    l = (0, Y.useId)(),
    u = (0, Y.useRef)(null),
    d = (0, Y.useRef)(null),
    p = (0, Y.useRef)(null),
    m = (0, Y.useRef)(null),
    [h, g] = (0, Y.useState)(c.length),
    [_, v] = (0, Y.useState)(!1),
    y;
  t[7] !== _ || t[8] !== c.length
    ? ((y = () => {
        let e = u.current,
          t = d.current;
        if (e == null || t == null) return;
        let n = () => {
          let n = Array.from(t.children),
            r = n.pop();
          if (!(r instanceof HTMLElement)) return;
          let i = mn(
            n.map(dn),
            e.clientWidth,
            r.offsetWidth,
            Number.parseFloat(getComputedStyle(e).columnGap) || 0,
          );
          if (!_) {
            let t = Array.from(e.querySelectorAll(`[data-dependency-chip]`)).findIndex(
              (t) => t === e.ownerDocument.activeElement,
            );
            (t >= i && t >= 0 && (m.current = `overflow`),
              i === c.length && e.ownerDocument.activeElement === p.current && (m.current = 0));
          }
          g(i);
        };
        n();
        let r = new ResizeObserver(n);
        r.observe(e);
        for (let e of t.children) r.observe(e);
        return () => r.disconnect();
      }),
      (t[7] = _),
      (t[8] = c.length),
      (t[9] = y))
    : (y = t[9]);
  let b;
  (t[10] !== _ || t[11] !== c ? ((b = [c, _]), (t[10] = _), (t[11] = c), (t[12] = b)) : (b = t[12]),
    (0, Y.useLayoutEffect)(y, b));
  let S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        let e = m.current;
        ((m.current = null),
          e === `overflow`
            ? p.current?.focus()
            : e != null &&
              (
                Array.from(u.current?.querySelectorAll(`[data-dependency-chip]`) ?? [])[e] ??
                p.current ??
                u.current
              )?.focus());
      }),
      (t[13] = S))
    : (S = t[13]);
  let C;
  (t[14] !== _ || t[15] !== h ? ((C = [h, _]), (t[14] = _), (t[15] = h), (t[16] = C)) : (C = t[16]),
    (0, Y.useLayoutEffect)(S, C));
  let w;
  t[17] !== c.length || t[18] !== h
    ? ((w = (e) => {
        ((m.current = e ? h : 0), !e && h < c.length && (m.current = `overflow`), v(e));
      }),
      (t[17] = c.length),
      (t[18] = h),
      (t[19] = w))
    : (w = t[19]);
  let T = w,
    E = Math.max(0, c.length - h),
    D = _ ? `items-start` : `items-center`,
    O;
  t[20] === D ? (O = t[21]) : ((O = M(`flex min-w-0 gap-4`, D)), (t[20] = D), (t[21] = O));
  let k;
  t[22] !== n.label || t[23] !== l
    ? ((k = (0, X.jsx)(`dt`, {
        id: l,
        className: `w-1/3 shrink-0 text-sm break-words text-secondary sm:w-32`,
        children: n.label,
      })),
      (t[22] = n.label),
      (t[23] = l),
      (t[24] = k))
    : (k = t[24]);
  let A = _ && `flex-wrap`,
    j;
  t[25] === A ? (j = t[26]) : ((j = M(`flex min-w-0 items-center gap-2`, A)), (t[25] = A), (t[26] = j));
  let N;
  t[27] !== T || t[28] !== _
    ? ((N = (e) => {
        _ && e.key === `Escape` && (e.preventDefault(), T(!1));
      }),
      (t[27] = T),
      (t[28] = _),
      (t[29] = N))
    : (N = t[29]);
  let P;
  if (t[30] !== r || t[31] !== _ || t[32] !== c || t[33] !== h) {
    let e;
    (t[35] === r
      ? (e = t[36])
      : ((e = (e) => (0, X.jsx)(fn, { provider: e, hostId: r }, e.plugin_id)), (t[35] = r), (t[36] = e)),
      (P = c.slice(0, _ ? c.length : h).map(e)),
      (t[30] = r),
      (t[31] = _),
      (t[32] = c),
      (t[33] = h),
      (t[34] = P));
  } else P = t[34];
  let F;
  t[37] !== T || t[38] !== n.label || t[39] !== E || t[40] !== i || t[41] !== _
    ? ((F =
        (E > 0 || _) &&
        (0, X.jsx)(an, {
          ref: p,
          className: `max-w-full shrink-0`,
          "aria-expanded": _,
          "aria-label": _
            ? i.formatMessage(
                {
                  id: `plugins.dependencies.collapseLabel`,
                  defaultMessage: `Show fewer plugins in {category}`,
                  description: `Accessible label to collapse the Works with category back to one row; category is the localized category name`,
                },
                { category: n.label },
              )
            : i.formatMessage(
                {
                  id: `plugins.dependencies.expandLabel`,
                  defaultMessage: `{count, plural, one {Show # more plugin in {category}} other {Show # more plugins in {category}}}`,
                  description: `Accessible label to expand the remaining disclosed providers in a Works with category; count is the hidden provider count and category is the category name`,
                },
                { count: E, category: n.label },
              ),
          onClick: () => T(!_),
          children: _
            ? (0, X.jsx)(f, {
                id: `plugins.dependencies.collapse`,
                defaultMessage: `Show less`,
                description: `Button to collapse a Works with provider category back to one row`,
              })
            : (0, X.jsx)(f, {
                id: `plugins.dependencies.overflow`,
                defaultMessage: `+{count, number}`,
                description: `Compact count of disclosed provider plugins that do not fit in a Works with category row`,
                values: { count: E },
              }),
        })),
      (t[37] = T),
      (t[38] = n.label),
      (t[39] = E),
      (t[40] = i),
      (t[41] = _),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== l || t[44] !== j || t[45] !== N || t[46] !== P || t[47] !== F
    ? ((I = (0, X.jsxs)(`div`, {
        ref: u,
        role: `group`,
        "aria-labelledby": l,
        tabIndex: -1,
        className: j,
        onKeyDown: N,
        children: [P, F],
      })),
      (t[43] = l),
      (t[44] = j),
      (t[45] = N),
      (t[46] = P),
      (t[47] = F),
      (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] === c ? (L = t[50]) : ((L = c.map(un)), (t[49] = c), (t[50] = L));
  let R;
  t[51] === c.length
    ? (R = t[52])
    : ((R = (0, X.jsx)(an, {
        className: `shrink-0`,
        tabIndex: -1,
        children: (0, X.jsx)(f, {
          id: `plugins.dependencies.overflow`,
          defaultMessage: `+{count, number}`,
          description: `Compact count of disclosed provider plugins that do not fit in a Works with category row`,
          values: { count: c.length },
        }),
      })),
      (t[51] = c.length),
      (t[52] = R));
  let z;
  t[53] !== L || t[54] !== R
    ? ((z = (0, X.jsxs)(`div`, {
        ref: d,
        "aria-hidden": !0,
        inert: !0,
        className: `pointer-events-none invisible absolute inset-x-0 top-0 flex h-0 items-center gap-2 overflow-hidden`,
        children: [L, R],
      })),
      (t[53] = L),
      (t[54] = R),
      (t[55] = z))
    : (z = t[55]);
  let B;
  t[56] !== I || t[57] !== z
    ? ((B = (0, X.jsxs)(`dd`, { className: `relative min-w-0 flex-1`, children: [I, z] })),
      (t[56] = I),
      (t[57] = z),
      (t[58] = B))
    : (B = t[58]);
  let ee;
  return (
    t[59] !== k || t[60] !== B || t[61] !== O
      ? ((ee = (0, X.jsxs)(`div`, { className: O, children: [k, B] })),
        (t[59] = k),
        (t[60] = B),
        (t[61] = O),
        (t[62] = ee))
      : (ee = t[62]),
    ee
  );
}
function un(e) {
  return (0, X.jsx)(
    an,
    { className: `shrink-0`, as: `span`, children: (0, X.jsx)(pn, { provider: e }) },
    e.plugin_id,
  );
}
function dn(e) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function fn(e) {
  let t = (0, gn.c)(62),
    { provider: n, hostId: r } = e,
    i = x(),
    o = l(),
    s = ie(),
    [c, u] = (0, Y.useState)(!1),
    d = (0, Y.useRef)(!1),
    [f, p] = (0, Y.useState)(null),
    [m, h] = (0, Y.useState)(!1),
    g;
  t[0] !== i || t[1] !== n ? ((g = hn(i, n)), (t[0] = i), (t[1] = n), (t[2] = g)) : (g = t[2]);
  let _ = g,
    v = n.is_enabled === !1 || n.availability_status != null,
    y = v ? _ : void 0,
    b = n.navigation?.kind === `plugin_detail` && n.navigation.plugin_id === n.plugin_id,
    S;
  t[3] !== r || t[4] !== s.search || t[5] !== n.plugin_id
    ? ((S = z({ hostId: r, pluginId: n.plugin_id, browseSearch: s.search })),
      (t[3] = r),
      (t[4] = s.search),
      (t[5] = n.plugin_id),
      (t[6] = S))
    : (S = t[6]);
  let C = a(S),
    w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (e) => {
        if (e == null) return;
        p(e);
        let t = e.parentElement;
        return (
          d.current && t?.focus(),
          (d.current = !1),
          () => {
            d.current = t === e.ownerDocument.activeElement;
          }
        );
      }),
      (t[7] = w))
    : (w = t[7]);
  let T = w,
    E;
  t[8] !== f?.parentElement || t[9] !== c
    ? ((E = () => {
        let e = f?.parentElement;
        if (!c || e == null) return;
        let t = (t) => {
            t.composedPath().includes(e) || u(!1);
          },
          n = e.ownerDocument;
        return (
          n.addEventListener(`pointerdown`, t, !0),
          () => {
            n.removeEventListener(`pointerdown`, t, !0);
          }
        );
      }),
      (t[8] = f?.parentElement),
      (t[9] = c),
      (t[10] = E))
    : (E = t[10]);
  let D;
  (t[11] !== f || t[12] !== c ? ((D = [f, c]), (t[11] = f), (t[12] = c), (t[13] = D)) : (D = t[13]),
    (0, Y.useEffect)(E, D));
  let O;
  t[14] !== f || t[15] !== y
    ? ((O = () => {
        if (f == null) return;
        let e = () => {
          let e = f.scrollWidth > f.clientWidth;
          (!e && y == null && u(!1), h(e));
        };
        e();
        let t = new ResizeObserver(e);
        return (t.observe(f), () => t.disconnect());
      }),
      (t[14] = f),
      (t[15] = y),
      (t[16] = O))
    : (O = t[16]);
  let k;
  if (
    (t[17] !== f || t[18] !== n.display_name || t[19] !== y
      ? ((k = [f, n.display_name, y]), (t[17] = f), (t[18] = n.display_name), (t[19] = y), (t[20] = k))
      : (k = t[20]),
    (0, Y.useLayoutEffect)(O, k),
    !b && y == null && !m)
  ) {
    let e;
    t[21] === n ? (e = t[22]) : ((e = (0, X.jsx)(pn, { provider: n, nameRef: T })), (t[21] = n), (t[22] = e));
    let r;
    return (
      t[23] !== _ || t[24] !== e
        ? ((r = (0, X.jsx)(an, {
            className: `max-w-full shrink-0`,
            as: `span`,
            "data-dependency-chip": !0,
            "aria-description": _,
            tabIndex: -1,
            children: e,
          })),
          (t[23] = _),
          (t[24] = e),
          (t[25] = r))
        : (r = t[25]),
      r
    );
  }
  let A;
  t[26] !== m || t[27] !== n.display_name
    ? ((A = m ? (0, X.jsx)(`div`, { children: n.display_name }) : null),
      (t[26] = m),
      (t[27] = n.display_name),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== y || t[30] !== A
    ? ((j = (0, X.jsxs)(X.Fragment, { children: [A, y] })), (t[29] = y), (t[30] = A), (t[31] = j))
    : (j = t[31]);
  let M = y == null ? `trigger-overflows` : `always`,
    N = c && (y != null || m),
    P;
  t[32] !== b || t[33] !== C
    ? ((P = b ? { as: `a`, href: C } : { as: `button` }), (t[32] = b), (t[33] = C), (t[34] = P))
    : (P = t[34]);
  let F;
  t[35] !== b ||
  t[36] !== r ||
  t[37] !== s.search ||
  t[38] !== m ||
  t[39] !== o ||
  t[40] !== n.display_name ||
  t[41] !== n.plugin_id ||
  t[42] !== y ||
  t[43] !== c
    ? ((F = (e) => {
        b
          ? we(e, () => {
              o(z({ hostId: r, pluginId: n.plugin_id, browseSearch: s.search }), {
                state: { pluginDisplayName: n.display_name },
              });
            })
          : (y != null || m) && u(!c);
      }),
      (t[35] = b),
      (t[36] = r),
      (t[37] = s.search),
      (t[38] = m),
      (t[39] = o),
      (t[40] = n.display_name),
      (t[41] = n.plugin_id),
      (t[42] = y),
      (t[43] = c),
      (t[44] = F))
    : (F = t[44]);
  let I, L;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => u(!1)),
      (L = (e) => {
        e.key === `Escape` && u(!1);
      }),
      (t[45] = I),
      (t[46] = L))
    : ((I = t[45]), (L = t[46]));
  let R;
  t[47] === n ? (R = t[48]) : ((R = (0, X.jsx)(pn, { provider: n, nameRef: T })), (t[47] = n), (t[48] = R));
  let B;
  t[49] !== _ || t[50] !== v || t[51] !== n.display_name || t[52] !== P || t[53] !== F || t[54] !== R
    ? ((B = (0, X.jsx)(an, {
        className: `max-w-full shrink-0`,
        ...P,
        allowShrink: !0,
        muted: v,
        "data-dependency-chip": !0,
        "aria-label": n.display_name,
        "aria-description": _,
        onClick: F,
        onBlur: I,
        onKeyDown: L,
        children: R,
      })),
      (t[49] = _),
      (t[50] = v),
      (t[51] = n.display_name),
      (t[52] = P),
      (t[53] = F),
      (t[54] = R),
      (t[55] = B))
    : (B = t[55]);
  let te;
  return (
    t[56] !== b || t[57] !== M || t[58] !== N || t[59] !== B || t[60] !== j
      ? ((te = (0, X.jsx)(ee, {
          tooltipContent: j,
          openWhen: M,
          open: N,
          onOpenChange: u,
          closeOnTriggerClick: b,
          triggerAsChild: !0,
          cloneCustomTrigger: !0,
          children: B,
        })),
        (t[56] = b),
        (t[57] = M),
        (t[58] = N),
        (t[59] = B),
        (t[60] = j),
        (t[61] = te))
      : (te = t[61]),
    te
  );
}
function pn(e) {
  let t = (0, gn.c)(20),
    { provider: n, nameRef: r } = e,
    i = n.is_enabled === !1 || n.availability_status != null,
    a = i && `opacity-40 grayscale`,
    o;
  t[0] === a ? (o = t[1]) : ((o = M(`size-5 shrink-0`, a)), (t[0] = a), (t[1] = o));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, X.jsx)(u, {})), (t[2] = c)) : (c = t[2]);
  let l;
  t[3] !== n.icon_url || t[4] !== n.icon_url_dark || t[5] !== o
    ? ((l = (0, X.jsx)(Ge, {
        className: o,
        alt: ``,
        logoUrl: n.icon_url,
        logoDarkUrl: n.icon_url_dark,
        fallback: c,
      })),
      (t[3] = n.icon_url),
      (t[4] = n.icon_url_dark),
      (t[5] = o),
      (t[6] = l))
    : (l = t[6]);
  let d = i && `text-tertiary`,
    f;
  t[7] === d ? (f = t[8]) : ((f = M(`truncate`, d)), (t[7] = d), (t[8] = f));
  let p;
  t[9] !== r || t[10] !== n.display_name || t[11] !== f
    ? ((p = (0, X.jsx)(`span`, {
        ref: r,
        className: f,
        "data-tooltip-overflow-target": !0,
        children: n.display_name,
      })),
      (t[9] = r),
      (t[10] = n.display_name),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== i || t[14] !== n.is_installed
    ? ((m = !i && n.is_installed === !0 ? (0, X.jsx)(s, { className: `text-tertiary` }) : null),
      (t[13] = i),
      (t[14] = n.is_installed),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== l || t[17] !== p || t[18] !== m
      ? ((h = (0, X.jsxs)(X.Fragment, { children: [l, p, m] })),
        (t[16] = l),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function mn(e, t, n, r) {
  if (e.reduce((e, t) => e + t, 0) + Math.max(0, e.length - 1) * r <= t) return e.length;
  let i = n,
    a = 0;
  for (let n of e) {
    if (i + r + n > t) break;
    ((i += r + n), a++);
  }
  return a;
}
function hn(e, t) {
  switch (t.availability_status?.reason) {
    case `disabled_by_admin`:
      return e.formatMessage({
        id: `plugins.dependencies.adminStatus`,
        defaultMessage: `Disabled by admin`,
        description: `Accessible description and tooltip explaining why a Works with provider is disabled by a workspace administrator`,
      });
    case `plan_not_eligible`:
      return e.formatMessage({
        id: `plugins.dependencies.planStatus`,
        defaultMessage: `Not available on your plan`,
        description: `Accessible description and tooltip explaining why a Works with provider is unavailable on the current plan`,
      });
    case `workspace_setup_required`:
      return e.formatMessage({
        id: `plugins.dependencies.setupStatus`,
        defaultMessage: `Requires admin setup`,
        description: `Accessible description and tooltip explaining that a workspace administrator must configure a Works with provider before it is available`,
      });
    case `workspace_required`:
      return e.formatMessage({
        id: `plugins.dependencies.workspaceStatus`,
        defaultMessage: `Requires a workspace`,
        description: `Accessible description and tooltip explaining that a Works with provider requires an active workspace`,
      });
    case `unavailable`:
      return e.formatMessage({
        id: `plugins.dependencies.unavailableStatus`,
        defaultMessage: `Not available`,
        description: `Accessible description and tooltip for an unavailable Works with provider`,
      });
    case void 0:
      return t.is_enabled === !1
        ? e.formatMessage({
            id: `plugins.dependencies.disabledStatus`,
            defaultMessage: `Not available`,
            description: `Accessible description and tooltip for a Works with provider explicitly reported as disabled; unknown enablement is not disabled`,
          })
        : t.is_installed === !0
          ? e.formatMessage({
              id: `plugins.dependencies.installedStatus`,
              defaultMessage: `Installed`,
              description: `Accessible description for a Works with provider confirmed as installed; this does not indicate authentication or connection status`,
            })
          : void 0;
  }
}
var gn, Y, X;
function _n() {
  return (_n = e(() => {
    ((gn = ne()), E(), B(), (Y = oe()), I(), O(), ze(), y(), A(), he(), cn(), (X = ae()));
  }))();
}
function vn(e) {
  let n = (0, xn.c)(8),
    { dependencies: r, hostId: i, isError: a, onRetry: o } = e;
  if (a) {
    let e;
    n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Sn.jsx)(f, {
          id: `plugins.dependencies.heading`,
          defaultMessage: `Works with`,
          description: `Heading for the categorized provider plugins this plugin declares it can use, before or after installation`,
        })),
        (n[0] = e))
      : (e = n[0]);
    let r;
    n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Sn.jsx)(f, {
          id: `plugins.dependencies.error`,
          defaultMessage: `Couldn’t load dependencies`,
          description: `Error in the Works with section when the plugin's dependency details could not be loaded`,
        })),
        (n[1] = r))
      : (r = n[1]);
    let i;
    n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Sn.jsx)(f, {
          id: `plugins.dependencies.retry`,
          defaultMessage: `Retry`,
          description: `Button to reload plugin dependencies after a request failed`,
        })),
        (n[2] = i))
      : (i = n[2]);
    let a;
    return (
      n[3] === o
        ? (a = n[4])
        : ((a = (0, Sn.jsx)(qe, {
            showDivider: !1,
            title: e,
            children: (0, Sn.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4 text-sm text-secondary`,
              children: [r, (0, Sn.jsx)(t, { color: `secondary`, onClick: o, children: i })],
            }),
          })),
          (n[3] = o),
          (n[4] = a)),
      a
    );
  }
  let s;
  return (
    n[5] !== r || n[6] !== i
      ? ((s = (0, Sn.jsx)(yn, { hostId: i, dependencies: r })), (n[5] = r), (n[6] = i), (n[7] = s))
      : (s = n[7]),
    s
  );
}
function yn(e) {
  let t = (0, xn.c)(22),
    { dependencies: n, hostId: r } = e,
    i = x();
  if (n == null) return null;
  let a, o, s, c, l, u, d;
  if (t[0] !== n || t[1] !== r || t[2] !== i.locale) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = bn(n, i.locale);
      if (e.length === 0) {
        d = null;
        break bb0;
      }
      ((a = qe),
        (c = `plugin-dependencies`),
        (l = !1),
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((u = (0, Sn.jsx)(f, {
              id: `plugins.dependencies.heading`,
              defaultMessage: `Works with`,
              description: `Heading for the categorized provider plugins this plugin declares it can use, before or after installation`,
            })),
            (t[10] = u))
          : (u = t[10]),
        (o = `flex min-w-0 flex-col gap-3 select-none`));
      let p;
      (t[11] === r
        ? (p = t[12])
        : ((p = (e) => (0, Sn.jsx)(ln, { group: e, hostId: r }, e.id)), (t[11] = r), (t[12] = p)),
        (s = e.map(p)));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = i.locale),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]), (d = t[9]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let p;
  t[13] !== o || t[14] !== s
    ? ((p = (0, Sn.jsx)(`dl`, { className: o, children: s })), (t[13] = o), (t[14] = s), (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== a || t[17] !== c || t[18] !== l || t[19] !== u || t[20] !== p
      ? ((m = (0, Sn.jsx)(a, { id: c, showDivider: l, title: u, children: p })),
        (t[16] = a),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function bn(e, t) {
  let n = new Map();
  for (let t of e)
    for (let e of t.categories) {
      let r = n.get(e.id);
      (r ?? ((r = { ...e, providers: [] }), n.set(e.id, r)),
        r.providers.some((e) => e.plugin_id === t.plugin_id) || r.providers.push(t));
    }
  return [...n.values()]
    .sort((e, n) => e.label.localeCompare(n.label, t))
    .map((e) => ({
      ...e,
      providers: e.providers.toSorted(
        (e, t) =>
          Number(e.is_enabled === !1 || e.availability_status != null) -
          Number(t.is_enabled === !1 || t.availability_status != null),
      ),
    }));
}
var xn, Sn;
function Cn() {
  return (Cn = e(() => {
    ((xn = ne()), I(), te(), Qe(), _n(), (Sn = ae()));
  }))();
}
function wn(e) {
  let t = (0, Z.c)(18),
    n = p(i),
    a = x(),
    o;
  t[0] !== e.errorMessage || t[1] !== e.state
    ? ((o = null),
      e.state === `error` &&
        (o = e.errorMessage?.includes(`path does not exist or is not a directory`)
          ? `missing_plugin_path`
          : `other`),
      (t[0] = e.errorMessage),
      (t[1] = e.state),
      (t[2] = o))
    : (o = t[2]);
  let s = (0, tr.useRef)(null),
    c;
  t[3] !== o || t[4] !== n
    ? ((c = () => {
        o !== s.current &&
          ((s.current = o), o != null && r.warning(`plugin_detail_error_shown`, { safe: { reason: o } }));
      }),
      (t[3] = o),
      (t[4] = n),
      (t[5] = c))
    : (c = t[5]);
  let l;
  (t[6] !== o || t[7] !== n ? ((l = [o, n]), (t[6] = o), (t[7] = n), (t[8] = l)) : (l = t[8]),
    (0, tr.useEffect)(c, l));
  let u;
  t[9] === a
    ? (u = t[10])
    : ((u = a.formatMessage({
        id: `plugins.detail.sectionsNav`,
        defaultMessage: `Plugin sections`,
        description: `Accessible label for the section navigation on the plugin detail page`,
      })),
      (t[9] = a),
      (t[10] = u));
  let d =
      `presentation` in e && e.presentation === `dialog`
        ? `flex min-h-full flex-col p-6`
        : `flex min-h-full flex-col px-toolbar electron:pt-panel electron:pb-panel`,
    m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = []), (t[11] = m)) : (m = t[11]);
  let h;
  t[12] === e
    ? (h = t[13])
    : ((h =
        e.state === `loading`
          ? (0, Q.jsx)(Vn, { plugin: e.plugin, presentation: e.presentation })
          : e.state === `error`
            ? (0, Q.jsx)(Yn, {
                title: (0, Q.jsx)(f, { ...$.errorTitle }),
                description: e.errorMessage ?? void 0,
              })
            : e.state === `missing`
              ? (0, Q.jsx)(Yn, {
                  title: (0, Q.jsx)(f, { ...$.missing }),
                  description: e.description ?? (0, Q.jsx)(f, { ...$.missingDescription }),
                })
              : (0, Q.jsx)(Tn, { ...e })),
      (t[12] = e),
      (t[13] = h));
  let g;
  return (
    t[14] !== u || t[15] !== d || t[16] !== h
      ? ((g = (0, Q.jsx)(Ot, {
          ariaLabel: u,
          contentInnerClassName: d,
          disableScrollFade: !0,
          scrollContainerClassName: `[&:has([data-plugin-description-transitioning])]:[overflow-anchor:none]`,
          showNav: !1,
          sections: m,
          children: h,
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Tn(e) {
  let t = (0, Z.c)(146),
    {
      settings: n,
      presentation: r,
      appInstallBlockedReasonsById: a,
      actions: o,
      banner: s,
      apps: c,
      canonicalAppId: u,
      appConnections: d,
      browserExtensions: m,
      connectedAccounts: h,
      effectiveConfig: _,
      hostId: v,
      hooksNeedingReviewCount: y,
      installedSkills: b,
      installBlockedReason: S,
      isConfigPending: w,
      isPersonalAccount: T,
      isPromptInstallBlocked: E,
      isPublicTemplate: D,
      isAppConnectPending: O,
      updatingAppId: k,
      isUpdatingEnabled: A,
      isUninstalling: j,
      onActivatePrompt: M,
      onInstallApp: N,
      onOpenAppTools: P,
      onDisconnectApp: I,
      onOpenPluginSettingsUrl: L,
      serviceAppTemplates: z,
      onManageApps: B,
      onOpenHooksSettings: te,
      onTrustAllHooks: ne,
      onSetAppEnabled: re,
      onSkillsUpdated: ae,
      mcpServers: oe,
      onOpenMcpSettings: le,
      onToggleMcpServerEnabled: de,
      plugin: V,
      pluginScope: fe,
      scheduledTasks: H,
      showInPluginAppList: pe,
      showSkillReferences: he,
      unavailableSkills: ge,
    } = e,
    _e = r === void 0 ? `page` : r,
    ve;
  t[0] === m ? (ve = t[1]) : ((ve = m === void 0 ? [] : m), (t[0] = m), (t[1] = ve));
  let xe = ve,
    W = y === void 0 ? 0 : y,
    G = w !== void 0 && w,
    Se = T !== void 0 && T,
    Ce = D !== void 0 && D,
    we = he !== void 0 && he,
    De = p(i),
    Oe = se(bt, v),
    ke = _e === `dialog` ? `external-browser` : void 0,
    je = x(),
    Me = ie(),
    Ne = l(),
    Pe = (0, tr.useRef)(null),
    q;
  if (t[2] !== c || t[3] !== h || t[4] !== V.summary.installed || t[5] !== V.summary.remotePluginId) {
    let e;
    (t[7] !== h || t[8] !== V.summary.installed || t[9] !== V.summary.remotePluginId
      ? ((e = (e) => ({
          ...be(e.id),
          enabled: !!h?.accountId && !!h.userId && V.summary.installed && V.summary.remotePluginId != null,
          retry: !1,
        })),
        (t[7] = h),
        (t[8] = V.summary.installed),
        (t[9] = V.summary.remotePluginId),
        (t[10] = e))
      : (e = t[10]),
      (q = c.map(e)),
      (t[2] = c),
      (t[3] = h),
      (t[4] = V.summary.installed),
      (t[5] = V.summary.remotePluginId),
      (t[6] = q));
  } else q = t[6];
  let Ie;
  t[11] === q ? (Ie = t[12]) : ((Ie = { queries: q }), (t[11] = q), (t[12] = Ie));
  let Le = g(Ie),
    Re;
  t[13] !== c ||
  t[14] !== h ||
  t[15] !== Le ||
  t[16] !== V.summary.installed ||
  t[17] !== V.summary.remotePluginId
    ? ((Re =
        h != null &&
        V.summary.installed &&
        V.summary.remotePluginId != null &&
        Le.some((e, t) => e.data == null || e.isError || me(c[t].id, e.data))),
      (t[13] = c),
      (t[14] = h),
      (t[15] = Le),
      (t[16] = V.summary.installed),
      (t[17] = V.summary.remotePluginId),
      (t[18] = Re))
    : (Re = t[18]);
  let ze = Re,
    Be = R,
    Ve;
  t[19] !== ze || t[20] !== Be
    ? ((Ve = { enabled: ze, hostId: Be, roots: void 0, resolveActiveRoots: !0 }),
      (t[19] = ze),
      (t[20] = Be),
      (t[21] = Ve))
    : (Ve = t[21]);
  let { data: He } = ue(Ve),
    Ue;
  t[22] === V ? (Ue = t[23]) : ((Ue = Zn(V)), (t[22] = V), (t[23] = Ue));
  let J = Ue,
    Ke;
  t[24] === V.summary.interface?.developerName
    ? (Ke = t[25])
    : ((Ke = V.summary.interface?.developerName?.trim()),
      (t[24] = V.summary.interface?.developerName),
      (t[25] = Ke));
  let qe = Ke,
    Je = !!qe && qe !== J,
    Ye;
  t[26] === V ? (Ye = t[27]) : ((Ye = er(V)), (t[26] = V), (t[27] = Ye));
  let Xe = Ye,
    Qe;
  t[28] === V ? (Qe = t[29]) : ((Qe = $n(V)), (t[28] = V), (t[29] = Qe));
  let $e = Qe,
    et = !Je && $e === Xe ? null : $e,
    tt;
  if (Je) {
    let e;
    (t[30] === qe
      ? (e = t[31])
      : ((e = (0, Q.jsx)(f, {
          id: `plugins.detail.developerAttribution`,
          defaultMessage: `By {developerName}`,
          description: `Subtitle on the plugin detail page identifying the plugin's developer. The developerName is the publisher's name. Shown when it differs from the plugin's display name.`,
          values: { developerName: qe },
        })),
        (t[30] = qe),
        (t[31] = e)),
      (tt = e));
  } else if (Xe) {
    let e;
    (t[32] === Xe
      ? (e = t[33])
      : ((e = (0, Q.jsx)(`span`, { id: `plugin-description`, children: Xe })), (t[32] = Xe), (t[33] = e)),
      (tt = e));
  }
  let nt = (V.summary.interface?.defaultPrompt ?? []).map(Dn).filter(En),
    it = V.apps.length === 1 ? c[0] : void 0,
    at;
  t[34] !== V.summary || t[35] !== it
    ? ((at = Fe(V.summary, it)), (t[34] = V.summary), (t[35] = it), (t[36] = at))
    : (at = t[36]);
  let { composerIconPath: ot, logoDarkPath: ft, logoPath: pt } = at,
    mt = ot ?? pt ?? ft,
    gt = A || j,
    vt = nt.length > 0 || !!et,
    yt;
  t[37] === V ? (yt = t[38]) : ((yt = qn(V)), (t[37] = V), (t[38] = yt));
  let xt = yt,
    St;
  t[39] !== c || t[40] !== pe ? ((St = pe ? c : []), (t[39] = c), (t[40] = pe), (t[41] = St)) : (St = t[41]);
  let Ct = St,
    wt = ze
      ? He?.find((e) => {
          let { plugin: t } = e;
          return t.remotePluginId === V.summary.remotePluginId;
        })?.canonicalAppId
      : void 0,
    Tt = U({ accountId: h?.accountId, userId: h?.userId, linkRefreshStrategy: `NONE` }),
    { data: Et } = C({
      ...Tt,
      enabled: !!Tt.enabled && wt != null,
      staleTime: Tt.staleTime,
      select: (e) => wt != null && _t(e, wt).length > 0,
    }),
    Dt;
  ze && He == null && (Tt.enabled || c.some((e) => h.isAppReauthPending(e.id)))
    ? (Dt = null)
    : h != null &&
      V.summary.installed &&
      wt != null &&
      (Tt.enabled ||
        c.some((e) => (e.isAccessible || h.isAppReauthPending(e.id) || !1) && K(e.id) === K(wt))) &&
      Et !== !1 &&
      (Dt = wt);
  let Ot = (0, tr.useEffectEvent)(() => {
      if (!(!h?.isConnectorSetupReady || (!V.summary.installed && !Ce) || Dt !== void 0 || E || G))
        for (let e of c) {
          let t = d?.get(K(e.id));
          e.isEnabled &&
            (V.summary.installed || (t?.canConnect === !0 && !t.isUnavailable && !t.isDisabledByAdmin)) &&
            a[e.id] == null &&
            ce(e.id, _) == null &&
            ht({
              scope: De,
              accountId: h?.accountId,
              userId: h?.userId,
              connectorId: e.id,
              location: Me,
              navigate: Ne,
              handledKey: Pe,
              intl: je,
              onSetup: (t) => N(e, t),
            });
        }
    }),
    kt;
  t[42] === Ot
    ? (kt = t[43])
    : ((kt = () => {
        Ot();
      }),
      (t[42] = Ot),
      (t[43] = kt));
  let At = Dt,
    Mt = h?.accountId,
    Pt = h?.userId,
    Ft = h?.isConnectorSetupReady,
    It;
  (t[44] !== d ||
  t[45] !== a ||
  t[46] !== c ||
  t[47] !== _ ||
  t[48] !== G ||
  t[49] !== E ||
  t[50] !== Ce ||
  t[51] !== Me ||
  t[52] !== V.summary.installed ||
  t[53] !== At ||
  t[54] !== Mt ||
  t[55] !== Pt ||
  t[56] !== Ft
    ? ((It = [c, d, a, At, Mt, Pt, Ft, _, G, E, Ce, Me, V.summary.installed]),
      (t[44] = d),
      (t[45] = a),
      (t[46] = c),
      (t[47] = _),
      (t[48] = G),
      (t[49] = E),
      (t[50] = Ce),
      (t[51] = Me),
      (t[52] = V.summary.installed),
      (t[53] = At),
      (t[54] = Mt),
      (t[55] = Pt),
      (t[56] = Ft),
      (t[57] = It))
    : (It = t[57]),
    (0, tr.useEffect)(kt, It));
  let Lt =
      !Oe && h != null && V.summary.installed && Et !== !1 && wt != null
        ? c
            .filter((e) => K(e.id) === K(wt) && e.isEnabled && ce(e.id, _) == null)
            .map((e) => (0, Q.jsx)(Jt, { accountContext: h, app: e, hostId: v }, e.id))
        : null,
    Rt = dt,
    Bt;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = (0, Q.jsx)(We, { className: `icon-lg text-secondary` })), (t[58] = Bt))
    : (Bt = t[58]);
  let Ht;
  t[59] !== J || t[60] !== ft || t[61] !== pt
    ? ((Ht = (0, Q.jsx)(ut, {
        children: (0, Q.jsx)(Ge, {
          alt: J,
          className: `size-full object-contain`,
          logoDarkUrl: ft,
          logoUrl: pt,
          fallback: Bt,
        }),
      })),
      (t[59] = J),
      (t[60] = ft),
      (t[61] = pt),
      (t[62] = Ht))
    : (Ht = t[62]);
  let Ut = V.summary.shareContext?.remotePluginId,
    Gt;
  t[63] !== V.summary.id || t[64] !== V.summary.remotePluginId || t[65] !== Ut
    ? ((Gt = [V.summary.id, V.summary.remotePluginId, Ut]),
      (t[63] = V.summary.id),
      (t[64] = V.summary.remotePluginId),
      (t[65] = Ut),
      (t[66] = Gt))
    : (Gt = t[66]);
  let qt;
  t[67] !== J || t[68] !== v || t[69] !== Gt
    ? ((qt = (0, Q.jsx)(jt, { hostId: v, pluginIds: Gt, pluginName: J, surface: `detail` })),
      (t[67] = J),
      (t[68] = v),
      (t[69] = Gt),
      (t[70] = qt))
    : (qt = t[70]);
  let Yt;
  t[71] !== Ht || t[72] !== qt
    ? ((Yt = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-4 text-sm`,
        children: [Ht, qt],
      })),
      (t[71] = Ht),
      (t[72] = qt),
      (t[73] = Yt))
    : (Yt = t[73]);
  let Xt = tt,
    Zt;
  t[74] === V ? (Zt = t[75]) : ((Zt = Ze(Ae(V))), (t[74] = V), (t[75] = Zt));
  let Qt;
  t[76] !== fe || t[77] !== Zt
    ? ((Qt = { ...Zt, scope: fe }), (t[76] = fe), (t[77] = Zt), (t[78] = Qt))
    : (Qt = t[78]);
  let $t;
  t[79] !== v || t[80] !== Qt
    ? (($t = (0, Q.jsx)(Nt, { hostId: v, plugin: Qt, size: `large` })),
      (t[79] = v),
      (t[80] = Qt),
      (t[81] = $t))
    : ($t = t[81]);
  let en;
  t[82] !== J || t[83] !== $t
    ? ((en = (0, Q.jsx)(`h1`, {
        className: `heading-base electron:heading-lg min-w-0 break-words text-default`,
        children: (0, Q.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [J, $t] }),
      })),
      (t[82] = J),
      (t[83] = $t),
      (t[84] = en))
    : (en = t[84]);
  let tn;
  t[85] !== o || t[86] !== tt || t[87] !== Yt || t[88] !== en
    ? ((tn = (0, Q.jsx)(st, { actions: o, asset: Yt, subtitle: Xt, title: en })),
      (t[85] = o),
      (t[86] = tt),
      (t[87] = Yt),
      (t[88] = en),
      (t[89] = tn))
    : (tn = t[89]);
  let nn = vt
      ? (0, Q.jsxs)(`div`, {
          className: Wt,
          children: [
            nt.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex flex-col`,
                  children: (0, Q.jsx)(lt, {
                    background: `url("${Ee}")`,
                    children: nt.map((e, t) =>
                      (0, Q.jsx)(
                        ee,
                        {
                          tooltipContent:
                            S === `connector-unavailable`
                              ? (0, Q.jsx)(f, {
                                  id: `plugins.install.connectorUnavailable`,
                                  defaultMessage: `App unavailable`,
                                  description: `Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory`,
                                })
                              : (0, Q.jsx)(zt, {
                                  disabledReason: V.summary.disabledReason,
                                  children: (0, Q.jsx)(f, {
                                    id: `plugins.install.disabledByAdmin`,
                                    defaultMessage: `Disabled by admin`,
                                    description: `Tooltip shown when plugin install is unavailable because all included connectors are disabled by admin`,
                                  }),
                                }),
                          disabled: !E,
                          children: (0, Q.jsxs)(ct, {
                            disabled: E,
                            pending: gt,
                            arrow: (0, Q.jsx)(Te, { "aria-hidden": !0, className: `icon-2xs -scale-x-100` }),
                            onClick: (n) => M(e, t, n),
                            children: [
                              (0, Q.jsx)(rt, {
                                brandColor: V.summary.interface?.brandColor ?? void 0,
                                displayName: J,
                                fallbackIcon: F,
                                fallbackName: V.summary.id,
                                iconSmall: mt ?? ``,
                              }),
                              ` `,
                              e,
                            ],
                          }),
                        },
                        `${e}-${t}`,
                      ),
                    ),
                  }),
                })
              : null,
            et
              ? (0, Q.jsx)(`div`, {
                  className: `min-w-0 px-[var(--detail-page-inline-inset)]`,
                  children: (0, Q.jsx)(Vt, { openTarget: ke, children: et }, et),
                })
              : null,
          ],
        })
      : null,
    rn;
  t[90] !== xe || t[91] !== V
    ? ((rn = (0, Q.jsx)(Kt, { plugin: V, browserExtensions: xe })), (t[90] = xe), (t[91] = V), (t[92] = rn))
    : (rn = t[92]);
  let an = u ?? wt,
    on;
  t[93] !== d ||
  t[94] !== a ||
  t[95] !== Ct ||
  t[96] !== Dt ||
  t[97] !== Lt ||
  t[98] !== _ ||
  t[99] !== W ||
  t[100] !== v ||
  t[101] !== b ||
  t[102] !== O ||
  t[103] !== G ||
  t[104] !== Se ||
  t[105] !== Ce ||
  t[106] !== pt ||
  t[107] !== oe ||
  t[108] !== I ||
  t[109] !== N ||
  t[110] !== B ||
  t[111] !== P ||
  t[112] !== te ||
  t[113] !== le ||
  t[114] !== L ||
  t[115] !== re ||
  t[116] !== ae ||
  t[117] !== de ||
  t[118] !== ne ||
  t[119] !== V ||
  t[120] !== H ||
  t[121] !== z ||
  t[122] !== n ||
  t[123] !== we ||
  t[124] !== an ||
  t[125] !== ge ||
  t[126] !== xt ||
  t[127] !== k
    ? ((on = (0, Q.jsx)(Fn, {
        connectButtonImpressionSurface: ye.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
        settings: n,
        appInstallBlockedReasonsById: a,
        apps: Ct,
        appConnections: d,
        unconfiguredAppTemplates: xt,
        connectedAccountsSection: Lt,
        canonicalAppId: an,
        effectiveConfig: _,
        connectedAccountCanonicalAppId: Dt,
        hostId: v,
        installedSkills: b,
        showSkillReferences: we,
        isConfigPending: G,
        isAppConnectPending: O,
        isPersonalAccount: Se,
        isPublicTemplate: Ce,
        mcpServers: oe,
        onInstallApp: N,
        onOpenHooksSettings: te,
        onTrustAllHooks: ne,
        hooksNeedingReviewCount: W,
        onOpenMcpSettings: le,
        onOpenAppTools: P,
        onDisconnectApp: I,
        onOpenPluginSettingsUrl: L,
        serviceAppTemplates: z,
        onManageApps: B,
        onSetAppEnabled: re,
        plugin: V,
        pluginLogoUrl: pt,
        scheduledTasks: H,
        onSkillsUpdated: ae,
        onToggleMcpServerEnabled: de,
        unavailableSkills: ge,
        updatingAppId: k,
      })),
      (t[93] = d),
      (t[94] = a),
      (t[95] = Ct),
      (t[96] = Dt),
      (t[97] = Lt),
      (t[98] = _),
      (t[99] = W),
      (t[100] = v),
      (t[101] = b),
      (t[102] = O),
      (t[103] = G),
      (t[104] = Se),
      (t[105] = Ce),
      (t[106] = pt),
      (t[107] = oe),
      (t[108] = I),
      (t[109] = N),
      (t[110] = B),
      (t[111] = P),
      (t[112] = te),
      (t[113] = le),
      (t[114] = L),
      (t[115] = re),
      (t[116] = ae),
      (t[117] = de),
      (t[118] = ne),
      (t[119] = V),
      (t[120] = H),
      (t[121] = z),
      (t[122] = n),
      (t[123] = we),
      (t[124] = an),
      (t[125] = ge),
      (t[126] = xt),
      (t[127] = k),
      (t[128] = on))
    : (on = t[128]);
  let sn;
  t[129] !== ke || t[130] !== V
    ? ((sn = (0, Q.jsx)(Mn, { plugin: V, openTarget: ke })), (t[129] = ke), (t[130] = V), (t[131] = sn))
    : (sn = t[131]);
  let cn;
  t[132] !== c || t[133] !== ke || t[134] !== V || t[135] !== xt
    ? ((cn = (0, Q.jsx)(On, { openTarget: ke, apps: c, appTemplates: xt, plugin: V })),
      (t[132] = c),
      (t[133] = ke),
      (t[134] = V),
      (t[135] = xt),
      (t[136] = cn))
    : (cn = t[136]);
  let ln;
  return (
    t[137] !== Rt ||
    t[138] !== s ||
    t[139] !== tn ||
    t[140] !== nn ||
    t[141] !== rn ||
    t[142] !== on ||
    t[143] !== sn ||
    t[144] !== cn
      ? ((ln = (0, Q.jsxs)(Rt, { children: [s, tn, nn, rn, on, sn, cn] })),
        (t[137] = Rt),
        (t[138] = s),
        (t[139] = tn),
        (t[140] = nn),
        (t[141] = rn),
        (t[142] = on),
        (t[143] = sn),
        (t[144] = cn),
        (t[145] = ln))
      : (ln = t[145]),
    ln
  );
}
function En(e) {
  return e.length > 0;
}
function Dn(e) {
  return e.trim();
}
function On(e) {
  let t = (0, Z.c)(24),
    { openTarget: n, apps: r, appTemplates: i, plugin: a } = e,
    o = r.length + i.length;
  if (o === 0) return null;
  let s = a.summary.interface,
    c;
  t[0] !== i || t[1] !== r
    ? ((c = r.some(An) || i.some(kn)), (t[0] = i), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === n
    ? (u = t[4])
    : ((u = (e) =>
        (0, Q.jsx)(jn, {
          openTarget: n,
          href: `https://help.openai.com/en/articles/8590148-memory-faq`,
          children: e,
        })),
      (t[3] = n),
      (t[4] = u));
  let d = u,
    p;
  t[5] === n
    ? (p = t[6])
    : ((p = (e) =>
        (0, Q.jsx)(jn, {
          openTarget: n,
          href: `https://help.openai.com/en/articles/20001062-elevated-risk-labels`,
          children: e,
        })),
      (t[5] = n),
      (t[6] = p));
  let m = p,
    h;
  t[7] === n
    ? (h = t[8])
    : ((h = (e) =>
        (0, Q.jsx)(jn, {
          openTarget: n,
          href: `https://help.openai.com/en/articles/11487775-apps-in-chatgpt`,
          children: e,
        })),
      (t[7] = n),
      (t[8] = h));
  let g = h,
    _;
  t[9] !== o ||
  t[10] !== m ||
  t[11] !== g ||
  t[12] !== d ||
  t[13] !== n ||
  t[14] !== a ||
  t[15] !== s?.privacyPolicyUrl ||
  t[16] !== s?.termsOfServiceUrl
    ? ((_ = (0, Q.jsx)(`p`, {
        children:
          o === 1
            ? (0, Q.jsx)(f, {
                id: `plugins.detail.legalNotice.singleApp`,
                defaultMessage: `When connected to {pluginName}, ChatGPT may share relevant chats and memories with this app to help provide context for your requests. {pluginName}’s use of this data is subject to their <termsLink>terms</termsLink> and <privacyPolicyLink>privacy policy</privacyPolicyLink>. If you have <memoryLink>Memory</memoryLink> enabled, data from the app may be used to proactively provide helpful information or suggestions. ChatGPT always respects your training data preferences, including for data from connected apps. Use of apps may come with <elevatedRiskLink>elevated risk</elevatedRiskLink>. You can manage your preferences or disconnect from apps anytime in your settings. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Data-sharing, app terms, privacy-policy, Memory, model-training preferences, and elevated-risk disclosure shown at the bottom of a plugin detail page when the plugin contains exactly one app. Placeholder {pluginName} is the displayed name of the plugin. The <termsLink> and <privacyPolicyLink> tags link to the plugin developer's terms and privacy policy when those URLs are available, and remain plain text otherwise. The <memoryLink>, <elevatedRiskLink>, and <learnMoreLink> tags link to the respective OpenAI Help Center articles.`,
                values: {
                  pluginName: Zn(a),
                  termsLink: (e) =>
                    (0, Q.jsx)(jn, { openTarget: n, href: s?.termsOfServiceUrl, children: e }),
                  privacyPolicyLink: (e) =>
                    (0, Q.jsx)(jn, { openTarget: n, href: s?.privacyPolicyUrl, children: e }),
                  memoryLink: d,
                  elevatedRiskLink: m,
                  learnMoreLink: g,
                },
              })
            : (0, Q.jsx)(f, {
                id: `plugins.detail.legalNotice.multipleApps`,
                defaultMessage: `This plugin may contain one or more apps, as listed above. When connected to an app, ChatGPT may share relevant chats and memories with the app to help provide context for your requests. An app’s use of this data is subject to their terms and privacy policy, which can be found on the app’s page. If you have <memoryLink>Memory</memoryLink> enabled, data from the app may be used to proactively provide helpful information or suggestions. ChatGPT always respects your training data preferences, including for data from connected apps. Use of apps may come with <elevatedRiskLink>elevated risk</elevatedRiskLink>. You can manage your preferences or disconnect from apps anytime in your settings. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Data-sharing, per-app terms and privacy policies, Memory, model-training preferences, and elevated-risk disclosure shown at the bottom of a plugin detail page when the plugin contains multiple apps listed above the disclosure. The <memoryLink>, <elevatedRiskLink>, and <learnMoreLink> tags link to the respective OpenAI Help Center articles.`,
                values: { memoryLink: d, elevatedRiskLink: m, learnMoreLink: g },
              }),
      })),
      (t[9] = o),
      (t[10] = m),
      (t[11] = g),
      (t[12] = d),
      (t[13] = n),
      (t[14] = a),
      (t[15] = s?.privacyPolicyUrl),
      (t[16] = s?.termsOfServiceUrl),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== l || t[19] !== n
    ? ((v = l
        ? (0, Q.jsx)(`p`, {
            children: (0, Q.jsx)(f, {
              id: `plugins.detail.legalNotice.googleApps`,
              defaultMessage: `Note on Google apps: This plugin may contain one or more Google apps, as listed above. Any data synced from these apps may be used to provide you with relevant and personalized information. We do not train generalized models on this data or derivations of it, except those submitted in feedback or included in ChatGPT’s response. You can delete your conversations, which will also delete any app data used in those conversations. <learnMoreLink>Learn more</learnMoreLink>`,
              description: `Additional Google data-use, model-training, feedback, response, and conversation-deletion disclosure shown after the main legal notice when at least one included app or unconfigured app template is published by Google. The <learnMoreLink> tag links to the OpenAI Help Center FAQ about Google app data controls.`,
              values: {
                learnMoreLink: (e) =>
                  (0, Q.jsx)(jn, {
                    openTarget: n,
                    href: `https://help.openai.com/en/articles/10408842-google-app-for-chatgpt-data-controls-faq`,
                    children: e,
                  }),
              },
            }),
          })
        : null),
      (t[18] = l),
      (t[19] = n),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== _ || t[22] !== v
      ? ((y = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3 px-[var(--detail-page-inline-inset)] text-sm leading-5 text-tertiary select-text`,
          children: [_, v],
        })),
        (t[21] = _),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
function kn(e) {
  return e.canonicalConnectorId != null && nr.has(e.canonicalConnectorId);
}
function An(e) {
  return e.branding?.developer?.trim().toLowerCase() === `google` || nr.has(e.id);
}
function jn(e) {
  let t = (0, Z.c)(7),
    { children: n, href: r, openTarget: i } = e;
  if (r == null) return n;
  let a;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        Oe({ event: e, href: r, openTarget: i, initiator: `open_in_browser_bridge` });
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== n || t[4] !== r || t[5] !== a
      ? ((o = (0, Q.jsx)(`a`, {
          className: `cursor-interaction text-info! underline! underline-offset-2`,
          href: r,
          onClick: a,
          children: n,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Mn(e) {
  let t = (0, Z.c)(41),
    { plugin: n, openTarget: r } = e,
    i = x(),
    a = n.summary.interface;
  if (a == null) return null;
  let o;
  t[0] === a.category ? (o = t[1]) : ((o = a.category?.trim()), (t[0] = a.category), (t[1] = o));
  let s = o,
    c;
  t[2] === a.developerName
    ? (c = t[3])
    : ((c = a.developerName?.trim()), (t[2] = a.developerName), (t[3] = c));
  let l = c,
    u;
  t[4] === a.capabilities
    ? (u = t[5])
    : ((u = a.capabilities?.join(`, `)), (t[4] = a.capabilities), (t[5] = u));
  let d = u,
    p;
  t[6] !== n.summary.localVersion || t[7] !== n.summary.version
    ? ((p = (n.summary.localVersion ?? n.summary.version)?.trim()),
      (t[6] = n.summary.localVersion),
      (t[7] = n.summary.version),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!(l || s || d || m || a.websiteUrl || a.privacyPolicyUrl || a.termsOfServiceUrl)) return null;
  let h;
  t[9] === d
    ? (h = t[10])
    : ((h = d
        ? (0, Q.jsx)(ft, {
            align: `start`,
            label: (0, Q.jsx)(f, { ...$.capabilities }),
            children: (0, Q.jsx)(Nn, { text: d }),
          })
        : null),
      (t[9] = d),
      (t[10] = h));
  let g;
  t[11] === l
    ? (g = t[12])
    : ((g = l ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(f, { ...$.developer }), children: l }) : null),
      (t[11] = l),
      (t[12] = g));
  let _;
  t[13] === s
    ? (_ = t[14])
    : ((_ = s ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(f, { ...$.category }), children: s }) : null),
      (t[13] = s),
      (t[14] = _));
  let v;
  t[15] === m
    ? (v = t[16])
    : ((v = m ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(f, { ...$.version }), children: m }) : null),
      (t[15] = m),
      (t[16] = v));
  let y;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(f, { ...$.website })), (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== i || t[19] !== r || t[20] !== a.websiteUrl
    ? ((b = (0, Q.jsx)(ft, {
        label: y,
        children: a.websiteUrl
          ? (0, Q.jsx)(Xn, { openTarget: r, ariaLabel: i.formatMessage($.website), href: a.websiteUrl })
          : (0, Q.jsx)(f, { ...$.unavailable }),
      })),
      (t[18] = i),
      (t[19] = r),
      (t[20] = a.websiteUrl),
      (t[21] = b))
    : (b = t[21]);
  let S;
  t[22] !== i || t[23] !== r || t[24] !== a.privacyPolicyUrl
    ? ((S = a.privacyPolicyUrl
        ? (0, Q.jsx)(ft, {
            label: (0, Q.jsx)(f, { ...$.privacyPolicy }),
            children: (0, Q.jsx)(Xn, {
              openTarget: r,
              ariaLabel: i.formatMessage($.privacyPolicy),
              href: a.privacyPolicyUrl,
            }),
          })
        : null),
      (t[22] = i),
      (t[23] = r),
      (t[24] = a.privacyPolicyUrl),
      (t[25] = S))
    : (S = t[25]);
  let C;
  t[26] !== i || t[27] !== r || t[28] !== a.termsOfServiceUrl
    ? ((C = a.termsOfServiceUrl
        ? (0, Q.jsx)(ft, {
            label: (0, Q.jsx)(f, { ...$.termsOfService }),
            children: (0, Q.jsx)(Xn, {
              openTarget: r,
              ariaLabel: i.formatMessage($.termsOfService),
              href: a.termsOfServiceUrl,
            }),
          })
        : null),
      (t[26] = i),
      (t[27] = r),
      (t[28] = a.termsOfServiceUrl),
      (t[29] = C))
    : (C = t[29]);
  let w;
  t[30] !== b || t[31] !== S || t[32] !== C || t[33] !== h || t[34] !== g || t[35] !== _ || t[36] !== v
    ? ((w = (0, Q.jsxs)(Q.Fragment, { children: [h, g, _, v, b, S, C] })),
      (t[30] = b),
      (t[31] = S),
      (t[32] = C),
      (t[33] = h),
      (t[34] = g),
      (t[35] = _),
      (t[36] = v),
      (t[37] = w))
    : (w = t[37]);
  let T = w,
    E;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(f, { ...$.information })), (t[38] = E))
    : (E = t[38]);
  let D;
  return (
    t[39] === T
      ? (D = t[40])
      : ((D = (0, Q.jsx)(ot, {
          id: `plugin-information`,
          title: E,
          children: (0, Q.jsx)(`dl`, { children: T }),
        })),
        (t[39] = T),
        (t[40] = D)),
    D
  );
}
function Nn(e) {
  let t = (0, Z.c)(14),
    { text: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { text: n, collapsedLineCount: 3, fallbackFontSizePx: 13 }), (t[0] = n), (t[1] = r));
  let { setTextContentMeasurementRef: i, collapseState: a, handleToggleExpansion: s } = o(r),
    c = a === `collapsed` && `line-clamp-3`,
    l;
  t[2] === c ? (l = t[3]) : ((l = M(c)), (t[2] = c), (t[3] = l));
  let u;
  t[4] !== i || t[5] !== l || t[6] !== n
    ? ((u = (0, Q.jsx)(`div`, { ref: i, className: l, children: n })),
      (t[4] = i),
      (t[5] = l),
      (t[6] = n),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== a || t[9] !== s
    ? ((d =
        a === `uncollapsible`
          ? null
          : (0, Q.jsx)(`button`, {
              className: `mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description select-none hover:text-default`,
              type: `button`,
              "aria-expanded": a === `expanded`,
              onClick: s,
              children:
                a === `expanded`
                  ? (0, Q.jsx)(f, {
                      id: `plugins.detail.information.capabilities.showLess`,
                      defaultMessage: `Show less`,
                      description: `Button to collapse a plugin's long capabilities text`,
                    })
                  : (0, Q.jsx)(f, {
                      id: `plugins.detail.information.capabilities.showMore`,
                      defaultMessage: `Show more`,
                      description: `Button to expand a plugin's long capabilities text`,
                    }),
            })),
      (t[8] = a),
      (t[9] = s),
      (t[10] = d))
    : (d = t[10]);
  let p;
  return (
    t[11] !== u || t[12] !== d
      ? ((p = (0, Q.jsxs)(`div`, { children: [u, d] })), (t[11] = u), (t[12] = d), (t[13] = p))
      : (p = t[13]),
    p
  );
}
function Pn(e) {
  let t = (0, Z.c)(38),
    { enabled: n, installed: r, logoUrl: i, name: o, onOpenSettings: s, onToggleEnabled: c } = e,
    l = x(),
    u = a(`/settings/mcp-settings`),
    d = r && !n && `opacity-60`,
    p;
  t[0] === d ? (p = t[1]) : ((p = M(`group`, d)), (t[0] = d), (t[1] = p));
  let m;
  t[2] === o ? (m = t[3]) : ((m = Qn(o)), (t[2] = o), (t[3] = m));
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(H, { className: `icon-xs text-secondary` })), (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== i || t[6] !== m
    ? ((g = (0, Q.jsx)(Un, {
        children: (0, Q.jsx)(Ge, { alt: m, className: `icon-sm`, logoUrl: i, fallback: h }),
      })),
      (t[5] = i),
      (t[6] = m),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] === o ? (_ = t[9]) : ((_ = Qn(o)), (t[8] = o), (t[9] = _));
  let v;
  t[10] === r
    ? (v = t[11])
    : ((v = r ? (0, Q.jsx)(f, { ...$.mcpServerSettings }) : (0, Q.jsx)(f, { ...$.mcpServerSetup })),
      (t[10] = r),
      (t[11] = v));
  let y;
  t[12] !== r || t[13] !== l
    ? ((y = r ? l.formatMessage($.mcpServerSettings) : l.formatMessage($.mcpServerSetup)),
      (t[12] = r),
      (t[13] = l),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === s ? (b = t[16]) : ((b = (e) => we(e, s)), (t[15] = s), (t[16] = b));
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(N, { className: `icon-sm` })), (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== u || t[19] !== y || t[20] !== b
    ? ((C = (0, Q.jsx)(j, {
        href: u,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": y,
        onClick: b,
        children: S,
      })),
      (t[18] = u),
      (t[19] = y),
      (t[20] = b),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== C || t[23] !== v
    ? ((w = (0, Q.jsx)(ee, { tooltipContent: v, children: C })), (t[22] = C), (t[23] = v), (t[24] = w))
    : (w = t[24]);
  let T;
  t[25] !== n || t[26] !== r || t[27] !== l || t[28] !== c
    ? ((T = r
        ? (0, Q.jsx)(ee, {
            tooltipContent: n
              ? (0, Q.jsx)(f, { ...$.mcpServerDisable })
              : (0, Q.jsx)(f, { ...$.mcpServerEnable }),
            children: (0, Q.jsx)(L, {
              checked: n,
              ariaLabel: l.formatMessage($.mcpServerToggleAria),
              onChange: c,
            }),
          })
        : null),
      (t[25] = n),
      (t[26] = r),
      (t[27] = l),
      (t[28] = c),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== w || t[31] !== T
    ? ((E = (0, Q.jsxs)(Q.Fragment, { children: [w, T] })), (t[30] = w), (t[31] = T), (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== E || t[34] !== p || t[35] !== g || t[36] !== _
      ? ((D = (0, Q.jsx)(Ct, {
          actionsPlacement: `center`,
          className: p,
          icon: g,
          iconContainer: !1,
          iconPlacement: `inline`,
          presentation: `row`,
          title: _,
          actions: E,
        })),
        (t[33] = E),
        (t[34] = p),
        (t[35] = g),
        (t[36] = _),
        (t[37] = D))
      : (D = t[37]),
    D
  );
}
function Fn(e) {
  let t = (0, Z.c)(155),
    {
      connectButtonImpressionSurface: n,
      settings: r,
      appInstallBlockedReasonsById: i,
      apps: a,
      appConnections: o,
      unconfiguredAppTemplates: s,
      connectedAccountsSection: c,
      canonicalAppId: l,
      effectiveConfig: u,
      connectedAccountCanonicalAppId: d,
      hooksNeedingReviewCount: p,
      hostId: m,
      installedSkills: h,
      showSkillReferences: g,
      isConfigPending: _,
      isAppConnectPending: v,
      mcpServers: y,
      isPersonalAccount: b,
      isPublicTemplate: w,
      onInstallApp: T,
      onOpenHooksSettings: E,
      onTrustAllHooks: D,
      onOpenMcpSettings: O,
      onOpenAppTools: k,
      onDisconnectApp: A,
      onOpenPluginSettingsUrl: j,
      serviceAppTemplates: N,
      onManageApps: F,
      onSetAppEnabled: I,
      plugin: L,
      pluginLogoUrl: R,
      scheduledTasks: z,
      onSkillsUpdated: B,
      onToggleMcpServerEnabled: te,
      unavailableSkills: ne,
      updatingAppId: re,
    } = e,
    ie = x(),
    ae = Ke(`3449856777`),
    oe = se(bt, m),
    le = Ke(`1064857188`),
    ue = $e(`2029197928`),
    de = S(Ie),
    V = S(Ye),
    fe = L.summary.remotePluginId ?? L.summary.shareContext?.remotePluginId,
    H = fe ?? (P(L.summary.id) ? L.summary.id : null),
    pe;
  t[0] !== de || t[1] !== ae || t[2] !== H || t[3] !== m
    ? ((pe = ae && (m === `local` || Se(m)) && de != null && H != null),
      (t[0] = de),
      (t[1] = ae),
      (t[2] = H),
      (t[3] = m),
      (t[4] = pe))
    : (pe = t[4]);
  let me = pe,
    he;
  t[5] !== de || t[6] !== H ? ((he = Ce(de, H)), (t[5] = de), (t[6] = H), (t[7] = he)) : (he = t[7]);
  let ge;
  t[8] !== me || t[9] !== m ? ((ge = me && !Se(m)), (t[8] = me), (t[9] = m), (t[10] = ge)) : (ge = t[10]);
  let ve;
  t[11] !== he || t[12] !== ge
    ? ((ve = { ...he, enabled: ge, staleTime: 0, refetchOnMount: `always` }),
      (t[11] = he),
      (t[12] = ge),
      (t[13] = ve))
    : (ve = t[13]);
  let { data: ye, isError: be, isLoading: U, refetch: xe } = C(ve),
    W;
  t[14] !== me || t[15] !== ye?.plugin || t[16] !== be
    ? ((W = me && (be || ye?.plugin.dependencies?.some(zn) === !0)),
      (t[14] = me),
      (t[15] = ye?.plugin),
      (t[16] = be),
      (t[17] = W))
    : (W = t[17]);
  let G = W,
    we;
  t[18] !== H || t[19] !== ue || t[20] !== G
    ? ((we = G && H != null && ue.get(`plugin_ids`, []).includes(H)),
      (t[18] = H),
      (t[19] = ue),
      (t[20] = G),
      (t[21] = we))
    : (we = t[21]);
  let Te = !we && !U,
    Ee;
  t[22] !== a || t[23] !== Te
    ? ((Ee = new Set((Te ? a : []).map(Rn))), (t[22] = a), (t[23] = Te), (t[24] = Ee))
    : (Ee = t[24]);
  let De = Ee,
    Oe,
    Ae,
    je,
    Me,
    Ne,
    Pe,
    q,
    Fe,
    Le,
    Re,
    ze,
    Be,
    Ve,
    He;
  if (
    t[25] !== o ||
    t[26] !== i ||
    t[27] !== a ||
    t[28] !== l ||
    t[29] !== n ||
    t[30] !== d ||
    t[31] !== c ||
    t[32] !== ye?.plugin ||
    t[33] !== le ||
    t[34] !== oe ||
    t[35] !== u ||
    t[36] !== p ||
    t[37] !== m ||
    t[38] !== h ||
    t[39] !== ie ||
    t[40] !== v ||
    t[41] !== _ ||
    t[42] !== be ||
    t[43] !== U ||
    t[44] !== b ||
    t[45] !== w ||
    t[46] !== y ||
    t[47] !== A ||
    t[48] !== T ||
    t[49] !== F ||
    t[50] !== k ||
    t[51] !== O ||
    t[52] !== j ||
    t[53] !== I ||
    t[54] !== B ||
    t[55] !== te ||
    t[56] !== D ||
    t[57] !== L ||
    t[58] !== R ||
    t[59] !== xe ||
    t[60] !== fe ||
    t[61] !== z ||
    t[62] !== N ||
    t[63] !== r ||
    t[64] !== V ||
    t[65] !== Te ||
    t[66] !== G ||
    t[67] !== g ||
    t[68] !== ne ||
    t[69] !== s ||
    t[70] !== re ||
    t[71] !== De
  ) {
    Be = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[86] === De
        ? (e = t[87])
        : ((e = (e) => {
            let { manifestAppId: t } = e;
            return t == null || !De.has(K(t));
          }),
          (t[86] = De),
          (t[87] = e));
      let x = y.filter(e);
      if (!(
        r != null ||
        (c?.length ?? 0) > 0 ||
        (z != null && z.items.length > 0) ||
        (Te && (a.length > 0 || s.length > 0)) ||
        x.length > 0 ||
        h.length > 0 ||
        ne.length > 0 ||
        L.hooks.length > 0 ||
        U ||
        G
      )) {
        Be = null;
        break bb0;
      }
      let S;
      t[88] !== m || t[89] !== b || t[90] !== L.appTemplates?.length || t[91] !== fe
        ? ((S = fe == null ? void 0 : wt(fe, L.appTemplates?.length ?? 0)),
          (t[88] = m),
          (t[89] = b),
          (t[90] = L.appTemplates?.length),
          (t[91] = fe),
          (t[92] = S))
        : (S = t[92]);
      let C = S,
        E = a.length,
        P;
      if (t[93] !== N || t[94] !== C || t[95] !== s) {
        let e;
        (t[97] !== N || t[98] !== C
          ? ((e = (e) => C == null || !N?.some((t) => t.template_id === e.templateId && t.can_setup === !0)),
            (t[97] = N),
            (t[98] = C),
            (t[99] = e))
          : (e = t[99]),
          (P = s.filter(e)),
          (t[93] = N),
          (t[94] = C),
          (t[95] = s),
          (t[96] = P));
      } else P = t[96];
      let ae = E + P.length,
        se = s.length > 1 || (s.length === 1 && L.summary.disabledReason !== `required_app_unavailable`),
        ue;
      t[100] === i
        ? (ue = t[101])
        : ((ue = (e) => i[e.id] !== `disabled-by-admin`), (t[100] = i), (t[101] = ue));
      let de = a.filter(ue),
        H;
      t[102] === i
        ? (H = t[103])
        : ((H = (e) => i[e.id] === `disabled-by-admin`), (t[102] = i), (t[103] = H));
      let pe = a.filter(H),
        me = ie.formatMessage($.otherAppCategory),
        he = Gn([
          ...de.map((e) => ({
            app: e,
            category: Kn(e.branding?.category, me),
            isDisabledByAdmin: !1,
            kind: `app`,
          })),
          ...pe.map((e) => ({
            app: e,
            category: Kn(e.branding?.category, me),
            isDisabledByAdmin: !0,
            kind: `app`,
          })),
          ...s.map((e) => ({ category: Kn(e.category, me), kind: `template`, template: e })),
        ]),
        ge = he.length > 1;
      Oe = p > 0 && D != null;
      let ve = ie.formatMessage({
        id: `plugins.detail.scheduledTasks.customSchedule`,
        defaultMessage: `Custom schedule`,
        description: `Fallback schedule summary for a plugin scheduled task template`,
      });
      ((Re = `plugin-includes`),
        (ze = `contents [--radius-token-row:var(--radius-lg)]`),
        t[104] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((Ve = M(Wt, `empty:hidden`)), (t[104] = Ve))
          : (Ve = t[104]),
        t[105] === U
          ? (He = t[106])
          : ((He = U ? (0, Q.jsx)(Hn, { announceLoading: !0 }) : null), (t[105] = U), (t[106] = He)),
        (Ae =
          Te && (ae > 0 || se)
            ? (0, Q.jsx)(ot, {
                inset: !1,
                count: ae > 0 ? ae : void 0,
                title:
                  ae === 0
                    ? (0, Q.jsx)(f, {
                        id: `plugins.detail.includes.appSetup.title`,
                        defaultMessage: `App setup`,
                        description: `Section listing unconfigured app dependencies for a plugin`,
                      })
                    : (0, Q.jsx)(f, {
                        id: `plugins.detail.includes.apps.title`,
                        defaultMessage: `Apps`,
                        description: `Title for included apps on the plugin detail page`,
                      }),
                children: (0, Q.jsx)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: he.map((e, t) =>
                    (0, Q.jsxs)(
                      `div`,
                      {
                        className: M(`flex flex-col gap-2`, ge && t > 0 && `pt-2`),
                        children: [
                          ge
                            ? (0, Q.jsx)(`div`, {
                                className: `px-[var(--padding-row-x)] text-sm text-tertiary`,
                                children: e.category,
                              })
                            : null,
                          (0, Q.jsx)(tn, {
                            previewItems: e.items.map(Wn),
                            children: e.items.map((e) => {
                              if (e.kind === `template`)
                                return (0, Q.jsx)(
                                  Zt,
                                  {
                                    template: e.template,
                                    managementUrl: N?.some(
                                      (t) => t.template_id === e.template.templateId && t.can_setup === !0,
                                    )
                                      ? C
                                      : void 0,
                                    onManageApps: F,
                                  },
                                  `app-template-${e.template.templateId}`,
                                );
                              let t = l != null && K(e.app.id) === K(l),
                                r;
                              return (
                                oe && t && e.app.isAccessible
                                  ? (r = !1)
                                  : !e.isDisabledByAdmin &&
                                    C != null &&
                                    N?.some((t) =>
                                      t.instances?.some((t) => t.scope === `USER` && K(t.id) === K(e.app.id)),
                                    ) &&
                                    (r = (0, Q.jsx)(Xt, { href: C, onManageApps: F })),
                                (0, Q.jsx)(
                                  Dt,
                                  {
                                    app: e.app,
                                    connectButtonImpressionSurface: n,
                                    connectionAction: r,
                                    appRestriction: ce(e.app.id, u),
                                    cardIconContainerVariant: `outline`,
                                    disabledTooltip: Bn(
                                      e.isDisabledByAdmin,
                                      i[e.app.id] === `connector-unavailable` ||
                                        o?.get(K(e.app.id))?.isUnavailable === !0,
                                      L.summary,
                                    ),
                                    blockedStatusLabel: e.isDisabledByAdmin
                                      ? (0, Q.jsx)(ee, {
                                          tooltipContent: (0, Q.jsx)(f, { ...$.disabledByAdminBadge }),
                                          children: (0, Q.jsx)(`span`, {
                                            role: `img`,
                                            "aria-label": ie.formatMessage($.disabledByAdminBadge),
                                            onPointerMove: Ln,
                                            children: (0, Q.jsx)(Lt, { className: `icon-sm shrink-0` }),
                                          }),
                                        })
                                      : void 0,
                                    installBlockedReason: e.isDisabledByAdmin ? `disabled-by-admin` : null,
                                    isConfigPending: _,
                                    isConnectingApp: v(e.app.id),
                                    canReconnect: o?.get(K(e.app.id))?.canReconnect,
                                    requiresReauth: o?.get(K(e.app.id))?.requiresReauth,
                                    isConnectionUnavailable: o?.get(K(e.app.id))?.isUnavailable,
                                    hideAppConnectionDropdown:
                                      d === null || (d != null && K(e.app.id) === K(d)),
                                    installedStateAction: L.summary.installed ? `toggle` : `check`,
                                    manageAction: `menu`,
                                    remotePluginId: fe,
                                    presentation: `row`,
                                    showInstallAction: L.summary.installed
                                      ? o?.get(K(e.app.id))?.canConnect !== !1
                                      : w && o?.get(K(e.app.id))?.canConnect === !0,
                                    updatingAppId: re,
                                    onInstallApp: T,
                                    onOpenAppTools: k,
                                    onDisconnectApp: A,
                                    onOpenPluginSettingsUrl: j,
                                    onSetAppEnabled: I,
                                  },
                                  `app-${e.app.id}`,
                                )
                              );
                            }),
                          }),
                        ],
                      },
                      e.category,
                    ),
                  ),
                }),
              })
            : null),
        (je = c),
        (Me =
          x.length > 0
            ? (0, Q.jsx)(qe, {
                disableContentInlineInset: !0,
                count: x.length,
                title: (0, Q.jsx)(f, {
                  id: `plugins.detail.includes.mcpServers.title`,
                  defaultMessage: `MCP servers`,
                  description: `Title for included MCP servers on the plugin detail page`,
                }),
                children: (0, Q.jsx)(tn, {
                  children: x.map((e) =>
                    e.kind === `app`
                      ? (0, Q.jsx)(
                          Dt,
                          {
                            app: e.app,
                            connectButtonImpressionSurface: n,
                            appRestriction: ce(e.app.id, u),
                            cardIcon: (0, Q.jsx)(Un, {
                              children: (0, Q.jsx)(Ge, {
                                alt: e.app.name,
                                appInfo: e.app,
                                className: `icon-sm`,
                                fallback: (0, Q.jsx)(We, { className: `icon-xs text-secondary` }),
                              }),
                            }),
                            cardIconContainer: !1,
                            cardIconPlacement: `inline`,
                            cardDescriptionPlacement: `inline`,
                            isConfigPending: _,
                            isConnectingApp: v(e.app.id),
                            canReconnect: o?.get(K(e.app.id))?.canReconnect,
                            installedStateAction: L.summary.installed ? `toggle` : `check`,
                            manageAction: `menu`,
                            remotePluginId: fe,
                            presentation: `row`,
                            showInstallAction: L.summary.installed && o?.get(K(e.app.id))?.canConnect !== !1,
                            updatingAppId: re,
                            onInstallApp: T,
                            onOpenAppTools: k,
                            onDisconnectApp: A,
                            onOpenPluginSettingsUrl: j,
                            onSetAppEnabled: I,
                          },
                          `mcp-app-${e.app.id}`,
                        )
                      : (0, Q.jsx)(
                          Pn,
                          {
                            enabled: e.enabled,
                            installed: e.installed,
                            logoUrl: R,
                            name: e.name,
                            onOpenSettings: O,
                            onToggleEnabled: (t) => {
                              e.configKey != null && te(e.configKey, t);
                            },
                          },
                          `mcp-config-${e.name}`,
                        ),
                  ),
                }),
              })
            : null),
        (Ne = r),
        t[107] === U ? (Pe = t[108]) : ((Pe = U ? (0, Q.jsx)(Hn, {}) : null), (t[107] = U), (t[108] = Pe)),
        t[109] !== ye?.plugin ||
        t[110] !== m ||
        t[111] !== be ||
        t[112] !== U ||
        t[113] !== xe ||
        t[114] !== G
          ? ((q =
              !U && G
                ? (0, Q.jsx)(vn, {
                    dependencies: ye?.plugin.dependencies,
                    hostId: m,
                    isError: be,
                    onRetry: () => void xe(),
                  })
                : null),
            (t[109] = ye?.plugin),
            (t[110] = m),
            (t[111] = be),
            (t[112] = U),
            (t[113] = xe),
            (t[114] = G),
            (t[115] = q))
          : (q = t[115]));
      let W;
      (t[116] !== le || t[117] !== oe || t[118] !== m || t[119] !== L.summary || t[120] !== V
        ? ((W = oe && le && (V != null || ke(L.summary, m) == null)),
          (t[116] = le),
          (t[117] = oe),
          (t[118] = m),
          (t[119] = L.summary),
          (t[120] = V),
          (t[121] = W))
        : (W = t[121]),
        t[122] !== m ||
        t[123] !== h ||
        t[124] !== B ||
        t[125] !== L ||
        t[126] !== g ||
        t[127] !== W ||
        t[128] !== ne
          ? ((Fe = (0, Q.jsx)(nn, {
              hostId: m,
              hideCardActions: W,
              plugin: L,
              installedSkills: h,
              unavailableSkills: ne,
              showSkillReferences: g,
              onSkillsUpdated: B,
            })),
            (t[122] = m),
            (t[123] = h),
            (t[124] = B),
            (t[125] = L),
            (t[126] = g),
            (t[127] = W),
            (t[128] = ne),
            (t[129] = Fe))
          : (Fe = t[129]),
        (Le =
          z != null && z.items.length > 0
            ? (0, Q.jsx)(qe, {
                id: `plugin-scheduled-tasks`,
                disableContentInlineInset: !0,
                count: z.items.length,
                title: (0, Q.jsx)(f, {
                  id: `plugins.detail.scheduledTasks`,
                  defaultMessage: `Scheduled`,
                  description: `Title for scheduled tasks included with a plugin`,
                }),
                children: (0, Q.jsx)(tn, {
                  previewItems: z.items.map(In),
                  children: z.items.map((e) =>
                    (0, Q.jsx)(
                      Qt,
                      {
                        hostId: m,
                        scheduleLabel: _e({ rrule: e.rrule, intl: ie, fallbackMessage: ve }) ?? ve,
                        template: e,
                        onSetUpTemplate: z.onSetUpTemplate,
                      },
                      e.key,
                    ),
                  ),
                }),
              })
            : null));
    }
    ((t[25] = o),
      (t[26] = i),
      (t[27] = a),
      (t[28] = l),
      (t[29] = n),
      (t[30] = d),
      (t[31] = c),
      (t[32] = ye?.plugin),
      (t[33] = le),
      (t[34] = oe),
      (t[35] = u),
      (t[36] = p),
      (t[37] = m),
      (t[38] = h),
      (t[39] = ie),
      (t[40] = v),
      (t[41] = _),
      (t[42] = be),
      (t[43] = U),
      (t[44] = b),
      (t[45] = w),
      (t[46] = y),
      (t[47] = A),
      (t[48] = T),
      (t[49] = F),
      (t[50] = k),
      (t[51] = O),
      (t[52] = j),
      (t[53] = I),
      (t[54] = B),
      (t[55] = te),
      (t[56] = D),
      (t[57] = L),
      (t[58] = R),
      (t[59] = xe),
      (t[60] = fe),
      (t[61] = z),
      (t[62] = N),
      (t[63] = r),
      (t[64] = V),
      (t[65] = Te),
      (t[66] = G),
      (t[67] = g),
      (t[68] = ne),
      (t[69] = s),
      (t[70] = re),
      (t[71] = De),
      (t[72] = Oe),
      (t[73] = Ae),
      (t[74] = je),
      (t[75] = Me),
      (t[76] = Ne),
      (t[77] = Pe),
      (t[78] = q),
      (t[79] = Fe),
      (t[80] = Le),
      (t[81] = Re),
      (t[82] = ze),
      (t[83] = Be),
      (t[84] = Ve),
      (t[85] = He));
  } else
    ((Oe = t[72]),
      (Ae = t[73]),
      (je = t[74]),
      (Me = t[75]),
      (Ne = t[76]),
      (Pe = t[77]),
      (q = t[78]),
      (Fe = t[79]),
      (Le = t[80]),
      (Re = t[81]),
      (ze = t[82]),
      (Be = t[83]),
      (Ve = t[84]),
      (He = t[85]));
  if (Be !== Symbol.for(`react.early_return_sentinel`)) return Be;
  let Ue;
  t[130] !== p ||
  t[131] !== m ||
  t[132] !== E ||
  t[133] !== D ||
  t[134] !== L.hooks.length ||
  t[135] !== L.summary.id ||
  t[136] !== L.summary.installed ||
  t[137] !== Oe
    ? ((Ue =
        L.hooks.length > 0
          ? (0, Q.jsx)(qe, {
              disableContentInlineInset: !0,
              title: (0, Q.jsx)(f, { ...$.hooksTitle }),
              children: (0, Q.jsx)(Jn, {
                hostId: m,
                pluginId: L.summary.id,
                hooksNeedingReviewCount: p,
                installed: L.summary.installed,
                onOpenHooksSettings: E,
                onTrustAllHooks: D,
                shouldShowReviewActions: Oe,
              }),
            })
          : null),
      (t[130] = p),
      (t[131] = m),
      (t[132] = E),
      (t[133] = D),
      (t[134] = L.hooks.length),
      (t[135] = L.summary.id),
      (t[136] = L.summary.installed),
      (t[137] = Oe),
      (t[138] = Ue))
    : (Ue = t[138]);
  let J;
  t[139] !== Ae ||
  t[140] !== je ||
  t[141] !== Me ||
  t[142] !== Ne ||
  t[143] !== Pe ||
  t[144] !== q ||
  t[145] !== Fe ||
  t[146] !== Le ||
  t[147] !== Ue ||
  t[148] !== Ve ||
  t[149] !== He
    ? ((J = (0, Q.jsxs)(`div`, { className: Ve, children: [He, Ae, je, Me, Ne, Pe, q, Fe, Le, Ue] })),
      (t[139] = Ae),
      (t[140] = je),
      (t[141] = Me),
      (t[142] = Ne),
      (t[143] = Pe),
      (t[144] = q),
      (t[145] = Fe),
      (t[146] = Le),
      (t[147] = Ue),
      (t[148] = Ve),
      (t[149] = He),
      (t[150] = J))
    : (J = t[150]);
  let Je;
  return (
    t[151] !== Re || t[152] !== ze || t[153] !== J
      ? ((Je = (0, Q.jsx)(`div`, { id: Re, className: ze, children: J })),
        (t[151] = Re),
        (t[152] = ze),
        (t[153] = J),
        (t[154] = Je))
      : (Je = t[154]),
    Je
  );
}
function In(e) {
  return { icon: (0, Q.jsx)(V, { className: `size-3.5 text-secondary` }), key: e.key, label: e.name };
}
function Ln(e) {
  e.stopPropagation();
}
function Rn(e) {
  return K(e.id);
}
function zn(e) {
  return e.categories.length > 0;
}
function Bn(e, t, n) {
  return e
    ? (0, Q.jsx)(f, {
        id: `plugins.detail.includes.appAdminDisabledExplanation`,
        defaultMessage: `This app isn’t enabled for your workspace. Contact your admin to enable it`,
        description: `Tooltip over an entire disabled app row on a plugin details page. Independent app availability confirms a workspace admin restriction. Tell the workspace member how to request access without implying the app was deleted or explicitly disabled by a particular person. Plain text; no placeholders.`,
      })
    : t
      ? (0, Q.jsx)(f, {
          id: `plugins.detail.includes.appUnavailableExplanation`,
          defaultMessage: `This app isn’t available`,
          description: `Tooltip over an entire disabled app row on a plugin details page when the app is unavailable or no longer resolves in the directory. This includes legacy apps; do not imply an admin restriction or permanent deletion. Plain text for an end user; no placeholders.`,
        })
      : et(n)
        ? (0, Q.jsx)(zt, {
            disabledReason: n.disabledReason,
            children: (0, Q.jsx)(f, {
              id: `plugins.detail.includes.pluginDisabledExplanation`,
              defaultMessage: `This app can’t be used while the plugin is disabled`,
              description: `Tooltip over an entire disabled included-app row on a plugin details page when only the containing plugin is known to be disabled. Do not imply that the app itself is disabled by an admin. Plain text for an end user; no placeholders.`,
            }),
          })
        : null;
}
function Vn(e) {
  let t = (0, Z.c)(33),
    { plugin: n, presentation: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = n == null ? null : Fe(n.summary)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = n == null ? null : $n(n)), (t[2] = n), (t[3] = o));
  let s = o,
    c = r === `dialog` ? `external-browser` : void 0,
    l = n == null || void 0,
    u = n == null && `motion-safe:animate-pulse`,
    d;
  t[4] === u ? (d = t[5]) : ((d = M(u)), (t[4] = u), (t[5] = d));
  let f;
  t[6] === a
    ? (f = t[7])
    : ((f = (0, Q.jsx)(ut, {
        children:
          a == null
            ? (0, Q.jsx)(`div`, { className: `size-full bg-text/10` })
            : (0, Q.jsx)(Ge, {
                alt: ``,
                className: `size-full object-contain`,
                logoDarkUrl: a.logoDarkPath,
                logoUrl: a.logoPath,
                fallback: (0, Q.jsx)(We, { className: `icon-lg text-secondary` }),
              }),
      })),
      (t[6] = a),
      (t[7] = f));
  let p;
  t[8] === n
    ? (p = t[9])
    : ((p = n == null ? (0, Q.jsx)(`div`, { className: `h-4 w-24 rounded bg-text/10` }) : Zn(n)),
      (t[8] = n),
      (t[9] = p));
  let m;
  t[10] === n
    ? (m = t[11])
    : ((m = n == null ? (0, Q.jsx)(`div`, { className: `h-3 w-3/5 rounded bg-text/10` }) : er(n)),
      (t[10] = n),
      (t[11] = m));
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(`div`, {
        "aria-hidden": !0,
        className: `h-token-button-composer w-14 rounded-lg bg-text/10 motion-safe:animate-pulse`,
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== f || t[14] !== p || t[15] !== m
    ? ((g = (0, Q.jsx)(Ne, { asset: f, title: p, subtitle: m, actions: h })),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== g || t[18] !== l || t[19] !== d
    ? ((_ = (0, Q.jsx)(`div`, { "aria-hidden": l, className: d, children: g })),
      (t[17] = g),
      (t[18] = l),
      (t[19] = d),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] !== s || t[22] !== c || t[23] !== n
    ? ((v =
        s && n != null && s !== er(n)
          ? (0, Q.jsx)(`div`, {
              className: `min-w-0 px-[var(--detail-page-inline-inset)]`,
              children: (0, Q.jsx)(Vt, { openTarget: c, children: s }),
            })
          : null),
      (t[21] = s),
      (t[22] = c),
      (t[23] = n),
      (t[24] = v))
    : (v = t[24]);
  let y;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsxs)(`div`, {
        className: Wt,
        children: [(0, Q.jsx)(Hn, { announceLoading: !0 }), (0, Q.jsx)(Hn, {})],
      })),
      (t[25] = y))
    : (y = t[25]);
  let b;
  t[26] !== c || t[27] !== n
    ? ((b = n == null ? null : (0, Q.jsx)(Mn, { plugin: n, openTarget: c })),
      (t[26] = c),
      (t[27] = n),
      (t[28] = b))
    : (b = t[28]);
  let x;
  return (
    t[29] !== _ || t[30] !== v || t[31] !== b
      ? ((x = (0, Q.jsxs)(Ht, { children: [_, v, y, b] })),
        (t[29] = _),
        (t[30] = v),
        (t[31] = b),
        (t[32] = x))
      : (x = t[32]),
    x
  );
}
function Hn(e) {
  let t = (0, Z.c)(8),
    { announceLoading: n } = e,
    r = n !== void 0 && n,
    i = r ? `status` : void 0,
    a = !r || void 0,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r
        ? (0, Q.jsx)(`span`, {
            className: `sr-only`,
            children: (0, Q.jsx)(f, {
              id: `plugins.detail.includes.loading`,
              defaultMessage: `Loading plugin details…`,
              description: `Loading message while a plugin's apps and dependencies are being checked`,
            }),
          })
        : null),
      (t[0] = r),
      (t[1] = o));
  let s, c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`div`, { "aria-hidden": !0, className: `h-4 w-24 rounded bg-text/10` })),
      (c = (0, Q.jsx)(`div`, { "aria-hidden": !0, className: `h-12 rounded-lg bg-text/10` })),
      (t[2] = s),
      (t[3] = c))
    : ((s = t[2]), (c = t[3]));
  let l;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((l = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-4 px-[var(--detail-page-inline-inset)] motion-safe:animate-pulse`,
          role: i,
          "aria-hidden": a,
          children: [o, s, c],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function Un(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `flex size-10 shrink-0 items-center justify-center rounded-md`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Wn(e) {
  return e.kind === `app`
    ? {
        icon: (0, Q.jsx)(Ge, {
          alt: ``,
          appInfo: e.app,
          className: `icon-xs`,
          fallback: (0, Q.jsx)(We, { className: `icon-2xs text-secondary` }),
        }),
        key: `app-${e.app.id}`,
        label: e.app.name,
      }
    : {
        icon: (0, Q.jsx)(Ge, {
          alt: ``,
          className: `icon-xs`,
          logoDarkUrl: e.template.logoUrlDark,
          logoUrl: e.template.logoUrl,
          fallback: (0, Q.jsx)(We, { className: `icon-2xs text-secondary` }),
        }),
        key: `template-${e.template.templateId}`,
        label: e.template.name,
      };
}
function Gn(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.category);
    if (e == null) {
      t.set(n.category, [n]);
      continue;
    }
    e.push(n);
  }
  return [...t].map(([e, t]) => ({ category: e, items: t }));
}
function Kn(e, t) {
  return d(e?.trim() || t, { style: `sentence` });
}
function qn(e) {
  return Array.isArray(e.appTemplates) ? e.appTemplates.filter((e) => e.materializedAppIds.length === 0) : [];
}
function Jn(e) {
  let n = (0, Z.c)(36),
    {
      hostId: r,
      pluginId: i,
      hooksNeedingReviewCount: o,
      installed: s,
      onOpenHooksSettings: c,
      onTrustAllHooks: l,
      shouldShowReviewActions: u,
    } = e,
    d = x(),
    p;
  n[0] !== r || n[1] !== i
    ? ((p = yt({ hostId: r, pluginId: i, source: `plugin` })), (n[0] = r), (n[1] = i), (n[2] = p))
    : (p = n[2]);
  let m = a(p),
    h = null;
  if (s && u) {
    let e;
    n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `plugins.detail.includes.hooks.trustAll`,
          defaultMessage: `Trust all`,
          description: `Button label to trust every hook from a plugin detail page that needs review`,
        })),
        (n[3] = e))
      : (e = n[3]);
    let r;
    n[4] === l
      ? (r = n[5])
      : ((r = (0, Q.jsx)(t, { color: `secondary`, onClick: l, children: e })), (n[4] = l), (n[5] = r));
    let i;
    n[6] === c ? (i = n[7]) : ((i = (e) => we(e, c)), (n[6] = c), (n[7] = i));
    let a;
    n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(f, {
          id: `plugins.detail.includes.hooks.review`,
          defaultMessage: `Review`,
          description: `Button label to open hooks settings from a plugin detail page when hooks need review`,
        })),
        (n[8] = a))
      : (a = n[8]);
    let o;
    n[9] !== m || n[10] !== i
      ? ((o = (0, Q.jsx)(j, { color: `secondary`, href: m, onClick: i, children: a })),
        (n[9] = m),
        (n[10] = i),
        (n[11] = o))
      : (o = n[11]);
    let s;
    (n[12] !== r || n[13] !== o
      ? ((s = (0, Q.jsxs)(`span`, { className: `flex items-center gap-2`, children: [r, o] })),
        (n[12] = r),
        (n[13] = o),
        (n[14] = s))
      : (s = n[14]),
      (h = s));
  } else if (s) {
    let e;
    n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, { ...$.hooksSettings })), (n[15] = e))
      : (e = n[15]);
    let t;
    n[16] === d ? (t = n[17]) : ((t = d.formatMessage($.hooksSettings)), (n[16] = d), (n[17] = t));
    let r;
    n[18] === c ? (r = n[19]) : ((r = (e) => we(e, c)), (n[18] = c), (n[19] = r));
    let i;
    n[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(N, { className: `icon-sm` })), (n[20] = i))
      : (i = n[20]);
    let a;
    (n[21] !== m || n[22] !== t || n[23] !== r
      ? ((a = (0, Q.jsx)(ee, {
          tooltipContent: e,
          children: (0, Q.jsx)(j, {
            href: m,
            color: `ghost`,
            size: `toolbar`,
            uniform: !0,
            "aria-label": t,
            onClick: r,
            children: i,
          }),
        })),
        (n[21] = m),
        (n[22] = t),
        (n[23] = r),
        (n[24] = a))
      : (a = n[24]),
      (h = a));
  }
  let g;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(f, {
        id: `plugins.detail.includes.hooks.description`,
        defaultMessage: `Run deterministic scripts during the task lifecycle`,
        description: `Description for included hooks on the plugin detail page`,
      })),
      (n[25] = g))
    : (g = n[25]);
  let v;
  n[26] !== o || n[27] !== u
    ? ((v = u
        ? (0, Q.jsxs)(`span`, {
            className: `flex items-center gap-1 text-default`,
            children: [
              (0, Q.jsx)(it, { className: `icon-2xs shrink-0 text-warning` }),
              (0, Q.jsx)(f, {
                id: `plugins.detail.includes.hooks.needsReview`,
                defaultMessage: `{count, plural, one {# hook needs review before it can run} other {# hooks need review before they can run}}`,
                description: `Warning shown when hooks from a plugin detail page need review before they can run`,
                values: { count: o },
              }),
            ],
          })
        : null),
      (n[26] = o),
      (n[27] = u),
      (n[28] = v))
    : (v = n[28]);
  let y;
  n[29] === v
    ? (y = n[30])
    : ((y = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [g, v] })),
      (n[29] = v),
      (n[30] = y));
  let b;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(_, { className: `text-secondary` })), (n[31] = b))
    : (b = n[31]);
  let S;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(f, { ...$.hooksTitle })), (n[32] = S))
    : (S = n[32]);
  let C;
  return (
    n[33] !== h || n[34] !== y
      ? ((C = (0, Q.jsx)(Ct, {
          actions: h,
          actionsPlacement: `center`,
          description: y,
          descriptionClassName: `text-xs leading-4`,
          icon: b,
          iconContainerVariant: `outline`,
          presentation: `row`,
          title: S,
        })),
        (n[33] = h),
        (n[34] = y),
        (n[35] = C))
      : (C = n[35]),
    C
  );
}
function Yn(e) {
  let t = (0, Z.c)(4),
    { description: n, title: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(Ft, { "aria-hidden": !0, className: `h-20 w-auto text-tertiary` })), (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== n || t[2] !== r
      ? ((a = (0, Q.jsx)(`div`, {
          className: `flex min-h-0 flex-1 items-center justify-center py-8`,
          children: (0, Q.jsx)(le, { title: r, description: n, illustration: i }),
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Xn(e) {
  let t = (0, Z.c)(9),
    { ariaLabel: n, href: r, openTarget: i } = e,
    a,
    o;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        Oe({ event: e, href: r, openTarget: i, initiator: `open_in_browser_bridge` });
      }),
      (o = (0, Q.jsx)(xe, { href: r, className: `icon-xs`, openTarget: i })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] !== n || t[5] !== r || t[6] !== a || t[7] !== o
      ? ((s = (0, Q.jsx)(`a`, {
          "aria-label": n,
          className: `relative isolate inline-flex size-5 cursor-interaction items-center justify-center rounded-md text-default! outline-none before:absolute before:-inset-1 before:-z-10 before:rounded-md before:content-[''] hover:before:bg-primary-ghost-hover focus-visible:before:ring-1 focus-visible:before:ring-ring`,
          href: r,
          onClick: a,
          children: o,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function Zn(e) {
  return e.summary.interface?.displayName ?? e.summary.name;
}
function Qn(e) {
  return e.length === 0 ? e : `${e[0].toUpperCase()}${e.slice(1)}`;
}
function $n(e) {
  return (
    [e.summary.interface?.longDescription, e.description, e.summary.interface?.shortDescription].find((e) =>
      e?.trim(),
    ) ?? null
  );
}
function er(e) {
  return (
    [e.summary.interface?.shortDescription, e.description, e.summary.interface?.longDescription].find((e) =>
      e?.trim(),
    ) ?? null
  );
}
var Z, tr, Q, $, nr;
function rr() {
  return (rr = e(() => {
    ((Z = ne()),
      Xe(),
      pt(),
      T(),
      w(),
      E(),
      h(),
      B(),
      b(),
      (tr = oe()),
      I(),
      O(),
      je(),
      Be(),
      pe(),
      De(),
      Le(),
      G(),
      ze(),
      te(),
      Ut(),
      Qe(),
      ve(),
      He(),
      y(),
      Ve(),
      nt(),
      Mt(),
      m(),
      A(),
      c(),
      k(),
      fe(),
      tt(),
      Re(),
      Pt(),
      ge(),
      It(),
      D(),
      at(),
      Pe(),
      St(),
      mt(),
      Bt(),
      W(),
      re(),
      vt(),
      Je(),
      Et(),
      q(),
      v(),
      de(),
      kt(),
      Gt(),
      gt(),
      Yt(),
      Cn(),
      J(),
      xt(),
      Rt(),
      rn(),
      Tt(),
      qt(),
      en(),
      $t(),
      Ue(),
      At(),
      he(),
      Me(),
      (Q = ae()),
      ($ = n({
        capabilities: {
          id: `plugins.detail.information.capabilities`,
          defaultMessage: `Capabilities`,
          description: `Label for plugin capabilities on the detail page`,
        },
        category: {
          id: `plugins.detail.information.category`,
          defaultMessage: `Category`,
          description: `Label for plugin category on the detail page`,
        },
        developer: {
          id: `plugins.detail.information.developer`,
          defaultMessage: `Developer`,
          description: `Label for plugin developer on the detail page`,
        },
        information: {
          id: `plugins.detail.information`,
          defaultMessage: `Information`,
          description: `Section title for plugin information on the detail page`,
        },
        unavailable: {
          id: `plugins.detail.information.unavailable`,
          defaultMessage: `Unavailable`,
          description: `Value shown when plugin information is unavailable`,
        },
        version: {
          id: `plugins.detail.information.version`,
          defaultMessage: `Version`,
          description: `Label for plugin version on the detail page`,
        },
        disabledByAdminBadge: {
          id: `plugins.detail.includes.disabledByAdminBadge`,
          defaultMessage: `Disabled by admin`,
          description: `Tooltip label shown on an included app or app template row when it is disabled by admin on the plugin detail page`,
        },
        mcpServerDisable: {
          id: `plugins.detail.mcp.disable`,
          defaultMessage: `Disable MCP server`,
          description: `Tooltip label for disabling an MCP server from the plugin detail page`,
        },
        mcpServerEnable: {
          id: `plugins.detail.mcp.enable`,
          defaultMessage: `Enable MCP server`,
          description: `Tooltip label for enabling an MCP server from the plugin detail page`,
        },
        mcpServerSettings: {
          id: `plugins.detail.mcp.settings`,
          defaultMessage: `Open MCP settings`,
          description: `Tooltip label for the settings button on an MCP server card in plugin detail`,
        },
        mcpServerSetup: {
          id: `plugins.detail.mcp.setup`,
          defaultMessage: `Set up in MCP settings`,
          description: `Tooltip label for the settings button when an MCP server still needs to be configured`,
        },
        mcpServerToggleAria: {
          id: `plugins.detail.mcp.toggleAria`,
          defaultMessage: `Toggle MCP server enabled state`,
          description: `Accessible label for the MCP server enablement toggle on the plugin detail page`,
        },
        hooksSettings: {
          id: `plugins.detail.hooks.settings`,
          defaultMessage: `Manage in settings`,
          description: `Tooltip label for opening Hooks settings from the plugin detail page`,
        },
        hooksTitle: {
          id: `plugins.detail.includes.hooks.title`,
          defaultMessage: `Hooks`,
          description: `Title for included hooks on the plugin detail page`,
        },
        otherAppCategory: {
          id: `plugins.detail.includes.apps.otherCategory`,
          defaultMessage: `Other`,
          description: `Fallback category title for included apps on the plugin detail page`,
        },
        missing: {
          id: `plugins.detail.missing`,
          defaultMessage: `Plugin not found`,
          description: `Not found title on the plugin detail page`,
        },
        missingDescription: {
          id: `plugins.detail.missingDescription`,
          defaultMessage: `This plugin could not be loaded from its marketplace entry.`,
          description: `Not found description on the plugin detail page`,
        },
        privacyPolicy: {
          id: `plugins.detail.information.privacyPolicy`,
          defaultMessage: `Privacy Policy`,
          description: `Label for plugin privacy policy on the detail page`,
        },
        website: {
          id: `plugins.detail.information.website`,
          defaultMessage: `Website`,
          description: `Label for plugin website on the detail page`,
        },
        errorTitle: {
          id: `plugins.detail.errorTitle`,
          defaultMessage: `Failed to load plugin`,
          description: `Error title shown on the plugin detail page`,
        },
        termsOfService: {
          id: `plugins.detail.information.termsOfService`,
          defaultMessage: `Terms of Service`,
          description: `Label for plugin terms of service on the detail page`,
        },
      })),
      (nr = new Set([
        `connector_gmail`,
        `connector_google_bigquery`,
        `connector_google_calendar`,
        `connector_google_contacts`,
        `connector_google_docs`,
        `connector_google_drive`,
        `connector_google_sheets`,
        `connector_google_slides`,
      ])));
  }))();
}
export { rr as n, wn as t };
//# sourceMappingURL=plugin-detail-view-b3e0b4128909.js.map
