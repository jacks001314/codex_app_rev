import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  FBt as n,
  FTt as r,
  ITt as i,
  LNt as a,
  PBt as o,
  Uz as s,
  Wz as c,
  dM as l,
  uM as u,
} from "./app-shared-2feb3d4c6fcc.js";
function d(e) {
  let n = (0, p.c)(22),
    { children: r, open: a, side: o, animateHeight: s } = e,
    l = s !== void 0 && s,
    d = c(),
    g = (0, m.useRef)(null),
    _,
    v;
  (n[0] !== l || n[1] !== a || n[2] !== d
    ? ((_ = () => {
        let e = g.current,
          n = e?.firstElementChild;
        if (!l || !a || e == null || !(n instanceof HTMLElement)) return;
        let r = n.style.height,
          i = 0,
          o,
          s = 0,
          c = !1,
          u = () => {
            if (document.hidden) return;
            if (o?.playState === `running`) {
              c = !0;
              return;
            }
            if ([...n.querySelectorAll(`img`)].some(f)) return;
            let e = i === 0 ? 0 : parseFloat(getComputedStyle(n).height);
            n.style.height = r;
            let a = parseFloat(getComputedStyle(n).height);
            ((n.style.height = `${a || i}px`),
              a &&
                a !== i &&
                ((i = a),
                !d &&
                  ((o = n.animate([{ height: `${e}px` }, { height: `${a}px` }], {
                    duration: 300,
                    easing: `cubic-bezier(${t.join(`,`)})`,
                  })),
                  (o.onfinish = () => {
                    ((o = void 0), c && ((c = !1), u()));
                  }))));
          },
          p = () => {
            (cancelAnimationFrame(s), (s = requestAnimationFrame(u)));
          },
          m = new ResizeObserver(p);
        m.observe(e);
        let h = new MutationObserver(p);
        (h.observe(n, {
          childList: !0,
          subtree: !0,
          characterData: !0,
          attributes: !0,
          attributeFilter: [`src`],
        }),
          n.addEventListener(`load`, p, !0),
          n.addEventListener(`error`, p, !0));
        let _ = () => {
          document.hidden ? (o?.cancel(), cancelAnimationFrame(s)) : u();
        };
        return (
          document.addEventListener(`visibilitychange`, _),
          u(),
          () => {
            (h.disconnect(),
              m.disconnect(),
              n.removeEventListener(`load`, p, !0),
              n.removeEventListener(`error`, p, !0),
              document.removeEventListener(`visibilitychange`, _),
              cancelAnimationFrame(s),
              o != null && ((o.onfinish = null), o.cancel()),
              (n.style.height = r));
          }
        );
      }),
      (v = [l, a, d]),
      (n[0] = l),
      (n[1] = a),
      (n[2] = d),
      (n[3] = _),
      (n[4] = v))
    : ((_ = n[3]), (v = n[4])),
    (0, m.useLayoutEffect)(_, v));
  let y = o === `left` ? `-100%` : `100%`,
    b = !a,
    x = !a,
    S;
  n[5] !== y || n[6] !== a
    ? ((S = !a && { display: `none`, x: y }), (n[5] = y), (n[6] = a), (n[7] = S))
    : (S = n[7]);
  let C = a ? `open` : `closed`,
    w;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { x: 0, display: `block` }), (n[8] = w))
    : (w = n[8]);
  let T;
  n[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { display: `none` }), (n[9] = T)) : (T = n[9]);
  let E;
  n[10] === y
    ? (E = n[11])
    : ((E = { open: w, closed: { x: y, transitionEnd: T } }), (n[10] = y), (n[11] = E));
  let D;
  n[12] === d ? (D = n[13]) : ((D = d ? { duration: 0 } : u), (n[12] = d), (n[13] = D));
  let O;
  return (
    n[14] !== r || n[15] !== E || n[16] !== D || n[17] !== b || n[18] !== x || n[19] !== S || n[20] !== C
      ? ((O = (0, h.jsx)(i.div, {
          ref: g,
          className: `absolute inset-0`,
          "aria-hidden": b,
          inert: x,
          initial: S,
          animate: C,
          variants: E,
          transition: D,
          children: r,
        })),
        (n[14] = r),
        (n[15] = E),
        (n[16] = D),
        (n[17] = b),
        (n[18] = x),
        (n[19] = S),
        (n[20] = C),
        (n[21] = O))
      : (O = n[21]),
    O
  );
}
function f(e) {
  return !e.complete;
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = o()), r(), (m = n()), s(), l(), (h = a()));
  }))();
}
export { g as n, d as t };
//# sourceMappingURL=thumbnail-panel-f8937e1a1283.js.map
