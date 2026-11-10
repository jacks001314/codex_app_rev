import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  HCt as t,
  N3t as n,
  O3t as r,
  TJt as i,
  VCt as a,
  cUt as o,
  iUt as s,
  kmn as c,
  wJt as l,
} from "./app-initial-f094ef01c64d.js";
var u,
  d,
  f = e(() => {
    (t(),
      (u = a({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({ select: (e) => e.paths, staleTime: e.staleTime }),
      })),
      (d = u.fromTarget$));
  });
function p(e, t, r, i) {
  let a = (0, m.c)(9),
    o;
  a[0] === i ? (o = a[1]) : ((o = s(i, l.ONE_MINUTE)), (a[0] = i), (a[1] = o));
  let c;
  a[2] !== e || a[3] !== t
    ? ((c = e == null ? null : { cwd: e, hostConfig: t }), (a[2] = e), (a[3] = t), (a[4] = c))
    : (c = a[4]);
  let u;
  return (
    a[5] !== r || a[6] !== o || a[7] !== c
      ? ((u = { ...o, operationSource: r, lookup: c }),
        (a[5] = r),
        (a[6] = o),
        (a[7] = c),
        (a[8] = u))
      : (u = a[8]),
    n(d, u)
  );
}
var m,
  h = e(() => {
    ((m = c()), r(), i(), o(), f());
  });
export { p as n, h as t };
//# sourceMappingURL=use-git-submodule-paths-2adf56e7dea1.js.map
