import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  MNt as r,
  NNt as i,
  Zkt as a,
  eAt as o,
  iAt as s,
  nAt as c,
  tAt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { R as u, g as d } from "./PopcornIcons-6c48726ff00b.js";
import { Ed as f, wd as p } from "./app-primary-3e00728c2a4c.js";
import { r as m } from "./PopcornCommentMessageLayout-b62f81b2e6df.js";
function h({
  position: e,
  variant: t,
  author: n,
  isUnreadAssistant: i = !1,
  interactionEmphasis: a = `scale`,
  children: o,
  onPointerDown: s,
  onClick: c,
  ...l
}) {
  return (0, b.jsx)(`button`, {
    ...l,
    type: `button`,
    "data-popcorn-annotation-marker": `true`,
    className: r(
      `pointer-events-auto absolute z-30 cursor-interaction gap-2 p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`,
      t === `triangle`
        ? `size-4 -translate-x-full border-0 bg-transparent`
        : [
            `group/comment-marker flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-0 bg-transparent`,
            i ? `text-info-solid` : `text-default`,
          ],
    ),
    style: { left: e.left, top: e.top },
    onPointerDown: (e) => {
      (e.stopPropagation(), s?.(e));
    },
    onClick: (e) => {
      (e.stopPropagation(), c?.(e));
    },
    children:
      t === `triangle`
        ? (0, b.jsx)(`span`, {
            "aria-hidden": !0,
            className: r(
              `pointer-events-none absolute top-0 right-0 size-0 border-t-8 border-l-8 border-solid border-l-transparent`,
              i ? `border-t-blue` : `border-t-purple`,
            ),
          })
        : (0, b.jsx)(`span`, {
            className: r(
              `pointer-events-none size-full origin-bottom-left transition-transform duration-basic ease-enter-snappy motion-reduce:transition-none`,
              a === `scale` &&
                `group-hover/comment-marker:scale-[1.08] group-aria-expanded/comment-marker:scale-[1.08]`,
            ),
            children: (0, b.jsx)(p, {
              className: `size-full`,
              appearance: i ? `unread-avatar` : `avatar`,
              children:
                o ??
                (n == null
                  ? (0, b.jsx)(d, { "aria-hidden": !0, className: `size-4` })
                  : (0, b.jsx)(v, { author: n }, n.avatarUrl)),
            }),
          }),
  });
}
function g({
  threadId: e,
  position: t,
  variant: n,
  author: r,
  markerContent: i,
  markerLabel: a,
  markerTestId: o,
  isUnreadAssistant: s = !1,
  isSelected: c,
  hoveredThreadId: l,
  threadVisibleInSidebar: u,
  collisionBoundaryElement: d,
  portalContainerElement: f,
  onSelect: p,
  onHover: m,
  renderThread: g,
  renderPopover: v = _,
}) {
  let S = (0, y.useRef)(null),
    [C, w] = (0, y.useState)(4),
    T = (0, y.useMemo)(
      () =>
        d
          ? {
              current: {
                contextElement: d,
                getBoundingClientRect: () => {
                  let e = S.current?.getBoundingClientRect();
                  if (!e) return new DOMRect();
                  let t = d.getBoundingClientRect(),
                    n = Math.min(Math.max(e.left, t.left + 8 - C - e.width), t.right - 8 + C);
                  return new DOMRect(n, e.top, e.width, e.height);
                },
              },
            }
          : void 0,
      [d, t.left, t.top, C],
    ),
    [E, D] = (0, y.useState)(null);
  (0, y.useEffect)(() => {
    if (E !== `leaving`) return;
    let t = setTimeout(() => {
      (D(null), (l === void 0 || l === e) && m?.(null));
    }, x);
    return () => clearTimeout(t);
  }, [E, l, m, e]);
  function O() {
    (D(`hovered`), m?.(e));
  }
  function k() {
    D((e) => (e == null ? null : `leaving`));
  }
  let A = c && !u,
    j = E != null || A,
    M = (0, y.useCallback)(
      (e) => {
        A && e?.focus({ preventScroll: !0 });
      },
      [A],
    );
  return v({
    alignOffset: n === `bubble` ? -8 : 0,
    sideOffset: C,
    open: j,
    onOpenChange: (t) => {
      t || (D(null), (l === void 0 || l === e) && m?.(null), A && p(null));
    },
    collisionBoundaryElement: d,
    virtualAnchor: T,
    portalContainerElement: f,
    onPointerEnter: O,
    onPointerLeave: k,
    onFocusOutside: (e) => {
      e.detail.originalEvent.target === S.current && e.preventDefault();
    },
    marker: (0, b.jsx)(h, {
      ref: (e) => {
        if (((S.current = e), e != null)) {
          let t = parseFloat(getComputedStyle(e).columnGap) || 0;
          w(t + (n === `bubble` ? 4 : 1));
        }
      },
      position: t,
      variant: n,
      author: r,
      isUnreadAssistant: s,
      "aria-label": a,
      "aria-expanded": j,
      "data-testid": o,
      onPointerEnter: O,
      onPointerLeave: k,
      onFocus: O,
      onBlur: k,
      onClick: () => p(e),
      children: i,
    }),
    content: (0, b.jsx)(`div`, {
      ref: M,
      className: `w-80 max-w-full outline-hidden`,
      tabIndex: -1,
      children: g({ expanded: A }),
    }),
  });
}
function _({
  alignOffset: e,
  sideOffset: t,
  open: n,
  onOpenChange: r,
  marker: i,
  virtualAnchor: s,
  content: u,
  collisionBoundaryElement: d,
  portalContainerElement: f,
  onPointerEnter: p,
  onPointerLeave: m,
  onFocusOutside: h,
}) {
  return (0, b.jsxs)(c, {
    open: n,
    onOpenChange: r,
    children: [
      s
        ? (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(a, { virtualRef: s }), i] })
        : (0, b.jsx)(a, { asChild: !0, children: i }),
      (0, b.jsx)(l, {
        container: f ?? void 0,
        children: (0, b.jsx)(o, {
          align: `start`,
          alignOffset: e,
          side: `right`,
          sideOffset: t,
          collisionPadding: 8,
          sticky: `always`,
          collisionBoundary: d,
          className: `z-50 flex w-fit origin-[var(--radix-popover-content-transform-origin)] flex-col overflow-y-auto rounded-2xl bg-surface-elevated-secondary text-default shadow-lg-stronger ring-1 ring-border outline-hidden`,
          style: {
            maxWidth: `min(var(--radix-popover-content-available-width), calc(100vw - 16px))`,
            maxHeight: `min(var(--radix-popover-content-available-height), calc(100vh - 16px))`,
          },
          onOpenAutoFocus: (e) => e.preventDefault(),
          onFocusOutside: h,
          onPointerEnter: p,
          onPointerLeave: m,
          children: u,
        }),
      }),
    ],
  });
}
function v({ author: e }) {
  let [t, n] = (0, y.useState)(!1);
  return e.avatarUrl != null && !t
    ? (0, b.jsx)(`img`, {
        alt: ``,
        draggable: !1,
        className: `size-5 shrink-0 rounded-full object-cover`,
        src: e.avatarUrl,
        onError: () => n(!0),
      })
    : (0, b.jsx)(`span`, {
        "aria-hidden": !0,
        className: `flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] leading-none font-normal select-none`,
        children: e.initials ?? m(e.displayName),
      });
}
var y, b, x;
function S() {
  return (S = e(() => {
    (s(), i(), (y = t()), u(), f(), (b = n()), (x = 100));
  }))();
}
export { g as n, S as r, h as t };
//# sourceMappingURL=PopcornCommentMarker-78ea1defd260.js.map
