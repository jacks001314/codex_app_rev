import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  EH as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  SB as o,
  SO as s,
  TJ as c,
  VDt as l,
  Vxt as u,
  cB as d,
  cz as f,
  jDt as p,
  kDt as m,
  oB as h,
  oSt as g,
  sz as _,
  t3 as v,
  vzt as y,
  wW as b,
  xMt as x,
  xO as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as C,
  G8t as w,
  JCr as T,
  Jxn as E,
  K8t as D,
  RCr as O,
  dwn as k,
  gwr as A,
  hWt as j,
  hwn as M,
  mWt as N,
  pWt as P,
  qxn as F,
} from "./app-initial-5851df3f6cb1.js";
function I(e) {
  let t = (0, z.c)(6),
    n = i(A),
    r = u(V),
    a;
  t[0] !== r || t[1] !== n
    ? ((a =
        r === `hidden`
          ? []
          : [
              {
                id: `full-view`,
                icon: o,
                message: m({
                  id: `quickChat.dock.openTab`,
                  defaultMessage: `Open in full view`,
                  description: `Opens the existing Chat in a tab that fills the workspace`,
                }),
                onSelect: () => {
                  D(n, `context_menu`, () => j(n, n.get(E).chat, { mode: `full` }));
                },
              },
              {
                id: `left`,
                icon: h,
                enabled: r === `split`,
                message: m({
                  id: `quickChat.dock.left`,
                  defaultMessage: `Move to left pane`,
                  description: `Moves the floating Chat into the left split pane beside the current content`,
                }),
                onSelect: () => {
                  D(n, `context_menu`, () => N(n, n.get(E).chat, `left`));
                },
              },
              {
                id: `right`,
                icon: d,
                enabled: r === `split`,
                message: m({
                  id: `quickChat.dock.right`,
                  defaultMessage: `Move to right pane`,
                  description: `Moves the floating Chat into the right split pane beside the current content`,
                }),
                onSelect: () => {
                  D(n, `context_menu`, () => N(n, n.get(E).chat, `right`));
                },
              },
            ]),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let s = a,
    c;
  return (
    t[3] !== s || t[4] !== e
      ? ((c = (0, B.jsx)(L, { ...e, items: s })), (t[3] = s), (t[4] = e), (t[5] = c))
      : (c = t[5]),
    c
  );
}
function L(e) {
  let i = (0, z.c)(32),
    {
      contextMenuTrigger: a,
      isCompact: o,
      isDragging: s,
      items: c,
      open: u,
      onMinimize: d,
      onOpenChange: f,
    } = e,
    p = l(),
    h;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = m({
        id: `quickChat.dock.minimizeComposer`,
        defaultMessage: `Minimize composer`,
        description: `Minimizes the floating composer to its compact minimized button`,
      })),
      (i[0] = h))
    : (h = i[0]);
  let g;
  i[1] === d
    ? (g = i[2])
    : ((g = { id: `minimize`, icon: b, message: h, onSelect: d, selectAfterClose: !0 }),
      (i[1] = d),
      (i[2] = g));
  let v;
  i[3] !== c || i[4] !== g ? ((v = [...c, g]), (i[3] = c), (i[4] = g), (i[5] = v)) : (v = i[5]);
  let y = v;
  if (a != null) {
    let e;
    i[6] === a
      ? (e = i[7])
      : ((e = (0, B.jsx)(`div`, { className: `contents`, children: a })), (i[6] = a), (i[7] = e));
    let t;
    return (
      i[8] !== y || i[9] !== e
        ? ((t = (0, B.jsx)(S, { disableNative: !0, items: y, children: e })),
          (i[8] = y),
          (i[9] = e),
          (i[10] = t))
        : (t = i[10]),
      t
    );
  }
  let x = !s && void 0,
    C = u || s,
    w;
  i[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, B.jsx)(r, {
        id: `quickChat.dock.dragHint`,
        defaultMessage: `Drag to move · Click for options`,
        description: `Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options`,
      })),
      (i[11] = w))
    : (w = i[11]);
  let T;
  i[12] === p
    ? (T = i[13])
    : ((T = p.formatMessage({
        id: `quickChat.dock.menu`,
        defaultMessage: `Dock Chat`,
        description: `Opens a menu to place Chat in a tab or a left or right split pane`,
      })),
      (i[12] = p),
      (i[13] = T));
  let E = o ? `composer` : `toolbar`,
    D;
  i[14] !== f || i[15] !== u
    ? ((D = (e) => {
        e.button === 0 && !e.ctrlKey && e.detail > 0 && !e.defaultPrevented && f?.(!u);
      }),
      (i[14] = f),
      (i[15] = u),
      (i[16] = D))
    : (D = i[16]);
  let O;
  i[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, B.jsx)(n, {})), (i[17] = O)) : (O = i[17]);
  let k;
  i[18] !== T || i[19] !== E || i[20] !== D
    ? ((k = (0, B.jsx)(t, {
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
      (i[18] = T),
      (i[19] = E),
      (i[20] = D),
      (i[21] = k))
    : (k = i[21]);
  let A;
  i[22] !== y || i[23] !== f || i[24] !== u || i[25] !== k
    ? ((A = (0, B.jsx)(S, {
        disableNative: !0,
        trigger: `click`,
        align: `end`,
        open: u,
        onOpenChange: f,
        items: y,
        children: k,
      })),
      (i[22] = y),
      (i[23] = f),
      (i[24] = u),
      (i[25] = k),
      (i[26] = A))
    : (A = i[26]);
  let j;
  return (
    i[27] !== u || i[28] !== A || i[29] !== x || i[30] !== C
      ? ((j = (0, B.jsx)(_, {
          open: x,
          triggerPopupOpen: u,
          disableHoverOpen: C,
          closeOnTriggerClick: !0,
          tooltipContent: w,
          children: A,
        })),
        (i[27] = u),
        (i[28] = A),
        (i[29] = x),
        (i[30] = C),
        (i[31] = j))
      : (j = i[31]),
    j
  );
}
function R(e) {
  e.button === 0 && !e.ctrlKey && e.preventDefault();
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = y()),
      a(),
      p(),
      O(),
      k(),
      v(),
      s(),
      c(),
      f(),
      C(),
      w(),
      P(),
      F(),
      (B = x()),
      (V = g(A, ({ get: e }) => (e(T) == null ? `hidden` : e(M.activeTab$) == null ? `tab` : `split`))));
  }))();
}
export { L as n, H as r, I as t };
//# sourceMappingURL=floating-chat-dock-menu-ad701bd452d0.js.map
