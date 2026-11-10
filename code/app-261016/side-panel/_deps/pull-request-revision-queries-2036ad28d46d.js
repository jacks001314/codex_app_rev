import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Cit as n,
  Qst as r,
  ZSt as i,
  bit as a,
  mCt as o,
  yCt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Dor as c,
  Hrt as l,
  Rrt as u,
  Srt as d,
  Syr as f,
  Vrt as p,
  brt as m,
  byr as h,
  zrt as g,
} from "./app-initial-ad16eaadf81f.js";
import { r as _, t as v } from "./full-content-metadata-ec0b043a8339.js";
function y(e, t, n) {
  let r = {
    ...t,
    basePath: n.oldPath === `/dev/null` ? null : n.oldPath,
    headPath: n.newPath === `/dev/null` ? null : n.newPath,
  };
  return {
    key: JSON.stringify(a(`gh-pr-revision-file`, r)),
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
var b, x, S, C;
function w() {
  return (w = e(() => {
    (i(),
      c(),
      _(),
      g(),
      p(),
      t(),
      n(),
      f(),
      d(),
      (b = s(r, (e, { get: t }) => {
        let n = t(u, {
          cwd: null,
          hostId: e.account.hostId,
          hostname: e.pullRequest.hostname,
          operationSource: `pull_requests_page`,
        });
        if (n === `loading`) return `loading`;
        if (n !== `available`) return `cli-required`;
        let r = t(m, { hostId: e.account.hostId, hostname: e.pullRequest.hostname, provider: `github-cli` });
        return r.isPending
          ? `loading`
          : r.data?.status === `success` && h(r.data.account) === h(e.account)
            ? `available`
            : `account-mismatch`;
      })),
      (x = o(r, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: a(`gh-pr-review-snapshot`, e),
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        queryFn: ({ signal: t }) =>
          l(`gh-pr-review-snapshot`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (S = o(r, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: a(`gh-pr-revision-diff`, e),
        queryFn: ({ signal: t }) => l(`gh-pr-revision-diff`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (C = o(r, (e) => ({
        enabled: !1,
        queryKey: a(`gh-pr-revision-file`, e),
        queryFn: ({ signal: t }) => l(`gh-pr-revision-file`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))));
  }))();
}
export { S as a, b as i, w as n, x as r, y as t };
//# sourceMappingURL=pull-request-revision-queries-2036ad28d46d.js.map
