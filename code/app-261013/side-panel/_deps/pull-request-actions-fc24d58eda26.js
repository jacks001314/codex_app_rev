import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Pxt as r,
  irt as i,
  nSt as a,
  qxt as o,
  sMt as s,
  srt as c,
  wot as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  $tt as u,
  Cnt as d,
  Cwr as f,
  D2n as p,
  O2n as m,
  Qnr as h,
  Snt as g,
  _an as _,
  bnt as v,
  ent as y,
  err as b,
  fFr as x,
  gwr as S,
  irr as C,
  lnt as w,
  pFr as T,
  rrr as E,
  unt as D,
  wnt as O,
  yan as k,
  ynt as A,
} from "./app-initial-5851df3f6cb1.js";
function j(e, t) {
  return { commentKey: h(t), revision: e };
}
function M(e) {
  return e.content
    .flatMap((e) => (e.content_type === `text` ? [e.text] : []))
    .join(
      `

`,
    )
    .trim();
}
function N({ currentComments: e, nextComments: t }) {
  let n = new Set(e.map(h)),
    r = t.filter((t) => e.some((e) => I({ currentComment: e, nextComment: t }))),
    i = t.filter((e) => M(e).length > 0 && !n.has(h(e)));
  return (0, L.default)([...r, ...i], h);
}
function P(e) {
  return {
    line: e.position.line,
    path: e.position.path,
    side: e.position.side,
    startLine: e.position.start_line ?? void 0,
    startSide: e.position.start_side ?? void 0,
  };
}
function F({ comments: e, filePaths: t, workspaceRoot: n }) {
  let r = new Map();
  for (let i of e) {
    let e = t.find((e) => C(i.position.path, e, n ?? void 0));
    e != null && r.set(e, (r.get(e) ?? 0) + 1);
  }
  return r;
}
function I({ currentComment: e, nextComment: t }) {
  return (
    e.replyToReviewThreadId != null &&
    e.replyToReviewThreadId === t.replyToReviewThreadId &&
    M(e).length === 0 &&
    M(t).length > 0 &&
    e.position.path === t.position.path &&
    e.position.side === t.position.side &&
    e.position.line === t.position.line
  );
}
var L;
function R() {
  return (R = e(() => {
    ((L = t(s(), 1)), E());
  }))();
}
async function z(
  e,
  t,
  n,
  {
    awaitRefresh: r = !0,
    deferRefreshWhilePending: a = !1,
    onSuccess: o,
    refetchSearch: s = !0,
    workspaceRequest: c,
    resources: l = [
      `gh-pr-summary`,
      `gh-pr-mergeability`,
      `gh-pr-metadata`,
      `gh-pr-reviews`,
      `gh-pr-discussion`,
    ],
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
    f = !1;
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
      (f = !0),
      await Promise.all(l.flatMap((e) => B(t, e)).map((t) => e.cancelQueries(t))),
      o?.());
  } finally {
    if (!a || e.isMutating({ mutationKey: d }) === 0) {
      let n =
        e.isFetching({ queryKey: g(t) }) === 0
          ? []
          : [`gh-pr-summary`, `gh-pr-body`, `gh-pr-metadata`, `gh-pr-reviews`, `gh-pr-discussion`]
              .filter((e) => !l.includes(e))
              .map((e) => ({ queryKey: p(t, `github-connector`, e), exact: !0 }))
              .filter((t) => e.isFetching(t) > 0);
      await Promise.all([...n.map((t) => e.cancelQueries(t)), O(e, t)]);
      let a = Promise.allSettled([
        ...n.map((t) => e.invalidateQueries(t)),
        ...l.flatMap((e) => B(t, e)).map((t) => e.invalidateQueries(t)),
        e.invalidateQueries({ queryKey: u(t.account), refetchType: s ? `active` : `none` }),
        ...(c == null ? [] : [e.invalidateQueries({ queryKey: i(`gh-pr-board`) })]),
      ]);
      r && f && (await a);
    }
  }
}
function B(e, t) {
  return [`github-cli`, `github-connector`].map((n) => ({
    exact: !0,
    queryKey: p(e, n === `github-cli` ? `github-cli` : `github-connector`, t),
  }));
}
function V(e, t, n) {
  for (let { queryKey: r } of B(t, `gh-pr-discussion`))
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
function H(e, t, n, r, i) {
  let a = {
    authorLogin: t.account.login,
    body: n,
    createdAt: new Date().toISOString(),
    id: crypto.randomUUID(),
    url: null,
  };
  for (let { queryKey: o } of B(t, `gh-pr-discussion`))
    e.setQueryData(o, (e) =>
      e?.status === `success`
        ? i == null
          ? {
              ...e,
              activityItems:
                r == null
                  ? [...e.activityItems, { ...a, type: `comment` }]
                  : e.activityItems.map((e) =>
                      e.type === `review_comment` && e.reviewThreadId === r
                        ? { ...e, replies: [...(e.replies ?? []), a] }
                        : e,
                    ),
              commentAttachments:
                r == null
                  ? e.commentAttachments
                  : e.commentAttachments.map((e) => (e.reviewThreadId === r ? U(e, t.account.login, n) : e)),
            }
          : e.commentAttachments.some(
                (e) =>
                  e.reviewThreadId != null &&
                  !i.previousReviewThreadIds.has(e.reviewThreadId) &&
                  e.authorLogin?.toLowerCase() === t.account.login.toLowerCase() &&
                  h({ ...e, content: i.comment.content }) === h(i.comment) &&
                  b(e).text === n,
              )
            ? e
            : {
                ...e,
                commentAttachments: [...e.commentAttachments, { ...i.comment, authorLogin: t.account.login }],
              }
        : e,
    );
}
function U(e, t, n) {
  let r = e.authorLogin != null && b(e).authorLogin == null;
  return {
    ...e,
    content: [
      ...e.content.map((t, n) =>
        n === 0 && t.content_type === `text` && r ? { ...t, text: `@${e.authorLogin}:\n${t.text}` } : t,
      ),
      { content_type: `text`, text: `\n\n@${t}:\n${n}` },
    ],
  };
}
function W(e, t, n) {
  (e.setQueriesData({ queryKey: w(t) }, (e) => {
    if (e?.status !== `success`) return e;
    switch (n.action) {
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
          state: n.action === `merge` ? `merged` : `closed`,
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
        return { ...e, title: n.title };
      case `remove-reviewers`:
      case `request-reviewers`:
      case `toggle-auto-merge`:
      case `update-body`:
        return e;
    }
  }),
    n.action === `update-body`
      ? e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-body`) }, (e) =>
          e?.status === `success` ? { ...e, body: n.body } : e,
        )
      : n.action === `toggle-auto-merge`
        ? e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-metadata`) }, (e) =>
            e?.status === `success` ? { ...e, isAutoMergeEnabled: n.enabled } : e,
          )
        : (n.action === `request-reviewers` || n.action === `remove-reviewers`) &&
          e.setQueriesData({ queryKey: p(t, `github-cli`, `gh-pr-reviews`) }, (e) =>
            e?.status === `success`
              ? {
                  ...e,
                  reviewers: {
                    ...e.reviewers,
                    requested:
                      n.action === `request-reviewers`
                        ? Array.from(new Set([...e.reviewers.requested, ...n.reviewers]))
                        : e.reviewers.requested.filter((e) => !n.reviewers.includes(e)),
                    requestedTeams:
                      n.action === `remove-reviewers`
                        ? e.reviewers.requestedTeams.filter(
                            (t) => !n.teamReviewers.includes(e.reviewers.requestedTeamSlugs?.[t] ?? t),
                          )
                        : e.reviewers.requestedTeams,
                  },
                }
              : e,
          ));
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      _(),
      E(),
      d(),
      m(),
      D(),
      A(),
      l(),
      f(),
      T(),
      c(),
      R(),
      y(),
      (G = o(n, (e) => ({
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
          z(
            o,
            e,
            () =>
              v(
                `gh-pr-comment`,
                r == null ? { ...e, body: t } : { ...e, body: t, replyToReviewThreadId: r },
                { source: i },
              ),
            {
              awaitRefresh: !1,
              onSuccess: () => {
                (H(o, e, t, r), n?.());
              },
              workspaceRequest: a,
            },
          ),
      }))),
      (K = o(n, ({ request: e }) => ({
        mutationFn: (t, { client: n }) => {
          let { source: r = `pull_requests_page`, workspaceRequest: i, ...a } = t;
          return z(n, e, () => v(`gh-pr-comment-update`, { ...a, ...e }, { source: r }), {
            awaitRefresh: !1,
            onSuccess: () => {
              a.action === `update` && V(n, e, a);
            },
            refetchSearch: !1,
            workspaceRequest: i,
          });
        },
        onMutate: async (t, { client: n }) => {
          if (t.action !== `delete`) return;
          let r = B(e, `gh-pr-discussion`);
          await Promise.all(r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })));
          let i = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }));
          return (V(n, e, t), i);
        },
        onError: (e, t, n, { client: r }) => {
          for (let { queryKey: e, status: t } of n ?? []) r.setQueryData(e, t);
        },
      }))),
      (q = o(n, (e, { scope: t }) => ({
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
          z(
            s,
            e,
            () => v(`gh-pr-review-thread-update`, { ...e, action: n, reviewThreadId: i }, { source: a }),
            {
              onSuccess:
                n === `resolve`
                  ? () => {
                      r?.();
                      let e = x(t.get, `diff_comments`);
                      if (e != null)
                        for (let [n, r] of Object.entries(e))
                          r.some((e) => e.reviewThreadId === i) &&
                            k(t, n, (e) => e.filter((e) => e.reviewThreadId !== i));
                    }
                  : void 0,
              workspaceRequest: o,
            },
          ),
      }))),
      (J = o(S, ({ request: e, submissionKey: t }) => ({
        mutationFn: ({ comment: n, onSuccess: r }, { client: i }) => {
          let a = i.getQueryData(p(e, `github-cli`, `gh-pr-discussion`)),
            o = new Set(
              a?.status === `success`
                ? a.commentAttachments.flatMap((e) => (e.reviewThreadId == null ? [] : [e.reviewThreadId]))
                : [],
            );
          return z(
            i,
            e,
            () => {
              let r = M(n);
              return v(
                `gh-pr-comment`,
                n.replyToReviewThreadId == null
                  ? { ...e, body: r, expectedHeadRevision: t.revision, inlineComment: P(n) }
                  : { ...e, body: r, replyToReviewThreadId: n.replyToReviewThreadId },
                { source: `pull_requests_page` },
              );
            },
            {
              awaitRefresh: !1,
              onSuccess:
                n.replyToReviewThreadId == null
                  ? () => {
                      (H(i, e, M(n), null, { comment: n, previousReviewThreadIds: o }), r());
                    }
                  : void 0,
            },
          );
        },
      }))),
      (Y = o(n, (e) => ({
        networkMode: `always`,
        mutationFn: (t, { client: n }) => {
          let { source: r = `pull_requests_page`, workspaceRequest: i, ...a } = t;
          return z(n, e, () => v(`gh-pr-update`, { ...a, ...e }, { source: r }), {
            resources: Q[a.action],
            deferRefreshWhilePending: a.action === `remove-reviewers` || a.action === `request-reviewers`,
            onSuccess: () => {
              a.action !== `remove-reviewers` && a.action !== `request-reviewers` && W(n, e, a);
            },
            workspaceRequest: i,
          });
        },
        onMutate: async (t, { client: n }) => {
          if (t.action !== `remove-reviewers` && t.action !== `request-reviewers`) return;
          let r = B(e, `gh-pr-reviews`);
          await Promise.all(r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })));
          let i = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }));
          return (W(n, e, t), i);
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
                                  t.teamReviewers.includes(i.reviewers.requestedTeamSlugs?.[n] ?? n),
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
      (X = o(n, (e) => ({
        networkMode: `always`,
        mutationFn: (
          { expectedHeadRevision: t, mergeMethod: n, source: r = `pull_requests_page`, workspaceRequest: i },
          { client: a },
        ) =>
          z(a, e, () => v(`gh-pr-merge`, { ...e, expectedHeadRevision: t, mergeMethod: n }, { source: r }), {
            onSuccess: () => {
              W(a, e, { action: `merge` });
            },
            workspaceRequest: i,
          }),
      }))),
      (Z = a(n, (e, { get: t }) => t(Y, e).isPending || t(X, e).isPending)),
      (Q = {
        "update-body": [`gh-pr-body`],
        "update-title": [`gh-pr-summary`],
        "request-reviewers": [`gh-pr-reviews`, `gh-pr-summary`, `gh-pr-mergeability`],
        "remove-reviewers": [`gh-pr-reviews`, `gh-pr-summary`, `gh-pr-mergeability`],
        "toggle-auto-merge": [`gh-pr-metadata`, `gh-pr-summary`, `gh-pr-mergeability`],
        "mark-draft": [`gh-pr-summary`, `gh-pr-mergeability`],
        "mark-ready": [`gh-pr-summary`, `gh-pr-mergeability`],
        close: [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`, `gh-pr-mergeability`],
        reopen: [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`, `gh-pr-mergeability`],
        "reopen-ready": [`gh-pr-summary`, `gh-pr-metadata`, `gh-pr-discussion`, `gh-pr-mergeability`],
      }));
  }))();
}
export { Z as a, Y as c, N as d, R as f, K as i, j as l, J as n, X as o, G as r, q as s, $ as t, F as u };
//# sourceMappingURL=pull-request-actions-fc24d58eda26.js.map
