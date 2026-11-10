import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  MNt as r,
  NNt as i,
  PBt as a,
  Xz as o,
  Zz as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as c,
  DOr as l,
  LF as u,
  OOr as d,
  QF as f,
  RF as p,
  dut as m,
  eI as h,
  fut as g,
  nI as _,
  put as v,
  tI as y,
  wjr as b,
  xjr as x,
} from "./app-initial-ad16eaadf81f.js";
import { n as S, t as C } from "./profile-d06bbc2f13b9.js";
function w(e) {
  let t = (0, E.c)(4),
    { today: n } = e,
    r = (0, D.useContext)(y)?.slateLayout === !0,
    i = c(`998088620`),
    a = c(`2998660035`),
    o = b(`998088620`),
    s = b(`2998660035`);
  if (o || s) return null;
  let l = i && a,
    u;
  return (
    t[0] !== r || t[1] !== l || t[2] !== n
      ? ((u = (0, O.jsx)(C, {
          today: n,
          isProfileV2Enabled: l,
          useSlateSettingsControls: r,
          redirectToUsername: !1,
          Layout: T,
        })),
        (t[0] = r),
        (t[1] = l),
        (t[2] = n),
        (t[3] = u))
      : (u = t[3]),
    u
  );
}
function T(e) {
  let t = (0, E.c)(41),
    {
      children: n,
      header: i,
      isEditPaneOpen: a,
      isProfileV2Enabled: o,
      isError: c,
      ref: d,
      scrollRef: p,
    } = e,
    [h, _] = (0, D.useState)(!1),
    v = (0, D.useContext)(y);
  s(l);
  let b = o && v?.slateLayout === !0,
    x = b && !1,
    S;
  t[0] !== i || t[1] !== c || t[2] !== h || t[3] !== x
    ? ((S = x
        ? (0, O.jsxs)(`div`, {
            className: r(
              `sticky top-0 z-30 mx-auto flex w-full max-w-3xl flex-wrap items-center gap-x-4 border-b bg-surface px-panel pt-0.5`,
              h ? `border-subtle dark:border-default` : `border-transparent`,
            ),
            children: [
              (0, O.jsx)(`h1`, {
                className: `flex min-h-12 min-w-max grow-[999] items-center ps-8 text-lg font-medium text-default select-none`,
                children: (0, O.jsx)(u, { slug: `profile` }),
              }),
              !c && i,
            ],
          })
        : null),
      (t[0] = i),
      (t[1] = c),
      (t[2] = h),
      (t[3] = x),
      (t[4] = S))
    : (S = t[4]);
  let C = S;
  if (c) {
    let e = x ? null : i,
      r;
    return (
      t[5] !== n || t[6] !== C || t[7] !== e
        ? ((r = (0, O.jsxs)(f, {
            contentClassName: `h-full justify-center`,
            fullWidth: !0,
            backSlot: e,
            children: [C, n],
          })),
          (t[5] = n),
          (t[6] = C),
          (t[7] = e),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  let w = a && `@max-2xl:hidden`,
    T;
  t[9] === w
    ? (T = t[10])
    : ((T = r(
        `relative flex h-full min-h-0 min-w-0 flex-1 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg`,
        w,
      )),
      (t[9] = w),
      (t[10] = T));
  let k;
  t[11] !== i || t[12] !== b || t[13] !== x
    ? ((k =
        !b &&
        !x &&
        (0, O.jsx)(`div`, {
          className: `flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm`,
          children: i,
        })),
      (t[11] = i),
      (t[12] = b),
      (t[13] = x),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = !1), (t[15] = A)) : (A = t[15]);
  let j = b && `pb-panel`,
    M = !b && `p-panel`,
    N;
  t[16] !== j || t[17] !== M
    ? ((N = r(`@container flex-1 scrollbar-stable overflow-y-auto`, j, M)),
      (t[16] = j),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] === x
    ? (P = t[20])
    : ((P = x ? (e) => _(e.currentTarget.scrollTop > 0) : void 0), (t[19] = x), (t[20] = P));
  let F;
  t[21] !== i || t[22] !== b || t[23] !== x
    ? ((F =
        b &&
        !x &&
        (0, O.jsx)(m, {
          className: `max-w-3xl`,
          showDivider: !1,
          sticky: !1,
          title: (0, O.jsx)(`h1`, {
            className: `heading-xl text-default select-none`,
            children: (0, O.jsx)(u, { slug: `profile` }),
          }),
          actions: (0, O.jsx)(g, { search: null, actions: i }),
        })),
      (t[21] = i),
      (t[22] = b),
      (t[23] = x),
      (t[24] = F))
    : (F = t[24]);
  let I = b && !x ? `pt-panel` : void 0,
    L = b ? `max-w-3xl px-panel pt-panel` : `max-w-[732px] pt-12`,
    R;
  t[25] !== n || t[26] !== I || t[27] !== L
    ? ((R = (0, O.jsx)(f, { embedded: !0, fullWidth: !0, className: I, contentClassName: L, children: n })),
      (t[25] = n),
      (t[26] = I),
      (t[27] = L),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] !== C || t[30] !== p || t[31] !== F || t[32] !== R || t[33] !== N || t[34] !== P
    ? ((z = (0, O.jsxs)(`div`, {
        ref: p,
        "data-profile-scroll": !0,
        className: N,
        onScroll: P,
        children: [C, F, R],
      })),
      (t[29] = C),
      (t[30] = p),
      (t[31] = F),
      (t[32] = R),
      (t[33] = N),
      (t[34] = P),
      (t[35] = z))
    : (z = t[35]);
  let B;
  return (
    t[36] !== d || t[37] !== z || t[38] !== T || t[39] !== k
      ? ((B = (0, O.jsxs)(`div`, { ref: d, className: T, children: [k, A, z] })),
        (t[36] = d),
        (t[37] = z),
        (t[38] = T),
        (t[39] = k),
        (t[40] = B))
      : (B = t[40]),
    B
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = a()), i(), (D = t()), d(), v(), o(), h(), _(), p(), x(), S(), (O = n()));
  }))();
}
k();
export { w as ProfileSettings };
//# sourceMappingURL=profile-settings-af10c0eb084d.js.map
