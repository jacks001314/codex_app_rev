import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  cO as i,
  fO as a,
  gO as o,
  jDt as s,
  lO as c,
  mO as l,
  oO as u,
  sO as d,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
} from "./app-shared-bbfeca5e5737.js";
function g(e) {
  let a = (0, _.c)(31),
    { isPending: s, name: f, onCancel: p, onConfirm: m, open: h } = e,
    g = !s,
    y;
  a[0] !== s || a[1] !== p
    ? ((y = (e) => {
        !e && !s && p();
      }),
      (a[0] = s),
      (a[1] = p),
      (a[2] = y))
    : (y = a[2]);
  let b;
  a[3] !== s || a[4] !== m
    ? ((b = (e) => {
        (e.preventDefault(), s || m());
      }),
      (a[3] = s),
      (a[4] = m),
      (a[5] = b))
    : (b = a[5]);
  let x;
  a[6] === f
    ? (x = a[7])
    : ((x = (0, v.jsx)(r, {
        children: (0, v.jsx)(n, {
          id: `inbox.automations.deleteConfirm.title`,
          defaultMessage: `Delete {name}?`,
          description: `Title for the delete automation confirmation dialog`,
          values: { name: (0, v.jsx)(`strong`, { className: `font-semibold text-default`, children: f }) },
        }),
      })),
      (a[6] = f),
      (a[7] = x));
  let S;
  a[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(o, {
        children: (0, v.jsx)(n, {
          id: `inbox.automations.deleteConfirm.descriptionNoPeriod`,
          defaultMessage: `This will permanently delete the scheduled task and stop future runs`,
          description: `Description for the delete scheduled task confirmation dialog`,
        }),
      })),
      (a[8] = S))
    : (S = a[8]);
  let C;
  a[9] === x
    ? (C = a[10])
    : ((C = (0, v.jsx)(c, { children: (0, v.jsx)(i, { title: x, subtitle: S }) })), (a[9] = x), (a[10] = C));
  let w;
  a[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, v.jsx)(n, {
        id: `inbox.automations.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete automation confirmation dialog`,
      })),
      (a[11] = w))
    : (w = a[11]);
  let T;
  a[12] !== s || a[13] !== p
    ? ((T = (0, v.jsx)(t, { color: `outline`, disabled: s, onClick: p, children: w })),
      (a[12] = s),
      (a[13] = p),
      (a[14] = T))
    : (T = a[14]);
  let E;
  a[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, v.jsx)(n, {
        id: `inbox.automations.deleteConfirm.confirm`,
        defaultMessage: `Delete scheduled task`,
        description: `Confirm button label for delete scheduled task confirmation dialog`,
      })),
      (a[15] = E))
    : (E = a[15]);
  let D;
  a[16] === s
    ? (D = a[17])
    : ((D = (0, v.jsx)(t, { color: `danger`, loading: s, type: `submit`, children: E })),
      (a[16] = s),
      (a[17] = D));
  let O;
  a[18] !== D || a[19] !== T
    ? ((O = (0, v.jsx)(c, { children: (0, v.jsxs)(d, { children: [T, D] }) })),
      (a[18] = D),
      (a[19] = T),
      (a[20] = O))
    : (O = a[20]);
  let k;
  a[21] !== O || a[22] !== b || a[23] !== C
    ? ((k = (0, v.jsxs)(u, { as: `form`, onSubmit: b, children: [C, O] })),
      (a[21] = O),
      (a[22] = b),
      (a[23] = C),
      (a[24] = k))
    : (k = a[24]);
  let A;
  return (
    a[25] !== s || a[26] !== h || a[27] !== g || a[28] !== k || a[29] !== y
      ? ((A = (0, v.jsx)(l, {
          open: h,
          showDialogClose: g,
          shouldIgnoreClickOutside: s,
          onOpenChange: y,
          children: k,
        })),
        (a[25] = s),
        (a[26] = h),
        (a[27] = g),
        (a[28] = k),
        (a[29] = y),
        (a[30] = A))
      : (A = a[30]),
    A
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = m()), s(), f(), p(), a(), (v = h()));
  }))();
}
export { y as n, g as t };
//# sourceMappingURL=automation-delete-confirmation-dialog-c8c0c59ec586.js.map
