import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, lgt as r, nSt as i, rst as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import { Icr as s, Lcr as c, hOr as l, pOr as u } from "./app-initial-5851df3f6cb1.js";
var d;
function f() {
  return (f = e(() => {
    (n(),
      a(),
      l(),
      s(),
      o(),
      (d = i(t, (e, { get: t }) => {
        let n = t(u);
        if (n == null) return !1;
        let i = t(c, { accountId: n, hostId: r, roots: void 0, productContext: `chatgpt` });
        return (
          !i.isPending &&
          !i.isError &&
          i.data?.some(
            ({ appIds: t, plugin: n }) =>
              t?.includes(e) &&
              n.installed &&
              n.enabled &&
              n.availability === `AVAILABLE` &&
              n.disabledReason == null,
          ) === !0
        );
      })));
  }))();
}
export { d as n, f as t };
//# sourceMappingURL=source-app-availability-7cce636e07b6.js.map
