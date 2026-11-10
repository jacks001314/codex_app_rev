import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  HIt as n,
  Irt as r,
  RLt as i,
  TLt as a,
  fLt as o,
  oIt as s,
  pLt as c,
  wLt as l,
  xLt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $b as d,
  $yr as f,
  Bl as p,
  Jyr as m,
  QDr as h,
  Qyr as g,
  Rl as _,
  Ul as v,
  XDr as y,
  Xb as b,
  Yb as x,
  eOr as S,
  ex as C,
  kZn as w,
  ocr as T,
  ox as E,
  pZn as D,
  ucr as O,
  yjn as k,
  zl as A,
} from "./app-initial-5851df3f6cb1.js";
import { Hs as j, Vs as M } from "./app-primary-fe8a450b3b04.js";
import { n as N, t as P } from "./engagement-4e2b4c5a0bbe.js";
function F(
  e,
  {
    turnContext: t,
    contentReferenceIndex: n,
    image: i,
    imageIndex: a,
    dilPayload: o,
    sourceMessageId: c,
    widgetName: l,
    imageUse: u,
    galleryArrow: m,
    dilV2: v,
    isGenui: y,
    dilVersion: T,
  },
) {
  let E = !1;
  if (t == null) return !1;
  try {
    let O =
        c ?? v?.sourceMessageId ?? (n == null ? void 0 : t.contentReferenceMessageIds?.[n]) ?? t.messageId,
      k = e.get(D, t.conversationId) ?? void 0,
      j = L.parse(n == null ? {} : (t.contentReferences[n] ?? {})),
      N = v?.contentReferenceStartIndex ?? j.start_idx,
      F = o == null ? void 0 : R.parse(o),
      z =
        v == null
          ? { ...F?.event_data }
          : {
              content_reference_type:
                F?.source === `image_group` ||
                F?.event_data?.content_reference_type === `image_group` ||
                F?.event_data?.contentReferenceType === `image_group`
                  ? `image_group`
                  : `dil`,
              image_affordance: `image_group_tile`,
              parent_context: {},
            },
      V = F?.event_name?.toLowerCase(),
      H = V === `chatgpt_image_action`;
    if (H) {
      for (let e of [`url`, `content_url`, `contentUrl`, `original_content_url`, `originalContentUrl`])
        delete z[e];
      z.image_index = a;
    }
    let U = (e) => (typeof z[e] == `string` && z[e].trim()) || void 0,
      W =
        F == null
          ? j.type
          : (U(`content_reference_type`) ??
            U(`contentReferenceType`) ??
            (F.source === `image_group` ? `image_group` : void 0)),
      G = F == null ? null : e.get(w, t.conversationId),
      K = O == null ? void 0 : G?.[O]?.message,
      q = g(K?.metadata?.model_dil),
      J = v != null || (y ?? (F != null && (g(q?.dil)?.type != null || K?.metadata?.model_dil_v2 != null))),
      Y = J ? `model_written_dil` : void 0,
      X = v != null && m != null,
      Z =
        F == null ||
        X ||
        H ||
        ((v != null || W === `image_group`) &&
          ![`chatgpt_entity_action`, `chatgpt_widget_action`].includes(V ?? ``)),
      Q = !1;
    if (Z) {
      let n = F == null ? t.imageEngagementContext : void 0,
        c = n?.parentContext;
      W !== `image_group` &&
        (c = W === `image_v2` && c != null ? { entityCategory: c.entityCategory } : void 0);
      let u = H ? (U(`image_affordance`) ?? U(`imageAffordance`)) : `image_group_tile`,
        p = s(C).safeParse(
          `CHATGPT_IMAGE_AFFORDANCE_${u?.toUpperCase().replace(/^CHATGPT_IMAGE_AFFORDANCE_/, ``)}`,
        ),
        _ = s(b).safeParse(
          `CHATGPT_ENGAGEMENT_SURFACE_LOCATION_${(U(`surface_location`) ?? U(`surfaceLocation`))?.toUpperCase().replace(/^CHATGPT_ENGAGEMENT_SURFACE_LOCATION_/, ``)}`,
        );
      if (H) {
        let e = B.safeParse(z);
        Q =
          F?.event_name === `chatgpt_image_action` &&
          e.success &&
          ((e.data.image_affordance == null && e.data.imageAffordance == null) || p.success) &&
          ((e.data.surface_location == null && e.data.surfaceLocation == null) || _.success);
      }
      let y = null;
      T === `2.0` ? (y = {}) : H ? (y = g(z.parent_context ?? z.parentContext)) : F != null && (y = {});
      let S = (e, t) => {
          let n = y?.[e] ?? y?.[t];
          return (typeof n == `string` && n.trim()) || void 0;
        },
        w = y?.content_reference_start_index ?? y?.contentReferenceStartIndex ?? N,
        D = o == null ? null : g(Array.isArray(o.images) ? o.images[a] : null),
        A = F == null ? i.destinationUrl : f(D?.url),
        j = F == null ? i.src : f(D?.content_url),
        M = p.success ? p.data : C.CHATGPT_IMAGE_AFFORDANCE_UNSPECIFIED;
      m === `next`
        ? (M = C.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON)
        : m === `previous` && (M = C.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON);
      let L = t.shouldBlockExternalEgress,
        R =
          (W === `image_group` ? n?.surfaceLocation : void 0) ??
          b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
      (H && _.success && (R = _.data),
        X && (R = b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY),
        h(e, d, {
          actionType: x.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
          surfaceLocation: R,
          imageAffordance: M,
          imageIndex: r(a),
          conversationId: k,
          messageId: O,
          assistantMessageId:
            v?.assistantMessageId ??
            (R === b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR ? n?.parentContext.messageId : void 0) ??
            t.messageId ??
            O,
          ...(v != null || T === `2.0`
            ? { turnOrdinal: P(e, t.conversationId, v?.assistantMessageId ?? O) }
            : {}),
          contentReferenceStartIndex: N == null ? void 0 : r(N),
          contentReferenceType: H ? (U(`content_reference_type`) ?? U(`contentReferenceType`) ?? `dil`) : W,
          isGenui: J,
          parentContext:
            y == null
              ? c
              : {
                  widgetType: S(`widget_type`, `widgetType`) ?? Y,
                  widgetName:
                    v?.widgetName ??
                    S(`widget_name`, `widgetName`) ??
                    (J && T !== `2.0` ? void 0 : (l ?? void 0)),
                  contentReferenceStartIndex: w == null ? void 0 : r(Number(w)),
                  messageId: S(`message_id`, `messageId`) ?? O,
                  entityId: S(`entity_id`, `entityId`),
                  entityCategory: S(`entity_category`, `entityCategory`),
                },
          url: L ? void 0 : I(A),
          contentUrl: L ? void 0 : I(j),
          originalContentUrl: L ? void 0 : I(i.originalSrc),
          tags: [],
        }),
        (E = !0));
    }
    if (m != null) return E;
    if (F != null) {
      if (v != null)
        return (H && h(e, M, { eventName: `chatgpt_image_action`, eventData: JSON.stringify(z) }), E);
      if (F.event_name == null || F.event_name.trim() === ``) return E;
      if (
        (Q || h(e, M, { eventName: F.event_name, eventData: JSON.stringify(z) }),
        F.statsig_event_name != null)
      ) {
        let t = Object.fromEntries(
          Object.entries(z)
            .filter(([, e]) => typeof e == `string` || typeof e == `number` || typeof e == `boolean`)
            .map(([e, t]) => [e, String(t)]),
        );
        e.get(S).logEventWithStatsig?.(F.statsig_event_name, t, void 0, { statsigOnly: !0 });
      }
      return E;
    }
    if (O == null || O.startsWith(`WEB:`)) return E;
    let $ = u == null ? i.isProxied : u === `deepResearch`;
    h(e, p, {
      legacyStatsigEventName: `search_content_reference_clicked`,
      eventType: _.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED,
      conversationId: k,
      messageId: O,
      contentReferenceType: `image_v2`,
      imageUse: $
        ? A.CHATGPT_CONTENT_REFERENCE_IMAGE_USE_DEEP_RESEARCH
        : A.CHATGPT_CONTENT_REFERENCE_IMAGE_USE_LEGACY_CAROUSEL,
    });
  } catch {}
  return E;
}
function I(e) {
  return e != null && !O(e) ? e : void 0;
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    (T(),
      v(),
      E(),
      j(),
      m(),
      t(),
      y(),
      k(),
      N(),
      (L = c({
        type: a()
          .optional()
          .catch(void 0),
        start_idx: o()
          .int()
          .nonnegative()
          .optional()
          .catch(void 0),
      })),
      (R = c({
        source: a()
          .optional()
          .catch(void 0),
        event_name: a()
          .optional()
          .catch(void 0),
        statsig_event_name: a()
          .optional()
          .catch(void 0),
        event_data: u(a(), i())
          .optional()
          .catch(void 0),
      })),
      (z = l({
        widget_type: a().trim().min(1).optional(),
        widgetType: a().trim().min(1).optional(),
        widget_name: a().trim().min(1).optional(),
        widgetName: a().trim().min(1).optional(),
        content_reference_start_index: n().optional(),
        contentReferenceStartIndex: n().optional(),
        message_id: a().trim().min(1).optional(),
        messageId: a().trim().min(1).optional(),
        entity_id: a().trim().min(1).optional(),
        entityId: a().trim().min(1).optional(),
        entity_category: a().trim().min(1).optional(),
        entityCategory: a().trim().min(1).optional(),
      }).refine((e) =>
        [
          [`widget_type`, `widgetType`],
          [`widget_name`, `widgetName`],
          [`content_reference_start_index`, `contentReferenceStartIndex`],
          [`message_id`, `messageId`],
          [`entity_id`, `entityId`],
          [`entity_category`, `entityCategory`],
        ].every(([t, n]) => e[t] == null || e[n] == null || e[t] === e[n]),
      )),
      (B = l({
        image_index: n().nonnegative(),
        content_reference_type: a().trim().min(1).optional(),
        contentReferenceType: a().trim().min(1).optional(),
        image_affordance: a().trim().min(1).optional(),
        imageAffordance: a().trim().min(1).optional(),
        surface_location: a().trim().min(1).optional(),
        surfaceLocation: a().trim().min(1).optional(),
        parent_context: z.optional(),
        parentContext: z.optional(),
      }).refine(
        (e) =>
          (e.parent_context == null || e.parentContext == null) &&
          [
            [`content_reference_type`, `contentReferenceType`],
            [`image_affordance`, `imageAffordance`],
            [`surface_location`, `surfaceLocation`],
          ].every(([t, n]) => e[t] == null || e[n] == null || e[t] === e[n]),
      )));
  }))();
}
export { F as n, V as t };
//# sourceMappingURL=chatgpt-search-image-analytics-e15e6c7d29ed.js.map
