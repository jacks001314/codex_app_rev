const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-2622312d7a5e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-7552fc8d5d82.js",
      "./app-shared-342447930c78.css",
      "./app-initial-3916b423772b.js",
      "./app-initial-e55cd978d577.css",
      "./app-primary-7b889402e22e.js",
      "./app-primary-547a6c7b4fb3.css",
      "./analytics-da85ddadd1f1.js",
      "./query-36ed69354bf8.js",
      "./cookies-95d008ce5873.js",
      "./history-c50a4cc9cc78.js",
      "./google-chrome-7a7ba851260d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  cun as t,
  iKt as n,
  lun as r,
  nKt as i,
  rKt as a,
  vdn as o,
} from "./app-shared-7552fc8d5d82.js";
import { n as s, t as c } from "./availability-2f8ef663c6d2.js";
import { a as l, t as u } from "./analytics-da85ddadd1f1.js";
var d, f;
function p() {
  return (p = e(() => {
    ((d = o()),
      r(),
      (f = (0, d.lazy)(async () => ({
        default: (
          await t(
            async () => {
              let { BrowserProfileImportDialogModal: e } = await import(`./dialog-2622312d7a5e.js`);
              return { BrowserProfileImportDialogModal: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            import.meta.url,
          )
        ).BrowserProfileImportDialogModal,
      }))));
  }))();
}
function m(e, t, r, i) {
  if (t == null || !e.get(s)) return !1;
  if (a(e, f)) return !0;
  let o = i ?? crypto.randomUUID();
  return (l(e, r, o), n(e, f, { entryPoint: r, flowId: o, service: t }), !0);
}
function h() {
  return (h = e(() => {
    (i(), u(), c(), p());
  }))();
}
export { m as n, h as t };
//# sourceMappingURL=dialog-launcher-23334dde421b.js.map
