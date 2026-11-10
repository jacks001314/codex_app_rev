import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  BO as i,
  BSt as a,
  FBt as o,
  HFt as s,
  HO as c,
  LNt as l,
  Lst as u,
  Mst as d,
  NSt as f,
  ORt as p,
  Ost as m,
  PBt as h,
  Pit as g,
  Qst as _,
  RFt as v,
  Rst as ee,
  SSt as y,
  VRt as b,
  VSt as x,
  XOt as S,
  XSt as C,
  Y3 as te,
  Z3 as w,
  ZSt as T,
  jit as E,
  jst as D,
  kB as O,
  kRt as ne,
  okt as re,
  tkt as k,
  zFt as A,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $At as ie,
  AAt as ae,
  Ajt as j,
  Bkt as oe,
  CMr as se,
  CRr as ce,
  Cjt as le,
  Ejr as ue,
  Ejt as M,
  GAt as de,
  IHn as fe,
  IWn as pe,
  Mut as me,
  NMt as he,
  Put as N,
  Qkt as P,
  Sjt as ge,
  Tjt as _e,
  UAt as ve,
  UMt as ye,
  WAt as be,
  Wkt as xe,
  XIr as Se,
  Xkt as Ce,
  Ykt as we,
  ZAt as Te,
  Zkt as Ee,
  bjr as De,
  bjt as Oe,
  cMt as ke,
  eHn as Ae,
  gjt as je,
  hJ as F,
  hRr as Me,
  iRr as I,
  ijt as Ne,
  imr as Pe,
  kjt as Fe,
  lMt as Ie,
  mJ as Le,
  mRr as Re,
  mjt as ze,
  oHn as Be,
  pjt as Ve,
  rMt as L,
  rmr as R,
  tAt as He,
  tyr as z,
  vBt as Ue,
  vRr as We,
  vjt as Ge,
  wBt as Ke,
  wRr as qe,
  wjt as Je,
  xMr as Ye,
  xjr as Xe,
  xjt as Ze,
  yMr as Qe,
  zkt as $e,
} from "./app-initial-ad16eaadf81f.js";
import {
  Ao as et,
  Bo as tt,
  Io as nt,
  So as B,
  Vo as rt,
  hs as it,
  ps as at,
  xo as ot,
} from "./app-primary-3e00728c2a4c.js";
import { i as st, o as ct } from "./dialog-fields-631df512e31c.js";
import { r as lt, t as ut } from "./pricing-config-8656df60ca94.js";
import { t as dt } from "./billing-pricing-be9f39772a6a.js";
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
} from "./checkout-page-3db28ea7e690.js";
import { c as xt, i as St, r as Ct, u as wt } from "./shell-c0663a3963e3.js";
import { a as Tt, i as Et, o as Dt, r as Ot } from "./analytics-context-14fcebae10e9.js";
import { c as kt, i as H, s as At } from "./receipt-45880ed92285.js";
import { n as jt, t as U } from "./loading-187737545e11.js";
import { a as W, i as G, n as Mt, o as Nt, r as Pt, t as Ft } from "./one-time-session-693a687c6f4d.js";
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
    m = p != null && Ie(p) ? p : `US`,
    h = new AbortController(),
    g = {
      isPricingEnabled: (e) => o.getLayer(`3768341700`).get(e, !1),
      signal: AbortSignal.any([s, h.signal]),
    },
    _ = { additionalHeaders: Pt(t), signal: s },
    v = lt({ country: m, signal: g.signal });
  v.catch(() => {});
  let ee = (e) => {
      throw (h.abort(), e);
    },
    y = await W(t, n, s).catch(ee);
  if (y == null) return (h.abort(), null);
  let x = Lt(r, y.account.structure);
  if (i.get(`audience`) === `workspace` && x !== `workspace`) return (h.abort(), null);
  let S = y.account.plan_type,
    C = x === `personal` && de(o, S);
  if (x === `workspace`) {
    let e = await I.safeGet(`/pageConfigs/billing`, _).catch(ee);
    if (
      e.credits.eligible !== !0 ||
      e.credits.credit_policy?.kind !== `business` ||
      e.credits.credit_policy.can_purchase_credits !== !0
    )
      return (h.abort(), null);
  } else {
    if (y.account.structure !== `personal`) return (h.abort(), null);
    let e = Ue(S) || C;
    if (
      (!e &&
        (S === `free` || S === `go`) &&
        (i.get(`source`) === `codex` ||
          i.get(`source`) === `codex_app_browser` ||
          i.get(`source`) === `chatgpt_web_merged`) &&
        (e =
          (await I.safeGet(`/pageConfigs/usage_limits`, _).catch(() => (s.throwIfAborted(), null)))
            ?.show_buy_credits === !0),
      (e ||=
        (
          await I.safePost(`/students/refresh_enrollment_status`, {
            ..._,
            requestBody: { campaign_id: `student_codex_credits` },
          }).catch(() => (s.throwIfAborted(), null))
        )?.metadata?.enrollment_step === `enrolled`),
      !e)
    )
      return (h.abort(), null);
  }
  let te = a.fetchQuery({
    ...Fe({ accountId: t, userId: n, authMethod: `chatgpt`, enabled: !0 }),
    staleTime: 0,
    retry: !1,
  });
  te.catch(() => {});
  let w = await ut({ country: m, prefetchedCountryConfig: v, ...g }),
    T = L(w.currency_config.symbol_code);
  if (T == null) throw Error(`Credit billing currency is unavailable`);
  let E = x === `workspace` ? b().nullish().parse(w.currency_config.business_currency_override) : void 0,
    D =
      x === `workspace` && E != null && De(o, `2658206886`).get(`is_business_currency_override_enabled`, !1),
    O = D ? L(E) : null;
  if (D && O == null) throw Error(`Credit billing currency is unavailable`);
  let ne =
      c ?? G(y, { country: m, localCurrency: T, useSubscriptionCurrency: !C, businessCurrencyOverride: O }),
    re =
      L(c?.currency) ?? (x === `personal` && !C ? L(y.entitlement.billing_currency ?? `USD`) : ne.currency);
  if (re == null) throw Error(`Credit pricing currency is unavailable`);
  let [k, A] = await Promise.all([re === T ? w : ut({ currency: re, ...g }), te]);
  s.throwIfAborted();
  let ae = J.parse(k.currency_config),
    j = {
      amountPerCredit: ae.amount_per_credit,
      currencyCode: re,
      minorUnitExponent: ae.minor_unit_exponent,
    },
    oe = Ge({ amountPerCredit: j.amountPerCredit, minorUnitExponent: j.minorUnitExponent, ...Oe }),
    se = Math.floor(Ne(o.getDynamicConfig(ie).value) / Te) * Te,
    ce = je({ minimumCreditPurchaseQuantity: oe, presetCreditQuantities: Oe.presetCreditQuantities }).filter(
      (e) => e <= se,
    ),
    ue = l && x === `personal` ? `codex_inline_credit_purchase_modal` : K(x, r),
    M = null;
  if (A != null) {
    let e = ge(x, o.getContext().user.custom?.plan_type);
    if (e != null) {
      let t = De(o, e),
        n = le({
          defaultQuantity: t.get(`default_credit_quantity`, 0),
          presetQuantities: t.get(`preset_credit_quantities`, []),
          minimumCreditQuantity: oe,
          maximumCreditQuantity: se,
          creditQuantityStep: Te,
        });
      ((M = n.defaultCreditQuantity), (ce = n.presetCreditQuantities ?? ce));
    }
  }
  let fe = _e({
    audience: x,
    minimumCreditQuantity: oe,
    maximumCreditQuantity: se,
    creditQuantityStep: Te,
    presetCreditQuantities: ce,
    offer: A,
    experimentDefaultQuantity: M,
  });
  if (fe == null) return null;
  let pe = l ? `custom` : q({ audience: x, direct: r, hasOffer: A != null, statsig: o });
  return {
    audience: x,
    pricingInfo: j,
    minimum: oe,
    maximum: se,
    presets: ce,
    defaultQuantity: fe,
    experimentDefaultQuantity: M,
    offer: A,
    entryPoint: ue,
    checkoutUiMode: pe,
    billingDetails: ne,
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
  if (!t) return be(r, e) ? `custom` : `redirect`;
}
var J;
function Rt() {
  return (Rt = e(() => {
    (ke(),
      M(),
      s(),
      Se(),
      z(),
      Ke(),
      j(),
      ze(),
      ve(),
      Xe(),
      dt(),
      Nt(),
      (J = ne({ amount_per_credit: p().positive(), minor_unit_exponent: p().int().nonnegative() })));
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
  return m({
    enabled: t,
    queryKey: [`inline-credit-purchase-history`, e],
    queryFn: ({ signal: t }) =>
      zt({
        signal: t,
        request: (n, r) =>
          I.safeGet(`/payments/transaction-history`, {
            parameters: { query: { account_id: e, limit: r, ...(n ? { cursor: n } : {}) } },
            signal: t,
          }),
        onError: (e) =>
          A.error(`checkout.inline.purchase_history_failed`, { safe: {}, sensitive: { error: e } }),
      }),
    ...Y,
  });
}
function Z() {
  return (Z = e(() => {
    (X(), z(), v());
  }))();
}
function Vt(e) {
  return e instanceof E && e.responseStatus === 400 && e.message.includes(tn);
}
function Ht(e) {
  let t = (0, $t.c)(23),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { presentation: r } = n,
    { accountId: i, userId: a, isLoading: o } = Pe(),
    s = x(),
    [c] = C();
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
    u;
  return (
    t[18] !== i || t[19] !== r || t[20] !== l || t[21] !== a
      ? ((u = (0, $.jsx)(Wt, { accountId: i, userId: a, presentation: r }, l)),
        (t[18] = i),
        (t[19] = r),
        (t[20] = l),
        (t[21] = a),
        (t[22] = u))
      : (u = t[22]),
    u
  );
}
function Ut() {}
function Wt(e) {
  let n = (0, $t.c)(100),
    { accountId: o, userId: s, presentation: c } = e,
    l = t(_),
    u = re(),
    f = ue(),
    m = ee(),
    h = r(),
    g = a(`/checkout`),
    v = x(),
    [b] = C(),
    S;
  n[0] !== c || n[1] !== b
    ? ((S = c == null ? b : new URLSearchParams(c.search)), (n[0] = c), (n[1] = b), (n[2] = S))
    : (S = n[2]);
  let w = S,
    T;
  n[3] === c ? (T = n[4]) : ((T = ht(c)), (n[3] = c), (n[4] = T));
  let E = T,
    D;
  n[5] !== o || n[6] !== E || n[7] !== v || n[8] !== c || n[9] !== w || n[10] !== s
    ? ((D = () => {
        let e =
          c?.creditCheckoutAnalytics ??
          Et({ context: v.state?.creditCheckoutAnalytics, accountId: o }) ??
          (c == null ? Ot({ search: w.toString(), accountId: o, userId: s }) : void 0);
        return He(e, E);
      }),
      (n[5] = o),
      (n[6] = E),
      (n[7] = v),
      (n[8] = c),
      (n[9] = w),
      (n[10] = s),
      (n[11] = D))
    : (D = n[11]);
  let [O, ne] = (0, Q.useState)(D),
    [A, ie] = (0, Q.useState)(!1),
    [j, le] = (0, Q.useState)(O?.webMergeExperiment),
    M;
  n[12] === O ? (M = n[13]) : ((M = oe(O)), (n[12] = O), (n[13] = M));
  let [de, pe] = (0, Q.useState)(M),
    he = He(c?.creditCheckoutAnalytics, E),
    N = oe(he);
  N != null && N !== de && (pe(N), ne(he), le(he?.webMergeExperiment), ie(!1));
  let P =
      N != null && N === de && O != null
        ? {
            ...O,
            funnelMeasurementEnabled:
              O.funnelMeasurementEnabled === !0 ? he?.funnelMeasurementEnabled : void 0,
            opening: he?.opening,
          }
        : O,
    ge = P,
    _e = c == null ? `full_page` : `modal`,
    ve = bt(c, ge),
    be = ot(ve),
    Se = c == null && v.pathname.includes(`/purchase/`),
    Oe = c?.inline != null,
    ke;
  n[14] !== o || n[15] !== Oe ? ((ke = Bt(o, Oe)), (n[14] = o), (n[15] = Oe), (n[16] = ke)) : (ke = n[16]);
  let { data: je } = d(ke),
    [F, Me] = (0, Q.useState)(!1),
    Ne = (0, Q.useRef)(null),
    Pe = (0, Q.useRef)(null),
    [Fe, Ie] = (0, Q.useState)(),
    [Le, ze] = (0, Q.useState)(null),
    L;
  n[17] === w ? (L = n[18]) : ((L = void 0), (n[17] = w), (n[18] = L));
  let R = L,
    [z] = (0, Q.useState)(() => ge?.purchaseAttemptId ?? crypto.randomUUID()),
    Ue = (0, Q.useRef)(!1),
    [We, Ge] = (0, Q.useState)(null),
    [Ke, Xe] = (0, Q.useState)(!1),
    [Qe, tt] = (0, Q.useState)(null),
    {
      data: B,
      error: it,
      isPending: ct,
      refetch: lt,
    } = d({
      queryKey: [`credit-checkout-preparation`, o, s, z],
      queryFn: async (e) => {
        let { signal: t } = e;
        c == null && !Ue.current && ((Ue.current = !0), et(l, ge));
        try {
          let e = await yt(`preparation`, z, t, () =>
            It({
              scope: l,
              accountId: o,
              userId: s,
              direct: Se,
              modal: c != null,
              search: w,
              queryClient: m,
              statsig: f,
              signal: t,
              restartBillingDetails: v.state?.creditRestartBillingDetails,
            }),
          );
          return (
            t.throwIfAborted(),
            c?.assertCurrent(),
            e ??
              nt(
                l,
                P,
                void 0,
                at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE,
                be,
              ),
            e
          );
        } catch (e) {
          let n = e;
          throw (
            t.throwIfAborted(),
            c?.assertCurrent(),
            nt(l, P, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_INITIAL_DATA_ERROR, be),
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
    ut = Se ? Number(w.get(`quantity`)) : (Qe ?? p().safeParse(v.state?.creditPurchaseQuantity).data ?? null),
    dt = B == null ? null : (ut ?? (B.checkoutUiMode === `custom` ? B.defaultQuantity : null)),
    {
      data: V,
      error: ft,
      isFetching: pt,
      refetch: vt,
    } = d({
      queryKey: [`credit-checkout-create`, o, s, z, dt],
      enabled: B != null && dt != null,
      queryFn: (e) => {
        let { signal: t } = e;
        return St(dt, z, t);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
      refetchOnMount: !1,
    });
  async function St(e, t, n, r) {
    let i = r !== void 0 && r,
      a = P == null ? void 0 : { ...P, webMergeExperiment: j };
    if (
      B == null ||
      e == null ||
      !Number.isSafeInteger(e) ||
      e > B.maximum ||
      (!(i && c?.inline != null) && Ve({ value: String(e), pricingInfo: B.pricingInfo }) != null)
    )
      throw (
        nt(
          l,
          P,
          void 0,
          at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE,
          be,
        ),
        Error(`Invalid credit purchase requestedCreditQuantity`)
      );
    let u = A;
    if (u) {
      (n.throwIfAborted(), c?.assertCurrent());
      let e = De(f, en, { disableExposureLog: !0 }),
        t = we(e, e.get(`credit_checkout_presentation`, `full_page`), j);
      (le(t), (a = O == null ? void 0 : { ...O, webMergeExperiment: t }));
    }
    let d = Ce(a, P?.actualPresentation ?? E, _e),
      p = P,
      m = ot(d),
      _ = B.entryPoint;
    c != null &&
      B.audience === `personal` &&
      (_ = E === `inline` ? `codex_inline_credit_purchase_modal` : `codex_credit_purchase_modal`);
    let ee = Ee(a, { accountId: o, userId: s }),
      y = Re(w),
      b = {
        supports_saved_payment_link: !0,
        ...(d === `inline` ? { credit_checkout_presentation: `inline` } : {}),
        ...Ze({
          accountId: o,
          quantity:
            i && c?.inline != null
              ? e
              : Je({
                  quantity: e,
                  offer: B.offer,
                  maximumCreditQuantity: B.maximum,
                  experimentDefaultQuantity:
                    v.state?.creditPurchaseQuantity == null ? B.experimentDefaultQuantity : null,
                  clampToDiscountTier: v.state?.creditPurchaseQuantity == null,
                }),
          discountOfferId: B.offer?.offer_id,
          entryPoint: _,
          checkoutUiMode: B.checkoutUiMode,
          billingDetails: B.billingDetails,
          cancelUrl: new URL(
            ae(w.get(`return_to`), B.audience === `workspace` ? `/admin/billing` : `/settings/usage`),
            window.location.origin,
          ).href,
        }),
        checkout_appearance: h ? `dark` : `light`,
        checkout_source: y === `unknown` ? void 0 : y,
        purchase_attempt_id: t,
        ...(ee == null ? {} : { credit_checkout_launch: ee }),
        prefetch: !1,
        supports_oaics_credit_modal: c != null,
      },
      x = !ye(b) && De(f, `3950229590`).get(`skip_sentinel_checkout`, !1);
    Ye(l, Be, {
      checkoutUiMode: b.checkout_ui_mode ?? void 0,
      isCheckoutModalEnabled: c != null,
      checkoutKind: `standalone_credit`,
      entryPoint: _,
    });
    let S = x ? {} : await yt(`integrity`, t, n, Zt);
    (n.throwIfAborted(), c?.assertCurrent(), u && ie(!1));
    let C = await yt(`session_creation`, t, n, () =>
      Ft({
        accountId: o,
        requestBody: b,
        integrityHeaders: { ...S, "x-credit-checkout-presentation": d },
        signal: n,
      }),
    ).catch((e) => {
      throw (
        n.throwIfAborted(),
        c?.assertCurrent(),
        b.credit_checkout_launch != null && Vt(e) && ie(!0),
        nt(l, p, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR, m),
        e
      );
    });
    if ((n.throwIfAborted(), c?.assertCurrent(), C != null))
      try {
        if (
          `tag` in C &&
          (C.tag === `custom_checkout_session` || C.tag === `hosted_checkout_session`) &&
          (ce(C.checkout_session_id, b.checkout_source ?? null, w.get(`checkout_from`)),
          At(C.checkout_session_id, w),
          qe(C.checkout_session_id, w),
          c?.continuationTask != null && kt(C.checkout_session_id, c.continuationTask),
          C.tag === `custom_checkout_session` && C.status === `complete` && c != null)
        )
          return (await c.onCompleted(C, null), { status: `completed` });
        if (
          (`tag` in C && (C.tag === `custom_checkout_session` || C.tag === `hosted_checkout_session`)) ||
          C.url != null
        ) {
          (!(`tag` in C) || C.tag !== `redirect_to_portal`) &&
            Ye(l, fe, { checkoutKind: `standalone_credit`, entryPoint: _ });
          let e = `checkout_session_id` in C ? C.checkout_session_id : C.url?.match(/cs_[A-Za-z0-9_]+/)?.[0];
          if (
            (Ye(l, Ae, {
              ...xe(p),
              checkoutId: e,
              checkoutResponseTag: `tag` in C ? C.tag : `missing_tag`,
              checkoutOriginProductExperience: c?.workHomeBeacon ? `work` : void 0,
              checkoutOriginDeliverySurface: c?.workHomeBeacon ? `web` : void 0,
              isCheckoutModalEnabled: c != null,
              checkoutKind: `standalone_credit`,
              entryPoint: _,
            }),
            i || rt(l, p, `navigated`, { checkoutId: e, entryPoint: _ }),
            !(`tag` in C) || C.tag !== `custom_checkout_session`)
          ) {
            if (
              (await l.get(se).flush(1e3).catch(Xt),
              n.throwIfAborted(),
              c?.assertCurrent(),
              `tag` in C && C.tag === `custom_checkout_session`)
            ) {
              Dt({ checkoutSessionId: C.checkout_session_id, checkoutPayload: b, userId: s, analytics: p });
              let e = new URLSearchParams(w);
              return (
                e.set(me, `credits`),
                (Qe == null ? wt : xt)(`${g}/${C.processor_entity}/${C.checkout_session_id}?${e}`),
                { status: `document_navigation` }
              );
            }
            (Se || B.audience === `workspace`) && C.url != null && xt(C.url);
          }
          return { status: `checkout`, response: C };
        }
      } catch {
        n.throwIfAborted();
      }
    return (
      nt(l, p, void 0, at.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR, m),
      { status: `uncertain` }
    );
  }
  let Tt = async function (e, t, n, r, i) {
    if (c == null) throw Error(`Checkout is not mounted`);
    (c.assertCurrent(),
      Me(!0),
      await (async () => {
        let a = AbortSignal.any([AbortSignal.timeout(3e4), ...(i == null ? [] : [i.signal])]);
        if (i != null) {
          let t = await I.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
            parameters: {
              path: {
                processor_entity: i.session.processor_entity,
                checkout_session_id: i.session.checkout_session_id,
              },
              query: { payment_state_source: `live` },
            },
            additionalHeaders: Pt(o),
            signal: a,
          });
          if (
            (a.throwIfAborted(),
            c.assertCurrent(),
            t.tag !== `custom_checkout_session` ||
              t.checkout_session_id !== i.session.checkout_session_id ||
              t.processor_entity !== i.session.processor_entity)
          )
            throw Error(`Checkout payment state is unavailable`);
          if (t.status === `complete` || t.payment_status === `paid`) {
            await c.onCompleted(t, e, !0);
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
          if (o == null || t == null || r == null) throw Error(`Missing account or selected card`);
          let e = await I.safePost(`/payments/credit_purchase/payment_method`, {
            requestBody: {
              account_id: o,
              checkout_session_id: r.checkout_session_id,
              processor_entity: r.processor_entity,
              payment_method_id: t,
              consent_version: `credit_purchase_v1`,
            },
            signal: a,
          });
          (a.throwIfAborted(), c.assertCurrent(), (s = e.canonical_payment_method_id));
        }
        let l = await St(e, crypto.randomUUID(), a, !0);
        if (
          (a.throwIfAborted(),
          c.assertCurrent(),
          l.status !== `checkout` || !(`tag` in l.response) || l.response.tag !== `custom_checkout_session`)
        )
          throw Error(`Saved card checkout is unavailable`);
        let u = l.response;
        if (i != null && u.checkout_session_id === i.session.checkout_session_id)
          throw Error(`Declined checkout was not replaced`);
        let d = u.inline_credit_saved_card_contract,
          f = new Date(),
          p = d?.consent_required_payment_methods ?? [],
          m = [...(d?.payment_methods ?? []), ...p].filter(
            (e) =>
              e.exp_year > f.getFullYear() ||
              (e.exp_year === f.getFullYear() && e.exp_month >= f.getMonth() + 1),
          ),
          h = d?.requires_payment_method_opt_in === !0 || p.some((e) => e.payment_method_id === s);
        if (
          (i == null || s != null) &&
          (d?.status !== `ready` ||
            m.length === 0 ||
            (s != null && !m.some((e) => e.payment_method_id === s)) ||
            (n && h))
        )
          throw Error(`Saved card is unavailable in this checkout`);
        ((Ne.current = i?.step !== `amount` && !h && s != null ? u.checkout_session_id : null),
          Ie(s),
          ze(u),
          (c.retention ?? c.inline)?.onSessionChange(u));
        let g = Ne.current == null ? `payment` : `preparing-review`;
        (i?.step === `amount` ? (g = `amount`) : (h || s == null) && (g = `method`),
          c.inline?.onStepChange(g));
      })().finally(() => Me(!1)));
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
      if (c != null) {
        let e = Le ?? V.response;
        if (e.status === `expired`) {
          let e;
          n[20] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(`p`, {
                role: `alert`,
                children: (0, $.jsx)(k, {
                  id: `checkout.creditModal.expired`,
                  defaultMessage: `This checkout has expired`,
                  description: `The existing credit checkout can no longer accept a payment`,
                }),
              })),
              (n[20] = e))
            : (e = n[20]);
          let t;
          n[21] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((t = (0, $.jsx)(k, {
                id: `checkout.creditModal.restart`,
                defaultMessage: `Start a new checkout`,
                description: `Create another checkout after the prior one expired`,
              })),
              (n[21] = t))
            : (t = n[21]);
          let r;
          return (
            n[22] === c.onRestart
              ? (r = n[23])
              : ((r = (0, $.jsxs)(i, {
                  children: [e, (0, $.jsx)(te, { onClick: c.onRestart, children: t })],
                })),
                (n[22] = c.onRestart),
                (n[23] = r)),
            r
          );
        }
        let t;
        n[24] !== c.inline || n[25] !== c.retention
          ? ((t = (e) => {
              (ze(e), (c.retention ?? c.inline)?.onSessionChange(e));
            }),
            (n[24] = c.inline),
            (n[25] = c.retention),
            (n[26] = t))
          : (t = n[26]);
        let r = (0, $.jsx)(
          _t,
          {
            session: e,
            onRetry: c.onRestart,
            presentation: {
              ...c,
              creditCheckoutAnalytics: P,
              hasPriorCreditPurchase: je === !0,
              initialPaymentMethodId: Fe,
              inlineReviewRef: (e) => {
                ((Pe.current = e),
                  e != null &&
                    queueMicrotask(() => {
                      Pe.current === e &&
                        Ne.current === e.checkoutSessionId &&
                        ((Ne.current = null), e.prepare());
                    }));
              },
              onSessionReplaced: t,
              onPaymentMethodAdded: (t, n, r) => Tt(t, n, r, e),
              onRetryPayment: (t, n, r, i, a) => Tt(t, n, a, e, { session: e, step: r, signal: i }),
            },
          },
          `${o}:${e.checkout_session_id}`,
        );
        if (c.inline != null) {
          let e;
          return (
            n[27] !== c || n[28] !== F
              ? ((e = F
                  ? (0, $.jsx)(`div`, {
                      className: `absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-surface/80`,
                      children: (0, $.jsx)(U, { loading: !0, presentation: c, onRetry: Jt }),
                    })
                  : null),
                (n[27] = c),
                (n[28] = F),
                (n[29] = e))
              : (e = n[29]),
            (0, $.jsxs)(`div`, {
              className: `relative`,
              children: [(0, $.jsx)(`div`, { inert: F, children: r }), e],
            })
          );
        }
        let a;
        return (
          n[30] !== c || n[31] !== F
            ? ((a = F ? (0, $.jsx)(U, { loading: !0, presentation: c, onRetry: qt }) : null),
              (n[30] = c),
              (n[31] = F),
              (n[32] = a))
            : (a = n[32]),
          (0, $.jsxs)($.Fragment, { children: [a, (0, $.jsx)(`div`, { hidden: F, inert: F, children: r })] })
        );
      }
      return (0, $.jsx)(y, {
        to: `/checkout/${V.response.processor_entity}/${V.response.checkout_session_id}?${w}`,
        state: {
          ...$e({ analytics: P, accountId: o, checkoutSessionId: V.response.checkout_session_id }),
          checkoutLoadingContext: `credits`,
        },
        replace: !0,
      });
    }
    if (V.response.url != null) {
      let e = c == null ? void 0 : { ...c, creditCheckoutAnalytics: P },
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
      n[36] !== V.response.checkout_session_id || n[37] !== V.response.processor_entity || n[38] !== w
        ? ((e = new URLSearchParams(w)),
          e.set(`processor_entity`, V.response.processor_entity),
          e.set(`stripe_session_id`, V.response.checkout_session_id),
          (n[36] = V.response.checkout_session_id),
          (n[37] = V.response.processor_entity),
          (n[38] = w),
          (n[39] = e))
        : (e = n[39]);
      let t = `/checkout/verify?${e}`,
        r;
      return (
        n[40] === t ? (r = n[41]) : ((r = (0, $.jsx)(y, { to: t, replace: !0 })), (n[40] = t), (n[41] = r)),
        r
      );
    }
  }
  if (V?.status === `completed`) {
    let e;
    return (
      n[42] !== R || n[43] !== c
        ? ((e = (0, $.jsx)(U, {
            loading: !0,
            context: `credits`,
            presentation: c,
            documentReturnPath: R,
            onRetry: Kt,
          })),
          (n[42] = R),
          (n[43] = c),
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
          children: (0, $.jsx)(k, {
            id: `checkout.creditCreationUncertain`,
            defaultMessage: `We couldn’t confirm whether checkout was created. Check your billing activity before starting another purchase`,
            description: `Credit checkout creation returned an unknown outcome, so another session is not created automatically`,
          }),
        })),
        (n[45] = e))
      : (e = n[45]);
    let t;
    return (
      n[46] !== R || n[47] !== c
        ? ((t = (0, $.jsx)(Ct, { presentation: c, documentReturnPath: R, children: e })),
          (n[46] = R),
          (n[47] = c),
          (n[48] = t))
        : (t = n[48]),
      t
    );
  }
  if (ct || it != null || ft != null || pt) {
    let e = ct || pt,
      t = it ?? ft,
      r;
    n[49] !== it || n[50] !== vt || n[51] !== lt
      ? ((r = () => {
          it == null ? vt() : lt();
        }),
        (n[49] = it),
        (n[50] = vt),
        (n[51] = lt),
        (n[52] = r))
      : (r = n[52]);
    let i;
    return (
      n[53] !== R || n[54] !== c || n[55] !== e || n[56] !== t || n[57] !== r
        ? ((i = (0, $.jsx)(U, {
            loading: e,
            context: `credits`,
            presentation: c,
            error: t,
            documentReturnPath: R,
            onRetry: r,
          })),
          (n[53] = R),
          (n[54] = c),
          (n[55] = e),
          (n[56] = t),
          (n[57] = r),
          (n[58] = i))
        : (i = n[58]),
      i
    );
  }
  if (B == null) {
    let e;
    n[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          role: `alert`,
          children: (0, $.jsx)(k, {
            id: `checkout.creditUnavailable`,
            defaultMessage: `Credit purchases aren’t available for this account`,
            description: `The signed-in account does not have permission or eligibility to buy prepaid credits`,
          }),
        })),
        (n[59] = e))
      : (e = n[59]);
    let t;
    return (
      n[60] !== R || n[61] !== c
        ? ((t = (0, $.jsx)(Ct, { presentation: c, documentReturnPath: R, children: e })),
          (n[60] = R),
          (n[61] = c),
          (n[62] = t))
        : (t = n[62]),
      t
    );
  }
  let H = We ?? String(B.defaultQuantity),
    jt;
  n[63] !== Ke || n[64] !== B.maximum || n[65] !== B.pricingInfo || n[66] !== H
    ? ((jt = Qt({ invalidCurrency: Ke, maximum: B.maximum, pricingInfo: B.pricingInfo, value: H })),
      (n[63] = Ke),
      (n[64] = B.maximum),
      (n[65] = B.pricingInfo),
      (n[66] = H),
      (n[67] = jt))
    : (jt = n[67]);
  let W = jt,
    G;
  n[68] !== W || n[69] !== tt || n[70] !== H
    ? ((G = (e) => {
        (e.preventDefault(), W ?? tt(Number(H)));
      }),
      (n[68] = W),
      (n[69] = tt),
      (n[70] = H),
      (n[71] = G))
    : (G = n[71]);
  let Mt = B.pricingInfo.amountPerCredit,
    Nt = B.pricingInfo.minorUnitExponent ?? 2,
    Lt = B.pricingInfo.currencyCode,
    K;
  n[72] !== W || n[73] !== B.maximum || n[74] !== B.minimum
    ? ((K =
        W == null
          ? void 0
          : (0, $.jsx)(st, {
              fieldError: W,
              minimumQuantity: B.minimum,
              maximumQuantity: B.maximum,
              quantityStep: Te,
            })),
      (n[72] = W),
      (n[73] = B.maximum),
      (n[74] = B.minimum),
      (n[75] = K))
    : (K = n[75]);
  let q;
  n[76] === u
    ? (q = n[77])
    : ((q = u.formatMessage({
        id: `checkout.creditAmount`,
        defaultMessage: `Credit purchase amount`,
        description: `Amount of money to spend on prepaid credits`,
      })),
      (n[76] = u),
      (n[77] = q));
  let J;
  n[78] !== B.pricingInfo.amountPerCredit ||
  n[79] !== B.pricingInfo.currencyCode ||
  n[80] !== Xe ||
  n[81] !== Ge ||
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
        onCreditQuantityChange: Ge,
        onInvalidCurrencyDraftChange: Xe,
        onBlur: Gt,
      })),
      (n[78] = B.pricingInfo.amountPerCredit),
      (n[79] = B.pricingInfo.currencyCode),
      (n[80] = Xe),
      (n[81] = Ge),
      (n[82] = Nt),
      (n[83] = K),
      (n[84] = q),
      (n[85] = H),
      (n[86] = J))
    : (J = n[86]);
  let Rt = W != null,
    zt;
  n[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (0, $.jsx)(k, {
        id: `checkout.continue`,
        defaultMessage: `Continue`,
        description: `Continue to review pricing and enter payment details; this button does not buy the plan`,
      })),
      (n[87] = zt))
    : (zt = n[87]);
  let Y;
  n[88] === Rt
    ? (Y = n[89])
    : ((Y = (0, $.jsx)(te, { type: `submit`, color: `primary`, disabled: Rt, children: zt })),
      (n[88] = Rt),
      (n[89] = Y));
  let X;
  n[90] !== J || n[91] !== Y
    ? ((X = (0, $.jsxs)(i, { children: [J, Y] })), (n[90] = J), (n[91] = Y), (n[92] = X))
    : (X = n[92]);
  let Z;
  n[93] !== G || n[94] !== X
    ? ((Z = (0, $.jsx)(`form`, { onSubmit: G, children: X })), (n[93] = G), (n[94] = X), (n[95] = Z))
    : (Z = n[95]);
  let Ht;
  return (
    n[96] !== R || n[97] !== c || n[98] !== Z
      ? ((Ht = (0, $.jsx)(Ct, { presentation: c, documentReturnPath: R, children: Z })),
        (n[96] = R),
        (n[97] = c),
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
  return Le(`chatgpt_checkout`);
}
function Qt({ invalidCurrency: e, maximum: t, pricingInfo: n, value: r }) {
  return e ? `invalid-currency-amount` : Number(r) > t ? `above-maximum` : Ve({ value: r, pricingInfo: n });
}
var $t, Q, $, en, tn;
function nn() {
  return (nn = e(() => {
    (($t = h()),
      N(),
      he(),
      We(),
      M(),
      P(),
      Tt(),
      pt(),
      pe(),
      it(),
      D(),
      u(),
      T(),
      (Q = o()),
      S(),
      f(),
      s(),
      R(),
      F(),
      z(),
      w(),
      c(),
      B(),
      tt(),
      ct(),
      ze(),
      Qe(),
      n(),
      Xe(),
      Me(),
      O(),
      g(),
      V(),
      jt(),
      Mt(),
      ft(),
      Nt(),
      St(),
      vt(),
      Rt(),
      Z(),
      H(),
      ($ = l()),
      (en = `2817445008`),
      (tn = `Invalid credit checkout presentation assignment`));
  }))();
}
export { nn as n, Ht as t };
//# sourceMappingURL=purchase-page-c46ff0a3550e.js.map
