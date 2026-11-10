import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ext as t,
  Sj as n,
  _Mt as r,
  _wt as i,
  _xt as a,
  dj as o,
  gMt as s,
  gwt as c,
  kxt as l,
  owt as u,
  swt as d,
  vzt as f,
  wxt as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import { XHt as g, YHt as _ } from "./app-initial-5851df3f6cb1.js";
import { n as v, t as y } from "./profile-88f7f966d875.js";
import { rt as b, t as x } from "./src-c65a930b3c0e.js";
import { l as S, u as C } from "./username-validation-c1e2f125c179.js";
function w(e) {
  let n = (0, E.c)(15),
    { today: r } = e,
    i = t(),
    { username: a } = l(),
    o = p(),
    s;
  n[0] !== o || n[1] !== a ? ((s = S(o, a)), (n[0] = o), (n[1] = a), (n[2] = s)) : (s = n[2]);
  let c = s,
    u;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, O.jsx)(_.MainContentLayout, { layout: `full-bleed` })), (n[3] = u))
    : (u = n[3]);
  let d = c.profileVisitKey,
    f;
  n[4] === o.search
    ? (f = n[5])
    : ((f = new URLSearchParams(o.search).get(`preview`)), (n[4] = o.search), (n[5] = f));
  let m = f === `true`,
    h;
  n[6] !== i || n[7] !== c
    ? ((h = (e) => {
        i(e == null ? `/profile` : `/u/${encodeURIComponent(e)}`, { replace: !0, state: c });
      }),
      (n[6] = i),
      (n[7] = c),
      (n[8] = h))
    : (h = n[8]);
  let g;
  return (
    n[9] !== m || n[10] !== h || n[11] !== r || n[12] !== a || n[13] !== c
      ? ((g = (0, O.jsxs)(O.Fragment, {
          children: [
            u,
            (0, O.jsx)(
              y,
              {
                visit: c,
                today: r,
                username: a,
                preview: m,
                onUsernameChanged: h,
                isProfileV2Enabled: !0,
                rightAlignHeaderControls: !0,
                redirectToUsername: !0,
                Layout: T,
              },
              d,
            ),
          ],
        })),
        (n[9] = m),
        (n[10] = h),
        (n[11] = r),
        (n[12] = a),
        (n[13] = c),
        (n[14] = g))
      : (g = n[14]),
    g
  );
}
function T(e) {
  let t = (0, E.c)(31),
    { children: n, header: r, isEditPaneOpen: a, ref: c, scrollRef: l, isTab: u } = e,
    f = u !== void 0 && u,
    [p, m] = (0, D.useState)(!1),
    h = d(),
    g = a && `pointer-events-none`,
    v = p ? `border-subtle bg-surface/80 backdrop-blur-xl dark:border-default` : `border-transparent`,
    y;
  t[0] !== g || t[1] !== v
    ? ((y = s(
        `relative z-30 shrink-0 border-b browser:max-md:[&_[data-app-shell-header-toolbar]]:h-auto browser:max-md:[&_[data-app-shell-header-toolbar]]:min-h-toolbar`,
        g,
        v,
      )),
      (t[0] = g),
      (t[1] = v),
      (t[2] = y))
    : (y = t[2]);
  let x = +!!h,
    S;
  t[3] === x ? (S = t[4]) : ((S = { opacity: x }), (t[3] = x), (t[4] = S));
  let C = +!a,
    w;
  t[5] === C ? (w = t[6]) : ((w = { opacity: C }), (t[5] = C), (t[6] = w));
  let T = h ? 0 : 150 / 1e3,
    k;
  t[7] === T ? (k = t[8]) : ((k = { duration: T, ease: o }), (t[7] = T), (t[8] = k));
  let A;
  t[9] !== r || t[10] !== a || t[11] !== k || t[12] !== S || t[13] !== w
    ? ((A = (0, O.jsx)(_.HeaderToolbar, {
        children: (0, O.jsx)(i.div, {
          className: `flex w-full min-w-0 browser:max-md:ps-[calc(var(--app-shell-titlebar-left-inset)-var(--spacing)*2)]`,
          "aria-hidden": a,
          inert: a,
          initial: S,
          animate: w,
          transition: k,
          children: r,
        }),
      })),
      (t[9] = r),
      (t[10] = a),
      (t[11] = k),
      (t[12] = S),
      (t[13] = w),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] !== A || t[16] !== y
    ? ((j = (0, O.jsx)(`div`, { className: y, children: A })), (t[15] = A), (t[16] = y), (t[17] = j))
    : (j = t[17]);
  let M = j,
    N;
  t[18] === f ? (N = t[19]) : ((N = !f && (0, O.jsx)(_.Header, { inline: !0 })), (t[18] = f), (t[19] = N));
  let P;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => m(e.currentTarget.scrollTop > 0)), (t[20] = P))
    : (P = t[20]);
  let F;
  t[21] === n ? (F = t[22]) : ((F = (0, O.jsx)(b, { children: n })), (t[21] = n), (t[22] = F));
  let I;
  t[23] !== l || t[24] !== F
    ? ((I = (0, O.jsx)(`div`, {
        ref: l,
        className: `@container -mt-[var(--height-toolbar)] min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
        "data-profile-scroll": !0,
        onScroll: P,
        children: F,
      })),
      (t[23] = l),
      (t[24] = F),
      (t[25] = I))
    : (I = t[25]);
  let L;
  return (
    t[26] !== M || t[27] !== c || t[28] !== N || t[29] !== I
      ? ((L = (0, O.jsx)(O.Fragment, {
          children: (0, O.jsxs)(`div`, {
            ref: c,
            className: `relative flex h-full min-h-0 min-w-0 flex-1 flex-col bg-surface`,
            children: [N, M, I],
          }),
        })),
        (t[26] = M),
        (t[27] = c),
        (t[28] = N),
        (t[29] = I),
        (t[30] = L))
      : (L = t[30]),
    L
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = f()), x(), r(), c(), u(), (D = h()), a(), g(), C(), v(), n(), (O = m()));
  }))();
}
export { T as n, k as r, w as t };
//# sourceMappingURL=profile-page-229d53af14a7.js.map
