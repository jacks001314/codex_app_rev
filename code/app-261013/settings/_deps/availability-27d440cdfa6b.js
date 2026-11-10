import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, aot as r, oSt as i, oot as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { Ggr as s, Vgr as c, aMr as l, fMr as u } from "./app-initial-5851df3f6cb1.js";
var d;
function f() {
  return (f = e(() => {
    (n(),
      u(),
      s(),
      o(),
      a(),
      (d = i(t, ({ get: e }) => {
        let { authLoading: t, authMethod: n } = e(l);
        if (t) return !1;
        let { data: i, isError: a } = e(c, { authMethod: n, hostId: r });
        return !a && i != null && i.requirements?.inAppBrowser?.allowExternalBrowserSettingsImport !== !1;
      })));
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=availability-27d440cdfa6b.js.map
