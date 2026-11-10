import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  MNt as r,
  NNt as i,
  PBt as a,
  SY as o,
  TY as s,
  XOt as c,
  Y3 as l,
  YOt as u,
  Z3 as d,
  okt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import { BFt as m, zFt as h } from "./app-initial-ad16eaadf81f.js";
function g(e) {
  let t = (0, _.c)(36),
    { impressionId: n, onDismiss: i, onPrimaryAction: a, onShown: s, tip: c, variant: u } = e,
    d = u === void 0 ? `plain` : u,
    m = f(),
    g;
  t[0] === s
    ? (g = t[1])
    : ((g = () => {
        s?.();
      }),
      (t[0] = s),
      (t[1] = g));
  let x = (0, v.useEffectEvent)(g),
    S;
  t[2] === x
    ? (S = t[3])
    : ((S = () => {
        x();
      }),
      (t[2] = x),
      (t[3] = S));
  let C;
  (t[4] === n ? (C = t[5]) : ((C = [n]), (t[4] = n), (t[5] = C)), (0, v.useEffect)(S, C));
  let w =
      d === `pill`
        ? `rounded-2xl border border-transparent bg-surface-elevated-secondary py-2 ps-2 pe-9 shadow-(--elevation-composer) dark:bg-(--color-background-composer-surface) dark:shadow-(--elevation-composer-dark)`
        : `px-7 py-1`,
    T;
  t[6] === w
    ? (T = t[7])
    : ((T = r(
        `group relative flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 select-none`,
        w,
      )),
      (t[6] = w),
      (t[7] = T));
  let E = d === `pill` ? `tipInset` : `tip`,
    D;
  t[8] === c.badgeLabel
    ? (D = t[9])
    : ((D = (0, y.jsx)(p, { ...c.badgeLabel })), (t[8] = c.badgeLabel), (t[9] = D));
  let O;
  t[10] !== E || t[11] !== D
    ? ((O = (0, y.jsx)(h, { className: `shrink-0`, variant: E, children: D })),
      (t[10] = E),
      (t[11] = D),
      (t[12] = O))
    : (O = t[12]);
  let k;
  t[13] === c.content
    ? (k = t[14])
    : ((k = (0, y.jsx)(`span`, {
        className: `min-w-0 text-center`,
        children: (0, y.jsx)(p, { ...c.content }),
      })),
      (t[13] = c.content),
      (t[14] = k));
  let A;
  t[15] === c.actionLabel
    ? (A = t[16])
    : ((A = (0, y.jsx)(p, { ...c.actionLabel })), (t[15] = c.actionLabel), (t[16] = A));
  let j;
  t[17] !== a || t[18] !== A
    ? ((j = (0, y.jsx)(l, {
        className: `underline decoration-dotted underline-offset-4`,
        color: `ghostMuted`,
        onClick: a,
        size: `inline`,
        children: A,
      })),
      (t[17] = a),
      (t[18] = A),
      (t[19] = j))
    : (j = t[19]);
  let M;
  t[20] !== k || t[21] !== j
    ? ((M = (0, y.jsxs)(`span`, {
        className: `flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-secondary`,
        children: [k, j],
      })),
      (t[20] = k),
      (t[21] = j),
      (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] === m ? (N = t[24]) : ((N = m.formatMessage(b.dismiss)), (t[23] = m), (t[24] = N));
  let P =
      d === `pill`
        ? `absolute end-2 top-1/2 -translate-y-1/2`
        : `pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
    F = d === `pill` ? `ghost` : `secondary`,
    I;
  t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = (0, y.jsx)(o, {})), (t[25] = I)) : (I = t[25]);
  let L;
  t[26] !== i || t[27] !== N || t[28] !== P || t[29] !== F
    ? ((L = (0, y.jsx)(l, {
        "aria-label": N,
        className: P,
        color: F,
        onClick: i,
        radius: `large`,
        size: `iconCircleSm`,
        children: I,
      })),
      (t[26] = i),
      (t[27] = N),
      (t[28] = P),
      (t[29] = F),
      (t[30] = L))
    : (L = t[30]);
  let R;
  return (
    t[31] !== M || t[32] !== L || t[33] !== T || t[34] !== O
      ? ((R = (0, y.jsx)(`aside`, {
          "aria-live": `polite`,
          className: `flex w-full justify-center`,
          role: `status`,
          children: (0, y.jsxs)(`div`, { className: T, children: [O, M, L] }),
        })),
        (t[31] = M),
        (t[32] = L),
        (t[33] = T),
        (t[34] = O),
        (t[35] = R))
      : (R = t[35]),
    R
  );
}
var _, v, y, b;
function x() {
  return (x = e(() => {
    ((_ = a()),
      i(),
      (v = t()),
      c(),
      m(),
      d(),
      s(),
      (y = n()),
      (b = u({
        dismiss: {
          id: `composerTips.dismiss`,
          defaultMessage: `Dismiss tip`,
          description: `Accessible label for permanently dismissing an educational tip shown above the composer`,
        },
      })));
  }))();
}
export { x as n, g as t };
//# sourceMappingURL=composer-tip-content-c6dc1cc08caf.js.map
