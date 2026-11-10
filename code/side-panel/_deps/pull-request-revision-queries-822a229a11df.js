import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Ig as t,
  O3t as n,
  U3t as r,
  _Jt as i,
  a3t as a,
  a_ as o,
  eMt as s,
  e_ as c,
  i6t as l,
  mJt as u,
  nWt as d,
  n_ as f,
  o3t as p,
  o_ as m,
  rMt as h,
  zg as g,
} from "./app-initial-f094ef01c64d.js";
import { r as _, t as v } from "./full-content-metadata-afbc573bb0ec.js";
function y(e, t, n) {
  let r = {
    ...t,
    basePath: n.oldPath === `/dev/null` ? null : n.oldPath,
    headPath: n.newPath === `/dev/null` ? null : n.newPath,
  };
  return {
    key: JSON.stringify(u(`gh-pr-revision-file`, r)),
    load: async () => {
      let t = e.query.getData(C, r),
        i = t != null && t.status !== `error` ? t : (await e.get(C, r).refetch()).data;
      if (i?.status !== `success`) return { type: i?.status ?? `error` };
      let a = v(
        n.metadata,
        i.baseContent.match(/[^\n]*\n|[^\n]+$/g) ?? [],
        i.headContent.match(/[^\n]*\n|[^\n]+$/g) ?? [],
      );
      return a == null ? { type: `unavailable` } : { type: `success`, metadata: a };
    },
  };
}
var b,
  x,
  S,
  C,
  w = e(() => {
    (n(),
      d(),
      _(),
      f(),
      o(),
      p(),
      i(),
      h(),
      g(),
      (b = l(a, (e, { get: n }) => {
        let r = n(c, {
          cwd: null,
          hostId: e.account.hostId,
          hostname: e.pullRequest.hostname,
          operationSource: `pull_requests_page`,
        });
        if (r === `loading`) return `loading`;
        if (r !== `available`) return `cli-required`;
        let i = n(t, {
          hostId: e.account.hostId,
          hostname: e.pullRequest.hostname,
          provider: `github-cli`,
        });
        return i.isPending
          ? `loading`
          : i.data?.status === `success` && s(i.data.account) === s(e.account)
            ? `available`
            : `account-mismatch`;
      })),
      (x = r(a, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: u(`gh-pr-review-snapshot`, e),
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        queryFn: ({ signal: t }) =>
          m(`gh-pr-review-snapshot`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (S = r(a, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: u(`gh-pr-revision-diff`, e),
        queryFn: ({ signal: t }) =>
          m(`gh-pr-revision-diff`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (C = r(a, (e) => ({
        enabled: !1,
        queryKey: u(`gh-pr-revision-file`, e),
        queryFn: ({ signal: t }) =>
          m(`gh-pr-revision-file`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))));
  });
export { S as a, b as i, w as n, x as r, y as t };
//# sourceMappingURL=pull-request-revision-queries-822a229a11df.js.map
