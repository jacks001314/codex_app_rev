import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $st as i,
  Cit as a,
  DB as o,
  FBt as s,
  FE as c,
  J1 as l,
  Jj as u,
  LNt as d,
  MNt as f,
  NNt as p,
  OB as m,
  OC as h,
  Oz as g,
  PBt as _,
  Qst as v,
  TE as y,
  XOt as b,
  XS as x,
  Y3 as S,
  Yj as C,
  Z3 as w,
  ZSt as T,
  bB as E,
  bit as D,
  dO as O,
  e6 as ee,
  gB as k,
  hB as A,
  hit as j,
  iCt as M,
  iO as N,
  jE as P,
  jz as F,
  lO as I,
  mCt as L,
  nB as R,
  nCt as z,
  oO as B,
  oit as V,
  okt as te,
  q1 as H,
  rB as U,
  sct as W,
  tkt as G,
  vB as K,
  vD as ne,
  xut as q,
  yCt as J,
  yD as Y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AAr as X,
  BVr as re,
  Fnt as Z,
  Hrt as Q,
  I8n as ie,
  Iyt as ae,
  L8n as oe,
  LOr as se,
  Lyt as ce,
  MOr as le,
  Mmn as ue,
  Mnt as de,
  Nnt as fe,
  Qgt as pe,
  S4n as me,
  SRn as he,
  Syr as ge,
  V_t as _e,
  Vrt as ve,
  Vyt as ye,
  XEn as be,
  YEn as xe,
  Zgt as Se,
  __t as Ce,
  bRn as we,
  byr as Te,
  ebt as Ee,
  fxr as De,
  gbt as Oe,
  hbt as ke,
  ijr as Ae,
  jAr as je,
  j_t as Me,
  jyt as Ne,
  kAr as Pe,
  lln as Fe,
  oln as Ie,
  rHr as Le,
  rbt as Re,
  sln as ze,
  w4n as Be,
  wyr as Ve,
  x4n as He,
  xyr as Ue,
  zOr as We,
} from "./app-initial-ad16eaadf81f.js";
import { a as Ge, i as Ke } from "./codex-diff-css-38be692bb624.js";
import {
  C as qe,
  S as Je,
  T as Ye,
  _ as Xe,
  b as Ze,
  d as Qe,
  f as $e,
  g as et,
  h as tt,
  l as nt,
  m as rt,
  n as it,
  o as at,
  p as ot,
  r as st,
  s as ct,
  u as lt,
  v as ut,
  w as dt,
  x as ft,
  y as pt,
} from "./review-file-tree-pane-9aabbb12d575.js";
import { i as mt, r as ht, s as gt } from "./use-diff-annotations-a6f2dca78adc.js";
import { n as _t, t as vt } from "./virtualized-file-diff-line-position-626fc7d91724.js";
import { i as yt, n as bt, t as xt } from "./pull-request-revision-queries-2036ad28d46d.js";
import {
  C as St,
  S as Ct,
  _ as wt,
  a as Tt,
  b as Et,
  c as Dt,
  d as Ot,
  f as kt,
  g as At,
  h as jt,
  i as Mt,
  l as Nt,
  m as Pt,
  n as Ft,
  o as It,
  p as Lt,
  s as Rt,
  t as zt,
  u as Bt,
  v as Vt,
  x as Ht,
  y as Ut,
} from "./pull-request-code-review-navigation-8765a5adf3d2.js";
import { a as Wt, i as Gt } from "./pull-request-detail-model-97a5167bd1c2.js";
import { n as Kt, t as qt } from "./arrow-curved-right-83f604cf338b.js";
import { r as Jt, t as Yt } from "./scroll-to-match-5e0f8e5e5abc.js";
import { i as Xt, n as Zt, r as Qt, t as $t } from "./code-diff-f5bc2cfbc049.js";
import { n as en, t as tn } from "./split-view-1ba4134e1ab5.js";
import { a as nn, c as rn, o as an } from "./review-source-dropdown-24fffa506f16.js";
function on(e) {
  let t = (0, cn.c)(45),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ ref: a, bottomInset: n, children: r, disableScrollAnchoring: s, isFileTreeOpen: i, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = s !== void 0 && s,
    l = (0, ln.useContext)(Pe),
    u = (0, ln.useRef)(null),
    d = j(q.codeFontSize),
    [p] = (0, ln.useState)(sn);
  E();
  let m;
  t[7] === d ? (m = t[8]) : ((m = ot(d)), (t[7] = d), (t[8] = m));
  let h = m,
    [g, _] = (0, ln.useState)(null),
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        if (e == null) return;
        let t = $e(e);
        _((e) => (e != null && Qe(e, t) ? e : t));
      }),
      (t[9] = v))
    : (v = t[9]);
  let y = v,
    b;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e, t) => {
        y(t);
      }),
      (t[10] = b))
    : (b = t[10]),
    O(b));
  let x;
  t[11] !== l || t[12] !== p
    ? ((x = (e) => {
        if ((u.current?.(), (u.current = null), e != null)) {
          (p.getRoot() != null && p.getRoot() !== e && p.cleanUp(), pe(e, p), p.setup(e), p.resume());
          return;
        }
        l == null ? p.cleanUp() : (p.suspend(), (u.current = X(l, () => p.cleanUp())));
      }),
      (t[11] = l),
      (t[12] = p),
      (t[13] = x))
    : (x = t[13]);
  let S = x,
    w;
  t[14] !== a || t[15] !== S ? ((w = C(a, S)), (t[14] = a), (t[15] = S), (t[16] = w)) : (w = t[16]);
  let T = w,
    D;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, un.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute h-0 w-0 overflow-hidden`,
        dangerouslySetInnerHTML: { __html: dn },
      })),
      (t[17] = D))
    : (D = t[17]);
  let ee = n !== `composer` && (n === `actions` ? `pb-16` : `pb-3`),
    k = c && `[overflow-anchor:none]`,
    A;
  t[18] !== ee || t[19] !== k
    ? ((A = f(
        `electron:bg-surface flex h-full min-w-0 flex-1 scroll-pt-[var(--pane-overlay-header-height,0px)] flex-col overflow-x-hidden overflow-y-auto`,
        ee,
        k,
      )),
      (t[18] = ee),
      (t[19] = k),
      (t[20] = A))
    : (A = t[20]);
  let M;
  t[21] === n
    ? (M = t[22])
    : ((M = n === `composer` ? { paddingBottom: de } : void 0), (t[21] = n), (t[22] = M));
  let N = i ? `extension:pe-1` : `extension:pe-3`,
    P;
  t[23] === N
    ? (P = t[24])
    : ((P = f(`flex w-full flex-col pt-[var(--pane-overlay-header-height,0px)] extension:ps-4`, N)),
      (t[23] = N),
      (t[24] = P));
  let F;
  t[25] === n
    ? (F = t[26])
    : ((F =
        n === `composer` ? { paddingTop: `calc(var(--pane-overlay-header-height, 0px) + ${fe})` } : void 0),
      (t[25] = n),
      (t[26] = F));
  let I = g ?? h,
    L;
  t[27] !== r || t[28] !== I ? ((L = r(I)), (t[27] = r), (t[28] = I), (t[29] = L)) : (L = t[29]);
  let R;
  t[30] === L
    ? (R = t[31])
    : ((R = (0, un.jsx)(`div`, { className: `flex flex-col extension:gap-2`, children: L })),
      (t[30] = L),
      (t[31] = R));
  let z;
  t[32] !== P || t[33] !== F || t[34] !== R
    ? ((z = (0, un.jsxs)(`div`, { className: P, style: F, children: [null, R] })),
      (t[32] = P),
      (t[33] = F),
      (t[34] = R),
      (t[35] = z))
    : (z = t[35]);
  let B;
  t[36] !== T || t[37] !== o || t[38] !== A || t[39] !== M || t[40] !== z
    ? ((B = (0, un.jsxs)(`div`, {
        className: `relative flex h-full min-w-0 flex-1`,
        children: [D, (0, un.jsx)(`div`, { ...o, ref: T, className: A, style: M, children: z })],
      })),
      (t[36] = T),
      (t[37] = o),
      (t[38] = A),
      (t[39] = M),
      (t[40] = z),
      (t[41] = B))
    : (B = t[41]);
  let V;
  return (
    t[42] !== B || t[43] !== p
      ? ((V = (0, un.jsx)(Ke.Provider, { value: p, children: B })), (t[42] = B), (t[43] = p), (t[44] = V))
      : (V = t[44]),
    V
  );
}
function sn() {
  return new Le({ intersectionObserverMargin: 1e3 });
}
var cn, ln, un, dn;
function fn() {
  return (fn = e(() => {
    ((cn = _()),
      re(),
      Ge(),
      Oe(),
      p(),
      W(),
      (ln = s()),
      je(),
      K(),
      I(),
      V(),
      Z(),
      u(),
      rt(),
      Se(),
      (un = d()),
      (dn = ke(`complete`)));
  }))();
}
function pn(e) {
  let t = (0, mn.c)(18),
    { sourceControls: n, sourceDetails: r, actions: i, selectedCommitSubject: a } = e,
    o = te(),
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = { id: `source`, content: n, allowShrink: !0, collapsePriority: 0 }), (t[0] = n), (t[1] = s));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [{ priority: 1, selector: `[data-review-source-branch]` }]), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === r
    ? (u = t[4])
    : ((u = { id: `branch`, content: r, allowShrink: !0, collapseSteps: l }), (t[3] = r), (t[4] = u));
  let d;
  t[5] === a
    ? (d = t[6])
    : ((d = { id: `commit-subject`, content: a, allowShrink: !0, hidePriority: 0 }), (t[5] = a), (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { id: `space`, content: (0, hn.jsx)(`span`, {}), grow: !0 }), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== i || t[9] !== o
    ? ((p =
        i == null
          ? null
          : (0, hn.jsx)(c, {
              label: o.formatMessage({
                id: `codex.review.header.controls`,
                defaultMessage: `Changes controls`,
                description: `Accessible label for the floating controls in the Changes tab showing local diffs`,
              }),
              children: i,
            })),
      (t[8] = i),
      (t[9] = o),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === p ? (m = t[12]) : ((m = { id: `actions`, content: p }), (t[11] = p), (t[12] = m));
  let g;
  return (
    t[13] !== s || t[14] !== u || t[15] !== d || t[16] !== m
      ? ((g = (0, hn.jsx)(`div`, {
          className: `@container/review-header pointer-events-none min-w-0 text-codex-description`,
          "data-viewer-density": `compact`,
          children: (0, hn.jsx)(h, { density: `compact`, leading: [s, u, d, f, m] }),
        })),
        (t[13] = s),
        (t[14] = u),
        (t[15] = d),
        (t[16] = m),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
var mn, hn;
function gn() {
  return (gn = e(() => {
    ((mn = _()), b(), x(), (hn = d()));
  }))();
}
function _n(e) {
  let t = (0, vn.c)(5),
    { account: n, error: r } = e,
    i = bn.exec(r)?.groups?.repository;
  if (i == null) {
    let e;
    return (
      t[0] === r ? (e = t[1]) : ((e = (0, yn.jsx)(yn.Fragment, { children: r })), (t[0] = r), (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] !== n.login || t[3] !== i
      ? ((a = (0, yn.jsx)(G, {
          id: `codex.pullRequests.repositoryAccessError`,
          defaultMessage: `GitHub account {login} can’t access {repository}. Switch accounts or request access, then try again.`,
          description: `Actionable error shown when the active GitHub CLI account cannot access a repository`,
          values: { login: n.login, repository: i },
        })),
        (t[2] = n.login),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var vn, yn, bn;
function xn() {
  return (xn = e(() => {
    ((vn = _()),
      b(),
      (yn = d()),
      (bn =
        /Could not resolve to a Repository with the name '(?<repository>[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)'/u));
  }))();
}
function Sn(e) {
  let t = (0, Cn.c)(34),
    { request: n, onRefresh: i, isRefreshing: a } = e,
    s = r(le),
    c = te(),
    l = M(Ne),
    u = z(Nt, n),
    [d, f] = (0, wn.useState)(!0),
    p = Xt(f, `pull-request-review`),
    m;
  t[0] !== c || t[1] !== u
    ? ((m = u
        ? c.formatMessage({
            id: `pullRequestsPage.codeReview.hideFileTree`,
            defaultMessage: `Hide file tree`,
            description: `Tooltip to hide the pull request code review file tree`,
          })
        : c.formatMessage({
            id: `pullRequestsPage.codeReview.showFileTree`,
            defaultMessage: `Show file tree`,
            description: `Tooltip to show the pull request code review file tree`,
          })),
      (t[0] = c),
      (t[1] = u),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] !== d || t[4] !== p
    ? ((g = () => {
        p(!d);
      }),
      (t[3] = d),
      (t[4] = p),
      (t[5] = g))
    : (g = t[5]);
  let _ = i != null,
    v;
  t[6] !== d || t[7] !== a || t[8] !== i || t[9] !== g || t[10] !== _
    ? ((v = (0, Tn.jsx)(an, {
        expanded: d,
        onRefreshGitQueries: i,
        onToggleExpanded: g,
        showHideImports: !1,
        showHideWhitespace: !1,
        showLoadFullFiles: !1,
        showRefreshGitQueries: _,
        refreshGitQueriesDisabled: a,
      })),
      (t[6] = d),
      (t[7] = a),
      (t[8] = i),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v))
    : (v = t[11]);
  let b;
  t[12] === s
    ? (b = t[13])
    : ((b = (e) => {
        s.set(Ne, e);
      }),
      (t[12] = s),
      (t[13] = b));
  let x;
  t[14] !== l || t[15] !== b
    ? ((x = (0, Tn.jsx)(nn, { diffMode: l, onSelectDiffMode: b })), (t[14] = l), (t[15] = b), (t[16] = x))
    : (x = t[16]);
  let S = u ? `selected` : `default`,
    C;
  t[17] !== u || t[18] !== n || t[19] !== s
    ? ((C = () => {
        Ct(s, n, !u);
      }),
      (t[17] = u),
      (t[18] = n),
      (t[19] = s),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Tn.jsx)(o, { "aria-hidden": !1, asset: H })), (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== h || t[23] !== u || t[24] !== S || t[25] !== C
    ? ((T = (0, Tn.jsx)(y, {
        "aria-label": h,
        "aria-pressed": u,
        variant: S,
        uniform: !0,
        onClick: C,
        children: w,
      })),
      (t[22] = h),
      (t[23] = u),
      (t[24] = S),
      (t[25] = C),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== h || t[28] !== T
    ? ((E = (0, Tn.jsx)(R, { tooltipContent: h, delayOpen: !0, children: T })),
      (t[27] = h),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]);
  let D;
  return (
    t[30] !== E || t[31] !== v || t[32] !== x
      ? ((D = (0, Tn.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [v, x, E] })),
        (t[30] = E),
        (t[31] = v),
        (t[32] = x),
        (t[33] = D))
      : (D = t[33]),
    D
  );
}
var Cn, wn, Tn;
function En() {
  return (En = e(() => {
    ((Cn = _()), l(), T(), (wn = s()), b(), m(), U(), ae(), Qt(), rn(), We(), x(), Mt(), (Tn = d()));
  }))();
}
function Dn(e) {
  let t = (0, On.c)(13),
    n,
    i;
  t[0] === e ? ((n = t[1]), (i = t[2])) : (({ diff: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a = r(v),
    o = M(ce),
    s = M(ye),
    c = n.metadata.additionLines ? `line-info` : `metadata`,
    l;
  t[3] !== a || t[4] !== s
    ? ((l = () => {
        a.set(ye, !s);
      }),
      (t[3] = a),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== n || t[7] !== i || t[8] !== o || t[9] !== c || t[10] !== l || t[11] !== s
      ? ((u = (0, kn.jsx)($t, {
          ...i,
          containerClassName: `extension:rounded-lg extension:[--codex-diffs-surface-override:var(--color-codex-diff-surface)]`,
          diff: n,
          diffViewWrap: s,
          headerVariant: `full-review`,
          hunkSeparators: c,
          onToggleWrap: l,
          richPreviewEnabled: o,
          roundedCorners: !1,
        })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = s),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
var On, kn;
function An() {
  return (An = e(() => {
    ((On = _()), T(), Zt(), ae(), i(), (kn = d()));
  }))();
}
var jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((jn = t(ue(), 1)),
      T(),
      ct(),
      ve(),
      We(),
      a(),
      Mt(),
      bt(),
      (Mn = L(le, (e, { get: t }) => {
        let n = t(It, e).data,
          r = t(Bt, e),
          i =
            n?.status === `success` && r != null
              ? {
                  account: e.account,
                  pullRequest: e.pullRequest,
                  headRevision: n.headRevision,
                  paths: r.map((e) => e.metadata.name),
                }
              : null;
        return {
          enabled: i != null && i.paths.length > 0 && t(yt, e) === `available`,
          queryKey: D(`gh-pr-gitattributes`, i ?? void 0),
          queryFn: ({ signal: e }) => {
            if (i == null) throw Error(`Pull request diff unavailable`);
            return Q(`gh-pr-gitattributes`, i, { signal: e, source: `pull_requests_page` });
          },
          staleTime: (e) => (e.state.data?.status === `success` ? 1 / 0 : 0),
        };
      })),
      (Nn = J(le, (e, { get: t }) => {
        let n = t(Mn, e).data;
        return n?.status === `success`
          ? (0, jn.default)(n.files, (e) => e.basePath.length, `desc`).map(({ basePath: e, contents: t }) =>
              at(t, { basePath: e || null }),
            )
          : void 0;
      })),
      (Pn = J(le, ({ request: e, path: t }, { get: n }) => {
        let r = n(Nn, e);
        if (r == null) return !1;
        for (let e of r) {
          let n = e?.(t);
          if (n != null) return n === `set`;
        }
        return !1;
      })));
  }))();
}
function In(e) {
  let t = (0, Ln.c)(79),
    {
      request: n,
      canWrite: i,
      commentAuthorAvatarUrl: a,
      commentAuthorLabel: o,
      cwd: s,
      diffMode: c,
      file: l,
      hostConfig: u,
      path: d,
      reviewDiffMetrics: f,
      renderReadonlyComment: p,
      renderReadonlyCommentBody: m,
      onRequestChanges: h,
    } = e,
    g = i === void 0 || i,
    _ = r(le),
    v = te(),
    y;
  t[0] !== n || t[1] !== _
    ? ((y = `comparison` in n && _.value.routeKind !== `chatgpt-thread` ? se(_.value) : null),
      (t[0] = n),
      (t[1] = _),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] === n
    ? (x = t[4])
    : ((x =
        `comparison` in n
          ? JSON.stringify([
              Te(n.account),
              Ue(n.pullRequest),
              n.comparison.baseRevision,
              n.comparison.headRevision,
            ])
          : null),
      (t[3] = n),
      (t[4] = x));
  let S;
  t[5] !== b || t[6] !== d || t[7] !== x
    ? ((S = { conversationId: b, path: d, pullRequestReviewKey: x }),
      (t[5] = b),
      (t[6] = d),
      (t[7] = x),
      (t[8] = S))
    : (S = t[8]);
  let C = S,
    w = z(ze, C),
    T = g || b != null,
    E;
  t[9] !== d || t[10] !== n
    ? ((E = { path: d, request: n }), (t[9] = d), (t[10] = n), (t[11] = E))
    : (E = t[11]);
  let D = z(Rt, E),
    O;
  t[12] !== d || t[13] !== n
    ? ((O = { path: d, request: n }), (t[12] = d), (t[13] = n), (t[14] = O))
    : (O = t[14]);
  let ee = z(Ot, O),
    k;
  t[15] !== d || t[16] !== n
    ? ((k = { path: d, request: n }), (t[15] = d), (t[16] = n), (t[17] = k))
    : (k = t[17]);
  let A = z(At, k),
    j;
  t[18] !== d || t[19] !== n
    ? ((j = { path: d, request: n }), (t[18] = d), (t[19] = n), (t[20] = j))
    : (j = t[20]);
  let M = z(jt, j),
    N;
  t[21] !== d || t[22] !== n
    ? ((N = { request: n, path: d }), (t[21] = d), (t[22] = n), (t[23] = N))
    : (N = t[23]);
  let P = z(Pn, N),
    [F, I] = (0, Rn.useState)(),
    L;
  t[24] === d ? (L = t[25]) : ((L = { path: d }), (t[24] = d), (t[25] = L));
  let R = Ye(L),
    B;
  if (t[26] !== v || t[27] !== d || t[28] !== n || t[29] !== _ || t[30] !== M) {
    let e;
    (t[32] !== v || t[33] !== d || t[34] !== n || t[35] !== _
      ? ((e = (e) => {
          let { error: t, submissionKey: r } = e;
          return (0, zn.jsx)(
            `div`,
            {
              className: `mx-1`,
              children: (0, zn.jsx)(ne, {
                content:
                  t instanceof Error
                    ? t.message
                    : v.formatMessage({
                        id: `pullRequestDetail.code.commentError`,
                        defaultMessage: `GitHub could not post this comment`,
                        description: `Fallback error for a pull request code comment`,
                      }),
                role: `alert`,
                type: `error`,
                variant: `callout`,
                stackOnNarrow: !0,
                primaryCtaColor: `secondary`,
                onPrimaryCtaClick: () => {
                  Vt(_, n, d, r);
                },
                primaryCtaText: (0, zn.jsx)(G, {
                  id: `pullRequestDetail.code.retryComment`,
                  defaultMessage: `Retry`,
                  description: `Action to retry a failed pull request code comment`,
                }),
              }),
            },
            `${r.revision}:${r.commentKey}`,
          );
        }),
        (t[32] = v),
        (t[33] = d),
        (t[34] = n),
        (t[35] = _),
        (t[36] = e))
      : (e = t[36]),
      (B = M.map(e)),
      (t[26] = v),
      (t[27] = d),
      (t[28] = n),
      (t[29] = _),
      (t[30] = M),
      (t[31] = B));
  } else B = t[31];
  let V = b ?? void 0,
    H = b == null ? D : w,
    U = `comparison` in n ? void 0 : ee,
    W = b == null ? a : void 0,
    K = b == null ? o : void 0,
    q;
  t[37] !== b || t[38] !== T || t[39] !== C || t[40] !== d || t[41] !== n || t[42] !== _
    ? ((q = T
        ? (e, t) => {
            if (b != null) {
              Fe(_, C, e);
              return;
            }
            St(_, n, d, e, t);
          }
        : void 0),
      (t[37] = b),
      (t[38] = T),
      (t[39] = C),
      (t[40] = d),
      (t[41] = n),
      (t[42] = _),
      (t[43] = q))
    : (q = t[43]);
  let J;
  t[44] !== g || t[45] !== D || t[46] !== d || t[47] !== n || t[48] !== _
    ? ((J = g
        ? (e) => {
            e.viewerCanReply !== !1 &&
              St(
                _,
                n,
                d,
                [
                  ...D,
                  {
                    ...e,
                    content: [{ content_type: `text`, text: `` }],
                    replyToReviewThreadId: e.reviewThreadId ?? null,
                  },
                ],
                null,
              );
          }
        : void 0),
      (t[44] = g),
      (t[45] = D),
      (t[46] = d),
      (t[47] = n),
      (t[48] = _),
      (t[49] = J))
    : (J = t[49]);
  let Y = `comparison` in n,
    X;
  t[50] !== l || t[51] !== n || t[52] !== _
    ? ((X = `comparison` in n ? xt(_, n, l) : void 0), (t[50] = l), (t[51] = n), (t[52] = _), (t[53] = X))
    : (X = t[53]);
  let re = F ?? (l.metadata.type !== `deleted` && !P),
    Z;
  t[54] !== s ||
  t[55] !== c ||
  t[56] !== T ||
  t[57] !== l ||
  t[58] !== u ||
  t[59] !== R ||
  t[60] !== h ||
  t[61] !== p ||
  t[62] !== m ||
  t[63] !== f ||
  t[64] !== A ||
  t[65] !== V ||
  t[66] !== H ||
  t[67] !== U ||
  t[68] !== W ||
  t[69] !== K ||
  t[70] !== q ||
  t[71] !== J ||
  t[72] !== Y ||
  t[73] !== X ||
  t[74] !== re
    ? ((Z = (0, zn.jsx)(Dn, {
        conversationId: V,
        cwd: s,
        diff: l,
        expandScope: `pull-request-review`,
        enableComments: T,
        comments: H,
        readonlyComments: U,
        renderReadonlyComment: p,
        renderReadonlyCommentBody: m,
        submittingCommentKeys: A,
        commentAuthorAvatarUrl: W,
        commentAuthorLabel: K,
        onCommentsChange: q,
        onOpenChange: I,
        onPostRender: R,
        onRequestChanges: h,
        onReadonlyCommentReply: J,
        hostConfig: u,
        loadFullContent: Y,
        fullContentLoader: X,
        showPartialWhileLoadingFullContent: !0,
        open: re,
        metrics: f,
        stickyHeader: !0,
        viewType: c,
      })),
      (t[54] = s),
      (t[55] = c),
      (t[56] = T),
      (t[57] = l),
      (t[58] = u),
      (t[59] = R),
      (t[60] = h),
      (t[61] = p),
      (t[62] = m),
      (t[63] = f),
      (t[64] = A),
      (t[65] = V),
      (t[66] = H),
      (t[67] = U),
      (t[68] = W),
      (t[69] = K),
      (t[70] = q),
      (t[71] = J),
      (t[72] = Y),
      (t[73] = X),
      (t[74] = re),
      (t[75] = Z))
    : (Z = t[75]);
  let Q;
  return (
    t[76] !== B || t[77] !== Z
      ? ((Q = (0, zn.jsxs)(zn.Fragment, { children: [B, Z] })), (t[76] = B), (t[77] = Z), (t[78] = Q))
      : (Q = t[78]),
    Q
  );
}
var Ln, Rn, zn;
function Bn() {
  return (Bn = e(() => {
    ((Ln = _()), T(), (Rn = s()), b(), Ie(), dt(), Y(), An(), We(), ge(), Mt(), Fn(), bt(), (zn = d()));
  }))();
}
function Vn(e, t) {
  return {
    path: t,
    hunks: [
      { hunkId: `path`, lineEnd: 1, lineStart: 1, text: Hn(e) },
      ...e.metadata.hunks.map((t, n) => {
        let r = Math.min(t.additionStart, t.deletionStart),
          i = t.additionStart + Math.max(t.additionCount, 0) - 1,
          a = t.deletionStart + Math.max(t.deletionCount, 0) - 1,
          o = Math.max(r, i, a),
          s = Un(e, t);
        return { hunkId: `${n}`, lineEnd: o, lineSpans: s.lineSpans, lineStart: r, text: s.text };
      }),
    ],
  };
}
function Hn(e) {
  return e.oldPath === e.newPath ? e.newPath : `${e.oldPath} -> ${e.newPath}`;
}
function Un(e, t) {
  let n = [],
    r = t.additionStart,
    i = t.deletionStart;
  for (let a of t.hunkContent) {
    if (a.type === `context`) {
      (Wn(n, e.metadata.additionLines, a.additionLineIndex, a.lines, r, `additions`),
        (r += a.lines),
        (i += a.lines));
      continue;
    }
    (Wn(n, e.metadata.deletionLines, a.deletionLineIndex, a.deletions, i, `deletions`),
      (i += a.deletions),
      Wn(n, e.metadata.additionLines, a.additionLineIndex, a.additions, r, `additions`),
      (r += a.additions));
  }
  return Gn(n);
}
function Wn(e, t, n, r, i, a) {
  for (let o = 0; o < r; o += 1) {
    let r = t[n + o];
    r != null && e.push({ lineNumber: i + o, side: a, text: r });
  }
}
function Gn(e) {
  let t = [],
    n = [],
    r = 0;
  return (
    e.forEach((i, a) => {
      let o = r + i.text.length;
      (t.push(i.text),
        n.push({ start: r, end: o, lineStart: i.lineNumber, lineEnd: i.lineNumber, side: i.side }),
        (r = o + (a === e.length - 1 ? 0 : 1)));
    }),
    {
      lineSpans: n,
      text: t.join(`
`),
    }
  );
}
function Kn() {
  return (Kn = e(() => {}))();
}
function qn(e) {
  let t = (0, Zn.c)(6),
    { files: n, request: i, scrollContainerRef: a } = e,
    o = r(le),
    s,
    c;
  return (
    t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== a
      ? ((s = () => {
          let e = (e) => document.getElementById(zt(o, i, e)),
            t = nt({
              contextId: `pull-request:${JSON.stringify(i)}`,
              getFiles: () => n.filter(Xn).map(Jn),
              scrollAdapter: {
                getFileContainer: e,
                scrollToFile: async (t, n) => {
                  if (n?.signal?.aborted) return;
                  Et(o, i, t);
                  let r = e(t);
                  (r?.querySelector(me.reviewFileToggleCollapsed)?.click(),
                    await Jt(),
                    !n?.signal?.aborted &&
                      (r?.scrollIntoView({ behavior: `auto`, block: `center` }), await Jt()));
                },
                scrollToLocation: async (t, n) => {
                  if (n?.signal?.aborted || t.hunkId === `path`) return;
                  let r = e(t.path),
                    i = a.current;
                  if (r == null || i == null) return;
                  let o = vt(r, t.lineStart, t.side);
                  o != null &&
                    (i.scrollTo({
                      behavior: `auto`,
                      top: Math.max(0, o.top - (i.clientHeight - o.height) / 2),
                    }),
                    await Jt());
                },
              },
            }),
            r = o.get(Ce);
          return (
            o.set(Ce, t),
            _e(o, `diff`),
            () => {
              o.get(Ce) === t && o.set(Ce, r);
            }
          );
        }),
        (c = [n, i, o, a]),
        (t[0] = n),
        (t[1] = i),
        (t[2] = o),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c))
      : ((s = t[4]), (c = t[5])),
    (0, Qn.useEffect)(s, c),
    null
  );
}
function Jn(e) {
  let t = Vn(e, F(e.metadata.name));
  return { ...t, hunks: t.hunks.filter(Yn) };
}
function Yn(e) {
  return e.hunkId !== `path`;
}
function Xn(e) {
  return !Ee(e);
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Zn = _()), T(), (Qn = s()), Be(), lt(), Yt(), Me(), Re(), _t(), We(), g(), Ft(), Mt());
  }))();
}
function er(e) {
  let t = (0, ir.c)(118),
    {
      request: i,
      baseBranch: a,
      headRevision: o,
      headBranch: s,
      onRequestChanges: c,
      sourceControl: l,
      onRefresh: u,
      isRefreshing: d,
      renderSlots: f,
    } = e,
    p = f === void 0 ? B : f,
    m = r(le),
    h = te(),
    g = M(Wt) && !(`comparison` in i),
    _;
  t[0] !== d || t[1] !== u || t[2] !== i
    ? ((_ = (0, $.jsx)(Sn, { request: i, onRefresh: u, isRefreshing: d })),
      (t[0] = d),
      (t[1] = u),
      (t[2] = i),
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    y = M(Ne),
    b = z(It, i),
    [x, C] = (0, ar.useState)(!1),
    w = z(Bt, i),
    T = z(wt, i),
    E = z(kt, i),
    D = z(Dt, i),
    O = z(Nt, i),
    ee = z(Tt, i),
    A = i.account,
    j = z(Ae, A.hostId),
    N = (0, ar.useRef)(null),
    I;
  t[4] !== i || t[5] !== m
    ? ((I = (e) => {
        if (e == null) {
          (N.current != null && Ut(m, i, N.current.scrollTop), (N.current = null));
          return;
        }
        ((N.current = e), (e.scrollTop = m.get(Pt, i)));
      }),
      (t[4] = i),
      (t[5] = m),
      (t[6] = I))
    : (I = t[6]);
  let L = k(I),
    R;
  t[7] === l
    ? (R = t[8])
    : ((R = l == null ? null : (0, $.jsx)(pn, { sourceControls: l, actions: null })), (t[7] = l), (t[8] = R));
  let V = R,
    H;
  if (
    t[9] !== A ||
    t[10] !== b ||
    t[11] !== w?.length ||
    t[12] !== o ||
    t[13] !== x ||
    t[14] !== u ||
    t[15] !== p ||
    t[16] !== i.pullRequest ||
    t[17] !== v ||
    t[18] !== m ||
    t[19] !== V
  ) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = V == null ? [] : [{ id: `review-pull-request-toolbar`, height: `content`, content: V }];
      if (b?.isLoading === !0) {
        let r;
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(n, {})), (t[21] = r))
          : (r = t[21]);
        let i;
        (t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsxs)(`div`, {
              className: `flex h-full items-center justify-center`,
              role: `status`,
              children: [
                r,
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, $.jsx)(G, {
                    id: `pullRequestDetail.code.loading`,
                    defaultMessage: `Loading pull request changes`,
                    description: `Loading state for the pull request Code tab`,
                  }),
                }),
              ],
            })),
            (t[22] = i))
          : (i = t[22]),
          (H = p({ headerRows: e, content: i })));
        break bb0;
      }
      if (b?.data?.status !== `success` || b.data.headRevision !== o) {
        let n = b?.data?.status === `error` ? b.data.error : b?.error?.message,
          r;
        t[23] === n
          ? (r = t[24])
          : ((r =
              n != null &&
              [
                `GitHub did not provide a complete patch for every file`,
                `GitHub returned an incomplete file patch`,
                `GitHub cannot return all files in this pull request`,
                `GitHub did not return all files in the pull request`,
                `The pull request diff exceeds the size limit`,
                `This diff exceeds GitHub's size limit`,
                `diff exceeded the maximum number`,
              ].some((e) => n.includes(e))),
            (t[23] = n),
            (t[24] = r));
        let a = r,
          o = null;
        if (a) {
          let e;
          (t[25] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(G, {
                id: `pullRequestDetail.code.incompleteDiff`,
                defaultMessage: `GitHub couldn’t provide a complete diff. Review this pull request on GitHub or in a local checkout.`,
                description: `Explains that missing file patches or size limits prevent showing the complete pull request, and suggests reviewing on GitHub or in a local checkout`,
              })),
              (t[25] = e))
            : (e = t[25]),
            (o = e));
        } else if (b?.data?.status === `success`) {
          let e;
          (t[26] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(G, {
                id: `pullRequestDetail.code.stale`,
                defaultMessage: `The pull request changed while its diff was loading.`,
                description: `Error shown when a pull request diff revision is stale`,
              })),
              (t[26] = e))
            : (e = t[26]),
            (o = e));
        } else if (n != null) {
          let e;
          (t[27] !== A || t[28] !== n
            ? ((e = (0, $.jsx)(_n, { account: A, error: n })), (t[27] = A), (t[28] = n), (t[29] = e))
            : (e = t[29]),
            (o = e));
        }
        let s = u == null ? null : v,
          c;
        t[30] !== a || t[31] !== i.pullRequest
          ? ((c =
              a &&
              (0, $.jsx)(S, {
                color: `primary`,
                onClick: (e) => {
                  he({
                    event: e,
                    href: Ve(i.pullRequest),
                    initiator: `pull_request_link`,
                    openAsWebsite: !0,
                  });
                },
                children: (0, $.jsx)(G, {
                  id: `pullRequestDetail.code.openIncompleteDiffInGitHub`,
                  defaultMessage: `Open in GitHub`,
                  description: `Opens the pull request on GitHub when its complete diff cannot be shown in Codex`,
                }),
              })),
            (t[30] = a),
            (t[31] = i.pullRequest),
            (t[32] = c))
          : (c = t[32]);
        let l = x || b?.isFetching === !0,
          d;
        t[33] !== A.hostId || t[34] !== b || t[35] !== m.queryClient
          ? ((d = () => {
              (C(!0),
                oe(m.queryClient, A.hostId)
                  .then(() => b?.refetch())
                  .finally(() => C(!1)));
            }),
            (t[33] = A.hostId),
            (t[34] = b),
            (t[35] = m.queryClient),
            (t[36] = d))
          : (d = t[36]);
        let f;
        t[37] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((f = (0, $.jsx)(G, {
              id: `pullRequestDetail.code.retry`,
              defaultMessage: `Try again`,
              description: `Action to retry loading a pull request diff`,
            })),
            (t[37] = f))
          : (f = t[37]);
        let h;
        t[38] !== d || t[39] !== l
          ? ((h = (0, $.jsx)(S, { color: `secondary`, loading: l, onClick: d, children: f })),
            (t[38] = d),
            (t[39] = l),
            (t[40] = h))
          : (h = t[40]);
        let g;
        t[41] !== h || t[42] !== s || t[43] !== c
          ? ((g = (0, $.jsxs)($.Fragment, { children: [s, c, h] })),
            (t[41] = h),
            (t[42] = s),
            (t[43] = c),
            (t[44] = g))
          : (g = t[44]);
        let _;
        t[45] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((_ = (0, $.jsx)(G, {
              id: `pullRequestDetail.code.unavailable`,
              defaultMessage: `Changes unavailable`,
              description: `Error title for an unavailable pull request diff`,
            })),
            (t[45] = _))
          : (_ = t[45]);
        let y;
        (t[46] !== g || t[47] !== o
          ? ((y = (0, $.jsx)(xe, { className: `h-full`, actions: g, description: o, title: _ })),
            (t[46] = g),
            (t[47] = o),
            (t[48] = y))
          : (y = t[48]),
          (H = p({ headerRows: e, content: y })));
        break bb0;
      }
      if (w?.length === 0) {
        let n = u == null ? null : v,
          r;
        t[49] === n ? (r = t[50]) : ((r = (0, $.jsx)($.Fragment, { children: n })), (t[49] = n), (t[50] = r));
        let i;
        t[51] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsx)(G, {
              id: `pullRequestDetail.code.empty`,
              defaultMessage: `No changed files`,
              description: `Empty state for a pull request without a diff`,
            })),
            (t[51] = i))
          : (i = t[51]);
        let a;
        (t[52] === r
          ? (a = t[53])
          : ((a = (0, $.jsx)(xe, { className: `h-full`, actions: r, title: i })), (t[52] = r), (t[53] = a)),
          (H = p({ headerRows: e, content: a })));
        break bb0;
      }
    }
    ((t[9] = A),
      (t[10] = b),
      (t[11] = w?.length),
      (t[12] = o),
      (t[13] = x),
      (t[14] = u),
      (t[15] = p),
      (t[16] = i.pullRequest),
      (t[17] = v),
      (t[18] = m),
      (t[19] = V),
      (t[20] = H));
  } else H = t[20];
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  if (t[54] !== a || t[55] !== s || t[56] !== h) {
    let e = s?.trim() || null,
      n = a?.trim() || null;
    ((U = e ?? n),
      e != null &&
        n != null &&
        (U = h.formatMessage(
          {
            id: `pullRequestDetail.code.branchRange`,
            defaultMessage: `{headBranch} → {baseBranch}`,
            description: `Branch comparison in the pull request Code toolbar, from the pull request head branch into its base branch`,
          },
          { headBranch: e, baseBranch: n },
        )),
      (t[54] = a),
      (t[55] = s),
      (t[56] = h),
      (t[57] = U));
  } else U = t[57];
  let W, K;
  t[58] === m
    ? ((W = t[59]), (K = t[60]))
    : ((W = () => _e(m, `diff`)), (K = () => _e(m, `diff`)), (t[58] = m), (t[59] = W), (t[60] = K));
  let ne;
  t[61] !== A.hostname ||
  t[62] !== A.login ||
  t[63] !== g ||
  t[64] !== y ||
  t[65] !== w ||
  t[66] !== j ||
  t[67] !== c ||
  t[68] !== i ||
  t[69] !== m
    ? ((ne = (e) =>
        (w ?? []).map((t) => {
          let n = F(t.metadata.name);
          return (0, $.jsx)(
            `div`,
            {
              id: zt(m, i, n),
              ...He.reviewFile(n),
              children: (0, $.jsx)(In, {
                request: i,
                canWrite: g,
                commentAuthorAvatarUrl: gt(A.login, 48, A.hostname),
                commentAuthorLabel: A.login,
                cwd: null,
                diffMode: y,
                file: t,
                hostConfig: j,
                path: n,
                reviewDiffMetrics: e,
                renderReadonlyComment: g ? (e) => (0, $.jsx)(tr, { comment: e, request: i }) : void 0,
                renderReadonlyCommentBody: (e, t) =>
                  (0, $.jsx)(Je, {
                    request: i,
                    allowBasicHtml: !0,
                    className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
                    cwd: null,
                    children: e,
                  }),
                onRequestChanges: c,
              }),
            },
            n,
          );
        })),
      (t[61] = A.hostname),
      (t[62] = A.login),
      (t[63] = g),
      (t[64] = y),
      (t[65] = w),
      (t[66] = j),
      (t[67] = c),
      (t[68] = i),
      (t[69] = m),
      (t[70] = ne))
    : (ne = t[70]);
  let q;
  t[71] !== O || t[72] !== L || t[73] !== W || t[74] !== K || t[75] !== ne
    ? ((q = (0, $.jsx)(on, {
        ref: L,
        "data-pull-request-code-scroll": !0,
        disableScrollAnchoring: !0,
        isFileTreeOpen: O,
        onFocusCapture: W,
        onPointerDownCapture: K,
        children: ne,
      })),
      (t[71] = O),
      (t[72] = L),
      (t[73] = W),
      (t[74] = K),
      (t[75] = ne),
      (t[76] = q))
    : (q = t[76]);
  let J = q,
    Y;
  t[77] !== i || t[78] !== m
    ? ((Y = (e) => {
        Ht(m, i, e);
      }),
      (t[77] = i),
      (t[78] = m),
      (t[79] = Y))
    : (Y = t[79]);
  let X;
  t[80] !== D || t[81] !== Y
    ? ((X = (0, $.jsx)(`div`, {
        className: `shrink-0 pt-2 pb-1`,
        children: (0, $.jsx)(tt, {
          inputId: `pull-request-code-file-search`,
          searchQuery: D,
          onQueryChange: Y,
        }),
      })),
      (t[80] = D),
      (t[81] = Y),
      (t[82] = X))
    : (X = t[82]);
  let re = E ?? void 0,
    Z;
  t[83] !== i || t[84] !== m
    ? ((Z = (e) => {
        (Et(m, i, e), document.getElementById(zt(m, i, e))?.scrollIntoView({ block: `start` }));
      }),
      (t[83] = i),
      (t[84] = m),
      (t[85] = Z))
    : (Z = t[85]);
  let Q;
  t[86] !== ee || t[87] !== re || t[88] !== Z || t[89] !== T
    ? ((Q = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(it, {
          activePath: re,
          commentCountByPath: ee,
          cwd: null,
          entries: T,
          onSelectPath: Z,
        }),
      })),
      (t[86] = ee),
      (t[87] = re),
      (t[88] = Z),
      (t[89] = T),
      (t[90] = Q))
    : (Q = t[90]);
  let ie;
  t[91] !== X || t[92] !== Q
    ? ((ie = (0, $.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col pt-[var(--pane-overlay-header-height,0px)]`,
        children: [X, Q],
      })),
      (t[91] = X),
      (t[92] = Q),
      (t[93] = ie))
    : (ie = t[93]);
  let ae = ie,
    se;
  t[94] !== U || t[95] !== l
    ? ((se = l ?? (U == null ? null : (0, $.jsx)(P, { title: U }))), (t[94] = U), (t[95] = l), (t[96] = se))
    : (se = t[96]);
  let ce;
  t[97] !== v || t[98] !== se
    ? ((ce = (0, $.jsx)(pn, { sourceControls: se, actions: v })), (t[97] = v), (t[98] = se), (t[99] = ce))
    : (ce = t[99]);
  let ue = ce,
    de;
  t[100] !== w || t[101] !== i
    ? ((de = w == null ? null : (0, $.jsx)(qn, { files: w, request: i, scrollContainerRef: N })),
      (t[100] = w),
      (t[101] = i),
      (t[102] = de))
    : (de = t[102]);
  let fe;
  t[103] !== i || t[104] !== m
    ? ((fe = (e) => {
        Ct(m, i, e);
      }),
      (t[103] = i),
      (t[104] = m),
      (t[105] = fe))
    : (fe = t[105]);
  let pe;
  t[106] !== J || t[107] !== ae || t[108] !== O || t[109] !== fe
    ? ((pe = (0, $.jsx)(tn, {
        id: `pull-request-code-review-files-right`,
        className: `h-full min-h-0`,
        defaultLeftPercent: 76,
        drawerBreakpoint: 680,
        drawerMaxWidth: 360,
        drawerVisibleInset: 56,
        isRightOpen: O,
        left: J,
        minLeftWidth: 420,
        minRightWidth: 220,
        onRightOpenChange: fe,
        right: ae,
        rightClassName: `pe-4 ps-2`,
      })),
      (t[106] = J),
      (t[107] = ae),
      (t[108] = O),
      (t[109] = fe),
      (t[110] = pe))
    : (pe = t[110]);
  let me;
  t[111] !== de || t[112] !== pe
    ? ((me = (0, $.jsxs)($.Fragment, { children: [de, pe] })), (t[111] = de), (t[112] = pe), (t[113] = me))
    : (me = t[113]);
  let ge = me,
    ve;
  return (
    t[114] !== ge || t[115] !== p || t[116] !== ue
      ? ((ve = p({
          headerRows: [{ id: `review-pull-request-toolbar`, height: `content`, content: ue }],
          content: ge,
        })),
        (t[114] = ge),
        (t[115] = p),
        (t[116] = ue),
        (t[117] = ve))
      : (ve = t[117]),
    ve
  );
}
function tr(e) {
  let t = (0, ir.c)(22),
    { comment: n, request: r } = e,
    i;
  t[0] !== n.reviewThreadId || t[1] !== r
    ? ((i = { request: r, threadId: n.reviewThreadId }), (t[0] = n.reviewThreadId), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a = z(Lt, i);
  if (a != null) {
    let e;
    return (
      t[3] !== n || t[4] !== r.account || t[5] !== r.pullRequest || t[6] !== a
        ? ((e = (0, $.jsx)(Xe, {
            account: r.account,
            comment: a,
            commentAttachment: n,
            inline: !0,
            pullRequest: r.pullRequest,
            source: `pull_requests_page`,
          })),
          (t[3] = n),
          (t[4] = r.account),
          (t[5] = r.pullRequest),
          (t[6] = a),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let o = n.isResolved === !0,
    s;
  t[8] === n.isResolved
    ? (s = t[9])
    : ((s =
        n.isResolved === !0
          ? (0, $.jsx)(G, {
              id: `pullRequestDetail.comment.resolved`,
              defaultMessage: `Resolved`,
              description: `Status shown on a resolved pull request code review thread`,
            })
          : void 0),
      (t[8] = n.isResolved),
      (t[9] = s));
  let c = n.reviewThreadId != null,
    l;
  t[10] !== n || t[11] !== r || t[12] !== c
    ? ((l = (0, $.jsx)(nr, { canReply: c, comment: n, request: r })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = c),
      (t[13] = l))
    : (l = t[13]);
  let u;
  t[14] === r
    ? (u = t[15])
    : ((u = (e, t) =>
        (0, $.jsx)(Je, {
          request: r,
          allowBasicHtml: !0,
          className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
          cwd: null,
          children: e,
        })),
      (t[14] = r),
      (t[15] = u));
  let d;
  return (
    t[16] !== n || t[17] !== o || t[18] !== s || t[19] !== l || t[20] !== u
      ? ((d = (0, $.jsx)(ht, {
          comment: n,
          createdAt: n.createdAt,
          defaultCollapsed: o,
          headerAccessory: s,
          metadataAccessory: l,
          replies: n.replies,
          renderBody: u,
          surfaceVariant: `inline`,
          url: n.url,
        })),
        (t[16] = n),
        (t[17] = o),
        (t[18] = s),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function nr(e) {
  let t = (0, ir.c)(17),
    { canReply: n, comment: r, request: i } = e,
    [a, o] = (0, ar.useState)(!1),
    s =
      r.reviewThreadId != null &&
      (r.isResolved === !0 ? r.viewerCanUnresolve === !0 : r.viewerCanResolve === !0);
  if (!n && !s) return null;
  if (a && r.reviewThreadId != null) {
    let e, n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          o(!1);
        }),
        (n = () => {
          o(!1);
        }),
        (t[0] = e),
        (t[1] = n))
      : ((e = t[0]), (n = t[1]));
    let a;
    return (
      t[2] !== r.authorLogin || t[3] !== r.reviewThreadId || t[4] !== i.account || t[5] !== i.pullRequest
        ? ((a = (0, $.jsx)(`div`, {
            className: `w-full ps-6.5`,
            children: (0, $.jsx)(pt, {
              account: i.account,
              pullRequest: i.pullRequest,
              replyToAuthorLogin: r.authorLogin,
              replyToReviewThreadId: r.reviewThreadId,
              source: `pull_requests_page`,
              onCancel: e,
              onSuccess: n,
            }),
          })),
          (t[2] = r.authorLogin),
          (t[3] = r.reviewThreadId),
          (t[4] = i.account),
          (t[5] = i.pullRequest),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let c;
  t[7] === n
    ? (c = t[8])
    : ((c = n
        ? (0, $.jsxs)(S, {
            color: `ghost`,
            size: `default`,
            onClick: () => {
              o(!0);
            },
            children: [
              (0, $.jsx)(qt, { "aria-hidden": !0, className: `icon-sm` }),
              (0, $.jsx)(`span`, {
                className: `ps-1`,
                children: (0, $.jsx)(G, {
                  id: `pullRequestsPage.codeReview.comment.reply`,
                  defaultMessage: `Reply`,
                  description: `Action button shown on a pull request review comment in the code review tab`,
                }),
              }),
            ],
          })
        : null),
      (t[7] = n),
      (t[8] = c));
  let l;
  t[9] !== s || t[10] !== r.isResolved || t[11] !== r.reviewThreadId || t[12] !== i
    ? ((l =
        s && r.reviewThreadId != null
          ? (0, $.jsx)(Ze, {
              account: i.account,
              action: r.isResolved === !0 ? `unresolve` : `resolve`,
              pullRequest: i.pullRequest,
              reviewThreadId: r.reviewThreadId,
              source: `pull_requests_page`,
            })
          : null),
      (t[9] = s),
      (t[10] = r.isResolved),
      (t[11] = r.reviewThreadId),
      (t[12] = i),
      (t[13] = l))
    : (l = t[13]);
  let u;
  return (
    t[14] !== c || t[15] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `flex w-full items-start gap-2 ps-8.5`,
          role: `presentation`,
          onClick: rr,
          children: [c, l],
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function rr(e) {
  (e.preventDefault(), e.stopPropagation());
}
var ir, ar, $;
function or() {
  return (or = e(() => {
    ((ir = _()),
      T(),
      (ar = s()),
      b(),
      Be(),
      N(),
      Me(),
      w(),
      we(),
      be(),
      ee(),
      en(),
      ae(),
      et(),
      Kt(),
      ie(),
      fn(),
      st(),
      gn(),
      We(),
      De(),
      g(),
      A(),
      x(),
      ut(),
      ft(),
      ge(),
      qe(),
      xn(),
      Gt(),
      mt(),
      En(),
      Bn(),
      Ft(),
      Mt(),
      $n(),
      ($ = d()));
  }))();
}
function sr(e, t) {
  if (t !== `available`)
    return t === `loading`
      ? e.formatMessage({
          id: `pullRequestRevision.checking`,
          defaultMessage: `Checking review availability…`,
          description: `Status while checking exact-revision review support`,
        })
      : e.formatMessage({
          id: `pullRequestRevision.cliRequired`,
          defaultMessage: `Exact-revision review requires GitHub CLI signed in to this GitHub account on the selected host. The GitHub connector does not yet provide fixed-revision comparisons.`,
          description: `Explains why a connector-backed pull request cannot open an immutable code review`,
        });
}
function cr() {
  return (cr = e(() => {}))();
}
export {
  Vn as a,
  An as c,
  on as d,
  fn as f,
  or as i,
  pn as l,
  cr as n,
  Kn as o,
  er as r,
  Dn as s,
  sr as t,
  gn as u,
};
//# sourceMappingURL=revision-review-unavailable-message-fb159f3486a9.js.map
