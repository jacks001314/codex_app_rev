import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  $nt as r,
  AO as i,
  CO as a,
  Cot as o,
  Edt as s,
  Ext as c,
  FR as l,
  Fat as u,
  HT as d,
  IDt as f,
  Iot as p,
  Ixt as ee,
  Iz as m,
  LR as h,
  Lot as g,
  Lz as _,
  Pat as v,
  Pft as te,
  Pxt as y,
  TO as ne,
  VDt as re,
  VT as b,
  Vxt as x,
  Wnt as S,
  XD as C,
  XO as w,
  YD as T,
  ZO as E,
  Zxt as D,
  _O as ie,
  _xt as ae,
  b0 as O,
  bL as k,
  cO as oe,
  cz as A,
  eZ as j,
  fO as M,
  hot as se,
  i3 as N,
  jDt as P,
  lO as F,
  lot as I,
  mO as ce,
  nst as L,
  oO as le,
  r3 as ue,
  rrt as R,
  rst as z,
  sO as de,
  srt as B,
  sz as V,
  t3 as H,
  tst as U,
  vO as W,
  vzt as G,
  wot as fe,
  xMt as pe,
  y0 as me,
  yL as he,
  yzt as K,
  zxt as q,
} from "./app-shared-bbfeca5e5737.js";
import {
  CEt as ge,
  DPn as _e,
  EEt as ve,
  F5n as ye,
  FVt as be,
  Gir as J,
  HVt as xe,
  IVt as Se,
  Jir as Y,
  Qir as Ce,
  SEt as we,
  TEt as Te,
  TPn as Ee,
  VVt as X,
  Wir as De,
  Xir as Oe,
  Zir as ke,
  aBt as Ae,
  atn as je,
  ean as Me,
  hO as Ne,
  itn as Pe,
  jEt as Fe,
  kEt as Ie,
  l4 as Le,
  mO as Re,
  oBt as ze,
  oar as Be,
  sar as Ve,
  tan as He,
  u4 as Ue,
  uar as We,
  v8n as Ge,
} from "./app-initial-5851df3f6cb1.js";
import { Bh as Ke, Cm as qe, Sm as Je, lf as Ye, uf as Xe, zh as Z } from "./app-primary-fe8a450b3b04.js";
import {
  B as Ze,
  G as Qe,
  H as $e,
  J as et,
  K as tt,
  L as nt,
  N as rt,
  P as it,
  Q as at,
  V as ot,
  W as st,
  Y as ct,
  et as lt,
  h as ut,
  i as dt,
  n as ft,
  nt as pt,
  q as mt,
  r as ht,
  rt as gt,
  t as _t,
  tt as vt,
  v as yt,
  y as bt,
  z as xt,
} from "./git-action-new-branch-field-2b4ee066ae8f.js";
import { n as St, t as Ct } from "./commit-84ced40b6cf4.js";
import { a as wt, i as Tt, n as Et, t as Dt } from "./git-branch-switcher-state-a1297efb90da.js";
import { n as Ot, t as kt } from "./git-branch-picker-dropdown-content-5afd7706293b.js";
function At(e) {
  return s(e)?.repo ?? l(e);
}
function jt() {
  return (jt = e(() => {
    (z(), h());
  }))();
}
function Mt(e) {
  let n = (0, It.c)(136),
    {
      open: i,
      onOpenChange: s,
      conversationId: c,
      target: l,
      codexWorktree: u,
      enablePushActions: d,
      operationSource: p,
      onStatusChange: m,
      onRequestReset: h,
    } = e,
    g = u !== void 0 && u,
    _ = d !== void 0 && d,
    v = p === void 0 ? `commit_modal` : p,
    y = ee(o),
    S = re(),
    { cwd: C, hostConfig: w } = l,
    [E, D] = (0, Lt.useState)(null),
    [ae, O] = (0, Lt.useState)(null),
    k = r(te.branchPrefix),
    oe;
  n[0] !== c || n[1] !== w
    ? ((oe = c == null ? null : { hostId: w.id, threadId: c }), (n[0] = c), (n[1] = w), (n[2] = oe))
    : (oe = n[2]);
  let A = q(ye, oe),
    M = x(xt),
    se = q(be, c ?? null),
    N = c ?? null,
    P,
    F;
  n[3] !== g || n[4] !== l || n[5] !== N
    ? ((F = { ...l, codexWorktree: g, conversationId: N }),
      (P = rt(F)),
      (n[3] = g),
      (n[4] = l),
      (n[5] = N),
      (n[6] = P),
      (n[7] = F))
    : ((P = n[6]), (F = n[7]));
  let I = P,
    L = q(it, I),
    le = q(ut, F),
    R = q(bt, F),
    z;
  n[8] !== C || n[9] !== w
    ? ((z = { cwd: C, hostConfig: w }), (n[8] = C), (n[9] = w), (n[10] = z))
    : (z = n[10]);
  let de = q(Qe, z),
    B;
  n[11] !== C || n[12] !== w
    ? ((B = { cwd: C, hostConfig: w }), (n[11] = C), (n[12] = w), (n[13] = B))
    : (B = n[13]);
  let V = q(st, B),
    H;
  n[14] !== v || n[15] !== F
    ? ((H = { ...F, operationSource: v }), (n[14] = v), (n[15] = F), (n[16] = H))
    : (H = n[16]);
  let U = q(dt, H),
    W;
  n[17] !== C || n[18] !== w || n[19] !== v
    ? ((W = { cwd: C, hostConfig: w, operationSource: v }),
      (n[17] = C),
      (n[18] = w),
      (n[19] = v),
      (n[20] = W))
    : (W = n[20]);
  let G = q(pt, W),
    fe = G.type === `success` ? G.data : void 0,
    pe = q(nt, I),
    K = U.isPending || pe != null,
    ge;
  n[21] !== C || n[22] !== w || n[23] !== M
    ? ((ge = { cwd: C, hostConfig: w, includeUnstaged: M }),
      (n[21] = C),
      (n[22] = w),
      (n[23] = M),
      (n[24] = ge))
    : (ge = n[24]);
  let _e = q($e, ge),
    ve;
  n[25] !== C || n[26] !== w || n[27] !== M
    ? ((ve = { cwd: C, hostConfig: w, includeUnstaged: M }),
      (n[25] = C),
      (n[26] = w),
      (n[27] = M),
      (n[28] = ve))
    : (ve = n[28]);
  let J = q(ot, ve),
    xe;
  n[29] !== C || n[30] !== w
    ? ((xe = { cwd: C, hostConfig: w, includeUnstaged: !0 }), (n[29] = C), (n[30] = w), (n[31] = xe))
    : (xe = n[31]);
  let Se = q(ot, xe),
    Y = null;
  fe && (Y = fe.branch ?? fe.upstreamRef ?? null);
  let Ce;
  n[32] !== le || n[33] !== Y || n[34] !== R
    ? ((Ce = !R && le?.trim() ? le.trim() : R ? null : Y),
      (n[32] = le),
      (n[33] = Y),
      (n[34] = R),
      (n[35] = Ce))
    : (Ce = n[35]);
  let Te = Ce,
    Ee = _,
    X = Ee && (E ?? R),
    De;
  n[36] !== k || n[37] !== A
    ? ((De = we({ branchPrefix: k, conversationTitle: A })), (n[36] = k), (n[37] = A), (n[38] = De))
    : (De = n[38]);
  let Oe = ae ?? De,
    ke;
  n[39] === Oe ? (ke = n[40]) : ((ke = Oe.trim()), (n[39] = Oe), (n[40] = ke));
  let Ae = ke,
    je = He(Ae, 200),
    Me;
  n[41] !== X || n[42] !== je || n[43] !== i
    ? ((Me = i && X && je.length > 0 && !je.endsWith(`/`)),
      (n[41] = X),
      (n[42] = je),
      (n[43] = i),
      (n[44] = Me))
    : (Me = n[44]);
  let Ne = Me,
    Fe;
  n[45] !== C || n[46] !== w
    ? ((Fe = { cwd: C, hostConfig: w }), (n[45] = C), (n[46] = w), (n[47] = Fe))
    : (Fe = n[47]);
  let Ie;
  n[48] !== je || n[49] !== v || n[50] !== Ne || n[51] !== Fe
    ? ((Ie = { branch: je, enabled: Ne, operationSource: v, lookup: Fe }),
      (n[48] = je),
      (n[49] = v),
      (n[50] = Ne),
      (n[51] = Fe),
      (n[52] = Ie))
    : (Ie = n[52]);
  let { data: Re } = q(Pe, Ie),
    ze = je === Ae && Re === !0,
    Be;
  n[53] !== ze || n[54] !== X || n[55] !== Ae
    ? ((Be = X && (Ae.length === 0 || Ae.endsWith(`/`) || ze)),
      (n[53] = ze),
      (n[54] = X),
      (n[55] = Ae),
      (n[56] = Be))
    : (Be = n[56]);
  let Ve = Be,
    Ue = Se == null || Se === `changes-loading`,
    We = J == null && !K && !Ve,
    Ge = !K && !Ve && (X ? (fe?.commitsAhead ?? 0) > 0 : de == null),
    Ke = We && (X || V == null),
    qe;
  n[57] !== _ || n[58] !== S
    ? ((qe = _
        ? S.formatMessage({
            id: `review.commit.form.commitAndPushTitle`,
            defaultMessage: `Commit or push`,
            description: `Title for the commit modal when commit and push actions are available`,
          })
        : S.formatMessage({
            id: `review.commit.form.commitTitle`,
            defaultMessage: `Commit`,
            description: `Title for the commit modal when only commit is available`,
          })),
      (n[57] = _),
      (n[58] = S),
      (n[59] = qe))
    : (qe = n[59]);
  let Je = qe,
    Xe;
  n[60] !== J ||
  n[61] !== X ||
  n[62] !== Ve ||
  n[63] !== K ||
  n[64] !== s ||
  n[65] !== h ||
  n[66] !== m ||
  n[67] !== Ae ||
  n[68] !== U
    ? ((Xe = (e) => {
        if (K || Ve || (e !== `push` && J != null)) return;
        (s(!1), m?.(`loading`));
        let t = X ? { kind: `commit`, newBranch: Ae, nextStep: e } : { kind: `commit`, nextStep: e };
        U.mutate(t, {
          onSuccess: (e) => {
            m?.(e ? `success` : `error`);
          },
          onSettled: h,
        });
      }),
      (n[60] = J),
      (n[61] = X),
      (n[62] = Ve),
      (n[63] = K),
      (n[64] = s),
      (n[65] = h),
      (n[66] = m),
      (n[67] = Ae),
      (n[68] = U),
      (n[69] = Xe))
    : (Xe = n[69]);
  let Z = Xe,
    Ze;
  n[70] !== K || n[71] !== s || n[72] !== h
    ? ((Ze = (e) => {
        if (!e && !K) {
          h();
          return;
        }
        s(e);
      }),
      (n[70] = K),
      (n[71] = s),
      (n[72] = h),
      (n[73] = Ze))
    : (Ze = n[73]);
  let et = Ze,
    tt;
  n[74] === Je
    ? (tt = n[75])
    : ((tt = (0, Q.jsx)(ie, { className: `sr-only`, children: Je })), (n[74] = Je), (n[75] = tt));
  let ct;
  n[76] !== Ee ||
  n[77] !== Y ||
  n[78] !== X ||
  n[79] !== Te ||
  n[80] !== se ||
  n[81] !== K ||
  n[82] !== l.root
    ? ((ct = (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3`,
        children: (0, Q.jsx)(`span`, {
          className: `flex min-w-0 flex-1 items-center justify-between gap-2 text-codex-description`,
          children: Ee
            ? (0, Q.jsxs)(a, {
                align: `start`,
                contentWidth: `xs`,
                disabled: K,
                triggerButton: (0, Q.jsxs)(t, {
                  color: `ghostActive`,
                  size: `large`,
                  className: `w-full min-w-0 ps-2`,
                  children: [
                    (0, Q.jsx)(he, { className: `icon-xs shrink-0` }),
                    se
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `max-w-[30%] min-w-0 shrink-0 truncate`,
                              children: At(l.root),
                            }),
                            (0, Q.jsx)(`span`, {
                              "aria-hidden": !0,
                              className: `shrink-0`,
                              children: (0, Q.jsx)(f, {
                                id: `localConversationPage.gitActions.repositoryBranchSeparator`,
                                defaultMessage: `·`,
                                description: `Separator between the repository name and branch in a Git action dialog`,
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, Q.jsx)(`span`, {
                      className: `truncate`,
                      children: X
                        ? (0, Q.jsx)(f, {
                            id: `review.commit.branchTarget.newBranch`,
                            defaultMessage: `New branch`,
                            description: `Label for selecting a new commit branch`,
                          })
                        : (Te ??
                          (0, Q.jsx)(f, {
                            id: `review.commit.form.commitTo.none`,
                            defaultMessage: `-`,
                            description: `Placeholder shown when no commit target is available`,
                          })),
                    }),
                    (0, Q.jsx)(T, { className: `icon-2xs shrink-0` }),
                  ],
                }),
                children: [
                  (0, Q.jsx)(ne.SectionLabel, {
                    children: (0, Q.jsx)(f, {
                      id: `review.commit.branchTarget.title`,
                      defaultMessage: `Commit to`,
                      description: `Heading for commit branch target options`,
                    }),
                  }),
                  Te == null
                    ? null
                    : (0, Q.jsx)(ne.Item, {
                        LeftIcon: he,
                        rightIconAsset: X ? void 0 : me,
                        onSelect: () => {
                          D(!1);
                        },
                        children: Te,
                      }),
                  (0, Q.jsx)(ne.Item, {
                    leftIconAsset: j,
                    rightIconAsset: X ? me : void 0,
                    onSelect: () => {
                      D(!0);
                    },
                    children: (0, Q.jsx)(f, {
                      id: `review.commit.branchTarget.newBranch`,
                      defaultMessage: `New branch`,
                      description: `Label for selecting a new commit branch`,
                    }),
                  }),
                ],
              })
            : (0, Q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1 px-3`,
                children: [
                  (0, Q.jsx)(he, { className: `icon-xs shrink-0` }),
                  se
                    ? (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `max-w-[30%] min-w-0 shrink-0 truncate`,
                            children: At(l.root),
                          }),
                          (0, Q.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `shrink-0`,
                            children: (0, Q.jsx)(f, {
                              id: `localConversationPage.gitActions.repositoryBranchSeparator`,
                              defaultMessage: `·`,
                              description: `Separator between the repository name and branch in a Git action dialog`,
                            }),
                          }),
                        ],
                      })
                    : null,
                  (0, Q.jsx)(`span`, {
                    className: `truncate`,
                    children:
                      Y ??
                      (0, Q.jsx)(f, {
                        id: `review.commit.form.commitTo.none`,
                        defaultMessage: `-`,
                        description: `Placeholder shown when no commit target is available`,
                      }),
                  }),
                ],
              }),
        }),
      })),
      (n[76] = Ee),
      (n[77] = Y),
      (n[78] = X),
      (n[79] = Te),
      (n[80] = se),
      (n[81] = K),
      (n[82] = l.root),
      (n[83] = ct))
    : (ct = n[83]);
  let ft;
  n[84] !== ze || n[85] !== Oe || n[86] !== k || n[87] !== X || n[88] !== K
    ? ((ft = X
        ? (0, Q.jsx)(_t, {
            branchAlreadyExists: ze,
            disabled: K,
            placeholder: k?.trim(),
            value: Oe,
            onChange: O,
          })
        : null),
      (n[84] = ze),
      (n[85] = Oe),
      (n[86] = k),
      (n[87] = X),
      (n[88] = K),
      (n[89] = ft))
    : (ft = n[89]);
  let mt;
  n[90] !== _e ||
  n[91] !== X ||
  n[92] !== I ||
  n[93] !== M ||
  n[94] !== S ||
  n[95] !== K ||
  n[96] !== L ||
  n[97] !== y ||
  n[98] !== Ue
    ? ((mt = Ue
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`textarea`, {
                autoFocus: !X,
                rows: 3,
                className: `h-20 w-full resize-none bg-transparent px-3 py-2 text-default outline-none`,
                "aria-label": S.formatMessage({
                  id: `review.commit.messageLabel`,
                  defaultMessage: `Commit message`,
                  description: `Label for commit message textarea`,
                }),
                placeholder: S.formatMessage({
                  id: `review.commit.autoGeneratePlaceholder`,
                  defaultMessage: `Commit message (leave blank to generate)…`,
                  description: `Placeholder for commit message fields that can be generated automatically`,
                }),
                value: L,
                disabled: K,
                onKeyDown: Nt,
                onChange: (e) => {
                  y.set(it, I, e.target.value);
                },
              }),
              (0, Q.jsxs)(`div`, {
                className: `relative flex items-center gap-2 px-3 pt-2 pb-3`,
                children: [
                  (0, Q.jsx)(b, {
                    id: `commit-include-unstaged-changes`,
                    checked: M,
                    disabled: K,
                    onCheckedChange: (e) => {
                      y.set(xt, e);
                    },
                  }),
                  (0, Q.jsx)(`label`, {
                    htmlFor: `commit-include-unstaged-changes`,
                    className: `min-w-0 truncate text-default`,
                    children: (0, Q.jsx)(f, {
                      id: `review.commit.selection.includeUnstagedChanges`,
                      defaultMessage: `Include unstaged changes`,
                      description: `Label for selecting unstaged changes in the commit modal`,
                    }),
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `ms-auto flex shrink-0 items-center gap-2`,
                    children: [
                      _e.isLoading || _e.isFetching
                        ? (0, Q.jsx)(`span`, {
                            className: `inline-flex size-4 shrink-0 items-center justify-center`,
                            children: (0, Q.jsx)(ue, { className: `icon-xs text-codex-description` }),
                          })
                        : null,
                      (0, Q.jsx)(Pt, {
                        isLoading: _e.isLoading,
                        isUnavailable: _e.isUnavailable,
                        selectionSummary: _e.selectionSummary,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null),
      (n[90] = _e),
      (n[91] = X),
      (n[92] = I),
      (n[93] = M),
      (n[94] = S),
      (n[95] = K),
      (n[96] = L),
      (n[97] = y),
      (n[98] = Ue),
      (n[99] = mt))
    : (mt = n[99]);
  let ht = !We,
    gt;
  n[100] === J ? (gt = n[101]) : ((gt = (0, Q.jsx)(at, { reason: J })), (n[100] = J), (n[101] = gt));
  let vt;
  n[102] === Z ? (vt = n[103]) : ((vt = () => Z(`commit`)), (n[102] = Z), (n[103] = vt));
  let yt;
  n[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (0, Q.jsx)(f, {
        id: `review.commit.nextSteps.commit`,
        defaultMessage: `Commit`,
        description: `Label for the commit-only option`,
      })),
      (n[104] = yt))
    : (yt = n[104]);
  let St;
  n[105] !== K || n[106] !== ht || n[107] !== gt || n[108] !== vt
    ? ((St = (0, Q.jsx)(Ft, {
        Icon: Ct,
        disabled: ht,
        loading: K,
        tooltipContent: gt,
        value: `commit`,
        onSelect: vt,
        children: yt,
      })),
      (n[105] = K),
      (n[106] = ht),
      (n[107] = gt),
      (n[108] = vt),
      (n[109] = St))
    : (St = n[109]);
  let wt;
  n[110] !== Ke || n[111] !== J || n[112] !== _ || n[113] !== V || n[114] !== Z
    ? ((wt = _
        ? (0, Q.jsx)(Ft, {
            Icon: Ye,
            disabled: !Ke,
            loading: !1,
            tooltipContent: J == null ? (0, Q.jsx)(lt, { reason: V }) : (0, Q.jsx)(at, { reason: J }),
            value: `commit-and-push`,
            onSelect: () => Z(`commit-and-push`),
            children: (0, Q.jsx)(f, {
              id: `review.commit.nextSteps.commitAndPush`,
              defaultMessage: `Commit and push`,
              description: `Label for the commit and push option`,
            }),
          })
        : null),
      (n[110] = Ke),
      (n[111] = J),
      (n[112] = _),
      (n[113] = V),
      (n[114] = Z),
      (n[115] = wt))
    : (wt = n[115]);
  let Tt;
  n[116] !== Ge || n[117] !== _ || n[118] !== de || n[119] !== Z
    ? ((Tt = _
        ? (0, Q.jsx)(Ft, {
            Icon: Ye,
            disabled: !Ge,
            loading: !1,
            tooltipContent: (0, Q.jsx)(lt, { reason: de }),
            value: `push`,
            onSelect: () => Z(`push`),
            children: (0, Q.jsx)(f, {
              id: `review.commit.nextSteps.push`,
              defaultMessage: `Push`,
              description: `Label for the push-only option`,
            }),
          })
        : null),
      (n[116] = Ge),
      (n[117] = _),
      (n[118] = de),
      (n[119] = Z),
      (n[120] = Tt))
    : (Tt = n[120]);
  let Et;
  n[121] !== St || n[122] !== wt || n[123] !== Tt
    ? ((Et = (0, Q.jsx)(`div`, {
        className: `border-t border-default py-1`,
        children: (0, Q.jsx)(Le.List, {
          children: (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [St, wt, Tt] }),
        }),
      })),
      (n[121] = St),
      (n[122] = wt),
      (n[123] = Tt),
      (n[124] = Et))
    : (Et = n[124]);
  let Dt;
  n[125] !== Je || n[126] !== ct || n[127] !== ft || n[128] !== mt || n[129] !== Et
    ? ((Dt = (0, Q.jsx)(`div`, {
        className: `command-menu-dialog contents`,
        children: (0, Q.jsxs)(Le, {
          "data-codex-shortcut-capture": !0,
          className: `w-[420px] max-w-[92vw]`,
          label: Je,
          shouldFilter: !1,
          loop: !0,
          children: [ct, ft, mt, Et],
        }),
      })),
      (n[125] = Je),
      (n[126] = ct),
      (n[127] = ft),
      (n[128] = mt),
      (n[129] = Et),
      (n[130] = Dt))
    : (Dt = n[130]);
  let Ot;
  return (
    n[131] !== et || n[132] !== i || n[133] !== tt || n[134] !== Dt
      ? ((Ot = (0, Q.jsxs)(ce, {
          open: i,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: et,
          children: [tt, Dt],
        })),
        (n[131] = et),
        (n[132] = i),
        (n[133] = tt),
        (n[134] = Dt),
        (n[135] = Ot))
      : (Ot = n[135]),
    Ot
  );
}
function Nt(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
function Pt(e) {
  let t = (0, It.c)(2),
    { isLoading: n, isUnavailable: r, selectionSummary: i } = e;
  if (n || r) return null;
  let a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, Q.jsx)(`span`, {
          className: `flex shrink-0 items-center gap-1 text-codex-description`,
          children:
            i == null
              ? (0, Q.jsx)(f, {
                  id: `localConversation.sync.modal.noChanges`,
                  defaultMessage: `No changes`,
                  description: `Label shown when there are no changes to sync`,
                })
              : (0, Q.jsx)(Te, {
                  variant: `color`,
                  linesAdded: i.totalAdditions,
                  linesRemoved: i.totalDeletions,
                }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function Ft(e) {
  let t = (0, It.c)(19),
    { children: n, Icon: r, disabled: i, loading: a, tooltipContent: o, value: s, onSelect: c } = e,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = a
        ? (0, Q.jsx)(ue, { className: `icon-xs shrink-0` })
        : (0, Q.jsx)(r, { className: `icon-xs shrink-0` })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, Q.jsx)(`span`, { className: `truncate`, children: n })), (t[3] = n), (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(`span`, {
        className: `invisible ms-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible`,
        children: (0, Q.jsx)(m, { keysLabel: w(`CmdOrCtrl+Enter`), variant: `button` }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== l || t[7] !== u
    ? ((f = (0, Q.jsxs)(`span`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [l, u, d],
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== i || t[10] !== c || t[11] !== f || t[12] !== s
    ? ((p = (0, Q.jsx)(Le.Item, { className: `group`, disabled: i, value: s, onSelect: c, children: f })),
      (t[9] = i),
      (t[10] = c),
      (t[11] = f),
      (t[12] = s),
      (t[13] = p))
    : (p = t[13]);
  let ee = p;
  if (!i || o == null) return ee;
  let h;
  t[14] === ee ? (h = t[15]) : ((h = (0, Q.jsx)(`div`, { children: ee })), (t[14] = ee), (t[15] = h));
  let g;
  return (
    t[16] !== h || t[17] !== o
      ? ((g = (0, Q.jsx)(V, { tooltipContent: o, children: h })), (t[16] = h), (t[17] = o), (t[18] = g))
      : (g = t[18]),
    g
  );
}
var It, Lt, Q;
function Rt() {
  return (Rt = e(() => {
    ((It = G()),
      O(),
      n(),
      Ue(),
      y(),
      z(),
      (Lt = K()),
      P(),
      Ge(),
      H(),
      d(),
      W(),
      i(),
      _(),
      N(),
      A(),
      ve(),
      je(),
      gt(),
      k(),
      C(),
      St(),
      Xe(),
      E(),
      fe(),
      S(),
      Se(),
      jt(),
      Me(),
      vt(),
      tt(),
      Ze(),
      yt(),
      ht(),
      ft(),
      ge(),
      (Q = pe()));
  }))();
}
function zt({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({ cwd: e ?? null, enabled: t, hostConfig: n, operationSource: r });
}
function Bt({ cwd: e, enabled: t, hostConfig: n, operationSource: r, preserveRemoteRefs: i = !1, query: a }) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    preserveRemoteRefs: i,
    query: a,
  });
}
var Vt, Ht;
function Ut() {
  return (Ut = e(() => {
    (y(),
      fe(),
      u(),
      J(),
      Ve(),
      (Vt = D(
        o,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) => Be(e, We(n), n, r, { enabled: t }),
        { key: zt },
      )),
      (Ht = D(
        o,
        (
          { cwd: e, enabled: t, hostConfig: n, operationSource: r, preserveRemoteRefs: i = !1, query: a },
          { get: o },
        ) => {
          let s = o(Vt, { cwd: e, enabled: t, hostConfig: n, operationSource: r }).data;
          return De(
            `search-branches`,
            s,
            s == null
              ? null
              : { root: s.root, operationSource: r, preserveRemoteRefs: i, query: a, limit: 20 },
            We(n),
            n,
            { enabled: t, staleTime: v.FIVE_SECONDS },
          );
        },
        { key: Bt },
      )));
  }))();
}
function Wt(e, t, n, r) {
  let i = (0, qt.c)(4),
    a;
  i[0] === n
    ? (a = i[1])
    : ((a = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = a));
  let o;
  return (
    i[2] === r
      ? (o = i[3])
      : ((o = { liveQuery: Kt, select: Gt, staleTime: 1 / 0, ...r }), (i[2] = r), (i[3] = o)),
    Oe(e, t, `recent-branches`, a, n, o)
  );
}
function Gt(e) {
  return e.branches;
}
function Kt(e) {
  return { method: `recent-branches`, params: e };
}
var qt;
function Jt() {
  return (Jt = e(() => {
    ((qt = G()), J());
  }))();
}
function Yt(e, t) {
  let n = (0, Zt.c)(12),
    r = L(),
    i = e?.cwd ?? null,
    a = e?.hostId ?? null,
    o;
  n[0] !== i || n[1] !== a
    ? ((o = [`vscode`, `git-checkout-branch`, i, a]), (n[0] = i), (n[1] = a), (n[2] = o))
    : (o = n[2]);
  let s;
  n[3] === t
    ? (s = n[4])
    : ((s = async (e) => {
        let { repositoryTarget: n, ...r } = e;
        return R(`git-checkout-branch`, { params: { ...r, cwd: n.cwd, hostId: n.hostId }, source: t });
      }),
      (n[3] = t),
      (n[4] = s));
  let c;
  n[5] !== t || n[6] !== r
    ? ((c = (e, n) => {
        let { repositoryTarget: i } = n;
        if (e.status !== `success`) return;
        let a = We(i.hostConfig);
        r.fetchQuery(Be(i.cwd, a, i.hostConfig, t))
          .then((e) => {
            if (e != null) return Y(r, e, { changeType: `head`, hostKey: a });
          })
          .catch(Xt);
      }),
      (n[5] = t),
      (n[6] = r),
      (n[7] = c))
    : (c = n[7]);
  let l;
  return (
    n[8] !== o || n[9] !== s || n[10] !== c
      ? ((l = { mutationKey: o, mutationFn: s, networkMode: `always`, onSuccess: c }),
        (n[8] = o),
        (n[9] = s),
        (n[10] = c),
        (n[11] = l))
      : (l = n[11]),
    g(l)
  );
}
function Xt() {}
var Zt;
function Qt() {
  return (Qt = e(() => {
    ((Zt = G()), p(), U(), J(), Ve(), B());
  }))();
}
function $t(e, t) {
  let n = (0, en.c)(16),
    r = L(),
    i = x(ze),
    a;
  n[0] === i ? (a = n[1]) : ((a = { retainRepoWatch: i }), (n[0] = i), (n[1] = a));
  let { data: o } = Ce(e, t, a),
    s = e?.cwd ?? null,
    c = e?.hostId ?? null,
    l;
  n[2] !== s || n[3] !== c
    ? ((l = [`vscode`, `git-create-branch`, s, c]), (n[2] = s), (n[3] = c), (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] !== t || n[6] !== e
    ? ((u = async (n) => {
        if (e == null) throw Error(`Expected a repository target`);
        return R(`git-create-branch`, { params: { ...n, cwd: e.cwd, hostId: e.hostId }, source: t });
      }),
      (n[5] = t),
      (n[6] = e),
      (n[7] = u))
    : (u = n[7]);
  let d;
  n[8] !== o || n[9] !== r || n[10] !== e
    ? ((d = (t, n, i) => {
        if (e != null && o != null) {
          let t = i.mode === `synced` ? `synced-branch` : `head`;
          Y(r, o, { changeType: t, hostKey: We(e.hostConfig) });
        }
      }),
      (n[8] = o),
      (n[9] = r),
      (n[10] = e),
      (n[11] = d))
    : (d = n[11]);
  let f;
  return (
    n[12] !== l || n[13] !== u || n[14] !== d
      ? ((f = { mutationKey: l, mutationFn: u, networkMode: `always`, onSettled: d }),
        (n[12] = l),
        (n[13] = u),
        (n[14] = d),
        (n[15] = f))
      : (f = n[15]),
    g(f)
  );
}
var en;
function tn() {
  return (tn = e(() => {
    ((en = G()), p(), U(), y(), J(), ke(), Ae(), B());
  }))();
}
function nn(e) {
  let n = (0, rn.c)(6),
    { showSetPrefix: r } = e,
    i = r === void 0 || r,
    a = c(),
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, an.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, an.jsx)(f, {
          id: `localConversation.syncSetup.branchName`,
          defaultMessage: `Branch name`,
          description: `Title for the branch name input in the sync setup modal`,
        }),
      })),
      (n[0] = o))
    : (o = n[0]);
  let s;
  n[1] !== a || n[2] !== i
    ? ((s = i
        ? (0, an.jsx)(t, {
            className: `text-sm`,
            color: `ghostTertiary`,
            size: `inline`,
            onClick: () => {
              a(`/settings/git-settings`);
            },
            children: (0, an.jsx)(f, {
              id: `localConversation.syncSetup.setPrefix`,
              defaultMessage: `Set prefix`,
              description: `Label for branch prefix configuration`,
            }),
          })
        : null),
      (n[1] = a),
      (n[2] = i),
      (n[3] = s))
    : (s = n[3]);
  let l;
  return (
    n[4] === s
      ? (l = n[5])
      : ((l = (0, an.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [o, s],
        })),
        (n[4] = s),
        (n[5] = l)),
    l
  );
}
var rn, an;
function on() {
  return (on = e(() => {
    ((rn = G()), P(), ae(), H(), (an = pe()));
  }))();
}
function sn(e) {
  let t = (0, gn.c)(100),
    {
      cwd: n,
      gitRoot: r,
      hostConfig: i,
      localConversationId: s,
      isLoading: c,
      isReadOnly: l,
      revalidateBranchSelection: u,
      renderWhileLoading: d,
      shouldShow: f,
      side: p,
      align: m,
      getPlacement: h,
      renderStaticBranch: g,
      detachedControl: _,
      renderControl: v,
      onCloseAutoFocus: te,
      onOpenChange: y,
      open: ne,
    } = e,
    b = c !== void 0 && c,
    x = l !== void 0 && l,
    S = d !== void 0 && d,
    C = p === void 0 ? `top` : p,
    w = m === void 0 ? `end` : m,
    T = ee(o),
    E = re(),
    D = (0, _n.useRef)(!1),
    [ie, ae] = (0, _n.useState)(!1),
    O = ne ?? ie,
    [k, oe] = (0, _n.useState)(!1),
    [A, j] = (0, _n.useState)(!1),
    [M, N] = (0, _n.useState)(!1),
    [P, F] = (0, _n.useState)(!1),
    [I, ce] = (0, _n.useState)(0),
    [L, le] = (0, _n.useState)(null),
    ue;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ue = []), (t[0] = ue)) : (ue = t[0]);
  let [R, z] = (0, _n.useState)(ue),
    [de, B] = (0, _n.useState)(`idle`),
    V;
  t[1] !== n || t[2] !== r || t[3] !== i
    ? ((V = r == null ? null : X({ cwd: n, hostConfig: i, root: r })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = V))
    : (V = t[4]);
  let H = V,
    U;
  t[5] !== i || t[6] !== H
    ? ((U = H == null ? null : { cwd: H.cwd, hostConfig: i }), (t[5] = i), (t[6] = H), (t[7] = U))
    : (U = t[7]);
  let W;
  t[8] !== f || t[9] !== U
    ? ((W = { enabled: f, operationSource: vn, lookup: U }), (t[8] = f), (t[9] = U), (t[10] = W))
    : (W = t[10]);
  let { data: G, isLoading: fe, refetch: pe } = q(Ie, W),
    me = G?.branch?.trim() ?? null,
    he = f && (me != null || G?.isDetached === !0),
    K;
  t[11] !== i || t[12] !== s
    ? ((K = s == null ? null : { hostId: i.id, threadId: s }), (t[11] = i), (t[12] = s), (t[13] = K))
    : (K = t[13]);
  let ge = q(ye, K),
    _e = P || de !== `idle`,
    ve = Yt(H, vn),
    be = $t(H, vn),
    J = ve.isPending || be.isPending,
    xe = E.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    Se;
  t[14] === y
    ? (Se = t[15])
    : ((Se = (e) => {
        (e && oe(!0), ae(e), y?.(e));
      }),
      (t[14] = y),
      (t[15] = Se));
  let Y = Se,
    Ce;
  t[16] === Y
    ? (Ce = t[17])
    : ((Ce = () => {
        Y(!1);
      }),
      (t[16] = Y),
      (t[17] = Ce));
  let we = Ce,
    Te;
  t[18] === u ? (Te = t[19]) : ((Te = async () => u == null || (await u())), (t[18] = u), (t[19] = Te));
  let Ee = Te,
    De;
  t[20] !== E || t[21] !== T
    ? ((De = (e) => {
        T.get(se).danger(
          E.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
          { errorAnalytics: { toastId: `composer.footer.branchSwitch.checkoutError` } },
        );
      }),
      (t[20] = E),
      (t[21] = T),
      (t[22] = De))
    : (De = t[22]);
  let Oe = De,
    ke;
  t[23] !== E || t[24] !== T
    ? ((ke = (e) => {
        T.get(se).danger(
          E.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
          { errorAnalytics: { toastId: `composer.footer.branchSwitch.createBranchError` } },
        );
      }),
      (t[23] = E),
      (t[24] = T),
      (t[25] = ke))
    : (ke = t[25]);
  let Ae = ke,
    je;
  t[26] === we
    ? (je = t[27])
    : ((je = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return (
          t === `blocked-by-working-tree-changes` &&
          ((D.current = !0), z(n ?? []), le(r), we(), N(!1), j(!0), !0)
        );
      }),
      (t[26] = we),
      (t[27] = je));
  let Me = je,
    Pe = async (e) => {
      if (!(J || H == null)) {
        if (e === me) {
          we();
          return;
        }
        try {
          if (!(await Ee())) return;
          let t = await ve.mutateAsync({ branch: e, repositoryTarget: H });
          if (t.status === `error`) {
            if (
              Me({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            Oe(t.error);
            return;
          }
          (s != null && Ne(T, i.id, s, e, H.root), pe(), we());
        } catch (e) {
          let t = e;
          Oe(t instanceof Error ? t.message : String(t));
        }
      }
    },
    Fe;
  t[28] !== Ee ||
  t[29] !== ve ||
  t[30] !== be ||
  t[31] !== i ||
  t[32] !== J ||
  t[33] !== s ||
  t[34] !== Me ||
  t[35] !== pe ||
  t[36] !== H ||
  t[37] !== T ||
  t[38] !== Oe ||
  t[39] !== Ae
    ? ((Fe = async (e) => {
        if (!(J || H == null))
          try {
            if (!(await Ee())) return;
            let t = await be.mutateAsync({ branch: e, mode: `worktree`, failIfExists: !0 });
            if (t.status === `error`) {
              Ae(t.error);
              return;
            }
            if (!(await Ee())) return;
            let n = await ve.mutateAsync({ branch: e, repositoryTarget: H });
            if (n.status === `error`) {
              if (
                Me({
                  errorType: n.errorType,
                  conflictedPaths: n.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (Oe(n.error), N(!1));
              return;
            }
            (s != null && Ne(T, i.id, s, e, H.root), pe(), N(!1));
          } catch (e) {
            let t = e,
              n = t instanceof Error ? t.message : String(t);
            Ae(n);
          }
      }),
      (t[28] = Ee),
      (t[29] = ve),
      (t[30] = be),
      (t[31] = i),
      (t[32] = J),
      (t[33] = s),
      (t[34] = Me),
      (t[35] = pe),
      (t[36] = H),
      (t[37] = T),
      (t[38] = Oe),
      (t[39] = Ae),
      (t[40] = Fe))
    : (Fe = t[40]);
  let Le = Fe,
    Re;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = () => {
        (F(!1), B(`idle`), z([]), le(null));
      }),
      (t[41] = Re))
    : (Re = t[41]);
  let ze = Re,
    Be;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (e) => {
        (j(e), e || (z([]), le(null)));
      }),
      (t[42] = Be))
    : (Be = t[42]);
  let Ve = Be,
    He;
  t[43] !== H || t[44] !== T
    ? ((He = () => {
        H != null && (T.set(it, rt(H), ``), B(`idle`), ce(cn), j(!1), F(!0));
      }),
      (t[43] = H),
      (t[44] = T),
      (t[45] = He))
    : (He = t[45]);
  let Ue = He,
    We;
  t[46] !== Pe || t[47] !== Le || t[48] !== ze || t[49] !== L
    ? ((We = (e) => {
        if (e === `success` && L != null) {
          let e = L;
          if ((ze(), e.type === `checkout`)) {
            Pe(e.branch);
            return;
          }
          Le(e.branch);
          return;
        }
        B(e);
      }),
      (t[46] = Pe),
      (t[47] = Le),
      (t[48] = ze),
      (t[49] = L),
      (t[50] = We))
    : (We = t[50]);
  let Ge = We;
  if (!he)
    return f && S && (b || fe)
      ? v({ currentBranch: void 0, disabled: !0, isPending: !0, switchTooltipText: xe })
      : null;
  if (H == null || x) return g?.({ currentBranch: me }) ?? null;
  if (me == null && _ !== void 0) return _;
  let Ke = a,
    qe;
  t[51] === te
    ? (qe = t[52])
    : ((qe = (e) => {
        D.current ? ((D.current = !1), e.preventDefault()) : te?.(e);
      }),
      (t[51] = te),
      (t[52] = qe));
  let Je = v({ currentBranch: me, disabled: J, isPending: J, switchTooltipText: xe }),
    Ye;
  t[53] !== Pe ||
  t[54] !== we ||
  t[55] !== me ||
  t[56] !== k ||
  t[57] !== i ||
  t[58] !== J ||
  t[59] !== O ||
  t[60] !== H
    ? ((Ye =
        O || k
          ? (0, $.jsx)(ln, {
              currentBranch: me,
              cwd: H.cwd,
              gitRoot: H.root,
              hostConfig: i,
              isOpen: O,
              disabled: J,
              onCheckout: Pe,
              onClose: we,
              onOpenCreate: () => {
                ((D.current = !0), we(), N(!0));
              },
            })
          : null),
      (t[53] = Pe),
      (t[54] = we),
      (t[55] = me),
      (t[56] = k),
      (t[57] = i),
      (t[58] = J),
      (t[59] = O),
      (t[60] = H),
      (t[61] = Ye))
    : (Ye = t[61]);
  let Xe;
  t[62] !== Ke ||
  t[63] !== w ||
  t[64] !== h ||
  t[65] !== Y ||
  t[66] !== O ||
  t[67] !== C ||
  t[68] !== qe ||
  t[69] !== Je ||
  t[70] !== Ye
    ? ((Xe = (0, $.jsx)(Ke, {
        side: C,
        open: O,
        align: w,
        getPlacement: h,
        onOpenChange: Y,
        onCloseAutoFocus: qe,
        triggerButton: Je,
        children: Ye,
      })),
      (t[62] = Ke),
      (t[63] = w),
      (t[64] = h),
      (t[65] = Y),
      (t[66] = O),
      (t[67] = C),
      (t[68] = qe),
      (t[69] = Je),
      (t[70] = Ye),
      (t[71] = Xe))
    : (Xe = t[71]);
  let Z;
  t[72] !== ge || t[73] !== Le || t[74] !== i || t[75] !== M || t[76] !== J || t[77] !== H
    ? ((Z = M
        ? (0, $.jsx)(un, {
            open: M,
            onOpenChange: N,
            conversationTitle: ge,
            cwd: H.cwd,
            hostConfig: i,
            isPending: J,
            onSubmit: Le,
          })
        : null),
      (t[72] = ge),
      (t[73] = Le),
      (t[74] = i),
      (t[75] = M),
      (t[76] = J),
      (t[77] = H),
      (t[78] = Z))
    : (Z = t[78]);
  let Ze;
  t[79] !== R ||
  t[80] !== Ue ||
  t[81] !== Ve ||
  t[82] !== i ||
  t[83] !== A ||
  t[84] !== L?.branch ||
  t[85] !== H
    ? ((Ze = A
        ? (0, $.jsx)(dn, {
            open: A,
            onOpenChange: Ve,
            conflictFiles: R,
            cwd: H.cwd,
            hostConfig: i,
            targetBranch: L?.branch ?? null,
            onContinue: Ue,
          })
        : null),
      (t[79] = R),
      (t[80] = Ue),
      (t[81] = Ve),
      (t[82] = i),
      (t[83] = A),
      (t[84] = L?.branch),
      (t[85] = H),
      (t[86] = Ze))
    : (Ze = t[86]);
  let Qe;
  t[87] !== I || t[88] !== ze || t[89] !== Ge || t[90] !== _e || t[91] !== P || t[92] !== s || t[93] !== H
    ? ((Qe =
        _e && H != null
          ? (0, $.jsx)(
              Mt,
              {
                open: P,
                onOpenChange: F,
                conversationId: s,
                target: H,
                onStatusChange: Ge,
                onRequestReset: ze,
              },
              I,
            )
          : null),
      (t[87] = I),
      (t[88] = ze),
      (t[89] = Ge),
      (t[90] = _e),
      (t[91] = P),
      (t[92] = s),
      (t[93] = H),
      (t[94] = Qe))
    : (Qe = t[94]);
  let $e;
  return (
    t[95] !== Xe || t[96] !== Z || t[97] !== Ze || t[98] !== Qe
      ? (($e = (0, $.jsxs)($.Fragment, { children: [Xe, Z, Ze, Qe] })),
        (t[95] = Xe),
        (t[96] = Z),
        (t[97] = Ze),
        (t[98] = Qe),
        (t[99] = $e))
      : ($e = t[99]),
    $e
  );
}
function cn(e) {
  return e + 1;
}
function ln(e) {
  let t = (0, gn.c)(61),
    {
      currentBranch: n,
      cwd: r,
      gitRoot: i,
      hostConfig: a,
      isOpen: o,
      disabled: s,
      onCheckout: c,
      onClose: l,
      onOpenCreate: u,
    } = e,
    d = re(),
    [p, ee] = (0, _n.useState)(``),
    m = He(p, 200),
    h;
  t[0] === o ? (h = t[1]) : ((h = { enabled: o }), (t[0] = o), (t[1] = h));
  let { data: g } = wt(r, a, vn, h),
    _;
  t[2] === o ? (_ = t[3]) : ((_ = { enabled: o }), (t[2] = o), (t[3] = _));
  let { data: v, isLoading: te, isFetching: y, isError: b, refetch: x } = Wt(r, a, vn, _),
    S = v === void 0 ? [] : v,
    C;
  t[4] === o ? (C = t[5]) : ((C = { enabled: o }), (t[4] = o), (t[5] = C));
  let { data: w } = qe(r, a, vn, C),
    T;
  t[6] === p ? (T = t[7]) : ((T = p.trim()), (t[6] = p), (t[7] = T));
  let E = T,
    D;
  t[8] === m ? (D = t[9]) : ((D = m.trim()), (t[8] = m), (t[9] = D));
  let ie = D,
    ae = E !== ie,
    O = ie.length > 0,
    k;
  t[10] !== r || t[11] !== a || t[12] !== ie || t[13] !== O
    ? ((k = { cwd: r, hostConfig: a, operationSource: vn, query: ie, enabled: O }),
      (t[10] = r),
      (t[11] = a),
      (t[12] = ie),
      (t[13] = O),
      (t[14] = k))
    : (k = t[14]);
  let { data: oe, isFetching: A, isError: M, refetch: se } = q(Ht, k),
    N = oe?.branches,
    P = mn({ branches: S, currentBranch: n, defaultBranch: w }),
    F = !te && !y && !b && S.length === 0,
    I;
  t[15] !== s || t[16] !== F || t[17] !== g
    ? ((I = Dt({ disabled: s, hasNoCommits: F, statusSummary: g })),
      (t[15] = s),
      (t[16] = F),
      (t[17] = g),
      (t[18] = I))
    : (I = t[18]);
  let { branchSelectionDisabled: ce, createAndCheckoutDisabled: L, uncommittedFileCount: le } = I,
    ue;
  t[19] !== F || t[20] !== d
    ? ((ue = F
        ? d.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[19] = F),
      (t[20] = d),
      (t[21] = ue))
    : (ue = t[21]);
  let R = ue,
    z;
  t[22] === i ? (z = t[23]) : ((z = At(i)), (t[22] = i), (t[23] = z));
  let de = te || (y && P.length === 0),
    B = ae || A,
    V;
  t[24] === x
    ? (V = t[25])
    : ((V = () => {
        x();
      }),
      (t[24] = x),
      (t[25] = V));
  let H;
  t[26] === se
    ? (H = t[27])
    : ((H = () => {
        se();
      }),
      (t[26] = se),
      (t[27] = H));
  let U;
  t[28] === c
    ? (U = t[29])
    : ((U = (e) => {
        c(e);
      }),
      (t[28] = c),
      (t[29] = U));
  let W;
  t[30] !== n || t[31] !== le
    ? ((W = (e) =>
        e === n && le > 0
          ? (0, $.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-tertiary`,
              children: (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: le },
              }),
            })
          : null),
      (t[30] = n),
      (t[31] = le),
      (t[32] = W))
    : (W = t[32]);
  let G;
  t[33] !== ce ||
  t[34] !== n ||
  t[35] !== b ||
  t[36] !== M ||
  t[37] !== c ||
  t[38] !== l ||
  t[39] !== P ||
  t[40] !== p ||
  t[41] !== N ||
  t[42] !== z ||
  t[43] !== de ||
  t[44] !== B ||
  t[45] !== V ||
  t[46] !== H ||
  t[47] !== U ||
  t[48] !== W
    ? ((G = (0, $.jsx)(kt, {
        branches: P,
        repositoryName: z,
        selectedBranch: n,
        disabled: ce,
        isError: b,
        isLoading: de,
        isSearchError: M,
        isSearchLoading: B,
        onClose: l,
        onRetry: V,
        onRetrySearch: H,
        onSearchQueryChange: ee,
        onSelectCustomBranch: U,
        onSelectBranch: c,
        renderBranchSubText: W,
        searchedBranches: N,
        searchQuery: p,
      })),
      (t[33] = ce),
      (t[34] = n),
      (t[35] = b),
      (t[36] = M),
      (t[37] = c),
      (t[38] = l),
      (t[39] = P),
      (t[40] = p),
      (t[41] = N),
      (t[42] = z),
      (t[43] = de),
      (t[44] = B),
      (t[45] = V),
      (t[46] = H),
      (t[47] = U),
      (t[48] = W),
      (t[49] = G))
    : (G = t[49]);
  let fe;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(ne.Separator, {})), (t[50] = fe))
    : (fe = t[50]);
  let pe;
  t[51] === u
    ? (pe = t[52])
    : ((pe = (e) => {
        (e.preventDefault(), u());
      }),
      (t[51] = u),
      (t[52] = pe));
  let me;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(f, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[53] = me))
    : (me = t[53]);
  let he;
  t[54] !== L || t[55] !== R || t[56] !== pe
    ? ((he = (0, $.jsx)(ne.Item, {
        leftIconAsset: j,
        disabled: L,
        tooltipText: R,
        onSelect: pe,
        children: me,
      })),
      (t[54] = L),
      (t[55] = R),
      (t[56] = pe),
      (t[57] = he))
    : (he = t[57]);
  let K;
  return (
    t[58] !== G || t[59] !== he
      ? ((K = (0, $.jsxs)($.Fragment, { children: [G, fe, he] })), (t[58] = G), (t[59] = he), (t[60] = K))
      : (K = t[60]),
    K
  );
}
function un(e) {
  let n = (0, gn.c)(53),
    { open: i, onOpenChange: a, conversationTitle: o, cwd: s, hostConfig: c, isPending: l, onSubmit: u } = e,
    d = re(),
    p = r(te.branchPrefix),
    ee;
  n[0] !== p || n[1] !== o
    ? ((ee = we({ branchPrefix: p, conversationTitle: o })), (n[0] = p), (n[1] = o), (n[2] = ee))
    : (ee = n[2]);
  let [m, h] = (0, _n.useState)(ee),
    g;
  n[3] === i ? (g = n[4]) : ((g = { enabled: i }), (n[3] = i), (n[4] = g));
  let { data: _, isLoading: v, isFetching: y, isError: ne } = Wt(s, c, vn, g),
    b,
    x,
    S,
    C;
  if (n[5] !== m || n[6] !== _) {
    b = _ === void 0 ? [] : _;
    let e = mn({ branches: b, currentBranch: ``, defaultBranch: null });
    ((C = m.trim()),
      (x = C.endsWith(`/`)),
      (S = C.length > 0 && e.includes(C)),
      (n[5] = m),
      (n[6] = _),
      (n[7] = b),
      (n[8] = x),
      (n[9] = S),
      (n[10] = C));
  } else ((b = n[7]), (x = n[8]), (S = n[9]), (C = n[10]));
  let w = S,
    T = !v && !y && !ne && b.length === 0,
    E = !l && !v && !y && !T && C.length > 0 && !x && !w,
    D;
  n[11] !== E || n[12] !== u || n[13] !== C
    ? ((D = (e) => {
        (e.preventDefault(), E && u(C));
      }),
      (n[11] = E),
      (n[12] = u),
      (n[13] = C),
      (n[14] = D))
    : (D = n[14]);
  let ae;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(F, {
        children: (0, $.jsx)(oe, {
          title: (0, $.jsx)(ie, {
            children: (0, $.jsx)(f, {
              id: `composer.footer.branchSwitch.createDialog.title`,
              defaultMessage: `Create and checkout branch`,
              description: `Title for dialog that creates and checks out a new branch from the composer footer`,
            }),
          }),
        }),
      })),
      (n[15] = ae))
    : (ae = n[15]);
  let O;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, $.jsx)(nn, {})), (n[16] = O)) : (O = n[16]);
  let k;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e) => {
        h(Ke(e.target.value));
      }),
      (n[17] = k))
    : (k = n[17]);
  let A;
  n[18] === d
    ? (A = n[19])
    : ((A = d.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (n[18] = d),
      (n[19] = A));
  let j;
  n[20] === d
    ? (j = n[21])
    : ((j = d.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (n[20] = d),
      (n[21] = j));
  let M;
  n[22] !== m || n[23] !== j || n[24] !== A
    ? ((M = (0, $.jsx)(Ee, { autoFocus: !0, value: m, onChange: k, placeholder: A, "aria-label": j })),
      (n[22] = m),
      (n[23] = j),
      (n[24] = A),
      (n[25] = M))
    : (M = n[25]);
  let se;
  n[26] !== w || n[27] !== x || n[28] !== l
    ? ((se = x
        ? (0, $.jsx)(`p`, {
            className: `text-xs text-danger`,
            children: (0, $.jsx)(f, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : w && !l
          ? (0, $.jsx)(`p`, {
              className: `text-xs text-danger`,
              children: (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (n[26] = w),
      (n[27] = x),
      (n[28] = l),
      (n[29] = se))
    : (se = n[29]);
  let N;
  n[30] !== M || n[31] !== se
    ? ((N = (0, $.jsxs)(F, { className: `flex flex-col gap-2`, children: [O, M, se] })),
      (n[30] = M),
      (n[31] = se),
      (n[32] = N))
    : (N = n[32]);
  let P;
  n[33] === a
    ? (P = n[34])
    : ((P = () => {
        a(!1);
      }),
      (n[33] = a),
      (n[34] = P));
  let I;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(f, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (n[35] = I))
    : (I = n[35]);
  let L;
  n[36] === P
    ? (L = n[37])
    : ((L = (0, $.jsx)(t, { color: `secondary`, type: `button`, onClick: P, children: I })),
      (n[36] = P),
      (n[37] = L));
  let ue = !E,
    R;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(f, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (n[38] = R))
    : (R = n[38]);
  let z;
  n[39] !== l || n[40] !== ue
    ? ((z = (0, $.jsx)(t, { color: `primary`, disabled: ue, loading: l, type: `submit`, children: R })),
      (n[39] = l),
      (n[40] = ue),
      (n[41] = z))
    : (z = n[41]);
  let B;
  n[42] !== L || n[43] !== z
    ? ((B = (0, $.jsx)(F, { children: (0, $.jsxs)(de, { children: [L, z] }) })),
      (n[42] = L),
      (n[43] = z),
      (n[44] = B))
    : (B = n[44]);
  let V;
  n[45] !== N || n[46] !== B || n[47] !== D
    ? ((V = (0, $.jsxs)(le, {
        as: `form`,
        "data-codex-branch-create-dialog": ``,
        onSubmit: D,
        children: [ae, N, B],
      })),
      (n[45] = N),
      (n[46] = B),
      (n[47] = D),
      (n[48] = V))
    : (V = n[48]);
  let H;
  return (
    n[49] !== a || n[50] !== i || n[51] !== V
      ? ((H = (0, $.jsx)(ce, { size: `feature`, open: i, onOpenChange: a, children: V })),
        (n[49] = a),
        (n[50] = i),
        (n[51] = V),
        (n[52] = H))
      : (H = n[52]),
    H
  );
}
function dn(e) {
  let n = (0, gn.c)(57),
    { open: r, onOpenChange: i, conflictFiles: a, cwd: o, hostConfig: s, targetBranch: c, onContinue: l } = e,
    { data: u } = wt(o, s, vn),
    d;
  n[0] === o
    ? (d = n[1])
    : ((d = { cwd: o, includeUntrackedFiles: !1, operationSource: vn, source: `staged` }),
      (n[0] = o),
      (n[1] = d));
  let p;
  n[2] === r ? (p = n[3]) : ((p = { enabled: r, liveQuery: pn, staleTime: 1 / 0 }), (n[2] = r), (n[3] = p));
  let { data: ee } = Oe(o, s, `review-summary`, d, vn, p),
    m;
  n[4] === o
    ? (m = n[5])
    : ((m = { cwd: o, operationSource: vn, source: `unstaged` }), (n[4] = o), (n[5] = m));
  let h;
  n[6] === r ? (h = n[7]) : ((h = { enabled: r, liveQuery: fn, staleTime: 1 / 0 }), (n[6] = r), (n[7] = h));
  let { data: g } = Oe(o, s, `review-summary`, m, vn, h),
    _,
    v,
    te,
    y,
    ne,
    re,
    b,
    x,
    S,
    C,
    w;
  if (
    n[8] !== a ||
    n[9] !== l ||
    n[10] !== i ||
    n[11] !== r ||
    n[12] !== ee ||
    n[13] !== u ||
    n[14] !== c ||
    n[15] !== g
  ) {
    let e = [ee, g],
      t = et(e),
      o = t?.totalAdditions ?? 0,
      s = t?.totalDeletions ?? 0,
      d = o + s > 0,
      p = a.length > 0,
      m;
    n[27] === u ? (m = n[28]) : ((m = Et(u)), (n[27] = u), (n[28] = m));
    let h = m;
    ((te = ce),
      (y = `feature`),
      (ne = r),
      (re = i),
      (v = le),
      (S = `form`),
      n[29] === l
        ? (C = n[30])
        : ((C = (e) => {
            (e.preventDefault(), l());
          }),
          (n[29] = l),
          (n[30] = C)),
      n[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((w = (0, $.jsx)(F, {
            children: (0, $.jsx)(oe, {
              title: (0, $.jsx)(ie, {
                children: (0, $.jsx)(f, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                  defaultMessage: `Commit changes to switch branch`,
                  description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
                }),
              }),
            }),
          })),
          (n[31] = w))
        : (w = n[31]),
      (_ = F),
      (b = `text-codex-description`),
      (x = p
        ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, $.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: a.map((t, n) => {
                  let r = mt(t, e);
                  return (0, $.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-default`,
                      children: [
                        (0, $.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, $.jsx)(Te, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : d
          ? (0, $.jsx)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children:
                c == null
                  ? (0, $.jsx)(f, {
                      id: `composer.footer.branchSwitch.uncommittedDialog.body.withDiff.unknownBranch`,
                      defaultMessage: `Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.`,
                      description: `Body text in the uncommitted changes dialog when diff stats are available but the target branch name is unavailable`,
                      values: {
                        fileCount: h,
                        diffStats: () =>
                          (0, $.jsx)(Te, {
                            className: `inline-flex align-middle`,
                            linesAdded: o,
                            linesRemoved: s,
                          }),
                      },
                    })
                  : (0, $.jsx)(f, {
                      id: `composer.footer.branchSwitch.uncommittedDialog.body.withDiff.namedBranch`,
                      defaultMessage: `Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                      description: `Body text in the uncommitted changes dialog when diff stats and the target branch name are available`,
                      values: {
                        fileCount: h,
                        branchName: c,
                        diffStats: () =>
                          (0, $.jsx)(Te, {
                            className: `inline-flex align-middle`,
                            linesAdded: o,
                            linesRemoved: s,
                          }),
                      },
                    }),
            })
          : c == null
            ? (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff.unknownBranch`,
                defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.`,
                description: `Body text in the uncommitted changes dialog when diff stats and the target branch name are unavailable`,
                values: { fileCount: h },
              })
            : (0, $.jsx)(f, {
                id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff.namedBranch`,
                defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                description: `Body text in the uncommitted changes dialog when diff stats are unavailable but the target branch name is available`,
                values: { fileCount: h, branchName: c },
              })),
      (n[8] = a),
      (n[9] = l),
      (n[10] = i),
      (n[11] = r),
      (n[12] = ee),
      (n[13] = u),
      (n[14] = c),
      (n[15] = g),
      (n[16] = _),
      (n[17] = v),
      (n[18] = te),
      (n[19] = y),
      (n[20] = ne),
      (n[21] = re),
      (n[22] = b),
      (n[23] = x),
      (n[24] = S),
      (n[25] = C),
      (n[26] = w));
  } else
    ((_ = n[16]),
      (v = n[17]),
      (te = n[18]),
      (y = n[19]),
      (ne = n[20]),
      (re = n[21]),
      (b = n[22]),
      (x = n[23]),
      (S = n[24]),
      (C = n[25]),
      (w = n[26]));
  let T;
  n[32] !== _ || n[33] !== b || n[34] !== x
    ? ((T = (0, $.jsx)(_, { className: b, children: x })), (n[32] = _), (n[33] = b), (n[34] = x), (n[35] = T))
    : (T = n[35]);
  let E;
  n[36] === i
    ? (E = n[37])
    : ((E = () => {
        i(!1);
      }),
      (n[36] = i),
      (n[37] = E));
  let D;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(f, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (n[38] = D))
    : (D = n[38]);
  let ae;
  n[39] === E
    ? (ae = n[40])
    : ((ae = (0, $.jsx)(t, { color: `secondary`, type: `button`, onClick: E, children: D })),
      (n[39] = E),
      (n[40] = ae));
  let O;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(t, {
        autoFocus: !0,
        color: `primary`,
        type: `submit`,
        children: (0, $.jsx)(f, {
          id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
          defaultMessage: `Commit and switch branch…`,
          description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
        }),
      })),
      (n[41] = O))
    : (O = n[41]);
  let k;
  n[42] === ae
    ? (k = n[43])
    : ((k = (0, $.jsx)(F, { children: (0, $.jsxs)(de, { children: [ae, O] }) })), (n[42] = ae), (n[43] = k));
  let A;
  n[44] !== v || n[45] !== T || n[46] !== k || n[47] !== S || n[48] !== C || n[49] !== w
    ? ((A = (0, $.jsxs)(v, { as: S, onSubmit: C, children: [w, T, k] })),
      (n[44] = v),
      (n[45] = T),
      (n[46] = k),
      (n[47] = S),
      (n[48] = C),
      (n[49] = w),
      (n[50] = A))
    : (A = n[50]);
  let j;
  return (
    n[51] !== te || n[52] !== y || n[53] !== ne || n[54] !== re || n[55] !== A
      ? ((j = (0, $.jsx)(te, { size: y, open: ne, onOpenChange: re, children: A })),
        (n[51] = te),
        (n[52] = y),
        (n[53] = ne),
        (n[54] = re),
        (n[55] = A),
        (n[56] = j))
      : (j = n[56]),
    j
  );
}
function fn(e) {
  return { method: `review-summary`, params: e };
}
function pn(e) {
  return { method: `review-summary`, params: e };
}
function mn({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    hn(n, i, r),
    hn(t, i, r),
    e.forEach((e) => {
      hn(e, i, r);
    }),
    i
  );
}
function hn(e, t, n) {
  e && !n.has(e) && (n.add(e), t.push(e));
}
var gn, _n, $, vn;
function yn() {
  return (yn = e(() => {
    ((gn = G()),
      n(),
      y(),
      z(),
      (_n = K()),
      P(),
      Ge(),
      Re(),
      H(),
      W(),
      M(),
      i(),
      _e(),
      I(),
      ve(),
      J(),
      Ut(),
      Fe(),
      xe(),
      Jt(),
      Je(),
      Tt(),
      Qt(),
      tn(),
      Rt(),
      Ze(),
      on(),
      ge(),
      Ot(),
      fe(),
      S(),
      jt(),
      Me(),
      ct(),
      Z(),
      ($ = pe()),
      (vn = `composer_branch_switcher`));
  }))();
}
export {
  Jt as a,
  Ut as c,
  At as d,
  jt as f,
  on as i,
  Mt as l,
  yn as n,
  Wt as o,
  nn as r,
  Ht as s,
  sn as t,
  Rt as u,
};
//# sourceMappingURL=git-branch-switcher-91226a3079fc.js.map
