import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { Amn as n, hmn as r, kmn as i } from "./app-initial-f094ef01c64d.js";
import { n as a, t as o } from "./thumbnail-bbff7dbb28d2.js";
function s(e) {
  let t = (0, c.c)(5),
    { title: n, readState: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = () => r()?.readOutput?.() ?? null), (t[0] = r), (t[1] = i));
  let [a] = (0, l.useState)(i),
    s;
  return (
    t[2] !== a || t[3] !== n
      ? ((s = (0, u.jsx)(o, { title: n, outputTail: a })), (t[2] = a), (t[3] = n), (t[4] = s))
      : (s = t[4]),
    s
  );
}
var c, l, u;
e(() => {
  ((c = i()), (l = t(n(), 1)), a(), (u = r()));
})();
export { s as BackgroundTerminalThumbnail };
//# sourceMappingURL=background-terminal-6775c46c6478.js.map
