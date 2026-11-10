import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DS as t,
  ES as n,
  FBt as r,
  Gb as i,
  KH as a,
  LNt as o,
  MNt as s,
  NNt as c,
  PBt as l,
  SCt as u,
  TY as d,
  Wb as f,
  XOt as p,
  ZSt as m,
  nCt as h,
  nq as g,
  tkt as _,
  uH as v,
  vH as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AY as te,
  BY as ne,
  Bat as re,
  Ert as ie,
  Irt as y,
  JK as b,
  Lrt as x,
  Mrt as S,
  Myr as C,
  Nrt as ae,
  Ort as oe,
  PY as se,
  Prt as ce,
  RY as le,
  Srt as ue,
  Syr as de,
  YK as fe,
  _B as pe,
  brt as w,
  lBr as T,
  mSn as E,
  pSn as D,
  uBr as O,
  vB as k,
  zat as A,
} from "./app-initial-ad16eaadf81f.js";
import { n as j, t as M } from "./pull-request-status-label-c35fa50a1d93.js";
var N, P;
function F() {
  return (F = e(() => {
    (r(),
      (N = o()),
      (P = (e) =>
        (0, N.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: (0, N.jsx)(`path`, {
            d: `M10.012 1.669a8.343 8.343 0 0 1 8.343 8.343 8.343 8.343 0 0 1-8.343 8.343 8.343 8.343 0 0 1-8.343-8.343 8.343 8.343 0 0 1 8.343-8.343Zm0 1.668a6.675 6.675 0 1 0 0 13.35 6.675 6.675 0 0 0 0-13.35Zm0 1.669a5.007 5.007 0 1 1 0 10.012V5.006Z`,
          }),
        })));
  }))();
}
function I(e) {
  let t = (0, R.c)(24),
    { className: n, checks: r } = e,
    i = n === void 0 ? `icon-sm shrink-0` : n,
    a,
    o,
    c,
    l,
    u,
    d,
    f;
  if (t[0] !== r || t[1] !== i) {
    f = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = L(r),
        n;
      t[9] === i ? (n = t[10]) : ((n = s(`text-codex-description`, i)), (t[9] = i), (t[10] = n));
      let p = n;
      if (e.length === 0) {
        let e;
        (t[11] === p ? (e = t[12]) : ((e = (0, z.jsx)(b, { className: p })), (t[11] = p), (t[12] = e)),
          (f = e));
        break bb0;
      }
      let m = e.length > 1 ? H : 0;
      ((c = !0), (l = p), (u = `none`), (d = `0 0 18 18`), (a = `rotate(-90 9 9)`));
      let h;
      (t[13] === m
        ? (h = t[14])
        : ((h = (e) => {
            let t = V * e.ratio,
              n = `${Math.max(t - m, 0.001)} ${V}`,
              r = -(e.offset + m / 2);
            return (0, z.jsx)(
              `circle`,
              {
                cx: `9`,
                cy: `9`,
                r: B,
                stroke: e.color,
                strokeDasharray: n,
                strokeDashoffset: r,
                strokeLinecap: `butt`,
                strokeWidth: `1.7`,
              },
              e.key,
            );
          }),
          (t[13] = m),
          (t[14] = h)),
        (o = e.map(h)));
    }
    ((t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f));
  } else ((a = t[2]), (o = t[3]), (c = t[4]), (l = t[5]), (u = t[6]), (d = t[7]), (f = t[8]));
  if (f !== Symbol.for(`react.early_return_sentinel`)) return f;
  let p;
  t[15] !== a || t[16] !== o
    ? ((p = (0, z.jsx)(`g`, { transform: a, children: o })), (t[15] = a), (t[16] = o), (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== c || t[19] !== l || t[20] !== u || t[21] !== d || t[22] !== p
      ? ((m = (0, z.jsx)(`svg`, { "aria-hidden": c, className: l, fill: u, viewBox: d, children: p })),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d),
        (t[22] = p),
        (t[23] = m))
      : (m = t[23]),
    m
  );
}
function L(e) {
  let t = e.length;
  if (t === 0) return [];
  let n = {
      failing: e.filter((e) => e.status === `failing`).length,
      neutral: e.filter((e) => e.status === `neutral`).length,
      passing: e.filter((e) => e.status === `passing`).length,
      pending: e.filter((e) => e.status === `pending`).length,
      skipped: e.filter((e) => e.status === `skipped`).length,
      unknown: e.filter((e) => e.status === `unknown`).length,
    },
    r = 0;
  return [
    { color: `var(--color-chart-green)`, count: n.passing, key: `passing` },
    { color: `var(--color-chart-red)`, count: n.failing, key: `failing` },
    { color: `var(--color-chart-yellow)`, count: n.pending, key: `pending` },
    { color: `var(--color-codex-description)`, count: n.neutral + n.skipped + n.unknown, key: `skipped` },
  ]
    .filter((e) => e.count > 0)
    .map((e) => {
      let n = e.count / t,
        i = r;
      return ((r += V * n), { color: e.color, key: e.key, offset: i, ratio: n });
    });
}
var R, z, B, V, H;
function U() {
  return (U = e(() => {
    ((R = l()), c(), fe(), (z = o()), (B = 5.75), (V = 2 * Math.PI * B), (H = 1.5));
  }))();
}
function me({ checks: e, ciStatus: t }) {
  if (e.length === 0)
    switch (t) {
      case `failing`:
        return (0, W.jsx)(f, { className: `icon-sm shrink-0 text-chart-red` });
      case `none`:
        return (0, W.jsx)(A, { className: `icon-sm shrink-0` });
      case `passing`:
        return (0, W.jsx)(n, { className: `icon-sm shrink-0 text-chart-green` });
      case `pending`:
        return (0, W.jsx)(P, { className: `icon-sm shrink-0 text-chart-yellow` });
    }
  return t === `none` ? (0, W.jsx)(A, { className: `icon-sm shrink-0` }) : (0, W.jsx)(I, { checks: e });
}
function he(e) {
  switch (e) {
    case `failing`:
      return (0, W.jsx)(_, {
        id: `localConversation.pullRequest.actions.checksFailing`,
        defaultMessage: `Checks failing`,
        description: `Status row shown when pull request checks are failing`,
      });
    case `none`:
      return (0, W.jsx)(_, {
        id: `localConversation.pullRequest.actions.noCiChecks`,
        defaultMessage: `No CI checks`,
        description: `Status row shown when the pull request currently has no CI checks`,
      });
    case `passing`:
      return (0, W.jsx)(_, {
        id: `localConversation.pullRequest.actions.checksSuccessful`,
        defaultMessage: `Checks successful`,
        description: `Status row shown when pull request checks are passing`,
      });
    case `pending`:
      return (0, W.jsx)(_, {
        id: `localConversation.pullRequest.actions.checksPending`,
        defaultMessage: `Checks pending`,
        description: `Status row shown when pull request checks are still pending`,
      });
  }
}
var W;
function G() {
  return (G = e(() => {
    (p(), t(), F(), re(), i(), U(), (W = o()));
  }))();
}
function ge(e) {
  let t = (0, K.c)(23),
    { title: n, repo: r, number: i, status: a, ciStatus: o, reviewStatus: s } = e,
    c;
  if (t[0] !== o || t[1] !== s || t[2] !== a) {
    if (((c = []), a != null)) {
      let e;
      (t[4] === a
        ? (e = t[5])
        : ((e = (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(le, { className: `icon-sm shrink-0`, status: a }),
              (0, q.jsx)(M, { status: a }),
            ],
          })),
          (t[4] = a),
          (t[5] = e)),
        c.push(e));
    }
    if (o != null && o !== `none`) {
      let e;
      t[6] === o ? (e = t[7]) : ((e = me({ checks: [], ciStatus: o })), (t[6] = o), (t[7] = e));
      let n;
      t[8] === o ? (n = t[9]) : ((n = he(o)), (t[8] = o), (t[9] = n));
      let r;
      (t[10] !== e || t[11] !== n
        ? ((r = (0, q.jsxs)(q.Fragment, { children: [e, n] })), (t[10] = e), (t[11] = n), (t[12] = r))
        : (r = t[12]),
        c.push(r));
    }
    (s != null && s !== `none` && c.push(J[s]), (t[0] = o), (t[1] = s), (t[2] = a), (t[3] = c));
  } else c = t[3];
  let l;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, q.jsx)(g, {})), (t[13] = l)) : (l = t[13]);
  let u = r ?? ``,
    d;
  t[14] !== i || t[15] !== u
    ? ((d = (0, q.jsx)(_, {
        id: `tabThumbnail.pullRequest.identity`,
        defaultMessage: `{repo} #{number}`,
        description: `Repository and pull request number in a tab thumbnail; repository may be empty`,
        values: { repo: u, number: i },
      })),
      (t[14] = i),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let f;
  t[17] === c ? (f = t[18]) : ((f = c.map(_e)), (t[17] = c), (t[18] = f));
  let p;
  return (
    t[19] !== d || t[20] !== f || t[21] !== n
      ? ((p = (0, q.jsx)(pe, { icon: l, title: n, subtitle: d, sections: f })),
        (t[19] = d),
        (t[20] = f),
        (t[21] = n),
        (t[22] = p))
      : (p = t[22]),
    p
  );
}
function _e(e) {
  return {
    kind: `block`,
    content: (0, q.jsx)(`div`, { className: `flex items-center gap-2 text-xs text-secondary`, children: e }),
  };
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = l()),
      p(),
      k(),
      d(),
      G(),
      j(),
      ne(),
      (q = o()),
      (J = {
        approved: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(ee, { className: `text-chart-green` }),
            (0, q.jsx)(_, {
              id: `tabThumbnail.pullRequest.reviews.approved`,
              defaultMessage: `Approved`,
              description: `Review status in a pull request thumbnail when the pull request is approved`,
            }),
          ],
        }),
        changes_requested: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(v, { className: `text-chart-red` }),
            (0, q.jsx)(_, {
              id: `tabThumbnail.pullRequest.reviews.changesRequested`,
              defaultMessage: `Changes requested`,
              description: `Review status in a pull request thumbnail when a reviewer has requested changes`,
            }),
          ],
        }),
        review_required: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(a, { className: `text-chart-yellow` }),
            (0, q.jsx)(_, {
              id: `tabThumbnail.pullRequest.reviews.required`,
              defaultMessage: `Review required`,
              description: `Review status in a pull request thumbnail when a review is still required`,
            }),
          ],
        }),
      }));
  }))();
}
function ve(e) {
  let t = (0, X.c)(5),
    { props: n, title: r } = e,
    i;
  t[0] !== n || t[1] !== r ? ((i = { props: n, title: r }), (t[0] = n), (t[1] = r), (t[2] = i)) : (i = t[2]);
  let a = h(Q, i),
    o;
  return (t[3] === a ? (o = t[4]) : ((o = (0, Z.jsx)(ge, { ...a })), (t[3] = a), (t[4] = o)), o);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = l()),
      m(),
      E(),
      ie(),
      y(),
      S(),
      T(),
      Y(),
      de(),
      ue(),
      (Z = o()),
      (Q = u(D, ({ props: e, title: t }, { scope: n }) => {
        let r, i;
        if (`item` in e) {
          i = {
            title: e.item.title,
            repo: e.item.repo ?? e.repo,
            number: e.item.number,
            status: se(e.item.state),
            ciStatus: e.item.ciStatus,
            reviewStatus: null,
          };
          let t = C(e.item.url);
          if (t == null) return i;
          let a = n.query.getData(w, {
            hostId: e.hostId ?? e.target.hostId,
            hostname: t.hostname,
            source: `pull_request_board`,
          });
          if (a?.status !== `success`) return i;
          r = { account: a.account, pullRequest: t };
        } else {
          let { pullRequest: n } = e.request;
          if (
            ((i = {
              title: t,
              repo: `${n.owner}/${n.repository}`,
              number: n.number,
              status: null,
              ciStatus: null,
              reviewStatus: null,
            }),
            e.request.provider === `gitlab`)
          )
            return i;
          r = { account: e.request.account, pullRequest: e.request.pullRequest };
        }
        let a = n.get(O, `1892621033`) ? n.get(x, ce(r, `detail`)).source : `github-cli`;
        if (a !== `github-cli` && a !== `github-connector`) return i;
        let o = { request: r, provider: a, source: `pull_requests_page` },
          s = n.query.getData(ae, o);
        if (s?.status === `not-found`) return { ...i, status: null, ciStatus: null };
        let c = n.query.getData(oe, o),
          l = c?.status === `success` && !c.isPartial ? c.reviewStatus : null;
        return s?.status === `success`
          ? { ...i, title: s.title ?? i.title, status: te(s), ciStatus: s.ciStatus, reviewStatus: l }
          : { ...i, reviewStatus: l };
      })));
  }))();
}
$();
export { ve as RegisteredPullRequestThumbnail };
//# sourceMappingURL=registered-6bf25d4a069d.js.map
