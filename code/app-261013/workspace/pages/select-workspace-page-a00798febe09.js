import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $X as r,
  AO as i,
  CO as a,
  Cot as o,
  Dht as s,
  Ext as c,
  F7 as l,
  FR as u,
  Hot as d,
  I7 as f,
  IDt as p,
  Ixt as m,
  L7 as h,
  LR as g,
  Pxt as _,
  Rnt as v,
  TO as y,
  VDt as b,
  Vot as x,
  Vxt as S,
  X$ as C,
  Y$ as w,
  _Mt as ee,
  _Pt as te,
  _ht as T,
  _xt as E,
  crt as D,
  cut as O,
  eZ as k,
  gMt as A,
  gPt as j,
  hPt as ne,
  hot as re,
  i3 as M,
  iot as N,
  jDt as P,
  lot as F,
  nrt as ie,
  r3 as ae,
  rst as I,
  sMt as oe,
  srt as L,
  t3 as se,
  vzt as ce,
  wot as le,
  xMt as R,
  yzt as z,
  zR as B,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  AEr as de,
  Ast as V,
  B_n as fe,
  D_n as H,
  Emr as pe,
  FFr as me,
  Jdr as he,
  Jst as ge,
  Mst as _e,
  N_n as ve,
  Nst as ye,
  OWt as be,
  Ost as U,
  P_n as xe,
  QDr as W,
  T_n as Se,
  Tmr as Ce,
  V_n as we,
  XDr as Te,
  Xdr as Ee,
  Xer as De,
  Yst as Oe,
  c9t as ke,
  cEn as Ae,
  dP as je,
  etr as G,
  jkt as Me,
  jst as Ne,
  kEr as Pe,
  kWt as Fe,
  kst as K,
  l9t as Ie,
  mP as Le,
  m_r as Re,
  oFr as ze,
  rEn as Be,
  tEn as Ve,
  v_r as He,
  zFr as q,
} from "./app-initial-5851df3f6cb1.js";
function Ue(e) {
  let t = (0, J.c)(13),
    {
      children: n,
      onOpenChange: r,
      onStartFromScratch: i,
      onUseExistingFolder: o,
      open: s,
      triggerButton: c,
    } = e,
    l = (0, We.useRef)(!1),
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = (e) => {
        l.current && ((l.current = !1), e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = u));
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(y.Item, {
        leftIconAsset: k,
        onSelect: () => {
          l.current = !0;
        },
        children: (0, Y.jsx)(p, {
          id: `projectSetup.addProjectMenu.startFromScratch`,
          defaultMessage: `Start from scratch`,
          description: `Menu item that creates a new local project folder`,
        }),
      })),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(p, {
        id: `projectSetup.addProjectMenu.useExistingFolder`,
        defaultMessage: `Use an existing folder`,
        description: `Menu item that opens the existing folder picker`,
      })),
      (t[3] = f))
    : (f = t[3]);
  let m;
  t[4] === o
    ? (m = t[5])
    : ((m = (0, Y.jsx)(y.Item, { leftIconAsset: w, onSelect: o, children: f })), (t[4] = o), (t[5] = m));
  let h;
  return (
    t[6] !== n || t[7] !== r || t[8] !== s || t[9] !== u || t[10] !== m || t[11] !== c
      ? ((h = (0, Y.jsxs)(a, {
          triggerButton: c,
          contentWidth: `menu`,
          onOpenChange: r,
          onCloseAutoFocus: u,
          open: s,
          children: [d, m, n],
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = s),
        (t[9] = u),
        (t[10] = m),
        (t[11] = c),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var J, We, Y;
function Ge() {
  return (Ge = e(() => {
    ((J = ce()), C(), r(), (We = z()), P(), i(), (Y = R()));
  }))();
}
function Ke() {
  let e = (0, X.c)(87),
    t = m(o),
    n = c(),
    r = b(),
    i = S(Be) ?? `auto`,
    { data: a, isFetching: s } = Le(),
    u = a === void 0 ? [] : a,
    p = Me(),
    g;
  e[0] === p ? (g = e[1]) : ((g = (e) => p || !Ce(e)), (e[0] = p), (e[1] = g));
  let _ = u.filter(g).map(tt),
    { data: v, isFetching: y } = S(He),
    x = lt(_),
    C = (0, Z.default)(x, et).sort($e),
    { data: w, isFetching: ee } = ue(fe, { params: { dirs: C }, source: `onboarding_workspace_select` }),
    { data: T, isFetching: E } = Ee(),
    D = Fe(),
    O;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (e[2] = O)) : (O = e[2]);
  let [k, A] = (0, Q.useState)(O),
    ne;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((ne = {}), (e[3] = ne)) : (ne = e[3]);
  let [M, N] = (0, Q.useState)(ne),
    [P, F] = (0, Q.useState)(null),
    [ae, I] = (0, Q.useState)(null),
    oe = (0, Q.useRef)(0),
    L = v?.roots,
    se = L != null && L.length > 0,
    ce = ut({ tasks: _, gitOrigins: w?.origins, codexHome: T?.codexHome }),
    le = (0, Z.default)([...(L ?? []), ...ce, ...k], Qe).sort(Ze),
    R;
  e[4] === v?.labels
    ? (R = e[5])
    : ((R = (e) => {
        let t = v?.labels?.[e]?.trim();
        return t ? { root: e, label: t } : { root: e, label: dt(e) };
      }),
      (e[4] = v?.labels),
      (e[5] = R));
  let z = le.map(R),
    B = z.map(Xe),
    V;
  e[6] === M ? (V = e[7]) : ((V = (e) => M[e]), (e[6] = M), (e[7] = V));
  let H = B.filter(V),
    pe = (B.length > 0 && H.length === B.length) || (H.length > 0 && H.length < B.length && `indeterminate`),
    he;
  (e[8] !== B || e[9] !== t || e[10] !== M || e[11] !== A || e[12] !== N
    ? ((he = (e) => {
        A((t) => (0, Z.default)([...t, e.root], Ye));
        let n = { ...M, [e.root]: !0 };
        N(n);
        let r = B.includes(e.root),
          i = ct(n, B) + +!r,
          a = r ? B.length : B.length + 1;
        W(t, h, { action: `toggle_root`, selectedWorkspacesCount: i, totalWorkspacesCount: a, checked: !0 });
      }),
      (e[8] = B),
      (e[9] = t),
      (e[10] = M),
      (e[11] = A),
      (e[12] = N),
      (e[13] = he))
    : (he = e[13]),
    te(`workspace-root-option-picked`, he));
  let ye;
  (e[14] !== B.length || e[15] !== t || e[16] !== F || e[17] !== I
    ? ((ye = (e) => {
        if ((F(null), e.success)) {
          (W(t, f, { selectedWorkspacesCount: 1, totalWorkspacesCount: B.length, autoNavigated: !1 }),
            I(null),
            Ae(t, Math.floor(Date.now() / 1e3)),
            t.set(Be, `auto`));
          return;
        }
        I(e.error ?? null);
      }),
      (e[14] = B.length),
      (e[15] = t),
      (e[16] = F),
      (e[17] = I),
      (e[18] = ye))
    : (ye = e[18]),
    te(`electron-onboarding-skip-workspace-result`, ye));
  let be;
  e[19] !== se || e[20] !== t || e[21] !== I
    ? ((be = () => {
        (I(null),
          W(t, l, { hasExistingWorkspaces: se, source: `onboarding_modal` }),
          j.dispatchMessage(`electron-pick-workspace-root-option`, { allowMultiple: !1 }));
      }),
      (e[19] = se),
      (e[20] = t),
      (e[21] = I),
      (e[22] = be))
    : (be = e[22]);
  let U = be,
    xe;
  e[23] !== P || e[24] !== t || e[25] !== F || e[26] !== I
    ? ((xe = () => {
        P ??
          (I(null),
          F(`skip`),
          j.dispatchMessage(`electron-onboarding-skip-workspace`, { initializeGitRepository: !t.get(de) }));
      }),
      (e[23] = P),
      (e[24] = t),
      (e[25] = F),
      (e[26] = I),
      (e[27] = xe))
    : (xe = e[27]);
  let Se = xe,
    we;
  e[28] !== B || e[29] !== t || e[30] !== M || e[31] !== A || e[32] !== N || e[33] !== I
    ? ((we = (e, n) => {
        (I(null), A((t) => (0, Z.default)([...t, e], Je)));
        let r = { ...M, [e]: n };
        (N(r),
          W(t, h, {
            action: `toggle_root`,
            checked: n,
            selectedWorkspacesCount: ct(r, B),
            totalWorkspacesCount: B.length,
          }));
      }),
      (e[28] = B),
      (e[29] = t),
      (e[30] = M),
      (e[31] = A),
      (e[32] = N),
      (e[33] = I),
      (e[34] = we))
    : (we = e[34]);
  let Te = we,
    De;
  e[35] !== B || e[36] !== t || e[37] !== M || e[38] !== N || e[39] !== I
    ? ((De = (e) => {
        I(null);
        let n = { ...M };
        for (let t of B) n[t] = e;
        N(n);
        let r = ct(n, B);
        W(t, h, {
          action: `select_all`,
          checked: e,
          selectedWorkspacesCount: r,
          totalWorkspacesCount: B.length,
        });
      }),
      (e[35] = B),
      (e[36] = t),
      (e[37] = M),
      (e[38] = N),
      (e[39] = I),
      (e[40] = De))
    : (De = e[40]);
  let Oe = De,
    ke;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = { queryKey: [ie, `paths-exist`] }), (e[41] = ke))
    : (ke = e[41]);
  let je = d(ke),
    G = s || y || ee || E || je > 0,
    Ne = z.length > 0,
    Pe = H.length > 0,
    K = se || ce.length > 0,
    Ie = !K && !G && !Ne,
    Re = (0, Q.useRef)(!1),
    ze = (0, Q.useRef)(!1),
    Ve;
  e[42] !== n || e[43] !== i || e[44] !== B.length || e[45] !== L || e[46] !== t
    ? ((Ve = async (e, r) => {
        if (ze.current) return;
        let a = t.get(me),
          o = a == null ? `/` : ge(`/`, a.pathname, a.search);
        ze.current = !0;
        let s = e;
        if (
          (i === `workspace` && L != null && (s = (0, Z.default)([...L, ...e], qe)),
          (
            await ve()
              .createOrSelectLocalProjects(s)
              .finally(() => {
                ze.current = !1;
              })
          ).length === 0)
        )
          return;
        (Ae(t, Math.floor(Date.now() / 1e3)),
          W(t, f, { selectedWorkspacesCount: e.length, totalWorkspacesCount: B.length, autoNavigated: r }),
          t.set(Be, `auto`),
          (oe.current += 1));
        let c = t.get(me);
        (c?.key === a?.key || (o === `/` && c?.pathname === `/` && c.search === `` && c.hash === ``)) &&
          n(o, { replace: !0, state: { focusComposerNonce: oe.current } });
      }),
      (e[42] = n),
      (e[43] = i),
      (e[44] = B.length),
      (e[45] = L),
      (e[46] = t),
      (e[47] = Ve))
    : (Ve = e[47]);
  let q = Ve,
    Ue;
  e[48] === r
    ? (Ue = e[49])
    : ((Ue = r.formatMessage({
        id: `onboarding.workspace.consentError`,
        defaultMessage: `Could not add the selected folders`,
        description: `Error shown when checking or adding onboarding project folders fails`,
      })),
      (e[48] = r),
      (e[49] = Ue));
  let J = Ue,
    We;
  e[50] !== J || e[51] !== q || e[52] !== t
    ? ((We = (e) => {
        q(e, !0).catch(() =>
          t.get(re).danger(J, { errorAnalytics: { toastId: `selectWorkspacePage.autoContinueEvent` } }),
        );
      }),
      (e[50] = J),
      (e[51] = q),
      (e[52] = t),
      (e[53] = We))
    : (We = e[53]);
  let Y = (0, Q.useEffectEvent)(We),
    Ge;
  e[54] !== Y || e[55] !== K || e[56] !== G || e[57] !== H
    ? ((Ge = () => {
        K || Re.current || G || (H.length !== 0 && ((Re.current = !0), Y(H)));
      }),
      (e[54] = Y),
      (e[55] = K),
      (e[56] = G),
      (e[57] = H),
      (e[58] = Ge))
    : (Ge = e[58]);
  let Ke;
  (e[59] !== K || e[60] !== G || e[61] !== H
    ? ((Ke = [K, G, H]), (e[59] = K), (e[60] = G), (e[61] = H), (e[62] = Ke))
    : (Ke = e[62]),
    (0, Q.useEffect)(Ge, Ke));
  let nt;
  e[63] !== J || e[64] !== q || e[65] !== P || e[66] !== H || e[67] !== F || e[68] !== I
    ? ((nt = () => {
        (I(null),
          P ??
            (F(`continue`),
            q(H, !1)
              .catch(() => I(J))
              .finally(() => F(null))));
      }),
      (e[63] = J),
      (e[64] = q),
      (e[65] = P),
      (e[66] = H),
      (e[67] = F),
      (e[68] = I),
      (e[69] = nt))
    : (nt = e[69]);
  let it = nt,
    ot;
  return (
    e[70] !== z ||
    e[71] !== it ||
    e[72] !== U ||
    e[73] !== Se ||
    e[74] !== Oe ||
    e[75] !== Te ||
    e[76] !== Ne ||
    e[77] !== Pe ||
    e[78] !== r ||
    e[79] !== G ||
    e[80] !== D ||
    e[81] !== P ||
    e[82] !== pe ||
    e[83] !== H ||
    e[84] !== Ie ||
    e[85] !== ae
      ? ((ot = (0, $.jsx)(_e, {
          children: Ie
            ? (0, $.jsx)(rt, {
                isRemoteHost: D,
                handleOpenFolder: U,
                handleSkip: Se,
                pendingAction: P,
                skipErrorMessage: ae,
              })
            : (0, $.jsx)(at, {
                isLoadingRoots: G,
                hasAvailableRoots: Ne,
                availableOptions: z,
                selectedRoots: H,
                selectAllState: pe !== `indeterminate` && pe,
                handleToggleSelectAll: Oe,
                handleToggleWorkspace: Te,
                intl: r,
                handleOpenFolder: U,
                hasSelectedRoots: Pe,
                isRemoteHost: D,
                handleSkip: Se,
                pendingAction: P,
                skipErrorMessage: ae,
                handleContinue: it,
              }),
        })),
        (e[70] = z),
        (e[71] = it),
        (e[72] = U),
        (e[73] = Se),
        (e[74] = Oe),
        (e[75] = Te),
        (e[76] = Ne),
        (e[77] = Pe),
        (e[78] = r),
        (e[79] = G),
        (e[80] = D),
        (e[81] = P),
        (e[82] = pe),
        (e[83] = H),
        (e[84] = Ie),
        (e[85] = ae),
        (e[86] = ot))
      : (ot = e[86]),
    ot
  );
}
function qe(e) {
  return B(e);
}
function Je(e) {
  return B(e);
}
function Ye(e) {
  return B(e);
}
function Xe(e) {
  return e.root;
}
function Ze(e, t) {
  return e.localeCompare(t);
}
function Qe(e) {
  return B(e);
}
function $e(e, t) {
  return e.localeCompare(t);
}
function et(e) {
  return B(e);
}
function tt(e) {
  return { kind: `local`, key: De(e.conversationId), at: e.createdAt, summary: e };
}
function nt(e) {
  let t = (0, X.c)(7),
    { children: n, showIcon: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r ? (0, $.jsx)(ke, { className: `h-10 w-10`, "aria-hidden": `true` }) : null),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(p, {
        id: `electron.onboarding.workspace.title`,
        defaultMessage: `Select a project`,
        description: `Title on the desktop onboarding workspace selection page`,
      })),
      (o = (0, $.jsx)(p, {
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
      ? ((s = (0, $.jsx)(Ne, {
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
function rt(e) {
  let t = (0, X.c)(12),
    { isRemoteHost: n, handleOpenFolder: r, handleSkip: i, pendingAction: a, skipErrorMessage: o } = e,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(it, {
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
    ? ((c = n ? null : (0, $.jsx)(ot, { handleSkip: i, pendingAction: a, skipErrorMessage: o })),
      (t[4] = i),
      (t[5] = n),
      (t[6] = a),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsx)(nt, {
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
function it(e) {
  let t = (0, X.c)(10),
    { className: r, color: i, isRemoteHost: a, onStartFromScratch: o, onUseExistingFolder: s, size: c } = e,
    l = a ? s : void 0,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(p, {
        id: `electron.onboarding.workspace.openFolder`,
        defaultMessage: `Add project`,
        description: `Button label to add a workspace during desktop onboarding`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] !== r || t[2] !== i || t[3] !== c || t[4] !== l
    ? ((d = (0, $.jsx)(n, { className: r, color: i, size: c, onClick: l, children: u })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c),
      (t[4] = l),
      (t[5] = d))
    : (d = t[5]);
  let f = d;
  if (a) return f;
  let m;
  return (
    t[6] !== o || t[7] !== s || t[8] !== f
      ? ((m = (0, $.jsx)(Ue, { triggerButton: f, onStartFromScratch: o, onUseExistingFolder: s })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = f),
        (t[9] = m))
      : (m = t[9]),
    m
  );
}
function at(e) {
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
      hasSelectedRoots: m,
      isRemoteHost: h,
      handleSkip: g,
      pendingAction: _,
      skipErrorMessage: v,
    } = e,
    y;
  t[0] === o ? (y = t[1]) : ((y = new Set(o)), (t[0] = o), (t[1] = y));
  let b = y,
    x;
  t[2] === r
    ? (x = t[3])
    : ((x = r
        ? (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-center gap-2 rounded-2xl border border-default px-5 py-6`,
            children: [
              (0, $.jsx)(ae, { className: `h-4 w-4 text-default` }),
              (0, $.jsx)(`span`, {
                className: `text-sm text-codex-description`,
                children: (0, $.jsx)(p, {
                  id: `electron.onboarding.workspace.loading`,
                  defaultMessage: `Loading projects…`,
                  description: `Loading state while onboarding workspace options are fetched`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = r),
      (t[3] = x));
  let S;
  t[4] !== a ||
  t[5] !== c ||
  t[6] !== l ||
  t[7] !== i ||
  t[8] !== u ||
  t[9] !== r ||
  t[10] !== h ||
  t[11] !== s ||
  t[12] !== b
    ? ((S = i
        ? (0, $.jsxs)(K, {
            className: A(r && `pointer-events-none opacity-50`),
            ariaLabel: u.formatMessage({
              id: `electron.onboarding.workspace.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the available workspaces list during onboarding`,
            }),
            children: [
              (0, $.jsx)(V, {
                checkboxId: `workspace-root-select-all`,
                checkboxClassName: U,
                checked: s,
                disabled: r,
                onCheckedChange: (e) => {
                  c(e);
                },
                label: (0, $.jsx)(p, {
                  id: `electron.onboarding.workspace.selectAll`,
                  defaultMessage: `Select all`,
                  description: `Checkbox label for selecting all workspaces during onboarding`,
                }),
              }),
              a.map((e, t) =>
                (0, $.jsx)(
                  st,
                  {
                    index: t,
                    isDisabled: r,
                    isSelected: b.has(e.root),
                    skipExistenceCheck: h,
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
            children: (0, $.jsx)(p, {
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
      (t[10] = h),
      (t[11] = s),
      (t[12] = b),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== x || t[15] !== S
    ? ((C = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-2`, children: [x, S] })),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] !== d || t[18] !== g || t[19] !== h
    ? ((w = (0, $.jsx)(it, {
        className: `flex-1 justify-center border-default bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-text/5`,
        color: `outline`,
        size: `large`,
        isRemoteHost: h,
        onStartFromScratch: g,
        onUseExistingFolder: d,
      })),
      (t[17] = d),
      (t[18] = g),
      (t[19] = h),
      (t[20] = w))
    : (w = t[20]);
  let ee = !m || r || _ != null,
    te = _ === `continue`,
    T;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(p, {
        id: `electron.onboarding.workspace.continue`,
        defaultMessage: `Continue`,
        description: `Button label to continue after selecting workspaces during onboarding`,
      })),
      (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] !== f || t[23] !== ee || t[24] !== te
    ? ((E = (0, $.jsx)(n, {
        className: `flex-1 justify-center text-base leading-6 font-medium`,
        color: `primary`,
        size: `large`,
        disabled: ee,
        loading: te,
        onClick: f,
        children: T,
      })),
      (t[22] = f),
      (t[23] = ee),
      (t[24] = te),
      (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] !== w || t[27] !== E
    ? ((D = (0, $.jsxs)(`div`, { className: `flex w-full items-center gap-4`, children: [w, E] })),
      (t[26] = w),
      (t[27] = E),
      (t[28] = D))
    : (D = t[28]);
  let O;
  t[29] !== g || t[30] !== h || t[31] !== _ || t[32] !== v
    ? ((O = h ? null : (0, $.jsx)(ot, { handleSkip: g, pendingAction: _, skipErrorMessage: v })),
      (t[29] = g),
      (t[30] = h),
      (t[31] = _),
      (t[32] = v),
      (t[33] = O))
    : (O = t[33]);
  let k;
  t[34] !== D || t[35] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [D, O] })),
      (t[34] = D),
      (t[35] = O),
      (t[36] = k))
    : (k = t[36]);
  let j;
  return (
    t[37] !== k || t[38] !== C
      ? ((j = (0, $.jsx)(nt, {
          showIcon: !1,
          children: (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-4`, children: [C, k] }),
        })),
        (t[37] = k),
        (t[38] = C),
        (t[39] = j))
      : (j = t[39]),
    j
  );
}
function ot(e) {
  let t = (0, X.c)(11),
    { handleSkip: r, pendingAction: i, skipErrorMessage: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o =
        a == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-center text-sm text-danger`,
              children: (0, $.jsx)(p, {
                id: `electron.onboarding.workspace.skip.error`,
                defaultMessage: `Couldn't create a new project: {message}`,
                description: `Error shown when creating a new project fails during onboarding`,
                values: { message: a },
              }),
            })),
      (t[0] = a),
      (t[1] = o));
  let s = i != null,
    c;
  t[2] === i
    ? (c = t[3])
    : ((c =
        i === `skip`
          ? (0, $.jsx)(p, {
              id: `electron.onboarding.workspace.skipping`,
              defaultMessage: `Creating a new project…`,
              description: `Button label shown while creating a new project during onboarding`,
            })
          : (0, $.jsx)(p, {
              id: `electron.onboarding.workspace.skip`,
              defaultMessage: `Skip`,
              description: `Button label to skip workspace selection during onboarding`,
            })),
      (t[2] = i),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== s || t[6] !== c
    ? ((l = (0, $.jsx)(n, {
        className: `w-full justify-center text-base leading-6 font-medium`,
        color: `ghost`,
        size: `large`,
        disabled: s,
        onClick: r,
        children: c,
      })),
      (t[4] = r),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== o || t[9] !== l
      ? ((u = (0, $.jsxs)(`div`, { className: `flex w-full flex-col items-center gap-2`, children: [o, l] })),
        (t[8] = o),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function st(e) {
  let t = (0, X.c)(21),
    { index: n, isDisabled: r, isSelected: i, skipExistenceCheck: a, option: o, onToggle: c } = e,
    l = o.root,
    u;
  t[0] === l ? (u = t[1]) : ((u = s(l)), (t[0] = l), (t[1] = u));
  let d = u,
    f = B(l).replace(/\/+$/, ``),
    p,
    m;
  t[2] === l
    ? ((p = t[3]), (m = t[4]))
    : ((p = { hostId: N, paths: [l] }), (m = { existingPaths: [l] }), (t[2] = l), (t[3] = p), (t[4] = m));
  let h = !a,
    g;
  t[5] === h ? (g = t[6]) : ((g = { enabled: h }), (t[5] = h), (t[6] = g));
  let _;
  t[7] !== p || t[8] !== m || t[9] !== g
    ? ((_ = { params: p, placeholderData: m, queryConfig: g }),
      (t[7] = p),
      (t[8] = m),
      (t[9] = g),
      (t[10] = _))
    : (_ = t[10]);
  let { data: v } = D(`paths-exist`, _);
  if (!(a || (v?.existingPaths ?? []).some((e) => B(e).replace(/\/+$/, ``) === f))) return null;
  let y = `workspace-root-${n}`,
    b;
  t[11] !== c || t[12] !== l
    ? ((b = (e) => {
        c(l, e);
      }),
      (t[11] = c),
      (t[12] = l),
      (t[13] = b))
    : (b = t[13]);
  let x;
  return (
    t[14] !== y || t[15] !== d || t[16] !== r || t[17] !== i || t[18] !== o.label || t[19] !== b
      ? ((x = (0, $.jsx)(V, {
          checkboxId: y,
          checkboxClassName: U,
          checked: i,
          disabled: r,
          onCheckedChange: b,
          label: o.label,
          description: d,
        })),
        (t[14] = y),
        (t[15] = d),
        (t[16] = r),
        (t[17] = i),
        (t[18] = o.label),
        (t[19] = b),
        (t[20] = x))
      : (x = t[20]),
    x
  );
}
function ct(e, t) {
  let n = 0;
  for (let r of t) e[r] && (n += 1);
  return n;
}
function lt(e) {
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
function ut({ tasks: e, gitOrigins: t, codexHome: n }) {
  let r = lt(e);
  if (r.length === 0) return [];
  let i = t ?? [],
    a = r
      .map((e) => {
        let t = Se(e, i);
        return !t?.root || !O(t.root, n)
          ? e
          : (i.reduce(
              (e, r) =>
                !t.originUrl || r.originUrl !== t.originUrl || O(r.root, n)
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
  return (0, Z.default)(a, (e) => B(e).replace(/\/+$/, ``));
}
function dt(e) {
  return u(e);
}
var X, Z, Q, $;
function ft() {
  return (ft = e(() => {
    ((X = ce()),
      v(),
      x(),
      ee(),
      (Z = t(oe(), 1)),
      _(),
      I(),
      T(),
      (Q = z()),
      P(),
      E(),
      je(),
      pe(),
      se(),
      M(),
      F(),
      we(),
      he(),
      be(),
      Ie(),
      ne(),
      q(),
      Ve(),
      Oe(),
      Te(),
      Ge(),
      xe(),
      H(),
      le(),
      Re(),
      Pe(),
      ze(),
      G(),
      g(),
      L(),
      ye(),
      ($ = R()));
  }))();
}
ft();
export { Ke as SelectWorkspacePage };
//# sourceMappingURL=select-workspace-page-a00798febe09.js.map
