import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  Cot as n,
  Ext as r,
  Hxt as i,
  IDt as a,
  Pxt as o,
  Vxt as s,
  Zxt as c,
  _xt as l,
  jDt as u,
  kxt as d,
  oxt as f,
  vzt as p,
  wot as m,
  wxt as h,
  xMt as g,
  xat as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cjn as y,
  GMr as b,
  HTr as x,
  KMr as S,
  OHn as C,
  QQn as w,
  Ymr as T,
  ZQn as E,
  bTn as D,
  e$n as O,
  ehr as k,
  kHn as A,
  qMr as j,
  sCr as M,
  tNr as N,
  yCr as P,
  yTn as F,
  yjn as I,
} from "./app-initial-5851df3f6cb1.js";
import { nn as L, rn as R } from "./app-primary-fe8a450b3b04.js";
import { g as z, h as B, s as V, t as H } from "./chatgpt-conversation-page-f7a3d5e5d239.js";
import { n as U, t as W } from "./conversation-load-error-cad8d3268901.js";
function G() {
  let e = (0, q.c)(21),
    { projectId: t, conversationId: n } = d(),
    r = h(),
    i = s(b),
    a = s(j),
    o = s(S),
    c;
  e[0] === r.search
    ? (c = e[1])
    : ((c = new URLSearchParams(r.search).get(`owner_user_id`) || void 0), (e[0] = r.search), (e[1] = c));
  let l = c;
  if (t == null || n == null) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, J.jsx)(f, { to: `/`, replace: !0 })), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  if (i == null || a == null) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, J.jsx)(F, { fillParent: !0, debugName: `SharedProjectConversation` })), (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  if (l === (o ? a.split(`__`)[0] : a)) {
    let r;
    e[4] !== n || e[5] !== t ? ((r = _(n, { gizmoId: t })), (e[4] = n), (e[5] = t), (e[6] = r)) : (r = e[6]);
    let i;
    return (
      e[7] === r ? (i = e[8]) : ((i = (0, J.jsx)(f, { to: r, replace: !0 })), (e[7] = r), (e[8] = i)),
      i
    );
  }
  let u = `${i}:${a}:${r.key}`,
    p;
  e[9] === t ? (p = e[10]) : ((p = x(t)), (e[9] = t), (e[10] = p));
  let m;
  e[11] !== i || e[12] !== a || e[13] !== n || e[14] !== r.key || e[15] !== l || e[16] !== p
    ? ((m = {
        accountId: i,
        accountUserId: a,
        conversationId: n,
        ownerUserId: l,
        projectId: p,
        visitKey: r.key,
      }),
      (e[11] = i),
      (e[12] = a),
      (e[13] = n),
      (e[14] = r.key),
      (e[15] = l),
      (e[16] = p),
      (e[17] = m))
    : (m = e[17]);
  let g;
  return (
    e[18] !== u || e[19] !== m
      ? ((g = (0, J.jsx)(K, { visit: m }, u)), (e[18] = u), (e[19] = m), (e[20] = g))
      : (g = e[20]),
    g
  );
}
function K(e) {
  let t = (0, q.c)(27),
    { visit: n } = e,
    o = r(),
    { data: s, error: c, isError: l, refetch: u } = v(Y, n);
  if (s?.kind === `owned`) {
    let e;
    t[0] !== n.conversationId || t[1] !== n.projectId
      ? ((e = _(n.conversationId, { gizmoId: n.projectId })),
        (t[0] = n.conversationId),
        (t[1] = n.projectId),
        (t[2] = e))
      : (e = t[2]);
    let r;
    return (
      t[3] === e ? (r = t[4]) : ((r = (0, J.jsx)(f, { to: e, replace: !0 })), (t[3] = e), (t[4] = r)),
      r
    );
  }
  let d;
  if (l) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(a, {
          id: `chatgptConversations.loadError`,
          defaultMessage: `Could not load this ChatGPT conversation`,
          description: `Error state when a ChatGPT conversation fetch fails`,
        })),
        (t[5] = e))
      : (e = t[5]);
    let n;
    (t[6] === u
      ? (n = t[7])
      : ((n = (0, J.jsx)(W, { title: e, onRetry: () => void u({ cancelRefetch: !1 }) })),
        (t[6] = u),
        (t[7] = n)),
      (d = n));
  } else if (s == null) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(F, { fillParent: !0, debugName: `SharedProjectConversation` })), (t[8] = e))
      : (e = t[8]),
      (d = e));
  } else {
    let e;
    t[9] === s.conversationId
      ? (e = t[10])
      : ((e = {
          kind: `chatgpt`,
          conversationId: s.conversationId,
          browserTabMentionConversationId: null,
          routeConversationId: null,
        }),
        (t[9] = s.conversationId),
        (t[10] = e));
    let r;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsx)(L.Surface, {})), (t[11] = r))
      : (r = t[11]);
    let a;
    t[12] !== o || t[13] !== n.projectId
      ? ((a = (e) => {
          o(_(e, { gizmoId: n.projectId }));
        }),
        (t[12] = o),
        (t[13] = n.projectId),
        (t[14] = a))
      : (a = t[14]);
    let c;
    t[15] !== s.conversation || t[16] !== s.conversationId || t[17] !== a
      ? ((c = (0, J.jsx)(H, {
          conversationId: s.conversationId,
          isTemporaryChat: !1,
          sharedConversationId: null,
          sharedProjectConversation: s.conversation,
          onSubmitAccepted: a,
        })),
        (t[15] = s.conversation),
        (t[16] = s.conversationId),
        (t[17] = a),
        (t[18] = c))
      : (c = t[18]);
    let l;
    (t[19] !== e || t[20] !== c
      ? ((l = (0, J.jsxs)(i, { scope: M, value: e, children: [r, c] })),
        (t[19] = e),
        (t[20] = c),
        (t[21] = l))
      : (l = t[21]),
      (d = l));
  }
  let p = l ? c : null,
    m;
  return (
    t[22] !== d || t[23] !== c || t[24] !== p || t[25] !== n.conversationId
      ? ((m = (0, J.jsx)(B, {
          conversationId: n.conversationId,
          error: c,
          loadError: p,
          canRetry: !0,
          isWorkConversation: null,
          children: d,
        })),
        (t[22] = d),
        (t[23] = c),
        (t[24] = p),
        (t[25] = n.conversationId),
        (t[26] = m))
      : (m = t[26]),
    m
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = p()),
      o(),
      u(),
      l(),
      N(),
      R(),
      U(),
      D(),
      m(),
      P(),
      z(),
      V(),
      k(),
      O(),
      I(),
      A(),
      t(),
      (J = g()),
      (Y = c(n, (e, { scope: t }) => ({
        queryKey: [`chatgpt-shared-project-conversation`, e],
        queryFn: async ({ signal: n }) => {
          let r = await T.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: e.conversationId } },
            additionalHeaders: {
              "chatgpt-project-id": e.projectId,
              ...(e.ownerUserId == null ? {} : { "chatgpt-conv-owner-id": e.ownerUserId }),
            },
            signal: n,
          });
          if ((n.throwIfAborted(), t.get(b) !== e.accountId || t.get(j) !== e.accountUserId)) return null;
          let i = e.ownerUserId ?? r.owner?.user_id;
          if (i == null) throw Error(`Shared project conversation owner is unavailable`);
          if (i === (t.get(S) ? e.accountUserId.split(`__`)[0] : e.accountUserId)) return { kind: `owned` };
          let a = E();
          return (
            y(t, {
              conversation: { ...r, gizmo_id: e.projectId },
              conversationId: a,
              source: { kind: `project`, id: w(r.conversation_id), ownerUserId: i },
            }),
            C(t, a, `history`)(r.default_model_slug),
            { kind: `shared`, conversationId: a, conversation: { ...r, owner: { ...r.owner, user_id: i } } }
          );
        },
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnReconnect: !1,
      }))));
  }))();
}
X();
export { G as SharedProjectConversationPage };
//# sourceMappingURL=shared-conversation-page-ddd7a1fc74ab.js.map
