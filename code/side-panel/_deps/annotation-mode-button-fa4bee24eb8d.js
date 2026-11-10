import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  Rpn as i,
  hmn as a,
  kMt as o,
  kmn as s,
  zpn as c,
} from "./app-initial-f094ef01c64d.js";
import { Nv as l, Pv as u } from "./app-primary-4c40d73a1074.js";
function d(e) {
  let t = (0, m.c)(57),
    n,
    r,
    a,
    s,
    c,
    u,
    d,
    b,
    x,
    S,
    C,
    w;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (a = t[3]),
      (s = t[4]),
      (c = t[5]),
      (u = t[6]),
      (d = t[7]),
      (b = t[8]),
      (x = t[9]),
      (S = t[10]),
      (C = t[11]),
      (w = t[12]))
    : (({
        active: n,
        activeHoverSuppressed: r,
        activeLabel: a,
        className: c,
        direction: u,
        disabled: d,
        label: b,
        onActiveHoverSuppressedChange: x,
        onClick: S,
        onPointerLeave: C,
        style: w,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d),
      (t[8] = b),
      (t[9] = x),
      (t[10] = S),
      (t[11] = C),
      (t[12] = w));
  let [T, E] = (0, h.useState)(!1),
    D = (u ?? p()) === `rtl`,
    O = r ?? T,
    k = x ?? E,
    A = O ? _ : v,
    j = `translate-x-0`;
  n && (j = D ? `translate-x-0.5` : `-translate-x-0.5`);
  let M = !n,
    N = n ? a : b,
    P;
  t[13] !== n || t[14] !== A
    ? ((P = n
        ? {
            "--annotation-mode-button-annotation-background": f(_),
            "--annotation-mode-button-annotation-hover-background": f(A),
          }
        : {}),
      (t[13] = n),
      (t[14] = A),
      (t[15] = P))
    : (P = t[15]);
  let F;
  t[16] !== w || t[17] !== P
    ? ((F = { ...w, ...P }), (t[16] = w), (t[17] = P), (t[18] = F))
    : (F = t[18]);
  let I = F,
    L = n ? `max-w-40 justify-start` : `max-w-8 justify-center px-0`,
    R = n && y,
    z;
  t[19] !== c || t[20] !== L || t[21] !== R
    ? ((z = i(
        `ease-basic relative isolate min-w-8 overflow-hidden transition-[max-width,padding-inline,background-color,background-size,border-color,color] duration-relaxed [will-change:max-width,background-size] motion-reduce:transition-none disabled:opacity-100`,
        L,
        R,
        c,
      )),
      (t[19] = c),
      (t[20] = L),
      (t[21] = R),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] !== n || t[24] !== S || t[25] !== k
    ? ((B = (e) => {
        (k(!n), S(e));
      }),
      (t[23] = n),
      (t[24] = S),
      (t[25] = k),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== C || t[28] !== k
    ? ((V = (e) => {
        (k(!1), C?.(e));
      }),
      (t[27] = C),
      (t[28] = k),
      (t[29] = V))
    : (V = t[29]);
  let H = n ? `justify-start` : `w-full justify-center`,
    U;
  t[30] === H ? (U = t[31]) : ((U = i(`flex min-w-0 items-center`, H)), (t[30] = H), (t[31] = U));
  let W;
  t[32] === j
    ? (W = t[33])
    : ((W = i(
        `icon-sm relative shrink-0 transition-transform duration-relaxed ease-basic motion-reduce:transition-none`,
        j,
      )),
      (t[32] = j),
      (t[33] = W));
  let G;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, g.jsx)(l, {
        className: i(`absolute inset-0 size-full rotate-0 scale-100 opacity-100`),
      })),
      (t[34] = G))
    : (G = t[34]);
  let K;
  t[35] === W
    ? (K = t[36])
    : ((K = (0, g.jsx)(`span`, { className: W, children: G })), (t[35] = W), (t[36] = K));
  let q = n ? `ms-1 max-w-32 opacity-100` : `ms-0 max-w-0 opacity-0`,
    J;
  t[37] === q
    ? (J = t[38])
    : ((J = i(
        `ease-basic min-w-0 overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-inline-start] duration-relaxed motion-reduce:transition-none`,
        q,
      )),
      (t[37] = q),
      (t[38] = J));
  let Y;
  t[39] !== a || t[40] !== J
    ? ((Y = (0, g.jsx)(`span`, { className: J, children: a })),
      (t[39] = a),
      (t[40] = J),
      (t[41] = Y))
    : (Y = t[41]);
  let X;
  t[42] !== U || t[43] !== K || t[44] !== Y
    ? ((X = (0, g.jsxs)(`span`, { className: U, children: [K, Y] })),
      (t[42] = U),
      (t[43] = K),
      (t[44] = Y),
      (t[45] = X))
    : (X = t[45]);
  let Z;
  return (
    t[46] !== n ||
    t[47] !== s ||
    t[48] !== d ||
    t[49] !== M ||
    t[50] !== V ||
    t[51] !== X ||
    t[52] !== N ||
    t[53] !== I ||
    t[54] !== z ||
    t[55] !== B
      ? ((Z = (0, g.jsx)(o, {
          ...s,
          color: `ghost`,
          uniform: M,
          size: `toolbar`,
          disabled: d,
          "aria-label": N,
          "aria-pressed": n,
          style: I,
          className: z,
          onClick: B,
          onPointerLeave: V,
          children: X,
        })),
        (t[46] = n),
        (t[47] = s),
        (t[48] = d),
        (t[49] = M),
        (t[50] = V),
        (t[51] = X),
        (t[52] = N),
        (t[53] = I),
        (t[54] = z),
        (t[55] = B),
        (t[56] = Z))
      : (Z = t[56]),
    Z
  );
}
function f(e) {
  return `color-mix(in srgb, var(--color-surface) ${100 - e}%, var(--color-chart-blue) ${e}%)`;
}
function p() {
  return typeof document > `u`
    ? `ltr`
    : window.getComputedStyle(document.documentElement).direction === `rtl`
      ? `rtl`
      : `ltr`;
}
var m,
  h,
  g,
  _,
  v,
  y,
  b = e(() => {
    ((m = s()),
      c(),
      (h = t(r(), 1)),
      u(),
      n(),
      (g = a()),
      (_ = 10),
      (v = 15),
      (y = `border-chart-blue/40 bg-[var(--annotation-mode-button-annotation-background)] !text-info enabled:hover:bg-[var(--annotation-mode-button-annotation-hover-background)]`));
  });
export { b as n, d as t };
//# sourceMappingURL=annotation-mode-button-fa4bee24eb8d.js.map
