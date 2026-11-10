import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, VSt as r, rSt as i, wot as a, zSt as o } from "./app-shared-bbfeca5e5737.js";
import { Bsn as s, Ksn as c, Nsn as l, ehn as u, rhn as d, xsn as f } from "./app-initial-5851df3f6cb1.js";
var p;
function m() {
  return (m = e(() => {
    (o(),
      n(),
      a(),
      u(),
      f(),
      (p = i(
        t,
        (e, { scope: t }) => t.query.getData(s, e)?.metadata,
        (e, { scope: t, set: n }) => {
          let i = t.query.snapshot(s, e),
            a = t.query.snapshot(l, e),
            o = t.query.snapshot(c),
            u = () =>
              n(
                [
                  i.getData()?.metadata,
                  a.getData()?.metadata,
                  o.getData()?.items.find((t) => t.page_id === e),
                ].reduce((e, t) => (t != null && (e == null || d(t, e)) ? t : e), void 0),
              );
          return (
            u(),
            t.queryClient.getQueryCache().subscribe((e) => {
              (e.type === `added` || e.type === `updated` || e.type === `removed`) &&
                [i, a, o].some(({ queryKey: t }) => r({ queryKey: t, exact: !0 }, e.query)) &&
                u();
            })
          );
        },
        { autoDispose: 6e4 },
      )));
  }))();
}
export { m as n, p as t };
//# sourceMappingURL=cached-page-metadata-7a5a83af28c7.js.map
