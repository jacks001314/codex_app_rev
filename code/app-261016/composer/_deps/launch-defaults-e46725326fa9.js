import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i, yCt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as o,
  GIr as s,
  IAr as c,
  IHt as l,
  Jqt as u,
  Kqt as d,
  LIr as f,
  MOr as p,
  NAr as m,
  RAr as h,
  UIr as g,
  WHt as _,
  XAr as v,
  Xsn as y,
  Ysn as b,
  ZAr as x,
  _ir as S,
  bOn as C,
  bir as w,
  cAr as T,
  dVn as E,
  fxr as D,
  gir as O,
  h3 as k,
  lAr as A,
  p3 as j,
  pxr as M,
  yOn as N,
  zOr as P,
} from "./app-initial-ad16eaadf81f.js";
var F, I, L, R;
function z() {
  return (z = e(() => {
    (i(),
      f(),
      A(),
      o(),
      l(),
      d(),
      c(),
      O(),
      t(),
      b(),
      P(),
      D(),
      v(),
      N(),
      k(),
      (F = n(r, ({ get: e }) => e(x))),
      (I = n(r, ({ get: e }) => e(m) !== `chat`)),
      (L = a(r, (e, { get: t }) => {
        let n = null;
        e != null && (n = E(e.projectId) ? e.projectId : (w(e.projectId, t(M), t(S)) ?? null));
        let r = t(u, {
          enforceAccess: h({ windowType: `electron`, workModeEnabled: !0 }),
          homeComposerMode: `work`,
          routeProjectId: n,
          selectedChatGptProjectId: n,
          selectedWorkProject: e,
        });
        return {
          projectId: n,
          runLocation: r,
          useAsbDirect: t(T) && r.effectiveLocation === `cloud` && n == null,
        };
      })),
      (R = a(p, ({ accountId: e, pageId: t }, { get: n, scope: r }) => {
        let i = n(C),
          a = i?.getSession(r);
        if ((i != null && r.value.persistentWorkspace?.key !== `/space`) || a?.conversationId != null)
          return !1;
        if (e != null && j(r, e, t) != null && n(_)?.hasConversation) return !0;
        if (!n(s)) return n(g);
        if (!n(F)) return !1;
        let o = n(L, a == null ? null : n(y, a.clientThreadId));
        return o.runLocation.effectiveLocation === `cloud` && !o.useAsbDirect;
      })));
  }))();
}
export { L as a, R as i, I as n, F as r, z as t };
//# sourceMappingURL=launch-defaults-e46725326fa9.js.map
