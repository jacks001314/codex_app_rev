const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./team-setup-dialog-39ce2031e6a9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./add-team-member-dialog-52c6774247a8.js",
      "./profile-avatar-bc7371feb0c0.js",
      "./use-workspace-users-2d1e66aa1ddc.js",
      "./dialog-utils-21c4d759328d.js",
      "./team-dialogs-a60bc21e8ccf.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { F3 as t, I3 as n, OFt as r, kFt as i } from "./app-shared-2feb3d4c6fcc.js";
import { A5n as a, D5n as o, wLr as s, zRr as c } from "./app-initial-ad16eaadf81f.js";
function l(e, t) {
  e.get(c) === t.workspace_id && a(e, u, { accountId: t.workspace_id, team: t });
}
var u;
function d() {
  return (d = e(() => {
    (s(),
      t(),
      o(),
      i(),
      (u = n(() =>
        r(
          () => import(`./team-setup-dialog-39ce2031e6a9.js`).then((e) => e.TeamSetupDialog),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )));
  }))();
}
export { l as n, d as t };
//# sourceMappingURL=open-team-setup-dialog-68ca029b216b.js.map
