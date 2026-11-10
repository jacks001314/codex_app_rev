import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  KSt as n,
  LNt as r,
  NSt as i,
  PBt as a,
  Qst as o,
  SSt as s,
  USt as c,
  Uot as l,
  VSt as u,
  Vot as d,
  XOt as f,
  ZSt as p,
  aCt as m,
  iCt as h,
  mCt as g,
  nCt as _,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as y,
  E2n as b,
  FDr as x,
  GGn as S,
  HOn as C,
  KGn as w,
  KPn as T,
  O2n as E,
  T2n as D,
  UOn as O,
  VPn as k,
  _Lr as A,
  iRr as j,
  oAr as M,
  tyr as N,
  vLr as P,
  wLr as F,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { dn as L, fn as R } from "./app-primary-3e00728c2a4c.js";
import { a as z, d as B, f as V, t as H } from "./chatgpt-conversation-page-ccc364bfc217.js";
import { n as U, t as W } from "./conversation-load-error-84e365dc6012.js";
function G() {
  let e = (0, q.c)(21),
    { projectId: t, conversationId: r } = n(),
    i = u(),
    a = h(I),
    o = h(P),
    c = h(A),
    l;
  e[0] === i.search
    ? (l = e[1])
    : ((l = new URLSearchParams(i.search).get(`owner_user_id`) || void 0), (e[0] = i.search), (e[1] = l));
  let f = l;
  if (t == null || r == null) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, J.jsx)(s, { to: `/`, replace: !0 })), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  if (a == null || o == null) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, J.jsx)(C, { fillParent: !0, debugName: `SharedProjectConversation` })), (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  if (f === (c ? o.split(`__`)[0] : o)) {
    let n;
    e[4] !== r || e[5] !== t ? ((n = d(r, { gizmoId: t })), (e[4] = r), (e[5] = t), (e[6] = n)) : (n = e[6]);
    let i;
    return (
      e[7] === n ? (i = e[8]) : ((i = (0, J.jsx)(s, { to: n, replace: !0 })), (e[7] = n), (e[8] = i)),
      i
    );
  }
  let p = `${a}:${o}:${i.key}`,
    m;
  e[9] === t ? (m = e[10]) : ((m = M(t)), (e[9] = t), (e[10] = m));
  let g;
  e[11] !== a || e[12] !== o || e[13] !== r || e[14] !== i.key || e[15] !== f || e[16] !== m
    ? ((g = {
        accountId: a,
        accountUserId: o,
        conversationId: r,
        ownerUserId: f,
        projectId: m,
        visitKey: i.key,
      }),
      (e[11] = a),
      (e[12] = o),
      (e[13] = r),
      (e[14] = i.key),
      (e[15] = f),
      (e[16] = m),
      (e[17] = g))
    : (g = e[17]);
  let _;
  return (
    e[18] !== p || e[19] !== g
      ? ((_ = (0, J.jsx)(K, { visit: g }, p)), (e[18] = p), (e[19] = g), (e[20] = _))
      : (_ = e[20]),
    _
  );
}
function K(e) {
  let t = (0, q.c)(27),
    { visit: n } = e,
    r = c(),
    { data: i, error: a, isError: o, refetch: l } = _(Y, n);
  if (i?.kind === `owned`) {
    let e;
    t[0] !== n.conversationId || t[1] !== n.projectId
      ? ((e = d(n.conversationId, { gizmoId: n.projectId })),
        (t[0] = n.conversationId),
        (t[1] = n.projectId),
        (t[2] = e))
      : (e = t[2]);
    let r;
    return (
      t[3] === e ? (r = t[4]) : ((r = (0, J.jsx)(s, { to: e, replace: !0 })), (t[3] = e), (t[4] = r)),
      r
    );
  }
  let u;
  if (o) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(v, {
          id: `chatgptConversations.loadError`,
          defaultMessage: `Could not load this ChatGPT conversation`,
          description: `Error state when a ChatGPT conversation fetch fails`,
        })),
        (t[5] = e))
      : (e = t[5]);
    let n;
    (t[6] === l
      ? (n = t[7])
      : ((n = (0, J.jsx)(W, { title: e, onRetry: () => void l({ cancelRefetch: !1 }) })),
        (t[6] = l),
        (t[7] = n)),
      (u = n));
  } else if (i == null) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(C, { fillParent: !0, debugName: `SharedProjectConversation` })), (t[8] = e))
      : (e = t[8]),
      (u = e));
  } else {
    let e;
    t[9] === i.conversationId
      ? (e = t[10])
      : ((e = {
          kind: `chatgpt`,
          conversationId: i.conversationId,
          browserTabMentionConversationId: null,
          routeConversationId: null,
        }),
        (t[9] = i.conversationId),
        (t[10] = e));
    let a;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, J.jsx)(L.Surface, {})), (t[11] = a))
      : (a = t[11]);
    let o;
    t[12] !== r || t[13] !== n.projectId
      ? ((o = (e) => {
          r(d(e, { gizmoId: n.projectId }));
        }),
        (t[12] = r),
        (t[13] = n.projectId),
        (t[14] = o))
      : (o = t[14]);
    let s;
    t[15] !== i.conversation || t[16] !== i.conversationId || t[17] !== o
      ? ((s = (0, J.jsx)(H, {
          conversationId: i.conversationId,
          isTemporaryChat: !1,
          sharedConversationId: null,
          sharedProjectConversation: i.conversation,
          onSubmitAccepted: o,
        })),
        (t[15] = i.conversation),
        (t[16] = i.conversationId),
        (t[17] = o),
        (t[18] = s))
      : (s = t[18]);
    let c;
    (t[19] !== e || t[20] !== s
      ? ((c = (0, J.jsxs)(m, { scope: y, value: e, children: [a, s] })),
        (t[19] = e),
        (t[20] = s),
        (t[21] = c))
      : (c = t[21]),
      (u = c));
  }
  let f = o ? a : null,
    p;
  return (
    t[22] !== u || t[23] !== a || t[24] !== f || t[25] !== n.conversationId
      ? ((p = (0, J.jsx)(B, {
          conversationId: n.conversationId,
          error: a,
          loadError: f,
          canRetry: !0,
          isWorkConversation: null,
          children: u,
        })),
        (t[22] = u),
        (t[23] = a),
        (t[24] = f),
        (t[25] = n.conversationId),
        (t[26] = p))
      : (p = t[26]),
    p
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = a()),
      p(),
      f(),
      i(),
      F(),
      R(),
      U(),
      O(),
      t(),
      x(),
      V(),
      z(),
      N(),
      E(),
      k(),
      w(),
      l(),
      (J = r()),
      (Y = g(o, (e, { scope: t }) => ({
        queryKey: [`chatgpt-shared-project-conversation`, e],
        queryFn: async ({ signal: n }) => {
          let r = await j.safeGet(`/conversation/{conversation_id}`, {
            parameters: { path: { conversation_id: e.conversationId } },
            additionalHeaders: {
              "chatgpt-project-id": e.projectId,
              ...(e.ownerUserId == null ? {} : { "chatgpt-conv-owner-id": e.ownerUserId }),
            },
            signal: n,
          });
          if ((n.throwIfAborted(), t.get(I) !== e.accountId || t.get(P) !== e.accountUserId)) return null;
          let i = e.ownerUserId ?? r.owner?.user_id;
          if (i == null) throw Error(`Shared project conversation owner is unavailable`);
          if (i === (t.get(A) ? e.accountUserId.split(`__`)[0] : e.accountUserId)) return { kind: `owned` };
          let a = D();
          return (
            T(t, {
              conversation: { ...r, gizmo_id: e.projectId },
              conversationId: a,
              source: { kind: `project`, id: b(r.conversation_id), ownerUserId: i },
            }),
            S(t, a, `history`)(r.default_model_slug),
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
//# sourceMappingURL=shared-conversation-page-adbe59d0314e.js.map
