import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CZ as n,
  DB as r,
  FBt as i,
  JK as a,
  LNt as o,
  MFt as s,
  MNt as c,
  NNt as l,
  OB as u,
  PBt as d,
  SZ as f,
  TY as p,
  XOt as m,
  ZSt as h,
  iCt as g,
  jFt as _,
  okt as v,
  sct as y,
  tkt as b,
  wZ as ee,
  xZ as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A6t as S,
  ADn as C,
  DR as w,
  JDr as te,
  JRt as T,
  MOr as E,
  MR as D,
  OR as O,
  PDn as k,
  QCn as A,
  Qnt as ne,
  VPn as j,
  YRt as M,
  aQ as re,
  eOr as ie,
  hWt as ae,
  jR as oe,
  lQ as se,
  mWt as ce,
  njr as le,
  o7n as N,
  tjr as P,
  twn as F,
  y7n as I,
  zOr as L,
} from "./app-initial-ad16eaadf81f.js";
import { Ut as R, Wt as z, rn as B, tn as V } from "./app-primary-3e00728c2a4c.js";
import { n as H, t as U } from "./site-preview-bridge-5cbb371f0d54.js";
import { n as W, t as ue } from "./thread-panel-toggle-button-a355e87aeefd.js";
import { n as de, o as fe, r as pe, s as me } from "./thread-app-shell-chrome-783ea972fd83.js";
import { n as he, t as ge } from "./chat-tab-metadata-bridge-a418861b2736.js";
function _e() {
  let e = (0, G.c)(3),
    n = t(E),
    r,
    i;
  return (
    e[0] === n ? ((r = e[1]), (i = e[2])) : ((r = () => {}), (i = [n]), (e[0] = n), (e[1] = r), (e[2] = i)),
    (0, K.useLayoutEffect)(r, i),
    null
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = d()), h(), y(), (K = i()), L(), ne(), j());
  }))();
}
function ve(e) {
  let t = (0, J.c)(16),
    { chatIcon: n, header: r, title: i, isArchivedPreview: a, children: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(T.MainContentLayout, {
        layout: globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ === !0 ? `default` : `thread-edge-scroll`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === a ? (c = t[2]) : ((c = a ? null : (0, Y.jsx)(U, {})), (t[1] = a), (t[2] = c));
  let l;
  t[3] === r
    ? (l = t[4])
    : ((l =
        r == null ? null : (0, Y.jsx)(T.Header, { desktopPlacement: `titlebar`, divider: !1, children: r })),
      (t[3] = r),
      (t[4] = l));
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(T.RightPanelOutlet, { children: (0, Y.jsx)(T.RightPanelTabs, {}) })), (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n || t[7] !== r || t[8] !== a || t[9] !== i
    ? ((d = a ? null : (0, Y.jsx)(ye, { chatIcon: n, mainToolbar: r, title: i })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = a),
      (t[9] = i),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== o || t[12] !== c || t[13] !== l || t[14] !== d
      ? ((f = (0, Y.jsxs)(Y.Fragment, { children: [s, c, l, o, u, d] })),
        (t[11] = o),
        (t[12] = c),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function ye(e) {
  let n = (0, J.c)(25),
    { chatIcon: i, mainToolbar: a, title: o } = e,
    c = t(E),
    l = v(),
    u = g(N),
    d = g(te),
    p;
  n[0] !== u || n[1] !== c
    ? ((p = () => {
        if (u) {
          A(c);
          return;
        }
        if (c.get(k.tabs$).length === 0) {
          c.get(P, { name: `browser.in-app` }).isCapable &&
            s.dispatchHostMessage({
              type: `toggle-browser-panel`,
              open: !0,
              source: `manual`,
              initiator: `side_panel_menu`,
            });
          return;
        }
        F(c, { activateFallbackTab: !0 });
      }),
      (n[0] = u),
      (n[1] = c),
      (n[2] = p))
    : (p = n[2]);
  let m = p,
    h,
    _;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(oe, {})), (_ = (0, Y.jsx)(_e, {})), (n[3] = h), (n[4] = _))
    : ((h = n[3]), (_ = n[4]));
  let y;
  n[5] !== i || n[6] !== o
    ? ((y = (0, Y.jsx)(ge, { title: o, icon: i })), (n[5] = i), (n[6] = o), (n[7] = y))
    : (y = n[7]);
  let b = a ?? void 0,
    x;
  n[8] === b ? (x = n[9]) : ((x = (0, Y.jsx)(fe, { mainToolbar: b })), (n[8] = b), (n[9] = x));
  let S;
  n[10] === c.value.routeKind
    ? (S = n[11])
    : ((S =
        c.value.routeKind !== `other` && globalThis.window?.__CODEX_BROWSER_SIDE_CHAT__ !== !0
          ? (0, Y.jsx)(de, { showLauncherButton: !1 })
          : null),
      (n[10] = c.value.routeKind),
      (n[11] = S));
  let C;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(Y.Fragment, {
        children: (0, Y.jsx)(ce, {
          name: `browser.in-app`,
          children: (0, Y.jsx)(T.RightPanelTabListAfterSticky, { children: (0, Y.jsx)(be, {}) }),
        }),
      })),
      (n[12] = C))
    : (C = n[12]);
  let w;
  n[13] !== m || n[14] !== d || n[15] !== l || n[16] !== u
    ? ((w = d
        ? null
        : (0, Y.jsx)(T.HeaderAction, {
            actionId: `chatgpt-conversation-side-panel`,
            align: `end`,
            order: 300,
            slotPosition: `right`,
            children: (0, Y.jsx)(ue, {
              label: l.formatMessage({
                id: `chatgptConversations.sidePanel.toggle`,
                defaultMessage: `Toggle side panel`,
                description: `Toggles the ChatGPT conversation side panel`,
              }),
              pressed: u,
              onClick: m,
              children: u
                ? (0, Y.jsx)(r, { className: `rotate-180`, "aria-hidden": !1, asset: f })
                : (0, Y.jsx)(r, { className: `rotate-180`, "aria-hidden": !1, asset: ee }),
            }),
          })),
      (n[13] = m),
      (n[14] = d),
      (n[15] = l),
      (n[16] = u),
      (n[17] = w))
    : (w = n[17]);
  let D;
  n[18] === w ? (D = n[19]) : ((D = (0, Y.jsx)(Y.Fragment, { children: w })), (n[18] = w), (n[19] = D));
  let O;
  return (
    n[20] !== D || n[21] !== y || n[22] !== x || n[23] !== S
      ? ((O = (0, Y.jsxs)(Y.Fragment, { children: [h, _, y, x, S, C, D] })),
        (n[20] = D),
        (n[21] = y),
        (n[22] = x),
        (n[23] = S),
        (n[24] = O))
      : (O = n[24]),
    O
  );
}
function be() {
  let e = (0, J.c)(5),
    t = v();
  if (g(k.tabIds$).length === 0) return null;
  let n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `chatgptConversations.sidePanel.openBrowserTab`,
        defaultMessage: `Open browser tab`,
        description: `Button label for opening another Browser tab from a ChatGPT conversation side panel`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(a, { "aria-hidden": !1 })), (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === n
      ? (i = e[4])
      : ((i = (0, Y.jsx)(w, { color: `ghost`, title: n, uniform: !0, onClick: xe, children: r })),
        (e[3] = n),
        (e[4] = i)),
    i
  );
}
function xe() {
  s.dispatchHostMessage({ type: `open-browser-tab`, source: `manual`, initiator: `side_panel_menu` });
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = d()),
      n(),
      x(),
      h(),
      m(),
      ae(),
      le(),
      M(),
      D(),
      ie(),
      C(),
      O(),
      I(),
      H(),
      q(),
      u(),
      p(),
      _(),
      L(),
      pe(),
      W(),
      S(),
      he(),
      me(),
      (Y = o()));
  }))();
}
function Se(e) {
  let t = (0, Z.c)(17),
    n,
    r,
    i,
    a,
    o;
  if (
    (t[0] === e
      ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
      : (({ isTemporaryChat: o, isCloudTask: r, breadcrumbHeader: n, startActions: a, ...i } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o)),
    o !== void 0 && o)
  ) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(R, { isIndicator: !0, isTemporaryChat: !0 }),
          })),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let s;
  t[7] !== r || t[8] !== a
    ? ((s =
        a == null && !r
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                a,
                r
                  ? (0, Q.jsx)(Q.Fragment, {
                      children: (0, Q.jsx)(re, {
                        tooltipContent: (0, Q.jsx)(b, {
                          id: `chatgptConversations.header.cloudTaskTooltip`,
                          defaultMessage: `This chat was started in the cloud, so ChatGPT won't be able to access files on your computer unless you add them to your conversation`,
                          description: `Tooltip explaining file access limitations for a ChatGPT task that was started in the cloud`,
                        }),
                      }),
                    })
                  : null,
              ],
            })),
      (t[7] = r),
      (t[8] = a),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] !== i || t[11] !== s
    ? ((c = (0, Q.jsx)(V, { ...i, inset: `tab-strip-flush-start`, startActions: s })),
      (t[10] = i),
      (t[11] = s),
      (t[12] = c))
    : (c = t[12]);
  let l = c;
  if (n != null) {
    let e;
    return (
      t[13] === l
        ? (e = t[14])
        : ((e = (0, Q.jsxs)(Q.Fragment, { children: [null, (0, Q.jsx)(Q.Fragment, { children: l })] })),
          (t[13] = l),
          (t[14] = e)),
      e
    );
  }
  let u;
  return (
    t[15] === l ? (u = t[16]) : ((u = (0, Q.jsx)(Q.Fragment, { children: l })), (t[15] = l), (t[16] = u)),
    u
  );
}
function Ce(e) {
  let t = (0, Z.c)(10),
    { allowsThreadContentOverlap: n, children: r, menu: i } = e,
    a = n !== void 0 && n,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = { actionId: `chatgpt-conversation-actions`, order: 100, content: r }), (t[0] = r), (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = { actionId: `chatgpt-conversation-overflow`, order: 300, content: i }), (t[2] = i), (t[3] = s));
  let l;
  t[4] !== o || t[5] !== s ? ((l = [o, s]), (t[4] = o), (t[5] = s), (t[6] = l)) : (l = t[6]);
  let u;
  return (
    t[7] !== a || t[8] !== l
      ? ((u = (0, Q.jsx)(Q.Fragment, {
          children: l.map((e) => {
            let { actionId: t, order: n, content: r } = e;
            return r == null
              ? null
              : (0, Q.jsx)(
                  T.HeaderAction,
                  {
                    actionId: t,
                    align: `end`,
                    allowsThreadContentOverlap: a,
                    order: n,
                    children: (0, Q.jsx)(`div`, {
                      className: c(
                        `flex items-center gap-toolbar-action`,
                        a && `browser:rounded-lg browser:bg-surface`,
                      ),
                      children: r,
                    }),
                  },
                  t,
                );
          }),
        })),
        (t[7] = a),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = d()), l(), m(), M(), se(), B(), z(), (Q = o()));
  }))();
}
export { X as a, ve as i, Ce as n, $ as r, Se as t };
//# sourceMappingURL=header-b144159eba4a.js.map
