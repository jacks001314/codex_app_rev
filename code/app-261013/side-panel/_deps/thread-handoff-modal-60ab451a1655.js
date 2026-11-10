import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  AO as r,
  CO as i,
  Cot as a,
  Dz as o,
  GC as ee,
  H0 as s,
  IDt as c,
  Ixt as l,
  KC as u,
  LR as d,
  Mz as te,
  Nz as f,
  Pft as ne,
  Pxt as p,
  S4 as m,
  TO as h,
  U0 as g,
  V0 as _,
  VDt as re,
  Vxt as v,
  W0 as ie,
  Wnt as y,
  Xot as b,
  Yot as x,
  b0 as S,
  cut as C,
  dut as w,
  hht as ae,
  hot as oe,
  jDt as T,
  jR as se,
  kz as ce,
  l0 as le,
  lot as E,
  mO as ue,
  qft as de,
  rst as D,
  t3 as fe,
  u0 as O,
  vO as k,
  vzt as A,
  wot as j,
  x4 as M,
  xMt as N,
  y0 as P,
  yzt as F,
  zR as I,
  zxt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as me,
  $on as he,
  CEt as L,
  DPn as R,
  GOt as ge,
  Gir as z,
  Gon as _e,
  Jdr as B,
  Qir as ve,
  S8n as ye,
  SEt as be,
  TPn as V,
  TT as H,
  Xdr as xe,
  Xer as Se,
  Xir as U,
  Ydr as Ce,
  Zir as W,
  _Et as G,
  aBt as K,
  bEt as we,
  esn as Te,
  etr as Ee,
  far as De,
  gEt as Oe,
  gpr as q,
  iX as ke,
  m_r as Ae,
  o9t as je,
  oBt as Me,
  oFr as Ne,
  p8n as Pe,
  par as Fe,
  qon as Ie,
  rX as Le,
  s9t as J,
  sFr as Re,
  tsn as ze,
  v8n as Y,
  v_r as Be,
  vpr as Ve,
  wT as He,
  xEt as Ue,
  yEt as We,
} from "./app-initial-5851df3f6cb1.js";
import {
  Bh as Ge,
  Cm as Ke,
  Gt as qe,
  Hh as Je,
  Jh as Ye,
  Mh as Xe,
  Nh as Ze,
  Ph as Qe,
  Sm as X,
  Uh as $e,
  Vh as et,
  Wh as tt,
  Wt as nt,
  Yh as rt,
  jh as it,
  qh as at,
  zh as ot,
} from "./app-primary-fe8a450b3b04.js";
import { n as st, t as ct } from "./use-codex-worktrees-5b60697f9783.js";
import { a as lt, o as ut } from "./git-branch-switcher-91226a3079fc.js";
import { a as dt, i as ft } from "./git-branch-switcher-state-a1297efb90da.js";
function pt(e, t, n, r) {
  let i = (0, ht.c)(9),
    a;
  i[0] === r ? (a = i[1]) : ((a = r === void 0 ? {} : r), (i[0] = r), (i[1] = a));
  let o = a,
    ee = e ?? ``,
    s;
  i[2] === ee ? (s = i[3]) : ((s = de(ee)), (i[2] = ee), (i[3] = s));
  let c;
  i[4] !== n || i[5] !== s
    ? ((c = { cwd: s, operationSource: n }), (i[4] = n), (i[5] = s), (i[6] = c))
    : (c = i[6]);
  let l;
  return (
    i[7] === o ? (l = i[8]) : ((l = { liveQuery: mt, staleTime: 1 / 0, ...o }), (i[7] = o), (i[8] = l)),
    U(e, t, `list-worktrees`, c, n, l)
  );
}
function mt(e) {
  return { method: `list-worktrees`, params: e };
}
var ht;
function gt() {
  return (gt = e(() => {
    ((ht = A()), D(), z());
  }))();
}
function _t(e) {
  let t = (0, wt.c)(66),
    {
      open: r,
      onOpenChange: i,
      conversationId: a,
      composerViewState: o,
      conversationTitle: ee,
      currentBranch: s,
      cwd: c,
    } = e,
    l = re(),
    u = Xe(a),
    [d, te] = (0, Tt.useState)(null),
    [f, p] = (0, Tt.useState)(null),
    m = n(ne.branchPrefix),
    h = be({ branchPrefix: m ?? void 0, conversationTitle: ee }),
    g = f ?? (s || h),
    _ = g.trim(),
    ie = pe(me, a),
    y = Re(ie),
    b;
  t[0] !== c || t[1] !== y
    ? ((b = { cwd: c, hostConfig: y }), (t[0] = c), (t[1] = y), (t[2] = b))
    : (b = t[2]);
  let { data: x } = ve(b, `move_to_local_dialog`),
    S = x?.root ?? null,
    w = S ?? c,
    ae = I(w),
    { data: oe, isLoading: T, isFetching: se } = pt(S ?? c, y, `move_to_local_dialog`),
    { data: ce } = st(y, `move_to_local_dialog`),
    le = Ce(y.id),
    { data: E } = v(Be),
    ue = oe?.worktrees,
    D;
  t[3] === ce?.worktrees
    ? (D = t[4])
    : ((D = new Set((ce?.worktrees ?? []).map(vt))), (t[3] = ce?.worktrees), (t[4] = D));
  let fe = D,
    O;
  t[5] !== le || t[6] !== fe
    ? ((O = (e) => fe.has(I(e)) || C(e, le)), (t[5] = le), (t[6] = fe), (t[7] = O))
    : (O = t[7]);
  let k = O,
    A,
    j,
    M,
    N,
    P,
    F;
  if (t[8] !== c || t[9] !== k || t[10] !== ue || t[11] !== d || t[12] !== w || t[13] !== E?.labels) {
    let e;
    (t[20] === k ? (e = t[21]) : ((e = (e) => !k(e.root)), (t[20] = k), (t[21] = e)),
      (j = He({ cwd: c, sourceWorktreeRoot: w, repoWorktreeEntries: (ue ?? []).filter(e) })));
    let n;
    (t[22] === E?.labels ? (n = t[23]) : ((n = E?.labels ?? {}), (t[22] = E?.labels), (t[23] = n)),
      (F = n),
      (N = j.find((e) => e.gitRoot === d) ?? j[0] ?? null));
    let r = N?.workspaceRoot ?? null;
    ((M = r == null ? null : de(r)),
      (A = N?.gitRoot ?? null),
      (P = A ? I(A) : null),
      (t[8] = c),
      (t[9] = k),
      (t[10] = ue),
      (t[11] = d),
      (t[12] = w),
      (t[13] = E?.labels),
      (t[14] = A),
      (t[15] = j),
      (t[16] = M),
      (t[17] = N),
      (t[18] = P),
      (t[19] = F));
  } else ((A = t[14]), (j = t[15]), (M = t[16]), (N = t[17]), (P = t[18]), (F = t[19]));
  let he = P,
    L = r && A != null,
    R;
  t[24] === L ? (R = t[25]) : ((R = { enabled: L }), (t[24] = L), (t[25] = R));
  let { data: ge, isLoading: z, isFetching: _e } = tt(A, y, `move_to_local_dialog`, R),
    B = r && A != null,
    ye;
  t[26] === B ? (ye = t[27]) : ((ye = { enabled: B }), (t[26] = B), (t[27] = ye));
  let { data: V, isLoading: H, isFetching: xe } = dt(A, y, `move_to_local_dialog`, ye),
    Se = (ue ?? []).some((e) => {
      let t = I(e.root);
      return !(
        k(e.root) ||
        e.headRef.type !== `branch` ||
        e.headRef.string !== _ ||
        (he && t === he) ||
        t === ae
      );
    }),
    U = V?.type === `success` && V.stagedCount + V.unstagedCount + (V.untrackedCount ?? 0) > 0,
    W =
      T ||
      se ||
      (A != null && (z || _e || H || xe || (!U && V?.type === `success` && V.untrackedCount == null))),
    G = null;
  if (u != null) G = u;
  else if (T || se) {
    let e;
    (t[28] === l
      ? (e = t[29])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.disabled.loading`,
          defaultMessage: `Checking available local workspaces…`,
          description: `Tooltip shown when the move to local button is disabled while local worktrees are loading`,
        })),
        (t[28] = l),
        (t[29] = e)),
      (G = e));
  } else if (N == null || M == null) {
    let e;
    (t[30] === l
      ? (e = t[31])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.disabled.noWorkspace`,
          defaultMessage: `No local workspace found for this worktree`,
          description: `Tooltip shown when the move to local button is disabled because no local workspace is available`,
        })),
        (t[30] = l),
        (t[31] = e)),
      (G = e));
  } else if (_.length === 0) {
    let e;
    (t[32] === l
      ? (e = t[33])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.branchRequired`,
          defaultMessage: `Enter a branch name`,
          description: `Tooltip shown when the move to local button is disabled because no local branch name was entered`,
        })),
        (t[32] = l),
        (t[33] = e)),
      (G = e));
  } else if (_.endsWith(`/`)) {
    let e;
    (t[34] === l
      ? (e = t[35])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”`,
          description: `Tooltip shown when the move to local button is disabled because the local branch name ends with a slash`,
        })),
        (t[34] = l),
        (t[35] = e)),
      (G = e));
  } else if (Se) {
    let e;
    (t[36] === l
      ? (e = t[37])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.disabled.branchCheckedOut`,
          defaultMessage: `Branch is already checked out in another worktree`,
          description: `Tooltip shown when the move to local button is disabled because the branch is checked out elsewhere`,
        })),
        (t[36] = l),
        (t[37] = e)),
      (G = e));
  } else if (S == null) {
    let e;
    (t[38] === l
      ? (e = t[39])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingWorktreeRoot`,
          defaultMessage: `Unable to resolve the current worktree`,
          description: `Tooltip shown when the move to local button is disabled because the source worktree root is unavailable`,
        })),
        (t[38] = l),
        (t[39] = e)),
      (G = e));
  } else if (A != null && (z || _e || H || xe)) {
    let e;
    (t[40] === l
      ? (e = t[41])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.loadingStatus`,
          defaultMessage: `Checking local workspace status…`,
          description: `Tooltip shown when the move to local button is disabled while git status is loading`,
        })),
        (t[40] = l),
        (t[41] = e)),
      (G = e));
  } else if (ge == null) {
    let e;
    (t[42] === l
      ? (e = t[43])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingLocalBranch`,
          defaultMessage: `Unable to determine the current local branch`,
          description: `Tooltip shown when the move to local button is disabled because the current local branch is unavailable`,
        })),
        (t[42] = l),
        (t[43] = e)),
      (G = e));
  } else if (V?.type !== `success`) {
    let e;
    (t[44] === l
      ? (e = t[45])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.localStatusError`,
          defaultMessage: `Unable to determine whether the local workspace is clean`,
          description: `Tooltip shown when the move to local button is disabled because the local git status check failed`,
        })),
        (t[44] = l),
        (t[45] = e)),
      (G = e));
  } else if (U) {
    let e;
    (t[46] === l
      ? (e = t[47])
      : ((e = l.formatMessage({
          id: `localConversation.moveToLocal.confirm.localChangesBlocked`,
          defaultMessage: `Stash or commit your local changes to hand off`,
          description: `Tooltip shown when the move-to-local button is disabled because the destination workspace has local changes; Stash means the Git stash operation, as distinct from staging files`,
        })),
        (t[46] = l),
        (t[47] = e)),
      (G = e));
  }
  let K = y.kind === `local` ? `local` : `remote`,
    we;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = () => {
        p(null);
      }),
      (t[48] = we))
    : (we = t[48]);
  let Te;
  return (
    t[49] !== o ||
    t[50] !== G ||
    t[51] !== a ||
    t[52] !== c ||
    t[53] !== W ||
    t[54] !== g ||
    t[55] !== A ||
    t[56] !== j ||
    t[57] !== M ||
    t[58] !== i ||
    t[59] !== r ||
    t[60] !== N ||
    t[61] !== K ||
    t[62] !== _ ||
    t[63] !== F ||
    t[64] !== S
      ? ((Te = (0, Z.jsx)(yt, {
          open: r,
          onOpenChange: i,
          conversationId: a,
          composerViewState: o,
          localBranch: g,
          trimmedLocalBranch: _,
          onChangeLocalBranch: p,
          cwd: c,
          localTargets: j,
          selectedLocalTarget: N,
          onChangeLocalTarget: te,
          workspaceRootLabels: F,
          isLoadingBlocked: W,
          confirmDisabledReason: G,
          localGitRoot: A,
          localWorkspaceCwd: M,
          worktreeRoot: S,
          destinationLabel: K,
          onResetLocalBranch: we,
        })),
        (t[49] = o),
        (t[50] = G),
        (t[51] = a),
        (t[52] = c),
        (t[53] = W),
        (t[54] = g),
        (t[55] = A),
        (t[56] = j),
        (t[57] = M),
        (t[58] = i),
        (t[59] = r),
        (t[60] = N),
        (t[61] = K),
        (t[62] = _),
        (t[63] = F),
        (t[64] = S),
        (t[65] = Te))
      : (Te = t[65]),
    Te
  );
}
function vt(e) {
  return I(e.dir);
}
function yt(e) {
  let n = (0, wt.c)(197),
    {
      open: r,
      onOpenChange: a,
      conversationId: o,
      composerViewState: s,
      localBranch: l,
      trimmedLocalBranch: u,
      onChangeLocalBranch: d,
      cwd: f,
      localTargets: ne,
      selectedLocalTarget: p,
      onChangeLocalTarget: m,
      workspaceRootLabels: g,
      isLoadingBlocked: _,
      confirmDisabledReason: v,
      localGitRoot: ie,
      localWorkspaceCwd: y,
      worktreeRoot: b,
      destinationLabel: x,
      onResetLocalBranch: S,
    } = e,
    C = re(),
    [w, ae] = (0, Tt.useState)(``),
    [oe, T] = (0, Tt.useState)(null),
    se;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (e) => {
        T(e?.closest(`.codex-dialog`) ?? null);
      }),
      (n[0] = se))
    : (se = n[0]);
  let ce = se,
    E = pe(ye, o) ?? !1,
    { activeOperationId: de } = Ue(),
    D = we(o),
    {
      addToLocalOperation: fe,
      closeActiveOperation: O,
      removeOperation: k,
      openOperation: A,
      updateOperation: j,
    } = We(),
    M = de === D?.id,
    N = r || M,
    F = v != null || ie == null || y == null || b == null,
    I;
  n[1] === x
    ? (I = n[2])
    : ((I =
        x === `local`
          ? (0, Z.jsx)(c, {
              id: `localConversation.moveToLocal.modal.bringChangesBack`,
              defaultMessage: `Bring changes back`,
              description: `Primary action that brings worktree changes back to a local checkout`,
            })
          : (0, Z.jsx)(c, {
              id: `localConversation.moveToLocal.modal.continue`,
              defaultMessage: `Hand off`,
              description: `Primary action in the move-to-local modal`,
            })),
      (n[1] = x),
      (n[2] = I));
  let me = I,
    he,
    L,
    R,
    ge,
    z,
    _e,
    B,
    ve,
    be,
    V,
    H,
    xe,
    Se,
    U,
    Ce,
    W,
    G,
    K,
    Te,
    Ee,
    De,
    Oe,
    q,
    ke,
    Ae,
    Me,
    Ne,
    Pe,
    Fe,
    Ie;
  if (
    n[3] !== fe ||
    n[4] !== O ||
    n[5] !== s ||
    n[6] !== o ||
    n[7] !== f ||
    n[8] !== x ||
    n[9] !== N ||
    n[10] !== C ||
    n[11] !== M ||
    n[12] !== F ||
    n[13] !== l ||
    n[14] !== ie ||
    n[15] !== w ||
    n[16] !== ne ||
    n[17] !== y ||
    n[18] !== d ||
    n[19] !== m ||
    n[20] !== a ||
    n[21] !== S ||
    n[22] !== r ||
    n[23] !== A ||
    n[24] !== D ||
    n[25] !== oe ||
    n[26] !== k ||
    n[27] !== p ||
    n[28] !== u ||
    n[29] !== j ||
    n[30] !== g ||
    n[31] !== b
  ) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = p == null ? null : Ct({ workspaceRoot: p.workspaceRoot, workspaceRootLabels: g }),
        t = p == null || ne.length <= 1,
        _;
      (n[62] === g
        ? (_ = n[63])
        : ((_ = (e) => ({
            target: e,
            label: Ct({ workspaceRoot: e.workspaceRoot, workspaceRootLabels: g }),
          })),
          (n[62] = g),
          (n[63] = _)),
        (z = qe(ne.map(_), w, St)));
      let re;
      n[64] === C
        ? (re = n[65])
        : ((re = C.formatMessage({
            id: `localConversation.moveToLocal.modal.projectSearch`,
            defaultMessage: `Search workspaces`,
            description: `Accessible label and placeholder for searching handoff workspace targets`,
          })),
          (n[64] = C),
          (n[65] = re));
      let v = re,
        T;
      n[66] !== fe ||
      n[67] !== s ||
      n[68] !== o ||
      n[69] !== f ||
      n[70] !== F ||
      n[71] !== ie ||
      n[72] !== y ||
      n[73] !== a ||
      n[74] !== S ||
      n[75] !== u ||
      n[76] !== b
        ? ((T = () => {
            F ||
              (fe({
                sourceConversationId: o,
                sourceBranch: u,
                localBranch: u,
                request: { cwd: f, localGitRoot: ie, localWorkspaceRoot: y, worktreeRoot: b },
                stepIds: [
                  `stash-source-changes`,
                  `detach-worktree-branch`,
                  `checkout-local-branch`,
                  `apply-changes-to-local`,
                  `switching-thread`,
                ],
                composerViewState: s,
              }),
              ae(``),
              a(!1),
              S());
          }),
          (n[66] = fe),
          (n[67] = s),
          (n[68] = o),
          (n[69] = f),
          (n[70] = F),
          (n[71] = ie),
          (n[72] = y),
          (n[73] = a),
          (n[74] = S),
          (n[75] = u),
          (n[76] = b),
          (n[77] = T))
        : (T = n[77]);
      let se = T,
        E;
      n[78] !== O || n[79] !== M || n[80] !== a || n[81] !== S || n[82] !== D || n[83] !== k
        ? ((E = (e) => {
            if ((e || ae(``), !e && M)) {
              if (D?.status === `success` || D?.status === `error`) {
                (k(D.id), a(!1));
                return;
              }
              if (D?.status === `warning`) {
                (k(D.id), a(!1));
                return;
              }
              (O(), a(!1));
              return;
            }
            (e || S(), a(e));
          }),
          (n[78] = O),
          (n[79] = M),
          (n[80] = a),
          (n[81] = S),
          (n[82] = D),
          (n[83] = k),
          (n[84] = E))
        : (E = n[84]);
      let de = E;
      if (M && D != null) {
        let e;
        n[85] !== O || n[86] !== D.id || n[87] !== D.status || n[88] !== k
          ? ((e = () => {
              if (D.status === `success` || D.status === `error`) {
                k(D.id);
                return;
              }
              if (D.status === `warning`) {
                k(D.id);
                return;
              }
              O();
            }),
            (n[85] = O),
            (n[86] = D.id),
            (n[87] = D.status),
            (n[88] = k),
            (n[89] = e))
          : (e = n[89]);
        let t;
        n[90] !== A || n[91] !== D.id || n[92] !== j
          ? ((t = () => {
              (j(D.id, xt), A(D.id));
            }),
            (n[90] = A),
            (n[91] = D.id),
            (n[92] = j),
            (n[93] = t))
          : (t = n[93]);
        let r;
        n[94] !== D || n[95] !== e || n[96] !== t
          ? ((r = (0, Z.jsx)(Ze, { operation: D, onClose: e, onRetry: t })),
            (n[94] = D),
            (n[95] = e),
            (n[96] = t),
            (n[97] = r))
          : (r = n[97]);
        let i;
        (n[98] !== N || n[99] !== de || n[100] !== r
          ? ((i = (0, Z.jsx)(ue, { size: `compact`, open: N, onOpenChange: de, children: r })),
            (n[98] = N),
            (n[99] = de),
            (n[100] = r),
            (n[101] = i))
          : (i = n[101]),
          (q = i));
        break bb0;
      }
      ((ge = ue),
        (Te = `compact`),
        (Ee = `visible`),
        (De = r),
        (Oe = de),
        (R = et.Root),
        (Ce = `form`),
        (W = `gap-5`),
        n[102] === se
          ? (G = n[103])
          : ((G = (e) => {
              (e.preventDefault(), se());
            }),
            (n[102] = se),
            (n[103] = G)),
        n[104] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((K = (0, Z.jsx)(et.Header, {
              icon: (0, Z.jsx)(te, { className: `rotate-90 text-default`, "aria-hidden": !1, asset: ee }),
            })),
            (n[104] = K))
          : (K = n[104]),
        (Se = `flex flex-col gap-5`));
      let I;
      n[105] === x
        ? (I = n[106])
        : ((I = (0, Z.jsx)(et.Title, {
            children: (0, Z.jsx)(c, {
              id: `localConversation.moveToLocal.modal.titleByDestination`,
              defaultMessage: `{destinationLabel, select, local {Bring changes back to local checkout} remote {Hand off chat to remote} other {Hand off chat to remote}}`,
              description: `Title for the move-to-local confirmation modal`,
              values: { destinationLabel: x },
            }),
          })),
          (n[105] = x),
          (n[106] = I));
      let pe;
      n[107] !== C || n[108] !== l || n[109] !== d
        ? ((pe = () =>
            (0, Z.jsx)(`input`, {
              className: `mx-1 inline-flex h-8 w-48 rounded-lg bg-text/5 px-2 py-0.5 align-middle text-base leading-6 text-default outline-none`,
              autoFocus: !0,
              value: l,
              onChange: (e) => {
                d(Ge(e.target.value));
              },
              "aria-label": C.formatMessage({
                id: `localConversation.moveToLocal.modal.branchAriaLabel`,
                defaultMessage: `Local branch name`,
                description: `Aria label for the branch name input in the move-to-local modal`,
              }),
            })),
          (n[107] = C),
          (n[108] = l),
          (n[109] = d),
          (n[110] = pe))
        : (pe = n[110]);
      let me;
      (n[111] !== x || n[112] !== pe
        ? ((me = (0, Z.jsx)(`p`, {
            className: `text-base leading-6 tracking-[-0.13px] text-codex-description`,
            children: (0, Z.jsx)(c, {
              id: `localConversation.moveToLocal.modal.subtitleWithBranchControl`,
              defaultMessage: `{destinationLabel, select, local {Check out branch <branchControl></branchControl> in a local workspace and detach it from worktree.} remote {Check out branch <branchControl></branchControl> in a remote workspace and detach it from worktree.} other {Check out branch <branchControl></branchControl> in a remote workspace and detach it from worktree.}}`,
              description: `Subtitle containing the editable branch name control in the move-to-local confirmation modal`,
              values: { destinationLabel: x, branchControl: pe },
            }),
          })),
          (n[111] = x),
          (n[112] = pe),
          (n[113] = me))
        : (me = n[113]),
        n[114] !== I || n[115] !== me
          ? ((U = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [I, me] })),
            (n[114] = I),
            (n[115] = me),
            (n[116] = U))
          : (U = n[116]),
        (H = `flex flex-col items-start gap-2 text-base leading-6 tracking-[-0.13px]`),
        n[117] === x
          ? (xe = n[118])
          : ((xe = (0, Z.jsx)(`span`, {
              className: `text-codex-description`,
              children: (0, Z.jsx)(c, {
                id: `localConversation.moveToLocal.modal.projectPrefixByDestination`,
                defaultMessage: `{destinationLabel, select, local {Bringing changes back to local checkout} remote {Handing off to remote workspace} other {Handing off to remote workspace}}`,
                description: `Text shown before the project selector in the move-to-local modal`,
                values: { destinationLabel: x },
              }),
            })),
            (n[117] = x),
            (n[118] = xe)),
        (be = ce),
        (V = `w-full`),
        (L = i),
        (Me = `center`),
        (Ne = `list`),
        (Pe = `w-[var(--radix-dropdown-menu-trigger-width)] overflow-hidden`),
        (Fe = `opaque`),
        n[119] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((Ie = (e) => {
              e || ae(``);
            }),
            (n[119] = Ie))
          : (Ie = n[119]),
        (_e = oe));
      let ye =
          p == null
            ? void 0
            : C.formatMessage(
                {
                  id: `localConversation.moveToLocal.modal.projectSelectorAriaLabelWithPath`,
                  defaultMessage: `{destinationLabel, select, local {Local workspace: {workspaceLabel}, {workspacePath}} remote {Remote workspace: {workspaceLabel}, {workspacePath}} other {Remote workspace: {workspaceLabel}, {workspacePath}}}`,
                  description: `Accessible label for the workspace selector in the move-to-local modal`,
                },
                { destinationLabel: x, workspaceLabel: e, workspacePath: p.workspaceRoot },
              ),
        we;
      (n[120] === e
        ? (we = n[121])
        : ((we =
            e == null
              ? (0, Z.jsx)(`span`, {
                  className: `min-w-0 flex-1 truncate text-start text-codex-description`,
                  children: (0, Z.jsx)(c, {
                    id: `localConversation.moveToLocal.modal.projectPlaceholder`,
                    defaultMessage: `No local workspace found`,
                    description: `Placeholder shown when the move-to-local modal cannot find a local workspace target`,
                  }),
                })
              : (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `w-full min-w-0 truncate text-end text-default [direction:rtl]`,
                      children: (0, Z.jsx)(`span`, {
                        className: `block w-full text-start [direction:ltr] [unicode-bidi:plaintext]`,
                        children: e,
                      }),
                    }),
                    (0, Z.jsx)(te, {
                      className: `shrink-0 text-codex-description`,
                      "aria-hidden": !1,
                      asset: le,
                    }),
                  ],
                })),
          (n[120] = e),
          (n[121] = we)),
        n[122] !== t || n[123] !== ye || n[124] !== we
          ? ((B = (0, Z.jsx)(`button`, {
              type: `button`,
              className: `flex w-full min-w-0 items-center gap-1.5 rounded-lg bg-text/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-default`,
              "aria-label": ye,
              disabled: t,
              children: we,
            })),
            (n[122] = t),
            (n[123] = ye),
            (n[124] = we),
            (n[125] = B))
          : (B = n[125]));
      let je;
      (n[126] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((je = (e) => {
            ae(e.target.value);
          }),
          (n[126] = je))
        : (je = n[126]),
        n[127] !== w || n[128] !== v
          ? ((ve = (0, Z.jsx)(h.SearchInput, {
              "aria-label": v,
              className: `shrink-0`,
              inputClassName: `font-medium`,
              placeholder: v,
              variant: `inset`,
              value: w,
              onChange: je,
              onKeyDown: bt,
            })),
            (n[127] = w),
            (n[128] = v),
            (n[129] = ve))
          : (ve = n[129]),
        (he = h.Section),
        (ke = `min-h-0 flex-1 overflow-y-auto`));
      let Le;
      (n[130] !== m || n[131] !== p?.gitRoot
        ? ((Le = (e) => {
            let { target: t, label: n } = e,
              r = t.gitRoot === p?.gitRoot;
            return (0, Z.jsx)(
              h.Item,
              {
                "aria-current": r ? `true` : void 0,
                rightIconAsset: r ? P : void 0,
                tooltipText: t.workspaceRoot,
                tooltipAlign: `start`,
                SubText: (0, Z.jsx)(`span`, {
                  className: `text-xs text-codex-description`,
                  children: t.workspaceRoot,
                }),
                onSelect: () => {
                  m(t.gitRoot);
                },
                children: (0, Z.jsx)(`span`, { className: `block truncate font-medium`, children: n }),
              },
              t.gitRoot,
            );
          }),
          (n[130] = m),
          (n[131] = p?.gitRoot),
          (n[132] = Le))
        : (Le = n[132]),
        (Ae = z.map(Le)));
    }
    ((n[3] = fe),
      (n[4] = O),
      (n[5] = s),
      (n[6] = o),
      (n[7] = f),
      (n[8] = x),
      (n[9] = N),
      (n[10] = C),
      (n[11] = M),
      (n[12] = F),
      (n[13] = l),
      (n[14] = ie),
      (n[15] = w),
      (n[16] = ne),
      (n[17] = y),
      (n[18] = d),
      (n[19] = m),
      (n[20] = a),
      (n[21] = S),
      (n[22] = r),
      (n[23] = A),
      (n[24] = D),
      (n[25] = oe),
      (n[26] = k),
      (n[27] = p),
      (n[28] = u),
      (n[29] = j),
      (n[30] = g),
      (n[31] = b),
      (n[32] = he),
      (n[33] = L),
      (n[34] = R),
      (n[35] = ge),
      (n[36] = z),
      (n[37] = _e),
      (n[38] = B),
      (n[39] = ve),
      (n[40] = be),
      (n[41] = V),
      (n[42] = H),
      (n[43] = xe),
      (n[44] = Se),
      (n[45] = U),
      (n[46] = Ce),
      (n[47] = W),
      (n[48] = G),
      (n[49] = K),
      (n[50] = Te),
      (n[51] = Ee),
      (n[52] = De),
      (n[53] = Oe),
      (n[54] = q),
      (n[55] = ke),
      (n[56] = Ae),
      (n[57] = Me),
      (n[58] = Ne),
      (n[59] = Pe),
      (n[60] = Fe),
      (n[61] = Ie));
  } else
    ((he = n[32]),
      (L = n[33]),
      (R = n[34]),
      (ge = n[35]),
      (z = n[36]),
      (_e = n[37]),
      (B = n[38]),
      (ve = n[39]),
      (be = n[40]),
      (V = n[41]),
      (H = n[42]),
      (xe = n[43]),
      (Se = n[44]),
      (U = n[45]),
      (Ce = n[46]),
      (W = n[47]),
      (G = n[48]),
      (K = n[49]),
      (Te = n[50]),
      (Ee = n[51]),
      (De = n[52]),
      (Oe = n[53]),
      (q = n[54]),
      (ke = n[55]),
      (Ae = n[56]),
      (Me = n[57]),
      (Ne = n[58]),
      (Pe = n[59]),
      (Fe = n[60]),
      (Ie = n[61]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let Le;
  n[133] === z.length
    ? (Le = n[134])
    : ((Le =
        z.length === 0
          ? (0, Z.jsx)(h.Message, {
              centered: !0,
              children: (0, Z.jsx)(c, {
                id: `localConversation.moveToLocal.modal.noProjectsFound`,
                defaultMessage: `No workspaces found`,
                description: `Shown when searching handoff workspace targets returns no results`,
              }),
            })
          : null),
      (n[133] = z.length),
      (n[134] = Le));
  let J;
  n[135] !== he || n[136] !== Le || n[137] !== ke || n[138] !== Ae
    ? ((J = (0, Z.jsxs)(he, { className: ke, children: [Ae, Le] })),
      (n[135] = he),
      (n[136] = Le),
      (n[137] = ke),
      (n[138] = Ae),
      (n[139] = J))
    : (J = n[139]);
  let Re;
  n[140] !== L ||
  n[141] !== _e ||
  n[142] !== B ||
  n[143] !== ve ||
  n[144] !== J ||
  n[145] !== Me ||
  n[146] !== Ne ||
  n[147] !== Pe ||
  n[148] !== Fe ||
  n[149] !== Ie
    ? ((Re = (0, Z.jsxs)(L, {
        align: Me,
        contentMaxHeight: Ne,
        contentClassName: Pe,
        surface: Fe,
        onOpenChange: Ie,
        portalContainer: _e,
        triggerButton: B,
        children: [ve, J],
      })),
      (n[140] = L),
      (n[141] = _e),
      (n[142] = B),
      (n[143] = ve),
      (n[144] = J),
      (n[145] = Me),
      (n[146] = Ne),
      (n[147] = Pe),
      (n[148] = Fe),
      (n[149] = Ie),
      (n[150] = Re))
    : (Re = n[150]);
  let ze;
  n[151] === p
    ? (ze = n[152])
    : ((ze =
        p == null
          ? null
          : (0, Z.jsx)(`p`, {
              className: `mt-2 max-h-20 overflow-y-auto text-xs leading-5 break-all text-codex-description select-text`,
              children: p.workspaceRoot,
            })),
      (n[151] = p),
      (n[152] = ze));
  let Y;
  n[153] !== be || n[154] !== V || n[155] !== Re || n[156] !== ze
    ? ((Y = (0, Z.jsxs)(`div`, { ref: be, className: V, children: [Re, ze] })),
      (n[153] = be),
      (n[154] = V),
      (n[155] = Re),
      (n[156] = ze),
      (n[157] = Y))
    : (Y = n[157]);
  let Be;
  n[158] !== H || n[159] !== xe || n[160] !== Y
    ? ((Be = (0, Z.jsxs)(`div`, { className: H, children: [xe, Y] })),
      (n[158] = H),
      (n[159] = xe),
      (n[160] = Y),
      (n[161] = Be))
    : (Be = n[161]);
  let Ve;
  n[162] !== Se || n[163] !== U || n[164] !== Be
    ? ((Ve = (0, Z.jsxs)(`div`, { className: Se, children: [U, Be] })),
      (n[162] = Se),
      (n[163] = U),
      (n[164] = Be),
      (n[165] = Ve))
    : (Ve = n[165]);
  let He;
  n[166] === E
    ? (He = n[167])
    : ((He = E
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-default`,
            children: [
              (0, Z.jsx)(je, { className: `icon-sm mt-1 shrink-0 text-warning` }),
              (0, Z.jsx)(c, {
                id: `localConversation.threadHandoff.runningWarning`,
                defaultMessage: `This chat is running, so handing it off will interrupt the current response`,
                description: `Warning shown in task handoff confirmation dialogs when the source task is still running`,
              }),
            ],
          })
        : null),
      (n[166] = E),
      (n[167] = He));
  let Ke;
  n[168] !== me || n[169] !== _
    ? ((Ke = _
        ? (0, Z.jsx)(c, {
            id: `localConversation.moveToLocal.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-local is waiting on required data before it can continue`,
          })
        : me),
      (n[168] = me),
      (n[169] = _),
      (n[170] = Ke))
    : (Ke = n[170]);
  let Je;
  n[171] !== F || n[172] !== _ || n[173] !== Ke
    ? ((Je = (0, Z.jsx)(t, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: F,
        loading: _,
        type: `submit`,
        children: Ke,
      })),
      (n[171] = F),
      (n[172] = _),
      (n[173] = Ke),
      (n[174] = Je))
    : (Je = n[174]);
  let Ye;
  n[175] !== v || n[176] !== _
    ? ((Ye =
        v != null && !_
          ? (0, Z.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-danger`,
              children: v,
            })
          : null),
      (n[175] = v),
      (n[176] = _),
      (n[177] = Ye))
    : (Ye = n[177]);
  let Xe;
  n[178] !== He || n[179] !== Je || n[180] !== Ye
    ? ((Xe = (0, Z.jsx)(et.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Z.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [He, Je, Ye] }),
      })),
      (n[178] = He),
      (n[179] = Je),
      (n[180] = Ye),
      (n[181] = Xe))
    : (Xe = n[181]);
  let Qe;
  n[182] !== R ||
  n[183] !== Ce ||
  n[184] !== W ||
  n[185] !== G ||
  n[186] !== K ||
  n[187] !== Ve ||
  n[188] !== Xe
    ? ((Qe = (0, Z.jsxs)(R, { as: Ce, className: W, onSubmit: G, children: [K, Ve, Xe] })),
      (n[182] = R),
      (n[183] = Ce),
      (n[184] = W),
      (n[185] = G),
      (n[186] = K),
      (n[187] = Ve),
      (n[188] = Xe),
      (n[189] = Qe))
    : (Qe = n[189]);
  let X;
  return (
    n[190] !== ge || n[191] !== Te || n[192] !== Ee || n[193] !== De || n[194] !== Oe || n[195] !== Qe
      ? ((X = (0, Z.jsx)(ge, { size: Te, contentOverflow: Ee, open: De, onOpenChange: Oe, children: Qe })),
        (n[190] = ge),
        (n[191] = Te),
        (n[192] = Ee),
        (n[193] = De),
        (n[194] = Oe),
        (n[195] = Qe),
        (n[196] = X))
      : (X = n[196]),
    X
  );
}
function bt(e) {
  e.key === `Enter` && !e.nativeEvent.isComposing && e.preventDefault();
}
function xt(e) {
  Object.assign(e, G(e));
}
function St(e) {
  let { target: t, label: n } = e;
  return [n, t.gitRoot, t.workspaceRoot];
}
function Ct({ workspaceRoot: e, workspaceRootLabels: t }) {
  let n = I(e);
  return (
    (t[e]?.trim() ?? t[n]?.trim() ?? ``) ||
    e
      .split(/[/\\]+/)
      .filter(Boolean)
      .at(-1) ||
    e
  );
}
var wt, Tt, Z;
function Et() {
  return (Et = e(() => {
    ((wt = A()),
      u(),
      S(),
      O(),
      p(),
      D(),
      (Tt = F()),
      T(),
      Y(),
      fe(),
      k(),
      r(),
      f(),
      ct(),
      $e(),
      W(),
      ft(),
      gt(),
      B(),
      J(),
      nt(),
      Je(),
      Ae(),
      y(),
      Ne(),
      d(),
      ot(),
      L(),
      H(),
      Qe(),
      Oe(),
      it(),
      (Z = N()));
  }))();
}
function Dt(e) {
  let r = (0, It.c)(117),
    {
      open: s,
      onOpenChange: u,
      conversationId: d,
      composerViewState: f,
      conversationTitle: p,
      currentBranch: m,
      cwd: v,
      localBranchDropdownOpen: ie,
      getActiveWorkspaceRoots: y,
    } = e,
    x = l(a),
    S = re(),
    C = Xe(d),
    w = pe(ye, d) ?? !1,
    ae = pe(me, d),
    T = Re(ae),
    [ce, E] = (0, Lt.useState)(null),
    [D, fe] = (0, Lt.useState)(null),
    [O, k] = (0, Lt.useState)(null),
    [A, j] = (0, Lt.useState)(null),
    { activeOperationId: N } = Ue(),
    P = we(d),
    {
      addToWorktreeOperation: F,
      closeActiveOperation: I,
      removeOperation: L,
      openOperation: R,
      updateOperation: ge,
    } = We(),
    z = N === P?.id,
    _e = s || z,
    { data: B } = Ke(v, T, `move_to_worktree_dialog`),
    H;
  r[0] !== v || r[1] !== T
    ? ((H = { cwd: v, hostConfig: T }), (r[0] = v), (r[1] = T), (r[2] = H))
    : (H = r[2]);
  let U = s && T.id === `local`,
    Ce;
  r[3] === U ? (Ce = r[4]) : ((Ce = { enabled: U }), (r[3] = U), (r[4] = Ce));
  let { data: W } = ve(H, `move_to_worktree_dialog`, Ce),
    G = s && T.id === `local`,
    K;
  r[5] === G ? (K = r[6]) : ((K = { enabled: G }), (r[5] = G), (r[6] = K));
  let { data: Te } = pt(v, T, `move_to_worktree_dialog`, K),
    Ee = s && T.id === `local`,
    De;
  r[7] === Ee ? (De = r[8]) : ((De = { enabled: Ee }), (r[7] = Ee), (r[8] = De));
  let { data: Oe } = xe(T.id, De),
    q = Oe?.worktreesSegment ?? null,
    Ae = n(ne.branchPrefix),
    Me;
  r[9] === s ? (Me = r[10]) : ((Me = { enabled: s }), (r[9] = s), (r[10] = Me));
  let { data: Ne, isLoading: Pe, isFetching: Le } = tt(v, T, `move_to_worktree_dialog`, Me),
    J;
  r[11] !== d || r[12] !== v || r[13] !== q
    ? ((J = [`move-thread`, `to-worktree`, `resolve-owned-worktree`, d, v, q]),
      (r[11] = d),
      (r[12] = v),
      (r[13] = q),
      (r[14] = J))
    : (J = r[14]);
  let Y;
  r[15] !== d || r[16] !== v || r[17] !== T || r[18] !== q
    ? ((Y = () =>
        Fe(`git`).request({
          method: `resolve-worktree-for-thread`,
          params: {
            cwd: v,
            conversationId: d,
            hostConfig: T,
            operationSource: `move_to_worktree_dialog`,
            worktreesRoot: q,
          },
        })),
      (r[15] = d),
      (r[16] = v),
      (r[17] = T),
      (r[18] = q),
      (r[19] = Y))
    : (Y = r[19]);
  let Be = s && q != null,
    Ge;
  r[20] !== Y || r[21] !== Be || r[22] !== J
    ? ((Ge = { queryKey: J, queryFn: Y, enabled: Be, staleTime: 0 }),
      (r[20] = Y),
      (r[21] = Be),
      (r[22] = J),
      (r[23] = Ge))
    : (Ge = r[23]);
  let { data: qe, isLoading: Je } = b(Ge),
    Ye =
      W?.root == null || q == null
        ? []
        : (Te?.worktrees.filter((e) =>
            Nt({
              managedWorktreesRoot: q,
              ownedWorktreeRoot: qe?.worktreeGitRoot,
              sourceRoot: W.root,
              worktree: e,
            }),
          ) ?? []),
    Qe;
  r[24] === A ? (Qe = r[25]) : ((Qe = (e) => e.root === A), (r[24] = A), (r[25] = Qe));
  let X = Ye.find(Qe),
    $e = Ne != null && Ne === m,
    nt = B != null && m === B,
    rt = $e && !nt,
    it = Pe || Le,
    at = s && rt,
    ot;
  r[26] === at ? (ot = r[27]) : ((ot = { enabled: at }), (r[26] = at), (r[27] = ot));
  let {
      data: st,
      isLoading: ct,
      isFetching: lt,
      isError: dt,
      refetch: ft,
    } = ut(v, T, `move_to_worktree_dialog`, ot),
    mt = st === void 0 ? [] : st,
    ht = s && nt,
    gt;
  r[28] === ht ? (gt = r[29]) : ((gt = { enabled: ht }), (r[28] = ht), (r[29] = gt));
  let { data: _t } = ut(v, T, `move_to_worktree_dialog`, gt),
    vt = _t === void 0 ? [] : _t,
    yt = qe?.worktreeGitRoot != null && qe?.worktreeWorkspaceRoot != null,
    bt;
  r[30] === m ? (bt = r[31]) : ((bt = (e) => !m || e !== m), (r[30] = m), (r[31] = bt));
  let xt = Ft({ branches: mt, defaultBranch: B ?? null }).filter(bt),
    St = ct || lt,
    Ct = be({ branchPrefix: Ae ?? void 0, conversationTitle: p }),
    wt = rt && ce && xt.includes(ce) ? ce : rt ? (xt[0] ?? null) : null,
    Tt = nt ? (O ?? Ct) : m,
    Z = Tt.trim(),
    Et = Z.length === 0,
    Dt = Z.endsWith(`/`),
    Pt = B != null && Z === B,
    Rt = nt && Z.length > 0 && vt.includes(Z),
    zt = X == null && (it || Je || (rt && St)),
    $ = null;
  if (C != null) $ = C;
  else if (X != null) {
    if (w) {
      let e;
      (r[32] === S
        ? (e = r[33])
        : ((e = S.formatMessage({
            id: `localConversation.moveToWorktree.modal.existingWorktreeRunning`,
            defaultMessage: `Wait for the current response to finish before moving this chat`,
            description: `Reason an existing-worktree handoff is disabled while the current chat is still running`,
          })),
          (r[32] = S),
          (r[33] = e)),
        ($ = e));
    }
  } else if (zt) {
    let e;
    (r[34] === S
      ? (e = r[35])
      : ((e = S.formatMessage({
          id: `localConversation.moveToWorktree.modal.loading`,
          defaultMessage: `Checking for ability to hand off…`,
          description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
        })),
        (r[34] = S),
        (r[35] = e)),
      ($ = e));
  } else if (nt && Et) {
    let e;
    (r[36] === S
      ? (e = r[37])
      : ((e = S.formatMessage({
          id: `localConversation.moveToWorktree.modal.worktreeBranchRequired`,
          defaultMessage: `Enter a worktree branch name.`,
          description: `Inline validation message shown above the move-to-worktree CTA when the worktree branch name is empty`,
        })),
        (r[36] = S),
        (r[37] = e)),
      ($ = e));
  } else if (Dt) {
    let e;
    (r[38] === S
      ? (e = r[39])
      : ((e = S.formatMessage({
          id: `localConversation.moveToWorktree.modal.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”.`,
          description: `Validation message shown when the worktree branch name ends with a slash`,
        })),
        (r[38] = S),
        (r[39] = e)),
      ($ = e));
  } else if (Pt) {
    let e;
    (r[40] === S
      ? (e = r[41])
      : ((e = S.formatMessage({
          id: `localConversation.moveToWorktree.modal.defaultBranchError`,
          defaultMessage: `Worktree branch must be different from the default branch.`,
          description: `Validation message shown when the entered worktree branch equals the default branch`,
        })),
        (r[40] = S),
        (r[41] = e)),
      ($ = e));
  } else if (Rt) {
    let e;
    (r[42] === S
      ? (e = r[43])
      : ((e = S.formatMessage({
          id: `localConversation.moveToWorktree.modal.branchAlreadyExistsError`,
          defaultMessage: `Branch already exists.`,
          description: `Validation message shown when the entered worktree branch already exists`,
        })),
        (r[42] = S),
        (r[43] = e)),
      ($ = e));
  } else if (rt && wt == null) {
    let e;
    (r[44] !== S || r[45] !== dt
      ? ((e = dt
          ? S.formatMessage({
              id: `localConversation.moveToWorktree.modal.branchesError`,
              defaultMessage: `Unable to load branches`,
              description: `Error shown in the move-to-worktree modal when branch list fails to load`,
            })
          : S.formatMessage({
              id: `localConversation.moveToWorktree.modal.noTargetBranch`,
              defaultMessage: `No other local branches are available`,
              description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
            })),
        (r[44] = S),
        (r[45] = dt),
        (r[46] = e))
      : (e = r[46]),
      ($ = e));
  }
  let Bt = $ != null,
    Vt;
  r[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = () => {
        (E(null), k(null), j(null));
      }),
      (r[47] = Vt))
    : (Vt = r[47]);
  let Ht = Vt,
    Ut;
  r[48] !== I || r[49] !== z || r[50] !== u || r[51] !== P || r[52] !== L
    ? ((Ut = (e) => {
        if (!e && z) {
          if (P?.status === `success` || P?.status === `error`) {
            (L(P.id), u(!1));
            return;
          }
          if (P?.status === `warning`) {
            (L(P.id), u(!1));
            return;
          }
          (I(), u(!1));
          return;
        }
        (e || Ht(), u(e));
      }),
      (r[48] = I),
      (r[49] = z),
      (r[50] = u),
      (r[51] = P),
      (r[52] = L),
      (r[53] = Ut))
    : (Ut = r[53]);
  let Wt = Ut,
    Gt = () => {
      if (X == null && Rt) {
        x.get(oe).warning(
          S.formatMessage({
            id: `localConversation.moveToWorktree.modal.branchAlreadyExists`,
            defaultMessage: `Branch already exists`,
            description: `Toast shown when moving to worktree with an existing branch name`,
          }),
        );
        return;
      }
      if (!Bt) {
        if (X != null && W?.root != null) {
          let {
              allProjectGroups: e,
              allSidebarItems: t,
              threadProjectAssignments: n,
            } = x.get(
              x.get(Ie, {
                canStartProjectlessChat: x.get(he),
                localProjectActionsEnabled: x.get(ze),
                sidebarMode: `codex`,
              }),
            ),
            r = n?.[d]?.projectId,
            i = Se(d),
            a = e.find((e) => (r == null ? e.threadKeys.includes(i) : e.projectId === r));
          if (a?.projectKind !== `local`) return;
          let [o] = He({ cwd: v, sourceWorktreeRoot: de(W.root), repoWorktreeEntries: [X] });
          if (o == null) return;
          let ee = y().filter(Mt),
            s = x.get(Ve, d),
            c = s?.pending ?? s?.applied,
            l = c == null ? null : se(c.runtimeWorkspaceRoots, v),
            te = l == null ? null : (c?.projectSources[l] ?? null),
            f = se(ee.map(jt), v),
            ne = te ?? (f == null ? void 0 : ee[f]?.sourcePath);
          if (ne == null && a.rootPaths != null && a.rootPaths.length > 1) return;
          (u(!1),
            Ht(),
            ke(
              x,
              {
                threadId: d,
                sourceContainerId: `project:${a.projectId}`,
                targetContainerId: `project:${a.projectId}`,
                beforeThreadId: null,
                useDefaultOrder: !0,
              },
              {
                allProjectGroups: e,
                allSidebarItems: t,
                sourceProjectWorkspaceRoot: ne,
                targetWorktreeWorkspaceRoot: o.workspaceRoot,
                worktreesSegment: Oe?.worktreesSegment,
              },
            ));
          return;
        }
        (F({
          sourceConversationId: d,
          sourceBranch: m,
          localBranch: wt,
          worktreeBranch: Z,
          request: {
            cwd: v,
            defaultBranch: B ?? null,
            existingWorktreeGitRoot: qe?.worktreeGitRoot ?? null,
            existingWorktreeWorkspaceRoot: qe?.worktreeWorkspaceRoot ?? null,
            targetHasUncommittedChanges: qe?.hasUncommittedChanges ?? !1,
          },
          stepIds: [
            yt ? `reuse-existing-worktree` : `create-new-worktree`,
            `stash-source-changes`,
            `checkout-local-branch`,
            `stash-target-worktree-changes`,
            `checkout-worktree-branch`,
            `apply-changes-to-worktree`,
            `switching-thread`,
          ],
          composerViewState: f,
        }),
          u(!1),
          Ht());
      }
    };
  if (z && P != null) {
    let e;
    r[54] !== I || r[55] !== P.id || r[56] !== P.status || r[57] !== L
      ? ((e = () => {
          if (P.status === `success` || P.status === `error`) {
            L(P.id);
            return;
          }
          if (P.status === `warning`) {
            L(P.id);
            return;
          }
          I();
        }),
        (r[54] = I),
        (r[55] = P.id),
        (r[56] = P.status),
        (r[57] = L),
        (r[58] = e))
      : (e = r[58]);
    let t;
    r[59] !== R || r[60] !== P.id || r[61] !== ge
      ? ((t = () => {
          (ge(P.id, At), R(P.id));
        }),
        (r[59] = R),
        (r[60] = P.id),
        (r[61] = ge),
        (r[62] = t))
      : (t = r[62]);
    let n;
    r[63] !== P || r[64] !== e || r[65] !== t
      ? ((n = (0, Q.jsx)(Ze, { operation: P, onClose: e, onRetry: t })),
        (r[63] = P),
        (r[64] = e),
        (r[65] = t),
        (r[66] = n))
      : (n = r[66]);
    let i;
    return (
      r[67] !== _e || r[68] !== Wt || r[69] !== n
        ? ((i = (0, Q.jsx)(ue, { size: `compact`, open: _e, onOpenChange: Wt, children: n })),
          (r[67] = _e),
          (r[68] = Wt),
          (r[69] = n),
          (r[70] = i))
        : (i = r[70]),
      i
    );
  }
  let Kt = ue,
    qt = et,
    Jt;
  r[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jt = (0, Q.jsx)(et.Header, {
        icon: (0, Q.jsx)(te, { className: `rotate-90 text-default`, "aria-hidden": !1, asset: ee }),
      })),
      (r[71] = Jt))
    : (Jt = r[71]);
  let Yt;
  r[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = (0, Q.jsx)(et.Title, {
        children: (0, Q.jsx)(c, {
          id: `localConversation.moveToWorktree.modal.title`,
          defaultMessage: `Hand off chat to worktree`,
          description: `Title for the move-to-worktree modal`,
        }),
      })),
      (r[72] = Yt))
    : (Yt = r[72]);
  let Xt = X == null ? `text-base leading-6 tracking-[-0.13px] text-codex-description` : `hidden`,
    Zt = nt
      ? yt
        ? (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.subtitle.defaultBranchExistingWorktree`,
            defaultMessage: `Create and check out a branch in an existing worktree to continue working in parallel.`,
            description: `Subtitle for the move-to-worktree modal when the source branch is the default branch and an existing worktree will be reused`,
          })
        : (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.subtitle.defaultBranchNewWorktree`,
            defaultMessage: `Create and check out a branch in a new worktree to continue working in parallel.`,
            description: `Subtitle for the move-to-worktree modal when the source branch is the default branch and a new worktree will be created`,
          })
      : yt
        ? (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.subtitle.namedBranchExistingWorktree`,
            defaultMessage: `Check out branch <branch>{branchName}</branch> in an existing worktree to continue working in parallel.`,
            description: `Subtitle for the move-to-worktree modal when a named branch will be checked out in an existing worktree`,
            values: { branchName: Z, branch: kt },
          })
        : (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.subtitle.namedBranchNewWorktree`,
            defaultMessage: `Check out branch <branch>{branchName}</branch> in a new worktree to continue working in parallel.`,
            description: `Subtitle for the move-to-worktree modal when a named branch will be checked out in a new worktree`,
            values: { branchName: Z, branch: Ot },
          }),
    Qt;
  r[73] !== Xt || r[74] !== Zt
    ? ((Qt = (0, Q.jsx)(`p`, { className: Xt, children: Zt })), (r[73] = Xt), (r[74] = Zt), (r[75] = Qt))
    : (Qt = r[75]);
  let $t =
      X == null
        ? null
        : (0, Q.jsx)(`p`, {
            className: `text-base leading-6 tracking-[-0.13px] text-codex-description`,
            children: (0, Q.jsx)(c, {
              id: `localConversation.moveToWorktree.modal.subtitle.selectedExistingWorktree`,
              defaultMessage: `Continue this chat in the selected worktree without changing its branch`,
              description: `Subtitle when the current chat will move to an existing worktree without changing Git branches`,
            }),
          }),
    en;
  r[76] !== Qt || r[77] !== $t
    ? ((en = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [Yt, Qt, $t] })),
      (r[76] = Qt),
      (r[77] = $t),
      (r[78] = en))
    : (en = r[78]);
  let tn =
      Ye.length > 0
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
            children: [
              (0, Q.jsx)(`span`, {
                className: `text-codex-description`,
                children: (0, Q.jsx)(c, {
                  id: `localConversation.moveToWorktree.modal.existingWorktreeLabel`,
                  defaultMessage: `Worktree`,
                  description: `Label for the selector that lets a chat move to an existing linked Git worktree`,
                }),
              }),
              (0, Q.jsxs)(i, {
                align: `end`,
                contentMaxHeight: `list`,
                contentWidth: `menuBounded`,
                triggerButton: (0, Q.jsxs)(`button`, {
                  type: `button`,
                  className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-text/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-default`,
                  children: [
                    X?.headRef.type === `branch`
                      ? X.headRef.string
                      : (0, Q.jsx)(c, {
                          id: `localConversation.moveToWorktree.modal.createWorktreeOption`,
                          defaultMessage: `Create a new worktree`,
                          description: `Worktree selector option that keeps the existing create-and-handoff behavior`,
                        }),
                    (0, Q.jsx)(te, {
                      className: `shrink-0 text-codex-description`,
                      "aria-hidden": !1,
                      asset: le,
                    }),
                  ],
                }),
                children: [
                  (0, Q.jsx)(h.Item, {
                    leftIconAsset: M,
                    onSelect: () => j(null),
                    children: (0, Q.jsx)(c, {
                      id: `localConversation.moveToWorktree.modal.createWorktreeOption`,
                      defaultMessage: `Create a new worktree`,
                      description: `Worktree selector option that keeps the existing create-and-handoff behavior`,
                    }),
                  }),
                  Ye.map((e) =>
                    (0, Q.jsx)(
                      h.Item,
                      {
                        leftIconAsset: M,
                        onSelect: () => j(e.root),
                        children: e.headRef.type === `branch` ? e.headRef.string : e.root,
                      },
                      e.root,
                    ),
                  ),
                ],
              }),
            ],
          })
        : null,
    nn =
      X == null && rt
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
            children: [
              (0, Q.jsx)(`span`, {
                className: `text-codex-description`,
                children: (0, Q.jsx)(c, {
                  id: `localConversation.moveToWorktree.modal.localCheckoutLabel`,
                  defaultMessage: `Local workspace will switch to`,
                  description: `Label for the local workspace branch switch; the branch selector is shown immediately after this text`,
                }),
              }),
              (0, Q.jsx)(`div`, {
                ref: (e) => {
                  if (typeof document > `u`) {
                    fe(null);
                    return;
                  }
                  let t = e?.closest(`.codex-dialog`) ?? document.body;
                  fe(t);
                },
                children: (0, Q.jsx)(i, {
                  align: `end`,
                  contentMaxHeight: `list`,
                  contentWidth: `menuBounded`,
                  portalContainer: D,
                  open: ie,
                  triggerButton: (0, Q.jsx)(`button`, {
                    type: `button`,
                    className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-text/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-default disabled:opacity-50`,
                    disabled: St || dt,
                    children: wt
                      ? (0, Q.jsxs)(`span`, {
                          className: `flex min-w-0 items-center gap-1.5`,
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `w-full min-w-0 truncate text-end text-default [direction:rtl]`,
                              children: (0, Q.jsx)(`span`, {
                                className: `block w-full text-start [direction:ltr] [unicode-bidi:plaintext]`,
                                children: wt,
                              }),
                            }),
                            (0, Q.jsx)(te, {
                              className: `shrink-0 text-codex-description`,
                              "aria-hidden": !1,
                              asset: le,
                            }),
                          ],
                        })
                      : (0, Q.jsx)(`span`, {
                          className: `min-w-0 flex-1 truncate text-start text-codex-description`,
                          children: (0, Q.jsx)(c, {
                            id: `localConversation.moveToWorktree.modal.localBranchPlaceholder`,
                            defaultMessage: `Select local checkout branch`,
                            description: `Placeholder shown in the move-to-worktree modal branch selector`,
                          }),
                        }),
                  }),
                  children: St
                    ? (0, Q.jsx)(h.Item, {
                        disabled: !0,
                        children: (0, Q.jsx)(c, {
                          id: `localConversation.moveToWorktree.modal.branchesLoading`,
                          defaultMessage: `Loading branches…`,
                          description: `Label shown while loading branches in the move-to-worktree modal`,
                        }),
                      })
                    : dt
                      ? (0, Q.jsxs)(h.Section, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, Q.jsx)(h.SectionLabel, {
                              children: (0, Q.jsx)(c, {
                                id: `localConversation.moveToWorktree.modal.branchesError`,
                                defaultMessage: `Unable to load branches`,
                                description: `Error shown in the move-to-worktree modal when branch list fails to load`,
                              }),
                            }),
                            (0, Q.jsx)(h.Item, {
                              onSelect: () => {
                                ft();
                              },
                              children: (0, Q.jsx)(c, {
                                id: `localConversation.moveToWorktree.modal.branchesRetry`,
                                defaultMessage: `Retry`,
                                description: `Retry button for branch loading errors in the move-to-worktree modal`,
                              }),
                            }),
                          ],
                        })
                      : xt.length === 0
                        ? (0, Q.jsx)(h.Item, {
                            disabled: !0,
                            children: (0, Q.jsx)(c, {
                              id: `localConversation.moveToWorktree.modal.noTargetBranch`,
                              defaultMessage: `No other local branches are available`,
                              description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
                            }),
                          })
                        : (0, Q.jsx)(h.Section, {
                            className: `flex max-h-40 flex-col overflow-y-auto`,
                            children: xt.map((e) =>
                              (0, Q.jsx)(
                                h.Item,
                                {
                                  className: `[direction:rtl] [&_.min-w-0]:text-end`,
                                  onSelect: () => {
                                    E(e);
                                  },
                                  children: (0, Q.jsxs)(`span`, {
                                    className: `flex min-w-0 items-center gap-1.5`,
                                    children: [
                                      (0, Q.jsx)(o, {
                                        className: `shrink-0 text-default`,
                                        "aria-hidden": !1,
                                        icon: { assets: { 16: g, 20: _ } },
                                      }),
                                      (0, Q.jsx)(`span`, {
                                        className: `[direction:ltr] [unicode-bidi:plaintext]`,
                                        children: e,
                                      }),
                                    ],
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                }),
              }),
            ],
          })
        : null,
    rn;
  r[79] !== Gt || r[80] !== S || r[81] !== nt || r[82] !== X || r[83] !== Tt
    ? ((rn =
        X == null && nt
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `text-base leading-6 font-medium tracking-[-0.13px] text-default`,
                  children: (0, Q.jsx)(c, {
                    id: `localConversation.moveToWorktree.modal.worktreeBranchLabel`,
                    defaultMessage: `Branch name`,
                    description: `Label for the target worktree branch when moving from the default branch`,
                  }),
                }),
                (0, Q.jsx)(V, {
                  autoFocus: !0,
                  value: Tt,
                  onChange: (e) => {
                    k(e.target.value);
                  },
                  onKeyDown: (e) => {
                    e.key === `Enter` && (e.preventDefault(), Gt());
                  },
                  placeholder: S.formatMessage({
                    id: `localConversation.moveToWorktree.modal.worktreeBranchPlaceholder`,
                    defaultMessage: `new-branch`,
                    description: `Placeholder for worktree branch name input when moving from the default branch`,
                  }),
                  "aria-label": S.formatMessage({
                    id: `localConversation.moveToWorktree.modal.worktreeBranchAriaLabel`,
                    defaultMessage: `Worktree branch name`,
                    description: `Aria label for worktree branch name input when moving from the default branch`,
                  }),
                }),
              ],
            })
          : null),
      (r[79] = Gt),
      (r[80] = S),
      (r[81] = nt),
      (r[82] = X),
      (r[83] = Tt),
      (r[84] = rn))
    : (rn = r[84]);
  let an;
  r[85] !== en || r[86] !== tn || r[87] !== nn || r[88] !== rn
    ? ((an = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-5`, children: [en, tn, nn, rn] })),
      (r[85] = en),
      (r[86] = tn),
      (r[87] = nn),
      (r[88] = rn),
      (r[89] = an))
    : (an = r[89]);
  let on;
  r[90] !== w || r[91] !== X
    ? ((on =
        w && X == null
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-start gap-2 text-base leading-6 tracking-[-0.13px] text-default`,
              children: [
                (0, Q.jsx)(je, { className: `icon-sm mt-1 shrink-0 text-warning` }),
                (0, Q.jsx)(c, {
                  id: `localConversation.threadHandoff.runningWarning`,
                  defaultMessage: `This chat is running, so handing it off will interrupt the current response`,
                  description: `Warning shown in task handoff confirmation dialogs when the source task is still running`,
                }),
              ],
            })
          : null),
      (r[90] = w),
      (r[91] = X),
      (r[92] = on))
    : (on = r[92]);
  let sn;
  r[93] === zt
    ? (sn = r[94])
    : ((sn = zt
        ? (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
          })
        : (0, Q.jsx)(c, {
            id: `localConversation.moveToWorktree.modal.continue`,
            defaultMessage: `Hand off`,
            description: `Primary action in the move-to-worktree modal`,
          })),
      (r[93] = zt),
      (r[94] = sn));
  let cn;
  r[95] !== Gt || r[96] !== Bt || r[97] !== zt || r[98] !== sn
    ? ((cn = (0, Q.jsx)(t, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: Bt,
        loading: zt,
        onClick: Gt,
        children: sn,
      })),
      (r[95] = Gt),
      (r[96] = Bt),
      (r[97] = zt),
      (r[98] = sn),
      (r[99] = cn))
    : (cn = r[99]);
  let ln;
  r[100] !== $ || r[101] !== zt
    ? ((ln =
        $ != null && !zt
          ? (0, Q.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-danger`,
              children: $,
            })
          : null),
      (r[100] = $),
      (r[101] = zt),
      (r[102] = ln))
    : (ln = r[102]);
  let un;
  r[103] !== on || r[104] !== cn || r[105] !== ln
    ? ((un = (0, Q.jsx)(et.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Q.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [on, cn, ln] }),
      })),
      (r[103] = on),
      (r[104] = cn),
      (r[105] = ln),
      (r[106] = un))
    : (un = r[106]);
  let dn;
  r[107] !== qt.Root || r[108] !== Jt || r[109] !== an || r[110] !== un
    ? ((dn = (0, Q.jsxs)(qt.Root, { className: `gap-5`, children: [Jt, an, un] })),
      (r[107] = qt.Root),
      (r[108] = Jt),
      (r[109] = an),
      (r[110] = un),
      (r[111] = dn))
    : (dn = r[111]);
  let fn;
  return (
    r[112] !== Kt || r[113] !== Wt || r[114] !== s || r[115] !== dn
      ? ((fn = (0, Q.jsx)(Kt, { size: `compact`, open: s, onOpenChange: Wt, children: dn })),
        (r[112] = Kt),
        (r[113] = Wt),
        (r[114] = s),
        (r[115] = dn),
        (r[116] = fn))
      : (fn = r[116]),
    fn
  );
}
function Ot(e) {
  return (0, Q.jsx)(Pt, { children: e });
}
function kt(e) {
  return (0, Q.jsx)(Pt, { children: e });
}
function At(e) {
  Object.assign(e, G(e));
}
function jt(e) {
  let { resolvedPath: t } = e;
  return t;
}
function Mt(e) {
  let { sourcePath: t } = e;
  return t != null;
}
function Nt({ managedWorktreesRoot: e, ownedWorktreeRoot: t, sourceRoot: n, worktree: r }) {
  if (r.headRef.type !== `branch` || r.locked || r.prunable) return !1;
  let i = ae(r.root);
  return i === ae(n) ? !1 : !w({ cwd: r.root, worktreesRoot: e }) || (t != null && i === ae(t));
}
function Pt(e) {
  let t = (0, It.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `mx-1 inline-flex max-w-full items-center rounded-lg bg-text/5 px-2 py-0.5 align-middle text-base leading-6 tracking-[-0.13px] text-default`,
          children: (0, Q.jsx)(`span`, { className: `truncate`, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ft({ branches: e, defaultBranch: t }) {
  return t == null || !e.includes(t) || e[0] === t ? e : [t, ...e.filter((e) => e !== t)];
}
var It, Lt, Q;
function Rt() {
  return (Rt = e(() => {
    ((It = A()),
      m(),
      u(),
      ie(),
      s(),
      O(),
      x(),
      p(),
      D(),
      (Lt = F()),
      T(),
      Y(),
      fe(),
      k(),
      r(),
      f(),
      ce(),
      R(),
      E(),
      lt(),
      $e(),
      X(),
      W(),
      gt(),
      B(),
      J(),
      Je(),
      j(),
      y(),
      Ne(),
      _e(),
      Te(),
      Le(),
      Ee(),
      q(),
      d(),
      De(),
      ge(),
      L(),
      H(),
      Qe(),
      Oe(),
      it(),
      (Q = N()));
  }))();
}
function zt(e) {
  let t = (0, $.c)(19),
    {
      onClose: n,
      conversationId: r,
      composerViewState: i,
      executionTarget: a,
      getActiveWorkspaceRoots: o,
      gitRoot: ee,
      threadHandoff: s,
      isLocalModeRemote: c,
      showCrossHostHandoff: l,
    } = e,
    { data: u } = xe(),
    d = v(Me),
    te;
  t[0] === d ? (te = t[1]) : ((te = { retainRepoWatch: d }), (t[0] = d), (t[1] = te));
  let { data: f } = tt(ee, a.hostConfig, `local_remote_dropdown`, te),
    ne = we(r),
    p = rt(ne),
    m = pe(Pe, r),
    h = C(c ? null : a.activeWorkspaceRoot, u?.codexHome),
    g = Ye({ codexWorktree: h, operation: p, threadHandoff: s }),
    _;
  t[2] !== r || t[3] !== f || t[4] !== ne || t[5] !== l || t[6] !== m
    ? ((_ = f ?? at(ne, r) ?? (l ? m : null)),
      (t[2] = r),
      (t[3] = f),
      (t[4] = ne),
      (t[5] = l),
      (t[6] = m),
      (t[7] = _))
    : (_ = t[7]);
  let re = _,
    ie;
  t[8] === n
    ? (ie = t[9])
    : ((ie = (e) => {
        e || n();
      }),
      (t[8] = n),
      (t[9] = ie));
  let y = ie,
    b;
  return (
    t[10] !== i ||
    t[11] !== r ||
    t[12] !== o ||
    t[13] !== y ||
    t[14] !== re ||
    t[15] !== g ||
    t[16] !== s.conversationTitle ||
    t[17] !== s.cwd
      ? ((b =
          g === `to-local`
            ? (0, Bt.jsx)(_t, {
                open: !0,
                onOpenChange: y,
                conversationId: r,
                composerViewState: i,
                conversationTitle: s.conversationTitle,
                currentBranch: re ?? ``,
                cwd: s.cwd,
              })
            : (0, Bt.jsx)(Dt, {
                open: !0,
                onOpenChange: y,
                conversationId: r,
                composerViewState: i,
                conversationTitle: s.conversationTitle,
                currentBranch: re ?? ``,
                cwd: s.cwd,
                getActiveWorkspaceRoots: o,
              })),
        (t[10] = i),
        (t[11] = r),
        (t[12] = o),
        (t[13] = y),
        (t[14] = re),
        (t[15] = g),
        (t[16] = s.conversationTitle),
        (t[17] = s.cwd),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
var $, Bt;
function Vt() {
  return (Vt = e(() => {
    (($ = A()), p(), D(), Y(), $e(), B(), K(), Et(), Rt(), Oe(), (Bt = N()));
  }))();
}
export { Vt as n, zt as t };
//# sourceMappingURL=thread-handoff-modal-60ab451a1655.js.map
