import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  B4t as a,
  B6t as o,
  B8 as s,
  Bq as c,
  Cd as l,
  Cpn as u,
  Dd as d,
  Ed as f,
  F3t as p,
  Gh as m,
  Gx as h,
  H4t as g,
  HQt as _,
  Hq as v,
  IXt as y,
  JG as b,
  JXt as x,
  Jyt as S,
  K4t as C,
  KG as w,
  KYt as T,
  Kx as ee,
  Kyt as E,
  MMt as D,
  N3t as O,
  O3t as k,
  Od as A,
  Oen as j,
  Opn as te,
  Pen as M,
  QGt as ne,
  QV as N,
  QXt as re,
  RWt as P,
  Rit as ie,
  Rpn as ae,
  S8 as oe,
  Smn as se,
  Spn as F,
  T8 as ce,
  Tbt as le,
  Td as ue,
  UQt as de,
  VQt as fe,
  Wh as pe,
  X8t as I,
  Xqt as me,
  ZG as L,
  ZGt as R,
  ZV as he,
  _Jt as z,
  a3t as ge,
  akt as _e,
  bmn as ve,
  e0t as ye,
  e4t as be,
  eZt as B,
  ekt as xe,
  fJt as Se,
  g3t as Ce,
  hmn as V,
  ijt as we,
  jMt as Te,
  kMt as H,
  kmn as U,
  o3t as Ee,
  ojt as De,
  qq as Oe,
  qqt as ke,
  s3t as Ae,
  vJt as W,
  wd as je,
  xbt as Me,
  xmn as Ne,
  z8 as Pe,
  zit as G,
  zpn as Fe,
} from "./app-initial-f094ef01c64d.js";
import { mS as Ie, pS as Le } from "./app-primary-4c40d73a1074.js";
function Re(e) {
  let t = (0, K.c)(13),
    {
      children: n,
      onOpenChange: r,
      onStartFromScratch: i,
      onUseExistingFolder: a,
      open: o,
      triggerButton: s,
    } = e,
    c = (0, q.useRef)(!1),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = (e) => {
        c.current && ((c.current = !1), e.preventDefault(), i());
      }),
      (t[0] = i),
      (t[1] = l));
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(b.Item, {
        LeftIcon: he,
        onSelect: () => {
          c.current = !0;
        },
        children: (0, J.jsx)(u, {
          id: `projectSetup.addProjectMenu.startFromScratch`,
          defaultMessage: `Start from scratch`,
          description: `Menu item that creates a new local project folder`,
        }),
      })),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(u, {
        id: `projectSetup.addProjectMenu.useExistingFolder`,
        defaultMessage: `Use an existing folder`,
        description: `Menu item that opens the existing folder picker`,
      })),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === a
    ? (p = t[5])
    : ((p = (0, J.jsx)(b.Item, { LeftIcon: ie, onSelect: a, children: f })),
      (t[4] = a),
      (t[5] = p));
  let m;
  return (
    t[6] !== n || t[7] !== r || t[8] !== o || t[9] !== l || t[10] !== p || t[11] !== s
      ? ((m = (0, J.jsxs)(w, {
          triggerButton: s,
          contentWidth: `menu`,
          onOpenChange: r,
          onCloseAutoFocus: l,
          open: o,
          children: [d, p, n],
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = l),
        (t[10] = p),
        (t[11] = s),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var K,
  q,
  J,
  ze = e(() => {
    ((K = U()), (q = t(i(), 1)), F(), L(), G(), N(), (J = V()));
  });
function Be() {
  let e = (0, X.c)(78),
    t = n(ge),
    r = x(),
    i = te(),
    a = p(v) ?? `auto`,
    { data: o, isFetching: s } = le(),
    c = o === void 0 ? [] : o,
    l = Ie(),
    u;
  e[0] === l ? (u = e[1]) : ((u = (e) => !De(e, l)), (e[0] = l), (e[1] = u));
  let f = c.filter(u).map(Ye),
    { data: m, isFetching: h } = p(me),
    { data: g, isFetching: y } = O(Pe, {
      params: { dirs: (0, Z.default)(nt(f), Je).sort(qe) },
      source: `onboarding_workspace_select`,
    }),
    { data: b, isFetching: C } = S(),
    w = ee(),
    T;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = []), (e[2] = T)) : (T = e[2]);
  let [E, D] = (0, Q.useState)(T),
    k;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = {}), (e[3] = k)) : (k = e[3]);
  let [A, j] = (0, Q.useState)(k),
    [M, N] = (0, Q.useState)(!1),
    [re, P] = (0, Q.useState)(null),
    ie;
  e[4] === i
    ? (ie = e[5])
    : ((ie = i.formatMessage({
        id: `electron.onboarding.workspace.skip.error.unknown`,
        defaultMessage: `Unknown error`,
        description: `Fallback error message when onboarding skip fails without details`,
      })),
      (e[4] = i),
      (e[5] = ie));
  let ae = ie,
    oe = (0, Q.useRef)(0),
    F = m?.roots,
    ce = F != null && F.length > 0,
    ue = rt({ tasks: f, gitOrigins: g?.origins, codexHome: b?.codexHome }),
    pe = (0, Z.default)([...(F ?? []), ...ue, ...E], Ke).sort(Ge),
    I;
  e[6] === m?.labels
    ? (I = e[7])
    : ((I = (e) => {
        let t = m?.labels?.[e]?.trim();
        return t ? { root: e, label: t } : { root: e, label: it(e) };
      }),
      (e[6] = m?.labels),
      (e[7] = I));
  let L = pe.map(I),
    R = L.map(We),
    he;
  e[8] === A ? (he = e[9]) : ((he = (e) => A[e]), (e[8] = A), (e[9] = he));
  let z = R.filter(he),
    _e =
      (R.length > 0 && z.length === R.length) ||
      (z.length > 0 && z.length < R.length && `indeterminate`),
    ve;
  (e[10] !== R || e[11] !== t || e[12] !== A || e[13] !== D || e[14] !== j
    ? ((ve = (e) => {
        D((t) => (0, Z.default)([...t, e.root], Ue));
        let n = { ...A, [e.root]: !0 };
        j(n);
        let r = R.includes(e.root),
          i = tt(n, R) + +!r,
          a = r ? R.length : R.length + 1;
        B(t, de, {
          action: `toggle_root`,
          selectedWorkspacesCount: i,
          totalWorkspacesCount: a,
          checked: !0,
        });
      }),
      (e[10] = R),
      (e[11] = t),
      (e[12] = A),
      (e[13] = D),
      (e[14] = j),
      (e[15] = ve))
    : (ve = e[15]),
    se(`workspace-root-option-picked`, ve));
  let ye;
  (e[16] !== R.length || e[17] !== t || e[18] !== N || e[19] !== P || e[20] !== ae
    ? ((ye = (e) => {
        if ((N(!1), e.success)) {
          (B(t, _, {
            selectedWorkspacesCount: 1,
            totalWorkspacesCount: R.length,
            autoNavigated: !1,
          }),
            P(null),
            Oe(t, Math.floor(Date.now() / 1e3)),
            t.set(v, `auto`));
          return;
        }
        let n = e.error ?? ae;
        P(n);
      }),
      (e[16] = R.length),
      (e[17] = t),
      (e[18] = N),
      (e[19] = P),
      (e[20] = ae),
      (e[21] = ye))
    : (ye = e[21]),
    se(`electron-onboarding-skip-workspace-result`, ye));
  let be;
  e[22] !== ce || e[23] !== t || e[24] !== P
    ? ((be = () => {
        (P(null),
          B(t, fe, { hasExistingWorkspaces: ce, source: `onboarding_modal` }),
          Ne.dispatchMessage(`electron-pick-workspace-root-option`, { allowMultiple: !1 }));
      }),
      (e[22] = ce),
      (e[23] = t),
      (e[24] = P),
      (e[25] = be))
    : (be = e[25]);
  let xe = be,
    V;
  e[26] !== M || e[27] !== t || e[28] !== N || e[29] !== P
    ? ((V = () => {
        M ||
          (P(null),
          N(!0),
          Ne.dispatchMessage(`electron-onboarding-skip-workspace`, {
            initializeGitRepository: !t.get(ne),
          }));
      }),
      (e[26] = M),
      (e[27] = t),
      (e[28] = N),
      (e[29] = P),
      (e[30] = V))
    : (V = e[30]);
  let we = V,
    Te;
  e[31] !== R || e[32] !== t || e[33] !== A || e[34] !== D || e[35] !== j || e[36] !== P
    ? ((Te = (e, n) => {
        (P(null), D((t) => (0, Z.default)([...t, e], He)));
        let r = { ...A, [e]: n };
        (j(r),
          B(t, de, {
            action: `toggle_root`,
            checked: n,
            selectedWorkspacesCount: tt(r, R),
            totalWorkspacesCount: R.length,
          }));
      }),
      (e[31] = R),
      (e[32] = t),
      (e[33] = A),
      (e[34] = D),
      (e[35] = j),
      (e[36] = P),
      (e[37] = Te))
    : (Te = e[37]);
  let H = Te,
    U;
  e[38] !== R || e[39] !== t || e[40] !== A || e[41] !== j || e[42] !== P
    ? ((U = (e) => {
        P(null);
        let n = { ...A };
        for (let t of R) n[t] = e;
        j(n);
        let r = tt(n, R);
        B(t, de, {
          action: `select_all`,
          checked: e,
          selectedWorkspacesCount: r,
          totalWorkspacesCount: R.length,
        });
      }),
      (e[38] = R),
      (e[39] = t),
      (e[40] = A),
      (e[41] = j),
      (e[42] = P),
      (e[43] = U))
    : (U = e[43]);
  let Ee = U,
    ke;
  e[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = { queryKey: [Se, `paths-exist`] }), (e[44] = ke))
    : (ke = e[44]);
  let Ae = Ce(ke),
    W = s || h || y || C || Ae > 0,
    je = L.length > 0,
    Me = z.length > 0,
    G = ce || ue.length > 0,
    Fe = !G && !W && !je,
    Le = (0, Q.useRef)(!1),
    Re;
  e[45] !== r || e[46] !== a || e[47] !== R.length || e[48] !== F || e[49] !== t
    ? ((Re = (e, n) => {
        B(t, _, {
          selectedWorkspacesCount: e.length,
          totalWorkspacesCount: R.length,
          autoNavigated: n,
        });
        let i = e;
        (Oe(t, Math.floor(Date.now() / 1e3)),
          a === `workspace` && F != null && (i = (0, Z.default)([...F, ...e], Ve)),
          Ne.dispatchMessage(`electron-update-workspace-root-options`, { roots: i }),
          t.set(v, `auto`),
          (oe.current += 1),
          r(`/`, { replace: !0, state: { focusComposerNonce: oe.current } }));
      }),
      (e[45] = r),
      (e[46] = a),
      (e[47] = R.length),
      (e[48] = F),
      (e[49] = t),
      (e[50] = Re))
    : (Re = e[50]);
  let K = Re,
    q,
    J;
  (e[51] !== K || e[52] !== G || e[53] !== W || e[54] !== z
    ? ((q = () => {
        G || Le.current || W || (z.length !== 0 && ((Le.current = !0), K(z, !0)));
      }),
      (J = [K, G, W, z]),
      (e[51] = K),
      (e[52] = G),
      (e[53] = W),
      (e[54] = z),
      (e[55] = q),
      (e[56] = J))
    : ((q = e[55]), (J = e[56])),
    (0, Q.useEffect)(q, J));
  let ze;
  e[57] !== K || e[58] !== z || e[59] !== P
    ? ((ze = () => {
        (P(null), K(z, !1));
      }),
      (e[57] = K),
      (e[58] = z),
      (e[59] = P),
      (e[60] = ze))
    : (ze = e[60]);
  let Be = ze,
    Y;
  return (
    e[61] !== L ||
    e[62] !== Be ||
    e[63] !== xe ||
    e[64] !== we ||
    e[65] !== Ee ||
    e[66] !== H ||
    e[67] !== je ||
    e[68] !== Me ||
    e[69] !== i ||
    e[70] !== W ||
    e[71] !== w ||
    e[72] !== M ||
    e[73] !== _e ||
    e[74] !== z ||
    e[75] !== Fe ||
    e[76] !== re
      ? ((Y = (0, $.jsx)(d, {
          children: Fe
            ? (0, $.jsx)(Xe, {
                isRemoteHost: w,
                handleOpenFolder: xe,
                handleSkip: we,
                isSkipPending: M,
                skipErrorMessage: re,
              })
            : (0, $.jsx)(Qe, {
                isLoadingRoots: W,
                hasAvailableRoots: je,
                availableOptions: L,
                selectedRoots: z,
                selectAllState: _e !== `indeterminate` && _e,
                handleToggleSelectAll: Ee,
                handleToggleWorkspace: H,
                intl: i,
                handleOpenFolder: xe,
                hasSelectedRoots: Me,
                isRemoteHost: w,
                handleSkip: we,
                isSkipPending: M,
                skipErrorMessage: re,
                handleContinue: Be,
              }),
        })),
        (e[61] = L),
        (e[62] = Be),
        (e[63] = xe),
        (e[64] = we),
        (e[65] = Ee),
        (e[66] = H),
        (e[67] = je),
        (e[68] = Me),
        (e[69] = i),
        (e[70] = W),
        (e[71] = w),
        (e[72] = M),
        (e[73] = _e),
        (e[74] = z),
        (e[75] = Fe),
        (e[76] = re),
        (e[77] = Y))
      : (Y = e[77]),
    Y
  );
}
function Ve(e) {
  return C(e);
}
function He(e) {
  return C(e);
}
function Ue(e) {
  return C(e);
}
function We(e) {
  return e.root;
}
function Ge(e, t) {
  return e.localeCompare(t);
}
function Ke(e) {
  return C(e);
}
function qe(e, t) {
  return e.localeCompare(t);
}
function Je(e) {
  return C(e);
}
function Ye(e) {
  return { kind: `local`, key: xe(e.id), at: e.createdAt, conversation: e };
}
function Y(e) {
  let t = (0, X.c)(7),
    { children: n, showIcon: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r ? (0, $.jsx)(pe, { className: `h-10 w-10`, "aria-hidden": `true` }) : null),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(u, {
        id: `electron.onboarding.workspace.title`,
        defaultMessage: `Select a project`,
        description: `Title on the desktop onboarding workspace selection page`,
      })),
      (o = (0, $.jsx)(u, {
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
      ? ((s = (0, $.jsx)(f, {
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
function Xe(e) {
  let t = (0, X.c)(12),
    {
      isRemoteHost: n,
      handleOpenFolder: r,
      handleSkip: i,
      isSkipPending: a,
      skipErrorMessage: o,
    } = e,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, $.jsx)(Ze, {
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
    ? ((c = n ? null : (0, $.jsx)($e, { handleSkip: i, isSkipPending: a, skipErrorMessage: o })),
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
          children: (0, $.jsxs)(`div`, {
            className: `flex w-full flex-col gap-3`,
            children: [s, c],
          }),
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Ze(e) {
  let t = (0, X.c)(10),
    {
      className: n,
      color: r,
      isRemoteHost: i,
      onStartFromScratch: a,
      onUseExistingFolder: o,
      size: s,
    } = e,
    c = i ? o : void 0,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(u, {
        id: `electron.onboarding.workspace.openFolder`,
        defaultMessage: `Add project`,
        description: `Button label to add a workspace during desktop onboarding`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let d;
  t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== c
    ? ((d = (0, $.jsx)(H, { className: n, color: r, size: s, onClick: c, children: l })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d;
  if (i) return f;
  let p;
  return (
    t[6] !== a || t[7] !== o || t[8] !== f
      ? ((p = (0, $.jsx)(Re, { triggerButton: f, onStartFromScratch: a, onUseExistingFolder: o })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function Qe(e) {
  let t = (0, X.c)(39),
    {
      isLoadingRoots: n,
      hasAvailableRoots: r,
      availableOptions: i,
      selectedRoots: a,
      selectAllState: o,
      handleToggleSelectAll: s,
      handleToggleWorkspace: c,
      intl: d,
      handleOpenFolder: f,
      handleContinue: p,
      hasSelectedRoots: m,
      isRemoteHost: h,
      handleSkip: g,
      isSkipPending: _,
      skipErrorMessage: v,
    } = e,
    y;
  t[0] === a ? (y = t[1]) : ((y = new Set(a)), (t[0] = a), (t[1] = y));
  let b = y,
    x;
  t[2] === n
    ? (x = t[3])
    : ((x = n
        ? (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-center gap-2 rounded-2xl border border-default px-5 py-6`,
            children: [
              (0, $.jsx)(Te, { className: `h-4 w-4 text-default` }),
              (0, $.jsx)(`span`, {
                className: `text-sm text-codex-description`,
                children: (0, $.jsx)(u, {
                  id: `electron.onboarding.workspace.loading`,
                  defaultMessage: `Loading projects…`,
                  description: `Loading state while onboarding workspace options are fetched`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = x));
  let S;
  t[4] !== i ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== r ||
  t[8] !== d ||
  t[9] !== n ||
  t[10] !== h ||
  t[11] !== o ||
  t[12] !== b
    ? ((S = r
        ? (0, $.jsxs)(je, {
            className: ae(n && `pointer-events-none opacity-50`),
            ariaLabel: d.formatMessage({
              id: `electron.onboarding.workspace.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the available workspaces list during onboarding`,
            }),
            children: [
              (0, $.jsx)(ue, {
                checkboxId: `workspace-root-select-all`,
                checkboxClassName: l,
                checked: o,
                disabled: n,
                onCheckedChange: (e) => {
                  s(e);
                },
                label: (0, $.jsx)(u, {
                  id: `electron.onboarding.workspace.selectAll`,
                  defaultMessage: `Select all`,
                  description: `Checkbox label for selecting all workspaces during onboarding`,
                }),
              }),
              i.map((e, t) =>
                (0, $.jsx)(
                  et,
                  {
                    index: t,
                    isDisabled: n,
                    isSelected: b.has(e.root),
                    skipExistenceCheck: h,
                    option: e,
                    onToggle: c,
                  },
                  e.root,
                ),
              ),
            ],
          })
        : (0, $.jsx)(`div`, {
            className: `text-center text-sm text-codex-description`,
            children: (0, $.jsx)(u, {
              id: `electron.onboarding.workspace.empty`,
              defaultMessage: `Add a project to continue.`,
              description: `Empty state shown when no workspaces are selected during onboarding`,
            }),
          })),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = r),
      (t[8] = d),
      (t[9] = n),
      (t[10] = h),
      (t[11] = o),
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
  t[17] !== f || t[18] !== g || t[19] !== h
    ? ((w = (0, $.jsx)(Ze, {
        className: `flex-1 justify-center border-default bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-text/5`,
        color: `outline`,
        size: `large`,
        isRemoteHost: h,
        onStartFromScratch: g,
        onUseExistingFolder: f,
      })),
      (t[17] = f),
      (t[18] = g),
      (t[19] = h),
      (t[20] = w))
    : (w = t[20]);
  let T = !m || n,
    ee;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(u, {
        id: `electron.onboarding.workspace.continue`,
        defaultMessage: `Continue`,
        description: `Button label to continue after selecting workspaces during onboarding`,
      })),
      (t[21] = ee))
    : (ee = t[21]);
  let E;
  t[22] !== p || t[23] !== T
    ? ((E = (0, $.jsx)(H, {
        className: `flex-1 justify-center text-base leading-6 font-medium`,
        color: `primary`,
        size: `large`,
        disabled: T,
        onClick: p,
        children: ee,
      })),
      (t[22] = p),
      (t[23] = T),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] !== w || t[26] !== E
    ? ((D = (0, $.jsxs)(`div`, { className: `flex w-full items-center gap-4`, children: [w, E] })),
      (t[25] = w),
      (t[26] = E),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== g || t[29] !== h || t[30] !== _ || t[31] !== v
    ? ((O = h ? null : (0, $.jsx)($e, { handleSkip: g, isSkipPending: _, skipErrorMessage: v })),
      (t[28] = g),
      (t[29] = h),
      (t[30] = _),
      (t[31] = v),
      (t[32] = O))
    : (O = t[32]);
  let k;
  t[33] !== O || t[34] !== D
    ? ((k = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [D, O] })),
      (t[33] = O),
      (t[34] = D),
      (t[35] = k))
    : (k = t[35]);
  let A;
  return (
    t[36] !== k || t[37] !== C
      ? ((A = (0, $.jsx)(Y, {
          showIcon: !1,
          children: (0, $.jsxs)(`div`, {
            className: `flex w-full flex-col gap-4`,
            children: [C, k],
          }),
        })),
        (t[36] = k),
        (t[37] = C),
        (t[38] = A))
      : (A = t[38]),
    A
  );
}
function $e(e) {
  let t = (0, X.c)(11),
    { handleSkip: n, isSkipPending: r, skipErrorMessage: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-center text-sm text-danger`,
              children: (0, $.jsx)(u, {
                id: `electron.onboarding.workspace.skip.error`,
                defaultMessage: `Couldn't create a new project: {message}`,
                description: `Error shown when creating a new project fails during onboarding`,
                values: { message: i },
              }),
            })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = r
        ? (0, $.jsx)(u, {
            id: `electron.onboarding.workspace.skipping`,
            defaultMessage: `Creating a new project…`,
            description: `Button label shown while creating a new project during onboarding`,
          })
        : (0, $.jsx)(u, {
            id: `electron.onboarding.workspace.skip`,
            defaultMessage: `Skip`,
            description: `Button label to skip workspace selection during onboarding`,
          })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] !== n || t[5] !== r || t[6] !== o
    ? ((s = (0, $.jsx)(H, {
        className: `w-full justify-center text-base leading-6 font-medium`,
        color: `ghost`,
        size: `large`,
        disabled: r,
        onClick: n,
        children: o,
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== a || t[9] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          className: `flex w-full flex-col items-center gap-2`,
          children: [a, s],
        })),
        (t[8] = a),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function et(e) {
  let t = (0, X.c)(21),
    { index: n, isDisabled: r, isSelected: i, skipExistenceCheck: a, option: o, onToggle: s } = e,
    c = o.root,
    u;
  t[0] === c ? (u = t[1]) : ((u = M(c)), (t[0] = c), (t[1] = u));
  let d = u,
    f = C(c).replace(/\/+$/, ``),
    p,
    m;
  t[2] === c
    ? ((p = t[3]), (m = t[4]))
    : ((p = { hostId: be, paths: [c] }),
      (m = { existingPaths: [c] }),
      (t[2] = c),
      (t[3] = p),
      (t[4] = m));
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
  let { data: v } = W(`paths-exist`, _);
  if (!(a || (v?.existingPaths ?? []).some((e) => C(e).replace(/\/+$/, ``) === f))) return null;
  let y = `workspace-root-${n}`,
    b;
  t[11] !== s || t[12] !== c
    ? ((b = (e) => {
        s(c, e);
      }),
      (t[11] = s),
      (t[12] = c),
      (t[13] = b))
    : (b = t[13]);
  let x;
  return (
    t[14] !== y || t[15] !== d || t[16] !== r || t[17] !== i || t[18] !== o.label || t[19] !== b
      ? ((x = (0, $.jsx)(ue, {
          checkboxId: y,
          checkboxClassName: l,
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
function tt(e, t) {
  let n = 0;
  for (let r of t) e[r] && (n += 1);
  return n;
}
function nt(e) {
  let t = [];
  return (
    (e ?? []).forEach((e) => {
      switch (e.kind) {
        case `local`: {
          let n =
            e.conversation?.cwd ??
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
function rt({ tasks: e, gitOrigins: t, codexHome: n }) {
  let r = nt(e);
  if (r.length === 0) return [];
  let i = t ?? [];
  return (0, Z.default)(
    r
      .map((e) => {
        let t = oe(e, i);
        return !t?.root || !I(t.root, n)
          ? e
          : (i.reduce(
              (e, r) =>
                !t.originUrl || r.originUrl !== t.originUrl || I(r.root, n)
                  ? e
                  : e
                    ? r.root.length > e.length
                      ? r.root
                      : e
                    : r.root,
              null,
            ) ?? t.root);
      })
      .filter((e) => !!e),
    (e) => C(e).replace(/\/+$/, ``),
  );
}
function it(e) {
  return a(e);
}
var X, Z, Q, $;
e(() => {
  ((X = U()),
    ye(),
    Ae(),
    Fe(),
    (Z = t(P(), 1)),
    k(),
    o(),
    j(),
    (Q = t(i(), 1)),
    F(),
    y(),
    Me(),
    we(),
    r(),
    D(),
    s(),
    E(),
    Le(),
    h(),
    m(),
    ve(),
    c(),
    re(),
    ze(),
    ce(),
    Ee(),
    ke(),
    R(),
    T(),
    _e(),
    g(),
    z(),
    A(),
    ($ = V()));
})();
export { Be as SelectWorkspacePage };
//# sourceMappingURL=select-workspace-page-7b2efabbff85.js.map
