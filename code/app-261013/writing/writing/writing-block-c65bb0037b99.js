import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Fz as n,
  IDt as r,
  Pz as i,
  iO as a,
  jDt as o,
  rO as s,
  t3 as c,
  vzt as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
import { Ltn as f, Rtn as p } from "./app-initial-5851df3f6cb1.js";
import { i as m, r as h } from "./writing-block-surface-635635c06cb8.js";
import { n as g, t as _ } from "./writing-block-copy-button-6291ce056717.js";
function v(e) {
  let i = (0, b.c)(21),
    { className: a, content: o, onAddSelectedTextToChat: c, showCopyButton: l } = e,
    u = l === void 0 || l,
    d = (0, x.useRef)(null),
    p = n(),
    m;
  i[0] !== o || i[1] !== c
    ? ((m = () => {
        let e = o.trim(),
          t = d.current;
        if (e.length === 0 || t == null) return;
        let n = t.ownerDocument.createRange();
        (n.selectNodeContents(t), c?.(e, n));
      }),
      (i[0] = o),
      (i[1] = c),
      (i[2] = m))
    : (m = i[2]);
  let g = m,
    v;
  i[3] === o ? (v = i[4]) : ((v = (e) => s(o, e)), (i[3] = o), (i[4] = v));
  let C = v,
    w = p ? `dark` : `light`,
    T;
  i[5] !== g || i[6] !== c
    ? ((T =
        c == null
          ? null
          : (0, S.jsxs)(t, {
              color: `outline`,
              size: `composer`,
              onMouseDown: y,
              onClick: g,
              children: [
                (0, S.jsx)(f, { "aria-hidden": `true`, className: `icon-2xs` }),
                (0, S.jsx)(r, {
                  id: `selectedTextOverlay.addToCodex`,
                  defaultMessage: `Add to chat`,
                  description: `Button label for adding currently selected text from an overlay anchored to that selection to the chat`,
                }),
              ],
            })),
      (i[5] = g),
      (i[6] = c),
      (i[7] = T))
    : (T = i[7]);
  let E;
  i[8] !== C || i[9] !== u
    ? ((E = u ? (0, S.jsx)(_, { className: `ms-auto`, onCopy: C }) : null),
      (i[8] = C),
      (i[9] = u),
      (i[10] = E))
    : (E = i[10]);
  let D;
  i[11] !== T || i[12] !== E
    ? ((D = (0, S.jsxs)(`div`, {
        "data-markdown-copy": `exclude`,
        className: `flex items-center px-2 pt-2 pb-2 font-sans text-sm text-codex-description select-none`,
        children: [T, E],
      })),
      (i[11] = T),
      (i[12] = E),
      (i[13] = D))
    : (D = i[13]);
  let O;
  i[14] === o
    ? (O = i[15])
    : ((O = (0, S.jsx)(`div`, {
        ref: d,
        className: `overflow-auto px-4 pt-2 pb-4 text-size-chat whitespace-pre-wrap [unicode-bidi:plaintext]`,
        dir: `auto`,
        children: o,
      })),
      (i[14] = o),
      (i[15] = O));
  let k;
  return (
    i[16] !== a || i[17] !== w || i[18] !== D || i[19] !== O
      ? ((k = (0, S.jsxs)(h, {
          "data-markdown-copy": `code-block`,
          className: a,
          "data-theme": w,
          children: [D, O],
        })),
        (i[16] = a),
        (i[17] = w),
        (i[18] = D),
        (i[19] = O),
        (i[20] = k))
      : (k = i[20]),
    k
  );
}
function y(e) {
  e.preventDefault();
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = l()), (x = d()), o(), c(), p(), a(), i(), g(), m(), (S = u()));
  }))();
}
C();
export { v as MarkdownWritingBlock };
//# sourceMappingURL=writing-block-c65bb0037b99.js.map
