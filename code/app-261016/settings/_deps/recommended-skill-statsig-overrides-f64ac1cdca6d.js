import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, LRt as n, PBt as r, VRt as i, ezt as a, kRt as o } from "./app-shared-2feb3d4c6fcc.js";
import { Sjr as s, xjr as c } from "./app-initial-ad16eaadf81f.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = s(p),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = u(t)), (e[0] = t), (e[1] = n)), n);
}
function u(e) {
  let t = {},
    n = h.parse(e);
  for (let [e, r] of Object.entries(n.skill_markdown_by_id ?? {})) {
    let n = m.safeParse(r);
    n.success && (t[e] = n.data);
  }
  return t;
}
function d(e, t) {
  return e[t];
}
var f, p, m, h;
function g() {
  return (g = e(() => {
    ((f = r()),
      t(),
      c(),
      (p = `1852350085`),
      (m = i().refine((e) => e.trim().length > 0)),
      (h = o({ skill_markdown_by_id: n(i(), a()).optional() }).catch({ skill_markdown_by_id: {} })));
  }))();
}
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides-f64ac1cdca6d.js.map
