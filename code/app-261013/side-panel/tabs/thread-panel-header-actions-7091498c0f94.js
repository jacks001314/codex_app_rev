import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $v as t,
  ADt as n,
  Ixt as r,
  Mz as i,
  Nz as a,
  Pxt as o,
  SO as s,
  SX as c,
  VDt as l,
  Vxt as u,
  bX as d,
  cz as f,
  jDt as p,
  kDt as m,
  lf as h,
  uf as g,
  vzt as _,
  xMt as v,
  xX as y,
  yX as b,
  yzt as x,
  zxt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  C3n as C,
  Cwr as w,
  GSt as T,
  I3n as E,
  R3n as D,
  RCr as O,
  WSt as k,
  XHt as A,
  YHt as j,
  b3n as M,
  cI as N,
  dwn as P,
  fSn as F,
  gwr as I,
  hwn as L,
  lSn as R,
  sI as z,
  v3n as B,
  y3n as V,
} from "./app-initial-5851df3f6cb1.js";
import { n as H, t as U } from "./thread-panel-toggle-button-66afa6499036.js";
import { a as W, i as G } from "./thread-app-shell-chrome-404b941243dd.js";
function K() {
  let e = (0, X.c)(17),
    t = r(I),
    n = l(),
    a = u(B),
    o = u(M),
    s = u(V) !== !1,
    c = S(R, `toggleBottomPanel`);
  if (!a) return null;
  let d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = m({
        id: `appShell.header.bottomPanel`,
        defaultMessage: `Bottom panel`,
        description: `Header context menu checkbox that toggles the bottom panel launcher button`,
      })),
      (e[0] = d))
    : (d = e[0]);
  let f;
  e[1] !== s || e[2] !== t
    ? ((f = () => {
        D(t, !s);
      }),
      (e[1] = s),
      (e[2] = t),
      (e[3] = f))
    : (f = e[3]);
  let p;
  e[4] !== s || e[5] !== d || e[6] !== f
    ? ((p = (0, Z.jsx)(j.HeaderContextMenuItem, {
        checked: s,
        id: `toggle-bottom-panel-launcher`,
        message: d,
        type: `checkbox`,
        onSelect: f,
      })),
      (e[4] = s),
      (e[5] = d),
      (e[6] = f),
      (e[7] = p))
    : (p = e[7]);
  let g;
  e[8] !== n || e[9] !== s || e[10] !== o || e[11] !== t || e[12] !== c
    ? ((g = s
        ? (0, Z.jsx)(j.HeaderAction, {
            actionId: `thread-bottom-panel-toggle`,
            align: `end`,
            order: 200,
            slotPosition: `right`,
            children: (0, Z.jsx)(U, {
              label: n.formatMessage({
                id: `threadPage.toggleBottomPanel`,
                defaultMessage: `Toggle bottom panel`,
                description: `Toggles the bottom panel visibility`,
              }),
              pressed: o,
              shortcut: c,
              onClick: () => W(t),
              children: (0, Z.jsx)(i, { "aria-hidden": !1, asset: h }),
            }),
          })
        : null),
      (e[8] = n),
      (e[9] = s),
      (e[10] = o),
      (e[11] = t),
      (e[12] = c),
      (e[13] = g))
    : (g = e[13]);
  let _;
  return (
    e[14] !== p || e[15] !== g
      ? ((_ = (0, Z.jsxs)(Z.Fragment, { children: [p, null, g] })), (e[14] = p), (e[15] = g), (e[16] = _))
      : (_ = e[16]),
    _
  );
}
function q(e) {
  let t = (0, X.c)(13),
    { showReviewTab: n } = e,
    a = r(I),
    o = l(),
    s = u(C),
    f = S(R, `toggleSidePanel`),
    p;
  t[0] === o ? (p = t[1]) : ((p = o.formatMessage(Q.toggleSidePanel)), (t[0] = o), (t[1] = p));
  let m = !n,
    h;
  t[2] === a ? (h = t[3]) : ((h = () => T(a)), (t[2] = a), (t[3] = h));
  let g;
  t[4] === s
    ? (g = t[5])
    : ((g = s
        ? (0, Z.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: d })
        : (0, Z.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: c })),
      (t[4] = s),
      (t[5] = g));
  let _;
  return (
    t[6] !== s || t[7] !== p || t[8] !== m || t[9] !== h || t[10] !== g || t[11] !== f
      ? ((_ = (0, Z.jsx)(j.HeaderAction, {
          actionId: `thread-remote-panel-toggles`,
          align: `end`,
          order: 300,
          slotPosition: `right`,
          children: (0, Z.jsx)(U, {
            label: p,
            disabled: m,
            pressed: s,
            shortcut: f,
            onClick: h,
            children: g,
          }),
        })),
        (t[6] = s),
        (t[7] = p),
        (t[8] = m),
        (t[9] = h),
        (t[10] = g),
        (t[11] = f),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function J() {
  let e = (0, X.c)(1),
    t = u(C),
    n = u(L.activeTabOwnsSingleTabHeader$);
  if (t && n) return null;
  let r;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(j.HeaderAction, {
          actionId: `thread-side-panel-close`,
          align: `end`,
          slotPosition: `right`,
          order: 300,
          children: (0, Z.jsx)(Y, {}),
        })),
        (e[0] = r))
      : (r = e[0]),
    r
  );
}
function Y() {
  let e = (0, X.c)(17),
    t = r(I),
    n = l(),
    a = u(C),
    o = u(L.tabs$).length,
    s = S(R, `toggleSidePanel`),
    f;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { loadMcpExtensions: !1, surface: `panel-launcher`, target: `right` }), (e[0] = f))
    : (f = e[0]);
  let { actions: p, isLoadingExtensions: m } = N(f),
    h;
  e[1] !== p || e[2] !== m || e[3] !== a || e[4] !== o || e[5] !== t
    ? ((h = () => {
        if (!m && !a && o === 0 && p.length === 1) {
          p[0]?.onSelect();
          return;
        }
        T(t);
      }),
      (e[1] = p),
      (e[2] = m),
      (e[3] = a),
      (e[4] = o),
      (e[5] = t),
      (e[6] = h))
    : (h = e[6]);
  let g = h,
    _;
  e[7] === n ? (_ = e[8]) : ((_ = n.formatMessage(Q.toggleSidePanel)), (e[7] = n), (e[8] = _));
  let v;
  e[9] === a
    ? (v = e[10])
    : ((v = a
        ? (0, Z.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: d })
        : (0, Z.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: c })),
      (e[9] = a),
      (e[10] = v));
  let y;
  return (
    e[11] !== g || e[12] !== a || e[13] !== _ || e[14] !== v || e[15] !== s
      ? ((y = (0, Z.jsx)(U, { label: _, pressed: a, shortcut: s, onClick: g, children: v })),
        (e[11] = g),
        (e[12] = a),
        (e[13] = _),
        (e[14] = v),
        (e[15] = s),
        (e[16] = y))
      : (y = e[16]),
    y
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = _()),
      g(),
      y(),
      b(),
      o(),
      x(),
      p(),
      A(),
      O(),
      P(),
      E(),
      F(),
      s(),
      a(),
      t(),
      f(),
      w(),
      G(),
      z(),
      H(),
      k(),
      (Z = v()),
      (Q = n({
        toggleSidePanel: {
          id: `thread.sidePanel.toggle`,
          defaultMessage: `Toggle side panel`,
          description: `Toggles the thread side panel in a local or new thread`,
        },
      })));
  }))();
}
export { $ as i, K as n, J as r, q as t };
//# sourceMappingURL=thread-panel-header-actions-7091498c0f94.js.map
