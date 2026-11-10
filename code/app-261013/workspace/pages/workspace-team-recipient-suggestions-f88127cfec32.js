import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import { Rkr as a, xkr as o, zkr as s } from "./app-initial-5851df3f6cb1.js";
var c, l;
function u() {
  return (u = e(() => {
    (n(),
      i(),
      o(),
      (c = r(t, (e, { get: t }) => t(a, e))),
      (l = r(t, (e, { get: t }) => {
        if (t(c, e)) {
          let { data: n, isError: r, isLoading: i } = t(s, e);
          return { data: n?.filter((t) => t.workspace_id === e), isError: r, isLoading: i };
        }
        return null;
      })));
  }))();
}
export { l as n, c as r, u as t };
//# sourceMappingURL=workspace-team-recipient-suggestions-f88127cfec32.js.map
