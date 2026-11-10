import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Zxt as a,
  aSt as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as c, Ymr as l, _In as u, ehr as d, tNr as f, vIn as p } from "./app-initial-5851df3f6cb1.js";
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
    (i(),
      f(),
      s(),
      n(),
      p(),
      d(),
      (h = o(t, (e) => new Map(), void 0, { autoDispose: 6e4 })),
      (g = a(t, (e, { get: t, scope: n }) => {
        let i = t(c),
          a = t(u, e).data,
          o = t(h, { accountId: i, projectId: e }),
          s = null,
          d = 5e3,
          f = 3e4;
        return {
          queryKey: [`chatgpt-project-connector-scopes`, e, `all`, i],
          enabled: i != null && a != null && a.gizmo.gizmo_snorlax_type == null,
          staleTime: r.ONE_MINUTE,
          refetchOnWindowFocus: !0,
          refetchInterval: ({ state: e }) => {
            if (o.size === 0 && !e.data?.some((e) => e.last_sync_status === `running`))
              return ((s = null), (d = 5e3), (f = 3e4), !1);
            s ??= Date.now();
            let t = Date.now() - s;
            if (t >= 6e5) return !1;
            for (; t >= f;) ((d = Math.min(3e4, d * 1.5)), (f += d));
            return d;
          },
          queryFn: async ({ signal: t }) => {
            let r = await m(t, (n) =>
                l.safeGet(`/projects/{project_id}/connector_scopes`, {
                  additionalHeaders: i == null ? void 0 : { "ChatGPT-Account-ID": i },
                  parameters: { path: { project_id: e }, query: n },
                  signal: t,
                }),
              ),
              a = n.get(h, { accountId: i, projectId: e });
            if (r.some((e) => a.has(e.scope_id) && e.last_sync_status === `running`)) {
              let t = new Map(a);
              for (let e of r) e.last_sync_status === `running` && t.delete(e.scope_id);
              n.set(h, { accountId: i, projectId: e }, t);
            }
            return r;
          },
        };
      })));
  }))();
}
export { h as i, _ as n, g as r, m as t };
//# sourceMappingURL=source-queries-3db0a1460491.js.map
