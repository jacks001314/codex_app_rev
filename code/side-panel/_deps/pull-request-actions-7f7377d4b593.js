import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Kg as n,
  O3t as r,
  QUt as i,
  RWt as a,
  Rg as o,
  Xjt as s,
  YUt as c,
  _Jt as l,
  a3t as u,
  a_ as d,
  c_ as f,
  f_ as p,
  gRt as m,
  hXt as h,
  hz as ee,
  i6t as g,
  i_ as _,
  l_ as te,
  mJt as ne,
  mXt as re,
  mz as ie,
  nWt as v,
  o3t as ae,
  oMt as y,
  o_ as b,
  p_ as oe,
  qg as se,
  rMt as ce,
  rWt as x,
  tMt as S,
  u_ as le,
  xRt as ue,
  z3t as C,
  zg as de,
} from "./app-initial-f094ef01c64d.js";
import { Dw as fe, kw as pe } from "./app-primary-4c40d73a1074.js";
function me(e, t) {
  return { commentKey: c(t), revision: e };
}
function w(e) {
  return e.content
    .flatMap((e) => (e.content_type === `text` ? [e.text] : []))
    .join(
      `

`,
    )
    .trim();
}
function he({ currentComments: e, nextComments: t }) {
  let n = new Set(e.map(c)),
    r = t.filter((t) => e.some((e) => ve({ currentComment: e, nextComment: t }))),
    i = t.filter((e) => w(e).length > 0 && !n.has(c(e)));
  return (0, T.default)([...r, ...i], c);
}
function ge(e) {
  return {
    line: e.position.line,
    path: e.position.path,
    side: e.position.side,
    startLine: e.position.start_line ?? void 0,
    startSide: e.position.start_side ?? void 0,
  };
}
function _e({ comments: e, filePaths: t, workspaceRoot: n }) {
  let r = new Map();
  for (let i of e) {
    let e = t.find((e) => x(i.position.path, e, n ?? void 0));
    e != null && r.set(e, (r.get(e) ?? 0) + 1);
  }
  return r;
}
function ve({ currentComment: e, nextComment: t }) {
  return (
    e.replyToReviewThreadId != null &&
    e.replyToReviewThreadId === t.replyToReviewThreadId &&
    w(e).length === 0 &&
    w(t).length > 0 &&
    e.position.path === t.position.path &&
    e.position.side === t.position.side &&
    e.position.line === t.position.line
  );
}
var T,
  E = e(() => {
    ((T = t(a(), 1)), v());
  });
async function D({
  appServerVersion: e,
  body: t,
  detail: n,
  pullRequestInstructions: r,
  request: i,
  signal: a,
  title: o,
}) {
  let s = ie.pullRequestMessageGeneration;
  if (s == null) throw new j(`unsupported`);
  k(n, i);
  let c = await O(`gh-pr-diff`, i, a);
  if (c.status === `error`) throw new j(`diff_failed`, c.error);
  if (c.headRevision !== n.headRevision) throw new j(`head_changed`);
  a?.throwIfAborted();
  let l;
  try {
    l = await _(
      s.generate({
        appServerVersion: e,
        hostId: i.account.hostId,
        prompt: ye({
          baseBranch: n.baseBranch,
          body: t,
          headBranch: n.headBranch,
          pullRequestInstructions: r,
          title: o,
          unifiedDiff: c.unifiedDiff,
        }),
      }),
      a,
    );
  } catch (e) {
    throw (a?.throwIfAborted(), new j(`generation_failed`, e));
  }
  let u = l?.body.trim();
  if (!u) throw new j(`empty_result`);
  let d = await O(`gh-pr-summary`, i, a);
  if (d.status !== `success`) throw new j(`status_failed`);
  let f = d.url == null ? null : y(d.url);
  if (f == null || S(f) !== S(i.pullRequest) || d.baseBranch !== n.baseBranch)
    throw new j(`target_changed`);
  if (d.headRevision !== c.headRevision) throw new j(`head_changed`);
  return u;
}
async function O(e, t, n) {
  try {
    return await b(e, t, { signal: n, source: `pull_requests_page` });
  } catch (t) {
    throw (n?.throwIfAborted(), new j(e === `gh-pr-diff` ? `diff_failed` : `status_failed`, t));
  }
}
function ye({
  baseBranch: e,
  body: t,
  headBranch: n,
  pullRequestInstructions: r,
  title: i,
  unifiedDiff: a,
}) {
  return [
    t.trim().length > 0
      ? `Update the existing pull request description. Preserve accurate existing description and testing notes while incorporating the current diff.`
      : `Write a pull request description from the current diff. Preserve any accurate context and testing notes supplied below.`,
    ``,
    `Pull request context:`,
    `- Head: ${A(n, M)}`,
    `- Base: ${A(e, M)}`,
    `- Current title: ${A(i, N)}`,
    ``,
    `Current description:`,
    A(t, P, !0),
    ``,
    `Pull request instructions (apply these to the title/body content only):`,
    A(r, F, !0),
    ``,
    `Canonical pull request diff:`,
    A(a, I, !0),
  ].join(`
`);
}
function k(e, t) {
  if (
    S(e.pullRequest) !== S(t.pullRequest) ||
    s(t.account.hostname) !== s(t.pullRequest.hostname) ||
    (e.isAuthor &&
      e.authorLogin != null &&
      e.authorLogin.toLowerCase() !== t.account.login.toLowerCase())
  )
    throw new j(`target_changed`);
}
function A(e, t, n = !1) {
  let r = e?.trim() ?? ``;
  if (r.length === 0) return `-`;
  let i = r.length <= t ? r : `${r.slice(0, t - 1)}…`;
  return !n || (i.match(/```/gu)?.length ?? 0) % 2 == 0 ? i : `${i}\n\`\`\``;
}
var j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (ee(),
      d(),
      ce(),
      (j = class extends Error {
        reason;
        constructor(e, t) {
          (super(e, { cause: t }),
            (this.reason = e),
            (this.name = `PullRequestDescriptionGenerationError`));
        }
      }),
      (M = 256),
      (N = 512),
      (P = 6e3),
      (F = 4e3),
      (I = 18e3));
  });
async function R(
  e,
  t,
  n,
  {
    awaitRefresh: r = !0,
    deferRefreshWhilePending: i = !1,
    onSuccess: a,
    refetchSearch: s = !0,
    updatedBody: c,
    workspaceRequest: l,
    resources: u = c == null
      ? [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-reviews`, `gh-pr-discussion`]
      : [`gh-pr-body`],
  } = {},
) {
  let d = [
      `github`,
      `pull-request`,
      t.account.hostId,
      t.pullRequest.hostname,
      t.pullRequest.owner,
      t.pullRequest.repository,
      t.pullRequest.number,
    ],
    m = c == null,
    h = !1;
  try {
    (await e
      .getMutationCache()
      .build(e, {
        mutationFn: async () => {
          let e = await n();
          if (e.status === `error`) throw Error(e.error);
        },
        mutationKey: d,
        retry: !1,
        networkMode: `always`,
        scope: {
          id: [
            t.account.hostId,
            t.pullRequest.hostname.toLowerCase(),
            t.pullRequest.owner.toLowerCase(),
            t.pullRequest.repository.toLowerCase(),
            t.pullRequest.number,
          ].join(`/`),
        },
      })
      .execute(void 0),
      (h = !0),
      (m = !0),
      await Promise.all(u.flatMap((e) => z(t, e)).map((t) => e.cancelQueries(t))),
      a?.(),
      c != null &&
        e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-body`) }, (e) =>
          e?.status === `success` ? { ...e, body: c } : e,
        ));
  } finally {
    if (m && (!i || e.isMutating({ mutationKey: d }) === 0)) {
      let n =
        e.isFetching({ queryKey: f(t) }) === 0
          ? []
          : [`gh-pr-summary`, `gh-pr-body`, `gh-pr-metadata`, `gh-pr-reviews`, `gh-pr-discussion`]
              .filter((e) => !u.includes(e))
              .map((e) => ({ queryKey: p(t, `github-connector`, e), exact: !0 }))
              .filter((t) => e.isFetching(t) > 0);
      await Promise.all([...n.map((t) => e.cancelQueries(t)), le(e, t)]);
      let i = Promise.allSettled([
        ...n.map((t) => e.invalidateQueries(t)),
        ...u.flatMap((e) => z(t, e)).map((t) => e.invalidateQueries(t)),
        e.invalidateQueries({ queryKey: o(t.account), refetchType: s ? `active` : `none` }),
        ...(l == null ? [] : [e.invalidateQueries({ queryKey: ne(`gh-pr-board`) })]),
      ]);
      r && c == null && h && (await i);
    }
  }
}
function z(e, t) {
  return [`github-cli`, `github-connector`].map((n) => ({
    exact: !0,
    queryKey: p(e, n === `github-cli` ? `github-cli` : `github-connector`, t),
  }));
}
function B(e, t, n) {
  for (let { queryKey: r } of z(t, `gh-pr-discussion`))
    e.setQueryData(r, (e) => {
      if (e?.status !== `success`) return e;
      let t =
        n.action === `delete`
          ? e.activityItems.find(
              (e) => e.type !== `event` && e.type !== `commit_group` && e.nodeId === n.nodeId,
            )
          : void 0;
      return {
        ...e,
        activityItems: e.activityItems.flatMap((e) =>
          e.type === `event` || e.type === `commit_group`
            ? [e]
            : e.nodeId === n.nodeId
              ? n.action === `delete`
                ? []
                : [{ ...e, body: n.body, rawBody: n.body }]
              : e.replies?.some((e) => e.nodeId === n.nodeId) === !0
                ? [
                    {
                      ...e,
                      replies: e.replies.flatMap((e) =>
                        e.nodeId === n.nodeId
                          ? n.action === `delete`
                            ? []
                            : [{ ...e, body: n.body, rawBody: n.body }]
                          : [e],
                      ),
                    },
                  ]
                : [e],
        ),
        commentAttachments:
          t?.type === `review_comment`
            ? e.commentAttachments.filter((e) => e.reviewThreadId !== t.reviewThreadId)
            : e.commentAttachments,
      };
    });
}
function V(e, t, n, r, a) {
  let o = {
    authorLogin: t.account.login,
    body: n,
    createdAt: new Date().toISOString(),
    id: crypto.randomUUID(),
    url: null,
  };
  for (let { queryKey: s } of z(t, `gh-pr-discussion`))
    e.setQueryData(s, (e) =>
      e?.status === `success`
        ? a == null
          ? {
              ...e,
              activityItems:
                r == null
                  ? [...e.activityItems, { ...o, type: `comment` }]
                  : e.activityItems.map((e) =>
                      e.type === `review_comment` && e.reviewThreadId === r
                        ? { ...e, replies: [...(e.replies ?? []), o] }
                        : e,
                    ),
              commentAttachments:
                r == null
                  ? e.commentAttachments
                  : e.commentAttachments.map((e) =>
                      e.reviewThreadId === r ? be(e, t.account.login, n) : e,
                    ),
            }
          : e.commentAttachments.some(
                (e) =>
                  e.reviewThreadId != null &&
                  !a.previousReviewThreadIds.has(e.reviewThreadId) &&
                  e.authorLogin?.toLowerCase() === t.account.login.toLowerCase() &&
                  c({ ...e, content: a.comment.content }) === c(a.comment) &&
                  i(e).text === n,
              )
            ? e
            : {
                ...e,
                commentAttachments: [
                  ...e.commentAttachments,
                  { ...a.comment, authorLogin: t.account.login },
                ],
              }
        : e,
    );
}
function be(e, t, n) {
  let r = e.authorLogin != null && i(e).authorLogin == null;
  return {
    ...e,
    content: [
      ...e.content.map((t, n) =>
        n === 0 && t.content_type === `text` && r
          ? { ...t, text: `@${e.authorLogin}:\n${t.text}` }
          : t,
      ),
      { content_type: `text`, text: `\n\n@${t}:\n${n}` },
    ],
  };
}
function H(e, t, r) {
  (e.setQueriesData({ queryKey: n(t) }, (e) => {
    if (e?.status !== `success`) return e;
    switch (r.action) {
      case `merge`:
      case `close`:
        return {
          ...e,
          canMerge: !1,
          checks: [],
          checksComplete: !0,
          ciStatus: `none`,
          hasPendingChecks: !1,
          hasOpenPr: !1,
          mergeBlocker: null,
          state: r.action === `merge` ? `merged` : `closed`,
        };
      case `mark-draft`:
        return { ...e, isDraft: !0, canMerge: !1 };
      case `mark-ready`:
        return { ...e, isDraft: !1 };
      case `reopen`:
      case `reopen-ready`:
        return {
          ...e,
          hasOpenPr: !0,
          isDraft: !1,
          state: `open`,
          checksComplete: !1,
          ciStatus: `pending`,
          hasPendingChecks: !0,
          mergeBlocker: `unknown`,
          canMerge: !1,
        };
      case `update-title`:
        return { ...e, title: r.title };
      case `remove-reviewers`:
      case `request-reviewers`:
      case `toggle-auto-merge`:
      case `update-body`:
        return e;
    }
  }),
    r.action === `update-body`
      ? e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-body`) }, (e) =>
          e?.status === `success` ? { ...e, body: r.body } : e,
        )
      : r.action === `toggle-auto-merge`
        ? e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-metadata`) }, (e) =>
            e?.status === `success` ? { ...e, isAutoMergeEnabled: r.enabled } : e,
          )
        : (r.action === `request-reviewers` || r.action === `remove-reviewers`) &&
          e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-reviews`) }, (e) =>
            e?.status === `success`
              ? {
                  ...e,
                  reviewers: {
                    ...e.reviewers,
                    requested:
                      r.action === `request-reviewers`
                        ? Array.from(new Set([...e.reviewers.requested, ...r.reviewers]))
                        : e.reviewers.requested.filter((e) => !r.reviewers.includes(e)),
                    requestedTeams:
                      r.action === `remove-reviewers`
                        ? e.reviewers.requestedTeams.filter(
                            (t) =>
                              !r.teamReviewers.includes(e.reviewers.requestedTeamSlugs?.[t] ?? t),
                          )
                        : e.reviewers.requestedTeams,
                  },
                }
              : e,
          ));
}
var U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  xe = e(() => {
    (r(),
      fe(),
      v(),
      te(),
      oe(),
      se(),
      d(),
      ae(),
      ue(),
      h(),
      l(),
      E(),
      de(),
      L(),
      (U = C(u, (e) => ({
        mutationFn: (
          {
            body: t,
            onSuccess: n,
            replyToReviewThreadId: r,
            source: i = `pull_requests_page`,
            workspaceRequest: a,
          },
          { client: o },
        ) =>
          R(
            o,
            e,
            () =>
              b(
                `gh-pr-comment`,
                r == null ? { ...e, body: t } : { ...e, body: t, replyToReviewThreadId: r },
                { source: i },
              ),
            {
              awaitRefresh: !1,
              onSuccess: () => {
                (V(o, e, t, r), n?.());
              },
              workspaceRequest: a,
            },
          ),
      }))),
      (W = C(u, ({ request: e }) => ({
        mutationFn: (t, { client: n }) => {
          let { source: r = `pull_requests_page`, workspaceRequest: i, ...a } = t;
          return R(n, e, () => b(`gh-pr-comment-update`, { ...a, ...e }, { source: r }), {
            awaitRefresh: !1,
            onSuccess: () => {
              a.action === `update` && B(n, e, a);
            },
            refetchSearch: !1,
            workspaceRequest: i,
          });
        },
        onMutate: async (t, { client: n }) => {
          if (t.action !== `delete`) return;
          let r = z(e, `gh-pr-discussion`);
          await Promise.all(
            r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })),
          );
          let i = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }));
          return (B(n, e, t), i);
        },
        onError: (e, t, n, { client: r }) => {
          for (let { queryKey: e, status: t } of n ?? []) r.setQueryData(e, t);
        },
      }))),
      (G = C(u, (e, { scope: t }) => ({
        mutationFn: (
          {
            action: n,
            onResolved: r,
            reviewThreadId: i,
            source: a = `pull_requests_page`,
            workspaceRequest: o,
          },
          { client: s },
        ) =>
          R(
            s,
            e,
            () =>
              b(
                `gh-pr-review-thread-update`,
                { ...e, action: n, reviewThreadId: i },
                { source: a },
              ),
            {
              onSuccess:
                n === `resolve`
                  ? () => {
                      r?.();
                      let e = re(t.get, `diff_comments`);
                      if (e != null)
                        for (let [n, r] of Object.entries(e))
                          r.some((e) => e.reviewThreadId === i) &&
                            pe(t, n, (e) => e.filter((e) => e.reviewThreadId !== i));
                    }
                  : void 0,
              workspaceRequest: o,
            },
          ),
      }))),
      (K = C(m, ({ request: e, submissionKey: t }) => ({
        mutationFn: ({ comment: n, onSuccess: r }, { client: i }) => {
          let a = i.getQueryData(p(e, `github-cli`, `gh-pr-discussion`)),
            o = new Set(
              a?.status === `success`
                ? a.commentAttachments.flatMap((e) =>
                    e.reviewThreadId == null ? [] : [e.reviewThreadId],
                  )
                : [],
            );
          return R(
            i,
            e,
            () => {
              let r = w(n);
              return b(
                `gh-pr-comment`,
                n.replyToReviewThreadId == null
                  ? { ...e, body: r, expectedHeadRevision: t.revision, inlineComment: ge(n) }
                  : { ...e, body: r, replyToReviewThreadId: n.replyToReviewThreadId },
                { source: `pull_requests_page` },
              );
            },
            {
              awaitRefresh: !1,
              onSuccess:
                n.replyToReviewThreadId == null
                  ? () => {
                      (V(i, e, w(n), null, { comment: n, previousReviewThreadIds: o }), r());
                    }
                  : void 0,
            },
          );
        },
      }))),
      (q = C(u, (e) => ({
        mutationFn: (
          { source: t = `pull_requests_page`, title: n, workspaceRequest: r },
          { client: i },
        ) =>
          R(
            i,
            e,
            () => b(`gh-pr-update`, { ...e, action: `update-title`, title: n }, { source: t }),
            {
              workspaceRequest: r,
            },
          ),
      }))),
      (J = C(u, (e) => ({
        mutationFn: (
          { body: t, source: n = `pull_requests_page`, workspaceRequest: r },
          { client: i },
        ) =>
          R(
            i,
            e,
            () => b(`gh-pr-update`, { ...e, action: `update-body`, body: t }, { source: n }),
            {
              updatedBody: t,
              workspaceRequest: r,
            },
          ),
      }))),
      (Y = C(u, (e) => ({
        networkMode: `always`,
        mutationFn: (t, { client: n }) => {
          let { source: r = `pull_requests_page`, workspaceRequest: i, ...a } = t;
          return R(n, e, () => b(`gh-pr-update`, { ...a, ...e }, { source: r }), {
            resources: $[a.action],
            deferRefreshWhilePending:
              a.action === `remove-reviewers` || a.action === `request-reviewers`,
            onSuccess: () => {
              a.action === `remove-reviewers` || a.action === `request-reviewers` || H(n, e, a);
            },
            workspaceRequest: i,
          });
        },
        onMutate: async (t, { client: n }) => {
          if (t.action !== `remove-reviewers` && t.action !== `request-reviewers`) return;
          let r = z(e, `gh-pr-reviews`);
          await Promise.all(
            r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })),
          );
          let i = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }));
          return (H(n, e, t), i);
        },
        onError: (e, t, n, { client: r }) => {
          if (n != null)
            for (let { queryKey: e, status: i } of n)
              r.setQueryData(e, (e) =>
                e?.status !== `success` || i?.status !== `success`
                  ? i
                  : t.action === `remove-reviewers`
                    ? {
                        ...e,
                        reviewers: {
                          ...e.reviewers,
                          requested: Array.from(
                            new Set([
                              ...i.reviewers.requested.filter(
                                (n) => e.reviewers.requested.includes(n) || t.reviewers.includes(n),
                              ),
                              ...e.reviewers.requested,
                            ]),
                          ),
                          requestedTeams: Array.from(
                            new Set([
                              ...i.reviewers.requestedTeams.filter(
                                (n) =>
                                  e.reviewers.requestedTeams.includes(n) ||
                                  t.teamReviewers.includes(
                                    i.reviewers.requestedTeamSlugs?.[n] ?? n,
                                  ),
                              ),
                              ...e.reviewers.requestedTeams,
                            ]),
                          ),
                        },
                      }
                    : t.action === `request-reviewers`
                      ? {
                          ...e,
                          reviewers: {
                            ...e.reviewers,
                            requested: e.reviewers.requested.filter(
                              (e) => !t.reviewers.includes(e) || i.reviewers.requested.includes(e),
                            ),
                          },
                        }
                      : i,
              );
        },
      }))),
      (X = C(u, (e) => ({
        networkMode: `always`,
        mutationFn: (
          {
            expectedHeadRevision: t,
            mergeMethod: n,
            source: r = `pull_requests_page`,
            workspaceRequest: i,
          },
          { client: a },
        ) =>
          R(
            a,
            e,
            () =>
              b(`gh-pr-merge`, { ...e, expectedHeadRevision: t, mergeMethod: n }, { source: r }),
            {
              onSuccess: () => {
                H(a, e, { action: `merge` });
              },
              workspaceRequest: i,
            },
          ),
      }))),
      (Z = C(u, (e) => ({
        mutationFn: ({ body: t, event: n, expectedHeadRevision: r }, { client: i }) =>
          R(
            i,
            e,
            () =>
              b(
                `gh-pr-submit-review`,
                { ...e, body: t, event: n, expectedHeadRevision: r },
                { source: `pull_requests_page` },
              ),
            { awaitRefresh: !1 },
          ),
      }))),
      (Q = g(
        u,
        (e, { get: t }) =>
          t(q, e).isPending || t(J, e).isPending || t(Y, e).isPending || t(X, e).isPending,
      )),
      ($ = {
        "update-body": [`gh-pr-body`],
        "update-title": [`gh-pr-summary`],
        "request-reviewers": [`gh-pr-reviews`, `gh-pr-summary`],
        "remove-reviewers": [`gh-pr-reviews`, `gh-pr-summary`],
        "toggle-auto-merge": [`gh-pr-metadata`, `gh-pr-summary`],
        "mark-draft": [`gh-pr-summary`],
        "mark-ready": [`gh-pr-summary`],
        close: [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`],
        reopen: [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`],
        "reopen-ready": [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`],
      }));
  });
export {
  he as _,
  Q as a,
  Z as c,
  q as d,
  j as f,
  _e as g,
  me as h,
  W as i,
  J as l,
  L as m,
  K as n,
  X as o,
  D as p,
  U as r,
  G as s,
  xe as t,
  Y as u,
  E as v,
};
//# sourceMappingURL=pull-request-actions-7f7377d4b593.js.map
