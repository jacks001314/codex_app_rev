import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { F3t as t, O3t as n, hmn as r, kmn as i } from "./app-initial-f094ef01c64d.js";
import { n as a, t as o } from "./right-panel-composer-overlay-7bbacd6f9f94.js";
import { n as s, t as c } from "./content-quick-chat-overlay-4f38c1f284d2.js";
import { n as l, t as u } from "./unified-floating-composer.electron-d188e27a467a.js";
function d(e) {
  let n = (0, f.c)(4),
    { children: r, expandComposerContentImmediately: i } = e,
    a = t(l),
    s;
  return (
    n[0] !== r || n[1] !== i || n[2] !== a
      ? ((s = a
          ? (0, p.jsx)(c, { children: r })
          : (0, p.jsx)(o, { expandComposerContentImmediately: i, children: r() })),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a),
        (n[3] = s))
      : (s = n[3]),
    s
  );
}
var f, p;
e(() => {
  ((f = i()), n(), s(), u(), a(), (p = r()));
})();
export { d as HomeComposerOverlay };
//# sourceMappingURL=composer-overlay-f2c80b19233e.js.map
