import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, xMt as r, zxt as i } from "./app-shared-bbfeca5e5737.js";
import { Brt as a, Rrt as o } from "./app-initial-5851df3f6cb1.js";
import { i as s, n as c } from "./view-page-7e6e4c3c304d.js";
import { r as l, t as u } from "./settings-availability-8fa09e4cb93d.js";
function d() {
  let e = (0, f.c)(4),
    { selectedHostId: t } = a(),
    n = i(l, t),
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = n == null ? void 0 : { server: n.server, toolName: `readTool` in n ? n.readTool : n.tool.name }),
      (e[0] = n),
      (e[1] = r));
  let o;
  return (e[2] === r ? (o = e[3]) : ((o = (0, p.jsx)(c, { selection: r })), (e[2] = r), (e[3] = o)), o);
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = n()), t(), s(), o(), u(), (p = r()));
  }))();
}
m();
export { d as RosalindSettings };
//# sourceMappingURL=settings-274d95cb16b5.js.map
