import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, iSt as i, sct as a, yCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  Fer as s,
  Ixr as c,
  Pxr as l,
  Txr as u,
  dbn as d,
  eer as f,
  fbn as p,
  fxr as m,
  ijr as h,
  lbn as g,
  pxr as _,
  ubn as v,
  vxr as y,
} from "./app-initial-ad16eaadf81f.js";
var b;
function x() {
  return (x = e(() => {
    (r(),
      a(),
      f(),
      p(),
      v(),
      c(),
      t(),
      m(),
      (b = o(n, (e, { get: t }) => {
        if (e == null) return null;
        if (t(l, e.type === `local` ? i.LOCAL_PROJECTS : i.REMOTE_PROJECTS).isPending) return;
        let n = t(y, e.type === `remote` ? e.projectId : null);
        if (e.type === `remote` && (n == null || t(h, n.hostId).id !== n.hostId)) return null;
        let r = n == null ? t(u, e) : [n.remotePath];
        if (r.length === 0) return null;
        let a = n?.hostId ?? t(s, null),
          { data: o, isPending: c } = t(d, {
            params: { dirs: r, hostId: a },
            source: `workspace_repo_owner_names`,
          });
        return o == null
          ? c
            ? void 0
            : null
          : {
              name: n?.label ?? t(_)[e.projectId]?.name,
              repositories: g({ origins: o.origins, workspaceRoots: r }),
            };
      })));
  }))();
}
export { b as n, x as t };
//# sourceMappingURL=project-repositories-229aa735770e.js.map
