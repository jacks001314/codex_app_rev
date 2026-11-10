import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AB as t,
  FBt as n,
  LNt as r,
  NO as i,
  PBt as a,
  PO as o,
  XOt as s,
  Y3 as c,
  Z3 as l,
  kB as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { aan as f, ian as p } from "./app-initial-ad16eaadf81f.js";
import { i as m, r as h } from "./writing-block-surface-2bef314d86c0.js";
import { n as g, t as _ } from "./writing-block-copy-button-93e2376e2033.js";
function v(e) {
  let n = (0, b.c)(21),
    { className: r, content: a, onAddSelectedTextToChat: o, showCopyButton: s } = e,
    l = s === void 0 || s,
    u = (0, x.useRef)(null),
    f = t(),
    m;
  n[0] !== a || n[1] !== o
    ? ((m = () => {
        let e = a.trim(),
          t = u.current;
        if (e.length === 0 || t == null) return;
        let n = t.ownerDocument.createRange();
        (n.selectNodeContents(t), o?.(e, n));
      }),
      (n[0] = a),
      (n[1] = o),
      (n[2] = m))
    : (m = n[2]);
  let g = m,
    v;
  n[3] === a ? (v = n[4]) : ((v = (e) => i(a, e)), (n[3] = a), (n[4] = v));
  let C = v,
    w = f ? `dark` : `light`,
    T;
  n[5] !== g || n[6] !== o
    ? ((T =
        o == null
          ? null
          : (0, S.jsxs)(c, {
              color: `outline`,
              size: `composer`,
              onMouseDown: y,
              onClick: g,
              children: [
                (0, S.jsx)(p, { "aria-hidden": `true`, className: `icon-2xs` }),
                (0, S.jsx)(d, {
                  id: `selectedTextOverlay.addToCodex`,
                  defaultMessage: `Add to chat`,
                  description: `Button label for adding currently selected text from an overlay anchored to that selection to the chat`,
                }),
              ],
            })),
      (n[5] = g),
      (n[6] = o),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== C || n[9] !== l
    ? ((E = l ? (0, S.jsx)(_, { className: `ms-auto`, onCopy: C }) : null),
      (n[8] = C),
      (n[9] = l),
      (n[10] = E))
    : (E = n[10]);
  let D;
  n[11] !== T || n[12] !== E
    ? ((D = (0, S.jsxs)(`div`, {
        "data-markdown-copy": `exclude`,
        className: `flex items-center px-2 pt-2 pb-2 font-sans text-sm text-codex-description select-none`,
        children: [T, E],
      })),
      (n[11] = T),
      (n[12] = E),
      (n[13] = D))
    : (D = n[13]);
  let O;
  n[14] === a
    ? (O = n[15])
    : ((O = (0, S.jsx)(`div`, {
        ref: u,
        className: `overflow-auto px-4 pt-2 pb-4 text-size-chat whitespace-pre-wrap [unicode-bidi:plaintext]`,
        "data-horizontal-scroll": !0,
        dir: `auto`,
        children: a,
      })),
      (n[14] = a),
      (n[15] = O));
  let k;
  return (
    n[16] !== r || n[17] !== w || n[18] !== D || n[19] !== O
      ? ((k = (0, S.jsxs)(h, {
          "data-markdown-copy": `code-block`,
          className: r,
          "data-theme": w,
          children: [D, O],
        })),
        (n[16] = r),
        (n[17] = w),
        (n[18] = D),
        (n[19] = O),
        (n[20] = k))
      : (k = n[20]),
    k
  );
}
function y(e) {
  e.preventDefault();
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = a()), (x = n()), s(), l(), f(), o(), u(), g(), m(), (S = r()));
  }))();
}
C();
export { v as MarkdownWritingBlock };
//# sourceMappingURL=writing-block-622dbe5492b5.js.map
