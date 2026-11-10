import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { PBt as t, ZSt as n, iCt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  J9 as i,
  Q9 as a,
  Z9 as o,
  _et as s,
  het as c,
  oet as l,
  q9 as u,
  ret as d,
} from "./app-initial-ad16eaadf81f.js";
function f(e) {
  let t = (0, p.c)(14),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { includeCloudPets: a } = n,
    s = a === void 0 || a,
    { data: l, isError: u, isFetching: f, isLoading: m } = r(o),
    h;
  t[2] === s ? (h = t[3]) : ((h = { enabled: s }), (t[2] = s), (t[3] = h));
  let g = r(d, h),
    _ = r(i),
    v = l?.avatarDirectory ?? null,
    y = l?.avatars,
    b = s ? g.data : void 0,
    x;
  t[4] !== _ || t[5] !== y || t[6] !== b
    ? ((x = c(y, b, _)), (t[4] = _), (t[5] = y), (t[6] = b), (t[7] = x))
    : (x = t[7]);
  let S = f || (s && g.isFetching),
    C = m || (s && g.isLoading),
    w;
  return (
    t[8] !== u || t[9] !== v || t[10] !== x || t[11] !== S || t[12] !== C
      ? ((w = { avatarDirectory: v, avatarOptions: x, isError: u, isFetching: S, isLoading: C }),
        (t[8] = u),
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
    ((p = t()), n(), s(), u(), l(), a());
  }))();
}
export { f as n, m as t };
//# sourceMappingURL=use-avatar-options-38297e1d0f5d.js.map
