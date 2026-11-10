import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Oz as t, jz as n } from "./app-shared-2feb3d4c6fcc.js";
function r(e, t) {
  return t?.trim() || a(e);
}
function i(e) {
  return r(e.configPath, e.type === `success` ? e.environment.name : null);
}
function a(e) {
  let t = n(e),
    r = t.split(`/`).filter(Boolean);
  return r[r.length - 1] ?? t;
}
function o() {
  return (o = e(() => {
    t();
  }))();
}
export { o as n, i as t };
//# sourceMappingURL=environment-labels-237e71c9a137.js.map
