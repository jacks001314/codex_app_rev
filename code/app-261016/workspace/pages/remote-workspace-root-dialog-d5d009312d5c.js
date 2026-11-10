import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  NFt as a,
  PBt as o,
  Qst as s,
  ZSt as c,
  jFt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { Gsn as u, Gzt as d, Kzt as f, hxn as p, qsn as m, vxn as h } from "./app-initial-ad16eaadf81f.js";
import { r as g, t as _ } from "./create-project-dialog-d89806da2478.js";
function v(e) {
  let n = (0, b.c)(13),
    r;
  n[0] === e ? (r = n[1]) : ((r = e === void 0 ? {} : e), (n[0] = e), (n[1] = r));
  let { initialRequest: i } = r,
    o = t(s),
    c = f(),
    l = m(),
    [u, d] = (0, x.useState)(i),
    [p, g] = (0, x.useState)(0),
    v;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (d(e), g(y));
      }),
      (n[2] = v))
    : (v = n[2]);
  let C = v,
    w;
  (n[3] !== c || n[4] !== l || n[5] !== o
    ? ((w = (e) => {
        l && !c && (h({ scope: o, projectType: `remote` }), C(e));
      }),
      (n[3] = c),
      (n[4] = l),
      (n[5] = o),
      (n[6] = w))
    : (w = n[6]),
    a(`open-create-remote-project-modal`, w));
  let T;
  (n[7] !== l || n[8] !== o
    ? ((T = (e) => {
        l && (e.mode !== `pick` && h({ scope: o, projectType: `remote` }), C(e));
      }),
      (n[7] = l),
      (n[8] = o),
      (n[9] = T))
    : (T = n[9]),
    a(`remote-workspace-root-requested`, T));
  let E;
  return (
    n[10] !== p || n[11] !== u
      ? ((E = u == null ? null : (0, S.jsx)(_, { initialRequest: u, onClose: () => d(void 0) }, p)),
        (n[10] = p),
        (n[11] = u),
        (n[12] = E))
      : (E = n[12]),
    E
  );
}
function y(e) {
  return e + 1;
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = o()), c(), (x = r()), d(), l(), u(), n(), g(), p(), (S = i()));
  }))();
}
C();
export { v as CreateRemoteProjectModal };
//# sourceMappingURL=remote-workspace-root-dialog-d5d009312d5c.js.map
