import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  N5t as t,
  O5t as n,
  QDt as r,
  XDt as i,
  _jt as a,
  dJt as o,
  fJt as s,
  gjt as c,
} from "./app-shared-7552fc8d5d82.js";
function l(e) {
  let { data: n } = t(u, e?.kind === `appId` ? e.appId : null),
    { data: r } = t(d, e?.kind === `displayName` ? e.displayName : null);
  return n ?? r ?? null;
}
var u, d;
function f() {
  return (f = e(() => {
    (n(),
      s(),
      a(),
      r(),
      (u = i(o, `native-desktop-app-by-bundle-id`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { bundleId: e },
        refetchOnWindowFocus: !1,
        select: (e) => e.app,
        staleTime: c.FIVE_MINUTES,
      }))),
      (d = i(o, `native-desktop-apps`, (e) => ({
        cacheKey: [`computer-use-tool-row-display-name`, e],
        enabled: e != null,
        params: { order: `usage` },
        refetchOnWindowFocus: !1,
        select: (t) => t.apps.find((t) => t.displayName.toLowerCase() === e?.toLowerCase()) ?? null,
        staleTime: c.FIVE_MINUTES,
      }))));
  }))();
}
export { l as n, f as t };
//# sourceMappingURL=computer-use-native-app-metadata-2d418f74cb16.js.map
