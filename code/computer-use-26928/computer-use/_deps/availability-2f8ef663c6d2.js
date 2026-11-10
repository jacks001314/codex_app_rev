import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Gwt as t,
  JEt as n,
  JKt as r,
  O5t as i,
  Rwt as a,
  YKt as o,
  dJt as s,
  e7t as c,
  fJt as l,
  nDt as u,
} from "./app-shared-7552fc8d5d82.js";
var d;
function f() {
  return (f = e(() => {
    (i(),
      u(),
      t(),
      l(),
      o(),
      (d = c(s, ({ get: e }) => {
        let { authLoading: t, authMethod: i } = e(n);
        if (t) return !1;
        let { data: o, isError: s } = e(a, { authMethod: i, hostId: r });
        return (
          !s && o != null && o.requirements?.inAppBrowser?.allowExternalBrowserSettingsImport !== !1
        );
      })));
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=availability-2f8ef663c6d2.js.map
