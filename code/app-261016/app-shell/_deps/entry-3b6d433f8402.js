import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { A5n as t, BRr as n, D5n as r, Zht as i, tgt as a, wLr as o } from "./app-initial-ad16eaadf81f.js";
import { n as s, t as c } from "./session-aa148fc2a589.js";
import { n as l, t as u } from "./dialog-frame-a10df3869655.js";
function d(e, r) {
  let i = e.get(n);
  s(e, r.accountId, i) &&
    e.get(a) &&
    t(e, u, { ...r, authenticatedUserId: i, shareSessionId: crypto.randomUUID() });
}
function f() {
  return (f = e(() => {
    (o(), r(), i(), l(), c());
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=entry-3b6d433f8402.js.map
