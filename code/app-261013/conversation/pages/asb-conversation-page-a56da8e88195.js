import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Myt as n,
  Pxt as r,
  Vxt as i,
  rst as a,
  vzt as o,
  xMt as s,
  zxt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as l,
  H1 as u,
  Iwr as d,
  V1 as f,
  Zwr as p,
  bX as m,
  fMr as h,
  gCt as g,
  pCt as _,
  qwr as v,
  rTr as y,
  tDn as b,
  uDn as x,
  wwr as S,
  xMr as C,
  xX as w,
} from "./app-initial-5851df3f6cb1.js";
import { mu as T, pu as E } from "./app-primary-fe8a450b3b04.js";
import { i as D, r as O } from "./site-preview-bridge-406791c1b5de.js";
import { r as k, t as A } from "./local-conversation-page-4298f8ec98fa.js";
import { l as j, u as M } from "./unavailable-local-conversation-page-d4a23c309685.js";
import { n as N, t as P } from "./thread-emoji-e2a0a4c63c7d.js";
import { i as F, s as I } from "./local-conversation-thread-6999d2419a30.js";
import { n as L, t as R } from "./thread-overflow-menu-87dc19d9cdf5.js";
import { m as z, n as B, p as V, r as H, s as U } from "./chatgpt-conversation-page-f7a3d5e5d239.js";
function W() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(A, { children: (0, q.jsx)(G, {}) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function G() {
  let e = (0, K.c)(47),
    { clientThreadId: r } = t(d).value,
    a = i(y),
    o = i(x),
    s = i(S),
    l = i(C),
    f = l.status === `denied` && l.reason === `go-plan`,
    h;
  e[0] === r ? (h = e[1]) : ((h = n(r) ? r : null), (e[0] = r), (e[1] = h));
  let _ = c(p, h),
    v = c(u, a == null ? null : { hostId: o, threadId: a }) ?? _?.title ?? null,
    { renameThread: b } = g(),
    w;
  e[2] !== o || e[3] !== s
    ? ((w = s ? null : (0, q.jsx)(O, { hostId: o })), (e[2] = o), (e[3] = s), (e[4] = w))
    : (w = e[4]);
  let T = w,
    D = !s,
    k;
  e[5] === a ? (k = e[6]) : ((k = (0, q.jsx)(P, { threadId: a })), (e[5] = a), (e[6] = k));
  let A;
  e[7] !== a || e[8] !== o || e[9] !== s || e[10] !== b || e[11] !== v
    ? ((A =
        a == null || s
          ? void 0
          : (e) => {
              b({ conversationId: a, hostId: o, previousTitle: v ?? void 0, title: e });
            }),
      (e[7] = a),
      (e[8] = o),
      (e[9] = s),
      (e[10] = b),
      (e[11] = v),
      (e[12] = A))
    : (A = e[12]);
  let M;
  e[13] !== A || e[14] !== v
    ? ((M = (0, q.jsx)(m, {
        className: `max-w-[320px]`,
        variant: void 0,
        title: v,
        titleValue: v,
        onRename: A,
      })),
      (e[13] = A),
      (e[14] = v),
      (e[15] = M))
    : (M = e[15]);
  let N;
  e[16] !== k || e[17] !== M
    ? ((N = (0, q.jsxs)(`span`, { className: `flex min-w-0 items-center gap-1`, children: [k, M] })),
      (e[16] = k),
      (e[17] = M),
      (e[18] = N))
    : (N = e[18]);
  let I;
  e[19] !== T || e[20] !== D || e[21] !== N
    ? ((I = (0, q.jsx)(B, { isCloudTask: D, breadcrumbHeader: null, start: N, startActions: T })),
      (e[19] = T),
      (e[20] = D),
      (e[21] = N),
      (e[22] = I))
    : (I = e[22]);
  let L;
  e[23] !== a || e[24] !== o || e[25] !== s || e[26] !== v
    ? ((L = s
        ? null
        : (0, q.jsx)(H, {
            menu: (0, q.jsx)(R, { includePlugins: !0, conversationId: a, hostId: o, cwd: null, title: v }),
            children: a == null ? null : (0, q.jsx)(E, { conversationId: a, hostId: o }),
          })),
      (e[23] = a),
      (e[24] = o),
      (e[25] = s),
      (e[26] = v),
      (e[27] = L))
    : (L = e[27]);
  let z;
  e[28] !== s || e[29] !== I || e[30] !== L || e[31] !== v
    ? ((z = (0, q.jsx)(V, { conversationId: null, title: v, isArchivedPreview: s, header: I, children: L })),
      (e[28] = s),
      (e[29] = I),
      (e[30] = L),
      (e[31] = v),
      (e[32] = z))
    : (z = e[32]);
  let U;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = { hideRunLocationDropdownOverride: !0 }), (e[33] = U))
    : (U = e[33]);
  let W = s || f,
    G = !s && !f,
    J = !s,
    Y = !s,
    X;
  e[34] !== a || e[35] !== o || e[36] !== s
    ? ((X = s && a != null ? (0, q.jsx)(j, { conversationId: a, hostId: o }) : void 0),
      (e[34] = a),
      (e[35] = o),
      (e[36] = s),
      (e[37] = X))
    : (X = e[37]);
  let Z;
  e[38] !== W || e[39] !== G || e[40] !== J || e[41] !== Y || e[42] !== X
    ? ((Z = (0, q.jsx)(F, {
        showUtilityBar: !1,
        composerPresentation: U,
        isReadOnly: W,
        showComposer: G,
        showSummaryPanel: J,
        shouldResume: Y,
        footerContent: X,
      })),
      (e[38] = W),
      (e[39] = G),
      (e[40] = J),
      (e[41] = Y),
      (e[42] = X),
      (e[43] = Z))
    : (Z = e[43]);
  let Q;
  return (
    e[44] !== Z || e[45] !== z
      ? ((Q = (0, q.jsxs)(q.Fragment, { children: [z, Z] })), (e[44] = Z), (e[45] = z), (e[46] = Q))
      : (Q = e[46]),
    Q
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = o()),
      r(),
      a(),
      h(),
      D(),
      k(),
      I(),
      _(),
      L(),
      l(),
      b(),
      v(),
      T(),
      M(),
      f(),
      N(),
      w(),
      U(),
      z(),
      (q = s()));
  }))();
}
J();
export { W as AsbConversationPage };
//# sourceMappingURL=asb-conversation-page-a56da8e88195.js.map
