import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  AR as i,
  CO as a,
  Cot as o,
  Cz as s,
  DDt as c,
  Eht as l,
  FR as u,
  HNt as d,
  IDt as f,
  Ixt as p,
  Jbt as m,
  LR as h,
  Pxt as g,
  Rxt as _,
  TO as v,
  Tk as y,
  Tz as b,
  VDt as x,
  VR as S,
  Vxt as C,
  Zxt as w,
  _wt as T,
  aSt as E,
  b0 as D,
  bz as O,
  fwt as k,
  ght as A,
  gwt as j,
  jDt as M,
  nSt as N,
  oot as P,
  pwt as F,
  qft as ee,
  rst as I,
  t3 as L,
  vzt as R,
  wk as z,
  wot as B,
  xMt as V,
  xz as H,
  y0 as U,
  yzt as W,
  zxt as G,
} from "./app-shared-bbfeca5e5737.js";
import {
  A_t as te,
  Ahr as ne,
  Aht as re,
  Avt as ie,
  BCr as ae,
  B_t as oe,
  Bd as se,
  Bhr as ce,
  CVt as le,
  Cht as K,
  Cwr as q,
  Dht as ue,
  EJ as de,
  EVt as fe,
  Eq as pe,
  Fht as me,
  Gir as he,
  H3n as ge,
  I3n as _e,
  IVt as ve,
  I_t as ye,
  Iht as be,
  Iwr as xe,
  J3n as Se,
  Kir as Ce,
  LEr as J,
  L_ as we,
  Lht as Te,
  M3n as Ee,
  M_t as De,
  Mvt as Oe,
  N3n as ke,
  Nvt as Ae,
  OCn as je,
  OTr as Me,
  Oht as Ne,
  Qtt as Pe,
  RCr as Fe,
  REr as Ie,
  Rht as Le,
  TJ as Re,
  TVt as ze,
  Tq as Be,
  Vd as Ve,
  Xvt as He,
  Yvt as Ue,
  Ywt as We,
  Z_t as Ge,
  _8n as Ke,
  _Vt as qe,
  aBt as Je,
  aTt as Ye,
  a_t as Xe,
  aar as Ze,
  axn as Qe,
  ayt as $e,
  c7n as et,
  c_t as tt,
  dxn as nt,
  eTt as rt,
  ear as it,
  ent as at,
  ewn as ot,
  f_t as st,
  far as ct,
  gvt as lt,
  gwr as ut,
  hp as dt,
  hvt as ft,
  iBt as pt,
  iTt as mt,
  ivt as ht,
  j3n as gt,
  jTr as _t,
  jvt as vt,
  kCn as yt,
  kht as bt,
  lDn as xt,
  lxn as St,
  mp as Ct,
  nTt as wt,
  n_t as Tt,
  o8n as Et,
  oFr as Dt,
  oTt as Ot,
  ovt as kt,
  par as At,
  q3n as jt,
  qir as Mt,
  qwr as Nt,
  rTt as Pt,
  r_t as Ft,
  rar as It,
  s7n as Lt,
  sFr as Rt,
  sTt as zt,
  syt as Bt,
  tDn as Vt,
  tTt as Ht,
  tar as Ut,
  tvt as Wt,
  twn as Gt,
  u7n as Kt,
  uDn as qt,
  uar as Jt,
  v8n as Yt,
  vVt as Xt,
  wVt as Zt,
  xwr as Qt,
  zVt as $t,
  z_ as en,
} from "./app-initial-5851df3f6cb1.js";
import { Uh as tn, Wh as nn } from "./app-primary-fe8a450b3b04.js";
import { n as rn, r as an, t as on } from "./workspace-directory-entries-query-380a93ae197a.js";
import {
  a as sn,
  g as cn,
  h as ln,
  m as un,
  n as dn,
  o as fn,
  p as pn,
  r as mn,
} from "./review-file-tree-pane-3e66effc6a6c.js";
import { i as hn, r as gn } from "./use-diff-annotations-1d5c03397aea.js";
import { n as _n, t as vn } from "./review-preferences-model-4ff078b4c04e.js";
import { f as yn, u as bn } from "./pull-request-actions-fc24d58eda26.js";
import { a as xn, i as Sn } from "./pull-request-detail-model-e2eec982b891.js";
import { n as Cn, t as wn } from "./use-conversation-diff-comments-4ddc9aaa442f.js";
import { n as Tn, r as En, t as Dn } from "./base-file-tree-1123b9ab610d.js";
import { n as On, t as kn } from "./filter-alt-6d08a143861e.js";
var An;
function jn() {
  return (jn = e(() => {
    (g(),
      Re(),
      B(),
      (An = N(o, (e, { get: t }) => {
        let n = t(de, e);
        if (n.isError) return { type: `error` };
        if (n.isPending) return { type: `loading` };
        let r = n.data?.details;
        return n.data != null && r == null
          ? { type: `loading` }
          : r == null
            ? { type: `not-found` }
            : { type: `success`, data: r };
      })));
  }))();
}
function Mn(e) {
  let t = (0, Nn.c)(13),
    {
      commentAttachment: n,
      hostId: r,
      isFixActive: i,
      metadataAccessory: a,
      pullRequest: o,
      pullRequestComment: s,
      workspaceRequest: c,
    } = e,
    l = i !== void 0 && i,
    u = C(xn),
    d;
  t[0] !== r || t[1] !== o.hostname
    ? ((d = { hostId: r, hostname: o.hostname, provider: `github-cli`, source: `pull_request_board` }),
      (t[0] = r),
      (t[1] = o.hostname),
      (t[2] = d))
    : (d = t[2]);
  let p;
  t[3] === u ? (p = t[4]) : ((p = { enabled: u }), (t[3] = u), (t[4] = p));
  let { data: m } = G(Pe, d, p),
    h;
  return (
    t[5] !== n || t[6] !== m || t[7] !== l || t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== c
      ? ((h =
          s == null
            ? (0, Pn.jsx)(gn, {
                comment: n,
                createdAt: n.createdAt,
                defaultCollapsed: n.isResolved === !0,
                headerAccessory:
                  n.isResolved === !0
                    ? (0, Pn.jsx)(f, {
                        id: `pullRequestDetail.comment.resolved`,
                        defaultMessage: `Resolved`,
                        description: `Status shown on a resolved pull request code review thread`,
                      })
                    : void 0,
                metadataAccessory: a,
                replies: n.replies,
                url: n.url,
              })
            : (0, Pn.jsx)(ln, {
                account: m?.status === `success` ? m.account : null,
                comment: s,
                commentAttachment: n,
                inline: !0,
                isFixActive: l,
                metadataAccessory: a,
                pullRequest: o,
                source: `pull_request_board`,
                workspaceRequest: c,
              })),
        (t[5] = n),
        (t[6] = m),
        (t[7] = l),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((Nn = R()), g(), M(), hn(), cn(), at(), Sn(), (Pn = V()));
  }))();
}
function In(e) {
  let t = (0, Ln.c)(38),
    {
      attachmentConversationId: n,
      conversationId: r,
      enablePullRequestComments: i,
      localConversationId: a,
    } = e,
    o = i === void 0 || i,
    s = p(ut).value.routeKind !== `other`,
    c = s && o,
    { comments: l, modelComments: u, setComments: d } = Cn(r, a, n),
    f = String(r),
    h;
  t[0] === f ? (h = t[1]) : ((h = m(f)), (t[0] = f), (t[1] = h));
  let g = h,
    _ = G(Et, g),
    v = G(Ke, g),
    y = C(s ? ht : null),
    b = s ? (y ?? _) : null,
    x = Rt(v ?? `local`),
    S = C(s ? Ge : null)?.data?.root ?? null,
    w;
  t[2] !== g || t[3] !== x.id || t[4] !== S
    ? ((w = { conversationId: g, hostId: x.id, root: S }), (t[2] = g), (t[3] = x.id), (t[4] = S), (t[5] = w))
    : (w = t[5]);
  let T = G($t, w),
    E = c && b != null,
    D;
  t[6] === E ? (D = t[7]) : ((D = { enabled: E }), (t[6] = E), (t[7] = D));
  let { data: O } = nn(b, x, `diff_comment_sources`, D),
    k;
  t[8] !== T || t[9] !== O
    ? ((k = O?.trim() || T?.trim() || ``), (t[8] = T), (t[9] = O), (t[10] = k))
    : (k = t[10]);
  let A = k,
    j = v ?? void 0,
    M;
  t[11] !== A || t[12] !== b || t[13] !== j
    ? ((M = { cwd: b, headBranch: A, hostId: j, operationSource: `diff_comment_sources` }),
      (t[11] = A),
      (t[12] = b),
      (t[13] = j),
      (t[14] = M))
    : (M = t[14]);
  let N = G(An, M),
    P;
  t[15] !== N.data || t[16] !== N.type
    ? ((P = N.type === `success` ? ce(N.data.url ?? N.data.boardItem?.url ?? ``) : null),
      (t[15] = N.data),
      (t[16] = N.type),
      (t[17] = P))
    : (P = t[17]);
  let F = P,
    I;
  t[18] !== v || t[19] !== A || t[20] !== N.data || t[21] !== N.type || t[22] !== b
    ? ((I =
        b != null && A.length > 0 && N.type === `success`
          ? { cwd: ee(b), headBranch: A, hostId: v ?? void 0, number: N.data.number, repo: N.data.repo }
          : null),
      (t[18] = v),
      (t[19] = A),
      (t[20] = N.data),
      (t[21] = N.type),
      (t[22] = b),
      (t[23] = I))
    : (I = t[23]);
  let L = I,
    R = c && N.type === `success` ? N.data.commentAttachments : void 0,
    z;
  t[24] !== v || t[25] !== F || t[26] !== c || t[27] !== N.data || t[28] !== N.type || t[29] !== L
    ? ((z =
        !c || N.type !== `success` || F == null || L == null
          ? void 0
          : (e, t, n) =>
              (0, Rn.createElement)(Mn, {
                commentAttachment: e,
                hostId: v ?? `local`,
                metadataAccessory: t,
                isFixActive: n,
                pullRequest: F,
                pullRequestComment: N.data.activityItems.find(
                  (t) => t.type === `review_comment` && t.reviewThreadId === e.reviewThreadId,
                ),
                workspaceRequest: L,
              })),
      (t[24] = v),
      (t[25] = F),
      (t[26] = c),
      (t[27] = N.data),
      (t[28] = N.type),
      (t[29] = L),
      (t[30] = z))
    : (z = t[30]);
  let B;
  return (
    t[31] !== l || t[32] !== s || t[33] !== u || t[34] !== d || t[35] !== R || t[36] !== z
      ? ((B = {
          commentProps: {
            enableComments: s,
            comments: l,
            modelComments: u,
            onCommentsChange: d,
            readonlyComments: R,
            renderReadonlyComment: z,
          },
        }),
        (t[31] = l),
        (t[32] = s),
        (t[33] = u),
        (t[34] = d),
        (t[35] = R),
        (t[36] = z),
        (t[37] = B))
      : (B = t[37]),
    B
  );
}
var Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Ln = R()), g(), I(), (Rn = W()), Yt(), tn(), ne(), jn(), oe(), q(), Dt(), ve(), Fn(), wn());
  }))();
}
function Bn(e) {
  return [null, ...e.filter((e) => e.length > 0)];
}
function Vn(e) {
  let t = new Map();
  for (let n of e) t.has(n.path) || t.set(n.path, { displayPath: n.path, path: n.path });
  return ie([...t.values()]).map(({ entry: e, treePath: t }) => ({ ...e, displayPath: t }));
}
function Hn() {
  return (Hn = e(() => {
    vt();
  }))();
}
function Un(e) {
  let t = (0, $n.c)(116),
    {
      activeFilePath: n,
      autoFocusSearch: r,
      root: i,
      includeHidden: a,
      hostId: o,
      environmentId: s,
      onSelectFile: c,
      refreshKey: l,
      renderTree: u,
    } = e,
    d = p(ut),
    f;
  t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== i
    ? ((f = { hostId: o, environmentId: s, includeHidden: a, root: i }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = f))
    : (f = t[4]);
  let m = _(ir, f),
    h = C(m),
    g;
  t[5] !== s || t[6] !== o || t[7] !== a || t[8] !== i
    ? ((g = { hostId: o, environmentId: s, includeHidden: a, root: i }),
      (t[5] = s),
      (t[6] = o),
      (t[7] = a),
      (t[8] = i),
      (t[9] = g))
    : (g = t[9]);
  let v = _(ar, g),
    y = C(v),
    b;
  t[10] === i ? (b = t[11]) : ((b = ee(i)), (t[10] = i), (t[11] = b));
  let x = b,
    w,
    T;
  t[12] !== n || t[13] !== h || t[14] !== i
    ? ((w = n == null ? null : Pt({ filePath: n, root: i })),
      (T = mt(h, w)),
      (t[12] = n),
      (t[13] = h),
      (t[14] = i),
      (t[15] = w),
      (t[16] = T))
    : ((w = t[15]), (T = t[16]));
  let E = T,
    [D, O] = (0, Y.useState)(E.expandedPaths),
    [k, A] = (0, Y.useState)(E.selectedPath),
    j = (0, Y.useRef)(D),
    M = (0, Y.useRef)(null),
    N = (0, Y.useRef)(null),
    P = (0, Y.useRef)(k),
    F;
  t[17] !== s || t[18] !== D || t[19] !== o || t[20] !== a || t[21] !== l || t[22] !== i
    ? ((F = {
        directoryPath: null,
        expandedPaths: D,
        hostId: o,
        environmentId: s,
        includeHidden: a,
        refreshKey: l,
        workspaceRoot: i,
      }),
      (t[17] = s),
      (t[18] = D),
      (t[19] = o),
      (t[20] = a),
      (t[21] = l),
      (t[22] = i),
      (t[23] = F))
    : (F = t[23]);
  let { error: I, files: L, isEmpty: R, isLoading: z } = G(an, F),
    B;
  t[24] === i ? (B = t[25]) : ((B = [i]), (t[24] = i), (t[25] = B));
  let V = B,
    U;
  t[26] !== v || t[27] !== d
    ? ((U = (e) => {
        let { files: t, query: n } = e;
        n.trim().length !== 0 && d.set(v, { files: t, query: n });
      }),
      (t[26] = v),
      (t[27] = d),
      (t[28] = U))
    : (U = t[28]);
  let W = H(U),
    te = s == null ? h.searchQuery : ``,
    ne;
  t[29] !== W || t[30] !== o || t[31] !== V || t[32] !== te
    ? ((ne = { hostId: o, onFiles: W, query: te, roots: V }),
      (t[29] = W),
      (t[30] = o),
      (t[31] = V),
      (t[32] = te),
      (t[33] = ne))
    : (ne = t[33]);
  let { files: re, isLoading: ie } = Ve(ne),
    ae;
  t[34] !== s || t[35] !== h.searchQuery
    ? ((ae = s == null ? h.searchQuery.trim() : ``), (t[34] = s), (t[35] = h.searchQuery), (t[36] = ae))
    : (ae = t[36]);
  let oe = ae,
    se;
  t[37] !== y || t[38] !== h.searchQuery || t[39] !== re
    ? ((se = Ht(re, y, h.searchQuery)), (t[37] = y), (t[38] = h.searchQuery), (t[39] = re), (t[40] = se))
    : (se = t[40]);
  let ce = se,
    le;
  t[41] !== x || t[42] !== c || t[43] !== i || t[44] !== d
    ? ((le = (e, t) => {
        if (c != null) {
          c(S(i, e), t);
          return;
        }
        d.get(Xt).mutate({ recentFilesThreadId: d.getOwnValue(xe).clientThreadId, cwd: x, path: e });
      }),
      (t[41] = x),
      (t[42] = c),
      (t[43] = i),
      (t[44] = d),
      (t[45] = le))
    : (le = t[45]);
  let K = H(le),
    q;
  t[46] === K
    ? (q = t[47])
    : ((q = (e) => {
        qn(e, (e) => {
          K(e, { isPreview: !0 });
        });
      }),
      (t[46] = K),
      (t[47] = q));
  let ue = H(q),
    de;
  t[48] === K
    ? (de = t[49])
    : ((de = (e) => {
        K(e, { isPreview: !1 });
      }),
      (t[48] = K),
      (t[49] = de));
  let fe = H(de),
    pe;
  t[50] !== v || t[51] !== h.searchQuery || t[52] !== d || t[53] !== K || t[54] !== ce
    ? ((pe = (e) => {
        (ce != null && d.set(v, { files: ce, query: h.searchQuery }), K(e, { isPreview: !0 }));
      }),
      (t[50] = v),
      (t[51] = h.searchQuery),
      (t[52] = d),
      (t[53] = K),
      (t[54] = ce),
      (t[55] = pe))
    : (pe = t[55]);
  let me = H(pe),
    he;
  t[56] === K
    ? (he = t[57])
    : ((he = (e) => {
        K(e, { isPreview: !1 });
      }),
      (t[56] = K),
      (t[57] = he));
  let ge = H(he),
    _e;
  t[58] !== m || t[59] !== d
    ? ((_e = () => {
        let e = M.current;
        e != null && ((M.current = null), d.set(m, (t) => Ye(t, e)));
      }),
      (t[58] = m),
      (t[59] = d),
      (t[60] = _e))
    : (_e = t[60]);
  let ve = H(_e),
    ye;
  t[61] !== m || t[62] !== d
    ? ((ye = (e) => {
        d.set(m, (t) => Ot(t, e));
      }),
      (t[61] = m),
      (t[62] = d),
      (t[63] = ye))
    : (ye = t[63]);
  let be = H(ye),
    Se;
  t[64] === ve
    ? (Se = t[65])
    : ((Se = (e) => {
        ((M.current = e),
          N.current != null && window.clearTimeout(N.current),
          (N.current = window.setTimeout(() => {
            ((N.current = null), ve());
          }, nr)));
      }),
      (t[64] = ve),
      (t[65] = Se));
  let Ce = H(Se),
    J;
  t[66] === Ce
    ? (J = t[67])
    : ((J = (e) => {
        (Qn(j.current, e.expandedPaths) || ((j.current = e.expandedPaths), O(e.expandedPaths)),
          P.current !== e.selectedPath && ((P.current = e.selectedPath), A(e.selectedPath)),
          Ce(e));
      }),
      (t[66] = Ce),
      (t[67] = J));
  let we = H(J),
    Te,
    Ee;
  (t[68] !== w || t[69] !== m || t[70] !== d
    ? ((Te = () => {
        if (w == null) return;
        let e = wt(j.current, w);
        (Qn(j.current, e) || ((j.current = e), O(e)),
          P.current !== w && ((P.current = w), A(w)),
          (M.current = null),
          N.current != null && (window.clearTimeout(N.current), (N.current = null)),
          d.set(m, (e) => mt(e, w)));
      }),
      (Ee = [w, m, d]),
      (t[68] = w),
      (t[69] = m),
      (t[70] = d),
      (t[71] = Te),
      (t[72] = Ee))
    : ((Te = t[71]), (Ee = t[72])),
    (0, Y.useEffect)(Te, Ee));
  let De, Oe;
  (t[73] !== s || t[74] !== D || t[75] !== o || t[76] !== a || t[77] !== l || t[78] !== i || t[79] !== d
    ? ((De = () => {
        Yn(d, { expandedItems: D, hostId: o, environmentId: s, includeHidden: a, refreshKey: l, root: i });
      }),
      (Oe = [D, o, s, a, l, i, d]),
      (t[73] = s),
      (t[74] = D),
      (t[75] = o),
      (t[76] = a),
      (t[77] = l),
      (t[78] = i),
      (t[79] = d),
      (t[80] = De),
      (t[81] = Oe))
    : ((De = t[80]), (Oe = t[81])),
    (0, Y.useEffect)(De, Oe));
  let ke, Ae;
  (t[82] === ve
    ? ((ke = t[83]), (Ae = t[84]))
    : ((ke = () => () => {
        (N.current != null && (window.clearTimeout(N.current), (N.current = null)), ve());
      }),
      (Ae = [ve]),
      (t[82] = ve),
      (t[83] = ke),
      (t[84] = Ae)),
    (0, Y.useEffect)(ke, Ae));
  let je;
  t[85] !== r || t[86] !== s || t[87] !== be || t[88] !== h.searchQuery
    ? ((je =
        s == null
          ? (0, X.jsx)(`div`, {
              className: `shrink-0 px-1 pt-2 pb-px`,
              children: (0, X.jsx)(pn, {
                autoFocus: r,
                inputId: `workspace-directory-tree-search`,
                onQueryChange: be,
                searchQuery: h.searchQuery,
              }),
            })
          : null),
      (t[85] = r),
      (t[86] = s),
      (t[87] = be),
      (t[88] = h.searchQuery),
      (t[89] = je))
    : (je = t[89]);
  let Me;
  t[90] !== w ||
  t[91] !== s ||
  t[92] !== I ||
  t[93] !== D ||
  t[94] !== L ||
  t[95] !== x ||
  t[96] !== fe ||
  t[97] !== ge ||
  t[98] !== me ||
  t[99] !== ue ||
  t[100] !== we ||
  t[101] !== o ||
  t[102] !== R ||
  t[103] !== z ||
  t[104] !== ie ||
  t[105] !== h.scrollTop ||
  t[106] !== h.searchQuery ||
  t[107] !== u ||
  t[108] !== i ||
  t[109] !== k ||
  t[110] !== oe.length ||
  t[111] !== ce
    ? ((Me = (0, X.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children:
          oe.length > 0
            ? (0, X.jsx)(Gn, {
                files: ce,
                hostId: o,
                isLoading: ie,
                onOpenFile: ge,
                onSelectFile: me,
                query: h.searchQuery,
                root: i,
                renderTree: u,
              })
            : (0, X.jsx)(Wn, {
                environmentId: s,
                error: I,
                files: L,
                gitCwd: x,
                hostId: o,
                initialExpandedPaths: D,
                initialScrollTop: h.scrollTop,
                isEmpty: R,
                isLoading: z,
                onOpenFile: fe,
                onSelectionChange: ue,
                onStateChange: we,
                revealSelectedPath: w != null,
                selectedPath: k,
                renderTree: u,
              }),
      })),
      (t[90] = w),
      (t[91] = s),
      (t[92] = I),
      (t[93] = D),
      (t[94] = L),
      (t[95] = x),
      (t[96] = fe),
      (t[97] = ge),
      (t[98] = me),
      (t[99] = ue),
      (t[100] = we),
      (t[101] = o),
      (t[102] = R),
      (t[103] = z),
      (t[104] = ie),
      (t[105] = h.scrollTop),
      (t[106] = h.searchQuery),
      (t[107] = u),
      (t[108] = i),
      (t[109] = k),
      (t[110] = oe.length),
      (t[111] = ce),
      (t[112] = Me))
    : (Me = t[112]);
  let Ne;
  return (
    t[113] !== je || t[114] !== Me
      ? ((Ne = (0, X.jsxs)(`div`, { className: `flex h-full min-h-0 w-full flex-col`, children: [je, Me] })),
        (t[113] = je),
        (t[114] = Me),
        (t[115] = Ne))
      : (Ne = t[115]),
    Ne
  );
}
function Wn(e) {
  let t = (0, $n.c)(26),
    {
      error: n,
      files: r,
      gitCwd: i,
      hostId: a,
      environmentId: o,
      initialExpandedPaths: s,
      initialScrollTop: c,
      isEmpty: l,
      isLoading: u,
      onOpenFile: d,
      onSelectionChange: p,
      onStateChange: m,
      revealSelectedPath: h,
      selectedPath: g,
      renderTree: _,
    } = e,
    v = null;
  if (n != null) {
    let e;
    (t[0] === n.message
      ? (e = t[1])
      : ((e = (0, X.jsx)(`div`, { className: `px-3 py-2 text-xs text-danger`, children: n.message })),
        (t[0] = n.message),
        (t[1] = e)),
      (v = e));
  } else if (u) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(Xn, {
          children: (0, X.jsx)(f, {
            id: `threadSidePanel.workspaceBrowser.loading`,
            defaultMessage: `Loading directory entries…`,
            description: `Loading message shown while the workspace file browser is fetching a directory`,
          }),
        })),
        (t[2] = e))
      : (e = t[2]),
      (v = e));
  } else if (l) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(Xn, {
          children: (0, X.jsx)(f, {
            id: `threadSidePanel.workspaceBrowser.empty`,
            defaultMessage: `No files in this folder`,
            description: `Empty state shown when a workspace directory contains no visible entries`,
          }),
        })),
        (t[3] = e))
      : (e = t[3]),
      (v = e));
  }
  let y = o == null,
    b,
    x;
  if (
    t[4] !== v ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== d ||
    t[11] !== p ||
    t[12] !== m ||
    t[13] !== _ ||
    t[14] !== h ||
    t[15] !== g ||
    t[16] !== y
  ) {
    b = Symbol.for(`react.early_return_sentinel`);
    bb0: if (
      ((x = {
        cwd: i,
        contextMenuEnabled: y,
        hostId: a,
        initialExpandedPaths: s,
        initialScrollTop: c,
        onSelectionChange: p,
        onStateChange: m,
        paths: r,
        revealSelectedPath: h,
        selectedPath: g,
      }),
      _ != null)
    ) {
      b = _({ treeProps: x, emptyState: v, onOpenFile: d, query: `` });
      break bb0;
    }
    ((t[4] = v),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = s),
      (t[9] = c),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m),
      (t[13] = _),
      (t[14] = h),
      (t[15] = g),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x));
  } else ((b = t[17]), (x = t[18]));
  if (b !== Symbol.for(`react.early_return_sentinel`)) return b;
  if (v != null) {
    let e;
    return (
      t[19] === v ? (e = t[20]) : ((e = (0, X.jsx)(X.Fragment, { children: v })), (t[19] = v), (t[20] = e)),
      e
    );
  }
  let S;
  t[21] === d
    ? (S = t[22])
    : ((S = (e) => {
        let t = Jn(e.nativeEvent);
        t != null && d(t);
      }),
      (t[21] = d),
      (t[22] = S));
  let C;
  return (
    t[23] !== S || t[24] !== x
      ? ((C = (0, X.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-1`,
          children: (0, X.jsx)(Dn, { ...x, onDoubleClick: S }),
        })),
        (t[23] = S),
        (t[24] = x),
        (t[25] = C))
      : (C = t[25]),
    C
  );
}
function Gn(e) {
  let t = (0, $n.c)(31),
    {
      files: n,
      hostId: r,
      isLoading: i,
      onOpenFile: a,
      onSelectFile: o,
      query: s,
      root: c,
      renderTree: l,
    } = e,
    u;
  t[0] === n ? (u = t[1]) : ((u = n == null ? null : Vn(n)), (t[0] = n), (t[1] = u));
  let d = u,
    p;
  t[2] === d ? (p = t[3]) : ((p = d == null ? tr : Zn(d.map(Kn))), (t[2] = d), (t[3] = p));
  let m = p,
    h = null;
  if (d == null || (i && d.length === 0)) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(Xn, {
          children: (0, X.jsx)(f, {
            id: `thread.fileTreePanel.searchingFiles`,
            defaultMessage: `Searching files…`,
            description: `Loading state shown while searching workspace files`,
          }),
        })),
        (t[4] = e))
      : (e = t[4]),
      (h = e));
  } else if (d.length === 0) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(Xn, {
          children: (0, X.jsx)(f, {
            id: `thread.fileTreePanel.noMatchingFiles`,
            defaultMessage: `No matching files`,
            description: `Empty state shown when workspace file search has no results`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (h = e));
  }
  let g, _, v;
  if (
    t[6] !== h ||
    t[7] !== r ||
    t[8] !== m ||
    t[9] !== a ||
    t[10] !== o ||
    t[11] !== s ||
    t[12] !== l ||
    t[13] !== c ||
    t[14] !== d
  ) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      (t[18] !== o || t[19] !== d
        ? ((e = (e) => {
            let t = d?.find((t) => e.includes(t.displayPath));
            t != null && o(t.path);
          }),
          (t[18] = o),
          (t[19] = d),
          (t[20] = e))
        : (e = t[20]),
        (v = {
          flattenEmptyDirectories: !0,
          cwd: ee(c),
          hostId: r,
          initialExpandedPaths: m,
          onSelectionChange: e,
          paths: d ?? tr,
          resetKey: s,
        }));
      let n;
      if (
        (t[21] !== a || t[22] !== d
          ? ((n = (e) => {
              let t = d?.find((t) => t.displayPath === e);
              t != null && a(t.path);
            }),
            (t[21] = a),
            (t[22] = d),
            (t[23] = n))
          : (n = t[23]),
        (g = n),
        l != null)
      ) {
        _ = l({ treeProps: v, emptyState: h, onOpenFile: g, query: s });
        break bb0;
      }
    }
    ((t[6] = h),
      (t[7] = r),
      (t[8] = m),
      (t[9] = a),
      (t[10] = o),
      (t[11] = s),
      (t[12] = l),
      (t[13] = c),
      (t[14] = d),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v));
  } else ((g = t[15]), (_ = t[16]), (v = t[17]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  if (h != null) {
    let e;
    return (
      t[24] === h ? (e = t[25]) : ((e = (0, X.jsx)(X.Fragment, { children: h })), (t[24] = h), (t[25] = e)),
      e
    );
  }
  let y;
  t[26] === g
    ? (y = t[27])
    : ((y = (e) => {
        let t = Jn(e.nativeEvent);
        t != null && g(t);
      }),
      (t[26] = g),
      (t[27] = y));
  let b;
  return (
    t[28] !== y || t[29] !== v
      ? ((b = (0, X.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-1`,
          children: (0, X.jsx)(Dn, { ...v, onDoubleClick: y }),
        })),
        (t[28] = y),
        (t[29] = v),
        (t[30] = b))
      : (b = t[30]),
    b
  );
}
function Kn(e) {
  return e.displayPath;
}
function qn(e, t) {
  let n = e.find((e) => !e.endsWith(er));
  n != null && t(n);
}
function Jn(e) {
  let t = En(e);
  return t == null || t.endsWith(er) ? null : t;
}
async function Yn(
  e,
  { expandedItems: t, hostId: n, environmentId: r, includeHidden: i, refreshKey: a, root: o },
) {
  await Promise.all(
    Bn(t).map(async (t) => {
      await e.query
        .fetch(rn, {
          directoryPath: t,
          hostId: n,
          environmentId: r,
          includeHidden: i,
          refreshKey: a,
          workspaceRoot: o,
        })
        .catch(() => void 0);
    }),
  );
}
function Xn(e) {
  let t = (0, $n.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`div`, {
          className: `px-2 py-2 text-start text-base text-codex-description`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Zn(e) {
  let t = new Set();
  for (let n of e) {
    let e = (n.endsWith(`/`) ? n.slice(0, -1) : n).split(`/`);
    for (let n = 1; n < e.length; n += 1) t.add(e.slice(0, n).join(`/`));
  }
  return Array.from(t);
}
function Qn(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
var $n, Y, X, er, tr, nr, rr, ir, ar;
function or() {
  return (or = e(() => {
    (($n = R()),
      g(),
      I(),
      (Y = W()),
      M(),
      Tn(),
      qe(),
      un(),
      se(),
      on(),
      Hn(),
      zt(),
      q(),
      Nt(),
      h(),
      O(),
      (X = V()),
      (er = `/`),
      (tr = []),
      (nr = 100),
      (rr = { expandedPaths: tr, scrollTop: 0, searchQuery: ``, selectedPath: null }),
      (ir = E(ut, (e) => rr)),
      (ar = E(ut, (e) => null)));
  }))();
}
function sr(e) {
  let t = (0, cr.c)(5),
    { children: n, isActive: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r
        ? (0, lr.jsx)(`span`, {
            "aria-hidden": !0,
            className: `absolute -end-1.5 -top-1.5 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-primary-solid px-0.5 text-xs leading-none font-semibold text-primary-solid select-none`,
            children: (0, lr.jsx)(c, { value: 1 }),
          })
        : null),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, lr.jsxs)(`span`, { className: `relative inline-flex`, children: [n, i] })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var cr, lr;
function ur() {
  return (ur = e(() => {
    ((cr = R()), M(), (lr = V()));
  }))();
}
function dr(e) {
  let t = (0, gr.c)(56),
    { reserveBottomPadding: n } = e,
    r = p(ut),
    i = C(tt),
    a = C(Bt),
    o = C(Le),
    s = C(Ne),
    c = C(bt),
    l = C(re),
    u = C(Xe),
    d = C(_n),
    f = C(te),
    m = C(xt),
    h = C(qt),
    g = C(Ge).data,
    _ = g?.commonDir ?? null,
    v = g?.root ?? null,
    y = m.id,
    b;
  t[0] === u ? (b = t[1]) : ((b = u.map(mr)), (t[0] = u), (t[1] = b));
  let x;
  t[2] !== f || t[3] !== m.id || t[4] !== _ || t[5] !== v || t[6] !== b
    ? ((x = { cwd: f, gitCommonDir: _, gitRoot: v, hostId: y, paths: b }),
      (t[2] = f),
      (t[3] = m.id),
      (t[4] = _),
      (t[5] = v),
      (t[6] = b),
      (t[7] = x))
    : (x = t[7]);
  let { hasLinguistGeneratedAttributes: S, paths: w } = fn(x),
    T;
  t[8] !== d || t[9] !== w || t[10] !== S || t[11] !== l
    ? ((T = d && S ? l.filter((e) => !w.has(e.gitPath)) : l),
      (t[8] = d),
      (t[9] = w),
      (t[10] = S),
      (t[11] = l),
      (t[12] = T))
    : (T = t[12]);
  let E = T,
    D;
  t[13] === r.value ? (D = t[14]) : ((D = Qt(r.value)), (t[13] = r.value), (t[14] = D));
  let O = D,
    k = r.value.routeKind === `local-thread` ? r.value.conversationId : null,
    A;
  t[15] === O ? (A = t[16]) : ((A = O ?? Me({ entrypoint: `home` })), (t[15] = O), (t[16] = A));
  let j = a !== `last-turn`,
    M;
  t[17] !== k || t[18] !== A || t[19] !== j
    ? ((M = { conversationId: A, enablePullRequestComments: j, localConversationId: k }),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = M))
    : (M = t[20]);
  let { commentProps: N } = In(M),
    P;
  bb0: {
    let e = N.readonlyComments,
      n = N.modelComments;
    if ((e == null || e.length === 0) && n.length === 0) {
      P = void 0;
      break bb0;
    }
    let r;
    (t[21] !== f || t[22] !== E || t[23] !== n || t[24] !== e
      ? ((r = bn({ comments: [...n, ...(e ?? [])], filePaths: E.map(pr), workspaceRoot: f })),
        (t[21] = f),
        (t[22] = E),
        (t[23] = n),
        (t[24] = e),
        (t[25] = r))
      : (r = t[25]),
      (P = r));
  }
  let F = P,
    ee = (o?.location.domain === `diff` ? o.location.path : void 0) ?? s,
    I;
  t[26] !== E || t[27] !== ee
    ? ((I = E.some((e) => e.path === ee) ? ee : E[0]?.path), (t[26] = E), (t[27] = ee), (t[28] = I))
    : (I = t[28]);
  let L = I,
    R;
  t[29] !== E || t[30] !== i || t[31] !== r
    ? ((R = (e) => {
        E.some((t) => t.path === e) &&
          requestAnimationFrame(() => {
            (ue(r, e), !i && me(r, e));
          });
      }),
      (t[29] = E),
      (t[30] = i),
      (t[31] = r),
      (t[32] = R))
    : (R = t[32]);
  let z = R,
    B;
  t[33] === r ? (B = t[34]) : ((B = (e) => be(r, e)), (t[33] = r), (t[34] = B));
  let V;
  t[35] !== c || t[36] !== B
    ? ((V = (0, Z.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, Z.jsx)(pn, {
          inputId: `review-changed-files-search`,
          onQueryChange: B,
          searchQuery: c,
        }),
      })),
      (t[35] = c),
      (t[36] = B),
      (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] === S ? (H = t[39]) : ((H = S ? (0, Z.jsx)(hr, {}) : null), (t[38] = S), (t[39] = H));
  let U;
  t[40] !== V || t[41] !== H
    ? ((U = (0, Z.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1 px-1 pt-1 pb-px`,
        children: [V, H],
      })),
      (t[40] = V),
      (t[41] = H),
      (t[42] = U))
    : (U = t[42]);
  let W;
  t[43] === E ? (W = t[44]) : ((W = E.map(fr)), (t[43] = E), (t[44] = W));
  let G;
  t[45] !== L || t[46] !== F || t[47] !== f || t[48] !== h || t[49] !== n || t[50] !== z || t[51] !== W
    ? ((G = (0, Z.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, Z.jsx)(dn, {
          activePath: L,
          allowSelectingActivePath: !0,
          commentCountByPath: F,
          cwd: f,
          hostId: h,
          onSelectPath: z,
          entries: W,
          reserveBottomPadding: n,
        }),
      })),
      (t[45] = L),
      (t[46] = F),
      (t[47] = f),
      (t[48] = h),
      (t[49] = n),
      (t[50] = z),
      (t[51] = W),
      (t[52] = G))
    : (G = t[52]);
  let ne;
  return (
    t[53] !== U || t[54] !== G
      ? ((ne = (0, Z.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col px-1 pt-[var(--pane-overlay-header-height,0px)]`,
          children: [U, G],
        })),
        (t[53] = U),
        (t[54] = G),
        (t[55] = ne))
      : (ne = t[55]),
    ne
  );
}
function fr(e) {
  let { path: t, displayPath: n, summary: r, diff: i } = e;
  return {
    path: t,
    displayPath: n,
    additions: r?.additions ?? i?.additions ?? null,
    deletions: r?.deletions ?? i?.deletions ?? null,
  };
}
function pr(e) {
  return e.path;
}
function mr(e) {
  return e.gitPath;
}
function hr() {
  let e = (0, gr.c)(20),
    t = p(o),
    r = x(),
    i = C(_n),
    [s, c] = (0, _r.useState)(!1),
    l;
  e[0] === r
    ? (l = e[1])
    : ((l = r.formatMessage({
        id: `codex.review.fileTree.filters`,
        defaultMessage: `Filter changed files`,
        description: `Accessible label for the changed-files tree filter menu`,
      })),
      (e[0] = r),
      (e[1] = l));
  let u = i ? `secondary` : `ghost`,
    d;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(kn, { "aria-hidden": !0, className: `icon-sm` })), (e[2] = d))
    : (d = e[2]);
  let m;
  e[3] === i ? (m = e[4]) : ((m = (0, Z.jsx)(sr, { isActive: i, children: d })), (e[3] = i), (e[4] = m));
  let h;
  e[5] !== i || e[6] !== l || e[7] !== u || e[8] !== m
    ? ((h = (0, Z.jsx)(n, {
        "aria-label": l,
        "aria-pressed": i,
        color: u,
        size: `toolbar`,
        uniform: !0,
        children: m,
      })),
      (e[5] = i),
      (e[6] = l),
      (e[7] = u),
      (e[8] = m),
      (e[9] = h))
    : (h = e[9]);
  let g;
  e[10] === t
    ? (g = e[11])
    : ((g = (e) => {
        (t.set(_n, e === !0), c(!1));
      }),
      (e[10] = t),
      (e[11] = g));
  let _;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(f, {
        id: `codex.review.fileTree.filterGeneratedFiles`,
        defaultMessage: `Filter generated files`,
        description: `Checkbox that hides files marked linguist-generated from the changed-files tree and review diff list`,
      })),
      (e[12] = _))
    : (_ = e[12]);
  let y;
  e[13] !== i || e[14] !== g
    ? ((y = (0, Z.jsx)(v.CheckboxItem, { checked: i, onCheckedChange: g, children: _ })),
      (e[13] = i),
      (e[14] = g),
      (e[15] = y))
    : (y = e[15]);
  let b;
  return (
    e[16] !== s || e[17] !== h || e[18] !== y
      ? ((b = (0, Z.jsx)(a, {
          align: `end`,
          contentWidth: `menu`,
          onOpenChange: c,
          open: s,
          triggerButton: h,
          children: y,
        })),
        (e[16] = s),
        (e[17] = h),
        (e[18] = y),
        (e[19] = b))
      : (b = e[19]),
    b
  );
}
var gr, _r, Z;
function vr() {
  return (vr = e(() => {
    ((gr = R()),
      g(),
      (_r = W()),
      M(),
      L(),
      r(),
      zn(),
      _t(),
      un(),
      On(),
      yn(),
      B(),
      q(),
      Vt(),
      $e(),
      sn(),
      st(),
      ur(),
      mn(),
      Ft(),
      K(),
      vn(),
      oe(),
      Te(),
      (Z = V()));
  }))();
}
async function yr(e, t) {
  let n = e.get(xr, t),
    r = n.data;
  if (r == null) {
    await n.refetch();
    return;
  }
  let i = e.get(J, t.hostId);
  (await Mt({ clearUntrackedPathsCache: !0, hostConfig: i, operationSource: `review_model`, root: r.root }),
    en(e.queryClient, { hostId: i.id, cwd: r.root }),
    await Ce(e.queryClient, r.commonDir, { hostKey: Jt(i) }),
    await e.queryClient.invalidateQueries({ queryKey: [`workspace-file-baseline`, Jt(i)] }));
}
function br(e, t, n) {
  let r = A(n);
  return e.files.find((e) => A(et({ gitRoot: t, gitPath: e.path })) === r);
}
var xr, Sr, Cr, wr, Tr, Er, Dr;
function Or() {
  return (Or = e(() => {
    (g(),
      I(),
      Oe(),
      zt(),
      he(),
      we(),
      Ze(),
      lt(),
      Kt(),
      oe(),
      B(),
      Ie(),
      h(),
      ct(),
      (xr = N(o, ({ hostId: e, root: t }, { get: n }) => {
        let r = n(J, e);
        return r.id === e
          ? n(It, {
              cwd: t,
              enabled: !0,
              hostConfig: r,
              operationSource: `review_model`,
              watchForGitInit: !0,
            })
          : it();
      })),
      (Sr = N(o, (e, { get: t }) => {
        let n = t(xr, e),
          r = n.data;
        return r == null ? Ut(n) : t(De, { ...r, hostConfig: t(J, e.hostId) });
      })),
      (Cr = N(o, (e, { get: t }) => {
        let n = t(xr, e),
          r = n.data;
        return r == null ? Ut(n) : t(Wt, { ...r, hostConfig: t(J, e.hostId) });
      })),
      (wr = N(o, (e, { get: t }) => {
        let n = t(xr, e),
          r = n.data;
        return r == null
          ? Ut(n)
          : t(kt, {
              ...r,
              hostConfig: t(J, e.hostId),
              cwd: r.root,
              source: e.comparison.source,
              baseBranch: e.comparison.baseBranch,
              commitSha: null,
              enabled: !0,
              hideWhitespace: !1,
            });
      })),
      (Tr = N(o, ({ hostId: e, path: t, workspaceRoot: n }, { get: r }) => {
        let a = i(l(t)),
          o = r(xr, { hostId: e, root: a ?? n ?? t });
        return o.data == null && !o.isPending && n != null && n !== a && Pt({ filePath: t, root: n }) != null
          ? r(xr, { hostId: e, root: n })
          : o;
      })),
      (Er = N(o, (e, { get: t }) => {
        let n = t(Tr, e),
          r = n.data;
        if (r == null)
          return { repositoryRoot: null, comparison: null, isPending: n.isPending && n.isEnabled };
        let i = { hostId: e.hostId, root: r.root },
          a = t(Sr, i),
          o = !1;
        for (let n of [`unstaged`, `uncommitted`, `branch`]) {
          if (n === `branch` && a.isPending) {
            o = !0;
            continue;
          }
          let s = { source: n, baseBranch: n === `branch` ? ye(a.data ?? null) : null },
            c = t(wr, { ...i, comparison: s });
          if (
            ((o = o || c.isPending || c.isFetching),
            c.data?.type === `success` && br(c.data, r.root, e.path)?.changeKind != null)
          )
            return { repositoryRoot: r.root, comparison: s, isPending: o };
        }
        return { repositoryRoot: r.root, comparison: null, isPending: o };
      })),
      (Dr = w(o, (e, { get: t }) => {
        let n = t(Tr, e),
          r = n.data,
          i = t(J, e.hostId),
          a = r == null ? null : t(wr, { hostId: e.hostId, root: r.root, comparison: e.comparison }),
          o = a?.data,
          s = o?.type === `success` && r != null ? br(o, r.root, e.path) : void 0;
        return {
          queryKey: [
            `workspace-file-baseline`,
            Jt(i),
            e.path,
            e.workspaceRoot,
            e.comparison,
            r?.root,
            o?.type === `success` ? o.snapshotGeneration : o?.type,
            s?.revision,
          ],
          enabled: !n.isPending && (a == null || !a.isPending) && (s != null || !a?.isFetching),
          staleTime: 1 / 0,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            if (r == null || o?.type !== `success`) throw Error(`File comparison is unavailable`);
            if (s?.changeKind === `unmerged`) throw Error(`File comparison has unresolved conflicts`);
            if (s?.changeKind === `added` || s?.changeKind === `untracked`)
              return { baseContent: ``, deletedContent: null };
            let n = null,
              a = Lt({ cwd: r.root, path: e.path });
            if (s != null) {
              let c = await ft({
                  baseBranch: e.comparison.baseBranch,
                  changeKind: s.changeKind,
                  cwd: r.root,
                  hideWhitespace: !1,
                  hostConfig: i,
                  path: s.path,
                  previousPath: s.previousPath,
                  signal: t,
                  snapshotGeneration: o.snapshotGeneration,
                  source: e.comparison.source,
                }),
                l = c.type === `success` ? Ae(c.diff, { maxFiles: 1 })[0] : null;
              if (l == null || l.isBinary || l.isGitlink)
                throw Error(`File comparison content is unavailable`);
              if (
                ((n = l.metadata.prevObjectId ?? null),
                (a = l.metadata.prevName ?? s.previousPath ?? s.path),
                n == null)
              ) {
                if (s.changeKind !== `renamed` || s.additions !== 0 || s.deletions !== 0)
                  throw Error(`File comparison base is unavailable`);
                a = s.path;
              }
            } else if (o.untrackedFilesOmitted != null) throw Error(`File comparison summary is incomplete`);
            let c = (
              await At(`git`).request({
                method: `cat-file`,
                params: {
                  cwd: ee(r.root),
                  hostConfig: i,
                  operationSource: `review_model`,
                  requests: [{ path: a, oid: n, fallbackToDisk: n == null }],
                  snapshotGeneration: o.snapshotGeneration,
                },
                signal: t,
              })
            )[0];
            if (c?.type !== `success`) throw Error(`File comparison base could not be read`);
            let l = c.lines.join(``);
            return { baseContent: l, deletedContent: s?.changeKind === `deleted` ? l : null };
          },
        };
      })));
  }))();
}
function kr(e) {
  let t = (0, Mr.c)(45),
    { changedFiles: n, onOpenFile: r, onSelectChangedFile: i, root: a, treeProps: o } = e,
    s = p(ut),
    c = x(),
    l;
  t[0] !== a || t[1] !== o.hostId
    ? ((l = { hostId: o.hostId, root: a }), (t[0] = a), (t[1] = o.hostId), (t[2] = l))
    : (l = t[2]);
  let u = _(Fr, l),
    d = C(u),
    f,
    m,
    h,
    g,
    v,
    y,
    b,
    w,
    T,
    E,
    D,
    O,
    k,
    A;
  if (
    t[3] !== n ||
    t[4] !== c ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== s ||
    t[9] !== d ||
    t[10] !== u ||
    t[11] !== o
  ) {
    m = c.formatMessage({
      id: `files.tree.changedFiles`,
      defaultMessage: `Changed files`,
      description: `Collapsible section of changed files in the Files tree`,
    });
    let e = c.formatMessage({
        id: `files.tree.allFiles`,
        defaultMessage: `All files`,
        description: `Collapsible section of all workspace files in the Files tree`,
      }),
      l = new Map(),
      p = (t, n, r, i, o) => {
        let s = t === `changed` ? m : e,
          c = n ? `${s}/${n}` : `${s}/`;
        l.set(c, { displayPath: c, path: S(a, r), originalPath: i, section: t, directory: o });
      },
      _ = (e, t, n) => {
        let r = t.replace(/\/$/, ``).split(`/`);
        for (let t = 1; t < r.length; t++) {
          let i = r.slice(0, t).join(`/`);
          p(e, `${i}/`, S(n, `../`.repeat(r.length - t)), i, !0);
        }
      };
    (n.length > 0 && p(`changed`, ``, a, ``, !0), p(`all`, ``, a, ``, !0));
    let x = ie(n),
      C = [];
    for (let { entry: e, treePath: t } of x) {
      (_(`changed`, t, e.path), p(`changed`, t, e.path, e.displayPath, !1));
      let n = `modified`;
      (e.changeKind === `deleted`
        ? (n = `deleted`)
        : [`added`, `untracked`, `copied`].includes(e.changeKind) && (n = `added`),
        C.push({ path: `${m}/${t}`, status: n }));
    }
    for (let e of o.paths) {
      let t = typeof e == `string` ? e : e.displayPath,
        n = typeof e == `string` ? e : e.path;
      (_(`all`, t, S(a, n)), p(`all`, t, n, t, t.endsWith(`/`)));
    }
    let j = He([...l.keys()]).paths,
      M = (e) => l.get(e) ?? l.get(`${e}/`),
      N = [
        ...(n.length > 0 && !d.changedCollapsed ? [m] : []),
        ...(d.allCollapsed ? [] : [e]),
        ...[...l.values()]
          .filter(
            (e) =>
              e.section === `changed` &&
              e.directory &&
              e.originalPath &&
              !d.collapsedChangedPaths.includes(e.originalPath),
          )
          .map(jr),
        ...(o.initialExpandedPaths ?? []).map((t) => `${e}/${t}`),
      ],
      P;
    t[26] === o.selectedPath
      ? (P = t[27])
      : ((P = (e) => {
          let { entry: t } = e;
          return t.displayPath === o.selectedPath;
        }),
        (t[26] = o.selectedPath),
        (t[27] = P));
    let F = x.find(P);
    ((h = o.selectedPath == null ? null : `${e}/${o.selectedPath}`),
      d.selectedSection === `changed` && F != null && (h = `${m}/${F.treePath}`));
    let ee = (t) => [
      ...(o.initialExpandedPaths ?? []).filter((t) => !l.has(`${e}/${t}/`)),
      ...t.flatMap((e) => {
        let t = M(e);
        return t?.section === `all` && t.originalPath ? [t.originalPath.replace(/\/$/, ``)] : [];
      }),
    ];
    ((f = Dn),
      (b = `${m}:${e}`),
      (w = o),
      (T = !1),
      (E = C),
      (D = N),
      (O = (e) => {
        let t = En(e.nativeEvent),
          n = t == null ? null : M(t);
        n?.section === `changed` && t === h && i(n.path, { isPreview: !0 });
      }),
      (k = (e) => {
        let t = En(e.nativeEvent),
          n = t == null ? null : M(t);
        n == null ||
          n.directory ||
          (n.section === `changed` ? i(n.path, { isPreview: !1 }) : r(n.originalPath));
      }),
      (A = (t) => {
        (s.set(u, (r) => {
          let i = new Set(r.collapsedChangedPaths);
          for (let e of l.values())
            e.section === `changed` &&
              e.directory &&
              e.originalPath &&
              (t.includes(e.displayPath.replace(/\/$/, ``))
                ? i.delete(e.originalPath)
                : i.add(e.originalPath));
          return {
            ...r,
            changedCollapsed: n.length > 0 ? !t.includes(m) : r.changedCollapsed,
            allCollapsed: !t.includes(e),
            collapsedChangedPaths: [...i],
          };
        }),
          o.onExpandedPathsChange?.(ee(t)));
      }),
      (g = (e) => {
        let t = e.map(M).find(Ar);
        t != null &&
          (s.set(u, (e) => ({ ...e, selectedSection: t.section })),
          t.section === `changed` ? i(t.path, { isPreview: !0 }) : o.onSelectionChange?.([t.originalPath]));
      }),
      (v = (e) => {
        let t = e.selectedPath == null ? null : M(e.selectedPath);
        o.onStateChange?.({
          ...e,
          expandedPaths: ee(e.expandedPaths),
          selectedPath: t?.originalPath || null,
        });
      }),
      (y = j.flatMap((e) => {
        let t = l.get(e);
        return t == null ? [] : [t];
      })),
      (t[3] = n),
      (t[4] = c),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = s),
      (t[9] = d),
      (t[10] = u),
      (t[11] = o),
      (t[12] = f),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = D),
      (t[23] = O),
      (t[24] = k),
      (t[25] = A));
  } else
    ((f = t[12]),
      (m = t[13]),
      (h = t[14]),
      (g = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (w = t[19]),
      (T = t[20]),
      (E = t[21]),
      (D = t[22]),
      (O = t[23]),
      (k = t[24]),
      (A = t[25]));
  let j;
  t[28] === m
    ? (j = t[29])
    : ((j = (e, t) => (e.segments[0] === m ? 0 : 1) - (t.segments[0] === m ? 0 : 1)),
      (t[28] = m),
      (t[29] = j));
  let M;
  return (
    t[30] !== f ||
    t[31] !== h ||
    t[32] !== g ||
    t[33] !== v ||
    t[34] !== y ||
    t[35] !== j ||
    t[36] !== b ||
    t[37] !== w ||
    t[38] !== T ||
    t[39] !== E ||
    t[40] !== D ||
    t[41] !== O ||
    t[42] !== k ||
    t[43] !== A
      ? ((M = (0, Pr.jsx)(
          f,
          {
            ...w,
            flattenEmptyDirectories: T,
            gitStatus: E,
            initialExpandedPaths: D,
            onClick: O,
            onDoubleClick: k,
            onExpandedPathsChange: A,
            onSelectionChange: g,
            onStateChange: v,
            paths: y,
            sectioned: !0,
            selectedPath: h,
            sort: j,
          },
          b,
        )),
        (t[30] = f),
        (t[31] = h),
        (t[32] = g),
        (t[33] = v),
        (t[34] = y),
        (t[35] = j),
        (t[36] = b),
        (t[37] = w),
        (t[38] = T),
        (t[39] = E),
        (t[40] = D),
        (t[41] = O),
        (t[42] = k),
        (t[43] = A),
        (t[44] = M))
      : (M = t[44]),
    M
  );
}
function Ar(e) {
  return e != null && !e.directory;
}
function jr(e) {
  return e.displayPath.replace(/\/$/, ``);
}
var Mr, Nr, Pr, Fr;
function Ir() {
  return (Ir = e(() => {
    ((Mr = R()),
      Ue(),
      (Nr = t(d(), 1)),
      g(),
      M(),
      q(),
      h(),
      Tn(),
      vt(),
      (Pr = V()),
      (Fr = E(
        ut,
        (e) => ({
          changedCollapsed: !1,
          allCollapsed: !1,
          collapsedChangedPaths: [],
          selectedSection: `changed`,
        }),
        { isEqual: Nr.default },
      )));
  }))();
}
async function Lr(e, { path: t, ...n }) {
  let r = Qe.map((r) => {
    let i = St(r),
      a = e
        .get(i.tabs$)
        .find(
          (e) =>
            `path` in e.props &&
            e.props.path === t &&
            `hostId` in e.props &&
            e.props.hostId === n.hostId &&
            e.onShowSource != null,
        );
    return a == null ? null : { controller: i, tab: a };
  }).find((e) => e != null);
  if (r?.tab.onShowSource != null) {
    let { controller: t, tab: n } = r;
    if (!(await r.tab.onShowSource()) || e.get(t.tabById$, n.tabId)?.contentInstance !== n.contentInstance)
      return;
  }
  le()?.(e, t, {
    ...n,
    comparisonTarget: n.isDeleted || ze(t) != null ? n.comparisonTarget : void 0,
    fileViewer: `default`,
  });
}
function Rr() {
  return (Rr = e(() => {
    (Zt(), fe(), nt());
  }))();
}
function zr(e) {
  let t = (0, Ur.c)(3),
    n = C(pt),
    r;
  return (
    t[0] !== n || t[1] !== e
      ? ((r = (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(Q.Fragment, {
              children: n === `full` ? (0, Q.jsx)(Br, { ...e }) : (0, Q.jsx)(Vr, { ...e }),
            }),
            null,
          ],
        })),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Br(e) {
  let t = (0, Ur.c)(54),
    n = p(ut),
    {
      activeFilePath: r,
      comparisonRoot: i,
      comparisonTarget: a,
      root: o,
      treeProps: s,
      onOpenFile: c,
      query: l,
      emptyState: u,
    } = e,
    d = s.hostId ?? `local`,
    f;
  t[0] !== o || t[1] !== d ? ((f = { hostId: d, root: o }), (t[0] = o), (t[1] = d), (t[2] = f)) : (f = t[2]);
  let m = f,
    { data: h, isError: g, refetch: _ } = G(xr, m),
    v = i === void 0 || (a == null && a !== void 0) || (i != null && h != null && i !== h.root),
    y = G(v ? Sr : null, m),
    b;
  if (t[3] !== y?.data || t[4] !== y?.isPending || t[5] !== a || t[6] !== v) {
    if (((b = a), v)) {
      let e = y?.data ?? null,
        n;
      t[8] === e ? (n = t[9]) : ((n = ye(e)), (t[8] = e), (t[9] = n));
      let r = n;
      b = y?.isPending ? void 0 : { source: r == null ? `unstaged` : `branch`, baseBranch: r };
    }
    ((t[3] = y?.data), (t[4] = y?.isPending), (t[5] = a), (t[6] = v), (t[7] = b));
  } else b = t[7];
  let x;
  t[10] === b ? (x = t[11]) : ((x = b ?? { source: `unstaged`, baseBranch: null }), (t[10] = b), (t[11] = x));
  let S;
  t[12] !== m || t[13] !== x
    ? ((S = { ...m, comparison: x }), (t[12] = m), (t[13] = x), (t[14] = S))
    : (S = t[14]);
  let C = G(b == null ? null : wr, S),
    w = C?.data;
  if (h == null) {
    let n;
    t[15] === _ ? (n = t[16]) : ((n = () => void _()), (t[15] = _), (t[16] = n));
    let r;
    t[17] !== g || t[18] !== n
      ? ((r = (0, Q.jsx)(Hr, { isLoading: !1, loadFailed: g, onRetry: n })),
        (t[17] = g),
        (t[18] = n),
        (t[19] = r))
      : (r = t[19]);
    let i;
    t[20] === e
      ? (i = t[21])
      : ((i = (0, Q.jsx)(`div`, { className: `min-h-0 flex-1`, children: (0, Q.jsx)(Vr, { ...e }) })),
        (t[20] = e),
        (t[21] = i));
    let a;
    return (
      t[22] !== r || t[23] !== i
        ? ((a = (0, Q.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [r, i] })),
          (t[22] = r),
          (t[23] = i),
          (t[24] = a))
        : (a = t[24]),
      a
    );
  }
  let T;
  if (t[25] !== h.root || t[26] !== l || t[27] !== w || t[28] !== o) {
    let e = Tt({ cwd: o, gitRoot: h.root, reviewSummary: w }),
      n = Be(l);
    ((T = e.flatMap((e) => {
      let t = Pt({ filePath: e.path, root: o });
      return t == null || (l.trim().length > 0 && n(t) === 0) ? [] : [{ ...e, displayPath: t }];
    })),
      (t[25] = h.root),
      (t[26] = l),
      (t[27] = w),
      (t[28] = o),
      (t[29] = T));
  } else T = t[29];
  let E = T,
    D = w?.type !== `success` && (!!C?.isError || w?.type === `error` || w?.type === `expected`),
    O = E.length === 0 && u != null,
    k = C?.isLoading ?? b == null,
    A;
  t[30] === C ? (A = t[31]) : ((A = () => void C?.refetch()), (t[30] = C), (t[31] = A));
  let j;
  t[32] !== D || t[33] !== k || t[34] !== A
    ? ((j = (0, Q.jsx)(Hr, { isLoading: k, loadFailed: D, onRetry: A })),
      (t[32] = D),
      (t[33] = k),
      (t[34] = A),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== b || t[37] !== e
    ? ((M = b == null && (0, Q.jsx)(Vr, { ...e })), (t[36] = b), (t[37] = e), (t[38] = M))
    : (M = t[38]);
  let N = b != null && O && u,
    P;
  t[39] !== r ||
  t[40] !== E ||
  t[41] !== b ||
  t[42] !== m ||
  t[43] !== c ||
  t[44] !== o ||
  t[45] !== n ||
  t[46] !== O ||
  t[47] !== s
    ? ((P =
        b != null &&
        !O &&
        (0, Q.jsx)(`div`, {
          className: `min-h-0 flex-1 px-1`,
          children: (0, Q.jsx)(kr, {
            treeProps: s,
            root: o,
            changedFiles: E,
            onOpenFile: c,
            onSelectChangedFile: (e, t) => {
              let i = Qe.find((e) => {
                let t = n.get(St(e).activeTab$);
                return (
                  t != null &&
                  `path` in t.props &&
                  t.props.path === r &&
                  `hostId` in t.props &&
                  t.props.hostId === m.hostId
                );
              });
              Lr(n, {
                hostId: m.hostId,
                path: e,
                workspaceRoot: o,
                target: i,
                isPreview: t?.isPreview,
                comparisonTarget: b,
                isDeleted: E.some((t) => t.path === e && t.changeKind === `deleted`),
              });
            },
          }),
        })),
      (t[39] = r),
      (t[40] = E),
      (t[41] = b),
      (t[42] = m),
      (t[43] = c),
      (t[44] = o),
      (t[45] = n),
      (t[46] = O),
      (t[47] = s),
      (t[48] = P))
    : (P = t[48]);
  let F;
  return (
    t[49] !== P || t[50] !== j || t[51] !== M || t[52] !== N
      ? ((F = (0, Q.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [j, M, N, P] })),
        (t[49] = P),
        (t[50] = j),
        (t[51] = M),
        (t[52] = N),
        (t[53] = F))
      : (F = t[53]),
    F
  );
}
function Vr(e) {
  let t = (0, Ur.c)(6),
    { emptyState: n, treeProps: r, onOpenFile: i } = e,
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a =
        n ??
        (0, Q.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-1`,
          children: (0, Q.jsx)(Dn, {
            ...r,
            onDoubleClick: (e) => {
              let t = En(e.nativeEvent);
              t != null && i(t);
            },
          }),
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a ? (o = t[5]) : ((o = (0, Q.jsx)(Q.Fragment, { children: a })), (t[4] = a), (t[5] = o)),
    o
  );
}
function Hr(e) {
  let t = (0, Ur.c)(5),
    { isLoading: r, loadFailed: i, onRetry: a } = e;
  if (i) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `files.diff.retry`,
          defaultMessage: `Could not load changes. Try again`,
          description: `Retry loading a file diff`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let r;
    return (
      t[1] === a
        ? (r = t[2])
        : ((r = (0, Q.jsx)(Ct, {
            align: `start`,
            children: (0, Q.jsx)(n, { color: `ghost`, size: `toolbar`, onClick: a, children: e }),
          })),
          (t[1] = a),
          (t[2] = r)),
      r
    );
  }
  let o;
  return (
    t[3] === r
      ? (o = t[4])
      : ((o = r
          ? (0, Q.jsx)(Ct, {
              align: `start`,
              children: (0, Q.jsx)(f, {
                id: `files.diff.loading`,
                defaultMessage: `Loading changes…`,
                description: `Loading a file diff in Files`,
              }),
            })
          : null),
        (t[3] = r),
        (t[4] = o)),
    o
  );
}
var Ur, Q;
function Wr() {
  return (Wr = e(() => {
    ((Ur = R()),
      g(),
      M(),
      pe(),
      L(),
      dt(),
      Tn(),
      Or(),
      zt(),
      Ir(),
      q(),
      P(),
      nt(),
      Je(),
      Rr(),
      Ft(),
      oe(),
      (Q = V()));
  }))();
}
function Gr(e) {
  let t = p(ut),
    n = C(Ee),
    r = C(gt),
    i = C(ke),
    a = C(ae),
    o = (0, Jr.useRef)(null),
    s = b(),
    c = n && (e.type === `changed-files` || e.roots.length > 0),
    l = (0, Jr.useCallback)(
      (e) => {
        let t = (o.current?.parentElement?.getBoundingClientRect().width ?? window.innerWidth) / s,
          n = Math.max(Xr, t * Yr);
        return Math.min(Math.max(e, Xr), n);
      },
      [s],
    ),
    u = l(i),
    d = F(u);
  !n && d.get() !== u && d.set(u);
  let { isMounted: f, opacity: m, animatedSize: h } = yt({ animation: r, size: d, isVisible: c }),
    g = (0, Jr.useCallback)(
      (e) => {
        if (e < jt(Xr)) {
          ge(t, !1);
          return;
        }
        let n = l(e);
        (d.set(n), t.set(ke, n));
      },
      [d, l, t],
    );
  return !f && !c
    ? null
    : (0, $.jsxs)(T.div, {
        ref: o,
        style: { maxWidth: `${Yr * 100}%`, opacity: m, width: h },
        className: `relative flex h-full shrink-0 border-l border-default`,
        children: [
          (0, $.jsx)(ot, { edge: `left`, defaultSize: u, getCurrentSize: () => d.get(), setSize: g }),
          e.type === `changed-files`
            ? (0, $.jsx)(dr, { reserveBottomPadding: a })
            : e.roots.length === 0
              ? null
              : (0, $.jsx)(Kr, {
                  activeFilePath: e.activeFilePath ?? null,
                  autoFocusSearch: e.autoFocusSearch,
                  comparisonRoot: e.comparisonRoot,
                  comparisonTarget: e.comparisonTarget,
                  hostId: e.hostId,
                  environmentId: e.environmentId,
                  onSelectFile: e.onSelectFile,
                  roots: e.roots,
                }),
        ],
      });
}
function Kr(e) {
  let t = (0, qr.c)(29),
    {
      activeFilePath: r,
      autoFocusSearch: i,
      comparisonRoot: o,
      comparisonTarget: s,
      hostId: c,
      environmentId: l,
      onSelectFile: d,
      roots: f,
    } = e,
    p = x(),
    m;
  t[0] !== r || t[1] !== f
    ? ((m = r == null ? null : We({ filePath: r, roots: f })), (t[0] = r), (t[1] = f), (t[2] = m))
    : (m = t[2]);
  let h = m,
    [g, _] = (0, Jr.useState)(r),
    [y, b] = (0, Jr.useState)(h ?? f[0]);
  if (g !== r) {
    _(r);
    let e = r != null && y != null && Pt({ filePath: r, root: y }) != null;
    h != null && !e && b(h);
  }
  let S;
  t[3] !== h || t[4] !== f || t[5] !== y
    ? ((S = y != null && f.includes(y) ? y : (h ?? f[0])), (t[3] = h), (t[4] = f), (t[5] = y), (t[6] = S))
    : (S = t[6]);
  let C = S;
  if (C == null) return null;
  let w;
  t[7] !== p || t[8] !== f || t[9] !== C
    ? ((w =
        f.length > 1
          ? (0, $.jsx)(`div`, {
              className: `flex shrink-0 border-b border-default px-2 py-1`,
              children: (0, $.jsx)(a, {
                contentWidth: `menuBounded`,
                triggerButton: (0, $.jsxs)(n, {
                  "aria-label": p.formatMessage({
                    id: `review.fileSource.browser.chooseFileTreeRoot`,
                    defaultMessage: `Choose file tree root`,
                    description: `Accessible label for the dropdown that selects the workspace root shown in the file tree`,
                  }),
                  className: `w-full`,
                  color: `outline`,
                  "data-tab-preview-pin-exempt": !0,
                  size: `toolbar`,
                  children: [
                    (0, $.jsx)(z, { "aria-hidden": !0, className: `icon-xs shrink-0` }),
                    (0, $.jsx)(`span`, { className: `truncate`, children: u(C) }),
                  ],
                }),
                children: f.map((e) =>
                  (0, $.jsx)(
                    v.Item,
                    {
                      LeftIcon: z,
                      rightIconAsset: e === C ? U : void 0,
                      tooltipText: e,
                      onSelect: () => {
                        b(e);
                      },
                      children: u(e),
                    },
                    e,
                  ),
                ),
              }),
            })
          : null),
      (t[7] = p),
      (t[8] = f),
      (t[9] = C),
      (t[10] = w))
    : (w = t[10]);
  let T = `${c}:${l ?? ``}:${C}`,
    E;
  t[11] !== r || t[12] !== o || t[13] !== s || t[14] !== l || t[15] !== C
    ? ((E =
        l == null
          ? (e) =>
              (0, $.jsx)(zr, { ...e, activeFilePath: r, comparisonRoot: o, comparisonTarget: s, root: C })
          : void 0),
      (t[11] = r),
      (t[12] = o),
      (t[13] = s),
      (t[14] = l),
      (t[15] = C),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== r ||
  t[18] !== i ||
  t[19] !== l ||
  t[20] !== c ||
  t[21] !== d ||
  t[22] !== C ||
  t[23] !== T ||
  t[24] !== E
    ? ((D = (0, $.jsx)(
        Un,
        {
          activeFilePath: r,
          autoFocusSearch: i,
          hostId: c,
          environmentId: l,
          includeHidden: !0,
          onSelectFile: d,
          root: C,
          renderTree: E,
        },
        T,
      )),
      (t[17] = r),
      (t[18] = i),
      (t[19] = l),
      (t[20] = c),
      (t[21] = d),
      (t[22] = C),
      (t[23] = T),
      (t[24] = E),
      (t[25] = D))
    : (D = t[25]);
  let O;
  return (
    t[26] !== w || t[27] !== D
      ? ((O = (0, $.jsxs)(`div`, { className: `flex min-h-0 min-w-0 flex-1 flex-col`, children: [w, D] })),
        (t[26] = w),
        (t[27] = D),
        (t[28] = O))
      : (O = t[28]),
    O
  );
}
var qr, Jr, $, Yr, Xr;
function Zr() {
  return (Zr = e(() => {
    ((qr = R()),
      D(),
      j(),
      k(),
      g(),
      (Jr = W()),
      M(),
      Se(),
      je(),
      Fe(),
      Gt(),
      _e(),
      s(),
      L(),
      r(),
      or(),
      zt(),
      y(),
      q(),
      h(),
      vr(),
      rt(),
      Wr(),
      ($ = V()),
      (Yr = 0.6),
      (Xr = 200));
  }))();
}
export {
  Or as a,
  Er as c,
  ur as d,
  Un as f,
  In as h,
  Lr as i,
  Cr as l,
  zn as m,
  Zr as n,
  yr as o,
  or as p,
  Rr as r,
  Dr as s,
  Gr as t,
  sr as u,
};
//# sourceMappingURL=review-file-tree-side-pane-6403b8872f72.js.map
