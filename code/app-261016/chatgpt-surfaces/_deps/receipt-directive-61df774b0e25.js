import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, HFt as n, LNt as r, PBt as i, VRt as a, kRt as o } from "./app-shared-2feb3d4c6fcc.js";
import { ac as s, sc as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, t as u } from "./task-summary-44188370e71e.js";
function d(e) {
  let t = (0, f.c)(4),
    { attributes: n } = e,
    r = (0, p.useContext)(s),
    i;
  t[0] === n ? (i = t[1]) : ((i = h.safeParse(n)), (t[0] = n), (t[1] = i));
  let a = i;
  if (!a.success || r?.isReadOnly) return null;
  let o;
  return (
    t[2] === a.data.id
      ? (o = t[3])
      : ((o = (0, m.jsx)(u, { automationId: a.data.id, source: `cloud` })), (t[2] = a.data.id), (t[3] = o)),
    o
  );
}
var f, p, m, h;
function g() {
  return (g = e(() => {
    ((f = i()), (p = t()), n(), c(), l(), (m = r()), (h = o({ id: a().min(1) })));
  }))();
}
g();
export { d as ScheduledTaskReceiptDirective };
//# sourceMappingURL=receipt-directive-61df774b0e25.js.map
