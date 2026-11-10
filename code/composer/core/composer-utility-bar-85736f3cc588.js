import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $A as n,
  $N as r,
  $ut as i,
  $wt as a,
  A3t as o,
  AJ as s,
  AMt as c,
  AN as l,
  Amn as u,
  B6t as d,
  Cpn as f,
  DJ as p,
  Dbt as m,
  Dl as h,
  F3t as g,
  Gwt as _,
  H0 as v,
  H4t as y,
  H8 as b,
  IJ as x,
  IXt as S,
  J8t as C,
  JA as w,
  JG as T,
  JK as E,
  JXt as ee,
  JYt as te,
  Jit as D,
  KG as ne,
  KI as re,
  KXt as O,
  KYt as k,
  Kit as A,
  Kqt as j,
  Kyt as M,
  L0 as N,
  LX as P,
  MHt as ie,
  N3t as F,
  Nft as I,
  O3t as L,
  OJ as R,
  Opn as z,
  Ow as B,
  Pft as ae,
  QJt as oe,
  RF as se,
  RX as ce,
  Rpn as le,
  SC as V,
  Spn as H,
  TJt as ue,
  TQ as de,
  V4t as fe,
  V8 as pe,
  VTt as me,
  X8t as he,
  XGt as ge,
  XI as _e,
  Xdt as U,
  YTt as ve,
  YYt as ye,
  ZG as W,
  ZGt as be,
  ZJt as xe,
  _A as Se,
  _Et as Ce,
  _Jt as G,
  _ct as we,
  a3t as Te,
  aYt as Ee,
  aj as De,
  bC as Oe,
  blt as ke,
  dpt as Ae,
  e4t as je,
  e9t as Me,
  ej as Ne,
  eut as Pe,
  flt as Fe,
  fpt as Ie,
  gJt as Le,
  gMt as K,
  gct as Re,
  glt as ze,
  hMt as Be,
  hmn as Ve,
  i6t as He,
  ij as Ue,
  in as We,
  jHt as Ge,
  jN as q,
  kMt as Ke,
  kbt as qe,
  kmn as Je,
  kw as Ye,
  l8 as Xe,
  llt as Ze,
  m8 as Qe,
  nKt as $e,
  nV as et,
  njt as tt,
  o3t as nt,
  out as rt,
  q4t as it,
  qK as at,
  qqt as ot,
  qyt as st,
  rJt as ct,
  rTt as lt,
  rV as ut,
  rjt as dt,
  rn as ft,
  sYt as pt,
  tP as mt,
  v6 as ht,
  wJt as gt,
  wQ as _t,
  xpn as vt,
  y6 as yt,
  yA as bt,
  zF as xt,
  zJ as St,
  zTt as Ct,
  zpn as wt,
} from "./app-initial-f094ef01c64d.js";
import {
  $ as Tt,
  $f as Et,
  $w as Dt,
  CE as Ot,
  Da as kt,
  Gh as At,
  Jo as jt,
  Kh as Mt,
  Oa as Nt,
  Oo as Pt,
  Qf as J,
  Qw as Ft,
  SE as It,
  St as Lt,
  Y as Rt,
  Yo as zt,
  Zw as Bt,
  _E as Vt,
  _t as Ht,
  bt as Ut,
  cx as Wt,
  eT as Gt,
  gE as Kt,
  gt as qt,
  hs as Jt,
  jo as Yt,
  l as Xt,
  la as Zt,
  ms as Qt,
  u as $t,
  ua as en,
  vt as tn,
  xt as nn,
  yt as rn,
} from "./app-primary-4c40d73a1074.js";
import { n as an, t as on } from "./codex-light-16-3986f0d27657.js";
import { n as sn, t as cn } from "./arrow-branch-light-16-cdf94f439042.js";
import { n as ln, t as un } from "./use-create-git-repository-c0b61d3a555e.js";
import {
  a as dn,
  c as fn,
  i as pn,
  n as mn,
  o as hn,
  r as gn,
  s as _n,
  t as vn,
} from "./worktree-environment-dropdown-ea1f88351d40.js";
import { i as yn, n as bn, r as xn, t as Sn } from "./local-remote-dropdown-3788d6591891.js";
function Cn({ codexHome: e, worktreePath: t }) {
  return wn(t, e)?.[0] ?? fe(t);
}
function wn(e, t) {
  let n = it(e).replace(/\/+$/, ``),
    r = n.toLowerCase();
  if (t != null) {
    let e = it(C(t)).replace(/\/+$/, ``).toLowerCase();
    if (r === e || r.startsWith(`${e}/`)) return n.slice(e.length).split(`/`).filter(Boolean);
  }
  let i = r.lastIndexOf(Tn);
  return i === -1
    ? null
    : n
        .slice(i + 17)
        .split(`/`)
        .filter(Boolean);
}
var Tn,
  En = e(() => {
    (d(), y(), h(), (Tn = `.codex/worktrees/`));
  });
function Dn(e) {
  let t = (0, On.c)(45),
    { composerMode: n, setComposerMode: r } = e,
    i = o(s),
    a = z(),
    c = g(l),
    [u, d] = (0, kn.useState)(!1),
    p = de(),
    m = g(dt),
    h;
  t[0] !== p.cwd || t[1] !== p.hostConfig
    ? ((h = p.cwd == null ? null : { cwd: p.cwd, hostConfig: p.hostConfig }),
      (t[0] = p.cwd),
      (t[1] = p.hostConfig),
      (t[2] = h))
    : (h = t[2]);
  let _;
  t[3] === m ? (_ = t[4]) : ((_ = { retainRepoWatch: m }), (t[3] = m), (t[4] = _));
  let { data: v, isLoading: y } = ie(h, `cloud_follow_up_local_remote_dropdown`, _),
    b = v?.root != null,
    x = c?.type === `cloud` && c.hasAppliedCodeLocally,
    S,
    C;
  (t[5] !== x || t[6] !== i
    ? ((S = () => {
        x && De(i, `local`);
      }),
      (C = [x, i]),
      (t[5] = x),
      (t[6] = i),
      (t[7] = S),
      (t[8] = C))
    : ((S = t[7]), (C = t[8])),
    (0, kn.useEffect)(S, C));
  let w, E;
  (t[9] !== b || t[10] !== y || t[11] !== i
    ? ((w = () => {
        y || b || De(i, `local`);
      }),
      (E = [b, y, i]),
      (t[9] = b),
      (t[10] = y),
      (t[11] = i),
      (t[12] = w),
      (t[13] = E))
    : ((w = t[12]), (E = t[13])),
    (0, kn.useEffect)(w, E));
  let ee;
  t[14] === n
    ? (ee = t[15])
    : ((ee = n === `local` ? (0, Y.jsx)(f, { ...An.local }) : (0, Y.jsx)(f, { ...An.cloud })),
      (t[14] = n),
      (t[15] = ee));
  let te = ee,
    D;
  t[16] === a ? (D = t[17]) : ((D = a.formatMessage(An.tooltip)), (t[16] = a), (t[17] = D));
  let re = D,
    O;
  t[18] === n
    ? (O = t[19])
    : ((O =
        n === `cloud`
          ? (0, Y.jsx)(Dt, { className: `icon-xs` })
          : (0, Y.jsx)(Bt, { className: `icon-xs` })),
      (t[18] = n),
      (t[19] = O));
  let k;
  t[20] !== te || t[21] !== O || t[22] !== re
    ? ((k = (0, Y.jsx)(Zt, {
        "aria-label": re,
        "data-composer-navigation-target": `run-location`,
        categoryLabel: null,
        collapse: `xs`,
        icon: O,
        indicator: `chevron`,
        value: te,
        valueClassName: `max-w-40`,
      })),
      (t[20] = te),
      (t[21] = O),
      (t[22] = re),
      (t[23] = k))
    : (k = t[23]);
  let j;
  t[24] !== k || t[25] !== re
    ? ((j = (0, Y.jsx)(A, { tooltipContent: re, children: k })),
      (t[24] = k),
      (t[25] = re),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(T.Title, {
        children: (0, Y.jsx)(f, {
          id: `composer.cloudFollowUp.header`,
          defaultMessage: `Run follow-up in`,
          description: `Header above the local and cloud execution choices for a cloud chat follow-up`,
        }),
      })),
      (t[27] = M))
    : (M = t[27]);
  let N = n === `local` ? at : void 0,
    P;
  t[28] === r
    ? (P = t[29])
    : ((P = () => {
        (r(`local`), d(!1));
      }),
      (t[28] = r),
      (t[29] = P));
  let F;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Y.jsx)(f, { ...An.local })), (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] !== N || t[32] !== P
    ? ((I = (0, Y.jsx)(T.Item, { LeftIcon: Bt, RightIcon: N, onClick: P, children: F })),
      (t[31] = N),
      (t[32] = P),
      (t[33] = I))
    : (I = t[33]);
  let L;
  t[34] !== n || t[35] !== b || t[36] !== r
    ? ((L = b
        ? (0, Y.jsx)(T.Item, {
            LeftIcon: Dt,
            RightIcon: n === `cloud` ? at : void 0,
            onClick: () => {
              (r(`cloud`), d(!1));
            },
            children: (0, Y.jsx)(f, { ...An.cloud }),
          })
        : null),
      (t[34] = n),
      (t[35] = b),
      (t[36] = r),
      (t[37] = L))
    : (L = t[37]);
  let R;
  t[38] !== I || t[39] !== L
    ? ((R = (0, Y.jsxs)(`div`, { className: `flex w-44 flex-col`, children: [M, I, L] })),
      (t[38] = I),
      (t[39] = L),
      (t[40] = R))
    : (R = t[40]);
  let B;
  return (
    t[41] !== u || t[42] !== j || t[43] !== R
      ? ((B = (0, Y.jsx)(ne, { open: u, onOpenChange: d, triggerButton: j, children: R })),
        (t[41] = u),
        (t[42] = j),
        (t[43] = R),
        (t[44] = B))
      : (B = t[44]),
    B
  );
}
var On,
  kn,
  Y,
  An,
  jn = e(() => {
    ((On = Je()),
      L(),
      (kn = t(u(), 1)),
      H(),
      W(),
      D(),
      Ge(),
      _t(),
      E(),
      Gt(),
      Ft(),
      tt(),
      St(),
      q(),
      en(),
      w(),
      (Y = Ve()),
      (An = vt({
        local: {
          id: `composer.cloudFollowUp.local`,
          defaultMessage: `Local`,
          description: `Local follow-up option`,
        },
        cloud: {
          id: `composer.cloudFollowUp.cloud`,
          defaultMessage: `Cloud`,
          description: `Cloud follow-up option`,
        },
        tooltip: {
          id: `composer.cloudFollowUp.whereRun`,
          defaultMessage: `Where should this follow-up run?`,
          description: `Tooltip for choosing between local and cloud follow-ups`,
        },
      })));
  });
function Mn(e) {
  let t = (0, Pn.c)(30),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, Fn.useState)(!1),
    o;
  t[0] === n
    ? (o = t[1])
    : ((o =
        n === `working-tree`
          ? (0, X.jsx)(f, { ...In.workingTree })
          : (0, X.jsx)(f, { ...In.directFollowUp })),
      (t[0] = n),
      (t[1] = o));
  let s = o,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, X.jsx)(f, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this chat start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(f, {
        id: `composer.followUpStartingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the follow-up starting state control in the composer footer`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u = n === `working-tree`,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(Re, { className: `icon-xs` })), (t[4] = d))
    : (d = t[4]);
  let p;
  t[5] === u
    ? (p = t[6])
    : ((p = (0, X.jsx)(At, {
        borderColor: `border-surface-secondary`,
        badgeEnabled: u,
        children: d,
      })),
      (t[5] = u),
      (t[6] = p));
  let m;
  t[7] !== s || t[8] !== p
    ? ((m = (0, X.jsx)(A, {
        tooltipContent: c,
        children: (0, X.jsx)(Zt, {
          "data-composer-navigation-target": `starting-state`,
          categoryLabel: l,
          collapse: `none`,
          icon: p,
          indicator: `chevron`,
          value: s,
          valueClassName: `max-[440px]:hidden`,
        }),
      })),
      (t[7] = s),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(f, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new chat that references this cloud chat.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[10] = h))
    : (h = t[10]);
  let g = n === `working-tree` ? at : void 0,
    _;
  t[11] === r
    ? (_ = t[12])
    : ((_ = () => {
        (r(`working-tree`), a(!1));
      }),
      (t[11] = r),
      (t[12] = _));
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(f, { ...In.workingTree })), (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== _ || t[15] !== g
    ? ((y = (0, X.jsx)(A, {
        tooltipContent: h,
        children: (0, X.jsx)(T.Item, { LeftIcon: Nn, RightIcon: g, onClick: _, children: v }),
      })),
      (t[14] = _),
      (t[15] = g),
      (t[16] = y))
    : (y = t[16]);
  let b = n === `direct-follow-up` ? at : void 0,
    x;
  t[17] === r
    ? (x = t[18])
    : ((x = () => {
        (r(`direct-follow-up`), a(!1));
      }),
      (t[17] = r),
      (t[18] = x));
  let S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(f, { ...In.directFollowUp })), (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== b || t[21] !== x
    ? ((C = (0, X.jsx)(T.Item, { LeftIcon: Re, RightIcon: b, onClick: x, children: S })),
      (t[20] = b),
      (t[21] = x),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== y || t[24] !== C
    ? ((w = (0, X.jsxs)(`div`, { className: `flex flex-col gap-1 pt-1`, children: [y, C] })),
      (t[23] = y),
      (t[24] = C),
      (t[25] = w))
    : (w = t[25]);
  let E;
  return (
    t[26] !== i || t[27] !== w || t[28] !== m
      ? ((E = (0, X.jsx)(ne, { open: i, onOpenChange: a, triggerButton: m, children: w })),
        (t[26] = i),
        (t[27] = w),
        (t[28] = m),
        (t[29] = E))
      : (E = t[29]),
    E
  );
}
function Nn(e) {
  let t = (0, Pn.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(At, {
          borderColor: `border-surface-elevated-secondary`,
          children: (0, X.jsx)(Re, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Pn,
  Fn,
  X,
  In,
  Ln = e(() => {
    ((Pn = Je()),
      (Fn = t(u(), 1)),
      H(),
      Mt(),
      W(),
      D(),
      we(),
      E(),
      Wt(),
      en(),
      (X = Ve()),
      (In = vt({
        workingTree: {
          id: `composer.remote.localWorkingTree`,
          defaultMessage: `Use local changes`,
          description: `Label for local working tree selection in remote composer`,
        },
        directFollowUp: {
          id: `composer.remote.directFollowUp`,
          defaultMessage: `Don't use local changes`,
          description: `Label for direct follow-up selection in remote composer`,
        },
      })));
  });
function Rn() {
  let e = (0, zn.c)(2),
    { data: t } = g(Bn);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(f, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(A, {
          tooltipContent: n,
          children: (0, Z.jsx)(Ke, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, Z.jsx)(Be, { className: `text-warning`, "aria-hidden": !1, asset: on }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var zn,
  Z,
  Bn,
  Vn = e(() => {
    ((zn = Je()),
      an(),
      L(),
      H(),
      c(),
      K(),
      D(),
      nt(),
      ue(),
      G(),
      (Z = Ve()),
      (Bn = Le(Te, `has-custom-cli-executable`, { staleTime: gt.FIVE_SECONDS })));
  });
function Hn(e) {
  let t = (0, Wn.c)(54),
    { composerMode: n } = e,
    r = o(s),
    a = z(),
    c = ee(),
    l = qe(),
    u = g(tn),
    d = F(j, u?.hostId ?? `local`),
    m = g(!1),
    h = g(!1),
    _ = g(null),
    [v, y] = (0, Gn.useState)(!1),
    [b, x] = (0, Gn.useState)(null),
    [S, C] = (0, Gn.useState)(null),
    w = n === `worktree` ? `worktree` : `local`,
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(f, {
        id: `composer.newTask.local`,
        defaultMessage: `Local`,
        description: `Run a new task on this computer`,
      })),
      (t[0] = E))
    : (E = t[0]);
  let te = E,
    D;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(f, {
        id: `composer.newTask.cloud`,
        defaultMessage: `Cloud`,
        description: `Cloud execution environments for a new task`,
      })),
      (t[1] = D))
    : (D = t[1]);
  let re = D,
    O = te,
    k;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(rt, {})), (t[2] = k))
    : (k = t[2]);
  let A = k;
  if (h) {
    let e = _?.name ?? re,
      n;
    (t[3] === e
      ? (n = t[4])
      : ((n = (0, Q.jsx)(Q.Fragment, { children: e })), (t[3] = e), (t[4] = n)),
      (O = n));
    let r;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(ke, {})), (t[5] = r))
      : (r = t[5]),
      (A = r));
  } else if (u != null) {
    let e;
    (t[6] === d.display_name
      ? (e = t[7])
      : ((e = (0, Q.jsx)(Q.Fragment, { children: d.display_name })),
        (t[6] = d.display_name),
        (t[7] = e)),
      (O = e));
    let n;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(Pe, {})), (t[8] = n))
      : (n = t[8]),
      (A = n));
  }
  let M;
  t[9] !== r || t[10] !== w
    ? ((M = function (e) {
        r.set(rn, null);
        let t = r.get(ct, r.get(ce))[0];
        Ne(r, p({ hostId: je, cwd: t }), e ? `local` : w);
      }),
      (t[9] = r),
      (t[10] = w),
      (t[11] = M))
    : (M = t[11]);
  let N = M,
    P;
  t[12] !== h || t[13] !== u
    ? ((P = (e) => {
        if ((y(e), e)) {
          let e = null;
          (h ? (e = `cloud`) : u != null && (e = `remote`), x(e));
        }
      }),
      (t[12] = h),
      (t[13] = u),
      (t[14] = P))
    : (P = t[14]);
  let ie;
  t[15] === a
    ? (ie = t[16])
    : ((ie = a.formatMessage({
        id: `composer.newTask.workIn`,
        defaultMessage: `Work in`,
        description: `Menu for choosing where a new task executes`,
      })),
      (t[15] = a),
      (t[16] = ie));
  let I;
  t[17] !== A || t[18] !== ie || t[19] !== O
    ? ((I = (0, Q.jsx)(Zt, {
        "aria-label": ie,
        categoryLabel: null,
        collapse: `xs`,
        icon: A,
        indicator: `none`,
        value: O,
        valueClassName: `max-w-40`,
      })),
      (t[17] = A),
      (t[18] = ie),
      (t[19] = O),
      (t[20] = I))
    : (I = t[20]);
  let L;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(T.SectionLabel, {
        children: (0, Q.jsx)(f, {
          id: `composer.newTask.workIn`,
          defaultMessage: `Work in`,
          description: `Menu for choosing where a new task executes`,
        }),
      })),
      (t[21] = L))
    : (L = t[21]);
  let R = !h && u == null ? Ze : void 0,
    B;
  t[22] === N ? (B = t[23]) : ((B = () => N(!1)), (t[22] = N), (t[23] = B));
  let ae;
  t[24] !== B || t[25] !== R
    ? ((ae = (0, Q.jsx)(T.Item, { LeftIcon: rt, RightIcon: R, onSelect: B, children: te })),
      (t[24] = B),
      (t[25] = R),
      (t[26] = ae))
    : (ae = t[26]);
  let oe;
  t[27] !== m || t[28] !== b ? ((oe = null), (t[27] = m), (t[28] = b), (t[29] = oe)) : (oe = t[29]);
  let se;
  t[30] !== b || t[31] !== c || t[32] !== l || t[33] !== w
    ? ((se = l
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(T.Item, {
                LeftIcon: Pe,
                RightIcon: b === `remote` ? Fe : ze,
                "aria-expanded": b === `remote`,
                onSelect: (e) => {
                  (e.preventDefault(), x(b === `remote` ? null : `remote`));
                },
                children: (0, Q.jsx)(f, {
                  id: `composer.newTask.remote`,
                  defaultMessage: `Remote`,
                  description: `Remote machines for running a new task`,
                }),
              }),
              b === `remote`
                ? (0, Q.jsxs)(`div`, {
                    className: `ps-6`,
                    children: [
                      (0, Q.jsx)(Un, { composerMode: w }),
                      (0, Q.jsx)(T.Item, {
                        RightIcon: ze,
                        onSelect: () => void c(`/settings/connections`),
                        children: (0, Q.jsx)(f, {
                          id: `composer.newTask.moreRemotes`,
                          defaultMessage: `More`,
                          description: `Open all remote connections`,
                        }),
                      }),
                      (0, Q.jsx)(T.Item, {
                        RightIcon: i,
                        onSelect: () => void c(`/settings/connections/ssh/add`),
                        children: (0, Q.jsx)(f, {
                          id: `composer.newTask.addRemote`,
                          defaultMessage: `Add remote`,
                          description: `Add a remote machine for running tasks`,
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          })
        : null),
      (t[30] = b),
      (t[31] = c),
      (t[32] = l),
      (t[33] = w),
      (t[34] = se))
    : (se = t[34]);
  let le;
  t[35] !== v || t[36] !== ae || t[37] !== oe || t[38] !== se || t[39] !== P || t[40] !== I
    ? ((le = (0, Q.jsxs)(ne, {
        open: v,
        onOpenChange: P,
        side: `top`,
        contentWidth: `panel`,
        triggerButton: I,
        children: [L, ae, oe, se],
      })),
      (t[35] = v),
      (t[36] = ae),
      (t[37] = oe),
      (t[38] = se),
      (t[39] = P),
      (t[40] = I),
      (t[41] = le))
    : (le = t[41]);
  let V;
  t[42] !== h || t[43] !== u
    ? ((V = !h && u != null ? (0, Q.jsx)(J, { hostId: u.hostId }) : null),
      (t[42] = h),
      (t[43] = u),
      (t[44] = V))
    : (V = t[44]);
  let H;
  t[45] === S ? (H = t[46]) : ((H = null), (t[45] = S), (t[46] = H));
  let ue;
  t[47] === S ? (ue = t[48]) : ((ue = null), (t[47] = S), (t[48] = ue));
  let de;
  return (
    t[49] !== le || t[50] !== V || t[51] !== H || t[52] !== ue
      ? ((de = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1`,
          children: [le, V, H, ue],
        })),
        (t[49] = le),
        (t[50] = V),
        (t[51] = H),
        (t[52] = ue),
        (t[53] = de))
      : (de = t[53]),
    de
  );
}
function Un(e) {
  let t = (0, Wn.c)(14),
    { composerMode: n } = e,
    r = o(s),
    { workspaces: i, isPending: a } = g(Ut),
    c = g(tn),
    l;
  t[0] === a
    ? (l = t[1])
    : ((l = a
        ? (0, Q.jsx)(T.Message, {
            compact: !0,
            children: (0, Q.jsx)(f, {
              id: `composer.newTask.loadingRemotes`,
              defaultMessage: `Loading remote machines…`,
              description: `Loading remote machines that can run the selected project`,
            }),
          })
        : null),
      (t[0] = a),
      (t[1] = l));
  let u;
  if (t[2] !== n || t[3] !== r || t[4] !== c?.hostId || t[5] !== i) {
    let e;
    (t[7] !== n || t[8] !== r || t[9] !== c?.hostId
      ? ((e = (e) =>
          (0, Q.jsx)(
            T.Item,
            {
              RightIcon: c?.hostId === e.hostId ? Ze : void 0,
              onSelect: () => {
                (r.set(rn, { projectId: e.projectId, hostId: e.hostId }),
                  Ne(
                    r,
                    p({ hostId: e.hostId, cwd: e.rootPaths[0] }),
                    e.projectId == null ? `local` : n,
                  ));
              },
              children: e.displayName,
            },
            e.hostId,
          )),
        (t[7] = n),
        (t[8] = r),
        (t[9] = c?.hostId),
        (t[10] = e))
      : (e = t[10]),
      (u = i.map(e)),
      (t[2] = n),
      (t[3] = r),
      (t[4] = c?.hostId),
      (t[5] = i),
      (t[6] = u));
  } else u = t[6];
  let d;
  return (
    t[11] !== l || t[12] !== u
      ? ((d = (0, Q.jsxs)(Q.Fragment, { children: [l, u] })), (t[11] = l), (t[12] = u), (t[13] = d))
      : (d = t[13]),
    d
  );
}
var Wn,
  Gn,
  Q,
  Kn = e(() => {
    ((Wn = Je()),
      L(),
      (Gn = t(u(), 1)),
      H(),
      S(),
      Et(),
      W(),
      U(),
      m(),
      St(),
      P(),
      ot(),
      k(),
      en(),
      R(),
      w(),
      qt(),
      (Q = Ve()));
  });
function qn(e) {
  let t = (0, Jn.c)(18),
    { composerMode: n, setComposerMode: r, disabled: i } = e,
    a = (0, Yn.useId)(),
    o = g(!1),
    s = g(ce) != null,
    c;
  t[0] !== n || t[1] !== r
    ? ((c = () => {
        r(n === `worktree` ? `local` : `worktree`);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = c))
    : (c = t[2]);
  let l = !i && !o && s,
    u;
  if (
    (t[3] === l ? (u = t[4]) : ((u = { enabled: l }), (t[3] = l), (t[4] = u)),
    zt(`composer.toggleWorktreeMode`, c, u),
    o || !s)
  )
    return null;
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Xn.jsx)(f, {
        id: `composer.newTask.worktree`,
        defaultMessage: `Worktree`,
        description: `Run the new task in a separate git worktree`,
      })),
      (t[5] = d))
    : (d = t[5]);
  let p;
  t[6] === a
    ? (p = t[7])
    : ((p = (0, Xn.jsx)(`label`, { htmlFor: a, children: d })), (t[6] = a), (t[7] = p));
  let m = n === `worktree`,
    h;
  t[8] === r ? (h = t[9]) : ((h = (e) => r(e ? `worktree` : `local`)), (t[8] = r), (t[9] = h));
  let _;
  t[10] !== i || t[11] !== a || t[12] !== m || t[13] !== h
    ? ((_ = (0, Xn.jsx)(et, { id: a, checked: m, disabled: i, onCheckedChange: h })),
      (t[10] = i),
      (t[11] = a),
      (t[12] = m),
      (t[13] = h),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== p || t[16] !== _
      ? ((v = (0, Xn.jsxs)(`div`, {
          className: `relative flex shrink-0 items-center gap-2 pe-2 text-sm select-none`,
          children: [p, _],
        })),
        (t[15] = p),
        (t[16] = _),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
var Jn,
  Yn,
  Xn,
  Zn = e(() => {
    ((Jn = Je()), L(), (Yn = t(u(), 1)), H(), ut(), P(), jt(), (Xn = Ve()));
  });
function Qn(e) {
  let t = (0, er.c)(213),
    {
      asyncThreadStartingState: r,
      variant: i,
      isHidden: c,
      composerMode: u,
      setComposerMode: d,
      isResponseInProgress: p,
      isWorktreeAvailable: m,
      worktreeEnvironmentHostId: h,
      worktreeEnvironmentWorkspaceRoot: y,
      codexHome: b,
      homeAuxiliaryControl: S,
      showRuntimeControls: C,
      hideRunLocationDropdown: w,
      showWorkspaceDropdown: T,
      gitRootForStartingState: E,
      startingStateRepositoryKey: te,
      showUtilityBarBranchWhen: D,
      freeUpsellButton: ne,
      remoteConfig: k,
      activeProjectIdOverride: j,
      localRemoteExecutionTarget: M,
      existingWorkspace: N,
    } = e,
    P = c !== void 0 && c,
    I = o(s);
  o(Te);
  let L = O(),
    R = ee(),
    z = g(l),
    B = g(bt);
  g(Se);
  let se = g(!1),
    ce = g(!1);
  mt();
  let V = $e() === ge,
    H;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = oe()), (t[0] = H)) : (H = t[0]);
  let ue = H,
    fe = u !== `cloud` && z?.type !== `cloud`,
    _e;
  t[1] === I ? (_e = t[2]) : ((_e = x(I)), (t[1] = I), (t[2] = _e));
  let U = _e,
    W = g(Ht) && !V && N == null,
    be = F(a, U),
    xe = U != null && !be,
    Ce = de(U),
    G = M ?? Ce,
    we;
  t[3] !== G.hostConfig || t[4] !== G.hostId
    ? ((we = { hostId: G.hostId, hostConfig: G.hostConfig }),
      (t[3] = G.hostConfig),
      (t[4] = G.hostId),
      (t[5] = we))
    : (we = t[5]);
  let Ee = F(Kt, we),
    De = F(me, U),
    ke = F(ve, U),
    je = F(nr, U),
    Ne = z != null || je,
    Pe = k.currentHostId ?? `local`,
    Fe = z?.type,
    Ie;
  t[6] !== u || t[7] !== Pe || t[8] !== je || t[9] !== Fe
    ? ((Ie = Lt({
        composerMode: u,
        draftRemoteHostId: Pe,
        followUpType: Fe,
        hasStartedBranchConversation: je,
      })),
      (t[6] = u),
      (t[7] = Pe),
      (t[8] = je),
      (t[9] = Fe),
      (t[10] = Ie))
    : (Ie = t[10]);
  let Le = Ie,
    K = Le ? Pe : De,
    Re = F(rr, K === `local` ? null : K),
    ze = Re === `allowed`,
    Ve = Re === `loading`,
    He = !Le && K !== `local`,
    We = F(_, U),
    Ge = F(Qe, U) ?? We,
    q = st(G.hostId) ?? b,
    qe;
  t[11] !== Ge || t[12] !== q
    ? ((qe = he(Ge, q)), (t[11] = Ge), (t[12] = q), (t[13] = qe))
    : (qe = t[13]);
  let Je = qe,
    Xe = N?.workspaceRoot,
    Ze;
  t[14] !== q || t[15] !== Xe
    ? ((Ze = he(Xe, q)), (t[14] = q), (t[15] = Xe), (t[16] = Ze))
    : (Ze = t[16]);
  let et = Ze,
    tt = i === `home`,
    nt = i === `home` && j !== void 0 && j == null,
    rt = C,
    it = nt && se,
    at = it || (rt && !nt),
    ot = pt(`1115442235`),
    ct = Je,
    lt = F(yt, U),
    ut = ye(),
    ht;
  t[17] !== ut || t[18] !== K
    ? ((ht = ut.find((e) => e.hostId === K) ?? null), (t[17] = ut), (t[18] = K), (t[19] = ht))
    : (ht = t[19]);
  let gt = ht,
    _t;
  t[20] !== G.cwd || t[21] !== He || t[22] !== k || t[23] !== K
    ? ((_t = K === `local` ? null : He ? G.cwd : k.getProjectPathForHostId(K)),
      (t[20] = G.cwd),
      (t[21] = He),
      (t[22] = k),
      (t[23] = K),
      (t[24] = _t))
    : (_t = t[24]);
  let vt = _t,
    St;
  t[25] !== k.currentHostId || t[26] !== ut
    ? ((St = ut.find((e) => e.hostId === k.currentHostId) ?? null),
      (t[25] = k.currentHostId),
      (t[26] = ut),
      (t[27] = St))
    : (St = t[27]);
  let Ct = St,
    wt;
  t[28] === k
    ? (wt = t[29])
    : ((wt = k.getProjectPathForHostId(k.currentHostId)), (t[28] = k), (t[29] = wt));
  let Tt = wt;
  (gt?.displayName, Ct?.displayName);
  let Et = K === `local` ? null : (gt?.displayName ?? null),
    Dt;
  t[30] !== K || t[31] !== Et || t[32] !== vt
    ? ((Dt = { hostId: K, connectionDisplayName: Et, projectPath: vt }),
      (t[30] = K),
      (t[31] = Et),
      (t[32] = vt),
      (t[33] = Dt))
    : (Dt = t[33]);
  let At = Ct?.displayName ?? null,
    jt;
  t[34] !== k.currentHostId || t[35] !== Tt || t[36] !== At
    ? ((jt = { hostId: k.currentHostId, connectionDisplayName: At, projectPath: Tt }),
      (t[34] = k.currentHostId),
      (t[35] = Tt),
      (t[36] = At),
      (t[37] = jt))
    : (jt = t[37]);
  let Mt;
  t[38] !== Ne || t[39] !== Dt || t[40] !== jt
    ? ((Mt = {
        isAttachedToStartedTask: Ne,
        existingRemoteThreadState: Dt,
        draftNewThreadRemoteSelectionState: jt,
      }),
      (t[38] = Ne),
      (t[39] = Dt),
      (t[40] = jt),
      (t[41] = Mt))
    : (Mt = t[41]);
  let Nt = Mt,
    J = G.hostConfig,
    Ft;
  t[42] === J
    ? (Ft = t[43])
    : ((Ft = { hostConfig: J, operationSource: `composer_content` }), (t[42] = J), (t[43] = Ft));
  let { data: It, isLoading: Bt } = F(pe, Ft),
    Vt = ((It?.available === !0 && fe) || Ee) && !xe ? G.cwd : null,
    Ut;
  t[44] !== Vt || t[45] !== J
    ? ((Ut = Vt == null ? null : { cwd: Vt, hostConfig: J }),
      (t[44] = Vt),
      (t[45] = J),
      (t[46] = Ut))
    : (Ut = t[46]);
  let Wt = Ut,
    Gt = g(dt),
    qt;
  t[47] === Gt
    ? (qt = t[48])
    : ((qt = { enabled: !0, retainRepoWatch: Gt, watchForGitInit: !1 }),
      (t[47] = Gt),
      (t[48] = qt));
  let { data: Jt, isLoading: Yt } = ie(Wt, `composer_content`, qt),
    Zt = Yt || (fe && G.cwd != null && Vt == null && Bt),
    $t;
  t[49] !== Vt || t[50] !== J
    ? (($t = { cwd: Vt, hostConfig: J, showErrorToast: !0 }),
      (t[49] = Vt),
      (t[50] = J),
      (t[51] = $t))
    : ($t = t[51]);
  let { canCreateGitRepository: en, createGitRepository: tn, isCreatingGitRepository: nn } = ln($t),
    an = Vt != null && Jt != null,
    on = fe && ze && an && Jt?.root == null,
    sn = !en || nn || !an || Yt,
    un = on ? null : ne,
    fn = u === `worktree` && !0,
    pn = fn ? y : null,
    mn;
  t[52] !== pn || t[53] !== h
    ? ((mn = { hostId: h, workspaceRoot: pn }), (t[52] = pn), (t[53] = h), (t[54] = mn))
    : (mn = t[54]);
  let {
      environments: hn,
      isLoading: yn,
      isFetching: bn,
      error: wn,
      resolvedConfigPath: Tn,
      repairConfigPath: En,
      updateSelection: On,
    } = v(mn),
    kn;
  t[55] !== wn ||
  t[56] !== bn ||
  t[57] !== yn ||
  t[58] !== L ||
  t[59] !== R ||
  t[60] !== I ||
  t[61] !== h ||
  t[62] !== y ||
  t[63] !== hn
    ? ((kn = (e) => {
        if ((Ye(I, h), e == null && (yn || bn || wn != null || hn.length > 0))) {
          let e = new URLSearchParams({ workspaceRoot: y });
          R(`/settings/local-environments?${e.toString()}`);
          return;
        }
        R(Oe({ configPath: e, workspaceRoot: y }), {
          state: { hostId: h, returnTo: `${L.pathname}${L.search}${L.hash}` },
        });
      }),
      (t[55] = wn),
      (t[56] = bn),
      (t[57] = yn),
      (t[58] = L),
      (t[59] = R),
      (t[60] = I),
      (t[61] = h),
      (t[62] = y),
      (t[63] = hn),
      (t[64] = kn))
    : (kn = t[64]);
  let Y = kn,
    An;
  t[65] !== z ||
  t[66] !== Y ||
  t[67] !== wn ||
  t[68] !== bn ||
  t[69] !== yn ||
  t[70] !== Tn ||
  t[71] !== fn ||
  t[72] !== On ||
  t[73] !== En ||
  t[74] !== y ||
  t[75] !== hn
    ? ((An =
        !z && fn
          ? (0, $.jsx)(vn, {
              environments: hn,
              isLoading: yn || (bn && hn.length === 0),
              hasError: wn != null,
              selectedConfigPath: Tn,
              repairConfigPath: En,
              onSelectConfigPath: On,
              onOpenSettings: Y,
              workspaceRoot: y,
            })
          : null),
      (t[65] = z),
      (t[66] = Y),
      (t[67] = wn),
      (t[68] = bn),
      (t[69] = yn),
      (t[70] = Tn),
      (t[71] = fn),
      (t[72] = On),
      (t[73] = En),
      (t[74] = y),
      (t[75] = hn),
      (t[76] = An))
    : (An = t[76]);
  let jn = An,
    Nn;
  t[77] !== r ||
  t[78] !== u ||
  t[79] !== z ||
  t[80] !== E ||
  t[81] !== J ||
  t[82] !== I ||
  t[83] !== te
    ? ((Nn =
        !z && (u === `cloud` || u === `worktree`)
          ? (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(_n, {
                startingState: r,
                setStartingState: (e) => {
                  if (u === `worktree`) {
                    n(I, e, te);
                    return;
                  }
                  Ue(I, `asyncThreadStartingState`, e);
                },
                hostConfig: J,
                gitRootOverride: E,
                branchSource: u === `worktree` ? `worktree` : `cloud`,
              }),
            })
          : null),
      (t[77] = r),
      (t[78] = u),
      (t[79] = z),
      (t[80] = E),
      (t[81] = J),
      (t[82] = I),
      (t[83] = te),
      (t[84] = Nn))
    : (Nn = t[84]);
  let Pn = Nn,
    Fn;
  t[85] !== lt || t[86] !== U || t[87] !== G.cwd || t[88] !== Je || t[89] !== ot
    ? ((Fn =
        ot && Rt({ isCompactWindow: ue }) && U != null && G.cwd != null
          ? { conversationTitle: lt, cwd: Me(G.cwd), isWorktreeConversation: Je }
          : null),
      (t[85] = lt),
      (t[86] = U),
      (t[87] = G.cwd),
      (t[88] = Je),
      (t[89] = ot),
      (t[90] = Fn))
    : (Fn = t[90]);
  let X = Fn,
    In = U != null && K !== `local` && ke?.role === `follower`,
    Ln = (D === `always` || u === `local`) && (ze || Ve) && !In && !xe;
  Jt?.root;
  let zn;
  t[91] !== U ||
  t[92] !== G.cwd ||
  t[93] !== N ||
  t[94] !== Jt?.root ||
  t[95] !== J ||
  t[96] !== Zt ||
  t[97] !== Ve ||
  t[98] !== ze ||
  t[99] !== K ||
  t[100] !== on ||
  t[101] !== Ln
    ? ((zn =
        Ln && !on
          ? (0, $.jsx)(
              gn,
              {
                gitRoot: ze ? (Jt?.root ?? null) : null,
                hostConfig: J,
                localConversationId: U,
                isLoading: Zt || Ve,
                isReadOnly: N != null,
                revalidateBranchSelection: void 0,
                shouldShow: !0,
                align: `start`,
              },
              `${J.id}:${G.cwd ?? ``}`,
            )
          : null),
      (t[91] = U),
      (t[92] = G.cwd),
      (t[93] = N),
      (t[94] = Jt?.root),
      (t[95] = J),
      (t[96] = Zt),
      (t[97] = Ve),
      (t[98] = ze),
      (t[99] = K),
      (t[100] = on),
      (t[101] = Ln),
      (t[102] = zn))
    : (zn = t[102]);
  let Z = zn,
    Bn = null;
  if (W) {
    let e;
    (t[103] === u
      ? (e = t[104])
      : ((e = (0, $.jsx)(Hn, { composerMode: u })), (t[103] = u), (t[104] = e)),
      (Bn = e));
  } else {
    let e;
    (t[105] !== u ||
    t[106] !== U ||
    t[107] !== N ||
    t[108] !== z ||
    t[109] !== w ||
    t[110] !== et ||
    t[111] !== p ||
    t[112] !== m ||
    t[113] !== M ||
    t[114] !== Nt ||
    t[115] !== q ||
    t[116] !== d ||
    t[117] !== it ||
    t[118] !== ct ||
    t[119] !== X
      ? ((e =
          N != null && u === `local`
            ? (0, $.jsx)(A, {
                tooltipContent: (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    N.sourceConversationTitle == null
                      ? null
                      : (0, $.jsx)(f, {
                          id: `composer.existingWorkspace.fromTask`,
                          defaultMessage: `From {taskTitle}`,
                          description: `Source task shown in the existing workspace tooltip`,
                          values: { taskTitle: N.sourceConversationTitle },
                        }),
                    (0, $.jsx)(`span`, {
                      className: `font-mono text-xs break-all`,
                      children: N.workspaceRoot,
                    }),
                  ],
                }),
                tooltipMaxWidth: `min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
                triggerAsChild: !1,
                children: (0, $.jsx)(dn, {
                  categoryLabel: null,
                  collapse: `xs`,
                  icon: et
                    ? (0, $.jsx)(Be, { "aria-hidden": !1, asset: cn })
                    : (0, $.jsx)(Be, { "aria-hidden": !1, asset: ae }),
                  value: et
                    ? (0, $.jsx)(f, {
                        id: `composer.existingWorktree.label`,
                        defaultMessage: `Existing worktree · {worktree}`,
                        description: `Label shown when a new task starts in an existing worktree`,
                        values: { worktree: Cn({ codexHome: q, worktreePath: N.workspaceRoot }) },
                      })
                    : (0, $.jsx)(f, {
                        id: `composer.existingWorkspace.label`,
                        defaultMessage: `Existing workspace`,
                        description: `Label shown when a new task starts in an existing local workspace`,
                      }),
                  valueClassName: `max-w-60 text-sm`,
                }),
              })
            : z?.type === `cloud`
              ? (0, $.jsx)(Dn, { composerMode: u, setComposerMode: d })
              : (0, $.jsx)(Sn, {
                  composerMode: u,
                  setComposerMode: d,
                  conversationId: U,
                  executionTargetOverride: M,
                  remoteSelectionState: Nt,
                  isWorktreeAvailable: m,
                  disabled: ct,
                  hideModeDropdown: w && !it,
                  allowWorktree: !z && !p,
                  threadHandoff: X,
                  worktreeLabelOnly: ct,
                })),
        (t[105] = u),
        (t[106] = U),
        (t[107] = N),
        (t[108] = z),
        (t[109] = w),
        (t[110] = et),
        (t[111] = p),
        (t[112] = m),
        (t[113] = M),
        (t[114] = Nt),
        (t[115] = q),
        (t[116] = d),
        (t[117] = it),
        (t[118] = ct),
        (t[119] = X),
        (t[120] = e))
      : (e = t[120]),
      (Bn = e));
  }
  let Vn;
  t[121] !== u || t[122] !== z || t[123] !== !1 || t[124] !== W || t[125] !== T
    ? ((Vn = (W || T) && Ot(u) && !z),
      (t[121] = u),
      (t[122] = z),
      (t[123] = !1),
      (t[124] = W),
      (t[125] = T),
      (t[126] = Vn))
    : (Vn = t[126]);
  let Un = Vn,
    [Wn, Gn] = (0, tr.useState)(!1),
    Q = F(re, `composer.openProjectPicker`),
    Kn;
  t[127] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kn = () => {
        Gn(!0);
      }),
      (t[127] = Kn))
    : (Kn = t[127]);
  let Jn;
  (t[128] === Un ? (Jn = t[129]) : ((Jn = { enabled: Un }), (t[128] = Un), (t[129] = Jn)),
    zt(`composer.openProjectPicker`, Kn, Jn));
  let Yn;
  t[130] !== j ||
  t[131] !== Wn ||
  t[132] !== V ||
  t[133] !== Q ||
  t[134] !== I ||
  t[135] !== W ||
  t[136] !== Un ||
  t[137] !== i
    ? ((Yn = Un
        ? (0, $.jsx)($.Fragment, {
            children: V
              ? (0, $.jsx)(Pt, {
                  menuOpen: Wn,
                  onMenuOpenChange: Gn,
                  projectId: j,
                  shortcut: Q,
                  subtleHover: i === `home`,
                })
              : (0, $.jsx)(Xt, {
                  activeProjectIdOverride: j,
                  allowLocalProjectActions: !0,
                  allowRemoteProjects: !W,
                  onProjectSelected: W
                    ? (e) => {
                        (I.set(rn, null),
                          xt(I, e == null ? null : { projectKind: `local`, projectId: e }));
                      }
                    : void 0,
                  isOpen: Wn,
                  onOpenChange: Gn,
                  shortcut: Q,
                  variant: i === `home` ? `home` : `default`,
                }),
          })
        : null),
      (t[130] = j),
      (t[131] = Wn),
      (t[132] = V),
      (t[133] = Q),
      (t[134] = I),
      (t[135] = W),
      (t[136] = Un),
      (t[137] = i),
      (t[138] = Yn))
    : (Yn = t[138]);
  let Xn = Yn,
    Zn;
  t[139] !== u || t[140] !== z || t[141] !== un
    ? ((Zn = !!z || !1), (t[139] = u), (t[140] = z), (t[141] = un), (t[142] = Zn))
    : (Zn = t[142]);
  let Qn = Zn,
    ir;
  t[143] === Qn
    ? (ir = t[144])
    : ((ir = Qn ? (0, $.jsx)(Rn, {}) : null), (t[143] = Qn), (t[144] = ir));
  let ar = ir,
    or;
  t[145] !== B || t[146] !== u || t[147] !== z || t[148] !== I
    ? ((or =
        u === `cloud` && z?.type === `cloud` && z.hasAppliedCodeLocally
          ? (0, $.jsx)(Mn, {
              startingState: B,
              setStartingState: (e) => {
                Ue(I, `followUpCloudStartingState`, e);
              },
            })
          : null),
      (t[145] = B),
      (t[146] = u),
      (t[147] = z),
      (t[148] = I),
      (t[149] = or))
    : (or = t[149]);
  let sr = or,
    cr = Le ? Nt.draftNewThreadRemoteSelectionState : Nt.existingRemoteThreadState,
    lr;
  t[150] !== tn || t[151] !== sn || t[152] !== nn || t[153] !== on || t[154] !== Ln
    ? ((lr =
        Ln && on
          ? (0, $.jsxs)(Ke, {
              className: `px-0`,
              color: `ghost`,
              size: `composerSm`,
              disabled: sn,
              onClick: () => {
                sn || tn();
              },
              children: [
                (0, $.jsx)(Be, { "aria-hidden": !1, asset: Ae }),
                (0, $.jsx)(kt, {
                  collapse: `sm`,
                  className: `max-w-40 truncate text-sm`,
                  children: nn
                    ? (0, $.jsx)(f, {
                        id: `codex.review.noDiff.gitInit.creating`,
                        defaultMessage: `Creating…`,
                        description: `Button label shown while git init is running from the diff empty state`,
                      })
                    : (0, $.jsx)(f, {
                        id: `codex.review.noDiff.gitInit.createRepository`,
                        defaultMessage: `Create git repository`,
                        description: `Button label to create a git repository from the diff empty state`,
                      }),
                }),
              ],
            })
          : null),
      (t[150] = tn),
      (t[151] = sn),
      (t[152] = nn),
      (t[153] = on),
      (t[154] = Ln),
      (t[155] = lr))
    : (lr = t[155]);
  let ur = lr,
    dr = u === `local` && cr.hostId != null && cr.hostId !== `local`,
    fr;
  t[156] !== dr || t[157] !== cr
    ? ((fr = dr
        ? (0, $.jsx)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: (0, $.jsx)($n, {
              hostId: cr.hostId,
              connectionDisplayName: cr.connectionDisplayName,
              projectPath: cr.projectPath,
            }),
          })
        : null),
      (t[156] = dr),
      (t[157] = cr),
      (t[158] = fr))
    : (fr = t[158]);
  let pr = fr,
    mr;
  t[159] !== u || t[160] !== U || t[161] !== d || t[162] !== ct
    ? ((mr =
        u === `cloud`
          ? (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(xn, {
                composerMode: u,
                conversationId: U,
                disabled: ct,
                setComposerMode: d,
              }),
            })
          : null),
      (t[159] = u),
      (t[160] = U),
      (t[161] = d),
      (t[162] = ct),
      (t[163] = mr))
    : (mr = t[163]);
  let hr = mr,
    gr = null;
  if (!W) {
    let e;
    (t[164] !== Pn ||
    t[165] !== Z ||
    t[166] !== hr ||
    t[167] !== sr ||
    t[168] !== ce ||
    t[169] !== u ||
    t[170] !== z ||
    t[171] !== Tn ||
    t[172] !== jn
      ? ((e = (0, $.jsxs)($.Fragment, {
          children: [
            Z,
            z?.type === `cloud` ? sr : (0, $.jsxs)($.Fragment, { children: [hr, jn, Pn, null] }),
          ],
        })),
        (t[164] = Pn),
        (t[165] = Z),
        (t[166] = hr),
        (t[167] = sr),
        (t[168] = ce),
        (t[169] = u),
        (t[170] = z),
        (t[171] = Tn),
        (t[172] = jn),
        (t[173] = e))
      : (e = t[173]),
      (gr = e));
  }
  let _r;
  t[174] !== Z ||
  t[175] !== sr ||
  t[176] !== z?.type ||
  t[177] !== gr ||
  t[178] !== Bn ||
  t[179] !== i
    ? ((_r =
        z?.type === `cloud`
          ? (0, $.jsxs)($.Fragment, {
              children: [i === `home` ? Z : null, Bn, i === "default" ? Z : null, sr],
            })
          : (0, $.jsxs)($.Fragment, { children: [Bn, gr] })),
      (t[174] = Z),
      (t[175] = sr),
      (t[176] = z?.type),
      (t[177] = gr),
      (t[178] = Bn),
      (t[179] = i),
      (t[180] = _r))
    : (_r = t[180]);
  let vr = _r,
    yr = i === `home` || W ? Xn : null,
    br = i === `home` ? S : null,
    xr = W || rt ? vr : null,
    Sr = i === "default" && !W ? Xn : null,
    Cr;
  t[181] !== yr || t[182] !== br || t[183] !== xr || t[184] !== Sr
    ? ((Cr = (0, $.jsxs)($.Fragment, { children: [yr, br, xr, Sr] })),
      (t[181] = yr),
      (t[182] = br),
      (t[183] = xr),
      (t[184] = Sr),
      (t[185] = Cr))
    : (Cr = t[185]);
  let wr = Cr,
    Tr = W || at ? Bn : null,
    Er = at ? gr : null,
    Dr;
  t[186] !== S || t[187] !== Tr || t[188] !== Er || t[189] !== Xn
    ? ((Dr = (0, $.jsxs)($.Fragment, { children: [Xn, S, Tr, Er] })),
      (t[186] = S),
      (t[187] = Tr),
      (t[188] = Er),
      (t[189] = Xn),
      (t[190] = Dr))
    : (Dr = t[190]);
  let Or = Dr,
    kr = !!(pr ?? ur ?? (un || ar)),
    Ar = null;
  if (W) {
    let e = !m || p,
      n;
    (t[191] !== u || t[192] !== d || t[193] !== e
      ? ((n = (0, $.jsx)(qn, { composerMode: u, setComposerMode: d, disabled: e })),
        (t[191] = u),
        (t[192] = d),
        (t[193] = e),
        (t[194] = n))
      : (n = t[194]),
      (Ar = n));
  } else if (rt && kr) {
    let e = i === `home` && `pe-2`,
      n;
    t[195] === e
      ? (n = t[196])
      : ((n = le(`flex min-w-0 shrink-0 items-center gap-3`, e)), (t[195] = e), (t[196] = n));
    let r;
    (t[197] !== ur || t[198] !== ar || t[199] !== pr || t[200] !== n || t[201] !== un
      ? ((r = (0, $.jsxs)(`div`, { className: n, children: [pr, ur, un, ar] })),
        (t[197] = ur),
        (t[198] = ar),
        (t[199] = pr),
        (t[200] = n),
        (t[201] = un),
        (t[202] = r))
      : (r = t[202]),
      (Ar = r));
  }
  if (i === `home`) {
    let e = tt ? Or : wr,
      n;
    return (
      t[204] !== P || t[205] !== e || t[206] !== Ar
        ? ((n = (0, $.jsx)(Qt, { isHidden: P, trailingControls: Ar, children: e })),
          (t[204] = P),
          (t[205] = e),
          (t[206] = Ar),
          (t[207] = n))
        : (n = t[207]),
      n
    );
  }
  let jr;
  t[208] === wr
    ? (jr = t[209])
    : ((jr = (0, $.jsx)(`div`, {
        className: `flex min-w-0 flex-1 flex-nowrap items-center gap-0`,
        children: wr,
      })),
      (t[208] = wr),
      (t[209] = jr));
  let Mr;
  return (
    t[210] !== jr || t[211] !== Ar
      ? ((Mr = (0, $.jsxs)(ft, {
          className: `flex flex-wrap items-center gap-2 overflow-visible ps-2 pe-2`,
          children: [jr, Ar],
        })),
        (t[210] = jr),
        (t[211] = Ar),
        (t[212] = Mr))
      : (Mr = t[212]),
    Mr
  );
}
function $n(e) {
  let t = (0, er.c)(11),
    { hostId: n, connectionDisplayName: r, projectPath: i } = e;
  if (n == null) return null;
  let a = i == null,
    o = r ?? n,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = (0, $.jsx)(`span`, { className: `max-w-40 min-w-0 truncate`, children: o })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n ? (c = t[3]) : ((c = (0, $.jsx)(J, { hostId: n })), (t[2] = n), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, $.jsxs)(kt, {
        collapse: `sm`,
        "data-composer-footer-layout": `inline`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== i || t[8] !== a || t[9] !== l
      ? ((u = (0, $.jsx)(A, { tooltipContent: i, disabled: a, children: l })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var er, tr, $, nr, rr;
e(() => {
  ((er = Je()),
    sn(),
    Ie(),
    I(),
    wt(),
    L(),
    d(),
    (tr = t(u(), 1)),
    H(),
    S(),
    Et(),
    lt(),
    _e(),
    xe(),
    c(),
    K(),
    D(),
    b(),
    un(),
    Ge(),
    M(),
    _t(),
    ht(),
    N(),
    se(),
    te(),
    tt(),
    nt(),
    St(),
    V(),
    B(),
    be(),
    k(),
    Ee(),
    Xe(),
    r(),
    En(),
    fn(),
    yn(),
    jn(),
    Ln(),
    q(),
    We(),
    Nt(),
    Jt(),
    Yt(),
    It(),
    pn(),
    hn(),
    w(),
    Vn(),
    Vt(),
    $t(),
    bn(),
    nn(),
    Kn(),
    qt(),
    Zn(),
    Tt(),
    jt(),
    mn(),
    ($ = Ve()),
    (nr = He(Te, (e, { get: t }) => {
      let n = t(Ce, e) ?? 0,
        r = t(Ct, e) ?? 0;
      return n > 0 || r > 0;
    })),
    (rr = He(Te, (e, { get: t }) => `allowed`)));
})();
export { Qn as ComposerUtilityBar };
//# sourceMappingURL=composer-utility-bar-85736f3cc588.js.map
