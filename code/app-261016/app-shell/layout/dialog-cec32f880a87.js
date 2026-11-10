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
  let t = (0, _.c)(25),
    { answerNow: r, onClose: a, onCloseAutoFocus: s, onStop: u } = e,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, v.jsx)(m, {
        id: `chatgptConversations.keyboardStop.title`,
        defaultMessage: `Stop this response?`,
        description: `Title of the confirmation dialog shown when a user presses Escape after ChatGPT has been generating a response for at least ten seconds. Asks whether to stop that response.`,
      })),
      (t[0] = f))
    : (f = t[0]);
  let g = f,
    y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, v.jsx)(m, {
        id: `chatgptConversations.keyboardStop.description`,
        defaultMessage: `You can ask again or send a follow-up anytime`,
        description: `Reassuring body in the Escape stop-response confirmation dialog. Stopping generation does not prevent the user from asking again or sending a follow-up in this chat.`,
      })),
      (t[1] = y))
    : (y = t[1]);
  let b = y,
    x;
  t[2] === a
    ? (x = t[3])
    : ((x = (e) => {
        e || a();
      }),
      (t[2] = a),
      (t[3] = x));
  let S;
  t[4] === s ? (S = t[5]) : ((S = { onCloseAutoFocus: s }), (t[4] = s), (t[5] = S));
  let C;
  t[6] === u
    ? (C = t[7])
    : ((C = (e) => {
        (e.preventDefault(), u());
      }),
      (t[6] = u),
      (t[7] = C));
  let w, T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, v.jsx)(p, { className: `sr-only`, children: g })),
      (T = (0, v.jsx)(i, { className: `sr-only`, children: b })),
      (t[8] = w),
      (t[9] = T))
    : ((w = t[8]), (T = t[9]));
  let E;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, v.jsx)(h, { children: (0, v.jsx)(c, { title: g, subtitle: b }) })), (t[10] = E))
    : (E = t[10]);
  let D;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, v.jsx)(m, {
        id: `chatgptConversations.keyboardStop.keepThinking`,
        defaultMessage: `Keep thinking`,
        description: `Button in the Escape stop-response confirmation dialog. Closes the dialog and lets ChatGPT continue generating its current response without stopping it.`,
      })),
      (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === a
    ? (O = t[13])
    : ((O = (0, v.jsx)(d, { autoFocus: !0, color: `secondary`, type: `button`, onClick: a, children: D })),
      (t[12] = a),
      (t[13] = O));
  let k;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, v.jsx)(d, {
        type: `submit`,
        children: (0, v.jsx)(m, {
          id: `chatgptConversations.keyboardStop.stop`,
          defaultMessage: `Stop`,
          description: `Primary confirmation button in the Escape stop-response dialog. Stops the current ChatGPT response without sending the user's draft.`,
        }),
      })),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] !== r || t[16] !== O
    ? ((A = (0, v.jsx)(h, { children: (0, v.jsxs)(o, { children: [O, r, k] }) })),
      (t[15] = r),
      (t[16] = O),
      (t[17] = A))
    : (A = t[17]);
  let j;
  t[18] !== A || t[19] !== C
    ? ((j = (0, v.jsxs)(n, { as: `form`, onSubmit: C, children: [w, T, E, A] })),
      (t[18] = A),
      (t[19] = C),
      (t[20] = j))
    : (j = t[20]);
  let M;
  return (
    t[21] !== j || t[22] !== x || t[23] !== S
      ? ((M = (0, v.jsx)(l, { open: !0, onOpenChange: x, size: `compact`, contentProps: S, children: j })),
        (t[21] = j),
        (t[22] = x),
        (t[23] = S),
        (t[24] = M))
      : (M = t[24]),
    M
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = s()), u(), f(), r(), t(), (v = a()));
  }))();
}
y();
export { g as KeyboardStopDialog };
//# sourceMappingURL=dialog-cec32f880a87.js.map
