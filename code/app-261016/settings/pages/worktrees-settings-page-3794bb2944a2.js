const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./local-environments-settings-content-b7db8b7250a1.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./local-environments-settings-content-5bc177910d1e.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./local-environment-workflow-messages-83f970f5c58f.js",
      "./local-environment-editor-c900e0b21163.js",
      "./useForm-357912521946.js",
      "./with-selector-9a365b8c9e34.js",
      "./toolbar-breadcrumb-d8f79235f5b5.js",
      "./settings-unsaved-changes-dialog-ffd581d4a9b5.js",
      "./settings-row-disclosure-4167ebc9233a.js",
      "./settings-tabs-ee9876da4c9d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $C as r,
  $St as i,
  $st as a,
  Agt as o,
  Bst as s,
  D4 as c,
  DB as l,
  F3 as u,
  FBt as d,
  Fgt as f,
  HO as p,
  I3 as m,
  IO as h,
  Igt as g,
  JO as _,
  Jpt as v,
  LNt as y,
  LO as b,
  Mst as x,
  NSt as S,
  Ngt as C,
  O4 as w,
  OB as T,
  OFt as E,
  Oz as D,
  PBt as O,
  P_t as k,
  Qst as A,
  RFt as j,
  RO as M,
  SCt as N,
  Sz as P,
  VSt as F,
  Vrt as I,
  WO as L,
  XOt as R,
  Y3 as z,
  Ypt as B,
  Z3 as V,
  ZSt as H,
  ast as ee,
  b_t as te,
  dct as ne,
  e6 as re,
  ew as U,
  hit as ie,
  iCt as W,
  ist as ae,
  jgt as G,
  jst as oe,
  kFt as se,
  lQ as ce,
  lit as le,
  lk as ue,
  lvt as de,
  nCt as fe,
  oit as pe,
  okt as me,
  ovt as K,
  qO as he,
  qrt as q,
  sct as J,
  sw as ge,
  tit as Y,
  tkt as X,
  tpt as _e,
  uQ as ve,
  uSt as ye,
  udt as be,
  uk as xe,
  uw as Se,
  vst as Ce,
  yft as we,
  yst as Te,
  zFt as Ee,
  zO as De,
  zst as Oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as ke,
  $Ln as Ae,
  Avr as je,
  BRr as Me,
  CZ as Ne,
  Cjr as Pe,
  DSt as Fe,
  DTn as Ie,
  DTt as Le,
  ESt as Re,
  ETt as ze,
  Ecr as Be,
  Exr as Ve,
  FBr as He,
  Fxt as Ue,
  Ghr as We,
  HBr as Ge,
  IBr as Ke,
  Ixt as qe,
  KBr as Je,
  KO as Ye,
  LF as Xe,
  OTt as Ze,
  QF as Qe,
  RF as $e,
  SZ as et,
  TSt as tt,
  Tcr as nt,
  UBr as rt,
  Whr as it,
  XF as at,
  Xnr as ot,
  ZF as st,
  ZLn as ct,
  Znr as lt,
  _p as ut,
  aVr as dt,
  cA as ft,
  cGt as pt,
  cnr as mt,
  dLt as ht,
  dVn as gt,
  eI as _t,
  fxr as vt,
  gp as yt,
  hxr as bt,
  iat as xt,
  jvr as St,
  kTt as Ct,
  lnr as wt,
  mEt as Tt,
  mwr as Et,
  oat as Dt,
  qBr as Ot,
  qO as kt,
  qhr as At,
  rVr as jt,
  sA as Z,
  sGt as Mt,
  uLt as Nt,
  wLr as Pt,
  wTn as Ft,
  xjr as It,
  zRr as Lt,
} from "./app-initial-ad16eaadf81f.js";
import { n as Rt, t as zt } from "./use-codex-worktrees-d20378991919.js";
import { n as Bt, t as Vt } from "./settings-tabs-ee9876da4c9d.js";
function Ht(e) {
  let t = (0, Ut.c)(40),
    { hostId: n } = e,
    r = i(A),
    a = me(),
    { data: o } = At(n),
    s = o?.codexHome,
    c = Pe(`4059753351`) ? o?.workspacesRoot : s,
    l = fe(Fe, n)?.worktreesRoot,
    [u, d] = (0, Gt.useState)(null),
    p;
  t[0] !== n || t[1] !== r
    ? ((p = (e) => Re(r, n, B.worktreeRoot, e)), (t[0] = n), (t[1] = r), (t[2] = p))
    : (p = t[2]);
  let m, h;
  t[3] !== a || t[4] !== r
    ? ((m = () => {
        (d(null),
          r
            .get(q)
            .success(
              a.formatMessage({
                id: `settings.git.worktreeRoot.save.success`,
                defaultMessage: `Saved worktree root`,
                description: `Toast shown when git worktree root is saved`,
              }),
            ));
      }),
      (h = () => {
        r.get(q).danger(
          a.formatMessage({
            id: `settings.git.worktreeRoot.save.error`,
            defaultMessage: `Failed to save worktree root`,
            description: `Toast shown when git worktree root save fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.worktreeRoot.save.error` } },
        );
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = m),
      (t[6] = h))
    : ((m = t[5]), (h = t[6]));
  let _;
  t[7] !== p || t[8] !== m || t[9] !== h
    ? ((_ = { mutationFn: p, onSuccess: m, onError: h }), (t[7] = p), (t[8] = m), (t[9] = h), (t[10] = _))
    : (_ = t[10]);
  let v = Te(_),
    y = l ?? ``,
    b = u ?? y,
    x = u != null && u !== y,
    S = v.isPending,
    w;
  t[11] === s
    ? (w = t[12])
    : ((w = s == null ? null : Wt.default.posix),
      s != null && (f(s) || g(s)) && (w = Wt.default.win32),
      (t[11] = s),
      (t[12] = w));
  let T;
  t[13] !== w || t[14] !== S || t[15] !== x || t[16] !== v || t[17] !== b
    ? ((T = () => {
        if (!x || S) return;
        let e = b.trim();
        (e === `` || (C(e) && w?.isAbsolute(e))) && v.mutate(e);
      }),
      (t[13] = w),
      (t[14] = S),
      (t[15] = x),
      (t[16] = v),
      (t[17] = b),
      (t[18] = T))
    : (T = t[18]);
  let E = T,
    D = x && !S,
    O;
  t[19] === E
    ? (O = t[20])
    : ((O = (e) => {
        (e.preventDefault(), E());
      }),
      (t[19] = E),
      (t[20] = O));
  let k;
  (t[21] !== D || t[22] !== O
    ? ((k = { accelerator: `CmdOrCtrl+S`, enabled: D, onKeyDown: O }), (t[21] = D), (t[22] = O), (t[23] = k))
    : (k = t[23]),
    Ie(k));
  let j, M;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Kt.jsx)(X, {
        id: `settings.git.worktreeRoot.label`,
        defaultMessage: `Worktree root`,
        description: `Label for git worktree root setting`,
      })),
      (j = (0, Kt.jsx)(X, {
        id: `settings.git.worktreeRoot.description`,
        defaultMessage: `Directory where ChatGPT creates managed worktrees. Leave blank to use the default location`,
        description: `Description for git worktree root setting`,
      })),
      (t[24] = j),
      (t[25] = M))
    : ((j = t[24]), (M = t[25]));
  let N;
  t[26] !== S || t[27] !== y
    ? ((N = (e) => {
        if (S) return;
        let t = e.target.value;
        d(t === y ? null : t);
      }),
      (t[26] = S),
      (t[27] = y),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] === c ? (P = t[30]) : ((P = c == null ? void 0 : be(c)), (t[29] = c), (t[30] = P));
  let F;
  t[31] === a
    ? (F = t[32])
    : ((F = a.formatMessage({
        id: `settings.git.worktreeRoot.ariaLabel`,
        defaultMessage: `Worktree root`,
        description: `Aria label for git worktree root input`,
      })),
      (t[31] = a),
      (t[32] = F));
  let I;
  return (
    t[33] !== E || t[34] !== S || t[35] !== N || t[36] !== P || t[37] !== F || t[38] !== b
      ? ((I = (0, Kt.jsx)(ge, {
          label: M,
          description: j,
          control: (0, Kt.jsx)(`div`, {
            className: `w-72 max-w-full`,
            children: (0, Kt.jsx)(ct, {
              value: b,
              onChange: N,
              onBlur: E,
              placeholder: P,
              "aria-label": F,
              disabled: S,
            }),
          }),
        })),
        (t[33] = E),
        (t[34] = S),
        (t[35] = N),
        (t[36] = P),
        (t[37] = F),
        (t[38] = b),
        (t[39] = I))
      : (I = t[39]),
    I
  );
}
var Ut, Wt, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Ut = O()),
      Ce(),
      H(),
      (Wt = t(we(), 1)),
      J(),
      (Gt = d()),
      R(),
      Ae(),
      I(),
      We(),
      Ft(),
      a(),
      Se(),
      It(),
      tt(),
      (Kt = y()));
  }))();
}
function Jt(e) {
  let t = (0, Xt.c)(90),
    { hostId: n } = e,
    r = i(A),
    a = me(),
    [o, s] = (0, Zt.useState)(!1),
    [c, l] = (0, Zt.useState)(null),
    u = ie(v.upstreamRefreshMode),
    d = fe(Fe, n),
    f = d?.autoCleanupEnabled ?? v.autoCleanupEnabled.default,
    p = d?.keepCount ?? v.keepCount.default,
    m;
  t[0] === r ? (m = t[1]) : ((m = (e) => le(r, v.upstreamRefreshMode, e)), (t[0] = r), (t[1] = m));
  let h, g;
  t[2] !== a || t[3] !== r
    ? ((h = (e, t) => {
        switch (t) {
          case `best-effort`:
            r.get(q).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.enabled`,
                defaultMessage: `Upstream refresh enabled`,
                description: `Toast shown when upstream refresh before worktree creation is enabled`,
              }),
            );
            return;
          case `never`:
            r.get(q).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.disabled`,
                defaultMessage: `Upstream refresh disabled`,
                description: `Toast shown when upstream refresh before worktree creation is disabled`,
              }),
            );
            return;
        }
      }),
      (g = () => {
        r.get(q).danger(
          a.formatMessage({
            id: `settings.worktrees.upstreamRefresh.save.error`,
            defaultMessage: `Failed to save upstream refresh setting`,
            description: `Toast shown when saving the upstream refresh setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.upstreamRefresh.save.error` } },
        );
      }),
      (t[2] = a),
      (t[3] = r),
      (t[4] = h),
      (t[5] = g))
    : ((h = t[4]), (g = t[5]));
  let _;
  t[6] !== m || t[7] !== h || t[8] !== g
    ? ((_ = { mutationFn: m, onSuccess: h, onError: g }), (t[6] = m), (t[7] = h), (t[8] = g), (t[9] = _))
    : (_ = t[9]);
  let y = Te(_),
    b;
  t[10] !== n || t[11] !== r
    ? ((b = (e) => Re(r, n, v.autoCleanupEnabled, e)), (t[10] = n), (t[11] = r), (t[12] = b))
    : (b = t[12]);
  let x, S;
  t[13] !== a || t[14] !== r
    ? ((x = (e, t) => {
        if (t) {
          r.get(q).success(
            a.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        r.get(q).success(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (S = () => {
        r.get(q).danger(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.autoCleanup.save.error` } },
        );
      }),
      (t[13] = a),
      (t[14] = r),
      (t[15] = x),
      (t[16] = S))
    : ((x = t[15]), (S = t[16]));
  let C;
  t[17] !== b || t[18] !== x || t[19] !== S
    ? ((C = { mutationFn: b, onSuccess: x, onError: S }), (t[17] = b), (t[18] = x), (t[19] = S), (t[20] = C))
    : (C = t[20]);
  let w = Te(C),
    T;
  t[21] !== n || t[22] !== r
    ? ((T = (e) => Re(r, n, v.keepCount, e)), (t[21] = n), (t[22] = r), (t[23] = T))
    : (T = t[23]);
  let E, D;
  t[24] !== a || t[25] !== r
    ? ((E = () => {
        (l(null),
          r
            .get(q)
            .success(
              a.formatMessage({
                id: `settings.worktrees.keepCount.save.success`,
                defaultMessage: `Saved auto-delete limit`,
                description: `Toast shown when the worktree auto-delete limit is saved`,
              }),
            ));
      }),
      (D = () => {
        r.get(q).danger(
          a.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.keepCount.save.error` } },
        );
      }),
      (t[24] = a),
      (t[25] = r),
      (t[26] = E),
      (t[27] = D))
    : ((E = t[26]), (D = t[27]));
  let O;
  t[28] !== E || t[29] !== D || t[30] !== T
    ? ((O = { mutationFn: T, onSuccess: E, onError: D }), (t[28] = E), (t[29] = D), (t[30] = T), (t[31] = O))
    : (O = t[31]);
  let k = Te(O),
    j = String(p),
    M = c ?? j,
    N = w.isPending,
    P = k.isPending || N || !f,
    F;
  t[32] !== N || t[33] !== w
    ? ((F = (e) => {
        if (!N) {
          if (e) {
            w.mutate(!0);
            return;
          }
          s(!0);
        }
      }),
      (t[32] = N),
      (t[33] = w),
      (t[34] = F))
    : (F = t[34]);
  let I = F,
    L;
  t[35] === w
    ? (L = t[36])
    : ((L = () => {
        (l(null), s(!1), w.mutate(!1));
      }),
      (t[35] = w),
      (t[36] = L));
  let R = L,
    z;
  t[37] !== P || t[38] !== p || t[39] !== c || t[40] !== k
    ? ((z = () => {
        if (P || c == null) return;
        let e = c.trim(),
          t = Number(e);
        if (e.length === 0 || !Number.isFinite(t)) {
          l(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === p) {
          l(null);
          return;
        }
        k.mutate(n);
      }),
      (t[37] = P),
      (t[38] = p),
      (t[39] = c),
      (t[40] = k),
      (t[41] = z))
    : (z = t[41]);
  let B = z,
    V,
    H;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(X, {
        id: `settings.worktrees.upstreamRefresh.label`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Label for the worktree upstream refresh toggle`,
      })),
      (H = (0, Q.jsx)(X, {
        id: `settings.worktrees.upstreamRefresh.description`,
        defaultMessage: `Codex normally picks up branch updates during regular Git activity. This also fetches before each new worktree.`,
        description: `Description for the worktree upstream refresh toggle`,
      })),
      (t[42] = V),
      (t[43] = H))
    : ((V = t[42]), (H = t[43]));
  let ee = u === `best-effort`,
    te = y.isPending,
    ne;
  t[44] === y
    ? (ne = t[45])
    : ((ne = (e) => {
        y.mutate(e ? `best-effort` : `never`);
      }),
      (t[44] = y),
      (t[45] = ne));
  let re;
  t[46] === a
    ? (re = t[47])
    : ((re = a.formatMessage({
        id: `settings.worktrees.upstreamRefresh.ariaLabel`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Aria label for the worktree upstream refresh toggle`,
      })),
      (t[46] = a),
      (t[47] = re));
  let U;
  t[48] !== y.isPending || t[49] !== ee || t[50] !== ne || t[51] !== re
    ? ((U = (0, Q.jsx)(ge, {
        label: V,
        description: H,
        control: (0, Q.jsx)(ue, { checked: ee, disabled: te, onChange: ne, ariaLabel: re }),
      })),
      (t[48] = y.isPending),
      (t[49] = ee),
      (t[50] = ne),
      (t[51] = re),
      (t[52] = U))
    : (U = t[52]);
  let W, ae;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(X, {
        id: `settings.worktrees.autoCleanup.label`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Label for the automatic worktree deletion toggle`,
      })),
      (ae = (0, Q.jsx)(X, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (t[53] = W),
      (t[54] = ae))
    : ((W = t[53]), (ae = t[54]));
  let G;
  t[55] === a
    ? (G = t[56])
    : ((G = a.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (t[55] = a),
      (t[56] = G));
  let oe;
  t[57] !== f || t[58] !== I || t[59] !== N || t[60] !== G
    ? ((oe = (0, Q.jsx)(ge, {
        label: W,
        description: ae,
        control: (0, Q.jsx)(ue, { checked: f, disabled: N, onChange: I, ariaLabel: G }),
      })),
      (t[57] = f),
      (t[58] = I),
      (t[59] = N),
      (t[60] = G),
      (t[61] = oe))
    : (oe = t[61]);
  let se;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(X, {
        id: `settings.worktrees.keepCount.label`,
        defaultMessage: `Auto-delete limit`,
        description: `Label for the worktree auto-delete limit setting`,
      })),
      (t[62] = se))
    : (se = t[62]);
  let ce;
  t[63] === f
    ? (ce = t[64])
    : ((ce = f
        ? (0, Q.jsx)(X, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, Q.jsx)(X, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (t[63] = f),
      (t[64] = ce));
  let de;
  t[65] !== P || t[66] !== j
    ? ((de = (e) => {
        if (P) return;
        let t = e.target.value;
        l(t === j ? null : t);
      }),
      (t[65] = P),
      (t[66] = j),
      (t[67] = de))
    : (de = t[67]);
  let pe;
  t[68] === B
    ? (pe = t[69])
    : ((pe = (e) => {
        e.key === `Enter` && (e.preventDefault(), B());
      }),
      (t[68] = B),
      (t[69] = pe));
  let K;
  t[70] === a
    ? (K = t[71])
    : ((K = a.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (t[70] = a),
      (t[71] = K));
  let he;
  t[72] !== B || t[73] !== P || t[74] !== M || t[75] !== de || t[76] !== pe || t[77] !== K
    ? ((he = (0, Q.jsx)(`div`, {
        className: `ms-6 w-24`,
        children: (0, Q.jsx)(ct, {
          variant: `compact`,
          value: M,
          onChange: de,
          onBlur: B,
          onKeyDown: pe,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": K,
          disabled: P,
        }),
      })),
      (t[72] = B),
      (t[73] = P),
      (t[74] = M),
      (t[75] = de),
      (t[76] = pe),
      (t[77] = K),
      (t[78] = he))
    : (he = t[78]);
  let J;
  t[79] !== ce || t[80] !== he
    ? ((J = (0, Q.jsx)(ge, { label: se, description: ce, control: he })),
      (t[79] = ce),
      (t[80] = he),
      (t[81] = J))
    : (J = t[81]);
  let Y;
  t[82] !== R || t[83] !== o
    ? ((Y = (0, Q.jsx)(Yt, { open: o, onOpenChange: s, onConfirm: R })),
      (t[82] = R),
      (t[83] = o),
      (t[84] = Y))
    : (Y = t[84]);
  let _e;
  return (
    t[85] !== U || t[86] !== oe || t[87] !== J || t[88] !== Y
      ? ((_e = (0, Q.jsxs)(Q.Fragment, { children: [U, oe, J, Y] })),
        (t[85] = U),
        (t[86] = oe),
        (t[87] = J),
        (t[88] = Y),
        (t[89] = _e))
      : (_e = t[89]),
    _e
  );
}
function Yt(e) {
  let t = (0, Xt.c)(19),
    { open: n, onOpenChange: r, onConfirm: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(De, {
        children: (0, Q.jsx)(M, {
          title: (0, Q.jsx)(he, {
            children: (0, Q.jsx)(X, {
              id: `settings.worktrees.autoCleanup.confirm.title`,
              defaultMessage: `Disable automatic worktree deletion?`,
              description: `Title for the automatic worktree deletion disable confirmation dialog`,
            }),
          }),
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(De, {
        className: `text-codex-description`,
        children: (0, Q.jsx)(`p`, {
          children: (0, Q.jsx)(X, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = () => {
        r(!1);
      }),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(X, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === s
    ? (l = t[6])
    : ((l = (0, Q.jsx)(z, { color: `ghost`, onClick: s, children: c })), (t[5] = s), (t[6] = l));
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = () => {
        i();
      }),
      (t[7] = i),
      (t[8] = u));
  let d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(X, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === u
    ? (f = t[11])
    : ((f = (0, Q.jsx)(z, { color: `danger`, onClick: u, children: d })), (t[10] = u), (t[11] = f));
  let p;
  t[12] !== l || t[13] !== f
    ? ((p = (0, Q.jsxs)(h, {
        children: [a, o, (0, Q.jsx)(De, { children: (0, Q.jsxs)(b, { children: [l, f] }) })],
      })),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== r || t[16] !== n || t[17] !== p
      ? ((m = (0, Q.jsx)(L, { open: n, showDialogClose: !1, onOpenChange: r, children: p })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var Xt, Zt, Q;
function Qt() {
  return (Qt = e(() => {
    ((Xt = O()),
      Ce(),
      H(),
      J(),
      (Zt = d()),
      R(),
      V(),
      _(),
      p(),
      Ae(),
      I(),
      xe(),
      a(),
      pe(),
      Se(),
      tt(),
      (Q = y()));
  }))();
}
function $t(e) {
  let t = (0, en.c)(2),
    { hostId: n } = e;
  if (fe(Fe, n) == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, tn.jsx)(tn.Fragment, {
          children: (0, tn.jsxs)(r, {
            children: [(0, tn.jsx)(Ht, { hostId: n }), (0, tn.jsx)(Jt, { hostId: n })],
          }),
        })),
        (t[0] = n),
        (t[1] = i)),
    i
  );
}
var en, tn;
function nn() {
  return (nn = e(() => {
    ((en = O()), H(), qt(), Qt(), U(), tt(), (tn = y()));
  }))();
}
function rn(e, t) {
  return [`settings-worktree-conversations`, e, t];
}
function an(e, t, n) {
  let r = (0, un.c)(24),
    a;
  r[0] === n ? (a = r[1]) : ((a = n === void 0 ? [] : n), (r[0] = n), (r[1] = a));
  let o = a,
    s = i(A),
    c = fe(Ge, e),
    l = fe(jt, e),
    u = W(Lt),
    d = W(Me),
    f;
  r[2] !== e || r[3] !== c
    ? ((f = !k(e) && te(c, `threadAttachmentOwners`)), (r[2] = e), (r[3] = c), (r[4] = f))
    : (f = r[4]);
  let p = f,
    m;
  r[5] !== u || r[6] !== e || r[7] !== t || r[8] !== p || r[9] !== d || r[10] !== c || r[11] !== o
    ? ((m = p ? [...rn(e, t), u, d, c, o] : rn(e, t)),
      (r[5] = u),
      (r[6] = e),
      (r[7] = t),
      (r[8] = p),
      (r[9] = d),
      (r[10] = c),
      (r[11] = o),
      (r[12] = m))
    : (m = r[12]);
  let h = !p || l === `connected`,
    g;
  r[13] !== e || r[14] !== t || r[15] !== p || r[16] !== s || r[17] !== o
    ? ((g = async (n) => {
        let { signal: r } = n,
          i = await on(s, e, t);
        return p ? ln(s, e, o, i, r) : i;
      }),
      (r[13] = e),
      (r[14] = t),
      (r[15] = p),
      (r[16] = s),
      (r[17] = o),
      (r[18] = g))
    : (g = r[18]);
  let _ = p ? 0 : Oe.ONE_MINUTE,
    v;
  return (
    r[19] !== m || r[20] !== h || r[21] !== g || r[22] !== _
      ? ((v = {
          queryKey: m,
          enabled: h,
          queryFn: g,
          refetchInterval: Oe.ONE_MINUTE,
          retry: !1,
          staleTime: _,
        }),
        (r[19] = m),
        (r[20] = h),
        (r[21] = g),
        (r[22] = _),
        (r[23] = v))
      : (v = r[23]),
    x(v)
  );
}
async function on(e, t, n) {
  let r = n ? [K, de] : [K],
    [i, a] = await Promise.all([Promise.all(r.map((n) => cn(e, t, n))), sn(e, t)]),
    o = new Set(a.map((e) => e.id)),
    s = new Map(
      i
        .flat()
        .filter(qe)
        .map((e) => [e.id, e]),
    );
  for (let e of a) s.set(e.id, e);
  return Array.from(s.values())
    .sort((e, t) => (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt))
    .map((e) => ({
      id: ye(e.id),
      cwd: e.cwd,
      isSubagent: je(e),
      isPinned: o.has(e.id),
      title: e.name?.trim() || e.preview || null,
    }));
}
async function sn(e, t) {
  if (ae?.pinnedThreads == null) throw Error(`Pinned thread service is unavailable`);
  let { threadIds: n } = await Y(ae.pinnedThreads.list({ hostId: t, useAppServerPins: e.get(ot) }));
  return Promise.all(
    n.map(async (n) => {
      let { thread: r } = await He(e, t).sendRequest(`thread/read`, { threadId: n, includeTurns: !1 });
      return r;
    }),
  );
}
async function cn(e, t, n) {
  let r = [],
    i = new Set(),
    a = null;
  do {
    let o = await He(e, t).sendRequest(
      `thread/list`,
      {
        archived: !1,
        cursor: a,
        limit: 100,
        modelProviders: null,
        sortKey: `updated_at`,
        sourceKinds: n,
        useStateDbOnly: !0,
      },
      { priority: `background`, source: `thread_list` },
    );
    r.push(...o.data);
    let s = o.nextCursor;
    if (s != null && i.has(s)) throw Error(`App Server repeated a worktree conversation cursor`);
    (s != null && i.add(s), (a = s));
  } while (a != null);
  return r;
}
async function ln(e, t, n, r, i) {
  let a = He(e, t),
    o = new Map();
  for (let e of (0, dn.default)([...new Set(n)], 10))
    (i.throwIfAborted(),
      await Promise.all(
        e.map(async (e) => {
          let t = await ne({
            worktreeRoot: e,
            listOwners: (e) => (i.throwIfAborted(), a.sendRequest(`thread/attachmentOwner/list`, e)),
          });
          for (let n of t) {
            let t = o.get(n.threadId) ?? [];
            (t.push(e), o.set(n.threadId, t));
          }
        }),
      ));
  let s = new Map(r.map((e) => [e.id, { ...e, attachedWorktreeRoots: o.get(e.id) ?? [] }])),
    c = [...o.keys()].filter((e) => !s.has(ye(e)));
  for (let e of (0, dn.default)(c, 10))
    (i.throwIfAborted(),
      await Promise.all(
        e.map(async (e) => {
          let { thread: t } = await a.sendRequest(`thread/read`, { threadId: e, includeTurns: !1 });
          s.set(ye(e), {
            id: ye(e),
            cwd: t.cwd,
            attachedWorktreeRoots: o.get(e) ?? [],
            isSubagent: je(t),
            isPinned: !1,
            title: t.name?.trim() || t.preview || null,
          });
        }),
      ));
  return (i.throwIfAborted(), [...s.values()]);
}
var un, dn;
function fn() {
  return (fn = e(() => {
    ((un = O()),
      oe(),
      Et(),
      (dn = t(it(), 1)),
      H(),
      J(),
      Ke(),
      dt(),
      rt(),
      St(),
      Ue(),
      Pt(),
      lt(),
      ee(),
      a(),
      s());
  }))();
}
function pn(e, t) {
  let n = new Map(e.map((e) => [G(e.dir), []]));
  for (let r of t)
    for (let t of e)
      if (mn(r.cwd, t.dir) || r.attachedWorktreeRoots?.includes(t.dir)) {
        let e = n.get(G(t.dir));
        e != null && !e.some(({ id: e }) => e === r.id) && e.push(r);
      }
  return n;
}
function mn(e, t) {
  let n = o(e).replace(/\/+$/, ``),
    r = o(t).replace(/\/+$/, ``);
  return n === r || n.startsWith(`${r}/`);
}
function hn() {
  return (hn = e(() => {
    D();
  }))();
}
async function gn(e, t, n) {
  if (!e.get(vn, t)) {
    e.set(vn, t, !0);
    try {
      if ((await sn(e, t.hostId)).some((e) => P([t.worktree], e.cwd) != null)) {
        e.get(q).warning(
          (0, _n.jsx)(X, {
            id: `settings.worktrees.delete.pinned`,
            defaultMessage: `Unpin the chats in this worktree before deleting it`,
            description: `Explains why deleting a worktree with a pinned chat was blocked`,
          }),
        );
        return;
      }
      (await Promise.all(
        n.map((n) =>
          He(e, t.hostId).archiveConversation(n.id, {
            useAppServerPins: e.get(ot),
            cleanupWorktree: !1,
            source: `worktree_delete`,
          }),
        ),
      ),
        await Y(Ye().delete({ ...t, reason: `settings-delete-targeted` })),
        await e.queryClient.invalidateQueries({ queryKey: ze(t.hostId) }),
        e
          .get(q)
          .success(
            (0, _n.jsx)(X, {
              id: `settings.worktrees.delete.success`,
              defaultMessage: `Worktree deleted`,
              description: `Confirmation shown after deleting a worktree from settings, even when the user has navigated away`,
            }),
          ));
    } catch (t) {
      (Ee.error(`Failed to delete worktree`, { safe: {}, sensitive: { error: _e(t) } }),
        e
          .get(q)
          .danger(
            (0, _n.jsx)(X, {
              id: `settings.worktrees.delete.error`,
              defaultMessage: `Failed to delete worktree`,
              description: `Error message when deleting a worktree from settings`,
            }),
            { errorAnalytics: { toastId: `settings.worktrees.delete.error` } },
          ));
    } finally {
      e.set(vn, t, !1);
    }
  }
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    (H(), J(), R(), Ke(), I(), lt(), kt(), a(), j(), D(), Le(), fn(), (_n = y()), (vn = N(A, (e) => !1)));
  }))();
}
function bn() {
  let e = (0, jn.c)(5),
    t = F(),
    { selectedHostId: n } = Dt(),
    r = Pe(`375130565`);
  if (r && new URLSearchParams(t.search).get(`tab`) === `environments`) {
    let r = `${n}:${t.key}`,
      i;
    return (
      e[0] !== n || e[1] !== r
        ? ((i = (0, $.jsx)(Mn, { settingsHostId: n }, r)), (e[0] = n), (e[1] = r), (e[2] = i))
        : (i = e[2]),
      i
    );
  }
  let i;
  return (
    e[3] === r ? (i = e[4]) : ((i = (0, $.jsx)(xn, { showEnvironmentTabs: r })), (e[3] = r), (e[4] = i)),
    i
  );
}
function xn(e) {
  let t = (0, jn.c)(55),
    { showEnvironmentTabs: n } = e,
    i = me(),
    { selectedHostId: a } = Dt(),
    o = Ot(a),
    s = Tt(),
    { data: u, isLoading: d, isFetching: f, error: p, refetch: m } = Rt(o, `worktrees_settings_page`),
    h;
  t[0] === a ? (h = t[1]) : ((h = { hostId: a }), (t[0] = a), (t[1] = h));
  let { data: g, isLoading: _, error: v } = fe(bt, h),
    y = An(u?.worktrees ?? [], g?.roots ?? []),
    { data: b, error: x, isFetching: S, isLoading: C, refetch: w } = an(a, s, y.map(Sn)),
    T = b ?? [],
    E = pn(y, T),
    D = kn(y),
    O;
  t[2] === i
    ? (O = t[3])
    : ((O = i.formatMessage({
        id: `settings.worktrees.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label to refresh the worktree list`,
      })),
      (t[2] = i),
      (t[3] = O));
  let k = O,
    A = f || S,
    j;
  t[4] !== w || t[5] !== m
    ? ((j = () => {
        Promise.all([m(), w()]);
      }),
      (t[4] = w),
      (t[5] = m),
      (t[6] = j))
    : (j = t[6]);
  let M;
  t[7] !== S || t[8] !== f
    ? ((M = f || S ? null : (0, $.jsx)(l, { "aria-hidden": !1, asset: c })),
      (t[7] = S),
      (t[8] = f),
      (t[9] = M))
    : (M = t[9]);
  let N;
  t[10] !== k || t[11] !== A || t[12] !== j || t[13] !== M
    ? ((N = (0, $.jsx)(z, {
        "aria-label": k,
        className: `shrink-0`,
        color: `ghost`,
        loading: A,
        onClick: j,
        size: `toolbar`,
        title: k,
        uniform: !0,
        children: M,
      })),
      (t[10] = k),
      (t[11] = A),
      (t[12] = j),
      (t[13] = M),
      (t[14] = N))
    : (N = t[14]);
  let P = N,
    F = p ?? v ?? x;
  if (d || _) {
    let e;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Xe, { slug: `worktrees` })), (t[15] = e))
      : (e = t[15]);
    let r;
    t[16] === n
      ? (r = t[17])
      : ((r = n ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[16] = n), (t[17] = r));
    let i;
    t[18] === a ? (i = t[19]) : ((i = (0, $.jsx)($t, { hostId: a }, a)), (t[18] = a), (t[19] = i));
    let o;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(at, {
          children: (0, $.jsx)(X, {
            id: `settings.worktrees.loading.body`,
            defaultMessage: `Fetching worktree details…`,
            description: `Loading state body for worktrees settings`,
          }),
        })),
        (t[20] = o))
      : (o = t[20]);
    let s;
    return (
      t[21] !== r || t[22] !== i
        ? ((s = (0, $.jsxs)(Qe, { title: e, stickyControls: r, children: [i, o] })),
          (t[21] = r),
          (t[22] = i),
          (t[23] = s))
        : (s = t[23]),
      s
    );
  }
  if (F) {
    let e;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Xe, { slug: `worktrees` })), (t[24] = e))
      : (e = t[24]);
    let o;
    t[25] === n
      ? (o = t[26])
      : ((o = n ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[25] = n), (t[26] = o));
    let s;
    t[27] === a ? (s = t[28]) : ((s = (0, $.jsx)($t, { hostId: a }, a)), (t[27] = a), (t[28] = s));
    let c;
    t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(X, {
          id: `settings.worktrees.error.title`,
          defaultMessage: `Unable to load worktrees`,
          description: `Error state title for worktrees settings`,
        })),
        (t[29] = c))
      : (c = t[29]);
    let l;
    t[30] === P
      ? (l = t[31])
      : ((l = (0, $.jsx)(Z.Header, { title: c, actions: P })), (t[30] = P), (t[31] = l));
    let u;
    t[32] !== i || t[33] !== F.message
      ? ((u =
          F.message ||
          i.formatMessage({
            id: `settings.worktrees.error.body`,
            defaultMessage: `Something went wrong while loading worktrees.`,
            description: `Error body for worktrees settings`,
          })),
        (t[32] = i),
        (t[33] = F.message),
        (t[34] = u))
      : (u = t[34]);
    let d;
    t[35] === u
      ? (d = t[36])
      : ((d = (0, $.jsx)(Z.Content, {
          children: (0, $.jsx)(r, { children: (0, $.jsx)(yt, { layout: `settings-row`, children: u }) }),
        })),
        (t[35] = u),
        (t[36] = d));
    let f;
    t[37] !== l || t[38] !== d
      ? ((f = (0, $.jsxs)(Z, { children: [l, d] })), (t[37] = l), (t[38] = d), (t[39] = f))
      : (f = t[39]);
    let p;
    return (
      t[40] !== f || t[41] !== o || t[42] !== s
        ? ((p = (0, $.jsxs)(Qe, { title: e, stickyControls: o, children: [s, f] })),
          (t[40] = f),
          (t[41] = o),
          (t[42] = s),
          (t[43] = p))
        : (p = t[43]),
      p
    );
  }
  let I = Qe,
    L;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(Xe, { slug: `worktrees` })), (t[44] = L))
    : (L = t[44]);
  let R;
  t[45] === n
    ? (R = t[46])
    : ((R = n ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[45] = n), (t[46] = R));
  let B;
  t[47] === a ? (B = t[48]) : ((B = (0, $.jsx)($t, { hostId: a }, a)), (t[47] = a), (t[48] = B));
  let V =
      D.length === 0
        ? (0, $.jsxs)(Z, {
            children: [
              (0, $.jsx)(Z.Header, {
                title: (0, $.jsx)(X, {
                  id: `settings.worktrees.empty.title`,
                  defaultMessage: `No worktrees yet`,
                  description: `Empty state title for worktrees settings`,
                }),
                actions: P,
              }),
              (0, $.jsx)(Z.Content, {
                children: (0, $.jsx)(r, {
                  children: (0, $.jsx)(yt, {
                    layout: `settings-row`,
                    children: (0, $.jsx)(X, {
                      id: `settings.worktrees.empty.body`,
                      defaultMessage: `Worktrees created by ChatGPT will appear here`,
                      description: `Empty state body for worktrees settings`,
                    }),
                  }),
                }),
              }),
            ],
          })
        : D.map((e, t) =>
            (0, $.jsx)(
              Cn,
              {
                action: t === 0 ? P : null,
                conversationsByWorktree: E,
                conversations: T,
                hostId: a,
                isConversationsLoading: C,
                repoRoot: e.repoRoot,
                worktrees: e.worktrees,
              },
              e.key,
            ),
          ),
    H;
  return (
    t[49] !== I || t[50] !== V || t[51] !== L || t[52] !== R || t[53] !== B
      ? ((H = (0, $.jsxs)(I, { title: L, stickyControls: R, children: [B, V] })),
        (t[49] = I),
        (t[50] = V),
        (t[51] = L),
        (t[52] = R),
        (t[53] = B),
        (t[54] = H))
      : (H = t[54]),
    H
  );
}
function Sn(e) {
  return e.dir;
}
function Cn(e) {
  let t = (0, jn.c)(34),
    {
      action: n,
      repoRoot: i,
      worktrees: a,
      conversationsByWorktree: o,
      conversations: s,
      hostId: c,
      isConversationsLoading: l,
    } = e,
    u = Ot(c),
    d = W(ht),
    f;
  t[0] !== u || t[1] !== i
    ? ((f = i == null ? null : { cwd: i, hostConfig: u }), (t[0] = u), (t[1] = i), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] === d ? (p = t[4]) : ((p = { retainRepoWatch: d }), (t[3] = d), (t[4] = p));
  let { data: m, isLoading: h } = Be(f, `worktree_restore_banner`, p),
    g = m?.root ?? i ?? a[0]?.dir ?? null,
    _;
  t[5] === g
    ? (_ = t[6])
    : ((_ = g
        ? (0, $.jsx)(`span`, { className: `truncate text-sm`, children: g })
        : (0, $.jsx)(X, {
            id: `settings.worktrees.repository.unknown`,
            defaultMessage: `Unknown repository`,
            description: `Fallback label when worktree repository cannot be resolved`,
          })),
      (t[5] = g),
      (t[6] = _));
  let v = _,
    y = h && g == null,
    b;
  t[7] === v
    ? (b = t[8])
    : ((b = (0, $.jsx)(`div`, { className: `min-w-0 truncate text-sm text-default`, children: v })),
      (t[7] = v),
      (t[8] = b));
  let x;
  t[9] === y
    ? (x = t[10])
    : ((x = y
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(X, {
              id: `settings.worktrees.repository.loading`,
              defaultMessage: `Loading repository metadata…`,
              description: `Subtitle while repository metadata is loading`,
            }),
          })
        : null),
      (t[9] = y),
      (t[10] = x));
  let S;
  t[11] !== b || t[12] !== x
    ? ((S = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [b, x] })),
      (t[11] = b),
      (t[12] = x),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== n || t[15] !== S
    ? ((C = (0, $.jsx)(Z.Header, { title: S, actions: n })), (t[14] = n), (t[15] = S), (t[16] = C))
    : (C = t[16]);
  let w;
  if (t[17] !== s || t[18] !== o || t[19] !== c || t[20] !== l || t[21] !== a) {
    let e;
    t[23] !== s || t[24] !== o
      ? ((e = (e) => {
          let t = o.get(G(e.dir)) ?? [];
          return {
            worktree: e,
            nativeConversations: s.filter((t) => mn(t.cwd, e.dir)),
            visibleConversations: t.filter(Tn),
          };
        }),
        (t[23] = s),
        (t[24] = o),
        (t[25] = e))
      : (e = t[25]);
    let n;
    (t[26] !== c || t[27] !== l
      ? ((n = (e) => {
          let { worktree: t, nativeConversations: n, visibleConversations: r } = e;
          return (0, $.jsx)(
            En,
            {
              nativeConversations: n,
              hostId: c,
              visibleConversations: r,
              isConversationsLoading: l,
              worktree: t,
            },
            t.dir,
          );
        }),
        (t[26] = c),
        (t[27] = l),
        (t[28] = n))
      : (n = t[28]),
      (w = a.map(e).sort(wn).map(n)),
      (t[17] = s),
      (t[18] = o),
      (t[19] = c),
      (t[20] = l),
      (t[21] = a),
      (t[22] = w));
  } else w = t[22];
  let T;
  t[29] === w
    ? (T = t[30])
    : ((T = (0, $.jsx)(Z.Content, { children: (0, $.jsx)(r, { children: w }) })), (t[29] = w), (t[30] = T));
  let E;
  return (
    t[31] !== C || t[32] !== T
      ? ((E = (0, $.jsxs)(Z, { children: [C, T] })), (t[31] = C), (t[32] = T), (t[33] = E))
      : (E = t[33]),
    E
  );
}
function wn(e, t) {
  return t.visibleConversations.length - e.visibleConversations.length;
}
function Tn(e) {
  return e.isPinned || !e.isSubagent;
}
function En(e) {
  let t = (0, jn.c)(51),
    {
      worktree: r,
      nativeConversations: a,
      visibleConversations: o,
      hostId: s,
      isConversationsLoading: c,
    } = e,
    u = i(A),
    d = pt(),
    f;
  t[0] !== s || t[1] !== r.dir
    ? ((f = { hostId: s, worktree: r.dir }), (t[0] = s), (t[1] = r.dir), (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = fe(vn, p),
    h;
  t[3] === a ? (h = t[4]) : ((h = a.find(On)), (t[3] = a), (t[4] = h));
  let g = h,
    _;
  t[5] === a ? (_ = t[6]) : ((_ = a.some(Dn)), (t[5] = a), (t[6] = _));
  let v = _,
    y = Ot(s),
    b = W(Ve)?.[g?.id ?? ``],
    x;
  t[7] !== y.kind || t[8] !== b
    ? ((x = y.kind === `local` && !(b?.projectKind === `local` && gt(b.projectId))),
      (t[7] = y.kind),
      (t[8] = b),
      (t[9] = x))
    : (x = t[9]);
  let S = x,
    C;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(`div`, {
        className: `text-sm font-medium text-default`,
        children: (0, $.jsx)(X, {
          id: `settings.worktrees.row.title`,
          defaultMessage: `Worktree`,
          description: `Label for a worktree row`,
        }),
      })),
      (t[10] = C))
    : (C = t[10]);
  let w;
  t[11] === r.dir
    ? (w = t[12])
    : ((w = (0, $.jsx)(`div`, { className: `mt-1 truncate text-xs text-secondary`, children: r.dir })),
      (t[11] = r.dir),
      (t[12] = w));
  let T;
  t[13] === v
    ? (T = t[14])
    : ((T = v
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(X, {
              id: `settings.worktrees.row.pinned`,
              defaultMessage: `Unpin the chats in this worktree before deleting it`,
              description: `Explains why the Delete button is disabled for a worktree with pinned chats`,
            }),
          })
        : null),
      (t[13] = v),
      (t[14] = T));
  let E;
  t[15] === S
    ? (E = t[16])
    : ((E = S
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(X, {
              id: `settings.worktrees.row.newChatDescription`,
              defaultMessage: `Starts a fresh chat using the same files and branch`,
              description: `Explanation that starting a chat from Worktrees settings reuses this worktree without carrying over conversation history`,
            }),
          })
        : null),
      (t[15] = S),
      (t[16] = E));
  let D;
  t[17] !== w || t[18] !== T || t[19] !== E
    ? ((D = (0, $.jsxs)(`div`, { className: `min-w-0`, children: [C, w, T, E] })),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E),
      (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== S || t[22] !== m || t[23] !== u || t[24] !== g?.id || t[25] !== r.dir
    ? ((O = S
        ? (0, $.jsxs)(z, {
            className: `shrink-0`,
            color: `secondary`,
            disabled: m,
            onClick: () => {
              Ne(u, { sourceConversationId: g?.id, workspaceRoot: r.dir });
            },
            size: `toolbar`,
            children: [
              (0, $.jsx)(l, { "aria-hidden": !1, asset: ve }),
              (0, $.jsx)(X, {
                id: `settings.worktrees.row.newChat`,
                defaultMessage: `New chat in this worktree`,
                description: `Button to start a fresh chat in this existing worktree without carrying over conversation history`,
              }),
            ],
          })
        : null),
      (t[21] = S),
      (t[22] = m),
      (t[23] = u),
      (t[24] = g?.id),
      (t[25] = r.dir),
      (t[26] = O))
    : (O = t[26]);
  let k = c || v,
    j;
  t[27] !== p || t[28] !== a || t[29] !== u
    ? ((j = () => {
        gn(u, p, a);
      }),
      (t[27] = p),
      (t[28] = a),
      (t[29] = u),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(X, {
        id: `settings.worktrees.row.delete`,
        defaultMessage: `Delete`,
        description: `Delete button label for a worktree row`,
      })),
      (t[31] = M))
    : (M = t[31]);
  let N;
  t[32] !== m || t[33] !== k || t[34] !== j
    ? ((N = (0, $.jsx)(z, {
        className: `shrink-0`,
        color: `danger`,
        disabled: k,
        loading: m,
        onClick: j,
        size: `toolbar`,
        children: M,
      })),
      (t[32] = m),
      (t[33] = k),
      (t[34] = j),
      (t[35] = N))
    : (N = t[35]);
  let P;
  t[36] !== O || t[37] !== N
    ? ((P = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [O, N] })),
      (t[36] = O),
      (t[37] = N),
      (t[38] = P))
    : (P = t[38]);
  let F;
  t[39] !== P || t[40] !== D
    ? ((F = (0, $.jsxs)(`div`, { className: `flex items-start justify-between gap-3`, children: [D, P] })),
      (t[39] = P),
      (t[40] = D),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(`div`, {
        className: `text-xs text-secondary`,
        children: (0, $.jsx)(X, {
          id: `settings.worktrees.row.conversations`,
          defaultMessage: `Known conversations`,
          description: `Label for conversations linked by execution directory or already loaded attachments; other attachment owners may be missing`,
        }),
      })),
      (t[42] = I))
    : (I = t[42]);
  let L;
  t[43] !== s || t[44] !== c || t[45] !== d || t[46] !== o
    ? ((L = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          I,
          c
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-secondary`,
                children: [
                  (0, $.jsx)(n, { className: `icon-xxs` }),
                  (0, $.jsx)(X, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : o.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-secondary`,
                  children: (0, $.jsx)(X, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No known conversations linked to this worktree`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: o.map((e) => {
                    let t = wt(e.title ?? ``);
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-start text-sm text-default hover:bg-primary-ghost-hover hover:text-text/80 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                        onClick: () => {
                          d(e.id, s);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(X, {
                              id: `settings.worktrees.conversation.untitled`,
                              defaultMessage: `Untitled conversation`,
                              description: `Fallback title for a conversation`,
                            }),
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
        ],
      })),
      (t[43] = s),
      (t[44] = c),
      (t[45] = d),
      (t[46] = o),
      (t[47] = L))
    : (L = t[47]);
  let R;
  return (
    t[48] !== F || t[49] !== L
      ? ((R = (0, $.jsxs)(`div`, { className: `flex flex-col gap-2 p-3`, children: [F, L] })),
        (t[48] = F),
        (t[49] = L),
        (t[50] = R))
      : (R = t[50]),
    R
  );
}
function Dn(e) {
  return e.isPinned;
}
function On(e) {
  return e.isPinned || !e.isSubagent;
}
function kn(e) {
  let t = new Map();
  for (let n of e) {
    let e = Ct(n.gitDir),
      r = G(e ?? n.dir),
      i = t.get(r);
    if (i) {
      i.worktrees.push(n);
      continue;
    }
    t.set(r, { key: r, repoRoot: e, worktrees: [n] });
  }
  return Array.from(t.values());
}
function An(e, t) {
  return t.length === 0 ? e : e.filter((e) => !t.some((t) => mn(t, e.dir)));
}
var jn, $, Mn;
function Nn() {
  return (Nn = e(() => {
    ((jn = O()),
      w(),
      ce(),
      H(),
      R(),
      S(),
      ke(),
      V(),
      T(),
      ut(),
      u(),
      re(),
      zt(),
      nt(),
      mt(),
      Nt(),
      a(),
      vt(),
      _t(),
      nn(),
      fn(),
      ft(),
      xt(),
      st(),
      $e(),
      U(),
      Je(),
      et(),
      It(),
      D(),
      Mt(),
      Ze(),
      Bt(),
      hn(),
      yn(),
      ($ = y()),
      se(),
      (Mn = m(
        async () =>
          (
            await E(
              async () => {
                let { LocalEnvironmentsSettingsContent: e } = await import(
                  `./local-environments-settings-content-b7db8b7250a1.js`
                );
                return { LocalEnvironmentsSettingsContent: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).LocalEnvironmentsSettingsContent,
      )));
  }))();
}
Nn();
export { bn as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page-3794bb2944a2.js.map
