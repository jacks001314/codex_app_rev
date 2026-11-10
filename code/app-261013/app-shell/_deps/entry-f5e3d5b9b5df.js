import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bmt as t, G4n as n, J4n as r, Wmt as i, XMr as a, tNr as o } from "./app-initial-5851df3f6cb1.js";
import { n as s, t as c } from "./session-d332d20f19aa.js";
import { n as l, t as u } from "./dialog-frame-642597a1f43d.js";
function d(e, t) {
  let n = e.get(a);
  s(e, t.accountId, n) &&
    e.get(i) &&
    r(e, u, { ...t, authenticatedUserId: n, shareSessionId: crypto.randomUUID() });
}
function f() {
  return (f = e(() => {
    (o(), n(), t(), l(), c());
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=entry-f5e3d5b9b5df.js.map
