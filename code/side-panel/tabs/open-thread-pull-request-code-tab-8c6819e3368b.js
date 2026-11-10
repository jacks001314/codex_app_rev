const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pull-request-revision-tab-43d3931efac0.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./pull-request-revision-queries-822a229a11df.js",
      "./full-content-metadata-afbc573bb0ec.js",
      "./pull-request-code-review-navigation-c0a64db532da.js",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./pull-request-actions-7f7377d4b593.js",
      "./pull-request-code-review-c745f0e9b91d.js",
      "./review-preferences-model-c2edfefe5a2c.js",
      "./diff-comment-card-c409d5c26721.js",
      "./diff-comment-card-2288e5b28f03.css",
      "./pull-request-readonly-comment-6e9ac0779fb8.js",
      "./arrow-curved-right-c429570ec5db.js",
      "./codex-light-16-3986f0d27657.js",
      "./row-bc9dec132d18.js",
      "./pull-request-comment-72460362f3f8.js",
      "./pull-request-detail-model-6c8655a9e7d6.js",
      "./review-diff-virtualizer-metrics-92681c84005e.js",
      "./review-file-tree-pane-b743a8f06e62.js",
      "./use-target-apps-964e2197265b.js",
      "./codex-analytics-attribution-fe4d0bf2f484.js",
      "./eye-3fd8cd7cd66d.js",
      "./code-diff-dbee820b6963.js",
      "./use-code-diff-context-menu-6d352d781f8f.js",
      "./github-file-url-de7160c14b01.js",
      "./use-binary-preview-source-4f8b7bce953a.js",
      "./surface-572ba2609efa.js",
      "./text-shorter-588de2d999a8.js",
      "./pull-request-error-description-aebc9b65d45f.js",
      "./middle-truncated-text-3230b5cffad1.js",
      "./layout-33ea0ace304f.js",
      "./revision-review-unavailable-message-adbe72fc0fd9.js",
      "./registered-3136d91cec07.js",
      "./pull-request-status-label-5a6c4f7bce5d.js",
      "./pull-request-checks-summary-f4748816df4c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Pt as t,
  $Z as n,
  $jt as r,
  Bg as i,
  CFt as a,
  DXt as o,
  IFt as s,
  LFt as c,
  OXt as l,
  QPt as u,
  QZ as d,
  SFt as f,
  XPt as p,
  Xdt as m,
  Xjt as h,
  Yjt as g,
  ZPt as _,
  _mn as v,
  gmn as y,
  hmn as b,
  rMt as x,
  rdt as S,
  zg as C,
} from "./app-initial-f094ef01c64d.js";
function w({ open: e }) {
  return c(`pull-request-code`, E, {
    defaultState: () => ({ snapshot: null, commitSha: null }),
    getIcon: () => (0, T.jsx)(S, {}),
    isAvailable: () => !0,
    open: e,
    renderThumbnail: (e, t) =>
      (0, T.jsx)(D, { props: { request: { provider: `github`, ...e.request } }, title: t.title }),
  });
}
var T,
  E,
  D,
  O = e(() => {
    (s(),
      m(),
      d(),
      (T = b()),
      v(),
      (E = n(async () => {
        let { PullRequestRevisionTab: e } = await y(
          async () => {
            let { PullRequestRevisionTab: e } = await import(
              `./pull-request-revision-tab-43d3931efac0.js`
            );
            return { PullRequestRevisionTab: e };
          },
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          ]),
          import.meta.url,
        );
        return e;
      })),
      (D = n(async () => {
        let { RegisteredPullRequestThumbnail: e } = await y(
          async () => {
            let { RegisteredPullRequestThumbnail: e } = await import(
              `./registered-3136d91cec07.js`
            );
            return { RegisteredPullRequestThumbnail: e };
          },
          __vite__mapDeps([35, 1, 2, 3, 36, 37, 7, 8]),
          import.meta.url,
        );
        return e;
      })));
  });
function k(e, n, o, s = !1) {
  let c = {
      ...n.pullRequest,
      hostname: h(n.pullRequest.hostname),
      owner: n.pullRequest.owner.toLowerCase(),
      repository: n.pullRequest.repository.toLowerCase(),
    },
    u = { account: r(n.account), pullRequest: c },
    d = g(c),
    f = `pull-request-code:${encodeURIComponent(n.account.hostId)}|${d}`,
    m = _(e, f) ?? `right`,
    v = e.get(l).formatMessage(
      {
        id: `thread.sidePanel.pullRequestTab.title`,
        defaultMessage: `PR #{number}`,
        description: `Title for a pull request side-panel tab`,
      },
      { number: c.number },
    ),
    y = o ?? e.get(i, { request: n, source: `pull_requests_page` }).data?.title ?? ``;
  (a(e, A, {
    id: f,
    kind: `pull-request-code`,
    props: { request: u },
    requiresWorkspaceReady: !1,
    target: m,
    title: y.trim() || v,
    tooltip: `${c.hostname}/${c.owner}/${c.repository} #${c.number} — ${y} (${n.account.hostId})`,
  }),
    s && p(m).updateTabState(e, f, () => ({ snapshot: null, commitSha: null })),
    t(e, m));
}
var A,
  j = e(() => {
    (f(), o(), x(), C(), O(), u(), (A = w({ open: k })));
  });
export { k as n, j as t };
//# sourceMappingURL=open-thread-pull-request-code-tab-8c6819e3368b.js.map
