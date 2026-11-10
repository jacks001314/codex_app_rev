import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $gt as t,
  CCt as n,
  Crt as r,
  Fet as i,
  Irt as a,
  Kht as o,
  M_t as s,
  Mat as c,
  Nat as l,
  O3t as u,
  Rht as d,
  SCt as f,
  Trn as p,
  Wht as m,
  Zht as h,
  _gt as g,
  _ht as _,
  a3t as v,
  drn as y,
  e_t as ee,
  egt as te,
  grn as b,
  hht as x,
  i6t as S,
  j_t as C,
  ket as w,
  krn as T,
  lht as E,
  n_t as ne,
  o3t as re,
  oCt as ie,
  o_t as ae,
  ogt as oe,
  pht as se,
  rCt as ce,
  rrn as D,
  sCt as O,
  s_t as k,
  t_t as A,
  vCt as j,
  vgt as M,
  wrn as N,
  xCt as P,
  xrn as F,
  yCt as I,
} from "./app-initial-f094ef01c64d.js";
import { Ts as L, ws as R } from "./app-primary-4c40d73a1074.js";
function z(e) {
  return (e.author.role === `assistant` || e.author.role === `tool`) && (B(e) || V(e) || H(e));
}
function B(e) {
  if (P(e)) return !1;
  let t = n(e.metadata);
  if (
    (Array.isArray(t?.attachments) && t.attachments.length > 0) ||
    t?.chatgpt_sdk != null ||
    n(t?.model_dil)?.dil != null ||
    t?.model_dil_v2 != null ||
    t?.async_completion_id != null
  )
    return !0;
  if (t?.reasoning_status != null && t.is_thinking_preamble_message !== !0) return !1;
  if (s(e).trim().length > 0) return !0;
  let r = n(e.content);
  return (
    r?.content_type === `multimodal_text` &&
    Array.isArray(r.parts) &&
    r.parts.some((e) => n(e) != null)
  );
}
function V(e) {
  let t = ae(e.metadata);
  return t != null && U.has(t.type);
}
function H(e) {
  let t = n(e.metadata);
  return (
    n(t?.finish_details)?.type === `content_filter` ||
    t?.error_metadata != null ||
    t?.is_error === !0 ||
    e.content.content_type === `error` ||
    e.content.content_type === `system_error`
  );
}
var U,
  W = e(() => {
    (C(),
      k(),
      I(),
      (U = new Set([
        `approve_tool_in_context_scope`,
        `confirm_action`,
        `link_required`,
        `oauth_required`,
        `plugin_suggestions`,
      ])));
  });
function le(e, t) {
  let n = e?.[t]?.message;
  if (e == null || n?.author.role !== `assistant` || P(n)) return null;
  let r = n.metadata;
  return r?.b1de6e2_s || r?.b1de6e2_rm || r?.n7jupd_message || r?.image_gen_async || G(n)
    ? null
    : K(e, t, n);
}
function ue(e, t) {
  let n = e?.[t]?.message;
  if (e == null || n == null) return null;
  let r = Y.parse(n.metadata ?? {});
  return r.model_slug == null ||
    r.image_gen_async ||
    r.ghostrider_status != null ||
    r.ghostrider?.status != null ||
    !G(n)
    ? null
    : K(e, t, n);
}
function G(e) {
  return t(e, { isActiveTurn: !1, isStreaming: !1 }).some((e) => e.src != null);
}
function K(e, t, n) {
  let r = new Set(),
    i = t,
    a = null;
  for (; i != null && !r.has(i);) {
    r.add(i);
    let t = e[i];
    if (t?.message != null && f(t.message)) {
      a = t.message;
      break;
    }
    i = t?.parent ?? null;
  }
  if (a?.id == null) return null;
  let o = e[a.id]?.children ?? [],
    s = o.length <= 1 ? o : o.filter((t) => de(e, t).some(z));
  return {
    message: n,
    prompt: a,
    promptMessageId: a.id,
    rawVariantCount: o.length,
    variantIds: s,
    activeVariantIndex: s.findIndex((e) => r.has(e)),
  };
}
function de(e, t) {
  let n = [],
    r = t,
    i = new Set();
  for (; r != null && !i.has(r);) {
    i.add(r);
    let t = e[r];
    if (t?.message != null && f(t.message)) break;
    (t?.message != null && n.push(t.message), (r = t?.children?.at(-1)));
  }
  return n;
}
function fe(e, t, n) {
  let r = J.parse(e.metadata ?? {}),
    i = r.thinking_effort,
    a =
      [r.resolved_model_slug, r.model_slug].find(
        (e) =>
          typeof e == `string` &&
          (t?.modelConfigBySlug?.[e] != null || ce(t, { slug: e, thinkingEffort: null }) != null),
      ) ?? n.slug;
  return { slug: a, thinkingEffort: i, versionId: ie(t, a) };
}
async function pe(e, { conversationId: t, isTemporaryChat: n, messageId: r, retry: a }) {
  let o = e.get(m, t) === `tpp`,
    s = o ? await e.query.getOrFetch(x) : e.get(E).data,
    c = e.get(Q, { conversationId: t, messageId: r });
  if (c == null) return;
  let l = e.get(se).data,
    u = s?.modelConfigBySlug?.[a.model.slug]?.enabledTools,
    d = e.get(te, t) == null ? `primary_assistant` : `gizmo_interaction`,
    f = j(c.prompt.metadata?.system_hints)
      .filter(
        (e) =>
          e === `search` ||
          e === `picture_v2` ||
          e === `reason` ||
          e.startsWith(`plugin:`) ||
          e.startsWith(`connector:`) ||
          e.startsWith(`custom_agent:`) ||
          l?.some((t) => t.system_hint === e) === !0,
      )
      .filter((e) => {
        let t = l?.find((t) => t.system_hint === e);
        return (
          t == null ||
          ((!n || t.allow_in_temporary_chat) &&
            (u == null || t.required_features.every((e) => u.includes(e))) &&
            (e === `reason` ||
              t.required_models.length === 0 ||
              t.required_models.includes(a.model.slug)) &&
            (t.required_conversation_modes.length === 0 ||
              t.required_conversation_modes.includes(d)))
        );
      }),
    p = a.forceUseSearch ?? (f.includes(`search`) ? !0 : void 0),
    h = f.filter((e) => e !== `search`);
  a.forceUseReason && !h.includes(`reason`) && h.push(`reason`);
  let g;
  (a.forceUseSearch === !0
    ? (g = `conversation_regenerate_with_search`)
    : a.forceUseSearch === !1 && (g = `conversation_regenerate_without_search`),
    await i(e, {
      conversationId: t,
      feedback: a.feedback,
      forceUseSearch: p,
      mapSearchParams: X.parse(c.message.metadata?.map_search_parameters),
      searchSource: g,
      isTemporaryChat: n,
      model: {
        ...a.model,
        thinkingEffort:
          a.model.thinkingEffort ??
          (o ? s?.defaultThinkingEffortByModelSlug?.[a.model.slug] : void 0) ??
          null,
      },
      promptMessageId: c.promptMessageId,
      systemHints: h,
      variantPurpose:
        c.rawVariantCount === 1 && a.forceUseSearch === void 0 ? `comparison_implicit` : `none`,
    }));
}
var q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  me = e(() => {
    (u(),
      D(),
      re(),
      a(),
      l(),
      ee(),
      _(),
      O(),
      g(),
      I(),
      ne(),
      W(),
      L(),
      w(),
      (q = y([`standard`, `extended`, `min`, `max`, `ultra`, `xhigh`, `zero`])
        .nullable()
        .catch(null)),
      (J = p({
        resolved_model_slug: T()
          .optional()
          .catch(void 0),
        model_slug: T()
          .optional()
          .catch(void 0),
        thinking_effort: q,
      })),
      (Y = p({
        ghostrider_status: y([`intermediate`, `final`, `cancelled`])
          .optional()
          .catch(void 0),
        ghostrider: p({ status: y([`intermediate`, `final`, `cancelled`]).optional() })
          .optional()
          .catch(void 0),
        image_gen_async: F(!0)
          .optional()
          .catch(void 0),
        model_slug: T()
          .trim()
          .min(1)
          .optional()
          .catch(void 0),
      })),
      (X = p({
        latitude: N().nullish(),
        longitude: N().nullish(),
        latitude_span: N().nullish(),
        longitude_span: N().nullish(),
        map_message_id: T().nullish(),
        search_here: b().optional(),
      })
        .optional()
        .catch(void 0)),
      (Z = S(v, (e, { get: t }) => {
        let n = t(h, e),
          r = t(o, e),
          i = r == null ? null : n?.[r]?.message,
          a = i == null ? null : A(i)?.item,
          s = t(c, e);
        return {
          hasPendingApproval: a?.type === `chatgpt-tool-approval` && a.request?.type !== `preview`,
          hasCanvas:
            n != null &&
            Object.values(n).some(
              ({ message: e }) =>
                e?.author.name?.startsWith(`canmore.`) || e?.recipient?.startsWith(`canmore.`),
            ),
          activeMessageIds: s == null ? null : new Set(s.map((e) => e.id)),
        };
      })),
      (Q = S(v, ({ conversationId: e, messageId: t }, { get: n }) => {
        if (n(d, e) == null || M(n(oe, e)) || n(r, e) || n(R, e) != null) return null;
        let i = n(Z, e);
        if (i.hasCanvas || i.hasPendingApproval || !i.activeMessageIds?.has(t)) return null;
        let a = n(h, e);
        return le(a, t) ?? ue(a, t);
      })),
      ($ = S(v, (e, { get: t }) => t(t(m, e) === `tpp` ? x : E).data)));
  });
export { pe as a, me as i, Q as n, fe as r, $ as t };
//# sourceMappingURL=response-928d7dce6579.js.map
