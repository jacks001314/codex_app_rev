const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./document-797985de2310.js",
      "./document-cd4676e325b8.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./sandbox-runtime-51ae808b9dbc.js",
      "./style-c86794dc03a9.js",
      "./style-526fd4f4e29c.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-4d86db640757.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
import { n as r, t as i } from "./document-179c5532ee3b.js";
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
                  () => import(`./style-c86794dc03a9.js`),
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
//# sourceMappingURL=runtime-7c1bd5d08a7b.js.map
