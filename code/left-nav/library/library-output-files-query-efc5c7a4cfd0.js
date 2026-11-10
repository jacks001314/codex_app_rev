import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  G3t as t,
  O3t as n,
  TJt as r,
  a3t as i,
  hz as a,
  mz as o,
  o3t as s,
  wJt as c,
} from "./app-initial-f094ef01c64d.js";
var l,
  u,
  d = e(() => {
    (n(),
      a(),
      s(),
      r(),
      (l = [`generated-images`]),
      (u = t(i, () => ({
        queryFn: async () => {
          let e = o.libraryFiles;
          if (e == null) throw Error(`Library images are unavailable`);
          return e.listGeneratedImages();
        },
        queryKey: l,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: c.FIVE_SECONDS,
      }))));
  }),
  f,
  p = e(() => {
    (n(),
      a(),
      s(),
      r(),
      (f = t(i, () => ({
        queryFn: async () => {
          let e = o.libraryFiles;
          if (e == null) throw Error(`Library files are unavailable`);
          return e.listOutputFiles();
        },
        queryKey: [`projectless-output-files`],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: c.FIVE_SECONDS,
      }))));
  });
export { d as i, f as n, u as r, p as t };
//# sourceMappingURL=library-output-files-query-efc5c7a4cfd0.js.map
