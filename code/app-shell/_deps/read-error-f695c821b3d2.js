import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Spn as r,
  hmn as i,
  kMt as a,
  kmn as o,
} from "./app-initial-f094ef01c64d.js";
import { n as s, t as c } from "./detail-section-state-48ff67356906.js";
function l(e) {
  let t = (0, u.c)(7),
    { children: r, onRetry: i } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o =
        r ??
        (0, d.jsx)(n, {
          id: `workspaceAgents.detail.readError`,
          defaultMessage: `Unable to load this section`,
          description: `Error shown when a Workspace Agent detail tab cannot load`,
        })),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s =
        i == null
          ? null
          : (0, d.jsx)(a, {
              color: `secondary`,
              size: `toolbar`,
              onClick: i,
              children: (0, d.jsx)(n, {
                id: `workspaceAgents.detail.retry`,
                defaultMessage: `Try again`,
                description: `Button that retries loading a Workspace Agent detail section or memory file after a read fails`,
              }),
            })),
      (t[2] = i),
      (t[3] = s));
  let l;
  return (
    t[4] !== o || t[5] !== s
      ? ((l = (0, d.jsxs)(c, { role: `alert`, children: [o, s] })),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
var u,
  d,
  f = e(() => {
    ((u = o()), r(), t(), s(), (d = i()));
  });
export { f as n, l as t };
//# sourceMappingURL=read-error-f695c821b3d2.js.map
