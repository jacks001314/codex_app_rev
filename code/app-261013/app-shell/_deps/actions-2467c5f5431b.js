import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Dyt as n,
  JSt as r,
  Myt as i,
  Pxt as a,
  fSt as o,
  oSt as s,
  pSt as c,
  rst as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $O as d,
  Cwr as f,
  FFr as p,
  Get as m,
  Iwr as h,
  Men as g,
  Pen as _,
  Wet as v,
  Xet as y,
  Zwr as b,
  aTn as x,
  ak as S,
  ek as C,
  ftt as w,
  gwr as T,
  iTn as E,
  ik as D,
  lqt as O,
  ltt as k,
  nk as A,
  qet as j,
  qwr as M,
  rk as N,
  sCr as P,
  sqt as F,
  yCr as I,
  ytt as L,
  zFr as R,
} from "./app-initial-5851df3f6cb1.js";
import { a as z, i as B, n as V, o as H, r as U, t as W } from "./outgoing-chat-checkpoint-4520e6fa6219.js";
async function G(e, t) {
  let n = d(e);
  if (n == null || n.clientThreadId !== e.value.clientThreadId || e.get(Y) || t(e)) return null;
  if (n.conversationId == null) {
    if (e.get(j)) return null;
    let t = c(e, P, n.clientThreadId);
    return t != null && !g(t) ? n : null;
  }
  K(e);
  let r = e.get(J);
  if (r == null) return null;
  await e.when((e) => t(e) || e.get(J) !== r || d(e)?.clientThreadId !== n.clientThreadId);
  let i = d(e);
  return !t(e) &&
    i?.clientThreadId === r.clientThreadId &&
    i.accountKey === n.accountKey &&
    i.conversationId == null &&
    (e.get(p)?.key ?? null) === r.navigationKey
    ? i
    : null;
}
function K(e) {
  if (e.get(Y)) return;
  let t = e.get(A);
  if (t.clientThreadId !== e.value.clientThreadId) return;
  if (t.conversationId == null) {
    (z(e), e.get(w) || L(e, { prefersReducedMotion: !0 }));
    return;
  }
  let r = { clientThreadId: n(), sourceSession: t, navigationKey: e.get(p)?.key ?? null };
  e.set(J, r);
}
function q(e, t) {
  let n = e.get(A);
  if (
    e.get(J) !== t ||
    e.value.clientThreadId !== t.clientThreadId ||
    n.accountKey !== t.sourceSession.accountKey ||
    n.clientThreadId !== t.sourceSession.clientThreadId ||
    n.conversationId == null ||
    !e.get(O) ||
    d(e)?.accountKey !== n.accountKey ||
    (e.get(p)?.key ?? null) !== t.navigationKey
  )
    return !1;
  let i = c(e, h, n.clientThreadId),
    a = i == null ? null : c(i, T, `/space`);
  if (a == null) return !1;
  let o = n.conversationId,
    s = !1;
  return (
    r(e, () => {
      B(a, e, (e) => {
        V(a, o, e);
      }) && (e.set(N, t.navigationKey), v(e, S), e.set(J, null), (s = !0));
    }),
    s
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    (a(),
      l(),
      _(),
      R(),
      u(),
      I(),
      f(),
      M(),
      k(),
      H(),
      y(),
      m(),
      U(),
      W(),
      E(),
      F(),
      C(),
      (J = o(t, null)),
      (Y = s(T, ({ get: e, scope: t }) => {
        if (e(D)) return !0;
        let { clientThreadId: n } = t.value;
        if (e(J)?.clientThreadId === n || e(J)?.sourceSession.clientThreadId === n) return !0;
        if (e(A).conversationId != null || !i(n)) return !1;
        let r = e(b, n),
          a = e(x, n);
        return a === void 0 || (r != null && r.status !== `failed`) || (a != null && a.phase !== `failed`);
      })));
  }))();
}
export { J as a, Y as i, X as n, K as o, G as r, q as t };
//# sourceMappingURL=actions-2467c5f5431b.js.map
