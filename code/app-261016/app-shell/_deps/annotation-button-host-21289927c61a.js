import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { WAt as t, ast as n, ist as r, zAt as i } from "./app-shared-2feb3d4c6fcc.js";
function a(e, n, i) {
  let a = r?.browserHost;
  if (a == null) return () => {};
  let o = () => {
      let { x: t, y: n, width: r, height: i } = e.getBoundingClientRect();
      return { x: t, y: n, width: r, height: i };
    },
    s = !1,
    c = o(),
    l = a.registerAnnotationButton(n, c, (t) => {
      !s && !e.disabled && e.contains(document.elementFromPoint(t.x, t.y)) && i();
    });
  Promise.resolve(l).catch(() => {});
  let u = () => {
      let e = o();
      (e.x !== c.x || e.y !== c.y || e.width !== c.width || e.height !== c.height) &&
        ((c = e), Promise.resolve(l.updateBounds(c)).catch(() => {}));
    },
    d,
    f = () => {
      (d?.(), (d = t(e, null, u, { elementResize: !1 })));
    },
    p = (t) => {
      t.target instanceof Element && t.target.contains(e) && f();
    },
    m = new ResizeObserver(f);
  return (
    m.observe(e),
    document.addEventListener(`transitionend`, p, !0),
    document.addEventListener(`transitioncancel`, p, !0),
    () => {
      ((s = !0),
        m.disconnect(),
        document.removeEventListener(`transitionend`, p, !0),
        document.removeEventListener(`transitioncancel`, p, !0),
        d?.(),
        l[Symbol.dispose]());
    }
  );
}
function o() {
  return (o = e(() => {
    (i(), n());
  }))();
}
export { o as n, a as t };
//# sourceMappingURL=annotation-button-host-21289927c61a.js.map
