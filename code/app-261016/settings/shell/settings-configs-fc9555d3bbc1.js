import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Qst as n,
  ZSt as r,
  ast as i,
  gCt as a,
  ist as o,
  qst as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as c, VRr as l, wLr as u, zRr as d } from "./app-initial-ad16eaadf81f.js";
var f;
function p() {
  return (p = e(() => {
    (r(),
      u(),
      i(),
      t(),
      (f = a(n, ({ get: e }) => {
        let t = e(l).authLoading ? null : e(d),
          n = e(c);
        return {
          queryKey: [`cloud-v2-settings-configs`, t, n],
          enabled: t != null && n != null,
          staleTime: 0,
          gcTime: 0,
          refetchOnMount: `always`,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            let r = o?.environmentConfigs;
            if (r == null || t == null || n == null)
              throw Error(`Environment configuration service is unavailable`);
            let i = new Map(),
              a;
            do
              try {
                var c = s();
                e.throwIfAborted();
                let o = c.u(await r.list({ accountId: t, userId: n, cursor: a }));
                if (!o.ok) throw Error(`Environment configurations could not be loaded`);
                for (let e of o.page.data) i.set(e.id, e);
                a = o.page.nextCursor ?? void 0;
              } catch (e) {
                c.e = e;
              } finally {
                c.d();
              }
            while (a != null);
            return [...i.values()];
          },
        };
      })));
  }))();
}
export { f as n, p as t };
//# sourceMappingURL=settings-configs-fc9555d3bbc1.js.map
