import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $c as t } from "./app-initial-5851df3f6cb1.js";
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
//# sourceMappingURL=thumbnail-units-f6617d0ee142.js.map
