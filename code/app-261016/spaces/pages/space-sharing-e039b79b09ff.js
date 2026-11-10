import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Olr as t,
  Vdn as n,
  Zdn as r,
  dW as i,
  gur as a,
  hdn as o,
  mlr as s,
  uW as c,
} from "./app-initial-ad16eaadf81f.js";
function l(e, i, o) {
  e.get(a) != null &&
    e.get(t) &&
    c(
      i.interaction_mode,
      e.query.getData(n, i.id)?.interaction_mode,
      e.query.getData(r)?.items.find((e) => e.id === i.id)?.interaction_mode,
    ) !== `request_changes` &&
    o();
}
function u() {
  return (u = e(() => {
    (s(), i(), o());
  }))();
}
export { l as n, u as t };
//# sourceMappingURL=space-sharing-e039b79b09ff.js.map
