import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Hk as t,
  O5t as n,
  Vk as r,
  dJt as i,
  fJt as a,
  q5t as o,
} from "./app-shared-7552fc8d5d82.js";
var s, c, l, u, d, f, p;
function m() {
  return (m = e(() => {
    (n(),
      t(),
      a(),
      (s = [`chronicle-history`]),
      (c = [...s, `suggestions`]),
      (l = [...s, `summary-intervals`]),
      (u = 6048e5),
      (d = o(i, () => ({
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
      (f = o(i, () => ({
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
      (p = o(i, () => ({
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
//# sourceMappingURL=computer-history-query-7b8f19bb30d6.js.map
