import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, bCt as i, iwt as a, owt as o } from "./app-shared-2feb3d4c6fcc.js";
import { Bdn as s, Ddn as c, Pdn as l, S_n as u, hdn as d, y_n as f } from "./app-initial-ad16eaadf81f.js";
var p;
function m() {
  return (m = e(() => {
    (a(),
      r(),
      t(),
      f(),
      d(),
      (p = i(
        n,
        (e, { scope: t }) => t.query.getData(l, e)?.metadata,
        (e, { scope: t, set: n }) => {
          let r = t.query.snapshot(l, e),
            i = t.query.snapshot(c, e),
            a = t.query.snapshot(s),
            d = () =>
              n(
                [
                  r.getData()?.metadata,
                  i.getData()?.metadata,
                  a.getData()?.items.find((t) => t.page_id === e),
                ].reduce((e, t) => (t != null && (e == null || u(t, e)) ? t : e), void 0),
              );
          return (
            d(),
            t.queryClient.getQueryCache().subscribe((e) => {
              (e.type === `added` || e.type === `updated` || e.type === `removed`) &&
                [r, i, a].some(({ queryKey: t }) => o({ queryKey: t, exact: !0 }, e.query)) &&
                d();
            })
          );
        },
        { autoDispose: 6e4 },
      )));
  }))();
}
export { m as n, p as t };
//# sourceMappingURL=cached-page-metadata-4ec7d429eb36.js.map
