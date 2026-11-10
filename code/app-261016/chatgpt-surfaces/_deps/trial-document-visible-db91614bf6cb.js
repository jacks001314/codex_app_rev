import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  DCt as n,
  HFt as r,
  ORt as i,
  Qst as a,
  VRt as o,
  ZSt as s,
  kLt as c,
  kRt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { ALr as u, kLr as d } from "./app-initial-ad16eaadf81f.js";
function f(e, t) {
  return e?.kind === `active` && e.expiresAt > t && e.expiresAt - t <= 864e5;
}
var p, m;
function h() {
  return (h = e(() => {
    (r(),
      d(),
      (p = `oai/apps/hasSeenNoPaymentTrialEnding`),
      (m = u(`no-payment-trial-ending-receipts`, [], {
        coerceStoredValue: (e) => c(l({ identity: o(), expiresAt: i() })).safeParse(e).data ?? [],
      })));
  }))();
}
var g;
function _() {
  return (_ = e(() => {
    (s(),
      t(),
      (g = n(
        a,
        () => !1,
        ({ set: e }) => {
          let t = globalThis.document;
          if (t == null) return;
          let n = () => e(t.visibilityState === `visible`);
          return (
            n(),
            t.addEventListener(`visibilitychange`, n),
            () => t.removeEventListener(`visibilitychange`, n)
          );
        },
      )));
  }))();
}
export { f as a, h as i, g as n, m as o, p as r, _ as t };
//# sourceMappingURL=trial-document-visible-db91614bf6cb.js.map
