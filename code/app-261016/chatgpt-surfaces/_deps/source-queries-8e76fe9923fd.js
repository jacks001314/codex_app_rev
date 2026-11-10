import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Qst as r,
  SCt as i,
  ZSt as a,
  mCt as o,
  zst as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { Gzn as c, Kzn as l, iRr as u, tyr as d, wLr as f, zRr as p } from "./app-initial-ad16eaadf81f.js";
async function m(e, t) {
  let n = [],
    r = null;
  do {
    e.throwIfAborted();
    let i = await t({ cursor: r, limit: 100 });
    (n.push(...i.items), (r = i.cursor ?? null));
  } while (r != null);
  return n;
}
var h, g;
function _() {
  return (_ = e(() => {
    (a(),
      f(),
      t(),
      n(),
      l(),
      d(),
      (h = i(r, (e) => new Map(), void 0, { autoDispose: 6e4 })),
      (g = o(r, (e, { get: t, scope: n }) => {
        let r = t(p),
          i = t(c, e).data,
          a = t(h, { accountId: r, projectId: e }),
          o = null,
          l = 5e3,
          d = 3e4;
        return {
          queryKey: [`chatgpt-project-connector-scopes`, e, `all`, r],
          enabled: r != null && i != null && i.gizmo.gizmo_snorlax_type == null,
          staleTime: s.ONE_MINUTE,
          refetchOnWindowFocus: !0,
          refetchInterval: ({ state: e }) => {
            if (a.size === 0 && !e.data?.some((e) => e.last_sync_status === `running`))
              return ((o = null), (l = 5e3), (d = 3e4), !1);
            o ??= Date.now();
            let t = Date.now() - o;
            if (t >= 6e5) return !1;
            for (; t >= d;) ((l = Math.min(3e4, l * 1.5)), (d += l));
            return l;
          },
          queryFn: async ({ signal: t }) => {
            let i = await m(t, (n) =>
                u.safeGet(`/projects/{project_id}/connector_scopes`, {
                  additionalHeaders: r == null ? void 0 : { "ChatGPT-Account-ID": r },
                  parameters: { path: { project_id: e }, query: n },
                  signal: t,
                }),
              ),
              a = n.get(h, { accountId: r, projectId: e });
            if (i.some((e) => a.has(e.scope_id) && e.last_sync_status === `running`)) {
              let t = new Map(a);
              for (let e of i) e.last_sync_status === `running` && t.delete(e.scope_id);
              n.set(h, { accountId: r, projectId: e }, t);
            }
            return i;
          },
        };
      })));
  }))();
}
export { h as i, _ as n, g as r, m as t };
//# sourceMappingURL=source-queries-8e76fe9923fd.js.map
