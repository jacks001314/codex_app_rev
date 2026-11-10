import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Iun as r,
  Lun as i,
  Nun as a,
  Pun as o,
  Rpn as s,
  hmn as c,
  jun as l,
  kun as u,
  zpn as d,
} from "./app-initial-f094ef01c64d.js";
import {
  J as f,
  R as p,
  c as m,
  l as h,
  lt as g,
  s as _,
  z as v,
} from "./artifact-source-bootstrap-b7ba40702025.js";
import { c as y, i as b, u as x } from "./freeze-panes-7a2ff30d4631.js";
function S({
  open: e,
  query: t,
  summary: n,
  focusToken: r,
  onQueryChange: i,
  onNavigatePrevious: a,
  onNavigateNext: o,
  onClose: c,
}) {
  let l = (0, C.useRef)(null);
  if (
    ((0, C.useEffect)(() => {
      e && (l.current?.focus(), l.current?.select());
    }, [r, e]),
    !e)
  )
    return null;
  let u = n.length > 0 && n !== `No results`;
  return (0, w.jsxs)(`div`, {
    "data-testid": `popcorn-find-bar`,
    className: `border-token-border-light bg-token-bg-primary pointer-events-auto absolute end-3 top-3 z-40 flex h-10 items-center gap-2 rounded-xl border px-2 shadow-lg`,
    children: [
      (0, w.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-primary flex h-8 items-center rounded-lg border`,
        children: (0, w.jsx)(`input`, {
          ref: l,
          value: t,
          onChange: (e) => i(e.target.value),
          onKeyDown: (e) => {
            if ((e.stopPropagation(), e.key === `Enter`)) {
              if ((e.preventDefault(), e.shiftKey)) {
                a();
                return;
              }
              o();
              return;
            }
            e.key === `Escape` && (e.preventDefault(), c());
          },
          placeholder: `Find`,
          "aria-label": `Find`,
          className: `text-token-text-primary placeholder:text-token-text-tertiary h-8 w-[220px] rounded-lg border-0 bg-transparent px-2 text-sm outline-none`,
        }),
      }),
      (0, w.jsx)(`div`, {
        className: s(
          `min-w-[64px] text-right text-xs`,
          u ? `text-token-text-secondary` : `text-token-text-tertiary`,
        ),
        children: n,
      }),
      (0, w.jsx)(`button`, {
        type: `button`,
        "aria-label": `Previous search result`,
        className: `text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md disabled:cursor-default disabled:opacity-40`,
        disabled: !u,
        onClick: a,
        children: (0, w.jsx)(v, { className: `size-3.5` }),
      }),
      (0, w.jsx)(`button`, {
        type: `button`,
        "aria-label": `Next search result`,
        className: `text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md disabled:cursor-default disabled:opacity-40`,
        disabled: !u,
        onClick: o,
        children: (0, w.jsx)(p, { className: `size-3.5` }),
      }),
      (0, w.jsx)(`button`, {
        type: `button`,
        "aria-label": `Close find`,
        className: `text-token-text-primary hover:bg-token-bg-secondary inline-flex size-8 items-center justify-center rounded-md`,
        onClick: c,
        children: (0, w.jsx)(f, { className: `size-4` }),
      }),
    ],
  });
}
var C,
  w,
  T = e(() => {
    ((C = t(n())), d(), g(), (w = c()));
  });
function E(e, t, n = 12) {
  for (let r = e.length - 1; r >= 0; --r) {
    let i = e[r];
    if (i) {
      if (D(i.kind)) {
        if (i.x === void 0 || i.y === void 0 || i.width === void 0 || i.height === void 0) continue;
        let e = i.x + i.width / 2,
          r = i.y + i.height / 2,
          a = Math.max(i.width, i.height) / 2 + Math.max(0, n);
        if (t.x >= e - a && t.x <= e + a && t.y >= r - a && t.y <= r + a) return i;
        continue;
      }
      if (O(i.kind)) {
        if (
          i.x !== void 0 &&
          i.y !== void 0 &&
          i.width !== void 0 &&
          i.height !== void 0 &&
          t.x >= i.x &&
          t.x <= i.x + i.width &&
          t.y >= i.y &&
          t.y <= i.y + i.height
        )
          return i;
        continue;
      }
      if (i.kind === `pie` && i.cx != null && i.cy != null) {
        let e = t.x - i.cx,
          n = t.y - i.cy,
          r = Math.hypot(e, n);
        if (r < (i.rInner ?? 0) || r > (i.rOuter ?? 0)) continue;
        let a = Math.atan2(n, e);
        a < 0 && (a += Math.PI * 2);
        let o = i.startAngle ?? 0,
          s = i.endAngle ?? 0;
        if (
          (o < 0 && (o += Math.PI * 2),
          s < 0 && (s += Math.PI * 2),
          o <= s ? a >= o && a <= s : a >= o || a <= s)
        )
          return i;
      }
    }
  }
  return null;
}
function D(e) {
  return e === `scatter-point` || e === `bubble-point` || e === `line-point`;
}
function O(e) {
  return (
    e === `bar-vertical` ||
    e === `bar-horizontal` ||
    e === `line-point` ||
    e === `area-point` ||
    e === `legend`
  );
}
var k = e(() => {}),
  A = e(() => {
    k();
  });
function j(e, t, n) {
  let r = m(e, t, n);
  return { screenX: r.x, screenY: r.y };
}
var M = e(() => {
  h();
});
function N(e) {
  return e?.trim() || void 0;
}
function P({
  canvasRef: e,
  viewportRef: t,
  chartTargetsRef: n,
  getCamera: c,
  selectedFloatingElement: l,
  suppressHover: d = !1,
  freezePanes: f,
  columnWidths: p,
  rowHeights: m,
  minPointHitRadius: h = 12,
  subscribeToPointerEvents: g,
  subscribeToCameraChanges: v,
  screenToWorld: b,
  worldToScreen: S,
}) {
  let [C, w] = (0, F.useState)(null),
    {
      x: T,
      y: D,
      strategy: O,
      refs: k,
      update: A,
    } = r({
      placement: `top`,
      middleware: [a(6), u(), o({ padding: 8 })],
      whileElementsMounted: i,
      strategy: `fixed`,
    }),
    M = (0, F.useRef)(null),
    P = (0, F.useRef)(!1),
    B = (0, F.useCallback)(
      (n) => {
        if (n == null && !P.current) return;
        let r = n ?? ``,
          i = e.current;
        i && (i.style.cursor = r);
        let a = t.current;
        (a && (a.style.cursor = r), (P.current = n != null));
      },
      [e, t],
    ),
    V = (0, F.useCallback)(() => {
      (w(null), B(null));
    }, [B]),
    H =
      d ||
      l?.interactionState === `dragging` ||
      l?.interactionState === `resizing` ||
      l?.interactionState === `rotating`,
    U = (0, F.useCallback)(
      (e, t) =>
        b
          ? b({ x: e, y: t })
          : y({
              camera: c(),
              screenX: e,
              screenY: t,
              freezePanes: f ?? z,
              columnWidths: p ?? [],
              rowHeights: m ?? [],
            }),
      [p, f, c, m, b],
    ),
    W = (0, F.useCallback)(
      (e, t) =>
        S
          ? S({ x: e, y: t })
          : x({
              camera: c(),
              worldX: e,
              worldY: t,
              freezePanes: f ?? z,
              columnWidths: p ?? [],
              rowHeights: m ?? [],
            }),
      [p, f, c, m, S],
    ),
    G = (0, F.useCallback)(
      (e, t) => {
        if (H) {
          V();
          return;
        }
        let r = c(),
          i = h / Math.max(r.k, 1e-4),
          a = E(n.current, { x: e, y: t }, i);
        (w(a), B(a ? `pointer` : null));
      },
      [n, c, H, h, V, B],
    );
  if (
    ((0, F.useEffect)(() => {
      H && V();
    }, [H, V]),
    (0, F.useEffect)(() => {
      if (!C || C.kind === `legend` || !e.current) return;
      let t = e.current,
        n = W(C.anchorX, C.anchorY),
        r = _(t, n.x, n.y),
        i = { getBoundingClientRect: () => new DOMRect(r.x, r.y, 0, 0) };
      ((M.current = i), k.setReference(i), A?.());
    }, [e, C, k, W, A]),
    (0, F.useEffect)(() => {
      if (g)
        return g((e) => {
          if (e.type === `pointerLeave`) {
            V();
            return;
          }
          if (e.type === `pointerDown`) {
            V();
            return;
          }
          if (e.type === `pointerUp` && e.pointerType !== `mouse`) {
            V();
            return;
          }
          e.type === `pointerMove` && G(e.world.x, e.world.y);
        });
    }, [V, g, G]),
    (0, F.useEffect)(() => {
      if (g) return;
      let t = e.current;
      if (!t) return;
      let n = (e) => {
          let n = j(t, e.clientX, e.clientY),
            r = U(n.screenX, n.screenY);
          G(r.x, r.y);
        },
        r = () => V(),
        i = () => V();
      return (
        t.addEventListener(`mousemove`, n),
        t.addEventListener(`mouseleave`, r),
        t.addEventListener(`mousedown`, i),
        () => {
          (t.removeEventListener(`mousemove`, n),
            t.removeEventListener(`mouseleave`, r),
            t.removeEventListener(`mousedown`, i),
            V());
        }
      );
    }, [e, V, g, G, U]),
    (0, F.useEffect)(() => {
      if (v)
        return v(() => {
          V();
        });
    }, [V, v]),
    !C || C.kind === `legend`)
  )
    return null;
  let K = N(C.category) ?? N(C.seriesName) ?? ``;
  return (0, I.jsx)(`div`, {
    ref: k.setFloating,
    style: { position: O, left: T ?? 0, top: D ?? 0, zIndex: 1e3 },
    className: `pointer-events-none font-sans`,
    "data-testid": `popcorn-chart-hover-tooltip`,
    children: (0, I.jsxs)(`div`, {
      className: s(
        `bg-token-main-surface-primary text-token-text-primary relative rounded-lg border px-2 py-1.5`,
        L,
      ),
      style: { borderColor: R },
      children: [
        (0, I.jsx)(`div`, {
          className: `flex w-full flex-col px-1 py-0.5 text-xs leading-tight`,
          children: (0, I.jsx)(`div`, { className: `me-6 w-full min-w-[88px]`, children: K }),
        }),
        (0, I.jsx)(`div`, {
          className: `mt-0.5 flex flex-col border-t border-solid pt-2`,
          style: { borderTopColor: R },
          children: (0, I.jsxs)(`div`, {
            className: `flex flex-row items-stretch px-1 py-0 text-xs leading-tight`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `flex items-center`,
                children: [
                  (0, I.jsx)(`div`, {
                    className: `me-1.5 h-2 w-2 rounded-[2px]`,
                    style: { backgroundColor: C.color ?? `transparent` },
                  }),
                  (0, I.jsx)(`div`, {
                    className: `me-6 min-w-[88px]`,
                    children: C.seriesName ?? ``,
                  }),
                ],
              }),
              (0, I.jsx)(`div`, { className: `grow text-end`, children: C.value }),
            ],
          }),
        }),
      ],
    }),
  });
}
var F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (l(),
      A(),
      d(),
      (F = t(n())),
      b(),
      h(),
      M(),
      (I = c()),
      (L = `shadow-[0_5px_8px_3px_rgba(0,0,0,0.025),_0_0.5px_1px_0px_rgba(0,0,0,0.045)]`),
      (R = `rgba(13, 13, 13, 0.08)`),
      (z = { rowCount: 0, columnCount: 0 }));
  });
export { S as a, M as i, B as n, T as o, j as r, P as t };
//# sourceMappingURL=PopcornChartHoverTooltip-adcf79d91386.js.map
