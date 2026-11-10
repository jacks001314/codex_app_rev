import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $At as n,
  $kt as r,
  AAt as i,
  BAt as a,
  CH as o,
  DB as s,
  FAt as c,
  FBt as l,
  FNt as u,
  G_ as d,
  HAt as f,
  IAt as p,
  K_ as m,
  Kx as h,
  LAt as g,
  LNt as _,
  MAt as v,
  MNt as y,
  NAt as b,
  NNt as x,
  OB as S,
  PAt as C,
  PBt as w,
  S4 as T,
  TY as E,
  UAt as D,
  VAt as O,
  WAt as k,
  XOt as A,
  Y3 as j,
  Z3 as M,
  _v as N,
  _y as P,
  av as F,
  ck as I,
  cv as L,
  dv as R,
  eAt as ee,
  ejt as z,
  fv as B,
  gv as V,
  gy as H,
  hv as U,
  iAt as te,
  iv as ne,
  jAt as re,
  jH as ie,
  lk as ae,
  lv as oe,
  mv as se,
  nAt as ce,
  nv as le,
  okt as ue,
  ov as de,
  pv as fe,
  qx as pe,
  rAt as me,
  rk as he,
  rv as ge,
  sv as _e,
  tAt as ve,
  tjt as ye,
  tk as be,
  tkt as xe,
  tv as Se,
  uk as Ce,
  uv as we,
  vv as Te,
  x4 as Ee,
  zAt as De,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Oe,
  AEn as ke,
  Cqr as Ae,
  DEn as je,
  EEn as Me,
  FEn as Ne,
  IEn as Pe,
  LEn as Fe,
  PEn as Ie,
  REn as Le,
  ZLn as Re,
  _qr as ze,
  cZr as Be,
  jEn as Ve,
  kEn as He,
  na as Ue,
  pZr as We,
  ra as Ge,
  vqr as Ke,
  xEn as qe,
  yqr as Je,
  zEn as Ye,
} from "./app-initial-ad16eaadf81f.js";
import { n as Xe, t as Ze } from "./PopcornIcon-5d523be2a579.js";
import {
  I as Qe,
  N as $e,
  O as et,
  P as tt,
  R as nt,
  a as rt,
  f as it,
  g as at,
  h as ot,
  i as st,
  k as ct,
  s as lt,
  t as ut,
  u as dt,
} from "./PopcornIcons-6c48726ff00b.js";
import {
  C as ft,
  Ft as pt,
  It as mt,
  Jt as ht,
  Lt as gt,
  Nt as _t,
  S as vt,
  Xt as yt,
  m as bt,
} from "./artifact-source-bootstrap-ffecfba8d45d.js";
import {
  Dx as xt,
  Ed as St,
  Sd as Ct,
  Tx as wt,
  ad as Tt,
  fd as Et,
  hd as Dt,
  md as Ot,
  wd as kt,
  xx as At,
} from "./app-primary-3e00728c2a4c.js";
import { i as jt, t as Mt } from "./drawing-resize-handles-ea28c73efff1.js";
import { n as Nt, r as Pt, t as Ft } from "./PopcornColorPicker-f42ad8a2beaa.js";
import {
  a as It,
  c as Lt,
  g as Rt,
  h as zt,
  i as Bt,
  l as Vt,
  o as Ht,
  s as Ut,
} from "./artifact-comments-header-2d72a86f659a.js";
import { a as Wt, i as Gt, o as Kt } from "./artifact-annotation-batch-controls-a9289185dbeb.js";
import { a as qt } from "./PopcornCommentMessageLayout-b62f81b2e6df.js";
import { a as Jt, i as Yt } from "./inspector-color-field-eb70b6035b23.js";
import { n as Xt, r as Zt } from "./PopcornCommentMarker-78ea1defd260.js";
function Qt(e) {
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
function $t(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e) {
    let e = Qt(r.target),
      i = n.get(e) ?? 0;
    (t.set(r.annotationId, i), n.set(e, i + 1));
  }
  return t;
}
function en() {
  return (en = e(() => {}))();
}
function tn({
  icon: e,
  hideLabel: t,
  isActive: n,
  label: r,
  subLabel: i,
  iconClassName: a,
  labelClassName: o,
  subLabelId: s,
}) {
  return (0, W.jsxs)(W.Fragment, {
    children: [
      e
        ? (0, W.jsx)(e, {
            className: y(
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
        : (0, W.jsx)(`span`, {
            className: y(`truncate text-sm`, { "text-token-text-primary": !n, "text-info": n }, o),
            children: r,
          }),
      i == null
        ? null
        : (0, W.jsxs)(W.Fragment, {
            children: [t ? null : ` `, (0, W.jsx)(`span`, { id: s, className: `contents`, children: i })],
          }),
    ],
  });
}
function nn({ children: e, ariaLabel: t, onKeyDown: n }) {
  return (0, W.jsx)(`div`, {
    role: `toolbar`,
    "aria-label": t,
    ref: (e) => {
      if (!e) return;
      let t = sn(e);
      cn(t, t.find((e) => e === document.activeElement) ?? t.find((e) => e.tabIndex === 0));
    },
    className: `relative m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl bg-surface-elevated-secondary/90 p-1 font-sans text-sm shadow-lg-stronger ring-1 ring-border-subtle backdrop-blur-sm select-none ring-inset`,
    onFocusCapture: (e) => {
      e.target instanceof HTMLButtonElement && e.target.matches(un) && cn(sn(e.currentTarget), e.target);
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
      let r = e.target.closest(un);
      if (!r || !e.currentTarget.contains(r)) return;
      let i = sn(e.currentTarget),
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
      (e.preventDefault(), e.stopPropagation(), cn(i, o), o?.focus());
    },
    children: e,
  });
}
function rn({
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
  let f = (0, ln.useId)(),
    p = (0, W.jsx)(`button`, {
      type: `button`,
      tabIndex: -1,
      "data-toolbar-action": e,
      className: y(
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
      children: (0, W.jsx)(tn, {
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
  return s ? (0, W.jsx)(zt, { label: t, disabled: i, className: `inline-flex h-full`, children: p }) : p;
}
function an({
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
  let u = (0, ln.useId)(),
    [d, f] = (0, ln.useState)(!1);
  (0, ln.useEffect)(() => {
    r && f(!1);
  }, [r]);
  let p = (0, W.jsx)(me, {
    asChild: !0,
    "aria-describedby": !i && n && o != null ? u : void 0,
    children: (0, W.jsx)(`button`, {
      type: `button`,
      tabIndex: -1,
      "data-toolbar-action": e,
      className: `flex h-full cursor-interaction items-center gap-2 rounded-md px-2 hover:bg-primary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:bg-primary-ghost-active data-[state=open]:bg-primary-ghost-hover`,
      "aria-label": n ? t : void 0,
      "aria-description": i,
      disabled: r,
      title: i ?? (n ? t : void 0),
      children: (0, W.jsx)(tn, { icon: a, hideLabel: n, label: t, subLabel: o, subLabelId: u }),
    }),
  });
  return (0, W.jsxs)(ce, {
    open: d && !r,
    onOpenChange: (e) => f(e && !r),
    children: [
      n ? (0, W.jsx)(zt, { label: t, disabled: d || r, className: `inline-flex h-full`, children: p }) : p,
      l
        ? (0, W.jsx)(ve, {
            container: l,
            children: (0, W.jsx)(ee, {
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
function on() {
  return (0, W.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": `vertical`,
    className: `mx-1 h-3 w-px bg-token-border-default`,
  });
}
function sn(e) {
  return Array.from(e.querySelectorAll(un));
}
function cn(e, t = e[0]) {
  for (let n of e) n.tabIndex = n === t ? 0 : -1;
}
var ln, W, un;
function dn() {
  return (dn = e(() => {
    (te(), x(), (ln = l()), Rt(), (W = _()), (un = `button[data-toolbar-action]:not([disabled])`));
  }))();
}
function fn(e, t, n) {
  return e + (t - n) / 2;
}
function pn(e, t = `top-right`, n = 0) {
  let r = n * Tn;
  return e.width === 0 && e.height === 0
    ? { left: e.left, top: e.top + r }
    : {
        left: t.endsWith(`-left`) ? e.left : e.left + e.width,
        top: Math.max(13, t.startsWith(`bottom-`) ? e.top + e.height : e.top) + r,
      };
}
function mn(e, t) {
  let n = { ...e };
  for (let e of [...t].sort((e, t) => e.top - t.top))
    Math.abs(n.left - e.left) < 26 && Math.abs(n.top - e.top) < 26 && (n.top = e.top + 26);
  return n;
}
function hn({
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
  let [f, p] = (0, Sn.useState)(!1),
    m = s != null || c != null || l != null || u != null || d != null,
    h = y(
      `absolute z-30 flex items-center justify-center border-0 bg-transparent p-0`,
      m ? `pointer-events-auto cursor-pointer` : `pointer-events-none`,
    ),
    g = {
      color: n ?? Ct,
      left: e.left,
      top: e.top,
      width: 26,
      height: 26,
      zIndex: i ? 31 : void 0,
      transform: `translate(-50%, -50%)`,
    },
    _ = (0, G.jsxs)(`span`, {
      className: `pointer-events-none relative flex size-full origin-bottom-left items-center justify-center transition-transform duration-basic ease-enter-snappy motion-reduce:transition-none`,
      style: { scale: i || f ? Et : 1 },
      children: [
        (0, G.jsx)(kt, { appearance: `review`, className: `absolute inset-0 size-full` }),
        t != null &&
          (0, G.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none relative z-10 flex size-4 items-center justify-center text-white`,
            children: t,
          }),
      ],
    });
  return m
    ? (0, G.jsx)(`button`, {
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
    : (0, G.jsx)(`div`, { "data-testid": a, className: h, style: g, title: o, children: _ });
}
function gn({
  bounds: e,
  containerElement: t,
  collisionBoundaryElement: n,
  label: r = `Ask ChatGPT`,
  assistantIcon: i,
  onClick: o,
  onShown: s,
  onCommentClick: c,
  placement: l = `bottom-right`,
  shortcutScopeElement: u,
  testId: d = `popcorn-ask-for-edit-button`,
}) {
  let f = (0, Sn.useRef)(!1),
    p = (0, Sn.useMemo)(
      () =>
        t
          ? {
              contextElement: n ?? t,
              getBoundingClientRect: () => {
                let n = mt(t, e.left, e.top),
                  r = mt(t, e.left + e.width, e.top + e.height);
                return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
              },
            }
          : null,
      [e.height, e.left, e.top, e.width, t, n],
    ),
    m = n ?? t,
    {
      refs: h,
      x: _,
      y: v,
      strategy: y,
      isPositioned: b,
    } = D({
      placement: _n(l),
      strategy: `absolute`,
      middleware: [
        a(En),
        ...(n ? [g({ padding: Dn, boundary: n })] : []),
        O({ padding: Dn, ...(m ? { boundary: m } : {}), ...(n ? { crossAxis: !0 } : {}) }),
      ],
      whileElementsMounted: k,
    }),
    x = !t || (b && _ != null && v != null);
  (yn({ onClick: o, shortcutScopeElement: u }),
    (0, Sn.useEffect)(() => {
      x && !f.current && s != null && ((f.current = !0), s());
    }, [x, s]),
    (0, Sn.useEffect)(() => {
      h.setReference(p);
    }, [h, p]));
  let S = bn(),
    C = (e) => {
      (e.preventDefault(), e.stopPropagation());
    },
    w = vn(e, l),
    T = t
      ? _ != null && v != null
        ? { fontFamily: wn, position: y, left: _, top: v, visibility: x ? void 0 : `hidden` }
        : { ...w, visibility: `hidden` }
      : w,
    E = (0, G.jsxs)(G.Fragment, {
      children: [
        (0, G.jsx)(`span`, { className: `h-[18px]`, style: { fontFamily: wn }, children: r }),
        (0, G.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `inline-flex h-[18px] items-center rounded-full bg-token-bg-secondary px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-token-text-secondary`,
          style: { fontFamily: wn },
          children: S,
        }),
      ],
    });
  return c == null
    ? (0, G.jsx)(`button`, {
        ref: h.setFloating,
        type: `button`,
        "aria-label": r,
        "data-popcorn-ask-for-edit": `true`,
        "data-popcorn-ask-for-edit-placement": l,
        "data-testid": d,
        className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light hover:bg-token-bg-secondary`,
        style: T,
        onMouseDown: C,
        onClick: (e) => {
          (C(e), o?.(`ask_codex_button`));
        },
        children: E,
      })
    : o == null
      ? (0, G.jsx)(`div`, {
          ref: h.setFloating,
          "data-testid": `${d}-toolbar`,
          className: `pointer-events-auto absolute z-40`,
          style: T,
          children: (0, G.jsx)(nn, {
            ariaLabel: `Selection actions`,
            children: (0, G.jsx)(rn, {
              actionId: `add-comment`,
              label: `Add comment`,
              subLabel: (0, G.jsx)(Cn, {
                "aria-hidden": `true`,
                className: `size-4 text-token-text-primary`,
              }),
              onMouseDown: C,
              onClick: (e) => {
                (C(e), c());
              },
            }),
          }),
        })
      : (0, G.jsxs)(`div`, {
          ref: h.setFloating,
          role: `toolbar`,
          "aria-label": `Selection actions`,
          "data-testid": `${d}-toolbar`,
          className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max items-center gap-[3px] rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light`,
          style: T,
          children: [
            (0, G.jsxs)(`button`, {
              type: `button`,
              "aria-label": r,
              "data-popcorn-ask-for-edit": `true`,
              "data-popcorn-ask-for-edit-placement": l,
              "data-testid": d,
              className: `inline-flex h-[18px] cursor-interaction items-center gap-2 border-0 bg-transparent p-0 text-inherit`,
              onMouseDown: C,
              onClick: (e) => {
                (C(e), o(`ask_codex_button`));
              },
              children: [
                i != null &&
                  (0, G.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `inline-flex size-4 items-center`,
                    children: i,
                  }),
                E,
              ],
            }),
            (0, G.jsx)(`span`, { "aria-hidden": `true`, className: `h-4 w-px bg-token-border-light` }),
            (0, G.jsxs)(`button`, {
              type: `button`,
              "aria-label": `Add comment`,
              "data-testid": `${d}-comment`,
              className: `inline-flex h-[18px] shrink-0 cursor-interaction items-center justify-center gap-1 rounded-full border-0 bg-transparent p-0 text-inherit hover:bg-token-bg-tertiary`,
              onMouseDown: C,
              onClick: (e) => {
                (C(e), c());
              },
              children: [
                (0, G.jsx)(`span`, { children: `Add comment` }),
                (0, G.jsx)(Cn, { "aria-hidden": `true`, className: `size-4 opacity-65` }),
              ],
            }),
          ],
        });
}
function _n(e) {
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
function vn(e, t) {
  switch (t) {
    case `bottom-left`:
      return { fontFamily: wn, left: e.left, top: e.top + e.height + En };
    case `bottom-right`:
      return {
        fontFamily: wn,
        left: e.left + e.width,
        top: e.top + e.height + En,
        transform: `translateX(-100%)`,
      };
    case `top-left`:
      return { fontFamily: wn, left: e.left, top: e.top - En, transform: `translateY(-100%)` };
    case `top-right`:
      return {
        fontFamily: wn,
        left: e.left + e.width,
        top: e.top - En,
        transform: `translate(-100%, -100%)`,
      };
  }
}
function yn({ enabled: e = !0, onClick: t, shortcutScopeElement: n }) {
  (0, Sn.useEffect)(() => {
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
function bn() {
  return typeof navigator < `u` && /Win|Linux/.test(navigator.platform) ? `Ctrl Shift X` : `⇧⌘X`;
}
function xn({
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
  return (0, G.jsx)(`div`, {
    "data-testid": c,
    className: y(`pointer-events-none absolute box-border`),
    style: {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height,
      ...Ot({ appearance: t, fillOnly: r, borderWidthPx: i, borderColor: a, fillColor: o, shadow: s }),
      ...(n == null ? void 0 : { borderRadius: n }),
    },
  });
}
var Sn, G, Cn, wn, Tn, En, Dn;
function On() {
  return (On = e(() => {
    (De(),
      P(),
      x(),
      (Sn = l()),
      St(),
      dn(),
      Xe(),
      Dt(),
      (G = _()),
      (Cn = Ze(H)),
      (wn = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif`),
      (Tn = 20),
      (En = 6),
      (Dn = 8));
  }))();
}
function kn(e) {
  let [t] = e;
  return t
    ? e.length === 1
      ? `M ${t.x} ${t.y}`
      : e.reduce((e, t, n) => `${e}${n === 0 ? `` : ` `}${n === 0 ? `M` : `L`} ${t.x} ${t.y}`, ``)
    : ``;
}
function An(e) {
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
function jn(e) {
  return An(e.flatMap((e) => e.points));
}
function Mn(e, { paddingPx: t = 24, minSizePx: n = 96 } = {}) {
  let r = e.width + t * 2,
    i = e.height + t * 2,
    a = Math.max(n, r),
    o = Math.max(n, i);
  return { left: e.left - (a - e.width) / 2, top: e.top - (o - e.height) / 2, width: a, height: o };
}
function Nn(e, t) {
  let n = Math.min(t.width, e.width),
    r = Math.min(t.height, e.height);
  return {
    left: Math.min(Math.max(0, e.left), Math.max(0, t.width - n)),
    top: Math.min(Math.max(0, e.top), Math.max(0, t.height - r)),
    width: n,
    height: r,
  };
}
function Pn({ drawingId: e, screenshot: t, markerViewportPoint: n, viewportSize: r }) {
  return {
    localBrowserCommentMetadata: {
      kind: `region`,
      ...(n == null ? {} : { markerViewportPoint: { ...n } }),
      ...(r == null ? {} : { viewportSize: { ...r } }),
    },
    localBrowserScreenshot: { ...t, commentId: e },
  };
}
async function Fn({
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
var In;
function Ln() {
  return (Ln = e(() => {
    In = `#111111`;
  }))();
}
function Rn(e, t) {
  return e.points.map((e) => t(e)).filter((e) => e != null);
}
function zn({ stroke: e, projectPoint: t }) {
  let n = Rn(e, t);
  if (n.length === 0) return null;
  if (n.length === 1) {
    let [t] = n;
    return t ? (0, Hn.jsx)(`circle`, { cx: t.x, cy: t.y, r: e.strokeWidth / 2, fill: e.color }) : null;
  }
  return (0, Hn.jsx)(`path`, {
    d: kn(n),
    fill: `none`,
    stroke: e.color,
    strokeWidth: e.strokeWidth,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  });
}
function Bn({ strokes: e, projectPoint: t, testId: n, clipBounds: r }) {
  let i = `popcorn-drawing-overlay-${(0, Vn.useId)().replace(/[:]/g, ``)}`;
  return e.length === 0
    ? null
    : (0, Hn.jsxs)(`svg`, {
        "data-testid": n,
        className: `pointer-events-none absolute inset-0 z-20 overflow-hidden`,
        width: `100%`,
        height: `100%`,
        children: [
          r
            ? (0, Hn.jsx)(`defs`, {
                children: (0, Hn.jsx)(`clipPath`, {
                  id: i,
                  children: (0, Hn.jsx)(`rect`, { x: r.left, y: r.top, width: r.width, height: r.height }),
                }),
              })
            : null,
          (0, Hn.jsx)(`g`, {
            clipPath: r ? `url(#${i})` : void 0,
            children: e.map((e, n) =>
              (0, Hn.jsx)(zn, { stroke: e, projectPoint: t }, `${n}-${e.points.length}`),
            ),
          }),
        ],
      });
}
var Vn, Hn;
function Un() {
  return (Un = e(() => {
    ((Vn = l()), Ln(), (Hn = _()));
  }))();
}
function Wn(e) {
  return ((Gn += 1), `${e}-${Date.now().toString(36)}-${Gn.toString(36)}`);
}
var Gn;
function Kn() {
  return (Kn = e(() => {
    Gn = 0;
  }))();
}
function qn({ active: e, disabled: t = !1, onClick: n, label: r, activeLabel: i = r, icon: a, testId: o }) {
  let s = (0, Zn.useRef)(null),
    [c, l] = (0, Zn.useState)(!1),
    [u, d] = (0, Zn.useState)(!1);
  (0, Zn.useEffect)(() => {
    if (e) return;
    (l(!1), d(!1));
    let t = s.current;
    typeof document < `u` && t != null && t === document.activeElement && t.blur();
  }, [e]);
  let f = u && !c ? 15 : 10,
    p = `color-mix(in srgb, var(--color-token-bg-primary) ${100 - f}%, var(--color-token-charts-blue, #339cff) ${f}%)`,
    m = e && i != null ? i : r;
  return (0, Qn.jsx)(`button`, {
    ref: s,
    type: `button`,
    "data-testid": o,
    "aria-label": m,
    "aria-pressed": e,
    disabled: t,
    className: y(
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
    children: (0, Qn.jsxs)(`span`, {
      className: y(`flex min-w-0 items-center`, e ? `justify-start` : `w-full justify-center`),
      children: [
        a({
          className: y(
            `icon-sm shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
            e ? `-translate-x-0.5` : `translate-x-0`,
          ),
        }),
        (0, Qn.jsx)(`span`, {
          className: y(
            `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
            e ? `ms-1.5 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
          ),
          children: m,
        }),
      ],
    }),
  });
}
function Jn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-annotation-button` }) {
  return (0, Qn.jsx)(qn, {
    active: e,
    activeLabel: `Annotating`,
    disabled: t,
    onClick: n,
    label: `Annotation`,
    icon: ut,
    testId: r,
  });
}
function Yn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-presentation-comments-button` }) {
  return (0, Qn.jsx)(`button`, {
    type: `button`,
    "aria-label": `Comments`,
    "aria-expanded": e,
    "data-testid": r,
    disabled: t,
    onClick: n,
    className: `enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary text-token-text-tertiary inline-flex size-8 items-center justify-center rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
    children: (0, Qn.jsx)(at, { className: `icon-sm` }),
  });
}
function Xn({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-drawing-button` }) {
  return (0, Qn.jsx)(qn, { active: e, disabled: t, onClick: n, label: `Drawing`, icon: ct, testId: r });
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    (x(), (Zn = l()), nt(), (Qn = _()));
  }))();
}
function er({ text: e, hasMultipleBlocks: t, measureElement: n, surfaceElement: r }) {
  let i = e.trim();
  if (i.length === 0) return !1;
  if (t) return !0;
  let a = tr(r),
    o = nr(e, n);
  return a == null || o == null ? i.length >= Mr : o + Nr > a;
}
function tr(e) {
  if (e == null) return null;
  let t = e.getBoundingClientRect();
  if (t.width === 0) return null;
  let n = e.querySelector(`[data-browser-comment-submit]`)?.getBoundingClientRect().width ?? Or;
  return t.width - Ar - jr - n - kr;
}
function nr(e, t) {
  return t == null ? null : ((t.textContent = e), t.getBoundingClientRect().width);
}
function rr(e) {
  return Math.max(1, e.split(/\r\n|\r|\n/).length);
}
function ir(e, t) {
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
function ar(e) {
  if (e == null) return;
  let t = e.ownerDocument;
  (or(t), e.classList.remove(Pr));
  let n = t.defaultView;
  if (n == null) {
    e.classList.add(Pr);
    return;
  }
  let r = Lr.get(e);
  r != null && n.cancelAnimationFrame(r);
  let i = n.requestAnimationFrame(() => {
    (Lr.delete(e), e.classList.add(Pr));
  });
  Lr.set(e, i);
}
function or(e) {
  if (e.getElementById(Fr) != null) return;
  let t = e.createElement(`style`);
  ((t.id = Fr), (t.textContent = Ir), e.head.appendChild(t));
}
var K,
  sr,
  q,
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
  Ir,
  Lr,
  Rr;
function zr() {
  return (zr = e(() => {
    (De(),
      x(),
      (K = l()),
      (sr = u()),
      nt(),
      On(),
      (q = _()),
      (cr = 294),
      (lr = 336),
      (ur = 320),
      (dr = 138),
      (fr = 8),
      (pr = 12),
      (mr = 4),
      (hr = 112),
      (gr = 44),
      (_r = 24),
      (vr = 20),
      (yr = 72),
      (br = y(
        `text-token-dropdown-foreground placeholder:text-token-description-foreground min-h-0 w-full resize-none border-0 bg-transparent p-0 font-sans leading-normal outline-none`,
        `appearance-none shadow-none [text-decoration:none]`,
        `focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent`,
        `[outline:none] [box-shadow:none] [-webkit-appearance:none]`,
        `!min-h-0 max-h-full flex-1 overflow-y-auto text-[length:var(--codex-chat-font-size,13px)] leading-6`,
      )),
      (xr = { "--codex-chat-font-size": `13px`, fontSize: `var(--codex-chat-font-size, 13px)` }),
      (Sr = { "--codex-chat-font-size": `14px`, fontSize: `var(--codex-chat-font-size, 14px)` }),
      (Cr = `pointer-events-none absolute inset-x-0 top-0 flex flex-col overflow-visible bg-transparent`),
      (wr = `pointer-events-auto relative w-full overflow-hidden bg-token-dropdown-background transition-[height] duration-150 ease-out motion-reduce:transition-none [background-color:var(--color-token-dropdown-background,var(--color-token-main-surface-primary,white))]`),
      (Tr = `absolute left-4 min-w-0 overflow-hidden transition-[width,top,bottom] duration-150 ease-out motion-reduce:transition-none`),
      (Er = `absolute right-3 bottom-2 left-2 flex origin-bottom-left items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`),
      (Dr = `pointer-events-none absolute top-0 left-0 whitespace-pre text-[length:var(--codex-chat-font-size,13px)] leading-5 font-sans opacity-0`),
      (Or = 28),
      (kr = 8),
      (Ar = 16),
      (jr = 8),
      (Mr = 40),
      (Nr = 12),
      (Pr = `browser-comment-popup-shake`),
      (Fr = `popcorn-annotation-editor-shake-style`),
      (Ir = `
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
      (Lr = new WeakMap()),
      (Rr = (0, K.forwardRef)(function (
        {
          anchorBounds: e,
          containerElement: t,
          collisionBoundaryElement: n = null,
          portalContainerElement: r = null,
          value: i,
          onChange: o,
          onCancel: s,
          onEscape: c = s,
          onSubmit: l,
          mode: u = `create`,
          allowDirectSubmitOnEdit: d = !1,
          defaultCreateSubmitMode: p = `direct`,
          savedSubmitDisabled: m = !1,
          dictationControls: h,
          placeholder: _ = `Describe a change or ask a question`,
          isComment: v = !1,
          commentComposer: b,
          nativeFileCommentLabel: x,
          onDelete: S,
          placement: C,
          onDictationBusyChange: w,
          testId: T = `popcorn-annotation-editor`,
        },
        E,
      ) {
        let A = (0, K.useRef)(null),
          j = (0, K.useRef)(null),
          M = (0, K.useRef)(null),
          N = (0, K.useRef)(null),
          [P, F] = (0, K.useState)(!1),
          [I, L] = (0, K.useState)(!1),
          R = u === `edit`,
          ee = !R && b != null,
          z = !R && v,
          B = ee || z,
          V = i.trim().length > 0,
          H = B && (V || z),
          U = H ? vr : _r,
          te = B && e != null && (e.width > 0 || e.height > 0),
          ne = p === `direct` ? `saved` : `direct`,
          re = I ? ne : p,
          ie = re === `direct`,
          ae = m && !R && !z,
          oe = !V || (ae && !ie),
          se = (...e) => {
            (ae && e[0] === `saved`) || l(...e);
          },
          ce = n ?? r ?? t,
          le = (0, K.useMemo)(() => (e ? pn(e, C) : null), [e, C]),
          ue = C?.endsWith(`-left`) ?? !1,
          de = (0, K.useMemo)(
            () =>
              !le || !t
                ? null
                : te && e
                  ? {
                      contextElement: ce ?? t,
                      getBoundingClientRect: () => {
                        let n = mt(t, e.left, e.top),
                          r = mt(t, e.left + e.width, e.top + e.height);
                        return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
                      },
                    }
                  : {
                      contextElement: ce ?? t,
                      getBoundingClientRect: () => {
                        let e = mt(t, le.left, le.top - gr / 2),
                          n = mt(t, le.left, le.top + gr / 2);
                        return new DOMRect(e.x, e.y, 0, n.y - e.y);
                      },
                    },
            [e, t, le, ce, te],
          ),
          fe = { fallbackPlacements: [`left-start`], placement: `right-start` };
        (ue && ((fe.fallbackPlacements = [`right-start`]), (fe.placement = `left-start`)),
          te && ((fe.fallbackPlacements = [`top-end`]), (fe.placement = `bottom-end`)));
        let {
            refs: pe,
            x: me,
            y: he,
            strategy: ge,
            update: _e,
          } = D({
            placement: fe.placement,
            strategy: `absolute`,
            middleware: [
              a(B ? pr : 20),
              g({ fallbackPlacements: fe.fallbackPlacements, padding: fr, ...(ce ? { boundary: ce } : {}) }),
              O({ crossAxis: !0, padding: fr, ...(ce ? { boundary: ce } : {}) }),
              f({
                padding: fr,
                ...(ce ? { boundary: ce } : {}),
                apply({ availableWidth: e, elements: t }) {
                  t.floating.style.maxWidth = `${Math.max(0, e)}px`;
                },
              }),
            ],
            whileElementsMounted: k,
          }),
          ve = z ? dr : hr,
          ye = P || H ? ve : gr,
          be = { top: he ?? void 0 };
        he != null && !te && (be.top = C == null ? he + (ve - ye) / 2 + mr : fn(he, gr, ye));
        let xe = (0, K.useCallback)(
          (e) => {
            if (((A.current = e), pe.setFloating(e), typeof E == `function`)) {
              E(e);
              return;
            }
            E && (E.current = e);
          },
          [E, pe],
        );
        if (
          ((0, K.useEffect)(() => {
            e && j.current?.focus();
          }, [e]),
          (0, K.useEffect)(() => {
            let e = ee ? A.current : j.current;
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
          }, [e, ee]),
          (0, K.useLayoutEffect)(() => {
            let e = j.current;
            if (!e) return;
            let t = rr(i),
              n =
                R ||
                er({
                  text: i,
                  hasMultipleBlocks: t > 1,
                  measureElement: N.current,
                  surfaceElement: M.current,
                });
            if (n !== P) {
              F(n);
              return;
            }
            if (n) {
              ((e.style.height = `0px`),
                (e.style.height = `${Math.min(Math.max(e.scrollHeight, t * U), yr)}px`));
              return;
            }
            e.style.height = `${U}px`;
          }, [R, P, U, i]),
          (0, K.useEffect)(() => {
            pe.setReference(de);
          }, [pe, de]),
          (0, K.useEffect)(() => {
            if (B) return;
            let e = (e) => {
                L(e.metaKey || e.ctrlKey);
              },
              t = () => {
                L(!1);
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
          }, [B]),
          (0, K.useEffect)(() => {
            e && _e?.();
          }, [e?.height, e?.left, e?.top, e?.width, i, P, _e]),
          !e)
        )
          return null;
        if (ee) {
          let e = (0, q.jsx)(`div`, {
            ref: xe,
            "data-testid": T,
            "data-popcorn-annotation-editor-placement": C,
            className: `pointer-events-auto z-40`,
            style: { position: ge, left: me ?? 0, top: he ?? 0, width: lr },
            onMouseDown: (e) => e.stopPropagation(),
            children: b,
          });
          return r == null ? e : (0, sr.createPortal)(e, r);
        }
        let Se = (e) => {
            let t = e?.isBusy ?? !1,
              n = e?.isDictating ?? !1,
              r = e?.dictationButton ?? null,
              a = e?.recordingOverlay ?? null,
              l = !B && !n && r != null && (P || !V),
              u = !B && !t && (P || V || r == null),
              f = (P && (R || r != null)) || H,
              m = f ? `top-2 bottom-11` : `top-2 bottom-2`,
              h = f ? Ar : 44;
            return (0, q.jsx)(`div`, {
              ref: xe,
              "data-testid": T,
              "data-popcorn-annotation-editor-placement": C,
              className: `pointer-events-auto z-40`,
              style: { position: ge, left: me ?? 0, top: be.top ?? 0, width: z ? ur : B ? lr : cr },
              onMouseDown: (e) => {
                e.stopPropagation();
              },
              children: (0, q.jsx)(`form`, {
                className: y(
                  `pointer-events-none relative w-full overflow-visible bg-transparent text-token-foreground`,
                  z ? `h-[138px]` : `h-[112px]`,
                ),
                style: H ? Sr : xr,
                onSubmit: (e) => {
                  (e.preventDefault(), !t && V && se(R ? `saved` : z ? `direct` : re, `button`));
                },
                children: (0, q.jsx)(`div`, {
                  className: Cr,
                  style: { height: ve },
                  children: (0, q.jsxs)(`div`, {
                    ref: M,
                    "data-browser-comment-editor-surface": !0,
                    className: y(
                      wr,
                      z
                        ? `@container rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] ring-1 ring-token-border-light backdrop-blur-[16px]`
                        : H
                          ? `@container rounded-[14px] shadow-md ring-1 ring-token-border-light backdrop-blur-[24px]`
                          : `rounded-[22px] shadow-md ring-1 ring-token-border-light`,
                    ),
                    style: {
                      height: ye,
                      backgroundColor: z
                        ? `color-mix(in srgb, var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white)) 85%, transparent)`
                        : `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
                    },
                    children: [
                      z &&
                        x != null &&
                        (0, q.jsxs)(`div`, {
                          className: `absolute inset-x-2 top-2 flex h-[26px] items-center gap-2 rounded-md bg-artifact-powerpoint-surface px-2 py-1.5 text-xs leading-[14px] font-normal tracking-[-0.15px] text-artifact-powerpoint-foreground`,
                          "data-testid": `${T}-native-file-label`,
                          children: [
                            (0, q.jsx)(rt, { "aria-hidden": !0, className: `size-3.5` }),
                            (0, q.jsx)(`span`, { children: x }),
                          ],
                        }),
                      (0, q.jsx)(`div`, {
                        className: y(
                          Tr,
                          n && `invisible`,
                          z && x != null
                            ? `top-11 right-[14px] bottom-[43px] left-[14px]`
                            : H
                              ? `top-[13px] right-[14px] bottom-[43px] left-[14px]`
                              : C == null
                                ? f
                                  ? `top-2 bottom-11 w-[calc(100%-32px)]`
                                  : `top-2 bottom-2 w-[calc(100%-60px)]`
                                : m,
                        ),
                        style: C == null || H ? void 0 : { left: Ar, right: h },
                        children: (0, q.jsx)(`div`, {
                          className: y(`h-full min-h-0 translate-y-0.5`, B && `flex items-start gap-1`),
                          children: (0, q.jsx)(`textarea`, {
                            ref: j,
                            inert: t,
                            value: i,
                            onChange: (e) => o(e.target.value),
                            onKeyDown: (e) => {
                              if (t) {
                                (e.preventDefault(), e.stopPropagation());
                                return;
                              }
                              if (e.key === `Escape`) {
                                (e.preventDefault(), e.stopPropagation(), c());
                                return;
                              }
                              if (
                                e.key === `Enter` &&
                                !e.altKey &&
                                !e.shiftKey &&
                                !e.nativeEvent.isComposing &&
                                V
                              ) {
                                if ((e.preventDefault(), e.stopPropagation(), R)) {
                                  se(d && (e.metaKey || e.ctrlKey) ? `direct` : `saved`, `keyboard`);
                                  return;
                                }
                                if (z) {
                                  se(`direct`, `keyboard`);
                                  return;
                                }
                                if (e.metaKey || e.ctrlKey) {
                                  se(ne, `keyboard`);
                                  return;
                                }
                                se(p, `keyboard`);
                              }
                            },
                            placeholder: _,
                            rows: 1,
                            className: y(br, !P && `!overflow-hidden whitespace-nowrap`),
                            style: {
                              fontSize: `var(--codex-chat-font-size, 13px)`,
                              lineHeight: `${U}px`,
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
                      (0, q.jsx)(`span`, {
                        ref: N,
                        "aria-hidden": `true`,
                        className: Dr,
                        style: { fontSize: `var(--codex-chat-font-size, 13px)`, lineHeight: `${_r}px` },
                        children: i,
                      }),
                      R
                        ? (0, q.jsxs)(`div`, {
                            "aria-hidden": !P || n,
                            className: y(
                              Er,
                              `justify-between`,
                              P && !n ? `scale-100 opacity-100` : `pointer-events-none scale-95 opacity-0`,
                            ),
                            children: [
                              t
                                ? null
                                : (0, q.jsx)(`button`, {
                                    type: `button`,
                                    "aria-label": `Delete annotation`,
                                    className: `inline-flex h-8 w-8 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`,
                                    onClick: S,
                                    children: (0, q.jsx)(Qe, { className: `size-4` }),
                                  }),
                              (0, q.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  l ? r : null,
                                  t
                                    ? null
                                    : (0, q.jsxs)(q.Fragment, {
                                        children: [
                                          (0, q.jsx)(`button`, {
                                            type: `button`,
                                            tabIndex: P ? void 0 : -1,
                                            className: `inline-flex h-8 items-center rounded-full border border-token-border-light bg-token-main-surface-primary px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium text-token-text-primary hover:bg-token-bg-tertiary`,
                                            style: {
                                              fontSize: `var(--codex-chat-font-size, 13px)`,
                                              lineHeight: `20px`,
                                            },
                                            onClick: s,
                                            children: `Cancel`,
                                          }),
                                          (0, q.jsx)(`button`, {
                                            type: `submit`,
                                            disabled: !V,
                                            className: y(
                                              `inline-flex h-8 items-center rounded-full px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium transition-colors`,
                                              V
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
                      !R &&
                        !B &&
                        (0, q.jsxs)(`div`, {
                          className: `absolute right-2 bottom-2 flex items-center gap-2`,
                          children: [
                            l ? r : null,
                            u
                              ? (0, q.jsx)(`button`, {
                                  "aria-label": `Comment`,
                                  "data-browser-comment-submit": !0,
                                  type: `button`,
                                  disabled: oe,
                                  className: y(
                                    `inline-flex size-7 items-center justify-center rounded-full transition-colors`,
                                    oe
                                      ? `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`
                                      : `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`,
                                  ),
                                  onMouseDown: (e) => {
                                    e.preventDefault();
                                  },
                                  onClick: () => {
                                    V && se(re, `button`);
                                  },
                                  children: ie
                                    ? (0, q.jsx)(st, { className: `size-4` })
                                    : (0, q.jsx)(dt, { className: `size-4` }),
                                })
                              : null,
                          ],
                        }),
                      H &&
                        !t &&
                        (0, q.jsx)(`div`, {
                          className: `absolute inset-x-0 bottom-0 flex h-[43px] items-center justify-end gap-3 px-2 py-1.5`,
                          children: (0, q.jsxs)(`button`, {
                            type: `button`,
                            disabled: !V,
                            className: `inline-flex h-7 shrink-0 items-center gap-2 rounded-md bg-[var(--color-background-success-solid,#008635)] py-[3px] ps-2 pe-1.5 text-[13px] font-medium text-[color:var(--color-text-success-solid,white)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40`,
                            onClick: () => {
                              se(`direct`, `button`);
                            },
                            children: [
                              `Send`,
                              (0, q.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: `text-white/75 [@container_(max-width:319px)]:hidden`,
                                children: `⏎`,
                              }),
                            ],
                          }),
                        }),
                      a,
                    ],
                  }),
                }),
              }),
            });
          },
          Ce = h,
          we =
            Ce == null
              ? Se(null)
              : (0, q.jsx)(Ce, {
                  value: i,
                  onChange: o,
                  onBusyChange: w,
                  onSubmit: (e) => {
                    se(R ? `saved` : z ? `direct` : p, `dictation`, e);
                  },
                  tooltipPortalContainer: r,
                  children: Se,
                });
        return r ? (0, sr.createPortal)(we, r) : we;
      })));
  }))();
}
function Br(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Vr(e) {
  let t = Math.min(Kr, Math.max(1, e.boundary.width - 16)),
    n = Math.min(e.previewWidth && e.previewWidth > 0 ? e.previewWidth : t, t),
    r = e.boundary.left + qr,
    i = e.boundary.top + qr,
    a = e.boundary.top + e.boundary.height - qr,
    o = Br(e.markerPoint.left - n / 2, r, Math.max(r, e.boundary.left + e.boundary.width - n - qr)),
    s = e.markerPoint.top - 25 - Gr;
  if (s >= i && s + Gr <= a) return { left: o, top: s, maxWidth: t };
  let c = e.markerPoint.top + 25;
  return c >= i && c + Gr <= a
    ? { left: o, top: c, maxWidth: t }
    : { left: o, top: Br(s, i, Math.max(i, a - Gr)), maxWidth: t };
}
function Hr({
  body: e,
  markerPosition: t,
  containerElement: n,
  collisionBoundaryElement: r = null,
  testId: i = `popcorn-annotation-preview`,
}) {
  let a = (0, Ur.useRef)(null),
    [o, s] = (0, Ur.useState)(null),
    [c, l] = (0, Ur.useState)(null);
  if (
    ((0, Ur.useLayoutEffect)(() => {
      let e = a.current;
      if (!e || !n || !r) return;
      let t = () => {
          let e = r.getBoundingClientRect(),
            t = gt(n, e.left, e.top),
            i = gt(n, e.right, e.bottom),
            a = { left: t.x, top: t.y, width: i.x - t.x, height: i.y - t.y };
          l((e) =>
            e?.left === a.left && e.top === a.top && e.width === a.width && e.height === a.height ? e : a,
          );
        },
        i = k(n, e, t),
        o = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
      return (
        o?.observe(r),
        () => {
          (i(), o?.disconnect());
        }
      );
    }, [n, r]),
    (0, Ur.useLayoutEffect)(() => {
      let e = a.current;
      if (!e) return;
      let t = Math.ceil(e.getBoundingClientRect().width);
      s((e) => (e === t ? e : t));
    }, [e, t.left, t.top, c?.width]),
    !n)
  )
    return null;
  let u = Vr({
    markerPoint: t,
    boundary: r != null && c != null ? c : { left: 0, top: 0, width: n.clientWidth, height: n.clientHeight },
    previewWidth: o ?? void 0,
  });
  return (0, Wr.jsx)(`div`, {
    ref: a,
    "data-testid": i,
    className: `pointer-events-none absolute z-40 flex select-none items-center overflow-hidden rounded-lg border px-2 py-1 text-sm shadow-lg`,
    style: {
      ...u,
      backgroundColor: Jr,
      borderColor: Xr,
      color: Yr,
      height: Gr,
      width: `fit-content`,
      backdropFilter: `blur(8px)`,
      WebkitBackdropFilter: `blur(8px)`,
    },
    children: (0, Wr.jsx)(`div`, {
      className: `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-inherit`,
      children: e.replace(/\s+/g, ` `).trim(),
    }),
  });
}
var Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr;
function Zr() {
  return (Zr = e(() => {
    (De(),
      (Ur = l()),
      (Wr = _()),
      (Gr = 32),
      (Kr = 294),
      (qr = 8),
      (Jr = `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`),
      (Yr = `var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))`),
      (Xr = `var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))`));
  }))();
}
function Qr(e, t) {
  return t != null && e.artifactKind !== t
    ? !1
    : e.artifactKind === `workbook`
      ? e.target.type === `workbook-range` || e.target.type === `workbook-floating-element`
      : e.target.type === `presentation-element-selection` || e.target.type === `presentation-region`;
}
function $r(e, t) {
  let n = [];
  for (let r of e ?? [])
    Qr(r, t) &&
      n.push({
        annotationId: r.annotationId,
        artifactKind: r.artifactKind,
        body: r.body,
        label: r.label,
        target: r.target,
      });
  return n;
}
function ei(e, t) {
  let n = t?.artifactKey,
    r = t?.artifactKind,
    i = t?.initialAnnotations,
    a = (0, ti.useRef)(t?.canReplaceSource);
  a.current = t?.canReplaceSource;
  let o = t?.onFocusAnnotation,
    s = t?.onDismissAnnotation,
    c = t?.onDismissAllAnnotations,
    [l, u] = (0, ti.useState)(n),
    [d, f] = (0, ti.useState)(() => $r(i, r)),
    p = (0, ti.useRef)(null);
  l !== n && ((p.current = null), u(n), f($r(i, r)));
  let m = (0, ti.useRef)(d);
  m.current = d;
  let h = (0, ti.useCallback)(
      (e, t = !1) => {
        let n = m.current.find((t) => t.annotationId === e);
        return n == null || o == null || !o(n, t, m.current) ? !1 : ((p.current = e), !0);
      },
      [o],
    ),
    g = (0, ti.useCallback)(
      (e, t) => {
        let n = Tt(t, p.current, e);
        return n != null && h(n, !0);
      },
      [h],
    ),
    _ = (0, ti.useCallback)(
      (e) => {
        (p.current === e && (p.current = null), f((t) => t.filter((t) => t.annotationId !== e)), s?.(e));
      },
      [s],
    ),
    v = (0, ti.useCallback)(() => {
      ((p.current = null), f([]), c?.());
    }, [c]),
    y = (0, ti.useCallback)((e) => {
      f((t) => [...t, e]);
    }, []),
    b = (0, ti.useCallback)((e, t) => {
      f((n) => n.map((n) => (n.annotationId === e ? { ...n, ...t } : n)));
    }, []);
  return (
    (0, ti.useEffect)(() => {
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
var ti;
function ni() {
  return (ni = e(() => {
    ti = l();
  }))();
}
function ri(e) {
  let [t, n] = (0, ii.useState)([]),
    r = (0, ii.useCallback)((e) => {
      n((t) => t.filter((t) => t.drawingId !== e));
    }, []),
    i = (0, ii.useCallback)(() => {
      n([]);
    }, []),
    a = (0, ii.useCallback)((e) => {
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
    (0, ii.useEffect)(() => {
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
var ii;
function ai() {
  return (ai = e(() => {
    ii = l();
  }))();
}
function oi({ target: e, enabled: t, threads: n, onOpen: r, onSelect: i }) {
  let a = (0, si.useRef)(null),
    o = (0, si.useRef)(null);
  (0, si.useEffect)(() => {
    t &&
      e != null &&
      (a.current !== e.requestId && ((a.current = e.requestId), r()),
      o.current !== e.requestId &&
        n?.some((t) => t.threadId === e.threadId) &&
        ((o.current = e.requestId), i(e.threadId)));
  }, [t, r, i, e, n]);
}
var si;
function ci() {
  return (ci = e(() => {
    si = l();
  }))();
}
function li(e, t, n) {
  let r = e.slice();
  return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r);
}
function ui(e, t) {
  return e.reduce((e, n, r) => {
    let i = t.get(n);
    return (i && (e[r] = i), e);
  }, Array(e.length));
}
function di(e) {
  return e !== null && e >= 0;
}
function fi(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function pi(e) {
  return typeof e == `boolean` ? { draggable: e, droppable: e } : e;
}
function mi(e, t, n) {
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
function hi(e) {
  let { children: t, id: n, items: r, strategy: i = xi, disabled: a = !1 } = e,
    { active: o, dragOverlay: s, droppableRects: c, over: l, measureDroppableContainers: u } = He(),
    d = Ye(Si, n),
    f = s.rect !== null,
    p = (0, J.useMemo)(() => r.map((e) => (typeof e == `object` && `id` in e ? e.id : e)), [r]),
    m = o != null,
    h = o ? p.indexOf(o.id) : -1,
    g = l ? p.indexOf(l.id) : -1,
    _ = (0, J.useRef)(p),
    v = !fi(p, _.current),
    y = (g !== -1 && h === -1) || v,
    b = pi(a);
  (Le(() => {
    v && m && u(p);
  }, [v, p, m, u]),
    (0, J.useEffect)(() => {
      _.current = p;
    }, [p]));
  let x = (0, J.useMemo)(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: b,
      disableTransforms: y,
      items: p,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: ui(p, c),
      strategy: i,
    }),
    [h, d, b.draggable, b.droppable, y, p, g, c, f, i],
  );
  return J.createElement(Ci.Provider, { value: x }, t);
}
function gi(e) {
  let { disabled: t, index: n, node: r, rect: i } = e,
    [a, o] = (0, J.useState)(null),
    s = (0, J.useRef)(n);
  return (
    Le(() => {
      if (!t && n !== s.current && r.current) {
        let e = i.current;
        if (e) {
          let t = Me(r.current, { ignoreTransform: !0 }),
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
    (0, J.useEffect)(() => {
      a && o(null);
    }, [a]),
    a
  );
}
function _i(e) {
  let {
      animateLayoutChanges: t = Ti,
      attributes: n,
      disabled: r,
      data: i,
      getNewIndex: a = wi,
      id: o,
      strategy: s,
      resizeObserverConfig: c,
      transition: l = Ei,
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
    } = (0, J.useContext)(Ci),
    y = vi(r, p),
    b = u.indexOf(o),
    x = (0, J.useMemo)(() => ({ sortable: { containerId: d, index: b, items: u }, ...i }), [d, i, b, u]),
    S = (0, J.useMemo)(() => u.slice(u.indexOf(o)), [u, o]),
    {
      rect: C,
      node: w,
      isOver: T,
      setNodeRef: E,
    } = Ve({
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
      transform: I,
    } = ke({ id: o, data: x, attributes: { ...ki, ...n }, disabled: y.draggable }),
    L = Fe(E, j),
    R = !!D,
    ee = R && !m && di(f) && di(g),
    z = !_ && N,
    B = ee
      ? ((z && ee ? I : null) ??
        (s ?? v)({ rects: h, activeNodeRect: k, activeIndex: f, overIndex: g, index: b }))
      : null,
    V = di(f) && di(g) ? a({ id: o, items: u, activeIndex: f, overIndex: g }) : b,
    H = D?.id,
    U = (0, J.useRef)({ activeId: H, items: u, newIndex: V, containerId: d }),
    te = u !== U.current.items,
    ne = t({
      active: D,
      containerId: d,
      isDragging: N,
      isSorting: R,
      id: o,
      index: b,
      items: u,
      newIndex: U.current.newIndex,
      previousItems: U.current.items,
      previousContainerId: U.current.containerId,
      transition: l,
      wasDragging: U.current.activeId != null,
    }),
    re = gi({ disabled: !ne, index: b, node: w, rect: C });
  return (
    (0, J.useEffect)(() => {
      (R && U.current.newIndex !== V && (U.current.newIndex = V),
        d !== U.current.containerId && (U.current.containerId = d),
        u !== U.current.items && (U.current.items = u));
    }, [R, V, d, u]),
    (0, J.useEffect)(() => {
      if (H === U.current.activeId) return;
      if (H != null && U.current.activeId == null) {
        U.current.activeId = H;
        return;
      }
      let e = setTimeout(() => {
        U.current.activeId = H;
      }, 50);
      return () => clearTimeout(e);
    }, [H]),
    {
      active: D,
      activeIndex: f,
      attributes: A,
      data: x,
      rect: C,
      index: b,
      newIndex: V,
      items: u,
      isOver: T,
      isSorting: R,
      isDragging: N,
      listeners: M,
      node: w,
      overIndex: g,
      over: P,
      setNodeRef: L,
      setActivatorNodeRef: F,
      setDroppableNodeRef: E,
      setDraggableNodeRef: j,
      transform: re ?? B,
      transition: ie(),
    }
  );
  function ie() {
    if (re || (te && U.current.newIndex === b)) return Oi;
    if (!((z && !Pe(O)) || !l) && (R || ne)) return Ie.Transition.toString({ ...l, property: Di });
  }
}
function vi(e, t) {
  return typeof e == `boolean`
    ? { draggable: e, droppable: !1 }
    : { draggable: e?.draggable ?? t.draggable, droppable: e?.droppable ?? t.droppable };
}
var J, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki;
function Ai() {
  return (Ai = e(() => {
    ((J = t(l())),
      je(),
      Ne(),
      (yi = { scaleX: 1, scaleY: 1 }),
      (bi = (e) => {
        let { rects: t, activeNodeRect: n, activeIndex: r, overIndex: i, index: a } = e,
          o = t[r] ?? n;
        if (!o) return null;
        let s = mi(t, a, r);
        if (a === r) {
          let e = t[i];
          return e
            ? { x: r < i ? e.left + e.width - (o.left + o.width) : e.left - o.left, y: 0, ...yi }
            : null;
        }
        return a > r && a <= i
          ? { x: -o.width - s, y: 0, ...yi }
          : a < r && a >= i
            ? { x: o.width + s, y: 0, ...yi }
            : { x: 0, y: 0, ...yi };
      }),
      (xi = (e) => {
        let { rects: t, activeIndex: n, overIndex: r, index: i } = e,
          a = li(t, r, n),
          o = t[i],
          s = a[i];
        return !s || !o
          ? null
          : { x: s.left - o.left, y: s.top - o.top, scaleX: s.width / o.width, scaleY: s.height / o.height };
      }),
      (Si = `Sortable`),
      (Ci = J.createContext({
        activeIndex: -1,
        containerId: Si,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: xi,
        disabled: { draggable: !1, droppable: !1 },
      })),
      (wi = (e) => {
        let { id: t, items: n, activeIndex: r, overIndex: i } = e;
        return li(n, r, i).indexOf(t);
      }),
      (Ti = (e) => {
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
      (Ei = { duration: 200, easing: `ease` }),
      (Di = `transform`),
      (Oi = Ie.Transition.toString({ property: Di, duration: 0, easing: `linear` })),
      (ki = { roleDescription: `sortable` }),
      qe.Down,
      qe.Right,
      qe.Up,
      qe.Left);
  }))();
}
function ji({ kind: e, children: t, className: n }) {
  return (0, Mi.jsx)(`div`, {
    className: y(`inline-flex items-center justify-center rounded-md p-1`, Ni[e], n),
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
var Mi, Ni;
function Pi() {
  return (Pi = e(() => {
    (x(),
      (Mi = _()),
      (Ni = {
        workbook: `bg-[#04b84c] text-white`,
        presentation: `bg-orange-300 text-white`,
        document: `bg-token-bg-elevated-secondary border-token-border-light border text-token-text-primary`,
        whiteboard: `border-token-border-light border`,
      }));
  }))();
}
function Fi({ trigger: e, actions: t, onCloseAutoFocus: n }) {
  return (0, Ii.jsxs)(b, {
    children: [
      (0, Ii.jsx)(c, { asChild: !0, children: e }),
      (0, Ii.jsx)(v, {
        children: (0, Ii.jsx)(i, {
          className: `border-token-border-light bg-token-bg-primary z-50 min-w-[160px] rounded-xl border p-1 shadow-lg`,
          onCloseAutoFocus: n,
          children: t.map((e) => {
            if (e.kind === `separator`)
              return (0, Ii.jsx)(C, { className: `bg-token-border-light my-1 h-px` }, e.id);
            let t = e.icon;
            return (0, Ii.jsxs)(
              re,
              {
                disabled: e.disabled,
                "data-testid": e.testId,
                onSelect: () => {
                  e.disabled || e.onSelect();
                },
                className: y(
                  `text-token-text-primary flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-token-bg-secondary`,
                  e.color === `danger` ? `text-red-600` : null,
                ),
                children: [
                  (0, Ii.jsx)(t, { className: `size-4` }),
                  (0, Ii.jsx)(`span`, { children: e.label }),
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
var Ii;
function Li() {
  return (Li = e(() => {
    (p(), x(), (Ii = _()));
  }))();
}
function Ri(e, t) {
  let [n, r] = (0, zi.useState)(() => Object.fromEntries(e.map((e) => [e.id, e.defaultOpen ?? !1])));
  return (
    (0, zi.useEffect)(() => {
      r((t) => {
        let n = Object.fromEntries(e.map((e) => [e.id, t[e.id] ?? e.defaultOpen ?? !1]));
        return Object.keys(t).length === e.length && e.every((e) => t[e.id] === n[e.id]) ? t : n;
      });
    }, [e]),
    (0, zi.useMemo)(() => {
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
var zi;
function Bi() {
  return (Bi = e(() => {
    zi = l();
  }))();
}
function Vi(e, t) {
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
function Hi() {
  return (Hi = e(() => {}))();
}
var Ui;
function Wi() {
  return (Wi = e(() => {
    Ui = class {
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
function Gi(e) {
  let { controller: t, commentAuthor: n } = e,
    r = Ut();
  return (0, qi.jsx)(Lt, {
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
        (0, qi.jsxs)(qi.Fragment, { children: [`No open comment threads. `, e(`Show resolved threads`)] }),
      filteredEmpty: `Adjust filters to see comments`,
      showOpen: `Show all open threads`,
      resolved: `Resolved`,
      resolvedCount: ({ count: e, label: t }) =>
        (0, qi.jsxs)(qi.Fragment, { children: [t(`Resolved`), ` · `, e] }),
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
    renderThread: (t) => (0, qi.jsx)(Ki, { thread: t, sidebar: e, timestampNow: r }),
  });
}
function Ki({ thread: e, sidebar: t, timestampNow: n }) {
  let { controller: r, commentAuthor: i, selectedThreadId: a, onSelectThread: o, onHoverThread: s } = t,
    c = e.threadId === a;
  return (0, qi.jsx)(`div`, {
    "data-selected": c ? `true` : void 0,
    "data-testid": `${t.testIdPrefix}-comment-sidebar-thread-${e.threadId}`,
    children: (0, qi.jsx)(Bt, {
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
var qi;
function Ji() {
  return (Ji = e(() => {
    (Ht(), Vt(), It(), (qi = _()));
  }))();
}
function Yi({
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
  return (0, Xi.jsx)(Xt, {
    ...v,
    threadId: e.threadId,
    author: b,
    markerContent: v.markerContent ?? (b != null && qt(b) ? u : void 0),
    markerLabel: `Open comment thread for ${t}`,
    renderThread: ({ expanded: o }) =>
      (0, Xi.jsx)(Bt, {
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
var Xi;
function Zi() {
  return (Zi = e(() => {
    (Zt(), It(), (Xi = _()));
  }))();
}
function Qi({
  editingDisabledRef: e,
  editorSessionRef: t,
  lightDismissArmedRef: n,
  editorRef: r,
  pendingAnnotations: i,
  blockWhileDictationBusy: a,
  closeEditor: o,
}) {
  return (0, $i.useCallback)(
    (s) => {
      if (e.current || a()) return !1;
      let c = t.current,
        l = !1;
      if (c?.mode === `create`) l = c.body.trim().length > 0;
      else if (c?.mode === `edit`) {
        let e = i.find((e) => e.annotationId === c.annotationId);
        l = c.body !== e?.body;
      }
      return l && !s?.discardChanges && !n.current ? ((n.current = !0), ar(r.current), !1) : (o(), !0);
    },
    [e, t, n, r, i, a, o],
  );
}
var $i;
function ea() {
  return (ea = e(() => {
    (($i = l()), zr());
  }))();
}
function ta(e, t, n) {
  return (0, na.useCallback)(
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
var na;
function ra() {
  return (ra = e(() => {
    na = l();
  }))();
}
function ia(e) {
  if ((!e.metaKey && !e.ctrlKey) || e.altKey) return !1;
  let t = e.key.toLowerCase();
  return t === `c` || (t === `x` && !e.shiftKey) || t === `v`;
}
function aa(e, { includeSearch: t = !0, includeViewportActions: n = !1 } = {}) {
  if (!pt(e, { allowShift: !0, requirePrimaryModifier: !0 })) return null;
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
function oa(e) {
  return e === `copy` || e === `cut` || e === `paste` || e === `paste-without-formatting`;
}
function sa(e) {
  let t = (0, ca.useRef)(null),
    n = (0, ca.useCallback)(
      (n, r) => {
        let i = aa(n, r);
        return i == null ? null : (oa(i) && (t.current = i), e?.(i), i);
      },
      [e],
    ),
    r = (0, ca.useCallback)(
      (n) => {
        let r = t.current,
          i = r === n || (n === `paste` && r === `paste-without-formatting`);
        ((t.current = null), i || e?.(n));
      },
      [e],
    );
  return (
    (0, ca.useEffect)(() => {
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
var ca;
function la() {
  return (la = e(() => {
    ((ca = l()), _t());
  }))();
}
var ua, da;
function fa() {
  return (fa = e(() => {
    ((ua = l()), (da = (0, ua.createContext)(void 0)));
  }))();
}
function pa(e, t, n) {
  let { hitRadius: r } = Mt(n),
    i = Math.hypot(t.x - e.from.x, t.y - e.from.y),
    a = Math.hypot(t.x - e.to.x, t.y - e.to.y);
  return Math.min(i, a) > r ? null : i <= a ? `from` : `to`;
}
function ma(e, t, n) {
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
function ha() {
  return (ha = e(() => {
    jt();
  }))();
}
function ga({
  viewportRect: e,
  testId: t,
  kind: n = `text`,
  clickTextSize: r = { width: 1, height: 1 },
  onCommit: i,
  onCancel: a,
}) {
  let o = (0, _a.useRef)(null),
    s = (0, _a.useRef)(null),
    c = (0, _a.useRef)(null),
    l = (0, _a.useId)(),
    u = (0, _a.useRef)(null),
    d = (0, _a.useRef)(a);
  ((d.current = a),
    (0, _a.useEffect)(() => {
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
  let f = (e) => gt(e.currentTarget, e.clientX, e.clientY),
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
  return (0, va.jsxs)(`div`, {
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
      ((t.hasDragged ||= Math.hypot(e.clientX - t.clientStart.x, e.clientY - t.clientStart.y) >= ya),
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
        s = !a.hasDragged && Math.hypot(t.clientX - a.clientStart.x, t.clientY - a.clientStart.y) < ya;
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
      (0, va.jsx)(`div`, {
        ref: c,
        id: l,
        role: `tooltip`,
        className: `pointer-events-none absolute rounded-md bg-black px-2 py-1 text-sm leading-5 whitespace-nowrap text-white shadow-sm`,
        style: { display: `none` },
        children: n === `image` ? `Click or drag to place an image` : `Click or drag to place text`,
      }),
      (0, va.jsx)(`div`, {
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
var _a, va, ya;
function ba() {
  return (ba = e(() => {
    ((_a = l()), (va = _()), (ya = 4));
  }))();
}
var xa;
function Sa() {
  return (Sa = e(() => {
    xa = {
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
function Ca(e) {
  let t = wa.useRef(() => {});
  return (
    Oa(() => {
      t.current = e;
    }),
    wa.useCallback(function () {
      var e = [...arguments];
      return t.current == null ? void 0 : t.current(...e);
    }, [])
  );
}
var wa, Ta, Ea, Da, Oa;
function ka() {
  return (ka = e(() => {
    ((wa = t(l(), 1)),
      (Ta = l()),
      (Ea = typeof document < `u` ? Ta.useLayoutEffect : function () {}),
      (Da = { ...wa }),
      (Oa = Da.useInsertionEffect || ((e) => e())));
  }))();
}
function Aa() {
  let [e, t] = Y.useState(() => (Ja ? Xa() : void 0));
  return (
    Ea(() => {
      e ?? t(Xa());
    }, []),
    Y.useEffect(() => {
      Ja = !0;
    }, []),
    e
  );
}
function ja() {
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
function Ma(e) {
  e.current !== -1 && (clearTimeout(e.current), (e.current = -1));
}
function Na(e, t) {
  if (!e || !t) return !1;
  let n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ye(n)) {
    let n = t;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Pa(e) {
  return `composedPath` in e ? e.composedPath()[0] : e.target;
}
function Fa(e) {
  let { open: t = !1, onOpenChange: n, elements: r } = e,
    i = Za(),
    a = Y.useRef({}),
    [o] = Y.useState(() => ja()),
    s = eo() != null,
    [c, l] = Y.useState(r.reference),
    u = Ca((e, t, r) => {
      ((a.current.openEvent = e ? t : void 0),
        o.emit(`openchange`, { open: e, event: t, reason: r, nested: s }),
        n?.(e, t, r));
    }),
    d = Y.useMemo(() => ({ setPositionReference: l }), []),
    f = Y.useMemo(
      () => ({
        reference: c || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [c, r.reference, r.floating],
    );
  return Y.useMemo(
    () => ({ dataRef: a, open: t, onOpenChange: u, elements: f, events: o, floatingId: i, refs: d }),
    [t, u, f, o, i, d],
  );
}
function Ia(e) {
  let { elements: t, ...n } = e === void 0 ? {} : e,
    { nodeId: r } = n,
    i = Fa({ ...n, elements: { reference: t?.reference ?? null, floating: t?.floating ?? null } }),
    a = n.rootContext || i,
    o = a.elements,
    [s, c] = Y.useState(null),
    [l, u] = Y.useState(null),
    d = o?.domReference || s,
    f = Y.useRef(null),
    p = to();
  Ea(() => {
    d && (f.current = d);
  }, [d]);
  let m = D({ ...n, elements: { ...o, ...(l && { reference: l }) } }),
    h = Y.useCallback(
      (e) => {
        let t = z(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e,
            }
          : e;
        (u(t), m.refs.setReference(t));
      },
      [m.refs],
    ),
    g = Y.useCallback(
      (e) => {
        ((z(e) || e === null) && ((f.current = e), c(e)),
          (z(m.refs.reference.current) || m.refs.reference.current === null || (e !== null && !z(e))) &&
            m.refs.setReference(e));
      },
      [m.refs],
    ),
    _ = Y.useMemo(
      () => ({ ...m.refs, setReference: g, setPositionReference: h, domReference: f }),
      [m.refs, g, h],
    ),
    v = Y.useMemo(() => ({ ...m.elements, domReference: d }), [m.elements, d]),
    y = Y.useMemo(() => ({ ...m, ...a, refs: _, elements: v, nodeId: r }), [m, _, v, r, a]);
  return (
    Ea(() => {
      a.dataRef.current.floatingContext = y;
      let e = p?.nodesRef.current.find((e) => e.id === r);
      e && (e.context = y);
    }),
    Y.useMemo(() => ({ ...m, context: y, refs: _, elements: v }), [m, _, v, y])
  );
}
function La(e, t, n) {
  return (
    n === void 0 && (n = !0),
    e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...La(e, t.id, n)])
  );
}
function Ra(e, t) {
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
function za(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function Ba(e) {
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
        (Ma(i), u());
      }
      if ((Ma(i), !c.domReference || !c.floating || s == null || n == null || o == null)) return;
      let { clientX: m, clientY: h } = e,
        g = [m, h],
        _ = Pa(e),
        v = e.type === `mouseleave`,
        y = Na(c.floating, _),
        b = Na(c.domReference, _),
        x = c.domReference.getBoundingClientRect(),
        S = c.floating.getBoundingClientRect(),
        C = s.split(`-`)[0],
        w = n > S.right - S.width / 2,
        T = o > S.bottom - S.height / 2,
        E = za(g, x),
        D = S.width > x.width,
        O = S.height > x.height,
        k = (D ? x : S).left,
        A = (D ? x : S).right,
        j = (O ? x : S).top,
        M = (O ? x : S).bottom;
      if (y && ((a = !0), !v)) return;
      if ((b && (a = !1), b && !v)) {
        a = !0;
        return;
      }
      if (
        (v && z(e.relatedTarget) && Na(c.floating, e.relatedTarget)) ||
        (f && La(f.nodesRef.current, d).length)
      )
        return;
      if (
        (C === `top` && o >= x.bottom - 1) ||
        (C === `bottom` && o <= x.top + 1) ||
        (C === `left` && n >= x.right - 1) ||
        (C === `right` && n <= x.left + 1)
      )
        return p();
      let N = [];
      switch (C) {
        case `top`:
          N = [
            [k, x.top + 1],
            [k, S.bottom - 1],
            [A, S.bottom - 1],
            [A, x.top + 1],
          ];
          break;
        case `bottom`:
          N = [
            [k, S.top + 1],
            [k, x.bottom - 1],
            [A, x.bottom - 1],
            [A, S.top + 1],
          ];
          break;
        case `left`:
          N = [
            [S.right - 1, M],
            [S.right - 1, j],
            [x.left + 1, j],
            [x.left + 1, M],
          ];
          break;
        case `right`:
          N = [
            [x.right - 1, M],
            [x.right - 1, j],
            [S.left + 1, j],
            [S.left + 1, M],
          ];
      }
      function P(e) {
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
      if (!Ra([m, h], N)) {
        if (a && !E) return p();
        if (!v && r) {
          let t = l(e.clientX, e.clientY);
          if (t !== null && t < 0.1) return p();
        }
        Ra([m, h], P([n, o])) ? !a && r && (i.current = window.setTimeout(p, 40)) : p();
      }
    };
  };
  return ((u.__options = { blockPointerEvents: n }), u);
}
var Y, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to;
function no() {
  return (no = e(() => {
    ((Y = t(l(), 1)),
      ka(),
      _(),
      n(),
      u(),
      De(),
      (Va = `ArrowLeft`),
      (Ha = `ArrowRight`),
      (Ua = `ArrowUp`),
      (Wa = `ArrowDown`),
      (Ga = [Va, Ha]),
      (Ka = [Ua, Wa]),
      [...Ga, ...Ka],
      (qa = { ...Y }),
      (Ja = !1),
      (Ya = 0),
      (Xa = () => `floating-ui-` + Math.random().toString(36).slice(2, 6) + Ya++),
      (Za = qa.useId || Aa),
      (Qa = Y.createContext(null)),
      ($a = Y.createContext(null)),
      (eo = () => Y.useContext(Qa)?.id || null),
      (to = () => Y.useContext($a)));
  }))();
}
function ro(e, t) {
  return e.clientX >= t.left && e.clientX <= t.right && e.clientY >= t.top && e.clientY <= t.bottom;
}
function io(e, t) {
  let n = (0, ao.useContext)(oo)?.pointerGrace;
  return (
    (0, ao.useEffect)(() => {
      if (!n || !t || !e.open || !e.elements.floating) return;
      let r = e.elements.floating,
        i = t.ownerDocument,
        a = n.pointerRef.current;
      a && !ro(a, t.getBoundingClientRect()) && (a = null);
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
          if (ro(n, i)) {
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
              o = Ba({ requireIntent: !1, buffer: 4 })({
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
var ao, oo;
function so() {
  return (so = e(() => {
    (no(), (ao = l()), (oo = (0, ao.createContext)(null)));
  }))();
}
function co({
  bounds: e,
  boundsSource: t,
  containerElement: n,
  collisionBoundaryElement: r,
  zoom: i = 1,
  isVisible: o,
  middleware: s,
  whileElementsMounted: c = k,
  rootRef: l,
  className: u,
  style: d,
  children: f,
}) {
  let p = o ? t : void 0,
    m = (0, uo.useCallback)(() => (p ? p.getSnapshot() != null : e != null), [p, e]),
    h = (0, uo.useSyncExternalStore)(p?.subscribe ?? ho, m, m),
    _ = e,
    v = t ? 1 : i,
    y = (0, uo.useContext)(oo)?.portalContainerElement,
    b = r ?? y ?? n,
    [x, S] = (0, uo.useState)(null),
    C = (0, uo.useRef)({ bounds: _, zoom: v });
  (0, uo.useLayoutEffect)(() => {
    C.current = { bounds: _, zoom: v };
  }, [_, v]);
  let w = (0, uo.useMemo)(
      () =>
        n
          ? {
              contextElement: n,
              getBoundingClientRect: () => {
                let { bounds: e, zoom: r } = C.current,
                  i = t ? t.getSnapshot() : e;
                if (!i) return new DOMRect();
                let a = mt(n, i.left * r, i.top * r),
                  o = mt(n, (i.left + i.width) * r, (i.top + i.height) * r);
                return new DOMRect(a.x, a.y, o.x - a.x, o.y - a.y);
              },
            }
          : null,
      [t, n],
    ),
    {
      refs: T,
      floatingStyles: E,
      update: D,
      context: A,
    } = Ia({
      open: o,
      placement: `top`,
      strategy: `absolute`,
      middleware: s ?? [
        a(mo),
        g({ fallbackPlacements: [`bottom`], ...(b ? { boundary: b, padding: 12 } : {}) }),
        O({ padding: b ? 12 : 8, ...(b ? { boundary: b, crossAxis: !0 } : {}) }),
      ],
      whileElementsMounted: c,
    }),
    j = io(A, x);
  if (
    ((0, uo.useLayoutEffect)(() => {
      n && T.setPositionReference(w);
    }, [n, T, w]),
    (0, uo.useLayoutEffect)(() => {
      o && !t && D();
    }, [_?.left, _?.top, _?.width, _?.height, t, o, D, v]),
    (0, uo.useLayoutEffect)(() => {
      if (!o || !t || !n) return;
      let e = t.subscribe(D);
      return (D(), e);
    }, [t, n, o, D]),
    !h || !o)
  )
    return null;
  let M = (0, po.jsx)(`div`, {
    ref: l,
    className: `pointer-events-none absolute inset-0 z-30`,
    "data-popcorn-edit-toolbar-root": `true`,
    "data-popcorn-embedded-content": `true`,
    children: (0, po.jsx)(`div`, {
      ref: T.setFloating,
      className: `pointer-events-auto absolute${u ? ` ${u}` : ``}`,
      style: { ...d, ...E },
      "data-testid": `popcorn-edit-toolbar`,
      "data-popcorn-wheel-passthrough": ``,
      children: f,
    }),
  });
  return (0, po.jsxs)(`div`, {
    className: `pointer-events-none absolute inset-0 z-30`,
    children: [
      j && (0, po.jsx)(lo, { bounds: _, boundsSource: t, zoom: v, elementRef: S }),
      !n &&
        (0, po.jsx)(lo, {
          bounds: _,
          boundsSource: t,
          zoom: v,
          elementRef: T.setReference,
          positionReference: !0,
          updatePosition: D,
        }),
      y ? (0, fo.createPortal)(M, y) : M,
    ],
  });
}
function lo({
  bounds: e,
  boundsSource: t,
  zoom: n,
  elementRef: r,
  positionReference: i = !1,
  updatePosition: a,
}) {
  let o = (0, uo.useSyncExternalStore)(
    t?.subscribe ?? ho,
    t?.getSnapshot ?? (() => e),
    t?.getSnapshot ?? (() => e),
  );
  return (
    (0, uo.useLayoutEffect)(() => {
      a?.();
    }, [o, a, n]),
    o
      ? (0, po.jsx)(`div`, {
          ref: r,
          "aria-hidden": !0,
          className: `pointer-events-none absolute`,
          "data-testid": i ? `popcorn-edit-toolbar-anchor` : `popcorn-edit-toolbar-hover-anchor`,
          style: {
            left: (o.left + (i ? o.width / 2 : 0)) * n,
            top: i ? Math.max(8, o.top * n - mo) : o.top * n,
            width: i ? 1 : o.width * n,
            height: i ? 1 : o.height * n,
          },
        })
      : null
  );
}
var uo, fo, po, mo, ho;
function go() {
  return (go = e(() => {
    (no(), (uo = l()), (fo = u()), so(), (po = _()), (mo = 12), (ho = () => () => {}));
  }))();
}
function _o({ fontSize: e, onChange: t, config: n }) {
  let i = ft(n ?? So, t, (e, t) => Ke(e, t, { min: 1, max: wo })),
    a = String(e),
    [o, s] = (0, yo.useState)(a);
  (0, yo.useEffect)(() => s(a), [a]);
  let c = () => {
    let e = Number(o);
    o.trim() && Ke(n ?? So, e, { min: 1, max: wo }) ? i(e) : s(a);
  };
  return (0, bo.jsxs)(`div`, {
    className: `w-32 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl`,
    children: [
      n?.options?.allowCustom !== !1 &&
        (0, bo.jsx)(`form`, {
          noValidate: !0,
          className: `mb-1`,
          onSubmit: (e) => {
            (e.preventDefault(), c());
          },
          children: (0, bo.jsx)(`input`, {
            "aria-label": `Custom font size`,
            type: `number`,
            min: Math.max(1, n?.options?.min ?? 1),
            max: Math.min(wo, n?.options?.max ?? wo),
            step: `any`,
            value: o,
            className: y(
              `min-h-7 w-full rounded-lg border border-default bg-transparent px-2 py-1 text-sm text-default outline-none hover:border-primary-outline focus:border-ring focus:ring-1 focus:ring-ring`,
              `[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,
            ),
            onChange: (e) => s(e.currentTarget.value),
            onBlur: () => s(a),
            onKeyDown: (e) => {
              e.key === `Escape` && (s(a), e.preventDefault(), e.stopPropagation());
            },
          }),
        }),
      (n?.options?.presets ?? Co)
        .filter((e) => Ke(n ?? So, e, { min: 1, max: wo }))
        .map((t) => {
          let n = t === e;
          return (0, bo.jsx)(
            r,
            {
              asChild: !0,
              children: (0, bo.jsx)(`button`, {
                type: `button`,
                "aria-pressed": n,
                onClick: () => i(t),
                className: y(
                  `flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-left text-sm`,
                  n ? `bg-info-soft text-info` : `hover:bg-primary-ghost-hover`,
                ),
                children: (0, bo.jsx)(`span`, { children: t }),
              }),
            },
            t,
          );
        }),
    ],
  });
}
function vo({ color: e, onChange: t, label: n, fileColors: r = [], allowNone: i = !1, config: a }) {
  let o = ft(a ?? So, t, (e, t) =>
    ze(
      e,
      t,
      i,
      xo.map((e) => e.value),
    ),
  );
  if (a?.state === `hidden`) return null;
  let s = a?.options?.palette ?? (a?.options?.allowCustom === !1 ? xo.map((e) => e.value) : r);
  return (0, bo.jsx)(Ft, {
    color: e,
    onChange: o,
    colors: s.map((e) => ({ value: e, label: `File color ${e}` })),
    allowNone: i && a?.options?.allowNone !== !1,
    allowCustom: a?.options?.allowCustom !== !1,
    disabled: a?.state === `disabled`,
    labels: n ? { palette: n } : void 0,
  });
}
var yo, bo, xo, So, Co, wo;
function To() {
  return (To = e(() => {
    (te(),
      x(),
      (yo = l()),
      bt(),
      Nt(),
      vt(),
      Ae(),
      (bo = _()),
      Pt(),
      (xo = [
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
      (So = { state: `enabled` }),
      (Co = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 32, 48, 64]),
      (wo = 409.55));
  }))();
}
function Eo({
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
  let [f, p] = (0, X.useState)(() => typeof window > `u`),
    [m, h] = (0, X.useState)(null),
    g = (0, X.useCallback)((e) => {
      (e.preventDefault(), e.stopPropagation());
    }, []);
  return (
    (0, X.useEffect)(() => {
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
      : (0, Z.jsx)(co, {
          bounds: e,
          boundsSource: t,
          containerElement: n,
          collisionBoundaryElement: r,
          zoom: i,
          isVisible: a,
          rootRef: h,
          children: (0, Z.jsx)(`div`, {
            className: y(
              `transition-all duration-150 ease-out`,
              f ? `translate-y-0 opacity-100` : `translate-y-2 opacity-0`,
            ),
            children: (0, Z.jsxs)(nn, {
              ariaLabel: s,
              onKeyDown: d,
              children: [
                (0, Z.jsx)(`div`, {
                  "aria-hidden": l,
                  inert: l,
                  style: l && u != null ? { width: `min(${u}px, calc(100vw - 32px))` } : void 0,
                  className: y(
                    `flex h-full items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
                    l ? `pointer-events-none scale-[0.98] opacity-0` : `scale-100 opacity-100`,
                  ),
                  children: o.map((e) => {
                    switch (e.kind) {
                      case `button`:
                        return (0, Z.jsx)(
                          rn,
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
                        return (0, Z.jsx)(
                          an,
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
                        return (0, Z.jsx)(on, {}, e.id);
                    }
                  }),
                }),
                (0, Z.jsx)(`div`, {
                  "aria-hidden": !l,
                  className: y(
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
function Do({
  bounds: e,
  boundsSource: t,
  zoom: n,
  isVisible: i,
  selectionRangeAddress: a,
  runWorksheetEdit: o,
  formatting: s,
  manualEditUiEnabled: c = !1,
  isInspectorOpen: l = !1,
  selectionActions: u,
  selectionKey: d,
  shortcutScopeElement: f,
  onDismiss: p,
  onToggleInspector: m,
  onAskSelectionContext: h,
  onCommentSelection: g,
  config: _,
}) {
  let v = (0, X.useContext)(oo),
    [y, b] = (0, X.useState)(``),
    [x, S] = (0, X.useState)(!1),
    C = (0, X.useRef)(null),
    w = (0, X.useMemo)(
      () =>
        jo.flatMap((e) =>
          Mo.map((t) => {
            let n = xa[e];
            return { key: `${e}-${t}`, label: `${e} shade ${t}`, hex: n?.[t] ?? `#000000` };
          }),
        ),
      [],
    ),
    T = (0, X.useCallback)(
      (e) => {
        a &&
          o &&
          (!_ ||
            ze(
              _.controls.fill,
              e,
              !1,
              w.map((e) => e.hex),
            )) &&
          o(`applyRangeFill`, { rangeAddress: a, hex: e });
      },
      [o, a, _, w],
    ),
    E = (0, X.useCallback)(
      (e) => {
        a &&
          o &&
          (!_ ||
            ze(
              _.controls.textColor,
              e,
              !1,
              w.map((e) => e.hex),
            )) &&
          o(`applyRangeFontColor`, { rangeAddress: a, hex: e });
      },
      [o, a, _, w],
    ),
    D =
      c && (_ == null || (_.enabled && _.controls.askForChange.state === `enabled`)) && i && !x && u != null,
    O = u?.onAskForEditShown;
  (0, X.useEffect)(() => {
    D && d != null && C.current !== d && O != null && ((C.current = d), O());
  }, [D, O, d]);
  let k = (0, X.useCallback)(
    (e) => {
      u &&
        (!_ || (_.enabled && _.controls.askForChange.state === `enabled`)) &&
        (u.startAskChat(e), u.opensAnnotationEditor || S(!0));
    },
    [u, _],
  );
  yn({ enabled: D, onClick: k, shortcutScopeElement: v?.portalContainerElement ?? f });
  let A = () => {
      (b(``), S(!1), p?.());
    },
    j = (e, t) => {
      u &&
        y.trim() &&
        (!_ || (_.enabled && _.controls.askForChange.state === `enabled`)) &&
        (((t ? u.defaultSubmitMode !== `saved` : u.defaultSubmitMode === `saved`) && u.savedSubmitDisabled) ||
          (u.submitAskChat(y, e, t), A()));
    };
  if (c) {
    let r = a != null && s != null,
      c = [
        ...(u
          ? [
              {
                kind: `button`,
                id: `ask-chat`,
                label: u?.askForEditLabel ?? `Ask for change`,
                subLabel: (0, Z.jsx)(`span`, {
                  className: `text-[11px] leading-none text-token-text-tertiary`,
                  children: bn(),
                }),
                onClick: () => k(`ask_codex_button`),
              },
              ...(r || m ? [{ kind: `separator`, id: `ask-chat-separator` }] : []),
            ]
          : []),
        ...(r
          ? [
              {
                kind: `button`,
                id: `bold`,
                label: `Bold`,
                icon: lt,
                hideLabel: !0,
                isActive: s.bold,
                onClick: () => {
                  o?.(`toggleRangeBold`, { rangeAddress: a, value: !s.bold });
                },
              },
              {
                kind: `popover`,
                id: `text-color`,
                label: `Text color`,
                hideLabel: !0,
                subLabel: (0, Z.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `block size-4 rounded-full border border-token-border-light`,
                  style: { backgroundColor: s.fontColor },
                }),
                align: `center`,
                content: (0, Z.jsx)(vo, {
                  config: _?.controls.textColor,
                  color: s.fontColor,
                  fileColors: s.fileColors,
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
                subLabel: (0, Z.jsxs)(`span`, {
                  "aria-hidden": !0,
                  className: `inline-flex items-center gap-0.5`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-sm font-medium text-token-text-primary`,
                      children: s.fontSize,
                    }),
                    (0, Z.jsx)(it, { className: `size-3 text-token-text-secondary` }),
                  ],
                }),
                align: `center`,
                content: (0, Z.jsx)(_o, {
                  config: _?.controls.fontSize,
                  fontSize: s.fontSize,
                  onChange: (e) => {
                    o?.(`applyRangeFontSize`, { rangeAddress: a, size: e });
                  },
                }),
              },
            ]
          : []),
        ...(m
          ? [
              ...(r ? [{ kind: `separator`, id: `style-picker-separator` }] : []),
              {
                kind: `button`,
                id: `style-picker`,
                label: `Open style picker`,
                icon: ot,
                hideLabel: !0,
                isActive: l,
                onClick: m,
              },
            ]
          : []),
        ...(g
          ? [
              { kind: `separator`, id: `comment-separator` },
              { kind: `button`, id: `comment`, label: `Comment`, icon: at, hideLabel: !0, onClick: g },
            ]
          : []),
      ],
      d = x && (_ == null || _.controls.askForChange.state === `enabled`),
      p = d
        ? (0, Z.jsxs)(`form`, {
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
              ((0, Ao.flushSync)(() => S(!1)),
                t?.querySelector(`button[data-toolbar-action='ask-chat']`)?.focus());
            },
            children: [
              (0, Z.jsx)(`input`, {
                autoFocus: !0,
                "aria-label": `Ask for change about this selection`,
                className: `min-w-0 flex-1 bg-transparent text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary`,
                placeholder: `Ask for change about this selection`,
                value: y,
                onChange: (e) => b(e.currentTarget.value),
              }),
              (0, Z.jsx)(`button`, {
                type: `submit`,
                "aria-label": `Send to Chat`,
                disabled: !y.trim() || (u?.defaultSubmitMode === `saved` && u.savedSubmitDisabled),
                className: `flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100`,
                children: (0, Z.jsx)(st, { className: `size-4` }),
              }),
            ],
          })
        : null;
    return (0, Z.jsx)(Eo, {
      ariaLabel: x ? `Ask for change` : `Selection actions`,
      bounds: e,
      boundsSource: t,
      zoom: n,
      isVisible: i && (_?.enabled ?? !0),
      items: Oo(c, _),
      overlayContent: p,
      overlayVisible: d,
      onKeyDown: (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), A(), f?.focus({ preventScroll: !0 }));
      },
    });
  }
  return (0, Z.jsx)(Eo, {
    bounds: e,
    boundsSource: t,
    zoom: n,
    isVisible: i && (_?.enabled ?? !0),
    items: Oo(
      [
        { kind: `button`, id: `text-style`, label: `Text styles`, icon: tt },
        {
          kind: `button`,
          id: `bold`,
          label: `Bold`,
          icon: lt,
          hideLabel: !0,
          onClick: () => {
            a && o && o(`toggleRangeBold`, { rangeAddress: a });
          },
        },
        {
          kind: `button`,
          id: `italic`,
          label: `Italic`,
          icon: et,
          hideLabel: !0,
          onClick: () => {
            a && o && o(`toggleRangeItalic`, { rangeAddress: a });
          },
        },
        { kind: `separator`, id: `text-separator` },
        {
          kind: `popover`,
          id: `fill-color`,
          label: `Fill color`,
          icon: ct,
          hideLabel: !0,
          align: `center`,
          content: (0, Z.jsxs)(`div`, {
            "data-walnut-edit-popover": `true`,
            className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
            children: [
              (0, Z.jsx)(`p`, {
                className: `mb-2 text-xs font-medium text-token-text-secondary`,
                children: `Background color`,
              }),
              (0, Z.jsx)(`div`, {
                className: `grid grid-cols-7 gap-1`,
                children: ko(w, _?.controls.fill).map((e) =>
                  (0, Z.jsx)(
                    r,
                    {
                      asChild: !0,
                      children: (0, Z.jsx)(`button`, {
                        type: `button`,
                        disabled: _ != null && _.controls.fill.state !== `enabled`,
                        className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                        style: { backgroundColor: e.hex },
                        onClick: (t) => {
                          (t.preventDefault(), t.stopPropagation(), T(e.hex));
                        },
                        children: (0, Z.jsx)(`span`, { className: `sr-only`, children: e.label }),
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
          icon: ot,
          hideLabel: !0,
          align: `center`,
          content: (0, Z.jsxs)(`div`, {
            "data-walnut-edit-popover": `true`,
            className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
            children: [
              (0, Z.jsx)(`p`, {
                className: `mb-2 text-xs font-medium text-token-text-secondary`,
                children: `Text color`,
              }),
              (0, Z.jsx)(`div`, {
                className: `grid grid-cols-7 gap-1`,
                children: ko(w, _?.controls.textColor).map((e) =>
                  (0, Z.jsx)(
                    r,
                    {
                      asChild: !0,
                      children: (0, Z.jsx)(`button`, {
                        type: `button`,
                        disabled: _ != null && _.controls.textColor.state !== `enabled`,
                        className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                        style: { backgroundColor: e.hex },
                        onClick: (t) => {
                          (t.preventDefault(), t.stopPropagation(), E(e.hex));
                        },
                        children: (0, Z.jsx)(`span`, { className: `sr-only`, children: e.label }),
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
          icon: $e,
          hideLabel: !0,
          onClick: () => {
            a && o && o(`applyRangeBorders`, { rangeAddress: a });
          },
        },
        { kind: `separator`, id: `ask-separator` },
        {
          kind: `button`,
          id: `ask`,
          label: `Ask`,
          subLabel: (0, Z.jsx)(`span`, {
            className: `text-[11px] leading-none text-token-text-tertiary`,
            children: bn(),
          }),
          onClick: () => {
            h?.();
          },
        },
      ],
      _,
    ),
  });
}
function Oo(e, t) {
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
function ko(e, t) {
  return (
    t?.options?.palette?.map(
      (t) => e.find((e) => e.hex.toLowerCase() === t.toLowerCase()) ?? { key: t, label: t, hex: t },
    ) ?? e
  );
}
var X, Ao, Z, jo, Mo;
function No() {
  return (No = e(() => {
    (Ae(),
      te(),
      x(),
      (X = l()),
      (Ao = u()),
      On(),
      Sa(),
      go(),
      dn(),
      nt(),
      To(),
      so(),
      (Z = _()),
      (jo = [`DesaturatedWarm`, `Purple`, `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`]),
      (Mo = [700, 600, 500, 400, 300, 200, 100]));
  }))();
}
function Po(e, t, n) {
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
function Fo(e) {
  return (e ?? []).filter((e) => e.length > 0);
}
function Io(e, t) {
  let n = e.slice(t).filter((e) => e.length > 0);
  return n.length === 0 ? null : n.length === 1 ? (n[0] ?? null) : We(n);
}
function Lo(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ro(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (!r || !i || !Lo(r, i)) return !1;
  }
  return !0;
}
function zo(e) {
  let t = Fo(e.externalCrdtUpdates);
  return (
    e.initialCrdtState && e.initialCrdtState.length > 0 && t.unshift(e.initialCrdtState),
    t.length === 0 ? e.initialCrdtState : t.length === 1 ? t[0] : We(t)
  );
}
function Bo(e) {
  let t = Fo(e.externalCrdtUpdates);
  return {
    initialCrdtState: zo({ initialCrdtState: e.initialCrdtState, externalCrdtUpdates: t }),
    bootstrappedExternalCrdtUpdates: t,
  };
}
function Vo(e) {
  let t = Fo(e.updates),
    n = e.bootstrapState.bootstrappedExternalCrdtUpdates;
  if (n.length === 0 || t.length < n.length) return t;
  for (let e = 0; e < n.length; e += 1) {
    let r = n[e],
      i = t[e];
    if (!r || !i || !Lo(r, i)) return t;
  }
  return t.slice(n.length);
}
function Ho(e, t) {
  return e instanceof Error && e.message.trim().length > 0
    ? e.message
    : `Failed to restore external ${t.toLowerCase()} edits.`;
}
function Uo({ initialCrdtState: e, externalCrdtUpdates: t, externalCrdtUpdateSource: n }) {
  let r = (0, Q.useRef)(null);
  r.current ??= Bo({ initialCrdtState: e, externalCrdtUpdates: n?.getSnapshot() ?? t });
  let i = r.current,
    a = (0, Q.useMemo)(() => {
      if (!n) return;
      let e,
        t = [];
      return {
        getSnapshot: () => {
          let r = n.getSnapshot();
          return (r !== e && ((e = r), (t = Vo({ bootstrapState: i, updates: r }))), t);
        },
        subscribe: (e) => n.subscribe(e),
      };
    }, [i, n]);
  return {
    initialCrdtState: i.initialCrdtState,
    externalCrdtUpdateSource: a,
    externalCrdtUpdates: a ? void 0 : Vo({ bootstrapState: i, updates: t }),
  };
}
function Wo({
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
  let l = (0, Q.useRef)(null),
    u = (0, Q.useRef)(i ?? []),
    [d, f] = (0, Q.useState)(c == null),
    [p, m] = (0, Q.useState)(null),
    h = (0, Q.useRef)(o),
    g = (0, Q.useRef)(s),
    _ = (0, Q.useRef)(c),
    v = c != null,
    y = a ? [] : (i ?? []);
  Ro(u.current, y) || (u.current = y);
  let b = u.current;
  return (
    (0, Q.useEffect)(() => {
      ((h.current = o), (g.current = s), (_.current = c));
    }, [o, s, c]),
    (0, Q.useEffect)(() => {
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
            (u(We([a, e])), (o = !0));
            return;
          }
          u(e);
        }),
        p = (e) => {
          ((a = new Uint8Array(e)), s.length > 0 && (u(We([a, ...s])), (o = !0), (s.length = 0)), i && f(!0));
        },
        m = () => {
          c = t
            .requestCrdtSnapshot()
            .then(p)
            .catch((e) => {
              !i || e instanceof ht || (l = setTimeout(m, Jo));
            });
        };
      return (
        m(),
        () => {
          ((i = !1), l != null && clearTimeout(l));
          let o = 0,
            u = () => (
              (o += 1),
              Po(
                (async () => {
                  let e = t.flushCrdtUpdates?.() ?? Promise.resolve();
                  (await Promise.all([e, c ?? Promise.resolve()]),
                    s.length > 0 && a == null && p(await t.requestCrdtSnapshot()),
                    d());
                })(),
                n,
                `${e} CRDT drain attempt timed out.`,
              ).catch((e) => {
                if ((g.current?.(), e instanceof ht)) {
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
    (0, Q.useEffect)(() => {
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
                for (; a < i.length && a < r.length && Lo(i[a], r[a]);) a += 1;
                let s = r.length - a;
                if ((m(s >= qo ? { kind: `restoring`, pendingUpdateCount: s } : null), s === 0)) {
                  i = r;
                  return;
                }
                try {
                  let e = Io(r, a);
                  e && (await t.applyCrdtUpdate(e));
                } catch (t) {
                  if (n) return;
                  if (!Ro(r, o)) continue;
                  m({ kind: `failed`, artifactLabel: e, errorMessage: Ho(t, e), pendingUpdateCount: s });
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
    (0, Q.useEffect)(() => {
      a || l.current?.(b);
    }, [e, t, a, b]),
    { crdtPublishingReady: d, restoreState: p }
  );
}
function Go({ artifactLabel: e, restoreState: t }) {
  return t
    ? (0, Ko.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]`,
        children: (0, Ko.jsx)(`div`, {
          className: y(
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
var Q, Ko, qo, Jo;
function Yo() {
  return (Yo = e(() => {
    (x(), (Q = l()), Be(), yt(), (Ko = _()), (qo = 500), (Jo = 250));
  }))();
}
function Xo(e) {
  return e === `codex` ? Zo : wt(e);
}
var Zo;
function Qo() {
  return (Qo = e(() => {
    (xt(),
      (Zo = {
        ...At,
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
                      return (0, ns.jsx)(Wt, {
                        ...u,
                        annotationCount: s.length,
                        isAnnotating: t,
                        isAnnotationInteractionActive: n,
                        previewContent:
                          s.length === 0
                            ? void 0
                            : (0, ns.jsx)(Ue, {
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
  return (t[5] === o ? (s = t[6]) : ((s = (0, ns.jsx)(Gt, { children: o })), (t[5] = o), (t[6] = s)), s);
}
function es(e) {
  return e.localArtifactAnnotationContext?.annotationId ?? [];
}
var ts, ns;
function rs() {
  return (rs = e(() => {
    ((ts = w()), Ge(), Kt(), (ns = _()));
  }))();
}
var is;
function as() {
  return (as = e(() => {
    (Te(),
      T(),
      V(),
      se(),
      B(),
      oe(),
      _e(),
      F(),
      ge(),
      Se(),
      (is = {
        bar: Ee,
        line: we,
        pie: L,
        doughnut: U,
        area: N,
        scatter: de,
        histogram: R,
        waterfall: le,
        funnel: fe,
        treemap: ne,
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
    ? ((f = y(n, us.section, `min-w-0`, u, d)), (t[0] = n), (t[1] = u), (t[2] = d), (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== i || t[5] !== l || t[6] !== c || t[7] !== r
    ? ((p =
        r != null &&
        (0, ms.jsxs)(`h3`, {
          className: y(
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
    ((ps = w()), x(), ds(), (ms = _()));
  }))();
}
function gs(e) {
  let t = (0, _s.c)(10),
    { enabled: n, label: r, disabled: i, disabledReason: a, onClick: o } = e,
    c = i ? a : void 0,
    l = i ? a : void 0,
    u = n ? pe : m,
    d;
  t[0] === u ? (d = t[1]) : ((d = (0, vs.jsx)(s, { asset: u })), (t[0] = u), (t[1] = d));
  let f;
  return (
    t[2] !== i || t[3] !== n || t[4] !== r || t[5] !== o || t[6] !== c || t[7] !== l || t[8] !== d
      ? ((f = (0, vs.jsx)(j, {
          className: `me-px`,
          size: `iconCircle`,
          color: `ghostActive`,
          "aria-label": r,
          "aria-expanded": n,
          disabled: i,
          title: c,
          "aria-description": l,
          onClick: o,
          children: d,
        })),
        (t[2] = i),
        (t[3] = n),
        (t[4] = r),
        (t[5] = o),
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
    ((_s = w()), h(), d(), M(), S(), (vs = _()));
  }))();
}
function bs(e) {
  let t = (0, Ss.c)(54),
    {
      label: n,
      value: r,
      onChange: i,
      presets: a,
      min: s,
      max: c,
      suffix: l,
      side: u,
      disabled: d,
      disabledReason: f,
    } = e,
    p = s === void 0 ? 0 : s,
    m = u === void 0 ? `bottom` : u,
    h = ue(),
    g = (0, Cs.useRef)(null),
    _ = (0, Cs.useRef)(null),
    v = r == null ? `` : String(Math.round(r * 100) / 100),
    y;
  t[0] !== v || t[1] !== r ? ((y = { base: r, text: v }), (t[0] = v), (t[1] = r), (t[2] = y)) : (y = t[2]);
  let [b, x] = (0, Cs.useState)(y);
  b.base !== r && x({ base: r, text: v });
  let S = b.base === r ? b.text : v,
    C = d ? f : void 0,
    w = d ? f : void 0,
    T;
  t[3] === r
    ? (T = t[4])
    : ((T = (e) => x({ base: r, text: e.currentTarget.value })), (t[3] = r), (t[4] = T));
  let E;
  t[5] === h
    ? (E = t[6])
    : ((E = h.formatMessage({
        id: `presentationEditor.mixed`,
        defaultMessage: `Mixed`,
        description: `A formatting value differs across selected objects or table cells`,
      })),
      (t[5] = h),
      (t[6] = E));
  let D;
  t[7] !== v || t[8] !== c || t[9] !== p || t[10] !== i || t[11] !== r
    ? ((D = (e) => {
        let t = e.currentTarget.valueAsNumber;
        Number.isFinite(t) && t >= p && (c == null || t <= c) && e.currentTarget.value !== v && t !== r
          ? i(t)
          : x({ base: r, text: v });
      }),
      (t[7] = v),
      (t[8] = c),
      (t[9] = p),
      (t[10] = i),
      (t[11] = r),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] !== v || t[14] !== r
    ? ((O = (e) => {
        e.nativeEvent.isComposing ||
          (e.key === `Escape` && ((e.currentTarget.value = v), x({ base: r, text: v })),
          (e.key === `Enter` || e.key === `Escape`) &&
            (e.preventDefault(), e.stopPropagation(), e.currentTarget.blur(), _.current?.focus()));
      }),
      (t[13] = v),
      (t[14] = r),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] === l
    ? (k = t[17])
    : ((k =
        l == null
          ? void 0
          : (0, ws.jsx)(`span`, { className: `shrink-0 text-secondary select-none`, children: l })),
      (t[16] = l),
      (t[17] = k));
  let A = m === `left` ? `start` : `end`,
    M;
  t[18] === m
    ? (M = t[19])
    : ((M = (e, t) => {
        if (g.current == null) return { side: m };
        let n = g.current.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        return m === `left`
          ? { side: m, align: `start`, sideOffset: (r.left - n.left) / t, alignOffset: (n.top - r.top) / t }
          : {
              side: m,
              align: `end`,
              sideOffset: (n.bottom - r.bottom) / t,
              alignOffset: (r.right - n.right) / t,
            };
      }),
      (t[18] = m),
      (t[19] = M));
  let N;
  t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = (0, ws.jsx)(ie, {})), (t[20] = N)) : (N = t[20]);
  let P;
  t[21] !== d || t[22] !== n
    ? ((P = (0, ws.jsx)(j, {
        ref: _,
        color: `ghostActive`,
        size: `fieldControl`,
        focusRing: `surface`,
        "aria-label": n,
        disabled: d,
        children: N,
      })),
      (t[21] = d),
      (t[22] = n),
      (t[23] = P))
    : (P = t[23]);
  let F;
  if (t[24] !== h || t[25] !== i || t[26] !== a || t[27] !== r) {
    let e;
    (t[29] !== h || t[30] !== i || t[31] !== r
      ? ((e = (e) =>
          (0, ws.jsx)(
            he.Item,
            {
              rightIcon: r === e.value ? (0, ws.jsx)(o, {}) : void 0,
              onSelect: () => i(e.value),
              children: e.label ?? h.formatNumber(e.value),
            },
            e.value,
          )),
        (t[29] = h),
        (t[30] = i),
        (t[31] = r),
        (t[32] = e))
      : (e = t[32]),
      (F = a.map(e)),
      (t[24] = h),
      (t[25] = i),
      (t[26] = a),
      (t[27] = r),
      (t[28] = F));
  } else F = t[28];
  let I;
  t[33] !== d || t[34] !== m || t[35] !== A || t[36] !== M || t[37] !== P || t[38] !== F
    ? ((I = (0, ws.jsx)(be, {
        side: m,
        align: A,
        disabled: d,
        contentWidth: `menuBounded`,
        contentClassName: `pointer-events-auto`,
        contentRef: xs,
        getPlacement: M,
        triggerButton: P,
        children: F,
      })),
      (t[33] = d),
      (t[34] = m),
      (t[35] = A),
      (t[36] = M),
      (t[37] = P),
      (t[38] = F),
      (t[39] = I))
    : (I = t[39]);
  let L;
  return (
    t[40] !== d ||
    t[41] !== n ||
    t[42] !== c ||
    t[43] !== p ||
    t[44] !== k ||
    t[45] !== I ||
    t[46] !== C ||
    t[47] !== w ||
    t[48] !== T ||
    t[49] !== E ||
    t[50] !== D ||
    t[51] !== O ||
    t[52] !== S
      ? ((L = (0, ws.jsx)(`div`, {
          ref: g,
          className: `min-w-0`,
          children: (0, ws.jsx)(Re, {
            variant: `field`,
            type: `number`,
            "aria-label": n,
            "aria-description": C,
            title: w,
            disabled: d,
            min: p,
            max: c,
            step: `any`,
            value: S,
            onChange: T,
            placeholder: E,
            onBlur: D,
            onKeyDown: O,
            valueSuffix: k,
            trailingControl: I,
          }),
        })),
        (t[40] = d),
        (t[41] = n),
        (t[42] = c),
        (t[43] = p),
        (t[44] = k),
        (t[45] = I),
        (t[46] = C),
        (t[47] = w),
        (t[48] = T),
        (t[49] = E),
        (t[50] = D),
        (t[51] = O),
        (t[52] = S),
        (t[53] = L))
      : (L = t[53]),
    L
  );
}
function xs(e) {
  return e?.setAttribute(`data-popcorn-edit-toolbar-root`, `true`);
}
var Ss, Cs, ws;
function Ts() {
  return (Ts = e(() => {
    ((Ss = w()), (Cs = l()), A(), M(), I(), E(), Oe(), (ws = _()));
  }))();
}
function Es(e) {
  let t = (0, Ds.c)(10),
    { label: n, checked: r, onChange: i, disabled: a, disabledReason: o } = e,
    s = a ? o : void 0,
    c = a ? o : void 0,
    l;
  t[0] !== r || t[1] !== a || t[2] !== n || t[3] !== i || t[4] !== s || t[5] !== c
    ? ((l = (0, Os.jsx)(ae, {
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
    ((Ds = w()), Ce(), (Os = _()));
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
    { value: n, onChange: r, variant: i, scale: a, disabled: o, disabledReason: s, config: c } = e,
    l = i === void 0 ? `toolbar` : i,
    u = a === void 0 ? `spreadsheet` : a,
    d;
  t[0] === c ? (d = t[1]) : ((d = c === void 0 ? { state: `enabled` } : c), (t[0] = c), (t[1] = d));
  let f = d,
    p = ue(),
    m;
  t[2] === f ? (m = t[3]) : ((m = Je(f)), (t[2] = f), (t[3] = m));
  let h = m,
    g;
  t[4] === h ? (g = t[5]) : ((g = { key: h, open: !1 }), (t[4] = h), (t[5] = g));
  let [_, v] = (0, zs.useState)(g),
    y = _.key === h && _.open,
    b;
  t[6] === h ? (b = t[7]) : ((b = (e) => v({ key: h, open: e })), (t[6] = h), (t[7] = b));
  let x = b,
    S;
  t[8] === o ? (S = t[9]) : ((S = (e, t) => !o && Ke(e, t, { min: 1, max: 400 })), (t[8] = o), (t[9] = S));
  let C = ft(f, r, S),
    w = Math.max(1, f.options?.min ?? 1),
    T = Math.min(400, f.options?.max ?? 400),
    E = f.options?.allowCustom !== !1,
    D = f.reason ?? s,
    O;
  t[10] === p
    ? (O = t[11])
    : ((O = p.formatMessage({
        id: `artifactEditor.fontSize`,
        defaultMessage: `Font size`,
        description: `Open font size presets`,
      })),
      (t[10] = p),
      (t[11] = O));
  let k = O,
    A;
  t[12] === u
    ? (A = t[13])
    : ((A = u === `presentation` ? [72, 48, 36, 28, 20] : [40, 24, 18, 13, 11]), (t[12] = u), (t[13] = A));
  let j, M, N, P, F, I, L, R, ee, z, B, V, H;
  if (
    t[14] !== E ||
    t[15] !== C ||
    t[16] !== f.options ||
    t[17] !== f.state ||
    t[18] !== o ||
    t[19] !== D ||
    t[20] !== p ||
    t[21] !== k ||
    t[22] !== T ||
    t[23] !== w ||
    t[24] !== y ||
    t[25] !== h ||
    t[26] !== x ||
    t[27] !== A ||
    t[28] !== n ||
    t[29] !== l
  ) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = A.map(Ls),
        r = E ? e : [];
      f.options?.presets &&
        (r = f.options.presets.map((t) => ({
          value: t,
          label:
            e.find((e) => e.value === t)?.label ?? (0, $.jsx)($.Fragment, { children: p.formatNumber(t) }),
        })));
      let i;
      t[43] !== T || t[44] !== w
        ? ((i = (e) => e.value >= w && e.value <= T), (t[43] = T), (t[44] = w), (t[45] = i))
        : (i = t[45]);
      let a = r.filter(i),
        s = o || f.state !== `enabled` || (!E && a.length === 0);
      if (f.state === `hidden`) {
        H = null;
        break bb0;
      }
      if (l === `field` && E) {
        H = (0, $.jsx)(
          bs,
          { disabled: s, disabledReason: D, label: k, value: n, onChange: C, min: w, max: T, presets: a },
          h,
        );
        break bb0;
      }
      ((j = be),
        (M = h),
        (N = `bottom`),
        (P = `start`),
        (F = y),
        (I = x),
        (L = s),
        (R = Is),
        (ee = `${js.surface} pointer-events-auto min-w-50`),
        (z = `menuBounded`));
      let c = l === `field` ? `field` : `ghostActive`,
        u = l === `field` ? `field` : `formatToolbar`,
        d = s ? D : void 0,
        m = s ? D : void 0,
        g;
      t[46] === n
        ? (g = t[47])
        : ((g =
            n ??
            (0, $.jsx)(xe, {
              id: `artifactEditor.mixed`,
              defaultMessage: `Mixed`,
              description: `A formatting value differs across selected cells or objects`,
            })),
          (t[46] = n),
          (t[47] = g));
      let _;
      (t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, $.jsx)(ie, {})), (t[48] = _))
        : (_ = t[48]),
        t[49] !== s || t[50] !== k || t[51] !== c || t[52] !== u || t[53] !== d || t[54] !== m || t[55] !== g
          ? ((B = (0, $.jsxs)(Yt, {
              className: js.surface,
              color: c,
              contentLayout: `dropdown`,
              size: u,
              "aria-label": k,
              disabled: s,
              "aria-description": d,
              title: m,
              children: [g, _],
            })),
            (t[49] = s),
            (t[50] = k),
            (t[51] = c),
            (t[52] = u),
            (t[53] = d),
            (t[54] = m),
            (t[55] = g),
            (t[56] = B))
          : (B = t[56]));
      let v;
      (t[57] === C
        ? (v = t[58])
        : ((v = (e) => (0, $.jsx)(he.Item, { onSelect: () => C(e.value), children: e.label }, e.value)),
          (t[57] = C),
          (t[58] = v)),
        (V = a.map(v)));
    }
    ((t[14] = E),
      (t[15] = C),
      (t[16] = f.options),
      (t[17] = f.state),
      (t[18] = o),
      (t[19] = D),
      (t[20] = p),
      (t[21] = k),
      (t[22] = T),
      (t[23] = w),
      (t[24] = y),
      (t[25] = h),
      (t[26] = x),
      (t[27] = A),
      (t[28] = n),
      (t[29] = l),
      (t[30] = j),
      (t[31] = M),
      (t[32] = N),
      (t[33] = P),
      (t[34] = F),
      (t[35] = I),
      (t[36] = L),
      (t[37] = R),
      (t[38] = ee),
      (t[39] = z),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H));
  } else
    ((j = t[30]),
      (M = t[31]),
      (N = t[32]),
      (P = t[33]),
      (F = t[34]),
      (I = t[35]),
      (L = t[36]),
      (R = t[37]),
      (ee = t[38]),
      (z = t[39]),
      (B = t[40]),
      (V = t[41]),
      (H = t[42]));
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  t[59] !== E || t[60] !== C || t[61] !== p || t[62] !== T || t[63] !== w || t[64] !== x || t[65] !== n
    ? ((U =
        E &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(he.Separator, {}),
            (0, $.jsx)(he.ItemSlot, {
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
                      (e.preventDefault(), e.currentTarget.querySelector(`input`)?.blur(), x(!1)));
                },
                children: (0, $.jsx)(
                  Re,
                  {
                    variant: `field`,
                    type: `number`,
                    min: w,
                    max: T,
                    step: `any`,
                    defaultValue: n ?? ``,
                    "aria-label": p.formatMessage({
                      id: `artifactEditor.customFontSize`,
                      defaultMessage: `Custom font size`,
                      description: `Enter a font size in the artifact font size menu`,
                    }),
                    placeholder: p.formatMessage({
                      id: `artifactEditor.mixed`,
                      defaultMessage: `Mixed`,
                      description: `A formatting value differs across selected cells or objects`,
                    }),
                    onBlur: (e) => {
                      if (e.currentTarget.parentElement?.contains(e.relatedTarget)) return;
                      let t = e.currentTarget.valueAsNumber;
                      Number.isFinite(t) && t >= w && t <= T && t !== n
                        ? C(t)
                        : (e.currentTarget.value = e.currentTarget.defaultValue);
                    },
                  },
                  n,
                ),
              }),
            }),
          ],
        })),
      (t[59] = E),
      (t[60] = C),
      (t[61] = p),
      (t[62] = T),
      (t[63] = w),
      (t[64] = x),
      (t[65] = n),
      (t[66] = U))
    : (U = t[66]);
  let te;
  return (
    t[67] !== j ||
    t[68] !== M ||
    t[69] !== N ||
    t[70] !== P ||
    t[71] !== F ||
    t[72] !== I ||
    t[73] !== L ||
    t[74] !== R ||
    t[75] !== ee ||
    t[76] !== z ||
    t[77] !== B ||
    t[78] !== V ||
    t[79] !== U
      ? ((te = (0, $.jsxs)(
          j,
          {
            side: N,
            align: P,
            open: F,
            onOpenChange: I,
            disabled: L,
            contentRef: R,
            contentClassName: ee,
            contentWidth: z,
            triggerButton: B,
            children: [V, U],
          },
          M,
        )),
        (t[67] = j),
        (t[68] = M),
        (t[69] = N),
        (t[70] = P),
        (t[71] = F),
        (t[72] = I),
        (t[73] = L),
        (t[74] = R),
        (t[75] = ee),
        (t[76] = z),
        (t[77] = B),
        (t[78] = V),
        (t[79] = U),
        (t[80] = te))
      : (te = t[80]),
    te
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
        (0, $.jsx)(xe, {
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
    ((Rs = w()), Ae(), vt(), (zs = l()), A(), I(), E(), Oe(), Ts(), Jt(), Ms(), ($ = _()));
  }))();
}
export {
  Yi as $,
  $t,
  _o as A,
  Jn as At,
  ma as B,
  Nn as Bt,
  Uo as C,
  ei as Ct,
  No as D,
  zr as Dt,
  Do as E,
  Rr as Et,
  so as F,
  Kn as Ft,
  aa as G,
  gn as Gt,
  pa as H,
  jn as Ht,
  no as I,
  Bn as It,
  sa as J,
  bn as Jt,
  la as K,
  xn as Kt,
  Ia as L,
  Un as Lt,
  co as M,
  Xn as Mt,
  go as N,
  $n as Nt,
  xo as O,
  ir as Ot,
  oo as P,
  Wn as Pt,
  Qi as Q,
  yn as Qt,
  ga as R,
  In as Rt,
  Yo as S,
  ni as St,
  Eo as T,
  Zr as Tt,
  da as U,
  Mn as Ut,
  ha as V,
  Pn as Vt,
  fa as W,
  Ln as Wt,
  ta as X,
  On as Xt,
  ra as Y,
  pn as Yt,
  ea as Z,
  mn as Zt,
  $o as _,
  _i as _t,
  Es as a,
  Vi as at,
  Qo as b,
  ai as bt,
  Ts as c,
  Ri as ct,
  fs as d,
  ji as dt,
  en,
  Zi as et,
  hs as f,
  Pi as ft,
  as as g,
  xi as gt,
  is as h,
  Ai as ht,
  js as i,
  Wi as it,
  To as j,
  Yn as jt,
  vo as k,
  ar as kt,
  gs as l,
  Fi as lt,
  us as m,
  bi as mt,
  Bs as n,
  Ji as nt,
  ks as o,
  Hi as ot,
  ds as p,
  hi as pt,
  ia as q,
  hn as qt,
  Ms as r,
  Ui as rt,
  bs as s,
  Bi as st,
  Ns as t,
  Gi as tt,
  ys as u,
  Li as ut,
  rs as v,
  ci as vt,
  Wo as w,
  Hr as wt,
  Go as x,
  ri as xt,
  Xo as y,
  oi as yt,
  ba as z,
  Fn as zt,
};
//# sourceMappingURL=inspector-font-size-menu-c921c8fa72a1.js.map
