import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $st as i,
  Az as a,
  CNt as o,
  Cit as s,
  Cst as c,
  Ez as l,
  F9 as u,
  FBt as d,
  Hgt as f,
  I9 as p,
  L9 as m,
  LNt as h,
  MFt as g,
  MNt as ee,
  Mgt as _,
  NFt as v,
  NNt as y,
  NSt as b,
  Oz as x,
  PBt as S,
  Q1 as C,
  Qst as te,
  Rrt as w,
  USt as ne,
  Vrt as T,
  XOt as E,
  Y3 as D,
  Yst as O,
  Z1 as k,
  Z3 as A,
  ZSt as j,
  ck as M,
  e6 as re,
  fdt as N,
  iCt as ie,
  jFt as ae,
  mCt as P,
  nCt as oe,
  nQ as se,
  okt as ce,
  qrt as le,
  rk as ue,
  sct as de,
  tQ as fe,
  tk as F,
  tkt as I,
  vit as pe,
  wst as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as he,
  Atn as L,
  Avr as ge,
  Bct as R,
  Ekn as _e,
  Gct as ve,
  Ghr as ye,
  Gzt as be,
  Hct as z,
  JP as xe,
  KBr as Se,
  Kzt as Ce,
  Uct as we,
  Vct as Te,
  Wct as Ee,
  XAr as B,
  Ycr as De,
  Yyn as Oe,
  ZAr as ke,
  ZP as Ae,
  cir as je,
  dbn as Me,
  fbn as Ne,
  fir as V,
  fxr as Pe,
  gxr as Fe,
  ibn as Ie,
  jkn as Le,
  jvr as H,
  ktn as Re,
  mEt as ze,
  nbn as Be,
  olt as Ve,
  qhr as He,
  qyn as Ue,
  rbn as We,
  slt as U,
  tbn as Ge,
  wkn as Ke,
  xMr as W,
  yMr as G,
} from "./app-initial-ad16eaadf81f.js";
function qe(e) {
  let t = (0, Je.c)(13),
    {
      children: n,
      onOpenChange: r,
      onStartFromScratch: i,
      onUseExistingFolder: a,
      open: o,
      triggerButton: s,
    } = e,
    c = (0, K.useRef)(!1),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = (e) => {
        c.current && ((c.current = !1), e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(ue.Item, {
        leftIconAsset: se,
        onSelect: () => {
          c.current = !0;
        },
        children: (0, q.jsx)(I, {
          id: `projectSetup.addProjectMenu.startFromScratch`,
          defaultMessage: `Start from scratch`,
          description: `Menu item that creates a new local project folder`,
        }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(I, {
        id: `projectSetup.addProjectMenu.useExistingFolder`,
        defaultMessage: `Use an existing folder`,
        description: `Menu item that opens the existing folder picker`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === a
    ? (f = t[5])
    : ((f = (0, q.jsx)(ue.Item, { leftIconAsset: k, onSelect: a, children: d })), (t[4] = a), (t[5] = f));
  let p;
  return (
    t[6] !== n || t[7] !== r || t[8] !== o || t[9] !== l || t[10] !== f || t[11] !== s
      ? ((p = (0, q.jsxs)(F, {
          triggerButton: s,
          contentWidth: `menu`,
          onOpenChange: r,
          onCloseAutoFocus: l,
          open: o,
          children: [u, f, n],
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = l),
        (t[10] = f),
        (t[11] = s),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var Je, K, q;
function J() {
  return (J = e(() => {
    ((Je = S()), C(), fe(), (K = d()), E(), M(), (q = h()));
  }))();
}
function Ye() {
  let e = (0, X.c)(87),
    t = r(te),
    n = ne(),
    i = ce(),
    a = ie(_e) ?? `auto`,
    { data: o, isFetching: s } = Ae(),
    c = o === void 0 ? [] : o,
    l = ze(),
    d;
  e[0] === l ? (d = e[1]) : ((d = (e) => l || !ge(e)), (e[0] = l), (e[1] = d));
  let f = c.filter(d).map(it),
    { data: h, isFetching: ee } = ie(Fe),
    _ = dt(f),
    y = (0, Z.default)(_, rt).sort(nt),
    { data: b, isFetching: x } = oe(Me, { params: { dirs: y }, source: `onboarding_workspace_select` }),
    { data: S, isFetching: C } = He(),
    w = Ce(),
    T;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = []), (e[2] = T)) : (T = e[2]);
  let [E, D] = (0, Q.useState)(T),
    O;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = {}), (e[3] = O)) : (O = e[3]);
  let [k, A] = (0, Q.useState)(O),
    [j, M] = (0, Q.useState)(null),
    [re, N] = (0, Q.useState)(null),
    ae = (0, Q.useRef)(0),
    P = h?.roots,
    se = P != null && P.length > 0,
    ue = ft({ tasks: f, gitOrigins: b?.origins, codexHome: S?.codexHome }),
    de = (0, Z.default)([...(P ?? []), ...ue, ...E], tt).sort(et),
    fe;
  e[4] === h?.labels
    ? (fe = e[5])
    : ((fe = (e) => {
        let t = h?.labels?.[e]?.trim();
        return t ? { root: e, label: t } : { root: e, label: pt(e) };
      }),
      (e[4] = h?.labels),
      (e[5] = fe));
  let F = de.map(fe),
    I = F.map($e),
    he;
  e[6] === k ? (he = e[7]) : ((he = (e) => k[e]), (e[6] = k), (e[7] = he));
  let L = I.filter(he),
    R = (I.length > 0 && L.length === I.length) || (L.length > 0 && L.length < I.length && `indeterminate`),
    ve;
  (e[8] !== I || e[9] !== t || e[10] !== k || e[11] !== D || e[12] !== A
    ? ((ve = (e) => {
        D((t) => (0, Z.default)([...t, e.root], Qe));
        let n = { ...k, [e.root]: !0 };
        A(n);
        let r = I.includes(e.root),
          i = ut(n, I) + +!r,
          a = r ? I.length : I.length + 1;
        W(t, m, { action: `toggle_root`, selectedWorkspacesCount: i, totalWorkspacesCount: a, checked: !0 });
      }),
      (e[8] = I),
      (e[9] = t),
      (e[10] = k),
      (e[11] = D),
      (e[12] = A),
      (e[13] = ve))
    : (ve = e[13]),
    v(`workspace-root-option-picked`, ve));
  let ye;
  (e[14] !== I.length || e[15] !== t || e[16] !== M || e[17] !== N
    ? ((ye = (e) => {
        if ((M(null), e.success)) {
          (W(t, p, { selectedWorkspacesCount: 1, totalWorkspacesCount: I.length, autoNavigated: !1 }),
            N(null),
            Le(t, Math.floor(Date.now() / 1e3)),
            t.set(_e, `auto`));
          return;
        }
        N(e.error ?? null);
      }),
      (e[14] = I.length),
      (e[15] = t),
      (e[16] = M),
      (e[17] = N),
      (e[18] = ye))
    : (ye = e[18]),
    v(`electron-onboarding-skip-workspace-result`, ye));
  let be;
  e[19] !== se || e[20] !== t || e[21] !== N
    ? ((be = () => {
        (N(null),
          W(t, u, { hasExistingWorkspaces: se, source: `onboarding_modal` }),
          g.dispatchMessage(`electron-pick-workspace-root-option`, { allowMultiple: !1 }));
      }),
      (e[19] = se),
      (e[20] = t),
      (e[21] = N),
      (e[22] = be))
    : (be = e[22]);
  let z = be,
    xe;
  e[23] !== j || e[24] !== t || e[25] !== M || e[26] !== N
    ? ((xe = () => {
        j ??
          (N(null),
          M(`skip`),
          g.dispatchMessage(`electron-onboarding-skip-workspace`, { initializeGitRepository: !t.get(ke) }));
      }),
      (e[23] = j),
      (e[24] = t),
      (e[25] = M),
      (e[26] = N),
      (e[27] = xe))
    : (xe = e[27]);
  let Se = xe,
    we;
  e[28] !== I || e[29] !== t || e[30] !== k || e[31] !== D || e[32] !== A || e[33] !== N
    ? ((we = (e, n) => {
        (N(null), D((t) => (0, Z.default)([...t, e], Ze)));
        let r = { ...k, [e]: n };
        (A(r),
          W(t, m, {
            action: `toggle_root`,
            checked: n,
            selectedWorkspacesCount: ut(r, I),
            totalWorkspacesCount: I.length,
          }));
      }),
      (e[28] = I),
      (e[29] = t),
      (e[30] = k),
      (e[31] = D),
      (e[32] = A),
      (e[33] = N),
      (e[34] = we))
    : (we = e[34]);
  let Te = we,
    B;
  e[35] !== I || e[36] !== t || e[37] !== k || e[38] !== A || e[39] !== N
    ? ((B = (e) => {
        N(null);
        let n = { ...k };
        for (let t of I) n[t] = e;
        A(n);
        let r = ut(n, I);
        W(t, m, {
          action: `select_all`,
          checked: e,
          selectedWorkspacesCount: r,
          totalWorkspacesCount: I.length,
        });
      }),
      (e[35] = I),
      (e[36] = t),
      (e[37] = k),
      (e[38] = A),
      (e[39] = N),
      (e[40] = B))
    : (B = e[40]);
  let Oe = B,
    je;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = { queryKey: [pe, `paths-exist`] }), (e[41] = je))
    : (je = e[41]);
  let Ne = me(je),
    V = s || ee || x || C || Ne > 0,
    Pe = F.length > 0,
    Ie = L.length > 0,
    H = se || ue.length > 0,
    Re = !H && !V && !Pe,
    Be = (0, Q.useRef)(!1),
    Ue = (0, Q.useRef)(!1),
    We;
  e[42] !== n || e[43] !== a || e[44] !== I.length || e[45] !== P || e[46] !== t
    ? ((We = async (e, r) => {
        if (Ue.current) return;
        let i = t.get(De),
          o = i == null ? `/` : Ve(`/`, i.pathname, i.search);
        Ue.current = !0;
        let s = e;
        if (
          (a === `workspace` && P != null && (s = (0, Z.default)([...P, ...e], Xe)),
          (
            await Ge()
              .createOrSelectLocalProjects(s)
              .finally(() => {
                Ue.current = !1;
              })
          ).length === 0)
        )
          return;
        (Le(t, Math.floor(Date.now() / 1e3)),
          W(t, p, { selectedWorkspacesCount: e.length, totalWorkspacesCount: I.length, autoNavigated: r }),
          t.set(_e, `auto`),
          (ae.current += 1));
        let c = t.get(De);
        (c?.key === i?.key || (o === `/` && c?.pathname === `/` && c.search === `` && c.hash === ``)) &&
          n(o, { replace: !0, state: { focusComposerNonce: ae.current } });
      }),
      (e[42] = n),
      (e[43] = a),
      (e[44] = I.length),
      (e[45] = P),
      (e[46] = t),
      (e[47] = We))
    : (We = e[47]);
  let U = We,
    Ke;
  e[48] === i
    ? (Ke = e[49])
    : ((Ke = i.formatMessage({
        id: `onboarding.workspace.consentError`,
        defaultMessage: `Could not add the selected folders`,
        description: `Error shown when checking or adding onboarding project folders fails`,
      })),
      (e[48] = i),
      (e[49] = Ke));
  let G = Ke,
    qe;
  e[50] !== G || e[51] !== U || e[52] !== t
    ? ((qe = (e) => {
        U(e, !0).catch(() =>
          t.get(le).danger(G, { errorAnalytics: { toastId: `selectWorkspacePage.autoContinueEvent` } }),
        );
      }),
      (e[50] = G),
      (e[51] = U),
      (e[52] = t),
      (e[53] = qe))
    : (qe = e[53]);
  let Je = (0, Q.useEffectEvent)(qe),
    K;
  e[54] !== Je || e[55] !== H || e[56] !== V || e[57] !== L
    ? ((K = () => {
        H || Be.current || V || (L.length !== 0 && ((Be.current = !0), Je(L)));
      }),
      (e[54] = Je),
      (e[55] = H),
      (e[56] = V),
      (e[57] = L),
      (e[58] = K))
    : (K = e[58]);
  let q;
  (e[59] !== H || e[60] !== V || e[61] !== L
    ? ((q = [H, V, L]), (e[59] = H), (e[60] = V), (e[61] = L), (e[62] = q))
    : (q = e[62]),
    (0, Q.useEffect)(K, q));
  let J;
  e[63] !== G || e[64] !== U || e[65] !== j || e[66] !== L || e[67] !== M || e[68] !== N
    ? ((J = () => {
        (N(null),
          j ??
            (M(`continue`),
            U(L, !1)
              .catch(() => N(G))
              .finally(() => M(null))));
      }),
      (e[63] = G),
      (e[64] = U),
      (e[65] = j),
      (e[66] = L),
      (e[67] = M),
      (e[68] = N),
      (e[69] = J))
    : (J = e[69]);
  let Ye = J,
    Y;
  return (
    e[70] !== F ||
    e[71] !== Ye ||
    e[72] !== z ||
    e[73] !== Se ||
    e[74] !== Oe ||
    e[75] !== Te ||
    e[76] !== Pe ||
    e[77] !== Ie ||
    e[78] !== i ||
    e[79] !== V ||
    e[80] !== w ||
    e[81] !== j ||
    e[82] !== R ||
    e[83] !== L ||
    e[84] !== Re ||
    e[85] !== re
      ? ((Y = (0, $.jsx)(Ee, {
          children: Re
            ? (0, $.jsx)(at, {
                isRemoteHost: w,
                handleOpenFolder: z,
                handleSkip: Se,
                pendingAction: j,
                skipErrorMessage: re,
              })
            : (0, $.jsx)(st, {
                isLoadingRoots: V,
                hasAvailableRoots: Pe,
                availableOptions: F,
                selectedRoots: L,
                selectAllState: R !== `indeterminate` && R,
                handleToggleSelectAll: Oe,
                handleToggleWorkspace: Te,
                intl: i,
                handleOpenFolder: z,
                hasSelectedRoots: Ie,
                isRemoteHost: w,
                handleSkip: Se,
                pendingAction: j,
                skipErrorMessage: re,
                handleContinue: Ye,
              }),
        })),
        (e[70] = F),
        (e[71] = Ye),
        (e[72] = z),
        (e[73] = Se),
        (e[74] = Oe),
        (e[75] = Te),
        (e[76] = Pe),
        (e[77] = Ie),
        (e[78] = i),
        (e[79] = V),
        (e[80] = w),
        (e[81] = j),
        (e[82] = R),
        (e[83] = L),
        (e[84] = Re),
        (e[85] = re),
        (e[86] = Y))
      : (Y = e[86]),
    Y
  );
}
function Xe(e) {
  return a(e);
}
function Ze(e) {
  return a(e);
}
function Qe(e) {
  return a(e);
}
function $e(e) {
  return e.root;
}
function et(e, t) {
  return e.localeCompare(t);
}
function tt(e) {
  return a(e);
}
function nt(e, t) {
  return e.localeCompare(t);
}
function rt(e) {
  return a(e);
}
function it(e) {
  return { kind: `local`, key: je(e.conversationId), at: e.createdAt, summary: e };
}
function Y(e) {
  let t = (0, X.c)(7),
    { children: n, showIcon: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r ? (0, $.jsx)(Re, { className: `h-10 w-10`, "aria-hidden": `true` }) : null),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(I, {
        id: `electron.onboarding.workspace.title`,
        defaultMessage: `Select a project`,
        description: `Title on the desktop onboarding workspace selection page`,
      })),
      (o = (0, $.jsx)(I, {
        id: `electron.onboarding.workspace.subtitle`,
        defaultMessage: `ChatGPT will be able to edit files and run commands in selected folders`,
        description: `Subtitle on the desktop onboarding workspace selection page`,
      })),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] !== n || t[5] !== i
      ? ((s = (0, $.jsx)(we, {
          className: `max-w-[330px]`,
          icon: i,
          textClassName: `gap-6`,
          title: a,
          subtitle: o,
          children: n,
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function at(e) {
  let t = (0, X.c)(12),
    { isRemoteHost: n, handleOpenFolder: r, handleSkip: i, pendingAction: a, skipErrorMessage: o } = e,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(ot, {
        className: `w-full justify-center py-2.5`,
        color: `primary`,
        isRemoteHost: n,
        onStartFromScratch: i,
        onUseExistingFolder: r,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== i || t[5] !== n || t[6] !== a || t[7] !== o
    ? ((c = n ? null : (0, $.jsx)(ct, { handleSkip: i, pendingAction: a, skipErrorMessage: o })),
      (t[4] = i),
      (t[5] = n),
      (t[6] = a),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsx)(Y, {
          showIcon: !0,
          children: (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [s, c] }),
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function ot(e) {
  let t = (0, X.c)(10),
    { className: n, color: r, isRemoteHost: i, onStartFromScratch: a, onUseExistingFolder: o, size: s } = e,
    c = i ? o : void 0,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(I, {
        id: `electron.onboarding.workspace.openFolder`,
        defaultMessage: `Add project`,
        description: `Button label to add a workspace during desktop onboarding`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== c
    ? ((u = (0, $.jsx)(D, { className: n, color: r, size: s, onClick: c, children: l })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d = u;
  if (i) return d;
  let f;
  return (
    t[6] !== a || t[7] !== o || t[8] !== d
      ? ((f = (0, $.jsx)(qe, { triggerButton: d, onStartFromScratch: a, onUseExistingFolder: o })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function st(e) {
  let t = (0, X.c)(40),
    {
      isLoadingRoots: r,
      hasAvailableRoots: i,
      availableOptions: a,
      selectedRoots: o,
      selectAllState: s,
      handleToggleSelectAll: c,
      handleToggleWorkspace: l,
      intl: u,
      handleOpenFolder: d,
      handleContinue: f,
      hasSelectedRoots: p,
      isRemoteHost: m,
      handleSkip: h,
      pendingAction: g,
      skipErrorMessage: _,
    } = e,
    v;
  t[0] === o ? (v = t[1]) : ((v = new Set(o)), (t[0] = o), (t[1] = v));
  let y = v,
    b;
  t[2] === r
    ? (b = t[3])
    : ((b = r
        ? (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-center gap-2 rounded-2xl border border-default px-5 py-6`,
            children: [
              (0, $.jsx)(n, { className: `h-4 w-4 text-default` }),
              (0, $.jsx)(`span`, {
                className: `text-sm text-codex-description`,
                children: (0, $.jsx)(I, {
                  id: `electron.onboarding.workspace.loading`,
                  defaultMessage: `Loading projects…`,
                  description: `Loading state while onboarding workspace options are fetched`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = r),
      (t[3] = b));
  let x;
  t[4] !== a ||
  t[5] !== c ||
  t[6] !== l ||
  t[7] !== i ||
  t[8] !== u ||
  t[9] !== r ||
  t[10] !== m ||
  t[11] !== s ||
  t[12] !== y
    ? ((x = i
        ? (0, $.jsxs)(Te, {
            className: ee(r && `pointer-events-none opacity-50`),
            ariaLabel: u.formatMessage({
              id: `electron.onboarding.workspace.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the available workspaces list during onboarding`,
            }),
            children: [
              (0, $.jsx)(z, {
                checkboxId: `workspace-root-select-all`,
                checkboxClassName: R,
                checked: s,
                disabled: r,
                onCheckedChange: (e) => {
                  c(e);
                },
                label: (0, $.jsx)(I, {
                  id: `electron.onboarding.workspace.selectAll`,
                  defaultMessage: `Select all`,
                  description: `Checkbox label for selecting all workspaces during onboarding`,
                }),
              }),
              a.map((e, t) =>
                (0, $.jsx)(
                  lt,
                  {
                    index: t,
                    isDisabled: r,
                    isSelected: y.has(e.root),
                    skipExistenceCheck: m,
                    option: e,
                    onToggle: l,
                  },
                  e.root,
                ),
              ),
            ],
          })
        : (0, $.jsx)(`div`, {
            className: `text-center text-sm text-codex-description`,
            children: (0, $.jsx)(I, {
              id: `electron.onboarding.workspace.empty`,
              defaultMessage: `Add a project to continue.`,
              description: `Empty state shown when no workspaces are selected during onboarding`,
            }),
          })),
      (t[4] = a),
      (t[5] = c),
      (t[6] = l),
      (t[7] = i),
      (t[8] = u),
      (t[9] = r),
      (t[10] = m),
      (t[11] = s),
      (t[12] = y),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] !== b || t[15] !== x
    ? ((S = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-2`, children: [b, x] })),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== d || t[18] !== h || t[19] !== m
    ? ((C = (0, $.jsx)(ot, {
        className: `flex-1 justify-center border-default bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-text/5`,
        color: `outline`,
        size: `large`,
        isRemoteHost: m,
        onStartFromScratch: h,
        onUseExistingFolder: d,
      })),
      (t[17] = d),
      (t[18] = h),
      (t[19] = m),
      (t[20] = C))
    : (C = t[20]);
  let te = !p || r || g != null,
    w = g === `continue`,
    ne;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(I, {
        id: `electron.onboarding.workspace.continue`,
        defaultMessage: `Continue`,
        description: `Button label to continue after selecting workspaces during onboarding`,
      })),
      (t[21] = ne))
    : (ne = t[21]);
  let T;
  t[22] !== f || t[23] !== te || t[24] !== w
    ? ((T = (0, $.jsx)(D, {
        className: `flex-1 justify-center text-base leading-6 font-medium`,
        color: `primary`,
        size: `large`,
        disabled: te,
        loading: w,
        onClick: f,
        children: ne,
      })),
      (t[22] = f),
      (t[23] = te),
      (t[24] = w),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] !== C || t[27] !== T
    ? ((E = (0, $.jsxs)(`div`, { className: `flex w-full items-center gap-4`, children: [C, T] })),
      (t[26] = C),
      (t[27] = T),
      (t[28] = E))
    : (E = t[28]);
  let O;
  t[29] !== h || t[30] !== m || t[31] !== g || t[32] !== _
    ? ((O = m ? null : (0, $.jsx)(ct, { handleSkip: h, pendingAction: g, skipErrorMessage: _ })),
      (t[29] = h),
      (t[30] = m),
      (t[31] = g),
      (t[32] = _),
      (t[33] = O))
    : (O = t[33]);
  let k;
  t[34] !== E || t[35] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [E, O] })),
      (t[34] = E),
      (t[35] = O),
      (t[36] = k))
    : (k = t[36]);
  let A;
  return (
    t[37] !== k || t[38] !== S
      ? ((A = (0, $.jsx)(Y, {
          showIcon: !1,
          children: (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-4`, children: [S, k] }),
        })),
        (t[37] = k),
        (t[38] = S),
        (t[39] = A))
      : (A = t[39]),
    A
  );
}
function ct(e) {
  let t = (0, X.c)(11),
    { handleSkip: n, pendingAction: r, skipErrorMessage: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-center text-sm text-danger`,
              children: (0, $.jsx)(I, {
                id: `electron.onboarding.workspace.skip.error`,
                defaultMessage: `Couldn't create a new project: {message}`,
                description: `Error shown when creating a new project fails during onboarding`,
                values: { message: i },
              }),
            })),
      (t[0] = i),
      (t[1] = a));
  let o = r != null,
    s;
  t[2] === r
    ? (s = t[3])
    : ((s =
        r === `skip`
          ? (0, $.jsx)(I, {
              id: `electron.onboarding.workspace.skipping`,
              defaultMessage: `Creating a new project…`,
              description: `Button label shown while creating a new project during onboarding`,
            })
          : (0, $.jsx)(I, {
              id: `electron.onboarding.workspace.skip`,
              defaultMessage: `Skip`,
              description: `Button label to skip workspace selection during onboarding`,
            })),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] !== n || t[5] !== o || t[6] !== s
    ? ((c = (0, $.jsx)(D, {
        className: `w-full justify-center text-base leading-6 font-medium`,
        color: `ghost`,
        size: `large`,
        disabled: o,
        onClick: n,
        children: s,
      })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, $.jsxs)(`div`, { className: `flex w-full flex-col items-center gap-2`, children: [a, c] })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function lt(e) {
  let t = (0, X.c)(14),
    { index: n, isDisabled: r, isSelected: i, skipExistenceCheck: o, option: s, onToggle: c } = e,
    l = s.root,
    u;
  t[0] === l ? (u = t[1]) : ((u = f(l)), (t[0] = l), (t[1] = u));
  let d = u,
    p = a(l).replace(/\/+$/, ``),
    m = !o,
    h;
  t[2] === m ? (h = t[3]) : ((h = { enabled: m }), (t[2] = m), (t[3] = h));
  let { data: g } = oe(mt, l, h);
  if (!(o || (g?.existingPaths ?? []).some((e) => a(e).replace(/\/+$/, ``) === p))) return null;
  let ee = `workspace-root-${n}`,
    _;
  t[4] !== c || t[5] !== l
    ? ((_ = (e) => {
        c(l, e);
      }),
      (t[4] = c),
      (t[5] = l),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  return (
    t[7] !== ee || t[8] !== d || t[9] !== r || t[10] !== i || t[11] !== s.label || t[12] !== _
      ? ((v = (0, $.jsx)(z, {
          checkboxId: ee,
          checkboxClassName: R,
          checked: i,
          disabled: r,
          onCheckedChange: _,
          label: s.label,
          description: d,
        })),
        (t[7] = ee),
        (t[8] = d),
        (t[9] = r),
        (t[10] = i),
        (t[11] = s.label),
        (t[12] = _),
        (t[13] = v))
      : (v = t[13]),
    v
  );
}
function ut(e, t) {
  let n = 0;
  for (let r of t) e[r] && (n += 1);
  return n;
}
function dt(e) {
  let t = [];
  return (
    (e ?? []).forEach((e) => {
      switch (e.kind) {
        case `local`: {
          let n =
            e.summary?.cwd ??
            e.pendingWorktree?.startConversationParamsInput?.cwd ??
            e.pendingWorktree?.sourceWorkspaceRoot;
          n && t.push(n);
          return;
        }
        case `remote`:
          return;
      }
    }),
    t
  );
}
function ft({ tasks: e, gitOrigins: t, codexHome: n }) {
  let r = dt(e);
  if (r.length === 0) return [];
  let i = t ?? [],
    o = r
      .map((e) => {
        let t = Ue(e, i);
        return !t?.root || !N(t.root, n)
          ? e
          : (i.reduce(
              (e, r) =>
                !t.originUrl || r.originUrl !== t.originUrl || N(r.root, n)
                  ? e
                  : e
                    ? r.root.length > e.length
                      ? r.root
                      : e
                    : r.root,
              null,
            ) ?? t.root);
      })
      .filter((e) => !!e);
  return (0, Z.default)(o, (e) => a(e).replace(/\/+$/, ``));
}
function pt(e) {
  return l(e);
}
var X, Z, Q, $, mt;
function ht() {
  return (ht = e(() => {
    ((X = S()),
      w(),
      c(),
      y(),
      (Z = t(o(), 1)),
      j(),
      de(),
      _(),
      (Q = d()),
      E(),
      b(),
      xe(),
      H(),
      A(),
      re(),
      T(),
      Ne(),
      ye(),
      be(),
      We(),
      L(),
      ae(),
      he(),
      Ke(),
      U(),
      G(),
      J(),
      Be(),
      Oe(),
      i(),
      Pe(),
      B(),
      Se(),
      V(),
      x(),
      s(),
      ve(),
      ($ = h()),
      (mt = P(te, (e) => ({ ...Ie({ hostId: O, paths: [e] }), placeholderData: { existingPaths: [e] } }))));
  }))();
}
ht();
export { Ye as SelectWorkspacePage };
//# sourceMappingURL=select-workspace-page-20c205404c89.js.map
