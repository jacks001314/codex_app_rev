import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  ACt as n,
  CCt as r,
  Jbt as i,
  Qst as a,
  Ubt as o,
  ZSt as s,
  kCt as c,
  pwt as l,
  sct as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Vt as d,
  $cr as f,
  $rn as p,
  Bk as m,
  CDr as h,
  EOn as g,
  FDr as _,
  Fk as v,
  Fnt as y,
  Gnt as b,
  Ik as x,
  MOr as S,
  QOr as C,
  Rk as w,
  Rnt as T,
  Snt as E,
  TOn as D,
  Vk as O,
  Ycr as k,
  ZVt as A,
  hnt as j,
  lkr as M,
  mnt as N,
  pkr as P,
  tin as F,
  ynt as I,
  zOr as L,
  zk as R,
} from "./app-initial-ad16eaadf81f.js";
import { a as z, i as B, n as V, o as H, r as U, t as W } from "./outgoing-chat-checkpoint-ef81080d85b5.js";
async function G(e, t) {
  let r = v(e);
  if (r == null || r.clientThreadId !== e.value.clientThreadId || e.get(Y) || t(e)) return null;
  if (r.conversationId == null) {
    if (e.get(I)) return null;
    let t = n(e, h, r.clientThreadId);
    return t != null && !p(t) ? r : null;
  }
  K(e);
  let i = e.get(J);
  if (i == null) return null;
  await e.when((e) => t(e) || e.get(J) !== i || v(e)?.clientThreadId !== r.clientThreadId);
  let a = v(e);
  return !t(e) &&
    a?.clientThreadId === i.clientThreadId &&
    a.accountKey === r.accountKey &&
    a.conversationId == null &&
    (e.get(k)?.key ?? null) === i.navigationKey
    ? a
    : null;
}
function K(e) {
  if (e.get(Y)) return;
  let t = e.get(w);
  if (t.clientThreadId !== e.value.clientThreadId) return;
  if (t.conversationId == null) {
    (z(e), e.get(T) || b(e, { prefersReducedMotion: !0 }));
    return;
  }
  let n = { clientThreadId: o(), sourceSession: t, navigationKey: e.get(k)?.key ?? null };
  e.set(J, n);
}
function q(e, t) {
  let r = e.get(w);
  if (
    e.get(J) !== t ||
    e.value.clientThreadId !== t.clientThreadId ||
    r.accountKey !== t.sourceSession.accountKey ||
    r.clientThreadId !== t.sourceSession.clientThreadId ||
    r.conversationId == null ||
    !e.get(d) ||
    v(e)?.accountKey !== r.accountKey ||
    (e.get(k)?.key ?? null) !== t.navigationKey
  )
    return !1;
  let i = n(e, C, r.clientThreadId),
    a = i == null ? null : n(i, S, `/space`);
  if (a == null) return !1;
  let o = r.conversationId,
    s = !1;
  return (
    l(e, () => {
      B(a, e, (e) => {
        V(a, o, e);
      }) && (e.set(R, t.navigationKey), N(e, O), e.set(J, null), (s = !0));
    }),
    s
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    (s(),
      u(),
      F(),
      f(),
      t(),
      _(),
      L(),
      M(),
      y(),
      H(),
      E(),
      j(),
      U(),
      W(),
      D(),
      A(),
      x(),
      (J = c(a, null)),
      (Y = r(S, ({ get: e, scope: t }) => {
        if (e(m)) return !0;
        let { clientThreadId: n } = t.value;
        if (e(J)?.clientThreadId === n || e(J)?.sourceSession.clientThreadId === n) return !0;
        if (e(w).conversationId != null || !i(n)) return !1;
        let r = e(P, n),
          a = e(g, n);
        return a === void 0 || (r != null && r.status !== `failed`) || (a != null && a.phase !== `failed`);
      })));
  }))();
}
export { J as a, Y as i, X as n, K as o, G as r, q as t };
//# sourceMappingURL=actions-e51654d88035.js.map
