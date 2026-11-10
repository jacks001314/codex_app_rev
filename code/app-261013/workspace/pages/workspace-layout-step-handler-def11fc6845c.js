import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  VDt as r,
  Vxt as i,
  jDt as a,
  oSt as o,
  vzt as s,
  yMt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Cr as ee,
  Bbn as te,
  C$n as u,
  C3n as ne,
  Cwr as d,
  FEr as f,
  G8t as p,
  Hbn as m,
  I3n as h,
  JCr as g,
  JSt as _,
  Jwn as v,
  K8t as y,
  KSt as b,
  Kwn as x,
  MCn as S,
  MCr as C,
  Mfr as w,
  Nfr as T,
  PCn as E,
  PEr as D,
  QCr as O,
  RCr as k,
  Txn as A,
  Ubn as re,
  Uwn as j,
  Xwn as M,
  b3n as ie,
  dwn as N,
  dxn as P,
  gwr as F,
  hwn as I,
  kCr as L,
  kfr as R,
  lxn as z,
  qSt as B,
  w$n as V,
  w3n as H,
  wwr as U,
  yxn as ae,
  zCn as W,
  zbn as G,
} from "./app-initial-5851df3f6cb1.js";
import { n as K, t as q } from "./panel-visibility-3acfd0824fb8.js";
import { i as oe, r as se, t as J } from "./view-control-labels-24fdb959e3fb.js";
function ce() {
  let e = (0, Y.c)(40),
    n = t(F),
    a = r(),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { name: `browser.in-app` }), (e[0] = o))
    : (o = e[0]);
  let s = l(D, o).isCapable,
    c = i(C),
    u = i(M),
    d = i(Z),
    f = i(E),
    p = i(Q),
    m = i(oe),
    h = i(se),
    v = m;
  if (f === `full`) {
    let t;
    (e[1] !== p || e[2] !== a
      ? ((t = p
          ? a.formatMessage({
              id: `threadWorkspace.layout.focusPreviousTab`,
              defaultMessage: `Focus previous tab`,
              description: `Command that returns from Chat to the previously selected content tab while preserving full view`,
            })
          : a.formatMessage({
              id: `threadWorkspace.layout.focusChat`,
              defaultMessage: `Focus Chat`,
              description: `Command that selects the Chat tab and focuses its composer while preserving full view`,
            })),
        (e[1] = p),
        (e[2] = a),
        (e[3] = t))
      : (t = e[3]),
      (v = t));
  }
  let b;
  e[4] === n ? (b = e[5]) : ((b = () => y(n, `layout_command`, () => le(n))), (e[4] = n), (e[5] = b));
  let S = c ? d : s,
    T;
  e[6] !== c || e[7] !== a || e[8] !== u
    ? ((T = c
        ? {
            title: a.formatMessage({
              id: `codex.command.stepWorkspaceLayout`,
              defaultMessage: `Cycle workspace layout`,
              description: `Command menu item that cycles between full, split, and hidden tabs`,
            }),
            description: u
              ? a.formatMessage({
                  id: `codex.commandDescription.stepPersistentWorkspaceLayout`,
                  defaultMessage: `Switch between full and split view`,
                  description: `Description for the layout command in a workspace whose tabs always stay visible`,
                })
              : a.formatMessage({
                  id: `codex.commandDescription.stepWorkspaceLayout`,
                  defaultMessage: `Step from full view to split view, hide tabs, or show tabs beside Chat`,
                  description: `Description for the command that steps down through workspace layouts and restores split view from hidden tabs`,
                }),
          }
        : {
            title: a.formatMessage({
              id: `codex.command.toggleBrowserPanel`,
              defaultMessage: `Toggle browser panel`,
              description: `Title for the command that shows or hides the browser panel`,
            }),
            description: a.formatMessage({
              id: `codex.commandDescription.toggleBrowserPanel`,
              defaultMessage: `Show or hide the browser panel`,
              description: `Description for the command that toggles the browser panel`,
            }),
          }),
      (e[6] = c),
      (e[7] = a),
      (e[8] = u),
      (e[9] = T))
    : (T = e[9]);
  let k;
  (e[10] !== S || e[11] !== T
    ? ((k = { enabled: S, menuItem: T }), (e[10] = S), (e[11] = T), (e[12] = k))
    : (k = e[12]),
    V(`stepWorkspaceLayout`, b, k));
  let A;
  e[13] === n
    ? (A = e[14])
    : ((A = () => {
        if (n.get(Z)) {
          if (n.get(E) === `full`) {
            if ((n.get(M) || n.get(O)) && !n.get(x)) return;
            if (n.get(Q)) {
              (0, X.flushSync)(() => re(n, { restoreFocus: !0 }));
              return;
            }
            ((0, X.flushSync)(() => {
              (te(n), n.get(I.tabs$).length === 1 && n.get(I.activeTab$)?.onDiscardIfEmpty?.(n));
            }),
              requestAnimationFrame(() => {
                (n.get(ee) === `full` || n.get(I.tabs$).length === 0) && n.get(W) === `chat` && ae();
              }));
            return;
          }
          y(n, `layout_command`, () => _(n));
        }
      }),
      (e[13] = n),
      (e[14] = A));
  let j;
  e[15] === n ? (j = e[16]) : ((j = () => n.get(g) != null), (e[15] = n), (e[16] = j));
  let N;
  e[17] !== a || e[18] !== u
    ? ((N = u
        ? a.formatMessage({
            id: `codex.commandDescription.togglePersistentWorkspaceTabs`,
            defaultMessage: `Switch between Chat and content in full view, or enter full view from split view`,
            description: `Description for the command that changes the selected workspace surface while keeping its tab strip visible`,
          })
        : a.formatMessage({
            id: `codex.commandDescription.toggleWorkspaceTabs`,
            defaultMessage: `Switch between Chat and tabs in full view, or show or hide tabs in split view`,
            description: `Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view`,
          })),
      (e[17] = a),
      (e[18] = u),
      (e[19] = N))
    : (N = e[19]);
  let P;
  e[20] !== N || e[21] !== v
    ? ((P = { title: v, description: N }), (e[20] = N), (e[21] = v), (e[22] = P))
    : (P = e[22]);
  let L;
  (e[23] !== c || e[24] !== j || e[25] !== P
    ? ((L = { enabled: c, isActive: j, menuItem: P }), (e[23] = c), (e[24] = j), (e[25] = P), (e[26] = L))
    : (L = e[26]),
    V(`toggleSidePanel`, A, L));
  let U;
  e[27] === n
    ? (U = e[28])
    : ((U = () => y(n, `layout_command`, () => B(n, `full`))), (e[27] = n), (e[28] = U));
  let G;
  e[29] === n
    ? (G = e[30])
    : ((G = (e) => {
        if (n.get(g) == null) return !1;
        if (e?.originBrowserTab == null) return !0;
        let { originBrowserTab: t, originPanel: r } = e;
        return r == null || t.conversationId !== R(n)
          ? !1
          : (r === `right` ? n.get(ne) && n.get(H) : n.get(ie)) &&
              w(n.get(z(r).activeTab$)) === t.browserTabId;
      }),
      (e[29] = n),
      (e[30] = G));
  let K;
  e[31] === a
    ? (K = e[32])
    : ((K = a.formatMessage({
        id: `codex.commandDescription.showWorkspaceTabView`,
        defaultMessage: `Enter or exit full view`,
        description: `Description for the command that toggles full view for the workspace`,
      })),
      (e[31] = a),
      (e[32] = K));
  let q;
  e[33] !== h || e[34] !== K
    ? ((q = { title: h, description: K }), (e[33] = h), (e[34] = K), (e[35] = q))
    : (q = e[35]);
  let J;
  return (
    e[36] !== d || e[37] !== G || e[38] !== q
      ? ((J = { enabled: d, isActive: G, menuItem: q }), (e[36] = d), (e[37] = G), (e[38] = q), (e[39] = J))
      : (J = e[39]),
    V(`showWorkspaceTabView`, U, J),
    null
  );
}
function le(e) {
  let t = e.get(D, { name: `browser.in-app` }).isCapable;
  if (e.get(g) == null) {
    t && K(e, { initiator: `toggle_browser_command`, source: `manual` });
    return;
  }
  _(e);
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = s()),
      n(),
      (X = c()),
      a(),
      f(),
      k(),
      N(),
      h(),
      q(),
      T(),
      u(),
      A(),
      d(),
      P(),
      m(),
      p(),
      j(),
      v(),
      S(),
      G(),
      b(),
      J(),
      (Z = o(
        F,
        ({ get: e }) =>
          e(C) &&
          !e(U) &&
          (e(E) === `full` || e(I.tabs$).length > 0 || (e(L) && e(D, { name: `browser.in-app` }).isCapable)),
      )),
      (Q = o(F, ({ get: e }) => e(E) === `full` && e(W) === `chat` && e(I.tabs$).length > 0)));
  }))();
}
$();
export { ce as WorkspaceLayoutStepHandler };
//# sourceMappingURL=workspace-layout-step-handler-def11fc6845c.js.map
