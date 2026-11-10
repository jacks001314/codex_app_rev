import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, Pat as n, Pxt as r, vzt as i, zxt as a } from "./app-shared-bbfeca5e5737.js";
import { $ir as o, Hir as s, Vir as c, aar as l } from "./app-initial-5851df3f6cb1.js";
var u, d;
function f() {
  return (f = e(() => {
    (s(),
      (u = c({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({ select: (e) => e.paths, staleTime: e.staleTime }),
      })),
      (d = u.fromTarget$));
  }))();
}
function p(e, t, r, i) {
  let s = (0, m.c)(9),
    c;
  s[0] === i ? (c = s[1]) : ((c = o(i, n.ONE_MINUTE)), (s[0] = i), (s[1] = c));
  let l;
  s[2] !== e || s[3] !== t
    ? ((l = e == null ? null : { cwd: e, hostConfig: t }), (s[2] = e), (s[3] = t), (s[4] = l))
    : (l = s[4]);
  let u;
  return (
    s[5] !== r || s[6] !== c || s[7] !== l
      ? ((u = { ...c, operationSource: r, lookup: l }), (s[5] = r), (s[6] = c), (s[7] = l), (s[8] = u))
      : (u = s[8]),
    a(d, u)
  );
}
var m;
function h() {
  return (h = e(() => {
    ((m = i()), r(), t(), l(), f());
  }))();
}
export { p as n, h as t };
//# sourceMappingURL=use-git-submodule-paths-b32699424b1e.js.map
