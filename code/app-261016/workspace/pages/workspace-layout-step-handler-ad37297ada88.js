import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CCt as n,
  FNt as r,
  PBt as i,
  XOt as a,
  ZSt as o,
  iCt as s,
  okt as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Cn as c,
  $En as l,
  ADn as u,
  AWt as te,
  Agr as d,
  Awn as f,
  BOr as p,
  CWt as m,
  DWt as h,
  Dgr as ne,
  GDr as g,
  Iwn as _,
  JDr as v,
  MOr as y,
  NOn as b,
  OWt as x,
  PDn as S,
  POn as C,
  Q2n as w,
  Swn as T,
  TWt as E,
  XCn as D,
  Z2n as O,
  ZCn as re,
  ZEn as k,
  bwn as ie,
  cOn as A,
  eOr as j,
  ewn as M,
  fOn as ae,
  gOn as N,
  hOr as oe,
  iDn as P,
  jWt as F,
  jgr as I,
  kWt as L,
  mOn as R,
  mOr as z,
  n7n as B,
  njr as V,
  o7n as H,
  s7n as U,
  tjr as W,
  uOr as G,
  y7n as K,
  zOr as q,
} from "./app-initial-ad16eaadf81f.js";
function J() {
  let e = (0, Y.c)(43),
    n = t(y),
    r = ee(),
    i = s(v),
    a = s(N),
    o = s(Z),
    c = s(l),
    u = s(Q),
    p = s(x),
    g = s(h),
    _ = s(m),
    b = p;
  if (c === `full`) {
    let t;
    (e[0] !== u || e[1] !== r
      ? ((t = u
          ? r.formatMessage({
              id: `threadWorkspace.layout.focusPreviousTab`,
              defaultMessage: `Focus previous tab`,
              description: `Command that returns from Chat to the previously selected content tab while preserving full view`,
            })
          : r.formatMessage({
              id: `threadWorkspace.layout.focusChat`,
              defaultMessage: `Focus Chat`,
              description: `Command that selects the Chat tab and focuses its composer while preserving full view`,
            })),
        (e[0] = u),
        (e[1] = r),
        (e[2] = t))
      : (t = e[2]),
      (b = t));
  }
  let T;
  e[3] === n ? (T = e[4]) : ((T = () => C(n, `layout_command`, () => F(n))), (e[3] = n), (e[4] = T));
  let E;
  e[5] === r
    ? (E = e[6])
    : ((E = r.formatMessage({
        id: `codex.command.stepWorkspaceLayout`,
        defaultMessage: `Cycle workspace layout`,
        description: `Command menu item that cycles between full, split, and hidden tabs`,
      })),
      (e[5] = r),
      (e[6] = E));
  let D;
  e[7] !== r || e[8] !== a
    ? ((D = a
        ? r.formatMessage({
            id: `codex.commandDescription.stepPersistentWorkspaceLayout`,
            defaultMessage: `Switch between full and split view`,
            description: `Description for the layout command in a workspace whose tabs always stay visible`,
          })
        : r.formatMessage({
            id: `codex.commandDescription.stepWorkspaceLayout`,
            defaultMessage: `Step from full view to split view, hide tabs, or show tabs beside Chat`,
            description: `Description for the command that steps down through workspace layouts and restores split view from hidden tabs`,
          })),
      (e[7] = r),
      (e[8] = a),
      (e[9] = D))
    : (D = e[9]);
  let O;
  e[10] !== E || e[11] !== D
    ? ((O = { title: E, description: D }), (e[10] = E), (e[11] = D), (e[12] = O))
    : (O = e[12]);
  let k;
  (e[13] !== o || e[14] !== O
    ? ((k = { enabled: o, menuItem: O }), (e[13] = o), (e[14] = O), (e[15] = k))
    : (k = e[15]),
    w(`stepWorkspaceLayout`, T, k));
  let A;
  e[16] === n
    ? (A = e[17])
    : ((A = () => {
        if (n.get(Z)) {
          if (n.get(l) === `full`) {
            if ((n.get(N) || n.get(z)) && !n.get(ae)) return;
            if (n.get(Q)) {
              (0, X.flushSync)(() => M(n, { restoreFocus: !0 }));
              return;
            }
            ((0, X.flushSync)(() => {
              (re(n), n.get(S.tabs$).length === 1 && n.get(S.activeTab$)?.onDiscardIfEmpty?.(n));
            }),
              requestAnimationFrame(() => {
                (n.get(oe) === `full` || n.get(S.tabs$).length === 0) && n.get(P) === `chat` && f();
              }));
            return;
          }
          C(n, `layout_command`, () => F(n));
        }
      }),
      (e[16] = n),
      (e[17] = A));
  let j;
  e[18] === n ? (j = e[19]) : ((j = () => n.get(G) != null), (e[18] = n), (e[19] = j));
  let I;
  e[20] !== r || e[21] !== a
    ? ((I = a
        ? r.formatMessage({
            id: `codex.commandDescription.togglePersistentWorkspaceTabs`,
            defaultMessage: `Switch between Chat and content in full view, or enter full view from split view`,
            description: `Description for the command that changes the selected workspace surface while keeping its tab strip visible`,
          })
        : r.formatMessage({
            id: `codex.commandDescription.toggleWorkspaceTabs`,
            defaultMessage: `Switch between Chat and tabs in full view, or show or hide tabs in split view`,
            description: `Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view`,
          })),
      (e[20] = r),
      (e[21] = a),
      (e[22] = I))
    : (I = e[22]);
  let L;
  e[23] !== I || e[24] !== b
    ? ((L = { title: b, description: I }), (e[23] = I), (e[24] = b), (e[25] = L))
    : (L = e[25]);
  let R;
  (e[26] !== i || e[27] !== j || e[28] !== L
    ? ((R = { enabled: i, isActive: j, menuItem: L }), (e[26] = i), (e[27] = j), (e[28] = L), (e[29] = R))
    : (R = e[29]),
    w(`toggleSidePanel`, A, R));
  let V;
  e[30] === n
    ? (V = e[31])
    : ((V = () => C(n, `layout_command`, () => te(n, `full`))), (e[30] = n), (e[31] = V));
  let W;
  e[32] === n
    ? (W = e[33])
    : ((W = (e) => {
        if (e?.originBrowserTab == null) return !0;
        let { originBrowserTab: t, originPanel: r } = e;
        return r == null || t.conversationId !== ne(n)
          ? !1
          : (r === `right` ? n.get(H) && n.get(U) : n.get(B)) &&
              d(n.get(ie(r).activeTab$)) === t.browserTabId;
      }),
      (e[32] = n),
      (e[33] = W));
  let K;
  e[34] === r
    ? (K = e[35])
    : ((K = r.formatMessage({
        id: `codex.commandDescription.showWorkspaceTabView`,
        defaultMessage: `Enter or exit full view`,
        description: `Description for the command that toggles full view for the workspace`,
      })),
      (e[34] = r),
      (e[35] = K));
  let q;
  e[36] !== g || e[37] !== K
    ? ((q = { title: g, description: K }), (e[36] = g), (e[37] = K), (e[38] = q))
    : (q = e[38]);
  let J;
  return (
    e[39] !== _ || e[40] !== W || e[41] !== q
      ? ((J = { enabled: _, isActive: W, menuItem: q }), (e[39] = _), (e[40] = W), (e[41] = q), (e[42] = J))
      : (J = e[42]),
    w(`showWorkspaceTabView`, V, J),
    null
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = i()),
      o(),
      (X = r()),
      a(),
      V(),
      j(),
      u(),
      K(),
      I(),
      O(),
      _(),
      q(),
      T(),
      c(),
      b(),
      A(),
      R(),
      k(),
      D(),
      L(),
      E(),
      (Z = n(
        y,
        ({ get: e }) =>
          e(v) &&
          !e(p) &&
          (e(l) === `full` || e(S.tabs$).length > 0 || (e(g) && e(W, { name: `browser.in-app` }).isCapable)),
      )),
      (Q = n(y, ({ get: e }) => e(l) === `full` && e(P) === `chat` && e(S.tabs$).length > 0)));
  }))();
}
$();
export { J as WorkspaceLayoutStepHandler };
//# sourceMappingURL=workspace-layout-step-handler-ad37297ada88.js.map
