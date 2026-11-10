import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Qst as r,
  ZSt as i,
  awt as a,
  iwt as o,
  mCt as s,
  yCt as c,
  zst as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  __ as u,
  aDr as d,
  g7t as f,
  iDr as p,
  p7t as m,
  v_ as h,
  y_ as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e, t) {
  if (t != null) for (let n of t) e.add(n.type === `directory` ? `${n.path}/` : n.path);
}
var v, y;
function b() {
  return (b = e(() => {
    (o(),
      i(),
      p(),
      f(),
      h(),
      t(),
      n(),
      (v = s(
        r,
        ({
          directoryPath: e,
          hostId: t,
          environmentId: n,
          includeHidden: r,
          refreshKey: i,
          workspaceRoot: o,
        }) => {
          if (d(t))
            return m(
              n == null ? null : { environmentId: n, workspaceRoot: o, directoryPath: e, includeHidden: r },
              i,
            );
          let s = { hostId: t, workspaceRoot: o, directoryPath: e, includeHidden: r };
          return {
            queryKey: u(s, [t, o, ...(i == null ? [] : [i])]),
            queryFn: ({ signal: e }) => g(s, e),
            placeholderData: a,
            staleTime: l.FIVE_SECONDS,
          };
        },
      )),
      (y = c(r, (e, { get: t }) => {
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
//# sourceMappingURL=workspace-directory-entries-query-6519c19f9a40.js.map
