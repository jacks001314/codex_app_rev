import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  BO as i,
  FBt as a,
  HO as o,
  LNt as s,
  MNt as c,
  Mst as l,
  NNt as u,
  NSt as d,
  PBt as f,
  Pit as p,
  Qst as m,
  SY as h,
  Smt as g,
  TCt as _,
  TY as v,
  USt as ee,
  Vrt as y,
  XOt as b,
  Y3 as te,
  Z3 as x,
  ZSt as S,
  _D as C,
  fD as ne,
  iCt as w,
  jit as T,
  jst as E,
  kB as re,
  mD as ie,
  okt as ae,
  pD as D,
  qrt as oe,
  sct as se,
  tCt as ce,
  tkt as O,
  vst as le,
  yst as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $kt as k,
  Bkt as de,
  MGn as fe,
  NMt as A,
  PGn as j,
  Qkt as M,
  XGn as N,
  ZGn as pe,
  _Rr as me,
  eAt as he,
  iRr as P,
  imr as ge,
  rmr as F,
  tAt as _e,
  tyr as ve,
  vRr as ye,
  wMt as be,
} from "./app-initial-ad16eaadf81f.js";
import {
  Ao as xe,
  Io as Se,
  Lo as Ce,
  Mo as we,
  Ro as Te,
  So as Ee,
  fs as De,
  hs as Oe,
  jo as ke,
} from "./app-primary-3e00728c2a4c.js";
import { a as I, f as Ae, n as je, p as L } from "./checkout-page-3db28ea7e690.js";
import { at as Me, rt as Ne } from "./shell-c0663a3963e3.js";
import { a as Pe, s as Fe } from "./analytics-context-14fcebae10e9.js";
import { i as Ie, n as Le, o as R } from "./receipt-45880ed92285.js";
import { a as Re, i as ze } from "./loading-187737545e11.js";
import { c as Be, d as Ve, i as He, l as z } from "./session-aac751f11ab4.js";
import { a as Ue, i as B, n as We, o as V, r as H, t as Ge } from "./mandate-warning-dialog-589b511171fe.js";
import { n as Ke, t as qe } from "./purchase-page-c46ff0a3550e.js";
function Je(e) {
  let t = (0, G.c)(71),
    { children: n, busy: i, presentation: a } = e,
    o = i !== void 0 && i,
    s = ae(),
    l = r(),
    u = (0, K.useRef)(null),
    d;
  t[0] === a.anchorId
    ? (d = t[1])
    : ((d = () => {
        let e = document.getElementById(a.anchorId);
        return { getSnapshot: () => ((e = document.getElementById(a.anchorId) ?? e), e), subscribe: W };
      }),
      (t[0] = a.anchorId),
      (t[1] = d));
  let [f] = (0, K.useState)(d),
    p = (0, K.useSyncExternalStore)(f.subscribe, f.getSnapshot, et),
    m;
  bb0: {
    if (p == null) {
      m = null;
      break bb0;
    }
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = new DOMRect()), (t[2] = e)) : (e = t[2]);
    let n;
    t[3] !== p || t[4] !== e
      ? ((n = () => (p.isConnected && (e = p.getBoundingClientRect()), e)),
        (t[3] = p),
        (t[4] = e),
        (t[5] = n))
      : (n = t[5]);
    let r;
    (t[6] !== p || t[7] !== n
      ? ((r = { contextElement: p, getBoundingClientRect: n }), (t[6] = p), (t[7] = n), (t[8] = r))
      : (r = t[8]),
      (m = r));
  }
  let g = m,
    _ = p != null && a.visible,
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        e?.isConnected &&
          (document.activeElement === document.body || u.current?.contains(document.activeElement)) &&
          e.focus();
      }),
      (t[9] = v))
    : (v = t[9]);
  let ee = (0, K.useEffectEvent)(v),
    y;
  t[10] !== _ || t[11] !== a.suspended
    ? ((y = () => {
        if (!_ || a.suspended) return;
        let e = requestAnimationFrame(() => {
          let e = u.current,
            t = e?.querySelectorAll(`input:not([disabled]), button:not([disabled]), [tabindex='0']`),
            n = Array.from(t ?? []).filter($e);
          (n.find(U) ?? n.find(Qe) ?? n.find(Ze) ?? n[0] ?? e)?.focus();
        });
        return () => cancelAnimationFrame(e);
      }),
      (t[10] = _),
      (t[11] = a.suspended),
      (t[12] = y))
    : (y = t[12]);
  let b;
  (t[13] !== _ || t[14] !== a.step || t[15] !== a.suspended
    ? ((b = [_, a.step, a.suspended]), (t[13] = _), (t[14] = a.step), (t[15] = a.suspended), (t[16] = b))
    : (b = t[16]),
    (0, K.useEffect)(y, b));
  let x;
  t[17] !== p || t[18] !== _ || t[19] !== ee
    ? ((x = () => {
        if (_) return () => ee(p);
      }),
      (t[17] = p),
      (t[18] = _),
      (t[19] = ee),
      (t[20] = x))
    : (x = t[20]);
  let S;
  (t[21] !== p || t[22] !== _ ? ((S = [p, _]), (t[21] = p), (t[22] = _), (t[23] = S)) : (S = t[23]),
    (0, K.useEffect)(x, S));
  let C;
  t[24] !== o || t[25] !== _ || t[26] !== a
    ? ((C = (e) => {
        !e && _ && !o && !a.suspended && a.onDismiss();
      }),
      (t[24] = o),
      (t[25] = _),
      (t[26] = a),
      (t[27] = C))
    : (C = t[27]);
  let w;
  t[28] === g
    ? (w = t[29])
    : ((w = g == null ? null : (0, q.jsx)(D, { virtualRef: { current: g } })), (t[28] = g), (t[29] = w));
  let T = !_ && `hidden`,
    E;
  t[30] === T ? (E = t[31]) : ((E = c(`z-50`, T)), (t[30] = T), (t[31] = E));
  let re = !_,
    oe = !_ || a.suspended,
    se;
  t[32] === s
    ? (se = t[33])
    : ((se = s.formatMessage({
        id: `checkout.inline.label`,
        defaultMessage: `Add credits`,
        description: `Accessible name of the nonmodal credit purchase popup`,
      })),
      (t[32] = s),
      (t[33] = se));
  let ce;
  t[34] !== o || t[35] !== _ || t[36] !== a.suspended
    ? ((ce = (e) => {
        (!_ || o || a.suspended) && e.preventDefault();
      }),
      (t[34] = o),
      (t[35] = _),
      (t[36] = a.suspended),
      (t[37] = ce))
    : (ce = t[37]);
  let O;
  t[38] !== p || t[39] !== o || t[40] !== _ || t[41] !== a.step || t[42] !== a.suspended
    ? ((O = (e) => {
        (!_ ||
          o ||
          a.suspended ||
          a.step === `payment` ||
          (e.target instanceof Node && p?.contains(e.target))) &&
          e.preventDefault();
      }),
      (t[38] = p),
      (t[39] = o),
      (t[40] = _),
      (t[41] = a.step),
      (t[42] = a.suspended),
      (t[43] = O))
    : (O = t[43]);
  let le = a.step === `payment`,
    ue = !!l,
    k;
  t[44] === s
    ? (k = t[45])
    : ((k = s.formatMessage({
        id: `checkout.inline.close`,
        defaultMessage: `Close checkout`,
        description: `Hide the inline credit checkout and return to the conversation`,
      })),
      (t[44] = s),
      (t[45] = k));
  let de;
  t[46] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = (0, q.jsx)(h, {})), (t[46] = de)) : (de = t[46]);
  let fe;
  t[47] !== o || t[48] !== a.onDismiss || t[49] !== k
    ? ((fe = (0, q.jsx)(te, {
        color: `ghost`,
        size: `icon`,
        disabled: o,
        "aria-label": k,
        onClick: a.onDismiss,
        children: de,
      })),
      (t[47] = o),
      (t[48] = a.onDismiss),
      (t[49] = k),
      (t[50] = fe))
    : (fe = t[50]);
  let A;
  t[51] === n
    ? (A = t[52])
    : ((A = (0, q.jsx)(`div`, { className: `flex flex-col gap-3`, children: n })), (t[51] = n), (t[52] = A));
  let j;
  t[53] !== le || t[54] !== ue || t[55] !== fe || t[56] !== A
    ? ((j = (0, q.jsx)(Ae, { expanded: le, isDarkMode: ue, closeButton: fe, children: A })),
      (t[53] = le),
      (t[54] = ue),
      (t[55] = fe),
      (t[56] = A),
      (t[57] = j))
    : (j = t[57]);
  let M;
  t[58] !== E || t[59] !== re || t[60] !== oe || t[61] !== se || t[62] !== ce || t[63] !== O || t[64] !== j
    ? ((M = (0, q.jsx)(ie, {
        ref: u,
        asChild: !0,
        unstyled: !0,
        className: E,
        forceMount: !0,
        hidden: re,
        inert: oe,
        side: `top`,
        align: `center`,
        "aria-label": se,
        onOpenAutoFocus: Xe,
        onCloseAutoFocus: Ye,
        onEscapeKeyDown: ce,
        onInteractOutside: O,
        children: j,
      })),
      (t[58] = E),
      (t[59] = re),
      (t[60] = oe),
      (t[61] = se),
      (t[62] = ce),
      (t[63] = O),
      (t[64] = j),
      (t[65] = M))
    : (M = t[65]);
  let N;
  return (
    t[66] !== _ || t[67] !== w || t[68] !== M || t[69] !== C
      ? ((N = (0, q.jsxs)(ne, { modal: !1, open: _, onOpenChange: C, children: [w, M] })),
        (t[66] = _),
        (t[67] = w),
        (t[68] = M),
        (t[69] = C),
        (t[70] = N))
      : (N = t[70]),
    N
  );
}
function Ye(e) {
  return e.preventDefault();
}
function Xe(e) {
  return e.preventDefault();
}
function Ze(e) {
  return e.getAttribute(`type`) === `submit`;
}
function Qe(e) {
  return e.tagName === `INPUT`;
}
function U(e) {
  return e.getAttribute(`aria-pressed`) === `true`;
}
function $e(e) {
  return e.closest(`[hidden], [inert]`) == null;
}
function et() {
  return null;
}
function W(e) {
  let t = new MutationObserver(e);
  return (
    t.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`id`] }),
    () => t.disconnect()
  );
}
var G, K, q;
function tt() {
  return (tt = e(() => {
    ((G = f()), L(), u(), (K = a()), b(), x(), v(), C(), re(), (q = s()));
  }))();
}
var nt;
function rt() {
  return (rt = e(() => {
    (A(),
      ye(),
      Oe(),
      S(),
      se(),
      ve(),
      fe(),
      N(),
      n(),
      p(),
      B(),
      z(),
      Ie(),
      (nt = _(
        m,
        (e, { signal: t }) => {
          let n = t(!1),
            r = t(null),
            i = t(null),
            a = t(null),
            o = t(!1),
            s = !1,
            c = null,
            l = null,
            u = async (e, t, ...[n, a, u = !1]) => {
              if ((t.assertCurrent(), s)) return;
              ((s = !0),
                (l = [n, a, u]),
                t.automatic || (e.set(r, `pending`), t.onBusyChange?.(!0)),
                R(n.checkout_session_id, a));
              let d = !1,
                f = t.getSignal(),
                p = {
                  additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [g]: t.accountId },
                  signal: AbortSignal.any([f, AbortSignal.timeout(3e4)]),
                },
                m = {
                  checkoutId: n.checkout_session_id,
                  processorEntity: n.processor_entity,
                  checkoutKind: n.checkout_kind ?? void 0,
                  entryPoint: n.entry_point ?? void 0,
                  isCheckoutModalEnabled: !0,
                  ...me(n.checkout_kind ?? `standalone_credit`, n.checkout_session_id, t.search),
                },
                h = `${n.checkout_session_id}:success`;
              try {
                let l = t.modalRecovery
                  ? await Ve(
                      { processorEntity: n.processor_entity, checkoutSessionId: n.checkout_session_id },
                      p.signal,
                      u,
                      p.additionalHeaders,
                    )
                  : await P.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
                      ...p,
                      parameters: {
                        path: {
                          processor_entity: n.processor_entity,
                          checkout_session_id: n.checkout_session_id,
                        },
                      },
                    });
                (t.assertCurrent(), e.set(o, !1));
                let f =
                  l.tag === `custom_checkout_session` && l.credit_payment_state != null
                    ? be(l.credit_payment_state)
                    : null;
                if (
                  !(t.modalRecovery && l.tag === `hosted_checkout_session` && Be(l) === `succeeded`) &&
                  (l.tag !== `custom_checkout_session` ||
                    l.status === `expired` ||
                    (l.status !== `complete` && (l.checkout_provider !== `open_ai` || f !== `succeeded`)) ||
                    (f != null && f !== `succeeded`))
                ) {
                  if (t.modalRecovery) {
                    let n = l.tag === `custom_checkout_session` ? l : null,
                      a = Be(l),
                      o = `verification-unknown`;
                    (n?.status === `expired`
                      ? (o = `expired`)
                      : a === `processing` || (u && a !== `failed` && a !== `requires_action`)
                        ? (o = `processing`)
                        : n?.status === `open` &&
                          (a === `failed` ||
                            a === `requires_action` ||
                            (a == null && n.payment_status === `unpaid`)) &&
                          (o = `unpaid`),
                      (s = !1),
                      t.resume && o === `unpaid` && n != null
                        ? (e.set(i, null), e.set(r, null), t.onRecoveryChange?.(!1))
                        : (o === `expired` && n != null && t.onSessionChange?.(n),
                          e.set(i, o),
                          e.set(r, o),
                          t.onRecoveryChange?.(o !== `expired`)),
                      t.onBusyChange?.(!1));
                    return;
                  }
                  let a = He(n, t.search);
                  await t.onReturn(u ? `${a}&pending=true` : a);
                  return;
                }
                d = !0;
                let g = await P.safePost(`/payments/checkout_session`, {
                  ...p,
                  requestBody: {
                    stripe_checkout_session_id: n.checkout_session_id,
                    processor_entity: n.processor_entity,
                  },
                });
                if (
                  (t.assertCurrent(),
                  Le(n.checkout_session_id),
                  c !== h && ((c = h), Ue(e, m)),
                  e.queryClient.setQueryData([`inline-credit-purchase-history`, t.accountId], !0),
                  t.onOutcome(
                    De.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CHECKOUT_COMPLETED,
                    n.checkout_session_id,
                  ),
                  g.checkout_kind === `standalone_credit` &&
                    `auto_top_up_enabled_after_checkout` in g &&
                    g.auto_top_up_enabled_after_checkout === !0 &&
                    V(e, g.entry_point ?? void 0),
                  e.set(r, `confirmed`),
                  await Promise.allSettled([
                    e.query.invalidate(pe),
                    e.queryClient.invalidateQueries({ queryKey: [`usage-settings`] }),
                    e.queryClient.invalidateQueries({ queryKey: [`work-credit-purchase-task`] }),
                    e.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                    j(e, t.accountId, { includeWork: !0 }),
                    Promise.resolve().then(() => (t.assertCurrent(), t.onPurchased?.())),
                  ]),
                  t.assertCurrent(),
                  t.onRecoveryChange?.(!1),
                  `mandate_requirement_unmet` in g && g.mandate_requirement_unmet === !0)
                ) {
                  t.onMandateWarning(a);
                  return;
                }
                t.onCompleted(
                  a,
                  `auto_top_up_enabled_after_checkout` in g && g.auto_top_up_enabled_after_checkout === !1,
                  n.experiments?.auto_top_up_enabled === `true` &&
                    n.credit_purchase_auto_top_up?.enabled !== !0 &&
                    !(
                      `auto_top_up_enabled_after_checkout` in g && g.auto_top_up_enabled_after_checkout === !0
                    ),
                );
              } catch (a) {
                if (f.aborted) return;
                let l = H(a),
                  u = `${n.checkout_session_id}:${l}`;
                (!(a instanceof T && a.errorCode === `credit_payment_incomplete`) &&
                  c !== h &&
                  c !== u &&
                  ((c = u), Ue(e, m, l)),
                  (s = !1));
                let p = d ? `fulfillment-unknown` : `verification-unknown`;
                (e.set(o, e.get(i) != null),
                  e.set(i, p),
                  e.set(r, p),
                  t.onRecoveryChange?.(!0),
                  t.onBusyChange?.(!1));
              }
            };
          return {
            pending$: n,
            completion$: r,
            recovery$: i,
            resumedSession$: a,
            recheckFailed$: o,
            complete: u,
            resume: (e, t) => (l == null ? Promise.resolve() : u(e, { ...t, resume: !0 }, ...l)),
            retry: (e, t) => (l == null ? Promise.resolve() : u(e, t, ...l)),
          };
        },
        { autoDispose: !0 },
      )));
  }))();
}
function it(e) {
  let t = (0, ot.c)(32),
    { recovery: n, recheckFailed: r, checking: a, onResume: o, onRetry: s } = e,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c =
        n === `processing`
          ? (0, J.jsx)(O, {
              id: `checkout.paymentPending`,
              defaultMessage: `Your payment is still processing. We’ll check for confirmation automatically.`,
              description: `The original credit payment is processing; status checks do not submit another payment.`,
            })
          : null),
      (t[0] = n),
      (t[1] = c));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l =
        n === `unpaid`
          ? (0, J.jsx)(O, {
              id: `checkout.creditModal.unpaid`,
              defaultMessage: `Your payment hasn’t completed. You can return to payment details.`,
              description: `The server confirmed that the existing credit checkout is unpaid and can be resumed.`,
            })
          : null),
      (t[2] = n),
      (t[3] = l));
  let u;
  t[4] === n
    ? (u = t[5])
    : ((u =
        n === `expired`
          ? (0, J.jsx)(O, {
              id: `checkout.creditModal.expired`,
              defaultMessage: `This checkout has expired`,
              description: `The existing credit checkout can no longer accept a payment`,
            })
          : null),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] === n
    ? (d = t[7])
    : ((d =
        n === `verification-unknown`
          ? (0, J.jsx)(O, {
              id: `checkout.creditModal.verificationPending`,
              defaultMessage: `We couldn’t confirm your payment status. Check again before starting another purchase.`,
              description: `Payment was submitted but verification is unavailable; checking again never charges again`,
            })
          : null),
      (t[6] = n),
      (t[7] = d));
  let f;
  t[8] === n
    ? (f = t[9])
    : ((f =
        n === `fulfillment-unknown`
          ? (0, J.jsx)(O, {
              id: `checkout.creditModal.fulfillmentPending`,
              defaultMessage: `Your payment is complete, but your credits may take a moment to appear`,
              description: `Credit payment succeeded but fulfillment is temporarily unavailable`,
            })
          : null),
      (t[8] = n),
      (t[9] = f));
  let p;
  t[10] !== c || t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f
    ? ((p = (0, J.jsxs)(`p`, { role: `status`, children: [c, l, u, d, f] })),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] === r
    ? (m = t[17])
    : ((m = r
        ? (0, J.jsx)(`p`, {
            role: `alert`,
            children: (0, J.jsx)(O, {
              id: `checkout.creditModal.recheckFailed`,
              defaultMessage: `We couldn’t recheck your payment. We’ll try again automatically. You can close this dialog and return later.`,
              description: `An existing payment status recheck failed; no new charge was submitted.`,
            }),
          })
        : null),
      (t[16] = r),
      (t[17] = m));
  let h;
  t[18] !== a || t[19] !== o || t[20] !== n
    ? ((h =
        n === `unpaid`
          ? (0, J.jsx)(te, {
              size: `dialogAction`,
              className: `justify-center`,
              disabled: a,
              onClick: o,
              children: (0, J.jsx)(O, {
                id: `checkout.resumePayment`,
                defaultMessage: `Return to payment details`,
                description: `Return to the existing unpaid checkout after payment verification did not report completion`,
              }),
            })
          : null),
      (t[18] = a),
      (t[19] = o),
      (t[20] = n),
      (t[21] = h))
    : (h = t[21]);
  let g = n === `unpaid` ? `secondary` : `primary`,
    _;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(O, {
        id: `checkout.creditModal.retryPaymentStatus`,
        defaultMessage: `Retry`,
        description: `Recheck and fulfill the existing checkout without submitting another payment`,
      })),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  t[23] !== a || t[24] !== s || t[25] !== g
    ? ((v = (0, J.jsx)(te, {
        size: `dialogAction`,
        className: `justify-center`,
        color: g,
        disabled: a,
        onClick: s,
        children: _,
      })),
      (t[23] = a),
      (t[24] = s),
      (t[25] = g),
      (t[26] = v))
    : (v = t[26]);
  let ee;
  return (
    t[27] !== v || t[28] !== p || t[29] !== m || t[30] !== h
      ? ((ee = (0, J.jsxs)(i, { children: [p, m, h, v] })),
        (t[27] = v),
        (t[28] = p),
        (t[29] = m),
        (t[30] = h),
        (t[31] = ee))
      : (ee = t[31]),
    ee
  );
}
function at(e) {
  let t = (0, ot.c)(20),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, recovery: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = (0, st.useRef)(null),
    o = i != null,
    s = ae(),
    c,
    l;
  (t[4] === o
    ? ((c = t[5]), (l = t[6]))
    : ((c = () => {
        o && a.current?.focus();
      }),
      (l = [o]),
      (t[4] = o),
      (t[5] = c),
      (t[6] = l)),
    (0, st.useLayoutEffect)(c, l));
  let u = o ? `relative min-h-56` : `relative`,
    d = o || void 0,
    f = o ? `opacity-30` : void 0,
    p;
  t[7] !== o || t[8] !== n || t[9] !== d || t[10] !== f
    ? ((p = (0, J.jsx)(`div`, { inert: o, "aria-hidden": d, className: f, children: n })),
      (t[7] = o),
      (t[8] = n),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== r || t[13] !== s || t[14] !== i
    ? ((m =
        i == null
          ? null
          : (0, J.jsx)(`section`, {
              ref: a,
              tabIndex: -1,
              "aria-label": s.formatMessage({
                id: `checkout.creditModal.recoveryLayer`,
                defaultMessage: `Payment status`,
                description: `Accessible label for recovery controls layered over the existing credit payment form`,
              }),
              className: `absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[var(--checkout-bg-primary)]/60 p-2 backdrop-blur-xs focus:outline-hidden`,
              children: (0, J.jsx)(`div`, {
                className: `w-full rounded-2xl border border-[var(--checkout-border-default)] bg-[var(--checkout-bg-primary)] p-4 shadow-lg`,
                children: (0, J.jsx)(it, { recovery: i, ...r }),
              }),
            })),
      (t[12] = r),
      (t[13] = s),
      (t[14] = i),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== u || t[17] !== p || t[18] !== m
      ? ((h = (0, J.jsxs)(`div`, { className: u, children: [p, m] })),
        (t[16] = u),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var ot, st, J;
function ct() {
  return (ct = e(() => {
    ((ot = f()), (st = a()), b(), x(), o(), (J = s()));
  }))();
}
function Y(e) {
  let n = (0, lt.c)(207),
    {
      onClose: r,
      accountId: i,
      userId: a,
      search: o,
      onPurchased: s,
      continuationTask: c,
      creditCheckoutAnalytics: u,
      openedAt: d,
      workHomeBeacon: f,
      onCheckoutPresented: p,
      inline: h,
      retention: g,
    } = e,
    _ = o === void 0 ? `` : o,
    v = g === void 0 ? h : g,
    y = t(m),
    b = ge(),
    te = ae(),
    x = ee(),
    S = (0, X.useId)(),
    C = ce(nt, S),
    ne = w(C.completion$),
    T = w(C.recovery$),
    E = w(C.resumedSession$),
    re = w(C.recheckFailed$),
    ie = w(C.pending$),
    [D, se] = (0, X.useState)(0),
    [le, fe] = (0, X.useState)(null),
    A = h == null ? `modal` : `inline`,
    j = _e(u, A),
    M = de(j),
    [N, pe] = (0, X.useState)(null),
    P =
      j != null && N != null && N.attemptKey === M && N.purchaseAttemptId !== j.purchaseAttemptId
        ? { ...j, purchaseAttemptId: N.purchaseAttemptId }
        : j,
    F = v?.visible ?? !0,
    ve = (0, X.useRef)(0),
    ye = (0, X.useRef)(!1),
    be = (0, X.useRef)(null),
    Ee = +!!F,
    Oe;
  n[0] !== F || n[1] !== Ee
    ? ((Oe = { visible: F, number: Ee }), (n[0] = F), (n[1] = Ee), (n[2] = Oe))
    : (Oe = n[2]);
  let [I, Ae] = (0, X.useState)(Oe);
  I.visible !== F && Ae({ visible: F, number: I.number + +!!F });
  let L = I.number <= 1 ? `new` : `retained_reopen`,
    Me = (0, X.useRef)(void 0),
    Pe = (0, X.useRef)(!0),
    Ie = (0, X.useRef)(!1),
    Le = (0, X.useRef)(void 0),
    R = (0, X.useRef)(null),
    Re = (0, X.useRef)(!1),
    Be;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((Be = new Set()), (n[3] = Be)) : (Be = n[3]);
  let Ve = (0, X.useRef)(Be),
    He = (0, X.useRef)(F),
    z = k(P)
      ? {
          ...P,
          funnelMeasurementEnabled: F ? !0 : void 0,
          opening: { openingNumber: I.number, actualPresentation: A, openingKind: L },
        }
      : P,
    Ue;
  n[4] === z
    ? (Ue = n[5])
    : ((Ue = () => (Pe.current || z == null ? z : { ...z, funnelMeasurementEnabled: void 0 })),
      (n[4] = z),
      (n[5] = Ue));
  let B = Ue,
    We;
  n[6] !== P || n[7] !== B || n[8] !== d || n[9] !== F || n[10] !== y || n[11] !== _
    ? ((We = () => {
        if (
          !(R.current == null || R.current !== Le.current || P == null || (k(P) && !F)) &&
          he(Ve.current, R.current, `ready`) &&
          (Se(y, B(), R.current), !Re.current)
        ) {
          Re.current = !0;
          let e = B();
          e != null && Te(y, e, d, _);
        }
      }),
      (n[6] = P),
      (n[7] = B),
      (n[8] = d),
      (n[9] = F),
      (n[10] = y),
      (n[11] = _),
      (n[12] = We))
    : (We = n[12]);
  let V = We,
    H = M,
    Ke = (0, X.useRef)(H),
    Ye = (0, X.useRef)(H),
    Xe,
    Ze;
  (n[13] !== H || n[14] !== F
    ? ((Xe = () => {
        (F &&
          !He.current &&
          ((Ye.current = H),
          (ye.current = !1),
          (be.current = null),
          (Me.current = Le.current),
          (Pe.current = !0)),
          (He.current = F));
      }),
      (Ze = [H, F]),
      (n[13] = H),
      (n[14] = F),
      (n[15] = Xe),
      (n[16] = Ze))
    : ((Xe = n[15]), (Ze = n[16])),
    (0, X.useLayoutEffect)(Xe, Ze));
  let Qe;
  n[17] !== H || n[18] !== B || n[19] !== y
    ? ((Qe = (e, t) => {
        (Ye.current !== H && ((Ye.current = H), (ye.current = !1)),
          !ye.current && ((ye.current = !0), ke(y, B(), e, t)));
      }),
      (n[17] = H),
      (n[18] = B),
      (n[19] = y),
      (n[20] = Qe))
    : (Qe = n[20]);
  let U = Qe,
    $e;
  n[21] !== H || n[22] !== r || n[23] !== U || n[24] !== v
    ? (($e = () => {
        (U(
          Ie.current && Ke.current === H
            ? De.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION
            : De.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION,
          Le.current,
        ),
          v == null ? r() : v.onDismiss());
      }),
      (n[21] = H),
      (n[22] = r),
      (n[23] = U),
      (n[24] = v),
      (n[25] = $e))
    : ($e = n[25]);
  let et = $e,
    W = (0, X.useRef)(null),
    G = b.accountId === i && b.userId === a,
    K = (0, X.useRef)(G),
    q,
    tt;
  (n[26] === G
    ? ((q = n[27]), (tt = n[28]))
    : ((q = () => {
        K.current = G;
        let e = new AbortController();
        return (
          (W.current = e),
          G || e.abort(),
          () => {
            ((K.current = !1), e.abort());
          }
        );
      }),
      (tt = [G]),
      (n[26] = G),
      (n[27] = q),
      (n[28] = tt)),
    (0, X.useLayoutEffect)(q, tt));
  let rt;
  n[29] !== V || n[30] !== B || n[31] !== I.number || n[32] !== L || n[33] !== y
    ? ((rt = () => {
        let e = B();
        if (e == null || !k(e) || I.number === 0) return;
        let t = `${e.checkoutLaunchId}:${I.number}`;
        be.current !== t &&
          ((be.current = t), xe(y, e, { checkoutId: Le.current, checkoutOpeningId: t, openingKind: L }), V());
      }),
      (n[29] = V),
      (n[30] = B),
      (n[31] = I.number),
      (n[32] = L),
      (n[33] = y),
      (n[34] = rt))
    : (rt = n[34]);
  let ot = (0, X.useEffectEvent)(rt),
    st;
  n[35] !== G || n[36] !== ot || n[37] !== F
    ? ((st = () => {
        G && F && ot();
      }),
      (n[35] = G),
      (n[36] = ot),
      (n[37] = F),
      (n[38] = st))
    : (st = n[38]);
  let J;
  (n[39] !== H || n[40] !== G || n[41] !== F
    ? ((J = [H, G, F]), (n[39] = H), (n[40] = G), (n[41] = F), (n[42] = J))
    : (J = n[42]),
    (0, X.useLayoutEffect)(st, J));
  let ct;
  n[43] === D
    ? (ct = n[44])
    : ((ct = () => {
        if (W.current == null) throw Error(`Checkout is not mounted`);
        if ((W.current.signal.throwIfAborted(), ve.current !== D)) throw Error(`Checkout was restarted`);
        if (!K.current) throw Error(`Checkout account changed`);
      }),
      (n[43] = D),
      (n[44] = ct));
  let Y = ct,
    ut = h == null,
    dt;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = () => {
        if (W.current == null) throw Error(`Checkout is not mounted`);
        return W.current.signal;
      }),
      (n[45] = dt))
    : (dt = n[45]);
  let ft;
  n[46] !== C.completion$ || n[47] !== h || n[48] !== v || n[49] !== y
    ? ((ft = (e) => {
        v?.onBusyChange(e || (h != null && y.get(C.completion$) != null));
      }),
      (n[46] = C.completion$),
      (n[47] = h),
      (n[48] = v),
      (n[49] = y),
      (n[50] = ft))
    : (ft = n[50]);
  let pt = v?.onRecoveryChange,
    mt = v?.onSessionChange,
    ht;
  n[51] !== x || n[52] !== r
    ? ((ht = async (e) => {
        (r(), await x(e));
      }),
      (n[51] = x),
      (n[52] = r),
      (n[53] = ht))
    : (ht = n[53]);
  let gt;
  n[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (e) => fe({ quantity: e })), (n[54] = gt))
    : (gt = n[54]);
  let _t;
  n[55] !== h || n[56] !== te || n[57] !== r || n[58] !== y
    ? ((_t = (e, t, n) => {
        if (h != null) {
          h.onCompleted(e, t, n);
          return;
        }
        (t
          ? y
              .get(oe)
              .warning(
                te.formatMessage({
                  id: `checkout.creditModal.autoReloadFailed`,
                  defaultMessage: `Credits added, but auto-reload couldn’t be enabled. Review auto-reload in Settings.`,
                  description: `Warning after a credit payment succeeds but automatic reload setup fails; do not suggest paying again`,
                }),
              )
          : y
              .get(oe)
              .success(
                te.formatMessage({
                  id: `checkout.creditPurchase.success`,
                  defaultMessage: `Credits added`,
                  description: `Toast after a personal credit purchase completes`,
                }),
              ),
          r());
      }),
      (n[55] = h),
      (n[56] = te),
      (n[57] = r),
      (n[58] = y),
      (n[59] = _t))
    : (_t = n[59]);
  let vt;
  n[60] !== i ||
  n[61] !== Y ||
  n[62] !== U ||
  n[63] !== s ||
  n[64] !== _ ||
  n[65] !== ut ||
  n[66] !== ft ||
  n[67] !== pt ||
  n[68] !== mt ||
  n[69] !== ht ||
  n[70] !== _t
    ? ((vt = {
        accountId: i,
        search: _,
        modalRecovery: ut,
        assertCurrent: Y,
        getSignal: dt,
        onBusyChange: ft,
        onRecoveryChange: pt,
        onSessionChange: mt,
        onPurchased: s,
        onOutcome: U,
        onReturn: ht,
        onMandateWarning: gt,
        onCompleted: _t,
      }),
      (n[60] = i),
      (n[61] = Y),
      (n[62] = U),
      (n[63] = s),
      (n[64] = _),
      (n[65] = ut),
      (n[66] = ft),
      (n[67] = pt),
      (n[68] = mt),
      (n[69] = ht),
      (n[70] = _t),
      (n[71] = vt))
    : (vt = n[71]);
  let Q = vt,
    yt;
  n[72] !== C || n[73] !== Q || n[74] !== h || n[75] !== y
    ? ((yt = { mutationFn: () => C.resume(y, { ...Q, automatic: h == null }) }),
      (n[72] = C),
      (n[73] = Q),
      (n[74] = h),
      (n[75] = y),
      (n[76] = yt))
    : (yt = n[76]);
  let { mutate: bt, isPending: xt } = ue(yt),
    St;
  n[77] !== i || n[78] !== S || n[79] !== a
    ? ((St = [`modal-credit-payment-recovery`, S, i, a]), (n[77] = i), (n[78] = S), (n[79] = a), (n[80] = St))
    : (St = n[80]);
  let Ct;
  n[81] !== C || n[82] !== Q || n[83] !== y
    ? ((Ct = async () => (await C.retry(y, { ...Q, automatic: !0 }), null)),
      (n[81] = C),
      (n[82] = Q),
      (n[83] = y),
      (n[84] = Ct))
    : (Ct = n[84]);
  let wt = h == null && G && F && T != null && T !== `unpaid` && T !== `expired`,
    Tt;
  n[85] !== St || n[86] !== Ct || n[87] !== wt
    ? ((Tt = {
        queryKey: St,
        queryFn: Ct,
        enabled: wt,
        initialData: null,
        staleTime: 1 / 0,
        retry: !1,
        refetchInterval: 5e3,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (n[85] = St),
      (n[86] = Ct),
      (n[87] = wt),
      (n[88] = Tt))
    : (Tt = n[88]);
  let { isFetching: Et, refetch: Dt } = l(Tt),
    [Ot, kt] = (0, X.useState)(null),
    [At, jt] = (0, X.useState)(!0),
    Mt = h == null && T != null,
    Nt,
    Pt;
  (n[89] !== Ot || n[90] !== Mt
    ? ((Nt = () => {
        let e = Ot?.closest(`footer`);
        if (e != null)
          return (
            e.toggleAttribute(`inert`, Mt),
            e.classList.toggle(`opacity-30`, Mt),
            Mt ? e.setAttribute(`aria-hidden`, `true`) : e.removeAttribute(`aria-hidden`),
            () => {
              (e.removeAttribute(`inert`),
                e.classList.remove(`opacity-30`),
                e.removeAttribute(`aria-hidden`));
            }
          );
      }),
      (Pt = [Ot, Mt]),
      (n[89] = Ot),
      (n[90] = Mt),
      (n[91] = Nt),
      (n[92] = Pt))
    : ((Nt = n[91]), (Pt = n[92])),
    (0, X.useLayoutEffect)(Nt, Pt));
  let Ft;
  n[93] !== H || n[94] !== h || n[95] !== U
    ? ((Ft = () => {
        (U(
          Ie.current && Ke.current === H
            ? De.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION
            : De.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION,
          Le.current,
        ),
          h?.onDismiss());
      }),
      (n[93] = H),
      (n[94] = h),
      (n[95] = U),
      (n[96] = Ft))
    : (Ft = n[96]);
  let It = Ft,
    Lt;
  if (
    n[97] !== i ||
    n[98] !== P ||
    n[99] !== A ||
    n[100] !== Y ||
    n[101] !== H ||
    n[102] !== C ||
    n[103] !== et ||
    n[104] !== Q ||
    n[105] !== c ||
    n[106] !== It ||
    n[107] !== Ot ||
    n[108] !== D ||
    n[109] !== h ||
    n[110] !== V ||
    n[111] !== B ||
    n[112] !== p ||
    n[113] !== z ||
    n[114] !== L ||
    n[115] !== v ||
    n[116] !== y ||
    n[117] !== _ ||
    n[118] !== pe ||
    n[119] !== a ||
    n[120] !== f
  ) {
    let e;
    n[122] !== It || n[123] !== h
      ? ((e = h == null ? void 0 : { ...h, onDismiss: It }), (n[122] = It), (n[123] = h), (n[124] = e))
      : (e = n[124]);
    let t;
    n[125] !== i ||
    n[126] !== P ||
    n[127] !== H ||
    n[128] !== D ||
    n[129] !== V ||
    n[130] !== B ||
    n[131] !== p ||
    n[132] !== L ||
    n[133] !== v ||
    n[134] !== y ||
    n[135] !== _ ||
    n[136] !== a
      ? ((t = (e) => {
          if (!K.current || ve.current !== D || W.current?.signal.aborted) return;
          let t = v?.onSessionChange(e, P) === !0;
          if (v != null && !v.visible) return;
          (Ke.current !== H &&
            ((Ke.current = H),
            (ye.current = !1),
            (Ie.current = !1),
            R.current !== e.checkout_session_id && (R.current = null)),
            (Le.current = e.checkout_session_id),
            (Pe.current = L !== `retained_reopen` || Me.current === e.checkout_session_id || t));
          let n = B();
          (Fe({
            userId: a,
            accountId: i,
            context: {
              checkoutId: e.checkout_session_id,
              processorEntity: e.processor_entity,
              checkoutKind: e.checkout_kind ?? `standalone_credit`,
              entryPoint: e.entry_point ?? void 0,
              isCheckoutModalEnabled: !0,
              ...me(e.checkout_kind ?? `standalone_credit`, e.checkout_session_id, _),
            },
            analytics: n,
          }),
            Ie.current || ((Ie.current = !0), p?.(), n != null && Ce(y, n)),
            he(Ve.current, e.checkout_session_id, `shown`) && we(y, n, e, _),
            V());
        }),
        (n[125] = i),
        (n[126] = P),
        (n[127] = H),
        (n[128] = D),
        (n[129] = V),
        (n[130] = B),
        (n[131] = p),
        (n[132] = L),
        (n[133] = v),
        (n[134] = y),
        (n[135] = _),
        (n[136] = a),
        (n[137] = t))
      : (t = n[137]);
    let r;
    n[138] !== D || n[139] !== V
      ? ((r = (e) => {
          K.current && ve.current === D && !W.current?.signal.aborted && ((R.current = e), V());
        }),
        (n[138] = D),
        (n[139] = V),
        (n[140] = r))
      : (r = n[140]);
    let o;
    n[141] !== C.completion$ ||
    n[142] !== C.pending$ ||
    n[143] !== D ||
    n[144] !== h ||
    n[145] !== v ||
    n[146] !== y
      ? ((o = (e) => {
          if (ve.current === D) {
            y.set(C.pending$, e);
            let t = y.get(C.completion$);
            v?.onBusyChange(e || t === `pending` || t === `confirmed` || (h != null && t != null));
          }
        }),
        (n[141] = C.completion$),
        (n[142] = C.pending$),
        (n[143] = D),
        (n[144] = h),
        (n[145] = v),
        (n[146] = y),
        (n[147] = o))
      : (o = n[147]);
    let s;
    n[148] !== P?.purchaseAttemptId ||
    n[149] !== Y ||
    n[150] !== H ||
    n[151] !== C.resumedSession$ ||
    n[152] !== h ||
    n[153] !== y ||
    n[154] !== pe
      ? ((s = () => {
          (Y(),
            y.set(C.resumedSession$, null),
            h != null && Ne.getState().setCheckoutSessionUpdateError(null),
            (ve.current += 1),
            (Ie.current = !1),
            (Le.current = void 0),
            (R.current = null),
            P?.purchaseAttemptId != null && pe({ attemptKey: H, purchaseAttemptId: crypto.randomUUID() }),
            se(ve.current));
        }),
        (n[148] = P?.purchaseAttemptId),
        (n[149] = Y),
        (n[150] = H),
        (n[151] = C.resumedSession$),
        (n[152] = h),
        (n[153] = y),
        (n[154] = pe),
        (n[155] = s))
      : (s = n[155]);
    let l;
    (n[156] !== C || n[157] !== Q || n[158] !== y
      ? ((l = (...e) => {
          let t = e;
          return C.complete(y, Q, ...t);
        }),
        (n[156] = C),
        (n[157] = Q),
        (n[158] = y),
        (n[159] = l))
      : (l = n[159]),
      (Lt = {
        actualPresentation: A,
        retention: v,
        workHomeBeacon: f,
        inline: e,
        footerTarget: Ot,
        onNewCardSelected: jt,
        search: _,
        continuationTask: c,
        creditCheckoutAnalytics: z,
        assertCurrent: Y,
        onClose: et,
        onPresented: t,
        onReady: r,
        onPendingChange: o,
        onRestart: s,
        onSessionReplaced:
          h == null
            ? (e) => {
                if ((Y(), y.get(C.completion$) != null || y.get(C.recovery$) != null))
                  throw Error(`Cannot replace a submitted credit payment`);
                (Lt.onRestart(), y.set(C.resumedSession$, e));
              }
            : void 0,
        onCompleted: l,
      }),
      (n[97] = i),
      (n[98] = P),
      (n[99] = A),
      (n[100] = Y),
      (n[101] = H),
      (n[102] = C),
      (n[103] = et),
      (n[104] = Q),
      (n[105] = c),
      (n[106] = It),
      (n[107] = Ot),
      (n[108] = D),
      (n[109] = h),
      (n[110] = V),
      (n[111] = B),
      (n[112] = p),
      (n[113] = z),
      (n[114] = L),
      (n[115] = v),
      (n[116] = y),
      (n[117] = _),
      (n[118] = pe),
      (n[119] = a),
      (n[120] = f),
      (n[121] = Lt));
  } else Lt = n[121];
  let Rt = G && (ie || ne === `pending` || ne === `confirmed` || (h != null && ne != null)),
    $;
  if (G) {
    let e = Et || xt || ne === `pending` || ne === `confirmed`,
      t;
    n[161] === bt ? (t = n[162]) : ((t = () => bt()), (n[161] = bt), (n[162] = t));
    let r;
    n[163] !== C || n[164] !== Q || n[165] !== h || n[166] !== Dt || n[167] !== y
      ? ((r = () => {
          h == null ? Dt({ cancelRefetch: !1 }) : C.retry(y, Q);
        }),
        (n[163] = C),
        (n[164] = Q),
        (n[165] = h),
        (n[166] = Dt),
        (n[167] = y),
        (n[168] = r))
      : (r = n[168]);
    let i;
    n[169] !== re || n[170] !== e || n[171] !== t || n[172] !== r
      ? ((i = { recheckFailed: re, checking: e, onResume: t, onRetry: r }),
        (n[169] = re),
        (n[170] = e),
        (n[171] = t),
        (n[172] = r),
        (n[173] = i))
      : (i = n[173]);
    let a = i;
    if (h != null && T != null) {
      let e;
      (n[174] !== T || n[175] !== a
        ? ((e = (0, Z.jsx)(it, { recovery: T, ...a })), (n[174] = T), (n[175] = a), (n[176] = e))
        : (e = n[176]),
        ($ = e));
    } else {
      let e;
      n[177] !== D || n[178] !== Lt || n[179] !== bt || n[180] !== E
        ? ((e =
            E == null
              ? (0, Z.jsx)(qe, { presentation: Lt }, D)
              : (0, Z.jsx)(je, { session: E, presentation: Lt, onRetry: () => bt() })),
          (n[177] = D),
          (n[178] = Lt),
          (n[179] = bt),
          (n[180] = E),
          (n[181] = e))
        : (e = n[181]);
      let t = e,
        r;
      (n[182] !== h || n[183] !== t || n[184] !== T || n[185] !== a
        ? ((r = h == null ? (0, Z.jsx)(at, { recovery: T, ...a, children: t }) : t),
          (n[182] = h),
          (n[183] = t),
          (n[184] = T),
          (n[185] = a),
          (n[186] = r))
        : (r = n[186]),
        ($ = r));
    }
  } else {
    let e;
    (n[160] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`p`, {
          role: `alert`,
          children: (0, Z.jsx)(O, {
            id: `checkout.creditModal.accountChanged`,
            defaultMessage: `Your account changed. Close checkout and start again.`,
            description: `Checkout stops after the signed-in account changes, preventing payment for the previous account`,
          }),
        })),
        (n[160] = e))
      : (e = n[160]),
      ($ = e));
  }
  if (le != null && G) {
    let e;
    n[187] !== h || n[188] !== le || n[189] !== r
      ? ((e = () => {
          h == null ? r() : h.onCompleted(le.quantity, !1, !1);
        }),
        (n[187] = h),
        (n[188] = le),
        (n[189] = r),
        (n[190] = e))
      : (e = n[190]);
    let t;
    return (
      n[191] !== F || n[192] !== e
        ? ((t = (0, Z.jsx)(Ge, { open: F, onClose: e })), (n[191] = F), (n[192] = e), (n[193] = t))
        : (t = n[193]),
      t
    );
  }
  if (h != null) {
    let e;
    n[194] !== It || n[195] !== h
      ? ((e = { ...h, onDismiss: It }), (n[194] = It), (n[195] = h), (n[196] = e))
      : (e = n[196]);
    let t;
    return (
      n[197] !== Rt || n[198] !== $ || n[199] !== e
        ? ((t = (0, Z.jsx)(Je, { presentation: e, busy: Rt, children: $ })),
          (n[197] = Rt),
          (n[198] = $),
          (n[199] = e),
          (n[200] = t))
        : (t = n[200]),
      t
    );
  }
  let zt = v?.visible ?? !0,
    Bt;
  return (
    n[201] !== Rt || n[202] !== et || n[203] !== $ || n[204] !== At || n[205] !== zt
      ? ((Bt = (0, Z.jsx)(ze, {
          visible: zt,
          busy: Rt,
          onClose: et,
          footerRef: kt,
          isNewCardSelected: At,
          children: $,
        })),
        (n[201] = Rt),
        (n[202] = et),
        (n[203] = $),
        (n[204] = At),
        (n[205] = zt),
        (n[206] = Bt))
      : (Bt = n[206]),
    Bt
  );
}
var lt, X, Z;
function ut() {
  return (ut = e(() => {
    ((lt = f()),
      ye(),
      M(),
      Pe(),
      Me(),
      Oe(),
      le(),
      E(),
      S(),
      (X = a()),
      b(),
      d(),
      F(),
      y(),
      Ee(),
      n(),
      I(),
      tt(),
      Re(),
      rt(),
      We(),
      Ke(),
      ct(),
      (Z = s()));
  }))();
}
export { ut as n, tt as r, Y as t };
//# sourceMappingURL=dialog-e2c97bc30827.js.map
