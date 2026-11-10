import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BV as t,
  QC as n,
  TJ as r,
  cK as i,
  iw as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import { hzt as c, mzt as l } from "./app-initial-5851df3f6cb1.js";
function u(e) {
  let r = (0, d.c)(22),
    a,
    o,
    s,
    c,
    u,
    p,
    m,
    h;
  r[0] === e
    ? ((a = r[1]), (o = r[2]), (s = r[3]), (c = r[4]), (u = r[5]), (p = r[6]), (m = r[7]), (h = r[8]))
    : (({
        label: p,
        description: o,
        logoUrl: h,
        logoDarkUrl: m,
        knownAppId: u,
        actions: a,
        disabled: s,
        ...c
      } = e),
      (r[0] = e),
      (r[1] = a),
      (r[2] = o),
      (r[3] = s),
      (r[4] = c),
      (r[5] = u),
      (r[6] = p),
      (r[7] = m),
      (r[8] = h));
  let g;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, f.jsx)(`span`, {
        className: `flex items-center justify-center`,
        children: (0, f.jsx)(i, {}),
      })),
      (r[9] = g))
    : (g = r[9]);
  let _;
  r[10] !== u || r[11] !== m || r[12] !== h
    ? ((_ = (0, f.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface`,
        children: (0, f.jsx)(l, {
          alt: ``,
          className: `h-full w-full object-contain`,
          logoUrl: h,
          logoDarkUrl: m,
          knownAppId: u,
          preferRemote: !0,
          fallback: g,
        }),
      })),
      (r[10] = u),
      (r[11] = m),
      (r[12] = h),
      (r[13] = _))
    : (_ = r[13]);
  let v;
  r[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, f.jsx)(t, { className: `text-tertiary` })), (r[14] = v))
    : (v = r[14]);
  let y;
  return (
    r[15] !== a || r[16] !== o || r[17] !== s || r[18] !== c || r[19] !== p || r[20] !== _
      ? ((y = (0, f.jsx)(n, {
          ...c,
          actions: a,
          actionsPlacement: `before-trailing`,
          edgeRounding: `surface`,
          disabled: s,
          icon: _,
          label: p,
          description: o,
          trailing: v,
        })),
        (r[15] = a),
        (r[16] = o),
        (r[17] = s),
        (r[18] = c),
        (r[19] = p),
        (r[20] = _),
        (r[21] = y))
      : (y = r[21]),
    y
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = o()), c(), r(), a(), (f = s()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=plugin-settings-row-93f0c993fe10.js.map
