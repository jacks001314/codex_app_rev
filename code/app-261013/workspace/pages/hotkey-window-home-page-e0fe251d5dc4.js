import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $v as r,
  AO as i,
  BE as a,
  CO as o,
  Ext as s,
  Gct as c,
  HE as l,
  HNt as u,
  Hbt as d,
  Hnt as f,
  IDt as p,
  Ixt as ee,
  JR as m,
  Kat as h,
  Mdt as g,
  Odt as _,
  Pxt as v,
  Qv as y,
  RE as b,
  S4 as x,
  TO as S,
  UE as C,
  VDt as te,
  Vxt as ne,
  Wnt as w,
  X1 as T,
  XD as E,
  XQ as D,
  Y1 as O,
  YD as k,
  YQ as A,
  YR as re,
  Zvt as j,
  _Pt as ie,
  _xt as M,
  b0 as N,
  cut as P,
  cz as F,
  gPt as I,
  hPt as L,
  iot as R,
  jDt as z,
  nSt as B,
  qat as ae,
  rst as V,
  sz as oe,
  t3 as se,
  vzt as ce,
  wxt as le,
  x4 as ue,
  xMt as de,
  y0 as fe,
  yzt as pe,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  $$ as he,
  $dn as ge,
  AEr as _e,
  A_r as ve,
  EX as ye,
  Fr as be,
  GO as xe,
  Gp as Se,
  H9t as Ce,
  KCt as we,
  KO as Te,
  Kp as Ee,
  LEr as De,
  NPr as H,
  OPr as Oe,
  P_r as ke,
  Pen as U,
  Q$ as Ae,
  Rr as je,
  T_r as Me,
  Txn as Ne,
  Uen as Pe,
  VCt as Fe,
  _xn as Ie,
  adt as Le,
  b_r as Re,
  d_r as ze,
  dfn as Be,
  eDr as Ve,
  fg as He,
  fur as Ue,
  gCr as We,
  h_r as Ge,
  ien as Ke,
  kEr as qe,
  kPr as Je,
  ken as Ye,
  lfn as Xe,
  mDt as W,
  m_r as Ze,
  nDr as Qe,
  oFr as $e,
  pDt as et,
  pg as tt,
  pur as nt,
  rdt as rt,
  ren as it,
  sCr as at,
  tfn as ot,
  u_r as st,
  ven as ct,
  yCr as G,
  z9t as lt,
} from "./app-initial-5851df3f6cb1.js";
import {
  $c as ut,
  Ad as dt,
  Af as ft,
  Cb as pt,
  Cl as mt,
  Cm as ht,
  Db as gt,
  Fb as _t,
  Jc as K,
  Kc as vt,
  Lb as yt,
  Mb as bt,
  Mf as xt,
  Ob as St,
  Pb as Ct,
  Qc as wt,
  Rb as Tt,
  Sl as Et,
  Sm as Dt,
  Tb as Ot,
  Xc as kt,
  Yc as At,
  Zc as jt,
  du as Mt,
  gu as Nt,
  hf as q,
  hu as Pt,
  jd as J,
  kb as Ft,
  lu as It,
  m as Lt,
  mf as Rt,
  p as zt,
  pf as Bt,
  wl as Vt,
} from "./app-primary-fe8a450b3b04.js";
import { n as Ht, t as Ut } from "./use-floating-window-pointer-interactivity-af75b9ceedf3.js";
import {
  a as Wt,
  i as Y,
  n as Gt,
  o as Kt,
  r as qt,
  t as Jt,
} from "./worktree-environment-dropdown-4472c8c4acdc.js";
import { n as Yt, t as Xt } from "./use-hotkey-window-dismiss-on-escape-ee84caeec162.js";
function Zt(e) {
  let t = (0, X.c)(61),
    {
      canUseCloud: r,
      composerMode: i,
      worktreePromptContext: a,
      setComposerMode: s,
      showLabel: c,
      disabledTooltipText: l,
      isWorktreeAvailable: u,
    } = e,
    d = c !== void 0 && c,
    f = ee(at),
    m = te(),
    h = Qe(`2785238453`),
    g = ne(_e),
    _;
  t[0] !== g || t[1] !== a
    ? ((_ = a == null ? void 0 : { ...a, available: a.available && !g }), (t[0] = g), (t[1] = a), (t[2] = _))
    : (_ = t[2]);
  let v = me(Rt, _),
    y = i === `worktree` || (v && !h),
    b;
  t[3] !== i || t[4] !== u || t[5] !== y
    ? ((b =
        i === `cloud`
          ? (0, Z.jsx)(Pt, { className: `icon-2xs` })
          : y && u
            ? (0, Z.jsx)(et, { className: `icon-2xs` })
            : (0, Z.jsx)(Ae, { className: `icon-2xs` })),
      (t[3] = i),
      (t[4] = u),
      (t[5] = y),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== i || t[8] !== u || t[9] !== d || t[10] !== y
    ? ((x = d
        ? (0, Z.jsx)(`span`, {
            className: `max-w-40 truncate text-start whitespace-nowrap`,
            children:
              i === `cloud`
                ? (0, Z.jsx)(p, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : y && u
                  ? (0, Z.jsx)(p, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, Z.jsx)(p, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[7] = i),
      (t[8] = u),
      (t[9] = d),
      (t[10] = y),
      (t[11] = x))
    : (x = t[11]);
  let C;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(k, { className: `icon-2xs text-tertiary` })), (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] !== b || t[14] !== x
    ? ((w = (0, Z.jsxs)(Z.Fragment, { children: [b, x, C] })), (t[13] = b), (t[14] = x), (t[15] = w))
    : (w = t[15]);
  let T = w;
  if (l) {
    let e;
    t[16] === T
      ? (e = t[17])
      : ((e = (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(n, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: T,
          }),
        })),
        (t[16] = T),
        (t[17] = e));
    let r;
    return (
      t[18] !== l || t[19] !== e
        ? ((r = (0, Z.jsx)(oe, { tooltipContent: l, children: e })), (t[18] = l), (t[19] = e), (t[20] = r))
        : (r = t[20]),
      r
    );
  }
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(p, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the chat`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[21] = E))
    : (E = t[21]);
  let A;
  t[22] === T
    ? (A = t[23])
    : ((A = (0, Z.jsx)(oe, {
        tooltipContent: E,
        children: (0, Z.jsx)(n, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: T,
        }),
      })),
      (t[22] = T),
      (t[23] = A));
  let re = i === `local` && !y ? fe : void 0,
    j;
  t[24] !== i || t[25] !== f || t[26] !== s || t[27] !== v
    ? ((j = () => {
        (J(f, i, `local`, `native-control`, v), s(`local`));
      }),
      (t[24] = i),
      (t[25] = f),
      (t[26] = s),
      (t[27] = v),
      (t[28] = j))
    : (j = t[28]);
  let ie;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(p, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[29] = ie))
    : (ie = t[29]);
  let M;
  t[30] !== j || t[31] !== re
    ? ((M = (0, Z.jsx)(S.Item, { leftIconAsset: D, rightIconAsset: re, onSelect: j, children: ie })),
      (t[30] = j),
      (t[31] = re),
      (t[32] = M))
    : (M = t[32]);
  let N = i === `cloud` ? fe : void 0,
    P = !r,
    F;
  t[33] !== i || t[34] !== f || t[35] !== s || t[36] !== v
    ? ((F = () => {
        (J(f, i, `cloud`, `native-control`, v), s(`cloud`));
      }),
      (t[33] = i),
      (t[34] = f),
      (t[35] = s),
      (t[36] = v),
      (t[37] = F))
    : (F = t[37]);
  let I;
  t[38] !== r || t[39] !== m
    ? ((I = r
        ? void 0
        : m.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[38] = r),
      (t[39] = m),
      (t[40] = I))
    : (I = t[40]);
  let L;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(p, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] !== N || t[43] !== P || t[44] !== F || t[45] !== I
    ? ((R = (0, Z.jsx)(S.Item, {
        leftIconAsset: O,
        rightIconAsset: N,
        disabled: P,
        onSelect: F,
        tooltipText: I,
        children: L,
      })),
      (t[42] = N),
      (t[43] = P),
      (t[44] = F),
      (t[45] = I),
      (t[46] = R))
    : (R = t[46]);
  let z;
  t[47] !== i ||
  t[48] !== h ||
  t[49] !== m ||
  t[50] !== u ||
  t[51] !== f ||
  t[52] !== s ||
  t[53] !== v ||
  t[54] !== y
    ? ((z = h
        ? null
        : (0, Z.jsx)(S.Item, {
            leftIconAsset: ue,
            rightIconAsset: y ? fe : void 0,
            onSelect: () => {
              (J(f, i, `worktree`, `native-control`, v), s(`worktree`));
            },
            disabled: !u,
            tooltipText: u
              ? void 0
              : m.formatMessage({
                  id: `composer.hotkeyWindow.modeDropdown.localOnly`,
                  defaultMessage: `Initialize a git repo to run chats in worktrees`,
                  description: `Tooltip for disabled hotkey-window worktree mode selector`,
                }),
            children: (0, Z.jsx)(p, {
              id: `composer.mode.worktreeSegment`,
              defaultMessage: `Worktree`,
              description: `Worktree mode label for the segmented toggle`,
            }),
          })),
      (t[47] = i),
      (t[48] = h),
      (t[49] = m),
      (t[50] = u),
      (t[51] = f),
      (t[52] = s),
      (t[53] = v),
      (t[54] = y),
      (t[55] = z))
    : (z = t[55]);
  let B;
  return (
    t[56] !== M || t[57] !== R || t[58] !== z || t[59] !== A
      ? ((B = (0, Z.jsxs)(o, { triggerButton: A, contentWidth: `menuNarrow`, children: [M, R, z] })),
        (t[56] = M),
        (t[57] = R),
        (t[58] = z),
        (t[59] = A),
        (t[60] = B))
      : (B = t[60]),
    B
  );
}
var X, Z;
function Qt() {
  return (Qt = e(() => {
    ((X = ce()),
      x(),
      N(),
      T(),
      A(),
      v(),
      z(),
      q(),
      se(),
      i(),
      F(),
      E(),
      Nt(),
      he(),
      W(),
      G(),
      qe(),
      Ve(),
      dt(),
      (Z = de()));
  }))();
}
function $t({ activeWorkspaceRoot: e, defaultToProjectless: t, localProjects: n, projectId: r }) {
  if (r === void 0) return t ? `~` : e;
  if (r == null) return `~`;
  let i = n[r];
  return _(i?.rootPaths);
}
function en({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
function tn() {
  return (tn = e(() => {
    V();
  }))();
}
var nn, rn;
function an() {
  return (an = e(() => {
    ((nn = t(u(), 1)),
      v(),
      V(),
      Tt(),
      St(),
      Be(),
      U(),
      Ot(),
      mt(),
      q(),
      ke(),
      bt(),
      G(),
      ge(),
      Ze(),
      w(),
      $e(),
      Oe(),
      tn(),
      (rn = B(
        at,
        ({ authMethod: e, project: t }, { get: n, scope: r }) => {
          let i = n(st),
            a = $t({
              activeWorkspaceRoot: i?.[0] ?? null,
              defaultToProjectless: f(r.get, c.hotkeyWindowProjectlessDefaultEnabled) === !0,
              localProjects: n(Ge),
              projectId: t === void 0 ? void 0 : (t?.type === `local` && t.projectId) || null,
            }),
            o = t === void 0 ? n(Me) : n(Re, t?.type === `remote` ? t.projectId : null),
            s = o == null && a === `~`,
            l = o?.hostId ?? `local`,
            u = n(De, l),
            p = en({ composerWorkspaceRoot: a, selectedRemoteProjectPath: o?.remotePath ?? null }),
            ee =
              o == null &&
              a == null &&
              (t === void 0
                ? i == null
                : t?.type === `remote` &&
                  (ve(r.get, d.REMOTE_PROJECTS).isLoading || ve(r.get, d.SELECTED_PROJECT).isLoading)),
            m = Xe({ cwd: p, hostId: l, isLoading: ee }),
            { data: h, isLoading: g } = n(pt, { cwd: p, hostId: l, hostConfig: u, surface: `hotkey` }),
            _ = h?.root ?? null,
            v = o == null && i != null && !g && _ == null,
            y = s || v,
            b = n(ze, { hostId: l }).data?.codexHome,
            x = n(Je, `505458`) || n(Bt),
            S = n(it, m),
            C = {
              fallbackMode: `local`,
              isAvailabilityLoading: !y && ((o == null && i == null) || g || n(H)),
              cloudUnavailableReason: Ft({
                cloudAccess: n(yt, e),
                supportsCloud: !y,
                isPrimaryReviewComposer: n(Ct),
                isRemoteProject:
                  o != null || (t === void 0 ? n(ot)?.type === `remote` : t?.type === `remote`),
              }),
              isLocalAvailable: !0,
              isWorktreeAvailable: p != null && _ != null && x && !P(p, b),
            };
          return {
            workspaceRoot: a,
            remoteProject: o,
            hostId: l,
            hostConfig: u,
            projectRoot: p,
            isProjectless: s,
            isProjectLoading: ee,
            isGitlessLocalProject: v,
            projectKey: m,
            gitRoot: _,
            availability: C,
            effectiveMode: gt({
              ...C,
              composerMode:
                n(Et, l) ??
                (S === `worktree` && n(Ke) && (n(Je, `2785238453`) || n(Vt, l) === `local`) ? `local` : S),
              isEverydayWorkMode: !1,
            }),
          };
        },
        { isEqual: nn.default },
      )));
  }))();
}
function on(e) {
  let t = (0, sn.c)(41),
    { composerMode: n, worktreePromptContext: r, enabled: i, setComposerMode: a, isWorktreeAvailable: o } = e,
    s = ee(at),
    c = te(),
    l = Qe(`3724118644`),
    u = ne(_e),
    d;
  t[0] !== u || t[1] !== r
    ? ((d = r == null ? void 0 : { ...r, available: r.available && !u }), (t[0] = u), (t[1] = r), (t[2] = d))
    : (d = t[2]);
  let f = me(Rt, d),
    p = Qe(`2785238453`),
    m = n === `worktree` || f,
    h;
  t[3] !== n || t[4] !== s || t[5] !== a || t[6] !== f
    ? ((h = () => {
        let e = n === `worktree` || f ? `local` : `worktree`;
        (J(s, n, e, `keyboard-shortcut`, f), a(e));
      }),
      (t[3] = n),
      (t[4] = s),
      (t[5] = a),
      (t[6] = f),
      (t[7] = h))
    : (h = t[7]);
  let g = i && o && !p,
    _;
  (t[8] === g ? (_ = t[9]) : ((_ = { enabled: g }), (t[8] = g), (t[9] = _)),
    tt(`composer.toggleWorktreeMode`, h, _));
  let v;
  t[10] === c
    ? (v = t[11])
    : ((v = c.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[10] = c),
      (t[11] = v));
  let y;
  t[12] === c
    ? (y = t[13])
    : ((y = c.formatMessage({
        id: `composer.hotkeyWindow.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the Quick Chat local mode slash command`,
      })),
      (t[12] = c),
      (t[13] = y));
  let b = i && (n !== `local` || f),
    x;
  t[14] !== n || t[15] !== s || t[16] !== a || t[17] !== f
    ? ((x = async () => {
        (J(s, n, `local`, `slash-command`, f), a(`local`));
      }),
      (t[14] = n),
      (t[15] = s),
      (t[16] = a),
      (t[17] = f),
      (t[18] = x))
    : (x = t[18]);
  let S = x,
    C;
  (t[19] !== v || t[20] !== y || t[21] !== b || t[22] !== S
    ? ((C = {
        id: `local`,
        title: v,
        description: y,
        requiresEmptyComposer: !1,
        Icon: Ae,
        enabled: b,
        onSelect: S,
      }),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]),
    Te(C));
  let w;
  t[24] === c
    ? (w = t[25])
    : ((w = c.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[24] = c),
      (t[25] = w));
  let T;
  t[26] !== c || t[27] !== l || t[28] !== m
    ? ((T =
        l && m
          ? c.formatMessage({
              id: `composer.worktreeSlashCommand.disableDescription`,
              defaultMessage: `Turn worktree mode off`,
              description: `Description for the worktree slash command when the new task is set to run in a worktree`,
            })
          : c.formatMessage({
              id: `composer.hotkeyWindow.mode.worktreeSlashCommand.description`,
              defaultMessage: `Run this chat in a new worktree`,
              description: `Description for the Quick Chat worktree mode slash command`,
            })),
      (t[26] = c),
      (t[27] = l),
      (t[28] = m),
      (t[29] = T))
    : (T = t[29]);
  let E = i && o && !u && (!l || !p) && (l || !m),
    D;
  t[30] !== n || t[31] !== s || t[32] !== a || t[33] !== f || t[34] !== m
    ? ((D = async () => {
        let e = m ? `local` : `worktree`;
        (J(s, n, e, `slash-command`, f), a(e));
      }),
      (t[30] = n),
      (t[31] = s),
      (t[32] = a),
      (t[33] = f),
      (t[34] = m),
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
          Icon: et,
          enabled: E,
          onSelect: O,
        }),
        (t[36] = w),
        (t[37] = T),
        (t[38] = E),
        (t[39] = O),
        (t[40] = k))
      : (k = t[40]),
    Te(k),
    null
  );
}
var sn;
function cn() {
  return (cn = e(() => {
    ((sn = ce()), v(), z(), xe(), He(), dt(), q(), he(), W(), G(), qe(), Ve());
  }))();
}
function ln(e) {
  let t = (0, un.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: dn,
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
var un, dn;
function fn() {
  return (fn = e(() => {
    ((un = ce()),
      Ut(),
      (dn = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
        `.codex-dialog-overlay[data-state="open"]`,
        `.codex-dialog[role="dialog"][data-state="open"]`,
      ]));
  }))();
}
var pn, mn, hn, gn;
function _n() {
  return (_n = e(() => {
    ((pn = `_Home_1v9n2_1`),
      (mn = `_HomeShell_1v9n2_26`),
      (hn = `_ShellUnderlay_1v9n2_27`),
      (gn = { Home: pn, HomeShell: mn, ShellUnderlay: hn }));
  }))();
}
function vn() {
  let e = (0, Tn.c)(140),
    t = ee(at);
  Yt();
  let n = te(),
    r = le(),
    i = s(),
    { authMethod: o } = nt(),
    c = (0, Q.useRef)(null),
    u = (0, Q.useRef)(null),
    d = re(),
    f = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    _ = r.state,
    v = _?.focusComposerNonce ?? null,
    x = _?.project,
    S = x?.type === `local` ? x.projectId : null,
    C;
  e[0] !== o || e[1] !== x
    ? ((C = { authMethod: o, project: x }), (e[0] = o), (e[1] = x), (e[2] = C))
    : (C = e[2]);
  let {
      workspaceRoot: w,
      remoteProject: T,
      isProjectless: E,
      hostId: D,
      hostConfig: O,
      projectRoot: k,
      isProjectLoading: A,
      projectKey: j,
      gitRoot: M,
      availability: N,
      effectiveMode: P,
      isGitlessLocalProject: F,
    } = me(rn, C),
    L = ne(ot),
    z = N.isWorktreeAvailable,
    B = (z || N.isAvailabilityLoading) && P !== `cloud`,
    ae;
  e[3] !== j || e[4] !== B
    ? ((ae = { projectKey: j, available: B }), (e[3] = j), (e[4] = B), (e[5] = ae))
    : (ae = e[5]);
  let V = ae,
    oe = ne(lt),
    se = ne(Ce),
    ce = ne(ct),
    ue;
  e[6] === t ? (ue = e[7]) : ((ue = We(t)), (e[6] = t), (e[7] = ue));
  let de = me(Se, ue),
    fe = P === `worktree` && k != null,
    pe;
  e[8] !== D || e[9] !== fe
    ? ((pe = { enabled: fe, hostId: D, source: `hotkey_window_worktree_source` }),
      (e[8] = D),
      (e[9] = fe),
      (e[10] = pe))
    : (pe = e[10]);
  let { gitRoot: he } = Mt(k, pe),
    ge = P === `worktree` ? Xe({ cwd: he ?? M, hostId: D }) : null,
    _e = P === `worktree` && k != null,
    ve;
  e[11] === _e ? (ve = e[12]) : ((ve = { enabled: _e }), (e[11] = _e), (e[12] = ve));
  let { data: xe } = ht(he ?? k, O, `hotkey_window_home_page`, ve),
    Te = Ye(oe, se, xe ?? null, ce, ge),
    Ee = P === `worktree` ? k : null,
    De;
  e[13] !== D || e[14] !== Ee
    ? ((De = { hostId: D, workspaceRoot: Ee }), (e[13] = D), (e[14] = Ee), (e[15] = De))
    : (De = e[15]);
  let {
      environments: H,
      isLoading: Oe,
      isFetching: ke,
      error: U,
      resolvedConfigPath: Ae,
      repairConfigPath: je,
      updateSelection: Me,
    } = we(De),
    [Ne, Fe] = (0, Q.useState)(!1),
    [Ie, Le] = (0, Q.useState)(null),
    Re;
  e[16] === v
    ? (Re = e[17])
    : ((Re = { activationNonce: v, interactiveRegionRef: u, onInteractiveChange: xn }),
      (e[16] = v),
      (e[17] = Re));
  let ze = ln(Re),
    Be;
  (e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (e) => {
        Le(e.topInsetPx);
      }),
      (e[18] = Be))
    : (Be = e[18]),
    ie(`hotkey-window-home-composer-position-changed`, Be));
  let Ve;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        let t = c.current,
          n = u.current;
        if (!t || !n) return;
        let r = wn(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of En)
            for (let t of document.querySelectorAll(e)) o = Math.min(o, t.getBoundingClientRect().top);
        let s = Math.max(0, Math.ceil(a.top - o)),
          l = {
            composerHeightPx: Math.ceil(a.height),
            composerLeftInsetPx: a.left,
            composerWidthPx: a.width,
            minimumComposerTopInsetPx: s,
            restingComposerTopInsetPx: Math.ceil(Math.max(0, i.height - a.height - r)),
          },
          d = m.current;
        (d?.minimumComposerTopInsetPx !== l.minimumComposerTopInsetPx ||
          d.restingComposerTopInsetPx !== l.restingComposerTopInsetPx ||
          d.composerHeightPx !== l.composerHeightPx ||
          d.composerLeftInsetPx !== l.composerLeftInsetPx ||
          d.composerWidthPx !== l.composerWidthPx) &&
          ((m.current = l), h.hotkeyWindowHotkeys?.homeLayoutChanged(l));
      }),
      (e[19] = Ve))
    : (Ve = e[19]);
  let He = Ve,
    Ue;
  (e[20] === v ? (Ue = e[21]) : ((Ue = [v]), (e[20] = v), (e[21] = Ue)), (0, Q.useEffect)(bn, Ue));
  let Ge = de || Ne,
    Ke,
    qe;
  (e[22] === Ge
    ? ((Ke = e[23]), (qe = e[24]))
    : ((Ke = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), He(Ge));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t),
          r = Ge && typeof MutationObserver < `u` ? new MutationObserver(t) : null;
        return (
          u.current != null && n?.observe(u.current),
          r?.observe(document.body, { childList: !0, subtree: !0 }),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect(), r?.disconnect());
          }
        );
      }),
      (qe = [Ge]),
      (e[22] = Ge),
      (e[23] = Ke),
      (e[24] = qe)),
    (0, Q.useLayoutEffect)(Ke, qe));
  let Je;
  e[25] !== j || e[26] !== t
    ? ((Je = (e) => {
        jt(t, j, e);
      }),
      (e[25] = j),
      (e[26] = t),
      (e[27] = Je))
    : (Je = e[27]);
  let W = Je,
    Ze;
  e[28] !== t || e[29] !== ge
    ? ((Ze = (e) => {
        Pe(t, e, ge);
      }),
      (e[28] = t),
      (e[29] = ge),
      (e[30] = Ze))
    : (Ze = e[30]);
  let Qe = Ze,
    $e;
  e[31] !== D ||
  e[32] !== k ||
  e[33] !== U ||
  e[34] !== ke ||
  e[35] !== Oe ||
  e[36] !== x ||
  e[37] !== L ||
  e[38] !== H
    ? (($e = (e) => {
        if (k == null) {
          I.dispatchMessage(`show-settings`, { section: `local-environments` });
          return;
        }
        let t = (x === void 0 ? L : x)?.projectId,
          n = new URLSearchParams({ workspaceRoot: k });
        (t != null && n.set(`projectId`, t),
          I.dispatchMessage(`show-settings`, {
            section:
              e == null && (Oe || ke || U != null || H.length > 0)
                ? `local-environments?${n.toString()}`
                : rt({ configPath: e, projectId: t == null ? void 0 : g(t), workspaceRoot: k }).slice(10),
            state: { hostId: D, returnTo: `/settings/local-environments` },
          }));
      }),
      (e[31] = D),
      (e[32] = k),
      (e[33] = U),
      (e[34] = ke),
      (e[35] = Oe),
      (e[36] = x),
      (e[37] = L),
      (e[38] = H),
      (e[39] = $e))
    : ($e = e[39]);
  let et = $e,
    tt = yn,
    it;
  e[40] !== r.hash || e[41] !== r.pathname || e[42] !== r.search || e[43] !== _ || e[44] !== i || e[45] !== t
    ? ((it = (e) => {
        At(t);
        let n = { ..._, project: e };
        i({ pathname: r.pathname, search: r.search, hash: r.hash }, { replace: !0, state: n });
      }),
      (e[40] = r.hash),
      (e[41] = r.pathname),
      (e[42] = r.search),
      (e[43] = _),
      (e[44] = i),
      (e[45] = t),
      (e[46] = it))
    : (it = e[46]);
  let st = it,
    G;
  e[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (e) => {
        f.current === e.pointerId &&
          ((f.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          h.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[47] = G))
    : (G = e[47]);
  let ut = G,
    dt;
  e[48] === d
    ? (dt = e[49])
    : ((dt = (e) => {
        e.button === 0 &&
          e.target instanceof Element &&
          e.currentTarget.contains(e.target) &&
          !e.target.closest(
            `button, a, input, textarea, select, [contenteditable=true], [role=button], [role=combobox], [role=menuitem]`,
          ) &&
          (e.preventDefault(),
          (f.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          h.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
            guideColor: getComputedStyle(e.currentTarget).getPropertyValue(`--codex-base-accent`).trim(),
            reducedMotion: d,
          }));
      }),
      (e[48] = d),
      (e[49] = dt));
  let pt = dt,
    mt;
  e[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (e) => {
        f.current === e.pointerId && h.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[50] = mt))
    : (mt = e[50]);
  let gt = mt,
    K;
  if (
    e[51] !== P ||
    e[52] !== k ||
    e[53] !== T?.label ||
    e[54] !== T?.remotePath ||
    e[55] !== n ||
    e[56] !== E
  ) {
    let t =
      ye(T?.remotePath ?? k, T?.label) ??
      n.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (E) {
      let t;
      (e[58] === n
        ? (t = e[59])
        : ((t = n.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask ChatGPT anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[58] = n),
          (e[59] = t)),
        (K = t));
    } else if (P === `cloud`) {
      let t;
      (e[60] === n
        ? (t = e[61])
        : ((t = n.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask ChatGPT anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[60] = n),
          (e[61] = t)),
        (K = t));
    } else
      K =
        P === `worktree`
          ? n.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask ChatGPT anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : n.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask ChatGPT anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[51] = P),
      (e[52] = k),
      (e[53] = T?.label),
      (e[54] = T?.remotePath),
      (e[55] = n),
      (e[56] = E),
      (e[57] = K));
  } else K = e[57];
  let yt;
  if (A) {
    let t;
    (e[62] === n
      ? (t = e[63])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[62] = n),
        (e[63] = t)),
      (yt = t));
  } else if (E) {
    let t;
    (e[64] === n
      ? (t = e[65])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Standalone chats run in a local folder`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[64] = n),
        (e[65] = t)),
      (yt = t));
  } else if (F) {
    let t;
    (e[66] === n
      ? (t = e[67])
      : ((t = n.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[66] = n),
        (e[67] = t)),
      (yt = t));
  }
  let bt;
  e[68] !== Te || e[69] !== O || e[70] !== P || e[71] !== k || e[72] !== M || e[73] !== Qe || e[74] !== he
    ? ((bt =
        P === `worktree`
          ? (0, $.jsx)(Wt, {
              startingState: Te,
              setStartingState: Qe,
              hostConfig: O,
              gitRootOverride: he ?? k,
              branchSource: `worktree`,
            })
          : M == null
            ? null
            : (0, $.jsx)(qt, { gitRoot: M, hostConfig: O, localConversationId: null, shouldShow: !0 })),
      (e[68] = Te),
      (e[69] = O),
      (e[70] = P),
      (e[71] = k),
      (e[72] = M),
      (e[73] = Qe),
      (e[74] = he),
      (e[75] = bt))
    : (bt = e[75]);
  let xt = bt,
    St;
  e[76] === n
    ? (St = e[77])
    : ((St = n.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Chat settings`,
        description: `Accessible label for the hotkey window chat settings menu`,
      })),
      (e[76] = n),
      (e[77] = St));
  let Ct = St,
    Tt,
    Et;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, $.jsx)(_t, {})), (Et = (0, $.jsx)(wt, {})), (e[78] = Tt), (e[79] = Et))
    : ((Tt = e[78]), (Et = e[79]));
  let Dt = ze ? `` : void 0,
    Ot;
  e[80] === Ie
    ? (Ot = e[81])
    : ((Ot = Ie == null ? void 0 : { bottom: `auto`, top: Ie }), (e[80] = Ie), (e[81] = Ot));
  let kt;
  e[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kt = (0, $.jsx)(`div`, { className: gn.ShellUnderlay, "aria-hidden": `true` })), (e[82] = kt))
    : (kt = e[82]);
  let Nt = !E && !A,
    q;
  e[83] !== P || e[84] !== z || e[85] !== W || e[86] !== Nt || e[87] !== V
    ? ((q = (0, $.jsx)(on, {
        worktreePromptContext: V,
        composerMode: P,
        enabled: Nt,
        setComposerMode: W,
        isWorktreeAvailable: z,
      })),
      (e[83] = P),
      (e[84] = z),
      (e[85] = W),
      (e[86] = Nt),
      (e[87] = V),
      (e[88] = q))
    : (q = e[88]);
  let Pt;
  e[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = { kind: `hotkey` }), (e[89] = Pt))
    : (Pt = e[89]);
  let J = w ?? (E || x !== void 0 ? `~` : void 0),
    Ft = E ? null : (x ?? L),
    It;
  e[90] === Ct
    ? (It = e[91])
    : ((It = (0, $.jsx)(l, { asChild: !0, children: (0, $.jsx)(y, { label: Ct }) })),
      (e[90] = Ct),
      (e[91] = It));
  let Lt;
  e[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lt = (0, $.jsx)(p, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[92] = Lt))
    : (Lt = e[92]);
  let Rt = x === void 0 ? void 0 : S,
    Bt;
  e[93] !== st || e[94] !== Rt
    ? ((Bt = (0, $.jsx)(Cn, {
        label: Lt,
        control: (0, $.jsx)(zt, {
          activeProjectIdOverride: Rt,
          allowRemoteProjects: !1,
          onProjectSelected: st,
        }),
      })),
      (e[93] = st),
      (e[94] = Rt),
      (e[95] = Bt))
    : (Bt = e[95]);
  let Vt;
  e[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = (0, $.jsx)(p, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[96] = Vt))
    : (Vt = e[96]);
  let Ht = N.cloudUnavailableReason == null,
    Ut;
  e[97] !== P || e[98] !== z || e[99] !== W || e[100] !== yt || e[101] !== Ht || e[102] !== V
    ? ((Ut = (0, $.jsx)(Cn, {
        label: Vt,
        control: (0, $.jsx)(Zt, {
          worktreePromptContext: V,
          canUseCloud: Ht,
          composerMode: P,
          setComposerMode: W,
          showLabel: !0,
          disabledTooltipText: yt,
          isWorktreeAvailable: z,
        }),
      })),
      (e[97] = P),
      (e[98] = z),
      (e[99] = W),
      (e[100] = yt),
      (e[101] = Ht),
      (e[102] = V),
      (e[103] = Ut))
    : (Ut = e[103]);
  let Y;
  e[104] !== P ||
  e[105] !== et ||
  e[106] !== U ||
  e[107] !== ke ||
  e[108] !== Oe ||
  e[109] !== Ae ||
  e[110] !== Me ||
  e[111] !== je ||
  e[112] !== H
    ? ((Y =
        P === `worktree`
          ? (0, $.jsx)(Cn, {
              label: (0, $.jsx)(p, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, $.jsx)(Jt, {
                environments: H,
                isLoading: Oe || (ke && H.length === 0),
                hasError: U != null,
                selectedConfigPath: Ae,
                repairConfigPath: je,
                onSelectConfigPath: Me,
                onOpenSettings: et,
              }),
            })
          : null),
      (e[104] = P),
      (e[105] = et),
      (e[106] = U),
      (e[107] = ke),
      (e[108] = Oe),
      (e[109] = Ae),
      (e[110] = Me),
      (e[111] = je),
      (e[112] = H),
      (e[113] = Y))
    : (Y = e[113]);
  let Gt;
  e[114] === xt
    ? (Gt = e[115])
    : ((Gt = xt
        ? (0, $.jsx)(Cn, {
            label: (0, $.jsx)(p, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: xt,
          })
        : null),
      (e[114] = xt),
      (e[115] = Gt));
  let Kt;
  e[116] === P
    ? (Kt = e[117])
    : ((Kt =
        P === `cloud` ? null : (0, $.jsx)(be, { conversationId: null, hostId: R, DropdownContainer: Sn })),
      (e[116] = P),
      (e[117] = Kt));
  let Xt;
  e[118] !== Bt || e[119] !== Ut || e[120] !== Y || e[121] !== Gt || e[122] !== Kt
    ? ((Xt = (0, $.jsx)(a, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `w-auto min-w-[320px] rounded-3xl p-0 no-drag`,
        children: (0, $.jsxs)(`div`, { className: `flex flex-col gap-4 p-3`, children: [Bt, Ut, Y, Gt, Kt] }),
      })),
      (e[118] = Bt),
      (e[119] = Ut),
      (e[120] = Y),
      (e[121] = Gt),
      (e[122] = Kt),
      (e[123] = Xt))
    : (Xt = e[123]);
  let X;
  e[124] !== Ne || e[125] !== It || e[126] !== Xt
    ? ((X = (0, $.jsxs)(b, { open: Ne, onOpenChange: Fe, children: [It, Xt] })),
      (e[124] = Ne),
      (e[125] = It),
      (e[126] = Xt),
      (e[127] = X))
    : (X = e[127]);
  let Z;
  e[128] !== N || e[129] !== K || e[130] !== J || e[131] !== Ft || e[132] !== X
    ? ((Z = (0, $.jsx)(`div`, {
        className: `relative no-drag`,
        children: (0, $.jsx)(ft, {
          placement: Pt,
          children: (0, $.jsx)(vt, {
            showWorkspaceDropdownInUtilityBar: !1,
            showUtilityBar: !1,
            composerModeAvailability: N,
            placeholderText: K,
            defaultCwd: J,
            selectedProject: Ft,
            hotkeyWindowHomeFooterControls: X,
            onLocalConversationCreated: tt,
          }),
        }),
      })),
      (e[128] = N),
      (e[129] = K),
      (e[130] = J),
      (e[131] = Ft),
      (e[132] = X),
      (e[133] = Z))
    : (Z = e[133]);
  let Qt;
  return (
    e[134] !== pt || e[135] !== Dt || e[136] !== Ot || e[137] !== q || e[138] !== Z
      ? ((Qt = (0, $.jsxs)(`div`, {
          ref: c,
          className: gn.Home,
          children: [
            Tt,
            Et,
            (0, $.jsxs)(`div`, {
              ref: u,
              className: gn.HomeShell,
              onLostPointerCapture: ut,
              onPointerCancel: ut,
              onPointerDown: pt,
              onPointerMove: gt,
              onPointerUp: ut,
              "data-drag-reactivation": Dt,
              style: Ot,
              children: [kt, q, Z],
            }),
          ],
        })),
        (e[134] = pt),
        (e[135] = Dt),
        (e[136] = Ot),
        (e[137] = q),
        (e[138] = Z),
        (e[139] = Qt))
      : (Qt = e[139]),
    Qt
  );
}
function yn(e) {
  h.hotkeyWindowHotkeys?.open({ path: j(e) });
}
function bn() {
  Ie();
}
function xn(e) {
  h.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function Sn(e) {
  let t = (0, Tn.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(p, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n ? (i = t[2]) : ((i = (0, $.jsx)(Cn, { label: r, control: n })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Cn(e) {
  let t = (0, Tn.c)(7),
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
function wn(e) {
  return Number.parseFloat(e) || 0;
}
var Tn, Q, $, En;
function Dn() {
  return (Dn = e(() => {
    ((Tn = ce()),
      v(),
      V(),
      (Q = pe()),
      z(),
      M(),
      Ue(),
      Tt(),
      Kt(),
      K(),
      xt(),
      je(),
      Be(),
      Y(),
      U(),
      Ne(),
      Qt(),
      Lt(),
      Ee(),
      Gt(),
      ut(),
      kt(),
      r(),
      C(),
      Dt(),
      m(),
      Fe(),
      L(),
      ae(),
      G(),
      ge(),
      Le(),
      $e(),
      It(),
      an(),
      cn(),
      Xt(),
      fn(),
      _n(),
      ($ = de()),
      (En = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }))();
}
Dn();
export { vn as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page-e0fe251d5dc4.js.map
