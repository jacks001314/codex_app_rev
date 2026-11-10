import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { _F as a, eF as o, hF as s, tF as c } from "./app-initial-5851df3f6cb1.js";
function l() {
  let e = (0, u.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, d.jsx)(s, {
          title: (0, d.jsx)(o, { slug: `environments` }),
          subtitle: (0, d.jsx)(t, {
            id: `settings.section.external`,
            defaultMessage: `Opens in your browser during Alpha`,
            description: `Subtitle for settings sections that open in a browser during the Alpha build`,
          }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = r()), n(), a(), c(), (d = i()));
  }))();
}
f();
export { l as SettingsExternalSection };
//# sourceMappingURL=settings-external-section-6efc84dfb1f8.js.map
