import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, oSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { bbt as a, gbt as o } from "./app-initial-5851df3f6cb1.js";
import { r as s } from "./outcomes-8fd78f835d82.js";
import { s as c, t as l } from "./signals-e015cce15312.js";
var u, d;
function f() {
  return (f = e(() => {
    (n(),
      i(),
      o(),
      l(),
      (u = r(t, ({ get: e }) => {
        let t = e(a),
          n = e(c);
        return t == null || n == null
          ? null
          : { owner: t, completions: s(n.records, t, n.debugSettings.alwaysShowResultBanner) };
      })),
      (d = r(t, ({ get: e }) => e(u)?.completions[0] != null)));
  }))();
}
export { d as n, u as r, f as t };
//# sourceMappingURL=replay-completions-8e31241101a8.js.map
