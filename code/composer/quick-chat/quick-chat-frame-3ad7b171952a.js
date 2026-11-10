import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  DW as t,
  EW as n,
  Eln as r,
  Gy as i,
  Hy as a,
  Rpn as o,
  fK as s,
  hmn as c,
  kmn as l,
  mK as u,
  nln as d,
  pRt as f,
  zpn as p,
} from "./app-initial-f094ef01c64d.js";
import {
  c as m,
  d as h,
  f as g,
  g as _,
  h as v,
  m as y,
  p as b,
  s as x,
} from "./quick-chat-floating-position-50d00104d2ad.js";
var S,
  C,
  w = e(() => {
    ((S = `_zoomedViewport_19wqa_1`), (C = { zoomedViewport: S }));
  });
function T(e) {
  let n = (0, E.c)(37),
    {
      children: i,
      currentSize: c,
      heightLabel: l,
      isCompact: u,
      isCompactChromeRevealed: d,
      isMinimized: f,
      maximumSize: p,
      minimizedSurfaceBounds: g,
      minimumSize: _,
      onResize: y,
      onResizeEnd: x,
      onResizingChange: S,
      prefersCompactPresentation: w,
      sectionProps: T,
      sectionRef: O,
      shouldReduceMotion: k,
      variant: A,
      widthLabel: j,
    } = e,
    M = u && !d && !f ? 4 * 1.5 : 0,
    N;
  n[0] !== M || n[1] !== f || n[2] !== g
    ? ((N = f && g != null ? g : { top: 0, right: M, bottom: M, left: M }),
      (n[0] = M),
      (n[1] = f),
      (n[2] = g),
      (n[3] = N))
    : (N = n[3]);
  let P = N,
    F = A === `window` || w,
    I;
  n[4] !== T.ref || n[5] !== O
    ? ((I = t(O, T.ref, m)), (n[4] = T.ref), (n[5] = O), (n[6] = I))
    : (I = n[6]);
  let L;
  n[7] !== g || n[8] !== w || n[9] !== A
    ? ((L = o(
        `flex flex-col text-default`,
        g != null && `pointer-events-none`,
        A !== `window` &&
          o(
            w && b.floatingSurface,
            A === `floating`
              ? `fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]`
              : `absolute top-0 left-0 z-30 max-h-full max-w-full`,
            w ? `overflow-visible` : `overflow-hidden`,
          ),
        A === `window` && o(C.zoomedViewport, `relative overflow-hidden bg-surface-tertiary/55`),
      )),
      (n[7] = g),
      (n[8] = w),
      (n[9] = A),
      (n[10] = L))
    : (L = n[10]);
  let R;
  n[11] !== w || n[12] !== k || n[13] !== P
    ? ((R = w
        ? (0, D.jsx)(h, {
            asChild: !0,
            children: (0, D.jsx)(r.div, {
              "aria-hidden": !0,
              animate: P,
              className: `pointer-events-none absolute`,
              initial: !1,
              transition: k ? { duration: 0 } : { duration: 300 / 1e3, ease: s },
            }),
          })
        : null),
      (n[11] = w),
      (n[12] = k),
      (n[13] = P),
      (n[14] = R))
    : (R = n[14]);
  let z;
  n[15] !== c ||
  n[16] !== l ||
  n[17] !== u ||
  n[18] !== f ||
  n[19] !== p ||
  n[20] !== _ ||
  n[21] !== y ||
  n[22] !== x ||
  n[23] !== S ||
  n[24] !== A ||
  n[25] !== j
    ? ((z =
        A !== `window` && !u && !f
          ? (0, D.jsx)(`div`, {
              className: `pointer-events-auto contents`,
              children: (0, D.jsx)(v, {
                currentSize: c,
                defaultSize: a,
                heightLabel: l,
                maximumSize: p,
                minimumSize: _,
                widthLabel: j,
                onResize: y,
                onResizeEnd: x,
                onResizingChange: S,
              }),
            })
          : null),
      (n[15] = c),
      (n[16] = l),
      (n[17] = u),
      (n[18] = f),
      (n[19] = p),
      (n[20] = _),
      (n[21] = y),
      (n[22] = x),
      (n[23] = S),
      (n[24] = A),
      (n[25] = j),
      (n[26] = z))
    : (z = n[26]);
  let B;
  n[27] !== i || n[28] !== T || n[29] !== I || n[30] !== L || n[31] !== R || n[32] !== z
    ? ((B = (0, D.jsxs)(r.section, { ...T, ref: I, className: L, children: [R, z, i] })),
      (n[27] = i),
      (n[28] = T),
      (n[29] = I),
      (n[30] = L),
      (n[31] = R),
      (n[32] = z),
      (n[33] = B))
    : (B = n[33]);
  let V;
  return (
    n[34] !== F || n[35] !== B
      ? ((V = (0, D.jsx)(h, { asChild: !0, unstyled: F, children: B })),
        (n[34] = F),
        (n[35] = B),
        (n[36] = V))
      : (V = n[36]),
    V
  );
}
var E,
  D,
  O = e(() => {
    ((E = l()), p(), d(), _(), i(), g(), f(), u(), n(), x(), w(), y(), (D = c()));
  });
export { O as n, T as t };
//# sourceMappingURL=quick-chat-frame-3ad7b171952a.js.map
