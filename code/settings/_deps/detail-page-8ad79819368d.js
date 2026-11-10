import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { Rpn as t, hmn as n, kmn as r, zpn as i } from "./app-initial-f094ef01c64d.js";
function a(e) {
  let n = (0, o.c)(3),
    { children: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = t(
        c,
        `@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]`,
      )),
      (n[0] = i))
    : (i = n[0]);
  let a;
  return (
    n[1] === r
      ? (a = n[2])
      : ((a = (0, s.jsx)(`div`, { className: i, children: r })), (n[1] = r), (n[2] = a)),
    a
  );
}
var o,
  s,
  c,
  l = e(() => {
    ((o = r()), i(), (s = n()), (c = `flex flex-col gap-[var(--detail-page-section-gap)]`));
  });
export { a as n, l as r, c as t };
//# sourceMappingURL=detail-page-8ad79819368d.js.map
