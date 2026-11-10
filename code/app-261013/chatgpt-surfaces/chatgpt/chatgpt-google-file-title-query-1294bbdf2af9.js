import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  PI as r,
  Pat as i,
  Pxt as a,
  Zxt as o,
  jI as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import { Ymr as l, ehr as u } from "./app-initial-5851df3f6cb1.js";
var d;
function f() {
  return (f = e(() => {
    (r(),
      a(),
      c(),
      n(),
      u(),
      (d = o(t, ({ accountId: e, userId: t, url: n }) => {
        let r = n == null ? null : s(n),
          a = r?.workspaceDocument == null ? null : `external-gdrive:file:${r.nativeFileId}`;
        return {
          enabled: e != null && t != null && a != null,
          queryKey: [`google-file-title`, e, t, a],
          staleTime: i.FIVE_MINUTES,
          retry: !1,
          queryFn: async ({ signal: n }) => {
            if (e == null || t == null || a == null) return null;
            try {
              let r = await l.safePost(`/files/library/mounted/{provider_key}/file_metadata`, {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                expectedIdentity: { accountId: e, userId: t },
                expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
                parameters: { path: { provider_key: `google_drive` } },
                requestBody: { file_id: a },
                retry: !1,
                signal: n,
              });
              return (n.throwIfAborted(), (r.file_id === a && r.name.trim()) || null);
            } catch {
              return (n.throwIfAborted(), null);
            }
          },
        };
      })));
  }))();
}
export { f as n, d as t };
//# sourceMappingURL=chatgpt-google-file-title-query-1294bbdf2af9.js.map
