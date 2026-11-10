import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, Qst as r, SCt as i, ZSt as a, iFt as o, yCt as s } from "./app-shared-2feb3d4c6fcc.js";
import {
  ASr as c,
  BRr as l,
  DSr as u,
  ESr as d,
  NSr as f,
  fSr as p,
  gur as m,
  hdn as h,
  mSr as g,
  wLr as _,
} from "./app-initial-ad16eaadf81f.js";
import { n as v, t as y } from "./generation-progress-heading-324b560bbaa7.js";
function b(e, t, n) {
  if ((0, x.default)(e.get(C, t), n)) return;
  let r = e.get(l),
    i = { hostId: n.hostId, threadId: n.threadId };
  (e.set(C, t, n), e.set(S, t, { enabled: !0, slideId: null, heading: null }));
  let a = e.watch(({ get: o }) => {
    o(p, i);
    let s = o(f, o(w, t)),
      c = o(u, i),
      d = o(y, o(w, t));
    (d != null && e.set(S, t, (e) => (e.heading === d ? e : { ...e, heading: d })),
      (o(C, t) !== n ||
        o(m) !== t.accountId ||
        o(l) !== r ||
        c === `missing` ||
        c === `unavailable` ||
        c === `error` ||
        (s != null && s !== `inProgress`)) &&
        queueMicrotask(() => {
          (a(),
            e.get(C, t) === n &&
              (e.set(C, t, null),
              (e.get(m) !== t.accountId || e.get(l) !== r) &&
                e.set(S, t, { enabled: !1, slideId: null, heading: null })));
        }));
  });
}
var x, S, C, w, T, E, D;
function O() {
  return (O = e(() => {
    ((x = t(o(), 1)),
      a(),
      g(),
      v(),
      _(),
      n(),
      h(),
      (S = i(r, (e) => ({ enabled: !0, slideId: null, heading: null }), void 0, { autoDispose: 6e4 })),
      (C = i(r, (e) => null, void 0, { autoDispose: 6e4 })),
      (w = s(
        r,
        (e, { get: t }) => {
          let n = t(C, e);
          return n == null
            ? null
            : (t(d, { hostId: n.hostId, threadId: n.threadId })?.find((e) => t(c, e) === n.turnId) ?? null);
        },
        { isEqual: x.default },
      )),
      (T = s(r, (e, { get: t }) => t(f, t(w, e)) === `inProgress`)),
      (E = i(r, (e) => 0, void 0, { autoDispose: 6e4 })),
      (D = s(r, (e, { get: t }) => t(E, e) > 0)));
  }))();
}
export { D as a, E as i, T as n, S as o, w as r, b as s, O as t };
//# sourceMappingURL=progress-3dff812c5a6d.js.map
