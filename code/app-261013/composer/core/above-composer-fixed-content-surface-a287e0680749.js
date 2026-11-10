import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _wt as t, gwt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
function a(e) {
  let n = (0, o.c)(6),
    { children: r, animateSize: i, transition: a } = e,
    c = i === void 0 || i ? `size` : !1,
    l;
  n[0] === r
    ? (l = n[1])
    : ((l = (0, s.jsx)(`div`, {
        className: `flex w-max max-w-full min-w-0 items-center gap-2 rounded-3xl border border-border/80 bg-surface-elevated-secondary px-3 py-1.5 text-default`,
        children: r,
      })),
      (n[0] = r),
      (n[1] = l));
  let u;
  return (
    n[2] !== c || n[3] !== l || n[4] !== a
      ? ((u = (0, s.jsx)(`div`, {
          className: `flex w-full max-w-(--thread-content-max-width) min-w-0 justify-center`,
          children: (0, s.jsx)(t.div, {
            layout: c,
            transition: a,
            className: `relative z-10 w-fit max-w-full min-w-0 overflow-hidden rounded-3xl`,
            children: l,
          }),
        })),
        (n[2] = c),
        (n[3] = l),
        (n[4] = a),
        (n[5] = u))
      : (u = n[5]),
    u
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = r()), n(), (s = i()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=above-composer-fixed-content-surface-a287e0680749.js.map
