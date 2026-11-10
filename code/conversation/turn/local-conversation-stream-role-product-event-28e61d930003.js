import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $b as n,
  A3t as r,
  Amn as i,
  CTt as a,
  F3t as o,
  H1t as s,
  Jb as c,
  N3t as l,
  O3t as u,
  QXt as d,
  Qb as f,
  TTt as p,
  Xb as m,
  YTt as h,
  Yb as g,
  Zb as _,
  a3t as v,
  bmn as y,
  e0t as b,
  eZt as x,
  ex as S,
  gRt as C,
  kmn as w,
  o3t as T,
  qb as E,
  rTt as D,
  xRt as O,
  xmn as k,
  yTt as A,
} from "./app-initial-f094ef01c64d.js";
function j(e) {
  let t = (0, M.c)(15),
    { conversationId: i } = e,
    s = r(v),
    u = l(n, i),
    d = l(A, i),
    f = l(_, i),
    h = o(m)?.[i],
    y;
  t[0] !== h || t[1] !== i || t[2] !== u.isEligible || t[3] !== u.reason || t[4] !== d || t[5] !== s
    ? ((y = () => {
        let e = s.get(p, i),
          t = s.get(a, i),
          n = c(e, t),
          r = g(e, t, h);
        (n != null && s.set(m, (e) => E(e ?? {}, i, n)),
          k.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: i,
            isEligible: u.isEligible,
            collaborationMode: d,
            permissions: r,
            reason: u.reason,
          }));
      }),
      (t[0] = h),
      (t[1] = i),
      (t[2] = u.isEligible),
      (t[3] = u.reason),
      (t[4] = d),
      (t[5] = s),
      (t[6] = y))
    : (y = t[6]);
  let b;
  return (
    t[7] !== h ||
    t[8] !== i ||
    t[9] !== u.isEligible ||
    t[10] !== u.reason ||
    t[11] !== f ||
    t[12] !== d ||
    t[13] !== s
      ? ((b = [h, i, u.isEligible, u.reason, f, d, s]),
        (t[7] = h),
        (t[8] = i),
        (t[9] = u.isEligible),
        (t[10] = u.reason),
        (t[11] = f),
        (t[12] = d),
        (t[13] = s),
        (t[14] = b))
      : (b = t[14]),
    (0, N.useEffect)(y, b),
    null
  );
}
var M,
  N,
  P = e(() => {
    ((M = w()), u(), (N = t(i(), 1)), D(), y(), T(), S(), f());
  });
function F(e) {
  let t = (0, I.c)(4),
    { conversationId: n } = e,
    i = r(C),
    a,
    o;
  return (
    t[0] !== n || t[1] !== i
      ? ((a = () => {
          let e = !1;
          return i.watch((t) => {
            let { get: r } = t,
              a = r(h, n);
            a == null || e || ((e = !0), x(i, s, { streamRole: a.role }));
          });
        }),
        (o = [n, i]),
        (t[0] = n),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o))
      : ((a = t[2]), (o = t[3])),
    (0, L.useEffect)(a, o),
    null
  );
}
var I,
  L,
  R = e(() => {
    ((I = w()), b(), u(), (L = t(i(), 1)), D(), d(), O());
  });
export { P as i, R as n, j as r, F as t };
//# sourceMappingURL=local-conversation-stream-role-product-event-28e61d930003.js.map
