const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pull-request-revision-tab-7074770d7e66.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./pull-request-revision-queries-a3209df8cd9d.js",
      "./full-content-metadata-4cfa7aef5857.js",
      "./pull-request-code-review-navigation-1eeff0187c2d.js",
      "./virtualized-file-diff-line-position-cb3b3529be70.js",
      "./pull-request-actions-fc24d58eda26.js",
      "./revision-review-unavailable-message-bffc7746871f.js",
      "./codex-diff-css-681a898586a0.js",
      "./review-file-tree-pane-3e66effc6a6c.js",
      "./highlight-selectors-4f82ccb0876d.js",
      "./use-diff-annotations-1d5c03397aea.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./file-diff-61a6fffbd4c1.js",
      "./file-diff-presentation-b6cc0ce0d4c4.js",
      "./register-pierre-themes-26873099a398.js",
      "./row-cb5037d08176.js",
      "./row-4f973c2b090e.css",
      "./pull-request-detail-model-e2eec982b891.js",
      "./arrow-curved-right-bc11e9b2085c.js",
      "./base-file-tree-1123b9ab610d.js",
      "./use-target-apps-df427db284a8.js",
      "./codex-analytics-attribution-da3e14c84e21.js",
      "./scroll-to-match-701662e58079.js",
      "./code-diff-628be5db9fe9.js",
      "./review-preferences-model-4ff078b4c04e.js",
      "./use-binary-preview-source-90b1b8b2193d.js",
      "./surface-3fad834862de.js",
      "./undo-51919964621b.js",
      "./split-view-9cde6d2314a9.js",
      "./review-source-dropdown-516906020f92.js",
      "./auto-diff-9588425264f4.js",
      "./registered-b9ce3b147723.js",
      "./pull-request-status-label-f63bea0ffbe2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  TJ as n,
  eK as r,
  fPt as i,
  pPt as a,
  vzt as o,
  xMt as s,
  yzt as c,
  z4 as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ahr as u,
  Dhr as d,
  Mhr as f,
  Mwn as p,
  Phr as m,
  aIr as h,
  dwn as g,
  dxn as _,
  ent as v,
  fxn as y,
  jwn as b,
  lxn as x,
  oIr as S,
  pwn as C,
  tnt as w,
  uxn as T,
} from "./app-initial-5851df3f6cb1.js";
function E(e, t, n) {
  let r = {
      ...t.pullRequest,
      hostname: m(t.pullRequest.hostname),
      owner: t.pullRequest.owner.toLowerCase(),
      repository: t.pullRequest.repository.toLowerCase(),
    },
    i = { account: d(t.account), pullRequest: r },
    a = f(r),
    o = `pull-request-code:${encodeURIComponent(t.account.hostId)}|${a}`,
    s = e
      .get(S)
      .formatMessage(
        {
          id: `thread.sidePanel.pullRequestTab.title`,
          defaultMessage: `PR #{number}`,
          description: `Title for a pull request side-panel tab`,
        },
        { number: r.number },
      ),
    c = n ?? e.get(w, { request: t, source: `pull_requests_page` }).data?.title ?? ``;
  return {
    id: o,
    props: { request: i },
    title: c.trim() || s,
    tooltip: `${r.hostname}/${r.owner}/${r.repository} #${r.number} — ${c} (${t.account.hostId})`,
  };
}
function D() {
  return (D = e(() => {
    (h(), u(), v());
  }))();
}
function O({ open: e }) {
  return p(`pull-request-code`, k, {
    defaultState: () => ({ snapshot: null, commitSha: null }),
    getIcon: () => (0, M.jsx)(r, {}),
    isAvailable: () => !0,
    open: e,
    renderThumbnail: (e, t) =>
      (0, M.jsx)(P, { props: { request: { provider: `github`, ...e.request } }, title: t.title }),
  });
}
function k(e) {
  let t = (0, A.c)(7),
    n;
  t[0] === e.renderSlots
    ? (n = t[1])
    : ((n = e.renderSlots({ headerRows: [], content: null })), (t[0] = e.renderSlots), (t[1] = n));
  let r;
  t[2] === e ? (r = t[3]) : ((r = (0, M.jsx)(N, { ...e })), (t[2] = e), (t[3] = r));
  let i;
  return (
    t[4] !== n || t[5] !== r
      ? ((i = (0, M.jsx)(j.Suspense, { fallback: n, children: r })), (t[4] = n), (t[5] = r), (t[6] = i))
      : (i = t[6]),
    i
  );
}
var A, j, M, N, P;
function F() {
  return (F = e(() => {
    ((A = o()),
      (j = c()),
      b(),
      n(),
      l(),
      (M = s()),
      a(),
      (N = t(
        async () => {
          let { PullRequestRevisionTab: e } = await i(
            async () => {
              let { PullRequestRevisionTab: e } = await import(`./pull-request-revision-tab-7074770d7e66.js`);
              return { PullRequestRevisionTab: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            ]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0, suspendToParent: !0 },
      )),
      (P = t(
        async () => {
          let { RegisteredPullRequestThumbnail: e } = await i(
            async () => {
              let { RegisteredPullRequestThumbnail: e } = await import(`./registered-b9ce3b147723.js`);
              return { RegisteredPullRequestThumbnail: e };
            },
            __vite__mapDeps([37, 1, 2, 3, 4, 5, 38]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )));
  }))();
}
function I(e, t, n, r = !1, i = `right`) {
  let a = E(e, t, n),
    o = a.id,
    s = T(e, o),
    c = s ?? (L.dropDestinations.includes(i) ? i : `right`);
  return (
    C(e, L, { ...a, kind: `pull-request-code`, requiresWorkspaceReady: !1, target: c, revealAndFocus: !0 }),
    r && x(c).updateTabState(e, o, () => ({ snapshot: null, commitSha: null })),
    y(e, c),
    { tabId: o, placement: c, status: s == null ? `opened` : `existing` }
  );
}
var L;
function R() {
  return (R = e(() => {
    (g(), D(), F(), _(), (L = O({ open: I })));
  }))();
}
export { I as n, R as t };
//# sourceMappingURL=open-thread-pull-request-code-tab-31229dde759d.js.map
