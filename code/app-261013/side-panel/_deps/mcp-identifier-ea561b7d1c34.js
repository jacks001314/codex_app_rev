import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { rst as t } from "./app-shared-bbfeca5e5737.js";
function n(e) {
  let t = r(e);
  return t === `browser` || t === `browser-use`;
}
function r(e) {
  return (e ?? ``)
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((e) => e.length > 0)
    .join(`-`)
    .replace(/^connector-/u, ``);
}
function i() {
  return (i = e(() => {
    t();
  }))();
}
export { i as n, n as r, r as t };
//# sourceMappingURL=mcp-identifier-ea561b7d1c34.js.map
