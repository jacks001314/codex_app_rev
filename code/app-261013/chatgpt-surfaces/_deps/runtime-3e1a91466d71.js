const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./document-797985de2310.js",
      "./document-cd4676e325b8.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./sandbox-runtime-51ae808b9dbc.js",
      "./style-a4e78aabb214.js",
      "./style-9afbb349e873.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-71492d0e9e92.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
import { n as r, t as i } from "./document-4b4a17f977a4.js";
var a, o;
function s() {
  return (s = e(() => {
    (i(),
      n(),
      (a = {
        ...r,
        async buildHtml(e, n, i) {
          let [{ createSiteEditorDocument: a }, { default: o }, { COMMENT_BUBBLE_ICON: s }] =
              await Promise.all([
                t(() => import(`./document-797985de2310.js`), __vite__mapDeps([0, 1, 2]), import.meta.url),
                t(
                  () => import(`./sandbox-runtime-51ae808b9dbc.js`),
                  __vite__mapDeps([3, 2]),
                  import.meta.url,
                ),
                t(
                  () => import(`./style-a4e78aabb214.js`),
                  __vite__mapDeps([4, 5, 2, 6, 7, 8, 9, 10, 11]),
                  import.meta.url,
                ),
              ]),
            c = `<svg xmlns="http://www.w3.org/2000/svg" width="${s.width}" height="${s.height}" viewBox="0 0 ${s.width} ${s.height}"><path d="${s.path}" fill="${s.fill}" stroke="${s.stroke}" stroke-width="${s.strokeWidth}"/></svg>`,
            { previewHtml: l } = a(e, {
              script: o,
              cursor: `url("data:image/svg+xml,${encodeURIComponent(c)}") ${s.hotspotByMode.comment.x} ${Math.min(s.height - 1, s.hotspotByMode.comment.y)}, crosshair`,
            });
          return r.buildHtml(l, n, i);
        },
      }),
      (o = { ...a, csp: { ...a.csp, disableNetworkRequests: !0 } }));
  }))();
}
export { a as n, o as r, s as t };
//# sourceMappingURL=runtime-3e1a91466d71.js.map
