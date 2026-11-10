import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Nt as t,
  L6t as n,
  M7t as r,
  O5t as i,
  P6t as a,
  RJt as o,
  XNt as s,
  ayt as c,
  byt as l,
  c$ as u,
  dJt as d,
  e7t as f,
  fJt as p,
  o7t as m,
  s7t as h,
  t$ as g,
  vyt as _,
} from "./app-shared-7552fc8d5d82.js";
import {
  BP as v,
  FP as y,
  GP as b,
  LP as x,
  PP as S,
  RP as C,
  S$t as w,
  SF as T,
  UP as E,
  XP as D,
  cNn as O,
  g5 as k,
  kPn as A,
  lNn as j,
  m5 as M,
  mF as N,
  qP as P,
  uF as F,
  vPn as I,
  w$t as L,
  zP as R,
} from "./app-initial-3916b423772b.js";
import {
  a as z,
  i as B,
  n as V,
  o as H,
  r as U,
  t as W,
} from "./outgoing-chat-checkpoint-146a07519c8b.js";
async function G(e, t) {
  let n = S(e);
  if (n == null || n.clientThreadId !== e.value.clientThreadId || e.get(Y) || t(e)) return null;
  if (n.conversationId == null) {
    if (e.get(P)) return null;
    let t = h(e, I, n.clientThreadId);
    return t != null && !w(t) ? n : null;
  }
  K(e);
  let r = e.get(J);
  if (r == null) return null;
  await e.when((e) => t(e) || e.get(J) !== r || S(e)?.clientThreadId !== n.clientThreadId);
  let i = S(e);
  return !t(e) &&
    i?.clientThreadId === r.clientThreadId &&
    i.accountKey === n.accountKey &&
    i.conversationId == null &&
    (e.get(s)?.key ?? null) === r.navigationKey
    ? i
    : null;
}
function K(e) {
  if (e.get(Y)) return;
  let t = e.get(x);
  if (t.clientThreadId !== e.value.clientThreadId) return;
  if (t.conversationId == null) {
    (z(e), e.get(N) || T(e, { prefersReducedMotion: !0 }));
    return;
  }
  let n = { clientThreadId: a(), sourceSession: t, navigationKey: e.get(s)?.key ?? null };
  e.set(J, n);
}
function q(e, t) {
  let n = e.get(x);
  if (
    e.get(J) !== t ||
    e.value.clientThreadId !== t.clientThreadId ||
    n.accountKey !== t.sourceSession.accountKey ||
    n.clientThreadId !== t.sourceSession.clientThreadId ||
    n.conversationId == null ||
    !e.get(k) ||
    S(e)?.accountKey !== n.accountKey ||
    (e.get(s)?.key ?? null) !== t.navigationKey
  )
    return !1;
  let i = h(e, c, n.clientThreadId),
    a = i == null ? null : h(i, g, `/space`);
  if (a == null) return !1;
  let o = n.conversationId,
    l = !1;
  return (
    r(e, () => {
      B(a, e, (e) => {
        V(a, o, e);
      }) && (e.set(C, t.navigationKey), E(e, v), e.set(J, null), (l = !0));
    }),
    l
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    (i(),
      o(),
      L(),
      t(),
      p(),
      A(),
      u(),
      _(),
      F(),
      H(),
      D(),
      b(),
      U(),
      W(),
      O(),
      M(),
      y(),
      (J = m(d, null)),
      (Y = f(g, ({ get: e, scope: t }) => {
        if (e(R)) return !0;
        let { clientThreadId: r } = t.value;
        if (e(J)?.clientThreadId === r || e(J)?.sourceSession.clientThreadId === r) return !0;
        if (e(x).conversationId != null || !n(r)) return !1;
        let i = e(l, r),
          a = e(j, r);
        return (
          a === void 0 ||
          (i != null && i.status !== `failed`) ||
          (a != null && a.phase !== `failed`)
        );
      })));
  }))();
}
export { J as a, Y as i, X as n, K as o, G as r, q as t };
//# sourceMappingURL=actions-01f600de6534.js.map
