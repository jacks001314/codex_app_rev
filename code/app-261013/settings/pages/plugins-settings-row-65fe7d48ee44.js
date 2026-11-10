import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  MO as n,
  Pxt as r,
  VDt as i,
  iw as a,
  jDt as o,
  jO as s,
  tw as c,
  vzt as l,
  xMt as u,
  yzt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import { GHn as p, KHn as m, LPr as h, RPr as g, zPr as _ } from "./app-initial-5851df3f6cb1.js";
function v(e) {
  let n = (0, x.c)(19),
    { hostId: r } = e,
    a = i(),
    { data: o } = f(h, r),
    l;
  n[0] === r ? (l = n[1]) : ((l = { hostId: r }), (n[0] = r), (n[1] = l));
  let u = _(l),
    [d, m] = (0, S.useState)(!1);
  if (!o?.some(b)) return null;
  let g;
  n[2] === o ? (g = n[3]) : ((g = o.find(y)), (n[2] = o), (n[3] = g));
  let v = g,
    w;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, C.jsx)(t, {
        id: `settings.general.plugins.label`,
        defaultMessage: `Plugins`,
        description: `Label for the plugins setting`,
      })),
      (n[4] = w))
    : (w = n[4]);
  let T;
  n[5] === d
    ? (T = n[6])
    : ((T = d
        ? (0, C.jsx)(t, {
            id: `settings.general.plugins.restartNotice`,
            defaultMessage: `Restart {appName} to apply this change`,
            description: `Notice shown after changing the plugins setting`,
            values: { appName: p },
          })
        : (0, C.jsx)(t, {
            id: `settings.general.plugins.description`,
            defaultMessage: `Allow ChatGPT to use installed plugins`,
            description: `Description for the plugins setting`,
          })),
      (n[5] = d),
      (n[6] = T));
  let E = v?.enabled ?? !0,
    D = u.isPending,
    O;
  n[7] === u
    ? (O = n[8])
    : ((O = (e) => {
        u.mutate(
          { featureName: `plugins`, enabled: e },
          {
            onSuccess: () => {
              m(!0);
            },
          },
        );
      }),
      (n[7] = u),
      (n[8] = O));
  let k;
  n[9] === a
    ? (k = n[10])
    : ((k = a.formatMessage({
        id: `settings.general.plugins.toggle`,
        defaultMessage: `Toggle plugins`,
        description: `Aria label for the plugins setting toggle`,
      })),
      (n[9] = a),
      (n[10] = k));
  let A;
  n[11] !== u.isPending || n[12] !== E || n[13] !== O || n[14] !== k
    ? ((A = (0, C.jsx)(s, { checked: E, disabled: D, onChange: O, ariaLabel: k })),
      (n[11] = u.isPending),
      (n[12] = E),
      (n[13] = O),
      (n[14] = k),
      (n[15] = A))
    : (A = n[15]);
  let j;
  return (
    n[16] !== T || n[17] !== A
      ? ((j = (0, C.jsx)(c, { label: w, description: T, control: A })), (n[16] = T), (n[17] = A), (n[18] = j))
      : (j = n[18]),
    j
  );
}
function y(e) {
  return e.name === `plugins`;
}
function b(e) {
  return e.name === `apps` && e.enabled;
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = l()), r(), (S = d()), o(), m(), n(), g(), a(), (C = u()));
  }))();
}
export { w as n, v as t };
//# sourceMappingURL=plugins-settings-row-65fe7d48ee44.js.map
