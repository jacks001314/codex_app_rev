import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, yCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { GNr as a, cPr as o, lPr as s } from "./app-initial-ad16eaadf81f.js";
var c, l;
function u() {
  return (u = e(() => {
    (r(),
      t(),
      a(),
      (c = i(n, (e, { get: t }) => t(o, e))),
      (l = i(n, (e, { get: t }) => {
        if (t(c, e)) {
          let { data: n, isError: r, isLoading: i } = t(s, e);
          return { data: n?.filter((t) => t.workspace_id === e), isError: r, isLoading: i };
        }
        return null;
      })));
  }))();
}
export { l as n, c as r, u as t };
//# sourceMappingURL=workspace-team-recipient-suggestions-ab23121c2709.js.map
