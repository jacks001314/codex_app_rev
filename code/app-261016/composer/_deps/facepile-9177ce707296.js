import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  FTt as n,
  ITt as r,
  LNt as i,
  PBt as a,
  Uz as o,
  Wz as s,
  XOt as c,
  dM as l,
  eM as u,
  nB as d,
  oB as f,
  okt as p,
  rB as m,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
function g(e) {
  let t = (0, y.c)(46),
    { interactive: n, people: i, placeholder: a, front: o } = e,
    c = n === void 0 || n,
    l = o === void 0 ? `first` : o,
    m = p(),
    g = s(),
    S = i.length,
    C;
  t[0] === i ? (C = t[1]) : ((C = i.slice(0, 4)), (t[0] = i), (t[1] = C));
  let w = C,
    [T, E] = (0, b.useState)(w.length),
    [D, O] = (0, b.useState)(null),
    k = S - Math.min(T, w.length),
    A;
  t[2] !== w.length || t[3] !== S
    ? ((A = (e) => {
        let t = e?.firstElementChild,
          n = e?.lastElementChild;
        if (e == null || !(t instanceof HTMLElement) || !(n instanceof HTMLElement)) return;
        n.style.minWidth = ``;
        let r = 0,
          i = () => {
            ((r = Math.max(r, n.offsetWidth)), (n.style.minWidth = `${r}px`));
            let i = Number.parseFloat(getComputedStyle(n).paddingInlineStart),
              a = r - i;
            t.style.paddingInlineEnd = S > w.length ? `${a}px` : ``;
            let o = S === w.length && t.clientWidth <= e.clientWidth,
              s = o ? e.clientWidth : e.clientWidth - a,
              c = getComputedStyle(e).direction === `rtl`,
              l = 0,
              u = 0;
            for (let e of t.querySelectorAll(`[data-page-facepile-avatar]`)) {
              if (!(e instanceof HTMLElement)) continue;
              let n = c ? t.clientWidth - e.offsetLeft : e.offsetLeft + e.offsetWidth;
              (o || n <= s) && ((l += 1), (u = n));
            }
            ((n.style.insetInlineStart = `${Math.max(0, u - i)}px`), E(l));
          },
          a = new ResizeObserver(i);
        return (a.observe(e), a.observe(t), a.observe(n), i(), () => a.disconnect());
      }),
      (t[2] = w.length),
      (t[3] = S),
      (t[4] = A))
    : (A = t[4]);
  let j = A,
    M;
  t[5] !== w || t[6] !== l || t[7] !== a || t[8] !== g || t[9] !== T
    ? ((M =
        w.length === 0 && a != null
          ? (0, x.jsx)(`span`, {
              className: `pointer-events-auto relative inline-flex shrink-0`,
              "data-page-facepile-avatar": !0,
              children: a,
            })
          : w.map((e, t) =>
              (0, x.jsx)(
                r.span,
                {
                  className: `pointer-events-auto relative inline-flex shrink-0`,
                  "data-page-facepile-avatar": !0,
                  initial: a == null && { opacity: g ? 1 : 0.9 },
                  animate: t === 0 ? `first` : `rest`,
                  variants: { first: { opacity: g ? 1 : [0.9, 1] }, rest: { opacity: 1 } },
                  transition: { type: `tween`, duration: g ? 0 : 150 / 1e3, ease: u },
                  style: { visibility: t < T ? void 0 : `hidden`, zIndex: l === `first` ? w.length - t : t },
                  "aria-hidden": t >= T || void 0,
                  inert: t >= T,
                  children: e.avatar,
                },
                e.id,
              ),
            )),
      (t[5] = w),
      (t[6] = l),
      (t[7] = a),
      (t[8] = g),
      (t[9] = T),
      (t[10] = M))
    : (M = t[10]);
  let N;
  t[11] === M
    ? (N = t[12])
    : ((N = (0, x.jsx)(`span`, {
        className: `pointer-events-none relative isolate z-10 flex shrink-0 items-center -space-x-2`,
        children: M,
      })),
      (t[11] = M),
      (t[12] = N));
  let P = !c,
    F = k > 0 && D != null,
    I;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => O(e ? `hover` : null)), (t[13] = I))
    : (I = t[13]);
  let L;
  t[14] === c
    ? (L = t[15])
    : ((L = c
        ? (e) => {
            (e.stopPropagation(), O(v));
          }
        : void 0),
      (t[14] = c),
      (t[15] = L));
  let R;
  t[16] === c
    ? (R = t[17])
    : ((R = (e) => {
        c && (e.key === `Enter` || e.key === ` `) && e.stopPropagation();
      }),
      (t[16] = c),
      (t[17] = R));
  let z;
  t[18] !== k || t[19] !== m
    ? ((z = m.formatMessage(
        {
          id: `collaboratorFacepile.morePeople`,
          defaultMessage: `{count, plural, one {# more person} other {# more people}}`,
          description: `Accessible label for the collaborator facepile overflow button, which shows the remaining people's names`,
        },
        { count: k },
      )),
      (t[18] = k),
      (t[19] = m),
      (t[20] = z))
    : (z = t[20]);
  let B;
  t[21] !== i || t[22] !== T ? ((B = i.slice(T).map(_)), (t[21] = i), (t[22] = T), (t[23] = B)) : (B = t[23]);
  let V;
  t[24] === B
    ? (V = t[25])
    : ((V = (0, x.jsx)(f, {
        children: (0, x.jsx)(`div`, {
          className: `flex max-h-64 flex-col gap-2 overflow-y-auto p-2`,
          children: B,
        }),
      })),
      (t[24] = B),
      (t[25] = V));
  let H = k > 0 ? void 0 : `hidden`,
    U;
  t[26] === H ? (U = t[27]) : ((U = { visibility: H }), (t[26] = H), (t[27] = U));
  let W = k === 0 || void 0,
    G = c && k > 0 ? 0 : -1,
    K = k || S,
    q;
  t[28] === K
    ? (q = t[29])
    : ((q = (0, x.jsx)(`span`, {
        children: (0, x.jsx)(h, {
          id: `collaboratorFacepile.overflow`,
          defaultMessage: `+{count}`,
          description: `Compact number of additional people with access beyond the visible avatars in a shared file header; count is the number of people not shown`,
          values: { count: K },
        }),
      })),
      (t[28] = K),
      (t[29] = q));
  let J;
  t[30] !== c ||
  t[31] !== L ||
  t[32] !== R ||
  t[33] !== z ||
  t[34] !== V ||
  t[35] !== U ||
  t[36] !== W ||
  t[37] !== G ||
  t[38] !== q ||
  t[39] !== P ||
  t[40] !== F
    ? ((J = (0, x.jsx)(d, {
        className: `pointer-events-auto absolute z-0 inline-flex h-7 min-w-7 cursor-interaction items-center justify-center rounded-full border border-default bg-surface ps-1.5 pe-1 text-xs text-secondary`,
        triggerAsChild: P,
        open: F,
        onOpenChange: I,
        onClick: L,
        onKeyDown: R,
        interactive: c,
        variant: `rich`,
        side: `bottom`,
        align: `end`,
        "aria-label": z,
        tooltipContent: V,
        style: U,
        "aria-hidden": W,
        tabIndex: G,
        children: q,
      })),
      (t[30] = c),
      (t[31] = L),
      (t[32] = R),
      (t[33] = z),
      (t[34] = V),
      (t[35] = U),
      (t[36] = W),
      (t[37] = G),
      (t[38] = q),
      (t[39] = P),
      (t[40] = F),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  return (
    t[42] !== j || t[43] !== J || t[44] !== N
      ? ((Y = (0, x.jsxs)(`span`, {
          ref: j,
          className: `relative inline-flex max-w-32 min-w-0 items-center overflow-hidden select-none`,
          "data-page-facepile": !0,
          children: [N, J],
        })),
        (t[42] = j),
        (t[43] = J),
        (t[44] = N),
        (t[45] = Y))
      : (Y = t[45]),
    Y
  );
}
function _(e) {
  return (0, x.jsxs)(
    `div`,
    {
      className: `flex items-center gap-2`,
      children: [
        e.avatar,
        (0, x.jsx)(`span`, { className: `text-sm text-default`, children: e.label ?? e.name }),
      ],
    },
    e.id,
  );
}
function v(e) {
  return e === `click` ? null : `click`;
}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = a()), n(), (b = t()), c(), m(), o(), l(), (x = i()));
  }))();
}
export { S as n, g as t };
//# sourceMappingURL=facepile-9177ce707296.js.map
