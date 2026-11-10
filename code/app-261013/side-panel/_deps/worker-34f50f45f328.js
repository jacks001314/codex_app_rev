import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { n as t } from "./worker-preparation-d9be38efd913.js";
function n() {
  return new Worker(
    new URL(`` + new URL(`runtime.worker-3dd88803a177.js`, import.meta.url).href, `` + import.meta.url),
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
//# sourceMappingURL=worker-34f50f45f328.js.map
