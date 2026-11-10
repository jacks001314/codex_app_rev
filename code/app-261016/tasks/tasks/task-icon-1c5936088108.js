import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { i as r, o as i } from "./tasks-fe81dbed229b.js";
function a(e) {
  let t = (0, s.c)(5),
    { taskId: n, className: i, fallback: a } = e,
    l;
  t[0] === n ? (l = t[1]) : ((l = r(n)), (t[0] = n), (t[1] = l));
  let u = l;
  if (u == null) return a;
  let d;
  return (
    t[2] !== i || t[3] !== u
      ? ((d = (0, c.jsx)(o, { className: i, appPlugin: null, entry: u })), (t[2] = i), (t[3] = u), (t[4] = d))
      : (d = t[4]),
    d
  );
}
function o(e) {
  let t = (0, s.c)(4),
    { appPlugin: n, className: r, entry: i } = e,
    a = i.option.Icon,
    o;
  return (
    t[0] !== a || t[1] !== n || t[2] !== r
      ? ((o = (0, c.jsx)(a, { appPlugin: n, className: r })), (t[0] = a), (t[1] = n), (t[2] = r), (t[3] = o))
      : (o = t[3]),
    o
  );
}
var s, c;
function l() {
  return (l = e(() => {
    ((s = n()), i(), (c = t()));
  }))();
}
export { a as n, l as r, o as t };
//# sourceMappingURL=task-icon-1c5936088108.js.map
