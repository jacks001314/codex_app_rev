import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  $qt as i,
  C6t as a,
  O6t as o,
  Qqt as s,
  Son as c,
  _on as l,
  bW as u,
  dX as d,
  em as f,
  fX as p,
  gon as m,
  nm as h,
  vW as g,
  yW as _,
} from "./app-initial-bcc2ff475eb6.js";
import { t as v } from "./jsx-runtime-a96621a2647a.js";
function y(e) {
  let t = (0, S.c)(19),
    { hostId: n } = e,
    r = c(),
    { data: i } = o(g, n),
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let p = u(a),
    [m, h] = (0, C.useState)(!1);
  if (!i?.some(x)) return null;
  let _;
  t[2] === i ? (_ = t[3]) : ((_ = i.find(b)), (t[2] = i), (t[3] = _));
  let v = _,
    y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, w.jsx)(l, {
        id: `settings.general.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the plugins setting`,
      })),
      (t[4] = y))
    : (y = t[4]);
  let T;
  t[5] === m
    ? (T = t[6])
    : ((T = m
        ? (0, w.jsx)(l, {
            id: `settings.general.plugins.restartNotice`,
            defaultMessage: `Restart {appName} to apply this change`,
            description: `Notice shown after changing the plugins setting`,
            values: { appName: s },
          })
        : (0, w.jsx)(l, {
            id: `settings.general.plugins.description`,
            defaultMessage: `Allow ChatGPT to use installed plugins`,
            description: `Description for the plugins setting`,
          })),
      (t[5] = m),
      (t[6] = T));
  let E = v?.enabled ?? !0,
    D = p.isPending,
    O;
  t[7] === p
    ? (O = t[8])
    : ((O = (e) => {
        p.mutate(
          { featureName: `plugins`, enabled: e },
          {
            onSuccess: () => {
              h(!0);
            },
          },
        );
      }),
      (t[7] = p),
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
  t[11] !== p.isPending || t[12] !== E || t[13] !== O || t[14] !== k
    ? ((A = (0, w.jsx)(d, { checked: E, disabled: D, onChange: O, ariaLabel: k })),
      (t[11] = p.isPending),
      (t[12] = E),
      (t[13] = O),
      (t[14] = k),
      (t[15] = A))
    : (A = t[15]);
  let j;
  return (
    t[16] !== T || t[17] !== A
      ? ((j = (0, w.jsx)(f, { label: y, description: T, control: A })),
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
    ((S = r()), a(), (C = t(n(), 1)), m(), i(), p(), _(), h(), (w = v()));
  });
export { T as n, y as t };
//# sourceMappingURL=plugins-settings-row-87288c1b8f45.js.map
