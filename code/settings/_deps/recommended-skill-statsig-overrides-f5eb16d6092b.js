import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Drn as t,
  Mrn as n,
  Trn as r,
  aYt as i,
  kmn as a,
  krn as o,
  oYt as s,
  rrn as c,
} from "./app-initial-f094ef01c64d.js";
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
var f,
  p,
  m,
  h,
  g = e(() => {
    ((f = a()),
      c(),
      i(),
      (p = `1852350085`),
      (m = o().refine((e) => e.trim().length > 0)),
      (h = r({ skill_markdown_by_id: t(o(), n()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides-f5eb16d6092b.js.map
