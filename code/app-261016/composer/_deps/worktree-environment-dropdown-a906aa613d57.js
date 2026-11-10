import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  B1 as n,
  DB as r,
  FBt as i,
  FNt as a,
  Fk as o,
  Ik as s,
  LNt as c,
  MNt as l,
  NH as u,
  NNt as d,
  OB as f,
  Oz as p,
  PBt as m,
  TY as h,
  U2 as g,
  W2 as _,
  XG as v,
  XOt as y,
  Y3 as b,
  Z3 as x,
  ZSt as S,
  _D as C,
  cR as w,
  ck as T,
  e6 as E,
  fD as ee,
  fW as D,
  gB as O,
  gD as k,
  gf as te,
  hB as A,
  hf as ne,
  iCt as re,
  jz as j,
  lR as ie,
  mD as M,
  nB as ae,
  nCt as N,
  okt as oe,
  rB as se,
  rk as P,
  tk as ce,
  tkt as F,
  xH as le,
  z1 as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cn as I,
  Cin as L,
  G4t as de,
  Hcn as fe,
  J2 as R,
  Lcn as pe,
  Txr as z,
  Ucn as me,
  Ysn as B,
  Zcn as he,
  Zsn as ge,
  _It as V,
  dLt as _e,
  dbn as H,
  fbn as U,
  fxr as ve,
  gIt as ye,
  q2 as be,
  q4t as xe,
  tln as Se,
  uLt as Ce,
  wcn as we,
  win as Te,
} from "./app-initial-ad16eaadf81f.js";
import {
  Cu as Ee,
  Fm as De,
  Gl as W,
  Im as Oe,
  Jf as ke,
  Kl as Ae,
  Wl as je,
  Xf as Me,
  Yf as Ne,
  Zf as Pe,
  ag as Fe,
  bu as Ie,
  ig as Le,
  yu as Re,
} from "./app-primary-3e00728c2a4c.js";
import { c as ze, d as Be, f as Ve, n as He, s as Ue, t as We } from "./git-branch-switcher-d84a74b97ac0.js";
import { a as Ge, i as Ke } from "./git-branch-switcher-state-be975e33bdec.js";
import { n as qe, t as G } from "./environment-labels-237e71c9a137.js";
import { n as Je, t as Ye } from "./local-environment-workflow-messages-83f970f5c58f.js";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./use-git-recent-branches-b2b18365a74c.js";
var et, K;
function tt() {
  return (tt = e(() => {
    ((et = `_ComposerUtilityBarStaticLabel_deq35_1`), (K = { ComposerUtilityBarStaticLabel: et }));
  }))();
}
function nt(e) {
  let t = (0, rt.c)(11),
    { categoryLabel: n, className: r, collapse: i, icon: a, value: o, valueClassName: s } = e,
    c;
  t[0] === r ? (c = t[1]) : ((c = l(K.ComposerUtilityBarStaticLabel, r)), (t[0] = r), (t[1] = c));
  let u;
  t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== s
    ? ((u = (0, it.jsx)(Me, {
        categoryLabel: n,
        collapse: i,
        icon: a,
        indicator: `none`,
        selectedValue: o,
        selectedValueClassName: s,
        foreground: `primary`,
      })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== u
      ? ((d = (0, it.jsx)(`div`, { className: c, children: u })), (t[8] = c), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
var rt, it;
function at() {
  return (at = e(() => {
    ((rt = m()), d(), Pe(), tt(), (it = c()));
  }))();
}
function ot(e) {
  let t = (0, ct.c)(28),
    { children: n } = e,
    r = oe(),
    [i, a] = (0, q.useState)(null),
    [o, s] = (0, q.useState)(null),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = r.formatMessage({
        id: `composer.newTask.configureLocalEnvironment`,
        defaultMessage: `Configure local environment`,
        description: `Open the new chat's worktree, branch, and local setup environment settings`,
      })),
      (t[0] = r),
      (t[1] = c));
  let l = c,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = () => a(null)), (t[2] = u)) : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, Y.jsx)(D, {})), (t[3] = d)) : (d = t[3]);
  let f;
  t[4] === l
    ? (f = t[5])
    : ((f = (0, Y.jsx)(k, {
        asChild: !0,
        children: (0, Y.jsx)(b, {
          color: `ghost`,
          size: `composerSm`,
          radius: `small`,
          "aria-label": l,
          children: d,
        }),
      })),
      (t[4] = l),
      (t[5] = f));
  let p;
  t[6] === i
    ? (p = t[7])
    : ((p = (e) => {
        i != null && (e.preventDefault(), i.close());
      }),
      (t[6] = i),
      (t[7] = p));
  let m = i != null,
    h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(P.Title, {
        children: (0, Y.jsx)(F, {
          id: `composer.newTask.configureLocalEnvironment`,
          defaultMessage: `Configure local environment`,
          description: `Open the new chat's worktree, branch, and local setup environment settings`,
        }),
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== i || t[10] !== n || t[11] !== o
    ? ((g = n({ activePicker: i, setActivePicker: a, pageContainer: o })),
      (t[9] = i),
      (t[10] = n),
      (t[11] = o),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === g
    ? (_ = t[14])
    : ((_ = (0, Y.jsx)(`div`, { className: `flex min-w-0 flex-col items-stretch select-none`, children: g })),
      (t[13] = g),
      (t[14] = _));
  let v;
  t[15] !== m || t[16] !== _
    ? ((v = (0, Y.jsxs)(`div`, { hidden: m, children: [h, _] })), (t[15] = m), (t[16] = _), (t[17] = v))
    : (v = t[17]);
  let y = i == null,
    x;
  t[18] === y ? (x = t[19]) : ((x = (0, Y.jsx)(`div`, { ref: s, hidden: y })), (t[18] = y), (t[19] = x));
  let S;
  t[20] !== l || t[21] !== v || t[22] !== x || t[23] !== p
    ? ((S = (0, Y.jsxs)(M, {
        "aria-label": l,
        align: `end`,
        side: `top`,
        variant: `menu`,
        size: `workspace`,
        onEscapeKeyDown: p,
        children: [v, x],
      })),
      (t[20] = l),
      (t[21] = v),
      (t[22] = x),
      (t[23] = p),
      (t[24] = S))
    : (S = t[24]);
  let C;
  return (
    t[25] !== S || t[26] !== f
      ? ((C = (0, Y.jsxs)(ee, { onOpenChange: u, children: [f, S] })), (t[25] = S), (t[26] = f), (t[27] = C))
      : (C = t[27]),
    C
  );
}
function st(e) {
  let t = (0, ct.c)(28),
    { triggerButton: n, children: r, label: i, onOpenChange: a, navigation: o } = e,
    s = oe(),
    c = (0, q.useId)(),
    l;
  t[0] !== c || t[1] !== o
    ? ((l = (e) => {
        e ?? o.setActivePicker((e) => (e?.id === c ? null : e));
      }),
      (t[0] = c),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let d = O(l),
    f;
  t[3] !== c || t[4] !== o || t[5] !== a
    ? ((f = () => {
        (o.setActivePicker(null), a(!1), requestAnimationFrame(() => document.getElementById(c)?.focus()));
      }),
      (t[3] = c),
      (t[4] = o),
      (t[5] = a),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== p || t[8] !== c || t[9] !== o || t[10] !== a
    ? ((m = () => {
        (o.setActivePicker({ id: c, close: p }), a(!0));
      }),
      (t[7] = p),
      (t[8] = c),
      (t[9] = o),
      (t[10] = a),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== c || t[13] !== m || t[14] !== n || t[15] !== d
    ? ((h = (0, q.cloneElement)(n, { id: c, ref: d, onClick: m })),
      (t[12] = c),
      (t[13] = m),
      (t[14] = n),
      (t[15] = d),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== r ||
  t[18] !== p ||
  t[19] !== c ||
  t[20] !== s ||
  t[21] !== i ||
  t[22] !== o.activePicker?.id ||
  t[23] !== o.pageContainer
    ? ((g =
        o.activePicker?.id === c && o.pageContainer != null
          ? (0, J.createPortal)(
              (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-1 select-none`,
                role: `group`,
                children: [
                  (0, Y.jsxs)(b, {
                    color: `ghost`,
                    size: `composerAuxiliary`,
                    radius: `large`,
                    onClick: p,
                    "aria-label": s.formatMessage({
                      id: `composer.newTask.backToSettings`,
                      defaultMessage: `Back to chat settings`,
                      description: `Return from the branch or environment picker to the new chat settings without changing the selection`,
                    }),
                    children: [(0, Y.jsx)(u, {}), (0, Y.jsx)(`span`, { children: i })],
                  }),
                  r(p),
                ],
              }),
              o.pageContainer,
            )
          : null),
      (t[17] = r),
      (t[18] = p),
      (t[19] = c),
      (t[20] = s),
      (t[21] = i),
      (t[22] = o.activePicker?.id),
      (t[23] = o.pageContainer),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== h || t[26] !== g
      ? ((_ = (0, Y.jsxs)(Y.Fragment, { children: [h, g] })), (t[25] = h), (t[26] = g), (t[27] = _))
      : (_ = t[27]),
    _
  );
}
var ct, q, J, Y;
function X() {
  return (X = e(() => {
    ((ct = m()), (q = i()), (J = a()), y(), x(), T(), h(), C(), A(), (Y = c()));
  }))();
}
function lt(e) {
  let n = (0, ht.c)(70),
    {
      startingState: r,
      presentation: i,
      taskOptions: a,
      setStartingState: s,
      hostConfig: c,
      className: u,
      side: d,
      gitRootOverride: f,
      branchSource: p,
    } = e,
    m = i === void 0 ? `inline` : i,
    h = d === void 0 ? `top` : d,
    g = oe(),
    [_, v] = (0, gt.useState)(!1),
    [y, x] = (0, gt.useState)(!1),
    [S, C] = (0, gt.useState)(``),
    T = Se(),
    E;
  n[0] === y ? (E = n[1]) : ((E = { enabled: y }), (n[0] = y), (n[1] = E));
  let ee = Ee(E),
    D = f ?? ee,
    O = he(T),
    k;
  n[2] === g
    ? (k = n[3])
    : ((k = g.formatMessage({
        id: `codex.composer.searchStartingBranches`,
        defaultMessage: `Search branches…`,
        description: `Placeholder for searching available starting branches`,
      })),
      (n[2] = g),
      (n[3] = k));
  let te = k,
    A;
  n[4] === g
    ? (A = n[5])
    : ((A = g.formatMessage({
        id: `composer.remote.retryLoadingBranches`,
        defaultMessage: `Retry loading branches`,
        description: `Tooltip and accessible label for the button that retries a failed branch search in the starting branch picker`,
      })),
      (n[4] = g),
      (n[5] = A));
  let ne = A,
    j = p === `worktree`,
    ie = j ? (f ?? null) : null,
    M;
  n[6] !== c || n[7] !== ie
    ? ((M = { gitRoot: ie, hostConfig: c }), (n[6] = c), (n[7] = ie), (n[8] = M))
    : (M = n[8]);
  let se = N(Te, M),
    ce = j && r.type === `branch` ? r.branchName : (O?.default_branch ?? `main`),
    le = O?.id ?? null,
    ue;
  n[9] === f ? (ue = n[10]) : ((ue = f == null ? [] : [f]), (n[9] = f), (n[10] = ue));
  let I;
  n[11] !== c.id || n[12] !== ue
    ? ((I = { params: { dirs: ue, hostId: c.id }, source: `async_task_starting_state_dropdown` }),
      (n[11] = c.id),
      (n[12] = ue),
      (n[13] = I))
    : (I = n[13]);
  let L = !j && y,
    de;
  n[14] === L ? (de = n[15]) : ((de = { enabled: L }), (n[14] = L), (n[15] = de));
  let { data: fe } = N(H, I, de),
    R = j || (O?.clone_url != null && f != null && Re(O.clone_url, fe?.origins) === f),
    z = re(_e),
    B = me(S, 300),
    ge = S !== B,
    V;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        (e && x(!0), v(e), e || C(``));
      }),
      (n[16] = V))
    : (V = n[16]);
  let U = V,
    ve = !R && !!le && _ && !!B,
    xe;
  n[17] === ve ? (xe = n[18]) : ((xe = { enabled: ve }), (n[17] = ve), (n[18] = xe));
  let {
      data: Ce,
      isFetching: we,
      error: De,
      hasNextPage: Oe,
      isFetchingNextPage: Ae,
      fetchNextPage: Me,
      refetch: Ne,
    } = pe(le, B, xe),
    Pe = R && y,
    Ie;
  n[19] !== z || n[20] !== Pe
    ? ((Ie = { enabled: Pe, retainRepoWatch: z }), (n[19] = z), (n[20] = Pe), (n[21] = Ie))
    : (Ie = n[21]);
  let { data: Le, isLoading: ze, refetch: Be } = Fe(D, c, `async_task_starting_state_dropdown`, Ie),
    Ve = j && y && D != null,
    He;
  n[22] !== z || n[23] !== Ve
    ? ((He = { enabled: Ve, retainRepoWatch: z }), (n[22] = z), (n[23] = Ve), (n[24] = He))
    : (He = n[24]);
  let { data: We } = Xe(D, c, `async_task_starting_state_dropdown`, He),
    Ke = R && y && !!D,
    qe;
  n[25] !== z || n[26] !== Ke
    ? ((qe = { enabled: Ke, retainRepoWatch: z }), (n[25] = z), (n[26] = Ke), (n[27] = qe))
    : (qe = n[27]);
  let { data: G } = Ge(D, c, `async_task_starting_state_dropdown`, qe),
    {
      branches: Je,
      defaultBranch: Ye,
      fetching: Ze,
      error: Qe,
      refetch: $e,
    } = ft({ gitRoot: D, hostConfig: c, currentBranch: Le ?? ce, remoteDefaultBranch: ce, enabled: R && y }),
    et = S.trim().toLowerCase(),
    K = et.length > 0,
    tt = R && _ && K && !ge,
    nt;
  n[28] !== B || n[29] !== D || n[30] !== c || n[31] !== j || n[32] !== tt
    ? ((nt = {
        cwd: D,
        hostConfig: c,
        operationSource: `async_task_starting_state_dropdown`,
        preserveRemoteRefs: j,
        query: B,
        enabled: tt,
      }),
      (n[28] = B),
      (n[29] = D),
      (n[30] = c),
      (n[31] = j),
      (n[32] = tt),
      (n[33] = nt))
    : (nt = n[33]);
  let { data: rt, isFetching: it, error: at, refetch: ot } = N(Ue, nt),
    ct = ge ? void 0 : rt?.branches,
    q = r.type === `branch` ? (r.remoteRef ?? r.branchName) : void 0,
    J = R ? Ye : ce,
    Y = We?.local,
    X = j && We?.remote != null && Y != null ? `${We.remote}/${Y}` : null,
    lt = R ? (K ? ct : Je) : K && !ge ? Ce?.filter((e) => e.toLowerCase().includes(et)) : void 0,
    pt = !K || J.toLowerCase().includes(et),
    mt = lt?.filter((e) => e !== J),
    _t = j && K && !ge ? (rt?.remoteBranchRefs ?? []) : [],
    vt = j && _t.length > 0,
    yt = R ? (K ? it : Ze) : we,
    Q = R ? (K ? at : Qe) : De,
    bt = R ? (K ? ot : $e) : Ne,
    xt = !R && Oe,
    St = Le ?? J;
  r.type === `branch` && r.branchName;
  let Ct = G?.type === `success` && G.stagedCount + G.unstagedCount + (G.untrackedCount ?? 0) > 0,
    wt = R && Ct && (!K || St.toLowerCase().includes(et));
  r.type;
  let Tt =
      r.type === `branch` && X != null && r.branchName === Y && r.remoteRef === `refs/remotes/${X}`
        ? X
        : null,
    Et =
      r.type === `working-tree`
        ? (0, Z.jsx)(F, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: Le ?? J },
          })
        : (Tt ??
          (0, Z.jsx)(F, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: r.branchName },
          })),
    $;
  n[34] === Et
    ? ($ = n[35])
    : (($ = (0, Z.jsxs)(Z.Fragment, { children: [(0, Z.jsx)(Z.Fragment, { children: Et }), null, null] })),
      (n[34] = Et),
      (n[35] = $));
  let Dt = $,
    Ot;
  n[36] === g
    ? (Ot = n[37])
    : ((Ot = g.formatMessage({
        id: `composer.remote.branchStartingPoint`,
        defaultMessage: `What branch should this chat start from?`,
        description: `Section label for branch starting point selector`,
      })),
      (n[36] = g),
      (n[37] = Ot));
  let kt = Ot,
    At,
    jt;
  (n[38] !== _ || n[39] !== Be || n[40] !== $e || n[41] !== R
    ? ((At = () => {
        _ && (Be(), R && $e());
      }),
      (jt = [_, Be, $e, R]),
      (n[38] = _),
      (n[39] = Be),
      (n[40] = $e),
      (n[41] = R),
      (n[42] = At),
      (n[43] = jt))
    : ((At = n[42]), (jt = n[43])),
    (0, gt.useEffect)(At, jt));
  let Mt;
  n[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (0, Z.jsx)(F, {
        id: `composer.worktreeOptions.branch`,
        defaultMessage: `Branch`,
        description: `Label for the starting branch selector in the compact task options menu`,
      })),
      (n[44] = Mt))
    : (Mt = n[44]);
  let Nt;
  n[45] === u ? (Nt = n[46]) : ((Nt = l(`whitespace-nowrap`, u)), (n[45] = u), (n[46] = Nt));
  let Pt = r.type === `working-tree` && Ct,
    Ft;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ft = (0, Z.jsx)(w, { className: `icon-xs` })), (n[47] = Ft))
    : (Ft = n[47]);
  let It;
  n[48] === Pt
    ? (It = n[49])
    : ((It = (0, Z.jsx)(be, { borderColor: `border-surface-secondary`, badgeEnabled: Pt, children: Ft })),
      (n[48] = Pt),
      (n[49] = It));
  let Lt;
  n[50] !== Dt || n[51] !== m || n[52] !== kt || n[53] !== Nt || n[54] !== It
    ? ((Lt = (0, Z.jsx)(ke, {
        "aria-label": kt,
        "data-composer-navigation-target": `starting-state`,
        categoryLabel: null,
        presentation: m,
        menuCategoryLabel: Mt,
        className: Nt,
        collapse: `secondary`,
        icon: It,
        indicator: `collapsible-chevron`,
        value: Dt,
        valueClassName: `max-w-40`,
      })),
      (n[50] = Dt),
      (n[51] = m),
      (n[52] = kt),
      (n[53] = Nt),
      (n[54] = It),
      (n[55] = Lt))
    : (Lt = n[55]);
  let Rt = Lt,
    zt = (e) =>
      (0, Z.jsx)(W.Root, {
        label: te,
        children: (0, Z.jsxs)(`div`, {
          className: l(`flex flex-col gap-1.5 overflow-hidden`, m === `menu` ? `w-full` : `w-72`),
          children: [
            (0, Z.jsx)(W.Input, {
              placeholder: te,
              value: S,
              onValueChange: C,
              onKeyDown: (e) => {
                e.key === `Enter` && ge && e.preventDefault();
              },
            }),
            m === `menu` ? (0, Z.jsx)(P.Separator, {}) : null,
            (0, Z.jsx)(`div`, {
              className: `vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-1.5 overflow-y-auto`,
              children: (0, Z.jsxs)(W.List, {
                children: [
                  wt
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex flex-col`,
                        children: [
                          (0, Z.jsx)(P.SectionLabel, {
                            children: (0, Z.jsx)(F, {
                              id: `composer.remote.localFileStateHeading`,
                              defaultMessage: `Local file state`,
                              description: `Section heading for local working tree selection`,
                            }),
                          }),
                          (0, Z.jsx)(W.Item, {
                            LeftIcon: ut,
                            RightIcon: r.type === `working-tree` ? o : void 0,
                            tooltipText: St,
                            tooltipOpenWhen: `trigger-overflows`,
                            tooltipSide: m === `menu` ? `left` : void 0,
                            value: `working-tree:${St}`,
                            onSelect: () => {
                              (s({ type: `working-tree` }), e());
                            },
                            children: (0, Z.jsxs)(`div`, {
                              className: `flex flex-col`,
                              children: [
                                ze ? null : (0, Z.jsx)(Z.Fragment, { children: Le ?? J }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-codex-description`,
                                  children: (0, Z.jsx)(F, {
                                    id: `composer.remote.currentEditsSuffix.useLocal`,
                                    defaultMessage: `with local code changes`,
                                    description: `Suffix text indicating the selection includes current edits`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : null,
                  X != null && Y != null && (!K || X.toLowerCase().includes(et))
                    ? (0, Z.jsx)(W.Item, {
                        LeftIcon: w,
                        RightIcon: Tt == null ? void 0 : o,
                        value: X,
                        onSelect: () => {
                          (s({ type: `branch`, branchName: Y, remoteRef: `refs/remotes/${X}` }), e());
                        },
                        children: X,
                      })
                    : null,
                  (0, Z.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      (0, Z.jsx)(P.SectionLabel, {
                        children: j
                          ? (0, Z.jsx)(F, {
                              id: `composer.remote.localBranchesSectionHeading`,
                              defaultMessage: `Local branches`,
                              description: `Section heading for local branch search results`,
                            })
                          : (0, Z.jsx)(F, {
                              id: `composer.remote.branchesSectionHeading`,
                              defaultMessage: `Branches`,
                              description: `Section heading for remote branch search results`,
                            }),
                      }),
                      B && yt
                        ? (0, Z.jsx)(`div`, {
                            className: `flex h-full items-center justify-center`,
                            children: (0, Z.jsx)(t, { className: `icon-xxs` }),
                          })
                        : se.error != null || (B && Q)
                          ? (0, Z.jsxs)(`div`, {
                              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-danger`,
                              children: [
                                (0, Z.jsx)(F, {
                                  id: `composer.remote.errorLoadingBranches`,
                                  defaultMessage: `Error loading branches`,
                                  description: `Error message for remote starting point selector`,
                                }),
                                (0, Z.jsx)(ae, {
                                  cloneCustomTrigger: !0,
                                  tooltipContent: ne,
                                  children: (0, Z.jsx)(b, {
                                    className: `text-codex-description`,
                                    "aria-label": ne,
                                    color: `ghost`,
                                    size: `icon`,
                                    onClick: () => {
                                      (bt(), se.refetch?.());
                                    },
                                    children: (0, Z.jsx)(ye, { className: `icon-xxs` }),
                                  }),
                                }),
                              ],
                            })
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                pt &&
                                  (0, Z.jsx)(W.Item, {
                                    LeftIcon: w,
                                    RightIcon: q === J ? o : void 0,
                                    tooltipText: J,
                                    tooltipOpenWhen: `trigger-overflows`,
                                    tooltipSide: m === `menu` ? `left` : void 0,
                                    value: J,
                                    onSelect: () => {
                                      (s({ type: `branch`, branchName: J }), e());
                                    },
                                    children: J,
                                  }),
                                mt?.map((t) =>
                                  (0, Z.jsx)(
                                    W.Item,
                                    {
                                      LeftIcon: w,
                                      RightIcon: t === q ? o : void 0,
                                      tooltipText: t,
                                      tooltipOpenWhen: `trigger-overflows`,
                                      tooltipSide: m === `menu` ? `left` : void 0,
                                      value: t,
                                      onSelect: () => {
                                        (s({ type: `branch`, branchName: t }), e());
                                      },
                                      children: t,
                                    },
                                    t,
                                  ),
                                ),
                              ],
                            }),
                    ],
                  }),
                  vt
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex flex-col`,
                        children: [
                          (0, Z.jsx)(P.SectionLabel, {
                            className: `mt-1`,
                            children: (0, Z.jsx)(F, {
                              id: `composer.remote.remoteBranchesSectionHeading`,
                              defaultMessage: `Remote branches`,
                              description: `Section heading for fetched remote branch search results`,
                            }),
                          }),
                          _t.map((t) =>
                            (0, Z.jsx)(
                              W.Item,
                              {
                                LeftIcon: w,
                                RightIcon: t === q ? o : void 0,
                                tooltipText: dt(t),
                                tooltipOpenWhen: `trigger-overflows`,
                                tooltipSide: m === `menu` ? `left` : void 0,
                                value: t,
                                onSelect: () => {
                                  (s({ type: `branch`, branchName: dt(t), remoteRef: t }), e());
                                },
                                children: dt(t),
                              },
                              t,
                            ),
                          ),
                        ],
                      })
                    : null,
                  xt &&
                    (0, Z.jsx)(W.Action, {
                      onClick: () => {
                        Ae || Me();
                      },
                      children: Ae
                        ? (0, Z.jsx)(F, {
                            id: `composer.remote.loadingMoreBranches`,
                            defaultMessage: `Loading…`,
                            description: `Loading more branches`,
                          })
                        : null,
                    }),
                ],
              }),
            }),
          ],
        }),
      });
  if (m === `menu` && a != null) {
    let e;
    return (
      n[56] === g
        ? (e = n[57])
        : ((e = g.formatMessage({
            id: `composer.worktreeOptions.branch`,
            defaultMessage: `Branch`,
            description: `Label for the starting branch selector in the task options menu`,
          })),
          (n[56] = g),
          (n[57] = e)),
      (0, Z.jsx)(st, { navigation: a, triggerButton: Rt, label: e, onOpenChange: U, children: zt })
    );
  }
  let Bt = je,
    Vt;
  n[58] !== kt || n[59] !== Rt
    ? ((Vt = (0, Z.jsx)(ae, { tooltipContent: kt, children: Rt })), (n[58] = kt), (n[59] = Rt), (n[60] = Vt))
    : (Vt = n[60]);
  let Ht;
  n[61] === U ? (Ht = n[62]) : ((Ht = () => U(!1)), (n[61] = U), (n[62] = Ht));
  let Ut = zt(Ht),
    Wt;
  return (
    n[63] !== Bt || n[64] !== _ || n[65] !== U || n[66] !== h || n[67] !== Vt || n[68] !== Ut
      ? ((Wt = (0, Z.jsx)(Bt, { side: h, open: _, onOpenChange: U, triggerButton: Vt, children: Ut })),
        (n[63] = Bt),
        (n[64] = _),
        (n[65] = U),
        (n[66] = h),
        (n[67] = Vt),
        (n[68] = Ut),
        (n[69] = Wt))
      : (Wt = n[69]),
    Wt
  );
}
function ut(e) {
  let t = (0, ht.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(be, {
          borderColor: `border-surface-secondary`,
          children: (0, Z.jsx)(w, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function dt(e) {
  return e.startsWith(`refs/remotes/`) ? e.slice(13) : e;
}
function ft(e) {
  let t = (0, ht.c)(20),
    { gitRoot: n, hostConfig: r, currentBranch: i, remoteDefaultBranch: a, enabled: o } = e,
    s = re(_e),
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { enabled: o, retainRepoWatch: s }), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let {
      data: l,
      isLoading: u,
      isFetching: d,
      error: f,
      refetch: p,
    } = Oe(n, r, `async_task_starting_state_dropdown`, c),
    m;
  t[3] !== o || t[4] !== s
    ? ((m = { enabled: o, retainRepoWatch: s }), (t[3] = o), (t[4] = s), (t[5] = m))
    : (m = t[5]);
  let {
      data: h,
      isLoading: g,
      isFetching: _,
      error: v,
      refetch: y,
    } = Ze(n, r, `async_task_starting_state_dropdown`, m),
    b;
  if (t[6] !== i || t[7] !== l || t[8] !== h || t[9] !== a) {
    let e = [
        l,
        i,
        pt({ currentBranch: i, gitDefaultBranch: l, recentBranches: h, remoteDefaultBranch: a }),
        ...(h ?? []),
      ],
      n = new Set();
    ((b = []),
      e.forEach((e) => {
        mt({ branch: e, list: b, seen: n });
      }),
      (t[6] = i),
      (t[7] = l),
      (t[8] = h),
      (t[9] = a),
      (t[10] = b));
  } else b = t[10];
  let x = b[0] ?? i ?? a,
    S = u || d || g || _,
    C = f ?? v,
    w;
  t[11] !== p || t[12] !== y
    ? ((w = async () => {
        await Promise.all([p(), y()]);
      }),
      (t[11] = p),
      (t[12] = y),
      (t[13] = w))
    : (w = t[13]);
  let T = w,
    E;
  return (
    t[14] !== b || t[15] !== x || t[16] !== C || t[17] !== S || t[18] !== T
      ? ((E = { branches: b, defaultBranch: x, fetching: S, error: C, refetch: T }),
        (t[14] = b),
        (t[15] = x),
        (t[16] = C),
        (t[17] = S),
        (t[18] = T),
        (t[19] = E))
      : (E = t[19]),
    E
  );
}
function pt({ currentBranch: e, gitDefaultBranch: t, recentBranches: n, remoteDefaultBranch: r }) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function mt({ branch: e, list: t, seen: n }) {
  e && !n.has(e) && (n.add(e), t.push(e));
}
var ht, gt, Z;
function _t() {
  return (_t = e(() => {
    ((ht = m()),
      d(),
      S(),
      (gt = i()),
      y(),
      we(),
      R(),
      x(),
      Ae(),
      T(),
      E(),
      se(),
      ze(),
      U(),
      Qe(),
      Le(),
      De(),
      $e(),
      Ke(),
      ie(),
      s(),
      V(),
      Ce(),
      Ie(),
      fe(),
      I(),
      Ne(),
      X(),
      L(),
      (Z = c()));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(10),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ presentation: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a = i === void 0 ? `inline` : i,
    o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(F, {
        id: `composer.footer.branchSwitch.detachedHead`,
        defaultMessage: `Detached HEAD`,
        description: `Label shown when the current Git checkout is not on a branch`,
      })),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e) => {
        let { currentBranch: t } = e;
        return (0, Q.jsx)(nt, {
          categoryLabel: null,
          className: `text-codex-description`,
          collapse: `sm`,
          icon: (0, Q.jsx)(r, { "aria-hidden": !1, asset: g }),
          value: t ?? s,
          valueClassName: `max-w-40 text-sm`,
        });
      }),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === a
    ? (l = t[6])
    : ((l = (e) => {
        let { currentBranch: t, disabled: n, isPending: i, switchTooltipText: o } = e,
          c = `collapsible-chevron`;
        return (
          i && (c = t === void 0 ? `none` : `pending`),
          (0, Q.jsx)(ke, {
            presentation: a,
            menuCategoryLabel: (0, Q.jsx)(F, {
              id: `composer.worktreeOptions.branch`,
              defaultMessage: `Branch`,
              description: `Label for the branch selector in the compact task options menu`,
            }),
            "aria-label": o,
            "data-composer-navigation-target": `branch`,
            categoryLabel: null,
            className: `px-0`,
            collapse: `sm`,
            disabled: n,
            icon: (0, Q.jsx)(r, { "aria-hidden": !1, asset: g }),
            indicator: c,
            value:
              t === void 0
                ? (0, Q.jsx)(F, {
                    id: `composer.footer.branchSwitch.loading`,
                    defaultMessage: `Loading branch…`,
                    description: `Label shown while loading the current Git branch in the composer utility bar`,
                  })
                : (t ?? s),
            valueClassName: `max-w-40 text-sm`,
          })
        );
      }),
      (t[5] = a),
      (t[6] = l));
  let u;
  return (
    t[7] !== n || t[8] !== l
      ? ((u = (0, Q.jsx)(We, { ...n, renderWhileLoading: !0, renderStaticBranch: c, renderControl: l })),
        (t[7] = n),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var yt, Q;
function bt() {
  return (bt = e(() => {
    ((yt = m()), _(), y(), f(), He(), Ne(), at(), (Q = c()));
  }))();
}
function xt(e) {
  let n = (0, Tt.c)(59),
    {
      className: i,
      disabled: a,
      presentation: o,
      taskOptions: s,
      labelClassName: c,
      environments: u,
      isLoading: d,
      hasError: f,
      side: p,
      align: m,
      showIcon: h,
      selectedConfigPath: g,
      repairConfigPath: _,
      onSelectConfigPath: y,
      onOpenSettings: b,
      workspaceRoot: x,
      showDefaultOption: S,
      onResetSelection: C,
    } = e,
    w = a !== void 0 && a,
    T = o === void 0 ? `inline` : o,
    E = p === void 0 ? `top` : p,
    ee = m === void 0 ? `start` : m,
    D = h === void 0 || h,
    O = S === void 0 || S,
    k = oe(),
    [A, ne] = (0, Et.useState)(!1),
    [re, ie] = (0, Et.useState)(``),
    M,
    N;
  if (
    n[0] !== ee ||
    n[1] !== i ||
    n[2] !== w ||
    n[3] !== u ||
    n[4] !== f ||
    n[5] !== k ||
    n[6] !== d ||
    n[7] !== c ||
    n[8] !== b ||
    n[9] !== C ||
    n[10] !== y ||
    n[11] !== A ||
    n[12] !== T ||
    n[13] !== _ ||
    n[14] !== re ||
    n[15] !== g ||
    n[16] !== O ||
    n[17] !== D ||
    n[18] !== E ||
    n[19] !== s ||
    n[20] !== x
  ) {
    N = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = u.filter(St),
        a = de(e),
        o;
      n[23] === g ? (o = n[24]) : ((o = g ? j(g) : null), (n[23] = g), (n[24] = o));
      let p = o,
        m;
      n[25] !== p || n[26] !== _ ? ((m = _ ? j(_) : p), (n[25] = p), (n[26] = _), (n[27] = m)) : (m = n[27]);
      let h = m,
        S = u.find((e) => j(e.configPath) === h) ?? null,
        oe = !d && !f,
        se = a && O ? e.filter((e) => j(e.configPath) !== j(a.configPath)) : e,
        I = wt({ isLoading: d, environmentResult: S });
      if (C != null && g != null && S == null && !d) {
        let e;
        (n[28] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(F, {
              id: `composer.worktreeEnvironment.unavailableSelection`,
              defaultMessage: `Selected environment unavailable`,
              description: `The saved environment is missing and will not be replaced automatically`,
            })),
            (n[28] = e))
          : (e = n[28]),
          (I = e));
      }
      let L = oe && u.length === 0,
        fe;
      n[29] === k
        ? (fe = n[30])
        : ((fe = k.formatMessage({
            id: `composer.worktreeEnvironment.tooltip`,
            defaultMessage: `Select a local environment`,
            description: `Tooltip for local environment selector`,
          })),
          (n[29] = k),
          (n[30] = fe));
      let R = fe,
        pe;
      n[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((pe = (0, $.jsx)(F, {
            id: `composer.worktreeOptions.environment`,
            defaultMessage: `Environment`,
            description: `Label for the setup environment selector in the compact task options menu`,
          })),
          (n[31] = pe))
        : (pe = n[31]);
      let z;
      n[32] === i ? (z = n[33]) : ((z = l(`whitespace-nowrap`, i)), (n[32] = i), (n[33] = z));
      let me = c == null ? `secondary` : `sm`,
        B;
      n[34] === D
        ? (B = n[35])
        : ((B = D ? (0, $.jsx)(r, { "aria-hidden": !1, asset: ue }) : null), (n[34] = D), (n[35] = B));
      let he = d ? `none` : `collapsible-chevron`,
        ge = I,
        V;
      n[36] === c ? (V = n[37]) : ((V = l(`max-w-40`, c)), (n[36] = c), (n[37] = V));
      let _e;
      n[38] !== w ||
      n[39] !== I ||
      n[40] !== T ||
      n[41] !== R ||
      n[42] !== z ||
      n[43] !== me ||
      n[44] !== B ||
      n[45] !== he ||
      n[46] !== V
        ? ((_e = (0, $.jsx)(ke, {
            "aria-label": R,
            "data-composer-navigation-target": `environment`,
            categoryLabel: null,
            presentation: T,
            disabled: w,
            menuCategoryLabel: pe,
            className: z,
            collapse: me,
            icon: B,
            indicator: he,
            value: ge,
            valueClassName: V,
          })),
          (n[38] = w),
          (n[39] = I),
          (n[40] = T),
          (n[41] = R),
          (n[42] = z),
          (n[43] = me),
          (n[44] = B),
          (n[45] = he),
          (n[46] = V),
          (n[47] = _e))
        : (_e = n[47]);
      let H = _e;
      if (w) {
        let e = T === `menu` ? `left` : void 0,
          t;
        n[48] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(F, {
              id: `composer.worktreeEnvironment.enableWorktreeHint`,
              defaultMessage: `Enable worktree to choose an environment`,
              description: `Explains why the environment selector is disabled while New worktree is turned off`,
            })),
            (n[48] = t))
          : (t = n[48]);
        let r;
        (n[49] !== e || n[50] !== H
          ? ((r = (0, $.jsx)(ae, { side: e, tooltipContent: t, children: H })),
            (n[49] = e),
            (n[50] = H),
            (n[51] = r))
          : (r = n[51]),
          (N = r));
        break bb0;
      }
      let U = T === `menu` ? W.Item : P.Item,
        ve = (n) =>
          (0, $.jsxs)(`div`, {
            className: l(`flex flex-col overflow-hidden`, T === `menu` ? `w-full` : `w-64`),
            children: [
              T === `inline`
                ? (0, $.jsx)(P.Title, {
                    children:
                      x == null
                        ? (0, $.jsx)(F, {
                            id: `composer.worktreeEnvironment.title`,
                            defaultMessage: `Environment`,
                            description: `Title for worktree environment dropdown`,
                          })
                        : (0, $.jsx)(Ct, { workspaceRoot: x }),
                  })
                : null,
              (0, $.jsxs)(`div`, {
                className: `vertical-scroll-fade-mask max-h-[220px] overflow-y-auto`,
                children: [
                  C == null
                    ? null
                    : (0, $.jsx)(U, {
                        onSelect: () => {
                          (C(), n());
                        },
                        children: (0, $.jsx)(F, {
                          id: `composer.worktreeEnvironment.reset`,
                          defaultMessage: `Reset environment`,
                          description: `Clear the saved environment choice and work without an environment until one is selected`,
                        }),
                      }),
                  oe
                    ? (0, $.jsx)(U, {
                        RightIcon: g == null && _ == null ? le : void 0,
                        onSelect: () => {
                          (y(null), n());
                        },
                        children: (0, $.jsx)(F, {
                          id: `composer.worktreeEnvironment.noEnvironmentOption`,
                          defaultMessage: `Work without environment`,
                          description: `Option in the worktree environment dropdown that runs without selecting a local environment`,
                        }),
                      })
                    : null,
                  O && a && G(a).toLocaleLowerCase().includes(re.trim().toLocaleLowerCase())
                    ? (0, $.jsx)(U, {
                        RightIcon: p != null && j(a.configPath) === p ? le : void 0,
                        onSelect: () => {
                          (y(a.configPath), n());
                        },
                        children: (0, $.jsxs)(`div`, {
                          className: `flex min-w-0 items-center gap-2`,
                          children: [
                            (0, $.jsx)(ae, {
                              side: T === `menu` ? `left` : void 0,
                              tooltipContent: (0, $.jsx)(F, {
                                id: `composer.worktreeEnvironment.default`,
                                defaultMessage: `Default environment`,
                                description: `Tooltip for default local environment icon`,
                              }),
                              children: (0, $.jsx)(r, {
                                className: `shrink-0 text-codex-description`,
                                "aria-hidden": !1,
                                asset: te,
                              }),
                            }),
                            (0, $.jsx)(`span`, { className: `truncate`, children: G(a) }),
                          ],
                        }),
                      })
                    : null,
                  d
                    ? (0, $.jsx)(`div`, {
                        className: `flex items-center justify-center py-4`,
                        children: (0, $.jsx)(t, { className: `icon-xxs` }),
                      })
                    : f
                      ? (0, $.jsx)(P.Message, {
                          compact: !0,
                          tone: `error`,
                          children: (0, $.jsx)(F, {
                            id: `composer.worktreeEnvironment.error`,
                            defaultMessage: `Error loading environments`,
                            description: `Error state for worktree environment dropdown`,
                          }),
                        })
                      : se.length > 0
                        ? (0, $.jsx)(`div`, {
                            className: `flex flex-col`,
                            children: se
                              .filter((e) => G(e).toLocaleLowerCase().includes(re.trim().toLocaleLowerCase()))
                              .map((e) => {
                                let t = g != null && j(e.configPath) === p;
                                return (0, $.jsx)(
                                  U,
                                  {
                                    RightIcon: t ? le : void 0,
                                    onSelect: () => {
                                      (y(e.configPath), n());
                                    },
                                    children: (0, $.jsx)(`span`, {
                                      className: `min-w-0 truncate`,
                                      children: G(e),
                                    }),
                                  },
                                  e.configPath,
                                );
                              }),
                          })
                        : u.length > 0 && e.length === 0
                          ? (0, $.jsx)(P.Message, {
                              compact: !0,
                              tone: `error`,
                              children: (0, $.jsx)(F, { ...Je.needsAttention }),
                            })
                          : null,
                  (0, $.jsx)(U, {
                    LeftIcon: v,
                    onSelect: () => {
                      (b(_ ?? void 0), n());
                    },
                    children: L
                      ? (0, $.jsx)(F, {
                          id: `composer.worktreeEnvironment.setUpProject`,
                          defaultMessage: `Set up project`,
                          description: `Action to configure reusable setup for a project without a worktree environment`,
                        })
                      : (0, $.jsx)(F, {
                          id: `composer.worktreeEnvironment.settings`,
                          defaultMessage: `Environment settings`,
                          description: `CTA to open local environment settings from the worktree dropdown`,
                        }),
                  }),
                ],
              }),
            ],
          });
      if (T === `menu` && s != null) {
        let e;
        n[52] === k
          ? (e = n[53])
          : ((e = k.formatMessage({
              id: `composer.worktreeOptions.environment`,
              defaultMessage: `Environment`,
              description: `Label for the setup environment selector in the task options menu`,
            })),
            (n[52] = k),
            (n[53] = e));
        let t;
        (n[54] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (e) => {
              (ne(e), e || ie(``));
            }),
            (n[54] = t))
          : (t = n[54]),
          (N = (0, $.jsx)(st, {
            navigation: s,
            triggerButton: H,
            label: e,
            onOpenChange: t,
            children: (e) =>
              (0, $.jsxs)(W.Root, {
                label: R,
                children: [
                  (0, $.jsx)(W.Input, {
                    placeholder: k.formatMessage({
                      id: `composer.worktreeEnvironment.search`,
                      defaultMessage: `Search environments…`,
                      description: `Search the local setup environments available for the new task`,
                    }),
                    value: re,
                    onValueChange: ie,
                  }),
                  (0, $.jsx)(P.Separator, {}),
                  (0, $.jsx)(W.List, { children: ve(e) }),
                ],
              }),
          })));
        break bb0;
      }
      let ye;
      n[55] !== L || n[56] !== H
        ? ((ye = L
            ? (0, $.jsx)(ae, {
                cloneCustomTrigger: !0,
                tooltipContent: (0, $.jsx)(F, {
                  id: `composer.worktreeEnvironment.projectSetupDescription`,
                  defaultMessage: `Give Codex access to your project’s full dependencies and setup`,
                  description: `Explains that project setup gives Codex access to project dependencies and setup`,
                }),
                children: H,
              })
            : H),
          (n[55] = L),
          (n[56] = H),
          (n[57] = ye))
        : (ye = n[57]);
      let be;
      (n[58] === Symbol.for(`react.memo_cache_sentinel`) ? ((be = () => ne(!1)), (n[58] = be)) : (be = n[58]),
        (M = (0, $.jsx)(ce, {
          open: A,
          onOpenChange: ne,
          side: E,
          align: ee,
          triggerButton: ye,
          children: ve(be),
        })));
    }
    ((n[0] = ee),
      (n[1] = i),
      (n[2] = w),
      (n[3] = u),
      (n[4] = f),
      (n[5] = k),
      (n[6] = d),
      (n[7] = c),
      (n[8] = b),
      (n[9] = C),
      (n[10] = y),
      (n[11] = A),
      (n[12] = T),
      (n[13] = _),
      (n[14] = re),
      (n[15] = g),
      (n[16] = O),
      (n[17] = D),
      (n[18] = E),
      (n[19] = s),
      (n[20] = x),
      (n[21] = M),
      (n[22] = N));
  } else ((M = n[21]), (N = n[22]));
  return N === Symbol.for(`react.early_return_sentinel`) ? M : N;
}
function St(e) {
  return e.type === `success`;
}
function Ct(e) {
  let t = (0, Tt.c)(5),
    { workspaceRoot: n } = e,
    r = re(ge);
  if (N(z, r).length > 1) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = Be(n)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, $.jsx)(F, {
            id: `composer.worktreeEnvironment.titleForRepository`,
            defaultMessage: `Environment · {repoName}`,
            description: `Title for the composer worktree environment dropdown followed by the primary repository name when the project has multiple source folders`,
            values: { repoName: e },
          })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  let i;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(F, {
          id: `composer.worktreeEnvironment.title`,
          defaultMessage: `Environment`,
          description: `Title for worktree environment dropdown`,
        })),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function wt({ isLoading: e, environmentResult: t }) {
  return e
    ? (0, $.jsx)(F, {
        id: `composer.worktreeEnvironment.loading`,
        defaultMessage: `Loading environments…`,
        description: `Loading label for worktree environment dropdown`,
      })
    : t?.type === `error`
      ? (0, $.jsx)(F, { ...Je.needsAttention })
      : t?.type === `success`
        ? (0, $.jsx)($.Fragment, { children: t.environment.name })
        : (0, $.jsx)(F, {
            id: `codex.environmentSelector.noEnvironment`,
            defaultMessage: `No environment`,
            description: `No environment selected message`,
          });
}
var Tt, Et, $;
function Dt() {
  return (Dt = e(() => {
    ((Tt = m()),
      n(),
      ne(),
      d(),
      S(),
      (Et = i()),
      y(),
      Ae(),
      T(),
      f(),
      h(),
      E(),
      se(),
      qe(),
      Ye(),
      B(),
      ve(),
      Ve(),
      xe(),
      p(),
      Ne(),
      X(),
      ($ = c()));
  }))();
}
export { lt as a, X as c, bt as i, nt as l, Dt as n, _t as o, vt as r, ot as s, xt as t, at as u };
//# sourceMappingURL=worktree-environment-dropdown-a906aa613d57.js.map
