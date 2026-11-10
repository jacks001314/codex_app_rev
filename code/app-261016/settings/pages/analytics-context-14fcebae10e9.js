import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $kt as t,
  Fkt as n,
  Gkt as r,
  Ikt as i,
  Pkt as a,
  Qkt as o,
  Rkt as s,
  zkt as c,
} from "./app-initial-ad16eaadf81f.js";
import { Ct as l, Et as u, St as d, Tt as f, bt as p, wt as m, xt as h } from "./tax-e50b6a7c0765.js";
function g({ checkoutLifetimeId: e, opening: t, ...n }) {
  if (
    (e != null && e !== n.checkoutLaunchId) ||
    (t?.checkoutLifetimeId != null && t.checkoutLifetimeId !== n.checkoutLaunchId)
  )
    return;
  let r =
      t?.openingNumber != null && t.actualPresentation != null && t.openingKind != null
        ? {
            openingNumber: t.openingNumber,
            actualPresentation: t.actualPresentation,
            openingKind: t.openingKind,
          }
        : void 0,
    i = n.actualPresentation ?? t?.actualPresentation;
  return i == null && r == null ? n : { ...n, actualPresentation: i, ...(r == null ? {} : { opening: r }) };
}
function _({ userId: e, accountId: t, context: n, analytics: r }) {
  if (typeof window > `u`) return;
  let i = M.safeParse({ userId: e, accountId: t, context: n, analytics: r, savedAt: Date.now() });
  if (i.success)
    try {
      window.sessionStorage.setItem(A + n.checkoutId, JSON.stringify(i.data));
    } catch {}
}
function v({ userId: e, accountId: t, checkoutId: n, processorEntity: r }) {
  return y({ userId: e, accountId: t, checkoutId: n, processorEntity: r })?.context;
}
function y({ userId: e, accountId: t, checkoutId: n, processorEntity: r }) {
  if (!(typeof window > `u` || !e || !t || !n || !r))
    try {
      let i = A + n,
        a = M.safeParse(JSON.parse(window.sessionStorage.getItem(i) ?? `null`));
      if (!a.success) return;
      let o = a.data,
        s = Date.now() - o.savedAt;
      if (s < 0 || s > j) {
        window.sessionStorage.removeItem(i);
        return;
      }
      if (
        o.userId !== e ||
        o.accountId !== t ||
        o.context.checkoutId !== n ||
        o.context.processorEntity !== r
      )
        return;
      if (o.analytics == null) return { ...o, analytics: void 0 };
      let c = g(o.analytics);
      return { ...o, analytics: c };
    } catch {
      return;
    }
}
function b({
  userId: e,
  accountId: t,
  navigationState: n,
  previousCheckoutId: r,
  previousProcessorEntity: i,
  checkoutId: a,
  processorEntity: o,
}) {
  let s = y({ userId: e, accountId: t, checkoutId: r, processorEntity: i });
  if (s == null) return;
  let c = C({ navigationState: n, userId: e, accountId: t, checkoutSessionId: r, processorEntity: i });
  _({ userId: e, accountId: t, context: { ...s.context, checkoutId: a, processorEntity: o }, analytics: c });
}
function x({ checkoutSessionId: e, checkoutPayload: t, userId: n, analytics: r }) {
  let { credit_purchase_data: i, billing_details: a } = t;
  if (!(typeof window > `u` || !n || i == null))
    try {
      window.sessionStorage.setItem(
        k + e,
        JSON.stringify({
          viewerId: n,
          checkoutPayload: {
            entry_point: t.entry_point,
            checkout_source: t.checkout_source,
            credit_checkout_launch: t.credit_checkout_launch,
            checkout_ui_mode: t.checkout_ui_mode,
            cancel_url: t.cancel_url,
            supports_saved_payment_link: t.supports_saved_payment_link,
            supports_oaics_credit_modal: t.supports_oaics_credit_modal,
            credit_purchase_data: {
              account_id: i.account_id,
              quantity: i.quantity,
              unit: i.unit,
              client: i.client,
              discount_offer_id: i.discount_offer_id,
            },
            billing_details: a == null ? a : { country: a.country, currency: a.currency },
          },
          ...c({ analytics: r, accountId: i.account_id, checkoutSessionId: e }),
        }),
      );
    } catch {}
}
function S({ checkoutSessionId: e, userId: t }) {
  if (!(typeof window > `u` || !t))
    try {
      let n = window.sessionStorage.getItem(k + e);
      if (n == null) return;
      let r = JSON.parse(n);
      if (
        typeof r != `object` ||
        !r ||
        !(`viewerId` in r) ||
        r.viewerId !== t ||
        !(`checkoutPayload` in r) ||
        r.checkoutPayload == null ||
        typeof r.checkoutPayload != `object` ||
        !(`credit_purchase_data` in r.checkoutPayload) ||
        r.checkoutPayload.credit_purchase_data == null ||
        typeof r.checkoutPayload.credit_purchase_data != `object`
      )
        return;
      let i = r.checkoutPayload.credit_purchase_data;
      return !(`account_id` in i) ||
        typeof i.account_id != `string` ||
        !(`quantity` in i) ||
        typeof i.quantity != `number` ||
        !Number.isSafeInteger(i.quantity) ||
        !(`unit` in i) ||
        i.unit !== `credit`
        ? void 0
        : r;
    } catch {
      return;
    }
}
function C({ navigationState: e, accountId: t, checkoutSessionId: n, processorEntity: r, userId: i }) {
  let o = E({ context: e?.[a], accountId: t, checkoutSessionId: n });
  if (o != null) return o;
  let s = S({ checkoutSessionId: n, userId: i });
  return (
    E({
      context: s && `creditCheckoutAnalytics` in s ? s.creditCheckoutAnalytics : void 0,
      accountId: t,
      checkoutSessionId: n,
    }) ?? y({ accountId: t, userId: i, checkoutId: n, processorEntity: r })?.analytics
  );
}
function w({ search: e, accountId: a, userId: o }) {
  if (typeof window > `u` || !a || !o) return;
  let s = new URLSearchParams(e).get(n);
  if (s)
    try {
      let e = i + s,
        n = window.sessionStorage.getItem(e) ?? window.localStorage.getItem(e);
      if (!n) return;
      let c = JSON.parse(n);
      if (typeof c != `object` || !c || !(`userId` in c) || c.userId !== o) return;
      let l = T({ context: c, accountId: a }),
        u = r(l);
      if (l?.checkoutLaunchId !== s || u == null || u > 9e5) {
        l?.checkoutLaunchId === s && (window.sessionStorage.removeItem(e), window.localStorage.removeItem(e));
        return;
      }
      try {
        (window.sessionStorage.setItem(e, JSON.stringify({ ...l, accountId: a, userId: o })),
          window.localStorage.removeItem(e));
      } catch {
        if (!t(l)) return;
      }
      return l;
    } catch {
      return;
    }
}
function T({ context: e, accountId: t }) {
  let n = D.safeParse(e);
  if (!n.success || n.data.accountId !== t) return;
  let { accountId: r, ...i } = n.data;
  return g(i);
}
function E({ context: e, accountId: t, checkoutSessionId: n }) {
  let r = O.safeParse(e);
  if (!r.success || r.data.accountId !== t || r.data.checkoutSessionId !== n) return;
  let { accountId: i, checkoutSessionId: a, ...o } = r.data;
  return g(o);
}
var D, O, k, A, j, M;
function N() {
  return (N = e(() => {
    (d(),
      o(),
      (D = f({
        accountId: u().min(1),
        checkoutLaunchId: u().min(1),
        checkoutLifetimeId: u().min(1).optional(),
        purchaseAttemptId: u().min(1).optional(),
        creditCheckoutSurface: h(s),
        activationStartedAtMs: m().finite().positive().optional(),
        originEligible: p().optional(),
        autoReloadEnabledAtEntry: p().optional(),
        funnelMeasurementEnabled: l(!0).optional(),
        actualPresentation: h([`full_page`, `modal`, `inline`]).optional(),
        opening: f({
          checkoutLifetimeId: u().min(1).optional(),
          openingNumber: m().int().positive().optional(),
          actualPresentation: h([`full_page`, `modal`, `inline`]).optional(),
          openingKind: h([`new`, `retained_reopen`]).optional(),
        })
          .passthrough()
          .optional(),
        modalExperiment: f({
          group: h([`control`, `treatment`, `not_enrolled`, `unknown`]),
          ruleId: u(),
        }).optional(),
        webMergeExperiment: f({
          experiment: u().regex(/^[A-Za-z0-9_-]{1,200}$/),
          group: u()
            .min(1)
            .max(100)
            .refine((e) => e.trim().length > 0),
          requestedPresentation: h([`full_page`, `modal`, `inline`]),
          ruleId: u().regex(/^[A-Za-z0-9_-]{10,64}$/),
        }).optional(),
      })),
      (O = D.extend({ checkoutSessionId: u().min(1) })),
      (k = `oai/apps/creditCheckoutDocumentHandoff/`),
      (A = `oai/apps/creditCheckoutEventContext/`),
      (j = 864e5),
      (M = f({
        userId: u().min(1),
        accountId: u().min(1),
        savedAt: m().finite(),
        analytics: D.omit({ accountId: !0 }).optional(),
        context: f({
          checkoutId: u().min(1),
          processorEntity: u().min(1),
          checkoutKind: l(`standalone_credit`),
          entryPoint: u().optional(),
          source: u().optional(),
          isCheckoutModalEnabled: p(),
        }),
      })));
  }))();
}
export { N as a, b as c, T as i, v as n, x as o, w as r, _ as s, C as t };
//# sourceMappingURL=analytics-context-14fcebae10e9.js.map
