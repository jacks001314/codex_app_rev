import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  _Mt as t,
  gMt as n,
  nz as r,
  tz as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  _F as c,
  clt as l,
  dwr as u,
  eDr as d,
  eF as f,
  fwr as p,
  hF as m,
  nDr as h,
  olt as g,
  rDr as _,
  slt as v,
  tF as y,
  vF as b,
  yF as x,
} from "./app-initial-5851df3f6cb1.js";
import { n as S, t as C } from "./profile-88f7f966d875.js";
function w(e) {
  let t = (0, E.c)(4),
    { today: n } = e,
    r = (0, D.useContext)(b)?.slateLayout === !0,
    i = h(`998088620`),
    a = h(`2998660035`),
    o = _(`998088620`),
    s = _(`2998660035`);
  if (o || s) return null;
  let c = i && a,
    l;
  return (
    t[0] !== r || t[1] !== c || t[2] !== n
      ? ((l = (0, O.jsx)(C, {
          today: n,
          isProfileV2Enabled: c,
          useSlateSettingsControls: r,
          redirectToUsername: !1,
          Layout: T,
        })),
        (t[0] = r),
        (t[1] = c),
        (t[2] = n),
        (t[3] = l))
      : (l = t[3]),
    l
  );
}
function T(e) {
  let t = (0, E.c)(41),
    {
      children: i,
      header: a,
      isEditPaneOpen: o,
      isProfileV2Enabled: s,
      isError: c,
      ref: l,
      scrollRef: d,
    } = e,
    [p, h] = (0, D.useState)(!1),
    _ = (0, D.useContext)(b);
  r(u);
  let y = s && _?.slateLayout === !0,
    x = y && !1,
    S;
  t[0] !== a || t[1] !== c || t[2] !== p || t[3] !== x
    ? ((S = x
        ? (0, O.jsxs)(`div`, {
            className: n(
              `sticky top-0 z-30 mx-auto flex w-full max-w-3xl flex-wrap items-center gap-x-4 border-b bg-surface px-panel pt-0.5`,
              p ? `border-subtle dark:border-default` : `border-transparent`,
            ),
            children: [
              (0, O.jsx)(`h1`, {
                className: `flex min-h-12 min-w-max grow-[999] items-center ps-8 text-lg font-medium text-default select-none`,
                children: (0, O.jsx)(f, { slug: `profile` }),
              }),
              !c && a,
            ],
          })
        : null),
      (t[0] = a),
      (t[1] = c),
      (t[2] = p),
      (t[3] = x),
      (t[4] = S))
    : (S = t[4]);
  let C = S;
  if (c) {
    let e = x ? null : a,
      n;
    return (
      t[5] !== i || t[6] !== C || t[7] !== e
        ? ((n = (0, O.jsxs)(m, {
            contentClassName: `h-full justify-center`,
            fullWidth: !0,
            backSlot: e,
            children: [C, i],
          })),
          (t[5] = i),
          (t[6] = C),
          (t[7] = e),
          (t[8] = n))
        : (n = t[8]),
      n
    );
  }
  let w = o && `@max-2xl:hidden`,
    T;
  t[9] === w
    ? (T = t[10])
    : ((T = n(
        `relative flex h-full min-h-0 min-w-0 flex-1 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg`,
        w,
      )),
      (t[9] = w),
      (t[10] = T));
  let k;
  t[11] !== a || t[12] !== y || t[13] !== x
    ? ((k =
        !y &&
        !x &&
        (0, O.jsx)(`div`, {
          className: `flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm`,
          children: a,
        })),
      (t[11] = a),
      (t[12] = y),
      (t[13] = x),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = !1), (t[15] = A)) : (A = t[15]);
  let j = y && `pb-panel`,
    M = !y && `p-panel`,
    N;
  t[16] !== j || t[17] !== M
    ? ((N = n(`@container flex-1 scrollbar-stable overflow-y-auto`, j, M)),
      (t[16] = j),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] === x
    ? (P = t[20])
    : ((P = x ? (e) => h(e.currentTarget.scrollTop > 0) : void 0), (t[19] = x), (t[20] = P));
  let F;
  t[21] !== a || t[22] !== y || t[23] !== x
    ? ((F =
        y &&
        !x &&
        (0, O.jsx)(g, {
          className: `max-w-3xl`,
          showDivider: !1,
          sticky: !1,
          title: (0, O.jsx)(`h1`, {
            className: `heading-xl text-default select-none`,
            children: (0, O.jsx)(f, { slug: `profile` }),
          }),
          actions: (0, O.jsx)(v, { search: null, actions: a }),
        })),
      (t[21] = a),
      (t[22] = y),
      (t[23] = x),
      (t[24] = F))
    : (F = t[24]);
  let I = y && !x ? `pt-panel` : void 0,
    L = y ? `max-w-3xl px-panel pt-panel` : `max-w-[732px] pt-12`,
    R;
  t[25] !== i || t[26] !== I || t[27] !== L
    ? ((R = (0, O.jsx)(m, { embedded: !0, fullWidth: !0, className: I, contentClassName: L, children: i })),
      (t[25] = i),
      (t[26] = I),
      (t[27] = L),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] !== C || t[30] !== d || t[31] !== F || t[32] !== R || t[33] !== N || t[34] !== P
    ? ((z = (0, O.jsxs)(`div`, {
        ref: d,
        "data-profile-scroll": !0,
        className: N,
        onScroll: P,
        children: [C, F, R],
      })),
      (t[29] = C),
      (t[30] = d),
      (t[31] = F),
      (t[32] = R),
      (t[33] = N),
      (t[34] = P),
      (t[35] = z))
    : (z = t[35]);
  let B;
  return (
    t[36] !== l || t[37] !== z || t[38] !== T || t[39] !== k
      ? ((B = (0, O.jsxs)(`div`, { ref: l, className: T, children: [k, A, z] })),
        (t[36] = l),
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
    ((E = a()), t(), (D = s()), p(), l(), i(), c(), x(), y(), d(), S(), (O = o()));
  }))();
}
k();
export { w as ProfileSettings };
//# sourceMappingURL=profile-settings-62cf7c7f62d0.js.map
