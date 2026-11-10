import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Hxt as t, Ixt as n, Pxt as r, vzt as i, xMt as a } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as o,
  gwr as s,
  iN as c,
  lCr as l,
  rN as u,
  sCr as d,
  vCr as f,
  yCr as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e) {
  let r = (0, h.c)(7),
    { children: i } = e,
    a = n(s);
  if (a.value.routeKind === `home`) {
    let e;
    return (r[0] === i ? (e = r[1]) : ((e = (0, g.jsx)(u, { children: i })), (r[0] = i), (r[1] = e)), e);
  }
  let o;
  r[2] === a
    ? (o = r[3])
    : ((o = f(a)?.getOwnValue(d) ?? l(a.value, void 0, a.value.clientThreadId)), (r[2] = a), (r[3] = o));
  let c = o,
    p;
  return (
    r[4] !== i || r[5] !== c
      ? ((p = (0, g.jsx)(t, { scope: d, value: c, children: i })), (r[4] = i), (r[5] = c), (r[6] = p))
      : (p = r[6]),
    p
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = i()), r(), p(), c(), o(), (g = a()));
  }))();
}
export { _ as n, m as t };
//# sourceMappingURL=composer-scope-provider-cb17532fb9ac.js.map
