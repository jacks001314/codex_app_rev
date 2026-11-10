import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, Zxt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { GMr as a, XMr as o, Ymr as s, ehr as c, tNr as l } from "./app-initial-5851df3f6cb1.js";
function u(e, t) {
  return { id: e.file_id, imageReference: !0, mimeType: null, name: t, source: `library` };
}
var d;
function f() {
  return (f = e(() => {
    (n(),
      l(),
      i(),
      c(),
      (d = r(t, (e, { get: t }) => {
        let n = t(a),
          r = t(o);
        return {
          enabled: n != null && r != null,
          queryKey: [`chatgpt-images`, `recent-uploads`, n, r, e],
          staleTime: 12e4,
          queryFn: ({ signal: t }) =>
            s.safeGet(`/my/recent/uploaded_images`, {
              additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
              parameters: { query: { limit: 25, images_app_only: e } },
              signal: t,
            }),
        };
      })));
  }))();
}
export { f as n, d as r, u as t };
//# sourceMappingURL=recent-uploads-106733e87eb0.js.map
