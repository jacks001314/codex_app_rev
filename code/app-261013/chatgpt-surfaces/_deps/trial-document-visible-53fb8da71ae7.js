import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  TLt as i,
  fLt as a,
  pIt as o,
  pLt as s,
  uSt as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import { iNr as u, rNr as d } from "./app-initial-5851df3f6cb1.js";
function f(e, t) {
  return e?.kind === `active` && e.expiresAt > t && e.expiresAt - t <= 864e5;
}
var p, m;
function h() {
  return (h = e(() => {
    (n(),
      d(),
      (p = `oai/apps/hasSeenNoPaymentTrialEnding`),
      (m = u(`no-payment-trial-ending-receipts`, [], {
        coerceStoredValue: (e) => o(s({ identity: i(), expiresAt: a() })).safeParse(e).data ?? [],
      })));
  }))();
}
var g;
function _() {
  return (_ = e(() => {
    (r(),
      l(),
      (g = c(
        t,
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
//# sourceMappingURL=trial-document-visible-53fb8da71ae7.js.map
