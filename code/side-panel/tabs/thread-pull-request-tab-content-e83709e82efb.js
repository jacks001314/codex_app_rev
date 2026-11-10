import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  Amn as i,
  Bg as a,
  Cpn as o,
  F3t as s,
  Ig as c,
  KYt as l,
  MH as u,
  MMt as d,
  Mg as f,
  N3t as p,
  Ng as m,
  O3t as h,
  Opn as g,
  Pg as _,
  QS as v,
  Spn as y,
  UCt as b,
  UL as x,
  VL as S,
  WCt as C,
  Yjt as w,
  ZS as ee,
  a3t as T,
  hmn as E,
  jG as D,
  jH as te,
  jMt as O,
  kG as k,
  kmn as A,
  m1 as ne,
  o3t as re,
  oMt as ie,
  og as ae,
  p1 as oe,
  qYt as se,
  rMt as j,
  sg as ce,
  zJ as le,
  zg as M,
} from "./app-initial-f094ef01c64d.js";
import { GT as N, WT as P } from "./app-primary-4c40d73a1074.js";
import { n as F, t as I } from "./git-action-review-state-fd1544c9df12.js";
import {
  a as L,
  c as R,
  i as z,
  l as B,
  n as V,
  o as H,
  r as U,
  s as ue,
  t as de,
} from "./pull-request-detail-query-493e5e72eeeb.js";
function fe(e) {
  let t = (0, W.c)(8),
    { account: n, pullRequest: r } = e;
  if (!s(b)) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = w(r)), (t[0] = r), (t[1] = e));
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, G.jsx)(o, {
          id: `gitlabMergeRequest.open`,
          defaultMessage: `Open merge request on GitLab`,
          description: `Link to open the merge request on GitLab`,
        })),
        (t[2] = n))
      : (n = t[2]);
    let i;
    return (
      t[3] === e
        ? (i = t[4])
        : ((i = (0, G.jsx)(S, {
            showCloseButton: !1,
            children: (0, G.jsx)(k, { href: e, initiator: `pull_request_link`, children: n }),
          })),
          (t[3] = e),
          (t[4] = i)),
      i
    );
  }
  let i;
  return (
    t[5] !== n || t[6] !== r
      ? ((i = (0, G.jsx)(pe, { account: n, pullRequest: r })), (t[5] = n), (t[6] = r), (t[7] = i))
      : (i = t[7]),
    i
  );
}
function pe(e) {
  let t = (0, W.c)(36),
    { account: r, pullRequest: i } = e,
    a = n(T),
    s = g(),
    c;
  t[0] !== r || t[1] !== i
    ? ((c = { account: r, pullRequest: i }), (t[0] = r), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let { data: l, isPending: u } = p(f, c),
    d;
  t[3] === i ? (d = t[4]) : ((d = w(i)), (t[3] = i), (t[4] = d));
  let m = d;
  if (l == null) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(o, {
          id: `gitlabMergeRequest.unavailable`,
          defaultMessage: `This merge request could not be loaded from your selected GitLab account`,
          description: `Error description when the selected GitLab connection cannot load the requested merge request`,
        })),
        (t[5] = e))
      : (e = t[5]);
    let n;
    t[6] !== r || t[7] !== i || t[8] !== a
      ? ((n = () => {
          _(a, { account: r, pullRequest: i });
        }),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = n))
      : (n = t[9]);
    let s;
    return (
      t[10] !== u || t[11] !== n
        ? ((s = (0, G.jsx)(de, { error: e, isLoading: u, onRetry: n })),
          (t[10] = u),
          (t[11] = n),
          (t[12] = s))
        : (s = t[12]),
      s
    );
  }
  let h;
  t[13] === l.title
    ? (h = t[14])
    : ((h = (0, G.jsx)(`span`, { className: `select-text`, children: l.title })),
      (t[13] = l.title),
      (t[14] = h));
  let v;
  t[15] === s
    ? (v = t[16])
    : ((v = s.formatMessage({
        id: `pullRequestSidePanel.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button label and tooltip for copying a pull request link from the side panel`,
      })),
      (t[15] = s),
      (t[16] = v));
  let y;
  t[17] === m
    ? (y = t[18])
    : ((y = () => {
        oe(m);
      }),
      (t[17] = m),
      (t[18] = y));
  let b;
  t[19] !== v || t[20] !== y
    ? ((b = (0, G.jsx)(te, { iconOnly: !0, variant: `toolbar`, ariaLabel: v, onCopy: y })),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, G.jsx)(o, {
        id: `gitlabMergeRequest.open`,
        defaultMessage: `Open merge request on GitLab`,
        description: `Link to open the merge request on GitLab`,
      })),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] === m
    ? (S = t[24])
    : ((S = (0, G.jsx)(k, { href: m, initiator: `pull_request_link`, children: x })),
      (t[23] = m),
      (t[24] = S));
  let C;
  t[25] !== b || t[26] !== S
    ? ((C = (0, G.jsxs)(G.Fragment, { children: [b, S] })), (t[25] = b), (t[26] = S), (t[27] = C))
    : (C = t[27]);
  let E;
  t[28] !== h || t[29] !== C
    ? ((E = (0, G.jsx)(ee, { title: h, actions: C })), (t[28] = h), (t[29] = C), (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] === l.body
    ? (D = t[32])
    : ((D = (0, G.jsx)(R, { account: null, body: l.body, loading: !1 })),
      (t[31] = l.body),
      (t[32] = D));
  let O;
  return (
    t[33] !== E || t[34] !== D
      ? ((O = (0, G.jsx)(H, {
          header: E,
          overview: null,
          description: D,
          checks: null,
          comments: null,
        })),
        (t[33] = E),
        (t[34] = D),
        (t[35] = O))
      : (O = t[35]),
    O
  );
}
var W,
  G,
  me = e(() => {
    ((W = A()), h(), y(), x(), u(), D(), v(), C(), re(), ne(), m(), j(), U(), B(), ue(), (G = E()));
  });
function he({
  baseBranch: e,
  conversationId: t,
  fixDisabledReason: n,
  hasOpenPr: r,
  headBranch: i,
  prNumber: a,
}) {
  return (
    (r === !1 ? `closed-pr` : n) ??
    (t == null ? `missing-conversation` : null) ??
    (e == null || i == null ? `missing-branch-info` : null) ??
    (a == null ? `missing-pr-info` : null)
  );
}
var ge = e(() => {});
function _e(e) {
  let t = (0, Y.c)(19),
    { defaultMergeMenuOpen: n, item: r, pullRequest: i, target: a, workspaceRequest: o } = e,
    s = o.hostId ?? `local`,
    l;
  t[0] !== i.hostname || t[1] !== s
    ? ((l = { hostId: s, hostname: i.hostname, source: `pull_request_board` }),
      (t[0] = i.hostname),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let { data: u, error: d, isLoading: f } = p(c, l);
  if (f) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(K, {})), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (u?.status !== `success`) {
    let e = d?.message,
      i;
    return (
      t[4] !== n || t[5] !== r || t[6] !== e || t[7] !== a || t[8] !== o
        ? ((i = (0, X.jsx)(q, {
            detail: null,
            defaultMergeMenuOpen: n,
            error: e,
            item: r,
            request: null,
            target: a,
            workspaceRequest: o,
          })),
          (t[4] = n),
          (t[5] = r),
          (t[6] = e),
          (t[7] = a),
          (t[8] = o),
          (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  let m;
  t[10] !== u.account || t[11] !== i
    ? ((m = { account: u.account, pullRequest: i }), (t[10] = u.account), (t[11] = i), (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== n || t[14] !== r || t[15] !== m || t[16] !== a || t[17] !== o
      ? ((h = (0, X.jsx)(ve, {
          defaultMergeMenuOpen: n,
          item: r,
          request: m,
          target: a,
          workspaceRequest: o,
        })),
        (t[13] = n),
        (t[14] = r),
        (t[15] = m),
        (t[16] = a),
        (t[17] = o),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function ve(e) {
  let t = (0, Y.c)(14),
    { defaultMergeMenuOpen: n, item: r, request: i, target: o, workspaceRequest: s } = e,
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = { request: i, source: `pull_request_board` }), (t[0] = i), (t[1] = c));
  let { data: l, error: u, isLoading: d } = p(a, c);
  if (d) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(K, {})), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let f = l ?? null,
    m = u?.message,
    h;
  t[3] !== l || t[4] !== r
    ? ((h = l == null ? r : J(r, l)), (t[3] = l), (t[4] = r), (t[5] = h))
    : (h = t[5]);
  let g;
  return (
    t[6] !== n ||
    t[7] !== i ||
    t[8] !== f ||
    t[9] !== m ||
    t[10] !== h ||
    t[11] !== o ||
    t[12] !== s
      ? ((g = (0, X.jsx)(q, {
          detail: f,
          defaultMergeMenuOpen: n,
          error: m,
          item: h,
          request: i,
          target: o,
          workspaceRequest: s,
        })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = f),
        (t[9] = m),
        (t[10] = h),
        (t[11] = o),
        (t[12] = s),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function K() {
  let e = (0, Y.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, X.jsx)(O, { className: `icon-lg` })), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, X.jsxs)(`div`, {
          className: `flex h-full items-center justify-center`,
          role: `status`,
          children: [
            t,
            (0, X.jsx)(`span`, {
              className: `sr-only`,
              children: (0, X.jsx)(o, {
                id: `pullRequestDetail.loading`,
                defaultMessage: `Loading pull request details`,
                description: `Accessible status while pull request details load`,
              }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function q(e) {
  let t = (0, Y.c)(19),
    {
      defaultMergeMenuOpen: i,
      detail: a,
      error: o,
      item: s,
      request: c,
      target: l,
      workspaceRequest: u,
    } = e,
    d = n(r),
    f = se(u.hostId ?? `local`),
    { data: p } = N(l.root, f, `local_conversation_thread`),
    m = d.value.routeConversationId,
    h = I({ currentBranch: p, storedThreadBranch: s.headBranch }).hasThreadBranchMismatch
      ? `branch-mismatch`
      : null,
    g = a?.hasOpenPr ?? null,
    _;
  t[0] !== h ||
  t[1] !== m ||
  t[2] !== s.baseBranch ||
  t[3] !== s.headBranch ||
  t[4] !== s.number ||
  t[5] !== g
    ? ((_ = he({
        baseBranch: s.baseBranch,
        conversationId: m,
        fixDisabledReason: h,
        hasOpenPr: g,
        headBranch: s.headBranch,
        prNumber: s.number,
      })),
      (t[0] = h),
      (t[1] = m),
      (t[2] = s.baseBranch),
      (t[3] = s.headBranch),
      (t[4] = s.number),
      (t[5] = g),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] !== m || t[8] !== s || t[9] !== _ || t[10] !== l || t[11] !== u
    ? ((v = { conversationId: m, fixDisabledReason: _, item: s, target: l, workspaceRequest: u }),
      (t[7] = m),
      (t[8] = s),
      (t[9] = _),
      (t[10] = l),
      (t[11] = u),
      (t[12] = v))
    : (v = t[12]);
  let y;
  return (
    t[13] !== i || t[14] !== a || t[15] !== o || t[16] !== c || t[17] !== v
      ? ((y = (0, X.jsx)(z, {
          defaultMergeMenuOpen: i,
          detail: a,
          error: o,
          request: c,
          taskContext: v,
        })),
        (t[13] = i),
        (t[14] = a),
        (t[15] = o),
        (t[16] = c),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function J(e, t) {
  let n = ae({
    canMerge: t.canMerge,
    ciStatus: t.ciStatus,
    hasMergeConflicts: t.mergeBlocker === `conflicts`,
    status: t.state === `open` ? (t.isDraft ? `draft` : `open`) : t.state,
  });
  return {
    ...e,
    additions: t.additions ?? e.additions,
    baseBranch: t.baseBranch ?? e.baseBranch,
    canMerge: t.canMerge,
    ciStatus: t.ciStatus,
    deletions: t.deletions ?? e.deletions,
    headBranch: t.headBranch ?? e.headBranch,
    isAuthor: t.isAuthor,
    mergeBlocker: t.mergeBlocker,
    number: t.number ?? e.number,
    repo: t.repo ?? e.repo,
    state: n === `successful` ? `in_progress` : n,
    title: t.title ?? e.title,
    url: t.url ?? e.url,
  };
}
var Y,
  X,
  Z,
  ye = e(() => {
    ((Y = A()),
      h(),
      y(),
      d(),
      P(),
      F(),
      ge(),
      j(),
      M(),
      ce(),
      le(),
      l(),
      L(),
      (X = E()),
      (Z = function (e) {
        let t = (0, Y.c)(22),
          { hostId: n, item: r, repo: i, target: a, defaultMergeMenuOpen: o } = e,
          s = g(),
          c;
        t[0] === r.url ? (c = t[1]) : ((c = ie(r.url)), (t[0] = r.url), (t[1] = c));
        let l = c,
          u = n ?? a.hostId,
          d;
        t[2] !== r.headBranch || t[3] !== r.number || t[4] !== i || t[5] !== u || t[6] !== a.cwd
          ? ((d = { cwd: a.cwd, headBranch: r.headBranch, hostId: u, number: r.number, repo: i }),
            (t[2] = r.headBranch),
            (t[3] = r.number),
            (t[4] = i),
            (t[5] = u),
            (t[6] = a.cwd),
            (t[7] = d))
          : (d = t[7]);
        let f = d;
        if (l == null) {
          let e;
          t[8] === s
            ? (e = t[9])
            : ((e = s.formatMessage({
                id: `pullRequestSidePanel.invalidPullRequestUrl`,
                defaultMessage: `Couldn’t load this pull request URL`,
                description: `Error shown when a pull request side panel URL is malformed`,
              })),
              (t[8] = s),
              (t[9] = e));
          let n;
          return (
            t[10] !== o || t[11] !== r || t[12] !== e || t[13] !== a || t[14] !== f
              ? ((n = (0, X.jsx)(q, {
                  detail: null,
                  error: e,
                  defaultMergeMenuOpen: o,
                  item: r,
                  request: null,
                  target: a,
                  workspaceRequest: f,
                })),
                (t[10] = o),
                (t[11] = r),
                (t[12] = e),
                (t[13] = a),
                (t[14] = f),
                (t[15] = n))
              : (n = t[15]),
            n
          );
        }
        let p;
        return (
          t[16] !== o || t[17] !== r || t[18] !== l || t[19] !== a || t[20] !== f
            ? ((p = (0, X.jsx)(_e, {
                item: r,
                defaultMergeMenuOpen: o,
                pullRequest: l,
                target: a,
                workspaceRequest: f,
              })),
              (t[16] = o),
              (t[17] = r),
              (t[18] = l),
              (t[19] = a),
              (t[20] = f),
              (t[21] = p))
            : (p = t[21]),
          p
        );
      }));
  }),
  Q,
  $;
e(() => {
  ((Q = t(i(), 1)),
    me(),
    U(),
    ye(),
    ($ = function (e) {
      return `item` in e
        ? (0, Q.createElement)(Z, e)
        : e.request.provider === `gitlab`
          ? (0, Q.createElement)(fe, e.request)
          : (0, Q.createElement)(V, {
              request: { account: e.request.account, pullRequest: e.request.pullRequest },
              summaryOnly: e.summaryOnly,
            });
    }));
})();
export { $ as PullRequestWorkspaceTab };
//# sourceMappingURL=thread-pull-request-tab-content-e83709e82efb.js.map
