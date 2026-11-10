import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BOt as t,
  CMt as n,
  Gft as r,
  LOt as i,
  Mdt as a,
  O5t as o,
  Pdt as s,
  X5t as c,
  cMt as l,
  dJt as u,
  e7t as d,
  ept as f,
  fJt as p,
  i7t as m,
  sMt as h,
  vMt as g,
  xMt as _,
  yMt as v,
} from "./app-shared-7552fc8d5d82.js";
import {
  AEn as y,
  Ljt as b,
  MEn as x,
  Mbn as S,
  OOn as C,
  Wjt as w,
  jEn as T,
} from "./app-initial-3916b423772b.js";
import { n as E, t as D } from "./holdout-43e8700f62a9.js";
function O(e) {
  return e.type === `single_advertiser_ad_unit`
    ? e.ad_cards?.length && !e.ad_cards.every((e) => e.format === `image_card_v1`)
      ? e.ad_cards
      : e.carousel_cards
    : e.ads.map((e) => e.ad_card ?? e.carousel_card);
}
function k(e, t, n) {
  let r = O(e),
    i = r.indexOf(t);
  if (i >= 0) return i;
  if (r[n]?.ad_data_token === t.ad_data_token) return n;
  let a = (e) => e === t || e?.ad_data_token === t.ad_data_token,
    o = r.findIndex(a);
  if (o >= 0) return o;
  if (e.type === `multi_advertiser_ad_unit`) {
    let t = e.ads.findIndex((e) => a(e.ad_card) || a(e.carousel_card));
    return t >= 0 ? t : n;
  }
  let s = e.carousel_cards.findIndex(a);
  if (s >= 0) return s;
  let c = e.ad_cards?.findIndex(a) ?? -1;
  return c >= 0 ? c : n;
}
function A(e) {
  return e.type === `single_advertiser_ad_unit`
    ? [...e.carousel_cards, ...(e.ad_cards ?? [])].some((e) => e.business_agent_target != null)
    : e.ads.some(
        (e) =>
          e.carousel_card.business_agent_target != null || e.ad_card?.business_agent_target != null,
      );
}
function j(e) {
  if (!A(e)) return e;
  if (e.type === `single_advertiser_ad_unit`) {
    let t = e.carousel_cards,
      n = e.ad_cards,
      r = [...t, ...(n ?? [])].filter((e) => e.business_agent_target != null);
    for (let e of r) {
      if (!e.ad_data_token.trim()) return null;
      if (n == null || n.length === 0) continue;
      let r = t.filter((t) => t.ad_data_token === e.ad_data_token),
        i = n.filter((t) => t.ad_data_token === e.ad_data_token);
      if (
        i.length !== 1 ||
        (t.length > 0 && r.length !== 1) ||
        N(r[0]?.business_agent_target, i[0]?.business_agent_target)
      )
        return null;
    }
    if (n == null || n.length === 0 || t.length === 0) return e;
    let i = t.map((e) => P(e, n)),
      a = n.map((e) => P(e, t));
    return i.some((e, n) => e !== t[n]) || a.some((e, t) => e !== n[t])
      ? { ...e, carousel_cards: i, ad_cards: a }
      : e;
  }
  let t = new Map();
  for (let n of e.ads)
    for (let e of new Set([n.carousel_card.ad_data_token, n.ad_card?.ad_data_token]))
      e?.trim() && t.set(e, (t.get(e) ?? 0) + 1);
  for (let n of e.ads) {
    if (n.carousel_card.business_agent_target == null && n.ad_card?.business_agent_target == null)
      continue;
    let e = n.carousel_card.ad_data_token;
    if (
      !e.trim() ||
      t.get(e) !== 1 ||
      (n.ad_card != null && n.ad_card.ad_data_token !== e) ||
      N(n.carousel_card.business_agent_target, n.ad_card?.business_agent_target)
    )
      return null;
  }
  let n = e.ads.map((e) => {
    if (e.ad_card == null) return e;
    let t = P(e.carousel_card, [e.ad_card]),
      n = P(e.ad_card, [e.carousel_card]);
    return t === e.carousel_card && n === e.ad_card ? e : { ...e, carousel_card: t, ad_card: n };
  });
  return n.some((t, n) => t !== e.ads[n]) ? { ...e, ads: n } : e;
}
function M(e) {
  if (e.type === `multi_advertiser_ad_unit`) {
    let t = e.ads.filter(
      (e) =>
        e.carousel_card.business_agent_target == null && e.ad_card?.business_agent_target == null,
    );
    return t.length > 0 ? { ...e, ads: t } : null;
  }
  let t = new Set(
      [...e.carousel_cards, ...(e.ad_cards ?? [])]
        .filter((e) => e.business_agent_target != null)
        .map((e) => e.ad_data_token),
    ),
    n = {
      ...e,
      carousel_cards: e.carousel_cards.filter((e) => !t.has(e.ad_data_token)),
      ad_cards: e.ad_cards?.filter((e) => !t.has(e.ad_data_token)),
    };
  return O(n).length > 0 ? n : null;
}
function N(e, t) {
  return (
    e != null &&
    t != null &&
    (e.business_agent_id !== t.business_agent_id ||
      e.business_agent_gizmo_id !== t.business_agent_gizmo_id)
  );
}
function P(e, t) {
  let n = t.find((t) => t.ad_data_token === e.ad_data_token)?.business_agent_target,
    r = e.business_agent_target;
  return n == null
    ? e
    : r == null
      ? { ...e, business_agent_target: n }
      : r.business_agent_conversation_starters != null ||
          !n.business_agent_conversation_starters?.length
        ? e
        : {
            ...e,
            business_agent_target: {
              ...r,
              business_agent_conversation_starters: n.business_agent_conversation_starters,
            },
          };
}
function F() {
  return (F = e(() => {}))();
}
function I(e, t) {
  let n = e.get(W);
  return (
    !n.loading &&
    n.enabled &&
    !n.optedOut &&
    (t !== `conversational_pending` || e.get(v, `1250100759`))
  );
}
function L(e, t) {
  return x(t) ? (A(t) ? (e.get(G) ? j(t) : M(t)) : O(t).length > 0 ? t : null) : null;
}
function R({
  props: e,
  hasAd: t,
  hasResponse: n,
  hasNoContentResponse: i,
  hasUnsupportedTarget: a,
  hidden: o,
  assistantCompleted: s,
  slotTimedOut: c,
  policy: l,
  pendingPlacement: u = !1,
  pendingEnabled: d = !1,
}) {
  let f = (e) => ({ state: `rejected`, rejectionReason: e });
  if (o || (u && (!d || !e.hasPendingImageGeneration)))
    return { state: `hidden`, rejectionReason: null };
  if (l.loading) return { state: `policy_loading`, rejectionReason: null };
  let p =
    t &&
    e.isImageGenerationTurn &&
    (!s || !e.hasAssistantMessage) &&
    !e.hasCustomAgentMessage &&
    !e.isAsyncCorrection &&
    !e.isSuppressedConversation &&
    l.enabled &&
    l.config?.imageStreamingEnabled === !0 &&
    !l.optedOut;
  return !u && !s && !p
    ? { state: `streaming`, rejectionReason: null }
    : i
      ? { state: `hidden`, rejectionReason: null }
      : n
        ? t
          ? e.hasCustomAgentMessage
            ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_CUSTOM_AGENT)
            : e.isAsyncCorrection
              ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_ASYNC_CORRECTION)
              : e.isSuppressedConversation || a
                ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_UNSUPPORTED_SURFACE)
                : l.enabled
                  ? !u && !e.hasAssistantMessage && !p
                    ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_MISSING_ASSISTANT_MESSAGE)
                    : !u && c
                      ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_LATE_ARRIVAL)
                      : l.optedOut
                        ? f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_ADS_OPT_OUT)
                        : { state: `render`, rejectionReason: null }
                  : f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_BAZAAR_DISABLED)
          : f(r.CHATGPT_ADS_PLACEMENT_REJECTION_REASON_NON_DISPLAYABLE_CONTENT)
        : { state: c ? `hidden` : `waiting`, rejectionReason: null };
}
function z(e, t) {
  let n = h(e, `1402002035`),
    r = n.get(`web_discard_timeout_after_slot_visibility_ms`, 1500),
    i = typeof r == `number` ? r : Number(r),
    a = t && e.checkGate(`665873859`),
    o = !t && e.checkGate(`912212197`);
  return {
    authenticatedEnabled: a,
    anonymousEnabled: o,
    adsSuppressed: (a || o) && D(e),
    optOutEnabled: e.checkGate(`1613860123`),
    imageStreamingEnabled: n.get(`enable_image_gen_render_while_streaming`, !1),
    visibleTimeoutMs: Number.isFinite(i) && i >= 1500 && i <= 1e4 ? i : 1500,
  };
}
var B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (f(),
      o(),
      t(),
      E(),
      T(),
      w(),
      S(),
      s(),
      p(),
      l(),
      g(),
      (B = c(u, (e, t) => {
        let n = t.get(b, e);
        return n != null && y(n.response) ? L(t, n.response.content) : null;
      })),
      (V = c(u, (e, { get: t }) => {
        let n = t(C, e);
        if (n == null) return null;
        for (let r = n.length - 1; r >= 0; --r) {
          let i = n[r];
          if (t(B, { conversationId: e, userMessageId: i }) != null) return i;
        }
        return null;
      })),
      (H = c(u, (e, { get: t }) =>
        e.placementName === `conversational_pending`
          ? t(C, e.conversationId)?.at(-1) === e.userMessageId && t(B, e) != null
          : t(V, e.conversationId) === e.userMessageId,
      )),
      (U = m(
        u,
        ({ get: e }) => {
          let t = e(_),
            n = e(i);
          return t == null || n.authLoading ? null : z(t, n.authMethod === `chatgpt`);
        },
        ({ get: e, set: t }) => {
          let n = e(_),
            r = e(i);
          if (n == null) return;
          let a = () => {
            t(r.authLoading ? null : z(n, r.authMethod === `chatgpt`));
          };
          return (n.on(`values_updated`, a), () => n.off(`values_updated`, a));
        },
      )),
      (W = d(u, ({ get: e }) => {
        let t = e(U),
          r = e(i),
          o = r.authMethod === `chatgpt`,
          s = o ? e(a) : null;
        return {
          config: t,
          loading:
            t == null || e(n) || r.authLoading || r.accountLoading || (s != null && s.data == null),
          enabled:
            t != null && !t.adsSuppressed && (o ? t.authenticatedEnabled : t.anonymousEnabled),
          optedOut: t?.optOutEnabled === !0 && s?.data?.freeAdsOptOut === !0,
        };
      })),
      (G = d(u, ({ get: e }) => {
        let t = e(i);
        return (
          !t.authLoading &&
          !t.accountLoading &&
          t.authMethod === `chatgpt` &&
          !e(n) &&
          e(v, `699583893`) &&
          e(v, `199045523`)
        );
      })));
  }))();
}
export {
  R as a,
  I as c,
  k as d,
  F as f,
  B as i,
  H as l,
  W as n,
  L as o,
  G as r,
  K as s,
  U as t,
  O as u,
};
//# sourceMappingURL=placement-policy-eef9788f4202.js.map
