const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-share-dialog-433e05659a77.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./profile-avatar-bc7371feb0c0.js",
      "./use-workspace-users-2d1e66aa1ddc.js",
      "./profile-card-596b3632a9d9.js",
      "./state-d01a5a96b9cf.js",
      "./avatar-b3af498c99de.js",
      "./tab-664b022c04a8.js",
      "./sites-share-query-f94060562c21.js",
      "./workspace-team-recipient-suggestions-ab23121c2709.js",
      "./pin-analytics-33d324ed1f7b.js",
      "./src-64808839b2f3.js",
      "./dialog-893b24a048e2.js",
      "./telemetry-ec8e0eb23919.js",
      "./site-preview-4f8756af126e.js",
      "./items-408453923691.js",
      "./src-693e88997826.css",
      "./access-list-2635d079c875.js",
      "./dialog-utils-21c4d759328d.js",
      "./member-count-bfd3da2c099a.js",
      "./modal-footer-412324b30d33.js",
      "./modal-permission-dropdown-6dcd00cb5144.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Hnt as t, OFt as n, Rrt as r, Unt as i, kFt as a } from "./app-shared-2feb3d4c6fcc.js";
import { A5n as o, D5n as s, xMr as c, yMr as l } from "./app-initial-ad16eaadf81f.js";
function u(e, r, a) {
  n(
    async () => {
      let { AppgenShareDialog: e } = await import(`./appgen-share-dialog-433e05659a77.js`);
      return { AppgenShareDialog: e };
    },
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    ]),
    import.meta.url,
  ).then(({ AppgenShareDialog: n }) => {
    if (a.shouldOpen?.() !== !1) {
      try {
        c(e, i, { action: t.CODEX_SITES_SHARING_ACTION_OPENED, projectId: r, source: a.source });
      } catch {}
      (a.onBeforeOpen?.(), o(e, n, { projectId: r, ...a }));
    }
  });
}
function d() {
  return (d = e(() => {
    (r(), s(), l(), a());
  }))();
}
export { u as n, d as t };
//# sourceMappingURL=open-appgen-share-dialog-ccbe887b06fc.js.map
