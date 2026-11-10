import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  FBt as i,
  HFt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as d,
  MNt as f,
  Mst as p,
  NNt as m,
  PBt as h,
  Pit as g,
  Qst as ee,
  WO as _,
  XOt as v,
  Y3 as y,
  Z3 as b,
  ZSt as x,
  ezt as S,
  jit as te,
  jst as C,
  kB as w,
  kLt as T,
  nCt as E,
  okt as D,
  qO as ne,
  tkt as O,
  vst as re,
  yst as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as ae,
  Djr as oe,
  Ejr as se,
  cMt as ce,
  dBr as le,
  hJ as ue,
  iNt as de,
  iRr as fe,
  lBr as k,
  oMt as pe,
  oNt as me,
  pJ as he,
  sRr as ge,
  wjr as _e,
  xjr as A,
} from "./app-initial-ad16eaadf81f.js";
import { cs as j, us as M } from "./app-primary-3e00728c2a4c.js";
import { n as N, r as ve } from "./queries-95931bb8c995.js";
import { a as ye, i as be } from "./pure-b84c4c3484c4.js";
import { a as P, t as F } from "./stripe-elements-appearance-809d15977833.js";
import { n as I, t as xe } from "./secure-form-status-1e957f282453.js";
import { n as L, r as R, t as Se } from "./stripe-client-4f7192c20a27.js";
import { i as z, r as Ce, t as B } from "./error-3f572e7606fb.js";
var V, H, U, we, W, Te, Ee, G;
function De() {
  return (De = e(() => {
    ((V = `_action_h15cp_1`),
      (H = `_form_h15cp_6`),
      (U = `_fields_h15cp_7`),
      (we = `_address_h15cp_18`),
      (W = `_addressTitle_h15cp_28`),
      (Te = `_disclosure_h15cp_35`),
      (Ee = `_inline_h15cp_41`),
      (G = { action: V, form: H, fields: U, address: we, addressTitle: W, disclosure: Te, inline: Ee }));
  }))();
}
function Oe(e) {
  let t = (0, ke.c)(34),
    {
      presentation: n,
      isInteractionBlocked: r,
      paymentElementOptions: i,
      onPaymentReady: a,
      onPaymentChange: o,
      isAddressReady: s,
      areFieldsReady: c,
      billingAddressTitle: l,
      billingCountry: u,
      onAddressReady: d,
      onAddressChange: p,
      error: m,
      disclosure: h,
      action: g,
    } = e,
    [ee, _] = (0, je.useState)(n !== `inline`),
    v = n === `inline` && G.inline,
    y;
  t[0] === v ? (y = t[1]) : ((y = f(G.form, v)), (t[0] = v), (t[1] = y));
  let b;
  t[2] === o
    ? (b = t[3])
    : ((b = (e) => {
        (e.complete && _(!0), o(e));
      }),
      (t[2] = o),
      (t[3] = b));
  let x;
  t[4] !== a || t[5] !== i || t[6] !== b
    ? ((x = (0, K.jsx)(Ae.PaymentElement, { options: i, onReady: a, onChange: b })),
      (t[4] = a),
      (t[5] = i),
      (t[6] = b),
      (t[7] = x))
    : (x = t[7]);
  let S = !ee,
    te;
  t[8] !== l || t[9] !== s
    ? ((te = s ? (0, K.jsx)(`p`, { className: G.addressTitle, children: l }) : null),
      (t[8] = l),
      (t[9] = s),
      (t[10] = te))
    : (te = t[10]);
  let C;
  t[11] === u
    ? (C = t[12])
    : ((C = {
        mode: `billing`,
        allowedCountries: u ? [u] : [...pe],
        ...(u ? { defaultValues: { address: { country: u } } } : {}),
      }),
      (t[11] = u),
      (t[12] = C));
  let w;
  t[13] !== p || t[14] !== d || t[15] !== C
    ? ((w = (0, K.jsx)(Ae.AddressElement, { options: C, onReady: d, onChange: p })),
      (t[13] = p),
      (t[14] = d),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== S || t[18] !== te || t[19] !== w
    ? ((T = (0, K.jsxs)(`div`, { className: G.address, hidden: S, children: [te, w] })),
      (t[17] = S),
      (t[18] = te),
      (t[19] = w),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== r || t[22] !== x || t[23] !== T
    ? ((E = (0, K.jsxs)(`div`, {
        className: G.fields,
        "data-testid": `stripe-elements-interaction-container`,
        inert: r,
        children: [x, T],
      })),
      (t[21] = r),
      (t[22] = x),
      (t[23] = T),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] !== g || t[26] !== c || t[27] !== h
    ? ((D = c
        ? (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(`p`, { className: G.disclosure, children: h }),
              (0, K.jsx)(`div`, { className: G.action, children: g }),
            ],
          })
        : null),
      (t[25] = g),
      (t[26] = c),
      (t[27] = h),
      (t[28] = D))
    : (D = t[28]);
  let ne;
  return (
    t[29] !== m || t[30] !== E || t[31] !== D || t[32] !== y
      ? ((ne = (0, K.jsxs)(`div`, { className: y, children: [E, m, D] })),
        (t[29] = m),
        (t[30] = E),
        (t[31] = D),
        (t[32] = y),
        (t[33] = ne))
      : (ne = t[33]),
    ne
  );
}
var ke, Ae, je, K;
function Me() {
  return (Me = e(() => {
    ((ke = h()), (Ae = P()), m(), (je = i()), ce(), De(), (K = u()));
  }))();
}
function Ne({
  themeVariables: e,
  presentation: t,
  currency: n,
  isDarkMode: r,
  setupIntentClientSecret: i,
  useConfirmationTokenFlow: a,
}) {
  let o = F(r, e, t);
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
function Pe() {
  return (Pe = e(() => {}))();
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
    s = i === `inline` && q.inline,
    c;
  t[0] === s ? (c = t[1]) : ((c = f(q.layout, s)), (t[0] = s), (t[1] = c));
  let l;
  t[2] !== r || t[3] !== n
    ? ((l =
        r == null
          ? n
          : (0, Y.jsxs)(`div`, {
              className: q.heading,
              children: [n, (0, Y.jsx)(`div`, { className: q.description, children: r })],
            })),
      (t[2] = r),
      (t[3] = n),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== a || t[6] !== l
    ? ((u = (0, Y.jsxs)(`div`, { className: q.header, children: [l, a] })),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== c || t[10] !== u
      ? ((d = (0, Y.jsxs)(`div`, { className: c, children: [u, o] })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function We(e) {
  let t = (0, J.c)(5),
    { children: n, presentation: r } = e,
    i = r === `inline` && q.inlineTitle,
    a;
  t[0] === i ? (a = t[1]) : ((a = f(q.title, i)), (t[0] = i), (t[1] = a));
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
    ((J = h()), m(), He(), (Y = u()));
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
  return j(
    {
      ...(t?.isPaypalPromoCheckout ? me : {}),
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
    (de(), M(), a(), (Z = T(S()).transform((e) => e.filter((e) => typeof e == `string`))));
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
  let n = (0, Qe.c)(23),
    {
      accountId: i,
      requireRedisplayConsent: a,
      inlineCreditCheckout: o,
      onCloseAutoFocus: c,
      onClose: u,
      onSuccess: d,
    } = e,
    f = a !== void 0 && a,
    m = o !== void 0 && o,
    h = t(ee),
    g = D(),
    v = se().getExperiment(`4048417348`).get(`enabled`, !1),
    y = f ? `auto_reload_add_card` : void 0,
    b = ae(`3882703512`),
    x = ae(`2992509071`),
    S = _e(`3882703512`),
    te = _e(`2992509071`),
    C = E(le, `3882703512`),
    w = E(le, `2992509071`),
    T = r(),
    [O, re] = (0, Q.useState)(!1),
    ie = (0, Q.useRef)(!1),
    oe = (0, Q.useRef)(null),
    ce = (0, Q.useRef)(null),
    [ue, de] = (0, Q.useState)(!1),
    {
      data: k,
      isPending: pe,
      isError: me,
      error: ge,
      refetch: A,
    } = p({
      queryKey: [`consumer-billing-setup`, i, `add-card`, y],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (!C || !w) throw Error(`Payment configuration unavailable`);
        let n = await h.queryClient.fetchQuery(R(i, g.locale, v)),
          r = b
            ? null
            : await fe.safePost(`/payments/payment_method`, {
                requestBody: { account_id: i, caller_surface: y },
                additionalHeaders: x ? await he(`chatgpt_add_card`) : void 0,
                signal: t,
              });
        if (b && !n.currency) throw Error(`Payment currency unavailable`);
        if (!b && !r?.client_secret) throw Error(`Payment setup unavailable`);
        return {
          stripe: n.stripe,
          currency: n.currency,
          setupIntentClientSecret: r?.client_secret,
          tokenFlow: b,
          sentinelEnabled: x,
        };
      },
      enabled: !S && !te,
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
    }),
    {
      data: j,
      isPending: M,
      isError: N,
      error: ve,
      refetch: ye,
    } = p({ ...R(i, g.locale, v), enabled: k != null, staleTime: 1 / 0 }),
    P;
  n[0] !== k || n[1] !== m || n[2] !== T
    ? ((P = k
        ? Ne({
            presentation: m ? `inline` : void 0,
            themeVariables: typeof document > `u` ? void 0 : Se(T).variables,
            currency: k.currency,
            isDarkMode: T === !0,
            setupIntentClientSecret: k.setupIntentClientSecret,
            useConfirmationTokenFlow: k.tokenFlow,
          })
        : null),
      (n[0] = k),
      (n[1] = m),
      (n[2] = T),
      (n[3] = P))
    : (P = n[3]);
  let F = P,
    I = _,
    L = m ? 420 : 540,
    z,
    Ce;
  n[4] === m
    ? ((z = n[5]), (Ce = n[6]))
    : ((z = m ? {} : { "aria-describedby": void 0 }),
      (Ce = m ? { transition: `none` } : void 0),
      (n[4] = m),
      (n[5] = z),
      (n[6] = Ce));
  let B;
  n[7] === c
    ? (B = n[8])
    : ((B = (e) => {
        (e.preventDefault(), c());
      }),
      (n[7] = c),
      (n[8] = B));
  let V;
  n[9] !== z || n[10] !== Ce || n[11] !== B
    ? ((V = { ...z, style: Ce, onCloseAutoFocus: B }), (n[9] = z), (n[10] = Ce), (n[11] = B), (n[12] = V))
    : (V = n[12]);
  let H = !O,
    U;
  n[13] !== u || n[14] !== O
    ? ((U = (e) => {
        !e && !O && u();
      }),
      (n[13] = u),
      (n[14] = O),
      (n[15] = U))
    : (U = n[15]);
  let we =
      k == null || j == null || F == null || me || N
        ? (0, $.jsx)(s, {
            variant: `chatgpt`,
            children: (0, $.jsx)(Ue, {
              presentation: m ? `inline` : void 0,
              description: m ? (0, $.jsx)(l, { children: (0, $.jsx)(Xe, {}) }) : void 0,
              title: (0, $.jsx)(ne, {
                children: (0, $.jsx)(We, {
                  presentation: m ? `inline` : void 0,
                  children: (0, $.jsx)(Ye, { forAutoReload: f, inlineCreditCheckout: m }),
                }),
              }),
              children: (0, $.jsx)(xe, {
                kind: `payment`,
                loading: pe || (k != null && M),
                error: ge ?? ve,
                onRetry: () => void (me ? A() : ye()),
              }),
            }),
          })
        : (0, $.jsx)(
            $e.Elements,
            {
              stripe: j.stripe,
              options: F,
              children: (0, $.jsx)(Ze, {
                accountId: i,
                requireRedisplayConsent: f,
                inlineCreditCheckout: m,
                tokenFlow: k.tokenFlow,
                sentinelEnabled: k.sentinelEnabled,
                submissionInFlight: ie,
                pendingToken: oe,
                pendingFinalization: ce,
                finalizing: ue,
                onTokenChange: (e) => {
                  ((oe.current = e), de(e != null));
                },
                onFinalizationChange: (e) => {
                  ((ce.current = e), de(e != null));
                },
                submitting: O,
                onSubmittingChange: (e) => {
                  ((ie.current = e), re(e));
                },
                onClose: u,
                onSuccess: d,
              }),
            },
            be(g.locale, `elements`, v),
          ),
    W;
  return (
    n[16] !== I || n[17] !== V || n[18] !== H || n[19] !== U || n[20] !== we || n[21] !== L
      ? ((W = (0, $.jsx)(I, {
          open: !0,
          variant: `form`,
          widthHint: L,
          contentOverflow: `visible`,
          contentPosition: `scrollable`,
          contentProps: V,
          showDialogClose: H,
          onOpenChange: U,
          children: we,
        })),
        (n[16] = I),
        (n[17] = V),
        (n[18] = H),
        (n[19] = U),
        (n[20] = we),
        (n[21] = L),
        (n[22] = W))
      : (W = n[22]),
    W
  );
}
function Ye(e) {
  let t = (0, Qe.c)(3),
    { forAutoReload: n, inlineCreditCheckout: r } = e;
  if (r !== void 0 && r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(O, {
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
          ? (0, $.jsx)(O, {
              id: `settings.consumerBilling.autoReloadCard.title`,
              defaultMessage: `Save payment method`,
              description: `Title of the payment method dialog opened from auto-reload settings. Saving a card does not enable auto-reload`,
            })
          : (0, $.jsx)(O, {
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
      ? ((t = (0, $.jsx)(O, {
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
  let n = (0, Qe.c)(114),
    {
      accountId: r,
      requireRedisplayConsent: i,
      inlineCreditCheckout: a,
      tokenFlow: o,
      sentinelEnabled: c,
      submissionInFlight: u,
      pendingToken: f,
      pendingFinalization: p,
      finalizing: m,
      onTokenChange: h,
      onFinalizationChange: g,
      submitting: _,
      onSubmittingChange: v,
      onClose: b,
      onSuccess: x,
    } = e,
    S = t(ee),
    C = (0, $e.useStripe)(),
    w = se(),
    T = (0, $e.useElements)(),
    [E, D] = (0, Q.useState)(!1),
    [re, ae] = (0, Q.useState)(!1),
    [ce, le] = (0, Q.useState)(!1),
    [ue, de] = (0, Q.useState)(!1),
    [k, pe] = (0, Q.useState)(null),
    me = oe(`2160290604`),
    ge;
  n[0] === me ? (ge = n[1]) : ((ge = me.get(`saved_payment_methods_enabled`, !1)), (n[0] = me), (n[1] = ge));
  let _e = i || ge,
    A;
  n[2] !== r ||
  n[3] !== k ||
  n[4] !== T ||
  n[5] !== a ||
  n[6] !== g ||
  n[7] !== h ||
  n[8] !== p ||
  n[9] !== f ||
  n[10] !== i ||
  n[11] !== c ||
  n[12] !== _e ||
  n[13] !== C ||
  n[14] !== o
    ? ((A = async () => {
        if (!C || !T) throw Error(`Payment form unavailable`);
        let e = {
          return_url: window.location.href,
          payment_method_data: { allow_redisplay: _e || a ? `always` : void 0, billing_details: k ?? void 0 },
        };
        if (o) {
          let t = f.current;
          if (t == null) {
            let n = await T.submit();
            if (n.error) throw new B(n.error.message);
            let r = await C.createConfirmationToken({ elements: T, params: e });
            if (r.error) throw new B(r.error.message);
            ((t = r.confirmationToken.id), h(t));
          }
          let n = {
              account_id: r,
              confirmation_token_id: t,
              caller_surface: i ? `auto_reload_add_card` : void 0,
            },
            a = await fe.safePost(`/payments/payment_method/confirm`, {
              requestBody: n,
              additionalHeaders: c ? await he(`chatgpt_add_card`) : void 0,
            });
          if (a.status === `requires_action`) {
            if (a.client_secret == null) throw Error(`Payment authentication unavailable`);
            let e = await C.handleNextAction({ clientSecret: a.client_secret });
            if (e.error) throw new B(e.error.message);
            if (e.setupIntent?.status !== `succeeded`)
              throw (
                (e.setupIntent?.status === `canceled` ||
                  e.setupIntent?.status === `requires_payment_method`) &&
                  h(null),
                Error(`Payment authentication incomplete`)
              );
            a = await fe.safePost(`/payments/payment_method/confirm`, { requestBody: n });
          }
          if (a.status !== `succeeded`) throw Error(`Payment setup incomplete`);
          if (a.payment_method_id == null) throw Error(`Saved payment method unavailable`);
          return (
            h(null),
            { status: a.finalization_status ?? `added`, canonical_payment_method_id: a.payment_method_id }
          );
        }
        {
          let t = p.current;
          if (t == null) {
            let n = await C.confirmSetup({ elements: T, confirmParams: e, redirect: `if_required` });
            if (n.error) throw new B(n.error.message);
            if (n.setupIntent.status !== `succeeded`) throw Error(`Payment setup incomplete`);
            let r = n.setupIntent.payment_method,
              i = typeof r == `string` ? r : r?.id;
            if (i == null) throw Error(`Saved payment method unavailable`);
            ((t = { methodId: i, setupIntentId: n.setupIntent.id }), g(t));
          }
          let n = await fe.safePost(`/payments/payment_method/{payment_method_id}/finalize`, {
            parameters: { path: { payment_method_id: t.methodId } },
            requestBody: {
              account_id: r,
              setup_intent_id: t.setupIntentId,
              caller_surface: i ? `auto_reload_add_card` : void 0,
            },
          });
          return (g(null), n);
        }
      }),
      (n[2] = r),
      (n[3] = k),
      (n[4] = T),
      (n[5] = a),
      (n[6] = g),
      (n[7] = h),
      (n[8] = p),
      (n[9] = f),
      (n[10] = i),
      (n[11] = c),
      (n[12] = _e),
      (n[13] = C),
      (n[14] = o),
      (n[15] = A))
    : (A = n[15]);
  let j;
  n[16] !== r || n[17] !== b || n[18] !== x || n[19] !== S
    ? ((j = async (e) => {
        (await ve(S, r), x?.(e), b());
      }),
      (n[16] = r),
      (n[17] = b),
      (n[18] = x),
      (n[19] = S),
      (n[20] = j))
    : (j = n[20]);
  let M;
  n[21] === h
    ? (M = n[22])
    : ((M = (e) => {
        (e instanceof B ||
          (e instanceof te &&
            (e.errorCode === `invalid_confirmation_token` ||
              e.errorCode === `confirmation_token_requires_new_token`))) &&
          h(null);
      }),
      (n[21] = h),
      (n[22] = M));
  let N;
  n[23] === v
    ? (N = n[24])
    : ((N = () => {
        v(!1);
      }),
      (n[23] = v),
      (n[24] = N));
  let ye;
  n[25] !== A || n[26] !== j || n[27] !== M || n[28] !== N
    ? ((ye = { mutationFn: A, onSuccess: j, onError: M, onSettled: N }),
      (n[25] = A),
      (n[26] = j),
      (n[27] = M),
      (n[28] = N),
      (n[29] = ye))
    : (ye = n[29]);
  let { mutate: be, isPending: P, isError: F, error: I, reset: xe } = ie(ye),
    L = C != null && T != null && (m || (E && ce && re && ue)),
    R;
  n[30] !== P || n[31] !== be || n[32] !== v || n[33] !== L || n[34] !== u || n[35] !== _
    ? ((R = (e) => {
        (e.preventDefault(), L && !_ && !P && !u.current && (v(!0), be()));
      }),
      (n[30] = P),
      (n[31] = be),
      (n[32] = v),
      (n[33] = L),
      (n[34] = u),
      (n[35] = _),
      (n[36] = R))
    : (R = n[36]);
  let Se = a ? `inline` : void 0,
    z;
  n[37] === a
    ? (z = n[38])
    : ((z = a ? (0, $.jsx)(l, { children: (0, $.jsx)(Xe, {}) }) : void 0), (n[37] = a), (n[38] = z));
  let V = a ? `inline` : void 0,
    H;
  n[39] !== a || n[40] !== i
    ? ((H = (0, $.jsx)(Ye, { forAutoReload: i, inlineCreditCheckout: a })),
      (n[39] = a),
      (n[40] = i),
      (n[41] = H))
    : (H = n[41]);
  let U;
  n[42] !== V || n[43] !== H
    ? ((U = (0, $.jsx)(ne, { children: (0, $.jsx)(We, { presentation: V, children: H }) })),
      (n[42] = V),
      (n[43] = H),
      (n[44] = U))
    : (U = n[44]);
  let we = a ? `inline` : void 0,
    W = _ || P || m,
    Te;
  n[45] === w ? (Te = n[46]) : ((Te = Ge(w)), (n[45] = w), (n[46] = Te));
  let Ee;
  n[47] === a ? (Ee = n[48]) : ((Ee = a ? { wallets: { link: `never` } } : {}), (n[47] = a), (n[48] = Ee));
  let G;
  n[49] !== Te || n[50] !== Ee
    ? ((G = { ...Te, ...Ee }), (n[49] = Te), (n[50] = Ee), (n[51] = G))
    : (G = n[51]);
  let De;
  n[52] === Symbol.for(`react.memo_cache_sentinel`) ? ((De = () => D(!0)), (n[52] = De)) : (De = n[52]);
  let ke;
  n[53] !== m || n[54] !== F || n[55] !== xe
    ? ((ke = (e) => {
        (F && !m && xe(), ae(e.complete));
      }),
      (n[53] = m),
      (n[54] = F),
      (n[55] = xe),
      (n[56] = ke))
    : (ke = n[56]);
  let Ae = m || (E && ce),
    je,
    K;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(O, {
        id: `settings.consumerBilling.addCardBillingAddress`,
        defaultMessage: `Billing address`,
        description: `Heading above the new payment method's billing-address fields`,
      })),
      (K = () => le(!0)),
      (n[57] = je),
      (n[58] = K))
    : ((je = n[57]), (K = n[58]));
  let Me;
  n[59] !== m || n[60] !== F || n[61] !== xe
    ? ((Me = (e) => {
        (F && !m && xe(), pe(e.value), de(e.complete));
      }),
      (n[59] = m),
      (n[60] = F),
      (n[61] = xe),
      (n[62] = Me))
    : (Me = n[62]);
  let Ne;
  n[63] !== I || n[64] !== F
    ? ((Ne = F
        ? (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-warning`,
            children: I instanceof B && I.message ? I.message : (0, $.jsx)(O, { ...Ce(I) }),
          })
        : null),
      (n[63] = I),
      (n[64] = F),
      (n[65] = Ne))
    : (Ne = n[65]);
  let Pe;
  n[66] === a
    ? (Pe = n[67])
    : ((Pe =
        a &&
        (0, $.jsx)(O, {
          id: `checkout.inline.addPaymentMethodCreditConsent`,
          defaultMessage: `By selecting Save, you authorize OpenAI to store this payment method in your ChatGPT account and use it as your default payment method for credit purchases. You won’t be charged yet.`,
          description: `Inline-only consent: Save stores the new payment method and makes it the default for credit purchases before returning to review. It does not submit a credit purchase, change the subscription billing default, or enable auto-reload. Use a new message key so an older generic-storage translation cannot grant the new credit consent.`,
        })),
      (n[66] = a),
      (n[67] = Pe));
  let Fe;
  n[68] !== a || n[69] !== i
    ? ((Fe =
        !a &&
        i &&
        (0, $.jsx)(O, {
          id: `settings.consumerBilling.autoReloadCard.disclosure`,
          defaultMessage: `By saving, you authorize OpenAI to save this payment method for future credit purchases and charge it for auto-reload if you turn auto-reload on. Saving alone will not turn it on`,
          description: `Payment authorization disclosure for end users above the Save payment method button in the dialog opened from auto-reload settings. Use a clear, neutral tone in a plain-text body that may wrap across multiple lines; no Markdown, HTML, or placeholders. Explain that clicking Save permits OpenAI to save and reuse the card for credit purchases, while auto-reload charges require the user to enable auto-reload separately. Saving the card alone does not enable auto-reload.`,
        })),
      (n[68] = a),
      (n[69] = i),
      (n[70] = Fe))
    : (Fe = n[70]);
  let Ie;
  n[71] !== a || n[72] !== i
    ? ((Ie =
        !a &&
        !i &&
        (0, $.jsx)(O, {
          id: `settings.consumerBilling.addPaymentMethodDisclosure`,
          defaultMessage: `By continuing, you authorize OpenAI to save this payment method and charge it for future payments.`,
          description: `Consent disclosure displayed before a consumer saves a payment method for future billing`,
        })),
      (n[71] = a),
      (n[72] = i),
      (n[73] = Ie))
    : (Ie = n[73]);
  let Le;
  n[74] !== Pe || n[75] !== Fe || n[76] !== Ie
    ? ((Le = (0, $.jsxs)(`span`, { className: `text-secondary`, children: [Pe, Fe, Ie] })),
      (n[74] = Pe),
      (n[75] = Fe),
      (n[76] = Ie),
      (n[77] = Le))
    : (Le = n[77]);
  let Re = !a,
    ze = _ || P,
    Be = !L || _ || P,
    Ve;
  n[78] === a
    ? (Ve = n[79])
    : ((Ve =
        a &&
        (0, $.jsx)(O, {
          id: `checkout.inline.savePaymentMethod`,
          defaultMessage: `Save`,
          description: `Save the card and return to review without purchasing credits`,
        })),
      (n[78] = a),
      (n[79] = Ve));
  let q;
  n[80] !== a || n[81] !== i
    ? ((q =
        !a &&
        i &&
        (0, $.jsx)(O, {
          id: `settings.consumerBilling.autoReloadCard.save`,
          defaultMessage: `Save payment method`,
          description: `Button authorizing saving a payment method for future credit purchases from auto-reload settings without enabling auto-reload`,
        })),
      (n[80] = a),
      (n[81] = i),
      (n[82] = q))
    : (q = n[82]);
  let He;
  n[83] !== a || n[84] !== i
    ? ((He =
        !a &&
        !i &&
        (0, $.jsx)(O, {
          id: `settings.consumerBilling.continueAddPaymentMethod`,
          defaultMessage: `Continue`,
          description: `Button authorizing saving a new payment method after the billing disclosure`,
        })),
      (n[83] = a),
      (n[84] = i),
      (n[85] = He))
    : (He = n[85]);
  let J;
  n[86] !== ze || n[87] !== Be || n[88] !== Ve || n[89] !== q || n[90] !== He
    ? ((J = (0, $.jsxs)(y, {
        type: `submit`,
        color: `primary`,
        radius: `full`,
        size: `beaconAction`,
        loading: ze,
        disabled: Be,
        children: [Ve, q, He],
      })),
      (n[86] = ze),
      (n[87] = Be),
      (n[88] = Ve),
      (n[89] = q),
      (n[90] = He),
      (n[91] = J))
    : (J = n[91]);
  let Y;
  n[92] !== Re || n[93] !== J
    ? ((Y = (0, $.jsx)(d, { expandSingleButton: Re, children: J })), (n[92] = Re), (n[93] = J), (n[94] = Y))
    : (Y = n[94]);
  let X;
  n[95] !== ce ||
  n[96] !== we ||
  n[97] !== W ||
  n[98] !== G ||
  n[99] !== ke ||
  n[100] !== Ae ||
  n[101] !== Me ||
  n[102] !== Ne ||
  n[103] !== Le ||
  n[104] !== Y
    ? ((X = (0, $.jsx)(Oe, {
        presentation: we,
        isInteractionBlocked: W,
        paymentElementOptions: G,
        onPaymentReady: De,
        onPaymentChange: ke,
        isAddressReady: ce,
        areFieldsReady: Ae,
        billingAddressTitle: je,
        onAddressReady: K,
        onAddressChange: Me,
        error: Ne,
        disclosure: Le,
        action: Y,
      })),
      (n[95] = ce),
      (n[96] = we),
      (n[97] = W),
      (n[98] = G),
      (n[99] = ke),
      (n[100] = Ae),
      (n[101] = Me),
      (n[102] = Ne),
      (n[103] = Le),
      (n[104] = Y),
      (n[105] = X))
    : (X = n[105]);
  let Z;
  n[106] !== z || n[107] !== U || n[108] !== X || n[109] !== Se
    ? ((Z = (0, $.jsx)(Ue, { presentation: Se, description: z, title: U, children: X })),
      (n[106] = z),
      (n[107] = U),
      (n[108] = X),
      (n[109] = Se),
      (n[110] = Z))
    : (Z = n[110]);
  let Ke;
  return (
    n[111] !== Z || n[112] !== R
      ? ((Ke = (0, $.jsx)(s, { as: `form`, variant: `chatgpt`, onSubmit: R, children: Z })),
        (n[111] = Z),
        (n[112] = R),
        (n[113] = Ke))
      : (Ke = n[113]),
    Ke
  );
}
var Qe, $e, Q, $;
function et() {
  return (et = e(() => {
    ((Qe = h()),
      Me(),
      Pe(),
      X(),
      ye(),
      ($e = P()),
      re(),
      C(),
      x(),
      (Q = i()),
      v(),
      ue(),
      b(),
      c(),
      o(),
      n(),
      A(),
      k(),
      ge(),
      w(),
      g(),
      N(),
      I(),
      L(),
      z(),
      Ke(),
      ($ = u()));
  }))();
}
export { Ue as a, Ke as i, et as n, We as o, Ge as r, X as s, qe as t };
//# sourceMappingURL=add-method-59f4fd8d9a22.js.map
