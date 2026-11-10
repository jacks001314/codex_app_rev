import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  BRt as t,
  H4t as n,
  O3t as r,
  Ten as i,
  kRt as a,
  s6t as o,
} from "./app-initial-f094ef01c64d.js";
function s({ binding: e, currentTarget: t, currentWorkspaceRoots: n, dismissedTarget: r }) {
  return (
    e != null &&
    !c(e, t) &&
    !n.some((n) => c(e, { hostId: t.hostId, workspaceRoot: n })) &&
    !c(r, t)
  );
}
function c(e, t) {
  return e == null || (e.hostId != null && t.hostId != null && e.hostId !== t.hostId)
    ? !1
    : e.workspaceRoot == null || t.workspaceRoot == null
      ? e.workspaceRoot === t.workspaceRoot
      : i(e.workspaceRoot, t.workspaceRoot);
}
var l,
  u = e(() => {
    (r(), t(), n(), (l = o(a, (e) => null)));
  });
export { s as n, l as r, u as t };
//# sourceMappingURL=terminal-workspace-warning-state-9c3cd18f8e4e.js.map
