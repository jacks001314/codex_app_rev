import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Jbt as n,
  Myt as r,
  Pxt as i,
  Vxt as a,
  _xt as o,
  kxt as s,
  oxt as c,
  rst as l,
  vzt as u,
  wxt as d,
  xMt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  $pr as m,
  Cpr as h,
  Cwr as g,
  OPr as _,
  Opr as v,
  Pun as y,
  UCn as b,
  WCn as x,
  XHt as S,
  YHt as C,
  Zpr as w,
  _Tn as T,
  _Tr as E,
  _mr as D,
  emr as ee,
  fTr as O,
  gmr as k,
  gwr as A,
  her as j,
  kPr as te,
  pTr as M,
  per as N,
  tNr as P,
  vTn as F,
  vwr as ne,
  wpr as I,
  zlt as L,
} from "./app-initial-5851df3f6cb1.js";
import { r as R, t as z } from "./document-title-1619f32b59ec.js";
import { i as B, n as V, r as H, t as U } from "./header-action-412a59778d0b.js";
import { r as W, t as G } from "./thread-app-shell-chrome-404b941243dd.js";
import { n as K, t as q } from "./chat-tab-metadata-bridge-e6e8bf7ae8b2.js";
import { n as J, t as Y } from "./conversation-view-7b7c0046b8d4.js";
import { r as X, t as re } from "./catalog-b8899204cdcc.js";
function ie(e) {
  let t = (0, Z.c)(11),
    { children: n, fallback: i } = e,
    { id: o, threadId: l } = s(),
    u = a(i == null ? null : j);
  if (i != null && u == null) return i;
  let d = i == null ? o : u,
    f;
  if (l != null) {
    let e;
    (t[0] === l ? (e = t[1]) : ((e = (0, Q.jsx)(oe, { threadId: l })), (t[0] = l), (t[1] = e)), (f = e));
  } else if (d == null) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { to: O, replace: !0 })), (t[2] = e))
      : (e = t[2]),
      (f = e));
  } else if (r(d)) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = n), (t[3] = n), (t[4] = e)), (f = e));
  } else {
    let e;
    (t[5] !== i || t[6] !== d
      ? ((e = (0, Q.jsx)(ae, { id: d, fallback: i })), (t[5] = i), (t[6] = d), (t[7] = e))
      : (e = t[7]),
      (f = e));
  }
  return f;
}
function ae(e) {
  let r = (0, Z.c)(32),
    { id: i, fallback: a } = e,
    o = t(A),
    { data: s, isPending: l, isFetching: u, error: d } = p(h, i),
    f;
  r[0] === s
    ? (f = r[1])
    : ((f = s?.active_root_thread_id == null ? null : n(s.active_root_thread_id)), (r[0] = s), (r[1] = f));
  let m;
  r[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { enabled: !1 }), (r[2] = m)) : (m = r[2]);
  let { error: g } = p(I, f, m),
    _ = p(te, w),
    v;
  r[3] !== d || r[4] !== g ? ((v = D(g) ? g : d), (r[3] = d), (r[4] = g), (r[5] = v)) : (v = r[5]);
  let y = v;
  if (y != null && (s == null || D(y))) {
    let e;
    r[6] !== i || r[7] !== o ? ((e = () => void X(o, i)), (r[6] = i), (r[7] = o), (r[8] = e)) : (e = r[8]);
    let t;
    return (
      r[9] !== y || r[10] !== e
        ? ((t = (0, Q.jsx)(b, { stayOnPage: !0, error: y, resetError: e })),
          (r[9] = y),
          (r[10] = e),
          (r[11] = t))
        : (t = r[11]),
      t
    );
  }
  if (l || (s == null && u)) {
    let e;
    return (
      r[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(T, { delay: !1, debugName: `OrbitPageRoute.profile` })), (r[12] = e))
        : (e = r[12]),
      e
    );
  }
  if (!ee(s, _) || s?.status === `deleting`) {
    let e;
    return (
      r[13] === a
        ? (e = r[14])
        : ((e = a ?? (0, Q.jsx)(c, { to: O, replace: !0 })), (r[13] = a), (r[14] = e)),
      e
    );
  }
  let x;
  r[15] === o.value ? (x = r[16]) : ((x = ne(o.value)), (r[15] = o.value), (r[16] = x));
  let S = x,
    E = s?.display_name,
    k;
  r[17] === E ? (k = r[18]) : ((k = (0, Q.jsx)(z, { title: E })), (r[17] = E), (r[18] = k));
  let j = s?.display_name ?? null,
    M;
  r[19] === j ? (M = r[20]) : ((M = (0, Q.jsx)(q, { title: j })), (r[19] = j), (r[20] = M));
  let N, P;
  r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(C.MainContentLayout, { layout: `full-bleed` })),
      (N = (0, Q.jsx)(U, {})),
      (r[21] = N),
      (r[22] = P))
    : ((N = r[21]), (P = r[22]));
  let F;
  r[23] === S
    ? (F = r[24])
    : ((F =
        S == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(H, { conversationId: S }),
                (0, Q.jsx)(G, { threadType: `local`, conversationId: S }),
              ],
            })),
      (r[23] = S),
      (r[24] = F));
  let L;
  r[25] === S
    ? (L = r[26])
    : ((L = (0, Q.jsx)(Y, { isOrbit: !0, conversationId: S, children: null })), (r[25] = S), (r[26] = L));
  let R;
  return (
    r[27] !== F || r[28] !== L || r[29] !== k || r[30] !== M
      ? ((R = (0, Q.jsxs)(`div`, { className: `relative h-full min-h-0`, children: [k, M, P, N, F, L] })),
        (r[27] = F),
        (r[28] = L),
        (r[29] = k),
        (r[30] = M),
        (r[31] = R))
      : (R = r[31]),
    R
  );
}
function oe(e) {
  let t = (0, Z.c)(16),
    { threadId: r } = e,
    i = d(),
    a;
  t[0] === r ? (a = t[1]) : ((a = n(r)), (t[0] = r), (t[1] = a));
  let { data: o, error: s, isPending: l, isFetching: u, refetch: f } = p(I, a);
  if (s != null && (o == null || D(s))) {
    let e;
    t[2] === f ? (e = t[3]) : ((e = () => void f()), (t[2] = f), (t[3] = e));
    let n;
    return (
      t[4] !== s || t[5] !== e
        ? ((n = (0, Q.jsx)(b, { stayOnPage: !0, error: s, resetError: e })),
          (t[4] = s),
          (t[5] = e),
          (t[6] = n))
        : (n = t[6]),
      n
    );
  }
  if (l || (o == null && u)) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(T, { delay: !1, debugName: `OrbitThreadRedirect.profile` })), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let m;
  t[8] === o ? (m = t[9]) : ((m = o == null ? O : M(o.id)), (t[8] = o), (t[9] = m));
  let h;
  t[10] !== i.search || t[11] !== m
    ? ((h = { pathname: m, search: i.search }), (t[10] = i.search), (t[11] = m), (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== i.state || t[14] !== h
      ? ((g = (0, Q.jsx)(c, { to: h, state: i.state, replace: !0 })),
        (t[13] = i.state),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = u()),
      i(),
      l(),
      o(),
      S(),
      P(),
      L(),
      x(),
      R(),
      F(),
      B(),
      g(),
      re(),
      _(),
      W(),
      K(),
      k(),
      v(),
      J(),
      N(),
      E(),
      y(),
      m(),
      V(),
      (Q = f()));
  }))();
}
$();
export { ie as OrbitConversationRoute };
//# sourceMappingURL=orbit-conversation-route-74c40d76c7ff.js.map
