import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Hbt as n, Pxt as r, nSt as i, rst as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  $8n as s,
  B_n as c,
  D_r as l,
  LEr as u,
  M_r as d,
  P_r as f,
  R_n as p,
  V_n as m,
  b_r as h,
  h_r as g,
  m_r as _,
  v8n as v,
  z_n as y,
} from "./app-initial-5851df3f6cb1.js";
var b;
function x() {
  return (x = e(() => {
    (r(),
      a(),
      v(),
      m(),
      y(),
      f(),
      o(),
      _(),
      (b = i(t, (e, { get: t }) => {
        if (e == null) return null;
        if (t(d, e.type === `local` ? n.LOCAL_PROJECTS : n.REMOTE_PROJECTS).isPending) return;
        let r = t(h, e.type === `remote` ? e.projectId : null);
        if (e.type === `remote` && (r == null || t(u, r.hostId).id !== r.hostId)) return null;
        let i = r == null ? t(l, e) : [r.remotePath];
        if (i.length === 0) return null;
        let a = r?.hostId ?? t(s, null),
          { data: o, isPending: f } = t(c, {
            params: { dirs: i, hostId: a },
            source: `workspace_repo_owner_names`,
          });
        return o == null
          ? f
            ? void 0
            : null
          : {
              name: r?.label ?? t(g)[e.projectId]?.name,
              repositories: p({ origins: o.origins, workspaceRoots: i }),
            };
      })));
  }))();
}
export { b as n, x as t };
//# sourceMappingURL=project-repositories-6041e9c027e6.js.map
