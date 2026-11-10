import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { n as a, r as o } from "./messages-4cbaa49d7ad9.js";
function s(e) {
  let n = (0, c.c)(5),
    { children: r, disabledReason: i } = e,
    o;
  n[0] === i ? (o = n[1]) : ((o = a(i)), (n[0] = i), (n[1] = o));
  let s = o,
    u;
  return (
    n[2] !== r || n[3] !== s
      ? ((u = s == null ? r : (0, l.jsx)(t, { ...s })), (n[2] = r), (n[3] = s), (n[4] = u))
      : (u = n[4]),
    u
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = r()), n(), o(), (l = i()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=plugin-disabled-reason-9ae34b32db06.js.map
