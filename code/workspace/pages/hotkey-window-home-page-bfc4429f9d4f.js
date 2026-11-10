import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $A as n,
  A3t as r,
  AJ as i,
  AMt as a,
  Amn as o,
  B6t as s,
  Cpn as c,
  DJ as l,
  EA as u,
  F3t as d,
  H0 as f,
  Hqt as p,
  IJ as m,
  IXt as h,
  JA as g,
  JG as _,
  JK as v,
  JXt as y,
  Jit as b,
  Jqt as x,
  KA as S,
  KG as ee,
  KKt as C,
  KXt as te,
  KYt as w,
  Kit as T,
  Kqt as E,
  L0 as D,
  LA as O,
  LX as k,
  N3t as A,
  Np as j,
  O3t as ne,
  O8t as M,
  OJ as N,
  Opn as re,
  Pp as P,
  RX as ie,
  SC as F,
  Smn as ae,
  Spn as oe,
  Su as se,
  Uqt as ce,
  Vnn as le,
  X8t as ue,
  Xen as de,
  ZG as fe,
  Zqt as pe,
  aG as me,
  bC as he,
  bmn as ge,
  cFt as _e,
  d5t as ve,
  dbt as ye,
  e4t as be,
  ej as xe,
  hYt as Se,
  hmn as Ce,
  hz as we,
  i6t as Te,
  kMt as Ee,
  kmn as I,
  lG as De,
  mA as Oe,
  mYt as ke,
  mz as Ae,
  nFt as L,
  o7t as je,
  oJt as R,
  pA as Me,
  qK as z,
  qKt as B,
  qqt as Ne,
  r7t as Pe,
  sG as Fe,
  tJt as Ie,
  uG as Le,
  uJt as Re,
  ubt as ze,
  vit as Be,
  xmn as Ve,
  xu as He,
  yYt as Ue,
  yit as We,
  zJ as Ge,
} from "./app-initial-f094ef01c64d.js";
import {
  $w as Ke,
  Ao as qe,
  BT as Je,
  DE as Ye,
  EE as Xe,
  Fm as Ze,
  Gw as Qe,
  Im as $e,
  It as et,
  Jo as tt,
  K as V,
  Kw as nt,
  L as rt,
  OE as it,
  Qw as at,
  R as ot,
  Rt as st,
  SE as ct,
  TE as lt,
  VT as ut,
  Yo as dt,
  Zw as H,
  _E as ft,
  bE as pt,
  eT as mt,
  fs as ht,
  hE as gt,
  jo as _t,
  l as vt,
  ps as U,
  q as W,
  u as yt,
  vs as bt,
  wE as xt,
  xE as St,
  yE as Ct,
  ys as wt,
} from "./app-primary-4c40d73a1074.js";
import { n as Tt, t as Et } from "./use-floating-window-pointer-interactivity-4227999c8c97.js";
import {
  c as Dt,
  i as Ot,
  n as kt,
  r as At,
  s as jt,
  t as Mt,
} from "./worktree-environment-dropdown-ea1f88351d40.js";
import { n as Nt, t as Pt } from "./use-hotkey-window-dismiss-on-escape-beb0ce766d08.js";
function Ft(e) {
  let t = (0, It.c)(52),
    {
      canUseCloud: n,
      composerMode: r,
      setComposerMode: i,
      showLabel: a,
      disabledTooltipText: o,
      showWorktree: s,
    } = e,
    l = a !== void 0 && a,
    u = re(),
    d;
  t[0] !== r || t[1] !== s
    ? ((d =
        r === `cloud`
          ? (0, G.jsx)(Ke, { className: `icon-2xs` })
          : r === `worktree` && s
            ? (0, G.jsx)(j, { className: `icon-2xs` })
            : (0, G.jsx)(H, { className: `icon-2xs` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== r || t[4] !== l || t[5] !== s
    ? ((f = l
        ? (0, G.jsx)(`span`, {
            className: `max-w-40 truncate text-start whitespace-nowrap`,
            children:
              r === `cloud`
                ? (0, G.jsx)(c, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : r === `worktree` && s
                  ? (0, G.jsx)(c, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, G.jsx)(c, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[3] = r),
      (t[4] = l),
      (t[5] = s),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(Be, { className: `icon-2xs text-tertiary` })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== d || t[9] !== f
    ? ((m = (0, G.jsxs)(G.Fragment, { children: [d, f, p] })), (t[8] = d), (t[9] = f), (t[10] = m))
    : (m = t[10]);
  let h = m;
  if (o) {
    let e;
    t[11] === h
      ? (e = t[12])
      : ((e = (0, G.jsx)(`span`, {
          children: (0, G.jsx)(Ee, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: h,
          }),
        })),
        (t[11] = h),
        (t[12] = e));
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, G.jsx)(T, { tooltipContent: o, children: e })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let g;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, G.jsx)(c, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the chat`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[16] = g))
    : (g = t[16]);
  let v;
  t[17] === h
    ? (v = t[18])
    : ((v = (0, G.jsx)(T, {
        tooltipContent: g,
        children: (0, G.jsx)(Ee, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: h,
        }),
      })),
      (t[17] = h),
      (t[18] = v));
  let y = r === `local` ? z : void 0,
    b;
  t[19] === i
    ? (b = t[20])
    : ((b = () => {
        i(`local`);
      }),
      (t[19] = i),
      (t[20] = b));
  let x;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, G.jsx)(c, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== y || t[23] !== b
    ? ((S = (0, G.jsx)(_.Item, { LeftIcon: H, RightIcon: y, onSelect: b, children: x })),
      (t[22] = y),
      (t[23] = b),
      (t[24] = S))
    : (S = t[24]);
  let C = r === `cloud` ? z : void 0,
    te = !n,
    w;
  t[25] === i
    ? (w = t[26])
    : ((w = () => {
        i(`cloud`);
      }),
      (t[25] = i),
      (t[26] = w));
  let E;
  t[27] !== n || t[28] !== u
    ? ((E = n
        ? void 0
        : u.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[27] = n),
      (t[28] = u),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, G.jsx)(c, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== C || t[32] !== te || t[33] !== w || t[34] !== E
    ? ((O = (0, G.jsx)(_.Item, {
        LeftIcon: Ke,
        RightIcon: C,
        disabled: te,
        onSelect: w,
        tooltipText: E,
        children: D,
      })),
      (t[31] = C),
      (t[32] = te),
      (t[33] = w),
      (t[34] = E),
      (t[35] = O))
    : (O = t[35]);
  let k = r === `worktree` ? z : void 0,
    A;
  t[36] === i
    ? (A = t[37])
    : ((A = () => {
        i(`worktree`);
      }),
      (t[36] = i),
      (t[37] = A));
  let ne = !s,
    M;
  t[38] !== u || t[39] !== s
    ? ((M = s
        ? void 0
        : u.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.localOnly`,
            defaultMessage: `Initialize a git repo to run tasks in worktrees`,
            description: `Tooltip for disabled hotkey-window worktree mode selector`,
          })),
      (t[38] = u),
      (t[39] = s),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, G.jsx)(c, {
        id: `composer.mode.worktreeSegment`,
        defaultMessage: `Worktree`,
        description: `Worktree mode label for the segmented toggle`,
      })),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== k || t[43] !== A || t[44] !== ne || t[45] !== M
    ? ((P = (0, G.jsx)(_.Item, {
        LeftIcon: j,
        RightIcon: k,
        onSelect: A,
        disabled: ne,
        tooltipText: M,
        children: N,
      })),
      (t[42] = k),
      (t[43] = A),
      (t[44] = ne),
      (t[45] = M),
      (t[46] = P))
    : (P = t[46]);
  let ie;
  return (
    t[47] !== S || t[48] !== O || t[49] !== P || t[50] !== v
      ? ((ie = (0, G.jsxs)(ee, {
          triggerButton: v,
          contentWidth: `menuNarrow`,
          children: [S, O, P],
        })),
        (t[47] = S),
        (t[48] = O),
        (t[49] = P),
        (t[50] = v),
        (t[51] = ie))
      : (ie = t[51]),
    ie
  );
}
var It,
  G,
  Lt = e(() => {
    ((It = I()), oe(), a(), fe(), b(), v(), We(), mt(), at(), P(), (G = Ce()));
  });
function Rt({ activeWorkspaceRoot: e, defaultToProjectless: t, localProjects: n, projectId: r }) {
  if (r === void 0) return t ? `~` : e;
  if (r == null) return `~`;
  let i = n[r];
  return Pe(i?.rootPaths);
}
function K({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
var zt = e(() => {
    s();
  }),
  Bt,
  Vt,
  Ht = e(() => {
    ((Bt = t(le(), 1)),
      ne(),
      s(),
      it(),
      pt(),
      N(),
      ct(),
      g(),
      ft(),
      Re(),
      xt(),
      Ge(),
      k(),
      Ne(),
      B(),
      w(),
      ke(),
      zt(),
      (Vt = Te(
        i,
        ({ authMethod: e, project: t }, { get: n, scope: r }) => {
          let i = n(p),
            a = Rt({
              activeWorkspaceRoot: i?.[0] ?? null,
              defaultToProjectless: C(r.get, M.hotkeyWindowProjectlessDefaultEnabled) === !0,
              localProjects: n(x),
              projectId: t === void 0 ? void 0 : (t?.type === `local` && t.projectId) || null,
            }),
            o = t === void 0 ? n(Ie) : n(pe, t?.type === `remote` ? t.projectId : null),
            s = o == null && a === `~`,
            c = o?.hostId ?? `local`,
            d = n(E, c),
            f = K({ composerWorkspaceRoot: a, selectedRemoteProjectPath: o?.remotePath ?? null }),
            m =
              o == null &&
              a == null &&
              (t === void 0
                ? i == null
                : t?.type === `remote` &&
                  (R(r.get, de.REMOTE_PROJECTS).isLoading ||
                    R(r.get, de.SELECTED_PROJECT).isLoading)),
            h = l({ cwd: f, hostId: c, isLoading: m }),
            { data: g, isLoading: _ } = n(gt, {
              cwd: f,
              hostId: c,
              hostConfig: d,
              surface: `hotkey`,
            }),
            v = g?.root ?? null,
            y = o == null && i != null && !_ && v == null,
            b = s || y,
            S = n(ce, { hostId: c }).data?.codexHome,
            ee = n(Se, `505458`),
            te = {
              fallbackMode: `local`,
              isAvailabilityLoading: !b && ((o == null && i == null) || _ || n(Ue)),
              cloudUnavailableReason: St({
                cloudAccess: n(Ye, e),
                supportsCloud: !b,
                isPrimaryReviewTask: n(lt),
                isRemoteProject:
                  o != null || (t === void 0 ? n(ie)?.type === `remote` : t?.type === `remote`),
              }),
              isLocalAvailable: !0,
              isWorktreeAvailable: f != null && v != null && ee && !ue(f, S),
            };
          return {
            workspaceRoot: a,
            remoteProject: o,
            hostId: c,
            hostConfig: d,
            projectRoot: f,
            isProjectless: s,
            isProjectLoading: m,
            isGitlessLocalProject: y,
            projectKey: h,
            gitRoot: v,
            availability: te,
            effectiveMode: Ct({ ...te, composerMode: n(u, h), isEverydayWorkMode: !1 }),
          };
        },
        { isEqual: Bt.default },
      )));
  });
function Ut(e) {
  let t = (0, q.c)(27),
    { composerMode: n, enabled: r, setComposerMode: i, showWorktree: a } = e,
    o = re(),
    s;
  t[0] !== n || t[1] !== i
    ? ((s = () => {
        W({ composerMode: n, setComposerMode: i });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = s))
    : (s = t[2]);
  let c = r && a,
    l;
  (t[3] === c ? (l = t[4]) : ((l = { enabled: c }), (t[3] = c), (t[4] = l)),
    dt(`composer.toggleWorktreeMode`, s, l));
  let u;
  t[5] === o
    ? (u = t[6])
    : ((u = o.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[5] = o),
      (t[6] = u));
  let d;
  t[7] === o
    ? (d = t[8])
    : ((d = o.formatMessage({
        id: `composer.hotkeyWindow.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the Quick Chat local mode slash command`,
      })),
      (t[7] = o),
      (t[8] = d));
  let f = r && n !== `local`,
    p;
  t[9] === i
    ? (p = t[10])
    : ((p = async () => {
        i(`local`);
      }),
      (t[9] = i),
      (t[10] = p));
  let m = p,
    h;
  (t[11] !== u || t[12] !== d || t[13] !== f || t[14] !== m
    ? ((h = {
        id: `local`,
        title: u,
        description: d,
        requiresEmptyComposer: !1,
        Icon: H,
        enabled: f,
        onSelect: m,
      }),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]),
    se(h));
  let g;
  t[16] === o
    ? (g = t[17])
    : ((g = o.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[16] = o),
      (t[17] = g));
  let _;
  t[18] === o
    ? (_ = t[19])
    : ((_ = o.formatMessage({
        id: `composer.hotkeyWindow.mode.worktreeSlashCommand.description`,
        defaultMessage: `Run this chat in a new worktree`,
        description: `Description for the Quick Chat worktree mode slash command`,
      })),
      (t[18] = o),
      (t[19] = _));
  let v = r && a && n !== `worktree`,
    y;
  t[20] === i
    ? (y = t[21])
    : ((y = async () => {
        i(`worktree`);
      }),
      (t[20] = i),
      (t[21] = y));
  let b = y,
    x;
  return (
    t[22] !== g || t[23] !== _ || t[24] !== v || t[25] !== b
      ? ((x = {
          id: `worktree`,
          title: g,
          description: _,
          requiresEmptyComposer: !1,
          Icon: j,
          enabled: v,
          onSelect: b,
        }),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    se(x),
    null
  );
}
var q,
  Wt = e(() => {
    ((q = I()), oe(), V(), He(), tt(), at(), P());
  });
function Gt(e) {
  let t = (0, J.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: Y,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    Tt(a)
  );
}
var J,
  Y,
  X = e(() => {
    ((J = I()),
      Et(),
      (Y = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }),
  Z,
  Kt,
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    ((Z = `_Home_1cwbe_1`),
      (Kt = `_HomeShell_1cwbe_26`),
      (qt = `_ShellUnderlay_1cwbe_27`),
      (Jt = `_ComposerSurface_1cwbe_28`),
      (Yt = { Home: Z, HomeShell: Kt, ShellUnderlay: qt, ComposerSurface: Jt }));
  });
function Zt() {
  let e = (0, an.c)(130),
    t = r(i);
  Nt();
  let a = re(),
    o = te(),
    s = y(),
    { authMethod: u } = ye(),
    p = (0, Q.useRef)(null),
    h = (0, Q.useRef)(null),
    g = (0, Q.useRef)(null),
    _ = (0, Q.useRef)(null),
    v = o.state,
    b = v?.focusComposerNonce ?? null,
    x = v?.project,
    ee = x?.type === `local` ? x.projectId : null,
    C;
  e[0] !== u || e[1] !== x
    ? ((C = { authMethod: u, project: x }), (e[0] = u), (e[1] = x), (e[2] = C))
    : (C = e[2]);
  let {
      workspaceRoot: w,
      remoteProject: T,
      isProjectless: E,
      hostId: D,
      hostConfig: k,
      projectRoot: j,
      isProjectLoading: ne,
      projectKey: M,
      gitRoot: N,
      availability: P,
      effectiveMode: F,
      isGitlessLocalProject: oe,
    } = A(Vt, C),
    se = d(ie),
    ce = P.isWorktreeAvailable,
    le = d(Me),
    ue = d(Oe),
    de = d(O),
    fe;
  e[3] === t ? (fe = e[4]) : ((fe = m(t)), (e[3] = t), (e[4] = fe));
  let pe = A(bt, fe),
    ge = F === `worktree` && j != null,
    _e;
  e[5] !== D || e[6] !== ge
    ? ((_e = { enabled: ge, hostId: D, source: `hotkey_window_worktree_source` }),
      (e[5] = D),
      (e[6] = ge),
      (e[7] = _e))
    : (_e = e[7]);
  let { gitRoot: ve } = st(j, _e),
    Se = F === `worktree` ? l({ cwd: ve ?? N, hostId: D }) : null,
    Ce = F === `worktree` && j != null,
    we;
  e[8] === Ce ? (we = e[9]) : ((we = { enabled: Ce }), (e[8] = Ce), (e[9] = we));
  let { data: Te } = ut(ve ?? j, k, `hotkey_window_home_page`, we),
    Ee = S(le, ue, Te ?? null, de, Se),
    I = F === `worktree` ? j : null,
    ke;
  e[10] !== D || e[11] !== I
    ? ((ke = { hostId: D, workspaceRoot: I }), (e[10] = D), (e[11] = I), (e[12] = ke))
    : (ke = e[12]);
  let {
      environments: L,
      isLoading: R,
      isFetching: z,
      error: B,
      resolvedConfigPath: Ne,
      repairConfigPath: Pe,
      updateSelection: Ie,
    } = f(ke),
    [Le, Re] = (0, Q.useState)(!1),
    [ze, Be] = (0, Q.useState)(null),
    He;
  e[13] === b
    ? (He = e[14])
    : ((He = { activationNonce: b, interactiveRegionRef: h, onInteractiveChange: en }),
      (e[13] = b),
      (e[14] = He));
  let Ue = Gt(He),
    We;
  (e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        Be(e.topInsetPx);
      }),
      (e[15] = We))
    : (We = e[15]),
    ae(`hotkey-window-home-composer-position-changed`, We));
  let Ge;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (e) => {
        let t = p.current,
          n = h.current;
        if (!t || !n) return;
        let r = rn(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of on)
            for (let t of document.querySelectorAll(e))
              o = Math.min(o, t.getBoundingClientRect().top);
        let s = {
            minimumComposerTopInsetPx: Math.max(0, Math.ceil(a.top - o)),
            restingComposerTopInsetPx: Math.ceil(Math.max(0, i.height - a.height - r)),
          },
          c = _.current;
        (c?.minimumComposerTopInsetPx === s.minimumComposerTopInsetPx &&
          c.restingComposerTopInsetPx === s.restingComposerTopInsetPx) ||
          ((_.current = s), Ae.hotkeyWindowHotkeys?.homeLayoutChanged(s));
      }),
      (e[16] = Ge))
    : (Ge = e[16]);
  let Ke = Ge,
    Je;
  (e[17] === b ? (Je = e[18]) : ((Je = [b]), (e[17] = b), (e[18] = Je)), (0, Q.useEffect)($t, Je));
  let Ye = pe || Le,
    $e,
    et;
  (e[19] === Ye
    ? (($e = e[20]), (et = e[21]))
    : (($e = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), Ke(Ye));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t),
          r = Ye && typeof MutationObserver < `u` ? new MutationObserver(t) : null;
        return (
          h.current != null && n?.observe(h.current),
          r?.observe(document.body, { childList: !0, subtree: !0 }),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect(), r?.disconnect());
          }
        );
      }),
      (et = [Ye]),
      (e[19] = Ye),
      (e[20] = $e),
      (e[21] = et)),
    (0, Q.useLayoutEffect)($e, et));
  let tt;
  e[22] !== M || e[23] !== t
    ? ((tt = (e) => {
        xe(t, M, e);
      }),
      (e[22] = M),
      (e[23] = t),
      (e[24] = tt))
    : (tt = e[24]);
  let V = tt,
    nt;
  e[25] !== t || e[26] !== Se
    ? ((nt = (e) => {
        n(t, e, Se);
      }),
      (e[25] = t),
      (e[26] = Se),
      (e[27] = nt))
    : (nt = e[27]);
  let it = nt,
    at;
  e[28] !== D ||
  e[29] !== j ||
  e[30] !== B ||
  e[31] !== z ||
  e[32] !== R ||
  e[33] !== x ||
  e[34] !== se ||
  e[35] !== L
    ? ((at = (e) => {
        if (j == null) {
          Ve.dispatchMessage(`show-settings`, { section: `local-environments` });
          return;
        }
        let t = (x === void 0 ? se : x)?.projectId,
          n = new URLSearchParams({ workspaceRoot: j });
        (t != null && n.set(`projectId`, t),
          Ve.dispatchMessage(`show-settings`, {
            section:
              e == null && (R || z || B != null || L.length > 0)
                ? `local-environments?${n.toString()}`
                : he({
                    configPath: e,
                    projectId: t == null ? void 0 : je(t),
                    workspaceRoot: j,
                  }).slice(10),
            state: { hostId: D, returnTo: `/settings/local-environments` },
          }));
      }),
      (e[28] = D),
      (e[29] = j),
      (e[30] = B),
      (e[31] = z),
      (e[32] = R),
      (e[33] = x),
      (e[34] = se),
      (e[35] = L),
      (e[36] = at))
    : (at = e[36]);
  let ot = at,
    ct = Qt,
    lt;
  e[37] !== o.hash || e[38] !== o.pathname || e[39] !== o.search || e[40] !== v || e[41] !== s
    ? ((lt = (e) => {
        let t = { ...v, project: e == null ? null : { type: `local`, projectId: je(e) } };
        s({ pathname: o.pathname, search: o.search, hash: o.hash }, { replace: !0, state: t });
      }),
      (e[37] = o.hash),
      (e[38] = o.pathname),
      (e[39] = o.search),
      (e[40] = v),
      (e[41] = s),
      (e[42] = lt))
    : (lt = e[42]);
  let dt = lt,
    H;
  e[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        g.current === e.pointerId &&
          ((g.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          Ae.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[43] = H))
    : (H = e[43]);
  let ft = H,
    pt;
  e[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          (g.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          Ae.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }));
      }),
      (e[44] = pt))
    : (pt = e[44]);
  let mt = pt,
    gt;
  e[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (e) => {
        g.current === e.pointerId && Ae.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[45] = gt))
    : (gt = e[45]);
  let _t = gt,
    U;
  if (
    e[46] !== F ||
    e[47] !== j ||
    e[48] !== T?.label ||
    e[49] !== T?.remotePath ||
    e[50] !== a ||
    e[51] !== E
  ) {
    let t =
      Ze(T?.remotePath ?? j, T?.label) ??
      a.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (E) {
      let t;
      (e[53] === a
        ? (t = e[54])
        : ((t = a.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask ChatGPT anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[53] = a),
          (e[54] = t)),
        (U = t));
    } else if (F === `cloud`) {
      let t;
      (e[55] === a
        ? (t = e[56])
        : ((t = a.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask ChatGPT anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[55] = a),
          (e[56] = t)),
        (U = t));
    } else
      U =
        F === `worktree`
          ? a.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask ChatGPT anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : a.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask ChatGPT anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[46] = F),
      (e[47] = j),
      (e[48] = T?.label),
      (e[49] = T?.remotePath),
      (e[50] = a),
      (e[51] = E),
      (e[52] = U));
  } else U = e[52];
  let W;
  if (ne) {
    let t;
    (e[57] === a
      ? (t = e[58])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[57] = a),
        (e[58] = t)),
      (W = t));
  } else if (E) {
    let t;
    (e[59] === a
      ? (t = e[60])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Standalone chats run in a local folder`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[59] = a),
        (e[60] = t)),
      (W = t));
  } else if (oe) {
    let t;
    (e[61] === a
      ? (t = e[62])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[61] = a),
        (e[62] = t)),
      (W = t));
  }
  let yt;
  e[63] !== Ee ||
  e[64] !== k ||
  e[65] !== F ||
  e[66] !== j ||
  e[67] !== N ||
  e[68] !== it ||
  e[69] !== ve
    ? ((yt =
        F === `worktree`
          ? (0, $.jsx)(jt, {
              startingState: Ee,
              setStartingState: it,
              hostConfig: k,
              gitRootOverride: ve ?? j,
              branchSource: `worktree`,
            })
          : N == null
            ? null
            : (0, $.jsx)(At, {
                gitRoot: N,
                hostConfig: k,
                localConversationId: null,
                shouldShow: !0,
              })),
      (e[63] = Ee),
      (e[64] = k),
      (e[65] = F),
      (e[66] = j),
      (e[67] = N),
      (e[68] = it),
      (e[69] = ve),
      (e[70] = yt))
    : (yt = e[70]);
  let xt = yt,
    St;
  e[71] === a
    ? (St = e[72])
    : ((St = a.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Chat settings`,
        description: `Accessible label for the hotkey window chat settings menu`,
      })),
      (e[71] = a),
      (e[72] = St));
  let Ct = St,
    wt;
  e[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, $.jsx)(Xe, {})), (e[73] = wt))
    : (wt = e[73]);
  let Tt = Ue ? `` : void 0,
    Et;
  e[74] === ze
    ? (Et = e[75])
    : ((Et = ze == null ? void 0 : { bottom: `auto`, top: ze }), (e[74] = ze), (e[75] = Et));
  let Dt;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (0, $.jsx)(`div`, {
        className: Yt.ShellUnderlay,
        "aria-hidden": `true`,
        onLostPointerCapture: ft,
        onPointerCancel: ft,
        onPointerDown: mt,
        onPointerMove: _t,
        onPointerUp: ft,
      })),
      (e[76] = Dt))
    : (Dt = e[76]);
  let Ot = !E && !ne,
    kt;
  e[77] !== F || e[78] !== V || e[79] !== ce || e[80] !== Ot
    ? ((kt = (0, $.jsx)(Ut, {
        composerMode: F,
        enabled: Ot,
        setComposerMode: V,
        showWorktree: ce,
      })),
      (e[77] = F),
      (e[78] = V),
      (e[79] = ce),
      (e[80] = Ot),
      (e[81] = kt))
    : (kt = e[81]);
  let Pt = w ?? (E || x !== void 0 ? `~` : void 0),
    It = E ? null : (x ?? se),
    G;
  e[82] === Ct
    ? (G = e[83])
    : ((G = (0, $.jsx)(De, {
        asChild: !0,
        children: (0, $.jsx)(Qe, { label: Ct, size: `composer` }),
      })),
      (e[82] = Ct),
      (e[83] = G));
  let Lt;
  e[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lt = (0, $.jsx)(c, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[84] = Lt))
    : (Lt = e[84]);
  let Rt = x === void 0 ? void 0 : ee,
    K;
  e[85] !== dt || e[86] !== Rt
    ? ((K = (0, $.jsx)(nn, {
        label: Lt,
        control: (0, $.jsx)(vt, {
          activeProjectIdOverride: Rt,
          allowRemoteProjects: !1,
          onProjectSelected: dt,
        }),
      })),
      (e[85] = dt),
      (e[86] = Rt),
      (e[87] = K))
    : (K = e[87]);
  let zt;
  e[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (0, $.jsx)(c, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[88] = zt))
    : (zt = e[88]);
  let Bt = P.cloudUnavailableReason == null,
    Ht;
  e[89] !== F || e[90] !== V || e[91] !== ce || e[92] !== W || e[93] !== Bt
    ? ((Ht = (0, $.jsx)(nn, {
        label: zt,
        control: (0, $.jsx)(Ft, {
          canUseCloud: Bt,
          composerMode: F,
          setComposerMode: V,
          showLabel: !0,
          disabledTooltipText: W,
          showWorktree: ce,
        }),
      })),
      (e[89] = F),
      (e[90] = V),
      (e[91] = ce),
      (e[92] = W),
      (e[93] = Bt),
      (e[94] = Ht))
    : (Ht = e[94]);
  let q;
  e[95] !== F ||
  e[96] !== ot ||
  e[97] !== B ||
  e[98] !== z ||
  e[99] !== R ||
  e[100] !== Ne ||
  e[101] !== Ie ||
  e[102] !== Pe ||
  e[103] !== L
    ? ((q =
        F === `worktree`
          ? (0, $.jsx)(nn, {
              label: (0, $.jsx)(c, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, $.jsx)(Mt, {
                environments: L,
                isLoading: R || (z && L.length === 0),
                hasError: B != null,
                selectedConfigPath: Ne,
                repairConfigPath: Pe,
                onSelectConfigPath: Ie,
                onOpenSettings: ot,
              }),
            })
          : null),
      (e[95] = F),
      (e[96] = ot),
      (e[97] = B),
      (e[98] = z),
      (e[99] = R),
      (e[100] = Ne),
      (e[101] = Ie),
      (e[102] = Pe),
      (e[103] = L),
      (e[104] = q))
    : (q = e[104]);
  let Wt;
  e[105] === xt
    ? (Wt = e[106])
    : ((Wt = xt
        ? (0, $.jsx)(nn, {
            label: (0, $.jsx)(c, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: xt,
          })
        : null),
      (e[105] = xt),
      (e[106] = Wt));
  let J;
  e[107] === F
    ? (J = e[108])
    : ((J =
        F === `cloud`
          ? null
          : (0, $.jsx)(qe, { conversationId: null, hostId: be, DropdownContainer: tn })),
      (e[107] = F),
      (e[108] = J));
  let Y;
  e[109] !== K || e[110] !== Ht || e[111] !== q || e[112] !== Wt || e[113] !== J
    ? ((Y = (0, $.jsx)(Fe, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `w-auto min-w-[320px] rounded-3xl p-0 no-drag`,
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-3`,
          children: [K, Ht, q, Wt, J],
        }),
      })),
      (e[109] = K),
      (e[110] = Ht),
      (e[111] = q),
      (e[112] = Wt),
      (e[113] = J),
      (e[114] = Y))
    : (Y = e[114]);
  let X;
  e[115] !== Le || e[116] !== G || e[117] !== Y
    ? ((X = (0, $.jsxs)(me, { open: Le, onOpenChange: Re, children: [G, Y] })),
      (e[115] = Le),
      (e[116] = G),
      (e[117] = Y),
      (e[118] = X))
    : (X = e[118]);
  let Z;
  e[119] !== P || e[120] !== U || e[121] !== Pt || e[122] !== It || e[123] !== X
    ? ((Z = (0, $.jsx)(`div`, {
        className: `relative no-drag`,
        children: (0, $.jsx)(ht, {
          children: (0, $.jsx)(rt, {
            showWorkspaceDropdownInUtilityBar: !1,
            showUtilityBar: !1,
            surfaceClassName: Yt.ComposerSurface,
            composerModeAvailability: P,
            placeholderText: U,
            defaultCwd: Pt,
            selectedProject: It,
            hotkeyWindowHomeFooterControls: X,
            onLocalConversationCreated: ct,
          }),
        }),
      })),
      (e[119] = P),
      (e[120] = U),
      (e[121] = Pt),
      (e[122] = It),
      (e[123] = X),
      (e[124] = Z))
    : (Z = e[124]);
  let Kt;
  return (
    e[125] !== Tt || e[126] !== Et || e[127] !== kt || e[128] !== Z
      ? ((Kt = (0, $.jsxs)(`div`, {
          ref: p,
          className: Yt.Home,
          children: [
            wt,
            (0, $.jsxs)(`div`, {
              ref: h,
              className: Yt.HomeShell,
              "data-drag-reactivation": Tt,
              style: Et,
              children: [Dt, kt, Z],
            }),
          ],
        })),
        (e[125] = Tt),
        (e[126] = Et),
        (e[127] = kt),
        (e[128] = Z),
        (e[129] = Kt))
      : (Kt = e[129]),
    Kt
  );
}
function Qt(e) {
  Ae.hotkeyWindowHotkeys?.open({ path: ve(e) });
}
function $t() {
  L();
}
function en(e) {
  Ae.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function tn(e) {
  let t = (0, an.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(c, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsx)(nn, { label: r, control: n })), (t[1] = n), (t[2] = i)),
    i
  );
}
function nn(e) {
  let t = (0, an.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-default`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, $.jsx)(`div`, { className: `min-w-0`, children: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function rn(e) {
  return Number.parseFloat(e) || 0;
}
var an, Q, $, on;
e(() => {
  ((an = I()),
    ne(),
    s(),
    (Q = t(o(), 1)),
    oe(),
    h(),
    ze(),
    it(),
    Dt(),
    ot(),
    U(),
    _t(),
    N(),
    Ot(),
    g(),
    _e(),
    Lt(),
    yt(),
    wt(),
    kt(),
    nt(),
    Le(),
    Je(),
    D(),
    ge(),
    we(),
    Ge(),
    k(),
    F(),
    w(),
    $e(),
    et(),
    Ht(),
    Wt(),
    Pt(),
    X(),
    Xt(),
    ($ = Ce()),
    (on = [
      `[data-composer-overlay-floating-ui]`,
      `[data-above-composer-portal] > *`,
      `[data-radix-popper-content-wrapper] > *`,
    ]));
})();
export { Zt as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page-bfc4429f9d4f.js.map
