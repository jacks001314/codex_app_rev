import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  Irt as n,
  LLt as r,
  TLt as i,
  _It as a,
  fLt as o,
  gIt as s,
  oIt as c,
  pLt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $b as u,
  G6t as d,
  Jyr as f,
  QDr as p,
  Qb as m,
  Qyr as h,
  WXn as g,
  XDr as _,
  Xb as v,
  Yb as y,
  Zb as b,
  ax as x,
  b6t as S,
  ex as C,
  iZn as w,
  ix as T,
  kZn as E,
  ocr as D,
  ox as O,
  pZn as k,
  v6t as A,
  y6t as j,
  yjn as M,
} from "./app-initial-5851df3f6cb1.js";
import { Hs as N, Vs as P } from "./app-primary-fe8a450b3b04.js";
import { _ as F, g as I } from "./chatgpt-markdown-view-10e560aa371d.js";
import { n as L, t as R } from "./engagement-4e2b4c5a0bbe.js";
var z;
function B() {
  return (B = e(() => {
    z = { $type: `protobuf_analytics_events.v1.ChatgptElicitationEvent` };
  }))();
}
var V;
function H() {
  return (H = e(() => {
    V = { $type: `protobuf_analytics_events.v1.ChatgptLearningQuizPresented` };
  }))();
}
function U(e, { eventName: t, eventData: r, messageId: s }) {
  if (t === `chatgpt_learning_quiz_presented`)
    try {
      p(e, V, {
        questionCount: n(o().safeParse(r?.question_count).data),
        attemptBucket: i().safeParse(r?.attempt_bucket).data,
        includedImageCount: n(o().int().nonnegative().safeParse(r?.included_image_count).data),
        hasIncludedImages: a().safeParse(r?.has_included_images).data,
        quizGenerationComplete: a().safeParse(r?.quiz_generation_complete).data,
        turnMessageId: s,
      });
    } catch {}
}
function W() {
  return (W = e(() => {
    (D(), H(), t(), _());
  }))();
}
function G(
  e,
  {
    conversationId: t,
    messageId: r,
    assistantMessageId: i,
    widgetRefId: a,
    widgetName: o,
    eventName: s,
    eventData: l,
    payload: d,
    blockExternalEgress: f,
    contentReferenceStartIndex: _,
    entityParentContext: S,
  },
) {
  if (![`chatgpt_widget_action`, `chatgpt_entity_action`, `chatgpt_image_action`].includes(s.toLowerCase()))
    return;
  let w = l ?? {},
    D = (e, t) => w[e] ?? w[t],
    O = t == null || r == null ? void 0 : e.get(E, t)?.[r]?.message,
    A = q(O),
    j = a?.match(/:(\d+)$/)?.[1],
    M = j == null ? void 0 : g(O?.metadata)[Number(j)],
    N = Y.parse(M?.start_idx) ?? _,
    P = A ? `model_written_dil` : void 0,
    F = A ? void 0 : (o ?? void 0),
    I = {
      conversationId: t == null ? void 0 : (e.get(k, t) ?? void 0),
      messageId: r,
      assistantMessageId: i,
      turnOrdinal: R(e, t, i),
      contentReferenceStartIndex: N == null ? void 0 : n(N),
      contentReferenceType: J.parse(D(`content_reference_type`, `contentReferenceType`)) ?? `dil`,
      actionType: y.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
      isGenui: A,
    },
    L = c(v).safeParse(K(D(`surface_location`, `surfaceLocation`), `CHATGPT_ENGAGEMENT_SURFACE_LOCATION_`)),
    z = L.success ? L.data : v.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
  switch (s.toLowerCase()) {
    case `chatgpt_widget_action`: {
      let t = c(x).safeParse(K(D(`widget_affordance`, `widgetAffordance`), `CHATGPT_WIDGET_AFFORDANCE_`)),
        n = t.success ? t.data : x.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED,
        r = D(`feedback_reasons`, `feedbackReasons`),
        i = Array.isArray(r) ? r.map((e) => J.parse(e)).filter((e) => e != null) : void 0;
      p(e, T, {
        ...I,
        surfaceLocation: t.success ? z : v.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        widgetType: P,
        widgetName: F,
        widgetAffordance: n,
        widgetActionTarget: t.success ? J.parse(D(`widget_action_target`, `widgetActionTarget`)) : void 0,
        widgetActionValue:
          t.success && n !== x.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT
            ? J.parse(D(`widget_action_value`, `widgetActionValue`))
            : void 0,
        feedbackReasons: t.success && i?.length ? i : void 0,
        contentReferenceType: t.success ? I.contentReferenceType : `dil`,
      });
      break;
    }
    case `chatgpt_entity_action`: {
      let t = c(m).safeParse(K(D(`entity_affordance`, `entityAffordance`), `CHATGPT_ENTITY_AFFORDANCE_`));
      p(e, b, {
        ...I,
        surfaceLocation: z,
        entityAffordance: t.success ? t.data : m.CHATGPT_ENTITY_AFFORDANCE_UNSPECIFIED,
        entityId: J.parse(D(`entity_id`, `entityId`)),
        entityCategory: J.parse(D(`entity_category`, `entityCategory`)),
        parentContext: S,
        isGenui: S?.widgetType === `model_written_dil` || I.isGenui,
      });
      break;
    }
    case `chatgpt_image_action`: {
      let t = c(C).safeParse(K(D(`image_affordance`, `imageAffordance`), `CHATGPT_IMAGE_AFFORDANCE_`)),
        i = Y.parse(d?.selected_index) ?? Y.parse(D(`image_index`, `imageIndex`)),
        a = i == null || !Array.isArray(d?.images) ? null : h(d.images[i]),
        o = h(D(`parent_context`, `parentContext`)),
        s = (e, t) => J.parse(o?.[e] ?? o?.[t]),
        l = Y.parse(o?.content_reference_start_index ?? o?.contentReferenceStartIndex) ?? N;
      p(e, u, {
        ...I,
        surfaceLocation: z,
        imageAffordance: t.success ? t.data : C.CHATGPT_IMAGE_AFFORDANCE_UNSPECIFIED,
        imageIndex: i == null ? void 0 : n(i),
        parentContext:
          o == null
            ? void 0
            : {
                entityId: s(`entity_id`, `entityId`),
                entityCategory: s(`entity_category`, `entityCategory`),
                widgetType: s(`widget_type`, `widgetType`) ?? P,
                widgetName: s(`widget_name`, `widgetName`) ?? F,
                messageId: s(`message_id`, `messageId`) ?? r,
                contentReferenceStartIndex: l == null ? void 0 : n(l),
              },
        url: f ? void 0 : J.parse(a?.url),
        contentUrl: f ? void 0 : J.parse(a?.content_url),
        originalContentUrl: f ? void 0 : J.parse(a?.original_content_url),
        tags: [],
      });
      break;
    }
    default:
      return;
  }
}
function K(e, t) {
  let n = J.parse(e)?.toUpperCase();
  return n == null ? void 0 : `${t}${n.replace(RegExp(`^${t}`), ``)}`;
}
function q(e) {
  return h(h(e?.metadata?.model_dil)?.dil)?.type != null || e?.metadata?.model_dil_v2 != null;
}
var J, Y;
function X() {
  return (X = e(() => {
    (D(),
      O(),
      w(),
      f(),
      t(),
      _(),
      M(),
      L(),
      (J = i()
        .trim()
        .min(1)
        .optional()
        .catch(void 0)),
      (Y = r([o(), i(), s()])
        .transform(Number)
        .pipe(o())
        .optional()
        .catch(void 0)));
  }))();
}
function ee(
  e,
  {
    conversationId: t,
    messageId: n,
    eventName: r,
    eventData: i,
    widgetRefId: a,
    widgetName: o,
    payload: s,
    blockExternalEgress: c,
    contentReferenceStartIndex: l,
  },
  u,
) {
  if (r === `ChatgptConversationFollowupSuggestionInteraction`) {
    o === `conversation_follow_up_action_list` &&
      F(e, { data: i, surface: `action_list`, conversationId: t, messageId: n });
    return;
  }
  if (r === `link_action`) return;
  let d = { ...i },
    f = d.widget_affordance ?? d.widgetAffordance;
  if (
    (typeof f == `string` &&
      f.toUpperCase().replace(/^CHATGPT_WIDGET_AFFORDANCE_/, ``) === `VALUE_INPUT` &&
      (delete d.widget_action_value, delete d.widgetActionValue),
    r?.toLowerCase() === `chatgpt_image_action`)
  )
    for (let e of [`url`, `content_url`, `contentUrl`, `original_content_url`, `originalContentUrl`])
      delete d[e];
  try {
    let f = t == null ? null : e.get(k, t);
    if (r != null) {
      let d = u?.get(r);
      if (d != null) {
        let t = d({ serverConversationId: f, messageId: n, contentReferenceStartIndex: l, eventData: i });
        t != null && p(e, P, { eventName: r, eventData: JSON.stringify(t) });
        return;
      }
      G(e, {
        conversationId: t,
        messageId: n,
        assistantMessageId: n,
        widgetRefId: a,
        widgetName: o,
        eventName: r,
        eventData: i,
        payload: s,
        blockExternalEgress: c,
        contentReferenceStartIndex: l,
      });
    }
    let m = Z.safeParse(i?.elicitation_metadata);
    if (m.success && f && n && (m.data.stage === `shown` || m.data.action != null)) {
      let t = Q.safeParse(i?.requested_kind);
      p(e, z, {
        conversationId: f,
        messageId: n,
        elicitationType: m.data.elicitation_type,
        stage: m.data.stage,
        action: m.data.stage === `interacted` ? m.data.action : void 0,
        uploadKind: t.success ? t.data : void 0,
      });
    }
    if (r == null) return;
    let h = { requestedKind: Q.safeParse(i?.requested_kind).data, turnMessageId: n };
    switch (r) {
      case `ChatgptWebPhotoUploadActionClicked`:
      case `chatgpt_web_photo_upload_action_clicked`:
        p(e, A, {
          ...h,
          impressionEvent:
            i?.impression_event === `chatgpt_web_photo_upload_action_enabled_impression`
              ? i.impression_event
              : void 0,
        });
        return;
      case `ChatgptWebPhotoUploadActionEnabledImpression`:
      case `chatgpt_web_photo_upload_action_enabled_impression`:
        p(e, j, h);
        return;
      case `ChatgptWebPhotoUploadActionImpression`:
      case `chatgpt_web_photo_upload_action_impression`:
        p(e, S, h);
        return;
    }
    p(e, P, {
      eventName: r,
      eventData:
        n == null && i == null
          ? void 0
          : JSON.stringify({ ...(n == null ? {} : { turn_message_id: n }), ...d }),
    });
  } catch {}
  r != null && U(e, { eventName: r, eventData: i, messageId: n });
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (B(),
      d(),
      N(),
      t(),
      _(),
      M(),
      I(),
      W(),
      X(),
      (Z = l({
        elicitation_type: c([
          `connector_install`,
          `automation_schedule`,
          `thinking_effort_change`,
          `file_upload`,
        ]),
        stage: c([`shown`, `interacted`]),
        action: c([`accept`, `decline`, `dismiss`])
          .optional()
          .catch(void 0),
      })),
      (Q = c([`camera`, `image`, `photo`, `video`, `media`, `file`])));
  }))();
}
export { z as a, G as i, ee as n, B as o, X as r, $ as t };
//# sourceMappingURL=analytics-ec75dbdcd499.js.map
