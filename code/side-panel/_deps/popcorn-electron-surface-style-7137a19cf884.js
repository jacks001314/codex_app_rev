import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $ln as n,
  Amn as r,
  Bln as i,
  Fln as a,
  Fun as o,
  Iln as s,
  Iun as c,
  Jln as l,
  Lln as u,
  Lun as d,
  Nun as f,
  Pun as p,
  Qln as m,
  Rln as h,
  Rpn as g,
  Vln as _,
  Wln as v,
  Yln as y,
  Zln as b,
  aun as x,
  cun as S,
  dun as C,
  fun as w,
  hmn as T,
  iun as E,
  jun as D,
  kun as O,
  lun as ee,
  nun as te,
  oun as ne,
  pmn as re,
  pun as k,
  run as ie,
  sun as ae,
  uun as oe,
  zln as A,
  zpn as j,
} from "./app-initial-f094ef01c64d.js";
import { an as M, in as N } from "./workbook-92b6031c5f2c.js";
import {
  B as se,
  F as P,
  H as ce,
  I as F,
  J as le,
  K as ue,
  L as de,
  V as I,
  Y as L,
  ct as fe,
  it as pe,
  l as me,
  lt as R,
  nt as he,
  ot as ge,
  q as _e,
  rt as ve,
  s as ye,
  st as be,
  tt as xe,
  z as Se,
} from "./artifact-source-bootstrap-b7ba40702025.js";
import { r as Ce, t as we } from "./annotation-scopes-fbb81b16f7b1.js";
function Te(e, t, n) {
  let r = e.slice();
  return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r);
}
function Ee(e, t) {
  return e.reduce((e, n, r) => {
    let i = t.get(n);
    return (i && (e[r] = i), e);
  }, Array(e.length));
}
function De(e) {
  return e !== null && e >= 0;
}
function Oe(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ke(e) {
  return typeof e == `boolean` ? { draggable: e, droppable: e } : e;
}
function Ae(e, t, n) {
  let r = e[t],
    i = e[t - 1],
    a = e[t + 1];
  return !r || (!i && !a)
    ? 0
    : n < t
      ? i
        ? r.left - (i.left + i.width)
        : a.left - (r.left + r.width)
      : a
        ? a.left - (r.left + r.width)
        : r.left - (i.left + i.width);
}
function je(e) {
  let { children: t, id: n, items: r, strategy: i = Le, disabled: a = !1 } = e,
    { active: o, dragOverlay: s, droppableRects: c, over: l, measureDroppableContainers: u } = b(),
    d = ae(Re, n),
    f = s.rect !== null,
    p = (0, z.useMemo)(() => r.map((e) => (typeof e == `object` && `id` in e ? e.id : e)), [r]),
    m = o != null,
    h = o ? p.indexOf(o.id) : -1,
    g = l ? p.indexOf(l.id) : -1,
    _ = (0, z.useRef)(p),
    v = !Oe(p, _.current),
    y = (g !== -1 && h === -1) || v,
    x = ke(a);
  (ne(() => {
    v && m && u(p);
  }, [v, p, m, u]),
    (0, z.useEffect)(() => {
      _.current = p;
    }, [p]));
  let S = (0, z.useMemo)(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: x,
      disableTransforms: y,
      items: p,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: Ee(p, c),
      strategy: i,
    }),
    [h, d, x.draggable, x.droppable, y, p, g, c, f, i],
  );
  return z.createElement(ze.Provider, { value: S }, t);
}
function Me(e) {
  let { disabled: t, index: n, node: r, rect: i } = e,
    [a, o] = (0, z.useState)(null),
    s = (0, z.useRef)(n);
  return (
    ne(() => {
      if (!t && n !== s.current && r.current) {
        let e = i.current;
        if (e) {
          let t = l(r.current, { ignoreTransform: !0 }),
            n = {
              x: e.left - t.left,
              y: e.top - t.top,
              scaleX: e.width / t.width,
              scaleY: e.height / t.height,
            };
          (n.x || n.y) && o(n);
        }
      }
      n !== s.current && (s.current = n);
    }, [t, n, r, i]),
    (0, z.useEffect)(() => {
      a && o(null);
    }, [a]),
    a
  );
}
function Ne(e) {
  let {
      animateLayoutChanges: t = Ve,
      attributes: r,
      disabled: i,
      data: a,
      getNewIndex: o = Be,
      id: s,
      strategy: c,
      resizeObserverConfig: l,
      transition: u = He,
    } = e,
    {
      items: d,
      containerId: f,
      activeIndex: p,
      disabled: h,
      disableTransforms: g,
      sortedRects: _,
      overIndex: v,
      useDragOverlay: y,
      strategy: b,
    } = (0, z.useContext)(ze),
    S = Pe(i, h),
    C = d.indexOf(s),
    w = (0, z.useMemo)(
      () => ({ sortable: { containerId: f, index: C, items: d }, ...a }),
      [f, a, C, d],
    ),
    T = (0, z.useMemo)(() => d.slice(d.indexOf(s)), [d, s]),
    {
      rect: D,
      node: O,
      isOver: ee,
      setNodeRef: ne,
    } = n({
      id: s,
      data: w,
      disabled: S.droppable,
      resizeObserverConfig: { updateMeasurementsFor: T, ...l },
    }),
    {
      active: re,
      activatorEvent: k,
      activeNodeRect: ie,
      attributes: ae,
      setNodeRef: oe,
      listeners: A,
      isDragging: j,
      over: M,
      setActivatorNodeRef: N,
      transform: se,
    } = m({ id: s, data: w, attributes: { ...Ge, ...r }, disabled: S.draggable }),
    P = x(ne, oe),
    ce = !!re,
    F = ce && !g && De(p) && De(v),
    le = !y && j,
    ue = F
      ? ((le && F ? se : null) ??
        (c ?? b)({ rects: _, activeNodeRect: ie, activeIndex: p, overIndex: v, index: C }))
      : null,
    de = De(p) && De(v) ? o({ id: s, items: d, activeIndex: p, overIndex: v }) : C,
    I = re?.id,
    L = (0, z.useRef)({ activeId: I, items: d, newIndex: de, containerId: f }),
    fe = d !== L.current.items,
    pe = t({
      active: re,
      containerId: f,
      isDragging: j,
      isSorting: ce,
      id: s,
      index: C,
      items: d,
      newIndex: L.current.newIndex,
      previousItems: L.current.items,
      previousContainerId: L.current.containerId,
      transition: u,
      wasDragging: L.current.activeId != null,
    }),
    me = Me({ disabled: !pe, index: C, node: O, rect: D });
  return (
    (0, z.useEffect)(() => {
      (ce && L.current.newIndex !== de && (L.current.newIndex = de),
        f !== L.current.containerId && (L.current.containerId = f),
        d !== L.current.items && (L.current.items = d));
    }, [ce, de, f, d]),
    (0, z.useEffect)(() => {
      if (I === L.current.activeId) return;
      if (I != null && L.current.activeId == null) {
        L.current.activeId = I;
        return;
      }
      let e = setTimeout(() => {
        L.current.activeId = I;
      }, 50);
      return () => clearTimeout(e);
    }, [I]),
    {
      active: re,
      activeIndex: p,
      attributes: ae,
      data: w,
      rect: D,
      index: C,
      newIndex: de,
      items: d,
      isOver: ee,
      isSorting: ce,
      isDragging: j,
      listeners: A,
      node: O,
      overIndex: v,
      over: M,
      setNodeRef: P,
      setActivatorNodeRef: N,
      setDroppableNodeRef: ne,
      setDraggableNodeRef: oe,
      transform: me ?? ue,
      transition: R(),
    }
  );
  function R() {
    if (me || (fe && L.current.newIndex === C)) return We;
    if (!((le && !E(k)) || !u) && (ce || pe)) return te.Transition.toString({ ...u, property: Ue });
  }
}
function Pe(e, t) {
  return typeof e == `boolean`
    ? { draggable: e, droppable: !1 }
    : { draggable: e?.draggable ?? t.draggable, droppable: e?.droppable ?? t.droppable };
}
var z,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke = e(() => {
    ((z = t(r())),
      y(),
      ie(),
      (Fe = { scaleX: 1, scaleY: 1 }),
      (Ie = (e) => {
        let { rects: t, activeNodeRect: n, activeIndex: r, overIndex: i, index: a } = e,
          o = t[r] ?? n;
        if (!o) return null;
        let s = Ae(t, a, r);
        if (a === r) {
          let e = t[i];
          return e
            ? { x: r < i ? e.left + e.width - (o.left + o.width) : e.left - o.left, y: 0, ...Fe }
            : null;
        }
        return a > r && a <= i
          ? { x: -o.width - s, y: 0, ...Fe }
          : a < r && a >= i
            ? { x: o.width + s, y: 0, ...Fe }
            : { x: 0, y: 0, ...Fe };
      }),
      (Le = (e) => {
        let { rects: t, activeIndex: n, overIndex: r, index: i } = e,
          a = Te(t, r, n),
          o = t[i],
          s = a[i];
        return !s || !o
          ? null
          : {
              x: s.left - o.left,
              y: s.top - o.top,
              scaleX: s.width / o.width,
              scaleY: s.height / o.height,
            };
      }),
      (Re = `Sortable`),
      (ze = z.createContext({
        activeIndex: -1,
        containerId: Re,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: Le,
        disabled: { draggable: !1, droppable: !1 },
      })),
      (Be = (e) => {
        let { id: t, items: n, activeIndex: r, overIndex: i } = e;
        return Te(n, r, i).indexOf(t);
      }),
      (Ve = (e) => {
        let {
          containerId: t,
          isSorting: n,
          wasDragging: r,
          index: i,
          items: a,
          newIndex: o,
          previousItems: s,
          previousContainerId: c,
          transition: l,
        } = e;
        return !l || !r || (s !== a && i === o) ? !1 : n ? !0 : o !== i && t === c;
      }),
      (He = { duration: 200, easing: `ease` }),
      (Ue = `transform`),
      (We = te.Transition.toString({ property: Ue, duration: 0, easing: `linear` })),
      (Ge = { roleDescription: `sortable` }),
      v.Down,
      v.Right,
      v.Up,
      v.Left);
  });
function qe(e) {
  let t = e?.ownerDocument.defaultView;
  if (!e || !t) return it;
  let n = t.getComputedStyle(e);
  return Ze(n, `--color-text-accent`) ?? Ze(n, `--color-accent-blue`) ?? it;
}
function Je(e) {
  let t = Qe(e);
  return t ? `rgb(${t.r}, ${t.g}, ${t.b})` : e;
}
function Ye(e) {
  let t = Qe(e);
  return t ? `rgba(${t.r}, ${t.g}, ${t.b}, ${et})` : at;
}
function Xe(e) {
  return e.includes(`var(`) || e.includes(`color-mix(`);
}
function Ze(e, t) {
  let n = e.getPropertyValue(t).trim();
  return n.length > 0 ? n : null;
}
function Qe(e) {
  let t = e.trim();
  if (t.startsWith(`#`)) return $e(t);
  let n = /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i.exec(t);
  if (!n) return null;
  let r = n[1],
    i = n[2],
    a = n[3];
  return r == null || i == null || a == null ? null : { r: Number(r), g: Number(i), b: Number(a) };
}
function $e(e) {
  if (e.length === 4) {
    let t = e[1],
      n = e[2],
      r = e[3];
    return t == null || n == null || r == null
      ? null
      : {
          r: Number.parseInt(t + t, 16),
          g: Number.parseInt(n + n, 16),
          b: Number.parseInt(r + r, 16),
        };
  }
  return e.length === 7
    ? {
        r: Number.parseInt(e.slice(1, 3), 16),
        g: Number.parseInt(e.slice(3, 5), 16),
        b: Number.parseInt(e.slice(5, 7), 16),
      }
    : null;
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct = e(() => {
    ((et = 0.18),
      (tt = 51),
      (nt = 156),
      (rt = 255),
      (it = `rgb(${tt}, ${nt}, ${rt})`),
      (at = `rgba(${tt}, ${nt}, ${rt}, ${et})`),
      (ot = `var(--color-token-text-link-foreground, #339cff)`),
      (st = `var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))`));
  });
function lt(e, t, n) {
  return e + (t - n) / 2;
}
function ut(e, t = `top-right`, n = 0) {
  let r = n * Et;
  return e.width === 0 && e.height === 0
    ? { left: e.left, top: e.top + r }
    : {
        left: t.endsWith(`-left`) ? e.left : e.left + e.width,
        top: Math.max(26 / 2, t.startsWith(`bottom-`) ? e.top + e.height : e.top) + r,
      };
}
function dt(e, t) {
  let n = { ...e };
  for (let e of [...t].sort((e, t) => e.top - t.top))
    Math.abs(n.left - e.left) < 26 && Math.abs(n.top - e.top) < 26 && (n.top = e.top + 26);
  return n;
}
function ft({
  markerNumber: e,
  position: t,
  icon: n,
  color: r,
  chatGptStyle: i = !1,
  nativePresentationStyle: a = !1,
  draft: o = !1,
  selected: s = !1,
  testId: c,
  title: l,
  onClick: u,
  onMouseEnter: d,
  onMouseLeave: f,
  onFocus: p,
  onBlur: m,
}) {
  let h = i || a,
    _ = h ? 24 : 26,
    v = u != null || d != null || f != null || p != null || m != null,
    y = g(
      `absolute z-30 flex items-center justify-center p-0`,
      h && `overflow-hidden rounded-[14px] rounded-bl-2xs border border-white`,
      a ? `bg-artifact-powerpoint` : i ? `bg-text-tip` : `border-0 bg-transparent`,
      v ? `pointer-events-auto cursor-pointer` : `pointer-events-none`,
    ),
    b = {
      color: r ?? `var(--color-token-text-link-foreground, #339cff)`,
      left: t.left,
      top: t.top,
      width: _,
      height: _,
      zIndex: s ? 31 : void 0,
      transform: s ? `translate(-50%, -50%) scale(1.08)` : `translate(-50%, -50%)`,
      ...(h
        ? {
            borderRadius: `14px 14px 14px 2.333px`,
            borderWidth: `1.167px`,
            boxShadow: `0 4.667px 9.333px 0 rgba(0, 0, 0, 0.15)`,
          }
        : {}),
    },
    x =
      n == null
        ? e == null
          ? null
          : (0, B.jsx)(`span`, {
              className: `pointer-events-none relative z-10 [transform:translate(-0.5px,-0.5px)] text-[10px] leading-none font-bold text-white`,
              style: kt,
              children: e,
            })
        : (0, B.jsx)(`span`, {
            className: `pointer-events-none relative z-10 flex size-4 items-center justify-center text-white`,
            children: n,
          });
  return v
    ? (0, B.jsxs)(`button`, {
        type: `button`,
        "data-testid": c,
        "data-popcorn-annotation-marker": `true`,
        className: y,
        style: b,
        title: l,
        onClick: u,
        onMouseEnter: d,
        onMouseLeave: f,
        onFocus: p,
        onBlur: m,
        children: [!h && (0, B.jsx)(gt, {}), x],
      })
    : (0, B.jsxs)(`div`, {
        "data-testid": c,
        className: y,
        style: b,
        title: l,
        children: [!h && (0, B.jsx)(gt, {}), x],
      });
}
function pt({
  bounds: e,
  containerElement: t,
  collisionBoundaryElement: n,
  label: r = `Ask ChatGPT`,
  assistantIcon: i,
  onClick: a,
  onShown: o,
  onCommentClick: s,
  placement: l = `bottom-right`,
  shortcutScopeElement: u,
  testId: m = `popcorn-ask-for-edit-button`,
}) {
  let h = (0, bt.useRef)(!1),
    g = (0, bt.useMemo)(
      () =>
        t
          ? {
              contextElement: t,
              getBoundingClientRect: () => {
                let n = ye(t, e.left, e.top),
                  r = ye(t, e.left + e.width, e.top + e.height);
                return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
              },
            }
          : null,
      [e.height, e.left, e.top, e.width, t],
    ),
    _ = n ?? t,
    {
      refs: v,
      x: y,
      y: b,
      strategy: x,
    } = c({
      placement: mt(l),
      strategy: `absolute`,
      middleware: [
        f(Dt),
        ...(n ? [O({ padding: Ot, boundary: n })] : []),
        p({ padding: Ot, ...(_ ? { boundary: _ } : {}), ...(n ? { crossAxis: !0 } : {}) }),
      ],
      whileElementsMounted: d,
    });
  (_t({ onClick: a, shortcutScopeElement: u }),
    (0, bt.useEffect)(() => {
      h.current || o == null || ((h.current = !0), o());
    }, [o]),
    (0, bt.useEffect)(() => {
      v.setReference(g);
    }, [v, g]));
  let S = vt(),
    C = (e) => {
      (e.preventDefault(), e.stopPropagation());
    },
    w = t && y != null && b != null ? { fontFamily: Ct, position: x, left: y, top: b } : ht(e, l),
    T = (0, B.jsxs)(B.Fragment, {
      children: [
        (0, B.jsx)(`span`, { className: `h-[18px]`, style: { fontFamily: Ct }, children: r }),
        (0, B.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `inline-flex h-[18px] items-center rounded-full bg-token-bg-secondary px-[6px] text-[12px] leading-[18px] font-[500] tracking-[-0.3px] text-token-text-secondary`,
          style: { fontFamily: Ct },
          children: S,
        }),
      ],
    });
  return s == null
    ? (0, B.jsx)(`button`, {
        ref: v.setFloating,
        type: `button`,
        "aria-label": r,
        "data-popcorn-ask-for-edit": `true`,
        "data-popcorn-ask-for-edit-placement": l,
        "data-testid": m,
        className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max cursor-interaction items-center gap-2 rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light hover:bg-token-bg-secondary`,
        style: w,
        onMouseDown: C,
        onClick: (e) => {
          (C(e), a(`ask_codex_button`));
        },
        children: T,
      })
    : (0, B.jsxs)(`div`, {
        ref: v.setFloating,
        role: `toolbar`,
        "aria-label": `Selection actions`,
        "data-testid": `${m}-toolbar`,
        className: `pointer-events-auto absolute z-40 inline-flex h-6 min-w-max items-center gap-[3px] rounded-full border-0 bg-token-main-surface-primary py-[3px] ps-2 pe-[3px] text-[12px] leading-[18px] font-[400] tracking-[-0.3px] whitespace-nowrap text-token-text-primary shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55)] ring-[1px] ring-token-border-light`,
        style: w,
        children: [
          (0, B.jsxs)(`button`, {
            type: `button`,
            "aria-label": r,
            "data-popcorn-ask-for-edit": `true`,
            "data-popcorn-ask-for-edit-placement": l,
            "data-testid": m,
            className: `inline-flex h-[18px] cursor-interaction items-center gap-2 border-0 bg-transparent p-0 text-inherit`,
            onMouseDown: C,
            onClick: (e) => {
              (C(e), a(`ask_codex_button`));
            },
            children: [
              i != null &&
                (0, B.jsx)(`span`, {
                  "aria-hidden": `true`,
                  className: `inline-flex size-4 items-center`,
                  children: i,
                }),
              T,
            ],
          }),
          (0, B.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `h-4 w-px bg-token-border-light`,
          }),
          (0, B.jsx)(`button`, {
            type: `button`,
            "aria-label": `Add comment`,
            "data-testid": `${m}-comment`,
            className: `inline-flex size-[18px] shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit hover:bg-token-bg-tertiary`,
            onMouseDown: C,
            onClick: (e) => {
              (C(e), s());
            },
            children: (0, B.jsx)(se, { "aria-hidden": `true`, className: `h-4 w-4 opacity-65` }),
          }),
        ],
      });
}
function mt(e) {
  switch (e) {
    case `bottom-left`:
      return `bottom-start`;
    case `bottom-right`:
      return `bottom-end`;
    case `top-left`:
      return `top-start`;
    case `top-right`:
      return `top-end`;
  }
}
function ht(e, t) {
  switch (t) {
    case `bottom-left`:
      return { fontFamily: Ct, left: e.left, top: e.top + e.height + Dt };
    case `bottom-right`:
      return {
        fontFamily: Ct,
        left: e.left + e.width,
        top: e.top + e.height + Dt,
        transform: `translateX(-100%)`,
      };
    case `top-left`:
      return { fontFamily: Ct, left: e.left, top: e.top - Dt, transform: `translateY(-100%)` };
    case `top-right`:
      return {
        fontFamily: Ct,
        left: e.left + e.width,
        top: e.top - Dt,
        transform: `translate(-100%, -100%)`,
      };
  }
}
function gt() {
  return (0, B.jsx)(`svg`, {
    "aria-hidden": !0,
    className: `absolute inset-0 size-full`,
    fill: `none`,
    viewBox: `0 0 26 25`,
    children: (0, B.jsx)(`path`, {
      d: xt,
      fill: `currentColor`,
      stroke: `white`,
      strokeWidth: `1.65`,
    }),
  });
}
function _t({ enabled: e = !0, onClick: t, shortcutScopeElement: n }) {
  (0, bt.useEffect)(() => {
    let r = n?.ownerDocument.defaultView;
    if (!e || r == null || n == null) return;
    let i = (e) => {
      let i = e.target instanceof r.Node && n.contains(e.target),
        a = n.ownerDocument.activeElement,
        o = a instanceof r.Node && n.contains(a);
      e.defaultPrevented ||
        e.repeat ||
        (!e.metaKey && !e.ctrlKey) ||
        e.altKey ||
        e.shiftKey ||
        e.key.toLowerCase() !== `i` ||
        (!i && !o) ||
        (e.preventDefault(), e.stopPropagation(), t(`ask_codex_shortcut`));
    };
    return (
      r.addEventListener(`keydown`, i, !0),
      () => {
        r.removeEventListener(`keydown`, i, !0);
      }
    );
  }, [e, t, n]);
}
function vt() {
  return typeof navigator < `u` && /Win|Linux/.test(navigator.platform) ? `Ctrl I` : `⌘I`;
}
function yt({
  bounds: e,
  borderRadius: t,
  fillOnly: n = !1,
  borderWidthPx: r = 2,
  borderColor: i = ot,
  fillColor: a = st,
  shadow: o = !n,
  testId: s,
}) {
  return (0, B.jsx)(`div`, {
    "data-testid": s,
    className: g(`pointer-events-none absolute box-border`),
    style: {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height,
      borderRadius: t,
      backgroundColor: a,
      borderStyle: n ? `none` : `dashed`,
      borderWidth: n ? 0 : r,
      borderColor: i,
      boxShadow: n || !o ? `none` : `inset 0 0 0 1px rgba(255,255,255,0.28)`,
    },
  });
}
var bt,
  B,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At = e(() => {
    (j(),
      D(),
      (bt = t(r())),
      R(),
      ct(),
      me(),
      (B = T()),
      (xt = `M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z`),
      (St = `<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${xt}" fill="#0285FF" stroke="white" stroke-width="1.65"/></svg>`),
      (Ct = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif`),
      (wt = `data:image/svg+xml,${encodeURIComponent(St)}`),
      `${wt}`,
      (Tt = `url("${wt}") 13 12, crosshair`),
      (Et = 20),
      (Dt = 6),
      (Ot = 12),
      (kt = { color: `white` }));
  });
function jt(e) {
  let [t] = e;
  return t
    ? e.length === 1
      ? `M ${t.x} ${t.y}`
      : e.reduce((e, t, n) => `${e}${n === 0 ? `` : ` `}${n === 0 ? `M` : `L`} ${t.x} ${t.y}`, ``)
    : ``;
}
function Mt(e) {
  let t = e[0];
  if (!t) return null;
  let n = t.x,
    r = t.x,
    i = t.y,
    a = t.y;
  for (let t of e.slice(1))
    ((n = Math.min(n, t.x)),
      (r = Math.max(r, t.x)),
      (i = Math.min(i, t.y)),
      (a = Math.max(a, t.y)));
  return { left: n, top: i, width: r - n, height: a - i };
}
function Nt(e) {
  return Mt(e.flatMap((e) => e.points));
}
function Pt(e, { paddingPx: t = 24, minSizePx: n = 96 } = {}) {
  let r = e.width + t * 2,
    i = e.height + t * 2,
    a = Math.max(n, r),
    o = Math.max(n, i);
  return { left: e.left - (a - e.width) / 2, top: e.top - (o - e.height) / 2, width: a, height: o };
}
function Ft(e, t) {
  let n = Math.min(t.width, e.width),
    r = Math.min(t.height, e.height);
  return {
    left: Math.min(Math.max(0, e.left), Math.max(0, t.width - n)),
    top: Math.min(Math.max(0, e.top), Math.max(0, t.height - r)),
    width: n,
    height: r,
  };
}
function It({ drawingId: e, screenshot: t, markerViewportPoint: n, viewportSize: r }) {
  return {
    localBrowserCommentMetadata: {
      kind: `region`,
      ...(n == null ? {} : { markerViewportPoint: { ...n } }),
      ...(r == null ? {} : { viewportSize: { ...r } }),
    },
    localBrowserScreenshot: { ...t, commentId: e },
  };
}
async function Lt({
  cropRect: e,
  viewportSize: t,
  baseCanvas: n,
  overlayCanvases: r = [],
  strokes: i,
  projectPoint: a,
  mimeType: o = `image/png`,
}) {
  if (typeof OffscreenCanvas > `u` || typeof OffscreenCanvas.prototype.convertToBlob != `function`)
    throw Error(`Popcorn drawing screenshot export requires OffscreenCanvas support.`);
  let s = n.width / Math.max(1, t.width),
    c = n.height / Math.max(1, t.height),
    l = Math.max(1, Math.round(e.width * s)),
    u = Math.max(1, Math.round(e.height * c)),
    d = new OffscreenCanvas(l, u),
    f = d.getContext(`2d`);
  if (!f) throw Error(`Failed to acquire OffscreenCanvas 2d context.`);
  ((f.imageSmoothingEnabled = !0),
    (f.imageSmoothingQuality = `high`),
    (f.fillStyle = `#ffffff`),
    f.fillRect(0, 0, l, u));
  let p = l / Math.max(1, e.width),
    m = u / Math.max(1, e.height);
  for (let i of [n, ...r])
    !i ||
      i.width <= 0 ||
      i.height <= 0 ||
      f.drawImage(
        i,
        e.left * (i.width / Math.max(1, t.width)),
        e.top * (i.height / Math.max(1, t.height)),
        e.width * (i.width / Math.max(1, t.width)),
        e.height * (i.height / Math.max(1, t.height)),
        0,
        0,
        l,
        u,
      );
  for (let t of i) {
    let n = t.points.map((e) => a(e)).filter((e) => e != null);
    if (n.length !== 0) {
      if (
        (f.save(),
        (f.strokeStyle = t.color),
        (f.fillStyle = t.color),
        (f.lineCap = `round`),
        (f.lineJoin = `round`),
        (f.lineWidth = t.strokeWidth * Math.max(p, m)),
        n.length === 1)
      ) {
        let [r] = n;
        if (!r) {
          f.restore();
          continue;
        }
        (f.beginPath(),
          f.arc(
            (r.x - e.left) * p,
            (r.y - e.top) * m,
            (t.strokeWidth * Math.max(p, m)) / 2,
            0,
            Math.PI * 2,
          ),
          f.fill(),
          f.restore());
        continue;
      }
      (f.beginPath(),
        n.forEach((t, n) => {
          let r = (t.x - e.left) * p,
            i = (t.y - e.top) * m;
          n === 0 ? f.moveTo(r, i) : f.lineTo(r, i);
        }),
        f.stroke(),
        f.restore());
    }
  }
  return { blob: await d.convertToBlob({ type: o }), width: l, height: u, mimeType: o };
}
var Rt,
  zt = e(() => {
    Rt = `#111111`;
  });
function Bt(e, t) {
  return e.points.map((e) => t(e)).filter((e) => e != null);
}
function Vt({ stroke: e, projectPoint: t }) {
  let n = Bt(e, t);
  if (n.length === 0) return null;
  if (n.length === 1) {
    let [t] = n;
    return t
      ? (0, Wt.jsx)(`circle`, { cx: t.x, cy: t.y, r: e.strokeWidth / 2, fill: e.color })
      : null;
  }
  return (0, Wt.jsx)(`path`, {
    d: jt(n),
    fill: `none`,
    stroke: e.color,
    strokeWidth: e.strokeWidth,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  });
}
function Ht({ strokes: e, projectPoint: t, testId: n, clipBounds: r }) {
  let i = `popcorn-drawing-overlay-${(0, Ut.useId)().replace(/[:]/g, ``)}`;
  return e.length === 0
    ? null
    : (0, Wt.jsxs)(`svg`, {
        "data-testid": n,
        className: `pointer-events-none absolute inset-0 z-20 overflow-hidden`,
        width: `100%`,
        height: `100%`,
        children: [
          r
            ? (0, Wt.jsx)(`defs`, {
                children: (0, Wt.jsx)(`clipPath`, {
                  id: i,
                  children: (0, Wt.jsx)(`rect`, {
                    x: r.left,
                    y: r.top,
                    width: r.width,
                    height: r.height,
                  }),
                }),
              })
            : null,
          (0, Wt.jsx)(`g`, {
            clipPath: r ? `url(#${i})` : void 0,
            children: e.map((e, n) =>
              (0, Wt.jsx)(Vt, { stroke: e, projectPoint: t }, `${n}-${e.points.length}`),
            ),
          }),
        ],
      });
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = t(r())), zt(), (Wt = T()));
  });
function Kt(e) {
  return ((qt += 1), `${e}-${Date.now().toString(36)}-${qt.toString(36)}`);
}
var qt,
  Jt = e(() => {
    qt = 0;
  });
function Yt({
  active: e,
  disabled: t = !1,
  onClick: n,
  label: r,
  activeLabel: i = r,
  icon: a,
  testId: o,
}) {
  let s = (0, $t.useRef)(null),
    [c, l] = (0, $t.useState)(!1),
    [u, d] = (0, $t.useState)(!1);
  (0, $t.useEffect)(() => {
    if (e) return;
    (l(!1), d(!1));
    let t = s.current;
    typeof document < `u` && t != null && t === document.activeElement && t.blur();
  }, [e]);
  let f = u && !c ? 15 : 10,
    p = `color-mix(in srgb, var(--color-token-bg-primary) ${100 - f}%, var(--color-token-charts-blue, #339cff) ${f}%)`,
    m = e && i != null ? i : r;
  return (0, en.jsx)(`button`, {
    ref: s,
    type: `button`,
    "data-testid": o,
    "aria-label": m,
    "aria-pressed": e,
    disabled: t,
    className: g(
      `ease-basic inline-flex h-token-button-composer min-w-8 appearance-none items-center overflow-hidden rounded-lg border border-transparent text-base leading-[18px] outline-none transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none`,
      `disabled:cursor-not-allowed disabled:opacity-100`,
      e ? `max-w-40 justify-start px-2.5` : `max-w-8 justify-center px-0`,
      e
        ? `border-token-charts-blue/40`
        : `bg-transparent text-token-text-tertiary hover:bg-token-list-hover-background`,
    ),
    style: e
      ? {
          backgroundColor: p,
          color: `var(--color-text-tip, var(--color-token-text-link-foreground, #339cff))`,
        }
      : void 0,
    onClick: () => {
      (l(!e), n());
    },
    onPointerEnter: () => {
      d(!0);
    },
    onPointerLeave: () => {
      (d(!1), l(!1));
    },
    children: (0, en.jsxs)(`span`, {
      className: g(`flex min-w-0 items-center`, e ? `justify-start` : `w-full justify-center`),
      children: [
        a({
          className: g(
            `icon-sm shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
            e ? `-translate-x-0.5` : `translate-x-0`,
          ),
        }),
        (0, en.jsx)(`span`, {
          className: g(
            `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
            e ? `ms-1.5 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
          ),
          children: m,
        }),
      ],
    }),
  });
}
function Xt({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-annotation-button` }) {
  return (0, en.jsx)(Yt, {
    active: e,
    activeLabel: `Annotating`,
    disabled: t,
    onClick: n,
    label: `Annotation`,
    icon: de,
    testId: r,
  });
}
function Zt({
  active: e,
  disabled: t = !1,
  onClick: n,
  testId: r = `popcorn-presentation-comments-button`,
}) {
  return (0, en.jsx)(`button`, {
    type: `button`,
    "aria-label": `Comments`,
    "aria-expanded": e,
    "data-testid": r,
    disabled: t,
    onClick: n,
    className: `enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary text-token-text-tertiary inline-flex size-8 items-center justify-center rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
    children: (0, en.jsx)(_e, { className: `icon-sm` }),
  });
}
function Qt({ active: e, disabled: t = !1, onClick: n, testId: r = `popcorn-drawing-button` }) {
  return (0, en.jsx)(Yt, {
    active: e,
    disabled: t,
    onClick: n,
    label: `Drawing`,
    icon: he,
    testId: r,
  });
}
var $t,
  en,
  tn = e(() => {
    (j(), ($t = t(r())), R(), (en = T()));
  });
function nn({ text: e, hasMultipleBlocks: t, measureElement: n, surfaceElement: r }) {
  let i = e.trim();
  if (i.length === 0) return !1;
  if (t) return !0;
  let a = rn(r),
    o = an(e, n);
  return a == null || o == null ? i.length >= Pn : o + Fn > a;
}
function rn(e) {
  if (e == null) return null;
  let t = e.getBoundingClientRect();
  if (t.width === 0) return null;
  let n = e.querySelector(`[data-browser-comment-submit]`)?.getBoundingClientRect().width ?? An;
  return t.width - Mn - Nn - n - jn;
}
function an(e, t) {
  return t == null ? null : ((t.textContent = e), t.getBoundingClientRect().width);
}
function on(e) {
  return Math.max(1, e.split(/\r\n|\r|\n/).length);
}
function sn(e) {
  if (e == null) return;
  let t = e.ownerDocument;
  (cn(t), e.classList.remove(In));
  let n = t.defaultView;
  if (n == null) {
    e.classList.add(In);
    return;
  }
  let r = zn.get(e);
  r != null && n.cancelAnimationFrame(r);
  let i = n.requestAnimationFrame(() => {
    (zn.delete(e), e.classList.add(In));
  });
  zn.set(e, i);
}
function cn(e) {
  if (e.getElementById(Ln) != null) return;
  let t = e.createElement(`style`);
  ((t.id = Ln), (t.textContent = Rn), e.head.appendChild(t));
}
var V,
  ln,
  H,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    (D(),
      j(),
      (V = t(r())),
      (ln = t(re())),
      R(),
      me(),
      At(),
      (H = T()),
      (un = 294),
      (dn = 336),
      (fn = 320),
      (pn = 138),
      (mn = 12),
      (hn = 12),
      (gn = 4),
      (_n = 112),
      (vn = 44),
      (yn = 24),
      (bn = 20),
      (xn = 72),
      (Sn = g(
        `text-token-dropdown-foreground placeholder:text-token-description-foreground min-h-0 w-full resize-none border-0 bg-transparent p-0 font-sans leading-normal outline-none`,
        `appearance-none shadow-none [text-decoration:none]`,
        `focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent`,
        `[outline:none] [box-shadow:none] [-webkit-appearance:none]`,
        `!min-h-0 max-h-full flex-1 overflow-y-auto text-[length:var(--codex-chat-font-size,13px)] leading-6`,
      )),
      (Cn = { "--codex-chat-font-size": `13px`, fontSize: `var(--codex-chat-font-size, 13px)` }),
      (wn = { "--codex-chat-font-size": `14px`, fontSize: `var(--codex-chat-font-size, 14px)` }),
      (Tn = `pointer-events-none absolute inset-x-0 top-0 flex flex-col overflow-visible bg-transparent`),
      (En = `pointer-events-auto relative w-full overflow-hidden bg-token-dropdown-background transition-[height] duration-150 ease-out motion-reduce:transition-none [background-color:var(--color-token-dropdown-background,var(--color-token-main-surface-primary,white))]`),
      (Dn = `absolute left-4 min-w-0 overflow-hidden transition-[width,top,bottom] duration-150 ease-out motion-reduce:transition-none`),
      (On = `absolute right-3 bottom-2 left-2 flex origin-bottom-left items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`),
      (kn = `pointer-events-none absolute top-0 left-0 whitespace-pre text-[length:var(--codex-chat-font-size,13px)] leading-5 font-sans opacity-0`),
      (An = 28),
      (jn = 8),
      (Mn = 16),
      (Nn = 8),
      (Pn = 40),
      (Fn = 12),
      (In = `browser-comment-popup-shake`),
      (Ln = `popcorn-annotation-editor-shake-style`),
      (Rn = `
@keyframes browser-comment-popup-shake {
  0%,
  100% {
    transform: translateX(0) rotate(0deg);
  }
  12% {
    transform: translateX(6px) rotate(0.75deg);
  }
  26% {
    transform: translateX(-12px) rotate(-1.5deg);
  }
  40% {
    transform: translateX(16px) rotate(2deg);
  }
  54% {
    transform: translateX(-16px) rotate(-2deg);
  }
  68% {
    transform: translateX(12px) rotate(1.5deg);
  }
  82% {
    transform: translateX(-6px) rotate(-0.75deg);
  }
}

.browser-comment-popup-shake {
  animation: browser-comment-popup-shake 900ms linear both;
}

@media (prefers-reduced-motion: reduce) {
  .browser-comment-popup-shake {
    animation: none;
  }
}
`),
      (zn = new WeakMap()),
      (Bn = (0, V.forwardRef)(function (
        {
          anchorBounds: e,
          containerElement: t,
          collisionBoundaryElement: n = null,
          portalContainerElement: r = null,
          value: i,
          onChange: a,
          onCancel: s,
          onSubmit: l,
          mode: u = `create`,
          defaultCreateSubmitMode: m = `direct`,
          savedSubmitDisabled: h = !1,
          dictationControls: _,
          placeholder: v = `Describe a change or ask a question`,
          isComment: y = !1,
          addCommentLabel: b,
          commentComposer: x,
          nativeFileCommentLabel: S,
          onDelete: C,
          placement: w,
          onDictationBusyChange: T,
          testId: E = `popcorn-annotation-editor`,
        },
        D,
      ) {
        let ee = (0, V.useRef)(null),
          te = (0, V.useRef)(null),
          ne = (0, V.useRef)(null),
          re = (0, V.useRef)(null),
          [k, ie] = (0, V.useState)(!1),
          [ae, oe] = (0, V.useState)(!1),
          A = u === `edit`,
          j = !A && x != null,
          M = !A && y,
          N = j || M,
          P = i.trim().length > 0,
          F = N && (P || M),
          le = F ? bn : yn,
          ue = N && e != null && (e.width > 0 || e.height > 0),
          de = m === `direct` ? `saved` : `direct`,
          I = ae ? de : m,
          L = I === `direct`,
          pe = h && !A && !M,
          me = !P || (pe && !L),
          R = (...e) => {
            (pe && e[0] === `saved`) || l(...e);
          },
          he = n ?? r ?? t,
          ge = (0, V.useMemo)(() => (e ? ut(e, w) : null), [e, w]),
          _e = w?.endsWith(`-left`) ?? !1,
          ve = (0, V.useMemo)(
            () =>
              !ge || !t
                ? null
                : ue && e
                  ? {
                      contextElement: t,
                      getBoundingClientRect: () => {
                        let n = ye(t, e.left, e.top),
                          r = ye(t, e.left + e.width, e.top + e.height);
                        return new DOMRect(n.x, n.y, r.x - n.x, r.y - n.y);
                      },
                    }
                  : {
                      contextElement: t,
                      getBoundingClientRect: () => {
                        let e = ye(t, ge.left, ge.top - vn / 2),
                          n = ye(t, ge.left, ge.top + vn / 2);
                        return new DOMRect(e.x, e.y, 0, n.y - e.y);
                      },
                    },
            [e, t, ge, ue],
          ),
          be = { fallbackPlacements: [`left-start`], placement: `right-start` };
        (_e && ((be.fallbackPlacements = [`right-start`]), (be.placement = `left-start`)),
          ue && ((be.fallbackPlacements = [`top-end`]), (be.placement = `bottom-end`)));
        let {
            refs: xe,
            x: Ce,
            y: we,
            strategy: Te,
            update: Ee,
          } = c({
            placement: be.placement,
            strategy: `absolute`,
            middleware: [
              f(N ? hn : 20),
              O({
                fallbackPlacements: be.fallbackPlacements,
                padding: mn,
                ...(he ? { boundary: he } : {}),
              }),
              p({ padding: mn, ...(he ? { boundary: he } : {}) }),
              o({
                padding: mn,
                ...(he ? { boundary: he } : {}),
                apply({ availableWidth: e, elements: t }) {
                  t.floating.style.maxWidth = `${Math.max(0, e)}px`;
                },
              }),
            ],
            whileElementsMounted: d,
          }),
          De = M ? pn : _n,
          Oe = k || F ? De : vn,
          ke = { top: we ?? void 0 };
        we != null &&
          !ue &&
          (w == null ? (ke.top = we + (De - Oe) / 2 + gn) : (ke.top = lt(we, vn, Oe)));
        let Ae = (0, V.useCallback)(
          (e) => {
            if (((ee.current = e), xe.setFloating(e), typeof D == `function`)) {
              D(e);
              return;
            }
            D && (D.current = e);
          },
          [D, xe],
        );
        if (
          ((0, V.useEffect)(() => {
            e && te.current?.focus();
          }, [e]),
          (0, V.useEffect)(() => {
            let e = j ? ee.current : te.current;
            if (e == null) return;
            let t = (e) => {
              e.stopPropagation();
            };
            return (
              e.addEventListener(`wheel`, t, { passive: !0 }),
              () => {
                e.removeEventListener(`wheel`, t);
              }
            );
          }, [e, j]),
          (0, V.useLayoutEffect)(() => {
            let e = te.current;
            if (!e) return;
            let t = on(i),
              n =
                A ||
                nn({
                  text: i,
                  hasMultipleBlocks: t > 1,
                  measureElement: re.current,
                  surfaceElement: ne.current,
                });
            if (n !== k) {
              ie(n);
              return;
            }
            if (n) {
              ((e.style.height = `0px`),
                (e.style.height = `${Math.min(Math.max(e.scrollHeight, t * le), xn)}px`));
              return;
            }
            e.style.height = `${le}px`;
          }, [A, k, le, i]),
          (0, V.useEffect)(() => {
            xe.setReference(ve);
          }, [xe, ve]),
          (0, V.useEffect)(() => {
            if (j) return;
            let e = (e) => {
                oe(e.metaKey || e.ctrlKey);
              },
              t = () => {
                oe(!1);
              };
            return (
              window.addEventListener(`keydown`, e, !0),
              window.addEventListener(`keyup`, e, !0),
              window.addEventListener(`blur`, t),
              () => {
                (window.removeEventListener(`keydown`, e, !0),
                  window.removeEventListener(`keyup`, e, !0),
                  window.removeEventListener(`blur`, t));
              }
            );
          }, [j]),
          (0, V.useEffect)(() => {
            e && Ee?.();
          }, [e?.height, e?.left, e?.top, e?.width, i, k, Ee]),
          !e)
        )
          return null;
        if (j) {
          let e = (0, H.jsx)(`div`, {
            ref: Ae,
            "data-testid": E,
            "data-popcorn-annotation-editor-placement": w,
            className: `pointer-events-auto z-40`,
            style: { position: Te, left: Ce ?? 0, top: we ?? 0, width: dn },
            onMouseDown: (e) => e.stopPropagation(),
            children: x,
          });
          return r == null ? e : (0, ln.createPortal)(e, r);
        }
        let je = (e) => {
            let t = e?.isBusy ?? !1,
              n = e?.isDictating ?? !1,
              r = e?.dictationButton ?? null,
              o = e?.recordingOverlay ?? null,
              c = !N && !n && r != null && (k || !P),
              l = (!N || b == null) && !t && (k || P || r == null),
              u = (k && (A || r != null)) || (F && b != null),
              d = u ? `top-2 bottom-11` : `top-2 bottom-2`,
              f = u ? Mn : 44;
            return (0, H.jsx)(`div`, {
              ref: Ae,
              "data-testid": E,
              "data-popcorn-annotation-editor-placement": w,
              className: `pointer-events-auto z-40`,
              style: { position: Te, left: Ce ?? 0, top: ke.top ?? 0, width: M ? fn : N ? dn : un },
              onMouseDown: (e) => {
                e.stopPropagation();
              },
              children: (0, H.jsx)(`form`, {
                className: g(
                  `pointer-events-none relative w-full overflow-visible bg-transparent text-token-foreground`,
                  M ? `h-[138px]` : `h-[112px]`,
                ),
                style: F ? wn : Cn,
                onSubmit: (e) => {
                  (e.preventDefault(), !(t || !P) && R(A ? `saved` : M ? `direct` : I, `button`));
                },
                children: (0, H.jsx)(`div`, {
                  className: Tn,
                  style: { height: De },
                  children: (0, H.jsxs)(`div`, {
                    ref: ne,
                    "data-browser-comment-editor-surface": !0,
                    className: g(
                      En,
                      M
                        ? `@container rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] ring-1 ring-token-border-light backdrop-blur-[16px]`
                        : F
                          ? `@container rounded-[14px] shadow-md ring-1 ring-token-border-light backdrop-blur-[24px]`
                          : `rounded-[22px] shadow-md ring-1 ring-token-border-light`,
                    ),
                    style: {
                      height: Oe,
                      backgroundColor: M
                        ? `color-mix(in srgb, var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white)) 85%, transparent)`
                        : `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
                    },
                    children: [
                      M &&
                        S != null &&
                        (0, H.jsxs)(`div`, {
                          className: `absolute inset-x-2 top-2 flex h-[26px] items-center gap-2 rounded-md bg-artifact-powerpoint-surface px-2 py-1.5 text-xs leading-[14px] font-normal tracking-[-0.15px] text-artifact-powerpoint-foreground`,
                          "data-testid": `${E}-native-file-label`,
                          children: [
                            (0, H.jsx)(se, { "aria-hidden": !0, className: `size-3.5` }),
                            (0, H.jsx)(`span`, { children: S }),
                          ],
                        }),
                      (0, H.jsx)(`div`, {
                        className: g(
                          Dn,
                          n && `invisible`,
                          M && S != null
                            ? `top-11 right-[14px] bottom-[43px] left-[14px]`
                            : F
                              ? `top-[13px] right-[14px] bottom-[43px] left-[14px]`
                              : w == null
                                ? u
                                  ? `top-2 bottom-11 w-[calc(100%-32px)]`
                                  : `top-2 bottom-2 w-[calc(100%-60px)]`
                                : d,
                        ),
                        style: w == null || F ? void 0 : { left: Mn, right: f },
                        children: (0, H.jsx)(`div`, {
                          className: g(
                            `h-full min-h-0 translate-y-0.5`,
                            N && `flex items-start gap-1`,
                          ),
                          children: (0, H.jsx)(`textarea`, {
                            ref: te,
                            inert: t,
                            value: i,
                            onChange: (e) => a(e.target.value),
                            onKeyDown: (e) => {
                              if (t) {
                                (e.preventDefault(), e.stopPropagation());
                                return;
                              }
                              if (e.key === `Escape`) {
                                (e.preventDefault(), e.stopPropagation(), s());
                                return;
                              }
                              if (
                                e.key === `Enter` &&
                                !e.altKey &&
                                !e.shiftKey &&
                                !e.nativeEvent.isComposing &&
                                P
                              ) {
                                if ((e.preventDefault(), e.stopPropagation(), A)) {
                                  R(`saved`, `keyboard`);
                                  return;
                                }
                                if (M) {
                                  R(`direct`, `keyboard`);
                                  return;
                                }
                                if (e.metaKey || e.ctrlKey) {
                                  R(de, `keyboard`);
                                  return;
                                }
                                R(m, `keyboard`);
                              }
                            },
                            placeholder: v,
                            rows: 1,
                            className: g(Sn, !k && `!overflow-hidden whitespace-nowrap`),
                            style: {
                              fontSize: `var(--codex-chat-font-size, 13px)`,
                              lineHeight: `${le}px`,
                              appearance: `none`,
                              WebkitAppearance: `none`,
                              outline: `none`,
                              boxShadow: `none`,
                              border: `0 none transparent`,
                              borderImage: `none`,
                              backgroundColor: `transparent`,
                              backgroundImage: `none`,
                            },
                          }),
                        }),
                      }),
                      (0, H.jsx)(`span`, {
                        ref: re,
                        "aria-hidden": `true`,
                        className: kn,
                        style: {
                          fontSize: `var(--codex-chat-font-size, 13px)`,
                          lineHeight: `${yn}px`,
                        },
                        children: i,
                      }),
                      A
                        ? (0, H.jsxs)(`div`, {
                            "aria-hidden": !k || n,
                            className: g(
                              On,
                              `justify-between`,
                              k && !n
                                ? `scale-100 opacity-100`
                                : `pointer-events-none scale-95 opacity-0`,
                            ),
                            children: [
                              t
                                ? null
                                : (0, H.jsx)(`button`, {
                                    type: `button`,
                                    "aria-label": `Delete annotation`,
                                    className: `inline-flex h-8 w-8 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`,
                                    onClick: C,
                                    children: (0, H.jsx)(fe, { className: `size-4` }),
                                  }),
                              (0, H.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  c ? r : null,
                                  t
                                    ? null
                                    : (0, H.jsxs)(H.Fragment, {
                                        children: [
                                          (0, H.jsx)(`button`, {
                                            type: `button`,
                                            tabIndex: k ? void 0 : -1,
                                            className: `inline-flex h-8 items-center rounded-full border border-token-border-light bg-token-main-surface-primary px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium text-token-text-primary hover:bg-token-bg-tertiary`,
                                            style: {
                                              fontSize: `var(--codex-chat-font-size, 13px)`,
                                              lineHeight: `20px`,
                                            },
                                            onClick: s,
                                            children: `Cancel`,
                                          }),
                                          (0, H.jsx)(`button`, {
                                            type: `submit`,
                                            disabled: !P,
                                            className: g(
                                              `inline-flex h-8 items-center rounded-full px-3 text-[length:var(--codex-chat-font-size,13px)] font-medium transition-colors`,
                                              P
                                                ? `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`
                                                : `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`,
                                            ),
                                            style: {
                                              fontSize: `var(--codex-chat-font-size, 13px)`,
                                              lineHeight: `20px`,
                                            },
                                            children: `Save`,
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      !A &&
                        (!N || b == null) &&
                        (0, H.jsxs)(`div`, {
                          className: `absolute right-2 bottom-2 flex items-center gap-2`,
                          children: [
                            c ? r : null,
                            l
                              ? (0, H.jsx)(`button`, {
                                  "aria-label": `Comment`,
                                  "data-browser-comment-submit": !0,
                                  type: `button`,
                                  disabled: me,
                                  className: g(
                                    `inline-flex size-7 items-center justify-center rounded-full transition-colors`,
                                    me
                                      ? `bg-token-bg-tertiary text-token-text-tertiary cursor-not-allowed`
                                      : `bg-token-text-primary text-token-main-surface-primary hover:opacity-90`,
                                  ),
                                  onMouseDown: (e) => {
                                    e.preventDefault();
                                  },
                                  onClick: () => {
                                    P && R(I, `button`);
                                  },
                                  children: L
                                    ? (0, H.jsx)(Se, { className: `size-4` })
                                    : (0, H.jsx)(ce, { className: `size-4` }),
                                })
                              : null,
                          ],
                        }),
                      F &&
                        !t &&
                        b != null &&
                        (0, H.jsx)(`div`, {
                          className: `absolute inset-x-0 bottom-0 flex h-[43px] items-center justify-end gap-3 px-2 py-1.5`,
                          children: (0, H.jsxs)(`button`, {
                            type: `button`,
                            disabled: !P,
                            className: `inline-flex h-7 shrink-0 items-center gap-2 rounded-md bg-artifact-powerpoint py-[3px] ps-2 pe-1.5 text-[13px] font-medium text-white hover:bg-artifact-powerpoint/90 disabled:cursor-not-allowed disabled:opacity-40`,
                            onClick: () => {
                              R(`direct`, `button`);
                            },
                            children: [
                              b,
                              (0, H.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: `text-white/75 [@container_(max-width:319px)]:hidden`,
                                children: `⏎`,
                              }),
                            ],
                          }),
                        }),
                      o,
                    ],
                  }),
                }),
              }),
            });
          },
          Me = _,
          Ne =
            Me == null
              ? je(null)
              : (0, H.jsx)(Me, {
                  value: i,
                  onChange: a,
                  onBusyChange: T,
                  onSubmit: (e) => {
                    R(A ? `saved` : m, `dictation`, e);
                  },
                  tooltipPortalContainer: r,
                  children: je,
                });
        return r ? (0, ln.createPortal)(Ne, r) : Ne;
      })));
  });
function Hn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Un(e) {
  let t = Math.min(Jn, Math.max(1, e.containerWidth - U * 2)),
    n = Math.min(e.previewWidth && e.previewWidth > 0 ? e.previewWidth : t, t),
    r = Hn(e.markerPoint.left - n / 2, U, Math.max(U, e.containerWidth - n - U)),
    i = e.markerPoint.top - 25 - qn;
  if (i >= U) return { left: r, top: i, maxWidth: t };
  let a = e.markerPoint.top + 25;
  return a + qn <= e.containerHeight - U
    ? { left: r, top: a, maxWidth: t }
    : { left: r, top: Hn(i, U, Math.max(U, e.containerHeight - qn - U)), maxWidth: t };
}
function Wn({
  body: e,
  markerPosition: t,
  containerElement: n,
  testId: r = `popcorn-annotation-preview`,
}) {
  let i = (0, Gn.useRef)(null),
    [a, o] = (0, Gn.useState)(null);
  return (
    (0, Gn.useLayoutEffect)(() => {
      let e = i.current;
      if (!e) return;
      let t = Math.ceil(e.getBoundingClientRect().width);
      o((e) => (e === t ? e : t));
    }, [e, t.left, t.top]),
    n
      ? (0, Kn.jsx)(`div`, {
          ref: i,
          "data-testid": r,
          className: `pointer-events-none absolute z-40 flex select-none items-center overflow-hidden rounded-lg border px-2 py-1 text-sm shadow-lg`,
          style: {
            ...Un({
              markerPoint: t,
              containerWidth: n.clientWidth,
              containerHeight: n.clientHeight,
              previewWidth: a ?? void 0,
            }),
            backgroundColor: Yn,
            borderColor: Zn,
            color: Xn,
            height: qn,
            width: `fit-content`,
            backdropFilter: `blur(8px)`,
            WebkitBackdropFilter: `blur(8px)`,
          },
          children: (0, Kn.jsx)(`div`, {
            className: `min-w-0 overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-inherit`,
            children: e.replace(/\s+/g, ` `).trim(),
          }),
        })
      : null
  );
}
var Gn,
  Kn,
  qn,
  Jn,
  U,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    ((Gn = t(r())),
      (Kn = T()),
      (qn = 32),
      (Jn = 294),
      (U = 16),
      (Yn = `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`),
      (Xn = `var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))`),
      (Zn = `var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))`));
  }),
  $n = e(() => {
    T();
  }),
  er = e(() => {}),
  tr = e(() => {});
function nr(e, t) {
  return t != null && e.artifactKind !== t
    ? !1
    : e.artifactKind === `workbook`
      ? e.target.type === `workbook-range` || e.target.type === `workbook-floating-element`
      : e.target.type === `presentation-element-selection` ||
        e.target.type === `presentation-region`;
}
function rr(e, t) {
  let n = [];
  for (let r of e ?? []) {
    if (!nr(r, t)) continue;
    let e =
      r.annotationNumber != null &&
      Number.isSafeInteger(r.annotationNumber) &&
      r.annotationNumber > 0
        ? r.annotationNumber
        : we(n, r.target);
    n.push({
      annotationId: r.annotationId,
      annotationNumber: e,
      artifactKind: r.artifactKind,
      body: r.body,
      label: r.label,
      target: r.target,
    });
  }
  return n;
}
function ir(e, t) {
  let n = t?.artifactKey,
    r = t?.artifactKind,
    i = t?.initialAnnotations,
    a = t?.onFocusAnnotation,
    o = t?.onDismissAnnotation,
    s = t?.onDismissAllAnnotations,
    [c, l] = (0, W.useState)(n),
    [u, d] = (0, W.useState)(() => rr(i, r));
  c !== n && (l(n), d(rr(i, r)));
  let f = (0, W.useRef)(u);
  f.current = u;
  let p = (0, W.useCallback)(
      (e) => {
        let t = f.current.find((t) => t.annotationId === e);
        return t == null || a == null ? !1 : a(t);
      },
      [a],
    ),
    m = (0, W.useCallback)(
      (e) => {
        (d((t) => t.filter((t) => t.annotationId !== e)), o?.(e));
      },
      [o],
    ),
    h = (0, W.useCallback)(() => {
      (d([]), s?.());
    }, [s]),
    g = (0, W.useCallback)((e) => {
      d((t) => {
        let n = we(t, e.target);
        return [...t, { ...e, annotationNumber: n }];
      });
    }, []),
    _ = (0, W.useCallback)((e, t) => {
      d((n) => n.map((n) => (n.annotationId === e ? { ...n, ...t } : n)));
    }, []);
  return (
    (0, W.useEffect)(() => {
      if (!e) return;
      let t = { focusAnnotation: p, dismissAnnotation: m, dismissAllAnnotations: h };
      return (
        (e.current = t),
        () => {
          e.current === t && (e.current = null);
        }
      );
    }, [h, m, p, e]),
    {
      annotations: u,
      addPendingAnnotation: g,
      updatePendingAnnotation: _,
      dismissAnnotation: m,
      dismissAllAnnotations: h,
    }
  );
}
var W,
  ar = e(() => {
    ((W = t(r())), Ce());
  });
function or(e) {
  let [t, n] = (0, sr.useState)([]),
    r = (0, sr.useCallback)((e) => {
      n((t) => t.filter((t) => t.drawingId !== e));
    }, []),
    i = (0, sr.useCallback)(() => {
      n([]);
    }, []),
    a = (0, sr.useCallback)((e) => {
      n((t) => [
        ...t,
        {
          drawingId: e.drawingId,
          artifactKind: e.artifactKind,
          label: e.label,
          target: e.target,
          strokes: e.strokes,
        },
      ]);
    }, []);
  return (
    (0, sr.useEffect)(() => {
      if (!e) return;
      let t = { dismissDrawing: r, dismissAllDrawings: i };
      return (
        (e.current = t),
        () => {
          e.current === t && (e.current = null);
        }
      );
    }, [i, r, e]),
    { drawings: t, addPendingDrawing: a, dismissDrawing: r, dismissAllDrawings: i }
  );
}
var sr,
  cr = e(() => {
    sr = t(r());
  }),
  lr = e(() => {
    (Ce(), At(), Gt(), zt(), Jt(), tn(), Vn(), Qn(), $n(), er(), tr(), ar(), cr());
  });
function ur({ kind: e, children: t, className: n }) {
  return (0, dr.jsx)(`div`, {
    className: g(`inline-flex items-center justify-center rounded-md p-1`, fr[e], n),
    style:
      e === `whiteboard`
        ? {
            backgroundColor: `color-mix(in srgb, var(--color-token-charts-blue, #339cff) 12%, transparent)`,
            color: `var(--color-token-text-link-foreground, #339cff)`,
          }
        : void 0,
    children: t,
  });
}
var dr,
  fr,
  pr = e(() => {
    (j(),
      (dr = T()),
      (fr = {
        workbook: `bg-[#04b84c] text-white`,
        presentation: `bg-orange-300 text-white`,
        document: `bg-token-bg-elevated-secondary border-token-border-light border text-token-text-primary`,
        whiteboard: `border-token-border-light border`,
      }));
  });
function mr({ trigger: e, actions: t }) {
  return (0, hr.jsxs)(h, {
    children: [
      (0, hr.jsx)(i, { asChild: !0, children: e }),
      (0, hr.jsx)(u, {
        children: (0, hr.jsx)(a, {
          className: `border-token-border-light bg-token-bg-primary z-50 min-w-[160px] rounded-xl border p-1 shadow-lg`,
          children: t.map((e) => {
            if (e.kind === `separator`)
              return (0, hr.jsx)(A, { className: `bg-token-border-light my-1 h-px` }, e.id);
            let t = e.icon;
            return (0, hr.jsxs)(
              s,
              {
                disabled: e.disabled,
                "data-testid": e.testId,
                onSelect: () => {
                  e.disabled || e.onSelect();
                },
                className: g(
                  `text-token-text-primary flex w-full cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-token-bg-secondary`,
                  e.color === `danger` ? `text-red-600` : null,
                ),
                children: [
                  (0, hr.jsx)(t, { className: `size-4` }),
                  (0, hr.jsx)(`span`, { children: e.label }),
                ],
              },
              e.id,
            );
          }),
        }),
      }),
    ],
  });
}
var hr,
  gr = e(() => {
    (_(), j(), (hr = T()));
  }),
  _r,
  vr,
  yr = e(() => {
    ((_r = t(r())), (vr = typeof window > `u` ? _r.useEffect : _r.useLayoutEffect));
  });
function br(e) {
  if (typeof document > `u` || (typeof navigator < `u` && /jsdom/i.test(navigator.userAgent ?? ``)))
    return wr;
  let t = document.createElement(`canvas`);
  ((t.width = 1200), (t.height = 800));
  let n = t.getContext(`2d`);
  if (!n || typeof t.toDataURL != `function`) return wr;
  e(n, t);
  try {
    return t.toDataURL(`image/png`);
  } catch {
    return wr;
  }
}
function xr() {
  return (
    Tr ||
    ((Tr = br((e, t) => {
      let n = e.createLinearGradient(0, 0, t.width, t.height);
      (n.addColorStop(0, `#0f172a`),
        n.addColorStop(0.55, `#1d4ed8`),
        n.addColorStop(1, `#7c3aed`),
        (e.fillStyle = n),
        e.fillRect(0, 0, t.width, t.height));
      let r = e.createRadialGradient(340, 180, 20, 340, 180, 320);
      (r.addColorStop(0, `rgba(147,197,253,0.92)`),
        r.addColorStop(1, `rgba(147,197,253,0)`),
        (e.fillStyle = r),
        e.fillRect(0, 0, t.width, t.height));
      let i = e.createRadialGradient(920, 260, 30, 920, 260, 360);
      (i.addColorStop(0, `rgba(167,243,208,0.85)`),
        i.addColorStop(1, `rgba(167,243,208,0)`),
        (e.fillStyle = i),
        e.fillRect(0, 0, t.width, t.height),
        (e.strokeStyle = `rgba(103,232,249,0.55)`),
        (e.lineCap = `round`),
        (e.lineWidth = 26),
        e.beginPath(),
        e.moveTo(140, 190),
        e.bezierCurveTo(260, 110, 420, 120, 560, 200),
        e.stroke(),
        (e.strokeStyle = `rgba(196,181,253,0.52)`),
        (e.lineWidth = 22),
        e.beginPath(),
        e.moveTo(620, 270),
        e.bezierCurveTo(760, 150, 910, 150, 1040, 260),
        e.stroke());
    })),
    Tr)
  );
}
function Sr() {
  return (
    Er ||
    ((Er = br((e, t) => {
      ((e.fillStyle = `#f8fafc`),
        e.fillRect(0, 0, t.width, t.height),
        (e.fillStyle = `#eff6ff`),
        Cr(e, 90, 80, 1020, 640, 44),
        e.fill(),
        (e.strokeStyle = `rgba(147,197,253,0.45)`),
        (e.lineWidth = 1));
      for (let t = 90; t <= 1110; t += 60)
        (e.beginPath(), e.moveTo(t, 80), e.lineTo(t, 720), e.stroke());
      for (let t = 80; t <= 720; t += 60)
        (e.beginPath(), e.moveTo(90, t), e.lineTo(1110, t), e.stroke());
      ((e.fillStyle = `#ffffff`),
        (e.strokeStyle = `#2563eb`),
        (e.lineWidth = 10),
        Cr(e, 190, 170, 320, 180, 28),
        e.fill(),
        e.stroke(),
        (e.fillStyle = `#0f172a`),
        Cr(e, 560, 170, 460, 84, 22),
        e.fill(),
        (e.fillStyle = `#475569`),
        Cr(e, 560, 282, 460, 48, 18),
        e.fill(),
        (e.fillStyle = `#ffffff`),
        (e.strokeStyle = `#cbd5e1`),
        (e.lineWidth = 8),
        Cr(e, 190, 410, 830, 170, 30),
        e.fill(),
        e.stroke(),
        (e.fillStyle = `rgba(124,58,237,0.16)`),
        (e.strokeStyle = `#7c3aed`),
        (e.lineWidth = 10),
        e.beginPath(),
        e.arc(980, 520, 54, 0, Math.PI * 2),
        e.fill(),
        e.stroke());
    })),
    Er)
  );
}
function Cr(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
var wr,
  Tr,
  Er,
  Dr = e(() => {
    ((wr = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==`),
      (Tr = null),
      (Er = null));
  });
function Or(e, t = new Date()) {
  if (!e) return ``;
  let n = new Date(e);
  if (Number.isNaN(n.getTime())) return ``;
  let r = Math.max(0, Math.floor((t.getTime() - n.getTime()) / 6e4));
  if (r < 1) return `Just now`;
  if (r < 60) return `${r} min ago`;
  let i = Math.round(
    (Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) -
      Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())) /
      864e5,
  );
  return i === 0
    ? Hr.format(n)
    : i === 1
      ? `Yesterday`
      : i < 7
        ? Ur.format(n)
        : t.getFullYear() === n.getFullYear()
          ? Br.format(n)
          : Vr.format(n);
}
function kr(e = !0) {
  let [t, n] = (0, G.useState)(() => new Date());
  return (
    (0, G.useEffect)(() => {
      if (!e) return;
      let t = globalThis.setInterval(() => {
        n(new Date());
      }, 6e4);
      return () => {
        globalThis.clearInterval(t);
      };
    }, [e]),
    t
  );
}
function Ar(e) {
  if (!e) return ``;
  let t = new Date(e);
  return Number.isNaN(t.getTime()) ? `` : zr.format(t);
}
function jr(e) {
  switch (e) {
    case `resolved`:
      return `Resolved`;
    case `active`:
      return `Active`;
    default:
      return `Thread`;
  }
}
function Mr({ open: e, onOpenChange: t, trigger: n, children: r }) {
  return (0, K.jsxs)(C, {
    open: e,
    onOpenChange: t,
    children: [
      (0, K.jsx)(w, { asChild: !0, children: n }),
      (0, K.jsx)(oe, {
        children: (0, K.jsx)(ee, {
          side: `bottom`,
          align: `end`,
          sideOffset: 6,
          collisionPadding: 8,
          className: `border-token-border-light bg-token-bg-primary z-[120] min-w-40 rounded-xl border p-1 shadow-[0_14px_40px_rgba(15,23,42,0.16)]`,
          onOpenAutoFocus: (e) => e.preventDefault(),
          onCloseAutoFocus: (e) => e.preventDefault(),
          onPointerDown: (e) => e.stopPropagation(),
          children: r,
        }),
      }),
    ],
  });
}
function Nr({ onClick: e, children: t, destructive: n = !1 }) {
  return (0, K.jsx)(`button`, {
    type: `button`,
    className: g(
      `flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left`,
      Gr,
      n
        ? `text-[#D14343] hover:bg-[color-mix(in_srgb,#D14343_10%,transparent)]`
        : `text-token-text-primary hover:bg-token-bg-secondary`,
    ),
    onClick: e,
    children: t,
  });
}
function Pr({ label: e, active: t, count: n, onClick: r, interactive: i }) {
  let a = g(
    `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] leading-4`,
    t
      ? `bg-[color-mix(in_srgb,var(--color-token-charts-blue,#339cff)_16%,transparent)] text-token-text-link-foreground`
      : `bg-token-bg-tertiary text-token-description-foreground`,
    i && `transition-colors hover:bg-token-bg-secondary`,
  );
  return !i || !r
    ? (0, K.jsx)(`span`, { className: a, children: `${e} ${n}` })
    : (0, K.jsx)(`button`, { type: `button`, className: a, onClick: r, children: `${e} ${n}` });
}
function Fr({ value: e, onChange: t, onSubmit: n }) {
  let r = e.trim();
  return (0, K.jsxs)(`div`, {
    className: `border-token-border-light border-t pt-3`,
    children: [
      (0, K.jsx)(`textarea`, {
        value: e,
        onChange: (e) => t(e.target.value),
        rows: 2,
        placeholder: `Reply`,
        className: g(
          `border-token-border-light bg-token-bg-primary text-token-text-primary min-h-20 w-full resize-none rounded-xl border px-3 py-2 outline-none placeholder:text-token-description-foreground`,
          Gr,
        ),
        onKeyDown: (e) => {
          e.key !== `Enter` || e.shiftKey || (e.preventDefault(), r && n());
        },
      }),
      (0, K.jsx)(`div`, {
        className: `mt-2 flex justify-end`,
        children: (0, K.jsx)(`button`, {
          type: `button`,
          className: g(
            `rounded-lg px-3 py-1.5 font-medium transition-colors`,
            Gr,
            r
              ? `bg-token-main-surface-primary text-token-text-primary hover:bg-token-bg-secondary`
              : `bg-token-bg-tertiary text-token-description-foreground`,
          ),
          disabled: !r,
          onClick: n,
          children: `Reply`,
        }),
      }),
    ],
  });
}
function Ir({
  comment: e,
  viewerAuthorId: t,
  canMutate: n,
  isEditing: r,
  relativeTimestamps: i = !1,
  timestampNow: a,
  draftValue: o,
  onDraftChange: s,
  onStartEdit: c,
  onCommitEdit: l,
  onCancelEdit: u,
  onDelete: d,
  onToggleReaction: f,
}) {
  let [p, m] = (0, G.useState)(!1),
    [h, _] = (0, G.useState)(!1),
    v = (0, G.useMemo)(
      () => (i ? Or(e.editedAt ?? e.createdAt, a) : Ar(e.editedAt ?? e.createdAt)),
      [e.createdAt, e.editedAt, i, a],
    ),
    y = o.trim(),
    b = (e) => t != null && e.includes(t);
  return (0, K.jsxs)(`div`, {
    className: `flex gap-3 rounded-2xl bg-token-main-surface-primary`,
    children: [
      i
        ? e.author.avatarUrl
          ? (0, K.jsx)(`img`, {
              alt: `${e.author.displayName}'s avatar`,
              className: `size-8 shrink-0 rounded-full object-cover`,
              src: e.author.avatarUrl,
            })
          : (0, K.jsx)(`span`, {
              "aria-label": `${e.author.displayName}'s avatar`,
              className: `bg-token-bg-tertiary text-token-text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold`,
              children: e.author.initials ?? `??`,
            })
        : (0, K.jsx)(`div`, {
            className: `bg-token-bg-tertiary text-token-text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold`,
            children: e.author.initials ?? `??`,
          }),
      (0, K.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-start justify-between gap-3`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `min-w-0`,
                children: [
                  (0, K.jsx)(`div`, {
                    className: g(`text-token-text-primary truncate font-medium`, Gr),
                    children: e.author.displayName,
                  }),
                  v
                    ? (0, K.jsxs)(`div`, {
                        className: g(`text-token-description-foreground mt-0.5`, Kr),
                        children: [v, e.editedAt ? ` · edited` : ``],
                      })
                    : null,
                ],
              }),
              n && !e.isDeleted
                ? (0, K.jsx)(Mr, {
                    open: p,
                    onOpenChange: m,
                    trigger: (0, K.jsx)(`button`, {
                      type: `button`,
                      className: `text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`,
                      "aria-label": `Comment actions`,
                      children: (0, K.jsx)(L, { className: `size-4` }),
                    }),
                    children: (0, K.jsxs)(`div`, {
                      className: `flex flex-col`,
                      children: [
                        (0, K.jsxs)(Nr, {
                          onClick: () => {
                            (m(!1), c());
                          },
                          children: [(0, K.jsx)(ve, { className: `size-4` }), `Edit`],
                        }),
                        (0, K.jsxs)(Nr, {
                          destructive: !0,
                          onClick: () => {
                            (m(!1), d());
                          },
                          children: [(0, K.jsx)(fe, { className: `size-4` }), `Delete`],
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          r
            ? (0, K.jsxs)(`div`, {
                className: `mt-2`,
                children: [
                  (0, K.jsx)(`textarea`, {
                    value: o,
                    onChange: (e) => s(e.target.value),
                    rows: 3,
                    className: g(
                      `border-token-border-light bg-token-bg-primary text-token-text-primary min-h-24 w-full resize-none rounded-xl border px-3 py-2 outline-none`,
                      Gr,
                    ),
                    onKeyDown: (e) => {
                      e.key !== `Enter` || e.shiftKey || (e.preventDefault(), y && l());
                    },
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `mt-2 flex justify-end gap-2`,
                    children: [
                      (0, K.jsx)(`button`, {
                        type: `button`,
                        className: g(
                          `text-token-description-foreground hover:bg-token-bg-secondary rounded-lg px-2.5 py-1.5 transition-colors`,
                          Gr,
                        ),
                        onClick: u,
                        children: `Cancel`,
                      }),
                      (0, K.jsx)(`button`, {
                        type: `button`,
                        className: g(
                          `rounded-lg px-2.5 py-1.5 font-medium transition-colors`,
                          Gr,
                          y
                            ? `bg-token-main-surface-primary text-token-text-primary hover:bg-token-bg-secondary`
                            : `bg-token-bg-tertiary text-token-description-foreground`,
                        ),
                        disabled: !y,
                        onClick: l,
                        children: `Save`,
                      }),
                    ],
                  }),
                ],
              })
            : (0, K.jsx)(`div`, {
                className: g(
                  `mt-2 whitespace-pre-wrap`,
                  Gr,
                  e.isDeleted
                    ? `text-token-description-foreground italic`
                    : `text-token-text-primary`,
                ),
                children: e.isDeleted ? `Comment deleted.` : e.text,
              }),
          !r && !e.isDeleted
            ? (0, K.jsx)(`div`, {
                className: `mt-2 flex items-center justify-between gap-2`,
                children: (0, K.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-1.5`,
                  children: [
                    e.reactions.map((e) =>
                      (0, K.jsx)(
                        Pr,
                        {
                          label: e.type,
                          count: e.count,
                          active: b(e.authorIds),
                          interactive: n,
                          onClick: n ? () => f(e.type) : void 0,
                        },
                        `${e.type}-${e.authorIds.join(`,`)}`,
                      ),
                    ),
                    n
                      ? (0, K.jsx)(Mr, {
                          open: h,
                          onOpenChange: _,
                          trigger: (0, K.jsx)(`button`, {
                            type: `button`,
                            className: `text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`,
                            "aria-label": `Add reaction`,
                            children: (0, K.jsx)(pe, { className: `size-4` }),
                          }),
                          children: (0, K.jsx)(`div`, {
                            className: `flex items-center gap-1`,
                            children: Wr.map((e) =>
                              (0, K.jsx)(
                                `button`,
                                {
                                  type: `button`,
                                  className: `hover:bg-token-bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg transition-colors`,
                                  onClick: () => {
                                    (_(!1), f(e));
                                  },
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        })
                      : null,
                  ],
                }),
              })
            : null,
        ],
      }),
    ],
  });
}
function Lr({
  targetPrimaryLabel: e,
  targetSecondaryLabel: t,
  showHeader: n = !0,
  relativeTimestamps: r = !1,
  status: i,
  resolvedByName: a,
  resolvedAt: o,
  comments: s,
  isEditing: c,
  viewerAuthorId: l,
  onReply: u,
  onResolve: d,
  onReopen: f,
  onDeleteThread: p,
  onToggleReaction: m,
  onEditComment: h,
  onDeleteComment: _,
}) {
  let v = c && l != null,
    y = v && i !== `resolved` && u != null,
    b = kr(r),
    [x, S] = (0, G.useState)(``),
    [C, w] = (0, G.useState)(!1),
    [T, E] = (0, G.useState)(null),
    [D, O] = (0, G.useState)(``);
  (0, G.useEffect)(() => {
    T != null && !s.some((e) => e.id === T) && (E(null), O(``));
  }, [s, T]);
  let ee = i === `resolved` ? [a, r ? Or(o, b) : Ar(o)].filter(Boolean).join(` · `) : null;
  return (0, K.jsxs)(`div`, {
    className: `flex w-[22rem] max-w-[min(28rem,calc(100vw-32px))] flex-col gap-3`,
    children: [
      n
        ? (0, K.jsxs)(`div`, {
            className: `flex items-start justify-between gap-3`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: g(
                          `inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium`,
                          i === `resolved`
                            ? `bg-token-bg-tertiary text-token-description-foreground`
                            : `bg-[color-mix(in_srgb,var(--color-token-charts-blue,#339cff)_12%,transparent)] text-token-text-link-foreground`,
                        ),
                        children: jr(i),
                      }),
                      t
                        ? (0, K.jsx)(`div`, {
                            className: `text-token-description-foreground truncate text-[11px] leading-4`,
                            children: t,
                          })
                        : null,
                    ],
                  }),
                  ee
                    ? (0, K.jsx)(`div`, {
                        className: g(`text-token-description-foreground mt-1`, Kr),
                        children: ee,
                      })
                    : null,
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1.5`,
                children: [
                  (0, K.jsx)(`span`, {
                    className: `border-token-border-light text-token-text-primary inline-flex rounded-full border px-2 py-1 text-[11px] leading-4 font-medium`,
                    children: e,
                  }),
                  v && (d || f || p)
                    ? (0, K.jsx)(Mr, {
                        open: C,
                        onOpenChange: w,
                        trigger: (0, K.jsx)(`button`, {
                          type: `button`,
                          className: `text-token-description-foreground hover:bg-token-bg-secondary inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors`,
                          "aria-label": `Thread actions`,
                          children: (0, K.jsx)(L, { className: `size-4` }),
                        }),
                        children: (0, K.jsxs)(`div`, {
                          className: `flex flex-col`,
                          children: [
                            i === `resolved`
                              ? f
                                ? (0, K.jsxs)(Nr, {
                                    onClick: () => {
                                      (w(!1), f());
                                    },
                                    children: [
                                      (0, K.jsx)(le, { className: `size-4` }),
                                      `Reopen thread`,
                                    ],
                                  })
                                : null
                              : d
                                ? (0, K.jsxs)(Nr, {
                                    onClick: () => {
                                      (w(!1), d());
                                    },
                                    children: [
                                      (0, K.jsx)(ce, { className: `size-4` }),
                                      `Resolve thread`,
                                    ],
                                  })
                                : null,
                            p
                              ? (0, K.jsxs)(Nr, {
                                  destructive: !0,
                                  onClick: () => {
                                    (w(!1), p());
                                  },
                                  children: [
                                    (0, K.jsx)(fe, { className: `size-4` }),
                                    `Delete thread`,
                                  ],
                                })
                              : null,
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            ],
          })
        : null,
      (0, K.jsx)(`div`, {
        className: `flex max-h-[min(22rem,60vh)] flex-col gap-3 overflow-y-auto pr-1`,
        children: s.map((e) => {
          let t = T === e.id;
          return (0, K.jsx)(
            Ir,
            {
              comment: e,
              viewerAuthorId: l,
              canMutate: v,
              isEditing: t,
              relativeTimestamps: r,
              timestampNow: b,
              draftValue: t ? D : e.text,
              onDraftChange: O,
              onStartEdit: () => {
                (E(e.id), O(e.text));
              },
              onCommitEdit: () => {
                let t = D.trim();
                !t || !h || (h(e.id, t), E(null), O(``));
              },
              onCancelEdit: () => {
                (E(null), O(``));
              },
              onDelete: () => {
                (_?.(e.id), T === e.id && (E(null), O(``)));
              },
              onToggleReaction: (t) => {
                m?.(e.id, t);
              },
            },
            e.id,
          );
        }),
      }),
      y
        ? (0, K.jsx)(Fr, {
            value: x,
            onChange: S,
            onSubmit: () => {
              let e = x.trim();
              !e || !u || (u(e), S(``));
            },
          })
        : null,
    ],
  });
}
function Rr({ open: e, onOpenChange: t, trigger: n, content: r }) {
  return (0, K.jsxs)(C, {
    open: e,
    onOpenChange: t,
    children: [
      (0, K.jsx)(w, { asChild: !0, children: n }),
      (0, K.jsx)(oe, {
        children: (0, K.jsx)(ee, {
          side: `right`,
          align: `start`,
          sideOffset: 10,
          collisionPadding: 12,
          className: `border-token-border-light bg-token-bg-primary z-[80] rounded-2xl border p-3 shadow-[0_18px_60px_rgba(15,23,42,0.18)]`,
          onOpenAutoFocus: (e) => e.preventDefault(),
          onCloseAutoFocus: (e) => e.preventDefault(),
          onPointerDown: (e) => e.stopPropagation(),
          children: r,
        }),
      }),
    ],
  });
}
var G,
  K,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr = e(() => {
    (j(),
      k(),
      (G = t(r())),
      R(),
      (K = T()),
      (zr = new Intl.DateTimeFormat(void 0, { dateStyle: `medium`, timeStyle: `short` })),
      (Br = new Intl.DateTimeFormat(void 0, { month: `short`, day: `numeric` })),
      (Vr = new Intl.DateTimeFormat(void 0, { month: `short`, day: `numeric`, year: `numeric` })),
      (Hr = new Intl.DateTimeFormat(void 0, { hour: `numeric`, minute: `2-digit` })),
      (Ur = new Intl.DateTimeFormat(void 0, { weekday: `long` })),
      (Wr = [`👍`, `❤️`, `👀`, `✅`]),
      (Gr = `text-[length:var(--codex-chat-font-size,13px)] leading-5`),
      (Kr = `text-[11px] leading-4`));
  });
function Jr({ ariaLabel: e, children: t, trailingContent: n }) {
  return (0, q.jsx)(`div`, {
    "aria-label": e,
    className: `flex h-7 items-center overflow-hidden rounded-lg border border-default bg-primary-soft-alpha p-0.5`,
    role: `toolbar`,
    children: (0, q.jsxs)(`div`, {
      className: `flex h-full items-center gap-0.5 [&_button_svg]:size-4`,
      children: [
        t,
        n == null
          ? null
          : (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `mx-0.5 h-4 w-px bg-token-border-light`,
                }),
                n,
              ],
            }),
      ],
    }),
  });
}
function Yr({
  children: e,
  activeLabel: t,
  disabled: n = !1,
  expanded: r,
  label: i,
  onClick: a,
  pressed: o,
  showActiveBackground: s = !0,
  testId: c,
}) {
  let l = o === !0 && t != null,
    u = l ? t : i;
  return (0, q.jsx)(`button`, {
    type: `button`,
    "aria-label": u,
    "aria-expanded": r,
    "aria-pressed": o,
    "data-testid": c,
    disabled: n,
    onClick: a,
    title: u,
    className: g(
      `inline-flex h-6 min-w-6 cursor-pointer items-center overflow-hidden rounded-md active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100`,
      t == null
        ? `w-6 justify-center transition-transform duration-100`
        : `ease-basic transition-[max-width,padding-inline,background-color,color,transform] duration-relaxed [will-change:max-width] motion-reduce:transition-none`,
      t != null && (l ? `max-w-40 justify-start px-2` : `max-w-6 justify-center px-0`),
      s && (r || o)
        ? `bg-info-soft text-info`
        : `text-token-text-secondary hover:bg-primary-ghost-hover hover:text-token-text-primary`,
    ),
    children: (0, q.jsxs)(`span`, {
      className: g(`flex min-w-0 items-center`, l ? `justify-start` : `w-full justify-center`),
      children: [
        (0, q.jsx)(`span`, {
          className: g(
            `flex shrink-0 items-center`,
            t != null &&
              `ease-basic transition-transform duration-relaxed motion-reduce:transition-none`,
            l ? `-translate-x-0.5` : `translate-x-0`,
          ),
          children: e,
        }),
        t == null
          ? null
          : (0, q.jsx)(`span`, {
              className: g(
                `ease-basic min-w-0 overflow-hidden whitespace-nowrap text-sm transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
                l ? `ms-1 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
              ),
              children: u,
            }),
      ],
    }),
  });
}
var q,
  Xr = e(() => {
    (j(), (q = T()));
  });
function Zr({ ariaLabel: e, primaryItems: t, secondaryLabel: n, secondaryItems: r, testId: i }) {
  let [a, o] = (0, ai.useState)(!1);
  return (0, J.jsxs)(C, {
    open: a,
    onOpenChange: o,
    children: [
      (0, J.jsx)(w, {
        asChild: !0,
        children: (0, J.jsx)(`button`, {
          type: `button`,
          "aria-label": e,
          "data-testid": i,
          title: e,
          className: `flex size-6 cursor-pointer items-center justify-center rounded-md text-token-text-secondary transition-transform duration-100 hover:bg-primary-ghost-hover hover:text-token-text-primary active:scale-[0.97] data-[state=open]:bg-primary-ghost-hover data-[state=open]:text-token-text-primary`,
          children: (0, J.jsx)(pe, { size: `compact` }),
        }),
      }),
      (0, J.jsx)(oe, {
        children: (0, J.jsxs)(ee, {
          align: `center`,
          side: `bottom`,
          sideOffset: 8,
          className: `z-50 w-56 rounded-2xl border border-token-border-default bg-token-main-surface-primary p-2 text-token-text-primary shadow-xl`,
          children: [
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, J.jsx)(`div`, {
                  className: `px-2 text-sm text-token-text-tertiary`,
                  children: e,
                }),
                t.map((e) => (0, J.jsx)(Qr, { item: e, onClose: () => o(!1) }, e.id)),
              ],
            }),
            (0, J.jsx)(`div`, { className: `my-4 h-px bg-token-border-light` }),
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, J.jsx)(`div`, {
                  className: `px-2 text-sm text-token-text-tertiary`,
                  children: n,
                }),
                r.map((e) => (0, J.jsx)(Qr, { item: e, onClose: () => o(!1) }, e.id)),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Qr({ item: e, onClose: t }) {
  let n = e.icon;
  return (0, J.jsxs)(`button`, {
    type: `button`,
    disabled: e.disabled,
    onClick: () => {
      (e.onSelect?.(), t());
    },
    className: `flex h-9 w-full cursor-pointer items-center gap-3 rounded-xl px-2 text-left text-sm active:scale-[0.98] enabled:hover:bg-primary-ghost-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100`,
    children: [(0, J.jsx)(n, { className: `size-5` }), (0, J.jsx)(`span`, { children: e.label })],
  });
}
function $r({ className: e, ...t }) {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: (0, J.jsx)(`path`, {
      d: `M4 4H16M10 4V16`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
    }),
  });
}
function ei({ className: e, ...t }) {
  return (0, J.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: [
      (0, J.jsx)(`rect`, {
        x: `2.75`,
        y: `3.25`,
        width: `14.5`,
        height: `13.5`,
        rx: `2.25`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
      }),
      (0, J.jsx)(`circle`, { cx: `13.5`, cy: `7`, r: `1.25`, fill: `currentColor` }),
      (0, J.jsx)(`path`, {
        d: `M4 14L8 10L10.5 12.5L12 11L16 15`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
function ti({ className: e, ...t }) {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: (0, J.jsx)(`path`, {
      d: `M3.5 16.25V9.75H7V16.25M8.25 16.25V4.25H11.75V16.25M13 16.25V7H16.5V16.25`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinejoin: `round`,
    }),
  });
}
function ni({ className: e, ...t }) {
  return (0, J.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: [
      (0, J.jsx)(`rect`, {
        x: `3`,
        y: `6`,
        width: `14`,
        height: `11`,
        rx: `2`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
      }),
      (0, J.jsx)(`path`, {
        d: `M6 6V4.5C6 3.67 6.67 3 7.5 3H9L10 1.75L11 3H12.5C13.33 3 14 3.67 14 4.5V6`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
function ri({ className: e, ...t }) {
  return (0, J.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: [
      (0, J.jsx)(`rect`, {
        x: `2.75`,
        y: `3.25`,
        width: `14.5`,
        height: `13.5`,
        rx: `2.25`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
      }),
      (0, J.jsx)(`path`, { d: `M8 4V16M8 9H17`, stroke: `currentColor`, strokeWidth: `1.5` }),
    ],
  });
}
function ii({ className: e, ...t }) {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: (0, J.jsx)(`path`, {
      d: `M3 9.25C3 5.8 5.91 3 9.5 3S16 5.8 16 9.25S13.09 15.5 9.5 15.5C8.68 15.5 7.9 15.35 7.18 15.08L3.5 16.5L4.44 13.55C3.54 12.43 3 10.95 3 9.25Z`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinejoin: `round`,
    }),
  });
}
var ai,
  J,
  oi = e(() => {
    (k(), (ai = t(r())), R(), (J = T()));
  });
function si(e) {
  if (!(e instanceof Element)) return !1;
  if (e.closest(li)) return !0;
  let t = e.closest(`[contenteditable]`);
  if (!t) return !1;
  let n = t.getAttribute(`contenteditable`)?.trim().toLowerCase();
  return (
    n === `` ||
    n === `true` ||
    n === `plaintext-only` ||
    (n !== `false` && t instanceof HTMLElement && t.isContentEditable)
  );
}
function ci(e, { allowShift: t = !1, requirePrimaryModifier: n = !1 } = {}) {
  if (e.repeat || e.nativeEvent.isComposing || e.keyCode === 229 || e.altKey || (!t && e.shiftKey))
    return !1;
  let r = e.metaKey || e.ctrlKey;
  return n ? e.metaKey !== e.ctrlKey : !r;
}
var li,
  ui = e(() => {
    li = [
      `input`,
      `textarea`,
      `select`,
      `[role='textbox']`,
      `[role='searchbox']`,
      `[role='combobox']`,
      `[data-testid='popcorn-find-bar']`,
      `[data-testid='popcorn-annotation-editor']`,
      `[data-testid='popcorn-presentation-comments-sidebar']`,
    ].join(`,`);
  });
function di({ fontSize: e, onChange: t }) {
  return (0, Y.jsx)(`div`, {
    className: `w-32 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl`,
    children: hi.map((n) => {
      let r = n === e;
      return (0, Y.jsx)(
        S,
        {
          asChild: !0,
          children: (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-pressed": r,
            onClick: () => t(n),
            className: g(
              `flex h-7 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-left text-sm`,
              r ? `bg-info-soft text-info` : `hover:bg-primary-ghost-hover`,
            ),
            children: [
              (0, Y.jsx)(`span`, { children: n }),
              (0, Y.jsx)(`span`, {
                className: r ? `text-info` : `text-token-text-tertiary`,
                children: `pt`,
              }),
            ],
          }),
        },
        n,
      );
    }),
  });
}
function fi({ color: e, onChange: t, label: n = `Color`, allowNone: r = !1 }) {
  return (0, Y.jsxs)(`div`, {
    className: `rounded-xl border border-token-border-default bg-token-main-surface-primary p-3 shadow-xl`,
    children: [
      (0, Y.jsx)(`p`, {
        className: `mb-2 text-xs font-medium text-token-text-secondary`,
        children: n,
      }),
      (0, Y.jsxs)(`div`, {
        className: `grid grid-cols-4 gap-2`,
        children: [
          r
            ? (0, Y.jsx)(S, {
                asChild: !0,
                children: (0, Y.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `No fill`,
                  "aria-pressed": e == null,
                  onClick: () => t(null),
                  className: g(
                    `flex size-7 cursor-pointer items-center justify-center rounded-lg border border-token-border-light bg-token-main-surface-primary text-token-text-secondary`,
                    e == null
                      ? `ring-2 ring-text-info`
                      : `hover:ring-2 hover:ring-token-border-light`,
                  ),
                  children: (0, Y.jsx)(`span`, { "aria-hidden": !0, children: `×` }),
                }),
              })
            : null,
          mi.map((n) => {
            let r = e != null && pi(e, n.value);
            return (0, Y.jsx)(
              S,
              {
                asChild: !0,
                children: (0, Y.jsx)(`button`, {
                  type: `button`,
                  "aria-label": n.label,
                  "aria-pressed": r,
                  onClick: () => t(n.value),
                  className: g(
                    `size-7 cursor-pointer rounded-lg border border-token-border-light`,
                    r ? `ring-2 ring-text-info` : `hover:ring-2 hover:ring-token-border-light`,
                  ),
                  style: { backgroundColor: n.value },
                }),
              },
              n.value,
            );
          }),
        ],
      }),
    ],
  });
}
function pi(e, t) {
  return e.toUpperCase() === t.toUpperCase();
}
var Y,
  mi,
  hi,
  gi = e(() => {
    (k(),
      j(),
      (Y = T()),
      (mi = [
        { label: `White`, value: `#FFFFFF` },
        { label: `Black`, value: `#000000` },
        { label: `Gray`, value: `#64748B` },
        { label: `Red`, value: `#EF4444` },
        { label: `Orange`, value: `#F97316` },
        { label: `Yellow`, value: `#EAB308` },
        { label: `Green`, value: `#22C55E` },
        { label: `Blue`, value: `#3B82F6` },
        { label: `Purple`, value: `#A855F7` },
      ]),
      (hi = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 32, 48, 64]));
  }),
  _i,
  vi = e(() => {
    _i = {
      Purple: {
        1e3: `#000000`,
        900: `#200D53`,
        800: `#35158E`,
        700: `#4C20CA`,
        600: `#6D3FDC`,
        500: `#875BE1`,
        400: `#A47EE7`,
        300: `#BC9EED`,
        200: `#D3BEF2`,
        100: `#E8DFF6`,
        0: `#FFFFFF`,
      },
      Pink: {
        1e3: `#000000`,
        900: `#310E28`,
        800: `#541945`,
        700: `#782563`,
        600: `#9D3383`,
        500: `#D347B0`,
        400: `#E659C2`,
        300: `#EC8ACF`,
        200: `#F1B4DD`,
        100: `#F5DBEC`,
        0: `#FFFFFF`,
      },
      Red: {
        1e3: `#000000`,
        900: `#360C19`,
        800: `#5B142D`,
        700: `#831D42`,
        600: `#AB2958`,
        500: `#D53670`,
        400: `#EE4D83`,
        300: `#F28BA6`,
        200: `#F5B5C3`,
        100: `#F7DBE1`,
        0: `#FFFFFF`,
      },
      Orange: {
        1e3: `#000000`,
        900: `#29170C`,
        800: `#4D2510`,
        700: `#723414`,
        600: `#96461C`,
        500: `#BB5926`,
        400: `#E36E30`,
        300: `#EF9262`,
        200: `#F3B99C`,
        100: `#F6DDD1`,
        0: `#FFFFFF`,
      },
      Yellow: {
        1e3: `#000000`,
        900: `#231A07`,
        800: `#3F2D07`,
        700: `#5C4107`,
        600: `#7A570C`,
        500: `#996E12`,
        400: `#B98618`,
        300: `#DB9F1E`,
        200: `#F1B023`,
        100: `#FADEB3`,
        0: `#FFFFFF`,
      },
      Olive: {
        1e3: `#000000`,
        900: `#1E1C06`,
        800: `#323204`,
        700: `#494903`,
        600: `#616106`,
        500: `#7A7A0A`,
        400: `#95950E`,
        300: `#B0B013`,
        200: `#CCCC24`,
        100: `#EAE848`,
        0: `#FFFFFF`,
      },
      Green: {
        1e3: `#000000`,
        900: `#0E2008`,
        800: `#0C380D`,
        700: `#135215`,
        600: `#1D6D1E`,
        500: `#268928`,
        400: `#30A633`,
        300: `#3DCB40`,
        200: `#4DE24E`,
        100: `#94F98A`,
        0: `#FFFFFF`,
      },
      Turquoise: {
        1e3: `#000000`,
        900: `#06201A`,
        800: `#08372F`,
        700: `#0A5044`,
        600: `#116B5B`,
        500: `#188673`,
        400: `#20A38C`,
        300: `#27C0A6`,
        200: `#2CD1B4`,
        100: `#67FBDC`,
        0: `#FFFFFF`,
      },
      Cyan: {
        1e3: `#000000`,
        900: `#061F26`,
        800: `#053642`,
        700: `#044E5F`,
        600: `#08687E`,
        500: `#0C839E`,
        400: `#129FBF`,
        300: `#16B7DB`,
        200: `#51D7FC`,
        100: `#BCEBFB`,
        0: `#FFFFFF`,
      },
      Blue: {
        1e3: `#000000`,
        900: `#0D1B37`,
        800: `#15305F`,
        700: `#1E4788`,
        600: `#2A5EB1`,
        500: `#3A7DE8`,
        400: `#6490F0`,
        300: `#91AAF3`,
        200: `#B8C6F6`,
        100: `#DDE2F8`,
        0: `#FFFFFF`,
      },
      DesaturatedCool: {
        1e3: `#000000`,
        900: `#1A1A1A`,
        800: `#262626`,
        700: `#333333`,
        600: `#474747`,
        500: `#595959`,
        400: `#747474`,
        300: `#8C8C8C`,
        200: `#B3B3B3`,
        100: `#D8D8D8`,
        0: `#FFFFFF`,
      },
      DesaturatedWarm: {
        1e3: `#000000`,
        900: `#1E1C1B`,
        800: `#2C2927`,
        700: `#393634`,
        600: `#4E4947`,
        500: `#62605E`,
        400: `#7A7775`,
        300: `#928E8D`,
        200: `#B3ACAB`,
        100: `#D8D1D0`,
        0: `#FFFFFF`,
      },
    };
  });
function yi({
  icon: e,
  hideLabel: t,
  isActive: n,
  label: r,
  subLabel: i,
  iconClassName: a,
  labelClassName: o,
  subLabelId: s,
}) {
  return (0, X.jsxs)(X.Fragment, {
    children: [
      e
        ? (0, X.jsx)(e, {
            className: g(
              `size-4`,
              {
                "me-0.5": !t,
                "text-token-text-tertiary": !t && !n,
                "text-token-text-primary": t && !n,
                "text-info": n,
              },
              a,
            ),
          })
        : null,
      t
        ? null
        : (0, X.jsx)(`span`, {
            className: g(`truncate text-sm`, { "text-token-text-primary": !n, "text-info": n }, o),
            children: r,
          }),
      i == null
        ? null
        : (0, X.jsxs)(X.Fragment, {
            children: [
              t ? null : ` `,
              (0, X.jsx)(`span`, { id: s, className: `contents`, children: i }),
            ],
          }),
    ],
  });
}
function bi({ children: e, ariaLabel: t, onKeyDown: n }) {
  return (0, X.jsx)(`div`, {
    role: `toolbar`,
    "aria-label": t,
    ref: (e) => {
      if (!e) return;
      let t = wi(e);
      Ti(t, t.find((e) => e === document.activeElement) ?? t.find((e) => e.tabIndex === 0));
    },
    className: g(
      `bg-token-main-surface-primary relative m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 py-1`,
      Di,
    ),
    onFocusCapture: (e) => {
      e.target instanceof HTMLButtonElement &&
        e.target.matches(Oi) &&
        Ti(wi(e.currentTarget), e.target);
    },
    onKeyDown: (e) => {
      let t = e.key.toLowerCase();
      if (!e.defaultPrevented && !e.altKey && (t === `z` || t === `y`) && (e.metaKey || e.ctrlKey))
        return;
      if (e.defaultPrevented) {
        e.stopPropagation();
        return;
      }
      if (!(e.target instanceof HTMLElement)) return;
      if (!e.currentTarget.contains(e.target)) {
        e.stopPropagation();
        return;
      }
      if (e.target.closest(`input, textarea, [contenteditable]:not([contenteditable='false'])`)) {
        e.stopPropagation();
        return;
      }
      if ((n?.(e), e.defaultPrevented)) {
        e.stopPropagation();
        return;
      }
      if (e.isPropagationStopped()) return;
      let r = e.target.closest(Oi);
      if (!r || !e.currentTarget.contains(r)) return;
      let i = wi(e.currentTarget),
        a = i.indexOf(r),
        o;
      if (e.key === `ArrowRight`) o = i[(a + 1) % i.length];
      else if (e.key === `ArrowLeft`) o = i[(a - 1 + i.length) % i.length];
      else if (e.key === `Home`) o = i[0];
      else if (e.key === `End`) o = i.at(-1);
      else if (e.key === `Escape`) return;
      else {
        e.stopPropagation();
        return;
      }
      (e.preventDefault(), e.stopPropagation(), Ti(i, o), o?.focus());
    },
    children: e,
  });
}
function xi({
  actionId: e,
  label: t,
  subLabel: n,
  icon: r,
  isDisabled: i = !1,
  isActive: a,
  hideLabel: o = !1,
  onClick: s,
  onMouseDown: c,
  iconClassName: l,
  labelClassName: u,
}) {
  let d = (0, Ei.useId)();
  return (0, X.jsx)(`button`, {
    type: `button`,
    tabIndex: -1,
    "data-toolbar-action": e,
    className: g(
      `flex h-full cursor-pointer items-center gap-2 rounded-lg px-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent`,
      a ? `bg-info-soft` : `hover:bg-primary-ghost-hover`,
    ),
    onClick: s,
    onMouseDown: c,
    "aria-label": o ? t : void 0,
    "aria-describedby": o && n != null ? d : void 0,
    disabled: i,
    "aria-pressed": a,
    "data-state": a ? `on` : void 0,
    children: (0, X.jsx)(yi, {
      icon: r,
      hideLabel: o,
      label: t,
      subLabel: n,
      isActive: a,
      iconClassName: l,
      labelClassName: u,
      subLabelId: d,
    }),
  });
}
function Si({
  actionId: e,
  label: t,
  hideLabel: n,
  icon: r,
  subLabel: i,
  children: a,
  align: o = `end`,
  portalContainerElement: s,
}) {
  let c = (0, Ei.useId)();
  return (0, X.jsxs)(C, {
    children: [
      (0, X.jsx)(w, {
        asChild: !0,
        children: (0, X.jsx)(`button`, {
          type: `button`,
          tabIndex: -1,
          "data-toolbar-action": e,
          className: `flex h-full cursor-pointer items-center gap-2 rounded-lg px-2 hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`,
          "aria-label": n ? t : void 0,
          "aria-describedby": n && i != null ? c : void 0,
          children: (0, X.jsx)(yi, { icon: r, hideLabel: n, label: t, subLabel: i, subLabelId: c }),
        }),
      }),
      s
        ? (0, X.jsx)(oe, {
            container: s,
            children: (0, X.jsx)(ee, {
              "aria-label": t,
              align: o,
              sideOffset: 8,
              className: `pointer-events-auto z-50`,
              children: a,
            }),
          })
        : null,
    ],
  });
}
function Ci() {
  return (0, X.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": `vertical`,
    className: `mx-1 h-3 w-px bg-token-border-default`,
  });
}
function wi(e) {
  return Array.from(e.querySelectorAll(Oi));
}
function Ti(e, t = e[0]) {
  for (let n of e) n.tabIndex = n === t ? 0 : -1;
}
var Ei,
  X,
  Di,
  Oi,
  ki = e(() => {
    (k(),
      j(),
      (Ei = t(r())),
      (X = T()),
      (Di = `shadow-[0_8px_12px_0_rgba(0,0,0,0.16),0_0_1px_0_rgba(0,0,0,0.60)]`),
      (Oi = `button[data-toolbar-action]:not([disabled])`));
  });
function Ai({
  bounds: e,
  zoom: t = 1,
  isVisible: n,
  items: r,
  ariaLabel: i = `Editing tools`,
  overlayContent: a,
  overlayVisible: o = !1,
  onKeyDown: s,
}) {
  let [l, u] = (0, Z.useState)(() => typeof window > `u`),
    [m, h] = (0, Z.useState)(null),
    {
      refs: _,
      floatingStyles: v,
      update: y,
    } = c({
      placement: `top`,
      strategy: `absolute`,
      middleware: [f(12), O({ fallbackPlacements: [`bottom`] }), p({ padding: 8 })],
      whileElementsMounted: d,
    }),
    b = (0, Z.useCallback)((e) => {
      (e.preventDefault(), e.stopPropagation());
    }, []);
  if (
    ((0, Z.useEffect)(() => {
      if (typeof window > `u`) {
        u(!0);
        return;
      }
      if (!n) {
        u(!1);
        return;
      }
      u(!0);
    }, [n]),
    (0, Z.useEffect)(() => {
      n && y?.();
    }, [e?.height, e?.left, e?.top, e?.width, n, y, t]),
    !e || !n || r.length === 0)
  )
    return null;
  let x = (e.left + e.width / 2) * t,
    S = Math.max(8, e.top * t - Ni);
  return (0, Q.jsxs)(`div`, {
    ref: h,
    "data-popcorn-edit-toolbar-root": `true`,
    className: `pointer-events-none absolute inset-0 z-30`,
    children: [
      (0, Q.jsx)(`div`, {
        ref: _.setReference,
        className: `pointer-events-none absolute`,
        style: { left: x, top: S, width: 1, height: 1 },
      }),
      (0, Q.jsx)(`div`, {
        ref: _.setFloating,
        className: `pointer-events-auto absolute`,
        style: { ...v, zIndex: 30 },
        "data-testid": `popcorn-edit-toolbar`,
        children: (0, Q.jsx)(`div`, {
          className: g(
            `transition-all duration-150 ease-out`,
            l ? `translate-y-0 opacity-100` : `translate-y-2 opacity-0`,
          ),
          children: (0, Q.jsxs)(bi, {
            ariaLabel: i,
            onKeyDown: s,
            children: [
              (0, Q.jsx)(`div`, {
                "aria-hidden": o,
                inert: o,
                className: g(
                  `flex h-full items-center transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
                  o ? `pointer-events-none scale-[0.98] opacity-0` : `scale-100 opacity-100`,
                ),
                children: r.map((e) => {
                  switch (e.kind) {
                    case `button`:
                      return (0, Q.jsx)(
                        xi,
                        {
                          actionId: e.id,
                          label: e.label,
                          icon: e.icon,
                          hideLabel: e.hideLabel,
                          isActive: e.isActive,
                          isDisabled: e.isDisabled,
                          subLabel: e.subLabel,
                          iconClassName: e.iconClassName,
                          labelClassName: e.labelClassName,
                          onClick: (t) => {
                            (b(t), e.onClick?.());
                          },
                        },
                        e.id,
                      );
                    case `popover`:
                      return (0, Q.jsx)(
                        Si,
                        {
                          actionId: e.id,
                          label: e.label,
                          icon: e.icon,
                          hideLabel: e.hideLabel,
                          subLabel: e.subLabel,
                          align: e.align,
                          portalContainerElement: m,
                          children: e.content,
                        },
                        e.id,
                      );
                    case `separator`:
                      return (0, Q.jsx)(Ci, {}, e.id);
                  }
                }),
              }),
              (0, Q.jsx)(`div`, {
                "aria-hidden": !o,
                className: g(
                  `absolute inset-1 transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
                  o
                    ? `pointer-events-auto scale-100 opacity-100`
                    : `pointer-events-none scale-[0.98] opacity-0`,
                ),
                children: a,
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function ji({
  bounds: e,
  zoom: t,
  isVisible: n,
  selectionRangeAddress: r,
  runWorksheetEdit: i,
  formatting: a,
  manualEditUiEnabled: o = !1,
  isInspectorOpen: s = !1,
  selectionActions: c,
  selectionKey: l,
  shortcutScopeElement: u,
  onDismiss: d,
  onToggleInspector: f,
  onAskSelectionContext: p,
}) {
  let [m, h] = (0, Z.useState)(``),
    [g, _] = (0, Z.useState)(!1),
    v = (0, Z.useRef)(null),
    y = (0, Z.useMemo)(
      () =>
        Pi.flatMap((e) =>
          Fi.map((t) => {
            let n = _i[e];
            return { key: `${e}-${t}`, label: `${e} shade ${t}`, hex: n?.[t] ?? `#000000` };
          }),
        ),
      [],
    ),
    b = (0, Z.useCallback)(
      (e) => {
        !r || !i || i(`applyRangeFill`, { rangeAddress: r, hex: e });
      },
      [i, r],
    ),
    x = (0, Z.useCallback)(
      (e) => {
        !r || !i || i(`applyRangeFontColor`, { rangeAddress: r, hex: e });
      },
      [i, r],
    ),
    C = o && n && !g && c != null,
    w = c?.onAskForEditShown;
  (0, Z.useEffect)(() => {
    !C || l == null || v.current === l || w == null || ((v.current = l), w());
  }, [C, w, l]);
  let T = (0, Z.useCallback)(
    (e) => {
      c && (c.startAskChat(e), _(!0));
    },
    [c],
  );
  _t({ enabled: C, onClick: T, shortcutScopeElement: u });
  let E = () => {
      (h(``), _(!1), d?.());
    },
    D = (e, t) => {
      !c ||
        !m.trim() ||
        ((t ? c.defaultSubmitMode !== `saved` : c.defaultSubmitMode === `saved`) &&
          c.savedSubmitDisabled) ||
        (c.submitAskChat(m, e, t), E());
    };
  if (o) {
    let o = r != null && a != null,
      l = [
        ...(c
          ? [
              {
                kind: `button`,
                id: `ask-chat`,
                label: `Ask Chat`,
                subLabel: (0, Q.jsx)(`span`, {
                  className: `text-[11px] leading-none text-token-text-tertiary`,
                  children: vt(),
                }),
                onClick: () => T(`ask_codex_button`),
              },
              ...(o || f ? [{ kind: `separator`, id: `ask-chat-separator` }] : []),
            ]
          : []),
        ...(o
          ? [
              {
                kind: `button`,
                id: `bold`,
                label: `Bold`,
                icon: I,
                hideLabel: !0,
                isActive: a.bold,
                onClick: () => {
                  i?.(`toggleRangeBold`, { rangeAddress: r, value: !a.bold });
                },
              },
              {
                kind: `popover`,
                id: `text-color`,
                label: `Text color`,
                hideLabel: !0,
                subLabel: (0, Q.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `block size-4 rounded-full border border-token-border-light`,
                  style: { backgroundColor: a.fontColor },
                }),
                align: `center`,
                content: (0, Q.jsx)(fi, {
                  color: a.fontColor,
                  label: `Text color`,
                  onChange: (e) => {
                    e != null && x(e);
                  },
                }),
              },
              {
                kind: `popover`,
                id: `text-size`,
                label: `Text size`,
                hideLabel: !0,
                subLabel: (0, Q.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `text-sm font-medium text-token-text-primary`,
                  children: a.fontSize,
                }),
                align: `center`,
                content: (0, Q.jsx)(di, {
                  fontSize: a.fontSize,
                  onChange: (e) => {
                    i?.(`applyRangeFontSize`, { rangeAddress: r, size: e });
                  },
                }),
              },
            ]
          : []),
        ...(f
          ? [
              ...(o ? [{ kind: `separator`, id: `style-picker-separator` }] : []),
              {
                kind: `button`,
                id: `style-picker`,
                label: `Open style picker`,
                icon: ue,
                hideLabel: !0,
                isActive: s,
                onClick: f,
              },
            ]
          : []),
      ],
      u = g
        ? (0, Q.jsxs)(`form`, {
            className: `flex h-full w-full items-center gap-2 px-1`,
            onSubmit: (e) => {
              (e.preventDefault(), e.stopPropagation(), D(`button`, !1));
            },
            onKeyDown: (e) => {
              if ((e.stopPropagation(), e.key === `Enter` && !e.nativeEvent.isComposing)) {
                (e.preventDefault(), D(`keyboard`, e.metaKey || e.ctrlKey));
                return;
              }
              if (e.key !== `Escape`) return;
              e.preventDefault();
              let t = e.currentTarget.closest(`[role='toolbar']`);
              ((0, Mi.flushSync)(() => _(!1)),
                t?.querySelector(`button[data-toolbar-action='ask-chat']`)?.focus());
            },
            children: [
              (0, Q.jsx)(`input`, {
                autoFocus: !0,
                "aria-label": `Ask Chat about this selection`,
                className: `min-w-0 flex-1 bg-transparent text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary`,
                placeholder: `Ask Chat about this selection`,
                value: m,
                onChange: (e) => h(e.currentTarget.value),
              }),
              (0, Q.jsx)(`button`, {
                type: `submit`,
                "aria-label": `Send to Chat`,
                disabled: !m.trim() || (c?.defaultSubmitMode === `saved` && c.savedSubmitDisabled),
                className: `flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100`,
                children: (0, Q.jsx)(Se, { className: `size-4` }),
              }),
            ],
          })
        : null;
    return (0, Q.jsx)(Ai, {
      ariaLabel: g ? `Ask Chat` : `Selection actions`,
      bounds: e,
      zoom: t,
      isVisible: n,
      items: l,
      overlayContent: u,
      overlayVisible: g,
      onKeyDown: (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), E());
      },
    });
  }
  return (0, Q.jsx)(Ai, {
    bounds: e,
    zoom: t,
    isVisible: n,
    items: [
      { kind: `button`, id: `text-style`, label: `Text styles`, icon: be },
      {
        kind: `button`,
        id: `bold`,
        label: `Bold`,
        icon: I,
        hideLabel: !0,
        onClick: () => {
          !r || !i || i(`toggleRangeBold`, { rangeAddress: r });
        },
      },
      {
        kind: `button`,
        id: `italic`,
        label: `Italic`,
        icon: xe,
        hideLabel: !0,
        onClick: () => {
          !r || !i || i(`toggleRangeItalic`, { rangeAddress: r });
        },
      },
      { kind: `separator`, id: `text-separator` },
      {
        kind: `popover`,
        id: `fill-color`,
        label: `Fill color`,
        icon: he,
        hideLabel: !0,
        align: `center`,
        content: (0, Q.jsxs)(`div`, {
          "data-walnut-edit-popover": `true`,
          className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `mb-2 text-xs font-medium text-token-text-secondary`,
              children: `Background color`,
            }),
            (0, Q.jsx)(`div`, {
              className: `grid grid-cols-7 gap-1`,
              children: y.map((e) =>
                (0, Q.jsx)(
                  S,
                  {
                    asChild: !0,
                    children: (0, Q.jsx)(`button`, {
                      type: `button`,
                      className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                      style: { backgroundColor: e.hex },
                      onClick: (t) => {
                        (t.preventDefault(), t.stopPropagation(), b(e.hex));
                      },
                      children: (0, Q.jsx)(`span`, { className: `sr-only`, children: e.label }),
                    }),
                  },
                  e.key,
                ),
              ),
            }),
          ],
        }),
      },
      {
        kind: `popover`,
        id: `text-color`,
        label: `Text color`,
        icon: ue,
        hideLabel: !0,
        align: `center`,
        content: (0, Q.jsxs)(`div`, {
          "data-walnut-edit-popover": `true`,
          className: `rounded-lg border border-token-border-light bg-white p-3 shadow-xl`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `mb-2 text-xs font-medium text-token-text-secondary`,
              children: `Text color`,
            }),
            (0, Q.jsx)(`div`, {
              className: `grid grid-cols-7 gap-1`,
              children: y.map((e) =>
                (0, Q.jsx)(
                  S,
                  {
                    asChild: !0,
                    children: (0, Q.jsx)(`button`, {
                      type: `button`,
                      className: `focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2`,
                      style: { backgroundColor: e.hex },
                      onClick: (t) => {
                        (t.preventDefault(), t.stopPropagation(), x(e.hex));
                      },
                      children: (0, Q.jsx)(`span`, { className: `sr-only`, children: e.label }),
                    }),
                  },
                  `text-${e.key}`,
                ),
              ),
            }),
          ],
        }),
      },
      {
        kind: `button`,
        id: `borders`,
        label: `Borders`,
        icon: ge,
        hideLabel: !0,
        onClick: () => {
          !r || !i || i(`applyRangeBorders`, { rangeAddress: r });
        },
      },
      { kind: `separator`, id: `ask-separator` },
      {
        kind: `button`,
        id: `ask`,
        label: `Ask`,
        subLabel: (0, Q.jsx)(`span`, {
          className: `text-[11px] leading-none text-token-text-tertiary`,
          children: `⌘I`,
        }),
        onClick: () => {
          p?.();
        },
      },
    ],
  });
}
var Z,
  Mi,
  Q,
  Ni,
  Pi,
  Fi,
  Ii = e(() => {
    (D(),
      k(),
      j(),
      (Z = t(r())),
      (Mi = t(re())),
      lr(),
      gi(),
      vi(),
      ki(),
      R(),
      (Q = T()),
      (Ni = 12),
      (Pi = [`DesaturatedWarm`, `Purple`, `Red`, `Orange`, `Yellow`, `Green`, `Cyan`, `Blue`]),
      (Fi = [700, 600, 500, 400, 300, 200, 100]));
  });
function Li({ className: e, ...t }) {
  return (0, Ri.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: g(`size-5`, e),
    ...t,
    children: [
      (0, Ri.jsx)(`path`, {
        d: `M3.5 5H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Ri.jsx)(`path`, {
        d: `M6.5 10H14.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Ri.jsx)(`path`, {
        d: `M3.5 15H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
var Ri,
  zi = e(() => {
    (j(), (Ri = T()));
  });
function Bi({ className: e, ...t }) {
  return (0, Vi.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: g(`size-5`, e),
    ...t,
    children: [
      (0, Vi.jsx)(`path`, {
        d: `M3.5 5H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Vi.jsx)(`path`, {
        d: `M3.5 10H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Vi.jsx)(`path`, {
        d: `M3.5 15H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
var Vi,
  Hi = e(() => {
    (j(), (Vi = T()));
  });
function Ui({ className: e, ...t }) {
  return (0, Wi.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: g(`size-5`, e),
    ...t,
    children: [
      (0, Wi.jsx)(`path`, {
        d: `M3.5 5H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Wi.jsx)(`path`, {
        d: `M3.5 10H11.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, Wi.jsx)(`path`, {
        d: `M3 15H14`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
var Wi,
  Gi = e(() => {
    (j(), (Wi = T()));
  });
function Ki({ className: e, ...t }) {
  return (0, qi.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: g(`size-5`, e),
    ...t,
    children: [
      (0, qi.jsx)(`path`, {
        d: `M3.5 5H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, qi.jsx)(`path`, {
        d: `M9.5 10H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
      (0, qi.jsx)(`path`, {
        d: `M6.5 15H17.5`,
        stroke: `currentColor`,
        strokeWidth: `1.33`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    ],
  });
}
var qi,
  Ji = e(() => {
    (j(), (qi = T()));
  }),
  Yi = e(() => {});
function Xi(e) {
  return (e ?? []).filter((e) => e.length > 0);
}
function Zi(e, t) {
  let n = e.slice(t).filter((e) => e.length > 0);
  return n.length === 0 ? null : n.length === 1 ? (n[0] ?? null) : M(n);
}
function Qi(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function $i(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (!r || !i || !Qi(r, i)) return !1;
  }
  return !0;
}
function ea(e) {
  let t = Xi(e.externalCrdtUpdates);
  return (
    e.initialCrdtState && e.initialCrdtState.length > 0 && t.unshift(e.initialCrdtState),
    t.length === 0 ? e.initialCrdtState : t.length === 1 ? t[0] : M(t)
  );
}
function ta(e) {
  let t = Xi(e.externalCrdtUpdates);
  return {
    initialCrdtState: ea({ initialCrdtState: e.initialCrdtState, externalCrdtUpdates: t }),
    bootstrappedExternalCrdtUpdates: t,
  };
}
function na(e) {
  let t = Xi(e.updates),
    n = e.bootstrapState.bootstrappedExternalCrdtUpdates;
  if (n.length === 0 || t.length < n.length) return t;
  for (let e = 0; e < n.length; e += 1) {
    let r = n[e],
      i = t[e];
    if (!r || !i || !Qi(r, i)) return t;
  }
  return t.slice(n.length);
}
function ra(e, t) {
  return e instanceof Error && e.message.trim().length > 0
    ? e.message
    : `Failed to restore external ${t.toLowerCase()} edits.`;
}
function ia({ initialCrdtState: e, externalCrdtUpdates: t }) {
  let n = (0, $.useRef)(null);
  n.current ??= ta({ initialCrdtState: e, externalCrdtUpdates: t });
  let r = n.current;
  return {
    initialCrdtState: r.initialCrdtState,
    externalCrdtUpdates: na({ bootstrapState: r, updates: t }),
  };
}
function aa({
  artifactLabel: e,
  controller: t,
  externalCrdtUpdates: n,
  onCrdtDrain: r,
  onCrdtDrainAttemptFailed: i,
  onCrdtUpdate: a,
}) {
  let o = (0, $.useRef)(0),
    s = (0, $.useRef)(n ?? []),
    [c, l] = (0, $.useState)(a == null),
    [u, d] = (0, $.useState)(null),
    f = (0, $.useRef)(r),
    p = (0, $.useRef)(i),
    m = (0, $.useRef)(a),
    h = a != null,
    g = n ?? [];
  $i(s.current, g) || (s.current = g);
  let _ = s.current;
  return (
    (0, $.useEffect)(() => {
      ((f.current = r), (p.current = i), (m.current = a));
    }, [r, i, a]),
    (0, $.useEffect)(() => {
      if (!t || !h) {
        l(!0);
        return;
      }
      l(!1);
      let e = !0,
        n = null,
        r = !1,
        i = [],
        a = null,
        o = null,
        s = (e) => {
          m.current?.(e);
        },
        c = t.subscribeCrdtUpdates((e) => {
          if (n == null) {
            i.push(new Uint8Array(e));
            return;
          }
          if (!r) {
            (s(M([n, e])), (r = !0));
            return;
          }
          s(e);
        }),
        u = (t) => {
          ((n = new Uint8Array(t)),
            i.length > 0 && (s(M([n, ...i])), (r = !0), (i.length = 0)),
            e && l(!0));
        },
        d = () => {
          a = t
            .requestCrdtSnapshot()
            .then(u)
            .catch(() => {
              e && (o = setTimeout(d, la));
            });
        };
      return (
        d(),
        () => {
          ((e = !1), o != null && clearTimeout(o));
          let r = () => {
              let e = t.flushCrdtUpdates?.() ?? Promise.resolve();
              return Promise.all([e, a ?? Promise.resolve()])
                .then(async () => {
                  (i.length > 0 && n == null && u(await t.requestCrdtSnapshot()), c());
                })
                .catch(
                  () => (
                    p.current?.(),
                    new Promise((e) => {
                      setTimeout(e, la);
                    }).then(r)
                  ),
                );
            },
            s = r();
          f.current?.(s);
        }
      );
    }, [t, h]),
    (0, $.useEffect)(() => {
      if (!t) return;
      let n = _;
      if (n.length < o.current) {
        ((o.current = n.length), d(null));
        return;
      }
      if (n.length === o.current) {
        d(null);
        return;
      }
      let r = !1;
      return (
        (async () => {
          let i = n.length - o.current;
          d(i >= ca ? { kind: `restoring`, pendingUpdateCount: i } : null);
          try {
            let e = Zi(n, o.current);
            if (r || (e && (await t.applyCrdtUpdate(e), r))) return;
            ((o.current = n.length), d(null));
          } catch (t) {
            if (r) return;
            d({ kind: `failed`, artifactLabel: e, errorMessage: ra(t, e), pendingUpdateCount: i });
          }
        })(),
        () => {
          r = !0;
        }
      );
    }, [e, t, _]),
    { crdtPublishingReady: c, restoreState: u }
  );
}
function oa({ artifactLabel: e, restoreState: t }) {
  return t
    ? (0, sa.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex items-end bg-token-bg-primary/35 p-3 backdrop-blur-[2px]`,
        children: (0, sa.jsx)(`div`, {
          className: g(
            `w-full rounded-xl border px-3 py-2 text-xs shadow-lg`,
            t.kind === `failed`
              ? `border-token-border-default bg-token-bg-primary text-token-editor-warning-foreground`
              : `border-token-border-default bg-token-bg-primary text-token-text-secondary`,
          ),
          role: t.kind === `failed` ? `alert` : `status`,
          children:
            t.kind === `failed`
              ? (0, sa.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, sa.jsxs)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: [`Could not restore `, e.toLowerCase(), ` edits`],
                    }),
                    (0, sa.jsxs)(`div`, {
                      children: [
                        t.errorMessage,
                        ` Pending CRDT updates:`,
                        ` `,
                        t.pendingUpdateCount,
                        `.`,
                      ],
                    }),
                  ],
                })
              : (0, sa.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, sa.jsxs)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: [`Restoring `, e.toLowerCase(), ` edits`],
                    }),
                    (0, sa.jsxs)(`div`, {
                      children: [
                        `Compacting and applying `,
                        t.pendingUpdateCount,
                        ` CRDT updates.`,
                      ],
                    }),
                  ],
                }),
        }),
      })
    : null;
}
var $,
  sa,
  ca,
  la,
  ua = e(() => {
    (j(), ($ = t(r())), N(), (sa = T()), (ca = 500), (la = 250));
  });
function da(e) {
  return P(e);
}
var fa = e(() => {
  F();
});
export {
  lr as $,
  ni as A,
  At,
  Or as B,
  je as Bt,
  pi as C,
  zt as Ct,
  ii as D,
  ft as Dt,
  ci as E,
  yt as Et,
  Yr as F,
  qe as Ft,
  Sr as G,
  kr as H,
  Ke as Ht,
  Jr as I,
  Ye as It,
  vr as J,
  Dr as K,
  Xr as L,
  Je as Lt,
  $r as M,
  _t as Mt,
  Zr as N,
  st as Nt,
  ti as O,
  vt as Ot,
  oi as P,
  ot as Pt,
  pr as Q,
  Lr as R,
  ct as Rt,
  gi as S,
  Pt as St,
  si as T,
  pt as Tt,
  wr as U,
  Le as Ut,
  qr as V,
  Ie as Vt,
  xr as W,
  Ne as Wt,
  gr as X,
  mr as Y,
  ur as Z,
  ji as _,
  Rt as _t,
  ia as a,
  Qn as at,
  fi as b,
  It as bt,
  Ki as c,
  sn as ct,
  Gi as d,
  Qt as dt,
  cr as et,
  Bi as f,
  tn as ft,
  Ai as g,
  Gt as gt,
  zi as h,
  Ht as ht,
  ua as i,
  Wn as it,
  ri as j,
  dt as jt,
  ei as k,
  ut as kt,
  Ji as l,
  Xt as lt,
  Li as m,
  Jt as mt,
  fa as n,
  ar as nt,
  aa as o,
  Bn as ot,
  Hi as p,
  Kt as pt,
  yr as q,
  oa as r,
  ir as rt,
  Yi as s,
  Vn as st,
  da as t,
  or as tt,
  Ui as u,
  Zt as ut,
  Ii as v,
  Lt as vt,
  ui as w,
  Tt as wt,
  di as x,
  Nt as xt,
  mi as y,
  Ft as yt,
  Rr as z,
  Xe as zt,
};
//# sourceMappingURL=popcorn-electron-surface-style-7137a19cf884.js.map
