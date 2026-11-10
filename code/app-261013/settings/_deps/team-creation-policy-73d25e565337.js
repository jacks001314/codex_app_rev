import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { GMr as a, OPr as o, dMr as s, fMr as c, kPr as l, tNr as u } from "./app-initial-5851df3f6cb1.js";
var d;
function f() {
  return (f = e(() => {
    (n(),
      u(),
      c(),
      i(),
      o(),
      (d = r(t, (e, { get: t }) => {
        if (!t(l, `105093358`)) return null;
        if (t(a) !== e) return `unavailable`;
        let { data: n, isPending: r, isError: i } = t(s, e);
        return r
          ? `loading`
          : i || n?.permissions == null
            ? `unavailable`
            : n.permissions.includes(`*`) || n.permissions.includes(`chatgpt.workspace.team.create`)
              ? null
              : `denied`;
      })));
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=team-creation-policy-73d25e565337.js.map
