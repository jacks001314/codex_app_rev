import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { dwn as t, hwn as n, pwn as r } from "./app-initial-5851df3f6cb1.js";
function i(e, t, i) {
  let o = e.get(n.tabById$, `ecosystem-focused:${t}`);
  a(o) &&
    r(e, o.tabType, {
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
//# sourceMappingURL=widget-focused-object-transfer-78a1edf05794.js.map
