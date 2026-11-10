import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $S as r,
  $nt as i,
  AD as a,
  BR as o,
  CS as s,
  Cot as c,
  Cz as l,
  FD as u,
  G$ as d,
  GE as f,
  IDt as p,
  Ixt as m,
  K$ as h,
  LR as g,
  Mz as _,
  ND as v,
  Nz as y,
  OD as b,
  Pxt as x,
  Tz as S,
  VDt as C,
  Vxt as w,
  WE as T,
  Wnt as E,
  Zxt as D,
  _Mt as O,
  _lt as k,
  aj as A,
  bz as j,
  cE as M,
  cz as N,
  gMt as P,
  i3 as F,
  irt as I,
  jDt as L,
  nE as R,
  nSt as z,
  oj as ee,
  r3 as B,
  rst as V,
  srt as H,
  sz as U,
  t3 as W,
  uE as te,
  vzt as G,
  wot as K,
  xMt as q,
  xz as ne,
  yzt as J,
  zxt as Y,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as X,
  Agt as re,
  Ahr as Z,
  Bht as ie,
  Cwr as Q,
  Gvt as ae,
  Hvt as oe,
  J$n as se,
  JPn as ce,
  KIr as le,
  LEr as ue,
  Mhr as de,
  Ohr as fe,
  Tvt as pe,
  Vht as me,
  X$n as he,
  XPn as ge,
  _an as _e,
  _fn as ve,
  ban as ye,
  bgt as be,
  bnt as xe,
  dEr as Se,
  fEr as Ce,
  gwr as we,
  iyt as Te,
  jCn as Ee,
  khr as De,
  kvt as Oe,
  lLr as ke,
  ltt as Ae,
  m_r as je,
  n4n as Me,
  ogt as Ne,
  ott as Pe,
  pEr as Fe,
  q$n as Ie,
  r4n as Le,
  ryt as Re,
  stt as ze,
  van as Be,
  wvt as Ve,
  xwr as He,
  ynt as Ue,
  yvt as We,
} from "./app-initial-5851df3f6cb1.js";
import { a as Ge, i as Ke } from "./codex-diff-css-681a898586a0.js";
import {
  C as qe,
  S as Je,
  _ as Ye,
  a as Xe,
  b as Ze,
  c as Qe,
  d as $e,
  f as et,
  g as tt,
  h as nt,
  i as rt,
  l as it,
  m as at,
  n as ot,
  p as st,
  r as ct,
  s as lt,
  u as ut,
  v as dt,
  x as ft,
  y as pt,
} from "./review-file-tree-pane-3e66effc6a6c.js";
import { i as mt, r as ht, s as gt } from "./use-diff-annotations-1d5c03397aea.js";
import { n as _t, t as vt } from "./virtualized-file-diff-line-position-cb3b3529be70.js";
import { i as yt, n as bt, t as xt } from "./pull-request-revision-queries-a3209df8cd9d.js";
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
} from "./pull-request-code-review-navigation-1eeff0187c2d.js";
import { a as Wt, i as Gt } from "./pull-request-detail-model-e2eec982b891.js";
import { n as Kt, t as qt } from "./arrow-curved-right-bc11e9b2085c.js";
import { r as Jt, t as Yt } from "./scroll-to-match-701662e58079.js";
import { i as Xt, n as Zt, r as Qt, t as $t } from "./code-diff-628be5db9fe9.js";
import { n as en, t as tn } from "./split-view-9cde6d2314a9.js";
import { a as nn, c as rn, o as an } from "./review-source-dropdown-516906020f92.js";
function on(e) {
  let t = (0, cn.c)(45),
    n,
    r,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]))
    : (({ ref: o, bottomInset: n, children: r, disableScrollAnchoring: c, isFileTreeOpen: a, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  let l = c !== void 0 && c,
    d = (0, ln.useContext)(Se),
    f = (0, ln.useRef)(null),
    p = i(k.codeFontSize),
    [m] = (0, ln.useState)(sn);
  S();
  let h;
  t[7] === p ? (h = t[8]) : ((h = $e(p)), (t[7] = p), (t[8] = h));
  let g = h,
    [_, v] = (0, ln.useState)(null),
    y;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (e) => {
        if (e == null) return;
        let t = ut(e);
        v((e) => (e != null && it(e, t) ? e : t));
      }),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e, t) => {
        b(t);
      }),
      (t[10] = x))
    : (x = t[10]),
    u(x));
  let C;
  t[11] !== d || t[12] !== m
    ? ((C = (e) => {
        if ((f.current?.(), (f.current = null), e != null)) {
          (m.getRoot() != null && m.getRoot() !== e && m.cleanUp(), me(e, m), m.setup(e), m.resume());
          return;
        }
        d == null ? m.cleanUp() : (m.suspend(), (f.current = Ce(d, () => m.cleanUp())));
      }),
      (t[11] = d),
      (t[12] = m),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T;
  t[14] !== o || t[15] !== w ? ((T = ee(o, w)), (t[14] = o), (t[15] = w), (t[16] = T)) : (T = t[16]);
  let E = T,
    D;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, un.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute h-0 w-0 overflow-hidden`,
        dangerouslySetInnerHTML: { __html: dn },
      })),
      (t[17] = D))
    : (D = t[17]);
  let O = n !== `composer` && (n === `actions` ? `pb-16` : `pb-3`),
    A = l && `[overflow-anchor:none]`,
    j;
  t[18] !== O || t[19] !== A
    ? ((j = P(
        `electron:bg-surface flex h-full min-w-0 flex-1 scroll-pt-[var(--pane-overlay-header-height,0px)] flex-col overflow-x-hidden overflow-y-auto`,
        O,
        A,
      )),
      (t[18] = O),
      (t[19] = A),
      (t[20] = j))
    : (j = t[20]);
  let M;
  t[21] === n
    ? (M = t[22])
    : ((M = n === `composer` ? { paddingBottom: Pe } : void 0), (t[21] = n), (t[22] = M));
  let N = a ? `extension:pe-1` : `extension:pe-3`,
    F;
  t[23] === N
    ? (F = t[24])
    : ((F = P(`flex w-full flex-col pt-[var(--pane-overlay-header-height,0px)] extension:ps-4`, N)),
      (t[23] = N),
      (t[24] = F));
  let I;
  t[25] === n
    ? (I = t[26])
    : ((I =
        n === `composer` ? { paddingTop: `calc(var(--pane-overlay-header-height, 0px) + ${ze})` } : void 0),
      (t[25] = n),
      (t[26] = I));
  let L = _ ?? g,
    R;
  t[27] !== r || t[28] !== L ? ((R = r(L)), (t[27] = r), (t[28] = L), (t[29] = R)) : (R = t[29]);
  let z;
  t[30] === R
    ? (z = t[31])
    : ((z = (0, un.jsx)(`div`, { className: `flex flex-col extension:gap-2`, children: R })),
      (t[30] = R),
      (t[31] = z));
  let B;
  t[32] !== F || t[33] !== I || t[34] !== z
    ? ((B = (0, un.jsxs)(`div`, { className: F, style: I, children: [null, z] })),
      (t[32] = F),
      (t[33] = I),
      (t[34] = z),
      (t[35] = B))
    : (B = t[35]);
  let V;
  t[36] !== E || t[37] !== s || t[38] !== j || t[39] !== M || t[40] !== B
    ? ((V = (0, un.jsxs)(`div`, {
        className: `relative flex h-full min-w-0 flex-1`,
        children: [D, (0, un.jsx)(`div`, { ...s, ref: E, className: j, style: M, children: B })],
      })),
      (t[36] = E),
      (t[37] = s),
      (t[38] = j),
      (t[39] = M),
      (t[40] = B),
      (t[41] = V))
    : (V = t[41]);
  let H;
  return (
    t[42] !== V || t[43] !== m
      ? ((H = (0, un.jsx)(Ke.Provider, { value: m, children: V })), (t[42] = V), (t[43] = m), (t[44] = H))
      : (H = t[44]),
    H
  );
}
function sn() {
  return new ke({ intersectionObserverMargin: 1e3 });
}
var cn, ln, un, dn;
function fn() {
  return (fn = e(() => {
    ((cn = G()),
      le(),
      Ge(),
      Te(),
      O(),
      V(),
      (ln = J()),
      Fe(),
      l(),
      v(),
      E(),
      Ae(),
      A(),
      et(),
      ie(),
      (un = q()),
      (dn = Re(`complete`)));
  }))();
}
function pn(e) {
  let t = (0, mn.c)(20),
    { sourceControls: n, sourceDetails: i, actions: a, selectedCommitSubject: o } = e,
    s = C(),
    c;
  t[0] === n ? (c = t[1]) : ((c = { id: `source`, content: n, allowShrink: !0 }), (t[0] = n), (t[1] = c));
  let l;
  t[2] === i ? (l = t[3]) : ((l = { id: `branch`, content: i, allowShrink: !0 }), (t[2] = i), (t[3] = l));
  let u;
  t[4] !== c || t[5] !== l ? ((u = [c, l]), (t[4] = c), (t[5] = l), (t[6] = u)) : (u = t[6]);
  let d;
  t[7] !== a || t[8] !== s
    ? ((d =
        a == null
          ? null
          : (0, hn.jsx)(M, {
              label: s.formatMessage({
                id: `codex.review.header.controls`,
                defaultMessage: `Changes controls`,
                description: `Accessible label for the floating controls in the Changes tab showing local diffs`,
              }),
              children: a,
            })),
      (t[7] = a),
      (t[8] = s),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === d ? (f = t[11]) : ((f = [{ id: `actions`, content: d }]), (t[10] = d), (t[11] = f));
  let p;
  t[12] !== u || t[13] !== f
    ? ((p = (0, hn.jsx)(r, { density: `compact`, layout: `wrap-leading`, leading: u, trailing: f })),
      (t[12] = u),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] === o
    ? (m = t[16])
    : ((m = (0, hn.jsx)(`div`, {
        className: `pointer-events-auto flex w-fit max-w-full px-2 pb-2 empty:hidden`,
        children: o,
      })),
      (t[15] = o),
      (t[16] = m));
  let h;
  return (
    t[17] !== p || t[18] !== m
      ? ((h = (0, hn.jsxs)(`div`, {
          className: `@container/review-header pointer-events-none min-w-0 text-codex-description`,
          "data-viewer-density": `compact`,
          children: [p, m],
        })),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var mn, hn;
function gn() {
  return (gn = e(() => {
    ((mn = G()), L(), s(), (hn = q()));
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
      ? ((a = (0, yn.jsx)(p, {
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
    ((vn = G()),
      L(),
      (yn = q()),
      (bn =
        /Could not resolve to a Repository with the name '(?<repository>[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)'/u));
  }))();
}
function Sn(e) {
  let t = (0, Cn.c)(34),
    { request: n, onRefresh: r, isRefreshing: i } = e,
    a = m(we),
    o = C(),
    s = w(We),
    c = Y(Nt, n),
    [l, u] = (0, wn.useState)(!0),
    f = Xt(u, `pull-request-review`),
    p;
  t[0] !== o || t[1] !== c
    ? ((p = c
        ? o.formatMessage({
            id: `pullRequestsPage.codeReview.hideFileTree`,
            defaultMessage: `Hide file tree`,
            description: `Tooltip to hide the pull request code review file tree`,
          })
        : o.formatMessage({
            id: `pullRequestsPage.codeReview.showFileTree`,
            defaultMessage: `Show file tree`,
            description: `Tooltip to show the pull request code review file tree`,
          })),
      (t[0] = o),
      (t[1] = c),
      (t[2] = p))
    : (p = t[2]);
  let h = p,
    g;
  t[3] !== l || t[4] !== f
    ? ((g = () => {
        f(!l);
      }),
      (t[3] = l),
      (t[4] = f),
      (t[5] = g))
    : (g = t[5]);
  let v = r != null,
    y;
  t[6] !== l || t[7] !== i || t[8] !== r || t[9] !== g || t[10] !== v
    ? ((y = (0, Tn.jsx)(an, {
        expanded: l,
        onRefreshGitQueries: r,
        onToggleExpanded: g,
        showHideImports: !1,
        showHideWhitespace: !1,
        showLoadFullFiles: !1,
        showRefreshGitQueries: v,
        refreshGitQueriesDisabled: i,
      })),
      (t[6] = l),
      (t[7] = i),
      (t[8] = r),
      (t[9] = g),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] === a
    ? (b = t[13])
    : ((b = (e) => {
        a.set(We, e);
      }),
      (t[12] = a),
      (t[13] = b));
  let x;
  t[14] !== s || t[15] !== b
    ? ((x = (0, Tn.jsx)(nn, { diffMode: s, onSelectDiffMode: b })), (t[14] = s), (t[15] = b), (t[16] = x))
    : (x = t[16]);
  let S = c ? `selected` : `default`,
    T;
  t[17] !== c || t[18] !== n || t[19] !== a
    ? ((T = () => {
        Ct(a, n, !c);
      }),
      (t[17] = c),
      (t[18] = n),
      (t[19] = a),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Tn.jsx)(_, { "aria-hidden": !1, asset: d })), (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== h || t[23] !== c || t[24] !== S || t[25] !== T
    ? ((D = (0, Tn.jsx)(R, {
        "aria-label": h,
        "aria-pressed": c,
        variant: S,
        uniform: !0,
        onClick: T,
        children: E,
      })),
      (t[22] = h),
      (t[23] = c),
      (t[24] = S),
      (t[25] = T),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== h || t[28] !== D
    ? ((O = (0, Tn.jsx)(U, { tooltipContent: h, delayOpen: !0, children: D })),
      (t[27] = h),
      (t[28] = D),
      (t[29] = O))
    : (O = t[29]);
  let k;
  return (
    t[30] !== O || t[31] !== y || t[32] !== x
      ? ((k = (0, Tn.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [y, x, O] })),
        (t[30] = O),
        (t[31] = y),
        (t[32] = x),
        (t[33] = k))
      : (k = t[33]),
    k
  );
}
var Cn, wn, Tn;
function En() {
  return (En = e(() => {
    ((Cn = G()), h(), x(), (wn = J()), L(), y(), N(), Ve(), Qt(), rn(), Q(), s(), Mt(), (Tn = q()));
  }))();
}
function Dn(e) {
  let t = (0, On.c)(13),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ diff: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = m(c),
    a = w(pe),
    o = w(Oe),
    s = n.metadata.additionLines ? `line-info` : `metadata`,
    l;
  t[3] !== i || t[4] !== o
    ? ((l = () => {
        i.set(Oe, !o);
      }),
      (t[3] = i),
      (t[4] = o),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== n || t[7] !== r || t[8] !== a || t[9] !== s || t[10] !== l || t[11] !== o
      ? ((u = (0, kn.jsx)($t, {
          ...r,
          containerClassName: `extension:rounded-lg extension:[--codex-diffs-surface-override:var(--color-codex-diff-surface)]`,
          diff: n,
          diffViewWrap: o,
          headerVariant: `full-review`,
          hunkSeparators: s,
          onToggleWrap: l,
          richPreviewEnabled: a,
          roundedCorners: !1,
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = a),
        (t[9] = s),
        (t[10] = l),
        (t[11] = o),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
var On, kn;
function An() {
  return (An = e(() => {
    ((On = G()), x(), Zt(), Ve(), K(), (kn = q()));
  }))();
}
var jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((jn = t(ve(), 1)),
      x(),
      Xe(),
      Ue(),
      Q(),
      H(),
      Mt(),
      bt(),
      (Mn = D(we, (e, { get: t }) => {
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
          queryKey: I(`gh-pr-gitattributes`, i ?? void 0),
          queryFn: ({ signal: e }) => {
            if (i == null) throw Error(`Pull request diff unavailable`);
            return xe(`gh-pr-gitattributes`, i, { signal: e, source: `pull_requests_page` });
          },
          staleTime: (e) => (e.state.data?.status === `success` ? 1 / 0 : 0),
        };
      })),
      (Nn = z(we, (e, { get: t }) => {
        let n = t(Mn, e).data;
        return n?.status === `success`
          ? (0, jn.default)(n.files, (e) => e.basePath.length, `desc`).map(({ basePath: e, contents: t }) =>
              rt(t, { basePath: e || null }),
            )
          : void 0;
      })),
      (Pn = z(we, ({ request: e, path: t }, { get: n }) => {
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
      canWrite: r,
      commentAuthorAvatarUrl: i,
      commentAuthorLabel: a,
      cwd: o,
      diffMode: s,
      file: c,
      hostConfig: l,
      path: u,
      reviewDiffMetrics: d,
      renderReadonlyComment: f,
      renderReadonlyCommentBody: h,
      onRequestChanges: g,
    } = e,
    _ = r === void 0 || r,
    v = m(we),
    y = C(),
    b;
  t[0] !== n || t[1] !== v
    ? ((b = `comparison` in n && v.value.routeKind !== `chatgpt-thread` ? He(v.value) : null),
      (t[0] = n),
      (t[1] = v),
      (t[2] = b))
    : (b = t[2]);
  let x = b,
    S;
  t[3] === n
    ? (S = t[4])
    : ((S =
        `comparison` in n
          ? JSON.stringify([
              fe(n.account),
              De(n.pullRequest),
              n.comparison.baseRevision,
              n.comparison.headRevision,
            ])
          : null),
      (t[3] = n),
      (t[4] = S));
  let w;
  t[5] !== x || t[6] !== u || t[7] !== S
    ? ((w = { conversationId: x, path: u, pullRequestReviewKey: S }),
      (t[5] = x),
      (t[6] = u),
      (t[7] = S),
      (t[8] = w))
    : (w = t[8]);
  let E = w,
    D = Y(Be, E),
    O = _ || x != null,
    k;
  t[9] !== u || t[10] !== n
    ? ((k = { path: u, request: n }), (t[9] = u), (t[10] = n), (t[11] = k))
    : (k = t[11]);
  let A = Y(Rt, k),
    j;
  t[12] !== u || t[13] !== n
    ? ((j = { path: u, request: n }), (t[12] = u), (t[13] = n), (t[14] = j))
    : (j = t[14]);
  let M = Y(Ot, j),
    N;
  t[15] !== u || t[16] !== n
    ? ((N = { path: u, request: n }), (t[15] = u), (t[16] = n), (t[17] = N))
    : (N = t[17]);
  let P = Y(At, N),
    F;
  t[18] !== u || t[19] !== n
    ? ((F = { path: u, request: n }), (t[18] = u), (t[19] = n), (t[20] = F))
    : (F = t[20]);
  let I = Y(jt, F),
    L;
  t[21] !== u || t[22] !== n
    ? ((L = { request: n, path: u }), (t[21] = u), (t[22] = n), (t[23] = L))
    : (L = t[23]);
  let R = Y(Pn, L),
    [z, ee] = (0, Rn.useState)(),
    B;
  t[24] === u ? (B = t[25]) : ((B = { path: u }), (t[24] = u), (t[25] = B));
  let V = qe(B),
    H;
  if (t[26] !== y || t[27] !== u || t[28] !== n || t[29] !== v || t[30] !== I) {
    let e;
    (t[32] !== y || t[33] !== u || t[34] !== n || t[35] !== v
      ? ((e = (e) => {
          let { error: t, submissionKey: r } = e;
          return (0, zn.jsx)(
            `div`,
            {
              className: `mx-1`,
              children: (0, zn.jsx)(T, {
                content:
                  t instanceof Error
                    ? t.message
                    : y.formatMessage({
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
                  Vt(v, n, u, r);
                },
                primaryCtaText: (0, zn.jsx)(p, {
                  id: `pullRequestDetail.code.retryComment`,
                  defaultMessage: `Retry`,
                  description: `Action to retry a failed pull request code comment`,
                }),
              }),
            },
            `${r.revision}:${r.commentKey}`,
          );
        }),
        (t[32] = y),
        (t[33] = u),
        (t[34] = n),
        (t[35] = v),
        (t[36] = e))
      : (e = t[36]),
      (H = I.map(e)),
      (t[26] = y),
      (t[27] = u),
      (t[28] = n),
      (t[29] = v),
      (t[30] = I),
      (t[31] = H));
  } else H = t[31];
  let U = x ?? void 0,
    W = x == null ? A : D,
    te = `comparison` in n ? void 0 : M,
    G = x == null ? i : void 0,
    K = x == null ? a : void 0,
    q;
  t[37] !== x || t[38] !== O || t[39] !== E || t[40] !== u || t[41] !== n || t[42] !== v
    ? ((q = O
        ? (e, t) => {
            if (x != null) {
              ye(v, E, e);
              return;
            }
            St(v, n, u, e, t);
          }
        : void 0),
      (t[37] = x),
      (t[38] = O),
      (t[39] = E),
      (t[40] = u),
      (t[41] = n),
      (t[42] = v),
      (t[43] = q))
    : (q = t[43]);
  let ne;
  t[44] !== _ || t[45] !== A || t[46] !== u || t[47] !== n || t[48] !== v
    ? ((ne = _
        ? (e) => {
            e.viewerCanReply !== !1 &&
              St(
                v,
                n,
                u,
                [
                  ...A,
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
      (t[44] = _),
      (t[45] = A),
      (t[46] = u),
      (t[47] = n),
      (t[48] = v),
      (t[49] = ne))
    : (ne = t[49]);
  let J = `comparison` in n,
    X;
  t[50] !== c || t[51] !== n || t[52] !== v
    ? ((X = `comparison` in n ? xt(v, n, c) : void 0), (t[50] = c), (t[51] = n), (t[52] = v), (t[53] = X))
    : (X = t[53]);
  let re = z ?? (c.metadata.type !== `deleted` && !R),
    Z;
  t[54] !== o ||
  t[55] !== s ||
  t[56] !== O ||
  t[57] !== c ||
  t[58] !== l ||
  t[59] !== V ||
  t[60] !== g ||
  t[61] !== f ||
  t[62] !== h ||
  t[63] !== d ||
  t[64] !== P ||
  t[65] !== U ||
  t[66] !== W ||
  t[67] !== te ||
  t[68] !== G ||
  t[69] !== K ||
  t[70] !== q ||
  t[71] !== ne ||
  t[72] !== J ||
  t[73] !== X ||
  t[74] !== re
    ? ((Z = (0, zn.jsx)(Dn, {
        conversationId: U,
        cwd: o,
        diff: c,
        expandScope: `pull-request-review`,
        enableComments: O,
        comments: W,
        readonlyComments: te,
        renderReadonlyComment: f,
        renderReadonlyCommentBody: h,
        submittingCommentKeys: P,
        commentAuthorAvatarUrl: G,
        commentAuthorLabel: K,
        onCommentsChange: q,
        onOpenChange: ee,
        onPostRender: V,
        onRequestChanges: g,
        onReadonlyCommentReply: ne,
        hostConfig: l,
        loadFullContent: J,
        fullContentLoader: X,
        showPartialWhileLoadingFullContent: !0,
        open: re,
        metrics: d,
        stickyHeader: !0,
        viewType: s,
      })),
      (t[54] = o),
      (t[55] = s),
      (t[56] = O),
      (t[57] = c),
      (t[58] = l),
      (t[59] = V),
      (t[60] = g),
      (t[61] = f),
      (t[62] = h),
      (t[63] = d),
      (t[64] = P),
      (t[65] = U),
      (t[66] = W),
      (t[67] = te),
      (t[68] = G),
      (t[69] = K),
      (t[70] = q),
      (t[71] = ne),
      (t[72] = J),
      (t[73] = X),
      (t[74] = re),
      (t[75] = Z))
    : (Z = t[75]);
  let ie;
  return (
    t[76] !== H || t[77] !== Z
      ? ((ie = (0, zn.jsxs)(zn.Fragment, { children: [H, Z] })), (t[76] = H), (t[77] = Z), (t[78] = ie))
      : (ie = t[78]),
    ie
  );
}
var Ln, Rn, zn;
function Bn() {
  return (Bn = e(() => {
    ((Ln = G()), x(), (Rn = J()), L(), _e(), Je(), f(), An(), Q(), Z(), Mt(), Fn(), bt(), (zn = q()));
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
    { files: n, request: r, scrollContainerRef: i } = e,
    a = m(we),
    o,
    s;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
      ? ((o = () => {
          let e = (e) => document.getElementById(zt(a, r, e)),
            t = lt({
              contextId: `pull-request:${JSON.stringify(r)}`,
              getFiles: () => n.filter(Xn).map(Jn),
              scrollAdapter: {
                getFileContainer: e,
                scrollToFile: async (t, n) => {
                  if (n?.signal?.aborted) return;
                  Et(a, r, t);
                  let i = e(t);
                  (i?.querySelector(se.reviewFileToggleCollapsed)?.click(),
                    await Jt(),
                    !n?.signal?.aborted &&
                      (i?.scrollIntoView({ behavior: `auto`, block: `center` }), await Jt()));
                },
                scrollToLocation: async (t, n) => {
                  if (n?.signal?.aborted || t.hunkId === `path`) return;
                  let r = e(t.path),
                    a = i.current;
                  if (r == null || a == null) return;
                  let o = vt(r, t.lineStart, t.side);
                  o != null &&
                    (a.scrollTo({
                      behavior: `auto`,
                      top: Math.max(0, o.top - (a.clientHeight - o.height) / 2),
                    }),
                    await Jt());
                },
              },
            }),
            o = a.get(Ne);
          return (
            a.set(Ne, t),
            re(a, `diff`),
            () => {
              a.get(Ne) === t && a.set(Ne, o);
            }
          );
        }),
        (s = [n, r, a, i]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : ((o = t[4]), (s = t[5])),
    (0, Qn.useEffect)(o, s),
    null
  );
}
function Jn(e) {
  let t = Vn(e, o(e.metadata.name));
  return { ...t, hunks: t.hunks.filter(Yn) };
}
function Yn(e) {
  return e.hunkId !== `path`;
}
function Xn(e) {
  return !oe(e);
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Zn = G()), x(), (Qn = J()), he(), Qe(), Yt(), be(), ae(), _t(), Q(), g(), Ft(), Mt());
  }))();
}
function er(e) {
  let t = (0, ir.c)(118),
    {
      request: r,
      baseBranch: i,
      headRevision: s,
      headBranch: c,
      onRequestChanges: l,
      sourceControl: u,
      onRefresh: d,
      isRefreshing: f,
      renderSlots: h,
    } = e,
    g = h === void 0 ? a : h,
    _ = m(we),
    v = C(),
    y = w(Wt) && !(`comparison` in r),
    b;
  t[0] !== f || t[1] !== d || t[2] !== r
    ? ((b = (0, $.jsx)(Sn, { request: r, onRefresh: d, isRefreshing: f })),
      (t[0] = f),
      (t[1] = d),
      (t[2] = r),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    S = w(We),
    T = Y(It, r),
    [E, D] = (0, ar.useState)(!1),
    O = Y(Bt, r),
    k = Y(wt, r),
    A = Y(kt, r),
    j = Y(Dt, r),
    M = Y(Nt, r),
    N = Y(Tt, r),
    P = r.account,
    F = Y(ue, P.hostId),
    I = (0, ar.useRef)(null),
    L;
  t[4] !== r || t[5] !== _
    ? ((L = (e) => {
        if (e == null) {
          (I.current != null && Ut(_, r, I.current.scrollTop), (I.current = null));
          return;
        }
        ((I.current = e), (e.scrollTop = _.get(Pt, r)));
      }),
      (t[4] = r),
      (t[5] = _),
      (t[6] = L))
    : (L = t[6]);
  let R = ne(L),
    z;
  t[7] === u
    ? (z = t[8])
    : ((z = u == null ? null : (0, $.jsx)(pn, { sourceControls: u, actions: null })), (t[7] = u), (t[8] = z));
  let ee = z,
    V;
  if (
    t[9] !== P ||
    t[10] !== T ||
    t[11] !== O?.length ||
    t[12] !== s ||
    t[13] !== E ||
    t[14] !== d ||
    t[15] !== g ||
    t[16] !== r.pullRequest ||
    t[17] !== x ||
    t[18] !== _ ||
    t[19] !== ee
  ) {
    V = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ee == null ? [] : [{ id: `review-pull-request-toolbar`, height: `content`, content: ee }];
      if (T?.isLoading === !0) {
        let n;
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(B, {})), (t[21] = n))
          : (n = t[21]);
        let r;
        (t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsxs)(`div`, {
              className: `flex h-full items-center justify-center`,
              role: `status`,
              children: [
                n,
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, $.jsx)(p, {
                    id: `pullRequestDetail.code.loading`,
                    defaultMessage: `Loading pull request changes`,
                    description: `Loading state for the pull request Code tab`,
                  }),
                }),
              ],
            })),
            (t[22] = r))
          : (r = t[22]),
          (V = g({ headerRows: e, content: r })));
        break bb0;
      }
      if (T?.data?.status !== `success` || T.data.headRevision !== s) {
        let i = T?.data?.status === `error` ? T.data.error : T?.error?.message,
          a;
        t[23] === i
          ? (a = t[24])
          : ((a =
              i != null &&
              [
                `GitHub did not provide a complete patch for every file`,
                `GitHub returned an incomplete file patch`,
                `GitHub cannot return all files in this pull request`,
                `GitHub did not return all files in the pull request`,
                `The pull request diff exceeds the size limit`,
                `This diff exceeds GitHub's size limit`,
                `diff exceeded the maximum number`,
              ].some((e) => i.includes(e))),
            (t[23] = i),
            (t[24] = a));
        let o = a,
          s = null;
        if (o) {
          let e;
          (t[25] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(p, {
                id: `pullRequestDetail.code.incompleteDiff`,
                defaultMessage: `GitHub couldn’t provide a complete diff. Review this pull request on GitHub or in a local checkout.`,
                description: `Explains that missing file patches or size limits prevent showing the complete pull request, and suggests reviewing on GitHub or in a local checkout`,
              })),
              (t[25] = e))
            : (e = t[25]),
            (s = e));
        } else if (T?.data?.status === `success`) {
          let e;
          (t[26] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(p, {
                id: `pullRequestDetail.code.stale`,
                defaultMessage: `The pull request changed while its diff was loading.`,
                description: `Error shown when a pull request diff revision is stale`,
              })),
              (t[26] = e))
            : (e = t[26]),
            (s = e));
        } else if (i != null) {
          let e;
          (t[27] !== P || t[28] !== i
            ? ((e = (0, $.jsx)(_n, { account: P, error: i })), (t[27] = P), (t[28] = i), (t[29] = e))
            : (e = t[29]),
            (s = e));
        }
        let c = d == null ? null : x,
          l;
        t[30] !== o || t[31] !== r.pullRequest
          ? ((l =
              o &&
              (0, $.jsx)(n, {
                color: `primary`,
                onClick: (e) => {
                  ge({
                    event: e,
                    href: de(r.pullRequest),
                    initiator: `pull_request_link`,
                    openAsWebsite: !0,
                  });
                },
                children: (0, $.jsx)(p, {
                  id: `pullRequestDetail.code.openIncompleteDiffInGitHub`,
                  defaultMessage: `Open in GitHub`,
                  description: `Opens the pull request on GitHub when its complete diff cannot be shown in Codex`,
                }),
              })),
            (t[30] = o),
            (t[31] = r.pullRequest),
            (t[32] = l))
          : (l = t[32]);
        let u = E || T?.isFetching === !0,
          f;
        t[33] !== P.hostId || t[34] !== T || t[35] !== _.queryClient
          ? ((f = () => {
              (D(!0),
                Le(_.queryClient, P.hostId)
                  .then(() => T?.refetch())
                  .finally(() => D(!1)));
            }),
            (t[33] = P.hostId),
            (t[34] = T),
            (t[35] = _.queryClient),
            (t[36] = f))
          : (f = t[36]);
        let m;
        t[37] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((m = (0, $.jsx)(p, {
              id: `pullRequestDetail.code.retry`,
              defaultMessage: `Try again`,
              description: `Action to retry loading a pull request diff`,
            })),
            (t[37] = m))
          : (m = t[37]);
        let h;
        t[38] !== f || t[39] !== u
          ? ((h = (0, $.jsx)(n, { color: `secondary`, loading: u, onClick: f, children: m })),
            (t[38] = f),
            (t[39] = u),
            (t[40] = h))
          : (h = t[40]);
        let v;
        t[41] !== h || t[42] !== c || t[43] !== l
          ? ((v = (0, $.jsxs)($.Fragment, { children: [c, l, h] })),
            (t[41] = h),
            (t[42] = c),
            (t[43] = l),
            (t[44] = v))
          : (v = t[44]);
        let y;
        t[45] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((y = (0, $.jsx)(p, {
              id: `pullRequestDetail.code.unavailable`,
              defaultMessage: `Changes unavailable`,
              description: `Error title for an unavailable pull request diff`,
            })),
            (t[45] = y))
          : (y = t[45]);
        let b;
        (t[46] !== v || t[47] !== s
          ? ((b = (0, $.jsx)(X, { className: `h-full`, actions: v, description: s, title: y })),
            (t[46] = v),
            (t[47] = s),
            (t[48] = b))
          : (b = t[48]),
          (V = g({ headerRows: e, content: b })));
        break bb0;
      }
      if (O?.length === 0) {
        let n = d == null ? null : x,
          r;
        t[49] === n ? (r = t[50]) : ((r = (0, $.jsx)($.Fragment, { children: n })), (t[49] = n), (t[50] = r));
        let i;
        t[51] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsx)(p, {
              id: `pullRequestDetail.code.empty`,
              defaultMessage: `No changed files`,
              description: `Empty state for a pull request without a diff`,
            })),
            (t[51] = i))
          : (i = t[51]);
        let a;
        (t[52] === r
          ? (a = t[53])
          : ((a = (0, $.jsx)(X, { className: `h-full`, actions: r, title: i })), (t[52] = r), (t[53] = a)),
          (V = g({ headerRows: e, content: a })));
        break bb0;
      }
    }
    ((t[9] = P),
      (t[10] = T),
      (t[11] = O?.length),
      (t[12] = s),
      (t[13] = E),
      (t[14] = d),
      (t[15] = g),
      (t[16] = r.pullRequest),
      (t[17] = x),
      (t[18] = _),
      (t[19] = ee),
      (t[20] = V));
  } else V = t[20];
  if (V !== Symbol.for(`react.early_return_sentinel`)) return V;
  let H;
  if (t[54] !== i || t[55] !== c || t[56] !== v) {
    let e = c?.trim() || null,
      n = i?.trim() || null;
    ((H = e ?? n),
      e != null &&
        n != null &&
        (H = v.formatMessage(
          {
            id: `pullRequestDetail.code.branchRange`,
            defaultMessage: `{headBranch} → {baseBranch}`,
            description: `Branch comparison in the pull request Code toolbar, from the pull request head branch into its base branch`,
          },
          { headBranch: e, baseBranch: n },
        )),
      (t[54] = i),
      (t[55] = c),
      (t[56] = v),
      (t[57] = H));
  } else H = t[57];
  let U, W;
  t[58] === _
    ? ((U = t[59]), (W = t[60]))
    : ((U = () => re(_, `diff`)), (W = () => re(_, `diff`)), (t[58] = _), (t[59] = U), (t[60] = W));
  let G;
  t[61] !== P.hostname ||
  t[62] !== P.login ||
  t[63] !== y ||
  t[64] !== S ||
  t[65] !== O ||
  t[66] !== F ||
  t[67] !== l ||
  t[68] !== r ||
  t[69] !== _
    ? ((G = (e) =>
        (O ?? []).map((t) => {
          let n = o(t.metadata.name);
          return (0, $.jsx)(
            `div`,
            {
              id: zt(_, r, n),
              ...Ie.reviewFile(n),
              children: (0, $.jsx)(In, {
                request: r,
                canWrite: y,
                commentAuthorAvatarUrl: gt(P.login, 48, P.hostname),
                commentAuthorLabel: P.login,
                cwd: null,
                diffMode: S,
                file: t,
                hostConfig: F,
                path: n,
                reviewDiffMetrics: e,
                renderReadonlyComment: y ? (e) => (0, $.jsx)(tr, { comment: e, request: r }) : void 0,
                renderReadonlyCommentBody: (e, t) =>
                  (0, $.jsx)(Ze, {
                    request: r,
                    allowBasicHtml: !0,
                    className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
                    cwd: null,
                    children: e,
                  }),
                onRequestChanges: l,
              }),
            },
            n,
          );
        })),
      (t[61] = P.hostname),
      (t[62] = P.login),
      (t[63] = y),
      (t[64] = S),
      (t[65] = O),
      (t[66] = F),
      (t[67] = l),
      (t[68] = r),
      (t[69] = _),
      (t[70] = G))
    : (G = t[70]);
  let K;
  t[71] !== M || t[72] !== R || t[73] !== U || t[74] !== W || t[75] !== G
    ? ((K = (0, $.jsx)(on, {
        ref: R,
        "data-pull-request-code-scroll": !0,
        disableScrollAnchoring: !0,
        isFileTreeOpen: M,
        onFocusCapture: U,
        onPointerDownCapture: W,
        children: G,
      })),
      (t[71] = M),
      (t[72] = R),
      (t[73] = U),
      (t[74] = W),
      (t[75] = G),
      (t[76] = K))
    : (K = t[76]);
  let q = K,
    J;
  t[77] !== r || t[78] !== _
    ? ((J = (e) => {
        Ht(_, r, e);
      }),
      (t[77] = r),
      (t[78] = _),
      (t[79] = J))
    : (J = t[79]);
  let Z;
  t[80] !== j || t[81] !== J
    ? ((Z = (0, $.jsx)(`div`, {
        className: `shrink-0 pt-2 pb-1`,
        children: (0, $.jsx)(st, {
          inputId: `pull-request-code-file-search`,
          searchQuery: j,
          onQueryChange: J,
        }),
      })),
      (t[80] = j),
      (t[81] = J),
      (t[82] = Z))
    : (Z = t[82]);
  let ie = A ?? void 0,
    Q;
  t[83] !== r || t[84] !== _
    ? ((Q = (e) => {
        (Et(_, r, e), document.getElementById(zt(_, r, e))?.scrollIntoView({ block: `start` }));
      }),
      (t[83] = r),
      (t[84] = _),
      (t[85] = Q))
    : (Q = t[85]);
  let ae;
  t[86] !== N || t[87] !== ie || t[88] !== Q || t[89] !== k
    ? ((ae = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(ot, {
          activePath: ie,
          commentCountByPath: N,
          cwd: null,
          entries: k,
          onSelectPath: Q,
        }),
      })),
      (t[86] = N),
      (t[87] = ie),
      (t[88] = Q),
      (t[89] = k),
      (t[90] = ae))
    : (ae = t[90]);
  let oe;
  t[91] !== Z || t[92] !== ae
    ? ((oe = (0, $.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col pt-[var(--pane-overlay-header-height,0px)]`,
        children: [Z, ae],
      })),
      (t[91] = Z),
      (t[92] = ae),
      (t[93] = oe))
    : (oe = t[93]);
  let se = oe,
    ce;
  t[94] !== H || t[95] !== u
    ? ((ce = u ?? (H == null ? null : (0, $.jsx)(te, { title: H }))), (t[94] = H), (t[95] = u), (t[96] = ce))
    : (ce = t[96]);
  let le;
  t[97] !== x || t[98] !== ce
    ? ((le = (0, $.jsx)(pn, { sourceControls: ce, actions: x })), (t[97] = x), (t[98] = ce), (t[99] = le))
    : (le = t[99]);
  let fe = le,
    pe;
  t[100] !== O || t[101] !== r
    ? ((pe = O == null ? null : (0, $.jsx)(qn, { files: O, request: r, scrollContainerRef: I })),
      (t[100] = O),
      (t[101] = r),
      (t[102] = pe))
    : (pe = t[102]);
  let me;
  t[103] !== r || t[104] !== _
    ? ((me = (e) => {
        Ct(_, r, e);
      }),
      (t[103] = r),
      (t[104] = _),
      (t[105] = me))
    : (me = t[105]);
  let he;
  t[106] !== q || t[107] !== se || t[108] !== M || t[109] !== me
    ? ((he = (0, $.jsx)(tn, {
        id: `pull-request-code-review-files-right`,
        className: `h-full min-h-0`,
        defaultLeftPercent: 76,
        drawerBreakpoint: 680,
        drawerMaxWidth: 360,
        drawerVisibleInset: 56,
        isRightOpen: M,
        left: q,
        minLeftWidth: 420,
        minRightWidth: 220,
        onRightOpenChange: me,
        right: se,
        rightClassName: `pe-4 ps-2`,
      })),
      (t[106] = q),
      (t[107] = se),
      (t[108] = M),
      (t[109] = me),
      (t[110] = he))
    : (he = t[110]);
  let _e;
  t[111] !== pe || t[112] !== he
    ? ((_e = (0, $.jsxs)($.Fragment, { children: [pe, he] })), (t[111] = pe), (t[112] = he), (t[113] = _e))
    : (_e = t[113]);
  let ve = _e,
    ye;
  return (
    t[114] !== ve || t[115] !== g || t[116] !== fe
      ? ((ye = g({
          headerRows: [{ id: `review-pull-request-toolbar`, height: `content`, content: fe }],
          content: ve,
        })),
        (t[114] = ve),
        (t[115] = g),
        (t[116] = fe),
        (t[117] = ye))
      : (ye = t[117]),
    ye
  );
}
function tr(e) {
  let t = (0, ir.c)(22),
    { comment: n, request: r } = e,
    i;
  t[0] !== n.reviewThreadId || t[1] !== r
    ? ((i = { request: r, threadId: n.reviewThreadId }), (t[0] = n.reviewThreadId), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a = Y(Lt, i);
  if (a != null) {
    let e;
    return (
      t[3] !== n || t[4] !== r.account || t[5] !== r.pullRequest || t[6] !== a
        ? ((e = (0, $.jsx)(nt, {
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
          ? (0, $.jsx)(p, {
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
        (0, $.jsx)(Ze, {
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
    { canReply: r, comment: i, request: a } = e,
    [o, s] = (0, ar.useState)(!1),
    c =
      i.reviewThreadId != null &&
      (i.isResolved === !0 ? i.viewerCanUnresolve === !0 : i.viewerCanResolve === !0);
  if (!r && !c) return null;
  if (o && i.reviewThreadId != null) {
    let e, n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          s(!1);
        }),
        (n = () => {
          s(!1);
        }),
        (t[0] = e),
        (t[1] = n))
      : ((e = t[0]), (n = t[1]));
    let r;
    return (
      t[2] !== i.authorLogin || t[3] !== i.reviewThreadId || t[4] !== a.account || t[5] !== a.pullRequest
        ? ((r = (0, $.jsx)(`div`, {
            className: `w-full ps-6.5`,
            children: (0, $.jsx)(Ye, {
              account: a.account,
              pullRequest: a.pullRequest,
              replyToAuthorLogin: i.authorLogin,
              replyToReviewThreadId: i.reviewThreadId,
              source: `pull_requests_page`,
              onCancel: e,
              onSuccess: n,
            }),
          })),
          (t[2] = i.authorLogin),
          (t[3] = i.reviewThreadId),
          (t[4] = a.account),
          (t[5] = a.pullRequest),
          (t[6] = r))
        : (r = t[6]),
      r
    );
  }
  let l;
  t[7] === r
    ? (l = t[8])
    : ((l = r
        ? (0, $.jsxs)(n, {
            color: `ghost`,
            size: `default`,
            onClick: () => {
              s(!0);
            },
            children: [
              (0, $.jsx)(qt, { "aria-hidden": !0, className: `icon-sm` }),
              (0, $.jsx)(`span`, {
                className: `ps-1`,
                children: (0, $.jsx)(p, {
                  id: `pullRequestsPage.codeReview.comment.reply`,
                  defaultMessage: `Reply`,
                  description: `Action button shown on a pull request review comment in the code review tab`,
                }),
              }),
            ],
          })
        : null),
      (t[7] = r),
      (t[8] = l));
  let u;
  t[9] !== c || t[10] !== i.isResolved || t[11] !== i.reviewThreadId || t[12] !== a
    ? ((u =
        c && i.reviewThreadId != null
          ? (0, $.jsx)(dt, {
              account: a.account,
              action: i.isResolved === !0 ? `unresolve` : `resolve`,
              pullRequest: a.pullRequest,
              reviewThreadId: i.reviewThreadId,
              source: `pull_requests_page`,
            })
          : null),
      (t[9] = c),
      (t[10] = i.isResolved),
      (t[11] = i.reviewThreadId),
      (t[12] = a),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== l || t[15] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex w-full items-start gap-2 ps-8.5`,
          role: `presentation`,
          onClick: rr,
          children: [l, u],
        })),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function rr(e) {
  (e.preventDefault(), e.stopPropagation());
}
var ir, ar, $;
function or() {
  return (or = e(() => {
    ((ir = G()),
      x(),
      (ar = J()),
      L(),
      he(),
      b(),
      be(),
      W(),
      ce(),
      Ee(),
      F(),
      en(),
      Ve(),
      at(),
      Kt(),
      Me(),
      fn(),
      ct(),
      gn(),
      Q(),
      je(),
      g(),
      j(),
      s(),
      tt(),
      pt(),
      Z(),
      ft(),
      xn(),
      Gt(),
      mt(),
      En(),
      Bn(),
      Ft(),
      Mt(),
      $n(),
      ($ = q()));
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
//# sourceMappingURL=revision-review-unavailable-message-bffc7746871f.js.map
