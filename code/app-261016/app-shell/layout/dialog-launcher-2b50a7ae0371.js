const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-d8677da91aae.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./analytics-7a15d48cae72.js",
      "./query-17e618b0e4ab.js",
      "./cookies-5f2da8ba7e30.js",
      "./history-51683e41b28f.js",
      "./google-chrome-9ae363af285e.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, OFt as n, kFt as r } from "./app-shared-2feb3d4c6fcc.js";
import { A5n as i, D5n as a, O5n as o } from "./app-initial-ad16eaadf81f.js";
import { n as s, t as c } from "./availability-2072626e30a8.js";
import { a as l, t as u } from "./analytics-7a15d48cae72.js";
var d, f;
function p() {
  return (p = e(() => {
    ((d = t()),
      r(),
      (f = (0, d.lazy)(async () => ({
        default: (
          await n(
            async () => {
              let { BrowserProfileImportDialogModal: e } = await import(`./dialog-d8677da91aae.js`);
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
  let a = r ?? crypto.randomUUID();
  return (l(e, n, a), i(e, f, { entryPoint: n, flowId: a, service: t }), !0);
}
function h() {
  return (h = e(() => {
    (a(), u(), c(), p());
  }))();
}
export { m as n, h as t };
//# sourceMappingURL=dialog-launcher-2b50a7ae0371.js.map
