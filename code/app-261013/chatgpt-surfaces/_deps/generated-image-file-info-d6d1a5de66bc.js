import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, Zxt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { $Gn as a, QGn as o, Ymr as s, ehr as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  return e.status !== `completed` || e.isPreview || e.src == null || !a(e.src)
    ? null
    : e.src.slice(e.src.indexOf(`://`) + 3);
}
function u(e, t, n) {
  if (e == null) return;
  let r = l(e);
  if (r != null)
    return {
      conversationId: t,
      identity: { type: `file`, fileId: r },
      mimeType: e.chatGptImageMetadata?.mimeType,
      name: n,
    };
}
var d;
function f() {
  return (f = e(() => {
    (n(),
      i(),
      o(),
      c(),
      (d = r(t, ({ accountId: e, conversationId: t, fileId: n, userId: r }) => ({
        queryKey: [`library-api`, e, r, `generated-image-info`, n, t],
        staleTime: 3e4,
        queryFn: ({ signal: r }) =>
          s.safeGet(`/files/{file_id}/simple`, {
            additionalHeaders: { "ChatGPT-Account-ID": e },
            parameters: { path: { file_id: n }, query: { conversation_id: t } },
            signal: r,
          }),
        refetchInterval: (e) =>
          e.state.status === `success` &&
          e.state.data?.library_file_id == null &&
          e.state.dataUpdateCount < 6 &&
          Math.min(2e3 * 2 ** (e.state.dataUpdateCount - 1), 8e3),
      }))));
  }))();
}
export { f as i, l as n, u as r, d as t };
//# sourceMappingURL=generated-image-file-info-d6d1a5de66bc.js.map
