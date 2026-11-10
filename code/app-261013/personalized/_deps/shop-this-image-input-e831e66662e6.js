import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ii as t,
  Li as n,
  Ymr as r,
  _Kn as i,
  ehr as a,
  gKn as o,
  vKn as s,
} from "./app-initial-5851df3f6cb1.js";
async function c({ image: e, sharedConversationId: t, appUri: n, accountId: i, signal: a }) {
  let c = l(e);
  if (c == null) throw Error(`This image is not available for shopping`);
  let { assetPointer: u, purchaseHints: d } = c;
  a.throwIfAborted();
  let f = { "ChatGPT-Account-ID": i },
    p = u.slice(11),
    m = s(p),
    h = t ?? m?.sharedConversationId,
    g;
  if (h != null) {
    let e = await o(
      () =>
        r.safeGet(`/share/{shared_conversation_id}/file/{file_id}`, {
          additionalHeaders: f,
          signal: a,
          parameters: { path: { shared_conversation_id: h, file_id: m?.fileId ?? p } },
        }),
      `The shared image is not ready to download`,
      a,
    );
    if (e.requestHeaders != null) throw Error(`The shopping app requires a public image URL`);
    g = e.downloadUrl;
  } else
    (await r.safePost(`/ecosystem/file_authorize_app`, {
      additionalHeaders: f,
      signal: a,
      requestBody: { file_ids: [u], authorized_app_uri: n },
    }),
      a.throwIfAborted(),
      (g = (
        await r.safePost(`/ecosystem/file_download_url`, {
          additionalHeaders: f,
          signal: a,
          requestBody: { file_id: u, app_uri: n },
        })
      ).download_url));
  if ((a.throwIfAborted(), new URL(g).protocol !== `https:`))
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
  let n = e.chatGptImageMetadata,
    r = e.src,
    i = n?.purchaseHints?.trim();
  return e.status !== `completed` ||
    e.isPreview ||
    !t({ isAnimated: e.isAnimated, mimeType: n?.mimeType }).canShop ||
    !r?.startsWith(`sediment://`) ||
    !i
    ? null
    : { ...n, assetPointer: r, purchaseHints: i };
}
function u() {
  return (u = e(() => {
    (n(), a(), i());
  }))();
}
export { u as n, c as r, l as t };
//# sourceMappingURL=shop-this-image-input-e831e66662e6.js.map
