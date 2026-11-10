import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  CPt as t,
  F3t as n,
  O3t as r,
  QNt as i,
  ZNt as a,
  kmn as o,
  lPt as s,
  nPt as c,
  oPt as l,
  tPt as u,
  xPt as d,
} from "./app-initial-f094ef01c64d.js";
function f() {
  let e = (0, p.c)(10),
    { data: t, isError: r, isFetching: a, isLoading: o } = n(u),
    s = n(l),
    c = n(i),
    f = t?.avatarDirectory ?? null,
    m = t?.avatars,
    h;
  e[0] !== s.data || e[1] !== c || e[2] !== m
    ? ((h = d(m, s.data, c)), (e[0] = s.data), (e[1] = c), (e[2] = m), (e[3] = h))
    : (h = e[3]);
  let g = a || s.isFetching,
    _ = o || s.isLoading,
    v;
  return (
    e[4] !== r || e[5] !== f || e[6] !== h || e[7] !== g || e[8] !== _
      ? ((v = { avatarDirectory: f, avatarOptions: h, isError: r, isFetching: g, isLoading: _ }),
        (e[4] = r),
        (e[5] = f),
        (e[6] = h),
        (e[7] = g),
        (e[8] = _),
        (e[9] = v))
      : (v = e[9]),
    v
  );
}
var p,
  m = e(() => {
    ((p = o()), r(), t(), a(), s(), c());
  });
export { f as n, m as t };
//# sourceMappingURL=use-avatar-options-25c4fda3035d.js.map
