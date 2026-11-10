import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Akt as t,
  Dkt as n,
  Ekt as r,
  FBt as i,
  FNt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  Okt as l,
  Skt as u,
  Tkt as d,
  Ujt as f,
  Vjt as p,
  Yjt as m,
  aMt as h,
  bkt as g,
  eAt as _,
  gkt as v,
  iMt as y,
  nAt as b,
  nMt as x,
  oMt as S,
  rAt as C,
  tAt as w,
} from "./app-shared-2feb3d4c6fcc.js";
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
    ((N = i()),
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
    ((L = `_Popover_km814_2`),
      (R = `_shake_km814_2`),
      (z = `_Transition_km814_2`),
      (B = { Popover: L, shake: R, Transition: z }));
  }))();
}
var H, U, W, G, K, q, J;
function Y() {
  return (Y = e(() => {
    (c(),
      t(),
      (H = i()),
      f(),
      d(),
      n(),
      y(),
      g(),
      v(),
      M(),
      I(),
      V(),
      (U = o()),
      (W = ({ open: e, onOpenChange: t, showOnHover: n = !1, hoverOpenDelay: r = 150, children: i }) => {
        let [a, o] = (0, H.useState)(!1),
          [s, c] = (0, H.useState)(!1),
          u = (0, H.useRef)(null),
          [d, f] = (0, H.useState)(null),
          p = (0, H.useRef)(null),
          h = (0, H.useRef)(void 0),
          g = (0, H.useRef)(!1),
          _ = (0, H.useRef)(!1),
          v = e ?? a,
          [y, x] = (0, H.useState)(!1);
        m(() => x(!1), y ? 500 : null);
        let S = l(t),
          C = l((e) => {
            (clearTimeout(h.current),
              v !== e &&
                (e || (c(!1), n && g.current && u.current?.focus(), (g.current = !1)),
                S.current?.(e),
                o(e),
                n && x(e)));
          }),
          w = (0, H.useCallback)(
            (e) => {
              C.current(e);
            },
            [C],
          ),
          T = (0, H.useCallback)(() => {
            h.current = setTimeout(() => w(!0), r);
          }, [w, r]),
          E = (0, H.useCallback)(() => {
            clearTimeout(h.current);
          }, []);
        (0, H.useEffect)(
          () => () => {
            clearTimeout(h.current);
          },
          [],
        );
        let D = (0, H.useMemo)(
          () => ({
            open: v,
            setOpen: w,
            shake: s,
            setShake: c,
            showOnHover: n,
            temporarilyPreventClickToClose: y,
            onTriggerEnter: T,
            onTriggerLeave: E,
            isPointerInTransitRef: _,
            triggerRef: u,
            triggerElement: d,
            setTriggerElement: f,
            contentRef: p,
            hoverOpenFocusedWithTab: g,
          }),
          [v, w, s, c, n, y, g, _, d, T, E],
        );
        return (0, U.jsx)(P, {
          value: D,
          children: (0, U.jsx)(b, { open: v, onOpenChange: w, modal: !1, children: i }),
        });
      }),
      (G = ({ children: e, onPointerDown: t, onClick: n }) => {
        let {
            setOpen: r,
            showOnHover: i,
            temporarilyPreventClickToClose: a,
            onTriggerEnter: o,
            onTriggerLeave: s,
            isPointerInTransitRef: c,
            triggerRef: l,
            setTriggerElement: u,
            contentRef: d,
          } = F(),
          f = (0, H.useRef)(!1),
          p = (0, H.useCallback)(
            (e) => {
              ((l.current = e), u(e));
            },
            [l, u],
          ),
          m = (e) => {
            e.currentTarget.nodeName.toLocaleLowerCase() !== `a` &&
              a &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (0, U.jsx)(C, {
          asChild: !0,
          ref: p,
          onPointerDown: (e) => {
            (m(e), t?.(e));
          },
          onClick: (e) => {
            (m(e), n?.(e));
          },
          onPointerMove: i
            ? (e) => {
                e.pointerType !== `touch` && !f.current && !c.current && (o(), (f.current = !0));
              }
            : void 0,
          onPointerLeave: i
            ? () => {
                f.current &&= (s(), !1);
              }
            : void 0,
          onFocus: i ? () => r(!0) : void 0,
          onBlur: i
            ? () => {
                setTimeout(() => {
                  d.current?.contains(document.activeElement) || r(!1);
                }, 50);
              }
            : void 0,
          children: e,
        });
      }),
      (K = ({
        children: e,
        avoidCollisions: t,
        width: n,
        minWidth: r,
        maxWidth: i,
        side: a,
        sideOffset: o = 8,
        align: c,
        alignOffset: l,
        translucent: u,
        className: d,
        autoFocus: f = !0,
        onCloseAutoFocus: p,
        preventCloseOnFocusOutside: m = !1,
      }) => {
        let { showOnHover: g, shake: v, contentRef: y } = F();
        return (0, U.jsx)(_, {
          forceMount: !0,
          ref: y,
          className: s(B.Popover, d),
          style: S({ "popover-width": n, "popover-min-width": r, "popover-max-width": i }),
          onCloseAutoFocus: p ?? (g ? h : void 0),
          "data-animate": v ? `shake` : void 0,
          "data-translucent": u ? `true` : void 0,
          side: a,
          sideOffset: o,
          align: c,
          alignOffset: l ?? (c === `center` ? 0 : -5),
          avoidCollisions: t ?? !0,
          hideWhenDetached: !0,
          collisionPadding: 20,
          onFocusOutside: m ? h : void 0,
          onOpenAutoFocus: (e) => {
            e.preventDefault();
            let t = y.current;
            f && !g && t && !t.contains(document.activeElement) && t.focus({ preventScroll: !0 });
          },
          onEscapeKeyDown: h,
          onKeyDown: (e) => {
            let t = y.current;
            if (t && e.target === t && e.key === `Tab` && e.shiftKey) {
              (e.preventDefault(), e.stopPropagation());
              let n = x(t);
              n[n.length - 1]?.focus();
            }
          },
          children: e,
        });
      }),
      (q = (e) => {
        let {
            setOpen: t,
            triggerRef: n,
            contentRef: r,
            isPointerInTransitRef: i,
            hoverOpenFocusedWithTab: a,
          } = F(),
          [o, s] = (0, H.useState)(null),
          c = (0, H.useCallback)(() => {
            (s(null), (i.current = !1));
          }, [i]),
          l = (0, H.useCallback)(
            (e, t) => {
              let n = j(e, t);
              (s(n), (i.current = !0));
            },
            [i],
          );
        return (
          (0, H.useEffect)(() => () => c(), [c]),
          (0, H.useEffect)(() => {
            let e = n.current,
              t = r.current;
            if (!e || !t) return;
            let i = (e) => l(e, t),
              a = (t) => l(t, e);
            return (
              e.addEventListener(`pointerleave`, i),
              t.addEventListener(`pointerleave`, a),
              () => {
                (e.removeEventListener(`pointerleave`, i), t.removeEventListener(`pointerleave`, a));
              }
            );
          }, [r, n, l, c]),
          (0, H.useEffect)(() => {
            if (!o) return;
            let e = (e) => {
              let i = n.current,
                a = r.current,
                s = e.target;
              if (!(s instanceof Element)) return;
              let l = { x: e.clientX, y: e.clientY },
                u = i?.contains(s) || a?.contains(s),
                d = !O(l, o),
                f = s.hasAttribute(`aria-haspopup`);
              u ? c() : (d || f) && (c(), t(!1));
            };
            return (
              document.addEventListener(`pointermove`, e),
              () => document.removeEventListener(`pointermove`, e)
            );
          }, [o, t, c, n, r]),
          (0, H.useEffect)(() => {
            let e = (t) => {
              if (r.current && t.key === `Tab` && !t.shiftKey) {
                let [n] = x(r.current);
                n &&
                  (t.preventDefault(),
                  n.focus(),
                  (a.current = !0),
                  document.removeEventListener(`keydown`, e));
              }
            };
            return (
              document.addEventListener(`keydown`, e),
              () => {
                document.removeEventListener(`keydown`, e);
              }
            );
          }, [r, a]),
          (0, U.jsx)(K, { ...e })
        );
      }),
      (J = (e) => {
        let { open: t, showOnHover: n, setOpen: i, triggerElement: a } = F(),
          o = u() ?? a?.closest(`[role="dialog"]`) ?? void 0;
        return (
          r(t, () => {
            i(!1);
          }),
          (0, U.jsx)(w, {
            forceMount: !0,
            container: o,
            children: (0, U.jsx)(p, {
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
    (i(), a(), y(), I());
  }))();
}
function Z() {
  return (Z = e(() => {
    (Y(), X());
  }))();
}
export { W as n, Y as r, Z as t };
//# sourceMappingURL=popover-df132560e617.js.map
