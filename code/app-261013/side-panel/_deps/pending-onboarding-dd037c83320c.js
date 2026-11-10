import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, fSt as r, nSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import { GMr as o, XMr as s, Zwr as c, qwr as l, tNr as u } from "./app-initial-5851df3f6cb1.js";
var d, f;
function p() {
  return (p = e(() => {
    (n(),
      u(),
      a(),
      l(),
      (d = r(t, new Map())),
      (f = i(t, (e, { get: t }) => {
        if (e == null) return null;
        let n = t(d).get(e);
        return n != null && n.accountId === t(o) && n.userId === t(s) && t(c, e) != null ? n : null;
      })));
  }))();
}
export { f as n, d as r, p as t };
//# sourceMappingURL=pending-onboarding-dd037c83320c.js.map
