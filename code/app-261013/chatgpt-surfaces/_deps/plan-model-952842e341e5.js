import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { OPr as a, YOr as o, hZn as s, kPr as c, rkr as l, yjn as u } from "./app-initial-5851df3f6cb1.js";
var d, f, p;
function m() {
  return (m = e(() => {
    (n(),
      l(),
      i(),
      a(),
      u(),
      (d = r(t, (e, { get: t }) => {
        let n = t(s, e),
          r = n?.at(-1)?.messageId;
        if (r == null) return null;
        let i = new Set(n?.filter(({ messageId: e }) => e === r).map(({ automationId: e }) => e));
        return i.size === 1 ? ([...i][0] ?? null) : null;
      })),
      (f = r(t, (e, { get: t }) => {
        if (!t(c, `2840857813`)) return null;
        let n = t(d, e);
        return n != null && t(o, n).data?.automation.plan_type === `language_learning` ? n : null;
      })),
      (p = r(t, (e, { get: t }) => {
        let n = t(f, e);
        return n == null ? null : t(o, n).data?.automation.title.trim() || null;
      })));
  }))();
}
export { m as i, f as n, p as r, d as t };
//# sourceMappingURL=plan-model-952842e341e5.js.map
