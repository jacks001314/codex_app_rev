import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CAt as t,
  FAt as n,
  FOt as r,
  IOt as i,
  LAt as a,
  LOt as o,
  OAt as s,
  POt as c,
  RAt as l,
  ZDt as u,
  _Mt as d,
  cOt as f,
  dOt as p,
  gMt as m,
  lOt as h,
  oOt as g,
  rOt as _,
  sOt as v,
  tOt as y,
  xAt as b,
  xMt as x,
  yMt as S,
  yzt as C,
  zAt as w,
} from "./app-shared-bbfeca5e5737.js";
function T(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function E(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
  }
  return r;
}
function D(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function O(e, t) {
  let { x: n, y: r } = e,
    i = !1,
    a = t.at(-1);
  for (let e of t)
    (a && e.y > r != a.y > r && n < ((a.x - e.x) * (r - e.y)) / (a.y - e.y) + e.x && (i = !i), (a = e));
  return i;
}
function k(e) {
  let t = e.slice();
  return (t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y))), A(t));
}
function A(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n of e) {
    for (; t.length >= 2;) {
      let e = t.at(-1),
        r = t.at(-2);
      if (e && r && (e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  t.pop();
  let n = [];
  for (let t of [...e].reverse()) {
    for (; n.length >= 2;) {
      let e = n.at(-1),
        r = n.at(-2);
      if (e && r && (e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x)) n.pop();
      else break;
    }
    n.push(t);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0]?.x === n[0]?.x && t[0]?.y === n[0]?.y ? t : t.concat(n)
  );
}
var j;
function M() {
  return (M = e(() => {
    j = (e, t) => {
      let n = e.currentTarget;
      if (!(n instanceof HTMLElement)) return [];
      let r = { x: e.clientX, y: e.clientY },
        i = E(r, T(r, n.getBoundingClientRect())),
        a = D(t.getBoundingClientRect());
      return k([...i, ...a]);
    };
  }))();
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = C()),
      (P = (0, N.createContext)(null)),
      (F = () => {
        let e = (0, N.use)(P);
        if (!e) throw Error(`Popover components must be wrapped in <Popover />`);
        return e;
      }));
  }))();
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    ((L = `_Popover_oe2a7_2`),
      (R = `_shake_oe2a7_2`),
      (z = `_Transition_oe2a7_2`),
      (B = { Popover: L, shake: R, Transition: z }));
  }))();
}
var H, U, W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    (d(),
      p(),
      (H = C()),
      t(),
      g(),
      f(),
      a(),
      y(),
      u(),
      M(),
      I(),
      V(),
      (U = x()),
      (W = ({ open: e, onOpenChange: t, showOnHover: n = !1, hoverOpenDelay: r = 150, children: a }) => {
        let [o, c] = (0, H.useState)(!1),
          [l, u] = (0, H.useState)(!1),
          d = (0, H.useRef)(null),
          [f, p] = (0, H.useState)(null),
          m = (0, H.useRef)(null),
          g = (0, H.useRef)(void 0),
          _ = (0, H.useRef)(!1),
          v = (0, H.useRef)(!1),
          y = e ?? o,
          [b, x] = (0, H.useState)(!1);
        s(() => x(!1), b ? 500 : null);
        let S = h(t),
          C = h((e) => {
            (clearTimeout(g.current),
              y !== e &&
                (e || (u(!1), n && _.current && d.current?.focus(), (_.current = !1)),
                S.current?.(e),
                c(e),
                n && x(e)));
          }),
          w = (0, H.useCallback)(
            (e) => {
              C.current(e);
            },
            [C],
          ),
          T = (0, H.useCallback)(() => {
            g.current = setTimeout(() => w(!0), r);
          }, [w, r]),
          E = (0, H.useCallback)(() => {
            clearTimeout(g.current);
          }, []);
        (0, H.useEffect)(
          () => () => {
            clearTimeout(g.current);
          },
          [],
        );
        let D = (0, H.useMemo)(
          () => ({
            open: y,
            setOpen: w,
            shake: l,
            setShake: u,
            showOnHover: n,
            temporarilyPreventClickToClose: b,
            onTriggerEnter: T,
            onTriggerLeave: E,
            isPointerInTransitRef: v,
            triggerRef: d,
            triggerElement: f,
            setTriggerElement: p,
            contentRef: m,
            hoverOpenFocusedWithTab: _,
          }),
          [y, w, l, u, n, b, _, v, f, T, E],
        );
        return (0, U.jsx)(P, {
          value: D,
          children: (0, U.jsx)(i, { open: y, onOpenChange: w, modal: !1, children: a }),
        });
      }),
      (G = ({ children: e, onPointerDown: t, onClick: n }) => {
        let {
            setOpen: r,
            showOnHover: i,
            temporarilyPreventClickToClose: a,
            onTriggerEnter: s,
            onTriggerLeave: c,
            isPointerInTransitRef: l,
            triggerRef: u,
            setTriggerElement: d,
            contentRef: f,
          } = F(),
          p = (0, H.useRef)(!1),
          m = (0, H.useCallback)(
            (e) => {
              ((u.current = e), d(e));
            },
            [u, d],
          ),
          h = (e) => {
            e.currentTarget.nodeName.toLocaleLowerCase() !== `a` &&
              a &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (0, U.jsx)(o, {
          asChild: !0,
          ref: m,
          onPointerDown: (e) => {
            (h(e), t?.(e));
          },
          onClick: (e) => {
            (h(e), n?.(e));
          },
          onPointerMove: i
            ? (e) => {
                e.pointerType !== `touch` && !p.current && !l.current && (s(), (p.current = !0));
              }
            : void 0,
          onPointerLeave: i
            ? () => {
                p.current &&= (c(), !1);
              }
            : void 0,
          onFocus: i ? () => r(!0) : void 0,
          onBlur: i
            ? () => {
                setTimeout(() => {
                  f.current?.contains(document.activeElement) || r(!1);
                }, 50);
              }
            : void 0,
          children: e,
        });
      }),
      (K = ({
        children: e,
        avoidCollisions: t,
        width: r,
        minWidth: i,
        maxWidth: a,
        side: o,
        sideOffset: s = 8,
        align: u,
        alignOffset: d,
        translucent: f,
        className: p,
        autoFocus: h = !0,
        onCloseAutoFocus: g,
        preventCloseOnFocusOutside: _ = !1,
      }) => {
        let { showOnHover: v, shake: y, contentRef: b } = F();
        return (0, U.jsx)(c, {
          forceMount: !0,
          ref: b,
          className: m(B.Popover, p),
          style: w({ "popover-width": r, "popover-min-width": i, "popover-max-width": a }),
          onCloseAutoFocus: g ?? (v ? l : void 0),
          "data-animate": y ? `shake` : void 0,
          "data-translucent": f ? `true` : void 0,
          side: o,
          sideOffset: s,
          align: u,
          alignOffset: d ?? (u === `center` ? 0 : -5),
          avoidCollisions: t ?? !0,
          hideWhenDetached: !0,
          collisionPadding: 20,
          onFocusOutside: _ ? l : void 0,
          onOpenAutoFocus: (e) => {
            e.preventDefault();
            let t = b.current;
            h && !v && t && !t.contains(document.activeElement) && t.focus({ preventScroll: !0 });
          },
          onEscapeKeyDown: l,
          onKeyDown: (e) => {
            let t = b.current;
            if (t && e.target === t && e.key === `Tab` && e.shiftKey) {
              (e.preventDefault(), e.stopPropagation());
              let r = n(t);
              r[r.length - 1]?.focus();
            }
          },
          children: e,
        });
      }),
      (q = (e) => {
        let {
            setOpen: t,
            triggerRef: r,
            contentRef: i,
            isPointerInTransitRef: a,
            hoverOpenFocusedWithTab: o,
          } = F(),
          [s, c] = (0, H.useState)(null),
          l = (0, H.useCallback)(() => {
            (c(null), (a.current = !1));
          }, [a]),
          u = (0, H.useCallback)(
            (e, t) => {
              let n = j(e, t);
              (c(n), (a.current = !0));
            },
            [a],
          );
        return (
          (0, H.useEffect)(() => () => l(), [l]),
          (0, H.useEffect)(() => {
            let e = r.current,
              t = i.current;
            if (!e || !t) return;
            let n = (e) => u(e, t),
              a = (t) => u(t, e);
            return (
              e.addEventListener(`pointerleave`, n),
              t.addEventListener(`pointerleave`, a),
              () => {
                (e.removeEventListener(`pointerleave`, n), t.removeEventListener(`pointerleave`, a));
              }
            );
          }, [i, r, u, l]),
          (0, H.useEffect)(() => {
            if (!s) return;
            let e = (e) => {
              let n = r.current,
                a = i.current,
                o = e.target;
              if (!(o instanceof Element)) return;
              let c = { x: e.clientX, y: e.clientY },
                u = n?.contains(o) || a?.contains(o),
                d = !O(c, s),
                f = o.hasAttribute(`aria-haspopup`);
              u ? l() : (d || f) && (l(), t(!1));
            };
            return (
              document.addEventListener(`pointermove`, e),
              () => document.removeEventListener(`pointermove`, e)
            );
          }, [s, t, l, r, i]),
          (0, H.useEffect)(() => {
            let e = (t) => {
              if (i.current && t.key === `Tab` && !t.shiftKey) {
                let [r] = n(i.current);
                r &&
                  (t.preventDefault(),
                  r.focus(),
                  (o.current = !0),
                  document.removeEventListener(`keydown`, e));
              }
            };
            return (
              document.addEventListener(`keydown`, e),
              () => {
                document.removeEventListener(`keydown`, e);
              }
            );
          }, [i, o]),
          (0, U.jsx)(K, { ...e })
        );
      }),
      (J = (e) => {
        let { open: t, showOnHover: n, setOpen: i, triggerElement: a } = F(),
          o = _() ?? a?.closest(`[role="dialog"]`) ?? void 0;
        return (
          v(t, () => {
            i(!1);
          }),
          (0, U.jsx)(r, {
            forceMount: !0,
            container: o,
            children: (0, U.jsx)(b, {
              enterDuration: 600,
              exitDuration: 300,
              className: B.Transition,
              children:
                t && (n ? (0, U.jsx)(q, { ...e }, `popover-hover`) : (0, U.jsx)(K, { ...e }, `popover`)),
            }),
          })
        );
      }),
      (W.Trigger = G),
      (W.Content = J));
  }))();
}
function X() {
  return (X = e(() => {
    (C(), S(), a(), I());
  }))();
}
function Z() {
  return (Z = e(() => {
    (Y(), X());
  }))();
}
export { W as n, Y as r, Z as t };
//# sourceMappingURL=popover-51c476f4ed69.js.map
