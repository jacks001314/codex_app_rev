import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HDt as t, VDt as n, jDt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
var o, s, c, l, u, d;
function f() {
  return (f = e(() => {
    ((o = a()),
      r(),
      (s = i()),
      (c = `__learningBlockCurrencyLocale`),
      (l = (e) => {
        let t = e?.trim().replaceAll(`_`, `-`);
        if (t)
          try {
            return Intl.getCanonicalLocales(t)[0];
          } catch {
            return;
          }
      }),
      (u = (e) => e[c] ?? e.locale),
      (d = ({ children: e, locale: r }) => {
        "use forget";
        let i = n(),
          a = l(r),
          u = (0, o.useMemo)(() => (a == null ? i : Object.assign(Object.create(i), { [c]: a })), [a, i]);
        return (0, s.jsx)(t, { value: u, children: e });
      }));
  }))();
}
export { u as n, f as r, d as t };
//# sourceMappingURL=learning-block-currency-locale-provider-5f54dd90501d.js.map
