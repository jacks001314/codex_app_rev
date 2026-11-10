import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as t, SPt as n } from "./app-shared-bbfeca5e5737.js";
import {
  GYt as r,
  JYt as i,
  KYt as a,
  UYt as o,
  WYt as s,
  Zwr as c,
  iTr as l,
  qwr as u,
  tTr as d,
} from "./app-initial-5851df3f6cb1.js";
function f(e, t) {
  let n = e.get(c, t);
  n?.status === `failed` &&
    e.get(d, t) == null &&
    (o(e, { clientThreadId: t }) != null &&
      r(e, { clientThreadId: t }, `create_action`).record(`client.retry`),
    i(e, t),
    l(e, t, { ...n, status: `queued` }));
}
function p(e, n, r) {
  return e.watch((i) => {
    let a = i.get(c, n);
    if (i.get(d, n) != null || a?.status !== `queued`) return;
    let o = { ...a, status: `creating` };
    (l(e, n, o),
      r().catch((r) => {
        (e.get(c, n) === o && l(e, n, { ...o, status: `failed` }),
          t.error(`aeon_onboarding_start_failed`, { safe: {}, sensitive: { error: r } }));
      }));
  });
}
function m() {
  return (m = e(() => {
    (u(), n(), a(), s());
  }))();
}
export { f as n, p as r, m as t };
//# sourceMappingURL=aeon-onboarding-start-da6d0c1d2eef.js.map
