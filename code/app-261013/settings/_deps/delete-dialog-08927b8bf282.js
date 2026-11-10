import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  GE as n,
  IDt as r,
  WE as i,
  _O as a,
  cO as o,
  fO as s,
  gO as c,
  jDt as l,
  lO as u,
  mO as d,
  oO as f,
  sO as p,
  t3 as m,
  vO as h,
  vzt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
function y(e) {
  let n = (0, b.c)(37),
    { title: s, description: l, pending: m, disabled: h, error: g, onConfirm: _, onClose: v } = e,
    y = h !== void 0 && h,
    C = (0, x.useRef)(null),
    w;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = {
        onOpenAutoFocus: () => {
          document.activeElement instanceof HTMLElement && (C.current = document.activeElement);
        },
        onCloseAutoFocus: (e) => {
          C.current?.isConnected && (e.preventDefault(), C.current.focus());
        },
      }),
      (n[0] = w))
    : (w = n[0]);
  let T;
  n[1] !== v || n[2] !== m
    ? ((T = (e) => {
        !e && !m && v();
      }),
      (n[1] = v),
      (n[2] = m),
      (n[3] = T))
    : (T = n[3]);
  let E = !m,
    D;
  n[4] !== y || n[5] !== _ || n[6] !== m
    ? ((D = (e) => {
        (e.preventDefault(), !m && !y && _());
      }),
      (n[4] = y),
      (n[5] = _),
      (n[6] = m),
      (n[7] = D))
    : (D = n[7]);
  let O;
  n[8] === s ? (O = n[9]) : ((O = (0, S.jsx)(a, { children: s })), (n[8] = s), (n[9] = O));
  let k;
  n[10] === l ? (k = n[11]) : ((k = (0, S.jsx)(c, { children: l })), (n[10] = l), (n[11] = k));
  let A;
  n[12] !== O || n[13] !== k
    ? ((A = (0, S.jsx)(u, { children: (0, S.jsx)(o, { title: O, subtitle: k }) })),
      (n[12] = O),
      (n[13] = k),
      (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] === g
    ? (j = n[16])
    : ((j =
        g != null &&
        (0, S.jsx)(u, {
          children: (0, S.jsx)(i, { type: `error`, variant: `callout`, role: `alert`, content: g }),
        })),
      (n[15] = g),
      (n[16] = j));
  let M;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, S.jsx)(r, {
        id: `settings.chatGpt.cloudBrowser.delete.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel deleting saved cloud browser data`,
      })),
      (n[17] = M))
    : (M = n[17]);
  let N;
  n[18] !== v || n[19] !== m
    ? ((N = (0, S.jsx)(t, { type: `button`, color: `secondary`, disabled: m, onClick: v, children: M })),
      (n[18] = v),
      (n[19] = m),
      (n[20] = N))
    : (N = n[20]);
  let P = m || y,
    F;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, S.jsx)(r, {
        id: `settings.chatGpt.cloudBrowser.delete.confirm`,
        defaultMessage: `Delete`,
        description: `Confirm permanent deletion of the selected cloud browser data`,
      })),
      (n[21] = F))
    : (F = n[21]);
  let I;
  n[22] !== m || n[23] !== P
    ? ((I = (0, S.jsx)(t, { type: `submit`, color: `danger`, loading: m, disabled: P, children: F })),
      (n[22] = m),
      (n[23] = P),
      (n[24] = I))
    : (I = n[24]);
  let L;
  n[25] !== N || n[26] !== I
    ? ((L = (0, S.jsx)(u, { children: (0, S.jsxs)(p, { children: [N, I] }) })),
      (n[25] = N),
      (n[26] = I),
      (n[27] = L))
    : (L = n[27]);
  let R;
  n[28] !== L || n[29] !== D || n[30] !== A || n[31] !== j
    ? ((R = (0, S.jsxs)(f, { as: `form`, onSubmit: D, children: [A, j, L] })),
      (n[28] = L),
      (n[29] = D),
      (n[30] = A),
      (n[31] = j),
      (n[32] = R))
    : (R = n[32]);
  let z;
  return (
    n[33] !== R || n[34] !== T || n[35] !== E
      ? ((z = (0, S.jsx)(d, {
          open: !0,
          contentProps: w,
          onOpenChange: T,
          showDialogClose: E,
          size: `compact`,
          children: R,
        })),
        (n[33] = R),
        (n[34] = T),
        (n[35] = E),
        (n[36] = z))
      : (z = n[36]),
    z
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = g()), (x = v()), l(), n(), m(), h(), s(), (S = _()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=delete-dialog-08927b8bf282.js.map
