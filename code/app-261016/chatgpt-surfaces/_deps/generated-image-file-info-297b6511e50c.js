import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, mCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { SYn as a, iRr as o, tyr as s, xYn as c } from "./app-initial-ad16eaadf81f.js";
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
    (r(),
      t(),
      c(),
      s(),
      (d = i(n, ({ accountId: e, conversationId: t, fileId: n, userId: r }) => ({
        queryKey: [`library-api`, e, r, `generated-image-info`, n, t],
        staleTime: 3e4,
        queryFn: ({ signal: r }) =>
          o.safeGet(`/files/{file_id}/simple`, {
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
//# sourceMappingURL=generated-image-file-info-297b6511e50c.js.map
