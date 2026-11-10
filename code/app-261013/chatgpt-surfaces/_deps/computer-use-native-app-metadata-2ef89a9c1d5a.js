import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  art as a,
  srt as o,
  wot as s,
  zxt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  let { data: t } = c(u, e?.kind === `appId` ? e.appId : null),
    { data: n } = c(d, e?.kind === `displayName` ? e.displayName : null);
  return t?.app ?? n ?? null;
}
var u, d;
function f() {
  return (f = e(() => {
    (i(),
      s(),
      n(),
      o(),
      (u = a(t, `native-desktop-app-by-bundle-id`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { bundleId: e },
        refetchOnWindowFocus: !1,
        staleTime: r.FIVE_MINUTES,
      }))),
      (d = a(t, `native-desktop-apps`, (e) => ({
        cacheKey: [`computer-use-tool-row-display-name`, e],
        enabled: e != null,
        params: { order: `usage` },
        refetchOnWindowFocus: !1,
        select: (t) => t.apps.find((t) => t.displayName.toLowerCase() === e?.toLowerCase()) ?? null,
        staleTime: r.FIVE_MINUTES,
      }))));
  }))();
}
export { u as n, l as r, f as t };
//# sourceMappingURL=computer-use-native-app-metadata-2ef89a9c1d5a.js.map
