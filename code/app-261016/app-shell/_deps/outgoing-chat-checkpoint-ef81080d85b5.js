import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ACt as t,
  Jbt as n,
  Rht as r,
  Vrt as i,
  ZSt as a,
  qrt as o,
  sct as s,
  tE as c,
  uxt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $nn as u,
  ADn as d,
  CDr as f,
  CHt as p,
  CIr as m,
  DDn as h,
  Dgr as ee,
  Dnt as g,
  Ent as _,
  FDr as te,
  Gwn as ne,
  Iit as re,
  Iwn as ie,
  JWt as ae,
  KDr as v,
  Lit as y,
  MOn as b,
  ODn as x,
  PDn as S,
  Qwn as C,
  S7n as w,
  SIr as T,
  TOn as E,
  Tnt as D,
  UL as O,
  WDr as k,
  WL as A,
  YWt as j,
  Zwn as M,
  _Ht as N,
  aOn as P,
  art as F,
  awn as I,
  bkr as L,
  eOr as R,
  fwn as z,
  hOr as B,
  iOn as V,
  iwn as H,
  jgr as U,
  kwn as W,
  lkr as G,
  lwn as K,
  n7n as q,
  nOr as J,
  nrt as oe,
  own as se,
  pwn as ce,
  rrt as le,
  s7n as ue,
  swn as de,
  tin as fe,
  v8t as pe,
  w7n as me,
  wLr as he,
  y7n as ge,
  yOr as Y,
  zRr as X,
} from "./app-initial-ad16eaadf81f.js";
function _e(e) {
  let r = e.value.persistentWorkspace?.session;
  if (r == null || r.conversationId != null) return !1;
  let i = t(e, f, r.clientThreadId);
  return (
    ne(r.clientThreadId, () => ``),
    i != null && u(i),
    e.set(N, { conversationId: null, isCreating: !1 }),
    n(r.clientThreadId) && L(e, r.clientThreadId, null),
    requestAnimationFrame(() => {
      W(r.clientThreadId);
    }),
    !0
  );
}
function Z() {
  return (Z = e(() => {
    (a(), s(), fe(), ie(), p(), te(), G());
  }))();
}
function ve(e) {
  return new Set(
    x(e)
      .filter((t) => !P(e, t.tabId))
      .map((e) => e.tabId),
  );
}
function ye(e, t, n) {
  let r = e.value.persistentWorkspace,
    i = t.value.persistentWorkspace,
    a = ve(e),
    s = [S, h];
  if (r == null || i == null || r.key !== i.key || r.session.accountKey !== i.session.accountKey) return !1;
  if (!s.every((n) => n.canTransferTabsToScope(e, t, a)))
    return (
      e
        .get(o)
        .info(
          e
            .get(m)
            .formatMessage({
              id: `workspace.newChat.waitForTabs`,
              defaultMessage: `Wait for tabs to finish opening or moving, then try New chat again`,
              description: `Shown when a workspace cannot start a fresh chat until its tab operation finishes`,
            }),
        ),
      !1
    );
  (n(a), t.set(C, e.get(C)));
  for (let n of x(e)) a.has(n.tabId) && A(e, t, n);
  let c = e.get(b) === `ready`;
  for (let n of s) n.transferTabsToScope(e, t, a, c);
  return (
    t.set(B, e.get(B)),
    t.set(J, e.get(J)),
    me(t, e.get(ue), { animate: !1 }),
    w(t, e.get(q)),
    g(t, D(e)),
    t.set(Y, e.get(Y)),
    t.set(k, e.get(k)),
    t.set(v, e.get(v)),
    !0
  );
}
function Q() {
  return (Q = e(() => {
    (V(), R(), d(), ge(), i(), T(), E(), _(), O(), M());
  }))();
}
function be(e, t, n) {
  let i = F(de(e.get(K, t)), re(e, ee(e)), e.get(X)),
    a = new Map(),
    o = i.routes.flatMap((e) => {
      if (!n.has(e.tabId)) return (a.set(e.tabId, e.tabId), [e]);
      if (e.kind === `browser`) {
        let t = j(e);
        if (t?.restoreUrl == null || t.restoreUrl.trim() === ``) return [];
        let n = l(crypto.randomUUID());
        return (
          a.set(e.tabId, n),
          [
            {
              ...e,
              tabId: n,
              params: {
                ...t,
                browserConversationId: void 0,
                browserStorageId: r(crypto.randomUUID()),
                browserTabId: n,
              },
            },
          ]
        );
      }
      let t = e.kind === `artifact` ? `${e.kind}:${crypto.randomUUID()}` : e.tabId;
      return (a.set(e.tabId, t), [{ ...e, tabId: t }]);
    }),
    s = new Set([
      ...e.get(H),
      ...x(e)
        .filter((e) => e.kind === `browser` && n.has(e.tabId))
        .map((e) => e.tabId),
    ]),
    c = (e) => {
      let t = e.tabIds.flatMap((e) => {
        let t = a.get(e);
        return t == null ? [] : [t];
      });
      return {
        activeTabId: e.activeTabId == null ? null : (a.get(e.activeTabId) ?? t[0] ?? null),
        open: e.open && t.length > 0,
        tabIds: t,
      };
    },
    u = {
      ...i,
      excludedBrowserTabIds: [...s],
      routes: o,
      topology: { ...i.topology, right: c(i.topology.right), bottom: c(i.topology.bottom) },
    };
  (e.set(z, null), e.set(H, s), e.set(ce, null), e.set(oe, !1), e.get(se) && e.set(K, t, u));
}
function $() {
  return ($ = e(() => {
    (s(), d(), pe(), he(), c(), U(), ae(), y(), I(), le());
  }))();
}
export { _e as a, ye as i, be as n, Z as o, Q as r, $ as t };
//# sourceMappingURL=outgoing-chat-checkpoint-ef81080d85b5.js.map
