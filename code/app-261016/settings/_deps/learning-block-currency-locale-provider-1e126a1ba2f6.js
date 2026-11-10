import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n, XOt as r, okt as i, skt as a } from "./app-shared-2feb3d4c6fcc.js";
var o, s, c, l, u, d;
function f() {
  return (f = e(() => {
    ((o = t()),
      r(),
      (s = n()),
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
      (d = ({ children: e, locale: t }) => {
        "use forget";
        let n = i(),
          r = l(t),
          u = (0, o.useMemo)(() => (r == null ? n : Object.assign(Object.create(n), { [c]: r })), [r, n]);
        return (0, s.jsx)(a, { value: u, children: e });
      }));
  }))();
}
export { u as n, f as r, d as t };
//# sourceMappingURL=learning-block-currency-locale-provider-1e126a1ba2f6.js.map
