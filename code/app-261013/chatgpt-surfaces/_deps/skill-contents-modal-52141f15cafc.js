import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JC as n,
  NO as r,
  PO as i,
  _O as a,
  aO as o,
  cO as s,
  fO as c,
  gO as l,
  jDt as u,
  lO as d,
  mO as f,
  oO as p,
  qC as m,
  sO as h,
  vO as g,
  vzt as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import { _n as y, vn as b } from "./app-initial-5851df3f6cb1.js";
function x(e) {
  let n = (0, S.c)(38),
    {
      icon: i,
      title: c,
      name: u,
      description: g,
      headerActions: _,
      footer: v,
      isOpen: b,
      onOpenChange: x,
      onCloseAutoFocus: w,
      children: T,
    } = e,
    E;
  n[0] === w ? (E = n[1]) : ((E = { onCloseAutoFocus: w }), (n[0] = w), (n[1] = E));
  let D;
  n[2] === g
    ? (D = n[3])
    : ((D = typeof g == `string` ? (0, C.jsx)(l, { className: `sr-only`, children: g }) : null),
      (n[2] = g),
      (n[3] = D));
  let O = _ == null ? `pe-8` : `pe-32`,
    k;
  n[4] === i
    ? (k = n[5])
    : ((k =
        i == null
          ? null
          : (0, C.jsx)(`span`, {
              className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-default text-secondary`,
              children: i,
            })),
      (n[4] = i),
      (n[5] = k));
  let A;
  n[6] === c
    ? (A = n[7])
    : ((A = (0, C.jsx)(`span`, { className: `min-w-0 wrap-anywhere`, children: c })), (n[6] = c), (n[7] = A));
  let j;
  n[8] !== k || n[9] !== A
    ? ((j = (0, C.jsx)(a, {
        children: (0, C.jsxs)(`span`, { className: `flex items-center gap-3`, children: [k, A] }),
      })),
      (n[8] = k),
      (n[9] = A),
      (n[10] = j))
    : (j = n[10]);
  let M;
  n[11] !== O || n[12] !== j
    ? ((M = (0, C.jsx)(d, { className: `shrink-0`, children: (0, C.jsx)(s, { className: O, title: j }) })),
      (n[11] = O),
      (n[12] = j),
      (n[13] = M))
    : (M = n[13]);
  let N;
  n[14] === u
    ? (N = n[15])
    : ((N =
        u == null
          ? null
          : (0, C.jsx)(y, {
              label: (0, C.jsx)(t, {
                id: `skills.contents.name`,
                defaultMessage: `Name`,
                description: `Stored skill name in the read-only plugin skill contents dialog`,
              }),
              children: u,
            })),
      (n[14] = u),
      (n[15] = N));
  let P;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, C.jsx)(t, {
        id: `skills.contents.description`,
        defaultMessage: `Description`,
        description: `Description label in the read-only plugin skill contents dialog`,
      })),
      (n[16] = P))
    : (P = n[16]);
  let F;
  n[17] === g
    ? (F = n[18])
    : ((F = (0, C.jsx)(y, { align: `start`, label: P, children: g })), (n[17] = g), (n[18] = F));
  let I;
  n[19] !== F || n[20] !== N
    ? ((I = (0, C.jsx)(m, {
        className: `shrink-0`,
        dividers: !1,
        children: (0, C.jsxs)(`dl`, { className: `@container p-4`, children: [N, F] }),
      })),
      (n[19] = F),
      (n[20] = N),
      (n[21] = I))
    : (I = n[21]);
  let L;
  n[22] !== T || n[23] !== I
    ? ((L = (0, C.jsx)(d, {
        className: `min-h-0 flex-1`,
        spacing: `large`,
        children: (0, C.jsx)(r, {
          className: `relative grid min-h-0 flex-1 overflow-hidden`,
          fade: `mask`,
          scrollClassName: `min-h-0 overflow-y-auto select-text`,
          children: (0, C.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [I, T] }),
        }),
      })),
      (n[22] = T),
      (n[23] = I),
      (n[24] = L))
    : (L = n[24]);
  let R;
  n[25] === v
    ? (R = n[26])
    : ((R =
        v == null
          ? null
          : (0, C.jsx)(d, {
              className: `shrink-0`,
              spacing: `large`,
              children: (0, C.jsx)(h, { className: o, expandSingleButton: !1, children: v }),
            })),
      (n[25] = v),
      (n[26] = R));
  let z;
  n[27] !== L || n[28] !== R || n[29] !== D || n[30] !== M
    ? ((z = (0, C.jsxs)(p, { size: `full`, children: [D, M, L, R] })),
      (n[27] = L),
      (n[28] = R),
      (n[29] = D),
      (n[30] = M),
      (n[31] = z))
    : (z = n[31]);
  let B;
  return (
    n[32] !== _ || n[33] !== b || n[34] !== x || n[35] !== E || n[36] !== z
      ? ((B = (0, C.jsx)(f, {
          open: b,
          onOpenChange: x,
          contentProps: E,
          size: `xwideTall`,
          headerActions: _,
          children: z,
        })),
        (n[32] = _),
        (n[33] = b),
        (n[34] = x),
        (n[35] = E),
        (n[36] = z),
        (n[37] = B))
      : (B = n[37]),
    B
  );
}
var S, C;
function w() {
  return (w = e(() => {
    ((S = _()), u(), b(), g(), c(), i(), n(), (C = v()));
  }))();
}
export { w as n, x as t };
//# sourceMappingURL=skill-contents-modal-52141f15cafc.js.map
