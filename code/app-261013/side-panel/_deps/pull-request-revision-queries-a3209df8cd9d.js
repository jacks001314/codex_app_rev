import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  Zxt as r,
  irt as i,
  nSt as a,
  srt as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ahr as c,
  Ohr as l,
  Qtt as u,
  _nt as d,
  bnt as f,
  ent as p,
  gnt as m,
  rrr as h,
  ynt as g,
} from "./app-initial-5851df3f6cb1.js";
import { r as _, t as v } from "./full-content-metadata-4cfa7aef5857.js";
function y(e, t, n) {
  let r = {
    ...t,
    basePath: n.oldPath === `/dev/null` ? null : n.oldPath,
    headPath: n.newPath === `/dev/null` ? null : n.newPath,
  };
  return {
    key: JSON.stringify(i(`gh-pr-revision-file`, r)),
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
    (n(),
      h(),
      _(),
      d(),
      g(),
      s(),
      o(),
      c(),
      p(),
      (b = a(t, (e, { get: t }) => {
        let n = t(m, {
          cwd: null,
          hostId: e.account.hostId,
          hostname: e.pullRequest.hostname,
          operationSource: `pull_requests_page`,
        });
        if (n === `loading`) return `loading`;
        if (n !== `available`) return `cli-required`;
        let r = t(u, { hostId: e.account.hostId, hostname: e.pullRequest.hostname, provider: `github-cli` });
        return r.isPending
          ? `loading`
          : r.data?.status === `success` && l(r.data.account) === l(e.account)
            ? `available`
            : `account-mismatch`;
      })),
      (x = r(t, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: i(`gh-pr-review-snapshot`, e),
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        queryFn: ({ signal: t }) =>
          f(`gh-pr-review-snapshot`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (S = r(t, (e, { get: t }) => ({
        enabled: t(b, e) === `available`,
        queryKey: i(`gh-pr-revision-diff`, e),
        queryFn: ({ signal: t }) => f(`gh-pr-revision-diff`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))),
      (C = r(t, (e) => ({
        enabled: !1,
        queryKey: i(`gh-pr-revision-file`, e),
        queryFn: ({ signal: t }) => f(`gh-pr-revision-file`, e, { signal: t, source: `pull_requests_page` }),
        staleTime: 1 / 0,
      }))));
  }))();
}
export { S as a, b as i, w as n, x as r, y as t };
//# sourceMappingURL=pull-request-revision-queries-a3209df8cd9d.js.map
