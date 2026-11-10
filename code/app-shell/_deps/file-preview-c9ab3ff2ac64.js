import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Eht as t,
  F3t as n,
  KWt as r,
  O3t as i,
  QWt as a,
  Ri as o,
  ZWt as s,
  hmn as c,
  iit as l,
  kht as u,
  kmn as d,
  qWt as f,
  rit as p,
  tit as m,
  zi as h,
} from "./app-initial-f094ef01c64d.js";
import { n as g, t as _ } from "./library-cloud-file-preview-e9b210a27555.js";
function v(e) {
  "use forget";
  let i = (0, y.c)(13),
    { accountId: a, authenticatedAccountId: c, item: l, userId: u, onClose: d } = e,
    h = n(t),
    g = n(r),
    v = n(f),
    x = n(s);
  if (h !== a || g !== c || v !== u || !x) return null;
  let S;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { "aria-describedby": void 0 }), (i[0] = S))
    : (S = i[0]);
  let C;
  i[1] === d
    ? (C = i[2])
    : ((C = (e) => {
        e || d();
      }),
      (i[1] = d),
      (i[2] = C));
  let w;
  i[3] === l.cloudFile.name
    ? (w = i[4])
    : ((w = (0, b.jsx)(p, { className: `sr-only`, children: l.cloudFile.name })),
      (i[3] = l.cloudFile.name),
      (i[4] = w));
  let T;
  i[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { pathname: `/library`, routeKind: `other`, routeTemplate: `/library` }), (i[5] = T))
    : (T = i[5]);
  let E;
  i[6] !== l || i[7] !== d
    ? ((E = (0, b.jsx)(o, { route: T, children: (0, b.jsx)(_, { item: l, onClose: d }) })),
      (i[6] = l),
      (i[7] = d),
      (i[8] = E))
    : (E = i[8]);
  let D;
  return (
    i[9] !== C || i[10] !== w || i[11] !== E
      ? ((D = (0, b.jsxs)(m, {
          contentProps: S,
          open: !0,
          showDialogClose: !1,
          size: `xxxwideTall`,
          variant: `chatgpt`,
          onOpenChange: C,
          children: [w, E],
        })),
        (i[9] = C),
        (i[10] = w),
        (i[11] = E),
        (i[12] = D))
      : (D = i[12]),
    D
  );
}
var y, b;
e(() => {
  ((y = d()), i(), a(), u(), l(), g(), h(), (b = c()));
})();
export { v as ChatGptSearchFilePreview };
//# sourceMappingURL=file-preview-c9ab3ff2ac64.js.map
