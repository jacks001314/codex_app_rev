import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  AMt as i,
  AX as a,
  Amn as o,
  B4t as s,
  B6t as c,
  B7t as l,
  BD as u,
  Cpn as d,
  Cq as f,
  DHt as p,
  DXt as m,
  Dg as h,
  EHt as g,
  Eg as _,
  F3t as ee,
  FKt as te,
  Fz as v,
  H4t as y,
  HCt as b,
  IXt as ne,
  Ig as re,
  Iz as ie,
  JG as x,
  JK as ae,
  JU as S,
  JXt as C,
  JZt as w,
  Jg as T,
  Jit as E,
  K4t as D,
  KG as oe,
  KKt as O,
  Kit as k,
  Kqt as A,
  M6t as se,
  MH as ce,
  MMt as j,
  Mv as le,
  N3t as M,
  N6t as ue,
  NX as de,
  O3t as N,
  OHt as fe,
  OXt as P,
  Opn as pe,
  P6t as me,
  PCt as he,
  QKt as ge,
  QV as _e,
  QXt as ve,
  RCt as F,
  RD as ye,
  RKt as be,
  Spn as I,
  Sq as L,
  THt as xe,
  TJt as Se,
  Tg as Ce,
  U3t as we,
  U6t as Te,
  VCt as Ee,
  XJ as De,
  Xg as R,
  Xit as Oe,
  YZt as ke,
  Yit as Ae,
  ZG as je,
  ZJ as Me,
  ZV as Ne,
  Zg as Pe,
  _Jt as Fe,
  _Ut as z,
  _ct as Ie,
  a3t as B,
  aUt as Le,
  a_ as Re,
  bK as ze,
  c6t as V,
  cUt as Be,
  dMt as Ve,
  dUt as He,
  e0t as Ue,
  eZt as We,
  fMt as Ge,
  fUt as Ke,
  gRt as H,
  gUt as qe,
  gct as Je,
  hEt as Ye,
  hUt as Xe,
  hmn as U,
  i6t as W,
  iHt as Ze,
  i_ as Qe,
  iit as $e,
  jH as et,
  jMt as tt,
  jXt as G,
  jv as nt,
  kMt as rt,
  kX as it,
  kXt as at,
  kmn as K,
  kv as ot,
  lUt as st,
  m1 as ct,
  m6t as lt,
  mJt as ut,
  m_ as dt,
  nUt as ft,
  nV as pt,
  nZt as mt,
  n_ as ht,
  o3t as gt,
  oMt as _t,
  o_ as vt,
  p1 as yt,
  pJt as bt,
  qK as xt,
  qKt as St,
  qMt as Ct,
  qU as wt,
  qZt as Tt,
  qg as Et,
  qqt as Dt,
  rHt as Ot,
  rMt as kt,
  rTt as At,
  rUt as jt,
  rV as Mt,
  r_ as Nt,
  rit as Pt,
  s6t as Ft,
  sUt as It,
  s_ as Lt,
  t7t as Rt,
  tit as zt,
  uUt as Bt,
  vit as Vt,
  w6t as Ht,
  wJt as Ut,
  wg as Wt,
  xK as Gt,
  xRt as Kt,
  xpn as qt,
  yit as Jt,
  z3t as Yt,
  zJ as Xt,
  zg as Zt,
  znn as Qt,
} from "./app-initial-f094ef01c64d.js";
import { HT as $t, UT as en, dn as tn, fn as nn } from "./app-primary-4c40d73a1074.js";
import { n as rn, t as an } from "./codex-analytics-attribution-fe4d0bf2f484.js";
import { n as on, t as sn } from "./commit-2c0030d3a535.js";
import { n as cn, t as ln } from "./git-action-review-state-fd1544c9df12.js";
function un(e) {
  return Rt(e)?.repo ?? s(e);
}
var dn = e(() => {
    (c(), y());
  }),
  fn,
  pn,
  mn = e(() => {
    (Se(),
      b(),
      (fn = Ee({
        method: `branch-exists`,
        getParams: (e) => ({ branch: e.branch, operationSource: e.operationSource, root: e.root }),
        getOptions: () => ({ select: (e) => e.exists, staleTime: Ut.FIVE_SECONDS }),
      })),
      (pn = fn.fromTarget$));
  });
function hn(e, t) {
  let n = {
    enabled: !0,
    operationSource: t.operationSource,
    lookup: t.cwd == null ? null : { cwd: t.cwd, hostConfig: t.hostConfig },
  };
  return Promise.all([e.get(yn.fromTarget$, n).refetch(), e.get(bn.fromTarget$, n).refetch()]);
}
function gn(e) {
  let t = D(e.root).replace(/\/+$/, ``),
    n = D(e.commonDir).replace(/\/+$/, ``);
  return n === t || n === `${t}/.git`;
}
var _n,
  vn,
  yn,
  bn,
  q,
  xn = e(() => {
    (N(),
      gt(),
      y(),
      en(),
      b(),
      Be(),
      (_n = { type: `loading` }),
      (vn = { type: `error` }),
      (yn = Ee({
        method: `upstream-branch`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({
          liveQuery: {
            method: `upstream-branch`,
            params: { operationSource: e.operationSource, root: e.root },
          },
          staleTime: 1 / 0,
        }),
      })),
      (bn = Ee({
        method: `branch-ahead-count`,
        getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
        getOptions: (e) => ({
          liveQuery: {
            method: `branch-ahead-count`,
            params: { operationSource: e.operationSource, root: e.root },
          },
          staleTime: 1 / 0,
        }),
      })),
      (q = W(
        B,
        (e, { get: t }) => {
          let n = {
              enabled: !0,
              operationSource: e.operationSource,
              lookup: e.cwd == null ? null : { cwd: e.cwd, hostConfig: e.hostConfig },
            },
            r = t(It, { ...n, watchForGitInit: !1 }),
            i = t(yn.fromTarget$, n),
            a = t(bn.fromTarget$, n),
            o = t($t, n);
          if (r.isError || i.isError || a.isError || o.isError) return vn;
          if (!r.isSuccess || !i.isSuccess || !a.isSuccess || !o.isSuccess) return _n;
          let s = r.data,
            c = i.data,
            l = a.data;
          return s == null || c == null || l == null
            ? vn
            : {
                type: `success`,
                data: {
                  gitRoot: s.root,
                  branch: c.branch ?? null,
                  defaultBranch: o.data ?? null,
                  commitsAhead: l.commitsAhead,
                  upstreamRef: c.upstream?.branch ?? null,
                  isMainWorktree: gn(s),
                },
              };
        },
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  });
function Sn(e) {
  let t = (0, En.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `changes-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `review.commit.disabled.loadingDiff`,
              defaultMessage: `Loading diff…`,
              description: `Tooltip shown on the commit button while changes are loading`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `changes-unavailable`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `review.commit.disabled.unavailable`,
              defaultMessage: `Commit is unavailable right now`,
              description: `Fallback tooltip shown when commit is disabled for an unknown reason`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `no-changes`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `review.commit.disabled.noChanges`,
              defaultMessage: `No changes to commit`,
              description: `Tooltip shown when there are no changes to commit`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function Cn(e) {
  let t = (0, En.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.pushBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when branch info cannot be resolved`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `nothing-to-push`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.pushNothingToPush`,
              defaultMessage: `No new commits to push`,
              description: `Tooltip shown when there are no commits ahead of the remote`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.pushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when push status is loading`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function wn(e) {
  let t = (0, En.c)(12),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the current branch cannot be determined`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `checking-existing-pr`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.viewPullRequestButtonLabel.loading`,
              defaultMessage: `Loading pull request…`,
              description: `Tooltip shown while the pull request URL is loading`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `default-branch-checked-out`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestSwitchBranch`,
              defaultMessage: `Checkout a feature branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the default branch is active`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `default-branch-missing`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestDefaultBranchMissing`,
              defaultMessage: `Default branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the default branch cannot be determined`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `gh-auth-required`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestAuthGh`,
              defaultMessage: "Authenticate GitHub CLI: run `gh auth login`",
              description: `Tooltip shown when create PR is disabled because GitHub CLI is not authenticated`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `gh-cli-missing`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestInstallGh`,
              defaultMessage: `Install GitHub CLI (gh) to create PRs`,
              description: `Tooltip shown when create PR is disabled because GitHub CLI is missing`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `pull-request-source-unavailable`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestSourceUnavailable`,
              defaultMessage: `Pull request creation unavailable`,
              description: `Tooltip shown when create PR is disabled because no pull request provider is available`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `pull-request-source-loading`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestSourceLoading`,
              defaultMessage: `Loading pull request provider…`,
              description: `Tooltip shown when create PR is disabled while the pull request provider is loading`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `no-git-repository`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestNoRepo`,
              defaultMessage: `No git repository found`,
              description: `Tooltip shown when create PR is disabled because no git repository is detected`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `pull-request-exists`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestExistingPullRequest`,
              defaultMessage: `A pull request already exists for this branch`,
              description: `Tooltip shown when create PR is disabled because a PR already exists`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestPushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when create PR is disabled because the push status is loading`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `upstream-missing`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(d, {
              id: `localConversationPage.createPullRequestSetUpstream`,
              defaultMessage: `Push this branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the branch has no upstream`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
  }
}
function Tn(e) {
  let t = (0, En.c)(6),
    { blockedStep: n } = e;
  if (n == null) return null;
  switch (n.kind) {
    case `commit`: {
      let e;
      return (
        t[0] === n.reason
          ? (e = t[1])
          : ((e = (0, J.jsx)(Sn, { reason: n.reason })), (t[0] = n.reason), (t[1] = e)),
        e
      );
    }
    case `push`: {
      let e;
      return (
        t[2] === n.reason
          ? (e = t[3])
          : ((e = (0, J.jsx)(Cn, { reason: n.reason })), (t[2] = n.reason), (t[3] = e)),
        e
      );
    }
    case `create-pr`: {
      let e;
      return (
        t[4] === n.reason
          ? (e = t[5])
          : ((e = (0, J.jsx)(wn, { reason: n.reason })), (t[4] = n.reason), (t[5] = e)),
        e
      );
    }
  }
}
var En,
  J,
  Dn = e(() => {
    ((En = K()), I(), (J = U()));
  });
function On({
  commitsAhead: e,
  commitBlockedReason: t,
  createPullRequestAfterPushBlockedReason: n,
  createPullRequestBlockedReason: r,
  createsBranch: i,
  pushAfterCommitBlockedReason: a,
  pushBlockedReason: o,
}) {
  return i
    ? {
        canCommitPushAndCreatePullRequest: t == null && An(a) && An(n),
        canCreatePullRequest: !1,
        canPushAndCreatePullRequest: e > 0 && An(o) && An(n),
      }
    : {
        canCommitPushAndCreatePullRequest: t == null && a == null && n == null,
        canCreatePullRequest: r == null,
        canPushAndCreatePullRequest:
          (o == null || (o === `nothing-to-push` && r === `upstream-missing`)) && n == null,
      };
}
function kn({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  createsBranch: r,
  includeLocalChanges: i,
}) {
  return i
    ? e
      ? `commit-push-and-create-pr`
      : n
        ? `push-and-create-pr`
        : t
          ? `create-pr`
          : `commit-push-and-create-pr`
    : r
      ? `push-and-create-pr`
      : `create-pr`;
}
function An(e) {
  return (
    e == null ||
    e === `branch-missing` ||
    e === `checking-existing-pr` ||
    e === `default-branch-checked-out` ||
    e === `push-status-loading`
  );
}
var jn = e(() => {});
function Mn({ hasSomeUncommittedChanges: e, isChangesLoading: t, isChangesUnavailable: n }) {
  switch (!0) {
    case t:
      return `changes-loading`;
    case n:
      return `changes-unavailable`;
    case !e:
      return `no-changes`;
    case !0:
      return null;
  }
  return null;
}
function Nn({ pushStatus: e, ignoreNothingToPush: t = !1 }) {
  switch (!0) {
    case !e:
      return `push-status-loading`;
    case !e?.branch:
      return `branch-missing`;
    case !t && e?.commitsAhead === 0:
      return `nothing-to-push`;
    case !0:
      return null;
  }
  return null;
}
function Pn({
  source: e,
  unavailableReason: t,
  pushStatus: n,
  allowMissingUpstream: r = !1,
  hasOpenPr: i,
  isLoadingPRStatus: a,
}) {
  switch (!0) {
    case i:
      return `pull-request-exists`;
    case a:
      return `checking-existing-pr`;
    case e === `loading`:
      return `pull-request-source-loading`;
    case e === `unavailable`:
      return t ?? `pull-request-source-unavailable`;
    case !n:
      return `push-status-loading`;
    case !n?.gitRoot:
      return `no-git-repository`;
    case !n?.defaultBranch:
      return `default-branch-missing`;
    case !n?.branch:
      return `branch-missing`;
    case n?.branch === n?.defaultBranch:
      return `default-branch-checked-out`;
    case !r && !n?.upstreamRef:
      return `upstream-missing`;
    case !0:
      return null;
  }
  return null;
}
var Fn = e(() => {});
function In(e) {
  let t = e.flatMap((e) => (e?.type === `success` ? e.files : []));
  return t.length === 0
    ? null
    : {
        files: t.map((e) => ({
          path: e.path,
          additions: e.additions ?? 0,
          deletions: e.deletions ?? 0,
        })),
        totalAdditions: (0, zn.default)(t, (e) => e.additions ?? 0),
        totalDeletions: (0, zn.default)(t, (e) => e.deletions ?? 0),
      };
}
function Ln(e, t) {
  let n = Rn(e),
    r = t.flatMap((e) =>
      e?.type === `success`
        ? e.files.filter((e) => [e.path, e.previousPath].some((e) => e != null && Rn(e) === n))
        : [],
    );
  return r.length === 0
    ? null
    : {
        linesAdded: (0, zn.default)(r, (e) => e.additions ?? 0),
        linesRemoved: (0, zn.default)(r, (e) => e.deletions ?? 0),
      };
}
function Rn(e) {
  let t = e.trim(),
    n =
      (t.startsWith(`"`) && t.endsWith(`"`)) || (t.startsWith(`'`) && t.endsWith(`'`))
        ? t.slice(1, -1)
        : t,
    r = n.startsWith(`./`) ? n.slice(2) : n;
  return r.startsWith(`a/`) || r.startsWith(`b/`) ? r.slice(2) : r;
}
var zn,
  Bn = e(() => {
    zn = t(Ct(), 1);
  });
function Vn(e) {
  return {
    cwd: e.cwd,
    hostConfig: e.hostConfig,
    operationSource: `local_conversation_git_actions`,
  };
}
function Hn({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  commitBlockedReason: r,
  createPullRequestAfterPushBlockedReason: i,
  createPullRequestBlockedReason: a,
  nextStep: o,
  pushAfterCommitBlockedReason: s,
  pushBlockedReason: c,
}) {
  if (
    i === `pull-request-source-loading` ||
    i === `pull-request-source-unavailable` ||
    i === `gh-auth-required` ||
    i === `gh-cli-missing`
  )
    return { kind: `create-pr`, reason: i };
  switch (o) {
    case `create-pr`:
      return !t && a != null ? { kind: `create-pr`, reason: a } : null;
    case `push-and-create-pr`:
      return n
        ? null
        : c == null
          ? i == null
            ? null
            : { kind: `create-pr`, reason: i }
          : { kind: `push`, reason: c };
    case `commit-push-and-create-pr`:
      return e
        ? null
        : r == null
          ? s == null
            ? i == null
              ? null
              : { kind: `create-pr`, reason: i }
            : { kind: `push`, reason: s }
          : { kind: `commit`, reason: r };
  }
}
var Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n = e(() => {
    (N(),
      p(),
      xn(),
      Be(),
      Bt(),
      R(),
      Wt(),
      Kt(),
      Se(),
      jn(),
      Fn(),
      Bn(),
      (Un = we(H, (e) => {
        let t =
          e.source === `staged`
            ? {
                cwd: e.cwd,
                includeUntrackedFiles: !1,
                operationSource: `local_conversation_git_actions`,
                source: e.source,
              }
            : { cwd: e.cwd, operationSource: `local_conversation_git_actions`, source: e.source };
        return g(
          `review-summary`,
          { commonDir: e.commonDir, root: e.root },
          t,
          st(e.hostConfig),
          e.hostConfig,
          { liveQuery: { method: `review-summary`, params: t }, staleTime: Ut.INFINITE },
        );
      })),
      (Wn = we(H, (e) => {
        let t = {
            cwd: e.cwd,
            includeUntrackedFiles: !1,
            operationSource: `local_conversation_git_actions`,
          },
          n = { ...t, includeUntrackedFiles: !0 };
        return g(
          `status-summary`,
          { commonDir: e.commonDir, root: e.root },
          t,
          st(e.hostConfig),
          e.hostConfig,
          { liveQuery: { method: `status-summary`, params: n }, staleTime: Ut.INFINITE },
        );
      })),
      (Gn = W(H, (e, { get: t }) =>
        t(It, {
          enabled: !0,
          lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
          operationSource: `local_conversation_git_actions`,
          watchForGitInit: !1,
        }),
      )),
      (Kn = W(H, (e, { get: t }) => {
        let n = t(Gn, e),
          r = n.data ?? null;
        return r == null
          ? Le(n)
          : t(Un, {
              commonDir: r.commonDir,
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              root: r.root,
              source: e.source,
            });
      })),
      (qn = W(H, (e, { get: t }) => {
        let n = t(Gn, e),
          r = n.data ?? null;
        return r == null
          ? Le(n)
          : t(Wn, { commonDir: r.commonDir, cwd: e.cwd, hostConfig: e.hostConfig, root: r.root });
      })),
      (Jn = W(H, (e, { get: t }) => {
        let n = t(Kn, { cwd: e.cwd, hostConfig: e.hostConfig, source: `staged` }),
          r = e.includeUnstaged
            ? t(Kn, { cwd: e.cwd, hostConfig: e.hostConfig, source: `unstaged` })
            : null,
          i = In(r == null ? [n.data] : [n.data, r.data]);
        return {
          hasSelectedChanges: (i?.files.length ?? 0) > 0,
          isFetching: n.isFetching || (r?.isFetching ?? !1),
          isLoading: n.isLoading || (r?.isLoading ?? !1),
          isUnavailable: n.data?.type === `error` || r?.data?.type === `error`,
          selectionSummary: i,
        };
      })),
      (Yn = W(H, (e, { get: t }) => {
        let n = t(qn, e),
          r = n.data;
        if (r?.type === `error`) {
          let n = t(Jn, e);
          return Mn({
            hasSomeUncommittedChanges: n.hasSelectedChanges,
            isChangesLoading: n.isLoading,
            isChangesUnavailable: n.isUnavailable,
          });
        }
        let i =
          r?.type === `success` &&
          r.stagedCount + (e.includeUnstaged ? r.unstagedCount + (r.untrackedCount ?? 0) : 0) > 0;
        return Mn({
          hasSomeUncommittedChanges: i,
          isChangesLoading:
            n.isLoading ||
            (!i && e.includeUnstaged && r?.type === `success` && r.untrackedCount == null),
          isChangesUnavailable: !1,
        });
      })),
      (Xn = W(H, (e, { get: t }) => {
        let n = t(q, Vn(e));
        return Nn({ pushStatus: n.type === `success` ? n.data : void 0 });
      })),
      (Zn = W(H, (e, { get: t }) => {
        let n = t(q, Vn(e));
        return Nn({ pushStatus: n.type === `success` ? n.data : void 0, ignoreNothingToPush: !0 });
      })),
      (Qn = W(H, (e, { get: t }) => {
        let n = t(q, Vn(e)),
          r = n.type === `success` ? n.data : void 0,
          i = t(Yn, { ...e, includeUnstaged: e.includeLocalChanges }),
          a = t(Xn, e),
          o = t(Zn, e),
          { data: s, isLoading: c } = t(Ce, {
            cwd: e.cwd,
            headBranch: r?.branch ?? ``,
            hostId: e.hostConfig.id,
            operationSource: `local_conversation_git_actions`,
          }),
          { source: l, unavailableReason: u } = t(Pe, {
            cwd: e.cwd,
            hostId: e.hostConfig.id,
            operation: `create`,
            operationSource: `local_conversation_git_actions`,
            threadId: e.conversationId,
          }),
          d = s?.hasOpenPr === !0,
          f = Pn({
            hasOpenPr: d,
            isLoadingPRStatus: c,
            pushStatus: r,
            source: l,
            unavailableReason: u,
          }),
          p = Pn({
            allowMissingUpstream: !0,
            hasOpenPr: d,
            isLoadingPRStatus: c,
            pushStatus: r,
            source: l,
            unavailableReason: u,
          }),
          m = On({
            commitsAhead: r?.commitsAhead ?? 0,
            commitBlockedReason: i,
            createPullRequestAfterPushBlockedReason: p,
            createPullRequestBlockedReason: f,
            createsBranch: e.createsBranch,
            pushAfterCommitBlockedReason: o,
            pushBlockedReason: a,
          }),
          h = kn({
            ...m,
            createsBranch: e.createsBranch,
            includeLocalChanges: e.includeLocalChanges,
          });
        return {
          blockedStep: Hn({
            ...m,
            commitBlockedReason: i,
            createPullRequestAfterPushBlockedReason: p,
            createPullRequestBlockedReason: f,
            nextStep: h,
            pushAfterCommitBlockedReason: o,
            pushBlockedReason: a,
          }),
          nextStep: h,
        };
      })));
  });
function er(e) {
  return { cwd: e.cwd, hostId: e.hostId };
}
function tr(e, t) {
  (e.set(lr, t, ``), e.set(ur, t, ``), e.set(dr, t, !0));
}
function nr(e) {
  let t = new AbortController();
  return (or.set(ar(e), t), t.signal);
}
function rr(e) {
  or.get(ar(e))?.abort();
}
function ir(e, t) {
  or.get(ar(e))?.signal === t && or.delete(ar(e));
}
function ar(e) {
  return JSON.stringify([e.hostId, e.cwd]);
}
var or,
  Y,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr = e(() => {
    (N(),
      gt(),
      Ot(),
      (or = new Map()),
      (Y = Ft(B, (e) => null)),
      (sr = Ft(B, (e) => ``)),
      (cr = Ze(`git-action-include-unstaged-changes`, !0)),
      (lr = Ft(B, (e) => ``)),
      (ur = Ft(B, (e) => ``)),
      (dr = Ft(B, (e) => !0)));
  }),
  X,
  pr = e(() => {
    (N(),
      Xt(),
      (X = Ht(`LocalGitActionsScope`, {
        key: ({ target: e }) => JSON.stringify([e.hostId, e.cwd]),
        parent: r,
      })));
  });
function mr(e) {
  if (e.get(Mr)) {
    (e.set(br, `commit`), e.set(yr, `worktree-branch-setup`));
    return;
  }
  e.set(yr, `commit`);
}
function hr(e, { defaultToDraft: t = !1 } = {}) {
  let n = t ? `create-draft-pr` : `create-pr`;
  if (e.get(Nr)) {
    (e.set(br, n), e.set(yr, `worktree-branch-setup`));
    return;
  }
  e.set(yr, n);
}
function gr(e) {
  (e.set(br, null), e.set(yr, `worktree-branch-setup`));
}
function _r(e) {
  let t = e.get(br);
  (e.set(br, null), e.set(yr, t));
}
function vr(e, t) {
  return {
    cwd: e.cwd,
    headBranch: t,
    hostId: e.hostId,
    operationSource: `local_conversation_git_actions`,
  };
}
var yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir = e(() => {
    (N(),
      u(),
      en(),
      xn(),
      Wt(),
      Kt(),
      Dt(),
      a(),
      $n(),
      cn(),
      fr(),
      pr(),
      (yr = lt(X, null)),
      (br = lt(X, null)),
      (xr = W(H, (e, { get: t }) =>
        t(ye, {
          enabled: !0,
          operationSource: `local_conversation_git_actions`,
          lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
        }),
      )),
      (Sr = W(H, (e, { get: t }) => {
        let n = t(xr, e),
          r = t(q, {
            cwd: e.cwd,
            hostConfig: e.hostConfig,
            operationSource: `local_conversation_git_actions`,
          });
        return ln({
          currentBranch: n.data ?? (r.type === `success` ? (r.data.branch ?? null) : null),
          storedThreadBranch: t(de, e),
        }).currentBranchName;
      })),
      (Cr = W(H, (e, { get: t }) => t(Ce, vr(e, t(Sr, e))).data?.url ?? null)),
      (wr = W(H, (e, { get: t }) => t(Ce, vr(e, t(Sr, e))).data?.hasOpenPr === !0)),
      (Tr = W(
        H,
        (e, { get: t }) =>
          ln({ currentBranch: t(Sr, e), storedThreadBranch: t(de, e) }).hasThreadBranchMismatch,
      )),
      (Er = W(H, (e, { get: t }) => {
        let n = t(xr, e);
        return n.isSuccess && n.data == null;
      })),
      (Dr = V(X, ({ get: e, scope: t }) => ({
        ...t.value.target,
        codexWorktree: t.value.codexWorktree,
        conversationId: t.value.conversationId,
        hostConfig: e(A, t.value.target.hostId),
      }))),
      (Or = V(X, ({ get: e, scope: t }) => e(Y, er(t.value.target)))),
      (kr = V(X, ({ get: e }) => e(Yn, { ...e(Dr), includeUnstaged: !0 }))),
      (Ar = W(H, (e, { get: t }) => {
        let n = t(xr, e);
        if (!n.isSuccess) return `hidden`;
        let r = n.data?.trim() ?? ``,
          i = r.length === 0;
        if (i) {
          let n = t(q, {
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              operationSource: `local_conversation_git_actions`,
            }),
            r = n.type === `success` ? n.data : null;
          if (t(Yn, { ...e, includeUnstaged: !0 }) != null && (r?.commitsAhead ?? 0) === 0)
            return `hidden`;
        } else {
          let n = t($t, {
            enabled: !0,
            operationSource: `local_conversation_git_actions`,
            lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
          }).data;
          if (n == null || r === n) return `hidden`;
        }
        return t(Qn, {
          conversationId: e.conversationId,
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          createsBranch: i,
          includeLocalChanges: t(dr, er(e)),
        }).blockedStep == null
          ? `enabled`
          : `disabled`;
      })),
      (jr = V(X, ({ get: e }) => e(Ar, e(Dr)))),
      (Mr = V(X, ({ get: e }) => {
        let t = e(Dr),
          n = e(q, {
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: `local_conversation_git_actions`,
          }),
          r = n.type === `success` ? n.data : void 0,
          i = e(xr, t),
          a = i.isSuccess ? i.data : r?.branch;
        return t.codexWorktree && r != null && (!a || a === r.defaultBranch);
      })),
      (Nr = V(X, ({ get: e }) => e(Mr) && !e(Er, e(Dr)))),
      (Pr = V(X, ({ get: e }) => {
        let t = e(Dr),
          n = e(kr),
          r = e(Xn, t),
          i = e(Zn, t);
        return r == null || (n == null && i == null) || (e(Mr) && n == null) ? null : r;
      })),
      (Fr = V(X, ({ get: e, scope: t }) => {
        let n = e(Dr);
        return e(Qn, {
          conversationId: n.conversationId,
          cwd: n.cwd,
          hostConfig: n.hostConfig,
          createsBranch: e(Mr) || e(Er, n),
          includeLocalChanges: e(dr, er(t.value.target)),
        }).blockedStep;
      })));
  });
function Lr(
  e,
  { branch: t, cwd: n, hostConfig: r, operationSource: i, refetchPullRequestStatus: a },
) {
  (hn(e, { cwd: n, hostConfig: r, operationSource: i }),
    e.queryClient.invalidateQueries({
      predicate: (e) => e.meta?.hostId === r.id,
      queryKey: ut(`gh-pr-search`),
    }));
  let o =
    t == null
      ? Promise.resolve()
      : e.queryClient.invalidateQueries({
          queryKey: ut(`gh-pr-for-branch`, { cwd: n, headBranch: t, hostId: r.id }),
        });
  if (a != null) {
    o.then(a);
    return;
  }
  t != null &&
    o.then(async () => {
      await e
        .get(Ce, { cwd: n, headBranch: t, hostId: r.id, operationSource: i })
        .refetch?.({ cancelRefetch: !1 });
    });
}
var Rr = e(() => {
  (xn(), Wt(), Fe());
});
function zr({
  commitInstructions: e,
  diffError: t = null,
  draftMessage: n,
  oversizedDiffSummary: r = null,
  uncommittedDiff: i,
}) {
  let a = [],
    o = e?.trim() ?? ``;
  o.length > 0 &&
    a.push(
      `Custom commit instructions (follow these for commit message content and formatting):\n${o}`,
    );
  let s = n.trim();
  s.length > 0 && a.push(`Draft message:\n${s}`);
  let c = Br({ diffError: t, oversizedDiffSummary: r, uncommittedDiff: i });
  return (
    c != null && a.push(c),
    (s.length > 0 || c != null) && a.push(Vr),
    a.join(`

`)
  );
}
function Br({ diffError: e, oversizedDiffSummary: t, uncommittedDiff: n }) {
  return t == null
    ? e?.type === `diff-too-large`
      ? [`Changes:`, `Diff too large to include inline.`, ``, Hr].join(`
`)
      : n == null || n.trim().length === 0
        ? null
        : [`Changes:`, n, Hr].join(`
`)
    : [
        `Changes:`,
        `Diff too large to include inline.`,
        `Summary: ${t.filesChanged} changed files, +${t.linesAdded}/-${t.linesRemoved} lines.`,
        ``,
        Hr,
      ].join(`
`);
}
var Vr,
  Hr,
  Ur = e(() => {
    ((Vr = `Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.`),
      (Hr = `Untracked changes are not included.`));
  });
function Wr(e) {
  return e?.type === `success` ? e.unifiedDiff : null;
}
function Gr(e) {
  if (e == null || e.trim().length === 0) return null;
  let t = 0,
    n = 0,
    r = 0,
    i = !1;
  for (let a of e.split(/\r?\n/)) {
    if (a.startsWith(`diff --git `)) {
      ((t += 1), (i = !1));
      continue;
    }
    if (a.startsWith(`@@`)) {
      i = !0;
      continue;
    }
    if (i) {
      if (a.startsWith(`+`)) {
        n += 1;
        continue;
      }
      a.startsWith(`-`) && (r += 1);
    }
  }
  return { filesChanged: t, linesAdded: n, linesRemoved: r };
}
var Kr = e(() => {});
function qr({
  pullRequestInstructions: e,
  uncommittedDiff: t,
  filePaths: n,
  baseBranch: r,
  headBranch: i,
}) {
  let a = [];
  (r || i) &&
    a.push(
      [`Branches:`, `- Head: ${i ?? `-`}`, `- Base: ${r ?? `-`}`].join(`
`),
    );
  let o = e?.trim() ?? ``;
  return (
    o.length > 0 &&
      a.push(`Pull request instructions (apply these to the title/body content only):\n${Zr(o)}`),
    a.push(Jr({ uncommittedDiff: t, filePaths: n })),
    a.join(`

`)
  );
}
function Jr({ uncommittedDiff: e, filePaths: t }) {
  let n = e?.trim() ?? ``,
    r = (n.length > 0 ? Yr(n) : 0) > Qr,
    i = [`Changes:`];
  return n.length === 0 || r
    ? (i.push(Xr(t)),
      i.join(`
`))
    : (i.push(n),
      i.join(`
`));
}
function Yr(e) {
  return e.split(/\r?\n/).length;
}
function Xr(e) {
  if (e.length === 0) return `- (no files listed)`;
  let t = e.slice(0, $r),
    n = e.length - t.length,
    r = t.map((e) => `- ${e}`);
  return (
    n > 0 && r.push(`\u2026and ${n} more`),
    r.join(`
`)
  );
}
function Zr(e) {
  let t = e.match(/```/g);
  return t == null || t.length % 2 == 0 ? e : `${e}\n\`\`\``;
}
var Qr,
  $r,
  ei = e(() => {
    ((Qr = 1e3), ($r = 100));
  });
function ti(e) {
  let t = (0, ni.c)(18),
    { command: n, output: r, message: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = r?.trim() ?? ``), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  t[2] === i ? (s = t[3]) : ((s = i?.trim() ?? ``), (t[2] = i), (t[3] = s));
  let c = s,
    l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = `$`), (t[4] = l)) : (l = t[4]);
  let u = l,
    d = n != null && n.length > 0,
    f = o.length > 0,
    p = c.length > 0 && c !== o;
  if (!d && !f && !p) return null;
  let m;
  t[5] !== n || t[6] !== d
    ? ((m = d
        ? (0, ri.jsxs)(`div`, {
            className: `flex items-start gap-1.5 font-vscode-editor text-size-code-sm leading-5 text-codex-description`,
            children: [
              (0, ri.jsx)(`span`, {
                className: `shrink-0 select-none`,
                "aria-hidden": `true`,
                children: u,
              }),
              (0, ri.jsx)(`pre`, { className: `m-0 whitespace-pre-wrap`, children: n }),
            ],
          })
        : null),
      (t[5] = n),
      (t[6] = d),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== f || t[9] !== o
    ? ((h = f
        ? (0, ri.jsx)(`div`, {
            className: `max-h-20 overflow-auto`,
            children: (0, ri.jsx)(`pre`, {
              className: `m-0 font-vscode-editor text-size-code-sm whitespace-pre-wrap text-codex-terminal-foreground`,
              children: o,
            }),
          })
        : null),
      (t[8] = f),
      (t[9] = o),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== p || t[12] !== c
    ? ((g = p ? (0, ri.jsx)(`div`, { className: `text-size-chat-sm`, children: c }) : null),
      (t[11] = p),
      (t[12] = c),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== m || t[15] !== h || t[16] !== g
      ? ((_ = (0, ri.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-default bg-surface px-2.5 py-1.5 pe-8`,
          children: [m, h, g],
        })),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
var ni,
  ri,
  ii = e(() => {
    ((ni = K()), (ri = U()));
  });
function ai(e) {
  let t = (0, si.c)(20),
    { title: n, message: r, execOutput: i, onClose: a, primaryAction: o, secondaryAction: s } = e,
    c = pe(),
    l;
  t[0] === i?.output ? (l = t[1]) : ((l = i?.output?.trim() ?? ``), (t[0] = i?.output), (t[1] = l));
  let u = l,
    d;
  t[2] === r ? (d = t[3]) : ((d = r?.trim() ?? ``), (t[2] = r), (t[3] = d));
  let f = d,
    p = i?.command != null && i.command.length > 0 ? `$ ${i.command}` : null,
    m = u.length > 0 ? u : null,
    h = f.length > 0 && f !== u ? f : null,
    g;
  t[4] !== p || t[5] !== m || t[6] !== h
    ? ((g = [p, m, h].filter(oi)), (t[4] = p), (t[5] = m), (t[6] = h), (t[7] = g))
    : (g = t[7]);
  let _ = g.join(`
`),
    ee;
  t[8] !== _ || t[9] !== i?.command || t[10] !== i?.output || t[11] !== c || t[12] !== r
    ? ((ee =
        _.length > 0
          ? (0, ci.jsx)(`div`, {
              className: `mt-2 pt-2`,
              children: (0, ci.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, ci.jsx)(ti, { command: i?.command, output: i?.output, message: r }),
                  (0, ci.jsx)(et, {
                    className: `absolute end-1 top-1`,
                    ariaLabel: c.formatMessage({
                      id: `codex.terminalToast.copyError`,
                      defaultMessage: `Copy error`,
                      description: `Aria label for copying terminal error content from a toast`,
                    }),
                    iconOnly: !0,
                    showTooltip: !1,
                    onCopy: (e) => {
                      yt(_, e);
                    },
                  }),
                ],
              }),
            })
          : void 0),
      (t[8] = _),
      (t[9] = i?.command),
      (t[10] = i?.output),
      (t[11] = c),
      (t[12] = r),
      (t[13] = ee))
    : (ee = t[13]);
  let te;
  return (
    t[14] !== a || t[15] !== o || t[16] !== s || t[17] !== ee || t[18] !== n
      ? ((te = (0, ci.jsx)(Ve, {
          description: ee,
          level: `danger`,
          onClose: a,
          primaryAction: o,
          secondaryAction: s,
          title: n,
        })),
        (t[14] = a),
        (t[15] = o),
        (t[16] = s),
        (t[17] = ee),
        (t[18] = n),
        (t[19] = te))
      : (te = t[19]),
    te
  );
}
function oi(e) {
  return e != null;
}
var si,
  ci,
  li = e(() => {
    ((si = K()), I(), ce(), ct(), Ge(), ii(), (ci = U()));
  });
function ui({ toaster: e, title: t, message: n, execOutput: r }) {
  e.custom({
    duration: pi,
    content: ({ close: e }) => (0, fi.jsx)(ai, { title: t, message: n, execOutput: r, onClose: e }),
  });
}
function di(e) {
  switch (e) {
    case `committing`:
      return Z.committing;
    case `generating-commit-message`:
    case `generating-pr-message`:
      return Z.generatingMessages;
    case `creating-branch`:
      return Z.creatingBranch;
    case `creating-pr`:
      return Z.creatingPullRequest;
    case `pushing`:
      return Z.pushing;
  }
}
var fi,
  pi,
  Z,
  mi = e(() => {
    (I(),
      li(),
      (fi = U()),
      (pi = 7),
      (Z = qt({
        commitErrorTitle: {
          id: `review.commit.error`,
          defaultMessage: `Failed to commit changes`,
          description: `Toast shown when a commit fails`,
        },
        commitMessageEmpty: {
          id: `review.commit.generate.emptyResponse`,
          defaultMessage: `Couldn't generate a commit message`,
          description: `Toast shown when commit message generation returns no result`,
        },
        createBranchErrorTitle: {
          id: `review.commit.createBranchError`,
          defaultMessage: `Failed to create branch`,
          description: `Title for the error toast shown when creating a branch from a git action modal fails`,
        },
        checkoutBranchErrorTitle: {
          id: `review.commit.checkoutBranchError`,
          defaultMessage: `Failed to check out branch`,
          description: `Title for the error toast shown when checking out a branch from a git action modal fails`,
        },
        forcePushErrorTitle: {
          id: `localConversationPage.forcePushError`,
          defaultMessage: `Failed to force push`,
          description: `Error message when force push fails`,
        },
        pushErrorTitle: {
          id: `localConversationPage.pushError`,
          defaultMessage: `Failed to push changes`,
          description: `Error message when git push fails`,
        },
        createPullRequestErrorTitle: {
          id: `localConversationPage.createPullRequestError`,
          defaultMessage: `Failed to create pull request`,
          description: `Error message when creating a pull request fails`,
        },
        pullRequestGenerationError: {
          id: `localConversationPage.generatePullRequestMessageError`,
          defaultMessage: `Failed to generate pull request title and body`,
          description: `Error message shown when pull request generation fails in commit modal`,
        },
        committing: {
          id: `review.commit.disabled.committing`,
          defaultMessage: `Committing…`,
          description: `Tooltip shown on the commit button while committing`,
        },
        generatingMessages: {
          id: `localConversation.gitActions.generatingMessages`,
          defaultMessage: `Generating messages…`,
          description: `Label for a git action while generating messages`,
        },
        creatingBranch: {
          id: `localConversation.gitActions.creatingBranch`,
          defaultMessage: `Creating branch…`,
          description: `Label for a git action while creating a branch`,
        },
        creatingPullRequest: {
          id: `localConversationPage.createPullRequestButtonLabel.loading`,
          defaultMessage: `Creating PR…`,
          description: `Label for create pull request action while it is running`,
        },
        pushing: {
          id: `localConversationPage.pushButtonLabel.loading`,
          defaultMessage: `Pushing changes…`,
          description: `Label for git push action while a push is running`,
        },
      })));
  });
async function hi(e, t, { headBranch: n, signal: r } = {}) {
  let [i, a, o] = await Promise.all([
      z(`git`).request({
        method: `review-patch`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: yi, source: `branch` },
        signal: r,
      }),
      z(`git`).request({
        method: `branch-metadata`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: yi },
        signal: r,
      }),
      z(`git`).request({
        method: `review-summary`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: yi, source: `branch` },
        signal: r,
      }),
    ]),
    s = e.get(q, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: yi }),
    c = s.type === `success` ? s.data : void 0;
  return qr({
    pullRequestInstructions: O(e.get, l.pullRequestInstructions) ?? null,
    uncommittedDiff: i.diff.type === `success` ? i.diff.unifiedDiff : null,
    filePaths: o.type === `success` ? o.files.map((e) => e.path) : [],
    baseBranch: a.baseBranch ?? c?.defaultBranch ?? null,
    headBranch: n ?? a.branch ?? c?.branch ?? null,
  });
}
async function gi(e, t, n, r) {
  let i = e.get(cr),
    a = await z(`git`).request({
      method: `commit-message-diff`,
      params: { cwd: t.cwd, hostConfig: t.hostConfig, includeUnstaged: i, operationSource: yi },
      signal: r,
    }),
    o = Wr(a),
    s = a.type === `error` ? a.error : null,
    c = Gr(o),
    u = c?.linesAdded ?? 0,
    d = c?.linesRemoved ?? 0,
    f = u + d > vi ? { filesChanged: c?.filesChanged ?? 0, linesAdded: u, linesRemoved: d } : null;
  return zr({
    commitInstructions: O(e.get, l.commitInstructions) ?? null,
    diffError: s,
    draftMessage: n,
    oversizedDiffSummary: f,
    uncommittedDiff: f == null ? o : null,
  });
}
function _i(e, t, n, r) {
  let i = e.get(sr, t);
  (i.trim().length === 0 || i === n) && e.set(sr, t, r);
}
var vi,
  yi,
  bi,
  xi,
  Si,
  Ci = e(() => {
    (N(),
      c(),
      at(),
      xn(),
      m(),
      gt(),
      St(),
      Fe(),
      qe(),
      Ur(),
      Kr(),
      ei(),
      fr(),
      mi(),
      (vi = 1e3),
      (yi = `local_conversation_git_actions`),
      (bi = Yt(B, (e, { get: t, scope: n }) => {
        let r = er(e),
          i = t(P),
          a = t(G);
        return {
          mutationKey: [`vscode`, `generate-commit-message`, e.cwd, e.hostId, e.conversationId],
          mutationFn: async ({ signal: t } = {}) => {
            let o = n.get(Y, r);
            if (o?.phase === `generating-commit-message`) return null;
            let s = n.get(sr, r),
              c = o == null || o.workflow === `commit`;
            c && n.set(Y, r, { workflow: `commit`, phase: `generating-commit-message` });
            let l;
            try {
              l = await bt(`generate-commit-message`, {
                params: { hostId: e.hostId, prompt: await gi(n, e, s, t), cwd: e.cwd },
                signal: t,
              });
            } catch (e) {
              return (
                t?.aborted ||
                  a.danger(
                    i.formatMessage(
                      {
                        id: `review.commit.generate.failed`,
                        defaultMessage: `Failed to generate commit message: {error}`,
                        description: `Toast shown when commit message generation fails`,
                      },
                      { error: e instanceof Error ? e.message : String(e) },
                    ),
                  ),
                null
              );
            } finally {
              c && n.get(Y, r)?.phase === `generating-commit-message` && n.set(Y, r, o);
            }
            let u = l.message?.trim() ?? ``;
            return t?.aborted
              ? null
              : u.length === 0
                ? (a.danger(i.formatMessage(Z.commitMessageEmpty)), null)
                : (_i(n, r, s, u), u);
          },
        };
      })),
      (xi = Yt(B, (e, { get: t, scope: n }) => {
        let r = er(e),
          i = t(P),
          a = t(G);
        return {
          mutationKey: [
            `vscode`,
            `generate-commit-pull-request-message`,
            e.cwd,
            e.hostId,
            e.conversationId,
          ],
          mutationFn: async ({ headBranch: t, signal: o } = {}) => {
            let s = n.get(sr, r),
              c = n.get(lr, r).trim(),
              l = n.get(ur, r).trim(),
              u = s.trim();
            if (u.length > 0 && c.length > 0 && l.length > 0)
              return { body: l, message: u, title: c };
            let d;
            try {
              let [r, i] = await Promise.all([
                gi(n, e, s, o),
                hi(n, e, { headBranch: t, signal: o }),
              ]);
              if (i.trim().length === 0) return null;
              d = await bt(`generate-commit-pull-request-message`, {
                params: {
                  hostId: e.hostId,
                  prompt: [`Commit message context:`, r, ``, `Pull request context:`, i].join(`
`),
                  cwd: e.cwd,
                },
                signal: o,
              });
            } catch (e) {
              return (
                o?.aborted ||
                  a.danger(
                    i.formatMessage(
                      {
                        id: `review.commitPullRequest.generate.failed`,
                        defaultMessage: `Failed to generate commit and pull request messages: {error}`,
                        description: `Toast shown when combined commit and pull request message generation fails`,
                      },
                      { error: e instanceof Error ? e.message : String(e) },
                    ),
                  ),
                null
              );
            }
            let f = u || d.message?.trim() || ``,
              p = c || d.title?.trim() || ``,
              m = l || d.body?.trim() || ``;
            return o?.aborted
              ? null
              : f.length === 0 || p.length === 0 || m.length === 0
                ? (a.danger(
                    i.formatMessage({
                      id: `review.commitPullRequest.generate.emptyResponse`,
                      defaultMessage: `Couldn't generate commit and pull request messages`,
                      description: `Toast shown when combined commit and pull request message generation returns no result`,
                    }),
                  ),
                  null)
                : (_i(n, r, s, f),
                  c.length === 0 && n.set(lr, r, (e) => (e.trim().length === 0 ? p : e)),
                  l.length === 0 && n.set(ur, r, (e) => (e.trim().length === 0 ? m : e)),
                  { body: m, message: f, title: p });
          },
        };
      })),
      (Si = Yt(B, (e, { get: t, scope: n }) => {
        let r = t(P),
          i = t(G);
        return {
          mutationKey: [
            `vscode`,
            `generate-pull-request-message`,
            e.cwd,
            e.hostId,
            e.conversationId,
          ],
          mutationFn: async ({ body: t, headBranch: a, signal: o, title: s }) => {
            let c = t.trim(),
              l = s.trim();
            if (c.length > 0 && l.length > 0) return { body: c, title: l };
            let u;
            try {
              let t = (await hi(n, e, { headBranch: a, signal: o })).trim();
              if (o?.aborted) return null;
              if (t.length === 0)
                return (i.danger(r.formatMessage(Z.pullRequestGenerationError)), null);
              u = await bt(`generate-pull-request-message`, {
                params: { hostId: e.hostId, prompt: t, cwd: e.cwd },
                signal: o,
              });
            } catch {
              return (o?.aborted || i.danger(r.formatMessage(Z.pullRequestGenerationError)), null);
            }
            let d = c || u.body?.trim() || ``,
              f = l || u.title?.trim() || ``;
            return o?.aborted
              ? null
              : d.length > 0 && f.length > 0
                ? { body: d, title: f }
                : (i.danger(r.formatMessage(Z.pullRequestGenerationError)), null);
          },
        };
      })));
  });
function wi(e, t) {
  if (t !== void 0) return t ? Te : null;
  if (Qt(e, `codex_git_commit`) !== !0) return null;
  let n = e?.commit_attribution;
  if (n === void 0) return Te;
  if (n == null) return null;
  if (typeof n != `string`) return Te;
  let r = n.trim();
  return r.length > 0 ? r : null;
}
async function Ti(e, t) {
  let n = Di.get(e);
  if (n != null && Date.now() - n.fetchedAt < Ei) return n.value;
  try {
    let n = (await te.safeGet(`/wham/settings/user`, { signal: t })).commit_attribution_enabled;
    return (Di.set(e, { fetchedAt: Date.now(), value: n }), n);
  } catch {
    return null;
  }
}
var Ei,
  Di,
  Oi = e(() => {
    (c(), be(), (Ei = 5 * 6e4), (Di = new WeakMap()));
  }),
  ki,
  Ai = e(() => {
    (Ue(),
      N(),
      Xe(),
      ve(),
      gt(),
      qe(),
      fr(),
      (ki = Yt(
        B,
        (e, { scope: t }) => ({
          mutationKey: [`git`, `commit`, e.cwd],
          mutationFn: (n) =>
            z(`git`).request({
              method: `commit`,
              signal: n.signal,
              params: {
                cwd: e.cwd,
                hostConfig: e.hostConfig,
                message: n.message,
                includeUnstaged: t.get(cr),
                commitAttribution: n.commitAttribution,
                operationSource: n.operationSource,
              },
            }),
          onSuccess: (n) => {
            n.status === `success` && (We(t, Tt, {}), t.set(sr, er(e), ``));
          },
        }),
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  });
function ji({ baseBranch: e, headBranch: t, remoteUrl: n }) {
  let r = e?.trim() ?? ``,
    i = t.trim();
  if (n == null || r.length === 0 || i.length === 0) return null;
  let a = Rt(n);
  return a?.host === `github.com`
    ? `https://${a.host}/${a.owner}/${a.repo}/compare/${Mi(r)}...${Mi(i)}`
    : null;
}
function Mi(e) {
  return encodeURIComponent(e).replaceAll(`%2F`, `/`);
}
var Ni = e(() => {
    c();
  }),
  Pi,
  Fi,
  Ii = e(() => {
    (Ue(),
      N(),
      ft(),
      ve(),
      Lt(),
      _(),
      R(),
      Et(),
      kt(),
      Zt(),
      he(),
      ht(),
      Re(),
      gt(),
      Ni(),
      Fe(),
      (Pi = class extends Error {
        execOutput;
        constructor(e) {
          (super(e.error), (this.execOutput = e.execOutput));
        }
      }),
      (Fi = Yt(
        B,
        (e, { scope: t }) => ({
          mutationKey: [`vscode`, `gh-pr-create`, e.cwd, e.hostId],
          mutationFn: async (n) => {
            let r = {
              cwd: e.cwd,
              hostId: e.hostId,
              operation: `create`,
              operationSource: n.operationSource,
              threadId: n.conversationId,
            };
            await Qe({ wait: () => t.when((e) => e.get(Pe, r).source !== `loading`) }, n.signal);
            let { createPullRequestTarget: i, originRepository: a, source: o } = t.get(Pe, r),
              s =
                o === `github-cli` || o === `github-connector`
                  ? await t.query
                      .getOrFetch(re, {
                        hostId: e.hostId,
                        hostname: a?.host ?? `github.com`,
                        provider: o,
                        source: n.operationSource,
                      })
                      .catch(() => null)
                  : null,
              c = s?.status === `success` ? s.account : null,
              l = t.query.snapshot(h, {
                cwd: e.cwd,
                headBranch: n.headBranch,
                hostId: e.hostId,
                operationSource: n.operationSource,
              }).queryKey;
            switch ((n.signal?.throwIfAborted(), o)) {
              case `github-cli`: {
                let t = await vt(
                  `gh-pr-create`,
                  {
                    cwd: e.cwd,
                    headBranch: n.headBranch,
                    baseBranch: n.baseBranch,
                    hostId: e.hostId,
                    isDraft: n.isDraft,
                    openInBrowser: n.openInBrowser,
                    titleOverride: n.titleOverride,
                    bodyOverride: n.bodyOverride,
                  },
                  { signal: n.signal, source: n.operationSource },
                );
                if (t.status === `error`) throw new Pi(t);
                return {
                  number: t.number,
                  url: t.url,
                  account: c,
                  provider: o,
                  discoveryQueryKey: l,
                };
              }
              case `github-connector`: {
                if (i == null) throw Error(`Pull request creation source unavailable`);
                let { originRepository: r, repository: a, threadId: s } = i,
                  u =
                    `${r.host}/${r.owner}/${r.repo}`.toLowerCase() !==
                    `${a.host}/${a.owner}/${a.repo}`.toLowerCase(),
                  d =
                    u && !n.headBranch.includes(`:`) ? `${r.owner}:${n.headBranch}` : n.headBranch;
                if (n.openInBrowser === !0) {
                  let e = ji({
                    baseBranch: n.baseBranch,
                    headBranch: d,
                    remoteUrl: `https://${a.host}/${a.owner}/${a.repo}`,
                  });
                  if (e == null) throw Error(`Failed to open pull request in browser`);
                  let t = new URL(e);
                  return (
                    t.searchParams.set(`expand`, `1`),
                    t.searchParams.set(`title`, n.titleOverride ?? n.headBranch),
                    t.searchParams.set(`body`, n.bodyOverride ?? ``),
                    { number: null, url: t.href, account: c, provider: o, discoveryQueryKey: l }
                  );
                }
                return {
                  ...(await dt(t, e.hostId, a, {
                    baseBranch: n.baseBranch,
                    body: n.bodyOverride ?? ``,
                    headBranch: d,
                    headRepository: u ? `${r.owner}/${r.repo}` : null,
                    isDraft: n.isDraft ?? !1,
                    threadId: s,
                    title: n.titleOverride ?? n.headBranch,
                  })),
                  account: c,
                  provider: o,
                  discoveryQueryKey: l,
                };
              }
              case `loading`:
              case `unavailable`:
                throw Error(`Pull request creation source unavailable`);
            }
          },
          onSuccess: async (n, r) => {
            if (
              (t.queryClient.invalidateQueries({
                predicate: (t) => t.meta?.hostId === e.hostId,
                queryKey: ut(`gh-pr-search`),
              }),
              r.openInBrowser === !0)
            )
              return;
            We(t, w, {});
            let i = n.url == null ? null : _t(n.url);
            if (i != null && n.account != null) {
              let e = t.query.snapshot(T, {
                request: { account: n.account, pullRequest: i },
                provider: n.provider,
                source: r.operationSource,
              });
              (await e.cancel(),
                e.setData({
                  status: `success`,
                  baseBranch: r.baseBranch,
                  headBranch: r.headBranch,
                  canMerge: !1,
                  checks: [],
                  checksComplete: !1,
                  ciStatus: `pending`,
                  hasOpenPr: !0,
                  hasPendingChecks: !0,
                  headRevision: void 0,
                  isDraft: r.isDraft ?? !1,
                  mergeBlocker: `unknown`,
                  state: `open`,
                  title: r.titleOverride?.trim() || null,
                  url: n.url,
                }),
                await t.queryClient.cancelQueries({ queryKey: n.discoveryQueryKey, exact: !0 }),
                t.queryClient.setQueryData(n.discoveryQueryKey, i));
            } else
              t.queryClient.invalidateQueries({
                queryKey: ut(`gh-pr-for-branch`, {
                  cwd: e.cwd,
                  headBranch: r.headBranch,
                  hostId: e.hostId,
                }),
              });
            r.conversationId != null &&
              r.headBranch.trim().length > 0 &&
              (F(t, {
                conversationId: r.conversationId,
                headBranch: r.headBranch,
                hostId: e.hostId,
                root: e.root,
                url: n.url,
              }),
              jt(t, e.hostId, r.conversationId, r.headBranch, e.root));
          },
          onError: (n) => {
            n instanceof Pi && Nt(t, e.hostId);
          },
          onSettled: (n, r, i) => {
            (i.signal?.aborted || r != null) &&
              i.openInBrowser !== !0 &&
              t.queryClient.invalidateQueries({
                queryKey: ut(`gh-pr-for-branch`, {
                  cwd: e.cwd,
                  headBranch: i.headBranch,
                  hostId: e.hostId,
                }),
              });
          },
          networkMode: `always`,
        }),
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  });
function Li(e, t, n, r) {
  if (!t) return;
  let i = xe({
    metadata: t,
    method: `branch-ahead-count`,
    params: { operationSource: r, root: t.root },
    hostKey: n,
  });
  e.setQueryData(i, (e) => e && { ...e, commitsAhead: 0 });
}
var Ri = e(() => {
    p();
  }),
  zi,
  Bi = e(() => {
    (Ue(),
      N(),
      Ke(),
      Bt(),
      ve(),
      gt(),
      Fe(),
      Ri(),
      (zi = Yt(
        B,
        (e, { queryClient: t, scope: n }) => {
          let r = st(e.hostConfig);
          return {
            mutationKey: [`vscode`, `git-push`, e.cwd, e.hostId],
            mutationFn: (t) =>
              bt(`git-push`, {
                params: {
                  cwd: e.cwd,
                  force: t.force,
                  hostId: e.hostId,
                  refspec: t.refspec,
                  setUpstream: t.setUpstream,
                },
                signal: t.signal,
                source: t.operationSource,
              }),
            onSuccess: (i, a) => {
              i.status === `success` &&
                (We(n, ke, { forced: a.force ?? !1 }),
                a.analyticsAttribution != null &&
                  n.get(mt).submitCodexAnalyticsEvent?.({
                    ...a.analyticsAttribution,
                    action: `push`,
                    eventKind: `action`,
                    metadata: { forced: a.force ?? !1 },
                  }),
                Li(
                  t,
                  t.getQueryData(He(e.cwd, r, e.hostConfig, a.operationSource).queryKey),
                  r,
                  a.operationSource,
                ));
            },
            networkMode: `always`,
          };
        },
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  }),
  Vi,
  Hi = e(() => {
    (N(),
      p(),
      Ke(),
      Bt(),
      gt(),
      Fe(),
      (Vi = Yt(B, (e, { queryClient: t }) => {
        let n = st(e.hostConfig);
        return {
          mutationKey: [
            `vscode`,
            `git-create-and-checkout-branch`,
            e.cwd,
            e.hostId,
            e.operationSource,
          ],
          mutationFn: async ({ signal: t, ...n }) => {
            let r = await bt(`git-create-branch`, {
              params: { ...n, cwd: e.cwd, hostId: e.hostId },
              signal: t,
              source: e.operationSource,
            });
            if (r.status === `error`)
              return { status: `create-error`, error: r.error, execOutput: r.execOutput };
            let i = await bt(`git-checkout-branch`, {
              params: { branch: n.branch, cwd: e.cwd, hostId: e.hostId },
              signal: t,
              source: e.operationSource,
            });
            return i.status === `error`
              ? {
                  status: `checkout-error`,
                  error: i.error,
                  errorType: i.errorType,
                  conflictedPaths: i.conflictedPaths,
                  execOutput: i.execOutput,
                }
              : { status: `success`, branch: i.branch };
          },
          onSettled: (r, i, a) => {
            let o = t.getQueryData(He(e.cwd, n, e.hostConfig, e.operationSource).queryKey);
            o != null &&
              (r?.status === `success` &&
                t.setQueryData(
                  xe({
                    hostKey: n,
                    metadata: o,
                    method: `current-branch`,
                    params: { operationSource: e.operationSource, root: o.root },
                  }),
                  { branch: r.branch },
                ),
              fe(t, o, { changeType: a.mode === `synced` ? `synced-branch` : `head`, hostKey: n }),
              r?.status === `success` &&
                a.mode === `synced` &&
                fe(t, o, { changeType: `head`, hostKey: n }));
          },
          networkMode: `always`,
        };
      })));
  });
async function Ui({
  scope: e,
  conversationId: t,
  target: n,
  operationSource: r,
  branch: i,
  mode: a,
  signal: o,
}) {
  if (o?.aborted) return !1;
  let s = e.get(G),
    c = e.get(P),
    l = c.formatMessage(Z.createBranchErrorTitle);
  try {
    let u = await e
      .get(Vi, { ...n, operationSource: r })
      .mutateAsync({ branch: i, failIfExists: !0, mode: a, signal: o });
    switch (u.status) {
      case `success`:
        return (t != null && jt(e, n.hostConfig.id, t, u.branch, n.root), !o?.aborted);
      case `create-error`:
        return (
          o?.aborted || ui({ toaster: s, title: l, message: u.error, execOutput: u.execOutput }), !1
        );
      case `checkout-error`:
        return (
          o?.aborted ||
            ui({
              toaster: s,
              title: c.formatMessage(Z.checkoutBranchErrorTitle),
              message: u.error,
              execOutput: u.execOutput,
            }),
          !1
        );
    }
  } catch {
    return (o?.aborted || ui({ toaster: s, title: l, message: l }), !1);
  }
}
async function Wi({
  scope: e,
  target: t,
  resolveCommitMessage: n,
  operationSource: r,
  allowNothingToCommit: i = !1,
  signal: a,
}) {
  if (a?.aborted) return !1;
  let o = e.get(G),
    s = e.get(P),
    c = await n();
  if (a?.aborted || c == null) return !1;
  let l = c.trim();
  if (l.length === 0) return (o.danger(s.formatMessage(Z.commitMessageEmpty)), !1);
  let u = await Ti(e, a);
  if (a?.aborted) return !1;
  let d = wi(e.get(v, { cwd: t.cwd, hostId: t.hostId }).data, u);
  try {
    let n = await e
      .get(ki, { ...t, operationSource: r })
      .mutateAsync({ message: l, commitAttribution: d, operationSource: r, signal: a });
    if (a?.aborted) return !1;
    if (n.status === `error`)
      return i && n.errorType === `nothing-to-commit`
        ? !0
        : (ui({
            toaster: o,
            title: s.formatMessage(Z.commitErrorTitle),
            message: n.error,
            execOutput: n.execOutput,
          }),
          !1);
  } catch {
    return (
      a?.aborted || ui({ toaster: o, title: s.formatMessage(Z.commitErrorTitle), message: null }),
      !1
    );
  }
  return !0;
}
async function Gi({
  scope: e,
  target: t,
  pushStatus: n,
  analyticsAttribution: r,
  operationSource: i,
  forcePush: a = !1,
  signal: o,
}) {
  if (o?.aborted) return !1;
  let s = e.get(G),
    c = e.get(P),
    l = c.formatMessage(a ? Z.forcePushErrorTitle : Z.pushErrorTitle);
  if (n == null) return (ui({ toaster: s, title: l, message: null }), !1);
  let u = { force: a };
  !n.upstreamRef && n.branch && ((u.refspec = `HEAD:refs/heads/${n.branch}`), (u.setUpstream = !0));
  try {
    let n = await e
      .get(zi, { ...t, operationSource: i })
      .mutateAsync({ ...u, analyticsAttribution: r, operationSource: i, signal: o });
    if (n.status === `error`)
      return (
        o?.aborted ||
          ui({
            toaster: s,
            title: l,
            message: n.execOutput == null ? c.formatMessage(Z.pushErrorTitle) : null,
            execOutput: n.execOutput,
          }),
        !1
      );
  } catch {
    return (o?.aborted || ui({ toaster: s, title: l, message: null }), !1);
  }
  return !0;
}
async function Ki({
  scope: e,
  conversationId: t,
  target: n,
  pushStatus: r,
  createPullRequestAsDraft: i,
  operationSource: a,
  openInBrowser: o = !1,
  title: s,
  body: c,
  signal: l,
}) {
  if (l?.aborted) return null;
  let u = e.get(G),
    d = e.get(P);
  if (r?.branch == null || r.defaultBranch == null)
    return (
      ui({ toaster: u, title: d.formatMessage(Z.createPullRequestErrorTitle), message: null }), null
    );
  try {
    let u = await e.get(Fi, { ...n, operationSource: a }).mutateAsync({
      headBranch: r.branch,
      baseBranch: r.defaultBranch,
      isDraft: i,
      openInBrowser: o,
      titleOverride: s,
      bodyOverride: c,
      conversationId: t,
      operationSource: a,
      signal: l,
    });
    return l?.aborted
      ? null
      : (o &&
          u.url != null &&
          me({ href: u.url, initiator: `pull_request_link`, openTarget: `external-browser` }),
        { url: u.url });
  } catch (e) {
    return (
      l?.aborted ||
        ui({
          toaster: u,
          title: d.formatMessage(Z.createPullRequestErrorTitle),
          message: e instanceof Error ? e.message : null,
          execOutput: e instanceof Pi ? e.execOutput : void 0,
        }),
      null
    );
  }
}
var qi = e(() => {
  (ie(), ft(), se(), at(), m(), Oi(), Ai(), Ii(), Bi(), Hi(), mi());
});
async function Ji(e, t, n) {
  let r = er(t);
  if (e.get(Y, r) != null) return !1;
  let i = nr(r);
  e.set(Y, r, {
    workflow: `commit`,
    phase:
      n.newBranch == null ? (n.nextStep === `push` ? `pushing` : `committing`) : `creating-branch`,
  });
  try {
    let a = e.get(q, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      o = a.type === `success` ? a.data : void 0,
      s = n.newBranch ?? o?.branch,
      c;
    if (
      n.newBranch != null &&
      n.nextStep !== `push` &&
      e.get(sr, r).trim().length === 0 &&
      ((c = await e
        .get(bi, {
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          hostId: t.hostId,
          root: t.root,
        })
        .mutateAsync({ signal: i })),
      c == null)
    )
      return !1;
    if (n.newBranch != null) {
      if (
        !(await Ui({
          scope: e,
          conversationId: t.conversationId,
          target: t,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
          signal: i,
        }))
      )
        return !1;
      await hn(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (n.nextStep !== `push`) {
      if (
        n.newBranch == null &&
        t.operationSource === `local_conversation_git_actions` &&
        t.conversationId != null &&
        e.get(Tr, t)
      ) {
        let n = e.get(Sr, t);
        n.length > 0 && jt(e, t.hostId, t.conversationId, n, t.root);
      }
      if (
        (e.set(Y, r, { workflow: `commit`, phase: `committing` }),
        !(await Wi({
          scope: e,
          target: t,
          resolveCommitMessage: async () => {
            if (c != null) return c;
            let n = e.get(sr, r).trim();
            return n.length > 0
              ? n
              : e
                  .get(bi, {
                    conversationId: t.conversationId,
                    cwd: t.cwd,
                    hostConfig: t.hostConfig,
                    hostId: t.hostId,
                    root: t.root,
                  })
                  .mutateAsync({ signal: i });
          },
          operationSource: t.operationSource,
          signal: i,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `commit`) {
      e.set(Y, r, { workflow: `commit`, phase: `pushing` });
      let n = e.get(q, {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
        }),
        a = n.type === `success` ? n.data : void 0;
      if (
        ((s = a?.branch ?? s),
        !(await Gi({
          scope: e,
          target: t,
          pushStatus: a,
          analyticsAttribution: e.get(rn),
          operationSource: t.operationSource,
          signal: i,
        })) ||
          (Lr(e, {
            branch: s,
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: t.operationSource,
          }),
          i.aborted))
      )
        return !1;
    }
    let l = e.get(P),
      u = s?.trim() ?? ``,
      d;
    return (
      (d =
        n.nextStep === `commit`
          ? u.length > 0
            ? l.formatMessage(
                {
                  id: `review.commit.successToast.namedBranch`,
                  defaultMessage: `Committed to {branch}`,
                  description: `Toast shown when a commit succeeds on a named branch`,
                },
                { branch: u },
              )
            : l.formatMessage({
                id: `review.commit.successToast.unknownBranch`,
                defaultMessage: `Committed to your branch`,
                description: `Toast shown when a commit succeeds but the branch name is unavailable`,
              })
          : u.length > 0
            ? l.formatMessage(
                {
                  id: `localConversationPage.commitAndPushToast.namedBranch`,
                  defaultMessage: `Pushed {branch}`,
                  description: `Toast shown when commit and push succeeds on a named branch`,
                },
                { branch: u },
              )
            : l.formatMessage({
                id: `localConversationPage.commitAndPushToast.unknownBranch`,
                defaultMessage: `Pushed your branch`,
                description: `Toast shown when commit and push succeeds but the branch name is unavailable`,
              })),
      e.get(G).success(d),
      !0
    );
  } finally {
    (ir(r, i), e.set(Y, r, null));
  }
}
var Yi = e(() => {
  (ft(), at(), xn(), m(), an(), fr(), Ir(), Rr(), Ci(), qi());
});
async function Xi(e, t, n) {
  let r = er(t);
  if (e.get(Y, r) != null) return !1;
  let i = nr(r);
  e.set(Y, r, {
    workflow: `create-pr`,
    phase:
      n.nextStep === `commit-push-and-create-pr`
        ? `generating-commit-message`
        : `generating-pr-message`,
  });
  try {
    let a = e.get(dr, r);
    e.set(cr, a);
    let o = e.get(q, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      s = o.type === `success` ? o.data : void 0,
      c = n.newBranch ?? s?.branch,
      l = s,
      u =
        n.nextStep === `commit-push-and-create-pr`
          ? await e
              .get(xi, {
                conversationId: t.conversationId,
                cwd: t.cwd,
                hostConfig: t.hostConfig,
                hostId: t.hostId,
                root: t.root,
              })
              .mutateAsync({ headBranch: n.newBranch, signal: i })
          : null;
    if (n.nextStep === `commit-push-and-create-pr` && u == null) return !1;
    let d =
      u ??
      (await e
        .get(Si, {
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          hostId: t.hostId,
          root: t.root,
        })
        .mutateAsync({
          body: e.get(ur, r),
          headBranch: n.newBranch,
          signal: i,
          title: e.get(lr, r),
        }));
    if (d == null) return !1;
    if (n.newBranch != null) {
      if (
        (e.set(Y, r, { workflow: `create-pr`, phase: `creating-branch` }),
        !(await Ui({
          scope: e,
          conversationId: t.conversationId,
          target: t,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
          signal: i,
        })))
      )
        return !1;
      await hn(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (n.nextStep === `commit-push-and-create-pr`) {
      if (n.newBranch == null && t.conversationId != null && e.get(Tr, t)) {
        let n = e.get(Sr, t);
        n.length > 0 && jt(e, t.hostId, t.conversationId, n, t.root);
      }
      if (
        (e.set(Y, r, { workflow: `create-pr`, phase: `committing` }),
        !(await Wi({
          scope: e,
          target: t,
          resolveCommitMessage: async () => u?.message ?? null,
          operationSource: t.operationSource,
          allowNothingToCommit: !0,
          signal: i,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `create-pr`) {
      e.set(Y, r, { workflow: `create-pr`, phase: `pushing` });
      let n = e.get(q, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
      if (
        ((l = n.type === `success` ? n.data : void 0),
        (c = l?.branch ?? c),
        !(await Gi({
          scope: e,
          target: t,
          pushStatus: l,
          analyticsAttribution: e.get(rn),
          operationSource: t.operationSource,
          signal: i,
        })) ||
          (Lr(e, {
            branch: c,
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: t.operationSource,
          }),
          i.aborted))
      )
        return !1;
    }
    e.set(Y, r, { workflow: `create-pr`, phase: `creating-pr` });
    let f = await Ki({
      scope: e,
      conversationId: t.conversationId,
      target: t,
      pushStatus: l,
      createPullRequestAsDraft: n.createPullRequestAsDraft,
      operationSource: t.operationSource,
      openInBrowser: n.openInBrowser,
      title: d.title,
      body: d.body,
      signal: i,
    });
    return f == null || n.openInBrowser ? f != null : (Zi(e, c, f.url), !0);
  } finally {
    (ir(r, i), e.set(Y, r, null));
  }
}
function Zi(e, t, n) {
  let r = t?.trim() ?? ``,
    i =
      n == null
        ? `PR`
        : (0, Qi.jsx)(`a`, {
            href: n,
            className: `cursor-interaction underline decoration-current decoration-[0.5px]`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            onClick: (e) => {
              ue({ event: e, href: n, initiator: `pull_request_link` });
            },
            children: `PR`,
          });
  e.get(G).success(
    r.length > 0
      ? (0, Qi.jsx)(d, {
          id: `localConversationPage.createPullRequestSuccessToast.namedBranch`,
          defaultMessage: `Created {prLabel} for {branch}`,
          description: `Toast shown when creating a pull request succeeds for a named branch`,
          values: { branch: r, prLabel: i },
        })
      : (0, Qi.jsx)(d, {
          id: `localConversationPage.createPullRequestSuccessToast.unknownBranch`,
          defaultMessage: `Created {prLabel} for your branch`,
          description: `Toast shown when creating a pull request succeeds but the branch name is unavailable`,
          values: { prLabel: i },
        }),
  );
}
var Qi,
  $i = e(() => {
    (I(), ft(), se(), at(), xn(), an(), fr(), Ir(), Rr(), Ci(), qi(), (Qi = U()));
  }),
  ea,
  ta = e(() => {
    (N(),
      Kt(),
      Yi(),
      $i(),
      (ea = Yt(H, (e, { scope: t }) => ({
        mutationKey: [`local-git-workflow`, e.cwd, e.hostId],
        mutationFn: (n) => {
          switch (n.kind) {
            case `commit`:
              return Ji(t, e, n);
            case `create-pr`:
              return Xi(t, e, n);
          }
        },
        networkMode: `always`,
      }))));
  });
function na(e) {
  let t = (0, ia.c)(15),
    { branchAlreadyExists: n, disabled: r, placeholder: i, value: a, onChange: o } = e,
    s = pe(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `localConversationPage.gitActions.branchNameLabel`,
        defaultMessage: `Branch name`,
        description: `Accessible label for a new Git action branch field`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (e) => {
        o(e.target.value);
      }),
      (t[2] = o),
      (t[3] = l));
  let u;
  t[4] !== r || t[5] !== i || t[6] !== c || t[7] !== l || t[8] !== a
    ? ((u = (0, aa.jsx)(`input`, {
        autoFocus: !0,
        className: `w-full bg-transparent text-default outline-none placeholder:text-codex-description`,
        "aria-label": c,
        placeholder: i,
        value: a,
        disabled: r,
        onKeyDown: ra,
        onChange: l,
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = l),
      (t[8] = a),
      (t[9] = u))
    : (u = t[9]);
  let f;
  t[10] === n
    ? (f = t[11])
    : ((f = n
        ? (0, aa.jsx)(`p`, {
            className: `text-xs text-danger`,
            children: (0, aa.jsx)(d, {
              id: `localConversationPage.gitActions.branchExistsError`,
              defaultMessage: `Branch already exists`,
              description: `Validation message shown when a new Git action branch already exists`,
            }),
          })
        : null),
      (t[10] = n),
      (t[11] = f));
  let p;
  return (
    t[12] !== u || t[13] !== f
      ? ((p = (0, aa.jsxs)(`div`, {
          className: `flex flex-col gap-1 px-3 pt-2`,
          children: [u, f],
        })),
        (t[12] = u),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function ra(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
var ia,
  aa,
  oa = e(() => {
    ((ia = K()), I(), (aa = U()));
  });
function sa(e) {
  let t = (0, da.c)(136),
    {
      open: r,
      onOpenChange: i,
      conversationId: a,
      target: o,
      codexWorktree: s,
      enablePushActions: c,
      operationSource: u,
      onStatusChange: p,
      onRequestReset: m,
    } = e,
    h = s !== void 0 && s,
    g = c !== void 0 && c,
    _ = u === void 0 ? `commit_modal` : u,
    te = n(B),
    v = pe(),
    { cwd: y, hostConfig: b } = o,
    [ne, re] = (0, fa.useState)(null),
    [ie, ae] = (0, fa.useState)(null),
    S = ge(l.branchPrefix),
    C;
  t[0] !== a || t[1] !== b
    ? ((C = a == null ? null : { hostId: b.id, threadId: a }), (t[0] = a), (t[1] = b), (t[2] = C))
    : (C = t[2]);
  let w = M(Ye, C),
    T = ee(cr),
    E = M(it, a ?? null),
    D = a ?? null,
    O,
    k;
  t[3] !== h || t[4] !== o || t[5] !== D
    ? ((k = { ...o, codexWorktree: h, conversationId: D }),
      (O = er(k)),
      (t[3] = h),
      (t[4] = o),
      (t[5] = D),
      (t[6] = O),
      (t[7] = k))
    : ((O = t[6]), (k = t[7]));
  let A = O,
    se = M(sr, A),
    ce = M(Sr, k),
    j = M(Er, k),
    le;
  t[8] !== y || t[9] !== b
    ? ((le = { cwd: y, hostConfig: b }), (t[8] = y), (t[9] = b), (t[10] = le))
    : (le = t[10]);
  let ue = M(Xn, le),
    de;
  t[11] !== y || t[12] !== b
    ? ((de = { cwd: y, hostConfig: b }), (t[11] = y), (t[12] = b), (t[13] = de))
    : (de = t[13]);
  let N = M(Zn, de),
    fe;
  t[14] !== _ || t[15] !== k
    ? ((fe = { ...k, operationSource: _ }), (t[14] = _), (t[15] = k), (t[16] = fe))
    : (fe = t[16]);
  let P = M(ea, fe),
    me;
  t[17] !== y || t[18] !== b || t[19] !== _
    ? ((me = { cwd: y, hostConfig: b, operationSource: _ }),
      (t[17] = y),
      (t[18] = b),
      (t[19] = _),
      (t[20] = me))
    : (me = t[20]);
  let he = M(q, me),
    _e = he.type === `success` ? he.data : void 0,
    ve = M(Y, A),
    F = P.isPending || ve != null,
    ye;
  t[21] !== y || t[22] !== b || t[23] !== T
    ? ((ye = { cwd: y, hostConfig: b, includeUnstaged: T }),
      (t[21] = y),
      (t[22] = b),
      (t[23] = T),
      (t[24] = ye))
    : (ye = t[24]);
  let be = M(Jn, ye),
    I;
  t[25] !== y || t[26] !== b || t[27] !== T
    ? ((I = { cwd: y, hostConfig: b, includeUnstaged: T }),
      (t[25] = y),
      (t[26] = b),
      (t[27] = T),
      (t[28] = I))
    : (I = t[28]);
  let L = M(Yn, I),
    xe;
  t[29] !== y || t[30] !== b
    ? ((xe = { cwd: y, hostConfig: b, includeUnstaged: !0 }),
      (t[29] = y),
      (t[30] = b),
      (t[31] = xe))
    : (xe = t[31]);
  let Se = M(Yn, xe),
    Ce = null;
  _e && (Ce = _e.branch ?? _e.upstreamRef ?? null);
  let we;
  t[32] !== ce || t[33] !== Ce || t[34] !== j
    ? ((we = !j && ce?.trim() ? ce.trim() : j ? null : Ce),
      (t[32] = ce),
      (t[33] = Ce),
      (t[34] = j),
      (t[35] = we))
    : (we = t[35]);
  let Te = we,
    Ee = g,
    R = Ee && (ne ?? j),
    Oe;
  t[36] !== S || t[37] !== w
    ? ((Oe = De({ branchPrefix: S, conversationTitle: w })), (t[36] = S), (t[37] = w), (t[38] = Oe))
    : (Oe = t[38]);
  let ke = ie ?? Oe,
    Ae;
  t[39] === ke ? (Ae = t[40]) : ((Ae = ke.trim()), (t[39] = ke), (t[40] = Ae));
  let je = Ae,
    Me = f(je, 200),
    Pe;
  t[41] !== R || t[42] !== Me || t[43] !== r
    ? ((Pe = r && R && Me.length > 0 && !Me.endsWith(`/`)),
      (t[41] = R),
      (t[42] = Me),
      (t[43] = r),
      (t[44] = Pe))
    : (Pe = t[44]);
  let Fe = Pe,
    z;
  t[45] !== y || t[46] !== b
    ? ((z = { cwd: y, hostConfig: b }), (t[45] = y), (t[46] = b), (t[47] = z))
    : (z = t[47]);
  let Ie;
  t[48] !== Me || t[49] !== _ || t[50] !== Fe || t[51] !== z
    ? ((Ie = { branch: Me, enabled: Fe, operationSource: _, lookup: z }),
      (t[48] = Me),
      (t[49] = _),
      (t[50] = Fe),
      (t[51] = z),
      (t[52] = Ie))
    : (Ie = t[52]);
  let { data: Le } = M(pn, Ie),
    Re = Me === je && Le === !0,
    ze;
  t[53] !== Re || t[54] !== R || t[55] !== je
    ? ((ze = R && (je.length === 0 || je.endsWith(`/`) || Re)),
      (t[53] = Re),
      (t[54] = R),
      (t[55] = je),
      (t[56] = ze))
    : (ze = t[56]);
  let V = ze,
    Be = Se == null || Se === `changes-loading`,
    Ve = L == null && !F && !V,
    He = !F && !V && (R ? (_e?.commitsAhead ?? 0) > 0 : ue == null),
    Ue = Ve && (R || N == null),
    We;
  t[57] !== g || t[58] !== v
    ? ((We = g
        ? v.formatMessage({
            id: `review.commit.form.commitAndPushTitle`,
            defaultMessage: `Commit or push`,
            description: `Title for the commit modal when commit and push actions are available`,
          })
        : v.formatMessage({
            id: `review.commit.form.commitTitle`,
            defaultMessage: `Commit`,
            description: `Title for the commit modal when only commit is available`,
          })),
      (t[57] = g),
      (t[58] = v),
      (t[59] = We))
    : (We = t[59]);
  let Ge = We,
    Ke;
  t[60] !== L ||
  t[61] !== R ||
  t[62] !== V ||
  t[63] !== F ||
  t[64] !== i ||
  t[65] !== m ||
  t[66] !== p ||
  t[67] !== je ||
  t[68] !== P
    ? ((Ke = (e) => {
        if (F || V || (e !== `push` && L != null)) return;
        (i(!1), p?.(`loading`));
        let t = R
          ? { kind: `commit`, newBranch: je, nextStep: e }
          : { kind: `commit`, nextStep: e };
        P.mutate(t, {
          onSuccess: (e) => {
            p?.(e ? `success` : `error`);
          },
          onSettled: m,
        });
      }),
      (t[60] = L),
      (t[61] = R),
      (t[62] = V),
      (t[63] = F),
      (t[64] = i),
      (t[65] = m),
      (t[66] = p),
      (t[67] = je),
      (t[68] = P),
      (t[69] = Ke))
    : (Ke = t[69]);
  let H = Ke,
    qe;
  t[70] !== F || t[71] !== i || t[72] !== m
    ? ((qe = (e) => {
        if (!e && !F) {
          m();
          return;
        }
        i(e);
      }),
      (t[70] = F),
      (t[71] = i),
      (t[72] = m),
      (t[73] = qe))
    : (qe = t[73]);
  let Xe = qe,
    U;
  t[74] === Ge
    ? (U = t[75])
    : ((U = (0, Q.jsx)(Pt, { className: `sr-only`, children: Ge })), (t[74] = Ge), (t[75] = U));
  let W;
  t[76] !== Ee ||
  t[77] !== Ce ||
  t[78] !== R ||
  t[79] !== Te ||
  t[80] !== E ||
  t[81] !== F ||
  t[82] !== o.root
    ? ((W = (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3`,
        children: (0, Q.jsx)(`span`, {
          className: `flex min-w-0 flex-1 items-center justify-between gap-2 text-codex-description`,
          children: Ee
            ? (0, Q.jsxs)(oe, {
                align: `start`,
                contentWidth: `xs`,
                disabled: F,
                triggerButton: (0, Q.jsxs)(rt, {
                  color: `ghostActive`,
                  size: `large`,
                  className: `w-full min-w-0 ps-2`,
                  children: [
                    (0, Q.jsx)(Je, { className: `icon-xs shrink-0` }),
                    E
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `max-w-[30%] min-w-0 shrink-0 truncate`,
                              children: un(o.root),
                            }),
                            (0, Q.jsx)(`span`, {
                              "aria-hidden": !0,
                              className: `shrink-0`,
                              children: (0, Q.jsx)(d, {
                                id: `localConversationPage.gitActions.repositoryBranchSeparator`,
                                defaultMessage: `·`,
                                description: `Separator between the repository name and branch in a Git action dialog`,
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, Q.jsx)(`span`, {
                      className: `truncate`,
                      children: R
                        ? (0, Q.jsx)(d, {
                            id: `review.commit.branchTarget.newBranch`,
                            defaultMessage: `New branch`,
                            description: `Label for selecting a new commit branch`,
                          })
                        : (Te ??
                          (0, Q.jsx)(d, {
                            id: `review.commit.form.commitTo.none`,
                            defaultMessage: `-`,
                            description: `Placeholder shown when no commit target is available`,
                          })),
                    }),
                    (0, Q.jsx)(Vt, { className: `icon-2xs shrink-0` }),
                  ],
                }),
                children: [
                  (0, Q.jsx)(x.SectionLabel, {
                    children: (0, Q.jsx)(d, {
                      id: `review.commit.branchTarget.title`,
                      defaultMessage: `Commit to`,
                      description: `Heading for commit branch target options`,
                    }),
                  }),
                  Te == null
                    ? null
                    : (0, Q.jsx)(x.Item, {
                        LeftIcon: Je,
                        RightIcon: R ? void 0 : xt,
                        onSelect: () => {
                          re(!1);
                        },
                        children: Te,
                      }),
                  (0, Q.jsx)(x.Item, {
                    LeftIcon: Ne,
                    RightIcon: R ? xt : void 0,
                    onSelect: () => {
                      re(!0);
                    },
                    children: (0, Q.jsx)(d, {
                      id: `review.commit.branchTarget.newBranch`,
                      defaultMessage: `New branch`,
                      description: `Label for selecting a new commit branch`,
                    }),
                  }),
                ],
              })
            : (0, Q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1 px-3`,
                children: [
                  (0, Q.jsx)(Je, { className: `icon-xs shrink-0` }),
                  E
                    ? (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `max-w-[30%] min-w-0 shrink-0 truncate`,
                            children: un(o.root),
                          }),
                          (0, Q.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `shrink-0`,
                            children: (0, Q.jsx)(d, {
                              id: `localConversationPage.gitActions.repositoryBranchSeparator`,
                              defaultMessage: `·`,
                              description: `Separator between the repository name and branch in a Git action dialog`,
                            }),
                          }),
                        ],
                      })
                    : null,
                  (0, Q.jsx)(`span`, {
                    className: `truncate`,
                    children:
                      Ce ??
                      (0, Q.jsx)(d, {
                        id: `review.commit.form.commitTo.none`,
                        defaultMessage: `-`,
                        description: `Placeholder shown when no commit target is available`,
                      }),
                  }),
                ],
              }),
        }),
      })),
      (t[76] = Ee),
      (t[77] = Ce),
      (t[78] = R),
      (t[79] = Te),
      (t[80] = E),
      (t[81] = F),
      (t[82] = o.root),
      (t[83] = W))
    : (W = t[83]);
  let Ze;
  t[84] !== Re || t[85] !== ke || t[86] !== S || t[87] !== R || t[88] !== F
    ? ((Ze = R
        ? (0, Q.jsx)(na, {
            branchAlreadyExists: Re,
            disabled: F,
            placeholder: S?.trim(),
            value: ke,
            onChange: ae,
          })
        : null),
      (t[84] = Re),
      (t[85] = ke),
      (t[86] = S),
      (t[87] = R),
      (t[88] = F),
      (t[89] = Ze))
    : (Ze = t[89]);
  let Qe;
  t[90] !== be ||
  t[91] !== R ||
  t[92] !== A ||
  t[93] !== T ||
  t[94] !== v ||
  t[95] !== F ||
  t[96] !== se ||
  t[97] !== te ||
  t[98] !== Be
    ? ((Qe = Be
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`textarea`, {
                autoFocus: !R,
                rows: 3,
                className: `h-20 w-full resize-none bg-transparent px-3 py-2 text-default outline-none`,
                "aria-label": v.formatMessage({
                  id: `review.commit.messageLabel`,
                  defaultMessage: `Commit message`,
                  description: `Label for commit message textarea`,
                }),
                placeholder: v.formatMessage({
                  id: `review.commit.autoGeneratePlaceholder`,
                  defaultMessage: `Commit message (leave blank to generate)…`,
                  description: `Placeholder for commit message fields that can be generated automatically`,
                }),
                value: se,
                disabled: F,
                onKeyDown: ca,
                onChange: (e) => {
                  te.set(sr, A, e.target.value);
                },
              }),
              (0, Q.jsxs)(`div`, {
                className: `relative flex items-center gap-2 px-3 pt-2 pb-3`,
                children: [
                  (0, Q.jsx)(pt, {
                    id: `commit-include-unstaged-changes`,
                    checked: T,
                    disabled: F,
                    onCheckedChange: (e) => {
                      te.set(cr, e);
                    },
                  }),
                  (0, Q.jsx)(`label`, {
                    htmlFor: `commit-include-unstaged-changes`,
                    className: `min-w-0 truncate text-default`,
                    children: (0, Q.jsx)(d, {
                      id: `review.commit.selection.includeUnstagedChanges`,
                      defaultMessage: `Include unstaged changes`,
                      description: `Label for selecting unstaged changes in the commit modal`,
                    }),
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `ms-auto flex shrink-0 items-center gap-2`,
                    children: [
                      be.isLoading || be.isFetching
                        ? (0, Q.jsx)(`span`, {
                            className: `inline-flex size-4 shrink-0 items-center justify-center`,
                            children: (0, Q.jsx)(tt, {
                              className: `icon-xs text-codex-description`,
                            }),
                          })
                        : null,
                      (0, Q.jsx)(la, {
                        isLoading: be.isLoading,
                        isUnavailable: be.isUnavailable,
                        selectionSummary: be.selectionSummary,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[90] = be),
      (t[91] = R),
      (t[92] = A),
      (t[93] = T),
      (t[94] = v),
      (t[95] = F),
      (t[96] = se),
      (t[97] = te),
      (t[98] = Be),
      (t[99] = Qe))
    : (Qe = t[99]);
  let $e = !Ve,
    et;
  t[100] === L
    ? (et = t[101])
    : ((et = (0, Q.jsx)(Sn, { reason: L })), (t[100] = L), (t[101] = et));
  let G;
  t[102] === H ? (G = t[103]) : ((G = () => H(`commit`)), (t[102] = H), (t[103] = G));
  let at;
  t[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, Q.jsx)(d, {
        id: `review.commit.nextSteps.commit`,
        defaultMessage: `Commit`,
        description: `Label for the commit-only option`,
      })),
      (t[104] = at))
    : (at = t[104]);
  let K;
  t[105] !== F || t[106] !== $e || t[107] !== et || t[108] !== G
    ? ((K = (0, Q.jsx)(ua, {
        Icon: sn,
        disabled: $e,
        loading: F,
        tooltipContent: et,
        value: `commit`,
        onSelect: G,
        children: at,
      })),
      (t[105] = F),
      (t[106] = $e),
      (t[107] = et),
      (t[108] = G),
      (t[109] = K))
    : (K = t[109]);
  let ot;
  t[110] !== Ue || t[111] !== L || t[112] !== g || t[113] !== N || t[114] !== H
    ? ((ot = g
        ? (0, Q.jsx)(ua, {
            Icon: tn,
            disabled: !Ue,
            loading: !1,
            tooltipContent:
              L == null ? (0, Q.jsx)(Cn, { reason: N }) : (0, Q.jsx)(Sn, { reason: L }),
            value: `commit-and-push`,
            onSelect: () => H(`commit-and-push`),
            children: (0, Q.jsx)(d, {
              id: `review.commit.nextSteps.commitAndPush`,
              defaultMessage: `Commit and push`,
              description: `Label for the commit and push option`,
            }),
          })
        : null),
      (t[110] = Ue),
      (t[111] = L),
      (t[112] = g),
      (t[113] = N),
      (t[114] = H),
      (t[115] = ot))
    : (ot = t[115]);
  let st;
  t[116] !== He || t[117] !== g || t[118] !== ue || t[119] !== H
    ? ((st = g
        ? (0, Q.jsx)(ua, {
            Icon: tn,
            disabled: !He,
            loading: !1,
            tooltipContent: (0, Q.jsx)(Cn, { reason: ue }),
            value: `push`,
            onSelect: () => H(`push`),
            children: (0, Q.jsx)(d, {
              id: `review.commit.nextSteps.push`,
              defaultMessage: `Push`,
              description: `Label for the push-only option`,
            }),
          })
        : null),
      (t[116] = He),
      (t[117] = g),
      (t[118] = ue),
      (t[119] = H),
      (t[120] = st))
    : (st = t[120]);
  let ct;
  t[121] !== K || t[122] !== ot || t[123] !== st
    ? ((ct = (0, Q.jsx)(`div`, {
        className: `border-t border-default py-1`,
        children: (0, Q.jsx)(nt.List, {
          children: (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [K, ot, st] }),
        }),
      })),
      (t[121] = K),
      (t[122] = ot),
      (t[123] = st),
      (t[124] = ct))
    : (ct = t[124]);
  let lt;
  t[125] !== Ge || t[126] !== W || t[127] !== Ze || t[128] !== Qe || t[129] !== ct
    ? ((lt = (0, Q.jsx)(`div`, {
        className: `command-menu-dialog contents`,
        children: (0, Q.jsxs)(nt, {
          "data-codex-shortcut-capture": !0,
          className: `w-[420px] max-w-[92vw]`,
          label: Ge,
          shouldFilter: !1,
          loop: !0,
          children: [W, Ze, Qe, ct],
        }),
      })),
      (t[125] = Ge),
      (t[126] = W),
      (t[127] = Ze),
      (t[128] = Qe),
      (t[129] = ct),
      (t[130] = lt))
    : (lt = t[130]);
  let ut;
  return (
    t[131] !== Xe || t[132] !== r || t[133] !== U || t[134] !== lt
      ? ((ut = (0, Q.jsxs)(zt, {
          open: r,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: Xe,
          children: [U, lt],
        })),
        (t[131] = Xe),
        (t[132] = r),
        (t[133] = U),
        (t[134] = lt),
        (t[135] = ut))
      : (ut = t[135]),
    ut
  );
}
function ca(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
function la(e) {
  let t = (0, da.c)(2),
    { isLoading: n, isUnavailable: r, selectionSummary: i } = e;
  if (n || r) return null;
  let a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, Q.jsx)(`span`, {
          className: `flex shrink-0 items-center gap-1 text-codex-description`,
          children:
            i == null
              ? (0, Q.jsx)(d, {
                  id: `localConversation.sync.modal.noChanges`,
                  defaultMessage: `No changes`,
                  description: `Label shown when there are no changes to sync`,
                })
              : (0, Q.jsx)(wt, {
                  variant: `color`,
                  linesAdded: i.totalAdditions,
                  linesRemoved: i.totalDeletions,
                }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function ua(e) {
  let t = (0, da.c)(19),
    { children: n, Icon: r, disabled: i, loading: a, tooltipContent: o, value: s, onSelect: c } = e,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = a
        ? (0, Q.jsx)(tt, { className: `icon-xs shrink-0` })
        : (0, Q.jsx)(r, { className: `icon-xs shrink-0` })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, Q.jsx)(`span`, { className: `truncate`, children: n })), (t[3] = n), (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(`span`, {
        className: `invisible ms-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible`,
        children: (0, Q.jsx)(Ae, { keysLabel: ze(`CmdOrCtrl+Enter`), variant: `button` }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== l || t[7] !== u
    ? ((f = (0, Q.jsxs)(`span`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [l, u, d],
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== i || t[10] !== c || t[11] !== f || t[12] !== s
    ? ((p = (0, Q.jsx)(nt.Item, {
        className: `group`,
        disabled: i,
        value: s,
        onSelect: c,
        children: f,
      })),
      (t[9] = i),
      (t[10] = c),
      (t[11] = f),
      (t[12] = s),
      (t[13] = p))
    : (p = t[13]);
  let m = p;
  if (!i || o == null) return m;
  let h;
  t[14] === m ? (h = t[15]) : ((h = (0, Q.jsx)(`div`, { children: m })), (t[14] = m), (t[15] = h));
  let g;
  return (
    t[16] !== h || t[17] !== o
      ? ((g = (0, Q.jsx)(k, { tooltipContent: o, children: h })),
        (t[16] = h),
        (t[17] = o),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var da,
  fa,
  Q,
  pa = e(() => {
    ((da = K()),
      le(),
      N(),
      c(),
      (fa = t(o(), 1)),
      I(),
      ot(),
      At(),
      i(),
      Mt(),
      $e(),
      je(),
      Oe(),
      j(),
      E(),
      S(),
      mn(),
      xn(),
      Ie(),
      ae(),
      Jt(),
      on(),
      _e(),
      nn(),
      Gt(),
      gt(),
      St(),
      a(),
      dn(),
      L(),
      Dn(),
      $n(),
      fr(),
      Ir(),
      ta(),
      oa(),
      Me(),
      (Q = U()));
  });
function ma(e) {
  let t = (0, ha.c)(6),
    { showSetPrefix: n } = e,
    r = n === void 0 || n,
    i = C(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, ga.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, ga.jsx)(d, {
          id: `localConversation.syncSetup.branchName`,
          defaultMessage: `Branch name`,
          description: `Title for the branch name input in the sync setup modal`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = r
        ? (0, ga.jsx)(rt, {
            className: `text-sm`,
            color: `ghostTertiary`,
            size: `inline`,
            onClick: () => {
              i(`/settings/git-settings`);
            },
            children: (0, ga.jsx)(d, {
              id: `localConversation.syncSetup.setPrefix`,
              defaultMessage: `Set prefix`,
              description: `Label for branch prefix configuration`,
            }),
          })
        : null),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, ga.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [a, o],
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
var ha,
  ga,
  _a = e(() => {
    ((ha = K()), I(), ne(), i(), (ga = U()));
  });
function va(e) {
  let t = (0, ba.c)(61),
    {
      branches: n,
      selectedBranch: r,
      disabled: i,
      isError: a,
      isLoading: o,
      isSearchError: s,
      isSearchLoading: c,
      onClose: l,
      onRetry: u,
      onRetrySearch: f,
      onSearchQueryChange: p,
      onSelectCustomBranch: m,
      onSelectBranch: h,
      repositoryName: g,
      renderBranchSubText: _,
      searchedBranches: ee,
      searchQuery: te,
    } = e,
    v = i !== void 0 && i,
    y = s !== void 0 && s,
    b = c !== void 0 && c,
    ne = pe(),
    [re, ie] = (0, xa.useState)(``),
    ae = te ?? re,
    S,
    C,
    w,
    T,
    E,
    D;
  if (
    t[0] !== n ||
    t[1] !== v ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== y ||
    t[5] !== b ||
    t[6] !== u ||
    t[7] !== f ||
    t[8] !== h ||
    t[9] !== m ||
    t[10] !== _ ||
    t[11] !== ae ||
    t[12] !== ee ||
    t[13] !== r
  ) {
    D = ae.trim();
    let e = D.toLowerCase();
    ((T = e.length > 0),
      (w = n == null ? void 0 : T ? (ee ?? n.filter((t) => t.toLowerCase().includes(e))) : n),
      (E = T ? b : o));
    let i = T ? y : a,
      s = T ? f : u;
    C = w?.find((e) => e === D);
    let c =
      T && m != null && (E || C == null)
        ? (0, $.jsx)(x.Item, {
            disabled: v,
            onSelect: () => {
              m?.(D);
            },
            children: (0, $.jsx)(d, {
              id: `composer.reviewMode.branches.useExactRef`,
              defaultMessage: `Use {branch}`,
              description: `Action to use an exact Git ref typed into the branch search field`,
              values: { branch: D },
            }),
          })
        : null;
    if (E) {
      let e;
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x.Item, {
            disabled: !0,
            children: (0, $.jsxs)(`span`, {
              className: `inline-flex items-center gap-2`,
              children: [
                (0, $.jsx)(tt, { className: `icon-xxs` }),
                (0, $.jsx)(d, {
                  id: `localConversation.syncSetup.branchesLoading`,
                  defaultMessage: `Loading branches…`,
                  description: `Label shown while loading branches`,
                }),
              ],
            }),
          })),
          (t[20] = e))
        : (e = t[20]);
      let n = e,
        r;
      (t[21] === c
        ? (r = t[22])
        : ((r =
            c == null
              ? n
              : (0, $.jsxs)(x.Section, { className: `flex flex-col`, children: [c, n] })),
          (t[21] = c),
          (t[22] = r)),
        (S = r));
    } else if (i) {
      let e;
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x.SectionLabel, {
            children: (0, $.jsx)(d, {
              id: `composer.reviewMode.branches.error`,
              defaultMessage: `Unable to load branches`,
              description: `Error message when branch list could not be loaded`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]);
      let n;
      t[24] === s
        ? (n = t[25])
        : ((n =
            s == null
              ? null
              : (0, $.jsx)(x.Item, {
                  onSelect: () => {
                    s();
                  },
                  children: (0, $.jsx)(d, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                })),
          (t[24] = s),
          (t[25] = n));
      let r;
      (t[26] === n
        ? (r = t[27])
        : ((r = (0, $.jsxs)(x.Section, { className: `flex flex-col gap-1`, children: [e, n] })),
          (t[26] = n),
          (t[27] = r)),
        (S = r));
    } else if (c != null && (w == null || w.length === 0)) S = c;
    else if (w == null || w.length === 0) {
      let e;
      (t[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x.Item, {
            disabled: !0,
            children: (0, $.jsx)(d, {
              id: `localConversation.syncSetup.noBranches`,
              defaultMessage: `No branches found`,
              description: `Label shown when no branches are available`,
            }),
          })),
          (t[28] = e))
        : (e = t[28]),
        (S = e));
    } else {
      let e;
      (t[29] !== v || t[30] !== h || t[31] !== _ || t[32] !== r
        ? ((e = (e) =>
            (0, $.jsx)(
              ya,
              {
                branch: e,
                disabled: v,
                selected: e === r,
                subText: _?.(e) ?? null,
                onSelect: () => h(e),
              },
              e,
            )),
          (t[29] = v),
          (t[30] = h),
          (t[31] = _),
          (t[32] = r),
          (t[33] = e))
        : (e = t[33]),
        (S = (0, $.jsxs)(x.Section, { className: `flex flex-col`, children: [c, w.map(e)] })));
    }
    ((t[0] = n),
      (t[1] = v),
      (t[2] = a),
      (t[3] = o),
      (t[4] = y),
      (t[5] = b),
      (t[6] = u),
      (t[7] = f),
      (t[8] = h),
      (t[9] = m),
      (t[10] = _),
      (t[11] = ae),
      (t[12] = ee),
      (t[13] = r),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D));
  } else ((S = t[14]), (C = t[15]), (w = t[16]), (T = t[17]), (E = t[18]), (D = t[19]));
  let oe;
  t[34] !== ne || t[35] !== g
    ? ((oe =
        g == null
          ? ne.formatMessage({
              id: `codex.composer.searchBranches`,
              defaultMessage: `Search branches`,
              description: `Placeholder for the branch search input`,
            })
          : ne.formatMessage(
              {
                id: `codex.composer.searchRepositoryBranches`,
                defaultMessage: `Search {repoName} branches`,
                description: `Placeholder for searching branches in the primary repository`,
              },
              { repoName: g },
            )),
      (t[34] = ne),
      (t[35] = g),
      (t[36] = oe))
    : (oe = t[36]);
  let O;
  t[37] === p
    ? (O = t[38])
    : ((O = (e) => {
        let t = e.currentTarget.value;
        (ie(t), p?.(t));
      }),
      (t[37] = p),
      (t[38] = O));
  let k;
  t[39] !== v ||
  t[40] !== C ||
  t[41] !== w ||
  t[42] !== T ||
  t[43] !== l ||
  t[44] !== h ||
  t[45] !== m ||
  t[46] !== r ||
  t[47] !== E ||
  t[48] !== D
    ? ((k = (e) => {
        if (e.key !== `Enter`) return;
        if ((e.preventDefault(), !T)) {
          l?.();
          return;
        }
        if (v || (E && m == null)) return;
        if (C != null) {
          h(C);
          return;
        }
        if (m != null) {
          m(D);
          return;
        }
        let t = w?.find((e) => e !== r) ?? w?.[0];
        if (t != null) {
          h(t);
          return;
        }
      }),
      (t[39] = v),
      (t[40] = C),
      (t[41] = w),
      (t[42] = T),
      (t[43] = l),
      (t[44] = h),
      (t[45] = m),
      (t[46] = r),
      (t[47] = E),
      (t[48] = D),
      (t[49] = k))
    : (k = t[49]);
  let A;
  t[50] !== ae || t[51] !== oe || t[52] !== O || t[53] !== k
    ? ((A = (0, $.jsx)(x.SearchInput, {
        autoFocus: !1,
        placeholder: oe,
        value: ae,
        onChange: O,
        onKeyDown: k,
      })),
      (t[50] = ae),
      (t[51] = oe),
      (t[52] = O),
      (t[53] = k),
      (t[54] = A))
    : (A = t[54]);
  let se;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(x.SectionLabel, {
        children: (0, $.jsx)(d, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[55] = se))
    : (se = t[55]);
  let ce;
  t[56] === S
    ? (ce = t[57])
    : ((ce = (0, $.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [se, S],
      })),
      (t[56] = S),
      (t[57] = ce));
  let j;
  return (
    t[58] !== A || t[59] !== ce
      ? ((j = (0, $.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [A, ce],
        })),
        (t[58] = A),
        (t[59] = ce),
        (t[60] = j))
      : (j = t[60]),
    j
  );
}
function ya(e) {
  let t = (0, ba.c)(6),
    { branch: n, disabled: r, onSelect: i, selected: a, subText: o } = e,
    s = a ? xt : void 0,
    c;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== s
      ? ((c = (0, $.jsx)(x.Item, {
          LeftIcon: Je,
          leftIconClassName: `icon-xs`,
          tooltipText: n,
          tooltipSide: `top`,
          tooltipAlign: `start`,
          tooltipOpenWhen: `trigger-overflows`,
          disabled: r,
          RightIcon: s,
          subTextAllowWrap: !0,
          SubText: o,
          onSelect: i,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var ba,
  xa,
  $,
  Sa = e(() => {
    ((ba = K()), (xa = t(o(), 1)), I(), Ie(), ae(), je(), j(), ($ = U()));
  });
export {
  In as $,
  Pr as A,
  rr as B,
  wr as C,
  Fr as D,
  kr as E,
  gr as F,
  lr as G,
  er as H,
  hr as I,
  fr as J,
  Y as K,
  mr as L,
  Ar as M,
  Dr as N,
  Mr as O,
  Or as P,
  Ln as Q,
  X as R,
  Cr as S,
  Er as T,
  sr as U,
  tr as V,
  ur as W,
  Qn as X,
  Jn as Y,
  $n as Z,
  ai as _,
  sa as a,
  q as at,
  _r as b,
  oa as c,
  mn as ct,
  Vi as d,
  Bn as et,
  Hi as f,
  mi as g,
  di as h,
  _a as i,
  Dn as it,
  jr as j,
  Nr as k,
  ta as l,
  un as lt,
  Ni as m,
  Sa as n,
  Tn as nt,
  pa as o,
  xn as ot,
  ji as p,
  dr as q,
  ma as r,
  Cn as rt,
  na as s,
  pn as st,
  va as t,
  Sn as tt,
  ea as u,
  dn as ut,
  li as v,
  Ir as w,
  Sr as x,
  yr as y,
  pr as z,
};
//# sourceMappingURL=git-branch-picker-dropdown-content-16bc93de7d03.js.map
