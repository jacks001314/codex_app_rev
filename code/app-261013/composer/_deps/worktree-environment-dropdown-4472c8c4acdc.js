import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $W as n,
  AO as r,
  BE as i,
  BR as a,
  CO as o,
  HE as s,
  IDt as c,
  L$ as l,
  LR as u,
  LV as d,
  Mz as f,
  Nd as p,
  Nz as m,
  Pd as h,
  Pxt as g,
  R$ as _,
  RE as v,
  TJ as y,
  TO as b,
  TV as x,
  U0 as S,
  UE as C,
  VDt as w,
  Vxt as T,
  W0 as E,
  _Mt as D,
  bL as O,
  bz as k,
  cz as A,
  gMt as ee,
  gU as j,
  i3 as M,
  ik as te,
  jDt as N,
  r3 as ne,
  rk as P,
  sz as re,
  t3 as F,
  vzt as I,
  xMt as L,
  xz as ie,
  yL as ae,
  yMt as oe,
  yzt as R,
  zxt as se,
} from "./app-shared-bbfeca5e5737.js";
import {
  $dn as z,
  B_n as ce,
  D0 as le,
  D_r as B,
  E0 as ue,
  Fin as de,
  JCt as V,
  Jin as fe,
  V_n as H,
  XCt as U,
  aBt as pe,
  can as me,
  czt as W,
  ean as G,
  fan as he,
  m_r as ge,
  ntn as _e,
  oBt as ve,
  rtn as ye,
  szt as be,
  tan as xe,
  tfn as Se,
  uan as Ce,
} from "./app-initial-5851df3f6cb1.js";
import {
  Bf as we,
  Cm as Te,
  Fl as Ee,
  Lf as De,
  Nl as Oe,
  Pl as K,
  Rf as ke,
  Sm as Ae,
  Uh as je,
  Wh as Me,
  cu as Ne,
  fu as Pe,
  lu as Fe,
  zf as Ie,
} from "./app-primary-fe8a450b3b04.js";
import { c as Le, d as Re, f as ze, n as Be, s as Ve, t as He } from "./git-branch-switcher-91226a3079fc.js";
import { a as Ue, i as We } from "./git-branch-switcher-state-a1297efb90da.js";
import { n as Ge, t as Ke } from "./environment-labels-e8b36219dcc7.js";
import { n as qe, t as Je } from "./local-environment-workflow-messages-113907dcb0c6.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./use-git-recent-branches-f24de8fcc3a2.js";
var $e, q;
function et() {
  return (et = e(() => {
    (($e = `_ComposerUtilityBarStaticLabel_deq35_1`), (q = { ComposerUtilityBarStaticLabel: $e }));
  }))();
}
function tt(e) {
  let t = (0, nt.c)(11),
    { categoryLabel: n, className: r, collapse: i, icon: a, value: o, valueClassName: s } = e,
    c;
  t[0] === r ? (c = t[1]) : ((c = ee(q.ComposerUtilityBarStaticLabel, r)), (t[0] = r), (t[1] = c));
  let l;
  t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== s
    ? ((l = (0, rt.jsx)(Ie, {
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
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== c || t[9] !== l
      ? ((u = (0, rt.jsx)(`div`, { className: c, children: l })), (t[8] = c), (t[9] = l), (t[10] = u))
      : (u = t[10]),
    u
  );
}
var nt, rt;
function it() {
  return (it = e(() => {
    ((nt = I()), D(), we(), et(), (rt = L()));
  }))();
}
function at(e) {
  let n = (0, st.c)(28),
    { children: r } = e,
    a = w(),
    [o, l] = (0, ct.useState)(null),
    [u, d] = (0, ct.useState)(null),
    f;
  n[0] === a
    ? (f = n[1])
    : ((f = a.formatMessage({
        id: `composer.newTask.configureLocalEnvironment`,
        defaultMessage: `Configure local environment`,
        description: `Open the new chat's worktree, branch, and local setup environment settings`,
      })),
      (n[0] = a),
      (n[1] = f));
  let p = f,
    m;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = () => l(null)), (n[2] = m)) : (m = n[2]);
  let h;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, Y.jsx)(j, {})), (n[3] = h)) : (h = n[3]);
  let g;
  n[4] === p
    ? (g = n[5])
    : ((g = (0, Y.jsx)(s, {
        asChild: !0,
        children: (0, Y.jsx)(t, {
          color: `ghost`,
          size: `composerSm`,
          radius: `small`,
          "aria-label": p,
          children: h,
        }),
      })),
      (n[4] = p),
      (n[5] = g));
  let _;
  n[6] === o
    ? (_ = n[7])
    : ((_ = (e) => {
        o != null && (e.preventDefault(), o.close());
      }),
      (n[6] = o),
      (n[7] = _));
  let y = o != null,
    x;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(b.Title, {
        children: (0, Y.jsx)(c, {
          id: `composer.newTask.configureLocalEnvironment`,
          defaultMessage: `Configure local environment`,
          description: `Open the new chat's worktree, branch, and local setup environment settings`,
        }),
      })),
      (n[8] = x))
    : (x = n[8]);
  let S;
  n[9] !== o || n[10] !== r || n[11] !== u
    ? ((S = r({ activePicker: o, setActivePicker: l, pageContainer: u })),
      (n[9] = o),
      (n[10] = r),
      (n[11] = u),
      (n[12] = S))
    : (S = n[12]);
  let C;
  n[13] === S
    ? (C = n[14])
    : ((C = (0, Y.jsx)(`div`, { className: `flex min-w-0 flex-col items-stretch select-none`, children: S })),
      (n[13] = S),
      (n[14] = C));
  let T;
  n[15] !== y || n[16] !== C
    ? ((T = (0, Y.jsxs)(`div`, { hidden: y, children: [x, C] })), (n[15] = y), (n[16] = C), (n[17] = T))
    : (T = n[17]);
  let E = o == null,
    D;
  n[18] === E ? (D = n[19]) : ((D = (0, Y.jsx)(`div`, { ref: d, hidden: E })), (n[18] = E), (n[19] = D));
  let O;
  n[20] !== p || n[21] !== T || n[22] !== D || n[23] !== _
    ? ((O = (0, Y.jsxs)(i, {
        "aria-label": p,
        align: `end`,
        side: `top`,
        variant: `menu`,
        size: `workspace`,
        onEscapeKeyDown: _,
        children: [T, D],
      })),
      (n[20] = p),
      (n[21] = T),
      (n[22] = D),
      (n[23] = _),
      (n[24] = O))
    : (O = n[24]);
  let k;
  return (
    n[25] !== O || n[26] !== g
      ? ((k = (0, Y.jsxs)(v, { onOpenChange: m, children: [g, O] })), (n[25] = O), (n[26] = g), (n[27] = k))
      : (k = n[27]),
    k
  );
}
function ot(e) {
  let n = (0, st.c)(28),
    { triggerButton: r, children: i, label: a, onOpenChange: o, navigation: s } = e,
    c = w(),
    l = (0, ct.useId)(),
    u;
  n[0] !== l || n[1] !== s
    ? ((u = (e) => {
        e ?? s.setActivePicker((e) => (e?.id === l ? null : e));
      }),
      (n[0] = l),
      (n[1] = s),
      (n[2] = u))
    : (u = n[2]);
  let f = ie(u),
    p;
  n[3] !== l || n[4] !== s || n[5] !== o
    ? ((p = () => {
        (s.setActivePicker(null), o(!1), requestAnimationFrame(() => document.getElementById(l)?.focus()));
      }),
      (n[3] = l),
      (n[4] = s),
      (n[5] = o),
      (n[6] = p))
    : (p = n[6]);
  let m = p,
    h;
  n[7] !== m || n[8] !== l || n[9] !== s || n[10] !== o
    ? ((h = () => {
        (s.setActivePicker({ id: l, close: m }), o(!0));
      }),
      (n[7] = m),
      (n[8] = l),
      (n[9] = s),
      (n[10] = o),
      (n[11] = h))
    : (h = n[11]);
  let g;
  n[12] !== l || n[13] !== h || n[14] !== r || n[15] !== f
    ? ((g = (0, ct.cloneElement)(r, { id: l, ref: f, onClick: h })),
      (n[12] = l),
      (n[13] = h),
      (n[14] = r),
      (n[15] = f),
      (n[16] = g))
    : (g = n[16]);
  let _;
  n[17] !== i ||
  n[18] !== m ||
  n[19] !== l ||
  n[20] !== c ||
  n[21] !== a ||
  n[22] !== s.activePicker?.id ||
  n[23] !== s.pageContainer
    ? ((_ =
        s.activePicker?.id === l && s.pageContainer != null
          ? (0, J.createPortal)(
              (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-1 select-none`,
                role: `group`,
                children: [
                  (0, Y.jsxs)(t, {
                    color: `ghost`,
                    size: `composerAuxiliary`,
                    radius: `large`,
                    onClick: m,
                    "aria-label": c.formatMessage({
                      id: `composer.newTask.backToSettings`,
                      defaultMessage: `Back to chat settings`,
                      description: `Return from the branch or environment picker to the new chat settings without changing the selection`,
                    }),
                    children: [(0, Y.jsx)(d, {}), (0, Y.jsx)(`span`, { children: a })],
                  }),
                  i(m),
                ],
              }),
              s.pageContainer,
            )
          : null),
      (n[17] = i),
      (n[18] = m),
      (n[19] = l),
      (n[20] = c),
      (n[21] = a),
      (n[22] = s.activePicker?.id),
      (n[23] = s.pageContainer),
      (n[24] = _))
    : (_ = n[24]);
  let v;
  return (
    n[25] !== g || n[26] !== _
      ? ((v = (0, Y.jsxs)(Y.Fragment, { children: [g, _] })), (n[25] = g), (n[26] = _), (n[27] = v))
      : (v = n[27]),
    v
  );
}
var st, ct, J, Y;
function X() {
  return (X = e(() => {
    ((st = I()), (ct = R()), (J = oe()), N(), F(), r(), y(), C(), k(), (Y = L()));
  }))();
}
function lt(e) {
  let n = (0, ht.c)(70),
    {
      startingState: r,
      presentation: i,
      taskOptions: a,
      setStartingState: o,
      hostConfig: s,
      className: l,
      side: u,
      gitRootOverride: d,
      branchSource: f,
    } = e,
    p = i === void 0 ? `inline` : i,
    m = u === void 0 ? `top` : u,
    h = w(),
    [g, _] = (0, gt.useState)(!1),
    [v, y] = (0, gt.useState)(!1),
    [x, S] = (0, gt.useState)(``),
    C = he(),
    E;
  n[0] === v ? (E = n[1]) : ((E = { enabled: v }), (n[0] = v), (n[1] = E));
  let D = Pe(E),
    O = d ?? D,
    k = me(C),
    A;
  n[2] === h
    ? (A = n[3])
    : ((A = h.formatMessage({
        id: `codex.composer.searchStartingBranches`,
        defaultMessage: `Search branches…`,
        description: `Placeholder for searching available starting branches`,
      })),
      (n[2] = h),
      (n[3] = A));
  let j = A,
    M;
  n[4] === h
    ? (M = n[5])
    : ((M = h.formatMessage({
        id: `composer.remote.retryLoadingBranches`,
        defaultMessage: `Retry loading branches`,
        description: `Tooltip and accessible label for the button that retries a failed branch search in the starting branch picker`,
      })),
      (n[4] = h),
      (n[5] = M));
  let te = M,
    N = f === `worktree`,
    F = N ? (d ?? null) : null,
    I;
  n[6] !== s || n[7] !== F
    ? ((I = { gitRoot: F, hostConfig: s }), (n[6] = s), (n[7] = F), (n[8] = I))
    : (I = n[8]);
  let L = se(ye, I),
    ie = N && r.type === `branch` ? r.branchName : (k?.default_branch ?? `main`),
    oe = k?.id ?? null,
    R;
  n[9] === d ? (R = n[10]) : ((R = d == null ? [] : [d]), (n[9] = d), (n[10] = R));
  let z;
  n[11] !== s.id || n[12] !== R
    ? ((z = { params: { dirs: R, hostId: s.id }, source: `async_task_starting_state_dropdown` }),
      (n[11] = s.id),
      (n[12] = R),
      (n[13] = z))
    : (z = n[13]);
  let le = !N && v,
    B;
  n[14] === le ? (B = n[15]) : ((B = { enabled: le }), (n[14] = le), (n[15] = B));
  let { data: de } = se(ce, z, B),
    V = N || (k?.clone_url != null && d != null && Ne(k.clone_url, de?.origins) === d),
    H = T(ve),
    U = xe(x, 300),
    pe = x !== U,
    W;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        (e && y(!0), _(e), e || S(``));
      }),
      (n[16] = W))
    : (W = n[16]);
  let G = W,
    ge = !V && !!oe && g && !!U,
    _e;
  n[17] === ge ? (_e = n[18]) : ((_e = { enabled: ge }), (n[17] = ge), (n[18] = _e));
  let {
      data: Se,
      isFetching: Ce,
      error: we,
      hasNextPage: Te,
      isFetchingNextPage: Ee,
      fetchNextPage: ke,
      refetch: Ae,
    } = fe(oe, U, _e),
    je = V && v,
    Fe;
  n[19] !== H || n[20] !== je
    ? ((Fe = { enabled: je, retainRepoWatch: H }), (n[19] = H), (n[20] = je), (n[21] = Fe))
    : (Fe = n[21]);
  let { data: Ie, isLoading: Le, refetch: Re } = Me(O, s, `async_task_starting_state_dropdown`, Fe),
    ze = N && v && O != null,
    Be;
  n[22] !== H || n[23] !== ze
    ? ((Be = { enabled: ze, retainRepoWatch: H }), (n[22] = H), (n[23] = ze), (n[24] = Be))
    : (Be = n[24]);
  let { data: He } = Ye(O, s, `async_task_starting_state_dropdown`, Be),
    We = V && v && !!O,
    Ge;
  n[25] !== H || n[26] !== We
    ? ((Ge = { enabled: We, retainRepoWatch: H }), (n[25] = H), (n[26] = We), (n[27] = Ge))
    : (Ge = n[27]);
  let { data: Ke } = Ue(O, s, `async_task_starting_state_dropdown`, Ge),
    {
      branches: qe,
      defaultBranch: Je,
      fetching: Xe,
      error: Ze,
      refetch: Qe,
    } = ft({ gitRoot: O, hostConfig: s, currentBranch: Ie ?? ie, remoteDefaultBranch: ie, enabled: V && v }),
    $e = x.trim().toLowerCase(),
    q = $e.length > 0,
    et = V && g && q && !pe,
    tt;
  n[28] !== U || n[29] !== O || n[30] !== s || n[31] !== N || n[32] !== et
    ? ((tt = {
        cwd: O,
        hostConfig: s,
        operationSource: `async_task_starting_state_dropdown`,
        preserveRemoteRefs: N,
        query: U,
        enabled: et,
      }),
      (n[28] = U),
      (n[29] = O),
      (n[30] = s),
      (n[31] = N),
      (n[32] = et),
      (n[33] = tt))
    : (tt = n[33]);
  let { data: nt, isFetching: rt, error: it, refetch: at } = se(Ve, tt),
    st = pe ? void 0 : nt?.branches,
    ct = r.type === `branch` ? (r.remoteRef ?? r.branchName) : void 0,
    J = V ? Je : ie,
    Y = He?.local,
    X = N && He?.remote != null && Y != null ? `${He.remote}/${Y}` : null,
    lt = V ? (q ? st : qe) : q && !pe ? Se?.filter((e) => e.toLowerCase().includes($e)) : void 0,
    pt = !q || J.toLowerCase().includes($e),
    mt = lt?.filter((e) => e !== J),
    _t = N && q && !pe ? (nt?.remoteBranchRefs ?? []) : [],
    vt = N && _t.length > 0,
    yt = V ? (q ? rt : Xe) : Ce,
    Q = V ? (q ? it : Ze) : we,
    bt = V ? (q ? at : Qe) : Ae,
    xt = !V && Te,
    St = Ie ?? J;
  r.type === `branch` && r.branchName;
  let Ct = Ke?.type === `success` && Ke.stagedCount + Ke.unstagedCount + (Ke.untrackedCount ?? 0) > 0,
    wt = V && Ct && (!q || St.toLowerCase().includes($e));
  r.type;
  let Tt =
      r.type === `branch` && X != null && r.branchName === Y && r.remoteRef === `refs/remotes/${X}`
        ? X
        : null,
    Et =
      r.type === `working-tree`
        ? (0, Z.jsx)(c, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: Ie ?? J },
          })
        : (Tt ??
          (0, Z.jsx)(c, {
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
  n[36] === h
    ? (Ot = n[37])
    : ((Ot = h.formatMessage({
        id: `composer.remote.branchStartingPoint`,
        defaultMessage: `What branch should this chat start from?`,
        description: `Section label for branch starting point selector`,
      })),
      (n[36] = h),
      (n[37] = Ot));
  let kt = Ot,
    At,
    jt;
  (n[38] !== g || n[39] !== Re || n[40] !== Qe || n[41] !== V
    ? ((At = () => {
        g && (Re(), V && Qe());
      }),
      (jt = [g, Re, Qe, V]),
      (n[38] = g),
      (n[39] = Re),
      (n[40] = Qe),
      (n[41] = V),
      (n[42] = At),
      (n[43] = jt))
    : ((At = n[42]), (jt = n[43])),
    (0, gt.useEffect)(At, jt));
  let Mt;
  n[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (0, Z.jsx)(c, {
        id: `composer.worktreeOptions.branch`,
        defaultMessage: `Branch`,
        description: `Label for the starting branch selector in the compact task options menu`,
      })),
      (n[44] = Mt))
    : (Mt = n[44]);
  let Nt;
  n[45] === l ? (Nt = n[46]) : ((Nt = ee(`whitespace-nowrap`, l)), (n[45] = l), (n[46] = Nt));
  let Pt = r.type === `working-tree` && Ct,
    Ft;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ft = (0, Z.jsx)(ae, { className: `icon-xs` })), (n[47] = Ft))
    : (Ft = n[47]);
  let It;
  n[48] === Pt
    ? (It = n[49])
    : ((It = (0, Z.jsx)(ue, { borderColor: `border-surface-secondary`, badgeEnabled: Pt, children: Ft })),
      (n[48] = Pt),
      (n[49] = It));
  let Lt;
  n[50] !== Dt || n[51] !== p || n[52] !== kt || n[53] !== Nt || n[54] !== It
    ? ((Lt = (0, Z.jsx)(De, {
        "aria-label": kt,
        "data-composer-navigation-target": `starting-state`,
        categoryLabel: null,
        presentation: p,
        menuCategoryLabel: Mt,
        className: Nt,
        collapse: `secondary`,
        icon: It,
        indicator: `collapsible-chevron`,
        value: Dt,
        valueClassName: `max-w-40`,
      })),
      (n[50] = Dt),
      (n[51] = p),
      (n[52] = kt),
      (n[53] = Nt),
      (n[54] = It),
      (n[55] = Lt))
    : (Lt = n[55]);
  let Rt = Lt,
    zt = (e) =>
      (0, Z.jsx)(K.Root, {
        label: j,
        children: (0, Z.jsxs)(`div`, {
          className: ee(`flex flex-col gap-1.5 overflow-hidden`, p === `menu` ? `w-full` : `w-72`),
          children: [
            (0, Z.jsx)(K.Input, {
              placeholder: j,
              value: x,
              onValueChange: S,
              onKeyDown: (e) => {
                e.key === `Enter` && pe && e.preventDefault();
              },
            }),
            p === `menu` ? (0, Z.jsx)(b.Separator, {}) : null,
            (0, Z.jsx)(`div`, {
              className: `vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-1.5 overflow-y-auto`,
              children: (0, Z.jsxs)(K.List, {
                children: [
                  wt
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex flex-col`,
                        children: [
                          (0, Z.jsx)(b.SectionLabel, {
                            children: (0, Z.jsx)(c, {
                              id: `composer.remote.localFileStateHeading`,
                              defaultMessage: `Local file state`,
                              description: `Section heading for local working tree selection`,
                            }),
                          }),
                          (0, Z.jsx)(K.Item, {
                            LeftIcon: ut,
                            RightIcon: r.type === `working-tree` ? P : void 0,
                            tooltipText: St,
                            tooltipOpenWhen: `trigger-overflows`,
                            tooltipSide: p === `menu` ? `left` : void 0,
                            value: `working-tree:${St}`,
                            onSelect: () => {
                              (o({ type: `working-tree` }), e());
                            },
                            children: (0, Z.jsxs)(`div`, {
                              className: `flex flex-col`,
                              children: [
                                Le ? null : (0, Z.jsx)(Z.Fragment, { children: Ie ?? J }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-codex-description`,
                                  children: (0, Z.jsx)(c, {
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
                  X != null && Y != null && (!q || X.toLowerCase().includes($e))
                    ? (0, Z.jsx)(K.Item, {
                        LeftIcon: ae,
                        RightIcon: Tt == null ? void 0 : P,
                        value: X,
                        onSelect: () => {
                          (o({ type: `branch`, branchName: Y, remoteRef: `refs/remotes/${X}` }), e());
                        },
                        children: X,
                      })
                    : null,
                  (0, Z.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      (0, Z.jsx)(b.SectionLabel, {
                        children: N
                          ? (0, Z.jsx)(c, {
                              id: `composer.remote.localBranchesSectionHeading`,
                              defaultMessage: `Local branches`,
                              description: `Section heading for local branch search results`,
                            })
                          : (0, Z.jsx)(c, {
                              id: `composer.remote.branchesSectionHeading`,
                              defaultMessage: `Branches`,
                              description: `Section heading for remote branch search results`,
                            }),
                      }),
                      U && yt
                        ? (0, Z.jsx)(`div`, {
                            className: `flex h-full items-center justify-center`,
                            children: (0, Z.jsx)(ne, { className: `icon-xxs` }),
                          })
                        : L.error != null || (U && Q)
                          ? (0, Z.jsxs)(`div`, {
                              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-danger`,
                              children: [
                                (0, Z.jsx)(c, {
                                  id: `composer.remote.errorLoadingBranches`,
                                  defaultMessage: `Error loading branches`,
                                  description: `Error message for remote starting point selector`,
                                }),
                                (0, Z.jsx)(re, {
                                  cloneCustomTrigger: !0,
                                  tooltipContent: te,
                                  children: (0, Z.jsx)(t, {
                                    className: `text-codex-description`,
                                    "aria-label": te,
                                    color: `ghost`,
                                    size: `icon`,
                                    onClick: () => {
                                      (bt(), L.refetch?.());
                                    },
                                    children: (0, Z.jsx)(be, { className: `icon-xxs` }),
                                  }),
                                }),
                              ],
                            })
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                pt &&
                                  (0, Z.jsx)(K.Item, {
                                    LeftIcon: ae,
                                    RightIcon: ct === J ? P : void 0,
                                    tooltipText: J,
                                    tooltipOpenWhen: `trigger-overflows`,
                                    tooltipSide: p === `menu` ? `left` : void 0,
                                    value: J,
                                    onSelect: () => {
                                      (o({ type: `branch`, branchName: J }), e());
                                    },
                                    children: J,
                                  }),
                                mt?.map((t) =>
                                  (0, Z.jsx)(
                                    K.Item,
                                    {
                                      LeftIcon: ae,
                                      RightIcon: t === ct ? P : void 0,
                                      tooltipText: t,
                                      tooltipOpenWhen: `trigger-overflows`,
                                      tooltipSide: p === `menu` ? `left` : void 0,
                                      value: t,
                                      onSelect: () => {
                                        (o({ type: `branch`, branchName: t }), e());
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
                          (0, Z.jsx)(b.SectionLabel, {
                            className: `mt-1`,
                            children: (0, Z.jsx)(c, {
                              id: `composer.remote.remoteBranchesSectionHeading`,
                              defaultMessage: `Remote branches`,
                              description: `Section heading for fetched remote branch search results`,
                            }),
                          }),
                          _t.map((t) =>
                            (0, Z.jsx)(
                              K.Item,
                              {
                                LeftIcon: ae,
                                RightIcon: t === ct ? P : void 0,
                                tooltipText: dt(t),
                                tooltipOpenWhen: `trigger-overflows`,
                                tooltipSide: p === `menu` ? `left` : void 0,
                                value: t,
                                onSelect: () => {
                                  (o({ type: `branch`, branchName: dt(t), remoteRef: t }), e());
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
                    (0, Z.jsx)(K.Action, {
                      onClick: () => {
                        Ee || ke();
                      },
                      children: Ee
                        ? (0, Z.jsx)(c, {
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
  if (p === `menu` && a != null) {
    let e;
    return (
      n[56] === h
        ? (e = n[57])
        : ((e = h.formatMessage({
            id: `composer.worktreeOptions.branch`,
            defaultMessage: `Branch`,
            description: `Label for the starting branch selector in the task options menu`,
          })),
          (n[56] = h),
          (n[57] = e)),
      (0, Z.jsx)(ot, { navigation: a, triggerButton: Rt, label: e, onOpenChange: G, children: zt })
    );
  }
  let Bt = Oe,
    Vt;
  n[58] !== kt || n[59] !== Rt
    ? ((Vt = (0, Z.jsx)(re, { tooltipContent: kt, children: Rt })), (n[58] = kt), (n[59] = Rt), (n[60] = Vt))
    : (Vt = n[60]);
  let Ht;
  n[61] === G ? (Ht = n[62]) : ((Ht = () => G(!1)), (n[61] = G), (n[62] = Ht));
  let Ut = zt(Ht),
    Wt;
  return (
    n[63] !== Bt || n[64] !== g || n[65] !== G || n[66] !== m || n[67] !== Vt || n[68] !== Ut
      ? ((Wt = (0, Z.jsx)(Bt, { side: m, open: g, onOpenChange: G, triggerButton: Vt, children: Ut })),
        (n[63] = Bt),
        (n[64] = g),
        (n[65] = G),
        (n[66] = m),
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
      : ((r = (0, Z.jsx)(ue, {
          borderColor: `border-surface-secondary`,
          children: (0, Z.jsx)(ae, { className: n }),
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
    s = T(ve),
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
    } = Te(n, r, `async_task_starting_state_dropdown`, c),
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
    } = Xe(n, r, `async_task_starting_state_dropdown`, m),
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
  let E = w,
    D;
  return (
    t[14] !== b || t[15] !== x || t[16] !== C || t[17] !== S || t[18] !== E
      ? ((D = { branches: b, defaultBranch: x, fetching: S, error: C, refetch: E }),
        (t[14] = b),
        (t[15] = x),
        (t[16] = C),
        (t[17] = S),
        (t[18] = E),
        (t[19] = D))
      : (D = t[19]),
    D
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
    ((ht = I()),
      D(),
      g(),
      (gt = R()),
      N(),
      de(),
      le(),
      F(),
      Ee(),
      r(),
      M(),
      A(),
      Le(),
      H(),
      Ze(),
      je(),
      Ae(),
      Qe(),
      We(),
      O(),
      te(),
      W(),
      pe(),
      Fe(),
      G(),
      Ce(),
      ke(),
      X(),
      _e(),
      (Z = L()));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(10),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ presentation: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r === void 0 ? `inline` : r,
    a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(c, {
        id: `composer.footer.branchSwitch.detachedHead`,
        defaultMessage: `Detached HEAD`,
        description: `Label shown when the current Git checkout is not on a branch`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => {
        let { currentBranch: t } = e;
        return (0, Q.jsx)(tt, {
          categoryLabel: null,
          className: `text-codex-description`,
          collapse: `sm`,
          icon: (0, Q.jsx)(f, { "aria-hidden": !1, asset: S }),
          value: t ?? o,
          valueClassName: `max-w-40 text-sm`,
        });
      }),
      (t[4] = s))
    : (s = t[4]);
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = (e) => {
        let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: a } = e,
          s = `collapsible-chevron`;
        return (
          r && (s = t === void 0 ? `none` : `pending`),
          (0, Q.jsx)(De, {
            presentation: i,
            menuCategoryLabel: (0, Q.jsx)(c, {
              id: `composer.worktreeOptions.branch`,
              defaultMessage: `Branch`,
              description: `Label for the branch selector in the compact task options menu`,
            }),
            "aria-label": a,
            "data-composer-navigation-target": `branch`,
            categoryLabel: null,
            className: `px-0`,
            collapse: `sm`,
            disabled: n,
            icon: (0, Q.jsx)(f, { "aria-hidden": !1, asset: S }),
            indicator: s,
            value:
              t === void 0
                ? (0, Q.jsx)(c, {
                    id: `composer.footer.branchSwitch.loading`,
                    defaultMessage: `Loading branch…`,
                    description: `Label shown while loading the current Git branch in the composer utility bar`,
                  })
                : (t ?? o),
            valueClassName: `max-w-40 text-sm`,
          })
        );
      }),
      (t[5] = i),
      (t[6] = l));
  let u;
  return (
    t[7] !== n || t[8] !== l
      ? ((u = (0, Q.jsx)(He, { ...n, renderWhileLoading: !0, renderStaticBranch: s, renderControl: l })),
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
    ((yt = I()), E(), N(), m(), Be(), ke(), it(), (Q = L()));
  }))();
}
function xt(e) {
  let t = (0, Tt.c)(59),
    {
      className: r,
      disabled: i,
      presentation: s,
      taskOptions: u,
      labelClassName: d,
      environments: p,
      isLoading: m,
      hasError: g,
      side: _,
      align: v,
      showIcon: y,
      selectedConfigPath: S,
      repairConfigPath: C,
      onSelectConfigPath: T,
      onOpenSettings: E,
      workspaceRoot: D,
      showDefaultOption: O,
      onResetSelection: k,
    } = e,
    A = i !== void 0 && i,
    j = s === void 0 ? `inline` : s,
    M = _ === void 0 ? `top` : _,
    te = v === void 0 ? `start` : v,
    N = y === void 0 || y,
    P = O === void 0 || O,
    F = w(),
    [I, L] = (0, Et.useState)(!1),
    [ie, ae] = (0, Et.useState)(``),
    oe,
    R;
  if (
    t[0] !== te ||
    t[1] !== r ||
    t[2] !== A ||
    t[3] !== p ||
    t[4] !== g ||
    t[5] !== F ||
    t[6] !== m ||
    t[7] !== d ||
    t[8] !== E ||
    t[9] !== k ||
    t[10] !== T ||
    t[11] !== I ||
    t[12] !== j ||
    t[13] !== C ||
    t[14] !== ie ||
    t[15] !== S ||
    t[16] !== P ||
    t[17] !== N ||
    t[18] !== M ||
    t[19] !== u ||
    t[20] !== D
  ) {
    R = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = p.filter(St),
        i = V(e),
        s;
      t[23] === S ? (s = t[24]) : ((s = S ? a(S) : null), (t[23] = S), (t[24] = s));
      let _ = s,
        v;
      t[25] !== _ || t[26] !== C ? ((v = C ? a(C) : _), (t[25] = _), (t[26] = C), (t[27] = v)) : (v = t[27]);
      let y = v,
        w = p.find((e) => a(e.configPath) === y) ?? null,
        O = !m && !g,
        se = i && P ? e.filter((e) => a(e.configPath) !== a(i.configPath)) : e,
        z = wt({ isLoading: m, environmentResult: w });
      if (k != null && S != null && w == null && !m) {
        let e;
        (t[28] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `composer.worktreeEnvironment.unavailableSelection`,
              defaultMessage: `Selected environment unavailable`,
              description: `The saved environment is missing and will not be replaced automatically`,
            })),
            (t[28] = e))
          : (e = t[28]),
          (z = e));
      }
      let ce = O && p.length === 0,
        le;
      t[29] === F
        ? (le = t[30])
        : ((le = F.formatMessage({
            id: `composer.worktreeEnvironment.tooltip`,
            defaultMessage: `Select a local environment`,
            description: `Tooltip for local environment selector`,
          })),
          (t[29] = F),
          (t[30] = le));
      let B = le,
        ue;
      t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((ue = (0, $.jsx)(c, {
            id: `composer.worktreeOptions.environment`,
            defaultMessage: `Environment`,
            description: `Label for the setup environment selector in the compact task options menu`,
          })),
          (t[31] = ue))
        : (ue = t[31]);
      let de;
      t[32] === r ? (de = t[33]) : ((de = ee(`whitespace-nowrap`, r)), (t[32] = r), (t[33] = de));
      let fe = d == null ? `secondary` : `sm`,
        H;
      t[34] === N
        ? (H = t[35])
        : ((H = N ? (0, $.jsx)(f, { "aria-hidden": !1, asset: l }) : null), (t[34] = N), (t[35] = H));
      let U = m ? `none` : `collapsible-chevron`,
        pe = z,
        me;
      t[36] === d ? (me = t[37]) : ((me = ee(`max-w-40`, d)), (t[36] = d), (t[37] = me));
      let W;
      t[38] !== A ||
      t[39] !== z ||
      t[40] !== j ||
      t[41] !== B ||
      t[42] !== de ||
      t[43] !== fe ||
      t[44] !== H ||
      t[45] !== U ||
      t[46] !== me
        ? ((W = (0, $.jsx)(De, {
            "aria-label": B,
            "data-composer-navigation-target": `environment`,
            categoryLabel: null,
            presentation: j,
            disabled: A,
            menuCategoryLabel: ue,
            className: de,
            collapse: fe,
            icon: H,
            indicator: U,
            value: pe,
            valueClassName: me,
          })),
          (t[38] = A),
          (t[39] = z),
          (t[40] = j),
          (t[41] = B),
          (t[42] = de),
          (t[43] = fe),
          (t[44] = H),
          (t[45] = U),
          (t[46] = me),
          (t[47] = W))
        : (W = t[47]);
      let G = W;
      if (A) {
        let e = j === `menu` ? `left` : void 0,
          n;
        t[48] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(c, {
              id: `composer.worktreeEnvironment.enableWorktreeHint`,
              defaultMessage: `Enable worktree to choose an environment`,
              description: `Explains why the environment selector is disabled while New worktree is turned off`,
            })),
            (t[48] = n))
          : (n = t[48]);
        let r;
        (t[49] !== e || t[50] !== G
          ? ((r = (0, $.jsx)(re, { side: e, tooltipContent: n, children: G })),
            (t[49] = e),
            (t[50] = G),
            (t[51] = r))
          : (r = t[51]),
          (R = r));
        break bb0;
      }
      let he = j === `menu` ? K.Item : b.Item,
        ge = (t) =>
          (0, $.jsxs)(`div`, {
            className: ee(`flex flex-col overflow-hidden`, j === `menu` ? `w-full` : `w-64`),
            children: [
              j === `inline`
                ? (0, $.jsx)(b.Title, {
                    children:
                      D == null
                        ? (0, $.jsx)(c, {
                            id: `composer.worktreeEnvironment.title`,
                            defaultMessage: `Environment`,
                            description: `Title for worktree environment dropdown`,
                          })
                        : (0, $.jsx)(Ct, { workspaceRoot: D }),
                  })
                : null,
              (0, $.jsxs)(`div`, {
                className: `vertical-scroll-fade-mask max-h-[220px] overflow-y-auto`,
                children: [
                  k == null
                    ? null
                    : (0, $.jsx)(he, {
                        onSelect: () => {
                          (k(), t());
                        },
                        children: (0, $.jsx)(c, {
                          id: `composer.worktreeEnvironment.reset`,
                          defaultMessage: `Reset environment`,
                          description: `Clear the saved environment choice and work without an environment until one is selected`,
                        }),
                      }),
                  O
                    ? (0, $.jsx)(he, {
                        RightIcon: S == null && C == null ? x : void 0,
                        onSelect: () => {
                          (T(null), t());
                        },
                        children: (0, $.jsx)(c, {
                          id: `composer.worktreeEnvironment.noEnvironmentOption`,
                          defaultMessage: `Work without environment`,
                          description: `Option in the worktree environment dropdown that runs without selecting a local environment`,
                        }),
                      })
                    : null,
                  P && i && Ke(i).toLocaleLowerCase().includes(ie.trim().toLocaleLowerCase())
                    ? (0, $.jsx)(he, {
                        RightIcon: _ != null && a(i.configPath) === _ ? x : void 0,
                        onSelect: () => {
                          (T(i.configPath), t());
                        },
                        children: (0, $.jsxs)(`div`, {
                          className: `flex min-w-0 items-center gap-2`,
                          children: [
                            (0, $.jsx)(re, {
                              side: j === `menu` ? `left` : void 0,
                              tooltipContent: (0, $.jsx)(c, {
                                id: `composer.worktreeEnvironment.default`,
                                defaultMessage: `Default environment`,
                                description: `Tooltip for default local environment icon`,
                              }),
                              children: (0, $.jsx)(f, {
                                className: `shrink-0 text-codex-description`,
                                "aria-hidden": !1,
                                asset: h,
                              }),
                            }),
                            (0, $.jsx)(`span`, { className: `truncate`, children: Ke(i) }),
                          ],
                        }),
                      })
                    : null,
                  m
                    ? (0, $.jsx)(`div`, {
                        className: `flex items-center justify-center py-4`,
                        children: (0, $.jsx)(ne, { className: `icon-xxs` }),
                      })
                    : g
                      ? (0, $.jsx)(b.Message, {
                          compact: !0,
                          tone: `error`,
                          children: (0, $.jsx)(c, {
                            id: `composer.worktreeEnvironment.error`,
                            defaultMessage: `Error loading environments`,
                            description: `Error state for worktree environment dropdown`,
                          }),
                        })
                      : se.length > 0
                        ? (0, $.jsx)(`div`, {
                            className: `flex flex-col`,
                            children: se
                              .filter((e) =>
                                Ke(e).toLocaleLowerCase().includes(ie.trim().toLocaleLowerCase()),
                              )
                              .map((e) => {
                                let n = S != null && a(e.configPath) === _;
                                return (0, $.jsx)(
                                  he,
                                  {
                                    RightIcon: n ? x : void 0,
                                    onSelect: () => {
                                      (T(e.configPath), t());
                                    },
                                    children: (0, $.jsx)(`span`, {
                                      className: `min-w-0 truncate`,
                                      children: Ke(e),
                                    }),
                                  },
                                  e.configPath,
                                );
                              }),
                          })
                        : p.length > 0 && e.length === 0
                          ? (0, $.jsx)(b.Message, {
                              compact: !0,
                              tone: `error`,
                              children: (0, $.jsx)(c, { ...qe.needsAttention }),
                            })
                          : null,
                  (0, $.jsx)(he, {
                    LeftIcon: n,
                    onSelect: () => {
                      (E(C ?? void 0), t());
                    },
                    children: ce
                      ? (0, $.jsx)(c, {
                          id: `composer.worktreeEnvironment.setUpProject`,
                          defaultMessage: `Set up project`,
                          description: `Action to configure reusable setup for a project without a worktree environment`,
                        })
                      : (0, $.jsx)(c, {
                          id: `composer.worktreeEnvironment.settings`,
                          defaultMessage: `Environment settings`,
                          description: `CTA to open local environment settings from the worktree dropdown`,
                        }),
                  }),
                ],
              }),
            ],
          });
      if (j === `menu` && u != null) {
        let e;
        t[52] === F
          ? (e = t[53])
          : ((e = F.formatMessage({
              id: `composer.worktreeOptions.environment`,
              defaultMessage: `Environment`,
              description: `Label for the setup environment selector in the task options menu`,
            })),
            (t[52] = F),
            (t[53] = e));
        let n;
        (t[54] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (e) => {
              (L(e), e || ae(``));
            }),
            (t[54] = n))
          : (n = t[54]),
          (R = (0, $.jsx)(ot, {
            navigation: u,
            triggerButton: G,
            label: e,
            onOpenChange: n,
            children: (e) =>
              (0, $.jsxs)(K.Root, {
                label: B,
                children: [
                  (0, $.jsx)(K.Input, {
                    placeholder: F.formatMessage({
                      id: `composer.worktreeEnvironment.search`,
                      defaultMessage: `Search environments…`,
                      description: `Search the local setup environments available for the new task`,
                    }),
                    value: ie,
                    onValueChange: ae,
                  }),
                  (0, $.jsx)(b.Separator, {}),
                  (0, $.jsx)(K.List, { children: ge(e) }),
                ],
              }),
          })));
        break bb0;
      }
      let _e;
      t[55] !== ce || t[56] !== G
        ? ((_e = ce
            ? (0, $.jsx)(re, {
                cloneCustomTrigger: !0,
                tooltipContent: (0, $.jsx)(c, {
                  id: `composer.worktreeEnvironment.projectSetupDescription`,
                  defaultMessage: `Give Codex access to your project’s full dependencies and setup`,
                  description: `Explains that project setup gives Codex access to project dependencies and setup`,
                }),
                children: G,
              })
            : G),
          (t[55] = ce),
          (t[56] = G),
          (t[57] = _e))
        : (_e = t[57]);
      let ve;
      (t[58] === Symbol.for(`react.memo_cache_sentinel`) ? ((ve = () => L(!1)), (t[58] = ve)) : (ve = t[58]),
        (oe = (0, $.jsx)(o, {
          open: I,
          onOpenChange: L,
          side: M,
          align: te,
          triggerButton: _e,
          children: ge(ve),
        })));
    }
    ((t[0] = te),
      (t[1] = r),
      (t[2] = A),
      (t[3] = p),
      (t[4] = g),
      (t[5] = F),
      (t[6] = m),
      (t[7] = d),
      (t[8] = E),
      (t[9] = k),
      (t[10] = T),
      (t[11] = I),
      (t[12] = j),
      (t[13] = C),
      (t[14] = ie),
      (t[15] = S),
      (t[16] = P),
      (t[17] = N),
      (t[18] = M),
      (t[19] = u),
      (t[20] = D),
      (t[21] = oe),
      (t[22] = R));
  } else ((oe = t[21]), (R = t[22]));
  return R === Symbol.for(`react.early_return_sentinel`) ? oe : R;
}
function St(e) {
  return e.type === `success`;
}
function Ct(e) {
  let t = (0, Tt.c)(5),
    { workspaceRoot: n } = e,
    r = T(Se);
  if (se(B, r).length > 1) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = Re(n)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, $.jsx)(c, {
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
      ? ((i = (0, $.jsx)(c, {
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
    ? (0, $.jsx)(c, {
        id: `composer.worktreeEnvironment.loading`,
        defaultMessage: `Loading environments…`,
        description: `Loading label for worktree environment dropdown`,
      })
    : t?.type === `error`
      ? (0, $.jsx)(c, { ...qe.needsAttention })
      : t?.type === `success`
        ? (0, $.jsx)($.Fragment, { children: t.environment.name })
        : (0, $.jsx)(c, {
            id: `codex.environmentSelector.noEnvironment`,
            defaultMessage: `No environment`,
            description: `No environment selected message`,
          });
}
var Tt, Et, $;
function Dt() {
  return (Dt = e(() => {
    ((Tt = I()),
      _(),
      p(),
      D(),
      g(),
      (Et = R()),
      N(),
      Ee(),
      r(),
      m(),
      y(),
      M(),
      A(),
      Ge(),
      Je(),
      z(),
      ge(),
      ze(),
      U(),
      u(),
      ke(),
      X(),
      ($ = L()));
  }))();
}
export { lt as a, X as c, bt as i, tt as l, Dt as n, _t as o, vt as r, at as s, xt as t, it as u };
//# sourceMappingURL=worktree-environment-dropdown-4472c8c4acdc.js.map
