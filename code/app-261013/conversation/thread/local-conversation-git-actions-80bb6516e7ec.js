import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  AO as i,
  CO as a,
  Cot as o,
  Fd as s,
  Hxt as c,
  IDt as l,
  Id as u,
  Ixt as ee,
  LR as d,
  Mz as f,
  Nz as p,
  Pft as m,
  Pxt as h,
  TJ as g,
  TO as _,
  VDt as v,
  Vxt as y,
  Wnt as b,
  _O as x,
  cut as S,
  cz as C,
  hot as w,
  i3 as T,
  jDt as E,
  lot as D,
  mO as te,
  oV as O,
  r3 as k,
  rst as A,
  sz as ne,
  t3 as j,
  vO as M,
  vzt as N,
  wot as P,
  xMt as F,
  yzt as I,
  zR as L,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  B_n as z,
  C$n as B,
  C3n as re,
  CEt as ie,
  DPn as ae,
  F5n as oe,
  FVt as se,
  F_n as ce,
  I3n as le,
  IVt as V,
  I_n as ue,
  Ifr as H,
  JPn as de,
  Jdr as fe,
  Lfr as pe,
  SEt as me,
  TPn as he,
  V_n as ge,
  XPn as _e,
  Ydr as U,
  ZPn as ve,
  atn as ye,
  dcr as be,
  dwn as W,
  ean as G,
  hO as K,
  hwn as q,
  itn as xe,
  jEt as Se,
  kEt as Ce,
  mO as J,
  m_r as Y,
  oFr as we,
  sFr as Te,
  tan as Ee,
  v8n as De,
  v_r as Oe,
  w$n as X,
} from "./app-initial-5851df3f6cb1.js";
import { Cm as ke, Hh as Ae, Sm as je, Uh as Me, Vh as Ne, Wh as Pe } from "./app-primary-fe8a450b3b04.js";
import { n as Fe, t as Ie } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as Le, t as Re } from "./summary-panel-menu-placement-7bab1be2eac6.js";
import {
  A as ze,
  B as Be,
  D as Z,
  E as Ve,
  F as He,
  G as Ue,
  H as We,
  I as Ge,
  K as Ke,
  L as qe,
  M as Je,
  N as Ye,
  O as Xe,
  Q as Ze,
  R as Qe,
  S as $e,
  T as et,
  U as tt,
  _ as nt,
  a as rt,
  b as it,
  d as at,
  et as ot,
  f as st,
  g as ct,
  h as lt,
  i as ut,
  j as dt,
  k as ft,
  l as pt,
  m as mt,
  nt as ht,
  o as gt,
  p as _t,
  r as vt,
  rt as yt,
  tt as bt,
  u as xt,
  v as St,
  w as Ct,
  x as wt,
  y as Tt,
} from "./git-action-new-branch-field-2b4ee066ae8f.js";
import {
  d as Et,
  f as Dt,
  i as Ot,
  l as kt,
  n as At,
  r as jt,
  t as Mt,
  u as Nt,
} from "./git-branch-switcher-91226a3079fc.js";
import { n as Pt, t as Ft } from "./create-pull-request-modal-content-2456152c0339.js";
function It(e) {
  let t = (0, Lt.c)(108),
    {
      defaultToDraft: n,
      open: i,
      onOpenChange: a,
      conversationId: s,
      target: c,
      codexWorktree: u,
      onRequestReset: d,
    } = e,
    f = n !== void 0 && n,
    p = u !== void 0 && u,
    h = ee(o),
    { cwd: g, hostConfig: _ } = c,
    v = R(se, s ?? null),
    [y, b] = (0, Rt.useState)(null),
    S = s ?? null,
    C,
    w;
  t[0] !== p || t[1] !== c || t[2] !== S
    ? ((w = { ...c, codexWorktree: p, conversationId: S }),
      (C = Ye(w)),
      (t[0] = p),
      (t[1] = c),
      (t[2] = S),
      (t[3] = C),
      (t[4] = w))
    : ((C = t[3]), (w = t[4]));
  let T = C,
    E = R(Ge, T),
    D = R(He, T),
    O = R(Qe, T),
    k = R(ct, w),
    A = R(lt, w),
    ne = R(nt, w),
    j = R(Tt, w),
    M = r(m.branchPrefix),
    N;
  t[5] !== s || t[6] !== _
    ? ((N = s == null ? null : { hostId: _.id, threadId: s }), (t[5] = s), (t[6] = _), (t[7] = N))
    : (N = t[7]);
  let P = R(oe, N),
    F = j,
    I;
  t[8] !== M || t[9] !== P
    ? ((I = me({ branchPrefix: M, conversationTitle: P })), (t[8] = M), (t[9] = P), (t[10] = I))
    : (I = t[10]);
  let L = y ?? I,
    z;
  t[11] === L ? (z = t[12]) : ((z = L.trim()), (t[11] = L), (t[12] = z));
  let B = z,
    re = Ee(B, 200),
    ie;
  t[13] !== F || t[14] !== re || t[15] !== i
    ? ((ie = i && F && re.length > 0 && !re.endsWith(`/`)),
      (t[13] = F),
      (t[14] = re),
      (t[15] = i),
      (t[16] = ie))
    : (ie = t[16]);
  let ae;
  t[17] !== g || t[18] !== _
    ? ((ae = { cwd: g, hostConfig: _ }), (t[17] = g), (t[18] = _), (t[19] = ae))
    : (ae = t[19]);
  let ce;
  t[20] !== re || t[21] !== ie || t[22] !== ae
    ? ((ce = { branch: re, enabled: ie, operationSource: `create_pull_request_modal`, lookup: ae }),
      (t[20] = re),
      (t[21] = ie),
      (t[22] = ae),
      (t[23] = ce))
    : (ce = t[23]);
  let { data: le } = R(xe, ce),
    V = re === B && le === !0,
    ue;
  t[24] !== V || t[25] !== F || t[26] !== B
    ? ((ue = F && (B.length === 0 || B.endsWith(`/`) || V)),
      (t[24] = V),
      (t[25] = F),
      (t[26] = B),
      (t[27] = ue))
    : (ue = t[27]);
  let H = ue,
    de;
  t[28] !== g || t[29] !== _
    ? ((de = { cwd: g, hostConfig: _, operationSource: `local_conversation_git_actions` }),
      (t[28] = g),
      (t[29] = _),
      (t[30] = de))
    : (de = t[30]);
  let fe = R(ht, de),
    pe = fe.type === `success` ? fe.data : void 0,
    { data: he } = ke(g, _, `local_conversation_git_actions`),
    ge;
  t[31] !== s || t[32] !== F || t[33] !== g || t[34] !== _ || t[35] !== O
    ? ((ge = { conversationId: s, cwd: g, hostConfig: _, createsBranch: F, includeLocalChanges: O }),
      (t[31] = s),
      (t[32] = F),
      (t[33] = g),
      (t[34] = _),
      (t[35] = O),
      (t[36] = ge))
    : (ge = t[36]);
  let { blockedStep: U, nextStep: ye } = R(tt, ge),
    be = R(qe, T),
    W;
  t[37] === w
    ? (W = t[38])
    : ((W = { ...w, operationSource: `local_conversation_git_actions` }), (t[37] = w), (t[38] = W));
  let G = R(ut, W),
    K = be != null || G.isPending,
    q;
  t[39] !== g || t[40] !== _
    ? ((q = { cwd: g, hostConfig: _, includeUnstaged: !0 }), (t[39] = g), (t[40] = _), (t[41] = q))
    : (q = t[41]);
  let Se = R(We, q),
    Ce = F ? B : A || (pe?.branch ?? null),
    J;
  t[42] !== T || t[43] !== h
    ? ((J = () => {
        Je(h, T);
      }),
      (t[42] = T),
      (t[43] = h),
      (t[44] = J))
    : (J = t[44]);
  let Y = J,
    we;
  t[45] !== K || t[46] !== d || t[47] !== Y
    ? ((we = () => {
        K || (Y(), d());
      }),
      (t[45] = K),
      (t[46] = d),
      (t[47] = Y),
      (t[48] = we))
    : (we = t[48]);
  let Te = we,
    De;
  t[49] !== K || t[50] !== a || t[51] !== d || t[52] !== Y
    ? ((De = (e) => {
        if (!e) {
          if (K) return;
          (Y(), d());
          return;
        }
        a(e);
      }),
      (t[49] = K),
      (t[50] = a),
      (t[51] = d),
      (t[52] = Y),
      (t[53] = De))
    : (De = t[53]);
  let Oe = De,
    X;
  t[54] !== F || t[55] !== a || t[56] !== d || t[57] !== Y || t[58] !== ye || t[59] !== B || t[60] !== G
    ? ((X = (e) => {
        let { isDraft: t, openInBrowser: n } = e;
        a(!1);
        let r = F
          ? { kind: `create-pr`, createPullRequestAsDraft: t, newBranch: B, nextStep: ye, openInBrowser: n }
          : { kind: `create-pr`, createPullRequestAsDraft: t, nextStep: ye, openInBrowser: n };
        G.mutate(r, {
          onSettled: () => {
            (n || Y(), d());
          },
        });
      }),
      (t[54] = F),
      (t[55] = a),
      (t[56] = d),
      (t[57] = Y),
      (t[58] = ye),
      (t[59] = B),
      (t[60] = G),
      (t[61] = X))
    : (X = t[61]);
  let Ae = X,
    je;
  t[62] !== U || t[63] !== H || t[64] !== K || t[65] !== Ae
    ? ((je = (e, t) => {
        K || H || (U ?? Ae({ isDraft: e, openInBrowser: t !== void 0 && t }));
      }),
      (t[62] = U),
      (t[63] = H),
      (t[64] = K),
      (t[65] = Ae),
      (t[66] = je))
    : (je = t[66]);
  let Me = je,
    Ne;
  t[67] !== k || t[68] !== Te
    ? ((Ne = (e) => {
        k &&
          (e == null
            ? ve({ href: k, initiator: `pull_request_link` })
            : _e({ event: e, href: k, initiator: `pull_request_link` }),
          Te());
      }),
      (t[67] = k),
      (t[68] = Te),
      (t[69] = Ne))
    : (Ne = t[69]);
  let Pe = Ne,
    Fe;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, zt.jsx)(x, {
        className: `sr-only`,
        children: (0, zt.jsx)(l, {
          id: `localConversationPage.createPrModal.title`,
          defaultMessage: `Create PR`,
          description: `Title for the create pull request modal`,
        }),
      })),
      (t[70] = Fe))
    : (Fe = t[70]);
  let Ie;
  t[71] !== v || t[72] !== c.root
    ? ((Ie = v ? Et(c.root) : null), (t[71] = v), (t[72] = c.root), (t[73] = Ie))
    : (Ie = t[73]);
  let Le = pe?.defaultBranch ?? he ?? null,
    Re = Ce ?? null,
    ze = O ? Se.selectionSummary : null,
    Be;
  t[74] !== V || t[75] !== L || t[76] !== M || t[77] !== F || t[78] !== H
    ? ((Be = F
        ? { branchAlreadyExists: V, isSelectionBlocked: H, placeholder: M?.trim(), value: L, onChange: b }
        : void 0),
      (t[74] = V),
      (t[75] = L),
      (t[76] = M),
      (t[77] = F),
      (t[78] = H),
      (t[79] = Be))
    : (Be = t[79]);
  let Z, Ve, Ue;
  t[80] !== T || t[81] !== h
    ? ((Z = (e) => {
        h.set(Ge, T, e);
      }),
      (Ve = (e) => {
        h.set(He, T, e);
      }),
      (Ue = (e) => {
        h.set(Qe, T, e);
      }),
      (t[80] = T),
      (t[81] = h),
      (t[82] = Z),
      (t[83] = Ve),
      (t[84] = Ue))
    : ((Z = t[82]), (Ve = t[83]), (Ue = t[84]));
  let Ke;
  t[85] !== U ||
  t[86] !== D ||
  t[87] !== f ||
  t[88] !== k ||
  t[89] !== Me ||
  t[90] !== Pe ||
  t[91] !== ne ||
  t[92] !== O ||
  t[93] !== K ||
  t[94] !== Ie ||
  t[95] !== Le ||
  t[96] !== Re ||
  t[97] !== ze ||
  t[98] !== Be ||
  t[99] !== Z ||
  t[100] !== Ve ||
  t[101] !== Ue ||
  t[102] !== E
    ? ((Ke = (0, zt.jsx)(Ft, {
        defaultToDraft: f,
        repositoryName: Ie,
        baseBranch: Le,
        headBranch: Re,
        branchSummary: ze,
        title: E,
        description: D,
        existingPullRequestUrl: k,
        hasOpenPr: ne,
        includeLocalChanges: O,
        blockedStep: U,
        newBranch: Be,
        isWorkflowPending: K,
        onTitleChange: Z,
        onDescriptionChange: Ve,
        onIncludeLocalChangesChange: Ue,
        onCreate: Me,
        onOpenPullRequest: Pe,
      })),
      (t[85] = U),
      (t[86] = D),
      (t[87] = f),
      (t[88] = k),
      (t[89] = Me),
      (t[90] = Pe),
      (t[91] = ne),
      (t[92] = O),
      (t[93] = K),
      (t[94] = Ie),
      (t[95] = Le),
      (t[96] = Re),
      (t[97] = ze),
      (t[98] = Be),
      (t[99] = Z),
      (t[100] = Ve),
      (t[101] = Ue),
      (t[102] = E),
      (t[103] = Ke))
    : (Ke = t[103]);
  let Xe;
  return (
    t[104] !== Oe || t[105] !== i || t[106] !== Ke
      ? ((Xe = (0, zt.jsxs)(te, {
          open: i,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: Oe,
          children: [Fe, Ke],
        })),
        (t[104] = Oe),
        (t[105] = i),
        (t[106] = Ke),
        (t[107] = Xe))
      : (Xe = t[107]),
    Xe
  );
}
var Lt, Rt, zt;
function Bt() {
  return (Bt = e(() => {
    ((Lt = N()),
      h(),
      A(),
      (Rt = I()),
      E(),
      De(),
      M(),
      de(),
      ye(),
      yt(),
      je(),
      P(),
      b(),
      V(),
      Dt(),
      G(),
      Ke(),
      Be(),
      St(),
      vt(),
      ie(),
      Pt(),
      (zt = F()));
  }))();
}
function Vt(e) {
  let t = (0, Wt.c)(2),
    { deferQueries: n } = e,
    r = n !== void 0 && n,
    i;
  return (
    t[0] === r ? (i = t[1]) : ((i = r ? (0, Gt.jsx)(Ut, {}) : (0, Gt.jsx)(Ht, {})), (t[0] = r), (t[1] = i)),
    i
  );
}
function Ht() {
  let e = (0, Wt.c)(17),
    t = ee(ft),
    n = y(et),
    r = y(it),
    i = y(wt),
    a = y($e),
    o = n == null,
    s;
  e[0] !== r || e[1] !== t
    ? ((s = () => {
        if (r == null) {
          t.set(_t, `commit`);
          return;
        }
        Xe(t);
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = s))
    : (s = e[2]);
  let c = o && (r == null || i == null),
    l;
  (e[3] === c ? (l = e[4]) : ((l = { enabled: c }), (e[3] = c), (e[4] = l)), X(`git.commit`, s, l));
  let u;
  e[5] === t ? (u = e[6]) : ((u = () => Z(t)), (e[5] = t), (e[6] = u));
  let d = o && a === `enabled`,
    f;
  (e[7] === d ? (f = e[8]) : ((f = { enabled: d }), (e[7] = d), (e[8] = f)),
    X(`git.createPullRequest`, u, f));
  let p;
  e[9] === t ? (p = e[10]) : ((p = () => Z(t, { defaultToDraft: !0 })), (e[9] = t), (e[10] = p));
  let m = o && a === `enabled`,
    h;
  (e[11] === m ? (h = e[12]) : ((h = { enabled: m }), (e[11] = m), (e[12] = h)),
    X(`git.createDraftPullRequest`, p, h));
  let g;
  e[13] === t ? (g = e[14]) : ((g = () => Ve(t)), (e[13] = t), (e[14] = g));
  let _ = o && t.value.codexWorktree,
    v;
  return (
    e[15] === _ ? (v = e[16]) : ((v = { enabled: _ }), (e[15] = _), (e[16] = v)),
    X(`git.createBranch`, g, v),
    null
  );
}
function Ut() {
  let e = (0, Wt.c)(16),
    t = ee(ft),
    n = y(et) == null,
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = () => {
        t.set(_t, `commit`);
      }),
      (e[0] = t),
      (e[1] = r));
  let i;
  (e[2] === n ? (i = e[3]) : ((i = { enabled: n }), (e[2] = n), (e[3] = i)), X(`git.commit`, r, i));
  let a;
  e[4] === t ? (a = e[5]) : ((a = () => Z(t)), (e[4] = t), (e[5] = a));
  let o;
  (e[6] === n ? (o = e[7]) : ((o = { enabled: n }), (e[6] = n), (e[7] = o)),
    X(`git.createPullRequest`, a, o));
  let s;
  e[8] === t ? (s = e[9]) : ((s = () => Z(t, { defaultToDraft: !0 })), (e[8] = t), (e[9] = s));
  let c;
  (e[10] === n ? (c = e[11]) : ((c = { enabled: n }), (e[10] = n), (e[11] = c)),
    X(`git.createDraftPullRequest`, s, c));
  let l;
  e[12] === t ? (l = e[13]) : ((l = () => Ve(t)), (e[12] = t), (e[13] = l));
  let u = n && t.value.codexWorktree,
    d;
  return (
    e[14] === u ? (d = e[15]) : ((d = { enabled: u }), (e[14] = u), (e[15] = d)),
    X(`git.createBranch`, l, d),
    null
  );
}
var Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    ((Wt = N()), h(), B(), ze(), St(), (Gt = F()));
  }))();
}
function qt(e) {
  let t = (0, Jt.c)(4),
    { phase: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = pt(n)), (t[0] = n), (t[1] = r));
  let i;
  return (t[2] === r ? (i = t[3]) : ((i = (0, Yt.jsx)(l, { ...r })), (t[2] = r), (t[3] = i)), i);
}
var Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Jt = N()), E(), xt(), (Yt = F()));
  }))();
}
function Zt(e) {
  let t = (0, Qt.c)(55),
    { onOpenChange: n } = e,
    r = ee(ft),
    i = v(),
    o = y(Ct),
    s = y(et),
    [c, u] = (0, $t.useState)(!1),
    [d, f] = (0, $t.useState)(!1),
    [p, m] = (0, $t.useState)(!1),
    h = (0, $t.useRef)(null),
    g;
  t[0] === c ? (g = t[1]) : ((g = { enabled: c }), (t[0] = c), (t[1] = g));
  let b = y(it, g),
    x;
  t[2] === c ? (x = t[3]) : ((x = { enabled: c }), (t[2] = c), (t[3] = x));
  let S = R(Ue, o, x),
    C;
  t[4] === c ? (C = t[5]) : ((C = { enabled: c }), (t[4] = c), (t[5] = C));
  let w = y($e, C),
    T;
  t[6] !== o.cwd || t[7] !== o.hostConfig
    ? ((T = { cwd: o.cwd, hostConfig: o.hostConfig }), (t[6] = o.cwd), (t[7] = o.hostConfig), (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] !== c || t[10] !== T
    ? ((E = { enabled: c, lookup: T, operationSource: `local_conversation_git_actions` }),
      (t[9] = c),
      (t[10] = T),
      (t[11] = E))
    : (E = t[11]);
  let { data: D } = R(Ce, E),
    te;
  t[12] === i
    ? (te = t[13])
    : ((te = i.formatMessage({
        id: `localConversation.gitActions.menu`,
        defaultMessage: `Git actions`,
        description: `Accessible label for a checkout's Git actions menu`,
      })),
      (t[12] = i),
      (t[13] = te));
  let A = te,
    ne;
  t[14] === n
    ? (ne = t[15])
    : ((ne = (e) => {
        (u(e), e && f(!0), n?.(e));
      }),
      (t[14] = n),
      (t[15] = ne));
  let j;
  t[16] === p
    ? (j = t[17])
    : ((j = (e) => {
        p && e.preventDefault();
      }),
      (t[16] = p),
      (t[17] = j));
  let M;
  t[18] !== p || t[19] !== A || t[20] !== s
    ? ((M = p
        ? null
        : (0, Q.jsx)(Ie.IconButton, {
            ref: h,
            color: `ghostTertiary`,
            label: A,
            title: A,
            children: s == null ? (0, Q.jsx)(O, {}) : (0, Q.jsx)(k, {}),
          })),
      (t[18] = p),
      (t[19] = A),
      (t[20] = s),
      (t[21] = M))
    : (M = t[21]);
  let N;
  t[22] !== D?.branch ||
  t[23] !== D?.isDetached ||
  t[24] !== b ||
  t[25] !== w ||
  t[26] !== n ||
  t[27] !== s ||
  t[28] !== S ||
  t[29] !== r
    ? ((N =
        s == null
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(_.Item, {
                  disabled: b != null,
                  tooltipText: b == null ? void 0 : (0, Q.jsx)(Ze, { reason: b }),
                  onSelect: () => r.set(_t, `commit`),
                  children: (0, Q.jsx)(l, {
                    id: `localConversation.gitActions.commit`,
                    defaultMessage: `Commit`,
                    description: `Label for committing changes in a checkout`,
                  }),
                }),
                (0, Q.jsx)(_.Item, {
                  disabled: S != null,
                  tooltipText: S == null ? void 0 : (0, Q.jsx)(ot, { reason: S }),
                  onSelect: () => Xe(r),
                  children: (0, Q.jsx)(l, {
                    id: `localConversation.gitActions.push`,
                    defaultMessage: `Push`,
                    description: `Label for pushing commits from a checkout`,
                  }),
                }),
                (0, Q.jsx)(_.Item, {
                  disabled: !D?.isDetached,
                  onSelect: () => Ve(r),
                  children: (0, Q.jsx)(l, {
                    id: `localConversation.gitActions.createBranch`,
                    defaultMessage: `Create branch`,
                    description: `Label for the create branch action in the git actions dropdown`,
                  }),
                }),
                (0, Q.jsx)(_.Item, {
                  disabled: !D?.branch && !D?.isDetached,
                  onSelect: (e) => {
                    (e.preventDefault(), u(!1), m(!0), n?.(!0));
                  },
                  children: (0, Q.jsx)(l, {
                    id: `composer.footer.branchSwitch.tooltip`,
                    defaultMessage: `Switch branch`,
                    description: `Tooltip shown for controls that switch git branches`,
                  }),
                }),
                w === `enabled`
                  ? (0, Q.jsx)(_.Item, {
                      onSelect: () => Z(r),
                      children: (0, Q.jsx)(l, {
                        id: `codex.localConversation.gitSummary.createPullRequest`,
                        defaultMessage: `Create pull request`,
                        description: `GitHub status row shown when no PR exists for the branch`,
                      }),
                    })
                  : null,
              ],
            })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(_.Item, { disabled: !0, children: (0, Q.jsx)(qt, { phase: s.phase }) }),
                (0, Q.jsx)(_.Item, {
                  onSelect: () => dt(Ye(r.value.target)),
                  children: (0, Q.jsx)(l, {
                    id: `localConversation.gitActions.cancelWorkflow`,
                    defaultMessage: `Cancel`,
                    description: `Cancel the current Git workflow`,
                  }),
                }),
              ],
            })),
      (t[22] = D?.branch),
      (t[23] = D?.isDetached),
      (t[24] = b),
      (t[25] = w),
      (t[26] = n),
      (t[27] = s),
      (t[28] = S),
      (t[29] = r),
      (t[30] = N))
    : (N = t[30]);
  let P;
  t[31] !== c || t[32] !== N || t[33] !== ne || t[34] !== j || t[35] !== M
    ? ((P = (0, Q.jsx)(a, {
        getPlacement: Re,
        open: c,
        onOpenChange: ne,
        onCloseAutoFocus: j,
        triggerButton: M,
        children: N,
      })),
      (t[31] = c),
      (t[32] = N),
      (t[33] = ne),
      (t[34] = j),
      (t[35] = M),
      (t[36] = P))
    : (P = t[36]);
  let F;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (e) => {
        (e.preventDefault(), h.current?.focus());
      }),
      (t[37] = F))
    : (F = t[37]);
  let I;
  t[38] === n
    ? (I = t[39])
    : ((I = (e) => {
        (m(e), n?.(e));
      }),
      (t[38] = n),
      (t[39] = I));
  let L;
  t[40] !== p || t[41] !== A
    ? ((L = (e) => {
        let { disabled: t } = e;
        return p
          ? (0, Q.jsx)(Ie.IconButton, {
              color: `ghostTertiary`,
              disabled: t,
              label: A,
              title: A,
              children: (0, Q.jsx)(O, {}),
            })
          : null;
      }),
      (t[40] = p),
      (t[41] = A),
      (t[42] = L))
    : (L = t[42]);
  let z;
  t[43] !== p ||
  t[44] !== d ||
  t[45] !== I ||
  t[46] !== L ||
  t[47] !== o.conversationId ||
  t[48] !== o.cwd ||
  t[49] !== o.hostConfig ||
  t[50] !== o.root
    ? ((z = (0, Q.jsx)(Mt, {
        cwd: o.cwd,
        gitRoot: o.root,
        hostConfig: o.hostConfig,
        localConversationId: o.conversationId,
        shouldShow: d,
        renderWhileLoading: !0,
        open: p,
        getPlacement: Re,
        onCloseAutoFocus: F,
        onOpenChange: I,
        renderControl: L,
      })),
      (t[43] = p),
      (t[44] = d),
      (t[45] = I),
      (t[46] = L),
      (t[47] = o.conversationId),
      (t[48] = o.cwd),
      (t[49] = o.hostConfig),
      (t[50] = o.root),
      (t[51] = z))
    : (z = t[51]);
  let B;
  return (
    t[52] !== P || t[53] !== z
      ? ((B = (0, Q.jsxs)(Q.Fragment, { children: [P, z] })), (t[52] = P), (t[53] = z), (t[54] = B))
      : (B = t[54]),
    B
  );
}
var Qt, $t, Q;
function en() {
  return (en = e(() => {
    ((Qt = N()),
      h(),
      ($t = I()),
      E(),
      i(),
      g(),
      T(),
      Se(),
      Le(),
      Fe(),
      bt(),
      Ke(),
      Be(),
      ze(),
      St(),
      At(),
      Xt(),
      (Q = F()));
  }))();
}
function tn(e) {
  let t = (0, an.c)(28),
    { conversationCwd: n, hostConfig: r } = e,
    i = n ?? null,
    a = U(),
    { data: o } = y(Oe),
    s = o?.roots,
    c;
  t[0] !== s || t[1] !== i
    ? ((c = (0, on.default)([i, ...(s?.filter(rn) ?? [])].filter(nn))), (t[0] = s), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === l ? (u = t[4]) : ((u = { params: { dirs: l }, source: `apply_worktree` }), (t[3] = l), (t[4] = u));
  let { data: ee } = R(z, u),
    d = ee?.origins,
    f;
  t[5] === i ? (f = t[6]) : ((f = i ? L(i) : null), (t[5] = i), (t[6] = f));
  let p = f,
    m;
  t[7] !== d || t[8] !== p
    ? ((m = d?.find((e) => {
        let { dir: t } = e;
        return L(t) === p;
      })),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h = m,
    g;
  bb0: {
    if (!h?.originUrl) {
      g = null;
      break bb0;
    }
    let e;
    t[10] === i ? (e = t[11]) : ((e = i ? L(i) : null), (t[10] = i), (t[11] = e));
    let n = e,
      r;
    (t[12] !== a || t[13] !== d || t[14] !== n || t[15] !== h
      ? ((r =
          d?.find((e) => (e.originUrl !== h.originUrl || (n && L(e.dir) === n) ? !1 : !S(e.dir, a))) ?? null),
        (t[12] = a),
        (t[13] = d),
        (t[14] = n),
        (t[15] = h),
        (t[16] = r))
      : (r = t[16]),
      (g = r));
  }
  let _ = g,
    v = _?.root ?? null,
    b = _?.dir ?? null,
    x = !!v,
    C;
  t[17] === x ? (C = t[18]) : ((C = { enabled: x }), (t[17] = x), (t[18] = C));
  let { data: w } = Pe(v, r, `apply_worktree`, C),
    T;
  bb1: {
    if (!b || !v) {
      let e;
      (t[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[19] = e)) : (e = t[19]), (T = e));
      break bb1;
    }
    let e = w ?? `-`,
      n;
    (t[20] !== v || t[21] !== b || t[22] !== e
      ? ((n = [{ workspaceRoot: b, gitRoot: v, label: e }]),
        (t[20] = v),
        (t[21] = b),
        (t[22] = e),
        (t[23] = n))
      : (n = t[23]),
      (T = n));
  }
  let E = T,
    D;
  return (
    t[24] !== b || t[25] !== E || t[26] !== i
      ? ((D = { targetRoots: E, worktreePath: i, sourceWorkspaceRoot: b }),
        (t[24] = b),
        (t[25] = E),
        (t[26] = i),
        (t[27] = D))
      : (D = t[27]),
    D
  );
}
function nn(e) {
  return !!e;
}
function rn(e) {
  return e;
}
var an, on;
function sn() {
  return (sn = e(() => {
    ((an = N()), (on = t(be(), 1)), h(), A(), ge(), Me(), fe(), Y(), d());
  }))();
}
function cn(e) {
  let t = (0, dn.c)(82),
    { conversationId: i, target: a, open: c, onOpenChange: u, onRequestOpenNextAction: d } = e,
    p = ee(o),
    h = v(),
    { cwd: g, hostConfig: _ } = a,
    [y, b] = (0, fn.useState)(null),
    [x, S] = (0, fn.useState)(!1),
    C = r(m.branchPrefix),
    T;
  t[0] !== i || t[1] !== _
    ? ((T = i == null ? null : { hostId: _.id, threadId: i }), (t[0] = i), (t[1] = _), (t[2] = T))
    : (T = t[2]);
  let E = R(oe, T),
    D,
    O,
    k,
    A;
  if (t[3] !== y || t[4] !== C || t[5] !== E) {
    let e = me({ branchPrefix: C, conversationTitle: E });
    ((D = y ?? e),
      (A = D.trim()),
      (O = A.length === 0),
      (k = A.endsWith(`/`)),
      (t[3] = y),
      (t[4] = C),
      (t[5] = E),
      (t[6] = D),
      (t[7] = O),
      (t[8] = k),
      (t[9] = A));
  } else ((D = t[6]), (O = t[7]), (k = t[8]), (A = t[9]));
  let j = k,
    M = Ee(A, 200),
    N;
  t[10] !== M || t[11] !== x || t[12] !== c
    ? ((N = c && !x && M.length > 0 && !M.endsWith(`/`)), (t[10] = M), (t[11] = x), (t[12] = c), (t[13] = N))
    : (N = t[13]);
  let P = N,
    F;
  t[14] !== g || t[15] !== _
    ? ((F = { cwd: g, hostConfig: _ }), (t[14] = g), (t[15] = _), (t[16] = F))
    : (F = t[16]);
  let I;
  t[17] !== M || t[18] !== P || t[19] !== F
    ? ((I = { branch: M, enabled: P, operationSource: `worktree_branch_setup_modal`, lookup: F }),
      (t[17] = M),
      (t[18] = P),
      (t[19] = F),
      (t[20] = I))
    : (I = t[20]);
  let { data: L } = R(xe, I),
    z = !x && M === A && L === !0,
    B;
  t[21] !== g || t[22] !== _
    ? ((B = { conversationCwd: g, hostConfig: _ }), (t[21] = g), (t[22] = _), (t[23] = B))
    : (B = t[23]);
  let { targetRoots: re } = tn(B),
    ie = re[0] ?? null,
    ae = ie?.label ?? null,
    se = ie?.workspaceRoot ?? null,
    ce;
  t[24] === a
    ? (ce = t[25])
    : ((ce = { ...a, operationSource: `worktree_branch_setup_modal` }), (t[24] = a), (t[25] = ce));
  let le = R(rt, ce),
    V = x || le.isPending,
    ue = ae != null && A === ae,
    H;
  t[26] === u
    ? (H = t[27])
    : ((H = (e) => {
        (e || b(null), u(e));
      }),
      (t[26] = u),
      (t[27] = H));
  let de = H,
    fe;
  t[28] !== z ||
  t[29] !== i ||
  t[30] !== le ||
  t[31] !== j ||
  t[32] !== _ ||
  t[33] !== h ||
  t[34] !== ue ||
  t[35] !== O ||
  t[36] !== V ||
  t[37] !== d ||
  t[38] !== p ||
  t[39] !== a.root ||
  t[40] !== A
    ? ((fe = async () => {
        if (V || O || j || z || ue) return;
        S(!0);
        let e = (e) => {
          let { title: t, message: n, execOutput: r } = e;
          p.get(w).custom({
            ...pn,
            content: (e) => {
              let { close: i } = e;
              return (0, $.jsx)(at, { title: t, message: n, execOutput: r, onClose: i });
            },
          });
        };
        await (async () => {
          try {
            let t = await le.mutateAsync({ branch: A, failIfExists: !0, mode: `synced` });
            bb100: switch (t.status) {
              case `success`:
                break bb100;
              case `create-error`:
                e({
                  title: h.formatMessage({
                    id: `localConversation.worktreeBranchSetup.createBranchErrorTitle`,
                    defaultMessage: `Failed to set branch`,
                    description: `Title for the terminal toast shown when Codex failed to make a git branch`,
                  }),
                  message: t.error,
                  execOutput: t.execOutput,
                });
                return;
              case `checkout-error`:
                e({
                  title: h.formatMessage({
                    id: `localConversation.worktreeBranchSetup.checkoutErrorTitle`,
                    defaultMessage: `Failed to check out branch`,
                    description: `Title for the terminal toast shown when Codex failed to checkout a git branch`,
                  }),
                  message: t.error,
                  execOutput: t.execOutput,
                });
                return;
            }
            (i != null && K(p, _.id, i, t.branch, a.root), d?.(t.branch));
          } catch (t) {
            let n = t,
              r = n instanceof Error ? n.message : String(n);
            e({
              title: h.formatMessage({
                id: `localConversation.worktreeBranchSetup.errorTitle`,
                defaultMessage: `Something went wrong`,
                description: `Title for the fallback terminal toast for branch setup failures`,
              }),
              message: r,
            });
          }
        })().finally(() => {
          S(!1);
        });
      }),
      (t[28] = z),
      (t[29] = i),
      (t[30] = le),
      (t[31] = j),
      (t[32] = _),
      (t[33] = h),
      (t[34] = ue),
      (t[35] = O),
      (t[36] = V),
      (t[37] = d),
      (t[38] = p),
      (t[39] = a.root),
      (t[40] = A),
      (t[41] = fe))
    : (fe = t[41]);
  let pe = fe,
    ge = V || O || j || z || ue,
    _e;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(Ne.Header, {
        icon: (0, $.jsx)(f, { className: `text-default`, "aria-hidden": !1, asset: s }),
      })),
      (t[42] = _e))
    : (_e = t[42]);
  let U;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(Ne.Title, {
        children: (0, $.jsx)(l, {
          id: `localConversation.worktreeBranchSetup.title`,
          defaultMessage: `Work here`,
          description: `Title for the worktree branch setup modal`,
        }),
      })),
      (t[43] = U))
    : (U = t[43]);
  let ve;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          U,
          (0, $.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, $.jsx)(l, {
              id: `localConversation.worktreeBranchSetup.subtitle`,
              defaultMessage: `Create a branch to commit changes, push, and create a PR from this worktree. <a>Learn more</a>`,
              description: `Subtitle for the worktree branch setup modal`,
              values: { a: ln },
            }),
          }),
        ],
      })),
      (t[44] = ve))
    : (ve = t[44]);
  let ye;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(jt, {})), (t[45] = ye))
    : (ye = t[45]);
  let be;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (e) => {
        b(e.target.value);
      }),
      (t[46] = be))
    : (be = t[46]);
  let W;
  t[47] === pe
    ? (W = t[48])
    : ((W = (e) => {
        e.key === `Enter` && (e.preventDefault(), pe());
      }),
      (t[47] = pe),
      (t[48] = W));
  let G;
  t[49] !== C || t[50] !== h
    ? ((G =
        C?.trim() ||
        h.formatMessage({
          id: `localConversation.worktreeBranchSetup.branchPlaceholder.new`,
          defaultMessage: `Create a new branch`,
          description: `Placeholder for new branch name input in the sync setup modal`,
        })),
      (t[49] = C),
      (t[50] = h),
      (t[51] = G))
    : (G = t[51]);
  let q;
  t[52] === h
    ? (q = t[53])
    : ((q = h.formatMessage({
        id: `localConversation.worktreeBranchSetup.branchAriaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch selection input in the sync setup modal`,
      })),
      (t[52] = h),
      (t[53] = q));
  let Se;
  t[54] !== D || t[55] !== W || t[56] !== G || t[57] !== q
    ? ((Se = (0, $.jsx)(he, {
        autoFocus: !0,
        value: D,
        onChange: be,
        onKeyDown: W,
        placeholder: G,
        "aria-label": q,
      })),
      (t[54] = D),
      (t[55] = W),
      (t[56] = G),
      (t[57] = q),
      (t[58] = Se))
    : (Se = t[58]);
  let Ce;
  t[59] === z
    ? (Ce = t[60])
    : ((Ce = z
        ? (0, $.jsx)(`p`, {
            className: `text-xs text-danger`,
            children: (0, $.jsx)(l, {
              id: `localConversation.worktreeBranchSetup.branchExistsError`,
              defaultMessage: `Branch already exists`,
              description: `Validation message shown in the worktree branch setup modal when the entered branch already exists`,
            }),
          })
        : null),
      (t[59] = z),
      (t[60] = Ce));
  let J;
  t[61] !== Se || t[62] !== Ce
    ? ((J = (0, $.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [ye, Se, Ce] })),
      (t[61] = Se),
      (t[62] = Ce),
      (t[63] = J))
    : (J = t[63]);
  let Y = !ue,
    we = se ?? `-`,
    Te;
  t[64] === we
    ? (Te = t[65])
    : ((Te = (0, $.jsx)(l, {
        id: `localConversation.worktreeBranchSetup.checkoutDisabled`,
        defaultMessage: `This branch is already checked out at {location}`,
        description: `Tooltip shown when checkout is disabled because the branch is already checked out`,
        values: { location: we },
      })),
      (t[64] = we),
      (t[65] = Te));
  let De;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(l, {
        id: `localConversation.worktreeBranchSetup.action.create`,
        defaultMessage: `Create`,
        description: `Primary action label when creating a new branch`,
      })),
      (t[66] = De))
    : (De = t[66]);
  let Oe;
  t[67] !== ge || t[68] !== pe || t[69] !== V
    ? ((Oe = (0, $.jsx)(`span`, {
        className: `inline-flex w-full`,
        children: (0, $.jsx)(n, {
          className: `w-full justify-center`,
          color: `primary`,
          disabled: ge,
          loading: V,
          onClick: pe,
          children: De,
        }),
      })),
      (t[67] = ge),
      (t[68] = pe),
      (t[69] = V),
      (t[70] = Oe))
    : (Oe = t[70]);
  let X;
  t[71] !== Y || t[72] !== Te || t[73] !== Oe
    ? ((X = (0, $.jsx)(Ne.Footer, {
        right: (0, $.jsx)(ne, { disabled: Y, tooltipContent: Te, children: Oe }),
      })),
      (t[71] = Y),
      (t[72] = Te),
      (t[73] = Oe),
      (t[74] = X))
    : (X = t[74]);
  let ke;
  t[75] !== J || t[76] !== X
    ? ((ke = (0, $.jsxs)(Ne.Root, { className: `gap-4`, children: [_e, ve, J, X] })),
      (t[75] = J),
      (t[76] = X),
      (t[77] = ke))
    : (ke = t[77]);
  let Ae;
  return (
    t[78] !== de || t[79] !== c || t[80] !== ke
      ? ((Ae = (0, $.jsx)(te, { size: `compact`, open: c, onOpenChange: de, children: ke })),
        (t[78] = de),
        (t[79] = c),
        (t[80] = ke),
        (t[81] = Ae))
      : (Ae = t[81]),
    Ae
  );
}
function ln(e) {
  return (0, $.jsx)(`a`, {
    className: `underline`,
    href: `https://developers.openai.com/codex/app/worktrees#option-1-working-on-the-worktree`,
    target: `_blank`,
    rel: `noreferrer`,
    onClick: un,
    children: e,
  });
}
function un(e) {
  _e({
    event: e,
    href: e.currentTarget.href,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
  });
}
var dn, fn, $, pn;
function mn() {
  return (mn = e(() => {
    ((dn = N()),
      u(),
      h(),
      A(),
      (fn = I()),
      E(),
      De(),
      J(),
      j(),
      M(),
      de(),
      p(),
      ae(),
      st(),
      D(),
      C(),
      ye(),
      sn(),
      Ae(),
      P(),
      b(),
      G(),
      gt(),
      Ot(),
      ie(),
      ($ = F()),
      (pn = { duration: 7 }));
  }))();
}
function hn(e) {
  let t = (0, _n.c)(18),
    {
      conversationId: n,
      target: r,
      codexWorktree: i,
      surface: a,
      onCreatePullRequestActionReady: o,
      deferQueries: s,
      registerCommands: l,
      onMenuOpenChange: u,
      renderActions: ee,
    } = e,
    d = n === void 0 ? null : n,
    f = s !== void 0 && s,
    p = l === void 0 || l,
    m = Te(r.hostId),
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = { hostConfig: m, operationSource: `local_conversation_git_actions` }), (t[0] = m), (t[1] = h));
  let g = !f,
    _;
  t[2] === g ? (_ = t[3]) : ((_ = { enabled: g }), (t[2] = g), (t[3] = _));
  let { data: v } = R(ce, h, _),
    y = f || v?.available !== !0,
    b;
  t[4] !== i || t[5] !== d || t[6] !== r
    ? ((b = { codexWorktree: i, conversationId: d, target: r }),
      (t[4] = i),
      (t[5] = d),
      (t[6] = r),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== y || t[9] !== o || t[10] !== u || t[11] !== p || t[12] !== ee || t[13] !== a
    ? ((x = (0, vn.jsx)(gn, {
        deferGitQueries: y,
        surface: a,
        onCreatePullRequestActionReady: o,
        registerCommands: p,
        onMenuOpenChange: u,
        renderActions: ee,
      })),
      (t[8] = y),
      (t[9] = o),
      (t[10] = u),
      (t[11] = p),
      (t[12] = ee),
      (t[13] = a),
      (t[14] = x))
    : (x = t[14]);
  let S;
  return (
    t[15] !== b || t[16] !== x
      ? ((S = (0, vn.jsx)(c, { scope: ft, value: b, children: x })), (t[15] = b), (t[16] = x), (t[17] = S))
      : (S = t[17]),
    S
  );
}
function gn(e) {
  let t = (0, _n.c)(36),
    {
      deferGitQueries: n,
      surface: r,
      onCreatePullRequestActionReady: i,
      registerCommands: a,
      onMenuOpenChange: o,
      renderActions: s,
    } = e,
    c = ee(ft),
    l = y(Ct),
    u,
    d,
    f;
  t[0] === l
    ? ((u = t[1]), (d = t[2]), (f = t[3]))
    : (({ codexWorktree: u, conversationId: d, ...f } = l), (t[0] = l), (t[1] = u), (t[2] = d), (t[3] = f));
  let p = y(_t),
    m = y(q.activeTab$),
    h = y(re),
    g = r !== `summary-panel` || !(h && m?.tabId === H.DIFF),
    _ = null;
  if (r === `summary-panel`) {
    let e;
    t[4] === o ? (e = t[5]) : ((e = (0, vn.jsx)(Zt, { onOpenChange: o })), (t[4] = o), (t[5] = e));
    let n = e,
      r;
    (t[6] !== n || t[7] !== s ? ((r = s == null ? n : s(n)), (t[6] = n), (t[7] = s), (t[8] = r)) : (r = t[8]),
      (_ = r));
  }
  i?.(() => {
    Z(c);
  });
  let v;
  t[9] !== n || t[10] !== a || t[11] !== g
    ? ((v = a && g ? (0, vn.jsx)(Vt, { deferQueries: n }) : null),
      (t[9] = n),
      (t[10] = a),
      (t[11] = g),
      (t[12] = v))
    : (v = t[12]);
  let b;
  t[13] !== p || t[14] !== d || t[15] !== c || t[16] !== f
    ? ((b =
        p === `worktree-branch-setup`
          ? (0, vn.jsx)(cn, {
              conversationId: d ?? void 0,
              target: f,
              open: !0,
              onOpenChange: (e) => {
                c.set(_t, e ? `worktree-branch-setup` : null);
              },
              onRequestOpenNextAction: () => {
                mt(c);
              },
            })
          : null),
      (t[13] = p),
      (t[14] = d),
      (t[15] = c),
      (t[16] = f),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== p || t[19] !== u || t[20] !== d || t[21] !== c || t[22] !== f
    ? ((x =
        p === `commit`
          ? (0, vn.jsx)(kt, {
              codexWorktree: u,
              conversationId: d,
              enablePushActions: !0,
              operationSource: `local_conversation_git_actions`,
              open: !0,
              target: f,
              onOpenChange: (e) => {
                c.set(_t, e ? `commit` : null);
              },
              onRequestReset: () => {
                c.set(_t, null);
              },
            })
          : null),
      (t[18] = p),
      (t[19] = u),
      (t[20] = d),
      (t[21] = c),
      (t[22] = f),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== p || t[25] !== u || t[26] !== d || t[27] !== c || t[28] !== f
    ? ((S =
        p === `create-pr` || p === `create-draft-pr`
          ? (0, vn.jsx)(It, {
              defaultToDraft: p === `create-draft-pr`,
              codexWorktree: u,
              conversationId: d,
              open: !0,
              target: f,
              onOpenChange: (e) => {
                c.set(_t, e ? p : null);
              },
              onRequestReset: () => {
                c.set(_t, null);
              },
            })
          : null),
      (t[24] = p),
      (t[25] = u),
      (t[26] = d),
      (t[27] = c),
      (t[28] = f),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== _ || t[31] !== v || t[32] !== b || t[33] !== x || t[34] !== S
      ? ((C = (0, vn.jsxs)(vn.Fragment, { children: [v, _, b, x, S] })),
        (t[30] = _),
        (t[31] = v),
        (t[32] = b),
        (t[33] = x),
        (t[34] = S),
        (t[35] = C))
      : (C = t[35]),
    C
  );
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    ((_n = N()), h(), W(), le(), ue(), we(), pe(), Nt(), Bt(), Kt(), en(), ze(), St(), mn(), (vn = F()));
  }))();
}
export { Xt as i, yn as n, qt as r, hn as t };
//# sourceMappingURL=local-conversation-git-actions-80bb6516e7ec.js.map
