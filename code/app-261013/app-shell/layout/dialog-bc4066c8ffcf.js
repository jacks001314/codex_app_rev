import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _Mt as r,
  fO as i,
  gMt as a,
  jDt as o,
  lO as s,
  mO as c,
  oO as l,
  t3 as u,
  vO as d,
  vzt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
function h(e) {
  let r = (0, _.c)(28),
    { children: i, diagnostics: o, size: u, onOpenChange: d } = e,
    [f, p] = (0, v.useState)(!1),
    m = (0, v.useId)(),
    h = o != null && f,
    b = u === `wideTall` ? 1200 : 1040,
    x = h ? `wideTall` : u,
    S = h ? b : void 0,
    C;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { "aria-describedby": void 0 }), (r[0] = C))
    : (C = r[0]);
  let w = h && `lg:grid-cols-2 lg:overflow-hidden`,
    T;
  r[1] === w ? (T = r[2]) : ((T = a(`grid h-full min-h-0 overflow-y-auto`, w)), (r[1] = w), (r[2] = T));
  let E = h && `min-h-140 lg:min-h-0 lg:overflow-y-auto`,
    D;
  r[3] === E ? (D = r[4]) : ((D = a(`min-h-0 min-w-0`, E)), (r[3] = E), (r[4] = D));
  let O;
  r[5] !== o || r[6] !== m || r[7] !== h
    ? ((O =
        o == null
          ? null
          : (0, y.jsx)(t, {
              "aria-controls": m,
              "aria-expanded": h,
              color: `ghostSecondary`,
              size: `compact`,
              type: `button`,
              onClick: () => p(g),
              children: (0, y.jsx)(n, {
                id: `restricted.pages.moveDebug.toggle`,
                defaultMessage: `Move diagnostics`,
                description: `Button that expands or collapses the internal read-only Page move diagnostic panel`,
              }),
            })),
      (r[5] = o),
      (r[6] = m),
      (r[7] = h),
      (r[8] = O))
    : (O = r[8]);
  let k;
  r[9] !== i || r[10] !== O ? ((k = i(O)), (r[9] = i), (r[10] = O), (r[11] = k)) : (k = r[11]);
  let A;
  r[12] !== D || r[13] !== k
    ? ((A = (0, y.jsx)(`div`, { className: D, children: k })), (r[12] = D), (r[13] = k), (r[14] = A))
    : (A = r[14]);
  let j;
  r[15] !== o || r[16] !== m || r[17] !== h
    ? ((j =
        h &&
        (0, y.jsx)(`aside`, {
          id: m,
          className: `min-h-140 min-w-0 border-t border-default lg:min-h-0 lg:overflow-auto lg:border-s lg:border-t-0`,
          children: (0, y.jsx)(l, { children: (0, y.jsx)(s, { children: o }) }),
        })),
      (r[15] = o),
      (r[16] = m),
      (r[17] = h),
      (r[18] = j))
    : (j = r[18]);
  let M;
  r[19] !== A || r[20] !== j || r[21] !== T
    ? ((M = (0, y.jsxs)(`div`, { className: T, children: [A, j] })),
      (r[19] = A),
      (r[20] = j),
      (r[21] = T),
      (r[22] = M))
    : (M = r[22]);
  let N;
  return (
    r[23] !== d || r[24] !== x || r[25] !== M || r[26] !== S
      ? ((N = (0, y.jsx)(c, {
          open: !0,
          size: x,
          widthHint: S,
          contentProps: C,
          onOpenChange: d,
          children: M,
        })),
        (r[23] = d),
        (r[24] = x),
        (r[25] = M),
        (r[26] = S),
        (r[27] = N))
      : (N = r[27]),
    N
  );
}
function g(e) {
  return !e;
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = f()), r(), (v = m()), o(), u(), d(), i(), (y = p()));
  }))();
}
export { b as n, h as t };
//# sourceMappingURL=dialog-bc4066c8ffcf.js.map
