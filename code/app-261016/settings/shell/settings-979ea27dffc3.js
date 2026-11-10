import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, nCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { iat as a, oat as o } from "./app-initial-ad16eaadf81f.js";
import { i as s, n as c } from "./view-page-dd92188ae5b3.js";
import { r as l, t as u } from "./settings-availability-e34b4a6a5c01.js";
function d() {
  let e = (0, f.c)(4),
    { selectedHostId: t } = o(),
    n = i(l, t),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = n == null ? void 0 : { server: n.server, toolName: `readTool` in n ? n.readTool : n.tool.name }),
      (e[0] = n),
      (e[1] = r));
  let a;
  return (e[2] === r ? (a = e[3]) : ((a = (0, p.jsx)(c, { selection: r })), (e[2] = r), (e[3] = a)), a);
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = n()), r(), s(), a(), u(), (p = t()));
  }))();
}
m();
export { d as RosalindSettings };
//# sourceMappingURL=settings-979ea27dffc3.js.map
