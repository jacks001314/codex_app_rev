import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ADn as t, MDn as n, PDn as r } from "./app-initial-ad16eaadf81f.js";
function i(e, t, i) {
  let o = e.get(r.tabById$, `ecosystem-focused:${t}`);
  a(o) &&
    n(e, o.tabType, {
      id: `ecosystem-focused:${i}`,
      replaceTabId: o.tabId,
      title: o.title,
      revealAndFocus: !1,
      props: { ...o.props, pendingSourceId: i },
    });
}
function a(e) {
  return e?.tabType.kind === `ecosystem-focused-object`;
}
function o() {
  return (o = e(() => {
    t();
  }))();
}
export { a as n, i as r, o as t };
//# sourceMappingURL=widget-focused-object-transfer-942a157a7ac8.js.map
