const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pull-request-revision-tab-b6a1bc6f7fb8.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./pull-request-revision-queries-2036ad28d46d.js",
      "./full-content-metadata-ec0b043a8339.js",
      "./pull-request-code-review-navigation-8765a5adf3d2.js",
      "./virtualized-file-diff-line-position-626fc7d91724.js",
      "./pull-request-actions-1356e7202c75.js",
      "./revision-review-unavailable-message-fb159f3486a9.js",
      "./codex-diff-css-38be692bb624.js",
      "./review-file-tree-pane-9aabbb12d575.js",
      "./highlight-selectors-bd7f51f2a7ad.js",
      "./use-diff-annotations-a6f2dca78adc.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./file-diff-232655eefd3e.js",
      "./file-diff-presentation-eb82cf883deb.js",
      "./register-pierre-themes-8ff08e47faf4.js",
      "./row-987fdaeb1266.js",
      "./row-4f973c2b090e.css",
      "./pull-request-detail-model-97a5167bd1c2.js",
      "./arrow-curved-right-83f604cf338b.js",
      "./base-file-tree-37c729271893.js",
      "./use-target-apps-cd0cca389b7c.js",
      "./codex-analytics-attribution-83c02d184f42.js",
      "./scroll-to-match-5e0f8e5e5abc.js",
      "./code-diff-f5bc2cfbc049.js",
      "./review-preferences-model-ed5ca3d17e0f.js",
      "./use-binary-preview-source-738ed48cc67a.js",
      "./surface-c9a729ca89b3.js",
      "./undo-a5499b0bd547.js",
      "./split-view-1ba4134e1ab5.js",
      "./review-source-dropdown-24fffa506f16.js",
      "./auto-diff-ea82773d8d5c.js",
      "./registered-6bf25d4a069d.js",
      "./pull-request-status-label-c35fa50a1d93.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  OFt as a,
  PBt as o,
  TY as s,
  ZK as c,
  kFt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as u,
  CIr as d,
  Crt as f,
  Cwn as p,
  Eyr as m,
  MDn as h,
  SIr as g,
  Srt as _,
  Swn as v,
  Syr as y,
  XDn as b,
  ZDn as x,
  bwn as S,
  wyr as C,
  xwn as w,
  yyr as T,
} from "./app-initial-ad16eaadf81f.js";
function E(e, t, n) {
  let r = {
      ...t.pullRequest,
      hostname: m(t.pullRequest.hostname),
      owner: t.pullRequest.owner.toLowerCase(),
      repository: t.pullRequest.repository.toLowerCase(),
    },
    i = { account: T(t.account), pullRequest: r },
    a = C(r),
    o = `pull-request-code:${encodeURIComponent(t.account.hostId)}|${a}`,
    s = e
      .get(d)
      .formatMessage(
        {
          id: `thread.sidePanel.pullRequestTab.title`,
          defaultMessage: `PR #{number}`,
          description: `Title for a pull request side-panel tab`,
        },
        { number: r.number },
      ),
    c = n ?? e.get(f, { request: t, source: `pull_requests_page` }).data?.title ?? ``;
  return {
    id: o,
    props: { request: i },
    title: c.trim() || s,
    tooltip: `${r.hostname}/${r.owner}/${r.repository} #${r.number} — ${c} (${t.account.hostId})`,
  };
}
function D() {
  return (D = e(() => {
    (g(), y(), _());
  }))();
}
function O({ open: e }) {
  return x(`pull-request-code`, k, {
    defaultState: () => ({ snapshot: null, commitSha: null }),
    getIcon: () => (0, M.jsx)(c, {}),
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
      (j = n()),
      b(),
      s(),
      t(),
      (M = i()),
      l(),
      (N = r(
        async () => {
          let { PullRequestRevisionTab: e } = await a(
            async () => {
              let { PullRequestRevisionTab: e } = await import(`./pull-request-revision-tab-b6a1bc6f7fb8.js`);
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
      (P = r(
        async () => {
          let { RegisteredPullRequestThumbnail: e } = await a(
            async () => {
              let { RegisteredPullRequestThumbnail: e } = await import(`./registered-6bf25d4a069d.js`);
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
    s = w(e, o),
    c = s ?? (L.dropDestinations.includes(i) ? i : `right`);
  return (
    h(e, L, { ...a, kind: `pull-request-code`, requiresWorkspaceReady: !1, target: c, revealAndFocus: !0 }),
    r && S(c).updateTabState(e, o, () => ({ snapshot: null, commitSha: null })),
    p(e, c),
    { tabId: o, placement: c, status: s == null ? `opened` : `existing` }
  );
}
var L;
function R() {
  return (R = e(() => {
    (u(), D(), F(), v(), (L = O({ open: I })));
  }))();
}
export { I as n, R as t };
//# sourceMappingURL=open-thread-pull-request-code-tab-5cdb509da17a.js.map
