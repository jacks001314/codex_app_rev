import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  MFt as i,
  PBt as a,
  Qst as o,
  Rrt as s,
  ZSt as c,
  _rt as l,
  iCt as u,
  jFt as d,
  nCt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $N as p,
  MOr as m,
  QN as h,
  RZ as g,
  Uer as _,
  ZN as v,
  eP as y,
  eer as b,
  her as x,
  nP as S,
  tP as C,
  xMr as w,
  yMr as T,
  zOr as E,
  zZ as D,
} from "./app-initial-ad16eaadf81f.js";
function O(e) {
  let n = (0, k.c)(14),
    { conversationId: r } = e,
    a = t(o),
    s = f(g, r),
    c = f(x, r),
    l = f(C, r),
    d = u(y)?.[r],
    m;
  n[0] !== r || n[1] !== s.isEligible || n[2] !== s.reason || n[3] !== c || n[4] !== a
    ? ((m = () => {
        let e = a.get(h, r),
          t = a.get(p, r);
        (e != null && a.set(y, (t) => v(t ?? {}, r, e)),
          i.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: r,
            isEligible: s.isEligible,
            collaborationMode: c,
            permissions: t,
            reason: s.reason,
          }));
      }),
      (n[0] = r),
      (n[1] = s.isEligible),
      (n[2] = s.reason),
      (n[3] = c),
      (n[4] = a),
      (n[5] = m))
    : (m = n[5]);
  let _;
  return (
    n[6] !== d ||
    n[7] !== r ||
    n[8] !== s.isEligible ||
    n[9] !== s.reason ||
    n[10] !== l ||
    n[11] !== c ||
    n[12] !== a
      ? ((_ = [d, r, s.isEligible, s.reason, l, c, a]),
        (n[6] = d),
        (n[7] = r),
        (n[8] = s.isEligible),
        (n[9] = s.reason),
        (n[10] = l),
        (n[11] = c),
        (n[12] = a),
        (n[13] = _))
      : (_ = n[13]),
    (0, A.useEffect)(m, _),
    null
  );
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = a()), c(), (A = r()), b(), d(), n(), D(), S());
  }))();
}
function M(e) {
  let n = (0, N.c)(4),
    { conversationId: r } = e,
    i = t(m),
    a,
    o;
  return (
    n[0] !== r || n[1] !== i
      ? ((a = () => {
          let e = !1;
          return i.watch((t) => {
            let { get: n } = t,
              a = n(_, r);
            a == null || e || ((e = !0), w(i, l, { streamRole: a.role }));
          });
        }),
        (o = [r, i]),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, P.useEffect)(a, o),
    null
  );
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = a()), s(), c(), (P = r()), b(), T(), E());
  }))();
}
export { j as i, F as n, O as r, M as t };
//# sourceMappingURL=local-conversation-stream-role-product-event-2bdb514a7026.js.map
