import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ait as t, jit as n } from "./app-shared-bbfeca5e5737.js";
import { GP as r, WP as i } from "./app-initial-5851df3f6cb1.js";
import { r as a, t as o } from "./logout-engine-3e5ca2b0809a.js";
function s(e, n, i, a = `login`, o) {
  let { provider: s } = t().auth;
  return r(
    `signin/${s}`,
    e,
    a === `login` ? { prompt: `login`, screen_hint: `login_or_signup`, ...n } : n,
    i,
    o,
  );
}
function c(e, t, n) {
  return a(e, t, void 0, void 0, void 0, n);
}
function l() {
  return (l = e(() => {
    (n(), i(), o());
  }))();
}
export { s as n, c as r, l as t };
//# sourceMappingURL=session-594d75fbcc25.js.map
