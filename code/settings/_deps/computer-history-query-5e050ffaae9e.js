import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  G3t as t,
  O3t as n,
  a3t as r,
  hz as i,
  mz as a,
  o3t as o,
} from "./app-initial-f094ef01c64d.js";
var s,
  c,
  l,
  u,
  d,
  f,
  p,
  m = e(() => {
    (n(),
      i(),
      o(),
      (s = [`chronicle-history`]),
      (c = [...s, `suggestions`]),
      (l = [...s, `summary-intervals`]),
      (u = 10080 * 60 * 1e3),
      (d = t(r, () => ({
        enabled: a?.chronicle != null,
        queryKey: s,
        queryFn: () => {
          let e = a?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistory();
        },
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))),
      (f = t(r, () => ({
        enabled: a?.chronicle != null,
        queryKey: c,
        queryFn: () => {
          let e = a?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistorySuggestions();
        },
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))),
      (p = t(r, () => ({
        enabled: a?.chronicle != null,
        queryKey: l,
        queryFn: () => {
          let e = a?.chronicle;
          if (e == null) throw Error(`Computer history is unavailable`);
          return e.listHistorySummaryIntervals({ sinceMs: Date.now() - u });
        },
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 0,
      }))));
  });
export { m as a, p as i, d as n, f as r, s as t };
//# sourceMappingURL=computer-history-query-5e050ffaae9e.js.map
