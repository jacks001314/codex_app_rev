import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BYn as t,
  VYn as n,
  em as r,
  iRr as i,
  tm as a,
  tyr as o,
  zYn as s,
} from "./app-initial-ad16eaadf81f.js";
async function c({ image: e, sharedConversationId: t, appUri: r, accountId: a, signal: o }) {
  let c = l(e);
  if (c == null) throw Error(`This image is not available for shopping`);
  let { assetPointer: u, purchaseHints: d } = c;
  o.throwIfAborted();
  let f = { "ChatGPT-Account-ID": a },
    p = u.slice(11),
    m = n(p),
    h = t ?? m?.sharedConversationId,
    g;
  if (h != null) {
    let e = await s(
      () =>
        i.safeGet(`/share/{shared_conversation_id}/file/{file_id}`, {
          additionalHeaders: f,
          signal: o,
          parameters: { path: { shared_conversation_id: h, file_id: m?.fileId ?? p } },
        }),
      `The shared image is not ready to download`,
      o,
    );
    if (e.requestHeaders != null) throw Error(`The shopping app requires a public image URL`);
    g = e.downloadUrl;
  } else
    (await i.safePost(`/ecosystem/file_authorize_app`, {
      additionalHeaders: f,
      signal: o,
      requestBody: { file_ids: [u], authorized_app_uri: r },
    }),
      o.throwIfAborted(),
      (g = (
        await i.safePost(`/ecosystem/file_download_url`, {
          additionalHeaders: f,
          signal: o,
          requestBody: { file_id: u, app_uri: r },
        })
      ).download_url));
  if ((o.throwIfAborted(), new URL(g).protocol !== `https:`))
    throw Error(`The shopping app requires a public HTTPS image URL`);
  let _ = c.generationDimensions?.width ?? e.width,
    v = c.generationDimensions?.height ?? e.height;
  return {
    checkout_session: {
      items: [
        {
          quantity: 1,
          generated_images: [
            {
              ...(c.generationId == null ? {} : { id: c.generationId }),
              ...(_ != null && _ > 0 ? { width: _ } : {}),
              ...(v != null && v > 0 ? { height: v } : {}),
              ...(c.mimeType == null ? {} : { mime_type: c.mimeType }),
              ...(c.transparentBackground == null ? {} : { transparent_background: c.transparentBackground }),
              ...(c.isSticker == null ? {} : { is_sticker: c.isSticker }),
              url: g,
              generated_caption: d,
            },
          ],
        },
      ],
    },
  };
}
function l(e) {
  let t = e.chatGptImageMetadata,
    n = e.src,
    i = t?.purchaseHints?.trim();
  return e.status !== `completed` ||
    e.isPreview ||
    !r({ isAnimated: e.isAnimated, mimeType: t?.mimeType }).canShop ||
    !n?.startsWith(`sediment://`) ||
    !i
    ? null
    : { ...t, assetPointer: n, purchaseHints: i };
}
function u() {
  return (u = e(() => {
    (a(), o(), t());
  }))();
}
export { u as n, c as r, l as t };
//# sourceMappingURL=shop-this-image-input-56157b01b29a.js.map
