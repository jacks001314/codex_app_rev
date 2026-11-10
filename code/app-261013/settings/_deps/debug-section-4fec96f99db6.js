import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  XD as t,
  YD as n,
  _Mt as r,
  gMt as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
var c, l;
function u() {
  return (u = e(() => {
    ((c = s()), (l = (0, c.createContext)(!1)));
  }))();
}
function d(e) {
  let t = (0, p.c)(41),
    {
      title: r,
      children: a,
      storageKey: o,
      variant: s,
      onToggle: c,
      className: u,
      actions: d,
      unmountChildrenWhenClosed: g,
    } = e,
    _ = s === void 0 ? `selection` : s,
    v = g !== void 0 && g,
    y = (0, m.useContext)(l),
    b;
  t[0] === o
    ? (b = t[1])
    : ((b = () => {
        if (!o) return !1;
        try {
          return window.localStorage.getItem(o) === `open`;
        } catch {
          return !1;
        }
      }),
      (t[0] = o),
      (t[1] = b));
  let [x, S] = (0, m.useState)(b),
    C = y ? `flex h-full min-h-0 flex-col` : void 0,
    w = y ? `h-toolbar-sm border-b border-default text-default` : `h-7`,
    T = !y && (_ === `selection` ? `bg-chart-blue/10 text-chart-blue` : `bg-text/5 text-default`),
    E;
  t[2] !== u || t[3] !== w || t[4] !== T
    ? ((E = i(`flex w-full shrink-0 items-center justify-between gap-2 select-none`, w, T, u)),
      (t[2] = u),
      (t[3] = w),
      (t[4] = T),
      (t[5] = E))
    : (E = t[5]);
  let D;
  t[6] !== x || t[7] !== y || t[8] !== c || t[9] !== o || t[10] !== r || t[11] !== _
    ? ((D = y
        ? (0, h.jsx)(`h2`, { className: `min-w-0 flex-1 truncate px-3 font-medium`, children: r })
        : (0, h.jsxs)(`button`, {
            type: `button`,
            className: i(
              `flex h-full min-w-0 flex-1 cursor-interaction items-center gap-2 px-3 text-start font-medium`,
              _ === `selection` ? `hover:bg-chart-blue/15` : `hover:bg-text/10`,
            ),
            "aria-expanded": x,
            onClick: () => {
              let e = !x;
              if ((S(e), o))
                try {
                  window.localStorage.setItem(o, e ? `open` : `closed`);
                } catch {}
              c?.(e);
            },
            children: [
              (0, h.jsx)(n, {
                className: `icon-2xs transition-transform duration-basic`,
                style: { transform: `rotate(${x ? 0 : -90}deg)` },
              }),
              r,
            ],
          })),
      (t[6] = x),
      (t[7] = y),
      (t[8] = c),
      (t[9] = o),
      (t[10] = r),
      (t[11] = _),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === d
    ? (O = t[14])
    : ((O = d
        ? (0, h.jsx)(`span`, {
            className: `flex items-center gap-1`,
            role: `presentation`,
            onClick: f,
            children: d,
          })
        : null),
      (t[13] = d),
      (t[14] = O));
  let k;
  t[15] !== y || t[16] !== _
    ? ((k =
        !y && _ === `selection`
          ? (0, h.jsx)(`span`, { className: `icon-2xs ms-1 block h-2 w-2 rounded-full bg-current` })
          : null),
      (t[15] = y),
      (t[16] = _),
      (t[17] = k))
    : (k = t[17]);
  let A;
  t[18] !== k || t[19] !== O
    ? ((A = (0, h.jsxs)(`span`, {
        className: `flex items-center gap-1 pe-3 text-current`,
        children: [O, k],
      })),
      (t[18] = k),
      (t[19] = O),
      (t[20] = A))
    : (A = t[20]);
  let j;
  t[21] !== A || t[22] !== E || t[23] !== D
    ? ((j = (0, h.jsxs)(`div`, { className: E, children: [D, A] })),
      (t[21] = A),
      (t[22] = E),
      (t[23] = D),
      (t[24] = j))
    : (j = t[24]);
  let M = y && `min-h-0 flex-1 overflow-auto pb-4`,
    N;
  t[25] === M ? (N = t[26]) : ((N = i(`px-3`, M)), (t[25] = M), (t[26] = N));
  let P;
  t[27] !== x || t[28] !== y
    ? ((P = y ? void 0 : { contentVisibility: x ? `visible` : `hidden`, display: x ? `block` : `none` }),
      (t[27] = x),
      (t[28] = y),
      (t[29] = P))
    : (P = t[29]);
  let F = y || x,
    I = v && !y && !x ? null : a,
    L;
  t[30] === I ? (L = t[31]) : ((L = (0, h.jsx)(l, { value: !1, children: I })), (t[30] = I), (t[31] = L));
  let R;
  t[32] !== N || t[33] !== P || t[34] !== F || t[35] !== L
    ? ((R = (0, h.jsx)(`div`, { className: N, style: P, "data-open": F, children: L })),
      (t[32] = N),
      (t[33] = P),
      (t[34] = F),
      (t[35] = L),
      (t[36] = R))
    : (R = t[36]);
  let z;
  return (
    t[37] !== j || t[38] !== R || t[39] !== C
      ? ((z = (0, h.jsxs)(`div`, { className: C, children: [j, R] })),
        (t[37] = j),
        (t[38] = R),
        (t[39] = C),
        (t[40] = z))
      : (z = t[40]),
    z
  );
}
function f(e) {
  e.stopPropagation();
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = a()), r(), (m = s()), t(), u(), (h = o()));
  }))();
}
export { u as i, g as n, l as r, d as t };
//# sourceMappingURL=debug-section-4fec96f99db6.js.map
