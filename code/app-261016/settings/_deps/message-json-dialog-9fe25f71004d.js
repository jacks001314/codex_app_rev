import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  Jx as i,
  LNt as a,
  NH as o,
  NO as s,
  PBt as c,
  PO as l,
  TY as u,
  WO as d,
  XOt as f,
  Y3 as p,
  Yx as m,
  Z3 as h,
  okt as g,
  qO as _,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as y, t as b } from "./json-value-eb52866629d7.js";
function x(e) {
  let t = (0, S.c)(30),
    { message: r, onClose: a, onCloseAutoFocus: c } = e,
    l = g(),
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), c());
        },
      }),
      (t[0] = c),
      (t[1] = u));
  let f;
  t[2] === a ? (f = t[3]) : ((f = (e) => !e && a()), (t[2] = a), (t[3] = f));
  let m, h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, C.jsx)(o, {})),
      (h = (0, C.jsx)(v, {
        id: `chatgptConversations.debugPanel.backToMessages`,
        defaultMessage: `Back to messages`,
        description: `Closes the full message JSON inspector and returns an employee to the conversation debug panel`,
      })),
      (t[4] = m),
      (t[5] = h))
    : ((m = t[4]), (h = t[5]));
  let y;
  t[6] === a
    ? (y = t[7])
    : ((y = (0, C.jsxs)(p, { color: `ghostActive`, size: `dialog`, onClick: a, children: [m, h] })),
      (t[6] = a),
      (t[7] = y));
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, C.jsx)(_, {
        children: (0, C.jsx)(v, {
          id: `chatgptConversations.debugPanel.messageJsonTitle`,
          defaultMessage: `Message JSON`,
          description: `Title of the internal full-screen inspector showing the complete JSON of a conversation message`,
        }),
      })),
      (t[8] = x))
    : (x = t[8]);
  let w;
  t[9] === l
    ? (w = t[10])
    : ((w = l.formatMessage({
        id: `chatgptConversations.debugPanel.copyMessageJson`,
        defaultMessage: `Copy message JSON`,
        description: `Accessible label for copying a raw ChatGPT conversation message as JSON`,
      })),
      (t[9] = l),
      (t[10] = w));
  let T;
  t[11] === r.json ? (T = t[12]) : ((T = (e) => s(r.json, e)), (t[11] = r.json), (t[12] = T));
  let E;
  t[13] !== w || t[14] !== T
    ? ((E = (0, C.jsx)(i, { ariaLabel: w, iconOnly: !0, onCopy: T })), (t[13] = w), (t[14] = T), (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] !== y || t[17] !== E
    ? ((D = (0, C.jsxs)(`header`, {
        className: `flex items-center justify-between gap-3 border-b border-default bg-surface-secondary px-3 py-3 select-none`,
        children: [y, x, E],
      })),
      (t[16] = y),
      (t[17] = E),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] === r.json ? (O = t[20]) : ((O = JSON.parse(r.json)), (t[19] = r.json), (t[20] = O));
  let k;
  t[21] === O
    ? (k = t[22])
    : ((k = (0, C.jsx)(b, { className: `min-h-0 flex-1 p-4 select-text`, truncateStrings: !1, value: O })),
      (t[21] = O),
      (t[22] = k));
  let A;
  t[23] !== D || t[24] !== k
    ? ((A = (0, C.jsxs)(n, {
        className: `bg-surface text-default`,
        size: `full`,
        variant: `chatgpt`,
        children: [D, k],
      })),
      (t[23] = D),
      (t[24] = k),
      (t[25] = A))
    : (A = t[25]);
  let j;
  return (
    t[26] !== u || t[27] !== A || t[28] !== f
      ? ((j = (0, C.jsx)(d, {
          open: !0,
          unstyledContent: !0,
          viewportSized: !0,
          showDialogClose: !1,
          contentClassName: `h-full w-full`,
          contentProps: u,
          onOpenChange: f,
          children: A,
        })),
        (t[26] = u),
        (t[27] = A),
        (t[28] = f),
        (t[29] = j))
      : (j = t[29]),
    j
  );
}
var S, C;
function w() {
  return (w = e(() => {
    ((S = c()), f(), h(), m(), r(), t(), u(), l(), y(), (C = a()));
  }))();
}
w();
export { x as MessageJsonDialog };
//# sourceMappingURL=message-json-dialog-9fe25f71004d.js.map
