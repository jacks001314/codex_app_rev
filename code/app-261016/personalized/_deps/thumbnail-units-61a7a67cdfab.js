import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { tl as t } from "./app-initial-ad16eaadf81f.js";
function n(e) {
  let t = 32768,
    n = [];
  for (let r of e.units.slice(0, 32)) {
    if (t <= 0) break;
    (n.push({ ...r, markdown: r.markdown.slice(0, t) }), (t -= r.markdown.length));
  }
  return n;
}
function r() {
  return (r = e(() => {
    t();
  }))();
}
export { r as n, n as t };
//# sourceMappingURL=thumbnail-units-61a7a67cdfab.js.map
