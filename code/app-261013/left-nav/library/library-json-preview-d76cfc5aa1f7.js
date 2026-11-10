import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import { B as i, H as a, N as o, rt as s, yt as c } from "./dist-50497e5dc1f8.js";
import { n as l, t as u } from "./dist-1883d0992ff0.js";
import { n as d, t as f } from "./chatgpt-code-block-editor-theme-d17565c90d9d.js";
function p(e) {
  let t = (0, h.c)(6),
    { content: n, fileName: r } = e,
    [i, a] = (0, g.useState)(null),
    s,
    c;
  (t[0] !== i || t[1] !== n || t[2] !== r
    ? ((s = () => {
        if (i == null) return;
        let e = new o({
          parent: i,
          doc: n,
          extensions: [v, o.contentAttributes.of({ "aria-label": r, tabindex: `0` })],
        });
        return () => e.destroy();
      }),
      (c = [i, n, r]),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c))
    : ((s = t[3]), (c = t[4])),
    (0, g.useLayoutEffect)(s, c));
  let l;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, _.jsx)(`div`, {
          ref: a,
          className: `h-full min-h-0 w-full overflow-auto bg-surface text-start text-sm`,
          dir: `ltr`,
          onPointerDown: m,
        })),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function m(e) {
  return e.stopPropagation();
}
var h, g, _, v;
function y() {
  return (y = e(() => {
    ((h = t()),
      u(),
      c(),
      i(),
      (g = r()),
      d(),
      (_ = n()),
      (v = [
        o.theme({
          ".cm-content": { lineHeight: `var(--text-sm--line-height)` },
          ".text-codex-syntax-string": { color: `light-dark(#2c6732, var(--color-codex-syntax-string))` },
        }),
        f,
        l(),
        a(),
        s.readOnly.of(!0),
        o.editable.of(!1),
        o.lineWrapping,
      ]));
  }))();
}
y();
export { p as LibraryJsonPreview };
//# sourceMappingURL=library-json-preview-d76cfc5aa1f7.js.map
