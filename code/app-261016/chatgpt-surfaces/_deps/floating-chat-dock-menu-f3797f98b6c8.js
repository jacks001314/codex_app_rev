import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  CCt as r,
  CU as i,
  JOt as a,
  LNt as o,
  PBt as s,
  TY as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  ZSt as f,
  bG as p,
  ek as m,
  iCt as h,
  nB as g,
  okt as _,
  rB as v,
  rV as y,
  tV as b,
  tkt as x,
  vV as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as C,
  FWt as w,
  IWt as T,
  LWt as E,
  MOr as D,
  NOn as O,
  PDn as k,
  POn as A,
  eOr as j,
  nTn as M,
  tTn as N,
  uOr as P,
  zOr as F,
} from "./app-initial-ad16eaadf81f.js";
function I(e) {
  let t = (0, z.c)(6),
    r = n(D),
    i = h(V),
    o;
  t[0] !== i || t[1] !== r
    ? ((o =
        i === `hidden`
          ? []
          : [
              {
                id: `full-view`,
                icon: S,
                message: a({
                  id: `quickChat.dock.openTab`,
                  defaultMessage: `Open in full view`,
                  description: `Opens the existing Chat in a tab that fills the workspace`,
                }),
                onSelect: () => {
                  A(r, `context_menu`, () => E(r, r.get(M).chat, { mode: `full` }));
                },
              },
              {
                id: `left`,
                icon: b,
                enabled: i === `split`,
                message: a({
                  id: `quickChat.dock.left`,
                  defaultMessage: `Move to left pane`,
                  description: `Moves the floating Chat into the left split pane beside the current content`,
                }),
                onSelect: () => {
                  A(r, `context_menu`, () => T(r, r.get(M).chat, `left`));
                },
              },
              {
                id: `right`,
                icon: y,
                enabled: i === `split`,
                message: a({
                  id: `quickChat.dock.right`,
                  defaultMessage: `Move to right pane`,
                  description: `Moves the floating Chat into the right split pane beside the current content`,
                }),
                onSelect: () => {
                  A(r, `context_menu`, () => T(r, r.get(M).chat, `right`));
                },
              },
            ]),
      (t[0] = i),
      (t[1] = r),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  return (
    t[3] !== s || t[4] !== e
      ? ((c = (0, B.jsx)(L, { ...e, items: s })), (t[3] = s), (t[4] = e), (t[5] = c))
      : (c = t[5]),
    c
  );
}
function L(e) {
  let n = (0, z.c)(32),
    {
      contextMenuTrigger: r,
      isCompact: o,
      isDragging: s,
      items: c,
      open: l,
      onMinimize: d,
      onOpenChange: f,
    } = e,
    m = _(),
    h;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = a({
        id: `quickChat.dock.minimizeComposer`,
        defaultMessage: `Minimize composer`,
        description: `Minimizes the floating composer to its compact minimized button`,
      })),
      (n[0] = h))
    : (h = n[0]);
  let v;
  n[1] === d
    ? (v = n[2])
    : ((v = { id: `minimize`, icon: p, message: h, onSelect: d, selectAfterClose: !0 }),
      (n[1] = d),
      (n[2] = v));
  let y;
  n[3] !== c || n[4] !== v ? ((y = [...c, v]), (n[3] = c), (n[4] = v), (n[5] = y)) : (y = n[5]);
  let b = y;
  if (r != null) {
    let e;
    n[6] === r
      ? (e = n[7])
      : ((e = (0, B.jsx)(`div`, { className: `contents`, children: r })), (n[6] = r), (n[7] = e));
    let i;
    return (
      n[8] !== b || n[9] !== e
        ? ((i = (0, B.jsx)(t, { disableNative: !0, items: b, children: e })),
          (n[8] = b),
          (n[9] = e),
          (n[10] = i))
        : (i = n[10]),
      i
    );
  }
  let S = !s && void 0,
    C = l || s,
    w;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, B.jsx)(x, {
        id: `quickChat.dock.dragHint`,
        defaultMessage: `Drag to move · Click for options`,
        description: `Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options`,
      })),
      (n[11] = w))
    : (w = n[11]);
  let T;
  n[12] === m
    ? (T = n[13])
    : ((T = m.formatMessage({
        id: `quickChat.dock.menu`,
        defaultMessage: `Dock Chat`,
        description: `Opens a menu to place Chat in a tab or a left or right split pane`,
      })),
      (n[12] = m),
      (n[13] = T));
  let E = o ? `composer` : `toolbar`,
    D;
  n[14] !== f || n[15] !== l
    ? ((D = (e) => {
        e.button === 0 && !e.ctrlKey && e.detail > 0 && !e.defaultPrevented && f?.(!l);
      }),
      (n[14] = f),
      (n[15] = l),
      (n[16] = D))
    : (D = n[16]);
  let O;
  n[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, B.jsx)(i, {})), (n[17] = O)) : (O = n[17]);
  let k;
  n[18] !== T || n[19] !== E || n[20] !== D
    ? ((k = (0, B.jsx)(u, {
        className: `cursor-grab touch-none active:cursor-grabbing`,
        "aria-label": T,
        color: `ghostSecondary`,
        "data-quick-chat-drag-handle": !0,
        size: E,
        uniform: !0,
        onPointerDown: R,
        onClick: D,
        children: O,
      })),
      (n[18] = T),
      (n[19] = E),
      (n[20] = D),
      (n[21] = k))
    : (k = n[21]);
  let A;
  n[22] !== b || n[23] !== f || n[24] !== l || n[25] !== k
    ? ((A = (0, B.jsx)(t, {
        disableNative: !0,
        trigger: `click`,
        align: `end`,
        open: l,
        onOpenChange: f,
        items: b,
        children: k,
      })),
      (n[22] = b),
      (n[23] = f),
      (n[24] = l),
      (n[25] = k),
      (n[26] = A))
    : (A = n[26]);
  let j;
  return (
    n[27] !== l || n[28] !== A || n[29] !== S || n[30] !== C
      ? ((j = (0, B.jsx)(g, {
          open: S,
          triggerPopupOpen: l,
          disableHoverOpen: C,
          closeOnTriggerClick: !0,
          tooltipContent: w,
          children: A,
        })),
        (n[27] = l),
        (n[28] = A),
        (n[29] = S),
        (n[30] = C),
        (n[31] = j))
      : (j = n[31]),
    j
  );
}
function R(e) {
  e.button === 0 && !e.ctrlKey && e.preventDefault();
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = s()),
      f(),
      l(),
      j(),
      C(),
      d(),
      m(),
      c(),
      v(),
      F(),
      O(),
      w(),
      N(),
      (B = o()),
      (V = r(D, ({ get: e }) => (e(P) == null ? `hidden` : e(k.activeTab$) == null ? `tab` : `split`))));
  }))();
}
export { L as n, H as r, I as t };
//# sourceMappingURL=floating-chat-dock-menu-f3797f98b6c8.js.map
