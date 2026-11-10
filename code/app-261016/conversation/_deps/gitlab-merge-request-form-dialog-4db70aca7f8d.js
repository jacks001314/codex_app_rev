import { n as ee } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as te,
  FBt as e,
  JO as t,
  LNt as n,
  PBt as r,
  WO as ne,
  XOt as i,
  Ypt as re,
  ZSt as a,
  hit as ie,
  nCt as o,
  oit as s,
  qO as ae,
  sct as c,
  tkt as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ein as l,
  Hcn as u,
  Jbr as d,
  MOr as se,
  Tin as ce,
  Ucn as le,
  Zbr as ue,
  _tr as de,
  dX as fe,
  eer as f,
  fX as p,
  lCt as pe,
  uCt as m,
  zOr as h,
} from "./app-initial-ad16eaadf81f.js";
import {
  B as me,
  F as he,
  H as ge,
  I as _e,
  K as g,
  L as ve,
  N as ye,
  R as be,
  V as xe,
  W as Se,
  X as Ce,
  i as we,
  nt as Te,
  r as Ee,
  rt as _,
} from "./git-action-new-branch-field-3a66b322d84c.js";
import { n as De, t as Oe } from "./create-pull-request-modal-content-ad4ae0cd6617.js";
import { n as v, t as ke } from "./creation-target-query-ca73db0543e5.js";
function Ae(ee) {
  let e = (0, je.c)(100),
    { form: t, target: n, onClose: r } = ee,
    i = te(se),
    { data: a, isPending: s } = o(ue, n.hostId),
    { data: c, isSuccess: l, isFetching: u } = o(ke, n),
    d;
  e[0] === a ? (d = e[1]) : ((d = a == null ? null : fe(a.data, `submit`)), (e[0] = a), (e[1] = d));
  let f = d,
    p;
  e[2] !== f || e[3] !== t.targetBranch || e[4] !== t.targetProjectPath || e[5] !== l || e[6] !== c
    ? ((p =
        f != null &&
        l &&
        c != null &&
        c.projectPath === t.targetProjectPath &&
        c.defaultBranch != null &&
        c.defaultBranch === t.targetBranch
          ? { connector: f, targetProjectId: c.id, targetBranch: c.defaultBranch }
          : void 0),
      (e[2] = f),
      (e[3] = t.targetBranch),
      (e[4] = t.targetProjectPath),
      (e[5] = l),
      (e[6] = c),
      (e[7] = p))
    : (p = e[7]);
  let m = p,
    [h, me] = (0, y.useState)(``),
    [g, Ee] = (0, y.useState)(``),
    [_, De] = (0, y.useState)(!0),
    [v, Ae] = (0, y.useState)(null),
    x = t.headBranch == null,
    S = ie(re.branchPrefix),
    C;
  e[8] !== n.conversationId || e[9] !== n.hostId
    ? ((C = n.conversationId == null ? null : { hostId: n.hostId, threadId: n.conversationId }),
      (e[8] = n.conversationId),
      (e[9] = n.hostId),
      (e[10] = C))
    : (C = e[10]);
  let Me = o(de, C),
    w;
  e[11] !== v || e[12] !== S || e[13] !== Me
    ? ((w = v ?? pe({ branchPrefix: S, conversationTitle: Me })),
      (e[11] = v),
      (e[12] = S),
      (e[13] = Me),
      (e[14] = w))
    : (w = e[14]);
  let T = w,
    E;
  e[15] === T ? (E = e[16]) : ((E = T.trim()), (e[15] = T), (e[16] = E));
  let D = E,
    O = le(D, 200),
    k;
  e[17] !== x || e[18] !== O
    ? ((k = x && O.length > 0 && !O.endsWith(`/`)), (e[17] = x), (e[18] = O), (e[19] = k))
    : (k = e[19]);
  let A;
  e[20] !== n.cwd || e[21] !== n.hostConfig
    ? ((A = { cwd: n.cwd, hostConfig: n.hostConfig }), (e[20] = n.cwd), (e[21] = n.hostConfig), (e[22] = A))
    : (A = e[22]);
  let j;
  e[23] !== O || e[24] !== k || e[25] !== A
    ? ((j = { branch: O, enabled: k, operationSource: `create_pull_request_modal`, lookup: A }),
      (e[23] = O),
      (e[24] = k),
      (e[25] = A),
      (e[26] = j))
    : (j = e[26]);
  let { data: Ne } = o(ce, j),
    M = O === D && Ne === !0,
    N;
  e[27] !== M || e[28] !== x || e[29] !== D
    ? ((N = x && (D.length === 0 || D.endsWith(`/`) || M)),
      (e[27] = M),
      (e[28] = x),
      (e[29] = D),
      (e[30] = N))
    : (N = e[30]);
  let P = N,
    F;
  e[31] === n ? (F = e[32]) : ((F = ye(n)), (e[31] = n), (e[32] = F));
  let I = F,
    Pe = o(ve, I),
    Fe;
  e[33] === n
    ? (Fe = e[34])
    : ((Fe = { ...n, operationSource: `local_conversation_git_actions` }), (e[33] = n), (e[34] = Fe));
  let L = o(we, Fe),
    R;
  e[35] === n ? (R = e[36]) : ((R = { ...n, includeUnstaged: !0 }), (e[35] = n), (e[36] = R));
  let z = o(xe, R),
    B = o(Se, n),
    V;
  e[37] === n
    ? (V = e[38])
    : ((V = { ...n, operationSource: `local_conversation_git_actions` }), (e[37] = n), (e[38] = V));
  let Ie = o(Te, V),
    H = Ie.type === `success` ? Ie.data : void 0,
    Le = z == null,
    Re = H != null && (H.commitsAhead > 0 || !H.upstreamRef),
    ze = H?.upstreamRef != null,
    U;
  e[39] !== x || e[40] !== _ || e[41] !== Le || e[42] !== Re || e[43] !== ze
    ? ((U = Ce({
        canCommitPushAndCreatePullRequest: Le,
        canPushAndCreatePullRequest: Re,
        canCreatePullRequest: ze,
        createsBranch: x,
        includeLocalChanges: _,
      })),
      (e[39] = x),
      (e[40] = _),
      (e[41] = Le),
      (e[42] = Re),
      (e[43] = ze),
      (e[44] = U))
    : (U = e[44]);
  let W = U,
    G;
  e[45] === n ? (G = e[46]) : ((G = { ...n, includeUnstaged: !0 }), (e[45] = n), (e[46] = G));
  let { selectionSummary: Be } = o(ge, G),
    K;
  e[47] !== z ||
  e[48] !== x ||
  e[49] !== s ||
  e[50] !== u ||
  e[51] !== W ||
  e[52] !== B ||
  e[53] !== H?.commitsAhead ||
  e[54] !== H?.upstreamRef ||
  e[55] !== m ||
  e[56] !== n.conversationId
    ? ((K = B == null || (x && B === `branch-missing`) ? null : { kind: `push`, reason: B }),
      x &&
        W === `push-and-create-pr` &&
        (H?.commitsAhead ?? 0) === 0 &&
        (K = { kind: `push`, reason: `nothing-to-push` }),
      W === `commit-push-and-create-pr` &&
        z != null &&
        z !== `no-changes` &&
        (K = { kind: `commit`, reason: z }),
      W === `create-pr` && !H?.upstreamRef && (K = { kind: `create-pr`, reason: `upstream-missing` }),
      (m == null || n.conversationId == null) &&
        (K = {
          kind: `create-pr`,
          reason: s || u ? `pull-request-source-loading` : `pull-request-source-unavailable`,
        }),
      (e[47] = z),
      (e[48] = x),
      (e[49] = s),
      (e[50] = u),
      (e[51] = W),
      (e[52] = B),
      (e[53] = H?.commitsAhead),
      (e[54] = H?.upstreamRef),
      (e[55] = m),
      (e[56] = n.conversationId),
      (e[57] = K))
    : (K = e[57]);
  let q = Pe != null || L.isPending,
    Ve;
  e[58] !== K ||
  e[59] !== g ||
  e[60] !== x ||
  e[61] !== t ||
  e[62] !== I ||
  e[63] !== _ ||
  e[64] !== P ||
  e[65] !== q ||
  e[66] !== W ||
  e[67] !== r ||
  e[68] !== i ||
  e[69] !== m ||
  e[70] !== n.conversationId ||
  e[71] !== h ||
  e[72] !== D ||
  e[73] !== L
    ? ((Ve = (ee, te) => {
        let e = te !== void 0 && te;
        q ||
          K != null ||
          P ||
          ((e || (m != null && n.conversationId != null)) &&
            (i.set(_e, I, h),
            i.set(he, I, g),
            i.set(be, I, _),
            r(),
            L.mutate({
              kind: `create-pr`,
              createPullRequestAsDraft: ee,
              gitLabForm: t,
              gitLabSubmission: e ? void 0 : m,
              newBranch: x ? D : void 0,
              nextStep: W,
              openInBrowser: e,
            })));
      }),
      (e[58] = K),
      (e[59] = g),
      (e[60] = x),
      (e[61] = t),
      (e[62] = I),
      (e[63] = _),
      (e[64] = P),
      (e[65] = q),
      (e[66] = W),
      (e[67] = r),
      (e[68] = i),
      (e[69] = m),
      (e[70] = n.conversationId),
      (e[71] = h),
      (e[72] = D),
      (e[73] = L),
      (e[74] = Ve))
    : (Ve = e[74]);
  let J = Ve,
    Y;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, b.jsx)(ae, {
        className: `sr-only`,
        children: (0, b.jsx)(oe, {
          id: `localConversationPage.createPrModal.gitLabTitle`,
          defaultMessage: `Create merge request`,
          description: `Title for the GitLab merge request creation dialog`,
        }),
      })),
      (e[75] = Y))
    : (Y = e[75]);
  let He = t.targetProjectPath ?? null,
    Ue = t.targetBranch ?? null,
    We = x ? D : t.headBranch,
    Ge = _ ? Be : null,
    X;
  e[76] !== M || e[77] !== T || e[78] !== S || e[79] !== x || e[80] !== P
    ? ((X = x
        ? { branchAlreadyExists: M, isSelectionBlocked: P, placeholder: S?.trim(), value: T, onChange: Ae }
        : void 0),
      (e[76] = M),
      (e[77] = T),
      (e[78] = S),
      (e[79] = x),
      (e[80] = P),
      (e[81] = X))
    : (X = e[81]);
  let Z;
  e[82] === J ? (Z = e[83]) : ((Z = () => J(!1, !0)), (e[82] = J), (e[83] = Z));
  let Q;
  e[84] !== K ||
  e[85] !== g ||
  e[86] !== J ||
  e[87] !== _ ||
  e[88] !== q ||
  e[89] !== He ||
  e[90] !== Ue ||
  e[91] !== We ||
  e[92] !== Ge ||
  e[93] !== X ||
  e[94] !== Z ||
  e[95] !== h
    ? ((Q = (0, b.jsx)(Oe, {
        isGitLab: !0,
        repositoryName: He,
        baseBranch: Ue,
        headBranch: We,
        branchSummary: Ge,
        title: h,
        description: g,
        existingPullRequestUrl: null,
        hasOpenPr: !1,
        includeLocalChanges: _,
        blockedStep: K,
        newBranch: X,
        isWorkflowPending: q,
        onTitleChange: me,
        onDescriptionChange: Ee,
        onIncludeLocalChangesChange: De,
        onCreate: J,
        onOpenPullRequest: Z,
      })),
      (e[84] = K),
      (e[85] = g),
      (e[86] = J),
      (e[87] = _),
      (e[88] = q),
      (e[89] = He),
      (e[90] = Ue),
      (e[91] = We),
      (e[92] = Ge),
      (e[93] = X),
      (e[94] = Z),
      (e[95] = h),
      (e[96] = Q))
    : (Q = e[96]);
  let $;
  return (
    e[97] !== r || e[98] !== Q
      ? (($ = (0, b.jsxs)(ne, {
          open: !0,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: r,
          children: [Y, Q],
        })),
        (e[97] = r),
        (e[98] = Q),
        (e[99] = $))
      : ($ = e[99]),
    $
  );
}
var je, y, b;
function x() {
  return (x = ee(() => {
    ((je = r()),
      a(),
      c(),
      (y = e()),
      i(),
      f(),
      t(),
      l(),
      _(),
      p(),
      v(),
      d(),
      h(),
      s(),
      u(),
      g(),
      me(),
      Ee(),
      m(),
      De(),
      (b = n()));
  }))();
}
x();
export { Ae as GitLabMergeRequestFormDialog };
//# sourceMappingURL=gitlab-merge-request-form-dialog-4db70aca7f8d.js.map
