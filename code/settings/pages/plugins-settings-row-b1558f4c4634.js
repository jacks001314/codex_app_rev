import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  Amn as r,
  Cpn as i,
  GKt as a,
  N3t as o,
  O3t as s,
  Opn as c,
  QG as l,
  Spn as u,
  WKt as d,
  Xu as f,
  cz as p,
  hmn as m,
  kmn as h,
  lz as g,
  qu as _,
  sz as v,
} from "./app-initial-f094ef01c64d.js";
function y(e) {
  let t = (0, S.c)(19),
    { hostId: n } = e,
    r = c(),
    { data: a } = o(v, n),
    s;
  t[0] === n ? (s = t[1]) : ((s = { hostId: n }), (t[0] = n), (t[1] = s));
  let u = g(s),
    [f, p] = (0, C.useState)(!1);
  if (!a?.some(x)) return null;
  let m;
  t[2] === a ? (m = t[3]) : ((m = a.find(b)), (t[2] = a), (t[3] = m));
  let h = m,
    y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, w.jsx)(i, {
        id: `settings.general.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the plugins setting`,
      })),
      (t[4] = y))
    : (y = t[4]);
  let T;
  t[5] === f
    ? (T = t[6])
    : ((T = f
        ? (0, w.jsx)(i, {
            id: `settings.general.plugins.restartNotice`,
            defaultMessage: `Restart {appName} to apply this change`,
            description: `Notice shown after changing the plugins setting`,
            values: { appName: d },
          })
        : (0, w.jsx)(i, {
            id: `settings.general.plugins.description`,
            defaultMessage: `Allow ChatGPT to use installed plugins`,
            description: `Description for the plugins setting`,
          })),
      (t[5] = f),
      (t[6] = T));
  let E = h?.enabled ?? !0,
    D = u.isPending,
    O;
  t[7] === u
    ? (O = t[8])
    : ((O = (e) => {
        u.mutate(
          { featureName: `plugins`, enabled: e },
          {
            onSuccess: () => {
              p(!0);
            },
          },
        );
      }),
      (t[7] = u),
      (t[8] = O));
  let k;
  t[9] === r
    ? (k = t[10])
    : ((k = r.formatMessage({
        id: `settings.general.plugins.toggle`,
        defaultMessage: `Toggle plugins`,
        description: `Aria label for the plugins setting toggle`,
      })),
      (t[9] = r),
      (t[10] = k));
  let A;
  t[11] !== u.isPending || t[12] !== E || t[13] !== O || t[14] !== k
    ? ((A = (0, w.jsx)(l, { checked: E, disabled: D, onChange: O, ariaLabel: k })),
      (t[11] = u.isPending),
      (t[12] = E),
      (t[13] = O),
      (t[14] = k),
      (t[15] = A))
    : (A = t[15]);
  let j;
  return (
    t[16] !== T || t[17] !== A
      ? ((j = (0, w.jsx)(_, { label: y, description: T, control: A })),
        (t[16] = T),
        (t[17] = A),
        (t[18] = j))
      : (j = t[18]),
    j
  );
}
function b(e) {
  return e.name === `plugins`;
}
function x(e) {
  return e.name === `apps` && e.enabled;
}
var S,
  C,
  w,
  T = e(() => {
    ((S = h()), s(), (C = t(r(), 1)), u(), a(), n(), p(), f(), (w = m()));
  });
export { T as n, y as t };
//# sourceMappingURL=plugins-settings-row-b1558f4c4634.js.map
