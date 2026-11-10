import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $8 as n,
  ADt as r,
  Cot as i,
  EPt as a,
  Edt as o,
  Fat as s,
  Hnt as c,
  IDt as l,
  LR as u,
  NT as d,
  PT as f,
  Pat as p,
  Pft as m,
  Pxt as h,
  Q8 as g,
  QSt as _,
  Rnt as v,
  VDt as ee,
  Wnt as y,
  Zxt as b,
  aSt as te,
  avt as ne,
  bx as re,
  e5 as ie,
  fLt as ae,
  fSt as oe,
  hot as x,
  iO as se,
  irt as S,
  jDt as ce,
  lot as le,
  nSt as C,
  oSt as w,
  pLt as ue,
  pst as de,
  qxt as T,
  rO as fe,
  rrt as E,
  rst as pe,
  srt as me,
  vzt as he,
  wot as D,
  xMt as O,
  yx as ge,
  zLt as _e,
  zR as ve,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ahr as ye,
  BJ as be,
  Bhr as xe,
  Cwr as Se,
  DJ as Ce,
  EJ as we,
  Gir as Te,
  HHt as Ee,
  HJ as De,
  Hir as Oe,
  IVt as ke,
  JPn as Ae,
  Jir as je,
  LEr as Me,
  MJ as Ne,
  Mir as Pe,
  OEt as Fe,
  OJ as Ie,
  QDr as Le,
  Qtt as Re,
  Rir as ze,
  TJ as Be,
  Tnt as Ve,
  UJ as He,
  Uir as Ue,
  VHt as We,
  Vir as Ge,
  Wir as Ke,
  XDr as qe,
  XPn as Je,
  ZPn as Ye,
  _nt as Xe,
  aIr as Ze,
  aar as Qe,
  bnt as $e,
  d3n as et,
  dnt as tt,
  eOr as nt,
  ent as rt,
  far as it,
  gwr as k,
  hO as A,
  hnt as at,
  iNr as ot,
  iPr as st,
  iar as ct,
  jEt as lt,
  jJ as ut,
  l3n as dt,
  mO as ft,
  m_r as pt,
  mnt as mt,
  oIr as j,
  oar as ht,
  par as gt,
  rNr as _t,
  sCr as vt,
  sPr as yt,
  sar as bt,
  tar as xt,
  u3n as St,
  uar as Ct,
  unt as wt,
  vnt as Tt,
  wrt as Et,
  xnt as Dt,
  yCr as Ot,
  ynt as kt,
  zJr as At,
  zVt as jt,
} from "./app-initial-5851df3f6cb1.js";
import { Tm as Mt, wm as Nt } from "./app-primary-fe8a450b3b04.js";
import { n as Pt, t as Ft } from "./codex-analytics-attribution-da3e14c84e21.js";
import { t as It } from "./git-action-review-state-3172c139d671.js";
function Lt(e, t) {
  let n = {
    enabled: !0,
    operationSource: t.operationSource,
    lookup: t.cwd == null ? null : { cwd: t.cwd, hostConfig: t.hostConfig },
  };
  return Promise.all([e.get(Vt.fromTarget$, n).refetch(), e.get(Ht.fromTarget$, n).refetch()]);
}
function Rt(e) {
  let t = ve(e.root).replace(/\/+$/, ``),
    n = ve(e.commonDir).replace(/\/+$/, ``);
  return n === t || n === `${t}/.git`;
}
var zt, Bt, Vt, Ht, M;
function N() {
  return (N = e(() => {
    (h(),
      D(),
      u(),
      Mt(),
      Oe(),
      Qe(),
      (zt = { type: `loading` }),
      (Bt = { type: `error` }),
      (Vt = Ge({
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
      (Ht = Ge({
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
      (M = C(
        i,
        (e, { get: t }) => {
          let n = {
              enabled: !0,
              operationSource: e.operationSource,
              lookup: e.cwd == null ? null : { cwd: e.cwd, hostConfig: e.hostConfig },
            },
            r = t(ct, { ...n, watchForGitInit: !1 }),
            i = t(Vt.fromTarget$, n),
            a = t(Ht.fromTarget$, n),
            o = t(Nt, n);
          if (r.isError || i.isError || a.isError || o.isError) return Bt;
          if (!r.isSuccess || !i.isSuccess || !a.isSuccess || !o.isSuccess) return zt;
          let s = r.data,
            c = i.data,
            l = a.data;
          return s == null || c == null || l == null
            ? Bt
            : {
                type: `success`,
                data: {
                  gitRoot: s.root,
                  branch: c.branch ?? null,
                  defaultBranch: o.data ?? null,
                  commitsAhead: l.commitsAhead,
                  upstreamRef: c.upstream?.branch ?? null,
                  isMainWorktree: Rt(s),
                },
              };
        },
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  }))();
}
function Ut(e) {
  let t = (0, qt.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `changes-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
function Wt(e) {
  let t = (0, qt.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
function Gt(e) {
  let t = (0, qt.c)(12),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
          ? ((e = (0, P.jsx)(l, {
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
function Kt(e) {
  let t = (0, qt.c)(6),
    { blockedStep: n } = e;
  if (n == null) return null;
  switch (n.kind) {
    case `commit`: {
      let e;
      return (
        t[0] === n.reason
          ? (e = t[1])
          : ((e = (0, P.jsx)(Ut, { reason: n.reason })), (t[0] = n.reason), (t[1] = e)),
        e
      );
    }
    case `push`: {
      let e;
      return (
        t[2] === n.reason
          ? (e = t[3])
          : ((e = (0, P.jsx)(Wt, { reason: n.reason })), (t[2] = n.reason), (t[3] = e)),
        e
      );
    }
    case `create-pr`: {
      let e;
      return (
        t[4] === n.reason
          ? (e = t[5])
          : ((e = (0, P.jsx)(Gt, { reason: n.reason })), (t[4] = n.reason), (t[5] = e)),
        e
      );
    }
  }
}
var qt, P;
function Jt() {
  return (Jt = e(() => {
    ((qt = he()), ce(), (P = O()));
  }))();
}
function Yt({
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
        canCommitPushAndCreatePullRequest: t == null && Zt(a) && Zt(n),
        canCreatePullRequest: !1,
        canPushAndCreatePullRequest: e > 0 && Zt(o) && Zt(n),
      }
    : {
        canCommitPushAndCreatePullRequest: t == null && a == null && n == null,
        canCreatePullRequest: r == null,
        canPushAndCreatePullRequest:
          (o == null || (o === `nothing-to-push` && r === `upstream-missing`)) && n == null,
      };
}
function Xt({
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
function Zt(e) {
  return (
    e == null ||
    e === `branch-missing` ||
    e === `checking-existing-pr` ||
    e === `default-branch-checked-out` ||
    e === `push-status-loading`
  );
}
function Qt() {
  return (Qt = e(() => {}))();
}
function $t({ hasSomeUncommittedChanges: e, isChangesLoading: t, isChangesUnavailable: n }) {
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
function en({ pushStatus: e, ignoreNothingToPush: t = !1 }) {
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
function tn({
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
function nn(e) {
  let t = e.flatMap((e) => (e?.type === `success` ? e.files : []));
  return t.length === 0
    ? null
    : {
        files: t.map((e) => ({ path: e.path, additions: e.additions ?? 0, deletions: e.deletions ?? 0 })),
        totalAdditions: (0, F.default)(t, (e) => e.additions ?? 0),
        totalDeletions: (0, F.default)(t, (e) => e.deletions ?? 0),
      };
}
function rn(e, t) {
  let n = an(e),
    r = t.flatMap((e) =>
      e?.type === `success`
        ? e.files.filter((e) => [e.path, e.previousPath].some((e) => e != null && an(e) === n))
        : [],
    );
  return r.length === 0
    ? null
    : {
        linesAdded: (0, F.default)(r, (e) => e.additions ?? 0),
        linesRemoved: (0, F.default)(r, (e) => e.deletions ?? 0),
      };
}
function an(e) {
  let t = e.trim(),
    n = (t.startsWith(`"`) && t.endsWith(`"`)) || (t.startsWith(`'`) && t.endsWith(`'`)) ? t.slice(1, -1) : t,
    r = n.startsWith(`./`) ? n.slice(2) : n;
  return r.startsWith(`a/`) || r.startsWith(`b/`) ? r.slice(2) : r;
}
var F;
function on() {
  return (on = e(() => {
    F = t(At(), 1);
  }))();
}
function sn(e) {
  return { cwd: e.cwd, hostConfig: e.hostConfig, operationSource: `local_conversation_git_actions` };
}
function cn({
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
var ln, un, dn, fn, pn, mn, hn, gn, _n, vn;
function yn() {
  return (yn = e(() => {
    (h(),
      Te(),
      N(),
      Qe(),
      mt(),
      Be(),
      Se(),
      s(),
      on(),
      (ln = b(k, (e) => {
        let t =
          e.source === `staged`
            ? {
                cwd: e.cwd,
                includeUntrackedFiles: !1,
                operationSource: `local_conversation_git_actions`,
                source: e.source,
              }
            : { cwd: e.cwd, operationSource: `local_conversation_git_actions`, source: e.source };
        return Ke(
          `review-summary`,
          { commonDir: e.commonDir, root: e.root },
          t,
          Ct(e.hostConfig),
          e.hostConfig,
          { liveQuery: { method: `review-summary`, params: t }, staleTime: p.INFINITE },
        );
      })),
      (un = b(k, (e) => {
        let t = { cwd: e.cwd, includeUntrackedFiles: !1, operationSource: `local_conversation_git_actions` },
          n = { ...t, includeUntrackedFiles: !0 };
        return Ke(
          `status-summary`,
          { commonDir: e.commonDir, root: e.root },
          t,
          Ct(e.hostConfig),
          e.hostConfig,
          { liveQuery: { method: `status-summary`, params: n }, staleTime: p.INFINITE },
        );
      })),
      (dn = C(k, (e, { get: t }) =>
        t(ct, {
          enabled: !0,
          lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
          operationSource: `local_conversation_git_actions`,
          watchForGitInit: !1,
        }),
      )),
      (fn = C(k, (e, { get: t }) => {
        let n = t(dn, e),
          r = n.data ?? null;
        return r == null
          ? xt(n)
          : t(ln, {
              commonDir: r.commonDir,
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              root: r.root,
              source: e.source,
            });
      })),
      (pn = C(k, (e, { get: t }) => {
        let n = t(dn, e),
          r = n.data ?? null;
        return r == null
          ? xt(n)
          : t(un, { commonDir: r.commonDir, cwd: e.cwd, hostConfig: e.hostConfig, root: r.root });
      })),
      (mn = C(k, (e, { get: t }) => {
        let n = t(fn, { cwd: e.cwd, hostConfig: e.hostConfig, source: `staged` }),
          r = e.includeUnstaged ? t(fn, { cwd: e.cwd, hostConfig: e.hostConfig, source: `unstaged` }) : null,
          i = nn(r == null ? [n.data] : [n.data, r.data]);
        return {
          hasSelectedChanges: (i?.files.length ?? 0) > 0,
          isFetching: n.isFetching || (r?.isFetching ?? !1),
          isLoading: n.isLoading || (r?.isLoading ?? !1),
          isUnavailable: n.data?.type === `error` || r?.data?.type === `error`,
          selectionSummary: i,
        };
      })),
      (hn = C(k, (e, { get: t }) => {
        let n = t(pn, e),
          r = n.data;
        if (r?.type === `error`) {
          let n = t(mn, e);
          return $t({
            hasSomeUncommittedChanges: n.hasSelectedChanges,
            isChangesLoading: n.isLoading,
            isChangesUnavailable: n.isUnavailable,
          });
        }
        let i =
          r?.type === `success` &&
          r.stagedCount + (e.includeUnstaged ? r.unstagedCount + (r.untrackedCount ?? 0) : 0) > 0;
        return $t({
          hasSomeUncommittedChanges: i,
          isChangesLoading:
            n.isLoading || (!i && e.includeUnstaged && r?.type === `success` && r.untrackedCount == null),
          isChangesUnavailable: !1,
        });
      })),
      (gn = C(k, (e, { get: t }) => {
        let n = t(M, sn(e));
        return en({ pushStatus: n.type === `success` ? n.data : void 0 });
      })),
      (_n = C(k, (e, { get: t }) => {
        let n = t(M, sn(e));
        return en({ pushStatus: n.type === `success` ? n.data : void 0, ignoreNothingToPush: !0 });
      })),
      (vn = C(k, (e, { get: t }) => {
        let n = t(M, sn(e)),
          r = n.type === `success` ? n.data : void 0,
          i = t(hn, { ...e, includeUnstaged: e.includeLocalChanges }),
          a = t(gn, e),
          o = t(_n, e),
          { data: s, isLoading: c } = t(we, {
            cwd: e.cwd,
            headBranch: r?.branch ?? ``,
            hostId: e.hostConfig.id,
            operationSource: `local_conversation_git_actions`,
          }),
          { source: l, unavailableReason: u } = t(at, {
            cwd: e.cwd,
            hostId: e.hostConfig.id,
            operation: `create`,
            operationSource: `local_conversation_git_actions`,
            threadId: e.conversationId,
          }),
          d = s?.hasOpenPr === !0,
          f = tn({ hasOpenPr: d, isLoadingPRStatus: c, pushStatus: r, source: l, unavailableReason: u }),
          p = tn({
            allowMissingUpstream: !0,
            hasOpenPr: d,
            isLoadingPRStatus: c,
            pushStatus: r,
            source: l,
            unavailableReason: u,
          }),
          m = Yt({
            commitsAhead: r?.commitsAhead ?? 0,
            commitBlockedReason: i,
            createPullRequestAfterPushBlockedReason: p,
            createPullRequestBlockedReason: f,
            createsBranch: e.createsBranch,
            pushAfterCommitBlockedReason: o,
            pushBlockedReason: a,
          }),
          h = Xt({ ...m, createsBranch: e.createsBranch, includeLocalChanges: e.includeLocalChanges });
        return {
          blockedStep: cn({
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
  }))();
}
function I(e) {
  return { cwd: e.cwd, hostId: e.hostId };
}
function bn(e, t) {
  (e.set(z, t, ``), e.set(B, t, ``), e.set(Dn, t, !0));
}
function xn(e) {
  let t = new AbortController();
  return (Tn.set(wn(e), t), t.signal);
}
function Sn(e) {
  Tn.get(wn(e))?.abort();
}
function Cn(e, t) {
  Tn.get(wn(e))?.signal === t && Tn.delete(wn(e));
}
function wn(e) {
  return JSON.stringify([e.hostId, e.cwd]);
}
var Tn, L, R, En, z, B, Dn;
function V() {
  return (V = e(() => {
    (h(),
      D(),
      _t(),
      (Tn = new Map()),
      (L = te(i, (e) => null)),
      (R = te(i, (e) => ``)),
      (En = ot(`git-action-include-unstaged-changes`, !0)),
      (z = te(i, (e) => ``)),
      (B = te(i, (e) => ``)),
      (Dn = te(i, (e) => !0)));
  }))();
}
var H;
function On() {
  return (On = e(() => {
    (h(),
      Ot(),
      (H = _(`LocalGitActionsScope`, {
        key: ({ target: e }) => JSON.stringify([e.hostId, e.cwd]),
        parent: vt,
      })));
  }))();
}
function kn(e) {
  if (e.get(Hn)) {
    (e.set(W, `commit`), e.set(U, `worktree-branch-setup`));
    return;
  }
  e.set(U, `commit`);
}
function An(e, { defaultToDraft: t = !1 } = {}) {
  let n = t ? `create-draft-pr` : `create-pr`;
  if (e.get(Un)) {
    (e.set(W, n), e.set(U, `worktree-branch-setup`));
    return;
  }
  e.set(U, n);
}
function jn(e) {
  (e.set(W, null), e.set(U, `worktree-branch-setup`));
}
function Mn(e) {
  let t = e.get(W);
  (e.set(W, null), e.set(U, t));
}
function Nn(e, t) {
  return { cwd: e.cwd, headBranch: t, hostId: e.hostId, operationSource: `local_conversation_git_actions` };
}
var U, W, G, K, Pn, Fn, In, Ln, q, Rn, zn, Bn, Vn, Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    (h(),
      lt(),
      Mt(),
      N(),
      Be(),
      Se(),
      pt(),
      ke(),
      yn(),
      V(),
      On(),
      (U = oe(H, null)),
      (W = oe(H, null)),
      (G = C(k, (e, { get: t }) =>
        t(Fe, {
          enabled: !0,
          operationSource: `local_conversation_git_actions`,
          lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
        }),
      )),
      (K = C(k, (e, { get: t }) => {
        let n = t(G, e),
          r = t(M, {
            cwd: e.cwd,
            hostConfig: e.hostConfig,
            operationSource: `local_conversation_git_actions`,
          });
        return It({
          currentBranch: n.data ?? (r.type === `success` ? (r.data.branch ?? null) : null),
          storedThreadBranch: t(jt, e),
        }).currentBranchName;
      })),
      (Pn = C(k, (e, { get: t }) => t(we, Nn(e, t(K, e))).data?.url ?? null)),
      (Fn = C(k, (e, { get: t }) => t(we, Nn(e, t(K, e))).data?.hasOpenPr === !0)),
      (In = C(
        k,
        (e, { get: t }) =>
          It({ currentBranch: t(K, e), storedThreadBranch: t(jt, e) }).hasThreadBranchMismatch,
      )),
      (Ln = C(k, (e, { get: t }) => {
        let n = t(G, e);
        return n.isSuccess && n.data == null;
      })),
      (q = w(H, ({ get: e, scope: t }) => ({
        ...t.value.target,
        codexWorktree: t.value.codexWorktree,
        conversationId: t.value.conversationId,
        hostConfig: e(Me, t.value.target.hostId),
      }))),
      (Rn = w(H, ({ get: e, scope: t }) => e(L, I(t.value.target)))),
      (zn = w(H, ({ get: e }) => e(hn, { ...e(q), includeUnstaged: !0 }))),
      (Bn = C(k, (e, { get: t }) => {
        let n = t(G, e);
        if (!n.isSuccess) return `hidden`;
        let r = n.data?.trim() ?? ``,
          i = r.length === 0;
        if (i) {
          let n = t(M, {
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              operationSource: `local_conversation_git_actions`,
            }),
            r = n.type === `success` ? n.data : null;
          if (t(hn, { ...e, includeUnstaged: !0 }) != null && (r?.commitsAhead ?? 0) === 0) return `hidden`;
        } else {
          let n = t(Nt, {
            enabled: !0,
            operationSource: `local_conversation_git_actions`,
            lookup: { cwd: e.cwd, hostConfig: e.hostConfig },
          }).data;
          if (n == null || r === n) return `hidden`;
        }
        return t(vn, {
          conversationId: e.conversationId,
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          createsBranch: i,
          includeLocalChanges: t(Dn, I(e)),
        }).blockedStep == null
          ? `enabled`
          : `disabled`;
      })),
      (Vn = w(H, ({ get: e }) => e(Bn, e(q)))),
      (Hn = w(H, ({ get: e }) => {
        let t = e(q),
          n = e(M, {
            cwd: t.cwd,
            hostConfig: t.hostConfig,
            operationSource: `local_conversation_git_actions`,
          }),
          r = n.type === `success` ? n.data : void 0,
          i = e(G, t),
          a = i.isSuccess ? i.data : r?.branch;
        return t.codexWorktree && r != null && (!a || a === r.defaultBranch);
      })),
      (Un = w(H, ({ get: e }) => e(Hn) && !e(Ln, e(q)))),
      (Wn = w(H, ({ get: e }) => {
        let t = e(q),
          n = e(zn),
          r = e(gn, t),
          i = e(_n, t);
        return r == null || (n == null && i == null) || (e(Hn) && n == null) ? null : r;
      })));
  }))();
}
function Kn(e, { branch: t, cwd: n, hostConfig: r, operationSource: i, refetchPullRequestStatus: a }) {
  (Lt(e, { cwd: n, hostConfig: r, operationSource: i }),
    e.queryClient.invalidateQueries({
      predicate: (e) => e.meta?.hostId === r.id,
      queryKey: S(`gh-pr-search`),
    }));
  let o =
    t == null
      ? Promise.resolve()
      : e.queryClient.invalidateQueries({
          queryKey: S(`gh-pr-for-branch`, { cwd: n, headBranch: t, hostId: r.id }),
        });
  if (a != null) {
    o.then(a);
    return;
  }
  t != null &&
    o.then(async () => {
      await e
        .get(we, { cwd: n, headBranch: t, hostId: r.id, operationSource: i })
        .refetch?.({ cancelRefetch: !1 });
    });
}
function qn() {
  return (qn = e(() => {
    (N(), Be(), me());
  }))();
}
function Jn({
  commitInstructions: e,
  diffError: t = null,
  draftMessage: n,
  oversizedDiffSummary: r = null,
  uncommittedDiff: i,
}) {
  let a = [],
    o = e?.trim() ?? ``;
  o.length > 0 &&
    a.push(`Custom commit instructions (follow these for commit message content and formatting):\n${o}`);
  let s = n.trim();
  s.length > 0 && a.push(`Draft message:\n${s}`);
  let c = Yn({ diffError: t, oversizedDiffSummary: r, uncommittedDiff: i });
  return (
    c != null && a.push(c),
    (s.length > 0 || c != null) && a.push(Xn),
    a.join(`

`)
  );
}
function Yn({ diffError: e, oversizedDiffSummary: t, uncommittedDiff: n }) {
  return t == null
    ? e?.type === `diff-too-large`
      ? [`Changes:`, `Diff too large to include inline.`, ``, Zn].join(`
`)
      : n == null || n.trim().length === 0
        ? null
        : [`Changes:`, n, Zn].join(`
`)
    : [
        `Changes:`,
        `Diff too large to include inline.`,
        `Summary: ${t.filesChanged} changed files, +${t.linesAdded}/-${t.linesRemoved} lines.`,
        ``,
        Zn,
      ].join(`
`);
}
var Xn, Zn;
function Qn() {
  return (Qn = e(() => {
    ((Xn = `Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.`),
      (Zn = `Untracked changes are not included.`));
  }))();
}
function $n(e) {
  return e?.type === `success` ? e.unifiedDiff : null;
}
function er(e) {
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
function tr({ pullRequestInstructions: e, uncommittedDiff: t, filePaths: n, baseBranch: r, headBranch: i }) {
  let a = [];
  (r || i) &&
    a.push(
      [`Branches:`, `- Head: ${i ?? `-`}`, `- Base: ${r ?? `-`}`].join(`
`),
    );
  let o = e?.trim() ?? ``;
  return (
    o.length > 0 &&
      a.push(`Pull request instructions (apply these to the title/body content only):\n${ar(o)}`),
    a.push(nr({ uncommittedDiff: t, filePaths: n })),
    a.join(`

`)
  );
}
function nr({ uncommittedDiff: e, filePaths: t }) {
  let n = e?.trim() ?? ``,
    r = (n.length > 0 ? rr(n) : 0) > or,
    i = [`Changes:`];
  return n.length === 0 || r
    ? (i.push(ir(t)),
      i.join(`
`))
    : (i.push(n),
      i.join(`
`));
}
function rr(e) {
  return e.split(/\r?\n/).length;
}
function ir(e) {
  if (e.length === 0) return `- (no files listed)`;
  let t = e.slice(0, sr),
    n = e.length - t.length,
    r = t.map((e) => `- ${e}`);
  return (
    n > 0 && r.push(`\u2026and ${n} more`),
    r.join(`
`)
  );
}
function ar(e) {
  let t = e.match(/```/g);
  return t == null || t.length % 2 == 0 ? e : `${e}\n\`\`\``;
}
var or, sr;
function cr() {
  return (cr = e(() => {
    ((or = 1e3), (sr = 100));
  }))();
}
function lr(e) {
  let t = (0, ur.c)(18),
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
        ? (0, J.jsxs)(`div`, {
            className: `flex items-start gap-1.5 font-code text-size-code-sm leading-5 text-codex-description`,
            children: [
              (0, J.jsx)(`span`, { className: `shrink-0 select-none`, "aria-hidden": `true`, children: u }),
              (0, J.jsx)(`pre`, { className: `m-0 whitespace-pre-wrap`, children: n }),
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
        ? (0, J.jsx)(`div`, {
            className: `max-h-20 overflow-auto`,
            children: (0, J.jsx)(`pre`, {
              className: `m-0 font-code text-size-code-sm whitespace-pre-wrap text-codex-terminal-foreground`,
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
    ? ((g = p ? (0, J.jsx)(`div`, { className: `text-size-chat-sm`, children: c }) : null),
      (t[11] = p),
      (t[12] = c),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== m || t[15] !== h || t[16] !== g
      ? ((_ = (0, J.jsxs)(`div`, {
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
var ur, J;
function dr() {
  return (dr = e(() => {
    ((ur = he()), (J = O()));
  }))();
}
function fr(e) {
  let t = (0, mr.c)(20),
    { title: n, message: r, execOutput: i, onClose: a, primaryAction: o, secondaryAction: s } = e,
    c = ee(),
    l;
  t[0] === i?.output ? (l = t[1]) : ((l = i?.output?.trim() ?? ``), (t[0] = i?.output), (t[1] = l));
  let u = l,
    f;
  t[2] === r ? (f = t[3]) : ((f = r?.trim() ?? ``), (t[2] = r), (t[3] = f));
  let p = f,
    m = i?.command != null && i.command.length > 0 ? `$ ${i.command}` : null,
    h = u.length > 0 ? u : null,
    g = p.length > 0 && p !== u ? p : null,
    _;
  t[4] !== m || t[5] !== h || t[6] !== g
    ? ((_ = [m, h, g].filter(pr)), (t[4] = m), (t[5] = h), (t[6] = g), (t[7] = _))
    : (_ = t[7]);
  let v = _.join(`
`),
    y;
  t[8] !== v || t[9] !== i?.command || t[10] !== i?.output || t[11] !== c || t[12] !== r
    ? ((y =
        v.length > 0
          ? (0, Y.jsx)(`div`, {
              className: `mt-2 pt-2`,
              children: (0, Y.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, Y.jsx)(lr, { command: i?.command, output: i?.output, message: r }),
                  (0, Y.jsx)(ge, {
                    className: `absolute end-1 top-1`,
                    ariaLabel: c.formatMessage({
                      id: `codex.terminalToast.copyError`,
                      defaultMessage: `Copy error`,
                      description: `Aria label for copying terminal error content from a toast`,
                    }),
                    iconOnly: !0,
                    showTooltip: !1,
                    onCopy: (e) => fe(v, e),
                  }),
                ],
              }),
            })
          : void 0),
      (t[8] = v),
      (t[9] = i?.command),
      (t[10] = i?.output),
      (t[11] = c),
      (t[12] = r),
      (t[13] = y))
    : (y = t[13]);
  let b;
  return (
    t[14] !== a || t[15] !== o || t[16] !== s || t[17] !== y || t[18] !== n
      ? ((b = (0, Y.jsx)(d, {
          description: y,
          level: `danger`,
          onClose: a,
          primaryAction: o,
          secondaryAction: s,
          title: n,
        })),
        (t[14] = a),
        (t[15] = o),
        (t[16] = s),
        (t[17] = y),
        (t[18] = n),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function pr(e) {
  return e != null;
}
var mr, Y;
function hr() {
  return (hr = e(() => {
    ((mr = he()), ce(), re(), se(), f(), dr(), (Y = O()));
  }))();
}
function X({ toaster: e, title: t, message: n, execOutput: r }) {
  e.custom({
    duration: vr,
    content: ({ close: e }) => (0, _r.jsx)(fr, { title: t, message: n, execOutput: r, onClose: e }),
  });
}
function gr(e) {
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
var _r, vr, Z;
function yr() {
  return (yr = e(() => {
    (ce(),
      hr(),
      (_r = O()),
      (vr = 7),
      (Z = r({
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
  }))();
}
async function br(e, t, { headBranch: n, signal: r } = {}) {
  let [i, a, o] = await Promise.all([
      gt(`git`).request({
        method: `review-patch`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Q, source: `branch` },
        signal: r,
      }),
      gt(`git`).request({
        method: `branch-metadata`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Q },
        signal: r,
      }),
      gt(`git`).request({
        method: `review-summary`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Q, source: `branch` },
        signal: r,
      }),
    ]),
    s = e.get(M, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: Q }),
    l = s.type === `success` ? s.data : void 0;
  return tr({
    pullRequestInstructions: c(e.get, m.pullRequestInstructions) ?? null,
    uncommittedDiff: i.diff.type === `success` ? i.diff.unifiedDiff : null,
    filePaths: o.type === `success` ? o.files.map((e) => e.path) : [],
    baseBranch: a.baseBranch ?? l?.defaultBranch ?? null,
    headBranch: n ?? a.branch ?? l?.branch ?? null,
  });
}
async function xr(e, t, n, r) {
  let i = e.get(En),
    a = await gt(`git`).request({
      method: `commit-message-diff`,
      params: { cwd: t.cwd, hostConfig: t.hostConfig, includeUnstaged: i, operationSource: Q },
      signal: r,
    }),
    o = $n(a),
    s = a.type === `error` ? a.error : null,
    l = er(o),
    u = l?.linesAdded ?? 0,
    d = l?.linesRemoved ?? 0,
    f = u + d > Cr ? { filesChanged: l?.filesChanged ?? 0, linesAdded: u, linesRemoved: d } : null;
  return Jn({
    commitInstructions: c(e.get, m.commitInstructions) ?? null,
    diffError: s,
    draftMessage: n,
    oversizedDiffSummary: f,
    uncommittedDiff: f == null ? o : null,
  });
}
function Sr(e, t, n, r) {
  let i = e.get(R, t);
  (i.trim().length === 0 || i === n) && e.set(R, t, r);
}
var Cr, Q, wr, Tr, Er;
function Dr() {
  return (Dr = e(() => {
    (h(),
      pe(),
      le(),
      N(),
      Ze(),
      D(),
      y(),
      me(),
      it(),
      Qn(),
      cr(),
      V(),
      yr(),
      (Cr = 1e3),
      (Q = `local_conversation_git_actions`),
      (wr = T(i, (e, { get: t, scope: n }) => {
        let r = I(e),
          i = t(j),
          a = t(x);
        return {
          mutationKey: [`vscode`, `generate-commit-message`, e.cwd, e.hostId, e.conversationId],
          mutationFn: async ({ signal: t } = {}) => {
            let o = n.get(L, r);
            if (o?.phase === `generating-commit-message`) return null;
            let s = n.get(R, r),
              c = o == null || o.workflow === `commit`;
            c && n.set(L, r, { workflow: `commit`, phase: `generating-commit-message` });
            let l;
            try {
              l = await E(`generate-commit-message`, {
                params: { hostId: e.hostId, prompt: await xr(n, e, s, t), cwd: e.cwd },
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
                    { errorAnalytics: { toastId: `review.commit.generate.failed` } },
                  ),
                null
              );
            } finally {
              c && n.get(L, r)?.phase === `generating-commit-message` && n.set(L, r, o);
            }
            let u = l.message?.trim() ?? ``;
            return t?.aborted
              ? null
              : u.length === 0
                ? (a.danger(i.formatMessage(Z.commitMessageEmpty), {
                    errorAnalytics: {
                      toastId: `useGitActionMessageGeneration.mutationFn.commitMessageEmpty`,
                    },
                  }),
                  null)
                : (Sr(n, r, s, u), u);
          },
        };
      })),
      (Tr = T(i, (e, { get: t, scope: n }) => {
        let r = I(e),
          i = t(j),
          a = t(x);
        return {
          mutationKey: [`vscode`, `generate-commit-pull-request-message`, e.cwd, e.hostId, e.conversationId],
          mutationFn: async ({ headBranch: t, signal: o } = {}) => {
            let s = n.get(R, r),
              c = n.get(z, r).trim(),
              l = n.get(B, r).trim(),
              u = s.trim();
            if (u.length > 0 && c.length > 0 && l.length > 0) return { body: l, message: u, title: c };
            let d;
            try {
              let [r, i] = await Promise.all([xr(n, e, s, o), br(n, e, { headBranch: t, signal: o })]);
              if (i.trim().length === 0) return null;
              d = await E(`generate-commit-pull-request-message`, {
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
                    { errorAnalytics: { toastId: `review.commitPullRequest.generate.failed` } },
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
                    { errorAnalytics: { toastId: `review.commitPullRequest.generate.emptyResponse` } },
                  ),
                  null)
                : (Sr(n, r, s, f),
                  c.length === 0 && n.set(z, r, (e) => (e.trim().length === 0 ? p : e)),
                  l.length === 0 && n.set(B, r, (e) => (e.trim().length === 0 ? m : e)),
                  { body: m, message: f, title: p });
          },
        };
      })),
      (Er = T(i, (e, { get: t, scope: n }) => {
        let r = t(j),
          i = t(x);
        return {
          mutationKey: [`vscode`, `generate-pull-request-message`, e.cwd, e.hostId, e.conversationId],
          mutationFn: async ({ body: t, headBranch: a, signal: o, title: s }) => {
            let c = t.trim(),
              l = s.trim();
            if (c.length > 0 && l.length > 0) return { body: c, title: l };
            let u;
            try {
              let t = (await br(n, e, { headBranch: a, signal: o })).trim();
              if (o?.aborted) return null;
              if (t.length === 0)
                return (
                  i.danger(r.formatMessage(Z.pullRequestGenerationError), {
                    errorAnalytics: {
                      toastId: `useGitActionMessageGeneration.mutationFn.pullRequestGenerationError`,
                    },
                  }),
                  null
                );
              u = await E(`generate-pull-request-message`, {
                params: { hostId: e.hostId, prompt: t, cwd: e.cwd },
                signal: o,
              });
            } catch {
              return (
                o?.aborted ||
                  i.danger(r.formatMessage(Z.pullRequestGenerationError), {
                    errorAnalytics: {
                      toastId: `useGitActionMessageGeneration.mutationFn.pullRequestGenerationError`,
                    },
                  }),
                null
              );
            }
            let d = c || u.body?.trim() || ``,
              f = l || u.title?.trim() || ``;
            return o?.aborted
              ? null
              : d.length > 0 && f.length > 0
                ? { body: d, title: f }
                : (i.danger(r.formatMessage(Z.pullRequestGenerationError), {
                    errorAnalytics: {
                      toastId: `useGitActionMessageGeneration.mutationFn.pullRequestGenerationError`,
                    },
                  }),
                  null);
          },
        };
      })));
  }))();
}
function Or(e, t) {
  if (t !== void 0) return t ? de : null;
  if (ne(e, `codex_git_commit`) !== !0) return null;
  let n = e?.commit_attribution;
  if (n === void 0) return de;
  if (n == null) return null;
  if (typeof n != `string`) return de;
  let r = n.trim();
  return r.length > 0 ? r : null;
}
async function kr(e, t) {
  let n = jr.get(e);
  if (n != null && Date.now() - n.fetchedAt < Ar) return n.value;
  try {
    let n = (await st.safeGet(`/wham/settings/user`, { signal: t })).commit_attribution_enabled;
    return (jr.set(e, { fetchedAt: Date.now(), value: n }), n);
  } catch {
    return null;
  }
}
var Ar, jr;
function Mr() {
  return (Mr = e(() => {
    (pe(), yt(), (Ar = 3e5), (jr = new WeakMap()));
  }))();
}
var Nr;
function Pr() {
  return (Pr = e(() => {
    (v(),
      h(),
      qe(),
      D(),
      it(),
      V(),
      (Nr = T(
        i,
        (e, { scope: t }) => ({
          mutationKey: [`git`, `commit`, e.cwd],
          mutationFn: (n) =>
            gt(`git`).request({
              method: `commit`,
              signal: n.signal,
              params: {
                cwd: e.cwd,
                hostConfig: e.hostConfig,
                message: n.message,
                includeUnstaged: t.get(En),
                commitAttribution: n.commitAttribution,
                operationSource: n.operationSource,
              },
            }),
          onSuccess: (n) => {
            n.status === `success` && (Le(t, g, {}), t.set(R, I(e), ``));
          },
        }),
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  }))();
}
function Fr({ baseBranch: e, headBranch: t, remoteUrl: n }) {
  let r = e?.trim() ?? ``,
    i = t.trim();
  if (n == null || r.length === 0 || i.length === 0) return null;
  let a = o(n);
  return a?.host === `github.com`
    ? `https://${a.host}/${a.owner}/${a.repo}/compare/${Ir(r)}...${Ir(i)}`
    : null;
}
function Ir(e) {
  return encodeURIComponent(e).replaceAll(`%2F`, `/`);
}
function Lr() {
  return (Lr = e(() => {
    pe();
  }))();
}
var Rr, zr;
function Br() {
  return (Br = e(() => {
    (v(),
      h(),
      ft(),
      le(),
      Ze(),
      qe(),
      Dt(),
      Ce(),
      mt(),
      wt(),
      ye(),
      rt(),
      Pe(),
      Xe(),
      kt(),
      D(),
      Lr(),
      me(),
      (Rr = class extends Error {
        execOutput;
        constructor(e) {
          (super(e.error), (this.execOutput = e.execOutput));
        }
      }),
      (zr = T(
        i,
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
            await Et({ wait: () => t.when((e) => e.get(at, r).source !== `loading`) }, n.signal);
            let { createPullRequestTarget: i, originRepository: a, source: o } = t.get(at, r),
              s =
                o === `github-cli` || o === `github-connector`
                  ? await t.query
                      .getOrFetch(Re, {
                        hostId: e.hostId,
                        hostname: a?.host ?? `github.com`,
                        provider: o,
                        source: n.operationSource,
                      })
                      .catch(() => null)
                  : null,
              c = s?.status === `success` ? s.account : null,
              l = t.query.snapshot(Ie, {
                cwd: e.cwd,
                headBranch: n.headBranch,
                hostId: e.hostId,
                operationSource: n.operationSource,
              }).queryKey;
            switch ((n.signal?.throwIfAborted(), o)) {
              case `github-cli`: {
                let t = await $e(
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
                if (t.status === `error`) throw new Rr(t);
                return { number: t.number, url: t.url, account: c, provider: o, discoveryQueryKey: l };
              }
              case `github-connector`: {
                if (i == null) throw Error(`Pull request creation source unavailable`);
                let { originRepository: r, repository: a, threadId: s } = i,
                  u =
                    `${r.host}/${r.owner}/${r.repo}`.toLowerCase() !==
                    `${a.host}/${a.owner}/${a.repo}`.toLowerCase(),
                  d = u && !n.headBranch.includes(`:`) ? `${r.owner}:${n.headBranch}` : n.headBranch;
                if (n.openInBrowser === !0) {
                  let e = Fr({
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
                  ...(await Ve(t, e.hostId, a, {
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
          onSuccess: async (r, i) => {
            if (
              (t.queryClient.invalidateQueries({
                predicate: (t) => t.meta?.hostId === e.hostId,
                queryKey: S(`gh-pr-search`),
              }),
              i.openInBrowser === !0)
            )
              return;
            Le(t, n, {});
            let a = r.url == null ? null : xe(r.url);
            if (a != null && r.account != null) {
              let e = t.query.snapshot(tt, {
                request: { account: r.account, pullRequest: a },
                provider: r.provider,
                source: i.operationSource,
              });
              (await e.cancel(),
                e.setData({
                  status: `success`,
                  baseBranch: i.baseBranch,
                  headBranch: i.headBranch,
                  canMerge: !1,
                  checks: [],
                  checksComplete: !1,
                  ciStatus: `pending`,
                  hasOpenPr: !0,
                  hasPendingChecks: !0,
                  headRevision: void 0,
                  isDraft: i.isDraft ?? !1,
                  mergeBlocker: `unknown`,
                  state: `open`,
                  title: i.titleOverride?.trim() || null,
                  url: r.url,
                }),
                await t.queryClient.cancelQueries({ queryKey: r.discoveryQueryKey, exact: !0 }),
                t.queryClient.setQueryData(r.discoveryQueryKey, a));
            } else
              t.queryClient.invalidateQueries({
                queryKey: S(`gh-pr-for-branch`, { cwd: e.cwd, headBranch: i.headBranch, hostId: e.hostId }),
              });
            if (i.conversationId != null && i.headBranch.trim().length > 0) {
              try {
                await ze(t, {
                  conversationId: i.conversationId,
                  headBranch: i.headBranch,
                  hostId: e.hostId,
                  root: e.root,
                  url: r.url,
                });
              } catch {
                t.get(x).warning(
                  t
                    .get(j)
                    .formatMessage({
                      id: `codex.pullRequest.createdAttachmentFailed`,
                      defaultMessage: `Pull request created, but could not attach it to this chat`,
                      description: `Warning when a pull request was created but its chat attachment could not be saved`,
                    }),
                );
              }
              A(t, e.hostId, i.conversationId, i.headBranch, e.root);
            }
          },
          onError: (n) => {
            n instanceof Rr && Tt(t, e.hostId);
          },
          onSettled: (n, r, i) => {
            (i.signal?.aborted || r != null) &&
              i.openInBrowser !== !0 &&
              t.queryClient.invalidateQueries({
                queryKey: S(`gh-pr-for-branch`, { cwd: e.cwd, headBranch: i.headBranch, hostId: e.hostId }),
              });
          },
          networkMode: `always`,
        }),
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  }))();
}
function Vr(e, t, n, r) {
  if (!t) return;
  let i = Ue({
    metadata: t,
    method: `branch-ahead-count`,
    params: { operationSource: r, root: t.root },
    hostKey: n,
  });
  e.setQueryData(i, (e) => e && { ...e, commitsAhead: 0 });
}
function Hr() {
  return (Hr = e(() => {
    Te();
  }))();
}
var Ur;
function Wr() {
  return (Wr = e(() => {
    (v(),
      h(),
      bt(),
      qe(),
      D(),
      me(),
      Hr(),
      (Ur = T(
        i,
        (e, { queryClient: t, scope: n }) => {
          let r = Ct(e.hostConfig);
          return {
            mutationKey: [`vscode`, `git-push`, e.cwd, e.hostId],
            mutationFn: (t) =>
              E(`git-push`, {
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
                (Le(n, ie, { forced: a.force ?? !1 }),
                a.analyticsAttribution != null &&
                  n
                    .get(nt)
                    .submitCodexAnalyticsEvent?.({
                      ...a.analyticsAttribution,
                      action: `push`,
                      eventKind: `action`,
                      metadata: { forced: a.force ?? !1 },
                    }),
                Vr(
                  t,
                  t.getQueryData(ht(e.cwd, r, e.hostConfig, a.operationSource).queryKey),
                  r,
                  a.operationSource,
                ));
            },
            networkMode: `always`,
          };
        },
        { excludeFieldsFromKey: [`operationSource`] },
      )));
  }))();
}
var Gr;
function Kr() {
  return (Kr = e(() => {
    (h(),
      Te(),
      bt(),
      D(),
      me(),
      (Gr = T(i, (e, { queryClient: t }) => {
        let n = Ct(e.hostConfig);
        return {
          mutationKey: [`vscode`, `git-create-and-checkout-branch`, e.cwd, e.hostId, e.operationSource],
          mutationFn: async ({ signal: t, ...n }) => {
            let r = await E(`git-create-branch`, {
              params: { ...n, cwd: e.cwd, hostId: e.hostId },
              signal: t,
              source: e.operationSource,
            });
            if (r.status === `error`)
              return { status: `create-error`, error: r.error, execOutput: r.execOutput };
            let i = await E(`git-checkout-branch`, {
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
            let o = t.getQueryData(ht(e.cwd, n, e.hostConfig, e.operationSource).queryKey);
            o != null &&
              (r?.status === `success` &&
                t.setQueryData(
                  Ue({
                    hostKey: n,
                    metadata: o,
                    method: `current-branch`,
                    params: { operationSource: e.operationSource, root: o.root },
                  }),
                  { branch: r.branch },
                ),
              je(t, o, { changeType: a.mode === `synced` ? `synced-branch` : `head`, hostKey: n }),
              r?.status === `success` && a.mode === `synced` && je(t, o, { changeType: `head`, hostKey: n }));
          },
          networkMode: `always`,
        };
      })));
  }))();
}
async function qr({
  scope: e,
  conversationId: t,
  target: n,
  operationSource: r,
  branch: i,
  mode: a,
  signal: o,
}) {
  if (o?.aborted) return !1;
  let s = e.get(x),
    c = e.get(j),
    l = c.formatMessage(Z.createBranchErrorTitle);
  try {
    let u = await e
      .get(Gr, { ...n, operationSource: r })
      .mutateAsync({ branch: i, failIfExists: !0, mode: a, signal: o });
    switch (u.status) {
      case `success`:
        return (t != null && A(e, n.hostConfig.id, t, u.branch, n.root), !o?.aborted);
      case `create-error`:
        return (o?.aborted || X({ toaster: s, title: l, message: u.error, execOutput: u.execOutput }), !1);
      case `checkout-error`:
        return (
          o?.aborted ||
            X({
              toaster: s,
              title: c.formatMessage(Z.checkoutBranchErrorTitle),
              message: u.error,
              execOutput: u.execOutput,
            }),
          !1
        );
    }
  } catch {
    return (o?.aborted || X({ toaster: s, title: l, message: l }), !1);
  }
}
async function Jr({
  scope: e,
  target: t,
  resolveCommitMessage: n,
  operationSource: r,
  allowNothingToCommit: i = !1,
  signal: a,
}) {
  if (a?.aborted) return !1;
  let o = e.get(x),
    s = e.get(j),
    c = await n();
  if (a?.aborted || c == null) return !1;
  let l = c.trim();
  if (l.length === 0)
    return (
      o.danger(s.formatMessage(Z.commitMessageEmpty), {
        errorAnalytics: { toastId: `workflowSteps.runCommitStep.commitMessageEmpty` },
      }),
      !1
    );
  let u = await kr(e, a);
  if (a?.aborted) return !1;
  let d = Or(e.get(We, { cwd: t.cwd, hostId: t.hostId }).data, u);
  try {
    let n = await e
      .get(Nr, { ...t, operationSource: r })
      .mutateAsync({ message: l, commitAttribution: d, operationSource: r, signal: a });
    if (a?.aborted) return !1;
    if (n.status === `error`)
      return i && n.errorType === `nothing-to-commit`
        ? !0
        : (X({
            toaster: o,
            title: s.formatMessage(Z.commitErrorTitle),
            message: n.error,
            execOutput: n.execOutput,
          }),
          !1);
  } catch {
    return (a?.aborted || X({ toaster: o, title: s.formatMessage(Z.commitErrorTitle), message: null }), !1);
  }
  return !0;
}
async function Yr({
  scope: e,
  target: t,
  pushStatus: n,
  analyticsAttribution: r,
  operationSource: i,
  forcePush: a = !1,
  signal: o,
}) {
  if (o?.aborted) return !1;
  let s = e.get(x),
    c = e.get(j),
    l = c.formatMessage(a ? Z.forcePushErrorTitle : Z.pushErrorTitle);
  if (n == null) return (X({ toaster: s, title: l, message: null }), !1);
  let u = { force: a };
  !n.upstreamRef && n.branch && ((u.refspec = `HEAD:refs/heads/${n.branch}`), (u.setUpstream = !0));
  try {
    let n = await e
      .get(Ur, { ...t, operationSource: i })
      .mutateAsync({ ...u, analyticsAttribution: r, operationSource: i, signal: o });
    if (n.status === `error`)
      return (
        o?.aborted ||
          X({
            toaster: s,
            title: l,
            message: n.execOutput == null ? c.formatMessage(Z.pushErrorTitle) : null,
            execOutput: n.execOutput,
          }),
        !1
      );
  } catch {
    return (o?.aborted || X({ toaster: s, title: l, message: null }), !1);
  }
  return !0;
}
async function Xr({
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
  let u = e.get(x),
    d = e.get(j);
  if (r?.branch == null || r.defaultBranch == null)
    return (X({ toaster: u, title: d.formatMessage(Z.createPullRequestErrorTitle), message: null }), null);
  try {
    let u = await e
      .get(zr, { ...n, operationSource: a })
      .mutateAsync({
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
          Ye({ href: u.url, initiator: `pull_request_link`, openTarget: `external-browser` }),
        { url: u.url });
  } catch (e) {
    return (
      l?.aborted ||
        X({
          toaster: u,
          title: d.formatMessage(Z.createPullRequestErrorTitle),
          message: e instanceof Error ? e.message : null,
          execOutput: e instanceof Rr ? e.execOutput : void 0,
        }),
      null
    );
  }
}
function Zr() {
  return (Zr = e(() => {
    (Ee(), ft(), Ae(), le(), Ze(), Mr(), Pr(), Br(), Wr(), Kr(), yr());
  }))();
}
async function Qr(e, t, n) {
  let r = I(t);
  if (e.get(L, r) != null) return !1;
  let i = xn(r);
  e.set(L, r, {
    workflow: `commit`,
    phase: n.newBranch == null ? (n.nextStep === `push` ? `pushing` : `committing`) : `creating-branch`,
  });
  try {
    let a = e.get(M, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      o = a.type === `success` ? a.data : void 0,
      s = n.newBranch ?? o?.branch,
      c;
    if (
      n.newBranch != null &&
      n.nextStep !== `push` &&
      e.get(R, r).trim().length === 0 &&
      ((c = await e
        .get(wr, {
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
        !(await qr({
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
      await Lt(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (n.nextStep !== `push`) {
      if (
        n.newBranch == null &&
        t.operationSource === `local_conversation_git_actions` &&
        t.conversationId != null &&
        e.get(In, t)
      ) {
        let n = e.get(K, t);
        n.length > 0 && A(e, t.hostId, t.conversationId, n, t.root);
      }
      if (
        (e.set(L, r, { workflow: `commit`, phase: `committing` }),
        !(await Jr({
          scope: e,
          target: t,
          resolveCommitMessage: async () => {
            if (c != null) return c;
            let n = e.get(R, r).trim();
            return n.length > 0
              ? n
              : e
                  .get(wr, {
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
      e.set(L, r, { workflow: `commit`, phase: `pushing` });
      let n = e.get(M, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
        a = n.type === `success` ? n.data : void 0;
      if (
        ((s = a?.branch ?? s),
        !(await Yr({
          scope: e,
          target: t,
          pushStatus: a,
          analyticsAttribution: e.get(Pt),
          operationSource: t.operationSource,
          signal: i,
        })) ||
          (Kn(e, { branch: s, cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
          i.aborted))
      )
        return !1;
    }
    let l = e.get(j),
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
      e.get(x).success(d),
      !0
    );
  } finally {
    (Cn(r, i), e.set(L, r, null));
  }
}
function $r() {
  return ($r = e(() => {
    (ft(), le(), N(), Ze(), Ft(), V(), Gn(), qn(), Dr(), Zr());
  }))();
}
async function ei(e, t, n, r) {
  (await He(e, n.connector), r.signal.throwIfAborted());
  let i = r.isDraft && !/^(?:draft:|\[draft\]|\(draft\))/iu.test(r.title) ? `Draft: ${r.title}` : r.title,
    { data: a } = ti.parse(
      await be(
        e,
        t,
        n.connector,
        `create_merge_request`,
        {
          project_id: `${r.sourceRepository.owner}/${r.sourceRepository.repo}`,
          target_project_id: n.targetProjectId,
          source_branch: r.sourceBranch,
          target_branch: n.targetBranch,
          title: i,
          description: r.body,
        },
        r.threadId,
      ),
    );
  return { number: a.iid, url: a.web_url };
}
var ti;
function ni() {
  return (ni = e(() => {
    (a(), De(), (ti = ue({ data: ue({ iid: ae().int().positive(), web_url: _e() }) })));
  }))();
}
async function ri(e, t, r) {
  if (r.gitLabForm != null && !et(e)) return !1;
  let i = I(t);
  if (e.get(L, i) != null) return !1;
  let a = xn(i),
    o =
      r.gitLabForm == null
        ? void 0
        : e.watch((e) => {
            e.get(dt) || Sn(i);
          });
  e.set(L, i, {
    workflow: `create-pr`,
    phase: r.nextStep === `commit-push-and-create-pr` ? `generating-commit-message` : `generating-pr-message`,
  });
  try {
    let o = e.get(Dn, i);
    e.set(En, o);
    let s = e.get(M, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
      c = s.type === `success` ? s.data : void 0,
      u = r.newBranch ?? c?.branch,
      d = c,
      f =
        r.nextStep === `commit-push-and-create-pr`
          ? await e
              .get(Tr, {
                conversationId: t.conversationId,
                cwd: t.cwd,
                hostConfig: t.hostConfig,
                hostId: t.hostId,
                root: t.root,
              })
              .mutateAsync({ headBranch: r.newBranch, signal: a })
          : null;
    if (r.nextStep === `commit-push-and-create-pr` && f == null) return !1;
    let p =
      f ??
      (await e
        .get(Er, {
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          hostId: t.hostId,
          root: t.root,
        })
        .mutateAsync({ body: e.get(B, i), headBranch: r.newBranch, signal: a, title: e.get(z, i) }));
    if (p == null || a.aborted) return !1;
    if (r.newBranch != null) {
      if (
        (e.set(L, i, { workflow: `create-pr`, phase: `creating-branch` }),
        !(await qr({
          scope: e,
          conversationId: t.conversationId,
          target: t,
          operationSource: t.operationSource,
          branch: r.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
          signal: a,
        })))
      )
        return !1;
      await Lt(e, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
    }
    if (a.aborted) return !1;
    if (r.nextStep === `commit-push-and-create-pr`) {
      if (r.newBranch == null && t.conversationId != null && e.get(In, t)) {
        let n = e.get(K, t);
        n.length > 0 && A(e, t.hostId, t.conversationId, n, t.root);
      }
      if (
        (e.set(L, i, { workflow: `create-pr`, phase: `committing` }),
        !(await Jr({
          scope: e,
          target: t,
          resolveCommitMessage: async () => f?.message ?? null,
          operationSource: t.operationSource,
          allowNothingToCommit: !0,
          signal: a,
        })))
      )
        return !1;
    }
    if (a.aborted) return !1;
    if (r.nextStep !== `create-pr`) {
      e.set(L, i, { workflow: `create-pr`, phase: `pushing` });
      let n = e.get(M, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource });
      if (
        ((d = n.type === `success` ? n.data : void 0),
        (u = d?.branch ?? u),
        !(await Yr({
          scope: e,
          target: t,
          pushStatus: d,
          analyticsAttribution: e.get(Pt),
          operationSource: t.operationSource,
          signal: a,
        })) ||
          (Kn(e, { branch: u, cwd: t.cwd, hostConfig: t.hostConfig, operationSource: t.operationSource }),
          a.aborted))
      )
        return !1;
    }
    if (r.gitLabForm != null) {
      if (!d?.branch) return !1;
      if (!r.openInBrowser) {
        if (r.gitLabSubmission == null || t.conversationId == null) return !1;
        e.set(L, i, { workflow: `create-pr`, phase: `creating-pr` });
        try {
          let i = e.query.snapshot(ut, {
              hostId: t.hostId,
              repository: r.gitLabForm.sourceRepository,
              headBranch: d.branch,
            }),
            o = await ei(e, t.hostId, r.gitLabSubmission, {
              sourceBranch: d.branch,
              sourceRepository: r.gitLabForm.sourceRepository,
              title: p.title,
              body: p.body,
              isDraft: r.createPullRequestAsDraft,
              threadId: t.conversationId,
              signal: a,
            });
          (Le(e, n, {}), i.invalidate());
          try {
            await ze(e, {
              conversationId: t.conversationId,
              hostId: t.hostId,
              root: t.root,
              headBranch: d.branch,
              url: o.url,
            });
          } catch {
            e.get(x).warning(
              (0, $.jsx)(l, {
                id: `gitlabMergeRequest.createdAttachmentFailed`,
                defaultMessage: `Merge request created, but could not attach it to this chat`,
                description: `Warning when a merge request was created but its chat attachment could not be saved`,
              }),
            );
          }
          return (
            A(e, t.hostId, t.conversationId, d.branch, t.root),
            !a.aborted && (ii(e, d.branch, o.url, `MR`), !0)
          );
        } catch {
          return (
            a.aborted ||
              e
                .get(x)
                .warning(
                  (0, $.jsx)(l, {
                    id: `localConversationPage.gitLabNativeCreationFailed`,
                    defaultMessage: `Could not confirm the merge request. Check GitLab in your browser before trying again`,
                    description: `Error after a GitLab creation attempt that may have completed even though its response could not be confirmed`,
                  }),
                ),
            !1
          );
        }
      }
      let o = new URL(r.gitLabForm.url);
      return (
        o.searchParams.set(`merge_request[source_branch]`, d.branch),
        o.searchParams.set(`merge_request[title]`, p.title),
        o.searchParams.set(`merge_request[description]`, p.body),
        Ye({ href: o.href, initiator: `pull_request_link` }),
        !0
      );
    }
    e.set(L, i, { workflow: `create-pr`, phase: `creating-pr` });
    let m = await Xr({
      scope: e,
      conversationId: t.conversationId,
      target: t,
      pushStatus: d,
      createPullRequestAsDraft: r.createPullRequestAsDraft,
      operationSource: t.operationSource,
      openInBrowser: r.openInBrowser,
      title: p.title,
      body: p.body,
      signal: a,
    });
    return m == null || r.openInBrowser ? m != null : (ii(e, u, m.url), !0);
  } finally {
    (o?.(), Cn(i, a), e.set(L, i, null));
  }
}
function ii(e, t, n, r = `PR`) {
  let i = t?.trim() ?? ``,
    a =
      n == null
        ? r
        : (0, $.jsx)(`a`, {
            href: n,
            className: `cursor-interaction underline decoration-current decoration-[0.5px]`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            onClick: (e) => {
              Je({ event: e, href: n, initiator: `pull_request_link` });
            },
            children: r,
          });
  e.get(x).success(
    i.length > 0
      ? (0, $.jsx)(l, {
          id: `localConversationPage.createPullRequestSuccessToast.namedBranch`,
          defaultMessage: `Created {prLabel} for {branch}`,
          description: `Toast shown when creating a pull request succeeds for a named branch`,
          values: { branch: i, prLabel: a },
        })
      : (0, $.jsx)(l, {
          id: `localConversationPage.createPullRequestSuccessToast.unknownBranch`,
          defaultMessage: `Created {prLabel} for your branch`,
          description: `Toast shown when creating a pull request succeeds but the branch name is unavailable`,
          values: { prLabel: a },
        }),
  );
}
var $;
function ai() {
  return (ai = e(() => {
    (v(),
      ce(),
      ft(),
      Ae(),
      le(),
      N(),
      Ft(),
      qe(),
      St(),
      ni(),
      Ne(),
      Pe(),
      V(),
      Gn(),
      qn(),
      Dr(),
      Zr(),
      ($ = O()));
  }))();
}
var oi;
function si() {
  return (si = e(() => {
    (h(),
      Se(),
      $r(),
      ai(),
      (oi = T(k, (e, { scope: t }) => ({
        mutationKey: [`local-git-workflow`, e.cwd, e.hostId],
        mutationFn: (n) => {
          switch (n.kind) {
            case `commit`:
              return Qr(t, e, n);
            case `create-pr`:
              return ri(t, e, n);
          }
        },
        networkMode: `always`,
      }))));
  }))();
}
function ci(e) {
  let t = (0, ui.c)(15),
    { branchAlreadyExists: n, disabled: r, placeholder: i, value: a, onChange: o } = e,
    s = ee(),
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
  let u;
  t[2] === o
    ? (u = t[3])
    : ((u = (e) => {
        o(e.target.value);
      }),
      (t[2] = o),
      (t[3] = u));
  let d;
  t[4] !== r || t[5] !== i || t[6] !== c || t[7] !== u || t[8] !== a
    ? ((d = (0, di.jsx)(`input`, {
        autoFocus: !0,
        className: `w-full bg-transparent text-default outline-none placeholder:text-codex-description`,
        "aria-label": c,
        placeholder: i,
        value: a,
        disabled: r,
        onKeyDown: li,
        onChange: u,
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = u),
      (t[8] = a),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === n
    ? (f = t[11])
    : ((f = n
        ? (0, di.jsx)(`p`, {
            className: `text-xs text-danger`,
            children: (0, di.jsx)(l, {
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
    t[12] !== d || t[13] !== f
      ? ((p = (0, di.jsxs)(`div`, { className: `flex flex-col gap-1 px-3 pt-2`, children: [d, f] })),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function li(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
var ui, di;
function fi() {
  return (fi = e(() => {
    ((ui = he()), ce(), (di = O()));
  }))();
}
export {
  Kt as $,
  On as A,
  V as B,
  Bn as C,
  An as D,
  jn as E,
  B as F,
  gn as G,
  mn as H,
  z as I,
  nn as J,
  yn as K,
  L,
  bn as M,
  I as N,
  kn as O,
  R as P,
  Ut as Q,
  Dn as R,
  Vn as S,
  Rn as T,
  vn as U,
  hn as V,
  _n as W,
  Xt as X,
  on as Y,
  Qt as Z,
  Fn as _,
  Gr as a,
  zn as b,
  Lr as c,
  fr as d,
  Wt as et,
  hr as f,
  Pn as g,
  K as h,
  oi as i,
  Sn as j,
  H as k,
  gr as l,
  Mn as m,
  fi as n,
  M as nt,
  Kr as o,
  U as p,
  rn as q,
  si as r,
  N as rt,
  Fr as s,
  ci as t,
  Jt as tt,
  yr as u,
  Gn as v,
  q as w,
  Wn as x,
  Ln as y,
  En as z,
};
//# sourceMappingURL=git-action-new-branch-field-2b4ee066ae8f.js.map
