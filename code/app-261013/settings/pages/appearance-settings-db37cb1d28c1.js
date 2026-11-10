import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import { _F as i, eF as a, hF as o, tF as s, vF as c, yF as l } from "./app-initial-5851df3f6cb1.js";
import { n as u, s as d } from "./general-settings-a68a0de66803.js";
function f() {
  let e = (0, p.c)(4),
    t = (0, m.useContext)(c),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, h.jsx)(a, { slug: `appearance` })), (e[0] = n))
    : (n = e[0]);
  let r = t?.navigationKey,
    i = t?.targetId != null || t?.targetText != null,
    s;
  return (
    e[1] !== r || e[2] !== i
      ? ((s = (0, h.jsx)(o, { title: n, children: (0, h.jsx)(u, { defaultAdvancedExpanded: i }, r) })),
        (e[1] = r),
        (e[2] = i),
        (e[3] = s))
      : (s = e[3]),
    s
  );
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = t()), (m = r()), i(), l(), s(), d(), (h = n()));
  }))();
}
g();
export { f as AppearanceSettings };
//# sourceMappingURL=appearance-settings-db37cb1d28c1.js.map
