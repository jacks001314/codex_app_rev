import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JR as n,
  Sj as r,
  VDt as i,
  YR as a,
  _wt as o,
  cz as s,
  dj as c,
  dz as l,
  gwt as u,
  jDt as d,
  sz as f,
  vzt as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
function g(e) {
  let n = (0, y.c)(46),
    { interactive: r, people: s, placeholder: u, front: d } = e,
    p = r === void 0 || r,
    m = d === void 0 ? `first` : d,
    h = i(),
    g = a(),
    S = s.length,
    C;
  n[0] === s ? (C = n[1]) : ((C = s.slice(0, 4)), (n[0] = s), (n[1] = C));
  let w = C,
    [T, E] = (0, b.useState)(w.length),
    [D, O] = (0, b.useState)(null),
    k = S - Math.min(T, w.length),
    A;
  n[2] !== w.length || n[3] !== S
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
      (n[2] = w.length),
      (n[3] = S),
      (n[4] = A))
    : (A = n[4]);
  let j = A,
    M;
  n[5] !== w || n[6] !== m || n[7] !== u || n[8] !== g || n[9] !== T
    ? ((M =
        w.length === 0 && u != null
          ? (0, x.jsx)(`span`, {
              className: `pointer-events-auto relative inline-flex shrink-0`,
              "data-page-facepile-avatar": !0,
              children: u,
            })
          : w.map((e, t) =>
              (0, x.jsx)(
                o.span,
                {
                  className: `pointer-events-auto relative inline-flex shrink-0`,
                  "data-page-facepile-avatar": !0,
                  initial: u == null && { opacity: g ? 1 : 0.9 },
                  animate: t === 0 ? `first` : `rest`,
                  variants: { first: { opacity: g ? 1 : [0.9, 1] }, rest: { opacity: 1 } },
                  transition: { type: `tween`, duration: g ? 0 : 150 / 1e3, ease: c },
                  style: { visibility: t < T ? void 0 : `hidden`, zIndex: m === `first` ? w.length - t : t },
                  "aria-hidden": t >= T || void 0,
                  inert: t >= T,
                  children: e.avatar,
                },
                e.id,
              ),
            )),
      (n[5] = w),
      (n[6] = m),
      (n[7] = u),
      (n[8] = g),
      (n[9] = T),
      (n[10] = M))
    : (M = n[10]);
  let N;
  n[11] === M
    ? (N = n[12])
    : ((N = (0, x.jsx)(`span`, {
        className: `pointer-events-none relative isolate z-10 flex shrink-0 items-center -space-x-2`,
        children: M,
      })),
      (n[11] = M),
      (n[12] = N));
  let P = !p,
    F = k > 0 && D != null,
    I;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => O(e ? `hover` : null)), (n[13] = I))
    : (I = n[13]);
  let L;
  n[14] === p
    ? (L = n[15])
    : ((L = p
        ? (e) => {
            (e.stopPropagation(), O(v));
          }
        : void 0),
      (n[14] = p),
      (n[15] = L));
  let R;
  n[16] === p
    ? (R = n[17])
    : ((R = (e) => {
        p && (e.key === `Enter` || e.key === ` `) && e.stopPropagation();
      }),
      (n[16] = p),
      (n[17] = R));
  let z;
  n[18] !== k || n[19] !== h
    ? ((z = h.formatMessage(
        {
          id: `collaboratorFacepile.morePeople`,
          defaultMessage: `{count, plural, one {# more person} other {# more people}}`,
          description: `Accessible label for the collaborator facepile overflow button, which shows the remaining people's names`,
        },
        { count: k },
      )),
      (n[18] = k),
      (n[19] = h),
      (n[20] = z))
    : (z = n[20]);
  let B;
  n[21] !== s || n[22] !== T ? ((B = s.slice(T).map(_)), (n[21] = s), (n[22] = T), (n[23] = B)) : (B = n[23]);
  let V;
  n[24] === B
    ? (V = n[25])
    : ((V = (0, x.jsx)(l, {
        children: (0, x.jsx)(`div`, {
          className: `flex max-h-64 flex-col gap-2 overflow-y-auto p-2`,
          children: B,
        }),
      })),
      (n[24] = B),
      (n[25] = V));
  let H = k > 0 ? void 0 : `hidden`,
    U;
  n[26] === H ? (U = n[27]) : ((U = { visibility: H }), (n[26] = H), (n[27] = U));
  let W = k === 0 || void 0,
    G = p && k > 0 ? 0 : -1,
    K = k || S,
    q;
  n[28] === K
    ? (q = n[29])
    : ((q = (0, x.jsx)(`span`, {
        children: (0, x.jsx)(t, {
          id: `collaboratorFacepile.overflow`,
          defaultMessage: `+{count}`,
          description: `Compact number of additional people with access beyond the visible avatars in a shared file header; count is the number of people not shown`,
          values: { count: K },
        }),
      })),
      (n[28] = K),
      (n[29] = q));
  let J;
  n[30] !== p ||
  n[31] !== L ||
  n[32] !== R ||
  n[33] !== z ||
  n[34] !== V ||
  n[35] !== U ||
  n[36] !== W ||
  n[37] !== G ||
  n[38] !== q ||
  n[39] !== P ||
  n[40] !== F
    ? ((J = (0, x.jsx)(f, {
        className: `pointer-events-auto absolute z-0 inline-flex h-7 min-w-7 cursor-interaction items-center justify-center rounded-full border border-default bg-surface ps-1.5 pe-1 text-xs text-secondary`,
        triggerAsChild: P,
        open: F,
        onOpenChange: I,
        onClick: L,
        onKeyDown: R,
        interactive: p,
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
      (n[30] = p),
      (n[31] = L),
      (n[32] = R),
      (n[33] = z),
      (n[34] = V),
      (n[35] = U),
      (n[36] = W),
      (n[37] = G),
      (n[38] = q),
      (n[39] = P),
      (n[40] = F),
      (n[41] = J))
    : (J = n[41]);
  let Y;
  return (
    n[42] !== j || n[43] !== J || n[44] !== N
      ? ((Y = (0, x.jsxs)(`span`, {
          ref: j,
          className: `relative inline-flex max-w-32 min-w-0 items-center overflow-hidden select-none`,
          "data-page-facepile": !0,
          children: [N, J],
        })),
        (n[42] = j),
        (n[43] = J),
        (n[44] = N),
        (n[45] = Y))
      : (Y = n[45]),
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
    ((y = p()), u(), (b = h()), d(), s(), n(), r(), (x = m()));
  }))();
}
export { S as n, g as t };
//# sourceMappingURL=facepile-b69f19009d4d.js.map
