export const __rspack_esm_ids = [80397]
export const __webpack_modules__ = {
  U5l8(e, t, a) {
    var i = a("RY1E")
    let n = (0, i.Y)({
        errorProcessingPayment: {
          id: "CheckoutVerifyRoute.errorProcessingPayment",
          description: "Text displayed when there was an error processing the user's payment.",
          defaultMessage: "There was an error processing your payment",
        },
        returnButtonText: {
          id: "CheckoutVerifyRoute.returnButtonText",
          description: "Text displayed on button that takes user back to ChatGPT after a failed payment",
          defaultMessage: "Return to ChatGPT",
        },
      }),
      r = (0, i.Y)({
        promoRemoved: {
          id: "checkout.promo_removed.error.checkout_failed",
          defaultMessage:
            "We couldn\u2019t complete checkout with this promotion. Review the updated price and try again without it.",
          description:
            "Inline error on the subscription checkout form after an unsuccessful promotional checkout and removal of the promotion. Describe this checkout attempt, without implying the promotion expired or the customer is ineligible. The checkout now shows the price without the promotion. Ask the customer to review that price and submit again; this submission has not charged them. Plain text, no placeholders.",
        },
        subscriptionLimit: {
          id: "CheckoutForm.bannerMessageSubscriptionLimitReached",
          defaultMessage:
            "Too many subscriptions associated with this card or device. We can\u2019t complete this purchase.",
          description:
            "Error message in the ChatGPT checkout form or wallet payment sheet when a customer's attempt to buy a paid ChatGPT subscription is blocked because too many subscriptions are associated with the payment card or device being used for this purchase. Calmly explain that the current purchase cannot proceed. Keep this short and use plain text with no placeholders.",
        },
        subscriptionLimitWithHelp: {
          id: "CheckoutForm.bannerMessageSubscriptionLimitReachedWithHelp",
          defaultMessage:
            "Too many subscriptions associated with this card or device. We can\u2019t complete this purchase. <helpLink>Learn more</helpLink>",
          description:
            "Error message in the ChatGPT checkout form when a customer's attempt to buy a paid ChatGPT subscription is blocked because too many subscriptions are associated with the payment card or device being used for this purchase. Calmly explain that the current purchase cannot proceed. The <helpLink> tag wraps a link to the Help Center article explaining the subscription limit. Keep the message concise; the link leaves checkout open.",
        },
        invalidBillingDetails: {
          id: "CheckoutForm.bannerMessageInvalidBillingDetails",
          defaultMessage: "Check your billing details and try again.",
          description:
            "Inline error on the checkout payment form after the server rejects the customer's billing details before payment confirmation. Ask the customer to review their billing details, including those attached to a selected payment method or wallet, before submitting again. Short actionable sentence with no placeholders.",
        },
        taxIdVerificationPending: {
          id: "CheckoutForm.bannerMessageTaxIdVerificationPending",
          defaultMessage: "Your tax ID is still being verified. Please try again shortly.",
          description:
            "Inline error on the checkout payment form after a customer tries to pay while their business tax ID is still being verified. Reassure the customer that verification is in progress and ask them to retry payment shortly. Keep to two short sentences.",
        },
        creditPriceRefreshRequired: {
          id: "StandaloneCreditCheckout.priceReview.refreshRequired",
          defaultMessage: "Refresh checkout to review the latest price.",
          description:
            "Inline notice in standalone credit checkout when the server cannot verify which total the customer approved. Ask the customer to refresh the page before trying the purchase again.",
        },
        expressPaymentStatus: {
          id: "StandaloneCreditCheckout.priceReview.expressPaymentStatusNotice",
          defaultMessage: "Check your purchase status before trying again.",
          description:
            "Message that dismisses an express payment sheet when a standalone credit checkout has ended and its payment outcome must be checked. Do not imply that the price changed or that payment failed.",
        },
        expressPriceReview: {
          id: "StandaloneCreditCheckout.priceReview.expressPaymentNotice",
          defaultMessage: "Review the updated total before confirming your purchase.",
          description:
            "Message that dismisses an express payment sheet for a standalone credit purchase when its quoted price changes. Direct the customer back to checkout to review the new total and confirm explicitly.",
        },
      }),
      s = (0, i.Y)({
        title: {
          id: "checkout.promo_removed.modal.title.offer_unavailable",
          defaultMessage: "This offer can\u2019t be applied",
          description:
            "Title of the subscription checkout dialog shown when an attempted purchase cannot use its promotional offer. Reassure the customer that they can still review the regular price; no purchase has completed. Short heading with no placeholders.",
        },
        description: {
          id: "checkout.promo_removed.modal.description.offer_unavailable",
          defaultMessage: "You can still subscribe without the offer. Review the regular price before subscribing.",
          description:
            "Body of the subscription checkout dialog after a promotional purchase attempt fails and the server prepares a checkout without the offer. Explain that the customer can review the regular price before deciding whether to submit a new purchase. The current attempt has not charged them. Plain text with no placeholders.",
        },
        reviewPrice: {
          id: "checkout.promo_removed.modal.button.review_price",
          defaultMessage: "Review price",
          description:
            "Primary button in the subscription checkout offer-removal dialog. Opens the replacement checkout at the regular price for review; clicking it does not purchase or charge. The other button returns to plans. Short button label with no placeholders.",
        },
        backToPlans: {
          id: "checkout.promo_removed.modal.button.back_to_plans",
          defaultMessage: "Back to plans",
          description:
            "Secondary button in the subscription checkout offer-removal dialog. Leaves the unpaid checkout and returns to the plan choices without accepting the regular price. The other button reviews the price. Short button label with no placeholders.",
        },
      }),
      o = (0, i.Y)({
        standardUsage: {
          id: "CheckoutPlanSelector.usageTier.standard",
          defaultMessage: "Standard",
          description:
            "Short label for the lowest of three paid Pro usage tiers in checkout. Selecting it chooses the Pro 100 monthly subscription. The other options offer More usage and Max usage; Standard is a usage level, not a separate plan name.",
        },
        moreUsage: {
          id: "CheckoutPlanSelector.usageTier.more",
          defaultMessage: "More usage",
          description:
            "Short label for the middle of three paid Pro usage tiers in checkout. Selecting it chooses the Pro 200 monthly subscription, between Standard and Max usage. More describes the usage allowance, not the tier name.",
        },
        maxUsage: {
          id: "CheckoutPlanSelector.usageTier.max",
          defaultMessage: "Max usage",
          description:
            "Short label for the highest of three paid Pro usage tiers in checkout. Selecting it chooses the Pro 500 monthly subscription. Max means the largest usage allowance, not unlimited usage.",
        },
        upgradeToPro: {
          id: "CheckoutPlanSelector.usageTier.upgrade",
          defaultMessage: "Upgrade to Pro",
          description:
            "Primary payment confirmation button in Pro subscription checkout, shown for any of the three usage tiers. Clicking it purchases the selected monthly subscription. Pro is the subscription name; keep the label short.",
        },
        pricePerMonth: {
          id: "CheckoutPlanSelector.pricePerMonth",
          defaultMessage: "{price}/month",
          description: "Monthly price shown under each Pro checkout plan option card title.",
        },
      }),
      l = (0, i.Y)({
        offerApplied: {
          id: "CheckoutOfferTopBanner.offerApplied",
          defaultMessage: "Offer applied: {offerName}",
          description:
            "Banner copy shown when a promotional discount is active on the checkout page. {offerName} is the user visible name of the applied offer.",
        },
        additionalOfferApplied: {
          id: "chatgpt.checkout.paypal_promo.banner.additional_offer_applied",
          defaultMessage: "Additional offer applied: {offerName}",
          description:
            "Banner shown on the PayPal Germany ChatGPT Plus cashback checkout when an additional OpenAI promotion is applied. {offerName} is the localized name of the additional OpenAI promotion.",
        },
        firstMonthFreeOfferApplied: {
          id: "CheckoutOfferTopBanner.firstMonthFreeOfferApplied",
          defaultMessage: "Offer applied: First month free.",
          description:
            "Banner copy shown at the top of the redesigned checkout page when a first-month-free monthly offer is active. It confirms the offer has been applied. Short sentence; keep the period.",
        },
        viewTerms: {
          id: "CheckoutOfferTopBanner.viewTerms",
          defaultMessage: "View terms",
          description: "Link text that lets the user read the terms and conditions of the applied promotional offer.",
        },
      }),
      d = (0, i.Y)({
        checkoutPersonalButtonText: {
          id: "CheckoutSummary.checkoutPersonalButtonText",
          defaultMessage: "Purchase ChatGPT {planName}",
          description: "label for the checkout button. planName is something like Go/Plus/Pro",
        },
        skipButtonText: {
          id: "CheckoutSummary.skipButtonText",
          defaultMessage: "Skip trial, continue with Free plan",
          description:
            "Surface: checkout summary CTA button in onboarding checkout (under the order summary). Trigger: shown when onboarding offers a paid plan with free trial and user can skip. Audience/intent: end users; decline the offer and continue with the free plan. Constraints: keep under ~40 chars if possible, sentence case, fits a button; should read as a polite decline. Placeholders: none. Edge expectations: should still make sense if shown without surrounding text and must not imply a cancel/refund action.",
        },
        freePlan: {
          id: "CheckoutSummary.headingFree",
          defaultMessage: "Free plan",
          description: "Heading shown in checkout when the user selects the Free plan",
        },
        goPlan: {
          id: "CheckoutSummary.headingGo",
          defaultMessage: "Go plan",
          description: "Heading shown in checkout when the user selects the Go plan",
        },
        plusPlan: {
          id: "CheckoutSummary.headingChatGPTPlus",
          defaultMessage: "ChatGPT Plus",
          description:
            "Short heading at the top of the checkout summary card after an end user selects the ChatGPT Plus plan. Keep 'ChatGPT Plus' as the official product name with this capitalization. Plain text only, with no placeholders.",
        },
        proPlan: {
          id: "CheckoutSummary.headingPro",
          defaultMessage: "Pro plan",
          description: "Heading shown in checkout when the user selects the Pro plan",
        },
        prolitePlan: {
          id: "CheckoutSummary.headingProlite",
          defaultMessage: "Pro plan",
          description: "Heading shown in checkout when the user selects the Prolite plan",
        },
        sophiaPlan: {
          id: "CheckoutSummary.headingSophia",
          defaultMessage: "Academic Researcher plan",
          description:
            "Plan heading in the checkout order summary when an eligible user selects the Academic Researcher subscription. Short single-line heading.",
        },
        businessPlan: {
          id: "CheckoutSummary.headingBusiness",
          defaultMessage: "Business plan",
          description: "Heading shown in checkout when the user selects the Business plan",
        },
        plusPlanTitle: {
          id: "CheckoutSummary.plusPlanTitle",
          defaultMessage: "Start your free Plus trial",
          description: "Title shown in checkout when the user selects the Plus plan",
        },
        prolitePlanTitle: {
          id: "CheckoutSummary.prolitePlanTitle",
          defaultMessage: "Start your free Pro trial",
          description: "Title shown in checkout when the user selects the Prolite plan",
        },
        proPlanTitle: {
          id: "CheckoutSummary.proPlanTitle",
          defaultMessage: "Start your free Pro trial",
          description: "Title shown in checkout when the user selects the Pro plan",
        },
        businessPlanTrialTitle: {
          id: "CheckoutSummary.businessPlanTrialTitle",
          defaultMessage: "Start your free Business trial",
          description: "Title shown in checkout when the user selects the Business plan",
        },
        goPlanTrialTitle: {
          id: "CheckoutSummary.goPlanTrialTitle",
          defaultMessage: "Start your free Go trial",
          description: "Title shown in checkout when the user selects the Go plan",
        },
      }),
      c = (0, i.Y)({
        annualBillingName: {
          id: "PlusCheckoutPlanSelector.annualBillingName",
          defaultMessage: "Annual billing",
          description: "Plan label for the yearly Plus cadence option in checkout.",
        },
        costStructure: {
          id: "PlusCheckoutPlanSelector.costStructure",
          defaultMessage: "/mo",
          description: "Short cost structure suffix for the Plus checkout selector; mo abbreviates month.",
        },
        monthlyBillingName: {
          id: "PlusCheckoutPlanSelector.monthlyBillingName",
          defaultMessage: "Monthly billing",
          description: "Plan label for the monthly Plus cadence option in checkout.",
        },
      }),
      u = (0, i.Y)({
        heading: {
          id: "CheckoutSummary.headingRosalindAcademic",
          defaultMessage: "Rosalind Academic Plan",
          description:
            "Plan heading in checkout for an approved lab activating its Rosalind Academic workspace. Keep Rosalind unchanged and translate Academic Plan as part of the plan name.",
        },
      }),
      p = (0, i.Y)({
        businessAnnualPlanSavingsAmount: {
          id: "teamBilling.businessAnnualPlanSavingsAmount.v2",
          defaultMessage:
            "You\u2019re saving {savingsAmountMonthly}/month by choosing an annual plan. That\u2019s {savingsAmountYearly}/year.",
          description: "Amount saved for the Annual billing plan",
        },
        discountUnselectedLabel: {
          id: "teamBilling.discountUnselectedLabel",
          defaultMessage: "Save {discountedRate}%",
          description: "Label to indicate user can save a discounted rate",
        },
      })
    a.d(
      t,
      {},
      {
        IP: function (e) {
          return "rosalind_academic" === e
            ? u.heading
            : "prolite" === e
              ? d.proPlanTitle
              : "team" === e
                ? d.businessPlanTrialTitle
                : "go" === e
                  ? d.goPlanTrialTitle
                  : d.plusPlanTitle
        },
        M1: c,
        SE: "https://help.openai.com/articles/20001559",
        W4: p,
        WM: s,
        Y9: u,
        Yg: d,
        aB: n,
        de: l,
        gL: r,
        wA: o,
      },
    )
  },
  gviT(e, t, a) {
    var i = a("U5l8"),
      n = a("B2b6")
    function r({
      standardMonthlyAmount: e,
      standardAnnualMonthlyAmount: t,
      standardQuantity: a,
      premiumMonthlyAmount: i,
      premiumAnnualMonthlyAmount: n,
      premiumQuantity: s = 0,
    }) {
      let o = (e - t) * a
      if (s > 0) {
        if (null == i || null == n) return null
        o += (i - n) * s
      }
      return o
    }
    a.d(
      t,
      {},
      {
        Jz: function (e, t) {
          return Math.floor(100 - (t / e) * 100)
        },
        Xy: function ({ annualMonthlyEquivalent: e, monthlyAmount: t }) {
          if (!Number.isFinite(t) || !Number.isFinite(e) || t <= 0 || e < 0 || e >= t) return 0
          let a = ((t - e) / t) * 100
          return !Number.isFinite(a) || a <= 0 ? 0 : Math.floor(a + 1e-9)
        },
        ej: function ({ amountMinorUnits: e, currency: t, locale: a, maximumFractionDigits: i }) {
          let r = (0, n.OG)(t),
            s = e / Math.pow(10, r),
            o = i ?? r
          return new Intl.NumberFormat(a, {
            style: "currency",
            currency: t,
            minimumFractionDigits: Math.min(r, o),
            maximumFractionDigits: o,
          }).format(s)
        },
        iB: function ({ intl: e, currency: t, ...a }) {
          let n = r(a)
          if (null == n) return null
          let s = (a) =>
            e.formatNumber(a, {
              style: "currency",
              currency: t,
              currencyDisplay: "narrowSymbol",
              trailingZeroDisplay: "stripIfInteger",
            })
          return e.formatMessage(i.W4.businessAnnualPlanSavingsAmount, {
            savingsAmountMonthly: s(n),
            savingsAmountYearly: s(12 * n),
          })
        },
        kz: function ({ intl: e, amount: t, currency: a }) {
          let i = (0, n.OG)(a)
          return e.formatNumber(t, {
            currency: a,
            style: "currency",
            currencyDisplay: "symbol",
            minimumFractionDigits: i,
            maximumFractionDigits: i,
            trailingZeroDisplay: "stripIfInteger",
          })
        },
        xs: r,
      },
    )
  },
  GaEn(e, t, a) {
    a.d(t, {
      Cm: () => n,
      zD: () => r,
      rN: () => m,
      mB: () => v,
      R8: () => R,
      re: () => k,
      qf: () => T,
      Ap: () => f,
      ku: () => s,
      x1: () => I,
      Nt: () => h,
      fn: () => g,
      R3: () => y,
      WM: () => x,
      aT: () => p,
      Wd: () => D,
      GJ: () => b,
    })
    let i = "subscription-promotion-setup-return",
      n = "go_promotion_setup_return",
      r = [n, "setup_intent", "setup_intent_client_secret", "redirect_status"]
    function s(e, t) {
      let a = new URL(e)
      for (let e of r) a.searchParams.delete(e)
      return (a.searchParams.set(n, "1"), (a.hash = t), a.toString())
    }
    function o(e) {
      return "object" == typeof e && null != e && !Array.isArray(e)
    }
    function l(e) {
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
    let d = null,
      c = null
    function u(e, t) {
      return e?.accountId === t.accountId && e.userId === t.userId && e.promoCode === t.promoCode
    }
    function p(e, t, a = !1) {
      let n = { ...e, setupIntentId: t.split("_secret_")[0], createdAt: Date.now(), renewalMandate: a }
      d = { context: n, clientSecret: t, persisted: !1 }
      try {
        ;(window.sessionStorage.setItem(i, JSON.stringify(n)), (d.persisted = !0))
      } catch {}
    }
    function m() {
      if ("u" < typeof window) return null
      let e = new URLSearchParams(window.location.search),
        t = e.get("setup_intent") ?? c,
        a = _()
      if (null != a && null != j(a, t)) {
        c = t
        let i = e.get("setup_intent_client_secret")
        a.renewalMandate && i?.split("_secret_")[0] === t && (d = { context: a, clientSecret: i, persisted: !0 })
      }
      return t
    }
    function h(e, t) {
      return j(e, t)?.setupIntentId
    }
    function f(e) {
      let t = _()
      return null == t ? void 0 : h(e, t.setupIntentId)
    }
    function g(e, t) {
      let a = _()
      return null == a ||
        a.accountId !== e.accountId ||
        a.userId !== e.userId ||
        null == t ||
        null == h(a, t) ||
        (a.renewalMandate && y(a, t)?.clientSecret == null)
        ? null
        : {
            accountId: a.accountId,
            userId: a.userId,
            promoCode: a.promoCode,
            ...(null == a.promotionAcceptanceOrigin ? {} : { promotionAcceptanceOrigin: a.promotionAcceptanceOrigin }),
          }
    }
    function y(e, t) {
      let a = j(e, t)
      return null == a
        ? d?.context.renewalMandate && d.context.setupIntentId === t && u(d.context, e)
          ? { clientSecret: null }
          : null
        : a.renewalMandate
          ? { clientSecret: d?.context.setupIntentId === t && u(d.context, e) ? d.clientSecret : null }
          : null
    }
    async function b({ owner: e, returnedSetupIntentId: t, prepare: a, isActive: i }) {
      if (!i()) return null
      let n = h(e, t)
      if (null != n) {
        let t = y(e, n)
        if (null == t) return null
        if (null != t.clientSecret) return t.clientSecret
      }
      let r = await a()
      return i() ? (null != r && p(e, r, !0), r) : null
    }
    function v(e, t) {
      let a = (a) => a.setupIntentId === t && u(a, e)
      null != d && a(d.context) && ((d = null), c === t && (c = null))
      try {
        let e = window.sessionStorage.getItem(i),
          n = l(null == e ? null : JSON.parse(e))
        null != n && a(n) && (window.sessionStorage.removeItem(i), c === t && (c = null))
      } catch {}
    }
    function x(e) {
      if ((o(e) && "SubscriptionRenewalSetupError" === e.name) || w(e)) return !0
      try {
        return e instanceof Error && w(JSON.parse(e.message))
      } catch {
        return !1
      }
    }
    function w(e) {
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
    function _() {
      if (null != d && !d.persisted) return d.context
      try {
        let e = window.sessionStorage.getItem(i)
        return l(null == e ? null : JSON.parse(e))
      } catch {
        return d?.context ?? null
      }
    }
    function j(e, t) {
      let a = _()
      if (null == a) return null
      let i = Date.now() - a.createdAt
      return i >= 0 && i <= 18e5 && u(a, e) && t === a.setupIntentId ? a : null
    }
    function k({ onWarningChange: e = () => {} } = {}) {
      let t = null,
        a = null,
        i = !1,
        n = null,
        r = null,
        s = null,
        o = 0,
        l = null,
        d = (r, d) => {
          ;((u(t?.owner, r) && t?.setupIntentId === d) ||
            (o++, (s = null), (n = null), (l = null), (i = !1), (a = null), e(null)),
            (t = { owner: r, setupIntentId: d }))
        }
      return {
        rememberAuthorization: d,
        getSetupIntent: (e, a = null) => (u(t?.owner, e) ? t?.setupIntentId : h(e, a)),
        showWarning(t, i) {
          ;(d(t, i.setup_intent_id), (a = i), e(i))
        },
        acknowledgeWarning(e) {
          null != a && u(t?.owner, e) && (i = !0)
        },
        async completeRenewal({
          owner: r,
          setupIntentId: s,
          stripe: c,
          isActive: p,
          acknowledgeMandateWarning: m,
          finalizePaymentMethod: h,
          saveDefaultPaymentMethod: f,
        }) {
          if (!p()) return { status: "closed" }
          if ((d(r, s), u(n?.owner, r) && n?.setupIntentId === s)) return { status: "complete" }
          let g = o,
            b = () => p() && g === o,
            v = m ?? (i && u(t?.owner, r) && t?.setupIntentId === s)
          try {
            let t,
              i = y(r, s)
            if (null == i) return null
            if (!b()) return { status: "closed" }
            let o = () => {
              let e = Error("Renewal authorization is unavailable")
              return ((e.name = "SubscriptionRenewalSetupError"), e)
            }
            if (null == i.clientSecret) throw o()
            let d = await c.retrieveSetupIntent(i.clientSecret)
            if (!b()) return { status: "closed" }
            if (
              d.error?.type === "api_connection_error" ||
              d.error?.type === "api_error" ||
              d.error?.type === "rate_limit_error"
            )
              throw d.error
            let u = d.setupIntent,
              p = "string" == typeof u?.payment_method ? u.payment_method : u?.payment_method?.id
            if (d.error || u?.id !== s || "succeeded" !== u.status || !p) throw o()
            try {
              t = await ((e, t) => {
                if (l?.key === e) return l.promise
                let a = t().catch((e) => {
                  throw (l?.promise === a && (l = null), e)
                })
                return ((l = { key: e, promise: a }), a)
              })(JSON.stringify([r.accountId, r.userId, r.promoCode, s, p]), () =>
                h(p, { account_id: r.accountId, setup_intent_id: s }),
              )
            } catch (e) {
              if (!b()) return { status: "closed" }
              if (null != e && "object" == typeof e && "status" in e && 404 === e.status) throw o()
              throw e
            }
            if (!b()) return { status: "closed" }
            if (t.canonical_payment_method_id !== p) throw o()
            let m = t.mandate_status ?? "missing"
            if ("active" !== m && !v)
              return ((a = { status: "mandate_warning", setup_intent_id: s, mandate_status: m }), e(a), a)
            if (
              (await f({
                account_id: r.accountId,
                payment_method_id: p,
                intended_usage: "subscription",
                setup_intent_id: s,
              }),
              !b())
            )
              return { status: "closed" }
            return ((n = { owner: r, setupIntentId: s }), { status: "complete" })
          } catch (e) {
            if (!b()) return { status: "closed" }
            throw e
          }
        },
        reset(d = !1) {
          let c = t
          ;((t = null),
            (n = null),
            (l = null),
            (a = null),
            (i = !1),
            (r = null),
            (s = null),
            o++,
            e(null),
            d || null == c || v(c.owner, c.setupIntentId))
        },
        async confirmOnce({ key: e, stripe: t, elements: a, clientSecret: i, confirmParams: n }) {
          if (r?.key === e) return r.result
          if (s?.key === e) return s.promise
          let l = ++o,
            d = (async () => {
              let s =
                null != a
                  ? await t.confirmSetup({ elements: a, confirmParams: n, redirect: "if_required" })
                  : await t.confirmSetup({ clientSecret: i, confirmParams: n, redirect: "if_required" })
              if (s.error) throw s.error
              let d = s.setupIntent,
                c = "string" == typeof d?.payment_method ? d.payment_method : d?.payment_method?.id
              if (
                d?.status !== "succeeded" ||
                !d.id ||
                !c ||
                (null != i && (d.id !== i.split("_secret_")[0] || c !== n.payment_method))
              )
                throw Error("Payment authentication incomplete")
              let u = { setupIntentId: d.id, paymentMethodId: c }
              if (o !== l) throw Error("Payment review is no longer active")
              return ((r = { key: e, result: u }), u)
            })()
          s = { key: e, promise: d }
          try {
            return await d
          } finally {
            o === l && (s = null)
          }
        },
      }
    }
    let S = "lock_timeout",
      P = {
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
      M = new Set([
        "authentication_required",
        "payment_intent_authentication_failure",
        "setup_intent_authentication_failure",
      ]),
      C = new Set(["card_declined", "payment_intent_payment_attempt_failed"]),
      A = new Set([
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
    function I(e) {
      for (let t of [e.decline_code, e.code]) if (null != t && Object.prototype.hasOwnProperty.call(P, t)) return t
      return M.has(e.decline_code ?? "") || M.has(e.code ?? "")
        ? "authentication_failed"
        : A.has(e.decline_code ?? "") || C.has(e.code ?? "")
          ? "payment_method_declined"
          : "other"
    }
    let N = [100, 250]
    async function R({ confirmPaymentIntent: e, shouldRetry: t }) {
      let a = await e()
      for (let i of N) {
        if (
          a.error?.code !== S ||
          !t() ||
          (await (function (e) {
            return new Promise((t) => {
              window.setTimeout(t, e)
            })
          })(i),
          !t())
        )
          break
        a = await e()
      }
      return a
    }
    function T(e) {
      return "requires_payment_method" === e.status
        ? I(e.last_payment_error ?? {})
        : "requires_action" === e.status
          ? "authentication_failed"
          : null
    }
    let q = "pix_display_qr_code"
    async function D({
      updateResult: e,
      stripePromise: t,
      isStripeClientBootstrapError: a,
      isPaymentMethodRecoveryEnabled: i,
      isOpen: n,
      cleanupPendingSubscriptionUpdate: r,
      paypalReturnPath: s,
      onDiagnostic: o,
    }) {
      if ("pending" === e.status) return { status: "pending" }
      if ("payment_method_failed" === e.status)
        return (
          r(e.pending_update_payment_intent_id, e.pending_update_invoice_id),
          {
            status: "payment_method_failed",
            reason: e.payment_method_failure_reason ?? "other",
            detail: e.payment_method_failure_detail ?? null,
            source: "update",
          }
        )
      if ("setup_required" === e.status)
        return { status: "setup_required", setupIntentClientSecret: e.setup_intent_client_secret }
      let l = await (async function ({
        updateResult: e,
        stripePromise: t,
        isStripeClientBootstrapError: a,
        isPaymentMethodRecoveryEnabled: i,
        isOpen: n,
        cleanupPendingSubscriptionUpdate: r,
        paypalReturnPath: s,
        onDiagnostic: o,
      }) {
        if ("requires_action" !== e.status) return { status: "complete" }
        let l = { paymentIntentId: e.payment_intent.id, invoiceId: e.pending_update_invoice_id, recoveryEnabled: i }
        B(o, { ...l, type: "confirmation_started" })
        let d = (e) => (
            B(o, {
              ...l,
              type: "confirmation_resolved",
              outcome: e.status,
              failureReason: "payment_method_failed" === e.status ? e.reason : void 0,
            }),
            e
          ),
          c = (t) => (
            r(e.payment_intent.id, e.pending_update_invoice_id),
            d({ status: "payment_method_failed", reason: t })
          )
        try {
          let u,
            p = e.payment_intent?.client_secret,
            m =
              e.payment_intent &&
              "next_action_type" in e.payment_intent &&
              "string" == typeof e.payment_intent.next_action_type
                ? e.payment_intent.next_action_type
                : null
          if ((B(o, { ...l, type: "phase_started", phase: "stripe_bootstrap" }), a || !t || !p))
            throw (
              B(o, { ...l, type: "phase_settled", phase: "stripe_bootstrap", outcome: "unavailable" }),
              Error("Payment confirmation is still loading. Please try again.")
            )
          try {
            u = await t
          } catch (e) {
            throw (B(o, { ...l, type: "phase_settled", phase: "stripe_bootstrap", outcome: "rejected" }), e)
          }
          if (
            (B(o, { ...l, type: "phase_settled", phase: "stripe_bootstrap", outcome: u ? "resolved" : "unavailable" }),
            !u)
          )
            throw Error("Payment confirmation is still loading. Please try again.")
          if (!n()) return (r(e.payment_intent.id, e.pending_update_invoice_id), d({ status: "closed" }))
          let h =
              "paypal" === e.payment_intent.payment_method_type
                ? "confirmPayPalPayment"
                : i && m === q
                  ? "confirmPixPayment"
                  : "upi_handle_redirect_or_display_qr_code" === m
                    ? "confirmPayment"
                    : "confirmCardPayment",
            f = i || "confirmCardPayment" !== h,
            g = 0,
            y = await R({
              confirmPaymentIntent: () => {
                let e,
                  t = () =>
                    (function ({ stripe: e, paymentIntentClientSecret: t, sdkMethod: a, paypalReturnPath: i }) {
                      if ("confirmPixPayment" === a) return e.confirmPixPayment(t)
                      if ("confirmPayPalPayment" === a) {
                        if (void 0 === i) throw Error("PayPal payment confirmation requires a return path.")
                        return e.confirmPayPalPayment(t, { return_url: new URL(i, window.location.href).href })
                      }
                      return "confirmPayment" === a
                        ? e.confirmPayment({
                            clientSecret: t,
                            redirect: "if_required",
                            confirmParams: { return_url: window.location.href },
                          })
                        : e.confirmCardPayment(t)
                    })({ stripe: u, paymentIntentClientSecret: p, sdkMethod: h, paypalReturnPath: s })
                if (!o) return t()
                let a = { ...l, phase: "stripe_confirmation", sdkCallNumber: ++g, sdkMethod: h, nextActionType: m }
                B(o, { ...a, type: "phase_started" })
                try {
                  e = t()
                } catch (e) {
                  throw (B(o, { ...a, type: "phase_settled", outcome: "rejected" }), e)
                }
                return e.then(
                  (e) => (
                    B(o, {
                      ...a,
                      type: "phase_settled",
                      outcome: e.error?.code === S ? "returned_lock_timeout" : e.error ? "returned_error" : "resolved",
                      paymentIntentStatus: e.paymentIntent?.status,
                      failureReason: e.error ? I(e.error) : void 0,
                    }),
                    e
                  ),
                  (e) => {
                    throw (B(o, { ...a, type: "phase_settled", outcome: "rejected" }), e)
                  },
                )
              },
              shouldRetry: n,
            })
          if (!n()) return (r(e.payment_intent.id, e.pending_update_invoice_id), d({ status: "closed" }))
          if (y.error) {
            if (y.error.code === S) throw Error(y.error.message)
            if (i) return c(I(y.error))
            throw Error(y.error.message)
          }
          let b = "paymentIntent" in y ? y.paymentIntent : null
          if (b?.status === "processing" || (i && b?.status === "requires_action" && m === q))
            return d({ status: "pending" })
          if (null != b) {
            let e = T(b)
            if (null != e && ("requires_payment_method" === b.status || f)) return c(e)
          }
          if (f) {
            if (b?.status === "requires_action") return c("authentication_failed")
            if (b?.status !== "succeeded") return c("other")
          }
        } catch (t) {
          throw (B(o, { ...l, type: "confirmation_rejected" }), r(e.payment_intent.id, e.pending_update_invoice_id), t)
        }
        return d({ status: "complete" })
      })({
        updateResult: e,
        stripePromise: t,
        isStripeClientBootstrapError: a,
        isPaymentMethodRecoveryEnabled: i,
        isOpen: n,
        cleanupPendingSubscriptionUpdate: r,
        paypalReturnPath: s,
        onDiagnostic: o,
      })
      return "payment_method_failed" === l.status ? { ...l, source: "confirmation" } : l
    }
    function B(e, t) {
      try {
        e?.(t)
      } catch {}
    }
  },
  bm6U(e, t, a) {
    var i = a("ABep")
    a.d(
      t,
      {},
      {
        X: (e) =>
          (0, i.jsx)("svg", {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e,
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
              clipRule: "evenodd",
            }),
          }),
      },
    )
  },
  Z0qE(e, t, a) {
    a.d(t, { p: () => o })
    var i = a("ABep"),
      n = a("on57"),
      r = a("zd8w"),
      s = a("UIGa")
    let o = (e) => {
      let t = (0, r.useRef)(null),
        a = (0, r.useId)(),
        o = `search-ui-input-${a}`,
        {
          id: l,
          name: d,
          type: c = "text",
          variant: u = "outline",
          size: p = "md",
          gutterSize: m,
          className: h,
          autoComplete: f,
          disabled: g = !1,
          readOnly: y = !1,
          invalid: b = !1,
          allowAutofillExtensions: v = "password" === c || !!d || (!!f && "off" !== f),
          onFocus: x,
          onBlur: w,
          onAnimationStart: _,
          onAutofill: j,
          autoSelect: k,
          startAdornment: S,
          endAdornment: P,
          inputClassName: M,
          pill: C = !1,
          opticallyAlign: A,
          ref: I,
          __isWidget: N,
          ...R
        } = e,
        [T, q] = (0, r.useState)(!1)
      return (
        (0, r.useEffect)(() => {
          k && t.current?.select()
        }, [k]),
        (0, i.jsxs)("div", {
          className: (0, n.A)("Container-IlLvT8", h),
          "data-w-component": N ? "input" : "",
          "data-variant": u,
          "data-size": p,
          "data-gutter-size": m,
          "data-focused": T,
          "data-disabled": g ? "" : void 0,
          "data-readonly": y ? "" : void 0,
          "data-invalid": b ? "" : void 0,
          "data-pill": C ? "" : void 0,
          "data-optically-align": A,
          "data-has-start-adornment": S ? "" : void 0,
          "data-has-end-adornment": P ? "" : void 0,
          onMouseDown: (e) => {
            let a = t.current
            if (
              !e.target ||
              !(e.target instanceof Element) ||
              !a ||
              a.contains(e.target) ||
              e.target.closest("button, [type='button'], [role='button'], [role='menuitem']")
            )
              return
            ;(e.preventDefault(), document.activeElement !== a && a.focus())
            let { left: i, top: n } = a.getBoundingClientRect(),
              { clientX: r, clientY: s } = e,
              o = s < n || r < i
            if (1 === e.detail)
              if (o) a.setSelectionRange(0, 0)
              else {
                let e = a.value.length
                a.setSelectionRange(e, e)
              }
            else if (2 === e.detail) {
              let e = a.value.match(/\w+|[^\w\s]/g) || [],
                t = o ? e.at(0) : e.at(-1)
              if (t) {
                let e = o ? a.value.indexOf(t) : a.value.lastIndexOf(t)
                a.setSelectionRange(e, e + t.length)
              }
            } else a.select()
          },
          children: [
            S,
            (0, i.jsx)("input", {
              ...R,
              ref: (0, s.P)([I, t]),
              id: l || (v ? void 0 : o),
              className: (0, n.A)("Input-yfTWZr", M),
              type: c,
              name: d,
              autoComplete: f,
              readOnly: y,
              disabled: g,
              onFocus: (e) => {
                ;(q(!0), x?.(e))
              },
              onBlur: (e) => {
                ;(q(!1), w?.(e))
              },
              onAnimationStart: (e) => {
                ;(_?.(e), "native-autofill-in" === e.animationName && j?.())
              },
              "data-lpignore": !v || void 0,
              "data-1p-ignore": !v || void 0,
            }),
            P,
          ],
        })
      )
    }
  },
  crcI(e, t, a) {
    a.d(t, { Y: () => f })
    var i = a("ABep"),
      n = a("on57"),
      r = a("zd8w"),
      s = a("UIGa"),
      o = a("pZwg"),
      l = a("fZ4G"),
      d = a("hwkA")
    let c = (e) =>
        (0, i.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 9",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292894C14.6834 -0.0976305 15.3166 -0.0976304 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",
          }),
        }),
      u = (e) =>
        (0, i.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 10 16",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z",
          }),
        })
    var p = a("bm6U"),
      m = a("WjNJ"),
      h = "DropdownIcon-hjJBCI"
    let f = ({
        ref: e,
        onPointerDown: t,
        onKeyDown: a,
        onPointerEnter: c,
        onInteract: u,
        invalid: h,
        disabled: f,
        children: y,
        className: b,
        variant: v = "outline",
        size: x = "md",
        block: w,
        disablePressable: _,
        opticallyAlign: j,
        pill: k = o.N.pill,
        loading: S,
        onClearClick: P,
        selected: M = !1,
        StartIcon: C,
        dropdownIconType: A = "dropdown",
        ...I
      }) => {
        let N = (0, r.useRef)(null),
          R = !!P && M && !S && !f,
          T = A && "none" !== A && !S,
          q = R || S || T,
          D = !S && !f
        return (0, i.jsxs)("span", {
          ref: (0, s.P)([N, e]),
          className: (0, n.A)("SelectControl-GhTNXd", b),
          role: "button",
          tabIndex: f ? -1 : 0,
          onPointerEnter: (e) => {
            ;(_ || (0, l.Ny)(e), c?.(e))
          },
          onPointerDown: D
            ? (e) => {
                2 !== e.button && ((e.stopPropagation(), u) ? (e.preventDefault(), u()) : (t?.(e), I.onClick?.(e)))
              }
            : void 0,
          onKeyDown: D
            ? (e) => {
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                  case " ":
                    ;(e.stopPropagation(),
                      e.preventDefault(),
                      u
                        ? u()
                        : N.current?.dispatchEvent(
                            new PointerEvent("pointerdown", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                          ))
                    break
                  case "Enter":
                    break
                  default:
                    a?.(e)
                }
              }
            : void 0,
          "data-variant": v,
          "data-block": w ? "" : void 0,
          "data-disable-pressable": _ ? "" : void 0,
          "data-pill": k ? "" : void 0,
          "data-size": x,
          "data-optically-align": j,
          "aria-busy": S ? "true" : void 0,
          "data-selected": M,
          "data-loading": S ? "" : void 0,
          "data-invalid": h ? "" : void 0,
          "data-disabled": f ? "" : void 0,
          "aria-disabled": f,
          ...I,
          onClick: void 0,
          children: [
            C && (0, i.jsx)(C, { className: "StartIcon-Ja6YRO" }),
            (0, i.jsx)("span", { className: "TriggerText-KJGu4X", children: y }),
            q &&
              (0, i.jsxs)("div", {
                className: "IndicatorWrapper-pRcpwW",
                children: [
                  R &&
                    (0, i.jsx)(d.$, {
                      "aria-label": "Clear current value",
                      className: "Clear-rIcDRI",
                      onPointerDown: (e) => {
                        e.stopPropagation()
                      },
                      onClick: (e) => {
                        ;(e.stopPropagation(), e.preventDefault(), P())
                      },
                      color: "secondary",
                      variant: T ? "ghost" : "solid",
                      size: "3xs",
                      uniform: !0,
                      pill: k,
                      "data-only-child": T ? void 0 : "",
                      children: (0, i.jsx)(p.X, {}),
                    }),
                  S && (0, i.jsx)(m.I, { className: "LoadingIndicator-zQ4zI3" }),
                  T && (0, i.jsx)(g, { iconType: A }),
                ],
              }),
          ],
        })
      },
      g = ({ iconType: e }) =>
        "chevronDown" === e
          ? (0, i.jsx)(c, { className: (0, n.A)(h, "DropdownIconChevron-sAyN5s") })
          : (0, i.jsx)(u, { className: h })
  },
  AEu9(e, t, a) {
    a.d(t, { l: () => D })
    var i = a("ABep"),
      n = a("on57"),
      r = a("YLKE"),
      s = a("zd8w"),
      o = a("pZwg"),
      l = a("BAKu"),
      d = a("We8q")
    function c(e) {
      let t = (0, s.useRef)(e)
      return ((t.current = e), (0, s.useCallback)((...e) => t.current(...e), []))
    }
    var u = a("o4M9"),
      p = a("fZ4G"),
      m = a("hwkA"),
      h = a("EYJV"),
      f = a("cfIY")
    let g = (e) =>
        (0, i.jsxs)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-2.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5Z",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
              clipRule: "evenodd",
            }),
          ],
        }),
      y = (e) =>
        (0, i.jsx)("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.875 4.5C7.35418 4.5 4.5 7.35418 4.5 10.875C4.5 14.3958 7.35418 17.25 10.875 17.25C14.3958 17.25 17.25 14.3958 17.25 10.875C17.25 7.35418 14.3958 4.5 10.875 4.5ZM2.5 10.875C2.5 6.24962 6.24962 2.5 10.875 2.5C15.5004 2.5 19.25 6.24962 19.25 10.875C19.25 12.8273 18.582 14.6236 17.462 16.0478L21.2071 19.7929C21.5976 20.1834 21.5976 20.8166 21.2071 21.2071C20.8166 21.5976 20.1834 21.5976 19.7929 21.2071L16.0478 17.462C14.6236 18.582 12.8273 19.25 10.875 19.25C6.24962 19.25 2.5 15.5004 2.5 10.875Z",
            fill: "currentColor",
          }),
        })
    var b = a("bm6U"),
      v = a("Z0qE"),
      x = a("crcI"),
      w = a("UIGa")
    let _ = ({ label: e }) => (0, i.jsx)(i.Fragment, { children: e }),
      j = (e) => `Remove ${e.label}`,
      k = ({
        tags: e,
        onRemoveTag: t,
        TagView: a = _,
        getRemoveLabel: r = j,
        ref: o,
        className: l,
        inputClassName: d,
        disabled: c,
        placeholder: u,
        onKeyDown: p,
        startAdornment: m,
        ...h
      }) => {
        let f = (0, s.useRef)(null),
          g = (0, s.useRef)(new Map()),
          y = (t) => {
            let a = e[t]
            a ? g.current.get(a.value)?.focus({ preventScroll: !0 }) : f.current?.focus({ preventScroll: !0 })
          },
          x = (e) => {
            ;(t(e), f.current?.focus({ preventScroll: !0 }))
          }
        return (0, i.jsx)(v.p, {
          ...h,
          ref: (0, w.P)([f, o]),
          className: (0, n.A)("Container-ii4nGw", l),
          inputClassName: (0, n.A)("Input-TqEwAO", d),
          disabled: c,
          placeholder: 0 === e.length ? u : void 0,
          startAdornment: (0, i.jsxs)(i.Fragment, {
            children: [
              m,
              e.map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    ref: (t) => {
                      t ? g.current.set(e.value, t) : g.current.delete(e.value)
                    },
                    className: "Tag-zH19Nb",
                    tabIndex: -1,
                    role: "group",
                    "aria-label": e.label,
                    onClick: () => {
                      c || y(t)
                    },
                    onKeyDown: (a) => {
                      if (!c && a.target === a.currentTarget && !a.nativeEvent.isComposing)
                        switch (a.key) {
                          case "ArrowLeft":
                            ;(a.preventDefault(), y(Math.max(0, t - 1)))
                            break
                          case "ArrowRight":
                            ;(a.preventDefault(), y(t + 1))
                            break
                          case "Backspace":
                          case "Delete":
                            ;(a.preventDefault(), x(e))
                        }
                    },
                    children: [
                      (0, i.jsx)("span", { className: "TagValue-uql1s_", children: (0, i.jsx)(a, { ...e }) }),
                      (0, i.jsx)("button", {
                        className: "TagRemove-Jvbgpl",
                        type: "button",
                        tabIndex: -1,
                        disabled: c,
                        "aria-label": r(e),
                        onClick: (t) => {
                          ;(t.stopPropagation(), x(e))
                        },
                        children: (0, i.jsx)(b.X, { width: 14, height: 14 }),
                      }),
                    ],
                  },
                  e.value,
                ),
              ),
            ],
          }),
          onKeyDown: (t) => {
            if (
              !t.nativeEvent.isComposing &&
              !t.altKey &&
              !t.ctrlKey &&
              !t.metaKey &&
              e.length > 0 &&
              0 === t.currentTarget.selectionStart &&
              0 === t.currentTarget.selectionEnd &&
              ("ArrowLeft" === t.key || "Backspace" === t.key)
            ) {
              ;(t.preventDefault(), y(e.length - 1))
              return
            }
            p?.(t)
          },
        })
      }
    var S = a("slpy"),
      P = a("DL3o"),
      M = "Option-Tm0uqE",
      C = "PressableInner-EsxCsQ",
      A = "OptionInner-dam4fB"
    let I = (0, s.createContext)(null),
      N = () => {
        let e = (0, s.use)(I)
        if (!e) throw Error("Select components must be wrapped in <Select />")
        return e
      },
      R = ({ label: e }) => (0, i.jsx)(i.Fragment, { children: e }),
      T = ({ label: e }) => (0, i.jsx)(i.Fragment, { children: e }),
      q = ({ values: e, selectedAll: t }) => {
        let a = t
          ? "All selected"
          : 0 === e.length
            ? "Select..."
            : 1 === e.length
              ? e[0]?.label
              : `${e.length} selected`
        return (0, i.jsx)(i.Fragment, { children: a })
      },
      D = (e) => {
        let {
            id: t,
            "aria-label": a,
            "aria-labelledby": n,
            "aria-describedby": r,
            required: l,
            value: p,
            name: m,
            multiple: h,
            variant: f = "outline",
            size: g = "md",
            dropdownIconType: y = "dropdown",
            loading: b = !1,
            open: v,
            onOpenChange: x,
            clearable: w = !1,
            disabled: _ = !1,
            invalid: j = !1,
            placeholder: k = "Select...",
            loadingPlaceholder: S = "Loading...",
            pill: P = o.N.pill,
            disablePressable: M,
            listWidth: C,
            options: A,
            pagination: N,
            footer: D,
            actions: B = [],
            side: O = "bottom",
            avoidCollisions: L = !0,
            onChange: z,
            optionClassName: F,
            optionIndicatorPosition: K = "start",
            OptionView: $ = R,
            TriggerStartIcon: Y,
            endAdornment: W,
            triggerClassName: J,
            onTriggerClickCapture: V,
            opticallyAlign: Z,
            TriggerView: H,
            searchPlaceholder: Q = "",
            searchValue: X,
            searchPredicate: ee = en,
            searchEmptyMessage: et = "No results found.",
            onSearchChange: ea,
            searchable: ei,
            listMaxWidth: er = "auto",
            __isWidget: es = !1,
            forceNativeSelect: eo = !1,
          } = e,
          ed = e.block ?? "ghost" !== f,
          ec = e.align ?? (ed ? "center" : "start"),
          eu = e.alignOffset ?? ("center" === ec ? 0 : -5),
          ep = e.listMinWidth ?? (ed ? "auto" : 300)
        if (eo && h && u.Cu) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.")
        let em = h ? (e.selectedOptions ?? el(A, p)) : el(A, [p]),
          eh = h ? e.getTagRemoveLabel : void 0,
          ef = (0, d.Y)((e, t) => {
            h ? (e.value ? (t ? z(em.filter((t) => t.value !== e.value)) : z(em.concat(e))) : z([])) : z(e)
          }),
          eg = c((e) => x?.(e)),
          ey = x ? eg : void 0,
          eb = c((e) => ea?.(e)),
          ev = ea ? eb : void 0,
          ex = c((e) => V?.(e)),
          ew = V ? ex : void 0,
          e_ = (0, s.useRef)(ee)
        e_.current = ee
        let ej = (0, s.useMemo)(() => B, [B.length]),
          ek = (0, s.useRef)(B)
        ek.current = B
        let eS = (0, s.useCallback)((e) => {
            ek.current.find((t) => t.id === e)?.onSelect(e)
          }, []),
          eP = (0, s.useMemo)(() => (G(A) ? A.reduce((e, t) => e + t.options.length, 0) : A.length), [A]),
          eM = (0, s.useId)(),
          eC = `select-trigger-${eM}`,
          eA = ei ?? eP > 15,
          eI = (0, s.useMemo)(() => ({ "aria-label": a, "aria-labelledby": n, "aria-describedby": r }), [r, a, n]),
          eN = (0, s.useMemo)(
            () =>
              h ? { multiple: !0, value: p, TriggerView: H ?? q } : { multiple: !1, value: p, TriggerView: H ?? T },
            [h, p, H],
          ),
          eR = (0, s.useMemo)(
            () => ({
              ...eN,
              triggerId: eC,
              id: t,
              name: m,
              required: l,
              options: A,
              pagination: N,
              selectedOptions: em,
              getTagRemoveLabel: eh,
              endAdornment: W,
              placeholder: k,
              loadingPlaceholder: S,
              loading: b,
              open: v,
              onOpenChange: ey,
              clearable: w,
              variant: f,
              pill: P,
              disablePressable: M,
              size: g,
              dropdownIconType: y,
              block: ed,
              align: ec,
              alignOffset: eu,
              side: O,
              avoidCollisions: L,
              listWidth: C,
              listMinWidth: ep,
              listMaxWidth: er,
              searchPlaceholder: Q,
              searchEmptyMessage: et,
              onSearchChange: ev,
              TriggerStartIcon: Y,
              triggerClassName: J,
              onTriggerClickCapture: ew,
              opticallyAlign: Z,
              optionClassName: F,
              optionIndicatorPosition: K,
              OptionView: $,
              footer: D,
              actions: ej,
              onActionSelect: eS,
              onSelectRef: ef,
              searchPredicateRef: e_,
              searchable: eA,
              disabled: _,
              invalid: j,
              __isWidget: es,
              forceNativeSelect: eo,
            }),
            [
              eN,
              eC,
              t,
              l,
              m,
              A,
              N,
              em,
              eh,
              W,
              k,
              S,
              b,
              v,
              ey,
              w,
              f,
              P,
              M,
              g,
              y,
              ed,
              ec,
              eu,
              O,
              L,
              C,
              ep,
              er,
              Q,
              et,
              ev,
              Y,
              J,
              ew,
              Z,
              F,
              K,
              $,
              D,
              ej,
              eS,
              ef,
              eA,
              _,
              j,
              es,
              eo,
            ],
          )
        return (0, i.jsx)(I.Provider, {
          value: eR,
          children: eo ? (0, i.jsx)(E, { ariaProps: eI }) : (0, i.jsx)(U, { ariaProps: eI, searchValue: X }),
        })
      },
      B = (e) => {
        let {
            triggerId: t,
            id: a,
            required: n,
            value: r,
            multiple: o,
            options: l,
            selectedOptions: d,
            loading: c,
            disabled: u,
            invalid: p,
            clearable: m,
            name: h,
            variant: f,
            pill: g,
            disablePressable: y,
            size: b,
            dropdownIconType: v,
            placeholder: w,
            loadingPlaceholder: _,
            block: j,
            opticallyAlign: k,
            triggerClassName: S,
            onTriggerClickCapture: P,
            TriggerStartIcon: M,
            TriggerView: C,
            onSelectRef: A,
            __isWidget: I,
            forceNativeSelect: R,
          } = N(),
          { onOpenChange: T, ariaProps: q, ...D } = e,
          B = q?.["aria-label"],
          E = q?.["aria-labelledby"],
          O = q?.["aria-describedby"],
          L = o ? r[0] : r,
          U = c ? _ : w,
          z = (h || a) && !R,
          F = (0, s.useId)(),
          K = (0, s.useId)(),
          $ = (0, s.useMemo)(() => eo(l, L) || { value: "", label: U }, [L, l, U]),
          G = o ? r.length > 0 : !!r,
          Y = c || !G,
          W = (0, s.useMemo)(() => em(), []),
          J = (0, s.useMemo)(() => {
            if (!o) return { values: [], selectedAll: !1 }
            let e = l.flatMap((e) => ("options" in e ? e.options : e))
            return {
              values: d.length ? d : [{ value: "", label: U }],
              selectedAll: e.length > 0 && e.length <= r.length,
            }
          }, [o, l, d, r, U]),
          V = (0, s.useMemo)(() => (E ? `${E} ${F}` : B ? `${K} ${F}` : void 0), [K, B, E, F])
        return (0, i.jsxs)(x.Y, {
          id: t,
          "aria-labelledby": V,
          "aria-describedby": O,
          className: S,
          selected: !Y,
          variant: f,
          pill: g,
          disablePressable: y,
          block: j,
          size: b,
          disabled: u,
          invalid: p,
          loading: c,
          StartIcon: M,
          opticallyAlign: k,
          onClickCapture: P,
          dropdownIconType: v,
          onClearClick: m
            ? () => {
                ;(A.current({ value: "", label: "" }), T?.(!1))
              }
            : void 0,
          onInteract: T,
          onKeyDown: (e) => {
            let t = e.key
            if (!o && eh(t)) {
              let a = W(t)
              e.stopPropagation()
              let i = ef(l, a, L)
              i && A.current(i)
            }
          },
          "data-w-component": I ? "select" : void 0,
          ...D,
          children: [
            B &&
              !E &&
              (0, i.jsx)("span", {
                id: K,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                children: B,
              }),
            (0, i.jsx)("span", { id: F, children: o ? (0, i.jsx)(C, { ...J }) : (0, i.jsx)(C, { ...$ }) }),
            z &&
              (0, i.jsx)("input", {
                id: a,
                name: h,
                value: L,
                tabIndex: -1,
                onFocus: () => {
                  document.getElementById(t)?.focus({ preventScroll: !0 })
                },
                onChange: () => {},
                required: n,
                inert: !0,
                className: "sr-only w-full h-0 left-0 bottom-0 pointer-events-none",
                "aria-hidden": "true",
              }),
          ],
        })
      },
      E = ({ ariaProps: e }) => {
        let {
          value: t,
          multiple: a,
          name: r,
          options: s,
          placeholder: o,
          block: l,
          loading: d,
          onSelectRef: c,
          onTriggerClickCapture: u,
        } = N()
        if (a) throw Error("Rendered native select while using `multiple` selection mode.")
        return (0, i.jsx)("div", {
          className: "flex min-w-0",
          children: (0, i.jsxs)("div", {
            className: (0, n.A)("relative max-w-full", l && "w-full"),
            children: [
              (0, i.jsxs)("select", {
                name: r,
                "aria-label": e["aria-label"],
                "aria-labelledby": e["aria-labelledby"],
                "aria-describedby": e["aria-describedby"],
                className: "NativeSelect-Q02mo4",
                value: t,
                onClickCapture: u,
                onKeyDown: (e) => {
                  e.stopPropagation()
                },
                onChange: (e) => {
                  let t = eo(s, e.target.value)
                  t && c.current(t)
                },
                disabled: d,
                "data-native-selectcontrol": "",
                children: [
                  !t && (0, i.jsx)("option", { value: "", children: o }),
                  s.map((e) => ($(e) ? (0, i.jsx)(O, { ...e }, e.label) : (0, i.jsx)(L, { ...e }, e.value))),
                ],
              }),
              (0, i.jsx)(B, { ariaProps: e, tabIndex: -1, "aria-hidden": "true" }),
            ],
          }),
        })
      },
      O = ({ label: e, options: t }) =>
        (0, i.jsx)("optgroup", { label: e, children: t.map((e) => (0, i.jsx)(L, { ...e }, e.value)) }),
      L = ({ value: e, label: t, disabled: a }) => (0, i.jsx)("option", { value: e, disabled: a, children: t }),
      U = ({ ariaProps: e, searchValue: t }) => {
        let {
            triggerId: a,
            loading: n,
            open: c,
            onOpenChange: u,
            side: m,
            align: f,
            alignOffset: g,
            avoidCollisions: y,
            listWidth: b,
            listMinWidth: v,
            listMaxWidth: x,
            block: w,
            onTriggerClickCapture: _,
            multiple: j,
            value: k,
            options: S,
            pagination: M,
            searchable: C,
            searchPredicateRef: A,
            onSearchChange: I,
            footer: R,
          } = N(),
          [T, q] = (0, s.useState)(!1),
          D = (0, s.useRef)(null),
          E = (0, s.useRef)(null),
          O = (0, h.jS)(),
          L = (0, d.Y)(() => {
            ;(Z(""), I?.(""))
          }),
          U = (0, d.Y)(() => ek(!1)),
          F = (0, s.useRef)(null),
          $ = (0, s.useRef)(null),
          G = (0, s.useRef)(null),
          Y = (0, s.useRef)(!1),
          J = (0, s.useRef)(null),
          [V, Z] = (0, s.useState)(""),
          H = C ? (t ?? V) : "",
          Q = (0, s.useRef)(H),
          X = (0, s.useRef)(null),
          ee = M?.mode === "manual" && M.isFetching,
          et = !C || !!R || !I || S.some((e) => !("options" in e) || e.options.length > 0),
          ei = et || !!H.trim(),
          en = (c ?? T) && ei,
          el = (0, s.useMemo)(() => em(), []),
          ec = (0, s.useId)(),
          eg = `select-list-${ec}`,
          ey = (0, s.useRef)(j ? "" : k),
          eb = (0, s.useMemo)(() => er(S, H, A.current), [S, H, A]),
          ev = es(eb),
          [ex, ew] = (0, s.useState)(() => {
            let e = j ? k[0] : k
            return eo(eb, e)?.value ?? ev?.value ?? ""
          }),
          e_ = (e) => {
            if (e.nativeEvent.isComposing) return
            let t = e.key,
              a = j ? k[0] : k,
              i = ex || ev?.value || a,
              n = document.activeElement === G.current,
              r = F.current
            if (!r) return
            let s = () => {
                let e = new PointerEvent("pointerup", { bubbles: !0, cancelable: !0, pointerType: "mouse" }),
                  t = ed(ex, r)
                t?.dispatchEvent(e)
              },
              o = (e, t) => {
                ;(ew(e), t.scrollIntoView({ block: "nearest" }))
              },
              l = () => {
                let e = j ? k[0] : k
                if (e) {
                  let t = ed(e, r)
                  if (t) return void o(e, t)
                }
                if (ev) {
                  let e = ed(ev.value, r)
                  e && o(ev.value, e)
                }
              }
            switch (t) {
              case "ArrowDown": {
                if ((e.preventDefault(), !ex || !ed(ex, r))) return void l()
                let t = eu(ex, r),
                  a = t?.getAttribute("data-option-id")
                t && a && o(a, t)
                return
              }
              case "ArrowUp": {
                if ((e.preventDefault(), !ex || !ed(ex, r))) return void l()
                let t = ep(i, r),
                  a = t?.getAttribute("data-option-id")
                t && a && o(a, t)
                return
              }
              case "Enter":
                ;(e.preventDefault(), s())
                return
              case " ":
                if (n) return
                ;(e.preventDefault(), s())
                return
            }
            if (eh(t)) {
              if (n) return
              let a = el(t)
              e.stopPropagation()
              let i = ef(S, a, ex)
              if (i) {
                let e = ed(i.value, r)
                e && (ew(i.value), e.scrollIntoView({ block: "nearest" }))
              }
            }
          },
          ej = (0, s.useMemo)(
            () => ({
              valueRef: ey,
              listId: eg,
              highlightedValue: ex,
              setHighlightedValue: ew,
              requestCloseRef: U,
              resetSearchRef: L,
              searchTerm: H,
              listRef: $,
            }),
            [eg, ex, H, U, L],
          )
        ;((0, s.useLayoutEffect)(() => {
          if (!en) return
          ;((ey.current = j ? "" : k),
            ew(eo(eb, j ? k[0] : k)?.value ?? ev?.value ?? ""),
            (0, p.yQ)(() => {
              let e = F.current,
                t = $.current
              if (!e || !t) return
              let a = ed(ex, t)
              if (a) {
                let e = t.clientHeight,
                  i = a.offsetTop,
                  n = a.offsetHeight,
                  r = t.scrollHeight - e
                t.scrollTop = Math.max(0, Math.min(i - e / 2 + n / 2, r))
              }
            }))
          let e = G.current || $.current || F.current
          e?.focus({ preventScroll: !0 })
        }, [en]),
          (0, s.useLayoutEffect)(() => {
            en || (X.current = null)
          }, [en]),
          (0, s.useLayoutEffect)(() => {
            let e = null != M && Q.current === H
            if (((Q.current = H), !en || !$.current)) {
              X.current = null
              return
            }
            if (M?.mode === "manual") {
              let e = eb.flatMap((e) => ("options" in e ? e.options : [e]))
              if (M.isFetching && !X.current)
                X.current = { values: new Set(e.map((e) => e.value)), searchTerm: H, highlightedValue: ex }
              else if (!M.isFetching && X.current) {
                let t = X.current
                X.current = null
                let a = document.activeElement,
                  i = a === G.current || a === $.current || a === F.current,
                  n =
                    t.searchTerm === H && t.highlightedValue === ex
                      ? e.find((e) => !e.disabled && !t.values.has(e.value))
                      : void 0
                if (i && n) {
                  ew(n.value)
                  let e = ed(n.value, $.current)
                  if (e) {
                    let t = e.getBoundingClientRect(),
                      a = $.current.getBoundingClientRect()
                    t.top < a.top
                      ? ($.current.scrollTop -= a.top - t.top)
                      : t.bottom > a.bottom && ($.current.scrollTop += t.bottom - a.bottom)
                  }
                }
                if ((i && t.searchTerm === H && (G.current ?? $.current)?.focus({ preventScroll: !0 }), i && n)) return
              }
            } else X.current = null
            let t = eo(eb, ex)
            ;(e && t && !t.disabled) || (e || ($.current.scrollTop = 0), ew(es(eb)?.value ?? ""))
          }, [eb, H, null != M, ee]))
        let ek = (e) => {
          let t = (void 0 === e ? !en : e) && ei
          if (t === en) return
          let i = !!D.current?.contains(document.activeElement)
          ;(!t && (Z(""), H && I?.("")),
            void 0 === c && q(t),
            u?.(t),
            t ||
              setTimeout(() => {
                let e = document.activeElement,
                  t = !!D.current?.contains(e),
                  n = i && e === document.body
                ;(t || n) &&
                  ((Y.current = !0), document.getElementById(a)?.focus({ preventScroll: !0 }), (Y.current = !1))
              }))
        }
        return (
          (0, l.r)(en, () => {
            ek(!1)
          }),
          (0, i.jsx)(z, {
            value: ej,
            children: (0, i.jsxs)(r.bL, {
              open: en,
              onOpenChange: (e) => {
                ;(n && e) || ek(e)
              },
              modal: !1,
              children: [
                C
                  ? (0, i.jsx)(r.Mz, {
                      asChild: !0,
                      children: (0, i.jsx)("div", {
                        ref: E,
                        className: "SearchControl-Vayh_U",
                        "data-block": w ? "" : void 0,
                        onClickCapture: _,
                        children: (0, i.jsx)(K, {
                          ariaProps: e,
                          searchInputRef: G,
                          open: en,
                          searchTerm: H,
                          onOpen: () => {
                            Y.current || ek(!0)
                          },
                          onKeyDown: (e) => {
                            if (en && R && "Tab" === e.key && !e.shiftKey) {
                              let t = D.current?.querySelector("[data-select-footer]")
                              for (let a of Array.from(
                                t?.querySelectorAll(
                                  "a[href], button, input, select, textarea, [tabindex], [contenteditable='true']",
                                ) ?? [],
                              ).filter(
                                (e) =>
                                  e.tabIndex >= 0 &&
                                  !e.matches(":disabled, input[type='hidden']") &&
                                  !e.closest("[hidden], [inert]"),
                              ))
                                if ((a.focus(), a.ownerDocument.activeElement === a)) {
                                  ;((J.current = a), e.preventDefault())
                                  return
                                }
                            }
                            en || ("ArrowDown" !== e.key && "ArrowUp" !== e.key)
                              ? en && e_(e)
                              : (e.preventDefault(), ek(!0))
                          },
                          onChange: (e) => {
                            let t = et || !!e.trim()
                            en && !t ? ek(!1) : (Z(e), I?.(e), void 0 === c && q(t), !en && t && u?.(!0))
                          },
                        }),
                      }),
                    })
                  : (0, i.jsx)(r.l9, { asChild: !0, children: (0, i.jsx)(B, { ariaProps: e, onOpenChange: ek }) }),
                (0, i.jsx)(r.ZL, {
                  forceMount: !0,
                  container: O,
                  children: (0, i.jsx)(P.F, {
                    className: "Menu-rg4fYu",
                    enterDuration: 350,
                    exitDuration: 200,
                    children:
                      en &&
                      (0, i.jsx)(
                        r.UC,
                        {
                          onKeyDownCapture: (e) => {
                            "Tab" === e.key &&
                              e.shiftKey &&
                              e.target === J.current &&
                              (G.current?.focus(), e.preventDefault(), e.stopPropagation())
                          },
                          ref: D,
                          forceMount: !0,
                          className: "MenuList-k4HoiO",
                          side: m,
                          sideOffset: 5,
                          align: f,
                          alignOffset: g,
                          avoidCollisions: y,
                          collisionPadding: { bottom: 30, top: 30 },
                          onOpenAutoFocus: (e) => {
                            e.preventDefault()
                            let t = G.current || $.current || F.current
                            t?.focus({ preventScroll: !0 })
                          },
                          onCloseAutoFocus: p.iB,
                          onEscapeKeyDown: p.iB,
                          onInteractOutside: (e) => {
                            e.target instanceof Node && E.current?.contains(e.target) && e.preventDefault()
                          },
                          onMouseDown: (e) => {
                            C &&
                              !(e.target instanceof Element && e.target.closest("[data-select-footer]")) &&
                              e.preventDefault()
                          },
                          style: (0, p.mW)({
                            scale: o.N.pressable ? void 0 : "1",
                            "select-list-width": b,
                            "select-list-min-width": v,
                            "select-list-max-width": x,
                          }),
                          children: (0, i.jsxs)("div", {
                            className: "MenuInner-nggNzl",
                            onKeyDown: e_,
                            ref: F,
                            tabIndex: C ? -1 : 0,
                            children: [(0, i.jsx)(W, { filteredOptions: eb }), (0, i.jsx)(ea, {})],
                          }),
                        },
                        "dropdown",
                      ),
                  }),
                }),
              ],
            }),
          })
        )
      },
      z = (0, s.createContext)(null),
      F = () => {
        let e = (0, s.use)(z)
        if (!e) throw Error("Select menu components must be wrapped in <CustomSelect />")
        return e
      },
      K = ({ ariaProps: e, searchInputRef: t, open: a, searchTerm: r, onChange: o, onOpen: l, onKeyDown: d }) => {
        let {
            triggerId: c,
            id: u,
            name: p,
            required: h,
            value: f,
            multiple: g,
            selectedOptions: x,
            getTagRemoveLabel: w,
            size: _,
            pill: j,
            variant: S,
            disabled: P,
            invalid: M,
            loading: C,
            loadingPlaceholder: A,
            placeholder: I,
            searchPlaceholder: R,
            triggerClassName: T,
            opticallyAlign: q,
            TriggerStartIcon: D,
            TriggerView: B,
            clearable: E,
            onSelectRef: O,
            endAdornment: L,
          } = N(),
          { listId: U, highlightedValue: z } = F(),
          K = x[0],
          $ = !g && !r && null != K,
          G = (0, s.useId)(),
          W = {
            ...e,
            id: c,
            ref: t,
            className: (0, n.A)(T, "ghost" === S && "SearchGhost-E3QlXU"),
            size: _,
            pill: j,
            variant: "ghost" === S ? "outline" : S,
            disabled: P || C,
            invalid: M,
            opticallyAlign: q,
            value: r,
            placeholder: C ? A : R || I,
            onChange: (e) => o(e.target.value),
            onFocus: l,
            onClick: l,
            onKeyDown: d,
            autoComplete: "off",
            autoCorrect: "off",
            spellCheck: !1,
            "aria-busy": C || void 0,
            "aria-autocomplete": "list",
            role: "combobox",
            "aria-controls": a ? U : void 0,
            "aria-expanded": a,
            "aria-activedescendant": a && z ? Y(z) : void 0,
            endAdornment: L,
          }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            g
              ? (0, i.jsx)(k, {
                  ...W,
                  tags: x,
                  getRemoveLabel: w,
                  onRemoveTag: (e) => O.current(e, !0),
                  startAdornment: D ? (0, i.jsx)(D, {}) : void 0,
                })
              : (0, i.jsx)(v.p, {
                  ...W,
                  inputClassName: "SearchInput-nkxre0",
                  onKeyDown: (e) => {
                    if (
                      "Backspace" === e.key &&
                      E &&
                      $ &&
                      !e.nativeEvent.isComposing &&
                      !e.altKey &&
                      !e.ctrlKey &&
                      !e.metaKey
                    ) {
                      ;(e.preventDefault(), O.current({ value: "", label: "" }))
                      return
                    }
                    d(e)
                  },
                  placeholder: $ ? "" : W.placeholder,
                  "aria-describedby": [e["aria-describedby"], $ ? G : void 0].filter(Boolean).join(" ") || void 0,
                  startAdornment: $
                    ? (0, i.jsx)("span", {
                        id: G,
                        className: "SearchSelection-BN1yuT",
                        role: "presentation",
                        onClick: P || C ? void 0 : l,
                        children: (0, i.jsx)(B, { ...K }),
                      })
                    : D
                      ? (0, i.jsx)(D, {})
                      : (0, i.jsx)(y, { width: 16, height: 16, className: "fill-secondary" }),
                  endAdornment:
                    E && x.length > 0
                      ? (0, i.jsx)(m.$, {
                          color: "secondary",
                          variant: "ghost",
                          size: "3xs",
                          uniform: !0,
                          "aria-label": "Clear current value",
                          disabled: P || C,
                          onClick: () => {
                            ;(O.current({ value: "", label: "" }), o(""), t.current?.focus())
                          },
                          children: (0, i.jsx)(b.X, {}),
                        })
                      : L,
                }),
            (p || u) &&
              (0, i.jsx)("input", {
                id: u,
                name: p,
                value: g ? (f[0] ?? "") : f,
                required: h,
                tabIndex: -1,
                inert: !0,
                "aria-hidden": "true",
                className: "sr-only",
                onChange: () => {},
                onFocus: () => t.current?.focus(),
              }),
          ],
        })
      },
      $ = (e) => "options" in e,
      G = (e) => !!e[0] && $(e[0]),
      Y = (e) => `select-option-${encodeURIComponent(e)}`,
      W = ({ filteredOptions: e }) => {
        let { searchEmptyMessage: t, multiple: a, searchable: n, pagination: r } = N(),
          { listId: s, highlightedValue: o, listRef: l } = F(),
          d = o ? Y(o) : void 0,
          c = e.reduce((e, t) => e + ("options" in t ? t.options.length : 1), 0)
        if (!e.length)
          return (0, i.jsxs)("div", {
            id: s,
            ref: l,
            role: "listbox",
            "aria-multiselectable": a || void 0,
            children: [
              (0, i.jsx)("div", {
                className: "SearchEmpty-llQB5a",
                "data-text-only": "string" == typeof t ? "" : void 0,
                role: "status",
                children: t,
              }),
              r && "manual" !== r.mode && (0, i.jsx)(J, { pagination: r }),
            ],
          })
        let u = G(e),
          p = null == r && !u && e.length > 300,
          m = u
            ? e.map((e) => (0, i.jsx)(Z, { ...e }, e.label))
            : e.slice(0, null == r ? 300 : void 0).map((e) => (0, i.jsx)(et, { ...e }, e.value))
        return (0, i.jsxs)("div", {
          id: s,
          className: "OptionsList-tSiCXf",
          ref: l,
          role: "listbox",
          tabIndex: n ? -1 : 0,
          "aria-activedescendant": d,
          "aria-multiselectable": a || void 0,
          children: [
            m,
            p && (0, i.jsx)(H, { numHidden: e.length - 300 }),
            r && "manual" !== r.mode && (0, i.jsx)(J, { pagination: r }, c),
          ],
        })
      },
      J = ({ pagination: e }) => {
        let t = c(e.onLoadMore),
          a = (0, s.useCallback)(
            (e) => {
              if (null == e) return
              let a = !0,
                i = new IntersectionObserver(
                  (e) => {
                    a && e.some((e) => e.isIntersecting) && ((a = !1), i.disconnect(), t())
                  },
                  { root: e.parentElement },
                )
              return (
                i.observe(e),
                () => {
                  ;((a = !1), i.disconnect())
                }
              )
            },
            [t],
          )
        return e.hasNextPage && !e.isFetching
          ? (0, i.jsx)("div", { className: "PaginationSentinel-FkZCvf", "aria-hidden": !0, ref: a })
          : null
      },
      V = { limit: 100, label: "Show all" },
      Z = ({ label: e, options: t, optionsLimit: a = V }) => {
        let n = (0, s.useId)(),
          { optionIndicatorPosition: r, pagination: o } = N(),
          { searchTerm: l, setHighlightedValue: d } = F(),
          [c, u] = (0, s.useState)(!1),
          p = null == o && a.limit < t.length && !l && !c,
          m = null == o && 300 < t.length && !p,
          h = t
        return (
          p ? (h = t.slice(0, a.limit)) : m && (h = t.slice(0, 300)),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: "OptionGroupHeading-c0U5nA",
                children: [
                  "start" === r && (0, i.jsx)(X, { position: r }),
                  e,
                  "end" === r && (0, i.jsx)(X, { position: r }),
                ],
              }),
              h.map((e) => (0, i.jsx)(et, { ...e }, e.value)),
              p &&
                (0, i.jsx)(Q, {
                  value: `group-limit-${n}`,
                  label: a.label,
                  onPointerUp: () => {
                    ;(u(!0), d(t[a.limit]?.value ?? ""))
                  },
                }),
              m && (0, i.jsx)(H, { numHidden: t.length - 300 }),
            ],
          })
        )
      },
      H = ({ numHidden: e }) => {
        let { optionIndicatorPosition: t } = N()
        return (0, i.jsxs)("div", {
          className: "OptionHardLimitHeading-UmEIsY",
          children: [
            "start" === t && (0, i.jsx)(X, { position: t }),
            `\u{2026}and ${e.toLocaleString()} more options. Use search to refine results further.`,
            "end" === t && (0, i.jsx)(X, { position: t }),
          ],
        })
      },
      Q = ({ value: e, label: t, onPointerUp: a }) => {
        let { optionIndicatorPosition: r } = N(),
          { highlightedValue: s, setHighlightedValue: o } = F(),
          l = e === s
        return (0, i.jsx)("div", {
          className: (0, n.A)(M, "OptionsLimit-SDgq93"),
          id: Y(e),
          "data-option-id": e,
          "data-highlight": l ? "" : void 0,
          role: "option",
          "aria-selected": !1,
          onPointerUp: a,
          onPointerMove: () => {
            l || o(e)
          },
          onPointerLeave: () => {
            o((t) => (t !== e ? t : ""))
          },
          children: (0, i.jsxs)("div", {
            className: (0, n.A)(C, A),
            children: [
              "start" === r && (0, i.jsx)(X, { position: r }),
              t,
              "end" === r && (0, i.jsx)(X, { position: r }),
            ],
          }),
        })
      },
      X = ({ children: e, indicator: t = !1, position: a }) =>
        (0, i.jsx)("div", {
          className: "OptionIndicatorSlot-BWd0M4",
          "data-option-indicator-position": a,
          "data-select-option-indicator": t ? "" : void 0,
          children: e,
        }),
      ee = ({ isSelected: e, position: t }) =>
        (0, i.jsx)(X, {
          indicator: !0,
          position: t,
          children: e && (0, i.jsx)(f.J, { className: "OptionCheck-XJTh51" }),
        }),
      et = (e) => {
        let {
            optionClassName: t,
            OptionView: a,
            value: r,
            multiple: s,
            searchable: o,
            onSelectRef: l,
            optionIndicatorPosition: d,
          } = N(),
          { valueRef: c, requestCloseRef: u, resetSearchRef: p, highlightedValue: m, setHighlightedValue: h } = F(),
          { value: f, disabled: y, tooltip: b } = e,
          v = "" === r ? "" : c.current,
          x = s ? r.includes(f) : f === v,
          w = f === m
        return (0, i.jsx)("div", {
          className: (0, n.A)(M, t),
          id: Y(f),
          "data-highlight": w ? "" : void 0,
          role: "option",
          "aria-selected": x,
          "data-selected": x ? "" : void 0,
          "data-option-id": f,
          onPointerUp: y
            ? void 0
            : () => {
                s ? (l.current(e, x), o && p.current()) : (l.current(e), u.current?.())
              },
          onPointerMove: y
            ? void 0
            : () => {
                w || h(f)
              },
          onPointerLeave: y
            ? void 0
            : () => {
                h((e) => (e !== f ? e : ""))
              },
          "aria-disabled": y,
          "data-disabled": y ? "" : void 0,
          children: (0, i.jsxs)("div", {
            className: C,
            children: [
              (0, i.jsxs)("div", {
                className: A,
                children: [
                  "start" === d && (0, i.jsx)(ee, { isSelected: x, position: d }),
                  (0, i.jsx)(a, { ...e }),
                  b &&
                    (0, i.jsx)(S.m, {
                      content: b.content,
                      maxWidth: b.maxWidth,
                      side: "right",
                      children: (0, i.jsx)(g, {}),
                    }),
                  "end" === d && (0, i.jsx)(ee, { isSelected: x, position: d }),
                ],
              }),
              e.description &&
                (0, i.jsxs)("div", {
                  className: A,
                  children: [
                    "start" === d && (0, i.jsx)(X, { position: d }),
                    e.description,
                    "end" === d && (0, i.jsx)(X, { position: d }),
                  ],
                }),
            ],
          }),
        })
      },
      ea = () => {
        let { actions: e, footer: t } = N()
        return 0 !== e.length || t
          ? (0, i.jsxs)("div", {
              className: "ActionsContainer-_9uLn5",
              children: [
                t
                  ? (0, i.jsx)("div", {
                      "data-select-footer": "",
                      onKeyDown: (e) => {
                        "Escape" !== e.key && "Tab" !== e.key && e.stopPropagation()
                      },
                      children: t,
                    })
                  : null,
                e.map((e) => (0, i.jsx)(ei, { ...e }, e.id)),
              ],
            })
          : null
      },
      ei = ({ id: e, label: t, Icon: a, className: r }) => {
        let { onActionSelect: s } = N(),
          { requestCloseRef: o } = F(),
          l = () => {
            ;(s(e), o.current?.())
          }
        return (0, i.jsx)("div", {
          className: "Action-sDvHYl",
          onPointerUp: l,
          onKeyDown: (e) => {
            switch (e.key) {
              case "Tab":
                break
              case "Enter":
              case " ":
                ;(e.stopPropagation(), l())
                break
              default:
                e.stopPropagation()
            }
          },
          tabIndex: 0,
          children: (0, i.jsxs)("div", {
            className: (0, n.A)("ActionInner-bAgfXn", r),
            children: [a && (0, i.jsx)(a, { role: "presentation" }), t],
          }),
        })
      },
      en = (e, t) => e.label.toLowerCase().includes(t),
      er = (e, t, a) => {
        let i = t.trim().toLocaleLowerCase()
        if (!i) return e
        let n = (e) => a(e, i)
        return G(e)
          ? e.reduce((e, t) => {
              let a = t.options.filter(n)
              return (a.length && e.push({ ...t, options: a }), e)
            }, [])
          : e.reduce((e, t) => (n(t) && e.push(t), e), [])
      },
      es = (e) => {
        let t
        if (e.length) {
          for (let a of e)
            if ($(a)) {
              let e = a.options.find((e) => !e.disabled)
              if (e) {
                t = e
                break
              }
            } else if (!a.disabled) {
              t = a
              break
            }
          return t
        }
      },
      eo = (e, t) => {
        let a
        for (let i of e)
          if ($(i)) {
            let e = i.options.find((e) => e.value === t)
            if (e) {
              a = e
              break
            }
          } else if (i.value === t) {
            a = i
            break
          }
        return a
      },
      el = (e, t) => {
        let a = [],
          i = new Set(t)
        for (let t of e)
          if ($(t)) {
            let e = t.options.filter((e) => i.has(e.value))
            a = a.concat(e)
          } else i.has(t.value) && a.push(t)
        return a
      },
      ed = (e, t) => t.querySelector(`[data-option-id="${e}"]`),
      ec = (e) => e.matches("[data-option-id]:not([data-disabled])"),
      eu = (e, t) => {
        let a = ed(e, t),
          i = a?.nextElementSibling,
          n = 0
        for (; i && n < 40;) {
          if (ec(i)) return i
          ;((i = i.nextElementSibling), (n += 1))
        }
      },
      ep = (e, t) => {
        let a = ed(e, t),
          i = a?.previousElementSibling,
          n = 0
        for (; i && n < 40;) {
          if (ec(i)) return i
          ;((i = i.previousElementSibling), (n += 1))
        }
      },
      em = () => {
        let e,
          t = ""
        return (a) => {
          let i = a.toLowerCase()
          return (
            (t += i),
            e && clearTimeout(e),
            (e = setTimeout(() => {
              t = ""
            }, 500)),
            i.repeat(t.length) === t ? i : t
          )
        }
      },
      eh = (e) => /^[a-zA-Z0-9]$/.test(e),
      ef = (e, t, a) => {
        let i, n
        if (!e.length) return
        let r = !a,
          s = ({ disabled: e, label: i, value: n }) => (n === a ? ((r = !0), !1) : !e && i.toLowerCase().startsWith(t))
        for (let t of e)
          if ($(t)) {
            for (let e of t.options)
              if (s(e))
                if (r) {
                  n = e
                  break
                } else i = i || e
          } else if (s(t))
            if (r) {
              n = t
              break
            } else i = i || t
        return n || i
      }
  },
  mFDr(e, t, a) {
    a.d(t, {}, { z: function (e, t) {} })
  },
  StdV(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      r = a("on57")
    let s = "flex flex-col gap-[var(--detail-page-section-gap)]"
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            a,
            o = (0, n.c)(3),
            { children: l } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.A)(
                  s,
                  "@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]",
                )),
                (o[0] = t))
              : (t = o[0]),
            o[1] !== l ? ((a = (0, i.jsx)("div", { className: t, children: l })), (o[1] = l), (o[2] = a)) : (a = o[2]),
            a
          )
        },
        m: s,
      },
    )
  },
  okCa(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      r = a("on57"),
      s = a("zd8w"),
      o = a("Wf1j"),
      l = a("YwPh"),
      d = a("BrXf"),
      c = a("bVeK"),
      u = a("UxN3")
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            p,
            m,
            h,
            f,
            g,
            y,
            b,
            v = (0, n.c)(70),
            {
              id: x,
              inputRef: w,
              className: _,
              "aria-activedescendant": j,
              "aria-autocomplete": k,
              "aria-controls": S,
              "aria-expanded": P,
              autoFocus: M,
              clearLabel: C,
              disabled: A,
              inputKey: I,
              inputRole: N,
              isClearable: R,
              label: T,
              maxLength: q,
              onFocus: D,
              onKeyDown: B,
              onSearchQueryChange: E,
              placeholder: O,
              readOnly: L,
              searchQuery: U,
              toolbarIconTone: z,
              trailingControl: F,
              variant: K,
            } = e,
            $ = void 0 === R || R,
            G = void 0 === z ? "secondary" : z,
            Y = void 0 === K ? "default" : K,
            W = (0, o.A)(),
            J = (0, s.useRef)(null),
            V = w ?? J,
            Z =
              "settings-dialog" === Y ||
              "catalog-compact" === Y ||
              "toolbar" === Y ||
              "toolbar-action" === Y ||
              "toolbar-compact" === Y ||
              "directory" === Y,
            H =
              ("default" === Y || "settings" === Y) &&
              "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
            Q = "default" === Y && "rounded-full",
            X = "settings" === Y && "rounded-button-toolbar",
            ee = Z && "gap-2 border border-primary-outline text-sm leading-5",
            et = Z && "catalog-compact" !== Y && "rounded-full px-3",
            ea = "catalog-compact" === Y && "h-9 rounded-xl px-2",
            ei = Z && "directory" !== Y && "bg-transparent",
            en = "directory" === Y && "h-9 bg-white dark:bg-(--gray-200)",
            er = "toolbar" === Y && "h-9",
            es = "settings-dialog" === Y && "h-10",
            eo = "toolbar-action" === Y && "h-token-button-composer",
            el = "toolbar-compact" === Y && "h-8 browser:h-9",
            ed =
              "sidebar" === Y &&
              "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
            ec = "sidebar-header" === Y && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
            eu = "catalog" === Y && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
            ep =
              "catalog-filter" === Y && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
            em =
              "discovery" === Y &&
              "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5"
          v[0] !== _ ||
          v[1] !== ei ||
          v[2] !== en ||
          v[3] !== er ||
          v[4] !== es ||
          v[5] !== eo ||
          v[6] !== el ||
          v[7] !== ed ||
          v[8] !== ec ||
          v[9] !== eu ||
          v[10] !== ep ||
          v[11] !== em ||
          v[12] !== H ||
          v[13] !== Q ||
          v[14] !== X ||
          v[15] !== ee ||
          v[16] !== et ||
          v[17] !== ea
            ? ((t = (0, r.A)(
                "no-drag flex items-center py-0 text-base leading-[18px]",
                H,
                Q,
                X,
                ee,
                et,
                ea,
                ei,
                en,
                er,
                es,
                eo,
                el,
                ed,
                ec,
                eu,
                ep,
                em,
                _,
              )),
              (v[0] = _),
              (v[1] = ei),
              (v[2] = en),
              (v[3] = er),
              (v[4] = es),
              (v[5] = eo),
              (v[6] = el),
              (v[7] = ed),
              (v[8] = ec),
              (v[9] = eu),
              (v[10] = ep),
              (v[11] = em),
              (v[12] = H),
              (v[13] = Q),
              (v[14] = X),
              (v[15] = ee),
              (v[16] = et),
              (v[17] = ea),
              (v[18] = t))
            : (t = v[18])
          let eh = "sidebar-header" === Y || void 0
          ;(v[19] !== Z || v[20] !== G || v[21] !== Y
            ? ((a =
                "sidebar" === Y
                  ? (0, i.jsx)(d.B, { icon: (0, i.jsx)(l.A, { className: "icon-sm text-secondary" }) })
                  : (0, i.jsxs)("span", {
                      className: "flex shrink-0 items-center justify-center",
                      children: [
                        Z &&
                          (0, i.jsx)(u.b5, {
                            icon: { 16: c.QmT, 20: c.zcw },
                            className: "tertiary" === G ? "text-tertiary" : "text-secondary",
                          }),
                        "discovery" === Y && (0, i.jsx)(c.zcw, {}),
                        !Z &&
                          "discovery" !== Y &&
                          ("sidebar-header" === Y
                            ? (0, i.jsx)(c.QmT, { className: "text-secondary" })
                            : (0, i.jsx)(l.A, { className: "icon-sm text-secondary" })),
                      ],
                    })),
              (v[19] = Z),
              (v[20] = G),
              (v[21] = Y),
              (v[22] = a))
            : (a = v[22]),
            v[23] !== x || v[24] !== T
              ? ((p = (0, i.jsx)("label", { className: "sr-only", htmlFor: x, children: T })),
                (v[23] = x),
                (v[24] = T),
                (v[25] = p))
              : (p = v[25]))
          let ef = "discovery" === Y ? "placeholder:text-default" : "placeholder:text-tertiary",
            eg = Z || "discovery" === Y ? "text-sm leading-5" : "text-base leading-[18px]",
            ey = "discovery" === Y && "tracking-[-0.15px] max-md:text-base"
          return (
            v[26] !== ef || v[27] !== eg || v[28] !== ey
              ? ((m = (0, r.A)(
                  "min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none",
                  ef,
                  eg,
                  ey,
                )),
                (v[26] = ef),
                (v[27] = eg),
                (v[28] = ey),
                (v[29] = m))
              : (m = v[29]),
            v[30] !== E
              ? ((h = (e) => {
                  E(e.target.value)
                }),
                (v[30] = E),
                (v[31] = h))
              : (h = v[31]),
            v[32] !== j ||
            v[33] !== k ||
            v[34] !== S ||
            v[35] !== P ||
            v[36] !== M ||
            v[37] !== A ||
            v[38] !== x ||
            v[39] !== I ||
            v[40] !== N ||
            v[41] !== q ||
            v[42] !== D ||
            v[43] !== B ||
            v[44] !== O ||
            v[45] !== L ||
            v[46] !== V ||
            v[47] !== U ||
            v[48] !== m ||
            v[49] !== h
              ? ((f = (0, i.jsx)(
                  "input",
                  {
                    "aria-activedescendant": j,
                    "aria-autocomplete": k,
                    "aria-controls": S,
                    "aria-expanded": P,
                    autoFocus: M,
                    id: x,
                    ref: V,
                    className: m,
                    autoComplete: "off",
                    disabled: A,
                    maxLength: q,
                    readOnly: L,
                    role: N,
                    type: "text",
                    value: U,
                    onChange: h,
                    onFocus: D,
                    onKeyDown: B,
                    placeholder: O,
                  },
                  I,
                )),
                (v[32] = j),
                (v[33] = k),
                (v[34] = S),
                (v[35] = P),
                (v[36] = M),
                (v[37] = A),
                (v[38] = x),
                (v[39] = I),
                (v[40] = N),
                (v[41] = q),
                (v[42] = D),
                (v[43] = B),
                (v[44] = O),
                (v[45] = L),
                (v[46] = V),
                (v[47] = U),
                (v[48] = m),
                (v[49] = h),
                (v[50] = f))
              : (f = v[50]),
            v[51] !== C ||
            v[52] !== A ||
            v[53] !== W ||
            v[54] !== $ ||
            v[55] !== E ||
            v[56] !== V ||
            v[57] !== U ||
            v[58] !== Y
              ? ((g =
                  $ && U.length > 0
                    ? (0, i.jsx)("button", {
                        disabled: A,
                        "aria-label":
                          C ?? W.formatMessage({ id: "skills.pageSearchInput.clear", defaultMessage: "Clear search" }),
                        className: (0, r.A)(
                          "flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default",
                          "sidebar" === Y && "size-6",
                        ),
                        type: "button",
                        onClick: () => {
                          ;(V.current?.focus(), E(""))
                        },
                        children: (0, i.jsx)(c.YwO, {}),
                      })
                    : null),
                (v[51] = C),
                (v[52] = A),
                (v[53] = W),
                (v[54] = $),
                (v[55] = E),
                (v[56] = V),
                (v[57] = U),
                (v[58] = Y),
                (v[59] = g))
              : (g = v[59]),
            v[60] !== F
              ? ((y = null == F ? null : (0, i.jsx)("div", { className: "flex shrink-0 items-center", children: F })),
                (v[60] = F),
                (v[61] = y))
              : (y = v[61]),
            v[62] !== t || v[63] !== eh || v[64] !== a || v[65] !== p || v[66] !== f || v[67] !== g || v[68] !== y
              ? ((b = (0, i.jsxs)("div", {
                  className: t,
                  "data-sidebar-header-search": eh,
                  children: [a, p, f, g, y],
                })),
                (v[62] = t),
                (v[63] = eh),
                (v[64] = a),
                (v[65] = p),
                (v[66] = f),
                (v[67] = g),
                (v[68] = y),
                (v[69] = b))
              : (b = v[69]),
            b
          )
        },
      },
    )
  },
  dna8(e, t, a) {
    a.d(t, { JoinRequestsDialog: () => eB })
    var i = a("ABep"),
      n = a("QosV"),
      r = a("XyTt"),
      s = a("irkb"),
      o = a("T0Rc"),
      l = a("qmMi"),
      d = a("zd8w"),
      c = a("Qgfj"),
      u = a("Wf1j"),
      p = a("oyxz"),
      m = a("rLEB"),
      h = a("PFjh"),
      f = a("CLax"),
      g = a("SPnB"),
      y = a("mFDr"),
      b = a("Sm6l"),
      v = a("StdV"),
      x = a("JNtf"),
      w = a("mUDD"),
      _ = a("okCa"),
      j = a("SGsN"),
      k = a("OWtl")
    function S(e, t) {
      return e.seat_capacity?.find((e) => e.type === t)
    }
    function P(e, t, a = 0) {
      let i = S(e, t)
      return null != i ? i.paid : a
    }
    function M(e, t) {
      return S(e, t)?.available ?? null
    }
    function C(e) {
      let t,
        a,
        r,
        s = (0, n.c)(9),
        { label: o, children: l, strong: d } = e,
        c = void 0 !== d && d,
        u = `flex items-start justify-between gap-4 ${c ? "mt-2 border-t border-divider pt-3 text-base font-medium" : "py-1.5 text-sm"}`,
        p = `min-w-0 ${c ? "text-default" : "text-secondary"}`
      return (
        s[0] !== o || s[1] !== p
          ? ((t = (0, i.jsx)("dt", { className: p, children: o })), (s[0] = o), (s[1] = p), (s[2] = t))
          : (t = s[2]),
        s[3] !== l
          ? ((a = (0, i.jsx)("dd", {
              className: "shrink-0 text-right whitespace-nowrap text-default tabular-nums",
              children: l,
            })),
            (s[3] = l),
            (s[4] = a))
          : (a = s[4]),
        s[5] !== u || s[6] !== t || s[7] !== a
          ? ((r = (0, i.jsxs)("div", { className: u, children: [t, a] })),
            (s[5] = u),
            (s[6] = t),
            (s[7] = a),
            (s[8] = r))
          : (r = s[8]),
        r
      )
    }
    var A = a("gviT")
    function I(e) {
      var t, a
      let r,
        s,
        o,
        l,
        d,
        c,
        m,
        h,
        f,
        g = (0, n.c)(40),
        { appliedBalance: y, compact: b, costPreview: v, currency: x } = e,
        w = void 0 !== b && b,
        _ = (0, u.A)(),
        j = v.appliedBalanceMinorUnits ?? 0,
        k = v.billingAdjustment?.type === "billing_cycle_reset" ? v.billingAdjustment : null,
        S = null != y && 0 !== j,
        P = S ? v.proratedSubtotalMinorUnits - j : v.proratedSubtotalMinorUnits
      g[0] !== k || g[1] !== v.taxAmountMinorUnits || g[2] !== v.taxRatePercent || g[3] !== S || g[4] !== P
        ? ((r =
            null != k
              ? R(
                  k.new_period_charge + k.unused_time_credit + (k.other_adjustments ?? 0) + k.discount_amount,
                  v.taxAmountMinorUnits,
                )
              : ((S ? void 0 : v.taxRatePercent) ?? R(P, v.taxAmountMinorUnits))),
          (g[0] = k),
          (g[1] = v.taxAmountMinorUnits),
          (g[2] = v.taxRatePercent),
          (g[3] = S),
          (g[4] = P),
          (g[5] = r))
        : (r = g[5])
      let M = r,
        C = w ? "dl" : "div",
        A = w ? void 0 : S ? "flex flex-col gap-2" : "flex flex-col gap-4"
      g[6] !== k || g[7] !== w || g[8] !== x || g[9] !== P
        ? ((s =
            null != k
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(N, {
                      compact: w,
                      amountMinorUnits: k.new_period_charge,
                      currency: x,
                      label: (0, i.jsx)(p.A, { ...T.billingResetCharge }),
                    }),
                    (0, i.jsx)(N, {
                      compact: w,
                      amountMinorUnits: k.unused_time_credit,
                      currency: x,
                      label: (0, i.jsx)(p.A, { ...T.billingResetCredit }),
                    }),
                    (k.other_adjustments ?? 0) !== 0 &&
                      (0, i.jsx)(N, {
                        compact: w,
                        amountMinorUnits: k.other_adjustments ?? 0,
                        currency: x,
                        label: (0, i.jsx)(p.A, { ...T.billingResetOtherAdjustments }),
                      }),
                    0 !== k.discount_amount &&
                      (0, i.jsx)(N, {
                        compact: w,
                        amountMinorUnits: k.discount_amount,
                        currency: x,
                        label: (0, i.jsx)(p.A, { ...T.billingResetDiscount }),
                      }),
                  ],
                })
              : (0, i.jsx)(N, {
                  compact: w,
                  amountMinorUnits: P,
                  currency: x,
                  label: (0, i.jsx)(p.A, { ...T.proratedSubtotal }),
                })),
          (g[6] = k),
          (g[7] = w),
          (g[8] = x),
          (g[9] = P),
          (g[10] = s))
        : (s = g[10])
      let I = v.taxAmountMinorUnits
      ;(g[11] !== _ || g[12] !== M
        ? ((t = _),
          (a = M),
          (o = t.formatNumber(a, { maximumFractionDigits: 3, minimumFractionDigits: 0 })),
          (g[11] = _),
          (g[12] = M),
          (g[13] = o))
        : (o = g[13]),
        g[14] !== o
          ? ((l = (0, i.jsx)(p.A, { ...T.salesTax, values: { taxRate: o } })), (g[14] = o), (g[15] = l))
          : (l = g[15]),
        g[16] !== w || g[17] !== v.taxAmountMinorUnits || g[18] !== x || g[19] !== l
          ? ((d = (0, i.jsx)(N, { compact: w, amountMinorUnits: I, currency: x, label: l })),
            (g[16] = w),
            (g[17] = v.taxAmountMinorUnits),
            (g[18] = x),
            (g[19] = l),
            (g[20] = d))
          : (d = g[20]))
      let q = S && y
      return (
        g[21] !== j || g[22] !== k || g[23] !== w || g[24] !== x || g[25] !== S
          ? ((c =
              null != k &&
              0 !== j &&
              !S &&
              (0, i.jsx)(N, {
                compact: w,
                amountMinorUnits: j,
                currency: x,
                label: (0, i.jsx)(p.A, { ...T.billingResetBalance }),
              })),
            (g[21] = j),
            (g[22] = k),
            (g[23] = w),
            (g[24] = x),
            (g[25] = S),
            (g[26] = c))
          : (c = g[26]),
        g[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(p.A, { ...T.totalDueToday })), (g[27] = m))
          : (m = g[27]),
        g[28] !== w || g[29] !== v.totalDueTodayMinorUnits || g[30] !== x
          ? ((h = (0, i.jsx)(N, {
              compact: w,
              amountMinorUnits: v.totalDueTodayMinorUnits,
              currency: x,
              emphasize: !0,
              label: m,
            })),
            (g[28] = w),
            (g[29] = v.totalDueTodayMinorUnits),
            (g[30] = x),
            (g[31] = h))
          : (h = g[31]),
        g[32] !== C || g[33] !== c || g[34] !== h || g[35] !== A || g[36] !== s || g[37] !== d || g[38] !== q
          ? ((f = (0, i.jsxs)(C, { className: A, children: [s, d, q, c, h] })),
            (g[32] = C),
            (g[33] = c),
            (g[34] = h),
            (g[35] = A),
            (g[36] = s),
            (g[37] = d),
            (g[38] = q),
            (g[39] = f))
          : (f = g[39]),
        f
      )
    }
    let N = (e) => {
      let t,
        a,
        r,
        s,
        o = (0, n.c)(17),
        { amountMinorUnits: l, compact: d, currency: c, emphasize: p, label: m } = e,
        h = void 0 !== p && p,
        f = (0, u.A)()
      o[0] !== l || o[1] !== c || o[2] !== f.locale
        ? ((t = (0, A.ej)({ locale: f.locale, amountMinorUnits: l, currency: c })),
          (o[0] = l),
          (o[1] = c),
          (o[2] = f.locale),
          (o[3] = t))
        : (t = o[3])
      let g = t
      if (void 0 !== d && d) {
        let e
        return (
          o[4] !== g || o[5] !== h || o[6] !== m
            ? ((e = (0, i.jsx)(C, { label: m, strong: h, children: g })),
              (o[4] = g),
              (o[5] = h),
              (o[6] = m),
              (o[7] = e))
            : (e = o[7]),
          e
        )
      }
      let y = h
        ? "text-token-text-primary text-[16px] leading-[26px] font-semibold tracking-[-0.32px]"
        : "text-token-text-secondary text-[16px] leading-[26px] tracking-[-0.32px]"
      return (
        o[8] !== y || o[9] !== m
          ? ((a = (0, i.jsx)("p", { className: y, children: m })), (o[8] = y), (o[9] = m), (o[10] = a))
          : (a = o[10]),
        o[11] !== g || o[12] !== y
          ? ((r = (0, i.jsx)("p", { className: y, children: g })), (o[11] = g), (o[12] = y), (o[13] = r))
          : (r = o[13]),
        o[14] !== a || o[15] !== r
          ? ((s = (0, i.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [a, r] })),
            (o[14] = a),
            (o[15] = r),
            (o[16] = s))
          : (s = o[16]),
        s
      )
    }
    function R(e, t) {
      return 0 === e ? 0 : (t / e) * 100
    }
    let T = (0, c.YK)({
      billingResetCharge: {
        id: "businessPremiumSeatCheckout.billingReset.charge",
        defaultMessage: "New billing period",
        description:
          "Charge row in the Business seat purchase review dialog for the full new billing period, before separately displayed unused-time credit, discounts, tax, and account balance.",
      },
      billingResetCredit: {
        id: "businessPremiumSeatCheckout.billingReset.credit",
        defaultMessage: "Unused-time credit",
        description:
          "Credit row in the Business seat purchase review dialog when restarting the billing period. The amount is the provider-calculated credit for unused time in the previous period.",
      },
      billingResetOtherAdjustments: {
        id: "businessPremiumSeatCheckout.billingReset.otherAdjustments",
        defaultMessage: "Other invoice adjustments",
        description:
          "Cost summary row in the Business seat purchase confirmation dialog when starting a new billing month. Shows pending charges or credits from earlier activity, separate from the new month's seats and unused-time credit.",
      },
      billingResetDiscount: {
        id: "businessPremiumSeatCheckout.billingReset.discount",
        defaultMessage: "Discount",
        description:
          "Discount row in the Business seat purchase review dialog when restarting the billing period. The negative amount reduces the charge for the new period.",
      },
      proratedSubtotal: {
        id: "businessPremiumSeatCheckout.proratedSubtotal",
        defaultMessage: "Prorated subtotal",
        description:
          "Label for the pre-tax prorated amount in the Business workspace seat checkout dialog. Workspace admins see it in the due-today summary before confirming a seat change.",
      },
      salesTax: {
        id: "businessPremiumSeatCheckout.salesTax",
        defaultMessage: "Sales tax ({taxRate}%)",
        description:
          "Label for the tax row in the Business workspace seat checkout dialog. Placeholder {taxRate} is a localized percentage number without the percent sign, derived from the preview response when available, such as 8.875. Keep the surrounding parentheses and percent sign.",
      },
      billingResetBalance: {
        id: "businessPremiumSeatCheckout.billingReset.balance",
        defaultMessage: "Account balance",
        description:
          "Account balance adjustment row in the Business seat purchase review dialog when restarting the billing period. A negative amount is credit applied to the purchase; a positive amount is an existing amount owed.",
      },
      totalDueToday: {
        id: "businessPremiumSeatCheckout.totalDueToday",
        defaultMessage: "Total due today",
        description:
          "Emphasized total label in the Business workspace seat checkout dialog. It identifies the authoritative amount that will be charged immediately if the admin confirms the seat change.",
      },
    })
    var q = a("on57")
    let D = (e) => {
      let t,
        a,
        r,
        s,
        o,
        l = (0, n.c)(41),
        {
          defaultSeatPlanName: d,
          compact: c,
          ariaLabel: m,
          billingPeriod: h,
          className: f,
          currency: g,
          immediateSeatAdditions: y,
          initialSeatCounts: b,
          isStandardToPremiumUpgrade: v,
          nextBillingDate: x,
          premiumSeatPricePerBillingPeriod: w,
          proposedPremiumToStandardDowngradeCount: _,
          showPremiumSeats: j,
          showTiming: k,
          showPriceChange: S,
          standardSeatPricePerBillingPeriod: P,
          updatedSeatCounts: M,
        } = e,
        C = void 0 !== c && c,
        A = void 0 !== v && v,
        I = void 0 === j || j,
        N = void 0 === k || k,
        R = void 0 === S || S,
        T = (0, u.A)()
      if (
        l[0] !== m ||
        l[1] !== h ||
        l[2] !== f ||
        l[3] !== C ||
        l[4] !== g ||
        l[5] !== d ||
        l[6] !== y ||
        l[7] !== b ||
        l[8] !== T ||
        l[9] !== A ||
        l[10] !== x ||
        l[11] !== w ||
        l[12] !== _ ||
        l[13] !== I ||
        l[14] !== R ||
        l[15] !== N ||
        l[16] !== P ||
        l[17] !== M
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            n = (function ({
              defaultSeatPlanName: e,
              immediateSeatAdditions: t,
              initialSeatCounts: a,
              intl: i,
              isStandardToPremiumUpgrade: n,
              premiumSeatPricePerBillingPeriod: r,
              proposedPremiumToStandardDowngradeCount: s,
              showPremiumSeats: o,
              standardSeatPricePerBillingPeriod: l,
              updatedSeatCounts: d,
            }) {
              if (n && o && a.standard - d.standard == 1 && d.premium - a.premium == 1)
                return [{ kind: "standardToPremiumUpgrade" }]
              let c = { premium: r, standard: l },
                u = o ? (s ?? 0) : 0,
                p = (o ? ["standard", "premium"] : ["standard"]).flatMap((n) => {
                  let r = d[n] - a[n],
                    s = Math.max(r, 0),
                    o = Math.min(Math.max(t?.[n] ?? s, 0), s),
                    l = s - o - ("standard" === n ? u : 0),
                    p = "standard" === n ? (e ?? i.formatMessage(E.standard)) : i.formatMessage(E.premium),
                    m = (e, t, a) => ({
                      billingPeriodDelta: e * c[n] * ("add" === t ? 1 : -1),
                      count: e,
                      direction: t,
                      seatType: p,
                      timing: a,
                    }),
                    h = Math.max(-r, 0) - ("premium" === n ? u : 0)
                  return [
                    ...(o > 0 ? [m(o, "add", "immediate")] : []),
                    ...(l > 0 ? [m(l, "add", "renewal")] : []),
                    ...(h > 0 ? [m(h, "remove", "renewal")] : []),
                  ]
                }),
                m = (e, t) => {
                  let a = p.filter((a) => a.direction === e && a.timing === t)
                  if (0 === a.length) return []
                  let n = i.formatList(
                    a.map(({ count: e, seatType: t }) => i.formatMessage(E.seatCount, { count: e, seatType: t })),
                    { style: "short" },
                  )
                  return [
                    {
                      billingPeriodDelta: a.reduce((e, t) => e + t.billingPeriodDelta, 0),
                      description: i.formatMessage("add" === e ? E.addSeatList : E.removeSeatList, { seats: n }),
                      direction: e,
                      kind: "seatChange",
                      timing: t,
                    },
                  ]
                }
              return [
                ...m("add", "immediate"),
                ...(u > 0
                  ? [
                      {
                        description: i.formatMessage(E.downgradePremiumToStandard, { count: u }),
                        newBillingPeriodPrice: u * l,
                        previousBillingPeriodPrice: u * r,
                        kind: "premiumToStandardDowngrade",
                        timing: "renewal",
                      },
                    ]
                  : []),
                ...m("add", "renewal"),
                ...m("remove", "renewal"),
              ]
            })({
              defaultSeatPlanName: d,
              immediateSeatAdditions: y,
              initialSeatCounts: b,
              intl: T,
              isStandardToPremiumUpgrade: A,
              premiumSeatPricePerBillingPeriod: w,
              proposedPremiumToStandardDowngradeCount: _,
              showPremiumSeats: I,
              standardSeatPricePerBillingPeriod: P,
              updatedSeatCounts: M,
            }),
            o = C
              ? "text-token-text-primary text-sm font-medium"
              : "text-token-text-primary text-[16px] leading-[26px] tracking-[-0.32px]"
          if (0 === n.length) {
            s = null
            break e
          }
          t = m
          let c = C ? "gap-3 rounded-xl p-4" : "gap-5 rounded-2xl p-6",
            u = !C && (n.length > 1 ? "min-h-[164px]" : "min-h-[98px]"),
            v = !N && "justify-center"
          ;(l[22] !== f || l[23] !== c || l[24] !== u || l[25] !== v
            ? ((a = (0, q.A)("border-token-border-default flex flex-col border", c, u, v, f)),
              (l[22] = f),
              (l[23] = c),
              (l[24] = u),
              (l[25] = v),
              (l[26] = a))
            : (a = l[26]),
            l[27] !== h ||
            l[28] !== g ||
            l[29] !== T ||
            l[30] !== x ||
            l[31] !== w ||
            l[32] !== o ||
            l[33] !== R ||
            l[34] !== N ||
            l[35] !== P
              ? ((e = (e) => {
                  if ("standardToPremiumUpgrade" === e.kind)
                    return (0, i.jsxs)(
                      "div",
                      {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex min-w-0 flex-col",
                            children: [
                              (0, i.jsx)("p", {
                                className: o,
                                children: (0, i.jsx)(p.A, { ...E.upgradeStandardToPremium }),
                              }),
                              N &&
                                (0, i.jsx)("p", {
                                  className: "text-token-text-secondary text-[14px] leading-5 tracking-[-0.15px]",
                                  children: (0, i.jsx)(p.A, { ...E.changesTakeEffectImmediately }),
                                }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex shrink-0 flex-col items-end",
                            children: [
                              (0, i.jsx)("p", {
                                className: o,
                                children: (0, i.jsx)(p.A, {
                                  ...E.billingPeriodPrice,
                                  values: { billingPeriod: h, price: B(T, w, g) },
                                }),
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "text-token-text-secondary text-[14px] leading-5 tracking-[-0.15px] line-through",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, i.jsx)(p.A, {
                                      ...E.previousBillingPeriodPrice,
                                      values: { billingPeriod: h, price: B(T, P, g) },
                                    }),
                                  }),
                                  (0, i.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(p.A, {
                                      ...E.billingPeriodPrice,
                                      values: { billingPeriod: h, price: B(T, P, g) },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.kind,
                    )
                  let { description: t, timing: a } = e,
                    n = "premiumToStandardDowngrade" === e.kind
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: "flex items-center justify-between gap-4",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex min-w-0 flex-col",
                          children: [
                            (0, i.jsx)("p", { className: o, children: t }),
                            N &&
                              (0, i.jsx)("p", {
                                className: "text-token-text-secondary text-[14px] leading-5 tracking-[-0.15px]",
                                children:
                                  "immediate" === a
                                    ? (0, i.jsx)(p.A, { ...E.changesTakeEffectImmediately })
                                    : (0, i.jsx)(p.A, { ...E.changesTakeEffectOnDate, values: { date: x } }),
                              }),
                          ],
                        }),
                        n
                          ? (0, i.jsxs)("div", {
                              className: "flex shrink-0 flex-col items-end",
                              children: [
                                (0, i.jsxs)("p", {
                                  className: o,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "sr-only",
                                      children: (0, i.jsx)(p.A, {
                                        ...E.newStandardPriceAccessibleLabel,
                                        values: { billingPeriod: h, price: B(T, e.newBillingPeriodPrice, g) },
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      "aria-hidden": "true",
                                      children: (0, i.jsx)(p.A, {
                                        ...E.billingPeriodPrice,
                                        values: { billingPeriod: h, price: B(T, e.newBillingPeriodPrice, g) },
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("p", {
                                  className: "text-token-text-secondary text-[14px] leading-5 tracking-[-0.15px]",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "sr-only",
                                      children: (0, i.jsx)(p.A, {
                                        ...E.previousPremiumPriceAccessibleLabel,
                                        values: { billingPeriod: h, price: B(T, e.previousBillingPeriodPrice, g) },
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      "aria-hidden": "true",
                                      className: "line-through",
                                      children: (0, i.jsx)(p.A, {
                                        ...E.billingPeriodPrice,
                                        values: { billingPeriod: h, price: B(T, e.previousBillingPeriodPrice, g) },
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : R
                            ? (0, i.jsx)("p", {
                                className: `shrink-0 ${o}`,
                                children: (0, i.jsx)(p.A, {
                                  ...(e.billingPeriodDelta >= 0 ? E.billingPeriodIncrease : E.billingPeriodDecrease),
                                  values: { billingPeriod: h, price: B(T, Math.abs(e.billingPeriodDelta), g) },
                                }),
                              })
                            : null,
                      ],
                    },
                    n ? "premium-to-standard-downgrade-renewal" : [e.direction, a].join("-"),
                  )
                }),
                (l[27] = h),
                (l[28] = g),
                (l[29] = T),
                (l[30] = x),
                (l[31] = w),
                (l[32] = o),
                (l[33] = R),
                (l[34] = N),
                (l[35] = P),
                (l[36] = e))
              : (e = l[36]),
            (r = n.map(e)))
        }
        ;((l[0] = m),
          (l[1] = h),
          (l[2] = f),
          (l[3] = C),
          (l[4] = g),
          (l[5] = d),
          (l[6] = y),
          (l[7] = b),
          (l[8] = T),
          (l[9] = A),
          (l[10] = x),
          (l[11] = w),
          (l[12] = _),
          (l[13] = I),
          (l[14] = R),
          (l[15] = N),
          (l[16] = P),
          (l[17] = M),
          (l[18] = t),
          (l[19] = a),
          (l[20] = r),
          (l[21] = s))
      } else ((t = l[18]), (a = l[19]), (r = l[20]), (s = l[21]))
      return s !== Symbol.for("react.early_return_sentinel")
        ? s
        : (l[37] !== t || l[38] !== a || l[39] !== r
            ? ((o = (0, i.jsx)("section", { "aria-label": t, className: a, children: r })),
              (l[37] = t),
              (l[38] = a),
              (l[39] = r),
              (l[40] = o))
            : (o = l[40]),
          o)
    }
    function B(e, t, a) {
      return e.formatNumber(t, {
        currency: a,
        currencyDisplay: "narrowSymbol",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2 * (t % 1 != 0),
        style: "currency",
      })
    }
    let E = (0, c.YK)({
      standard: {
        id: "businessPremiumSeatChangeSummary.standard",
        defaultMessage: "Standard",
        description:
          "Short tier label inserted into a direction-specific seat-change summary shown in the Business workspace Manage seats and Review purchase dialogs. It identifies the lower-priced Standard seat tier.",
      },
      premium: {
        id: "businessPremiumSeatChangeSummary.premium",
        defaultMessage: "Premium",
        description:
          "Short tier label inserted into a direction-specific seat-change summary shown in the Business workspace Manage seats and Review purchase dialogs. It identifies the higher-priced Premium seat tier.",
      },
      upgradeStandardToPremium: {
        id: "businessPremiumSeatChangeSummary.upgradeStandardToPremium",
        defaultMessage: "Upgrade Standard to Premium",
        description:
          "Primary row label in the Business workspace Review purchase dialog after an admin upgrades one member from a paid Standard seat to a paid Premium seat and must buy Premium capacity. It describes one immediate seat conversion, not separate add and remove actions. Keep this concise because it appears in a compact bordered summary card.",
      },
      billingPeriodPrice: {
        id: "businessPremiumSeatChangeSummary.billingPeriodPrice",
        defaultMessage: "{price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Compact unsigned recurring seat price in the Business workspace Review purchase dialog for a Standard-to-Premium member upgrade or an unoccupied Premium-to-Standard downgrade. It is shown for both the new tier price and the visually struck-through previous tier price. Placeholder {price} is a localized recurring price with up to two fractional digits, such as $100 for a monthly Premium seat, \u20AC109.24 for a monthly Premium seat, $25 for a monthly Standard seat, or $1,200 for an annual Premium seat. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the abbreviated suffix because this summary is space-limited.",
      },
      previousBillingPeriodPrice: {
        id: "businessPremiumSeatChangeSummary.previousBillingPeriodPrice",
        defaultMessage: "Previous price: {price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Screen-reader-only label for the visually struck-through previous Standard seat price in the Business workspace Review purchase dialog after an admin upgrades one member to Premium. Placeholder {price} is the localized previous recurring price with up to two fractional digits, such as $20 for a monthly plan, \u20AC21.85 for a monthly plan, or $240 for an annual plan. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period.",
      },
      billingPeriodIncrease: {
        id: "businessPremiumSeatChangeSummary.billingPeriodIncrease",
        defaultMessage: "+ {price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Compact recurring-price increase on the right side of an addition row in a shared seat-change summary card in the Business workspace Manage seats and Review purchase dialogs after an admin edits the workspace's seat mix. The addition may take effect immediately or on the next subscription billing date. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Placeholder {price} is the localized absolute recurring increase with up to two fractional digits, such as $100 for a monthly plan, \u20AC109.24 for a monthly plan, or $1,200 for an annual plan. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the leading plus sign and abbreviated suffix because this summary is space-limited.",
      },
      billingPeriodDecrease: {
        id: "businessPremiumSeatChangeSummary.billingPeriodDecrease",
        defaultMessage: "\u2013 {price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Compact recurring-price decrease on the right side of a removal row in a shared seat-change summary card in the Business workspace Manage seats and Review purchase dialogs after an admin edits the workspace's seat mix. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Removals in this flow take effect on the next subscription billing date. Placeholder {price} is the localized absolute recurring decrease with up to two fractional digits, such as $20 for a monthly plan, \u20AC21.85 for a monthly plan, or $240 for an annual plan. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the leading minus sign and abbreviated suffix because this summary is space-limited.",
      },
      downgradePremiumToStandard: {
        id: "businessPremiumSeatChangeSummary.downgradePremiumToStandard",
        defaultMessage:
          "{count, plural, one {Downgrade Premium to Standard} other {Downgrade # Premium seats to Standard}}",
        description:
          "Primary line of a renewal-effective unoccupied-seat downgrade row in the Business workspace Review seat changes dialog. Workspace admins see it when the subscription preview proposes converting one or more unoccupied Premium seats into Standard seats at renewal. Placeholder {count} is the positive number of matching Premium-to-Standard downgrades and controls singular versus plural wording. For one downgrade, omit the number and the word seat; for multiple downgrades, include the localized count and plural seats. Keep this concise because it appears in a compact bordered summary card.",
      },
      newStandardPriceAccessibleLabel: {
        id: "businessPremiumSeatChangeSummary.downgradePrice.new.accessibleLabel",
        defaultMessage: "New Standard price: {price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Screen-reader-only label for the new grouped Standard recurring price on the right side of a Premium-to-Standard downgrade row in the Business workspace Review seat changes dialog. It distinguishes the new Standard price from the struck-through previous Premium price below it. Placeholder {price} is the localized grouped recurring price with up to two fractional digits. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period.",
      },
      previousPremiumPriceAccessibleLabel: {
        id: "businessPremiumSeatChangeSummary.downgradePrice.previous.accessibleLabel",
        defaultMessage: "Previous Premium price: {price}/{billingPeriod, select, yearly {yr} other {mo}}",
        description:
          "Screen-reader-only label for the previous grouped Premium recurring price on the right side of a Premium-to-Standard downgrade row in the Business workspace Review seat changes dialog. The visible price is struck through and appears below the new Standard price. Placeholder {price} is the localized grouped recurring price with up to two fractional digits. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period.",
      },
      changesTakeEffectImmediately: {
        id: "businessPremiumSeatChangeSummary.timing.immediate",
        defaultMessage: "Takes effect immediately",
        description:
          "Short supporting line under an addition or Standard-to-Premium upgrade summary in the Business workspace Review purchase checkout dialog after the backend confirms when the change takes effect. It tells workspace admins that the seat change applies immediately after they confirm. Keep this concise because it appears in a compact bordered summary card.",
      },
      changesTakeEffectOnDate: {
        id: "businessPremiumSeatChangeSummary.timing.onDate",
        defaultMessage: "Takes effect on {date, date, long}",
        description:
          "Short supporting line under a renewal-effective addition or removal summary in the Business workspace Review purchase checkout dialog after the backend confirms when the change takes effect. It tells workspace admins that the seat change applies on the workspace's next subscription billing date rather than immediately; renewal-effective additions can result from a proposed scheduled downgrade, and removals are also scheduled for renewal. Placeholder {date} is that renewal date as a locale-formatted calendar date. Keep this concise because it appears in a compact bordered summary card.",
      },
      seatCount: {
        id: "businessPremiumSeatChangeSummary.seatCount",
        defaultMessage: "{count, plural, one {# {seatType} seat} other {# {seatType} seats}}",
        description:
          "One tier quantity inside a direction-specific seat-change summary row in the Business workspace Manage seats and Review purchase dialogs. Placeholder {count} is the number of seats and controls singular versus plural. Placeholder {seatType} is the localized tier label, Standard or Premium. The surrounding summary supplies the Add or Remove verb.",
      },
      addSeatList: {
        id: "businessPremiumSeatChangeSummary.addSeatList",
        defaultMessage: "Add {seats}",
        description:
          "Primary line of an addition row in a shared seat-change summary shown in the Business workspace Manage seats and Review purchase dialogs when one or more edited tiers increase. The addition may take effect immediately or on the next subscription billing date. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Placeholder {seats} is a localized list of one or more tier quantities, such as 1 Standard seat and 1 Premium seat. Keep Add as the single shared verb.",
      },
      removeSeatList: {
        id: "businessPremiumSeatChangeSummary.removeSeatList",
        defaultMessage: "Remove {seats}",
        description:
          "Primary line of a removal row in a shared seat-change summary shown in the Business workspace Manage seats and Review purchase dialogs when one or more edited tiers are decreasing. Placeholder {seats} is a localized list of one or more tier quantities, such as 1 Standard seat and 1 Premium seat. Keep Remove as the single shared verb.",
      },
    })
    var O = a("B2b6")
    let L = (e) => {
      let t,
        a,
        r,
        s,
        o,
        l,
        d,
        c,
        m = (0, n.c)(27),
        {
          compact: h,
          billAmount: f,
          currency: g,
          isTaxInclusive: y,
          label: b,
          seatCounts: v,
          showPremiumSeats: x,
          defaultSeatPlanName: w,
        } = e,
        _ =
          void 0 !== h && h
            ? "text-token-text-primary text-sm font-medium tabular-nums"
            : "text-token-text-primary text-base leading-[26px] tracking-[-0.32px]",
        j = (0, u.A)()
      m[0] !== g || m[1] !== j
        ? ((t = function (e) {
            let t = (0, O.OG)(g),
              a = e / Math.pow(10, t)
            return j.formatNumber(a, {
              currency: g,
              style: "currency",
              minimumFractionDigits: t,
              maximumFractionDigits: t,
            })
          }),
          (m[0] = g),
          (m[1] = j),
          (m[2] = t))
        : (t = m[2])
      let k = t
      m[3] !== f || m[4] !== g || m[5] !== k || m[6] !== j
        ? ((a =
            "amountMinorUnits" in f
              ? k(f.amountMinorUnits)
              : j.formatNumber(f.amountMajorUnits, {
                  currency: g,
                  currencyDisplay: "narrowSymbol",
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2 * (f.amountMajorUnits % 1 != 0),
                  style: "currency",
                })),
          (m[3] = f),
          (m[4] = g),
          (m[5] = k),
          (m[6] = j),
          (m[7] = a))
        : (a = m[7])
      let S = a
      ;(m[8] !== _ || m[9] !== b
        ? ((r = (0, i.jsx)("p", { className: _, children: b })), (m[8] = _), (m[9] = b), (m[10] = r))
        : (r = m[10]),
        m[11] !== w || m[12] !== v || m[13] !== x
          ? ((s =
              v &&
              (0, i.jsx)("p", {
                className: "text-token-text-secondary mt-1 text-sm leading-5 tracking-[-0.15px]",
                children: x
                  ? (0, i.jsx)(p.A, {
                      id: "businessPremiumSeatCheckout.seatMix",
                      defaultMessage: "{standardSeats} Standard \xb7 {premiumSeats} Premium",
                      description:
                        "Compact allocation line under the current or new recurring bill in the Business workspace seat checkout dialog. Placeholder {standardSeats} is the non-negative number of Standard seats and placeholder {premiumSeats} is the non-negative number of Premium seats. Keep the middle dot separator.",
                      values: { premiumSeats: v.premium, standardSeats: v.standard },
                    })
                  : w
                    ? (0, i.jsx)(p.A, {
                        id: "workspaceSeatCheckout.consumerPlanSeatMix",
                        defaultMessage: "{count, plural, one {# {plan} seat} other {# {plan} seats}}",
                        description:
                          "Allocation beneath a workspace bill for a single consumer-branded seat type. {plan} is the product name, such as Pro 200. {count} is the number of seats.",
                        values: { count: v.standard, plan: w },
                      })
                    : (0, i.jsx)(p.A, {
                        id: "businessPremiumSeatCheckout.standardSeatMix",
                        defaultMessage: "{standardSeats, plural, one {# Standard seat} other {# Standard seats}}",
                        description:
                          "Compact allocation line under the current or new recurring bill in the Business workspace seat checkout dialog when the Standard-seat-only new UX is enabled and Premium seats are hidden. Placeholder {standardSeats} is the non-negative number of Standard seats and controls singular versus plural. Keep this as a short one-line label because it sits below a bill-summary row.",
                        values: { standardSeats: v.standard },
                      }),
              })),
            (m[11] = w),
            (m[12] = v),
            (m[13] = x),
            (m[14] = s))
          : (s = m[14]),
        m[15] !== r || m[16] !== s
          ? ((o = (0, i.jsxs)("div", { children: [r, s] })), (m[15] = r), (m[16] = s), (m[17] = o))
          : (o = m[17]))
      let P = `shrink-0 ${_}`
      return (
        m[18] !== S || m[19] !== y
          ? ((l = y
              ? S
              : (0, i.jsx)(p.A, {
                  id: "businessPremiumSeatCheckout.billAmount",
                  defaultMessage: "{price} + tax",
                  description:
                    "Right-aligned recurring bill amount for the workspace's current monthly or annual billing period in the Business workspace seat checkout dialog. Placeholder {price} is a localized currency amount before tax, such as $6,100 monthly or $73,200 annually. Keep the literal plus-tax suffix.",
                  values: { price: S },
                })),
            (m[18] = S),
            (m[19] = y),
            (m[20] = l))
          : (l = m[20]),
        m[21] !== P || m[22] !== l
          ? ((d = (0, i.jsx)("p", { className: P, children: l })), (m[21] = P), (m[22] = l), (m[23] = d))
          : (d = m[23]),
        m[24] !== o || m[25] !== d
          ? ((c = (0, i.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [o, d] })),
            (m[24] = o),
            (m[25] = d),
            (m[26] = c))
          : (c = m[26]),
        c
      )
    }
    function U(e) {
      let t,
        a,
        r,
        s,
        o = (0, n.c)(12),
        { compact: l, header: d, children: c, footer: u } = e,
        p = void 0 !== l && l,
        m = p
          ? "flex items-start justify-between gap-4 px-6 pt-6 pb-5"
          : "flex min-h-[107px] items-start justify-between p-6"
      return (
        o[0] !== d || o[1] !== m
          ? ((t = (0, i.jsx)("div", { className: m, children: d })), (o[0] = d), (o[1] = m), (o[2] = t))
          : (t = o[2]),
        o[3] !== c
          ? ((a = (0, i.jsx)("div", { className: "flex flex-col gap-4 px-6", children: c })), (o[3] = c), (o[4] = a))
          : (a = o[4]),
        o[5] !== p || o[6] !== u
          ? ((r =
              u &&
              (0, i.jsx)("div", {
                className: p
                  ? "flex items-center justify-end gap-2 px-6 pt-4 pb-6"
                  : "flex min-h-[90px] items-center justify-end gap-2 px-6 py-5",
                children: u,
              })),
            (o[5] = p),
            (o[6] = u),
            (o[7] = r))
          : (r = o[7]),
        o[8] !== t || o[9] !== a || o[10] !== r
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [t, a, r] })), (o[8] = t), (o[9] = a), (o[10] = r), (o[11] = s))
          : (s = o[11]),
        s
      )
    }
    function z(e) {
      let t,
        a,
        r,
        s = (0, n.c)(11),
        { label: o, icon: l, compact: d, paymentMethod: c, action: u } = e,
        p = void 0 !== d && d,
        m = p
          ? "border-token-border-default flex items-center justify-between rounded-xl border p-4"
          : "border-token-border-default flex items-center justify-between rounded-2xl border p-4",
        h = p
          ? "text-token-text-primary truncate text-sm font-medium"
          : "text-token-text-primary truncate text-[16px] leading-[26px] tracking-[-0.32px]"
      return (
        s[0] !== c || s[1] !== h
          ? ((t = (0, i.jsx)("p", { className: h, children: c })), (s[0] = c), (s[1] = h), (s[2] = t))
          : (t = s[2]),
        s[3] !== l || s[4] !== t
          ? ((a = (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-3", children: [l, t] })),
            (s[3] = l),
            (s[4] = t),
            (s[5] = a))
          : (a = s[5]),
        s[6] !== u || s[7] !== o || s[8] !== m || s[9] !== a
          ? ((r = (0, i.jsxs)("section", { "aria-label": o, className: m, children: [a, u] })),
            (s[6] = u),
            (s[7] = o),
            (s[8] = m),
            (s[9] = a),
            (s[10] = r))
          : (r = s[10]),
        r
      )
    }
    var F = a("bVeK"),
      K = (e) =>
        (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, i.jsx)("path", {
              fill: "#2E9EFF",
              d: "M7.759 4.178h8.482c.805 0 1.47 0 2.01.045.563.045 1.08.144 1.565.391a4 4 0 0 1 1.748 1.748c.247.486.346 1.002.392 1.565.044.54.044 1.205.044 2.01v4.483c0 .805 0 1.469-.044 2.01-.046.562-.145 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.144-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.89 2 15.225 2 14.42V9.937c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.391.541-.045 1.206-.045 2.01-.045Z",
            }),
            (0, i.jsx)("path", { fill: "#77C0FF", d: "M14 16.178a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Z" }),
            (0, i.jsx)("path", {
              fill: "#227DCD",
              d: "M21.97 8.178c.028.492.03 1.075.03 1.76v1.24H2v-1.24c0-.685.002-1.268.03-1.76h19.94Z",
            }),
          ],
        })
    let $ = (0, d.lazy)(async () => ({ default: await (0, r.F1)() })),
      G = (0, c.YK)({
        purchaseSummary: { id: "codex.businessSeatReview.purchaseSummary", defaultMessage: "Purchase summary" },
        changeMethod: { id: "codex.businessSeatCheckout.changeMethod", defaultMessage: "Change payment method" },
        selectMethod: { id: "codex.businessSeatCheckout.selectMethod", defaultMessage: "Select a payment method" },
        confirm: {
          id: "codex.businessSeatCheckout.confirm",
          defaultMessage: "Buy {count, plural, one {seat} other {# seats}}",
        },
        back: { id: "codex.businessSeatCheckout.back", defaultMessage: "Back" },
        goBack: { id: "codex.businessSeatReview.navigation.goBack", defaultMessage: "Go back" },
        billing: { id: "codex.businessSeatCheckout.billing", defaultMessage: "Open billing" },
        title: { id: "codex.businessSeatReview.title", defaultMessage: "Review purchase" },
        billingResetDescription: {
          id: "codex.businessSeatReview.billingReset.description",
          defaultMessage: "Your billing cycle restarts today.",
        },
        currentBill: {
          id: "codex.businessSeatReview.currentBill",
          defaultMessage: "Current {billingPeriod, select, yearly {annual} other {monthly}} bill",
        },
        newBill: {
          id: "codex.businessSeatReview.newBill",
          defaultMessage: "New {billingPeriod, select, yearly {annual} other {monthly}} bill",
        },
        close: { id: "codex.businessSeatReview.close", defaultMessage: "Close purchase review dialog" },
        paymentMethod: { id: "codex.businessSeatReview.paymentMethod", defaultMessage: "Payment method" },
        change: { id: "codex.businessSeatReview.change", defaultMessage: "Change" },
        card: { id: "codex.businessSeatCheckout.card", defaultMessage: "Payment method ending in {last4}" },
        brandedCard: { id: "codex.businessSeatReview.brandedCard", defaultMessage: "{brand} {last4}" },
        balance: { id: "codex.businessSeatCheckout.balance", defaultMessage: "Account balance applied" },
        reset: {
          id: "codex.businessSeatCheckout.reset",
          defaultMessage: "Your billing period restarts today. Your next renewal is {date}.",
        },
        missingCard: {
          id: "codex.businessSeatCheckout.missingCard",
          defaultMessage: "Add a payment method in billing to buy this seat.",
        },
      })
    function Y(e) {
      var t
      let a = e.seat_quantities.length ? e.seat_quantities : e.line_items
      return {
        ...{
          billAmount: { amountMinorUnits: (t = { ...e, seat_quantities: a }).amount_due.amount_excluding_tax },
          billingPeriod: "year" === t.price_interval ? "yearly" : "monthly",
          seatCounts: {
            premium: t.seat_quantities.find(({ seat_type: e }) => "prolite" === e)?.quantity ?? 0,
            standard: t.seat_quantities.find(({ seat_type: e }) => "default" === e)?.quantity ?? 0,
          },
        },
        hasSeatCounts: a.length > 0,
      }
    }
    function W(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        d,
        c,
        p,
        m,
        h,
        f,
        g,
        y,
        b,
        v,
        x,
        w,
        _,
        j = (0, n.c)(63),
        { quote: k, showPaymentMethod: S, compact: P } = e,
        M = void 0 === S || S,
        C = void 0 === P || P,
        N = (0, u.A)(),
        R = N.formatMessage,
        T = k.currency
      if (j[0] !== C || j[1] !== T || j[2] !== k.current_recurring || j[3] !== k.proposed_recurring || j[4] !== R) {
        let e = Y(k.current_recurring),
          n = Y(k.proposed_recurring)
        ;((a = e.seatCounts.premium > 0 || n.seatCounts.premium > 0),
          (m = C
            ? "flex flex-col gap-5 rounded-xl border border-token-border-default p-4"
            : "flex flex-col gap-6 rounded-2xl border border-token-border-default p-6"))
        let u = e.hasSeatCounts ? e.seatCounts : void 0,
          h = R(G.currentBill, { billingPeriod: e.billingPeriod })
        ;(j[15] !== C || j[16] !== T || j[17] !== e || j[18] !== a || j[19] !== u || j[20] !== h
          ? ((r = (0, i.jsx)(L, {
              compact: C,
              ...e,
              seatCounts: u,
              currency: T,
              isTaxInclusive: !1,
              label: h,
              showPremiumSeats: a,
            })),
            (j[15] = C),
            (j[16] = T),
            (j[17] = e),
            (j[18] = a),
            (j[19] = u),
            (j[20] = h),
            (j[21] = r))
          : (r = j[21]),
          (t = L),
          (s = C),
          (o = n),
          (l = n.hasSeatCounts ? n.seatCounts : void 0),
          (d = T),
          (c = !1),
          (p = R(G.newBill, { billingPeriod: n.billingPeriod })),
          (j[0] = C),
          (j[1] = T),
          (j[2] = k.current_recurring),
          (j[3] = k.proposed_recurring),
          (j[4] = R),
          (j[5] = t),
          (j[6] = a),
          (j[7] = r),
          (j[8] = s),
          (j[9] = o),
          (j[10] = l),
          (j[11] = d),
          (j[12] = c),
          (j[13] = p),
          (j[14] = m))
      } else
        ((t = j[5]),
          (a = j[6]),
          (r = j[7]),
          (s = j[8]),
          (o = j[9]),
          (l = j[10]),
          (d = j[11]),
          (c = j[12]),
          (p = j[13]),
          (m = j[14]))
      ;(j[22] !== t ||
      j[23] !== a ||
      j[24] !== s ||
      j[25] !== o ||
      j[26] !== l ||
      j[27] !== d ||
      j[28] !== c ||
      j[29] !== p
        ? ((h = (0, i.jsx)(t, {
            compact: s,
            ...o,
            seatCounts: l,
            currency: d,
            isTaxInclusive: c,
            label: p,
            showPremiumSeats: a,
          })),
          (j[22] = t),
          (j[23] = a),
          (j[24] = s),
          (j[25] = o),
          (j[26] = l),
          (j[27] = d),
          (j[28] = c),
          (j[29] = p),
          (j[30] = h))
        : (h = j[30]),
        j[31] !== N || j[32] !== k.billing_adjustment || j[33] !== R
          ? ((f =
              k.billing_adjustment?.type === "billing_cycle_reset" &&
              (0, i.jsx)("p", {
                className: "text-sm text-token-text-secondary",
                children: R(G.reset, {
                  date: N.formatDate(k.billing_adjustment.renewal_date, { dateStyle: "long", timeZone: "UTC" }),
                }),
              })),
            (j[31] = N),
            (j[32] = k.billing_adjustment),
            (j[33] = R),
            (j[34] = f))
          : (f = j[34]),
        j[35] !== r || j[36] !== h || j[37] !== f || j[38] !== m
          ? ((g = (0, i.jsxs)("section", { className: m, children: [r, h, f] })),
            (j[35] = r),
            (j[36] = h),
            (j[37] = f),
            (j[38] = m),
            (j[39] = g))
          : (g = j[39]))
      let q = C
        ? "rounded-xl border border-token-border-default p-4"
        : "rounded-2xl border border-token-border-default p-6"
      if (j[40] !== k) {
        let e, t
        ;((e = k.amount_due.amount_excluding_tax),
          (t = k.amount_due.tax_amount),
          (y = {
            billingAdjustment: k.billing_adjustment,
            appliedBalanceMinorUnits: k.applied_balance ?? 0,
            proratedSubtotalMinorUnits: e,
            taxAmountMinorUnits: t,
            taxRatePercent: 0 === e ? 0 : (t / e) * 100,
            totalDueTodayMinorUnits: k.amount_due.amount,
          }),
          (j[40] = k),
          (j[41] = y))
      } else y = j[41]
      return (
        j[42] !== T || j[43] !== N.locale || j[44] !== k.applied_balance || j[45] !== R
          ? ((b =
              null != k.applied_balance && 0 !== k.applied_balance
                ? (0, i.jsxs)("div", {
                    className: "flex justify-between gap-4",
                    children: [
                      (0, i.jsx)("span", { children: R(G.balance) }),
                      (0, i.jsx)("span", {
                        children: (0, A.ej)({ amountMinorUnits: k.applied_balance, currency: T, locale: N.locale }),
                      }),
                    ],
                  })
                : void 0),
            (j[42] = T),
            (j[43] = N.locale),
            (j[44] = k.applied_balance),
            (j[45] = R),
            (j[46] = b))
          : (b = j[46]),
        j[47] !== C || j[48] !== T || j[49] !== y || j[50] !== b
          ? ((v = (0, i.jsx)(I, { compact: C, costPreview: y, currency: T, appliedBalance: b })),
            (j[47] = C),
            (j[48] = T),
            (j[49] = y),
            (j[50] = b),
            (j[51] = v))
          : (v = j[51]),
        j[52] !== q || j[53] !== v
          ? ((x = (0, i.jsx)("section", { className: q, children: v })), (j[52] = q), (j[53] = v), (j[54] = x))
          : (x = j[54]),
        j[55] !== k.default_payment_method || j[56] !== M || j[57] !== R
          ? ((w =
              M &&
              k.default_payment_method?.card_last4 &&
              (0, i.jsx)(z, {
                compact: !0,
                label: R(G.paymentMethod),
                icon: (0, i.jsx)(K, { "aria-hidden": !0, className: "h-5 w-6 shrink-0" }),
                paymentMethod: R(G.card, { last4: k.default_payment_method.card_last4 }),
              })),
            (j[55] = k.default_payment_method),
            (j[56] = M),
            (j[57] = R),
            (j[58] = w))
          : (w = j[58]),
        j[59] !== g || j[60] !== x || j[61] !== w
          ? ((_ = (0, i.jsxs)(i.Fragment, { children: [g, x, w] })), (j[59] = g), (j[60] = x), (j[61] = w), (j[62] = _))
          : (_ = j[62]),
        _
      )
    }
    function J(e) {
      let t,
        a,
        r = (0, n.c)(6)
      return (
        r[0] !== e.owner.accountId || r[1] !== e.owner.userId
          ? ((t = JSON.stringify([e.owner.accountId, e.owner.userId])),
            (r[0] = e.owner.accountId),
            (r[1] = e.owner.userId),
            (r[2] = t))
          : (t = r[2]),
        r[3] !== e || r[4] !== t ? ((a = (0, i.jsx)(V, { ...e }, t)), (r[3] = e), (r[4] = t), (r[5] = a)) : (a = r[5]),
        a
      )
    }
    function V(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        c,
        p,
        m,
        h,
        f,
        g,
        y,
        v,
        x,
        _,
        j,
        k,
        S,
        P,
        M,
        C,
        A,
        I,
        N,
        R,
        T,
        q,
        B = (0, n.c)(127),
        {
          owner: E,
          quote: L,
          seatCount: J,
          additions: V,
          heading: Z,
          description: H,
          onClose: Q,
          confirmLabel: X,
          telemetry: ee,
          busy: et,
          billingBusy: ea,
          onBack: ei,
          onConfirm: en,
          onManageBilling: er,
          children: es,
        } = e,
        { metrics: eo, entry: el, flowId: ed } = ee,
        ec = void 0 !== ea && ea,
        { formatMessage: eu } = (0, u.A)(),
        ep = (0, d.useRef)(null)
      ;(B[0] !== el || B[1] !== ed || B[2] !== eo
        ? ((t = () => {
            ep.current !== ed &&
              ((ep.current = ed), eo.count("payments", "business_seat_checkout.opened", { entry: el }))
          }),
          (a = [eo, el, ed]),
          (B[0] = el),
          (B[1] = ed),
          (B[2] = eo),
          (B[3] = t),
          (B[4] = a))
        : ((t = B[3]), (a = B[4])),
        (0, d.useEffect)(t, a))
      let [em, eh] = (0, d.useTransition)(),
        [ef, eg] = (0, d.useState)(!1),
        ey = (0, d.useRef)(!1)
      B[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = function (e) {
            e && ey.current && ((ey.current = !1), e.focus({ preventScroll: !0 }))
          }),
          (B[5] = r))
        : (r = B[5])
      let eb = r,
        [ev, ex] = (0, d.useState)(null)
      if (B[6] !== ev || B[7] !== L) {
        var ew
        ;((s = null == ev && (ew = L).amount_due.amount > 0 && !ew.default_payment_method),
          (B[6] = ev),
          (B[7] = L),
          (B[8] = s))
      } else s = B[8]
      let e_ = s
      B[9] !== X || B[10] !== e_ || B[11] !== J || B[12] !== eu
        ? ((o = e_ ? eu(G.selectMethod) : (X ?? eu(G.confirm, { count: J }))),
          (B[9] = X),
          (B[10] = e_),
          (B[11] = J),
          (B[12] = eu),
          (B[13] = o))
        : (o = B[13])
      let ej = o
      B[14] !== L.current_recurring
        ? ((l = Y(L.current_recurring)), (B[14] = L.current_recurring), (B[15] = l))
        : (l = B[15])
      let ek = l
      B[16] !== L.proposed_recurring
        ? ((c = Y(L.proposed_recurring)), (B[16] = L.proposed_recurring), (B[17] = c))
        : (c = B[17])
      let eS = c
      B[18] !== V || B[19] !== ek.seatCounts.premium || B[20] !== ek.seatCounts.standard || B[21] !== eS
        ? ((p = V ?? {
            standard: Math.max(0, eS.seatCounts.standard - ek.seatCounts.standard),
            premium: Math.max(0, eS.seatCounts.premium - ek.seatCounts.premium),
          }),
          (B[18] = V),
          (B[19] = ek.seatCounts.premium),
          (B[20] = ek.seatCounts.standard),
          (B[21] = eS),
          (B[22] = p))
        : (p = B[22])
      let eP = p,
        eM = ek.seatCounts.standard + eP.standard,
        eC = ek.seatCounts.premium + eP.premium
      B[23] !== eM || B[24] !== eC
        ? ((m = { standard: eM, premium: eC }), (B[23] = eM), (B[24] = eC), (B[25] = m))
        : (m = B[25])
      let eA = m
      B[26] !== L.proposed_recurring.line_items
        ? ((h = (e) => L.proposed_recurring.line_items.find((t) => t.seat_type === e)?.unit_amount),
          (B[26] = L.proposed_recurring.line_items),
          (B[27] = h))
        : (h = B[27])
      let eI = h
      B[28] !== eI ? ((f = eI("default")), (B[28] = eI), (B[29] = f)) : (f = B[29])
      let eN = f
      B[30] !== eI ? ((g = eI("prolite")), (B[30] = eI), (B[31] = g)) : (g = B[31])
      let eR = g,
        eT = 10 ** (0, O.OG)(L.currency),
        eq = (!eP.standard || null != eN) && (!eP.premium || null != eR)
      B[32] === Symbol.for("react.memo_cache_sentinel") ? ((y = () => eh(() => eg(!0))), (B[32] = y)) : (y = B[32])
      let eD = y,
        eB = L.default_payment_method
      B[33] !== eu ? ((v = eu(G.missingCard)), (B[33] = eu), (B[34] = v)) : (v = B[34])
      let eE = v
      if (eB?.card_last4) {
        let e
        ;(B[35] !== eB.card_brand || B[36] !== eB.card_last4 || B[37] !== eu
          ? ((e = eB.card_brand
              ? eu(G.brandedCard, { brand: "visa" === eB.card_brand ? "Visa" : eB.card_brand, last4: eB.card_last4 })
              : eu(G.card, { last4: eB.card_last4 })),
            (B[35] = eB.card_brand),
            (B[36] = eB.card_last4),
            (B[37] = eu),
            (B[38] = e))
          : (e = B[38]),
          (eE = e))
      }
      if (e_) {
        let e,
          t,
          a = et || em
        ;(B[39] !== eu ? ((e = eu(G.billing)), (B[39] = eu), (B[40] = e)) : (e = B[40]),
          B[41] !== ec || B[42] !== er || B[43] !== a || B[44] !== e
            ? ((t = (0, i.jsx)(b.$, {
                type: "button",
                color: "outlineGhost",
                size: "actionSm",
                loading: ec,
                disabled: a,
                onClick: er,
                children: e,
              })),
              (B[41] = ec),
              (B[42] = er),
              (B[43] = a),
              (B[44] = e),
              (B[45] = t))
            : (t = B[45]),
          (x = t))
      } else if (L.amount_due.amount > 0) {
        let e, t, a
        B[46] !== eu ? ((e = eu(G.changeMethod)), (B[46] = eu), (B[47] = e)) : (e = B[47])
        let n = et || em
        ;(B[48] !== eu ? ((t = eu(G.change)), (B[48] = eu), (B[49] = t)) : (t = B[49]),
          B[50] !== em || B[51] !== e || B[52] !== n || B[53] !== t
            ? ((a = (0, i.jsx)(b.$, {
                ref: eb,
                type: "button",
                color: "outlineGhost",
                size: "actionSm",
                "aria-label": e,
                loading: em,
                disabled: n,
                onClick: eD,
                children: t,
              })),
              (B[50] = em),
              (B[51] = e),
              (B[52] = n),
              (B[53] = t),
              (B[54] = a))
            : (a = B[54]),
          (x = a))
      }
      return (
        B[55] !== ec ||
        B[56] !== et ||
        B[57] !== ev?.id ||
        B[58] !== Z ||
        B[59] !== e_ ||
        B[60] !== ei ||
        B[61] !== en ||
        B[62] !== em ||
        B[63] !== ef ||
        B[64] !== ej ||
        B[65] !== eu
          ? ((_ =
              ef && !et && null != Z
                ? null
                : (0, i.jsxs)("form", {
                    className: "flex flex-wrap justify-end gap-3",
                    "aria-busy": et,
                    onSubmit: (e) => {
                      ;(e.preventDefault(), et || em || ef || (e_ ? eD() : en(ev?.id)))
                    },
                    children: [
                      (0, i.jsx)(b.$, {
                        type: "button",
                        color: "outlineGhost",
                        size: "formAction",
                        disabled: et || em,
                        onClick: ef ? () => eg(!1) : ei,
                        children: eu(G.back),
                      }),
                      !ef &&
                        (0, i.jsx)(b.$, {
                          ref: e_ ? eb : void 0,
                          type: "submit",
                          color: "chatgptPrimary",
                          size: "formAction",
                          loading: (et && !ec) || (e_ && em),
                          disabled: et || em || ef,
                          sizingLabels: [ej],
                          children: ej,
                        }),
                    ],
                  })),
            (B[55] = ec),
            (B[56] = et),
            (B[57] = ev?.id),
            (B[58] = Z),
            (B[59] = e_),
            (B[60] = ei),
            (B[61] = en),
            (B[62] = em),
            (B[63] = ef),
            (B[64] = ej),
            (B[65] = eu),
            (B[66] = _))
          : (_ = B[66]),
        B[67] !== et || B[68] !== Z || B[69] !== ei || B[70] !== em || B[71] !== ef || B[72] !== eu
          ? ((j =
              Z &&
              (0, i.jsxs)(b.$, {
                type: "button",
                color: "ghost",
                size: "toolbar",
                className: "-ms-2 mb-1 gap-1 text-secondary",
                disabled: et || em,
                onClick: ef ? () => eg(!1) : ei,
                children: [(0, i.jsx)(F.mSV, {}), eu(G.goBack)],
              })),
            (B[67] = et),
            (B[68] = Z),
            (B[69] = ei),
            (B[70] = em),
            (B[71] = ef),
            (B[72] = eu),
            (B[73] = j))
          : (j = B[73]),
        B[74] !== Z || B[75] !== eu
          ? ((k = Z ?? (0, i.jsx)("h2", { children: eu(G.title) })), (B[74] = Z), (B[75] = eu), (B[76] = k))
          : (k = B[76]),
        B[77] !== H || B[78] !== k
          ? ((S = (0, i.jsx)(w.c7, { title: k, subtitle: H, subtitleTone: "secondary" })),
            (B[77] = H),
            (B[78] = k),
            (B[79] = S))
          : (S = B[79]),
        B[80] !== L.billing_adjustment?.type || B[81] !== eu
          ? ((P =
              L.billing_adjustment?.type === "billing_cycle_reset" &&
              (0, i.jsx)("p", {
                className: "mt-2 text-sm leading-5 text-token-text-secondary",
                children: eu(G.billingResetDescription),
              })),
            (B[80] = L.billing_adjustment?.type),
            (B[81] = eu),
            (B[82] = P))
          : (P = B[82]),
        B[83] !== j || B[84] !== S || B[85] !== P
          ? ((M = (0, i.jsxs)("div", { className: "min-w-0", children: [j, S, P] })),
            (B[83] = j),
            (B[84] = S),
            (B[85] = P),
            (B[86] = M))
          : (M = B[86]),
        B[87] !== et || B[88] !== Q || B[89] !== eu
          ? ((C =
              Q &&
              (0, i.jsx)(b.$, {
                type: "button",
                color: "ghost",
                size: "toolbar",
                className: "-m-1 shrink-0",
                "aria-label": eu(G.close),
                disabled: et,
                onClick: Q,
                children: (0, i.jsx)(F.pgK, {}),
              })),
            (B[87] = et),
            (B[88] = Q),
            (B[89] = eu),
            (B[90] = C))
          : (C = B[90]),
        B[91] !== M || B[92] !== C
          ? ((A = (0, i.jsxs)(i.Fragment, { children: [M, C] })), (B[91] = M), (B[92] = C), (B[93] = A))
          : (A = B[93]),
        B[94] !== eA ||
        B[95] !== ek.seatCounts ||
        B[96] !== eP ||
        B[97] !== eT ||
        B[98] !== eq ||
        B[99] !== Z ||
        B[100] !== eS ||
        B[101] !== eR ||
        B[102] !== L.currency ||
        B[103] !== eN ||
        B[104] !== eu
          ? ((I =
              (eP.standard > 0 || eP.premium > 0) &&
              (0, i.jsx)(D, {
                compact: !0,
                showTiming: null == Z,
                ariaLabel: eu(G.purchaseSummary),
                currency: L.currency,
                billingPeriod: eS.billingPeriod,
                initialSeatCounts: ek.seatCounts,
                updatedSeatCounts: eA,
                immediateSeatAdditions: eP,
                showPremiumSeats: !!eA.premium,
                standardSeatPricePerBillingPeriod: (eN ?? 0) / eT,
                premiumSeatPricePerBillingPeriod: (eR ?? 0) / eT,
                showPriceChange: eq,
              })),
            (B[94] = eA),
            (B[95] = ek.seatCounts),
            (B[96] = eP),
            (B[97] = eT),
            (B[98] = eq),
            (B[99] = Z),
            (B[100] = eS),
            (B[101] = eR),
            (B[102] = L.currency),
            (B[103] = eN),
            (B[104] = eu),
            (B[105] = I))
          : (I = B[105]),
        B[106] !== L
          ? ((N = (0, i.jsx)(W, { quote: L, showPaymentMethod: !1 })), (B[106] = L), (B[107] = N))
          : (N = B[107]),
        B[108] !== et ||
        B[109] !== eB?.card_last4 ||
        B[110] !== eE ||
        B[111] !== ev ||
        B[112] !== e_ ||
        B[113] !== E ||
        B[114] !== x ||
        B[115] !== ef ||
        B[116] !== eu
          ? ((R =
              ef && !et
                ? (0, i.jsxs)("section", {
                    "aria-label": eu(G.paymentMethod),
                    className: "rounded-xl border border-token-border-default p-4",
                    children: [
                      (0, i.jsx)("p", {
                        className: "mb-3 text-sm font-medium text-token-text-primary",
                        children: eu(G.paymentMethod),
                      }),
                      (0, i.jsx)($, {
                        owner: E,
                        selectedId: ev?.id,
                        onCancel: () => {
                          ;((ey.current = !0), eg(!1))
                        },
                        onSelect: (e, t) => {
                          ;(ex({ id: e, label: t }), eg(!1))
                        },
                      }),
                    ],
                  })
                : (eB?.card_last4 || ev || e_) &&
                  (0, i.jsx)(z, {
                    compact: !0,
                    label: eu(G.paymentMethod),
                    icon: (0, i.jsx)(K, { "aria-hidden": !0, className: "h-5 w-6 shrink-0" }),
                    paymentMethod: ev?.label ?? eE,
                    action: x,
                  })),
            (B[108] = et),
            (B[109] = eB?.card_last4),
            (B[110] = eE),
            (B[111] = ev),
            (B[112] = e_),
            (B[113] = E),
            (B[114] = x),
            (B[115] = ef),
            (B[116] = eu),
            (B[117] = R))
          : (R = B[117]),
        B[118] !== R
          ? ((T = (0, i.jsx)(d.Suspense, { fallback: null, children: R })), (B[118] = R), (B[119] = T))
          : (T = B[119]),
        B[120] !== es || B[121] !== _ || B[122] !== A || B[123] !== I || B[124] !== N || B[125] !== T
          ? ((q = (0, i.jsxs)(U, { compact: !0, footer: _, header: A, children: [I, N, T, es] })),
            (B[120] = es),
            (B[121] = _),
            (B[122] = A),
            (B[123] = I),
            (B[124] = N),
            (B[125] = T),
            (B[126] = q))
          : (q = B[126]),
        q
      )
    }
    var Z = a("Kwur"),
      H = a("H3ts")
    function Q(e, t) {
      return Z.Request.safeGet("/payments/transaction-history", {
        ...(0, H.M)(e),
        parameters: { query: { account_id: e.accountId, cursor: t } },
      })
    }
    async function X(e, t) {
      let a,
        i = [],
        n = new Set()
      for (;;) {
        let r = await Q(e, a)
        for (let e of r.transactions)
          if ("invoice" === e.type)
            if ("string" == typeof t) {
              if (e.id === t) return [e]
            } else
              (function (e, t) {
                let a = Date.parse(e.created_at),
                  i = e.product
                if (
                  !Number.isFinite(a) ||
                  a < t.submittedAt ||
                  t.previousInvoiceIds.includes(e.id) ||
                  (null != t.invoiceId && e.id !== t.invoiceId) ||
                  e.amount !== t.amount ||
                  e.currency.toUpperCase() !== t.currency.toUpperCase() ||
                  i?.type !== "subscription" ||
                  !i.is_seat_purchase ||
                  !i.seat_quantities
                )
                  return !1
                let n = new Map(i.seat_quantities.map((e) => [e.seat_type, e.quantity_delta]))
                return (n.get("default") ?? 0) === t.standard && (n.get("prolite") ?? 0) === t.premium
              })(e, t) && i.push(e)
        let s = r.next_cursor
        if (
          !s ||
          n.has(s) ||
          ("string" != typeof t && r.transactions.some((e) => Date.parse(e.created_at) < t.submittedAt))
        )
          return i
        ;(n.add(s), (a = s))
      }
    }
    let ee = (0, c.YK)({
      choose: {
        id: "codex.businessSeatCheckout.chooseSeatInvoice",
        defaultMessage: "Select the invoice for this seat purchase from your billing history.",
      },
      chooseInvoice: { id: "codex.businessSeatCheckout.useSeatInvoice", defaultMessage: "Use invoice {id}" },
      invoiceStatus: {
        id: "codex.businessSeatCheckout.seatInvoiceStatus",
        defaultMessage:
          "{date} \xb7 {status, select, paid {Paid} void {Void} due {Due} uncollectible {Uncollectible} other {Draft}}",
      },
      selected: { id: "codex.businessSeatCheckout.checkSeatInvoice", defaultMessage: "Checking invoice {id}." },
    })
    function et(e) {
      let t,
        a,
        r,
        s,
        l,
        d,
        c,
        p,
        m = (0, n.c)(32),
        { owner: h, operation: f, onSelect: g } = e,
        y = (0, u.A)()
      ;(m[0] !== f.attemptId || m[1] !== h.accountId || m[2] !== h.userId
        ? ((t = ["workspace", h.accountId, "business-seat-checkout-invoices", h.userId, f.attemptId]),
          (m[0] = f.attemptId),
          (m[1] = h.accountId),
          (m[2] = h.userId),
          (m[3] = t))
        : (t = m[3]),
        m[4] !== f || m[5] !== h ? ((a = () => X(h, f)), (m[4] = f), (m[5] = h), (m[6] = a)) : (a = m[6]))
      let v = !f.invoiceId
      m[7] !== t || m[8] !== a || m[9] !== v
        ? ((r = { queryKey: t, queryFn: a, enabled: v, staleTime: 0, retry: !1 }),
          (m[7] = t),
          (m[8] = a),
          (m[9] = v),
          (m[10] = r))
        : (r = m[10])
      let { data: x } = (0, o.I)(r)
      if (f.invoiceId) {
        let e, t
        return (
          m[11] !== y || m[12] !== f.invoiceId
            ? ((e = y.formatMessage(ee.selected, { id: f.invoiceId })), (m[11] = y), (m[12] = f.invoiceId), (m[13] = e))
            : (e = m[13]),
          m[14] !== e ? ((t = (0, i.jsx)("p", { children: e })), (m[14] = e), (m[15] = t)) : (t = m[15]),
          t
        )
      }
      if (!x?.length) return null
      if (
        (m[16] !== y ? ((s = y.formatMessage(ee.choose)), (m[16] = y), (m[17] = s)) : (s = m[17]),
        m[18] !== s ? ((l = (0, i.jsx)("p", { children: s })), (m[18] = s), (m[19] = l)) : (l = m[19]),
        m[20] !== y || m[21] !== x || m[22] !== g)
      ) {
        let e
        ;(m[24] !== y || m[25] !== g
          ? ((e = (e) =>
              (0, i.jsxs)(
                "li",
                {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    (0, i.jsx)("span", {
                      children: y.formatMessage(ee.invoiceStatus, {
                        date: y.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                        status: e.status,
                      }),
                    }),
                    (0, i.jsx)(b.$, {
                      size: "dialogAction",
                      color: "secondary",
                      onClick: () => g(e.id),
                      children: y.formatMessage(ee.chooseInvoice, { id: e.id }),
                    }),
                  ],
                },
                e.id,
              )),
            (m[24] = y),
            (m[25] = g),
            (m[26] = e))
          : (e = m[26]),
          (d = x.map(e)),
          (m[20] = y),
          (m[21] = x),
          (m[22] = g),
          (m[23] = d))
      } else d = m[23]
      return (
        m[27] !== d
          ? ((c = (0, i.jsx)("ul", { className: "mt-2 flex flex-col gap-2", children: d })), (m[27] = d), (m[28] = c))
          : (c = m[28]),
        m[29] !== l || m[30] !== c
          ? ((p = (0, i.jsxs)("div", { children: [l, c] })), (m[29] = l), (m[30] = c), (m[31] = p))
          : (p = m[31]),
        p
      )
    }
    var ea = a("GaEn"),
      ei = a("eShZ")
    async function en(e, t, a, i, n) {
      let r = performance.now(),
        s = "error"
      e.count("payments", "business_seat_checkout.started", { stage: t })
      try {
        let e = await i()
        return ((s = n(e)), e)
      } catch (e) {
        throw (e instanceof ei.FetchError && (s = `http_${Math.floor(e.status / 100)}xx`), e)
      } finally {
        let i = { stage: t, outcome: s }
        ;(e.count("payments", "business_seat_checkout.finished", i),
          e.hist("payments", "business_seat_checkout.duration_ms", i, performance.now() - r),
          "ready" !== s &&
            "paid" !== s &&
            (0, y.z)(Error("Business seat checkout did not complete"), {
              ...i,
              flow_id: a.flow_id,
              mutation_attempt_id: a.mutation_attempt_id,
            }))
      }
    }
    async function er(e, t, a, i) {
      let [n] = await X(e, i),
        r = t.read()
      return (
        n?.status === "void" && r?.state === "verification" && r.intentId === a && r.invoiceId === i && (t.clear(), !0)
      )
    }
    async function es(e, t) {
      let a = t.read()
      if (a?.state === "paid") return !0
      if (a?.intentId && a.invoiceId) {
        var i
        let n,
          r,
          { intentId: s, invoiceId: o } = a
        if (
          null !=
          (
            await ((n = "/subscriptions/update/complete_payment"),
            (r = {
              requestBody: {
                account_id: e.accountId,
                expected_payment_intent_id: (i = { expectedPaymentIntentId: s, pendingUpdateInvoiceId: o })
                  .expectedPaymentIntentId,
                pending_update_invoice_id: i.pendingUpdateInvoiceId,
              },
            }),
            Z.Request.safePost(n, { ...r, ...(0, H.M)(e) })).catch(async (a) => {
              throw (await er(e, t, s, o), a)
            })
          ).status
        ) {
          if (await er(e, t, s, o)) throw Error("invoice_void")
          return !1
        }
        return (t.write({ ...a, state: "paid" }), !0)
      }
      if (a?.operation?.invoiceId) {
        let [i] = await X(e, a.operation),
          n = t.read()
        if (n?.operation?.attemptId !== a.operation.attemptId || n.operation.invoiceId !== a.operation.invoiceId)
          throw Error("checkout_changed")
        if (i?.status === "paid") return (t.write({ ...n, state: "paid" }), !0)
        if (i?.status === "void") throw (t.clear(), Error("invoice_void"))
      }
      return !1
    }
    function eo(e) {
      return 1 === e.status && !e.is_scim_managed && !!e.email_address
    }
    function el(e) {
      return "all" !== e && !Array.isArray(e)
    }
    function ed(e, t, a, i, n = 25) {
      return Z.Request.safeGet("/accounts/{account_id}/invites", {
        ...(0, H.M)(e),
        cache: "no-store",
        signal: i,
        parameters: {
          path: { account_id: e.accountId },
          query: { include_pending: !1, include_requests: !0, request_type: "join", limit: n, offset: t, query: a },
        },
      })
    }
    async function ec(e, t, a, i) {
      let n = [
          ["workspace", t.accountId, "join-approval", t.userId],
          ["workspace", t.accountId, "invites", "requests", "join"],
        ],
        r = new Set(a.map(({ id: e }) => e)),
        s = () => Promise.all(n.map((t) => e.invalidateQueries({ queryKey: t })))
      for (let t of (await s(), [500, 2e3, 8e3])) {
        if (
          !n.some((t) =>
            e.getQueriesData({ queryKey: t, type: "active" }).some(([, e]) => e?.items.some(({ id: e }) => r.has(e))),
          ) ||
          !i() ||
          (await new Promise((e) => window.setTimeout(e, t)), !i())
        )
          return
        await s()
      }
    }
    class eu extends Error {}
    async function ep(e, t) {
      if (!t.email_address || t.is_scim_managed || 1 !== t.status) throw new eu("request_changed")
      let a = (await ed(e, 0, t.email_address)).items.find(
        (e) =>
          e.id === t.id &&
          1 === e.status &&
          !e.is_scim_managed &&
          e.email_address === t.email_address &&
          e.created_time === t.created_time,
      )
      if (!a) throw new eu("request_changed")
      return a
    }
    async function em(e, t) {
      if (!ex(await ep(e, t), t)) throw new eu("request_changed")
    }
    function eh(e, t) {
      return Z.Request.safePatch("/accounts/{account_id}/invites/{invite_id}", {
        ...(0, H.M)(e),
        parameters: { path: { account_id: e.accountId, invite_id: t.id } },
        requestBody: { accept_request: !0 },
      })
    }
    let ef = ["standard-user", "analytics-viewer", "account-admin", "account-owner"]
    async function eg(e) {
      let t = new Map(),
        a = 0
      for (;;) {
        let i = await ed(e, a)
        for (let e of i.items) 1 === e.status && t.set(e.id, e)
        if (((a += i.items.length), !i.items.length || a >= i.total)) return [...t.values()]
      }
    }
    async function ey(e, t, a) {
      for (let i of t) {
        if (!a()) throw Error("workspace_changed")
        await eh(e, i)
      }
    }
    function eb(e) {
      return JSON.stringify(
        e
          .map(({ id: e, created_time: t, role: a, seat_type: i, email_address: n }) => [e, t, a, i, n])
          .sort(([e], [t]) => String(e).localeCompare(String(t))),
      )
    }
    function ev(e) {
      var t
      let a
      return (
        (t = (e) => "boolean" == typeof e.bulk && Array.isArray(e.requests)),
        (a = JSON.stringify(["workspace-join-seat", e.accountId, e.userId])),
        {
          read() {
            let e = localStorage.getItem(a)
            if (null == e) return null
            let i = JSON.parse(e)
            if (!i || !["submitted", "paid", "verification"].includes(i.state) || !t(i)) throw Error("unknown_payment")
            return i
          },
          write: (e) => localStorage.setItem(a, JSON.stringify(e)),
          clear: () => localStorage.removeItem(a),
        }
      )
    }
    function ex(e, t) {
      return (
        e.id === t.id &&
        e.created_time === t.created_time &&
        e.role === t.role &&
        (e.seat_type ?? "default") === (t.seat_type ?? "default")
      )
    }
    async function ew(e, t, a) {
      let i = ev(e).read()
      if (i?.state !== "paid") throw Error("payment_unconfirmed")
      if (el(t) && !i.bulk && i.requests.some((e) => ex(t, e))) {
        let i = await (async function (e, t) {
          try {
            return (await em(e, t), !0)
          } catch (a) {
            if (!(a instanceof eu) || !t.email_address) throw a
            if (
              (
                await Z.Request.safeGet("/accounts/{account_id}/users", {
                  ...(0, H.M)(e),
                  parameters: {
                    path: { account_id: e.accountId },
                    query: { query: t.email_address, limit: 25, offset: 0 },
                  },
                })
              ).items.some(
                (e) =>
                  !e.deactivated_time &&
                  e.email?.toLowerCase() === t.email_address?.toLowerCase() &&
                  e.role === t.role &&
                  (e.seat_type ?? "default") === (t.seat_type ?? "default"),
              )
            )
              return !1
            throw a
          }
        })(e, t)
        if (!a()) throw Error("workspace_changed")
        return (i && (await eh(e, t)), 1)
      }
      let n = await eg(e),
        r = new Map(i.requests.map((e) => [e.id, e])),
        s = n.filter((e) => {
          let t = r.get(e.id)
          return null != t && ex(e, t) && !e.is_scim_managed
        })
      return (await ey(e, s, a), s.length)
    }
    var e_ = a("zdJD"),
      ej = a("hwkA"),
      ek = a("AEu9"),
      eS = a("vjxO"),
      eP = a("LhhH"),
      eM = a("Sezd"),
      eC = a("bqtn"),
      eA = a("f38C")
    let eI = (0, c.YK)({
        missingDate: { id: "codex.joinApproval.missingDate", defaultMessage: "\u2014" },
        actions: { id: "codex.joinApproval.rowActions", defaultMessage: "Actions" },
        requesterActions: { id: "codex.joinApproval.requesterActions", defaultMessage: "More actions for {email}" },
        reject: { id: "codex.joinApproval.reject", defaultMessage: "Reject" },
        denyRequest: { id: "codex.joinApproval.modal.denyRequest", defaultMessage: "Deny request" },
        accept: { id: "codex.joinApproval.rowAccept", defaultMessage: "Accept" },
        request: { id: "codex.joinApproval.requestColumn", defaultMessage: "Request" },
        joinWorkspace: { id: "codex.joinApproval.joinWorkspaceType", defaultMessage: "Join workspace" },
        dateRequested: { id: "codex.joinApproval.dateRequested", defaultMessage: "Date requested" },
        email: { id: "codex.joinApproval.memberEmail", defaultMessage: "Email" },
        role: { id: "codex.joinApproval.memberRole", defaultMessage: "Role" },
        seatType: { id: "codex.joinApproval.seatType", defaultMessage: "Seat type" },
        seat: {
          id: "codex.joinApproval.requestedSeat",
          defaultMessage: "{tier, select, prolite {Premium} usage_based {Usage-based} other {Standard}}",
        },
        seatOption: {
          id: "codex.joinApproval.modal.seatOption",
          defaultMessage: "{tier, select, prolite {Premium seat} usage_based {Usage-based seat} other {Standard seat}}",
        },
        changeSeat: { id: "codex.joinApproval.modal.changeSeat", defaultMessage: "Change seat type for {email}" },
        changeRole: { id: "codex.joinApproval.changeRole", defaultMessage: "Change role for {email}" },
        memberRole: {
          id: "codex.joinApproval.requestedRole",
          defaultMessage: "{role, select, owner {Owner} admin {Admin} analytics {Analytics viewer} other {Member}}",
        },
        selectMember: { id: "codex.joinApproval.selectMember", defaultMessage: "Select {email}" },
        selectPage: { id: "codex.joinApproval.selectPage", defaultMessage: "Select all requests on this page" },
      }),
      eN = ["default", "prolite"]
    function eR(e) {
      let t,
        a,
        r,
        s,
        o = (0, n.c)(31),
        {
          requests: l,
          selected: d,
          busy: c,
          loadingRow: p,
          onSelect: m,
          onReject: h,
          paymentRequests: f,
          canChoosePremium: g,
          onSeatChange: y,
        } = e,
        { formatMessage: b } = (0, u.A)()
      o[0] !== b ? ((t = (e) => b(eI.seatOption, { tier: e })), (o[0] = b), (o[1] = t)) : (t = o[1])
      let v = t
      o[2] !== v ? ((a = eN.map((e) => ({ value: e, label: v(e) }))), (o[2] = v), (o[3] = a)) : (a = o[3])
      let x = a
      if (
        o[4] !== c ||
        o[5] !== g ||
        o[6] !== p ||
        o[7] !== h ||
        o[8] !== y ||
        o[9] !== m ||
        o[10] !== f ||
        o[11] !== l ||
        o[12] !== v ||
        o[13] !== x ||
        o[14] !== d ||
        o[15] !== b
      ) {
        let e
        ;(o[17] !== c ||
        o[18] !== g ||
        o[19] !== p ||
        o[20] !== h ||
        o[21] !== y ||
        o[22] !== m ||
        o[23] !== f ||
        o[24] !== v ||
        o[25] !== x ||
        o[26] !== d ||
        o[27] !== b
          ? ((e = (e) => {
              let t = e.email_address,
                a = e.account_user_name,
                n = e.seat_type ?? "default",
                r = c || !eo(e),
                s =
                  r ||
                  !!f?.some((t) => {
                    let { id: a } = t
                    return a === e.id
                  })
              return (0, i.jsxs)(
                "li",
                {
                  className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4 first:pt-2 last:pb-0",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "min-w-24 flex-1",
                      children: [
                        a && (0, i.jsx)("div", { className: "truncate font-medium", title: a, children: a }),
                        (0, i.jsx)("div", { className: "truncate text-secondary", title: t ?? void 0, children: t }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "relative flex shrink-0 items-center gap-3",
                      children: [
                        (g || "prolite" === n) && "usage_based" !== n
                          ? (0, i.jsx)(ek.l, {
                              "aria-label": b(eI.changeSeat, { email: t }),
                              variant: "outline",
                              pill: !0,
                              size: "md",
                              block: !1,
                              dropdownIconType: "chevronDown",
                              optionIndicatorPosition: "end",
                              options: x,
                              value: n,
                              disabled: s,
                              loading: p === `seat:${e.id}`,
                              onChange: (t) => {
                                let { value: a } = t
                                a !== n && y(e, a)
                              },
                            })
                          : (0, i.jsx)("span", { className: "text-secondary", children: v(n) }),
                        (0, i.jsx)(eM.S, {
                          "aria-label": b(eI.selectMember, { email: t }),
                          variant: "choice",
                          checked: d.has(e.id),
                          disabled: r,
                          onCheckedChange: (t) => m([e], t),
                        }),
                        (0, i.jsx)(eq, { compact: !0, request: e, disabled: s, onReject: h }),
                      ],
                    }),
                  ],
                },
                e.id,
              )
            }),
            (o[17] = c),
            (o[18] = g),
            (o[19] = p),
            (o[20] = h),
            (o[21] = y),
            (o[22] = m),
            (o[23] = f),
            (o[24] = v),
            (o[25] = x),
            (o[26] = d),
            (o[27] = b),
            (o[28] = e))
          : (e = o[28]),
          (r = l.map(e)),
          (o[4] = c),
          (o[5] = g),
          (o[6] = p),
          (o[7] = h),
          (o[8] = y),
          (o[9] = m),
          (o[10] = f),
          (o[11] = l),
          (o[12] = v),
          (o[13] = x),
          (o[14] = d),
          (o[15] = b),
          (o[16] = r))
      } else r = o[16]
      return (
        o[29] !== r
          ? ((s = (0, i.jsx)("ul", { className: "divide-y divide-token-border text-sm leading-5", children: r })),
            (o[29] = r),
            (o[30] = s))
          : (s = o[30]),
        s
      )
    }
    function eT(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        d,
        c,
        p,
        m = (0, n.c)(79),
        {
          requests: h,
          selected: f,
          busy: g,
          loadingRow: y,
          onSelect: b,
          onAccept: v,
          onReject: x,
          onRoleChange: w,
          paymentRequests: _,
        } = e,
        { formatMessage: j, formatDate: k } = (0, u.A)()
      m[0] !== j
        ? ((t = (e) => j(eI.memberRole, { role: "analytics-viewer" === e ? "analytics" : e.replace("account-", "") })),
          (m[0] = j),
          (m[1] = t))
        : (t = m[1])
      let S = t
      if (
        m[2] !== g ||
        m[3] !== k ||
        m[4] !== y ||
        m[5] !== v ||
        m[6] !== x ||
        m[7] !== w ||
        m[8] !== b ||
        m[9] !== _ ||
        m[10] !== h ||
        m[11] !== S ||
        m[12] !== f ||
        m[13] !== j
      ) {
        let e, t, n, d, c, u, p, P, M, C, A, I, N, R, T, q, D, B
        m[19] !== S ? ((e = (e) => ({ value: e, label: S(e) })), (m[19] = S), (m[20] = e)) : (e = m[20])
        let E = ef.map(e)
        if (m[21] !== h || m[22] !== f) {
          let e
          ;((t = h.filter(eo)),
            m[25] !== f ? ((e = (e) => f.has(e.id)), (m[25] = f), (m[26] = e)) : (e = m[26]),
            (n = t.filter(e)),
            (m[21] = h),
            (m[22] = f),
            (m[23] = t),
            (m[24] = n))
        } else ((t = m[23]), (n = m[24]))
        let O = n.length,
          L = O > 0 && O === t.length
        ;((l = "overflow-x-auto"),
          (s = "w-full min-w-[860px] table-fixed text-start text-form-body"),
          m[27] !== j ? ((d = j(eI.selectPage)), (m[27] = j), (m[28] = d)) : (d = m[28]))
        let U = g || !t.length,
          z = O > 0 && !L ? "indeterminate" : L
        ;(m[29] !== t || m[30] !== b
          ? ((c = (e) => {
              b(t, e)
            }),
            (m[29] = t),
            (m[30] = b),
            (m[31] = c))
          : (c = m[31]),
          m[32] !== U || m[33] !== z || m[34] !== c || m[35] !== d
            ? ((u = (0, i.jsx)("th", {
                scope: "col",
                className: "w-8 py-2 text-start",
                children: (0, i.jsx)(eM.S, { "aria-label": d, disabled: U, checked: z, onCheckedChange: c }),
              })),
              (m[32] = U),
              (m[33] = z),
              (m[34] = c),
              (m[35] = d),
              (m[36] = u))
            : (u = m[36]),
          m[37] !== j ? ((p = j(eI.email)), (m[37] = j), (m[38] = p)) : (p = m[38]),
          m[39] !== p
            ? ((P = (0, i.jsx)("th", { scope: "col", className: "py-2 text-start font-medium", children: p })),
              (m[39] = p),
              (m[40] = P))
            : (P = m[40]),
          m[41] !== j ? ((M = j(eI.request)), (m[41] = j), (m[42] = M)) : (M = m[42]),
          m[43] !== M
            ? ((C = (0, i.jsx)("th", { scope: "col", className: "w-32 px-2 text-start font-medium", children: M })),
              (m[43] = M),
              (m[44] = C))
            : (C = m[44]),
          m[45] !== j ? ((A = j(eI.dateRequested)), (m[45] = j), (m[46] = A)) : (A = m[46]),
          m[47] !== A
            ? ((I = (0, i.jsx)("th", { scope: "col", className: "w-32 px-2 text-start font-medium", children: A })),
              (m[47] = A),
              (m[48] = I))
            : (I = m[48]),
          m[49] !== j ? ((N = j(eI.role)), (m[49] = j), (m[50] = N)) : (N = m[50]),
          m[51] !== N
            ? ((R = (0, i.jsx)("th", { scope: "col", className: "w-24 px-2 text-start font-medium", children: N })),
              (m[51] = N),
              (m[52] = R))
            : (R = m[52]),
          m[53] !== j ? ((T = j(eI.seatType)), (m[53] = j), (m[54] = T)) : (T = m[54]),
          m[55] !== T
            ? ((q = (0, i.jsx)("th", { scope: "col", className: "w-24 px-2 text-start font-medium", children: T })),
              (m[55] = T),
              (m[56] = q))
            : (q = m[56]),
          m[57] !== j ? ((D = j(eI.actions)), (m[57] = j), (m[58] = D)) : (D = m[58]),
          m[59] !== D
            ? ((B = (0, i.jsx)("th", { scope: "col", className: "w-32 px-2 text-end font-medium", children: D })),
              (m[59] = D),
              (m[60] = B))
            : (B = m[60]),
          m[61] !== u || m[62] !== P || m[63] !== C || m[64] !== I || m[65] !== R || m[66] !== q || m[67] !== B
            ? ((o = (0, i.jsx)("thead", {
                className: "border-b border-token-border text-start text-xs text-secondary",
                children: (0, i.jsxs)("tr", { children: [u, P, C, I, R, q, B] }),
              })),
              (m[61] = u),
              (m[62] = P),
              (m[63] = C),
              (m[64] = I),
              (m[65] = R),
              (m[66] = q),
              (m[67] = B),
              (m[68] = o))
            : (o = m[68]),
          (a = "divide-y divide-token-border"),
          (r = h.map((e) => {
            let t = e.email_address,
              a = e.account_user_name,
              n = g || !eo(e),
              r =
                n ||
                _?.some((t) => {
                  let { id: a } = t
                  return a === e.id
                }),
              s = E.find((t) => t.value === e.role),
              o = j(eI.seat, { tier: e.seat_type ?? "default" })
            return (0, i.jsxs)(
              "tr",
              {
                children: [
                  (0, i.jsx)("td", {
                    className: "py-3",
                    children: (0, i.jsx)(eM.S, {
                      "aria-label": j(eI.selectMember, { email: t }),
                      disabled: n,
                      checked: f.has(e.id),
                      onCheckedChange: (t) => {
                        b([e], t)
                      },
                    }),
                  }),
                  (0, i.jsx)("td", {
                    className: "min-w-0 py-3 pe-2",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, i.jsx)(eP.e, { alt: "", name: a || t || null, colorKey: t ?? e.id, src: null, size: "sm" }),
                        (0, i.jsxs)("div", {
                          className: "min-w-0",
                          children: [
                            a && (0, i.jsx)("div", { className: "truncate font-medium", children: a }),
                            (0, i.jsx)("div", { className: "truncate", title: t ?? void 0, children: t }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("td", { className: "px-2", children: j(eI.joinWorkspace) }),
                  (0, i.jsx)("td", {
                    className: "px-2",
                    children: e.created_time
                      ? k(e.created_time, { day: "numeric", month: "short", year: "numeric" })
                      : j(eI.missingDate),
                  }),
                  (0, i.jsx)("td", {
                    className: "px-2",
                    children:
                      s && e.email_address && !e.is_scim_managed && 1 === e.status
                        ? (0, i.jsx)(ek.l, {
                            "aria-label": j(eI.changeRole, { email: t }),
                            variant: "ghost",
                            loading: y === `role:${e.id}`,
                            size: "md",
                            block: !1,
                            opticallyAlign: "start",
                            optionIndicatorPosition: "end",
                            listMinWidth: 200,
                            triggerClassName: "text-secondary font-normal",
                            disabled: r,
                            options: E,
                            value: s.value,
                            onChange: (t) => {
                              let { value: a } = t
                              a !== e.role && w(e, a)
                            },
                          })
                        : S(e.role),
                  }),
                  (0, i.jsx)("td", { className: "px-2", children: o }),
                  (0, i.jsx)("td", {
                    className: "text-end whitespace-nowrap",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center justify-end gap-1",
                      children: [
                        (0, i.jsx)(ej.$, {
                          color: "secondary",
                          size: "sm",
                          variant: "outline",
                          pill: !0,
                          loading: y === e.id,
                          "aria-busy": y === e.id,
                          disabled: n,
                          onClick: () => v(e),
                          children: j(eI.accept),
                        }),
                        (0, i.jsx)(eq, { request: e, disabled: !!r, onReject: x }),
                      ],
                    }),
                  }),
                ],
              },
              e.id,
            )
          })),
          (m[2] = g),
          (m[3] = k),
          (m[4] = y),
          (m[5] = v),
          (m[6] = x),
          (m[7] = w),
          (m[8] = b),
          (m[9] = _),
          (m[10] = h),
          (m[11] = S),
          (m[12] = f),
          (m[13] = j),
          (m[14] = a),
          (m[15] = r),
          (m[16] = s),
          (m[17] = o),
          (m[18] = l))
      } else ((a = m[14]), (r = m[15]), (s = m[16]), (o = m[17]), (l = m[18]))
      return (
        m[69] !== a || m[70] !== r
          ? ((d = (0, i.jsx)("tbody", { className: a, children: r })), (m[69] = a), (m[70] = r), (m[71] = d))
          : (d = m[71]),
        m[72] !== s || m[73] !== o || m[74] !== d
          ? ((c = (0, i.jsxs)("table", { className: s, children: [o, d] })),
            (m[72] = s),
            (m[73] = o),
            (m[74] = d),
            (m[75] = c))
          : (c = m[75]),
        m[76] !== l || m[77] !== c
          ? ((p = (0, i.jsx)("div", { className: l, children: c })), (m[76] = l), (m[77] = c), (m[78] = p))
          : (p = m[78]),
        p
      )
    }
    function eq(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        d = (0, n.c)(24),
        { compact: c, request: p, disabled: m, onReject: h } = e,
        f = void 0 !== c && c,
        { formatMessage: g } = (0, u.A)(),
        y = f ? "compact" : void 0,
        b = f ? "opaque" : void 0,
        v = f ? void 0 : "xs"
      d[0] !== p.email_address || d[1] !== g
        ? ((t = g(eI.requesterActions, { email: p.email_address })), (d[0] = p.email_address), (d[1] = g), (d[2] = t))
        : (t = d[2])
      let x = f ? "lg" : "sm",
        w = f ? "sm" : "md"
      ;(d[3] !== m || d[4] !== t || d[5] !== x || d[6] !== w
        ? ((a = (0, i.jsx)(eA.p, { label: t, disabled: m, iconSize: x, size: w })),
          (d[3] = m),
          (d[4] = t),
          (d[5] = x),
          (d[6] = w),
          (d[7] = a))
        : (a = d[7]),
        d[8] !== h || d[9] !== p ? ((r = () => h(p)), (d[8] = h), (d[9] = p), (d[10] = r)) : (r = d[10]))
      let _ = f ? eI.denyRequest : eI.reject
      return (
        d[11] !== g || d[12] !== _ ? ((s = g(_)), (d[11] = g), (d[12] = _), (d[13] = s)) : (s = d[13]),
        d[14] !== m || d[15] !== s || d[16] !== r
          ? ((o = (0, i.jsx)(eC.ms.Item, {
              tone: "danger",
              leftIconAsset: eS.c,
              disabled: m,
              onSelect: r,
              children: s,
            })),
            (d[14] = m),
            (d[15] = s),
            (d[16] = r),
            (d[17] = o))
          : (o = d[17]),
        d[18] !== o || d[19] !== y || d[20] !== b || d[21] !== v || d[22] !== a
          ? ((l = (0, i.jsx)(eC.Ab, {
              align: "end",
              size: y,
              surface: b,
              contentWidth: v,
              triggerButton: a,
              children: o,
            })),
            (d[18] = o),
            (d[19] = y),
            (d[20] = b),
            (d[21] = v),
            (d[22] = a),
            (d[23] = l))
          : (l = d[23]),
        l
      )
    }
    let eD = (0, c.YK)({
      title: { id: "codex.joinApproval.title", defaultMessage: "Workspace join requests" },
      modalTitle: { id: "codex.joinApproval.modal.title", defaultMessage: "Pending join requests" },
      modalApprove: {
        id: "codex.joinApproval.modal.approve",
        defaultMessage: "Approve {count, plural, one {# request} other {# requests}}",
      },
      modalConfirm: { id: "codex.joinApproval.modal.confirmPurchase", defaultMessage: "Confirm purchase" },
      additionalSeats: {
        id: "codex.joinApproval.purchase.title",
        defaultMessage: "{count, plural, one {# additional seat required} other {# additional seats required}}",
      },
      additionalSeatsDetail: {
        id: "codex.joinApproval.purchase.description",
        defaultMessage:
          "To add these members to the workspace, you must purchase {count, plural, one {# additional seat} other {# additional seats}}.",
      },
      checkout: {
        id: "codex.joinApproval.checkout",
        defaultMessage: "Buy {count, plural, one {a seat} other {# seats}}?",
      },
      empty: {
        id: "codex.joinApproval.empty",
        defaultMessage: "You\u2019re all caught up. There are no pending requests.",
      },
      loading: { id: "codex.joinApproval.loading", defaultMessage: "Loading requests\u2026" },
      roleSyncing: {
        id: "codex.joinApproval.roleSyncing",
        defaultMessage: "Role saved. The request for {email} is still updating. Try approval again in a moment.",
      },
      roleChangeFailed: {
        id: "codex.joinApproval.roleChangeFailed",
        defaultMessage: "Couldn\u2019t change the role for {email}. Try selecting the role again.",
      },
      seatSyncing: {
        id: "codex.joinApproval.modal.seatSyncing",
        defaultMessage: "Seat type saved. The request for {email} is still updating. Try approval again in a moment.",
      },
      seatChangeFailed: {
        id: "codex.joinApproval.modal.seatChangeFailed",
        defaultMessage: "Couldn\u2019t change the seat type for {email}. Try selecting the seat again.",
      },
      rejected: { id: "codex.joinApproval.rejected", defaultMessage: "Rejected the request from {email}." },
      rejectionFailed: {
        id: "codex.joinApproval.rejectionFailed",
        defaultMessage: "Couldn\u2019t reject the request from {email}. Review its status and try again.",
      },
      approved: { id: "codex.joinApproval.approved", defaultMessage: "Accepted the invite for {email}." },
      approvedAll: {
        id: "codex.joinApproval.approvedAll",
        defaultMessage: "{count, plural, one {Accepted # invite.} other {Accepted # invites.}}",
      },
      handled: { id: "codex.joinApproval.handled", defaultMessage: "These invites have already been handled." },
      earlier: {
        id: "codex.joinApproval.earlier",
        defaultMessage: "Your earlier seat purchase has been processed. Review the remaining invites.",
      },
      bulkDetail: {
        id: "codex.joinApproval.bulkDetail",
        defaultMessage:
          "Your workspace needs more seats to accept {count, plural, one {this invite} other {these # invites}}.",
      },
      standardSeats: {
        id: "codex.joinApproval.standardSeats",
        defaultMessage: "{count, plural, one {# Standard seat} other {# Standard seats}}",
      },
      premiumSeats: {
        id: "codex.joinApproval.premiumSeats",
        defaultMessage: "{count, plural, one {# Premium seat} other {# Premium seats}}",
      },
      detail: {
        id: "codex.joinApproval.detail",
        defaultMessage:
          "{email} requested a {tier, select, prolite {Premium} other {Standard}} seat. Your workspace has no available seats of this type.",
      },
      selectedPeople: { id: "codex.joinApproval.selectedPeople", defaultMessage: "Selected people" },
      acceptAllWithCount: {
        id: "codex.joinApproval.acceptAllWithCount",
        defaultMessage: "Accept all ({count, number})",
      },
      acceptSelected: { id: "codex.joinApproval.acceptSelected", defaultMessage: "Accept selected ({count, number})" },
      search: { id: "codex.joinApproval.searchMembers", defaultMessage: "Search members" },
      noMatches: { id: "codex.joinApproval.noMatchingRequests", defaultMessage: "No matching requests." },
      retry: { id: "codex.joinApproval.retry", defaultMessage: "Try again" },
      selectionChanged: {
        id: "codex.joinApproval.selectionChanged",
        defaultMessage: "Workspace requests or available seats changed. Review the requests before continuing.",
      },
      failed: {
        id: "codex.joinApproval.failed",
        defaultMessage: "We couldn\u2019t complete this request. Check its status or open workspace settings.",
      },
      verify: {
        id: "codex.joinApproval.verify",
        defaultMessage: "Open billing to verify this payment, then return here to check its status.",
      },
      billing: { id: "codex.joinApproval.billing", defaultMessage: "Open billing" },
      pending: {
        id: "codex.joinApproval.pending",
        defaultMessage: "Payment is still pending. Check your billing history before approving this request.",
      },
      paid: {
        id: "codex.joinApproval.paid",
        defaultMessage: "The seat purchase succeeded. Try again to finish accepting the invites.",
      },
      declined: {
        id: "codex.joinApproval.declined",
        defaultMessage: "Payment needs attention. Review your payment method in workspace settings.",
      },
      settings: { id: "codex.joinApproval.settings", defaultMessage: "Open workspace settings" },
      unavailable: {
        id: "codex.joinApproval.unavailable",
        defaultMessage: "This account can\u2019t review these requests.",
      },
      close: { id: "codex.joinApproval.close", defaultMessage: "Close" },
      previous: { id: "codex.joinApproval.previous", defaultMessage: "Previous" },
      next: { id: "codex.joinApproval.next", defaultMessage: "Next" },
    })
    function eB(e) {
      let t,
        a = (0, n.c)(2)
      return (
        a[0] !== e ? ((t = (0, i.jsx)(eE, { ...e, presentation: "modal" })), (a[0] = e), (a[1] = t)) : (t = a[1]),
        t
      )
    }
    function eE(e) {
      let t,
        a,
        c,
        C,
        A,
        I,
        N,
        R,
        T,
        q,
        D,
        B,
        E,
        O,
        L,
        U = (0, n.c)(47),
        { accountId: z, userId: F, initialTarget: K, onClose: $, onRequestsResolved: G, presentation: Y, entry: V } = e,
        ee = (0, l.gh)(k.u),
        ef = V ?? ("modal" === Y ? "home" : "activity"),
        ej = (0, u.A)(),
        ek = ej.formatMessage,
        eS = (0, s.jE)(),
        eP = { accountId: z, userId: F },
        eM = ev(eP),
        eC = (0, l.Ul)(g.PO),
        { data: eA } = (0, l._U)(f.sE, "modal" === Y ? z : null),
        eI = eA?.accounts[z],
        eN = eI?.entitlement?.has_active_subscription === !0 && !0 === eI.account.subscription_seat_pools_enabled
      U[0] !== z || U[1] !== F
        ? ((t = (e) =>
            !e.authLoading &&
            !e.accountLoading &&
            "chatgpt" === e.authMethod &&
            e.accountId === z &&
            e.authenticatedAccountId === z &&
            e.authenticatedUserId === F),
          (U[0] = z),
          (U[1] = F),
          (U[2] = t))
        : (t = U[2])
      let eq = t,
        eB = eq(eC)
      U[3] !== eq || U[4] !== ee ? ((a = () => eq(ee.get(g.PO))), (U[3] = eq), (U[4] = ee), (U[5] = a)) : (a = U[5])
      let eE = a,
        ez = (0, d.useId)(),
        eF = (0, d.useId)(),
        [eK, e$] = (0, d.useState)("")
      U[6] !== eK ? ((c = eK.trim()), (U[6] = eK), (U[7] = c)) : (c = U[7])
      let eG = (0, d.useDeferredValue)(c)
      U[8] === Symbol.for("react.memo_cache_sentinel") ? ((C = new Map()), (U[8] = C)) : (C = U[8])
      let [eY, eW] = (0, d.useState)(C)
      U[9] === Symbol.for("react.memo_cache_sentinel") ? ((A = new Set()), (U[9] = A)) : (A = U[9])
      let [eJ, eV] = (0, d.useState)(A),
        [eZ, eH] = (0, d.useState)(0),
        eQ = "modal" === Y ? 10 : 25,
        [eX, e0] = (0, d.useState)(null),
        [e1, e2] = (0, d.useState)(null),
        [e4, e5] = (0, d.useState)(null != K),
        [e3, e6] = (0, d.useState)(null),
        e7 = null != e3,
        e8 = (0, d.useRef)(!1)
      U[10] !== z || U[11] !== Y || U[12] !== F
        ? ((I = (e, t) => ("modal" === Y && t?.queryKey[1] === z && t.queryKey[3] === F ? e : void 0)),
          (U[10] = z),
          (U[11] = Y),
          (U[12] = F),
          (U[13] = I))
        : (I = U[13])
      let e9 = (0, o.I)({
          queryKey: ["workspace", z, "join-approval", F, eZ, eG, eQ],
          enabled: eB && !e4 && !eX,
          refetchOnMount: "modal" === Y || void 0,
          queryFn: async (e) => {
            let { signal: t } = e
            return { ...(await ed(eP, eZ, eG || void 0, t, eQ)), offset: eZ }
          },
          placeholderData: I,
          staleTime: 0,
        }),
        te = e9.isPlaceholderData
      U[14] !== eJ || U[15] !== Y || U[16] !== e9.data || U[17] !== eY
        ? ((N = "modal" === Y ? new Map(e9.data?.items.filter((e) => eo(e) && !eJ.has(e.id)).map(eU)) : eY),
          (U[14] = eJ),
          (U[15] = Y),
          (U[16] = e9.data),
          (U[17] = eY),
          (U[18] = N))
        : (N = U[18])
      let tt = N,
        ta = function () {
          ;((e8.current = !1), e6(null))
        },
        ti = function (e, t) {
          let a = tn(t)
          return (e0(null), e5(!1), e2(null), "modal" === Y && $(), G ? G(e, a) : ee.get(j.Id).success(e), a)
        }
      async function tn(e) {
        await Promise.all([
          ec(eS, eP, e, eE),
          ...["notifications-inbox", "notifications-grouped-inbox", "notifications-unread-count"].map((e) =>
            ee.queryClient.invalidateQueries({ queryKey: ["space", e, z, F] }),
          ),
        ])
      }
      let tr = function (e) {
          return !eM.read()?.requests.some((t) => {
            let { id: a } = t
            return a === e.id
          })
        },
        ts = async function (e, t) {
          if (e8.current || !eE() || !tr(e)) return
          let a = "role" in t ? "role" : "seat"
          ;((e8.current = !0), e6(`${a}:${e.id}`))
          let i = (0, h.dj)(ee),
            n = { entry: ef, action: "role" === a ? "change_role" : "change_seat_type", selection: "single" }
          i.count("teams", "join_approval.started", n)
          let r = `${a}_change_failed`
          await (async function (e, t, a, i) {
            if ((await em(e, t), !i())) throw new eu("request_changed")
            if (
              !(
                await Z.Request.safePatch("/accounts/{account_id}/invites/{invite_id}", {
                  ...(0, H.M)(e),
                  parameters: { path: { account_id: e.accountId, invite_id: t.id } },
                  requestBody: a,
                })
              ).success
            )
              throw Error("Could not update pending join request")
            let n = { ...t, ...a }
            for (let a of [0, 500, 1500, 3e3, 5e3, 1e4]) {
              if ((a > 0 && (await new Promise((e) => window.setTimeout(e, a))), !i())) break
              let r = await ep(e, t).catch((e) => {
                if (e instanceof eu) throw e
                return null
              })
              if (r && ex(r, n)) return !0
              if (r && !ex(r, t)) throw new eu("request_changed")
            }
            return !1
          })(eP, e, t, () => eE() && tr(e))
            .then((i) => {
              if (((r = i ? `${a}_changed` : `${a}_sync_pending`), !eE())) return
              let n = (a) => (a.id === e.id && a.created_time === e.created_time ? { ...a, ...t } : a),
                s = ["workspace", z, "join-approval", F]
              ;(eS.setQueriesData({ queryKey: s }, (e) => e && { ...e, items: e.items.map(n) }),
                eW((t) => {
                  let a = t.get(e.id)
                  return a ? new Map(t).set(e.id, n(a)) : t
                }),
                e2(i ? null : { type: "role" === a ? "roleSyncing" : "seatSyncing", target: e }),
                eS.invalidateQueries({ queryKey: s, refetchType: "none" }),
                eS.invalidateQueries({ queryKey: ["workspace", z, "invites", "requests", "join"] }))
            })
            .catch((t) => {
              eE() &&
                (t instanceof eu
                  ? ((r = "selection_changed"), ty([e], !1), e2({ type: "selectionChanged", target: e }))
                  : ((0, y.z)(Error("Workspace join request update did not complete"), n),
                    e2({ type: "role" === a ? "roleChangeFailed" : "seatChangeFailed", target: e })),
                e9.refetch())
            })
            .finally(() => {
              ;(ta(), i.count("teams", "join_approval.finished", { ...n, outcome: r }))
            })
        },
        to = async function (e) {
          if (e8.current || !eE() || !tr(e)) return
          ;((e8.current = !0), e6("reject"))
          let t = (0, h.dj)(ee),
            a = { entry: ef, action: "reject", selection: "single" }
          t.count("teams", "join_approval.started", a)
          let i = "rejection_failed"
          await (async function (e, t, a) {
            if ((await em(e, t), !a() || !t.email_address)) throw new eu("request_changed")
            await Z.Request.safeDelete("/accounts/{account_id}/invites", {
              ...(0, H.M)(e),
              parameters: { path: { account_id: e.accountId } },
              requestBody: { email_address: t.email_address },
            })
          })(eP, e, () => eE() && tr(e))
            .then(async () => {
              ;((i = "rejected"),
                eE() && (ty([e], !1), eH(0), await ti(ek(eD.rejected, { email: e.email_address }), [e])))
            })
            .catch((t) => {
              eE() &&
                (t instanceof eu
                  ? ((i = "selection_changed"), ty([e], !1), e2({ type: "selectionChanged", target: e }))
                  : "rejected" !== i &&
                    (e2({ type: "rejectionFailed", target: e }),
                    (0, y.z)(Error("Workspace join rejection did not complete"), a)),
                e9.refetch())
            })
            .finally(() => {
              ;(ta(), t.count("teams", "join_approval.finished", { ...a, outcome: i }))
            })
        },
        tl = async function (e, t, a, i) {
          if (e8.current || !eE()) return
          ;((e8.current = !0), e6(void 0 === i ? "primary" : i))
          let n = (0, h.dj)(ee),
            s = performance.now(),
            o = el(e) ? "single" : "selected",
            l = { entry: ef, action: t ? "confirm" : "accept", selection: "all" === e ? "all" : o },
            d = "interrupted"
          ;(n.count("teams", "join_approval.started", l),
            await (async () => {
              let i, s
              if (
                a &&
                (await (async function (e, t, a, i) {
                  let n = t.read()
                  if (n?.state !== "submitted" || n.operation?.attemptId !== a || n.operation.invoiceId)
                    throw Error("checkout_changed")
                  let r = await X(e, n.operation),
                    s = t.read()
                  if (
                    s?.state !== "submitted" ||
                    s.operation?.attemptId !== a ||
                    s.operation.invoiceId ||
                    !r.some((e) => e.id === i)
                  )
                    throw Error("invoice_changed")
                  t.write({ ...s, operation: { ...s.operation, invoiceId: i } })
                })(eP, eM, a.attemptId, a.id),
                !eE())
              )
                return
              let o = eM.read(),
                c = !1
              if (o) {
                if (!(await es(eP, eM))) {
                  ;((d = "payment_pending"),
                    e2({
                      type: "verification" === o.state ? "verify" : "pending",
                      operation: eM.read()?.operation,
                      target: e,
                    }))
                  return
                }
                if (el(e)) c = o.bulk || o.requests[0]?.id !== e.id
                else if ("all" === e) c = !o.bulk
                else {
                  let t = new Set(e.map(eL))
                  c = t.size !== o.requests.length || o.requests.some((e) => !t.has(e.id))
                }
                ;((i = o.requests), (s = await ew(eP, e, eE)), eM.clear())
              } else {
                let a = await (async function (e, t, a, i, n, r) {
                  let s = t,
                    o = n?.requests ?? t,
                    l = (async function (e, t) {
                      if (el(t)) return (await em(e, t), [t])
                      let a = await eg(e)
                      if ("all" === t) return a
                      let i = new Map(t.map((e) => [e.id, e]))
                      return a.filter((e) => {
                        let t = i.get(e.id)
                        if (!t) return !1
                        if (!ex(e, t) || e.email_address !== t.email_address) throw new eu("request_changed")
                        return !0
                      })
                    })(e, o),
                    d = (t) =>
                      t.some((e) => "usage_based" !== e.seat_type)
                        ? Z.Request.safeGet("/subscriptions", {
                            ...(0, H.M)(e),
                            parameters: { query: { account_id: e.accountId } },
                          })
                        : null,
                    [c, u] = await Promise.all([l, "all" === o ? l.then(d) : d(el(o) ? [o] : o)]),
                    p = c
                  if (p.some((e) => e.is_scim_managed || !e.email_address)) throw Error("manual_approval_unavailable")
                  if (n && eb(n.requests) !== eb(p)) throw new eu("request_changed")
                  if (p.every((e) => "usage_based" === e.seat_type)) return { requests: p, review: null }
                  if (!u) throw Error("unknown_capacity")
                  let m = p.some((e) => {
                      let t = e.seat_type ?? "default"
                      return ("default" === t || "prolite" === t) && null == M(u, t)
                    })
                      ? await Z.Request.safeGet("/accounts/{account_id}/users/seat_type_counts", {
                          ...(0, H.M)(e),
                          parameters: { path: { account_id: e.accountId } },
                        })
                      : void 0,
                    f = (function (e, t, a) {
                      let i = { default: 0, prolite: 0 }
                      for (let t of e) {
                        let e = t.seat_type ?? "default"
                        if ("usage_based" !== e) {
                          if ("default" !== e && "prolite" !== e) throw Error("unsupported_seat")
                          i[e] += 1
                        }
                      }
                      let n = { seat_capacity: t.seat_capacity ?? [] },
                        r = (e) => {
                          let a = "default" !== e || P(n, "prolite") ? 0 : (t.seats_entitled ?? 0 / 0)
                          return P(n, e, a)
                        },
                        s = (e) => {
                          if (!i[e]) return 0
                          let t = M(n, e) ?? (a && Math.max(0, r(e) - (a[e] ?? 0)))
                          if (null == t || !Number.isSafeInteger(t) || t < 0) throw Error("unknown_capacity")
                          return Math.max(0, i[e] - t)
                        },
                        o = { standard: s("default"), premium: s("prolite") }
                      if (o.standard + o.premium === 0) return null
                      let l = (e) => {
                          let t = (function (e, t, a = 0) {
                            let i = S(e, t)
                            return null != i ? (i.renewal_requested ?? i.paid) : a
                          })(n, e, r(e))
                          if (!Number.isSafeInteger(t) || t < 0) throw Error("unknown_capacity")
                          return t
                        },
                        d = (function ({
                          initialRenewalSeatCounts: e,
                          capacityShortfallSeatCounts: t,
                          subscription: a,
                        }) {
                          let i = { standard: e.standard + t.standard, premium: e.premium + t.premium }
                          if (0 === t.premium) return i
                          let n = a.seat_capacity.filter((e) => "prolite" === e.type)
                          if (1 !== n.length) return i
                          let [r] = n,
                            s = r.pending_unoccupied_removal,
                            o = r.pending_unoccupied_downgrades
                          if (!Number.isSafeInteger(s) || null == s || s < 0 || !Array.isArray(o)) return i
                          let l = 0
                          for (let e of o)
                            if (
                              "default" === e.to_type &&
                              (!Number.isSafeInteger(e.quantity) ||
                                e.quantity < 0 ||
                                !Number.isSafeInteger((l += e.quantity)))
                            )
                              return i
                          let d = Math.min(Math.max(0, t.premium - s), l)
                          return d > i.standard ? i : { ...i, standard: i.standard - d }
                        })({
                          subscription: n,
                          initialRenewalSeatCounts: { standard: l("default"), premium: l("prolite") },
                          capacityShortfallSeatCounts: o,
                        })
                      return {
                        shortfall: o,
                        quantities: [
                          { seat_type: "default", quantity: d.standard },
                          { seat_type: "prolite", quantity: d.premium },
                        ],
                      }
                    })(p, u, m?.seat_type_counts)
                  if (n) {
                    if (
                      !f ||
                      JSON.stringify(n.quantities) !== JSON.stringify(f.quantities) ||
                      JSON.stringify(n.shortfall) !== JSON.stringify(f.shortfall)
                    )
                      throw new eu("capacity_changed")
                    return { requests: p, review: n }
                  }
                  if (!f) return { requests: p, review: null }
                  if (r && "all" === t) {
                    let e = { ...f.shortfall },
                      t = new Set()
                    for (let a of p.toReversed()) {
                      if ("usage_based" === a.seat_type) continue
                      let i = "prolite" === a.seat_type ? "premium" : "standard"
                      e[i] > 0 && (t.add(a.id), e[i]--)
                    }
                    let a = p.filter((e) => !t.has(e.id))
                    a.length && (await r(a), (s = p = p.filter((e) => t.has(e.id))))
                  }
                  return {
                    requests: p,
                    review: {
                      target: s,
                      requests: p,
                      quote: await (async function (e, t, a, i, n = h.rS) {
                        return en(
                          n,
                          "preview",
                          i,
                          async () => {
                            let n,
                              r,
                              s = await Z.Request.safeGet("/pageConfigs/billing", (0, H.M)(e))
                            if (
                              !s.plan_management?.eligible ||
                              !s.plan_management.plan_management_policy?.can_change_paid_seat_quantity ||
                              !t.is_processor_stripe ||
                              !t.will_renew ||
                              t.is_delinquent
                            )
                              throw Error("billing_unavailable")
                            return (
                              (n = "/subscriptions/update/preview"),
                              (r = {
                                requestBody: { account_id: e.accountId, ...{ ...i, updated_seat_quantities: a } },
                              }),
                              Z.Request.safePost(n, { ...r, ...(0, H.M)(e) })
                            )
                          },
                          () => "ready",
                        )
                      })(e, u, f.quantities, a, i),
                      ...f,
                      attempt: a,
                    },
                  }
                })(
                  eP,
                  e,
                  t?.attempt ?? { flow_id: crypto.randomUUID(), mutation_attempt_id: crypto.randomUUID() },
                  n,
                  t,
                  async (e) => {
                    if ((await ey(eP, e, eE), !eE())) throw Error("workspace_changed")
                    ;(n.count("teams", "join_approval.existing_seats_used", l, e.length), ec(eS, eP, e, eE))
                  },
                )
                if (!eE()) return
                if (((i = a.requests), (s = a.requests.length), a.review)) {
                  var u
                  if (!t) {
                    ;((d = "checkout_shown"), e2(null), e0(a.review))
                    return
                  }
                  let i = await en(
                    (u = {
                      owner: eP,
                      review: t,
                      metrics: n,
                      store: eM,
                      context: {
                        bulk: !el(t.target),
                        requests: t.requests.map(({ id: e, created_time: t, seat_type: a, role: i }) => ({
                          id: e,
                          created_time: t,
                          seat_type: a,
                          role: i,
                        })),
                      },
                      paymentMethodId: t.paymentMethodId,
                      isCurrent: eE,
                      getStripe: () => (0, r.sY)(eS, z, ej.locale),
                    }).metrics ?? h.rS,
                    "purchase",
                    u.review.attempt,
                    () =>
                      (async function ({
                        owner: e,
                        review: t,
                        store: a,
                        context: i,
                        paymentMethodId: n,
                        isCurrent: r,
                        getStripe: s,
                      }) {
                        let o,
                          l,
                          d,
                          { quote: c, attempt: u, quantities: p } = t
                        if (!r() || a.read()) throw Error("checkout_changed")
                        let m = await (async function (e, t) {
                          let a = await Q(e).catch(() => null)
                          return {
                            attemptId: t.attempt.mutation_attempt_id,
                            submittedAt: 1e3 * Math.floor(Date.now() / 1e3),
                            previousInvoiceIds: (a?.transactions ?? [])
                              .filter((e) => "invoice" === e.type)
                              .map((e) => e.id),
                            amount: t.quote.amount_due.amount - (t.quote.applied_balance ?? 0),
                            currency: t.quote.currency,
                            standard: t.shortfall.standard,
                            premium: t.shortfall.premium,
                          }
                        })(e, t)
                        if (!r() || a.read()) throw Error("checkout_changed")
                        let h = { ...i, operation: m, state: "submitted" }
                        a.write(h)
                        let f = await (function (
                            e,
                            {
                              accountId: t,
                              updatedPlan: a,
                              updatedSeats: i,
                              supportsSeatPaymentConfirmation: n,
                              updatedSeatQuantities: r,
                              updatedPriceInterval: s,
                              updatedPromoId: o,
                              updatedPromoCode: l,
                              updatedPromoCampaign: d,
                              paymentMethodId: c,
                              setupIntentId: u,
                              seatOperation: p,
                              prorationQuoteId: m,
                              analyticsFlowId: h,
                              analyticsMutationAttemptId: f,
                              promotionAcceptanceOrigin: g,
                            },
                          ) {
                            return e("/subscriptions/update", {
                              requestBody: {
                                account_id: t,
                                flow_id: h,
                                updated_plan: a,
                                updated_seats: i,
                                supports_seat_payment_confirmation: n,
                                updated_seat_quantities: r,
                                updated_price_interval: s,
                                updated_promo_id: o,
                                updated_promo_code: l,
                                updated_promo_campaign: d,
                                payment_method_id: c,
                                setup_intent_id: u,
                                seat_operation: p,
                                proration_quote_id: m,
                                mutation_attempt_id: f,
                                promotion_acceptance_origin: g,
                              },
                            })
                          })((t, a) => Z.Request.safePost(t, { ...a, ...(0, H.M)(e) }), {
                            accountId: e.accountId,
                            analyticsFlowId: u.flow_id,
                            analyticsMutationAttemptId: u.mutation_attempt_id,
                            updatedSeatQuantities: p,
                            paymentMethodId: n,
                            prorationQuoteId: c.proration_quote_id ?? void 0,
                            supportsSeatPaymentConfirmation: !0,
                          }).catch((e) => {
                            let t = a.read()
                            throw (
                              t?.state === "submitted" &&
                                t.operation?.attemptId === m.attemptId &&
                                (function (e, t) {
                                  if (!(e instanceof ei.FetchError) || (400 !== e.status && 409 !== e.status)) return !1
                                  try {
                                    let { detail: a } = JSON.parse(e.message)
                                    if (400 === e.status)
                                      return (
                                        "Updated number of seats is outside the Team seat limits" === a ||
                                        "Updated number of seats is outside the SCI seat limits" === a ||
                                        "The workspace does not support this seat type" === a ||
                                        "Selected payment method does not belong to this customer" === a
                                      )
                                    if ("string" == typeof a) return "Subscription update already in progress" === a
                                    return (
                                      a?.error_type === "insufficient_seat_quantity" ||
                                      (t && a?.error_type === "stale_state")
                                    )
                                  } catch {
                                    return !1
                                  }
                                })(e, !!c.proration_quote_id) &&
                                a.clear(),
                              e
                            )
                          }),
                          g = (t, i) => {
                            r() &&
                              (t || i) &&
                              (o = Z.Request.safePost("/subscriptions/update/cancel_pending", {
                                ...(0, H.M)(e),
                                requestBody: {
                                  account_id: e.accountId,
                                  expected_payment_intent_id: t ?? void 0,
                                  pending_update_invoice_id: i ?? void 0,
                                },
                              }).then(
                                async () => {
                                  t && i && (await er(e, a, t, i))
                                },
                                (e) => {
                                  l =
                                    e instanceof Error ? e : Error("Failed to cancel pending seat update", { cause: e })
                                },
                              ))
                          },
                          y = (async function (e, t) {
                            let a = null
                            if ("requires_action" === e.status) {
                              if (!e.pending_update_invoice_id)
                                return (
                                  t.cleanup(e.payment_intent.id),
                                  { result: { status: "missing_invoice" }, continuation: a, completion: null }
                                )
                              ;((a = {
                                expectedPaymentIntentId: e.payment_intent.id,
                                pendingUpdateInvoiceId: e.pending_update_invoice_id,
                              }),
                                t.remember(a))
                            }
                            let i = await t.resolvePayment(e),
                              n = "complete" === i.status && null != a ? await t.complete(a) : null
                            return { result: i, continuation: a, completion: n }
                          })(f, {
                            remember: (e) =>
                              a.write({
                                ...h,
                                state: "verification",
                                intentId: e.expectedPaymentIntentId,
                                invoiceId: e.pendingUpdateInvoiceId,
                              }),
                            cleanup: g,
                            resolvePayment: (e) =>
                              "requires_action" !== e.status || r()
                                ? (0, ea.Wd)({
                                    updateResult: e,
                                    stripePromise: "requires_action" === e.status ? Promise.resolve().then(s) : null,
                                    isStripeClientBootstrapError: !1,
                                    isPaymentMethodRecoveryEnabled: !0,
                                    isOpen: r,
                                    cleanupPendingSubscriptionUpdate: g,
                                  })
                                : Promise.resolve({ status: "closed" }),
                            complete: () => (r() ? es(e, a) : Promise.resolve(!1)),
                          })
                        try {
                          d = await y
                        } finally {
                          await o
                        }
                        let { result: b, continuation: v, completion: x } = d
                        if (l) throw l
                        if ("complete" === b.status)
                          return v && !x ? "pending" : (a.write({ ...h, state: "paid" }), "paid")
                        if ("payment_method_failed" === b.status || "setup_required" === b.status) {
                          let e = a.read()
                          return e?.state === "verification"
                            ? "verification"
                            : (e?.state === "submitted" && e.operation?.attemptId === m.attemptId && a.clear(),
                              "failed")
                        }
                        return "closed" === b.status ? "verification" : "pending"
                      })(u),
                    (e) => e,
                  )
                  if ("paid" !== i) {
                    ;((d = i),
                      e2({
                        type: { failed: "declined", verification: "verify", pending: "pending" }[i],
                        operation: eM.read()?.operation,
                        target: e,
                      }))
                    return
                  }
                  ;((s = await ew(eP, e, eE)), eM.clear())
                } else
                  s > 0 &&
                    ("all" === e
                      ? await (async function (e) {
                          await Z.Request.safePost("/accounts/{account_id}/invites/accept_all_requests", {
                            ...(0, H.M)(e),
                            parameters: { path: { account_id: e.accountId }, query: { request_type: "join" } },
                          })
                        })(eP)
                      : el(e)
                        ? await eh(eP, e)
                        : await ey(eP, a.requests, eE))
              }
              eE() &&
                ((d = "already_handled"),
                s && (d = t || o ? "approved_after_payment" : "approved_without_purchase"),
                eH(0),
                eW(new Map()),
                c || !s
                  ? (e0(null), e5(!1), e2({ type: c ? "earlier" : "handled", target: e }), await tn(i))
                  : await ti(el(e) ? ek(eD.approved, { email: e.email_address }) : ek(eD.approvedAll, { count: s }), i))
            })()
              .catch((a) => {
                if (a instanceof eu && eE()) {
                  ;((d = "selection_changed"), e0(null), eW(new Map()), e2({ type: "selectionChanged", target: e }))
                  return
                }
                let i = eM.read(),
                  n = i ? { paid: "paid", submitted: "pending", verification: "verify" }[i.state] : "failed"
                ;((d = i?.state === "paid" ? "approval_failed_after_payment" : n),
                  (0, y.z)(Error("Workspace join approval did not complete"), {
                    ...l,
                    outcome: d,
                    payment_state: i?.state,
                    flow_id: t?.attempt.flow_id,
                  }),
                  eE() && e2({ type: n, target: e, operation: i?.operation }))
              })
              .finally(() => {
                ;(ta(),
                  n.count("teams", "join_approval.finished", { ...l, outcome: d }),
                  n.hist("teams", "join_approval.duration_ms", { ...l, outcome: d }, performance.now() - s))
              }))
        },
        td = (0, d.useRef)(!1),
        tc = (0, d.useEffectEvent)((e) => {
          tl(e).finally(() => e5(!1))
        })
      ;(0, d.useEffect)(() => {
        eB && null != K && !td.current && ((td.current = !0), tc(K))
      }, [eB, K])
      let tu = eX?.quote
      U[19] !== e1
        ? ((R = e1 && ["failed", "pending", "declined", "paid", "verify"].includes(e1.type)), (U[19] = e1), (U[20] = R))
        : (R = U[20])
      let tp = R,
        tm = eB && e4 && !eX && !e1,
        th = eB && null != eX && !tp,
        tf = eX ? eX.shortfall.standard + eX.shortfall.premium : 0,
        tg = async function () {
          let e = eX?.target ?? e1?.target
          !e8.current &&
            eE() &&
            e &&
            ((e8.current = !0),
            e6("billing"),
            await Z.Request.safeGet("/payments/customer_portal", {
              ...(0, H.M)(eP),
              parameters: { query: { account_id: eP.accountId } },
            })
              .then((e) => {
                eE() && (0, m.jJ)(e.url)
              })
              .catch(() => e2({ type: "failed", target: e }))
              .finally(ta))
        }
      function ty(e, t) {
        "modal" === Y
          ? eV((a) => {
              let i = new Set(a)
              for (let { id: a } of e) t ? i.delete(a) : i.add(a)
              return i
            })
          : eW((a) => {
              let i = new Map(a)
              for (let a of e) t ? i.set(a.id, a) : i.delete(a.id)
              return i
            })
      }
      U[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            ;(e0(null), e2(null))
          }),
          (U[21] = T))
        : (T = U[21])
      let tb = T
      U[22] !== $ || U[23] !== Y
        ? ((q = function () {
            e8.current || ("page" === Y ? tb() : $())
          }),
          (U[22] = $),
          (U[23] = Y),
          (U[24] = q))
        : (q = U[24])
      let tv = q
      function tx() {
        let e
        if (e9.isPending) return (0, i.jsx)("p", { role: "status", children: ek(eD.loading) })
        if (e9.isError) return (0, i.jsx)("p", { role: "alert", children: ek(eD.failed) })
        let t = {
          requests: e9.data.items,
          selected: tt,
          busy: e7 || te,
          loadingRow: e3,
          onSelect: ty,
          onReject: (e) => void to(e),
          paymentRequests: eM.read()?.requests,
        }
        return (
          (e =
            0 === t.requests.length
              ? (0, i.jsx)("p", { children: ek(eG ? eD.noMatches : eD.empty) })
              : "modal" === Y
                ? (0, i.jsx)(eR, { ...t, canChoosePremium: eN, onSeatChange: (e, t) => void ts(e, { seat_type: t }) })
                : (0, i.jsx)(eT, {
                    ...t,
                    onRoleChange: (e, t) => void ts(e, { role: t }),
                    onAccept: (e) => void tl(e, void 0, void 0, e.id),
                  })),
          (0, i.jsxs)(i.Fragment, { children: [e, "page" === Y && tw()] })
        )
      }
      function tw() {
        let e = e9.data
        if (!e || e9.isError) return null
        let t = "modal" === Y && e.total > eQ,
          a = e.offset > 0,
          n = e.items.length ? e.offset + e.items.length : 0,
          r = n > 0 && n < e.total
        return a || r
          ? (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [
                t &&
                  (0, i.jsx)("span", {
                    "aria-live": "polite",
                    className: "me-auto text-sm text-secondary",
                    children: (0, i.jsx)(p.A, {
                      id: "codex.joinApproval.modal.pageRange",
                      defaultMessage: "{start, number}\u2013{end, number} of {total, number} requests",
                      values: { start: n > 0 ? e.offset + 1 : 0, end: n, total: e.total },
                    }),
                  }),
                (t || a) &&
                  (0, i.jsx)(b.$, {
                    size: "dialogAction",
                    color: "ghost",
                    disabled: e7 || te || !a,
                    onClick: () => eH(Math.max(0, e.offset - eQ)),
                    children: ek(eD.previous),
                  }),
                (t || r) &&
                  (0, i.jsx)(b.$, {
                    size: "dialogAction",
                    color: "ghost",
                    disabled: e7 || te || !r,
                    onClick: () => eH(e.offset + eQ),
                    children: ek(eD.next),
                  }),
              ],
            })
          : null
      }
      let t_ = eB && !eG && (e9.data?.total ?? 0) > 0,
        tj = function () {
          let e = {
            color: "primary",
            size: "dialogAction",
            disabled: e7,
            loading: "primary" === e3,
            "aria-busy": "primary" === e3,
          }
          return tm
            ? (0, i.jsx)(b.$, {
                color: "primary",
                size: "dialogAction",
                loading: !0,
                children: ek("all" === K ? e_.J.acceptAll : e_.J.accept),
              })
            : eB && tp && e1
              ? (0, i.jsx)(b.$, { ...e, onClick: () => void tl(e1.target), children: ek(eD.retry) })
              : eB && "modal" === Y && (e9.data?.items.length ?? 0) > 0
                ? (0, i.jsx)(b.$, {
                    ...e,
                    type: "submit",
                    color: "chatgptPrimary",
                    size: "formAction",
                    className: "w-full",
                    disabled: e7 || te || 0 === tt.size,
                    children: ek(eD.modalApprove, { count: tt.size }),
                  })
                : eB && "page" === Y && eY.size > 0
                  ? (0, i.jsx)(b.$, {
                      ...e,
                      onClick: () => {
                        let e = [...eY.values()]
                        tl(1 === e.length ? e[0] : e)
                      },
                      children: ek(eD.acceptSelected, { count: eY.size }),
                    })
                  : "page" === Y && t_
                    ? (0, i.jsx)(b.$, {
                        ...e,
                        onClick: () => void tl("all"),
                        children: ek(eD.acceptAllWithCount, { count: e9.data?.total }),
                      })
                    : eB && e9.isError
                      ? (0, i.jsx)(b.$, {
                          color: "primary",
                          size: "dialogAction",
                          loading: e9.isFetching,
                          disabled: e7,
                          onClick: () => void e9.refetch(),
                          children: ek(eD.retry),
                        })
                      : (0, i.jsx)(b.$, {
                          color: "secondary",
                          size: "dialogAction",
                          disabled: e7,
                          onClick: $,
                          children: ek(eD.close),
                        })
        },
        tk = "modal" === Y ? eD.modalTitle : eD.title
      U[25] !== ek || U[26] !== tk ? ((D = ek(tk)), (U[25] = ek), (U[26] = tk), (U[27] = D)) : (D = U[27])
      let tS = D
      if (tm) {
        let e,
          t = "all" === K ? e_.J.acceptAll : e_.J.accept
        ;(U[28] !== ek || U[29] !== t ? ((e = ek(t)), (U[28] = ek), (U[29] = t), (U[30] = e)) : (e = U[30]), (tS = e))
      } else if (eX && eB) {
        let e
        ;(U[31] !== tf || U[32] !== ek
          ? ((e = ek(eD.checkout, { count: tf })), (U[31] = tf), (U[32] = ek), (U[33] = e))
          : (e = U[33]),
          (tS = e))
      }
      let tP = eB && e1?.type === "pending" ? e1.operation : void 0,
        tM = !eB && (0, i.jsx)("p", { children: ek(eD.unavailable) }),
        tC =
          eB &&
          !tm &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              e1 &&
                (0, i.jsx)("p", {
                  role: "status",
                  children: ek(eD[e1.type], { email: el(e1.target) ? e1.target.email_address : void 0 }),
                }),
              tP &&
                e1 &&
                (0, i.jsx)(et, {
                  owner: eP,
                  operation: tP,
                  onSelect: (e) => void tl(e1.target, void 0, { attemptId: tP.attemptId, id: e }),
                }),
              !eX &&
                "page" === Y &&
                (0, i.jsx)(_.s, {
                  id: eF,
                  variant: "settings",
                  label: ek(eD.search),
                  placeholder: ek(eD.search),
                  searchQuery: eK,
                  onSearchQueryChange: (e) => {
                    ;(eH(0), e$(e))
                  },
                  disabled: e7,
                }),
              (function () {
                if (eX && tu) {
                  let e = el(eX.target)
                    ? (0, i.jsx)("p", {
                        children: ek(eD.detail, {
                          email: eX.target.email_address,
                          tier: eX.target.seat_type ?? "default",
                        }),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("p", { children: ek(eD.bulkDetail, { count: eX.requests.length }) }),
                          Array.isArray(eX.target) &&
                            (0, i.jsx)("ul", {
                              "aria-label": ek(eD.selectedPeople),
                              className: "mt-2 max-h-24 overflow-y-auto text-secondary",
                              children: eX.requests.map(eO),
                            }),
                          (0, i.jsxs)("ul", {
                            className: "mt-2",
                            children: [
                              eX.shortfall.standard > 0 &&
                                (0, i.jsx)("li", { children: ek(eD.standardSeats, { count: eX.shortfall.standard }) }),
                              eX.shortfall.premium > 0 &&
                                (0, i.jsx)("li", { children: ek(eD.premiumSeats, { count: eX.shortfall.premium }) }),
                            ],
                          }),
                        ],
                      })
                  return tp
                    ? (0, i.jsxs)(i.Fragment, { children: [e, (0, i.jsx)(W, { quote: tu })] })
                    : (0, i.jsx)(J, {
                        owner: eP,
                        quote: tu,
                        seatCount: tf,
                        additions: eX.shortfall,
                        heading: (0, i.jsx)(x.L3, { children: ek(eD.additionalSeats, { count: tf }) }),
                        description: (0, i.jsx)(x.rr, { children: ek(eD.additionalSeatsDetail, { count: tf }) }),
                        onClose: tv,
                        telemetry: { metrics: (0, h.dj)(ee), entry: ef, flowId: eX.attempt.flow_id },
                        confirmLabel: ek(eD.modalConfirm),
                        busy: e7,
                        billingBusy: "billing" === e3,
                        onBack: tb,
                        onConfirm: (e) => void tl(eX.target, { ...eX, paymentMethodId: e }),
                        onManageBilling: () => void tg(),
                      })
                }
                return tx()
              })(),
            ],
          })
      U[34] !== te || U[35] !== tM || U[36] !== tC
        ? ((B = (0, i.jsxs)("div", {
            "aria-busy": te,
            className: "flex min-w-0 flex-col gap-4 text-form-body",
            children: [tM, tC],
          })),
          (U[34] = te),
          (U[35] = tM),
          (U[36] = tC),
          (U[37] = B))
        : (B = U[37])
      let tA = B,
        tI =
          eB &&
          (e1?.type === "verify" || e1?.type === "pending" || e1?.type === "declined") &&
          (0, i.jsx)(b.$, {
            color: "secondary",
            size: "dialogAction",
            loading: "billing" === e3,
            disabled: e7,
            onClick: () => void tg(),
            children: ek(eD.billing),
          }),
        tN =
          eB &&
          (tp || e9.isError) &&
          (0, i.jsx)(b.$, {
            size: "dialogAction",
            color: "ghost",
            disabled: e7,
            onClick: () => (0, m.Af)(z),
            children: ek(eD.settings),
          })
      ;(U[38] !== tj ? ((E = tj()), (U[38] = tj), (U[39] = E)) : (E = U[39]),
        U[40] !== tI || U[41] !== tN || U[42] !== E
          ? ((O = (0, i.jsxs)(i.Fragment, { children: [tI, tN, E] })),
            (U[40] = tI),
            (U[41] = tN),
            (U[42] = E),
            (U[43] = O))
          : (O = U[43]))
      let tR = O,
        tT =
          "page" === Y &&
          (0, i.jsx)("section", {
            "aria-labelledby": ez,
            className: "bg-primary min-h-0 flex-1 overflow-y-auto px-5 py-8 [--thread-content-max-width:60rem] sm:px-8",
            children: (0, i.jsxs)(v.P, {
              children: [
                (0, i.jsx)("h1", { id: ez, className: "heading-lg text-default", children: th ? ek(eD.title) : tS }),
                th ? tx() : !tm && tA,
                !th && (0, i.jsx)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: tR }),
              ],
            }),
          }),
        tq = !e7 && !th,
        tD =
          (!tT || th) &&
          (0, i.jsx)(x.lG, {
            open: !0,
            size: "large",
            variant: "chatgpt",
            contentClassName: "p-0!",
            contentProps: th ? void 0 : { "aria-describedby": void 0 },
            showDialogClose: tq,
            onOpenChange: (e) => {
              e || e8.current || (th ? tv() : $())
            },
            children: th
              ? (0, i.jsx)(w.R4, { variant: "chatgpt", size: "viewport", children: tA })
              : (0, i.jsxs)(w.R4, {
                  as: "form",
                  size: "scrollable",
                  className: "p-6",
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !e8.current && eB && !te && tt.size > 0 && !tp)) {
                      let e = [...tt.values()]
                      tl(1 === e.length ? e[0] : e)
                    }
                  },
                  children: [
                    (0, i.jsx)(w.OO, {
                      className: "shrink-0",
                      children: (0, i.jsx)(w.c7, { title: (0, i.jsx)(x.L3, { children: tS }) }),
                    }),
                    !tm &&
                      (0, i.jsx)(
                        w.OO,
                        { className: "min-h-0 overflow-y-auto overscroll-contain", children: tA },
                        e9.data?.offset ?? eZ,
                      ),
                    !th &&
                      (0, i.jsxs)(w.OO, {
                        className: "shrink-0 gap-2",
                        children: [
                          eB && !tm && !eX && tw(),
                          (0, i.jsx)(w.Es, { expandSingleButton: !1, children: tR }),
                        ],
                      }),
                  ],
                }),
          })
      return (
        U[44] !== tT || U[45] !== tD
          ? ((L = (0, i.jsxs)(i.Fragment, { children: [tT, tD] })), (U[44] = tT), (U[45] = tD), (U[46] = L))
          : (L = U[46]),
        L
      )
    }
    function eO(e) {
      return (0, i.jsx)("li", { children: e.email_address }, e.id)
    }
    function eL(e) {
      return e.id
    }
    function eU(e) {
      return [e.id, e]
    }
  },
  zdJD(e, t, a) {
    let i = (0, a("Qgfj").YK)({
      accept: { id: "codex.joinApproval.acceptInvite", defaultMessage: "Accept invite" },
      acceptAll: { id: "codex.joinApproval.acceptAll", defaultMessage: "Accept all invites" },
    })
    a.d(t, {}, { J: i })
  },
  H3ts(e, t, a) {
    var i = a("DBCl")
    a.d(
      t,
      {},
      {
        M: function (e) {
          return { expectedIdentity: e, additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [i.zBc]: e.accountId } }
        },
      },
    )
  },
}
//# sourceMappingURL=80397.6b9c0244bc.js.map
