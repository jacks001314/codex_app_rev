import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, mCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { BRr as a, iRr as o, tyr as s, wLr as c, zRr as l } from "./app-initial-ad16eaadf81f.js";
function u(e, t) {
  return { id: e.file_id, imageReference: !0, mimeType: null, name: t, source: `library` };
}
var d;
function f() {
  return (f = e(() => {
    (r(),
      c(),
      t(),
      s(),
      (d = i(n, (e, { get: t }) => {
        let n = t(l),
          r = t(a);
        return {
          enabled: n != null && r != null,
          queryKey: [`chatgpt-images`, `recent-uploads`, n, r, e],
          staleTime: 12e4,
          queryFn: ({ signal: t }) =>
            o.safeGet(`/my/recent/uploaded_images`, {
              additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
              parameters: { query: { limit: 25, images_app_only: e } },
              signal: t,
            }),
        };
      })));
  }))();
}
export { f as n, d as r, u as t };
//# sourceMappingURL=recent-uploads-f604dd924675.js.map
