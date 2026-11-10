import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { DNr as a, H1n as o, VPn as s, lBr as c, uBr as l, yNr as u } from "./app-initial-ad16eaadf81f.js";
var d, f, p;
function m() {
  return (m = e(() => {
    (r(),
      a(),
      t(),
      c(),
      s(),
      (d = i(n, (e, { get: t }) => {
        let n = t(o, e),
          r = n?.at(-1)?.messageId;
        if (r == null) return null;
        let i = new Set(n?.filter(({ messageId: e }) => e === r).map(({ automationId: e }) => e));
        return i.size === 1 ? ([...i][0] ?? null) : null;
      })),
      (f = i(n, (e, { get: t }) => {
        if (!t(l, `2840857813`)) return null;
        let n = t(d, e);
        return n != null && t(u, n).data?.automation.plan_type === `language_learning` ? n : null;
      })),
      (p = i(n, (e, { get: t }) => {
        let n = t(f, e);
        return n == null ? null : t(u, n).data?.automation.title.trim() || null;
      })));
  }))();
}
export { m as i, f as n, p as r, d as t };
//# sourceMappingURL=plan-model-ad9ea6b59c2a.js.map
