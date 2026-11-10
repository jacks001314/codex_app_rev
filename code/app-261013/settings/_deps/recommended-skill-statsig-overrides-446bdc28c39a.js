import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, RLt as n, TLt as r, pLt as i, vzt as a, xLt as o } from "./app-shared-bbfeca5e5737.js";
import { eDr as s, tDr as c } from "./app-initial-5851df3f6cb1.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = c(p),
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
    ((f = a()),
      t(),
      s(),
      (p = `1852350085`),
      (m = r().refine((e) => e.trim().length > 0)),
      (h = i({ skill_markdown_by_id: o(r(), n()).optional() }).catch({ skill_markdown_by_id: {} })));
  }))();
}
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides-446bdc28c39a.js.map
