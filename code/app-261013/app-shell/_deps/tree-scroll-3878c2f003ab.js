import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, gMt as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import { Dvn as o, Nvn as s, O1 as c, k1 as l } from "./app-initial-5851df3f6cb1.js";
function u(e) {
  let t = (0, d.c)(28),
    { children: r, focusActivePage: i, header: a, pageId: s, rootPageId: c, navigationSession: u } = e,
    m = i !== void 0 && i,
    h = (0, f.useRef)(null),
    g = (0, f.useRef)(!1),
    [_, v] = (0, f.useState)(!1),
    y;
  t[0] !== m || t[1] !== s || t[2] !== c
    ? ((y = () => {
        let e = h.current;
        if (e == null || s == null || (s === c && !m)) return;
        let t = () => {
            (a.disconnect(),
              o.disconnect(),
              e.removeEventListener(`wheel`, n),
              e.removeEventListener(`pointerdown`, n),
              e.removeEventListener(`keydown`, n),
              e.ownerDocument.removeEventListener(`pointerdown`, n),
              e.ownerDocument.removeEventListener(`keydown`, n),
              e.ownerDocument.removeEventListener(`focusin`, r));
          },
          n = () => {
            ((g.current = !0), t());
          },
          r = (t) => {
            t.target instanceof Node && !e.contains(t.target) && n();
          },
          i = () => {
            let n = e.querySelector(`[aria-current="page"]`);
            if (
              n == null ||
              (m && !g.current && ((g.current = !0), n.focus({ preventScroll: !0 })), e.clientHeight === 0)
            )
              return;
            let r = e.getBoundingClientRect();
            if (r.bottom <= 0) return;
            let i = n.getBoundingClientRect(),
              a = r.height / e.offsetHeight,
              o = r.top + parseFloat(getComputedStyle(e).scrollPaddingTop) * a;
            (i.top < o
              ? (e.scrollTop += (i.top - o) / a)
              : i.bottom > r.bottom && (e.scrollTop += (i.bottom - r.bottom) / a),
              v(e.scrollTop > 0),
              t());
          },
          a = new MutationObserver(i),
          o = new ResizeObserver(i);
        a.observe(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`aria-current`] });
        let l = e.closest(`[data-radix-popper-content-wrapper]`);
        return (
          l != null && a.observe(l, { attributes: !0, attributeFilter: [`style`] }),
          o.observe(e),
          e.firstElementChild != null && o.observe(e.firstElementChild),
          e.addEventListener(`wheel`, n, { passive: !0 }),
          e.addEventListener(`pointerdown`, n),
          e.addEventListener(`keydown`, n),
          m &&
            !g.current &&
            (e.ownerDocument.addEventListener(`pointerdown`, n),
            e.ownerDocument.addEventListener(`keydown`, n),
            e.ownerDocument.addEventListener(`focusin`, r)),
          i(),
          t
        );
      }),
      (t[0] = m),
      (t[1] = s),
      (t[2] = c),
      (t[3] = y))
    : (y = t[3]);
  let b;
  (t[4] !== m || t[5] !== u || t[6] !== s || t[7] !== c
    ? ((b = [m, u, s, c]), (t[4] = m), (t[5] = u), (t[6] = s), (t[7] = c), (t[8] = b))
    : (b = t[8]),
    (0, f.useLayoutEffect)(y, b));
  let x = _
      ? `[--sidebar-scroll-header-spacing:--spacing(1)] [--sidebar-scroll-header-fade-distance:--spacing(4)] [--sidebar-scroll-header-fade-start:--spacing(1)]`
      : `[--sidebar-scroll-header-spacing:1px] [--sidebar-scroll-header-fade-distance:1px] [--sidebar-scroll-header-fade-start:0px]`,
    S;
  t[9] === x ? (S = t[10]) : ((S = n(`flex min-h-0 flex-1 flex-col`, x)), (t[9] = x), (t[10] = S));
  let C;
  t[11] !== a || t[12] !== u || t[13] !== _
    ? ((C =
        a != null &&
        (0, p.jsx)(o, { scrolled: _, surface: u == null ? `content` : `elevated`, children: a })),
      (t[11] = a),
      (t[12] = u),
      (t[13] = _),
      (t[14] = C))
    : (C = t[14]);
  let w = a != null && `-mt-(--sidebar-scroll-header-spacing)`,
    T;
  t[15] === w
    ? (T = t[16])
    : ((T = n(
        `vertical-scroll-fade-mask scroll-pb-row-x relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto scroll-pt-[calc(var(--sidebar-scroll-header-mask-start)+var(--sidebar-scroll-header-mask-distance))] pb-row-x`,
        w,
        l.headerFadeMask,
      )),
      (t[15] = w),
      (t[16] = T));
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => v(e.currentTarget.scrollTop > 0)), (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === r
    ? (D = t[19])
    : ((D = (0, p.jsx)(`div`, { className: `px-row-x`, children: r })), (t[18] = r), (t[19] = D));
  let O;
  t[20] !== u || t[21] !== D || t[22] !== T
    ? ((O = (0, p.jsx)(`div`, {
        ref: h,
        className: T,
        "data-navigation-session": u,
        "data-space-tree-scroll": !0,
        onScroll: E,
        children: D,
      })),
      (t[20] = u),
      (t[21] = D),
      (t[22] = T),
      (t[23] = O))
    : (O = t[23]);
  let k;
  return (
    t[24] !== O || t[25] !== S || t[26] !== C
      ? ((k = (0, p.jsxs)(`div`, { className: S, children: [C, O] })),
        (t[24] = O),
        (t[25] = S),
        (t[26] = C),
        (t[27] = k))
      : (k = t[27]),
    k
  );
}
var d, f, p;
function m() {
  return (m = e(() => {
    ((d = r()), t(), (f = a()), s(), c(), (p = i()));
  }))();
}
export { m as n, u as t };
//# sourceMappingURL=tree-scroll-3878c2f003ab.js.map
