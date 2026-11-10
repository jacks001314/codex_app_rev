import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  EPt as r,
  Fz as i,
  IDt as a,
  Iot as o,
  Ixt as ee,
  Lot as s,
  Pxt as c,
  Pz as l,
  RLt as u,
  VDt as te,
  Xot as d,
  Yot as f,
  _Mt as p,
  _O as ne,
  fO as m,
  gMt as h,
  gO as re,
  hrt as g,
  jDt as _,
  mO as v,
  oO as ie,
  pIt as y,
  sO as ae,
  t3 as b,
  vO as x,
  vrt as S,
  vzt as C,
  wot as w,
  xMt as oe,
  yzt as se,
  zxt as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Pt as le,
  APr as ue,
  KK as de,
  OPr as fe,
  QFt as pe,
  WK as me,
  aDr as he,
  eDr as T,
  eIt as ge,
  iPr as _e,
  nDr as ve,
  oDr as ye,
  rDr as be,
  sPr as xe,
  tFt as E,
} from "./app-initial-5851df3f6cb1.js";
import { $o as D, Zo as O } from "./app-primary-fe8a450b3b04.js";
import { n as k, r as Se } from "./queries-a0c4a0375be0.js";
import { a as Ce, i as we } from "./pure-b84c4c3484c4.js";
import { a as A, t as j } from "./stripe-elements-appearance-5ef60c7c8897.js";
import { a as M, i as Te, n as N, o as Ee, s as P } from "./error-4216d2e638a8.js";
import { n as F, r as De, t as Oe } from "./stripe-client-65fa98e77e53.js";
var I, L, R, ke, z, B, V, H;
function Ae() {
  return (Ae = e(() => {
    ((I = `_action_h15cp_1`),
      (L = `_form_h15cp_6`),
      (R = `_fields_h15cp_7`),
      (ke = `_address_h15cp_18`),
      (z = `_addressTitle_h15cp_28`),
      (B = `_disclosure_h15cp_35`),
      (V = `_inline_h15cp_41`),
      (H = { action: I, form: L, fields: R, address: ke, addressTitle: z, disclosure: B, inline: V }));
  }))();
}
function je(e) {
  let t = (0, U.c)(34),
    {
      presentation: n,
      isInteractionBlocked: r,
      paymentElementOptions: i,
      onPaymentReady: a,
      onPaymentChange: o,
      isAddressReady: ee,
      areFieldsReady: s,
      billingAddressTitle: c,
      billingCountry: l,
      onAddressReady: u,
      onAddressChange: te,
      error: d,
      disclosure: f,
      action: p,
    } = e,
    [ne, m] = (0, Ne.useState)(n !== `inline`),
    re = n === `inline` && H.inline,
    g;
  t[0] === re ? (g = t[1]) : ((g = h(H.form, re)), (t[0] = re), (t[1] = g));
  let _;
  t[2] === o
    ? (_ = t[3])
    : ((_ = (e) => {
        (e.complete && m(!0), o(e));
      }),
      (t[2] = o),
      (t[3] = _));
  let v;
  t[4] !== a || t[5] !== i || t[6] !== _
    ? ((v = (0, W.jsx)(Me.PaymentElement, { options: i, onReady: a, onChange: _ })),
      (t[4] = a),
      (t[5] = i),
      (t[6] = _),
      (t[7] = v))
    : (v = t[7]);
  let ie = !ne,
    y;
  t[8] !== c || t[9] !== ee
    ? ((y = ee ? (0, W.jsx)(`p`, { className: H.addressTitle, children: c }) : null),
      (t[8] = c),
      (t[9] = ee),
      (t[10] = y))
    : (y = t[10]);
  let ae;
  t[11] === l
    ? (ae = t[12])
    : ((ae = {
        mode: `billing`,
        allowedCountries: l ? [l] : [...le],
        ...(l ? { defaultValues: { address: { country: l } } } : {}),
      }),
      (t[11] = l),
      (t[12] = ae));
  let b;
  t[13] !== te || t[14] !== u || t[15] !== ae
    ? ((b = (0, W.jsx)(Me.AddressElement, { options: ae, onReady: u, onChange: te })),
      (t[13] = te),
      (t[14] = u),
      (t[15] = ae),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== ie || t[18] !== y || t[19] !== b
    ? ((x = (0, W.jsxs)(`div`, { className: H.address, hidden: ie, children: [y, b] })),
      (t[17] = ie),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== r || t[22] !== v || t[23] !== x
    ? ((S = (0, W.jsxs)(`div`, {
        className: H.fields,
        "data-testid": `stripe-elements-interaction-container`,
        inert: r,
        children: [v, x],
      })),
      (t[21] = r),
      (t[22] = v),
      (t[23] = x),
      (t[24] = S))
    : (S = t[24]);
  let C;
  t[25] !== p || t[26] !== s || t[27] !== f
    ? ((C = s
        ? (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(`p`, { className: H.disclosure, children: f }),
              (0, W.jsx)(`div`, { className: H.action, children: p }),
            ],
          })
        : null),
      (t[25] = p),
      (t[26] = s),
      (t[27] = f),
      (t[28] = C))
    : (C = t[28]);
  let w;
  return (
    t[29] !== d || t[30] !== S || t[31] !== C || t[32] !== g
      ? ((w = (0, W.jsxs)(`div`, { className: g, children: [S, d, C] })),
        (t[29] = d),
        (t[30] = S),
        (t[31] = C),
        (t[32] = g),
        (t[33] = w))
      : (w = t[33]),
    w
  );
}
var U, Me, Ne, W;
function G() {
  return (G = e(() => {
    ((U = C()), (Me = A()), p(), (Ne = se()), E(), Ae(), (W = oe()));
  }))();
}
function Pe({
  themeVariables: e,
  presentation: t,
  currency: n,
  isDarkMode: r,
  setupIntentClientSecret: i,
  useConfirmationTokenFlow: a,
}) {
  let o = j(r, e, t);
  return a
    ? n
      ? {
          mode: `setup`,
          currency: n,
          paymentMethodCreation: `manual`,
          paymentMethodTypes: [`card`],
          loader: `auto`,
          appearance: o,
        }
      : null
    : i
      ? { clientSecret: i, loader: `auto`, appearance: o }
      : null;
}
function K() {
  return (K = e(() => {}))();
}
var Fe, Ie, Le, Re, ze, Be, Ve, q;
function He() {
  return (He = e(() => {
    ((Fe = `_layout_vvwe3_1`),
      (Ie = `_title_vvwe3_8`),
      (Le = `_header_vvwe3_15`),
      (Re = `_inline_vvwe3_22`),
      (ze = `_inlineTitle_vvwe3_27`),
      (Be = `_heading_vvwe3_34`),
      (Ve = `_description_vvwe3_42`),
      (q = { layout: Fe, title: Ie, header: Le, inline: Re, inlineTitle: ze, heading: Be, description: Ve }));
  }))();
}
function Ue(e) {
  let t = (0, J.c)(12),
    { title: n, description: r, presentation: i, closeButton: a, children: o } = e,
    ee = i === `inline` && q.inline,
    s;
  t[0] === ee ? (s = t[1]) : ((s = h(q.layout, ee)), (t[0] = ee), (t[1] = s));
  let c;
  t[2] !== r || t[3] !== n
    ? ((c =
        r == null
          ? n
          : (0, Y.jsxs)(`div`, {
              className: q.heading,
              children: [n, (0, Y.jsx)(`div`, { className: q.description, children: r })],
            })),
      (t[2] = r),
      (t[3] = n),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== a || t[6] !== c
    ? ((l = (0, Y.jsxs)(`div`, { className: q.header, children: [c, a] })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== o || t[9] !== s || t[10] !== l
      ? ((u = (0, Y.jsxs)(`div`, { className: s, children: [l, o] })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function We(e) {
  let t = (0, J.c)(5),
    { children: n, presentation: r } = e,
    i = r === `inline` && q.inlineTitle,
    a;
  t[0] === i ? (a = t[1]) : ((a = h(q.title, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== n || t[3] !== a
      ? ((o = (0, Y.jsx)(`span`, { className: a, children: n })), (t[2] = n), (t[3] = a), (t[4] = o))
      : (o = t[4]),
    o
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = C()), p(), He(), (Y = oe()));
  }))();
}
function Ge(e, t) {
  let n = Z.safeParse(e.getLayer(`1461259566`).get(`payment_method_order`, null)),
    r = n.success ? n.data : void 0;
  if (r == null || r.length === 0) {
    let t = Z.safeParse(e.getDynamicConfig(`247832287`).get(`payment_method_order`, null));
    r = t.success && t.data.length > 0 ? t.data : void 0;
  }
  let i = e.getLayer(`2160290604`).get(`pe_layout_mode`, `tabs`),
    a = e.getLayer(`4224149292`).get(`hide_payment_element_name`, !1);
  return O(
    {
      ...(t?.isPaypalPromoCheckout ? ge : {}),
      defaultValues: t?.email ? { billingDetails: { email: t.email } } : void 0,
    },
    {
      checkoutSessionId: t?.checkoutSessionId,
      isNewStripeCustomer: t?.isNewStripeCustomer,
      nativeSaveDefault: t?.nativeSaveDefault,
      useMinimalBillingAddress: t?.useMinimalBillingAddress,
      minimalBillingAddress: t?.minimalBillingAddress,
      paymentMethodOrder: r,
      paymentElementLayoutMode: i,
      shouldHidePaymentElementName: a || t?.isPaypalPromoCheckout,
      isGooglePayEnabled:
        t?.isNewStripeCustomer === !0 && e.getLayer(`2160290604`).get(`is_google_pay_pe_enabled`, !1),
    },
  );
}
var Z;
function Ke() {
  return (Ke = e(() => {
    (pe(), D(), r(), (Z = y(u()).transform((e) => e.filter((e) => typeof e == `string`))));
  }))();
}
function qe(e) {
  let t = (0, Qe.c)(3),
    n = `${e.accountId}:${e.requireRedisplayConsent === !0}:${e.inlineCreditCheckout === !0}`,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, $.jsx)(Je, { ...e }, n)), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Je(e) {
  let t = (0, Qe.c)(23),
    {
      accountId: r,
      requireRedisplayConsent: a,
      inlineCreditCheckout: o,
      onCloseAutoFocus: s,
      onClose: c,
      onSuccess: l,
    } = e,
    u = a !== void 0 && a,
    f = o !== void 0 && o,
    p = ee(n),
    m = te(),
    h = he().getExperiment(`4048417348`).get(`enabled`, !1),
    g = u ? `auto_reload_add_card` : void 0,
    _ = ve(`3882703512`),
    y = ve(`2992509071`),
    ae = be(`3882703512`),
    b = be(`2992509071`),
    x = ce(ue, `3882703512`),
    S = ce(ue, `2992509071`),
    C = i(),
    [w, oe] = (0, Q.useState)(!1),
    se = (0, Q.useRef)(!1),
    le = (0, Q.useRef)(null),
    de = (0, Q.useRef)(null),
    [fe, pe] = (0, Q.useState)(!1),
    {
      data: T,
      isPending: ge,
      isError: ye,
      error: xe,
      refetch: E,
    } = d({
      queryKey: [`consumer-billing-setup`, r, `add-card`, g],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (!x || !S) throw Error(`Payment configuration unavailable`);
        let n = await p.queryClient.fetchQuery(De(r, m.locale, h)),
          i = _
            ? null
            : await _e.safePost(`/payments/payment_method`, {
                requestBody: { account_id: r, caller_surface: g },
                additionalHeaders: y ? await me(`chatgpt_add_card`) : void 0,
                signal: t,
              });
        if (_ && !n.currency) throw Error(`Payment currency unavailable`);
        if (!_ && !i?.client_secret) throw Error(`Payment setup unavailable`);
        return {
          stripe: n.stripe,
          currency: n.currency,
          setupIntentClientSecret: i?.client_secret,
          tokenFlow: _,
          sentinelEnabled: y,
        };
      },
      enabled: !ae && !b,
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    }),
    {
      data: D,
      isPending: O,
      isError: k,
      error: Se,
      refetch: Ce,
    } = d({ ...De(r, m.locale, h), enabled: T != null, staleTime: 1 / 0 }),
    A;
  t[0] !== T || t[1] !== f || t[2] !== C
    ? ((A = T
        ? Pe({
            presentation: f ? `inline` : void 0,
            themeVariables: typeof document > `u` ? void 0 : Oe(C).variables,
            currency: T.currency,
            isDarkMode: C === !0,
            setupIntentClientSecret: T.setupIntentClientSecret,
            useConfirmationTokenFlow: T.tokenFlow,
          })
        : null),
      (t[0] = T),
      (t[1] = f),
      (t[2] = C),
      (t[3] = A))
    : (A = t[3]);
  let j = A,
    M = v,
    Te = f ? 420 : 540,
    N,
    P;
  t[4] === f
    ? ((N = t[5]), (P = t[6]))
    : ((N = f ? {} : { "aria-describedby": void 0 }),
      (P = f ? { transition: `none` } : void 0),
      (t[4] = f),
      (t[5] = N),
      (t[6] = P));
  let F;
  t[7] === s
    ? (F = t[8])
    : ((F = (e) => {
        (e.preventDefault(), s());
      }),
      (t[7] = s),
      (t[8] = F));
  let I;
  t[9] !== N || t[10] !== P || t[11] !== F
    ? ((I = { ...N, style: P, onCloseAutoFocus: F }), (t[9] = N), (t[10] = P), (t[11] = F), (t[12] = I))
    : (I = t[12]);
  let L = !w,
    R;
  t[13] !== c || t[14] !== w
    ? ((R = (e) => {
        !e && !w && c();
      }),
      (t[13] = c),
      (t[14] = w),
      (t[15] = R))
    : (R = t[15]);
  let ke =
      T == null || D == null || j == null || ye || k
        ? (0, $.jsx)(ie, {
            variant: `chatgpt`,
            children: (0, $.jsx)(Ue, {
              presentation: f ? `inline` : void 0,
              description: f ? (0, $.jsx)(re, { children: (0, $.jsx)(Xe, {}) }) : void 0,
              title: (0, $.jsx)(ne, {
                children: (0, $.jsx)(We, {
                  presentation: f ? `inline` : void 0,
                  children: (0, $.jsx)(Ye, { forAutoReload: u, inlineCreditCheckout: f }),
                }),
              }),
              children: (0, $.jsx)(Ee, {
                kind: `payment`,
                loading: ge || (T != null && O),
                error: xe ?? Se,
                onRetry: () => void (ye ? E() : Ce()),
              }),
            }),
          })
        : (0, $.jsx)(
            $e.Elements,
            {
              stripe: D.stripe,
              options: j,
              children: (0, $.jsx)(Ze, {
                accountId: r,
                requireRedisplayConsent: u,
                inlineCreditCheckout: f,
                tokenFlow: T.tokenFlow,
                sentinelEnabled: T.sentinelEnabled,
                submissionInFlight: se,
                pendingToken: le,
                pendingFinalization: de,
                finalizing: fe,
                onTokenChange: (e) => {
                  ((le.current = e), pe(e != null));
                },
                onFinalizationChange: (e) => {
                  ((de.current = e), pe(e != null));
                },
                submitting: w,
                onSubmittingChange: (e) => {
                  ((se.current = e), oe(e));
                },
                onClose: c,
                onSuccess: l,
              }),
            },
            we(m.locale, `elements`, h),
          ),
    z;
  return (
    t[16] !== M || t[17] !== I || t[18] !== L || t[19] !== R || t[20] !== ke || t[21] !== Te
      ? ((z = (0, $.jsx)(M, {
          open: !0,
          variant: `form`,
          widthHint: Te,
          contentOverflow: `visible`,
          contentPosition: `scrollable`,
          contentProps: I,
          showDialogClose: L,
          onOpenChange: R,
          children: ke,
        })),
        (t[16] = M),
        (t[17] = I),
        (t[18] = L),
        (t[19] = R),
        (t[20] = ke),
        (t[21] = Te),
        (t[22] = z))
      : (z = t[22]),
    z
  );
}
function Ye(e) {
  let t = (0, Qe.c)(3),
    { forAutoReload: n, inlineCreditCheckout: r } = e;
  if (r !== void 0 && r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(a, {
            id: `checkout.inline.addPaymentMethodTitle`,
            defaultMessage: `Add a payment method`,
            description: `Title of the payment method dialog opened from inline credit checkout`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = n
          ? (0, $.jsx)(a, {
              id: `settings.consumerBilling.autoReloadCard.title`,
              defaultMessage: `Save payment method`,
              description: `Title of the payment method dialog opened from auto-reload settings. Saving a card does not enable auto-reload`,
            })
          : (0, $.jsx)(a, {
              id: `settings.consumerBilling.addCard`,
              defaultMessage: `Add payment method`,
              description: `Title of the dialog for saving a card to the personal billing account`,
            })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Xe() {
  let e = (0, Qe.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(a, {
          id: `checkout.inline.addPaymentMethodDescription`,
          defaultMessage: `You won’t be charged when you add a payment method`,
          description: `Adding a payment method does not submit the credit purchase`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ze(e) {
  let r = (0, Qe.c)(114),
    {
      accountId: i,
      requireRedisplayConsent: o,
      inlineCreditCheckout: c,
      tokenFlow: l,
      sentinelEnabled: u,
      submissionInFlight: te,
      pendingToken: d,
      pendingFinalization: f,
      finalizing: p,
      onTokenChange: m,
      onFinalizationChange: h,
      submitting: _,
      onSubmittingChange: v,
      onClose: y,
      onSuccess: b,
    } = e,
    x = ee(n),
    S = (0, $e.useStripe)(),
    C = he(),
    w = (0, $e.useElements)(),
    [oe, se] = (0, Q.useState)(!1),
    [ce, le] = (0, Q.useState)(!1),
    [ue, de] = (0, Q.useState)(!1),
    [fe, pe] = (0, Q.useState)(!1),
    [T, ge] = (0, Q.useState)(null),
    ve = ye(`2160290604`),
    be;
  r[0] === ve ? (be = r[1]) : ((be = ve.get(`saved_payment_methods_enabled`, !1)), (r[0] = ve), (r[1] = be));
  let xe = o || be,
    E;
  r[2] !== i ||
  r[3] !== T ||
  r[4] !== w ||
  r[5] !== c ||
  r[6] !== h ||
  r[7] !== m ||
  r[8] !== f ||
  r[9] !== d ||
  r[10] !== o ||
  r[11] !== u ||
  r[12] !== xe ||
  r[13] !== S ||
  r[14] !== l
    ? ((E = async () => {
        if (!S || !w) throw Error(`Payment form unavailable`);
        let e = {
          return_url: window.location.href,
          payment_method_data: { allow_redisplay: xe || c ? `always` : void 0, billing_details: T ?? void 0 },
        };
        if (l) {
          let t = d.current;
          if (t == null) {
            let n = await w.submit();
            if (n.error) throw new N(n.error.message);
            let r = await S.createConfirmationToken({ elements: w, params: e });
            if (r.error) throw new N(r.error.message);
            ((t = r.confirmationToken.id), m(t));
          }
          let n = {
              account_id: i,
              confirmation_token_id: t,
              caller_surface: o ? `auto_reload_add_card` : void 0,
            },
            r = await _e.safePost(`/payments/payment_method/confirm`, {
              requestBody: n,
              additionalHeaders: u ? await me(`chatgpt_add_card`) : void 0,
            });
          if (r.status === `requires_action`) {
            if (r.client_secret == null) throw Error(`Payment authentication unavailable`);
            let e = await S.handleNextAction({ clientSecret: r.client_secret });
            if (e.error) throw new N(e.error.message);
            if (e.setupIntent?.status !== `succeeded`)
              throw (
                (e.setupIntent?.status === `canceled` ||
                  e.setupIntent?.status === `requires_payment_method`) &&
                  m(null),
                Error(`Payment authentication incomplete`)
              );
            r = await _e.safePost(`/payments/payment_method/confirm`, { requestBody: n });
          }
          if (r.status !== `succeeded`) throw Error(`Payment setup incomplete`);
          if (r.payment_method_id == null) throw Error(`Saved payment method unavailable`);
          return (
            m(null),
            { status: r.finalization_status ?? `added`, canonical_payment_method_id: r.payment_method_id }
          );
        }
        {
          let t = f.current;
          if (t == null) {
            let n = await S.confirmSetup({ elements: w, confirmParams: e, redirect: `if_required` });
            if (n.error) throw new N(n.error.message);
            if (n.setupIntent.status !== `succeeded`) throw Error(`Payment setup incomplete`);
            let r = n.setupIntent.payment_method,
              i = typeof r == `string` ? r : r?.id;
            if (i == null) throw Error(`Saved payment method unavailable`);
            ((t = { methodId: i, setupIntentId: n.setupIntent.id }), h(t));
          }
          let n = await _e.safePost(`/payments/payment_method/{payment_method_id}/finalize`, {
            parameters: { path: { payment_method_id: t.methodId } },
            requestBody: {
              account_id: i,
              setup_intent_id: t.setupIntentId,
              caller_surface: o ? `auto_reload_add_card` : void 0,
            },
          });
          return (h(null), n);
        }
      }),
      (r[2] = i),
      (r[3] = T),
      (r[4] = w),
      (r[5] = c),
      (r[6] = h),
      (r[7] = m),
      (r[8] = f),
      (r[9] = d),
      (r[10] = o),
      (r[11] = u),
      (r[12] = xe),
      (r[13] = S),
      (r[14] = l),
      (r[15] = E))
    : (E = r[15]);
  let D;
  r[16] !== i || r[17] !== y || r[18] !== b || r[19] !== x
    ? ((D = async (e) => {
        (await Se(x, i), b?.(e), y());
      }),
      (r[16] = i),
      (r[17] = y),
      (r[18] = b),
      (r[19] = x),
      (r[20] = D))
    : (D = r[20]);
  let O;
  r[21] === m
    ? (O = r[22])
    : ((O = (e) => {
        (e instanceof N ||
          (e instanceof g &&
            (e.errorCode === `invalid_confirmation_token` ||
              e.errorCode === `confirmation_token_requires_new_token`))) &&
          m(null);
      }),
      (r[21] = m),
      (r[22] = O));
  let k;
  r[23] === v
    ? (k = r[24])
    : ((k = () => {
        v(!1);
      }),
      (r[23] = v),
      (r[24] = k));
  let Ce;
  r[25] !== E || r[26] !== D || r[27] !== O || r[28] !== k
    ? ((Ce = { mutationFn: E, onSuccess: D, onError: O, onSettled: k }),
      (r[25] = E),
      (r[26] = D),
      (r[27] = O),
      (r[28] = k),
      (r[29] = Ce))
    : (Ce = r[29]);
  let { mutate: we, isPending: A, isError: j, error: M, reset: Ee } = s(Ce),
    P = S != null && w != null && (p || (oe && ue && ce && fe)),
    F;
  r[30] !== A || r[31] !== we || r[32] !== v || r[33] !== P || r[34] !== te || r[35] !== _
    ? ((F = (e) => {
        (e.preventDefault(), P && !_ && !A && !te.current && (v(!0), we()));
      }),
      (r[30] = A),
      (r[31] = we),
      (r[32] = v),
      (r[33] = P),
      (r[34] = te),
      (r[35] = _),
      (r[36] = F))
    : (F = r[36]);
  let De = c ? `inline` : void 0,
    Oe;
  r[37] === c
    ? (Oe = r[38])
    : ((Oe = c ? (0, $.jsx)(re, { children: (0, $.jsx)(Xe, {}) }) : void 0), (r[37] = c), (r[38] = Oe));
  let I = c ? `inline` : void 0,
    L;
  r[39] !== c || r[40] !== o
    ? ((L = (0, $.jsx)(Ye, { forAutoReload: o, inlineCreditCheckout: c })),
      (r[39] = c),
      (r[40] = o),
      (r[41] = L))
    : (L = r[41]);
  let R;
  r[42] !== I || r[43] !== L
    ? ((R = (0, $.jsx)(ne, { children: (0, $.jsx)(We, { presentation: I, children: L }) })),
      (r[42] = I),
      (r[43] = L),
      (r[44] = R))
    : (R = r[44]);
  let ke = c ? `inline` : void 0,
    z = _ || A || p,
    B;
  r[45] === C ? (B = r[46]) : ((B = Ge(C)), (r[45] = C), (r[46] = B));
  let V;
  r[47] === c ? (V = r[48]) : ((V = c ? { wallets: { link: `never` } } : {}), (r[47] = c), (r[48] = V));
  let H;
  r[49] !== B || r[50] !== V ? ((H = { ...B, ...V }), (r[49] = B), (r[50] = V), (r[51] = H)) : (H = r[51]);
  let Ae;
  r[52] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ae = () => se(!0)), (r[52] = Ae)) : (Ae = r[52]);
  let U;
  r[53] !== p || r[54] !== j || r[55] !== Ee
    ? ((U = (e) => {
        (j && !p && Ee(), le(e.complete));
      }),
      (r[53] = p),
      (r[54] = j),
      (r[55] = Ee),
      (r[56] = U))
    : (U = r[56]);
  let Me = p || (oe && ue),
    Ne,
    W;
  r[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, $.jsx)(a, {
        id: `settings.consumerBilling.addCardBillingAddress`,
        defaultMessage: `Billing address`,
        description: `Heading above the new payment method's billing-address fields`,
      })),
      (W = () => de(!0)),
      (r[57] = Ne),
      (r[58] = W))
    : ((Ne = r[57]), (W = r[58]));
  let G;
  r[59] !== p || r[60] !== j || r[61] !== Ee
    ? ((G = (e) => {
        (j && !p && Ee(), ge(e.value), pe(e.complete));
      }),
      (r[59] = p),
      (r[60] = j),
      (r[61] = Ee),
      (r[62] = G))
    : (G = r[62]);
  let Pe;
  r[63] !== M || r[64] !== j
    ? ((Pe = j
        ? (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-warning`,
            children: M instanceof N && M.message ? M.message : (0, $.jsx)(a, { ...Te(M) }),
          })
        : null),
      (r[63] = M),
      (r[64] = j),
      (r[65] = Pe))
    : (Pe = r[65]);
  let K;
  r[66] === c
    ? (K = r[67])
    : ((K =
        c &&
        (0, $.jsx)(a, {
          id: `checkout.inline.addPaymentMethodConsent`,
          defaultMessage: `By selecting Save, you authorize OpenAI to store this payment method in your ChatGPT account and show it as an option for future purchases in ChatGPT.`,
          description: `Consent to store and show a payment method for future purchases. Saving does not submit the credit purchase.`,
        })),
      (r[66] = c),
      (r[67] = K));
  let Fe;
  r[68] !== c || r[69] !== o
    ? ((Fe =
        !c &&
        o &&
        (0, $.jsx)(a, {
          id: `settings.consumerBilling.autoReloadCard.disclosure`,
          defaultMessage: `By saving, you authorize OpenAI to save this payment method for future credit purchases and charge it for auto-reload if you turn auto-reload on. Saving alone will not turn it on`,
          description: `Payment authorization disclosure for end users above the Save payment method button in the dialog opened from auto-reload settings. Use a clear, neutral tone in a plain-text body that may wrap across multiple lines; no Markdown, HTML, or placeholders. Explain that clicking Save permits OpenAI to save and reuse the card for credit purchases, while auto-reload charges require the user to enable auto-reload separately. Saving the card alone does not enable auto-reload.`,
        })),
      (r[68] = c),
      (r[69] = o),
      (r[70] = Fe))
    : (Fe = r[70]);
  let Ie;
  r[71] !== c || r[72] !== o
    ? ((Ie =
        !c &&
        !o &&
        (0, $.jsx)(a, {
          id: `settings.consumerBilling.addPaymentMethodDisclosure`,
          defaultMessage: `By continuing, you authorize OpenAI to save this payment method and charge it for future payments.`,
          description: `Consent disclosure displayed before a consumer saves a payment method for future billing`,
        })),
      (r[71] = c),
      (r[72] = o),
      (r[73] = Ie))
    : (Ie = r[73]);
  let Le;
  r[74] !== K || r[75] !== Fe || r[76] !== Ie
    ? ((Le = (0, $.jsxs)(`span`, { className: `text-secondary`, children: [K, Fe, Ie] })),
      (r[74] = K),
      (r[75] = Fe),
      (r[76] = Ie),
      (r[77] = Le))
    : (Le = r[77]);
  let Re = !c,
    ze = _ || A,
    Be = !P || _ || A,
    Ve;
  r[78] === c
    ? (Ve = r[79])
    : ((Ve =
        c &&
        (0, $.jsx)(a, {
          id: `checkout.inline.savePaymentMethod`,
          defaultMessage: `Save`,
          description: `Save the card and return to review without purchasing credits`,
        })),
      (r[78] = c),
      (r[79] = Ve));
  let q;
  r[80] !== c || r[81] !== o
    ? ((q =
        !c &&
        o &&
        (0, $.jsx)(a, {
          id: `settings.consumerBilling.autoReloadCard.save`,
          defaultMessage: `Save payment method`,
          description: `Button authorizing saving a payment method for future credit purchases from auto-reload settings without enabling auto-reload`,
        })),
      (r[80] = c),
      (r[81] = o),
      (r[82] = q))
    : (q = r[82]);
  let He;
  r[83] !== c || r[84] !== o
    ? ((He =
        !c &&
        !o &&
        (0, $.jsx)(a, {
          id: `settings.consumerBilling.continueAddPaymentMethod`,
          defaultMessage: `Continue`,
          description: `Button authorizing saving a new payment method after the billing disclosure`,
        })),
      (r[83] = c),
      (r[84] = o),
      (r[85] = He))
    : (He = r[85]);
  let J;
  r[86] !== ze || r[87] !== Be || r[88] !== Ve || r[89] !== q || r[90] !== He
    ? ((J = (0, $.jsxs)(t, {
        type: `submit`,
        color: `primary`,
        radius: `full`,
        size: `beaconAction`,
        loading: ze,
        disabled: Be,
        children: [Ve, q, He],
      })),
      (r[86] = ze),
      (r[87] = Be),
      (r[88] = Ve),
      (r[89] = q),
      (r[90] = He),
      (r[91] = J))
    : (J = r[91]);
  let Y;
  r[92] !== Re || r[93] !== J
    ? ((Y = (0, $.jsx)(ae, { expandSingleButton: Re, children: J })), (r[92] = Re), (r[93] = J), (r[94] = Y))
    : (Y = r[94]);
  let X;
  r[95] !== ue ||
  r[96] !== ke ||
  r[97] !== z ||
  r[98] !== H ||
  r[99] !== U ||
  r[100] !== Me ||
  r[101] !== G ||
  r[102] !== Pe ||
  r[103] !== Le ||
  r[104] !== Y
    ? ((X = (0, $.jsx)(je, {
        presentation: ke,
        isInteractionBlocked: z,
        paymentElementOptions: H,
        onPaymentReady: Ae,
        onPaymentChange: U,
        isAddressReady: ue,
        areFieldsReady: Me,
        billingAddressTitle: Ne,
        onAddressReady: W,
        onAddressChange: G,
        error: Pe,
        disclosure: Le,
        action: Y,
      })),
      (r[95] = ue),
      (r[96] = ke),
      (r[97] = z),
      (r[98] = H),
      (r[99] = U),
      (r[100] = Me),
      (r[101] = G),
      (r[102] = Pe),
      (r[103] = Le),
      (r[104] = Y),
      (r[105] = X))
    : (X = r[105]);
  let Z;
  r[106] !== Oe || r[107] !== R || r[108] !== X || r[109] !== De
    ? ((Z = (0, $.jsx)(Ue, { presentation: De, description: Oe, title: R, children: X })),
      (r[106] = Oe),
      (r[107] = R),
      (r[108] = X),
      (r[109] = De),
      (r[110] = Z))
    : (Z = r[110]);
  let Ke;
  return (
    r[111] !== Z || r[112] !== F
      ? ((Ke = (0, $.jsx)(ie, { as: `form`, variant: `chatgpt`, onSubmit: F, children: Z })),
        (r[111] = Z),
        (r[112] = F),
        (r[113] = Ke))
      : (Ke = r[113]),
    Ke
  );
}
var Qe, $e, Q, $;
function et() {
  return (et = e(() => {
    ((Qe = C()),
      G(),
      K(),
      X(),
      Ce(),
      ($e = A()),
      o(),
      f(),
      c(),
      (Q = se()),
      _(),
      de(),
      b(),
      x(),
      m(),
      w(),
      T(),
      fe(),
      xe(),
      l(),
      S(),
      k(),
      P(),
      F(),
      M(),
      Ke(),
      ($ = oe()));
  }))();
}
export { Ue as a, Ke as i, et as n, We as o, Ge as r, X as s, qe as t };
//# sourceMappingURL=add-method-d517281a01bd.js.map
