import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BSt as t,
  Cot as n,
  Fat as r,
  Pat as i,
  Pxt as a,
  Zxt as o,
  irt as s,
  nSt as c,
  rrt as l,
  srt as u,
  wot as d,
  zSt as f,
} from "./app-shared-bbfeca5e5737.js";
import { FTt as p, RSr as m, RTt as h, zSr as g } from "./app-initial-5851df3f6cb1.js";
function _(e, t) {
  if (t != null) for (let n of t) e.add(n.type === `directory` ? `${n.path}/` : n.path);
}
var v, y;
function b() {
  return (b = e(() => {
    (f(),
      a(),
      m(),
      h(),
      d(),
      r(),
      u(),
      (v = o(
        n,
        ({
          directoryPath: e,
          hostId: n,
          environmentId: r,
          includeHidden: a,
          refreshKey: o,
          workspaceRoot: c,
        }) => {
          if (g(n))
            return p(
              r == null ? null : { environmentId: r, workspaceRoot: c, directoryPath: e, includeHidden: a },
              o,
            );
          let u = { hostId: n, workspaceRoot: c, directoryPath: e, includeHidden: a };
          return {
            queryKey: s(`workspace-directory-entries`, u, [n, c, ...(o == null ? [] : [o])]),
            queryFn: ({ signal: e }) => l(`workspace-directory-entries`, { params: u, signal: e }),
            placeholderData: t,
            staleTime: i.FIVE_SECONDS,
          };
        },
      )),
      (y = c(n, (e, { get: t }) => {
        let { expandedPaths: n, ...r } = e,
          i = t(v, r),
          a = new Set();
        _(a, i.data?.entries);
        for (let e of n) e.length !== 0 && _(a, t(v, { ...r, directoryPath: e }).data?.entries);
        return {
          error: i.error,
          files: Array.from(a),
          isEmpty: i.data?.entries.length === 0,
          isLoading: i.isLoading && i.data == null,
        };
      })));
  }))();
}
export { v as n, y as r, b as t };
//# sourceMappingURL=workspace-directory-entries-query-380a93ae197a.js.map
