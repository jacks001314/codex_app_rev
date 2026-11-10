import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, zxt as r } from "./app-shared-bbfeca5e5737.js";
import { $ir as i, Bir as a, aar as o, zir as s } from "./app-initial-5851df3f6cb1.js";
function c(e, t, n, a, o, c) {
  let u = (0, l.c)(11),
    d;
  u[0] !== e || u[1] !== t
    ? ((d = e == null ? null : { cwd: e, hostConfig: t }), (u[0] = e), (u[1] = t), (u[2] = d))
    : (d = u[2]);
  let f;
  u[3] === c ? (f = u[4]) : ((f = i(c, null)), (u[3] = c), (u[4] = f));
  let p;
  return (
    u[5] !== n || u[6] !== o || u[7] !== a || u[8] !== d || u[9] !== f
      ? ((p = { key: n, operationSource: o, lookup: d, scope: a, ...f }),
        (u[5] = n),
        (u[6] = o),
        (u[7] = a),
        (u[8] = d),
        (u[9] = f),
        (u[10] = p))
      : (p = u[10]),
    r(s, p)
  );
}
var l;
function u() {
  return (u = e(() => {
    ((l = n()), t(), a(), o());
  }))();
}
export { c as n, u as t };
//# sourceMappingURL=use-git-config-value-a051f0feabcf.js.map
