import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { Amn as n, kmn as r } from "./app-initial-f094ef01c64d.js";
import { n as i, t as a } from "./use-element-in-view-a1799199db67.js";
function o() {
  let e = (0, s.c)(5),
    [t, n] = (0, c.useState)(null),
    [r, a] = (0, c.useState)(null),
    o;
  e[0] !== t || e[1] !== r
    ? ((o = { container: t, target: r }), (e[0] = t), (e[1] = r), (e[2] = o))
    : (o = e[2]);
  let l = !i(o),
    u;
  return (
    e[3] === l
      ? (u = e[4])
      : ((u = { scrollContainerRef: n, showTitleInToolbar: l, titleRef: a }),
        (e[3] = l),
        (e[4] = u)),
    u
  );
}
var s,
  c,
  l = e(() => {
    ((s = r()), (c = t(n(), 1)), a());
  });
export { o as n, l as t };
//# sourceMappingURL=use-searchable-page-title-visibility-337a615c9e59.js.map
