import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $4 as t, IDt as n, jDt as r, t3 as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { n as s, t as c } from "./detail-section-state-e7774e5ba7f3.js";
function l(e) {
  let r = (0, u.c)(8),
    { children: i, loading: a, onRetry: o } = e,
    s;
  r[0] === i
    ? (s = r[1])
    : ((s =
        i ??
        (0, d.jsx)(n, {
          id: `workspaceAgents.detail.readError`,
          defaultMessage: `Unable to load this section`,
          description: `Error shown when a Workspace Agent detail tab cannot load`,
        })),
      (r[0] = i),
      (r[1] = s));
  let l;
  r[2] !== a || r[3] !== o
    ? ((l =
        o == null
          ? null
          : (0, d.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              loading: a,
              onClick: o,
              children: (0, d.jsx)(n, {
                id: `workspaceAgents.detail.retry`,
                defaultMessage: `Try again`,
                description: `Button that retries loading a Workspace Agent detail section or memory file after a read fails`,
              }),
            })),
      (r[2] = a),
      (r[3] = o),
      (r[4] = l))
    : (l = r[4]);
  let f;
  return (
    r[5] !== s || r[6] !== l
      ? ((f = (0, d.jsxs)(c, { role: `alert`, children: [s, l] })), (r[5] = s), (r[6] = l), (r[7] = f))
      : (f = r[7]),
    f
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), r(), i(), s(), (d = o()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=read-error-29adc71a8032.js.map
