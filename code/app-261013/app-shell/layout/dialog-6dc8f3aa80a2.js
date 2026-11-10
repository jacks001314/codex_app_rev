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
  let a = (0, _.c)(25),
    { answerNow: s, onClose: f, onCloseAutoFocus: p, onStop: m } = e,
    h;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, v.jsx)(n, {
        id: `chatgptConversations.keyboardStop.title`,
        defaultMessage: `Stop this response?`,
        description: `Title of the confirmation dialog shown when a user presses Escape after ChatGPT has been generating a response for at least ten seconds. Asks whether to stop that response.`,
      })),
      (a[0] = h))
    : (h = a[0]);
  let g = h,
    y;
  a[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, v.jsx)(n, {
        id: `chatgptConversations.keyboardStop.description`,
        defaultMessage: `You can ask again or send a follow-up anytime`,
        description: `Reassuring body in the Escape stop-response confirmation dialog. Stopping generation does not prevent the user from asking again or sending a follow-up in this chat.`,
      })),
      (a[1] = y))
    : (y = a[1]);
  let b = y,
    x;
  a[2] === f
    ? (x = a[3])
    : ((x = (e) => {
        e || f();
      }),
      (a[2] = f),
      (a[3] = x));
  let S;
  a[4] === p ? (S = a[5]) : ((S = { onCloseAutoFocus: p }), (a[4] = p), (a[5] = S));
  let C;
  a[6] === m
    ? (C = a[7])
    : ((C = (e) => {
        (e.preventDefault(), m());
      }),
      (a[6] = m),
      (a[7] = C));
  let w, T;
  a[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, v.jsx)(r, { className: `sr-only`, children: g })),
      (T = (0, v.jsx)(o, { className: `sr-only`, children: b })),
      (a[8] = w),
      (a[9] = T))
    : ((w = a[8]), (T = a[9]));
  let E;
  a[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, v.jsx)(c, { children: (0, v.jsx)(i, { title: g, subtitle: b }) })), (a[10] = E))
    : (E = a[10]);
  let D;
  a[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, v.jsx)(n, {
        id: `chatgptConversations.keyboardStop.keepThinking`,
        defaultMessage: `Keep thinking`,
        description: `Button in the Escape stop-response confirmation dialog. Closes the dialog and lets ChatGPT continue generating its current response without stopping it.`,
      })),
      (a[11] = D))
    : (D = a[11]);
  let O;
  a[12] === f
    ? (O = a[13])
    : ((O = (0, v.jsx)(t, { autoFocus: !0, color: `secondary`, type: `button`, onClick: f, children: D })),
      (a[12] = f),
      (a[13] = O));
  let k;
  a[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, v.jsx)(t, {
        type: `submit`,
        children: (0, v.jsx)(n, {
          id: `chatgptConversations.keyboardStop.stop`,
          defaultMessage: `Stop`,
          description: `Primary confirmation button in the Escape stop-response dialog. Stops the current ChatGPT response without sending the user's draft.`,
        }),
      })),
      (a[14] = k))
    : (k = a[14]);
  let A;
  a[15] !== s || a[16] !== O
    ? ((A = (0, v.jsx)(c, { children: (0, v.jsxs)(d, { children: [O, s, k] }) })),
      (a[15] = s),
      (a[16] = O),
      (a[17] = A))
    : (A = a[17]);
  let j;
  a[18] !== A || a[19] !== C
    ? ((j = (0, v.jsxs)(u, { as: `form`, onSubmit: C, children: [w, T, E, A] })),
      (a[18] = A),
      (a[19] = C),
      (a[20] = j))
    : (j = a[20]);
  let M;
  return (
    a[21] !== j || a[22] !== x || a[23] !== S
      ? ((M = (0, v.jsx)(l, { open: !0, onOpenChange: x, size: `compact`, contentProps: S, children: j })),
        (a[21] = j),
        (a[22] = x),
        (a[23] = S),
        (a[24] = M))
      : (M = a[24]),
    M
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = m()), s(), f(), p(), a(), (v = h()));
  }))();
}
y();
export { g as KeyboardStopDialog };
//# sourceMappingURL=dialog-6dc8f3aa80a2.js.map
