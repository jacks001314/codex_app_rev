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
  let t = (0, _.c)(20),
    { title: r, onClose: a, onConfirm: s } = e,
    u;
  t[0] === a
    ? (u = t[1])
    : ((u = (e) => {
        e || a();
      }),
      (t[0] = a),
      (t[1] = u));
  let f;
  t[2] === s
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), s());
      }),
      (t[2] = s),
      (t[3] = f));
  let g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(h, {
        children: (0, v.jsx)(c, {
          title: (0, v.jsx)(p, {
            children: (0, v.jsx)(m, {
              id: `chatgptConversations.summaryPanel.sources.memory.delete.title`,
              defaultMessage: `Delete this memory?`,
              description: `Title of the confirmation dialog opened from a saved-memory citation in the ChatGPT Sources side panel before permanently deleting that account memory.`,
            }),
          }),
        }),
      })),
      (t[4] = g))
    : (g = t[4]);
  let y;
  t[5] === r
    ? (y = t[6])
    : ((y = (0, v.jsx)(h, {
        children: (0, v.jsx)(i, {
          children: (0, v.jsx)(m, {
            id: `chatgptConversations.summaryPanel.sources.memory.delete.descriptionWithTitle`,
            defaultMessage: `"{title}" will be deleted. ChatGPT may not remember this information going forward.`,
            description: `Warning in the confirmation dialog opened from a saved-memory citation in the ChatGPT Sources side panel. Explains that one account memory, not conversation history, will be deleted.`,
            values: { title: r },
          }),
        }),
      })),
      (t[5] = r),
      (t[6] = y));
  let b;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(m, {
        id: `chatgptConversations.summaryPanel.sources.memory.delete.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button that closes saved-memory deletion confirmation from the ChatGPT Sources side panel without changing account memory.`,
      })),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] === a
    ? (x = t[9])
    : ((x = (0, v.jsx)(d, { color: `secondary`, type: `button`, onClick: a, children: b })),
      (t[8] = a),
      (t[9] = x));
  let S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(d, {
        color: `danger`,
        type: `submit`,
        children: (0, v.jsx)(m, {
          id: `chatgptConversations.summaryPanel.sources.memory.delete.confirm`,
          defaultMessage: `Delete`,
          description: `Destructive confirmation button that permanently deletes the cited saved account memory from the ChatGPT Sources side panel.`,
        }),
      })),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] === x ? (C = t[12]) : ((C = (0, v.jsxs)(o, { children: [x, S] })), (t[11] = x), (t[12] = C));
  let w;
  t[13] !== f || t[14] !== y || t[15] !== C
    ? ((w = (0, v.jsxs)(n, { as: `form`, onSubmit: f, children: [g, y, C] })),
      (t[13] = f),
      (t[14] = y),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T;
  return (
    t[17] !== u || t[18] !== w
      ? ((T = (0, v.jsx)(l, { open: !0, onOpenChange: u, children: w })),
        (t[17] = u),
        (t[18] = w),
        (t[19] = T))
      : (T = t[19]),
    T
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = s()), u(), f(), r(), t(), (v = a()));
  }))();
}
y();
export { g as ChatGptSavedMemorySourceDeleteDialog };
//# sourceMappingURL=chatgpt-saved-memory-source-delete-dialog-f5f08b3f6957.js.map
