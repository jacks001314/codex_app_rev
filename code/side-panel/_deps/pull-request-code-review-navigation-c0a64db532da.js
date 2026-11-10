import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $D as n,
  Bg as r,
  H4t as i,
  O3t as a,
  QD as o,
  RE as s,
  S4t as c,
  Vg as ee,
  Vnn as l,
  Xg as te,
  Yg as ne,
  Zg as re,
  eMt as ie,
  gRt as u,
  i6t as d,
  m6t as ae,
  q4t as f,
  rMt as oe,
  s6t as p,
  tMt as m,
  w4t as h,
  xRt as g,
  zE as se,
  zg as ce,
} from "./app-initial-f094ef01c64d.js";
import { IS as le, LS as ue, RS as _ } from "./app-primary-4c40d73a1074.js";
import { _ as de, h as v, n as y, t as b, v as fe } from "./pull-request-actions-7f7377d4b593.js";
import { a as pe, n as me } from "./pull-request-revision-queries-822a229a11df.js";
function x(e, t, n) {
  let r = C(e, t, n);
  r != null && e.set(D, t, r);
}
function S(e, t, n) {
  e.set(O, t, n);
}
function he(e, t, n) {
  e.set(k, t, n);
}
function ge(e, t, n) {
  e.set(A, t, n);
}
function _e(e, t, n, r) {
  let i = C(e, t, n);
  if (i == null) return;
  let a = de({ currentComments: e.get(j, { path: i, request: t }), nextComments: r });
  (e.set(j, { path: i, request: t }, r), ye(e, t, i, r));
  let o = e.get(P, t);
  if (o.data?.status === `success`)
    for (let n of a) {
      let r = v(o.data.headRevision, n),
        a = e.get(M, { path: i, request: t });
      a.some((e) => (0, E.default)(e, r)) ||
        (e.set(M, { path: i, request: t }, [...a, r]), w(e, t, i, r, n));
    }
}
function ve(e, t, n, r) {
  let i = C(e, t, n);
  if (i == null) return;
  let a = e
    .get(j, { path: i, request: t })
    .find((e) => v(r.revision, e).commentKey === r.commentKey);
  if (a == null) {
    T(e, t, i, r);
    return;
  }
  e.get(y, { request: t, submissionKey: r }).isPending || w(e, t, i, r, a);
}
function C(e, t, n) {
  let r = f(n);
  return e.get(I, t).find((e) => e.path === r)?.path ?? null;
}
function ye(e, t, n, r) {
  let i = new Set(r.map((e) => v(``, e).commentKey));
  e.set(
    M,
    { path: n, request: t },
    e
      .get(M, { path: n, request: t })
      .filter((n) => i.has(n.commentKey) || e.get(y, { request: t, submissionKey: n }).isPending),
  );
}
function w(e, t, n, r, i) {
  let a = () => {
    (e.set(
      j,
      { path: n, request: t },
      e.get(j, { path: n, request: t }).filter((e) => !(0, E.default)(v(r.revision, e), r)),
    ),
      T(e, t, n, r));
  };
  e.get(y, { request: t, submissionKey: r }).mutate(
    { comment: i, onSuccess: a },
    i.replyToReviewThreadId == null ? void 0 : { onSuccess: a },
  );
}
function T(e, t, n, r) {
  e.set(
    M,
    { path: n, request: t },
    e.get(M, { path: n, request: t }).filter((e) => !(0, E.default)(e, r)),
  );
}
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    ((E = t(l(), 1)),
      a(),
      o(),
      te(),
      se(),
      g(),
      i(),
      b(),
      ce(),
      fe(),
      me(),
      (D = p(u, (e) => null)),
      (O = p(u, (e) => ``)),
      (k = p(u, (e) => !1)),
      (A = p(u, (e) => 0)),
      (j = p(u, (e) => [], { isEqual: E.default })),
      (M = p(u, (e) => [], { isEqual: E.default })),
      (N = d(u, (e, { get: t }) => t(r, { request: e, source: `pull_requests_page` }))),
      (P = d(u, (e, { get: t }) => {
        if (`comparison` in e) return t(pe, e);
        let n = t(N, e).data?.headRevision ?? null,
          r = t(ee, { headRevision: n, request: e }),
          i = t(re, ne(e, `diff`));
        return n != null && i.source === `loading` ? { ...r, isLoading: !0 } : r;
      })),
      (F = d(u, (e, { get: t }) => {
        let r = t(P, e);
        return r.data?.status === `success` ? n(r.data.unifiedDiff) : void 0;
      })),
      (I = d(
        u,
        (e, { get: t }) =>
          (t(F, e) ?? []).map((e) => {
            let t = f(e.metadata.name);
            return { changeKind: s(e.metadata.type), displayPath: t, path: t };
          }),
        { isEqual: E.default },
      )),
      (L = d(
        u,
        (e, { get: t }) => {
          let n = t(O, e).trim().toLowerCase(),
            r = t(I, e);
          return n.length === 0 ? r : r.filter((e) => e.displayPath.toLowerCase().includes(n));
        },
        { isEqual: E.default },
      )),
      (R = d(u, (e, { get: t }) => {
        let n = t(D, e),
          r = t(L, e);
        return r.find((e) => e.path === n)?.path ?? r[0]?.path ?? null;
      })),
      (z = d(u, (e, { get: t }) => {
        let n = t(N, e).data;
        if (n == null) return;
        let r = new Map();
        for (let e of n.activityItems)
          e.type === `review_comment` && e.reviewThreadId != null && r.set(e.reviewThreadId, e);
        return r;
      })),
      (B = d(u, ({ request: e, threadId: t }, { get: n }) =>
        t == null ? void 0 : n(z, e)?.get(t),
      )),
      (V = d(
        u,
        ({ path: e, request: t }, { get: n }) => {
          if (`comparison` in t) return;
          let r = f(e),
            i = n(N, t).data;
          if (i == null) return;
          let a = n(z, t),
            o = i.commentAttachments
              .filter((e) => f(e.position.path) === r)
              .map((e) => {
                let t = e.reviewThreadId == null ? void 0 : a?.get(e.reviewThreadId);
                return t == null ? e : { ...e, createdAt: t.createdAt, replies: t.replies };
              }),
            s = new Set(o.flatMap((e) => (e.reviewThreadId == null ? [] : [e.reviewThreadId]))),
            c = i.activityItems.flatMap((e) => {
              if (
                e.type !== `review_comment` ||
                e.reviewThreadId == null ||
                s.has(e.reviewThreadId) ||
                e.path == null ||
                f(e.path) !== r ||
                e.line == null ||
                e.side == null
              )
                return [];
              let t = [e, ...(e.replies ?? [])];
              return [
                {
                  authorAvatarUrl: e.authorAvatarUrl,
                  authorLogin: e.authorLogin,
                  createdAt: e.createdAt,
                  content: [
                    {
                      content_type: `text`,
                      text: t.map((e) =>
                        e.authorLogin == null ? e.body : `@${e.authorLogin}:\n${e.body}`,
                      ).join(`

`),
                    },
                  ],
                  isResolved: e.isResolved,
                  position: {
                    line: e.line,
                    path: e.path,
                    side: e.side,
                    start_line: e.startLine ?? void 0,
                    start_side: e.startSide ?? void 0,
                  },
                  replies: e.replies,
                  reviewThreadId: e.reviewThreadId,
                  type: `comment`,
                  url: e.url,
                  viewerCanResolve: e.viewerCanResolve,
                  viewerCanUnresolve: e.viewerCanUnresolve,
                },
              ];
            });
          return [...o, ...c];
        },
        { isEqual: E.default },
      )),
      (H = d(
        u,
        (e, { get: t }) =>
          new Map(t(I, e).map((n) => [n.path, (t(V, { path: n.path, request: e }) ?? []).length])),
        { isEqual: E.default },
      )),
      (U = d(
        u,
        ({ path: e, request: t }, { get: n }) =>
          new Set(
            n(M, { path: f(e), request: t }).flatMap((e) =>
              n(y, { request: t, submissionKey: e }).isPending ? [e.commentKey] : [],
            ),
          ),
        { isEqual: E.default },
      )),
      (W = d(
        u,
        ({ path: e, request: t }, { get: n }) =>
          n(M, { path: f(e), request: t }).flatMap((e) => {
            let r = n(y, { request: t, submissionKey: e }).error;
            return r == null ? [] : [{ error: r, submissionKey: e }];
          }),
        { isEqual: E.default },
      )));
  });
function be(e, t, n) {
  let r = e.get($),
    i = r == null ? null : Y(e, r);
  i != null && _(i, null);
  let a = { position: n, request: t };
  (e.set($, a),
    S(e, t, ``),
    x(e, t, n.path),
    requestAnimationFrame(() => {
      K(e, a, Z);
    }));
}
function K(e, t, n) {
  if (e.get($) === t) {
    if (!q(e, t)) {
      J(e, t, n);
      return;
    }
    requestAnimationFrame(() => {
      e.get($) === t && (q(e, t) || J(e, t, n));
    });
  }
}
function q(e, t) {
  let n = Y(e, t);
  if (n == null) return !1;
  n.querySelector(c.reviewFileToggleCollapsed)?.click();
  let { position: r } = t,
    i = le(n, r.line, r.side === `left` ? `deletions` : `additions`),
    a = n.closest(`[data-pull-request-code-scroll]`);
  return i == null || a == null
    ? (n.scrollIntoView({ behavior: `auto`, block: `start` }), !1)
    : (a.scrollTo({ behavior: `auto`, top: Math.max(0, i.top - (a.clientHeight - i.height) / 2) }),
      _(n, { start: r.line, end: r.line, side: r.side === `left` ? `deletions` : `additions` }),
      !0);
}
function J(e, t, n) {
  if (n <= 1) {
    e.set($, null);
    return;
  }
  window.setTimeout(() => {
    K(e, t, n - 1);
  }, Q);
}
function Y(e, { position: t, request: n }) {
  let r = f(t.path),
    i = e
      .get(F, n)
      ?.find((e) => f(e.metadata.name) === r || (t.side === `left` && f(e.oldPath) === r)),
    a = i == null ? r : f(i.metadata.name);
  return (x(e, n, a), document.getElementById(X(e, n, a)));
}
function X(e, t, n) {
  return `pull-request-file-${encodeURIComponent(JSON.stringify([e.value.pathname, ie(t.account), m(t.pullRequest), ...(`comparison` in t ? [t.comparison.baseRevision, t.comparison.headRevision] : []), n]))}`;
}
var Z,
  Q,
  $,
  xe = e(() => {
    (a(), h(), ue(), g(), i(), oe(), G(), (Z = 200), (Q = 50), ($ = ae(u, null)));
  });
export {
  _e as C,
  he as S,
  L as _,
  H as a,
  x as b,
  O as c,
  V as d,
  R as f,
  U as g,
  W as h,
  G as i,
  k as l,
  A as m,
  xe as n,
  P as o,
  B as p,
  be as r,
  j as s,
  X as t,
  F as u,
  ve as v,
  S as x,
  ge as y,
};
//# sourceMappingURL=pull-request-code-review-navigation-c0a64db532da.js.map
