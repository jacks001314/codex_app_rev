import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  Kat as r,
  Pxt as i,
  not as a,
  qat as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as c, QMr as l, XMr as u, tNr as d } from "./app-initial-5851df3f6cb1.js";
var f;
function p() {
  return (p = e(() => {
    (i(),
      d(),
      o(),
      s(),
      (f = t(n, ({ get: e }) => {
        let t = e(l).authLoading ? null : e(c),
          n = e(u);
        return {
          queryKey: [`cloud-v2-settings-configs`, t, n],
          enabled: t != null && n != null,
          staleTime: 0,
          gcTime: 0,
          refetchOnMount: `always`,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            let i = r?.environmentConfigs;
            if (i == null || t == null || n == null)
              throw Error(`Environment configuration service is unavailable`);
            let o = new Map(),
              s;
            do
              try {
                var c = a();
                e.throwIfAborted();
                let r = c.u(await i.list({ accountId: t, userId: n, cursor: s }));
                if (!r.ok) throw Error(`Environment configurations could not be loaded`);
                for (let e of r.page.data) o.set(e.id, e);
                s = r.page.nextCursor ?? void 0;
              } catch (e) {
                c.e = e;
              } finally {
                c.d();
              }
            while (s != null);
            return [...o.values()];
          },
        };
      })));
  }))();
}
export { f as n, p as t };
//# sourceMappingURL=settings-configs-7488cda7afdb.js.map
