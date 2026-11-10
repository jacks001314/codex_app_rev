const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./local-environments-settings-content-83dc0587f3e4.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./local-environments-settings-content-d0ef14df48a6.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./local-environment-workflow-messages-113907dcb0c6.js",
      "./local-environment-editor-e16d20074fb4.js",
      "./useForm-9d52db816610.js",
      "./with-selector-58ecbd51d9aa.js",
      "./toolbar-breadcrumb-e1be94112dcb.js",
      "./settings-row-disclosure-81330dc4d2f4.js",
      "./settings-tabs-7db1edf2adfc.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  B4 as i,
  CPt as a,
  Cot as o,
  D2 as s,
  Fat as c,
  Gdt as l,
  Ggt as u,
  IDt as d,
  Iot as f,
  Ixt as p,
  JC as m,
  Jbt as h,
  Jgt as g,
  Kat as _,
  LR as v,
  Lot as y,
  MO as b,
  Mz as x,
  Nft as S,
  Nz as C,
  O2 as w,
  Pat as T,
  Pft as E,
  Pxt as D,
  SPt as O,
  VDt as k,
  Vxt as A,
  Wnt as j,
  Xot as M,
  Yot as N,
  _O as P,
  _xt as F,
  aSt as I,
  agt as L,
  bht as R,
  cO as z,
  cZ as B,
  fO as V,
  fPt as ee,
  ght as H,
  hht as U,
  hot as W,
  i3 as te,
  iw as ne,
  jDt as re,
  jO as ie,
  jR as ae,
  lO as G,
  ldt as oe,
  lot as K,
  mO as se,
  oO as ce,
  out as q,
  pPt as le,
  qC as J,
  qat as ue,
  qnt as de,
  r3 as fe,
  rrt as Y,
  rst as X,
  sO as pe,
  sZ as me,
  srt as he,
  sst as ge,
  t3 as _e,
  tw as ve,
  vO as ye,
  vht as be,
  vzt as xe,
  wot as Se,
  wxt as Ce,
  xMt as we,
  xht as Te,
  ygt as Ee,
  yzt as De,
  z4 as Oe,
  znt as ke,
  zxt as Ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brt as je,
  CWt as Me,
  D7n as Ne,
  DPn as Pe,
  E7n as Fe,
  ELn as Ie,
  Ek as Le,
  Emr as Re,
  GMr as ze,
  GOt as Be,
  Jdr as Ve,
  KOt as He,
  O9n as Ue,
  O_r as We,
  Qir as Ge,
  RLn as Ke,
  Rrt as qe,
  Sbt as Je,
  TPn as Ye,
  Tk as Z,
  Tmr as Xe,
  UOt as Ze,
  WOt as Qe,
  XMr as $e,
  XPr as et,
  Xdr as tt,
  YPr as nt,
  Zir as rt,
  _F as it,
  __r as at,
  aBt as ot,
  bWt as st,
  eDr as ct,
  eF as lt,
  eX as ut,
  fxt as dt,
  gIr as ft,
  hF as pt,
  hp as mt,
  jkt as ht,
  k9n as gt,
  mF as _t,
  mIr as vt,
  m_r as yt,
  mp as bt,
  mxt as xt,
  nDr as St,
  nFr as Ct,
  oBt as wt,
  oFr as Tt,
  pF as Et,
  pxt as Dt,
  qdr as Ot,
  rFr as kt,
  sFr as At,
  tF as jt,
  tNr as Mt,
  tX as Nt,
  ubr as Pt,
  vCt as Ft,
  xbt as It,
  yCt as Lt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Rt, t as zt } from "./use-codex-worktrees-5b60697f9783.js";
import { n as Bt, t as Vt } from "./settings-tabs-7db1edf2adfc.js";
function Ht(e) {
  let t = (0, Ut.c)(40),
    { hostId: n } = e,
    r = p(o),
    i = k(),
    { data: a } = tt(n),
    s = a?.codexHome,
    c = St(`4059753351`) ? a?.workspacesRoot : s,
    l = Ae(xt, n)?.worktreesRoot,
    [u, f] = (0, Gt.useState)(null),
    m;
  t[0] !== n || t[1] !== r
    ? ((m = (e) => Dt(r, n, E.worktreeRoot, e)), (t[0] = n), (t[1] = r), (t[2] = m))
    : (m = t[2]);
  let h, g;
  t[3] !== i || t[4] !== r
    ? ((h = () => {
        (f(null),
          r
            .get(W)
            .success(
              i.formatMessage({
                id: `settings.git.worktreeRoot.save.success`,
                defaultMessage: `Saved worktree root`,
                description: `Toast shown when git worktree root is saved`,
              }),
            ));
      }),
      (g = () => {
        r.get(W).danger(
          i.formatMessage({
            id: `settings.git.worktreeRoot.save.error`,
            defaultMessage: `Failed to save worktree root`,
            description: `Toast shown when git worktree root save fails`,
          }),
          { errorAnalytics: { toastId: `settings.git.worktreeRoot.save.error` } },
        );
      }),
      (t[3] = i),
      (t[4] = r),
      (t[5] = h),
      (t[6] = g))
    : ((h = t[5]), (g = t[6]));
  let _;
  t[7] !== m || t[8] !== h || t[9] !== g
    ? ((_ = { mutationFn: m, onSuccess: h, onError: g }), (t[7] = m), (t[8] = h), (t[9] = g), (t[10] = _))
    : (_ = t[10]);
  let v = y(_),
    b = l ?? ``,
    x = u ?? b,
    S = u != null && u !== b,
    C = v.isPending,
    w;
  t[11] === s
    ? (w = t[12])
    : ((w = s == null ? null : Wt.default.posix),
      s != null && (R(s) || Te(s)) && (w = Wt.default.win32),
      (t[11] = s),
      (t[12] = w));
  let T;
  t[13] !== w || t[14] !== C || t[15] !== S || t[16] !== v || t[17] !== x
    ? ((T = () => {
        if (!S || C) return;
        let e = x.trim();
        (e === `` || (be(e) && w?.isAbsolute(e))) && v.mutate(e);
      }),
      (t[13] = w),
      (t[14] = C),
      (t[15] = S),
      (t[16] = v),
      (t[17] = x),
      (t[18] = T))
    : (T = t[18]);
  let D = T,
    O = S && !C,
    A;
  t[19] === D
    ? (A = t[20])
    : ((A = (e) => {
        (e.preventDefault(), D());
      }),
      (t[19] = D),
      (t[20] = A));
  let j;
  (t[21] !== O || t[22] !== A
    ? ((j = { accelerator: `CmdOrCtrl+S`, enabled: O, onKeyDown: A }), (t[21] = O), (t[22] = A), (t[23] = j))
    : (j = t[23]),
    Me(j));
  let M, N;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Kt.jsx)(d, {
        id: `settings.git.worktreeRoot.label`,
        defaultMessage: `Worktree root`,
        description: `Label for git worktree root setting`,
      })),
      (M = (0, Kt.jsx)(d, {
        id: `settings.git.worktreeRoot.description`,
        defaultMessage: `Directory where ChatGPT creates managed worktrees. Leave blank to use the default location`,
        description: `Description for git worktree root setting`,
      })),
      (t[24] = M),
      (t[25] = N))
    : ((M = t[24]), (N = t[25]));
  let P;
  t[26] !== C || t[27] !== b
    ? ((P = (e) => {
        if (C) return;
        let t = e.target.value;
        f(t === b ? null : t);
      }),
      (t[26] = C),
      (t[27] = b),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] === c ? (F = t[30]) : ((F = c == null ? void 0 : q(c)), (t[29] = c), (t[30] = F));
  let I;
  t[31] === i
    ? (I = t[32])
    : ((I = i.formatMessage({
        id: `settings.git.worktreeRoot.ariaLabel`,
        defaultMessage: `Worktree root`,
        description: `Aria label for git worktree root input`,
      })),
      (t[31] = i),
      (t[32] = I));
  let L;
  return (
    t[33] !== D || t[34] !== C || t[35] !== P || t[36] !== F || t[37] !== I || t[38] !== x
      ? ((L = (0, Kt.jsx)(ve, {
          label: N,
          description: M,
          control: (0, Kt.jsx)(`div`, {
            className: `w-72 max-w-full`,
            children: (0, Kt.jsx)(Ye, {
              value: x,
              onChange: P,
              onBlur: D,
              placeholder: F,
              "aria-label": I,
              disabled: C,
            }),
          }),
        })),
        (t[33] = D),
        (t[34] = C),
        (t[35] = P),
        (t[36] = F),
        (t[37] = I),
        (t[38] = x),
        (t[39] = L))
      : (L = t[39]),
    L
  );
}
var Ut, Wt, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Ut = xe()),
      f(),
      D(),
      (Wt = t(oe(), 1)),
      X(),
      (Gt = De()),
      re(),
      Pe(),
      K(),
      Ve(),
      st(),
      Se(),
      ne(),
      ct(),
      dt(),
      (Kt = we()));
  }))();
}
function Jt(e) {
  let t = (0, Xt.c)(90),
    { hostId: n } = e,
    i = p(o),
    a = k(),
    [s, c] = (0, Zt.useState)(!1),
    [l, u] = (0, Zt.useState)(null),
    f = r(S.upstreamRefreshMode),
    m = Ae(xt, n),
    h = m?.autoCleanupEnabled ?? S.autoCleanupEnabled.default,
    g = m?.keepCount ?? S.keepCount.default,
    _;
  t[0] === i ? (_ = t[1]) : ((_ = (e) => de(i, S.upstreamRefreshMode, e)), (t[0] = i), (t[1] = _));
  let v, b;
  t[2] !== a || t[3] !== i
    ? ((v = (e, t) => {
        switch (t) {
          case `best-effort`:
            i.get(W).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.enabled`,
                defaultMessage: `Upstream refresh enabled`,
                description: `Toast shown when upstream refresh before worktree creation is enabled`,
              }),
            );
            return;
          case `never`:
            i.get(W).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.disabled`,
                defaultMessage: `Upstream refresh disabled`,
                description: `Toast shown when upstream refresh before worktree creation is disabled`,
              }),
            );
            return;
        }
      }),
      (b = () => {
        i.get(W).danger(
          a.formatMessage({
            id: `settings.worktrees.upstreamRefresh.save.error`,
            defaultMessage: `Failed to save upstream refresh setting`,
            description: `Toast shown when saving the upstream refresh setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.upstreamRefresh.save.error` } },
        );
      }),
      (t[2] = a),
      (t[3] = i),
      (t[4] = v),
      (t[5] = b))
    : ((v = t[4]), (b = t[5]));
  let x;
  t[6] !== _ || t[7] !== v || t[8] !== b
    ? ((x = { mutationFn: _, onSuccess: v, onError: b }), (t[6] = _), (t[7] = v), (t[8] = b), (t[9] = x))
    : (x = t[9]);
  let C = y(x),
    w;
  t[10] !== n || t[11] !== i
    ? ((w = (e) => Dt(i, n, S.autoCleanupEnabled, e)), (t[10] = n), (t[11] = i), (t[12] = w))
    : (w = t[12]);
  let T, E;
  t[13] !== a || t[14] !== i
    ? ((T = (e, t) => {
        if (t) {
          i.get(W).success(
            a.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        i.get(W).success(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (E = () => {
        i.get(W).danger(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.autoCleanup.save.error` } },
        );
      }),
      (t[13] = a),
      (t[14] = i),
      (t[15] = T),
      (t[16] = E))
    : ((T = t[15]), (E = t[16]));
  let D;
  t[17] !== w || t[18] !== T || t[19] !== E
    ? ((D = { mutationFn: w, onSuccess: T, onError: E }), (t[17] = w), (t[18] = T), (t[19] = E), (t[20] = D))
    : (D = t[20]);
  let O = y(D),
    A;
  t[21] !== n || t[22] !== i
    ? ((A = (e) => Dt(i, n, S.keepCount, e)), (t[21] = n), (t[22] = i), (t[23] = A))
    : (A = t[23]);
  let j, M;
  t[24] !== a || t[25] !== i
    ? ((j = () => {
        (u(null),
          i
            .get(W)
            .success(
              a.formatMessage({
                id: `settings.worktrees.keepCount.save.success`,
                defaultMessage: `Saved auto-delete limit`,
                description: `Toast shown when the worktree auto-delete limit is saved`,
              }),
            ));
      }),
      (M = () => {
        i.get(W).danger(
          a.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
          { errorAnalytics: { toastId: `settings.worktrees.keepCount.save.error` } },
        );
      }),
      (t[24] = a),
      (t[25] = i),
      (t[26] = j),
      (t[27] = M))
    : ((j = t[26]), (M = t[27]));
  let N;
  t[28] !== j || t[29] !== M || t[30] !== A
    ? ((N = { mutationFn: A, onSuccess: j, onError: M }), (t[28] = j), (t[29] = M), (t[30] = A), (t[31] = N))
    : (N = t[31]);
  let P = y(N),
    F = String(g),
    I = l ?? F,
    L = O.isPending,
    R = P.isPending || L || !h,
    z;
  t[32] !== L || t[33] !== O
    ? ((z = (e) => {
        if (!L) {
          if (e) {
            O.mutate(!0);
            return;
          }
          c(!0);
        }
      }),
      (t[32] = L),
      (t[33] = O),
      (t[34] = z))
    : (z = t[34]);
  let B = z,
    V;
  t[35] === O
    ? (V = t[36])
    : ((V = () => {
        (u(null), c(!1), O.mutate(!1));
      }),
      (t[35] = O),
      (t[36] = V));
  let ee = V,
    H;
  t[37] !== R || t[38] !== g || t[39] !== l || t[40] !== P
    ? ((H = () => {
        if (R || l == null) return;
        let e = l.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          u(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === g) {
          u(null);
          return;
        }
        P.mutate(n);
      }),
      (t[37] = R),
      (t[38] = g),
      (t[39] = l),
      (t[40] = P),
      (t[41] = H))
    : (H = t[41]);
  let U = H,
    te,
    ne;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(d, {
        id: `settings.worktrees.upstreamRefresh.label`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Label for the worktree upstream refresh toggle`,
      })),
      (ne = (0, Q.jsx)(d, {
        id: `settings.worktrees.upstreamRefresh.description`,
        defaultMessage: `Codex normally picks up branch updates during regular Git activity. This also fetches before each new worktree.`,
        description: `Description for the worktree upstream refresh toggle`,
      })),
      (t[42] = te),
      (t[43] = ne))
    : ((te = t[42]), (ne = t[43]));
  let re = f === `best-effort`,
    ae = C.isPending,
    G;
  t[44] === C
    ? (G = t[45])
    : ((G = (e) => {
        C.mutate(e ? `best-effort` : `never`);
      }),
      (t[44] = C),
      (t[45] = G));
  let oe;
  t[46] === a
    ? (oe = t[47])
    : ((oe = a.formatMessage({
        id: `settings.worktrees.upstreamRefresh.ariaLabel`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Aria label for the worktree upstream refresh toggle`,
      })),
      (t[46] = a),
      (t[47] = oe));
  let K;
  t[48] !== C.isPending || t[49] !== re || t[50] !== G || t[51] !== oe
    ? ((K = (0, Q.jsx)(ve, {
        label: te,
        description: ne,
        control: (0, Q.jsx)(ie, { checked: re, disabled: ae, onChange: G, ariaLabel: oe }),
      })),
      (t[48] = C.isPending),
      (t[49] = re),
      (t[50] = G),
      (t[51] = oe),
      (t[52] = K))
    : (K = t[52]);
  let se, ce;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(d, {
        id: `settings.worktrees.autoCleanup.label`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Label for the automatic worktree deletion toggle`,
      })),
      (ce = (0, Q.jsx)(d, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (t[53] = se),
      (t[54] = ce))
    : ((se = t[53]), (ce = t[54]));
  let q;
  t[55] === a
    ? (q = t[56])
    : ((q = a.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (t[55] = a),
      (t[56] = q));
  let le;
  t[57] !== h || t[58] !== B || t[59] !== L || t[60] !== q
    ? ((le = (0, Q.jsx)(ve, {
        label: se,
        description: ce,
        control: (0, Q.jsx)(ie, { checked: h, disabled: L, onChange: B, ariaLabel: q }),
      })),
      (t[57] = h),
      (t[58] = B),
      (t[59] = L),
      (t[60] = q),
      (t[61] = le))
    : (le = t[61]);
  let J;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Q.jsx)(d, {
        id: `settings.worktrees.keepCount.label`,
        defaultMessage: `Auto-delete limit`,
        description: `Label for the worktree auto-delete limit setting`,
      })),
      (t[62] = J))
    : (J = t[62]);
  let ue;
  t[63] === h
    ? (ue = t[64])
    : ((ue = h
        ? (0, Q.jsx)(d, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, Q.jsx)(d, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (t[63] = h),
      (t[64] = ue));
  let fe;
  t[65] !== R || t[66] !== F
    ? ((fe = (e) => {
        if (R) return;
        let t = e.target.value;
        u(t === F ? null : t);
      }),
      (t[65] = R),
      (t[66] = F),
      (t[67] = fe))
    : (fe = t[67]);
  let Y;
  t[68] === U
    ? (Y = t[69])
    : ((Y = (e) => {
        e.key === `Enter` && (e.preventDefault(), U());
      }),
      (t[68] = U),
      (t[69] = Y));
  let X;
  t[70] === a
    ? (X = t[71])
    : ((X = a.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (t[70] = a),
      (t[71] = X));
  let pe;
  t[72] !== U || t[73] !== R || t[74] !== I || t[75] !== fe || t[76] !== Y || t[77] !== X
    ? ((pe = (0, Q.jsx)(`div`, {
        className: `ms-6 w-24`,
        children: (0, Q.jsx)(Ye, {
          variant: `compact`,
          value: I,
          onChange: fe,
          onBlur: U,
          onKeyDown: Y,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": X,
          disabled: R,
        }),
      })),
      (t[72] = U),
      (t[73] = R),
      (t[74] = I),
      (t[75] = fe),
      (t[76] = Y),
      (t[77] = X),
      (t[78] = pe))
    : (pe = t[78]);
  let me;
  t[79] !== ue || t[80] !== pe
    ? ((me = (0, Q.jsx)(ve, { label: J, description: ue, control: pe })),
      (t[79] = ue),
      (t[80] = pe),
      (t[81] = me))
    : (me = t[81]);
  let he;
  t[82] !== ee || t[83] !== s
    ? ((he = (0, Q.jsx)(Yt, { open: s, onOpenChange: c, onConfirm: ee })),
      (t[82] = ee),
      (t[83] = s),
      (t[84] = he))
    : (he = t[84]);
  let ge;
  return (
    t[85] !== K || t[86] !== le || t[87] !== me || t[88] !== he
      ? ((ge = (0, Q.jsxs)(Q.Fragment, { children: [K, le, me, he] })),
        (t[85] = K),
        (t[86] = le),
        (t[87] = me),
        (t[88] = he),
        (t[89] = ge))
      : (ge = t[89]),
    ge
  );
}
function Yt(e) {
  let t = (0, Xt.c)(19),
    { open: r, onOpenChange: i, onConfirm: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(G, {
        children: (0, Q.jsx)(z, {
          title: (0, Q.jsx)(P, {
            children: (0, Q.jsx)(d, {
              id: `settings.worktrees.autoCleanup.confirm.title`,
              defaultMessage: `Disable automatic worktree deletion?`,
              description: `Title for the automatic worktree deletion disable confirmation dialog`,
            }),
          }),
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(G, {
        className: `text-codex-description`,
        children: (0, Q.jsx)(`p`, {
          children: (0, Q.jsx)(d, {
            id: `settings.worktrees.autoCleanup.confirm.body`,
            defaultMessage: `We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.`,
            description: `Body copy in the automatic worktree deletion disable confirmation dialog`,
          }),
        }),
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  t[2] === i
    ? (c = t[3])
    : ((c = () => {
        i(!1);
      }),
      (t[2] = i),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(d, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === c
    ? (u = t[6])
    : ((u = (0, Q.jsx)(n, { color: `ghost`, onClick: c, children: l })), (t[5] = c), (t[6] = u));
  let f;
  t[7] === a
    ? (f = t[8])
    : ((f = () => {
        a();
      }),
      (t[7] = a),
      (t[8] = f));
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(d, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === f
    ? (m = t[11])
    : ((m = (0, Q.jsx)(n, { color: `danger`, onClick: f, children: p })), (t[10] = f), (t[11] = m));
  let h;
  t[12] !== u || t[13] !== m
    ? ((h = (0, Q.jsxs)(ce, {
        children: [o, s, (0, Q.jsx)(G, { children: (0, Q.jsxs)(pe, { children: [u, m] }) })],
      })),
      (t[12] = u),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== i || t[16] !== r || t[17] !== h
      ? ((g = (0, Q.jsx)(se, { open: r, showDialogClose: !1, onOpenChange: i, children: h })),
        (t[15] = i),
        (t[16] = r),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var Xt, Zt, Q;
function Qt() {
  return (Qt = e(() => {
    ((Xt = xe()),
      f(),
      D(),
      X(),
      (Zt = De()),
      re(),
      _e(),
      ye(),
      V(),
      Pe(),
      K(),
      b(),
      Se(),
      j(),
      ne(),
      dt(),
      (Q = we()));
  }))();
}
function $t(e) {
  let t = (0, en.c)(2),
    { hostId: n } = e;
  if (Ae(xt, n) == null) return null;
  let r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, tn.jsx)(tn.Fragment, {
          children: (0, tn.jsxs)(J, {
            children: [(0, tn.jsx)(Ht, { hostId: n }), (0, tn.jsx)(Jt, { hostId: n })],
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var en, tn;
function nn() {
  return (nn = e(() => {
    ((en = xe()), D(), qt(), Qt(), m(), dt(), (tn = we()));
  }))();
}
function rn(e, t) {
  return [`settings-worktree-conversations`, e, t];
}
function an(e, t, n) {
  let r = (0, un.c)(24),
    i;
  r[0] === n ? (i = r[1]) : ((i = n === void 0 ? [] : n), (r[0] = n), (r[1] = i));
  let a = i,
    s = p(o),
    c = Ae(Ct, e),
    l = Ae(vt, e),
    u = A(ze),
    d = A($e),
    f;
  r[2] !== e || r[3] !== c
    ? ((f = !Ee(e) && L(c, `threadAttachmentOwners`)), (r[2] = e), (r[3] = c), (r[4] = f))
    : (f = r[4]);
  let m = f,
    h;
  r[5] !== u || r[6] !== e || r[7] !== t || r[8] !== m || r[9] !== d || r[10] !== c || r[11] !== a
    ? ((h = m ? [...rn(e, t), u, d, c, a] : rn(e, t)),
      (r[5] = u),
      (r[6] = e),
      (r[7] = t),
      (r[8] = m),
      (r[9] = d),
      (r[10] = c),
      (r[11] = a),
      (r[12] = h))
    : (h = r[12]);
  let g = !m || l === `connected`,
    _;
  r[13] !== e || r[14] !== t || r[15] !== m || r[16] !== s || r[17] !== a
    ? ((_ = async (n) => {
        let { signal: r } = n,
          i = await on(s, e, t);
        return m ? ln(s, e, a, i, r) : i;
      }),
      (r[13] = e),
      (r[14] = t),
      (r[15] = m),
      (r[16] = s),
      (r[17] = a),
      (r[18] = _))
    : (_ = r[18]);
  let v = m ? 0 : T.ONE_MINUTE,
    y;
  return (
    r[19] !== h || r[20] !== g || r[21] !== _ || r[22] !== v
      ? ((y = {
          queryKey: h,
          enabled: g,
          queryFn: _,
          refetchInterval: T.ONE_MINUTE,
          retry: !1,
          staleTime: v,
        }),
        (r[19] = h),
        (r[20] = g),
        (r[21] = _),
        (r[22] = v),
        (r[23] = y))
      : (y = r[23]),
    M(y)
  );
}
async function on(e, t, n) {
  let r = n ? [u, g] : [u],
    [i, a] = await Promise.all([Promise.all(r.map((n) => cn(e, t, n))), sn(e, t)]),
    o = new Set(a.map((e) => e.id)),
    s = new Map(
      i
        .flat()
        .filter(Je)
        .map((e) => [e.id, e]),
    );
  for (let e of a) s.set(e.id, e);
  return Array.from(s.values())
    .sort((e, t) => (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt))
    .map((e) => ({
      id: h(e.id),
      cwd: e.cwd,
      isSubagent: Xe(e),
      isPinned: o.has(e.id),
      title: e.name?.trim() || e.preview || null,
    }));
}
async function sn(e, t) {
  if (_?.pinnedThreads == null) throw Error(`Pinned thread service is unavailable`);
  let { threadIds: n } = await ke(_.pinnedThreads.list({ hostId: t, useAppServerPins: e.get(Ue) }));
  return Promise.all(
    n.map(async (n) => {
      let { thread: r } = await nt(e, t).sendRequest(`thread/read`, { threadId: n, includeTurns: !1 });
      return r;
    }),
  );
}
async function cn(e, t, n) {
  let r = [],
    i = new Set(),
    a = null;
  do {
    let o = await nt(e, t).sendRequest(
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
  let a = nt(e, t),
    o = new Map();
  for (let e of (0, dn.default)([...new Set(n)], 10))
    (i.throwIfAborted(),
      await Promise.all(
        e.map(async (e) => {
          let t = await ge({
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
    c = [...o.keys()].filter((e) => !s.has(h(e)));
  for (let e of (0, dn.default)(c, 10))
    (i.throwIfAborted(),
      await Promise.all(
        e.map(async (e) => {
          let { thread: t } = await a.sendRequest(`thread/read`, { threadId: e, includeTurns: !1 });
          s.set(h(e), {
            id: h(e),
            cwd: t.cwd,
            attachedWorktreeRoots: o.get(e) ?? [],
            isSubagent: Xe(t),
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
    ((un = xe()),
      N(),
      Pt(),
      (dn = t(Ot(), 1)),
      D(),
      X(),
      et(),
      ft(),
      kt(),
      Re(),
      It(),
      Mt(),
      gt(),
      ue(),
      Se(),
      c());
  }))();
}
function pn(e, t) {
  let n = new Map(e.map((e) => [H(e.dir), []]));
  for (let r of t)
    for (let t of e)
      if (mn(r.cwd, t.dir) || r.attachedWorktreeRoots?.includes(t.dir)) {
        let e = n.get(H(t.dir));
        e != null && !e.some(({ id: e }) => e === r.id) && e.push(r);
      }
  return n;
}
function mn(e, t) {
  let n = U(e).replace(/\/+$/, ``),
    r = U(t).replace(/\/+$/, ``);
  return n === r || n.startsWith(`${r}/`);
}
function hn() {
  return (hn = e(() => {
    v();
  }))();
}
async function gn(e, t, n) {
  if (!e.get(vn, t)) {
    e.set(vn, t, !0);
    try {
      if ((await sn(e, t.hostId)).some((e) => ae([t.worktree], e.cwd) != null)) {
        e.get(W).warning(
          (0, _n.jsx)(d, {
            id: `settings.worktrees.delete.pinned`,
            defaultMessage: `Unpin the chats in this worktree before deleting it`,
            description: `Explains why deleting a worktree with a pinned chat was blocked`,
          }),
        );
        return;
      }
      (await Promise.all(
        n.map((n) =>
          nt(e, t.hostId).archiveConversation(n.id, {
            useAppServerPins: e.get(Ue),
            cleanupWorktree: !1,
            source: `worktree_delete`,
          }),
        ),
      ),
        await Y(`worktree-delete`, { params: { ...t, reason: `settings-delete-targeted` } }),
        await e.queryClient.invalidateQueries({ queryKey: Ze(t.hostId) }),
        e
          .get(W)
          .success(
            (0, _n.jsx)(d, {
              id: `settings.worktrees.delete.success`,
              defaultMessage: `Worktree deleted`,
              description: `Confirmation shown after deleting a worktree from settings, even when the user has navigated away`,
            }),
          ));
    } catch (t) {
      (a.error(`Failed to delete worktree`, { safe: {}, sensitive: { error: l(t) } }),
        e
          .get(W)
          .danger(
            (0, _n.jsx)(d, {
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
    (D(), X(), re(), et(), K(), gt(), Se(), O(), v(), he(), Qe(), fn(), (_n = we()), (vn = I(o, (e) => !1)));
  }))();
}
function bn() {
  let e = (0, jn.c)(5),
    t = Ce(),
    { selectedHostId: n } = je(),
    r = St(`375130565`);
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
    { showEnvironmentTabs: r } = e,
    i = k(),
    { selectedHostId: a } = je(),
    o = At(a),
    c = ht(),
    { data: l, isLoading: u, isFetching: f, error: p, refetch: m } = Rt(o, `worktrees_settings_page`),
    h;
  t[0] === a ? (h = t[1]) : ((h = { hostId: a }), (t[0] = a), (t[1] = h));
  let { data: g, isLoading: _, error: v } = Ae(at, h),
    y = An(l?.worktrees ?? [], g?.roots ?? []),
    { data: b, error: S, isFetching: C, isLoading: w, refetch: T } = an(a, c, y.map(Sn)),
    E = b ?? [],
    D = pn(y, E),
    O = kn(y),
    A;
  t[2] === i
    ? (A = t[3])
    : ((A = i.formatMessage({
        id: `settings.worktrees.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label to refresh the worktree list`,
      })),
      (t[2] = i),
      (t[3] = A));
  let j = A,
    M = f || C,
    N;
  t[4] !== T || t[5] !== m
    ? ((N = () => {
        Promise.all([m(), T()]);
      }),
      (t[4] = T),
      (t[5] = m),
      (t[6] = N))
    : (N = t[6]);
  let P;
  t[7] !== C || t[8] !== f
    ? ((P = f || C ? null : (0, $.jsx)(x, { "aria-hidden": !1, asset: s })),
      (t[7] = C),
      (t[8] = f),
      (t[9] = P))
    : (P = t[9]);
  let F;
  t[10] !== j || t[11] !== M || t[12] !== N || t[13] !== P
    ? ((F = (0, $.jsx)(n, {
        "aria-label": j,
        className: `shrink-0`,
        color: `ghost`,
        loading: M,
        onClick: N,
        size: `toolbar`,
        title: j,
        uniform: !0,
        children: P,
      })),
      (t[10] = j),
      (t[11] = M),
      (t[12] = N),
      (t[13] = P),
      (t[14] = F))
    : (F = t[14]);
  let I = F,
    L = p ?? v ?? S;
  if (u || _) {
    let e;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(lt, { slug: `worktrees` })), (t[15] = e))
      : (e = t[15]);
    let n;
    t[16] === r
      ? (n = t[17])
      : ((n = r ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[16] = r), (t[17] = n));
    let i;
    t[18] === a ? (i = t[19]) : ((i = (0, $.jsx)($t, { hostId: a }, a)), (t[18] = a), (t[19] = i));
    let o;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(Et, {
          children: (0, $.jsx)(d, {
            id: `settings.worktrees.loading.body`,
            defaultMessage: `Fetching worktree details…`,
            description: `Loading state body for worktrees settings`,
          }),
        })),
        (t[20] = o))
      : (o = t[20]);
    let s;
    return (
      t[21] !== n || t[22] !== i
        ? ((s = (0, $.jsxs)(pt, { title: e, stickyControls: n, children: [i, o] })),
          (t[21] = n),
          (t[22] = i),
          (t[23] = s))
        : (s = t[23]),
      s
    );
  }
  if (L) {
    let e;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(lt, { slug: `worktrees` })), (t[24] = e))
      : (e = t[24]);
    let n;
    t[25] === r
      ? (n = t[26])
      : ((n = r ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[25] = r), (t[26] = n));
    let o;
    t[27] === a ? (o = t[28]) : ((o = (0, $.jsx)($t, { hostId: a }, a)), (t[27] = a), (t[28] = o));
    let s;
    t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(d, {
          id: `settings.worktrees.error.title`,
          defaultMessage: `Unable to load worktrees`,
          description: `Error state title for worktrees settings`,
        })),
        (t[29] = s))
      : (s = t[29]);
    let c;
    t[30] === I
      ? (c = t[31])
      : ((c = (0, $.jsx)(Z.Header, { title: s, actions: I })), (t[30] = I), (t[31] = c));
    let l;
    t[32] !== i || t[33] !== L.message
      ? ((l =
          L.message ||
          i.formatMessage({
            id: `settings.worktrees.error.body`,
            defaultMessage: `Something went wrong while loading worktrees.`,
            description: `Error body for worktrees settings`,
          })),
        (t[32] = i),
        (t[33] = L.message),
        (t[34] = l))
      : (l = t[34]);
    let u;
    t[35] === l
      ? (u = t[36])
      : ((u = (0, $.jsx)(Z.Content, {
          children: (0, $.jsx)(J, { children: (0, $.jsx)(bt, { layout: `settings-row`, children: l }) }),
        })),
        (t[35] = l),
        (t[36] = u));
    let f;
    t[37] !== c || t[38] !== u
      ? ((f = (0, $.jsxs)(Z, { children: [c, u] })), (t[37] = c), (t[38] = u), (t[39] = f))
      : (f = t[39]);
    let p;
    return (
      t[40] !== f || t[41] !== n || t[42] !== o
        ? ((p = (0, $.jsxs)(pt, { title: e, stickyControls: n, children: [o, f] })),
          (t[40] = f),
          (t[41] = n),
          (t[42] = o),
          (t[43] = p))
        : (p = t[43]),
      p
    );
  }
  let R = pt,
    z;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(lt, { slug: `worktrees` })), (t[44] = z))
    : (z = t[44]);
  let B;
  t[45] === r
    ? (B = t[46])
    : ((B = r ? (0, $.jsx)(Vt, { selectedTab: `general` }) : null), (t[45] = r), (t[46] = B));
  let V;
  t[47] === a ? (V = t[48]) : ((V = (0, $.jsx)($t, { hostId: a }, a)), (t[47] = a), (t[48] = V));
  let ee =
      O.length === 0
        ? (0, $.jsxs)(Z, {
            children: [
              (0, $.jsx)(Z.Header, {
                title: (0, $.jsx)(d, {
                  id: `settings.worktrees.empty.title`,
                  defaultMessage: `No worktrees yet`,
                  description: `Empty state title for worktrees settings`,
                }),
                actions: I,
              }),
              (0, $.jsx)(Z.Content, {
                children: (0, $.jsx)(J, {
                  children: (0, $.jsx)(bt, {
                    layout: `settings-row`,
                    children: (0, $.jsx)(d, {
                      id: `settings.worktrees.empty.body`,
                      defaultMessage: `Worktrees created by ChatGPT will appear here`,
                      description: `Empty state body for worktrees settings`,
                    }),
                  }),
                }),
              }),
            ],
          })
        : O.map((e, t) =>
            (0, $.jsx)(
              Cn,
              {
                action: t === 0 ? I : null,
                conversationsByWorktree: D,
                conversations: E,
                hostId: a,
                isConversationsLoading: w,
                repoRoot: e.repoRoot,
                worktrees: e.worktrees,
              },
              e.key,
            ),
          ),
    H;
  return (
    t[49] !== R || t[50] !== ee || t[51] !== z || t[52] !== B || t[53] !== V
      ? ((H = (0, $.jsxs)(R, { title: z, stickyControls: B, children: [V, ee] })),
        (t[49] = R),
        (t[50] = ee),
        (t[51] = z),
        (t[52] = B),
        (t[53] = V),
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
      repoRoot: r,
      worktrees: i,
      conversationsByWorktree: a,
      conversations: o,
      hostId: s,
      isConversationsLoading: c,
    } = e,
    l = At(s),
    u = A(wt),
    f;
  t[0] !== l || t[1] !== r
    ? ((f = r == null ? null : { cwd: r, hostConfig: l }), (t[0] = l), (t[1] = r), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] === u ? (p = t[4]) : ((p = { retainRepoWatch: u }), (t[3] = u), (t[4] = p));
  let { data: m, isLoading: h } = Ge(f, `worktree_restore_banner`, p),
    g = m?.root ?? r ?? i[0]?.dir ?? null,
    _;
  t[5] === g
    ? (_ = t[6])
    : ((_ = g
        ? (0, $.jsx)(`span`, { className: `truncate text-sm`, children: g })
        : (0, $.jsx)(d, {
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
            children: (0, $.jsx)(d, {
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
  if (t[17] !== o || t[18] !== a || t[19] !== s || t[20] !== c || t[21] !== i) {
    let e;
    t[23] !== o || t[24] !== a
      ? ((e = (e) => {
          let t = a.get(H(e.dir)) ?? [];
          return {
            worktree: e,
            nativeConversations: o.filter((t) => mn(t.cwd, e.dir)),
            visibleConversations: t.filter(Tn),
          };
        }),
        (t[23] = o),
        (t[24] = a),
        (t[25] = e))
      : (e = t[25]);
    let n;
    (t[26] !== s || t[27] !== c
      ? ((n = (e) => {
          let { worktree: t, nativeConversations: n, visibleConversations: r } = e;
          return (0, $.jsx)(
            En,
            {
              nativeConversations: n,
              hostId: s,
              visibleConversations: r,
              isConversationsLoading: c,
              worktree: t,
            },
            t.dir,
          );
        }),
        (t[26] = s),
        (t[27] = c),
        (t[28] = n))
      : (n = t[28]),
      (w = i.map(e).sort(wn).map(n)),
      (t[17] = o),
      (t[18] = a),
      (t[19] = s),
      (t[20] = c),
      (t[21] = i),
      (t[22] = w));
  } else w = t[22];
  let T;
  t[29] === w
    ? (T = t[30])
    : ((T = (0, $.jsx)(Z.Content, { children: (0, $.jsx)(J, { children: w }) })), (t[29] = w), (t[30] = T));
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
      nativeConversations: i,
      visibleConversations: a,
      hostId: s,
      isConversationsLoading: c,
    } = e,
    l = p(o),
    u = Lt(),
    f;
  t[0] !== s || t[1] !== r.dir
    ? ((f = { hostId: s, worktree: r.dir }), (t[0] = s), (t[1] = r.dir), (t[2] = f))
    : (f = t[2]);
  let m = f,
    h = Ae(vn, m),
    g;
  t[3] === i ? (g = t[4]) : ((g = i.find(On)), (t[3] = i), (t[4] = g));
  let _ = g,
    v;
  t[5] === i ? (v = t[6]) : ((v = i.some(Dn)), (t[5] = i), (t[6] = v));
  let y = v,
    b = At(s),
    S = A(We)?.[_?.id ?? ``],
    C;
  t[7] !== b.kind || t[8] !== S
    ? ((C = b.kind === `local` && !(S?.projectKind === `local` && Ke(S.projectId))),
      (t[7] = b.kind),
      (t[8] = S),
      (t[9] = C))
    : (C = t[9]);
  let w = C,
    T;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`div`, {
        className: `text-sm font-medium text-default`,
        children: (0, $.jsx)(d, {
          id: `settings.worktrees.row.title`,
          defaultMessage: `Worktree`,
          description: `Label for a worktree row`,
        }),
      })),
      (t[10] = T))
    : (T = t[10]);
  let E;
  t[11] === r.dir
    ? (E = t[12])
    : ((E = (0, $.jsx)(`div`, { className: `mt-1 truncate text-xs text-secondary`, children: r.dir })),
      (t[11] = r.dir),
      (t[12] = E));
  let D;
  t[13] === y
    ? (D = t[14])
    : ((D = y
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(d, {
              id: `settings.worktrees.row.pinned`,
              defaultMessage: `Unpin the chats in this worktree before deleting it`,
              description: `Explains why the Delete button is disabled for a worktree with pinned chats`,
            }),
          })
        : null),
      (t[13] = y),
      (t[14] = D));
  let O;
  t[15] === w
    ? (O = t[16])
    : ((O = w
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(d, {
              id: `settings.worktrees.row.newChatDescription`,
              defaultMessage: `Starts a fresh chat using the same files and branch`,
              description: `Explanation that starting a chat from Worktrees settings reuses this worktree without carrying over conversation history`,
            }),
          })
        : null),
      (t[15] = w),
      (t[16] = O));
  let k;
  t[17] !== E || t[18] !== D || t[19] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `min-w-0`, children: [T, E, D, O] })),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k))
    : (k = t[20]);
  let j;
  t[21] !== w || t[22] !== h || t[23] !== l || t[24] !== _?.id || t[25] !== r.dir
    ? ((j = w
        ? (0, $.jsxs)(n, {
            className: `shrink-0`,
            color: `secondary`,
            disabled: h,
            onClick: () => {
              Nt(l, { sourceConversationId: _?.id, workspaceRoot: r.dir });
            },
            size: `toolbar`,
            children: [
              (0, $.jsx)(x, { "aria-hidden": !1, asset: B }),
              (0, $.jsx)(d, {
                id: `settings.worktrees.row.newChat`,
                defaultMessage: `New chat in this worktree`,
                description: `Button to start a fresh chat in this existing worktree without carrying over conversation history`,
              }),
            ],
          })
        : null),
      (t[21] = w),
      (t[22] = h),
      (t[23] = l),
      (t[24] = _?.id),
      (t[25] = r.dir),
      (t[26] = j))
    : (j = t[26]);
  let M = c || y,
    N;
  t[27] !== m || t[28] !== i || t[29] !== l
    ? ((N = () => {
        gn(l, m, i);
      }),
      (t[27] = m),
      (t[28] = i),
      (t[29] = l),
      (t[30] = N))
    : (N = t[30]);
  let P;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(d, {
        id: `settings.worktrees.row.delete`,
        defaultMessage: `Delete`,
        description: `Delete button label for a worktree row`,
      })),
      (t[31] = P))
    : (P = t[31]);
  let F;
  t[32] !== h || t[33] !== M || t[34] !== N
    ? ((F = (0, $.jsx)(n, {
        className: `shrink-0`,
        color: `danger`,
        disabled: M,
        loading: h,
        onClick: N,
        size: `toolbar`,
        children: P,
      })),
      (t[32] = h),
      (t[33] = M),
      (t[34] = N),
      (t[35] = F))
    : (F = t[35]);
  let I;
  t[36] !== j || t[37] !== F
    ? ((I = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [j, F] })),
      (t[36] = j),
      (t[37] = F),
      (t[38] = I))
    : (I = t[38]);
  let L;
  t[39] !== I || t[40] !== k
    ? ((L = (0, $.jsxs)(`div`, { className: `flex items-start justify-between gap-3`, children: [k, I] })),
      (t[39] = I),
      (t[40] = k),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(`div`, {
        className: `text-xs text-secondary`,
        children: (0, $.jsx)(d, {
          id: `settings.worktrees.row.conversations`,
          defaultMessage: `Known conversations`,
          description: `Label for conversations linked by execution directory or already loaded attachments; other attachment owners may be missing`,
        }),
      })),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] !== s || t[44] !== c || t[45] !== u || t[46] !== a
    ? ((z = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          R,
          c
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-secondary`,
                children: [
                  (0, $.jsx)(fe, { className: `icon-xxs` }),
                  (0, $.jsx)(d, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : a.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-secondary`,
                  children: (0, $.jsx)(d, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No known conversations linked to this worktree`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: a.map((e) => {
                    let t = Ne(e.title ?? ``);
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-start text-sm text-default hover:bg-primary-ghost-hover hover:text-text/80 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                        onClick: () => {
                          u(e.id, s);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(d, {
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
      (t[45] = u),
      (t[46] = a),
      (t[47] = z))
    : (z = t[47]);
  let V;
  return (
    t[48] !== L || t[49] !== z
      ? ((V = (0, $.jsxs)(`div`, { className: `flex flex-col gap-2 p-3`, children: [L, z] })),
        (t[48] = L),
        (t[49] = z),
        (t[50] = V))
      : (V = t[50]),
    V
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
    let e = He(n.gitDir),
      r = H(e ?? n.dir),
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
    ((jn = xe()),
      w(),
      me(),
      D(),
      re(),
      F(),
      Ie(),
      _e(),
      C(),
      mt(),
      Oe(),
      te(),
      zt(),
      rt(),
      Fe(),
      ot(),
      Se(),
      yt(),
      it(),
      nn(),
      fn(),
      Le(),
      qe(),
      _t(),
      jt(),
      m(),
      Tt(),
      ut(),
      ct(),
      v(),
      Ft(),
      Be(),
      Bt(),
      hn(),
      yn(),
      ($ = we()),
      le(),
      (Mn = i(
        async () =>
          (
            await ee(
              async () => {
                let { LocalEnvironmentsSettingsContent: e } = await import(
                  `./local-environments-settings-content-83dc0587f3e4.js`
                );
                return { LocalEnvironmentsSettingsContent: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
              import.meta.url,
            )
          ).LocalEnvironmentsSettingsContent,
      )));
  }))();
}
Nn();
export { bn as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page-46e1c8735d13.js.map
