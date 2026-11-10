const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./appgen-share-dialog-54025d089e3f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./profile-avatar-90effac925f0.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./profile-card-24cf744f537b.js",
      "./state-23e2d7b7e609.js",
      "./avatar-ed18f22a2837.js",
      "./tab-214abc64feae.js",
      "./sites-share-query-8b03740b1df6.js",
      "./workspace-team-recipient-suggestions-f88127cfec32.js",
      "./pin-analytics-417acc826387.js",
      "./src-c65a930b3c0e.js",
      "./dialog-bd1854abad10.js",
      "./site-preview-b226ffd1d9b7.js",
      "./telemetry-754c57f9b0cd.js",
      "./src-693e88997826.css",
      "./access-list-99033c7522ef.js",
      "./dialog-utils-21c4d759328d.js",
      "./member-count-5e188d46464b.js",
      "./modal-footer-8c17ec58d94e.js",
      "./modal-permission-dropdown-75a4787ca1b8.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Htt as t, Rnt as n, Utt as r, fPt as i, pPt as a } from "./app-shared-bbfeca5e5737.js";
import { G4n as o, J4n as s, QDr as c, XDr as l } from "./app-initial-5851df3f6cb1.js";
function u(e, n, a) {
  i(
    async () => {
      let { AppgenShareDialog: e } = await import(`./appgen-share-dialog-54025d089e3f.js`);
      return { AppgenShareDialog: e };
    },
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    ]),
    import.meta.url,
  ).then(({ AppgenShareDialog: i }) => {
    if (a.shouldOpen?.() !== !1) {
      try {
        c(e, r, { action: t.CODEX_SITES_SHARING_ACTION_OPENED, projectId: n, source: a.source });
      } catch {}
      (a.onBeforeOpen?.(), s(e, i, { projectId: n, ...a }));
    }
  });
}
function d() {
  return (d = e(() => {
    (n(), o(), l(), a());
  }))();
}
export { u as n, d as t };
//# sourceMappingURL=open-appgen-share-dialog-8d437cfd3c67.js.map
