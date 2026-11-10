import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, fLt as n, pIt as r } from "./app-shared-bbfeca5e5737.js";
import { o as i, w as a } from "./document-c6f04e376b44.js";
function o(e) {
  return JSON.stringify(e, (e, t) => (t instanceof Uint8Array ? Array.from(t) : t));
}
function s(e) {
  return i.fromPartial(JSON.parse(e, (e, t) => (e === `data` ? new Uint8Array(c.parse(t)) : t)));
}
var c;
function l() {
  return (l = e(() => {
    (a(), t(), (c = r(n().int().min(0).max(255))));
  }))();
}
export { s as n, o as r, l as t };
//# sourceMappingURL=snapshot-7d3edd47ebe2.js.map
