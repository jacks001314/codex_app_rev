import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { GNr as a, Olr as o, Zht as s, cPr as c, mlr as l, rgt as u } from "./app-initial-ad16eaadf81f.js";
function d(e, t) {
  return e.backing_type === `drive` && !e.deleted_at && e.can_edit === !0 && t.drive;
}
var f, p;
function m() {
  return (m = e(() => {
    (r(),
      s(),
      l(),
      t(),
      a(),
      (f = i(n, (e, { get: t }) => t(c, e) && t(o))),
      (p = i(n, (e, { get: t }) => {
        if (!t(f, e)) return { drive: !1, loading: !1, error: !1 };
        let n = t(u);
        return { drive: n === `available`, loading: n === `loading`, error: n === `error` };
      })));
  }))();
}
export { f as i, m as n, p as r, d as t };
//# sourceMappingURL=availability-be242a6de9ac.js.map
