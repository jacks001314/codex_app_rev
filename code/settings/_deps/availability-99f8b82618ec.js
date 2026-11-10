import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Dqt as t,
  O3t as n,
  a3t as r,
  aKt as i,
  c6t as a,
  fKt as o,
  n4t as s,
  o3t as c,
  t4t as l,
  xqt as u,
} from "./app-initial-f094ef01c64d.js";
var d,
  f = e(() => {
    (n(),
      o(),
      t(),
      c(),
      s(),
      (d = a(r, ({ get: e }) => {
        let { authLoading: t, authMethod: n } = e(i);
        if (t) return !1;
        let { data: r, isError: a } = e(u, { authMethod: n, hostId: l });
        return (
          !a && r != null && r.requirements?.inAppBrowser?.allowExternalBrowserSettingsImport !== !1
        );
      })));
  });
export { d as n, f as t };
//# sourceMappingURL=availability-99f8b82618ec.js.map
