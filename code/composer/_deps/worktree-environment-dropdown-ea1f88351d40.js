import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $N as n,
  AMt as r,
  Amn as i,
  B8 as a,
  Cpn as o,
  Cq as s,
  E6t as c,
  F3t as l,
  H4t as u,
  JG as d,
  JK as f,
  Jit as p,
  K0 as m,
  KG as ee,
  Kit as te,
  LX as h,
  MMt as g,
  N3t as ne,
  O3t as _,
  Opn as v,
  RX as y,
  Rpn as b,
  Spn as x,
  Sq as S,
  T6t as C,
  W0 as w,
  ZG as T,
  ZN as re,
  _ct as ie,
  bMt as E,
  ck as D,
  dpt as O,
  fpt as k,
  gMt as A,
  gct as j,
  gq as ae,
  hMt as M,
  hmn as N,
  jMt as oe,
  kMt as se,
  kmn as P,
  lk as F,
  njt as I,
  q4t as L,
  qK as R,
  qqt as z,
  rJt as B,
  rjt as V,
  rq as H,
  tP as U,
  yMt as W,
  z8 as G,
  zpn as K,
} from "./app-initial-f094ef01c64d.js";
import {
  BT as ce,
  Ea as q,
  Ft as le,
  GT as ue,
  Gh as de,
  It as fe,
  Jh as pe,
  Js as me,
  Kh as he,
  Ta as ge,
  VT as _e,
  WT as ve,
  Xs as ye,
  Ys as J,
  cx as be,
  la as xe,
  qh as Se,
  ua as Ce,
  zt as we,
} from "./app-primary-4c40d73a1074.js";
import {
  c as Te,
  i as Ee,
  l as De,
  n as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
} from "./environment-labels-655533fc7a67.js";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./use-git-recent-branches-4fc6d636eb07.js";
import { lt as Le, ut as Re } from "./git-branch-picker-dropdown-content-16bc93de7d03.js";
import { n as ze, t as Be } from "./local-environment-workflow-messages-6e2a4950d847.js";
function Ve(e) {
  let t = (0, qe.c)(79),
    {
      startingState: n,
      setStartingState: r,
      hostConfig: i,
      className: a,
      side: c,
      gitRootOverride: u,
      branchSource: d,
    } = e,
    f = c === void 0 ? `top` : c,
    p = v(),
    [m, ee] = (0, Je.useState)(!1),
    [h, g] = (0, Je.useState)(!1),
    [_, y] = (0, Je.useState)(``),
    x = U(),
    S;
  t[0] === h ? (S = t[1]) : ((S = { enabled: h }), (t[0] = h), (t[1] = S));
  let C = we(S),
    w = u ?? C,
    T = re(x),
    ie = Le(w ?? T?.clone_url ?? ``),
    E = p.formatMessage(
      {
        id: `codex.composer.searchRepositoryBranches`,
        defaultMessage: `Search {repoName} branches`,
        description: `Placeholder for searching branches in the primary repository`,
      },
      { repoName: ie },
    ),
    O = d === `worktree`,
    k = O && n.type === `branch` ? n.branchName : (T?.default_branch ?? `main`),
    A = T?.id ?? null,
    M;
  t[2] === u ? (M = t[3]) : ((M = u == null ? [] : [u]), (t[2] = u), (t[3] = M));
  let N;
  t[4] !== i.id || t[5] !== M
    ? ((N = { params: { dirs: M, hostId: i.id }, source: `async_task_starting_state_dropdown` }),
      (t[4] = i.id),
      (t[5] = M),
      (t[6] = N))
    : (N = t[6]);
  let P = !O && h,
    F;
  t[7] === P ? (F = t[8]) : ((F = { enabled: P }), (t[7] = P), (t[8] = F));
  let { data: I } = ne(G, N, F),
    L = O || (T?.clone_url != null && u != null && le(T.clone_url, I?.origins) === u),
    z = l(V),
    B = s(_, 300),
    H = _ !== B,
    W;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        (e && g(!0), ee(e), e || y(``));
      }),
      (t[9] = W))
    : (W = t[9]);
  let K = W,
    ce = !L && !!A && m && !!B,
    q;
  t[10] === ce ? (q = t[11]) : ((q = { enabled: ce }), (t[10] = ce), (t[11] = q));
  let {
      data: fe,
      isFetching: pe,
      error: he,
      hasNextPage: ge,
      isFetchingNextPage: _e,
      fetchNextPage: ve,
      refetch: ye,
    } = ae(A, B, q),
    be = L && h,
    Se;
  t[12] !== z || t[13] !== be
    ? ((Se = { enabled: be, retainRepoWatch: z }), (t[12] = z), (t[13] = be), (t[14] = Se))
    : (Se = t[14]);
  let { data: Ce, isLoading: Ee, refetch: Oe } = ue(w, i, `async_task_starting_state_dropdown`, Se),
    ke = O && h && w != null,
    Ae;
  t[15] !== z || t[16] !== ke
    ? ((Ae = { enabled: ke, retainRepoWatch: z }), (t[15] = z), (t[16] = ke), (t[17] = Ae))
    : (Ae = t[17]);
  let { data: je } = Ne(w, i, `async_task_starting_state_dropdown`, Ae),
    Me = L && h && !!w,
    Pe;
  t[18] !== z || t[19] !== Me
    ? ((Pe = { enabled: Me, retainRepoWatch: z }), (t[18] = z), (t[19] = Me), (t[20] = Pe))
    : (Pe = t[20]);
  let { data: Fe } = Te(w, i, `async_task_starting_state_dropdown`, Pe),
    {
      branches: Ie,
      defaultBranch: Re,
      fetching: ze,
      error: Be,
      refetch: Ve,
    } = We({
      gitRoot: w,
      hostConfig: i,
      currentBranch: Ce ?? k,
      remoteDefaultBranch: k,
      enabled: L && h,
    }),
    Ke = _.trim().toLowerCase(),
    Y = Ke.length > 0,
    Ye = L && m && Y && !H,
    Xe;
  t[21] !== B || t[22] !== w || t[23] !== i || t[24] !== O || t[25] !== Ye
    ? ((Xe = {
        cwd: w,
        hostConfig: i,
        operationSource: `async_task_starting_state_dropdown`,
        preserveRemoteRefs: O,
        query: B,
        enabled: Ye,
      }),
      (t[21] = B),
      (t[22] = w),
      (t[23] = i),
      (t[24] = O),
      (t[25] = Ye),
      (t[26] = Xe))
    : (Xe = t[26]);
  let { data: Ze, isFetching: Qe, error: $e, refetch: et } = ne(De, Xe),
    tt = H ? void 0 : Ze?.branches,
    nt = n.type === `branch` ? (n.remoteRef ?? n.branchName) : void 0,
    Z = L ? Re : k,
    rt = je?.local,
    Q = O && je?.remote != null && rt != null ? `${je.remote}/${rt}` : null,
    it = L ? (Y ? tt : Ie) : Y && !H ? fe?.filter((e) => e.toLowerCase().includes(Ke)) : void 0,
    at = !Y || Z.toLowerCase().includes(Ke),
    ot = it?.filter((e) => e !== Z),
    st;
  t[27] !== Y || t[28] !== H || t[29] !== O || t[30] !== Ze?.remoteBranchRefs
    ? ((st = O && Y && !H ? (Ze?.remoteBranchRefs ?? []) : []),
      (t[27] = Y),
      (t[28] = H),
      (t[29] = O),
      (t[30] = Ze?.remoteBranchRefs),
      (t[31] = st))
    : (st = t[31]);
  let ct = st,
    lt = O && ct.length > 0,
    ut = L ? (Y ? Qe : ze) : pe,
    dt = L ? (Y ? $e : Be) : he,
    ft = L ? (Y ? et : Ve) : ye,
    $ = !L && ge,
    pt = Ce ?? Z;
  n.type === `branch` && n.branchName;
  let mt =
      Fe?.type === `success` && Fe.stagedCount + Fe.unstagedCount + (Fe.untrackedCount ?? 0) > 0,
    ht = L && mt && (!Y || pt.toLowerCase().includes(Ke));
  n.type;
  let gt =
      n.type === `branch` && Q != null && n.branchName === rt && n.remoteRef === `refs/remotes/${Q}`
        ? Q
        : null,
    _t =
      n.type === `working-tree`
        ? (0, X.jsx)(o, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: Ce ?? Z },
          })
        : (gt ??
          (0, X.jsx)(o, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: n.branchName },
          })),
    vt;
  t[32] === _t
    ? (vt = t[33])
    : ((vt = (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsx)(X.Fragment, { children: _t }), null, null],
      })),
      (t[32] = _t),
      (t[33] = vt));
  let yt = vt,
    bt;
  t[34] === p
    ? (bt = t[35])
    : ((bt = p.formatMessage({
        id: `composer.remote.branchStartingPoint`,
        defaultMessage: `What branch should this chat start from?`,
        description: `Section label for branch starting point selector`,
      })),
      (t[34] = p),
      (t[35] = bt));
  let xt = bt,
    St,
    Ct;
  (t[36] !== m || t[37] !== Oe || t[38] !== Ve || t[39] !== L
    ? ((St = () => {
        m && (Oe(), L && Ve());
      }),
      (Ct = [m, Oe, Ve, L]),
      (t[36] = m),
      (t[37] = Oe),
      (t[38] = Ve),
      (t[39] = L),
      (t[40] = St),
      (t[41] = Ct))
    : ((St = t[40]), (Ct = t[41])),
    (0, Je.useEffect)(St, Ct));
  let wt;
  t[42] === a ? (wt = t[43]) : ((wt = b(`whitespace-nowrap`, a)), (t[42] = a), (t[43] = wt));
  let Tt = n.type === `working-tree` && mt,
    Et;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, X.jsx)(j, { className: `icon-xs` })), (t[44] = Et))
    : (Et = t[44]);
  let Dt;
  t[45] === Tt
    ? (Dt = t[46])
    : ((Dt = (0, X.jsx)(de, {
        borderColor: `border-surface-secondary`,
        badgeEnabled: Tt,
        children: Et,
      })),
      (t[45] = Tt),
      (t[46] = Dt));
  let Ot;
  t[47] !== yt || t[48] !== xt || t[49] !== wt || t[50] !== Dt
    ? ((Ot = (0, X.jsx)(xe, {
        "aria-label": xt,
        "data-composer-navigation-target": `starting-state`,
        categoryLabel: null,
        className: wt,
        collapse: `secondary`,
        icon: Dt,
        indicator: `collapsible-chevron`,
        value: yt,
        valueClassName: `max-w-40`,
      })),
      (t[47] = yt),
      (t[48] = xt),
      (t[49] = wt),
      (t[50] = Dt),
      (t[51] = Ot))
    : (Ot = t[51]);
  let kt;
  t[52] !== xt || t[53] !== Ot
    ? ((kt = (0, X.jsx)(te, { tooltipContent: xt, children: Ot })),
      (t[52] = xt),
      (t[53] = Ot),
      (t[54] = kt))
    : (kt = t[54]);
  let At;
  t[55] === H
    ? (At = t[56])
    : ((At = (e) => {
        e.key === `Enter` && H && e.preventDefault();
      }),
      (t[55] = H),
      (t[56] = At));
  let jt = J,
    Mt = ht
      ? (0, X.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, X.jsx)(Ge, {
              children: (0, X.jsx)(o, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, X.jsx)(J.Item, {
              LeftIcon: He,
              RightIcon: n.type === `working-tree` ? R : void 0,
              tooltipText: pt,
              tooltipOpenWhen: `trigger-overflows`,
              value: `working-tree:${pt}`,
              onSelect: () => {
                (r({ type: `working-tree` }), K(!1));
              },
              children: (0, X.jsxs)(`div`, {
                className: `flex flex-col`,
                children: [
                  Ee ? null : (0, X.jsx)(X.Fragment, { children: Ce ?? Z }),
                  (0, X.jsx)(`span`, {
                    className: `text-codex-description`,
                    children: (0, X.jsx)(o, {
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
    Nt =
      Q != null && rt != null && (!Y || Q.toLowerCase().includes(Ke))
        ? (0, X.jsx)(J.Item, {
            LeftIcon: j,
            RightIcon: gt == null ? void 0 : R,
            value: Q,
            onSelect: () => {
              (r({ type: `branch`, branchName: rt, remoteRef: `refs/remotes/${Q}` }), K(!1));
            },
            children: Q,
          })
        : null,
    Pt;
  t[57] === O
    ? (Pt = t[58])
    : ((Pt = (0, X.jsx)(Ge, {
        children: O
          ? (0, X.jsx)(o, {
              id: `composer.remote.localBranchesSectionHeading`,
              defaultMessage: `Local branches`,
              description: `Section heading for local branch search results`,
            })
          : (0, X.jsx)(o, {
              id: `composer.remote.branchesSectionHeading`,
              defaultMessage: `Branches`,
              description: `Section heading for remote branch search results`,
            }),
      })),
      (t[57] = O),
      (t[58] = Pt));
  let Ft =
      B && ut
        ? (0, X.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, X.jsx)(oe, { className: `icon-xxs` }),
          })
        : B && dt
          ? (0, X.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-danger`,
              children: [
                (0, X.jsx)(o, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, X.jsx)(se, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-codex-description`,
                  onClick: () => {
                    ft();
                  },
                  children: (0, X.jsx)(D, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, X.jsxs)(X.Fragment, {
              children: [
                at &&
                  (0, X.jsx)(J.Item, {
                    LeftIcon: j,
                    RightIcon: nt === Z ? R : void 0,
                    tooltipText: Z,
                    tooltipOpenWhen: `trigger-overflows`,
                    value: Z,
                    onSelect: () => {
                      (r({ type: `branch`, branchName: Z }), K(!1));
                    },
                    children: Z,
                  }),
                ot?.map((e) =>
                  (0, X.jsx)(
                    J.Item,
                    {
                      LeftIcon: j,
                      RightIcon: e === nt ? R : void 0,
                      tooltipText: e,
                      tooltipOpenWhen: `trigger-overflows`,
                      value: e,
                      onSelect: () => {
                        (r({ type: `branch`, branchName: e }), K(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
              ],
            }),
    It;
  t[59] !== Pt || t[60] !== Ft
    ? ((It = (0, X.jsxs)(`div`, { className: `flex flex-col`, children: [Pt, Ft] })),
      (t[59] = Pt),
      (t[60] = Ft),
      (t[61] = It))
    : (It = t[61]);
  let Lt;
  t[62] !== nt || t[63] !== K || t[64] !== r || t[65] !== lt || t[66] !== ct
    ? ((Lt = lt
        ? (0, X.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [
              (0, X.jsx)(Ge, {
                className: `mt-1`,
                children: (0, X.jsx)(o, {
                  id: `composer.remote.remoteBranchesSectionHeading`,
                  defaultMessage: `Remote branches`,
                  description: `Section heading for fetched remote branch search results`,
                }),
              }),
              ct.map((e) =>
                (0, X.jsx)(
                  J.Item,
                  {
                    LeftIcon: j,
                    RightIcon: e === nt ? R : void 0,
                    tooltipText: Ue(e),
                    tooltipOpenWhen: `trigger-overflows`,
                    value: e,
                    onSelect: () => {
                      (r({ type: `branch`, branchName: Ue(e), remoteRef: e }), K(!1));
                    },
                    children: Ue(e),
                  },
                  e,
                ),
              ),
            ],
          })
        : null),
      (t[62] = nt),
      (t[63] = K),
      (t[64] = r),
      (t[65] = lt),
      (t[66] = ct),
      (t[67] = Lt))
    : (Lt = t[67]);
  let Rt;
  t[68] !== ve || t[69] !== $ || t[70] !== _e
    ? ((Rt =
        $ &&
        (0, X.jsx)(J.Action, {
          onClick: () => {
            _e || ve();
          },
          children: _e
            ? (0, X.jsx)(o, {
                id: `composer.remote.loadingMoreBranches`,
                defaultMessage: `Loading…`,
                description: `Loading more branches`,
              })
            : null,
        })),
      (t[68] = ve),
      (t[69] = $),
      (t[70] = _e),
      (t[71] = Rt))
    : (Rt = t[71]);
  let zt;
  return (
    t[72] !== jt.List ||
    t[73] !== Mt ||
    t[74] !== Nt ||
    t[75] !== It ||
    t[76] !== Lt ||
    t[77] !== Rt
      ? ((zt = (0, X.jsx)(`div`, {
          className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
          children: (0, X.jsxs)(jt.List, { children: [Mt, Nt, It, Lt, Rt] }),
        })),
        (t[72] = jt.List),
        (t[73] = Mt),
        (t[74] = Nt),
        (t[75] = It),
        (t[76] = Lt),
        (t[77] = Rt),
        (t[78] = zt))
      : (zt = t[78]),
    (0, X.jsx)(me, {
      side: f,
      open: m,
      onOpenChange: K,
      triggerButton: kt,
      children: (0, X.jsx)(J.Root, {
        label: E,
        children: (0, X.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [
            (0, X.jsx)(J.Input, { placeholder: E, value: _, onValueChange: y, onKeyDown: At }),
            zt,
          ],
        }),
      }),
    })
  );
}
function He(e) {
  let t = (0, qe.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(de, {
          borderColor: `border-surface-secondary`,
          children: (0, X.jsx)(j, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ue(e) {
  return e.startsWith(`refs/remotes/`) ? e.slice(13) : e;
}
function We(e) {
  let t = (0, qe.c)(20),
    { gitRoot: n, hostConfig: r, currentBranch: i, remoteDefaultBranch: a, enabled: o } = e,
    s = l(V),
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { enabled: o, retainRepoWatch: s }), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let {
      data: u,
      isLoading: d,
      isFetching: f,
      error: p,
      refetch: m,
    } = _e(n, r, `async_task_starting_state_dropdown`, c),
    ee;
  t[3] !== o || t[4] !== s
    ? ((ee = { enabled: o, retainRepoWatch: s }), (t[3] = o), (t[4] = s), (t[5] = ee))
    : (ee = t[5]);
  let {
      data: te,
      isLoading: h,
      isFetching: g,
      error: ne,
      refetch: _,
    } = Pe(n, r, `async_task_starting_state_dropdown`, ee),
    v;
  if (t[6] !== i || t[7] !== u || t[8] !== te || t[9] !== a) {
    let e = [
        u,
        i,
        Ke({ currentBranch: i, gitDefaultBranch: u, recentBranches: te, remoteDefaultBranch: a }),
        ...(te ?? []),
      ],
      n = new Set();
    ((v = []),
      e.forEach((e) => {
        Y({ branch: e, list: v, seen: n });
      }),
      (t[6] = i),
      (t[7] = u),
      (t[8] = te),
      (t[9] = a),
      (t[10] = v));
  } else v = t[10];
  let y = v[0] ?? i ?? a,
    b = d || f || h || g,
    x = p ?? ne,
    S;
  t[11] !== m || t[12] !== _
    ? ((S = async () => {
        await Promise.all([m(), _()]);
      }),
      (t[11] = m),
      (t[12] = _),
      (t[13] = S))
    : (S = t[13]);
  let C = S,
    w;
  return (
    t[14] !== v || t[15] !== y || t[16] !== x || t[17] !== b || t[18] !== C
      ? ((w = { branches: v, defaultBranch: y, fetching: b, error: x, refetch: C }),
        (t[14] = v),
        (t[15] = y),
        (t[16] = x),
        (t[17] = b),
        (t[18] = C),
        (t[19] = w))
      : (w = t[19]),
    w
  );
}
function Ge(e) {
  let t = (0, qe.c)(5),
    { className: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = b(`text-sm text-codex-description px-[var(--padding-row-x)] py-1`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, X.jsx)(`div`, { className: i, children: r })), (t[2] = r), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ke({ currentBranch: e, gitDefaultBranch: t, recentBranches: n, remoteDefaultBranch: r }) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function Y({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var qe,
  Je,
  X,
  Ye = e(() => {
    ((qe = P()),
      K(),
      _(),
      (Je = t(i(), 1)),
      x(),
      H(),
      he(),
      r(),
      ye(),
      g(),
      p(),
      Me(),
      a(),
      Fe(),
      ve(),
      ce(),
      Ie(),
      Ae(),
      ie(),
      f(),
      F(),
      I(),
      Re(),
      fe(),
      S(),
      n(),
      Ce(),
      be(),
      (X = N()));
  }),
  Xe,
  Ze,
  Qe = e(() => {
    ((Xe = `_ComposerUtilityBarStaticLabel_1f04o_1`), (Ze = { ComposerUtilityBarStaticLabel: Xe }));
  });
function $e(e) {
  let t = (0, et.c)(11),
    { categoryLabel: n, className: r, collapse: i, icon: a, value: o, valueClassName: s } = e,
    c;
  t[0] === r ? (c = t[1]) : ((c = b(Ze.ComposerUtilityBarStaticLabel, r)), (t[0] = r), (t[1] = c));
  let l;
  t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== s
    ? ((l = (0, tt.jsx)(ge, {
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
      ? ((u = (0, tt.jsx)(`div`, { className: c, children: l })),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var et,
  tt,
  nt = e(() => {
    ((et = P()), K(), q(), Qe(), (tt = N()));
  });
function Z(e) {
  let t = (0, rt.c)(5),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(o, {
        id: `composer.footer.branchSwitch.detachedHead`,
        defaultMessage: `Detached HEAD`,
        description: `Label shown when the current Git checkout is not on a branch`,
      })),
      (t[0] = n))
    : (n = t[0]);
  let r = n,
    i,
    a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (e) => {
        let { currentBranch: t } = e;
        return (0, Q.jsx)($e, {
          categoryLabel: null,
          className: `text-codex-description`,
          collapse: `sm`,
          icon: (0, Q.jsx)(M, { "aria-hidden": !1, asset: O }),
          value: t ?? r,
          valueClassName: `max-w-40 text-sm`,
        });
      }),
      (a = (e) => {
        let { currentBranch: t, disabled: n, isPending: i, switchTooltipText: a } = e,
          s = `collapsible-chevron`;
        return (
          i && (s = t === void 0 ? `none` : `pending`),
          (0, Q.jsx)(xe, {
            "aria-label": a,
            "data-composer-navigation-target": `branch`,
            categoryLabel: null,
            className: `px-0`,
            collapse: `sm`,
            disabled: n,
            icon: (0, Q.jsx)(M, { "aria-hidden": !1, asset: O }),
            indicator: s,
            value:
              t === void 0
                ? (0, Q.jsx)(o, {
                    id: `composer.footer.branchSwitch.loading`,
                    defaultMessage: `Loading branch…`,
                    description: `Label shown while loading the current Git branch in the composer utility bar`,
                  })
                : (t ?? r),
            valueClassName: `max-w-40 text-sm`,
          })
        );
      }),
      (t[1] = i),
      (t[2] = a))
    : ((i = t[1]), (a = t[2]));
  let s;
  return (
    t[3] === e
      ? (s = t[4])
      : ((s = (0, Q.jsx)(ke, {
          ...e,
          renderWhileLoading: !0,
          renderStaticBranch: i,
          renderControl: a,
        })),
        (t[3] = e),
        (t[4] = s)),
    s
  );
}
var rt,
  Q,
  it = e(() => {
    ((rt = P()), k(), x(), A(), Ee(), Ce(), nt(), (Q = N()));
  }),
  at,
  ot = e(() => {
    (E(),
      (at = W({
        name: `star-light-12`,
        canvas: {
          width: 12,
          height: 12,
          viewBox: `0 0 12 12`,
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 0.599121, y: 0.800049, width: 10.801636, height: 10.361084 },
          visualBounds: { x: 0.599121, y: 0.800049, width: 10.801636, height: 10.361084 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 0.599121, y: 0.800049, width: 10.801636, height: 10.361084 },
          center: { x: 5.999939, y: 5.980591 },
          insets: { top: 0.800049, right: 0.599243, bottom: 0.838867, left: 0.599121 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 5.999939, y: 5.980591 },
            foreground: { x: 5.999939, y: 5.980591 },
          },
        },
        capabilities: [`icon`],
        body: `<path d="M5.21623 1.25763C5.56058 0.647503 6.43923 0.647539 6.78361 1.25763L8.06095 3.52423C8.07522 3.54945 8.09994 3.5673 8.12834 3.57306L10.6781 4.08771C11.3653 4.22645 11.637 5.06279 11.1625 5.57892L9.40275 7.49298C9.38308 7.51438 9.37305 7.54419 9.37638 7.57306L9.67521 10.1561C9.75571 10.8526 9.04418 11.3697 8.40666 11.0779L6.04142 9.99591C6.01501 9.98384 5.98482 9.98383 5.95842 9.99591L3.59318 11.0779C2.95567 11.3697 2.24413 10.8525 2.32463 10.1561L2.62345 7.57306C2.62679 7.54419 2.61773 7.51438 2.59806 7.49298L0.837322 5.57892C0.362871 5.06283 0.634597 4.22652 1.3217 4.08771L3.8715 3.57306C3.89992 3.56733 3.9246 3.54946 3.93888 3.52423L5.21623 1.25763ZM6.08732 1.65119C6.04907 1.58332 5.95077 1.58332 5.91252 1.65119L4.63615 3.91681C4.50772 4.14467 4.2861 4.30551 4.0297 4.35724L1.4799 4.87189C1.4038 4.88743 1.37376 4.97963 1.42619 5.03693L3.18693 6.95197C3.36385 7.14451 3.4484 7.4051 3.41838 7.66486L3.11955 10.2479C3.11061 10.3252 3.18935 10.3828 3.26017 10.3504L5.62541 9.26837C5.86323 9.15953 6.1366 9.15954 6.37443 9.26837L8.73967 10.3504C8.8105 10.3828 8.88923 10.3253 8.88029 10.2479L8.58146 7.66486C8.55143 7.40503 8.63686 7.14453 8.81388 6.95197L10.5736 5.03693C10.6262 4.9796 10.5962 4.88737 10.5199 4.87189L7.97013 4.35724C7.71386 4.30551 7.4931 4.14453 7.36467 3.91681L6.08732 1.65119Z" fill="currentColor"/>`,
      })));
  });
function st(e) {
  let t = (0, dt.c)(85),
    {
      className: n,
      labelClassName: r,
      environments: i,
      isLoading: a,
      hasError: s,
      side: c,
      align: l,
      showIcon: u,
      selectedConfigPath: f,
      repairConfigPath: p,
      onSelectConfigPath: m,
      onOpenSettings: h,
      workspaceRoot: g,
      showDefaultOption: ne,
    } = e,
    _ = c === void 0 ? `top` : c,
    y = l === void 0 ? `start` : l,
    x = u === void 0 || u,
    S = ne === void 0 || ne,
    T = v(),
    [re, ie] = (0, ft.useState)(!1),
    E,
    D,
    O,
    k,
    A,
    j,
    ae,
    N,
    se,
    P,
    F,
    I,
    z;
  if (
    t[0] !== y ||
    t[1] !== n ||
    t[2] !== i ||
    t[3] !== s ||
    t[4] !== T ||
    t[5] !== a ||
    t[6] !== r ||
    t[7] !== m ||
    t[8] !== re ||
    t[9] !== p ||
    t[10] !== f ||
    t[11] !== S ||
    t[12] !== x ||
    t[13] !== _ ||
    t[14] !== g
  ) {
    let e = i.filter(ct),
      c = w(e),
      l;
    t[28] === f ? (l = t[29]) : ((l = f ? L(f) : null), (t[28] = f), (t[29] = l));
    let u = l,
      h;
    t[30] !== u || t[31] !== p
      ? ((h = p ? L(p) : u), (t[30] = u), (t[31] = p), (t[32] = h))
      : (h = t[32]);
    let ne = h,
      v = i.find((e) => L(e.configPath) === ne) ?? null,
      C = !a && !s,
      B = c && S ? e.filter((e) => L(e.configPath) !== L(c.configPath)) : e,
      V = ut({ isLoading: a, environmentResult: v });
    D = C && i.length === 0;
    let H;
    t[33] === T
      ? (H = t[34])
      : ((H = T.formatMessage({
          id: `composer.worktreeEnvironment.tooltip`,
          defaultMessage: `Select a local environment`,
          description: `Tooltip for local environment selector`,
        })),
        (t[33] = T),
        (t[34] = H));
    let U = H,
      W;
    t[35] === n ? (W = t[36]) : ((W = b(`whitespace-nowrap`, n)), (t[35] = n), (t[36] = W));
    let G = r == null ? `secondary` : `sm`,
      K;
    t[37] === x
      ? (K = t[38])
      : ((K = x ? (0, $.jsx)(M, { "aria-hidden": !1, asset: Se }) : null),
        (t[37] = x),
        (t[38] = K));
    let ce = a ? `none` : `collapsible-chevron`,
      q;
    t[39] === r ? (q = t[40]) : ((q = b(`max-w-40`, r)), (t[39] = r), (t[40] = q));
    let le;
    t[41] !== V ||
    t[42] !== U ||
    t[43] !== W ||
    t[44] !== G ||
    t[45] !== K ||
    t[46] !== ce ||
    t[47] !== q
      ? ((le = (0, $.jsx)(xe, {
          "aria-label": U,
          "data-composer-navigation-target": `environment`,
          categoryLabel: null,
          className: W,
          collapse: G,
          icon: K,
          indicator: ce,
          value: V,
          valueClassName: q,
        })),
        (t[41] = V),
        (t[42] = U),
        (t[43] = W),
        (t[44] = G),
        (t[45] = K),
        (t[46] = ce),
        (t[47] = q),
        (t[48] = le))
      : (le = t[48]);
    let ue = le;
    ((E = ee),
      (k = re),
      (A = ie),
      (j = _),
      (ae = y),
      t[49] !== D || t[50] !== ue
        ? ((N = D
            ? (0, $.jsx)(te, {
                cloneCustomTrigger: !0,
                tooltipContent: (0, $.jsx)(o, {
                  id: `composer.worktreeEnvironment.projectSetupDescription`,
                  defaultMessage: `Give Codex access to your project’s full dependencies and setup`,
                  description: `Explains that project setup gives Codex access to project dependencies and setup`,
                }),
                children: ue,
              })
            : ue),
          (t[49] = D),
          (t[50] = ue),
          (t[51] = N))
        : (N = t[51]),
      (z = `flex w-64 flex-col overflow-hidden`),
      t[52] === g
        ? (O = t[53])
        : ((O = (0, $.jsx)(d.Title, {
            children:
              g == null
                ? (0, $.jsx)(o, {
                    id: `composer.worktreeEnvironment.title`,
                    defaultMessage: `Environment`,
                    description: `Title for worktree environment dropdown`,
                  })
                : (0, $.jsx)(lt, { workspaceRoot: g }),
          })),
          (t[52] = g),
          (t[53] = O)),
      (se = `vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto`),
      t[54] !== m || t[55] !== p || t[56] !== f || t[57] !== C
        ? ((P = C
            ? (0, $.jsx)(d.Item, {
                RightIcon: f == null && p == null ? R : void 0,
                onClick: () => {
                  (m(null), ie(!1));
                },
                children: (0, $.jsx)(o, {
                  id: `composer.worktreeEnvironment.noEnvironmentOption`,
                  defaultMessage: `Work without environment`,
                  description: `Option in the worktree environment dropdown that runs without selecting a local environment`,
                }),
              })
            : null),
          (t[54] = m),
          (t[55] = p),
          (t[56] = f),
          (t[57] = C),
          (t[58] = P))
        : (P = t[58]),
      (F =
        S && c
          ? (0, $.jsx)(d.Item, {
              RightIcon: u != null && L(c.configPath) === u ? R : void 0,
              onClick: () => {
                (m(c.configPath), ie(!1));
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(te, {
                    tooltipContent: (0, $.jsx)(o, {
                      id: `composer.worktreeEnvironment.default`,
                      defaultMessage: `Default environment`,
                      description: `Tooltip for default local environment icon`,
                    }),
                    children: (0, $.jsx)(M, {
                      className: `shrink-0 text-codex-description`,
                      "aria-hidden": !1,
                      asset: at,
                    }),
                  }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: je(c) }),
                ],
              }),
            })
          : null),
      (I = a
        ? (0, $.jsx)(`div`, {
            className: `flex items-center justify-center py-4`,
            children: (0, $.jsx)(oe, { className: `icon-xxs` }),
          })
        : s
          ? (0, $.jsx)(d.Message, {
              compact: !0,
              tone: `error`,
              children: (0, $.jsx)(o, {
                id: `composer.worktreeEnvironment.error`,
                defaultMessage: `Error loading environments`,
                description: `Error state for worktree environment dropdown`,
              }),
            })
          : B.length > 0
            ? (0, $.jsx)(`div`, {
                className: `flex flex-col`,
                children: B.map((e) => {
                  let t = f != null && L(e.configPath) === u;
                  return (0, $.jsx)(
                    d.Item,
                    {
                      RightIcon: t ? R : void 0,
                      onClick: () => {
                        (m(e.configPath), ie(!1));
                      },
                      children: (0, $.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: je(e),
                      }),
                    },
                    e.configPath,
                  );
                }),
              })
            : i.length > 0 && e.length === 0
              ? (0, $.jsx)(d.Message, {
                  compact: !0,
                  tone: `error`,
                  children: (0, $.jsx)(o, { ...ze.needsAttention }),
                })
              : null),
      (t[0] = y),
      (t[1] = n),
      (t[2] = i),
      (t[3] = s),
      (t[4] = T),
      (t[5] = a),
      (t[6] = r),
      (t[7] = m),
      (t[8] = re),
      (t[9] = p),
      (t[10] = f),
      (t[11] = S),
      (t[12] = x),
      (t[13] = _),
      (t[14] = g),
      (t[15] = E),
      (t[16] = D),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A),
      (t[20] = j),
      (t[21] = ae),
      (t[22] = N),
      (t[23] = se),
      (t[24] = P),
      (t[25] = F),
      (t[26] = I),
      (t[27] = z));
  } else
    ((E = t[15]),
      (D = t[16]),
      (O = t[17]),
      (k = t[18]),
      (A = t[19]),
      (j = t[20]),
      (ae = t[21]),
      (N = t[22]),
      (se = t[23]),
      (P = t[24]),
      (F = t[25]),
      (I = t[26]),
      (z = t[27]));
  let B;
  t[59] !== h || t[60] !== p
    ? ((B = () => {
        (h(p ?? void 0), ie(!1));
      }),
      (t[59] = h),
      (t[60] = p),
      (t[61] = B))
    : (B = t[61]);
  let V;
  t[62] === D
    ? (V = t[63])
    : ((V = D
        ? (0, $.jsx)(o, {
            id: `composer.worktreeEnvironment.setUpProject`,
            defaultMessage: `Set up project`,
            description: `Action to configure reusable setup for a project without a worktree environment`,
          })
        : (0, $.jsx)(o, {
            id: `composer.worktreeEnvironment.settings`,
            defaultMessage: `Environment settings`,
            description: `CTA to open local environment settings from the worktree dropdown`,
          })),
      (t[62] = D),
      (t[63] = V));
  let H;
  t[64] !== B || t[65] !== V
    ? ((H = (0, $.jsx)(d.Item, { LeftIcon: C, onClick: B, children: V })),
      (t[64] = B),
      (t[65] = V),
      (t[66] = H))
    : (H = t[66]);
  let U;
  t[67] !== H || t[68] !== se || t[69] !== P || t[70] !== F || t[71] !== I
    ? ((U = (0, $.jsxs)(`div`, { className: se, children: [P, F, I, H] })),
      (t[67] = H),
      (t[68] = se),
      (t[69] = P),
      (t[70] = F),
      (t[71] = I),
      (t[72] = U))
    : (U = t[72]);
  let W;
  t[73] !== O || t[74] !== U || t[75] !== z
    ? ((W = (0, $.jsxs)(`div`, { className: z, children: [O, U] })),
      (t[73] = O),
      (t[74] = U),
      (t[75] = z),
      (t[76] = W))
    : (W = t[76]);
  let G;
  return (
    t[77] !== E ||
    t[78] !== k ||
    t[79] !== A ||
    t[80] !== j ||
    t[81] !== ae ||
    t[82] !== N ||
    t[83] !== W
      ? ((G = (0, $.jsx)(E, {
          open: k,
          onOpenChange: A,
          side: j,
          align: ae,
          triggerButton: N,
          children: W,
        })),
        (t[77] = E),
        (t[78] = k),
        (t[79] = A),
        (t[80] = j),
        (t[81] = ae),
        (t[82] = N),
        (t[83] = W),
        (t[84] = G))
      : (G = t[84]),
    G
  );
}
function ct(e) {
  return e.type === `success`;
}
function lt(e) {
  let t = (0, dt.c)(5),
    { workspaceRoot: n } = e;
  if (ne(B, l(y)).length > 1) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = Le(n)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, $.jsx)(o, {
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
  let r;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(o, {
          id: `composer.worktreeEnvironment.title`,
          defaultMessage: `Environment`,
          description: `Title for worktree environment dropdown`,
        })),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function ut({ isLoading: e, environmentResult: t }) {
  return e
    ? (0, $.jsx)(o, {
        id: `composer.worktreeEnvironment.loading`,
        defaultMessage: `Loading environments…`,
        description: `Loading label for worktree environment dropdown`,
      })
    : t?.type === `error`
      ? (0, $.jsx)(o, { ...ze.needsAttention })
      : t?.type === `success`
        ? (0, $.jsx)($.Fragment, { children: t.environment.name })
        : (0, $.jsx)(o, {
            id: `codex.environmentSelector.noEnvironment`,
            defaultMessage: `No environment`,
            description: `No environment selected message`,
          });
}
var dt,
  ft,
  $,
  pt = e(() => {
    ((dt = P()),
      pe(),
      ot(),
      K(),
      _(),
      (ft = t(i(), 1)),
      x(),
      T(),
      A(),
      g(),
      p(),
      f(),
      c(),
      Oe(),
      Be(),
      h(),
      z(),
      Re(),
      m(),
      u(),
      Ce(),
      ($ = N()));
  });
export { $e as a, Ye as c, it as i, pt as n, nt as o, Z as r, Ve as s, st as t };
//# sourceMappingURL=worktree-environment-dropdown-ea1f88351d40.js.map
