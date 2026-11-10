import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, eN as i, nN as a, yCt as o } from "./app-shared-2feb3d4c6fcc.js";
import { Dfr as s, Efr as c, Tfr as l, vBr as u, yBr as d } from "./app-initial-ad16eaadf81f.js";
import { i as f, r as p, t as m } from "./hosted-template-catalog-f2a814015bfa.js";
import { d as h, i as g, n as _, s as v, u as y } from "./state-3908339c33b0.js";
var b, x;
function S() {
  return (S = e(() => {
    (r(),
      f(),
      l(),
      d(),
      t(),
      a(),
      _(),
      (b = o(n, ({ id: e, hostId: t }, { get: n }) => {
        let r = n(h);
        if (r == null) return;
        let a = n(v) === !0,
          o = a ? n(y, `installed`) : void 0,
          l = o?.data?.find((t) => t.id === e);
        if (l != null) return l.permissions?.can_read === !1 ? void 0 : m(l);
        let d = s(t) && n(u, t).data?.find((e) => e.name === `plugins`)?.enabled !== !1,
          f = d ? n(c, { accountId: r.accountId, hostId: t, roots: void 0 }) : void 0,
          _ = f?.data == null ? void 0 : p(f.data).find(({ skill: t }) => t.plugin_release_skill_id === e);
        if (_ != null) return i(_.skill.interface?.display_name?.trim() || _.skill.name, _.type);
        if (!a || o?.data == null || (d && f?.data == null)) return;
        let { data: b } = n(g, e);
        return b == null || b.permissions?.can_read === !1 ? void 0 : m(b);
      })),
      (x = o(n, ({ ids: e, hostId: t }, { get: n }) => {
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
//# sourceMappingURL=mention-appearance-da9d7df70a44.js.map
