import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Edt as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  Zxt as o,
  rst as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  B_n as l,
  Bir as u,
  Ggr as d,
  HJ as f,
  Jgr as p,
  LEr as m,
  RJ as h,
  UJ as g,
  VJ as _,
  V_n as v,
  l3n as y,
  m_r as b,
  u3n as x,
  zJ as S,
  zir as C,
} from "./app-initial-5851df3f6cb1.js";
var w;
function T() {
  return (T = e(() => {
    (a(),
      s(),
      u(),
      v(),
      d(),
      c(),
      b(),
      r(),
      x(),
      f(),
      h(),
      (w = o(t, (e, { get: t, scope: r }) => {
        let a = t(y),
          o = t(C, {
            enabled: a,
            key: `remote.upstream.url`,
            lookup: { cwd: e.cwd, hostConfig: t(m, e.hostId) },
            operationSource: `local_conversation_git_actions`,
            retainRepoWatch: !1,
            scope: `local`,
            staleTime: i.ONE_MINUTE,
          }),
          s = t(l, { params: { dirs: [e.cwd], hostId: e.hostId }, source: `local_conversation_git_actions` }),
          c = s.isSuccess && !s.isPlaceholderData ? n(s.data.origins[0]?.originUrl ?? ``) : null,
          u = null;
        o.isSuccess && !o.isPlaceholderData && (u = o.data?.trim() ? n(o.data) : c);
        let d = a && u?.host.toLowerCase() === `gitlab.com` ? t(p, e.hostId) : null,
          f = d?.data == null ? null : _(d.data.data, `create`);
        return {
          enabled:
            a &&
            c?.host.toLowerCase() === `gitlab.com` &&
            u?.host.toLowerCase() === `gitlab.com` &&
            f != null,
          queryKey: [`gitlab-creation-target-project`, e.hostId, e.cwd, c, u, f?.accountLinkId],
          queryFn: async ({ signal: t }) => {
            if (u == null || f == null) return null;
            (await g(r, f), t.throwIfAborted());
            let n = `${u.owner}/${u.repo}`,
              { id: i, path_with_namespace: a, default_branch: o } = await S(r, e.hostId, f, n);
            if ((t.throwIfAborted(), a.toLowerCase() !== n.toLowerCase()))
              throw Error(`The selected GitLab project does not match the task`);
            return { id: i, projectPath: a, defaultBranch: o ?? null };
          },
          staleTime: i.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
export { T as n, w as t };
//# sourceMappingURL=creation-target-query-33f9cd60ceb5.js.map
