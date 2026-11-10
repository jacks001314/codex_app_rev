import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  LNt as n,
  PBt as r,
  XOt as i,
  ZSt as a,
  iCt as o,
  nCt as s,
  okt as c,
  tkt as l,
  vD as u,
  yD as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as f,
  CHt as p,
  FDr as m,
  Fer as h,
  GC as g,
  GL as _,
  H9n as v,
  Iwn as y,
  JL as b,
  Jt as x,
  KC as S,
  KL as C,
  TTt as w,
  X9n as T,
  Xnt as E,
  YL as D,
  Ynt as O,
  Ysn as k,
  Yt as A,
  Zsn as j,
  _Ht as M,
  bTt as N,
  cer as P,
  eer as F,
  hOn as I,
  her as L,
  kwn as R,
  ler as z,
  lkr as B,
  mOn as V,
  skr as H,
} from "./app-initial-ad16eaadf81f.js";
import { Uf as U, Vf as W, al as G, rl as K, yh as q } from "./app-primary-3e00728c2a4c.js";
async function J(e, t, n, r) {
  if (!e.get(I) || e.get(M).isCreating) return null;
  let i = { ...e.get(M), isCreating: !0 };
  e.set(M, i);
  try {
    let a = await D(e, _, {
      ...r,
      sourceConversationId: t,
      cwd: e.get(v, t),
      hostId: e.get(h, t),
      collaborationMode: e.get(L, t),
      intl: n,
      revealAndFocus: !1,
    });
    return (
      a != null &&
        e.get(M) === i &&
        (e.set(O, `expanded`), e.set(M, { conversationId: a, isCreating: !1 }), R(H(e, a))),
      a
    );
  } finally {
    e.set(M, { ...e.get(M), isCreating: !1 });
  }
}
function Y() {
  return (Y = e(() => {
    (F(), E(), y(), B(), V(), b(), C(), p());
  }))();
}
function X(e) {
  let n = (0, Z.c)(27),
    { browserConversationId: r, conversationId: i, isThreadHistoryLoading: a, presentation: d } = e,
    p = a !== void 0 && a,
    m = t(f),
    _ = c(),
    v = m.value.routeConversationId,
    y = o(j),
    b = s(h, i),
    S = s(T, i),
    C = s(P, i),
    E = s(z, i) ?? !1,
    D = s(L, i),
    O = s(w, i);
  if (!S || C === !0) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(u, {
            content: (0, Q.jsx)(l, {
              id: `floatingComposer.sideChatExpired`,
              defaultMessage: `This side chat has expired. Choose another chat from the chat menu to continue.`,
              description: `Message in the floating composer when a temporary side chat is no longer available`,
            }),
          })),
          (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  let k;
  n[1] !== i || n[2] !== b
    ? ((k = (0, Q.jsx)(g, { conversationId: i, hostId: b })), (n[1] = i), (n[2] = b), (n[3] = k))
    : (k = n[3]);
  let A;
  n[4] === d ? (A = n[5]) : ((A = q(d)), (n[4] = d), (n[5] = A));
  let M;
  n[6] !== r || n[7] !== m
    ? ((M =
        r == null ? void 0 : (e) => ({ ...e, inAppBrowserContext: x(m, null, r) ?? e.inAppBrowserContext })),
      (n[6] = r),
      (n[7] = m),
      (n[8] = M))
    : (M = n[8]);
  let N = d?.onSubmitStart,
    F;
  n[9] !== _ || n[10] !== v || n[11] !== m
    ? ((F = v == null ? void 0 : (e) => J(m, v, _, e)), (n[9] = _), (n[10] = v), (n[11] = m), (n[12] = F))
    : (F = n[12]);
  let I;
  n[13] !== r ||
  n[14] !== D ||
  n[15] !== E ||
  n[16] !== p ||
  n[17] !== O ||
  n[18] !== y ||
  n[19] !== A ||
  n[20] !== M ||
  n[21] !== N ||
  n[22] !== F
    ? ((I = (0, Q.jsx)(W, {
        children: (0, Q.jsx)(K, {
          ...A,
          browserConversationId: r,
          prepareLocalSubmit: M,
          selectedProject: y,
          isResponseInProgress: E,
          isThreadHistoryLoading: p,
          submitDisabled: p,
          lockedCollaborationMode: D,
          localWorkspaceMaterialization: O,
          composerLayoutMode: `auto-single-line`,
          showUtilityBar: !1,
          onLocalSubmitStart: N,
          onCreateSideConversation: F,
        }),
      })),
      (n[13] = r),
      (n[14] = D),
      (n[15] = E),
      (n[16] = p),
      (n[17] = O),
      (n[18] = y),
      (n[19] = A),
      (n[20] = M),
      (n[21] = N),
      (n[22] = F),
      (n[23] = I))
    : (I = n[23]);
  let R;
  return (
    n[24] !== k || n[25] !== I
      ? ((R = (0, Q.jsxs)(Q.Fragment, { children: [k, I] })), (n[24] = k), (n[25] = I), (n[26] = R))
      : (R = n[26]),
    R
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = r()), a(), i(), S(), F(), G(), U(), A(), d(), m(), k(), N(), Y(), (Q = n()));
  }))();
}
export { J as i, $ as n, Y as r, X as t };
//# sourceMappingURL=side-chat-composer-4eb5d93ed4a2.js.map
