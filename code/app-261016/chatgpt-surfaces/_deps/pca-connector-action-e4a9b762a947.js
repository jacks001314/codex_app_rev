import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B1n as t,
  BKn as n,
  BRr as r,
  BZt as i,
  EHn as a,
  Emr as o,
  IWn as s,
  QCr as c,
  VKn as l,
  VPn as u,
  XGt as d,
  Y1n as f,
  iRr as p,
  n0n as m,
  o2n as h,
  qCr as g,
  qGt as _,
  qKn as v,
  s2n as y,
  tFn as b,
  tyr as x,
  wLr as S,
  wmr as C,
  xMr as w,
  yMr as T,
  zKn as E,
  zRr as D,
} from "./app-initial-ad16eaadf81f.js";
function O(e, { connectorId: n, conversationId: r, includeConnectorSystemHint: i, triggerTurnAfterLink: a }) {
  let o = e.get(t, r),
    s = e.get(f, r),
    c = e.get(m, r);
  if (o == null || s == null || c == null || n.trim().length === 0) return null;
  let l = c[s]?.message?.metadata?.model_slug,
    u = M(c, s);
  return typeof u?.id != `string` || u.id.length === 0
    ? null
    : {
        kind: `chatgpt-pca-beacon`,
        serverConversationId: o,
        capturedLeafId: s,
        capturedPromptId: u.id,
        capturedModel: typeof l == `string` && l.trim().length > 0 ? l : void 0,
        connectorId: n,
        includeConnectorSystemHintAfterLink: i,
        triggerTurnAfterLink: a,
      };
}
async function k(e, t) {
  if (!t.triggerTurnAfterLink) return !1;
  let n = await A(e, t.connectorId);
  if (n !== `active`)
    return (
      I(e, {
        connectorId: t.connectorId,
        outcome: n === `lookup_failed` ? `link_lookup_failed` : `no_active_link_after_poll`,
      }),
      !1
    );
  P(e, t.connectorId);
  let r = await j(e, t.serverConversationId);
  if (r == null) return (I(e, { connectorId: t.connectorId, outcome: `leaf_changed_other` }), !1);
  if (r.currentLeafId !== t.capturedLeafId)
    return (
      I(e, {
        connectorId: t.connectorId,
        outcome: N({ capturedLeafId: t.capturedLeafId, currentLeafId: r.currentLeafId, mapping: r.mapping }),
      }),
      !1
    );
  let a = M(r.mapping, t.capturedLeafId);
  if (a?.id !== t.capturedPromptId)
    return (I(e, { connectorId: t.connectorId, outcome: `leaf_changed_other` }), !1);
  let o = { ...a.metadata };
  (delete o.system_hint_suggestions, delete o.system_hints);
  let s = t.includeConnectorSystemHintAfterLink ? [`connector:${t.connectorId}`] : [],
    c = g(a),
    l = i({ messageMetadata: { ...o, is_visually_hidden_from_conversation: !0 }, prompt: c, systemHints: s });
  l.message.content = a.content;
  try {
    let n = d(e, {
      conversationId: t.serverConversationId,
      model: t.capturedModel,
      parentMessageId: t.capturedPromptId,
      prompt: c,
      systemHints: s,
      userCompletionMessages: l,
    });
    return (
      F(e, {
        connectorId: t.connectorId,
        conversationId: t.serverConversationId,
        messageId: t.capturedPromptId,
      }),
      n
        .then(() => {
          I(e, { connectorId: t.connectorId, outcome: `followup_request_completed` });
        })
        .catch(() => {
          I(e, { connectorId: t.connectorId, outcome: `followup_request_failed` });
        }),
      !0
    );
  } catch {
    return (I(e, { connectorId: t.connectorId, outcome: `followup_request_failed` }), !1);
  }
}
async function A(e, t) {
  let n = C({ accountId: e.get(D), userId: e.get(r) }),
    i = !1,
    a = !1;
  for (let r of z) {
    r > 0 && (await L(r));
    try {
      let r = await e.queryClient.fetchQuery({ ...n, staleTime: 0 });
      if (((a = !0), r.some((e) => e.connector_id === t && e.auth_status === `ACTIVE`))) return `active`;
    } catch {
      i = !0;
    }
  }
  return i && !a ? `lookup_failed` : `not_active`;
}
async function j(e, t) {
  let n = e.get(f, t),
    r = e.get(m, t);
  if (n == null || r == null) {
    try {
      let n = await p.safeGet(`/conversation/{conversation_id}`, {
        parameters: { path: { conversation_id: t } },
        signal: void 0,
      });
      b(e, n);
    } catch {
      return null;
    }
    ((n = e.get(f, t)), (r = e.get(m, t)));
  }
  return n == null || r == null ? null : { currentLeafId: n, mapping: r };
}
function M(e, t) {
  let n = new Set(),
    r = t;
  for (; r != null && !n.has(r);) {
    n.add(r);
    let t = e[r];
    if (t?.message != null && y(t.message)) return t.message;
    r = t?.parent ?? null;
  }
  return null;
}
function N({ capturedLeafId: e, currentLeafId: t, mapping: n }) {
  if (n[t] == null || n[e] == null) return `leaf_changed_other`;
  let r = new Set(),
    i = !1,
    a = t;
  for (; a != null && !r.has(a);) {
    if (a === e) return i ? `leaf_changed_new_user_message` : `leaf_changed_other`;
    r.add(a);
    let t = n[a];
    (t?.message?.author.role === `user` && (i = !0), (a = t?.parent ?? null));
  }
  let o = M(n, e),
    s = M(n, t);
  return o != null && s?.id === o.id ? `leaf_changed_manual_regen` : `leaf_changed_other`;
}
function P(e, t) {
  w(e, n, { connectorId: t });
}
function F(e, { connectorId: t, conversationId: n, messageId: r }) {
  w(e, a, { connectorId: t, conversationId: n, messageId: r });
}
function I(e, { connectorId: t, outcome: n }) {
  w(e, E, { connectorId: t, outcome: R[n] });
}
function L(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
var R, z;
function B() {
  return (B = e(() => {
    (s(),
      v(),
      c(),
      o(),
      S(),
      x(),
      T(),
      u(),
      h(),
      _(),
      (R = {
        followup_request_completed: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_FOLLOWUP_REQUEST_COMPLETED,
        followup_request_failed: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_FOLLOWUP_REQUEST_FAILED,
        leaf_changed_manual_regen: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_MANUAL_REGEN,
        leaf_changed_new_user_message:
          l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_NEW_USER_MESSAGE,
        leaf_changed_other: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_OTHER,
        link_lookup_failed: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LINK_LOOKUP_FAILED,
        no_active_link_after_poll: l.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_NO_ACTIVE_LINK_AFTER_POLL,
      }),
      (z = [0, 500, 1e3, 2e3]));
  }))();
}
export { B as n, k as r, O as t };
//# sourceMappingURL=pca-connector-action-e4a9b762a947.js.map
