import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i } from "./app-shared-2feb3d4c6fcc.js";
import { Axt as a, Pxt as o } from "./app-initial-ad16eaadf81f.js";
import { r as s } from "./outcomes-8fd78f835d82.js";
import { s as c, t as l } from "./signals-75b8c8056966.js";
var u, d;
function f() {
  return (f = e(() => {
    (i(),
      t(),
      a(),
      l(),
      (u = n(r, ({ get: e }) => {
        let t = e(o),
          n = e(c);
        return t == null || n == null
          ? null
          : { owner: t, completions: s(n.records, t, n.debugSettings.alwaysShowResultBanner) };
      })),
      (d = n(r, ({ get: e }) => e(u)?.completions[0] != null)));
  }))();
}
export { d as n, u as r, f as t };
//# sourceMappingURL=replay-completions-4dff28cc3f62.js.map
