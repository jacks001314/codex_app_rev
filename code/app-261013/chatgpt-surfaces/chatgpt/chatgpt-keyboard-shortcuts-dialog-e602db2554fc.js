import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _O as n,
  cO as r,
  fO as i,
  jDt as a,
  mO as o,
  oO as s,
  vO as c,
  vzt as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
import { n as f, t as p } from "./keyboard-shortcuts-settings-d2d4f6ef52f3.js";
function m(e) {
  let i = (0, g.c)(4),
    { onOpenChange: a } = e,
    c = (0, _.useRef)(null),
    l;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = {
        "aria-describedby": void 0,
        onOpenAutoFocus: () => {
          let e = document.activeElement;
          for (; e?.shadowRoot?.activeElement != null;) e = e.shadowRoot.activeElement;
          c.current = e instanceof HTMLElement ? e : null;
        },
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), c.current?.focus());
        },
        onEscapeKeyDown: h,
      }),
      (i[0] = l))
    : (l = i[0]);
  let u;
  i[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, v.jsxs)(s, {
        size: `scrollable`,
        variant: `chatgpt`,
        children: [
          (0, v.jsx)(r, {
            className: `shrink-0 px-12 pt-6 pb-2`,
            titleClassName: `text-center text-base leading-6`,
            titleSize: `base`,
            title: (0, v.jsx)(n, {
              children: (0, v.jsx)(t, {
                id: `keyboardShortcutsDialog.title`,
                defaultMessage: `Keyboard shortcuts`,
                description: `Title for the active keyboard shortcuts dialog`,
              }),
            }),
          }),
          (0, v.jsx)(p, { embedded: !0, presentation: `chatgpt` }),
        ],
      })),
      (i[1] = u))
    : (u = i[1]);
  let d;
  return (
    i[2] === a
      ? (d = i[3])
      : ((d = (0, v.jsx)(o, {
          open: !0,
          onOpenChange: a,
          contentProps: l,
          size: `wide`,
          variant: `chatgpt`,
          children: u,
        })),
        (i[2] = a),
        (i[3] = d)),
    d
  );
}
function h(e) {
  e.target instanceof Element &&
    e.target.closest(`[data-codex-shortcut-capture]`) != null &&
    e.preventDefault();
}
var g, _, v;
function y() {
  return (y = e(() => {
    ((g = l()), (_ = d()), a(), c(), i(), f(), (v = u()));
  }))();
}
y();
export { m as ChatGptKeyboardShortcutsDialog };
//# sourceMappingURL=chatgpt-keyboard-shortcuts-dialog-e602db2554fc.js.map
