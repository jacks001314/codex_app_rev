import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { BR as t, LR as n } from "./app-shared-bbfeca5e5737.js";
function r(e, t) {
  return t?.trim() || a(e);
}
function i(e) {
  return r(e.configPath, e.type === `success` ? e.environment.name : null);
}
function a(e) {
  let n = t(e),
    r = n.split(`/`).filter(Boolean);
  return r[r.length - 1] ?? n;
}
function o() {
  return (o = e(() => {
    n();
  }))();
}
export { o as n, i as t };
//# sourceMappingURL=environment-labels-e8b36219dcc7.js.map
