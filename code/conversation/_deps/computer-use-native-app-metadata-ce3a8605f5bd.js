import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  N3t as t,
  O3t as n,
  TJt as r,
  _Jt as i,
  a3t as a,
  hJt as o,
  o3t as s,
  wJt as c,
} from "./app-initial-f094ef01c64d.js";
function l(e) {
  let { data: n } = t(u, e?.kind === `appId` ? e.appId : null),
    { data: r } = t(d, e?.kind === `displayName` ? e.displayName : null);
  return n ?? r ?? null;
}
var u,
  d,
  f = e(() => {
    (n(),
      s(),
      r(),
      i(),
      (u = o(a, `native-desktop-app-by-bundle-id`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { bundleId: e },
        refetchOnWindowFocus: !1,
        select: (e) => e.app,
        staleTime: c.FIVE_MINUTES,
      }))),
      (d = o(a, `native-desktop-apps`, (e) => ({
        cacheKey: [`computer-use-tool-row-display-name`, e],
        enabled: e != null,
        params: { order: `usage` },
        refetchOnWindowFocus: !1,
        select: (t) => t.apps.find((t) => t.displayName.toLowerCase() === e?.toLowerCase()) ?? null,
        staleTime: c.FIVE_MINUTES,
      }))));
  });
export { l as n, f as t };
//# sourceMappingURL=computer-use-native-app-metadata-ce3a8605f5bd.js.map
