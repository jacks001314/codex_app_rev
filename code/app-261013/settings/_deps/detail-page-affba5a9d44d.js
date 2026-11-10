import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, gMt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
function a(e) {
  let t = (0, o.c)(3),
    { children: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = n(
        c,
        `@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]`,
      )),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] === r
      ? (a = t[2])
      : ((a = (0, s.jsx)(`div`, { className: i, children: r })), (t[1] = r), (t[2] = a)),
    a
  );
}
var o, s, c;
function l() {
  return (l = e(() => {
    ((o = r()), t(), (s = i()), (c = `flex flex-col gap-[var(--detail-page-section-gap)]`));
  }))();
}
export { a as n, l as r, c as t };
//# sourceMappingURL=detail-page-affba5a9d44d.js.map
