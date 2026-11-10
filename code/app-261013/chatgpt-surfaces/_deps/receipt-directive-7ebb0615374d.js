import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, TLt as n, pLt as r, vzt as i, xMt as a, yzt as o } from "./app-shared-bbfeca5e5737.js";
import { ec as s, nc as c } from "./app-initial-5851df3f6cb1.js";
import { n as l, t as u } from "./task-summary-49c5524d5225.js";
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
    ((f = i()), (p = o()), t(), c(), l(), (m = a()), (h = r({ id: n().min(1) })));
  }))();
}
g();
export { d as ScheduledTaskReceiptDirective };
//# sourceMappingURL=receipt-directive-7ebb0615374d.js.map
