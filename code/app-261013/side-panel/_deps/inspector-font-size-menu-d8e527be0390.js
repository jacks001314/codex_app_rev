import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  A_ as i,
  B_ as a,
  CO as o,
  C_ as s,
  Ckt as c,
  DV as l,
  D_ as u,
  E_ as d,
  FOt as f,
  FV as p,
  F_ as m,
  Fkt as h,
  Gv as g,
  IDt as _,
  IOt as v,
  I_ as y,
  LOt as b,
  L_ as x,
  MO as S,
  M_ as C,
  Mz as w,
  NOt as T,
  N_ as E,
  Nkt as D,
  Nz as O,
  O_ as k,
  POt as A,
  P_ as j,
  Pkt as M,
  ROt as N,
  R_ as P,
  S2 as F,
  Skt as ee,
  TJ as I,
  TO as L,
  T_ as R,
  VDt as te,
  Wv as ne,
  _Mt as z,
  _kt as B,
  _x as V,
  bkt as re,
  dkt as ie,
  fkt as ae,
  gMt as H,
  gkt as U,
  hkt as oe,
  jDt as se,
  jO as ce,
  j_ as le,
  k_ as ue,
  m_ as de,
  mkt as fe,
  p_ as pe,
  pkt as me,
  t3 as he,
  ukt as ge,
  vx as _e,
  vzt as ve,
  w_ as ye,
  wkt as be,
  x2 as xe,
  xMt as W,
  xkt as Se,
  yMt as Ce,
  ykt as we,
  yzt as G,
  z_ as Te,
} from "./app-shared-bbfeca5e5737.js";
import {
  CHr as Ee,
  DPn as De,
  THr as Oe,
  TPn as ke,
  _Cn as Ae,
  bCn as je,
  cCn as Me,
  ca as Ne,
  dCn as Pe,
  fCn as Fe,
  gCn as Ie,
  hCn as Le,
  kHr as Re,
  la as ze,
  mKr as Be,
  nCn as Ve,
  sCn as He,
  uCn as Ue,
  vCn as We,
  wHr as Ge,
  yCn as Ke,
  yKr as qe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Je, t as Ye } from "./PopcornIcon-88bc8b9c01dd.js";
import {
  I as Xe,
  N as Ze,
  O as Qe,
  P as $e,
  R as et,
  a as tt,
  f as nt,
  g as rt,
  h as it,
  i as at,
  k as ot,
  s as st,
  t as ct,
  u as lt,
} from "./PopcornIcons-16e50c25ad67.js";
import {
  C as ut,
  Ft as dt,
  It as ft,
  Jt as pt,
  Lt as mt,
  Nt as ht,
  S as gt,
  Xt as _t,
  m as vt,
} from "./artifact-source-bootstrap-4e917865396a.js";
import {
  Jb as yt,
  Ju as bt,
  Qb as xt,
  dd as St,
  ex as Ct,
  hd as wt,
  id as Tt,
  pd as Et,
  rd as Dt,
  td as Ot,
} from "./app-primary-fe8a450b3b04.js";
import { i as kt, t as At } from "./drawing-resize-handles-ea28c73efff1.js";
import { n as jt, r as Mt, t as Nt } from "./PopcornColorPicker-b0c66a8c8ba0.js";
import {
  a as Pt,
  c as Ft,
  g as It,
  h as Lt,
  i as Rt,
  l as zt,
  o as Bt,
  s as Vt,
} from "./artifact-comments-header-7e7d55cf0807.js";
import { a as Ht, i as Ut, o as Wt } from "./artifact-annotation-batch-controls-58c22049fec2.js";
import { a as Gt } from "./PopcornCommentMessageLayout-b2973abc1da4.js";
import { a as Kt, i as qt } from "./inspector-color-field-953128a1d932.js";
import { n as Jt, r as Yt } from "./PopcornCommentMarker-5c9820807673.js";
function Xt(e) {
  switch (e.type) {
    case `workbook-range`:
      return `${e.type}:${e.sheetName}:${e.rect.r1}:${e.rect.c1}:${e.rect.r2}:${e.rect.c2}`;
    case `workbook-floating-element`:
      return `${e.type}:${e.sheetName}:${e.elementId}`;
    case `presentation-element-selection`:
      return `${e.type}:${e.slideId}:${[...e.elementIds].sort().join(`,`)}`;
    case `presentation-region`:
      return `${e.type}:${e.slideId}:${e.frame.left}:${e.frame.top}:${e.frame.width}:${e.frame.height}`;
    default:
      return e;
  }
}
function Zt(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e) {
    let e = Xt(r.target),
      i = n.get(e) ?? 0;
    (t.set(r.annotationId, i), n.set(e, i + 1));
  }
  return t;
}
function Qt() {
  return (Qt = e(() => {}))();
}
function $t({
  icon: e,
  hideLabel: t,
  isActive: n,
  label: r,
  subLabel: i,
  iconClassName: a,
  labelClassName: o,
  subLabelId: s,
}) {
  return (0, K.jsxs)(K.Fragment, {
    children: [
      e
        ? (0, K.jsx)(e, {
            className: H(
              `size-4`,
              {
                "me-0.5": !t,
                "text-token-text-tertiary": !t && !n,
                "text-token-text-primary": t && !n,
                "text-info": n,
              },
              a,
            ),
          })
        : null,
      t
        ? null
        : (0, K.jsx)(`span`, {
            className: H(`truncate text-sm`, { "text-token-text-primary": !n, "text-info": n }, o),
            children: r,
          }),
      i == null
        ? null
        : (0, K.jsxs)(K.Fragment, {
            children: [t ? null : ` `, (0, K.jsx)(`span`, { id: s, className: `contents`, children: i })],
          }),
    ],
  });
}
function en({ children: e, ariaLabel: t, onKeyDown: n }) {
  return (0, K.jsx)(`div`, {
    role: `toolbar`,
    "aria-label": t,
    ref: (e) => {
      if (!e) return;
      let t = an(e);
      on(t, t.find((e) => e === document.activeElement) ?? t.find((e) => e.tabIndex === 0));
    },
    className: `relative m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl bg-surface-elevated-secondary/90 p-1 font-sans text-sm shadow-lg-stronger ring-1 ring-border-subtle backdrop-blur-sm select-none ring-inset`,
    onFocusCapture: (e) => {
      e.target instanceof HTMLButtonElement && e.target.matches(cn) && on(an(e.currentTarget), e.target);
    },
    onKeyDown: (e) => {
      let t = e.key.toLowerCase();
      if (!e.defaultPrevented && !e.altKey && (t === `z` || t === `y`) && (e.metaKey || e.ctrlKey)) return;
      if (e.defaultPrevented) {
        e.stopPropagation();
        return;
      }
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.currentTarget.contains(e.target)) {
        e.stopPropagation();
        return;
      }
      if (e.target.closest(`input, textarea, [contenteditable]:not([contenteditable='false'])`)) {
        e.stopPropagation();
        return;
      }
      if ((n?.(e), e.defaultPrevented)) {
        e.stopPropagation();
        return;
      }
      if (e.isPropagationStopped()) return;
      let r = e.target.closest(cn);
      if (!r || !e.currentTarget.contains(r)) return;
      let i = an(e.currentTarget),
        a = i.indexOf(r),
        o;
      if (e.key === `ArrowRight`) o = i[(a + 1) % i.length];
      else if (e.key === `ArrowLeft`) o = i[(a - 1 + i.length) % i.length];
      else if (e.key === `Home`) o = i[0];
      else if (e.key === `End`) o = i.at(-1);
      else if (e.key === `Escape`) return;
      else {
        e.stopPropagation();
        return;
      }
      (e.preventDefault(), e.stopPropagation(), on(i, o), o?.focus());
    },
    children: e,
  });
}
function tn({
  actionId: e,
  label: t,
  subLabel: n,
  icon: r,
  isDisabled: i = !1,
  disabledReason: a,
  isActive: o,
  hideLabel: s = !1,
  onClick: c,
  onMouseDown: l,
  iconClassName: u,
  labelClassName: d,
}) {
  let f = (0, sn.useId)(),
    p = (0, K.jsx)(`button`, {
      type: `button`,
      tabIndex: -1,
      "data-toolbar-action": e,
      className: H(
        `flex h-full cursor-interaction items-center gap-2 rounded-md px-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-default disabled:opacity-40`,
        o
          ? `bg-text-info/10 enabled:hover:bg-text-info/15`
          : `enabled:hover:bg-primary-ghost-hover enabled:active:bg-primary-ghost-active`,
      ),
      onClick: c,
      onMouseDown: l,
      "aria-label": s ? t : void 0,
      "aria-describedby": !a && s && n != null ? f : void 0,
      disabled: i,
      title: a ?? (s ? t : void 0),
      "aria-description": a,
      "aria-pressed": o,
      "data-state": o ? `on` : void 0,
      children: (0, K.jsx)($t, {
        icon: r,
        hideLabel: s,
        label: t,
        subLabel: n,
        isActive: o,
        iconClassName: u,
        labelClassName: d,
        subLabelId: f,
      }),
    });
  return s ? (0, K.jsx)(Lt, { label: t, disabled: i, className: `inline-flex h-full`, children: p }) : p;
}
function nn({
  actionId: e,
  label: t,
  hideLabel: n,
  isDisabled: r = !1,
  disabledReason: i,
  icon: a,
  subLabel: o,
  children: s,
  align: c = `end`,
  portalContainerElement: l,
}) {
  let u = (0, sn.useId)(),
    [d, p] = (0, sn.useState)(!1);
  (0, sn.useEffect)(() => {
    r && p(!1);
  }, [r]);
  let m = (0, K.jsx)(b, {
    asChild: !0,
    "aria-describedby": !i && n && o != null ? u : void 0,
    children: (0, K.jsx)(`button`, {
      type: `button`,
      tabIndex: -1,
      "data-toolbar-action": e,
      className: `flex h-full cursor-interaction items-center gap-2 rounded-md px-2 hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:bg-primary-ghost-active data-[state=open]:bg-primary-ghost-hover`,
      "aria-label": n ? t : void 0,
      "aria-description": i,
      disabled: r,
      title: i ?? (n ? t : void 0),
      children: (0, K.jsx)($t, { icon: a, hideLabel: n, label: t, subLabel: o, subLabelId: u }),
    }),
  });
  return (0, K.jsxs)(v, {
    open: d && !r,
    onOpenChange: (e) => p(e && !r),
    children: [
      n ? (0, K.jsx)(Lt, { label: t, disabled: d || r, className: `inline-flex h-full`, children: m }) : m,
      l
        ? (0, K.jsx)(f, {
            container: l,
            children: (0, K.jsx)(A, {
              "aria-label": t,
              align: c,
              sideOffset: 8,
              className: `pointer-events-auto z-50`,
              children: s,
            }),
          })
        : null,
    ],
  });
}
function rn() {
  return (0, K.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": `vertical`,
    className: `mx-1 h-3 w-px bg-token-border-default`,
  });
}
function an(e) {
  return Array.from(e.querySelectorAll(cn));
}
function on(e, t = e[0]) {
  for (let n of e) n.tabIndex = n === t ? 0 : -1;
}
var sn, K, cn;
function ln() {
  return (ln = e(() => {
    (N(), z(), (sn = G()), It(), (K = W()), (cn = `button[data-toolbar-action]:not([disabled])`));
  }))();
}
function un(e, t, n) {
  return e + (t - n) / 2;
}
function dn(e, t = `top-right`, n = 0) {
  let r = n * Cn;
  return e.width === 0 && e.height === 0
    ? { left: e.left, top: e.top + r }
    : {
        left: t.endsWith(`-left`) ? e.left : e.left + e.width,
        top: Math.max(13, t.startsWith(`bottom-`) ? e.top + e.height : e.top) + r,
      };
}
function fn(e, t) {
  let n = { ...e };
  for (let e of [...t].sort((e, t) => e.top - t.top))
    Math.abs(n.left - e.left) < 26 && Math.abs(n.top - e.top) < 26 && (n.top = e.top + 26);
  return n;
}
function pn({
  position: e,
  icon: t,
  color: n,
  draft: r = !1,
  selected: i = !1,
  testId: a,
  title: o,
  onClick: s,
  onMouseEnter: c,
  onMouseLeave: l,
  onFocus: u,
  onBlur: d,
}) {
  let [f, p] = (0, bn.useState)(!1),
    m = s != null || c != null || l != null || u != null || d != null,
    h = H(
      `absolute z-30 flex items-center justify-center border-0 bg-transparent p-0`,
      m ? `pointer-events-auto cursor-pointer` : `pointer-events-none`,
    ),
    g = {
      color: n ?? St,
      left: e.left,
      top: e.top,
      width: 26,
      height: 26,
      zIndex: i ? 31 : void 0,
      transform: `translate(-50%, -50%)`,
    },
    _ = (0, q.jsxs)(`span`, {
      className: `pointer-events-none relative flex size-full origin-bottom-left items-center justify-center transition-transform duration-basic ease-enter-snappy motion-reduce:transition-none`,
      style: { scale: i || f ? Ot : 1 },
      children: [
        (0, q.jsx)(Et, { appearance: `review`, className: `absolute inset-0 size-full` }),
        t != null &&
          (0, q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none relative z-10 flex size-4 items-center justify-center text-white`,
            children: t,
          }),
      ],
    });
  return m
    ? (0, q.jsx)(`button`, {
        type: `button`,
        "data-testid": a,
        "data-popcorn-annotation-marker": `true`,
        className: h,
        style: g,
        title: o,
        onClick: s,
        onMouseEnter: () => {
          (p(!0), c?.());
        },
        onMouseLeave: () => {
          (p(!1), l?.());
        },
        onFocus: u,
        onBlur: d,
        children: _,
      })
    : (0, q.jsx)(`div`, { "data-testid": a, className: h, style: g, title: o, children: _ });
}
function mn({
  bounds: e,
  containerElement: t,
  collisionBoundaryElement: n,
  label: r = `Ask ChatGPT`,
  assistantIcon: i,
  onClick: a,
  onShown: o,
  onCommentClick: s,
  placement: l = `bottom-right`,
  shortcutScopeElement: u,
  testId: d = `popcorn-ask-for-edit-button`,
}) {
  let f = (0, bn.useRef)(!1),
    p = (0, bn.useMemo)(
      () =>
        t
          ? {
              contextElement: n ?? t,
              getBoundingClientRect: () => {
                let n = ft(t, e.left, e.top),
                  r = ft(t, e.left + e.width, e.top + e.height);
                return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
              },
            }
          : null,
      [e.height, e.left, e.top, e.width, t, n],
    ),
    m = n ?? t,
    {
      refs: h,
      x: g,
      y: _,
      strategy: v,
      isPositioned: y,
    } = c({
      placement: hn(l),
      strategy: `absolute`,
      middleware: [
        re(wn),
        ...(n ? [B({ padding: Tn, boundary: n })] : []),
        Se({ padding: Tn, ...(m ? { boundary: m } : {}), ...(n ? { crossAxis: !0 } : {}) }),
      ],
      whileElementsMounted: be,
    }),
    b = !t || (y && g != null && _ != null);
  (_n({ onClick: a, shortcutScopeElement: u }),
    (0, bn.useEffect)(() => {
      b && !f.current && o != null && ((f.current = !0), o());
    }, [b, o]),
    (0, bn.useEffect)(() => {
      h.setReference(p);
    }, [h, p]));
  let x = vn(),
    S = (e) => {
      (e.preventDefault(), e.stopPropagation());
    },
    C = gn(e, l),
    w = t
      ? g != null && _ != null
        ? { fontFamily: Sn, position: v, left: g, top: _, visibility: b ? void 0 : `hidden` }
        : { ...C, visibility: `hidden` }
      : C,
    T = (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(`span`, { className: `h-[18px]`, style: { fontFamily: Sn }, children: r }),
        (0, q.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `inline-flex h-[18px] items-center rounded-full bg-token-bg-secondary px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-token-text-secondary`,
          style: { fontFamily: Sn },
          children: x,
        }),
      ],
    });
  return s == null
    ? (0, q.jsx)(`button`, {
        ref: h.setFloating,
        type: `button`,
        "aria-label": r,
        "data-popcorn-ask-for-edit": `true`,
        "data-popcorn-ask-for-edit-placement": l,
        "data-testid": d,
        className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light hover:bg-token-bg-secondary`,
        style: w,
        onMouseDown: S,
        onClick: (e) => {
          (S(e), a?.(`ask_codex_button`));
        },
        children: T,
      })
    : a == null
      ? (0, q.jsx)(`div`, {
          ref: h.setFloating,
          "data-testid": `${d}-toolbar`,
          className: `pointer-events-auto absolute z-40`,
          style: w,
          children: (0, q.jsx)(en, {
            ariaLabel: `Selection actions`,
            children: (0, q.jsx)(tn, {
              actionId: `add-comment`,
              label: `Add comment`,
              subLabel: (0, q.jsx)(xn, {
                "aria-hidden": `true`,
                className: `size-4 text-token-text-primary`,
              }),
              onMouseDown: S,
              onClick: (e) => {
                (S(e), s());
              },
            }),
          }),
        })
      : (0, q.jsxs)(`div`, {
          ref: h.setFloating,
          role: `toolbar`,
          "aria-label": `Selection actions`,
          "data-testid": `${d}-toolbar`,
          className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max items-center gap-[3px] rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light`,
          style: w,
          children: [
            (0, q.jsxs)(`button`, {
              type: `button`,
              "aria-label": r,
              "data-popcorn-ask-for-edit": `true`,
              "data-popcorn-ask-for-edit-placement": l,
              "data-testid": d,
              className: `inline-flex h-[18px] cursor-interaction items-center gap-2 border-0 bg-transparent p-0 text-inherit`,
              onMouseDown: S,
              onClick: (e) => {
                (S(e), a(`ask_codex_button`));
              },
              children: [
                i != null &&
                  (0, q.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `inline-flex size-4 items-center`,
                    children: i,
                  }),
                T,
              ],
            }),
            (0, q.jsx)(`span`, { "aria-hidden": `true`, className: `h-4 w-px bg-token-border-light` }),
            (0, q.jsxs)(`button`, {
              type: `button`,
              "aria-label": `Add comment`,
              "data-testid": `${d}-comment`,
              className: `inline-flex h-[18px] shrink-0 cursor-interaction items-center justify-center gap-1 rounded-full border-0 bg-transparent p-0 text-inherit hover:bg-token-bg-tertiary`,
              onMouseDown: S,
              onClick: (e) => {
                (S(e), s());
              },
              children: [
                (0, q.jsx)(`span`, { children: `Add comment` }),
                (0, q.jsx)(xn, { "aria-hidden": `true`, className: `size-4 opacity-65` }),
              ],
            }),
          ],
        });
}
function hn(e) {
  switch (e) {
    case `bottom-left`:
      return `bottom-start`;
    case `bottom-right`:
      return `bottom-end`;
    case `top-left`:
      return `top-start`;
    case `top-right`:
      return `top-end`;
  }
}
function gn(e, t) {
  switch (t) {
    case `bottom-left`:
      return { fontFamily: Sn, left: e.left, top: e.top + e.height + wn };
    case `bottom-right`:
      return {
        fontFamily: Sn,
        left: e.left + e.width,
        top: e.top + e.height + wn,
        transform: `translateX(-100%)`,
      };
    case `top-left`:
      return { fontFamily: Sn, left: e.left, top: e.top - wn, transform: `translateY(-100%)` };
    case `top-right`:
      return {
        fontFamily: Sn,
        left: e.left + e.width,
        top: e.top - wn,
        transform: `translate(-100%, -100%)`,
      };
  }
}
function _n({ enabled: e = !0, onClick: t, shortcutScopeElement: n }) {
  (0, bn.useEffect)(() => {
    let r = n?.ownerDocument.defaultView;
    if (!e || t == null || r == null || n == null) return;
    let i = (e) => {
      let i = e.target instanceof r.Node && n.contains(e.target),
        a = n.ownerDocument.activeElement,
        o = a instanceof r.Node && n.contains(a);
      e.defaultPrevented ||
        e.repeat ||
        (!e.metaKey && !e.ctrlKey) ||
        e.altKey ||
        !e.shiftKey ||
        e.key.toLowerCase() !== `x` ||
        (!i && !o) ||
        (e.preventDefault(), e.stopPropagation(), t(`ask_codex_shortcut`));
    };
    return (
      r.addEventListener(`keydown`, i, !0),
      () => {
        r.removeEventListener(`keydown`, i, !0);
      }
    );
  }, [e, t, n]);
}
function vn() {
  return typeof navigator < `u` && /Win|Linux/.test(navigator.platform) ? `Ctrl Shift X` : `⇧⌘X`;
}
function yn({
  bounds: e,
  appearance: t,
  borderRadius: n,
  fillOnly: r,
  borderWidthPx: i,
  borderColor: a,
  fillColor: o,
  shadow: s,
  testId: c,
}) {
  return (0, q.jsx)(`div`, {
    "data-testid": c,
    className: H(`pointer-events-none absolute box-border`),
    style: {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height,
      ...Dt({ appearance: t, fillOnly: r, borderWidthPx: i, borderColor: a, fillColor: o, shadow: s }),
      ...(n == null ? void 0 : { borderRadius: n }),
    },
  });
}
var bn, q, xn, Sn, Cn, wn, Tn;
function En() {
  return (En = e(() => {
    (we(),
      g(),
      z(),
      (bn = G()),
      wt(),
      ln(),
      Je(),
      Tt(),
      (q = W()),
      (xn = Ye(ne)),
      (Sn = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif`),
      (Cn = 20),
      (wn = 6),
      (Tn = 8));
  }))();
}
function Dn(e) {
  let [t] = e;
  return t
    ? e.length === 1
      ? `M ${t.x} ${t.y}`
      : e.reduce((e, t, n) => `${e}${n === 0 ? `` : ` `}${n === 0 ? `M` : `L`} ${t.x} ${t.y}`, ``)
    : ``;
}
function On(e) {
  let t = e[0];
  if (!t) return null;
  let n = t.x,
    r = t.x,
    i = t.y,
    a = t.y;
  for (let t of e.slice(1))
    ((n = Math.min(n, t.x)), (r = Math.max(r, t.x)), (i = Math.min(i, t.y)), (a = Math.max(a, t.y)));
  return { left: n, top: i, width: r - n, height: a - i };
}
function kn(e) {
  return On(e.flatMap((e) => e.points));
}
function An(e, { paddingPx: t = 24, minSizePx: n = 96 } = {}) {
  let r = e.width + t * 2,
    i = e.height + t * 2,
    a = Math.max(n, r),
    o = Math.max(n, i);
  return { left: e.left - (a - e.width) / 2, top: e.top - (o - e.height) / 2, width: a, height: o };
}
function jn(e, t) {
  let n = Math.min(t.width, e.width),
    r = Math.min(t.height, e.height);
  return {
    left: Math.min(Math.max(0, e.left), Math.max(0, t.width - n)),
    top: Math.min(Math.max(0, e.top), Math.max(0, t.height - r)),
    width: n,
    height: r,
  };
}
function Mn({ drawingId: e, screenshot: t, markerViewportPoint: n, viewportSize: r }) {
  return {
    localBrowserCommentMetadata: {
      kind: `region`,
      ...(n == null ? {} : { markerViewportPoint: { ...n } }),
      ...(r == null ? {} : { viewportSize: { ...r } }),
    },
    localBrowserScreenshot: { ...t, commentId: e },
  };
}
async function Nn({
  cropRect: e,
  viewportSize: t,
  baseCanvas: n,
  overlayCanvases: r = [],
  strokes: i,
  projectPoint: a,
  mimeType: o = `image/png`,
}) {
  if (typeof OffscreenCanvas > `u` || typeof OffscreenCanvas.prototype.convertToBlob != `function`)
    throw Error(`Popcorn drawing screenshot export requires OffscreenCanvas support.`);
  let s = n.width / Math.max(1, t.width),
    c = n.height / Math.max(1, t.height),
    l = Math.max(1, Math.round(e.width * s)),
    u = Math.max(1, Math.round(e.height * c)),
    d = new OffscreenCanvas(l, u),
    f = d.getContext(`2d`);
  if (!f) throw Error(`Failed to acquire OffscreenCanvas 2d context.`);
  ((f.imageSmoothingEnabled = !0),
    (f.imageSmoothingQuality = `high`),
    (f.fillStyle = `#ffffff`),
    f.fillRect(0, 0, l, u));
  let p = l / Math.max(1, e.width),
    m = u / Math.max(1, e.height);
  for (let i of [n, ...r])
    !i ||
      i.width <= 0 ||
      i.height <= 0 ||
      f.drawImage(
        i,
        e.left * (i.width / Math.max(1, t.width)),
        e.top * (i.height / Math.max(1, t.height)),
        e.width * (i.width / Math.max(1, t.width)),
        e.height * (i.height / Math.max(1, t.height)),
        0,
        0,
        l,
        u,
      );
  for (let t of i) {
    let n = t.points.map((e) => a(e)).filter((e) => e != null);
    if (n.length !== 0) {
      if (
        (f.save(),
        (f.strokeStyle = t.color),
        (f.fillStyle = t.color),
        (f.lineCap = `round`),
        (f.lineJoin = `round`),
        (f.lineWidth = t.strokeWidth * Math.max(p, m)),
        n.length === 1)
      ) {
        let [r] = n;
        if (!r) {
          f.restore();
          continue;
        }
        (f.beginPath(),
          f.arc((r.x - e.left) * p, (r.y - e.top) * m, (t.strokeWidth * Math.max(p, m)) / 2, 0, Math.PI * 2),
          f.fill(),
          f.restore());
        continue;
      }
      (f.beginPath(),
        n.forEach((t, n) => {
          let r = (t.x - e.left) * p,
            i = (t.y - e.top) * m;
          n === 0 ? f.moveTo(r, i) : f.lineTo(r, i);
        }),
        f.stroke(),
        f.restore());
    }
  }
  return { blob: await d.convertToBlob({ type: o }), width: l, height: u, mimeType: o };
}
var Pn;
function Fn() {
  return (Fn = e(() => {
    Pn = `#111111`;
  }))();
}
function In(e, t) {
  return e.points.map((e) => t(e)).filter((e) => e != null);
}
function Ln({ stroke: e, projectPoint: t }) {
  let n = In(e, t);
  if (n.length === 0) return null;
  if (n.length === 1) {
    let [t] = n;
    return t ? (0, Bn.jsx)(`circle`, { cx: t.x, cy: t.y, r: e.strokeWidth / 2, fill: e.color }) : null;
  }
  return (0, Bn.jsx)(`path`, {
    d: Dn(n),
    fill: `none`,
    stroke: e.color,
    strokeWidth: e.strokeWidth,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  });
}
function Rn({ strokes: e, projectPoint: t, testId: n, clipBounds: r }) {
  let i = `popcorn-drawing-overlay-${(0, zn.useId)().replace(/[:]/g, ``)}`;
  return e.length === 0
    ? null
    : (0, Bn.jsxs)(`svg`, {
        "data-testid": n,
        className: `pointer-events-none absolute inset-0 z-20 overflow-hidden`,
        width: `100%`,
        height: `100%`,
        children: [
          r
            ? (0, Bn.jsx)(`defs`, {
                children: (0, Bn.jsx)(`clipPath`, {
                  id: i,
                  children: (0, Bn.jsx)(`rect`, { x: r.left, y: r.top, width: r.width, height: r.height }),
                }),
              })
            : null,
          (0, Bn.jsx)(`g`, {
            clipPath: r ? `url(#${i})` : void 0,
            children: e.map((e, n) =>
              (0, Bn.jsx)(Ln, { stroke: e, projectPoint: t }, `${n}-${e.points.length}`),
            ),
          }),
        ],
      });
}
var zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((zn = G()), Fn(), (Bn = W()));
  }))();
}
function Hn(e) {
  return ((Un += 1), `${e}-${Date.now().toString(36)}-${Un.toString(36)}`);
}
var Un;
function Wn() {
  return (Wn = e(() => {
    Un = 0;
  }))();
}
function Gn({ active: e, disabled: t = !1, onClick: n, label: r, activeLabel: i = r, icon: a, testId: o }) {
  let s = (0, Yn.useRef)(null),
    [c, l] = (0, Yn.useState)(!1),
    [u, d] = (0, Yn.useState)(!1);
  (0, Yn.useEffect)(() => {
    if (e) return;
    (l(!1), d(!1));
    let t = s.current;
    typeof document < `u` && t != null && t === document.activeElement && t.blur();
  }, [e]);
  let f = u && !c ? 15 : 10,
    p = `color-mix(in srgb, var(--color-token-bg-primary) ${100 - f}%, var(--color-token-charts-blue, #339cff) ${f}%)`,
    m = e && i != null ? i : r;
  return (0, Xn.jsx)(`button`, {
    ref: s,
    type: `button`,
    "data-testid": o,
    "aria-label": m,
    "aria-pressed": e,
    disabled: t,
    className: H(
      `ease-basic inline-flex h-token-button-composer min-w-8 appearance-none items-center overflow-hidden rounded-lg border border-transparent text-base leading-[18px] outline-none transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none`,
      `disabled:cursor-not-allowed disabled:opacity-100`,
      e ? `max-w-40 justify-start px-2.5` : `max-w-8 justify-center px-0`,
      e
        ? `border-token-charts-blue/40`
        : `bg-transparent text-token-text-tertiary hover:bg-token-list-hover-background`,
    ),
    style: e
      ? {
          backgroundColor: p,
          color: `var(--color-text-tip, var(--color-token-text-link-foreground, #339cff))`,
        }
      : void 0,
    onClick: () => {
      (l(!e), n());
    },
    onPointerEnter: () => {
      d(!0);
    },
    onPointerLeave: () => {
      (d(!1), l(!1));
    },
    children: (0, Xn.jsxs)(`span`, {
      className: H(`flex min-w-0 items-center`, e ? `justify-start` : `w-full justify-center`),
      children: [
        a({
          className: H(
            `icon-sm shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
            e ? `-translate-x-0.5` : `translate-x-0`,
          ),
        }),
        (0, Xn.jsx)(`span`, {
          className: H(
            `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
            e ? `ms-1.5 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
          ),
          children: m,
        }),
      ],
    }),
  });
}
function Kn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-annotation-button` }) {
  return (0, Xn.jsx)(Gn, {
    active: e,
    activeLabel: `Annotating`,
    disabled: t,
    onClick: n,
    label: `Annotation`,
    icon: ct,
    testId: r,
  });
}
function qn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-presentation-comments-button` }) {
  return (0, Xn.jsx)(`button`, {
    type: `button`,
    "aria-label": `Comments`,
    "aria-expanded": e,
    "data-testid": r,
    disabled: t,
    onClick: n,
    className: `enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary text-token-text-tertiary inline-flex size-8 items-center justify-center rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
    children: (0, Xn.jsx)(rt, { className: `icon-sm` }),
  });
}
function Jn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-drawing-button` }) {
  return (0, Xn.jsx)(Gn, { active: e, disabled: t, onClick: n, label: `Drawing`, icon: ot, testId: r });
}
var Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    (z(), (Yn = G()), et(), (Xn = W()));
  }))();
}
function Qn({ text: e, hasMultipleBlocks: t, measureElement: n, surfaceElement: r }) {
  let i = e.trim();
  if (i.length === 0) return !1;
  if (t) return !0;
  let a = $n(r),
    o = er(e, n);
  return a == null || o == null ? i.length >= Ar : o + jr > a;
}
function $n(e) {
  if (e == null) return null;
  let t = e.getBoundingClientRect();
  if (t.width === 0) return null;
  let n = e.querySelector(`[data-browser-comment-submit]`)?.getBoundingClientRect().width ?? Er;
  return t.width - Or - kr - n - Dr;
}
function er(e, t) {
  return t == null ? null : ((t.textContent = e), t.getBoundingClientRect().width);
}
function tr(e) {
  return Math.max(1, e.split(/\r\n|\r|\n/).length);
}
function nr(e, t) {
  return e == null
    ? !1
    : e.contains(t)
      ? !0
      : Array.from(e.querySelectorAll(`[aria-controls]`)).some(
          (n) =>
            n
              .getAttribute(`aria-controls`)
              ?.split(/\s+/)
              .some((n) => e.ownerDocument.getElementById(n)?.contains(t)) === !0,
        );
}
function rr(e) {
  if (e == null) return;
  let t = e.ownerDocument;
  (ir(t), e.classList.remove(Mr));
  let n = t.defaultView;
  if (n == null) {
    e.classList.add(Mr);
    return;
  }
  let r = Fr.get(e);
  r != null && n.cancelAnimationFrame(r);
  let i = n.requestAnimationFrame(() => {
    (Fr.delete(e), e.classList.add(Mr));
  });
  Fr.set(e, i);
}
function ir(e) {
  if (e.getElementById(Nr) != null) return;
  let t = e.createElement(`style`);
  ((t.id = Nr), (t.textContent = Pr), e.head.appendChild(t));
}
var J,
  ar,
  Y,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir;
function Lr() {
  return (Lr = e(() => {
    (we(),
      z(),
      (J = G()),
      (ar = Ce()),
      et(),
      En(),
      (Y = W()),
      (or = 294),
      (sr = 336),
      (cr = 320),
      (lr = 138),
      (ur = 8),
      (dr = 12),
      (fr = 4),
      (pr = 112),
      (mr = 44),
      (hr = 24),
      (gr = 20),
      (_r = 72),
      (vr = H(
        `text-token-dropdown-foreground placeholder:text-token-description-foreground min-h-0 w-full resize-none border-0 bg-transparent p-0 font-sans leading-normal outline-none`,
        `appearance-none shadow-none [text-decoration:none]`,
        `focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent`,
        `[outline:none] [box-shadow:none] [-webkit-appearance:none]`,
        `!min-h-0 max-h-full flex-1 overflow-y-auto text-[length:var(--codex-chat-font-size,13px)] leading-6`,
      )),
      (yr = { "--codex-chat-font-size": `13px`, fontSize: `var(--codex-chat-font-size, 13px)` }),
      (br = { "--codex-chat-font-size": `14px`, fontSize: `var(--codex-chat-font-size, 14px)` }),
      (xr = `pointer-events-none absolute inset-x-0 top-0 flex flex-col overflow-visible bg-transparent`),
      (Sr = `pointer-events-auto relative w-full overflow-hidden bg-token-dropdown-background transition-[height] duration-150 ease-out motion-reduce:transition-none [background-color:var(--color-token-dropdown-background,var(--color-token-main-surface-primary,white))]`),
      (Cr = `absolute left-4 min-w-0 overflow-hidden transition-[width,top,bottom] duration-150 ease-out motion-reduce:transition-none`),
      (wr = `absolute right-3 bottom-2 left-2 flex origin-bottom-left items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`),
      (Tr = `pointer-events-none absolute top-0 left-0 whitespace-pre text-[length:var(--codex-chat-font-size,13px)] leading-5 font-sans opacity-0`),
      (Er = 28),
      (Dr = 8),
      (Or = 16),
      (kr = 8),
      (Ar = 40),
      (jr = 12),
      (Mr = `browser-comment-popup-shake`),
      (Nr = `popcorn-annotation-editor-shake-style`),
      (Pr = `
@keyframes browser-comment-popup-shake {
  0%,
  100% {
    transform: translateX(0) rotate(0deg);
  }
  12% {
    transform: translateX(6px) rotate(0.75deg);
  }
  26% {
    transform: translateX(-12px) rotate(-1.5deg);
  }
  40% {
    transform: translateX(16px) rotate(2deg);
  }
  54% {
    transform: translateX(-16px) rotate(-2deg);
  }
  68% {
    transform: translateX(12px) rotate(1.5deg);
  }
  82% {
    transform: translateX(-6px) rotate(-0.75deg);
  }
}

.browser-comment-popup-shake {
  animation: browser-comment-popup-shake 900ms linear both;
}

@media (prefers-reduced-motion: reduce) {
  .browser-comment-popup-shake {
    animation: none;
  }
}
`),
      (Fr = new WeakMap()),
      (Ir = (0, J.forwardRef)(function (
        {
          anchorBounds: e,
          containerElement: t,
          collisionBoundaryElement: n = null,
          portalContainerElement: r = null,
          value: i,
          onChange: a,
          onCancel: o,
          onEscape: s = o,
          onSubmit: l,
          mode: u = `create`,
          allowDirectSubmitOnEdit: d = !1,
          defaultCreateSubmitMode: f = `direct`,
          savedSubmitDisabled: p = !1,
          dictationControls: m,
          placeholder: h = `Describe a change or ask a question`,
          isComment: g = !1,
          commentComposer: _,
          nativeFileCommentLabel: v,
          onDelete: y,
          placement: b,
          onDictationBusyChange: x,
          testId: S = `popcorn-annotation-editor`,
        },
        C,
      ) {
        let w = (0, J.useRef)(null),
          T = (0, J.useRef)(null),
          E = (0, J.useRef)(null),
          D = (0, J.useRef)(null),
          [O, k] = (0, J.useState)(!1),
          [A, j] = (0, J.useState)(!1),
          M = u === `edit`,
          N = !M && _ != null,
          P = !M && g,
          F = N || P,
          I = i.trim().length > 0,
          L = F && (I || P),
          R = L ? gr : hr,
          te = F && e != null && (e.width > 0 || e.height > 0),
          ne = f === `direct` ? `saved` : `direct`,
          z = A ? ne : f,
          V = z === `direct`,
          ie = p && !M && !P,
          ae = !I || (ie && !V),
          U = (...e) => {
            (ie && e[0] === `saved`) || l(...e);
          },
          oe = n ?? r ?? t,
          se = (0, J.useMemo)(() => (e ? dn(e, b) : null), [e, b]),
          ce = b?.endsWith(`-left`) ?? !1,
          le = (0, J.useMemo)(
            () =>
              !se || !t
                ? null
                : te && e
                  ? {
                      contextElement: oe ?? t,
                      getBoundingClientRect: () => {
                        let n = ft(t, e.left, e.top),
                          r = ft(t, e.left + e.width, e.top + e.height);
                        return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
                      },
                    }
                  : {
                      contextElement: oe ?? t,
                      getBoundingClientRect: () => {
                        let e = ft(t, se.left, se.top - mr / 2),
                          n = ft(t, se.left, se.top + mr / 2);
                        return new DOMRect(e.x, e.y, 0, n.y - e.y);
                      },
                    },
            [e, t, se, oe, te],
          ),
          ue = { fallbackPlacements: [`left-start`], placement: `right-start` };
        (ce && ((ue.fallbackPlacements = [`right-start`]), (ue.placement = `left-start`)),
          te && ((ue.fallbackPlacements = [`top-end`]), (ue.placement = `bottom-end`)));
        let {
            refs: de,
            x: fe,
            y: pe,
            strategy: me,
            update: he,
          } = c({
            placement: ue.placement,
            strategy: `absolute`,
            middleware: [
              re(F ? dr : 20),
              B({ fallbackPlacements: ue.fallbackPlacements, padding: ur, ...(oe ? { boundary: oe } : {}) }),
              Se({ crossAxis: !0, padding: ur, ...(oe ? { boundary: oe } : {}) }),
              ee({
                padding: ur,
                ...(oe ? { boundary: oe } : {}),
                apply({ availableWidth: e, elements: t }) {
                  t.floating.style.maxWidth = `${Math.max(0, e)}px`;
                },
              }),
            ],
            whileElementsMounted: be,
          }),
          ge = P ? lr : pr,
          _e = O || L ? ge : mr,
          ve = { top: pe ?? void 0 };
        pe != null && !te && (ve.top = b == null ? pe + (ge - _e) / 2 + fr : un(pe, mr, _e));
        let ye = (0, J.useCallback)(
          (e) => {
            if (((w.current = e), de.setFloating(e), typeof C == `function`)) {
              C(e);
              return;
            }
            C && (C.current = e);
          },
          [C, de],
        );
        if (
          ((0, J.useEffect)(() => {
            e && T.current?.focus();
          }, [e]),
          (0, J.useEffect)(() => {
            let e = N ? w.current : T.current;
            if (e == null) return;
            let t = (e) => {
              e.stopPropagation();
            };
            return (
              e.addEventListener(`wheel`, t, { passive: !0 }),
              () => {
                e.removeEventListener(`wheel`, t);
              }
            );
          }, [e, N]),
          (0, J.useLayoutEffect)(() => {
            let e = T.current;
            if (!e) return;
            let t = tr(i),
              n =
                M ||
                Qn({
                  text: i,
                  hasMultipleBlocks: t > 1,
                  measureElement: D.current,
                  surfaceElement: E.current,
                });
            if (n !== O) {
              k(n);
              return;
            }
            if (n) {
              ((e.style.height = `0px`),
                (e.style.height = `${Math.min(Math.max(e.scrollHeight, t * R), _r)}px`));
              return;
            }
            e.style.height = `${R}px`;
          }, [M, O, R, i]),
          (0, J.useEffect)(() => {
            de.setReference(le);
          }, [de, le]),
          (0, J.useEffect)(() => {
            if (F) return;
            let e = (e) => {
                j(e.metaKey || e.ctrlKey);
              },
              t = () => {
                j(!1);
              };
            return (
              window.addEventListener(`keydown`, e, !0),
              window.addEventListener(`keyup`, e, !0),
              window.addEventListener(`blur`, t),
              () => {
                (window.removeEventListener(`keydown`, e, !0),
                  window.removeEventListener(`keyup`, e, !0),
                  window.removeEventListener(`blur`, t));
              }
            );
          }, [F]),
          (0, J.useEffect)(() => {
            e && he?.();
          }, [e?.height, e?.left, e?.top, e?.width, i, O, he]),
          !e)
        )
          return null;
        if (N) {
          let e = (0, Y.jsx)(`div`, {
            ref: ye,
            "data-testid": S,
            "data-popcorn-annotation-editor-placement": b,
            className: `pointer-events-auto z-40`,
            style: { position: me, left: fe ?? 0, top: pe ?? 0, width: sr },
            onMouseDown: (e) => e.stopPropagation(),
            children: _,
          });
          return r == null ? e : (0, ar.createPortal)(e, r);
        }
        let xe = (e) => {
            let t = e?.isBusy ?? !1,
              n = e?.isDictating ?? !1,
              r = e?.dictationButton ?? null,
              c = e?.recordingOverlay ?? null,
              l = !F && !n && r != null && (O || !I),
              u = !F && !t && (O || I || r == null),
              p = (O && (M || r != null)) || L,
              m = p ? `top-2 bottom-11` : `top-2 bottom-2`,
              g = p ? Or : 44;
            return (0, Y.jsx)(`div`, {
              ref: ye,
              "data-testid": S,
              "data-popcorn-annotation-editor-placement": b,
              className: `pointer-events-auto z-40`,
              style: { position: me, left: fe ?? 0, top: ve.top ?? 0, width: P ? cr : F ? sr : or },
              onMouseDown: (e) => {
                e.stopPropagation();
              },
              children: (0, Y.jsx)(`form`, {
                className: H(
                  `pointer-events-none relative w-full overflow-visible bg-transparent text-token-foreground`,
                  P ? `h-[138px]` : `h-[112px]`,
                ),
                style: L ? br : yr,
                onSubmit: (e) => {
                  (e.preventDefault(), !t && I && U(M ? `saved` : P ? `direct` : z, `button`));
                },
                children: (0, Y.jsx)(`div`, {
                  className: xr,
                  style: { height: ge },
                  children: (0, Y.jsxs)(`div`, {
                    ref: E,
                    "data-browser-comment-editor-surface": !0,
                    className: H(
                      Sr,
                      P
                        ? `@container rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] ring-1 ring-token-border-light backdrop-blur-[16px]`
                        : L
                          ? `@container rounded-[14px] shadow-md ring-1 ring-token-border-light backdrop-blur-[24px]`
                          : `rounded-[22px] shadow-md ring-1 ring-token-border-light`,
                    ),
                    style: {
                      height: _e,
                      backgroundColor: P
                        ? `color-mix(in srgb, var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white)) 85%, transparent)`
                        : `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
                    },
                    children: [
                      P &&
                        v != null &&
                        (0, Y.jsxs)(`div`, {
                          className: `absolute inset-x-2 top-2 flex h-[26px] items-center gap-2 rounded-md bg-artifact-powerpoint-surface px-2 py-1.5 text-xs leading-[14px] font-normal tracking-[-0.15px] text-artifact-powerpoint-foreground`,
                          "data-testid": `${S}-native-file-label`,
                          children: [
                            (0, Y.jsx)(tt, { "aria-hidden": !0, className: `size-3.5` }),
                            (0, Y.jsx)(`span`, { children: v }),
                          ],
                        }),
                      (0, Y.jsx)(`div`, {
                        className: H(
                          Cr,
                          n && `invisible`,
                          P && v != null
                            ? `top-11 right-[14px] bottom-[43px] left-[14px]`
                            : L
                              ? `top-[13px] right-[14px] bottom-[43px] left-[14px]`
                              : b == null
                                ? p
                                  ? `top-2 bottom-11 w-[calc(100%-32px)]`
                                  : `top-2 bottom-2 w-[calc(100%-60px)]`
                                : m,
                        ),
                        style: b == null || L ? void 0 : { left: Or, right: g },
                        children: (0, Y.jsx)(`div`, {
                          className: H(`h-full min-h-0 translate-y-0.5`, F && `flex items-start gap-1`),
                          children: (0, Y.jsx)(`textarea`, {
                            ref: T,
                            inert: t,
                            value: i,
                            onChange: (e) => a(e.target.value),
                            onKeyDown: (e) => {
                              if (t) {
                                (e.preventDefault(), e.stopPropagation());
                                return;
                              }
                              if (e.key === `Escape`) {
                                (e.preventDefault(), e.stopPropagation(), s());
                                return;
                              }
                              if (
                                e.key === `Enter` &&
                                !e.altKey &&
                                !e.shiftKey &&
                                !e.nativeEvent.isComposing &&
                                I
                              ) {
                                if ((e.preventDefault(), e.stopPropagation(), M)) {
                                  U(d && (e.metaKey || e.ctrlKey) ? `direct` : `saved`, `keyboard`);
                                  return;
                                }
                                if (P) {
                                  U(`direct`, `keyboard`);
                                  return;
                                }
                                if (e.metaKey || e.ctrlKey) {
                                  U(ne, `keyboard`);
                                  return;
                                }
                                U(f, `keyboard`);
                              }
                            },
                            placeholder: h,
                            rows: 1,
                            className: H(vr, !O && `!overflow-hidden whitespace-nowrap`),
                            style: {
                              fontSize: `var(--codex-chat-font-size, 13px)`,
                              lineHeight: `${R}px`,
                              appearance: `none`,
                              WebkitAppearance: `none`,
                              outline: `none`,
                              boxShadow: `none`,
                              border: `0 none transparent`,
                              borderImage: `none`,
                              backgroundColor: `transparent`,
                              backgroundImage: `none`,
                            },
                          }),
                        }),
                      }),
                      (0, Y.jsx)(`span`, {
                        ref: D,
                        "aria-hidden": `true`,
                        className: Tr,
                        style: { fontSize: `var(--codex-chat-font-size, 13px)`, lineHeight: `${hr}px` },
                        children: i,
                      }),
                      M
                        ? (0, Y.jsxs)(`div`, {
                            "aria-hidden": !O || n,
                            className: H(
                              wr,
                              `justify-between`,
                              O && !n ? `scale-100 opacity-100` : `pointer-events-none scale-95 opacity-0`,
                            ),
                            children: [
                              t
                                ? null
                                : (0, Y.jsx)(`button`, {
                                    type: `button`,
                                    "aria-label": `Delete annotation`,
                                    className: `inline-flex h-8 w-8 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`,
                                    onClick: y,
                                    children: (0, Y.jsx)(Xe, { className: `size-4` }),
                                  }),
                              (0, Y.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  l ? r : null,
                                  t
                                    ? null
                                    : (0, Y.jsxs)(Y.Fragment, {
                                        children: [
                                          (0, Y.jsx)(`button`, {
                                            type: `button`,
                                            tabIndex: O ? void 0 : -1,
                                            className: `inline-flex h-8 items-center rounded-full border border-token-border-light bg-token-main-surface-primary px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium text-token-text-primary hover:bg-token-bg-tertiary`,
                                            style: {
                                              fontSize: `var(--codex-chat-font-size, 13px)`,
                                              lineHeight: `20px`,
                                            },
                                            onClick: o,
                                            children: `Cancel`,
                                          }),
                                          (0, Y.jsx)(`button`, {
                                            type: `submit`,
                                            disabled: !I,
                                            className: H(
                                              `inline-flex h-8 items-center rounded-full px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium transition-colors`,
                                              I
                                                ? `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`
                                                : `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`,
                                            ),
                                            style: {
                                              fontSize: `var(--codex-chat-font-size, 13px)`,
                                              lineHeight: `20px`,
                                            },
                                            children: `Save`,
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      !M &&
                        !F &&
                        (0, Y.jsxs)(`div`, {
                          className: `absolute right-2 bottom-2 flex items-center gap-2`,
                          children: [
                            l ? r : null,
                            u
                              ? (0, Y.jsx)(`button`, {
                                  "aria-label": `Comment`,
                                  "data-browser-comment-submit": !0,
                                  type: `button`,
                                  disabled: ae,
                                  className: H(
                                    `inline-flex size-7 items-center justify-center rounded-full transition-colors`,
                                    ae
                                      ? `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`
                                      : `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`,
                                  ),
                                  onMouseDown: (e) => {
                                    e.preventDefault();
                                  },
                                  onClick: () => {
                                    I && U(z, `button`);
                                  },
                                  children: V
                                    ? (0, Y.jsx)(at, { className: `size-4` })
                                    : (0, Y.jsx)(lt, { className: `size-4` }),
                                })
                              : null,
                          ],
                        }),
                      L &&
                        !t &&
                        (0, Y.jsx)(`div`, {
                          className: `absolute inset-x-0 bottom-0 flex h-[43px] items-center justify-end gap-3 px-2 py-1.5`,
                          children: (0, Y.jsxs)(`button`, {
                            type: `button`,
                            disabled: !I,
                            className: `inline-flex h-7 shrink-0 items-center gap-2 rounded-md bg-[var(--color-background-success-solid,#008635)] py-[3px] ps-2 pe-1.5 text-[13px] font-medium text-[color:var(--color-text-success-solid,white)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40`,
                            onClick: () => {
                              U(`direct`, `button`);
                            },
                            children: [
                              `Send`,
                              (0, Y.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: `text-white/75 [@container_(max-width:319px)]:hidden`,
                                children: `⏎`,
                              }),
                            ],
                          }),
                        }),
                      c,
                    ],
                  }),
                }),
              }),
            });
          },
          W = m,
          Ce =
            W == null
              ? xe(null)
              : (0, Y.jsx)(W, {
                  value: i,
                  onChange: a,
                  onBusyChange: x,
                  onSubmit: (e) => {
                    U(M ? `saved` : P ? `direct` : f, `dictation`, e);
                  },
                  tooltipPortalContainer: r,
                  children: xe,
                });
        return r ? (0, ar.createPortal)(Ce, r) : Ce;
      })));
  }))();
}
function Rr(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function zr(e) {
  let t = Math.min(Wr, Math.max(1, e.boundary.width - 16)),
    n = Math.min(e.previewWidth && e.previewWidth > 0 ? e.previewWidth : t, t),
    r = e.boundary.left + Gr,
    i = e.boundary.top + Gr,
    a = e.boundary.top + e.boundary.height - Gr,
    o = Rr(e.markerPoint.left - n / 2, r, Math.max(r, e.boundary.left + e.boundary.width - n - Gr)),
    s = e.markerPoint.top - 25 - Ur;
  if (s >= i && s + Ur <= a) return { left: o, top: s, maxWidth: t };
  let c = e.markerPoint.top + 25;
  return c >= i && c + Ur <= a
    ? { left: o, top: c, maxWidth: t }
    : { left: o, top: Rr(s, i, Math.max(i, a - Ur)), maxWidth: t };
}
function Br({
  body: e,
  markerPosition: t,
  containerElement: n,
  collisionBoundaryElement: r = null,
  testId: i = `popcorn-annotation-preview`,
}) {
  let a = (0, Vr.useRef)(null),
    [o, s] = (0, Vr.useState)(null),
    [c, l] = (0, Vr.useState)(null);
  if (
    ((0, Vr.useLayoutEffect)(() => {
      let e = a.current;
      if (!e || !n || !r) return;
      let t = () => {
          let e = r.getBoundingClientRect(),
            t = mt(n, e.left, e.top),
            i = mt(n, e.right, e.bottom),
            a = { left: t.x, top: t.y, width: i.x - t.x, height: i.y - t.y };
          l((e) =>
            e?.left === a.left && e.top === a.top && e.width === a.width && e.height === a.height ? e : a,
          );
        },
        i = be(n, e, t),
        o = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
      return (
        o?.observe(r),
        () => {
          (i(), o?.disconnect());
        }
      );
    }, [n, r]),
    (0, Vr.useLayoutEffect)(() => {
      let e = a.current;
      if (!e) return;
      let t = Math.ceil(e.getBoundingClientRect().width);
      s((e) => (e === t ? e : t));
    }, [e, t.left, t.top, c?.width]),
    !n)
  )
    return null;
  let u = zr({
    markerPoint: t,
    boundary: r != null && c != null ? c : { left: 0, top: 0, width: n.clientWidth, height: n.clientHeight },
    previewWidth: o ?? void 0,
  });
  return (0, Hr.jsx)(`div`, {
    ref: a,
    "data-testid": i,
    className: `pointer-events-none absolute z-40 flex select-none items-center overflow-hidden rounded-lg border px-2 py-1 text-sm shadow-lg`,
    style: {
      ...u,
      backgroundColor: Kr,
      borderColor: Jr,
      color: qr,
      height: Ur,
      width: `fit-content`,
      backdropFilter: `blur(8px)`,
      WebkitBackdropFilter: `blur(8px)`,
    },
    children: (0, Hr.jsx)(`div`, {
      className: `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-inherit`,
      children: e.replace(/\s+/g, ` `).trim(),
    }),
  });
}
var Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr;
function Yr() {
  return (Yr = e(() => {
    (we(),
      (Vr = G()),
      (Hr = W()),
      (Ur = 32),
      (Wr = 294),
      (Gr = 8),
      (Kr = `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`),
      (qr = `var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))`),
      (Jr = `var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))`));
  }))();
}
function Xr(e, t) {
  return t != null && e.artifactKind !== t
    ? !1
    : e.artifactKind === `workbook`
      ? e.target.type === `workbook-range` || e.target.type === `workbook-floating-element`
      : e.target.type === `presentation-element-selection` || e.target.type === `presentation-region`;
}
function Zr(e, t) {
  let n = [];
  for (let r of e ?? [])
    Xr(r, t) &&
      n.push({
        annotationId: r.annotationId,
        artifactKind: r.artifactKind,
        body: r.body,
        label: r.label,
        target: r.target,
      });
  return n;
}
function Qr(e, t) {
  let n = t?.artifactKey,
    r = t?.artifactKind,
    i = t?.initialAnnotations,
    a = (0, $r.useRef)(t?.canReplaceSource);
  a.current = t?.canReplaceSource;
  let o = t?.onFocusAnnotation,
    s = t?.onDismissAnnotation,
    c = t?.onDismissAllAnnotations,
    [l, u] = (0, $r.useState)(n),
    [d, f] = (0, $r.useState)(() => Zr(i, r)),
    p = (0, $r.useRef)(null);
  l !== n && ((p.current = null), u(n), f(Zr(i, r)));
  let m = (0, $r.useRef)(d);
  m.current = d;
  let h = (0, $r.useCallback)(
      (e, t = !1) => {
        let n = m.current.find((t) => t.annotationId === e);
        return n == null || o == null || !o(n, t, m.current) ? !1 : ((p.current = e), !0);
      },
      [o],
    ),
    g = (0, $r.useCallback)(
      (e, t) => {
        let n = bt(t, p.current, e);
        return n != null && h(n, !0);
      },
      [h],
    ),
    _ = (0, $r.useCallback)(
      (e) => {
        (p.current === e && (p.current = null), f((t) => t.filter((t) => t.annotationId !== e)), s?.(e));
      },
      [s],
    ),
    v = (0, $r.useCallback)(() => {
      ((p.current = null), f([]), c?.());
    }, [c]),
    y = (0, $r.useCallback)((e) => {
      f((t) => [...t, e]);
    }, []),
    b = (0, $r.useCallback)((e, t) => {
      f((n) => n.map((n) => (n.annotationId === e ? { ...n, ...t } : n)));
    }, []);
  return (
    (0, $r.useEffect)(() => {
      if (!e) return;
      let t = {
        canReplaceSource: () => a.current?.() ?? !1,
        focusAnnotation: h,
        navigateAnnotation: g,
        dismissAnnotation: _,
        dismissAllAnnotations: v,
      };
      return (
        (e.current = t),
        () => {
          e.current === t && (e.current = null);
        }
      );
    }, [v, _, h, g, e]),
    {
      annotations: d,
      addPendingAnnotation: y,
      updatePendingAnnotation: b,
      focusAnnotation: h,
      dismissAnnotation: _,
      dismissAllAnnotations: v,
    }
  );
}
var $r;
function ei() {
  return (ei = e(() => {
    $r = G();
  }))();
}
function ti(e) {
  let [t, n] = (0, ni.useState)([]),
    r = (0, ni.useCallback)((e) => {
      n((t) => t.filter((t) => t.drawingId !== e));
    }, []),
    i = (0, ni.useCallback)(() => {
      n([]);
    }, []),
    a = (0, ni.useCallback)((e) => {
      n((t) => [
        ...t,
        {
          drawingId: e.drawingId,
          artifactKind: e.artifactKind,
          label: e.label,
          target: e.target,
          strokes: e.strokes,
        },
      ]);
    }, []);
  return (
    (0, ni.useEffect)(() => {
      if (!e) return;
      let t = { dismissDrawing: r, dismissAllDrawings: i };
      return (
        (e.current = t),
        () => {
          e.current === t && (e.current = null);
        }
      );
    }, [i, r, e]),
    { drawings: t, addPendingDrawing: a, dismissDrawing: r, dismissAllDrawings: i }
  );
}
var ni;
function ri() {
  return (ri = e(() => {
    ni = G();
  }))();
}
function ii({ target: e, enabled: t, threads: n, onOpen: r, onSelect: i }) {
  let a = (0, ai.useRef)(null),
    o = (0, ai.useRef)(null);
  (0, ai.useEffect)(() => {
    t &&
      e != null &&
      (a.current !== e.requestId && ((a.current = e.requestId), r()),
      o.current !== e.requestId &&
        n?.some((t) => t.threadId === e.threadId) &&
        ((o.current = e.requestId), i(e.threadId)));
  }, [t, r, i, e, n]);
}
var ai;
function oi() {
  return (oi = e(() => {
    ai = G();
  }))();
}
function si(e, t, n) {
  let r = e.slice();
  return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r);
}
function ci(e, t) {
  return e.reduce((e, n, r) => {
    let i = t.get(n);
    return (i && (e[r] = i), e);
  }, Array(e.length));
}
function li(e) {
  return e !== null && e >= 0;
}
function ui(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function di(e) {
  return typeof e == `boolean` ? { draggable: e, droppable: e } : e;
}
function fi(e, t, n) {
  let r = e[t],
    i = e[t - 1],
    a = e[t + 1];
  return !r || (!i && !a)
    ? 0
    : n < t
      ? i
        ? r.left - (i.left + i.width)
        : a.left - (r.left + r.width)
      : a
        ? a.left - (r.left + r.width)
        : r.left - (i.left + i.width);
}
function pi(e) {
  let { children: t, id: n, items: r, strategy: i = yi, disabled: a = !1 } = e,
    { active: o, dragOverlay: s, droppableRects: c, over: l, measureDroppableContainers: u } = Ue(),
    d = je(bi, n),
    f = s.rect !== null,
    p = (0, X.useMemo)(() => r.map((e) => (typeof e == `object` && `id` in e ? e.id : e)), [r]),
    m = o != null,
    h = o ? p.indexOf(o.id) : -1,
    g = l ? p.indexOf(l.id) : -1,
    _ = (0, X.useRef)(p),
    v = !ui(p, _.current),
    y = (g !== -1 && h === -1) || v,
    b = di(a);
  (Ke(() => {
    v && m && u(p);
  }, [v, p, m, u]),
    (0, X.useEffect)(() => {
      _.current = p;
    }, [p]));
  let x = (0, X.useMemo)(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: b,
      disableTransforms: y,
      items: p,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: ci(p, c),
      strategy: i,
    }),
    [h, d, b.draggable, b.droppable, y, p, g, c, f, i],
  );
  return X.createElement(xi.Provider, { value: x }, t);
}
function mi(e) {
  let { disabled: t, index: n, node: r, rect: i } = e,
    [a, o] = (0, X.useState)(null),
    s = (0, X.useRef)(n);
  return (
    Ke(() => {
      if (!t && n !== s.current && r.current) {
        let e = i.current;
        if (e) {
          let t = He(r.current, { ignoreTransform: !0 }),
            n = {
              x: e.left - t.left,
              y: e.top - t.top,
              scaleX: e.width / t.width,
              scaleY: e.height / t.height,
            };
          (n.x || n.y) && o(n);
        }
      }
      n !== s.current && (s.current = n);
    }, [t, n, r, i]),
    (0, X.useEffect)(() => {
      a && o(null);
    }, [a]),
    a
  );
}
function hi(e) {
  let {
      animateLayoutChanges: t = Ci,
      attributes: n,
      disabled: r,
      data: i,
      getNewIndex: a = Si,
      id: o,
      strategy: s,
      resizeObserverConfig: c,
      transition: l = wi,
    } = e,
    {
      items: u,
      containerId: d,
      activeIndex: f,
      disabled: p,
      disableTransforms: m,
      sortedRects: h,
      overIndex: g,
      useDragOverlay: _,
      strategy: v,
    } = (0, X.useContext)(xi),
    y = gi(r, p),
    b = u.indexOf(o),
    x = (0, X.useMemo)(() => ({ sortable: { containerId: d, index: b, items: u }, ...i }), [d, i, b, u]),
    S = (0, X.useMemo)(() => u.slice(u.indexOf(o)), [u, o]),
    {
      rect: C,
      node: w,
      isOver: T,
      setNodeRef: E,
    } = Fe({
      id: o,
      data: x,
      disabled: y.droppable,
      resizeObserverConfig: { updateMeasurementsFor: S, ...c },
    }),
    {
      active: D,
      activatorEvent: O,
      activeNodeRect: k,
      attributes: A,
      setNodeRef: j,
      listeners: M,
      isDragging: N,
      over: P,
      setActivatorNodeRef: F,
      transform: ee,
    } = Pe({ id: o, data: x, attributes: { ...Di, ...n }, disabled: y.draggable }),
    I = We(E, j),
    L = !!D,
    R = L && !m && li(f) && li(g),
    te = !_ && N,
    ne = R
      ? ((te && R ? ee : null) ??
        (s ?? v)({ rects: h, activeNodeRect: k, activeIndex: f, overIndex: g, index: b }))
      : null,
    z = li(f) && li(g) ? a({ id: o, items: u, activeIndex: f, overIndex: g }) : b,
    B = D?.id,
    V = (0, X.useRef)({ activeId: B, items: u, newIndex: z, containerId: d }),
    re = u !== V.current.items,
    ie = t({
      active: D,
      containerId: d,
      isDragging: N,
      isSorting: L,
      id: o,
      index: b,
      items: u,
      newIndex: V.current.newIndex,
      previousItems: V.current.items,
      previousContainerId: V.current.containerId,
      transition: l,
      wasDragging: V.current.activeId != null,
    }),
    ae = mi({ disabled: !ie, index: b, node: w, rect: C });
  return (
    (0, X.useEffect)(() => {
      (L && V.current.newIndex !== z && (V.current.newIndex = z),
        d !== V.current.containerId && (V.current.containerId = d),
        u !== V.current.items && (V.current.items = u));
    }, [L, z, d, u]),
    (0, X.useEffect)(() => {
      if (B === V.current.activeId) return;
      if (B != null && V.current.activeId == null) {
        V.current.activeId = B;
        return;
      }
      let e = setTimeout(() => {
        V.current.activeId = B;
      }, 50);
      return () => clearTimeout(e);
    }, [B]),
    {
      active: D,
      activeIndex: f,
      attributes: A,
      data: x,
      rect: C,
      index: b,
      newIndex: z,
      items: u,
      isOver: T,
      isSorting: L,
      isDragging: N,
      listeners: M,
      node: w,
      overIndex: g,
      over: P,
      setNodeRef: I,
      setActivatorNodeRef: F,
      setDroppableNodeRef: E,
      setDraggableNodeRef: j,
      transform: ae ?? ne,
      transition: H(),
    }
  );
  function H() {
    if (ae || (re && V.current.newIndex === b)) return Ei;
    if (!((te && !Ae(O)) || !l) && (L || ie)) return Le.Transition.toString({ ...l, property: Ti });
  }
}
function gi(e, t) {
  return typeof e == `boolean`
    ? { draggable: e, droppable: !1 }
    : { draggable: e?.draggable ?? t.draggable, droppable: e?.droppable ?? t.droppable };
}
var X, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di;
function Oi() {
  return (Oi = e(() => {
    ((X = t(G())),
      Me(),
      Ie(),
      (_i = { scaleX: 1, scaleY: 1 }),
      (vi = (e) => {
        let { rects: t, activeNodeRect: n, activeIndex: r, overIndex: i, index: a } = e,
          o = t[r] ?? n;
        if (!o) return null;
        let s = fi(t, a, r);
        if (a === r) {
          let e = t[i];
          return e
            ? { x: r < i ? e.left + e.width - (o.left + o.width) : e.left - o.left, y: 0, ..._i }
            : null;
        }
        return a > r && a <= i
          ? { x: -o.width - s, y: 0, ..._i }
          : a < r && a >= i
            ? { x: o.width + s, y: 0, ..._i }
            : { x: 0, y: 0, ..._i };
      }),
      (yi = (e) => {
        let { rects: t, activeIndex: n, overIndex: r, index: i } = e,
          a = si(t, r, n),
          o = t[i],
          s = a[i];
        return !s || !o
          ? null
          : { x: s.left - o.left, y: s.top - o.top, scaleX: s.width / o.width, scaleY: s.height / o.height };
      }),
      (bi = `Sortable`),
      (xi = X.createContext({
        activeIndex: -1,
        containerId: bi,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: yi,
        disabled: { draggable: !1, droppable: !1 },
      })),
      (Si = (e) => {
        let { id: t, items: n, activeIndex: r, overIndex: i } = e;
        return si(n, r, i).indexOf(t);
      }),
      (Ci = (e) => {
        let {
          containerId: t,
          isSorting: n,
          wasDragging: r,
          index: i,
          items: a,
          newIndex: o,
          previousItems: s,
          previousContainerId: c,
          transition: l,
        } = e;
        return !l || !r || (s !== a && i === o) ? !1 : n ? !0 : o !== i && t === c;
      }),
      (wi = { duration: 200, easing: `ease` }),
      (Ti = `transform`),
      (Ei = Le.Transition.toString({ property: Ti, duration: 0, easing: `linear` })),
      (Di = { roleDescription: `sortable` }),
      Ve.Down,
      Ve.Right,
      Ve.Up,
      Ve.Left);
  }))();
}
function ki({ kind: e, children: t, className: n }) {
  return (0, Ai.jsx)(`div`, {
    className: H(`inline-flex items-center justify-center rounded-md p-1`, ji[e], n),
    style:
      e === `whiteboard`
        ? {
            backgroundColor: `color-mix(in srgb, var(--color-token-charts-blue, #339cff) 12%, transparent)`,
            color: `var(--color-token-text-link-foreground, #339cff)`,
          }
        : void 0,
    children: t,
  });
}
var Ai, ji;
function Mi() {
  return (Mi = e(() => {
    (z(),
      (Ai = W()),
      (ji = {
        workbook: `bg-[#04b84c] text-white`,
        presentation: `bg-orange-300 text-white`,
        document: `bg-token-bg-elevated-secondary border-token-border-light border text-token-text-primary`,
        whiteboard: `border-token-border-light border`,
      }));
  }))();
}
function Ni({ trigger: e, actions: t, onCloseAutoFocus: n }) {
  return (0, Pi.jsxs)(me, {
    children: [
      (0, Pi.jsx)(oe, { asChild: !0, children: e }),
      (0, Pi.jsx)(ae, {
        children: (0, Pi.jsx)(ge, {
          className: `border-token-border-light bg-token-bg-primary z-50 min-w-[160px] rounded-xl border p-1 shadow-lg`,
          onCloseAutoFocus: n,
          children: t.map((e) => {
            if (e.kind === `separator`)
              return (0, Pi.jsx)(fe, { className: `bg-token-border-light my-1 h-px` }, e.id);
            let t = e.icon;
            return (0, Pi.jsxs)(
              ie,
              {
                disabled: e.disabled,
                "data-testid": e.testId,
                onSelect: () => {
                  e.disabled || e.onSelect();
                },
                className: H(
                  `text-token-text-primary flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-token-bg-secondary`,
                  e.color === `danger` ? `text-red-600` : null,
                ),
                children: [
                  (0, Pi.jsx)(t, { className: `size-4` }),
                  (0, Pi.jsx)(`span`, { children: e.label }),
                ],
              },
              e.id,
            );
          }),
        }),
      }),
    ],
  });
}
var Pi;
function Fi() {
  return (Fi = e(() => {
    (U(), z(), (Pi = W()));
  }))();
}
function Ii(e, t) {
  let [n, r] = (0, Li.useState)(() => Object.fromEntries(e.map((e) => [e.id, e.defaultOpen ?? !1])));
  return (
    (0, Li.useEffect)(() => {
      r((t) => {
        let n = Object.fromEntries(e.map((e) => [e.id, t[e.id] ?? e.defaultOpen ?? !1]));
        return Object.keys(t).length === e.length && e.every((e) => t[e.id] === n[e.id]) ? t : n;
      });
    }, [e]),
    (0, Li.useMemo)(() => {
      let i = (t) => {
          let r = e.find((e) => e.id === t);
          return r?.open ?? n[t] ?? r?.defaultOpen ?? !1;
        },
        a = (n, i) => {
          let a = e.find((e) => e.id === n);
          (i && t?.(n), a?.open ?? r((e) => ({ ...e, [n]: i })), a?.onOpenChange?.(i));
        };
      return {
        isPanelAvailable: (t) => e.some((e) => e.id === t),
        isPanelOpen: i,
        openPanel: (e) => a(e, !0),
        closePanel: (e) => a(e, !1),
        togglePanel: (e) => a(e, !i(e)),
      };
    }, [t, n, e])
  );
}
var Li;
function Ri() {
  return (Ri = e(() => {
    Li = G();
  }))();
}
function zi(e, t) {
  return new Promise((n, r) => {
    let i = () => {
      (t.removeEventListener(`abort`, i), r(t.reason));
    };
    (t.addEventListener(`abort`, i, { once: !0 }),
      t.aborted && i(),
      e.then(
        (e) => {
          (t.removeEventListener(`abort`, i), n(e));
        },
        (e) => {
          (t.removeEventListener(`abort`, i), r(e));
        },
      ));
  });
}
function Bi() {
  return (Bi = e(() => {}))();
}
var Vi;
function Hi() {
  return (Hi = e(() => {
    Vi = class {
      #e = new Set();
      #t = !1;
      subscribe(e) {
        if (this.#t) throw Error(`Cannot subscribe to a disposed event bus.`);
        return (this.#e.add(e), () => this.#e.delete(e));
      }
      emit(e) {
        if (!this.#t)
          for (let t of [...this.#e])
            try {
              t(e);
            } catch (e) {
              console.error(`Popcorn event subscriber failed`, e);
            }
      }
      dispose() {
        ((this.#t = !0), this.#e.clear());
      }
    };
  }))();
}
function Ui(e) {
  let { controller: t, commentAuthor: n } = e,
    r = Vt();
  return (0, Gi.jsx)(Ft, {
    ref: e.ref,
    target: e.commentTarget,
    threads: e.threads,
    selectedThreadId: e.selectedThreadId,
    embedded: e.embedded,
    renderHeader: e.renderHeader,
    emptyAction: e.emptyAction,
    testId: `${e.testIdPrefix}-comments-sidebar`,
    labels: {
      sidebar: e.sidebarLabel,
      heading: `Comments`,
      close: `Close comments`,
      filter: `Filter comments`,
      open: `Open`,
      empty: `No comments yet`,
      emptyDescription: e.emptyDescription,
      openEmpty: (e) =>
        (0, Gi.jsxs)(Gi.Fragment, { children: [`No open comment threads. `, e(`Show resolved threads`)] }),
      filteredEmpty: `Adjust filters to see comments`,
      showOpen: `Show all open threads`,
      resolved: `Resolved`,
      resolvedCount: ({ count: e, label: t }) =>
        (0, Gi.jsxs)(Gi.Fragment, { children: [t(`Resolved`), ` · `, e] }),
      deleteAll: `Delete all`,
    },
    onClose: e.onClose,
    onDeselectThread: () => {
      (e.onHoverThread?.(null), e.onSelectThread(null));
    },
    onDeleteAll:
      n == null || e.canDeleteOthersComments === !1
        ? void 0
        : (e) => {
            for (let n of e) t.deleteCommentThread(n.threadId);
          },
    renderThread: (t) => (0, Gi.jsx)(Wi, { thread: t, sidebar: e, timestampNow: r }),
  });
}
function Wi({ thread: e, sidebar: t, timestampNow: n }) {
  let { controller: r, commentAuthor: i, selectedThreadId: a, onSelectThread: o, onHoverThread: s } = t,
    c = e.threadId === a;
  return (0, Gi.jsx)(`div`, {
    "data-selected": c ? `true` : void 0,
    "data-testid": `${t.testIdPrefix}-comment-sidebar-thread-${e.threadId}`,
    children: (0, Gi.jsx)(Rt, {
      ...t.comments,
      expandRepliesRequestId:
        c && t.commentTarget?.threadId === e.threadId ? t.commentTarget.requestId : void 0,
      renderReplyInput: t.renderCommentInput,
      thread: e,
      icons: { assistant: t.assistantIcon },
      isSelected: c,
      expandRepliesOnSelect: !0,
      isPending: e.status !== `resolved` && t.pendingCommentThreadIds?.has(e.threadId) === !0,
      sourceLabel: t.getThreadSourceLabel(e),
      selectLabel: `Select comment thread for ${e.label}`,
      selectRepliesLabel: `Select replies for ${e.label}`,
      onSelect: o,
      onHover: s,
      timestampNow: n,
      viewerAuthor: i,
      canAssignToChatGpt: t.canAssignToChatGpt,
      canDeleteOthersComments: t.canDeleteOthersComments,
      onReply:
        i == null
          ? void 0
          : (n) => {
              let a = r.replyToCommentThread(e.threadId, n, i);
              return (a && t.onReplySubmitted?.(e, n), a);
            },
      onResolve: i == null ? void 0 : () => r.resolveCommentThread(e.threadId, i),
      onReopen: i == null ? void 0 : () => r.reopenCommentThread(e.threadId),
      onDelete: i == null ? void 0 : () => r.deleteCommentThread(e.threadId),
      onDeleteComment: i == null ? void 0 : (t) => r.deleteThreadComment(e.threadId, t),
      onToggleReaction: i == null ? void 0 : (t, n) => r.toggleCommentReaction(e.threadId, t, n, i),
    }),
  });
}
var Gi;
function Ki() {
  return (Ki = e(() => {
    (Bt(), zt(), Pt(), (Gi = W()));
  }))();
}
function qi({
  thread: e,
  label: t,
  sourceLabel: n,
  viewerAuthor: r,
  canAssignToChatGpt: i,
  canDeleteOthersComments: a,
  isEditing: o,
  comments: s,
  renderCommentInput: c,
  canComment: l = o,
  assistantIcon: u,
  pendingCommentThreadIds: d,
  onReply: f,
  onResolve: p,
  onReopen: m,
  onDeleteThread: h,
  onToggleReaction: g,
  onDeleteComment: _,
  ...v
}) {
  let y = l && (r != null || e.viewerAuthorId != null),
    b = e.comments.findLast((e) => !e.isDeleted)?.author;
  return (0, Ji.jsx)(Jt, {
    ...v,
    threadId: e.threadId,
    author: b,
    markerContent: v.markerContent ?? (b != null && Gt(b) ? u : void 0),
    markerLabel: `Open comment thread for ${t}`,
    renderThread: ({ expanded: o }) =>
      (0, Ji.jsx)(Rt, {
        ...s,
        renderReplyInput: c,
        thread: e,
        icons: { assistant: u },
        borderless: !0,
        preview: !o,
        expandRepliesOnSelect: !0,
        isSelected: o,
        isPending: e.status !== `resolved` && d?.has(e.threadId) === !0,
        viewerAuthor: r,
        canAssignToChatGpt: i,
        canDeleteOthersComments: a,
        viewerAuthorId: e.viewerAuthorId ?? r?.id,
        sourceLabel: n,
        selectLabel: `Select comment thread for ${t}`,
        selectRepliesLabel: `Select replies for ${t}`,
        onSelect: v.onSelect,
        onReply: y && f ? (t) => f(e.threadId, t) : void 0,
        onResolve: y && p ? () => p(e.threadId) : void 0,
        onReopen: y && m ? () => m(e.threadId) : void 0,
        onDelete: y && h ? () => h(e.threadId) : void 0,
        onToggleReaction: y && g ? (t, n) => g(e.threadId, t, n) : void 0,
        onDeleteComment: y && _ ? (t) => _(e.threadId, t) : void 0,
      }),
  });
}
var Ji;
function Yi() {
  return (Yi = e(() => {
    (Yt(), Pt(), (Ji = W()));
  }))();
}
function Xi({
  editingDisabledRef: e,
  editorSessionRef: t,
  lightDismissArmedRef: n,
  editorRef: r,
  pendingAnnotations: i,
  blockWhileDictationBusy: a,
  closeEditor: o,
}) {
  return (0, Zi.useCallback)(
    (s) => {
      if (e.current || a()) return !1;
      let c = t.current,
        l = !1;
      if (c?.mode === `create`) l = c.body.trim().length > 0;
      else if (c?.mode === `edit`) {
        let e = i.find((e) => e.annotationId === c.annotationId);
        l = c.body !== e?.body;
      }
      return l && !s?.discardChanges && !n.current ? ((n.current = !0), rr(r.current), !1) : (o(), !0);
    },
    [e, t, n, r, i, a, o],
  );
}
var Zi;
function Qi() {
  return (Qi = e(() => {
    ((Zi = G()), Lr());
  }))();
}
function $i(e, t, n) {
  return (0, ea.useCallback)(
    (r) => {
      let i = e.current;
      (i == null ||
        i === r ||
        (r === void 0 &&
          i.mode === `edit` &&
          n.some((e) => e.annotationId === i.annotationId && e.body === i.body))) &&
        t?.(!1);
    },
    [e, t, n],
  );
}
var ea;
function ta() {
  return (ta = e(() => {
    ea = G();
  }))();
}
function na(e) {
  if ((!e.metaKey && !e.ctrlKey) || e.altKey) return !1;
  let t = e.key.toLowerCase();
  return t === `c` || (t === `x` && !e.shiftKey) || t === `v`;
}
function ra(e, { includeSearch: t = !0, includeViewportActions: n = !1 } = {}) {
  if (!dt(e, { allowShift: !0, requirePrimaryModifier: !0 })) return null;
  let r = e.key.toLowerCase();
  if (n) {
    if ((r === `=` && !e.shiftKey) || r === `+`) return `zoom-in`;
    if (r === `-` && !e.shiftKey) return `zoom-out`;
    if (r === `0` && !e.shiftKey) return `fit-to-viewport`;
  }
  if (e.shiftKey) return r === `v` ? `paste-without-formatting` : r === `z` ? `redo` : null;
  switch (r) {
    case `a`:
      return `select-all`;
    case `c`:
      return `copy`;
    case `f`:
      return t ? `search` : null;
    case `s`:
      return `save`;
    case `v`:
      return `paste`;
    case `x`:
      return `cut`;
    case `y`:
      return `redo`;
    case `z`:
      return `undo`;
    default:
      return null;
  }
}
function ia(e) {
  return e === `copy` || e === `cut` || e === `paste` || e === `paste-without-formatting`;
}
function aa(e) {
  let t = (0, oa.useRef)(null),
    n = (0, oa.useCallback)(
      (n, r) => {
        let i = ra(n, r);
        return i == null ? null : (ia(i) && (t.current = i), e?.(i), i);
      },
      [e],
    ),
    r = (0, oa.useCallback)(
      (n) => {
        let r = t.current,
          i = r === n || (n === `paste` && r === `paste-without-formatting`);
        ((t.current = null), i || e?.(n));
      },
      [e],
    );
  return (
    (0, oa.useEffect)(() => {
      let e = () => {
        t.current = null;
      };
      return (
        window.addEventListener(`keyup`, e, !0),
        window.addEventListener(`blur`, e),
        () => {
          (window.removeEventListener(`keyup`, e, !0), window.removeEventListener(`blur`, e));
        }
      );
    }, []),
    { reportClipboardInteraction: r, reportKeyboardShortcut: n }
  );
}
var oa;
function sa() {
  return (sa = e(() => {
    ((oa = G()), ht());
  }))();
}
var ca, la;
function ua() {
  return (ua = e(() => {
    ((ca = G()), (la = (0, ca.createContext)(void 0)));
  }))();
}
function da(e, t, n) {
  let { hitRadius: r } = At(n),
    i = Math.hypot(t.x - e.from.x, t.y - e.from.y),
    a = Math.hypot(t.x - e.to.x, t.y - e.to.y);
  return Math.min(i, a) > r ? null : i <= a ? `from` : `to`;
}
function fa(e, t, n) {
  let r = n.x - t.x,
    i = n.y - t.y,
    a = e.x - t.x,
    o = e.y - t.y,
    s = r * r + i * i;
  if (s <= 0) return Math.hypot(a, o);
  let c = Math.max(0, Math.min(1, (a * r + o * i) / s)),
    l = t.x + c * r,
    u = t.y + c * i;
  return Math.hypot(e.x - l, e.y - u);
}
function pa() {
  return (pa = e(() => {
    kt();
  }))();
}
function ma({
  viewportRect: e,
  testId: t,
  kind: n = `text`,
  clickTextSize: r = { width: 1, height: 1 },
  onCommit: i,
  onCancel: a,
}) {
  let o = (0, ha.useRef)(null),
    s = (0, ha.useRef)(null),
    c = (0, ha.useRef)(null),
    l = (0, ha.useId)(),
    u = (0, ha.useRef)(null),
    d = (0, ha.useRef)(a);
  ((d.current = a),
    (0, ha.useEffect)(() => {
      o.current?.focus({ preventScroll: !0 });
      let e = (e) => {
          e.key === `Escape` &&
            (e.preventDefault(),
            e.stopPropagation(),
            (u.current = null),
            s.current && (s.current.style.display = `none`),
            c.current && (c.current.style.display = `none`),
            d.current());
        },
        t = () => {
          ((u.current = null),
            s.current && (s.current.style.display = `none`),
            c.current && (c.current.style.display = `none`),
            d.current());
        };
      return (
        document.addEventListener(`keydown`, e, !0),
        window.addEventListener(`blur`, t),
        () => {
          (document.removeEventListener(`keydown`, e, !0), window.removeEventListener(`blur`, t));
        }
      );
    }, []));
  let f = (e) => mt(e.currentTarget, e.clientX, e.clientY),
    p = () => {
      ((u.current = null),
        c.current && (c.current.style.display = `none`),
        s.current && (s.current.style.display = `none`));
    },
    m = (e) => {
      let t = c.current;
      if (!t || u.current || e.pointerType === `touch`) return;
      let n = e.currentTarget.getBoundingClientRect(),
        r = f(e);
      t.style.display = `block`;
      let i = Math.max(8, Math.min(r.x + 16, (e.currentTarget.clientWidth || n.width) - t.offsetWidth - 8)),
        a = Math.max(
          8,
          r.y + 16 + t.offsetHeight > (e.currentTarget.clientHeight || n.height) - 8
            ? r.y - t.offsetHeight - 16
            : r.y + 16,
        );
      Object.assign(t.style, { left: `${i}px`, top: `${a}px` });
    };
  return (0, ga.jsxs)(`div`, {
    ref: o,
    "data-testid": t,
    "aria-label":
      n === `image`
        ? `Click or drag to place an image. Escape cancels.`
        : `Click or drag to place text. Escape cancels.`,
    "aria-describedby": l,
    tabIndex: -1,
    className: `absolute inset-0 z-20 touch-none outline-none`,
    style: { cursor: `crosshair` },
    onPointerEnter: m,
    onPointerLeave: () => {
      c.current && (c.current.style.display = `none`);
    },
    onPointerDown: (e) => {
      e.button === 0 &&
        e.isPrimary &&
        (e.preventDefault(),
        e.stopPropagation(),
        c.current && (c.current.style.display = `none`),
        (u.current = {
          pointerId: e.pointerId,
          start: f(e),
          hasDragged: !1,
          clientStart: { x: e.clientX, y: e.clientY },
        }),
        e.currentTarget.setPointerCapture(e.pointerId));
    },
    onPointerMove: (e) => {
      let t = u.current,
        n = s.current;
      if (!t) {
        m(e);
        return;
      }
      if (t.pointerId !== e.pointerId || !n) return;
      let r = f(e);
      ((t.hasDragged ||= Math.hypot(e.clientX - t.clientStart.x, e.clientY - t.clientStart.y) >= _a),
        t.hasDragged &&
          Object.assign(n.style, {
            display: `block`,
            left: `${Math.min(t.start.x, r.x)}px`,
            top: `${Math.min(t.start.y, r.y)}px`,
            width: `${Math.abs(t.start.x - r.x)}px`,
            height: `${Math.abs(t.start.y - r.y)}px`,
          }));
    },
    onPointerUp: (t) => {
      let a = u.current;
      if (!a || a.pointerId !== t.pointerId) return;
      (t.preventDefault(), t.stopPropagation());
      let o = f(t),
        s = !a.hasDragged && Math.hypot(t.clientX - a.clientStart.x, t.clientY - a.clientStart.y) < _a;
      (p(),
        t.currentTarget.hasPointerCapture(t.pointerId) && t.currentTarget.releasePointerCapture(t.pointerId),
        i(
          {
            left: ((s ? a.start.x : Math.min(a.start.x, o.x)) - e.left) / e.scale,
            top: ((s ? a.start.y : Math.min(a.start.y, o.y)) - e.top) / e.scale,
            width: s ? (n === `image` ? 400 : r.width) : Math.max(24, Math.abs(o.x - a.start.x) / e.scale),
            height: s ? (n === `image` ? 300 : r.height) : Math.max(32, Math.abs(o.y - a.start.y) / e.scale),
          },
          s,
        ));
    },
    onPointerCancel: () => {
      (p(), a());
    },
    onLostPointerCapture: () => {
      u.current && (p(), a());
    },
    children: [
      (0, ga.jsx)(`div`, {
        ref: c,
        id: l,
        role: `tooltip`,
        className: `pointer-events-none absolute rounded-md bg-black px-2 py-1 text-sm leading-5 whitespace-nowrap text-white shadow-sm`,
        style: { display: `none` },
        children: n === `image` ? `Click or drag to place an image` : `Click or drag to place text`,
      }),
      (0, ga.jsx)(`div`, {
        ref: s,
        "data-testid": `${t}-preview`,
        className: `pointer-events-none absolute border`,
        style: {
          display: `none`,
          borderColor: `var(--color-text-info, #3b82f6)`,
          background:
            n === `image` ? `#f5f5f5` : `color-mix(in srgb, var(--color-text-info, #3b82f6) 5%, transparent)`,
        },
      }),
    ],
  });
}
var ha, ga, _a;
function va() {
  return (va = e(() => {
    ((ha = G()), (ga = W()), (_a = 4));
  }))();
}
var ya;
function ba() {
  return (ba = e(() => {
    ya = {
      Purple: {
        1e3: `#000000`,
        900: `#200D53`,
        800: `#35158E`,
        700: `#4C20CA`,
        600: `#6D3FDC`,
        500: `#875BE1`,
        400: `#A47EE7`,
        300: `#BC9EED`,
        200: `#D3BEF2`,
        100: `#E8DFF6`,
        0: `#FFFFFF`,
      },
      Pink: {
        1e3: `#000000`,
        900: `#310E28`,
        800: `#541945`,
        700: `#782563`,
        600: `#9D3383`,
        500: `#D347B0`,
        400: `#E659C2`,
        300: `#EC8ACF`,
        200: `#F1B4DD`,
        100: `#F5DBEC`,
        0: `#FFFFFF`,
      },
      Red: {
        1e3: `#000000`,
        900: `#360C19`,
        800: `#5B142D`,
        700: `#831D42`,
        600: `#AB2958`,
        500: `#D53670`,
        400: `#EE4D83`,
        300: `#F28BA6`,
        200: `#F5B5C3`,
        100: `#F7DBE1`,
        0: `#FFFFFF`,
      },
      Orange: {
        1e3: `#000000`,
        900: `#29170C`,
        800: `#4D2510`,
        700: `#723414`,
        600: `#96461C`,
        500: `#BB5926`,
        400: `#E36E30`,
        300: `#EF9262`,
        200: `#F3B99C`,
        100: `#F6DDD1`,
        0: `#FFFFFF`,
      },
      Yellow: {
        1e3: `#000000`,
        900: `#231A07`,
        800: `#3F2D07`,
        700: `#5C4107`,
        600: `#7A570C`,
        500: `#996E12`,
        400: `#B98618`,
        300: `#DB9F1E`,
        200: `#F1B023`,
        100: `#FADEB3`,
        0: `#FFFFFF`,
      },
      Olive: {
        1e3: `#000000`,
        900: `#1E1C06`,
        800: `#323204`,
        700: `#494903`,
        600: `#616106`,
        500: `#7A7A0A`,
        400: `#95950E`,
        300: `#B0B013`,
        200: `#CCCC24`,
        100: `#EAE848`,
        0: `#FFFFFF`,
      },
      Green: {
        1e3: `#000000`,
        900: `#0E2008`,
        800: `#0C380D`,
        700: `#135215`,
        600: `#1D6D1E`,
        500: `#268928`,
        400: `#30A633`,
        300: `#3DCB40`,
        200: `#4DE24E`,
        100: `#94F98A`,
        0: `#FFFFFF`,
      },
      Turquoise: {
        1e3: `#000000`,
        900: `#06201A`,
        800: `#08372F`,
        700: `#0A5044`,
        600: `#116B5B`,
        500: `#188673`,
        400: `#20A38C`,
        300: `#27C0A6`,
        200: `#2CD1B4`,
        100: `#67FBDC`,
        0: `#FFFFFF`,
      },
      Cyan: {
        1e3: `#000000`,
        900: `#061F26`,
        800: `#053642`,
        700: `#044E5F`,
        600: `#08687E`,
        500: `#0C839E`,
        400: `#129FBF`,
        300: `#16B7DB`,
        200: `#51D7FC`,
        100: `#BCEBFB`,
        0: `#FFFFFF`,
      },
      Blue: {
        1e3: `#000000`,
        900: `#0D1B37`,
        800: `#15305F`,
        700: `#1E4788`,
        600: `#2A5EB1`,
        500: `#3A7DE8`,
        400: `#6490F0`,
        300: `#91AAF3`,
        200: `#B8C6F6`,
        100: `#DDE2F8`,
        0: `#FFFFFF`,
      },
      DesaturatedCool: {
        1e3: `#000000`,
        900: `#1A1A1A`,
        800: `#262626`,
        700: `#333333`,
        600: `#474747`,
        500: `#595959`,
        400: `#747474`,
        300: `#8C8C8C`,
        200: `#B3B3B3`,
        100: `#D8D8D8`,
        0: `#FFFFFF`,
      },
      DesaturatedWarm: {
        1e3: `#000000`,
        900: `#1E1C1B`,
        800: `#2C2927`,
        700: `#393634`,
        600: `#4E4947`,
        500: `#62605E`,
        400: `#7A7775`,
        300: `#928E8D`,
        200: `#B3ACAB`,
        100: `#D8D1D0`,
        0: `#FFFFFF`,
      },
    };
  }))();
}
function xa(e) {
  let t = Sa.useRef(() => {});
  return (
    Ea(() => {
      t.current = e;
    }),
    Sa.useCallback(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
var Sa, Ca, wa, Ta, Ea;
function Da() {
  return (Da = e(() => {
    ((Sa = t(G(), 1)),
      (Ca = G()),
      (wa = typeof document < `u` ? Ca.useLayoutEffect : function () {}),
      (Ta = { ...Sa }),
      (Ea = Ta.useInsertionEffect || ((e) => e())));
  }))();
}
function Oa() {
  let [e, t] = Z.useState(() => (Ka ? Ja() : void 0));
  return (
    wa(() => {
      e ?? t(Ja());
    }, []),
    Z.useEffect(() => {
      Ka = !0;
    }, []),
    e
  );
}
function ka() {
  let e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((e) => e(n));
    },
    on(t, n) {
      (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    },
  };
}
function Aa(e) {
  e.current !== -1 && (clearTimeout(e.current), (e.current = -1));
}
function ja(e, t) {
  if (!e || !t) return !1;
  let n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && h(n)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Ma(e) {
  return `composedPath` in e ? e.composedPath()[0] : e.target;
}
function Na(e) {
  let { open: t = !1, onOpenChange: n, elements: r } = e,
    i = Ya(),
    a = Z.useRef({}),
    [o] = Z.useState(() => ka()),
    s = Qa() != null,
    [c, l] = Z.useState(r.reference),
    u = xa((e, t, r) => {
      ((a.current.openEvent = e ? t : void 0),
        o.emit(`openchange`, { open: e, event: t, reason: r, nested: s }),
        n?.(e, t, r));
    }),
    d = Z.useMemo(() => ({ setPositionReference: l }), []),
    f = Z.useMemo(
      () => ({
        reference: c || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [c, r.reference, r.floating],
    );
  return Z.useMemo(
    () => ({ dataRef: a, open: t, onOpenChange: u, elements: f, events: o, floatingId: i, refs: d }),
    [t, u, f, o, i, d],
  );
}
function Pa(e) {
  let { elements: t, ...n } = e === void 0 ? {} : e,
    { nodeId: r } = n,
    i = Na({ ...n, elements: { reference: t?.reference ?? null, floating: t?.floating ?? null } }),
    a = n.rootContext || i,
    o = a.elements,
    [s, l] = Z.useState(null),
    [u, d] = Z.useState(null),
    f = o?.domReference || s,
    p = Z.useRef(null),
    m = $a();
  wa(() => {
    f && (p.current = f);
  }, [f]);
  let h = c({ ...n, elements: { ...o, ...(u && { reference: u }) } }),
    g = Z.useCallback(
      (e) => {
        let t = M(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e,
            }
          : e;
        (d(t), h.refs.setReference(t));
      },
      [h.refs],
    ),
    _ = Z.useCallback(
      (e) => {
        ((M(e) || e === null) && ((p.current = e), l(e)),
          (M(h.refs.reference.current) || h.refs.reference.current === null || (e !== null && !M(e))) &&
            h.refs.setReference(e));
      },
      [h.refs],
    ),
    v = Z.useMemo(
      () => ({ ...h.refs, setReference: _, setPositionReference: g, domReference: p }),
      [h.refs, _, g],
    ),
    y = Z.useMemo(() => ({ ...h.elements, domReference: f }), [h.elements, f]),
    b = Z.useMemo(() => ({ ...h, ...a, refs: v, elements: y, nodeId: r }), [h, v, y, r, a]);
  return (
    wa(() => {
      a.dataRef.current.floatingContext = b;
      let e = m?.nodesRef.current.find((e) => e.id === r);
      e && (e.context = b);
    }),
    Z.useMemo(() => ({ ...h, context: b, refs: v, elements: y }), [h, v, y, b])
  );
}
function Fa(e, t, n) {
  return (
    n === void 0 && (n = !0),
    e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Fa(e, t.id, n)])
  );
}
function Ia(e, t) {
  let [n, r] = e,
    i = !1,
    a = t.length;
  for (let e = 0, o = a - 1; e < a; o = e++) {
    let [a, s] = t[e] || [0, 0],
      [c, l] = t[o] || [0, 0];
    s >= r != l >= r && n <= ((c - a) * (r - s)) / (l - s) + a && (i = !i);
  }
  return i;
}
function La(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Ra(e) {
  e === void 0 && (e = {});
  let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
    i = { current: -1 },
    a = !1,
    o = null,
    s = null,
    c = typeof performance < `u` ? performance.now() : 0;
  function l(e, t) {
    let n = performance.now(),
      r = n - c;
    if (o === null || s === null || r === 0) return ((o = e), (s = t), (c = n), null);
    let i = e - o,
      a = t - s,
      l = Math.sqrt(i * i + a * a) / r;
    return ((o = e), (s = t), (c = n), l);
  }
  let u = (e) => {
    let { x: n, y: o, placement: s, elements: c, onClose: u, nodeId: d, tree: f } = e;
    return function (e) {
      function p() {
        (Aa(i), u());
      }
      if ((Aa(i), !c.domReference || !c.floating || s == null || n == null || o == null)) return;
      let { clientX: m, clientY: h } = e,
        g = [m, h],
        _ = Ma(e),
        v = e.type === `mouseleave`,
        y = ja(c.floating, _),
        b = ja(c.domReference, _),
        x = c.domReference.getBoundingClientRect(),
        S = c.floating.getBoundingClientRect(),
        C = s.split(`-`)[0],
        w = n > S.right - S.width / 2,
        T = o > S.bottom - S.height / 2,
        E = La(g, x),
        D = S.width > x.width,
        O = S.height > x.height,
        k = (D ? x : S).left,
        A = (D ? x : S).right,
        j = (O ? x : S).top,
        N = (O ? x : S).bottom;
      if (y && ((a = !0), !v)) return;
      if ((b && (a = !1), b && !v)) {
        a = !0;
        return;
      }
      if (
        (v && M(e.relatedTarget) && ja(c.floating, e.relatedTarget)) ||
        (f && Fa(f.nodesRef.current, d).length)
      )
        return;
      if (
        (C === `top` && o >= x.bottom - 1) ||
        (C === `bottom` && o <= x.top + 1) ||
        (C === `left` && n >= x.right - 1) ||
        (C === `right` && n <= x.left + 1)
      )
        return p();
      let P = [];
      switch (C) {
        case `top`:
          P = [
            [k, x.top + 1],
            [k, S.bottom - 1],
            [A, S.bottom - 1],
            [A, x.top + 1],
          ];
          break;
        case `bottom`:
          P = [
            [k, S.top + 1],
            [k, x.bottom - 1],
            [A, x.bottom - 1],
            [A, S.top + 1],
          ];
          break;
        case `left`:
          P = [
            [S.right - 1, N],
            [S.right - 1, j],
            [x.left + 1, j],
            [x.left + 1, N],
          ];
          break;
        case `right`:
          P = [
            [x.right - 1, N],
            [x.right - 1, j],
            [S.left + 1, j],
            [S.left + 1, N],
          ];
      }
      function F(e) {
        let [n, r] = e;
        switch (C) {
          case `top`:
            return [
              [D ? n + t / 2 : w ? n + t * 4 : n - t * 4, r + t + 1],
              [D ? n - t / 2 : w ? n + t * 4 : n - t * 4, r + t + 1],
              [S.left, w || D ? S.bottom - t : S.top],
              [S.right, w ? (D ? S.bottom - t : S.top) : S.bottom - t],
            ];
          case `bottom`:
            return [
              [D ? n + t / 2 : w ? n + t * 4 : n - t * 4, r - t],
              [D ? n - t / 2 : w ? n + t * 4 : n - t * 4, r - t],
              [S.left, w || D ? S.top + t : S.bottom],
              [S.right, w ? (D ? S.top + t : S.bottom) : S.top + t],
            ];
          case `left`: {
            let e = [n + t + 1, O ? r + t / 2 : T ? r + t * 4 : r - t * 4],
              i = [n + t + 1, O ? r - t / 2 : T ? r + t * 4 : r - t * 4];
            return [
              [T || O ? S.right - t : S.left, S.top],
              [T ? (O ? S.right - t : S.left) : S.right - t, S.bottom],
              e,
              i,
            ];
          }
          case `right`:
            return [
              [n - t, O ? r + t / 2 : T ? r + t * 4 : r - t * 4],
              [n - t, O ? r - t / 2 : T ? r + t * 4 : r - t * 4],
              [T || O ? S.left + t : S.right, S.top],
              [T ? (O ? S.left + t : S.right) : S.left + t, S.bottom],
            ];
        }
      }
      if (!Ia([m, h], P)) {
        if (a && !E) return p();
        if (!v && r) {
          let t = l(e.clientX, e.clientY);
          if (t !== null && t < 0.1) return p();
        }
        Ia([m, h], F([n, o])) ? !a && r && (i.current = window.setTimeout(p, 40)) : p();
      }
    };
  };
  return ((u.__options = { blockPointerEvents: n }), u);
}
var Z, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a;
function eo() {
  return (eo = e(() => {
    ((Z = t(G(), 1)),
      Da(),
      W(),
      D(),
      Ce(),
      we(),
      (za = `ArrowLeft`),
      (Ba = `ArrowRight`),
      (Va = `ArrowUp`),
      (Ha = `ArrowDown`),
      (Ua = [za, Ba]),
      (Wa = [Va, Ha]),
      [...Ua, ...Wa],
      (Ga = { ...Z }),
      (Ka = !1),
      (qa = 0),
      (Ja = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + qa++),
      (Ya = Ga.useId || Oa),
      (Xa = Z.createContext(null)),
      (Za = Z.createContext(null)),
      (Qa = () => Z.useContext(Xa)?.id || null),
      ($a = () => Z.useContext(Za)));
  }))();
}
function to(e, t) {
  return e.clientX >= t.left && e.clientX <= t.right && e.clientY >= t.top && e.clientY <= t.bottom;
}
function no(e, t) {
  let n = (0, ro.useContext)(io)?.pointerGrace;
  return (
    (0, ro.useEffect)(() => {
      if (!n || !t || !e.open || !e.elements.floating) return;
      let r = e.elements.floating,
        i = t.ownerDocument,
        a = n.pointerRef.current;
      a && !to(a, t.getBoundingClientRect()) && (a = null);
      let o = null,
        s = !1,
        c = (e) => {
          s !== e && ((s = e), n.onTransitChange(e));
        },
        l = () => {
          ((o = null), c(!1));
        },
        u = () => {
          ((a = null), l());
        },
        d = (n) => {
          let i = t.getBoundingClientRect();
          if (i.width === 0 || i.height === 0) {
            u();
            return;
          }
          if (to(n, i)) {
            ((a = { clientX: n.clientX, clientY: n.clientY }), l());
            return;
          }
          if (n.target instanceof Node && r.contains(n.target)) {
            (o?.(n), c(!1));
            return;
          }
          if (a) {
            if (!o) {
              let n = r.getBoundingClientRect();
              o = Ra({ requireIntent: !1, buffer: 4 })({
                ...e,
                elements: { ...e.elements, domReference: t },
                placement: a.clientY > n.top + n.height / 2 ? `top` : `bottom`,
                x: a.clientX,
                y: a.clientY,
                onClose: u,
              });
            }
            (c(!0), o(n));
          }
        };
      return (
        i.addEventListener(`mousemove`, d),
        i.documentElement.addEventListener(`mouseleave`, u),
        i.addEventListener(`pointerdown`, u),
        i.defaultView?.addEventListener(`blur`, u),
        () => {
          (i.removeEventListener(`mousemove`, d),
            i.documentElement.removeEventListener(`mouseleave`, u),
            i.removeEventListener(`pointerdown`, u),
            i.defaultView?.removeEventListener(`blur`, u),
            u());
        }
      );
    }, [e, n, t]),
    n != null
  );
}
var ro, io;
function ao() {
  return (ao = e(() => {
    (eo(), (ro = G()), (io = (0, ro.createContext)(null)));
  }))();
}
function oo({
  bounds: e,
  boundsSource: t,
  containerElement: n,
  collisionBoundaryElement: r,
  zoom: i = 1,
  isVisible: a,
  middleware: o,
  whileElementsMounted: s = be,
  rootRef: c,
  className: l,
  style: u,
  children: d,
}) {
  let f = a ? t : void 0,
    p = (0, co.useCallback)(() => (f ? f.getSnapshot() != null : e != null), [f, e]),
    m = (0, co.useSyncExternalStore)(f?.subscribe ?? po, p, p),
    h = e,
    g = t ? 1 : i,
    _ = (0, co.useContext)(io)?.portalContainerElement,
    v = r ?? _ ?? n,
    [y, b] = (0, co.useState)(null),
    x = (0, co.useRef)({ bounds: h, zoom: g });
  (0, co.useLayoutEffect)(() => {
    x.current = { bounds: h, zoom: g };
  }, [h, g]);
  let S = (0, co.useMemo)(
      () =>
        n
          ? {
              contextElement: n,
              getBoundingClientRect: () => {
                let { bounds: e, zoom: r } = x.current,
                  i = t ? t.getSnapshot() : e;
                if (!i) return new DOMRect();
                let a = ft(n, i.left * r, i.top * r),
                  o = ft(n, (i.left + i.width) * r, (i.top + i.height) * r);
                return new DOMRect(a.x, a.y, o.x - a.x, o.y - a.y);
              },
            }
          : null,
      [t, n],
    ),
    {
      refs: C,
      floatingStyles: w,
      update: T,
      context: E,
    } = Pa({
      open: a,
      placement: `top`,
      strategy: `absolute`,
      middleware: o ?? [
        re(fo),
        B({ fallbackPlacements: [`bottom`], ...(v ? { boundary: v, padding: 12 } : {}) }),
        Se({ padding: v ? 12 : 8, ...(v ? { boundary: v, crossAxis: !0 } : {}) }),
      ],
      whileElementsMounted: s,
    }),
    D = no(E, y);
  if (
    ((0, co.useLayoutEffect)(() => {
      n && C.setPositionReference(S);
    }, [n, C, S]),
    (0, co.useLayoutEffect)(() => {
      a && !t && T();
    }, [h?.left, h?.top, h?.width, h?.height, t, a, T, g]),
    (0, co.useLayoutEffect)(() => {
      if (!a || !t || !n) return;
      let e = t.subscribe(T);
      return (T(), e);
    }, [t, n, a, T]),
    !m || !a)
  )
    return null;
  let O = (0, uo.jsx)(`div`, {
    ref: c,
    className: `pointer-events-none absolute inset-0 z-30`,
    "data-popcorn-edit-toolbar-root": `true`,
    "data-popcorn-embedded-content": `true`,
    children: (0, uo.jsx)(`div`, {
      ref: C.setFloating,
      className: `pointer-events-auto absolute${l ? ` ${l}` : ``}`,
      style: { ...u, ...w },
      "data-testid": `popcorn-edit-toolbar`,
      "data-popcorn-wheel-passthrough": ``,
      children: d,
    }),
  });
  return (0, uo.jsxs)(`div`, {
    className: `pointer-events-none absolute inset-0 z-30`,
    children: [
      D && (0, uo.jsx)(so, { bounds: h, boundsSource: t, zoom: g, elementRef: b }),
      !n &&
        (0, uo.jsx)(so, {
          bounds: h,
          boundsSource: t,
          zoom: g,
          elementRef: C.setReference,
          positionReference: !0,
          updatePosition: T,
        }),
      _ ? (0, lo.createPortal)(O, _) : O,
    ],
  });
}
function so({
  bounds: e,
  boundsSource: t,
  zoom: n,
  elementRef: r,
  positionReference: i = !1,
  updatePosition: a,
}) {
  let o = (0, co.useSyncExternalStore)(
    t?.subscribe ?? po,
    t?.getSnapshot ?? (() => e),
    t?.getSnapshot ?? (() => e),
  );
  return (
    (0, co.useLayoutEffect)(() => {
      a?.();
    }, [o, a, n]),
    o
      ? (0, uo.jsx)(`div`, {
          ref: r,
          "aria-hidden": !0,
          className: `pointer-events-none absolute`,
          "data-testid": i ? `popcorn-edit-toolbar-anchor` : `popcorn-edit-toolbar-hover-anchor`,
          style: {
            left: (o.left + (i ? o.width / 2 : 0)) * n,
            top: i ? Math.max(8, o.top * n - fo) : o.top * n,
            width: i ? 1 : o.width * n,
            height: i ? 1 : o.height * n,
          },
        })
      : null
  );
}
var co, lo, uo, fo, po;
function mo() {
  return (mo = e(() => {
    (eo(), (co = G()), (lo = Ce()), ao(), (uo = W()), (fo = 12), (po = () => () => {}));
  }))();
}
function ho({ fontSize: e, onChange: t, config: n }) {
  let r = ut(n ?? bo, t, (e, t) => Ge(e, t, { min: 1, max: So })),
    i = String(e),
    [a, o] = (0, _o.useState)(i);
  (0, _o.useEffect)(() => o(i), [i]);
  let s = () => {
    let e = Number(a);
    a.trim() && Ge(n ?? bo, e, { min: 1, max: So }) ? r(e) : o(i);
  };
  return (0, vo.jsxs)(`div`, {
    className: `w-32 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl`,
    children: [
      n?.options?.allowCustom !== !1 &&
        (0, vo.jsx)(`form`, {
          noValidate: !0,
          className: `mb-1`,
          onSubmit: (e) => {
            (e.preventDefault(), s());
          },
          children: (0, vo.jsx)(`input`, {
            "aria-label": `Custom font size`,
            type: `number`,
            min: Math.max(1, n?.options?.min ?? 1),
            max: Math.min(So, n?.options?.max ?? So),
            step: `any`,
            value: a,
            className: H(
              `min-h-7 w-full rounded-lg border border-default bg-transparent px-2 py-1 text-sm text-default outline-none hover:border-primary-outline focus:border-ring focus:ring-1 focus:ring-ring`,
              `[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,
            ),
            onChange: (e) => o(e.currentTarget.value),
            onBlur: () => o(i),
            onKeyDown: (e) => {
              e.key === `Escape` && (o(i), e.preventDefault(), e.stopPropagation());
            },
          }),
        }),
      (n?.options?.presets ?? xo)
        .filter((e) => Ge(n ?? bo, e, { min: 1, max: So }))
        .map((t) => {
          let n = t === e;
          return (0, vo.jsx)(
            T,
            {
              asChild: !0,
              children: (0, vo.jsx)(`button`, {
                type: `button`,
                "aria-pressed": n,
                onClick: () => r(t),
                className: H(
                  `flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-left text-sm`,
                  n ? `bg-info-soft text-info` : `hover:bg-primary-ghost-hover`,
                ),
                children: (0, vo.jsx)(`span`, { children: t }),
              }),
            },
            t,
          );
        }),
    ],
  });
}
function go({ color: e, onChange: t, label: n, fileColors: r = [], allowNone: i = !1, config: a }) {
  let o = ut(a ?? bo, t, (e, t) =>
    Ee(
      e,
      t,
      i,
      yo.map((e) => e.value),
    ),
  );
  if (a?.state === `hidden`) return null;
  let s = a?.options?.palette ?? (a?.options?.allowCustom === !1 ? yo.map((e) => e.value) : r);
  return (0, vo.jsx)(Nt, {
    color: e,
    onChange: o,
    colors: s.map((e) => ({ value: e, label: `File color ${e}` })),
    allowNone: i && a?.options?.allowNone !== !1,
    allowCustom: a?.options?.allowCustom !== !1,
    disabled: a?.state === `disabled`,
    labels: n ? { palette: n } : void 0,
  });
}
var _o, vo, yo, bo, xo, So;
function Co() {
  return (Co = e(() => {
    (N(),
      z(),
      (_o = G()),
      vt(),
      jt(),
      gt(),
      Re(),
      (vo = W()),
      Mt(),
      (yo = [
        { label: `White`, value: `#FFFFFF` },
        { label: `Black`, value: `#000000` },
        { label: `Gray`, value: `#64748B` },
        { label: `Red`, value: `#EF4444` },
        { label: `Orange`, value: `#F97316` },
        { label: `Yellow`, value: `#EAB308` },
        { label: `Green`, value: `#22C55E` },
        { label: `Blue`, value: `#3B82F6` },
        { label: `Purple`, value: `#A855F7` },
      ]),
      (bo = { state: `enabled` }),
      (xo = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 32, 48, 64]),
      (So = 409.55));
  }))();
}
function wo({
  bounds: e,
  boundsSource: t,
  containerElement: n,
  collisionBoundaryElement: r,
  zoom: i = 1,
  isVisible: a,
  items: o,
  ariaLabel: s = `Editing tools`,
  overlayContent: c,
  overlayVisible: l = !1,
  overlayWidth: u,
  onKeyDown: d,
}) {
  let [f, p] = (0, Oo.useState)(() => typeof window > `u`),
    [m, h] = (0, Oo.useState)(null),
    g = (0, Oo.useCallback)((e) => {
      (e.preventDefault(), e.stopPropagation());
    }, []);
  return (
    (0, Oo.useEffect)(() => {
      if (typeof window > `u`) {
        p(!0);
        return;
      }
      if (!a) {
        p(!1);
        return;
      }
      p(!0);
    }, [a]),
    (!e && !t) || !a || (o.length === 0 && !l)
      ? null
      : (0, Q.jsx)(oo, {
          bounds: e,
          boundsSource: t,
          containerElement: n,
          collisionBoundaryElement: r,
          zoom: i,
          isVisible: a,
          rootRef: h,
          children: (0, Q.jsx)(`div`, {
            className: H(
              `transition-all duration-150 ease-out`,
              f ? `translate-y-0 opacity-100` : `translate-y-2 opacity-0`,
            ),
            children: (0, Q.jsxs)(en, {
              ariaLabel: s,
              onKeyDown: d,
              children: [
                (0, Q.jsx)(`div`, {
                  "aria-hidden": l,
                  inert: l,
                  style: l && u != null ? { width: `min(${u}px, calc(100vw - 32px))` } : void 0,
                  className: H(
                    `flex h-full items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
                    l ? `pointer-events-none scale-[0.98] opacity-0` : `scale-100 opacity-100`,
                  ),
                  children: o.map((e) => {
                    switch (e.kind) {
                      case `button`:
                        return (0, Q.jsx)(
                          tn,
                          {
                            actionId: e.id,
                            label: e.label,
                            icon: e.icon,
                            hideLabel: e.hideLabel,
                            isActive: e.isActive,
                            isDisabled: e.isDisabled,
                            disabledReason: e.disabledReason,
                            subLabel: e.subLabel,
                            iconClassName: e.iconClassName,
                            labelClassName: e.labelClassName,
                            onClick: (t) => {
                              (g(t), e.onClick?.());
                            },
                          },
                          e.id,
                        );
                      case `popover`:
                        return (0, Q.jsx)(
                          nn,
                          {
                            actionId: e.id,
                            label: e.label,
                            icon: e.icon,
                            hideLabel: e.hideLabel,
                            isDisabled: e.isDisabled,
                            disabledReason: e.disabledReason,
                            subLabel: e.subLabel,
                            align: e.align,
                            portalContainerElement: m,
                            children: e.content,
                          },
                          e.id,
                        );
                      case `separator`:
                        return (0, Q.jsx)(rn, {}, e.id);
                    }
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  "aria-hidden": !l,
                  className: H(
                    `absolute inset-1 transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
                    l
                      ? `pointer-events-auto scale-100 opacity-100`
                      : `pointer-events-none scale-[0.98] opacity-0`,
                  ),
                  children: c,
                }),
              ],
            }),
          }),
        })
  );
}
function To({
  bounds: e,
  boundsSource: t,
  zoom: n,
  isVisible: r,
  selectionRangeAddress: i,
  runWorksheetEdit: a,
  formatting: o,
  manualEditUiEnabled: s = !1,
  isInspectorOpen: c = !1,
  selectionActions: l,
  selectionKey: u,
  shortcutScopeElement: d,
  onDismiss: f,
  onToggleInspector: p,
  onAskSelectionContext: m,
  onCommentSelection: h,
  config: g,
}) {
  let _ = (0, Oo.useContext)(io),
    [v, y] = (0, Oo.useState)(``),
    [b, x] = (0, Oo.useState)(!1),
    S = (0, Oo.useRef)(null),
    C = (0, Oo.useMemo)(
      () =>
        Ao.flatMap((e) =>
          jo.map((t) => {
            let n = ya[e];
            return { key: `${e}-${t}`, label: `${e} shade ${t}`, hex: n?.[t] ?? `#000000` };
          }),
        ),
      [],
    ),
    w = (0, Oo.useCallback)(
      (e) => {
        i &&
          a &&
          (!g ||
            Ee(
              g.controls.fill,
              e,
              !1,
              C.map((e) => e.hex),
            )) &&
          a(`applyRangeFill`, { rangeAddress: i, hex: e });
      },
      [a, i, g, C],
    ),
    E = (0, Oo.useCallback)(
      (e) => {
        i &&
          a &&
          (!g ||
            Ee(
              g.controls.textColor,
              e,
              !1,
              C.map((e) => e.hex),
            )) &&
          a(`applyRangeFontColor`, { rangeAddress: i, hex: e });
      },
      [a, i, g, C],
    ),
    D =
      s && (g == null || (g.enabled && g.controls.askForChange.state === `enabled`)) && r && !b && l != null,
    O = l?.onAskForEditShown;
  (0, Oo.useEffect)(() => {
    D && u != null && S.current !== u && O != null && ((S.current = u), O());
  }, [D, O, u]);
  let k = (0, Oo.useCallback)(
    (e) => {
      l &&
        (!g || (g.enabled && g.controls.askForChange.state === `enabled`)) &&
        (l.startAskChat(e), l.opensAnnotationEditor || x(!0));
    },
    [l, g],
  );
  _n({ enabled: D, onClick: k, shortcutScopeElement: _?.portalContainerElement ?? d });
  let A = () => {
      (y(``), x(!1), f?.());
    },
    j = (e, t) => {
      l &&
        v.trim() &&
        (!g || (g.enabled && g.controls.askForChange.state === `enabled`)) &&
        (((t ? l.defaultSubmitMode !== `saved` : l.defaultSubmitMode === `saved`) && l.savedSubmitDisabled) ||
          (l.submitAskChat(v, e, t), A()));
    };
  if (s) {
    let s = i != null && o != null,
      u = [
        ...(l
          ? [
              {
                kind: `button`,
                id: `ask-chat`,
                label: l?.askForEditLabel ?? `Ask for change`,
                subLabel: (0, Q.jsx)(`span`, {
                  className: `text-[11px] leading-none text-token-text-tertiary`,
                  children: vn(),
                }),
                onClick: () => k(`ask_codex_button`),
              },
              ...(s || p ? [{ kind: `separator`, id: `ask-chat-separator` }] : []),
            ]
          : []),
        ...(s
          ? [
              {
                kind: `button`,
                id: `bold`,
                label: `Bold`,
                icon: st,
                hideLabel: !0,
                isActive: o.bold,
                onClick: () => {
                  a?.(`toggleRangeBold`, { rangeAddress: i, value: !o.bold });
                },
              },
              {
                kind: `popover`,
                id: `text-color`,
                label: `Text color`,
                hideLabel: !0,
                subLabel: (0, Q.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `block size-4 rounded-full border border-token-border-light`,
                  style: { backgroundColor: o.fontColor },
                }),
                align: `center`,
                content: (0, Q.jsx)(go, {
                  config: g?.controls.textColor,
                  color: o.fontColor,
                  fileColors: o.fileColors,
                  onChange: (e) => {
                    e != null && E(e);
                  },
                }),
              },
              {
                kind: `popover`,
                id: `text-size`,
                label: `Text size`,
                hideLabel: !0,
                subLabel: (0, Q.jsxs)(`span`, {
                  "aria-hidden": !0,
                  className: `inline-flex items-center gap-0.5`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `text-sm font-medium text-token-text-primary`,
                      children: o.fontSize,
                    }),
                    (0, Q.jsx)(nt, { className: `size-3 text-token-text-secondary` }),
                  ],
                }),
                align: `center`,
                content: (0, Q.jsx)(ho, {
                  config: g?.controls.fontSize,
                  fontSize: o.fontSize,
                  onChange: (e) => {
                    a?.(`applyRangeFontSize`, { rangeAddress: i, size: e });
                  },
                }),
              },
            ]
          : []),
        ...(p
          ? [
              ...(s ? [{ kind: `separator`, id: `style-picker-separator` }] : []),
              {
                kind: `button`,
                id: `style-picker`,
                label: `Open style picker`,
                icon: it,
                hideLabel: !0,
                isActive: c,
                onClick: p,
              },
            ]
          : []),
        ...(h
          ? [
              { kind: `separator`, id: `comment-separator` },
              { kind: `button`, id: `comment`, label: `Comment`, icon: rt, hideLabel: !0, onClick: h },
            ]
          : []),
      ],
      f = b && (g == null || g.controls.askForChange.state === `enabled`),
      m = f
        ? (0, Q.jsxs)(`form`, {
            className: `flex h-full w-full items-center gap-2 px-1`,
            onSubmit: (e) => {
              (e.preventDefault(), e.stopPropagation(), j(`button`, !1));
            },
            onKeyDown: (e) => {
              if ((e.stopPropagation(), e.key === `Enter` && !e.nativeEvent.isComposing)) {
                (e.preventDefault(), j(`keyboard`, e.metaKey || e.ctrlKey));
                return;
              }
              if (e.key !== `Escape`) return;
              e.preventDefault();
              let t = e.currentTarget.closest(`[role='toolbar']`);
              ((0, ko.flushSync)(() => x(!1)),
                t?.querySelector(`button[data-toolbar-action='ask-chat']`)?.focus());
            },
            children: [
              (0, Q.jsx)(`input`, {
                autoFocus: !0,
                "aria-label": `Ask for change about this selection`,
                className: `min-w-0 flex-1 bg-transparent text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary`,
                placeholder: `Ask for change about this selection`,
                value: v,
                onChange: (e) => y(e.currentTarget.value),
              }),
              (0, Q.jsx)(`button`, {
                type: `submit`,
                "aria-label": `Send to Chat`,
                disabled: !v.trim() || (l?.defaultSubmitMode === `saved` && l.savedSubmitDisabled),
                className: `flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100`,
                children: (0, Q.jsx)(at, { className: `size-4` }),
              }),
            ],
          })
        : null;
    return (0, Q.jsx)(wo, {
      ariaLabel: b ? `Ask for change` : `Selection actions`,
      bounds: e,
      boundsSource: t,
      zoom: n,
      isVisible: r && (g?.enabled ?? !0),
      items: Eo(u, g),
      overlayContent: m,
      overlayVisible: f,
      onKeyDown: (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), A(), d?.focus({ preventScroll: !0 }));
      },
    });
  }
  return (0, Q.jsx)(wo, {
    bounds: e,
    boundsSource: t,
    zoom: n,
    isVisible: r && (g?.enabled ?? !0),
    items: Eo(
      [
        { kind: `button`, id: `text-style`, label: `Text styles`, icon: $e },
        {
          kind: `button`,
          id: `bold`,
          label: `Bold`,
          icon: st,
          hideLabel: !0,
          onClick: () => {
            i && a && a(`toggleRangeBold`, { rangeAddress: i });
          },
        },
        {
          kind: `button`,
          id: `italic`,
          label: `Italic`,
          icon: Qe,
          hideLabel: !0,
          onClick: () => {
            i && a && a(`toggleRangeItalic`, { rangeAddress: i });
          },
        },
        { kind: `separator`, id: `text-separator` },
        {
          kind: `popover`,
          id: `fill-color`,
          label: `Fill color`,
          icon: ot,
          hideLabel: !0,
          align: `center`,
          content: (0, Q.jsxs)(`div`, {
            "data-walnut-edit-popover": `true`,
            className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
            children: [
              (0, Q.jsx)(`p`, {
                className: `mb-2 text-xs font-medium text-token-text-secondary`,
                children: `Background color`,
              }),
              (0, Q.jsx)(`div`, {
                className: `grid grid-cols-7 gap-1`,
                children: Do(C, g?.controls.fill).map((e) =>
                  (0, Q.jsx)(
                    T,
                    {
                      asChild: !0,
                      children: (0, Q.jsx)(`button`, {
                        type: `button`,
                        disabled: g != null && g.controls.fill.state !== `enabled`,
                        className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                        style: { backgroundColor: e.hex },
                        onClick: (t) => {
                          (t.preventDefault(), t.stopPropagation(), w(e.hex));
                        },
                        children: (0, Q.jsx)(`span`, { className: `sr-only`, children: e.label }),
                      }),
                    },
                    e.key,
                  ),
                ),
              }),
            ],
          }),
        },
        {
          kind: `popover`,
          id: `text-color`,
          label: `Text color`,
          icon: it,
          hideLabel: !0,
          align: `center`,
          content: (0, Q.jsxs)(`div`, {
            "data-walnut-edit-popover": `true`,
            className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
            children: [
              (0, Q.jsx)(`p`, {
                className: `mb-2 text-xs font-medium text-token-text-secondary`,
                children: `Text color`,
              }),
              (0, Q.jsx)(`div`, {
                className: `grid grid-cols-7 gap-1`,
                children: Do(C, g?.controls.textColor).map((e) =>
                  (0, Q.jsx)(
                    T,
                    {
                      asChild: !0,
                      children: (0, Q.jsx)(`button`, {
                        type: `button`,
                        disabled: g != null && g.controls.textColor.state !== `enabled`,
                        className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                        style: { backgroundColor: e.hex },
                        onClick: (t) => {
                          (t.preventDefault(), t.stopPropagation(), E(e.hex));
                        },
                        children: (0, Q.jsx)(`span`, { className: `sr-only`, children: e.label }),
                      }),
                    },
                    `text-${e.key}`,
                  ),
                ),
              }),
            ],
          }),
        },
        {
          kind: `button`,
          id: `borders`,
          label: `Borders`,
          icon: Ze,
          hideLabel: !0,
          onClick: () => {
            i && a && a(`applyRangeBorders`, { rangeAddress: i });
          },
        },
        { kind: `separator`, id: `ask-separator` },
        {
          kind: `button`,
          id: `ask`,
          label: `Ask`,
          subLabel: (0, Q.jsx)(`span`, {
            className: `text-[11px] leading-none text-token-text-tertiary`,
            children: vn(),
          }),
          onClick: () => {
            m?.();
          },
        },
      ],
      g,
    ),
  });
}
function Eo(e, t) {
  if (!t) return e;
  let n = {
      bold: t.controls.bold,
      italic: t.controls.italic,
      "text-color": t.controls.textColor,
      "text-size": t.controls.fontSize,
      "fill-color": t.controls.fill,
      "style-picker": t.controls.format,
      "ask-chat": t.controls.askForChange,
      ask: t.controls.askForChange,
      comment: t.controls.comment,
    },
    r = [];
  for (let t of e) {
    if (t.kind === `separator`) {
      r.length && r.at(-1)?.kind !== `separator` && r.push(t);
      continue;
    }
    let e = n[t.id];
    e &&
      e.state !== `hidden` &&
      r.push({
        ...t,
        isDisabled: t.isDisabled || e.state !== `enabled`,
        disabledReason: e.reason,
        ...(t.kind === `button`
          ? {
              onClick: () => {
                e.state === `enabled` && !t.isDisabled && t.onClick?.();
              },
            }
          : {}),
      });
  }
  return (r.at(-1)?.kind === `separator` && r.pop(), r);
}
function Do(e, t) {
  return (
    t?.options?.palette?.map(
      (t) => e.find((e) => e.hex.toLowerCase() === t.toLowerCase()) ?? { key: t, label: t, hex: t },
    ) ?? e
  );
}
var Oo, ko, Q, Ao, jo;
function Mo() {
  return (Mo = e(() => {
    (Re(),
      N(),
      z(),
      (Oo = G()),
      (ko = Ce()),
      En(),
      ba(),
      mo(),
      ln(),
      et(),
      Co(),
      ao(),
      (Q = W()),
      (Ao = [`DesaturatedWarm`, `Purple`, `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`]),
      (jo = [700, 600, 500, 400, 300, 200, 100]));
  }))();
}
function No(e, t, n) {
  return t === void 0
    ? e
    : new Promise((r, i) => {
        let a = setTimeout(() => i(Error(n)), Math.max(0, t));
        e.then(
          (e) => {
            (clearTimeout(a), r(e));
          },
          (e) => {
            (clearTimeout(a), i(e));
          },
        );
      });
}
function Po(e) {
  return (e ?? []).filter((e) => e.length > 0);
}
function Fo(e, t) {
  let n = e.slice(t).filter((e) => e.length > 0);
  return n.length === 0 ? null : n.length === 1 ? (n[0] ?? null) : qe(n);
}
function Io(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function Lo(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (!r || !i || !Io(r, i)) return !1;
  }
  return !0;
}
function Ro(e) {
  let t = Po(e.externalCrdtUpdates);
  return (
    e.initialCrdtState && e.initialCrdtState.length > 0 && t.unshift(e.initialCrdtState),
    t.length === 0 ? e.initialCrdtState : t.length === 1 ? t[0] : qe(t)
  );
}
function zo(e) {
  let t = Po(e.externalCrdtUpdates);
  return {
    initialCrdtState: Ro({ initialCrdtState: e.initialCrdtState, externalCrdtUpdates: t }),
    bootstrappedExternalCrdtUpdates: t,
  };
}
function Bo(e) {
  let t = Po(e.updates),
    n = e.bootstrapState.bootstrappedExternalCrdtUpdates;
  if (n.length === 0 || t.length < n.length) return t;
  for (let e = 0; e < n.length; e += 1) {
    let r = n[e],
      i = t[e];
    if (!r || !i || !Io(r, i)) return t;
  }
  return t.slice(n.length);
}
function Vo(e, t) {
  return e instanceof Error && e.message.trim().length > 0
    ? e.message
    : `Failed to restore external ${t.toLowerCase()} edits.`;
}
function Ho({ initialCrdtState: e, externalCrdtUpdates: t, externalCrdtUpdateSource: n }) {
  let r = (0, Go.useRef)(null);
  r.current ??= zo({ initialCrdtState: e, externalCrdtUpdates: n?.getSnapshot() ?? t });
  let i = r.current,
    a = (0, Go.useMemo)(() => {
      if (!n) return;
      let e,
        t = [];
      return {
        getSnapshot: () => {
          let r = n.getSnapshot();
          return (r !== e && ((e = r), (t = Bo({ bootstrapState: i, updates: r }))), t);
        },
        subscribe: (e) => n.subscribe(e),
      };
    }, [i, n]);
  return {
    initialCrdtState: i.initialCrdtState,
    externalCrdtUpdateSource: a,
    externalCrdtUpdates: a ? void 0 : Bo({ bootstrapState: i, updates: t }),
  };
}
function Uo({
  artifactLabel: e,
  controller: t,
  crdtDrainAttemptTimeoutMs: n,
  crdtDrainMaxAttempts: r,
  externalCrdtUpdates: i,
  externalCrdtUpdateSource: a,
  onCrdtDrain: o,
  onCrdtDrainAttemptFailed: s,
  onCrdtUpdate: c,
}) {
  let l = (0, Go.useRef)(null),
    u = (0, Go.useRef)(i ?? []),
    [d, f] = (0, Go.useState)(c == null),
    [p, m] = (0, Go.useState)(null),
    h = (0, Go.useRef)(o),
    g = (0, Go.useRef)(s),
    _ = (0, Go.useRef)(c),
    v = c != null,
    y = a ? [] : (i ?? []);
  Lo(u.current, y) || (u.current = y);
  let b = u.current;
  return (
    (0, Go.useEffect)(() => {
      ((h.current = o), (g.current = s), (_.current = c));
    }, [o, s, c]),
    (0, Go.useEffect)(() => {
      if (!t || !v) {
        f(!0);
        return;
      }
      f(!1);
      let i = !0,
        a = null,
        o = !1,
        s = [],
        c = null,
        l = null,
        u = (e) => {
          _.current?.(e);
        },
        d = t.subscribeCrdtUpdates((e) => {
          if (a == null) {
            s.push(new Uint8Array(e));
            return;
          }
          if (!o) {
            (u(qe([a, e])), (o = !0));
            return;
          }
          u(e);
        }),
        p = (e) => {
          ((a = new Uint8Array(e)), s.length > 0 && (u(qe([a, ...s])), (o = !0), (s.length = 0)), i && f(!0));
        },
        m = () => {
          c = t
            .requestCrdtSnapshot()
            .then(p)
            .catch((e) => {
              !i || e instanceof pt || (l = setTimeout(m, Jo));
            });
        };
      return (
        m(),
        () => {
          ((i = !1), l != null && clearTimeout(l));
          let o = 0,
            u = () => (
              (o += 1),
              No(
                (async () => {
                  let e = t.flushCrdtUpdates?.() ?? Promise.resolve();
                  (await Promise.all([e, c ?? Promise.resolve()]),
                    s.length > 0 && a == null && p(await t.requestCrdtSnapshot()),
                    d());
                })(),
                n,
                `${e} CRDT drain attempt timed out.`,
              ).catch((e) => {
                if ((g.current?.(), e instanceof pt)) {
                  d();
                  return;
                }
                if (r !== void 0 && o >= Math.max(1, r)) throw (d(), e);
                return new Promise((e) => {
                  setTimeout(e, Jo);
                }).then(u);
              })
            ),
            f = u();
          (h.current?.(f), f.catch(() => void 0));
        }
      );
    }, [e, t, n, r, v]),
    (0, Go.useEffect)(() => {
      if (!t) return;
      let n = !1,
        r = !1,
        i = [],
        o = [],
        s = async () => {
          if (!(n || r)) {
            r = !0;
            try {
              for (; !n;) {
                let r = o,
                  a = 0;
                for (; a < i.length && a < r.length && Io(i[a], r[a]);) a += 1;
                let s = r.length - a;
                if ((m(s >= qo ? { kind: `restoring`, pendingUpdateCount: s } : null), s === 0)) {
                  i = r;
                  return;
                }
                try {
                  let e = Fo(r, a);
                  e && (await t.applyCrdtUpdate(e));
                } catch (t) {
                  if (n) return;
                  if (!Lo(r, o)) continue;
                  m({ kind: `failed`, artifactLabel: e, errorMessage: Vo(t, e), pendingUpdateCount: s });
                  return;
                }
                if (n) return;
                i = r;
              }
            } finally {
              r = !1;
            }
          }
        },
        c = (e) => {
          ((o = e), s());
        };
      l.current = c;
      let u = a?.subscribe(() => {
        c(a.getSnapshot());
      });
      return (
        a && c(a.getSnapshot()),
        () => {
          ((n = !0), u?.(), l.current === c && (l.current = null));
        }
      );
    }, [e, t, a]),
    (0, Go.useEffect)(() => {
      a || l.current?.(b);
    }, [e, t, a, b]),
    { crdtPublishingReady: d, restoreState: p }
  );
}
function Wo({ artifactLabel: e, restoreState: t }) {
  return t
    ? (0, Ko.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]`,
        children: (0, Ko.jsx)(`div`, {
          className: H(
            `w-full rounded-xl border px-3 py-2 text-xs shadow-lg`,
            t.kind === `failed`
              ? `border-token-border-default bg-token-bg-primary text-token-editor-warning-foreground`
              : `border-token-border-default bg-token-bg-primary text-token-text-secondary`,
          ),
          role: t.kind === `failed` ? `alert` : `status`,
          children:
            t.kind === `failed`
              ? (0, Ko.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Ko.jsxs)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: [`Could not restore `, e.toLowerCase(), ` edits`],
                    }),
                    (0, Ko.jsxs)(`div`, {
                      children: [t.errorMessage, ` Pending CRDT updates:`, ` `, t.pendingUpdateCount, `.`],
                    }),
                  ],
                })
              : (0, Ko.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Ko.jsxs)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: [`Restoring `, e.toLowerCase(), ` edits`],
                    }),
                    (0, Ko.jsxs)(`div`, {
                      children: [`Compacting and applying `, t.pendingUpdateCount, ` CRDT updates.`],
                    }),
                  ],
                }),
        }),
      })
    : null;
}
var Go, Ko, qo, Jo;
function Yo() {
  return (Yo = e(() => {
    (z(), (Go = G()), Be(), _t(), (Ko = W()), (qo = 500), (Jo = 250));
  }))();
}
function Xo(e) {
  return e === `codex` ? Zo : xt(e);
}
var Zo;
function Qo() {
  return (Qo = e(() => {
    (Ct(),
      (Zo = {
        ...yt,
        "--color-token-main-surface-primary": `var(--color-surface)`,
        "--color-token-side-bar-background": `var(--color-surface)`,
        "--color-background-accent": `var(--color-background-info-soft)`,
        "--color-background-accent-hover": `var(--color-background-info-soft)`,
        "--color-background-accent-active": `var(--color-background-info-soft)`,
        "--interactive-bg-secondary-hover": `var(--color-background-primary-ghost-hover)`,
        "--interactive-bg-secondary-press": `var(--color-background-primary-ghost-active)`,
        "--color-token-bg-primary": `var(--color-surface)`,
        "--color-token-bg-secondary": `var(--color-surface-secondary)`,
        "--color-token-bg-tertiary": `var(--color-surface-tertiary)`,
        "--color-token-charts-blue": `var(--color-blue)`,
        "--color-token-interactive-bg-secondary-hover": `var(--interactive-bg-secondary-hover)`,
        "--color-token-interactive-bg-secondary-press": `var(--interactive-bg-secondary-press)`,
        "--color-token-interactive-bg-secondary-selected": `var(--color-background-primary-soft-active)`,
        "--color-token-interactive-bg-accent-muted-hover": `var(--color-background-info-soft)`,
        "--color-token-interactive-bg-accent-muted-press": `var(--color-background-info-soft)`,
        "--color-token-foreground": `var(--color-text)`,
        "--color-token-description-foreground": `var(--color-text-tertiary)`,
        "--color-token-interactive-label-secondary-default": `var(--color-token-text-primary)`,
        "--color-token-interactive-label-accent-default": `var(--color-token-text-link-foreground)`,
        "--color-token-focus-border": `var(--color-ring)`,
        "--color-token-list-hover-background": `var(--color-background-primary-ghost-hover)`,
        "--color-token-text-primary": `var(--color-text)`,
        "--color-token-text-secondary": `var(--color-text-secondary)`,
        "--color-token-text-tertiary": `var(--color-text-tertiary)`,
        "--color-token-border-default": `var(--color-border)`,
        "--color-token-border-light": `var(--color-border-subtle)`,
      }));
  }))();
}
function $o(e) {
  let t = (0, ts.c)(7),
    { reviewTools: n, children: r } = e,
    i = n?.batch,
    a = n?.annotation.handleRef,
    o;
  t[0] !== i || t[1] !== r || t[2] !== a?.current || t[3] !== n
    ? ((o = r(
        n == null
          ? void 0
          : {
              drawing: n.drawing,
              annotation: {
                ...n.annotation,
                editingDisabled: n.annotation.editingDisabled || i?.isSubmitting,
              },
              reviewBarUsesFullViewport: !0,
              reviewBar:
                i == null
                  ? void 0
                  : (e) => {
                      let {
                          annotationMode: t,
                          isAnnotationInteractionActive: n,
                          onExitAnnotationMode: r,
                          onAnnotationsSubmitted: o,
                        } = e,
                        { comments: s, hostId: c, onCancel: l, ...u } = i,
                        d = s.flatMap(es);
                      return (0, ns.jsx)(Ht, {
                        ...u,
                        annotationCount: s.length,
                        isAnnotating: t,
                        isAnnotationInteractionActive: n,
                        previewContent:
                          s.length === 0
                            ? void 0
                            : (0, ns.jsx)(Ne, {
                                commentAttachments: s,
                                cwd: null,
                                hostId: c,
                                showArtifactName: !1,
                              }),
                        onNavigate: (e) => a?.current?.navigateAnnotation(e, d),
                        onSend: () => u.onSend(o),
                        onCancel: (e) => {
                          if (u.isSubmitting || !r(e) || l() === !1) return !1;
                          for (let e of d) a?.current?.dismissAnnotation(e);
                        },
                      });
                    },
            },
      )),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a?.current),
      (t[3] = n),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (t[5] === o ? (s = t[6]) : ((s = (0, ns.jsx)(Ut, { children: o })), (t[5] = o), (t[6] = s)), s);
}
function es(e) {
  return e.localArtifactAnnotationContext?.annotationId ?? [];
}
var ts, ns;
function rs() {
  return (rs = e(() => {
    ((ts = ve()), ze(), Wt(), (ns = W()));
  }))();
}
var is;
function as() {
  return (as = e(() => {
    (a(),
      F(),
      P(),
      y(),
      j(),
      le(),
      ue(),
      u(),
      R(),
      s(),
      (is = {
        bar: xe,
        line: C,
        pie: i,
        doughnut: x,
        area: Te,
        scatter: k,
        histogram: E,
        waterfall: ye,
        funnel: m,
        treemap: d,
      }));
  }))();
}
var os, ss, cs, ls, us;
function ds() {
  return (ds = e(() => {
    ((os = `_pairedFields_tgupj_1`),
      (ss = `_column_tgupj_6`),
      (cs = `_section_tgupj_14`),
      (ls = `_sections_tgupj_19`),
      (us = { pairedFields: os, column: ss, section: cs, sections: ls }));
  }))();
}
function fs(e) {
  let t = (0, ps.c)(17),
    { className: n, title: r, action: i, children: a, layout: o, collapsed: s } = e,
    c = o === void 0 ? `column` : o,
    l = s !== void 0 && s,
    u = c === `column` && us.column,
    d = c === `row` ? `grid grid-cols-2 items-center gap-2` : `flex flex-col gap-2`,
    f;
  t[0] !== n || t[1] !== u || t[2] !== d
    ? ((f = H(n, us.section, `min-w-0`, u, d)), (t[0] = n), (t[1] = u), (t[2] = d), (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== i || t[5] !== l || t[6] !== c || t[7] !== r
    ? ((p =
        r != null &&
        (0, ms.jsxs)(`h3`, {
          className: H(
            `relative flex min-h-8 min-w-0 items-center text-xs leading-4.5 font-medium text-default select-none`,
            c === `column` && !l && `-mb-0.5`,
            i != null && `pe-10`,
          ),
          children: [
            r,
            i != null &&
              (0, ms.jsx)(`span`, { className: `absolute inset-y-0 end-0 flex items-center`, children: i }),
          ],
        })),
      (t[4] = i),
      (t[5] = l),
      (t[6] = c),
      (t[7] = r),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== a || t[10] !== c
    ? ((m = c === `row` ? (0, ms.jsx)(`div`, { className: `min-w-0`, children: a }) : a),
      (t[9] = a),
      (t[10] = c),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== l || t[13] !== f || t[14] !== p || t[15] !== m
      ? ((h = (0, ms.jsxs)(`section`, { className: f, "data-collapsed": l, children: [p, m] })),
        (t[12] = l),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var ps, ms;
function hs() {
  return (hs = e(() => {
    ((ps = ve()), z(), ds(), (ms = W()));
  }))();
}
function gs(e) {
  let t = (0, _s.c)(10),
    { enabled: r, label: i, disabled: a, disabledReason: o, onClick: s } = e,
    c = a ? o : void 0,
    l = a ? o : void 0,
    u = r ? _e : de,
    d;
  t[0] === u ? (d = t[1]) : ((d = (0, vs.jsx)(w, { asset: u })), (t[0] = u), (t[1] = d));
  let f;
  return (
    t[2] !== a || t[3] !== r || t[4] !== i || t[5] !== s || t[6] !== c || t[7] !== l || t[8] !== d
      ? ((f = (0, vs.jsx)(n, {
          className: `me-px`,
          size: `iconCircle`,
          color: `ghostActive`,
          "aria-label": i,
          "aria-expanded": r,
          disabled: a,
          title: c,
          "aria-description": l,
          onClick: s,
          children: d,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = i),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var _s, vs;
function ys() {
  return (ys = e(() => {
    ((_s = ve()), V(), pe(), he(), O(), (vs = W()));
  }))();
}
function bs(e) {
  let t = (0, Ss.c)(54),
    {
      label: r,
      value: i,
      onChange: a,
      presets: s,
      min: c,
      max: u,
      suffix: d,
      side: f,
      disabled: m,
      disabledReason: h,
    } = e,
    g = c === void 0 ? 0 : c,
    _ = f === void 0 ? `bottom` : f,
    v = te(),
    y = (0, Cs.useRef)(null),
    b = (0, Cs.useRef)(null),
    x = i == null ? `` : String(Math.round(i * 100) / 100),
    S;
  t[0] !== x || t[1] !== i ? ((S = { base: i, text: x }), (t[0] = x), (t[1] = i), (t[2] = S)) : (S = t[2]);
  let [C, w] = (0, Cs.useState)(S);
  C.base !== i && w({ base: i, text: x });
  let T = C.base === i ? C.text : x,
    E = m ? h : void 0,
    D = m ? h : void 0,
    O;
  t[3] === i
    ? (O = t[4])
    : ((O = (e) => w({ base: i, text: e.currentTarget.value })), (t[3] = i), (t[4] = O));
  let k;
  t[5] === v
    ? (k = t[6])
    : ((k = v.formatMessage({
        id: `presentationEditor.mixed`,
        defaultMessage: `Mixed`,
        description: `A formatting value differs across selected objects or table cells`,
      })),
      (t[5] = v),
      (t[6] = k));
  let A;
  t[7] !== x || t[8] !== u || t[9] !== g || t[10] !== a || t[11] !== i
    ? ((A = (e) => {
        let t = e.currentTarget.valueAsNumber;
        Number.isFinite(t) && t >= g && (u == null || t <= u) && e.currentTarget.value !== x && t !== i
          ? a(t)
          : w({ base: i, text: x });
      }),
      (t[7] = x),
      (t[8] = u),
      (t[9] = g),
      (t[10] = a),
      (t[11] = i),
      (t[12] = A))
    : (A = t[12]);
  let j;
  t[13] !== x || t[14] !== i
    ? ((j = (e) => {
        e.nativeEvent.isComposing ||
          (e.key === `Escape` && ((e.currentTarget.value = x), w({ base: i, text: x })),
          (e.key === `Enter` || e.key === `Escape`) &&
            (e.preventDefault(), e.stopPropagation(), e.currentTarget.blur(), b.current?.focus()));
      }),
      (t[13] = x),
      (t[14] = i),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === d
    ? (M = t[17])
    : ((M =
        d == null
          ? void 0
          : (0, ws.jsx)(`span`, { className: `shrink-0 text-secondary select-none`, children: d })),
      (t[16] = d),
      (t[17] = M));
  let N = _ === `left` ? `start` : `end`,
    P;
  t[18] === _
    ? (P = t[19])
    : ((P = (e, t) => {
        if (y.current == null) return { side: _ };
        let n = y.current.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        return _ === `left`
          ? { side: _, align: `start`, sideOffset: (r.left - n.left) / t, alignOffset: (n.top - r.top) / t }
          : {
              side: _,
              align: `end`,
              sideOffset: (n.bottom - r.bottom) / t,
              alignOffset: (r.right - n.right) / t,
            };
      }),
      (t[18] = _),
      (t[19] = P));
  let F;
  t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = (0, ws.jsx)(p, {})), (t[20] = F)) : (F = t[20]);
  let ee;
  t[21] !== m || t[22] !== r
    ? ((ee = (0, ws.jsx)(n, {
        ref: b,
        color: `ghostActive`,
        size: `fieldControl`,
        focusRing: `surface`,
        "aria-label": r,
        disabled: m,
        children: F,
      })),
      (t[21] = m),
      (t[22] = r),
      (t[23] = ee))
    : (ee = t[23]);
  let I;
  if (t[24] !== v || t[25] !== a || t[26] !== s || t[27] !== i) {
    let e;
    (t[29] !== v || t[30] !== a || t[31] !== i
      ? ((e = (e) =>
          (0, ws.jsx)(
            L.Item,
            {
              rightIcon: i === e.value ? (0, ws.jsx)(l, {}) : void 0,
              onSelect: () => a(e.value),
              children: e.label ?? v.formatNumber(e.value),
            },
            e.value,
          )),
        (t[29] = v),
        (t[30] = a),
        (t[31] = i),
        (t[32] = e))
      : (e = t[32]),
      (I = s.map(e)),
      (t[24] = v),
      (t[25] = a),
      (t[26] = s),
      (t[27] = i),
      (t[28] = I));
  } else I = t[28];
  let R;
  t[33] !== m || t[34] !== _ || t[35] !== N || t[36] !== P || t[37] !== ee || t[38] !== I
    ? ((R = (0, ws.jsx)(o, {
        side: _,
        align: N,
        disabled: m,
        contentWidth: `menuBounded`,
        contentClassName: `pointer-events-auto`,
        contentRef: xs,
        getPlacement: P,
        triggerButton: ee,
        children: I,
      })),
      (t[33] = m),
      (t[34] = _),
      (t[35] = N),
      (t[36] = P),
      (t[37] = ee),
      (t[38] = I),
      (t[39] = R))
    : (R = t[39]);
  let ne;
  return (
    t[40] !== m ||
    t[41] !== r ||
    t[42] !== u ||
    t[43] !== g ||
    t[44] !== M ||
    t[45] !== R ||
    t[46] !== E ||
    t[47] !== D ||
    t[48] !== O ||
    t[49] !== k ||
    t[50] !== A ||
    t[51] !== j ||
    t[52] !== T
      ? ((ne = (0, ws.jsx)(`div`, {
          ref: y,
          className: `min-w-0`,
          children: (0, ws.jsx)(ke, {
            variant: `field`,
            type: `number`,
            "aria-label": r,
            "aria-description": E,
            title: D,
            disabled: m,
            min: g,
            max: u,
            step: `any`,
            value: T,
            onChange: O,
            placeholder: k,
            onBlur: A,
            onKeyDown: j,
            valueSuffix: M,
            trailingControl: R,
          }),
        })),
        (t[40] = m),
        (t[41] = r),
        (t[42] = u),
        (t[43] = g),
        (t[44] = M),
        (t[45] = R),
        (t[46] = E),
        (t[47] = D),
        (t[48] = O),
        (t[49] = k),
        (t[50] = A),
        (t[51] = j),
        (t[52] = T),
        (t[53] = ne))
      : (ne = t[53]),
    ne
  );
}
function xs(e) {
  return e?.setAttribute(`data-popcorn-edit-toolbar-root`, `true`);
}
var Ss, Cs, ws;
function Ts() {
  return (Ts = e(() => {
    ((Ss = ve()), (Cs = G()), se(), he(), r(), I(), De(), (ws = W()));
  }))();
}
function Es(e) {
  let t = (0, Ds.c)(10),
    { label: n, checked: r, onChange: i, disabled: a, disabledReason: o } = e,
    s = a ? o : void 0,
    c = a ? o : void 0,
    l;
  t[0] !== r || t[1] !== a || t[2] !== n || t[3] !== i || t[4] !== s || t[5] !== c
    ? ((l = (0, Os.jsx)(ce, {
        tone: `neutral`,
        size: `sm`,
        ariaLabel: n,
        "aria-description": s,
        title: c,
        checked: r,
        onChange: i,
        disabled: a,
      })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = n),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== n || t[8] !== l
      ? ((u = (0, Os.jsxs)(`label`, {
          className: `flex items-center justify-between text-xs text-secondary select-none`,
          children: [n, l],
        })),
        (t[7] = n),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Ds, Os;
function ks() {
  return (ks = e(() => {
    ((Ds = ve()), S(), (Os = W()));
  }))();
}
var As, js;
function Ms() {
  return (Ms = e(() => {
    ((As = `_surface_krmcx_2`), (js = { surface: As }));
  }))();
}
function Ns(e) {
  let t = (0, Rs.c)(81),
    { value: n, onChange: r, variant: i, scale: a, disabled: s, disabledReason: c, config: l } = e,
    u = i === void 0 ? `toolbar` : i,
    d = a === void 0 ? `spreadsheet` : a,
    f;
  t[0] === l ? (f = t[1]) : ((f = l === void 0 ? { state: `enabled` } : l), (t[0] = l), (t[1] = f));
  let m = f,
    h = te(),
    g;
  t[2] === m ? (g = t[3]) : ((g = Oe(m)), (t[2] = m), (t[3] = g));
  let v = g,
    y;
  t[4] === v ? (y = t[5]) : ((y = { key: v, open: !1 }), (t[4] = v), (t[5] = y));
  let [b, x] = (0, zs.useState)(y),
    S = b.key === v && b.open,
    C;
  t[6] === v ? (C = t[7]) : ((C = (e) => x({ key: v, open: e })), (t[6] = v), (t[7] = C));
  let w = C,
    T;
  t[8] === s ? (T = t[9]) : ((T = (e, t) => !s && Ge(e, t, { min: 1, max: 400 })), (t[8] = s), (t[9] = T));
  let E = ut(m, r, T),
    D = Math.max(1, m.options?.min ?? 1),
    O = Math.min(400, m.options?.max ?? 400),
    k = m.options?.allowCustom !== !1,
    A = m.reason ?? c,
    j;
  t[10] === h
    ? (j = t[11])
    : ((j = h.formatMessage({
        id: `artifactEditor.fontSize`,
        defaultMessage: `Font size`,
        description: `Open font size presets`,
      })),
      (t[10] = h),
      (t[11] = j));
  let M = j,
    N;
  t[12] === d
    ? (N = t[13])
    : ((N = d === `presentation` ? [72, 48, 36, 28, 20] : [40, 24, 18, 13, 11]), (t[12] = d), (t[13] = N));
  let P, F, ee, I, R, ne, z, B, V, re, ie, ae, H;
  if (
    t[14] !== k ||
    t[15] !== E ||
    t[16] !== m.options ||
    t[17] !== m.state ||
    t[18] !== s ||
    t[19] !== A ||
    t[20] !== h ||
    t[21] !== M ||
    t[22] !== O ||
    t[23] !== D ||
    t[24] !== S ||
    t[25] !== v ||
    t[26] !== w ||
    t[27] !== N ||
    t[28] !== n ||
    t[29] !== u
  ) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = N.map(Ls),
        r = k ? e : [];
      m.options?.presets &&
        (r = m.options.presets.map((t) => ({
          value: t,
          label:
            e.find((e) => e.value === t)?.label ?? (0, $.jsx)($.Fragment, { children: h.formatNumber(t) }),
        })));
      let i;
      t[43] !== O || t[44] !== D
        ? ((i = (e) => e.value >= D && e.value <= O), (t[43] = O), (t[44] = D), (t[45] = i))
        : (i = t[45]);
      let a = r.filter(i),
        c = s || m.state !== `enabled` || (!k && a.length === 0);
      if (m.state === `hidden`) {
        H = null;
        break bb0;
      }
      if (u === `field` && k) {
        H = (0, $.jsx)(
          bs,
          { disabled: c, disabledReason: A, label: M, value: n, onChange: E, min: D, max: O, presets: a },
          v,
        );
        break bb0;
      }
      ((P = o),
        (F = v),
        (ee = `bottom`),
        (I = `start`),
        (R = S),
        (ne = w),
        (z = c),
        (B = Is),
        (V = `${js.surface} pointer-events-auto min-w-50`),
        (re = `menuBounded`));
      let l = u === `field` ? `field` : `ghostActive`,
        d = u === `field` ? `field` : `formatToolbar`,
        f = c ? A : void 0,
        g = c ? A : void 0,
        y;
      t[46] === n
        ? (y = t[47])
        : ((y =
            n ??
            (0, $.jsx)(_, {
              id: `artifactEditor.mixed`,
              defaultMessage: `Mixed`,
              description: `A formatting value differs across selected cells or objects`,
            })),
          (t[46] = n),
          (t[47] = y));
      let b;
      (t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((b = (0, $.jsx)(p, {})), (t[48] = b))
        : (b = t[48]),
        t[49] !== c || t[50] !== M || t[51] !== l || t[52] !== d || t[53] !== f || t[54] !== g || t[55] !== y
          ? ((ie = (0, $.jsxs)(qt, {
              className: js.surface,
              color: l,
              contentLayout: `dropdown`,
              size: d,
              "aria-label": M,
              disabled: c,
              "aria-description": f,
              title: g,
              children: [y, b],
            })),
            (t[49] = c),
            (t[50] = M),
            (t[51] = l),
            (t[52] = d),
            (t[53] = f),
            (t[54] = g),
            (t[55] = y),
            (t[56] = ie))
          : (ie = t[56]));
      let x;
      (t[57] === E
        ? (x = t[58])
        : ((x = (e) => (0, $.jsx)(L.Item, { onSelect: () => E(e.value), children: e.label }, e.value)),
          (t[57] = E),
          (t[58] = x)),
        (ae = a.map(x)));
    }
    ((t[14] = k),
      (t[15] = E),
      (t[16] = m.options),
      (t[17] = m.state),
      (t[18] = s),
      (t[19] = A),
      (t[20] = h),
      (t[21] = M),
      (t[22] = O),
      (t[23] = D),
      (t[24] = S),
      (t[25] = v),
      (t[26] = w),
      (t[27] = N),
      (t[28] = n),
      (t[29] = u),
      (t[30] = P),
      (t[31] = F),
      (t[32] = ee),
      (t[33] = I),
      (t[34] = R),
      (t[35] = ne),
      (t[36] = z),
      (t[37] = B),
      (t[38] = V),
      (t[39] = re),
      (t[40] = ie),
      (t[41] = ae),
      (t[42] = H));
  } else
    ((P = t[30]),
      (F = t[31]),
      (ee = t[32]),
      (I = t[33]),
      (R = t[34]),
      (ne = t[35]),
      (z = t[36]),
      (B = t[37]),
      (V = t[38]),
      (re = t[39]),
      (ie = t[40]),
      (ae = t[41]),
      (H = t[42]));
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  t[59] !== k || t[60] !== E || t[61] !== h || t[62] !== O || t[63] !== D || t[64] !== w || t[65] !== n
    ? ((U =
        k &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(L.Separator, {}),
            (0, $.jsx)(L.ItemSlot, {
              asChild: !0,
              onSelect: Fs,
              children: (0, $.jsx)(`div`, {
                className: `p-1`,
                onFocus: Ps,
                onKeyDownCapture: (e) => {
                  if (e.key === `Escape`) {
                    let t = e.currentTarget.querySelector(`input`);
                    t && (t.value = t.defaultValue);
                    return;
                  }
                  (e.stopPropagation(),
                    e.key === `Enter` &&
                      !e.nativeEvent.isComposing &&
                      (e.preventDefault(), e.currentTarget.querySelector(`input`)?.blur(), w(!1)));
                },
                children: (0, $.jsx)(
                  ke,
                  {
                    variant: `field`,
                    type: `number`,
                    min: D,
                    max: O,
                    step: `any`,
                    defaultValue: n ?? ``,
                    "aria-label": h.formatMessage({
                      id: `artifactEditor.customFontSize`,
                      defaultMessage: `Custom font size`,
                      description: `Enter a font size in the artifact font size menu`,
                    }),
                    placeholder: h.formatMessage({
                      id: `artifactEditor.mixed`,
                      defaultMessage: `Mixed`,
                      description: `A formatting value differs across selected cells or objects`,
                    }),
                    onBlur: (e) => {
                      if (e.currentTarget.parentElement?.contains(e.relatedTarget)) return;
                      let t = e.currentTarget.valueAsNumber;
                      Number.isFinite(t) && t >= D && t <= O && t !== n
                        ? E(t)
                        : (e.currentTarget.value = e.currentTarget.defaultValue);
                    },
                  },
                  n,
                ),
              }),
            }),
          ],
        })),
      (t[59] = k),
      (t[60] = E),
      (t[61] = h),
      (t[62] = O),
      (t[63] = D),
      (t[64] = w),
      (t[65] = n),
      (t[66] = U))
    : (U = t[66]);
  let oe;
  return (
    t[67] !== P ||
    t[68] !== F ||
    t[69] !== ee ||
    t[70] !== I ||
    t[71] !== R ||
    t[72] !== ne ||
    t[73] !== z ||
    t[74] !== B ||
    t[75] !== V ||
    t[76] !== re ||
    t[77] !== ie ||
    t[78] !== ae ||
    t[79] !== U
      ? ((oe = (0, $.jsxs)(
          P,
          {
            side: ee,
            align: I,
            open: R,
            onOpenChange: ne,
            disabled: z,
            contentRef: B,
            contentClassName: V,
            contentWidth: re,
            triggerButton: ie,
            children: [ae, U],
          },
          F,
        )),
        (t[67] = P),
        (t[68] = F),
        (t[69] = ee),
        (t[70] = I),
        (t[71] = R),
        (t[72] = ne),
        (t[73] = z),
        (t[74] = B),
        (t[75] = V),
        (t[76] = re),
        (t[77] = ie),
        (t[78] = ae),
        (t[79] = U),
        (t[80] = oe))
      : (oe = t[80]),
    oe
  );
}
function Ps(e) {
  e.target === e.currentTarget && e.currentTarget.querySelector(`input`)?.focus();
}
function Fs(e) {
  return e.preventDefault();
}
function Is(e) {
  return e?.setAttribute(`data-popcorn-edit-toolbar-root`, `true`);
}
function Ls(e, t) {
  return {
    value: e,
    label: (0, $.jsxs)(`span`, {
      className: `flex w-full items-center justify-between gap-6`,
      children: [
        (0, $.jsx)(_, {
          id: `artifactEditor.sizePresetLabel`,
          defaultMessage: `{index, select, 0 {Display} 1 {Header} 2 {Subheading} 3 {Body} other {Small}}`,
          values: { index: t },
          description: `Names of artifact font size presets`,
        }),
        (0, $.jsx)(`span`, { className: `text-secondary`, children: e }),
      ],
    }),
  };
}
var Rs, zs, $;
function Bs() {
  return (Bs = e(() => {
    ((Rs = ve()), Re(), gt(), (zs = G()), se(), r(), I(), De(), Ts(), Kt(), Ms(), ($ = W()));
  }))();
}
export {
  qi as $,
  Zt as $t,
  ho as A,
  Kn as At,
  fa as B,
  jn as Bt,
  Ho as C,
  Qr as Ct,
  Mo as D,
  Lr as Dt,
  To as E,
  Ir as Et,
  ao as F,
  Wn as Ft,
  ra as G,
  mn as Gt,
  da as H,
  kn as Ht,
  eo as I,
  Rn as It,
  aa as J,
  vn as Jt,
  sa as K,
  yn as Kt,
  Pa as L,
  Vn as Lt,
  oo as M,
  Jn as Mt,
  mo as N,
  Zn as Nt,
  yo as O,
  nr as Ot,
  io as P,
  Hn as Pt,
  Xi as Q,
  _n as Qt,
  ma as R,
  Pn as Rt,
  Yo as S,
  ei as St,
  wo as T,
  Yr as Tt,
  la as U,
  An as Ut,
  pa as V,
  Mn as Vt,
  ua as W,
  Fn as Wt,
  $i as X,
  En as Xt,
  ta as Y,
  dn as Yt,
  Qi as Z,
  fn as Zt,
  $o as _,
  hi as _t,
  Es as a,
  zi as at,
  Qo as b,
  ri as bt,
  Ts as c,
  Ii as ct,
  fs as d,
  ki as dt,
  Qt as en,
  Yi as et,
  hs as f,
  Mi as ft,
  as as g,
  yi as gt,
  is as h,
  Oi as ht,
  js as i,
  Hi as it,
  Co as j,
  qn as jt,
  go as k,
  rr as kt,
  gs as l,
  Ni as lt,
  us as m,
  vi as mt,
  Bs as n,
  Ki as nt,
  ks as o,
  Bi as ot,
  ds as p,
  pi as pt,
  na as q,
  pn as qt,
  Ms as r,
  Vi as rt,
  bs as s,
  Ri as st,
  Ns as t,
  Ui as tt,
  ys as u,
  Fi as ut,
  rs as v,
  oi as vt,
  Uo as w,
  Br as wt,
  Wo as x,
  ti as xt,
  Xo as y,
  ii as yt,
  va as z,
  Nn as zt,
};
//# sourceMappingURL=inspector-font-size-menu-d8e527be0390.js.map
