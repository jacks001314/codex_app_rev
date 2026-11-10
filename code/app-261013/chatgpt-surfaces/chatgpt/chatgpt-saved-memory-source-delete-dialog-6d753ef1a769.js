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
  let a = (0, _.c)(20),
    { title: s, onClose: f, onConfirm: p } = e,
    m;
  a[0] === f
    ? (m = a[1])
    : ((m = (e) => {
        e || f();
      }),
      (a[0] = f),
      (a[1] = m));
  let h;
  a[2] === p
    ? (h = a[3])
    : ((h = (e) => {
        (e.preventDefault(), p());
      }),
      (a[2] = p),
      (a[3] = h));
  let g;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(c, {
        children: (0, v.jsx)(i, {
          title: (0, v.jsx)(r, {
            children: (0, v.jsx)(n, {
              id: `chatgptConversations.summaryPanel.sources.memory.delete.title`,
              defaultMessage: `Delete this memory?`,
              description: `Title of the confirmation dialog opened from a saved-memory citation in the ChatGPT Sources side panel before permanently deleting that account memory.`,
            }),
          }),
        }),
      })),
      (a[4] = g))
    : (g = a[4]);
  let y;
  a[5] === s
    ? (y = a[6])
    : ((y = (0, v.jsx)(c, {
        children: (0, v.jsx)(o, {
          children: (0, v.jsx)(n, {
            id: `chatgptConversations.summaryPanel.sources.memory.delete.descriptionWithTitle`,
            defaultMessage: `"{title}" will be deleted. ChatGPT may not remember this information going forward.`,
            description: `Warning in the confirmation dialog opened from a saved-memory citation in the ChatGPT Sources side panel. Explains that one account memory, not conversation history, will be deleted.`,
            values: { title: s },
          }),
        }),
      })),
      (a[5] = s),
      (a[6] = y));
  let b;
  a[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(n, {
        id: `chatgptConversations.summaryPanel.sources.memory.delete.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button that closes saved-memory deletion confirmation from the ChatGPT Sources side panel without changing account memory.`,
      })),
      (a[7] = b))
    : (b = a[7]);
  let x;
  a[8] === f
    ? (x = a[9])
    : ((x = (0, v.jsx)(t, { color: `secondary`, type: `button`, onClick: f, children: b })),
      (a[8] = f),
      (a[9] = x));
  let S;
  a[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, v.jsx)(n, {
          id: `chatgptConversations.summaryPanel.sources.memory.delete.confirm`,
          defaultMessage: `Delete`,
          description: `Destructive confirmation button that permanently deletes the cited saved account memory from the ChatGPT Sources side panel.`,
        }),
      })),
      (a[10] = S))
    : (S = a[10]);
  let C;
  a[11] === x ? (C = a[12]) : ((C = (0, v.jsxs)(d, { children: [x, S] })), (a[11] = x), (a[12] = C));
  let w;
  a[13] !== h || a[14] !== y || a[15] !== C
    ? ((w = (0, v.jsxs)(u, { as: `form`, onSubmit: h, children: [g, y, C] })),
      (a[13] = h),
      (a[14] = y),
      (a[15] = C),
      (a[16] = w))
    : (w = a[16]);
  let T;
  return (
    a[17] !== m || a[18] !== w
      ? ((T = (0, v.jsx)(l, { open: !0, onOpenChange: m, children: w })),
        (a[17] = m),
        (a[18] = w),
        (a[19] = T))
      : (T = a[19]),
    T
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = m()), s(), f(), p(), a(), (v = h()));
  }))();
}
y();
export { g as ChatGptSavedMemorySourceDeleteDialog };
//# sourceMappingURL=chatgpt-saved-memory-source-delete-dialog-6d753ef1a769.js.map
