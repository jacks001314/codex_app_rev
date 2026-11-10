const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-8a3f7d087f97.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./analytics-5ad18191f6b9.js",
      "./query-e80b55bdefca.js",
      "./cookies-2dc3370d7066.js",
      "./history-cd3d17d43ae4.js",
      "./google-chrome-46ba3e11bf10.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import { G4n as i, J4n as a, K4n as o } from "./app-initial-5851df3f6cb1.js";
import { n as s, t as c } from "./availability-27d440cdfa6b.js";
import { a as l, t as u } from "./analytics-5ad18191f6b9.js";
var d, f;
function p() {
  return (p = e(() => {
    ((d = r()),
      n(),
      (f = (0, d.lazy)(async () => ({
        default: (
          await t(
            async () => {
              let { BrowserProfileImportDialogModal: e } = await import(`./dialog-8a3f7d087f97.js`);
              return { BrowserProfileImportDialogModal: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            import.meta.url,
          )
        ).BrowserProfileImportDialogModal,
      }))));
  }))();
}
function m(e, t, n, r) {
  if (t == null || !e.get(s)) return !1;
  if (o(e, f)) return !0;
  let i = r ?? crypto.randomUUID();
  return (l(e, n, i), a(e, f, { entryPoint: n, flowId: i, service: t }), !0);
}
function h() {
  return (h = e(() => {
    (i(), u(), c(), p());
  }))();
}
export { m as n, h as t };
//# sourceMappingURL=dialog-launcher-40376074d533.js.map
