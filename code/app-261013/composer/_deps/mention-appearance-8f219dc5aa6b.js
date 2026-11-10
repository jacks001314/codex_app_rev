import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, dM as r, nSt as i, pM as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { Icr as s, LPr as c, Lcr as l, RPr as u, Rcr as d } from "./app-initial-5851df3f6cb1.js";
import { i as f, r as p, t as m } from "./hosted-template-catalog-e317c72cbbc5.js";
import { d as h, i as g, n as _, s as v, u as y } from "./state-d523931c59ee.js";
var b, x;
function S() {
  return (S = e(() => {
    (n(),
      f(),
      s(),
      u(),
      o(),
      a(),
      _(),
      (b = i(t, ({ id: e, hostId: t }, { get: n }) => {
        let i = n(h);
        if (i == null) return;
        let a = n(v) === !0,
          o = a ? n(y, `installed`) : void 0,
          s = o?.data?.find((t) => t.id === e);
        if (s != null) return s.permissions?.can_read === !1 ? void 0 : m(s);
        let u = d(t) && n(c, t).data?.find((e) => e.name === `plugins`)?.enabled !== !1,
          f = u ? n(l, { accountId: i.accountId, hostId: t, roots: void 0 }) : void 0,
          _ = f?.data == null ? void 0 : p(f.data).find(({ skill: t }) => t.plugin_release_skill_id === e);
        if (_ != null) return r(_.skill.interface?.display_name?.trim() || _.skill.name, _.type);
        if (!a || o?.data == null || (u && f?.data == null)) return;
        let { data: b } = n(g, e);
        return b == null || b.permissions?.can_read === !1 ? void 0 : m(b);
      })),
      (x = i(t, ({ ids: e, hostId: t }, { get: n }) => {
        let r = new Map();
        for (let i of e) {
          let e = n(b, { id: i, hostId: t });
          e != null && r.set(i, e);
        }
        return r;
      })));
  }))();
}
export { x as n, S as r, b as t };
//# sourceMappingURL=mention-appearance-8f219dc5aa6b.js.map
