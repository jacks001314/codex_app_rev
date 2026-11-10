import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  LV as r,
  TJ as i,
  VDt as a,
  _O as o,
  bx as s,
  fO as c,
  iO as l,
  jDt as u,
  mO as d,
  oO as f,
  rO as p,
  t3 as m,
  vO as h,
  vzt as g,
  xMt as _,
  yx as v,
} from "./app-shared-bbfeca5e5737.js";
import { n as y, t as b } from "./json-value-aa4ed764dfe2.js";
function x(e) {
  let i = (0, S.c)(30),
    { message: s, onClose: c, onCloseAutoFocus: l } = e,
    u = a(),
    m;
  i[0] === l
    ? (m = i[1])
    : ((m = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), l());
        },
      }),
      (i[0] = l),
      (i[1] = m));
  let h;
  i[2] === c ? (h = i[3]) : ((h = (e) => !e && c()), (i[2] = c), (i[3] = h));
  let g, _;
  i[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, C.jsx)(r, {})),
      (_ = (0, C.jsx)(n, {
        id: `chatgptConversations.debugPanel.backToMessages`,
        defaultMessage: `Back to messages`,
        description: `Closes the full message JSON inspector and returns an employee to the conversation debug panel`,
      })),
      (i[4] = g),
      (i[5] = _))
    : ((g = i[4]), (_ = i[5]));
  let y;
  i[6] === c
    ? (y = i[7])
    : ((y = (0, C.jsxs)(t, { color: `ghostActive`, size: `dialog`, onClick: c, children: [g, _] })),
      (i[6] = c),
      (i[7] = y));
  let x;
  i[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, C.jsx)(o, {
        children: (0, C.jsx)(n, {
          id: `chatgptConversations.debugPanel.messageJsonTitle`,
          defaultMessage: `Message JSON`,
          description: `Title of the internal full-screen inspector showing the complete JSON of a conversation message`,
        }),
      })),
      (i[8] = x))
    : (x = i[8]);
  let w;
  i[9] === u
    ? (w = i[10])
    : ((w = u.formatMessage({
        id: `chatgptConversations.debugPanel.copyMessageJson`,
        defaultMessage: `Copy message JSON`,
        description: `Accessible label for copying a raw ChatGPT conversation message as JSON`,
      })),
      (i[9] = u),
      (i[10] = w));
  let T;
  i[11] === s.json ? (T = i[12]) : ((T = (e) => p(s.json, e)), (i[11] = s.json), (i[12] = T));
  let E;
  i[13] !== w || i[14] !== T
    ? ((E = (0, C.jsx)(v, { ariaLabel: w, iconOnly: !0, onCopy: T })), (i[13] = w), (i[14] = T), (i[15] = E))
    : (E = i[15]);
  let D;
  i[16] !== y || i[17] !== E
    ? ((D = (0, C.jsxs)(`header`, {
        className: `flex items-center justify-between gap-3 border-b border-default bg-surface-secondary px-3 py-3 select-none`,
        children: [y, x, E],
      })),
      (i[16] = y),
      (i[17] = E),
      (i[18] = D))
    : (D = i[18]);
  let O;
  i[19] === s.json ? (O = i[20]) : ((O = JSON.parse(s.json)), (i[19] = s.json), (i[20] = O));
  let k;
  i[21] === O
    ? (k = i[22])
    : ((k = (0, C.jsx)(b, { className: `min-h-0 flex-1 p-4 select-text`, truncateStrings: !1, value: O })),
      (i[21] = O),
      (i[22] = k));
  let A;
  i[23] !== D || i[24] !== k
    ? ((A = (0, C.jsxs)(f, {
        className: `bg-surface text-default`,
        size: `full`,
        variant: `chatgpt`,
        children: [D, k],
      })),
      (i[23] = D),
      (i[24] = k),
      (i[25] = A))
    : (A = i[25]);
  let j;
  return (
    i[26] !== m || i[27] !== A || i[28] !== h
      ? ((j = (0, C.jsx)(d, {
          open: !0,
          unstyledContent: !0,
          viewportSized: !0,
          showDialogClose: !1,
          contentClassName: `h-full w-full`,
          contentProps: m,
          onOpenChange: h,
          children: A,
        })),
        (i[26] = m),
        (i[27] = A),
        (i[28] = h),
        (i[29] = j))
      : (j = i[29]),
    j
  );
}
var S, C;
function w() {
  return (w = e(() => {
    ((S = g()), u(), m(), s(), h(), c(), i(), l(), y(), (C = _()));
  }))();
}
w();
export { x as MessageJsonDialog };
//# sourceMappingURL=message-json-dialog-18c0278cb1f2.js.map
