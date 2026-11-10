import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, Vxt as n, vzt as r } from "./app-shared-bbfeca5e5737.js";
import {
  A7 as i,
  E7 as a,
  F7 as o,
  R7 as s,
  T7 as c,
  Y7 as l,
  k7 as u,
  q7 as d,
} from "./app-initial-5851df3f6cb1.js";
function f(e) {
  let t = (0, p.c)(14),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { includeCloudPets: i } = r,
    s = i === void 0 || i,
    { data: c, isError: l, isFetching: f, isLoading: m } = n(u),
    h;
  t[2] === s ? (h = t[3]) : ((h = { enabled: s }), (t[2] = s), (t[3] = h));
  let g = n(o, h),
    _ = n(a),
    v = c?.avatarDirectory ?? null,
    y = c?.avatars,
    b = s ? g.data : void 0,
    x;
  t[4] !== _ || t[5] !== y || t[6] !== b
    ? ((x = d(y, b, _)), (t[4] = _), (t[5] = y), (t[6] = b), (t[7] = x))
    : (x = t[7]);
  let S = f || (s && g.isFetching),
    C = m || (s && g.isLoading),
    w;
  return (
    t[8] !== l || t[9] !== v || t[10] !== x || t[11] !== S || t[12] !== C
      ? ((w = { avatarDirectory: v, avatarOptions: x, isError: l, isFetching: S, isLoading: C }),
        (t[8] = l),
        (t[9] = v),
        (t[10] = x),
        (t[11] = S),
        (t[12] = C),
        (t[13] = w))
      : (w = t[13]),
    w
  );
}
var p;
function m() {
  return (m = e(() => {
    ((p = r()), t(), l(), c(), s(), i());
  }))();
}
export { f as n, m as t };
//# sourceMappingURL=use-avatar-options-56495836bfd6.js.map
