import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, oSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import {
  $dn as o,
  $wn as s,
  AEr as c,
  Cwr as l,
  ELn as u,
  GTr as d,
  Gqt as f,
  HBt as p,
  K2 as m,
  Lqt as h,
  Qwn as g,
  RLn as _,
  W2 as v,
  WBt as y,
  WTr as b,
  atr as x,
  bEr as S,
  bMr as C,
  ctr as w,
  efn as T,
  fMr as E,
  gwr as D,
  hEr as O,
  h_r as k,
  itr as A,
  kEr as j,
  m_r as M,
  vEr as N,
  vMr as P,
} from "./app-initial-5851df3f6cb1.js";
var F, I, L, R;
function z() {
  return (z = e(() => {
    (n(),
      E(),
      d(),
      u(),
      h(),
      p(),
      N(),
      A(),
      a(),
      o(),
      l(),
      M(),
      j(),
      g(),
      m(),
      (F = i(t, ({ get: e }) => e(c))),
      (I = i(t, ({ get: e }) => e(O) !== `chat`)),
      (L = r(t, (e, { get: t }) => {
        let n = null;
        e != null && (n = _(e.projectId) ? e.projectId : (w(e.projectId, t(k), t(x)) ?? null));
        let r = t(y, {
          enforceAccess: S({ windowType: `electron`, workModeEnabled: !0 }),
          homeComposerMode: `work`,
          routeProjectId: n,
          selectedChatGptProjectId: n,
          selectedWorkProject: e,
        });
        return {
          projectId: n,
          runLocation: r,
          useAsbDirect: t(b) && r.effectiveLocation === `cloud` && n == null,
        };
      })),
      (R = r(D, ({ accountId: e, pageId: t }, { get: n, scope: r }) => {
        let i = n(s),
          a = i?.getSession(r);
        if ((i != null && r.value.persistentWorkspace?.key !== `/space`) || a?.conversationId != null)
          return !1;
        if (e != null && v(r, e, t) != null && n(f)?.hasConversation) return !0;
        if (!n(C)) return n(P);
        if (!n(F)) return !1;
        let o = n(L, a == null ? null : n(T, a.clientThreadId));
        return o.runLocation.effectiveLocation === `cloud` && !o.useAsbDirect;
      })));
  }))();
}
export { L as a, R as i, I as n, F as r, z as t };
//# sourceMappingURL=launch-defaults-a1836c062b43.js.map
