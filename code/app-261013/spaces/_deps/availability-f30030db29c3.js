import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { Bar as a, Bmt as o, Ear as s, Kmt as c, Rkr as l, xkr as u } from "./app-initial-5851df3f6cb1.js";
function d(e, t) {
  return e.backing_type === `drive` && !e.deleted_at && e.can_edit === !0 && t.drive;
}
var f, p;
function m() {
  return (m = e(() => {
    (n(),
      o(),
      s(),
      i(),
      u(),
      (f = r(t, (e, { get: t }) => t(l, e) && t(a))),
      (p = r(t, (e, { get: t }) => {
        if (!t(f, e)) return { drive: !1, loading: !1, error: !1 };
        let n = t(c);
        return { drive: n === `available`, loading: n === `loading`, error: n === `error` };
      })));
  }))();
}
export { f as i, m as n, p as r, d as t };
//# sourceMappingURL=availability-f30030db29c3.js.map
