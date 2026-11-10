import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  KO as a,
  LNt as o,
  LO as s,
  PBt as c,
  RO as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  qO as m,
  tkt as h,
  vD as g,
  yD as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
function y(e) {
  let t = (0, b.c)(37),
    { title: n, description: i, pending: o, disabled: c, error: d, onConfirm: p, onClose: _ } = e,
    y = c !== void 0 && c,
    C = (0, x.useRef)(null),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = {
        onOpenAutoFocus: () => {
          document.activeElement instanceof HTMLElement && (C.current = document.activeElement);
        },
        onCloseAutoFocus: (e) => {
          C.current?.isConnected && (e.preventDefault(), C.current.focus());
        },
      }),
      (t[0] = w))
    : (w = t[0]);
  let T;
  t[1] !== _ || t[2] !== o
    ? ((T = (e) => {
        !e && !o && _();
      }),
      (t[1] = _),
      (t[2] = o),
      (t[3] = T))
    : (T = t[3]);
  let E = !o,
    D;
  t[4] !== y || t[5] !== p || t[6] !== o
    ? ((D = (e) => {
        (e.preventDefault(), !o && !y && p());
      }),
      (t[4] = y),
      (t[5] = p),
      (t[6] = o),
      (t[7] = D))
    : (D = t[7]);
  let O;
  t[8] === n ? (O = t[9]) : ((O = (0, S.jsx)(m, { children: n })), (t[8] = n), (t[9] = O));
  let k;
  t[10] === i ? (k = t[11]) : ((k = (0, S.jsx)(a, { children: i })), (t[10] = i), (t[11] = k));
  let A;
  t[12] !== O || t[13] !== k
    ? ((A = (0, S.jsx)(v, { children: (0, S.jsx)(l, { title: O, subtitle: k }) })),
      (t[12] = O),
      (t[13] = k),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === d
    ? (j = t[16])
    : ((j =
        d != null &&
        (0, S.jsx)(v, {
          children: (0, S.jsx)(g, { type: `error`, variant: `callout`, role: `alert`, content: d }),
        })),
      (t[15] = d),
      (t[16] = j));
  let M;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, S.jsx)(h, {
        id: `settings.chatGpt.cloudBrowser.delete.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel deleting saved cloud browser data`,
      })),
      (t[17] = M))
    : (M = t[17]);
  let N;
  t[18] !== _ || t[19] !== o
    ? ((N = (0, S.jsx)(f, { type: `button`, color: `secondary`, disabled: o, onClick: _, children: M })),
      (t[18] = _),
      (t[19] = o),
      (t[20] = N))
    : (N = t[20]);
  let P = o || y,
    F;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, S.jsx)(h, {
        id: `settings.chatGpt.cloudBrowser.delete.confirm`,
        defaultMessage: `Delete`,
        description: `Confirm permanent deletion of the selected cloud browser data`,
      })),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] !== o || t[23] !== P
    ? ((I = (0, S.jsx)(f, { type: `submit`, color: `danger`, loading: o, disabled: P, children: F })),
      (t[22] = o),
      (t[23] = P),
      (t[24] = I))
    : (I = t[24]);
  let L;
  t[25] !== N || t[26] !== I
    ? ((L = (0, S.jsx)(v, { children: (0, S.jsxs)(s, { children: [N, I] }) })),
      (t[25] = N),
      (t[26] = I),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== L || t[29] !== D || t[30] !== A || t[31] !== j
    ? ((R = (0, S.jsxs)(r, { as: `form`, onSubmit: D, children: [A, j, L] })),
      (t[28] = L),
      (t[29] = D),
      (t[30] = A),
      (t[31] = j),
      (t[32] = R))
    : (R = t[32]);
  let z;
  return (
    t[33] !== R || t[34] !== T || t[35] !== E
      ? ((z = (0, S.jsx)(u, {
          open: !0,
          contentProps: w,
          onOpenChange: T,
          showDialogClose: E,
          size: `compact`,
          children: R,
        })),
        (t[33] = R),
        (t[34] = T),
        (t[35] = E),
        (t[36] = z))
      : (z = t[36]),
    z
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = c()), (x = t()), d(), _(), p(), i(), n(), (S = o()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=delete-dialog-a1f8bd682f1f.js.map
