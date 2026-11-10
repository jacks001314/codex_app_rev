import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { hmn as t } from "./app-initial-f094ef01c64d.js";
import { G as n, W as r, lt as i } from "./artifact-source-bootstrap-b7ba40702025.js";
function a({
  currentIndex: e,
  totalCount: t,
  itemLabel: i,
  onChangeIndex: a,
  disabled: l = !1,
  testId: u = `popcorn-page-number-navigation`,
}) {
  if (t <= 1) return null;
  let d = t > 0 ? e + 1 : 0,
    f = !l && t > 0 && e > 0,
    p = !l && t > 0 && e < t - 1;
  return (0, o.jsxs)(`div`, {
    className: `flex items-center gap-0.5 text-base leading-5 tabular-nums`,
    "data-testid": u,
    children: [
      (0, o.jsx)(`button`, {
        type: `button`,
        "aria-label": `Go to previous ${i}`,
        "data-testid": `${u}-previous`,
        className: c,
        disabled: !f,
        onClick: () => a(e - 1),
        children: (0, o.jsx)(r, { style: s }),
      }),
      (0, o.jsxs)(`span`, {
        className: `min-w-12 px-1 text-center text-token-text-primary`,
        "data-testid": `${u}-indicator`,
        children: [d, `/`, Math.max(0, t)],
      }),
      (0, o.jsx)(`button`, {
        type: `button`,
        "aria-label": `Go to next ${i}`,
        "data-testid": `${u}-next`,
        className: c,
        disabled: !p,
        onClick: () => a(e + 1),
        children: (0, o.jsx)(n, { style: s }),
      }),
    ],
  });
}
var o,
  s,
  c,
  l = e(() => {
    (i(),
      (o = t()),
      (s = { height: `18px`, width: `18px` }),
      (c = `text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40`));
  });
export { l as n, a as t };
//# sourceMappingURL=PopcornPageNumberNavigation-a4529764704f.js.map
