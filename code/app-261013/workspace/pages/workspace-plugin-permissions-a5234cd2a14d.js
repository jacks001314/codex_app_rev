import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  oSt as o,
  uSt as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import { APr as l, NPr as u, OPr as d, gOr as f, hOr as p, jPr as m } from "./app-initial-5851df3f6cb1.js";
var h, g, _, v, y;
function b() {
  return (b = e(() => {
    (a(),
      p(),
      c(),
      d(),
      r(),
      (h = t(n, () => ({ queryKey: [`accounts`, `check`], enabled: !1, staleTime: i.ONE_MINUTE }))),
      (g = s(
        n,
        ({ get: e }) => {
          let t = e(m);
          return {
            workspaceId: t?.getContext().user.customIDs?.workspace_id,
            disabled: t?.checkGate(`2911503418`) ?? !1,
          };
        },
        ({ get: e, set: t }) => {
          let n = e(m);
          if (n == null) return;
          let r = () => {
            t({
              workspaceId: n.getContext().user.customIDs?.workspace_id,
              disabled: n.checkGate(`2911503418`),
            });
          };
          return (r(), n.on(`values_updated`, r), () => n.off(`values_updated`, r));
        },
      )),
      (_ = o(n, ({ get: e }) => {
        let t = e(f),
          n = e(h).data?.accounts?.find((e) => e.id === t);
        if (n?.structure === `personal`) return `allowed`;
        let r = e(g);
        return n?.structure !== `workspace` || r.workspaceId !== t || e(u) || !e(l, `2911503418`)
          ? `unknown`
          : r.disabled
            ? `disabled`
            : `allowed`;
      })),
      (v = o(n, ({ get: e }) => e(_) === `allowed`)),
      (y = o(n, ({ get: e }) => e(_) === `disabled`)));
  }))();
}
function x(e, t) {
  return e?.structure === `workspace` && e.plan_type !== `quorum` && t;
}
function S(e, t, n) {
  return e != null && (!x(e, t) || n?.includes(`chatgpt.workspace_plugins.use`) === !0);
}
function C() {
  return (C = e(() => {}))();
}
export { v as a, b as i, C as n, y as o, x as r, S as t };
//# sourceMappingURL=workspace-plugin-permissions-a5234cd2a14d.js.map
