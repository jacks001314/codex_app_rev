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
  let a = (0, _.c)(18),
    { onCancel: s, onConfirm: f, open: p } = e;
  if (!p) return null;
  let m;
  a[0] === s
    ? (m = a[1])
    : ((m = (e) => {
        e || s();
      }),
      (a[0] = s),
      (a[1] = m));
  let h;
  a[2] === f
    ? (h = a[3])
    : ((h = (e) => {
        (e.preventDefault(), f());
      }),
      (a[2] = f),
      (a[3] = h));
  let g;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(r, {
        children: (0, v.jsx)(n, {
          id: `codex.writingBlock.confirmCloseTitle`,
          defaultMessage: `Close editor?`,
          description: `Title of the confirmation dialog when leaving an expanded writing block with pending AI edits.`,
        }),
      })),
      (a[4] = g))
    : (g = a[4]);
  let y;
  a[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, v.jsx)(c, {
        children: (0, v.jsx)(i, {
          title: g,
          subtitle: (0, v.jsx)(o, {
            children: (0, v.jsx)(n, {
              id: `codex.writingBlock.confirmClosePendingEdits`,
              defaultMessage: `You have pending edits - are you sure you want to close?`,
              description: `Confirmation before closing or replacing an expanded writing block with an in-progress or unresolved AI edit, matching ChatGPT.`,
            }),
          }),
        }),
      })),
      (a[5] = y))
    : (y = a[5]);
  let b;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(n, {
        id: `codex.writingBlock.confirmCloseCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel leaving an expanded writing block with pending AI edits.`,
      })),
      (a[6] = b))
    : (b = a[6]);
  let x;
  a[7] === s
    ? (x = a[8])
    : ((x = (0, v.jsx)(t, { color: `outline`, onClick: s, type: `button`, children: b })),
      (a[7] = s),
      (a[8] = x));
  let S;
  a[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(t, {
        color: `primary`,
        type: `submit`,
        children: (0, v.jsx)(n, {
          id: `codex.writingBlock.confirmCloseConfirm`,
          defaultMessage: `Close`,
          description: `Confirm leaving an expanded writing block with pending AI edits.`,
        }),
      })),
      (a[9] = S))
    : (S = a[9]);
  let C;
  a[10] === x
    ? (C = a[11])
    : ((C = (0, v.jsx)(c, { children: (0, v.jsxs)(d, { children: [x, S] }) })), (a[10] = x), (a[11] = C));
  let w;
  a[12] !== h || a[13] !== C
    ? ((w = (0, v.jsxs)(u, { as: `form`, onSubmit: h, children: [y, C] })),
      (a[12] = h),
      (a[13] = C),
      (a[14] = w))
    : (w = a[14]);
  let T;
  return (
    a[15] !== m || a[16] !== w
      ? ((T = (0, v.jsx)(l, { open: !0, onOpenChange: m, size: `compact`, children: w })),
        (a[15] = m),
        (a[16] = w),
        (a[17] = T))
      : (T = a[17]),
    T
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = m()), s(), f(), p(), a(), (v = h()));
  }))();
}
export { y as n, g as t };
//# sourceMappingURL=pending-edits-dialog-dfe25ce77d99.js.map
