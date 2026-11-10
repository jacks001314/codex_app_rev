import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B4t as t,
  Dmt as n,
  Ev as r,
  H4t as i,
  Ov as a,
  Tmt as o,
} from "./app-initial-f094ef01c64d.js";
import { ao as s, no as c, so as l } from "./app-primary-4c40d73a1074.js";
async function u(e, t, n) {
  return o(await c(e, t), n);
}
async function d(e, t, n) {
  return new TextDecoder().decode(await f(e, t, n));
}
async function f(e, t, n) {
  return new Uint8Array(await (await u(e, t, n)).arrayBuffer());
}
async function p(e, t) {
  let n = t.provider != null || r(t.file_id) != null ? await l(e, t) : t,
    i = await c(e, n);
  if (i.requestHeaders == null) {
    h(i.downloadUrl, m(n));
    return;
  }
  let a = URL.createObjectURL(await o(i));
  (h(a, m(n)), window.setTimeout(() => URL.revokeObjectURL(a), 0));
}
function m(e) {
  return t(e.file_name) || e.file_name;
}
function h(e, t) {
  let n = document.createElement(`a`);
  ((n.href = e),
    (n.download = t),
    (n.rel = `noopener`),
    document.body.appendChild(n),
    n.click(),
    n.remove());
}
var g = e(() => {
  (a(), n(), i(), s());
});
export { g as a, d as i, u as n, f as r, p as t };
//# sourceMappingURL=library-file-download-379f2e28fa84.js.map
