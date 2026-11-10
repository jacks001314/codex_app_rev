import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AUn as t,
  CUn as n,
  Fur as r,
  GMr as i,
  Jyr as a,
  NQn as o,
  Nur as s,
  PQn as c,
  QDr as l,
  SUn as u,
  SZn as d,
  Uyr as f,
  XDr as p,
  XMr as m,
  Ymr as h,
  ehr as g,
  fJt as _,
  hJt as v,
  jjn as y,
  kZn as b,
  lzn as x,
  pZn as S,
  r3t as C,
  tNr as w,
  wUn as T,
  yVn as E,
  yjn as D,
} from "./app-initial-5851df3f6cb1.js";
function O(e, { connectorId: t, conversationId: n, includeConnectorSystemHint: r, triggerTurnAfterLink: i }) {
  let a = e.get(S, n),
    o = e.get(d, n),
    s = e.get(b, n);
  if (a == null || o == null || s == null || t.trim().length === 0) return null;
  let c = s[o]?.message?.metadata?.model_slug,
    l = M(s, o);
  return typeof l?.id != `string` || l.id.length === 0
    ? null
    : {
        kind: `chatgpt-pca-beacon`,
        serverConversationId: a,
        capturedLeafId: o,
        capturedPromptId: l.id,
        capturedModel: typeof c == `string` && c.trim().length > 0 ? c : void 0,
        connectorId: t,
        includeConnectorSystemHintAfterLink: r,
        triggerTurnAfterLink: i,
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
  let i = M(r.mapping, t.capturedLeafId);
  if (i?.id !== t.capturedPromptId)
    return (I(e, { connectorId: t.connectorId, outcome: `leaf_changed_other` }), !1);
  let a = { ...i.metadata };
  (delete a.system_hint_suggestions, delete a.system_hints);
  let o = t.includeConnectorSystemHintAfterLink ? [`connector:${t.connectorId}`] : [],
    s = f(i),
    c = C({ messageMetadata: { ...a, is_visually_hidden_from_conversation: !0 }, prompt: s, systemHints: o });
  c.message.content = i.content;
  try {
    let n = v(e, {
      conversationId: t.serverConversationId,
      model: t.capturedModel,
      parentMessageId: t.capturedPromptId,
      prompt: s,
      systemHints: o,
      userCompletionMessages: c,
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
  let n = s({ accountId: e.get(i), userId: e.get(m) }),
    r = !1,
    a = !1;
  for (let i of z) {
    i > 0 && (await L(i));
    try {
      let r = await e.queryClient.fetchQuery({ ...n, staleTime: 0 });
      if (((a = !0), r.some((e) => e.connector_id === t && e.auth_status === `ACTIVE`))) return `active`;
    } catch {
      r = !0;
    }
  }
  return r && !a ? `lookup_failed` : `not_active`;
}
async function j(e, t) {
  let n = e.get(d, t),
    r = e.get(b, t);
  if (n == null || r == null) {
    try {
      let n = await h.safeGet(`/conversation/{conversation_id}`, {
        parameters: { path: { conversation_id: t } },
        signal: void 0,
      });
      y(e, n);
    } catch {
      return null;
    }
    ((n = e.get(d, t)), (r = e.get(b, t)));
  }
  return n == null || r == null ? null : { currentLeafId: n, mapping: r };
}
function M(e, t) {
  let n = new Set(),
    r = t;
  for (; r != null && !n.has(r);) {
    n.add(r);
    let t = e[r];
    if (t?.message != null && c(t.message)) return t.message;
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
  l(e, n, { connectorId: t });
}
function F(e, { connectorId: t, conversationId: n, messageId: r }) {
  l(e, x, { connectorId: t, conversationId: n, messageId: r });
}
function I(e, { connectorId: t, outcome: n }) {
  l(e, u, { connectorId: t, outcome: R[n] });
}
function L(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
var R, z;
function B() {
  return (B = e(() => {
    (E(),
      t(),
      a(),
      r(),
      w(),
      g(),
      p(),
      D(),
      o(),
      _(),
      (R = {
        followup_request_completed: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_FOLLOWUP_REQUEST_COMPLETED,
        followup_request_failed: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_FOLLOWUP_REQUEST_FAILED,
        leaf_changed_manual_regen: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_MANUAL_REGEN,
        leaf_changed_new_user_message:
          T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_NEW_USER_MESSAGE,
        leaf_changed_other: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LEAF_CHANGED_OTHER,
        link_lookup_failed: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_LINK_LOOKUP_FAILED,
        no_active_link_after_poll: T.CODEX_CHATGPT_INTERACTION_CONNECTOR_OUTCOME_NO_ACTIVE_LINK_AFTER_POLL,
      }),
      (z = [0, 500, 1e3, 2e3]));
  }))();
}
export { B as n, k as r, O as t };
//# sourceMappingURL=pca-connector-action-9318b684dcd3.js.map
