import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bar as t,
  Dor as n,
  Ear as r,
  XH as i,
  ZH as a,
  qsn as o,
  rcn as s,
  xsn as c,
} from "./app-initial-5851df3f6cb1.js";
function l(e, r, a) {
  e.get(n) != null &&
    e.get(t) &&
    i(
      r.interaction_mode,
      e.query.getData(o, r.id)?.interaction_mode,
      e.query.getData(s)?.items.find((e) => e.id === r.id)?.interaction_mode,
    ) !== `request_changes` &&
    a();
}
function u() {
  return (u = e(() => {
    (r(), a(), c());
  }))();
}
export { l as n, u as t };
//# sourceMappingURL=space-sharing-10564e7624de.js.map
