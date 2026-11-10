import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fat as t,
  Pat as n,
  Pxt as r,
  Xot as i,
  Yot as a,
  vzt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  UOt as c,
  WOt as l,
  far as u,
  fxt as d,
  mxt as f,
  par as p,
  uar as m,
} from "./app-initial-5851df3f6cb1.js";
function h(e, t, r) {
  let a = (0, g.c)(13),
    o;
  a[0] === e ? (o = a[1]) : ((o = m(e)), (a[0] = e), (a[1] = o));
  let l = o,
    u = s(f, l),
    d = u?.worktreesRoot ?? null,
    h = u != null && (r?.enabled ?? !0),
    _;
  a[2] !== l || a[3] !== d ? ((_ = c(l, d)), (a[2] = l), (a[3] = d), (a[4] = _)) : (_ = a[4]);
  let v;
  a[5] !== e || a[6] !== t || a[7] !== d
    ? ((v = (n) => {
        let { signal: r } = n;
        return p(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: t, worktreesRoot: d },
          signal: r,
        });
      }),
      (a[5] = e),
      (a[6] = t),
      (a[7] = d),
      (a[8] = v))
    : (v = a[8]);
  let y;
  return (
    a[9] !== h || a[10] !== _ || a[11] !== v
      ? ((y = { enabled: h, queryKey: _, queryFn: v, staleTime: n.INFINITE, gcTime: 18e5 }),
        (a[9] = h),
        (a[10] = _),
        (a[11] = v),
        (a[12] = y))
      : (y = a[12]),
    i(y)
  );
}
var g;
function _() {
  return (_ = e(() => {
    ((g = o()), a(), r(), t(), u(), d(), l());
  }))();
}
export { h as n, _ as t };
//# sourceMappingURL=use-codex-worktrees-5b60697f9783.js.map
