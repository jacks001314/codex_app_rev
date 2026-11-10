import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { IIr as a, LIr as o, lBr as s, uBr as c, wLr as l, zRr as u } from "./app-initial-ad16eaadf81f.js";
var d;
function f() {
  return (f = e(() => {
    (r(),
      l(),
      o(),
      t(),
      s(),
      (d = i(n, (e, { get: t }) => {
        if (!t(c, `105093358`)) return null;
        if (t(u) !== e) return `unavailable`;
        let { data: n, isPending: r, isError: i } = t(a, e);
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
//# sourceMappingURL=team-creation-policy-9667576ffac1.js.map
