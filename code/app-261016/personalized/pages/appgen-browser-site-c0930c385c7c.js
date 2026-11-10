import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { UI as t, zI as n } from "./app-initial-ad16eaadf81f.js";
function r(e, t) {
  let n = null;
  for (let r of e)
    if (r.type === `appgen-app`)
      for (let e of [r.url, ...(r.alternateUrls ?? [])]) {
        if (e == null) continue;
        let a = i(t, e);
        a != null && a > (n?.specificity ?? -1) && (n = { site: r, specificity: a });
      }
  return n?.site ?? null;
}
function i(e, t) {
  return n(e, t) ? new URL(t).pathname.replace(/\/+$/u, ``).length : null;
}
function a() {
  return (a = e(() => {
    t();
  }))();
}
export { a as n, r as t };
//# sourceMappingURL=appgen-browser-site-c0930c385c7c.js.map
