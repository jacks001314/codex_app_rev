import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { xMt as t, yzt as n } from "./app-shared-bbfeca5e5737.js";
function r({ children: e, viewportInsets: t }) {
  return (0, i.jsx)(`div`, {
    className: `popcorn-review-bar-overlay`,
    "data-popcorn-review-bar": `true`,
    style: t,
    children: (0, i.jsx)(`div`, { className: `popcorn-review-bar-overlay-content`, children: e }),
  });
}
var i;
function a() {
  return (a = e(() => {
    i = t();
  }))();
}
function o({ active: e, disabled: t = !1, onExit: n }) {
  let r = (0, s.useEffectEvent)((e) => {
    if (
      e.key !== `Escape` ||
      e.defaultPrevented ||
      e.isComposing ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    )
      return;
    let r = e.target;
    (r instanceof Element &&
      r.closest(
        `[data-testid="popcorn-annotation-editor"], [role="dialog"], [role="alertdialog"], [role="menu"], [role="listbox"]`,
      )) ||
      (e.preventDefault(), e.stopImmediatePropagation(), t || n());
  });
  (0, s.useEffect)(() => {
    if (e)
      return (window.addEventListener(`keydown`, r, !0), () => window.removeEventListener(`keydown`, r, !0));
  }, [e]);
}
var s;
function c() {
  return (c = e(() => {
    s = n();
  }))();
}
export { a as i, o as n, r, c as t };
//# sourceMappingURL=use-annotation-mode-exit-4d0f0fd2e6a2.js.map
