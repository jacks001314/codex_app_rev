import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  KO as i,
  LNt as a,
  LO as o,
  PBt as s,
  RO as c,
  WO as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  qO as p,
  tkt as m,
  zO as h,
} from "./app-shared-2feb3d4c6fcc.js";
function g(e) {
  let t = (0, _.c)(18),
    { onCancel: r, onConfirm: a, open: s } = e;
  if (!s) return null;
  let u;
  t[0] === r
    ? (u = t[1])
    : ((u = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = u));
  let f;
  t[2] === a
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), a());
      }),
      (t[2] = a),
      (t[3] = f));
  let g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(p, {
        children: (0, v.jsx)(m, {
          id: `codex.writingBlock.confirmCloseTitle`,
          defaultMessage: `Close editor?`,
          description: `Title of the confirmation dialog when leaving an expanded writing block with pending AI edits.`,
        }),
      })),
      (t[4] = g))
    : (g = t[4]);
  let y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, v.jsx)(h, {
        children: (0, v.jsx)(c, {
          title: g,
          subtitle: (0, v.jsx)(i, {
            children: (0, v.jsx)(m, {
              id: `codex.writingBlock.confirmClosePendingEdits`,
              defaultMessage: `You have pending edits - are you sure you want to close?`,
              description: `Confirmation before closing or replacing an expanded writing block with an in-progress or unresolved AI edit, matching ChatGPT.`,
            }),
          }),
        }),
      })),
      (t[5] = y))
    : (y = t[5]);
  let b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(m, {
        id: `codex.writingBlock.confirmCloseCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel leaving an expanded writing block with pending AI edits.`,
      })),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] === r
    ? (x = t[8])
    : ((x = (0, v.jsx)(d, { color: `outline`, onClick: r, type: `button`, children: b })),
      (t[7] = r),
      (t[8] = x));
  let S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(d, {
        color: `primary`,
        type: `submit`,
        children: (0, v.jsx)(m, {
          id: `codex.writingBlock.confirmCloseConfirm`,
          defaultMessage: `Close`,
          description: `Confirm leaving an expanded writing block with pending AI edits.`,
        }),
      })),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] === x
    ? (C = t[11])
    : ((C = (0, v.jsx)(h, { children: (0, v.jsxs)(o, { children: [x, S] }) })), (t[10] = x), (t[11] = C));
  let w;
  t[12] !== f || t[13] !== C
    ? ((w = (0, v.jsxs)(n, { as: `form`, onSubmit: f, children: [y, C] })),
      (t[12] = f),
      (t[13] = C),
      (t[14] = w))
    : (w = t[14]);
  let T;
  return (
    t[15] !== u || t[16] !== w
      ? ((T = (0, v.jsx)(l, { open: !0, onOpenChange: u, size: `compact`, children: w })),
        (t[15] = u),
        (t[16] = w),
        (t[17] = T))
      : (T = t[17]),
    T
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = s()), u(), f(), r(), t(), (v = a()));
  }))();
}
export { y as n, g as t };
//# sourceMappingURL=pending-edits-dialog-9c6af36d7219.js.map
