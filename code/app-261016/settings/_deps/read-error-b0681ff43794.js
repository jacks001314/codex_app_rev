import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
import { n as s, t as c } from "./detail-section-state-45be9ee036ee.js";
function l(e) {
  let t = (0, u.c)(8),
    { children: n, loading: r, onRetry: a } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n ??
        (0, d.jsx)(o, {
          id: `workspaceAgents.detail.readError`,
          defaultMessage: `Unable to load this section`,
          description: `Error shown when a Workspace Agent detail tab cannot load`,
        })),
      (t[0] = n),
      (t[1] = s));
  let l;
  t[2] !== r || t[3] !== a
    ? ((l =
        a == null
          ? null
          : (0, d.jsx)(i, {
              color: `secondary`,
              size: `toolbar`,
              loading: r,
              onClick: a,
              children: (0, d.jsx)(o, {
                id: `workspaceAgents.detail.retry`,
                defaultMessage: `Try again`,
                description: `Button that retries loading a Workspace Agent detail section or memory file after a read fails`,
              }),
            })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = l))
    : (l = t[4]);
  let f;
  return (
    t[5] !== s || t[6] !== l
      ? ((f = (0, d.jsxs)(c, { role: `alert`, children: [s, l] })), (t[5] = s), (t[6] = l), (t[7] = f))
      : (f = t[7]),
    f
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), a(), s(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=read-error-b0681ff43794.js.map
