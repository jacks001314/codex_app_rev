import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BE as n,
  Cot as r,
  Ext as i,
  Fz as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  Pz as l,
  RE as u,
  Rxt as ee,
  SJ as te,
  TJ as d,
  UE as f,
  VDt as ne,
  Vxt as re,
  _Mt as p,
  _xt as m,
  cSt as h,
  fO as g,
  gMt as ie,
  hot as ae,
  hrt as _,
  jDt as v,
  lot as y,
  rst as b,
  spt as x,
  t3 as S,
  uO as oe,
  vrt as C,
  vzt as w,
  wot as T,
  xMt as E,
  yzt as D,
  zE as se,
} from "./app-shared-bbfeca5e5737.js";
import {
  EFt as O,
  FMt as ce,
  JMt as k,
  NHn as A,
  PHn as j,
  QFr as M,
  XMt as N,
  YMt as P,
  Ymr as F,
  ZFr as le,
  _Ft as I,
  _Hn as L,
  ehr as ue,
  fur as de,
  hHn as fe,
  pur as pe,
  qMt as me,
} from "./app-initial-5851df3f6cb1.js";
import {
  Do as he,
  Eo as ge,
  To as _e,
  bo as ve,
  fo as ye,
  is as R,
  ts as be,
  xo as xe,
  yo as Se,
} from "./app-primary-fe8a450b3b04.js";
import { f as Ce, p as z } from "./checkout-page-f9add28127de.js";
import { lt as we, st as Te } from "./shell-257a8d50391c.js";
import { _ as Ee, h as De } from "./promo-funnel-context-725bd849edc2.js";
import { i as Oe, n as B, o as V } from "./receipt-2d9feddd2f66.js";
import { c as ke, i as Ae } from "./session-adbd908db31f.js";
import { d as je, u as Me } from "./return-9eda3c742ec6.js";
import { i as Ne, n as H, r as Pe, t as U } from "./result-analytics-359d8a4db423.js";
import { n as Fe, t as Ie } from "./purchase-page-b5ffa33c4685.js";
function Le(e) {
  let r = (0, Ue.c)(64),
    { children: i, busy: o, presentation: s } = e,
    c = o !== void 0 && o,
    l = ne(),
    ee = a(),
    d = (0, q.useRef)(null),
    f;
  r[0] === s.anchorId
    ? (f = r[1])
    : ((f = () => {
        let e = document.getElementById(s.anchorId);
        return { getSnapshot: () => ((e = document.getElementById(s.anchorId) ?? e), e), subscribe: K };
      }),
      (r[0] = s.anchorId),
      (r[1] = f));
  let [re] = (0, q.useState)(f),
    p = (0, q.useSyncExternalStore)(re.subscribe, re.getSnapshot, He),
    m = p != null && s.visible,
    h;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        e?.isConnected &&
          (document.activeElement === document.body || d.current?.contains(document.activeElement)) &&
          e.focus();
      }),
      (r[2] = h))
    : (h = r[2]);
  let g = (0, q.useEffectEvent)(h),
    ae;
  r[3] !== m || r[4] !== s.suspended
    ? ((ae = () => {
        if (!m || s.suspended) return;
        let e = requestAnimationFrame(() => {
          let e = d.current,
            t = e?.querySelectorAll(`input:not([disabled]), button:not([disabled]), [tabindex='0']`),
            n = Array.from(t ?? []).filter(Ve);
          (n.find(Be) ?? n.find(ze) ?? n.find(Re) ?? n[0] ?? e)?.focus();
        });
        return () => cancelAnimationFrame(e);
      }),
      (r[3] = m),
      (r[4] = s.suspended),
      (r[5] = ae))
    : (ae = r[5]);
  let _;
  (r[6] !== m || r[7] !== s.step || r[8] !== s.suspended
    ? ((_ = [m, s.step, s.suspended]), (r[6] = m), (r[7] = s.step), (r[8] = s.suspended), (r[9] = _))
    : (_ = r[9]),
    (0, q.useEffect)(ae, _));
  let v;
  r[10] !== p || r[11] !== m || r[12] !== g
    ? ((v = () => {
        if (m) return () => g(p);
      }),
      (r[10] = p),
      (r[11] = m),
      (r[12] = g),
      (r[13] = v))
    : (v = r[13]);
  let y;
  (r[14] !== p || r[15] !== m ? ((y = [p, m]), (r[14] = p), (r[15] = m), (r[16] = y)) : (y = r[16]),
    (0, q.useEffect)(v, y));
  let b;
  r[17] !== c || r[18] !== m || r[19] !== s
    ? ((b = (e) => {
        !e && m && !c && !s.suspended && s.onDismiss();
      }),
      (r[17] = c),
      (r[18] = m),
      (r[19] = s),
      (r[20] = b))
    : (b = r[20]);
  let x;
  r[21] === p
    ? (x = r[22])
    : ((x = p == null ? null : (0, J.jsx)(se, { virtualRef: { current: p } })), (r[21] = p), (r[22] = x));
  let S = !m && `hidden`,
    oe;
  r[23] === S ? (oe = r[24]) : ((oe = ie(`z-50`, S)), (r[23] = S), (r[24] = oe));
  let C = !m,
    w = !m || s.suspended,
    T;
  r[25] === l
    ? (T = r[26])
    : ((T = l.formatMessage({
        id: `checkout.inline.label`,
        defaultMessage: `Add credits`,
        description: `Accessible name of the nonmodal credit purchase popup`,
      })),
      (r[25] = l),
      (r[26] = T));
  let E;
  r[27] !== c || r[28] !== m || r[29] !== s.suspended
    ? ((E = (e) => {
        (!m || c || s.suspended) && e.preventDefault();
      }),
      (r[27] = c),
      (r[28] = m),
      (r[29] = s.suspended),
      (r[30] = E))
    : (E = r[30]);
  let D;
  r[31] !== p || r[32] !== c || r[33] !== m || r[34] !== s.step || r[35] !== s.suspended
    ? ((D = (e) => {
        (!m ||
          c ||
          s.suspended ||
          s.step === `payment` ||
          (e.target instanceof Node && p?.contains(e.target))) &&
          e.preventDefault();
      }),
      (r[31] = p),
      (r[32] = c),
      (r[33] = m),
      (r[34] = s.step),
      (r[35] = s.suspended),
      (r[36] = D))
    : (D = r[36]);
  let O = s.step === `payment`,
    ce = !!ee,
    k;
  r[37] === l
    ? (k = r[38])
    : ((k = l.formatMessage({
        id: `checkout.inline.close`,
        defaultMessage: `Close checkout`,
        description: `Hide the inline credit checkout and return to the conversation`,
      })),
      (r[37] = l),
      (r[38] = k));
  let A;
  r[39] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = (0, J.jsx)(te, {})), (r[39] = A)) : (A = r[39]);
  let j;
  r[40] !== c || r[41] !== s.onDismiss || r[42] !== k
    ? ((j = (0, J.jsx)(t, {
        color: `ghost`,
        size: `icon`,
        disabled: c,
        "aria-label": k,
        onClick: s.onDismiss,
        children: A,
      })),
      (r[40] = c),
      (r[41] = s.onDismiss),
      (r[42] = k),
      (r[43] = j))
    : (j = r[43]);
  let M;
  r[44] === i
    ? (M = r[45])
    : ((M = (0, J.jsx)(`div`, { className: `flex flex-col gap-3`, children: i })), (r[44] = i), (r[45] = M));
  let N;
  r[46] !== O || r[47] !== ce || r[48] !== j || r[49] !== M
    ? ((N = (0, J.jsx)(Ce, { expanded: O, isDarkMode: ce, closeButton: j, children: M })),
      (r[46] = O),
      (r[47] = ce),
      (r[48] = j),
      (r[49] = M),
      (r[50] = N))
    : (N = r[50]);
  let P;
  r[51] !== oe || r[52] !== C || r[53] !== w || r[54] !== T || r[55] !== E || r[56] !== D || r[57] !== N
    ? ((P = (0, J.jsx)(n, {
        ref: d,
        asChild: !0,
        unstyled: !0,
        className: oe,
        forceMount: !0,
        hidden: C,
        inert: w,
        side: `top`,
        align: `center`,
        "aria-label": T,
        onOpenAutoFocus: G,
        onCloseAutoFocus: W,
        onEscapeKeyDown: E,
        onInteractOutside: D,
        children: N,
      })),
      (r[51] = oe),
      (r[52] = C),
      (r[53] = w),
      (r[54] = T),
      (r[55] = E),
      (r[56] = D),
      (r[57] = N),
      (r[58] = P))
    : (P = r[58]);
  let F;
  return (
    r[59] !== m || r[60] !== P || r[61] !== b || r[62] !== x
      ? ((F = (0, J.jsxs)(u, { modal: !1, open: m, onOpenChange: b, children: [x, P] })),
        (r[59] = m),
        (r[60] = P),
        (r[61] = b),
        (r[62] = x),
        (r[63] = F))
      : (F = r[63]),
    F
  );
}
function W(e) {
  return e.preventDefault();
}
function G(e) {
  return e.preventDefault();
}
function Re(e) {
  return e.getAttribute(`type`) === `submit`;
}
function ze(e) {
  return e.tagName === `INPUT`;
}
function Be(e) {
  return e.getAttribute(`aria-pressed`) === `true`;
}
function Ve(e) {
  return e.closest(`[hidden], [inert]`) == null;
}
function He() {
  return null;
}
function K(e) {
  let t = new MutationObserver(e);
  return (
    t.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`id`] }),
    () => t.disconnect()
  );
}
var Ue, q, J;
function Y() {
  return (Y = e(() => {
    ((Ue = w()), z(), p(), (q = D()), v(), S(), d(), f(), l(), (J = E()));
  }))();
}
var We;
function Ge() {
  return (Ge = e(() => {
    (O(),
      M(),
      R(),
      c(),
      b(),
      ue(),
      fe(),
      A(),
      T(),
      C(),
      H(),
      ke(),
      Oe(),
      (We = h(
        r,
        (e, { signal: t }) => {
          let n = t(!1),
            r = t(null),
            i = t(null),
            a = !1,
            o = null,
            s = null,
            c = async (e, t, ...[n, c, l = !1]) => {
              if ((t.assertCurrent(), a)) return;
              ((a = !0),
                (s = [n, c, l]),
                e.set(r, `pending`),
                t.onBusyChange?.(!0),
                V(n.checkout_session_id, c));
              let u = !1,
                ee = t.getSignal(),
                te = {
                  additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [x]: t.accountId },
                  signal: AbortSignal.any([ee, AbortSignal.timeout(3e4)]),
                },
                d = {
                  checkoutId: n.checkout_session_id,
                  processorEntity: n.processor_entity,
                  checkoutKind: n.checkout_kind ?? void 0,
                  entryPoint: n.entry_point ?? void 0,
                  isCheckoutModalEnabled: !0,
                  ...le(n.checkout_kind ?? `standalone_credit`, n.checkout_session_id, t.search),
                },
                f = `${n.checkout_session_id}:success`;
              try {
                let i = await F.safeGet(`/payments/checkout/{processor_entity}/{checkout_session_id}`, {
                  ...te,
                  parameters: {
                    path: {
                      processor_entity: n.processor_entity,
                      checkout_session_id: n.checkout_session_id,
                    },
                  },
                });
                t.assertCurrent();
                let a =
                  i.tag === `custom_checkout_session` && i.credit_payment_state != null
                    ? I(i.credit_payment_state)
                    : null;
                if (
                  i.tag !== `custom_checkout_session` ||
                  i.status === `expired` ||
                  (i.status !== `complete` && (i.checkout_provider !== `open_ai` || a !== `succeeded`)) ||
                  (a != null && a !== `succeeded`)
                ) {
                  let e = Ae(n, t.search);
                  await t.onReturn(l ? `${e}&pending=true` : e);
                  return;
                }
                u = !0;
                let s = await F.safePost(`/payments/checkout_session`, {
                  ...te,
                  requestBody: {
                    stripe_checkout_session_id: n.checkout_session_id,
                    processor_entity: n.processor_entity,
                  },
                });
                (t.assertCurrent(),
                  B(n.checkout_session_id),
                  o !== f && ((o = f), Pe(e, d)),
                  e.queryClient.setQueryData([`inline-credit-purchase-history`, t.accountId], !0),
                  t.onOutcome(
                    be.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CHECKOUT_COMPLETED,
                    n.checkout_session_id,
                  ),
                  s.checkout_kind === `standalone_credit` &&
                    `auto_top_up_enabled_after_checkout` in s &&
                    s.auto_top_up_enabled_after_checkout === !0 &&
                    Ne(e, s.entry_point ?? void 0),
                  e.set(r, `confirmed`),
                  await Promise.allSettled([
                    e.query.invalidate(j),
                    e.queryClient.invalidateQueries({ queryKey: [`usage-settings`] }),
                    e.queryClient.invalidateQueries({ queryKey: [`work-credit-purchase-task`] }),
                    e.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                    L(e, t.accountId, { includeWork: !0 }),
                    Promise.resolve().then(() => (t.assertCurrent(), t.onPurchased?.())),
                  ]),
                  t.assertCurrent(),
                  t.onCompleted(
                    c,
                    `auto_top_up_enabled_after_checkout` in s && s.auto_top_up_enabled_after_checkout === !1,
                    n.experiments?.auto_top_up_enabled === `true` &&
                      n.credit_purchase_auto_top_up?.enabled !== !0 &&
                      !(
                        `auto_top_up_enabled_after_checkout` in s &&
                        s.auto_top_up_enabled_after_checkout === !0
                      ),
                  ));
              } catch (t) {
                if (ee.aborted) return;
                let s = U(t),
                  c = `${n.checkout_session_id}:${s}`;
                (!(t instanceof _ && t.errorCode === `credit_payment_incomplete`) &&
                  o !== f &&
                  o !== c &&
                  ((o = c), Pe(e, d, s)),
                  (a = !1));
                let l = u ? `fulfillment-unknown` : `verification-unknown`;
                (e.set(i, l), e.set(r, l));
              }
            };
          return {
            pending$: n,
            completion$: r,
            recovery$: i,
            complete: c,
            retry: (e, t) => (s == null ? Promise.resolve() : c(e, t, ...s)),
          };
        },
        { autoDispose: !0 },
      )));
  }))();
}
function Ke(e) {
  let n = (0, qe.c)(153),
    {
      onClose: a,
      accountId: c,
      userId: l,
      search: u,
      onPurchased: te,
      continuationTask: d,
      creditCheckoutAnalytics: f,
      openedAt: p,
      workHomeBeacon: m,
      onCheckoutPresented: h,
      inline: g,
      retention: ie,
    } = e,
    _ = u === void 0 ? `` : u,
    v = ie === void 0 ? g : ie,
    y = s(r),
    b = pe(),
    x = ne(),
    S = i(),
    C = ee(We, (0, X.useId)()),
    w = re(C.completion$),
    T = re(C.recovery$),
    E = re(C.pending$),
    [D, se] = (0, X.useState)(0),
    O = g == null ? `modal` : `inline`,
    A = N(f, O),
    j = ce(A),
    [M, F] = (0, X.useState)(null),
    I =
      A != null && M != null && M.attemptKey === j && M.purchaseAttemptId !== A.purchaseAttemptId
        ? { ...A, purchaseAttemptId: M.purchaseAttemptId }
        : A,
    L = v?.visible ?? !0,
    ue = (0, X.useRef)(0),
    de = (0, X.useRef)(!1),
    fe = (0, X.useRef)(null),
    me = +!!L,
    ye;
  n[0] !== L || n[1] !== me
    ? ((ye = { visible: L, number: me }), (n[0] = L), (n[1] = me), (n[2] = ye))
    : (ye = n[2]);
  let [R, Ce] = (0, X.useState)(ye);
  R.visible !== L && Ce({ visible: L, number: R.number + +!!L });
  let z = R.number <= 1 ? `new` : `retained_reopen`,
    we = (0, X.useRef)(void 0),
    De = (0, X.useRef)(!0),
    Oe = (0, X.useRef)(!1),
    B = (0, X.useRef)(void 0),
    V = (0, X.useRef)(null),
    ke = (0, X.useRef)(!1),
    Ae;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ae = new Set()), (n[3] = Ae)) : (Ae = n[3]);
  let je = (0, X.useRef)(Ae),
    Ne = (0, X.useRef)(L),
    H = k(I)
      ? {
          ...I,
          funnelMeasurementEnabled: L ? !0 : void 0,
          opening: { openingNumber: R.number, actualPresentation: O, openingKind: z },
        }
      : I,
    Pe;
  n[4] === H
    ? (Pe = n[5])
    : ((Pe = () => (De.current || H == null ? H : { ...H, funnelMeasurementEnabled: void 0 })),
      (n[4] = H),
      (n[5] = Pe));
  let U = Pe,
    Fe;
  n[6] !== I || n[7] !== U || n[8] !== p || n[9] !== L || n[10] !== y || n[11] !== _
    ? ((Fe = () => {
        if (
          !(V.current == null || V.current !== B.current || I == null || (k(I) && !L)) &&
          P(je.current, V.current, `ready`) &&
          (_e(y, U(), V.current), !ke.current)
        ) {
          ke.current = !0;
          let e = U();
          e != null && he(y, e, p, _);
        }
      }),
      (n[6] = I),
      (n[7] = U),
      (n[8] = p),
      (n[9] = L),
      (n[10] = y),
      (n[11] = _),
      (n[12] = Fe))
    : (Fe = n[12]);
  let W = Fe,
    G = j,
    Re = (0, X.useRef)(G),
    ze = (0, X.useRef)(G),
    Be,
    Ve;
  (n[13] !== G || n[14] !== L
    ? ((Be = () => {
        (L &&
          !Ne.current &&
          ((ze.current = G),
          (de.current = !1),
          (fe.current = null),
          (we.current = B.current),
          (De.current = !0)),
          (Ne.current = L));
      }),
      (Ve = [G, L]),
      (n[13] = G),
      (n[14] = L),
      (n[15] = Be),
      (n[16] = Ve))
    : ((Be = n[15]), (Ve = n[16])),
    (0, X.useLayoutEffect)(Be, Ve));
  let He;
  n[17] !== G || n[18] !== U || n[19] !== y
    ? ((He = (e, t) => {
        (ze.current !== G && ((ze.current = G), (de.current = !1)),
          !de.current && ((de.current = !0), ve(y, U(), e, t)));
      }),
      (n[17] = G),
      (n[18] = U),
      (n[19] = y),
      (n[20] = He))
    : (He = n[20]);
  let K = He,
    Ue;
  n[21] !== G || n[22] !== a || n[23] !== K || n[24] !== v
    ? ((Ue = () => {
        (K(
          Oe.current && Re.current === G
            ? be.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION
            : be.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION,
          B.current,
        ),
          v == null ? a() : v.onDismiss());
      }),
      (n[21] = G),
      (n[22] = a),
      (n[23] = K),
      (n[24] = v),
      (n[25] = Ue))
    : (Ue = n[25]);
  let q = Ue,
    J = (0, X.useRef)(null),
    Y = b.accountId === c && b.userId === l,
    Ge = (0, X.useRef)(Y),
    Ke,
    Je;
  (n[26] === Y
    ? ((Ke = n[27]), (Je = n[28]))
    : ((Ke = () => {
        Ge.current = Y;
        let e = new AbortController();
        return (
          (J.current = e),
          Y || e.abort(),
          () => {
            ((Ge.current = !1), e.abort());
          }
        );
      }),
      (Je = [Y]),
      (n[26] = Y),
      (n[27] = Ke),
      (n[28] = Je)),
    (0, X.useLayoutEffect)(Ke, Je));
  let Ye;
  n[29] !== W || n[30] !== U || n[31] !== R.number || n[32] !== z || n[33] !== y
    ? ((Ye = () => {
        let e = U();
        if (e == null || !k(e) || R.number === 0) return;
        let t = `${e.checkoutLaunchId}:${R.number}`;
        fe.current !== t &&
          ((fe.current = t), Se(y, e, { checkoutId: B.current, checkoutOpeningId: t, openingKind: z }), W());
      }),
      (n[29] = W),
      (n[30] = U),
      (n[31] = R.number),
      (n[32] = z),
      (n[33] = y),
      (n[34] = Ye))
    : (Ye = n[34]);
  let Xe = (0, X.useEffectEvent)(Ye),
    Ze;
  n[35] !== Y || n[36] !== Xe || n[37] !== L
    ? ((Ze = () => {
        Y && L && Xe();
      }),
      (n[35] = Y),
      (n[36] = Xe),
      (n[37] = L),
      (n[38] = Ze))
    : (Ze = n[38]);
  let Qe;
  (n[39] !== G || n[40] !== Y || n[41] !== L
    ? ((Qe = [G, Y, L]), (n[39] = G), (n[40] = Y), (n[41] = L), (n[42] = Qe))
    : (Qe = n[42]),
    (0, X.useLayoutEffect)(Ze, Qe));
  let $e;
  n[43] === D
    ? ($e = n[44])
    : (($e = () => {
        if (J.current == null) throw Error(`Checkout is not mounted`);
        if ((J.current.signal.throwIfAborted(), ue.current !== D)) throw Error(`Checkout was restarted`);
        if (!Ge.current) throw Error(`Checkout account changed`);
      }),
      (n[43] = D),
      (n[44] = $e));
  let Q = $e,
    et;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = () => {
        if (J.current == null) throw Error(`Checkout is not mounted`);
        return J.current.signal;
      }),
      (n[45] = et))
    : (et = n[45]);
  let tt = v?.onBusyChange,
    nt;
  n[46] !== S || n[47] !== a
    ? ((nt = async (e) => {
        (a(), await S(e));
      }),
      (n[46] = S),
      (n[47] = a),
      (n[48] = nt))
    : (nt = n[48]);
  let rt;
  n[49] !== g || n[50] !== x || n[51] !== a || n[52] !== y
    ? ((rt = (e, t, n) => {
        if (g != null) {
          g.onCompleted(e, t, n);
          return;
        }
        (t
          ? y
              .get(ae)
              .warning(
                x.formatMessage({
                  id: `checkout.creditModal.autoReloadFailed`,
                  defaultMessage: `Credits added, but auto-reload couldn’t be enabled. Review auto-reload in Settings.`,
                  description: `Warning after a credit payment succeeds but automatic reload setup fails; do not suggest paying again`,
                }),
              )
          : y
              .get(ae)
              .success(
                x.formatMessage({
                  id: `checkout.creditPurchase.success`,
                  defaultMessage: `Credits added`,
                  description: `Toast after a personal credit purchase completes`,
                }),
              ),
          a());
      }),
      (n[49] = g),
      (n[50] = x),
      (n[51] = a),
      (n[52] = y),
      (n[53] = rt))
    : (rt = n[53]);
  let it;
  n[54] !== c ||
  n[55] !== Q ||
  n[56] !== K ||
  n[57] !== te ||
  n[58] !== _ ||
  n[59] !== tt ||
  n[60] !== nt ||
  n[61] !== rt
    ? ((it = {
        accountId: c,
        search: _,
        assertCurrent: Q,
        getSignal: et,
        onBusyChange: tt,
        onPurchased: te,
        onOutcome: K,
        onReturn: nt,
        onCompleted: rt,
      }),
      (n[54] = c),
      (n[55] = Q),
      (n[56] = K),
      (n[57] = te),
      (n[58] = _),
      (n[59] = tt),
      (n[60] = nt),
      (n[61] = rt),
      (n[62] = it))
    : (it = n[62]);
  let at = it,
    [ot, st] = (0, X.useState)(null),
    [ct, lt] = (0, X.useState)(!0),
    ut;
  n[63] !== G || n[64] !== g || n[65] !== K
    ? ((ut = () => {
        (K(
          Oe.current && Re.current === G
            ? be.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION
            : be.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION,
          B.current,
        ),
          g?.onDismiss());
      }),
      (n[63] = G),
      (n[64] = g),
      (n[65] = K),
      (n[66] = ut))
    : (ut = n[66]);
  let dt = ut,
    ft;
  n[67] !== dt || n[68] !== g
    ? ((ft = g == null ? void 0 : { ...g, onDismiss: dt }), (n[67] = dt), (n[68] = g), (n[69] = ft))
    : (ft = n[69]);
  let pt;
  n[70] !== c ||
  n[71] !== I ||
  n[72] !== G ||
  n[73] !== D ||
  n[74] !== W ||
  n[75] !== U ||
  n[76] !== h ||
  n[77] !== z ||
  n[78] !== v ||
  n[79] !== y ||
  n[80] !== _ ||
  n[81] !== l
    ? ((pt = (e) => {
        if (!Ge.current || ue.current !== D || J.current?.signal.aborted) return;
        let t = v?.onSessionChange(e, I) === !0;
        if (v != null && !v.visible) return;
        (Re.current !== G &&
          ((Re.current = G),
          (de.current = !1),
          (Oe.current = !1),
          V.current !== e.checkout_session_id && (V.current = null)),
          (B.current = e.checkout_session_id),
          (De.current = z !== `retained_reopen` || we.current === e.checkout_session_id || t));
        let n = U();
        (Ee({
          userId: l,
          accountId: c,
          context: {
            checkoutId: e.checkout_session_id,
            processorEntity: e.processor_entity,
            checkoutKind: e.checkout_kind ?? `standalone_credit`,
            entryPoint: e.entry_point ?? void 0,
            isCheckoutModalEnabled: !0,
            ...le(e.checkout_kind ?? `standalone_credit`, e.checkout_session_id, _),
          },
          analytics: n,
        }),
          Oe.current || ((Oe.current = !0), h?.(), n != null && ge(y, n)),
          P(je.current, e.checkout_session_id, `shown`) && xe(y, n, e, _),
          W());
      }),
      (n[70] = c),
      (n[71] = I),
      (n[72] = G),
      (n[73] = D),
      (n[74] = W),
      (n[75] = U),
      (n[76] = h),
      (n[77] = z),
      (n[78] = v),
      (n[79] = y),
      (n[80] = _),
      (n[81] = l),
      (n[82] = pt))
    : (pt = n[82]);
  let mt;
  n[83] !== D || n[84] !== W
    ? ((mt = (e) => {
        Ge.current && ue.current === D && !J.current?.signal.aborted && ((V.current = e), W());
      }),
      (n[83] = D),
      (n[84] = W),
      (n[85] = mt))
    : (mt = n[85]);
  let ht;
  n[86] !== C.completion$ || n[87] !== C.pending$ || n[88] !== D || n[89] !== v || n[90] !== y
    ? ((ht = (e) => {
        ue.current === D && (y.set(C.pending$, e), v?.onBusyChange(e || y.get(C.completion$) != null));
      }),
      (n[86] = C.completion$),
      (n[87] = C.pending$),
      (n[88] = D),
      (n[89] = v),
      (n[90] = y),
      (n[91] = ht))
    : (ht = n[91]);
  let gt;
  n[92] !== I?.purchaseAttemptId || n[93] !== Q || n[94] !== G || n[95] !== g || n[96] !== F
    ? ((gt = () => {
        (Q(),
          g != null && Te.getState().setCheckoutSessionUpdateError(null),
          (ue.current += 1),
          (Oe.current = !1),
          (B.current = void 0),
          (V.current = null),
          I?.purchaseAttemptId != null && F({ attemptKey: G, purchaseAttemptId: crypto.randomUUID() }),
          se(ue.current));
      }),
      (n[92] = I?.purchaseAttemptId),
      (n[93] = Q),
      (n[94] = G),
      (n[95] = g),
      (n[96] = F),
      (n[97] = gt))
    : (gt = n[97]);
  let _t;
  n[98] !== C || n[99] !== at || n[100] !== y
    ? ((_t = (...e) => {
        let t = e;
        return C.complete(y, at, ...t);
      }),
      (n[98] = C),
      (n[99] = at),
      (n[100] = y),
      (n[101] = _t))
    : (_t = n[101]);
  let vt;
  n[102] !== O ||
  n[103] !== Q ||
  n[104] !== q ||
  n[105] !== d ||
  n[106] !== ot ||
  n[107] !== H ||
  n[108] !== v ||
  n[109] !== _ ||
  n[110] !== ft ||
  n[111] !== pt ||
  n[112] !== mt ||
  n[113] !== ht ||
  n[114] !== gt ||
  n[115] !== _t ||
  n[116] !== m
    ? ((vt = {
        actualPresentation: O,
        retention: v,
        workHomeBeacon: m,
        inline: ft,
        footerTarget: ot,
        onNewCardSelected: lt,
        search: _,
        continuationTask: d,
        creditCheckoutAnalytics: H,
        assertCurrent: Q,
        onClose: q,
        onPresented: pt,
        onReady: mt,
        onPendingChange: ht,
        onRestart: gt,
        onCompleted: _t,
      }),
      (n[102] = O),
      (n[103] = Q),
      (n[104] = q),
      (n[105] = d),
      (n[106] = ot),
      (n[107] = H),
      (n[108] = v),
      (n[109] = _),
      (n[110] = ft),
      (n[111] = pt),
      (n[112] = mt),
      (n[113] = ht),
      (n[114] = gt),
      (n[115] = _t),
      (n[116] = m),
      (n[117] = vt))
    : (vt = n[117]);
  let yt = vt,
    bt = Y && (E || w != null),
    $;
  if (!Y) {
    let e;
    (n[118] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(`p`, {
          role: `alert`,
          children: (0, Z.jsx)(o, {
            id: `checkout.creditModal.accountChanged`,
            defaultMessage: `Your account changed. Close checkout and start again.`,
            description: `Checkout stops after the signed-in account changes, preventing payment for the previous account`,
          }),
        })),
        (n[118] = e))
      : (e = n[118]),
      ($ = e));
  } else if (T == null) {
    let e;
    (n[119] !== D || n[120] !== yt
      ? ((e = (0, Z.jsx)(Ie, { presentation: yt }, D)), (n[119] = D), (n[120] = yt), (n[121] = e))
      : (e = n[121]),
      ($ = e));
  } else {
    let e;
    n[122] === T
      ? (e = n[123])
      : ((e =
          T === `verification-unknown`
            ? (0, Z.jsx)(o, {
                id: `checkout.creditModal.verificationPending`,
                defaultMessage: `We couldn’t confirm your payment status. Check again before starting another purchase.`,
                description: `Payment was submitted but verification is unavailable; checking again never charges again`,
              })
            : null),
        (n[122] = T),
        (n[123] = e));
    let r;
    n[124] === T
      ? (r = n[125])
      : ((r =
          T === `fulfillment-unknown`
            ? (0, Z.jsx)(o, {
                id: `checkout.creditModal.fulfillmentPending`,
                defaultMessage: `Your payment is complete, but your credits may take a moment to appear`,
                description: `Credit payment succeeded but fulfillment is temporarily unavailable`,
              })
            : null),
        (n[124] = T),
        (n[125] = r));
    let i;
    n[126] !== e || n[127] !== r
      ? ((i = (0, Z.jsxs)(`p`, { role: `status`, children: [e, r] })),
        (n[126] = e),
        (n[127] = r),
        (n[128] = i))
      : (i = n[128]);
    let a = w === `pending` || w === `confirmed`,
      s;
    n[129] !== C || n[130] !== at || n[131] !== y
      ? ((s = () => {
          C.retry(y, at);
        }),
        (n[129] = C),
        (n[130] = at),
        (n[131] = y),
        (n[132] = s))
      : (s = n[132]);
    let c;
    n[133] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Z.jsx)(o, {
          id: `checkout.creditModal.checkPayment`,
          defaultMessage: `Check payment status`,
          description: `Recheck and fulfill the existing checkout without submitting another payment`,
        })),
        (n[133] = c))
      : (c = n[133]);
    let l;
    n[134] !== a || n[135] !== s
      ? ((l = (0, Z.jsx)(t, { disabled: a, onClick: s, children: c })),
        (n[134] = a),
        (n[135] = s),
        (n[136] = l))
      : (l = n[136]);
    let u;
    (n[137] !== i || n[138] !== l
      ? ((u = (0, Z.jsxs)(oe, { children: [i, l] })), (n[137] = i), (n[138] = l), (n[139] = u))
      : (u = n[139]),
      ($ = u));
  }
  if (g != null) {
    let e;
    n[140] !== dt || n[141] !== g
      ? ((e = { ...g, onDismiss: dt }), (n[140] = dt), (n[141] = g), (n[142] = e))
      : (e = n[142]);
    let t;
    return (
      n[143] !== bt || n[144] !== $ || n[145] !== e
        ? ((t = (0, Z.jsx)(Le, { presentation: e, busy: bt, children: $ })),
          (n[143] = bt),
          (n[144] = $),
          (n[145] = e),
          (n[146] = t))
        : (t = n[146]),
      t
    );
  }
  let xt = v?.visible ?? !0,
    St;
  return (
    n[147] !== bt || n[148] !== q || n[149] !== $ || n[150] !== ct || n[151] !== xt
      ? ((St = (0, Z.jsx)(Me, {
          visible: xt,
          busy: bt,
          onClose: q,
          footerRef: st,
          isNewCardSelected: ct,
          children: $,
        })),
        (n[147] = bt),
        (n[148] = q),
        (n[149] = $),
        (n[150] = ct),
        (n[151] = xt),
        (n[152] = St))
      : (St = n[152]),
    St
  );
}
var qe, X, Z;
function Je() {
  return (Je = e(() => {
    ((qe = w()),
      M(),
      me(),
      De(),
      we(),
      R(),
      c(),
      (X = D()),
      v(),
      m(),
      de(),
      S(),
      g(),
      y(),
      ye(),
      T(),
      Y(),
      je(),
      Ge(),
      Fe(),
      (Z = E()));
  }))();
}
export { Je as n, Y as r, Ke as t };
//# sourceMappingURL=dialog-38a6e1da89bd.js.map
