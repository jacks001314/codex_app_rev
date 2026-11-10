import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, vzt as r, xMt as i, yzt as a, zxt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as s,
  DF as c,
  EF as l,
  Eqt as u,
  J9 as d,
  JL as f,
  Qet as p,
  Tqt as m,
  X9 as h,
  XHt as g,
  Xet as _,
  YHt as v,
  YL as y,
  dwn as b,
  gft as x,
  gwr as S,
  hwn as C,
  rTn as w,
  tTn as T,
  xft as E,
} from "./app-initial-5851df3f6cb1.js";
import { r as D, t as O } from "./local-conversation-page-4298f8ec98fa.js";
import { o as k, s as A } from "./thread-app-shell-chrome-404b941243dd.js";
import { n as j, t as M } from "./chat-tab-metadata-bridge-e6e8bf7ae8b2.js";
function N(e) {
  let n = (0, P.c)(33),
    {
      view: r,
      mcpAppId: i,
      deepLink: a,
      workspace: s,
      session: c,
      homeTabTitle: u,
      homeTabTooltip: d,
      mainToolbar: g,
      children: _,
    } = e,
    y = t(S),
    b = o(m, c.conversationId),
    x;
  n[0] !== c.clientThreadId || n[1] !== c.conversationId || n[2] !== c.hostId
    ? ((x = { clientThreadId: c.clientThreadId, conversationId: c.conversationId, hostId: c.hostId }),
      (n[0] = c.clientThreadId),
      (n[1] = c.conversationId),
      (n[2] = c.hostId),
      (n[3] = x))
    : (x = n[3]);
  let T = o(w, x),
    D,
    A;
  (n[4] !== a ||
  n[5] !== u ||
  n[6] !== d ||
  n[7] !== i ||
  n[8] !== y ||
  n[9] !== c.workspaceId ||
  n[10] !== r ||
  n[11] !== s
    ? ((D = () => {
        let e = y.get(C.tabById$, y.value.persistentWorkspace?.homeTabId ?? ``);
        E(
          y,
          { type: `global`, view: r, mcpAppId: i, deepLink: a },
          e == null &&
            !y.get(s.draftRestoring$) &&
            y.get(C.activeTab$) == null &&
            y.get(h, { pathname: y.value.pathname, hostId: r.hostId, resourceId: c.workspaceId }) == null,
          { title: u, tooltip: d },
        );
      }),
      (A = [a, u, d, i, y, c.workspaceId, r, s]),
      (n[4] = a),
      (n[5] = u),
      (n[6] = d),
      (n[7] = i),
      (n[8] = y),
      (n[9] = c.workspaceId),
      (n[10] = r),
      (n[11] = s),
      (n[12] = D),
      (n[13] = A))
    : ((D = n[12]), (A = n[13])),
    (0, F.useLayoutEffect)(D, A));
  let j;
  n[14] === y
    ? (j = n[15])
    : ((j = () => () => {
        (C.closeWorkspaceHomeTab(y), y.set(p, null));
      }),
      (n[14] = y),
      (n[15] = j));
  let N = (0, F.useEffectEvent)(j),
    L;
  n[16] === N ? (L = n[17]) : ((L = () => N()), (n[16] = N), (n[17] = L));
  let R;
  (n[18] === c.clientThreadId
    ? (R = n[19])
    : ((R = [c.clientThreadId]), (n[18] = c.clientThreadId), (n[19] = R)),
    (0, F.useLayoutEffect)(L, R));
  let z;
  n[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = (0, I.jsx)(f, {})), (n[20] = z)) : (z = n[20]);
  let B = c.chatTabVisible || c.conversationId != null || T != null,
    V = b ?? null,
    H;
  n[21] !== B || n[22] !== V
    ? ((H = (0, I.jsx)(M, { isVisible: B, title: V })), (n[21] = B), (n[22] = V), (n[23] = H))
    : (H = n[23]);
  let U;
  n[24] === g ? (U = n[25]) : ((U = (0, I.jsx)(k, { mainToolbar: g })), (n[24] = g), (n[25] = U));
  let W;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, I.jsx)(v.MainContentLayout, { layout: `thread-edge-scroll` })), (n[26] = W))
    : (W = n[26]);
  let G;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, I.jsx)(v.RightPanelTabListAfterSticky, { children: (0, I.jsx)(l, {}) })), (n[27] = G))
    : (G = n[27]);
  let K;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, I.jsx)(v.RightPanelOutlet, { children: (0, I.jsx)(v.RightPanelTabs, {}) })), (n[28] = K))
    : (K = n[28]);
  let q;
  return (
    n[29] !== _ || n[30] !== H || n[31] !== U
      ? ((q = (0, I.jsxs)(O, { children: [z, H, U, W, G, K, _] })),
        (n[29] = _),
        (n[30] = H),
        (n[31] = U),
        (n[32] = q))
      : (q = n[32]),
    q
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = r()), n(), (F = a()), g(), y(), b(), u(), D(), T(), s(), j(), _(), A(), c(), x(), d(), (I = i()));
  }))();
}
export { L as n, N as t };
//# sourceMappingURL=layout-3adf9bdb4bd0.js.map
