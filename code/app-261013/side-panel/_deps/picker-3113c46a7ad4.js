import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  FO as r,
  IDt as i,
  MH as a,
  RO as o,
  TJ as s,
  VDt as c,
  jDt as l,
  kB as u,
  t3 as d,
  vzt as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import { dY as m, uY as h } from "./app-initial-5851df3f6cb1.js";
var g;
function _() {
  return (_ = e(() => {
    g = [`👍`, `❤️`, `🙌`, `😂`, `😢`, `😮`];
  }))();
}
function v(e) {
  let n = (0, y.c)(16),
    { reaction: o, onSelect: s, onMore: l, onReply: d, reactionsEnabled: f, showReactions: p } = e,
    m = f === void 0 || f,
    _ = p === void 0 || p,
    v = c(),
    S;
  n[0] !== v || n[1] !== o
    ? ((S = (e) => v.formatMessage(o === e ? x.remove : x.react, { emoji: e })),
      (n[0] = v),
      (n[1] = o),
      (n[2] = S))
    : (S = n[2]);
  let C = S,
    w;
  n[3] !== v || n[4] !== l || n[5] !== s || n[6] !== o || n[7] !== C || n[8] !== m || n[9] !== _
    ? ((w =
        _ &&
        (0, b.jsxs)(`div`, {
          className: `flex min-h-8 items-center gap-1`,
          children: [
            g.map((e) =>
              (0, b.jsx)(
                t,
                {
                  className: `size-7 justify-center`,
                  "aria-label": C(e),
                  title: C(e),
                  "aria-pressed": o === e,
                  disabled: !m,
                  color: o === e ? `secondary` : `ghostActive`,
                  radius: `full`,
                  size: `inline`,
                  onClick: () => s(e),
                  children: (0, b.jsx)(h, { emoji: e }),
                },
                e,
              ),
            ),
            (0, b.jsx)(t, {
              className: `size-7 justify-center`,
              "aria-label": v.formatMessage({
                id: `mini.messageReactions.more`,
                defaultMessage: `More reactions`,
                description: `Label for opening the full emoji picker from Mini quick reactions`,
              }),
              color: `ghost`,
              radius: `full`,
              size: `inline`,
              onClick: l,
              disabled: !m,
              children: (0, b.jsx)(a, {}),
            }),
          ],
        })),
      (n[3] = v),
      (n[4] = l),
      (n[5] = s),
      (n[6] = o),
      (n[7] = C),
      (n[8] = m),
      (n[9] = _),
      (n[10] = w))
    : (w = n[10]);
  let T;
  n[11] === d
    ? (T = n[12])
    : ((T =
        d == null
          ? null
          : (0, b.jsx)(r, {
              leftIcon: (0, b.jsx)(u, {}),
              onClick: d,
              children: (0, b.jsx)(i, {
                id: `mini.messageReactions.reply`,
                defaultMessage: `Reply`,
                description: `Reply to the selected dot message from Mini's context menu`,
              }),
            })),
      (n[11] = d),
      (n[12] = T));
  let E;
  return (
    n[13] !== w || n[14] !== T
      ? ((E = (0, b.jsxs)(b.Fragment, { children: [w, T] })), (n[13] = w), (n[14] = T), (n[15] = E))
      : (E = n[15]),
    E
  );
}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = f()),
      l(),
      d(),
      s(),
      o(),
      m(),
      _(),
      (b = p()),
      (x = n({
        react: {
          id: `mini.messageReactions.react`,
          defaultMessage: `React with {emoji}`,
          description: `Label for adding the given emoji reaction to a Mini agent message`,
        },
        remove: {
          id: `mini.messageReactions.remove`,
          defaultMessage: `Remove {emoji} reaction`,
          description: `Label for removing the selected emoji reaction from a Mini message`,
        },
      })));
  }))();
}
export { S as n, v as t };
//# sourceMappingURL=picker-3113c46a7ad4.js.map
