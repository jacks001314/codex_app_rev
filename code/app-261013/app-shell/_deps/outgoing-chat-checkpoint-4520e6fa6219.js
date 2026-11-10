import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cmt as t,
  Jyt as n,
  Myt as r,
  Pxt as i,
  TC as a,
  hot as o,
  lot as s,
  pSt as c,
  rst as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Cr as u,
  $et as d,
  ACr as f,
  Att as ee,
  BCr as p,
  Bwn as m,
  Eqt as h,
  GMr as g,
  I3n as te,
  Jbn as ne,
  M9t as re,
  Nfr as ie,
  Ntt as ae,
  OCr as _,
  Pen as v,
  Pxn as y,
  Qbn as b,
  RCr as x,
  Txn as S,
  Uwt as C,
  Uxn as w,
  V3n as T,
  Wxn as E,
  Xbn as D,
  Ybn as O,
  aCt as k,
  aIr as A,
  b3n as j,
  bqt as M,
  cwn as N,
  dTn as P,
  dwn as F,
  ett as I,
  hrt as L,
  hwn as R,
  iTn as z,
  iTr as B,
  jtt as V,
  kfr as oe,
  lwn as H,
  mrt as U,
  nxn as W,
  oCt as G,
  oIr as K,
  oL as q,
  qbn as J,
  qwr as se,
  rwr as Y,
  sCr as ce,
  sL as le,
  tNr as ue,
  ttt as de,
  txn as fe,
  vxn as pe,
  w3n as me,
  yCr as he,
  z3n as ge,
  zwn as X,
} from "./app-initial-5851df3f6cb1.js";
function _e(e) {
  let t = e.value.persistentWorkspace?.session;
  if (t == null || t.conversationId != null) return !1;
  let n = c(e, ce, t.clientThreadId);
  return (
    y(t.clientThreadId, () => ``),
    n != null && re(n),
    e.set(M, { conversationId: null, isCreating: !1 }),
    r(t.clientThreadId) && B(e, t.clientThreadId, null),
    requestAnimationFrame(() => {
      pe(t.clientThreadId);
    }),
    !0
  );
}
function Z() {
  return (Z = e(() => {
    (i(), l(), v(), S(), h(), he(), se());
  }))();
}
function ve(e) {
  return new Set(
    H(e)
      .filter((t) => !m(e, t.tabId))
      .map((e) => e.tabId),
  );
}
function ye(e, t, n) {
  let r = e.value.persistentWorkspace,
    i = t.value.persistentWorkspace,
    a = ve(e),
    s = [R, N];
  if (r == null || i == null || r.key !== i.key || r.session.accountKey !== i.session.accountKey) return !1;
  if (!s.every((n) => n.canTransferTabsToScope(e, t, a)))
    return (
      e
        .get(o)
        .info(
          e
            .get(K)
            .formatMessage({
              id: `workspace.newChat.waitForTabs`,
              defaultMessage: `Wait for tabs to finish opening or moving, then try New chat again`,
              description: `Shown when a workspace cannot start a fresh chat until its tab operation finishes`,
            }),
        ),
      !1
    );
  (n(a), t.set(E, e.get(E)));
  for (let n of H(e)) a.has(n.tabId) && le(e, t, n);
  let c = e.get(P) === `ready`;
  for (let n of s) n.transferTabsToScope(e, t, a, c);
  return (
    t.set(u, e.get(u)),
    t.set(p, e.get(p)),
    T(t, e.get(me), { animate: !1 }),
    ge(t, e.get(j)),
    de(t, d(e)),
    t.set(Y, e.get(Y)),
    t.set(_, e.get(_)),
    t.set(f, e.get(f)),
    !0
  );
}
function Q() {
  return (Q = e(() => {
    (X(), x(), F(), te(), s(), A(), z(), I(), q(), w());
  }))();
}
function be(e, r, i) {
  let a = ae(D(e.get(b, r)), U(e, oe(e)), e.get(g)),
    o = new Map(),
    s = a.routes.flatMap((e) => {
      if (!i.has(e.tabId)) return (o.set(e.tabId, e.tabId), [e]);
      if (e.kind === `browser`) {
        let r = G(e);
        if (r?.restoreUrl == null || r.restoreUrl.trim() === ``) return [];
        let i = n(crypto.randomUUID());
        return (
          o.set(e.tabId, i),
          [
            {
              ...e,
              tabId: i,
              params: {
                ...r,
                browserConversationId: void 0,
                browserStorageId: t(crypto.randomUUID()),
                browserTabId: i,
              },
            },
          ]
        );
      }
      let r = e.kind === `artifact` ? `${e.kind}:${crypto.randomUUID()}` : e.tabId;
      return (o.set(e.tabId, r), [{ ...e, tabId: r }]);
    }),
    c = new Set([
      ...e.get(J),
      ...H(e)
        .filter((e) => e.kind === `browser` && i.has(e.tabId))
        .map((e) => e.tabId),
    ]),
    l = (e) => {
      let t = e.tabIds.flatMap((e) => {
        let t = o.get(e);
        return t == null ? [] : [t];
      });
      return {
        activeTabId: e.activeTabId == null ? null : (o.get(e.activeTabId) ?? t[0] ?? null),
        open: e.open && t.length > 0,
        tabIds: t,
      };
    },
    u = {
      ...a,
      excludedBrowserTabIds: [...c],
      routes: s,
      topology: { ...a.topology, right: l(a.topology.right), bottom: l(a.topology.bottom) },
    };
  (e.set(fe, null), e.set(J, c), e.set(W, null), e.set(ee, !1), e.get(O) && e.set(b, r, u));
}
function $() {
  return ($ = e(() => {
    (l(), F(), C(), ue(), a(), ie(), k(), L(), ne(), V());
  }))();
}
export { _e as a, ye as i, be as n, Z as o, Q as r, $ as t };
//# sourceMappingURL=outgoing-chat-checkpoint-4520e6fa6219.js.map
