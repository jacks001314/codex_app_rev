import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as t, Irt as n, SPt as r } from "./app-shared-bbfeca5e5737.js";
import {
  BZt as i,
  FZt as a,
  MIr as o,
  MZt as s,
  NZt as c,
  QDr as l,
  XDr as u,
  Ymr as d,
  eOr as f,
  ehr as p,
  jIr as m,
  jZt as h,
  kZt as g,
  ocr as _,
  zZt as v,
} from "./app-initial-5851df3f6cb1.js";
import {
  a as y,
  c as b,
  f as x,
  l as S,
  n as C,
  o as w,
  r as T,
  s as E,
  t as D,
  u as O,
} from "./chatgpt_image_lightbox-600530866e50.js";
function k(e, n, r) {
  let i = r.chatGptMessageId;
  if (r.src == null || i == null) return;
  let { generationId: a, parentGenerationId: o, imageIndex: s } = r.chatGptImageMetadata ?? {},
    c = {
      mimeType: r.chatGptImageMetadata?.mimeType,
      conversationId: n,
      messageId: i,
      generationId: a,
      parentGenerationId: o,
      imageIndex: s,
      fileId: r.src.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
      source: `chat`,
      model: `gpt-4o`,
    },
    u = {};
  r.chatGptImageMetadata?.mimeType && (u.mime_type = r.chatGptImageMetadata.mimeType);
  for (let [e, t] of Object.entries(c)) typeof t == `string` && e !== `mimeType` && (u[e] = t);
  let p = e.get(f);
  (l(e, h, { legacyStatsigEventName: `chatgpt_image_download`, metadata: c, isParagen: !1 }, void 0, (e) => {
    p.logEventWithStatsig?.(`chatgpt_image_download`, u, void 0, {
      eventId: e,
      data: { ...u, origin: `chat` },
    });
  }),
    p.logEventWithStatsig?.(`chatgpt_dalle_image_download`, u, void 0, {
      statsigValue: `click`,
      data: { ...u, origin: `chat` },
    }),
    n &&
      i &&
      a &&
      d
        .safePost(`/unified_user_signals`, {
          requestBody: {
            signal_type: `image_download`,
            product_surface: `CHAT`,
            signal_metadata: {},
            user_metadata: {},
            signal_detail: { common_metadata: { conversation_id: n, message_id: i, image_generation_id: a } },
          },
        })
        .catch((e) => {
          t.warning(`Failed to record shared image download`, { safe: {}, sensitive: { error: e } });
        }));
}
function A(e, t, r, i, a) {
  if (i === `share`) {
    l(e, D, {
      button: C.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE,
      selectionState: v.CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION,
      imageSeriesCount: n(a),
    });
    return;
  }
  let {
    generationId: o,
    parentGenerationId: s,
    model: c,
    imageIndex: u,
    sourceOperation: d,
  } = r.chatGptImageMetadata ?? {};
  l(e, g, {
    metadata: {
      mimeType: r.chatGptImageMetadata?.mimeType,
      conversationId: t,
      messageId: r.chatGptMessageId,
      generationId: o,
      parentGenerationId: s,
      model: c,
      imageIndex: u,
      sourceOperation: d,
      source: `chat`,
      fileId: r.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
    },
    downloadableImageCount: n(a),
    selectionState: `pending_selection`,
  });
}
function j(e, t, n, r, i = `chat`) {
  if (n.chatGptMessageId == null) return;
  let {
      generationId: o,
      parentGenerationId: u,
      model: d,
      sourceOperation: p,
      imageIndex: m,
    } = n.chatGptImageMetadata ?? {},
    g = /^(file-service|sediment):\/\//.test(n.src ?? ``) ? (n.src ?? void 0) : void 0,
    _ = n.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
    v = r === `open` || r === `view` || r.startsWith(`360`) ? M() : void 0;
  if (
    ((r === `open` || r === `view`) &&
      (v != null &&
        l(e, T, {
          metadata: {
            sessionId: v,
            conversationId: t,
            messageId: n.chatGptMessageId,
            generationId: o,
            parentGenerationId: u,
            fileId: g,
          },
          source: y.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION,
        }),
      r === `view`)) ||
    (r.startsWith(`360`) && v == null)
  )
    return;
  let x = {
    metadata: {
      sessionId: v,
      conversationId: t,
      messageId: n.chatGptMessageId,
      generationId: o,
      parentGenerationId: u,
      fileId: g,
    },
    source: y.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION,
  };
  switch (r) {
    case `360Impression`:
      l(e, w, x);
      return;
    case `360Opened`:
      l(e, E, x);
      return;
    case `360Loaded`:
      l(e, O, x);
      return;
    case `360DependencyFailed`:
    case `360ImageFailed`:
      l(e, b, {
        ...x,
        failureType:
          r === `360DependencyFailed`
            ? S.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD
            : S.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD,
      });
      return;
  }
  let C = i === `paragen`,
    D = {
      mimeType: n.chatGptImageMetadata?.mimeType,
      conversationId: t,
      messageId: n.chatGptMessageId,
      generationId: o,
      parentGenerationId: u,
      fileId: _,
      source: i,
      model: C ? `gpt-4o` : d,
      imageIndex: m,
      hasParent: C && r !== `open` ? !!u : void 0,
    };
  if (r === `open`) {
    (l(e, a, { metadata: { ...D, sourceOperation: p ?? `none` } }), C && N(e, t, n));
    return;
  }
  let k = r === `thumbsUp`,
    A =
      r === `download` ? `chatgpt_imagegen_image_paragen_download` : `chatgpt_imagegen_image_paragen_rating`,
    j = C
      ? (t) => {
          let i = { origin: `chat` };
          D.mimeType && (i.mime_type = D.mimeType);
          for (let [e, t] of Object.entries(D))
            t != null && e !== `hasParent` && e !== `mimeType` && (i[e] = t);
          let a = {
            hasParent: u ? `true` : `false`,
            ...(n.chatGptImageMetadata?.mimeType ? { mime_type: n.chatGptImageMetadata.mimeType } : {}),
          };
          (r !== `download` && ((i.liked = k), (a.liked = k ? `like` : `dislike`)),
            e.get(f).logEventWithStatsig?.(A, a, void 0, { eventId: t, data: i }));
        }
      : void 0;
  (r === `download`
    ? l(e, h, { legacyStatsigEventName: C ? A : void 0, metadata: D, isParagen: C }, void 0, j)
    : l(
        e,
        s,
        {
          legacyStatsigEventName: C ? A : void 0,
          ratingType: C
            ? c.CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_PARAGEN
            : c.CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_IMAGEGEN,
          metadata: D,
          liked: k,
        },
        void 0,
        j,
      ),
    C && P(t, n, r));
}
function M() {
  try {
    let e = sessionStorage.getItem(`_sli`);
    if (e) return e;
    let t = o();
    return (sessionStorage.setItem(`_sli`, t), t);
  } catch {
    return;
  }
}
function N(e, t, n) {
  let r = n.chatGptMessageId;
  if (r == null) return;
  let {
      generationId: i,
      parentGenerationId: a,
      sourceOperation: o,
      imageIndex: s,
    } = n.chatGptImageMetadata ?? {},
    c = { conversationId: t, messageId: r, source: `paragen`, model: `gpt-4o`, sourceOperation: o ?? `none` };
  for (let [e, t] of Object.entries({
    generationId: i,
    parentGenerationId: a,
    imageIndex: s,
    mime_type: n.chatGptImageMetadata?.mimeType,
    fileId: /^(file-service|sediment):\/\//.test(n.src ?? ``) ? n.src?.split(`://`)[1] : void 0,
  }))
    t != null && (c[e] = t);
  let l = e.get(f);
  (l.logEventWithStatsig?.(`chatgpt_dalle_image_view_full`, c),
    l.logEventWithStatsig?.(`chatgpt_image_view_full`, c),
    P(t, n, `open`));
}
function P(e, n, r) {
  let i = n.chatGptImageMetadata?.generationId,
    a = n.chatGptMessageId;
  if (!i || !e || !a) return;
  let o =
    r === `open`
      ? `image_view_full`
      : r === `download`
        ? `imagegen_image_paragen_download`
        : `imagegen_image_paragen_rating`;
  d.safePost(`/unified_user_signals`, {
    requestBody: {
      signal_type: o,
      product_surface: `CHAT`,
      signal_metadata: {},
      user_metadata: {},
      signal_detail: {
        common_metadata: { conversation_id: e, message_id: a, image_generation_id: i },
        imagegen_image_paragen_rating:
          o === `imagegen_image_paragen_rating`
            ? { rating: r === `thumbsUp` ? `thumbs_up` : `thumbs_down` }
            : void 0,
      },
    },
  }).catch((e) => {
    t.warning(`Failed to record Paragen image interaction`, {
      safe: { interaction: r },
      sensitive: { error: e },
    });
  });
}
function F() {
  return (F = e(() => {
    (_(), x(), i(), m(), u(), r(), p());
  }))();
}
export { k as a, A as i, F as n, j as r, M as t };
//# sourceMappingURL=image-analytics-e61d1c085ef8.js.map
