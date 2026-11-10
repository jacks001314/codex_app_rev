import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as t,
  Gg as n,
  Ig as r,
  Jg as i,
  N3t as a,
  O3t as o,
  Spn as s,
  Wg as c,
  Xdt as l,
  Xg as u,
  Yg as d,
  Zg as f,
  aL as p,
  adt as m,
  ag as h,
  cL as g,
  dg as _,
  hYt as v,
  hg as y,
  hmn as b,
  kmn as x,
  lg as S,
  mYt as C,
  oL as w,
  oMt as T,
  pg as E,
  qg as D,
  rMt as O,
  rlt as k,
  s6t as A,
  sL as j,
  sg as M,
  slt as N,
  vlt as P,
  zg as F,
} from "./app-initial-f094ef01c64d.js";
import { n as I, t as L } from "./pull-request-status-label-5a6c4f7bce5d.js";
import { n as R, r as z, t as B } from "./pull-request-checks-summary-f4748816df4c.js";
function V(e) {
  let n = (0, U.c)(23),
    { title: r, repo: i, number: a, status: o, ciStatus: s, reviewStatus: c } = e,
    l;
  if (n[0] !== s || n[1] !== c || n[2] !== o) {
    if (((l = []), o != null)) {
      let e;
      (n[4] === o
        ? (e = n[5])
        : ((e = (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(E, { className: `icon-sm shrink-0`, status: o }),
              (0, W.jsx)(L, { status: o }),
            ],
          })),
          (n[4] = o),
          (n[5] = e)),
        l.push(e));
    }
    if (s != null && s !== `none`) {
      let e;
      n[6] === s ? (e = n[7]) : ((e = B({ checks: [], ciStatus: s })), (n[6] = s), (n[7] = e));
      let t;
      n[8] === s ? (t = n[9]) : ((t = R(s)), (n[8] = s), (n[9] = t));
      let r;
      (n[10] !== e || n[11] !== t
        ? ((r = (0, W.jsxs)(W.Fragment, { children: [e, t] })),
          (n[10] = e),
          (n[11] = t),
          (n[12] = r))
        : (r = n[12]),
        l.push(r));
    }
    (c != null && c !== `none` && l.push(G[c]), (n[0] = s), (n[1] = c), (n[2] = o), (n[3] = l));
  } else l = n[3];
  let u;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, W.jsx)(m, {})), (n[13] = u))
    : (u = n[13]);
  let d = i ?? ``,
    f;
  n[14] !== a || n[15] !== d
    ? ((f = (0, W.jsx)(t, {
        id: `tabThumbnail.pullRequest.identity`,
        defaultMessage: `{repo} #{number}`,
        description: `Repository and pull request number in a tab thumbnail; repository may be empty`,
        values: { repo: d, number: a },
      })),
      (n[14] = a),
      (n[15] = d),
      (n[16] = f))
    : (f = n[16]);
  let p;
  n[17] === l ? (p = n[18]) : ((p = l.map(H)), (n[17] = l), (n[18] = p));
  let h;
  return (
    n[19] !== f || n[20] !== p || n[21] !== r
      ? ((h = (0, W.jsx)(j, { icon: u, title: r, subtitle: f, sections: p })),
        (n[19] = f),
        (n[20] = p),
        (n[21] = r),
        (n[22] = h))
      : (h = n[22]),
    h
  );
}
function H(e) {
  return {
    kind: `block`,
    content: (0, W.jsx)(`div`, {
      className: `flex items-center gap-2 text-xs text-secondary`,
      children: e,
    }),
  };
}
var U,
  W,
  G,
  K = e(() => {
    ((U = x()),
      s(),
      g(),
      l(),
      z(),
      I(),
      y(),
      (W = b()),
      (G = {
        approved: (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(N, { className: `text-chart-green` }),
            (0, W.jsx)(t, {
              id: `tabThumbnail.pullRequest.reviews.approved`,
              defaultMessage: `Approved`,
              description: `Review status in a pull request thumbnail when the pull request is approved`,
            }),
          ],
        }),
        changes_requested: (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(k, { className: `text-chart-red` }),
            (0, W.jsx)(t, {
              id: `tabThumbnail.pullRequest.reviews.changesRequested`,
              defaultMessage: `Changes requested`,
              description: `Review status in a pull request thumbnail when a reviewer has requested changes`,
            }),
          ],
        }),
        review_required: (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(P, { className: `text-chart-yellow` }),
            (0, W.jsx)(t, {
              id: `tabThumbnail.pullRequest.reviews.required`,
              defaultMessage: `Review required`,
              description: `Review status in a pull request thumbnail when a review is still required`,
            }),
          ],
        }),
      }));
  });
function q(e) {
  let t = (0, J.c)(5),
    { props: n, title: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = { props: n, title: r }), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let o = a(X, i),
    s;
  return (t[3] === o ? (s = t[4]) : ((s = (0, Y.jsx)(V, { ...o })), (t[3] = o), (t[4] = s)), s);
}
var J, Y, X;
e(() => {
  ((J = x()),
    o(),
    w(),
    c(),
    u(),
    D(),
    C(),
    K(),
    O(),
    F(),
    _(),
    M(),
    (Y = b()),
    (X = A(p, ({ props: e, title: t }, { scope: a }) => {
      let o, s;
      if (`item` in e) {
        s = {
          title: e.item.title,
          repo: e.item.repo ?? e.repo,
          number: e.item.number,
          status: S(e.item.state),
          ciStatus: e.item.ciStatus,
          reviewStatus: null,
        };
        let t = T(e.item.url);
        if (t == null) return s;
        let n = a.query.getData(r, {
          hostId: e.hostId ?? e.target.hostId,
          hostname: t.hostname,
          source: `pull_request_board`,
        });
        if (n?.status !== `success`) return s;
        o = { account: n.account, pullRequest: t };
      } else {
        let { pullRequest: n } = e.request;
        if (
          ((s = {
            title: t,
            repo: `${n.owner}/${n.repository}`,
            number: n.number,
            status: null,
            ciStatus: null,
            reviewStatus: null,
          }),
          e.request.provider === `gitlab`)
        )
          return s;
        o = { account: e.request.account, pullRequest: e.request.pullRequest };
      }
      let c = a.get(v, `1892621033`) ? a.get(f, d(o, `detail`)).source : `github-cli`;
      if (c !== `github-cli` && c !== `github-connector`) return s;
      let l = { request: o, provider: c, source: `pull_requests_page` },
        u = a.query.getData(i, l);
      if (u?.status === `not-found`) return { ...s, status: null, ciStatus: null };
      let p = a.query.getData(n, l),
        m = p?.status === `success` && !p.isPartial ? p.reviewStatus : null;
      return u?.status === `success`
        ? { ...s, title: u.title ?? s.title, status: h(u), ciStatus: u.ciStatus, reviewStatus: m }
        : { ...s, reviewStatus: m };
    })));
})();
export { q as RegisteredPullRequestThumbnail };
//# sourceMappingURL=registered-3136d91cec07.js.map
