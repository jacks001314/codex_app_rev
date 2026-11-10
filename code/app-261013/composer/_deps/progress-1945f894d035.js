import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as n, HNt as r, Pxt as i, aSt as a, nSt as o, wot as s } from "./app-shared-bbfeca5e5737.js";
import {
  Dor as c,
  Ovr as l,
  Tvr as u,
  XMr as d,
  fvr as f,
  jvr as p,
  tNr as m,
  uvr as h,
  wvr as g,
  xsn as _,
} from "./app-initial-5851df3f6cb1.js";
import { n as v, t as y } from "./generation-progress-heading-f87a2dcbfbb5.js";
function b(e, t, n) {
  if ((0, x.default)(e.get(C, t), n)) return;
  let r = e.get(d),
    i = { hostId: n.hostId, threadId: n.threadId };
  (e.set(C, t, n), e.set(S, t, { enabled: !0, slideId: null, heading: null }));
  let a = e.watch(({ get: o }) => {
    o(h, i);
    let s = o(p, o(w, t)),
      l = o(u, i),
      f = o(y, o(w, t));
    (f != null && e.set(S, t, (e) => (e.heading === f ? e : { ...e, heading: f })),
      (o(C, t) !== n ||
        o(c) !== t.accountId ||
        o(d) !== r ||
        l === `missing` ||
        l === `unavailable` ||
        l === `error` ||
        (s != null && s !== `inProgress`)) &&
        queueMicrotask(() => {
          (a(),
            e.get(C, t) === n &&
              (e.set(C, t, null),
              (e.get(c) !== t.accountId || e.get(d) !== r) &&
                e.set(S, t, { enabled: !1, slideId: null, heading: null })));
        }));
  });
}
var x, S, C, w, T, E, D;
function O() {
  return (O = e(() => {
    ((x = t(r(), 1)),
      i(),
      f(),
      v(),
      m(),
      s(),
      _(),
      (S = a(n, (e) => ({ enabled: !0, slideId: null, heading: null }), void 0, { autoDispose: 6e4 })),
      (C = a(n, (e) => null, void 0, { autoDispose: 6e4 })),
      (w = o(
        n,
        (e, { get: t }) => {
          let n = t(C, e);
          return n == null
            ? null
            : (t(g, { hostId: n.hostId, threadId: n.threadId })?.find((e) => t(l, e) === n.turnId) ?? null);
        },
        { isEqual: x.default },
      )),
      (T = o(n, (e, { get: t }) => t(p, t(w, e)) === `inProgress`)),
      (E = a(n, (e) => 0, void 0, { autoDispose: 6e4 })),
      (D = o(n, (e, { get: t }) => t(E, e) > 0)));
  }))();
}
export { D as a, E as i, T as n, S as o, w as r, b as s, O as t };
//# sourceMappingURL=progress-1945f894d035.js.map
