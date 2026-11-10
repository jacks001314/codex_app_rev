import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  AMt as i,
  Aen as a,
  Amn as o,
  Aw as s,
  B6t as c,
  B7t as l,
  BDt as u,
  BF as d,
  BS as f,
  CW as p,
  Cpn as m,
  Cst as h,
  Dl as g,
  Dmn as _,
  Een as v,
  F3t as y,
  F6 as b,
  GJ as x,
  GSt as S,
  H4t as C,
  HF as w,
  Hu as T,
  J8t as E,
  JS as D,
  Jrt as O,
  KJ as k,
  KS as A,
  KYt as j,
  Kyt as M,
  MHt as N,
  MMt as P,
  N3t as F,
  O3t as I,
  OW as L,
  Ol as R,
  Omn as ee,
  Opn as te,
  Ow as ne,
  P6 as z,
  QG as re,
  QKt as ie,
  Qu as ae,
  S3t as oe,
  Spn as se,
  TJt as ce,
  TW as B,
  USt as le,
  VS as V,
  Vu as H,
  XS as ue,
  Xrt as U,
  Xu as W,
  YHt as de,
  YKt as fe,
  Yqt as G,
  Yrt as K,
  Zrt as q,
  Zu as J,
  _Jt as Y,
  a3t as pe,
  bpt as X,
  cS as me,
  d3t as he,
  e8t as ge,
  eit as _e,
  gMt as ve,
  gft as ye,
  hMt as be,
  hft as xe,
  hmn as Se,
  i3t as Ce,
  iJt as we,
  iit as Te,
  jHt as Ee,
  jMt as De,
  jXt as Z,
  jen as Oe,
  kMt as ke,
  kW as Ae,
  kXt as je,
  ken as Me,
  kmn as Ne,
  lS as Pe,
  m7t as Fe,
  n8t as Ie,
  njt as Le,
  o3t as Re,
  pJt as ze,
  qKt as Be,
  qS as Ve,
  qYt as He,
  qqt as Ue,
  qu as We,
  qyt as Ge,
  r3t as Ke,
  rit as qe,
  rjt as Je,
  s3t as Ye,
  s6t as Xe,
  snn as Ze,
  t0t as Qe,
  tit as $e,
  wJt as et,
  wst as tt,
  ypt as nt,
  z7t as rt,
  zDt as it,
} from "./app-initial-f094ef01c64d.js";
import { Cf as at, Sf as ot, mS as st, pS as ct } from "./app-primary-4c40d73a1074.js";
import { a as lt, i as ut, n as dt, r as ft, t as pt } from "./use-codex-worktrees-4816d4e23919.js";
function mt(e) {
  let t = (0, ht.c)(40),
    { hostId: n } = e,
    i = r(pe),
    o = te(),
    s = Ge(n),
    c = F(lt, n)?.worktreesRoot,
    [u, d] = (0, _t.useState)(null),
    f;
  t[0] !== n || t[1] !== i
    ? ((f = (e) => ut(i, n, l.worktreeRoot, e)), (t[0] = n), (t[1] = i), (t[2] = f))
    : (f = t[2]);
  let h, g;
  t[3] !== o || t[4] !== i
    ? ((h = () => {
        (d(null),
          i.get(Z).success(
            o.formatMessage({
              id: `settings.git.worktreeRoot.save.success`,
              defaultMessage: `Saved worktree root`,
              description: `Toast shown when git worktree root is saved`,
            }),
          ));
      }),
      (g = () => {
        i.get(Z).danger(
          o.formatMessage({
            id: `settings.git.worktreeRoot.save.error`,
            defaultMessage: `Failed to save worktree root`,
            description: `Toast shown when git worktree root save fails`,
          }),
        );
      }),
      (t[3] = o),
      (t[4] = i),
      (t[5] = h),
      (t[6] = g))
    : ((h = t[5]), (g = t[6]));
  let _;
  t[7] !== f || t[8] !== h || t[9] !== g
    ? ((_ = { mutationFn: f, onSuccess: h, onError: g }),
      (t[7] = f),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _))
    : (_ = t[10]);
  let v = he(_),
    y = c ?? ``,
    b = u ?? y,
    x = u != null && u !== y,
    S = v.isPending,
    C;
  t[11] === s
    ? (C = t[12])
    : ((C = s == null ? null : gt.default.posix),
      s != null && (a(s) || Oe(s)) && (C = gt.default.win32),
      (t[11] = s),
      (t[12] = C));
  let T;
  t[13] !== C || t[14] !== S || t[15] !== x || t[16] !== v || t[17] !== b
    ? ((T = () => {
        if (!x || S) return;
        let e = b.trim();
        (e !== `` && (!Me(e) || !C?.isAbsolute(e))) || v.mutate(e);
      }),
      (t[13] = C),
      (t[14] = S),
      (t[15] = x),
      (t[16] = v),
      (t[17] = b),
      (t[18] = T))
    : (T = t[18]);
  let D = T,
    O = x && !S,
    k;
  t[19] === D
    ? (k = t[20])
    : ((k = (e) => {
        (e.preventDefault(), D());
      }),
      (t[19] = D),
      (t[20] = k));
  let A;
  (t[21] !== O || t[22] !== k
    ? ((A = { accelerator: `CmdOrCtrl+S`, enabled: O, onKeyDown: k }),
      (t[21] = O),
      (t[22] = k),
      (t[23] = A))
    : (A = t[23]),
    w(A));
  let j, M;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, vt.jsx)(m, {
        id: `settings.git.worktreeRoot.label`,
        defaultMessage: `Worktree root`,
        description: `Label for git worktree root setting`,
      })),
      (j = (0, vt.jsx)(m, {
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
  let P = s ?? `.codex`,
    I;
  t[29] === P ? (I = t[30]) : ((I = E(P)), (t[29] = P), (t[30] = I));
  let L;
  t[31] === o
    ? (L = t[32])
    : ((L = o.formatMessage({
        id: `settings.git.worktreeRoot.ariaLabel`,
        defaultMessage: `Worktree root`,
        description: `Aria label for git worktree root input`,
      })),
      (t[31] = o),
      (t[32] = L));
  let R;
  return (
    t[33] !== D || t[34] !== S || t[35] !== N || t[36] !== I || t[37] !== L || t[38] !== b
      ? ((R = (0, vt.jsx)(We, {
          label: M,
          description: j,
          control: (0, vt.jsx)(`div`, {
            className: `w-72 max-w-full`,
            children: (0, vt.jsx)(p, {
              value: b,
              onChange: N,
              onBlur: D,
              placeholder: I,
              "aria-label": L,
              disabled: S,
            }),
          }),
        })),
        (t[33] = D),
        (t[34] = S),
        (t[35] = N),
        (t[36] = I),
        (t[37] = L),
        (t[38] = b),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
var ht,
  gt,
  _t,
  vt,
  yt = e(() => {
    ((ht = Ne()),
      Ye(),
      I(),
      (gt = t(de(), 1)),
      c(),
      (_t = t(o(), 1)),
      se(),
      B(),
      je(),
      M(),
      d(),
      Re(),
      W(),
      ft(),
      (vt = Se()));
  });
function bt(e) {
  let t = (0, St.c)(90),
    { hostId: n } = e,
    i = r(pe),
    a = te(),
    [o, s] = (0, Ct.useState)(!1),
    [c, l] = (0, Ct.useState)(null),
    u = ie(rt.upstreamRefreshMode),
    d = F(lt, n),
    f = d?.autoCleanupEnabled ?? rt.autoCleanupEnabled.default,
    h = d?.keepCount ?? rt.keepCount.default,
    g;
  t[0] === i ? (g = t[1]) : ((g = (e) => fe(i, rt.upstreamRefreshMode, e)), (t[0] = i), (t[1] = g));
  let _, v;
  t[2] !== a || t[3] !== i
    ? ((_ = (e, t) => {
        switch (t) {
          case `best-effort`:
            i.get(Z).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.enabled`,
                defaultMessage: `Upstream refresh enabled`,
                description: `Toast shown when upstream refresh before worktree creation is enabled`,
              }),
            );
            return;
          case `never`:
            i.get(Z).success(
              a.formatMessage({
                id: `settings.worktrees.upstreamRefresh.save.disabled`,
                defaultMessage: `Upstream refresh disabled`,
                description: `Toast shown when upstream refresh before worktree creation is disabled`,
              }),
            );
            return;
        }
      }),
      (v = () => {
        i.get(Z).danger(
          a.formatMessage({
            id: `settings.worktrees.upstreamRefresh.save.error`,
            defaultMessage: `Failed to save upstream refresh setting`,
            description: `Toast shown when saving the upstream refresh setting fails`,
          }),
        );
      }),
      (t[2] = a),
      (t[3] = i),
      (t[4] = _),
      (t[5] = v))
    : ((_ = t[4]), (v = t[5]));
  let y;
  t[6] !== g || t[7] !== _ || t[8] !== v
    ? ((y = { mutationFn: g, onSuccess: _, onError: v }),
      (t[6] = g),
      (t[7] = _),
      (t[8] = v),
      (t[9] = y))
    : (y = t[9]);
  let b = he(y),
    x;
  t[10] !== n || t[11] !== i
    ? ((x = (e) => ut(i, n, rt.autoCleanupEnabled, e)), (t[10] = n), (t[11] = i), (t[12] = x))
    : (x = t[12]);
  let S, C;
  t[13] !== a || t[14] !== i
    ? ((S = (e, t) => {
        if (t) {
          i.get(Z).success(
            a.formatMessage({
              id: `settings.worktrees.autoCleanup.save.enabled`,
              defaultMessage: `Automatic deletion enabled`,
              description: `Toast shown when automatic worktree deletion is enabled`,
            }),
          );
          return;
        }
        i.get(Z).success(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.disabled`,
            defaultMessage: `Automatic deletion disabled`,
            description: `Toast shown when automatic worktree deletion is disabled`,
          }),
        );
      }),
      (C = () => {
        i.get(Z).danger(
          a.formatMessage({
            id: `settings.worktrees.autoCleanup.save.error`,
            defaultMessage: `Failed to save automatic deletion setting`,
            description: `Toast shown when saving the automatic worktree deletion setting fails`,
          }),
        );
      }),
      (t[13] = a),
      (t[14] = i),
      (t[15] = S),
      (t[16] = C))
    : ((S = t[15]), (C = t[16]));
  let w;
  t[17] !== x || t[18] !== S || t[19] !== C
    ? ((w = { mutationFn: x, onSuccess: S, onError: C }),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w))
    : (w = t[20]);
  let T = he(w),
    E;
  t[21] !== n || t[22] !== i
    ? ((E = (e) => ut(i, n, rt.keepCount, e)), (t[21] = n), (t[22] = i), (t[23] = E))
    : (E = t[23]);
  let D, O;
  t[24] !== a || t[25] !== i
    ? ((D = () => {
        (l(null),
          i.get(Z).success(
            a.formatMessage({
              id: `settings.worktrees.keepCount.save.success`,
              defaultMessage: `Saved auto-delete limit`,
              description: `Toast shown when the worktree auto-delete limit is saved`,
            }),
          ));
      }),
      (O = () => {
        i.get(Z).danger(
          a.formatMessage({
            id: `settings.worktrees.keepCount.save.error`,
            defaultMessage: `Failed to save auto-delete limit`,
            description: `Toast shown when saving the worktree auto-delete limit fails`,
          }),
        );
      }),
      (t[24] = a),
      (t[25] = i),
      (t[26] = D),
      (t[27] = O))
    : ((D = t[26]), (O = t[27]));
  let k;
  t[28] !== D || t[29] !== O || t[30] !== E
    ? ((k = { mutationFn: E, onSuccess: D, onError: O }),
      (t[28] = D),
      (t[29] = O),
      (t[30] = E),
      (t[31] = k))
    : (k = t[31]);
  let A = he(k),
    j = String(h),
    M = c ?? j,
    N = T.isPending,
    P = A.isPending || N || !f,
    I;
  t[32] !== N || t[33] !== T
    ? ((I = (e) => {
        if (!N) {
          if (e) {
            T.mutate(!0);
            return;
          }
          s(!0);
        }
      }),
      (t[32] = N),
      (t[33] = T),
      (t[34] = I))
    : (I = t[34]);
  let L = I,
    R;
  t[35] === T
    ? (R = t[36])
    : ((R = () => {
        (l(null), s(!1), T.mutate(!1));
      }),
      (t[35] = T),
      (t[36] = R));
  let ee = R,
    ne;
  t[37] !== P || t[38] !== h || t[39] !== c || t[40] !== A
    ? ((ne = () => {
        if (P || c == null) return;
        let e = c.trim(),
          t = Number.parseInt(e, 10);
        if (e.length === 0 || Number.isNaN(t)) {
          l(null);
          return;
        }
        let n = Math.max(1, Math.trunc(t));
        if (n === h) {
          l(null);
          return;
        }
        A.mutate(n);
      }),
      (t[37] = P),
      (t[38] = h),
      (t[39] = c),
      (t[40] = A),
      (t[41] = ne))
    : (ne = t[41]);
  let z = ne,
    ae,
    oe;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Q.jsx)(m, {
        id: `settings.worktrees.upstreamRefresh.label`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Label for the worktree upstream refresh toggle`,
      })),
      (oe = (0, Q.jsx)(m, {
        id: `settings.worktrees.upstreamRefresh.description`,
        defaultMessage: `Codex normally picks up branch updates during regular Git activity. This also fetches before each new worktree.`,
        description: `Description for the worktree upstream refresh toggle`,
      })),
      (t[42] = ae),
      (t[43] = oe))
    : ((ae = t[42]), (oe = t[43]));
  let se = u === `best-effort`,
    ce = b.isPending,
    B;
  t[44] === b
    ? (B = t[45])
    : ((B = (e) => {
        b.mutate(e ? `best-effort` : `never`);
      }),
      (t[44] = b),
      (t[45] = B));
  let le;
  t[46] === a
    ? (le = t[47])
    : ((le = a.formatMessage({
        id: `settings.worktrees.upstreamRefresh.ariaLabel`,
        defaultMessage: `Always fetch upstream before creating worktrees`,
        description: `Aria label for the worktree upstream refresh toggle`,
      })),
      (t[46] = a),
      (t[47] = le));
  let V;
  t[48] !== b.isPending || t[49] !== se || t[50] !== B || t[51] !== le
    ? ((V = (0, Q.jsx)(We, {
        label: ae,
        description: oe,
        control: (0, Q.jsx)(re, { checked: se, disabled: ce, onChange: B, ariaLabel: le }),
      })),
      (t[48] = b.isPending),
      (t[49] = se),
      (t[50] = B),
      (t[51] = le),
      (t[52] = V))
    : (V = t[52]);
  let H, ue;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(m, {
        id: `settings.worktrees.autoCleanup.label`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Label for the automatic worktree deletion toggle`,
      })),
      (ue = (0, Q.jsx)(m, {
        id: `settings.worktrees.autoCleanup.description`,
        defaultMessage: `Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.`,
        description: `Description for the automatic worktree deletion toggle`,
      })),
      (t[53] = H),
      (t[54] = ue))
    : ((H = t[53]), (ue = t[54]));
  let U;
  t[55] === a
    ? (U = t[56])
    : ((U = a.formatMessage({
        id: `settings.worktrees.autoCleanup.ariaLabel`,
        defaultMessage: `Automatically delete old worktrees`,
        description: `Aria label for the automatic worktree deletion toggle`,
      })),
      (t[55] = a),
      (t[56] = U));
  let W;
  t[57] !== f || t[58] !== L || t[59] !== N || t[60] !== U
    ? ((W = (0, Q.jsx)(We, {
        label: H,
        description: ue,
        control: (0, Q.jsx)(re, { checked: f, disabled: N, onChange: L, ariaLabel: U }),
      })),
      (t[57] = f),
      (t[58] = L),
      (t[59] = N),
      (t[60] = U),
      (t[61] = W))
    : (W = t[61]);
  let de;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(m, {
        id: `settings.worktrees.keepCount.label`,
        defaultMessage: `Auto-delete limit`,
        description: `Label for the worktree auto-delete limit setting`,
      })),
      (t[62] = de))
    : (de = t[62]);
  let G;
  t[63] === f
    ? (G = t[64])
    : ((G = f
        ? (0, Q.jsx)(m, {
            id: `settings.worktrees.keepCount.description`,
            defaultMessage: `Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.`,
            description: `Description for the worktree keep count setting`,
          })
        : (0, Q.jsx)(m, {
            id: `settings.worktrees.keepCount.description.disabled`,
            defaultMessage: `Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.`,
            description: `Description for the worktree keep count setting when automatic deletion is disabled`,
          })),
      (t[63] = f),
      (t[64] = G));
  let K;
  t[65] !== P || t[66] !== j
    ? ((K = (e) => {
        if (P) return;
        let t = e.target.value;
        l(t === j ? null : t);
      }),
      (t[65] = P),
      (t[66] = j),
      (t[67] = K))
    : (K = t[67]);
  let q;
  t[68] === z
    ? (q = t[69])
    : ((q = (e) => {
        e.key === `Enter` && (e.preventDefault(), z());
      }),
      (t[68] = z),
      (t[69] = q));
  let J;
  t[70] === a
    ? (J = t[71])
    : ((J = a.formatMessage({
        id: `settings.worktrees.keepCount.ariaLabel`,
        defaultMessage: `Auto-delete limit`,
        description: `Aria label for the worktree auto-delete limit input`,
      })),
      (t[70] = a),
      (t[71] = J));
  let Y;
  t[72] !== z || t[73] !== P || t[74] !== M || t[75] !== K || t[76] !== q || t[77] !== J
    ? ((Y = (0, Q.jsx)(`div`, {
        className: `ms-6 w-24`,
        children: (0, Q.jsx)(p, {
          variant: `compact`,
          value: M,
          onChange: K,
          onBlur: z,
          onKeyDown: q,
          type: `number`,
          inputMode: `numeric`,
          min: 1,
          step: 1,
          "aria-label": J,
          disabled: P,
        }),
      })),
      (t[72] = z),
      (t[73] = P),
      (t[74] = M),
      (t[75] = K),
      (t[76] = q),
      (t[77] = J),
      (t[78] = Y))
    : (Y = t[78]);
  let X;
  t[79] !== G || t[80] !== Y
    ? ((X = (0, Q.jsx)(We, { label: de, description: G, control: Y })),
      (t[79] = G),
      (t[80] = Y),
      (t[81] = X))
    : (X = t[81]);
  let me;
  t[82] !== ee || t[83] !== o
    ? ((me = (0, Q.jsx)(xt, { open: o, onOpenChange: s, onConfirm: ee })),
      (t[82] = ee),
      (t[83] = o),
      (t[84] = me))
    : (me = t[84]);
  let ge;
  return (
    t[85] !== V || t[86] !== W || t[87] !== X || t[88] !== me
      ? ((ge = (0, Q.jsxs)(Q.Fragment, { children: [V, W, X, me] })),
        (t[85] = V),
        (t[86] = W),
        (t[87] = X),
        (t[88] = me),
        (t[89] = ge))
      : (ge = t[89]),
    ge
  );
}
function xt(e) {
  let t = (0, St.c)(19),
    { open: n, onOpenChange: r, onConfirm: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(q, {
        children: (0, Q.jsx)(U, {
          title: (0, Q.jsx)(qe, {
            children: (0, Q.jsx)(m, {
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
    ? ((o = (0, Q.jsx)(q, {
        className: `text-codex-description`,
        children: (0, Q.jsx)(`p`, {
          children: (0, Q.jsx)(m, {
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
    ? ((c = (0, Q.jsx)(m, {
        id: `settings.worktrees.autoCleanup.confirm.cancel`,
        defaultMessage: `Keep automatic deletion`,
        description: `Cancel button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === s
    ? (l = t[6])
    : ((l = (0, Q.jsx)(ke, { color: `ghost`, onClick: s, children: c })), (t[5] = s), (t[6] = l));
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
    ? ((d = (0, Q.jsx)(m, {
        id: `settings.worktrees.autoCleanup.confirm.confirm`,
        defaultMessage: `Disable automatic deletion`,
        description: `Confirm button label for the automatic worktree deletion disable confirmation dialog`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === u
    ? (f = t[11])
    : ((f = (0, Q.jsx)(ke, { color: `danger`, onClick: u, children: d })),
      (t[10] = u),
      (t[11] = f));
  let p;
  t[12] !== l || t[13] !== f
    ? ((p = (0, Q.jsxs)(O, {
        children: [a, o, (0, Q.jsx)(q, { children: (0, Q.jsxs)(K, { children: [l, f] }) })],
      })),
      (t[12] = l),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let h;
  return (
    t[15] !== r || t[16] !== n || t[17] !== p
      ? ((h = (0, Q.jsx)($e, { open: n, showDialogClose: !1, onOpenChange: r, children: p })),
        (t[15] = r),
        (t[16] = n),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var St,
  Ct,
  Q,
  wt = e(() => {
    ((St = Ne()),
      Ye(),
      I(),
      c(),
      (Ct = t(o(), 1)),
      se(),
      i(),
      Te(),
      _e(),
      B(),
      je(),
      n(),
      Re(),
      Be(),
      W(),
      ft(),
      (Q = Se()));
  });
function Tt(e) {
  let t = (0, Et.c)(2),
    { hostId: n } = e;
  if (F(lt, n) == null) return null;
  let r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Dt.jsx)(Dt.Fragment, {
          children: (0, Dt.jsxs)(H, {
            children: [(0, Dt.jsx)(mt, { hostId: n }), (0, Dt.jsx)(bt, { hostId: n })],
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Et,
  Dt,
  Ot = e(() => {
    ((Et = Ne()), I(), yt(), wt(), T(), ft(), (Dt = Se()));
  });
function kt(e) {
  return e.ephemeral !== !0 && e.threadSource !== `ambient_suggestions`;
}
var At = e(() => {
  c();
});
function jt(e, t) {
  return [`settings-worktree-conversations`, e, t];
}
function Mt(e, t) {
  let n = (0, Ft.c)(10),
    i = r(pe),
    a;
  n[0] !== e || n[1] !== t ? ((a = jt(e, t)), (n[0] = e), (n[1] = t), (n[2] = a)) : (a = n[2]);
  let o;
  n[3] !== e || n[4] !== t || n[5] !== i
    ? ((o = () => Nt(i, e, t)), (n[3] = e), (n[4] = t), (n[5] = i), (n[6] = o))
    : (o = n[6]);
  let s;
  return (
    n[7] !== a || n[8] !== o
      ? ((s = {
          queryKey: a,
          queryFn: o,
          refetchInterval: et.ONE_MINUTE,
          retry: !1,
          staleTime: et.ONE_MINUTE,
        }),
        (n[7] = a),
        (n[8] = o),
        (n[9] = s))
      : (s = n[9]),
    oe(s)
  );
}
async function Nt(e, t, n) {
  let r = n ? [ge, Ie] : [ge];
  return (await Promise.all(r.map((n) => Pt(e, t, n))))
    .flat()
    .filter(kt)
    .sort((e, t) => (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt))
    .map((e) => {
      let t = tt(e.name?.trim() || e.preview);
      return { id: Ze(e.id), cwd: e.cwd, isSubagent: z(e), title: t || null };
    });
}
async function Pt(e, t, n) {
  let r = [],
    i = new Set(),
    a = null;
  do {
    let o = await Ke(e, t).sendRequest(
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
var Ft,
  It = e(() => {
    ((Ft = Ne()), Ye(), Qe(), I(), c(), Ce(), b(), At(), h(), Re(), ce());
  });
async function Lt(e, t, n) {
  if (!e.get(zt, t)) {
    e.set(zt, t, !0);
    try {
      (await Promise.all(
        n.map((n) =>
          Ke(e, t.hostId).archiveConversation(n.id, {
            useAppServerPins: e.get(it),
            cleanupWorktree: !1,
            source: `worktree_delete`,
          }),
        ),
      ),
        await ze(`worktree-delete`, { params: { ...t, reason: `settings-delete-targeted` } }),
        await e.queryClient.invalidateQueries({ queryKey: x(t.hostId) }),
        e.get(Z).success(
          (0, Rt.jsx)(m, {
            id: `settings.worktrees.delete.success`,
            defaultMessage: `Worktree deleted`,
            description: `Confirmation shown after deleting a worktree from settings, even when the user has navigated away`,
          }),
        ));
    } catch (t) {
      (ee.error(`Failed to delete worktree`, { safe: {}, sensitive: { error: Fe(t) } }),
        e.get(Z).danger(
          (0, Rt.jsx)(m, {
            id: `settings.worktrees.delete.error`,
            defaultMessage: `Failed to delete worktree`,
            description: `Error message when deleting a worktree from settings`,
          }),
        ));
    } finally {
      e.set(zt, t, !1);
    }
  }
}
var Rt,
  zt,
  Bt = e(() => {
    (I(), c(), se(), Ce(), je(), u(), Re(), _(), Y(), k(), (Rt = Se()), (zt = Xe(pe, (e) => !1)));
  });
function Vt() {
  let e = (0, Zt.c)(62),
    t = te(),
    { selectedHostId: n } = s(),
    r = He(n),
    i = st(),
    {
      data: a,
      isLoading: o,
      isFetching: c,
      error: l,
      refetch: u,
    } = dt(r, `worktrees_settings_page`),
    d;
  e[0] === n ? (d = e[1]) : ((d = { hostId: n }), (e[0] = n), (e[1] = d));
  let { data: p, isLoading: h, error: g } = F(G, d),
    { data: _, error: v, isFetching: y, isLoading: b, refetch: x } = Mt(n, i),
    S,
    C;
  if (
    e[2] !== _ ||
    e[3] !== v ||
    e[4] !== t ||
    e[5] !== y ||
    e[6] !== b ||
    e[7] !== h ||
    e[8] !== c ||
    e[9] !== o ||
    e[10] !== x ||
    e[11] !== u ||
    e[12] !== n ||
    e[13] !== p?.roots ||
    e[14] !== g ||
    e[15] !== a?.worktrees ||
    e[16] !== l
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let r = Kt(a?.worktrees ?? [], p?.roots ?? []),
        i;
      e[19] === _ ? (i = e[20]) : ((i = _ ?? []), (e[19] = _), (e[20] = i));
      let s = i,
        d;
      e[21] === s ? (d = e[22]) : ((d = s.filter(Ht)), (e[21] = s), (e[22] = d));
      let w = d,
        T = Gt(r),
        E;
      e[23] === t
        ? (E = e[24])
        : ((E = t.formatMessage({
            id: `settings.worktrees.refresh`,
            defaultMessage: `Refresh`,
            description: `Button label to refresh the worktree list`,
          })),
          (e[23] = t),
          (e[24] = E));
      let O = E,
        k = c || y,
        j;
      e[25] !== x || e[26] !== u
        ? ((j = () => {
            Promise.all([u(), x()]);
          }),
          (e[25] = x),
          (e[26] = u),
          (e[27] = j))
        : (j = e[27]);
      let M;
      e[28] !== y || e[29] !== c
        ? ((M = c || y ? null : (0, $.jsx)(be, { "aria-hidden": !1, asset: nt })),
          (e[28] = y),
          (e[29] = c),
          (e[30] = M))
        : (M = e[30]);
      let N;
      e[31] !== O || e[32] !== k || e[33] !== j || e[34] !== M
        ? ((N = (0, $.jsx)(ke, {
            "aria-label": O,
            className: `shrink-0`,
            color: `ghost`,
            loading: k,
            onClick: j,
            size: `toolbar`,
            title: O,
            uniform: !0,
            children: M,
          })),
          (e[31] = O),
          (e[32] = k),
          (e[33] = j),
          (e[34] = M),
          (e[35] = N))
        : (N = e[35]);
      let P = N,
        F = l ?? g ?? v;
      if (o || h) {
        let t;
        e[36] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(f, { slug: `worktrees` })), (e[36] = t))
          : (t = e[36]);
        let r;
        e[37] === n
          ? (r = e[38])
          : ((r = (0, $.jsx)(Tt, { hostId: n }, n)), (e[37] = n), (e[38] = r));
        let i;
        e[39] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsx)(A, {
              children: (0, $.jsx)(m, {
                id: `settings.worktrees.loading.body`,
                defaultMessage: `Fetching worktree details…`,
                description: `Loading state body for worktrees settings`,
              }),
            })),
            (e[39] = i))
          : (i = e[39]);
        let a;
        (e[40] === r
          ? (a = e[41])
          : ((a = (0, $.jsxs)(D, { title: t, children: [r, i] })), (e[40] = r), (e[41] = a)),
          (C = a));
        break bb0;
      }
      if (F) {
        let r;
        e[42] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(f, { slug: `worktrees` })), (e[42] = r))
          : (r = e[42]);
        let i;
        e[43] === n
          ? (i = e[44])
          : ((i = (0, $.jsx)(Tt, { hostId: n }, n)), (e[43] = n), (e[44] = i));
        let a;
        e[45] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, $.jsx)(m, {
              id: `settings.worktrees.error.title`,
              defaultMessage: `Unable to load worktrees`,
              description: `Error state title for worktrees settings`,
            })),
            (e[45] = a))
          : (a = e[45]);
        let o;
        e[46] === P
          ? (o = e[47])
          : ((o = (0, $.jsx)(J.Header, { title: a, actions: P })), (e[46] = P), (e[47] = o));
        let s;
        e[48] !== t || e[49] !== F.message
          ? ((s =
              F.message ||
              t.formatMessage({
                id: `settings.worktrees.error.body`,
                defaultMessage: `Something went wrong while loading worktrees.`,
                description: `Error body for worktrees settings`,
              })),
            (e[48] = t),
            (e[49] = F.message),
            (e[50] = s))
          : (s = e[50]);
        let c;
        e[51] === s
          ? (c = e[52])
          : ((c = (0, $.jsx)(J.Content, {
              children: (0, $.jsx)(H, {
                children: (0, $.jsx)(L, { layout: `settings-row`, children: s }),
              }),
            })),
            (e[51] = s),
            (e[52] = c));
        let l;
        e[53] !== o || e[54] !== c
          ? ((l = (0, $.jsxs)(J, { children: [o, c] })), (e[53] = o), (e[54] = c), (e[55] = l))
          : (l = e[55]);
        let u;
        (e[56] !== i || e[57] !== l
          ? ((u = (0, $.jsxs)(D, { title: r, children: [i, l] })),
            (e[56] = i),
            (e[57] = l),
            (e[58] = u))
          : (u = e[58]),
          (C = u));
        break bb0;
      }
      let I;
      e[59] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = (0, $.jsx)(f, { slug: `worktrees` })), (e[59] = I))
        : (I = e[59]);
      let R;
      (e[60] === n
        ? (R = e[61])
        : ((R = (0, $.jsx)(Tt, { hostId: n }, n)), (e[60] = n), (e[61] = R)),
        (S = (0, $.jsxs)(D, {
          title: I,
          children: [
            R,
            T.length === 0
              ? (0, $.jsxs)(J, {
                  children: [
                    (0, $.jsx)(J.Header, {
                      title: (0, $.jsx)(m, {
                        id: `settings.worktrees.empty.title`,
                        defaultMessage: `No worktrees yet`,
                        description: `Empty state title for worktrees settings`,
                      }),
                      actions: P,
                    }),
                    (0, $.jsx)(J.Content, {
                      children: (0, $.jsx)(H, {
                        children: (0, $.jsx)(L, {
                          layout: `settings-row`,
                          children: (0, $.jsx)(m, {
                            id: `settings.worktrees.empty.body`,
                            defaultMessage: `Worktrees created by ChatGPT will appear here`,
                            description: `Empty state body for worktrees settings`,
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : T.map((e, t) =>
                  (0, $.jsx)(
                    Ut,
                    {
                      action: t === 0 ? P : null,
                      allConversations: s,
                      visibleConversations: w,
                      hostId: n,
                      isConversationsLoading: b,
                      repoRoot: e.repoRoot,
                      worktrees: e.worktrees,
                    },
                    e.key,
                  ),
                ),
          ],
        })));
    }
    ((e[2] = _),
      (e[3] = v),
      (e[4] = t),
      (e[5] = y),
      (e[6] = b),
      (e[7] = h),
      (e[8] = c),
      (e[9] = o),
      (e[10] = x),
      (e[11] = u),
      (e[12] = n),
      (e[13] = p?.roots),
      (e[14] = g),
      (e[15] = a?.worktrees),
      (e[16] = l),
      (e[17] = S),
      (e[18] = C));
  } else ((S = e[17]), (C = e[18]));
  return C === Symbol.for(`react.early_return_sentinel`) ? S : C;
}
function Ht(e) {
  return !e.isSubagent;
}
function Ut(e) {
  let t = (0, Zt.c)(33),
    {
      action: n,
      repoRoot: r,
      worktrees: i,
      allConversations: a,
      visibleConversations: o,
      hostId: s,
      isConversationsLoading: c,
    } = e,
    l = He(s),
    u = y(Je),
    d;
  t[0] !== l || t[1] !== r
    ? ((d = r == null ? null : { cwd: r, hostConfig: l }), (t[0] = l), (t[1] = r), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === u ? (f = t[4]) : ((f = { retainRepoWatch: u }), (t[3] = u), (t[4] = f));
  let { data: p, isLoading: h } = N(d, `worktree_restore_banner`, f),
    g = p?.root ?? r ?? i[0]?.dir ?? null,
    _;
  t[5] === g
    ? (_ = t[6])
    : ((_ = g
        ? (0, $.jsx)(`span`, { className: `truncate text-sm`, children: g })
        : (0, $.jsx)(m, {
            id: `settings.worktrees.repository.unknown`,
            defaultMessage: `Unknown repository`,
            description: `Fallback label when worktree repository cannot be resolved`,
          })),
      (t[5] = g),
      (t[6] = _));
  let v = _,
    b = h && g == null,
    x;
  t[7] === v
    ? (x = t[8])
    : ((x = (0, $.jsx)(`div`, { className: `min-w-0 truncate text-sm text-default`, children: v })),
      (t[7] = v),
      (t[8] = x));
  let S;
  t[9] === b
    ? (S = t[10])
    : ((S = b
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(m, {
              id: `settings.worktrees.repository.loading`,
              defaultMessage: `Loading repository metadata…`,
              description: `Subtitle while repository metadata is loading`,
            }),
          })
        : null),
      (t[9] = b),
      (t[10] = S));
  let C;
  t[11] !== x || t[12] !== S
    ? ((C = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [x, S] })),
      (t[11] = x),
      (t[12] = S),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== n || t[15] !== C
    ? ((w = (0, $.jsx)(J.Header, { title: C, actions: n })), (t[14] = n), (t[15] = C), (t[16] = w))
    : (w = t[16]);
  let T;
  if (t[17] !== a || t[18] !== s || t[19] !== c || t[20] !== o || t[21] !== i) {
    let e;
    (t[23] !== a || t[24] !== s || t[25] !== c || t[26] !== o
      ? ((e = (e) =>
          (0, $.jsx)(
            Wt,
            {
              allConversations: qt(e.dir, a),
              hostId: s,
              visibleConversations: qt(e.dir, o),
              isConversationsLoading: c,
              worktree: e,
            },
            e.dir,
          )),
        (t[23] = a),
        (t[24] = s),
        (t[25] = c),
        (t[26] = o),
        (t[27] = e))
      : (e = t[27]),
      (T = Jt(i, o).map(e)),
      (t[17] = a),
      (t[18] = s),
      (t[19] = c),
      (t[20] = o),
      (t[21] = i),
      (t[22] = T));
  } else T = t[22];
  let E;
  t[28] === T
    ? (E = t[29])
    : ((E = (0, $.jsx)(J.Content, { children: (0, $.jsx)(H, { children: T }) })),
      (t[28] = T),
      (t[29] = E));
  let D;
  return (
    t[30] !== w || t[31] !== E
      ? ((D = (0, $.jsxs)(J, { children: [w, E] })), (t[30] = w), (t[31] = E), (t[32] = D))
      : (D = t[32]),
    D
  );
}
function Wt(e) {
  let t = (0, Zt.c)(43),
    {
      worktree: n,
      allConversations: i,
      visibleConversations: a,
      hostId: o,
      isConversationsLoading: s,
    } = e,
    c = r(pe),
    l = Pe(),
    u;
  t[0] !== o || t[1] !== n.dir
    ? ((u = { hostId: o, worktree: n.dir }), (t[0] = o), (t[1] = n.dir), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = F(zt, d),
    p = He(o),
    h = y(we)?.[a[0]?.id ?? ``],
    g;
  t[3] !== p.kind || t[4] !== h
    ? ((g = p.kind === `local` && !(h?.projectKind === `local` && S(h.projectId))),
      (t[3] = p.kind),
      (t[4] = h),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(`div`, {
        className: `text-sm font-medium text-default`,
        children: (0, $.jsx)(m, {
          id: `settings.worktrees.row.title`,
          defaultMessage: `Worktree`,
          description: `Label for a worktree row`,
        }),
      })),
      (t[6] = v))
    : (v = t[6]);
  let b;
  t[7] === n.dir
    ? (b = t[8])
    : ((b = (0, $.jsx)(`div`, {
        className: `mt-1 truncate text-xs text-secondary`,
        children: n.dir,
      })),
      (t[7] = n.dir),
      (t[8] = b));
  let x;
  t[9] === _
    ? (x = t[10])
    : ((x = _
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(m, {
              id: `settings.worktrees.row.newChatDescription`,
              defaultMessage: `Starts a fresh chat using the same files and branch`,
              description: `Explanation that starting a chat from Worktrees settings reuses this worktree without carrying over conversation history`,
            }),
          })
        : null),
      (t[9] = _),
      (t[10] = x));
  let C;
  t[11] !== b || t[12] !== x
    ? ((C = (0, $.jsxs)(`div`, { className: `min-w-0`, children: [v, b, x] })),
      (t[11] = b),
      (t[12] = x),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== _ || t[15] !== f || t[16] !== c || t[17] !== a || t[18] !== n.dir
    ? ((w = _
        ? (0, $.jsxs)(ke, {
            className: `shrink-0`,
            color: `secondary`,
            disabled: f,
            onClick: () => {
              at(c, { sourceConversationId: a[0]?.id, workspaceRoot: n.dir });
            },
            size: `toolbar`,
            children: [
              (0, $.jsx)(be, { "aria-hidden": !1, asset: ye }),
              (0, $.jsx)(m, {
                id: `settings.worktrees.row.newChat`,
                defaultMessage: `New chat in this worktree`,
                description: `Button to start a fresh chat in this existing worktree without carrying over conversation history`,
              }),
            ],
          })
        : null),
      (t[14] = _),
      (t[15] = f),
      (t[16] = c),
      (t[17] = a),
      (t[18] = n.dir),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] !== i || t[21] !== d || t[22] !== c
    ? ((T = () => {
        Lt(c, d, i);
      }),
      (t[20] = i),
      (t[21] = d),
      (t[22] = c),
      (t[23] = T))
    : (T = t[23]);
  let E;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(m, {
        id: `settings.worktrees.row.delete`,
        defaultMessage: `Delete`,
        description: `Delete button label for a worktree row`,
      })),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] !== f || t[26] !== T
    ? ((D = (0, $.jsx)(ke, {
        className: `shrink-0`,
        color: `danger`,
        loading: f,
        onClick: T,
        size: `toolbar`,
        children: E,
      })),
      (t[25] = f),
      (t[26] = T),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== D || t[29] !== w
    ? ((O = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [w, D] })),
      (t[28] = D),
      (t[29] = w),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== O || t[32] !== C
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [C, O],
      })),
      (t[31] = O),
      (t[32] = C),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(`div`, {
        className: `text-xs text-secondary`,
        children: (0, $.jsx)(m, {
          id: `settings.worktrees.row.conversations`,
          defaultMessage: `Conversations`,
          description: `Label for conversations list within a worktree row`,
        }),
      })),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] !== o || t[36] !== s || t[37] !== l || t[38] !== a
    ? ((j = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          A,
          s
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-secondary`,
                children: [
                  (0, $.jsx)(De, { className: `icon-xxs` }),
                  (0, $.jsx)(m, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : a.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-secondary`,
                  children: (0, $.jsx)(m, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No conversations linked to this worktree.`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: a.map((e) => {
                    let t = e.title;
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-start text-sm text-default hover:bg-primary-ghost-hover hover:text-text/80 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                        onClick: () => {
                          l(e.id, o);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(m, {
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
      (t[35] = o),
      (t[36] = s),
      (t[37] = l),
      (t[38] = a),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== k || t[41] !== j
      ? ((M = (0, $.jsxs)(`div`, { className: `flex flex-col gap-2 p-3`, children: [k, j] })),
        (t[40] = k),
        (t[41] = j),
        (t[42] = M))
      : (M = t[42]),
    M
  );
}
function Gt(e) {
  let t = new Map();
  for (let n of e) {
    let e = R(n.gitDir),
      r = Yt(e ?? n.dir),
      i = t.get(r);
    if (i) {
      i.worktrees.push(n);
      continue;
    }
    t.set(r, { key: r, repoRoot: e, worktrees: [n] });
  }
  return Array.from(t.values());
}
function Kt(e, t) {
  return t.length === 0 ? e : e.filter((e) => !t.some((t) => Xt(t, e.dir)));
}
function qt(e, t) {
  if (t.length === 0) return [];
  let n = Yt(e);
  return t.filter((e) => {
    let t = e.cwd;
    if (!t) return !1;
    let r = Yt(t);
    return r === n || r.startsWith(`${n}/`);
  });
}
function Jt(e, t) {
  if (t.length === 0) return e;
  let n = e.map((e, n) => ({ worktree: e, index: n, conversationCount: qt(e.dir, t).length }));
  return (
    n.sort((e, t) => {
      let n = t.conversationCount - e.conversationCount;
      return n === 0 ? e.index - t.index : n;
    }),
    n.map((e) => e.worktree)
  );
}
function Yt(e) {
  return v(e).replace(/\/+$/, ``);
}
function Xt(e, t) {
  let n = Yt(e),
    r = Yt(t);
  return n === r || n.startsWith(`${r}/`);
}
var Zt, $;
e(() => {
  ((Zt = Ne()),
    X(),
    xe(),
    I(),
    se(),
    le(),
    i(),
    ve(),
    Ae(),
    P(),
    pt(),
    Ee(),
    ct(),
    Le(),
    Re(),
    Ue(),
    ue(),
    Ot(),
    It(),
    ae(),
    ne(),
    Ve(),
    V(),
    T(),
    j(),
    ot(),
    C(),
    me(),
    g(),
    Bt(),
    ($ = Se()));
})();
export { Vt as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page-8aff7d1210a1.js.map
