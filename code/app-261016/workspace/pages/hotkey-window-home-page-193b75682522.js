import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  EO as r,
  FBt as i,
  Hft as a,
  LNt as o,
  MFt as s,
  NFt as c,
  NSt as l,
  PBt as u,
  Q$ as d,
  Rft as f,
  TO as p,
  Ty as m,
  USt as h,
  Uz as g,
  VSt as _,
  Wz as v,
  X0 as y,
  XOt as b,
  Y0 as ee,
  Y3 as x,
  Ylt as S,
  Yst as C,
  Z$ as w,
  Z3 as T,
  ZSt as E,
  _3 as D,
  _D as O,
  ast as k,
  b2 as A,
  ck as j,
  fD as te,
  fdt as M,
  gD as ne,
  iCt as re,
  iFt as N,
  iSt as P,
  iit as F,
  ist as I,
  jFt as L,
  mD as ie,
  nB as ae,
  nCt as oe,
  oit as se,
  okt as ce,
  pbt as R,
  rB as le,
  rk as ue,
  sct as de,
  tk as fe,
  tkt as z,
  v3 as pe,
  wy as me,
  y2 as he,
  yCt as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Aln as B,
  CDr as _e,
  Cjr as ve,
  Cxr as ye,
  Dk as be,
  FDr as xe,
  Gr as Se,
  Iwn as Ce,
  Ixr as we,
  Jr as Te,
  KBr as V,
  MDr as Ee,
  Mg as De,
  Mxr as H,
  Ng as U,
  Ok as Oe,
  Oln as ke,
  Own as Ae,
  R4t as je,
  Trn as Me,
  U4t as Ne,
  XAr as Pe,
  Xrn as Fe,
  Ysn as Ie,
  ZAr as Le,
  Zsn as Re,
  cft as ze,
  cxr as Be,
  dm as Ve,
  ewt as He,
  fQ as Ue,
  fm as We,
  fxr as Ge,
  ijr as Ke,
  imr as qe,
  lBr as Je,
  lrn as Ye,
  lxr as Xe,
  mBr as Ze,
  mQ as Qe,
  njr as $e,
  orn as et,
  pQ as W,
  pxr as tt,
  rmr as nt,
  tin as rt,
  tjr as it,
  twt as at,
  uBr as ot,
  uft as st,
  uin as ct,
  vxr as lt,
  wrn as ut,
  xjr as dt,
  zrn as ft,
} from "./app-initial-ad16eaadf81f.js";
import {
  Du as pt,
  Ef as G,
  Eu as mt,
  Fl as K,
  Fm as q,
  Hd as J,
  Im as ht,
  Nl as gt,
  Pl as _t,
  Qb as vt,
  Su as yt,
  Tf as bt,
  Uf as xt,
  Vd as St,
  Vf as Ct,
  Xb as Y,
  _ as wt,
  al as Tt,
  ax as Et,
  bu as Dt,
  cl as Ot,
  cx as kt,
  dx as At,
  ex as jt,
  ll as Mt,
  nx as Nt,
  ol as Pt,
  rl as Ft,
  sl as It,
  sx as Lt,
  tx as Rt,
  ul as zt,
  ux as Bt,
  v as Vt,
  wf as X,
} from "./app-primary-3e00728c2a4c.js";
import { n as Ht, t as Ut } from "./use-floating-window-pointer-interactivity-f11f99683166.js";
import {
  a as Wt,
  i as Gt,
  n as Kt,
  o as qt,
  r as Jt,
  t as Yt,
} from "./worktree-environment-dropdown-a906aa613d57.js";
import { n as Xt, t as Zt } from "./use-hotkey-window-dismiss-on-escape-4d2d7e9c5919.js";
function Qt(e) {
  let t = (0, $t.c)(61),
    {
      canUseCloud: r,
      composerMode: i,
      worktreePromptContext: a,
      setComposerMode: o,
      showLabel: s,
      disabledTooltipText: c,
      isWorktreeAvailable: l,
    } = e,
    u = s !== void 0 && s,
    f = n(_e),
    m = ce(),
    h = ve(`2785238453`),
    g = re(Le),
    _;
  t[0] !== g || t[1] !== a
    ? ((_ = a == null ? void 0 : { ...a, available: a.available && !g }), (t[0] = g), (t[1] = a), (t[2] = _))
    : (_ = t[2]);
  let v = oe(bt, _),
    y = i === `worktree` || (v && !h),
    b;
  t[3] !== i || t[4] !== l || t[5] !== y
    ? ((b =
        i === `cloud`
          ? (0, Z.jsx)(mt, { className: `icon-2xs` })
          : y && l
            ? (0, Z.jsx)(He, { className: `icon-2xs` })
            : (0, Z.jsx)(Ue, { className: `icon-2xs` })),
      (t[3] = i),
      (t[4] = l),
      (t[5] = y),
      (t[6] = b))
    : (b = t[6]);
  let S;
  t[7] !== i || t[8] !== l || t[9] !== u || t[10] !== y
    ? ((S = u
        ? (0, Z.jsx)(`span`, {
            className: `max-w-40 truncate text-start whitespace-nowrap`,
            children:
              i === `cloud`
                ? (0, Z.jsx)(z, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : y && l
                  ? (0, Z.jsx)(z, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, Z.jsx)(z, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[7] = i),
      (t[8] = l),
      (t[9] = u),
      (t[10] = y),
      (t[11] = S))
    : (S = t[11]);
  let C;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(p, { className: `icon-2xs text-tertiary` })), (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] !== b || t[14] !== S
    ? ((w = (0, Z.jsxs)(Z.Fragment, { children: [b, S, C] })), (t[13] = b), (t[14] = S), (t[15] = w))
    : (w = t[15]);
  let T = w;
  if (c) {
    let e;
    t[16] === T
      ? (e = t[17])
      : ((e = (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(x, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: T,
          }),
        })),
        (t[16] = T),
        (t[17] = e));
    let n;
    return (
      t[18] !== c || t[19] !== e
        ? ((n = (0, Z.jsx)(ae, { tooltipContent: c, children: e })), (t[18] = c), (t[19] = e), (t[20] = n))
        : (n = t[20]),
      n
    );
  }
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(z, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the chat`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[21] = E))
    : (E = t[21]);
  let O;
  t[22] === T
    ? (O = t[23])
    : ((O = (0, Z.jsx)(ae, {
        tooltipContent: E,
        children: (0, Z.jsx)(x, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: T,
        }),
      })),
      (t[22] = T),
      (t[23] = O));
  let k = i === `local` && !y ? he : void 0,
    A;
  t[24] !== i || t[25] !== f || t[26] !== o || t[27] !== v
    ? ((A = () => {
        (J(f, i, `local`, `native-control`, v), o(`local`));
      }),
      (t[24] = i),
      (t[25] = f),
      (t[26] = o),
      (t[27] = v),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(z, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[29] = j))
    : (j = t[29]);
  let te;
  t[30] !== A || t[31] !== k
    ? ((te = (0, Z.jsx)(ue.Item, { leftIconAsset: d, rightIconAsset: k, onSelect: A, children: j })),
      (t[30] = A),
      (t[31] = k),
      (t[32] = te))
    : (te = t[32]);
  let M = i === `cloud` ? he : void 0,
    ne = !r,
    N;
  t[33] !== i || t[34] !== f || t[35] !== o || t[36] !== v
    ? ((N = () => {
        (J(f, i, `cloud`, `native-control`, v), o(`cloud`));
      }),
      (t[33] = i),
      (t[34] = f),
      (t[35] = o),
      (t[36] = v),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== r || t[39] !== m
    ? ((P = r
        ? void 0
        : m.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[38] = r),
      (t[39] = m),
      (t[40] = P))
    : (P = t[40]);
  let F;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(z, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] !== M || t[43] !== ne || t[44] !== N || t[45] !== P
    ? ((I = (0, Z.jsx)(ue.Item, {
        leftIconAsset: ee,
        rightIconAsset: M,
        disabled: ne,
        onSelect: N,
        tooltipText: P,
        children: F,
      })),
      (t[42] = M),
      (t[43] = ne),
      (t[44] = N),
      (t[45] = P),
      (t[46] = I))
    : (I = t[46]);
  let L;
  t[47] !== i ||
  t[48] !== h ||
  t[49] !== m ||
  t[50] !== l ||
  t[51] !== f ||
  t[52] !== o ||
  t[53] !== v ||
  t[54] !== y
    ? ((L = h
        ? null
        : (0, Z.jsx)(ue.Item, {
            leftIconAsset: D,
            rightIconAsset: y ? he : void 0,
            onSelect: () => {
              (J(f, i, `worktree`, `native-control`, v), o(`worktree`));
            },
            disabled: !l,
            tooltipText: l
              ? void 0
              : m.formatMessage({
                  id: `composer.hotkeyWindow.modeDropdown.localOnly`,
                  defaultMessage: `Initialize a git repo to run chats in worktrees`,
                  description: `Tooltip for disabled hotkey-window worktree mode selector`,
                }),
            children: (0, Z.jsx)(z, {
              id: `composer.mode.worktreeSegment`,
              defaultMessage: `Worktree`,
              description: `Worktree mode label for the segmented toggle`,
            }),
          })),
      (t[47] = i),
      (t[48] = h),
      (t[49] = m),
      (t[50] = l),
      (t[51] = f),
      (t[52] = o),
      (t[53] = v),
      (t[54] = y),
      (t[55] = L))
    : (L = t[55]);
  let ie;
  return (
    t[56] !== te || t[57] !== I || t[58] !== L || t[59] !== O
      ? ((ie = (0, Z.jsxs)(fe, { triggerButton: O, contentWidth: `menuNarrow`, children: [te, I, L] })),
        (t[56] = te),
        (t[57] = I),
        (t[58] = L),
        (t[59] = O),
        (t[60] = ie))
      : (ie = t[60]),
    ie
  );
}
var $t, Z;
function en() {
  return (en = e(() => {
    (($t = u()),
      pe(),
      A(),
      y(),
      w(),
      E(),
      b(),
      G(),
      T(),
      j(),
      le(),
      r(),
      pt(),
      W(),
      at(),
      xe(),
      Pe(),
      dt(),
      St(),
      (Z = o()));
  }))();
}
function tn({ activeWorkspaceRoot: e, defaultToProjectless: t, localProjects: n, projectId: r }) {
  if (r === void 0) return t ? `~` : e;
  if (r == null) return `~`;
  let i = n[r];
  return f(i?.rootPaths);
}
function nn({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
function rn() {
  return (rn = e(() => {
    de();
  }))();
}
var an, on;
function sn() {
  return (sn = e(() => {
    ((an = t(N(), 1)),
      E(),
      de(),
      $e(),
      At(),
      Rt(),
      B(),
      rt(),
      vt(),
      _t(),
      G(),
      we(),
      Et(),
      xe(),
      Ie(),
      Ge(),
      se(),
      V(),
      Je(),
      rn(),
      (on = ge(
        _e,
        ({ authMethod: e, project: t }, { get: n, scope: r }) => {
          let i = n(Be),
            a = tn({
              activeWorkspaceRoot: i?.[0] ?? null,
              defaultToProjectless: F(r.get, S.hotkeyWindowProjectlessDefaultEnabled) === !0,
              localProjects: n(tt),
              projectId: t === void 0 ? void 0 : (t?.type === `local` && t.projectId) || null,
            }),
            o = t === void 0 ? n(ye) : n(lt, t?.type === `remote` ? t.projectId : null),
            s = o == null && a === `~`,
            c = o?.hostId ?? `local`,
            l = n(Ke, c),
            u = nn({ composerWorkspaceRoot: a, selectedRemoteProjectPath: o?.remotePath ?? null }),
            d =
              o == null &&
              a == null &&
              (t === void 0
                ? i == null
                : t?.type === `remote` &&
                  (H(r.get, P.REMOTE_PROJECTS).isLoading || H(r.get, P.SELECTED_PROJECT).isLoading)),
            f = ke({ cwd: u, hostId: c, isLoading: d }),
            { data: p, isLoading: m } = n(Y, { cwd: u, hostId: c, hostConfig: l, surface: `hotkey` }),
            h = p?.root ?? null,
            g = o == null && i != null && !m && h == null,
            _ = s || g,
            v = n(Xe, { hostId: c }).data?.codexHome,
            y = n(ot, `505458`) || n(X),
            b = n(ut, f),
            ee = {
              fallbackMode: `local`,
              isAvailabilityLoading: !_ && ((o == null && i == null) || m || n(Ze)),
              cloudUnavailableReason: Nt({
                canUseCloudInference: n(it, { name: `cloud.execution` }).isCapable,
                cloudAccess: n(Bt, e),
                supportsCloud: !_,
                isPrimaryReviewComposer: n(Lt),
                isRemoteProject:
                  o != null || (t === void 0 ? n(Re)?.type === `remote` : t?.type === `remote`),
              }),
              isLocalAvailable: !0,
              isWorktreeAvailable: u != null && h != null && y && !M(u, v),
            };
          return {
            workspaceRoot: a,
            remoteProject: o,
            hostId: c,
            hostConfig: l,
            projectRoot: u,
            isProjectless: s,
            isProjectLoading: d,
            isGitlessLocalProject: g,
            projectKey: f,
            gitRoot: h,
            availability: ee,
            effectiveMode: jt({
              ...ee,
              composerMode:
                n(gt, c) ??
                (b === `worktree` && n(Me) && (n(ot, `2785238453`) || n(K, c) === `local`) ? `local` : b),
              isEverydayWorkMode: !1,
            }),
          };
        },
        { isEqual: an.default },
      )));
  }))();
}
function cn(e) {
  let t = (0, ln.c)(41),
    { composerMode: r, worktreePromptContext: i, enabled: a, setComposerMode: o, isWorktreeAvailable: s } = e,
    c = n(_e),
    l = ce(),
    u = ve(`3724118644`),
    d = re(Le),
    f;
  t[0] !== d || t[1] !== i
    ? ((f = i == null ? void 0 : { ...i, available: i.available && !d }), (t[0] = d), (t[1] = i), (t[2] = f))
    : (f = t[2]);
  let p = oe(bt, f),
    m = ve(`2785238453`),
    h = r === `worktree` || p,
    g;
  t[3] !== r || t[4] !== c || t[5] !== o || t[6] !== p
    ? ((g = () => {
        let e = r === `worktree` || p ? `local` : `worktree`;
        (J(c, r, e, `keyboard-shortcut`, p), o(e));
      }),
      (t[3] = r),
      (t[4] = c),
      (t[5] = o),
      (t[6] = p),
      (t[7] = g))
    : (g = t[7]);
  let _ = a && s && !m,
    v;
  (t[8] === _ ? (v = t[9]) : ((v = { enabled: _ }), (t[8] = _), (t[9] = v)),
    U(`composer.toggleWorktreeMode`, g, v));
  let y;
  t[10] === l
    ? (y = t[11])
    : ((y = l.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[10] = l),
      (t[11] = y));
  let b;
  t[12] === l
    ? (b = t[13])
    : ((b = l.formatMessage({
        id: `composer.hotkeyWindow.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the Quick Chat local mode slash command`,
      })),
      (t[12] = l),
      (t[13] = b));
  let ee = a && (r !== `local` || p),
    x;
  t[14] !== r || t[15] !== c || t[16] !== o || t[17] !== p
    ? ((x = async () => {
        (J(c, r, `local`, `slash-command`, p), o(`local`));
      }),
      (t[14] = r),
      (t[15] = c),
      (t[16] = o),
      (t[17] = p),
      (t[18] = x))
    : (x = t[18]);
  let S = x,
    C;
  (t[19] !== y || t[20] !== b || t[21] !== ee || t[22] !== S
    ? ((C = {
        id: `local`,
        title: y,
        description: b,
        requiresEmptyComposer: !1,
        Icon: Ue,
        enabled: ee,
        onSelect: S,
      }),
      (t[19] = y),
      (t[20] = b),
      (t[21] = ee),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]),
    Oe(C));
  let w;
  t[24] === l
    ? (w = t[25])
    : ((w = l.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[24] = l),
      (t[25] = w));
  let T;
  t[26] !== l || t[27] !== u || t[28] !== h
    ? ((T =
        u && h
          ? l.formatMessage({
              id: `composer.worktreeSlashCommand.disableDescription`,
              defaultMessage: `Turn worktree mode off`,
              description: `Description for the worktree slash command when the new task is set to run in a worktree`,
            })
          : l.formatMessage({
              id: `composer.hotkeyWindow.mode.worktreeSlashCommand.description`,
              defaultMessage: `Run this chat in a new worktree`,
              description: `Description for the Quick Chat worktree mode slash command`,
            })),
      (t[26] = l),
      (t[27] = u),
      (t[28] = h),
      (t[29] = T))
    : (T = t[29]);
  let E = a && s && !d && (!u || !m) && (u || !h),
    D;
  t[30] !== r || t[31] !== c || t[32] !== o || t[33] !== p || t[34] !== h
    ? ((D = async () => {
        let e = h ? `local` : `worktree`;
        (J(c, r, e, `slash-command`, p), o(e));
      }),
      (t[30] = r),
      (t[31] = c),
      (t[32] = o),
      (t[33] = p),
      (t[34] = h),
      (t[35] = D))
    : (D = t[35]);
  let O = D,
    k;
  return (
    t[36] !== w || t[37] !== T || t[38] !== E || t[39] !== O
      ? ((k = {
          id: `worktree`,
          title: w,
          description: T,
          requiresEmptyComposer: !1,
          Icon: He,
          enabled: E,
          onSelect: O,
        }),
        (t[36] = w),
        (t[37] = T),
        (t[38] = E),
        (t[39] = O),
        (t[40] = k))
      : (k = t[40]),
    Oe(k),
    null
  );
}
var ln;
function un() {
  return (un = e(() => {
    ((ln = u()), E(), b(), be(), De(), St(), G(), W(), at(), xe(), Pe(), dt());
  }))();
}
function dn(e) {
  let t = (0, fn.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: pn,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    Ht(a)
  );
}
var fn, pn;
function mn() {
  return (mn = e(() => {
    ((fn = u()),
      Ut(),
      (pn = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
        `.codex-dialog-overlay[data-state="open"]`,
        `.codex-dialog[role="dialog"][data-state="open"]`,
      ]));
  }))();
}
var hn, gn, _n, vn;
function yn() {
  return (yn = e(() => {
    ((hn = `_Home_1v9n2_1`),
      (gn = `_HomeShell_1v9n2_26`),
      (_n = `_ShellUnderlay_1v9n2_27`),
      (vn = { Home: hn, HomeShell: gn, ShellUnderlay: _n }));
  }))();
}
function bn() {
  let e = (0, Dn.c)(140),
    t = n(_e);
  Xt();
  let r = ce(),
    i = _(),
    o = h(),
    { authMethod: l } = qe(),
    u = (0, Q.useRef)(null),
    d = (0, Q.useRef)(null),
    f = v(),
    p = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    g = i.state,
    y = g?.focusComposerNonce ?? null,
    b = g?.project,
    ee = b?.type === `local` ? b.projectId : null,
    x;
  e[0] !== l || e[1] !== b
    ? ((x = { authMethod: l, project: b }), (e[0] = l), (e[1] = b), (e[2] = x))
    : (x = e[2]);
  let {
      workspaceRoot: S,
      remoteProject: w,
      isProjectless: T,
      hostId: E,
      hostConfig: D,
      projectRoot: O,
      isProjectLoading: k,
      projectKey: A,
      gitRoot: j,
      availability: M,
      effectiveMode: N,
      isGitlessLocalProject: P,
    } = oe(on, x),
    F = re(Re),
    L = M.isWorktreeAvailable,
    ae = (L || M.isAvailabilityLoading) && N !== `cloud`,
    se;
  e[3] !== A || e[4] !== ae
    ? ((se = { projectKey: A, available: ae }), (e[3] = A), (e[4] = ae), (e[5] = se))
    : (se = e[5]);
  let R = se,
    le = re(et),
    ue = re(Ye),
    de = re(ft),
    fe;
  e[6] === t ? (fe = e[7]) : ((fe = Ee(t)), (e[6] = t), (e[7] = fe));
  let pe = oe(Ve, fe),
    he = N === `worktree` && O != null,
    ge;
  e[8] !== E || e[9] !== he
    ? ((ge = { enabled: he, hostId: E, source: `hotkey_window_worktree_source` }),
      (e[8] = E),
      (e[9] = he),
      (e[10] = ge))
    : (ge = e[10]);
  let { gitRoot: B } = yt(O, ge),
    ve = N === `worktree` ? ke({ cwd: B ?? j, hostId: E }) : null,
    ye = N === `worktree` && O != null,
    be;
  e[11] === ye ? (be = e[12]) : ((be = { enabled: ye }), (e[11] = ye), (e[12] = be));
  let { data: xe } = ht(B ?? O, D, `hotkey_window_home_page`, be),
    Ce = Fe(le, ue, xe ?? null, de, ve),
    we = N === `worktree` ? O : null,
    Te;
  e[13] !== E || e[14] !== we
    ? ((Te = { hostId: E, workspaceRoot: we }), (e[13] = E), (e[14] = we), (e[15] = Te))
    : (Te = e[15]);
  let {
      environments: V,
      isLoading: De,
      isFetching: H,
      error: U,
      resolvedConfigPath: Oe,
      repairConfigPath: Ae,
      updateSelection: je,
    } = Ne(Te),
    [Me, Pe] = (0, Q.useState)(!1),
    [Ie, Le] = (0, Q.useState)(null),
    Be;
  e[16] === y
    ? (Be = e[17])
    : ((Be = { activationNonce: y, interactiveRegionRef: d, onInteractiveChange: Cn }),
      (e[16] = y),
      (e[17] = Be));
  let He = dn(Be),
    Ue;
  (e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (e) => {
        Le(e.topInsetPx);
      }),
      (e[18] = Ue))
    : (Ue = e[18]),
    c(`hotkey-window-home-composer-position-changed`, Ue));
  let We;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        let t = u.current,
          n = d.current;
        if (!t || !n) return;
        let r = En(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of On)
            for (let t of document.querySelectorAll(e)) o = Math.min(o, t.getBoundingClientRect().top);
        let s = Math.max(0, Math.ceil(a.top - o)),
          c = {
            composerHeightPx: Math.ceil(a.height),
            composerLeftInsetPx: a.left,
            composerWidthPx: a.width,
            minimumComposerTopInsetPx: s,
            restingComposerTopInsetPx: Math.ceil(Math.max(0, i.height - a.height - r)),
          },
          l = m.current;
        (l?.minimumComposerTopInsetPx !== c.minimumComposerTopInsetPx ||
          l.restingComposerTopInsetPx !== c.restingComposerTopInsetPx ||
          l.composerHeightPx !== c.composerHeightPx ||
          l.composerLeftInsetPx !== c.composerLeftInsetPx ||
          l.composerWidthPx !== c.composerWidthPx) &&
          ((m.current = c), I.hotkeyWindowHotkeys?.homeLayoutChanged(c));
      }),
      (e[19] = We))
    : (We = e[19]);
  let Ge = We,
    Ke;
  (e[20] === y ? (Ke = e[21]) : ((Ke = [y]), (e[20] = y), (e[21] = Ke)), (0, Q.useEffect)(Sn, Ke));
  let Je = pe || Me,
    Xe,
    Ze;
  (e[22] === Je
    ? ((Xe = e[23]), (Ze = e[24]))
    : ((Xe = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), Ge(Je));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t),
          r = Je && typeof MutationObserver < `u` ? new MutationObserver(t) : null;
        return (
          d.current != null && n?.observe(d.current),
          r?.observe(document.body, { childList: !0, subtree: !0 }),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect(), r?.disconnect());
          }
        );
      }),
      (Ze = [Je]),
      (e[22] = Je),
      (e[23] = Xe),
      (e[24] = Ze)),
    (0, Q.useLayoutEffect)(Xe, Ze));
  let $e;
  e[25] !== A || e[26] !== t
    ? (($e = (e) => {
        Ot(t, A, e);
      }),
      (e[25] = A),
      (e[26] = t),
      (e[27] = $e))
    : ($e = e[27]);
  let W = $e,
    tt;
  e[28] !== t || e[29] !== ve
    ? ((tt = (e) => {
        ct(t, e, ve);
      }),
      (e[28] = t),
      (e[29] = ve),
      (e[30] = tt))
    : (tt = e[30]);
  let nt = tt,
    rt;
  e[31] !== E ||
  e[32] !== O ||
  e[33] !== U ||
  e[34] !== H ||
  e[35] !== De ||
  e[36] !== b ||
  e[37] !== F ||
  e[38] !== V
    ? ((rt = (e) => {
        if (O == null) {
          s.dispatchMessage(`show-settings`, { section: `local-environments` });
          return;
        }
        let t = (b === void 0 ? F : b)?.projectId,
          n = new URLSearchParams({ workspaceRoot: O });
        (t != null && n.set(`projectId`, t),
          s.dispatchMessage(`show-settings`, {
            section:
              e == null && (De || H || U != null || V.length > 0)
                ? `local-environments?${n.toString()}`
                : ze({ configPath: e, projectId: t == null ? void 0 : a(t), workspaceRoot: O }).slice(10),
            state: { hostId: E, returnTo: `/settings/local-environments` },
          }));
      }),
      (e[31] = E),
      (e[32] = O),
      (e[33] = U),
      (e[34] = H),
      (e[35] = De),
      (e[36] = b),
      (e[37] = F),
      (e[38] = V),
      (e[39] = rt))
    : (rt = e[39]);
  let it = rt,
    at = xn,
    ot;
  e[40] !== i.hash || e[41] !== i.pathname || e[42] !== i.search || e[43] !== g || e[44] !== o || e[45] !== t
    ? ((ot = (e) => {
        Pt(t);
        let n = { ...g, project: e };
        o({ pathname: i.pathname, search: i.search, hash: i.hash }, { replace: !0, state: n });
      }),
      (e[40] = i.hash),
      (e[41] = i.pathname),
      (e[42] = i.search),
      (e[43] = g),
      (e[44] = o),
      (e[45] = t),
      (e[46] = ot))
    : (ot = e[46]);
  let st = ot,
    lt;
  e[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e) => {
        p.current === e.pointerId &&
          ((p.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          I.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[47] = lt))
    : (lt = e[47]);
  let ut = lt,
    dt;
  e[48] === f
    ? (dt = e[49])
    : ((dt = (e) => {
        e.button === 0 &&
          e.target instanceof Element &&
          e.currentTarget.contains(e.target) &&
          !e.target.closest(
            `button, a, input, textarea, select, [contenteditable=true], [role=button], [role=combobox], [role=menuitem]`,
          ) &&
          (e.preventDefault(),
          (p.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          I.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
            guideColor: getComputedStyle(e.currentTarget).getPropertyValue(`--codex-base-accent`).trim(),
            reducedMotion: f,
          }));
      }),
      (e[48] = f),
      (e[49] = dt));
  let pt = dt,
    G;
  e[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        p.current === e.pointerId && I.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[50] = G))
    : (G = e[50]);
  let mt = G,
    K;
  if (
    e[51] !== N ||
    e[52] !== O ||
    e[53] !== w?.label ||
    e[54] !== w?.remotePath ||
    e[55] !== r ||
    e[56] !== T
  ) {
    let t =
      Qe(w?.remotePath ?? O, w?.label) ??
      r.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (T) {
      let t;
      (e[58] === r
        ? (t = e[59])
        : ((t = r.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask ChatGPT anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[58] = r),
          (e[59] = t)),
        (K = t));
    } else if (N === `cloud`) {
      let t;
      (e[60] === r
        ? (t = e[61])
        : ((t = r.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask ChatGPT anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[60] = r),
          (e[61] = t)),
        (K = t));
    } else
      K =
        N === `worktree`
          ? r.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask ChatGPT anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : r.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask ChatGPT anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[51] = N),
      (e[52] = O),
      (e[53] = w?.label),
      (e[54] = w?.remotePath),
      (e[55] = r),
      (e[56] = T),
      (e[57] = K));
  } else K = e[57];
  let q;
  if (k) {
    let t;
    (e[62] === r
      ? (t = e[63])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[62] = r),
        (e[63] = t)),
      (q = t));
  } else if (T) {
    let t;
    (e[64] === r
      ? (t = e[65])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Standalone chats run in a local folder`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[64] = r),
        (e[65] = t)),
      (q = t));
  } else if (P) {
    let t;
    (e[66] === r
      ? (t = e[67])
      : ((t = r.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[66] = r),
        (e[67] = t)),
      (q = t));
  }
  let J;
  e[68] !== Ce || e[69] !== D || e[70] !== N || e[71] !== O || e[72] !== j || e[73] !== nt || e[74] !== B
    ? ((J =
        N === `worktree`
          ? (0, $.jsx)(Wt, {
              startingState: Ce,
              setStartingState: nt,
              hostConfig: D,
              gitRootOverride: B ?? O,
              branchSource: `worktree`,
            })
          : j == null
            ? null
            : (0, $.jsx)(Jt, { gitRoot: j, hostConfig: D, localConversationId: null, shouldShow: !0 })),
      (e[68] = Ce),
      (e[69] = D),
      (e[70] = N),
      (e[71] = O),
      (e[72] = j),
      (e[73] = nt),
      (e[74] = B),
      (e[75] = J))
    : (J = e[75]);
  let gt = J,
    _t;
  e[76] === r
    ? (_t = e[77])
    : ((_t = r.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Chat settings`,
        description: `Accessible label for the hotkey window chat settings menu`,
      })),
      (e[76] = r),
      (e[77] = _t));
  let vt = _t,
    bt,
    xt;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, $.jsx)(kt, {})), (xt = (0, $.jsx)(Mt, {})), (e[78] = bt), (e[79] = xt))
    : ((bt = e[78]), (xt = e[79]));
  let St = He ? `` : void 0,
    Y;
  e[80] === Ie
    ? (Y = e[81])
    : ((Y = Ie == null ? void 0 : { bottom: `auto`, top: Ie }), (e[80] = Ie), (e[81] = Y));
  let Tt;
  e[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, $.jsx)(`div`, { className: vn.ShellUnderlay, "aria-hidden": `true` })), (e[82] = Tt))
    : (Tt = e[82]);
  let Et = !T && !k,
    Dt;
  e[83] !== N || e[84] !== L || e[85] !== W || e[86] !== Et || e[87] !== R
    ? ((Dt = (0, $.jsx)(cn, {
        worktreePromptContext: R,
        composerMode: N,
        enabled: Et,
        setComposerMode: W,
        isWorktreeAvailable: L,
      })),
      (e[83] = N),
      (e[84] = L),
      (e[85] = W),
      (e[86] = Et),
      (e[87] = R),
      (e[88] = Dt))
    : (Dt = e[88]);
  let At;
  e[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = { kind: `hotkey` }), (e[89] = At))
    : (At = e[89]);
  let jt = S ?? (T || b !== void 0 ? `~` : void 0),
    Nt = T ? null : (b ?? F),
    It;
  e[90] === vt
    ? (It = e[91])
    : ((It = (0, $.jsx)(ne, { asChild: !0, children: (0, $.jsx)(me, { label: vt }) })),
      (e[90] = vt),
      (e[91] = It));
  let Lt;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lt = (0, $.jsx)(z, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[92] = Lt))
    : (Lt = e[92]);
  let Rt = b === void 0 ? void 0 : ee,
    zt;
  e[93] !== st || e[94] !== Rt
    ? ((zt = (0, $.jsx)(Tn, {
        label: Lt,
        control: (0, $.jsx)(wt, {
          activeProjectIdOverride: Rt,
          allowRemoteProjects: !1,
          onProjectSelected: st,
        }),
      })),
      (e[93] = st),
      (e[94] = Rt),
      (e[95] = zt))
    : (zt = e[95]);
  let Bt;
  e[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = (0, $.jsx)(z, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[96] = Bt))
    : (Bt = e[96]);
  let Vt = M.cloudUnavailableReason == null,
    X;
  e[97] !== N || e[98] !== L || e[99] !== W || e[100] !== q || e[101] !== Vt || e[102] !== R
    ? ((X = (0, $.jsx)(Tn, {
        label: Bt,
        control: (0, $.jsx)(Qt, {
          worktreePromptContext: R,
          canUseCloud: Vt,
          composerMode: N,
          setComposerMode: W,
          showLabel: !0,
          disabledTooltipText: q,
          isWorktreeAvailable: L,
        }),
      })),
      (e[97] = N),
      (e[98] = L),
      (e[99] = W),
      (e[100] = q),
      (e[101] = Vt),
      (e[102] = R),
      (e[103] = X))
    : (X = e[103]);
  let Ht;
  e[104] !== N ||
  e[105] !== it ||
  e[106] !== U ||
  e[107] !== H ||
  e[108] !== De ||
  e[109] !== Oe ||
  e[110] !== je ||
  e[111] !== Ae ||
  e[112] !== V
    ? ((Ht =
        N === `worktree`
          ? (0, $.jsx)(Tn, {
              label: (0, $.jsx)(z, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, $.jsx)(Yt, {
                environments: V,
                isLoading: De || (H && V.length === 0),
                hasError: U != null,
                selectedConfigPath: Oe,
                repairConfigPath: Ae,
                onSelectConfigPath: je,
                onOpenSettings: it,
              }),
            })
          : null),
      (e[104] = N),
      (e[105] = it),
      (e[106] = U),
      (e[107] = H),
      (e[108] = De),
      (e[109] = Oe),
      (e[110] = je),
      (e[111] = Ae),
      (e[112] = V),
      (e[113] = Ht))
    : (Ht = e[113]);
  let Ut;
  e[114] === gt
    ? (Ut = e[115])
    : ((Ut = gt
        ? (0, $.jsx)(Tn, {
            label: (0, $.jsx)(z, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: gt,
          })
        : null),
      (e[114] = gt),
      (e[115] = Ut));
  let Gt;
  e[116] === N
    ? (Gt = e[117])
    : ((Gt =
        N === `cloud` ? null : (0, $.jsx)(Se, { conversationId: null, hostId: C, DropdownContainer: wn })),
      (e[116] = N),
      (e[117] = Gt));
  let Kt;
  e[118] !== zt || e[119] !== X || e[120] !== Ht || e[121] !== Ut || e[122] !== Gt
    ? ((Kt = (0, $.jsx)(ie, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `w-auto min-w-[320px] rounded-3xl p-0 no-drag`,
        children: (0, $.jsxs)(`div`, { className: `flex flex-col gap-4 p-3`, children: [zt, X, Ht, Ut, Gt] }),
      })),
      (e[118] = zt),
      (e[119] = X),
      (e[120] = Ht),
      (e[121] = Ut),
      (e[122] = Gt),
      (e[123] = Kt))
    : (Kt = e[123]);
  let qt;
  e[124] !== Me || e[125] !== It || e[126] !== Kt
    ? ((qt = (0, $.jsxs)(te, { open: Me, onOpenChange: Pe, children: [It, Kt] })),
      (e[124] = Me),
      (e[125] = It),
      (e[126] = Kt),
      (e[127] = qt))
    : (qt = e[127]);
  let Zt;
  e[128] !== M || e[129] !== K || e[130] !== jt || e[131] !== Nt || e[132] !== qt
    ? ((Zt = (0, $.jsx)(`div`, {
        className: `relative no-drag`,
        children: (0, $.jsx)(Ct, {
          placement: At,
          children: (0, $.jsx)(Ft, {
            showWorkspaceDropdownInUtilityBar: !1,
            showUtilityBar: !1,
            composerModeAvailability: M,
            placeholderText: K,
            defaultCwd: jt,
            selectedProject: Nt,
            hotkeyWindowHomeFooterControls: qt,
            onLocalConversationCreated: at,
          }),
        }),
      })),
      (e[128] = M),
      (e[129] = K),
      (e[130] = jt),
      (e[131] = Nt),
      (e[132] = qt),
      (e[133] = Zt))
    : (Zt = e[133]);
  let $t;
  return (
    e[134] !== pt || e[135] !== St || e[136] !== Y || e[137] !== Dt || e[138] !== Zt
      ? (($t = (0, $.jsxs)(`div`, {
          ref: u,
          className: vn.Home,
          children: [
            bt,
            xt,
            (0, $.jsxs)(`div`, {
              ref: d,
              className: vn.HomeShell,
              onLostPointerCapture: ut,
              onPointerCancel: ut,
              onPointerDown: pt,
              onPointerMove: mt,
              onPointerUp: ut,
              "data-drag-reactivation": St,
              style: Y,
              children: [Tt, Dt, Zt],
            }),
          ],
        })),
        (e[134] = pt),
        (e[135] = St),
        (e[136] = Y),
        (e[137] = Dt),
        (e[138] = Zt),
        (e[139] = $t))
      : ($t = e[139]),
    $t
  );
}
function xn(e) {
  I.hotkeyWindowHotkeys?.open({ path: R(e) });
}
function Sn() {
  Ae();
}
function Cn(e) {
  I.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function wn(e) {
  let t = (0, Dn.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(z, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n ? (i = t[2]) : ((i = (0, $.jsx)(Tn, { label: r, control: n })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Tn(e) {
  let t = (0, Dn.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, { className: `shrink-0 text-sm font-medium text-default`, children: n })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, $.jsx)(`div`, { className: `min-w-0`, children: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, { className: `flex items-center justify-between gap-4`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function En(e) {
  return Number.parseFloat(e) || 0;
}
var Dn, Q, $, On;
function kn() {
  return (kn = e(() => {
    ((Dn = u()),
      E(),
      de(),
      (Q = i()),
      b(),
      l(),
      nt(),
      At(),
      qt(),
      Tt(),
      xt(),
      Te(),
      B(),
      Gt(),
      rt(),
      Ce(),
      en(),
      Vt(),
      We(),
      Kt(),
      zt(),
      It(),
      m(),
      O(),
      q(),
      g(),
      je(),
      L(),
      k(),
      xe(),
      Ie(),
      st(),
      V(),
      Dt(),
      sn(),
      un(),
      Zt(),
      mn(),
      yn(),
      ($ = o()),
      (On = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }))();
}
kn();
export { bn as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page-193b75682522.js.map
