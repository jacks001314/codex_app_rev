import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, Xst as i, ZSt as a, Zst as o } from "./app-shared-2feb3d4c6fcc.js";
import { AIr as s, Jbr as c, LIr as l, Wbr as u } from "./app-initial-ad16eaadf81f.js";
var d;
function f() {
  return (f = e(() => {
    (a(),
      l(),
      c(),
      t(),
      o(),
      (d = n(r, ({ get: e }) => {
        let { authLoading: t, authMethod: n } = e(s);
        if (t) return !1;
        let { data: r, isError: a } = e(u, { authMethod: n, hostId: i });
        return !a && r != null && r.requirements?.inAppBrowser?.allowExternalBrowserSettingsImport !== !1;
      })));
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=availability-2072626e30a8.js.map
