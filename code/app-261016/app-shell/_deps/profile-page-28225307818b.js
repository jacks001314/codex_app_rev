import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ETt as t,
  FBt as n,
  FTt as r,
  ITt as i,
  KSt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  NSt as l,
  PBt as u,
  TTt as d,
  USt as f,
  VSt as p,
  dM as m,
  eM as h,
} from "./app-shared-2feb3d4c6fcc.js";
import { JRt as g, YRt as _ } from "./app-initial-ad16eaadf81f.js";
import { n as v, t as y } from "./profile-d06bbc2f13b9.js";
import { rt as b, t as x } from "./src-64808839b2f3.js";
import { l as S, u as C } from "./username-validation-1b83916da7fe.js";
function w(e) {
  let t = (0, E.c)(18),
    { today: n } = e,
    r = f(),
    { username: i, slug: o } = a(),
    s = p(),
    c;
  t[0] !== s || t[1] !== i ? ((c = S(s, i)), (t[0] = s), (t[1] = i), (t[2] = c)) : (c = t[2]);
  let l = c,
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, O.jsx)(g.MainContentLayout, { layout: `full-bleed` })), (t[3] = u))
    : (u = t[3]);
  let d = l.profileVisitKey,
    m;
  t[4] === s.search
    ? (m = t[5])
    : ((m = new URLSearchParams(s.search).get(`preview`)), (t[4] = s.search), (t[5] = m));
  let h = m === `true`,
    _;
  t[6] !== s.hash || t[7] !== s.search || t[8] !== r || t[9] !== l
    ? ((_ = (e, t) => {
        r({ pathname: t ?? `/profile`, search: s.search, hash: s.hash }, { replace: !0, state: l });
      }),
      (t[6] = s.hash),
      (t[7] = s.search),
      (t[8] = r),
      (t[9] = l),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  return (
    t[11] !== h || t[12] !== _ || t[13] !== n || t[14] !== i || t[15] !== l || t[16] !== o
      ? ((v = (0, O.jsxs)(O.Fragment, {
          children: [
            u,
            (0, O.jsx)(
              y,
              {
                visit: l,
                today: n,
                username: i,
                workspaceSlug: o,
                preview: h,
                onUsernameChanged: _,
                isProfileV2Enabled: !0,
                rightAlignHeaderControls: !0,
                redirectToUsername: !0,
                Layout: T,
              },
              d,
            ),
          ],
        })),
        (t[11] = h),
        (t[12] = _),
        (t[13] = n),
        (t[14] = i),
        (t[15] = l),
        (t[16] = o),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function T(e) {
  let n = (0, E.c)(31),
    { children: r, header: a, isEditPaneOpen: o, ref: c, scrollRef: l, isTab: u } = e,
    d = u !== void 0 && u,
    [f, p] = (0, D.useState)(!1),
    m = t(),
    _ = o && `pointer-events-none`,
    v = f ? `border-subtle bg-surface/80 backdrop-blur-xl dark:border-default` : `border-transparent`,
    y;
  n[0] !== _ || n[1] !== v
    ? ((y = s(
        `relative z-30 shrink-0 border-b browser:max-md:[&_[data-app-shell-header-toolbar]]:h-auto browser:max-md:[&_[data-app-shell-header-toolbar]]:min-h-toolbar`,
        _,
        v,
      )),
      (n[0] = _),
      (n[1] = v),
      (n[2] = y))
    : (y = n[2]);
  let x = +!!m,
    S;
  n[3] === x ? (S = n[4]) : ((S = { opacity: x }), (n[3] = x), (n[4] = S));
  let C = +!o,
    w;
  n[5] === C ? (w = n[6]) : ((w = { opacity: C }), (n[5] = C), (n[6] = w));
  let T = m ? 0 : 150 / 1e3,
    k;
  n[7] === T ? (k = n[8]) : ((k = { duration: T, ease: h }), (n[7] = T), (n[8] = k));
  let A;
  n[9] !== a || n[10] !== o || n[11] !== k || n[12] !== S || n[13] !== w
    ? ((A = (0, O.jsx)(g.HeaderToolbar, {
        children: (0, O.jsx)(i.div, {
          className: `flex w-full min-w-0 browser:max-md:ps-[calc(var(--app-shell-titlebar-left-inset)-var(--spacing)*2)]`,
          "aria-hidden": o,
          inert: o,
          initial: S,
          animate: w,
          transition: k,
          children: a,
        }),
      })),
      (n[9] = a),
      (n[10] = o),
      (n[11] = k),
      (n[12] = S),
      (n[13] = w),
      (n[14] = A))
    : (A = n[14]);
  let j;
  n[15] !== A || n[16] !== y
    ? ((j = (0, O.jsx)(`div`, { className: y, children: A })), (n[15] = A), (n[16] = y), (n[17] = j))
    : (j = n[17]);
  let M = j,
    N;
  n[18] === d ? (N = n[19]) : ((N = !d && (0, O.jsx)(g.Header, { inline: !0 })), (n[18] = d), (n[19] = N));
  let P;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => p(e.currentTarget.scrollTop > 0)), (n[20] = P))
    : (P = n[20]);
  let F;
  n[21] === r ? (F = n[22]) : ((F = (0, O.jsx)(b, { children: r })), (n[21] = r), (n[22] = F));
  let I;
  n[23] !== l || n[24] !== F
    ? ((I = (0, O.jsx)(`div`, {
        ref: l,
        className: `@container -mt-[var(--height-toolbar)] min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
        "data-profile-scroll": !0,
        onScroll: P,
        children: F,
      })),
      (n[23] = l),
      (n[24] = F),
      (n[25] = I))
    : (I = n[25]);
  let L;
  return (
    n[26] !== M || n[27] !== c || n[28] !== N || n[29] !== I
      ? ((L = (0, O.jsx)(O.Fragment, {
          children: (0, O.jsxs)(`div`, {
            ref: c,
            className: `relative flex h-full min-h-0 min-w-0 flex-1 flex-col bg-surface`,
            children: [N, M, I],
          }),
        })),
        (n[26] = M),
        (n[27] = c),
        (n[28] = N),
        (n[29] = I),
        (n[30] = L))
      : (L = n[30]),
    L
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = u()), x(), c(), r(), d(), (D = n()), l(), _(), C(), v(), m(), (O = o()));
  }))();
}
export { T as n, k as r, w as t };
//# sourceMappingURL=profile-page-28225307818b.js.map
