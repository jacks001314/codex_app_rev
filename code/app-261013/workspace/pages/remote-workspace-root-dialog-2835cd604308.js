import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  _Pt as i,
  hPt as a,
  vzt as o,
  wot as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import { OWt as u, gvn as d, ifn as f, kWt as p, nfn as m, pvn as h } from "./app-initial-5851df3f6cb1.js";
import { r as g, t as _ } from "./create-project-dialog-4edb12713319.js";
function v(e) {
  let r = (0, b.c)(13),
    a;
  r[0] === e ? (a = r[1]) : ((a = e === void 0 ? {} : e), (r[0] = e), (r[1] = a));
  let { initialRequest: o } = a,
    s = n(t),
    c = p(),
    l = f(),
    [u, m] = (0, x.useState)(o),
    [h, g] = (0, x.useState)(0),
    v;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (m(e), g(y));
      }),
      (r[2] = v))
    : (v = r[2]);
  let C = v,
    w;
  (r[3] !== c || r[4] !== l || r[5] !== s
    ? ((w = (e) => {
        l && !c && (d({ scope: s, projectType: `remote` }), C(e));
      }),
      (r[3] = c),
      (r[4] = l),
      (r[5] = s),
      (r[6] = w))
    : (w = r[6]),
    i(`open-create-remote-project-modal`, w));
  let T;
  (r[7] !== l || r[8] !== s
    ? ((T = (e) => {
        l && (e.mode !== `pick` && d({ scope: s, projectType: `remote` }), C(e));
      }),
      (r[7] = l),
      (r[8] = s),
      (r[9] = T))
    : (T = r[9]),
    i(`remote-workspace-root-requested`, T));
  let E;
  return (
    r[10] !== h || r[11] !== u
      ? ((E = u == null ? null : (0, S.jsx)(_, { initialRequest: u, onClose: () => m(void 0) }, h)),
        (r[10] = h),
        (r[11] = u),
        (r[12] = E))
      : (E = r[12]),
    E
  );
}
function y(e) {
  return e + 1;
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = o()), r(), (x = l()), u(), a(), m(), s(), g(), h(), (S = c()));
  }))();
}
C();
export { v as CreateRemoteProjectModal };
//# sourceMappingURL=remote-workspace-root-dialog-2835cd604308.js.map
