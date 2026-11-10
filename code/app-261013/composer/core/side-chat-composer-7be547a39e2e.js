import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  GE as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  WE as s,
  jDt as c,
  vzt as l,
  xMt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as f,
  $dn as p,
  Ctt as m,
  D8n as h,
  E8n as g,
  Eqt as _,
  Gwr as v,
  HOt as y,
  Ht as b,
  Jwn as x,
  LOt as S,
  N8n as C,
  Txn as w,
  Ut as T,
  Ywn as E,
  _C as D,
  bqt as O,
  cL as k,
  dL as A,
  fL as j,
  gC as M,
  lL as N,
  m8n as P,
  o8n as F,
  qwr as I,
  sCr as L,
  tfn as R,
  v8n as z,
  vxn as B,
  wtt as V,
  yCr as H,
} from "./app-initial-5851df3f6cb1.js";
import { Af as U, Jc as W, Kc as G, Mf as K, Pm as q } from "./app-primary-fe8a450b3b04.js";
async function J(e, t, n, r) {
  if (!e.get(E) || e.get(O).isCreating) return null;
  let i = { ...e.get(O), isCreating: !0 };
  e.set(O, i);
  try {
    let a = await j(e, k, {
      ...r,
      sourceConversationId: t,
      cwd: e.get(F, t),
      hostId: e.get(f, t),
      collaborationMode: e.get(C, t),
      intl: n,
      revealAndFocus: !1,
    });
    return (
      a != null &&
        e.get(O) === i &&
        (e.set(m, `expanded`), e.set(O, { conversationId: a, isCreating: !1 }), B(v(e, a))),
      a
    );
  } finally {
    e.set(O, { ...e.get(O), isCreating: !1 });
  }
}
function Y() {
  return (Y = e(() => {
    (z(), w(), V(), I(), x(), A(), N(), _());
  }))();
}
function X(e) {
  let t = (0, Z.c)(27),
    { browserConversationId: i, conversationId: c, isThreadHistoryLoading: l, presentation: u } = e,
    p = l !== void 0 && l,
    m = r(L),
    _ = a(),
    v = m.value.routeConversationId,
    x = o(R),
    S = d(f, c),
    w = d(P, c),
    T = d(g, c),
    E = d(h, c) ?? !1,
    D = d(C, c),
    O = d(y, c);
  if (!w || T === !0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(s, {
            content: (0, Q.jsx)(n, {
              id: `floatingComposer.sideChatExpired`,
              defaultMessage: `This side chat has expired. Choose another chat from the chat menu to continue.`,
              description: `Message in the floating composer when a temporary side chat is no longer available`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let k;
  t[1] !== c || t[2] !== S
    ? ((k = (0, Q.jsx)(M, { conversationId: c, hostId: S })), (t[1] = c), (t[2] = S), (t[3] = k))
    : (k = t[3]);
  let A;
  t[4] === u ? (A = t[5]) : ((A = q(u)), (t[4] = u), (t[5] = A));
  let j;
  t[6] !== i || t[7] !== m
    ? ((j =
        i == null ? void 0 : (e) => ({ ...e, inAppBrowserContext: b(m, null, i) ?? e.inAppBrowserContext })),
      (t[6] = i),
      (t[7] = m),
      (t[8] = j))
    : (j = t[8]);
  let N = u?.onSubmitStart,
    F;
  t[9] !== _ || t[10] !== v || t[11] !== m
    ? ((F = v == null ? void 0 : (e) => J(m, v, _, e)), (t[9] = _), (t[10] = v), (t[11] = m), (t[12] = F))
    : (F = t[12]);
  let I;
  t[13] !== i ||
  t[14] !== D ||
  t[15] !== E ||
  t[16] !== p ||
  t[17] !== O ||
  t[18] !== x ||
  t[19] !== A ||
  t[20] !== j ||
  t[21] !== N ||
  t[22] !== F
    ? ((I = (0, Q.jsx)(U, {
        children: (0, Q.jsx)(G, {
          ...A,
          browserConversationId: i,
          prepareLocalSubmit: j,
          selectedProject: x,
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
      (t[13] = i),
      (t[14] = D),
      (t[15] = E),
      (t[16] = p),
      (t[17] = O),
      (t[18] = x),
      (t[19] = A),
      (t[20] = j),
      (t[21] = N),
      (t[22] = F),
      (t[23] = I))
    : (I = t[23]);
  let z;
  return (
    t[24] !== k || t[25] !== I
      ? ((z = (0, Q.jsxs)(Q.Fragment, { children: [k, I] })), (t[24] = k), (t[25] = I), (t[26] = z))
      : (z = t[26]),
    z
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = l()), i(), c(), D(), z(), W(), K(), T(), t(), H(), p(), S(), Y(), (Q = u()));
  }))();
}
export { J as i, $ as n, Y as r, X as t };
//# sourceMappingURL=side-chat-composer-7be547a39e2e.js.map
