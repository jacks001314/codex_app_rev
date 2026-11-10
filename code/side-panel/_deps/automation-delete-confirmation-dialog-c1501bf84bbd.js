import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Jrt as r,
  Spn as i,
  Xrt as a,
  Yrt as o,
  Zrt as s,
  eit as c,
  hmn as l,
  iit as u,
  kMt as d,
  kmn as f,
  nit as p,
  rit as m,
  tit as h,
} from "./app-initial-f094ef01c64d.js";
function g(e) {
  let t = (0, _.c)(26),
    { isPending: i, name: c, onCancel: l, onConfirm: u, open: f } = e,
    g;
  t[0] === l
    ? (g = t[1])
    : ((g = (e) => {
        e || l();
      }),
      (t[0] = l),
      (t[1] = g));
  let y;
  t[2] === u
    ? (y = t[3])
    : ((y = (e) => {
        (e.preventDefault(), u());
      }),
      (t[2] = u),
      (t[3] = y));
  let b;
  t[4] === c
    ? (b = t[5])
    : ((b = (0, v.jsx)(m, {
        children: (0, v.jsx)(n, {
          id: `inbox.automations.deleteConfirm.title`,
          defaultMessage: `Delete {name}?`,
          description: `Title for the delete automation confirmation dialog`,
          values: {
            name: (0, v.jsx)(`strong`, { className: `font-semibold text-default`, children: c }),
          },
        }),
      })),
      (t[4] = c),
      (t[5] = b));
  let x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, v.jsx)(p, {
        children: (0, v.jsx)(n, {
          id: `inbox.automations.deleteConfirm.descriptionNoPeriod`,
          defaultMessage: `This will permanently delete the scheduled task and stop future runs`,
          description: `Description for the delete scheduled task confirmation dialog`,
        }),
      })),
      (t[6] = x))
    : (x = t[6]);
  let S;
  t[7] === b
    ? (S = t[8])
    : ((S = (0, v.jsx)(s, { children: (0, v.jsx)(a, { title: b, subtitle: x }) })),
      (t[7] = b),
      (t[8] = S));
  let C;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, v.jsx)(n, {
        id: `inbox.automations.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete automation confirmation dialog`,
      })),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] === l
    ? (w = t[11])
    : ((w = (0, v.jsx)(d, { color: `outline`, onClick: l, children: C })),
      (t[10] = l),
      (t[11] = w));
  let T;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, v.jsx)(n, {
        id: `inbox.automations.deleteConfirm.confirm`,
        defaultMessage: `Delete scheduled task`,
        description: `Confirm button label for delete scheduled task confirmation dialog`,
      })),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] === i
    ? (E = t[14])
    : ((E = (0, v.jsx)(d, { color: `danger`, loading: i, type: `submit`, children: T })),
      (t[13] = i),
      (t[14] = E));
  let D;
  t[15] !== w || t[16] !== E
    ? ((D = (0, v.jsx)(s, { children: (0, v.jsxs)(o, { children: [w, E] }) })),
      (t[15] = w),
      (t[16] = E),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== D || t[19] !== y || t[20] !== S
    ? ((O = (0, v.jsxs)(r, { as: `form`, onSubmit: y, children: [S, D] })),
      (t[18] = D),
      (t[19] = y),
      (t[20] = S),
      (t[21] = O))
    : (O = t[21]);
  let k;
  return (
    t[22] !== f || t[23] !== g || t[24] !== O
      ? ((k = (0, v.jsx)(h, { open: f, onOpenChange: g, children: O })),
        (t[22] = f),
        (t[23] = g),
        (t[24] = O),
        (t[25] = k))
      : (k = t[25]),
    k
  );
}
var _,
  v,
  y = e(() => {
    ((_ = f()), i(), t(), u(), c(), (v = l()));
  });
export { y as n, g as t };
//# sourceMappingURL=automation-delete-confirmation-dialog-c1501bf84bbd.js.map
