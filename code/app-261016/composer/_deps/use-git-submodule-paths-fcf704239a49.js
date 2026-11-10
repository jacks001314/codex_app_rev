import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, PBt as n, ZSt as r, nCt as i, zst as a } from "./app-shared-2feb3d4c6fcc.js";
import { Dcr as o, Ncr as s, gcr as c, hcr as l } from "./app-initial-ad16eaadf81f.js";
var u, d;
function f() {
  return (f = e(() => {
    (c(),
      (u = l({
        method: `submodule-paths`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({ select: (e) => e.paths, staleTime: e.staleTime }),
      })),
      (d = u.fromTarget$));
  }))();
}
function p(e, t, n, r) {
  let s = (0, m.c)(9),
    c;
  s[0] === r ? (c = s[1]) : ((c = o(r, a.ONE_MINUTE)), (s[0] = r), (s[1] = c));
  let l;
  s[2] !== e || s[3] !== t
    ? ((l = e == null ? null : { cwd: e, hostConfig: t }), (s[2] = e), (s[3] = t), (s[4] = l))
    : (l = s[4]);
  let u;
  return (
    s[5] !== n || s[6] !== c || s[7] !== l
      ? ((u = { ...c, operationSource: n, lookup: l }), (s[5] = n), (s[6] = c), (s[7] = l), (s[8] = u))
      : (u = s[8]),
    i(d, u)
  );
}
var m;
function h() {
  return (h = e(() => {
    ((m = n()), r(), t(), s(), f());
  }))();
}
export { p as n, h as t };
//# sourceMappingURL=use-git-submodule-paths-fcf704239a49.js.map
