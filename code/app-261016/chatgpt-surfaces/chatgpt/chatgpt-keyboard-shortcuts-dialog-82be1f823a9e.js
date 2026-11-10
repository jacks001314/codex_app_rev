import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  LNt as a,
  PBt as o,
  RO as s,
  WO as c,
  XOt as l,
  qO as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as f, t as p } from "./keyboard-shortcuts-settings-e8d1446aff5a.js";
function m(e) {
  let t = (0, g.c)(4),
    { onOpenChange: n } = e,
    i = (0, _.useRef)(null),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = {
        "aria-describedby": void 0,
        onOpenAutoFocus: () => {
          let e = document.activeElement;
          for (; e?.shadowRoot?.activeElement != null;) e = e.shadowRoot.activeElement;
          i.current = e instanceof HTMLElement ? e : null;
        },
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), i.current?.focus());
        },
        onEscapeKeyDown: h,
      }),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, v.jsxs)(r, {
        size: `scrollable`,
        variant: `chatgpt`,
        children: [
          (0, v.jsx)(s, {
            className: `shrink-0 px-12 pt-6 pb-2`,
            titleClassName: `text-center text-base leading-6`,
            titleSize: `base`,
            title: (0, v.jsx)(u, {
              children: (0, v.jsx)(d, {
                id: `keyboardShortcutsDialog.title`,
                defaultMessage: `Keyboard shortcuts`,
                description: `Title for the active keyboard shortcuts dialog`,
              }),
            }),
          }),
          (0, v.jsx)(p, { embedded: !0, presentation: `chatgpt` }),
        ],
      })),
      (t[1] = o))
    : (o = t[1]);
  let l;
  return (
    t[2] === n
      ? (l = t[3])
      : ((l = (0, v.jsx)(c, {
          open: !0,
          onOpenChange: n,
          contentProps: a,
          size: `wide`,
          variant: `chatgpt`,
          children: o,
        })),
        (t[2] = n),
        (t[3] = l)),
    l
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
    ((g = o()), (_ = t()), l(), i(), n(), f(), (v = a()));
  }))();
}
y();
export { m as ChatGptKeyboardShortcutsDialog };
//# sourceMappingURL=chatgpt-keyboard-shortcuts-dialog-82be1f823a9e.js.map
