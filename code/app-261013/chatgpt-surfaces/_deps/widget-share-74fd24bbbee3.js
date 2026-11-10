import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _xt as t, vxt as n } from "./app-shared-bbfeca5e5737.js";
import {
  BIt as r,
  G4n as i,
  HIt as a,
  J4n as o,
  KIt as s,
  QDr as c,
  VIt as l,
  WIt as u,
  XDr as d,
  XIt as f,
  YIt as p,
  pZn as m,
  yjn as h,
} from "./app-initial-5851df3f6cb1.js";
import { r as g, t as _ } from "./chatgpt-conversation-share-dialog-6e637f73793e.js";
function v(
  e,
  { serverId: t, pathname: r, messageId: i, contentReferenceIndex: a, nativeWidgetResolutionId: o },
) {
  return (
    t != null &&
    !e.isStreaming &&
    !e.isTemporaryChat &&
    !e.shouldBlockExternalEgress &&
    e.shareEnabled === !0 &&
    n(`/s/:postId`, r) == null &&
    n(`/share/:shareId`, r) == null &&
    i.length > 0 &&
    (o == null ? a != null && Number.isSafeInteger(a) && a >= 0 : o.length > 0 && a == null)
  );
}
function y(
  e,
  t,
  { messageId: n, contentReferenceIndex: i, nativeWidgetResolutionId: d, metadata: f, preview: h, title: g },
) {
  let y = e.get(m, t.conversationId);
  if (
    y == null ||
    !v(t, {
      serverId: y,
      pathname: e.value.pathname,
      messageId: n,
      ...(d == null ? { contentReferenceIndex: i } : { nativeWidgetResolutionId: d }),
    })
  )
    return;
  let b = crypto.randomUUID();
  (c(e, s, {
    action: r.CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED,
    actor: l.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
    attachmentType: a.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET,
    contentType: u.CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE,
    source: p.CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION,
    widgetMetadata: f,
    shareSessionId: b,
  }),
    o(e, _, {
      shareSessionId: b,
      currentNodeId: n,
      serverConversationId: y,
      title: g ?? null,
      widget: {
        metadata: f,
        attachment: {
          kind: `widget`,
          conversation_id: y,
          message_id: n,
          ...(d == null ? { content_reference_index: i } : { native_widget_resolution_id: d }),
        },
        preview: h,
      },
    }));
}
function b() {
  return (b = e(() => {
    (f(), t(), i(), d(), g(), h());
  }))();
}
export { b as n, y as r, v as t };
//# sourceMappingURL=widget-share-74fd24bbbee3.js.map
