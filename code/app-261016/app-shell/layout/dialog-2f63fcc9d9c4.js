import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  LNt as a,
  LO as o,
  OT as s,
  PBt as c,
  RO as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  kT as m,
  qO as h,
  tkt as g,
  zO as _,
} from "./app-shared-2feb3d4c6fcc.js";
function v(e) {
  let t = (0, y.c)(32),
    { onClose: n, onConfirm: i } = e,
    [a, c] = (0, b.useState)(!1),
    d = (0, b.useId)(),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, x.jsx)(g, {
        id: `desktop.windowCloseConfirmation.title`,
        defaultMessage: `Are you sure you want to close the window?`,
        description: `Title asking the user to confirm closing the current app window`,
      })),
      (t[0] = p))
    : (p = t[0]);
  let m = p,
    v;
  t[1] === n
    ? (v = t[2])
    : ((v = (e) => {
        e || n();
      }),
      (t[1] = n),
      (t[2] = v));
  let S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { "aria-describedby": void 0 }), (t[3] = S))
    : (S = t[3]);
  let C;
  t[4] !== a || t[5] !== n || t[6] !== i
    ? ((C = (e) => {
        (e.preventDefault(), i(a), n());
      }),
      (t[4] = a),
      (t[5] = n),
      (t[6] = i),
      (t[7] = C))
    : (C = t[7]);
  let w;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, x.jsx)(h, { className: `sr-only`, children: m })), (t[8] = w))
    : (w = t[8]);
  let T;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, x.jsx)(_, { children: (0, x.jsx)(l, { title: m }) })), (t[9] = T))
    : (T = t[9]);
  let E;
  t[10] !== d || t[11] !== a
    ? ((E = (0, x.jsx)(s, { id: d, checked: a, onCheckedChange: c })), (t[10] = d), (t[11] = a), (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, x.jsx)(g, {
        id: `desktop.windowCloseConfirmation.doNotAskAgain`,
        defaultMessage: `Do not ask me again`,
        description: `Checkbox that disables future window-close confirmations when the user confirms closing this window`,
      })),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === d
    ? (O = t[15])
    : ((O = (0, x.jsx)(`label`, {
        className: `cursor-interaction text-sm text-default`,
        htmlFor: d,
        children: D,
      })),
      (t[14] = d),
      (t[15] = O));
  let k;
  t[16] !== E || t[17] !== O
    ? ((k = (0, x.jsx)(_, {
        children: (0, x.jsxs)(`div`, {
          className: `relative flex min-w-0 items-center gap-2`,
          children: [E, O],
        }),
      })),
      (t[16] = E),
      (t[17] = O),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, x.jsx)(g, {
        id: `desktop.windowCloseConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that keeps the current app window open`,
      })),
      (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] === n
    ? (j = t[21])
    : ((j = (0, x.jsx)(f, { autoFocus: !0, color: `secondary`, type: `button`, onClick: n, children: A })),
      (t[20] = n),
      (t[21] = j));
  let M;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, x.jsx)(f, {
        type: `submit`,
        children: (0, x.jsx)(g, {
          id: `desktop.windowCloseConfirmation.confirm`,
          defaultMessage: `Close Window`,
          description: `Button that confirms closing the current app window`,
        }),
      })),
      (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] === j
    ? (N = t[24])
    : ((N = (0, x.jsx)(_, { children: (0, x.jsxs)(o, { children: [j, M] }) })), (t[23] = j), (t[24] = N));
  let P;
  t[25] !== k || t[26] !== N || t[27] !== C
    ? ((P = (0, x.jsxs)(r, { className: `select-none`, as: `form`, onSubmit: C, children: [w, T, k, N] })),
      (t[25] = k),
      (t[26] = N),
      (t[27] = C),
      (t[28] = P))
    : (P = t[28]);
  let F;
  return (
    t[29] !== P || t[30] !== v
      ? ((F = (0, x.jsx)(u, {
          open: !0,
          onOpenChange: v,
          contentProps: S,
          showDialogClose: !1,
          size: `compact`,
          children: P,
        })),
        (t[29] = P),
        (t[30] = v),
        (t[31] = F))
      : (F = t[31]),
    F
  );
}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = c()), (b = t()), d(), p(), m(), i(), n(), (x = a()));
  }))();
}
S();
export { v as WindowCloseConfirmationDialog };
//# sourceMappingURL=dialog-2f63fcc9d9c4.js.map
