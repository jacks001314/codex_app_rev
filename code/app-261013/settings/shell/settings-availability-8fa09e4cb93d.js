import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  B9 as a,
  JEn as o,
  LEn as s,
  Ret as c,
  V9 as l,
  oFr as u,
  zet as d,
} from "./app-initial-5851df3f6cb1.js";
var f, p;
function m() {
  return (m = e(() => {
    (l(),
      n(),
      s(),
      i(),
      u(),
      d(),
      (f = r(t, (e, { get: t }) => {
        if (e !== `local`) return null;
        let n = [a],
          r = !1;
        for (let i of n) {
          let n = t(c, { pluginId: i, hostId: e });
          if (n) return i;
          r ||= n == null;
        }
        return r ? void 0 : null;
      })),
      (p = r(t, (e, { get: t }) => {
        let n = t(f, e);
        return n == null ? void 0 : t(o, e).find((e) => e.pluginId === n);
      })));
  }))();
}
export { f as n, p as r, m as t };
//# sourceMappingURL=settings-availability-8fa09e4cb93d.js.map
