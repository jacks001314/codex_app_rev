import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Rnt as i,
  Vxt as a,
  _nt as o,
  gPt as s,
  hPt as c,
  vzt as l,
  wot as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as p,
  N8n as m,
  QDr as h,
  XDr as g,
  _N as _,
  _X as v,
  gN as y,
  gX as b,
  gwr as x,
  hN as S,
  mN as C,
  s5n as w,
  v8n as T,
  vN as E,
  yN as D,
} from "./app-initial-5851df3f6cb1.js";
function O(e) {
  let r = (0, k.c)(14),
    { conversationId: i } = e,
    o = n(t),
    c = f(b, i),
    l = f(m, i),
    u = f(E, i),
    d = a(_)?.[i],
    p;
  r[0] !== i || r[1] !== c.isEligible || r[2] !== c.reason || r[3] !== l || r[4] !== o
    ? ((p = () => {
        let e = o.get(S, i),
          t = o.get(y, i);
        (e != null && o.set(_, (t) => C(t ?? {}, i, e)),
          s.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: i,
            isEligible: c.isEligible,
            collaborationMode: l,
            permissions: t,
            reason: c.reason,
          }));
      }),
      (r[0] = i),
      (r[1] = c.isEligible),
      (r[2] = c.reason),
      (r[3] = l),
      (r[4] = o),
      (r[5] = p))
    : (p = r[5]);
  let h;
  return (
    r[6] !== d ||
    r[7] !== i ||
    r[8] !== c.isEligible ||
    r[9] !== c.reason ||
    r[10] !== u ||
    r[11] !== l ||
    r[12] !== o
      ? ((h = [d, i, c.isEligible, c.reason, u, l, o]),
        (r[6] = d),
        (r[7] = i),
        (r[8] = c.isEligible),
        (r[9] = c.reason),
        (r[10] = u),
        (r[11] = l),
        (r[12] = o),
        (r[13] = h))
      : (h = r[13]),
    (0, A.useEffect)(p, h),
    null
  );
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = l()), r(), (A = d()), T(), c(), u(), v(), D());
  }))();
}
function M(e) {
  let t = (0, N.c)(4),
    { conversationId: r } = e,
    i = n(x),
    a,
    s;
  return (
    t[0] !== r || t[1] !== i
      ? ((a = () => {
          let e = !1;
          return i.watch((t) => {
            let { get: n } = t,
              a = n(w, r);
            a == null || e || ((e = !0), h(i, o, { streamRole: a.role }));
          });
        }),
        (s = [r, i]),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a),
        (t[3] = s))
      : ((a = t[2]), (s = t[3])),
    (0, P.useEffect)(a, s),
    null
  );
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = l()), i(), r(), (P = d()), T(), g(), p());
  }))();
}
export { j as i, F as n, O as r, M as t };
//# sourceMappingURL=local-conversation-stream-role-product-event-1367a4b33883.js.map
