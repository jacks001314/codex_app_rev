import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $kt as r,
  A3t as i,
  AKt as a,
  AMt as o,
  Amn as s,
  B6t as c,
  BO as l,
  BP as u,
  BS as d,
  Bc as f,
  Bkt as p,
  CJt as m,
  CMt as h,
  CW as g,
  Cpn as _,
  D$t as v,
  Dc as y,
  Eln as b,
  F3t as x,
  FKt as S,
  Fc as C,
  Gc as w,
  Gkt as T,
  Hc as E,
  Hu as D,
  IP as O,
  IXt as k,
  Ic as A,
  JG as j,
  JS as M,
  Jit as N,
  Jrt as ee,
  KG as P,
  KS as te,
  KXt as ne,
  Kit as re,
  Lc as ie,
  Lkt as ae,
  Llt as oe,
  M6t as se,
  MMt as ce,
  Mc as le,
  N3t as ue,
  N6t as de,
  NKt as fe,
  Nc as pe,
  O3t as F,
  OL as me,
  OW as he,
  Opn as I,
  P6t as ge,
  Pc as _e,
  QG as ve,
  QXt as ye,
  Qu as L,
  RKt as R,
  RS as be,
  Rc as xe,
  Rpn as Se,
  S3t as Ce,
  SJt as we,
  Sln as z,
  Spn as B,
  TJt as Te,
  TW as Ee,
  UP as De,
  Uc as Oe,
  VS as ke,
  Vc as Ae,
  Vu as V,
  Wc as je,
  XS as Me,
  Xdt as Ne,
  Xrt as Pe,
  Xu as Fe,
  YXt as Ie,
  Ykt as Le,
  Yrt as Re,
  ZG as ze,
  Zrt as Be,
  Zu as H,
  _H as Ve,
  a3t as He,
  aAt as Ue,
  aYt as We,
  bln as Ge,
  d3t as Ke,
  dbt as qe,
  dc as Je,
  e0t as Ye,
  eZt as Xe,
  eit as Ze,
  gH as Qe,
  hmn as U,
  hq as $e,
  iAt as et,
  ic as tt,
  iit as nt,
  irn as rt,
  jKt as it,
  jMt as at,
  jXt as ot,
  jc as st,
  kL as ct,
  kMt as W,
  kW as lt,
  kXt as ut,
  kmn as G,
  lc as dt,
  llt as ft,
  mi as pt,
  nln as mt,
  o3t as ht,
  oAt as gt,
  oYt as _t,
  oc as vt,
  pc as yt,
  pi as bt,
  qS as xt,
  qnt as St,
  qu as K,
  rit as Ct,
  rq as wt,
  s3t as Tt,
  sAt as Et,
  sYt as Dt,
  sq as Ot,
  tAt as kt,
  tit as At,
  uYt as jt,
  ubt as Mt,
  uc as Nt,
  uq as Pt,
  vc as Ft,
  vpn as It,
  vrt as Lt,
  wJt as Rt,
  wMt as zt,
  wW as Bt,
  xc as Vt,
  zO as Ht,
  zc as Ut,
  zpn as Wt,
} from "./app-initial-f094ef01c64d.js";
import {
  A_ as Gt,
  Ah as Kt,
  B_ as qt,
  Bg as Jt,
  Eh as Yt,
  F_ as Xt,
  G_ as Zt,
  Gg as Qt,
  Hg as $t,
  Kg as en,
  O_ as tn,
  P_ as nn,
  Sg as rn,
  Th as an,
  U_ as on,
  Ug as sn,
  Vg as cn,
  Wg as ln,
  X_ as un,
  Xg as dn,
  Y_ as fn,
  Yg as pn,
  __ as mn,
  bg as hn,
  c_ as gn,
  d_ as _n,
  i_ as vn,
  j_ as yn,
  jh as bn,
  l_ as xn,
  p_ as Sn,
  q_ as Cn,
  r_ as wn,
  u_ as Tn,
  v_ as En,
  wg as Dn,
  xg as On,
  z_ as kn,
} from "./app-primary-4c40d73a1074.js";
import { a as An, i as jn, r as Mn, t as Nn } from "./entry-point-availability-5cc8d92da9e6.js";
import { r as Pn, t as Fn } from "./pricing-a70e18580c5f.js";
import { a as In, t as Ln } from "./queries-82a0d88b0673.js";
import { n as Rn, t as zn } from "./settings-loading-row-de4ab81779d6.js";
import { r as Bn, t as Vn } from "./esm-14f726ca820a.js";
import { a as Hn, r as Un } from "./dialog-formatting-fc43957278e1.js";
import { n as Wn, r as Gn } from "./linked-app-logo-d20801ff95ab.js";
function q(e) {
  return e == null ? `` : e.trim();
}
function Kn({ rechargeThreshold: e, rechargeTarget: t, maximumQuantity: n = _n, serverState: r }) {
  let i = Zn(e),
    a = Zn(t),
    o = Qn(i),
    s = $n({
      parsedThreshold: i,
      parsedTarget: a,
      maximumQuantity: n,
      shouldEnforceMaximum: r == null || !r.isEnabled || q(t) !== q(r.rechargeTarget),
    });
  return { rechargeThresholdError: o, rechargeTargetError: s, isValid: o == null && s == null };
}
function qn({ draftState: e, serverState: t, isSaving: n, maximumQuantity: r = _n }) {
  let i = Kn({
      rechargeThreshold: e.rechargeThreshold,
      rechargeTarget: e.rechargeTarget,
      maximumQuantity: r,
      serverState: t,
    }),
    a = Yn({ draftState: e, serverState: t }),
    o = Jn({ draftState: e, serverState: t, validation: i });
  return { validation: i, hasChanges: a, saveIntent: o, isSaveEnabled: a && o !== `none` && !n };
}
function Jn({ draftState: e, serverState: t, validation: n }) {
  return e.isEnabled
    ? n.isValid
      ? t.isEnabled
        ? q(e.rechargeThreshold) === q(t.rechargeThreshold) &&
          q(e.rechargeTarget) === q(t.rechargeTarget)
          ? `none`
          : `update`
        : `enable`
      : `none`
    : t.isEnabled
      ? `disable`
      : `none`;
}
function Yn({ draftState: e, serverState: t }) {
  return e.isEnabled === t.isEnabled
    ? !e.isEnabled && !t.isEnabled
      ? !1
      : q(e.rechargeThreshold) !== q(t.rechargeThreshold) ||
        q(e.rechargeTarget) !== q(t.rechargeTarget)
    : !0;
}
function Xn({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = q(e),
    r = q(t);
  if (!/^\d+$/.test(n) || !/^\d+$/.test(r)) return null;
  let i = Number.parseInt(n, 10),
    a = Number.parseInt(r, 10);
  return a < i ? null : a - i;
}
function Zn(e) {
  let t = q(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function Qn(e) {
  switch (e.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.value < 125 ? `below-threshold-minimum` : null;
  }
}
function $n({ parsedThreshold: e, parsedTarget: t, maximumQuantity: n, shouldEnforceMaximum: r }) {
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.kind === `valid` && t.value - e.value < 125
        ? `target-difference-too-small`
        : r && t.value > n
          ? `above-maximum`
          : null;
  }
}
var er = e(() => {
  tn();
});
function tr() {
  let e = (0, zr.c)(10),
    t = jt(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { enabled: !0 }), (e[0] = n))
    : (n = e[0]);
  let { data: r, isLoading: i } = st(n),
    a;
  e[1] !== r || e[2] !== i || e[3] !== t
    ? ((a = i ? void 0 : (r ?? t.getContext().user?.country ?? null)),
      (e[1] = r),
      (e[2] = i),
      (e[3] = t),
      (e[4] = a))
    : (a = e[4]);
  let o = a,
    s;
  e[5] === o ? (s = e[6]) : ((s = { billingCurrency: o, enabled: !0 }), (e[5] = o), (e[6] = s));
  let { data: c, isLoading: l } = le(s),
    u = i || l,
    d;
  return (
    e[7] !== c || e[8] !== u
      ? ((d = { creditPricingInfo: c, isCreditPricingLoading: u }),
        (e[7] = c),
        (e[8] = u),
        (e[9] = d))
      : (d = e[9]),
    d
  );
}
function nr(e) {
  let t = (0, zr.c)(2),
    { discountPercent: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, J.jsx)(Qe, {
          className: `shrink-0 select-none`,
          variant: `promotion`,
          children: (0, J.jsx)(_, {
            id: `settings.usage.credit.balance.discountOffer`,
            defaultMessage: `Up to {discountPercent, number}% off`,
            description: `Badge beside the available credits action showing the highest server-authorized discount; discountPercent is an integer percentage`,
            values: { discountPercent: n },
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function rr(e) {
  let t = (0, zr.c)(17),
    {
      maximumCreditPurchaseDiscountPercent: n,
      forceOneTimePurchase: r,
      hasSavedPaymentMethod: a,
      isAutoReloadEnabled: o,
    } = e,
    s = r !== void 0 && r,
    c = i(He),
    l = jt(),
    u = dn(),
    d = (o || s) && n > 0,
    f = d ? `flex min-w-0 flex-wrap items-center justify-end gap-2` : `contents`,
    p;
  t[0] !== n || t[1] !== d
    ? ((p = d ? (0, J.jsx)(nr, { discountPercent: n }) : null), (t[0] = n), (t[1] = d), (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== s || t[4] !== a || t[5] !== o || t[6] !== u || t[7] !== c || t[8] !== l
    ? ((m = (e) => {
        let t = Je(l, `personal`);
        (yt(c, {
          audience: `personal`,
          checkoutKind: `standalone_credit`,
          entryPoint: `usage_settings_purchase_cta`,
        }),
          u({
            event: e,
            intent: `purchase`,
            ...(s ? { forceOneTimePurchase: !0 } : {}),
            hasSavedPaymentMethod: a,
            isAutoReloadEnabled: o,
            isCustomCheckoutEnabled: t,
            legacyUrl: Wr,
            source: `usage_settings_purchase_cta`,
          }));
      }),
      (t[3] = s),
      (t[4] = a),
      (t[5] = o),
      (t[6] = u),
      (t[7] = c),
      (t[8] = l),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.buyCredits`,
        defaultMessage: `Buy credits`,
        description: `Button label to open the credit purchase flow`,
      })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === m
    ? (g = t[12])
    : ((g = (0, J.jsx)(W, { color: `outline`, size: `toolbar`, onClick: m, children: h })),
      (t[11] = m),
      (t[12] = g));
  let v;
  return (
    t[13] !== f || t[14] !== p || t[15] !== g
      ? ((v = (0, J.jsxs)(`div`, { className: f, children: [p, g] })),
        (t[13] = f),
        (t[14] = p),
        (t[15] = g),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
function ir(e) {
  let t = (0, zr.c)(2);
  if (!Mn()) return null;
  let n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.giftCredits.description`,
        defaultMessage: `Buy credits for someone else`,
        description: `Label for the dedicated gift-credit row in the Codex Usage and billing credits balance section. It distinguishes purchasing credits for another person from buying credits for the current account`,
      })),
      (t[0] = n))
    : (n = t[0]);
  let r;
  return (
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsx)(K, {
          label: n,
          control: (0, J.jsx)(W, {
            color: `outline`,
            size: `toolbar`,
            onClick: An,
            children: (0, J.jsx)(_, {
              id: `settings.usage.credit.balance.giftCredits`,
              defaultMessage: `Gift credits`,
              description: `Button in the dedicated gift-credit row of Codex Usage and billing that opens the ChatGPT gift credits purchase flow`,
            }),
          }),
        })),
        (t[1] = r))
      : (r = t[1]),
    r
  );
}
function ar(e) {
  let t = (0, zr.c)(32),
    {
      autoReload: n,
      canPurchaseCredits: r,
      purchaseButton: a,
      maximumCreditPurchaseDiscountPercent: o,
      creditDetails: s,
      hasSavedPaymentMethod: c,
      isBusinessWorkspace: l,
    } = e,
    u = r !== void 0 && r,
    d = l !== void 0 && l,
    f = i(He),
    p = I(),
    { accountId: m } = qe(),
    { data: h, isLoading: g } = ue(Oe, d ? m : null),
    { creditPricingInfo: v, isCreditPricingLoading: y } = tr(),
    b = d ? h?.balance : s?.balance,
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, J.jsx)(H.Header, {
        title: (0, J.jsx)(_, {
          id: `settings.usage.credit.balance.title`,
          defaultMessage: `Credits balance`,
          description: `Title for the credits balance section`,
        }),
      })),
      (t[0] = x))
    : (x = t[0]);
  let S = u && o > 0 && `max-md:flex-col max-md:items-stretch`,
    C;
  t[1] === S
    ? (C = t[2])
    : ((C = Se(`flex items-center justify-between gap-4 p-4`, S)), (t[1] = S), (t[2] = C));
  let w = d && b != null ? String(Math.max(0, Number(b))) : b,
    T = !d && s?.unlimited,
    E = y || (d && g),
    D;
  t[3] !== v || t[4] !== w || t[5] !== T || t[6] !== E
    ? ((D = (0, J.jsx)(`div`, {
        className: `text-sm text-default`,
        children: (0, J.jsx)(wr, { balance: w, unlimited: T, pricingInfo: v, isLoading: E }),
      })),
      (t[3] = v),
      (t[4] = w),
      (t[5] = T),
      (t[6] = E),
      (t[7] = D))
    : (D = t[7]);
  let O;
  t[8] === n
    ? (O = t[9])
    : ((O = (0, J.jsx)(`div`, {
        className: `text-sm text-secondary`,
        children:
          n == null
            ? (0, J.jsx)(_, {
                id: `settings.usage.credit.balance.current`,
                defaultMessage: `Current balance`,
                description: `Label below the current credits balance amount`,
              })
            : (0, J.jsx)(_, {
                id: `settings.usage.credit.balance.automaticReload`,
                defaultMessage: `Automatic reload`,
                description: `Label for the one-way automatic credit reload control shown to personal users who can no longer buy credits`,
              }),
      })),
      (t[8] = n),
      (t[9] = O));
  let k;
  t[10] !== O || t[11] !== D
    ? ((k = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [D, O],
      })),
      (t[10] = O),
      (t[11] = D),
      (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] !== u || t[14] !== c || t[15] !== o || t[16] !== a
    ? ((A =
        a ??
        (u
          ? (0, J.jsx)(rr, {
              maximumCreditPurchaseDiscountPercent: o,
              forceOneTimePurchase: !0,
              hasSavedPaymentMethod: c,
              isAutoReloadEnabled: !1,
            })
          : null)),
      (t[13] = u),
      (t[14] = c),
      (t[15] = o),
      (t[16] = a),
      (t[17] = A))
    : (A = t[17]);
  let j;
  t[18] !== n || t[19] !== p || t[20] !== f
    ? ((j =
        n == null
          ? null
          : (0, J.jsx)(ve, {
              ariaLabel: p.formatMessage({
                id: `settings.usage.credit.balance.automaticReload.ariaLabel`,
                defaultMessage: `Toggle automatic reload`,
                description: `Accessible label for the automatic reload switch that lets ineligible personal users disable existing credit reloads`,
              }),
              checked: n.isEnabled,
              disabled: n.isPending || !n.isEnabled,
              onChange: (e) => {
                e ||
                  Promise.resolve(n.onDisable()).catch(() => {
                    f.get(ot).danger(Ir(`disable`, p), Vr);
                  });
              },
            })),
      (t[18] = n),
      (t[19] = p),
      (t[20] = f),
      (t[21] = j))
    : (j = t[21]);
  let M;
  t[22] !== k || t[23] !== A || t[24] !== j || t[25] !== C
    ? ((M = (0, J.jsxs)(`div`, { className: C, children: [k, A, j] })),
      (t[22] = k),
      (t[23] = A),
      (t[24] = j),
      (t[25] = C),
      (t[26] = M))
    : (M = t[26]);
  let N;
  t[27] === u ? (N = t[28]) : ((N = u ? (0, J.jsx)(ir, {}) : null), (t[27] = u), (t[28] = N));
  let ee;
  return (
    t[29] !== M || t[30] !== N
      ? ((ee = (0, J.jsxs)(H, {
          children: [x, (0, J.jsx)(H.Content, { children: (0, J.jsxs)(V, { children: [M, N] }) })],
        })),
        (t[29] = M),
        (t[30] = N),
        (t[31] = ee))
      : (ee = t[31]),
    ee
  );
}
function or(e) {
  let t = (0, zr.c)(51),
    {
      serverState: n,
      hasSavedPaymentMethod: r,
      maximumCreditPurchaseDiscountPercent: i,
      maximumAutoReloadDiscountPercent: a,
      creditDetails: o,
      enableAutoTopUpMutation: s,
      updateAutoTopUpMutation: c,
      disableAutoTopUpMutation: l,
    } = e,
    u = I(),
    { creditPricingInfo: d, isCreditPricingLoading: f } = tr(),
    p = dn(),
    [m, h] = (0, Br.useState)(!1),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.title`,
        defaultMessage: `Credits balance`,
        description: `Title for the credits balance section`,
      })),
      (t[0] = g))
    : (g = t[0]);
  let v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(H.Header, {
        size: `base`,
        title: g,
        subtitle: (0, J.jsx)(_, {
          id: `settings.usage.credit.balance.description`,
          defaultMessage: `Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>`,
          description: `Description for the credits balance section in usage settings`,
          values: { link: sr },
        }),
      })),
      (t[1] = v))
    : (v = t[1]);
  let y = n.isEnabled && i > 0 && `max-md:flex-col max-md:items-stretch`,
    b;
  t[2] === y ? (b = t[3]) : ((b = Se(y)), (t[2] = y), (t[3] = b));
  let x = o?.balance,
    S = o?.unlimited,
    C;
  t[4] !== d || t[5] !== f || t[6] !== x || t[7] !== S
    ? ((C = (0, J.jsx)(wr, { balance: x, unlimited: S, pricingInfo: d, isLoading: f })),
      (t[4] = d),
      (t[5] = f),
      (t[6] = x),
      (t[7] = S),
      (t[8] = C))
    : (C = t[8]);
  let w;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.current`,
        defaultMessage: `Current balance`,
        description: `Label below the current credits balance amount`,
      })),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== r || t[11] !== i || t[12] !== n.isEnabled
    ? ((T = (0, J.jsx)(rr, {
        maximumCreditPurchaseDiscountPercent: i,
        hasSavedPaymentMethod: r,
        isAutoReloadEnabled: n.isEnabled,
      })),
      (t[10] = r),
      (t[11] = i),
      (t[12] = n.isEnabled),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== b || t[15] !== C || t[16] !== T
    ? ((E = (0, J.jsx)(K, { className: b, label: C, description: w, control: T })),
      (t[14] = b),
      (t[15] = C),
      (t[16] = T),
      (t[17] = E))
    : (E = t[17]);
  let D, O;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.autoReloadLabel`,
        defaultMessage: `Automatic reload`,
        description: `Label for the automatic credits reload setting in Usage and billing`,
      })),
      (O = (0, J.jsx)(_, {
        id: `settings.usage.credit.balance.autoReloadDescription`,
        defaultMessage: `Continue working if you hit a limit`,
        description: `Description explaining that automatic credits reload allows users to keep working after reaching a usage limit`,
      })),
      (t[18] = D),
      (t[19] = O))
    : ((D = t[18]), (O = t[19]));
  let k;
  t[20] !== a || t[21] !== n.isEnabled
    ? ((k = !n.isEnabled && a > 0 ? (0, J.jsx)(nr, { discountPercent: a }) : null),
      (t[20] = a),
      (t[21] = n.isEnabled),
      (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] !== u || t[24] !== n.isEnabled
    ? ((A = n.isEnabled
        ? u.formatMessage({
            id: `settings.usage.credit.balance.manageAutoReload`,
            defaultMessage: `Manage auto-reload`,
            description: `Accessible label for managing active automatic credits reload from Usage and billing`,
          })
        : u.formatMessage({
            id: `settings.usage.credit.balance.setupAutoReload`,
            defaultMessage: `Set up auto-reload`,
            description: `Accessible label for setting up automatic credits reload from Usage and billing`,
          })),
      (t[23] = u),
      (t[24] = n.isEnabled),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] !== p || t[27] !== n.autoReloadCreditDiscountPolicy || t[28] !== n.isEnabled
    ? ((j = () => {
        p({
          intent: `auto-reload`,
          autoReloadCreditDiscountPolicy: n.autoReloadCreditDiscountPolicy,
          isAutoReloadEnabled: n.isEnabled,
          source: `usage_settings_auto_reload_cta`,
          openLegacyAutoReload: () => {
            h(!0);
          },
        });
      }),
      (t[26] = p),
      (t[27] = n.autoReloadCreditDiscountPolicy),
      (t[28] = n.isEnabled),
      (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] !== n.isEnabled || t[31] !== A || t[32] !== j
    ? ((M = (0, J.jsx)(ve, { checked: n.isEnabled, ariaLabel: A, onChange: j })),
      (t[30] = n.isEnabled),
      (t[31] = A),
      (t[32] = j),
      (t[33] = M))
    : (M = t[33]);
  let N;
  t[34] !== k || t[35] !== M
    ? ((N = (0, J.jsx)(K, {
        label: D,
        description: O,
        control: (0, J.jsxs)(J.Fragment, { children: [k, M] }),
      })),
      (t[34] = k),
      (t[35] = M),
      (t[36] = N))
    : (N = t[36]);
  let ee;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, J.jsx)(ir, {})), (t[37] = ee))
    : (ee = t[37]);
  let P;
  t[38] !== E || t[39] !== N
    ? ((P = (0, J.jsxs)(H, {
        children: [
          v,
          (0, J.jsx)(H.Content, { children: (0, J.jsxs)(V, { children: [E, N, ee] }) }),
        ],
      })),
      (t[38] = E),
      (t[39] = N),
      (t[40] = P))
    : (P = t[40]);
  let te;
  t[41] !== o || t[42] !== l || t[43] !== s || t[44] !== m || t[45] !== n || t[46] !== c
    ? ((te = m
        ? (0, J.jsx)(lr, {
            open: m,
            serverState: n,
            creditDetails: o,
            enableAutoTopUpMutation: s,
            updateAutoTopUpMutation: c,
            disableAutoTopUpMutation: l,
            onOpenChange: h,
          })
        : null),
      (t[41] = o),
      (t[42] = l),
      (t[43] = s),
      (t[44] = m),
      (t[45] = n),
      (t[46] = c),
      (t[47] = te))
    : (te = t[47]);
  let ne;
  return (
    t[48] !== P || t[49] !== te
      ? ((ne = (0, J.jsxs)(J.Fragment, { children: [P, te] })),
        (t[48] = P),
        (t[49] = te),
        (t[50] = ne))
      : (ne = t[50]),
    ne
  );
}
function sr(e) {
  return (0, J.jsx)(`a`, {
    href: Gr,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `inline-flex cursor-interaction text-info`,
    onClick: cr,
    children: e,
  });
}
function cr(e) {
  de({ event: e, href: Gr, initiator: `open_in_browser_bridge` });
}
function lr(e) {
  let t = (0, zr.c)(86),
    {
      open: n,
      serverState: r,
      creditDetails: a,
      enableAutoTopUpMutation: o,
      updateAutoTopUpMutation: s,
      disableAutoTopUpMutation: c,
      onOpenChange: l,
    } = e,
    u = i(He),
    d = I(),
    f = jt(),
    p = _t(Sn),
    m;
  t[0] === p.value ? (m = t[1]) : ((m = En(p.value)), (t[0] = p.value), (t[1] = m));
  let h = m,
    g = dn(),
    v;
  t[2] === n ? (v = t[3]) : ((v = { enabled: n }), (t[2] = n), (t[3] = v));
  let { data: y, isPending: b } = st(v),
    x;
  t[4] !== y || t[5] !== b || t[6] !== f
    ? ((x = b ? void 0 : (y ?? f.getContext().user?.country ?? null)),
      (t[4] = y),
      (t[5] = b),
      (t[6] = f),
      (t[7] = x))
    : (x = t[7]);
  let S = x,
    C;
  t[8] !== n || t[9] !== S
    ? ((C = { billingCurrency: S, enabled: n }), (t[8] = n), (t[9] = S), (t[10] = C))
    : (C = t[10]);
  let { data: T, isPending: E } = le(C),
    D = b || E,
    O = (0, Br.useId)(),
    k = (0, Br.useId)(),
    A = (0, Br.useId)(),
    j = (0, Br.useId)(),
    M = o.isPending || s.isPending,
    N = c.isPending,
    P = M || N,
    [te, ne] = (0, Br.useState)(null),
    [re, ie] = (0, Br.useState)(!1),
    ae;
  t[11] !== d || t[12] !== u
    ? ((ae = (e) => {
        u.get(ot).danger(Ir(e, d), Vr);
      }),
      (t[11] = d),
      (t[12] = u),
      (t[13] = ae))
    : (ae = t[13]);
  let oe = ae,
    se;
  t[14] !== d || t[15] !== u
    ? ((se = (e) => {
        u.get(ot).success(Lr(e, d), Vr);
      }),
      (t[14] = d),
      (t[15] = u),
      (t[16] = se))
    : (se = t[16]);
  let ce = se,
    ue;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => {
        (ie(!1), ne(null));
      }),
      (t[17] = ue))
    : (ue = t[17]);
  let de = ue,
    fe;
  t[18] !== T || t[19] !== a?.balance || t[20] !== d
    ? ((fe = (e) => {
        let { draftState: t } = e;
        (ie(!0),
          ne(
            Dr({
              intl: d,
              creditBalance: a?.balance,
              rechargeThreshold: t.rechargeThreshold,
              rechargeTarget: t.rechargeTarget,
              pricingInfo: T,
            })?.amount ?? null,
          ));
      }),
      (t[18] = T),
      (t[19] = a?.balance),
      (t[20] = d),
      (t[21] = fe))
    : (fe = t[21]);
  let pe = fe,
    F;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [`usage-settings`, `auto-top-up`, `manage-payment`]), (t[22] = F))
    : (F = t[22]);
  let me;
  t[23] !== d || t[24] !== u
    ? ((me = {
        mutationKey: F,
        mutationFn: mr,
        onSuccess: pr,
        onError: () => {
          u.get(ot).danger(
            d.formatMessage({
              id: `settings.usage.autoTopUp.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again.`,
              description: `Error shown when opening the manage payment flow from the auto top up settings dialog fails`,
            }),
            Vr,
          );
        },
      }),
      (t[23] = d),
      (t[24] = u),
      (t[25] = me))
    : (me = t[25]);
  let he = Ke(me),
    ge;
  t[26] === he
    ? (ge = t[27])
    : ((ge = () => {
        he.isPending || he.mutate();
      }),
      (t[26] = he),
      (t[27] = ge));
  let _e = ge,
    ve = r.rechargeThreshold ?? Hr,
    ye = r.rechargeTarget ?? Ur,
    L;
  t[28] !== ve || t[29] !== ye
    ? ((L = { isEnabled: !0, rechargeThreshold: ve, rechargeTarget: ye }),
      (t[28] = ve),
      (t[29] = ye),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== h || t[32] !== r
    ? ((R = {
        onChange: (e) => {
          let { value: t } = e;
          return Or({ ...t, maximumQuantity: h, serverState: r });
        },
        onSubmit: (e) => {
          let { value: t } = e;
          return Or({ ...t, maximumQuantity: h, serverState: r });
        },
      }),
      (t[31] = h),
      (t[32] = r),
      (t[33] = R))
    : (R = t[33]);
  let be;
  t[34] !== o ||
  t[35] !== pe ||
  t[36] !== P ||
  t[37] !== h ||
  t[38] !== l ||
  t[39] !== r ||
  t[40] !== oe ||
  t[41] !== ce ||
  t[42] !== s
    ? ((be = async (e) => {
        let { value: t } = e,
          n = qn({ draftState: t, serverState: r, isSaving: P, maximumQuantity: h });
        if (n.isSaveEnabled)
          switch (n.saveIntent) {
            case `disable`:
            case `none`:
              return;
            case `enable`:
              try {
                if ((de(), w((await o.mutateAsync(Rr(t))).immediate_top_up_status))) {
                  pe({ draftState: t });
                  return;
                }
                (ce(`enable`), l(!1));
              } catch {
                oe(`enable`);
              }
              return;
            case `update`:
              try {
                if (
                  (de(),
                  w(
                    (await s.mutateAsync(mn({ payload: Rr(t), serverState: r })))
                      .immediate_top_up_status,
                  ))
                ) {
                  pe({ draftState: t });
                  return;
                }
                (ce(`update`), l(!1));
              } catch {
                oe(`update`);
              }
              return;
          }
      }),
      (t[34] = o),
      (t[35] = pe),
      (t[36] = P),
      (t[37] = h),
      (t[38] = l),
      (t[39] = r),
      (t[40] = oe),
      (t[41] = ce),
      (t[42] = s),
      (t[43] = be))
    : (be = t[43]);
  let xe;
  t[44] !== L || t[45] !== R || t[46] !== be
    ? ((xe = { defaultValues: L, validators: R, onSubmit: be }),
      (t[44] = L),
      (t[45] = R),
      (t[46] = be),
      (t[47] = xe))
    : (xe = t[47]);
  let Se = Bn(xe),
    Ce;
  t[48] !== P || t[49] !== l
    ? ((Ce = (e) => {
        (P && !e) || (e || de(), l(e));
      }),
      (t[48] = P),
      (t[49] = l),
      (t[50] = Ce))
    : (Ce = t[50]);
  let we = Ce,
    z;
  t[51] !== c || t[52] !== l || t[53] !== r.isEnabled || t[54] !== oe || t[55] !== ce
    ? ((z = async () => {
        if (r.isEnabled)
          try {
            (await c.mutateAsync(), ce(`disable`), l(!1));
          } catch {
            oe(`disable`);
          }
      }),
      (t[51] = c),
      (t[52] = l),
      (t[53] = r.isEnabled),
      (t[54] = oe),
      (t[55] = ce),
      (t[56] = z))
    : (z = t[56]);
  let B = z,
    Te;
  t[57] !== T ||
  t[58] !== a?.balance ||
  t[59] !== k ||
  t[60] !== O ||
  t[61] !== Se ||
  t[62] !== we ||
  t[63] !== B ||
  t[64] !== _e ||
  t[65] !== re ||
  t[66] !== te ||
  t[67] !== d ||
  t[68] !== P ||
  t[69] !== D ||
  t[70] !== N ||
  t[71] !== M ||
  t[72] !== g ||
  t[73] !== h ||
  t[74] !== l ||
  t[75] !== n ||
  t[76] !== he.isPending ||
  t[77] !== u ||
  t[78] !== r ||
  t[79] !== f ||
  t[80] !== j ||
  t[81] !== A
    ? ((Te = (e) => {
        let { values: t, submissionAttempts: i } = e,
          o = qn({ draftState: t, serverState: r, isSaving: P, maximumQuantity: h }),
          s = Dr({
            intl: d,
            creditBalance: a?.balance,
            rechargeThreshold: t.rechargeThreshold,
            rechargeTarget: t.rechargeTarget,
            pricingInfo: T,
          }),
          c =
            !re && s != null && (o.saveIntent === `enable` || o.saveIntent === `update`)
              ? { saveIntent: o.saveIntent, amount: s.amount, creditCount: s.creditCount }
              : null;
        return (0, J.jsx)(At, {
          open: n,
          size: `default`,
          contentClassName: `w-[536px] max-w-[calc(100vw-2rem)]`,
          contentProps: { "aria-describedby": k, onOpenAutoFocus: dr },
          shouldIgnoreClickOutside: P,
          onOpenChange: we,
          children: (0, J.jsx)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(), Se.handleSubmit());
            },
            children: (0, J.jsxs)(ee, {
              className: `gap-0 px-6 py-6`,
              children: [
                (0, J.jsx)(Ct, {
                  asChild: !0,
                  children: (0, J.jsx)(`h2`, {
                    id: O,
                    className: `sr-only`,
                    children: d.formatMessage({
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, J.jsx)(`p`, {
                  id: k,
                  className: `sr-only`,
                  children: d.formatMessage({
                    id: `settings.usage.autoTopUp.dialog.description`,
                    defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                    description: `Description shown below the inputs in the auto top up settings dialog`,
                  }),
                }),
                (0, J.jsx)(Be, {
                  children: (0, J.jsx)(Pe, {
                    title: (0, J.jsx)(_, {
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, J.jsxs)(Be, {
                  className: `gap-5`,
                  children: [
                    (0, J.jsx)(Se.Field, {
                      name: `rechargeThreshold`,
                      children: (e) => {
                        let t = i > 0 || e.state.meta.isBlurred ? kr(e.state.meta.errors) : null;
                        return (0, J.jsx)(xr, {
                          id: A,
                          label: (0, J.jsx)(_, {
                            id: `settings.usage.autoTopUp.threshold.label`,
                            defaultMessage: `Minimum balance`,
                            description: `Label for the auto top up threshold input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `125`,
                          disabled: P,
                          hasError: t != null,
                          helperText: (0, J.jsx)(_, {
                            id: `settings.usage.autoTopUp.threshold.helper`,
                            defaultMessage: `Auto reload triggers when your credit balance goes below this amount.`,
                            description: `Helper text shown below the minimum balance input in the auto top up dialog`,
                          }),
                          footerContent: Nr({ fieldError: t, fieldName: `threshold`, intl: d }),
                          footerTone: `error`,
                          ariaLabel: d.formatMessage({
                            id: `settings.usage.autoTopUp.threshold.ariaLabel`,
                            defaultMessage: `Auto-reload minimum balance`,
                            description: `Aria label for the auto top up threshold input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (de(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, J.jsx)(Se.Field, {
                      name: `rechargeTarget`,
                      children: (e) => {
                        let n = i > 0 || e.state.meta.isBlurred ? Ar(e.state.meta.errors) : null,
                          r = Er({
                            intl: d,
                            rechargeThreshold: t.rechargeThreshold,
                            rechargeTarget: e.state.value,
                            pricingInfo: T,
                          });
                        return (0, J.jsx)(xr, {
                          id: j,
                          label: (0, J.jsx)(_, {
                            id: `settings.usage.autoTopUp.target.label`,
                            defaultMessage: `Target balance`,
                            description: `Label for the auto top up target balance input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `250`,
                          disabled: P,
                          hasError: n != null,
                          helperText: (0, J.jsx)(_, {
                            id: `settings.usage.autoTopUp.target.helper`,
                            defaultMessage: `Auto reload brings your credit balance back up to this amount.`,
                            description: `Helper text shown below the target balance input in the auto top up dialog`,
                          }),
                          footerContent:
                            n == null
                              ? D
                                ? (0, J.jsx)(Sr, { intl: d })
                                : r == null
                                  ? null
                                  : (0, J.jsx)(_, {
                                      id: `settings.usage.autoTopUp.target.equivalent`,
                                      defaultMessage: `Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>`,
                                      description: `Message shown below the target balance input with the estimated minimum billing amount`,
                                      values: {
                                        creditCount: r.creditCount,
                                        amount: r.amount,
                                        strong: ur,
                                      },
                                    })
                              : Nr({
                                  fieldError: n,
                                  fieldName: `target`,
                                  intl: d,
                                  maximumQuantity: h,
                                }),
                          footerTone: n == null ? `secondary` : `error`,
                          ariaLabel: d.formatMessage({
                            id: `settings.usage.autoTopUp.target.ariaLabel`,
                            defaultMessage: `Auto-reload target balance`,
                            description: `Aria label for the auto top up target balance input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (de(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, J.jsx)(`div`, {
                      className: `text-sm leading-5 text-secondary`,
                      children: (0, J.jsx)(_, {
                        id: `settings.usage.autoTopUp.dialog.description`,
                        defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                        description: `Description shown below the inputs in the auto top up settings dialog`,
                      }),
                    }),
                    c == null
                      ? null
                      : (0, J.jsx)(hr, {
                          saveIntent: c.saveIntent,
                          amount: c.amount,
                          creditCount: c.creditCount,
                        }),
                    re
                      ? (0, J.jsx)(vr, {
                          amount: te,
                          isManagePaymentPending: he.isPending,
                          onManagePaymentClick: _e,
                          onPurchaseCreditClick: (e) => {
                            let t = Je(f, `personal`);
                            (e.preventDefault(),
                              yt(u, {
                                audience: `personal`,
                                checkoutKind: `standalone_credit`,
                                entryPoint: `auto_top_up_failure_banner`,
                              }),
                              g({
                                event: e,
                                intent: `purchase`,
                                forceOneTimePurchase: !0,
                                hasSavedPaymentMethod: !Object.is(r.paymentMethod, null) && void 0,
                                isAutoReloadEnabled: r.isEnabled,
                                isCustomCheckoutEnabled: t,
                                legacyUrl: Wr,
                                source: `auto_top_up_failure_banner`,
                              }),
                              l(!1));
                          },
                        })
                      : null,
                  ],
                }),
                (0, J.jsx)(Be, {
                  className: `pt-7`,
                  children: (0, J.jsxs)(Re, {
                    children: [
                      r.isEnabled
                        ? (0, J.jsx)(W, {
                            color: `outline`,
                            className: Kr,
                            loading: N,
                            disabled: P,
                            onClick: () => {
                              B();
                            },
                            children: (0, J.jsx)(_, {
                              id: `settings.usage.autoTopUp.disable`,
                              defaultMessage: `Turn off`,
                              description: `Button label to disable auto top up`,
                            }),
                          })
                        : (0, J.jsx)(W, {
                            color: `outline`,
                            className: Kr,
                            disabled: P,
                            onClick: () => {
                              l(!1);
                            },
                            children: (0, J.jsx)(_, {
                              id: `settings.usage.autoTopUp.cancel`,
                              defaultMessage: `Cancel`,
                              description: `Button label to close the auto top up dialog without saving`,
                            }),
                          }),
                      (0, J.jsx)(W, {
                        color: `primary`,
                        type: `submit`,
                        className: Kr,
                        loading: M,
                        disabled: !o.isSaveEnabled,
                        children: r.isEnabled
                          ? (0, J.jsx)(_, {
                              id: `settings.usage.autoTopUp.save`,
                              defaultMessage: `Save`,
                              description: `Button label to save auto top up settings`,
                            })
                          : (0, J.jsx)(_, {
                              id: `settings.usage.autoTopUp.enable`,
                              defaultMessage: `Turn on`,
                              description: `Button label to enable auto top up`,
                            }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }),
      (t[57] = T),
      (t[58] = a?.balance),
      (t[59] = k),
      (t[60] = O),
      (t[61] = Se),
      (t[62] = we),
      (t[63] = B),
      (t[64] = _e),
      (t[65] = re),
      (t[66] = te),
      (t[67] = d),
      (t[68] = P),
      (t[69] = D),
      (t[70] = N),
      (t[71] = M),
      (t[72] = g),
      (t[73] = h),
      (t[74] = l),
      (t[75] = n),
      (t[76] = he.isPending),
      (t[77] = u),
      (t[78] = r),
      (t[79] = f),
      (t[80] = j),
      (t[81] = A),
      (t[82] = Te))
    : (Te = t[82]);
  let Ee;
  return (
    t[83] !== Se.Subscribe || t[84] !== Te
      ? ((Ee = (0, J.jsx)(Se.Subscribe, { selector: fr, children: Te })),
        (t[83] = Se.Subscribe),
        (t[84] = Te),
        (t[85] = Ee))
      : (Ee = t[85]),
    Ee
  );
}
function ur(e) {
  return (0, J.jsx)(`span`, { className: `font-medium text-default`, children: e });
}
function dr(e) {
  e.preventDefault();
}
function fr(e) {
  return { values: e.values, submissionAttempts: e.submissionAttempts };
}
function pr(e) {
  ge({ href: e.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
async function mr() {
  return S.safeGet(`/payments/customer_portal`);
}
function hr(e) {
  let t = (0, zr.c)(4),
    { saveIntent: n, amount: r, creditCount: i } = e,
    a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, J.jsx)(Ht, {
          type: `normal`,
          layout: `vertical`,
          content:
            n === `enable`
              ? (0, J.jsx)(_, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.enable`,
                  defaultMessage: `Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.`,
                  description: `Informational banner shown before enabling auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: _r },
                })
              : (0, J.jsx)(_, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.update`,
                  defaultMessage: `Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.`,
                  description: `Informational banner shown before updating auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: gr },
                }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function gr(e) {
  return (0, J.jsx)(`span`, { className: `font-medium text-default`, children: e });
}
function _r(e) {
  return (0, J.jsx)(`span`, { className: `font-medium text-default`, children: e });
}
function vr(e) {
  let t = (0, zr.c)(5),
    { amount: n, isManagePaymentPending: r, onManagePaymentClick: i, onPurchaseCreditClick: a } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, J.jsx)(Ht, {
          type: `error`,
          layout: `vertical`,
          content:
            n == null
              ? (0, J.jsx)(_, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.generic`,
                  defaultMessage: `The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails without a price estimate`,
                  values: {
                    actionLine: br,
                    managePayment: (e) =>
                      (0, J.jsx)(`button`, {
                        type: `button`,
                        className: Se(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        disabled: r,
                        onClick: i,
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, J.jsx)(`a`, {
                        href: Wr,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                })
              : (0, J.jsx)(_, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.amount`,
                  defaultMessage: `The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails and a price estimate is available`,
                  values: {
                    amount: n,
                    actionLine: yr,
                    managePayment: (e) =>
                      (0, J.jsx)(`button`, {
                        type: `button`,
                        className: Se(
                          `cursor-interaction font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        disabled: r,
                        onClick: i,
                        children: e,
                      }),
                    purchaseCredit: (e) =>
                      (0, J.jsx)(`a`, {
                        href: Wr,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `cursor-interaction font-medium underline underline-offset-2`,
                        onClick: (e) => {
                          a(e);
                        },
                        children: e,
                      }),
                  },
                }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function yr(e) {
  return (0, J.jsx)(`div`, { className: `mt-1`, children: e });
}
function br(e) {
  return (0, J.jsx)(`div`, { className: `mt-1`, children: e });
}
function xr(e) {
  let t = (0, zr.c)(22),
    {
      id: n,
      label: r,
      value: i,
      placeholder: a,
      disabled: o,
      hasError: s,
      helperText: c,
      footerContent: l,
      footerTone: u,
      ariaLabel: d,
      onChange: f,
      onBlur: p,
    } = e,
    m = u === void 0 ? `secondary` : u,
    h;
  t[0] !== n || t[1] !== r
    ? ((h = (0, J.jsx)(`label`, { htmlFor: n, className: `text-lg text-secondary`, children: r })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] === c
    ? (g = t[4])
    : ((g = c
        ? (0, J.jsx)(`div`, { className: `text-sm leading-4 text-secondary`, children: c })
        : null),
      (t[3] = c),
      (t[4] = g));
  let _;
  t[5] !== d ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== n ||
  t[9] !== p ||
  t[10] !== f ||
  t[11] !== a ||
  t[12] !== i
    ? ((_ = (0, J.jsx)(Cr, {
        id: n,
        value: i,
        placeholder: a,
        disabled: o,
        hasError: s,
        ariaLabel: d,
        onBlur: p,
        onChange: f,
      })),
      (t[5] = d),
      (t[6] = o),
      (t[7] = s),
      (t[8] = n),
      (t[9] = p),
      (t[10] = f),
      (t[11] = a),
      (t[12] = i),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== l || t[15] !== m
    ? ((v =
        l == null
          ? null
          : (0, J.jsx)(`div`, {
              className: Se(`text-sm`, m === `error` ? `text-danger` : `text-secondary`),
              children: l,
            })),
      (t[14] = l),
      (t[15] = m),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== h || t[18] !== g || t[19] !== _ || t[20] !== v
      ? ((y = (0, J.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [h, g, _, v] })),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
function Sr(e) {
  let t = (0, zr.c)(5),
    { intl: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n.formatMessage({
        id: `settings.usage.autoTopUp.target.equivalent.loading`,
        defaultMessage: `Loading price`,
        description: `Accessible label announced while the auto top up price estimate is loading`,
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(at, { className: `icon-xxs text-codex-description` })), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, J.jsx)(`span`, {
          role: `status`,
          "aria-label": r,
          className: `inline-flex items-center`,
          children: i,
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Cr(e) {
  let t = (0, zr.c)(11),
    {
      id: n,
      value: r,
      placeholder: i,
      disabled: a,
      hasError: o,
      ariaLabel: s,
      onChange: c,
      onBlur: l,
    } = e,
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = (e) => {
        c(e.currentTarget.value);
      }),
      (t[0] = c),
      (t[1] = u));
  let d;
  return (
    t[2] !== s ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== n ||
    t[6] !== l ||
    t[7] !== i ||
    t[8] !== u ||
    t[9] !== r
      ? ((d = (0, J.jsx)(g, {
          id: n,
          value: r,
          placeholder: i,
          disabled: a,
          inputMode: `numeric`,
          pattern: `[0-9]*`,
          "aria-label": s,
          "aria-invalid": o,
          onChange: u,
          onBlur: l,
        })),
        (t[2] = s),
        (t[3] = a),
        (t[4] = o),
        (t[5] = n),
        (t[6] = l),
        (t[7] = i),
        (t[8] = u),
        (t[9] = r),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function wr(e) {
  let t = (0, zr.c)(14),
    { balance: n, unlimited: r, pricingInfo: i, isLoading: a } = e,
    o = I(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `settings.usage.credit.remaining.unavailable`,
        defaultMessage: `Credit remaining unavailable`,
        description: `Fallback title shown when the remaining credit is unavailable`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c = s;
  if (r) {
    let e;
    return (
      t[2] === o
        ? (e = t[3])
        : ((e = o.formatMessage({
            id: `settings.usage.credit.remaining.unlimited`,
            defaultMessage: `Unlimited credit`,
            description: `Title shown when the account has unlimited credit`,
          })),
          (t[2] = o),
          (t[3] = e)),
      e
    );
  }
  if (a) {
    let e;
    t[4] === o
      ? (e = t[5])
      : ((e = o.formatMessage({
          id: `settings.usage.credit.balance.loading`,
          defaultMessage: `Loading credits`,
          description: `Accessible label for the small spinner replacing the credit balance in Codex Usage settings while the balance or its currency value is loading`,
        })),
        (t[4] = o),
        (t[5] = e));
    let n;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, J.jsx)(at, { as: `span`, className: `icon-xxs text-codex-description` })),
        (t[6] = n))
      : (n = t[6]);
    let r;
    return (
      t[7] === e
        ? (r = t[8])
        : ((r = (0, J.jsx)(`span`, {
            className: `inline-flex items-center`,
            role: `status`,
            "aria-label": e,
            children: n,
          })),
          (t[7] = e),
          (t[8] = r)),
      r
    );
  }
  if (n == null || i == null) return c;
  let l;
  return (
    t[9] !== n || t[10] !== o || t[11] !== i || t[12] !== c
      ? ((l = Un({ intl: o, creditQuantity: Tr(n), pricingInfo: i }) ?? c),
        (t[9] = n),
        (t[10] = o),
        (t[11] = i),
        (t[12] = c),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
function Tr(e) {
  return Math.floor(Number(e ?? 0));
}
function Er({ intl: e, rechargeThreshold: t, rechargeTarget: n, pricingInfo: r }) {
  if (r == null) return null;
  let i = Xn({ rechargeThreshold: t, rechargeTarget: n });
  return i == null
    ? null
    : {
        creditCount: i,
        amount: rn({
          intl: e,
          amount: i * r.amountPerCredit,
          currencyCode: r.currencyCode,
          currencyFractionDigits: r.minorUnitExponent,
        }),
      };
}
function Dr({
  intl: e,
  creditBalance: t,
  rechargeThreshold: n,
  rechargeTarget: r,
  pricingInfo: i,
}) {
  if (i == null) return null;
  let a = Tr(t),
    o = Number(q(n)),
    s = Number(q(r));
  if (a >= o) return null;
  let c = Math.ceil(s - a);
  return c <= 0
    ? null
    : {
        amount: rn({
          intl: e,
          amount: c * i.amountPerCredit,
          currencyCode: i.currencyCode,
          currencyFractionDigits: i.minorUnitExponent,
        }),
        creditCount: c,
      };
}
function Or({ rechargeThreshold: e, rechargeTarget: t, maximumQuantity: n, serverState: r }) {
  let i = Kn({ rechargeThreshold: e, rechargeTarget: t, maximumQuantity: n, serverState: r });
  if (!(i.rechargeThresholdError == null && i.rechargeTargetError == null))
    return {
      fields: {
        rechargeThreshold: i.rechargeThresholdError ?? void 0,
        rechargeTarget: i.rechargeTargetError ?? void 0,
      },
    };
}
function kr(e) {
  if (e == null) return null;
  for (let t of e) if (jr(t)) return t;
  return null;
}
function Ar(e) {
  if (e == null) return null;
  for (let t of e) if (Mr(t)) return t;
  return null;
}
function jr(e) {
  return e === `missing` || e === `not-whole-number` || e === `below-threshold-minimum`;
}
function Mr(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `target-difference-too-small` ||
    e === `above-maximum`
  );
}
function Nr(e) {
  if (e.fieldError == null) return null;
  switch (e.fieldName) {
    case `threshold`:
      return Pr(e.fieldError, e.intl);
    case `target`:
      return Fr(e.fieldError, e.intl, e.maximumQuantity);
  }
}
function Pr(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.missing`,
        defaultMessage: `Enter a minimum balance (at least 125 credits).`,
        description: `Validation message when the auto top up threshold is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.wholeNumber`,
        defaultMessage: `Minimum balance must be a whole number.`,
        description: `Validation message when the auto top up threshold is not a whole number`,
      });
    case `below-threshold-minimum`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.minimum`,
        defaultMessage: `Set the minimum balance to at least 125 credits.`,
        description: `Validation message when the auto top up threshold is below the minimum allowed value`,
      });
  }
}
function Fr(e, t, n) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.missing`,
        defaultMessage: `Enter a target balance.`,
        description: `Validation message when the auto top up target balance is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.wholeNumber`,
        defaultMessage: `Target balance must be a whole number.`,
        description: `Validation message when the auto top up target balance is not a whole number`,
      });
    case `target-difference-too-small`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.minimumDifference`,
        defaultMessage: `Set the target balance to at least 125 credits above the minimum balance.`,
        description: `Validation message when the auto top up target balance is too close to the minimum balance`,
      });
    case `above-maximum`:
      return t.formatMessage(
        {
          id: `settings.usage.autoTopUp.target.error.maximum`,
          defaultMessage: `Target balance must be at most {maximumCredits, number} credits`,
          description: `Inline validation error in Codex usage settings when an auto-reload target exceeds the configured maximum credit quantity for a single purchase; {maximumCredits} is a locale-formatted number of credits, not a currency amount or monthly spending limit`,
        },
        { maximumCredits: n },
      );
  }
}
function Ir(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.error`,
        defaultMessage: `Failed to enable auto reload`,
        description: `Toast shown when enabling auto top up fails`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.error`,
        defaultMessage: `Failed to update auto reload`,
        description: `Toast shown when updating auto top up fails`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.error`,
        defaultMessage: `Failed to disable auto reload`,
        description: `Toast shown when disabling auto top up fails`,
      });
    case `none`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.save.error`,
        defaultMessage: `Failed to save auto reload settings`,
        description: `Fallback toast shown when saving auto top up settings fails`,
      });
  }
}
function Lr(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.success`,
        defaultMessage: `Enabled auto reload`,
        description: `Toast shown when enabling auto top up succeeds`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.success`,
        defaultMessage: `Updated auto reload settings`,
        description: `Toast shown when updating auto top up succeeds`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.success`,
        defaultMessage: `Disabled auto reload`,
        description: `Toast shown when disabling auto top up succeeds`,
      });
  }
}
function Rr(e) {
  return { recharge_threshold: q(e.rechargeThreshold), recharge_target: q(e.rechargeTarget) };
}
var zr,
  Br,
  J,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr = e(() => {
    ((zr = G()),
      Vn(),
      Tt(),
      Wt(),
      F(),
      c(),
      (Br = t(s(), 1)),
      B(),
      Mt(),
      Ve(),
      l(),
      o(),
      nt(),
      Ze(),
      se(),
      ce(),
      Ee(),
      ut(),
      n(),
      je(),
      y(),
      Hn(),
      tn(),
      pn(),
      Nt(),
      jn(),
      Nn(),
      ht(),
      L(),
      Fe(),
      D(),
      We(),
      Dn(),
      R(),
      er(),
      (J = U()),
      (Vr = { duration: 3 }),
      (Hr = `125`),
      (Ur = `250`),
      (Wr = `${rt}/settings/usage?credit_modal=true`),
      (Gr = `https://help.openai.com/en/articles/20001106-codex-rate-card`),
      (Kr = `min-w-[88px] justify-center`));
  });
function Jr() {
  let e = (0, Yr.c)(9),
    t = i(He),
    { accountId: n } = qe(),
    { data: r } = Pt(),
    a = jt(),
    o = x(gn),
    s;
  e[0] !== n || e[1] !== r || e[2] !== t || e[3] !== a
    ? ((s = (e) => {
        (dt(a),
          yt(t, {
            audience: `workspace`,
            checkoutKind: `standalone_credit`,
            entryPoint: `usage_settings_purchase_cta`,
          }),
          Tn({ scope: t, accountId: n, currentAccount: r, event: e, statsigClient: a }));
      }),
      (e[0] = n),
      (e[1] = r),
      (e[2] = t),
      (e[3] = a),
      (e[4] = s))
    : (s = e[4]);
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Xr.jsx)(_, {
        id: `settings.usage.credit.balance.buyCredits`,
        defaultMessage: `Buy credits`,
        description: `Button label to open the credit purchase flow`,
      })),
      (e[5] = c))
    : (c = e[5]);
  let l;
  return (
    e[6] !== o || e[7] !== s
      ? ((l = (0, Xr.jsx)(W, {
          color: `outline`,
          disabled: o,
          loading: o,
          size: `toolbar`,
          onClick: s,
          children: c,
        })),
        (e[6] = o),
        (e[7] = s),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Yr,
  Xr,
  Zr = e(() => {
    ((Yr = G()), F(), B(), Mt(), wt(), o(), xn(), Nt(), ht(), We(), (Xr = U()));
  });
function Qr(e) {
  let t = (0, ri.c)(35),
    { plan: n } = e,
    r = i(He),
    a = I(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { logExposure: !0 }), (t[0] = o))
    : (o = t[0]);
  let s = Xt(o),
    c = yn(),
    l = Cn(n),
    u = l != null,
    d;
  t[1] === u ? (d = t[2]) : ((d = { enabled: u }), (t[1] = u), (t[2] = d));
  let { data: f } = st(d),
    p = l != null,
    m;
  t[3] !== f || t[4] !== p
    ? ((m = { billingCurrency: f, enabled: p }), (t[3] = f), (t[4] = p), (t[5] = m))
    : (m = t[5]);
  let { data: h } = ie(m);
  if (l == null) return null;
  let g =
      h == null
        ? null
        : Fn({
            intl: a,
            amount: h.monthlyAmounts[l.pricePlan],
            currencyCode: h.currencyCode,
            minorUnitExponent: h.minorUnitExponent,
          }),
    v = H,
    y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(H.Header, {
        title: (0, Y.jsx)(_, {
          id: `settings.usage.plan.title`,
          defaultMessage: `Your plan`,
          description: `Title for the current plan section in usage settings`,
        }),
      })),
      (t[6] = y))
    : (y = t[6]);
  let b = H,
    x = V,
    S = K,
    C = ti(l.displayPlan),
    w;
  t[7] === g
    ? (w = t[8])
    : ((w =
        g == null
          ? null
          : (0, Y.jsx)(_, {
              id: `settings.usage.plan.monthlyPrice`,
              defaultMessage: `{price}/mo`,
              description: `Localized monthly price below the current plan name`,
              values: { price: g },
            })),
      (t[7] = g),
      (t[8] = w));
  let T = l.cta === `upgrade` ? `primary` : `outline`,
    E;
  t[9] !== s || t[10] !== c || t[11] !== r || t[12] !== l.pricePlan
    ? ((E = (e) => {
        c({
          scope: r,
          currentPlan: l.pricePlan,
          event: e,
          getPricingUrl: s,
          source: `usage_settings_plan_row`,
        });
      }),
      (t[9] = s),
      (t[10] = c),
      (t[11] = r),
      (t[12] = l.pricePlan),
      (t[13] = E))
    : (E = t[13]);
  let D;
  t[14] === l.cta
    ? (D = t[15])
    : ((D =
        l.cta === `upgrade`
          ? (0, Y.jsx)(_, {
              id: `settings.usage.plan.upgrade`,
              defaultMessage: `Upgrade plan`,
              description: `CTA to open the upgrade plan dialog`,
            })
          : (0, Y.jsx)(_, {
              id: `settings.usage.plan.view`,
              defaultMessage: `View plans`,
              description: `CTA to open the plan selection dialog`,
            })),
      (t[14] = l.cta),
      (t[15] = D));
  let O;
  t[16] !== T || t[17] !== E || t[18] !== D
    ? ((O = (0, Y.jsx)(W, { color: T, size: `toolbar`, onClick: E, children: D })),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== S || t[21] !== w || t[22] !== O || t[23] !== C
    ? ((k = (0, Y.jsx)(S, { className: `gap-6`, label: C, description: w, control: O })),
      (t[20] = S),
      (t[21] = w),
      (t[22] = O),
      (t[23] = C),
      (t[24] = k))
    : (k = t[24]);
  let A;
  t[25] !== x || t[26] !== k
    ? ((A = (0, Y.jsx)(x, { children: k })), (t[25] = x), (t[26] = k), (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] !== A || t[29] !== b.Content
    ? ((j = (0, Y.jsx)(b.Content, { children: A })), (t[28] = A), (t[29] = b.Content), (t[30] = j))
    : (j = t[30]);
  let M;
  return (
    t[31] !== v || t[32] !== j || t[33] !== y
      ? ((M = (0, Y.jsxs)(v, { children: [y, j] })),
        (t[31] = v),
        (t[32] = j),
        (t[33] = y),
        (t[34] = M))
      : (M = t[34]),
    M
  );
}
function $r(e) {
  let t = (0, ri.c)(9),
    { plan: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = un(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === r ? (i = t[3]) : ((i = { enabled: r }), (t[2] = r), (t[3] = i));
  let { data: a } = xe(i);
  if (!un(n)) return null;
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(H.Header, {
        title: (0, Y.jsx)(_, {
          id: `settings.usage.cancelPlan.title`,
          defaultMessage: `Cancel plan`,
          description: `Title for the cancel plan section in usage settings`,
        }),
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a ? (s = t[6]) : ((s = Zt(a)), (t[5] = a), (t[6] = s));
  let c;
  return (
    t[7] === s
      ? (c = t[8])
      : ((c = (0, Y.jsxs)(H, {
          children: [
            o,
            (0, Y.jsx)(H.Content, {
              className: `text-sm text-secondary`,
              children: (0, Y.jsx)(`p`, { children: (0, Y.jsx)(ei, { platform: s }) }),
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = c)),
    c
  );
}
function ei(e) {
  let t = (0, ri.c)(8),
    { platform: n } = e,
    r = n === `ios` ? on : n === `android` ? kn : qt,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) =>
        (0, Y.jsx)(`a`, {
          className: `cursor-interaction text-info`,
          href: r,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => ni(e, r),
          children: e,
        })),
      (t[0] = r),
      (t[1] = i));
  let a = i;
  switch (n) {
    case null: {
      let e;
      return (
        t[2] === a
          ? (e = t[3])
          : ((e = (0, Y.jsx)(_, {
              id: `settings.usage.cancelPlan.webDescription`,
              defaultMessage: `Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan`,
              description: `Description shown when a ChatGPT-managed subscription can be canceled through web billing settings`,
              values: { cancel: a },
            })),
            (t[2] = a),
            (t[3] = e)),
        e
      );
    }
    case `ios`: {
      let e;
      return (
        t[4] === a
          ? (e = t[5])
          : ((e = (0, Y.jsx)(_, {
              id: `settings.usage.cancelPlan.appleDescription`,
              defaultMessage: `Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>`,
              description: `Description shown when an Apple-managed subscription must be canceled through iOS`,
              values: { cancel: a },
            })),
            (t[4] = a),
            (t[5] = e)),
        e
      );
    }
    case `android`: {
      let e;
      return (
        t[6] === a
          ? (e = t[7])
          : ((e = (0, Y.jsx)(_, {
              id: `settings.usage.cancelPlan.googlePlayDescription`,
              defaultMessage: `Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>`,
              description: `Description shown when a Google Play-managed subscription must be canceled through Android`,
              values: { cancel: a },
            })),
            (t[6] = a),
            (t[7] = e)),
        e
      );
    }
  }
}
function ti(e) {
  switch (e) {
    case `free`:
      return (0, Y.jsx)(_, {
        id: `settings.usage.plan.free`,
        defaultMessage: `Free plan`,
        description: `Name of the Free plan in usage settings`,
      });
    case `go`:
      return (0, Y.jsx)(_, {
        id: `settings.usage.plan.go`,
        defaultMessage: `Go plan`,
        description: `Name of the Go plan in usage settings`,
      });
    case `plus`:
      return (0, Y.jsx)(_, {
        id: `settings.usage.plan.plus`,
        defaultMessage: `Plus plan`,
        description: `Name of the Plus plan in usage settings`,
      });
    case `pro`:
      return (0, Y.jsx)(_, {
        id: `settings.usage.plan.pro`,
        defaultMessage: `Pro plan`,
        description: `Name of the Pro plan in usage settings`,
      });
  }
}
function ni(e, t) {
  de({ event: e, href: t, initiator: `open_in_browser_bridge` });
}
var ri,
  Y,
  ii = e(() => {
    ((ri = G()), F(), B(), o(), se(), nn(), y(), ht(), L(), Fe(), D(), fn(), Pn(), Gt(), (Y = U()));
  });
function ai(e) {
  let t = (0, oi.c)(3),
    { headingRef: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, si.jsx)(_, {
        id: `settings.usage.resets.title`,
        defaultMessage: `Usage limit resets`,
        description: `Title for the Codex usage limit resets section in settings`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, si.jsx)(`span`, { ref: n, tabIndex: -1, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
var oi,
  si,
  ci = e(() => {
    ((oi = G()), B(), (si = U()));
  });
function li(e) {
  let t = (0, ui.c)(30),
    { activeCreditId: n, credit: r, isConfirming: i, isResetting: a, onUseReset: o } = e,
    s = I(),
    c = (0, di.useId)(),
    l = (0, di.useId)(),
    u = (0, di.useId)(),
    d = r?.id,
    f;
  t[0] !== r || t[1] !== s
    ? ((f =
        r?.expires_at == null
          ? null
          : s.formatDate(r.expires_at, {
              day: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
              month: `numeric`,
              timeZoneName: `short`,
            })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] === r?.title
    ? (m = t[4])
    : ((m =
        r?.title?.trim() ||
        (0, fi.jsx)(_, {
          id: `settings.usage.resets.fallbackTitle`,
          defaultMessage: `Usage reset`,
          description: `Fallback title for a Codex usage limit reset in settings`,
        })),
      (t[3] = r?.title),
      (t[4] = m));
  let h;
  t[5] !== l || t[6] !== m
    ? ((h = (0, fi.jsx)(`span`, { id: l, children: m })), (t[5] = l), (t[6] = m), (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== u || t[9] !== p
    ? ((g =
        p == null
          ? null
          : (0, fi.jsx)(`span`, {
              id: u,
              children: (0, fi.jsx)(_, {
                id: `settings.usage.resets.expiresWithTimeZone`,
                defaultMessage: `Expires {date}`,
                description: `Expiration date, time, and time zone for a Codex usage limit reset in settings`,
                values: { date: p },
              }),
            })),
      (t[8] = u),
      (t[9] = p),
      (t[10] = g))
    : (g = t[10]);
  let v = p == null ? void 0 : u,
    y = `${c} ${l}`,
    b = n === (d ?? `automatic`),
    x;
  t[11] !== d || t[12] !== o
    ? ((x = () => {
        o(d);
      }),
      (t[11] = d),
      (t[12] = o),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === i
    ? (S = t[15])
    : ((S = i
        ? (0, fi.jsx)(_, {
            id: `settings.usage.resets.confirmReset`,
            defaultMessage: `Confirm`,
            description: `Button label confirming the redemption of a Codex usage limit reset from settings`,
          })
        : (0, fi.jsx)(_, {
            id: `settings.usage.resets.useReset`,
            defaultMessage: `Use reset`,
            description: `Button label for redeeming a Codex usage limit reset from settings`,
          })),
      (t[14] = i),
      (t[15] = S));
  let C;
  t[16] !== c || t[17] !== S
    ? ((C = (0, fi.jsx)(`span`, { id: c, children: S })), (t[16] = c), (t[17] = S), (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== a || t[20] !== C || t[21] !== v || t[22] !== y || t[23] !== b || t[24] !== x
    ? ((w = (0, fi.jsx)(W, {
        "aria-describedby": v,
        "aria-labelledby": y,
        className: `rounded-full`,
        color: `primary`,
        disabled: a,
        loading: b,
        onClick: x,
        size: `toolbar`,
        children: C,
      })),
      (t[19] = a),
      (t[20] = C),
      (t[21] = v),
      (t[22] = y),
      (t[23] = b),
      (t[24] = x),
      (t[25] = w))
    : (w = t[25]);
  let T;
  return (
    t[26] !== w || t[27] !== h || t[28] !== g
      ? ((T = (0, fi.jsx)(K, { label: h, description: g, control: w })),
        (t[26] = w),
        (t[27] = h),
        (t[28] = g),
        (t[29] = T))
      : (T = t[29]),
    T
  );
}
var ui,
  di,
  fi,
  pi = e(() => {
    ((ui = G()), (di = t(s(), 1)), B(), o(), Fe(), (fi = U()));
  });
function mi(e) {
  let t = (0, hi.c)(22),
    {
      activeCreditId: n,
      credits: r,
      isResetFillActive: i,
      isResetting: a,
      onUseReset: o,
      retryCreditId: s,
    } = e,
    [c, l] = (0, gi.useState)(null),
    u;
  t[0] !== c || t[1] !== o
    ? ((u = async (e) => {
        let t = e ?? `automatic`;
        if (c !== t) {
          l(t);
          return;
        }
        (l(null), await o(e));
      }),
      (t[0] = c),
      (t[1] = o),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] === r ? (f = t[4]) : ((f = r.length === 0 ? [null] : r), (t[3] = r), (t[4] = f));
  let p;
  if (
    t[5] !== n ||
    t[6] !== c ||
    t[7] !== d ||
    t[8] !== i ||
    t[9] !== a ||
    t[10] !== s ||
    t[11] !== f
  ) {
    let e;
    (t[13] !== n || t[14] !== c || t[15] !== d || t[16] !== i || t[17] !== a || t[18] !== s
      ? ((e = (e) => {
          let t = e?.id ?? `automatic`;
          return (0, _i.jsx)(
            li,
            {
              activeCreditId: n,
              credit: e,
              isConfirming: c === t,
              isResetting: i || a || (s != null && s !== t),
              onUseReset: d,
            },
            t,
          );
        }),
        (t[13] = n),
        (t[14] = c),
        (t[15] = d),
        (t[16] = i),
        (t[17] = a),
        (t[18] = s),
        (t[19] = e))
      : (e = t[19]),
      (p = f.map(e)),
      (t[5] = n),
      (t[6] = c),
      (t[7] = d),
      (t[8] = i),
      (t[9] = a),
      (t[10] = s),
      (t[11] = f),
      (t[12] = p));
  } else p = t[12];
  let m;
  return (
    t[20] === p
      ? (m = t[21])
      : ((m = (0, _i.jsx)(_i.Fragment, { children: p })), (t[20] = p), (t[21] = m)),
    m
  );
}
var hi,
  gi,
  _i,
  vi = e(() => {
    ((hi = G()), (gi = t(s(), 1)), pi(), (_i = U()));
  });
function yi(e) {
  let t = (0, xi.c)(31),
    {
      isResetFillActive: n,
      onResetAttemptCancel: r,
      onResetAttemptStart: a,
      onResetComplete: o,
    } = e,
    s = i(He),
    c = I(),
    l = (0, Si.useRef)(null),
    [u] = (0, Si.useState)(Jt),
    [d, f] = (0, Si.useState)(null),
    { data: p, error: m, isPending: h, refetch: g } = $e(),
    y = Ot(),
    b;
  t[0] === p?.credits
    ? (b = t[1])
    : ((b = p?.credits?.filter(bi)), (t[0] = p?.credits), (t[1] = b));
  let x = b,
    S = p?.available_count ?? 0,
    C = d?.credits ?? x,
    w = d?.availableCount ?? S,
    T = y.isPending ? (y.variables?.creditId ?? `automatic`) : null,
    E;
  t[2] !== y.mutateAsync ||
  t[3] !== c ||
  t[4] !== r ||
  t[5] !== a ||
  t[6] !== o ||
  t[7] !== d ||
  t[8] !== u ||
  t[9] !== s ||
  t[10] !== w ||
  t[11] !== C
    ? ((E = async (e) => {
        let t = e ?? `automatic`;
        if ((d != null && d.creditId !== t) || C == null) return;
        d ?? a?.();
        let n = await u.redeem({ availableCount: w, consume: y.mutateAsync, creditId: e });
        switch (n.status) {
          case `in_flight`:
            return;
          case `transport_error`:
            (f({ availableCount: w, creditId: n.creditId ?? `automatic`, credits: C }),
              s.get(ot).danger(
                c.formatMessage({
                  id: `codex.rateLimitResetModal.error`,
                  defaultMessage: `Couldn’t reset usage. Please try again`,
                  description: `Error shown when resetting Codex usage fails`,
                }),
              ));
            return;
          case `rejected`:
            (f(null), r?.(), s.get(ot).danger(cn(n.code, c)));
            return;
          case `reset`: {
            f(null);
            let e = Math.max(n.availableCountBefore - 1, 0);
            (Xe(s, v, {
              availableCountBefore: n.availableCountBefore,
              componentType: `settings`,
              redemptionMethod: n.creditId == null ? `automatic` : `selected_credit`,
              remainingCount: e,
            }),
              s.get(ot).success(
                c.formatMessage({
                  id: `settings.usage.resets.success`,
                  defaultMessage: `Usage limits reset`,
                  description: `Success toast shown after redeeming a Codex usage reset from settings`,
                }),
              ),
              o?.(),
              l.current?.focus());
          }
        }
      }),
      (t[2] = y.mutateAsync),
      (t[3] = c),
      (t[4] = r),
      (t[5] = a),
      (t[6] = o),
      (t[7] = d),
      (t[8] = u),
      (t[9] = s),
      (t[10] = w),
      (t[11] = C),
      (t[12] = E))
    : (E = t[12]);
  let D = E,
    O;
  if (d == null && h && p == null) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(zn, {
          children: (0, X.jsx)(_, {
            id: `settings.usage.resets.loading`,
            defaultMessage: `Loading usage limit resets…`,
            description: `Loading state for Codex usage limit resets in settings`,
          }),
        })),
        (t[13] = e))
      : (e = t[13]),
      (O = e));
  } else if (d == null && m != null && p == null) {
    let e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(_, {
          id: `settings.usage.resets.loadError`,
          defaultMessage: `Couldn’t load usage limit resets`,
          description: `Error shown when Codex usage limit resets cannot be loaded in settings`,
        })),
        (t[14] = e))
      : (e = t[14]);
    let n;
    t[15] === g
      ? (n = t[16])
      : ((n = () => {
          g();
        }),
        (t[15] = g),
        (t[16] = n));
    let r;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(_, {
          id: `settings.usage.resets.retry`,
          defaultMessage: `Retry`,
          description: `Button label for retrying Codex usage reset loading in settings`,
        })),
        (t[17] = r))
      : (r = t[17]);
    let i;
    (t[18] === n
      ? (i = t[19])
      : ((i = (0, X.jsx)(K, {
          label: e,
          control: (0, X.jsx)(W, { color: `secondary`, onClick: n, size: `toolbar`, children: r }),
        })),
        (t[18] = n),
        (t[19] = i)),
      (O = i));
  } else if (C == null || (C.length === 0 && w === 0)) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(he, {
          layout: `settings-row`,
          children: (0, X.jsx)(_, {
            id: `settings.usage.resets.empty`,
            defaultMessage: `No resets available`,
            description: `Empty state when no Codex usage limit resets are available`,
          }),
        })),
        (t[20] = e))
      : (e = t[20]),
      (O = e));
  } else {
    let e = d?.creditId ?? null,
      r;
    (t[21] !== T ||
    t[22] !== y.isPending ||
    t[23] !== D ||
    t[24] !== n ||
    t[25] !== e ||
    t[26] !== C
      ? ((r = (0, X.jsx)(mi, {
          activeCreditId: T,
          credits: C,
          isResetFillActive: n,
          isResetting: y.isPending,
          onUseReset: D,
          retryCreditId: e,
        })),
        (t[21] = T),
        (t[22] = y.isPending),
        (t[23] = D),
        (t[24] = n),
        (t[25] = e),
        (t[26] = C),
        (t[27] = r))
      : (r = t[27]),
      (O = r));
  }
  let k;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(H.Header, { title: (0, X.jsx)(ai, { headingRef: l }) })), (t[28] = k))
    : (k = t[28]);
  let A;
  return (
    t[29] === O
      ? (A = t[30])
      : ((A = (0, X.jsxs)(H, {
          children: [k, (0, X.jsx)(H.Content, { children: (0, X.jsx)(V, { children: O }) })],
        })),
        (t[29] = O),
        (t[30] = A)),
    A
  );
}
function bi(e) {
  return e.status === `available`;
}
var xi,
  Si,
  X,
  Ci = e(() => {
    ((xi = G()),
      Ye(),
      F(),
      (Si = t(s(), 1)),
      B(),
      wt(),
      o(),
      lt(),
      ut(),
      $t(),
      ye(),
      ht(),
      L(),
      Rn(),
      Fe(),
      D(),
      ci(),
      vi(),
      (X = U()));
  });
function wi(e) {
  let t = (0, Ti.c)(5),
    {
      isResetFillActive: n,
      onResetAttemptCancel: r,
      onResetAttemptStart: i,
      onResetComplete: a,
    } = e;
  if (!Dt(`85924660`)) return null;
  let o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, Ei.jsx)(yi, {
          isResetFillActive: n,
          onResetAttemptCancel: r,
          onResetAttemptStart: i,
          onResetComplete: a,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Ti,
  Ei,
  Di = e(() => {
    ((Ti = G()), We(), Ci(), (Ei = U()));
  });
function Oi() {
  let e = (0, ji.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Mi.jsx)(_, {
          id: `settings.usage.enterprise.billing.title`,
          defaultMessage: `Usage`,
          description: `Title for enterprise usage settings`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ki() {
  let e = (0, ji.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Mi.jsx)(_, {
          id: `settings.usage.enterprise.billing.subtitle`,
          defaultMessage: `See how credits, tokens, plugins, and skills contribute to your usage`,
          description: `Subtitle for enterprise usage and billing analytics settings`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ai(e) {
  let t = (0, ji.c)(35),
    { limitCredits: n, remainingPercent: r, resetLabel: i, usedCredits: a, usageLabel: o } = e,
    s = I(),
    c = n ?? 0,
    l = a != null && n != null && n > 0,
    u;
  t[0] !== c || t[1] !== l
    ? ((u = { credits: c, enabled: l }), (t[0] = c), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let { data: d } = In(u),
    f = d?.estimated_usage_usd_micros == null ? null : d.estimated_usage_usd_micros / 1e6,
    p = a == null || n == null || n <= 0 || f == null ? null : (a / n) * f,
    m;
  t[3] === s
    ? (m = t[4])
    : ((m = (e) =>
        s.formatNumber(e, {
          style: `currency`,
          currency: `USD`,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })),
      (t[3] = s),
      (t[4] = m));
  let h = m,
    g;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Mi.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Mi.jsx)(_, {
          id: `settings.usage.limits.monthly.billingLabel`,
          defaultMessage: `Monthly limit`,
          description: `Label for the monthly credit limit card in enterprise usage settings`,
        }),
      })),
      (t[5] = g))
    : (g = t[5]);
  let v;
  t[6] !== s || t[7] !== r
    ? ((v = s.formatNumber(r, { maximumFractionDigits: 0 })), (t[6] = s), (t[7] = r), (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] === v
    ? (y = t[10])
    : ((y = (0, Mi.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [
          g,
          (0, Mi.jsx)(`span`, {
            className: `text-xs text-secondary tabular-nums`,
            children: (0, Mi.jsx)(_, {
              id: `settings.usage.limits.progress.remaining`,
              defaultMessage: `{remaining}% left`,
              description: `Remaining percentage shown next to usage progress`,
              values: { remaining: v },
            }),
          }),
        ],
      })),
      (t[9] = v),
      (t[10] = y));
  let b = 100 - r,
    x;
  t[11] === s
    ? (x = t[12])
    : ((x = s.formatMessage({
        id: `settings.usage.limits.monthly.billingProgressAriaLabel`,
        defaultMessage: `Monthly credits used`,
        description: `Accessible label for the monthly credit consumption progress bar in enterprise billing analytics settings`,
      })),
      (t[11] = s),
      (t[12] = x));
  let S;
  t[13] !== b || t[14] !== x
    ? ((S = (0, Mi.jsx)(`progress`, {
        max: 100,
        value: b,
        "aria-label": x,
        className: `h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-primary-solid [&::-ms-fill]:bg-primary-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-primary-solid`,
      })),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === i
    ? (C = t[17])
    : ((C = (0, Mi.jsx)(`span`, { children: i })), (t[16] = i), (t[17] = C));
  let w;
  t[18] !== f ||
  t[19] !== p ||
  t[20] !== h ||
  t[21] !== s ||
  t[22] !== n ||
  t[23] !== o ||
  t[24] !== a
    ? ((w =
        o == null || a == null || n == null || p == null || f == null
          ? o
          : (0, Mi.jsx)(_, {
              id: `settings.usage.limits.monthly.creditsAndEstimatedSpendUsed`,
              defaultMessage: `{used} of {limit} credits used · Est. {usedCost} of {limitCost} used`,
              description: `Monthly usage summary showing credits used out of the credit limit, followed by estimated US dollars spent out of the estimated dollar limit`,
              values: {
                used: s.formatNumber(a, { maximumFractionDigits: 0 }),
                limit: s.formatNumber(n, { maximumFractionDigits: 0 }),
                usedCost: h(p),
                limitCost: h(f),
              },
            })),
      (t[18] = f),
      (t[19] = p),
      (t[20] = h),
      (t[21] = s),
      (t[22] = n),
      (t[23] = o),
      (t[24] = a),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] === w
    ? (T = t[27])
    : ((T = (0, Mi.jsx)(`span`, { className: `tabular-nums`, children: w })),
      (t[26] = w),
      (t[27] = T));
  let E;
  t[28] !== C || t[29] !== T
    ? ((E = (0, Mi.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 text-xs text-tertiary`,
        children: [C, T],
      })),
      (t[28] = C),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D;
  return (
    t[31] !== S || t[32] !== E || t[33] !== y
      ? ((D = (0, Mi.jsxs)(`div`, {
          className: `flex flex-col gap-2 p-4 select-none`,
          children: [y, S, E],
        })),
        (t[31] = S),
        (t[32] = E),
        (t[33] = y),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
var ji,
  Mi,
  Ni = e(() => {
    ((ji = G()), B(), Ln(), (Mi = U()));
  });
function Pi(e) {
  let t = (0, Ii.c)(18),
    {
      accessibleLabel: n,
      isResetFillActive: r,
      remainingLabel: i,
      remainingPercent: a,
      resetFillAnimation: o,
      resetFillRemainingPercent: s,
    } = e,
    c = r !== void 0 && r,
    l = i === void 0 ? `left` : i,
    u = I(),
    d = Le(a),
    f = Le(s ?? a),
    p = z(0),
    m = c && s == null ? void 0 : o,
    h = m?.progress ?? p,
    g = c && m != null && s != null,
    v;
  t[0] === f ? (v = t[1]) : ((v = (e) => f + (100 - f) * e), (t[0] = f), (t[1] = v));
  let y = Ge(h, v),
    x = Ge(y, Fi),
    S = g ? 100 : d,
    C;
  t[2] !== n || t[3] !== u
    ? ((C =
        n ??
        u.formatMessage({
          id: `settings.usage.limits.progress.ariaLabel`,
          defaultMessage: `Usage remaining`,
          description: `Aria label for usage remaining progress bars`,
        })),
      (t[2] = n),
      (t[3] = u),
      (t[4] = C))
    : (C = t[4]);
  let w = C,
    T = g
      ? (0, Li.jsx)(b.span, { children: x }, `remaining-percent`)
      : u.formatNumber(d, { maximumFractionDigits: 0 }),
    E;
  t[5] !== y || t[6] !== d || t[7] !== S || t[8] !== m || t[9] !== w || t[10] !== g
    ? ((E = (0, Li.jsx)(`div`, {
        className: `w-24`,
        children:
          m == null
            ? (0, Li.jsx)(`progress`, {
                max: 100,
                value: d,
                "aria-label": w,
                className: `h-1.5 w-24 overflow-hidden rounded-full [&::-moz-progress-bar]:bg-primary-solid [&::-ms-fill]:bg-primary-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-primary-solid`,
              })
            : (0, Li.jsx)(sn, {
                accessibleLabel: w,
                animatedPercent: y,
                isResetFillActive: g,
                remainingPercent: S,
                resetFillAnimation: m,
              }),
      })),
      (t[5] = y),
      (t[6] = d),
      (t[7] = S),
      (t[8] = m),
      (t[9] = w),
      (t[10] = g),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] !== T || t[13] !== l
    ? ((D = (0, Li.jsx)(`span`, {
        className: `min-w-[72px] text-end text-sm whitespace-nowrap text-secondary tabular-nums`,
        children:
          l === `remaining`
            ? (0, Li.jsx)(_, {
                id: `settings.usage.limits.monthly.progress.remaining`,
                defaultMessage: `{remaining}% remaining`,
                description: `Remaining percentage shown next to usage progress`,
                values: { remaining: T },
              })
            : (0, Li.jsx)(_, {
                id: `settings.usage.limits.progress.remaining`,
                defaultMessage: `{remaining}% left`,
                description: `Remaining percentage shown next to usage progress`,
                values: { remaining: T },
              }),
      })),
      (t[12] = T),
      (t[13] = l),
      (t[14] = D))
    : (D = t[14]);
  let O;
  return (
    t[15] !== E || t[16] !== D
      ? ((O = (0, Li.jsxs)(`div`, { className: `flex items-center gap-2`, children: [E, D] })),
        (t[15] = E),
        (t[16] = D),
        (t[17] = O))
      : (O = t[17]),
    O
  );
}
function Fi(e) {
  return Math.round(e);
}
var Ii,
  Li,
  Ri = e(() => {
    ((Ii = G()), mt(), B(), ln(), et(), (Li = U()));
  });
function zi() {
  let e = (0, Gi.c)(21),
    { accountId: t, authMethod: n, userId: r } = qe(),
    i = n === `chatgpt` && t != null && r != null,
    a;
  e[0] !== t || e[1] !== r
    ? ((a = [`usage-settings`, `chatpass-apps`, t, r]), (e[0] = t), (e[1] = r), (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] !== i || e[4] !== a
    ? ((o = {
        queryKey: a,
        enabled: i,
        queryFn: Vi,
        staleTime: Rt.ONE_MINUTE,
        refetchInterval: Bi,
        refetchOnWindowFocus: !0,
        retry: !1,
      }),
      (e[3] = i),
      (e[4] = a),
      (e[5] = o))
    : (o = e[5]);
  let { data: s, isError: c, isFetching: l, isSuccess: u, refetch: d } = Ce(o);
  if (!i || (u && s == null)) return null;
  let f;
  e[6] !== t || e[7] !== s || e[8] !== r
    ? ((f = s == null ? null : (0, Z.jsx)(Hi, { apps: s.items }, `${t}:${r}`)),
      (e[6] = t),
      (e[7] = s),
      (e[8] = r),
      (e[9] = f))
    : (f = e[9]);
  let p;
  e[10] !== c || e[11] !== l || e[12] !== d
    ? ((p = c
        ? (0, Z.jsx)(K, {
            label: (0, Z.jsx)(`span`, {
              role: `alert`,
              children: (0, Z.jsx)(_, {
                id: `settings.usage.subscriptionSharing.apps.loadError`,
                defaultMessage: `Couldn't load app limits`,
                description: `Error when fetching per-app subscription sharing limits and usage`,
              }),
            }),
            control: (0, Z.jsx)(W, {
              color: `secondary`,
              size: `toolbar`,
              disabled: l,
              onClick: () => void d(),
              children: (0, Z.jsx)(_, {
                id: `settings.usage.subscriptionSharing.apps.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry loading per-app subscription sharing limits and usage`,
              }),
            }),
          })
        : null),
      (e[10] = c),
      (e[11] = l),
      (e[12] = d),
      (e[13] = p))
    : (p = e[13]);
  let m;
  e[14] !== s || e[15] !== c
    ? ((m =
        !c && s == null
          ? (0, Z.jsx)(K, {
              label: (0, Z.jsx)(`span`, {
                role: `status`,
                children: (0, Z.jsx)(_, {
                  id: `settings.usage.subscriptionSharing.apps.loading`,
                  defaultMessage: `Loading app limits…`,
                  description: `Loading state for per-app subscription sharing limits and usage`,
                }),
              }),
              control: null,
            })
          : null),
      (e[14] = s),
      (e[15] = c),
      (e[16] = m))
    : (m = e[16]);
  let h;
  return (
    e[17] !== f || e[18] !== p || e[19] !== m
      ? ((h = (0, Z.jsxs)(V, { className: `select-none`, children: [f, p, m] })),
        (e[17] = f),
        (e[18] = p),
        (e[19] = m),
        (e[20] = h))
      : (h = e[20]),
    h
  );
}
function Bi(e) {
  return e.state.status === `success` && e.state.data == null ? !1 : Rt.ONE_MINUTE;
}
async function Vi(e) {
  let { signal: t } = e;
  try {
    return await S.safeGet(`/wham/usage/chatpass/apps`, { signal: t });
  } catch (e) {
    let t = e;
    if (t instanceof we && (t.status === 401 || t.status === 403 || t.status === 404)) return null;
    throw t;
  }
}
function Hi(e) {
  let t = (0, Gi.c)(12),
    { apps: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = {}), (t[0] = r)) : (r = t[0]);
  let [i, a] = (0, Ki.useState)(r),
    o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(K, {
        label: (0, Z.jsx)(_, {
          id: `settings.usage.subscriptionSharing.apps.title`,
          defaultMessage: `App limits`,
          description: `Heading for individual app limits within subscription sharing settings`,
        }),
        control: null,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === n.length
    ? (s = t[3])
    : ((s =
        n.length === 0
          ? (0, Z.jsx)(K, {
              label: (0, Z.jsx)(_, {
                id: `settings.usage.subscriptionSharing.apps.empty`,
                defaultMessage: `No apps are sharing your subscription`,
                description: `Empty state when the per-app subscription sharing usage endpoint returns no apps`,
              }),
              control: null,
            })
          : null),
      (t[2] = n.length),
      (t[3] = s));
  let c;
  if (t[4] !== i || t[5] !== n) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e) =>
          (0, Z.jsx)(
            Ui,
            {
              app: e,
              limitPercent: i[e.id] ?? e.allowed_usage_percent,
              onLimitChange: (t) => {
                a((n) => {
                  let r = { ...n };
                  return (t === e.allowed_usage_percent ? delete r[e.id] : (r[e.id] = t), r);
                });
              },
            },
            e.id,
          )),
        (t[7] = i),
        (t[8] = e)),
      (c = n.map(e)),
      (t[4] = i),
      (t[5] = n),
      (t[6] = c));
  } else c = t[6];
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, Z.jsxs)(Z.Fragment, { children: [o, s, c] })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Ui(e) {
  let t = (0, Gi.c)(21),
    { app: n, limitPercent: r, onLimitChange: i } = e,
    a = I(),
    o;
  t[0] !== n || t[1] !== r ? ((o = Wi(n, r)), (t[0] = n), (t[1] = r), (t[2] = o)) : (o = t[2]);
  let s = o,
    c;
  t[3] === n
    ? (c = t[4])
    : ((c = (0, Z.jsx)(Wn, { app: { ...n, type: `oai_apps` } })), (t[3] = n), (t[4] = c));
  let l;
  t[5] !== a || t[6] !== s
    ? ((l =
        s === 0
          ? (0, Z.jsx)(oe, {
              className: `text-warning`,
              "aria-label": a.formatMessage({
                id: `settings.usage.subscriptionSharing.apps.limitReached`,
                defaultMessage: `Weekly app limit reached`,
                description: `Accessible warning when an app has no weekly subscription sharing allowance left`,
              }),
            })
          : null),
      (t[5] = a),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== n.name || t[9] !== l
    ? ((u = (0, Z.jsxs)(`span`, { className: `flex items-center gap-2`, children: [n.name, l] })),
      (t[8] = n.name),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== n.name || t[12] !== a || t[13] !== r || t[14] !== i || t[15] !== s
    ? ((d =
        s == null
          ? (0, Z.jsx)(`span`, {
              className: `text-sm text-secondary`,
              children: (0, Z.jsx)(_, {
                id: `settings.usage.subscriptionSharing.apps.usageUnavailable`,
                defaultMessage: `Usage unavailable`,
                description: `Shown instead of a remaining percentage when an app's weekly subscription sharing usage cannot be determined`,
              }),
            })
          : (0, Z.jsxs)(`div`, {
              className: `flex w-full flex-wrap items-center justify-between gap-4`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex flex-col items-start gap-0.5`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-xs text-secondary`,
                      children: (0, Z.jsx)(_, {
                        id: `settings.usage.subscriptionSharing.apps.limit`,
                        defaultMessage: `Limit`,
                        description: `Label above an app's percentage limit selector in subscription sharing settings`,
                      }),
                    }),
                    (0, Z.jsx)(P, {
                      align: `start`,
                      contentWidth: `menuNarrow`,
                      triggerButton: (0, Z.jsx)(be, {
                        color: `ghostSecondary`,
                        "aria-label": a.formatMessage(
                          {
                            id: `settings.usage.subscriptionSharing.apps.limitLabel`,
                            defaultMessage: `Weekly limit for {app}: {limit, number, percent}`,
                            description: `Accessible label for an app's weekly subscription sharing limit selector, including its currently selected percentage`,
                          },
                          { app: n.name, limit: r / 100 },
                        ),
                        children: (0, Z.jsx)(It, { style: `percent`, value: r / 100 }),
                      }),
                      children: qi.map((e) =>
                        (0, Z.jsx)(
                          j.Item,
                          {
                            "aria-checked": e === r,
                            role: `menuitemradio`,
                            rightIcon: e === r ? (0, Z.jsx)(ft, {}) : void 0,
                            onSelect: () => i(e),
                            children: (0, Z.jsx)(It, { style: `percent`, value: e / 100 }),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Z.jsx)(Pi, {
                  accessibleLabel: a.formatMessage(
                    {
                      id: `settings.usage.subscriptionSharing.apps.remainingLabel`,
                      defaultMessage: `Weekly usage remaining for {app}`,
                      description: `Accessible label for a named app's remaining weekly subscription sharing progress bar`,
                    },
                    { app: n.name },
                  ),
                  remainingPercent: s,
                }),
              ],
            })),
      (t[11] = n.name),
      (t[12] = a),
      (t[13] = r),
      (t[14] = i),
      (t[15] = s),
      (t[16] = d))
    : (d = t[16]);
  let f;
  return (
    t[17] !== c || t[18] !== u || t[19] !== d
      ? ((f = (0, Z.jsx)(K, {
          className: `max-sm:flex-col max-sm:items-stretch`,
          icon: c,
          label: u,
          control: d,
        })),
        (t[17] = c),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function Wi(e, t) {
  return t === 0
    ? 0
    : t === e.allowed_usage_percent
      ? (e.windows?.find((e) => e.limit_window_seconds === Ji)?.remaining_percent ?? null)
      : null;
}
var Gi,
  Ki,
  Z,
  qi,
  Ji,
  Yi = e(() => {
    ((Gi = G()),
      Tt(),
      (Ki = t(s(), 1)),
      B(),
      Mt(),
      o(),
      ze(),
      Ne(),
      Gn(),
      Fe(),
      ke(),
      D(),
      Te(),
      R(),
      m(),
      Ri(),
      (Z = U()),
      (qi = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]),
      (Ji = 10080 * 60));
  }),
  Xi,
  Zi,
  Qi = e(() => {
    (s(),
      (Xi = U()),
      (Zi = (e) =>
        (0, Xi.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Xi.jsx)(`path`, {
            d: `M2.66681 1.6416C2.95661 1.64178 3.19123 1.87715 3.19123 2.16699V4.02734C4.3333 2.67207 6.04732 1.80861 7.96466 1.80859C11.4006 1.80869 14.1922 4.57839 14.1922 8.00098C14.1918 11.4232 11.4003 14.1923 7.96466 14.1924C4.86286 14.1924 2.28811 11.9362 1.81525 8.97949C1.7695 8.69318 1.96448 8.42368 2.2508 8.37793C2.53702 8.33234 2.80662 8.52725 2.85236 8.81348C3.24421 11.2641 5.38203 13.1425 7.96466 13.1426C10.8266 13.1425 13.141 10.8371 13.1414 8.00098C13.1414 5.16445 10.8269 2.85947 7.96466 2.85938C6.31988 2.85939 4.85564 3.62099 3.90705 4.80859H5.99982C6.28977 4.80859 6.52521 5.04403 6.52521 5.33398C6.52503 5.62378 6.28966 5.8584 5.99982 5.8584H2.99982C2.5258 5.85836 2.14142 5.47402 2.14142 5V2.16699C2.14142 1.87706 2.37689 1.64164 2.66681 1.6416Z`,
            fill: `currentColor`,
          }),
        })));
  });
function $i(e) {
  let t = (0, ta.c)(21),
    { rateLimitStatus: n } = e,
    r = i(He),
    a = I(),
    o = ne(),
    { data: s } = Pt(),
    { data: c, isError: l } = $e(),
    u = Vt(s?.structure === `personal` ? `personal` : s?.id, `use_embedded_credit_checkout`, !0);
  if (
    l ||
    c?.immediate_reset_purchase_eligible !== !0 ||
    s?.structure !== `personal` ||
    s.id !== n?.account_id ||
    !tt(n).some(ea)
  )
    return null;
  let d;
  t[0] !== o.hash ||
  t[1] !== o.pathname ||
  t[2] !== o.search ||
  t[3] !== n.account_id ||
  t[4] !== r ||
  t[5] !== u
    ? ((d = (e) => {
        (Xe(r, St, { surface: `codex_desktop_usage_settings` }),
          !u({
            getUrl: hn,
            state: {
              rateLimitResetCheckout: {
                accountId: n.account_id,
                conversationId: null,
                returnTo: `${o.pathname}${o.search}${o.hash}`,
                turnId: null,
              },
            },
          }) &&
            de({
              event: e,
              href: hn(),
              initiator: `open_in_browser_bridge`,
              useExternalBrowser: !0,
            }));
      }),
      (t[0] = o.hash),
      (t[1] = o.pathname),
      (t[2] = o.search),
      (t[3] = n.account_id),
      (t[4] = r),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, na.jsx)(Zi, {
        "aria-hidden": !0,
        className: `icon-sm -scale-x-100 transform text-default`,
      })),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, na.jsx)(`span`, {
        className: `truncate`,
        children: (0, na.jsx)(_, {
          id: `settings.usage.limits.buyReset.label`,
          defaultMessage: `Reset your usage limits now`,
          description: `Label for the immediate Codex usage reset purchase action beneath the user's personal usage limits`,
        }),
      })),
      (t[8] = m))
    : (m = t[8]);
  let g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, na.jsx)(_, {
        id: `settings.usage.limits.buyReset.tooltip`,
        defaultMessage: `This is not a banked reset. Buying an instant reset will reset your limits immediately.`,
        description: `Tooltip explaining that purchasing a Codex usage reset applies it immediately instead of saving a banked reset`,
      })),
      (t[9] = g))
    : (g = t[9]);
  let v;
  t[10] === a
    ? (v = t[11])
    : ((v = a.formatMessage({
        id: `settings.usage.limits.buyReset.tooltipLabel`,
        defaultMessage: `How buying a reset works`,
        description: `Accessible label for the tooltip explaining that a purchased Codex usage reset applies immediately and cannot be banked`,
      })),
      (t[10] = a),
      (t[11] = v));
  let y;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, na.jsx)(h, { "aria-hidden": !0, className: `icon-xxs` })), (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === v
    ? (b = t[14])
    : ((b = (0, na.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1 select-none`,
        children: [
          m,
          (0, na.jsx)(re, {
            side: `bottom`,
            tooltipContent: g,
            children: (0, na.jsx)(W, {
              "aria-label": v,
              color: `ghostTertiary`,
              size: `inline`,
              children: y,
            }),
          }),
        ],
      })),
      (t[13] = v),
      (t[14] = b));
  let x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, na.jsx)(_, {
        id: `settings.usage.limits.buyReset.button`,
        defaultMessage: `Buy an instant reset`,
        description: `Button for purchasing an immediate reset of the user's personal Codex usage limits`,
      })),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] === f
    ? (S = t[17])
    : ((S = (0, na.jsx)(W, { color: `ghostAccent`, onClick: f, size: `composerSm`, children: x })),
      (t[16] = f),
      (t[17] = S));
  let C;
  return (
    t[18] !== b || t[19] !== S
      ? ((C = (0, na.jsx)(`div`, {
          className: `-mt-5 rounded-b-2xl bg-surface-secondary pt-4`,
          children: (0, na.jsx)(K, { icon: p, label: b, control: S, size: `compact` }),
        })),
        (t[18] = b),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
function ea(e) {
  let { usedPercent: t } = e;
  return t > 0;
}
var ta,
  na,
  ra = e(() => {
    ((ta = G()),
      Lt(),
      F(),
      B(),
      k(),
      wt(),
      o(),
      se(),
      N(),
      Ft(),
      vt(),
      On(),
      Qi(),
      zt(),
      ye(),
      ht(),
      Fe(),
      (na = U()));
  });
function ia(e) {
  let t = (0, Ea.c)(23),
    {
      isResetFillActive: n,
      rateLimitStatus: r,
      resetFillAnimation: i,
      resetFillRateLimitStatus: a,
      showEnterpriseMonthlyUsageLimit: o,
      showResetPurchase: s,
      showUsageBillingLayout: c,
      canRequestEnterpriseMonthlyUsageLimit: l,
      workspaceRequestPolicy: d,
      workspaceMonthlyUsage: f,
      workspaceAdminRequests: p,
      isWorkspaceAdminRequestsLoading: m,
      isSavingWorkspaceAdminRequest: h,
      saveWorkspaceAdminRequest: g,
    } = e,
    v = n !== void 0 && n,
    y = o !== void 0 && o,
    b = s !== void 0 && s,
    x = c !== void 0 && c,
    S = l !== void 0 && l,
    C = f === void 0 ? null : f,
    w = p === void 0 ? null : p,
    T = m !== void 0 && m,
    E = h !== void 0 && h,
    D = v && a != null ? a : r,
    O,
    k,
    A,
    j;
  if (
    t[0] !== S ||
    t[1] !== v ||
    t[2] !== E ||
    t[3] !== T ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== g ||
    t[8] !== y ||
    t[9] !== b ||
    t[10] !== x ||
    t[11] !== D ||
    t[12] !== w ||
    t[13] !== C ||
    t[14] !== d
  ) {
    j = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = u(D),
        t = ga(e, null),
        n = v && a != null ? ha(ga(u(a), null)) : null,
        o = y ? ya(C, D) : va({ rateLimitStatus: D, coreUsageLimitRows: t }),
        s = o == null ? t : t.filter(la),
        c = ga(e, Oa),
        l = (D?.chatpass?.windows ?? []).map(ca).sort(sa),
        f = y && S,
        p = d?.kind === `custom` ? d.request_url : null,
        m = y && o == null,
        h = y && D?.chatpass != null && l.length === 0;
      if (o == null && s.length === 0 && c.length === 0 && l.length === 0 && !m && !f) {
        j = null;
        break bb0;
      }
      ((O =
        o != null || s.length > 0 || m || f
          ? (0, Q.jsxs)(H, {
              children: [
                (0, Q.jsx)(H.Header, {
                  title: x
                    ? (0, Q.jsx)(_, {
                        id: `settings.usage.limits.plan.title`,
                        defaultMessage: `Plan limits`,
                        description: `Title for enterprise usage limits that are shared across eligible products`,
                      })
                    : (0, Q.jsx)(_, {
                        id: `settings.usage.limits.title`,
                        defaultMessage: `General usage limits`,
                        description: `Title for the usage limits section in usage settings`,
                      }),
                  subtitle: x
                    ? (0, Q.jsx)(_, {
                        id: `settings.usage.limits.plan.subtitle`,
                        defaultMessage: `Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included.`,
                        description: `Explains which products share an enterprise plan's usage limit and that ChatGPT chat conversations do not count toward that limit`,
                      })
                    : null,
                }),
                (0, Q.jsxs)(H.Content, {
                  children: [
                    m
                      ? (0, Q.jsx)(ua, {
                          currentMonthUsage: C?.current_month_usage ?? null,
                          showEstimatedSpend: x,
                        })
                      : null,
                    o != null || s.length > 0
                      ? (0, Q.jsxs)(V, {
                          className: b ? `electron:relative electron:z-10` : void 0,
                          children: [
                            o == null
                              ? null
                              : (0, Q.jsx)(
                                  pa,
                                  {
                                    isResetFillActive: v,
                                    resetFillAnimation: i,
                                    resetFillRemainingPercent: n?.get(o.key),
                                    showUsageBillingLayout: x,
                                    usageLimit: o,
                                  },
                                  o.key,
                                ),
                            s.map((e) =>
                              (0, Q.jsx)(
                                ma,
                                {
                                  isResetFillActive: v,
                                  rateLimitRow: e,
                                  resetFillAnimation: i,
                                  resetFillRemainingPercent: n?.get(e.key),
                                },
                                e.key,
                              ),
                            ),
                          ],
                        })
                      : null,
                    b
                      ? (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)($i, { rateLimitStatus: r }) })
                      : null,
                    f && d?.kind === `openai_native`
                      ? (0, Q.jsx)(fa, {
                          pendingRequest: ba(w),
                          isLoading: T,
                          isSaving: E,
                          saveWorkspaceAdminRequest: g,
                        })
                      : null,
                    f && d?.kind === `custom`
                      ? (0, Q.jsx)(V, {
                          className: `mt-2`,
                          children: (0, Q.jsx)(K, {
                            label: null,
                            description:
                              d.instructions == null
                                ? null
                                : (0, Q.jsx)(`span`, {
                                    className: `leading-relaxed whitespace-pre-wrap`,
                                    children: d.instructions,
                                  }),
                            control:
                              p == null
                                ? null
                                : (0, Q.jsx)(W, {
                                    color: `primary`,
                                    size: `medium`,
                                    className: `rounded-full`,
                                    onClick: (e) => {
                                      de({
                                        event: e,
                                        href: p,
                                        initiator: `open_in_browser_bridge`,
                                      });
                                    },
                                    children: (0, Q.jsx)(_, {
                                      id: `settings.usage.limits.customRequestIncrease`,
                                      defaultMessage: `Request more usage`,
                                      description: `Member-facing button in Codex usage settings that opens the workspace's custom HTTPS page for requesting more monthly usage`,
                                    }),
                                  }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
        (k =
          l.length > 0 || h
            ? (0, Q.jsxs)(H, {
                children: [
                  (0, Q.jsx)(H.Header, {
                    title: (0, Q.jsx)(_, {
                      id: `settings.usage.subscriptionSharing.title`,
                      defaultMessage: `Subscription sharing`,
                      description: `Title for the section showing how much of the user's subscription allowance is shared with ChatPass applications`,
                    }),
                  }),
                  (0, Q.jsxs)(H.Content, {
                    children: [
                      (0, Q.jsx)(V, { children: h ? (0, Q.jsx)(da, {}) : l.map(oa) }),
                      (0, Q.jsx)(zi, {}),
                    ],
                  }),
                ],
              })
            : null),
        (A =
          c.length > 0
            ? (0, Q.jsxs)(H, {
                children: [
                  (0, Q.jsx)(H.Header, {
                    title: (0, Q.jsx)(_, {
                      id: `settings.usage.limits.spark.title`,
                      defaultMessage: `GPT-5.3-Codex-Spark usage limits`,
                      description: `Title for the GPT-5.3-Codex-Spark usage limits section`,
                    }),
                  }),
                  (0, Q.jsx)(H.Content, { children: (0, Q.jsx)(V, { children: c.map(aa) }) }),
                ],
              })
            : null));
    }
    ((t[0] = S),
      (t[1] = v),
      (t[2] = E),
      (t[3] = T),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a),
      (t[7] = g),
      (t[8] = y),
      (t[9] = b),
      (t[10] = x),
      (t[11] = D),
      (t[12] = w),
      (t[13] = C),
      (t[14] = d),
      (t[15] = O),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j));
  } else ((O = t[15]), (k = t[16]), (A = t[17]), (j = t[18]));
  if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
  let M;
  return (
    t[19] !== O || t[20] !== k || t[21] !== A
      ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [O, k, A] })),
        (t[19] = O),
        (t[20] = k),
        (t[21] = A),
        (t[22] = M))
      : (M = t[22]),
    M
  );
}
function aa(e) {
  return (0, Q.jsx)(
    ma,
    {
      isResetFillActive: !1,
      rateLimitRow: e,
      resetFillAnimation: void 0,
      resetFillRemainingPercent: void 0,
    },
    e.key,
  );
}
function oa(e) {
  return (0, Q.jsx)(
    ma,
    {
      isResetFillActive: !1,
      rateLimitRow: e,
      resetFillAnimation: void 0,
      resetFillRemainingPercent: void 0,
    },
    e.key,
  );
}
function sa(e, t) {
  return e.bucket.windowDurationMins - t.bucket.windowDurationMins;
}
function ca(e) {
  return {
    key: `chatpass-${e.limit_window_seconds}`,
    bucket: {
      usedPercent: e.used_percent,
      windowDurationMins: e.limit_window_seconds / 60,
      resetsAt: e.reset_at,
    },
    limitName: null,
  };
}
function la(e) {
  return !Ca(e);
}
function ua(e) {
  let t = (0, Ea.c)(10),
    { currentMonthUsage: n, showEstimatedSpend: r } = e,
    i = I(),
    a = n ?? 0,
    o = r && n != null && n > 0,
    s;
  t[0] !== a || t[1] !== o
    ? ((s = { credits: a, enabled: o }), (t[0] = a), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let { data: c } = In(s),
    l = !r || c?.estimated_usage_usd_micros == null ? null : c.estimated_usage_usd_micros / 1e6,
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(da, { muted: !0 })), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== n || t[5] !== l || t[6] !== i
    ? ((d =
        n == null
          ? null
          : (0, Q.jsx)(K, {
              label: (0, Q.jsx)(_, {
                id: `settings.usage.limits.monthly.currentUsage`,
                defaultMessage: `Your usage this month`,
                description: `Label for the current user's monthly credit usage when no monthly usage limit is set.`,
              }),
              control: (0, Q.jsx)(`span`, {
                className: `text-sm text-secondary tabular-nums`,
                children:
                  l == null
                    ? (0, Q.jsx)(_, {
                        id: `settings.usage.limits.monthly.currentUsageCredits`,
                        defaultMessage: `{credits, plural, one {# credit} other {# credits}}`,
                        description: `Credit amount used by the current user this month when no monthly usage limit is set.`,
                        values: { credits: Math.max(n, 0) },
                      })
                    : (0, Q.jsx)(_, {
                        id: `settings.usage.limits.monthly.currentUsageCreditsAndEstimatedSpend`,
                        defaultMessage: `{credits, plural, one {# credit} other {# credits}} · Est. {cost}`,
                        description: `Credits used this month and their estimated US dollar cost when no monthly usage limit is set`,
                        values: {
                          credits: Math.max(n, 0),
                          cost: i.formatNumber(l, {
                            style: `currency`,
                            currency: `USD`,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: l > 0 && l < 0.01 ? 6 : 2,
                          }),
                        },
                      }),
              }),
            })),
      (t[4] = n),
      (t[5] = l),
      (t[6] = i),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] === d ? (f = t[9]) : ((f = (0, Q.jsxs)(V, { children: [u, d] })), (t[8] = d), (t[9] = f)),
    f
  );
}
function da(e) {
  let t = (0, Ea.c)(4),
    { muted: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(h, { "aria-hidden": !0, className: `icon-sm text-tertiary` })), (t[0] = r))
    : (r = t[0]);
  let i = n ? `font-normal text-secondary` : void 0,
    a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(_, {
        id: `settings.usage.limits.monthly.none`,
        defaultMessage: `Your admin hasn’t set a usage limit`,
        description: `Informational message shown when the admin has not set a monthly usage limit for the current user`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] === i
      ? (o = t[3])
      : ((o = (0, Q.jsx)(K, {
          icon: r,
          label: (0, Q.jsx)(`span`, { className: i, children: a }),
          control: null,
        })),
        (t[2] = i),
        (t[3] = o)),
    o
  );
}
function fa(e) {
  let t = (0, Ea.c)(28),
    { pendingRequest: n, isLoading: r, isSaving: a, saveWorkspaceAdminRequest: o } = e,
    s = i(He),
    c = I(),
    [l, u] = (0, Da.useState)(!1),
    [d, f] = (0, Da.useState)(n?.justification ?? ``),
    p;
  t[0] !== c || t[1] !== d || t[2] !== n || t[3] !== o || t[4] !== s
    ? ((p = () => {
        let e = d.trim();
        if (e.length === 0) {
          s.get(ot).warning(
            c.formatMessage({
              id: `settings.usage.limits.requestMissingJustification`,
              defaultMessage: `Enter a justification to submit your request`,
              description: `Toast shown when a workspace usage limit request is missing a justification`,
            }),
          );
          return;
        }
        o?.({ justification: e, requestId: n?.id })
          .then(() => {
            (s.get(ot).success(
              c.formatMessage(
                n == null
                  ? {
                      id: `settings.usage.limits.requestSaved`,
                      defaultMessage: `Request submitted`,
                      description: `Toast shown when a workspace usage limit request is submitted`,
                    }
                  : {
                      id: `settings.usage.limits.requestUpdated`,
                      defaultMessage: `Request updated`,
                      description: `Toast shown when a workspace usage limit request is updated`,
                    },
              ),
            ),
              u(!1));
          })
          .catch(() => {
            s.get(ot).danger(
              c.formatMessage({
                id: `settings.usage.limits.requestSaveError`,
                defaultMessage: `Could not save your request. Please try again`,
                description: `Toast shown when a workspace usage limit request cannot be saved`,
              }),
            );
          });
      }),
      (t[0] = c),
      (t[1] = d),
      (t[2] = n),
      (t[3] = o),
      (t[4] = s),
      (t[5] = p))
    : (p = t[5]);
  let m = p,
    h;
  t[6] === n
    ? (h = t[7])
    : ((h =
        n == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(_, {
                id: `settings.usage.limits.requestPending`,
                defaultMessage: `Your request is pending admin review.`,
                description: `Status text for a pending workspace usage limit request`,
              }),
            })),
      (t[6] = n),
      (t[7] = h));
  let g = o == null,
    v;
  t[8] === n?.justification
    ? (v = t[9])
    : ((v = () => {
        (f(n?.justification ?? ``), u(!0));
      }),
      (t[8] = n?.justification),
      (t[9] = v));
  let y;
  t[10] === n
    ? (y = t[11])
    : ((y =
        n == null
          ? (0, Q.jsx)(_, {
              id: `settings.usage.limits.requestIncrease`,
              defaultMessage: `Request more usage`,
              description: `Button to request more monthly workspace usage`,
            })
          : (0, Q.jsx)(_, {
              id: `settings.usage.limits.updatePendingRequest`,
              defaultMessage: `Update pending request`,
              description: `Button to update an existing pending workspace usage limit request`,
            })),
      (t[10] = n),
      (t[11] = y));
  let b;
  t[12] !== r || t[13] !== g || t[14] !== v || t[15] !== y
    ? ((b = (0, Q.jsx)(W, {
        color: `primary`,
        size: `medium`,
        className: `self-start rounded-full`,
        loading: r,
        disabled: g,
        onClick: v,
        children: y,
      })),
      (t[12] = r),
      (t[13] = g),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== m || t[18] !== c || t[19] !== l || t[20] !== a || t[21] !== d || t[22] !== n
    ? ((x = l
        ? (0, Q.jsx)(V, {
            className: `mt-1 w-full`,
            children: (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-3 p-3`,
              children: [
                (0, Q.jsxs)(`label`, {
                  className: `flex flex-col gap-1.5 text-sm font-medium text-default`,
                  children: [
                    (0, Q.jsx)(_, {
                      id: `settings.usage.limits.requestJustificationLabel`,
                      defaultMessage: `Justification`,
                      description: `Label for the workspace usage limit request justification`,
                    }),
                    (0, Q.jsx)(Bt, {
                      value: d,
                      rows: 3,
                      placeholder: c.formatMessage({
                        id: `settings.usage.limits.requestJustificationPlaceholder`,
                        defaultMessage: `Tell your admin why you need more usage`,
                        description: `Placeholder for the workspace usage limit request justification`,
                      }),
                      onChange: (e) => {
                        f(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex justify-end gap-2`,
                  children: [
                    (0, Q.jsx)(W, {
                      color: `secondary`,
                      size: `default`,
                      onClick: () => {
                        u(!1);
                      },
                      children: (0, Q.jsx)(_, {
                        id: `settings.usage.limits.requestCancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for the workspace usage limit request form`,
                      }),
                    }),
                    (0, Q.jsx)(W, {
                      color: `primary`,
                      size: `default`,
                      loading: a,
                      onClick: m,
                      children:
                        n == null
                          ? (0, Q.jsx)(_, {
                              id: `settings.usage.limits.requestSave`,
                              defaultMessage: `Submit request`,
                              description: `Submit button for a workspace usage limit request`,
                            })
                          : (0, Q.jsx)(_, {
                              id: `settings.usage.limits.requestUpdate`,
                              defaultMessage: `Update request`,
                              description: `Submit button for updating a pending workspace usage limit request`,
                            }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : null),
      (t[17] = m),
      (t[18] = c),
      (t[19] = l),
      (t[20] = a),
      (t[21] = d),
      (t[22] = n),
      (t[23] = x))
    : (x = t[23]);
  let S;
  return (
    t[24] !== h || t[25] !== b || t[26] !== x
      ? ((S = (0, Q.jsxs)(`div`, {
          className: `mt-2 flex flex-col items-start gap-2`,
          children: [h, b, x],
        })),
        (t[24] = h),
        (t[25] = b),
        (t[26] = x),
        (t[27] = S))
      : (S = t[27]),
    S
  );
}
function pa(e) {
  let t = (0, Ea.c)(31),
    {
      isResetFillActive: n,
      resetFillAnimation: i,
      resetFillRemainingPercent: a,
      showUsageBillingLayout: o,
      usageLimit: s,
    } = e,
    c = I(),
    l;
  t[0] === s.remainingPercent
    ? (l = t[1])
    : ((l = Le(s.remainingPercent)), (t[0] = s.remainingPercent), (t[1] = l));
  let u = l,
    d;
  if (t[2] !== s.resetAt) {
    let e = Ue(s.resetAt);
    ((d = e == null ? null : r(e)), (t[2] = s.resetAt), (t[3] = d));
  } else d = t[3];
  let f = d,
    p;
  t[4] !== c || t[5] !== s.limitCredits || t[6] !== s.usedCredits
    ? ((p =
        s.usedCredits == null || s.limitCredits == null
          ? null
          : c.formatMessage(
              {
                id: `settings.usage.limits.monthly.creditsUsed`,
                defaultMessage: `{used} of {limit} credits used`,
                description: `Usage summary for monthly usage limit credits that have been used`,
              },
              { used: Ta(c, s.usedCredits), limit: Ta(c, s.limitCredits) },
            )),
      (t[4] = c),
      (t[5] = s.limitCredits),
      (t[6] = s.usedCredits),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] === f
    ? (h = t[9])
    : ((h =
        f == null
          ? null
          : (0, Q.jsx)(_, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: f },
            })),
      (t[8] = f),
      (t[9] = h));
  let g = h;
  if (o) {
    let e = s.limitCredits == null ? null : Number(s.limitCredits),
      n = s.usedCredits == null ? null : Number(s.usedCredits),
      r;
    return (
      t[10] !== u || t[11] !== g || t[12] !== e || t[13] !== n || t[14] !== m
        ? ((r = (0, Q.jsx)(Ai, {
            limitCredits: e,
            remainingPercent: u,
            resetLabel: g,
            usedCredits: n,
            usageLabel: m,
          })),
          (t[10] = u),
          (t[11] = g),
          (t[12] = e),
          (t[13] = n),
          (t[14] = m),
          (t[15] = r))
        : (r = t[15]),
      r
    );
  }
  let v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(_, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== g || t[18] !== m
    ? ((y =
        m != null || g != null
          ? (0, Q.jsxs)(`span`, {
              className: `flex flex-wrap gap-x-2`,
              children: [
                m == null ? null : (0, Q.jsx)(`span`, { children: m }),
                g == null ? null : (0, Q.jsx)(`span`, { children: g }),
              ],
            })
          : null),
      (t[17] = g),
      (t[18] = m),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === c
    ? (b = t[21])
    : ((b = c.formatMessage({
        id: `settings.usage.limits.monthly.progress.remainingAriaLabel`,
        defaultMessage: `Monthly usage remaining`,
        description: `Accessible label for the monthly usage remaining progress bar`,
      })),
      (t[20] = c),
      (t[21] = b));
  let x;
  t[22] !== n || t[23] !== u || t[24] !== i || t[25] !== a || t[26] !== b
    ? ((x = (0, Q.jsx)(Pi, {
        accessibleLabel: b,
        isResetFillActive: n,
        remainingLabel: `remaining`,
        remainingPercent: u,
        resetFillAnimation: i,
        resetFillRemainingPercent: a,
      })),
      (t[22] = n),
      (t[23] = u),
      (t[24] = i),
      (t[25] = a),
      (t[26] = b),
      (t[27] = x))
    : (x = t[27]);
  let S;
  return (
    t[28] !== y || t[29] !== x
      ? ((S = (0, Q.jsx)(K, { label: v, description: y, control: x })),
        (t[28] = y),
        (t[29] = x),
        (t[30] = S))
      : (S = t[30]),
    S
  );
}
function ma(e) {
  let t = (0, Ea.c)(19),
    {
      isResetFillActive: n,
      rateLimitRow: i,
      resetFillAnimation: a,
      resetFillRemainingPercent: o,
    } = e,
    s = I(),
    c;
  if (t[0] !== s || t[1] !== i.bucket.resetsAt || t[2] !== i.bucket.windowDurationMins) {
    let e = Ue(i.bucket.resetsAt ?? null);
    ((c =
      e == null
        ? null
        : wa(i.bucket.windowDurationMins ?? 0, 10080)
          ? s.formatDate(e, { dateStyle: `medium`, timeStyle: `short` })
          : r(e)),
      (t[0] = s),
      (t[1] = i.bucket.resetsAt),
      (t[2] = i.bucket.windowDurationMins),
      (t[3] = c));
  } else c = t[3];
  let l;
  t[4] === c
    ? (l = t[5])
    : ((l =
        c == null
          ? null
          : (0, Q.jsx)(_, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: c },
            })),
      (t[4] = c),
      (t[5] = l));
  let u = l,
    d = i.bucket.usedPercent ?? 0,
    f;
  t[6] === d ? (f = t[7]) : ((f = kt(d)), (t[6] = d), (t[7] = f));
  let p = f,
    m;
  t[8] === i ? (m = t[9]) : ((m = _a(i)), (t[8] = i), (t[9] = m));
  let h;
  t[10] !== n || t[11] !== p || t[12] !== a || t[13] !== o
    ? ((h = (0, Q.jsx)(Pi, {
        isResetFillActive: n,
        remainingPercent: p,
        resetFillAnimation: a,
        resetFillRemainingPercent: o,
      })),
      (t[10] = n),
      (t[11] = p),
      (t[12] = a),
      (t[13] = o),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== u || t[16] !== m || t[17] !== h
      ? ((g = (0, Q.jsx)(K, { label: m, description: u, control: h })),
        (t[15] = u),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function ha(e) {
  return new Map(e.map((e) => [e.key, kt(e.bucket.usedPercent ?? 0)]));
}
function ga(e, t) {
  let n = t == null ? (e.find((e) => e.limitName == null) ?? null) : O(e, t);
  return n == null ? [] : bt({ entry: n, keyPrefix: t ?? `core` });
}
function _a(e) {
  let t = e.bucket.windowDurationMins ?? 0;
  return Ca(e)
    ? (0, Q.jsx)(_, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })
    : wa(t, ka)
      ? (0, Q.jsx)(_, {
          id: `settings.usage.limits.fiveHour.label`,
          defaultMessage: `5 hour usage limit`,
          description: `Label for the 5-hour usage limit row`,
        })
      : wa(t, 10080)
        ? (0, Q.jsx)(_, {
            id: `settings.usage.limits.week.label`,
            defaultMessage: `Weekly usage limit`,
            description: `Label for a weekly usage limit row`,
          })
        : wa(t, 1440)
          ? (0, Q.jsx)(_, {
              id: `settings.usage.limits.day.label`,
              defaultMessage: `Daily usage limit`,
              description: `Label for a daily usage limit row`,
            })
          : (0, Q.jsx)(_, {
              id: `settings.usage.limits.genericWindow.label`,
              defaultMessage: `Usage limit`,
              description: `Generic label for a usage limit row`,
            });
}
function va({ rateLimitStatus: e, coreUsageLimitRows: t }) {
  let n = e?.spend_control?.individual_limit ?? null;
  if (n != null)
    return {
      key: `spend-control-monthly`,
      remainingPercent: n.remaining_percent,
      resetAt: n.reset_at,
      usedCredits: n.used,
      limitCredits: n.limit,
    };
  let r = t.find(Ca) ?? null;
  if (r == null) return null;
  let i = r.bucket.usedPercent ?? 0;
  return {
    key: r.key,
    remainingPercent: kt(i),
    resetAt: r.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}
function ya(e, t) {
  let n = ae(e);
  return n == null
    ? null
    : {
        key: `workspace-monthly`,
        remainingPercent: n.remainingPercent,
        resetAt:
          Number(t?.spend_control?.individual_limit?.limit) === n.limit
            ? (t?.spend_control?.individual_limit?.reset_at ?? null)
            : null,
        usedCredits: String(n.used),
        limitCredits: String(n.limit),
      };
}
function ba(e) {
  return e?.items.find((e) => e.status === `pending` && xa(e) != null) ?? null;
}
function xa(e) {
  return e.payloads.find(Sa) ?? null;
}
function Sa(e) {
  return e.kind === `spend_limit` && e.target.source === ja && e.target.source_id === Ma;
}
function Ca(e) {
  return wa(e.bucket.windowDurationMins ?? 0, Aa);
}
function wa(e, t) {
  return !Number.isFinite(e) || e <= 0 ? !1 : Math.abs(e - t) <= t * 0.05;
}
function Ta(e, t) {
  let n = Number(t);
  return Number.isFinite(n)
    ? e.formatNumber(Math.max(n, 0), { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : t;
}
var Ea,
  Da,
  Q,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na = e(() => {
    ((Ea = G()),
      F(),
      (Da = t(s(), 1)),
      B(),
      o(),
      se(),
      Ee(),
      ut(),
      Ln(),
      zt(),
      ht(),
      L(),
      Fe(),
      D(),
      et(),
      pt(),
      p(),
      De(),
      Ni(),
      Yi(),
      ra(),
      Ri(),
      (Q = U()),
      (Oa = `gpt-5.3-codex-spark`),
      (ka = 300),
      (Aa = 30 * T),
      (ja = `account_user_spend_controls`),
      (Ma = `account_user.credit_limits`));
  });
function Pa() {
  let e = (0, Ga.c)(112),
    t = Ie(),
    n;
  e[0] === t?.visibleSettingsSections
    ? (n = e[1])
    : ((n = t?.visibleSettingsSections.some(La) ?? !1),
      (e[0] = t?.visibleSettingsSections),
      (e[1] = n));
  let r = n,
    { data: i, isLoading: a, isError: o, refetch: s } = x(Et),
    {
      autoReloadSettings: c,
      canManageCreditSettings: l,
      canPurchaseBusinessCredits: u,
      canViewCreditSettings: p,
      isUsageSettingsVisible: m,
      isUsageSettingsAccessLoading: h,
      plan: g,
    } = Yt(i?.credits?.balance != null, `usage`),
    v = ct(),
    y = Dt(`85924660`),
    b = Dt(`1748121887`),
    S = Dt(`4027330399`),
    w = en(v),
    [T, D] = (0, Ka.useState)(null),
    [O, k] = (0, Ka.useState)(null),
    j;
  e[2] === g ? (j = e[3]) : ((j = it(g)), (e[2] = g), (e[3] = j));
  let N = j,
    ee;
  e[4] === g ? (ee = e[5]) : ((ee = bn(g)), (e[4] = g), (e[5] = ee));
  let P = (b || !1) && ee && !0,
    te = S && !0,
    ne = N && m && !h,
    re = l,
    ie;
  e[6] === re ? (ie = e[7]) : ((ie = { enabled: re }), (e[6] = re), (e[7] = ie));
  let { data: ae } = C(ie),
    oe;
  e[8] === ae?.one_time
    ? (oe = e[9])
    : ((oe = ae?.one_time.tiers.reduce(Ia, 0) ?? 0), (e[8] = ae?.one_time), (e[9] = oe));
  let se = oe,
    ce;
  e[10] === ae?.auto_reload?.tiers
    ? (ce = e[11])
    : ((ce = ae?.auto_reload?.tiers.reduce(Fa, 0) ?? 0),
      (e[10] = ae?.auto_reload?.tiers),
      (e[11] = ce));
  let le = ce,
    ue;
  e[12] === l
    ? (ue = e[13])
    : ((ue = { enabled: l, refetchOnWindowFocus: `always` }), (e[12] = l), (e[13] = ue));
  let { data: de } = A(ue),
    F = (de?.payment_methods.length ?? 0) > 0,
    me = l && !0,
    he;
  e[14] === me
    ? (he = e[15])
    : ((he = { enabled: me, includePaymentMethod: !0, refetchOnWindowFocus: `always` }),
      (e[14] = me),
      (e[15] = he));
  let { data: I, isLoading: ge, isError: ve, refetch: ye } = _e(he),
    L;
  e[16] !== I || e[17] !== l || e[18] !== F
    ? ((L = l && (F || (I?.isEnabled === !0 && vn(I.autoReloadCreditDiscountPolicy)))),
      (e[16] = I),
      (e[17] = l),
      (e[18] = F),
      (e[19] = L))
    : (L = e[19]);
  let R = L,
    be;
  e[20] === ne ? (be = e[21]) : ((be = { enabled: ne }), (e[20] = ne), (e[21] = be));
  let { data: xe, isLoading: Se, isError: Ce, refetch: we } = Ae(be),
    z =
      xe?.effective_monthly_limit?.limit != null &&
      xe.effective_monthly_limit.limit >= 0 &&
      xe.effective_monthly_limit.enforcement_mode === `HARD_CAP`,
    B = ne && z,
    Te;
  e[22] === B ? (Te = e[23]) : ((Te = { enabled: B }), (e[22] = B), (e[23] = Te));
  let { data: Ee, isLoading: De, isError: Oe, refetch: ke } = E(Te),
    V = Ee?.kind === `openai_native`,
    je = ne && z && V,
    Me;
  e[24] === je ? (Me = e[25]) : ((Me = { enabled: je }), (e[24] = je), (e[25] = Me));
  let { data: Ne, isLoading: Pe, isError: Fe, refetch: Le } = f(Me),
    Re = Ut(),
    {
      enableAutoTopUpMutation: ze,
      updateAutoTopUpMutation: Be,
      disableAutoTopUpMutation: H,
    } = pe(),
    Ve;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, $.jsx)(d, { slug: `usage` })), (e[26] = Ve))
    : (Ve = e[26]);
  let He = Ve;
  if (!m && !h) return null;
  let Ue = h,
    We = N
      ? (Se && xe == null) || (B && De && Ee == null) || (z && V && Pe && Ne == null)
      : (R && ge && I == null) || (a && i == null),
    Ge = N
      ? (Ce && xe == null) || (B && Oe && Ee == null) || (z && V && Fe && Ne == null)
      : (R && ve && I == null) || (o && i == null),
    Ke;
  e[27] !== R ||
  e[28] !== z ||
  e[29] !== N ||
  e[30] !== ye ||
  e[31] !== s ||
  e[32] !== Le ||
  e[33] !== we ||
  e[34] !== ke ||
  e[35] !== V
    ? ((Ke = () => {
        if (!N) {
          if (R) {
            Promise.all([ye(), s()]);
            return;
          }
          s();
          return;
        }
        (we(), z && (ke(), V && Le()));
      }),
      (e[27] = R),
      (e[28] = z),
      (e[29] = N),
      (e[30] = ye),
      (e[31] = s),
      (e[32] = Le),
      (e[33] = we),
      (e[34] = ke),
      (e[35] = V),
      (e[36] = Ke))
    : (Ke = e[36]);
  let qe = Ke,
    Je;
  e[37] === i
    ? (Je = e[38])
    : ((Je = () => {
        D((e) => e ?? i ?? null);
      }),
      (e[37] = i),
      (e[38] = Je));
  let Ye = Je,
    Xe;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = () => {
        D(null);
      }),
      (e[39] = Xe))
    : (Xe = e[39]);
  let Ze = Xe,
    Qe;
  e[40] !== i || e[41] !== T || e[42] !== w
    ? ((Qe = () => {
        let e = { animationComplete: !1, rateLimitStatus: T ?? i ?? null, refreshComplete: !1 };
        (D(null),
          k(e),
          w.start(() => {
            k((t) => (t === e ? { ...t, animationComplete: !0 } : t));
          }));
      }),
      (e[40] = i),
      (e[41] = T),
      (e[42] = w),
      (e[43] = Qe))
    : (Qe = e[43]);
  let U = Qe,
    $e;
  e[44] !== i || e[45] !== O
    ? (($e = O != null && Ha(O.rateLimitStatus, i ?? null)), (e[44] = i), (e[45] = O), (e[46] = $e))
    : ($e = e[46]);
  let et = $e;
  O != null && O.animationComplete && !O.refreshComplete && et && k({ ...O, refreshComplete: !0 });
  let tt = y && O != null && !O.refreshComplete && (!O.animationComplete || !et);
  if (Ue || Ge || We) {
    let t,
      n = null;
    if (!Ue && Ge) {
      let r;
      (e[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsx)(_, {
            id: `settings.usage.load.error`,
            defaultMessage: `Could not load usage settings.`,
            description: `Error label shown when usage settings cannot be fetched`,
          })),
          (e[47] = r))
        : (r = e[47]),
        (t = r));
      let i;
      e[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(_, {
            id: `settings.usage.load.retry`,
            defaultMessage: `Retry`,
            description: `Retry button for usage settings fetch errors`,
          })),
          (e[48] = i))
        : (i = e[48]);
      let a;
      (e[49] === qe
        ? (a = e[50])
        : ((a = (0, $.jsx)(W, { color: `secondary`, size: `toolbar`, onClick: qe, children: i })),
          (e[49] = qe),
          (e[50] = a)),
        (n = a));
    } else {
      let n;
      (e[51] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(_, {
            id: `settings.usage.load.loading`,
            defaultMessage: `Loading usage settings…`,
            description: `Loading label while access to Usage settings and their data are being resolved`,
          })),
          (e[51] = n))
        : (n = e[51]),
        (t = n));
    }
    let r;
    return (
      e[52] !== n || e[53] !== t
        ? ((r = (0, $.jsx)(Ba, { title: He, rowLabel: t, rowControl: n })),
          (e[52] = n),
          (e[53] = t),
          (e[54] = r))
        : (r = e[54]),
      r
    );
  }
  if (R && I == null) return null;
  if (N) {
    let t, n;
    e[55] === P
      ? ((t = e[56]), (n = e[57]))
      : ((t = P
          ? (0, $.jsx)(Oi, {})
          : (0, $.jsx)(_, {
              id: `settings.usage.enterprise.title`,
              defaultMessage: `Usage limits`,
              description: `Title for enterprise usage limits settings`,
            })),
        (n = P
          ? void 0
          : (0, $.jsx)(_, {
              id: `settings.usage.enterprise.subtitle`,
              defaultMessage: `See your usage within the limits defined by your administrator.`,
              description: `Subtitle for enterprise usage limits settings`,
            })),
        (e[55] = P),
        (e[56] = t),
        (e[57] = n));
    let r = i ?? null,
      a = xe ?? null,
      o = Ne ?? null,
      s;
    e[58] !== z ||
    e[59] !== Pe ||
    e[60] !== P ||
    e[61] !== r ||
    e[62] !== a ||
    e[63] !== o ||
    e[64] !== Re.isPending ||
    e[65] !== Re.mutateAsync ||
    e[66] !== Ee
      ? ((s = (0, $.jsx)(ia, {
          rateLimitStatus: r,
          showEnterpriseMonthlyUsageLimit: !0,
          showUsageBillingLayout: P,
          canRequestEnterpriseMonthlyUsageLimit: z,
          workspaceRequestPolicy: Ee,
          workspaceMonthlyUsage: a,
          workspaceAdminRequests: o,
          isWorkspaceAdminRequestsLoading: Pe,
          isSavingWorkspaceAdminRequest: Re.isPending,
          saveWorkspaceAdminRequest: Re.mutateAsync,
        })),
        (e[58] = z),
        (e[59] = Pe),
        (e[60] = P),
        (e[61] = r),
        (e[62] = a),
        (e[63] = o),
        (e[64] = Re.isPending),
        (e[65] = Re.mutateAsync),
        (e[66] = Ee),
        (e[67] = s))
      : (s = e[67]);
    let c;
    return (
      e[68] !== t || e[69] !== n || e[70] !== s
        ? ((c = (0, $.jsx)(M, {
            title: t,
            subtitle: n,
            subtitleClassName: `whitespace-normal`,
            children: s,
          })),
          (e[68] = t),
          (e[69] = n),
          (e[70] = s),
          (e[71] = c))
        : (c = e[71]),
      c
    );
  }
  let nt = null;
  if (fe(g) && (te || u)) {
    let t;
    (e[72] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(ki, {})), (e[72] = t))
      : (t = e[72]),
      (nt = t));
  } else if (!r) {
    let t;
    (e[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Ra, {})), (e[73] = t))
      : (t = e[73]),
      (nt = t));
  }
  let rt;
  e[74] !== r || e[75] !== g
    ? ((rt = r ? null : (0, $.jsx)(Qr, { plan: g })), (e[74] = r), (e[75] = g), (e[76] = rt))
    : (rt = e[76]);
  let at;
  e[77] !== I ||
  e[78] !== R ||
  e[79] !== l ||
  e[80] !== u ||
  e[81] !== p ||
  e[82] !== H ||
  e[83] !== ze ||
  e[84] !== c ||
  e[85] !== F ||
  e[86] !== le ||
  e[87] !== se ||
  e[88] !== de ||
  e[89] !== i?.credits ||
  e[90] !== Be
    ? ((at =
        R && I != null
          ? (0, $.jsx)(or, {
              serverState: I,
              hasSavedPaymentMethod: F,
              maximumCreditPurchaseDiscountPercent: se,
              maximumAutoReloadDiscountPercent: le,
              creditDetails: i?.credits ?? null,
              enableAutoTopUpMutation: ze,
              updateAutoTopUpMutation: Be,
              disableAutoTopUpMutation: H,
            })
          : p
            ? (0, $.jsx)(ar, {
                autoReload:
                  !l && c != null
                    ? { isEnabled: c.isEnabled, isPending: H.isPending, onDisable: H.mutateAsync }
                    : void 0,
                canPurchaseCredits: l,
                isBusinessWorkspace: u,
                purchaseButton: u ? (0, $.jsx)(Jr, {}) : void 0,
                maximumCreditPurchaseDiscountPercent: se,
                creditDetails: i?.credits ?? null,
                hasSavedPaymentMethod: de == null ? void 0 : F,
              })
            : null),
      (e[77] = I),
      (e[78] = R),
      (e[79] = l),
      (e[80] = u),
      (e[81] = p),
      (e[82] = H),
      (e[83] = ze),
      (e[84] = c),
      (e[85] = F),
      (e[86] = le),
      (e[87] = se),
      (e[88] = de),
      (e[89] = i?.credits),
      (e[90] = Be),
      (e[91] = at))
    : (at = e[91]);
  let ot = i ?? null,
    st = y ? w : void 0,
    lt = O?.rateLimitStatus,
    ut = T == null && !tt,
    G;
  e[92] !== tt || e[93] !== ot || e[94] !== st || e[95] !== lt || e[96] !== ut
    ? ((G = (0, $.jsx)(ia, {
        isResetFillActive: tt,
        rateLimitStatus: ot,
        resetFillAnimation: st,
        resetFillRateLimitStatus: lt,
        showResetPurchase: ut,
      })),
      (e[92] = tt),
      (e[93] = ot),
      (e[94] = st),
      (e[95] = lt),
      (e[96] = ut),
      (e[97] = G))
    : (G = e[97]);
  let dt;
  e[98] !== Ye || e[99] !== U || e[100] !== tt
    ? ((dt = (0, $.jsx)(wi, {
        isResetFillActive: tt,
        onResetAttemptCancel: Ze,
        onResetAttemptStart: Ye,
        onResetComplete: U,
      })),
      (e[98] = Ye),
      (e[99] = U),
      (e[100] = tt),
      (e[101] = dt))
    : (dt = e[101]);
  let ft;
  e[102] !== r || e[103] !== g
    ? ((ft = r ? null : (0, $.jsx)($r, { plan: g })), (e[102] = r), (e[103] = g), (e[104] = ft))
    : (ft = e[104]);
  let pt;
  return (
    e[105] !== nt ||
    e[106] !== rt ||
    e[107] !== at ||
    e[108] !== G ||
    e[109] !== dt ||
    e[110] !== ft
      ? ((pt = (0, $.jsxs)(M, {
          title: He,
          subtitle: nt,
          subtitleClassName: `whitespace-normal`,
          children: [rt, at, G, dt, null, ft],
        })),
        (e[105] = nt),
        (e[106] = rt),
        (e[107] = at),
        (e[108] = G),
        (e[109] = dt),
        (e[110] = ft),
        (e[111] = pt))
      : (pt = e[111]),
    pt
  );
}
function Fa(e, t) {
  return Math.max(e, t.percent_off);
}
function Ia(e, t) {
  return Math.max(e, t.percent_off);
}
function La(e) {
  let { slug: t } = e;
  return t === `billing`;
}
function Ra() {
  let e = (0, Ga.c)(1),
    t = za,
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(_, {
          id: `settings.usage.subtitle`,
          defaultMessage: `To view invoices, change your payment method, and take other actions, visit <settings>settings</settings> on Web`,
          description: `Subtitle pointing users to ChatGPT billing settings for broader billing actions`,
          values: {
            settings: (e) =>
              (0, $.jsx)(`a`, {
                className: `inline-flex cursor-interaction text-info`,
                href: qt,
                target: `_blank`,
                rel: `noreferrer`,
                onClick: t,
                children: e,
              }),
          },
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function za(e) {
  de({ event: e, href: qt, initiator: `open_in_browser_bridge` });
}
function Ba(e) {
  let t = (0, Ga.c)(6),
    { title: n, rowLabel: r, rowControl: i } = e,
    a;
  t[0] !== i || t[1] !== r
    ? ((a =
        i == null
          ? (0, $.jsx)(te, { children: r })
          : (0, $.jsx)(H, {
              children: (0, $.jsx)(H.Content, {
                children: (0, $.jsx)(V, {
                  children: (0, $.jsx)(K, { className: `gap-6`, label: r, control: i }),
                }),
              }),
            })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== a || t[4] !== n
      ? ((o = (0, $.jsx)(M, { title: n, children: a })), (t[3] = a), (t[4] = n), (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Va(e, t) {
  return (
    Wa(e?.rate_limit?.primary_window, t?.rate_limit?.primary_window) ||
    Wa(e?.rate_limit?.secondary_window, t?.rate_limit?.secondary_window)
  );
}
function Ha(e, t) {
  return Va(e, t) || (!Ua(e) && !Ua(t));
}
function Ua(e) {
  return e?.rate_limit?.primary_window != null || e?.rate_limit?.secondary_window != null;
}
function Wa(e, t) {
  return e == null || t == null
    ? e != null || t != null
    : e.used_percent !== t.used_percent ||
        e.reset_at !== t.reset_at ||
        e.limit_window_seconds !== t.limit_window_seconds;
}
var Ga, Ka, $;
e(() => {
  ((Ga = G()),
    F(),
    (Ka = t(s(), 1)),
    B(),
    k(),
    o(),
    se(),
    y(),
    an(),
    wn(),
    Qt(),
    gt(),
    me(),
    Me(),
    L(),
    xt(),
    Fe(),
    ke(),
    D(),
    We(),
    Kt(),
    a(),
    qr(),
    Zr(),
    fn(),
    ii(),
    Di(),
    Na(),
    Ni(),
    ($ = U()));
})();
export { Pa as UsageSettings };
//# sourceMappingURL=settings-5112d5d47fbe.js.map
