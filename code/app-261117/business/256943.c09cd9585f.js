export const __rspack_esm_ids = [256943]
export const __webpack_modules__ = {
  nYAY(e, t, n) {
    var a = n("RY1E"),
      r = n("O3Pw")
    let l = {
        ...r.We,
        standardUsage: {
          id: "pricing.proTier.standardUsage",
          defaultMessage: "More Work and Codex",
          description: "Work and Codex benefit for the Pro 100 tier",
        },
        summaryUsage: {
          id: "pricing.proTier.summaryUsage",
          defaultMessage: "More Work and Codex usage",
          description:
            "Benefit on the summary Pro pricing card describing increased usage across Work and Codex before choosing a tier",
        },
        moreUsage: {
          id: "pricing.proTier.moreUsage",
          defaultMessage: "Faster Work and Codex",
          description: "Work and Codex benefit for the Pro 200 tier",
        },
        maxUsage: {
          id: "pricing.proTier.maxUsage",
          defaultMessage: "Fastest Work and Codex",
          description: "Work and Codex benefit for the Pro 500 tier",
        },
      },
      i = {
        ...r.DZ,
        ...(0, a.Y)({
          plusHeadline: { id: "pricing.pageRedesign.plus.headline", defaultMessage: "Your AI assistant" },
        }),
        proHeadline: {
          id: "pricing.pageRedesign.pro.headline",
          defaultMessage: "Maximum power",
          description:
            "Prominent benefit headline below the plan name in the redesigned Pro pricing card. It emphasizes maximum capability for ambitious work and may wrap to two lines.",
        },
      },
      o = {
        ...r.op,
        ...(0, a.Y)({
          goSummary: {
            id: "pricing.pageRedesign.go.summary.everythingAndValueProps",
            defaultMessage: "Write, learn, create, and chat more with extended usage of core intelligence.",
          },
          plusSummary: {
            id: "pricing.pageRedesign.plus.summary.everythingAndValueProps",
            defaultMessage: "Unlock advanced intelligence that adapts to your preferences the more you use it.",
          },
          proSummary: {
            id: "pricing.pageRedesign.pro.summary.everythingAndValueProps",
            defaultMessage: "For people who rely on our most powerful intelligence throughout the workday.",
          },
        }),
        plusAdvancedIntelligence: {
          id: "pricing.pageRedesign.plus.advancedIntelligence.everythingAndValueProps",
          defaultMessage: "Advanced intelligence for complex work",
          description:
            "Value-proposition line on the Plus pricing card describing advanced intelligence for complex work.",
        },
        plusWorkAgent: {
          id: "pricing.pageRedesign.plus.workAgent.everythingAndValueProps",
          defaultMessage: "Work agent to act across apps and files",
          description:
            "Short value-proposition line on the redesigned Plus pricing card. It describes the Work agent acting across apps and files; preserve the capitalization of the product name Work.",
        },
      }
    ;(r.Kc,
      (0, a.Y)({
        freeSummary: {
          id: "pricing.pageRedesign.free.summary.newHeader",
          defaultMessage: "See how AI can help find answers, explore ideas, and get things done in life and work.",
        },
      }),
      r.eY,
      r.JA,
      r.i$,
      (0, a.Y)({
        title: {
          id: "pricing.churnedPlusPricingVision.title",
          defaultMessage: "See what\u2019s new with ChatGPT Plus",
        },
        subtitle: {
          id: "pricing.churnedPlusPricingVision.subtitle",
          defaultMessage:
            "Plus now has enhanced Voice, Work mode to take actions in your favorite apps, and our latest advanced models.",
        },
      }),
      n.d(t, {}, { DZ: i, We: l, op: o }))
  },
  Q2Ru(e, t, n) {
    var a = n("XEik"),
      r = n("yTh6")
    a.k5(r.ZV)
    let l = a.g1(a.Yj()).transform(r.SD)
    function i(e) {
      let t = l.safeParse(Object.fromEntries(e))
      return t.success ? t.data : null
    }
    n.d(
      t,
      { K_: () => i, bl: () => r.bl },
      {
        fn: function (e) {
          if ("u" > typeof window)
            try {
              let t = "oai/apps/contextualUpsellId"
              if (null == e.upsellContextId) return void window.localStorage.removeItem(t)
              window.localStorage.setItem(
                t,
                JSON.stringify({
                  value: { upsellContextId: e.upsellContextId, threadId: e.sourceThreadId },
                  expiresAt: Date.now() + 18e5,
                }),
              )
            } catch {}
        },
      },
    )
  },
  GaEn(e, t, n) {
    n.d(t, {
      Cm: () => r,
      zD: () => l,
      rN: () => m,
      mB: () => P,
      R8: () => R,
      re: () => E,
      qf: () => L,
      Ap: () => g,
      ku: () => i,
      x1: () => O,
      Nt: () => _,
      fn: () => f,
      R3: () => h,
      WM: () => y,
      aT: () => p,
      Wd: () => U,
      GJ: () => C,
    })
    let a = "subscription-promotion-setup-return",
      r = "go_promotion_setup_return",
      l = [r, "setup_intent", "setup_intent_client_secret", "redirect_status"]
    function i(e, t) {
      let n = new URL(e)
      for (let e of l) n.searchParams.delete(e)
      return (n.searchParams.set(r, "1"), (n.hash = t), n.toString())
    }
    function o(e) {
      return "object" == typeof e && null != e && !Array.isArray(e)
    }
    function s(e) {
      return o(e) &&
        "string" == typeof e.accountId &&
        "string" == typeof e.userId &&
        "string" == typeof e.promoCode &&
        "string" == typeof e.setupIntentId &&
        "number" == typeof e.createdAt &&
        Number.isFinite(e.createdAt) &&
        (void 0 === e.renewalMandate || "boolean" == typeof e.renewalMandate) &&
        (null == e.promotionAcceptanceOrigin || "cancellation_flow" === e.promotionAcceptanceOrigin)
        ? {
            accountId: e.accountId,
            userId: e.userId,
            promoCode: e.promoCode,
            setupIntentId: e.setupIntentId,
            createdAt: e.createdAt,
            renewalMandate: !0 === e.renewalMandate,
            ...("cancellation_flow" === e.promotionAcceptanceOrigin
              ? { promotionAcceptanceOrigin: e.promotionAcceptanceOrigin }
              : {}),
          }
        : null
    }
    let u = null,
      c = null
    function d(e, t) {
      return e?.accountId === t.accountId && e.userId === t.userId && e.promoCode === t.promoCode
    }
    function p(e, t, n = !1) {
      let r = { ...e, setupIntentId: t.split("_secret_")[0], createdAt: Date.now(), renewalMandate: n }
      u = { context: r, clientSecret: t, persisted: !1 }
      try {
        ;(window.sessionStorage.setItem(a, JSON.stringify(r)), (u.persisted = !0))
      } catch {}
    }
    function m() {
      if ("u" < typeof window) return null
      let e = new URLSearchParams(window.location.search),
        t = e.get("setup_intent") ?? c,
        n = A()
      if (null != n && null != b(n, t)) {
        c = t
        let a = e.get("setup_intent_client_secret")
        n.renewalMandate && a?.split("_secret_")[0] === t && (u = { context: n, clientSecret: a, persisted: !0 })
      }
      return t
    }
    function _(e, t) {
      return b(e, t)?.setupIntentId
    }
    function g(e) {
      let t = A()
      return null == t ? void 0 : _(e, t.setupIntentId)
    }
    function f(e, t) {
      let n = A()
      return null == n ||
        n.accountId !== e.accountId ||
        n.userId !== e.userId ||
        null == t ||
        null == _(n, t) ||
        (n.renewalMandate && h(n, t)?.clientSecret == null)
        ? null
        : {
            accountId: n.accountId,
            userId: n.userId,
            promoCode: n.promoCode,
            ...(null == n.promotionAcceptanceOrigin ? {} : { promotionAcceptanceOrigin: n.promotionAcceptanceOrigin }),
          }
    }
    function h(e, t) {
      let n = b(e, t)
      return null == n
        ? u?.context.renewalMandate && u.context.setupIntentId === t && d(u.context, e)
          ? { clientSecret: null }
          : null
        : n.renewalMandate
          ? { clientSecret: u?.context.setupIntentId === t && d(u.context, e) ? u.clientSecret : null }
          : null
    }
    async function C({ owner: e, returnedSetupIntentId: t, prepare: n, isActive: a }) {
      if (!a()) return null
      let r = _(e, t)
      if (null != r) {
        let t = h(e, r)
        if (null == t) return null
        if (null != t.clientSecret) return t.clientSecret
      }
      let l = await n()
      return a() ? (null != l && p(e, l, !0), l) : null
    }
    function P(e, t) {
      let n = (n) => n.setupIntentId === t && d(n, e)
      null != u && n(u.context) && ((u = null), c === t && (c = null))
      try {
        let e = window.sessionStorage.getItem(a),
          r = s(null == e ? null : JSON.parse(e))
        null != r && n(r) && (window.sessionStorage.removeItem(a), c === t && (c = null))
      } catch {}
    }
    function y(e) {
      if ((o(e) && "SubscriptionRenewalSetupError" === e.name) || I(e)) return !0
      try {
        return e instanceof Error && I(JSON.parse(e.message))
      } catch {
        return !1
      }
    }
    function I(e) {
      if (!o(e) || !o(e.detail)) return !1
      switch (e.detail.error_type) {
        case "promo_invalid_setup":
        case "paypal_promo_invalid_setup":
        case "paypal_promo_payer_mismatch":
        case "subscription_renewal_mandate_terms_changed":
          return !0
        default:
          return !1
      }
    }
    function A() {
      if (null != u && !u.persisted) return u.context
      try {
        let e = window.sessionStorage.getItem(a)
        return s(null == e ? null : JSON.parse(e))
      } catch {
        return u?.context ?? null
      }
    }
    function b(e, t) {
      let n = A()
      if (null == n) return null
      let a = Date.now() - n.createdAt
      return a >= 0 && a <= 18e5 && d(n, e) && t === n.setupIntentId ? n : null
    }
    function E({ onWarningChange: e = () => {} } = {}) {
      let t = null,
        n = null,
        a = !1,
        r = null,
        l = null,
        i = null,
        o = 0,
        s = null,
        u = (l, u) => {
          ;((d(t?.owner, l) && t?.setupIntentId === u) ||
            (o++, (i = null), (r = null), (s = null), (a = !1), (n = null), e(null)),
            (t = { owner: l, setupIntentId: u }))
        }
      return {
        rememberAuthorization: u,
        getSetupIntent: (e, n = null) => (d(t?.owner, e) ? t?.setupIntentId : _(e, n)),
        showWarning(t, a) {
          ;(u(t, a.setup_intent_id), (n = a), e(a))
        },
        acknowledgeWarning(e) {
          null != n && d(t?.owner, e) && (a = !0)
        },
        async completeRenewal({
          owner: l,
          setupIntentId: i,
          stripe: c,
          isActive: p,
          acknowledgeMandateWarning: m,
          finalizePaymentMethod: _,
          saveDefaultPaymentMethod: g,
        }) {
          if (!p()) return { status: "closed" }
          if ((u(l, i), d(r?.owner, l) && r?.setupIntentId === i)) return { status: "complete" }
          let f = o,
            C = () => p() && f === o,
            P = m ?? (a && d(t?.owner, l) && t?.setupIntentId === i)
          try {
            let t,
              a = h(l, i)
            if (null == a) return null
            if (!C()) return { status: "closed" }
            let o = () => {
              let e = Error("Renewal authorization is unavailable")
              return ((e.name = "SubscriptionRenewalSetupError"), e)
            }
            if (null == a.clientSecret) throw o()
            let u = await c.retrieveSetupIntent(a.clientSecret)
            if (!C()) return { status: "closed" }
            if (
              u.error?.type === "api_connection_error" ||
              u.error?.type === "api_error" ||
              u.error?.type === "rate_limit_error"
            )
              throw u.error
            let d = u.setupIntent,
              p = "string" == typeof d?.payment_method ? d.payment_method : d?.payment_method?.id
            if (u.error || d?.id !== i || "succeeded" !== d.status || !p) throw o()
            try {
              t = await ((e, t) => {
                if (s?.key === e) return s.promise
                let n = t().catch((e) => {
                  throw (s?.promise === n && (s = null), e)
                })
                return ((s = { key: e, promise: n }), n)
              })(JSON.stringify([l.accountId, l.userId, l.promoCode, i, p]), () =>
                _(p, { account_id: l.accountId, setup_intent_id: i }),
              )
            } catch (e) {
              if (!C()) return { status: "closed" }
              if (null != e && "object" == typeof e && "status" in e && 404 === e.status) throw o()
              throw e
            }
            if (!C()) return { status: "closed" }
            if (t.canonical_payment_method_id !== p) throw o()
            let m = t.mandate_status ?? "missing"
            if ("active" !== m && !P)
              return ((n = { status: "mandate_warning", setup_intent_id: i, mandate_status: m }), e(n), n)
            if (
              (await g({
                account_id: l.accountId,
                payment_method_id: p,
                intended_usage: "subscription",
                setup_intent_id: i,
              }),
              !C())
            )
              return { status: "closed" }
            return ((r = { owner: l, setupIntentId: i }), { status: "complete" })
          } catch (e) {
            if (!C()) return { status: "closed" }
            throw e
          }
        },
        reset(u = !1) {
          let c = t
          ;((t = null),
            (r = null),
            (s = null),
            (n = null),
            (a = !1),
            (l = null),
            (i = null),
            o++,
            e(null),
            u || null == c || P(c.owner, c.setupIntentId))
        },
        async confirmOnce({ key: e, stripe: t, elements: n, clientSecret: a, confirmParams: r }) {
          if (l?.key === e) return l.result
          if (i?.key === e) return i.promise
          let s = ++o,
            u = (async () => {
              let i =
                null != n
                  ? await t.confirmSetup({ elements: n, confirmParams: r, redirect: "if_required" })
                  : await t.confirmSetup({ clientSecret: a, confirmParams: r, redirect: "if_required" })
              if (i.error) throw i.error
              let u = i.setupIntent,
                c = "string" == typeof u?.payment_method ? u.payment_method : u?.payment_method?.id
              if (
                u?.status !== "succeeded" ||
                !u.id ||
                !c ||
                (null != a && (u.id !== a.split("_secret_")[0] || c !== r.payment_method))
              )
                throw Error("Payment authentication incomplete")
              let d = { setupIntentId: u.id, paymentMethodId: c }
              if (o !== s) throw Error("Payment review is no longer active")
              return ((l = { key: e, result: d }), d)
            })()
          i = { key: e, promise: u }
          try {
            return await u
          } finally {
            o === s && (i = null)
          }
        },
      }
    }
    let x = "lock_timeout",
      T = {
        insufficient_funds: !0,
        expired_card: !0,
        incorrect_number: !0,
        incorrect_cvc: !0,
        invalid_cvc: !0,
        missing_payment_method: !0,
        authentication_failed: !0,
        payment_method_unavailable: !0,
        payment_method_declined: !0,
        other: !0,
      },
      S = new Set([
        "authentication_required",
        "payment_intent_authentication_failure",
        "setup_intent_authentication_failure",
      ]),
      v = new Set(["card_declined", "payment_intent_payment_attempt_failed"]),
      N = new Set([
        "approve_with_id",
        "do_not_honor",
        "generic_decline",
        "lost_card",
        "pickup_card",
        "restricted_card",
        "revocation_of_all_authorizations",
        "revocation_of_authorization",
        "stolen_card",
      ])
    function O(e) {
      for (let t of [e.decline_code, e.code]) if (null != t && Object.prototype.hasOwnProperty.call(T, t)) return t
      return S.has(e.decline_code ?? "") || S.has(e.code ?? "")
        ? "authentication_failed"
        : N.has(e.decline_code ?? "") || v.has(e.code ?? "")
          ? "payment_method_declined"
          : "other"
    }
    let w = [100, 250]
    async function R({ confirmPaymentIntent: e, shouldRetry: t }) {
      let n = await e()
      for (let a of w) {
        if (
          n.error?.code !== x ||
          !t() ||
          (await (function (e) {
            return new Promise((t) => {
              window.setTimeout(t, e)
            })
          })(a),
          !t())
        )
          break
        n = await e()
      }
      return n
    }
    function L(e) {
      return "requires_payment_method" === e.status
        ? O(e.last_payment_error ?? {})
        : "requires_action" === e.status
          ? "authentication_failed"
          : null
    }
    let M = "pix_display_qr_code"
    async function U({
      updateResult: e,
      stripePromise: t,
      isStripeClientBootstrapError: n,
      isPaymentMethodRecoveryEnabled: a,
      isOpen: r,
      cleanupPendingSubscriptionUpdate: l,
      paypalReturnPath: i,
      onDiagnostic: o,
    }) {
      if ("pending" === e.status) return { status: "pending" }
      if ("payment_method_failed" === e.status)
        return (
          l(e.pending_update_payment_intent_id, e.pending_update_invoice_id),
          {
            status: "payment_method_failed",
            reason: e.payment_method_failure_reason ?? "other",
            detail: e.payment_method_failure_detail ?? null,
            source: "update",
          }
        )
      if ("setup_required" === e.status)
        return { status: "setup_required", setupIntentClientSecret: e.setup_intent_client_secret }
      let s = await (async function ({
        updateResult: e,
        stripePromise: t,
        isStripeClientBootstrapError: n,
        isPaymentMethodRecoveryEnabled: a,
        isOpen: r,
        cleanupPendingSubscriptionUpdate: l,
        paypalReturnPath: i,
        onDiagnostic: o,
      }) {
        if ("requires_action" !== e.status) return { status: "complete" }
        let s = { paymentIntentId: e.payment_intent.id, invoiceId: e.pending_update_invoice_id, recoveryEnabled: a }
        k(o, { ...s, type: "confirmation_started" })
        let u = (e) => (
            k(o, {
              ...s,
              type: "confirmation_resolved",
              outcome: e.status,
              failureReason: "payment_method_failed" === e.status ? e.reason : void 0,
            }),
            e
          ),
          c = (t) => (
            l(e.payment_intent.id, e.pending_update_invoice_id),
            u({ status: "payment_method_failed", reason: t })
          )
        try {
          let d,
            p = e.payment_intent?.client_secret,
            m =
              e.payment_intent &&
              "next_action_type" in e.payment_intent &&
              "string" == typeof e.payment_intent.next_action_type
                ? e.payment_intent.next_action_type
                : null
          if ((k(o, { ...s, type: "phase_started", phase: "stripe_bootstrap" }), n || !t || !p))
            throw (
              k(o, { ...s, type: "phase_settled", phase: "stripe_bootstrap", outcome: "unavailable" }),
              Error("Payment confirmation is still loading. Please try again.")
            )
          try {
            d = await t
          } catch (e) {
            throw (k(o, { ...s, type: "phase_settled", phase: "stripe_bootstrap", outcome: "rejected" }), e)
          }
          if (
            (k(o, { ...s, type: "phase_settled", phase: "stripe_bootstrap", outcome: d ? "resolved" : "unavailable" }),
            !d)
          )
            throw Error("Payment confirmation is still loading. Please try again.")
          if (!r()) return (l(e.payment_intent.id, e.pending_update_invoice_id), u({ status: "closed" }))
          let _ =
              "paypal" === e.payment_intent.payment_method_type
                ? "confirmPayPalPayment"
                : a && m === M
                  ? "confirmPixPayment"
                  : "upi_handle_redirect_or_display_qr_code" === m
                    ? "confirmPayment"
                    : "confirmCardPayment",
            g = a || "confirmCardPayment" !== _,
            f = 0,
            h = await R({
              confirmPaymentIntent: () => {
                let e,
                  t = () =>
                    (function ({ stripe: e, paymentIntentClientSecret: t, sdkMethod: n, paypalReturnPath: a }) {
                      if ("confirmPixPayment" === n) return e.confirmPixPayment(t)
                      if ("confirmPayPalPayment" === n) {
                        if (void 0 === a) throw Error("PayPal payment confirmation requires a return path.")
                        return e.confirmPayPalPayment(t, { return_url: new URL(a, window.location.href).href })
                      }
                      return "confirmPayment" === n
                        ? e.confirmPayment({
                            clientSecret: t,
                            redirect: "if_required",
                            confirmParams: { return_url: window.location.href },
                          })
                        : e.confirmCardPayment(t)
                    })({ stripe: d, paymentIntentClientSecret: p, sdkMethod: _, paypalReturnPath: i })
                if (!o) return t()
                let n = { ...s, phase: "stripe_confirmation", sdkCallNumber: ++f, sdkMethod: _, nextActionType: m }
                k(o, { ...n, type: "phase_started" })
                try {
                  e = t()
                } catch (e) {
                  throw (k(o, { ...n, type: "phase_settled", outcome: "rejected" }), e)
                }
                return e.then(
                  (e) => (
                    k(o, {
                      ...n,
                      type: "phase_settled",
                      outcome: e.error?.code === x ? "returned_lock_timeout" : e.error ? "returned_error" : "resolved",
                      paymentIntentStatus: e.paymentIntent?.status,
                      failureReason: e.error ? O(e.error) : void 0,
                    }),
                    e
                  ),
                  (e) => {
                    throw (k(o, { ...n, type: "phase_settled", outcome: "rejected" }), e)
                  },
                )
              },
              shouldRetry: r,
            })
          if (!r()) return (l(e.payment_intent.id, e.pending_update_invoice_id), u({ status: "closed" }))
          if (h.error) {
            if (h.error.code === x) throw Error(h.error.message)
            if (a) return c(O(h.error))
            throw Error(h.error.message)
          }
          let C = "paymentIntent" in h ? h.paymentIntent : null
          if (C?.status === "processing" || (a && C?.status === "requires_action" && m === M))
            return u({ status: "pending" })
          if (null != C) {
            let e = L(C)
            if (null != e && ("requires_payment_method" === C.status || g)) return c(e)
          }
          if (g) {
            if (C?.status === "requires_action") return c("authentication_failed")
            if (C?.status !== "succeeded") return c("other")
          }
        } catch (t) {
          throw (k(o, { ...s, type: "confirmation_rejected" }), l(e.payment_intent.id, e.pending_update_invoice_id), t)
        }
        return u({ status: "complete" })
      })({
        updateResult: e,
        stripePromise: t,
        isStripeClientBootstrapError: n,
        isPaymentMethodRecoveryEnabled: a,
        isOpen: r,
        cleanupPendingSubscriptionUpdate: l,
        paypalReturnPath: i,
        onDiagnostic: o,
      })
      return "payment_method_failed" === s.status ? { ...s, source: "confirmation" } : s
    }
    function k(e, t) {
      try {
        e?.(t)
      } catch {}
    }
  },
  ZfOZ(e, t, n) {
    var a,
      r,
      l,
      i,
      o,
      s,
      u =
        (((a = {}).CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_UNSPECIFIED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_MODAL_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_MODAL_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CONFIRM_CLICKED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CONFIRM_CLICKED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_SUCCEEDED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_SUCCEEDED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_OFFER_CLICKED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_OFFER_CLICKED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PAY_NOW_CLICKED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PAY_NOW_CLICKED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_CLAIMED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_CLAIMED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_MODAL_DISMISSED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_MODAL_DISMISSED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_FAILED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CANCELLATION_FAILED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_GO_UPSELL_MODAL_DISMISSED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_GO_UPSELL_MODAL_DISMISSED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_GO_UPSELL_MODAL_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_GO_UPSELL_MODAL_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_OFFER_MODAL_DISMISSED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_OFFER_MODAL_DISMISSED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_OFFER_MODAL_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_OFFER_MODAL_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_CLAIM_FAILED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_CLAIM_FAILED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_BACK_CLICKED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_BACK_CLICKED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_CLOSED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_CLAIM_MODAL_CLOSED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_DECLINED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PROMOTION_DECLINED"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_RECONSIDERATION_MODAL_SHOWN =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_RECONSIDERATION_MODAL_SHOWN"),
        (a.CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_RECONSIDERATION_MODAL_DISMISSED =
          "CHATGPT_SUBSCRIPTION_CANCELLATION_ACTION_TYPE_PLUS_RECONSIDERATION_MODAL_DISMISSED"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      c =
        (((r = {}).CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UNSPECIFIED"),
        (r.CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UPGRADE = "CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UPGRADE"),
        (r.CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_DOWNGRADE = "CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_DOWNGRADE"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      d =
        (((l = {}).CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_UNSPECIFIED"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_SHOWN =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_SHOWN"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_DISMISSED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_DISMISSED"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAY_NOW_CLICKED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAY_NOW_CLICKED"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_REQUIRES_ACTION =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_REQUIRES_ACTION"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_FAILED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_FAILED"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_ERROR =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_ERROR"),
        (l.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_SUCCEEDED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_MODAL_ACTION_TYPE_PAYMENT_SUCCEEDED"),
        (l.UNRECOGNIZED = "UNRECOGNIZED"),
        l),
      p =
        (((i = {}).CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_UNSPECIFIED"),
        (i.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_SHOWN =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_SHOWN"),
        (i.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_DISMISSED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_DISMISSED"),
        (i.CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_CTA_CLICKED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_RECOVERY_ANNOUNCEMENT_ACTION_TYPE_CTA_CLICKED"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      m =
        (((o = {}).CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_UNSPECIFIED"),
        (o.CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_CTA_CLICKED =
          "CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_CTA_CLICKED"),
        (o.CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_PORTAL_REQUEST_FAILED =
          "CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_PORTAL_REQUEST_FAILED"),
        (o.CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_PORTAL_OPEN_FAILED =
          "CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_PORTAL_OPEN_FAILED"),
        (o.CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_BANNER_SHOWN =
          "CHATGPT_SUBSCRIPTION_BUSINESS_PAYMENT_RECOVERY_ACTION_TYPE_BANNER_SHOWN"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o),
      _ =
        (((s = {}).CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_UNSPECIFIED =
          "CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_UNSPECIFIED"),
        (s.CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_BUSINESS =
          "CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_BUSINESS"),
        (s.CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_SOPHIA =
          "CHATGPT_SUBSCRIPTION_PAYMENT_CONFIRMATION_SURFACE_SOPHIA"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s)
    n.d(
      t,
      {},
      {
        DW: _,
        Ei: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionBusinessPaymentRecoveryAction" },
        Qw: m,
        Sn: { $type: "protobuf_analytics_events.v1.ChatgptPlusCancellationRecapOutcome" },
        aD: c,
        ai: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionCancellationAction" },
        eM: u,
        fB: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionPaymentRecoveryModalAction" },
        fX: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionPaymentConfirmationShown" },
        lE: d,
        t3: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionCancellationAttempt" },
        yP: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionPlanChanged" },
        zU: p,
        zY: { $type: "protobuf_analytics_events.v1.ChatgptSubscriptionPaymentRecoveryAnnouncementAction" },
      },
    )
  },
  AlDs(e, t, n) {
    ;(n("QdUF"), n("WFY2"), n.d(t, {}, { O: function (e, t) {} }))
  },
  IDma(e, t, n) {
    var a = n("SPnB")
    n.d(
      t,
      {},
      {
        t: function (e, t, n) {
          let r = e.get(a.PO)
          return (
            "chatgpt" === r.authMethod &&
            !r.authLoading &&
            !r.accountLoading &&
            r.accountId === t &&
            r.authenticatedAccountId === t &&
            r.userId === n
          )
        },
      },
    )
  },
  IL1g(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      l = n("zd8w"),
      i = n("Wf1j"),
      o = n("ZtSy")
    let s = [
      { label: "OpenAI OpCo, LLC", emphasize: !0 },
      { label: "\uB300\uD45C\uC790: Sam Altman" },
      { label: "\uC8FC\uC18C: 1455 3rd Street, San Francisco, CA 94158" },
      { label: "\uC804\uD654: 02-735-2109" },
      { label: "https://help.openai.com/ko-kr", href: "https://help.openai.com/ko-kr" },
      { label: "816-80-03326", prefix: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638: ", emphasize: !0 },
      { label: "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638: 2026-\uACF5\uC815-0022" },
      { label: "\uC774\uC6A9 \uC57D\uAD00", href: "https://openai.com/ko-KR/policies/row-terms-of-use/" },
      { label: "\uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4 \uC81C\uACF5: Microsoft Azure" },
      {
        label: "\uC0AC\uC5C5\uC790 \uCD94\uAC00 \uC815\uBCF4",
        href: "https://www.ftc.go.kr/selectBizOvrCommPop.do?apvPermMgtNo=2026%EA%B3%B5%EC%A0%950022",
        emphasize: !0,
      },
    ]
    function u(e) {
      let t,
        n,
        i = (0, r.c)(4),
        { inDialog: u } = e,
        c = void 0 !== u && u
      return (
        i[0] !== c
          ? ((t = s.map((e, t) => {
              let n = e.emphasize ? (0, a.jsx)("strong", { children: e.label }) : e.label
              return (0, a.jsxs)(
                l.Fragment,
                {
                  children: [
                    t > 0 && (0, a.jsx)("span", { "aria-hidden": "true", children: "|" }),
                    e.href
                      ? (0, a.jsx)(o.G, {
                          href: e.href,
                          initiator: "open_in_browser_bridge",
                          openTarget: c ? "external-browser" : void 0,
                          underline: "always",
                          children: n,
                        })
                      : (0, a.jsxs)("span", { children: [e.prefix, n] }),
                  ],
                },
                e.label,
              )
            })),
            (i[0] = c),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== t
          ? ((n = (0, a.jsx)("div", {
              className:
                "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
              children: t,
            })),
            (i[2] = t),
            (i[3] = n))
          : (n = i[3]),
        n
      )
    }
    n.d(
      t,
      {},
      {
        e: u,
        w: function (e) {
          let t,
            n,
            l,
            o = (0, r.c)(5),
            { inDialog: s } = e,
            c = void 0 !== s && s,
            d = (0, i.A)()
          return "ko" !== new Intl.Locale(d.locale).language
            ? null
            : (o[0] !== c ? ((t = (0, a.jsx)(u, { inDialog: c })), (o[0] = c), (o[1] = t)) : (t = o[1]),
              o[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, a.jsx)("p", {
                    children:
                      "\uADC0\uD558\uAC00 19\uC138 \uBBF8\uB9CC\uC758 \uC774\uC6A9\uC790\uB85C\uC11C \uADC0\uD558\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774 \uBCF8 \uACC4\uC57D\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uADC0\uD558 \uB610\uB294 \uADC0\uD558\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC740 \uACC4\uC57D\uC744 \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                  })),
                  (o[2] = n))
                : (n = o[2]),
              o[3] !== t
                ? ((l = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n],
                  })),
                  (o[3] = t),
                  (o[4] = l))
                : (l = o[4]),
              l)
        },
      },
    )
  },
  JGV6(e, t, n) {
    var a = n("S2r0"),
      r = n("qmMi"),
      l = n("CLax"),
      i = n("Kwur"),
      o = n("OWtl")
    let s = (0, r.vU)(o.u, (e, { scope: t }) => c(t, e)),
      u = (0, r.vU)(o.u, function (e) {
        let t = ["consumer-billing", e, "wallet"]
        return (0, a.j)({
          queryKey: t,
          queryFn: async ({ signal: n, client: a }) => {
            let r = await i.Request.safeGet("/accounts/{account_id}/customer-balance", {
                parameters: { path: { account_id: e }, query: { include_redemption_status: !0 } },
                signal: n,
              }),
              l = a.getQueryData(t)
            return l?.has_redeemed_gift_card === !0 && null == r.has_redeemed_gift_card
              ? { ...r, has_redeemed_gift_card: !0 }
              : r
          },
          staleTime: 0,
          gcTime: 0,
          retry: !1,
          retryOnMount: !1,
          refetchOnMount: "always",
          refetchOnReconnect: "always",
          refetchOnWindowFocus: "always",
        })
      })
    function c(e, t) {
      return (0, a.j)({
        ...e.query.getOptions(l.sE, t),
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        retryOnMount: !1,
        select: (e) => e.accounts[t],
      })
    }
    n.d(t, {}, { Bd: s, T9: c, kL: u })
  },
  zJca(e, t, n) {
    var a = n("LjYy"),
      r = n("laUo")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t = (0, r.m6)(e.account.plan_type),
            n = e.last_active_subscription.purchase_origin_platform
          if (
            "personal" !== e.account.structure ||
            !e.entitlement.has_active_subscription ||
            e.entitlement.is_active_subscription_gratis ||
            null == t ||
            t.pricePlan === a.x.FREE ||
            "chatgpt_no_payment_trial" === n ||
            "partner_managed" === n ||
            null != (0, r.q8)(n)
          )
            return !1
          let l = (0, r.m6)(e.entitlement.scheduled_plan_change?.plan_type),
            i = null != l && "downgrade" === (0, r.aL)({ currentPlan: t.pricePlan, targetPlan: l.pricePlan })
          return !e.last_active_subscription.will_renew || null != e.entitlement.cancels_at || i
        },
      },
    )
  },
  dFbl(e, t, n) {
    ;(n("Qiwg"),
      n.d(
        t,
        {},
        {
          sX: function (e, t) {
            let n =
              "prior_context_memory_plus_upsell_convo_beacon" === e.beacon_id
                ? "prior_context_memory_plus_upsell_convo_beacon_go"
                : e.beacon_id
            return [
              "go_plus_thinking_high_intent_banner",
              "imagegen_thinking_intent_upsell_banner_go",
              "prior_context_memory_plus_upsell_convo_beacon_go",
            ].includes(n) &&
              ("beacon_banner_info" === e.ui_info.type || "beacon_conversation_inline_info" === e.ui_info.type) &&
              "get_plus" === t.action_v2.action_enum &&
              null == t.action_v2.promo_campaign_id
              ? t.id === `${n}_rejoin_plus_direct_checkout` && "direct" === t.action_v2.checkout_mode
                ? "direct"
                : t.id === `${n}_rejoin_plus` && null == t.action_v2.checkout_mode
                  ? "pricing"
                  : null
              : null
          },
        },
      ))
  },
  VScK(e, t, n) {
    var a = n("Qiwg")
    n.d(
      t,
      {},
      {
        _: function (e, t, n, r, l = !1) {
          if (
            null == e ||
            null == t ||
            null == n ||
            e.account.account_id !== t ||
            e.account.account_owner_id !== n ||
            (e.account.account_user_role ?? "account-owner") !== "account-owner" ||
            (e.account.structure ?? "personal") !== "personal" ||
            e.account.is_deactivated ||
            !1 === e.can_access_with_session
          )
            return null
          let { entitlement: i, last_active_subscription: o } = e,
            s = i.subscription_id,
            u = Date.parse(i.expires_at ?? "")
          if (
            !s ||
            "chatgptplus_no_payment_trial" !== i.subscription_plan ||
            !0 === i.is_active_subscription_gratis ||
            o.subscription_id !== s ||
            "chatgpt_no_payment_trial" !== o.purchase_origin_platform ||
            !0 === o.will_renew ||
            null != i.renews_at ||
            !Number.isFinite(u)
          )
            return null
          let c =
              "plus" === e.account.plan_type &&
              !0 === i.has_active_subscription &&
              u > r &&
              (null == i.trial ||
                (i.trial.is_trialing && (null == i.trial.trial_ends_at || Date.parse(i.trial.trial_ends_at) === u))),
            d =
              (e.account.plan_type ?? "free") === "free" &&
              !0 !== i.has_active_subscription &&
              i.trial?.is_trialing !== !0 &&
              u <= r
          if (!c && !d) return null
          let p = (0, a.tg)({ eligibleOffers: e.eligible_offers, planName: "chatgptplusplan" })
          return {
            kind: c ? "active" : "ended",
            accountId: t,
            userId: n,
            subscriptionId: s,
            expiresAt: u,
            durationDays: i.trial?.duration_days ?? null,
            presentationEnabled: l,
            canUpgradePlus:
              !e.features?.includes("disable_plus_upgrade_ui") ||
              !0 === i.has_active_subscription ||
              !0 === e.account.has_previously_paid_subscription,
            canPurchasePlus: p,
            canExtend: p && e.eligible_promo_campaigns?.plus?.id === "plus-1-month-free",
          }
        },
      },
    )
  },
  UZNF(e, t, n) {
    var a = n("qmMi"),
      r = n("SPnB"),
      l = n("YJm0"),
      i = n("OWtl"),
      o = n("O666"),
      s = n("VScK")
    let u = (0, a.un)(i.u, ({ get: e }) => {
        let t = e(r.chatGptAuthenticatedAccountId$),
          { data: n, isError: a } = e(l.f, t)
        return a || null == n
          ? void 0
          : n.account_ordering?.map((e) => n.accounts[e]).find((e) => e?.account.account_id === t)
      }),
      c = (0, a.vP)(i.u, null),
      d = (0, a.SZ)(
        i.u,
        () => Date.now(),
        ({ get: e, set: t, scope: n }) => {
          let a,
            i = e(r.chatGptAuthenticatedAccountId$),
            o = e(r.o8),
            { data: s, isFetching: u } = e(l.f, i),
            d = s?.account_ordering?.map((e) => s.accounts[e]).find((e) => e?.account.account_id === i),
            p = Date.parse(d?.entitlement.expires_at ?? ""),
            m = JSON.stringify([o, i, d?.entitlement.subscription_id, p]),
            _ = () => {
              let e = Date.now()
              if (
                (t(e),
                null != i &&
                  d?.entitlement.subscription_plan === "chatgptplus_no_payment_trial" &&
                  !0 === d.entitlement.has_active_subscription &&
                  Number.isFinite(p))
              ) {
                if (p <= e) {
                  u || n.get(c) === m || (n.set(c, m), n.query.invalidate(l.f, i))
                  return
                }
                a = setTimeout(_, Math.min(6e4, p - e))
              }
            }
          return (_(), () => clearTimeout(a))
        },
      ),
      p = { layer: "3081805378", parameter: "no_payment_plus_trial_web_enabled" },
      m = (0, a.un)(i.u, ({ get: e }) => e(o.H$, { ...p, disableExposureLog: !0 })),
      _ = (0, a.un)(i.u, ({ get: e }) => {
        let t = (0, s._)(e(u), e(r.chatGptAuthenticatedAccountId$), e(r.o8), e(d))
        return null == t ? null : { ...t, presentationEnabled: e(m) }
      }),
      g = (0, a.un)(i.u, ({ get: e }) => e(_)),
      f = (0, a.un)(i.u, ({ get: e }) => !1)
    n.d(t, {}, { aW: g, hx: d, qM: f, s5: _ })
  },
  Bj0d(e, t, n) {
    var a = n("aXWg")
    n.d(t, { C: () => a.s })
  },
  lHrO(e, t, n) {
    n.d(t, { d: () => P })
    var a = n("ABep"),
      r = n("QosV"),
      l = n("hwkA"),
      i = n("Dfrg")
    let o = (0, n("ESTr").a)({
      name: "xmark-md-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
        visualBounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
        center: { x: 15.99984, y: 15.999756 },
        insets: { top: 8.432983, right: 8.433334, bottom: 8.433472, left: 8.433014 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.99984, y: 15.999756 },
          foreground: { x: 15.99984, y: 15.999756 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M22.0296 8.69659C22.3811 8.34515 22.9516 8.34521 23.3031 8.69659C23.6545 9.04806 23.6545 9.61855 23.3031 9.97002L17.2728 15.9993L23.3031 22.0306C23.6543 22.3821 23.6545 22.9516 23.3031 23.303C22.9517 23.6544 22.3821 23.6543 22.0306 23.303L15.9994 17.2718L9.96908 23.303C9.61758 23.6542 9.04798 23.6544 8.69662 23.303C8.34535 22.9517 8.3455 22.382 8.69662 22.0306L14.7259 15.9993L8.69662 9.97002C8.34515 9.61855 8.34515 9.04806 8.69662 8.69659C9.04809 8.34512 9.61858 8.34512 9.97006 8.69659L15.9994 14.7259L22.0296 8.69659Z" fill="currentColor"/>',
    })
    var s = n("qmMi"),
      u = n("zd8w"),
      c = n("Wf1j"),
      d = n("UOa8"),
      p = n("Sm6l"),
      m = n("HOLv"),
      _ = n("bVeK"),
      g = n("ZWS5"),
      f = n("hZax"),
      h = n("fEjy"),
      C = n("Bj0d")
    function P(e) {
      let t,
        n,
        l,
        i = (0, r.c)(6)
      return (
        i[0] !== e ? (({ liveSurface: t, ...n } = e), (i[0] = e), (i[1] = t), (i[2] = n)) : ((t = i[1]), (n = i[2])),
        i[3] !== t || i[4] !== n
          ? ((l = null == t ? (0, a.jsx)(I, { ...n }) : (0, a.jsx)(y, { ...n, surface: t })),
            (i[3] = t),
            (i[4] = n),
            (i[5] = l))
          : (l = i[5]),
        l
      )
    }
    function y(e) {
      let t,
        n,
        l,
        i,
        o,
        c,
        p,
        m,
        _ = (0, r.c)(23)
      _[0] !== e ? (({ surface: n, ...t } = e), (_[0] = e), (_[1] = t), (_[2] = n)) : ((t = _[1]), (n = _[2]))
      let { userId: g } = (0, d.As)(),
        { client: P, getLayer: y, isLoading: A } = (0, f.cn)()
      _[3] !== P || _[4] !== A || _[5] !== n || _[6] !== g
        ? ((l = "ineligible" !== n && !A && null != g && P.getContext().user.userID === g),
          (_[3] = P),
          (_[4] = A),
          (_[5] = n),
          (_[6] = g),
          (_[7] = l))
        : (l = _[7])
      let b = l,
        E = (0, s.Ul)(!!b && "visible" === n && C.C)
      _[8] !== b || _[9] !== y
        ? ((i = b ? y(h.fM, { disableExposureLog: !0 }) : null),
          (o = i?.get("pricing_backtest_enabled", !1) ?? !1),
          (_[8] = b),
          (_[9] = y),
          (_[10] = i),
          (_[11] = o))
        : ((i = _[10]), (o = _[11]))
      let x = o
      return (
        _[12] !== P || _[13] !== y || _[14] !== i || _[15] !== x || _[16] !== g || _[17] !== E
          ? ((c = () => {
              if (!E || null == i || "visible" !== document.visibilityState || P.getContext().user.userID !== g) return
              let e = y(h.fM, { disableExposureLog: !0 })
              e.ruleID === i.ruleID &&
                e.groupName === i.groupName &&
                e.get("pricing_backtest_enabled", !1) === x &&
                y(h.fM).get("pricing_backtest_enabled", !1)
            }),
            (p = [P, y, i, g, x, E]),
            (_[12] = P),
            (_[13] = y),
            (_[14] = i),
            (_[15] = x),
            (_[16] = g),
            (_[17] = E),
            (_[18] = c),
            (_[19] = p))
          : ((c = _[18]), (p = _[19])),
        (0, u.useEffect)(c, p),
        _[20] !== t || _[21] !== x
          ? ((m = (0, a.jsx)(I, { ...t, useLegacyCloseButton: x })), (_[20] = t), (_[21] = x), (_[22] = m))
          : (m = _[22]),
        m
      )
    }
    function I(e) {
      let t,
        n,
        s,
        u,
        d,
        f = (0, r.c)(16),
        { onClick: h, safeAreaRight: C, compact: P, inlineIcon: y, useLegacyCloseButton: I } = e,
        A = void 0 !== P && P,
        b = void 0 !== y && y,
        E = void 0 !== I && I,
        x = (0, c.A)()
      f[0] !== x
        ? ((t = x.formatMessage({ id: "pricing.comparison.close", defaultMessage: "Close pricing" })),
          (f[0] = x),
          (f[1] = t))
        : (t = f[1])
      let T = t
      f[2] !== b
        ? ((n = b ? (0, a.jsx)(m.I, { asset: (0, g.TE)(i.J) }) : (0, a.jsx)(_.pgK, {})), (f[2] = b), (f[3] = n))
        : (n = f[3])
      let S = n
      return (
        f[4] !== C ? ((s = { marginInlineEnd: C }), (f[4] = C), (f[5] = s)) : (s = f[5]),
        f[6] !== A || f[7] !== S || f[8] !== b || f[9] !== T || f[10] !== h || f[11] !== E
          ? ((u = E
              ? (0, a.jsx)(p.$, {
                  color: "ghostSecondary",
                  size: "iconTouch",
                  "aria-label": T,
                  onClick: h,
                  children: (0, a.jsx)(m.I, { asset: b ? (0, g.TE)(o) : o, focusable: !1 }),
                })
              : (0, a.jsx)(l.$, {
                  color: "secondary",
                  variant: "ghost",
                  pill: !1,
                  size: A ? "md" : "xl",
                  iconSize: A ? "sm" : "lg",
                  uniform: !0,
                  className: "[--button-ring-offset:0px]",
                  "aria-label": T,
                  onClick: h,
                  children: S,
                })),
            (f[6] = A),
            (f[7] = S),
            (f[8] = b),
            (f[9] = T),
            (f[10] = h),
            (f[11] = E),
            (f[12] = u))
          : (u = f[12]),
        f[13] !== s || f[14] !== u
          ? ((d = (0, a.jsx)("div", {
              className: "flex items-start justify-end md:absolute md:end-6 md:top-6",
              style: s,
              children: u,
            })),
            (f[13] = s),
            (f[14] = u),
            (f[15] = d))
          : (d = f[15]),
        d
      )
    }
  },
  VVQu(e, t, n) {
    var a = n("fEjy")
    n.d(
      t,
      {},
      {
        w: function ({ account: e, emailDomainType: t, excludePricingExperiments: n = !1, client: r }) {
          let l
          if (null == e) return { defaultTab: "personal" }
          if ("free" !== e.account.plan_type && "go" !== e.account.plan_type) return {}
          let i = e.eligible_promo_campaigns
          if (i?.pro?.id) return { defaultTab: "personal", highlightPlan: "pro" }
          if ((i?.plus?.id ? (l = "plus") : i?.go?.id && (l = "go"), i?.team?.id != null))
            return { defaultTab: "business", highlightPlan: l }
          if (null != l) return { defaultTab: "personal", highlightPlan: l }
          if ("go" === e.account.plan_type) return { defaultTab: "personal" }
          let o = r.getLayer.bind(r),
            s = n ? null : o(a.mu),
            u = s?.get("web_default_boundary_test_enabled", !1) ? s.get("web_default_plan", null) : null
          switch (u) {
            case "business":
              return { defaultTab: "business" }
            case "plus":
            case "pro":
              return { defaultTab: "personal", highlightPlan: u }
            case "go":
              if (r.checkGate("3600660324")) return { defaultTab: "personal", highlightPlan: "go" }
              break
            case "prolite":
              if (r.checkGate("2238071649")) return { defaultTab: "personal", highlightPlan: "pro" }
          }
          return ("professional" === t || "government" === t || "unknown" === t) && (n || !o(a.cg).get("enabled", !1))
            ? { defaultTab: "business" }
            : { defaultTab: "personal" }
        },
      },
    )
  },
  DGWL(e, t, n) {
    n.d(
      t,
      {},
      {
        u: function (e, { client: t, isLoading: n }) {
          return !1
        },
      },
    )
  },
  LSRv(e, t, n) {
    ;(n.r(t),
      n.d(t, { PricingPlanPage: () => ai, PricingPlanPageContent: () => ao, PricingPlanPageForAccount: () => as }))
    var a = n("ABep"),
      r = n("QosV"),
      l = n("TWc2"),
      i = n("c2F9"),
      o = n("fX79"),
      s = n("Kfsp"),
      u = n("NwSQ"),
      c = n("HqZu"),
      d = n("Qiwg"),
      p = n("nYAY")
    ;(0, n("RY1E").Y)({
      buyNow: { id: "chatgpt.pricing.paidPlanCta.button.buyNow", defaultMessage: "Buy now" },
      startNow: { id: "chatgpt.pricing.paidPlanCta.button.startNow", defaultMessage: "Start now" },
      getStarted: { id: "chatgpt.pricing.paidPlanCta.button.getStarted", defaultMessage: "Get started" },
    })
    var m = n("xUJc"),
      _ = n("iE0s"),
      g = n("Q2Ru"),
      f = n("fOoD"),
      h = n("GaEn"),
      C = n("XyTt"),
      P = n("mBJV"),
      y = n("ZfOZ"),
      I = n("MVHH"),
      A = n("o52g"),
      b = n("iRMi"),
      E = n("T0Rc"),
      x = n("qmMi"),
      T = n("DBCl"),
      S = n("zd8w"),
      v = n("Wf1j"),
      N = n("oyxz"),
      O = n("Ywss"),
      w = n("AlDs"),
      R = n("Ietk"),
      L = n("CLax"),
      M = n("SPnB"),
      U = n("UOa8"),
      k = n("IDma"),
      D = n("tvcH"),
      j = n("Kwur"),
      G = n("OAko"),
      B = n("aTcy"),
      Y = n("Ot7V"),
      F = n("SGsN"),
      H = n("JGV6"),
      W = n("p3vI"),
      V = n("zJca")
    function q(e) {
      let t,
        n,
        a = (0, r.c)(10),
        { entryKey: l, consumedEntryKey: i, ready: o, onConsume: s, onReview: u } = e,
        c = (0, S.useRef)(null),
        d = (0, S.useEffectEvent)(s),
        p = (0, S.useEffectEvent)(u)
      return (
        a[0] !== d || a[1] !== i || a[2] !== l || a[3] !== o || a[4] !== p
          ? ((t = () => {
              if (!o) {
                c.current = null
                return
              }
              null != i
                ? c.current === i && l !== i
                  ? ((c.current = null), p())
                  : l !== c.current && (c.current = null)
                : c.current !== l && ((c.current = l), d(l))
            }),
            (a[0] = d),
            (a[1] = i),
            (a[2] = l),
            (a[3] = o),
            (a[4] = p),
            (a[5] = t))
          : (t = a[5]),
        a[6] !== i || a[7] !== l || a[8] !== o
          ? ((n = [i, l, o]), (a[6] = i), (a[7] = l), (a[8] = o), (a[9] = n))
          : (n = a[9]),
        (0, S.useEffect)(t, n),
        null
      )
    }
    n("dFbl")
    var Z = n("R5hD"),
      $ = n("smwl"),
      K = n("On09"),
      z = n("Cm1Y"),
      Q = n("AleY"),
      J = n("hZax"),
      X = n("aGba"),
      ee = n("ieS4"),
      et = n("vV6o"),
      en = n("i85S"),
      ea = n("eFxf"),
      er = n("xZf4")
    function el(e) {
      let t,
        n,
        l,
        i = (0, r.c)(20),
        {
          preparation: o,
          pricingLocation: s,
          pricingSearch: u,
          cancelHref: c,
          upsellContextId: d,
          checkoutEntryPoint: p,
          exitRequested: m,
          onExitReady: _,
        } = e
      i[0] !== m || i[1] !== _ || i[2] !== o.loadingValueProps || i[3] !== o.skipLoading
        ? ((t = o.skipLoading
            ? (0, a.jsx)(a.Fragment, {})
            : (0, a.jsx)(er.D, {
                context: "pricing-to-checkout",
                valuePropMessages: o.loadingValueProps,
                exitRequested: m,
                onExitReady: _,
              })),
          (i[0] = m),
          (i[1] = _),
          (i[2] = o.loadingValueProps),
          (i[3] = o.skipLoading),
          (i[4] = t))
        : (t = i[4])
      let g = t
      return (
        i[5] !== c ||
        i[6] !== p ||
        i[7] !== g ||
        i[8] !== o.Preparation ||
        i[9] !== o.attemptId ||
        i[10] !== o.onPrepared ||
        i[11] !== o.pricingCheckoutId ||
        i[12] !== o.route ||
        i[13] !== s ||
        i[14] !== u ||
        i[15] !== d
          ? ((n = (0, a.jsx)(
              o.Preparation,
              {
                route: o.route,
                pricingCheckoutId: o.pricingCheckoutId,
                pricingLocation: s,
                pricingSearch: u,
                cancelHref: c,
                onPrepared: o.onPrepared,
                upsellContextId: d,
                checkoutEntryPoint: p,
                loadingContent: g,
              },
              o.attemptId,
            )),
            (i[5] = c),
            (i[6] = p),
            (i[7] = g),
            (i[8] = o.Preparation),
            (i[9] = o.attemptId),
            (i[10] = o.onPrepared),
            (i[11] = o.pricingCheckoutId),
            (i[12] = o.route),
            (i[13] = s),
            (i[14] = u),
            (i[15] = d),
            (i[16] = n))
          : (n = i[16]),
        i[17] !== g || i[18] !== n
          ? ((l = (0, a.jsx)("div", {
              className: "fixed inset-0 z-50 empty:hidden",
              children: (0, a.jsx)(S.Suspense, { fallback: g, children: n }),
            })),
            (i[17] = g),
            (i[18] = n),
            (i[19] = l))
          : (l = i[19]),
        l
      )
    }
    var ei = n("DAA7"),
      eo = n("ibLK"),
      es = n("BQjy"),
      eu = n("yGJW"),
      ec = n("OWtl"),
      ed = n("a6v3"),
      ep = n("LjYy"),
      em = n("UR81"),
      e_ = n("jZDY"),
      eg = n("svjy"),
      ef = n("TSbq")
    function eh(e) {
      e.get(F.Id).danger(e.get(eg.g).formatMessage(m.W.subscriptionUpdateUnavailable), {
        errorAnalytics: { toastId: "pricingPlanPage.subscriptionUpdateUnavailable" },
      })
    }
    var eC = n("G4Vg"),
      eP = n("CWeU"),
      ey = n("ASxG"),
      eI = n("rvFo")
    let eA = ey.aig().min(0).max(1),
      eb = (0, x.RD)(ec.u, ({ get: e }) => {
        let {
            authLoading: t,
            authMethod: n,
            authenticatedAccountId: a,
            authenticatedUserId: r,
            hasChatGptToken: l,
          } = e(eP.PO),
          i = !t && "chatgpt" === n && l && null != a && null != r ? { accountId: a, userId: r } : null
        return {
          enabled: null != i,
          queryKey: ["business-use-propensity-score", i],
          staleTime: eI.D.FIVE_MINUTES,
          refetchOnMount: !0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == i) return null
            let t = await j.Request.safeGet("/user_segments", {
                parameters: { query: { include_business_use_propensity: !0 } },
                expectedIdentity: i,
                signal: e,
              }),
              n = eA.safeParse(t.segments?.business_use_propensity_score)
            return n.success ? n.data : null
          },
        }
      })
    var eE = n("eac5")
    let ex = (0, x.vU)(
      ec.u,
      (e, { scope: t }) => {
        let n = e?.assignment,
          a = n?.scoreThreshold,
          r =
            null != n && (!n.experimentEnabled || 0 === a || null == a || !Number.isFinite(a) || a < 0 || a > 1)
              ? { qualified: n.experimentEnabled && 0 === a, assignment: n }
              : void 0
        return {
          queryKey: ["pricing-business-propensity-decision", eT(e)],
          enabled: null != e,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
          refetchOnMount: !1,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
          initialData: null != e && eS(t, e) ? r : void 0,
          queryFn: async ({ signal: n }) => {
            if (null == e || !eS(t, e)) return null
            if (null != r) return r
            let { assignment: a } = e,
              l = await (0, eE.M)(
                t.query
                  .snapshot(eb)
                  .fetch()
                  .catch(() => null),
                null,
                Date.now() + 1e3,
              )
            return (n.throwIfAborted(), eS(t, e))
              ? { qualified: null != l && l >= a.scoreThreshold, assignment: a }
              : null
          },
        }
      },
      { key: eT },
    )
    function eT(e) {
      return JSON.stringify(null == e ? null : [e.accountId, e.userId, e.visitKey])
    }
    function eS(e, t) {
      let n = e.get(eP.PO)
      return (
        !n.authLoading &&
        "chatgpt" === n.authMethod &&
        !0 === n.hasChatGptToken &&
        n.authenticatedAccountId === t.accountId &&
        n.authenticatedUserId === t.userId
      )
    }
    var ev = n("AKNp"),
      eN = n("fEjy"),
      eO = n("laUo"),
      ew = n("RrlO"),
      eR = n("CQNV"),
      eL = n("Bbed")
    let eM = { suspendToParent: !0, propagateLoadError: !0 },
      eU = (0, eL._)(async () => (await (0, C.Gi)()).DelinquentUpgradeDialog),
      ek = (0, eL._)(C.Nb),
      eD = (0, eL._)(C.VC),
      ej = (0, eL._)(C.hu),
      eG = (0, eL._)(C.d3)
    ;((0, eL._)(C.QA, eM), (0, eL._)(() => (0, C.QA)(!0), eM))
    var eB = n("DGWL"),
      eY = n("MFJq")
    function eF(e) {
      switch (e) {
        case "free":
        case "go":
        case "plus":
        case "pro":
          return e
        case "prolite":
        case "promax":
          return "pro"
        default:
          return null
      }
    }
    function eH({ currentPlan: e, targetPlan: t, campaignId: n, eligiblePlusCampaignId: a }) {
      return n === _.Ho && e === ep.x.GO && t === ep.x.PLUS && a === _.Ho
    }
    function eW(e, t) {
      let n = []
      return (
        e === ep.x.FREE && n.push({ action: "current", highlighted: !1, id: "free", targetPlan: ep.x.FREE }),
        n.push(
          {
            action: (0, eO.aL)({ currentPlan: e, targetPlan: ep.x.GO }),
            highlighted: !1,
            id: "go",
            targetPlan: ep.x.GO,
          },
          {
            action: (0, eO.aL)({ currentPlan: e, targetPlan: ep.x.PLUS }),
            highlighted: e === ep.x.FREE || e === ep.x.GO,
            id: "plus",
            targetPlan: ep.x.PLUS,
          },
          {
            action: (0, eO.aL)({ currentPlan: e, targetPlan: t }),
            highlighted: e === ep.x.PLUS,
            id: "pro",
            targetPlan: t,
          },
        ),
        n
      )
    }
    function eV(e, t) {
      return t && e !== ep.x.PRO && e !== ep.x.PROLITE ? ep.x.PROLITE : ep.x.PRO
    }
    var eq = n("DVML")
    function eZ(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c = (0, r.c)(30),
        { account: d, loadingContent: p, pageProps: m, AccountPage: _ } = e,
        f = (0, O.zy)(),
        h = (0, O.Zp)()
      c[0] !== p
        ? ((t = p ?? (0, a.jsx)("main", { className: "h-full bg-surface" })), (c[0] = p), (c[1] = t))
        : (t = c[1])
      let C = t,
        { accountId: P, userId: y, isLoading: I } = (0, U.As)(),
        { client: A, isLoading: b } = (0, J.cn)(),
        { data: E, isLoading: x } = d,
        T = f.state
      if (c[2] !== P || c[3] !== f || c[4] !== y) {
        let e, t
        ;((e = f.state),
          (n = {
            handoff: null,
            upgradeHandoff: (t =
              null != P && null != y && e?.upgradeContext?.accountId === P && e.upgradeContext.userId === y
                ? e.upgradeContext
                : void 0),
            upgradeContext: t?.context,
          }),
          (c[2] = P),
          (c[3] = f),
          (c[4] = y),
          (c[5] = n))
      } else n = c[5]
      let { handoff: v, upgradeHandoff: N, upgradeContext: w } = n
      if (
        (c[6] !== P || c[7] !== w || c[8] !== y
          ? ((l = () => {
              null != w && null != P && null != y && (0, g.fn)(w)
            }),
            (i = [P, w, y]),
            (c[6] = P),
            (c[7] = w),
            (c[8] = y),
            (c[9] = l),
            (c[10] = i))
          : ((l = c[9]), (i = c[10])),
        (0, S.useEffect)(l, i),
        c[11] !== P || c[12] !== v || c[13] !== f || c[14] !== h || c[15] !== y
          ? ((o = () => {
              let e = (function (e, t, n, a) {
                if (null == e || null == n || null == a) return null
                let r = new URLSearchParams(t.search)
                for (let e of g.bl) r.delete(e)
                return {
                  to: { pathname: t.pathname, search: r.toString(), hash: t.hash },
                  options: {
                    replace: !0,
                    state: { ...t.state, upgradeContext: { accountId: n, userId: a, context: e, search: t.search } },
                  },
                }
              })(v, f, P, y)
              null != e && h(e.to, e.options)
            }),
            (s = [P, v, f, h, y]),
            (c[11] = P),
            (c[12] = v),
            (c[13] = f),
            (c[14] = h),
            (c[15] = y),
            (c[16] = o),
            (c[17] = s))
          : ((o = c[16]), (s = c[17])),
        (0, S.useEffect)(o, s),
        null != v)
      )
        return p ?? null
      if (T?.desktopCheckout != null) {
        if (I || x) return C
        if (T.desktopCheckout.accountId !== P || T.desktopCheckout.userId !== y || E?.id !== P) {
          let e
          return (
            c[18] !== T.returnPath
              ? ((e = (0, a.jsx)(O.C5, { to: T.returnPath, replace: !0 })), (c[18] = T.returnPath), (c[19] = e))
              : (e = c[19]),
            e
          )
        }
      }
      if (null == E) {
        let e
        return (
          c[20] !== x || c[21] !== C
            ? ((e = x ? C : (0, a.jsx)(O.C5, { to: "/", replace: !0 })), (c[20] = x), (c[21] = C), (c[22] = e))
            : (e = c[22]),
          e
        )
      }
      let R = `${P ?? ""}:${E.id}:${y ?? ""}`
      return (
        c[23] !== _ || c[24] !== E || c[25] !== m || c[26] !== C || c[27] !== R || c[28] !== N
          ? ((u = (0, a.jsx)(_, { ...m, currentAccount: E, loadingContent: C, upgradeHandoff: N }, R)),
            (c[23] = _),
            (c[24] = E),
            (c[25] = m),
            (c[26] = C),
            (c[27] = R),
            (c[28] = N),
            (c[29] = u))
          : (u = c[29]),
        u
      )
    }
    ;(n("PFjh"), n("g5B3"))
    var e$ = n("SZCv"),
      eK = n.n(e$),
      ez = n("UZNF")
    let eQ = (0, x.i1)(ec.u, (e, { get: t }) => (e ? t(ez.s5) : null), { isEqual: eK() })
    var eJ = n("GczZ"),
      eX = n("erf4"),
      e1 = n("czQq"),
      e0 = n("Hsmf"),
      e2 = n("Y0ov"),
      e3 = n("YT3Z"),
      e5 = n("O3Pw"),
      e6 = n("WwSS"),
      e4 = n("f5qZ"),
      e8 = n("CYGR"),
      e7 = n("EamN"),
      e9 = n("xJ20"),
      te = n("IDNS"),
      tt = n("hDRf"),
      tn = n("u3bW"),
      ta = n("DyL4"),
      tr = n("tZtH"),
      tl = n("i2oq"),
      ti = n("OeIv"),
      to = n("EEhB"),
      ts = n("d2Kw"),
      tu = n("zUCn"),
      tc = n("D4Ne"),
      td = n("rfGL"),
      tp = n("jQM4"),
      tm = n("G2q2"),
      t_ = n("Gg1I"),
      tg = n("x9yB"),
      tf = n("mMqk"),
      th = n("mHJ2"),
      tC = n("CoVw"),
      tP = n("rUPw"),
      ty = n("pTN8"),
      tI = n("bD0w"),
      tA = n("j2Vs"),
      tb = n("SfBd"),
      tE = n("sMPH"),
      tx = n("h4zt"),
      tT = n("Odwx"),
      tS = n("PAof"),
      tv = n("GqS2"),
      tN = n("hJAT"),
      tO = n("eDHI"),
      tw = n("voKD"),
      tR = n("YiEG")
    let tL = {
        addSources: te.A,
        arrowsClockwiseRotateBadgeSparkle: tr.A,
        brain: ti.A,
        brainPlus: ti.A,
        brainPro: ti.A,
        branch: to.A,
        briefcase: ts.A,
        chat: tu.A,
        chats: tt.A,
        checkmark: tc.A,
        codex: td.A,
        currencyDollar: tp.A,
        desktopBadge: t_.A,
        dots: tf.A,
        fileDocument: th.A,
        finance: tC.A,
        folderOpenThin: tP.A,
        group: tn.A,
        identity: ty.A,
        images: tA.A,
        imagesPro: tI.A,
        invoice: tb.A,
        megaphoneSkinny: tx.A,
        shieldLockThin: tT.A,
        sparklePlus: ta.A,
        telescopePro: e9.s,
        upgradePlan: tv.A,
        userVoice: tN.A,
        voice: tO.A,
        workWithApps: tw.A,
      },
      tM = { ...tL, sparklePlus: tr.A },
      tU = {
        brainPro: tl.A,
        currencyDollar: tm.A,
        desktopBadge: tg.A,
        dots: tf.A,
        group: tn.A,
        invoice: tE.A,
        shieldLockThin: tS.A,
        workWithApps: tR.A,
      }
    var tk = n("hwkA"),
      tD = n("on57")
    function tj(e) {
      let t,
        n,
        l,
        i,
        o,
        s = (0, r.c)(10)
      return (
        s[0] !== e
          ? (({ children: n, className: l, ...t } = e), (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = l))
          : ((t = s[1]), (n = s[2]), (l = s[3])),
        s[4] !== l ? ((i = (0, tD.A)(["button-r3dQ7s", l])), (s[4] = l), (s[5] = i)) : (i = s[5]),
        s[6] !== t || s[7] !== n || s[8] !== i
          ? ((o = (0, a.jsx)(tk.$, {
              ...t,
              className: i,
              color: "primary",
              variant: "outline",
              size: "3xl",
              block: !0,
              pill: !0,
              type: "button",
              disabled: !0,
              disabledTone: "relaxed",
              "aria-disabled": !0,
              tabIndex: -1,
              children: n,
            })),
            (s[6] = t),
            (s[7] = n),
            (s[8] = i),
            (s[9] = o))
          : (o = s[9]),
        o
      )
    }
    var tG = n("AlhA"),
      tB = n("Qgfj")
    let tY = (0, tB.YK)({
      planSummary: { id: "FreeWorkspaceColumn.planSummary", defaultMessage: "A secure way to try ChatGPT at work" },
      currentPlanCta: { id: "FreeWorkspaceColumn.currentPlanCta", defaultMessage: "Your current plan" },
      limitedModelAccess: {
        id: "FreeWorkspaceColumn.limitedModelAccess",
        defaultMessage: "Limited access to our best model for work",
      },
      privacyBuiltIn: {
        id: "FreeWorkspaceColumn.privacyBuiltIn",
        defaultMessage: "Privacy built in; data never used for training",
      },
      limitedVideoAndImages: {
        id: "FreeWorkspaceColumn.limitedVideoAndImages",
        defaultMessage: "Limited video and image creation",
      },
      teamTools: { id: "FreeWorkspaceColumn.teamTools", defaultMessage: "Tools for teams like projects & custom GPTs" },
      unlimitedCollaboratorInvites: {
        id: "FreeWorkspaceColumn.unlimitedCollaboratorInvites",
        defaultMessage: "Unlimited collaborator invites",
      },
      businessIntegrations: {
        id: "FreeWorkspaceColumn.businessIntegrations",
        defaultMessage: "Integration with select business apps",
      },
    })
    var tF = n("PzR8"),
      tH = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M11.183 2.51499C11.1148 1.91366 10.6064 1.45912 10.0013 1.4585C9.39609 1.45788 8.88675 1.91138 8.81741 2.51257C8.38448 6.26606 6.26594 8.3846 2.51245 8.81753C1.91126 8.88687 1.45776 9.39621 1.45837 10.0014C1.45899 10.6066 1.91354 11.115 2.51486 11.1831C6.21512 11.6022 8.48056 13.7003 8.81424 17.4567C8.86884 18.0714 9.38421 18.5425 10.0014 18.5418C10.6186 18.5411 11.1329 18.0689 11.1861 17.454C11.5066 13.7508 13.7506 11.5068 17.4539 11.1862C18.0688 11.133 18.541 10.6187 18.5417 10.0015C18.5424 9.38433 18.0713 8.86897 17.4566 8.81436C13.7002 8.48068 11.6021 6.21524 11.183 2.51499Z",
            fill: "currentColor",
          }),
        })
    let tW = { $type: "protobuf_analytics_events.v1.ChatgptPricingPlanCardViewed" }
    var tV = n("ESTr")
    let tq = (0, tV.a)({
      name: "bolt-on-bolt-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.13063, y: 1.046875, width: 19.84935, height: 17.66333 },
        visualBounds: { x: 0.13063, y: 1.046875, width: 19.84935, height: 17.66333 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.13063, y: 1.046875, width: 19.84935, height: 17.66333 },
        center: { x: 10.055305, y: 9.87854 },
        insets: { top: 1.046875, right: 0.02002, bottom: 1.289795, left: 0.13063 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.055305, y: 9.87854 },
          foreground: { x: 10.055305, y: 9.87854 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.8963 1.39209C13.8766 0.517885 15.459 1.42607 15.1375 2.75244L14.1922 6.65088H18.6023C19.7714 6.65088 20.4071 8.01737 19.6541 8.91162L11.9471 18.063C11.6357 18.4321 11.0841 18.4796 10.7146 18.1685C10.3453 17.8573 10.2984 17.3056 10.6092 16.936L17.7957 8.40088H15.2713C15.2294 8.65028 15.1226 8.89666 14.9373 9.1167L7.27616 18.2144C6.34086 19.325 4.54671 18.4164 4.88846 17.0054L5.77518 13.3481H1.63358C0.358219 13.3481 -0.335397 11.8579 0.486118 10.8823L8.14725 1.78467L8.23709 1.68604C9.19232 0.731047 10.8658 1.62682 10.5349 2.99365L9.64823 6.65088H12.3914L13.1463 3.5376C12.8417 3.65391 12.4837 3.59622 12.2312 3.35694C11.881 3.02461 11.8672 2.47124 12.199 2.12061L12.8035 1.48194L12.8963 1.39209ZM2.17069 11.5981H7.99979L6.96366 15.8677L13.2527 8.40088H7.42362L8.45877 4.13037L2.17069 11.5981Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var tZ = n("LXgI"),
      t$ = n("mtSb"),
      tK = n("ZZ6D"),
      tz = n("IL1g"),
      tQ = n("Sm6l"),
      tJ = n("ZtSy"),
      tX = n("HOLv"),
      t1 = n("bVeK"),
      t0 = n("xY7X"),
      t2 = n("T1PX")
    let t3 = (0, tB.YK)({
      sharedTasks: {
        id: "pricing.businessBenefits.sharedTasks",
        defaultMessage: "Shared tasks \u2013 so your team can do more by delegating busy work",
      },
      dotsPremium: {
        id: "pricing.businessBenefits.dotsPremium.literal",
        defaultMessage: "Dots, your always-on agents built to handle everything (Available on Premium)",
      },
      spaceCollaboration: {
        id: "pricing.businessBenefits.spaceCollaboration",
        defaultMessage: "ChatGPT Space to collaborate with your team and AI",
      },
      spaceDocumentation: {
        id: "pricing.businessBenefits.spaceDocumentation",
        defaultMessage: "ChatGPT Space to organize projects and files you build with AI",
      },
      dataPrivacy: {
        id: "pricing.businessBenefits.dataPrivacy",
        defaultMessage: "No model training on your business data by default",
      },
    })
    function t5(e) {
      let t,
        n = (0, r.c)(3),
        { trial: l, debug_now: i } = e,
        o = (0, x.Ul)(l.canExtend || null != i ? null : ez.hx),
        s = l.canExtend ? null : (i ?? o)
      if (null == s) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, {
                id: "AccountPaymentModal.noPaymentTrialExtensionTitle",
                defaultMessage: "Get 30 more days of Plus, free",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      let u = Math.ceil((l.expiresAt - s) / 864e5)
      return (
        n[1] !== u
          ? ((t =
              u <= 1
                ? (0, a.jsx)(N.A, {
                    id: "AccountPaymentModal.noPaymentTrialEndsTodayTitle",
                    defaultMessage: "Your trial ends today.<br></br>Keep access to ChatGPT Plus.",
                    values: { br: t4 },
                  })
                : (0, a.jsx)(N.A, {
                    id: "AccountPaymentModal.noPaymentTrialEndingTitle",
                    defaultMessage: "Your trial is ending in {days} days.<br></br>Keep access to ChatGPT Plus.",
                    values: { days: u, br: t6 },
                  })),
            (n[1] = u),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function t6() {
      return (0, a.jsx)("br", {})
    }
    function t4() {
      return (0, a.jsx)("br", {})
    }
    function t8(e) {
      let t,
        n = (0, r.c)(2),
        { trial: l } = e
      return (
        n[0] !== l.canExtend
          ? ((t = l.canExtend
              ? (0, a.jsx)(N.A, { id: "AccountPaymentModal.extendNoPaymentTrial", defaultMessage: "Extend free trial" })
              : (0, a.jsx)(N.A, {
                  id: "AccountPaymentModal.upgradeNoPaymentTrial",
                  defaultMessage: "Upgrade to Plus",
                })),
            (n[0] = l.canExtend),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var t7 = n("Bj0d"),
      t9 = n("PXhB")
    function ne(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c,
        d = (0, r.c)(25),
        { value: p, amount: m, tabular: _, reducedMotion: g } = e,
        f = void 0 === _ || _,
        { locale: h } = (0, v.A)()
      if (d[0] !== h) {
        let e = new Intl.NumberFormat(h, { useGrouping: !1 })
        ;((t = Array.from({ length: 10 }, (t, n) => e.format(n))), (d[0] = h), (d[1] = t))
      } else t = d[1]
      let C = t
      if (d[2] !== m || d[3] !== C || d[4] !== h || d[5] !== g || d[6] !== f || d[7] !== p) {
        let e = Array.from(p),
          t = new Set(new Intl.NumberFormat(h).formatToParts(12345.6).filter(nn).map(nt)),
          r = []
        for (let [n, a] of e.entries()) {
          let l = r.at(-1),
            i = C.includes(a) || (l?.numeric === !0 && t.has(a) && C.includes(e[n + 1] ?? ""))
          l?.numeric === i ? (l.text = l.text + a) : r.push({ numeric: i, text: a })
        }
        let u = e.filter((e) => C.includes(e)).length,
          c = f ? "tabular-nums" : "proportional-nums"
        ;(d[13] !== c ? ((o = (0, tD.A)("inline-grid align-bottom", c)), (d[13] = c), (d[14] = o)) : (o = d[14]),
          d[15] !== p
            ? ((s = (0, a.jsx)("span", { className: "sr-only", children: p })), (d[15] = p), (d[16] = s))
            : (s = d[16]),
          (n = "whitespace-pre"),
          (l = "true"),
          (i = r.map((e, t) =>
            e.numeric
              ? (0, a.jsx)(
                  "span",
                  {
                    dir: "ltr",
                    className: "inline-flex",
                    children: Array.from(e.text).map((e) => {
                      let t = C.indexOf(e)
                      return t < 0
                        ? e
                        : ((u -= 1),
                          (0, a.jsx)(
                            na,
                            { digit: t, digits: C, instant: g || null == m, tabular: f },
                            `${C.join("")}-${u}`,
                          ))
                    }),
                  },
                  t,
                )
              : e.text,
          )),
          (d[2] = m),
          (d[3] = C),
          (d[4] = h),
          (d[5] = g),
          (d[6] = f),
          (d[7] = p),
          (d[8] = n),
          (d[9] = l),
          (d[10] = i),
          (d[11] = o),
          (d[12] = s))
      } else ((n = d[8]), (l = d[9]), (i = d[10]), (o = d[11]), (s = d[12]))
      return (
        d[17] !== n || d[18] !== l || d[19] !== i
          ? ((u = (0, a.jsx)("span", { className: n, "aria-hidden": l, children: i })),
            (d[17] = n),
            (d[18] = l),
            (d[19] = i),
            (d[20] = u))
          : (u = d[20]),
        d[21] !== o || d[22] !== s || d[23] !== u
          ? ((c = (0, a.jsxs)("span", { className: o, children: [s, u] })),
            (d[21] = o),
            (d[22] = s),
            (d[23] = u),
            (d[24] = c))
          : (c = d[24]),
        c
      )
    }
    function nt(e) {
      return e.value
    }
    function nn(e) {
      return "group" === e.type || "decimal" === e.type
    }
    function na(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c = (0, r.c)(16),
        { digit: d, digits: p, instant: m, tabular: _ } = e,
        g = (0, S.useRef)(null),
        f = (0, S.useRef)(null)
      ;(c[0] !== d || c[1] !== m
        ? ((t = () => {
            let e = f.current,
              t = m || null == e ? 0 : 400 + 24 * Math.min(Math.abs(d - e), 4)
            ;(g.current?.style.setProperty("--roll-duration", `${t}ms`),
              g.current?.style.setProperty("--digit", `${d}`),
              (f.current = d))
          }),
          (n = [d, m]),
          (c[0] = d),
          (c[1] = m),
          (c[2] = t),
          (c[3] = n))
        : ((t = c[2]), (n = c[3])),
        (0, S.useLayoutEffect)(t, n))
      let h = !_ && "proportionalDigit-Drs53a"
      c[4] !== h ? ((l = (0, tD.A)("digit-a5cpBH", h)), (c[4] = h), (c[5] = l)) : (l = c[5])
      let C = p[d]
      return (
        c[6] !== C
          ? ((i = (0, a.jsx)("span", { className: "digitWidth-JzGGLG", children: C })), (c[6] = C), (c[7] = i))
          : (i = c[7]),
        c[8] !== p ? ((o = p.map(nr)), (c[8] = p), (c[9] = o)) : (o = c[9]),
        c[10] !== o
          ? ((s = (0, a.jsx)("span", { ref: g, className: "track-yhF9zX", children: o })), (c[10] = o), (c[11] = s))
          : (s = c[11]),
        c[12] !== l || c[13] !== i || c[14] !== s
          ? ((u = (0, a.jsxs)("span", { className: l, children: [i, s] })),
            (c[12] = l),
            (c[13] = i),
            (c[14] = s),
            (c[15] = u))
          : (u = c[15]),
        u
      )
    }
    function nr(e) {
      return (0, a.jsx)("span", { children: e }, e)
    }
    var nl = n("lHrO")
    function ni(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        d,
        p,
        m,
        _,
        g,
        f,
        h,
        C,
        P,
        y,
        I,
        A = (0, r.c)(72),
        { value: b, onChange: E, label: x, modal: T, controls: N } = e,
        O = void 0 !== T && T,
        { Popup: w, Root: R, Trigger: L, Input: M, List: U, Item: k } = N,
        D = (0, v.A)(),
        [j, G] = (0, S.useState)(!1),
        [B, Y] = (0, S.useState)("")
      A[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            ;(G(e), e || Y(""))
          }),
          (A[0] = t))
        : (t = A[0])
      let F = t
      A[1] !== D || A[2] !== x
        ? ((n = x ?? D.formatMessage({ id: "pricing.countrySelector.label", defaultMessage: "Country or region" })),
          (A[1] = D),
          (A[2] = x),
          (A[3] = n))
        : (n = A[3])
      let H = n
      if (
        A[4] !== M ||
        A[5] !== k ||
        A[6] !== U ||
        A[7] !== w ||
        A[8] !== R ||
        A[9] !== L ||
        A[10] !== D ||
        A[11] !== H ||
        A[12] !== O ||
        A[13] !== E ||
        A[14] !== j ||
        A[15] !== B ||
        A[16] !== b
      ) {
        let e, t, n, r, C, P
        ;(A[29] !== D
          ? ((e = (e) => ({ code: e, label: D.formatDisplayName(e, { type: "region" }) ?? e })),
            (A[29] = D),
            (A[30] = e))
          : (e = A[30]),
          A[31] !== D.locale || A[32] !== B
            ? ((t = (e) => {
                let { code: t, label: n } = e
                return `${t} ${n}`.toLocaleLowerCase(D.locale).includes(B.trim().toLocaleLowerCase(D.locale))
              }),
              (A[31] = D.locale),
              (A[32] = B),
              (A[33] = t))
            : (t = A[33]),
          A[34] !== D.locale
            ? ((n = (e, t) => e.label.localeCompare(t.label, D.locale)), (A[34] = D.locale), (A[35] = n))
            : (n = A[35]))
        let y = c.qo.map(e).filter(t).sort(n)
        ;((o = w),
          (h = j),
          (s = F),
          (u = O),
          (d = "menuWide"),
          A[36] !== D || A[37] !== b
            ? ((r = D.formatDisplayName(b, { type: "region" })), (A[36] = D), (A[37] = b), (A[38] = r))
            : (r = A[38]),
          A[39] !== L || A[40] !== H || A[41] !== r
            ? ((p = (0, a.jsx)(L, { "aria-label": H, children: r })),
              (A[39] = L),
              (A[40] = H),
              (A[41] = r),
              (A[42] = p))
            : (p = A[42]),
          (i = R),
          (g = H),
          A[43] !== D
            ? ((C = D.formatMessage({ id: "pricing.countrySelector.search", defaultMessage: "Search countries" })),
              (A[43] = D),
              (A[44] = C))
            : (C = A[44]),
          A[45] !== M || A[46] !== B || A[47] !== C
            ? ((f = (0, a.jsx)(M, { value: B, onValueChange: Y, placeholder: C })),
              (A[45] = M),
              (A[46] = B),
              (A[47] = C),
              (A[48] = f))
            : (f = A[48]),
          (_ = "max-h-64 overflow-y-auto"),
          (l = U),
          A[49] !== k || A[50] !== E || A[51] !== b
            ? ((P = (e) => {
                let { code: t, label: n } = e
                return (0, a.jsx)(
                  k,
                  {
                    value: t,
                    onSelect: () => {
                      ;(t !== b && E(t), F(!1))
                    },
                    children: n,
                  },
                  t,
                )
              }),
              (A[49] = k),
              (A[50] = E),
              (A[51] = b),
              (A[52] = P))
            : (P = A[52]),
          (m = y.map(P)),
          (A[4] = M),
          (A[5] = k),
          (A[6] = U),
          (A[7] = w),
          (A[8] = R),
          (A[9] = L),
          (A[10] = D),
          (A[11] = H),
          (A[12] = O),
          (A[13] = E),
          (A[14] = j),
          (A[15] = B),
          (A[16] = b),
          (A[17] = l),
          (A[18] = i),
          (A[19] = o),
          (A[20] = s),
          (A[21] = u),
          (A[22] = d),
          (A[23] = p),
          (A[24] = m),
          (A[25] = _),
          (A[26] = g),
          (A[27] = f),
          (A[28] = h))
      } else
        ((l = A[17]),
          (i = A[18]),
          (o = A[19]),
          (s = A[20]),
          (u = A[21]),
          (d = A[22]),
          (p = A[23]),
          (m = A[24]),
          (_ = A[25]),
          (g = A[26]),
          (f = A[27]),
          (h = A[28]))
      return (
        A[53] !== l || A[54] !== m
          ? ((C = (0, a.jsx)(l, { children: m })), (A[53] = l), (A[54] = m), (A[55] = C))
          : (C = A[55]),
        A[56] !== C || A[57] !== _
          ? ((P = (0, a.jsx)("div", { className: _, children: C })), (A[56] = C), (A[57] = _), (A[58] = P))
          : (P = A[58]),
        A[59] !== i || A[60] !== P || A[61] !== g || A[62] !== f
          ? ((y = (0, a.jsxs)(i, { label: g, children: [f, P] })),
            (A[59] = i),
            (A[60] = P),
            (A[61] = g),
            (A[62] = f),
            (A[63] = y))
          : (y = A[63]),
        A[64] !== o || A[65] !== s || A[66] !== u || A[67] !== d || A[68] !== p || A[69] !== y || A[70] !== h
          ? ((I = (0, a.jsx)(o, {
              open: h,
              onOpenChange: s,
              modal: u,
              contentWidth: d,
              triggerButton: p,
              children: y,
            })),
            (A[64] = o),
            (A[65] = s),
            (A[66] = u),
            (A[67] = d),
            (A[68] = p),
            (A[69] = y),
            (A[70] = h),
            (A[71] = I))
          : (I = A[71]),
        I
      )
    }
    var no = n("ZZgR"),
      ns = n("QyE3")
    let nu = {
      Popup: no.A,
      Root: no.G.Root,
      Trigger: function (e) {
        let t,
          n = (0, r.c)(2)
        return (
          n[0] !== e
            ? ((t = (0, a.jsx)(ns.vg, { ...e, color: "outlineSurfaceRaised" })), (n[0] = e), (n[1] = t))
            : (t = n[1]),
          t
        )
      },
      Input: no.G.Input,
      List: no.G.List,
      Item: no.G.Item,
    }
    function nc(e) {
      let t,
        n,
        l,
        i,
        o = (0, r.c)(9)
      o[0] !== e ? (({ className: t, ...n } = e), (o[0] = e), (o[1] = t), (o[2] = n)) : ((t = o[1]), (n = o[2]))
      let s = (0, J.Ou)("3573128711")
      o[3] !== s ? ((l = s.get("enabled", !1)), (o[3] = s), (o[4] = l)) : (l = o[4])
      let u = l
      return (
        o[5] !== t || o[6] !== u || o[7] !== n
          ? ((i = u ? null : (0, a.jsx)("div", { className: t, children: (0, a.jsx)(ni, { ...n, controls: nu }) })),
            (o[5] = t),
            (o[6] = u),
            (o[7] = n),
            (o[8] = i))
          : (i = o[8]),
        i
      )
    }
    var nd = n("hXxx"),
      np = n("mEbU")
    function nm(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c = (0, r.c)(23),
        { debugEnabled: d, visible: p, userId: m } = e,
        _ = (0, S.useRef)(null),
        g = (0, np.W)(_),
        f = (0, x.Ul)(t7.C),
        h = (0, eo.U)("(prefers-reduced-motion: reduce), (forced-colors: active)"),
        C = p && f && g && !h,
        { client: P, getLayer: y, isLoading: I } = (0, J.cn)()
      c[0] !== P || c[1] !== d || c[2] !== y || c[3] !== I || c[4] !== C || c[5] !== m
        ? ((t =
            C && null == d && !I && null != m && P.getContext().user.userID === m
              ? y(eN.aS, { disableExposureLog: !0 })
              : null),
          (n = d ?? t?.get("enable_plus_shimmer", !1) ?? !1),
          (c[0] = P),
          (c[1] = d),
          (c[2] = y),
          (c[3] = I),
          (c[4] = C),
          (c[5] = m),
          (c[6] = t),
          (c[7] = n))
        : ((t = c[6]), (n = c[7]))
      let A = n,
        b = (0, S.useRef)(null)
      ;(c[8] !== P || c[9] !== A || c[10] !== y || c[11] !== t || c[12] !== m
        ? ((l = () => {
            if (null == t || "visible" !== document.visibilityState || P.getContext().user.userID !== m) return
            let e = JSON.stringify([m, t.ruleID, t.groupName, A])
            if (b.current === e) return
            let n = y(eN.aS, { disableExposureLog: !0 })
            n.ruleID === t.ruleID &&
              n.groupName === t.groupName &&
              n.get("enable_plus_shimmer", !1) === A &&
              (y(eN.aS).get("enable_plus_shimmer", !1), (b.current = e))
          }),
          (i = [P, A, y, t, m]),
          (c[8] = P),
          (c[9] = A),
          (c[10] = y),
          (c[11] = t),
          (c[12] = m),
          (c[13] = l),
          (c[14] = i))
        : ((l = c[13]), (i = c[14])),
        (0, S.useEffect)(l, i))
      let E = A && !h && "glow-YGQinO"
      return (
        c[15] !== E ? ((o = (0, tD.A)("frame-hNsSuF", E)), (c[15] = E), (c[16] = o)) : (o = c[16]),
        c[17] !== A || c[18] !== C
          ? ((s = A && C && (0, a.jsx)("span", { className: "sweep-La5YwG" })), (c[17] = A), (c[18] = C), (c[19] = s))
          : (s = c[19]),
        c[20] !== o || c[21] !== s
          ? ((u = (0, a.jsx)("span", {
              "aria-hidden": "true",
              "data-pricing-plus-shimmer": "",
              ref: _,
              className: o,
              children: s,
            })),
            (c[20] = o),
            (c[21] = s),
            (c[22] = u))
          : (u = c[22]),
        u
      )
    }
    var n_ = n("L1kM")
    let ng = (0, tB.YK)({
        freeChat: { id: "pricing.verbCopy.freeChat", defaultMessage: "Send unlimited text-only messages" },
        freeImages: { id: "pricing.verbCopy.freeImages", defaultMessage: "Try image creation" },
        freeAds: { id: "pricing.verbCopy.freeAds", defaultMessage: "Keep free access with ads" },
        goChat: { id: "pricing.verbCopy.goChat", defaultMessage: "Send more messages with attachments" },
        goVoice: { id: "pricing.verbCopy.goVoice", defaultMessage: "Spend more time chatting by voice" },
        goAds: { id: "pricing.verbCopy.goAds", defaultMessage: "Keep low-cost access with ads" },
        plusMemory: { id: "pricing.verbCopy.plusMemory", defaultMessage: "Save more memories and 20 GB of files" },
        proModel: { id: "pricing.verbCopy.proModel", defaultMessage: "Tackle your hardest tasks with Astra Pro" },
        proMemory: { id: "pricing.verbCopy.proMemory", defaultMessage: "Save the most memories and 100 GB of files" },
        proImages: { id: "pricing.verbCopy.proImages", defaultMessage: "Create images faster" },
        limitedMemoryAndStorage: {
          id: "pricing.verbCopy.limitedMemoryAndStorage",
          defaultMessage: "Save files and recall details, with limits",
        },
        limitedVoice: { id: "pricing.verbCopy.limitedVoice", defaultMessage: "Talk with ChatGPT, with limits" },
        moreMemoryAndStorage: {
          id: "pricing.verbCopy.moreMemoryAndStorage",
          defaultMessage: "Save more files and remember more details",
        },
        advancedModels: {
          id: "pricing.verbCopy.advancedModels",
          defaultMessage: "Tackle complex tasks with advanced models",
        },
        higherQualityImages: {
          id: "pricing.verbCopy.higherQualityImages",
          defaultMessage: "Create higher-quality images",
        },
        actions: { id: "pricing.verbCopy.actions", defaultMessage: "Let ChatGPT act in your apps and files" },
        coding: { id: "pricing.verbCopy.coding", defaultMessage: "Automate coding tasks with Codex" },
        financeAndAnalysis: {
          id: "pricing.verbCopy.financeAndAnalysis",
          defaultMessage: "Analyze data and explore your finances",
        },
        noAds: { id: "pricing.verbCopy.noAds", defaultMessage: "Use ChatGPT without ads" },
        dot: { id: "pricing.verbCopy.dot", defaultMessage: "Delegate work to your always-on dot" },
        moreUsage: { id: "pricing.verbCopy.moreUsage", defaultMessage: "Run more Codex tasks and agent workflows" },
        moreImages: { id: "pricing.verbCopy.moreImages", defaultMessage: "Create more images" },
        connections: { id: "pricing.verbCopy.connections", defaultMessage: "Connect your email and calendar" },
        projects: { id: "pricing.verbCopy.projects", defaultMessage: "Organize more work in larger projects" },
        earlyAccess: { id: "pricing.verbCopy.earlyAccess", defaultMessage: "Try new tools and models early" },
      }),
      nf = new Map([
        [e5.op.freeLimitedChat.id, ng.freeChat],
        [e5.op.freeLimitedImages.id, ng.freeImages],
        [e5.op.goExpandedChat.id, ng.goChat],
        [e5.op.goExpandedVoice.id, ng.goVoice],
        [e5.op.plusMemoryAndStorage.id, ng.plusMemory],
        [e5.op.proFrontierModel.id, ng.proModel],
        [e5.We.frontierModels.id, ng.proModel],
        [e5.op.proMemoryAndStorage.id, ng.proMemory],
        [e5.We.memoryAndStorage.id, ng.proMemory],
        [e5.op.limitedMemoryAndStorage.id, ng.limitedMemoryAndStorage],
        [e5.op.freeLimitedVoice.id, ng.limitedVoice],
        [e5.op.goIncreasedMemoryAndStorage.id, ng.moreMemoryAndStorage],
        [e5.op.plusAdvancedIntelligence.id, ng.advancedModels],
        [e5.op.plusHigherQualityImages.id, ng.higherQualityImages],
        [e5.op.plusWorkAgent.id, ng.actions],
        [e5.op.plusCodex.id, ng.coding],
        [e5.op.plusFinanceAndAnalysis.id, ng.financeAndAnalysis],
        [e5.op.noAds.id, ng.noAds],
        [e5.We.assistant.id, ng.dot],
        [e5.We.standardUsage.id, ng.moreUsage],
        [e5.We.summaryUsage.id, ng.moreUsage],
        [e5.op.goExpandedImages.id, ng.moreImages],
        [e5.op.plusConnections.id, ng.connections],
        [e5.op.plusProjects.id, ng.projects],
        [e5.op.proEarlyAccess.id, ng.earlyAccess],
        [e5.We.earlyAccess.id, ng.earlyAccess],
      ])
    function nh(e, t, n) {
      if (t && e.id === e5.op.adSupported.id) {
        if ("free" === n) return ng.freeAds
        if ("go" === n) return ng.goAds
      }
      return t && null != e.id ? (nf.get(e.id) ?? e) : e
    }
    let nC = ng.proImages,
      nP = (0, tV.a)({
        name: "brain-extra-high-regular-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.625, y: 1.625, width: 16.749023, height: 16.75 },
          visualBounds: { x: 1.625, y: 1.625, width: 16.749023, height: 16.75 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.625, y: 1.625, width: 16.749023, height: 16.75 },
          center: { x: 9.999512, y: 10 },
          insets: { top: 1.625, right: 1.625977, bottom: 1.625, left: 1.625 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999512, y: 10 }, foreground: { x: 9.999512, y: 10 } },
        },
        capabilities: ["icon"],
        body: '<path d="M12.498 1.62521C13.3048 1.61669 14.1456 1.86885 14.7988 2.42599C15.322 2.87237 15.6902 3.48848 15.8281 4.23849C18.1583 5.03176 19.0781 7.93466 17.7666 9.94552C18.1907 10.5968 18.3849 11.3462 18.3711 12.0881C18.3725 12.1081 18.374 12.1283 18.374 12.1486C18.374 12.63 18.2699 13.0873 18.084 13.4992C17.7645 14.2882 17.186 14.9774 16.377 15.4084C15.8621 17.1039 14.4474 18.2201 12.9326 18.3606C12.1212 18.4357 11.2845 18.2271 10.585 17.677C10.3707 17.5084 10.1751 17.3121 10 17.0901C9.82481 17.3122 9.62938 17.5084 9.41504 17.677C8.7155 18.2272 7.87886 18.4357 7.06738 18.3606C5.5526 18.2201 4.13682 17.104 3.62207 15.4084C2.37743 14.7449 1.67852 13.4699 1.62988 12.1613C1.62692 12.1321 1.62501 12.1025 1.625 12.0725C1.625 12.0004 1.6269 11.9287 1.63086 11.8576C1.65754 11.1922 1.85323 10.5294 2.2334 9.94552C0.922173 7.93492 1.84142 5.0322 4.1709 4.23849C4.30883 3.48838 4.67792 2.87241 5.20117 2.42599C5.85436 1.8688 6.69521 1.61672 7.50195 1.62521C8.30913 1.63374 9.14619 1.90417 9.79395 2.47286C9.86572 2.5359 9.93424 2.60275 10 2.67208C10.0658 2.60271 10.1342 2.53594 10.2061 2.47286C10.8538 1.90412 11.6908 1.63377 12.498 1.62521ZM7.4834 3.37521C7.03678 3.37052 6.62387 3.51235 6.33691 3.75704C6.06845 3.98609 5.86041 4.34533 5.86035 4.90841C5.86056 5.3728 5.51698 5.74197 5.08887 5.80783C3.7146 6.01925 3.01656 7.58559 3.57031 8.75802C4.11757 8.45194 4.74834 8.27755 5.41992 8.27755C5.90312 8.27761 6.29492 8.66934 6.29492 9.15255C6.29481 9.63567 5.90305 10.0275 5.41992 10.0276C4.30065 10.0276 3.39206 10.9267 3.37598 12.0422C3.38641 12.8305 3.82544 13.6097 4.60352 13.9416C4.92509 14.0789 5.16499 14.3637 5.24414 14.7082C5.51125 15.8728 6.40927 16.5412 7.22852 16.6174C7.62905 16.6545 8.01264 16.5538 8.33301 16.302C8.64319 16.058 8.95012 15.6254 9.125 14.9016V13.6067C8.76605 13.7641 8.3702 13.8537 7.95312 13.8537C6.9832 13.8537 6.12315 13.3799 5.59277 12.6555C5.30741 12.2656 5.39238 11.7173 5.78223 11.4318C6.1721 11.1468 6.71951 11.2316 7.00488 11.6213C7.21985 11.9149 7.56473 12.1037 7.95312 12.1037C8.59438 12.1036 9.11439 11.5882 9.125 10.9494V8.66329C9.1116 8.02688 8.59176 7.51486 7.95215 7.51486C7.69064 7.5149 7.45135 7.59985 7.25684 7.74337C6.86806 8.03018 6.32015 7.94746 6.0332 7.5588C5.74644 7.17002 5.8291 6.6221 6.21777 6.33517C6.70297 5.97715 7.30414 5.7649 7.95215 5.76486C8.36945 5.76486 8.76581 5.85335 9.125 6.01095V4.97579C9.12495 4.40269 8.91397 4.02905 8.63867 3.78732C8.34623 3.53076 7.92956 3.37992 7.4834 3.37521ZM12.5166 3.37521C12.0704 3.37995 11.6537 3.53071 11.3613 3.78732C11.1205 3.99879 10.9289 4.3112 10.8848 4.76974L10.875 4.97579V8.25216C11.2341 8.09449 11.6305 8.00611 12.0479 8.00607C13.0179 8.00607 13.8778 8.4798 14.4082 9.20431C14.6934 9.59427 14.6087 10.1426 14.2188 10.4279C13.829 10.7128 13.2815 10.6279 12.9961 10.2385C12.7811 9.94478 12.4364 9.75607 12.0479 9.75607C11.4031 9.75622 10.8801 10.2765 10.875 10.9201C10.875 10.9233 10.876 10.9267 10.876 10.9299C10.876 10.9423 10.8752 10.9547 10.875 10.967V14.9016C11.0499 15.6253 11.3569 16.058 11.667 16.302C11.9873 16.5538 12.371 16.6545 12.7715 16.6174C13.4166 16.5575 14.1086 16.1295 14.5049 15.382C12.9682 15.1067 11.8018 13.7645 11.8018 12.1486C11.802 11.6656 12.1936 11.2736 12.6768 11.2736C13.1599 11.2736 13.5516 11.6656 13.5518 12.1486C13.5518 12.9971 14.2395 13.6847 15.0879 13.6848C15.6987 13.6848 16.2241 13.3279 16.4717 12.8117C16.7449 12.114 16.6594 11.2764 16.1318 10.675C15.7658 10.2576 15.7647 9.63005 16.1318 9.21212C16.9846 8.24131 16.6593 6.7117 15.6367 6.07638C15.3301 6.80984 14.7694 7.40976 14.0645 7.76388C13.6327 7.98059 13.1065 7.80597 12.8896 7.37423C12.6734 6.94258 12.8478 6.41722 13.2793 6.2004C13.763 5.95745 14.1011 5.4734 14.1396 4.90841C14.1396 4.34533 13.9316 3.98609 13.6631 3.75704C13.3761 3.5124 12.9632 3.3705 12.5166 3.37521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      ny = (0, tV.a)({
        name: "brain-high-regular-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
          visualBounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
          center: { x: 10.007813, y: 10 },
          insets: { top: 1.625, right: 1.609375, bottom: 1.625, left: 1.625 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.007813, y: 10 }, foreground: { x: 10.007813, y: 10 } },
        },
        capabilities: ["icon"],
        body: '<path d="M12.498 1.62521C13.3048 1.61669 14.1456 1.86885 14.7988 2.42599C15.322 2.87237 15.6902 3.48848 15.8281 4.23849C18.1583 5.03176 19.0781 7.93466 17.7666 9.94552C18.1501 10.5345 18.3453 11.2039 18.3691 11.8752C18.3825 11.936 18.3906 11.9989 18.3906 12.0637C18.3906 12.488 18.3111 12.8938 18.168 13.2678C17.8728 14.1524 17.2641 14.9358 16.377 15.4084C15.8621 17.1039 14.4474 18.2201 12.9326 18.3606C12.1212 18.4357 11.2845 18.2271 10.585 17.677C10.3707 17.5084 10.1751 17.3121 10 17.0901C9.82481 17.3122 9.62938 17.5084 9.41504 17.677C8.7155 18.2272 7.87886 18.4357 7.06738 18.3606C5.5526 18.2201 4.13682 17.104 3.62207 15.4084C2.37743 14.7449 1.67852 13.4699 1.62988 12.1613C1.62692 12.1321 1.62501 12.1025 1.625 12.0725C1.625 12.0004 1.6269 11.9287 1.63086 11.8576C1.65754 11.1922 1.85323 10.5294 2.2334 9.94552C0.922173 7.93492 1.84142 5.0322 4.1709 4.23849C4.30883 3.48838 4.67792 2.87241 5.20117 2.42599C5.85436 1.8688 6.69521 1.61672 7.50195 1.62521C8.30913 1.63374 9.14619 1.90417 9.79395 2.47286C9.86572 2.5359 9.93424 2.60275 10 2.67208C10.0658 2.60271 10.1342 2.53594 10.2061 2.47286C10.8538 1.90412 11.6908 1.63377 12.498 1.62521ZM7.4834 3.37521C7.03678 3.37052 6.62387 3.51235 6.33691 3.75704C6.06845 3.98609 5.86041 4.34533 5.86035 4.90841C5.86056 5.3728 5.51698 5.74197 5.08887 5.80783C3.7146 6.01925 3.01656 7.58559 3.57031 8.75802C4.11757 8.45194 4.74834 8.27755 5.41992 8.27755C5.90312 8.27761 6.29492 8.66934 6.29492 9.15255C6.29481 9.63567 5.90305 10.0275 5.41992 10.0276C4.30065 10.0276 3.39206 10.9267 3.37598 12.0422C3.38641 12.8305 3.82544 13.6097 4.60352 13.9416C4.92509 14.0789 5.16499 14.3637 5.24414 14.7082C5.51125 15.8728 6.40927 16.5412 7.22852 16.6174C7.62905 16.6545 8.01264 16.5538 8.33301 16.302C8.64319 16.058 8.95012 15.6254 9.125 14.9016V13.6067C8.76605 13.7641 8.3702 13.8537 7.95312 13.8537C6.9832 13.8537 6.12315 13.3799 5.59277 12.6555C5.30741 12.2656 5.39238 11.7173 5.78223 11.4318C6.1721 11.1468 6.71951 11.2316 7.00488 11.6213C7.21985 11.9149 7.56473 12.1037 7.95312 12.1037C8.59438 12.1036 9.11439 11.5882 9.125 10.9494V8.68869C9.125 8.04067 8.59919 7.51486 7.95117 7.51486C7.468 7.51486 7.0763 7.12299 7.07617 6.63986C7.07644 6.15683 7.46809 5.76486 7.95117 5.76486C8.36879 5.76486 8.7656 5.85312 9.125 6.01095V4.97579C9.12495 4.40269 8.91397 4.02905 8.63867 3.78732C8.34623 3.53076 7.92956 3.37992 7.4834 3.37521ZM12.5166 3.37521C12.0704 3.37995 11.6537 3.53071 11.3613 3.78732C11.1205 3.99879 10.9289 4.3112 10.8848 4.76974L10.875 4.97579V8.25216C11.2341 8.09449 11.6305 8.00611 12.0479 8.00607C13.0179 8.00607 13.8778 8.4798 14.4082 9.20431C14.6934 9.59427 14.6087 10.1426 14.2188 10.4279C13.829 10.7128 13.2815 10.6279 12.9961 10.2385C12.7811 9.94478 12.4364 9.75607 12.0479 9.75607C11.4031 9.75622 10.8801 10.2765 10.875 10.9201C10.875 10.9233 10.876 10.9267 10.876 10.9299C10.876 10.9423 10.8752 10.9547 10.875 10.967V14.9016C11.0499 15.6253 11.3569 16.058 11.667 16.302C11.9873 16.5538 12.371 16.6545 12.7715 16.6174C13.4137 16.5578 14.1019 16.1331 14.499 15.3918C13.8476 15.2908 13.2565 15.0063 12.7852 14.5891C12.4235 14.2688 12.3898 13.7155 12.71 13.3537C13.0303 12.992 13.5835 12.9583 13.9453 13.2785C14.2319 13.5322 14.6069 13.6848 15.0195 13.6848C15.6981 13.6847 16.2779 13.2676 16.5195 12.676C16.7315 12.0075 16.6256 11.2378 16.1318 10.675C15.7658 10.2576 15.7647 9.63005 16.1318 9.21212C16.9846 8.24131 16.6593 6.7117 15.6367 6.07638C15.3301 6.80984 14.7694 7.40976 14.0645 7.76388C13.6327 7.98059 13.1065 7.80597 12.8896 7.37423C12.6734 6.94258 12.8478 6.41722 13.2793 6.2004C13.763 5.95745 14.1011 5.4734 14.1396 4.90841C14.1396 4.34533 13.9316 3.98609 13.6631 3.75704C13.3761 3.5124 12.9632 3.3705 12.5166 3.37521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var nI = n("P00z"),
      nA = n("n5eA"),
      nb = n("wCFm"),
      nE = n("RyCm")
    let nx = (0, nE.bU)(nA.v),
      nT = (0, nE.bU)(nI.n),
      nS = (0, nE.bU)(ny),
      nv = (0, nE.bU)(nP),
      nN = (0, nE.bU)(nb.$),
      nO = new Map([
        [e5.op.limitedMemoryAndStorage.id, nT],
        [e5.op.goIncreasedMemoryAndStorage.id, nT],
        [e5.op.plusMemoryAndStorage.id, nS],
        [e5.op.proMemoryAndStorage.id, nv],
        [e5.We.memoryAndStorage.id, nv],
        [e5.op.goExpandedImages.id, nN],
        [e5.op.plusHigherQualityImages.id, nx],
      ])
    var nw = n("FuzG")
    let nR = "https://help.openai.com/en/collections/3943089-billing"
    function nL(e) {
      let t,
        n = (0, r.c)(3),
        { icon: l, highlighted: i } = e,
        o = void 0 !== i && i ? "var(--icon-accent)" : "var(--text-tertiary)"
      return (
        n[0] !== l || n[1] !== o
          ? ((t = (0, a.jsx)(l, { "aria-hidden": "true", className: "size-5 shrink-0", color: o })),
            (n[0] = l),
            (n[1] = o),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function nM(e) {
      let t,
        n,
        l,
        o,
        s,
        u,
        c,
        d,
        p,
        m,
        _,
        g = (0, r.c)(40)
      g[0] !== e
        ? (({ standalonePricingLayout: l, presentation: t, excludePricingExperiments: o, ...n } = e),
          (g[0] = e),
          (g[1] = t),
          (g[2] = n),
          (g[3] = l),
          (g[4] = o))
        : ((t = g[1]), (n = g[2]), (l = g[3]), (o = g[4]))
      let f = void 0 !== o && o,
        { accountId: h, userId: C } = (0, U.As)(),
        { client: P, getLayer: y, isLoading: I } = (0, J.cn)(),
        { userID: A } = (0, J.cB)(),
        b = null != h && t?.accountId === h && null != C && !I && A === C,
        E = (0, x.Ul)(t7.C) && (null == t || (t.accountId === h && t.visible)),
        T = !f && !1,
        S = void 0 !== l && !f && n.currentPlan === ep.x.FREE
      S && E && y(eN.he).get("use_p13n", !1)
      let v = S && "control" !== l,
        N = "ineligible"
      T && (N = E ? "visible" : "covered")
      let O = (0, J.Zj)("3600660324"),
        w = (0, J.Zj)("2238071649"),
        R = null != h
      g[5] !== R ? ((s = { enabled: R }), (g[5] = R), (g[6] = s)) : (s = g[6])
      let { data: M } = (0, x._U)(L.sE, h, s)
      g[7] === Symbol.for("react.memo_cache_sentinel") ? ((u = { disableExposureLog: !0 }), (g[7] = u)) : (u = g[7])
      let k = (0, J.Ou)("3950229590", u)
      g[8] !== n.offers ? ((c = Object.keys(n.offers ?? {})), (g[8] = n.offers), (g[9] = c)) : (c = g[9])
      let D = c.length > 0
      if (g[10] !== f || g[11] !== y || g[12] !== D) {
        let e = f ? null : y("3768341700", { disableExposureLog: !D })
        ;((d = D ? (e?.get("plus_free_trial_cta_copy_variant", "control") ?? "control") : "control"),
          (g[10] = f),
          (g[11] = y),
          (g[12] = D),
          (g[13] = d))
      } else d = g[13]
      let j = d,
        G = null == h ? void 0 : M?.accounts[h],
        B =
          G?.entitlement.has_active_subscription === !0 &&
          "chatgpt_no_payment_trial" === G.last_active_subscription.purchase_origin_platform,
        Y = v && "object" == typeof l ? l : null,
        F = N,
        H = T && t?.eligibleForCancelAnytime === !0,
        W = T && t?.eligibleForShowProPlan === !0,
        V = T && t?.eligibleForGoIncrementality === !0
      ;(g[14] !== G?.account.structure || g[15] !== P
        ? ((p = () => {
            if (
              G?.account.structure !== "personal" ||
              !(0, i.bz)({
                minimumSeats: (0, i.A9)(),
                maxSeats: 200,
                getConfiguredSeatQuantities: () =>
                  P.getLayer("1945869247", { disableExposureLog: !0 }).get("default_seat_quantities", void 0),
              })
            )
              return
            let e = P.getLayer(eN.j9, { disableExposureLog: !0 }).get("default_billing_interval", void 0)
            return "month" === e || "year" === e ? e : void 0
          }),
          (g[14] = G?.account.structure),
          (g[15] = P),
          (g[16] = p))
        : (p = g[16]),
        g[17] !== k ? ((m = k.get("enabled_custom_checkout_for_team", !0)), (g[17] = k), (g[18] = m)) : (m = g[18]))
      let q = null != G,
        Z = G?.entitlement.scheduled_plan_change,
        $ = G?.eligible_offers,
        K = G?.entitlement.has_active_subscription === !0 || G?.account.has_previously_paid_subscription === !0
      return (
        g[19] !== N ||
        g[20] !== E ||
        g[21] !== f ||
        g[22] !== j ||
        g[23] !== B ||
        g[24] !== v ||
        g[25] !== n ||
        g[26] !== b ||
        g[27] !== O ||
        g[28] !== w ||
        g[29] !== W ||
        g[30] !== V ||
        g[31] !== p ||
        g[32] !== m ||
        g[33] !== q ||
        g[34] !== Z ||
        g[35] !== $ ||
        g[36] !== K ||
        g[37] !== Y ||
        g[38] !== H
          ? ((_ = (0, a.jsx)(nU, {
              ...n,
              personalizedPresentation: Y,
              personalizedPricingTreatment: v,
              backtestSurface: F,
              verbCopyEligible: b,
              cancelAnytimeEligible: H,
              showProPlanEligible: W,
              goIncrementalityEligible: V,
              comparisonVisible: E,
              getDefaultBusinessBillingPeriod: p,
              excludePricingExperiments: f,
              freeTrialCtaVariant: j,
              showGo: O,
              showProlite: w,
              showPremiumSeats: m,
              isNoPaymentTrial: B,
              isAccountResolved: q,
              scheduledPlanChange: Z,
              eligibleOffers: $,
              showBillingHelp: K,
            })),
            (g[19] = N),
            (g[20] = E),
            (g[21] = f),
            (g[22] = j),
            (g[23] = B),
            (g[24] = v),
            (g[25] = n),
            (g[26] = b),
            (g[27] = O),
            (g[28] = w),
            (g[29] = W),
            (g[30] = V),
            (g[31] = p),
            (g[32] = m),
            (g[33] = q),
            (g[34] = Z),
            (g[35] = $),
            (g[36] = K),
            (g[37] = Y),
            (g[38] = H),
            (g[39] = _))
          : (_ = g[39]),
        _
      )
    }
    function nU(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c,
        p,
        g,
        h,
        C,
        y,
        I,
        A,
        b,
        E,
        T,
        O,
        w,
        R,
        L,
        M,
        k,
        D,
        j,
        G,
        B,
        Y,
        F,
        H,
        W,
        V,
        q,
        Z = (0, r.c)(126),
        {
          excludePricingExperiments: $,
          cancelAnytimeEligible: K,
          showProPlanEligible: z,
          debug_showProPlanVariant: Q,
          goIncrementalityEligible: X,
          debug_goIncrementalityVariant: ee,
          debug_cancelAnytimePlacement: et,
          debug_pricingBacktestEnabled: en,
          verbCopyEligible: ea,
          debug_verbCopyEnabled: er,
          immediatePresentation: el,
          backtestSurface: ei,
          comparisonVisible: es,
          currentPlan: ed,
          onTabChange: e_,
          noPaymentTrial: eg,
          debug_noPaymentTrialNow: ef,
          isNoPaymentTrial: eh,
          isAccountResolved: eC,
          isTrialAcquisition: eP,
          scheduledPlanChange: ey,
          eligibleOffers: eI,
          defaultTab: eA,
          highlightPlan: eb,
          defaultProPlan: eE,
          defaultBillingPeriod: ex,
          getDefaultBusinessBillingPeriod: eT,
          loadingTargetPlan: eS,
          pricingInfo: ev,
          countrySelector: ew,
          pricingUnavailable: eR,
          businessPricingUnavailable: eL,
          disabled: eM,
          blockedUpgradeAction: eU,
          isSubscriptionScheduleLoading: ek,
          onRetryPricing: eD,
          onBack: ej,
          onCtaClick: eG,
          onRenewCurrentPlan: eB,
          onOpenExistingWorkspace: eY,
          showGo: eH,
          showProlite: eq,
          showPremiumSeats: eZ,
          showStaticRejoinPlusCta: e$,
          showRejoinProCta: eK,
          showGoRejoinPlus: ez,
          freeTrialCtaVariant: eQ,
          debug_businessBenefitsVariant: eJ,
          debug_autoAdvanceSelectedProToggle: e3,
          debug_showSeeFewerPlans: e7,
          debug_compactMobileTypography: e9,
          debug_showPlusCardShimmer: te,
          showBillingHelp: tt,
          modal: tn,
          offers: ta,
          francePlusPricing: tr,
          explicitOfferPlan: tl,
          daysUntilPlanRenews: ti,
          goPlanChangeDate: to,
          pricingSessionId: ts,
          paidPlanCtaMessage: tu,
          forceAllPlans: tc,
          onRerunPricingPresentation: td,
          personalizedPresentation: tp,
          personalizedPricingTreatment: tm,
        } = e,
        t_ = void 0 !== $ && $,
        tg = void 0 === es || es,
        tf = void 0 !== eh && eh,
        th = void 0 === eC || eC,
        tC = void 0 === eP ? tf : eP,
        tP = void 0 === eS ? null : eS,
        ty = void 0 !== eM && eM,
        tI = void 0 !== ek && ek,
        tA = void 0 === eH || eH,
        tb = void 0 !== eq && eq,
        tE = void 0 !== eZ && eZ,
        tx = void 0 !== e$ && e$,
        tT = void 0 !== eK && eK,
        tS = void 0 !== ez && ez,
        tv = void 0 === eQ ? "control" : eQ,
        tN = void 0 !== tt && tt,
        tO = void 0 !== tn && tn,
        tw = void 0 !== tc && tc,
        tR = (0, x.gh)(ec.u),
        tk = (0, U.As)(),
        [tD] = (0, S.useState)(tp),
        tB = (0, v.A)()
      Z[0] !== tB.locale ? ((t = new Intl.Locale(tB.locale)), (Z[0] = tB.locale), (Z[1] = t)) : (t = Z[1])
      let tV = "ko" === t.language,
        t6 = (0, tK.a)(),
        [t4, t7] = (0, S.useState)(null),
        nt = ed === ep.x.FREE_WORKSPACE,
        nn = (0, eO.m6)(ed)?.pricePlan
      Z[2] !== ta
        ? ((n = [ep.x.PROLITE, ep.x.PRO, ep.x.PROMAX].find((e) => ta?.[e] != null) ?? null), (Z[2] = ta), (Z[3] = n))
        : (n = Z[3])
      let na = n,
        nr = tl === ep.x.PROLITE || tl === ep.x.PRO || tl === ep.x.PROMAX ? tl : (na ?? void 0),
        ni = th && null != nn && (!tf || (0, d.tg)({ eligibleOffers: eI, planName: "chatgptpromax" })),
        no = null == nr && ni,
        ns = eE !== ep.x.PROMAX || (no && ev?.monthlyAmounts.promax != null) ? eE : void 0,
        nu = null != nn,
        np = (0, eO.m6)(ey?.plan_type),
        ng =
          !tf && null != nn && null != np && "downgrade" === (0, eO.aL)({ currentPlan: nn, targetPlan: np.pricePlan })
      Z[4] !== ed ? ((l = (0, em.Hw)(ed)), (Z[4] = ed), (Z[5] = l)) : (l = Z[5])
      let nf = l,
        nP = null == nn ? "business" : (t4 ?? eA ?? "personal"),
        ny = (void 0 !== eR && eR) || (void 0 !== eL && eL && "business" === nP),
        { client: nI, getLayer: nA, isLoading: nb } = (0, J.cn)(),
        { userID: nE } = (0, J.cB)(),
        nT = (0, J.Zj)(eN.Fq),
        nS = "visible" === ei || "covered" === ei,
        nv = (0, t2.I)()
      Z[6] !== en || Z[7] !== nS || Z[8] !== nA
        ? ((i = nS && null == en ? nA(eN.fM, { disableExposureLog: !0 }) : null),
          (o = en ?? i?.get("pricing_backtest_enabled", !1) ?? !1),
          (Z[6] = en),
          (Z[7] = nS),
          (Z[8] = nA),
          (Z[9] = i),
          (Z[10] = o))
        : ((i = Z[9]), (o = Z[10]))
      let nN = o,
        nM = nv || nN,
        nU = th && !ny && !nM && (te ?? nS),
        n0 = tg && (null != te || "visible" === ei)
      ;(Z[11] !== tk.userId || Z[12] !== i || Z[13] !== ei || Z[14] !== nA || Z[15] !== nN || Z[16] !== nI
        ? ((s = () => {
            if (
              null == i ||
              "visible" !== ei ||
              "visible" !== document.visibilityState ||
              null == tk.userId ||
              nI.getContext().user.userID !== tk.userId
            )
              return
            let e = nA(eN.fM, { disableExposureLog: !0 })
            e.ruleID === i.ruleID &&
              e.groupName === i.groupName &&
              e.get("pricing_backtest_enabled", !1) === nN &&
              nA(eN.fM).get("pricing_backtest_enabled", !1)
          }),
          (u = [tk.userId, ei, nA, i, nN, nI]),
          (Z[11] = tk.userId),
          (Z[12] = i),
          (Z[13] = ei),
          (Z[14] = nA),
          (Z[15] = nN),
          (Z[16] = nI),
          (Z[17] = s),
          (Z[18] = u))
        : ((s = Z[17]), (u = Z[18])),
        (0, S.useEffect)(s, u))
      let n2 = (0, eo.U)("(width < 52rem)"),
        n3 = (0, eo.U)("(width < 48rem)"),
        n5 = (0, eo.U)("(width >= 90rem)"),
        [n4, n9] = (0, S.useState)("initial"),
        ae = "expanded" === n4,
        [at, an] = (0, S.useState)(0),
        aa = (0, S.useRef)(null),
        ar = (0, S.useRef)(!1),
        al = (0, S.useRef)(eA ?? "personal"),
        ai = (0, S.useRef)(null)
      ;(Z[19] !== tg || Z[20] !== ae
        ? ((c = () => {
            if (!ae) return
            let e = ai.current
            ;((ai.current = null), tg && e?.())
          }),
          (p = [tg, ae]),
          (Z[19] = tg),
          (Z[20] = ae),
          (Z[21] = c),
          (Z[22] = p))
        : ((c = Z[21]), (p = Z[22])),
        (0, S.useLayoutEffect)(c, p))
      let ao = ta?.[ep.x.PLUS],
        as = tr?.campaignId,
        au = tr?.onPriceRendered,
        ac = ev?.monthlyAmounts[ep.x.PLUS]
      ;(Z[23] !== ac || Z[24] !== as || Z[25] !== au || Z[26] !== ny || Z[27] !== nP
        ? ((g = () => {
            null == as || "personal" !== nP || null == ac || ny || au?.()
          }),
          (h = [ac, as, au, ny, nP]),
          (Z[23] = ac),
          (Z[24] = as),
          (Z[25] = au),
          (Z[26] = ny),
          (Z[27] = nP),
          (Z[28] = g),
          (Z[29] = h))
        : ((g = Z[28]), (h = Z[29])),
        (0, S.useEffect)(g, h))
      let ad = null != ao && "percentage" in ao.metadata.discount && 100 === ao.metadata.discount.percentage,
        [ap, am] = (0, S.useState)(null),
        a_ = ni || nr === ep.x.PROMAX
      a_ || ap !== ep.x.PROMAX || am(null)
      let ag =
          ed === ep.x.FREE || null != nn || tb || nr === ep.x.PROLITE || ns === ep.x.PROLITE || ap === ep.x.PROLITE,
        af = (function ({ presentation: e, pricingInfo: t, showGo: n, showProlite: a }) {
          if (
            null == e ||
            null == t ||
            e.targets[0] === e.targets[1] ||
            e.targets.every((e) => e === ep.x.PROLITE || e === ep.x.PRO)
          )
            return null
          for (let r of e.targets) {
            if (r === ep.x.FREE) continue
            let e = t.monthlyAmounts[r]
            if ((r === ep.x.GO && !n) || (r === ep.x.PROLITE && !a) || null == e || !Number.isFinite(e) || e <= 0)
              return null
          }
          return e.targets.map((t) => ({
            action: t === ep.x.FREE ? "current" : "upgrade",
            highlighted: t === e.selectedTarget,
            id: t === ep.x.PROLITE ? "pro" : t,
            targetPlan: t,
          }))
        })({ presentation: tD, pricingInfo: ny ? null : ev, showGo: tA, showProlite: tb }),
        ah = af?.find(nQ)?.targetPlan
      Z[30] !== ed || Z[31] !== ag ? ((C = eV(ed, ag)), (Z[30] = ed), (Z[31] = ag), (Z[32] = C)) : (C = Z[32])
      let aC = C
      ;(ed === ep.x.PROLITE && ev?.monthlyAmounts.pro == null
        ? (aC = ep.x.PROLITE)
        : ed === ep.x.PROMAX || (a_ && ed === ep.x.PRO && ev?.monthlyAmounts.promax != null)
          ? (aC = ep.x.PROMAX)
          : ed === ep.x.FREE &&
            null == eg &&
            null == tl &&
            0 === Object.keys(ta ?? {}).length &&
            (ah === ep.x.PROLITE || ah === ep.x.PRO) &&
            (aC = ah),
        "business" === nP && (ed === ep.x.PROLITE || ed === ep.x.PRO || ed === ep.x.PROMAX) && (aC = ed))
      let aP = ap ?? nr ?? ns ?? aC,
        ay = null != tk.userId && !nb && nE === tk.userId,
        aI = a_ || aP !== ep.x.PROMAX ? aP : eV(ed, ag),
        aA =
          ((void 0 !== z && z) || null != Q) &&
          (ed === ep.x.FREE || ed === ep.x.GO) &&
          "personal" === nP &&
          th &&
          !tf &&
          null == eg &&
          !ty &&
          !ny &&
          eU?.scope !== "upgrades_and_promotions" &&
          !tw &&
          !(void 0 !== tm && tm) &&
          null == eE &&
          (null == eb || "plus" === eb) &&
          null == tl &&
          0 === Object.keys(ta ?? {}).length &&
          ev?.monthlyAmounts.plus != null &&
          null != ev.monthlyAmounts[aI]
      Z[33] !== aA || Z[34] !== Q || Z[35] !== nA || Z[36] !== ay
        ? ((y = aA && ay && null == Q ? nA(eN.Tf, { disableExposureLog: !0 }) : null),
          (I = aA ? (Q ?? y?.get("variant", "control") ?? "control") : "control"),
          (Z[33] = aA),
          (Z[34] = Q),
          (Z[35] = nA),
          (Z[36] = ay),
          (Z[37] = y),
          (Z[38] = I))
        : ((y = Z[37]), (I = Z[38]))
      let ab = I,
        [aE, ax] = (0, S.useState)(null),
        aT = ta?.[ep.x.SELF_SERVE_BUSINESS],
        aS = aE ?? ex ?? "year"
      Z[39] !== aT || Z[40] !== aS || Z[41] !== ex || Z[42] !== eT || Z[43] !== ev || Z[44] !== tE || Z[45] !== nP
        ? ((A = () => {
            if ("business" === nP && null == ex && tE && null == aT) {
              let e = eT?.()
              if (null != e && ev?.businessAmounts.standard[e] != null) return e
            }
            return aS
          }),
          (Z[39] = aT),
          (Z[40] = aS),
          (Z[41] = ex),
          (Z[42] = eT),
          (Z[43] = ev),
          (Z[44] = tE),
          (Z[45] = nP),
          (Z[46] = A))
        : (A = Z[46])
      let av = A,
        aN = null != aT && (0, f._l)(aT.metadata.discount) ? aT.metadata.discount.application.billing_period : "month",
        aO = null == aN || aS === aN ? aT : void 0,
        aw = aO?.campaignId === "team-1-month-free",
        aR =
          !aw &&
          null != aO &&
          !(0, f._l)(aO.metadata.discount) &&
          (!("value" in aO.metadata.discount) || aO.metadata.discount.currency_code === ev?.businessCurrencyCode),
        aL =
          !aw && null != aO && (0, f._l)(aO.metadata.discount)
            ? {
                standard: (0, f.$u)(aO.metadata.discount, "chatgptteamplan"),
                premium: (0, f.$u)(aO.metadata.discount, "self_serve_business_prolite"),
              }
            : null,
        aM =
          ((void 0 !== X && X) || null != ee) &&
          ed === ep.x.FREE &&
          "business" !== eA &&
          "personal" === nP &&
          (null == eb || "plus" === eb || "go" === eb) &&
          null == eE &&
          tA &&
          th &&
          !ty &&
          !ny &&
          !tC &&
          null == eg &&
          null == tl &&
          0 === Object.keys(ta ?? {}).length &&
          !tx &&
          !tw &&
          !(null != af && !ae) &&
          ev?.monthlyAmounts.go != null &&
          null != ev.monthlyAmounts.plus
      if (Z[47] !== aM || Z[48] !== tg || Z[49] !== ee || Z[50] !== nA || Z[51] !== ay) {
        let e =
          aM && null == ee && ay
            ? nA(eN.mu, { disableExposureLog: !tg || globalThis.document?.visibilityState !== "visible" })
            : null
        ;((b =
          aM &&
          (null != ee
            ? "hide_go" === ee
            : e?.get("web_default_boundary_test_enabled", !1) === !0 && e.get("web_hide_go", !1))),
          (Z[47] = aM),
          (Z[48] = tg),
          (Z[49] = ee),
          (Z[50] = nA),
          (Z[51] = ay),
          (Z[52] = b))
      } else b = Z[52]
      let aU = b,
        ak = aM && "promote_go" === ee ? "go" : eb,
        aD = 2
      n2 ? (aD = 1) : n5 && (aD = "all")
      let {
          personalCards: aj,
          columns: aG,
          focused: aB,
          canCollapse: aY,
          focusedNoPaymentTrial: aF,
        } = (function ({
          currentPlan: e,
          personalPlan: t,
          proPlan: n,
          tab: a,
          hasNoPaymentTrial: r,
          hasDefaultProPlan: l,
          showGo: i,
          explicitOfferPlan: o,
          offeredProPlan: s,
          offers: u,
          highlightPlan: c,
          columnsPerRow: d,
          expanded: p,
          personalizedCards: m,
          showProPlan: _ = !1,
        }) {
          if (
            null != m &&
            e === ep.x.FREE &&
            t === ep.x.FREE &&
            "personal" === a &&
            !p &&
            !r &&
            !l &&
            null == o &&
            null == s &&
            0 === Object.keys(u ?? {}).length
          ) {
            let e = m.map((e) => ("pro" === e.id ? { ...e, targetPlan: n } : e))
            return { personalCards: e, columns: e, focused: !0, canCollapse: !0, focusedNoPaymentTrial: !1 }
          }
          let g = i || e === ep.x.GO || o === ep.x.GO,
            f = []
          if (null != t)
            if ("business" === a) {
              let e = (function (e) {
                let t
                switch (e) {
                  case ep.x.FREE:
                    t = "free"
                    break
                  case ep.x.GO:
                    t = "go"
                    break
                  case ep.x.PLUS:
                    t = "plus"
                    break
                  case ep.x.PROMAX:
                  case ep.x.PROLITE:
                  case ep.x.PRO:
                    t = "pro"
                }
                return { action: "current", highlighted: !1, id: t, targetPlan: e }
              })(t)
              e?.id === "pro" ? (f = eW(t, n).filter((e) => "pro" === e.id)) : null != e && (f = [e])
            } else f = eW(t, n).filter((e) => "go" !== e.id || g)
          let h = e === ep.x.PROLITE || e === ep.x.PRO || e === ep.x.PROMAX,
            C = f.find((e) => e.id === c)?.id ?? (!r && (h || e === ep.x.PLUS) ? "pro" : "plus"),
            P = f.find((e) => e.targetPlan === o)?.id ?? C,
            y = r && "personal" === a && !p && "plus" === P && !l,
            I =
              null == t || "personal" !== a
                ? null
                : (function ({
                    currentPlan: e,
                    highlightedPlan: t,
                    hasPaidSubscription: n,
                    isGoEnabled: a,
                    columnsPerRow: r,
                    expanded: l,
                    alwaysVisiblePlans: i = [],
                  }) {
                    let o = eF(e),
                      s = null == t ? null : eF(t),
                      u = [...(n ? [] : ["free"]), ...(a || "go" === o ? ["go"] : []), "plus", "pro"],
                      c = u.filter((e) => e === o || e === s || i.includes(e)),
                      d = l || 0 === c.length ? u : c,
                      p = d.length < u.length
                    return {
                      plans: (function ({
                        plans: e,
                        currentPlan: t,
                        highlightedPlan: n,
                        columnsPerRow: a,
                        hasHiddenPlans: r = !1,
                      }) {
                        if (!r && ("all" === a || e.length <= a)) return [...e]
                        let l = [...new Set([...(1 === a ? [n, t] : [t]), ...e])].filter(
                          (t) => null != t && e.includes(t),
                        )
                        if (1 !== a && null != n && l.includes(n)) {
                          let e = "all" === a ? l.length : Math.min(a, l.length)
                          ;(l.splice(l.indexOf(n), 1), l.splice(e - 1, 0, n))
                        }
                        return l
                      })({ plans: d, currentPlan: o, highlightedPlan: s, columnsPerRow: r, hasHiddenPlans: p }),
                      hasHiddenPlans: p,
                      canCollapse: l && c.length > 0 && c.length < u.length,
                    }
                  })({
                    currentPlan: t,
                    highlightedPlan: P,
                    hasPaidSubscription: t !== ep.x.FREE,
                    isGoEnabled: g,
                    columnsPerRow: d,
                    expanded: p,
                    alwaysVisiblePlans: f
                      .filter(
                        (e) =>
                          e.id === C ||
                          u?.[e.targetPlan] != null ||
                          e.targetPlan === o ||
                          ("pro" === e.id && _) ||
                          ("pro" === e.id && null != s),
                      )
                      .map((e) => e.id),
                  })
          if (
            (null != I &&
              (f = I.plans.flatMap((e) => f.filter((t) => t.id === e)).map((e) => ({ ...e, highlighted: e.id === P }))),
            _ && !p && (f = [...f.filter((e) => "pro" !== e.id), ...f.filter((e) => "pro" === e.id)]),
            "personal" === a && e === ep.x.GO)
          ) {
            let e = f.find((e) => "go" === e.id)
            null != e && (f = [e, ...f.filter((e) => "go" !== e.id)])
          }
          let A = [...(e === ep.x.FREE_WORKSPACE ? [{ id: "free_workspace" }] : []), ...f]
          return (
            "business" === a && (1 === d ? A.unshift({ id: "team" }) : A.push({ id: "team" })),
            {
              personalCards: f,
              columns: A,
              focused: I?.hasHiddenPlans === !0,
              canCollapse: I?.canCollapse === !0,
              focusedNoPaymentTrial: y,
            }
          )
        })({
          currentPlan: ed,
          personalPlan: nn,
          proPlan: aI,
          tab: nP,
          hasNoPaymentTrial: null != eg,
          hasDefaultProPlan: null != ns,
          showGo: tA && !aU,
          explicitOfferPlan: tl,
          offeredProPlan: nr,
          offers: ta,
          highlightPlan: ak,
          columnsPerRow: aD,
          expanded: ae || tw,
          personalizedCards: af,
          showProPlan: "recommended" === ab || "no_recommendation" === ab,
        }),
        aH = aG.some(nz),
        aW = (0, S.useEffectEvent)(() => {
          ar.current ||
            ((ar.current = !0),
            (0, eu.yy)(tR, tW, {
              selectedPlan: "team",
              exposureSource: ae ? "see_all_plans" : "initial",
              highlightedPlan: ak,
              initialTab: al.current,
              selectedTab: nP,
              pricingPageContextType: "none",
              viewMode: aB ? "focused" : "all_plans",
            }))
        })
      ;(0, S.useEffect)(() => {
        if (!aH || ty || null != tP || ar.current || "u" < typeof IntersectionObserver) return
        let e = aa.current?.querySelector('[data-pricing-plan-type="team"]')
        if (null == e) return
        let t = !0,
          n = new IntersectionObserver(
            (e) => {
              t && e.some(nK) && (aW(), n.disconnect())
            },
            { threshold: 0.5 },
          )
        return (
          n.observe(e),
          () => {
            ;((t = !1), n.disconnect())
          }
        )
      }, [ty, aH, tP, nP])
      let aV = (0, S.useId)(),
        aq =
          ((void 0 !== K && K) || null != et) &&
          tg &&
          ed === ep.x.FREE &&
          "personal" === nP &&
          th &&
          !ty &&
          !ny &&
          null == tP &&
          !tI &&
          eU?.scope !== "upgrades_and_promotions" &&
          (ev?.personalBillingDetails != null || null != et)
            ? aj.filter((e) => {
                let { action: t, targetPlan: n } = e,
                  a = ta?.[n]
                return (
                  "upgrade" === t &&
                  ev?.monthlyAmounts[n] != null &&
                  (null == eU || null == a) &&
                  a?.metadata.promotion_type !== "credit_grant" &&
                  !(0, d.CJ)({ promoCode: a?.promoCode, referralCode: a?.referralCode, promoMetadata: a?.metadata })
                )
              })
            : [],
        aZ = aq.length > 0 && ay && null == et ? nA(eN.Wd, { disableExposureLog: !0 }) : null,
        a$ = et ?? aZ?.get("copy_placement", "none"),
        aK = aq.length > 0 && ("below_cta" === a$ || "subheader" === a$) ? a$ : "none",
        az =
          "personal" === nP &&
          aB &&
          "initial" === n4 &&
          !ny &&
          !ty &&
          null != ev &&
          0 === Object.keys(ta ?? {}).length &&
          2 === aG.length &&
          aG.some(n$) &&
          aj.some(nZ),
        [aQ] = (0, S.useState)(Date.now)
      ;(0, S.useEffect)(() => {
        td?.(az, aQ)
      }, [az, td, aQ])
      let aJ = tE && aG.some(nq),
        aX = aJ && ev?.businessAmounts.premium[aS] != null,
        a1 = ed === ep.x.FREE ? "free" : "paid",
        a0 = (function (e, { proTierDesign: t } = {}) {
          return {
            free: {
              planName: t ? e6.cU.free : e5.DZ.freePlanName,
              headline: e5.DZ.freeHeadline,
              summary: e5.Kc.freeSummary,
              featureSections: [
                {
                  label: t ? void 0 : e5.op.startWithTheBasics,
                  advertisedFeatures: [
                    { label: e5.op.freeLimitedChat, icon: e.chat, categories: ["usage_messages"] },
                    { label: e5.op.freeLimitedImages, icon: e.image, categories: ["images_video"] },
                    { label: e5.op.limitedMemoryAndStorage, icon: e.brain, categories: ["memory", "uploads_storage"] },
                    { label: e5.op.freeLimitedVoice, icon: e.voice, categories: ["voice"] },
                    { label: e5.op.adSupported, icon: e.megaphoneSkinny },
                  ],
                },
              ],
            },
            go: {
              planName: t ? e6.cU.go : e5.DZ.goPlanName,
              headline: e5.op.goHeadline,
              summary: e5.op.goSummary,
              featureSections: [
                {
                  advertisedFeatures: [
                    { label: e5.op.goExpandedChat, icon: e.chats, categories: ["usage_messages"] },
                    { label: e5.op.goExpandedImages, icon: e.image, categories: ["images_video"] },
                    {
                      label: e5.op.goIncreasedMemoryAndStorage,
                      icon: e.brain,
                      categories: ["memory", "uploads_storage"],
                    },
                    { label: e5.op.goExpandedVoice, icon: e.userVoice, categories: ["voice"] },
                    { label: e5.op.adSupported, icon: e.megaphoneSkinny },
                  ],
                },
              ],
            },
            plus: {
              planName: t ? e6.cU.plus : e5.DZ.plusPlanName,
              headline: e5.DZ.plusHeadline,
              summary: e5.op.plusSummary,
              badgeLabel: e5.DZ.plusBadge,
              featureSections: [
                {
                  advertisedFeatures: [
                    {
                      label: e5.op.plusAdvancedIntelligence,
                      icon: e.telescopePlus,
                      categories: ["advanced_intelligence"],
                    },
                    { label: e5.op.plusHigherQualityImages, icon: e.images, categories: ["images_video"] },
                    {
                      label: e5.op.plusWorkAgent,
                      icon: e.workAgent,
                      categories: ["agents_research", "apps_integrations"],
                    },
                    { label: e5.op.plusCodex, icon: e.codex, categories: ["codex"] },
                    { label: e5.op.plusMemoryAndStorage, icon: e.brainPlus, categories: ["memory", "uploads_storage"] },
                    { label: e5.op.plusConnections, icon: e.branch, categories: ["apps_integrations"] },
                    { label: e5.op.plusProjects, icon: e.briefcase, categories: ["projects_gpts"] },
                    { label: e5.op.plusFinanceAndAnalysis, icon: e.finance, categories: ["finance_analysis"] },
                    { label: e5.op.noAds, icon: e.checkmark },
                  ],
                },
              ],
            },
            pro: {
              planName: t ? e6.cU.pro : e5.DZ.proPlanName,
              headline: e5.DZ.proHeadline,
              summary: e5.op.proSummary,
              featureSections: [
                {
                  advertisedFeatures: [
                    { label: e5.op.proFrontierModel, icon: e.telescopePro, categories: ["advanced_intelligence"] },
                    { label: e5.eY.proCodex, icon: e.codex, categories: ["codex"] },
                    { label: e5.op.proMemoryAndStorage, icon: e.brainPro, categories: ["memory", "uploads_storage"] },
                    { label: e5.op.proPlusUsage, icon: e.sparklePlus, categories: ["usage_messages"] },
                    {
                      label: e5.op.proEarlyAccess,
                      icon: e.arrowsClockwiseRotateBadgeSparkle,
                      categories: ["advanced_intelligence"],
                    },
                    { label: e5.op.noAds, icon: e.checkmark },
                  ],
                },
              ],
            },
            team: {
              planName: t ? e6.cU.team : e5.DZ.standaloneBusinessPlanName,
              headline: e5.op.businessHeadline,
              summary: e5.Kc.businessSummary,
              badgeLabel: e5.DZ.businessBadge,
              featureSections: [
                {
                  advertisedFeatures: [
                    { label: e5.eY.businessWorkspaceSecurity, icon: e.shieldLockThin, categories: ["workspace_admin"] },
                    {
                      label: e5.op.businessCompanyKnowledge,
                      icon: e.brainPro,
                      categories: ["agents_research", "apps_integrations"],
                    },
                    { label: e5.op.businessConnections, icon: e.workWithApps, categories: ["apps_integrations"] },
                    {
                      label: e5.op.businessAccessAcrossApps,
                      icon: e.telescopePlus,
                      categories: ["advanced_intelligence"],
                    },
                    {
                      label: e5.op.businessAiForWorkflows,
                      icon: e.fileDocument,
                      categories: ["advanced_intelligence", "finance_analysis"],
                    },
                    { label: e5.eY.businessWorkAgent, icon: e.briefcase, categories: ["agents_research"] },
                    { label: e5.op.businessCentralizedBilling, icon: e.invoice, categories: ["workspace_admin"] },
                    {
                      label: e5.op.businessUsageAnalytics,
                      icon: e.currencyDollar,
                      categories: ["workspace_admin", "usage_messages"],
                    },
                    { label: e5.op.businessNoTraining, icon: e.desktopBadge, categories: ["workspace_admin"] },
                  ],
                },
              ],
            },
          }
        })(
          { ...tL, image: t1.ldW, telescopePlus: t1.Nb7, workAgent: t1.YUZ },
          { audience: nP, proTierDesign: nu ? a1 : void 0 },
        ),
        a2 = a0.team.summary
      aJ && (a2 = eX.a.priceFirstDescription)
      let a3 =
          n3 &&
          th &&
          !ny &&
          aG.some((e) =>
            "team" === e.id
              ? ev?.businessAmounts.standard[aS] != null
              : "free_workspace" !== e.id && e.targetPlan !== ep.x.FREE && ev?.monthlyAmounts[e.targetPlan] != null,
          ) &&
          (e9 ??
            (!t_ &&
              null != tk.userId &&
              !nb &&
              nI.getContext().user.userID === tk.userId &&
              nA(eN.U9).get("use_compact_mobile_typography", !1))),
        a5 = !t_ && ae && aY && !tw && th && null != ev && !ny,
        a6 = a5 && ay && null == e7 ? nA(eN.fG, { disableExposureLog: !0 }) : null,
        a4 = a5 && (e7 ?? a6?.get("show_see_fewer_plans", !1) ?? !1),
        a8 = aJ ? (0, eX.s)(tL) : a0.team.featureSections[0].advertisedFeatures
      if (aX) {
        let e
        ;(Z[53] !== tk.userId || Z[54] !== eJ || Z[55] !== t_ || Z[56] !== nA
          ? ((e = eJ ?? (t_ || null == tk.userId ? "control" : nA(eN.nF).get("variant", "control"))),
            (Z[53] = tk.userId),
            (Z[54] = eJ),
            (Z[55] = t_),
            (Z[56] = nA),
            (Z[57] = e))
          : (e = Z[57]),
          (a8 =
            (function (e) {
              if ("collaboration" === e || "productivity" === e)
                return [
                  {
                    label: "collaboration" === e ? t3.sharedTasks : t3.dotsPremium,
                    icon: "collaboration" === e ? t1.kus : tU.dots,
                  },
                  { label: "collaboration" === e ? t3.spaceCollaboration : t3.spaceDocumentation, icon: t1.qU7 },
                  ...(0, eX.s)(tU)
                    .filter(({ label: e }) => e.id !== eX.a.featureWorkspaceAgents.id)
                    .map((e) =>
                      e.label.id === eX.a.featureNoTrainingByDefault.id ? { ...e, label: t3.dataPrivacy } : e,
                    ),
                ]
            })(e) ?? a8))
      }
      let a7 =
          !t_ &&
          "personal" === nP &&
          ((void 0 !== ea && ea) || null != er) &&
          th &&
          !ny &&
          aG.some((e) => {
            if ("free_workspace" === e.id) return !1
            let t = "team" === e.id ? a8 : a0[e.id].featureSections[0].advertisedFeatures
            return (
              null != ("team" === e.id ? ev?.businessAmounts.standard[aS] : ev?.monthlyAmounts[e.targetPlan]) &&
              t.some(nV)
            )
          }),
        a9 = a7 && ay && null == er ? nA(eN.JL, { disableExposureLog: !0 }) : null,
        re = a7 && (er ?? a9?.get("use_verb_phrases", !1) ?? !1)
      ;((0, S.useEffect)(() => {
        if (
          tg &&
          "visible" === document.visibilityState &&
          null != tk.userId &&
          nI.getContext().user.userID === tk.userId
        )
          for (let [e, t, n, a, r] of [
            [eN.JL, a9, "use_verb_phrases", re, !1],
            [eN.fG, a6, "show_see_fewer_plans", a4, !1],
            [eN.Wd, aZ, "copy_placement", aK, "none"],
            [eN.Tf, null != tP || tI ? null : y, "variant", ab, "control"],
          ]) {
            if (null == t) continue
            let l = nA(e, { disableExposureLog: !0 })
            l.ruleID === t.ruleID && l.groupName === t.groupName && l.get(n, r) === a && nA(e).get(n, r)
          }
      }, [tk.userId, aZ, aK, tg, a6, nA, tI, tP, a4, y, ab, a9, re, nI]),
        Z[58] !== tB || Z[59] !== ev
          ? ((E = (e, t) => {
              let n = void 0 !== t && t
              return null == ev
                ? null
                : (0, t9.U)({
                    intl: tB,
                    amount: e ?? null,
                    currencyCode: n ? ev.businessCurrencyCode : ev.currencyCode,
                    minorUnitExponent: n ? ev.businessMinorUnitExponent : ev.minorUnitExponent,
                  })
            }),
            (Z[58] = tB),
            (Z[59] = ev),
            (Z[60] = E))
          : (E = Z[60]))
      let rt = E
      Z[61] !== tO
        ? ((T = (e, t) =>
            (0, a.jsx)(
              tJ.G,
              {
                appearance: "secondary",
                href: e,
                initiator: "open_in_browser_bridge",
                openTarget: tO ? "external-browser" : void 0,
                children: t,
              },
              e,
            )),
          (Z[61] = tO),
          (Z[62] = T))
        : (T = Z[62])
      let rn = T
      Z[63] !== rn
        ? ((O = (0, a.jsx)(N.A, {
            id: "pricing.comparison.adsHelp",
            defaultMessage: "This plan may include ads. <link>Learn more</link>",
            values: { link: (e) => rn("https://help.openai.com/en/articles/20001047", e) },
          })),
          (Z[63] = rn),
          (Z[64] = O))
        : (O = Z[64])
      let ra = O,
        rr = ev?.businessAmounts.standard[aS],
        rl = ty || null != tP || null == rr,
        ri =
          th &&
          !ny &&
          null != ev &&
          aG.some((e) =>
            "team" === e.id
              ? null != rr || aX
              : "free_workspace" === e.id
                ? null != ev.monthlyAmounts.free
                : nu && null != ev.monthlyAmounts[e.targetPlan],
          ) &&
          nN,
        ro = rr
      null != rr && aL?.standard != null
        ? (ro = (0, f.MG)(rr, aL.standard))
        : null != rr && aR && (ro = (0, d.ME)(rr, aO.metadata))
      let rs = rt(rr, !0),
        ru = rt(ro, !0),
        rc = null != rr && aR ? rt(Math.max(0, (0, f.MG)(rr, aO.metadata.discount)), !0) : null,
        rd =
          aO?.metadata.duration != null && aR && null != rs && null != rc
            ? (0, _.ZI)({
                intl: tB,
                planName: "business",
                promoMetadata: aO.metadata,
                promoCampaignId: aO.campaignId,
                formattedCost: rs.formatted,
                formattedDiscountedCost: rc.formatted,
                qualifyStandardSeatRenewal: aJ && (aO.metadata.schedule?.start_after_num_periods ?? 0) === 0,
              })
            : null,
        rp =
          aO?.metadata.duration != null && aR
            ? (rd?.scheduledCostDuration ?? (0, _.Gm)(tB, aO.metadata.duration))
            : void 0
      ;(Z[65] !== aO || Z[66] !== nf || Z[67] !== aw || Z[68] !== tu
        ? ((w = (0, a.jsx)(N.A, { id: "pricing.comparison.upgradeBusiness", defaultMessage: "Upgrade to Business" })),
          null != tu && (w = (0, a.jsx)(N.A, { ...tu })),
          nf
            ? (w = (0, a.jsx)(N.A, { ...e5.DZ.teamPlanCreate }))
            : null != aO &&
              (w = (0, a.jsx)(N.A, {
                ...(!aw &&
                "percentage" in aO.metadata.discount &&
                100 === aO.metadata.discount.percentage &&
                (aO.metadata.schedule?.start_after_num_periods ?? 0) === 0
                  ? m.W.claimFreeOffer
                  : m.W.claimSpecialOffer),
              })),
          (Z[65] = aO),
          (Z[66] = nf),
          (Z[67] = aw),
          (Z[68] = tu),
          (Z[69] = w))
        : (w = Z[69]),
        Z[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, a.jsx)(N.A, { tagName: "span", ...nd.V })), (Z[70] = R))
          : (R = Z[70]))
      let rm = R,
        r_ = aj.some(nW),
        rg = null == tl && ad && r_
      if (null != eg) {
        let e
        ;(Z[71] !== ef || Z[72] !== eg
          ? ((e = (0, a.jsx)(t5, { trial: eg, debug_now: ef })), (Z[71] = ef), (Z[72] = eg), (Z[73] = e))
          : (e = Z[73]),
          (rm = e))
      } else if ("personal" === nP && rg) {
        let e
        ;(Z[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(N.A, { tagName: "span", ...e5.DZ.plusFreeTrialModalTitle })), (Z[74] = e))
          : (e = Z[74]),
          (rm = e))
      }
      return (
        Z[75] === Symbol.for("react.memo_cache_sentinel") ? ((L = { ref: aa }), (Z[75] = L)) : (L = Z[75]),
        Z[76] !== aK
          ? ((M =
              "subheader" === aK
                ? (0, a.jsx)("p", { className: "text-center", children: (0, a.jsx)(nJ, {}) })
                : void 0),
            (Z[76] = aK),
            (Z[77] = M))
          : (M = Z[77]),
        Z[78] !== el || Z[79] !== ej || Z[80] !== nN || Z[81] !== t6
          ? ((k =
              null == ej
                ? null
                : (0, a.jsx)(nl.d, {
                    useLegacyCloseButton: nN,
                    onClick: ej,
                    safeAreaRight: t6.right,
                    compact: !0,
                    inlineIcon: el,
                  })),
            (Z[78] = el),
            (Z[79] = ej),
            (Z[80] = nN),
            (Z[81] = t6),
            (Z[82] = k))
          : (k = Z[82]),
        Z[83] !== M || Z[84] !== k || Z[85] !== rm
          ? ((D = (0, a.jsx)(e8.Dy, { className: "draggable", title: rm, subtitle: M, closeButton: k })),
            (Z[83] = M),
            (Z[84] = k),
            (Z[85] = rm),
            (Z[86] = D))
          : (D = Z[86]),
        Z[87] !== eD || Z[88] !== ny
          ? ((j = ny
              ? (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 text-sm text-secondary",
                  role: "status",
                  children: [
                    (0, a.jsx)(N.A, {
                      id: "pricing.comparison.unavailable",
                      defaultMessage: "We couldn\u2019t load prices",
                    }),
                    (0, a.jsx)(tQ.$, {
                      onClick: eD,
                      color: "outline",
                      size: "dialog",
                      children: (0, a.jsx)(N.A, { id: "pricing.comparison.retry", defaultMessage: "Try again" }),
                    }),
                  ],
                })
              : null),
            (Z[87] = eD),
            (Z[88] = ny),
            (Z[89] = j))
          : (j = Z[89]),
        Z[90] !== j ? ((G = (0, a.jsx)(a.Fragment, { children: j })), (Z[90] = j), (Z[91] = G)) : (G = Z[91]),
        Z[92] !== tk.accountId ||
        Z[93] !== tk.computeResidency ||
        Z[94] !== nu ||
        Z[95] !== tB ||
        Z[96] !== e_ ||
        Z[97] !== ts ||
        Z[98] !== nM ||
        Z[99] !== tR ||
        Z[100] !== nP
          ? ((B = nu
              ? (0, a.jsx)(e8.BR, {
                  reducedMotion: nM,
                  value: nP,
                  onChange: (e) => {
                    ;(e !== nP && (n9("initial"), (ai.current = null), an(nH)),
                      t7(e),
                      e_?.(e),
                      (0, eu.yy)(tR, P.AuP, {
                        ...(0, t$.o)(
                          new URLSearchParams(window.location.search).get("referrer") ?? document.referrer,
                          tk.accountId,
                          tk.computeResidency,
                        ),
                        selectedTab: e,
                        previousTab: nP,
                        availableTabs: ["personal", "business"],
                        ...(null == ts ? {} : { pricingSessionId: ts }),
                      }))
                  },
                  ariaLabel: tB.formatMessage({ id: "pricing.comparison.audience", defaultMessage: "Plan type" }),
                  leftItem: {
                    value: "personal",
                    label: (0, a.jsx)(N.A, {
                      id: "settings.usage.pricingPlanPage.personalTab",
                      defaultMessage: "Personal",
                    }),
                  },
                  rightItem: {
                    value: "business",
                    label: (0, a.jsx)(N.A, {
                      id: "settings.usage.pricingPlanPage.businessTab",
                      defaultMessage: "Business",
                    }),
                  },
                })
              : null),
            (Z[92] = tk.accountId),
            (Z[93] = tk.computeResidency),
            (Z[94] = nu),
            (Z[95] = tB),
            (Z[96] = e_),
            (Z[97] = ts),
            (Z[98] = nM),
            (Z[99] = tR),
            (Z[100] = nP),
            (Z[101] = B))
          : (B = Z[101]),
        Z[102] !== ra || Z[103] !== aU
          ? ((Y = aU
              ? (0, a.jsxs)("div", {
                  className: "text-xs",
                  children: [(0, a.jsx)("div", { children: (0, a.jsx)(N.A, { ...e6.cU.go }) }), ra],
                })
              : null),
            (Z[102] = ra),
            (Z[103] = aU),
            (Z[104] = Y))
          : (Y = Z[104]),
        Z[105] !== tV || Z[106] !== tO
          ? ((F = tV ? (0, a.jsx)(tz.w, { inDialog: tO }) : null), (Z[105] = tV), (Z[106] = tO), (Z[107] = F))
          : (F = Z[107]),
        Z[108] !== Y || Z[109] !== F
          ? ((H = (0, a.jsxs)(a.Fragment, { children: [Y, F] })), (Z[108] = Y), (Z[109] = F), (Z[110] = H))
          : (H = Z[110]),
        Z[111] !== tO || Z[112] !== nP
          ? ((W =
              "business" === nP
                ? (0, a.jsx)(e8.rP, {
                    renderLink: (e) =>
                      (0, a.jsx)(
                        tJ.G,
                        {
                          className: "mx-1 font-medium",
                          appearance: "secondary",
                          href: "https://openai.com/chatgpt/enterprise/",
                          initiator: "open_in_browser_bridge",
                          openTarget: tO ? "external-browser" : void 0,
                          children: e,
                        },
                        "enterprise",
                      ),
                  })
                : null),
            (Z[111] = tO),
            (Z[112] = nP),
            (Z[113] = W))
          : (W = Z[113]),
        Z[114] !== H || Z[115] !== W
          ? ((V = { legal: H, enterprise: W }), (Z[114] = H), (Z[115] = W), (Z[116] = V))
          : (V = Z[116]),
        Z[117] !== ew ||
        Z[118] !== ed ||
        Z[119] !== nt ||
        Z[120] !== nf ||
        Z[121] !== tf ||
        Z[122] !== tO ||
        Z[123] !== nn ||
        Z[124] !== nP
          ? ((q =
              null != ew && (ed === ep.x.FREE || nt || tf || nf || (null != nn && "business" === nP))
                ? (0, a.jsx)(nc, { ...ew, modal: tO, className: "countryDock-f4BPqa" })
                : null),
            (Z[117] = ew),
            (Z[118] = ed),
            (Z[119] = nt),
            (Z[120] = nf),
            (Z[121] = tf),
            (Z[122] = tO),
            (Z[123] = nn),
            (Z[124] = nP),
            (Z[125] = q))
          : (q = Z[125]),
        (0, a.jsxs)(e4.Dp, {
          as: "main",
          className: "page-F1Na4G",
          children: [
            (0, a.jsx)(e4.a$, {
              className: "scrollArea-wGWYkx",
              compactMobileTypography: a3,
              contentProps: L,
              header: D,
              introduction: G,
              audienceSelector: B,
              grid: {
                columnCount: aG.length,
                audience: nP,
                viewChangeCycle: at,
                reducedMotion: nM || (!0 === el && 0 === at),
              },
              afterPlans:
                aB || a4
                  ? (0, a.jsx)("div", {
                      className: "mt-6 flex justify-center md:mt-8",
                      children: (0, a.jsx)(e4.Vw, {
                        expanded: a4,
                        onClick: (e) => {
                          ;(a4
                            ? n9("collapsed")
                            : (td?.(!1, aQ), (ai.current = (0, e4.Kq)(aa.current, e)), n9("expanded")),
                            an(nF))
                        },
                      }),
                    })
                  : null,
              footer: V,
              children: aG.map((e) => {
                var t, n
                if ("free_workspace" === e.id)
                  return (0, a.jsx)(
                    nX,
                    {
                      reducedMotion: nM,
                      planId: "free_workspace",
                      highlighted: !1,
                      children: (0, a.jsx)(e2.BZ, {
                        type: "standard",
                        actionsBeforePrice: !ri,
                        plan: {
                          id: "free_workspace",
                          lookupType: ep.x.FREE_WORKSPACE,
                          name: (0, a.jsx)(N.A, {
                            id: "pricing.comparison.freeWorkspace",
                            defaultMessage: "Free workspace",
                          }),
                          summary: (0, a.jsx)(N.A, { ...tY.planSummary }),
                        },
                        price: {
                          content: (0, a.jsx)(n1, { reducedMotion: nM, amount: rt(ev?.monthlyAmounts.free, !0) }),
                        },
                        actions: (0, a.jsx)(tj, { children: (0, a.jsx)(N.A, { ...tY.currentPlanCta }) }),
                        features: (0, a.jsx)(tG.wi, {
                          redesigned: !0,
                          children: [
                            {
                              label: tY.limitedModelAccess,
                              icon: tL.upgradePlan,
                              categories: ["advanced_intelligence"],
                            },
                            { label: tY.privacyBuiltIn, icon: tL.identity, categories: ["workspace_admin"] },
                            { label: tY.limitedVideoAndImages, icon: tL.imagesPro, categories: ["images_video"] },
                            { label: tY.teamTools, icon: tL.folderOpenThin, categories: ["projects_gpts"] },
                            { label: tY.unlimitedCollaboratorInvites, icon: tL.group, categories: ["workspace_admin"] },
                            { label: tY.businessIntegrations, icon: tL.addSources, categories: ["apps_integrations"] },
                          ].map(nY),
                        }),
                      }),
                    },
                    "free_workspace",
                  )
                if ("team" === e.id)
                  return (0, a.jsxs)(
                    nX,
                    {
                      planId: "team",
                      reducedMotion: nM,
                      highlighted: !0,
                      children: [
                        (0, a.jsx)(e2.BZ, {
                          type: "highlight",
                          actionsBeforePrice: !ri,
                          plan: {
                            id: "team",
                            lookupType: "team",
                            name: (0, a.jsx)(N.A, { ...a0.team.planName }),
                            headline: (0, a.jsx)(N.A, { ...a0.team.headline }),
                            summary: aw
                              ? (0, a.jsx)(N.A, { ...((0, t0.F)()?.summary ?? m.W.businessIntroductoryOffer) })
                              : (rd?.summary ?? aO?.metadata.summary ?? (0, a.jsx)(N.A, { ...a2 })),
                            badge:
                              null == aO || aw
                                ? null
                                : (0, a.jsx)(e2.fX, {
                                    metadata: aO.metadata,
                                    clockIcon: (0, a.jsx)(tX.I, { asset: tZ.G }),
                                  }),
                            accessory: (0, a.jsx)(e8.fI, {
                              reducedMotion: nM,
                              fitLabels: !0,
                              shouldToggleSelected: !0,
                              className: "ms-auto shrink-0",
                              value: aS,
                              onChange: (e) => {
                                null == tP && ax(e)
                              },
                              ariaLabel: tB.formatMessage({
                                id: "pricing.comparison.billingPeriod",
                                defaultMessage: "Billing period",
                              }),
                              items: [
                                {
                                  value: "year",
                                  label: (0, a.jsx)(N.A, { id: "pricing.comparison.annual", defaultMessage: "Annual" }),
                                },
                                {
                                  value: "month",
                                  label: (0, a.jsx)(N.A, {
                                    id: "pricing.comparison.monthly",
                                    defaultMessage: "Monthly",
                                  }),
                                },
                              ],
                            }),
                          },
                          price: {
                            content: aX
                              ? (0, a.jsx)(e0.p, {
                                  showBillingCadence: !0,
                                  seats: ["standard", "premium"].map((e) => {
                                    let t = ev?.businessAmounts[e],
                                      n = t?.[aS],
                                      r = aL?.[e],
                                      l = "standard" === e ? ro : n
                                    "premium" === e && null != n && null != r && (l = (0, f.MG)(n, r))
                                    let i = rt(l, !0),
                                      o =
                                        null != aT &&
                                        "year" === aS &&
                                        t?.month != null &&
                                        null != t.year &&
                                        t.month > t.year
                                          ? rt(t.month, !0)?.formatted
                                          : void 0
                                    null != n && null != l && l < n && (o = rt(n, !0)?.formatted)
                                    let s = "standard" === e ? rp : void 0
                                    return (
                                      null != r &&
                                        null != n &&
                                        null != ev &&
                                        (s = (0, _.nA)(tB, r, {
                                          monthlySeatPrice: n,
                                          currency: ev.businessCurrencyCode,
                                          billingPeriod: aS,
                                        })),
                                      {
                                        id: e,
                                        label: (0, a.jsx)(N.A, {
                                          ...("standard" === e ? e1._.standardSeatLabel : e1._.premiumSeatLabel),
                                        }),
                                        originalPrice: o,
                                        promotionDuration: s,
                                        price:
                                          null == i
                                            ? (0, a.jsx)(n1, { reducedMotion: nM, amount: null })
                                            : (0, a.jsx)(N.A, {
                                                ...e1._.seatPricePerMonth,
                                                values: {
                                                  price: (0, a.jsx)(
                                                    ne,
                                                    { reducedMotion: nM, value: i.formatted, amount: l, tabular: !1 },
                                                    `price-${tB.locale}-${ev?.businessCurrencyCode}`,
                                                  ),
                                                  period: nB,
                                                },
                                              }),
                                        description: (0, a.jsx)(N.A, {
                                          ...("standard" === e
                                            ? eX.a.standardSeatDescription
                                            : eX.a.premiumSeatDescription),
                                        }),
                                      }
                                    )
                                  }),
                                })
                              : (0, a.jsx)(
                                  n1,
                                  { reducedMotion: nM, amount: ru, numericAmount: ro, business: !0 },
                                  `${tB.locale}-${ev?.businessCurrencyCode}`,
                                ),
                            subtitle:
                              !aX &&
                              (aL?.standard != null && null != rr && null != ev
                                ? (0, _.nA)(tB, aL.standard, {
                                    monthlySeatPrice: rr,
                                    currency: ev.businessCurrencyCode,
                                    billingPeriod: aS,
                                  })
                                : rp),
                          },
                          actions: (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              nf && null != eY
                                ? (0, a.jsx)(tQ.$, {
                                    className: "w-full justify-center",
                                    color: "accent",
                                    size: "beaconAction",
                                    radius: "full",
                                    disabled: null != tP,
                                    onClick: eY,
                                    children: (0, a.jsx)(N.A, { ...e5.DZ.goToExistingWorkspace }),
                                  })
                                : null,
                              (0, a.jsxs)(tQ.$, {
                                className: "w-full justify-center",
                                color: nf ? "secondary" : "accent",
                                size: "beaconAction",
                                radius: "full",
                                disabled: rl,
                                loading: tP === ep.x.SELF_SERVE_BUSINESS,
                                onClick: (e) => eG("upgrade", ep.x.SELF_SERVE_BUSINESS, e, av(), a8?.map(nG)),
                                children: [
                                  nf ? null : (0, a.jsx)(tH, { className: "size-4", "aria-hidden": "true" }),
                                  w,
                                ],
                              }),
                            ],
                          }),
                          features: (0, a.jsx)(tG.wi, {
                            redesigned: !0,
                            children: a8?.map((e) => {
                              let { icon: t, label: n } = e
                              return (0, a.jsx)(
                                tG.PX,
                                {
                                  redesigned: !0,
                                  icon: (0, a.jsx)(nL, { icon: t, highlighted: !0 }),
                                  label: (0, a.jsx)(N.A, { ...nh(n, re) }),
                                },
                                n.id,
                              )
                            }),
                          }),
                          footer: (0, a.jsxs)(a.Fragment, {
                            children: [
                              null != rd || aO?.campaignId === "team-1-month-free"
                                ? (0, a.jsxs)("p", {
                                    className: "pb-6 text-xs",
                                    children: [
                                      null != rd
                                        ? (0, a.jsx)(N.A, {
                                            ...rd.disclaimer,
                                            values: {
                                              article: (e) => rn("https://openai.com/policies/services-agreement", e),
                                            },
                                          })
                                        : null,
                                      aw
                                        ? (0, a.jsx)(N.A, {
                                            ...((0, t0.F)()?.terms ?? m.W.businessIntroductoryOfferTerms),
                                            values: {
                                              article: (e) => rn("https://openai.com/policies/services-agreement", e),
                                            },
                                          })
                                        : null,
                                    ],
                                  })
                                : null,
                              (0, a.jsx)("p", {
                                className: "text-xs",
                                children: (0, a.jsx)(N.A, {
                                  ...e1._.premiumSeatPricingDisclaimer,
                                  values: {
                                    link: (e) =>
                                      rn(
                                        "https://help.openai.com/en/articles/8792828-what-is-chatgpt-team",
                                        (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            (0, a.jsx)("span", { "aria-hidden": "true", children: e }),
                                            (0, a.jsx)("span", {
                                              className: "sr-only",
                                              children: (0, a.jsx)(N.A, { ...e1._.businessHelpLinkLabel }),
                                            }),
                                          ],
                                        }),
                                      ),
                                  },
                                }),
                              }),
                            ],
                          }),
                        }),
                        nU && !rl && (0, a.jsx)(nm, { debugEnabled: te, userId: tk.userId, visible: n0 }),
                      ],
                    },
                    "team",
                  )
                let r = [
                    {
                      value: ep.x.PROLITE,
                      label: tB.formatMessage(e5.We.standard),
                      disabled: !ag || ev?.monthlyAmounts.prolite == null || null != tP,
                    },
                    {
                      value: ep.x.PRO,
                      label: tB.formatMessage(e5.We.more),
                      disabled: ev?.monthlyAmounts.pro == null || null != tP,
                    },
                    ...(a_
                      ? [
                          {
                            value: ep.x.PROMAX,
                            label: tB.formatMessage(e5.We.max),
                            disabled: ev?.monthlyAmounts.promax == null || null != tP,
                          },
                        ]
                      : []),
                  ],
                  l = r.filter(nj),
                  i = l.findIndex((e) => e.value === aI),
                  o = i >= 0 ? l[i + 1] : null,
                  s = (e) => {
                    null == tP &&
                      e !== aI &&
                      ((0, eu.yy)(tR, P.AuP, {
                        previousTab: aI,
                        selectedTab: e,
                        availableTabs: r.map(nD),
                        pricingSessionId: ts,
                      }),
                      am(e))
                  },
                  u =
                    "below_cta" === aK &&
                    aq.some((t) => {
                      let { targetPlan: n } = t
                      return n === e.targetPlan
                    })
                      ? `${aV}-${e.targetPlan}`
                      : void 0,
                  c = tS && "personal" === nP ? "plus" === e.id : e.highlighted,
                  { planName: p, headline: g, summary: h, featureSections: C } = a0[e.id],
                  y =
                    e.targetPlan === ep.x.PROLITE || e.targetPlan === ep.x.PRO || e.targetPlan === ep.x.PROMAX
                      ? {
                          advertisedFeatures:
                            ((t = e.targetPlan),
                            (n =
                              !t_ && "personal" === nP && nA("2468235248").get("show_faster_image_generation", !1)
                                ? tM.images
                                : void 0),
                            [
                              {
                                label: e5.We.frontierModels,
                                icon: tM.telescopePro,
                                categories: ["advanced_intelligence"],
                              },
                              ...(nT
                                ? [{ label: e5.We.assistant, icon: tM.dots, categories: ["agents_research"] }]
                                : []),
                              ...(null == n
                                ? []
                                : [{ label: e5.We.fasterImageCreation, icon: n, categories: ["images_video"] }]),
                              {
                                label:
                                  "promax" === t
                                    ? e5.We.maxUsage
                                    : "pro" === t
                                      ? e5.We.moreUsage
                                      : "prolite" === t
                                        ? e5.We.standardUsage
                                        : e5.We.summaryUsage,
                                icon: tM.codex,
                                categories: ["codex", "agents_research"],
                              },
                              {
                                label: e5.We.memoryAndStorage,
                                icon: tM.brainPro,
                                categories: ["memory", "uploads_storage"],
                              },
                              { label: e5.We.earlyAccess, icon: tM.sparklePlus },
                              { label: e5.op.noAds, icon: tM.checkmark },
                            ]),
                        }
                      : C[0],
                  I = ta?.[e.targetPlan],
                  A = tC && "plus" === e.id,
                  b = !!tr?.campaignId && I?.promoCode === tr.campaignId,
                  E = ng && "downgrade" === e.action,
                  x = I?.metadata ?? null,
                  T =
                    "current" === e.action &&
                    ((!tf && x?.plan_type_change === "equal") ||
                      (tf &&
                        e.targetPlan !== ep.x.FREE &&
                        (0, d.tg)({ eligibleOffers: eI, planName: (0, nw.K)(e.targetPlan) }) &&
                        (tC || (e.targetPlan === tl && x?.plan_type_change === "equal")))),
                  S = c && "plus" === e.id && "no_recommendation" !== ab,
                  v = ev?.monthlyAmounts[e.targetPlan],
                  O =
                    null == ev
                      ? void 0
                      : {
                          price: ev.taxConfig?.[e.targetPlan]?.month,
                          taxPercent: ev.taxConfig?.tax_percent,
                          minorUnitExponent: ev.minorUnitExponent,
                        },
                  R = "current" === e.action && !T && null != eB,
                  L = "current" === e.action ? T : null != x,
                  M = (0, d.CJ)({ promoCode: I?.promoCode, referralCode: I?.referralCode, promoMetadata: x }),
                  U = !tf && !M && ("upgrade" === e.action || L),
                  k = U && (eU?.scope === "upgrades_and_promotions" || L) ? eU?.onClick : void 0,
                  D = U && tI,
                  j = ty || E || null != tP || D || ("current" === e.action && !T && !R) || (null == v && !M),
                  G = c && !j && null == k && nU,
                  B = null != x && null != v ? (0, d.ME)(v, x, O) : v,
                  Y =
                    null != x && null != v && null != ev
                      ? (0, _.ZI)({
                          intl: tB,
                          planName: e.targetPlan,
                          promoMetadata: x,
                          promoCampaignId: I?.campaignId,
                          daysUntilPlanRenews: ti,
                          planRenewsAt: e.targetPlan === ep.x.GO ? (to ?? void 0) : void 0,
                          formattedCost: tB.formatNumber(v, {
                            style: "currency",
                            currency: ev.currencyCode,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }),
                          formattedDiscountedCost: tB.formatNumber(Math.max(0, (0, f.M3)(v, x.discount, O)), {
                            style: "currency",
                            currency: ev.currencyCode,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }),
                        })
                      : null,
                  F = c ? "accent" : "primary"
                ;(nu && "downgrade" === e.action && (F = "primary"),
                  "current" !== e.action || T || (F = "outlineGhost"))
                let H = null != eg && "plus" === e.id && ("upgrade" === e.action || ("current" === e.action && tC)),
                  W = "current" === e.action && !T && !R && !H,
                  V = (0, a.jsx)(n6, {
                    card: e,
                    isDowngradeBlockedBySchedule: E,
                    paidPlanCtaMessage: tu,
                    currentPlanActionable: T,
                    showRejoinPlus: tx || tS,
                    showRejoinPro: tT && ed === ep.x.PLUS && !tf,
                    offer: x,
                    freeTrialCtaVariant: tv,
                  })
                R
                  ? (V = (0, a.jsx)(N.A, {
                      id: "pricingPlanPage.renewCurrentPlan",
                      defaultMessage: "Renew subscription",
                    }))
                  : H
                    ? (V = (0, a.jsx)(t8, { trial: eg }))
                    : b &&
                      "plus" === e.id &&
                      "upgrade" === e.action &&
                      (V = (0, a.jsx)(N.A, { id: "pricing.comparison.upgradePlus", defaultMessage: "Upgrade to Plus" }))
                let q = (0, a.jsx)(N.A, { ...(!nu ? p : e6.cU[e.id]) })
                return (
                  A && (q = (0, a.jsx)(N.A, { id: "pricing.comparison.plusTrial", defaultMessage: "Plus trial" })),
                  (0, a.jsxs)(
                    nX,
                    {
                      reducedMotion: nM,
                      planId: e.id,
                      highlighted: c,
                      children: [
                        (0, a.jsx)(e2.BZ, {
                          type: c ? "highlight" : "standard",
                          actionsBeforePrice: nu && !ri,
                          plan: {
                            id: e.id,
                            lookupType: e.targetPlan,
                            name: q,
                            headline: (0, a.jsx)(N.A, { ...g }),
                            summary: (0, a.jsx)(N.A, { ...h }),
                            accessory: (0, a.jsx)(a.Fragment, {
                              children:
                                "pro" !== e.id || nN
                                  ? null
                                  : (0, a.jsx)("div", {
                                      className: "max-w-full min-w-0 shrink-0",
                                      onClickCapture: (e) => {
                                        if (e.defaultPrevented) return
                                        let t =
                                          e.target instanceof Element
                                            ? e.target.closest('[role="radio"][aria-checked="true"]')
                                            : null
                                        null == t ||
                                          !e.currentTarget.contains(t) ||
                                          (null != o &&
                                            tg &&
                                            "visible" === document.visibilityState &&
                                            (e3 ??
                                              (!t_ &&
                                                null != tk.userId &&
                                                !nb &&
                                                nI.getContext().user.userID === tk.userId &&
                                                nA(eN.G1).get("auto_advance_selected_pro_toggle", !1)))) ||
                                          e.preventDefault()
                                      },
                                      children: (0, a.jsx)(e8.fI, {
                                        reducedMotion: nM,
                                        value: aI,
                                        onChange: s,
                                        shouldToggleSelected: !0,
                                        onSelectedItemActivate: null == o ? void 0 : () => s(o.value),
                                        ariaLabel: tB.formatMessage({
                                          id: "pricing.comparison.proUsage",
                                          defaultMessage: "Pro usage",
                                        }),
                                        items: r,
                                      }),
                                    }),
                            }),
                            badge: b
                              ? null != v &&
                                (0, a.jsx)(e2.KD, {
                                  hasIcon: !0,
                                  children: (0, a.jsxs)("span", {
                                    className: "inline-flex items-center gap-1",
                                    children: [
                                      (0, a.jsx)(tX.I, { asset: tZ.G }),
                                      (0, a.jsx)(N.A, { ...m.W.limitedTime }),
                                    ],
                                  }),
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    A
                                      ? (0, a.jsx)(e2.KD, {
                                          children: (0, a.jsx)(N.A, {
                                            id: "pricing.comparison.currentTrial",
                                            defaultMessage: "Current trial",
                                          }),
                                        })
                                      : null,
                                    A || null == x || (aF && "plus" === e.id)
                                      ? null
                                      : (0, a.jsx)(e2.fX, {
                                          metadata: x,
                                          clockIcon: (0, a.jsx)(tX.I, { asset: tZ.G }),
                                        }),
                                    !A && (null == x || (aF && "plus" === e.id)) && S
                                      ? (0, a.jsx)(e2.KD, { children: (0, a.jsx)(N.A, { ...e5.DZ.plusBadge }) })
                                      : null,
                                  ],
                                }),
                          },
                          price: {
                            content: (0, a.jsxs)(a.Fragment, {
                              children: [
                                !b && null != B && null != v && B < v
                                  ? (0, a.jsx)(n1, { reducedMotion: nM, amount: rt(v), strikethrough: !0 })
                                  : null,
                                (0, a.jsx)(n1, {
                                  reducedMotion: nM,
                                  amount: rt(B),
                                  numericAmount: "pro" === e.id ? B : void 0,
                                  taxInformation: (0, a.jsx)(tF.O, {
                                    config: ev?.taxConfig,
                                    price: ev?.taxConfig?.[e.targetPlan]?.month,
                                    amount: B,
                                  }),
                                }),
                              ],
                            }),
                          },
                          actions: (0, a.jsxs)(a.Fragment, {
                            children: [
                              W
                                ? (0, a.jsx)(tj, { children: V })
                                : (0, a.jsxs)(tQ.$, {
                                    className: "w-full justify-center",
                                    color: F,
                                    "aria-describedby": u,
                                    size: "beaconAction",
                                    radius: "full",
                                    disabled: j,
                                    loading: D || tP === e.targetPlan,
                                    onClick: (t) => {
                                      ;(U && "upgrade" === e.action && !L && eU?.onOrdinaryUpgradeAttempt?.(),
                                        R
                                          ? eB()
                                          : null != k
                                            ? k("current" === e.action ? "upgrade" : e.action, e.targetPlan)
                                            : ("current" !== e.action || T) &&
                                              eG(
                                                "current" === e.action ? "upgrade" : e.action,
                                                e.targetPlan,
                                                t,
                                                aS,
                                                y.advertisedFeatures.map(nk),
                                              ))
                                    },
                                    children: [
                                      c && ((null != eg && T) || (nu ? "upgrade" === e.action : "current" !== e.action))
                                        ? (0, a.jsx)(tH, { className: "size-4", "aria-hidden": "true" })
                                        : null,
                                      V,
                                    ],
                                  }),
                              null != u &&
                                (0, a.jsx)("p", {
                                  id: u,
                                  className: "mt-2 text-center text-xs text-secondary",
                                  children: (0, a.jsx)(nJ, {}),
                                }),
                            ],
                          }),
                          features: (0, a.jsx)("div", {
                            "data-pro-ultrafast": e.targetPlan === ep.x.PROMAX,
                            "data-reduced-motion": nM,
                            children: (0, a.jsxs)(tG.wi, {
                              className: "pro" === e.id ? "proFeatureList-qMR7OV" : void 0,
                              redesigned: !0,
                              label:
                                null == y.label || (aF && "plus" === e.id) ? void 0 : (0, a.jsx)(N.A, { ...y.label }),
                              children: [
                                "pro" === e.id
                                  ? (0, a.jsx)(tG.PX, {
                                      className: "ultrafastFeature-C1N_Ch",
                                      position: "absolute",
                                      ariaHidden: e.targetPlan !== ep.x.PROMAX,
                                      redesigned: !0,
                                      icon: (0, a.jsx)(tX.I, {
                                        asset: tq,
                                        className: c ? "shrink-0 text-(--icon-accent)" : "shrink-0 text-tertiary",
                                      }),
                                      label: (0, a.jsx)(N.A, { ...e5.We.ultrafastSpeed }),
                                    })
                                  : null,
                                (function (e, t, n) {
                                  if (!t) return e
                                  let a = e.map((e) => ({ ...e, icon: (e.label.id && nO.get(e.label.id)) || e.icon }))
                                  if ("pro" === n && !a.some(({ categories: e }) => e?.includes("images_video"))) {
                                    let e = a.findIndex(({ categories: e }) => e?.includes("codex"))
                                    e >= 0 && a.splice(e, 0, { label: nC, icon: nx, categories: ["images_video"] })
                                  }
                                  return a
                                })(y.advertisedFeatures, re, e.id).map((t) => {
                                  let { icon: n, label: r, categories: l } = t,
                                    i = r.id
                                  return (
                                    "pro" === e.id &&
                                      (n8(r) && (i = "pro-usage"),
                                      l?.includes("images_video") && (i = "pro-image-speed")),
                                    (0, a.jsx)(
                                      tG.PX,
                                      {
                                        redesigned: !0,
                                        icon: (0, a.jsx)(nL, { icon: n, highlighted: c }),
                                        label:
                                          "pro" === e.id && n8(r)
                                            ? (0, a.jsx)(n7, { message: r, useVerbCopy: re })
                                            : (0, a.jsx)(N.A, { ...nh(r, re, e.id) }),
                                      },
                                      i,
                                    )
                                  )
                                }),
                              ],
                            }),
                          }),
                          footer:
                            "plus" === e.id && null == Y
                              ? null
                              : (0, a.jsxs)("div", {
                                  className: "relative mt-3 flex flex-col text-xs",
                                  children: [
                                    null != Y
                                      ? (0, a.jsx)("div", {
                                          children: (0, a.jsx)(n_.z, { disclaimer: Y.disclaimer, modal: tO }),
                                        })
                                      : null,
                                    null == Y && "go" === e.id ? (0, a.jsx)("div", { children: ra }) : null,
                                    null == Y && "pro" === e.id
                                      ? (0, a.jsx)(N.A, {
                                          ...e5.We.disclaimer,
                                          values: {
                                            lineBreak: " ",
                                            link: (e) =>
                                              rn("https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro", e),
                                          },
                                        })
                                      : null,
                                    "free" === e.id
                                      ? (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("p", {
                                              children: (0, a.jsx)(N.A, { ...e5.DZ.freeUsageDisclaimer }),
                                            }),
                                            (0, a.jsx)(N.A, {
                                              id: "pricing.comparison.billingHelp",
                                              defaultMessage: "Have an existing plan? <link>See billing help</link>",
                                              values: { link: (e) => rn(nR, e) },
                                            }),
                                          ],
                                        })
                                      : null,
                                    "pro" === e.id && tN
                                      ? (0, a.jsx)(tJ.G, {
                                          className: "font-medium",
                                          appearance: "secondary",
                                          href: nR,
                                          initiator: "open_in_browser_bridge",
                                          openTarget: tO ? "external-browser" : void 0,
                                          children: (0, a.jsx)(N.A, { ...e5.DZ.billingHelp }),
                                        })
                                      : null,
                                  ],
                                }),
                        }),
                        G && (0, a.jsx)(nm, { debugEnabled: te, userId: tk.userId, visible: n0 }),
                      ],
                    },
                    e.id,
                  )
                )
              }),
            }),
            q,
          ],
        })
      )
    }
    function nk(e) {
      let { label: t } = e
      return t
    }
    function nD(e) {
      let { value: t } = e
      return t
    }
    function nj(e) {
      return !e.disabled
    }
    function nG(e) {
      let { label: t } = e
      return t
    }
    function nB(e) {
      return (0, a.jsx)(e0.e, { children: e }, "period")
    }
    function nY(e) {
      let { icon: t, label: n } = e
      return (0, a.jsx)(
        tG.PX,
        { redesigned: !0, icon: (0, a.jsx)(nL, { icon: t }), label: (0, a.jsx)(N.A, { ...n }) },
        n.id,
      )
    }
    function nF(e) {
      return e + 1
    }
    function nH(e) {
      return e + 1
    }
    function nW(e) {
      return "plus" === e.id
    }
    function nV(e) {
      let { label: t } = e
      return nh(t, !0) !== t
    }
    function nq(e) {
      return "team" === e.id
    }
    function nZ(e) {
      return "plus" === e.id && e.highlighted
    }
    function n$(e) {
      return "free" === e.id
    }
    function nK(e) {
      return e.isIntersecting && e.intersectionRatio >= 0.5
    }
    function nz(e) {
      return "team" === e.id
    }
    function nQ(e) {
      return "pro" === e.id
    }
    function nJ() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(N.A, {
              id: "pricing.comparison.cancelAnytime",
              defaultMessage: "No commitment. Cancel anytime.",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function nX(e) {
      let t,
        n,
        l = (0, r.c)(7),
        { reducedMotion: i, planId: o, children: s, highlighted: u } = e,
        c = u ? "highlight" : "standard",
        d = i ? "transition-none" : void 0
      return (
        l[0] !== s || l[1] !== c || l[2] !== d
          ? ((t = (0, a.jsx)(e3.u, { type: c, className: d, children: s })),
            (l[0] = s),
            (l[1] = c),
            (l[2] = d),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== o || l[5] !== t
          ? ((n = (0, a.jsx)(e3.i, { planId: o, children: t })), (l[4] = o), (l[5] = t), (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    function n1(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c = (0, r.c)(27),
        { reducedMotion: d, amount: p, numericAmount: m, taxInformation: _, business: g, strikethrough: f } = e,
        h = void 0 !== g && g,
        C = void 0 !== f && f
      if (null == p) {
        let e,
          t,
          n = !d && "animate-pulse"
        return (
          c[0] !== n ? ((e = (0, tD.A)("h-6 w-20 rounded bg-text/10", n)), (c[0] = n), (c[1] = e)) : (e = c[1]),
          c[2] !== e ? ((t = (0, a.jsx)("span", { className: e })), (c[2] = e), (c[3] = t)) : (t = c[3]),
          t
        )
      }
      c[4] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(e7.q, {})), (c[4] = t)) : (t = c[4])
      let P = t
      if (h) {
        let e
        ;(c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(N.A, { ...e1._.businessChatGptAndCodexPriceFrequency })), (c[5] = e))
          : (e = c[5]),
          (P = e))
      }
      c[6] !== p.parts ? ((n = p.parts.filter(n5).map(n3).join("")), (c[6] = p.parts), (c[7] = n)) : (n = c[7])
      let y = n,
        I = p.formatted
      return (
        c[8] !== p.parts ? ((l = p.parts.filter(n2).map(n0).join("")), (c[8] = p.parts), (c[9] = l)) : (l = c[9]),
        c[10] !== h || c[11] !== y || c[12] !== m || c[13] !== d
          ? ((i = h || null != m ? (0, a.jsx)(ne, { reducedMotion: d, value: y, amount: m, tabular: !h }) : y),
            (c[10] = h),
            (c[11] = y),
            (c[12] = m),
            (c[13] = d),
            (c[14] = i))
          : (i = c[14]),
        c[15] !== p.formatted || c[16] !== C || c[17] !== l || c[18] !== i
          ? ((o = (0, a.jsx)(e7.D5, { strikethrough: C, screenReaderText: I, currency: l, amount: i })),
            (c[15] = p.formatted),
            (c[16] = C),
            (c[17] = l),
            (c[18] = i),
            (c[19] = o))
          : (o = c[19]),
        c[20] !== P || c[21] !== C || c[22] !== _
          ? ((s = C
              ? null
              : (0, a.jsxs)(e7.sV, {
                  children: [P, null != _ ? (0, a.jsxs)(a.Fragment, { children: [" ", _] }) : null],
                })),
            (c[20] = P),
            (c[21] = C),
            (c[22] = _),
            (c[23] = s))
          : (s = c[23]),
        c[24] !== o || c[25] !== s
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [o, s] })), (c[24] = o), (c[25] = s), (c[26] = u))
          : (u = c[26]),
        u
      )
    }
    function n0(e) {
      return e.value
    }
    function n2(e) {
      return "currency" === e.type
    }
    function n3(e) {
      return e.value
    }
    function n5(e) {
      return "currency" !== e.type
    }
    function n6(e) {
      let t,
        n = (0, r.c)(19),
        {
          card: l,
          isDowngradeBlockedBySchedule: i,
          paidPlanCtaMessage: o,
          currentPlanActionable: s,
          showRejoinPlus: u,
          showRejoinPro: c,
          offer: d,
          freeTrialCtaVariant: p,
        } = e
      if (i) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { ...e5.DZ.planChangeScheduled })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("current" === l.action && !s) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "pricing.comparison.current", defaultMessage: "Your current plan" })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (d?.plan_type_change === "equal" || d?.plan_type_change === "downgrade") {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { ...m.W.applyToSubscription })), (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if ("downgrade" === l.action) {
        let e
        if ("go" === l.id) {
          let e
          return (
            n[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(N.A, { ...e5.DZ.goDowngrade })), (n[3] = e))
              : (e = n[3]),
            e
          )
        }
        if ("plus" === l.id) {
          let e
          return (
            n[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(N.A, { ...e5.DZ.plusDowngrade })), (n[4] = e))
              : (e = n[4]),
            e
          )
        }
        return (
          n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "pricing.comparison.downgrade", defaultMessage: "Downgrade plan" })),
              (n[5] = e))
            : (e = n[5]),
          e
        )
      }
      if (null != d) {
        let e, t
        return (
          n[6] !== l.id || n[7] !== p || n[8] !== d.discount
            ? ((e =
                "percentage" in d.discount && 100 === d.discount.percentage
                  ? (0, _._$)("plus" === l.id, p)
                  : m.W.claimSpecialOffer),
              (n[6] = l.id),
              (n[7] = p),
              (n[8] = d.discount),
              (n[9] = e))
            : (e = n[9]),
          n[10] !== e ? ((t = (0, a.jsx)(N.A, { ...e })), (n[10] = e), (n[11] = t)) : (t = n[11]),
          t
        )
      }
      if ("plus" === l.id && u) {
        let e
        return (
          n[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { ...e5.i$.rejoinPlus })), (n[12] = e))
            : (e = n[12]),
          e
        )
      }
      if (c && "upgrade" === l.action && l.targetPlan === ep.x.PRO) {
        let e
        return (
          n[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "pricing.comparison.rejoinPro", defaultMessage: "Rejoin Pro" })), (n[13] = e))
            : (e = n[13]),
          e
        )
      }
      if (null != o && "upgrade" === l.action && "free" !== l.id) {
        let e
        return (n[14] !== o ? ((e = (0, a.jsx)(N.A, { ...o })), (n[14] = o), (n[15] = e)) : (e = n[15]), e)
      }
      if ("go" === l.id) {
        let e
        return (
          n[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "pricing.comparison.upgradeGo", defaultMessage: "Upgrade to Go" })),
              (n[16] = e))
            : (e = n[16]),
          e
        )
      }
      if ("plus" === l.id) {
        let e
        return (
          n[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "pricing.comparison.upgradePlus", defaultMessage: "Upgrade to Plus" })),
              (n[17] = e))
            : (e = n[17]),
          e
        )
      }
      return (
        n[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(N.A, { id: "pricing.comparison.upgradePro", defaultMessage: "Upgrade to Pro" })),
            (n[18] = t))
          : (t = n[18]),
        t
      )
    }
    let n4 = [e5.We.standardUsage, e5.We.moreUsage, e5.We.maxUsage]
    function n8(e) {
      return n4.some((t) => t.id === e.id)
    }
    function n7(e) {
      let t,
        n,
        l = (0, r.c)(5),
        { message: i, useVerbCopy: o } = e
      return (
        l[0] !== i || l[1] !== o
          ? ((t = n4.map((e) =>
              (0, a.jsx)(
                "span",
                {
                  className: "featureCopyVariant-PGLI4N",
                  "aria-hidden": e.id !== i.id,
                  style: { visibility: e.id === i.id ? "visible" : "hidden" },
                  children: (0, a.jsx)(N.A, { ...nh(e, o) }),
                },
                e.id,
              ),
            )),
            (l[0] = i),
            (l[1] = o),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== t
          ? ((n = (0, a.jsx)("span", { className: "featureCopy-BGG0zf", children: t })), (l[3] = t), (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    var n9 = n("LH8k"),
      ae = n("eShZ"),
      at = n("jUaO"),
      an = n("JNtf"),
      aa = n("mUDD")
    function ar(e) {
      let t,
        n,
        l,
        i,
        o,
        s,
        u,
        c,
        d,
        p,
        m = (0, r.c)(19),
        { onBack: _, onManage: g } = e,
        f = (0, O.Zp)()
      return (
        m[0] !== _
          ? ((t = (e) => {
              e || _()
            }),
            (m[0] = _),
            (m[1] = t))
          : (t = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(an.L3, {
              children: (0, a.jsx)(N.A, {
                id: "settings.usage.subscriptionScheduleConflict.title",
                defaultMessage: "Confirm plan changes",
              }),
            })),
            (m[2] = n))
          : (n = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(aa.OO, {
              children: (0, a.jsx)(aa.c7, {
                title: n,
                subtitle: (0, a.jsx)(an.rr, {
                  children: (0, a.jsx)(N.A, {
                    id: "settings.usage.subscriptionScheduleConflict.upgradeExplanation",
                    defaultMessage: "Cancel your upcoming subscription change to continue",
                  }),
                }),
              }),
            })),
            (m[3] = l))
          : (l = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(N.A, { id: "settings.usage.subscriptionScheduleConflict.back", defaultMessage: "Back" })),
            (m[4] = i))
          : (i = m[4]),
        m[5] !== _
          ? ((o = (0, a.jsx)(tQ.$, { color: "ghost", onClick: _, children: i })), (m[5] = _), (m[6] = o))
          : (o = m[6]),
        m[7] !== f || m[8] !== g
          ? ((s = (e) => {
              ;(g(),
                (0, Y.PQ)({
                  event: e,
                  href: eO.oK,
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                }))
            }),
            (m[7] = f),
            (m[8] = g),
            (m[9] = s))
          : (s = m[9]),
        m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(N.A, {
              id: "settings.usage.subscriptionScheduleConflict.billingSettings",
              defaultMessage: "Go to billing settings",
            })),
            (m[10] = u))
          : (u = m[10]),
        m[11] !== s
          ? ((c = (0, a.jsx)(tQ.$, { color: "primary", onClick: s, children: u })), (m[11] = s), (m[12] = c))
          : (c = m[12]),
        m[13] !== o || m[14] !== c
          ? ((d = (0, a.jsxs)(aa.R4, {
              children: [l, (0, a.jsx)(aa.OO, { children: (0, a.jsxs)(aa.Es, { children: [o, c] }) })],
            })),
            (m[13] = o),
            (m[14] = c),
            (m[15] = d))
          : (d = m[15]),
        m[16] !== t || m[17] !== d
          ? ((p = (0, a.jsx)(an.lG, { open: !0, size: "default", onOpenChange: t, children: d })),
            (m[16] = t),
            (m[17] = d),
            (m[18] = p))
          : (p = m[18]),
        p
      )
    }
    var al = n("wnjU")
    function ai(e) {
      let t,
        n,
        l = (0, r.c)(6),
        i = (0, O.zy)(),
        o = (0, J.cn)()
      l[0] !== i.search || l[1] !== o
        ? ((t = (0, eB.u)(i.search, o)), (l[0] = i.search), (l[1] = o), (l[2] = t))
        : (t = l[2])
      let s = t
      return (
        l[3] !== s || l[4] !== e
          ? ((n =
              null == s
                ? (e.loadingContent ?? (0, a.jsx)("main", { className: "h-full bg-surface" }))
                : (0, a.jsx)(ao, { ...e, excludePricingExperiments: s, optimizedPricing: !s && e.optimizedPricing })),
            (l[3] = s),
            (l[4] = e),
            (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    function ao(e) {
      let t,
        n = (0, r.c)(3),
        l = (0, G.YL)("always")
      return (
        n[0] !== l || n[1] !== e
          ? ((t = (0, a.jsx)(as, { ...e, account: l })), (n[0] = l), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function as(e) {
      let t,
        n,
        l,
        i,
        o = (0, r.c)(8)
      return (
        o[0] !== e
          ? (({ account: t, loadingContent: n, ...l } = e), (o[0] = e), (o[1] = t), (o[2] = n), (o[3] = l))
          : ((t = o[1]), (n = o[2]), (l = o[3])),
        o[4] !== t || o[5] !== n || o[6] !== l
          ? ((i = (0, a.jsx)(eZ, { account: t, loadingContent: n, AccountPage: au, pageProps: l })),
            (o[4] = t),
            (o[5] = n),
            (o[6] = l),
            (o[7] = i))
          : (i = o[7]),
        i
      )
    }
    function au(e) {
      let t,
        n,
        G,
        er,
        eg,
        eP,
        ey,
        eI,
        eA,
        eb,
        eE,
        eT,
        eS,
        ew,
        eL,
        eM,
        eB,
        eF,
        eW,
        eV,
        eZ,
        e$,
        eK,
        ez,
        eX,
        e1,
        e0,
        e2,
        e3,
        e5,
        e6,
        e4,
        e8,
        e7,
        e9,
        te,
        tt,
        tn,
        ta,
        tr,
        tl,
        ti,
        to,
        ts,
        tu,
        tc,
        td,
        tp,
        tm,
        t_,
        tg,
        tf,
        th,
        tC,
        tP,
        ty,
        tI,
        tA,
        tb,
        tE,
        tx,
        tT,
        tS,
        tv,
        tN,
        tO,
        tw,
        tR,
        tL,
        tM,
        tU,
        tk,
        tD,
        tj,
        tG,
        tB,
        tY,
        tF,
        tH,
        tW,
        tV,
        tq,
        tZ,
        t$,
        tK,
        tz,
        tQ,
        tJ,
        tX,
        t1,
        t0,
        t2,
        t3,
        t5,
        t6,
        t4,
        t8,
        t7,
        t9,
        ne,
        nt,
        nn,
        na = (0, r.c)(555),
        {
          currentAccount: nr,
          hideCloseButton: nl,
          excludePricingExperiments: ni,
          loadingContent: no,
          upgradeHandoff: ns,
          optimizedPricing: nu,
          standalonePricingLayout: nc,
          modal: nd,
          returnPath: np,
        } = e,
        nm = void 0 !== nu && nu,
        ng = void 0 !== nd && nd,
        nf = (0, x.gh)(ec.u),
        nh = (0, v.A)(),
        [nC] = (0, S.useState)(af),
        [nP, ny] = (0, S.useState)(!1),
        nI = (0, O.zy)(),
        nA = (0, O.Zp)(),
        nb = (0, O.$P)("/"),
        nE = (0, O.$P)("/pricing/offers"),
        nx = (0, en.b)(),
        nT = nf.queryClient,
        nS = (0, U.As)(),
        { accountId: nv, email: nN, userId: nO } = nS
      na[0] !== nv ||
      na[1] !== nS.authMethod ||
      na[2] !== nr.id ||
      na[3] !== nr.plan_type ||
      na[4] !== nm ||
      na[5] !== nO
        ? ((n =
            nm && "free" === nr.plan_type && "chatgpt" === nS.authMethod && null != nv && nv === nr.id && null != nO
              ? { accountId: nv, userId: nO }
              : void 0),
          (na[0] = nv),
          (na[1] = nS.authMethod),
          (na[2] = nr.id),
          (na[3] = nr.plan_type),
          (na[4] = nm),
          (na[5] = nO),
          (na[6] = n))
        : (n = na[6])
      let nR = n,
        nL = (0, S.useRef)(null),
        nU = (0, S.useRef)(null),
        nk = ((0, x.Ul)(M.chatGptAuthenticatedAccountId$), (0, x.Ul)(M.o8)),
        nD = (0, J.cn)(),
        { client: nj, getLayer: nG, isLoading: nB } = nD,
        [nY, nF] = (0, S.useState)(),
        { country: nH } = (0, J.cB)()
      na[7] !== nY || na[8] !== nH ? ((G = nY ?? (0, c.c_)(nH)), (na[7] = nY), (na[8] = nH), (na[9] = G)) : (G = na[9])
      let nW = G,
        nV = (0, e_.I)(),
        nq = (0, J.Zj)("2437304967"),
        nZ = nI.state ?? null,
        n$ = nZ?.desktopCheckout
      na[10] !== nr.id || na[11] !== n$ || na[12] !== nf || na[13] !== nO
        ? ((er = () =>
            null == n$ ||
            (n$.accountId === nr.id &&
              n$.userId === nO &&
              nf.get(M.chatGptAuthenticatedAccountId$) === n$.accountId &&
              nf.get(M.chatGptAuthenticatedUserId$) === n$.userId)),
          (na[10] = nr.id),
          (na[11] = n$),
          (na[12] = nf),
          (na[13] = nO),
          (na[14] = er))
        : (er = na[14])
      let nK = er
      na[15] !== n$
        ? ((eg = (e) => null != n$ && !(e?.metaKey || e?.ctrlKey || e?.shiftKey || e?.altKey || e?.button === 1)),
          (na[15] = n$),
          (na[16] = eg))
        : (eg = na[16])
      let nz = eg,
        nQ = nZ?.subscriptionRenewalEntry
      na[17] !== nr.id || na[18] !== nI || na[19] !== nZ || na[20] !== nO
        ? ((eP = (0, eC.Lp)(nr.id, nO, nI, nZ)),
          (na[17] = nr.id),
          (na[18] = nI),
          (na[19] = nZ),
          (na[20] = nO),
          (na[21] = eP))
        : (eP = na[21])
      let nJ = eP,
        { directProEntry: nX, isDirectProOwner: n1, proReturnPath: n0 } = nJ,
        n2 = (0, S.useRef)(null != nX && nJ.hasHandoff),
        [n3, n5] = (0, S.useState)(!1),
        [n6, n4] = (0, S.useState)(null),
        [n8, n7] = (0, S.useState)(null),
        an = nQ?.accountId === nv && nQ.userId === nO && nv === nr.id,
        aa = null != nQ && !an
      ;(na[22] !== nv ||
      na[23] !== nI.hash ||
      na[24] !== nI.pathname ||
      na[25] !== nI.search ||
      na[26] !== nA ||
      na[27] !== nQ ||
      na[28] !== nZ ||
      na[29] !== nO
        ? ((ey = () => {
            if (null == nZ || null == nQ || null == nv || null == nO || (nQ.accountId === nv && nQ.userId === nO))
              return
            let e = { ...nZ }
            ;(delete e.subscriptionRenewalEntry,
              nA({ pathname: nI.pathname, search: nI.search, hash: nI.hash }, { replace: !0, state: e }))
          }),
          (eI = [nv, nI.hash, nI.pathname, nI.search, nA, nQ, nZ, nO]),
          (na[22] = nv),
          (na[23] = nI.hash),
          (na[24] = nI.pathname),
          (na[25] = nI.search),
          (na[26] = nA),
          (na[27] = nQ),
          (na[28] = nZ),
          (na[29] = nO),
          (na[30] = ey),
          (na[31] = eI))
        : ((ey = na[30]), (eI = na[31])),
        (0, S.useEffect)(ey, eI))
      let ai = nr.id,
        { intent: ao, rejected: as } = nJ,
        au = nJ.attribution?.returnPath ?? np ?? nZ?.returnPath ?? "/"
      na[32] !== nI.pathname ? ((eA = (0, eq.RJ)(nI.pathname)), (na[32] = nI.pathname), (na[33] = eA)) : (eA = na[33])
      let ah = eA,
        aC = ns?.context,
        aP = nJ.attribution?.source ?? nZ?.source ?? aC?.openModalLocation ?? "direct_navigation",
        ay = ns?.search ?? nI.search,
        aI = nZ?.returnPath
      na[34] !== nI || na[35] !== ng || na[36] !== ay || na[37] !== aI
        ? ((eb = (0, eq.oI)(nI, ng, aI, ay)), (na[34] = nI), (na[35] = ng), (na[36] = ay), (na[37] = aI), (na[38] = eb))
        : (eb = na[38])
      let aA = (0, O.$P)(eb),
        ab = "free_workspace" === nr.plan_type ? ep.x.FREE_WORKSPACE : ((0, eO.m6)(nr.plan_type)?.pricePlan ?? null)
      na[39] !== nI.search ? ((eE = (0, eY.S)(nI.search)), (na[39] = nI.search), (na[40] = eE)) : (eE = na[40])
      let aE = eE,
        ax = nZ?.defaultTab ?? aE.defaultTab
      null != ao && (ax = ao.targetPlan === ep.x.SELF_SERVE_BUSINESS ? "business" : "personal")
      let aT = null != nv && null != ab
      na[41] !== aT ? ((eT = { enabled: aT }), (na[41] = aT), (na[42] = eT)) : (eT = na[42])
      let { data: aS, isLoading: av, isFetching: aN, isError: aO, refetch: aw } = (0, x._U)(L.sE, nv, eT),
        aR = null == nv ? void 0 : aS?.accounts[nv],
        aL =
          aR?.entitlement.has_active_subscription === !0 &&
          "chatgpt_no_payment_trial" === aR.last_active_subscription.purchase_origin_platform,
        aM = nr.id
      na[43] !== ab || na[44] !== aL
        ? ((eS = (0, eO.gx)(ab) || aL), (na[43] = ab), (na[44] = aL), (na[45] = eS))
        : (eS = na[45])
      let aU = eS
      na[46] !== aU ? ((ew = { enabled: aU }), (na[46] = aU), (na[47] = ew)) : (ew = na[47])
      let {
          data: ak,
          isError: aD,
          isFetchedAfterMount: aj,
          isLoading: aG,
          isFetching: aB,
          refetch: aY,
        } = (0, x._U)(H.Bd, aM, ew),
        aF = nX?.userId
      ;(na[48] !== aM || na[49] !== aF
        ? ((eL = (0, $.Ie)(aM, aF)), (na[48] = aM), (na[49] = aF), (na[50] = eL))
        : (eL = na[50]),
        na[51] !== aU || na[52] !== eL
          ? ((eM = { ...eL, enabled: aU, refetchOnMount: "always", refetchOnWindowFocus: "always", staleTime: 0 }),
            (na[51] = aU),
            (na[52] = eL),
            (na[53] = eM))
          : (eM = na[53]))
      let { data: aH, isError: aW, isFetchedAfterMount: aV, isFetching: aq, isLoading: aZ, refetch: a$ } = (0, E.I)(eM),
        [aK, az] = (0, S.useState)(null),
        aQ = aV && !aW && void 0 !== aH,
        aJ = aQ && (null == aH || (aH?.entitlement != null && null != aH.last_active_subscription)) ? aH : void 0
      aL && aQ && (aK?.accountId !== nr.id || aK.subscription !== aJ) && az({ accountId: nr.id, subscription: aJ })
      let aX = aK?.accountId === nr.id ? aK.subscription : void 0
      ;(aQ && (aX = aJ),
        na[54] !== aX || na[55] !== aL || na[56] !== ak
          ? ((eB = aL && null != ak ? (0, K.U)(ak, aX) : ak),
            (na[54] = aX),
            (na[55] = aL),
            (na[56] = ak),
            (na[57] = eB))
          : (eB = na[57]))
      let a1 = eB
      na[58] !== ab || na[59] !== aL || na[60] !== a1
        ? ((eF = aL && null != a1 ? ((0, eO.m6)(a1.account.plan_type)?.pricePlan ?? null) : ab),
          (na[58] = ab),
          (na[59] = aL),
          (na[60] = a1),
          (na[61] = eF))
        : (eF = na[61])
      let a0 = eF,
        a2 = (0, x.Ul)(nZ?.rejoinPro == null ? null : M.PO)
      if (na[62] !== nv || na[63] !== nr.id || na[64] !== a0 || na[65] !== a2 || na[66] !== nZ || na[67] !== nO) {
        let e = null == a2 ? null : (0, at.bA)(a2, nv)
        ;((eW = (0, at.bW)({
          state: nZ,
          accountId: e?.accountId === nr.id ? e.accountId : null,
          userId: e?.userId === nO ? nO : null,
          currentPlan: a0,
        })),
          (na[62] = nv),
          (na[63] = nr.id),
          (na[64] = a0),
          (na[65] = a2),
          (na[66] = nZ),
          (na[67] = nO),
          (na[68] = eW))
      } else eW = na[68]
      let a3 = eW,
        a5 = aR?.entitlement.discount,
        a6 =
          a3?.variant === "pricing" &&
          aR?.entitlement.trial?.is_trialing !== !0 &&
          (null == a5 ||
            ((a5.discount_start_in_num_periods ?? 0) <= 0 &&
              null != a5.discount_expires_at &&
              Date.parse(a5.discount_expires_at) <= 1e3 * nC)),
        [a4, a8] = (0, S.useState)(null),
        a7 = aL && null != a1 && a1 !== ak ? aX?.billing_currency : void 0,
        a9 = aL && aK?.accountId !== nr.id && aq,
        re = aL && !a9 && null == a1,
        rt = aL && a1?.entitlement.subscription_plan === "chatgptplus_no_payment_trial",
        rn = (0, x._U)(eQ, aL),
        ra = rn?.accountId === nr.id && rn.userId === nk && "active" === rn.kind ? rn : null
      ;(na[69] !== nv || na[70] !== an || na[71] !== nI.key || na[72] !== nT || na[73] !== nf.query
        ? ((eV = () => {
            if (!an || null == nv) return
            let e = !0
            return (
              nT
                .fetchQuery({ ...nf.query.getOptions(L.sE, nv), staleTime: 0 })
                .then(() => {
                  e && n7(nI.key)
                })
                .catch(ag),
              () => {
                e = !1
              }
            )
          }),
          (na[69] = nv),
          (na[70] = an),
          (na[71] = nI.key),
          (na[72] = nT),
          (na[73] = nf.query),
          (na[74] = eV))
        : (eV = na[74]),
        na[75] !== nv || na[76] !== an || na[77] !== nI.key || na[78] !== nT || na[79] !== nf
          ? ((eZ = [nv, an, nI.key, nT, nf]),
            (na[75] = nv),
            (na[76] = an),
            (na[77] = nI.key),
            (na[78] = nT),
            (na[79] = nf),
            (na[80] = eZ))
          : (eZ = na[80]),
        (0, S.useEffect)(eV, eZ))
      let rr = null == nv ? null : aS?.accounts[nv]
      na[81] !== aN || na[82] !== nr.plan_type || na[83] !== nI.key || na[84] !== rr || na[85] !== n8
        ? ((e$ = n8 === nI.key && !aN && null != rr && rr.account.plan_type === nr.plan_type && (0, V.P)(rr)),
          (na[81] = aN),
          (na[82] = nr.plan_type),
          (na[83] = nI.key),
          (na[84] = rr),
          (na[85] = n8),
          (na[86] = e$))
        : (e$ = na[86])
      let rl = e$,
        ri = an && rl
      ;(na[87] !== aS ||
      na[88] !== aN ||
      na[89] !== rl ||
      na[90] !== an ||
      na[91] !== nI.hash ||
      na[92] !== nI.key ||
      na[93] !== nI.pathname ||
      na[94] !== nI.search ||
      na[95] !== nA ||
      na[96] !== nZ ||
      na[97] !== n8
        ? ((eK = () => {
            if (!an || n8 !== nI.key || aN || rl || null == aS || null == nZ) return
            let e = { ...nZ }
            ;(delete e.subscriptionRenewalEntry,
              nA({ pathname: nI.pathname, search: nI.search, hash: nI.hash }, { replace: !0, state: e }))
          }),
          (ez = [aS, aN, rl, an, nI.hash, nI.key, nI.pathname, nI.search, nA, nZ, n8]),
          (na[87] = aS),
          (na[88] = aN),
          (na[89] = rl),
          (na[90] = an),
          (na[91] = nI.hash),
          (na[92] = nI.key),
          (na[93] = nI.pathname),
          (na[94] = nI.search),
          (na[95] = nA),
          (na[96] = nZ),
          (na[97] = n8),
          (na[98] = eK),
          (na[99] = ez))
        : ((eK = na[98]), (ez = na[99])),
        (0, S.useEffect)(eK, ez))
      let ro = null == nv ? null : aS?.accounts[nv]?.eligible_promo_campaigns,
        rs =
          ra?.canPurchasePlus === !0 &&
          ro?.plus?.metadata.plan_name === "chatgptplusplan" &&
          "stripe" === ro.plus.metadata.processor &&
          "recurring" === ro.plus.metadata.price_period &&
          "discount" === ro.plus.metadata.promotion_type,
        ru = (0, _.XU)("plus", ra?.canExtend || rs ? ep.x.FREE : a0, ro?.plus),
        rc = (0, _.XU)("go", a0, ro?.go),
        rd = new URLSearchParams(nI.search),
        rp = nZ?.offer != null || rd.has("promoCode") || rd.has("referralCode"),
        rm = new URLSearchParams(ay)
      na[100] !== nI.search
        ? ((eX = (0, i.E2)(nI.search)),
          (e1 = eX.promoCampaign?.toLowerCase()),
          (na[100] = nI.search),
          (na[101] = eX),
          (na[102] = e1))
        : ((eX = na[101]), (e1 = na[102]))
      let r_ = e1,
        rg = !rp && "team-1-month-free" === r_,
        rf =
          rp ||
          null != eX.promoCode ||
          ro?.team?.metadata.plan_name !== "chatgptteamplan" ||
          (ro.team.id !== r_ && (null != r_ || "team-1-month-free" !== ro.team.id))
            ? void 0
            : ro.team
      if (rg) {
        let e
        ;(na[103] !== rf || na[104] !== nh
          ? ((e = rf ?? {
              id: "team-1-month-free",
              metadata: {
                plan_name: "chatgptteamplan",
                summary: nh.formatMessage(p.DZ.businessSummary),
                discount: { percentage: 100 },
                duration: { num_periods: 1, period: "month" },
              },
            }),
            (na[103] = rf),
            (na[104] = nh),
            (na[105] = e))
          : (e = na[105]),
          (rf = e))
      }
      let rh = rf?.id === "team-1-month-free" && null == r_
      rd.has("price_interval") || rd.has("selectedPlan")
        ? (e0 = eX.priceInterval)
        : (null != rf || rg) && (e0 = "month")
      let rC =
          "ios" === rd.get("from_webview") &&
          (/iPad|iPhone|iPod/.test((0, ed.$)()) ||
            (globalThis.navigator?.platform === "MacIntel" && navigator.maxTouchPoints > 1)),
        rP
      !1 !== na[106] ? ((e2 = () => void 0), (na[106] = !1), (na[107] = e2)) : (e2 = na[107])
      let [ry] = (0, S.useState)(e2),
        rI = (0, _.m8)({
          requestedPromoCampaignId: rd.get("promo_campaign") ?? void 0,
          eligiblePlusPromoCampaignId: ru?.id,
          eligibleGoPromoCampaignId: rc?.id,
          shouldAutoApplyPlusOneMonthFreePromo: !nq,
        }),
        rA = null == nv ? void 0 : aS?.accounts[nv],
        rb = null != a0
      if (na[108] !== a7 || na[109] !== nZ?.offer?.metadata) {
        var rE
        ;((e3 =
          (null != (rE = nZ?.offer?.metadata) && "value" in rE.discount ? rE.discount.currency_code : void 0) ?? a7),
          (na[108] = a7),
          (na[109] = nZ?.offer?.metadata),
          (na[110] = e3))
      } else e3 = na[110]
      na[111] !== nR || na[112] !== nm || na[113] !== nY || na[114] !== rA || na[115] !== rb || na[116] !== e3
        ? ((e5 = {
            billingAccount: rA,
            enabled: rb,
            selectedCountry: nY,
            optimizedPricing: nm,
            earlyPriceCatalog: nR,
            personalPricingCurrency: e3,
          }),
          (na[111] = nR),
          (na[112] = nm),
          (na[113] = nY),
          (na[114] = rA),
          (na[115] = rb),
          (na[116] = e3),
          (na[117] = e5))
        : (e5 = na[117])
      let { data: rx, isError: rT, isFetching: rS, isSuccess: rv, refetch: rN } = (0, $.zw)(e5),
        rO = nm && null != nY,
        rw = nm ? rx : null
      na[118] !== nr.id || na[119] !== nW || na[120] !== nR || na[121] !== rO || na[122] !== rw
        ? ((e6 = { accountId: nr.id, country: nW, refreshSelectedCountry: rO, pricing: rw, earlyPriceCatalog: nR }),
          (na[118] = nr.id),
          (na[119] = nW),
          (na[120] = nR),
          (na[121] = rO),
          (na[122] = rw),
          (na[123] = e6))
        : (e6 = na[123])
      let { data: rR, isError: rL, refetch: rM } = (0, $.ER)(e6),
        rU = rL ? rx : (rR ?? rx),
        rk = (function ({
          currentAccount: e,
          currentPlan: t,
          accountId: n,
          accounts: a,
          plusCampaign: r,
          goCampaign: l,
          beaconUpgradeIntent: i,
          hasExplicitPromotion: o,
          trial: s,
          campaignId: u,
          searchParams: c,
          routeState: d,
          pricingInfo: p,
          intl: m,
          canUseAdvertisedTrialPlusCampaign: g,
        }) {
          let f = {}
          for (let h of [ep.x.PLUS, ep.x.GO]) {
            let C = h === ep.x.PLUS ? r : l,
              P = i?.targetPlan === h ? i.promoCampaignId : null,
              y =
                P !== _.Ho || eH({ currentPlan: t, targetPlan: h, campaignId: P, eligiblePlusCampaignId: r?.id })
                  ? P
                  : null,
              I = o
                ? void 0
                : (y ??
                  (0, _.mA)({
                    plan: h,
                    promoCampaignId: h === ep.x.GO && s?.canExtend && u === _.ww ? void 0 : u,
                    eligiblePromoCampaignId: C?.id,
                    suppressGoFallback: c.get("promoCode") === _.ww,
                  }))
            if (null == I) continue
            let A = (0, _.kz)(h, I, m)
            if (
              (I.startsWith("resurrection-discount-v1-")
                ? (A = C?.id === I ? { ...C.metadata, promotion_type_label: null } : null)
                : h === ep.x.PLUS &&
                  g &&
                  null == A &&
                  C?.id === I &&
                  (A = { ...C.metadata, promotion_type_label: null }),
              null == A &&
                h === ep.x.GO &&
                (t === ep.x.FREE ||
                  (t === ep.x.GO &&
                    (a?.accounts[e.id]?.last_active_subscription.will_renew === !1 ||
                      a?.accounts[e.id]?.entitlement.is_eligible_for_cp === !0) &&
                    a?.accounts[e.id]?.entitlement.has_active_subscription === !0 &&
                    ["chatgpt_web", "chatgpt_mobile_ios_web_view"].includes(
                      a?.accounts[e.id]?.last_active_subscription.purchase_origin_platform ?? "",
                    ))) &&
                "personal" === e.structure &&
                n === e.id &&
                !c.has("promoCode") &&
                !c.has("referralCode") &&
                d?.offer == null &&
                (null == i || (i.targetPlan === h && i.accountId === e.id && i.promoCampaignId === I)) &&
                C?.id === I &&
                (0, _.Ci)(C) &&
                (!c.has("promo_campaign") || c.get("promo_campaign") === C.id) &&
                (!("value" in C.metadata.discount) || C.metadata.discount.currency_code === p?.currencyCode))
            ) {
              f[h] = {
                plan: h,
                promoCode: C.id,
                metadata: {
                  ...C.metadata,
                  promotion_type_label: null,
                  plan_type_change: t === ep.x.GO ? "equal" : C.metadata.plan_type_change,
                },
              }
              continue
            }
            null != A && (f[h] = { plan: h, metadata: A, campaignId: I })
          }
          return f
        })({
          currentAccount: nr,
          currentPlan: a0,
          accountId: nv,
          accounts: aS,
          plusCampaign: ru,
          goCampaign: rc,
          beaconUpgradeIntent: ao,
          hasExplicitPromotion: rp,
          trial: ra,
          campaignId: rI,
          searchParams: rd,
          routeState: nZ,
          pricingInfo: rU,
          intl: nh,
          canUseAdvertisedTrialPlusCampaign: rs,
        }),
        rD = nV && !nB && !1
      if (na[124] !== rD || na[125] !== nG) {
        let e = rD ? nG(eN.MR, { disableExposureLog: !0 }) : null
        ;((e4 = e?.groupName == null ? null : e.get("promo_campaign_id", "")),
          (na[124] = rD),
          (na[125] = nG),
          (na[126] = e4))
      } else e4 = na[126]
      let rj = e4,
        rG = ro?.plus,
        rB = rk[ep.x.PLUS],
        rY = null == rB || (null != rj && "" !== rj && rG?.id === rj && rB.campaignId === rj) ? rj : null
      ;(rY &&
        rG?.id === rY &&
        "chatgptplusplan" === rG.metadata.plan_name &&
        (rk[ep.x.PLUS] = {
          plan: ep.x.PLUS,
          promoCode: rG.id,
          metadata: { ...rG.metadata, promotion_type_label: null },
        }),
        na[127] !== rY || na[128] !== nG
          ? ((e8 = () => {
              if (null == rY || nL.current === rY) return
              let e = nG(eN.MR, { disableExposureLog: !0 })
              null != e.groupName &&
                e.get("promo_campaign_id", "") === rY &&
                ((nL.current = rY), nG(eN.MR).get("promo_campaign_id", ""))
            }),
            (na[127] = rY),
            (na[128] = nG),
            (na[129] = e8))
          : (e8 = na[129]))
      let rF = e8
      ;(null != rf &&
        (rk[ep.x.SELF_SERVE_BUSINESS] = { plan: ep.x.SELF_SERVE_BUSINESS, metadata: rf.metadata, campaignId: rf.id }),
        nZ?.offer != null && (rk[nZ.offer.plan] = nZ.offer))
      let rH =
        !(!rp && !rC && ra?.presentationEnabled) ||
        !ra.canUpgradePlus ||
        !ra.canPurchasePlus ||
        nZ?.offer != null ||
        rm.has("promoCode") ||
        rm.has("referralCode") ||
        rm.has("gift_modal_plan") ||
        (null != rm.get("promo_campaign") && rm.get("promo_campaign") !== _.ww) ||
        (rk[ep.x.PLUS]?.campaignId != null && rk[ep.x.PLUS]?.campaignId !== _.ww) ||
        rk[ep.x.GO]?.campaignId?.startsWith("resurrection-discount-v1-")
          ? null
          : ra
      if (rH?.canExtend && null == rk[ep.x.PLUS]) {
        let e = (0, _.kz)(ep.x.PLUS, _.ww, nh)
        null != e && (rk[ep.x.PLUS] = { plan: ep.x.PLUS, metadata: e, campaignId: _.ww })
      }
      let rW = null == nv ? null : aS?.accounts[nv]?.entitlement.renews_at
      if (na[130] !== nv || na[131] !== aS || na[132] !== a0 || na[133] !== nC || na[134] !== rW) {
        e9 = Number.isFinite((te = null == rW ? 0 / 0 : Date.parse(rW))) ? Math.ceil((te - 1e3 * nC) / 864e5) : null
        let e = null == nv ? null : aS?.accounts[nv]?.entitlement.cancels_at
        ;((e7 = null == e ? 0 / 0 : Date.parse(e)),
          (tt =
            a0 === ep.x.GO
              ? (0, _.Dx)({
                  daysUntilPlanRenews: e9,
                  daysUntilSubscriptionCancelAt: void 0,
                  planRenewsAt: Number.isFinite(te) ? new Date(te) : void 0,
                  subscriptionCancelsAt: Number.isFinite(e7) ? new Date(e7) : void 0,
                })
              : void 0),
          (na[130] = nv),
          (na[131] = aS),
          (na[132] = a0),
          (na[133] = nC),
          (na[134] = rW),
          (na[135] = e7),
          (na[136] = e9),
          (na[137] = te),
          (na[138] = tt))
      } else ((e7 = na[135]), (e9 = na[136]), (te = na[137]), (tt = na[138]))
      let rV = tt
      ;(na[139] !== nv || na[140] !== nO
        ? ((tn = { accountId: nv, userId: nO }), (na[139] = nv), (na[140] = nO), (na[141] = tn))
        : (tn = na[141]),
        !1 !== na[142] ? ((ta = { enabled: !1 }), (na[142] = !1), (na[143] = ta)) : (ta = na[143]))
      let { data: rq, isLoading: rZ } = (0, x._U)(D.km, tn, ta),
        r$ = null == aS && aO,
        rK = av || (aU && aG) || a9 || !1
      na[144] !== nv ||
      na[145] !== aS ||
      na[146] !== rK ||
      na[147] !== ni ||
      !1 !== na[148] ||
      na[149] !== nD ||
      na[150] !== rq?.email_domain_type
        ? ((tr = void 0),
          (na[144] = nv),
          (na[145] = aS),
          (na[146] = rK),
          (na[147] = ni),
          (na[148] = !1),
          (na[149] = nD),
          (na[150] = rq?.email_domain_type),
          (na[151] = tr))
        : (tr = na[151])
      let rz = tr,
        rQ = !ni && !1
      if (
        na[152] !== nv ||
        na[153] !== rQ ||
        na[154] !== nG ||
        na[155] !== nV ||
        na[156] !== nB ||
        na[157] !== nI.key ||
        na[158] !== nj ||
        na[159] !== nO
      ) {
        let e = rQ && nV && !nB ? nG(eN.f_, { disableExposureLog: !0 }) : null,
          t = e?.get("exploration_arm", "none") ?? "none",
          n = "none" === t ? eN._r : eN.f_,
          a = e
        null != e && "none" === t && (a = nG(eN._r, { disableExposureLog: !0 }))
        let r = null == a ? null : nG(n)
        ;((tl = x._U),
          (ti = ex),
          (to =
            null != a && null != r
              ? {
                  accountId: nv,
                  userId: nO,
                  visitKey: nI.key,
                  assignment: {
                    experimentEnabled:
                      ["none", "homepage", "rate_limit", "pricing", "control", "all"].includes(t) &&
                      a.get("experiment_enabled", !1),
                    businessTabEnabled:
                      "none" === t ? a.get("business_tab_enabled", !1) : "pricing" === t || "all" === t,
                    scoreThreshold: a.get("score_threshold", 0.5),
                    expose: () =>
                      nj.getContext().user.userID === nO &&
                      ("none" === t ? r.get("business_tab_enabled", !1) : r.get("exploration_arm", "none"), !0),
                  },
                }
              : null),
          (na[152] = nv),
          (na[153] = rQ),
          (na[154] = nG),
          (na[155] = nV),
          (na[156] = nB),
          (na[157] = nI.key),
          (na[158] = nj),
          (na[159] = nO),
          (na[160] = tl),
          (na[161] = ti),
          (na[162] = to))
      } else ((tl = na[160]), (ti = na[161]), (to = na[162]))
      let { data: rJ, isPending: rX } = tl(ti, to),
        r1 = rK || (rQ && (!nV || nB || rX)),
        r0 =
          r1 ||
          (!nP &&
            a0 === ep.x.FREE &&
            void 0 !== nc &&
            "control" !== nc &&
            ("pending" === nc || nB || (null == rU && rS))),
        r2 = ax ?? (rQ && rJ?.qualified && rJ.assignment.businessTabEnabled ? "business" : rz?.defaultTab) ?? "personal"
      ;(na[163] !== nv ||
      na[164] !== r1 ||
      na[165] !== rJ ||
      na[166] !== rQ ||
      na[167] !== nI.key ||
      na[168] !== nf ||
      na[169] !== nO
        ? ((ts = () => {
            r1 ||
              !rQ ||
              !rJ?.qualified ||
              nU.current === nI.key ||
              (nf.get(M.chatGptAuthenticatedAccountId$) === nv &&
                nf.get(M.o8) === nO &&
                rJ.assignment.expose() &&
                (nU.current = nI.key))
          }),
          (tu = [nv, r1, rJ, rQ, nI.key, nf, nO]),
          (na[163] = nv),
          (na[164] = r1),
          (na[165] = rJ),
          (na[166] = rQ),
          (na[167] = nI.key),
          (na[168] = nf),
          (na[169] = nO),
          (na[170] = ts),
          (na[171] = tu))
        : ((ts = na[170]), (tu = na[171])),
        (0, S.useEffect)(ts, tu))
      let [r3, r5] = (0, S.useState)(null),
        [r6] = (0, S.useState)(h.re),
        [r4] = (0, S.useState)(h.rN),
        [r8, r7] = (0, S.useState)(null),
        [r9, le] = (0, S.useState)(null)
      na[172] !== r6 || na[173] !== r7 || na[174] !== r5
        ? ((tc = (e) => {
            ;(r5(null), r7(null), r6.reset(void 0 !== e && e))
          }),
          (na[172] = r6),
          (na[173] = r7),
          (na[174] = r5),
          (na[175] = tc))
        : (tc = na[175])
      let lt = tc
      na[176] !== r8 || na[177] !== r9
        ? ((td =
            null != r8 && null != r9 && "scheduled_downgrade" !== r9.kind && r9.upgrade?.promoCode != null
              ? { accountId: r9.upgrade.accountId, userId: r9.upgrade.userId, promoCode: r9.upgrade.promoCode }
              : null),
          (na[176] = r8),
          (na[177] = r9),
          (na[178] = td))
        : (td = na[178])
      let ln = td,
        [la, lr] = (0, S.useState)(null),
        [ll, li] = (0, S.useState)(null),
        [lo, ls] = (0, S.useState)(!1),
        [lu, lc] = (0, S.useState)(!1),
        [ld, lp] = (0, S.useState)(null)
      if (na[179] !== nr.id || na[180] !== a0 || na[181] !== nG || na[182] !== ak || na[183] !== ld || na[184] !== aH) {
        let e
        ;((tm = (0, eO.gx)(a0)),
          na[189] !== nG
            ? ((e = (e) =>
                nG("2797915223", { disableExposureLog: e }).get("upgrade_despite_scheduled_changes_enabled", !1)),
              (na[189] = nG),
              (na[190] = e))
            : (e = na[190]),
          (t_ = e),
          (tp = tm && aH?.is_processor_stripe === !0 && t_(!0)),
          (tg = null != ld && ld === nr?.id ? "upgrades_and_promotions" : (0, Z.T$)(ak, aH, tp)),
          (na[179] = nr.id),
          (na[180] = a0),
          (na[181] = nG),
          (na[182] = ak),
          (na[183] = ld),
          (na[184] = aH),
          (na[185] = tp),
          (na[186] = tm),
          (na[187] = t_),
          (na[188] = tg))
      } else ((tp = na[185]), (tm = na[186]), (t_ = na[187]), (tg = na[188]))
      let lm = tg,
        l_ = tm && "" !== aM && (aG || aZ),
        lg = null != r9 && (null == r9.owner || (r9.owner.accountId === nr.id && r9.owner.userId === nO)),
        lf =
          lg &&
          "scheduled_downgrade" !== r9.kind &&
          null != lm &&
          ("upgrades_and_promotions" === lm || r9.upgrade?.promoCode != null || r9.upgrade?.promoCampaign != null),
        lh = lf || (null != r9 && "scheduled_downgrade" !== r9.kind && l_),
        lC = (0, S.useRef)(lh)
      ;(na[191] !== lh
        ? ((tf = () => {
            lC.current = lh
          }),
          (th = [lh]),
          (na[191] = lh),
          (na[192] = tf),
          (na[193] = th))
        : ((tf = na[192]), (th = na[193])),
        (0, S.useLayoutEffect)(tf, th))
      let lP = (null != ld && ld === nr?.id) || lf,
        [ly, lI] = (0, S.useState)(!1),
        [lA, lb] = (0, S.useState)(null),
        lE = lA?.removedDowngradePlan,
        [lx, lT] = (0, S.useState)(null),
        [lS, lv] = (0, S.useState)(null),
        lN = (0, S.useRef)(null),
        lO = (0, S.useRef)(0),
        lw = (0, S.useRef)(null),
        lR = (0, o.fR)(),
        [lL, lM] = ((0, eo.U)("(prefers-reduced-motion: reduce)"), (0, S.useState)(null)),
        lU = nZ?.plusDirectCheckoutAction
      na[194] !== nI.search
        ? ((tC = new URLSearchParams(nI.search).get("plus_checkout_rerun_return")),
          (na[194] = nI.search),
          (na[195] = tC))
        : (tC = na[195])
      let lk = tC,
        lD = lk ?? lU?.attemptId,
        lj = (function ({ ready: e, excludedContext: t, searchParams: n, trialSearch: a }) {
          return (
            e &&
            !t &&
            ![
              "from_webview",
              "highlight_plan",
              "plan",
              "promoCode",
              "promo_campaign",
              "referralCode",
              "gift_modal_plan",
            ].some((e) => n.has(e) || a.has(e))
          )
        })({
          ready: !1,
          excludedContext:
            (0, es.SX)() ||
            (0, u.ds)(rm) ||
            as ||
            null != ao ||
            null != nQ ||
            nZ?.offer != null ||
            null != lU ||
            null != lk,
          searchParams: rd,
          trialSearch: rm,
        }),
        [lG, lB] = (0, S.useState)(null),
        lY = (0, S.useRef)(null),
        lF = (0, S.useRef)(null),
        lH = rU?.personalBillingDetails?.country,
        lW = rU?.personalBillingDetails?.currency,
        lV = rU?.monthlyAmounts.plus,
        lq = "chatgpt" === nS.authMethod && null != nO && nv === nr.id,
        lZ = !nB && !r1 && (rv || rT),
        l$ = aR?.entitlement.subscription_plan === "chatgptplusplan",
        lK = aC?.openModalLocation ?? aP
      na[196] !== nv ||
      !1 !== na[197] ||
      na[198] !== lH ||
      na[199] !== lW ||
      na[200] !== lV ||
      na[201] !== lD ||
      na[202] !== nO
        ? ((tP = JSON.stringify([lD, nO, nv, !1, lH, lW, lV])),
          (na[196] = nv),
          (na[197] = !1),
          (na[198] = lH),
          (na[199] = lW),
          (na[200] = lV),
          (na[201] = lD),
          (na[202] = nO),
          (na[203] = tP))
        : (tP = na[203])
      let lz = tP
      na[204] !== nv ||
      na[205] !== nb ||
      na[206] !== nI ||
      na[207] !== nA ||
      na[208] !== rU?.personalBillingDetails ||
      na[209] !== au ||
      na[210] !== lU ||
      na[211] !== lq ||
      !1 !== na[212] ||
      na[213] !== lH ||
      na[214] !== lW ||
      na[215] !== lz ||
      na[216] !== lK ||
      na[217] !== lV ||
      na[218] !== lZ ||
      na[219] !== lk ||
      na[220] !== lD ||
      na[221] !== l$ ||
      na[222] !== nZ ||
      na[223] !== nf ||
      na[224] !== nj ||
      na[225] !== nO
        ? ((ty = () => {
            let e
            if (null == lD || !lZ) return
            let t = {}
            lF.current = t
            let n = () =>
              lF.current === t &&
              nf.get(M.chatGptAuthenticatedAccountId$) === nv &&
              nf.get(M.chatGptAuthenticatedUserId$) === nO
            if (lY.current?.key !== lz) {
              let e = Promise.resolve("ordinary")
              ;(null != lk &&
                lq &&
                null != nO &&
                null != nv &&
                (e = Promise.resolve(
                  (0, eR.tV)({ scope: { userId: nO, accountId: nv }, attemptId: lk }) ? "all_plans" : "ordinary",
                )),
                (lY.current = { key: lz, promise: e }))
            }
            return (
              lY.current.promise
                .then(async (t) => {
                  if (
                    !n() ||
                    ((e = t),
                    lB({ key: lz, destination: t }),
                    ("direct_plus_checkout" !== t && "all_plans" !== t) || null != lk || null == nv || null == nO)
                  )
                    return
                  let a = new URLSearchParams(nI.search)
                  a.set("plus_checkout_rerun_return", lD)
                  let r = {
                      ...nZ,
                      returnPath: au,
                      source: nZ?.source ?? "direct_navigation",
                      plusDirectCheckoutAction: void 0,
                    },
                    l = { ...nI, search: `?${a}`, state: r }
                  if ("direct_plus_checkout" !== t) return void (await nA(l, { replace: !0, state: r }))
                  let i = (0, et.lH)("/purchase/plus", new URL(nb, window.location.origin))
                  if (null == i) return void (await nA(l, { replace: !0, state: r }))
                  let o = (0, ee.Yp)(nf, i, {
                    accountId: nv,
                    userId: nO,
                    selectedPlan: "plus",
                    billingDetails: rU?.personalBillingDetails,
                    location: lK,
                  })
                  await nA(i, { replace: !0, state: { pricingCheckoutId: o, checkoutReturnLocation: l } })
                })
                .catch(() => {
                  n() &&
                    lB({
                      key: lz,
                      destination: "direct_plus_checkout" === e || "all_plans" === e ? "all_plans" : "ordinary",
                    })
                }),
              () => {
                lF.current === t && (lF.current = null)
              }
            )
          }),
          (na[204] = nv),
          (na[205] = nb),
          (na[206] = nI),
          (na[207] = nA),
          (na[208] = rU?.personalBillingDetails),
          (na[209] = au),
          (na[210] = lU),
          (na[211] = lq),
          (na[212] = !1),
          (na[213] = lH),
          (na[214] = lW),
          (na[215] = lz),
          (na[216] = lK),
          (na[217] = lV),
          (na[218] = lZ),
          (na[219] = lk),
          (na[220] = lD),
          (na[221] = l$),
          (na[222] = nZ),
          (na[223] = nf),
          (na[224] = nj),
          (na[225] = nO),
          (na[226] = ty))
        : (ty = na[226])
      let lQ = rU?.personalBillingDetails
      ;(na[227] !== nv ||
      na[228] !== nb ||
      na[229] !== nI ||
      na[230] !== nA ||
      na[231] !== au ||
      na[232] !== lU ||
      na[233] !== lq ||
      !1 !== na[234] ||
      na[235] !== lH ||
      na[236] !== lW ||
      na[237] !== lz ||
      na[238] !== lK ||
      na[239] !== lV ||
      na[240] !== lZ ||
      na[241] !== lk ||
      na[242] !== lD ||
      na[243] !== l$ ||
      na[244] !== nZ ||
      na[245] !== nf ||
      na[246] !== aP ||
      na[247] !== nj ||
      na[248] !== lQ ||
      na[249] !== nO
        ? ((tI = [nv, nb, nI, nA, lQ, au, lU, lq, !1, lH, lW, lK, lV, lZ, lk, lD, l$, lz, nZ, nf, aP, nj, nO]),
          (na[227] = nv),
          (na[228] = nb),
          (na[229] = nI),
          (na[230] = nA),
          (na[231] = au),
          (na[232] = lU),
          (na[233] = lq),
          (na[234] = !1),
          (na[235] = lH),
          (na[236] = lW),
          (na[237] = lz),
          (na[238] = lK),
          (na[239] = lV),
          (na[240] = lZ),
          (na[241] = lk),
          (na[242] = lD),
          (na[243] = l$),
          (na[244] = nZ),
          (na[245] = nf),
          (na[246] = aP),
          (na[247] = nj),
          (na[248] = lQ),
          (na[249] = nO),
          (na[250] = tI))
        : (tI = na[250]),
        (0, S.useEffect)(ty, tI))
      let lJ = lG?.key === lz ? lG?.destination : void 0
      na[251] !== nv ||
      na[252] !== lU ||
      !1 !== na[253] ||
      na[254] !== lH ||
      na[255] !== lW ||
      na[256] !== lJ ||
      na[257] !== lV ||
      na[258] !== nf ||
      na[259] !== nO
        ? ((tA = (e, t) => {}),
          (na[251] = nv),
          (na[252] = lU),
          (na[253] = !1),
          (na[254] = lH),
          (na[255] = lW),
          (na[256] = lJ),
          (na[257] = lV),
          (na[258] = nf),
          (na[259] = nO),
          (na[260] = tA))
        : (tA = na[260])
      let lX = tA
      ;(na[261] !== nJ.replacement || na[262] !== nA
        ? ((tb = () => {
            if (null != nJ.replacement) {
              let { to: e, state: t } = nJ.replacement
              nA(e, { replace: !0, state: t })
            }
          }),
          (na[261] = nJ.replacement),
          (na[262] = nA),
          (na[263] = tb))
        : (tb = na[263]),
        na[264] !== nJ || na[265] !== nA
          ? ((tE = [nJ, nA]), (na[264] = nJ), (na[265] = nA), (na[266] = tE))
          : (tE = na[266]),
        (0, S.useEffect)(tb, tE))
      let l1 = ah && null != lL
      ;((0, S.useRef)(!1),
        na[267] !== a0 || na[268] !== r2 || na[269] !== l1 || na[270] !== r0 || na[271] !== nf || na[272] !== aP
          ? ((tx = () => {
              if (null != a0 && !r0 && !l1)
                return (function (e, { currentPlanType: t, defaultTab: n, source: a }) {
                  let r = !0 === document.prerendering,
                    l = () => {
                      ;(0, eu.yy)(e, b.CodexPricingPlanPageShown, { currentPlanType: t, defaultTab: n, source: a })
                    }
                  return r
                    ? (document.addEventListener("prerenderingchange", l, { once: !0 }),
                      () => document.removeEventListener("prerenderingchange", l))
                    : void l()
                })(nf, { currentPlanType: a0, defaultTab: r2, source: aP })
            }),
            (tT = [l1, a0, r2, r0, nf, aP]),
            (na[267] = a0),
            (na[268] = r2),
            (na[269] = l1),
            (na[270] = r0),
            (na[271] = nf),
            (na[272] = aP),
            (na[273] = tx),
            (na[274] = tT))
          : ((tx = na[273]), (tT = na[274])),
        (0, S.useEffect)(tx, tT),
        na[275] === Symbol.for("react.memo_cache_sentinel")
          ? ((tS = () => () => lw.current?.abort()), (na[275] = tS))
          : (tS = na[275]),
        na[276] !== nI.key ? ((tv = [nI.key]), (na[276] = nI.key), (na[277] = tv)) : (tv = na[277]),
        (0, S.useEffect)(tS, tv))
      let l0 = (0, S.useRef)(null),
        l2 =
          !r1 &&
          !av &&
          !r$ &&
          !a9 &&
          !re &&
          rv &&
          !rT &&
          rU?.monthlyAmounts.pro != null &&
          aR?.account.structure === "personal" &&
          !aL &&
          !as &&
          !aa &&
          null == lD &&
          null == nQ &&
          nZ?.offer == null &&
          null == ra &&
          ao?.promoCampaignId == null &&
          !["promo_campaign", "promoCode", "referralCode", "require_promo"].some((e) => rd.has(e))
      ;(na[278] !== lg || na[279] !== lP
        ? ((tN = () => {
            if (lP || !lg) return
            let e = lw.current
            return () => {
              null != e && (0, al.TD)(e.signal)?.record("modal_lifecycle_ended", { lifecycleReason: "unmounted" })
            }
          }),
          (tO = [lg, lP]),
          (na[278] = lg),
          (na[279] = lP),
          (na[280] = tN),
          (na[281] = tO))
        : ((tN = na[280]), (tO = na[281])),
        (0, S.useEffect)(tN, tO))
      let l3 = (e, t, n, a) => {
        if (nK()) {
          if (nz(t)) {
            t?.preventDefault()
            let n = new URL(e),
              a = new URLSearchParams(ns?.search)
            for (let e of g.bl) {
              let t = a.get(e)
              null != t && n.searchParams.set(e, t)
            }
            ;(0, z.Bl)({
              accountId: "personal" === nr.structure ? "personal" : nr.id,
              currentPlan: (0, eO.m6)(a0)?.pricePlan,
              getUrl: () => n.href,
              state: { returnPath: au },
              skipExperimentGate: !0,
              statsigClient: nj,
            })
            return
          }
          if (!nx(e, t, n, a)) {
            if (null != t) return void (0, Y.PQ)({ event: t, href: e, initiator: "open_in_browser_bridge" })
            ;(0, Y.E0)({ href: e, initiator: "open_in_browser_bridge" })
          }
        }
      }
      na[282] !== nh || na[283] !== nf
        ? ((tw = () => {
            nf.get(F.Id).danger(nh.formatMessage(eJ.S.paidPromotionUnavailable), {
              errorAnalytics: { toastId: "pricingPlanPage.paidPromotionUnavailable" },
            })
          }),
          (na[282] = nh),
          (na[283] = nf),
          (na[284] = tw))
        : (tw = na[284])
      let l5 = tw,
        l6 = async function (e, t, n, r, i, o) {
          let s = void 0 !== o && o
          if (!nK() || null == a0 || null != la || as || aa) return
          if (null != a3 && t === ep.x.PRO) {
            let e = ak ?? aR
            if (
              e?.account.structure !== "personal" ||
              e.account.account_id !== nr.id ||
              e.account.plan_type !== ep.x.PLUS ||
              null == nO
            )
              return
            lw.current?.abort()
            let t = new AbortController()
            lw.current = t
            let n = await (0, C.gI)().catch(a_)
            if (null == n || t.signal.aborted || lw.current !== t || (0, at.bA)(nf.get(M.PO), nr.id)?.userId !== nO)
              return
            let a = n.getSubscriptionManagementSource(e)
            if (null != a) return void a8({ account: e, userId: nO, managementSource: a })
          }
          let u = nZ?.offer?.plan === t ? nZ.offer : void 0,
            c = aS?.accounts[nr.id]?.account.account_owner_id,
            p =
              (rg && t === ep.x.SELF_SERVE_BUSINESS && "month" === r) ||
              (t === ep.x.PLUS && (aL || rm.has("require_promo") || rm.get("promo_campaign") === _.ww)),
            g = () => {
              s ||
                null == n ||
                ((n2.current = !1),
                (0, eu.yy)(nf, b.CodexPricingPlanPageCtaClicked, { ctaAction: e, source: aP, targetPlan: t }))
            }
          if (
            p &&
            (g(),
            null == nk ||
              nv !== nr.id ||
              nf.get(M.chatGptAuthenticatedAccountId$) !== nr.id ||
              nf.get(M.chatGptAuthenticatedUserId$) !== nO ||
              nf.get(M.o8) !== nk ||
              (t === ep.x.PLUS && null != c && c !== nk))
          )
            return void l5()
          let h =
              u ??
              ((t === ep.x.PLUS && rY && rk[t]?.promoCode === rY) || (t === ep.x.GO && rk[t]?.promoCode != null)
                ? rk[t]
                : void 0),
            P = h?.promoCode ?? void 0,
            y = h?.metadata,
            E = null != P && (0, d.CJ)({ promoCode: P, referralCode: u?.referralCode, promoMetadata: y }),
            x = null != P && y?.plan_type_change === "equal" && !rt,
            S =
              (function (e, t, n = "year") {
                switch (t) {
                  case ep.x.GO:
                  case ep.x.FREE:
                  case ep.x.PLUS:
                  case ep.x.PROMAX:
                  case ep.x.PROLITE:
                  case ep.x.PRO:
                    let a = (0, eO.m6)(e)
                    return null == a ? null : (0, eO.II)({ currentPlan: a.pricePlan, targetPlan: t })
                  case ep.x.SELF_SERVE_BUSINESS:
                    let r = new URL(eO.oc)
                    return (r.searchParams.set("price_interval", n), r.href)
                  case ep.x.SELF_SERVE_BUSINESS_USAGE_BASED:
                    return eO.m5
                }
              })(rt ? ep.x.FREE : a0, t, r) ?? (null == u ? null : new URL(u.returnPath, "https://chatgpt.com").href)
          if ((null == S && x && (S = new URL(au, "https://chatgpt.com").href), null == S)) return
          let v = (0, em.Hw)(t),
            O = v ? void 0 : rU?.personalBillingDetails
          if (!v && null == O && !E) return
          let U =
              null != nO
                ? {
                    accountId: nr.id,
                    userId: nO,
                    selectedPlan: t,
                    billingDetails: O,
                    location: aP,
                    timing: (0, ee.PB)(),
                  }
                : void 0,
            k = n?.currentTarget,
            D = !rp && (ao?.targetPlan === t || (ao?.targetPlan === ep.x.PRO && t === ep.x.PROLITE))
          p || g()
          let G = ao
          if (D && a0 === ep.x.FREE && t === ep.x.GO && ao.accountId === ai && null == ao.promoCampaignId) {
            lw.current?.abort()
            let e = new AbortController()
            ;((lw.current = e), li(t))
            let n = await nf.query.getOrFetch(L.sE, ai).catch(am)
            if (!(
              !e.signal.aborted &&
              nf.get(M.chatGptAuthenticatedAccountId$) === ai &&
              nf.get(M.chatGptAuthenticatedUserId$) === nO
            ))
              return
            li(null)
            let a = n?.accounts[ai]
            if (a?.account.account_id !== ai) return void l5()
            a.eligible_promo_campaigns?.go?.id === _.m2 && (G = { ...ao, promoCampaignId: _.m2 })
          }
          if (
            D &&
            G?.promoCampaignId === _.Ho &&
            !eH({ currentPlan: a0, targetPlan: t, campaignId: G.promoCampaignId, eligiblePlusCampaignId: ru?.id })
          )
            return void l5()
          let B = S,
            Y =
              t !== ep.x.PLUS ||
              rp ||
              D ||
              nZ?.offer != null ||
              rm.has("promoCode") ||
              rm.has("referralCode") ||
              rm.has("gift_modal_plan") ||
              (null != rm.get("promo_campaign") && rm.get("promo_campaign") !== _.ww) ||
              (ra?.canExtend !== !0 && rm.get("promo_campaign") !== _.ww)
                ? void 0
                : _.ww,
            H =
              (D ? G?.promoCampaignId : null) ??
              (null != u || (t === ep.x.SELF_SERVE_BUSINESS && ("month" !== r || rh)) ? void 0 : rk[t]?.campaignId) ??
              Y
          if (null == u && null != P) {
            let e = new URL(S)
            ;(e.searchParams.set("promoCode", P), (B = e.href))
          } else if (null != H) {
            let e = new URL(S)
            ;(e.searchParams.set("promo_campaign", H), (B = e.href))
          } else if (rh && t === ep.x.SELF_SERVE_BUSINESS && "month" === r) {
            let e = new URL(S)
            ;(e.searchParams.set("business_trial", "team-1-month-free"), (B = e.href))
          }
          if (nZ?.offer?.plan === t) {
            let e = new URL(S)
            ;(null != nZ.offer.promoCode && e.searchParams.set("promoCode", nZ.offer.promoCode),
              null != nZ.offer.referralCode && e.searchParams.set("referralCode", nZ.offer.referralCode),
              null != nZ.offer.checkoutSource && e.searchParams.set("source", nZ.offer.checkoutSource),
              e.searchParams.set("offer_return_path", nZ.offer.returnPath),
              (B = e.href))
          }
          if (
            (D && null != G && (B = (0, eC.QN)(B, null != P ? { ...G, promoCampaignId: null } : G)),
            t === ep.x.SELF_SERVE_BUSINESS)
          ) {
            let e = new URL(B)
            for (let t of (rp && e.searchParams.set("disable_automatic_promotion", "true"),
            (0, Q.s)(e, nf.get(Q.f) || rd.get("lenovo_preload_installation_id")),
            null != eX.requestedSeatQuantity && e.searchParams.set("numSeats", String(eX.requestedSeatQuantity)),
            ["standardSeats", "premiumSeats"])) {
              let n = rd.get(t)
              null != n && e.searchParams.set(t, n)
            }
            B = e.href
          }
          if (null != nY && (v || a0 === ep.x.FREE || aL)) {
            let e = new URL(B)
            ;(e.searchParams.set("country_code", nY), (B = e.href))
          }
          if (nz(n)) {
            let e = new URL(B)
            ;(e.searchParams.set("source", "codex_app_embedded"), (B = e.href))
          }
          let W = B
          if (
            (t === ep.x.SELF_SERVE_BUSINESS_USAGE_BASED &&
              (0, ea.uS)(nf, { audience: "workspace", checkoutKind: "codex_team", entryPoint: "pricing_plan_page" }),
            E)
          ) {
            if (!nN)
              return void nf
                .get(F.Id)
                .danger(nh.formatMessage(m.W.promotionEmailRequired), {
                  errorAnalytics: { toastId: "pricingPlanPage.promotionEmailRequired" },
                })
            lw.current?.abort()
            let e = new AbortController()
            ;((lw.current = e), ls(!1), lt(!0), le(null))
            let n = () =>
                !e.signal.aborted &&
                nf.get(M.chatGptAuthenticatedAccountId$) === nr.id &&
                nf.get(M.chatGptAuthenticatedUserId$) === nO,
              a = nf.query.getData(L.sE, nr.id)?.accounts[nr.id],
              r = (e, t) => {
                let n = void 0 === t ? y : t
                ;(0, eu.yy)(nf, I.DY, {
                  accountId: nr.id,
                  organizationId: a?.account.organization_id ?? void 0,
                  subscriptionId: a?.last_active_subscription.subscription_id ?? void 0,
                  eventType: e,
                  location: "PricingColumnPrimaryCtaButton",
                  promoCode: P,
                  planName: n?.plan_name,
                })
              }
            ;(li(t), r(A.J.CHATGPT_WEB_PROMO_FUNNEL_EVENT_TYPE_CODE_SUBMITTED))
            let i = (0, l.rP)(t)
            return (
              "" !== i && (0, w.O)(i),
              void (await (async () => {
                let t = await j.Request.safePost("/promotions/{promo_code}/claim", {
                  parameters: { path: { promo_code: P } },
                  additionalHeaders: { [T.zBc]: nr.id },
                  signal: e.signal,
                }).catch((e) => {
                  throw (n() && r(A.J.CHATGPT_WEB_PROMO_FUNNEL_EVENT_TYPE_REDEMPTION_FAILED), e)
                })
                if (n()) {
                  if (!t.is_eligible || null == t.metadata) {
                    ;(r(A.J.CHATGPT_WEB_PROMO_FUNNEL_EVENT_TYPE_REDEMPTION_FAILED),
                      nf
                        .get(F.Id)
                        .danger(t.ineligible_reason?.message ?? nh.formatMessage(m.W.promotionClaimError), {
                          errorAnalytics: { toastId: "pricingPlanPage.promotionClaimError" },
                        }))
                    return
                  }
                  ;(r(A.J.CHATGPT_WEB_PROMO_FUNNEL_EVENT_TYPE_REDEMPTION_SUCCEEDED, t.metadata),
                    (0, d.dI)(),
                    nf.get(F.Id).success(nh.formatMessage(m.W.promotionClaimSuccess)),
                    await (0, R.Q6)("accounts-check"),
                    n() && nA(au, { replace: !0 }))
                }
              })()
                .catch(() => {
                  n() &&
                    nf
                      .get(F.Id)
                      .danger(nh.formatMessage(m.W.promotionClaimError), {
                        errorAnalytics: { toastId: "pricingPlanPage.promotionClaimError" },
                      })
                })
                .finally(() => {
                  n() && li(null)
                }))
            )
          }
          if (
            a0 === ep.x.FREE ||
            rt ||
            (t !== ep.x.GO && t !== ep.x.PLUS && t !== ep.x.PROLITE && t !== ep.x.PRO && t !== ep.x.PROMAX)
          ) {
            let e = null != h ? nf.query.getData(L.sE, nr.id)?.accounts[nr.id] : void 0
            ;((0, X.m)(nf, nS, t, aP, new URL(W).searchParams.get("source")),
              l3(
                W,
                n,
                null != U
                  ? {
                      ...U,
                      promo:
                        a0 === ep.x.FREE && null != h
                          ? {
                              promoCode: h.promoCode ?? null,
                              referralCode: h.referralCode ?? null,
                              planName: h.metadata.plan_name,
                              subscriptionId: e?.last_active_subscription.subscription_id ?? void 0,
                              organizationId: e?.account.organization_id ?? void 0,
                            }
                          : void 0,
                    }
                  : void 0,
                i,
              ))
            return
          }
          if (!(0, eO.gx)(a0)) return
          if (
            null == P &&
            null == H &&
            t !== ep.x.PROMAX &&
            "downgrade" === (0, eO.aL)({ currentPlan: a0, targetPlan: t })
          )
            return null == nO || aS?.accounts[nr.id] == null
              ? void nf
                  .get(F.Id)
                  .danger(nh.formatMessage(m.W.subscriptionUpdateUnavailable), {
                    errorAnalytics: { toastId: "pricingPlanPage.subscriptionUpdateUnavailable" },
                  })
              : ((0, X.s)(nf, nS, t, aP),
                lw.current?.abort(),
                lt(!0),
                le(null),
                void lv({ accountId: nr.id, userId: nO, targetPlan: t }))
          if (
            D &&
            G?.promoCampaignId != null &&
            !eH({ currentPlan: a0, targetPlan: t, campaignId: G.promoCampaignId, eligiblePlusCampaignId: ru?.id })
          )
            return void l5()
          let V = (0, nw.K)(t),
            q = a0 === ep.x.GO,
            K = a0 === ep.x.PLUS && (t === ep.x.PROLITE || t === ep.x.PRO || t === ep.x.PROMAX),
            z =
              (a0 === ep.x.PRO && t === ep.x.PROLITE) || (a0 === ep.x.PROMAX && (t === ep.x.PROLITE || t === ep.x.PRO)),
            J =
              (a0 === ep.x.PROLITE && t === ep.x.PRO) || ((a0 === ep.x.PROLITE || a0 === ep.x.PRO) && t === ep.x.PROMAX)
          if (null == P && !x && !q && !K && !z && !J) {
            ;((0, X.m)(nf, nS, t, aP, new URL(W).searchParams.get("source")), l3(W, n, U, i))
            return
          }
          lw.current?.abort()
          let et = new AbortController()
          ;((lw.current = et), ls(!1), lt(!0), le(null), lc(!1))
          let { signal: en } = et,
            er = () =>
              !en.aborted &&
              nf.get(M.chatGptAuthenticatedAccountId$) === nr.id &&
              nf.get(M.chatGptAuthenticatedUserId$) === nO
          ;(li(t), lI(!1), lb(null))
          let el = null != P && null != y && (0, _.Ci)({ id: P, metadata: y }),
            ei = x && el,
            eo = a0 === ep.x.GO && t === ep.x.GO && el,
            es = (e) => {
              if (!er()) return
              let t = "scheduled_downgrade" === e.kind ? null : e.upgrade?.promoCode
              ;(eo && null != t && r7({ key: crypto.randomUUID(), signal: et.signal }), le(e))
            }
          if (null == nO) {
            ;(eh(nf), li(null))
            return
          }
          null != n && (0, X.s)(nf, nS, t, aP)
          let ec = x && aS?.accounts[nr.id]?.entitlement.billing_period === "yearly" ? "year" : "month",
            ed = null
          if (null != y && null != P && rU?.monthlyAmounts[t] != null) {
            let e = rU.monthlyAmounts[t],
              n = x && aS?.accounts[nr.id]?.entitlement.billing_period === "yearly" ? rU.yearlyAmounts[t] : e
            if (null == n) {
              ;(eh(nf), li(null))
              return
            }
            let a = nh.formatNumber(x && aS?.accounts[nr.id]?.entitlement.billing_period === "yearly" ? 12 * n : n, {
                style: "currency",
                currency: rU.currencyCode,
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }),
              r = nh.formatNumber(
                Math.max(
                  0,
                  (0, f.M3)(e * (eo ? 1 : (y.duration?.num_periods ?? 1)), y.discount, {
                    price: rU.taxConfig?.[t]?.month,
                    taxPercent: rU.taxConfig?.tax_percent,
                    minorUnitExponent: rU.minorUnitExponent,
                  }),
                ),
                { style: "currency", currency: rU.currencyCode, minimumFractionDigits: 0, maximumFractionDigits: 2 },
              )
            ed = {
              copy: (0, _.ZI)({
                intl: nh,
                planName: t,
                promoMetadata: y,
                formattedCost: a,
                formattedDiscountedCost: r,
                daysUntilPlanRenews: e9,
                planRenewsAt: t === ep.x.GO ? (rV ?? void 0) : void 0,
              }),
              formattedCost: a,
              formattedDiscountedCost: r,
            }
          }
          let e_ = Number.isFinite(te) ? new Date(te) : null
          x &&
            (e_ =
              t === ep.x.GO && a0 === ep.x.GO
                ? (rV ?? null)
                : (0, _.Dx)({
                    daysUntilPlanRenews: e9,
                    daysUntilSubscriptionCancelAt: Number.isFinite(e7) ? Math.ceil((e7 - 1e3 * nC) / 864e5) : null,
                  }))
          let eg =
            null != ed && null != e_
              ? {
                  planType: t,
                  currentPlanType: y?.plan_type_change === "downgrade" ? a0 : void 0,
                  renewalDateFormatted: nh.formatDate(e_, { year: "numeric", month: "long", day: "numeric" }),
                  fullPriceResumeDateFormatted: nh.formatDate(ed.copy.fullPriceResumeDateTimestamp, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }),
                  formattedDiscountedCost: ed.formattedDiscountedCost,
                  billingInterval: ec,
                  currencySign: "",
                  planCost: ed.formattedCost,
                }
              : null
          if (x && !ei) {
            if (null == eg) {
              ;(eh(nf), li(null))
              return
            }
            ;(es({
              kind: "promotional_renewal",
              pricingCheckout: U,
              owner: { accountId: nr.id, userId: nO },
              upgrade: { accountId: nr.id, userId: nO, initialPlan: a0, promoCode: P },
              updatedPlan: V,
              webUrl: W,
              renewal: eg,
            }),
              li(null))
            return
          }
          let ef = async (e) => {
            let n = async (e) => {
              if (z || null == nO || rU?.minorUnitExponent == null || !er()) return !1
              let t = await (0, C.Gi)().catch(ap)
              if (null == t || !er()) return !1
              let n = await t
                .prepareDelinquentUpgrade({
                  scope: nf,
                  accountId: nr.id,
                  userId: nO,
                  initialPlan: a0,
                  updatedPlan: V,
                  statsigClient: nj,
                  signal: en,
                  previewError: e,
                  pricingInfo: rU,
                  hasPromotion: null != H || null != P,
                })
                .catch(ad)
              return null != n && !!er() && (lr({ recovery: n, signal: en }), !0)
            }
            try {
              let r
              if ((await n()) || !er()) return
              let l = await (async function (e, t, { currentPlan: n, userId: a, trigger: r }) {
                try {
                  return await e.queryClient.fetchQuery((0, $.vt)(t))
                } catch (o) {
                  if (
                    !(o instanceof ae.FetchError) ||
                    400 !== o.status ||
                    (0, n9.d)(o)?.message !== "Unsupported subscription processor" ||
                    "upgrade" !== (0, eO.aL)({ currentPlan: n, targetPlan: (0, nw.J)(t.updatedPlan) })
                  )
                    throw o
                  let l = await (0, C.gI)().catch(() => null),
                    i = e.query.getData(L.sE, t.accountId)?.accounts[t.accountId]
                  if (null == i || l?.getSubscriptionManagementSource(i) !== "app_store") throw o
                  return {
                    account: i,
                    userId: a,
                    managementSource: "app_store",
                    returnFocusTo: r instanceof HTMLElement ? r : void 0,
                  }
                }
              })(
                nf,
                { accountId: nr.id, updatedPlan: V, promoCampaign: H, promoCode: P },
                { currentPlan: a0, userId: nO, trigger: k },
              )
              if (!er()) return
              if ("managementSource" in l) return void a8(l)
              if (null != P && y?.plan_type_change === "downgrade") {
                if (null == eg || null == l.renewal_date || Number.isNaN(Date.parse(l.renewal_date))) return void eh(nf)
                le({
                  kind: "promotional_downgrade",
                  pricingCheckout: U,
                  owner: { accountId: nr.id, userId: nO },
                  upgrade: { accountId: nr.id, userId: nO, initialPlan: a0, promoCode: P },
                  updatedPlan: V,
                  webUrl: W,
                  renewal: {
                    ...eg,
                    renewalDateFormatted: nh.formatDate(l.renewal_date, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  },
                })
                return
              }
              if (z && null == P)
                return void le({
                  kind: "scheduled_downgrade",
                  pricingCheckout: U,
                  owner: { accountId: nr.id, userId: nO },
                  preview: l,
                  updatedPlan: "chatgptprolite",
                  webUrl: W,
                })
              if (
                (tp && null == H && null == P && null == l.schedule_replacement_type) ||
                (H === _.Ho &&
                  (null == l.renewal_date ||
                    rU?.monthlyAmounts.plus == null ||
                    Number.isNaN(Date.parse(l.renewal_date)))) ||
                rU?.minorUnitExponent == null ||
                rU.currencyCode.toUpperCase() !== l.currency.toUpperCase()
              )
                return void eh(nf)
              let i =
                  e?.card != null ? { card_brand: e.card.brand, card_last4: e.card.last4 } : l.default_payment_method,
                o =
                  nj.checkGate("200883286") &&
                  (!nj.getLayer("225453312").get("redemption_country_restrictions_enabled", !1) ||
                    "usd" === l.currency.toLowerCase()) &&
                  (0, d.tx)(l)
              if (null == i && !o && nj.getLayer("2797915223").get("payment_method_recovery_enabled", !1)) {
                let { getPricingPlanDefaultPaymentMethod: e } = await (0, C.gI)()
                if (((r = await e(nf, nr.id)), !er())) return
              }
              if (null == i && null == r && !o && !nj.getLayer("2797915223").get("payment_method_recovery_enabled", !1))
                return void lT({
                  accountId: nr.id,
                  userId: nO,
                  restoreFocus: () => {
                    k instanceof HTMLElement && k.isConnected && k.focus()
                  },
                  resume: async (e) => {
                    er() &&
                      (li(t),
                      await (async () => {
                        let { getPricingPlanPaymentMethod: t } = await (0, C.gI)(),
                          n = await t(nf, nr.id, e)
                        if (er()) {
                          if (null == n) {
                            ;(eh(nf), li(null))
                            return
                          }
                          ;(await nT.invalidateQueries({
                            queryKey: (0, $.vt)({ accountId: nr.id, updatedPlan: V, promoCampaign: H, promoCode: P })
                              .queryKey,
                          }),
                            await ef(n))
                        }
                      })()
                        .catch(() => {
                          er() && eh(nf)
                        })
                        .finally(() => {
                          er() && li(null)
                        }))
                  },
                })
              ;((lN.current = null),
                es({
                  kind: "saved_card_upgrade",
                  preparedAtMs: Date.now(),
                  currentPlan: a0,
                  pricingCheckout: U,
                  owner: { accountId: nr.id, userId: nO },
                  promotionPrice:
                    eo && null != ed
                      ? (0, a.jsx)(N.A, {
                          id: "indiaGoRetention.reviewPrice",
                          defaultMessage: "{price} per month",
                          values: { price: ed.formattedDiscountedCost },
                        })
                      : void 0,
                  promotionDisclaimer:
                    null == ed ? void 0 : (0, a.jsx)(n_.z, { disclaimer: ed.copy.disclaimer, modal: !0 }),
                  upgrade: {
                    promoCampaign: H,
                    promoCode: P,
                    paymentMethodId: e?.id,
                    accountId: nr.id,
                    userId: nO,
                    initialPlan: a0,
                  },
                  minorUnitExponent: rU.minorUnitExponent,
                  paymentMethod: i,
                  paymentMethodLabel: r,
                  fullyCoveredByWallet: o,
                  preview: l,
                  updatedPlan: V,
                  webUrl: W,
                }))
            } catch (e) {
              if (!er()) return
              if ((0, Z.kj)(nf, nh, e)) return void lp(nr?.id ?? null)
              if (e instanceof Error && (await n(e))) return
              er() && eh(nf)
            }
          }
          await ef().finally(() => {
            er() && li(null)
          })
        }
      na[285] !== l6
        ? ((tR = () => {
            l6("upgrade", ep.x.PRO, void 0, "month", void 0, !0)
          }),
          (na[285] = l6),
          (na[286] = tR))
        : (tR = na[286])
      let l4 = (0, S.useEffectEvent)(tR),
        l8 = a3?.variant,
        l7 = a3?.accountId,
        l9 = a3?.userId
      ;(na[287] !== nI.key || na[288] !== l4 || na[289] !== l2 || na[290] !== l8
        ? ((tL = () => {
            if ("direct_checkout" === l8 && l2 && l0.current !== nI.key)
              return (
                (l0.current = nI.key),
                l4(),
                () => {
                  ;(lw.current?.abort(), (l0.current = null))
                }
              )
          }),
          (na[287] = nI.key),
          (na[288] = l4),
          (na[289] = l2),
          (na[290] = l8),
          (na[291] = tL))
        : (tL = na[291]),
        na[292] !== nI.key || na[293] !== l7 || na[294] !== l2 || na[295] !== l9 || na[296] !== l8
          ? ((tM = [nI.key, l7, l9, l8, l2]),
            (na[292] = nI.key),
            (na[293] = l7),
            (na[294] = l2),
            (na[295] = l9),
            (na[296] = l8),
            (na[297] = tM))
          : (tM = na[297]),
        (0, S.useEffect)(tL, tM))
      let ie = !av && !l_
      na[298] !== aR || na[299] !== a0 || na[300] !== nX || na[301] !== aH
        ? ((tU =
            a0 === ep.x.PLUS &&
            (function (e, t, n) {
              let a, r
              if (
                null == n ||
                null == e ||
                t?.is_processor_stripe !== !0 ||
                !0 !== t.is_active ||
                "plus" !== t.plan_type
              )
                return !1
              let l = e.last_active_subscription.purchase_origin_platform
              return (
                ("chatgpt_web" === l || "chatgpt_mobile_ios_web_view" === l) &&
                !1 !== e.can_access_with_session &&
                !0 !== e.account.is_deactivated &&
                e.account.account_id === n.accountId &&
                e.account.account_owner_id === n.userId &&
                (e.account.account_user_role ?? "account-owner") === "account-owner" &&
                "personal" === e.account.structure &&
                "plus" === e.account.plan_type &&
                "chatgptplusplan" === e.entitlement.subscription_plan &&
                (0, ef.ne)({ plan: "plus", entitlement: e.entitlement }) &&
                ((a = e.eligible_offers),
                (null == (r = a?.purchase_restriction) || "in_app_purchases" === r.scope) &&
                  (0, d.tg)({ eligibleOffers: a, planName: "chatgptprolite" }))
              )
            })(aR, aH, nX)),
          (na[298] = aR),
          (na[299] = a0),
          (na[300] = nX),
          (na[301] = aH),
          (na[302] = tU))
        : (tU = na[302])
      let it = tU
      na[303] !== it ||
      na[304] !== nX ||
      na[305] !== l6 ||
      na[306] !== aQ ||
      na[307] !== rU?.personalBillingDetails ||
      na[308] !== nf
        ? ((tk = () => {
            if (aQ && it && null != nX && (0, k.t)(nf, nX.accountId, nX.userId)) {
              if (rU?.personalBillingDetails == null) return void eh(nf)
              l6("upgrade", ep.x.PROLITE, void 0, "month")
            }
          }),
          (na[303] = it),
          (na[304] = nX),
          (na[305] = l6),
          (na[306] = aQ),
          (na[307] = rU?.personalBillingDetails),
          (na[308] = nf),
          (na[309] = tk))
        : (tk = na[309])
      let ia = (0, S.useEffectEvent)(tk),
        ir = !nJ.hasHandoff && !r1 && ie && aV && (rv || rT)
      ;(na[310] !== ia || na[311] !== ir
        ? ((tD = () => {
            n2.current && ir && ((n2.current = !1), ia())
          }),
          (na[310] = ia),
          (na[311] = ir),
          (na[312] = tD))
        : (tD = na[312]),
        na[313] !== ir ? ((tj = [ir]), (na[313] = ir), (na[314] = tj)) : (tj = na[314]),
        (0, S.useEffect)(tD, tj))
      let il = lg && "chatgptprolite" === r9.updatedPlan && ie && !it
      if (null != n0 && (!n1 || il)) {
        let e
        return (
          na[315] !== n0
            ? ((e = (0, a.jsx)(O.C5, { to: n0, replace: !0 })), (na[315] = n0), (na[316] = e))
            : (e = na[316]),
          e
        )
      }
      if (nJ.malformed) {
        let e
        return (
          na[317] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(O.C5, { to: "/", replace: !0 })), (na[317] = e))
            : (e = na[317]),
          e
        )
      }
      if (null == a0) {
        let e
        return (
          na[318] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(O.C5, { to: "/", replace: !0 })), (na[318] = e))
            : (e = na[318]),
          e
        )
      }
      if (r0) return no
      if (null != lD && (null == lJ || "direct_plus_checkout" === lJ)) {
        let e
        return (
          na[319] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("main", { className: "h-full bg-surface" })), (na[319] = e))
            : (e = na[319]),
          e
        )
      }
      na[320] !== r9 || na[321] !== nf || na[322] !== aP
        ? ((tG = (e) => {
            null != r9 &&
              (0, eu.yy)(nf, b.CodexPricingPlanPageCtaClicked, {
                ctaAction: e,
                modalType: r9.kind,
                source: aP,
                targetPlan: (0, nw.J)(r9.updatedPlan),
              })
          }),
          (na[320] = r9),
          (na[321] = nf),
          (na[322] = aP),
          (na[323] = tG))
        : (tG = na[323])
      let ii = tG
      na[324] !== lt ||
      na[325] !== nr ||
      na[326] !== a0 ||
      na[327] !== ly ||
      na[328] !== nh ||
      na[329] !== lh ||
      na[330] !== ah ||
      na[331] !== lo ||
      na[332] !== ng ||
      na[333] !== nA ||
      na[334] !== l3 ||
      na[335] !== r9 ||
      na[336] !== au ||
      na[337] !== r6 ||
      na[338] !== nT ||
      na[339] !== r4 ||
      na[340] !== nf ||
      na[341] !== lI ||
      na[342] !== ls ||
      na[343] !== lb ||
      na[344] !== le ||
      na[345] !== r5 ||
      na[346] !== lp ||
      na[347] !== nj
        ? ((tB = async (e, t, n) => {
            if (null == r9 || lo || ly || lh) return
            let a = "scheduled_downgrade" !== r9.kind ? r9.upgrade : void 0,
              r = lw.current,
              l = r9.owner,
              i = () =>
                null != r &&
                lw.current === r &&
                !r.signal.aborted &&
                (null == l ||
                  (nf.get(M.chatGptAuthenticatedAccountId$) === l.accountId &&
                    nf.get(M.chatGptAuthenticatedUserId$) === l.userId))
            if (!i()) return
            let o =
              null != a && null != r
                ? (0, al.sI)(nf, r.signal, {
                    accountId: a.accountId,
                    userId: a.userId,
                    modalAttemptId: lN.current ?? void 0,
                    submissionNumber: (lO.current = lO.current + 1),
                    targetPlan: (0, nw.J)(r9.updatedPlan),
                  })
                : void 0
            ;(ls(!0),
              lI(!1),
              await (async () => {
                let l
                try {
                  tY("CHATGPT_WEB_SUBSCRIPTION_UPGRADE_CONFIRMATION_ACTION_TYPE_SUBSCRIPTION_UPDATE_REQUEST_STARTED")
                  let s =
                    null == a
                      ? await (0, $.YA)({ accountId: nr.id, updatedPlan: r9.updatedPlan })
                      : await (async () => {
                          if (null == r || !i()) return { status: "closed" }
                          let { confirmPricingPlanUpgrade: l } = await (0, C.gI)(),
                            o = n?.renewalSetupCompleted ? void 0 : t
                          if (null == n && null == o && null != a.promoCode) {
                            let e = { accountId: a.accountId, userId: a.userId, promoCode: a.promoCode }
                            ;((o = r6.getSetupIntent(e, r4)), null != o && r6.rememberAuthorization(e, o))
                          }
                          return l({
                            scope: nf,
                            ...a,
                            paymentMethodId: null == n ? (e ?? a.paymentMethodId) : void 0,
                            setupIntentId: o,
                            renewalSetupCompleted: n?.renewalSetupCompleted,
                            updatedPlan: r9.updatedPlan,
                            promotionSetupController: null == n ? r6 : void 0,
                            statsigClient: nj,
                            signal: r.signal,
                            isActive: () => i() && (n?.isActive() ?? !0) && (null == a.promoCode || !lC.current),
                          })
                        })()
                  if ((o?.record("update_result_resolved", { outcome: s.status ?? "complete", modalOpen: i() }), !i()))
                    return
                  if ("setup_required" === s.status && a?.promoCode != null) {
                    let e = "setupIntentClientSecret" in s ? s.setupIntentClientSecret : s.setup_intent_client_secret
                    if (null != n) n.onSetupRequired(e)
                    else {
                      r6.reset(!0)
                      let t = { accountId: a.accountId, userId: a.userId, promoCode: a.promoCode }
                      ;((0, h.aT)(t, e),
                        r6.rememberAuthorization(t, e.split("_secret_")[0]),
                        r5({ review: r9, clientSecret: e }))
                    }
                    return
                  }
                  if ("request_failed" === s.status && a?.promoCode != null && (0, h.WM)(s.error))
                    return void (null != n ? n.onInvalidSetup() : (lt(), lI(!1)))
                  if ("request_failed" === s.status && (0, Z.kj)(nf, nh, s.error)) {
                    ;(lp(nr?.id ?? null), lt(), le(null))
                    return
                  }
                  if ("closed" === s.status) {
                    ;(n?.onReviewClosed(), o?.record("modal_close_requested", { outcome: "closed" }), lt(), le(null))
                    return
                  }
                  if (null == s.status || "complete" === s.status || "pending" === s.status) {
                    if (
                      (o?.record("modal_close_requested", { outcome: s.status ?? "complete" }),
                      n?.onReviewClosed(),
                      lt(),
                      le(null),
                      a?.promoCode != null && (0, d.dI)(),
                      "pending" === s.status && "saved_card_upgrade" === r9.kind)
                    )
                      nf.get(F.Id).info(nh.formatMessage(eJ.S.upgradePending))
                    else if ((null == s.status || "complete" === s.status) && "scheduled_downgrade" !== r9.kind) {
                      let e
                      ;("promotional_renewal" === r9.kind
                        ? (e = nh.formatMessage(m.W.promotionalRenewalSucceeded, {
                            promotionalCost: r9.renewal.formattedDiscountedCost,
                            renewalDate: r9.renewal.renewalDateFormatted,
                          }))
                        : "promotional_downgrade" === r9.kind
                          ? (e = nh.formatMessage(m.W.promotionalDowngradeSucceeded, {
                              planType: r9.renewal.planType,
                              renewalDateFormatted: r9.renewal.renewalDateFormatted,
                            }))
                          : a?.promoCode != null && a0 === (0, nw.J)(r9.updatedPlan)
                            ? (e = nh.formatMessage(eJ.S.offerApplied))
                            : ((0, eu.yy)(nf, y.yP, {
                                changeType: "CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UPGRADE",
                                previousPlan: a0,
                                selectedPlan: (0, nw.J)(r9.updatedPlan),
                              }),
                              (e = nh.formatMessage(eJ.S.upgradeSucceeded))),
                        nf.get(F.Id).success(e),
                        o?.record("success_redirect_requested", { flow: "client_navigation" }),
                        nA(au, { replace: ng || ah }))
                    }
                    ;((l = o?.startPhase("account_refresh")),
                      await (0, R.Q6)("accounts-check"),
                      await Promise.all([
                        nT.invalidateQueries({ queryKey: ["accounts", "check"] }),
                        nT.invalidateQueries({ queryKey: ["rate-limit-status"] }),
                        ...(a?.promoCode == null
                          ? []
                          : [
                              nT.invalidateQueries({ queryKey: (0, L.kJ)(a.accountId, a.userId), refetchType: "all" }),
                              nT.invalidateQueries({ queryKey: (0, W.r)(a.accountId).queryKey, refetchType: "all" }),
                            ]),
                      ]),
                      l?.settle("returned"))
                    return
                  }
                  if (null != a && "payment_method_failed" === s.status && "reason" in s)
                    (lt(),
                      lb((e) => ({
                        failure: s,
                        removedDowngradePlan:
                          ("removedDowngradePlan" in s ? s.removedDowngradePlan : void 0) ?? e?.removedDowngradePlan,
                        restrictToCardOrLink:
                          e?.restrictToCardOrLink === !0 ||
                          "mandate_amount_exceeded" === s.detail ||
                          "unsupported_payment_method" === s.detail,
                        failureCount: (e?.failureCount ?? 0) + 1,
                      })))
                  else if (null != a) lI(!0)
                  else {
                    if ((await (0, $.M2)({ accountId: nr.id }), !i())) return
                    ;(l3(r9.webUrl, void 0, r9.pricingCheckout), lt(), le(null))
                  }
                } catch (e) {
                  if ((l?.settle("rejected"), !i())) return
                  if (
                    (a?.promoCode != null && (0, h.WM)(e) && (null != n ? n.onInvalidSetup() : lt()),
                    (0, Z.kj)(nf, nh, e))
                  ) {
                    ;(lp(nr?.id ?? null), lt(), le(null))
                    return
                  }
                  if (null != a) lI(!0)
                  else {
                    if (!i()) return
                    ;(l3(r9.webUrl, void 0, r9.pricingCheckout), lt(), le(null))
                  }
                }
              })().finally(() => {
                i() && ls(!1)
              }))
          }),
          (tY = (e) => {
            r9?.kind === "saved_card_upgrade" &&
              null != lN.current &&
              (0, eu.yy)(nf, I.oi, { actionType: e, upgradeAttemptId: lN.current })
          }),
          (na[324] = lt),
          (na[325] = nr),
          (na[326] = a0),
          (na[327] = ly),
          (na[328] = nh),
          (na[329] = lh),
          (na[330] = ah),
          (na[331] = lo),
          (na[332] = ng),
          (na[333] = nA),
          (na[334] = l3),
          (na[335] = r9),
          (na[336] = au),
          (na[337] = r6),
          (na[338] = nT),
          (na[339] = r4),
          (na[340] = nf),
          (na[341] = lI),
          (na[342] = ls),
          (na[343] = lb),
          (na[344] = le),
          (na[345] = r5),
          (na[346] = lp),
          (na[347] = nj),
          (na[348] = tB),
          (na[349] = tY))
        : ((tB = na[348]), (tY = na[349]))
      let io = null
      if (ly) {
        let e
        ;(na[350] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("div", {
              role: "alert",
              children: (0, a.jsx)(N.A, { ...m.W.subscriptionUpdateUnavailable }),
            })),
            (na[350] = e))
          : (e = na[350]),
          (io = e))
      }
      let is =
          ao?.targetPlan === ep.x.SELF_SERVE_BUSINESS
            ? "team"
            : (ao?.targetPlan ?? aE.highlightPlan ?? rz?.highlightPlan),
        iu = aL ? a1 : aS?.accounts[nr.id],
        ic = null != a4 && a4.account.account.account_id === nr.id && a4.userId === nO,
        id = null != lS && lS.accountId === nr.id && lS.userId === nO && null != iu,
        ip = null != lx && lx.accountId === nr.id && lx.userId === nO,
        im =
          null != lL && !lL.signal.aborted && lL.locationKey === nI.key && lL.accountId === nr.id && lL.userId === nO,
        i_ = ri && (a0 === ep.x.PRO || a0 === ep.x.PROLITE) ? a0 : aE.defaultProPlan
      ;(null != a3 && (i_ = ep.x.PRO),
        void 0 === nc || nP || ny(!0),
        "control" === nc
          ? (tF = "control")
          : void 0 !== nc && "pending" !== nc && (tF = "object" == typeof nc && null != rU ? nc : null),
        na[351] !== a4 || na[352] !== ic
          ? ((tH = ic
              ? (0, a.jsx)(eG, {
                  account: a4.account,
                  managementSource: a4.managementSource,
                  returnFocusTo: a4.returnFocusTo,
                  onClose: () => a8(null),
                })
              : null),
            (na[351] = a4),
            (na[352] = ic),
            (na[353] = tH))
          : (tH = na[353]))
      ;(null !== na[354] ||
      na[355] !== nI.hash ||
      na[356] !== nI.pathname ||
      na[357] !== nI.search ||
      na[358] !== nA ||
      na[359] !== nZ
        ? ((tW = (e) => {}),
          (na[354] = null),
          (na[355] = nI.hash),
          (na[356] = nI.pathname),
          (na[357] = nI.search),
          (na[358] = nA),
          (na[359] = nZ),
          (na[360] = tW))
        : (tW = na[360]),
        na[361] !== l6
          ? ((tV = () => {
              l6("upgrade", ep.x.PLUS, void 0, "month")
            }),
            (na[361] = l6),
            (na[362] = tV))
          : (tV = na[362]),
        na[363] !== nI.key || na[364] !== t || !1 !== na[365] || na[366] !== tW || na[367] !== tV
          ? ((tq = (0, a.jsx)(q, { entryKey: nI.key, consumedEntryKey: t, ready: !1, onConsume: tW, onReview: tV })),
            (na[363] = nI.key),
            (na[364] = t),
            (na[365] = !1),
            (na[366] = tW),
            (na[367] = tV),
            (na[368] = tq))
          : (tq = na[368]),
        na[369] !== iu ||
        na[370] !== lS ||
        na[371] !== ah ||
        na[372] !== ng ||
        na[373] !== nA ||
        na[374] !== au ||
        na[375] !== lv ||
        na[376] !== id
          ? ((tZ = id
              ? (0, a.jsx)(
                  ej,
                  {
                    account: iu,
                    accountId: lS.accountId,
                    targetPlan: lS.targetPlan,
                    onClose: () => lv(null),
                    onSuccess: () => {
                      ;(lv(null), nA(au, { replace: ng || ah }))
                    },
                  },
                  `${lS.accountId}:${lS.userId}:${lS.targetPlan}`,
                )
              : null),
            (na[369] = iu),
            (na[370] = lS),
            (na[371] = ah),
            (na[372] = ng),
            (na[373] = nA),
            (na[374] = au),
            (na[375] = lv),
            (na[376] = id),
            (na[377] = tZ))
          : (tZ = na[377]),
        na[378] !== lx || na[379] !== lT || na[380] !== ip
          ? ((t$ = ip
              ? (0, a.jsx)(ek, {
                  accountId: lx.accountId,
                  onCloseAutoFocus: lx.restoreFocus,
                  onClose: () => lT(null),
                  onSuccess: (e) => {
                    let { canonical_payment_method_id: t } = e
                    lx.resume(t)
                  },
                })
              : null),
            (na[378] = lx),
            (na[379] = lT),
            (na[380] = ip),
            (na[381] = t$))
          : (t$ = na[381]),
        na[382] !== la ||
        na[383] !== nh ||
        na[384] !== ah ||
        na[385] !== ng ||
        na[386] !== nA ||
        na[387] !== au ||
        na[388] !== nf ||
        na[389] !== lr
          ? ((tK =
              null != la
                ? (0, a.jsx)(eU, {
                    recovery: la.recovery,
                    signal: la.signal,
                    onClose: () => lr(null),
                    onSuccess: () => {
                      ;((0, eu.yy)(nf, y.yP, {
                        changeType: "CHATGPT_SUBSCRIPTION_PLAN_CHANGE_TYPE_UPGRADE",
                        previousPlan: la.recovery.initialPlan,
                        selectedPlan: (0, nw.J)(la.recovery.updatedPlan),
                      }),
                        lr(null),
                        nf.get(F.Id).success(nh.formatMessage(eJ.S.upgradeSucceeded)),
                        (0, R.Q6)("accounts-check"),
                        nA(au, { replace: ng || ah }))
                    },
                  })
                : null),
            (na[382] = la),
            (na[383] = nh),
            (na[384] = ah),
            (na[385] = ng),
            (na[386] = nA),
            (na[387] = au),
            (na[388] = nf),
            (na[389] = lr),
            (na[390] = tK))
          : (tK = na[390]))
      let ig = tF,
        ih = null == n6 && !ic && !id && !ip && null == la && !im && !lP && !lg
      na[391] !== nr.id || !1 !== na[392] || na[393] !== lj || !1 !== na[394] || na[395] !== ih
        ? ((tz = {
            accountId: nr.id,
            eligibleForCancelAnytime: !1,
            eligibleForShowProPlan: !1,
            eligibleForGoIncrementality: lj,
            visible: ih,
          }),
          (na[391] = nr.id),
          (na[392] = !1),
          (na[393] = lj),
          (na[394] = !1),
          (na[395] = ih),
          (na[396] = tz))
        : (tz = na[396])
      let iC = "all_plans" === lJ,
        iP = `${nr.id}:${a0}:${ao?.targetPlan ?? nI.key}`
      ;(na[397] !== nW || na[398] !== nf
        ? ((tQ = (e) => {
            ;((0, eu.yy)(nf, P.JVW, { oldSelectedCountry: nW, newSelectedCountry: e }), nF(e))
          }),
          (na[397] = nW),
          (na[398] = nf),
          (na[399] = tQ))
        : (tQ = na[399]),
        na[400] !== nW || na[401] !== tQ
          ? ((tJ = { value: nW, onChange: tQ }), (na[400] = nW), (na[401] = tQ), (na[402] = tJ))
          : (tJ = na[402]))
      let iy,
        iI = r$ || re || aa
      ;(na[403] !== tm ||
      na[404] !== nr.id ||
      na[405] !== ak ||
      na[406] !== lm ||
      na[407] !== aH ||
      na[408] !== t_ ||
      na[409] !== nf ||
      na[410] !== lp ||
      na[411] !== aP
        ? ((tX =
            null == lm
              ? void 0
              : {
                  scope: lm,
                  onOrdinaryUpgradeAttempt: () => {
                    tm && "upgrades_and_promotions" === (0, Z.T$)(ak, aH) && t_(!1)
                  },
                  onClick: (e, t) => {
                    ;((0, eu.yy)(nf, b.CodexPricingPlanPageCtaClicked, { ctaAction: e, source: aP, targetPlan: t }),
                      lp(nr?.id ?? null))
                  },
                }),
          (na[403] = tm),
          (na[404] = nr.id),
          (na[405] = ak),
          (na[406] = lm),
          (na[407] = aH),
          (na[408] = t_),
          (na[409] = nf),
          (na[410] = lp),
          (na[411] = aP),
          (na[412] = tX))
        : (tX = na[412]),
        na[413] !== nr.id ||
        na[414] !== a0 ||
        na[415] !== n3 ||
        na[416] !== nh ||
        na[417] !== ri ||
        na[418] !== nf ||
        na[419] !== aP ||
        na[420] !== nO
          ? ((t1 =
              ri && !n3 && null != nO
                ? () => {
                    try {
                      ;(0, eu.yy)(nf, b.CodexPricingPlanPageCtaClicked, {
                        ctaAction: "renew",
                        source: aP,
                        targetPlan: a0,
                      })
                    } catch {}
                    lw.current?.abort()
                    let e = new AbortController()
                    ;((lw.current = e),
                      (0, C.Ci)()
                        .then((t) =>
                          t(
                            nf,
                            nr.id,
                            nO,
                            () => n5(!0),
                            () => !e.signal.aborted,
                            (t) =>
                              e.signal.aborted
                                ? (t(), ac)
                                : (n4(e),
                                  e.signal.addEventListener("abort", t, { once: !0 }),
                                  () => {
                                    ;(n4((t) => (t === e ? null : t)), e.signal.removeEventListener("abort", t))
                                  }),
                          ),
                        )
                        .catch(() => {
                          e.signal.aborted ||
                            nf.get(M.chatGptAuthenticatedAccountId$) !== nr.id ||
                            nf.get(M.chatGptAuthenticatedUserId$) !== nO ||
                            nf
                              .get(F.Id)
                              .danger(nh.formatMessage(m.W.subscriptionUpdateUnavailable), {
                                errorAnalytics: { toastId: "pricingPlanPage.subscriptionUpdateUnavailable" },
                              })
                        }))
                  }
                : void 0),
            (na[413] = nr.id),
            (na[414] = a0),
            (na[415] = n3),
            (na[416] = nh),
            (na[417] = ri),
            (na[418] = nf),
            (na[419] = aP),
            (na[420] = nO),
            (na[421] = t1))
          : (t1 = na[421]),
        na[422] !== rk || na[423] !== rH
          ? ((t0 = null == rH ? null : { ...rH, canExtend: rH.canExtend && rk[ep.x.PLUS]?.campaignId === _.ww }),
            (na[422] = rk),
            (na[423] = rH),
            (na[424] = t0))
          : (t0 = na[424]),
        na[425] !== nI.state ? ((t2 = (0, s.Yi)(nI.state)), (na[425] = nI.state), (na[426] = t2)) : (t2 = na[426]))
      let iA = "direct_checkout_once" === t2
      na[427] !== rY || na[428] !== rF
        ? ((t3 = null == rY ? void 0 : { campaignId: rY, onPriceRendered: rF }),
          (na[427] = rY),
          (na[428] = rF),
          (na[429] = t3))
        : (t3 = na[429])
      let ib = nZ?.offer?.plan,
        iE =
          lL?.skipLoading && lL.locationKey === nI.key && lL.accountId === nr.id && lL.userId === nO ? ep.x.PLUS : ll,
        ix = r$ || re ? null : (rU ?? null),
        iT = r$ || re || rT || (rv && null == rU)
      return (
        na[430] !== r$ ||
        na[431] !== rL ||
        na[432] !== re ||
        na[433] !== rT ||
        na[434] !== aw ||
        na[435] !== rM ||
        na[436] !== rN ||
        na[437] !== aY ||
        na[438] !== a$
          ? ((t5 = () => {
              ;(r$ && aw(), re && (aY(), a$()), rL && rM(), (rT || !rL) && rN())
            }),
            (na[430] = r$),
            (na[431] = rL),
            (na[432] = re),
            (na[433] = rT),
            (na[434] = aw),
            (na[435] = rM),
            (na[436] = rN),
            (na[437] = aY),
            (na[438] = a$),
            (na[439] = t5))
          : (t5 = na[439]),
        na[440] !== nl || na[441] !== ah || na[442] !== ng || na[443] !== nA || na[444] !== au
          ? ((t6 = nl
              ? void 0
              : () => {
                  nA(au, { replace: ng || ah })
                }),
            (na[440] = nl),
            (na[441] = ah),
            (na[442] = ng),
            (na[443] = nA),
            (na[444] = au),
            (na[445] = t6))
          : (t6 = na[445]),
        na[446] !== nr.account_user_role ||
        na[447] !== nr.id ||
        na[448] !== ah ||
        na[449] !== ng ||
        na[450] !== nA ||
        na[451] !== au ||
        na[452] !== nf
          ? ((t4 = (e) => {
              let t = "account-owner" === nr.account_user_role ? B.E_ : `${B.e}/members`
              ;(0, ei.WF)({
                scope: nf,
                legacyUrl: t,
                accountId: nr.id,
                onRedirectPending: () => e.preventDefault(),
                onNavigate: (n) => {
                  ;(nA(au, { replace: ng || ah }),
                    (0, Y.PQ)({
                      event: e,
                      href: n ?? t,
                      initiator: "open_in_browser_bridge",
                      openTarget: null == n ? void 0 : "external-browser",
                    }))
                },
              })
            }),
            (na[446] = nr.account_user_role),
            (na[447] = nr.id),
            (na[448] = ah),
            (na[449] = ng),
            (na[450] = nA),
            (na[451] = au),
            (na[452] = nf),
            (na[453] = t4))
          : (t4 = na[453]),
        na[454] !== l6
          ? ((t8 = (e, t, n, a, r) => {
              l6(e, t, n, a, r)
            }),
            (na[454] = l6),
            (na[455] = t8))
          : (t8 = na[455]),
        na[456] !== rL ||
        na[457] !== tF ||
        na[458] !== a0 ||
        na[459] !== e9 ||
        na[460] !== e0 ||
        na[461] !== i_ ||
        na[462] !== r2 ||
        na[463] !== ni ||
        na[464] !== rV ||
        na[465] !== l_ ||
        na[466] !== rt ||
        na[467] !== ng ||
        na[468] !== rk ||
        na[469] !== nm ||
        na[470] !== rP ||
        na[471] !== lX ||
        na[472] !== a6 ||
        na[473] !== t1 ||
        na[474] !== t0 ||
        na[475] !== iA ||
        !1 !== na[476] ||
        na[477] !== is ||
        na[478] !== t3 ||
        na[479] !== ib ||
        na[480] !== iE ||
        na[481] !== ix ||
        na[482] !== iT ||
        na[483] !== t5 ||
        na[484] !== t6 ||
        na[485] !== t4 ||
        na[486] !== t8 ||
        na[487] !== tz ||
        na[488] !== iC ||
        na[489] !== iP ||
        na[490] !== tJ ||
        na[491] !== iy ||
        na[492] !== iI ||
        na[493] !== tX
          ? ((t7 = (0, a.jsx)(
              nM,
              {
                standalonePricingLayout: ig,
                presentation: tz,
                excludePricingExperiments: ni,
                immediatePresentation: nm,
                forceAllPlans: iC,
                onRerunPricingPresentation: lX,
                countrySelector: tJ,
                pricingSessionId: iy,
                paidPlanCtaMessage: rP,
                showRejoinProCta: a6,
                modal: ng,
                disabled: iI,
                blockedUpgradeAction: tX,
                isSubscriptionScheduleLoading: l_,
                onRenewCurrentPlan: t1,
                currentPlan: a0,
                isTrialAcquisition: rt,
                noPaymentTrial: t0,
                showStaticRejoinPlusCta: iA,
                showGoRejoinPlus: !1,
                defaultTab: r2,
                highlightPlan: is,
                defaultProPlan: i_,
                defaultBillingPeriod: e0,
                offers: rk,
                francePlusPricing: t3,
                explicitOfferPlan: ib,
                daysUntilPlanRenews: e9,
                goPlanChangeDate: rV,
                loadingTargetPlan: iE,
                pricingInfo: ix,
                businessPricingUnavailable: rL,
                pricingUnavailable: iT,
                onRetryPricing: t5,
                onBack: t6,
                onOpenExistingWorkspace: t4,
                onCtaClick: t8,
              },
              iP,
            )),
            (na[456] = rL),
            (na[457] = tF),
            (na[458] = a0),
            (na[459] = e9),
            (na[460] = e0),
            (na[461] = i_),
            (na[462] = r2),
            (na[463] = ni),
            (na[464] = rV),
            (na[465] = l_),
            (na[466] = rt),
            (na[467] = ng),
            (na[468] = rk),
            (na[469] = nm),
            (na[470] = rP),
            (na[471] = lX),
            (na[472] = a6),
            (na[473] = t1),
            (na[474] = t0),
            (na[475] = iA),
            (na[476] = !1),
            (na[477] = is),
            (na[478] = t3),
            (na[479] = ib),
            (na[480] = iE),
            (na[481] = ix),
            (na[482] = iT),
            (na[483] = t5),
            (na[484] = t6),
            (na[485] = t4),
            (na[486] = t8),
            (na[487] = tz),
            (na[488] = iC),
            (na[489] = iP),
            (na[490] = tJ),
            (na[491] = iy),
            (na[492] = iI),
            (na[493] = tX),
            (na[494] = t7))
          : (t7 = na[494]),
        na[495] !== aA ||
        na[496] !== ay ||
        na[497] !== lL ||
        na[498] !== nZ?.offer?.returnPath ||
        na[499] !== im ||
        na[500] !== aP ||
        na[501] !== lR ||
        na[502] !== aC?.checkoutEntryPoint ||
        na[503] !== aC?.upsellContextId
          ? ((t9 = im
              ? (0, a.jsx)(
                  el,
                  {
                    preparation: lL,
                    pricingLocation: aP,
                    pricingSearch: ay,
                    cancelHref: nZ?.offer?.returnPath ?? aA,
                    upsellContextId: aC?.upsellContextId,
                    checkoutEntryPoint: aC?.checkoutEntryPoint,
                    exitRequested: lR.exitRequested,
                    onExitReady: lR.onExitReady,
                  },
                  lL.attemptId,
                )
              : null),
            (na[495] = aA),
            (na[496] = ay),
            (na[497] = lL),
            (na[498] = nZ?.offer?.returnPath),
            (na[499] = im),
            (na[500] = aP),
            (na[501] = lR),
            (na[502] = aC?.checkoutEntryPoint),
            (na[503] = aC?.upsellContextId),
            (na[504] = t9))
          : (t9 = na[504]),
        na[505] !== lt || na[506] !== lP || na[507] !== le || na[508] !== lp
          ? ((ne = lP
              ? (0, a.jsx)(ar, {
                  onBack: () => {
                    ;(lw.current?.abort(), lp(null), lt(), le(null))
                  },
                  onManage: () => {
                    ;(lw.current?.abort(), lp(null), lt(), le(null))
                  },
                })
              : null),
            (na[505] = lt),
            (na[506] = lP),
            (na[507] = le),
            (na[508] = lp),
            (na[509] = ne))
          : (ne = na[509]),
        na[510] !== aR ||
        na[511] !== tp ||
        na[512] !== lt ||
        na[513] !== tB ||
        na[514] !== nr.id ||
        na[515] !== nN ||
        na[516] !== r8 ||
        na[517] !== ln ||
        na[518] !== ly ||
        na[519] !== nh ||
        na[520] !== n1 ||
        na[521] !== lh ||
        na[522] !== lg ||
        na[523] !== lu ||
        na[524] !== lP ||
        na[525] !== lo ||
        na[526] !== ii ||
        na[527] !== tY ||
        na[528] !== l3 ||
        na[529] !== lA ||
        na[530] !== r9 ||
        na[531] !== rU ||
        na[532] !== r6 ||
        na[533] !== nE ||
        na[534] !== r3 ||
        na[535] !== lE ||
        na[536] !== r4 ||
        na[537] !== nf ||
        na[538] !== lc ||
        na[539] !== ls ||
        na[540] !== le ||
        na[541] !== io ||
        na[542] !== aC?.openModalLocation ||
        na[543] !== nO
          ? ((nt =
              !lP && lg
                ? (0, a.jsx)(eD, {
                    onReinstateDowngrade:
                      null != lE
                        ? () => {
                            let e = nr.id,
                              t = lw.current,
                              n = () =>
                                null != t &&
                                lw.current === t &&
                                !t.signal.aborted &&
                                nf.get(M.chatGptAuthenticatedAccountId$) === e &&
                                nf.get(M.chatGptAuthenticatedUserId$) === nO
                            !lo &&
                              n() &&
                              (ls(!0),
                              lc(!0),
                              (0, $.M2)({ accountId: e, expectedAccountId: e })
                                .then(() => {
                                  if (n())
                                    return j.Request.safePost("/subscriptions/update", {
                                      requestBody: { account_id: e, updated_plan: lE },
                                      retry: !1,
                                      additionalHeaders: { [T.zBc]: e },
                                    })
                                })
                                .then(() => {
                                  n() && le(null)
                                })
                                .catch(() => {
                                  n() &&
                                    nf
                                      .get(F.Id)
                                      .danger(nh.formatMessage(m.W.subscriptionUpdateUnavailable), {
                                        errorAnalytics: { toastId: "pricingPlanPage.subscriptionUpdateUnavailable" },
                                      })
                                })
                                .finally(() => {
                                  n() && (lc(!1), ls(!1))
                                }))
                          }
                        : void 0,
                    warnAboutPromotions:
                      tp &&
                      "saved_card_upgrade" === r9.kind &&
                      "promotional" === r9.preview.schedule_replacement_type &&
                      null != r9.upgrade &&
                      null == r9.upgrade.promoCode &&
                      null == r9.upgrade.promoCampaign,
                    paymentMethodRecovery: lA,
                    goPromotionReview:
                      null == ln || null == r8
                        ? null
                        : {
                            collectRenewalMandate: !0,
                            entryPoint: aC?.openModalLocation === ev.fs ? "recovery" : "pricing",
                            subscriptionId: aR?.last_active_subscription.subscription_id ?? void 0,
                            reviewKey: r8.key,
                            owner: ln,
                            returnedSetupIntentId: r4,
                            returnUrl:
                              "u" < typeof window ? void 0 : (0, h.ku)(window.location.href, "settings/Billing"),
                            signal: r8.signal,
                            isOwnerActive: () =>
                              !r8.signal.aborted &&
                              nf.get(M.chatGptAuthenticatedAccountId$) === ln.accountId &&
                              nf.get(M.chatGptAuthenticatedUserId$) === ln.userId,
                            isActive: () => !lC.current,
                            onSubmit: (e) => tB(void 0, e.setupIntentId, e),
                          },
                    promoMandate:
                      r3?.review !== r9
                        ? null
                        : {
                            accountId: nr.id,
                            controller: r6,
                            clientSecret: r3.clientSecret,
                            returnUrl:
                              "u" < typeof window || "scheduled_downgrade" === r9.kind || r9.upgrade?.promoCode == null
                                ? void 0
                                : (0, eq.Ev)(window.location.href, r9.upgrade.promoCode, nE),
                            onClose: () => {
                              ;(lw.current?.abort(), lt(), le(null))
                            },
                            onSuccess: (e) => {
                              let t = "scheduled_downgrade" !== r9.kind ? r9.upgrade : void 0
                              if (t?.promoCode != null)
                                return (
                                  r6.rememberAuthorization(
                                    { accountId: t.accountId, userId: t.userId, promoCode: t.promoCode },
                                    e,
                                  ),
                                  tB(void 0, e)
                                )
                            },
                          },
                    disableConfirm: ly || lh,
                    error: io,
                    isUpdating: lo,
                    isRestoringDowngrade: lu,
                    onShown: () => {
                      "saved_card_upgrade" === r9.kind &&
                        null == lN.current &&
                        ((lN.current = crypto.randomUUID()),
                        tY("CHATGPT_WEB_SUBSCRIPTION_UPGRADE_CONFIRMATION_ACTION_TYPE_SHOWN"))
                    },
                    accountIdentity:
                      n1 && "chatgptprolite" === r9.updatedPlan && nN?.trim()
                        ? (0, a.jsx)("span", { className: "break-all text-secondary", children: nN })
                        : void 0,
                    pricingInfo: rU ?? null,
                    subscriptionUpdate: r9,
                    onCancel: () => {
                      ;(ii("cancel"),
                        null != lw.current &&
                          (0, al.TD)(lw.current.signal)?.record("modal_close_requested", { outcome: "closed" }),
                        lw.current?.abort(),
                        lt(),
                        le(null))
                    },
                    onConfirm: (e) => {
                      ;(tY("CHATGPT_WEB_SUBSCRIPTION_UPGRADE_CONFIRMATION_ACTION_TYPE_PRIMARY_CTA_CLICKED"),
                        ii(
                          "saved_card_upgrade" === r9.kind && r9.preview.amount_due.amount > 0 ? "pay_now" : "confirm",
                        ),
                        tB(e))
                    },
                    onGoToWeb: (e) => {
                      ;(ii("go_to_web"), l3(r9.webUrl, e, r9.pricingCheckout), lt(), le(null))
                    },
                    onOpenChange: (e) => {
                      !e &&
                        (ii("dismiss"),
                        lo ||
                          (null != lw.current &&
                            (0, al.TD)(lw.current.signal)?.record("modal_close_requested", { outcome: "closed" }),
                          lw.current?.abort(),
                          lt(),
                          le(null)))
                    },
                  })
                : null),
            (na[510] = aR),
            (na[511] = tp),
            (na[512] = lt),
            (na[513] = tB),
            (na[514] = nr.id),
            (na[515] = nN),
            (na[516] = r8),
            (na[517] = ln),
            (na[518] = ly),
            (na[519] = nh),
            (na[520] = n1),
            (na[521] = lh),
            (na[522] = lg),
            (na[523] = lu),
            (na[524] = lP),
            (na[525] = lo),
            (na[526] = ii),
            (na[527] = tY),
            (na[528] = l3),
            (na[529] = lA),
            (na[530] = r9),
            (na[531] = rU),
            (na[532] = r6),
            (na[533] = nE),
            (na[534] = r3),
            (na[535] = lE),
            (na[536] = r4),
            (na[537] = nf),
            (na[538] = lc),
            (na[539] = ls),
            (na[540] = le),
            (na[541] = io),
            (na[542] = aC?.openModalLocation),
            (na[543] = nO),
            (na[544] = nt))
          : (nt = na[544]),
        na[545] !== t7 ||
        na[546] !== t9 ||
        na[547] !== ne ||
        na[548] !== nt ||
        na[549] !== tH ||
        na[550] !== tq ||
        na[551] !== tZ ||
        na[552] !== t$ ||
        na[553] !== tK
          ? ((nn = (0, a.jsxs)(a.Fragment, { children: [tH, tq, tZ, t$, tK, t7, t9, ne, nt] })),
            (na[545] = t7),
            (na[546] = t9),
            (na[547] = ne),
            (na[548] = nt),
            (na[549] = tH),
            (na[550] = tq),
            (na[551] = tZ),
            (na[552] = t$),
            (na[553] = tK),
            (na[554] = nn))
          : (nn = na[554]),
        nn
      )
    }
    function ac() {}
    function ad() {
      return null
    }
    function ap() {
      return null
    }
    function am() {
      return null
    }
    function a_() {
      return null
    }
    function ag() {}
    function af() {
      return Math.floor(Date.now() / 1e3)
    }
  },
  GczZ(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      paidPromotionUnavailable: {
        id: "settings.usage.pricingPlanPage.paidPromotionUnavailable",
        defaultMessage: "This offer isn\u2019t available right now. Please try again later.",
      },
      offerApplied: {
        id: "settings.usage.pricingPlanPage.subscriptionUpdate.offerApplied",
        defaultMessage: "Successfully applied offer",
      },
      upgradePending: {
        id: "planManagement.subscriptionUpdatePending",
        defaultMessage: "Your payment is processing. We'll update your subscription once it's confirmed",
      },
      upgradeSucceeded: {
        id: "settings.usage.pricingPlanPage.subscriptionUpdate.upgradeSucceeded",
        defaultMessage: "Successfully upgraded plan",
      },
    })
    n.d(t, {}, { S: a })
  },
  hXxx(e, t, n) {
    var a = n("Qgfj")
    let r = (0, a.zR)({ id: "pricing.comparison.title", defaultMessage: "Upgrade your plan" }),
      l = (0, a.YK)({
        free: { id: "pricingPlanConstants.free.name", defaultMessage: "Free" },
        plus: { id: "pricingPlanConstants.plus.name", defaultMessage: "Plus" },
        go: { id: "pricingPlanConstants.go.name", defaultMessage: "Go" },
        team: { id: "pricingPlanConstants.teams.teamPlanName", defaultMessage: "Business" },
        pro: { id: "pricingPlanConstants.pro.name", defaultMessage: "Pro" },
      })
    n.d(t, {}, { V: r, c: l })
  },
  L1kM(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      l = n("oyxz"),
      i = n("ZtSy")
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            o = (0, r.c)(6),
            { disclaimer: s, modal: u } = e
          return (
            o[0] !== s || o[1] !== u
              ? ((t = {
                  article: (e) =>
                    (0, a.jsx)(
                      i.G,
                      {
                        className: "font-medium",
                        appearance: "secondary",
                        href: s.article,
                        initiator: "open_in_browser_bridge",
                        openTarget: u ? "external-browser" : void 0,
                        children: e,
                      },
                      "article",
                    ),
                }),
                (o[0] = s),
                (o[1] = u),
                (o[2] = t))
              : (t = o[2]),
            o[3] !== s || o[4] !== t
              ? ((n = (0, a.jsx)(l.A, { ...s, values: t })), (o[3] = s), (o[4] = t), (o[5] = n))
              : (n = o[5]),
            n
          )
        },
      },
    )
  },
  FuzG(e, t, n) {
    var a = n("LjYy")
    n.d(
      t,
      {},
      {
        J: function (e) {
          switch (e) {
            case "chatgptgoplan":
              return a.x.GO
            case "chatgptplusplan":
              return a.x.PLUS
            case "chatgptprolite":
              return a.x.PROLITE
            case "chatgptpro":
              return a.x.PRO
            case "chatgptpromax":
              return a.x.PROMAX
          }
        },
        K: function (e) {
          switch (e) {
            case a.x.GO:
              return "chatgptgoplan"
            case a.x.PLUS:
              return "chatgptplusplan"
            case a.x.PROLITE:
              return "chatgptprolite"
            case a.x.PRO:
              return "chatgptpro"
            case a.x.PROMAX:
              return "chatgptpromax"
          }
        },
      },
    )
  },
  On09(e, t, n) {
    var a = n("laUo"),
      r = n("FuzG")
    n.d(
      t,
      {},
      {
        U: function (e, t) {
          if ("chatgptplus_no_payment_trial" !== e.entitlement.subscription_plan) return e
          if (null == t) return void 0 === t ? null : e
          let n = t.entitlement,
            l = t.last_active_subscription
          return n?.subscription_plan === "chatgptplus_no_payment_trial"
            ? e
            : null == n || null == l || n.subscription_id !== t.id || l.subscription_id !== t.id
              ? null
              : !0 === n.has_active_subscription &&
                  !0 !== n.is_active_subscription_gratis &&
                  (0, a.gx)(t.plan_type) &&
                  n.subscription_plan === (0, r.K)(t.plan_type) &&
                  ("chatgpt_web" === l.purchase_origin_platform ||
                    "chatgpt_mobile_ios_web_view" === l.purchase_origin_platform)
                ? {
                    ...e,
                    account: { ...e.account, plan_type: t.plan_type },
                    entitlement: { ...n, is_eligible_for_cp: e.entitlement.is_eligible_for_cp },
                    last_active_subscription: l,
                  }
                : e
        },
      },
    )
  },
  aGba(e, t, n) {
    n.d(t, { m: () => m, s: () => p })
    var a = n("TWc2"),
      r = n("NwSQ"),
      l = n("mBJV")
    let i = { $type: "protobuf_analytics_events.v1.ChatgptPaymentUpgradeClicked" }
    var o = n("AlDs"),
      s = n("mtSb"),
      u = n("yGJW"),
      c = n("ilGw"),
      d = n("LjYy")
    function p(e, t, n, a) {
      let r = n === d.x.PRO || n === d.x.PROLITE || n === d.x.PROMAX
      try {
        ;(0, u.yy)(e, i, {
          ...(0, s.o)(document.referrer, t.accountId, t.computeResidency),
          metricValue: n,
          pricingPlanType: r ? d.x.PRO : n,
          entryPoint: r
            ? "CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_PLAN_MANAGEMENT"
            : "CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRICING_PLAN_MANAGEMENT",
          location: a,
        })
      } catch {}
    }
    function m(e, t, n, p, m) {
      let _ = (0, a.rP)(n ?? "")
      "" !== _ && (0, o.O)(_)
      try {
        let a = (0, c.f)(),
          o = (0, r.E1)(m ?? null) ? m : "unknown"
        if (n === d.x.GO || n === d.x.PLUS)
          return void (0, u.yy)(e, l.gPu, {
            ...(0, s.o)(document.referrer, t.accountId, t.computeResidency),
            metricValue: n,
            location: p,
            source: "unknown" === a ? (o ?? void 0) : a,
          })
        if (n !== d.x.PRO && n !== d.x.PROLITE && n !== d.x.SELF_SERVE_BUSINESS) return
        let _ = n === d.x.SELF_SERVE_BUSINESS
        ;(0, u.yy)(e, i, {
          ...(0, s.o)(document.referrer, t.accountId, t.computeResidency),
          metricValue: n,
          pricingPlanType: _ ? n : d.x.PRO,
          entryPoint: _
            ? "CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_TEAM_CHECKOUT"
            : "CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_PRO_CHECKOUT",
          location: p,
        })
      } catch {}
    }
  },
  g5B3(e, t, n) {
    var a = n("v7qY"),
      r = n("hZax")
    let l = "https://js.stripe.com/basil/stripe.js"
    n.d(
      t,
      {},
      {
        _: l,
        l: function (e) {
          ;(0, r.XM)(e, "2160290604", { disableExposureLog: !0 }).get("checkout_loading_perf_enabled", !1) &&
            (0, a.preload)(l, { as: "script" })
        },
      },
    )
  },
  BQjy(e, t, n) {
    var a = n("a6v3")
    function r() {
      let e = (0, a.$)().trim()
      return (
        (/iPad|iPhone|iPod/.test(e) && !/Safari/.test(e)) ||
        (/Android/.test(e) && /Version\/\d+\.\d+/.test(e)) ||
        /; wv|webview|fbav|fb_iab|fban|instagram|line\/|kakaotalk|snapchat|tiktok/i.test(e)
      )
    }
    n.d(
      t,
      {},
      {
        SX: r,
        Sv: function (e) {
          let t
          if ("u" < typeof window || !r()) return !1
          let n = window,
            l = (0, a.$)(),
            i = btoa(JSON.stringify(e))
          if (/iPad|iPhone|iPod/.test(l)) {
            let a = n.webkit?.messageHandlers
            t = {
              enterprise_onboarding_complete: a?.onboardingComplete,
              hmp_workspace_created: a?.hmpWorkspaceCreated,
              hmp_verification_complete: a?.hmpVerificationComplete,
            }[e.type]
          } else
            /Android/.test(l) && (t = "enterprise_onboarding_complete" === e.type ? (n.openai ?? n.Android) : n.openai)
          return t?.postMessage != null && (t.postMessage(i), !0)
        },
        uG: function (e) {
          if ("u" < typeof window || !r()) return !1
          let t = window
          return (
            t.webkit?.messageHandlers?.hmpWorkspaceCreated !== void 0 ||
            "true" === new URLSearchParams(e).get("native_deferred_persona_verification")
          )
        },
      },
    )
  },
  P00z(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "brain-low-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
        visualBounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.625, y: 1.625, width: 16.765625, height: 16.75 },
        center: { x: 10.007813, y: 10 },
        insets: { top: 1.625, right: 1.609375, bottom: 1.625, left: 1.625 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.007813, y: 10 }, foreground: { x: 10.007813, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.498 1.62521C13.3048 1.61669 14.1456 1.86885 14.7988 2.42599C15.322 2.87237 15.6902 3.48848 15.8281 4.23849C18.1583 5.03176 19.0781 7.93466 17.7666 9.94552C18.1501 10.5345 18.3453 11.2039 18.3691 11.8752C18.3825 11.936 18.3906 11.9989 18.3906 12.0637C18.3906 12.488 18.3111 12.8938 18.168 13.2678C17.8728 14.1524 17.2641 14.9358 16.377 15.4084C15.8621 17.1039 14.4474 18.2201 12.9326 18.3606C12.1212 18.4357 11.2845 18.2271 10.585 17.677C10.3707 17.5084 10.1751 17.3121 10 17.0901C9.82481 17.3122 9.62938 17.5084 9.41504 17.677C8.7155 18.2272 7.87886 18.4357 7.06738 18.3606C5.5526 18.2201 4.13682 17.104 3.62207 15.4084C2.37743 14.7449 1.67852 13.4699 1.62988 12.1613C1.62692 12.1321 1.62501 12.1025 1.625 12.0725C1.625 12.0004 1.6269 11.9287 1.63086 11.8576C1.65754 11.1922 1.85323 10.5294 2.2334 9.94552C0.922173 7.93492 1.84142 5.0322 4.1709 4.23849C4.30883 3.48838 4.67792 2.87241 5.20117 2.42599C5.85436 1.8688 6.69521 1.61672 7.50195 1.62521C8.30913 1.63374 9.14619 1.90417 9.79395 2.47286C9.86572 2.5359 9.93424 2.60275 10 2.67208C10.0658 2.60271 10.1342 2.53594 10.2061 2.47286C10.8538 1.90412 11.6908 1.63377 12.498 1.62521ZM7.4834 3.37521C7.03678 3.37052 6.62387 3.51235 6.33691 3.75704C6.06845 3.98609 5.86041 4.34533 5.86035 4.90841C5.86056 5.3728 5.51698 5.74197 5.08887 5.80783C3.7146 6.01925 3.01656 7.58559 3.57031 8.75802C4.11757 8.45194 4.74834 8.27755 5.41992 8.27755C5.90312 8.27761 6.29492 8.66934 6.29492 9.15255C6.29481 9.63567 5.90305 10.0275 5.41992 10.0276C4.30065 10.0276 3.39206 10.9267 3.37598 12.0422C3.38641 12.8305 3.82544 13.6097 4.60352 13.9416C4.92509 14.0789 5.16499 14.3637 5.24414 14.7082C5.51125 15.8728 6.40927 16.5412 7.22852 16.6174C7.62905 16.6545 8.01264 16.5538 8.33301 16.302C8.64319 16.058 8.95012 15.6254 9.125 14.9016V4.97579C9.12495 4.40269 8.91397 4.02905 8.63867 3.78732C8.34623 3.53076 7.92956 3.37992 7.4834 3.37521ZM12.5166 3.37521C12.0704 3.37995 11.6537 3.53071 11.3613 3.78732C11.1205 3.99879 10.9289 4.3112 10.8848 4.76974L10.875 4.97579V14.9016C11.0499 15.6253 11.3569 16.058 11.667 16.302C11.9873 16.5538 12.371 16.6545 12.7715 16.6174C13.4137 16.5578 14.1019 16.1331 14.499 15.3918C13.8476 15.2908 13.2565 15.0063 12.7852 14.5891C12.4235 14.2688 12.3898 13.7155 12.71 13.3537C13.0303 12.992 13.5835 12.9583 13.9453 13.2785C14.2319 13.5322 14.6069 13.6848 15.0195 13.6848C15.6981 13.6847 16.2779 13.2676 16.5195 12.676C16.7315 12.0075 16.6256 11.2378 16.1318 10.675C15.7658 10.2576 15.7647 9.63005 16.1318 9.21212C16.9846 8.24131 16.6593 6.7117 15.6367 6.07638C15.3301 6.80984 14.7694 7.40976 14.0645 7.76388C13.6327 7.98059 13.1065 7.80597 12.8896 7.37423C12.6734 6.94258 12.8478 6.41722 13.2793 6.2004C13.763 5.95745 14.1011 5.4734 14.1396 4.90841C14.1396 4.34533 13.9316 3.98609 13.6631 3.75704C13.3761 3.5124 12.9632 3.3705 12.5166 3.37521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { n: a })
  },
  LXgI(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "clock-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
        visualBounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
        center: { x: 6, y: 6 },
        insets: { top: 1.099609, right: 1.09961, bottom: 1.09961, left: 1.099609 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6 }, foreground: { x: 6, y: 6 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6 3.09961C6.2209 3.09963 6.40039 3.2791 6.40039 3.5V5.89648C6.40038 6.06885 6.33184 6.23456 6.20996 6.35645L5.0332 7.5332C4.9551 7.6113 4.85256 7.65035 4.75001 7.65035C4.5286 7.65035 4.34964 7.47142 4.34964 7.25C4.34964 7.14745 4.38869 7.0449 4.4668 6.9668L5.59961 5.83398V3.5C5.59961 3.27909 5.77909 3.09961 6 3.09961Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.09961C8.7062 1.09961 10.9004 3.2938 10.9004 6C10.9004 8.7062 8.7062 10.9004 6 10.9004C3.2938 10.9004 1.09961 8.7062 1.09961 6C1.09961 3.2938 3.2938 1.09961 6 1.09961ZM6 1.90039C3.73563 1.90039 1.90039 3.73563 1.90039 6C1.90039 8.26437 3.73563 10.0996 6 10.0996C8.26437 10.0996 10.0996 8.26437 10.0996 6C10.0996 3.73563 8.26437 1.90039 6 1.90039Z" fill="currentColor"/>',
    })
    n.d(t, {}, { G: a })
  },
  n5eA(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "photo-on-tilted-square-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.120972, y: 1.509766, width: 18.174011, height: 17.34082 },
        visualBounds: { x: 1.120972, y: 1.509766, width: 18.174011, height: 17.34082 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.120972, y: 1.509766, width: 18.174011, height: 17.34082 },
        center: { x: 10.207978, y: 10.180176 },
        insets: { top: 1.509766, right: 0.705017, bottom: 1.149414, left: 1.120972 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.207978, y: 10.180176 },
          foreground: { x: 10.207978, y: 10.180176 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M11.111 9.99999C11.111 10.9435 10.3462 11.7083 9.4027 11.7083C8.45921 11.7083 7.69436 10.9435 7.69436 9.99999C7.69436 9.0565 8.45921 8.29165 9.4027 8.29165C10.3462 8.29165 11.111 9.0565 11.111 9.99999Z" fill="currentColor"/> <path d="M3.75089 12.8804C4.73416 11.5755 6.58893 11.3148 7.89377 12.2981L13.0546 16.1871L12.5275 16.8854L12.0015 17.5845L6.8407 13.6956C6.30774 13.294 5.54997 13.4005 5.14835 13.9334L3.47539 16.1547L2.07682 15.1008L3.75089 12.8804Z" fill="currentColor"/> <path d="M11.8801 8.47396C11.7679 7.67655 11.0309 7.12098 10.2334 7.23306L4.12642 8.09134C3.32912 8.20357 2.77364 8.94072 2.88552 9.73807L3.7438 15.845C3.85588 16.6425 4.59308 17.1978 5.39053 17.0859L11.4975 16.2277C12.2951 16.1156 12.8505 15.3785 12.7384 14.5809L11.8801 8.47396ZM14.4714 14.3374C14.718 16.0921 13.4957 17.714 11.7411 17.9606L5.63409 18.8189C3.87954 19.0653 2.25742 17.8432 2.01083 16.0886L1.15255 9.98162C0.906155 8.22718 2.12848 6.60511 3.88287 6.35837L9.98984 5.50009C11.7444 5.2535 13.3663 6.47591 13.6131 8.23041L14.4714 14.3374Z" fill="currentColor"/> <path d="M16.6721 11.8863L17.5304 5.77933C17.6423 4.98187 17.087 4.24467 16.2895 4.13259L10.1825 3.27431C9.38518 3.16243 8.64803 3.71792 8.53579 4.51522L8.15783 7.20461L6.42486 6.96105L6.80283 4.27166C7.04957 2.51727 8.67164 1.29495 10.4261 1.54134L16.5331 2.39962C18.2876 2.64621 19.5098 4.26833 19.2634 6.02288L18.4051 12.1299C18.1585 13.8845 16.5365 15.1068 14.7818 14.8602L12.8226 14.5848L13.0661 12.8518L15.0254 13.1272C15.823 13.2393 16.56 12.6839 16.6721 11.8863Z" fill="currentColor"/>',
    })
    n.d(t, {}, { v: a })
  },
}
//# sourceMappingURL=256943.c09cd9585f.js.map
