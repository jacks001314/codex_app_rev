const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-share-dialog-4ca350dc7fb0.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./appgen-access-e530f599dd35.js",
      "./appgen-site-card-086b2aabeb08.js",
      "./dialog-action-cd89a4b0ac08.js",
      "./permission-dropdown-62b3ddc52f74.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  D1t as t,
  O1t as n,
  QXt as r,
  Uat as i,
  Vat as a,
  _mn as o,
  e0t as s,
  eZt as c,
  gmn as l,
} from "./app-initial-f094ef01c64d.js";
function u(e, r, a) {
  l(
    async () => {
      let { AppgenShareDialog: e } = await import(`./appgen-share-dialog-4ca350dc7fb0.js`);
      return { AppgenShareDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    import.meta.url,
  ).then(({ AppgenShareDialog: o }) => {
    try {
      c(e, n, { action: t.CODEX_SITES_SHARING_ACTION_OPENED, projectId: r, source: a.source });
    } catch {}
    i(e, o, { projectId: r, ...a });
  });
}
var d = e(() => {
  (s(), a(), r(), o());
});
export { u as n, d as t };
//# sourceMappingURL=open-appgen-share-dialog-5b55c8a7fe5b.js.map
