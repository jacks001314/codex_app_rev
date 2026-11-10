import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $St as t, FBt as n, LNt as r, PBt as i, ZSt as a, nCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as s,
  Apt as c,
  CHt as l,
  JRt as u,
  MOr as d,
  MR as f,
  NOn as p,
  PDn as m,
  POn as h,
  SHt as g,
  SOn as _,
  Tpt as v,
  YRt as y,
  awn as b,
  gtt as x,
  jR as S,
  lI as C,
  mwn as w,
  uI as T,
  vtt as E,
  wOn as D,
  zOr as O,
} from "./app-initial-ad16eaadf81f.js";
import { r as k, t as A } from "./local-conversation-page-bef2c270918b.js";
import { o as j, s as M } from "./thread-app-shell-chrome-783ea972fd83.js";
import { n as N, t as P } from "./chat-tab-metadata-bridge-a418861b2736.js";
function F(e) {
  let n = (0, I.c)(27),
    {
      view: r,
      mcpAppId: i,
      deepLink: a,
      workspace: s,
      session: l,
      homeTabTitle: f,
      homeTabTooltip: p,
      children: _,
    } = e,
    v = t(d),
    y = o(g, l.conversationId),
    b;
  n[0] !== l.clientThreadId || n[1] !== l.conversationId || n[2] !== l.hostId
    ? ((b = { clientThreadId: l.clientThreadId, conversationId: l.conversationId, hostId: l.hostId }),
      (n[0] = l.clientThreadId),
      (n[1] = l.conversationId),
      (n[2] = l.hostId),
      (n[3] = b))
    : (b = n[3]);
  let x = o(D, b),
    T,
    O;
  (n[4] !== a ||
  n[5] !== f ||
  n[6] !== p ||
  n[7] !== i ||
  n[8] !== v ||
  n[9] !== l.workspaceId ||
  n[10] !== r ||
  n[11] !== s
    ? ((T = () => {
        let e = v.get(m.tabById$, v.value.persistentWorkspace?.homeTabId ?? ``);
        h(v, `restore`, () =>
          c(
            v,
            { type: `global`, view: r, mcpAppId: i, deepLink: a },
            e == null &&
              !v.get(s.draftRestoring$) &&
              !v.get(w) &&
              v.get(m.activeTab$) == null &&
              v.get(E, { pathname: v.value.pathname, hostId: r.hostId, resourceId: l.workspaceId }) == null,
            { title: f, tooltip: p },
          ),
        );
      }),
      (O = [a, f, p, i, v, l.workspaceId, r, s]),
      (n[4] = a),
      (n[5] = f),
      (n[6] = p),
      (n[7] = i),
      (n[8] = v),
      (n[9] = l.workspaceId),
      (n[10] = r),
      (n[11] = s),
      (n[12] = T),
      (n[13] = O))
    : ((T = n[12]), (O = n[13])),
    (0, L.useLayoutEffect)(T, O));
  let k;
  n[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, R.jsx)(S, {})), (n[14] = k)) : (k = n[14]);
  let M = l.chatTabVisible || l.conversationId != null || x != null,
    N = y ?? null,
    F;
  n[15] !== M || n[16] !== N
    ? ((F = (0, R.jsx)(P, { isVisible: M, title: N })), (n[15] = M), (n[16] = N), (n[17] = F))
    : (F = n[17]);
  let z, B;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, R.jsx)(j, {})),
      (B = (0, R.jsx)(u.MainContentLayout, { layout: `thread-edge-scroll` })),
      (n[18] = z),
      (n[19] = B))
    : ((z = n[18]), (B = n[19]));
  let V;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, R.jsx)(u.RightPanelTabListAfterSticky, { children: (0, R.jsx)(C, {}) })), (n[20] = V))
    : (V = n[20]);
  let H;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, R.jsx)(u.RightPanelOutlet, { children: (0, R.jsx)(u.RightPanelTabs, {}) })), (n[21] = H))
    : (H = n[21]);
  let U;
  n[22] === _ ? (U = n[23]) : ((U = (0, R.jsx)(A, { children: _ })), (n[22] = _), (n[23] = U));
  let W;
  return (
    n[24] !== U || n[25] !== F
      ? ((W = (0, R.jsxs)(R.Fragment, { children: [k, F, z, B, V, H, U] })),
        (n[24] = U),
        (n[25] = F),
        (n[26] = W))
      : (W = n[26]),
    W
  );
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = i()),
      a(),
      (L = n()),
      y(),
      f(),
      s(),
      l(),
      k(),
      _(),
      O(),
      b(),
      p(),
      N(),
      M(),
      T(),
      v(),
      x(),
      (R = r()));
  }))();
}
export { z as n, F as t };
//# sourceMappingURL=layout-7eeb7798048b.js.map
