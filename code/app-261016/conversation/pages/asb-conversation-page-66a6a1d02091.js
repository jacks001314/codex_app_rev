import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  Jbt as n,
  LNt as r,
  PBt as i,
  ZSt as a,
  iCt as o,
  nCt as s,
  sct as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Z as l,
  BOr as u,
  KIr as d,
  LIr as f,
  NAn as p,
  QOr as m,
  aGt as h,
  eQ as g,
  lkr as _,
  nGt as v,
  o2 as y,
  pkr as b,
  s2 as x,
  wAn as S,
  ykr as C,
  zOr as w,
} from "./app-initial-ad16eaadf81f.js";
import { Tu as T, wu as E } from "./app-primary-3e00728c2a4c.js";
import { n as D, t as O } from "./header-button-67ea2ced1c82.js";
import { r as k, t as A } from "./local-conversation-page-bef2c270918b.js";
import { c as j, s as M } from "./unavailable-local-conversation-page-9a9c313fc114.js";
import { n as N, t as P } from "./thread-emoji-a1443c735c6b.js";
import { i as F, s as I } from "./local-conversation-thread-632d930bbfe2.js";
import { n as L, t as R } from "./thread-overflow-menu-614d6a35ed69.js";
import { a as z, i as B, n as V, r as H, t as U } from "./header-b144159eba4a.js";
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
    { clientThreadId: r } = t(m).value,
    i = o(C),
    a = o(p),
    c = o(u),
    f = o(d),
    g = f.status === `denied` && f.reason === `go-plan`,
    _;
  e[0] === r ? (_ = e[1]) : ((_ = n(r) ? r : null), (e[0] = r), (e[1] = _));
  let v = s(b, _),
    y = s(x, i == null ? null : { hostId: a, threadId: i }) ?? v?.title ?? null,
    { renameThread: S } = h(),
    w;
  e[2] !== a || e[3] !== c
    ? ((w = c ? null : (0, q.jsx)(O, { hostId: a })), (e[2] = a), (e[3] = c), (e[4] = w))
    : (w = e[4]);
  let T = w,
    D = !c,
    k;
  e[5] === i ? (k = e[6]) : ((k = (0, q.jsx)(P, { threadId: i })), (e[5] = i), (e[6] = k));
  let A;
  e[7] !== i || e[8] !== a || e[9] !== c || e[10] !== S || e[11] !== y
    ? ((A =
        i == null || c
          ? void 0
          : (e) => {
              S({ conversationId: i, hostId: a, previousTitle: y ?? void 0, title: e });
            }),
      (e[7] = i),
      (e[8] = a),
      (e[9] = c),
      (e[10] = S),
      (e[11] = y),
      (e[12] = A))
    : (A = e[12]);
  let j;
  e[13] !== A || e[14] !== y
    ? ((j = (0, q.jsx)(l, {
        className: `max-w-[320px]`,
        variant: void 0,
        title: y,
        titleValue: y,
        onRename: A,
      })),
      (e[13] = A),
      (e[14] = y),
      (e[15] = j))
    : (j = e[15]);
  let N;
  e[16] !== k || e[17] !== j
    ? ((N = (0, q.jsxs)(`span`, { className: `flex min-w-0 items-center gap-1`, children: [k, j] })),
      (e[16] = k),
      (e[17] = j),
      (e[18] = N))
    : (N = e[18]);
  let I;
  e[19] !== T || e[20] !== D || e[21] !== N
    ? ((I = (0, q.jsx)(U, { isCloudTask: D, breadcrumbHeader: null, start: N, startActions: T })),
      (e[19] = T),
      (e[20] = D),
      (e[21] = N),
      (e[22] = I))
    : (I = e[22]);
  let L;
  e[23] !== i || e[24] !== a || e[25] !== c || e[26] !== y
    ? ((L = c
        ? null
        : (0, q.jsx)(V, {
            menu: (0, q.jsx)(R, {
              includePlugins: !0,
              triggerButtonSize: `toolbar`,
              conversationId: i,
              hostId: a,
              cwd: null,
              title: y,
            }),
            children: i == null ? null : (0, q.jsx)(E, { conversationId: i, hostId: a }),
          })),
      (e[23] = i),
      (e[24] = a),
      (e[25] = c),
      (e[26] = y),
      (e[27] = L))
    : (L = e[27]);
  let z;
  e[28] !== c || e[29] !== I || e[30] !== L || e[31] !== y
    ? ((z = (0, q.jsx)(B, { conversationId: null, title: y, isArchivedPreview: c, header: I, children: L })),
      (e[28] = c),
      (e[29] = I),
      (e[30] = L),
      (e[31] = y),
      (e[32] = z))
    : (z = e[32]);
  let H;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = { hideRunLocationDropdownOverride: !0 }), (e[33] = H))
    : (H = e[33]);
  let W = c || g,
    G = !c && !g,
    J = !c,
    Y = !c,
    X;
  e[34] !== i || e[35] !== a || e[36] !== c
    ? ((X = c && i != null ? (0, q.jsx)(M, { conversationId: i, hostId: a }) : void 0),
      (e[34] = i),
      (e[35] = a),
      (e[36] = c),
      (e[37] = X))
    : (X = e[37]);
  let Z;
  e[38] !== W || e[39] !== G || e[40] !== J || e[41] !== Y || e[42] !== X
    ? ((Z = (0, q.jsx)(F, {
        showUtilityBar: !1,
        composerPresentation: H,
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
    ((K = i()),
      a(),
      c(),
      f(),
      D(),
      k(),
      I(),
      v(),
      L(),
      w(),
      S(),
      _(),
      T(),
      j(),
      y(),
      N(),
      g(),
      z(),
      H(),
      (q = r()));
  }))();
}
J();
export { W as AsbConversationPage };
//# sourceMappingURL=asb-conversation-page-66a6a1d02091.js.map
