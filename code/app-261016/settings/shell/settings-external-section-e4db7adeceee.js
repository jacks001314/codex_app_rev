import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, tkt as i } from "./app-shared-2feb3d4c6fcc.js";
import { LF as a, QF as o, RF as s, eI as c } from "./app-initial-ad16eaadf81f.js";
function l() {
  let e = (0, u.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, d.jsx)(o, {
          title: (0, d.jsx)(a, { slug: `environments` }),
          subtitle: (0, d.jsx)(i, {
            id: `settings.section.external`,
            defaultMessage: `Opens in your browser during Alpha`,
            description: `Subtitle for settings sections that open in a browser during the Alpha build`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), c(), s(), (d = t()));
  }))();
}
f();
export { l as SettingsExternalSection };
//# sourceMappingURL=settings-external-section-e4db7adeceee.js.map
