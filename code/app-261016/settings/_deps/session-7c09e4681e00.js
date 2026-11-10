import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Xat as t, Yat as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  DF as r,
  Ezr as i,
  OF as a,
  Tzr as o,
  YRr as s,
  nzr as c,
  szr as l,
} from "./app-initial-ad16eaadf81f.js";
import { r as u, t as d } from "./logout-engine-8fde8f64413f.js";
function f() {
  return s() == null && !l();
}
function p(e, t, r, i = `login`, o) {
  let { provider: s } = n().auth;
  return a(
    `signin/${s}`,
    e,
    i === `login` ? { prompt: `login`, screen_hint: `login_or_signup`, ...t } : t,
    r,
    o,
  );
}
function m(e, t, n, r) {
  return (i(void 0), u(e, t, void 0, void 0, void 0, n, r));
}
function h() {
  return (h = e(() => {
    (o(), c(), t(), r(), d());
  }))();
}
export { m as i, h as n, p as r, f as t };
//# sourceMappingURL=session-7c09e4681e00.js.map
