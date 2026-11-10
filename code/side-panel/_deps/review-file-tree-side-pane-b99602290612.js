import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Rt as n,
  A3t as r,
  AMt as i,
  AT as a,
  AX as o,
  Amn as s,
  B4t as c,
  B6t as l,
  BE as u,
  C1 as d,
  CT as f,
  Cpn as p,
  DD as m,
  DI as h,
  EI as g,
  ELt as _,
  Eln as v,
  F3t as y,
  GQ as b,
  Gwt as x,
  H4t as S,
  HLt as C,
  Ig as w,
  J4t as ee,
  JG as T,
  JK as E,
  JQ as D,
  KG as O,
  KQ as k,
  KYt as A,
  LE as j,
  M3t as M,
  ME as N,
  MT as P,
  N3t as F,
  NX as I,
  O3t as L,
  Opn as R,
  PE as te,
  QRt as ne,
  Qit as z,
  RQ as re,
  Rit as B,
  SD as ie,
  SQ as ae,
  ST as oe,
  Sln as se,
  Spn as V,
  Tg as H,
  UQ as U,
  VLt as W,
  WQ as ce,
  XD as G,
  XQ as le,
  YQ as ue,
  ZD as K,
  ZG as de,
  Zit as q,
  _O as fe,
  _Q as pe,
  _T as me,
  _zt as he,
  a3t as ge,
  cRt as _e,
  dD as ve,
  e9t as ye,
  fI as be,
  gRt as xe,
  hLt as Se,
  hmn as J,
  i6t as Ce,
  iB as we,
  jT as Te,
  kMt as Ee,
  kT as De,
  kmn as Y,
  mLt as Oe,
  nB as ke,
  nD as Ae,
  nTt as je,
  nln as Me,
  o3t as Ne,
  oMt as Pe,
  pI as Fe,
  pLt as Ie,
  qK as Le,
  qQ as Re,
  qYt as ze,
  rB as Be,
  rMt as Ve,
  rTt as He,
  s6t as Ue,
  sRt as We,
  snn as Ge,
  vLt as Ke,
  vpn as qe,
  w1 as Je,
  wT as Ye,
  wg as Xe,
  xRt as Ze,
  xT as Qe,
  yO as $e,
  yRt as et,
  yzt as tt,
  zg as nt,
  zit as rt,
} from "./app-initial-f094ef01c64d.js";
import {
  GT as it,
  WT as at,
  aS as ot,
  ab as st,
  eb as ct,
  oS as lt,
} from "./app-primary-4c40d73a1074.js";
import { n as ut, t as dt } from "./review-preferences-model-c2edfefe5a2c.js";
import { n as ft, r as pt } from "./pull-request-readonly-comment-6e9ac0779fb8.js";
import { g as mt, v as ht } from "./pull-request-actions-7f7377d4b593.js";
import { n as gt, t as _t } from "./pull-request-comment-72460362f3f8.js";
import { c as vt, l as yt } from "./pull-request-detail-model-6c8655a9e7d6.js";
import { n as bt, t as xt } from "./use-conversation-diff-comments-ab6bb05add1f.js";
import {
  a as St,
  c as Ct,
  d as wt,
  f as Tt,
  l as Et,
  n as Dt,
  o as Ot,
  r as kt,
  s as At,
  u as jt,
} from "./review-file-tree-pane-b743a8f06e62.js";
import { n as Mt, t as Nt } from "./filter-alt-aeda224d8ab7.js";
var Pt,
  Ft = e(() => {
    (L(),
      Xe(),
      Ne(),
      (Pt = Ce(ge, (e, { get: t }) => {
        let n = t(H, e);
        if (n.isError) return { type: `error` };
        if (n.isPending) return { type: `loading` };
        let r = n.data?.details;
        return n.data != null && r == null
          ? { type: `loading` }
          : r == null
            ? { type: `not-found` }
            : { type: `success`, data: r };
      })));
  });
function It(e) {
  let t = (0, Lt.c)(12),
    {
      commentAttachment: n,
      hostId: r,
      metadataAccessory: i,
      pullRequest: a,
      pullRequestComment: o,
      workspaceRequest: s,
    } = e,
    c = y(yt),
    l;
  t[0] !== r || t[1] !== a.hostname
    ? ((l = {
        hostId: r,
        hostname: a.hostname,
        provider: `github-cli`,
        source: `pull_request_board`,
      }),
      (t[0] = r),
      (t[1] = a.hostname),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === c ? (u = t[4]) : ((u = { enabled: c }), (t[3] = c), (t[4] = u));
  let { data: d } = F(w, l, u),
    f;
  return (
    t[5] !== n || t[6] !== d || t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== s
      ? ((f =
          o == null
            ? (0, Rt.jsx)(ft, {
                comment: n,
                createdAt: n.createdAt,
                defaultCollapsed: n.isResolved === !0,
                headerAccessory:
                  n.isResolved === !0
                    ? (0, Rt.jsx)(p, {
                        id: `pullRequestDetail.comment.resolved`,
                        defaultMessage: `Resolved`,
                        description: `Status shown on a resolved pull request code review thread`,
                      })
                    : void 0,
                metadataAccessory: i,
                replies: n.replies,
                url: n.url,
              })
            : (0, Rt.jsx)(_t, {
                account: d?.status === `success` ? d.account : null,
                comment: o,
                commentAttachment: n,
                inline: !0,
                metadataAccessory: i,
                pullRequest: a,
                source: `pull_request_board`,
                workspaceRequest: s,
              })),
        (t[5] = n),
        (t[6] = d),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var Lt,
  Rt,
  zt = e(() => {
    ((Lt = Y()), L(), V(), pt(), gt(), nt(), vt(), (Rt = J()));
  });
function Bt(e) {
  let t = (0, Vt.c)(37),
    { conversationId: n, enablePullRequestComments: r, localConversationId: i } = e,
    a = r === void 0 || r,
    { comments: o, modelComments: s, setComments: c } = bt(n, i),
    l = String(n),
    u;
  t[0] === l ? (u = t[1]) : ((u = Ge(l)), (t[0] = l), (t[1] = u));
  let d = u,
    f = F(x, d),
    p = F(je, d),
    h = y(m) ?? f,
    g = ze(p ?? `local`),
    { data: _ } = y(ie),
    v = _?.root ?? null,
    b;
  t[2] !== d || t[3] !== g.id || t[4] !== v
    ? ((b = { conversationId: d, hostId: g.id, root: v }),
      (t[2] = d),
      (t[3] = g.id),
      (t[4] = v),
      (t[5] = b))
    : (b = t[5]);
  let S = F(I, b),
    C = a && h != null,
    w;
  t[6] === C ? (w = t[7]) : ((w = { enabled: C }), (t[6] = C), (t[7] = w));
  let { data: ee } = it(h, g, `diff_comment_sources`, w),
    T;
  t[8] !== S || t[9] !== ee
    ? ((T = ee?.trim() || S?.trim() || ``), (t[8] = S), (t[9] = ee), (t[10] = T))
    : (T = t[10]);
  let E = T,
    D = p ?? void 0,
    O;
  t[11] !== E || t[12] !== h || t[13] !== D
    ? ((O = { cwd: h, headBranch: E, hostId: D, operationSource: `diff_comment_sources` }),
      (t[11] = E),
      (t[12] = h),
      (t[13] = D),
      (t[14] = O))
    : (O = t[14]);
  let k = F(Pt, O),
    A;
  t[15] !== k.data || t[16] !== k.type
    ? ((A = k.type === `success` ? Pe(k.data.url ?? k.data.boardItem?.url ?? ``) : null),
      (t[15] = k.data),
      (t[16] = k.type),
      (t[17] = A))
    : (A = t[17]);
  let j = A,
    M;
  t[18] !== p || t[19] !== E || t[20] !== k.data || t[21] !== k.type || t[22] !== h
    ? ((M =
        h != null && E.length > 0 && k.type === `success`
          ? {
              cwd: ye(h),
              headBranch: E,
              hostId: p ?? void 0,
              number: k.data.number,
              repo: k.data.repo,
            }
          : null),
      (t[18] = p),
      (t[19] = E),
      (t[20] = k.data),
      (t[21] = k.type),
      (t[22] = h),
      (t[23] = M))
    : (M = t[23]);
  let N = M,
    P = a && k.type === `success` ? k.data.commentAttachments : void 0,
    L;
  t[24] !== p || t[25] !== a || t[26] !== j || t[27] !== k.data || t[28] !== k.type || t[29] !== N
    ? ((L =
        !a || k.type !== `success` || j == null || N == null
          ? void 0
          : (e, t) =>
              (0, Ht.createElement)(It, {
                commentAttachment: e,
                hostId: p ?? `local`,
                metadataAccessory: t,
                pullRequest: j,
                pullRequestComment: k.data.activityItems.find(
                  (t) => t.type === `review_comment` && t.reviewThreadId === e.reviewThreadId,
                ),
                workspaceRequest: N,
              })),
      (t[24] = p),
      (t[25] = a),
      (t[26] = j),
      (t[27] = k.data),
      (t[28] = k.type),
      (t[29] = N),
      (t[30] = L))
    : (L = t[30]);
  let R;
  return (
    t[31] !== o || t[32] !== s || t[33] !== c || t[34] !== P || t[35] !== L
      ? ((R = {
          commentProps: {
            enableComments: !0,
            comments: o,
            modelComments: s,
            onCommentsChange: c,
            readonlyComments: P,
            renderReadonlyComment: L,
          },
        }),
        (t[31] = o),
        (t[32] = s),
        (t[33] = c),
        (t[34] = P),
        (t[35] = L),
        (t[36] = R))
      : (R = t[36]),
    R
  );
}
var Vt,
  Ht,
  Ut = e(() => {
    ((Vt = Y()), L(), l(), (Ht = t(s(), 1)), He(), at(), Ve(), Ft(), ve(), A(), o(), zt(), xt());
  });
function Wt(e) {
  return [null, ...e.filter((e) => e.length > 0)];
}
var Gt = e(() => {});
function Kt(e) {
  let t = new Map();
  for (let n of e) t.has(n.path) || t.set(n.path, { displayPath: n.path, path: n.path });
  return G([...t.values()]).map(({ entry: e, treePath: t }) => ({ ...e, displayPath: t }));
}
var qt = e(() => {
  K();
});
function Jt(e) {
  let t = (0, an.c)(115),
    {
      activeFilePath: n,
      autoFocusSearch: i,
      root: a,
      includeHidden: o,
      hostId: s,
      environmentId: c,
      onSelectFile: l,
      refreshKey: u,
    } = e,
    d = r(xe),
    f;
  t[0] !== c || t[1] !== s || t[2] !== o || t[3] !== a
    ? ((f = { hostId: s, environmentId: c, includeHidden: o, root: a }),
      (t[0] = c),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a),
      (t[4] = f))
    : (f = t[4]);
  let p = M(un, f),
    m = y(p),
    h;
  t[5] !== c || t[6] !== s || t[7] !== o || t[8] !== a
    ? ((h = { hostId: s, environmentId: c, includeHidden: o, root: a }),
      (t[5] = c),
      (t[6] = s),
      (t[7] = o),
      (t[8] = a),
      (t[9] = h))
    : (h = t[9]);
  let g = M(dn, h),
    _ = y(g),
    v;
  t[10] === a ? (v = t[11]) : ((v = ye(a)), (t[10] = a), (t[11] = v));
  let x = v,
    S,
    C;
  t[12] !== n || t[13] !== m || t[14] !== a
    ? ((S = n == null ? null : k({ filePath: n, root: a })),
      (C = Re(m, S)),
      (t[12] = n),
      (t[13] = m),
      (t[14] = a),
      (t[15] = S),
      (t[16] = C))
    : ((S = t[15]), (C = t[16]));
  let w = C,
    [T, E] = (0, X.useState)(w.expandedPaths),
    [O, A] = (0, X.useState)(w.selectedPath),
    j = (0, X.useRef)(T),
    N = (0, X.useRef)(null),
    P = (0, X.useRef)(null),
    I = (0, X.useRef)(O),
    L;
  t[17] !== c || t[18] !== T || t[19] !== s || t[20] !== o || t[21] !== u || t[22] !== a
    ? ((L = {
        directoryPath: null,
        expandedPaths: T,
        hostId: s,
        environmentId: c,
        includeHidden: o,
        refreshKey: u,
        workspaceRoot: a,
      }),
      (t[17] = c),
      (t[18] = T),
      (t[19] = s),
      (t[20] = o),
      (t[21] = u),
      (t[22] = a),
      (t[23] = L))
    : (L = t[23]);
  let { error: R, files: te, isEmpty: ne, isLoading: re } = F(we, L),
    B;
  t[24] === a ? (B = t[25]) : ((B = [a]), (t[24] = a), (t[25] = B));
  let ie = B,
    ae;
  t[26] !== g || t[27] !== d
    ? ((ae = (e) => {
        let { files: t, query: n } = e;
        n.trim().length !== 0 && d.set(g, { files: t, query: n });
      }),
      (t[26] = g),
      (t[27] = d),
      (t[28] = ae))
    : (ae = t[28]);
  let oe = z(ae),
    se = c == null ? m.searchQuery : ``,
    V;
  t[29] !== oe || t[30] !== s || t[31] !== ie || t[32] !== se
    ? ((V = { hostId: s, onFiles: oe, query: se, roots: ie }),
      (t[29] = oe),
      (t[30] = s),
      (t[31] = ie),
      (t[32] = se),
      (t[33] = V))
    : (V = t[33]);
  let { files: H, isLoading: U } = lt(V),
    W;
  t[34] !== c || t[35] !== m.searchQuery
    ? ((W = c == null ? m.searchQuery.trim() : ``),
      (t[34] = c),
      (t[35] = m.searchQuery),
      (t[36] = W))
    : (W = t[36]);
  let G = W,
    le;
  t[37] !== _ || t[38] !== m.searchQuery || t[39] !== H
    ? ((le = ce(H, _, m.searchQuery)),
      (t[37] = _),
      (t[38] = m.searchQuery),
      (t[39] = H),
      (t[40] = le))
    : (le = t[40]);
  let K = le,
    de;
  t[41] !== x || t[42] !== l || t[43] !== a || t[44] !== d
    ? ((de = (e, t) => {
        if (l != null) {
          l(ee(a, e), t);
          return;
        }
        d.get(Je).mutate({ cwd: x, path: e });
      }),
      (t[41] = x),
      (t[42] = l),
      (t[43] = a),
      (t[44] = d),
      (t[45] = de))
    : (de = t[45]);
  let q = z(de),
    fe;
  t[46] === q
    ? (fe = t[47])
    : ((fe = (e) => {
        Qt(e, (e) => {
          q(e, { isPreview: !0 });
        });
      }),
      (t[46] = q),
      (t[47] = fe));
  let pe = z(fe),
    me;
  t[48] === q
    ? (me = t[49])
    : ((me = (e) => {
        q(e, { isPreview: !1 });
      }),
      (t[48] = q),
      (t[49] = me));
  let he = z(me),
    ge;
  t[50] !== g || t[51] !== m.searchQuery || t[52] !== d || t[53] !== q || t[54] !== K
    ? ((ge = (e) => {
        (K != null && d.set(g, { files: K, query: m.searchQuery }), q(e, { isPreview: !0 }));
      }),
      (t[50] = g),
      (t[51] = m.searchQuery),
      (t[52] = d),
      (t[53] = q),
      (t[54] = K),
      (t[55] = ge))
    : (ge = t[55]);
  let _e = z(ge),
    ve;
  t[56] === q
    ? (ve = t[57])
    : ((ve = (e) => {
        q(e, { isPreview: !1 });
      }),
      (t[56] = q),
      (t[57] = ve));
  let be = z(ve),
    Se;
  t[58] !== p || t[59] !== d
    ? ((Se = () => {
        let e = N.current;
        e != null && ((N.current = null), d.set(p, (t) => D(t, e)));
      }),
      (t[58] = p),
      (t[59] = d),
      (t[60] = Se))
    : (Se = t[60]);
  let J = z(Se),
    Ce;
  t[61] !== p || t[62] !== d
    ? ((Ce = (e) => {
        d.set(p, (t) => ue(t, e));
      }),
      (t[61] = p),
      (t[62] = d),
      (t[63] = Ce))
    : (Ce = t[63]);
  let Te = z(Ce),
    Ee;
  t[64] === J
    ? (Ee = t[65])
    : ((Ee = (e) => {
        ((N.current = e),
          P.current != null && window.clearTimeout(P.current),
          (P.current = window.setTimeout(() => {
            ((P.current = null), J());
          }, cn)));
      }),
      (t[64] = J),
      (t[65] = Ee));
  let De = z(Ee),
    Y;
  t[66] === De
    ? (Y = t[67])
    : ((Y = (e) => {
        (rn(j.current, e.expandedPaths) || ((j.current = e.expandedPaths), E(e.expandedPaths)),
          I.current !== e.selectedPath && ((I.current = e.selectedPath), A(e.selectedPath)),
          De(e));
      }),
      (t[66] = De),
      (t[67] = Y));
  let Oe = z(Y),
    ke,
    Ae;
  (t[68] !== S || t[69] !== p || t[70] !== d
    ? ((ke = () => {
        if (S == null) return;
        let e = b(j.current, S);
        (rn(j.current, e) || ((j.current = e), E(e)),
          I.current !== S && ((I.current = S), A(S)),
          (N.current = null),
          P.current != null && (window.clearTimeout(P.current), (P.current = null)),
          d.set(p, (e) => Re(e, S)));
      }),
      (Ae = [S, p, d]),
      (t[68] = S),
      (t[69] = p),
      (t[70] = d),
      (t[71] = ke),
      (t[72] = Ae))
    : ((ke = t[71]), (Ae = t[72])),
    (0, X.useEffect)(ke, Ae));
  let je, Me;
  (t[73] !== c ||
  t[74] !== T ||
  t[75] !== s ||
  t[76] !== o ||
  t[77] !== u ||
  t[78] !== a ||
  t[79] !== d
    ? ((je = () => {
        en(d, {
          expandedItems: T,
          hostId: s,
          environmentId: c,
          includeHidden: o,
          refreshKey: u,
          root: a,
        });
      }),
      (Me = [T, s, c, o, u, a, d]),
      (t[73] = c),
      (t[74] = T),
      (t[75] = s),
      (t[76] = o),
      (t[77] = u),
      (t[78] = a),
      (t[79] = d),
      (t[80] = je),
      (t[81] = Me))
    : ((je = t[80]), (Me = t[81])),
    (0, X.useEffect)(je, Me));
  let Ne, Pe;
  (t[82] === J
    ? ((Ne = t[83]), (Pe = t[84]))
    : ((Ne = () => () => {
        (P.current != null && (window.clearTimeout(P.current), (P.current = null)), J());
      }),
      (Pe = [J]),
      (t[82] = J),
      (t[83] = Ne),
      (t[84] = Pe)),
    (0, X.useEffect)(Ne, Pe));
  let Fe;
  t[85] !== i || t[86] !== c || t[87] !== Te || t[88] !== m.searchQuery
    ? ((Fe =
        c == null
          ? (0, Z.jsx)(`div`, {
              className: `shrink-0 px-2 pt-2 pb-px`,
              children: (0, Z.jsx)(At, {
                autoFocus: i,
                inputId: `workspace-directory-tree-search`,
                onQueryChange: Te,
                searchQuery: m.searchQuery,
              }),
            })
          : null),
      (t[85] = i),
      (t[86] = c),
      (t[87] = Te),
      (t[88] = m.searchQuery),
      (t[89] = Fe))
    : (Fe = t[89]);
  let Ie;
  t[90] !== S ||
  t[91] !== c ||
  t[92] !== R ||
  t[93] !== T ||
  t[94] !== te ||
  t[95] !== x ||
  t[96] !== he ||
  t[97] !== be ||
  t[98] !== _e ||
  t[99] !== pe ||
  t[100] !== Oe ||
  t[101] !== s ||
  t[102] !== ne ||
  t[103] !== re ||
  t[104] !== U ||
  t[105] !== m.scrollTop ||
  t[106] !== m.searchQuery ||
  t[107] !== a ||
  t[108] !== O ||
  t[109] !== G.length ||
  t[110] !== K
    ? ((Ie = (0, Z.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children:
          G.length > 0
            ? (0, Z.jsx)(Xt, {
                files: K,
                hostId: s,
                isLoading: U,
                onOpenFile: be,
                onSelectFile: _e,
                query: m.searchQuery,
                root: a,
              })
            : (0, Z.jsx)(Yt, {
                environmentId: c,
                error: R,
                files: te,
                gitCwd: x,
                hostId: s,
                initialExpandedPaths: T,
                initialScrollTop: m.scrollTop,
                isEmpty: ne,
                isLoading: re,
                onOpenFile: he,
                onSelectionChange: pe,
                onStateChange: Oe,
                revealSelectedPath: S != null,
                selectedPath: O,
              }),
      })),
      (t[90] = S),
      (t[91] = c),
      (t[92] = R),
      (t[93] = T),
      (t[94] = te),
      (t[95] = x),
      (t[96] = he),
      (t[97] = be),
      (t[98] = _e),
      (t[99] = pe),
      (t[100] = Oe),
      (t[101] = s),
      (t[102] = ne),
      (t[103] = re),
      (t[104] = U),
      (t[105] = m.scrollTop),
      (t[106] = m.searchQuery),
      (t[107] = a),
      (t[108] = O),
      (t[109] = G.length),
      (t[110] = K),
      (t[111] = Ie))
    : (Ie = t[111]);
  let Le;
  return (
    t[112] !== Fe || t[113] !== Ie
      ? ((Le = (0, Z.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col`,
          children: [Fe, Ie],
        })),
        (t[112] = Fe),
        (t[113] = Ie),
        (t[114] = Le))
      : (Le = t[114]),
    Le
  );
}
function Yt(e) {
  let t = (0, an.c)(18),
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
      onSelectionChange: f,
      onStateChange: m,
      revealSelectedPath: h,
      selectedPath: g,
    } = e;
  if (n != null) {
    let e;
    return (
      t[0] === n.message
        ? (e = t[1])
        : ((e = (0, Z.jsx)(`div`, {
            className: `px-3 py-2 text-xs text-danger`,
            children: n.message,
          })),
          (t[0] = n.message),
          (t[1] = e)),
      e
    );
  }
  if (u) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(tn, {
            children: (0, Z.jsx)(p, {
              id: `threadSidePanel.workspaceBrowser.loading`,
              defaultMessage: `Loading directory entries…`,
              description: `Loading message shown while the workspace file browser is fetching a directory`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (l) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(tn, {
            children: (0, Z.jsx)(p, {
              id: `threadSidePanel.workspaceBrowser.empty`,
              defaultMessage: `No files in this folder`,
              description: `Empty state shown when a workspace directory contains no visible entries`,
            }),
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let _ = o == null,
    v;
  t[4] === d
    ? (v = t[5])
    : ((v = (e) => {
        let t = $t(e.nativeEvent);
        t != null && d(t);
      }),
      (t[4] = d),
      (t[5] = v));
  let y;
  return (
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== a ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== f ||
    t[12] !== m ||
    t[13] !== h ||
    t[14] !== g ||
    t[15] !== _ ||
    t[16] !== v
      ? ((y = (0, Z.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, Z.jsx)(Et, {
            cwd: i,
            contextMenuEnabled: _,
            hostId: a,
            initialExpandedPaths: s,
            initialScrollTop: c,
            onDoubleClick: v,
            onSelectionChange: f,
            onStateChange: m,
            paths: r,
            revealSelectedPath: h,
            selectedPath: g,
          }),
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = s),
        (t[10] = c),
        (t[11] = f),
        (t[12] = m),
        (t[13] = h),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y))
      : (y = t[17]),
    y
  );
}
function Xt(e) {
  let t = (0, an.c)(22),
    { files: n, hostId: r, isLoading: i, onOpenFile: a, onSelectFile: o, query: s, root: c } = e,
    l;
  t[0] === n ? (l = t[1]) : ((l = n == null ? null : Kt(n)), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  t[2] === u ? (d = t[3]) : ((d = u == null ? sn : nn(u.map(Zt))), (t[2] = u), (t[3] = d));
  let f = d;
  if (u == null || (i && u.length === 0)) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(tn, {
            children: (0, Z.jsx)(p, {
              id: `thread.fileTreePanel.searchingFiles`,
              defaultMessage: `Searching files…`,
              description: `Loading state shown while searching workspace files`,
            }),
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (u.length === 0) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(tn, {
            children: (0, Z.jsx)(p, {
              id: `thread.fileTreePanel.noMatchingFiles`,
              defaultMessage: `No matching files`,
              description: `Empty state shown when workspace file search has no results`,
            }),
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let m;
  t[6] === c ? (m = t[7]) : ((m = ye(c)), (t[6] = c), (t[7] = m));
  let h;
  t[8] !== o || t[9] !== u
    ? ((h = (e) => {
        let t = u.find((t) => e.includes(t.displayPath));
        t != null && o(t.path);
      }),
      (t[8] = o),
      (t[9] = u),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== a || t[12] !== u
    ? ((g = (e) => {
        let t = $t(e.nativeEvent),
          n = u.find((e) => e.displayPath === t);
        n != null && a(n.path);
      }),
      (t[11] = a),
      (t[12] = u),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== r ||
    t[15] !== f ||
    t[16] !== s ||
    t[17] !== u ||
    t[18] !== m ||
    t[19] !== h ||
    t[20] !== g
      ? ((_ = (0, Z.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, Z.jsx)(Et, {
            flattenEmptyDirectories: !0,
            cwd: m,
            hostId: r,
            initialExpandedPaths: f,
            onSelectionChange: h,
            onDoubleClick: g,
            paths: u,
            resetKey: s,
          }),
        })),
        (t[14] = r),
        (t[15] = f),
        (t[16] = s),
        (t[17] = u),
        (t[18] = m),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function Zt(e) {
  return e.displayPath;
}
function Qt(e, t) {
  let n = e.find((e) => !e.endsWith(on));
  n != null && t(n);
}
function $t(e) {
  let t = wt(e);
  return t == null || t.endsWith(on) ? null : t;
}
async function en(
  e,
  { expandedItems: t, hostId: n, environmentId: r, includeHidden: i, refreshKey: a, root: o },
) {
  await Promise.all(
    Wt(t).map(async (t) => {
      await e.query
        .fetch(Be, {
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
function tn(e) {
  let t = (0, an.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, {
          className: `px-2 py-2 text-start text-base text-codex-description`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function nn(e) {
  let t = new Set();
  for (let n of e) {
    let e = (n.endsWith(`/`) ? n.slice(0, -1) : n).split(`/`);
    for (let n = 1; n < e.length; n += 1) t.add(e.slice(0, n).join(`/`));
  }
  return Array.from(t);
}
function rn(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
var an,
  X,
  Z,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn = e(() => {
    ((an = Y()),
      L(),
      l(),
      (X = t(s(), 1)),
      V(),
      jt(),
      d(),
      Tt(),
      Ct(),
      ot(),
      ke(),
      Gt(),
      qt(),
      le(),
      Ze(),
      S(),
      q(),
      (Z = J()),
      (on = `/`),
      (sn = []),
      (cn = 100),
      (ln = { expandedPaths: sn, scrollTop: 0, searchQuery: ``, selectedPath: null }),
      (un = Ue(xe, (e) => ln)),
      (dn = Ue(xe, (e) => null)));
  });
function pn(e) {
  let t = (0, mn.c)(5),
    { children: n, isActive: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r
        ? (0, hn.jsx)(`span`, {
            "aria-hidden": !0,
            className: `absolute -end-1.5 -top-1.5 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-primary-solid px-0.5 text-xs leading-none font-semibold text-primary-solid select-none`,
            children: (0, hn.jsx)(qe, { value: 1 }),
          })
        : null),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, hn.jsxs)(`span`, { className: `relative inline-flex`, children: [n, i] })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var mn,
  hn,
  gn = e(() => {
    ((mn = Y()), V(), (hn = J()));
  });
function _n(e) {
  let t = (0, xn.c)(54),
    { reserveBottomPadding: n } = e,
    i = r(xe),
    o = y(j),
    s = y($e),
    c = y(P),
    l = y(oe),
    u = y(f),
    d = y(Ye),
    p = y(te),
    m = y(ut),
    h = y(Ae),
    g = y(ae),
    _ = y(ie).data,
    v = _?.commonDir ?? null,
    b = _?.root ?? null,
    x = g.id,
    S;
  t[0] === p ? (S = t[1]) : ((S = p.map(yn)), (t[0] = p), (t[1] = S));
  let C;
  t[2] !== h || t[3] !== g.id || t[4] !== v || t[5] !== b || t[6] !== S
    ? ((C = { cwd: h, gitCommonDir: v, gitRoot: b, hostId: x, paths: S }),
      (t[2] = h),
      (t[3] = g.id),
      (t[4] = v),
      (t[5] = b),
      (t[6] = S),
      (t[7] = C))
    : (C = t[7]);
  let { hasLinguistGeneratedAttributes: w, paths: ee } = Ot(C),
    T;
  t[8] !== m || t[9] !== ee || t[10] !== w || t[11] !== d
    ? ((T = m && w ? d.filter((e) => !ee.has(e.gitPath)) : d),
      (t[8] = m),
      (t[9] = ee),
      (t[10] = w),
      (t[11] = d),
      (t[12] = T))
    : (T = t[12]);
  let E = T,
    D;
  t[13] === i.value ? (D = t[14]) : ((D = et(i.value)), (t[13] = i.value), (t[14] = D));
  let O = D,
    k = i.value.routeKind === `local-thread` ? i.value.conversationId : null,
    A;
  t[15] === O ? (A = t[16]) : ((A = O ?? ne({ entrypoint: `home` })), (t[15] = O), (t[16] = A));
  let M = s !== `last-turn`,
    N;
  t[17] !== k || t[18] !== A || t[19] !== M
    ? ((N = { conversationId: A, enablePullRequestComments: M, localConversationId: k }),
      (t[17] = k),
      (t[18] = A),
      (t[19] = M),
      (t[20] = N))
    : (N = t[20]);
  let { commentProps: F } = Bt(N),
    I;
  bb0: {
    let e = F.readonlyComments,
      n = F.modelComments;
    if ((e == null || e.length === 0) && n.length === 0) {
      I = void 0;
      break bb0;
    }
    let r;
    (t[21] !== h || t[22] !== E || t[23] !== n || t[24] !== e
      ? ((r = mt({ comments: [...n, ...(e ?? [])], filePaths: E.map(vn), workspaceRoot: h })),
        (t[21] = h),
        (t[22] = E),
        (t[23] = n),
        (t[24] = e),
        (t[25] = r))
      : (r = t[25]),
      (I = r));
  }
  let L = I,
    R = (c?.location.domain === `diff` ? c.location.path : void 0) ?? l,
    z;
  t[26] !== E || t[27] !== R
    ? ((z = E.some((e) => e.path === R) ? R : E[0]?.path), (t[26] = E), (t[27] = R), (t[28] = z))
    : (z = t[28]);
  let re = z,
    B;
  t[29] !== E || t[30] !== o || t[31] !== i
    ? ((B = (e) => {
        E.some((t) => t.path === e) &&
          requestAnimationFrame(() => {
            (Qe(i, e), !o && De(i, e));
          });
      }),
      (t[29] = E),
      (t[30] = o),
      (t[31] = i),
      (t[32] = B))
    : (B = t[32]);
  let se = B,
    V;
  t[33] === i ? (V = t[34]) : ((V = (e) => a(i, e)), (t[33] = i), (t[34] = V));
  let H;
  t[35] !== u || t[36] !== V
    ? ((H = (0, Q.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, Q.jsx)(At, {
          inputId: `review-changed-files-search`,
          onQueryChange: V,
          searchQuery: u,
        }),
      })),
      (t[35] = u),
      (t[36] = V),
      (t[37] = H))
    : (H = t[37]);
  let U;
  t[38] === w ? (U = t[39]) : ((U = w ? (0, Q.jsx)(bn, {}) : null), (t[38] = w), (t[39] = U));
  let W;
  t[40] !== H || t[41] !== U
    ? ((W = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1 px-2 pt-2 pb-px`,
        children: [H, U],
      })),
      (t[40] = H),
      (t[41] = U),
      (t[42] = W))
    : (W = t[42]);
  let ce;
  t[43] !== re ||
  t[44] !== L ||
  t[45] !== h ||
  t[46] !== E ||
  t[47] !== g.id ||
  t[48] !== n ||
  t[49] !== se
    ? ((ce = (0, Q.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, Q.jsx)(Dt, {
          activePath: re,
          allowSelectingActivePath: !0,
          commentCountByPath: L,
          cwd: h,
          hostId: g.id,
          onSelectPath: se,
          entries: E,
          reserveBottomPadding: n,
        }),
      })),
      (t[43] = re),
      (t[44] = L),
      (t[45] = h),
      (t[46] = E),
      (t[47] = g.id),
      (t[48] = n),
      (t[49] = se),
      (t[50] = ce))
    : (ce = t[50]);
  let G;
  return (
    t[51] !== W || t[52] !== ce
      ? ((G = (0, Q.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col`,
          children: [W, ce],
        })),
        (t[51] = W),
        (t[52] = ce),
        (t[53] = G))
      : (G = t[53]),
    G
  );
}
function vn(e) {
  return e.path;
}
function yn(e) {
  return e.gitPath;
}
function bn() {
  let e = (0, xn.c)(20),
    t = r(ge),
    n = R(),
    i = y(ut),
    [a, o] = (0, Sn.useState)(!1),
    s;
  e[0] === n
    ? (s = e[1])
    : ((s = n.formatMessage({
        id: `codex.review.fileTree.filters`,
        defaultMessage: `Filter changed files`,
        description: `Accessible label for the changed-files tree filter menu`,
      })),
      (e[0] = n),
      (e[1] = s));
  let c = i ? `secondary` : `ghost`,
    l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(Nt, { "aria-hidden": !0, className: `icon-sm` })), (e[2] = l))
    : (l = e[2]);
  let u;
  e[3] === i
    ? (u = e[4])
    : ((u = (0, Q.jsx)(pn, { isActive: i, children: l })), (e[3] = i), (e[4] = u));
  let d;
  e[5] !== i || e[6] !== s || e[7] !== c || e[8] !== u
    ? ((d = (0, Q.jsx)(Ee, {
        "aria-label": s,
        "aria-pressed": i,
        color: c,
        size: `toolbar`,
        uniform: !0,
        children: u,
      })),
      (e[5] = i),
      (e[6] = s),
      (e[7] = c),
      (e[8] = u),
      (e[9] = d))
    : (d = e[9]);
  let f;
  e[10] === t
    ? (f = e[11])
    : ((f = (e) => {
        (t.set(ut, e === !0), o(!1));
      }),
      (e[10] = t),
      (e[11] = f));
  let m;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(p, {
        id: `codex.review.fileTree.filterGeneratedFiles`,
        defaultMessage: `Filter generated files`,
        description: `Checkbox that hides files marked linguist-generated from the changed-files tree and review diff list`,
      })),
      (e[12] = m))
    : (m = e[12]);
  let h;
  e[13] !== i || e[14] !== f
    ? ((h = (0, Q.jsx)(T.CheckboxItem, { checked: i, onCheckedChange: f, children: m })),
      (e[13] = i),
      (e[14] = f),
      (e[15] = h))
    : (h = e[15]);
  let g;
  return (
    e[16] !== a || e[17] !== d || e[18] !== h
      ? ((g = (0, Q.jsx)(O, {
          align: `end`,
          contentWidth: `menu`,
          onOpenChange: o,
          open: a,
          triggerButton: d,
          children: h,
        })),
        (e[16] = a),
        (e[17] = d),
        (e[18] = h),
        (e[19] = g))
      : (g = e[19]),
    g
  );
}
var xn,
  Sn,
  Q,
  Cn = e(() => {
    ((xn = Y()),
      L(),
      (Sn = t(s(), 1)),
      V(),
      i(),
      de(),
      Ut(),
      n(),
      Ct(),
      Mt(),
      ht(),
      Ne(),
      Ze(),
      pe(),
      fe(),
      St(),
      u(),
      gn(),
      kt(),
      N(),
      me(),
      dt(),
      ve(),
      Te(),
      (Q = J()));
  });
function wn(e) {
  let t = r(xe),
    n = y(Oe),
    i = y(Ie),
    a = y(Se),
    o = y(C),
    s = y(st),
    c = (0, Dn.useRef)(null),
    l = tt(),
    u = n && (e.type === `changed-files` || e.roots.length > 0),
    d = (0, Dn.useCallback)(
      (e) => {
        let t = (c.current?.parentElement?.getBoundingClientRect().width ?? window.innerWidth) / l,
          n = Math.max(kn, t * On);
        return Math.min(Math.max(e, kn), n);
      },
      [l],
    ),
    f = d(a),
    p = e.type === `changed-files` && o && f > s,
    m = se(f);
  !n && m.get() !== f && m.set(f);
  let { isMounted: h, opacity: b, animatedSize: x } = Fe({ animation: i, size: m, isVisible: u }),
    S = (0, Dn.useCallback)(
      (e) => {
        if (e < We(kn)) {
          _(t, !1);
          return;
        }
        let n = d(e);
        (m.set(n), t.set(Se, n));
      },
      [m, d, t],
    );
  return !h && !u
    ? null
    : (0, $.jsxs)(v.div, {
        ref: c,
        style: { maxWidth: `${On * 100}%`, opacity: b, width: x },
        className: `relative flex h-full shrink-0 border-l border-default`,
        children: [
          (0, $.jsx)(g, {
            edge: `left`,
            defaultSize: f,
            getCurrentSize: () => m.get(),
            setSize: S,
          }),
          e.type === `changed-files`
            ? (0, $.jsx)(_n, { reserveBottomPadding: p })
            : e.roots.length === 0
              ? null
              : (0, $.jsx)(Tn, {
                  activeFilePath: e.activeFilePath ?? null,
                  autoFocusSearch: e.autoFocusSearch,
                  hostId: e.hostId,
                  environmentId: e.environmentId,
                  onSelectFile: e.onSelectFile,
                  roots: e.roots,
                }),
        ],
      });
}
function Tn(e) {
  let t = (0, En.c)(22),
    {
      activeFilePath: n,
      autoFocusSearch: r,
      hostId: i,
      environmentId: a,
      onSelectFile: o,
      roots: s,
    } = e,
    l = R(),
    u;
  t[0] !== n || t[1] !== s
    ? ((u = n == null ? null : re({ filePath: n, roots: s })), (t[0] = n), (t[1] = s), (t[2] = u))
    : (u = t[2]);
  let d = u,
    [f, p] = (0, Dn.useState)(n),
    [m, h] = (0, Dn.useState)(d ?? s[0]);
  if (f !== n) {
    p(n);
    let e = n != null && m != null && k({ filePath: n, root: m }) != null;
    d != null && !e && h(d);
  }
  let g;
  t[3] !== d || t[4] !== s || t[5] !== m
    ? ((g = m != null && s.includes(m) ? m : (d ?? s[0])),
      (t[3] = d),
      (t[4] = s),
      (t[5] = m),
      (t[6] = g))
    : (g = t[6]);
  let _ = g;
  if (_ == null) return null;
  let v;
  t[7] !== l || t[8] !== s || t[9] !== _
    ? ((v =
        s.length > 1
          ? (0, $.jsx)(`div`, {
              className: `flex shrink-0 border-b border-default px-2 py-1`,
              children: (0, $.jsx)(O, {
                contentWidth: `menuBounded`,
                triggerButton: (0, $.jsxs)(Ee, {
                  "aria-label": l.formatMessage({
                    id: `review.fileSource.browser.chooseFileTreeRoot`,
                    defaultMessage: `Choose file tree root`,
                    description: `Accessible label for the dropdown that selects the workspace root shown in the file tree`,
                  }),
                  className: `w-full`,
                  color: `outline`,
                  "data-tab-preview-pin-exempt": !0,
                  size: `toolbar`,
                  children: [
                    (0, $.jsx)(B, { "aria-hidden": !0, className: `icon-xs shrink-0` }),
                    (0, $.jsx)(`span`, { className: `truncate`, children: c(_) }),
                  ],
                }),
                children: s.map((e) =>
                  (0, $.jsx)(
                    T.Item,
                    {
                      LeftIcon: B,
                      RightIcon: e === _ ? Le : void 0,
                      tooltipText: e,
                      onSelect: () => {
                        h(e);
                      },
                      children: c(e),
                    },
                    e,
                  ),
                ),
              }),
            })
          : null),
      (t[7] = l),
      (t[8] = s),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y = `${i}:${a ?? ``}:${_}`,
    b;
  t[11] !== n ||
  t[12] !== r ||
  t[13] !== a ||
  t[14] !== i ||
  t[15] !== o ||
  t[16] !== _ ||
  t[17] !== y
    ? ((b = (0, $.jsx)(
        Jt,
        {
          activeFilePath: n,
          autoFocusSearch: r,
          hostId: i,
          environmentId: a,
          includeHidden: !0,
          onSelectFile: o,
          root: _,
        },
        y,
      )),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = i),
      (t[15] = o),
      (t[16] = _),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== v || t[20] !== b
      ? ((x = (0, $.jsxs)(`div`, {
          className: `flex min-h-0 min-w-0 flex-1 flex-col`,
          children: [v, b],
        })),
        (t[19] = v),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
var En,
  Dn,
  $,
  On,
  kn,
  An = e(() => {
    ((En = Y()),
      Me(),
      L(),
      (Dn = t(s(), 1)),
      V(),
      _e(),
      be(),
      W(),
      h(),
      Ke(),
      he(),
      i(),
      de(),
      fn(),
      le(),
      E(),
      rt(),
      Ze(),
      ct(),
      S(),
      Cn(),
      U(),
      ($ = J()),
      (On = 0.6),
      (kn = 200));
  });
export { Ut as a, gn as i, An as n, Bt as o, pn as r, wn as t };
//# sourceMappingURL=review-file-tree-side-pane-b99602290612.js.map
