import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BSt as r,
  CH as i,
  FBt as a,
  Jk as o,
  LNt as s,
  MD as c,
  MNt as l,
  Mst as u,
  ND as d,
  NNt as f,
  NSt as p,
  Nst as m,
  Nz as h,
  PBt as g,
  PW as _,
  Pst as v,
  Pz as y,
  Qst as b,
  RFt as x,
  TY as S,
  USt as C,
  VSt as w,
  X3 as T,
  XE as E,
  XOt as D,
  Y3 as O,
  YOt as k,
  Yk as A,
  Z3 as j,
  ZE as M,
  ZSt as N,
  iCt as P,
  jbt as F,
  jst as I,
  lk as L,
  nB as ee,
  nCt as R,
  okt as te,
  rB as z,
  sct as ne,
  tkt as B,
  uk as re,
  vbt as ie,
  w_t as ae,
  zFt as oe,
  zK as se,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bat as ce,
  Bhr as V,
  Cjr as le,
  D3n as H,
  Dfr as ue,
  Dl as de,
  E3n as fe,
  E4 as pe,
  Emr as U,
  Fin as me,
  G2n as he,
  Hhr as ge,
  IMr as _e,
  Iin as W,
  Jfr as ve,
  K4 as ye,
  KBr as be,
  M4 as G,
  M6t as xe,
  N6t as K,
  Os as Se,
  RMr as Ce,
  Rfr as we,
  Rmr as Te,
  SRn as Ee,
  Sjr as De,
  Sl as Oe,
  Tfr as q,
  UFt as ke,
  Ufr as Ae,
  WFt as je,
  XEn as Me,
  Xmr as Ne,
  YEn as Pe,
  _Fr as Fe,
  _fr as Ie,
  ao as Le,
  bRn as Re,
  dfr as ze,
  eRn as Be,
  gat as Ve,
  iI as He,
  io as Ue,
  kat as J,
  kfr as We,
  ks as Ge,
  nan as Ke,
  q4 as qe,
  rI as Je,
  ran as Ye,
  tRn as Xe,
  u6n as Ze,
  wmr as Qe,
  xFr as $e,
  xjr as et,
  xl as tt,
  zMr as nt,
  zat as rt,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as it, Uy as at } from "./app-primary-3e00728c2a4c.js";
import {
  A as ot,
  D as st,
  M as ct,
  N as lt,
  O as ut,
  j as dt,
  k as ft,
  t as pt,
} from "./src-64808839b2f3.js";
import { n as mt, r as ht } from "./plugin-connector-setup-b971d5575d59.js";
import { n as gt, t as _t } from "./card-tile-50cbf58d3a76.js";
import { r as vt, t as yt } from "./plugin-connected-account-links-e850d089d83d.js";
import { r as bt, t as xt } from "./hooks-settings-route-8191acda142e.js";
import { n as St, t as Ct } from "./plugin-detail-settings-enabled-2f8f2b1ac7c8.js";
import { n as wt } from "./plugin-settings-url-shared-636b299186d8.js";
import { t as Tt } from "./plugin-settings-url-a388503d206b.js";
import { n as Et, t as Dt } from "./app-card-f4f0407668d0.js";
import { a as Ot, i as kt, n as At, r as jt, s as Mt, t as Nt } from "./plugin-origin-badge-94941c5b3ed3.js";
import { n as Pt, t as Ft } from "./empty-state-puzzle-piece-7a1788dec829.js";
import { n as It, t as Lt } from "./profile-lock-cbf73bd970b9.js";
import { n as Rt, t as zt } from "./plugin-disabled-reason-d4d9fa410a83.js";
import { n as Bt, t as Vt } from "./plugin-description-115b63c7b026.js";
import { n as Ht, r as Ut, t as Wt } from "./detail-page-a44b593da037.js";
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
} from "./skills-aaddeb8b3b3d.js";
function an(e) {
  let t = (0, on.c)(21),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, muted: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i !== void 0 && i,
    o,
    s;
  if (t[4] !== n || t[5] !== a || t[6] !== r) {
    s = Symbol.for(`react.early_return_sentinel`);
    bb0: if (
      ((o = l(
        `h-8 min-w-0 items-center gap-1 rounded-full border ps-2 pe-3 py-0 text-sm leading-[18px] whitespace-nowrap select-none`,
        a ? `border-transparent bg-text/5 text-tertiary` : `border-default bg-surface`,
        r.as !== `span` &&
          (a
            ? `not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10`
            : `not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`),
        n,
      )),
      r.as === `span`)
    ) {
      let e;
      if (t[9] !== r) {
        let { as: n, ...i } = r;
        ((e = i), (t[9] = r), (t[10] = e));
      } else e = t[10];
      s = (0, sn.jsx)(`span`, { className: l(`inline-flex`, o), ...e });
      break bb0;
    }
    ((t[4] = n), (t[5] = a), (t[6] = r), (t[7] = o), (t[8] = s));
  } else ((o = t[7]), (s = t[8]));
  if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
  if (r.as === `a`) {
    let e;
    if (t[11] !== r) {
      let { as: n, ...i } = r;
      ((e = i), (t[11] = r), (t[12] = e));
    } else e = t[12];
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, sn.jsx)(T, { className: o, ...e, unstyled: !0 })), (t[13] = o), (t[14] = e), (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let c;
  if (t[16] !== r) {
    let { as: e, ...n } = r;
    ((c = n), (t[16] = r), (t[17] = c));
  } else c = t[17];
  let u;
  return (
    t[18] !== c || t[19] !== o
      ? ((u = (0, sn.jsx)(O, { className: o, ...c, unstyled: !0 })), (t[18] = c), (t[19] = o), (t[20] = u))
      : (u = t[20]),
    u
  );
}
var on, sn;
function cn() {
  return (cn = e(() => {
    ((on = g()), f(), j(), (sn = s()));
  }))();
}
function ln(e) {
  let t = (0, gn.c)(63),
    { group: n, hostId: r } = e,
    i = te(),
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = { hostId: r, roots: void 0, resolveActiveRoots: !0 }), (t[0] = r), (t[1] = a));
  let { data: o } = We(a),
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
    u = (0, Y.useId)(),
    d = (0, Y.useRef)(null),
    f = (0, Y.useRef)(null),
    p = (0, Y.useRef)(null),
    m = (0, Y.useRef)(null),
    [h, g] = (0, Y.useState)(c.length),
    [_, v] = (0, Y.useState)(!1),
    y;
  t[7] !== _ || t[8] !== c.length
    ? ((y = () => {
        let e = d.current,
          t = f.current;
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
  let x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        let e = m.current;
        ((m.current = null),
          e === `overflow`
            ? p.current?.focus()
            : e != null &&
              (
                Array.from(d.current?.querySelectorAll(`[data-dependency-chip]`) ?? [])[e] ??
                p.current ??
                d.current
              )?.focus());
      }),
      (t[13] = x))
    : (x = t[13]);
  let S;
  (t[14] !== _ || t[15] !== h ? ((S = [h, _]), (t[14] = _), (t[15] = h), (t[16] = S)) : (S = t[16]),
    (0, Y.useLayoutEffect)(x, S));
  let C;
  t[17] !== c.length || t[18] !== h
    ? ((C = (e) => {
        ((m.current = e ? h : 0), !e && h < c.length && (m.current = `overflow`), v(e));
      }),
      (t[17] = c.length),
      (t[18] = h),
      (t[19] = C))
    : (C = t[19]);
  let w = C,
    T = Math.max(0, c.length - h),
    E = _ ? `items-start` : `items-center`,
    D;
  t[20] === E ? (D = t[21]) : ((D = l(`flex min-w-0 gap-4`, E)), (t[20] = E), (t[21] = D));
  let O;
  t[22] !== n.label || t[23] !== u
    ? ((O = (0, X.jsx)(`dt`, {
        id: u,
        className: `w-1/3 shrink-0 text-sm break-words text-secondary sm:w-32`,
        children: n.label,
      })),
      (t[22] = n.label),
      (t[23] = u),
      (t[24] = O))
    : (O = t[24]);
  let k = _ && `flex-wrap`,
    A;
  t[25] === k ? (A = t[26]) : ((A = l(`flex min-w-0 items-center gap-2`, k)), (t[25] = k), (t[26] = A));
  let j;
  t[27] !== w || t[28] !== _
    ? ((j = (e) => {
        _ && e.key === `Escape` && (e.preventDefault(), w(!1));
      }),
      (t[27] = w),
      (t[28] = _),
      (t[29] = j))
    : (j = t[29]);
  let M;
  if (t[30] !== r || t[31] !== _ || t[32] !== c || t[33] !== h) {
    let e;
    (t[35] === r
      ? (e = t[36])
      : ((e = (e) => (0, X.jsx)(fn, { provider: e, hostId: r }, e.plugin_id)), (t[35] = r), (t[36] = e)),
      (M = c.slice(0, _ ? c.length : h).map(e)),
      (t[30] = r),
      (t[31] = _),
      (t[32] = c),
      (t[33] = h),
      (t[34] = M));
  } else M = t[34];
  let N;
  t[37] !== w || t[38] !== n.label || t[39] !== T || t[40] !== i || t[41] !== _
    ? ((N =
        (T > 0 || _) &&
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
                { count: T, category: n.label },
              ),
          onClick: () => w(!_),
          children: _
            ? (0, X.jsx)(B, {
                id: `plugins.dependencies.collapse`,
                defaultMessage: `Show less`,
                description: `Button to collapse a Works with provider category back to one row`,
              })
            : (0, X.jsx)(B, {
                id: `plugins.dependencies.overflow`,
                defaultMessage: `+{count, number}`,
                description: `Compact count of disclosed provider plugins that do not fit in a Works with category row`,
                values: { count: T },
              }),
        })),
      (t[37] = w),
      (t[38] = n.label),
      (t[39] = T),
      (t[40] = i),
      (t[41] = _),
      (t[42] = N))
    : (N = t[42]);
  let P;
  t[43] !== u || t[44] !== A || t[45] !== j || t[46] !== M || t[47] !== N
    ? ((P = (0, X.jsxs)(`div`, {
        ref: d,
        role: `group`,
        "aria-labelledby": u,
        tabIndex: -1,
        className: A,
        onKeyDown: j,
        children: [M, N],
      })),
      (t[43] = u),
      (t[44] = A),
      (t[45] = j),
      (t[46] = M),
      (t[47] = N),
      (t[48] = P))
    : (P = t[48]);
  let F;
  t[49] === c ? (F = t[50]) : ((F = c.map(un)), (t[49] = c), (t[50] = F));
  let I;
  t[51] === c.length
    ? (I = t[52])
    : ((I = (0, X.jsx)(an, {
        className: `shrink-0`,
        tabIndex: -1,
        children: (0, X.jsx)(B, {
          id: `plugins.dependencies.overflow`,
          defaultMessage: `+{count, number}`,
          description: `Compact count of disclosed provider plugins that do not fit in a Works with category row`,
          values: { count: c.length },
        }),
      })),
      (t[51] = c.length),
      (t[52] = I));
  let L;
  t[53] !== F || t[54] !== I
    ? ((L = (0, X.jsxs)(`div`, {
        ref: f,
        "aria-hidden": !0,
        inert: !0,
        className: `pointer-events-none invisible absolute inset-x-0 top-0 flex h-0 items-center gap-2 overflow-hidden`,
        children: [F, I],
      })),
      (t[53] = F),
      (t[54] = I),
      (t[55] = L))
    : (L = t[55]);
  let ee;
  t[56] !== P || t[57] !== L
    ? ((ee = (0, X.jsxs)(`dd`, { className: `relative min-w-0 flex-1`, children: [P, L] })),
      (t[56] = P),
      (t[57] = L),
      (t[58] = ee))
    : (ee = t[58]);
  let R;
  return (
    t[59] !== O || t[60] !== ee || t[61] !== D
      ? ((R = (0, X.jsxs)(`div`, { className: D, children: [O, ee] })),
        (t[59] = O),
        (t[60] = ee),
        (t[61] = D),
        (t[62] = R))
      : (R = t[62]),
    R
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
    { provider: n, hostId: i } = e,
    a = te(),
    o = C(),
    s = w(),
    [c, l] = (0, Y.useState)(!1),
    u = (0, Y.useRef)(!1),
    [d, f] = (0, Y.useState)(null),
    [p, m] = (0, Y.useState)(!1),
    h;
  t[0] !== a || t[1] !== n ? ((h = hn(a, n)), (t[0] = a), (t[1] = n), (t[2] = h)) : (h = t[2]);
  let g = h,
    _ = n.is_enabled === !1 || n.availability_status != null,
    v = _ ? g : void 0,
    y = n.navigation?.kind === `plugin_detail` && n.navigation.plugin_id === n.plugin_id,
    b;
  t[3] !== i || t[4] !== s.search || t[5] !== n.plugin_id
    ? ((b = ie({ hostId: i, pluginId: n.plugin_id, browseSearch: s.search })),
      (t[3] = i),
      (t[4] = s.search),
      (t[5] = n.plugin_id),
      (t[6] = b))
    : (b = t[6]);
  let x = r(b),
    S;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        if (e == null) return;
        f(e);
        let t = e.parentElement;
        return (
          u.current && t?.focus(),
          (u.current = !1),
          () => {
            u.current = t === e.ownerDocument.activeElement;
          }
        );
      }),
      (t[7] = S))
    : (S = t[7]);
  let T = S,
    E;
  t[8] !== d?.parentElement || t[9] !== c
    ? ((E = () => {
        let e = d?.parentElement;
        if (!c || e == null) return;
        let t = (t) => {
            t.composedPath().includes(e) || l(!1);
          },
          n = e.ownerDocument;
        return (
          n.addEventListener(`pointerdown`, t, !0),
          () => {
            n.removeEventListener(`pointerdown`, t, !0);
          }
        );
      }),
      (t[8] = d?.parentElement),
      (t[9] = c),
      (t[10] = E))
    : (E = t[10]);
  let D;
  (t[11] !== d || t[12] !== c ? ((D = [d, c]), (t[11] = d), (t[12] = c), (t[13] = D)) : (D = t[13]),
    (0, Y.useEffect)(E, D));
  let O;
  t[14] !== d || t[15] !== v
    ? ((O = () => {
        if (d == null) return;
        let e = () => {
          let e = d.scrollWidth > d.clientWidth;
          (!e && v == null && l(!1), m(e));
        };
        e();
        let t = new ResizeObserver(e);
        return (t.observe(d), () => t.disconnect());
      }),
      (t[14] = d),
      (t[15] = v),
      (t[16] = O))
    : (O = t[16]);
  let k;
  if (
    (t[17] !== d || t[18] !== n.display_name || t[19] !== v
      ? ((k = [d, n.display_name, v]), (t[17] = d), (t[18] = n.display_name), (t[19] = v), (t[20] = k))
      : (k = t[20]),
    (0, Y.useLayoutEffect)(O, k),
    !y && v == null && !p)
  ) {
    let e;
    t[21] === n ? (e = t[22]) : ((e = (0, X.jsx)(pn, { provider: n, nameRef: T })), (t[21] = n), (t[22] = e));
    let r;
    return (
      t[23] !== g || t[24] !== e
        ? ((r = (0, X.jsx)(an, {
            className: `max-w-full shrink-0`,
            as: `span`,
            "data-dependency-chip": !0,
            "aria-description": g,
            tabIndex: -1,
            children: e,
          })),
          (t[23] = g),
          (t[24] = e),
          (t[25] = r))
        : (r = t[25]),
      r
    );
  }
  let A;
  t[26] !== p || t[27] !== n.display_name
    ? ((A = p ? (0, X.jsx)(`div`, { children: n.display_name }) : null),
      (t[26] = p),
      (t[27] = n.display_name),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== v || t[30] !== A
    ? ((j = (0, X.jsxs)(X.Fragment, { children: [A, v] })), (t[29] = v), (t[30] = A), (t[31] = j))
    : (j = t[31]);
  let M = v == null ? `trigger-overflows` : `always`,
    N = c && (v != null || p),
    P;
  t[32] !== y || t[33] !== x
    ? ((P = y ? { as: `a`, href: x } : { as: `button` }), (t[32] = y), (t[33] = x), (t[34] = P))
    : (P = t[34]);
  let F;
  t[35] !== y ||
  t[36] !== i ||
  t[37] !== s.search ||
  t[38] !== p ||
  t[39] !== o ||
  t[40] !== n.display_name ||
  t[41] !== n.plugin_id ||
  t[42] !== v ||
  t[43] !== c
    ? ((F = (e) => {
        y
          ? de(e, () => {
              o(ie({ hostId: i, pluginId: n.plugin_id, browseSearch: s.search }), {
                state: { pluginDisplayName: n.display_name },
              });
            })
          : (v != null || p) && l(!c);
      }),
      (t[35] = y),
      (t[36] = i),
      (t[37] = s.search),
      (t[38] = p),
      (t[39] = o),
      (t[40] = n.display_name),
      (t[41] = n.plugin_id),
      (t[42] = v),
      (t[43] = c),
      (t[44] = F))
    : (F = t[44]);
  let I, L;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => l(!1)),
      (L = (e) => {
        e.key === `Escape` && l(!1);
      }),
      (t[45] = I),
      (t[46] = L))
    : ((I = t[45]), (L = t[46]));
  let R;
  t[47] === n ? (R = t[48]) : ((R = (0, X.jsx)(pn, { provider: n, nameRef: T })), (t[47] = n), (t[48] = R));
  let z;
  t[49] !== g || t[50] !== _ || t[51] !== n.display_name || t[52] !== P || t[53] !== F || t[54] !== R
    ? ((z = (0, X.jsx)(an, {
        className: `max-w-full shrink-0`,
        ...P,
        allowShrink: !0,
        muted: _,
        "data-dependency-chip": !0,
        "aria-label": n.display_name,
        "aria-description": g,
        onClick: F,
        onBlur: I,
        onKeyDown: L,
        children: R,
      })),
      (t[49] = g),
      (t[50] = _),
      (t[51] = n.display_name),
      (t[52] = P),
      (t[53] = F),
      (t[54] = R),
      (t[55] = z))
    : (z = t[55]);
  let ne;
  return (
    t[56] !== y || t[57] !== M || t[58] !== N || t[59] !== z || t[60] !== j
      ? ((ne = (0, X.jsx)(ee, {
          tooltipContent: j,
          openWhen: M,
          open: N,
          onOpenChange: l,
          closeOnTriggerClick: y,
          triggerAsChild: !0,
          cloneCustomTrigger: !0,
          children: z,
        })),
        (t[56] = y),
        (t[57] = M),
        (t[58] = N),
        (t[59] = z),
        (t[60] = j),
        (t[61] = ne))
      : (ne = t[61]),
    ne
  );
}
function pn(e) {
  let t = (0, gn.c)(20),
    { provider: n, nameRef: r } = e,
    a = n.is_enabled === !1 || n.availability_status != null,
    o = a && `opacity-40 grayscale`,
    s;
  t[0] === o ? (s = t[1]) : ((s = l(`size-5 shrink-0`, o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, X.jsx)(se, {})), (t[2] = c)) : (c = t[2]);
  let u;
  t[3] !== n.icon_url || t[4] !== n.icon_url_dark || t[5] !== s
    ? ((u = (0, X.jsx)(xe, {
        className: s,
        alt: ``,
        logoUrl: n.icon_url,
        logoDarkUrl: n.icon_url_dark,
        fallback: c,
      })),
      (t[3] = n.icon_url),
      (t[4] = n.icon_url_dark),
      (t[5] = s),
      (t[6] = u))
    : (u = t[6]);
  let d = a && `text-tertiary`,
    f;
  t[7] === d ? (f = t[8]) : ((f = l(`truncate`, d)), (t[7] = d), (t[8] = f));
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
  t[13] !== a || t[14] !== n.is_installed
    ? ((m = !a && n.is_installed === !0 ? (0, X.jsx)(i, { className: `text-tertiary` }) : null),
      (t[13] = a),
      (t[14] = n.is_installed),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== u || t[17] !== p || t[18] !== m
      ? ((h = (0, X.jsxs)(X.Fragment, { children: [u, p, m] })),
        (t[16] = u),
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
    ((gn = g()), f(), ne(), (Y = a()), D(), p(), K(), S(), z(), q(), cn(), (X = s()));
  }))();
}
function vn(e) {
  let t = (0, xn.c)(8),
    { dependencies: n, hostId: r, isError: i, onRetry: a } = e;
  if (i) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Sn.jsx)(B, {
          id: `plugins.dependencies.heading`,
          defaultMessage: `Works with`,
          description: `Heading for the categorized provider plugins this plugin declares it can use, before or after installation`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Sn.jsx)(B, {
          id: `plugins.dependencies.error`,
          defaultMessage: `Couldn’t load dependencies`,
          description: `Error in the Works with section when the plugin's dependency details could not be loaded`,
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Sn.jsx)(B, {
          id: `plugins.dependencies.retry`,
          defaultMessage: `Retry`,
          description: `Button to reload plugin dependencies after a request failed`,
        })),
        (t[2] = r))
      : (r = t[2]);
    let i;
    return (
      t[3] === a
        ? (i = t[4])
        : ((i = (0, Sn.jsx)(Ue, {
            showDivider: !1,
            title: e,
            children: (0, Sn.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4 text-sm text-secondary`,
              children: [n, (0, Sn.jsx)(O, { color: `secondary`, onClick: a, children: r })],
            }),
          })),
          (t[3] = a),
          (t[4] = i)),
      i
    );
  }
  let o;
  return (
    t[5] !== n || t[6] !== r
      ? ((o = (0, Sn.jsx)(yn, { hostId: r, dependencies: n })), (t[5] = n), (t[6] = r), (t[7] = o))
      : (o = t[7]),
    o
  );
}
function yn(e) {
  let t = (0, xn.c)(22),
    { dependencies: n, hostId: r } = e,
    i = te();
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
      ((a = Ue),
        (c = `plugin-dependencies`),
        (l = !1),
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((u = (0, Sn.jsx)(B, {
              id: `plugins.dependencies.heading`,
              defaultMessage: `Works with`,
              description: `Heading for the categorized provider plugins this plugin declares it can use, before or after installation`,
            })),
            (t[10] = u))
          : (u = t[10]),
        (o = `flex min-w-0 flex-col gap-3 select-none`));
      let f;
      (t[11] === r
        ? (f = t[12])
        : ((f = (e) => (0, Sn.jsx)(ln, { group: e, hostId: r }, e.id)), (t[11] = r), (t[12] = f)),
        (s = e.map(f)));
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
  let f;
  t[13] !== o || t[14] !== s
    ? ((f = (0, Sn.jsx)(`dl`, { className: o, children: s })), (t[13] = o), (t[14] = s), (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== a || t[17] !== c || t[18] !== l || t[19] !== u || t[20] !== f
      ? ((p = (0, Sn.jsx)(a, { id: c, showDivider: l, title: u, children: f })),
        (t[16] = a),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
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
    ((xn = g()), D(), j(), Le(), _n(), (Sn = s()));
  }))();
}
function wn(e) {
  let n = (0, Z.c)(18),
    r = t(b),
    i = te(),
    a;
  n[0] !== e.errorMessage || n[1] !== e.state
    ? ((a = null),
      e.state === `error` &&
        (a = e.errorMessage?.includes(`path does not exist or is not a directory`)
          ? `missing_plugin_path`
          : `other`),
      (n[0] = e.errorMessage),
      (n[1] = e.state),
      (n[2] = a))
    : (a = n[2]);
  let o = (0, tr.useRef)(null),
    s;
  n[3] !== a || n[4] !== r
    ? ((s = () => {
        a !== o.current &&
          ((o.current = a), a != null && oe.warning(`plugin_detail_error_shown`, { safe: { reason: a } }));
      }),
      (n[3] = a),
      (n[4] = r),
      (n[5] = s))
    : (s = n[5]);
  let c;
  (n[6] !== a || n[7] !== r ? ((c = [a, r]), (n[6] = a), (n[7] = r), (n[8] = c)) : (c = n[8]),
    (0, tr.useEffect)(s, c));
  let l;
  n[9] === i
    ? (l = n[10])
    : ((l = i.formatMessage({
        id: `plugins.detail.sectionsNav`,
        defaultMessage: `Plugin sections`,
        description: `Accessible label for the section navigation on the plugin detail page`,
      })),
      (n[9] = i),
      (n[10] = l));
  let u =
      `presentation` in e && e.presentation === `dialog`
        ? `flex min-h-full flex-col p-6`
        : `flex min-h-full flex-col px-toolbar electron:pt-panel electron:pb-panel`,
    d;
  n[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = []), (n[11] = d)) : (d = n[11]);
  let f;
  n[12] === e
    ? (f = n[13])
    : ((f =
        e.state === `loading`
          ? (0, Q.jsx)(Vn, { plugin: e.plugin, presentation: e.presentation })
          : e.state === `error`
            ? (0, Q.jsx)(Yn, {
                title: (0, Q.jsx)(B, { ...$.errorTitle }),
                description: e.errorMessage ?? void 0,
              })
            : e.state === `missing`
              ? (0, Q.jsx)(Yn, {
                  title: (0, Q.jsx)(B, { ...$.missing }),
                  description: e.description ?? (0, Q.jsx)(B, { ...$.missingDescription }),
                })
              : (0, Q.jsx)(Tn, { ...e })),
      (n[12] = e),
      (n[13] = f));
  let p;
  return (
    n[14] !== l || n[15] !== u || n[16] !== f
      ? ((p = (0, Q.jsx)(Ot, {
          ariaLabel: l,
          contentInnerClassName: u,
          disableScrollFade: !0,
          scrollContainerClassName: `[&:has([data-plugin-description-transitioning])]:[overflow-anchor:none]`,
          showNav: !1,
          sections: d,
          children: f,
        })),
        (n[14] = l),
        (n[15] = u),
        (n[16] = f),
        (n[17] = p))
      : (p = n[17]),
    p
  );
}
function Tn(e) {
  let n = (0, Z.c)(146),
    {
      settings: r,
      presentation: i,
      appInstallBlockedReasonsById: a,
      actions: o,
      banner: s,
      apps: l,
      canonicalAppId: d,
      appConnections: f,
      browserExtensions: p,
      connectedAccounts: m,
      effectiveConfig: h,
      hostId: g,
      hooksNeedingReviewCount: _,
      installedSkills: y,
      installBlockedReason: x,
      isConfigPending: S,
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
      onDisconnectApp: F,
      onOpenPluginSettingsUrl: I,
      serviceAppTemplates: L,
      onManageApps: z,
      onOpenHooksSettings: ne,
      onTrustAllHooks: re,
      onSetAppEnabled: ie,
      onSkillsUpdated: oe,
      mcpServers: se,
      onOpenMcpSettings: ce,
      onToggleMcpServerEnabled: le,
      plugin: H,
      pluginScope: ue,
      scheduledTasks: de,
      showInPluginAppList: U,
      showSkillReferences: he,
      unavailableSkills: _e,
    } = e,
    W = i === void 0 ? `page` : i,
    ve;
  n[0] === p ? (ve = n[1]) : ((ve = p === void 0 ? [] : p), (n[0] = p), (n[1] = ve));
  let ye = ve,
    be = _ === void 0 ? 0 : _,
    G = S !== void 0 && S,
    K = T !== void 0 && T,
    Ce = D !== void 0 && D,
    Ee = he !== void 0 && he,
    De = t(b),
    Oe = R(St, g),
    q = W === `dialog` ? `external-browser` : void 0,
    je = te(),
    Me = w(),
    Ne = C(),
    Pe = (0, tr.useRef)(null),
    Fe;
  if (n[2] !== l || n[3] !== m || n[4] !== H.summary.installed || n[5] !== H.summary.remotePluginId) {
    let e;
    (n[7] !== m || n[8] !== H.summary.installed || n[9] !== H.summary.remotePluginId
      ? ((e = (e) => ({
          ...Te(e.id),
          enabled: !!m?.accountId && !!m.userId && H.summary.installed && H.summary.remotePluginId != null,
          retry: !1,
        })),
        (n[7] = m),
        (n[8] = H.summary.installed),
        (n[9] = H.summary.remotePluginId),
        (n[10] = e))
      : (e = n[10]),
      (Fe = l.map(e)),
      (n[2] = l),
      (n[3] = m),
      (n[4] = H.summary.installed),
      (n[5] = H.summary.remotePluginId),
      (n[6] = Fe));
  } else Fe = n[6];
  let Ie;
  n[11] === Fe ? (Ie = n[12]) : ((Ie = { queries: Fe }), (n[11] = Fe), (n[12] = Ie));
  let Le = v(Ie),
    Re;
  n[13] !== l ||
  n[14] !== m ||
  n[15] !== Le ||
  n[16] !== H.summary.installed ||
  n[17] !== H.summary.remotePluginId
    ? ((Re =
        m != null &&
        H.summary.installed &&
        H.summary.remotePluginId != null &&
        Le.some((e, t) => e.data == null || e.isError || ge(l[t].id, e.data))),
      (n[13] = l),
      (n[14] = m),
      (n[15] = Le),
      (n[16] = H.summary.installed),
      (n[17] = H.summary.remotePluginId),
      (n[18] = Re))
    : (Re = n[18]);
  let ze = Re,
    Be = ae,
    Ve;
  n[19] !== ze || n[20] !== Be
    ? ((Ve = { enabled: ze, hostId: Be, roots: void 0, resolveActiveRoots: !0 }),
      (n[19] = ze),
      (n[20] = Be),
      (n[21] = Ve))
    : (Ve = n[21]);
  let { data: He } = We(Ve),
    Ue;
  n[22] === H ? (Ue = n[23]) : ((Ue = Zn(H)), (n[22] = H), (n[23] = Ue));
  let J = Ue,
    Ge;
  n[24] === H.summary.interface?.developerName
    ? (Ge = n[25])
    : ((Ge = H.summary.interface?.developerName?.trim()),
      (n[24] = H.summary.interface?.developerName),
      (n[25] = Ge));
  let Ke = Ge,
    qe = !!Ke && Ke !== J,
    Je;
  n[26] === H ? (Je = n[27]) : ((Je = er(H)), (n[26] = H), (n[27] = Je));
  let Ye = Je,
    Xe;
  n[28] === H ? (Xe = n[29]) : ((Xe = $n(H)), (n[28] = H), (n[29] = Xe));
  let $e = Xe,
    et = !qe && $e === Ye ? null : $e,
    nt;
  if (qe) {
    let e;
    (n[30] === Ke
      ? (e = n[31])
      : ((e = (0, Q.jsx)(B, {
          id: `plugins.detail.developerAttribution`,
          defaultMessage: `By {developerName}`,
          description: `Subtitle on the plugin detail page identifying the plugin's developer. The developerName is the publisher's name. Shown when it differs from the plugin's display name.`,
          values: { developerName: Ke },
        })),
        (n[30] = Ke),
        (n[31] = e)),
      (nt = e));
  } else if (Ye) {
    let e;
    (n[32] === Ye
      ? (e = n[33])
      : ((e = (0, Q.jsx)(`span`, { id: `plugin-description`, children: Ye })), (n[32] = Ye), (n[33] = e)),
      (nt = e));
  }
  let rt = (H.summary.interface?.defaultPrompt ?? []).map(Dn).filter(En),
    it = H.apps.length === 1 ? l[0] : void 0,
    at;
  n[34] !== H.summary || n[35] !== it
    ? ((at = Ae(H.summary, it)), (n[34] = H.summary), (n[35] = it), (n[36] = at))
    : (at = n[36]);
  let { composerIconPath: ot, logoDarkPath: ft, logoPath: pt } = at,
    mt = ot ?? pt ?? ft,
    gt = A || j,
    _t = rt.length > 0 || !!et,
    vt;
  n[37] === H ? (vt = n[38]) : ((vt = qn(H)), (n[37] = H), (n[38] = vt));
  let bt = vt,
    xt;
  n[39] !== l || n[40] !== U ? ((xt = U ? l : []), (n[39] = l), (n[40] = U), (n[41] = xt)) : (xt = n[41]);
  let Ct = xt,
    wt = ze
      ? He?.find((e) => {
          let { plugin: t } = e;
          return t.remotePluginId === H.summary.remotePluginId;
        })?.canonicalAppId
      : void 0,
    Tt = Qe({ accountId: m?.accountId, userId: m?.userId, linkRefreshStrategy: `NONE` }),
    { data: Et } = u({
      ...Tt,
      enabled: !!Tt.enabled && wt != null,
      staleTime: Tt.staleTime,
      select: (e) => wt != null && yt(e, wt).length > 0,
    }),
    Dt;
  ze && He == null && (Tt.enabled || l.some((e) => m.isAppReauthPending(e.id)))
    ? (Dt = null)
    : m != null &&
      H.summary.installed &&
      wt != null &&
      (Tt.enabled ||
        l.some((e) => (e.isAccessible || m.isAppReauthPending(e.id) || !1) && V(e.id) === V(wt))) &&
      Et !== !1 &&
      (Dt = wt);
  let Ot = (0, tr.useEffectEvent)(() => {
      if (!(!m?.isConnectorSetupReady || (!H.summary.installed && !Ce) || Dt !== void 0 || E || G))
        for (let e of l) {
          let t = f?.get(V(e.id));
          e.isEnabled &&
            (H.summary.installed || (t?.canConnect === !0 && !t.isUnavailable && !t.isDisabledByAdmin)) &&
            a[e.id] == null &&
            Ze(e.id, h) == null &&
            ht({
              scope: De,
              accountId: m?.accountId,
              userId: m?.userId,
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
  n[42] === Ot
    ? (kt = n[43])
    : ((kt = () => {
        Ot();
      }),
      (n[42] = Ot),
      (n[43] = kt));
  let At = Dt,
    Mt = m?.accountId,
    Pt = m?.userId,
    Ft = m?.isConnectorSetupReady,
    It;
  (n[44] !== f ||
  n[45] !== a ||
  n[46] !== l ||
  n[47] !== h ||
  n[48] !== G ||
  n[49] !== E ||
  n[50] !== Ce ||
  n[51] !== Me ||
  n[52] !== H.summary.installed ||
  n[53] !== At ||
  n[54] !== Mt ||
  n[55] !== Pt ||
  n[56] !== Ft
    ? ((It = [l, f, a, At, Mt, Pt, Ft, h, G, E, Ce, Me, H.summary.installed]),
      (n[44] = f),
      (n[45] = a),
      (n[46] = l),
      (n[47] = h),
      (n[48] = G),
      (n[49] = E),
      (n[50] = Ce),
      (n[51] = Me),
      (n[52] = H.summary.installed),
      (n[53] = At),
      (n[54] = Mt),
      (n[55] = Pt),
      (n[56] = Ft),
      (n[57] = It))
    : (It = n[57]),
    (0, tr.useEffect)(kt, It));
  let Lt =
      !Oe && m != null && H.summary.installed && Et !== !1 && wt != null
        ? l
            .filter((e) => V(e.id) === V(wt) && e.isEnabled && Ze(e.id, h) == null)
            .map((e) => (0, Q.jsx)(Jt, { accountContext: m, app: e, hostId: g }, e.id))
        : null,
    Rt = dt,
    Bt;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = (0, Q.jsx)(me, { className: `icon-lg text-secondary` })), (n[58] = Bt))
    : (Bt = n[58]);
  let Ht;
  n[59] !== J || n[60] !== ft || n[61] !== pt
    ? ((Ht = (0, Q.jsx)(ut, {
        children: (0, Q.jsx)(xe, {
          alt: J,
          className: `size-full object-contain`,
          logoDarkUrl: ft,
          logoUrl: pt,
          fallback: Bt,
        }),
      })),
      (n[59] = J),
      (n[60] = ft),
      (n[61] = pt),
      (n[62] = Ht))
    : (Ht = n[62]);
  let Ut = H.summary.shareContext?.remotePluginId,
    Gt;
  n[63] !== H.summary.id || n[64] !== H.summary.remotePluginId || n[65] !== Ut
    ? ((Gt = [H.summary.id, H.summary.remotePluginId, Ut]),
      (n[63] = H.summary.id),
      (n[64] = H.summary.remotePluginId),
      (n[65] = Ut),
      (n[66] = Gt))
    : (Gt = n[66]);
  let qt;
  n[67] !== J || n[68] !== g || n[69] !== Gt
    ? ((qt = (0, Q.jsx)(jt, { hostId: g, pluginIds: Gt, pluginName: J, surface: `detail` })),
      (n[67] = J),
      (n[68] = g),
      (n[69] = Gt),
      (n[70] = qt))
    : (qt = n[70]);
  let Yt;
  n[71] !== Ht || n[72] !== qt
    ? ((Yt = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-4 text-sm`,
        children: [Ht, qt],
      })),
      (n[71] = Ht),
      (n[72] = qt),
      (n[73] = Yt))
    : (Yt = n[73]);
  let Xt = nt,
    Zt;
  n[74] === H ? (Zt = n[75]) : ((Zt = pe(we(H))), (n[74] = H), (n[75] = Zt));
  let Qt;
  n[76] !== ue || n[77] !== Zt
    ? ((Qt = { ...Zt, scope: ue }), (n[76] = ue), (n[77] = Zt), (n[78] = Qt))
    : (Qt = n[78]);
  let $t;
  n[79] !== g || n[80] !== Qt
    ? (($t = (0, Q.jsx)(Nt, { hostId: g, plugin: Qt, size: `large` })),
      (n[79] = g),
      (n[80] = Qt),
      (n[81] = $t))
    : ($t = n[81]);
  let en;
  n[82] !== J || n[83] !== $t
    ? ((en = (0, Q.jsx)(`h1`, {
        className: `heading-base electron:heading-lg min-w-0 break-words text-default`,
        children: (0, Q.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [J, $t] }),
      })),
      (n[82] = J),
      (n[83] = $t),
      (n[84] = en))
    : (en = n[84]);
  let tn;
  n[85] !== o || n[86] !== nt || n[87] !== Yt || n[88] !== en
    ? ((tn = (0, Q.jsx)(st, { actions: o, asset: Yt, subtitle: Xt, title: en })),
      (n[85] = o),
      (n[86] = nt),
      (n[87] = Yt),
      (n[88] = en),
      (n[89] = tn))
    : (tn = n[89]);
  let nn = _t
      ? (0, Q.jsxs)(`div`, {
          className: Wt,
          children: [
            rt.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex flex-col`,
                  children: (0, Q.jsx)(lt, {
                    background: `url("${ke}")`,
                    children: rt.map((e, t) =>
                      (0, Q.jsx)(
                        ee,
                        {
                          tooltipContent:
                            x === `connector-unavailable`
                              ? (0, Q.jsx)(B, {
                                  id: `plugins.install.connectorUnavailable`,
                                  defaultMessage: `App unavailable`,
                                  description: `Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory`,
                                })
                              : (0, Q.jsx)(zt, {
                                  disabledReason: H.summary.disabledReason,
                                  children: (0, Q.jsx)(B, {
                                    id: `plugins.install.disabledByAdmin`,
                                    defaultMessage: `Disabled by admin`,
                                    description: `Tooltip shown when plugin install is unavailable because all included connectors are disabled by admin`,
                                  }),
                                }),
                          disabled: !E,
                          children: (0, Q.jsxs)(ct, {
                            disabled: E,
                            pending: gt,
                            arrow: (0, Q.jsx)(Se, { "aria-hidden": !0, className: `icon-2xs -scale-x-100` }),
                            onClick: (n) => M(e, t, n),
                            children: [
                              (0, Q.jsx)(tt, {
                                brandColor: H.summary.interface?.brandColor ?? void 0,
                                displayName: J,
                                fallbackIcon: c,
                                fallbackName: H.summary.id,
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
                  children: (0, Q.jsx)(Vt, { openTarget: q, children: et }, et),
                })
              : null,
          ],
        })
      : null,
    rn;
  n[90] !== ye || n[91] !== H
    ? ((rn = (0, Q.jsx)(Kt, { plugin: H, browserExtensions: ye })), (n[90] = ye), (n[91] = H), (n[92] = rn))
    : (rn = n[92]);
  let an = d ?? wt,
    on;
  n[93] !== f ||
  n[94] !== a ||
  n[95] !== Ct ||
  n[96] !== Dt ||
  n[97] !== Lt ||
  n[98] !== h ||
  n[99] !== be ||
  n[100] !== g ||
  n[101] !== y ||
  n[102] !== O ||
  n[103] !== G ||
  n[104] !== K ||
  n[105] !== Ce ||
  n[106] !== pt ||
  n[107] !== se ||
  n[108] !== F ||
  n[109] !== N ||
  n[110] !== z ||
  n[111] !== P ||
  n[112] !== ne ||
  n[113] !== ce ||
  n[114] !== I ||
  n[115] !== ie ||
  n[116] !== oe ||
  n[117] !== le ||
  n[118] !== re ||
  n[119] !== H ||
  n[120] !== de ||
  n[121] !== L ||
  n[122] !== r ||
  n[123] !== Ee ||
  n[124] !== an ||
  n[125] !== _e ||
  n[126] !== bt ||
  n[127] !== k
    ? ((on = (0, Q.jsx)(Fn, {
        connectButtonImpressionSurface: fe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
        settings: r,
        appInstallBlockedReasonsById: a,
        apps: Ct,
        appConnections: f,
        unconfiguredAppTemplates: bt,
        connectedAccountsSection: Lt,
        canonicalAppId: an,
        effectiveConfig: h,
        connectedAccountCanonicalAppId: Dt,
        hostId: g,
        installedSkills: y,
        showSkillReferences: Ee,
        isConfigPending: G,
        isAppConnectPending: O,
        isPersonalAccount: K,
        isPublicTemplate: Ce,
        mcpServers: se,
        onInstallApp: N,
        onOpenHooksSettings: ne,
        onTrustAllHooks: re,
        hooksNeedingReviewCount: be,
        onOpenMcpSettings: ce,
        onOpenAppTools: P,
        onDisconnectApp: F,
        onOpenPluginSettingsUrl: I,
        serviceAppTemplates: L,
        onManageApps: z,
        onSetAppEnabled: ie,
        plugin: H,
        pluginLogoUrl: pt,
        scheduledTasks: de,
        onSkillsUpdated: oe,
        onToggleMcpServerEnabled: le,
        unavailableSkills: _e,
        updatingAppId: k,
      })),
      (n[93] = f),
      (n[94] = a),
      (n[95] = Ct),
      (n[96] = Dt),
      (n[97] = Lt),
      (n[98] = h),
      (n[99] = be),
      (n[100] = g),
      (n[101] = y),
      (n[102] = O),
      (n[103] = G),
      (n[104] = K),
      (n[105] = Ce),
      (n[106] = pt),
      (n[107] = se),
      (n[108] = F),
      (n[109] = N),
      (n[110] = z),
      (n[111] = P),
      (n[112] = ne),
      (n[113] = ce),
      (n[114] = I),
      (n[115] = ie),
      (n[116] = oe),
      (n[117] = le),
      (n[118] = re),
      (n[119] = H),
      (n[120] = de),
      (n[121] = L),
      (n[122] = r),
      (n[123] = Ee),
      (n[124] = an),
      (n[125] = _e),
      (n[126] = bt),
      (n[127] = k),
      (n[128] = on))
    : (on = n[128]);
  let sn;
  n[129] !== q || n[130] !== H
    ? ((sn = (0, Q.jsx)(Mn, { plugin: H, openTarget: q })), (n[129] = q), (n[130] = H), (n[131] = sn))
    : (sn = n[131]);
  let cn;
  n[132] !== l || n[133] !== q || n[134] !== H || n[135] !== bt
    ? ((cn = (0, Q.jsx)(On, { openTarget: q, apps: l, appTemplates: bt, plugin: H })),
      (n[132] = l),
      (n[133] = q),
      (n[134] = H),
      (n[135] = bt),
      (n[136] = cn))
    : (cn = n[136]);
  let ln;
  return (
    n[137] !== Rt ||
    n[138] !== s ||
    n[139] !== tn ||
    n[140] !== nn ||
    n[141] !== rn ||
    n[142] !== on ||
    n[143] !== sn ||
    n[144] !== cn
      ? ((ln = (0, Q.jsxs)(Rt, { children: [s, tn, nn, rn, on, sn, cn] })),
        (n[137] = Rt),
        (n[138] = s),
        (n[139] = tn),
        (n[140] = nn),
        (n[141] = rn),
        (n[142] = on),
        (n[143] = sn),
        (n[144] = cn),
        (n[145] = ln))
      : (ln = n[145]),
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
    f;
  t[5] === n
    ? (f = t[6])
    : ((f = (e) =>
        (0, Q.jsx)(jn, {
          openTarget: n,
          href: `https://help.openai.com/en/articles/20001062-elevated-risk-labels`,
          children: e,
        })),
      (t[5] = n),
      (t[6] = f));
  let p = f,
    m;
  t[7] === n
    ? (m = t[8])
    : ((m = (e) =>
        (0, Q.jsx)(jn, {
          openTarget: n,
          href: `https://help.openai.com/en/articles/11487775-apps-in-chatgpt`,
          children: e,
        })),
      (t[7] = n),
      (t[8] = m));
  let h = m,
    g;
  t[9] !== o ||
  t[10] !== p ||
  t[11] !== h ||
  t[12] !== d ||
  t[13] !== n ||
  t[14] !== a ||
  t[15] !== s?.privacyPolicyUrl ||
  t[16] !== s?.termsOfServiceUrl
    ? ((g = (0, Q.jsx)(`p`, {
        children:
          o === 1
            ? (0, Q.jsx)(B, {
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
                  elevatedRiskLink: p,
                  learnMoreLink: h,
                },
              })
            : (0, Q.jsx)(B, {
                id: `plugins.detail.legalNotice.multipleApps`,
                defaultMessage: `This plugin may contain one or more apps, as listed above. When connected to an app, ChatGPT may share relevant chats and memories with the app to help provide context for your requests. An app’s use of this data is subject to their terms and privacy policy, which can be found on the app’s page. If you have <memoryLink>Memory</memoryLink> enabled, data from the app may be used to proactively provide helpful information or suggestions. ChatGPT always respects your training data preferences, including for data from connected apps. Use of apps may come with <elevatedRiskLink>elevated risk</elevatedRiskLink>. You can manage your preferences or disconnect from apps anytime in your settings. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Data-sharing, per-app terms and privacy policies, Memory, model-training preferences, and elevated-risk disclosure shown at the bottom of a plugin detail page when the plugin contains multiple apps listed above the disclosure. The <memoryLink>, <elevatedRiskLink>, and <learnMoreLink> tags link to the respective OpenAI Help Center articles.`,
                values: { memoryLink: d, elevatedRiskLink: p, learnMoreLink: h },
              }),
      })),
      (t[9] = o),
      (t[10] = p),
      (t[11] = h),
      (t[12] = d),
      (t[13] = n),
      (t[14] = a),
      (t[15] = s?.privacyPolicyUrl),
      (t[16] = s?.termsOfServiceUrl),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] !== l || t[19] !== n
    ? ((_ = l
        ? (0, Q.jsx)(`p`, {
            children: (0, Q.jsx)(B, {
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
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== g || t[22] !== _
      ? ((v = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3 px-[var(--detail-page-inline-inset)] text-sm leading-5 text-tertiary select-text`,
          children: [g, _],
        })),
        (t[21] = g),
        (t[22] = _),
        (t[23] = v))
      : (v = t[23]),
    v
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
        Ee({ event: e, href: r, openTarget: i, initiator: `open_in_browser_bridge` });
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
    i = te(),
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
    f;
  t[6] !== n.summary.localVersion || t[7] !== n.summary.version
    ? ((f = (n.summary.localVersion ?? n.summary.version)?.trim()),
      (t[6] = n.summary.localVersion),
      (t[7] = n.summary.version),
      (t[8] = f))
    : (f = t[8]);
  let p = f;
  if (!(l || s || d || p || a.websiteUrl || a.privacyPolicyUrl || a.termsOfServiceUrl)) return null;
  let m;
  t[9] === d
    ? (m = t[10])
    : ((m = d
        ? (0, Q.jsx)(ft, {
            align: `start`,
            label: (0, Q.jsx)(B, { ...$.capabilities }),
            children: (0, Q.jsx)(Nn, { text: d }),
          })
        : null),
      (t[9] = d),
      (t[10] = m));
  let h;
  t[11] === l
    ? (h = t[12])
    : ((h = l ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(B, { ...$.developer }), children: l }) : null),
      (t[11] = l),
      (t[12] = h));
  let g;
  t[13] === s
    ? (g = t[14])
    : ((g = s ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(B, { ...$.category }), children: s }) : null),
      (t[13] = s),
      (t[14] = g));
  let _;
  t[15] === p
    ? (_ = t[16])
    : ((_ = p ? (0, Q.jsx)(ft, { label: (0, Q.jsx)(B, { ...$.version }), children: p }) : null),
      (t[15] = p),
      (t[16] = _));
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(B, { ...$.website })), (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== i || t[19] !== r || t[20] !== a.websiteUrl
    ? ((y = (0, Q.jsx)(ft, {
        label: v,
        children: a.websiteUrl
          ? (0, Q.jsx)(Xn, { openTarget: r, ariaLabel: i.formatMessage($.website), href: a.websiteUrl })
          : (0, Q.jsx)(B, { ...$.unavailable }),
      })),
      (t[18] = i),
      (t[19] = r),
      (t[20] = a.websiteUrl),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] !== i || t[23] !== r || t[24] !== a.privacyPolicyUrl
    ? ((b = a.privacyPolicyUrl
        ? (0, Q.jsx)(ft, {
            label: (0, Q.jsx)(B, { ...$.privacyPolicy }),
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
      (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] !== i || t[27] !== r || t[28] !== a.termsOfServiceUrl
    ? ((x = a.termsOfServiceUrl
        ? (0, Q.jsx)(ft, {
            label: (0, Q.jsx)(B, { ...$.termsOfService }),
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
      (t[29] = x))
    : (x = t[29]);
  let S;
  t[30] !== y || t[31] !== b || t[32] !== x || t[33] !== m || t[34] !== h || t[35] !== g || t[36] !== _
    ? ((S = (0, Q.jsxs)(Q.Fragment, { children: [m, h, g, _, y, b, x] })),
      (t[30] = y),
      (t[31] = b),
      (t[32] = x),
      (t[33] = m),
      (t[34] = h),
      (t[35] = g),
      (t[36] = _),
      (t[37] = S))
    : (S = t[37]);
  let C = S,
    w;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(B, { ...$.information })), (t[38] = w))
    : (w = t[38]);
  let T;
  return (
    t[39] === C
      ? (T = t[40])
      : ((T = (0, Q.jsx)(ot, {
          id: `plugin-information`,
          title: w,
          children: (0, Q.jsx)(`dl`, { children: C }),
        })),
        (t[39] = C),
        (t[40] = T)),
    T
  );
}
function Nn(e) {
  let t = (0, Z.c)(14),
    { text: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { text: n, collapsedLineCount: 3, fallbackFontSizePx: 13 }), (t[0] = n), (t[1] = r));
  let { setTextContentMeasurementRef: i, collapseState: a, handleToggleExpansion: o } = M(r),
    s = a === `collapsed` && `line-clamp-3`,
    c;
  t[2] === s ? (c = t[3]) : ((c = l(s)), (t[2] = s), (t[3] = c));
  let u;
  t[4] !== i || t[5] !== c || t[6] !== n
    ? ((u = (0, Q.jsx)(`div`, { ref: i, className: c, children: n })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = n),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== a || t[9] !== o
    ? ((d =
        a === `uncollapsible`
          ? null
          : (0, Q.jsx)(`button`, {
              className: `mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description select-none hover:text-default`,
              type: `button`,
              "aria-expanded": a === `expanded`,
              onClick: o,
              children:
                a === `expanded`
                  ? (0, Q.jsx)(B, {
                      id: `plugins.detail.information.capabilities.showLess`,
                      defaultMessage: `Show less`,
                      description: `Button to collapse a plugin's long capabilities text`,
                    })
                  : (0, Q.jsx)(B, {
                      id: `plugins.detail.information.capabilities.showMore`,
                      defaultMessage: `Show more`,
                      description: `Button to expand a plugin's long capabilities text`,
                    }),
            })),
      (t[8] = a),
      (t[9] = o),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== u || t[12] !== d
      ? ((f = (0, Q.jsxs)(`div`, { children: [u, d] })), (t[11] = u), (t[12] = d), (t[13] = f))
      : (f = t[13]),
    f
  );
}
function Pn(e) {
  let t = (0, Z.c)(38),
    { enabled: n, installed: i, logoUrl: a, name: s, onOpenSettings: c, onToggleEnabled: u } = e,
    d = te(),
    f = r(`/settings/mcp-settings`),
    p = i && !n && `opacity-60`,
    m;
  t[0] === p ? (m = t[1]) : ((m = l(`group`, p)), (t[0] = p), (t[1] = m));
  let h;
  t[2] === s ? (h = t[3]) : ((h = Qn(s)), (t[2] = s), (t[3] = h));
  let g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(Ke, { className: `icon-xs text-secondary` })), (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] !== a || t[6] !== h
    ? ((_ = (0, Q.jsx)(Un, {
        children: (0, Q.jsx)(xe, { alt: h, className: `icon-sm`, logoUrl: a, fallback: g }),
      })),
      (t[5] = a),
      (t[6] = h),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] === s ? (v = t[9]) : ((v = Qn(s)), (t[8] = s), (t[9] = v));
  let y;
  t[10] === i
    ? (y = t[11])
    : ((y = i ? (0, Q.jsx)(B, { ...$.mcpServerSettings }) : (0, Q.jsx)(B, { ...$.mcpServerSetup })),
      (t[10] = i),
      (t[11] = y));
  let b;
  t[12] !== i || t[13] !== d
    ? ((b = i ? d.formatMessage($.mcpServerSettings) : d.formatMessage($.mcpServerSetup)),
      (t[12] = i),
      (t[13] = d),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === c ? (x = t[16]) : ((x = (e) => de(e, c)), (t[15] = c), (t[16] = x));
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(o, { className: `icon-sm` })), (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== f || t[19] !== b || t[20] !== x
    ? ((C = (0, Q.jsx)(T, {
        href: f,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": b,
        onClick: x,
        children: S,
      })),
      (t[18] = f),
      (t[19] = b),
      (t[20] = x),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== C || t[23] !== y
    ? ((w = (0, Q.jsx)(ee, { tooltipContent: y, children: C })), (t[22] = C), (t[23] = y), (t[24] = w))
    : (w = t[24]);
  let E;
  t[25] !== n || t[26] !== i || t[27] !== d || t[28] !== u
    ? ((E = i
        ? (0, Q.jsx)(ee, {
            tooltipContent: n
              ? (0, Q.jsx)(B, { ...$.mcpServerDisable })
              : (0, Q.jsx)(B, { ...$.mcpServerEnable }),
            children: (0, Q.jsx)(L, {
              checked: n,
              ariaLabel: d.formatMessage($.mcpServerToggleAria),
              onChange: u,
            }),
          })
        : null),
      (t[25] = n),
      (t[26] = i),
      (t[27] = d),
      (t[28] = u),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== w || t[31] !== E
    ? ((D = (0, Q.jsxs)(Q.Fragment, { children: [w, E] })), (t[30] = w), (t[31] = E), (t[32] = D))
    : (D = t[32]);
  let O;
  return (
    t[33] !== D || t[34] !== m || t[35] !== _ || t[36] !== v
      ? ((O = (0, Q.jsx)(_t, {
          actionsPlacement: `center`,
          className: m,
          icon: _,
          iconContainer: !1,
          iconPlacement: `inline`,
          presentation: `row`,
          title: v,
          actions: D,
        })),
        (t[33] = D),
        (t[34] = m),
        (t[35] = _),
        (t[36] = v),
        (t[37] = O))
      : (O = t[37]),
    O
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
      canonicalAppId: d,
      effectiveConfig: f,
      connectedAccountCanonicalAppId: p,
      hooksNeedingReviewCount: m,
      hostId: h,
      installedSkills: g,
      showSkillReferences: _,
      isConfigPending: v,
      isAppConnectPending: y,
      mcpServers: b,
      isPersonalAccount: x,
      isPublicTemplate: S,
      onInstallApp: C,
      onOpenHooksSettings: w,
      onTrustAllHooks: T,
      onOpenMcpSettings: E,
      onOpenAppTools: D,
      onDisconnectApp: O,
      onOpenPluginSettingsUrl: k,
      serviceAppTemplates: A,
      onManageApps: j,
      onSetAppEnabled: M,
      plugin: N,
      pluginLogoUrl: I,
      scheduledTasks: L,
      onSkillsUpdated: z,
      onToggleMcpServerEnabled: ne,
      unavailableSkills: re,
      updatingAppId: ie,
    } = e,
    ae = te(),
    oe = le(`3449856777`),
    se = R(St, h),
    ce = le(`1064857188`),
    H = De(`2029197928`),
    de = P(nt),
    fe = P(_e),
    pe = N.summary.remotePluginId ?? N.summary.shareContext?.remotePluginId,
    U = pe ?? (F(N.summary.id) ? N.summary.id : null),
    he;
  t[0] !== de || t[1] !== oe || t[2] !== U || t[3] !== h
    ? ((he = oe && (h === `local` || ue(h)) && de != null && U != null),
      (t[0] = de),
      (t[1] = oe),
      (t[2] = U),
      (t[3] = h),
      (t[4] = he))
    : (he = t[4]);
  let ge = he,
    W;
  t[5] !== de || t[6] !== U ? ((W = ze(de, U)), (t[5] = de), (t[6] = U), (t[7] = W)) : (W = t[7]);
  let ve;
  t[8] !== ge || t[9] !== h ? ((ve = ge && !ue(h)), (t[8] = ge), (t[9] = h), (t[10] = ve)) : (ve = t[10]);
  let ye;
  t[11] !== W || t[12] !== ve
    ? ((ye = { ...W, enabled: ve, staleTime: 0, refetchOnMount: `always` }),
      (t[11] = W),
      (t[12] = ve),
      (t[13] = ye))
    : (ye = t[13]);
  let { data: be, isError: G, isLoading: K, refetch: Se } = u(ye),
    Ce;
  t[14] !== ge || t[15] !== be?.plugin || t[16] !== G
    ? ((Ce = ge && (G || be?.plugin.dependencies?.some(zn) === !0)),
      (t[14] = ge),
      (t[15] = be?.plugin),
      (t[16] = G),
      (t[17] = Ce))
    : (Ce = t[17]);
  let we = Ce,
    Te;
  t[18] !== U || t[19] !== H || t[20] !== we
    ? ((Te = we && U != null && H.get(`plugin_ids`, []).includes(U)),
      (t[18] = U),
      (t[19] = H),
      (t[20] = we),
      (t[21] = Te))
    : (Te = t[21]);
  let Ee = !Te && !K,
    Oe;
  t[22] !== a || t[23] !== Ee
    ? ((Oe = new Set((Ee ? a : []).map(Rn))), (t[22] = a), (t[23] = Ee), (t[24] = Oe))
    : (Oe = t[24]);
  let q = Oe,
    ke,
    Ae,
    je,
    Me,
    Ne,
    Pe,
    Ie,
    Le,
    Re,
    Be,
    He,
    J,
    We,
    Ge;
  if (
    t[25] !== o ||
    t[26] !== i ||
    t[27] !== a ||
    t[28] !== d ||
    t[29] !== n ||
    t[30] !== p ||
    t[31] !== c ||
    t[32] !== be?.plugin ||
    t[33] !== ce ||
    t[34] !== se ||
    t[35] !== f ||
    t[36] !== m ||
    t[37] !== h ||
    t[38] !== g ||
    t[39] !== ae ||
    t[40] !== y ||
    t[41] !== v ||
    t[42] !== G ||
    t[43] !== K ||
    t[44] !== x ||
    t[45] !== S ||
    t[46] !== b ||
    t[47] !== O ||
    t[48] !== C ||
    t[49] !== j ||
    t[50] !== D ||
    t[51] !== E ||
    t[52] !== k ||
    t[53] !== M ||
    t[54] !== z ||
    t[55] !== ne ||
    t[56] !== T ||
    t[57] !== N ||
    t[58] !== I ||
    t[59] !== Se ||
    t[60] !== pe ||
    t[61] !== L ||
    t[62] !== A ||
    t[63] !== r ||
    t[64] !== fe ||
    t[65] !== Ee ||
    t[66] !== we ||
    t[67] !== _ ||
    t[68] !== re ||
    t[69] !== s ||
    t[70] !== ie ||
    t[71] !== q
  ) {
    J = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[86] === q
        ? (e = t[87])
        : ((e = (e) => {
            let { manifestAppId: t } = e;
            return t == null || !q.has(V(t));
          }),
          (t[86] = q),
          (t[87] = e));
      let u = b.filter(e);
      if (!(
        r != null ||
        (c?.length ?? 0) > 0 ||
        (L != null && L.items.length > 0) ||
        (Ee && (a.length > 0 || s.length > 0)) ||
        u.length > 0 ||
        g.length > 0 ||
        re.length > 0 ||
        N.hooks.length > 0 ||
        K ||
        we
      )) {
        J = null;
        break bb0;
      }
      let w;
      t[88] !== h || t[89] !== x || t[90] !== N.appTemplates?.length || t[91] !== pe
        ? ((w = pe == null ? void 0 : wt(pe, N.appTemplates?.length ?? 0)),
          (t[88] = h),
          (t[89] = x),
          (t[90] = N.appTemplates?.length),
          (t[91] = pe),
          (t[92] = w))
        : (w = t[92]);
      let P = w,
        F = a.length,
        R;
      if (t[93] !== A || t[94] !== P || t[95] !== s) {
        let e;
        (t[97] !== A || t[98] !== P
          ? ((e = (e) => P == null || !A?.some((t) => t.template_id === e.templateId && t.can_setup === !0)),
            (t[97] = A),
            (t[98] = P),
            (t[99] = e))
          : (e = t[99]),
          (R = s.filter(e)),
          (t[93] = A),
          (t[94] = P),
          (t[95] = s),
          (t[96] = R));
      } else R = t[96];
      let te = F + R.length,
        oe = s.length > 1 || (s.length === 1 && N.summary.disabledReason !== `required_app_unavailable`),
        le;
      t[100] === i
        ? (le = t[101])
        : ((le = (e) => i[e.id] !== `disabled-by-admin`), (t[100] = i), (t[101] = le));
      let H = a.filter(le),
        ue;
      t[102] === i
        ? (ue = t[103])
        : ((ue = (e) => i[e.id] === `disabled-by-admin`), (t[102] = i), (t[103] = ue));
      let de = a.filter(ue),
        U = ae.formatMessage($.otherAppCategory),
        he = Gn([
          ...H.map((e) => ({
            app: e,
            category: Kn(e.branding?.category, U),
            isDisabledByAdmin: !1,
            kind: `app`,
          })),
          ...de.map((e) => ({
            app: e,
            category: Kn(e.branding?.category, U),
            isDisabledByAdmin: !0,
            kind: `app`,
          })),
          ...s.map((e) => ({ category: Kn(e.category, U), kind: `template`, template: e })),
        ]),
        ge = he.length > 1;
      ke = m > 0 && T != null;
      let _e = ae.formatMessage({
        id: `plugins.detail.scheduledTasks.customSchedule`,
        defaultMessage: `Custom schedule`,
        description: `Fallback schedule summary for a plugin scheduled task template`,
      });
      ((Be = `plugin-includes`),
        (He = `contents [--radius-token-row:var(--radius-lg)]`),
        t[104] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((We = l(Wt, `empty:hidden`)), (t[104] = We))
          : (We = t[104]),
        t[105] === K
          ? (Ge = t[106])
          : ((Ge = K ? (0, Q.jsx)(Hn, { announceLoading: !0 }) : null), (t[105] = K), (t[106] = Ge)),
        (Ae =
          Ee && (te > 0 || oe)
            ? (0, Q.jsx)(ot, {
                inset: !1,
                count: te > 0 ? te : void 0,
                title:
                  te === 0
                    ? (0, Q.jsx)(B, {
                        id: `plugins.detail.includes.appSetup.title`,
                        defaultMessage: `App setup`,
                        description: `Section listing unconfigured app dependencies for a plugin`,
                      })
                    : (0, Q.jsx)(B, {
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
                        className: l(`flex flex-col gap-2`, ge && t > 0 && `pt-2`),
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
                                    managementUrl: A?.some(
                                      (t) => t.template_id === e.template.templateId && t.can_setup === !0,
                                    )
                                      ? P
                                      : void 0,
                                    onManageApps: j,
                                  },
                                  `app-template-${e.template.templateId}`,
                                );
                              let t = d != null && V(e.app.id) === V(d),
                                r;
                              return (
                                se && t && e.app.isAccessible
                                  ? (r = !1)
                                  : !e.isDisabledByAdmin &&
                                    P != null &&
                                    A?.some((t) =>
                                      t.instances?.some((t) => t.scope === `USER` && V(t.id) === V(e.app.id)),
                                    ) &&
                                    (r = (0, Q.jsx)(Xt, { href: P, onManageApps: j })),
                                (0, Q.jsx)(
                                  Dt,
                                  {
                                    app: e.app,
                                    connectButtonImpressionSurface: n,
                                    connectionAction: r,
                                    appRestriction: Ze(e.app.id, f),
                                    cardIconContainerVariant: `outline`,
                                    disabledTooltip: Bn(
                                      e.isDisabledByAdmin,
                                      i[e.app.id] === `connector-unavailable` ||
                                        o?.get(V(e.app.id))?.isUnavailable === !0,
                                      N.summary,
                                    ),
                                    blockedStatusLabel: e.isDisabledByAdmin
                                      ? (0, Q.jsx)(ee, {
                                          tooltipContent: (0, Q.jsx)(B, { ...$.disabledByAdminBadge }),
                                          children: (0, Q.jsx)(`span`, {
                                            role: `img`,
                                            "aria-label": ae.formatMessage($.disabledByAdminBadge),
                                            onPointerMove: Ln,
                                            children: (0, Q.jsx)(Lt, { className: `icon-sm shrink-0` }),
                                          }),
                                        })
                                      : void 0,
                                    installBlockedReason: e.isDisabledByAdmin ? `disabled-by-admin` : null,
                                    isConfigPending: v,
                                    isConnectingApp: y(e.app.id),
                                    canReconnect: o?.get(V(e.app.id))?.canReconnect,
                                    requiresReauth: o?.get(V(e.app.id))?.requiresReauth,
                                    isConnectionUnavailable: o?.get(V(e.app.id))?.isUnavailable,
                                    hideAppConnectionDropdown:
                                      p === null || (p != null && V(e.app.id) === V(p)),
                                    installedStateAction: N.summary.installed ? `toggle` : `check`,
                                    manageAction: `menu`,
                                    remotePluginId: pe,
                                    presentation: `row`,
                                    showInstallAction: N.summary.installed
                                      ? o?.get(V(e.app.id))?.canConnect !== !1
                                      : S && o?.get(V(e.app.id))?.canConnect === !0,
                                    updatingAppId: ie,
                                    onInstallApp: C,
                                    onOpenAppTools: D,
                                    onDisconnectApp: O,
                                    onOpenPluginSettingsUrl: k,
                                    onSetAppEnabled: M,
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
          u.length > 0
            ? (0, Q.jsx)(Ue, {
                disableContentInlineInset: !0,
                count: u.length,
                title: (0, Q.jsx)(B, {
                  id: `plugins.detail.includes.mcpServers.title`,
                  defaultMessage: `MCP servers`,
                  description: `Title for included MCP servers on the plugin detail page`,
                }),
                children: (0, Q.jsx)(tn, {
                  children: u.map((e) =>
                    e.kind === `app`
                      ? (0, Q.jsx)(
                          Dt,
                          {
                            app: e.app,
                            connectButtonImpressionSurface: n,
                            appRestriction: Ze(e.app.id, f),
                            cardIcon: (0, Q.jsx)(Un, {
                              children: (0, Q.jsx)(xe, {
                                alt: e.app.name,
                                appInfo: e.app,
                                className: `icon-sm`,
                                fallback: (0, Q.jsx)(me, { className: `icon-xs text-secondary` }),
                              }),
                            }),
                            cardIconContainer: !1,
                            cardIconPlacement: `inline`,
                            cardDescriptionPlacement: `inline`,
                            isConfigPending: v,
                            isConnectingApp: y(e.app.id),
                            canReconnect: o?.get(V(e.app.id))?.canReconnect,
                            installedStateAction: N.summary.installed ? `toggle` : `check`,
                            manageAction: `menu`,
                            remotePluginId: pe,
                            presentation: `row`,
                            showInstallAction: N.summary.installed && o?.get(V(e.app.id))?.canConnect !== !1,
                            updatingAppId: ie,
                            onInstallApp: C,
                            onOpenAppTools: D,
                            onDisconnectApp: O,
                            onOpenPluginSettingsUrl: k,
                            onSetAppEnabled: M,
                          },
                          `mcp-app-${e.app.id}`,
                        )
                      : (0, Q.jsx)(
                          Pn,
                          {
                            enabled: e.enabled,
                            installed: e.installed,
                            logoUrl: I,
                            name: e.name,
                            onOpenSettings: E,
                            onToggleEnabled: (t) => {
                              e.configKey != null && ne(e.configKey, t);
                            },
                          },
                          `mcp-config-${e.name}`,
                        ),
                  ),
                }),
              })
            : null),
        (Ne = r),
        t[107] === K ? (Pe = t[108]) : ((Pe = K ? (0, Q.jsx)(Hn, {}) : null), (t[107] = K), (t[108] = Pe)),
        t[109] !== be?.plugin ||
        t[110] !== h ||
        t[111] !== G ||
        t[112] !== K ||
        t[113] !== Se ||
        t[114] !== we
          ? ((Ie =
              !K && we
                ? (0, Q.jsx)(vn, {
                    dependencies: be?.plugin.dependencies,
                    hostId: h,
                    isError: G,
                    onRetry: () => void Se(),
                  })
                : null),
            (t[109] = be?.plugin),
            (t[110] = h),
            (t[111] = G),
            (t[112] = K),
            (t[113] = Se),
            (t[114] = we),
            (t[115] = Ie))
          : (Ie = t[115]));
      let W;
      (t[116] !== ce || t[117] !== se || t[118] !== h || t[119] !== N.summary || t[120] !== fe
        ? ((W = se && ce && (fe != null || Ve(N.summary, h) == null)),
          (t[116] = ce),
          (t[117] = se),
          (t[118] = h),
          (t[119] = N.summary),
          (t[120] = fe),
          (t[121] = W))
        : (W = t[121]),
        t[122] !== h ||
        t[123] !== g ||
        t[124] !== z ||
        t[125] !== N ||
        t[126] !== _ ||
        t[127] !== W ||
        t[128] !== re
          ? ((Le = (0, Q.jsx)(nn, {
              hostId: h,
              hideCardActions: W,
              plugin: N,
              installedSkills: g,
              unavailableSkills: re,
              showSkillReferences: _,
              onSkillsUpdated: z,
            })),
            (t[122] = h),
            (t[123] = g),
            (t[124] = z),
            (t[125] = N),
            (t[126] = _),
            (t[127] = W),
            (t[128] = re),
            (t[129] = Le))
          : (Le = t[129]),
        (Re =
          L != null && L.items.length > 0
            ? (0, Q.jsx)(Ue, {
                id: `plugin-scheduled-tasks`,
                disableContentInlineInset: !0,
                count: L.items.length,
                title: (0, Q.jsx)(B, {
                  id: `plugins.detail.scheduledTasks`,
                  defaultMessage: `Scheduled`,
                  description: `Title for scheduled tasks included with a plugin`,
                }),
                children: (0, Q.jsx)(tn, {
                  previewItems: L.items.map(In),
                  children: L.items.map((e) =>
                    (0, Q.jsx)(
                      Qt,
                      {
                        hostId: h,
                        scheduleLabel: Fe({ rrule: e.rrule, intl: ae, fallbackMessage: _e }) ?? _e,
                        template: e,
                        onSetUpTemplate: L.onSetUpTemplate,
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
      (t[28] = d),
      (t[29] = n),
      (t[30] = p),
      (t[31] = c),
      (t[32] = be?.plugin),
      (t[33] = ce),
      (t[34] = se),
      (t[35] = f),
      (t[36] = m),
      (t[37] = h),
      (t[38] = g),
      (t[39] = ae),
      (t[40] = y),
      (t[41] = v),
      (t[42] = G),
      (t[43] = K),
      (t[44] = x),
      (t[45] = S),
      (t[46] = b),
      (t[47] = O),
      (t[48] = C),
      (t[49] = j),
      (t[50] = D),
      (t[51] = E),
      (t[52] = k),
      (t[53] = M),
      (t[54] = z),
      (t[55] = ne),
      (t[56] = T),
      (t[57] = N),
      (t[58] = I),
      (t[59] = Se),
      (t[60] = pe),
      (t[61] = L),
      (t[62] = A),
      (t[63] = r),
      (t[64] = fe),
      (t[65] = Ee),
      (t[66] = we),
      (t[67] = _),
      (t[68] = re),
      (t[69] = s),
      (t[70] = ie),
      (t[71] = q),
      (t[72] = ke),
      (t[73] = Ae),
      (t[74] = je),
      (t[75] = Me),
      (t[76] = Ne),
      (t[77] = Pe),
      (t[78] = Ie),
      (t[79] = Le),
      (t[80] = Re),
      (t[81] = Be),
      (t[82] = He),
      (t[83] = J),
      (t[84] = We),
      (t[85] = Ge));
  } else
    ((ke = t[72]),
      (Ae = t[73]),
      (je = t[74]),
      (Me = t[75]),
      (Ne = t[76]),
      (Pe = t[77]),
      (Ie = t[78]),
      (Le = t[79]),
      (Re = t[80]),
      (Be = t[81]),
      (He = t[82]),
      (J = t[83]),
      (We = t[84]),
      (Ge = t[85]));
  if (J !== Symbol.for(`react.early_return_sentinel`)) return J;
  let Ke;
  t[130] !== m ||
  t[131] !== h ||
  t[132] !== w ||
  t[133] !== T ||
  t[134] !== N.hooks.length ||
  t[135] !== N.summary.id ||
  t[136] !== N.summary.installed ||
  t[137] !== ke
    ? ((Ke =
        N.hooks.length > 0
          ? (0, Q.jsx)(Ue, {
              disableContentInlineInset: !0,
              title: (0, Q.jsx)(B, { ...$.hooksTitle }),
              children: (0, Q.jsx)(Jn, {
                hostId: h,
                pluginId: N.summary.id,
                hooksNeedingReviewCount: m,
                installed: N.summary.installed,
                onOpenHooksSettings: w,
                onTrustAllHooks: T,
                shouldShowReviewActions: ke,
              }),
            })
          : null),
      (t[130] = m),
      (t[131] = h),
      (t[132] = w),
      (t[133] = T),
      (t[134] = N.hooks.length),
      (t[135] = N.summary.id),
      (t[136] = N.summary.installed),
      (t[137] = ke),
      (t[138] = Ke))
    : (Ke = t[138]);
  let qe;
  t[139] !== Ae ||
  t[140] !== je ||
  t[141] !== Me ||
  t[142] !== Ne ||
  t[143] !== Pe ||
  t[144] !== Ie ||
  t[145] !== Le ||
  t[146] !== Re ||
  t[147] !== Ke ||
  t[148] !== We ||
  t[149] !== Ge
    ? ((qe = (0, Q.jsxs)(`div`, { className: We, children: [Ge, Ae, je, Me, Ne, Pe, Ie, Le, Re, Ke] })),
      (t[139] = Ae),
      (t[140] = je),
      (t[141] = Me),
      (t[142] = Ne),
      (t[143] = Pe),
      (t[144] = Ie),
      (t[145] = Le),
      (t[146] = Re),
      (t[147] = Ke),
      (t[148] = We),
      (t[149] = Ge),
      (t[150] = qe))
    : (qe = t[150]);
  let Je;
  return (
    t[151] !== Be || t[152] !== He || t[153] !== qe
      ? ((Je = (0, Q.jsx)(`div`, { id: Be, className: He, children: qe })),
        (t[151] = Be),
        (t[152] = He),
        (t[153] = qe),
        (t[154] = Je))
      : (Je = t[154]),
    Je
  );
}
function In(e) {
  return { icon: (0, Q.jsx)(rt, { className: `size-3.5 text-secondary` }), key: e.key, label: e.name };
}
function Ln(e) {
  e.stopPropagation();
}
function Rn(e) {
  return V(e.id);
}
function zn(e) {
  return e.categories.length > 0;
}
function Bn(e, t, n) {
  return e
    ? (0, Q.jsx)(B, {
        id: `plugins.detail.includes.appAdminDisabledExplanation`,
        defaultMessage: `This app isn’t enabled for your workspace. Contact your admin to enable it`,
        description: `Tooltip over an entire disabled app row on a plugin details page. Independent app availability confirms a workspace admin restriction. Tell the workspace member how to request access without implying the app was deleted or explicitly disabled by a particular person. Plain text; no placeholders.`,
      })
    : t
      ? (0, Q.jsx)(B, {
          id: `plugins.detail.includes.appUnavailableExplanation`,
          defaultMessage: `This app isn’t available`,
          description: `Tooltip over an entire disabled app row on a plugin details page when the app is unavailable or no longer resolves in the directory. This includes legacy apps; do not imply an admin restriction or permanent deletion. Plain text for an end user; no placeholders.`,
        })
      : qe(n)
        ? (0, Q.jsx)(zt, {
            disabledReason: n.disabledReason,
            children: (0, Q.jsx)(B, {
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
  t[0] === n ? (i = t[1]) : ((i = n == null ? null : Ae(n.summary)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = n == null ? null : $n(n)), (t[2] = n), (t[3] = o));
  let s = o,
    c = r === `dialog` ? `external-browser` : void 0,
    u = n == null || void 0,
    d = n == null && `motion-safe:animate-pulse`,
    f;
  t[4] === d ? (f = t[5]) : ((f = l(d)), (t[4] = d), (t[5] = f));
  let p;
  t[6] === a
    ? (p = t[7])
    : ((p = (0, Q.jsx)(ut, {
        children:
          a == null
            ? (0, Q.jsx)(`div`, { className: `size-full bg-text/10` })
            : (0, Q.jsx)(xe, {
                alt: ``,
                className: `size-full object-contain`,
                logoDarkUrl: a.logoDarkPath,
                logoUrl: a.logoPath,
                fallback: (0, Q.jsx)(me, { className: `icon-lg text-secondary` }),
              }),
      })),
      (t[6] = a),
      (t[7] = p));
  let m;
  t[8] === n
    ? (m = t[9])
    : ((m = n == null ? (0, Q.jsx)(`div`, { className: `h-4 w-24 rounded bg-text/10` }) : Zn(n)),
      (t[8] = n),
      (t[9] = m));
  let h;
  t[10] === n
    ? (h = t[11])
    : ((h = n == null ? (0, Q.jsx)(`div`, { className: `h-3 w-3/5 rounded bg-text/10` }) : er(n)),
      (t[10] = n),
      (t[11] = h));
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(`div`, {
        "aria-hidden": !0,
        className: `h-token-button-composer w-14 rounded-lg bg-text/10 motion-safe:animate-pulse`,
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== p || t[14] !== m || t[15] !== h
    ? ((_ = (0, Q.jsx)(Je, { asset: p, title: m, subtitle: h, actions: g })),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== _ || t[18] !== u || t[19] !== f
    ? ((v = (0, Q.jsx)(`div`, { "aria-hidden": u, className: f, children: _ })),
      (t[17] = _),
      (t[18] = u),
      (t[19] = f),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== s || t[22] !== c || t[23] !== n
    ? ((y =
        s && n != null && s !== er(n)
          ? (0, Q.jsx)(`div`, {
              className: `min-w-0 px-[var(--detail-page-inline-inset)]`,
              children: (0, Q.jsx)(Vt, { openTarget: c, children: s }),
            })
          : null),
      (t[21] = s),
      (t[22] = c),
      (t[23] = n),
      (t[24] = y))
    : (y = t[24]);
  let b;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsxs)(`div`, {
        className: Wt,
        children: [(0, Q.jsx)(Hn, { announceLoading: !0 }), (0, Q.jsx)(Hn, {})],
      })),
      (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] !== c || t[27] !== n
    ? ((x = n == null ? null : (0, Q.jsx)(Mn, { plugin: n, openTarget: c })),
      (t[26] = c),
      (t[27] = n),
      (t[28] = x))
    : (x = t[28]);
  let S;
  return (
    t[29] !== v || t[30] !== y || t[31] !== x
      ? ((S = (0, Q.jsxs)(Ht, { children: [v, y, b, x] })),
        (t[29] = v),
        (t[30] = y),
        (t[31] = x),
        (t[32] = S))
      : (S = t[32]),
    S
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
            children: (0, Q.jsx)(B, {
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
        icon: (0, Q.jsx)(xe, {
          alt: ``,
          appInfo: e.app,
          className: `icon-xs`,
          fallback: (0, Q.jsx)(me, { className: `icon-2xs text-secondary` }),
        }),
        key: `app-${e.app.id}`,
        label: e.app.name,
      }
    : {
        icon: (0, Q.jsx)(xe, {
          alt: ``,
          className: `icon-xs`,
          logoDarkUrl: e.template.logoUrlDark,
          logoUrl: e.template.logoUrl,
          fallback: (0, Q.jsx)(me, { className: `icon-2xs text-secondary` }),
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
  return h(e?.trim() || t, { style: `sentence` });
}
function qn(e) {
  return Array.isArray(e.appTemplates) ? e.appTemplates.filter((e) => e.materializedAppIds.length === 0) : [];
}
function Jn(e) {
  let t = (0, Z.c)(36),
    {
      hostId: n,
      pluginId: i,
      hooksNeedingReviewCount: a,
      installed: s,
      onOpenHooksSettings: c,
      onTrustAllHooks: l,
      shouldShowReviewActions: u,
    } = e,
    d = te(),
    f;
  t[0] !== n || t[1] !== i
    ? ((f = xt({ hostId: n, pluginId: i, source: `plugin` })), (t[0] = n), (t[1] = i), (t[2] = f))
    : (f = t[2]);
  let p = r(f),
    m = null;
  if (s && u) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(B, {
          id: `plugins.detail.includes.hooks.trustAll`,
          defaultMessage: `Trust all`,
          description: `Button label to trust every hook from a plugin detail page that needs review`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === l
      ? (n = t[5])
      : ((n = (0, Q.jsx)(O, { color: `secondary`, onClick: l, children: e })), (t[4] = l), (t[5] = n));
    let r;
    t[6] === c ? (r = t[7]) : ((r = (e) => de(e, c)), (t[6] = c), (t[7] = r));
    let i;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(B, {
          id: `plugins.detail.includes.hooks.review`,
          defaultMessage: `Review`,
          description: `Button label to open hooks settings from a plugin detail page when hooks need review`,
        })),
        (t[8] = i))
      : (i = t[8]);
    let a;
    t[9] !== p || t[10] !== r
      ? ((a = (0, Q.jsx)(T, { color: `secondary`, href: p, onClick: r, children: i })),
        (t[9] = p),
        (t[10] = r),
        (t[11] = a))
      : (a = t[11]);
    let o;
    (t[12] !== n || t[13] !== a
      ? ((o = (0, Q.jsxs)(`span`, { className: `flex items-center gap-2`, children: [n, a] })),
        (t[12] = n),
        (t[13] = a),
        (t[14] = o))
      : (o = t[14]),
      (m = o));
  } else if (s) {
    let e;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(B, { ...$.hooksSettings })), (t[15] = e))
      : (e = t[15]);
    let n;
    t[16] === d ? (n = t[17]) : ((n = d.formatMessage($.hooksSettings)), (t[16] = d), (t[17] = n));
    let r;
    t[18] === c ? (r = t[19]) : ((r = (e) => de(e, c)), (t[18] = c), (t[19] = r));
    let i;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(o, { className: `icon-sm` })), (t[20] = i))
      : (i = t[20]);
    let a;
    (t[21] !== p || t[22] !== n || t[23] !== r
      ? ((a = (0, Q.jsx)(ee, {
          tooltipContent: e,
          children: (0, Q.jsx)(T, {
            href: p,
            color: `ghost`,
            size: `toolbar`,
            uniform: !0,
            "aria-label": n,
            onClick: r,
            children: i,
          }),
        })),
        (t[21] = p),
        (t[22] = n),
        (t[23] = r),
        (t[24] = a))
      : (a = t[24]),
      (m = a));
  }
  let h;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(B, {
        id: `plugins.detail.includes.hooks.description`,
        defaultMessage: `Run deterministic scripts during the task lifecycle`,
        description: `Description for included hooks on the plugin detail page`,
      })),
      (t[25] = h))
    : (h = t[25]);
  let g;
  t[26] !== a || t[27] !== u
    ? ((g = u
        ? (0, Q.jsxs)(`span`, {
            className: `flex items-center gap-1 text-default`,
            children: [
              (0, Q.jsx)(it, { className: `icon-2xs shrink-0 text-warning` }),
              (0, Q.jsx)(B, {
                id: `plugins.detail.includes.hooks.needsReview`,
                defaultMessage: `{count, plural, one {# hook needs review before it can run} other {# hooks need review before they can run}}`,
                description: `Warning shown when hooks from a plugin detail page need review before they can run`,
                values: { count: a },
              }),
            ],
          })
        : null),
      (t[26] = a),
      (t[27] = u),
      (t[28] = g))
    : (g = t[28]);
  let v;
  t[29] === g
    ? (v = t[30])
    : ((v = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [h, g] })),
      (t[29] = g),
      (t[30] = v));
  let y;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(_, { className: `text-secondary` })), (t[31] = y))
    : (y = t[31]);
  let b;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(B, { ...$.hooksTitle })), (t[32] = b))
    : (b = t[32]);
  let x;
  return (
    t[33] !== m || t[34] !== v
      ? ((x = (0, Q.jsx)(_t, {
          actions: m,
          actionsPlacement: `center`,
          description: v,
          descriptionClassName: `text-xs leading-4`,
          icon: y,
          iconContainerVariant: `outline`,
          presentation: `row`,
          title: b,
        })),
        (t[33] = m),
        (t[34] = v),
        (t[35] = x))
      : (x = t[35]),
    x
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
          children: (0, Q.jsx)(Pe, { title: r, description: n, illustration: i }),
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
        Ee({ event: e, href: r, openTarget: i, initiator: `open_in_browser_bridge` });
      }),
      (o = (0, Q.jsx)(Be, { href: r, className: `icon-xs`, openTarget: i })),
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
    ((Z = g()),
      H(),
      pt(),
      m(),
      I(),
      f(),
      N(),
      ne(),
      y(),
      (tr = a()),
      D(),
      p(),
      he(),
      Ne(),
      U(),
      je(),
      Ce(),
      $e(),
      K(),
      j(),
      Ut(),
      Le(),
      Re(),
      Xe(),
      S(),
      Me(),
      He(),
      Mt(),
      re(),
      z(),
      E(),
      d(),
      Ge(),
      ce(),
      W(),
      Pt(),
      Ye(),
      It(),
      A(),
      at(),
      Oe(),
      gt(),
      mt(),
      Bt(),
      Ie(),
      n(),
      bt(),
      be(),
      Et(),
      et(),
      x(),
      ye(),
      kt(),
      Gt(),
      vt(),
      Yt(),
      Cn(),
      J(),
      Ct(),
      Rt(),
      rn(),
      Tt(),
      qt(),
      en(),
      $t(),
      G(),
      At(),
      q(),
      ve(),
      (Q = s()),
      ($ = k({
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
//# sourceMappingURL=plugin-detail-view-251db51dd05a.js.map
