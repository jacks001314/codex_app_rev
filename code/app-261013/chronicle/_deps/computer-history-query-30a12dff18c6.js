import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $xt as t, Cot as n, Kat as r, Pxt as i, qat as a, wot as o } from "./app-shared-bbfeca5e5737.js";
var s, c, l, u, d, f, p;
function m() {
  return (m = e(() => {
    (i(),
      a(),
      o(),
      (s = [`chronicle-history`]),
      (c = [...s, `suggestions`]),
      (l = [...s, `summary-intervals`]),
      (u = 6048e5),
      (d = t(n, () => ({
        enabled: r?.chronicle != null,
        queryKey: s,
        queryFn: () => {
          let e = r?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistory();
        },
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))),
      (f = t(n, () => ({
        enabled: r?.chronicle != null,
        queryKey: c,
        queryFn: () => {
          let e = r?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistorySuggestions();
        },
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))),
      (p = t(n, () => ({
        enabled: r?.chronicle != null,
        queryKey: l,
        queryFn: () => {
          let e = r?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistorySummaryIntervals({ sinceMs: Date.now() - u });
        },
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))));
  }))();
}
export { m as a, p as i, d as n, f as r, s as t };
//# sourceMappingURL=computer-history-query-30a12dff18c6.js.map
