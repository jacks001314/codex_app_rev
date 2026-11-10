import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CPt as n,
  Cot as r,
  Cxt as i,
  EPt as a,
  Fz as o,
  IDt as s,
  Ixt as c,
  Kot as l,
  Nxt as u,
  Pxt as d,
  Pz as f,
  SPt as p,
  TLt as ee,
  VDt as m,
  Xot as h,
  Yot as g,
  _xt as te,
  fLt as _,
  fO as ne,
  hrt as v,
  jDt as y,
  nst as b,
  oxt as re,
  pLt as x,
  t3 as S,
  tst as C,
  uO as ie,
  vrt as w,
  vzt as T,
  wot as E,
  wxt as D,
  xMt as ae,
  yzt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as oe,
  CNt as se,
  CPt as k,
  Dlt as ce,
  EFt as A,
  FMt as j,
  GK as le,
  GMt as ue,
  IFt as de,
  INt as M,
  JFr as fe,
  KK as pe,
  KMt as me,
  KNt as he,
  LNt as N,
  LRn as ge,
  OGt as _e,
  PMt as ve,
  QDr as ye,
  QFr as P,
  RNt as be,
  SGt as xe,
  SPt as Se,
  TMr as Ce,
  URn as we,
  WMt as Te,
  WNt as Ee,
  XDr as De,
  XMt as Oe,
  XPt as F,
  YFr as ke,
  Ymr as Ae,
  ZNt as je,
  _Pt as Me,
  aDr as Ne,
  dPt as I,
  eDr as Pe,
  eOr as Fe,
  ehr as L,
  fur as Ie,
  gPt as Le,
  hPt as Re,
  iIr as ze,
  klt as Be,
  lPt as Ve,
  mPt as He,
  nFt as Ue,
  oPt as We,
  pPt as R,
  pur as Ge,
  qMt as Ke,
  rIr as qe,
  sPt as Je,
  tFt as Ye,
  vPt as Xe,
  yPt as Ze,
  yVn as Qe,
  yzn as $e,
  zMt as et,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ao as tt,
  To as nt,
  do as rt,
  fo as it,
  is as z,
  ko as B,
  ns as at,
  yo as ot,
} from "./app-primary-fe8a450b3b04.js";
import { i as st, o as ct } from "./dialog-fields-e2d13058f139.js";
import { n as lt, r as ut, t as dt } from "./billing-pricing-e48f68285f93.js";
import {
  a as V,
  d as ft,
  h as pt,
  i as mt,
  l as ht,
  m as gt,
  n as _t,
  o as vt,
  s as yt,
  u as bt,
} from "./checkout-page-f9add28127de.js";
import { a as xt, d as St, i as Ct, l as wt } from "./shell-257a8d50391c.js";
import { g as Tt, h as Et, m as Dt, p as Ot } from "./promo-funnel-context-725bd849edc2.js";
import { c as kt, i as H, s as At } from "./receipt-2d9feddd2f66.js";
import { c as jt, s as U } from "./return-9eda3c742ec6.js";
import { a as W, i as G, n as Mt, o as Nt, r as Pt, t as Ft } from "./one-time-session-10d0b64a81db.js";
async function It({
  scope: e,
  accountId: t,
  userId: n,
  direct: r,
  search: i,
  queryClient: a,
  statsig: o,
  signal: s,
  restartBillingDetails: c,
  modal: l = !1,
}) {
  let u = i.getAll(`account_id`),
    d = u[0];
  if (u.length > 1 || d === `` || (d != null && d !== t)) return null;
  let f = o.getContext().user.country?.trim().toUpperCase(),
    p = c?.country ?? f,
    m = p != null && Ue(p) ? p : `US`,
    h = new AbortController(),
    g = {
      isPricingEnabled: (e) => o.getLayer(`3768341700`).get(e, !1),
      signal: AbortSignal.any([s, h.signal]),
    },
    te = { additionalHeaders: Pt(t), signal: s },
    _ = ut({ country: m, signal: g.signal });
  _.catch(() => {});
  let ne = (e) => {
      throw (h.abort(), e);
    },
    v = await W(t, n, s).catch(ne);
  if (v == null) return (h.abort(), null);
  let y = Lt(r, v.account.structure);
  if (i.get(`audience`) === `workspace` && y !== `workspace`) return (h.abort(), null);
  let b = v.account.plan_type,
    re = y === `personal` && be(o, b);
  if (y === `workspace`) {
    let e = await Ae.safeGet(`/pageConfigs/billing`, te).catch(ne);
    if (
      e.credits.eligible !== !0 ||
      e.credits.credit_policy?.kind !== `business` ||
      e.credits.credit_policy.can_purchase_credits !== !0
    )
      return (h.abort(), null);
  } else {
    if (v.account.structure !== `personal`) return (h.abort(), null);
    let e = xe(b) || re;
    if (
      (!e &&
        (b === `free` || b === `go`) &&
        (i.get(`source`) === `codex` ||
          i.get(`source`) === `codex_app_browser` ||
          i.get(`source`) === `chatgpt_web_merged`) &&
        (e =
          (await Ae.safeGet(`/pageConfigs/usage_limits`, te).catch(() => (s.throwIfAborted(), null)))
            ?.show_buy_credits === !0),
      (e ||=
        (
          await Ae.safePost(`/students/refresh_enrollment_status`, {
            ...te,
            requestBody: { campaign_id: `student_codex_credits` },
          }).catch(() => (s.throwIfAborted(), null))
        )?.metadata?.enrollment_step === `enrolled`),
      !e)
    )
      return (h.abort(), null);
  }
  let x = a.fetchQuery({
    ...Se({ accountId: t, userId: n, authMethod: `chatgpt`, enabled: !0 }),
    staleTime: 0,
    retry: !1,
  });
  x.catch(() => {});
  let S = await dt({ country: m, prefetchedCountryConfig: _, ...g }),
    C = F(S.currency_config.symbol_code);
  if (C == null) throw Error(`Credit billing currency is unavailable`);
  let ie = y === `workspace` ? ee().nullish().parse(S.currency_config.business_currency_override) : void 0,
    w =
      y === `workspace` && ie != null && oe(o, `2658206886`).get(`is_business_currency_override_enabled`, !1),
    T = w ? F(ie) : null;
  if (w && T == null) throw Error(`Credit billing currency is unavailable`);
  let E =
      c ?? G(v, { country: m, localCurrency: C, useSubscriptionCurrency: !re, businessCurrencyOverride: T }),
    D = F(c?.currency) ?? (y === `personal` && !re ? F(v.entitlement.billing_currency ?? `USD`) : E.currency);
  if (D == null) throw Error(`Credit pricing currency is unavailable`);
  let [ae, O] = await Promise.all([D === C ? S : dt({ currency: D, ...g }), x]);
  s.throwIfAborted();
  let se = J.parse(ae.currency_config),
    k = { amountPerCredit: se.amount_per_credit, currencyCode: D, minorUnitExponent: se.minor_unit_exponent },
    ce = I({ amountPerCredit: k.amountPerCredit, minorUnitExponent: k.minorUnitExponent, ...R }),
    A = Math.floor(je(o.getDynamicConfig(he).value) / Ee) * Ee,
    j = Ve({ minimumCreditPurchaseQuantity: ce, presetCreditQuantities: R.presetCreditQuantities }).filter(
      (e) => e <= A,
    ),
    le = l && y === `personal` ? `codex_inline_credit_purchase_modal` : K(y, r),
    ue = null;
  if (O != null) {
    let e = Re(y, o.getContext().user.custom?.plan_type);
    if (e != null) {
      let t = oe(o, e),
        n = Le({
          defaultQuantity: t.get(`default_credit_quantity`, 0),
          presetQuantities: t.get(`preset_credit_quantities`, []),
          minimumCreditQuantity: ce,
          maximumCreditQuantity: A,
          creditQuantityStep: Ee,
        });
      ((ue = n.defaultCreditQuantity), (j = n.presetCreditQuantities ?? j));
    }
  }
  let de = Xe({
    audience: y,
    minimumCreditQuantity: ce,
    maximumCreditQuantity: A,
    creditQuantityStep: Ee,
    presetCreditQuantities: j,
    offer: O,
    experimentDefaultQuantity: ue,
  });
  if (de == null) return null;
  let M = l ? `custom` : q({ audience: y, direct: r, hasOffer: O != null, statsig: o });
  return {
    audience: y,
    pricingInfo: k,
    minimum: ce,
    maximum: A,
    presets: j,
    defaultQuantity: de,
    experimentDefaultQuantity: ue,
    offer: O,
    entryPoint: le,
    checkoutUiMode: M,
    billingDetails: E,
  };
}
function Lt(e, t) {
  return e || t === `personal` ? `personal` : `workspace`;
}
function K(e, t) {
  return e === `workspace`
    ? `credit_purchase_modal`
    : t
      ? `codex_purchase_credits_route`
      : `codex_credit_purchase_modal`;
}
function q({ audience: e, direct: t, hasOffer: n, statsig: r }) {
  if (n) return `custom`;
  if (!t) return N(r, e) ? `custom` : `redirect`;
}
var J;
function Rt() {
  return (Rt = e(() => {
    (Ye(),
      Ze(),
      a(),
      Ce(),
      L(),
      _e(),
      k(),
      Je(),
      M(),
      Pe(),
      lt(),
      Nt(),
      (J = x({ amount_per_credit: _().positive(), minor_unit_exponent: _().int().nonnegative() })));
  }))();
}
async function zt({ request: e, signal: t, onError: n }) {
  let r = null;
  try {
    for (let n = 0; n < 5; n += 1) {
      t.throwIfAborted();
      let n = await e(r, 20);
      if (
        n.transactions.some(
          (e) =>
            e.type === `invoice` &&
            e.status === `paid` &&
            ((e.product?.type === `credits` && e.product.is_gifted !== !0) ||
              e.product?.type === `credits_top_up`),
        )
      )
        return !0;
      if (((r = n.next_cursor), !r)) return !1;
    }
  } catch (e) {
    t.aborted || n(e);
  }
  return !1;
}
var Y;
function X() {
  return (X = e(() => {
    Y = {
      structuralSharing: (e, t) => e === !0 || t === !0,
      staleTime: (e) => (e.state.data === !0 ? 1 / 0 : 6e4),
      gcTime: 1 / 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    };
  }))();
}
function Bt(e, t = !0) {
  return l({
    enabled: t,
    queryKey: [`inline-credit-purchase-history`, e],
    queryFn: ({ signal: t }) =>
      zt({
        signal: t,
        request: (n, r) =>
          Ae.safeGet(`/payments/transaction-history`, {
            parameters: { query: { account_id: e, limit: r, ...(n ? { cursor: n } : {}) } },
            signal: t,
          }),
        onError: (e) =>
          n.error(`checkout.inline.purchase_history_failed`, { safe: {}, sensitive: { error: e } }),
      }),
    ...Y,
  });
}
function Z() {
  return (Z = e(() => {
    (X(), L(), p());
  }))();
}
function Vt(e) {
  return e instanceof v && e.responseStatus === 400 && e.message.includes(tn);
}
function Ht(e) {
  let t = (0, $t.c)(23),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { presentation: r } = n,
    { accountId: i, userId: a, isLoading: o } = Ge(),
    s = D(),
    [c] = u();
  if (o || i == null || a == null) {
    let e;
    return (
      t[2] === r
        ? (e = t[3])
        : ((e = (0, $.jsx)(U, { loading: !0, context: `credits`, presentation: r, onRetry: Ut })),
          (t[2] = r),
          (t[3] = e)),
      e
    );
  }
  let l = `${i}:${a}:${s.key}`,
    d;
  return (
    t[18] !== i || t[19] !== r || t[20] !== l || t[21] !== a
      ? ((d = (0, $.jsx)(Wt, { accountId: i, userId: a, presentation: r }, l)),
        (t[18] = i),
        (t[19] = r),
        (t[20] = l),
        (t[21] = a),
        (t[22] = d))
      : (d = t[22]),
    d
  );
}
function Ut() {}
function Wt(e) {
  let n = (0, $t.c)(100),
    { accountId: a, userId: l, presentation: d } = e,
    f = c(r),
    p = m(),
    ee = Ne(),
    g = b(),
    te = o(),
    ne = i(`/checkout`),
    v = D(),
    [y] = u(),
    x;
  n[0] !== d || n[1] !== y
    ? ((x = d == null ? y : new URLSearchParams(d.search)), (n[0] = d), (n[1] = y), (n[2] = x))
    : (x = n[2]);
  let S = x,
    C;
  n[3] === d ? (C = n[4]) : ((C = ht(d)), (n[3] = d), (n[4] = C));
  let w = C,
    T;
  n[5] !== a || n[6] !== w || n[7] !== v || n[8] !== d || n[9] !== S || n[10] !== l
    ? ((T = () => {
        let e =
          d?.creditCheckoutAnalytics ??
          Dt({ context: v.state?.creditCheckoutAnalytics, accountId: a }) ??
          (d == null ? Ot({ search: S.toString(), accountId: a, userId: l }) : void 0);
        return Oe(e, w);
      }),
      (n[5] = a),
      (n[6] = w),
      (n[7] = v),
      (n[8] = d),
      (n[9] = S),
      (n[10] = l),
      (n[11] = T))
    : (T = n[11]);
  let [E, ae] = (0, Q.useState)(T),
    [O, k] = (0, Q.useState)(!1),
    [A, le] = (0, Q.useState)(E?.webMergeExperiment),
    M;
  n[12] === E ? (M = n[13]) : ((M = j(E)), (n[12] = E), (n[13] = M));
  let [pe, he] = (0, Q.useState)(M),
    N = Oe(d?.creditCheckoutAnalytics, w),
    _e = j(N);
  _e != null && _e !== pe && (he(_e), ae(N), le(N?.webMergeExperiment), k(!1));
  let P =
      _e != null && _e === pe && E != null
        ? {
            ...E,
            funnelMeasurementEnabled:
              E.funnelMeasurementEnabled === !0 ? N?.funnelMeasurementEnabled : void 0,
            opening: N?.opening,
          }
        : E,
    be = P,
    xe = d == null ? `full_page` : `modal`,
    Se = bt(d, be),
    Ce = rt(Se),
    De = d == null && v.pathname.includes(`/purchase/`),
    F = d?.inline != null,
    ke;
  n[14] !== a || n[15] !== F ? ((ke = Bt(a, F)), (n[14] = a), (n[15] = F), (n[16] = ke)) : (ke = n[16]);
  let { data: je } = h(ke),
    [I, Pe] = (0, Q.useState)(!1),
    L = (0, Q.useRef)(null),
    Ie = (0, Q.useRef)(null),
    [Le, Re] = (0, Q.useState)(),
    [Be, Ve] = (0, Q.useState)(null),
    Ue;
  n[17] === S ? (Ue = n[18]) : ((Ue = void 0), (n[17] = S), (n[18] = Ue));
  let R = Ue,
    [Ge] = (0, Q.useState)(() => be?.purchaseAttemptId ?? crypto.randomUUID()),
    Ke = (0, Q.useRef)(!1),
    [Je, Ye] = (0, Q.useState)(null),
    [Xe, Ze] = (0, Q.useState)(!1),
    [Qe, it] = (0, Q.useState)(null),
    {
      data: z,
      error: B,
      isPending: ct,
      refetch: lt,
    } = h({
      queryKey: [`credit-checkout-preparation`, a, l, Ge],
      queryFn: async (e) => {
        let { signal: t } = e;
        d == null && !Ke.current && ((Ke.current = !0), ot(f, be));
        try {
          let e = await yt(`preparation`, Ge, t, () =>
            It({
              scope: f,
              accountId: a,
              userId: l,
              direct: De,
              modal: d != null,
              search: S,
              queryClient: g,
              statsig: ee,
              signal: t,
              restartBillingDetails: v.state?.creditRestartBillingDetails,
            }),
          );
          return (
            t.throwIfAborted(),
            d?.assertCurrent(),
            e ??
              nt(
                f,
                P,
                void 0,
                at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE,
                Ce,
              ),
            e
          );
        } catch (e) {
          let n = e;
          throw (
            t.throwIfAborted(),
            d?.assertCurrent(),
            nt(f, P, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_INITIAL_DATA_ERROR, Ce),
            n
          );
        }
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    }),
    ut = De ? Number(S.get(`quantity`)) : (Qe ?? _().safeParse(v.state?.creditPurchaseQuantity).data ?? null),
    dt = z == null ? null : (ut ?? (z.checkoutUiMode === `custom` ? z.defaultQuantity : null)),
    {
      data: V,
      error: ft,
      isFetching: pt,
      refetch: vt,
    } = h({
      queryKey: [`credit-checkout-create`, a, l, Ge, dt],
      enabled: z != null && dt != null,
      queryFn: (e) => {
        let { signal: t } = e;
        return xt(dt, Ge, t);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
      refetchOnMount: !1,
    });
  async function xt(e, t, n, r) {
    let i = r !== void 0 && r,
      o = P == null ? void 0 : { ...P, webMergeExperiment: A };
    if (
      z == null ||
      e == null ||
      !Number.isSafeInteger(e) ||
      e > z.maximum ||
      (!(i && d?.inline != null) && We({ value: String(e), pricingInfo: z.pricingInfo }) != null)
    )
      throw (
        nt(
          f,
          P,
          void 0,
          at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE,
          Ce,
        ),
        Error(`Invalid credit purchase requestedCreditQuantity`)
      );
    let s = O;
    if (s) {
      (n.throwIfAborted(), d?.assertCurrent());
      let e = oe(ee, en, { disableExposureLog: !0 }),
        t = Te(e, e.get(`credit_checkout_presentation`, `full_page`), A);
      (le(t), (o = E == null ? void 0 : { ...E, webMergeExperiment: t }));
    }
    let c = ue(o, P?.actualPresentation ?? w, xe),
      u = P,
      p = rt(c),
      m = me(o, { accountId: a, userId: l }),
      h = fe(S),
      g = {
        supports_saved_payment_link: !0,
        ...(c === `inline` ? { credit_checkout_presentation: `inline` } : {}),
        ...He({
          accountId: a,
          quantity:
            i && d?.inline != null
              ? e
              : Me({
                  quantity: e,
                  offer: z.offer,
                  maximumCreditQuantity: z.maximum,
                  experimentDefaultQuantity:
                    v.state?.creditPurchaseQuantity == null ? z.experimentDefaultQuantity : null,
                  clampToDiscountTier: v.state?.creditPurchaseQuantity == null,
                }),
          discountOfferId: z.offer?.offer_id,
          entryPoint: z.entryPoint,
          checkoutUiMode: z.checkoutUiMode,
          billingDetails: z.billingDetails,
          cancelUrl: new URL(
            se(S.get(`return_to`), z.audience === `workspace` ? `/admin/billing` : `/settings/usage`),
            window.location.origin,
          ).href,
        }),
        checkout_appearance: te ? `dark` : `light`,
        checkout_source: h === `unknown` ? void 0 : h,
        purchase_attempt_id: t,
        ...(m == null ? {} : { credit_checkout_launch: m }),
        prefetch: !1,
        supports_oaics_credit_modal: d != null,
      },
      _ = !de(g) && oe(ee, `3950229590`).get(`skip_sentinel_checkout`, !1);
    ye(f, we, {
      checkoutUiMode: g.checkout_ui_mode ?? void 0,
      isCheckoutModalEnabled: d != null,
      checkoutKind: `standalone_credit`,
      entryPoint: z.entryPoint,
    });
    let y = _ ? {} : await yt(`integrity`, t, n, Zt);
    (n.throwIfAborted(), d?.assertCurrent(), s && k(!1));
    let b = await yt(`session_creation`, t, n, () =>
      Ft({
        accountId: a,
        requestBody: g,
        integrityHeaders: { ...y, "x-credit-checkout-presentation": c },
        signal: n,
      }),
    ).catch((e) => {
      throw (
        n.throwIfAborted(),
        d?.assertCurrent(),
        g.credit_checkout_launch != null && Vt(e) && k(!0),
        nt(f, u, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR, p),
        e
      );
    });
    if ((n.throwIfAborted(), d?.assertCurrent(), b != null))
      try {
        if (
          `tag` in b &&
          (b.tag === `custom_checkout_session` || b.tag === `hosted_checkout_session`) &&
          (qe(b.checkout_session_id, g.checkout_source ?? null, S.get(`checkout_from`)),
          At(b.checkout_session_id, S),
          ze(b.checkout_session_id, S),
          d?.continuationTask != null && kt(b.checkout_session_id, d.continuationTask),
          b.tag === `custom_checkout_session` && b.status === `complete` && d != null)
        )
          return (await d.onCompleted(b, null), { status: `completed` });
        if (
          (`tag` in b && (b.tag === `custom_checkout_session` || b.tag === `hosted_checkout_session`)) ||
          b.url != null
        ) {
          (!(`tag` in b) || b.tag !== `redirect_to_portal`) &&
            ye(f, $e, { checkoutKind: `standalone_credit`, entryPoint: z.entryPoint });
          let e = `checkout_session_id` in b ? b.checkout_session_id : b.url?.match(/cs_[A-Za-z0-9_]+/)?.[0];
          if (
            (ye(f, ge, {
              ...et(u),
              checkoutId: e,
              checkoutResponseTag: `tag` in b ? b.tag : `missing_tag`,
              checkoutOriginProductExperience: d?.workHomeBeacon ? `work` : void 0,
              checkoutOriginDeliverySurface: d?.workHomeBeacon ? `web` : void 0,
              isCheckoutModalEnabled: d != null,
              checkoutKind: `standalone_credit`,
              entryPoint: z.entryPoint,
            }),
            i || tt(f, u, `navigated`, { checkoutId: e, entryPoint: z.entryPoint }),
            !(`tag` in b) || b.tag !== `custom_checkout_session`)
          ) {
            if (
              (await f.get(Fe).flush(1e3).catch(Xt),
              n.throwIfAborted(),
              d?.assertCurrent(),
              `tag` in b && b.tag === `custom_checkout_session`)
            ) {
              Tt({ checkoutSessionId: b.checkout_session_id, checkoutPayload: g, userId: l, analytics: u });
              let e = new URLSearchParams(S);
              return (
                e.set(ce, `credits`),
                (Qe == null ? St : wt)(`${ne}/${b.processor_entity}/${b.checkout_session_id}?${e}`),
                { status: `document_navigation` }
              );
            }
            (De || z.audience === `workspace`) && b.url != null && wt(b.url);
          }
          return { status: `checkout`, response: b };
        }
      } catch {
        n.throwIfAborted();
      }
    return (
      nt(f, u, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR, p),
      { status: `uncertain` }
    );
  }
  let Et = async function (e, t, n, r, i) {
    if (d == null) throw Error(`Checkout is not mounted`);
    (d.assertCurrent(),
      Pe(!0),
      await (async () => {
        let o = AbortSignal.any([AbortSignal.timeout(3e4), ...(i == null ? [] : [i.signal])]);
        if (i != null) {
          let t = await Ae.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
            parameters: {
              path: {
                processor_entity: i.session.processor_entity,
                checkout_session_id: i.session.checkout_session_id,
              },
              query: { payment_state_source: `live` },
            },
            additionalHeaders: Pt(a),
            signal: o,
          });
          if (
            (o.throwIfAborted(),
            d.assertCurrent(),
            t.tag !== `custom_checkout_session` ||
              t.checkout_session_id !== i.session.checkout_session_id ||
              t.processor_entity !== i.session.processor_entity)
          )
            throw Error(`Checkout payment state is unavailable`);
          if (t.status === `complete` || t.payment_status === `paid`) {
            await d.onCompleted(t, e, !0);
            return;
          }
          if (
            t.status !== `open` ||
            t.payment_status !== `unpaid` ||
            t.credit_payment_state?.payment_status !== `unpaid` ||
            (t.credit_payment_state.payment_intent_status !== `requires_payment_method` &&
              t.credit_payment_state.payment_intent_status !== `canceled`)
          )
            throw Error(`Checkout payment is not ready to retry`);
        }
        let s = t;
        if (n) {
          if (a == null || t == null || r == null) throw Error(`Missing account or selected card`);
          let e = await Ae.safePost(`/payments/credit_purchase/payment_method`, {
            requestBody: {
              account_id: a,
              checkout_session_id: r.checkout_session_id,
              processor_entity: r.processor_entity,
              payment_method_id: t,
              consent_version: `credit_purchase_v1`,
            },
            signal: o,
          });
          (o.throwIfAborted(), d.assertCurrent(), (s = e.canonical_payment_method_id));
        }
        let c = await xt(e, crypto.randomUUID(), o, !0);
        if (
          (o.throwIfAborted(),
          d.assertCurrent(),
          c.status !== `checkout` || !(`tag` in c.response) || c.response.tag !== `custom_checkout_session`)
        )
          throw Error(`Saved card checkout is unavailable`);
        let l = c.response;
        if (i != null && l.checkout_session_id === i.session.checkout_session_id)
          throw Error(`Declined checkout was not replaced`);
        let u = l.inline_credit_saved_card_contract,
          f = new Date(),
          p = u?.consent_required_payment_methods ?? [],
          ee = [...(u?.payment_methods ?? []), ...p].filter(
            (e) =>
              e.exp_year > f.getFullYear() ||
              (e.exp_year === f.getFullYear() && e.exp_month >= f.getMonth() + 1),
          ),
          m = u?.requires_payment_method_opt_in === !0 || p.some((e) => e.payment_method_id === s);
        if (
          (i == null || s != null) &&
          (u?.status !== `ready` ||
            ee.length === 0 ||
            (s != null && !ee.some((e) => e.payment_method_id === s)) ||
            (n && m))
        )
          throw Error(`Saved card is unavailable in this checkout`);
        ((L.current = i?.step !== `amount` && !m && s != null ? l.checkout_session_id : null),
          Re(s),
          Ve(l),
          (d.retention ?? d.inline)?.onSessionChange(l));
        let h = L.current == null ? `payment` : `preparing-review`;
        (i?.step === `amount` ? (h = `amount`) : (m || s == null) && (h = `method`),
          d.inline?.onStepChange(h));
      })().finally(() => Pe(!1)));
  };
  if (V?.status === `document_navigation`) {
    let e;
    return (
      n[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(U, { loading: !0, context: `credits`, onRetry: Yt })), (n[19] = e))
        : (e = n[19]),
      e
    );
  }
  if (V?.status === `checkout`) {
    if (`tag` in V.response && V.response.tag === `custom_checkout_session`) {
      if (d != null) {
        let e = Be ?? V.response;
        if (e.status === `expired`) {
          let e;
          n[20] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(`p`, {
                role: `alert`,
                children: (0, $.jsx)(s, {
                  id: `checkout.creditModal.expired`,
                  defaultMessage: `This checkout has expired`,
                  description: `The existing credit checkout can no longer accept a payment`,
                }),
              })),
              (n[20] = e))
            : (e = n[20]);
          let r;
          n[21] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((r = (0, $.jsx)(s, {
                id: `checkout.creditModal.restart`,
                defaultMessage: `Start a new checkout`,
                description: `Create another checkout after the prior one expired`,
              })),
              (n[21] = r))
            : (r = n[21]);
          let i;
          return (
            n[22] === d.onRestart
              ? (i = n[23])
              : ((i = (0, $.jsxs)(ie, {
                  children: [e, (0, $.jsx)(t, { onClick: d.onRestart, children: r })],
                })),
                (n[22] = d.onRestart),
                (n[23] = i)),
            i
          );
        }
        let r;
        n[24] !== d.inline || n[25] !== d.retention
          ? ((r = (e) => {
              (Ve(e), (d.retention ?? d.inline)?.onSessionChange(e));
            }),
            (n[24] = d.inline),
            (n[25] = d.retention),
            (n[26] = r))
          : (r = n[26]);
        let i = (0, $.jsx)(
          _t,
          {
            session: e,
            onRetry: d.onRestart,
            presentation: {
              ...d,
              creditCheckoutAnalytics: P,
              hasPriorCreditPurchase: je === !0,
              initialPaymentMethodId: Le,
              inlineReviewRef: (e) => {
                ((Ie.current = e),
                  e != null &&
                    queueMicrotask(() => {
                      Ie.current === e &&
                        L.current === e.checkoutSessionId &&
                        ((L.current = null), e.prepare());
                    }));
              },
              onSessionReplaced: r,
              onPaymentMethodAdded: (t, n, r) => Et(t, n, r, e),
              onRetryPayment: (t, n, r, i, a) => Et(t, n, a, e, { session: e, step: r, signal: i }),
            },
          },
          `${a}:${e.checkout_session_id}`,
        );
        if (d.inline != null) {
          let e;
          return (
            n[27] !== d || n[28] !== I
              ? ((e = I
                  ? (0, $.jsx)(`div`, {
                      className: `absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-surface/80`,
                      children: (0, $.jsx)(U, { loading: !0, presentation: d, onRetry: Jt }),
                    })
                  : null),
                (n[27] = d),
                (n[28] = I),
                (n[29] = e))
              : (e = n[29]),
            (0, $.jsxs)(`div`, {
              className: `relative`,
              children: [(0, $.jsx)(`div`, { inert: I, children: i }), e],
            })
          );
        }
        let o;
        return (
          n[30] !== d || n[31] !== I
            ? ((o = I ? (0, $.jsx)(U, { loading: !0, presentation: d, onRetry: qt }) : null),
              (n[30] = d),
              (n[31] = I),
              (n[32] = o))
            : (o = n[32]),
          (0, $.jsxs)($.Fragment, { children: [o, (0, $.jsx)(`div`, { hidden: I, inert: I, children: i })] })
        );
      }
      return (0, $.jsx)(re, {
        to: `/checkout/${V.response.processor_entity}/${V.response.checkout_session_id}?${S}`,
        state: {
          ...ve({ analytics: P, accountId: a, checkoutSessionId: V.response.checkout_session_id }),
          checkoutLoadingContext: `credits`,
        },
        replace: !0,
      });
    }
    if (V.response.url != null) {
      let e = d == null ? void 0 : { ...d, creditCheckoutAnalytics: P },
        t;
      return (
        n[33] !== V.response.url || n[34] !== e
          ? ((t = (0, $.jsx)(mt, { url: V.response.url, presentation: e })),
            (n[33] = V.response.url),
            (n[34] = e),
            (n[35] = t))
          : (t = n[35]),
        t
      );
    }
    if (`tag` in V.response && V.response.tag === `hosted_checkout_session`) {
      let e;
      n[36] !== V.response.checkout_session_id || n[37] !== V.response.processor_entity || n[38] !== S
        ? ((e = new URLSearchParams(S)),
          e.set(`processor_entity`, V.response.processor_entity),
          e.set(`stripe_session_id`, V.response.checkout_session_id),
          (n[36] = V.response.checkout_session_id),
          (n[37] = V.response.processor_entity),
          (n[38] = S),
          (n[39] = e))
        : (e = n[39]);
      let t = `/checkout/verify?${e}`,
        r;
      return (
        n[40] === t ? (r = n[41]) : ((r = (0, $.jsx)(re, { to: t, replace: !0 })), (n[40] = t), (n[41] = r)),
        r
      );
    }
  }
  if (V?.status === `completed`) {
    let e;
    return (
      n[42] !== R || n[43] !== d
        ? ((e = (0, $.jsx)(U, {
            loading: !0,
            context: `credits`,
            presentation: d,
            documentReturnPath: R,
            onRetry: Kt,
          })),
          (n[42] = R),
          (n[43] = d),
          (n[44] = e))
        : (e = n[44]),
      e
    );
  }
  if (V?.status === `uncertain`) {
    let e;
    n[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          role: `status`,
          children: (0, $.jsx)(s, {
            id: `checkout.creditCreationUncertain`,
            defaultMessage: `We couldn’t confirm whether checkout was created. Check your billing activity before starting another purchase`,
            description: `Credit checkout creation returned an unknown outcome, so another session is not created automatically`,
          }),
        })),
        (n[45] = e))
      : (e = n[45]);
    let t;
    return (
      n[46] !== R || n[47] !== d
        ? ((t = (0, $.jsx)(Ct, { presentation: d, documentReturnPath: R, children: e })),
          (n[46] = R),
          (n[47] = d),
          (n[48] = t))
        : (t = n[48]),
      t
    );
  }
  if (ct || B != null || ft != null || pt) {
    let e = ct || pt,
      t = B ?? ft,
      r;
    n[49] !== B || n[50] !== vt || n[51] !== lt
      ? ((r = () => {
          B == null ? vt() : lt();
        }),
        (n[49] = B),
        (n[50] = vt),
        (n[51] = lt),
        (n[52] = r))
      : (r = n[52]);
    let i;
    return (
      n[53] !== R || n[54] !== d || n[55] !== e || n[56] !== t || n[57] !== r
        ? ((i = (0, $.jsx)(U, {
            loading: e,
            context: `credits`,
            presentation: d,
            error: t,
            documentReturnPath: R,
            onRetry: r,
          })),
          (n[53] = R),
          (n[54] = d),
          (n[55] = e),
          (n[56] = t),
          (n[57] = r),
          (n[58] = i))
        : (i = n[58]),
      i
    );
  }
  if (z == null) {
    let e;
    n[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          role: `alert`,
          children: (0, $.jsx)(s, {
            id: `checkout.creditUnavailable`,
            defaultMessage: `Credit purchases aren’t available for this account`,
            description: `The signed-in account does not have permission or eligibility to buy prepaid credits`,
          }),
        })),
        (n[59] = e))
      : (e = n[59]);
    let t;
    return (
      n[60] !== R || n[61] !== d
        ? ((t = (0, $.jsx)(Ct, { presentation: d, documentReturnPath: R, children: e })),
          (n[60] = R),
          (n[61] = d),
          (n[62] = t))
        : (t = n[62]),
      t
    );
  }
  let H = Je ?? String(z.defaultQuantity),
    jt;
  n[63] !== Xe || n[64] !== z.maximum || n[65] !== z.pricingInfo || n[66] !== H
    ? ((jt = Qt({ invalidCurrency: Xe, maximum: z.maximum, pricingInfo: z.pricingInfo, value: H })),
      (n[63] = Xe),
      (n[64] = z.maximum),
      (n[65] = z.pricingInfo),
      (n[66] = H),
      (n[67] = jt))
    : (jt = n[67]);
  let W = jt,
    G;
  n[68] !== W || n[69] !== it || n[70] !== H
    ? ((G = (e) => {
        (e.preventDefault(), W ?? it(Number(H)));
      }),
      (n[68] = W),
      (n[69] = it),
      (n[70] = H),
      (n[71] = G))
    : (G = n[71]);
  let Mt = z.pricingInfo.amountPerCredit,
    Nt = z.pricingInfo.minorUnitExponent ?? 2,
    Lt = z.pricingInfo.currencyCode,
    K;
  n[72] !== W || n[73] !== z.maximum || n[74] !== z.minimum
    ? ((K =
        W == null
          ? void 0
          : (0, $.jsx)(st, {
              fieldError: W,
              minimumQuantity: z.minimum,
              maximumQuantity: z.maximum,
              quantityStep: Ee,
            })),
      (n[72] = W),
      (n[73] = z.maximum),
      (n[74] = z.minimum),
      (n[75] = K))
    : (K = n[75]);
  let q;
  n[76] === p
    ? (q = n[77])
    : ((q = p.formatMessage({
        id: `checkout.creditAmount`,
        defaultMessage: `Credit purchase amount`,
        description: `Amount of money to spend on prepaid credits`,
      })),
      (n[76] = p),
      (n[77] = q));
  let J;
  n[78] !== z.pricingInfo.amountPerCredit ||
  n[79] !== z.pricingInfo.currencyCode ||
  n[80] !== Ze ||
  n[81] !== Ye ||
  n[82] !== Nt ||
  n[83] !== K ||
  n[84] !== q ||
  n[85] !== H
    ? ((J = (0, $.jsx)(gt, {
        name: `credit-purchase-amount`,
        creditQuantity: H,
        amountPerCredit: Mt,
        minorUnitExponent: Nt,
        currency: Lt,
        placeholder: ``,
        error: K,
        ariaLabel: q,
        onCreditQuantityChange: Ye,
        onInvalidCurrencyDraftChange: Ze,
        onBlur: Gt,
      })),
      (n[78] = z.pricingInfo.amountPerCredit),
      (n[79] = z.pricingInfo.currencyCode),
      (n[80] = Ze),
      (n[81] = Ye),
      (n[82] = Nt),
      (n[83] = K),
      (n[84] = q),
      (n[85] = H),
      (n[86] = J))
    : (J = n[86]);
  let Rt = W != null,
    zt;
  n[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (0, $.jsx)(s, {
        id: `checkout.continue`,
        defaultMessage: `Continue`,
        description: `Continue to review pricing and enter payment details; this button does not buy the plan`,
      })),
      (n[87] = zt))
    : (zt = n[87]);
  let Y;
  n[88] === Rt
    ? (Y = n[89])
    : ((Y = (0, $.jsx)(t, { type: `submit`, color: `primary`, disabled: Rt, children: zt })),
      (n[88] = Rt),
      (n[89] = Y));
  let X;
  n[90] !== J || n[91] !== Y
    ? ((X = (0, $.jsxs)(ie, { children: [J, Y] })), (n[90] = J), (n[91] = Y), (n[92] = X))
    : (X = n[92]);
  let Z;
  n[93] !== G || n[94] !== X
    ? ((Z = (0, $.jsx)(`form`, { onSubmit: G, children: X })), (n[93] = G), (n[94] = X), (n[95] = Z))
    : (Z = n[95]);
  let Ht;
  return (
    n[96] !== R || n[97] !== d || n[98] !== Z
      ? ((Ht = (0, $.jsx)(Ct, { presentation: d, documentReturnPath: R, children: Z })),
        (n[96] = R),
        (n[97] = d),
        (n[98] = Z),
        (n[99] = Ht))
      : (Ht = n[99]),
    Ht
  );
}
function Gt() {}
function Kt() {}
function qt() {}
function Jt() {}
function Yt() {}
function Xt() {}
function Zt() {
  return le(`chatgpt_checkout`);
}
function Qt({ invalidCurrency: e, maximum: t, pricingInfo: n, value: r }) {
  return e ? `invalid-currency-amount` : Number(r) > t ? `above-maximum` : We({ value: r, pricingInfo: n });
}
var $t, Q, $, en, tn;
function nn() {
  return (nn = e(() => {
    (($t = T()),
      Be(),
      A(),
      P(),
      Ze(),
      Ke(),
      Et(),
      pt(),
      Qe(),
      z(),
      g(),
      C(),
      d(),
      (Q = O()),
      y(),
      te(),
      a(),
      Ie(),
      pe(),
      L(),
      S(),
      ne(),
      it(),
      B(),
      ct(),
      Je(),
      De(),
      E(),
      Pe(),
      ke(),
      f(),
      w(),
      V(),
      jt(),
      Mt(),
      ft(),
      Nt(),
      xt(),
      vt(),
      Rt(),
      Z(),
      H(),
      ($ = ae()),
      (en = `2817445008`),
      (tn = `Invalid credit checkout presentation assignment`));
  }))();
}
export { nn as n, Ht as t };
//# sourceMappingURL=purchase-page-b5ffa33c4685.js.map
