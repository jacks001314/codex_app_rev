import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { n as t } from "./worker-preparation-34996f08ab5a.js";
function n() {
  return new Worker(
    new URL(`` + new URL(`runtime.worker-57006b1ba70d.js`, import.meta.url).href, `` + import.meta.url),
    { type: `module`, name: `popcorn-workbook-worker` },
  );
}
function r() {
  return t(n);
}
function i() {
  return (i = e(() => {}))();
}
export { i as n, r, n as t };
//# sourceMappingURL=worker-baab70085b2c.js.map
