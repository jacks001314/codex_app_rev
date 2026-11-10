import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CCt as n,
  CZ as r,
  DB as i,
  FBt as a,
  Gf as o,
  JOt as s,
  Kf as c,
  LNt as l,
  OB as u,
  PBt as d,
  SZ as f,
  Ty as p,
  XOt as m,
  YOt as h,
  ZSt as g,
  ek as _,
  iCt as v,
  nCt as y,
  okt as b,
  rB as x,
  wZ as S,
  xZ as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A6t as w,
  ADn as T,
  GI as E,
  JRt as D,
  MOr as O,
  PDn as k,
  WI as ee,
  XAr as te,
  YRt as ne,
  ZAr as re,
  e7n as A,
  eOr as j,
  j6t as M,
  n7n as N,
  o7n as P,
  t7n as F,
  vTn as I,
  x7n as L,
  xTn as R,
  y7n as z,
  zOr as B,
} from "./app-initial-ad16eaadf81f.js";
import { n as V, t as H } from "./thread-panel-toggle-button-a355e87aeefd.js";
import { a as U, i as W } from "./thread-app-shell-chrome-783ea972fd83.js";
function G() {
  let e = (0, Y.c)(17),
    n = t(O),
    r = b(),
    a = v(A),
    c = v(N),
    l = v(F) !== !1,
    u = y(I, `toggleBottomPanel`);
  if (!a) return null;
  let d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = s({
        id: `appShell.header.bottomPanel`,
        defaultMessage: `Bottom panel`,
        description: `Header context menu checkbox that toggles the bottom panel launcher button`,
      })),
      (e[0] = d))
    : (d = e[0]);
  let f;
  e[1] !== l || e[2] !== n
    ? ((f = () => {
        L(n, !l);
      }),
      (e[1] = l),
      (e[2] = n),
      (e[3] = f))
    : (f = e[3]);
  let p;
  e[4] !== l || e[5] !== d || e[6] !== f
    ? ((p = (0, X.jsx)(D.HeaderContextMenuItem, {
        checked: l,
        id: `toggle-bottom-panel-launcher`,
        message: d,
        type: `checkbox`,
        onSelect: f,
      })),
      (e[4] = l),
      (e[5] = d),
      (e[6] = f),
      (e[7] = p))
    : (p = e[7]);
  let m;
  e[8] !== r || e[9] !== l || e[10] !== c || e[11] !== n || e[12] !== u
    ? ((m = l
        ? (0, X.jsx)(D.HeaderAction, {
            actionId: `thread-bottom-panel-toggle`,
            align: `end`,
            order: 200,
            slotPosition: `right`,
            children: (0, X.jsx)(H, {
              label: r.formatMessage({
                id: `threadPage.toggleBottomPanel`,
                defaultMessage: `Toggle bottom panel`,
                description: `Toggles the bottom panel visibility`,
              }),
              pressed: c,
              shortcut: u,
              onClick: () => U(n),
              children: (0, X.jsx)(i, { "aria-hidden": !1, asset: o }),
            }),
          })
        : null),
      (e[8] = r),
      (e[9] = l),
      (e[10] = c),
      (e[11] = n),
      (e[12] = u),
      (e[13] = m))
    : (m = e[13]);
  let h;
  return (
    e[14] !== p || e[15] !== m
      ? ((h = (0, X.jsxs)(X.Fragment, { children: [p, null, m] })), (e[14] = p), (e[15] = m), (e[16] = h))
      : (h = e[16]),
    h
  );
}
function K(e) {
  let n = (0, Y.c)(13),
    { showReviewTab: r } = e,
    a = t(O),
    o = b(),
    s = v(P),
    c = y(I, `toggleSidePanel`),
    l;
  n[0] === o ? (l = n[1]) : ((l = o.formatMessage(Z.toggleSidePanel)), (n[0] = o), (n[1] = l));
  let u = !r,
    d;
  n[2] === a ? (d = n[3]) : ((d = () => M(a)), (n[2] = a), (n[3] = d));
  let p;
  n[4] === s
    ? (p = n[5])
    : ((p = s
        ? (0, X.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: f })
        : (0, X.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: S })),
      (n[4] = s),
      (n[5] = p));
  let m;
  return (
    n[6] !== s || n[7] !== l || n[8] !== u || n[9] !== d || n[10] !== p || n[11] !== c
      ? ((m = (0, X.jsx)(D.HeaderAction, {
          actionId: `thread-remote-panel-toggles`,
          align: `end`,
          order: 300,
          slotPosition: `right`,
          children: (0, X.jsx)(H, {
            label: l,
            disabled: u,
            pressed: s,
            shortcut: c,
            onClick: d,
            children: p,
          }),
        })),
        (n[6] = s),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d),
        (n[10] = p),
        (n[11] = c),
        (n[12] = m))
      : (m = n[12]),
    m
  );
}
function q() {
  let e = (0, Y.c)(1);
  if (!v(Q)) return null;
  let t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(D.HeaderAction, {
          actionId: `thread-side-panel-close`,
          align: `end`,
          slotPosition: `right`,
          order: 300,
          children: (0, X.jsx)(J, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function J() {
  let e = (0, Y.c)(17),
    n = t(O),
    r = b(),
    a = v(P),
    o = v(k.tabs$).length,
    s = y(I, `toggleSidePanel`),
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { loadMcpExtensions: !1, surface: `panel-launcher`, target: `right` }), (e[0] = c))
    : (c = e[0]);
  let { actions: l, isLoadingExtensions: u } = E(c),
    d;
  e[1] !== l || e[2] !== u || e[3] !== a || e[4] !== o || e[5] !== n
    ? ((d = () => {
        if (!u && !a && o === 0 && l.length === 1) {
          l[0]?.onSelect();
          return;
        }
        M(n);
      }),
      (e[1] = l),
      (e[2] = u),
      (e[3] = a),
      (e[4] = o),
      (e[5] = n),
      (e[6] = d))
    : (d = e[6]);
  let p = d,
    m;
  e[7] === r ? (m = e[8]) : ((m = r.formatMessage(Z.toggleSidePanel)), (e[7] = r), (e[8] = m));
  let h;
  e[9] === a
    ? (h = e[10])
    : ((h = a
        ? (0, X.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: f })
        : (0, X.jsx)(i, { className: `rotate-180`, "aria-hidden": !1, asset: S })),
      (e[9] = a),
      (e[10] = h));
  let g;
  return (
    e[11] !== p || e[12] !== a || e[13] !== m || e[14] !== h || e[15] !== s
      ? ((g = (0, X.jsx)(H, { label: m, pressed: a, shortcut: s, onClick: p, children: h })),
        (e[11] = p),
        (e[12] = a),
        (e[13] = m),
        (e[14] = h),
        (e[15] = s),
        (e[16] = g))
      : (g = e[16]),
    g
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = d()),
      c(),
      r(),
      C(),
      g(),
      a(),
      m(),
      ne(),
      j(),
      T(),
      z(),
      R(),
      _(),
      u(),
      p(),
      x(),
      B(),
      te(),
      W(),
      ee(),
      V(),
      w(),
      (X = l()),
      (Z = h({
        toggleSidePanel: {
          id: `thread.sidePanel.toggle`,
          defaultMessage: `Toggle side panel`,
          description: `Toggles the thread side panel in a local or new thread`,
        },
      })),
      (Q = n(O, ({ get: e }) =>
        e(P) ? !e(k.activeTabOwnsSingleTabHeader$) : !e(re) || e(k.tabs$).length > 0,
      )));
  }))();
}
export { $ as i, G as n, q as r, K as t };
//# sourceMappingURL=thread-panel-header-actions-42a3a18c4058.js.map
