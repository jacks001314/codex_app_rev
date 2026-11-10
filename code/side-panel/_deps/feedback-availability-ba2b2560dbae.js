import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  CQ as n,
  Dqt as r,
  O3t as i,
  QWt as a,
  VTt as o,
  YWt as s,
  _Q as c,
  c6t as l,
  dKt as u,
  fKt as d,
  gRt as f,
  n4t as p,
  rTt as m,
  xRt as h,
  xqt as g,
} from "./app-initial-f094ef01c64d.js";
var _,
  v = e(() => {
    (i(),
      t(),
      m(),
      a(),
      d(),
      r(),
      h(),
      c(),
      p(),
      (_ = l(f, ({ get: e, scope: t }) => {
        let { accountId: r, accountStructure: i, authMethod: a } = e(s),
          c = t.value.routeKind === `other` ? e(o, null) : e(n);
        if (
          e(g, { authMethod: a, hostId: c === `durable` ? `local` : c }).data?.requirements
            ?.feedback?.enabled === !1
        )
          return !1;
        if (r == null || i === `personal`) return !0;
        if (i !== `workspace`) return !1;
        let l = e(u, r).data;
        return l != null && l.beta_settings.enable_message_feedback !== !1;
      })));
  });
export { _ as n, v as t };
//# sourceMappingURL=feedback-availability-ba2b2560dbae.js.map
