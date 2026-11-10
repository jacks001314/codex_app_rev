import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Zxt as a,
  hrt as o,
  vrt as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as l, Ymr as u, ehr as d, tNr as f } from "./app-initial-5851df3f6cb1.js";
var p;
function m() {
  return (m = e(() => {
    (i(),
      f(),
      c(),
      n(),
      s(),
      d(),
      (p = a(t, (e, { get: t }) => {
        let n = t(l);
        return {
          queryKey: [`automation-plan-file`, n, e],
          enabled: n != null && e !== ``,
          staleTime: r.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            try {
              return await u.safeGet(`/files/library/files/{library_file_id}/node`, {
                parameters: { path: { library_file_id: e } },
                additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
                expectedErrorStatuses: [403, 404],
                signal: t,
              });
            } catch (e) {
              if (e instanceof o && (e.status === 403 || e.status === 404)) return null;
              throw e;
            }
          },
        };
      })));
  }))();
}
export { m as n, p as t };
//# sourceMappingURL=plan-file-96ce4584d7d0.js.map
