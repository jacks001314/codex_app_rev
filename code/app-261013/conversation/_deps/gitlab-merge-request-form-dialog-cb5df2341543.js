import { n as ee } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as te,
  IDt as e,
  Ixt as ne,
  Pft as re,
  Pxt as t,
  Wnt as n,
  _O as ie,
  jDt as r,
  mO as ae,
  rst as i,
  vO as a,
  vzt as o,
  xMt as s,
  yzt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  CEt as u,
  Cwr as d,
  F5n as oe,
  Ggr as f,
  HJ as p,
  Jgr as se,
  SEt as ce,
  VJ as le,
  atn as m,
  ean as h,
  gwr as ue,
  itn as de,
  tan as fe,
  v8n as g,
} from "./app-initial-5851df3f6cb1.js";
import {
  B as pe,
  F as me,
  H as he,
  I as ge,
  K as _,
  L as _e,
  N as ve,
  R as ye,
  V as be,
  W as xe,
  X as Se,
  i as Ce,
  nt as we,
  r as Te,
  rt as v,
} from "./git-action-new-branch-field-2b4ee066ae8f.js";
import { n as Ee, t as De } from "./create-pull-request-modal-content-2456152c0339.js";
import { n as y, t as Oe } from "./creation-target-query-33f9cd60ceb5.js";
function ke(ee) {
  let t = (0, Ae.c)(100),
    { form: n, target: r, onClose: i } = ee,
    a = ne(ue),
    { data: o, isPending: s } = l(se, r.hostId),
    { data: c, isSuccess: u, isFetching: d } = l(Oe, r),
    f;
  t[0] === o ? (f = t[1]) : ((f = o == null ? null : le(o.data, `submit`)), (t[0] = o), (t[1] = f));
  let p = f,
    m;
  t[2] !== p || t[3] !== n.targetBranch || t[4] !== n.targetProjectPath || t[5] !== u || t[6] !== c
    ? ((m =
        p != null &&
        u &&
        c != null &&
        c.projectPath === n.targetProjectPath &&
        c.defaultBranch != null &&
        c.defaultBranch === n.targetBranch
          ? { connector: p, targetProjectId: c.id, targetBranch: c.defaultBranch }
          : void 0),
      (t[2] = p),
      (t[3] = n.targetBranch),
      (t[4] = n.targetProjectPath),
      (t[5] = u),
      (t[6] = c),
      (t[7] = m))
    : (m = t[7]);
  let h = m,
    [g, pe] = (0, b.useState)(``),
    [_, Te] = (0, b.useState)(``),
    [v, Ee] = (0, b.useState)(!0),
    [y, ke] = (0, b.useState)(null),
    S = n.headBranch == null,
    C = te(re.branchPrefix),
    w;
  t[8] !== r.conversationId || t[9] !== r.hostId
    ? ((w = r.conversationId == null ? null : { hostId: r.hostId, threadId: r.conversationId }),
      (t[8] = r.conversationId),
      (t[9] = r.hostId),
      (t[10] = w))
    : (w = t[10]);
  let je = l(oe, w),
    T;
  t[11] !== y || t[12] !== C || t[13] !== je
    ? ((T = y ?? ce({ branchPrefix: C, conversationTitle: je })),
      (t[11] = y),
      (t[12] = C),
      (t[13] = je),
      (t[14] = T))
    : (T = t[14]);
  let E = T,
    D;
  t[15] === E ? (D = t[16]) : ((D = E.trim()), (t[15] = E), (t[16] = D));
  let O = D,
    k = fe(O, 200),
    A;
  t[17] !== S || t[18] !== k
    ? ((A = S && k.length > 0 && !k.endsWith(`/`)), (t[17] = S), (t[18] = k), (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] !== r.cwd || t[21] !== r.hostConfig
    ? ((j = { cwd: r.cwd, hostConfig: r.hostConfig }), (t[20] = r.cwd), (t[21] = r.hostConfig), (t[22] = j))
    : (j = t[22]);
  let M;
  t[23] !== k || t[24] !== A || t[25] !== j
    ? ((M = { branch: k, enabled: A, operationSource: `create_pull_request_modal`, lookup: j }),
      (t[23] = k),
      (t[24] = A),
      (t[25] = j),
      (t[26] = M))
    : (M = t[26]);
  let { data: Me } = l(de, M),
    N = k === O && Me === !0,
    P;
  t[27] !== N || t[28] !== S || t[29] !== O
    ? ((P = S && (O.length === 0 || O.endsWith(`/`) || N)),
      (t[27] = N),
      (t[28] = S),
      (t[29] = O),
      (t[30] = P))
    : (P = t[30]);
  let F = P,
    I;
  t[31] === r ? (I = t[32]) : ((I = ve(r)), (t[31] = r), (t[32] = I));
  let L = I,
    Ne = l(_e, L),
    R;
  t[33] === r
    ? (R = t[34])
    : ((R = { ...r, operationSource: `local_conversation_git_actions` }), (t[33] = r), (t[34] = R));
  let z = l(Ce, R),
    B;
  t[35] === r ? (B = t[36]) : ((B = { ...r, includeUnstaged: !0 }), (t[35] = r), (t[36] = B));
  let V = l(be, B),
    H = l(xe, r),
    U;
  t[37] === r
    ? (U = t[38])
    : ((U = { ...r, operationSource: `local_conversation_git_actions` }), (t[37] = r), (t[38] = U));
  let Pe = l(we, U),
    W = Pe.type === `success` ? Pe.data : void 0,
    Fe = V == null,
    Ie = W != null && (W.commitsAhead > 0 || !W.upstreamRef),
    Le = W?.upstreamRef != null,
    G;
  t[39] !== S || t[40] !== v || t[41] !== Fe || t[42] !== Ie || t[43] !== Le
    ? ((G = Se({
        canCommitPushAndCreatePullRequest: Fe,
        canPushAndCreatePullRequest: Ie,
        canCreatePullRequest: Le,
        createsBranch: S,
        includeLocalChanges: v,
      })),
      (t[39] = S),
      (t[40] = v),
      (t[41] = Fe),
      (t[42] = Ie),
      (t[43] = Le),
      (t[44] = G))
    : (G = t[44]);
  let K = G,
    Re;
  t[45] === r ? (Re = t[46]) : ((Re = { ...r, includeUnstaged: !0 }), (t[45] = r), (t[46] = Re));
  let { selectionSummary: ze } = l(he, Re),
    q;
  t[47] !== V ||
  t[48] !== S ||
  t[49] !== s ||
  t[50] !== d ||
  t[51] !== K ||
  t[52] !== H ||
  t[53] !== W?.commitsAhead ||
  t[54] !== W?.upstreamRef ||
  t[55] !== h ||
  t[56] !== r.conversationId
    ? ((q = H == null || (S && H === `branch-missing`) ? null : { kind: `push`, reason: H }),
      S &&
        K === `push-and-create-pr` &&
        (W?.commitsAhead ?? 0) === 0 &&
        (q = { kind: `push`, reason: `nothing-to-push` }),
      K === `commit-push-and-create-pr` &&
        V != null &&
        V !== `no-changes` &&
        (q = { kind: `commit`, reason: V }),
      K === `create-pr` && !W?.upstreamRef && (q = { kind: `create-pr`, reason: `upstream-missing` }),
      (h == null || r.conversationId == null) &&
        (q = {
          kind: `create-pr`,
          reason: s || d ? `pull-request-source-loading` : `pull-request-source-unavailable`,
        }),
      (t[47] = V),
      (t[48] = S),
      (t[49] = s),
      (t[50] = d),
      (t[51] = K),
      (t[52] = H),
      (t[53] = W?.commitsAhead),
      (t[54] = W?.upstreamRef),
      (t[55] = h),
      (t[56] = r.conversationId),
      (t[57] = q))
    : (q = t[57]);
  let J = Ne != null || z.isPending,
    Be;
  t[58] !== q ||
  t[59] !== _ ||
  t[60] !== S ||
  t[61] !== n ||
  t[62] !== L ||
  t[63] !== v ||
  t[64] !== F ||
  t[65] !== J ||
  t[66] !== K ||
  t[67] !== i ||
  t[68] !== a ||
  t[69] !== h ||
  t[70] !== r.conversationId ||
  t[71] !== g ||
  t[72] !== O ||
  t[73] !== z
    ? ((Be = (ee, te) => {
        let e = te !== void 0 && te;
        J ||
          q != null ||
          F ||
          ((e || (h != null && r.conversationId != null)) &&
            (a.set(ge, L, g),
            a.set(me, L, _),
            a.set(ye, L, v),
            i(),
            z.mutate({
              kind: `create-pr`,
              createPullRequestAsDraft: ee,
              gitLabForm: n,
              gitLabSubmission: e ? void 0 : h,
              newBranch: S ? O : void 0,
              nextStep: K,
              openInBrowser: e,
            })));
      }),
      (t[58] = q),
      (t[59] = _),
      (t[60] = S),
      (t[61] = n),
      (t[62] = L),
      (t[63] = v),
      (t[64] = F),
      (t[65] = J),
      (t[66] = K),
      (t[67] = i),
      (t[68] = a),
      (t[69] = h),
      (t[70] = r.conversationId),
      (t[71] = g),
      (t[72] = O),
      (t[73] = z),
      (t[74] = Be))
    : (Be = t[74]);
  let Y = Be,
    X;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, x.jsx)(ie, {
        className: `sr-only`,
        children: (0, x.jsx)(e, {
          id: `localConversationPage.createPrModal.gitLabTitle`,
          defaultMessage: `Create merge request`,
          description: `Title for the GitLab merge request creation dialog`,
        }),
      })),
      (t[75] = X))
    : (X = t[75]);
  let Ve = n.targetProjectPath ?? null,
    He = n.targetBranch ?? null,
    Ue = S ? O : n.headBranch,
    We = v ? ze : null,
    Z;
  t[76] !== N || t[77] !== E || t[78] !== C || t[79] !== S || t[80] !== F
    ? ((Z = S
        ? { branchAlreadyExists: N, isSelectionBlocked: F, placeholder: C?.trim(), value: E, onChange: ke }
        : void 0),
      (t[76] = N),
      (t[77] = E),
      (t[78] = C),
      (t[79] = S),
      (t[80] = F),
      (t[81] = Z))
    : (Z = t[81]);
  let Q;
  t[82] === Y ? (Q = t[83]) : ((Q = () => Y(!1, !0)), (t[82] = Y), (t[83] = Q));
  let $;
  t[84] !== q ||
  t[85] !== _ ||
  t[86] !== Y ||
  t[87] !== v ||
  t[88] !== J ||
  t[89] !== Ve ||
  t[90] !== He ||
  t[91] !== Ue ||
  t[92] !== We ||
  t[93] !== Z ||
  t[94] !== Q ||
  t[95] !== g
    ? (($ = (0, x.jsx)(De, {
        isGitLab: !0,
        repositoryName: Ve,
        baseBranch: He,
        headBranch: Ue,
        branchSummary: We,
        title: g,
        description: _,
        existingPullRequestUrl: null,
        hasOpenPr: !1,
        includeLocalChanges: v,
        blockedStep: q,
        newBranch: Z,
        isWorkflowPending: J,
        onTitleChange: pe,
        onDescriptionChange: Te,
        onIncludeLocalChangesChange: Ee,
        onCreate: Y,
        onOpenPullRequest: Q,
      })),
      (t[84] = q),
      (t[85] = _),
      (t[86] = Y),
      (t[87] = v),
      (t[88] = J),
      (t[89] = Ve),
      (t[90] = He),
      (t[91] = Ue),
      (t[92] = We),
      (t[93] = Z),
      (t[94] = Q),
      (t[95] = g),
      (t[96] = $))
    : ($ = t[96]);
  let Ge;
  return (
    t[97] !== i || t[98] !== $
      ? ((Ge = (0, x.jsxs)(ae, {
          open: !0,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: i,
          children: [X, $],
        })),
        (t[97] = i),
        (t[98] = $),
        (t[99] = Ge))
      : (Ge = t[99]),
    Ge
  );
}
var Ae, b, x;
function S() {
  return (S = ee(() => {
    ((Ae = o()),
      t(),
      i(),
      (b = c()),
      r(),
      g(),
      a(),
      m(),
      v(),
      p(),
      y(),
      f(),
      d(),
      n(),
      h(),
      _(),
      pe(),
      Te(),
      u(),
      Ee(),
      (x = s()));
  }))();
}
S();
export { ke as GitLabMergeRequestFormDialog };
//# sourceMappingURL=gitlab-merge-request-form-dialog-cb5df2341543.js.map
