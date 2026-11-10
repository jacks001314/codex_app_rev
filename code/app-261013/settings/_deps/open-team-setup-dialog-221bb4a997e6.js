const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./team-setup-dialog-ca3a558b605c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./add-team-member-dialog-9b0d9696e19e.js",
      "./profile-avatar-90effac925f0.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./dialog-utils-21c4d759328d.js",
      "./team-dialogs-3f431f8cab52.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, fPt as n, pPt as r, z4 as i } from "./app-shared-bbfeca5e5737.js";
import { G4n as a, GMr as o, J4n as s, tNr as c } from "./app-initial-5851df3f6cb1.js";
function l(e, t) {
  e.get(o) === t.workspace_id && s(e, u, { accountId: t.workspace_id, team: t });
}
var u;
function d() {
  return (d = e(() => {
    (c(),
      i(),
      a(),
      r(),
      (u = t(() =>
        n(
          () => import(`./team-setup-dialog-ca3a558b605c.js`).then((e) => e.TeamSetupDialog),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )));
  }))();
}
export { l as n, d as t };
//# sourceMappingURL=open-team-setup-dialog-221bb4a997e6.js.map
