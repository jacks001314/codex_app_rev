import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  SV as r,
  TJ as i,
  XV as a,
  Xx as o,
  Yx as s,
  _Mt as c,
  _b as l,
  aK as u,
  aSt as d,
  gMt as f,
  gb as p,
  jDt as m,
  mV as h,
  vzt as g,
  xMt as _,
  yzt as v,
  zxt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ahr as b,
  Bhr as ee,
  Cit as x,
  EG as te,
  OPr as S,
  Qtt as ne,
  TG as re,
  _z as C,
  cyn as w,
  dnt as T,
  ent as ie,
  fnt as ae,
  gJ as oe,
  gz as se,
  hnt as ce,
  int as le,
  kPr as ue,
  lyn as de,
  mJ as fe,
  mnt as pe,
  oJ as E,
  ont as D,
  uJ as O,
  unt as k,
  wit as A,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./pull-request-status-label-f63bea0ffbe2.js";
var N, P;
function F() {
  return (F = e(() => {
    (v(),
      (N = _()),
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
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== r || t[1] !== i) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = L(r),
        n;
      t[9] === i ? (n = t[10]) : ((n = f(`text-codex-description`, i)), (t[9] = i), (t[10] = n));
      let p = n;
      if (e.length === 0) {
        let e;
        (t[11] === p ? (e = t[12]) : ((e = (0, z.jsx)(re, { className: p })), (t[11] = p), (t[12] = e)),
          (d = e));
        break bb0;
      }
      let m = e.length > 1 ? H : 0;
      ((s = !0), (c = p), (l = `none`), (u = `0 0 18 18`), (a = `rotate(-90 9 9)`));
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
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d));
  } else ((a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let p;
  t[15] !== a || t[16] !== o
    ? ((p = (0, z.jsx)(`g`, { transform: a, children: o })), (t[15] = a), (t[16] = o), (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== s || t[19] !== c || t[20] !== l || t[21] !== u || t[22] !== p
      ? ((m = (0, z.jsx)(`svg`, { "aria-hidden": s, className: c, fill: l, viewBox: u, children: p })),
        (t[18] = s),
        (t[19] = c),
        (t[20] = l),
        (t[21] = u),
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
    ((R = g()), c(), te(), (z = _()), (B = 5.75), (V = 2 * Math.PI * B), (H = 1.5));
  }))();
}
function me({ checks: e, ciStatus: t }) {
  if (e.length === 0)
    switch (t) {
      case `failing`:
        return (0, W.jsx)(p, { className: `icon-sm shrink-0 text-chart-red` });
      case `none`:
        return (0, W.jsx)(x, { className: `icon-sm shrink-0` });
      case `passing`:
        return (0, W.jsx)(s, { className: `icon-sm shrink-0 text-chart-green` });
      case `pending`:
        return (0, W.jsx)(P, { className: `icon-sm shrink-0 text-chart-yellow` });
    }
  return t === `none` ? (0, W.jsx)(x, { className: `icon-sm shrink-0` }) : (0, W.jsx)(I, { checks: e });
}
function he(e) {
  switch (e) {
    case `failing`:
      return (0, W.jsx)(t, {
        id: `localConversation.pullRequest.actions.checksFailing`,
        defaultMessage: `Checks failing`,
        description: `Status row shown when pull request checks are failing`,
      });
    case `none`:
      return (0, W.jsx)(t, {
        id: `localConversation.pullRequest.actions.noCiChecks`,
        defaultMessage: `No CI checks`,
        description: `Status row shown when the pull request currently has no CI checks`,
      });
    case `passing`:
      return (0, W.jsx)(t, {
        id: `localConversation.pullRequest.actions.checksSuccessful`,
        defaultMessage: `Checks successful`,
        description: `Status row shown when pull request checks are passing`,
      });
    case `pending`:
      return (0, W.jsx)(t, {
        id: `localConversation.pullRequest.actions.checksPending`,
        defaultMessage: `Checks pending`,
        description: `Status row shown when pull request checks are still pending`,
      });
  }
}
var W;
function G() {
  return (G = e(() => {
    (m(), o(), F(), A(), l(), U(), (W = _()));
  }))();
}
function ge(e) {
  let n = (0, K.c)(23),
    { title: r, repo: i, number: a, status: o, ciStatus: s, reviewStatus: c } = e,
    l;
  if (n[0] !== s || n[1] !== c || n[2] !== o) {
    if (((l = []), o != null)) {
      let e;
      (n[4] === o
        ? (e = n[5])
        : ((e = (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(fe, { className: `icon-sm shrink-0`, status: o }),
              (0, q.jsx)(M, { status: o }),
            ],
          })),
          (n[4] = o),
          (n[5] = e)),
        l.push(e));
    }
    if (s != null && s !== `none`) {
      let e;
      n[6] === s ? (e = n[7]) : ((e = me({ checks: [], ciStatus: s })), (n[6] = s), (n[7] = e));
      let t;
      n[8] === s ? (t = n[9]) : ((t = he(s)), (n[8] = s), (n[9] = t));
      let r;
      (n[10] !== e || n[11] !== t
        ? ((r = (0, q.jsxs)(q.Fragment, { children: [e, t] })), (n[10] = e), (n[11] = t), (n[12] = r))
        : (r = n[12]),
        l.push(r));
    }
    (c != null && c !== `none` && l.push(J[c]), (n[0] = s), (n[1] = c), (n[2] = o), (n[3] = l));
  } else l = n[3];
  let d;
  n[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, q.jsx)(u, {})), (n[13] = d)) : (d = n[13]);
  let f = i ?? ``,
    p;
  n[14] !== a || n[15] !== f
    ? ((p = (0, q.jsx)(t, {
        id: `tabThumbnail.pullRequest.identity`,
        defaultMessage: `{repo} #{number}`,
        description: `Repository and pull request number in a tab thumbnail; repository may be empty`,
        values: { repo: f, number: a },
      })),
      (n[14] = a),
      (n[15] = f),
      (n[16] = p))
    : (p = n[16]);
  let m;
  n[17] === l ? (m = n[18]) : ((m = l.map(_e)), (n[17] = l), (n[18] = m));
  let h;
  return (
    n[19] !== p || n[20] !== m || n[21] !== r
      ? ((h = (0, q.jsx)(se, { icon: d, title: r, subtitle: p, sections: m })),
        (n[19] = p),
        (n[20] = m),
        (n[21] = r),
        (n[22] = h))
      : (h = n[22]),
    h
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
    ((K = g()),
      m(),
      C(),
      i(),
      G(),
      j(),
      oe(),
      (q = _()),
      (J = {
        approved: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(r, { className: `text-chart-green` }),
            (0, q.jsx)(t, {
              id: `tabThumbnail.pullRequest.reviews.approved`,
              defaultMessage: `Approved`,
              description: `Review status in a pull request thumbnail when the pull request is approved`,
            }),
          ],
        }),
        changes_requested: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(h, { className: `text-chart-red` }),
            (0, q.jsx)(t, {
              id: `tabThumbnail.pullRequest.reviews.changesRequested`,
              defaultMessage: `Changes requested`,
              description: `Review status in a pull request thumbnail when a reviewer has requested changes`,
            }),
          ],
        }),
        review_required: (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(a, { className: `text-chart-yellow` }),
            (0, q.jsx)(t, {
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
  let a = y(Q, i),
    o;
  return (t[3] === a ? (o = t[4]) : ((o = (0, Z.jsx)(ge, { ...a })), (t[3] = a), (t[4] = o)), o);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = g()),
      n(),
      de(),
      le(),
      pe(),
      k(),
      S(),
      Y(),
      b(),
      ie(),
      (Z = _()),
      (Q = d(w, ({ props: e, title: t }, { scope: n }) => {
        let r, i;
        if (`item` in e) {
          i = {
            title: e.item.title,
            repo: e.item.repo ?? e.repo,
            number: e.item.number,
            status: O(e.item.state),
            ciStatus: e.item.ciStatus,
            reviewStatus: null,
          };
          let t = ee(e.item.url);
          if (t == null) return i;
          let a = n.query.getData(ne, {
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
        let a = n.get(ue, `1892621033`) ? n.get(ce, ae(r, `detail`)).source : `github-cli`;
        if (a !== `github-cli` && a !== `github-connector`) return i;
        let o = { request: r, provider: a, source: `pull_requests_page` },
          s = n.query.getData(T, o);
        if (s?.status === `not-found`) return { ...i, status: null, ciStatus: null };
        let c = n.query.getData(D, o),
          l = c?.status === `success` && !c.isPartial ? c.reviewStatus : null;
        return s?.status === `success`
          ? { ...i, title: s.title ?? i.title, status: E(s), ciStatus: s.ciStatus, reviewStatus: l }
          : { ...i, reviewStatus: l };
      })));
  }))();
}
$();
export { ve as RegisteredPullRequestThumbnail };
//# sourceMappingURL=registered-b9ce3b147723.js.map
