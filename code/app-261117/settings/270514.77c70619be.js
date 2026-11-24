export const __rspack_esm_ids = [270514]
export const __webpack_modules__ = {
  TpLQ(e, t, n) {
    function a(e, t) {
      if ("IntegrationError" !== t) return "not_applicable"
      let n = e ?? ""
      return n.startsWith("Could not find a mounted element to create the Confirmation Token from,")
        ? "missing_mounted_element"
        : n.startsWith('You specified "never" for fields.billing_details.address') &&
            n.includes(
              "but did not pass params.payment_method_data.billing_details.address.country when calling stripe.createConfirmationToken()",
            )
          ? "required_country"
          : n.startsWith("Unexpected call to paymentFailed().") &&
              n.includes("calling paymentFailed() once per expressCheckout Element confirm event")
            ? "invalid_wallet_settlement"
            : n.startsWith("A complete billing address is required to confirm this Checkout Session.")
              ? "required_billing_address"
              : n.startsWith("Invalid confirm() call.") && n.includes("expressCheckoutConfirmEvent: event")
                ? "missing_express_confirm_event"
                : n.startsWith("elements.submit() must be called before stripe.createConfirmationToken().")
                  ? "elements_submit_required"
                  : "other"
    }
    function i(e, t) {
      if ("object" != typeof e || null == e) return null
      let n = Reflect.get(e, t)
      return "string" == typeof n && n.length > 0 ? n : null
    }
    n.d(
      t,
      {},
      {
        BQ: a,
        CL: function ({ failureReason: e, isExpressCheckout: t, selectedPaymentMethodType: n, errorName: a }) {
          return {
            failure_reason: e,
            is_express_checkout: String(t),
            ...("unexpected_error" === e && null != a ? { error_name: a } : {}),
            ...(null != n ? { selected_payment_method_type: n } : {}),
          }
        },
        Et: function (e) {
          let t = "error" === e.resultType ? e.confirmError : e.error,
            n =
              "error" === e.resultType
                ? null != e.confirmError.paymentFailed
                  ? e.confirmError.paymentFailed.declineCode
                  : "string" == typeof e.confirmError.decline_code
                    ? e.confirmError.decline_code
                    : null
                : i(t, "decline_code"),
            r = "exception" === e.resultType ? e.errorMetadata : null
          return {
            billing_country: e.billingCountry?.trim().toUpperCase() || "unknown",
            billing_currency: e.billingCurrency?.trim().toUpperCase() || "unknown",
            stage: e.stage,
            failure_reason: e.failureReason,
            is_express_checkout: String(e.isExpressCheckout),
            selected_payment_method_type: e.selectedPaymentMethodType ?? "unknown",
            error_source: "error" === e.resultType ? (e.confirmError.source ?? "unknown") : e.source,
            result_type: e.resultType,
            sdk_error_family: a(i(t, "message"), r?.error_name),
            error_category: r?.error_category ?? "confirm_error",
            error_name: null == r ? "ConfirmError" : (r.error_name ?? "unknown"),
            error_type:
              i(t, "type") ??
              (r?.error_is_client_error === !0 ? "client" : r?.error_is_server_error === !0 ? "server" : "unknown"),
            error_code:
              "error" === e.resultType
                ? null != n
                  ? `payment_failed_${n}`
                  : (e.confirmError.code ?? "none")
                : (e.errorMetadata.error_code ?? i(t, "code") ?? "unknown"),
            error_status: r?.error_status != null ? String(r.error_status) : "unknown",
            decline_code: n ?? "unknown",
          }
        },
        PZ: function ({
          hasBillingAddressErrors: e,
          hasEmailErrors: t,
          hasInvalidConfirmError: n,
          hasPaymentElementErrors: a,
          hasTaxInfoErrors: i,
          isExpressCheckout: r,
          submitErrorSource: s,
        }) {
          return {
            failure_reason: "field_validation_failed",
            submit_error_source: s,
            has_billing_address_errors: String(e),
            has_email_errors: String(t),
            has_invalid_confirm_error: String(n),
            has_payment_element_errors: String(a),
            has_tax_info_errors: String(i),
            is_express_checkout: String(r),
          }
        },
        V3: function (e) {
          return Number.isFinite(e) && e >= 0 && e <= 6e5 ? Math.round(e) : null
        },
        dj: function (e) {
          return {
            phase: e.phase || "unknown",
            entry_point: e.entryPoint || "unknown",
            checkout_ui_mode: e.checkoutUiMode || "unknown",
            checkout_plan_type: e.checkoutPlanType || "unknown",
            device: e.device || "unknown",
            latency_improvements_group: e.latencyImprovementsGroup || "unknown",
            outcome: e.outcome || "unknown",
            prefetch_checkout_group: e.prefetchCheckoutGroup || "unknown",
            checkout_session_prefetch_start_surface: e.checkoutSessionPrefetchStartSurface || "unknown",
            sentinel_prefetch_state: e.sentinelPrefetchState || "unknown",
            source: e.source ?? "unknown",
            reported_web_track: e.reportedWebTrack,
            ...(null == e.creditCheckoutSurface && null == e.creditCheckoutAccountScope
              ? {}
              : {
                  credit_checkout_surface:
                    null != e.creditCheckoutSurface &&
                    [
                      "work_rate_limit_banner",
                      "work_existing_conversation_banner",
                      "work_paused_banner",
                      "work_luna_reserve_banner",
                      "work_luna_reserve_model_picker",
                      "work_premium_fallback_model_picker",
                      "work_sidebar_usage_alert",
                      "work_usage_rail",
                    ].includes(e.creditCheckoutSurface)
                      ? e.creditCheckoutSurface
                      : "unknown",
                  credit_checkout_account_scope:
                    "personal" === e.creditCheckoutAccountScope || "workspace_owner" === e.creditCheckoutAccountScope
                      ? e.creditCheckoutAccountScope
                      : "unknown",
                }),
          }
        },
        wV: function ({
          checkoutPlanType: e,
          processorEntity: t,
          checkoutKind: n,
          promotionCampaign: a,
          requiresManualApproval: i,
          isCheckoutModalEnabled: r,
          source: s,
          reportedWebTrack: l,
        }) {
          return {
            plan_type: e ?? "unknown",
            processor_entity: t,
            checkout_kind: n ?? "unknown",
            promotion_campaign: a ?? "none",
            requires_manual_approval: String(i),
            source: s ?? "unknown",
            ...(null == r ? {} : { is_checkout_modal_enabled: String(r) }),
            reported_web_track: l,
          }
        },
      },
    )
  },
  yIgO(e, t, n) {
    let a = {
      invalid_or_unavailable: "generic",
      redemption_attempt_limit_exceeded: "attempt_limit",
      serial_number_required: "serial_number_required",
      account_ineligible: "generic",
      currency_ineligible: "currency_ineligible",
      customer_balance_limit_exceeded: "daily_limit",
      temporarily_unavailable: "temporarily_unavailable",
    }
    function i(e, t) {
      let n = e.get(t)
      return null != n && /^[\w-]{1,128}$/.test(n) ? n : void 0
    }
    function r(e) {
      for (let [t, n] of [
        ["selected_chatgpt_account_id", "chatgpt"],
        ["selected_api_organization_id", "api"],
      ]) {
        let a = i(e, t)
        if (null != a) return { product: n, id: a }
      }
    }
    n.d(
      t,
      {},
      {
        $v: function (e, t, n) {
          if (null == e) return !1
          if (!n.enabled) return !0
          let a = t && "api" === e.product
          return (
            !n.accounts.isFetching &&
            ("success" === n.accounts.status || a) &&
            !n.apiOrganizations.isFetching &&
            ("api" !== e.product ||
              "success" === n.apiOrganizations.status ||
              ("error" === n.apiOrganizations.status && a))
          )
        },
        Eb: function (e) {
          let t = r(e)
          if (null != t) return t
          let n = i(e, "api_organization_id")
          return null == n ? void 0 : { product: "api", id: n }
        },
        Fn: function (e) {
          return "string" == typeof e && Object.hasOwn(a, e)
        },
        YE: function (e, t = r(e)) {
          let n = new URLSearchParams(),
            a = e.get("entry_point")
          null != a &&
            ["billing", "business_billing", "profile_menu", "api_billing"].includes(a) &&
            n.set("entry_point", a)
          let s = i(e, "api_organization_id")
          return (
            null != s && n.set("api_organization_id", s),
            null != t &&
              /^[\w-]{1,128}$/.test(t.id) &&
              n.set("api" === t.product ? "selected_api_organization_id" : "selected_chatgpt_account_id", t.id),
            n
          )
        },
        Z7: function (e, t) {
          return "api" === t && "account_ineligible" === e ? "api_account_ineligible" : null == e ? "generic" : a[e]
        },
        pK: function (e, t, n) {
          let a = (t?.currency ?? e?.billingCurrency)?.trim().toLowerCase(),
            i = e?.hasCustomerObject === !0,
            r = i && "usd" === a,
            s = null != e && !i && !e.hasPaidSubscription,
            l = i && null != t && 0 === t.balance && null == a,
            o = t?.balances?.usd ?? (t?.currency?.toLowerCase() === "usd" ? t.balance : 0),
            c = o < 0,
            u = !n.countryRestrictionsEnabled || (n.isCountryEligible && (r || s || l)),
            _ = u || (t?.has_redeemed_gift_card !== !1 && (c || (t?.has_redeemed_gift_card === !0 && r)))
          return {
            isUsdCustomer: r,
            isUnprovisioned: s,
            usdBalance: o,
            hasUsdWalletCredit: c,
            canRedeemGiftCard: u,
            shouldShowWallet: _,
          }
        },
        y4: function ({
          destinations: e,
          selection: t,
          activeAccountId: n,
          policy: a,
          apiAccountIneligible: i,
          defaultChatgptDestination: r,
        }) {
          let s = e.filter(
              (e) =>
                a.apiEnabled ||
                ("chatgpt" === e.product &&
                  ((a.countryEligible && e.id === n) || (t?.target.product === "chatgpt" && e.id === t.target.id))),
            ),
            l = t?.destination
          l?.product !== "api" || i || s.some((e) => "api" === e.product && e.id === l.id) || s.push(l)
          let o =
            null != t
              ? l
              : a.apiEnabled || null == r
                ? 1 === s.length
                  ? s[0]
                  : s.find((e) => "chatgpt" === e.product && e.id === n)
                : r
          return { options: s, destination: o }
        },
      },
    )
  },
  Eo00(e, t, n) {
    n.d(
      t,
      {},
      {
        Oy: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutExpressPaymentMethodShown" },
        aX: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutSubscribeClickIncompleteFailure" },
        kc: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutPaymentTabClicked" },
        pC: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutLinkClicked" },
        rZ: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutExpressPaymentMethodsRendered" },
      },
    )
  },
  j8ZS(e, t, n) {
    var a,
      i,
      r =
        (((a = {}).CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNSPECIFIED =
          "CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNSPECIFIED"),
        (a.CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR =
          "CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_CONFIRM_ERROR"),
        (a.CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR =
          "CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_MANUAL_APPROVAL_INTEGRATION_ERROR"),
        (a.CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED =
          "CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_TAX_INFO_UPDATE_FAILED"),
        (a.CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR =
          "CHATGPT_CHECKOUT_SUBMISSION_FAILURE_REASON_UNEXPECTED_ERROR"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      s =
        (((i = {}).CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_UNSPECIFIED =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_UNSPECIFIED"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_NOT_APPLICABLE =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_NOT_APPLICABLE"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_PAYMENT_DECLINED =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_PAYMENT_DECLINED"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_ORDER_UPDATED_REVIEW_REQUIRED =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_ORDER_UPDATED_REVIEW_REQUIRED"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_BILLING_DETAILS_UPDATE_REQUIRED =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_BILLING_DETAILS_UPDATE_REQUIRED"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_GENERIC_PROVIDER_ERROR =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_GENERIC_PROVIDER_ERROR"),
        (i.CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_UNCLASSIFIED_CONFIRMATION_ERROR =
          "CHATGPT_CHECKOUT_CONFIRM_ERROR_FAMILY_UNCLASSIFIED_CONFIRMATION_ERROR"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i)
    n.d(t, {}, { Cf: { $type: "protobuf_analytics_events.v1.ChatgptCheckoutSubmissionError" }, G3: r, qh: s })
  },
  autu(e, t, n) {
    var a,
      i,
      r,
      s,
      l,
      o =
        (((a = {}).CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_UNSPECIFIED =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_UNSPECIFIED"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_BEFORE_PRESENTATION"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_DISMISSED_AFTER_PRESENTATION"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_PREPARATION_FAILED =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_PREPARATION_FAILED"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CHECKOUT_COMPLETED =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CHECKOUT_COMPLETED"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_COMPLETION_FAILED =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_COMPLETION_FAILED"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_FALLBACK = "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_FALLBACK"),
        (a.CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CONTEXT_CHANGED =
          "CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_CONTEXT_CHANGED"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      c =
        (((i = {}).CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_UNSPECIFIED =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_UNSPECIFIED"),
        (i.CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_READY =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_READY"),
        (i.CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_FAILED =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_FAILED"),
        (i.CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_ACTIVATED =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_ACTIVATED"),
        (i.CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_ATTRIBUTION_UNAVAILABLE =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_ATTRIBUTION_UNAVAILABLE"),
        (i.CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_OPENED =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_OPENED"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      u =
        (((r = {}).CHATGPT_CREDIT_CHECKOUT_PRESENTATION_UNSPECIFIED =
          "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_UNSPECIFIED"),
        (r.CHATGPT_CREDIT_CHECKOUT_PRESENTATION_MODAL = "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_MODAL"),
        (r.CHATGPT_CREDIT_CHECKOUT_PRESENTATION_FULL_PAGE = "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_FULL_PAGE"),
        (r.CHATGPT_CREDIT_CHECKOUT_PRESENTATION_INLINE = "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_INLINE"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      _ =
        (((s = {}).CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_UNSPECIFIED =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_UNSPECIFIED"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_INITIAL_DATA_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_INITIAL_DATA_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CREDIT_QUANTITY_UNAVAILABLE"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PREPARATION_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_MODULE_LOAD_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_MODULE_LOAD_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_INITIALIZATION_TIMEOUT =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_INITIALIZATION_TIMEOUT"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_BOOTSTRAP_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_BOOTSTRAP_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_RENDER_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_RENDER_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_COUNTRY_PRICING_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_COUNTRY_PRICING_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_BILLING_DETAILS_UNAVAILABLE =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_BILLING_DETAILS_UNAVAILABLE"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PRICING_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_CHECKOUT_PRICING_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_DISCOUNT_OFFER_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_DISCOUNT_OFFER_ERROR"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_READY_TIMEOUT =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PROVIDER_READY_TIMEOUT"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PAYMENT_FORM_READY_TIMEOUT =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_PAYMENT_FORM_READY_TIMEOUT"),
        (s.CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_WORKSPACE_ELIGIBILITY_ERROR =
          "CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_WORKSPACE_ELIGIBILITY_ERROR"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      d =
        (((l = {}).CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_UNSPECIFIED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_UNSPECIFIED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_ENTRY_ACCEPTED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_ENTRY_ACCEPTED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_NAVIGATED = "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_NAVIGATED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_SHOWN =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_SHOWN"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_USABLE =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_USABLE"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_METHOD_INFO_COMPLETED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_METHOD_INFO_COMPLETED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_BILLING_ADDRESS_INFO_COMPLETED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_BILLING_ADDRESS_INFO_COMPLETED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_SUBMIT_ATTEMPTED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_SUBMIT_ATTEMPTED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_ATTEMPTED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_ATTEMPTED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_SUCCEEDED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_SUCCEEDED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_IN_FORM_FAILED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_IN_FORM_FAILED"),
        (l.CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_RETURN_COMPLETED =
          "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_RETURN_COMPLETED"),
        (l.UNRECOGNIZED = "UNRECOGNIZED"),
        l)
    n.d(
      t,
      {},
      {
        Hb: { $type: "protobuf_analytics_events.v1.ChatgptCreditCheckoutInlinePaymentRetryClicked" },
        Lm: { $type: "protobuf_analytics_events.v1.ChatgptCreditCheckoutFunnelStep" },
        T3: u,
        Wn: { $type: "protobuf_analytics_events.v1.ChatgptCreditCheckoutPreparationOutcome" },
        ad: o,
        cO: { $type: "protobuf_analytics_events.v1.ChatgptCreditCheckoutModalOutcome" },
        oW: c,
        pX: d,
        qS: _,
        qY: { $type: "protobuf_analytics_events.v1.ChatgptCreditCheckoutOpened" },
      },
    )
  },
  xL4V(e, t, n) {
    var a,
      i =
        (((a = {}).CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_UNSPECIFIED"),
        (a.CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_PREPARED = "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_PREPARED"),
        (a.CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_BILLING_CONTINUE_CLICKED =
          "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_BILLING_CONTINUE_CLICKED"),
        (a.CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_SESSION_FAILED = "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_SESSION_FAILED"),
        (a.CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_BILLING_INTERVAL_SELECTED =
          "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_BILLING_INTERVAL_SELECTED"),
        (a.CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_EDIT_PLAN_CLICKED =
          "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_TEAM_EDIT_PLAN_CLICKED"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a)
    n.d(
      t,
      {},
      {
        I1: { $type: "protobuf_analytics_events.v1.ChatgptPricingCheckoutAction" },
        OG: i,
        ai: { $type: "protobuf_analytics_events.v1.ChatgptPricingCheckoutConfirmationSucceeded" },
        iA: { $type: "protobuf_analytics_events.v1.ChatgptPricingTeamPlanSeatCountChanged" },
      },
    )
  },
  VEyj(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("e9bM"),
      s = n("zd8w"),
      l = n("F5N3")
    function o() {
      return l.nm.createBoundary()
    }
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            c,
            u,
            _,
            d,
            p,
            m,
            T,
            E,
            g,
            h = (0, i.c)(23),
            { children: C, mode: f } = e,
            y = (0, s.useContext)(l.$w),
            [A] = (0, s.useState)(o),
            [I, N] = (0, s.useState)()
          return (
            h[0] !== A || h[1] !== y
              ? ((t = () => {
                  A.setParent(y)
                }),
                (n = [A, y]),
                (h[0] = A),
                (h[1] = y),
                (h[2] = t),
                (h[3] = n))
              : ((t = h[2]), (n = h[3])),
            (0, s.useInsertionEffect)(t, n),
            h[4] !== A
              ? ((c = () => () => A.unmount()), (u = [A]), (h[4] = A), (h[5] = c), (h[6] = u))
              : ((c = h[5]), (u = h[6])),
            (0, s.useInsertionEffect)(c, u),
            h[7] !== A || h[8] !== f
              ? ((_ = () => {
                  let e
                  if (A.setVisibility(f)) {
                    let { signal: t } = (e = new AbortController())
                    queueMicrotask(() => {
                      t.aborted || N(t)
                    })
                  }
                  return () => {
                    ;(e?.abort(), A.disconnectLayout())
                  }
                }),
                (d = [f, A]),
                (h[7] = A),
                (h[8] = f),
                (h[9] = _),
                (h[10] = d))
              : ((_ = h[9]), (d = h[10])),
            (0, s.useLayoutEffect)(_, d),
            h[11] !== A || h[12] !== I
              ? ((p = () => {
                  null == I || I.aborted || A.releaseRetainedPassive()
                }),
                (m = [A, I]),
                (h[11] = A),
                (h[12] = I),
                (h[13] = p),
                (h[14] = m))
              : ((p = h[13]), (m = h[14])),
            (0, s.useEffect)(p, m),
            h[15] !== C ? ((T = (0, a.jsx)(r.y9, { children: C })), (h[15] = C), (h[16] = T)) : (T = h[16]),
            h[17] !== f || h[18] !== T
              ? ((E = (0, a.jsx)(s.Activity, { mode: f, children: T })), (h[17] = f), (h[18] = T), (h[19] = E))
              : (E = h[19]),
            h[20] !== A.owner || h[21] !== E
              ? ((g = (0, a.jsx)(l.$w, { value: A.owner, children: E })), (h[20] = A.owner), (h[21] = E), (h[22] = g))
              : (g = h[22]),
            g
          )
        },
      },
    )
  },
  Q2Qp(e, t, n) {
    var a = n("zd8w")
    let i = (0, a.createContext)({ current: null }),
      r = (0, a.createContext)(null)
    n.d(t, {}, { H: r, K: i })
  },
  MeAu(e, t, n) {
    n.d(t, { oE: () => s, hq: () => l, Ow: () => o })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57")
    function s(e) {
      let t,
        n,
        s,
        l = (0, i.c)(10),
        { brandColor: o, className: c, children: u, inset: _, size: d } = e,
        p = void 0 === _ || _,
        m = void 0 === d ? "header" : d
      return (
        l[0] !== o || l[1] !== c || l[2] !== p || l[3] !== m
          ? ((t = o && /^#[0-9a-f]{6}$/iu.test(o) ? { "--app-shell-header-brand-color": o } : void 0),
            (n = (0, r.A)(
              "Toolbar-w4tLPD",
              c,
              t && "Branded-wQOB6e",
              "@container/app-shell-header-toolbar flex w-full min-w-0 items-center justify-between gap-2",
              "pane" === m
                ? "h-toolbar-pane"
                : "electron:h-[var(--app-shell-header-height,var(--height-toolbar))] extension:py-row-y",
              !0 === p && "DefaultInset-_kR2Iv",
              "page" === p && "PageInset-YLtCuh",
              ("tab-strip" === p || "tab-strip-flush-start" === p) && "TabStripInset-s7NayL",
              "tab-strip-flush-start" === p && "TabStripFlushStart-C9qRZk",
            )),
            (l[0] = o),
            (l[1] = c),
            (l[2] = p),
            (l[3] = m),
            (l[4] = t),
            (l[5] = n))
          : ((t = l[4]), (n = l[5])),
        l[6] !== t || l[7] !== u || l[8] !== n
          ? ((s = (0, a.jsx)("div", { className: n, "data-app-shell-header-toolbar": !0, style: t, children: u })),
            (l[6] = t),
            (l[7] = u),
            (l[8] = n),
            (l[9] = s))
          : (s = l[9]),
        s
      )
    }
    function l(e) {
      let t,
        n,
        s,
        l = (0, i.c)(9),
        { children: o, compact: c, allowShrink: u, secondary: _ } = e,
        d = void 0 !== u && u ? "min-w-0" : "shrink-0",
        p = void 0 !== c && c ? "gap-px" : "gap-toolbar-action"
      return (
        l[0] !== d || l[1] !== p
          ? ((t = (0, r.A)("ms-auto flex items-center justify-end", d, p)), (l[0] = d), (l[1] = p), (l[2] = t))
          : (t = l[2]),
        l[3] !== _
          ? ((n =
              null != _
                ? (0, a.jsx)("div", { className: "hidden @2xl/app-shell-header-toolbar:contents", children: _ })
                : null),
            (l[3] = _),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== o || l[6] !== t || l[7] !== n
          ? ((s = (0, a.jsxs)("div", { className: t, children: [n, o] })),
            (l[5] = o),
            (l[6] = t),
            (l[7] = n),
            (l[8] = s))
          : (s = l[8]),
        s
      )
    }
    function o(e) {
      let t,
        n,
        s,
        l = (0, i.c)(5),
        { visible: o } = e,
        c = !(void 0 === o || o) && "invisible"
      return (
        l[0] !== c
          ? ((t = (0, r.A)("pointer-events-none flex shrink-0 py-1.5", c)), (l[0] = c), (l[1] = t))
          : (t = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("div", { className: "h-4 w-px bg-border" })), (l[2] = n))
          : (n = l[2]),
        l[3] !== t
          ? ((s = (0, a.jsx)("div", { "aria-hidden": !0, className: t, children: n })), (l[3] = t), (l[4] = s))
          : (s = l[4]),
        s
      )
    }
  },
  rwk8(e, t, n) {
    var a = n("qmMi"),
      i = n("Ywss"),
      r = n("rkZ2"),
      s = n("liTb"),
      l = n("tSEg"),
      o = n("OMIV")
    let c = (0, a.un)(l.GD, ({ get: e, scope: t }) => (0, s.lf)(t.value.pathname) || e(r.SU)),
      u = (0, a.un)(l.GD, ({ get: e }) => !e(c)),
      _ = (0, a.un)(
        l.GD,
        ({ get: e, scope: t }) => !e(c) || (null == (0, i.B6)(s.a, t.value.pathname) && e(o.JW, "451195040")),
      )
    n.d(t, {}, { K: u, i: _ })
  },
  T5JX(e, t, n) {
    let a
    n("X1mr")
    var i = n("lXEa")
    let r = "[1,null]",
      s = Promise.resolve(),
      l = new Map(),
      o = new Map()
    async function c(e, t, n) {
      let s,
        l = performance.now(),
        o = t && (n?.includeSessionObserver ?? "checkout_session_approval" === e),
        c = {},
        T = !1,
        E = "error",
        g = u(async () => {
          if (T) return c
          let n = await m(t).catch(() => null)
          if (T) return c
          if (o && null != n) {
            await _(n, "chatgpt_checkout", () => T)
            let e = a
            if ((!T && e?.needsInit && null != e.signal && !e.signal.aborted && (await d(n, e).catch(() => void 0)), T))
              return c
            null != e && (e.needsInit = !0)
            let t = await n?.sessionObserverToken?.("chatgpt_checkout").catch(() => null)
            ;((a = void 0), t && (c["OpenAI-Sentinel-SO-Token"] = t))
          }
          if (T) return c
          if (null != n)
            try {
              if (
                (await _(n, e, () => T),
                T ||
                  ((c[i.UP.sentinelToken] = await n.token(e)),
                  (E = c[i.UP.sentinelToken] ? "ready" : "error"),
                  a?.flow === e && (a.needsInit = !1),
                  T))
              )
                return c
              c[i.UP.timing] = (await n.timing?.()) ?? r
            } catch {
              c[i.UP.sentinelToken] || Object.assign(c, p(e))
            }
          return (t, c)
        })
      try {
        let a = await Promise.race([
          g,
          new Promise((t) => {
            s = setTimeout(() => {
              ;((T = !0),
                t({
                  ...p(e),
                  ...c,
                  ...(o && !c["OpenAI-Sentinel-SO-Token"]
                    ? { "OpenAI-Sentinel-SO-Token": JSON.stringify({ e: "client_timeout" }) }
                    : {}),
                }))
            }, n?.timeoutMs ?? 5e3)
          }),
        ])
        return (
          n?.onComplete != null && n.onComplete({ outcome: T ? "timeout" : E, durationMs: performance.now() - l }),
          t ? { [i.UP.sentinelToken]: JSON.stringify({ e: "k9d4s6v3b2" }), [i.UP.timing]: r, ...a } : a
        )
      } finally {
        clearTimeout(s)
      }
    }
    function u(e) {
      let t = s.then(e)
      return (
        (s = t.then(
          () => void 0,
          () => void 0,
        )),
        t
      )
    }
    async function _(e, t, n) {
      if (n()) return
      let i = l.get(t)
      if (a?.flow === t && (null == i || a === i)) return
      let r = a
      ;((a = void 0),
        r?.signal != null && (await e.sessionObserverToken?.(r.flow).catch(() => null)),
        n() || (a = l.get(t) ?? { flow: t, needsInit: !0 }))
    }
    async function d(e, t) {
      t.needsInit = !0
      let n = await e.init?.(t.flow)
      t.needsInit = "string" == typeof n
    }
    function p(e) {
      try {
        let t = window.SentinelSDK?.requirementsToken?.(e)
        if ("string" != typeof t || !t) return {}
        return { [i.UP.sentinelToken]: JSON.stringify({ e: "k9d4s6v3b2", c: t }), [i.UP.timing]: r }
      } catch {
        return {}
      }
    }
    function m(e) {
      return Promise.reject(Error("Sentinel action is unavailable on this host"))
    }
    n.d(
      t,
      {},
      {
        S7: function (e) {},
        Xn: async function (e, t) {
          return c(e, !0, t)
        },
        gL: function (e) {
          let t = o.get(e) ?? { users: 0, controller: new AbortController() }
          return (
            o.has(e) ||
              (o.set(e, t),
              (function (e, t, n) {
                if (t.aborted) return
                let i = { flow: e, signal: t, needsInit: !0 }
                ;(l.set(e, i),
                  u(async () => {
                    if (t.aborted) return
                    let a = await m(n)
                    !t.aborted && (await _(a, e, () => t.aborted), t.aborted || (await d(a, i)))
                  }).catch(() => void 0),
                  t.addEventListener(
                    "abort",
                    () => {
                      ;(l.get(e) === i && l.delete(e),
                        u(async () => {
                          a === i && ((a = void 0), await window.SentinelSDK?.sessionObserverToken?.(e))
                        }).catch(() => void 0))
                    },
                    { once: !0 },
                  ))
              })(e, t.controller.signal, !1)),
            t.users++,
            () => {
              0 == --t.users && (t.controller.abort(), o.delete(e))
            }
          )
        },
        wl: async function (e, t) {
          return c(e, !1, t)
        },
      },
    )
  },
  xEXG(e, t, n) {
    var a = n("QosV"),
      i = n("D7Ms"),
      r = n("T0Rc"),
      s = n("qmMi"),
      l = n("Ietk"),
      o = n("SPnB"),
      c = n("UOa8"),
      u = n("wsqD"),
      _ = n("GaA7"),
      d = n("OWtl"),
      p = n("rvFo")
    function m({
      isCurrentAccountLoading: e,
      isWorkspaceAccount: t,
      isWorkspaceSettingsError: n,
      isWorkspaceSettingsLoading: a,
      shouldCheckWorkspaceSettings: i,
      workspacePermissions: r,
    }) {
      return e
        ? "loading"
        : !1 !== t || i
          ? a
            ? "loading"
            : n || void 0 === r
              ? "unavailable"
              : null == r || r.includes("chatgpt.workspace.project.crud")
                ? "allowed"
                : "disabled_by_admin"
          : "allowed"
    }
    n.d(
      t,
      {},
      {
        d: m,
        e: function () {
          let e,
            t,
            n,
            T,
            E = (0, a.c)(17),
            g = (0, s.gh)(d.u),
            h = (0, s.Ul)(l.nw),
            { authMethod: C } = (0, c.As)(),
            f = (0, s.Ul)(o.chatGptAuthenticatedAccountId$),
            y = (0, s.Ul)(o.kf),
            A = "loaded" === y.status ? "workspace" === y.structure : void 0,
            I = A ? f : null,
            N = "chatgpt" === C && null != I
          ;(E[0] !== g || E[1] !== h || E[2] !== I
            ? ((e =
                null == I
                  ? i.hT
                  : async (e) => {
                      let { signal: t } = e
                      if (h) throw Error("Account input subscription unavailable")
                      return (await (0, l.uc)(g, t), (0, u.K)(I, { signal: t }))
                    }),
              (E[0] = g),
              (E[1] = h),
              (E[2] = I),
              (E[3] = e))
            : (e = E[3]),
            E[4] !== I ? ((t = ["accounts", "settings", I]), (E[4] = I), (E[5] = t)) : (t = E[5]),
            E[6] !== N || E[7] !== e || E[8] !== t
              ? ((n = {
                  enabled: N,
                  queryFn: e,
                  queryKey: t,
                  staleTime: _.appServices?.accessInputs == null ? p.D.ONE_MINUTE : 0,
                }),
                (E[6] = N),
                (E[7] = e),
                (E[8] = t),
                (E[9] = n))
              : (n = E[9]))
          let { data: P, isError: b, isLoading: O } = (0, r.I)(n),
            x = "loading" === y.status,
            R = null != I,
            S = P?.permissions
          return (
            E[10] !== A || E[11] !== b || E[12] !== O || E[13] !== x || E[14] !== R || E[15] !== S
              ? ((T = m({
                  isCurrentAccountLoading: x,
                  isWorkspaceAccount: A,
                  isWorkspaceSettingsError: b,
                  isWorkspaceSettingsLoading: O,
                  shouldCheckWorkspaceSettings: R,
                  workspacePermissions: S,
                })),
                (E[10] = A),
                (E[11] = b),
                (E[12] = O),
                (E[13] = x),
                (E[14] = R),
                (E[15] = S),
                (E[16] = T))
              : (T = E[16]),
            T
          )
        },
      },
    )
  },
  wsqD(e, t, n) {
    var a = n("Ietk"),
      i = n("GaA7"),
      r = n("q77y"),
      s = n("Kwur")
    n.d(
      t,
      {},
      {
        K: async function (e, t) {
          let n = i.appServices?.accessInputs
          if (null == n)
            return s.Request.safeGet("/accounts/{account_id}/settings", {
              parameters: { path: { account_id: e } },
              additionalHeaders: t?.includeAccountHeader ? { "ChatGPT-Account-ID": e } : void 0,
              signal: t?.signal,
            })
          let l = (0, s.getChatGptRequestProfile)(t?.includeAccountHeader ? e : void 0)
          return (0, a.vX)(await (0, r.P)(n.readWorkspaceSettings({ accountId: e, profile: l }), t?.signal))
        },
      },
    )
  },
  VbOM(e, t, n) {
    var a = n("QcW8")
    n.d(t, {}, { c: { kind: "content-chat", durableRoute: { version: 1 }, isAvailable: (e) => e.get(a.dX) } })
  },
  cZk2(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("zd8w"),
      s = n("oyxz"),
      l = n("JNtf"),
      o = n("mUDD")
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            c,
            u,
            _ = (0, i.c)(17),
            {
              open: d,
              onOpenChange: p,
              onCloseAutoFocus: m,
              title: T,
              failed: E,
              embedded: g,
              size: h,
              children: C,
              dialogComponent: f,
              restoreFocusOnUnmount: y,
            } = e,
            A = void 0 !== E && E,
            I = void 0 !== g && g,
            N = void 0 === f ? l.lG : f,
            P = (0, r.useRef)(d)
          ;(_[0] !== d
            ? ((t = () => {
                P.current = d
              }),
              (n = [d]),
              (_[0] = d),
              (_[1] = t),
              (_[2] = n))
            : ((t = _[1]), (n = _[2])),
            (0, r.useLayoutEffect)(t, n))
          let b = I ? "h2" : l.L3
          _[3] !== b || _[4] !== C || _[5] !== A || _[6] !== T
            ? ((c =
                C ??
                (0, a.jsx)(o.R4, {
                  children: (0, a.jsx)(o.OO, {
                    className: "select-none",
                    children: (0, a.jsx)(o.c7, {
                      title: (0, a.jsx)(b, { children: T }),
                      subtitle: A
                        ? (0, a.jsx)(s.A, {
                            id: "codex.dialogLoadState.reload",
                            defaultMessage: "Reload the app and try again",
                          })
                        : void 0,
                    }),
                  }),
                })),
              (_[3] = b),
              (_[4] = C),
              (_[5] = A),
              (_[6] = T),
              (_[7] = c))
            : (c = _[7])
          let O = c
          return (
            _[8] !== N ||
            _[9] !== O ||
            _[10] !== I ||
            _[11] !== m ||
            _[12] !== p ||
            _[13] !== d ||
            _[14] !== y ||
            _[15] !== h
              ? ((u = I
                  ? O
                  : (0, a.jsx)(N, {
                      open: d,
                      size: h,
                      onOpenChange: (e) => {
                        ;((P.current = e), p(e))
                      },
                      contentProps: {
                        "aria-describedby": void 0,
                        onCloseAutoFocus: (e) => {
                          P.current && !y?.() ? e.preventDefault() : m?.(e)
                        },
                      },
                      children: O,
                    })),
                (_[8] = N),
                (_[9] = O),
                (_[10] = I),
                (_[11] = m),
                (_[12] = p),
                (_[13] = d),
                (_[14] = y),
                (_[15] = h),
                (_[16] = u))
              : (u = _[16]),
            u
          )
        },
      },
    )
  },
  okCa(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57"),
      s = n("zd8w"),
      l = n("Wf1j"),
      o = n("YwPh"),
      c = n("BrXf"),
      u = n("bVeK"),
      _ = n("UxN3")
    n.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            n,
            d,
            p,
            m,
            T,
            E,
            g,
            h,
            C = (0, i.c)(70),
            {
              id: f,
              inputRef: y,
              className: A,
              "aria-activedescendant": I,
              "aria-autocomplete": N,
              "aria-controls": P,
              "aria-expanded": b,
              autoFocus: O,
              clearLabel: x,
              disabled: R,
              inputKey: S,
              inputRole: v,
              isClearable: L,
              label: M,
              maxLength: w,
              onFocus: U,
              onKeyDown: D,
              onSearchQueryChange: H,
              placeholder: k,
              readOnly: j,
              searchQuery: G,
              toolbarIconTone: B,
              trailingControl: F,
              variant: K,
            } = e,
            Y = void 0 === L || L,
            W = void 0 === B ? "secondary" : B,
            V = void 0 === K ? "default" : K,
            q = (0, l.A)(),
            z = (0, s.useRef)(null),
            Z = y ?? z,
            $ =
              "settings-dialog" === V ||
              "catalog-compact" === V ||
              "toolbar" === V ||
              "toolbar-action" === V ||
              "toolbar-compact" === V ||
              "directory" === V,
            X =
              ("default" === V || "settings" === V) &&
              "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
            Q = "default" === V && "rounded-full",
            J = "settings" === V && "rounded-button-toolbar",
            ee = $ && "gap-2 border border-primary-outline text-sm leading-5",
            et = $ && "catalog-compact" !== V && "rounded-full px-3",
            en = "catalog-compact" === V && "h-9 rounded-xl px-2",
            ea = $ && "directory" !== V && "bg-transparent",
            ei = "directory" === V && "h-9 bg-white dark:bg-(--gray-200)",
            er = "toolbar" === V && "h-9",
            es = "settings-dialog" === V && "h-10",
            el = "toolbar-action" === V && "h-token-button-composer",
            eo = "toolbar-compact" === V && "h-8 browser:h-9",
            ec =
              "sidebar" === V &&
              "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
            eu = "sidebar-header" === V && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
            e_ = "catalog" === V && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
            ed =
              "catalog-filter" === V && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
            ep =
              "discovery" === V &&
              "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5"
          C[0] !== A ||
          C[1] !== ea ||
          C[2] !== ei ||
          C[3] !== er ||
          C[4] !== es ||
          C[5] !== el ||
          C[6] !== eo ||
          C[7] !== ec ||
          C[8] !== eu ||
          C[9] !== e_ ||
          C[10] !== ed ||
          C[11] !== ep ||
          C[12] !== X ||
          C[13] !== Q ||
          C[14] !== J ||
          C[15] !== ee ||
          C[16] !== et ||
          C[17] !== en
            ? ((t = (0, r.A)(
                "no-drag flex items-center py-0 text-base leading-[18px]",
                X,
                Q,
                J,
                ee,
                et,
                en,
                ea,
                ei,
                er,
                es,
                el,
                eo,
                ec,
                eu,
                e_,
                ed,
                ep,
                A,
              )),
              (C[0] = A),
              (C[1] = ea),
              (C[2] = ei),
              (C[3] = er),
              (C[4] = es),
              (C[5] = el),
              (C[6] = eo),
              (C[7] = ec),
              (C[8] = eu),
              (C[9] = e_),
              (C[10] = ed),
              (C[11] = ep),
              (C[12] = X),
              (C[13] = Q),
              (C[14] = J),
              (C[15] = ee),
              (C[16] = et),
              (C[17] = en),
              (C[18] = t))
            : (t = C[18])
          let em = "sidebar-header" === V || void 0
          ;(C[19] !== $ || C[20] !== W || C[21] !== V
            ? ((n =
                "sidebar" === V
                  ? (0, a.jsx)(c.B, { icon: (0, a.jsx)(o.A, { className: "icon-sm text-secondary" }) })
                  : (0, a.jsxs)("span", {
                      className: "flex shrink-0 items-center justify-center",
                      children: [
                        $ &&
                          (0, a.jsx)(_.b5, {
                            icon: { 16: u.QmT, 20: u.zcw },
                            className: "tertiary" === W ? "text-tertiary" : "text-secondary",
                          }),
                        "discovery" === V && (0, a.jsx)(u.zcw, {}),
                        !$ &&
                          "discovery" !== V &&
                          ("sidebar-header" === V
                            ? (0, a.jsx)(u.QmT, { className: "text-secondary" })
                            : (0, a.jsx)(o.A, { className: "icon-sm text-secondary" })),
                      ],
                    })),
              (C[19] = $),
              (C[20] = W),
              (C[21] = V),
              (C[22] = n))
            : (n = C[22]),
            C[23] !== f || C[24] !== M
              ? ((d = (0, a.jsx)("label", { className: "sr-only", htmlFor: f, children: M })),
                (C[23] = f),
                (C[24] = M),
                (C[25] = d))
              : (d = C[25]))
          let eT = "discovery" === V ? "placeholder:text-default" : "placeholder:text-tertiary",
            eE = $ || "discovery" === V ? "text-sm leading-5" : "text-base leading-[18px]",
            eg = "discovery" === V && "tracking-[-0.15px] max-md:text-base"
          return (
            C[26] !== eT || C[27] !== eE || C[28] !== eg
              ? ((p = (0, r.A)(
                  "min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none",
                  eT,
                  eE,
                  eg,
                )),
                (C[26] = eT),
                (C[27] = eE),
                (C[28] = eg),
                (C[29] = p))
              : (p = C[29]),
            C[30] !== H
              ? ((m = (e) => {
                  H(e.target.value)
                }),
                (C[30] = H),
                (C[31] = m))
              : (m = C[31]),
            C[32] !== I ||
            C[33] !== N ||
            C[34] !== P ||
            C[35] !== b ||
            C[36] !== O ||
            C[37] !== R ||
            C[38] !== f ||
            C[39] !== S ||
            C[40] !== v ||
            C[41] !== w ||
            C[42] !== U ||
            C[43] !== D ||
            C[44] !== k ||
            C[45] !== j ||
            C[46] !== Z ||
            C[47] !== G ||
            C[48] !== p ||
            C[49] !== m
              ? ((T = (0, a.jsx)(
                  "input",
                  {
                    "aria-activedescendant": I,
                    "aria-autocomplete": N,
                    "aria-controls": P,
                    "aria-expanded": b,
                    autoFocus: O,
                    id: f,
                    ref: Z,
                    className: p,
                    autoComplete: "off",
                    disabled: R,
                    maxLength: w,
                    readOnly: j,
                    role: v,
                    type: "text",
                    value: G,
                    onChange: m,
                    onFocus: U,
                    onKeyDown: D,
                    placeholder: k,
                  },
                  S,
                )),
                (C[32] = I),
                (C[33] = N),
                (C[34] = P),
                (C[35] = b),
                (C[36] = O),
                (C[37] = R),
                (C[38] = f),
                (C[39] = S),
                (C[40] = v),
                (C[41] = w),
                (C[42] = U),
                (C[43] = D),
                (C[44] = k),
                (C[45] = j),
                (C[46] = Z),
                (C[47] = G),
                (C[48] = p),
                (C[49] = m),
                (C[50] = T))
              : (T = C[50]),
            C[51] !== x ||
            C[52] !== R ||
            C[53] !== q ||
            C[54] !== Y ||
            C[55] !== H ||
            C[56] !== Z ||
            C[57] !== G ||
            C[58] !== V
              ? ((E =
                  Y && G.length > 0
                    ? (0, a.jsx)("button", {
                        disabled: R,
                        "aria-label":
                          x ?? q.formatMessage({ id: "skills.pageSearchInput.clear", defaultMessage: "Clear search" }),
                        className: (0, r.A)(
                          "flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default",
                          "sidebar" === V && "size-6",
                        ),
                        type: "button",
                        onClick: () => {
                          ;(Z.current?.focus(), H(""))
                        },
                        children: (0, a.jsx)(u.YwO, {}),
                      })
                    : null),
                (C[51] = x),
                (C[52] = R),
                (C[53] = q),
                (C[54] = Y),
                (C[55] = H),
                (C[56] = Z),
                (C[57] = G),
                (C[58] = V),
                (C[59] = E))
              : (E = C[59]),
            C[60] !== F
              ? ((g = null == F ? null : (0, a.jsx)("div", { className: "flex shrink-0 items-center", children: F })),
                (C[60] = F),
                (C[61] = g))
              : (g = C[61]),
            C[62] !== t || C[63] !== em || C[64] !== n || C[65] !== d || C[66] !== T || C[67] !== E || C[68] !== g
              ? ((h = (0, a.jsxs)("div", {
                  className: t,
                  "data-sidebar-header-search": em,
                  children: [n, d, T, E, g],
                })),
                (C[62] = t),
                (C[63] = em),
                (C[64] = n),
                (C[65] = d),
                (C[66] = T),
                (C[67] = E),
                (C[68] = g),
                (C[69] = h))
              : (h = C[69]),
            h
          )
        },
      },
    )
  },
  Ssp7(e, t, n) {
    var a = n("yIgO"),
      i = n("ASxG")
    n.d(
      t,
      {},
      {
        k: function (e, t, n) {
          let {
            canRedeemGiftCard: i,
            shouldShowWallet: r,
            usdBalance: s,
          } = (0, a.pK)(
            null == e
              ? void 0
              : {
                  hasCustomerObject: e.account.processor?.a001?.has_customer_object === !0,
                  hasPaidSubscription: !0 === e.entitlement.has_active_subscription,
                  billingCurrency: e.entitlement.billing_currency,
                },
            t,
            { countryRestrictionsEnabled: n.restrictionsEnabled, isCountryEligible: n.countryEligible },
          )
          return { canRedeem: i, showWallet: r, usdBalance: s }
        },
        x: function (e) {
          let t = e.getLayer("225453312"),
            n = t.get("redemption_country_restrictions_enabled", !1),
            a = e.getContext().user?.country?.trim().toUpperCase(),
            r = i
              .YOg(i.YjP().catch(""))
              .catch([])
              .parse(t.get("redemption_eligible_countries", ["US"]))
              .map((e) => e.trim().toUpperCase())
          return {
            restrictionsEnabled: n,
            countryEligible: !n || (null != a && r.includes(a)),
            usOnly: r.length > 0 && r.every((e) => "US" === e),
          }
        },
      },
    )
  },
  ufra(e, t, n) {
    n.d(t, { e: () => u, x: () => _ })
    var a = n("HqZu")
    let i = new Set(["AD", "AX", "CH", "GB", "MC", "ME", "PF", "RS", "SM", "VA", "XK"])
    var r = n("ASxG"),
      s = n("kK7d"),
      l = n("eShZ")
    let o = r._H3({
        country_code: r.YjP(),
        currency_config: r._H3({ symbol_code: r.YjP().nullish(), pricing_rollout_gate: r.YjP().nullish() }),
      }),
      c = r.Ikc({ detail: r.euz("Country config not found") })
    async function u({ country: e, currency: t, isPricingEnabled: n, prefetchedCountryConfig: r, signal: s }) {
      return (async function ({
        country: e,
        currency: t,
        fetchConfig: n,
        isCountryConfigNotFound: r,
        isPricingEnabled: s,
        prefetchedCountryConfig: l,
      }) {
        let o = e?.trim().toUpperCase(),
          c = t?.trim().toUpperCase(),
          u = o && ((0, a.IC)(o) || i.has(o)) ? "EU" : "US",
          _ = null
        if (o)
          try {
            _ = await (l ?? n(o))
          } catch (e) {
            if (!r(e)) throw e
          }
        if ((c && _?.currency_config?.symbol_code !== c && (_ = await n(c)), null == _)) return n(u)
        let d = _.currency_config?.pricing_rollout_gate
        return d && !(await s(d)) ? n(u) : _
      })({
        country: e,
        currency: t,
        fetchConfig: (e) => d(e, s),
        isPricingEnabled: n,
        prefetchedCountryConfig: r,
        isCountryConfigNotFound: (e) => {
          if (e instanceof l.FetchError && 404 === e.status)
            try {
              return c.safeParse(JSON.parse(e.message)).success
            } catch {}
          return !1
        },
      })
    }
    function _({ country: e, signal: t }) {
      return d(e.trim().toUpperCase(), t)
    }
    async function d(e, t) {
      return o.parse(
        await s.CodexRequest.safeGet("/checkout_pricing_config/configs/{country_code}", {
          parameters: { path: { country_code: e } },
          signal: t,
        }),
      )
    }
  },
  kHrm(e, t, n) {
    n.d(t, {
      l3: () => z,
      Y: () => F,
      bv: () => D,
      ww: () => j,
      oN: () => v,
      RC: () => P,
      fS: () => R,
      Hr: () => I,
      Nu: () => q,
      cD: () => H,
      O2: () => U,
      ms: () => G,
      yD: () => N,
      br: () => V,
      qB: () => M,
      pF: () => w,
      Sf: () => W,
      cl: () => Y,
      sf: () => O,
      Nx: () => x,
    })
    var a = n("B2b6"),
      i = n("NwSQ"),
      r = n("heGF"),
      s = n("TpLQ"),
      l = n("oA04"),
      o = n("zPtR"),
      c = n("mBJV"),
      u = n("Eo00"),
      _ = n("j8ZS"),
      d = n("autu"),
      p = n("xL4V"),
      m = n("MVHH")
    let T = { $type: "protobuf_analytics_events.v1.CheckoutExpressWalletAvailability" }
    var E = n("iRMi"),
      g = n("DBCl"),
      h = n("PFjh")
    n("X1mr")
    var C = n("yGJW"),
      f = n("ilGw"),
      y = n("eShZ"),
      A = n("MqE5")
    function I(e, t, n) {
      let a
      0
    }
    function N(e, t, n, a) {
      if ((0, l.r3)(a))
        try {
          ;(0, C.yy)(e, u.kc, {
            checkoutId: t.checkout_session_id,
            paymentMethodType: n,
            isCheckoutModalEnabled: "full_page" !== (0, l.up)(a, "modal"),
          })
        } catch {}
    }
    function P(e, t, n, a, i) {
      let r
      if (null == i && !(0, l.r3)(a)) return
      try {
        r = S(t, i?.isCheckoutModalEnabled ?? !1, a, i)
      } catch {
        return
      }
      let s = {
        checkoutPlanType: r.plan_type,
        processorEntity: r.processor_entity,
        checkoutKind: r.checkout_kind,
        promotionCampaign: r.promotion_campaign,
        requiresManualApproval: r.requires_manual_approval,
        source: L(new URLSearchParams(window.location.search).get("source")),
        isCheckoutModalEnabled: r.is_checkout_modal_enabled,
        reportedWebTrack: r.reported_web_track,
      }
      try {
        ;(0, C.yy)(e, T, {
          ...s,
          isApplePayShown: String(n.includes("applePay")),
          isExpressCheckoutShown: String(n.length > 0),
          isGooglePayShown: String(n.includes("googlePay")),
        })
      } catch {}
      try {
        ;(0, C.yy)(e, u.rZ, { ...s, expressPaymentMethodCount: String(n.length), metricValue: (0, o.At)(n.length) })
      } catch {}
      for (let r of (v(
        e,
        t,
        "checkout.express_payment_methods_rendered",
        { express_payment_method_count: String(n.length) },
        a,
        i,
      ),
      n.length ? n : ["none"])) {
        v(e, t, "checkout.express_payment_method_shown", { express_payment_method: r }, a, i)
        try {
          ;(0, C.yy)(e, u.Oy, { ...s, expressPaymentMethod: r })
        } catch {}
      }
    }
    function b(e, { durationMs: t, analytics: n, ...a }) {
      let i = (0, s.V3)(t)
      if (null != i)
        try {
          let t = (0, s.dj)({
            ...a,
            checkoutUiMode: "custom",
            reportedWebTrack: "unknown",
            creditCheckoutSurface: n?.creditCheckoutSurface,
            creditCheckoutAccountScope: null == n ? void 0 : "personal",
          })
          Object.assign(t, (0, l.Ib)(n))
          let r = e.get(h.T$)
          ;(r.count("payments", "checkout_client_phase", t),
            r.hist("payments", "checkout_client_phase_duration_ms", t, i))
        } catch {}
    }
    function O(e, t) {
      let n = performance.now()
      return () => b(e, { ...t, entryPoint: (0, r.VB)(t.entryPoint), durationMs: performance.now() - n })
    }
    function x(e, t) {
      let n = performance.now()
      return (a) =>
        b(e, { phase: "credit_modal_confirmation", durationMs: performance.now() - n, outcome: a, analytics: t })
    }
    function R(e, t, n, a = !1, i, r) {
      if (n)
        try {
          e.get(h.T$).count("payments", "checkout.subscribe_click_incomplete_failure", {
            ...S(t, n, r),
            ...(0, s.PZ)({
              hasBillingAddressErrors: !1,
              hasEmailErrors: !1,
              hasPaymentElementErrors: !0,
              hasTaxInfoErrors: !1,
              hasInvalidConfirmError: a,
              isExpressCheckout: !1,
              submitErrorSource: "payment_element",
            }),
          })
        } catch {}
    }
    function S(e, t = !0, n, a) {
      return {
        ...(0, s.wV)({
          checkoutPlanType: a?.checkoutPlanType,
          processorEntity: e.processor_entity,
          checkoutKind: null == a ? "standalone_credit" : (0, r.n_)(e.checkout_kind ?? "standard"),
          requiresManualApproval: e.requires_manual_approval ?? !1,
          isCheckoutModalEnabled: t,
          source: null == a ? void 0 : (0, i.Dq)(e.checkout_kind ?? "standard", e.checkout_session_id, a.search).source,
          reportedWebTrack: "unknown",
        }),
        ...(0, l.kg)(e.experiments),
        checkout_presentation: (0, l.up)(n, t ? "modal" : "full_page"),
        entry_point:
          "codex_purchase_credits_route" === e.entry_point ||
          "codex_credit_purchase_modal" === e.entry_point ||
          "codex_inline_credit_purchase_modal" === e.entry_point
            ? e.entry_point
            : "unknown",
        checkout_provider: e.checkout_session_id.startsWith("oaics_") ? "open_ai" : "stripe",
      }
    }
    function v(e, t, n, a, i, r) {
      try {
        let s = "full_page" !== (0, l.up)(i, "modal"),
          { entry_point: o, checkout_provider: c, ...u } = S(t, r?.isCheckoutModalEnabled ?? s, i, r)
        e.get(h.T$).count("payments", n, { ...u, ...a })
      } catch {}
    }
    function L(e) {
      let t = e?.trim().toLowerCase()
      return t ? ((0, i.E1)(t) ? t : "other") : (0, f.f)()
    }
    function M(e, t) {
      K(e, t, "checkout.credit_modal_presented")
    }
    function w(e, t, n, a) {
      null != n &&
        b(e, {
          phase: "credit_modal_launch_to_visible",
          durationMs: Date.now() - n,
          outcome: "success",
          analytics: t,
          source: L(new URLSearchParams(a).get("source")),
        })
    }
    function U(e, t, n, a) {
      try {
        ;(0, C.yy)(
          e,
          c.Wk9,
          (0, r.A1)(
            {
              checkoutId: n.checkout_session_id,
              processorEntity: n.processor_entity,
              checkoutKind: n.checkout_kind ?? "standalone_credit",
              isCheckoutModalEnabled: !0,
              ...(0, i.Dq)(n.checkout_kind ?? "standalone_credit", n.checkout_session_id, a),
              entryPoint: n.entry_point ?? void 0,
            },
            t,
          ),
        )
      } catch {}
      ;(0, A._)(e, t, "checkout_shown", { checkoutId: n.checkout_session_id, entryPoint: n.entry_point ?? void 0 })
    }
    function D(e, t, n) {
      try {
        ;(0, C.yy)(e, c.I9f, (0, r.VT)(t))
      } catch {}
      ;(0, A._)(e, n, "provider_confirmation_attempted", { checkoutId: t.checkoutId, entryPoint: t.entryPoint })
    }
    function H(e, t, n, a) {
      if (null != t) {
        try {
          ;(0, C.yy)(e, d.cO, {
            checkoutLaunchId: t.checkoutLaunchId,
            creditCheckoutSurface: t.creditCheckoutSurface,
            outcome: n,
            checkoutId: a,
          })
        } catch {}
        K(e, t, "checkout.credit_modal_outcome", {
          outcome: n.replace("CHATGPT_CREDIT_CHECKOUT_MODAL_OUTCOME_TYPE_", ""),
        })
      }
    }
    function k(e) {
      return {
        checkoutId: e.checkout_session_id,
        processorEntity: e.processor_entity,
        checkoutKind: e.checkout_kind ?? "standalone_credit",
        entryPoint: e.entry_point ?? void 0,
        isCheckoutModalEnabled: !0,
        ...(0, i.Dq)(e.checkout_kind ?? "standalone_credit", e.checkout_session_id),
      }
    }
    function j(e, t, n = !0, a) {
      try {
        let a = (0, r.vU)({ ...k(t), isCheckoutModalEnabled: n })
        ;(0, C.yy)(e, p.ai, { ...a, selectedCadence: m.hf[a.selectedCadence] })
      } catch {}
      ;(0, A._)(e, a, "provider_confirmation_succeeded", {
        checkoutId: t.checkout_session_id,
        entryPoint: t.entry_point ?? void 0,
      })
    }
    function G(e, t, n, a, i, s) {
      let l = s?.isCheckoutModalEnabled ?? !0,
        o = null == i ? s?.exception : void 0
      if (s?.isValidationFailure !== !0) {
        if (l) {
          let s = {
            failureReason: null == i ? "unexpected_error" : "confirm_error",
            isExpressCheckout: n,
            selectedPaymentMethodType: a,
            error: i,
          }
          try {
            let n = (0, r.dJ)(k(t), { ...s, requiresManualApproval: t.requires_manual_approval })
            ;(0, C.yy)(e, _.Cf, {
              ...n,
              ...B(o),
              failureReason: _.G3[n.failureReason],
              confirmErrorFamily: _.qh[n.confirmErrorFamily],
            })
          } catch {}
          try {
            ;(0, C.yy)(e, c.HIB, { ...(0, r.UE)(k(t), s), ...B(o) })
          } catch {}
        }
        ;(0, A._)(e, s?.analytics, "payment_in_form_failed", {
          checkoutId: t.checkout_session_id,
          entryPoint: t.entry_point ?? void 0,
        })
      }
      F(e, t, n, a, i, s)
    }
    function B(e) {
      if (void 0 === e) return {}
      if (e instanceof y.FetchError) {
        let t = e.explicitResponseStatus
        return {
          exceptionCategory: "network" === e.errorKind ? "network_error" : "request_error",
          httpStatusCode: null != t && t >= 100 && t <= 599 ? (0, o.At)(t) : void 0,
        }
      }
      return null != e && "object" == typeof e && "name" in e && "AbortError" === e.name
        ? { exceptionCategory: "abort_error" }
        : { exceptionCategory: "network" === (0, g.Vtf)(e) ? "network_error" : "unknown_error" }
    }
    function F(e, t, n, l, o, c) {
      try {
        let u,
          _ = c?.isCheckoutModalEnabled ?? !0,
          d = c?.exception,
          p = (0, a.mV)(d),
          m = "unexpected_error"
        null != o
          ? (m = "confirm_error")
          : !_ &&
            (p?.includes("onRequiresApproval") || p?.includes("approval_method")) &&
            (m = "manual_approval_integration_error")
        let T = e.get(h.T$),
          E = S(t, _, c?.analytics)
        if (
          (c?.checkoutPlanType !== void 0 &&
            ((E.plan_type = c.checkoutPlanType ?? "unknown"),
            (E.checkout_kind = (0, r.n_)(t.checkout_kind ?? "standard")),
            (E.source = (0, i.Dq)(t.checkout_kind ?? "standard", t.checkout_session_id, c.search).source ?? "unknown")),
          c?.approvalResult != null)
        ) {
          let { entry_point: e, ...t } = E
          T.count("payments", "checkout.confirm_approval_failure", {
            ...t,
            approval_result: c.approvalResult,
            billing_country: (_ ? c.billingCountry : c.billingCountry?.trim().toUpperCase()) || "unknown",
            billing_currency: (_ ? c.billingCurrency : c.billingCurrency?.trim().toUpperCase()) || "unknown",
            stage: c.isValidationFailure ? "confirm_invalid" : "confirm_submit",
            is_express_checkout: String(n),
            selected_payment_method_type: l ?? "unknown",
          })
          return
        }
        ;(d instanceof Error ? (u = d.name) : void 0 !== d && (u = typeof d),
          c?.isValidationFailure !== !0 &&
            T.count("payments", "checkout.subscribe_click_error_failure", {
              ...E,
              ...(0, s.CL)({
                failureReason: m,
                isExpressCheckout: n,
                selectedPaymentMethodType: l,
                errorName: d instanceof Error ? d.name : void 0,
              }),
            }),
          T.count("payments", "checkout.confirm_error", {
            ...E,
            ...(0, s.Et)({
              billingCountry: c?.billingCountry,
              billingCurrency: c?.billingCurrency,
              stage: c?.isValidationFailure ? "confirm_invalid" : "confirm_submit",
              failureReason: m,
              isExpressCheckout: n,
              selectedPaymentMethodType: l,
              ...(null != o
                ? { resultType: "error", confirmError: o }
                : {
                    resultType: "exception",
                    error: d,
                    source: "confirm_exception",
                    errorMetadata: {
                      error_category: B(d).exceptionCategory ?? "none",
                      error_name: u,
                      error_code: d instanceof y.FetchError ? d.errorCode : void 0,
                      error_status: d instanceof y.FetchError ? d.status : void 0,
                      error_is_client_error: d instanceof y.FetchError && d.status >= 400 && d.status < 500,
                      error_is_server_error: d instanceof y.FetchError && d.status >= 500,
                    },
                  }),
            }),
          }))
      } catch {}
    }
    function K(e, t, n, a) {
      try {
        var i
        let r
        e.get(h.T$).count("payments", n, {
          ...((i = t),
          {
            ...(0, l.Ib)(i),
            credit_checkout_surface: i.creditCheckoutSurface,
            credit_checkout_account_scope: "personal",
            ...((0, l.r3)(i) && null != i.webMergeExperiment
              ? {
                  checkout_presentation: i.actualPresentation ?? i.webMergeExperiment.requestedPresentation,
                  presentation_xp_experiment: i.webMergeExperiment.experiment,
                  presentation_xp_group: i.webMergeExperiment.group,
                  presentation_xp_rule_id: i.webMergeExperiment.ruleId,
                }
              : {}),
            ...(null == r ? {} : { reported_web_track: r }),
          }),
          ...a,
        })
      } catch {}
    }
    function Y(e, t, n) {
      try {
        ;(0, C.yy)(e, d.Hb, { checkoutId: t, retryTarget: n })
      } catch {}
    }
    function W(e, t, n) {
      try {
        ;(0, C.yy)(e, E.CodexCreditCheckoutRetry, {
          outcome:
            null == n
              ? E.CodexCreditCheckoutRetryOutcome.CODEX_CREDIT_CHECKOUT_RETRY_OUTCOME_SUCCEEDED
              : E.CodexCreditCheckoutRetryOutcome.CODEX_CREDIT_CHECKOUT_RETRY_OUTCOME_FAILED,
          actualPresentation: z(t),
          failureReason: n,
        })
      } catch {}
    }
    function V(e, t, n, a, i = z((0, l.up)(t, "modal")), r) {
      if (null != t) {
        K(e, t, "checkout.credit_preparation_outcome", {
          checkout_presentation: i.replace("CHATGPT_CREDIT_CHECKOUT_PRESENTATION_", "").toLowerCase(),
          outcome: null == a ? "ready" : "failed",
          failure_reason:
            null == a ? "none" : a.replace("CHATGPT_CREDIT_CHECKOUT_PREPARATION_FAILURE_REASON_", "").toLowerCase(),
        })
        try {
          ;(0, C.yy)(e, d.Wn, {
            ...(0, l.by)(t),
            checkoutLaunchId: t.checkoutLaunchId,
            creditCheckoutSurface: t.creditCheckoutSurface,
            originEligible: t.originEligible,
            checkoutId: n,
            accountScope: "personal",
            checkoutPresentation: i,
            elapsedMs: null == a ? (0, l.mv)(t) : void 0,
            outcome:
              null == a
                ? "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_READY"
                : "CHATGPT_CREDIT_CHECKOUT_PREPARATION_OUTCOME_TYPE_FAILED",
            failureReason: a,
            ...r,
          })
        } catch {}
        null == a && (0, A._)(e, t, "checkout_usable", { checkoutId: n })
      }
    }
    function q(e, t, n = {}) {
      if (!(0, l.r3)(t)) return
      let a = (0, l.by)(t),
        { actualPresentation: i } = a
      if (null == i) return
      let r = n.checkoutOpeningId ?? a.checkoutOpeningId,
        s = n.openingKind ?? a.openingKind
      try {
        ;(0, C.yy)(e, d.qY, {
          checkoutLaunchId: t.checkoutLaunchId,
          checkoutLifetimeId: a.checkoutLifetimeId,
          creditCheckoutSurface: t.creditCheckoutSurface,
          actualPresentation: i,
          checkoutId: n.checkoutId,
          checkoutOpeningId: r,
          openingKind: s,
        })
      } catch {}
      ;(0, A._)(e, t, "entry_accepted", { checkoutId: n.checkoutId, checkoutOpeningId: r, openingKind: s })
    }
    function z(e) {
      switch (e) {
        case "full_page":
          return "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_FULL_PAGE"
        case "modal":
          return "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_MODAL"
        case "inline":
          return "CHATGPT_CREDIT_CHECKOUT_PRESENTATION_INLINE"
      }
    }
  },
  MqE5(e, t, n) {
    var a = n("oA04"),
      i = n("autu"),
      r = n("yGJW")
    n.d(
      t,
      {},
      {
        _: function (e, t, n, s) {
          let {
            checkoutLaunchId: l,
            creditCheckoutSurface: o,
            actualPresentation: c,
            presentationXpExperiment: u,
            presentationXpGroup: _,
            presentationXpRuleId: d,
            requestedPresentation: p,
            checkoutOpeningId: m,
            openingKind: T,
          } = (0, a.by)(t)
          if (t?.purchaseAttemptId != null && null != u && null != _ && null != d)
            try {
              ;(0, r.yy)(e, i.Lm, {
                stepType: (function (e) {
                  switch (e) {
                    case "entry_accepted":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_ENTRY_ACCEPTED"
                    case "navigated":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_NAVIGATED"
                    case "checkout_shown":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_SHOWN"
                    case "checkout_usable":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_USABLE"
                    case "payment_method_info_completed":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_METHOD_INFO_COMPLETED"
                    case "billing_address_info_completed":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_BILLING_ADDRESS_INFO_COMPLETED"
                    case "payment_submit_attempted":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_SUBMIT_ATTEMPTED"
                    case "provider_confirmation_attempted":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_ATTEMPTED"
                    case "provider_confirmation_succeeded":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PROVIDER_CONFIRMATION_SUCCEEDED"
                    case "checkout_return_completed":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_CHECKOUT_RETURN_COMPLETED"
                    case "payment_in_form_failed":
                      return "CHATGPT_CREDIT_CHECKOUT_FUNNEL_STEP_TYPE_PAYMENT_IN_FORM_FAILED"
                  }
                })(n),
                checkoutLaunchId: l,
                purchaseAttemptId: t.purchaseAttemptId,
                checkoutId: s.checkoutId,
                checkoutOpeningId: s.checkoutOpeningId ?? m,
                creditCheckoutSurface: o,
                presentationXpExperiment: u,
                presentationXpGroup: _,
                presentationXpRuleId: d,
                requestedPresentation: p,
                actualPresentation: c,
                entryPoint: s.entryPoint,
                openingKind: s.openingKind ?? T,
              })
            } catch {}
        },
      },
    )
  },
  f4th(e, t, n) {
    var a = n("DBCl"),
      i = n("Wbxh"),
      r = n("NF58"),
      s = n("bnxy")
    n.d(
      t,
      {},
      {
        q: async function ({ projectId: e, prompt: t }) {
          let { value: n } = await (0, i.Ts)(a.Q2Y.LOCAL_PROJECTS),
            s = (0, a.b9)(n)[e]
          if (null == s) return null
          let l = await (0, r.OR)({ project: s, prompt: t })
          return {
            cwd: l.cwd,
            projectlessOutputDirectory: l.generatedWorkspace?.outputDirectory ?? null,
            workspaceRoots: l.workspaceRoots,
            projectAssignment: { projectKind: "local", projectId: e },
          }
        },
        w: function (e) {
          let t = new Set(),
            n = []
          for (let a of e) {
            let e = (0, s.XH)(a)
            t.has(e) || (t.add(e), n.push(a))
          }
          return n
        },
      },
    )
  },
  dT9t(e, t, n) {
    var a = n("ufra")
    n.d(t, { e: () => a.e, x: () => a.x })
  },
  cafX(e, t, n) {
    n.d(t, { ConsumerBillingSettings: () => e7 })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("GaEn"),
      s = n("T0Rc"),
      l = n("qmMi"),
      o = n("zd8w"),
      c = n("oyxz"),
      u = n("Ywss"),
      _ = n("UOa8"),
      d = n("OAko"),
      p = n("JGV6"),
      m = n("On09"),
      T = n("OWtl"),
      E = n("jxU8"),
      g = n("QyE3"),
      h = n("hZax"),
      C = n("evRn"),
      f = n("XQoA"),
      y = n("irkb"),
      A = n("xSOA"),
      I = n("Wf1j"),
      N = n("Kwur"),
      P = n("MM0V"),
      b = n("Sm6l"),
      O = n("Sezd"),
      x = n("JNtf"),
      R = n("mUDD"),
      S = n("zLIa"),
      v = n("SGsN"),
      L = n("F0xz"),
      M = n("AKNp"),
      w = n("GEHh"),
      U = n("pO0d"),
      D = n("BSnr"),
      H = n("AWNZ"),
      k = n("ZEx5"),
      j = n("eShZ"),
      G = n("FU68"),
      B = n("YoTg"),
      F = n("Mu1y"),
      K = n("JeFr")
    class Y extends Error {}
    function W(e) {
      let t,
        n,
        r,
        u,
        _,
        d,
        p,
        m,
        E,
        g,
        C,
        f,
        N,
        O,
        x,
        R,
        S,
        j,
        Y,
        W = (0, i.c)(75),
        { accountId: q, scrollToExpense: z, onScrolled: Z } = e,
        $ = (0, l.gh)(T.u),
        X = (0, I.A)()
      W[0] !== q ? ((t = (0, B.Z)(q)), (W[0] = q), (W[1] = t)) : (t = W[1])
      let { data: Q, isLoadingError: J, refetch: ee } = (0, s.I)(t)
      W[2] !== Q ? ((n = (0, K.canShowInvoiceExpensing)(Q)), (W[2] = Q), (W[3] = n)) : (n = W[3])
      let et = n,
        en = (0, o.useRef)(null)
      ;(W[4] !== Z || W[5] !== z
        ? ((r = () => {
            z && en.current && (en.current.scrollIntoView({ block: "center", behavior: "instant" }), Z())
          }),
          (W[4] = Z),
          (W[5] = z),
          (W[6] = r))
        : (r = W[6]),
        W[7] !== Z || W[8] !== z || W[9] !== et
          ? ((u = [z, et, Z]), (W[7] = Z), (W[8] = z), (W[9] = et), (W[10] = u))
          : (u = W[10]),
        (0, o.useEffect)(r, u))
      let ea = (0, o.useRef)(!1)
      ;(W[11] !== $ || W[12] !== et
        ? ((_ = () => {
            et &&
              !ea.current &&
              ((ea.current = !0), (0, G.A)($, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (d = [$, et]),
          (W[11] = $),
          (W[12] = et),
          (W[13] = _),
          (W[14] = d))
        : ((_ = W[13]), (d = W[14])),
        (0, o.useEffect)(_, d))
      let [ei, er] = (0, o.useState)(!1),
        es = (0, o.useRef)(null),
        el = (0, w.j)(),
        eo = (0, h.AS)(),
        ec = (0, y.jE)(),
        eu = (0, o.useRef)(null)
      ;(W[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => () => eu.current?.abort()), (m = []), (W[15] = p), (W[16] = m))
        : ((p = W[15]), (m = W[16])),
        (0, o.useEffect)(p, m),
        W[17] !== q || W[18] !== ei || W[19] !== X || W[20] !== Q?.enabled || W[21] !== ec || W[22] !== $
          ? ((E = {
              networkMode: "always",
              mutationFn: async (e) => {
                let t = new AbortController()
                eu.current = t
                let n = await (0, B.S)(ec, q, e, t.signal)
                !t.signal.aborted &&
                  ((0, G.A)($, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"),
                  Q?.enabled &&
                    !n.enabled &&
                    (0, G.A)($, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_RECURRING_DISABLED"),
                  ei &&
                    ($.get(v.Id).success(
                      X.formatMessage({
                        id: "settings.invoiceExpensing.saved",
                        defaultMessage: "Receipt email preferences saved",
                      }),
                    ),
                    er(!1)))
              },
              retry: !1,
            }),
            (W[17] = q),
            (W[18] = ei),
            (W[19] = X),
            (W[20] = Q?.enabled),
            (W[21] = ec),
            (W[22] = $),
            (W[23] = E))
          : (E = W[23]))
      let { mutate: e_, isPending: ed, isError: ep, reset: em } = (0, A.n)(E)
      if (J) {
        let e
        return (
          W[24] !== ee ? ((e = (0, a.jsx)(F.E, { onRetry: () => void ee() })), (W[24] = ee), (W[25] = e)) : (e = W[25]),
          e
        )
      }
      return et
        ? (W[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, a.jsx)(D.X.Header, {
                title: (0, a.jsx)("span", {
                  ref: en,
                  children: (0, a.jsx)(c.A, { ...K.billingSearchMessages.expense }),
                }),
              })),
              (W[26] = g))
            : (g = W[26]),
          W[27] !== ei ||
          W[28] !== ed ||
          W[29] !== e_ ||
          W[30] !== Q.destination ||
          W[31] !== Q.eligible ||
          W[32] !== Q.enabled ||
          W[33] !== em ||
          W[34] !== $
            ? ((C = (0, a.jsx)(U.GC, {
                entry: K.invoiceExpensingEntry,
                controlSizing: "content",
                control: (e) =>
                  (0, a.jsx)(L.l, {
                    ...e,
                    checked: !0 === Q.enabled,
                    disabled: ed || ei || (!Q.eligible && !Q.enabled),
                    onClick: (e) => {
                      es.current = e.currentTarget
                    },
                    onChange: (e) => {
                      e && null == Q.destination
                        ? (em(),
                          (0, G.A)($, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                          er(!0))
                        : e_({ destination: Q.destination ?? null, enabled: e })
                    },
                  }),
              })),
              (W[27] = ei),
              (W[28] = ed),
              (W[29] = e_),
              (W[30] = Q.destination),
              (W[31] = Q.eligible),
              (W[32] = Q.enabled),
              (W[33] = em),
              (W[34] = $),
              (W[35] = C))
            : (C = W[35]),
          W[36] !== ed ||
          W[37] !== Q.destination ||
          W[38] !== Q.eligible ||
          W[39] !== Q.enabled ||
          W[40] !== em ||
          W[41] !== $
            ? ((f = Q.enabled
                ? (0, a.jsx)(H.ic, {
                    label: (0, a.jsx)(c.A, { id: "settings.invoiceExpensing.workEmail", defaultMessage: "Work email" }),
                    description: (0, a.jsx)("span", {
                      className: "block truncate select-text",
                      title: Q.destination ?? void 0,
                      children: Q.destination,
                    }),
                    controlSizing: "content",
                    control: (0, a.jsx)(b.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: ed || !Q.eligible,
                      onClick: (e) => {
                        ;((es.current = e.currentTarget),
                          em(),
                          (0, G.A)($, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                          er(!0))
                      },
                      children: (0, a.jsx)(c.A, { id: "settings.invoiceExpensing.edit", defaultMessage: "Edit" }),
                    }),
                  })
                : null),
              (W[36] = ed),
              (W[37] = Q.destination),
              (W[38] = Q.eligible),
              (W[39] = Q.enabled),
              (W[40] = em),
              (W[41] = $),
              (W[42] = f))
            : (f = W[42]),
          W[43] !== C || W[44] !== f
            ? ((N = (0, a.jsxs)(k.t, { children: [C, f] })), (W[43] = C), (W[44] = f), (W[45] = N))
            : (N = W[45]),
          W[46] !== Q.eligible || W[47] !== Q.enabled
            ? ((O =
                Q.enabled && !Q.eligible
                  ? (0, a.jsx)(D.X.Footer, {
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.paused",
                        defaultMessage: "Automatic emails are paused for your current plan",
                      }),
                    })
                  : null),
              (W[46] = Q.eligible),
              (W[47] = Q.enabled),
              (W[48] = O))
            : (O = W[48]),
          W[49] !== ei || W[50] !== ep
            ? ((x =
                ep && !ei
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.toggleFailed",
                        defaultMessage: "We couldn\u2019t confirm your preference was saved. Please try again.",
                      }),
                    })
                  : null),
              (W[49] = ei),
              (W[50] = ep),
              (W[51] = x))
            : (x = W[51]),
          W[52] !== el ||
          W[53] !== Q.destination ||
          W[54] !== Q.eligible ||
          W[55] !== Q.enabled ||
          W[56] !== $ ||
          W[57] !== eo
            ? ((R =
                Q.enabled && null != Q.destination && Q.eligible && (0, M.ku)(eo, "invoice_expensing")
                  ? (0, a.jsx)(P.l, {
                      variant: "settings",
                      content: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.businessPrompt",
                        defaultMessage: "Using ChatGPT with your team?",
                      }),
                      primaryCtaText: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.exploreBusiness",
                        defaultMessage: "Explore Business",
                      }),
                      onPrimaryCtaClick: (e) => {
                        ;((0, G.A)(
                          $,
                          "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_EXPLORE_BUSINESS_CLICKED",
                        ),
                          el({
                            currentPlan: null,
                            chatGptContext: { openModalLocation: "invoice_expensing", targetPlan: "team" },
                            defaultTab: "business",
                            nativeSurfaceTabOverride: "business",
                            targetPlan: "team",
                            source: "consumer_billing_invoice_expensing",
                            event: e,
                          }))
                      },
                    })
                  : null),
              (W[52] = el),
              (W[53] = Q.destination),
              (W[54] = Q.eligible),
              (W[55] = Q.enabled),
              (W[56] = $),
              (W[57] = eo),
              (W[58] = R))
            : (R = W[58]),
          W[59] !== N || W[60] !== O || W[61] !== x || W[62] !== R
            ? ((S = (0, a.jsxs)(D.X.Content, { children: [N, O, x, R] })),
              (W[59] = N),
              (W[60] = O),
              (W[61] = x),
              (W[62] = R),
              (W[63] = S))
            : (S = W[63]),
          W[64] !== ei ||
          W[65] !== ep ||
          W[66] !== ed ||
          W[67] !== e_ ||
          W[68] !== Q.destination ||
          W[69] !== Q.eligible ||
          W[70] !== em
            ? ((j = ei
                ? (0, a.jsx)(V, {
                    initialDestination: Q.destination ?? "",
                    isPending: ed,
                    isError: ep,
                    onSave: (e) => e_({ destination: e, enabled: !0 }),
                    eligible: Q.eligible,
                    onEdit: em,
                    onClose: () => er(!1),
                    onCloseAutoFocus: (e) => {
                      es.current?.isConnected && (e.preventDefault(), es.current.focus())
                    },
                  })
                : null),
              (W[64] = ei),
              (W[65] = ep),
              (W[66] = ed),
              (W[67] = e_),
              (W[68] = Q.destination),
              (W[69] = Q.eligible),
              (W[70] = em),
              (W[71] = j))
            : (j = W[71]),
          W[72] !== S || W[73] !== j
            ? ((Y = (0, a.jsxs)(D.X, { children: [g, S, j] })), (W[72] = S), (W[73] = j), (W[74] = Y))
            : (Y = W[74]),
          Y)
        : null
    }
    function V(e) {
      let t,
        n,
        r,
        s,
        l,
        u,
        _,
        d,
        p,
        m,
        T,
        E,
        g = (0, i.c)(37),
        {
          initialDestination: h,
          isPending: C,
          isError: f,
          eligible: y,
          onEdit: A,
          onSave: I,
          onClose: N,
          onCloseAutoFocus: P,
        } = e,
        [O, S] = (0, o.useState)(h),
        v = !C
      ;(g[0] !== P ? ((t = { "aria-describedby": void 0, onCloseAutoFocus: P }), (g[0] = P), (g[1] = t)) : (t = g[1]),
        g[2] !== C || g[3] !== N
          ? ((n = (e) => {
              e || C || N()
            }),
            (g[2] = C),
            (g[3] = N),
            (g[4] = n))
          : (n = g[4]),
        g[5] !== O || g[6] !== y || g[7] !== C || g[8] !== I
          ? ((r = (e) => {
              ;(e.preventDefault(), !C && y && I(O.trim()))
            }),
            (g[5] = O),
            (g[6] = y),
            (g[7] = C),
            (g[8] = I),
            (g[9] = r))
          : (r = g[9]),
        g[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(R.c7, {
              title: (0, a.jsx)(x.L3, {
                children: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.workEmailDialogTitle",
                  defaultMessage: "Work email",
                }),
              }),
            })),
            (g[10] = s))
          : (s = g[10]))
      let L = C || !y
      return (
        g[11] !== A
          ? ((l = (e) => {
              ;(S(e), A())
            }),
            (g[11] = A),
            (g[12] = l))
          : (l = g[12]),
        g[13] !== O || g[14] !== L || g[15] !== l
          ? ((u = (0, a.jsx)(z, { destination: O, disabled: L, onChange: l })),
            (g[13] = O),
            (g[14] = L),
            (g[15] = l),
            (g[16] = u))
          : (u = g[16]),
        g[17] !== f
          ? ((_ = f
              ? (0, a.jsx)(R.OO, {
                  children: (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-warning",
                    children: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.toggleFailed",
                      defaultMessage: "We couldn\u2019t confirm your preference was saved. Please try again.",
                    }),
                  }),
                })
              : null),
            (g[17] = f),
            (g[18] = _))
          : (_ = g[18]),
        g[19] !== O || g[20] !== y || g[21] !== C
          ? ((d = C || !y || !O.trim()), (g[19] = O), (g[20] = y), (g[21] = C), (g[22] = d))
          : (d = g[22]),
        g[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(c.A, { id: "settings.invoiceExpensing.save", defaultMessage: "Save" })), (g[23] = p))
          : (p = g[23]),
        g[24] !== C || g[25] !== d
          ? ((m = (0, a.jsx)(R.Es, {
              children: (0, a.jsx)(b.$, { color: "primary", type: "submit", disabled: d, loading: C, children: p }),
            })),
            (g[24] = C),
            (g[25] = d),
            (g[26] = m))
          : (m = g[26]),
        g[27] !== m || g[28] !== r || g[29] !== u || g[30] !== _
          ? ((T = (0, a.jsxs)(R.R4, { as: "form", onSubmit: r, children: [s, u, _, m] })),
            (g[27] = m),
            (g[28] = r),
            (g[29] = u),
            (g[30] = _),
            (g[31] = T))
          : (T = g[31]),
        g[32] !== v || g[33] !== T || g[34] !== t || g[35] !== n
          ? ((E = (0, a.jsx)(x.lG, {
              open: !0,
              size: "compact",
              showDialogClose: v,
              contentProps: t,
              onOpenChange: n,
              children: T,
            })),
            (g[32] = v),
            (g[33] = T),
            (g[34] = t),
            (g[35] = n),
            (g[36] = E))
          : (E = g[36]),
        E
      )
    }
    function q(e) {
      let t,
        n,
        r,
        s,
        u,
        _,
        d,
        p,
        m,
        E,
        g,
        h,
        C,
        f,
        P,
        S,
        L,
        M,
        w,
        U,
        D,
        H,
        k = (0, i.c)(74),
        { accountId: F, invoiceId: K, preferences: W, onClose: V, onCloseAutoFocus: q } = e,
        Z = (0, l.gh)(T.u),
        $ = (0, I.A)(),
        X = (0, y.jE)(),
        [Q] = (0, o.useState)(W),
        [J, ee] = (0, o.useState)(!1),
        et = (0, o.useId)(),
        [en, ea] = (0, o.useState)(W.destination ?? ""),
        [ei, er] = (0, o.useState)(null == Q.destination),
        es = !Q.enabled && !J,
        el = (0, o.useRef)(null)
      ;(k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => el.current?.abort()), (n = []), (k[0] = t), (k[1] = n))
        : ((t = k[0]), (n = k[1])),
        (0, o.useEffect)(t, n),
        k[2] !== F || k[3] !== es || k[4] !== en || k[5] !== ei || k[6] !== K || k[7] !== X || k[8] !== Z
          ? ((r = async () => {
              let e = new AbortController()
              el.current = e
              let t = e.signal,
                n = en.trim()
              if (es && ei)
                try {
                  let e = await (0, B.S)(X, F, { destination: n, enabled: !0 }, t)
                  ;(t.throwIfAborted(),
                    ea(e.destination ?? n),
                    ee(!0),
                    (0, G.A)(Z, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"))
                } catch (e) {
                  throw new Y("Could not save forwarding settings", { cause: e })
                }
              return (
                await N.Request.safePost("/payments/invoice-expensing/{invoice_id}/send", {
                  parameters: { path: { invoice_id: K } },
                  requestBody: { destination: n },
                  signal: t,
                  retry: "never",
                }),
                n
              )
            }),
            (k[2] = F),
            (k[3] = es),
            (k[4] = en),
            (k[5] = ei),
            (k[6] = K),
            (k[7] = X),
            (k[8] = Z),
            (k[9] = r))
          : (r = k[9]),
        k[10] !== Z
          ? ((s = (e) => {
              el.current?.signal.aborted ||
                e instanceof Y ||
                (0, G.A)(Z, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_FAILED")
            }),
            (k[10] = Z),
            (k[11] = s))
          : (s = k[11]),
        k[12] !== $ || k[13] !== V || k[14] !== Z
          ? ((u = (e) => {
              el.current?.signal.aborted ||
                ((0, G.A)(Z, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_SUCCEEDED"),
                Z.get(v.Id).success(
                  $.formatMessage(
                    { id: "settings.invoiceExpensing.sent", defaultMessage: "Receipt sent to {email}" },
                    { email: e },
                  ),
                ),
                V())
            }),
            (k[12] = $),
            (k[13] = V),
            (k[14] = Z),
            (k[15] = u))
          : (u = k[15]),
        k[16] !== r || k[17] !== s || k[18] !== u
          ? ((_ = { networkMode: "always", mutationFn: r, onError: s, onSuccess: u, retry: !1 }),
            (k[16] = r),
            (k[17] = s),
            (k[18] = u),
            (k[19] = _))
          : (_ = k[19]))
      let { mutate: eo, isPending: ec, error: eu, reset: e_ } = (0, A.n)(_)
      if (k[20] !== eu)
        ((d = eu
          ? eu instanceof Y
            ? "save_failed"
            : eu instanceof j.FetchError &&
                ("invoice_expensing_not_submitted" === eu.errorCode ||
                  (eu.status >= 400 && eu.status < 500 && 408 !== eu.status))
              ? "send_rejected"
              : "send_unconfirmed"
          : null),
          (k[20] = eu),
          (k[21] = d))
      else d = k[21]
      let ed = d,
        ep = !ec
      ;(k[22] !== q ? ((p = { onCloseAutoFocus: q }), (k[22] = q), (k[23] = p)) : (p = k[23]),
        k[24] !== ec || k[25] !== V
          ? ((m = (e) => {
              e || ec || V()
            }),
            (k[24] = ec),
            (k[25] = V),
            (k[26] = m))
          : (m = k[26]),
        k[27] !== ec || k[28] !== eo
          ? ((E = (e) => {
              ;(e.preventDefault(), ec || eo())
            }),
            (k[27] = ec),
            (k[28] = eo),
            (k[29] = E))
          : (E = k[29]),
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(x.L3, {
              children: (0, a.jsx)(c.A, {
                id: "settings.invoiceExpensing.dialogTitle",
                defaultMessage: "Expense ChatGPT to your company",
              }),
            })),
            (k[30] = g))
          : (g = k[30]),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(R.c7, {
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: g,
              subtitle: (0, a.jsx)(x.rr, {
                children: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.dialog.subtitle",
                  defaultMessage: "Send this receipt to your work email for easy expensing.",
                }),
              }),
            })),
            (k[31] = h))
          : (h = k[31]))
      let em = ec || !W.eligible
      ;(k[32] !== e_ || k[33] !== ed
        ? ((C = (e) => {
            ;(ea(e), "send_unconfirmed" !== ed && e_())
          }),
          (k[32] = e_),
          (k[33] = ed),
          (k[34] = C))
        : (C = k[34]),
        k[35] !== en || k[36] !== em || k[37] !== C
          ? ((f = (0, a.jsx)(z, { destination: en, disabled: em, onChange: C })),
            (k[35] = en),
            (k[36] = em),
            (k[37] = C),
            (k[38] = f))
          : (f = k[38]),
        k[39] !== es ||
        k[40] !== et ||
        k[41] !== ei ||
        k[42] !== ec ||
        k[43] !== W.eligible ||
        k[44] !== e_ ||
        k[45] !== ed
          ? ((P = es
              ? (0, a.jsx)(R.OO, {
                  spacing: "large",
                  children: (0, a.jsx)(R.RW, {
                    children: (0, a.jsxs)(R.fh, {
                      children: [
                        (0, a.jsx)(O.S, {
                          id: et,
                          checked: ei,
                          disabled: ec || !W.eligible,
                          onCheckedChange: (e) => {
                            ;(er(e), "send_unconfirmed" !== ed && e_())
                          },
                        }),
                        (0, a.jsx)("label", {
                          className: "text-sm font-medium text-default select-none",
                          htmlFor: et,
                          children: (0, a.jsx)(c.A, {
                            id: "settings.invoiceExpensing.recurring",
                            defaultMessage: "Send future receipts here too",
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : null),
            (k[39] = es),
            (k[40] = et),
            (k[41] = ei),
            (k[42] = ec),
            (k[43] = W.eligible),
            (k[44] = e_),
            (k[45] = ed),
            (k[46] = P))
          : (P = k[46]),
        k[47] !== ed
          ? ((S =
              "save_failed" === ed
                ? (0, a.jsx)(R.OO, {
                    children: (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.saveFailed",
                        defaultMessage:
                          "We couldn\u2019t confirm your preferences were saved. No receipt was sent. Please try again.",
                      }),
                    }),
                  })
                : null),
            (k[47] = ed),
            (k[48] = S))
          : (S = k[48]),
        k[49] !== J || k[50] !== ed
          ? ((L =
              "send_rejected" === ed || "send_unconfirmed" === ed
                ? (0, a.jsx)(R.OO, {
                    children: (0, a.jsxs)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: [
                        J
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(c.A, {
                                  id: "settings.invoiceExpensing.confirmSaved",
                                  defaultMessage: "Your forwarding preferences were saved.",
                                }),
                                " ",
                              ],
                            })
                          : null,
                        "send_unconfirmed" === ed
                          ? (0, a.jsx)(c.A, {
                              id: "settings.invoiceExpensing.sendUnconfirmed",
                              defaultMessage: "This receipt may already have been sent.",
                            })
                          : (0, a.jsx)(c.A, {
                              id: "settings.invoiceExpensing.sendRejected",
                              defaultMessage: "The receipt could not be sent. Please try again.",
                            }),
                      ],
                    }),
                  })
                : null),
            (k[49] = J),
            (k[50] = ed),
            (k[51] = L))
          : (L = k[51]),
        k[52] !== en || k[53] !== ec || k[54] !== W.eligible
          ? ((M = ec || !W.eligible || !en.trim()), (k[52] = en), (k[53] = ec), (k[54] = W.eligible), (k[55] = M))
          : (M = k[55]))
      let eT = ed ?? "initial"
      return (
        k[56] !== eT
          ? ((w = (0, a.jsx)(c.A, {
              id: "settings.invoiceExpensing.sendReceiptAction",
              defaultMessage:
                "{outcome, select, send_unconfirmed {Send another copy} send_rejected {Try again} other {Send receipt}}",
              values: { outcome: eT },
            })),
            (k[56] = eT),
            (k[57] = w))
          : (w = k[57]),
        k[58] !== ec || k[59] !== M || k[60] !== w
          ? ((U = (0, a.jsx)(R.Es, {
              children: (0, a.jsx)(b.$, { color: "primary", type: "submit", disabled: M, loading: ec, children: w }),
            })),
            (k[58] = ec),
            (k[59] = M),
            (k[60] = w),
            (k[61] = U))
          : (U = k[61]),
        k[62] !== E || k[63] !== f || k[64] !== P || k[65] !== S || k[66] !== L || k[67] !== U
          ? ((D = (0, a.jsxs)(R.R4, { as: "form", onSubmit: E, children: [h, f, P, S, L, U] })),
            (k[62] = E),
            (k[63] = f),
            (k[64] = P),
            (k[65] = S),
            (k[66] = L),
            (k[67] = U),
            (k[68] = D))
          : (D = k[68]),
        k[69] !== m || k[70] !== D || k[71] !== ep || k[72] !== p
          ? ((H = (0, a.jsx)(x.lG, {
              open: !0,
              size: "compact",
              showDialogClose: ep,
              contentProps: p,
              onOpenChange: m,
              children: D,
            })),
            (k[69] = m),
            (k[70] = D),
            (k[71] = ep),
            (k[72] = p),
            (k[73] = H))
          : (H = k[73]),
        H
      )
    }
    function z(e) {
      let t,
        n,
        r,
        s,
        l,
        u = (0, i.c)(13),
        { destination: _, disabled: d, onChange: p } = e,
        m = (0, o.useId)()
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, { id: "settings.invoiceExpensing.workEmail", defaultMessage: "Work email" })),
            (u[0] = t))
          : (t = u[0]),
        u[1] !== m
          ? ((n = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: m,
              children: t,
            })),
            (u[1] = m),
            (u[2] = n))
          : (n = u[2]),
        u[3] !== p ? ((r = (e) => p(e.target.value)), (u[3] = p), (u[4] = r)) : (r = u[4]),
        u[5] !== _ || u[6] !== d || u[7] !== m || u[8] !== r
          ? ((s = (0, a.jsx)(S.pd, {
              id: m,
              autoFocus: !0,
              autoComplete: "email",
              type: "email",
              maxLength: 254,
              required: !0,
              disabled: d,
              value: _,
              onChange: r,
            })),
            (u[5] = _),
            (u[6] = d),
            (u[7] = m),
            (u[8] = r),
            (u[9] = s))
          : (s = u[9]),
        u[10] !== n || u[11] !== s
          ? ((l = (0, a.jsx)(R.OO, { spacing: "large", children: (0, a.jsxs)(R.RW, { children: [n, s] }) })),
            (u[10] = n),
            (u[11] = s),
            (u[12] = l))
          : (l = u[12]),
        l
      )
    }
    var Z = n("mvEA"),
      $ = n("v89U"),
      X = n("BDME"),
      Q = n("bVeK"),
      J = n("soaw"),
      ee = n("mXrZ")
    function et(e) {
      let t,
        n,
        r,
        s,
        l,
        o,
        u,
        _,
        d,
        p,
        m,
        T,
        E,
        g = (0, i.c)(49),
        { authorization: h, busy: C, failed: f, termsChanged: y, onConfirm: A, onClose: N } = e,
        P = (0, I.A)(),
        O = h?.mandate_terms,
        S = h?.status === "requires_confirmation" || h?.status === "requires_action",
        v = h?.status === "verified",
        L = h?.status === "awaiting_stripe_migration"
      g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.mandate.title",
            defaultMessage: "Authorize recurring payments",
          })),
          (g[0] = t))
        : (t = g[0])
      let M = t
      if (v) {
        let e
        ;(g[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.authorizedTitle",
              defaultMessage: "Card authorized",
            })),
            (g[1] = e))
          : (e = g[1]),
          (M = e))
      } else if (L) {
        let e
        ;(g[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.receivedTitle",
              defaultMessage: "Bank authorization received",
            })),
            (g[2] = e))
          : (e = g[2]),
          (M = e))
      }
      let w = null
      if (f) {
        let e
        ;(g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.failed",
              defaultMessage:
                "Authorization is not confirmed. Try again to check its status or complete bank approval.",
            })),
            (g[3] = e))
          : (e = g[3]),
          (w = e))
      } else if (y) {
        let e
        ;(g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.changed",
              defaultMessage: "Your authorization details changed. Review the updated terms and authorize again.",
            })),
            (g[4] = e))
          : (e = g[4]),
          (w = e))
      } else if (C) {
        let e
        ;(g[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.checking",
              defaultMessage: "Checking authorization\u2026",
            })),
            (g[5] = e))
          : (e = g[5]),
          (w = e))
      } else if (v) {
        let e
        ;(g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.verified",
              defaultMessage: "Your saved card is authorized for recurring subscription payments",
            })),
            (g[6] = e))
          : (e = g[6]),
          (w = e))
      } else if (L) {
        let e
        ;(g[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.awaitingStripe",
              defaultMessage:
                "Your bank authorization was received. We\u2019re finishing setup for future subscription payments.",
            })),
            (g[7] = e))
          : (e = g[7]),
          (w = e))
      } else if (!S) {
        let e
        ;(g[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.unconfirmed",
              defaultMessage: "Recurring payments are not confirmed yet. Check again, or return to Billing later.",
            })),
            (g[8] = e))
          : (e = g[8]),
          (w = e))
      }
      let U = !C
      return (
        g[9] !== C || g[10] !== N
          ? ((n = (e) => {
              e || C || N()
            }),
            (g[9] = C),
            (g[10] = N),
            (g[11] = n))
          : (n = g[11]),
        g[12] !== C || g[13] !== A
          ? ((r = (e) => {
              ;(e.preventDefault(), C || A())
            }),
            (g[12] = C),
            (g[13] = A),
            (g[14] = r))
          : (r = g[14]),
        g[15] !== M
          ? ((s = (0, a.jsx)(R.c7, { title: (0, a.jsx)(x.L3, { children: M }) })), (g[15] = M), (g[16] = s))
          : (s = g[16]),
        g[17] !== S || g[18] !== P || g[19] !== O
          ? ((l =
              S && null != O
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("p", {
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.mandate.terms",
                          defaultMessage:
                            "Authorize {amountType, select, maximum {up to {amount}} other {{amount}}} every {interval, select, day {{intervalCount, plural, one {day} other {# days}}} week {{intervalCount, plural, one {week} other {# weeks}}} month {{intervalCount, plural, one {month} other {# months}}} other {{intervalCount, plural, one {year} other {# years}}}} for your subscription",
                          values: {
                            amount: (0, ee.J)(P, O.amount, O.currency),
                            amountType: O.amount_type,
                            interval: O.interval,
                            intervalCount: O.interval_count,
                          },
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-secondary",
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.mandate.bankPrompt",
                          defaultMessage: "Your bank may ask you to approve these recurring payments",
                        }),
                      }),
                    ],
                  })
                : null),
            (g[17] = S),
            (g[18] = P),
            (g[19] = O),
            (g[20] = l))
          : (l = g[20]),
        g[21] !== w
          ? ((o = (0, a.jsx)("div", { role: "status", "aria-live": "polite", children: w })), (g[21] = w), (g[22] = o))
          : (o = g[22]),
        g[23] !== l || g[24] !== o
          ? ((u = (0, a.jsx)(R.OO, {
              children: (0, a.jsx)(x.rr, { asChild: !0, children: (0, a.jsxs)("div", { children: [l, o] }) }),
            })),
            (g[23] = l),
            (g[24] = o),
            (g[25] = u))
          : (u = g[25]),
        g[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(c.A, { id: "settings.consumerBilling.mandate.close", defaultMessage: "Back to Billing" })),
            (g[26] = _))
          : (_ = g[26]),
        g[27] !== C || g[28] !== N
          ? ((d = (0, a.jsx)(b.$, { color: "secondary", disabled: C, onClick: N, children: _ })),
            (g[27] = C),
            (g[28] = N),
            (g[29] = d))
          : (d = g[29]),
        g[30] !== S || g[31] !== L || g[32] !== C || g[33] !== O || g[34] !== v
          ? ((p =
              v || L
                ? null
                : (0, a.jsx)(b.$, {
                    color: "primary",
                    type: "submit",
                    disabled: C,
                    children:
                      S && null != O
                        ? (0, a.jsx)(c.A, {
                            id: "settings.consumerBilling.mandate.confirm",
                            defaultMessage: "Authorize card",
                          })
                        : (0, a.jsx)(c.A, {
                            id: "settings.consumerBilling.mandate.checkAgain",
                            defaultMessage: "Check again",
                          }),
                  })),
            (g[30] = S),
            (g[31] = L),
            (g[32] = C),
            (g[33] = O),
            (g[34] = v),
            (g[35] = p))
          : (p = g[35]),
        g[36] !== d || g[37] !== p
          ? ((m = (0, a.jsxs)(R.Es, { children: [d, p] })), (g[36] = d), (g[37] = p), (g[38] = m))
          : (m = g[38]),
        g[39] !== C || g[40] !== m || g[41] !== r || g[42] !== s || g[43] !== u
          ? ((T = (0, a.jsxs)(R.R4, {
              as: "form",
              className: "select-none",
              "aria-busy": C,
              onSubmit: r,
              children: [s, u, m],
            })),
            (g[39] = C),
            (g[40] = m),
            (g[41] = r),
            (g[42] = s),
            (g[43] = u),
            (g[44] = T))
          : (T = g[44]),
        g[45] !== T || g[46] !== U || g[47] !== n
          ? ((E = (0, a.jsx)(x.lG, { open: !0, showDialogClose: U, onOpenChange: n, children: T })),
            (g[45] = T),
            (g[46] = U),
            (g[47] = n),
            (g[48] = E))
          : (E = g[48]),
        E
      )
    }
    var en = n("MVHH"),
      ea = n("yGJW")
    let ei = {
      not_required: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_NOT_REQUIRED",
      unavailable: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_UNAVAILABLE",
      requires_confirmation: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_CONFIRMATION",
      requires_action: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_ACTION",
      processing: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_PROCESSING",
      verified: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_VERIFIED",
      awaiting_stripe_migration: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_AWAITING_STRIPE_MIGRATION",
    }
    function er(e, { actionType: t, status: n, operation: a, providerResult: i }) {
      try {
        ;(0, ea.yy)(e, en.qD, {
          actionType: t,
          location: "CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE",
          status: null == n ? void 0 : ei[n],
          operation: a,
          providerResult: i,
        })
      } catch {}
    }
    function es(e) {
      let t,
        n,
        r,
        _,
        d,
        p,
        m,
        E,
        g,
        C,
        f,
        y,
        A,
        b,
        O,
        x,
        R,
        S,
        v = (0, i.c)(80),
        { accountId: L } = e,
        M = (0, l.gh)(T.u),
        w = (0, u.zy)(),
        U = (0, u.Zp)()
      v[0] !== w.search
        ? ((t = new URLSearchParams(w.search).has("billing_mandate_authorization")), (v[0] = w.search), (v[1] = t))
        : (t = v[1])
      let D = t,
        [H, k] = (0, o.useState)(!1),
        [j, G] = (0, o.useState)(),
        [B, F] = (0, o.useState)(!1),
        [K, Y] = (0, o.useState)(!1),
        [W, V] = (0, o.useState)(!1),
        q = (0, o.useRef)(!1)
      v[2] !== L ? ((n = { accountId: L, bannerShown: !1, dialogOpen: !1 }), (v[2] = L), (v[3] = n)) : (n = v[3])
      let z = (0, o.useRef)(n),
        Z = (0, o.useRef)("CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"),
        ee = (0, J.a)()
      ;(v[4] !== L ? ((r = ["consumer-billing", L, "mandate-authorization"]), (v[4] = L), (v[5] = r)) : (r = v[5]),
        v[6] !== L || v[7] !== M
          ? ((_ = async (e) => {
              let { signal: t } = e,
                n = Z.current
              Z.current = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"
              try {
                let e = await N.Request.safePost("/payments/billing/mandate-authorization", {
                  requestBody: { account_id: L, supports_saved_card_retry: !0 },
                  signal: t,
                })
                return (
                  t.aborted ||
                    er(M, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_STATUS_RECEIVED",
                      operation: n,
                      status: e.status,
                    }),
                  e
                )
              } catch (e) {
                throw (
                  t.aborted ||
                    er(M, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                      operation: n,
                    }),
                  e
                )
              }
            }),
            (v[6] = L),
            (v[7] = M),
            (v[8] = _))
          : (_ = v[8]),
        v[9] !== r || v[10] !== _
          ? ((d = { queryKey: r, queryFn: _, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
            (v[9] = r),
            (v[10] = _),
            (v[11] = d))
          : (d = v[11]))
      let { data: en, isError: ea, isFetching: ei, refetch: es } = (0, s.I)(d),
        el = j ?? en,
        eo = !ei && !ea && el?.status === "not_required",
        ec = (H || D) && !eo,
        eu = el?.status === "requires_confirmation" || el?.status === "requires_action",
        e_ = el?.status === "awaiting_stripe_migration",
        ed = eu || el?.status === "processing" || e_,
        ep = ed && (ec || !ea)
      v[12] !== L || v[13] !== el?.status || v[14] !== ep || v[15] !== ec || v[16] !== M
        ? ((p = () => {
            ;(z.current.accountId !== L && (z.current = { accountId: L, bannerShown: !1, dialogOpen: !1 }),
              ep &&
                !z.current.bannerShown &&
                ((z.current.bannerShown = !0),
                er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_SHOWN",
                  status: el?.status,
                })),
              ec &&
                !z.current.dialogOpen &&
                er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_OPENED",
                  status: el?.status,
                }),
              (z.current.dialogOpen = ec))
          }),
          (v[12] = L),
          (v[13] = el?.status),
          (v[14] = ep),
          (v[15] = ec),
          (v[16] = M),
          (v[17] = p))
        : (p = v[17])
      let em = (0, o.useEffectEvent)(p)
      ;(v[18] !== em
        ? ((m = () => {
            em()
          }),
          (v[18] = em),
          (v[19] = m))
        : (m = v[19]),
        v[20] !== L || v[21] !== ep || v[22] !== ec
          ? ((E = [L, ep, ec]), (v[20] = L), (v[21] = ep), (v[22] = ec), (v[23] = E))
          : (E = v[23]),
        (0, o.useEffect)(m, E),
        v[24] !== w.hash || v[25] !== w.pathname || v[26] !== w.search || v[27] !== U || v[28] !== eo
          ? ((C = () => {
              let e = new URLSearchParams(w.search)
              !e.has("billing_mandate_authorization") ||
                ((["setup_intent", "setup_intent_client_secret", "redirect_status"].some((t) => e.has(t)) || eo) &&
                  (e.delete("setup_intent"),
                  e.delete("setup_intent_client_secret"),
                  e.delete("redirect_status"),
                  eo && e.delete("billing_mandate_authorization"),
                  U({ pathname: w.pathname, search: e.toString(), hash: w.hash }, { replace: !0 })))
            }),
            (g = [w.hash, w.pathname, w.search, U, eo]),
            (v[24] = w.hash),
            (v[25] = w.pathname),
            (v[26] = w.search),
            (v[27] = U),
            (v[28] = eo),
            (v[29] = g),
            (v[30] = C))
          : ((g = v[29]), (C = v[30])),
        (0, o.useEffect)(C, g),
        v[31] !== w.hash || v[32] !== w.pathname || v[33] !== w.search || v[34] !== U
          ? ((f = function () {
              k(!1)
              let e = new URLSearchParams(w.search)
              ;(e.delete("billing_mandate_authorization"),
                U({ pathname: w.pathname, search: e.toString(), hash: w.hash }, { replace: !0 }))
            }),
            (v[31] = w.hash),
            (v[32] = w.pathname),
            (v[33] = w.search),
            (v[34] = U),
            (v[35] = f))
          : (f = v[35]))
      let eT = f,
        eE = (0, I.A)(),
        eg = (0, h.AS)()
      v[36] !== el?.mandate_terms ||
      v[37] !== eT ||
      v[38] !== en ||
      v[39] !== eE ||
      v[40] !== ee ||
      v[41] !== eg ||
      v[42] !== es ||
      v[43] !== j ||
      v[44] !== M
        ? ((y = async function (e) {
            ;(Y(!1), V(!1))
            let t =
              e && el?.mandate_terms != null
                ? "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_CONFIRMATION_PREFLIGHT"
                : "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_DIALOG_REFRESH"
            try {
              var n, a
              let i, r
              Z.current = t
              let s = await es()
              if (!ee()) return
              if (s.isError || null == s.data) return void Y(!0)
              let l = s.data,
                o = j ?? en
              if ((G(l), "not_required" === l.status)) return void eT()
              if (!e || ("requires_confirmation" !== l.status && "requires_action" !== l.status)) return
              if (null == l.client_secret || null == l.publishable_key || null == l.mandate_terms) {
                ;(er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                  Y(!0))
                return
              }
              if (
                ((n = o),
                (a = l),
                (n?.original_payment_method_id ?? null) !== (a.original_payment_method_id ?? null) ||
                  n?.client_secret !== a.client_secret ||
                  n?.publishable_key !== a.publishable_key ||
                  n?.processor_entity !== a.processor_entity ||
                  n?.mandate_terms?.amount !== a.mandate_terms?.amount ||
                  n?.mandate_terms?.currency !== a.mandate_terms?.currency ||
                  n?.mandate_terms?.amount_type !== a.mandate_terms?.amount_type ||
                  n?.mandate_terms?.interval !== a.mandate_terms?.interval ||
                  n?.mandate_terms?.interval_count !== a.mandate_terms?.interval_count)
              )
                return void V(!0)
              let c = await (0, X.c)(l.publishable_key, {
                locale: (0, $.eI)(eE.locale, "elements", (0, $.EG)(eg.getLayer($.Sd.personal))),
              })
              if (!ee()) return
              if (null == c) {
                ;(er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                  Y(!0))
                return
              }
              let u = new URL(window.location.href)
              ;(u.searchParams.delete("setup_intent"),
                u.searchParams.delete("setup_intent_client_secret"),
                u.searchParams.delete("redirect_status"),
                u.searchParams.set("billing_mandate_authorization", "1"),
                (t = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_PROVIDER_CONFIRMATION"),
                er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_CONFIRMATION_STARTED",
                  operation: t,
                  status: l.status,
                }))
              try {
                let e = await c.confirmCardSetup(l.client_secret, {
                  return_url: u.toString(),
                  ...(l.original_payment_method_id ? { payment_method: l.original_payment_method_id } : {}),
                })
                r = (i = null != e.error)
                  ? "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_ERROR"
                  : "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_NO_ERROR"
              } catch {
                ;((i = !0), (r = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_THREW"))
              }
              if (!ee()) return
              ;(er(M, {
                actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_PROVIDER_RETURNED",
                operation: t,
                providerResult: r,
              }),
                (Z.current = t = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_POST_CONFIRMATION_REFRESH"))
              let _ = await es()
              if (!ee()) return
              _.isError || null == _.data
                ? Y(!0)
                : (G(_.data),
                  Y(
                    i &&
                      "verified" !== _.data.status &&
                      "awaiting_stripe_migration" !== _.data.status &&
                      "not_required" !== _.data.status,
                  ),
                  "not_required" === _.data.status && eT())
            } catch {
              ee() &&
                (er(M, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                Y(!0))
            }
          }),
          (v[36] = el?.mandate_terms),
          (v[37] = eT),
          (v[38] = en),
          (v[39] = eE),
          (v[40] = ee),
          (v[41] = eg),
          (v[42] = es),
          (v[43] = j),
          (v[44] = M),
          (v[45] = y))
        : (y = v[45])
      let eh = y
      v[46] !== eh || v[47] !== ee
        ? ((A = function (e) {
            q.current ||
              ((q.current = !0),
              F(!0),
              eh(e).finally(() => {
                ;((q.current = !1), ee() && F(!1))
              }))
          }),
          (v[46] = eh),
          (v[47] = ee),
          (v[48] = A))
        : (A = v[48])
      let eC = A
      if (!ec && (ea || !ed)) return null
      if (e_) {
        let e
        ;(v[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerAuthorized",
              defaultMessage: "Bank authorization received",
            })),
            (v[49] = e))
          : (e = v[49]),
          (b = e))
      } else if (el?.status === "processing") {
        let e
        ;(v[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessing",
              defaultMessage: "Authorization processing",
            })),
            (v[50] = e))
          : (e = v[50]),
          (b = e))
      } else {
        let e
        ;(v[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerTitle",
              defaultMessage: "Authorization required",
            })),
            (v[51] = e))
          : (e = v[51]),
          (b = e))
      }
      if (e_) {
        let e
        ;(v[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerPending",
              defaultMessage:
                "Bank authorization received. We\u2019re finishing setup for future subscription payments.",
            })),
            (v[52] = e))
          : (e = v[52]),
          (O = e))
      } else if (el?.status === "processing") {
        let e
        ;(v[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessingBody",
              defaultMessage: "Your bank authorization is still processing. Check its status before trying again.",
            })),
            (v[53] = e))
          : (e = v[53]),
          (O = e))
      } else {
        let e
        ;(v[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerBody",
              defaultMessage: "Authorize your card to enable future subscription payments",
            })),
            (v[54] = e))
          : (e = v[54]),
          (O = e))
      }
      return (
        v[55] !== eu ||
        v[56] !== el?.status ||
        v[57] !== eC ||
        v[58] !== O ||
        v[59] !== en ||
        v[60] !== M ||
        v[61] !== ed ||
        v[62] !== b
          ? ((x = ed
              ? (0, a.jsx)(P.l, {
                  variant: "settings",
                  type: "normal",
                  layout: "horizontal",
                  icon: (0, a.jsx)(Q.Ko7, { className: "text-warning" }),
                  title: b,
                  content: O,
                  primaryCtaColor: "primary",
                  primaryCtaText: eu
                    ? (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.mandate.confirm",
                        defaultMessage: "Authorize card",
                      })
                    : (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.mandate.viewStatus",
                        defaultMessage: "Check status",
                      }),
                  onPrimaryCtaClick: () => {
                    ;(er(M, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_CTA_CLICKED",
                      status: el?.status,
                    }),
                      G(en),
                      k(!0),
                      eu || eC(!1))
                  },
                })
              : null),
            (v[55] = eu),
            (v[56] = el?.status),
            (v[57] = eC),
            (v[58] = O),
            (v[59] = en),
            (v[60] = M),
            (v[61] = ed),
            (v[62] = b),
            (v[63] = x))
          : (x = v[63]),
        v[64] !== eu ||
        v[65] !== el ||
        v[66] !== B ||
        v[67] !== eC ||
        v[68] !== eT ||
        v[69] !== ec ||
        v[70] !== K ||
        v[71] !== ea ||
        v[72] !== ei ||
        v[73] !== D ||
        v[74] !== M ||
        v[75] !== W
          ? ((R = ec
              ? (0, a.jsx)(et, {
                  authorization: el,
                  busy: B || (D && ei),
                  failed: K || ea,
                  termsChanged: W,
                  onConfirm: () => {
                    ;(eu &&
                      el?.mandate_terms != null &&
                      er(M, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_CONFIRM_CLICKED",
                        status: el.status,
                      }),
                      eC(eu))
                  },
                  onClose: () => {
                    ;(z.current.dialogOpen &&
                      ((z.current.dialogOpen = !1),
                      er(M, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_CLOSED",
                        status: el?.status,
                      })),
                      eT())
                  },
                })
              : null),
            (v[64] = eu),
            (v[65] = el),
            (v[66] = B),
            (v[67] = eC),
            (v[68] = eT),
            (v[69] = ec),
            (v[70] = K),
            (v[71] = ea),
            (v[72] = ei),
            (v[73] = D),
            (v[74] = M),
            (v[75] = W),
            (v[76] = R))
          : (R = v[76]),
        v[77] !== x || v[78] !== R
          ? ((S = (0, a.jsxs)(a.Fragment, { children: [x, R] })), (v[77] = x), (v[78] = R), (v[79] = S))
          : (S = v[79]),
        S
      )
    }
    var el = n("Qgfj"),
      eo = n("TjgH"),
      ec = n("bqtn"),
      eu = n("RNul"),
      e_ = n("smwl"),
      ed = n("kK7d"),
      ep = n("i3p7"),
      em = n("kv3R"),
      eT = n("db0t"),
      eE = n("jQyB"),
      eg = n("wbWw")
    function eh(e) {
      let t,
        n,
        r,
        _,
        d,
        p,
        m,
        E,
        g,
        h,
        C,
        f,
        y,
        N,
        P,
        O,
        x,
        R,
        S,
        v,
        M,
        w = (0, i.c)(82),
        { accountId: j } = e,
        B = (0, l.gh)(T.u),
        F = (0, I.A)(),
        Y = (0, u.Zp)(),
        W = (0, o.useId)()
      w[0] !== j ? ((t = (0, eg.r_)(j)), (w[0] = j), (w[1] = t)) : (t = w[1])
      let { data: V, isPending: q, isError: z, refetch: $ } = (0, s.I)(t)
      w[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { enabled: !0, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (w[2] = n))
        : (n = w[2])
      let { data: X, isSuccess: J, isFetching: ee, refetch: et } = (0, e_.q7)(n),
        [en, ea] = (0, o.useState)(null),
        [ei, er] = (0, o.useState)(!1),
        es = (0, o.useRef)(null),
        el = (0, o.useRef)(null)
      w[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = () => {
            es.current?.isConnected ? es.current.focus() : el.current?.focus()
          }),
          (w[3] = r))
        : (r = w[3])
      let eh = r,
        ey = X?.isEnabled ? X.paymentMethod?.payment_method_id : null
      ;(w[4] !== j || w[5] !== $ || w[6] !== et
        ? ((_ = async (e) => {
            switch (e.type) {
              case "default":
                await ed.CodexRequest.safePost("/payments/payment_method/default", {
                  requestBody: { account_id: j, payment_method_id: e.id },
                })
                break
              case "backup":
                await ed.CodexRequest.safePost("/payments/payment_method/backup", {
                  requestBody: { account_id: j, enabled: e.enabled },
                })
                break
              case "remove": {
                let [t, n] = await Promise.all([$(), et()]),
                  a = t.data?.payment_methods.find((t) => t.id === e.id)
                if (
                  t.isError ||
                  null == a ||
                  !(0, ep.Kq)({
                    paymentMethod: a,
                    defaultPaymentMethodId: t.data?.default_payment_method_id,
                    defaultPaymentMethods: t.data?.default_payment_methods,
                    autoReloadPaymentMethodId: n.data?.isEnabled ? n.data.paymentMethod?.payment_method_id : null,
                    autoReloadResolved: n.isSuccess,
                  })
                )
                  throw Error("Payment method is required by billing")
                await ed.CodexRequest.safeDelete("/payments/payment_method/{payment_method_id}", {
                  parameters: { path: { payment_method_id: e.id }, query: { account_id: j } },
                })
              }
            }
          }),
          (w[4] = j),
          (w[5] = $),
          (w[6] = et),
          (w[7] = _))
        : (_ = w[7]),
        w[8] === Symbol.for("react.memo_cache_sentinel") ? ((d = () => er(!1)), (w[8] = d)) : (d = w[8]),
        w[9] !== j || w[10] !== B
          ? ((p = async (e, t) => {
              ;(await (0, eg.fI)(B, j), "remove" === t.type && el.current?.focus())
            }),
            (w[9] = j),
            (w[10] = B),
            (w[11] = p))
          : (p = w[11]),
        w[12] !== _ || w[13] !== p
          ? ((m = { mutationFn: _, onMutate: d, onSuccess: p }), (w[12] = _), (w[13] = p), (w[14] = m))
          : (m = w[14]))
      let { mutate: eA, isPending: eI, isError: eN, variables: eP, reset: eb } = (0, A.n)(m)
      w[15] !== V?.payment_methods || w[16] !== V?.payment_methods.filter
        ? ((E = V?.payment_methods.filter(eC)),
          (w[15] = V?.payment_methods),
          (w[16] = V?.payment_methods.filter),
          (w[17] = E))
        : (E = w[17])
      let eO = E,
        ex = (eO?.length ?? 0) > 1
      if (q) {
        let e
        ;(w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(Z.L, {
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadingPaymentMethods",
                defaultMessage: "Loading payment methods",
              }),
            })),
            (w[18] = e))
          : (e = w[18]),
          (g = e))
      } else if (z) {
        let e
        ;(w[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "alert",
              className: "text-sm text-warning",
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadPaymentMethodsError",
                defaultMessage: "Unable to load payment methods. Please try again.",
              }),
            })),
            (w[19] = e))
          : (e = w[19]),
          (g = e))
      } else {
        let e, t, n, i
        ;(w[20] !== eI ||
        w[21] !== eP ||
        w[22] !== ee ||
        w[23] !== ey ||
        w[24] !== J ||
        w[25] !== V.default_payment_method_id ||
        w[26] !== V.default_payment_methods ||
        w[27] !== V.payment_methods ||
        w[28] !== F ||
        w[29] !== eA ||
        w[30] !== Y ||
        w[31] !== et ||
        w[32] !== W ||
        w[33] !== eb ||
        w[34] !== B
          ? ((e = V.payment_methods.map((e, t) => {
              let n = e.id === V.default_payment_method_id,
                i = eI && eP?.type === "remove" && eP.id === e.id,
                r = (0, ep.JY)(e),
                s = e.id === ey,
                l = !(0, ep.Kq)({
                  paymentMethod: e,
                  defaultPaymentMethodId: V.default_payment_method_id,
                  defaultPaymentMethods: V.default_payment_methods,
                  autoReloadPaymentMethodId: ey,
                  autoReloadResolved: J,
                }),
                o = "card" === e.type || !n
              return (0, a.jsx)(
                H.ic,
                {
                  size: "compact",
                  icon: (0, a.jsx)(Q.Y5G, {}),
                  ...(0, eT.G)(e),
                  control: (0, a.jsxs)(a.Fragment, {
                    children: [
                      r ? (0, a.jsx)(eo.E, { variant: "warning", children: (0, a.jsx)(c.A, { ...ef.expired }) }) : null,
                      n ? (0, a.jsx)(eo.E, { children: (0, a.jsx)(c.A, { ...ef.default }) }) : null,
                      o
                        ? (0, a.jsxs)(ec.Ab, {
                            triggerButton: (0, a.jsx)(b.$, {
                              color: "ghost",
                              radius: "large",
                              size: "inputIcon",
                              "aria-busy": i,
                              "aria-label": F.formatMessage({
                                id: "settings.consumerBilling.paymentActions",
                                defaultMessage: "Open payment method actions",
                              }),
                              disabled: eI,
                              onFocus: (e) => {
                                es.current = e.currentTarget
                              },
                              onPointerDown: (e) => {
                                es.current = e.currentTarget
                              },
                              children: i ? (0, a.jsx)(eu.y, { className: "icon-xs" }) : (0, a.jsx)(Q.e4G, {}),
                            }),
                            children: [
                              n || "custom" === e.type
                                ? null
                                : (0, a.jsx)(ec.ms.Item, {
                                    disabled: eI,
                                    onSelect: () => {
                                      ;((0, G.A)(
                                        B,
                                        "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_SET_DEFAULT_PAYMENT_METHOD_CLICKED",
                                      ),
                                        eA({ type: "default", id: e.id }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.setDefault",
                                      defaultMessage: "Set as default",
                                    }),
                                  }),
                              "card" === e.type
                                ? (0, a.jsx)(ec.ms.Item, {
                                    disabled: eI,
                                    onSelect: () => {
                                      ;(eb(),
                                        er(!1),
                                        (0, G.A)(
                                          B,
                                          "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_PAYMENT_METHOD_CLICKED",
                                        ),
                                        ea({ type: "edit", method: e }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.editCard",
                                      defaultMessage: "Edit",
                                    }),
                                  })
                                : null,
                              n
                                ? null
                                : (0, a.jsx)(ec.ms.Item, {
                                    tone: "danger",
                                    disabled: eI || ee || l,
                                    focusableWhenDisabled: s && !eI,
                                    "aria-describedby": s ? `${W}-${t}` : void 0,
                                    onSelect: () => {
                                      ;((0, G.A)(
                                        B,
                                        "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_REMOVE_PAYMENT_METHOD_CLICKED",
                                      ),
                                        eA({ type: "remove", id: e.id }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.removeCard",
                                      defaultMessage: "Remove",
                                    }),
                                  }),
                              !n && s
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(ec.ms.Message, {
                                        compact: !0,
                                        children: (0, a.jsx)("span", {
                                          id: `${W}-${t}`,
                                          children: (0, a.jsx)(c.A, {
                                            id: "settings.consumerBilling.autoReloadRemovalHelp",
                                            defaultMessage:
                                              "This card can\u2019t be removed because it\u2019s selected for auto-reload",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)(ec.ms.Item, {
                                        onSelect: () => {
                                          Y("/settings/usage")
                                        },
                                        children: (0, a.jsx)(c.A, {
                                          id: "settings.consumerBilling.manageAutoReload",
                                          defaultMessage: "Manage auto-reload",
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                              n || J || ee
                                ? null
                                : (0, a.jsx)(ec.ms.Item, {
                                    onSelect: () => void et(),
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.retryRemovalProtection",
                                      defaultMessage: "Retry",
                                    }),
                                  }),
                            ],
                          })
                        : null,
                    ],
                  }),
                },
                e.id,
              )
            })),
            (w[20] = eI),
            (w[21] = eP),
            (w[22] = ee),
            (w[23] = ey),
            (w[24] = J),
            (w[25] = V.default_payment_method_id),
            (w[26] = V.default_payment_methods),
            (w[27] = V.payment_methods),
            (w[28] = F),
            (w[29] = eA),
            (w[30] = Y),
            (w[31] = et),
            (w[32] = W),
            (w[33] = eb),
            (w[34] = B),
            (w[35] = e))
          : (e = w[35]),
          w[36] !== V.payment_methods.length
            ? ((t =
                0 === V.payment_methods.length
                  ? (0, a.jsx)(H.ic, {
                      size: "compact",
                      label: (0, a.jsx)("span", {
                        className: "font-normal text-secondary",
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.noPaymentMethods",
                          defaultMessage: "No payment methods available",
                        }),
                      }),
                      control: null,
                    })
                  : null),
              (w[36] = V.payment_methods.length),
              (w[37] = t))
            : (t = w[37]),
          w[38] !== eI || w[39] !== ex || w[40] !== V.backup_payment_method_enabled || w[41] !== F || w[42] !== eA
            ? ((n =
                null != V.backup_payment_method_enabled && ex
                  ? (0, a.jsx)(H.ic, {
                      label: (0, a.jsx)(c.A, { ...ef.backup }),
                      description: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.backupDescription",
                        defaultMessage: "Use another payment method if your default payment method fails",
                      }),
                      control: (0, a.jsx)(L.l, {
                        checked: V.backup_payment_method_enabled,
                        disabled: eI,
                        ariaLabel: F.formatMessage(ef.backup),
                        onChange: (e) => eA({ type: "backup", enabled: e }),
                      }),
                    })
                  : null),
              (w[38] = eI),
              (w[39] = ex),
              (w[40] = V.backup_payment_method_enabled),
              (w[41] = F),
              (w[42] = eA),
              (w[43] = n))
            : (n = w[43]),
          w[44] !== t || w[45] !== n || w[46] !== e
            ? ((i = (0, a.jsxs)(k.t, { children: [e, t, n] })), (w[44] = t), (w[45] = n), (w[46] = e), (w[47] = i))
            : (i = w[47]),
          (g = i))
      }
      return (
        w[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(c.A, { ...K.billingSearchMessages.paymentMethods })), (w[48] = h))
          : (h = w[48]),
        w[49] !== eb || w[50] !== B
          ? ((C = (e) => {
              ;((es.current = e.currentTarget),
                eb(),
                er(!1),
                (0, G.A)(B, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_ADD_PAYMENT_METHOD_CLICKED"),
                ea({ type: "add" }))
            }),
            (w[49] = eb),
            (w[50] = B),
            (w[51] = C))
          : (C = w[51]),
        w[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(c.A, { ...K.billingSearchMessages.addPaymentMethod })), (w[52] = f))
          : (f = w[52]),
        w[53] !== eI || w[54] !== C
          ? ((y = (0, a.jsx)(U.ek, {
              entry: K.paymentMethodsEntry,
              children: (0, a.jsx)(D.X.Header, {
                title: h,
                actions: (0, a.jsx)(b.$, {
                  ref: el,
                  color: "secondary",
                  size: "toolbar",
                  disabled: eI,
                  onClick: C,
                  children: f,
                }),
              }),
            })),
            (w[53] = eI),
            (w[54] = C),
            (w[55] = y))
          : (y = w[55]),
        w[56] !== eI || w[57] !== eP?.type
          ? ((N =
              eI && eP?.type === "remove"
                ? (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.updatingPaymentMethods",
                    defaultMessage: "Updating payment methods\u2026",
                  })
                : null),
            (w[56] = eI),
            (w[57] = eP?.type),
            (w[58] = N))
          : (N = w[58]),
        w[59] !== N
          ? ((P = (0, a.jsx)("p", { role: "status", className: "sr-only", children: N })), (w[59] = N), (w[60] = P))
          : (P = w[60]),
        w[61] !== ei
          ? ((O = ei
              ? (0, a.jsx)("p", {
                  role: "status",
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.paymentMethodAlreadySaved",
                    defaultMessage: "This card is already saved",
                  }),
                })
              : null),
            (w[61] = ei),
            (w[62] = O))
          : (O = w[62]),
        w[63] !== eN || w[64] !== eP
          ? ((x =
              eN && null != eP
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-warning",
                    children: (0, a.jsx)(c.A, { ...ef[`${eP.type}Error`] }),
                  })
                : null),
            (w[63] = eN),
            (w[64] = eP),
            (w[65] = x))
          : (x = w[65]),
        w[66] !== g || w[67] !== P || w[68] !== O || w[69] !== x
          ? ((R = (0, a.jsxs)(D.X.Content, { children: [P, O, x, g] })),
            (w[66] = g),
            (w[67] = P),
            (w[68] = O),
            (w[69] = x),
            (w[70] = R))
          : (R = w[70]),
        w[71] !== j || w[72] !== en?.type
          ? ((S =
              en?.type === "add"
                ? (0, a.jsx)(em.AddPaymentMethodDialog, {
                    accountId: j,
                    allowLocalPaymentMethods: !0,
                    callerSurface: "consumer_billing_settings",
                    onCloseAutoFocus: eh,
                    onClose: () => ea(null),
                    onSuccess: (e) => {
                      let { status: t } = e
                      return er("already_saved" === t)
                    },
                  })
                : null),
            (w[71] = j),
            (w[72] = en?.type),
            (w[73] = S))
          : (S = w[73]),
        w[74] !== j || w[75] !== en
          ? ((v =
              en?.type === "edit"
                ? (0, a.jsx)(eE.I, {
                    accountId: j,
                    methodId: en.method.id,
                    onCloseAutoFocus: eh,
                    onClose: () => ea(null),
                  })
                : null),
            (w[74] = j),
            (w[75] = en),
            (w[76] = v))
          : (v = w[76]),
        w[77] !== y || w[78] !== R || w[79] !== S || w[80] !== v
          ? ((M = (0, a.jsxs)(D.X, { children: [y, R, S, v] })),
            (w[77] = y),
            (w[78] = R),
            (w[79] = S),
            (w[80] = v),
            (w[81] = M))
          : (M = w[81]),
        M
      )
    }
    function eC(e) {
      return "card" === e.type && !(0, ep.JY)(e)
    }
    let ef = (0, el.YK)({
      default: { id: "settings.consumerBilling.defaultCard", defaultMessage: "Default" },
      expired: { id: "settings.consumerBilling.expiredCard", defaultMessage: "Expired" },
      backup: { id: "settings.consumerBilling.backupMethods", defaultMessage: "Backup payment methods" },
      defaultError: {
        id: "settings.consumerBilling.setDefaultPaymentMethodError",
        defaultMessage: "Unable to set default payment method. Please try again.",
      },
      backupError: {
        id: "settings.consumerBilling.backupPaymentMethodsError",
        defaultMessage: "Unable to update backup payment methods setting. Please try again.",
      },
      removeError: {
        id: "settings.consumerBilling.removePaymentMethodError",
        defaultMessage: "Unable to remove payment method. Please try again.",
      },
    })
    var ey = n("mBJV"),
      eA = n("laUo"),
      eI = n("QpGz"),
      eN = n("IzuK"),
      eP = n("XP4n"),
      eb = n("tRqc"),
      eO = n("ra39"),
      ex = n("QG3v")
    let eR = (0, o.lazy)(async () => ({
        default: (await n.e(461991).then(n.bind(n, "jCCd"))).SubscriptionPlatformDialog,
      })),
      eS = (0, o.lazy)(async () => ({
        default: (await n.e(754965).then(n.bind(n, "Aebz"))).SubscriptionRenewalDialog,
      })),
      ev = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(482985), n.e(674999)]).then(n.bind(n, "xaC3"))).PlanDowngradeDialog,
      })),
      eL = (0, o.lazy)(async () => ({ default: (await n.e(531265).then(n.bind(n, "ychY"))).BillingCadenceDialog }))
    function eM(e) {
      let t,
        n,
        r,
        _,
        d,
        p,
        m,
        E,
        g,
        C,
        y,
        A,
        N,
        P,
        O,
        x,
        R,
        S,
        v,
        L,
        M,
        U,
        D,
        j,
        B,
        F,
        K,
        Y,
        W,
        V,
        q,
        z,
        Z,
        $,
        X,
        J,
        ee,
        et,
        en,
        ei,
        er,
        es = (0, i.c)(134),
        { account: el, accountId: eu } = e,
        e_ = (0, l.gh)(T.u),
        ed = (0, I.A)(),
        em = (0, w.j)()
      es[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (es[0] = t)) : (t = es[0])
      let eT = (0, eI.q)(t),
        eE = (0, h.AS)()
      es[1] !== el.account.plan_type
        ? ((n = (0, eA.m6)(el.account.plan_type)), (es[1] = el.account.plan_type), (es[2] = n))
        : (n = es[2])
      let eg = n
      es[3] !== el ? ((r = (0, f.d)(el)), (es[3] = el), (es[4] = r)) : (r = es[4])
      let eh = r,
        eC = (0, u.zy)(),
        ef = (0, u.Zp)()
      es[5] !== el ||
      es[6] !== eu ||
      es[7] !== eh ||
      es[8] !== eC.state?.subscriptionDowngradeAccountId ||
      es[9] !== eC.state?.subscriptionRenewalAccountId ||
      es[10] !== eE
        ? ((_ = () => {
            if ("renew" !== eh) return null
            if (
              eC.state?.subscriptionDowngradeAccountId === eu &&
              !0 === el.entitlement.has_active_subscription &&
              !el.entitlement.is_delinquent &&
              null == el.entitlement.scheduled_plan_change
            ) {
              let e = (0, eA.y_)((0, eN.wN)(el), {
                checkGate: (e) => eE.checkGate(e),
                isPro200PurchaseAvailable: el.is_pro_200_purchase_available,
              })
              if (null != e) return { targetPlan: e }
            }
            return eC.state?.subscriptionRenewalAccountId === eu ? "renewal" : null
          }),
          (es[5] = el),
          (es[6] = eu),
          (es[7] = eh),
          (es[8] = eC.state?.subscriptionDowngradeAccountId),
          (es[9] = eC.state?.subscriptionRenewalAccountId),
          (es[10] = eE),
          (es[11] = _))
        : (_ = es[11])
      let [eM, ew] = (0, o.useState)(_)
      ;(es[12] !== eC || es[13] !== ef
        ? ((d = () => {
            if (eC.state?.subscriptionRenewalAccountId == null && eC.state?.subscriptionDowngradeAccountId == null)
              return
            let e = { ...eC.state }
            ;(delete e.subscriptionRenewalAccountId,
              delete e.subscriptionDowngradeAccountId,
              ef(eC, { replace: !0, state: e }))
          }),
          (p = [eC, ef]),
          (es[12] = eC),
          (es[13] = ef),
          (es[14] = d),
          (es[15] = p))
        : ((d = es[14]), (p = es[15])),
        (0, o.useEffect)(d, p),
        es[16] !== el ? ((m = (0, ep.Ah)(el)), (es[16] = el), (es[17] = m)) : (m = es[17]))
      let eD = m
      es[18] !== eh || es[19] !== eE
        ? ((E =
            "external_manage" !== eh &&
            "renew" !== eh &&
            "compare_plans" === (0, h.XM)(eE, "1450647191").get("manage_plan_cta_copy_variant", "control")),
          (es[18] = eh),
          (es[19] = eE),
          (es[20] = E))
        : (E = es[20])
      let eH = E
      ;(es[21] !== eu ? ((g = (0, eO.Ie)(eu)), (es[21] = eu), (es[22] = g)) : (g = es[22]),
        es[23] !== el
          ? ((C = (0, eP.F9)(el) || ("free" !== el.account.plan_type && null != el.entitlement.discount)),
            (es[23] = el),
            (es[24] = C))
          : (C = es[24]),
        es[25] !== C || es[26] !== g
          ? ((y = { ...g, staleTime: 0, enabled: C }), (es[25] = C), (es[26] = g), (es[27] = y))
          : (y = es[27]))
      let { data: ek } = (0, s.I)(y)
      ;(es[28] !== eE
        ? ((A = (e) => (0, h.XM)(eE, "3768341700").get(e, !1)), (es[28] = eE), (es[29] = A))
        : (A = es[29]),
        es[30] !== eu || es[31] !== ek || es[32] !== A
          ? ((N = (0, eO.gN)(eu, ek, A)), (es[30] = eu), (es[31] = ek), (es[32] = A), (es[33] = N))
          : (N = es[33]))
      let { data: ej } = (0, s.I)(N)
      if (
        es[34] !== el ||
        es[35] !== eu ||
        es[36] !== eM ||
        es[37] !== eD ||
        es[38] !== ej ||
        es[39] !== e_ ||
        es[40] !== eE ||
        es[41] !== ek ||
        es[42] !== eg
      ) {
        K = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t =
              null != (U = (0, eP._N)(el, ek, ej)) &&
              (U.isAcquisitionCandidate || U.isRetentionCandidate) &&
              (0, h.XM)(eE, "2160290604").get("is_yearly_plus_existing_user_subscription_enabled", !1)
          ;((S = U?.isAcquisitionCandidate === !0 && t), (v = U?.isRetentionCandidate === !0 && t))
          let n = null != U && ("yearly" === U.currentCadence || "yearly" === U.scheduledCadence || S)
          if (
            ((M =
              null != U &&
              n &&
              (("monthly" === U.currentCadence && "yearly" === U.scheduledCadence) ||
                ("yearly" === U.currentCadence && null == U.scheduledCadence) ||
                S ||
                v)),
            null == eg)
          ) {
            K = null
            break e
          }
          if (
            ((L = (e) => {
              null != U && ((0, eb.x)(e_, { accountId: eu, state: U, entryPoint: e }), ew({ state: U, entryPoint: e }))
            }),
            (R = null),
            "platform" === eM && null != eD)
          ) {
            let e, t
            ;(es[57] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ew(null)), (es[57] = e)) : (e = es[57]),
              es[58] !== el || es[59] !== eD
                ? ((t = (0, a.jsx)(eR, { account: el, managementSource: eD, onClose: e })),
                  (es[58] = el),
                  (es[59] = eD),
                  (es[60] = t))
                : (t = es[60]),
              (R = t))
          } else if ("renewal" === eM) {
            let e, t
            ;(es[61] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => ew(null)), (es[61] = e)) : (e = es[61]),
              es[62] !== el || es[63] !== eu
                ? ((t = (0, a.jsx)(eS, { account: el, accountId: eu, onClose: e })),
                  (es[62] = el),
                  (es[63] = eu),
                  (es[64] = t))
                : (t = es[64]),
              (R = t))
          } else if ("object" == typeof eM && null != eM) {
            let e
            ;(es[65] !== el || es[66] !== eu || es[67] !== eM
              ? ((e =
                  "targetPlan" in eM
                    ? (0, a.jsx)(ev, { account: el, accountId: eu, targetPlan: eM.targetPlan, onClose: () => ew(null) })
                    : (0, a.jsx)(eL, {
                        accountId: eu,
                        state: eM.state,
                        entryPoint: eM.entryPoint,
                        onClose: () => ew(null),
                      })),
                (es[65] = el),
                (es[66] = eu),
                (es[67] = eM),
                (es[68] = e))
              : (e = es[68]),
              (R = e))
          }
          ;((x = k.t),
            (O = H.ic),
            es[69] !== eg.pricePlan
              ? ((e = (0, a.jsx)(ex.u, { plan: eg.pricePlan })), (es[69] = eg.pricePlan), (es[70] = e))
              : (e = es[70]))
          let i =
            n && null != U
              ? (0, a.jsx)(eo.E, {
                  variant: "outline",
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.cadenceBadge",
                    defaultMessage: "{period, select, yearly {Annual} other {Monthly}}",
                    values: { period: U.currentCadence },
                  }),
                })
              : null
          ;(es[71] !== e || es[72] !== i
            ? ((F = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [e, i] })),
              (es[71] = e),
              (es[72] = i),
              (es[73] = F))
            : (F = es[73]),
            (P = ex.R),
            (D = el),
            es[74] !== el || es[75] !== ej || es[76] !== ek
              ? ((j = (0, eO.T)(el, ek, ej)), (es[74] = el), (es[75] = ej), (es[76] = ek), (es[77] = j))
              : (j = es[77]),
            (B =
              n && U?.scheduledCadence != null
                ? { period: U.scheduledCadence, date: U.renewalDate.toISOString() }
                : void 0))
        }
        ;((es[34] = el),
          (es[35] = eu),
          (es[36] = eM),
          (es[37] = eD),
          (es[38] = ej),
          (es[39] = e_),
          (es[40] = eE),
          (es[41] = ek),
          (es[42] = eg),
          (es[43] = P),
          (es[44] = O),
          (es[45] = x),
          (es[46] = R),
          (es[47] = S),
          (es[48] = v),
          (es[49] = L),
          (es[50] = M),
          (es[51] = U),
          (es[52] = D),
          (es[53] = j),
          (es[54] = B),
          (es[55] = F),
          (es[56] = K))
      } else
        ((P = es[43]),
          (O = es[44]),
          (x = es[45]),
          (R = es[46]),
          (S = es[47]),
          (v = es[48]),
          (L = es[49]),
          (M = es[50]),
          (U = es[51]),
          (D = es[52]),
          (j = es[53]),
          (B = es[54]),
          (F = es[55]),
          (K = es[56]))
      if (K !== Symbol.for("react.early_return_sentinel")) return K
      es[78] !== P || es[79] !== D || es[80] !== j || es[81] !== B
        ? ((Y = (0, a.jsx)(P, { account: D, renewalPrice: j, scheduledCadence: B })),
          (es[78] = P),
          (es[79] = D),
          (es[80] = j),
          (es[81] = B),
          (es[82] = Y))
        : (Y = es[82])
      let eG = "upgrade" === eh ? "upgrade" : "secondary"
      ;(es[83] !== el.account.plan_type ||
      es[84] !== eh ||
      es[85] !== eT ||
      es[86] !== eD ||
      es[87] !== em ||
      es[88] !== e_ ||
      es[89] !== eg.pricePlan
        ? ((W = (e) => {
            "external_manage" === eh && null != eD
              ? ("partner_managed" !== eD &&
                  (0, G.A)(
                    e_,
                    "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_MOBILE_MANAGE_CLICKED",
                    "app_store" === eD
                      ? "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_APP_STORE"
                      : "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_GOOGLE_PLAY_STORE",
                  ),
                ew("platform"))
              : "renew" === eh
                ? ((0, G.A)(e_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_RENEW_PLAN_CLICKED"), ew("renewal"))
                : ("free" === el.account.plan_type &&
                    (0, ea.yy)(e_, ey.Yvh, {
                      action: "CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED",
                      entryPoint: "CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_SUBSCRIPTION_SETTINGS",
                      productExperience: "CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT",
                    }),
                  (0, G.A)(e_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CHANGE_PLAN_CLICKED"),
                  em({
                    currentPlan: eg.pricePlan,
                    event: e,
                    getPricingUrl: eT,
                    nativeSurfaceTabOverride: "personal",
                    source: "consumer_billing_settings_plan_row",
                  }))
          }),
          (es[83] = el.account.plan_type),
          (es[84] = eh),
          (es[85] = eT),
          (es[86] = eD),
          (es[87] = em),
          (es[88] = e_),
          (es[89] = eg.pricePlan),
          (es[90] = W))
        : (W = es[90]),
        es[91] !== eh
          ? ((V = "upgrade" === eh ? (0, a.jsx)(Q.JRA, {}) : null), (es[91] = eh), (es[92] = V))
          : (V = es[92]))
      let eB = String(eH)
      return (
        es[93] !== eh || es[94] !== eB
          ? ((q = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.planAction.genericRenewal",
              defaultMessage:
                "{action, select, external_manage {Manage} renew {Renew plan} upgrade {{compare, select, true {Compare plans} other {Upgrade}}} change {{compare, select, true {Compare plans} other {Change plan}}} other {{compare, select, true {Compare plans} other {View plans}}}}",
              values: { action: eh, compare: eB },
            })),
            (es[93] = eh),
            (es[94] = eB),
            (es[95] = q))
          : (q = es[95]),
        es[96] !== eG || es[97] !== W || es[98] !== V || es[99] !== q
          ? ((z = (0, a.jsxs)(b.$, { color: eG, size: "toolbar", type: "button", onClick: W, children: [V, q] })),
            (es[96] = eG),
            (es[97] = W),
            (es[98] = V),
            (es[99] = q),
            (es[100] = z))
          : (z = es[100]),
        es[101] !== ed || es[102] !== L || es[103] !== M
          ? ((Z = M
              ? (0, a.jsx)(ec.Ab, {
                  align: "end",
                  triggerButton: (0, a.jsx)(b.$, {
                    color: "secondary",
                    size: "inputIcon",
                    type: "button",
                    "aria-label": ed.formatMessage({
                      id: "settings.consumerBilling.cadenceActionsLabel",
                      defaultMessage: "Billing schedule options",
                    }),
                    children: (0, a.jsx)(Q.l0Y, {}),
                  }),
                  children: (0, a.jsx)(ec.ms.Item, {
                    onClick: () => L("manage_billing_schedule"),
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.manageCadence",
                      defaultMessage: "Manage billing schedule",
                    }),
                  }),
                })
              : null),
            (es[101] = ed),
            (es[102] = L),
            (es[103] = M),
            (es[104] = Z))
          : (Z = es[104]),
        es[105] !== z || es[106] !== Z
          ? (($ = (0, a.jsxs)(a.Fragment, { children: [z, Z] })), (es[105] = z), (es[106] = Z), (es[107] = $))
          : ($ = es[107]),
        es[108] !== O || es[109] !== F || es[110] !== Y || es[111] !== $
          ? ((X = (0, a.jsx)(O, { label: F, description: Y, control: $ })),
            (es[108] = O),
            (es[109] = F),
            (es[110] = Y),
            (es[111] = $),
            (es[112] = X))
          : (X = es[112]),
        es[113] !== U
          ? ((J =
              U?.currentCadence === "yearly" && null == U.scheduledCadence && U.annualSavingsAmount > 0
                ? (0, a.jsx)(eU, { state: U })
                : null),
            (es[113] = U),
            (es[114] = J))
          : (J = es[114]),
        es[115] !== S || es[116] !== L || es[117] !== U
          ? ((ee =
              null != U && S
                ? (0, a.jsx)(eU, { state: U, offer: "annual_offer", onOpen: () => L("annual_offer") })
                : null),
            (es[115] = S),
            (es[116] = L),
            (es[117] = U),
            (es[118] = ee))
          : (ee = es[118]),
        es[119] !== v || es[120] !== L || es[121] !== U
          ? ((et =
              null != U && v
                ? (0, a.jsx)(eU, { state: U, offer: "keep_saving", onOpen: () => L("keep_saving") })
                : null),
            (es[119] = v),
            (es[120] = L),
            (es[121] = U),
            (es[122] = et))
          : (et = es[122]),
        es[123] !== x || es[124] !== X || es[125] !== J || es[126] !== ee || es[127] !== et
          ? ((en = (0, a.jsxs)(x, { children: [X, J, ee, et] })),
            (es[123] = x),
            (es[124] = X),
            (es[125] = J),
            (es[126] = ee),
            (es[127] = et),
            (es[128] = en))
          : (en = es[128]),
        es[129] !== R
          ? ((ei = (0, a.jsx)(o.Suspense, { fallback: null, children: R })), (es[129] = R), (es[130] = ei))
          : (ei = es[130]),
        es[131] !== en || es[132] !== ei
          ? ((er = (0, a.jsxs)(a.Fragment, { children: [en, ei] })), (es[131] = en), (es[132] = ei), (es[133] = er))
          : (er = es[133]),
        er
      )
    }
    function ew(e) {
      let t,
        n,
        r,
        s,
        u,
        _,
        d,
        p,
        m,
        E = (0, i.c)(25),
        { account: g, buttonColor: C, onCancelSubscriptionClick: y } = e,
        A = void 0 === C ? "danger" : C,
        I = (0, l.gh)(T.u),
        N = (0, h.AS)(),
        [P, O] = (0, o.useState)(!1)
      E[0] !== g ? ((t = (0, ep.Ah)(g)), (E[0] = g), (E[1] = t)) : (t = E[1])
      let x = t
      if (!(0, f.n)(g)) return null
      E[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, a.jsx)(c.A, { id: "settings.consumerBilling.cancelPlanTitle", defaultMessage: "Cancel plan" })),
          (E[2] = n))
        : (n = E[2])
      let R = n
      return (
        E[3] !== g.entitlement.is_active_subscription_gratis
          ? ((r = g.entitlement.is_active_subscription_gratis
              ? (0, a.jsx)(c.A, {
                  id: "settings.consumerBilling.cancelGratisPlanDescription",
                  defaultMessage: "If you cancel, access to your plan features will end immediately",
                })
              : (0, a.jsx)(c.A, {
                  id: "settings.consumerBilling.cancelPlanDescription",
                  defaultMessage:
                    "If you cancel, you'll keep full access to your plan features until the end of your billing period",
                })),
            (E[3] = g.entitlement.is_active_subscription_gratis),
            (E[4] = r))
          : (r = E[4]),
        E[5] !== x || E[6] !== y || E[7] !== I
          ? ((s = () => {
              ;((0, G.A)(I, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CANCEL_SUBSCRIPTION_CLICKED"),
                null != x ? O(!0) : y())
            }),
            (E[5] = x),
            (E[6] = y),
            (E[7] = I),
            (E[8] = s))
          : (s = E[8]),
        E[9] !== N
          ? ((u =
              "explicit" === (0, h.hW)(N, "1779238992").get("cancel_plan_cta_copy_variant", "control")
                ? R
                : (0, a.jsx)(c.A, { id: "settings.consumerBilling.cancelPlanButton", defaultMessage: "Cancel" })),
            (E[9] = N),
            (E[10] = u))
          : (u = E[10]),
        E[11] !== A || E[12] !== s || E[13] !== u
          ? ((_ = (0, a.jsx)(b.$, { color: A, size: "toolbar", type: "button", onClick: s, children: u })),
            (E[11] = A),
            (E[12] = s),
            (E[13] = u),
            (E[14] = _))
          : (_ = E[14]),
        E[15] !== r || E[16] !== _
          ? ((d = (0, a.jsx)(k.t, { children: (0, a.jsx)(H.ic, { label: R, description: r, control: _ }) })),
            (E[15] = r),
            (E[16] = _),
            (E[17] = d))
          : (d = E[17]),
        E[18] !== g || E[19] !== P || E[20] !== x
          ? ((p =
              P && null != x
                ? (0, a.jsx)(o.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(eR, { account: g, managementSource: x, onClose: () => O(!1) }),
                  })
                : null),
            (E[18] = g),
            (E[19] = P),
            (E[20] = x),
            (E[21] = p))
          : (p = E[21]),
        E[22] !== d || E[23] !== p
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, p] })), (E[22] = d), (E[23] = p), (E[24] = m))
          : (m = E[24]),
        m
      )
    }
    function eU(e) {
      let t,
        n,
        r,
        s,
        l = (0, i.c)(13),
        { state: o, offer: u, onOpen: _ } = e,
        d = (0, I.A)(),
        p = u ?? "current"
      return (
        l[0] !== d || l[1] !== o.annualSavingsAmount || l[2] !== o.billingCurrency
          ? ((t = d.formatNumber(Math.round(o.annualSavingsAmount), {
              style: "currency",
              currency: o.billingCurrency,
              currencyDisplay: "narrowSymbol",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })),
            (l[0] = d),
            (l[1] = o.annualSavingsAmount),
            (l[2] = o.billingCurrency),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== p || l[5] !== t
          ? ((n = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.annualSavings",
              defaultMessage:
                "{offer, select, annual_offer {Save {amount}/year with annual billing} other {Annual billing saves you {amount}/year}}",
              values: { offer: p, amount: t },
            })),
            (l[4] = p),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]),
        l[7] !== u || l[8] !== _
          ? ((r =
              null == u
                ? null
                : (0, a.jsx)(b.$, {
                    color: "secondary",
                    size: "toolbar",
                    type: "button",
                    onClick: _,
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.annualOfferAction",
                      defaultMessage: "{offer, select, keep_saving {Keep saving} other {View offer}}",
                      values: { offer: u },
                    }),
                  })),
            (l[7] = u),
            (l[8] = _),
            (l[9] = r))
          : (r = l[9]),
        l[10] !== n || l[11] !== r
          ? ((s = (0, a.jsx)(H.ic, { label: n, control: r })), (l[10] = n), (l[11] = r), (l[12] = s))
          : (s = l[12]),
        s
      )
    }
    var eD = n("S2r0"),
      eH = n("DBCl"),
      ek = n("slpy"),
      ej = n("on57"),
      eG = n("ZtSy")
    function eB(e) {
      let t,
        n,
        r,
        u,
        _,
        d,
        p,
        m,
        E,
        g,
        h,
        C,
        f,
        y,
        A = (0, i.c)(29),
        { accountId: N, transactions: P, onViewInvoice: O } = e,
        x = (0, l.gh)(T.u),
        R = (0, I.A)()
      A[0] !== N || A[1] !== P
        ? ((t = P.some(eF)), (n = (0, B.Z)(N, t)), (A[0] = N), (A[1] = P), (A[2] = t), (A[3] = n))
        : ((t = A[2]), (n = A[3]))
      let S = n,
        { data: v } = (0, s.I)(S),
        [L, M] = (0, o.useState)(null),
        w = (0, o.useRef)(null),
        U = (0, o.useRef)(!1),
        D = t && v?.eligible === !0
      ;(A[4] !== D || A[5] !== x
        ? ((r = () => {
            D &&
              !U.current &&
              ((U.current = !0), (0, G.A)(x, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (u = [D, x]),
          (A[4] = D),
          (A[5] = x),
          (A[6] = r),
          (A[7] = u))
        : ((r = A[6]), (u = A[7])),
        (0, o.useEffect)(r, u),
        A[8] !== R ? ((_ = R.formatMessage(eV.transactionHistoryTitle)), (A[8] = R), (A[9] = _)) : (_ = A[9]),
        A[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...eV.transactionTypeHeader }) })),
            (A[10] = d))
          : (d = A[10]),
        A[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...eV.transactionDateHeader }) })),
            (A[11] = p))
          : (p = A[11]),
        A[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...eV.transactionStatusHeader }) })),
            (A[12] = m))
          : (m = A[12]),
        A[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...eV.transactionAmountHeader }) })),
            (A[13] = E))
          : (E = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("thead", {
              className: "sr-only",
              children: (0, a.jsxs)("tr", {
                children: [
                  d,
                  p,
                  m,
                  E,
                  (0, a.jsx)("th", {
                    scope: "col",
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.transactionActions",
                      defaultMessage: "Actions",
                    }),
                  }),
                ],
              }),
            })),
            (A[14] = g))
          : (g = A[14]))
      let H = P.map((e) =>
        (0, a.jsx)(
          eK,
          {
            transaction: e,
            expenseAction:
              D && "invoice" === e.type && e.invoice_expensing_eligible
                ? (0, a.jsx)(b.$, {
                    className: "relative z-10",
                    color: "secondary",
                    size: "toolbar",
                    onClick: (t) => {
                      ;((w.current = t.currentTarget),
                        (0, G.A)(x, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                        M(e.id))
                    },
                    children: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.button.sendForExpensing",
                      defaultMessage: "Expense this",
                    }),
                  })
                : null,
            onViewInvoice: O,
          },
          e.type + e.id,
        ),
      )
      return (
        A[15] !== H ? ((h = (0, a.jsx)("tbody", { children: H })), (A[15] = H), (A[16] = h)) : (h = A[16]),
        A[17] !== g || A[18] !== h || A[19] !== _
          ? ((C = (0, a.jsxs)("table", {
              "aria-label": _,
              className: "w-full border-collapse text-start text-sm",
              children: [g, h],
            })),
            (A[17] = g),
            (A[18] = h),
            (A[19] = _),
            (A[20] = C))
          : (C = A[20]),
        A[21] !== N || A[22] !== L || A[23] !== v || A[24] !== w
          ? ((f =
              null != L && v?.eligible
                ? (0, a.jsx)(q, {
                    accountId: N,
                    invoiceId: L,
                    preferences: v,
                    onClose: () => M(null),
                    onCloseAutoFocus: (e) => {
                      w.current?.isConnected && (e.preventDefault(), w.current.focus())
                    },
                  })
                : null),
            (A[21] = N),
            (A[22] = L),
            (A[23] = v),
            (A[24] = w),
            (A[25] = f))
          : (f = A[25]),
        A[26] !== C || A[27] !== f
          ? ((y = (0, a.jsxs)("div", { className: "overflow-x-auto", children: [C, f] })),
            (A[26] = C),
            (A[27] = f),
            (A[28] = y))
          : (y = A[28]),
        y
      )
    }
    function eF(e) {
      return "invoice" === e.type && e.invoice_expensing_eligible
    }
    function eK(e) {
      let t,
        n,
        r,
        s,
        l,
        o,
        u,
        _,
        d,
        p,
        m,
        T,
        E,
        g,
        h,
        C,
        f,
        y = (0, i.c)(50),
        { transaction: A, expenseAction: N, onViewInvoice: P } = e,
        O = (0, I.A)()
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            added: eV.transactionStatusCredit,
            removed: eV.transactionStatusDebit,
            paid: eV.invoiceStatusPaid,
            due: eV.invoiceStatusDue,
            void: eV.invoiceStatusVoid,
            uncollectible: eV.invoiceStatusUncollectible,
            draft: eV.invoiceStatusDraft,
          }),
          (y[0] = t))
        : (t = y[0])
      let x = t,
        R = "default"
      "added" === A.status
        ? (R = "success")
        : "due" === A.status
          ? (R = "warning")
          : "uncollectible" === A.status && (R = "danger")
      let S = "invoice" === A.type && A.product?.type === "subscription" ? A.product.seat_quantities : null,
        v = "invoice" === A.type ? A.invoice_url : null,
        L =
          v &&
          "relative isolate transform-[translate(0)] hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover"
      ;(y[1] !== L
        ? ((n = (0, ej.A)("border-b border-default last:border-b-0", L)), (y[1] = L), (y[2] = n))
        : (n = y[2]),
        y[3] !== A
          ? ((r = (0, a.jsx)("span", {
              className: "min-w-0 break-words",
              children: (0, a.jsx)(eW, { transaction: A }),
            })),
            (y[3] = A),
            (y[4] = r))
          : (r = y[4]),
        y[5] !== O || y[6] !== A.type
          ? ((s =
              "wallet" === A.type
                ? (0, a.jsx)(ek.m, {
                    content: (0, a.jsx)(c.A, { ...eV.walletAdjustmentTooltip }),
                    children: (0, a.jsx)(b.$, {
                      "aria-label": O.formatMessage(eV.walletAdjustmentTooltipTrigger),
                      color: "ghost",
                      size: "iconCircleSm",
                      children: (0, a.jsx)(Q.zOs, {}),
                    }),
                  })
                : null),
            (y[5] = O),
            (y[6] = A.type),
            (y[7] = s))
          : (s = y[7]),
        y[8] !== r || y[9] !== s
          ? ((l = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [r, s] })),
            (y[8] = r),
            (y[9] = s),
            (y[10] = l))
          : (l = y[10]),
        y[11] !== S
          ? ((o =
              null != S
                ? (0, a.jsx)("span", {
                    className: "block truncate text-xs text-secondary",
                    children: (0, a.jsx)(el.dT, { type: "unit", style: "short", value: S.map(eY) }),
                  })
                : null),
            (y[11] = S),
            (y[12] = o))
          : (o = y[12]),
        y[13] !== l || y[14] !== o
          ? ((u = (0, a.jsxs)("td", { className: "w-1/3 max-w-0 px-3 py-2 text-secondary", children: [l, o] })),
            (y[13] = l),
            (y[14] = o),
            (y[15] = u))
          : (u = y[15]),
        y[16] !== A.created_at
          ? ((_ = (0, a.jsx)("td", {
              className: "px-3 py-2 whitespace-nowrap text-secondary",
              children: (0, a.jsx)(el.XU, { value: A.created_at, month: "numeric", day: "numeric", year: "numeric" }),
            })),
            (y[16] = A.created_at),
            (y[17] = _))
          : (_ = y[17]))
      let M = x[A.status]
      ;(y[18] !== M ? ((d = (0, a.jsx)(c.A, { ...M })), (y[18] = M), (y[19] = d)) : (d = y[19]),
        y[20] !== R || y[21] !== d
          ? ((p = (0, a.jsx)("td", {
              className: "px-3 py-2 text-center",
              children: (0, a.jsx)(eo.E, { variant: R, children: d }),
            })),
            (y[20] = R),
            (y[21] = d),
            (y[22] = p))
          : (p = y[22]))
      let w =
          "added" === A.status
            ? "px-3 py-2 text-end whitespace-nowrap text-chart-green tabular-nums select-text"
            : "px-3 py-2 text-end whitespace-nowrap text-secondary tabular-nums select-text",
        U = v && "relative z-10"
      return (
        y[23] !== U ? ((m = (0, ej.A)(U)), (y[23] = U), (y[24] = m)) : (m = y[24]),
        y[25] !== O || y[26] !== A.amount || y[27] !== A.currency
          ? ((T = (0, ee.J)(O, A.amount, A.currency)),
            (y[25] = O),
            (y[26] = A.amount),
            (y[27] = A.currency),
            (y[28] = T))
          : (T = y[28]),
        y[29] !== m || y[30] !== T
          ? ((E = (0, a.jsx)("span", { className: m, children: T })), (y[29] = m), (y[30] = T), (y[31] = E))
          : (E = y[31]),
        y[32] !== w || y[33] !== E
          ? ((g = (0, a.jsx)("td", { className: w, children: E })), (y[32] = w), (y[33] = E), (y[34] = g))
          : (g = y[34]),
        y[35] !== O || y[36] !== v || y[37] !== P || y[38] !== A.created_at
          ? ((h = v
              ? (0, a.jsx)(eG.G, {
                  appearance: "secondary",
                  "aria-label": O.formatMessage(eV.openInvoiceLinkAriaLabel, { createdDate: new Date(A.created_at) }),
                  className:
                    "after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-ring",
                  href: v,
                  initiator: "open_in_browser_bridge",
                  isBrowserEnabled: !1,
                  onClick: P,
                  children: (0, a.jsx)(Q.uM3, {}),
                })
              : null),
            (y[35] = O),
            (y[36] = v),
            (y[37] = P),
            (y[38] = A.created_at),
            (y[39] = h))
          : (h = y[39]),
        y[40] !== N || y[41] !== h
          ? ((C = (0, a.jsx)("td", {
              className: "px-3 py-2 text-end",
              children: (0, a.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [N, h] }),
            })),
            (y[40] = N),
            (y[41] = h),
            (y[42] = C))
          : (C = y[42]),
        y[43] !== p || y[44] !== g || y[45] !== C || y[46] !== n || y[47] !== u || y[48] !== _
          ? ((f = (0, a.jsxs)("tr", { className: n, children: [u, _, p, g, C] })),
            (y[43] = p),
            (y[44] = g),
            (y[45] = C),
            (y[46] = n),
            (y[47] = u),
            (y[48] = _),
            (y[49] = f))
          : (f = y[49]),
        f
      )
    }
    function eY(e) {
      return (0, a.jsx)(
        c.A,
        {
          ...("default" === e.seat_type ? eV.standardSeatQuantityDelta : eV.premiumSeatQuantityDelta),
          values: { quantityDelta: (0, a.jsx)(el.Gr, { value: e.quantity_delta, signDisplay: "always" }) },
        },
        e.seat_type,
      )
    }
    function eW(e) {
      let t,
        n = (0, i.c)(13),
        { transaction: r } = e
      if ("gift_card" === r.type) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...eV.giftCardTransactionType })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("wallet" === r.type) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...eV.walletAdjustmentTransactionType })), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      switch (r.product?.type) {
        case "credits": {
          let e,
            t = r.product.is_gifted ? eV.giftedCreditsTransactionType : eV.creditsTransactionType
          return (n[2] !== t ? ((e = (0, a.jsx)(c.A, { ...t })), (n[2] = t), (n[3] = e)) : (e = n[3]), e)
        }
        case "credits_top_up": {
          let e
          return (
            n[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, { ...eV.creditsAutoReloadTransactionType })), (n[4] = e))
              : (e = n[4]),
            e
          )
        }
        case "subscription":
          if (r.product.is_seat_purchase) {
            let e
            return (
              n[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.businessSeatsTransactionType })), (n[5] = e))
                : (e = n[5]),
              e
            )
          }
          if (
            ["chatgptteamplan", "self_serve_business_prolite", "chatgptbusiness_usage_based"].includes(r.product.plan)
          ) {
            let e
            return (
              n[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.businessPlanTransactionType })), (n[6] = e))
                : (e = n[6]),
              e
            )
          }
          if (
            ["chatgptgoplan", "chatgptgo_partner_managed", "chatgptgofreeplan_with_expiration"].includes(r.product.plan)
          ) {
            let e
            return (
              n[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.chatGptGoTransactionType })), (n[7] = e))
                : (e = n[7]),
              e
            )
          }
          if (
            [
              "chatgptplusplan",
              "chatgptplus_partner_managed",
              "chatgptplusfreeplan",
              "chatgptplusfreeplan_with_expiration",
              "chatgptplus_sponsored_with_expiration",
            ].includes(r.product.plan)
          ) {
            let e
            return (
              n[8] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.chatGptPlusTransactionType })), (n[8] = e))
                : (e = n[8]),
              e
            )
          }
          if ("chatgptpromax" === r.product.plan || "chatgptpromaxfreeplan_with_expiration" === r.product.plan) {
            let e
            return (
              n[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.chatGptProTierTransactionType, values: { plan: "promax" } })),
                  (n[9] = e))
                : (e = n[9]),
              e
            )
          }
          if (
            [
              "chatgptpro",
              "chatgptproplan",
              "chatgptpro_partner_managed",
              "chatgptprofreeplan",
              "chatgptprofreeplan_with_expiration",
            ].includes(r.product.plan)
          ) {
            let e
            return (
              n[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.chatGptProTierTransactionType, values: { plan: "pro" } })), (n[10] = e))
                : (e = n[10]),
              e
            )
          }
          if (
            ["chatgptprolite", "chatgptprolite_partner_managed", "chatgptprolitefreeplan_with_expiration"].includes(
              r.product.plan,
            )
          ) {
            let e
            return (
              n[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...eV.chatGptProTierTransactionType, values: { plan: "prolite" } })),
                  (n[11] = e))
                : (e = n[11]),
              e
            )
          }
      }
      return (
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, { ...eV.invoiceTransactionType })), (n[12] = t))
          : (t = n[12]),
        t
      )
    }
    let eV = (0, el.YK)({
      transactionHistoryTitle: { id: "settingsModal.transactionHistory.title", defaultMessage: "Transaction history" },
      transactionTypeHeader: { id: "settingsModal.transactionHistory.typeHeader", defaultMessage: "Type" },
      transactionDateHeader: { id: "settingsModal.transactionHistory.dateHeader", defaultMessage: "Date" },
      transactionStatusHeader: { id: "settingsModal.transactionHistory.statusHeader", defaultMessage: "Status" },
      transactionAmountHeader: { id: "settingsModal.transactionHistory.amountHeader", defaultMessage: "Amount" },
      giftCardTransactionType: { id: "settingsModal.transactionHistory.product.giftCard", defaultMessage: "Gift card" },
      walletAdjustmentTransactionType: {
        id: "settingsModal.transactionHistory.product.walletAdjustment",
        defaultMessage: "Adjustment",
      },
      walletAdjustmentTooltip: {
        id: "settingsModal.transactionHistory.product.walletAdjustment.tooltip",
        defaultMessage: "A change to your account balance, such as a refund, credit, or billing correction",
      },
      walletAdjustmentTooltipTrigger: {
        id: "settingsModal.transactionHistory.product.walletAdjustment.tooltipTrigger",
        defaultMessage: "More information about this adjustment",
      },
      creditsTransactionType: { id: "settingsModal.transactionHistory.product.credits", defaultMessage: "Credits" },
      giftedCreditsTransactionType: {
        id: "settingsModal.transactionHistory.product.giftedCredits",
        defaultMessage: "Gifted credits",
      },
      creditsAutoReloadTransactionType: {
        id: "settingsModal.transactionHistory.product.creditsAutoReload",
        defaultMessage: "Credits auto-reload",
      },
      businessPlanTransactionType: {
        id: "settingsModal.transactionHistory.product.businessPlan",
        defaultMessage: "Business plan",
      },
      businessSeatsTransactionType: {
        id: "settingsModal.transactionHistory.product.additionalBusinessSeats",
        defaultMessage: "Seat change",
      },
      chatGptGoTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptGo",
        defaultMessage: "ChatGPT Go",
      },
      chatGptPlusTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptPlus",
        defaultMessage: "ChatGPT Plus",
      },
      chatGptProTierTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptProNumberedTier",
        defaultMessage: "ChatGPT {plan, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
      },
      invoiceTransactionType: { id: "settingsModal.transactionHistory.product.invoice", defaultMessage: "Invoice" },
      transactionStatusCredit: { id: "settingsModal.transactionHistory.status.credit", defaultMessage: "Credit" },
      transactionStatusDebit: { id: "settingsModal.transactionHistory.status.debit", defaultMessage: "Debit" },
      invoiceStatusPaid: { id: "settingsModal.invoiceStatusPaid", defaultMessage: "Paid" },
      invoiceStatusDue: { id: "settingsModal.invoiceStatusDue", defaultMessage: "Due" },
      invoiceStatusVoid: { id: "settingsModal.invoiceStatusVoid", defaultMessage: "Void" },
      invoiceStatusUncollectible: { id: "settingsModal.invoiceStatusUncollectible", defaultMessage: "Failed" },
      invoiceStatusDraft: { id: "settingsModal.invoiceStatusDraft", defaultMessage: "Draft" },
      openInvoiceLinkAriaLabel: {
        id: "settingsModal.openInvoiceLinkAriaLabel",
        defaultMessage: "Open invoice from {createdDate, date, long}",
      },
      standardSeatQuantityDelta: {
        id: "settingsModal.transactionHistory.product.standardSeatQuantityDelta",
        defaultMessage: "Standard {quantityDelta}",
      },
      premiumSeatQuantityDelta: {
        id: "settingsModal.transactionHistory.product.premiumSeatQuantityDelta",
        defaultMessage: "Premium {quantityDelta}",
      },
    })
    function eq(e) {
      let t,
        n,
        r,
        _,
        d,
        p,
        m,
        E,
        g,
        h,
        C,
        f,
        y,
        A,
        I,
        N,
        P,
        O = (0, i.c)(60),
        { accountId: x, onViewAll: R, userId: S, onNoExpenseableInvoice: v } = e,
        L = (0, l.gh)(T.u)
      O[0] !== x ? ((t = e0(x, 4, null)), (O[0] = x), (O[1] = t)) : (t = O[1])
      let { data: M, isPending: w, isError: U, refetch: H } = (0, s.I)(t),
        [k, j] = (0, u.ok)(),
        K = (0, u.zy)(),
        Y = K.state?.invoiceExpensingOwner,
        W = null == Y || (Y.accountId === x && Y.userId === S)
      O[2] !== k ? ((n = k.get("expense_invoice")), (O[2] = k), (O[3] = n)) : (n = O[3])
      let V = "latest" === n,
        z = (0, o.useRef)(!1),
        Z = V && W
      O[4] !== x || O[5] !== Z ? ((r = (0, B.Z)(x, Z)), (O[4] = x), (O[5] = Z), (O[6] = r)) : (r = O[6])
      let { data: $, isPending: X, isLoadingError: Q } = (0, s.I)(r)
      O[7] !== M?.transactions || O[8] !== M?.transactions.find
        ? ((_ = M?.transactions.find(eZ)), (O[7] = M?.transactions), (O[8] = M?.transactions.find), (O[9] = _))
        : (_ = O[9])
      let J = _,
        ee = M?.next_cursor ?? null,
        et = V && W && $?.eligible === !0 && null == J && null != ee
      ;(O[10] !== x || O[11] !== ee
        ? ((d = ["consumer-billing", x, "latest-expenseable-invoice", ee]), (O[10] = x), (O[11] = ee), (O[12] = d))
        : (d = O[12]),
        O[13] !== x || O[14] !== ee
          ? ((p = async (e) => {
              let { signal: t } = e,
                n = ee
              for (; null != n;) {
                let e = await e1(x, 10, n, t),
                  a = e.transactions.find(ez)
                if (a) return a.id
                n = e.next_cursor ?? null
              }
              return null
            }),
            (O[13] = x),
            (O[14] = ee),
            (O[15] = p))
          : (p = O[15]),
        O[16] !== et || O[17] !== d || O[18] !== p
          ? ((m = { queryKey: d, enabled: et, queryFn: p, staleTime: 0, retry: !1, gcTime: 0 }),
            (O[16] = et),
            (O[17] = d),
            (O[18] = p),
            (O[19] = m))
          : (m = O[19]))
      let { data: en, isPending: ea, isError: ei, refetch: er } = (0, s.I)(m),
        es = V && W && (U || (et && ei)),
        el = V && (!W || (!w && !X && !Q && !es && (!et || !ea))),
        eo = W && $?.eligible === !0 && null != M,
        ec = el && eo ? (J?.id ?? (et ? en : null)) : null,
        [eu, e_] = (0, o.useState)(null),
        ed = V && W
      ed || null == eu ? null == eu && null != ec && e_(ec) : e_(null)
      let ep = ed ? eu : null
      return (O[20] !== eo || O[21] !== el || O[22] !== V || O[23] !== ep || O[24] !== v || O[25] !== L || O[26] !== j
        ? ((g = () => {
            if (!V) {
              z.current = !1
              return
            }
            if (el && !z.current) {
              if (((z.current = !0), null != ep))
                return void (0, G.A)(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED")
              ;(eo && v(), j(e$, { replace: !0, preventScrollReset: !0 }))
            }
          }),
          (E = [V, el, ep, eo, L, v, j]),
          (O[20] = eo),
          (O[21] = el),
          (O[22] = V),
          (O[23] = ep),
          (O[24] = v),
          (O[25] = L),
          (O[26] = j),
          (O[27] = E),
          (O[28] = g))
        : ((E = O[27]), (g = O[28])),
      (0, o.useEffect)(g, E),
      null != ep || es || w || U || M?.transactions.length !== 0)
        ? (O[29] !== x || O[30] !== ep || O[31] !== $ || O[32] !== j
            ? ((h =
                null != ep &&
                $?.eligible &&
                (0, a.jsx)(q, {
                  accountId: x,
                  invoiceId: ep,
                  preferences: $,
                  onClose: () => j(e$, { replace: !0, preventScrollReset: !0 }),
                })),
              (O[29] = x),
              (O[30] = ep),
              (O[31] = $),
              (O[32] = j),
              (O[33] = h))
            : (h = O[33]),
          O[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, a.jsx)(c.A, {
                id: "settingsModal.transactionHistory.title",
                defaultMessage: "Transaction history",
              })),
              (O[34] = C))
            : (C = O[34]),
          O[35] !== M?.next_cursor || O[36] !== R || O[37] !== L
            ? ((f =
                M?.next_cursor != null
                  ? (0, a.jsx)(b.$, {
                      color: "secondary",
                      size: "toolbar",
                      onClick: () => {
                        ;((0, G.A)(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_ALL_INVOICES_CLICKED"), R())
                      },
                      children: (0, a.jsx)(c.A, {
                        id: "settingsModal.transactionHistory.viewAll",
                        defaultMessage: "View all",
                      }),
                    })
                  : null),
              (O[35] = M?.next_cursor),
              (O[36] = R),
              (O[37] = L),
              (O[38] = f))
            : (f = O[38]),
          O[39] !== f
            ? ((y = (0, a.jsx)(D.X.Header, { title: C, actions: f })), (O[39] = f), (O[40] = y))
            : (y = O[40]),
          O[41] !== es || O[42] !== U || O[43] !== H || O[44] !== er
            ? ((A =
                es &&
                (0, a.jsx)(F.E, {
                  onRetry: () => {
                    U ? H() : er()
                  },
                })),
              (O[41] = es),
              (O[42] = U),
              (O[43] = H),
              (O[44] = er),
              (O[45] = A))
            : (A = O[45]),
          O[46] !== x || O[47] !== M || O[48] !== es || O[49] !== U || O[50] !== w || O[51] !== L
            ? ((I =
                (!es || !U) &&
                (0, a.jsx)(eJ, {
                  accountId: x,
                  data: M,
                  isPending: w,
                  isError: U,
                  onViewInvoice: () => (0, G.A)(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_INVOICE_CLICKED"),
                })),
              (O[46] = x),
              (O[47] = M),
              (O[48] = es),
              (O[49] = U),
              (O[50] = w),
              (O[51] = L),
              (O[52] = I))
            : (I = O[52]),
          O[53] !== A || O[54] !== I
            ? ((N = (0, a.jsxs)(D.X.Content, { children: [A, I] })), (O[53] = A), (O[54] = I), (O[55] = N))
            : (N = O[55]),
          O[56] !== h || O[57] !== y || O[58] !== N
            ? ((P = (0, a.jsxs)(D.X, { children: [h, y, N] })), (O[56] = h), (O[57] = y), (O[58] = N), (O[59] = P))
            : (P = O[59]),
          P)
        : null
    }
    function ez(e) {
      return "invoice" === e.type && e.invoice_expensing_eligible
    }
    function eZ(e) {
      return "invoice" === e.type && e.invoice_expensing_eligible
    }
    function e$(e) {
      let t = new URLSearchParams(e)
      return (t.delete("expense_invoice"), t)
    }
    function eX(e) {
      let t,
        n = (0, i.c)(3),
        { accountId: r, onBack: s } = e
      return (
        n[0] !== r || n[1] !== s
          ? ((t = (0, a.jsx)(eQ, { accountId: r, onBack: s }, r)), (n[0] = r), (n[1] = s), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function eQ(e) {
      let t,
        n,
        r,
        l,
        u,
        _,
        d,
        p,
        m = (0, i.c)(25),
        { accountId: T, onBack: E } = e
      m[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [null]), (m[0] = t)) : (t = m[0])
      let [g, h] = (0, o.useState)(t),
        C = g[g.length - 1] ?? null
      m[1] !== T || m[2] !== C ? ((n = e0(T, 10, C)), (m[1] = T), (m[2] = C), (m[3] = n)) : (n = m[3])
      let { data: f, isPending: y, isError: A, isFetching: I } = (0, s.I)(n),
        N = g.length > 1,
        P = f?.next_cursor
      return (
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(Q.z_d, {})),
            (l = (0, a.jsx)(c.A, { id: "settingsModal.back", defaultMessage: "Back" })),
            (m[4] = r),
            (m[5] = l))
          : ((r = m[4]), (l = m[5])),
        m[6] !== E
          ? ((u = (0, a.jsx)("div", {
              children: (0, a.jsxs)(b.$, { color: "ghost", size: "toolbar", onClick: E, children: [r, l] }),
            })),
            (m[6] = E),
            (m[7] = u))
          : (u = m[7]),
        m[8] !== T || m[9] !== f || m[10] !== A || m[11] !== y
          ? ((_ = (0, a.jsx)(eJ, { accountId: T, data: f, isPending: y, isError: A })),
            (m[8] = T),
            (m[9] = f),
            (m[10] = A),
            (m[11] = y),
            (m[12] = _))
          : (_ = m[12]),
        m[13] !== g || m[14] !== f || m[15] !== N || m[16] !== A || m[17] !== I || m[18] !== y || m[19] !== P
          ? ((d =
              !y && !A && null != f && f.transactions.length > 0 && (N || null != P)
                ? (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)(b.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: !N || I,
                        onClick: () => h(g.slice(0, -1)),
                        children: [
                          (0, a.jsx)(Q.z_d, {}),
                          (0, a.jsx)(c.A, {
                            id: "settingsModal.transactionHistory.pagination.previous",
                            defaultMessage: "Previous",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(b.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: null == P || I,
                        onClick: () => {
                          null != P && h([...g, P])
                        },
                        children: [
                          (0, a.jsx)(c.A, {
                            id: "settingsModal.transactionHistory.pagination.next",
                            defaultMessage: "Next",
                          }),
                          (0, a.jsx)(Q.uM3, {}),
                        ],
                      }),
                    ],
                  })
                : null),
            (m[13] = g),
            (m[14] = f),
            (m[15] = N),
            (m[16] = A),
            (m[17] = I),
            (m[18] = y),
            (m[19] = P),
            (m[20] = d))
          : (d = m[20]),
        m[21] !== u || m[22] !== _ || m[23] !== d
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [u, _, d] })), (m[21] = u), (m[22] = _), (m[23] = d), (m[24] = p))
          : (p = m[24]),
        p
      )
    }
    function eJ(e) {
      let t,
        n = (0, i.c)(6),
        { accountId: r, data: s, isPending: l, isError: o, onViewInvoice: u } = e
      if (l) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(Z.L, {
                children: (0, a.jsx)(c.A, {
                  id: "settingsModal.transactionHistory.loading",
                  defaultMessage: "Loading transactions",
                }),
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (o) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-warning",
                children: (0, a.jsx)(c.A, {
                  id: "settingsModal.transactionHistory.loadError",
                  defaultMessage: "Unable to load transactions. Please try again.",
                }),
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      return (
        n[2] !== r || n[3] !== s || n[4] !== u
          ? ((t =
              null != s && s.transactions.length > 0
                ? (0, a.jsx)(k.t, {
                    children: (0, a.jsx)(eB, { accountId: r, transactions: s.transactions, onViewInvoice: u }),
                  })
                : (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(c.A, {
                      id: "settingsModal.transactionHistory.empty",
                      defaultMessage: "No transactions available",
                    }),
                  })),
            (n[2] = r),
            (n[3] = s),
            (n[4] = u),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    function e0(e, t, n) {
      return (0, eD.j)({
        queryKey: ["consumer-billing", e, "transactions", t, n],
        queryFn: ({ signal: a }) => e1(e, t, n, a),
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        refetchOnReconnect: "always",
      })
    }
    function e1(e, t, n, a) {
      return ed.CodexRequest.safeGet("/payments/transaction-history", {
        parameters: { query: { account_id: e, limit: t, cursor: n ?? void 0 } },
        additionalHeaders: { [eH.zBc]: e },
        signal: a,
      })
    }
    var e2 = n("Ssp7"),
      e3 = n("bNMl"),
      e4 = n("dT9t")
    function e5(e) {
      let t,
        n,
        r,
        _,
        d,
        m,
        E,
        g,
        C,
        f,
        y,
        A,
        N,
        P,
        O,
        x,
        R = (0, i.c)(65),
        { account: S, accountId: v } = e,
        L = (0, l.gh)(T.u)
      R[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (R[0] = t)) : (t = R[0])
      let M = (0, o.useRef)(t),
        w = (0, I.A)(),
        U = (0, u.Zp)(),
        { data: j, isPending: B, isFetching: F, isError: K, refetch: Y } = (0, l._U)(p.kL, v),
        { client: W } = (0, h.cn)()
      R[1] !== W ? ((n = W.getContext().user?.country?.trim().toUpperCase()), (R[1] = W), (R[2] = n)) : (n = R[2])
      let V = n
      R[3] !== S || R[4] !== j || R[5] !== W
        ? ((r = (0, e2.k)(S, j, (0, e2.x)(W))), (R[3] = S), (R[4] = j), (R[5] = W), (R[6] = r))
        : (r = R[6])
      let { canRedeem: q, showWallet: z, usdBalance: Z } = r,
        $ = 0 !== Z ? Z : j?.balance,
        X = !F && !K && j?.balance === 0 && null == j.currency && q
      ;(R[7] !== v || R[8] !== V
        ? ((_ = ["consumer-billing", v, "wallet-currency", V]), (R[7] = v), (R[8] = V), (R[9] = _))
        : (_ = R[9]),
        R[10] !== W || R[11] !== V
          ? ((d = (e) => {
              let { signal: t } = e
              return (0, e4.e)({
                country: V ?? "US",
                signal: t,
                isPricingEnabled: (e) => W.getLayer("3768341700").get(e, !1),
              })
            }),
            (R[10] = W),
            (R[11] = V),
            (R[12] = d))
          : (d = R[12]),
        R[13] !== X || R[14] !== _ || R[15] !== d
          ? ((m = { queryKey: _, queryFn: d, enabled: X, staleTime: 0, retry: !1 }),
            (R[13] = X),
            (R[14] = _),
            (R[15] = d),
            (R[16] = m))
          : (m = R[16]))
      let { data: Q, isLoading: J, isError: et, refetch: ea } = (0, s.I)(m),
        ei = 0 !== Z ? "usd" : (j?.currency ?? (X ? Q?.currency_config.symbol_code : null)),
        er = B || F || (X && J)
      if (
        (R[17] !== ei || R[18] !== K || R[19] !== X || R[20] !== et
          ? (K
              ? (E = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_BALANCE_FETCH_FAILED")
              : X && et
                ? (E = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_PRICING_FAILED")
                : null == ei && (E = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_MISSING_CURRENCY"),
            (R[17] = ei),
            (R[18] = K),
            (R[19] = X),
            (R[20] = et),
            (R[21] = E))
          : (E = R[21]),
        R[22] !== v || R[23] !== K || R[24] !== er || R[25] !== E || R[26] !== L || R[27] !== z
          ? ((g = () => {
              er ||
                (!K && !z) ||
                M.current.has(v) ||
                (L.get(e3.YV).logProductEvent(en.h3, {
                  result:
                    null == E
                      ? "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_READY"
                      : "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_UNAVAILABLE",
                  reason: E,
                }),
                M.current.add(v))
            }),
            (R[22] = v),
            (R[23] = K),
            (R[24] = er),
            (R[25] = E),
            (R[26] = L),
            (R[27] = z),
            (R[28] = g))
          : (g = R[28]),
        R[29] !== v || R[30] !== K || R[31] !== er || R[32] !== E || R[33] !== L || R[34] !== z
          ? ((C = [v, K, er, E, L, z]),
            (R[29] = v),
            (R[30] = K),
            (R[31] = er),
            (R[32] = E),
            (R[33] = L),
            (R[34] = z),
            (R[35] = C))
          : (C = R[35]),
        (0, o.useEffect)(g, C),
        B || (!K && !z))
      )
        return null
      if (er) {
        let e
        ;(R[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("div", {
              role: "status",
              className: "flex items-center gap-2 text-sm text-secondary",
              children: [
                (0, a.jsx)(eu.y, { className: "icon-xs shrink-0 text-secondary" }),
                (0, a.jsx)(c.A, { id: "settingsModal.walletBalance.loading", defaultMessage: "Loading balance\u2026" }),
              ],
            })),
            (R[36] = e))
          : (e = R[36]),
          (f = e))
      } else if (null != E || null == ei || null == $) {
        let e, t, n, i
        ;(R[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, { id: "settingsModal.walletBalance.unavailable", defaultMessage: "Not available" })),
            (R[37] = e))
          : (e = R[37]),
          R[38] !== X || R[39] !== Y || R[40] !== ea
            ? ((t = () => {
                ;(Y(), X && ea())
              }),
              (R[38] = X),
              (R[39] = Y),
              (R[40] = ea),
              (R[41] = t))
            : (t = R[41]),
          R[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(c.A, { id: "settings.consumerBilling.retry", defaultMessage: "Retry" })), (R[42] = n))
            : (n = R[42]),
          R[43] !== t
            ? ((i = (0, a.jsxs)("div", {
                role: "alert",
                className: "flex items-center gap-2 text-sm text-warning",
                children: [e, (0, a.jsx)(b.$, { color: "secondary", size: "toolbar", onClick: t, children: n })],
              })),
              (R[43] = t),
              (R[44] = i))
            : (i = R[44]),
          (f = i))
      } else {
        let e,
          t,
          n = j?.has_redeemed_gift_card === !0 ? -$ : Math.max(0, -$)
        ;(R[45] !== ei || R[46] !== w || R[47] !== n
          ? ((e = (0, ee.J)(w, n, ei)), (R[45] = ei), (R[46] = w), (R[47] = n), (R[48] = e))
          : (e = R[48]),
          R[49] !== e
            ? ((t = (0, a.jsx)("p", { className: "text-sm text-default select-text", children: e })),
              (R[49] = e),
              (R[50] = t))
            : (t = R[50]),
          (f = t))
      }
      return (
        R[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(c.A, { id: "settingsModal.walletBalance.title.v2", defaultMessage: "Balance" })),
            (R[51] = y))
          : (y = R[51]),
        R[52] !== q || R[53] !== U
          ? ((A = q
              ? (0, a.jsx)(b.$, {
                  color: "secondary",
                  size: "toolbar",
                  onClick: () => void U("/redeem?entry_point=billing"),
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.redeem",
                    defaultMessage: "Redeem gift card",
                  }),
                })
              : null),
            (R[52] = q),
            (R[53] = U),
            (R[54] = A))
          : (A = R[54]),
        R[55] !== A ? ((N = (0, a.jsx)(D.X.Header, { title: y, actions: A })), (R[55] = A), (R[56] = N)) : (N = R[56]),
        R[57] !== L
          ? ((P = (0, a.jsx)("p", {
              children: (0, a.jsx)(c.A, {
                id: "settingsModal.walletBalance.fundingHelp.v2",
                defaultMessage:
                  "Your balance includes redeemed OpenAI gift cards and other account credits, like billing adjustments. It's automatically applied to eligible payments, including ChatGPT subscriptions and credit purchases. <helpCenterLink>Learn more</helpCenterLink>",
                values: {
                  helpCenterLink: (e) =>
                    (0, a.jsx)(eG.G, {
                      appearance: "secondary",
                      href: "https://help.openai.com/articles/20001508",
                      initiator: "open_in_browser_bridge",
                      onActivate: () => (0, G.A)(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_BALANCE_HELP_OPENED"),
                      children: e,
                    }),
                },
              }),
            })),
            (R[57] = L),
            (R[58] = P))
          : (P = R[58]),
        R[59] !== f || R[60] !== P
          ? ((O = (0, a.jsx)(D.X.Content, {
              children: (0, a.jsx)(k.t, { children: (0, a.jsx)(H.ic, { label: f, description: P, control: null }) }),
            })),
            (R[59] = f),
            (R[60] = P),
            (R[61] = O))
          : (O = R[61]),
        R[62] !== N || R[63] !== O
          ? ((x = (0, a.jsxs)(D.X, { children: [N, O] })), (R[62] = N), (R[63] = O), (R[64] = x))
          : (x = R[64]),
        x
      )
    }
    let e6 = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(663090), n.e(332236), n.e(741767)]).then(n.bind(n, "V0eE")))
          .CancellationDialog,
      })),
      e8 = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(663090), n.e(332236), n.e(319567)]).then(n.bind(n, "IpWz")))
          .GoPromotionSetupReturnReview,
      }))
    function e7() {
      let e,
        t,
        n,
        r,
        s = (0, i.c)(10),
        [l] = (0, o.useState)(te)
      ;(s[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (s[0] = e)) : (e = s[0]), (0, o.useEffect)(e9, e))
      let { accountId: c, userId: u } = (0, _.As)(),
        { data: p, isLoading: m } = (0, d.YL)()
      if (!m && p?.structure === "personal" && p.id === c && null != u) {
        let e,
          t = c + u
        return (
          s[1] !== c || s[2] !== l || s[3] !== t
            ? ((e = (0, a.jsx)(tt, { accountId: c, setupIntentId: l }, t)),
              (s[1] = c),
              (s[2] = l),
              (s[3] = t),
              (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      return (
        s[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(g.s, { slug: "billing" })), (s[5] = t))
          : (t = s[5]),
        s[6] !== m ? ((n = m ? (0, a.jsx)(Z.L, {}) : null), (s[6] = m), (s[7] = n)) : (n = s[7]),
        s[8] !== n
          ? ((r = (0, a.jsx)(E.P, { overview: tn, title: t, children: n })), (s[8] = n), (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    function e9() {
      if ("u" < typeof window) return
      let e = new URL(window.location.href)
      if ("1" === e.searchParams.get(r.Cm)) {
        for (let t of r.zD) e.searchParams.delete(t)
        window.history.replaceState(window.history.state, "", e)
      }
    }
    function te() {
      return "u" > typeof window && "1" === new URL(window.location.href).searchParams.get(r.Cm) ? (0, r.rN)() : null
    }
    function tt(e) {
      let t,
        n,
        d,
        f,
        y,
        A,
        I,
        N,
        P,
        b,
        O,
        x,
        R = (0, i.c)(42),
        { accountId: S, setupIntentId: v } = e,
        L = (0, l.gh)(T.u),
        { userId: M } = (0, _.As)()
      R[0] !== S || R[1] !== v || R[2] !== M
        ? ((t = () => (null == M ? null : (0, r.fn)({ accountId: S, userId: M }, v))),
          (R[0] = S),
          (R[1] = v),
          (R[2] = M),
          (R[3] = t))
        : (t = R[3])
      let [w, U] = (0, o.useState)(t),
        [D, H] = (0, o.useState)(!1),
        k = (0, o.useRef)(!1)
      R[4] !== L
        ? ((n = () => {
            k.current ||
              ((k.current = !0),
              er(L, { actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BILLING_VIEWED" }))
          }),
          (R[4] = L),
          (R[5] = n))
        : (n = R[5])
      let j = (0, o.useEffectEvent)(n)
      ;(R[6] !== j
        ? ((d = () => {
            j()
          }),
          (R[6] = j),
          (R[7] = d))
        : (d = R[7]),
        R[8] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (R[8] = f)) : (f = R[8]),
        (0, o.useEffect)(d, f))
      let { data: G, isPending: B, isError: Y, refetch: V } = (0, l._U)(p.Bd, S),
        q = (0, h.Zj)("200883286"),
        { client: z, getExperiment: $, isLoading: X } = (0, h.cn)(),
        Q = G?.entitlement.subscription_plan === "chatgptplus_no_payment_trial"
      ;(R[9] !== S ? ((y = (0, eO.Ie)(S)), (R[9] = S), (R[10] = y)) : (y = R[10]),
        R[11] !== Q || R[12] !== y
          ? ((A = { ...y, staleTime: 0, enabled: Q, refetchOnMount: "always" }), (R[11] = Q), (R[12] = y), (R[13] = A))
          : (A = R[13]))
      let { data: J, isFetching: ee, isError: et, isFetchedAfterMount: en, refetch: ea } = (0, s.I)(A),
        ei = null == G ? null : (0, m.U)(G, J),
        [el, eo] = (0, u.ok)()
      R[14] !== el ? ((I = el.get("view")), (R[14] = el), (R[15] = I)) : (I = R[15])
      let ec = "transactions" === I
      R[16] !== el || R[17] !== eo
        ? ((N = (e) => {
            let t = new URLSearchParams(el)
            ;(e ? t.set("view", "transactions") : t.delete("view"), eo(t))
          }),
          (R[16] = el),
          (R[17] = eo),
          (R[18] = N))
        : (N = R[18])
      let eu = N,
        [e_, ed] = (0, o.useState)(!1),
        ep = !1
      if (B) {
        let e
        ;(R[19] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(Z.L, {})), (R[19] = e)) : (e = R[19]),
          (P = e))
      } else if (Y || null == G || !1 === G.can_access_with_session) {
        let e
        ;(R[20] !== V ? ((e = (0, a.jsx)(F.E, { onRetry: () => void V() })), (R[20] = V), (R[21] = e)) : (e = R[21]),
          (P = e))
      } else {
        let e,
          t,
          n,
          i = Q && !en && ee,
          r = i || null == ei || (Q && (et || !en)) ? null : ei,
          { managementSource: s, showStripeSections: l } = (0, K.getBillingStripeAvailability)(G, r)
        if (i) {
          let t
          ;(R[22] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(Z.L, {})), (R[22] = t)) : (t = R[22]),
            (e = t))
        } else if (null == r) {
          let t
          ;(R[23] !== ea
            ? ((t = (0, a.jsx)(F.E, { onRetry: () => void ea() })), (R[23] = ea), (R[24] = t))
            : (t = R[24]),
            (e = t))
        } else {
          let t
          ;(R[25] !== S || R[26] !== r
            ? ((t = (0, a.jsx)(eM, { account: r, accountId: S }, r.entitlement.subscription_id)),
              (R[25] = S),
              (R[26] = r),
              (R[27] = t))
            : (t = R[27]),
            (e = t))
        }
        let c = (ep = ec) || X || z.getContext().user.userID !== M ? null : r
        R[28] !== z || R[29] !== c
          ? ((t = { buttonColor: "danger", placement: "bottom" }), (R[28] = z), (R[29] = c), (R[30] = t))
          : (t = R[30])
        let u = t,
          _ =
            null != r
              ? (0, a.jsx)(ew, { account: r, buttonColor: u.buttonColor, onCancelSubscriptionClick: () => ed(!0) })
              : null,
          d =
            !ep &&
            l &&
            null == s &&
            r?.entitlement.is_delinquent === !0 &&
            $("2990254994").get("prioritize_payment_methods", !1)
        R[31] !== S || R[32] !== l
          ? ((n = l ? (0, a.jsx)(eh, { accountId: S }, "payment-methods") : null),
            (R[31] = S),
            (R[32] = l),
            (R[33] = n))
          : (n = R[33])
        let p = n
        P = ep
          ? (0, a.jsx)(eX, { accountId: S, onBack: () => eu(!1) })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                null != v && null != r
                  ? (0, a.jsx)(o.Suspense, {
                      fallback: (0, a.jsx)(Z.L, {}),
                      children: (0, a.jsx)(e8, {
                        accountId: S,
                        account: r,
                        returnedOwner: w,
                        onDismiss: () => U(null),
                      }),
                    })
                  : null,
                d ? p : null,
                l ? (0, a.jsx)(es, { accountId: S }) : null,
                e,
                null,
                q ? (0, a.jsx)(e5, { account: G, accountId: S }) : null,
                "middle" === u.placement ? _ : null,
                (0, a.jsx)(eq, {
                  accountId: S,
                  userId: M,
                  onViewAll: () => eu(!0),
                  onNoExpenseableInvoice: () => H(!0),
                }),
                (0, a.jsx)(W, { accountId: S, scrollToExpense: D, onScrolled: () => H(!1) }),
                l ? (0, a.jsx)(C.e, { accountId: S }) : null,
                d ? null : p,
                null != r
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        null,
                        "bottom" === u.placement ? _ : null,
                        e_
                          ? (0, a.jsx)(o.Suspense, {
                              fallback: (0, a.jsx)(Z.L, {}),
                              children: (0, a.jsx)(
                                e6,
                                { account: r, accountId: S, onClose: () => ed(!1) },
                                r.entitlement.subscription_id,
                              ),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            })
      }
      return (
        R[34] !== ep
          ? ((b = ep
              ? (0, a.jsx)(c.A, {
                  id: "settings.billing.history.overview",
                  defaultMessage: "Review past transactions for your account",
                })
              : tn),
            (R[34] = ep),
            (R[35] = b))
          : (b = R[35]),
        R[36] !== ep
          ? ((O = ep
              ? (0, a.jsx)(c.A, { id: "settingsModal.transactionHistory.title", defaultMessage: "Transaction history" })
              : (0, a.jsx)(g.s, { slug: "billing" })),
            (R[36] = ep),
            (R[37] = O))
          : (O = R[37]),
        R[38] !== P || R[39] !== O || R[40] !== b
          ? ((x = (0, a.jsx)(E.P, { overview: b, title: O, children: P })),
            (R[38] = P),
            (R[39] = O),
            (R[40] = b),
            (R[41] = x))
          : (x = R[41]),
        x
      )
    }
    let tn = (0, a.jsx)(c.A, {
      id: "settings.overview.billing",
      defaultMessage: "Review your subscription and payment details",
    })
  },
  IzuK(e, t, n) {
    var a = n("ASxG")
    n("XQoA")
    let i = a.k5n(["control", "refresh", "refresh_with_loss", "refresh_with_personalized_loss"]),
      r = "go-origin-plus-trial-return-request:"
    function s(e, t) {
      if (
        "plus" !== c(e) ||
        e.entitlement.is_active_subscription_gratis ||
        e.entitlement.discount?.promo_campaign_id === "students-2026-four-month-free" ||
        o(e) ||
        !t.checkGate("3600660324")
      )
        return null
      let n = i.safeParse(t.getLayer("3550013596").get("variant", "disabled"))
      if (!n.success) return null
      if ("refresh" !== n.data) return { variant: n.data }
      let a = t.getLayer("2302019720").get("variant", "disabled")
      return "remove_go" === a || "personalized" === a || "personalized_with_confirmation" === a
        ? { variant: n.data, refreshVariant: a }
        : { variant: n.data }
    }
    function l(e, t, n) {
      var a
      return "plus" === c(e) && n.getLayer("2090377145").get("show_plus_offer_else_go", !1)
        ? {
            page:
              null != (a = t) &&
              "percentage" in a.discount &&
              100 === a.discount.percentage &&
              (a.duration?.num_periods ?? 1) === 1
                ? "plus_offer"
                : "go_offer",
          }
        : { page: "confirm", skipPromotion: !1 }
    }
    function o(e, t = Date.now()) {
      let n = e.entitlement,
        a = n.trial
      return (
        "plus" === e.account.plan_type &&
        "chatgptplusplan" === n.subscription_plan &&
        "monthly" === n.billing_period &&
        !0 === e.last_active_subscription.will_renew &&
        a?.is_trialing === !0 &&
        "plus-1-month-free-for-go" === a.promo_campaign_id &&
        null != a.trial_ends_at &&
        Date.parse(a.trial_ends_at) >= t
      )
    }
    function c(e) {
      let t = u(e.entitlement.subscription_plan),
        n = e.eligible_offers?.offers?.some((t) => u(t.id) === e.account.plan_type)
      return null != t && !0 === n ? t : e.account.plan_type
    }
    function u(e) {
      if (null != e)
        switch (e) {
          case "chatgptgoplan":
            return "go"
          case "chatgptplusplan":
            return "plus"
          case "chatgptprolite":
            return "prolite"
          case "chatgptpro":
            return "pro"
          case "chatgptpromax":
            return "promax"
          default:
            return
        }
    }
    n.d(
      t,
      {},
      {
        B0: l,
        MT: function (e) {
          let t = c(e)
          return "prolite" === t
            ? "Pro 100"
            : "pro" === t
              ? "Pro 200"
              : "promax" === t
                ? "Pro 500"
                : "go" === t
                  ? "Go"
                  : "plus" === t
                    ? "Plus"
                    : "ChatGPT"
        },
        OC: function (e, t, n, a = s(e, n)) {
          let i = c(e)
          if (
            e.entitlement.is_active_subscription_gratis ||
            e.entitlement.discount?.promo_campaign_id === "students-2026-four-month-free"
          )
            return { page: "confirm", skipPromotion: !0 }
          if (o(e)) return { page: "go_trial" }
          if ("pro" === i && n.checkGate("2238071649")) return { page: "pro_offer" }
          if ("plus" === i && null != a) {
            let i = l(e, t, n),
              r = "plus_offer" === i.page || "go_offer" === i.page ? i.page : null,
              s = { ...a, offer: "go_offer" === r && null != a.refreshVariant ? "reconsider" : r }
            return null == s.offer
              ? { page: "confirm", skipPromotion: !1, flow: s }
              : "refresh_with_loss" === s.variant || "refresh_with_personalized_loss" === s.variant
                ? { page: "retention_loss", flow: s }
                : { page: s.offer, flow: s }
          }
          return l(e, t, n)
        },
        W8: s,
        Wg: function (e, t, n = Date.now()) {
          try {
            let a = Number(t.getItem(r + e))
            if (!Number.isFinite(a) || a <= 0) return (t.removeItem(r + e), "none")
            return n - a >= 3e5 ? "expired" : "active"
          } catch {
            return "unavailable"
          }
        },
        _f: function (e) {
          let t = e.entitlement.discount
          return e.entitlement.is_active_subscription_gratis ||
            (t?.cancellation_policy === "immediate" && !t.discount_start_in_num_periods) ||
            o(e)
            ? "immediate"
            : !0 === e.entitlement.is_delinquent
              ? "unconfirmed"
              : "term_end"
        },
        cp: function (e) {
          return !1
        },
        f0: function (e, t, n = Date.now()) {
          try {
            return (t.setItem(r + e, String(n)), !0)
          } catch {
            return !1
          }
        },
        jq: o,
        vD: function (e, t) {
          t.removeItem(r + e)
        },
        wN: c,
      },
    )
  },
  mXrZ(e, t, n) {
    var a = n("ncoo")
    n.d(t, { J: () => a.I })
  },
  db0t(e, t, n) {
    n.d(t, { F: () => o, G: () => l })
    var a = n("ABep"),
      i = n("oyxz"),
      r = n("Qgfj"),
      s = n.p + "assets/22408dc0b9aa.svg"
    function l(e) {
      let t = e.type,
        n = null
      "card" === t && null != e.card
        ? ((t = e.card.brand), (n = (0, a.jsx)(i.A, { ...u.maskedNumber, values: { last4: e.card.last4 } })))
        : "link" === t
          ? null == e.link
            ? (t = void 0)
            : (n = e.link.email)
          : "custom" === t &&
              e.custom?.provider === "adyen" &&
              ("gcash" === e.custom.payment_method_type || "momo_wallet" === e.custom.payment_method_type)
            ? (t = e.custom.payment_method_type)
            : "paypal" === t
              ? (n = e.paypal?.payer_email)
              : "cashapp" === t
                ? (n = e.cashapp?.cashtag)
                : "upi" === t
                  ? (n = e.upi?.vpa)
                  : "sepa_debit" === t && e.sepa_debit?.last4
                    ? (n = (0, a.jsx)(i.A, { ...u.maskedNumber, values: { last4: e.sepa_debit.last4 } }))
                    : "kr_card" === t && e.kr_card?.last4
                      ? (n = (0, a.jsx)(i.A, { ...u.maskedNumber, values: { last4: e.kr_card.last4 } }))
                      : "naver_pay" === t
                        ? (n = e.naver_pay?.buyer_id)
                        : "ideal" === t && (n = e.ideal?.bank)
      let { name: r, imageUrl: s } = o(t),
        l = "kr_card" === e.type ? e.kr_card?.brand?.trim() : null
      return {
        imageUrl: s,
        label: l ? (c[l.toLowerCase()] ?? l) : (0, a.jsx)(i.A, { ...(r ?? u.unsupported) }),
        description: (0, a.jsx)("span", {
          className: "select-text",
          children: null == r ? (0, a.jsx)(i.A, { ...u.detailsUnavailable }) : n,
        }),
      }
    }
    function o(e) {
      return { name: null == e ? void 0 : _.get(e), imageUrl: null == e ? void 0 : p.get(e) }
    }
    let c = {
        bc: "BC",
        citi: "Citi",
        hana: "Hana",
        hyundai: "Hyundai",
        jeju: "Jeju",
        jeonbuk: "Jeonbuk",
        kakaobank: "Kakao Bank",
        kbank: "KBank",
        kdbbank: "KDB Bank",
        kookmin: "Kookmin",
        kwangju: "Kwangju",
        lotte: "Lotte",
        mg: "MG",
        nh: "NH",
        post: "Post",
        samsung: "Samsung",
        savingsbank: "Savings Bank",
        shinhan: "Shinhan",
        shinhyup: "Shinhyup",
        suhyup: "Suhyup",
        tossbank: "Toss Bank",
        woori: "Woori",
      },
      u = (0, r.YK)({
        maskedNumber: {
          id: "settings.consumerBilling.maskedPaymentNumber",
          defaultMessage: "\u2022\u2022\u2022\u2022 {last4}",
        },
        unsupported: { id: "settings.consumerBilling.unsupportedPaymentMethod", defaultMessage: "Payment method" },
        detailsUnavailable: {
          id: "settings.consumerBilling.paymentDetailsUnavailable",
          defaultMessage: "Details unavailable",
        },
        amex: { id: "settings.consumerBilling.paymentName.amex", defaultMessage: "American Express" },
        cartes_bancaires: {
          id: "settings.consumerBilling.paymentName.cartes_bancaires",
          defaultMessage: "Cartes Bancaires",
        },
        diners: { id: "settings.consumerBilling.paymentName.diners", defaultMessage: "Diners Club" },
        discover: { id: "settings.consumerBilling.paymentName.discover", defaultMessage: "Discover" },
        eftpos_au: { id: "settings.consumerBilling.paymentName.eftpos_au", defaultMessage: "EFTPOS Australia" },
        jcb: { id: "settings.consumerBilling.paymentName.jcb", defaultMessage: "JCB" },
        link: { id: "settings.consumerBilling.paymentName.link", defaultMessage: "Link" },
        mastercard: { id: "settings.consumerBilling.paymentName.mastercard", defaultMessage: "Mastercard" },
        unionpay: { id: "settings.consumerBilling.paymentName.unionpay", defaultMessage: "UnionPay" },
        visa: { id: "settings.consumerBilling.paymentName.visa", defaultMessage: "Visa" },
        unknown: { id: "settings.consumerBilling.paymentName.unknown", defaultMessage: "Other" },
        paypal: { id: "settings.consumerBilling.paymentName.paypal", defaultMessage: "PayPal" },
        klarna: { id: "settings.consumerBilling.paymentName.klarna", defaultMessage: "Klarna" },
        cashapp: { id: "settings.consumerBilling.paymentName.cashapp", defaultMessage: "Cash App" },
        pix: { id: "settings.consumerBilling.paymentName.pix", defaultMessage: "Pix" },
        upi: { id: "settings.consumerBilling.paymentName.upi", defaultMessage: "UPI" },
        gcash: { id: "settings.consumerBilling.paymentName.gcash", defaultMessage: "GCash" },
        momo_wallet: { id: "settings.consumerBilling.paymentName.momo_wallet", defaultMessage: "MoMo" },
        sepa_debit: { id: "settings.consumerBilling.paymentName.sepa_debit", defaultMessage: "SEPA Direct Debit" },
        go_pay: { id: "settings.consumerBilling.paymentName.go_pay", defaultMessage: "GoPay" },
        blik: { id: "settings.consumerBilling.paymentName.blik", defaultMessage: "BLIK" },
        bizum: { id: "settings.consumerBilling.paymentName.bizum", defaultMessage: "Bizum" },
        kr_card: { id: "settings.consumerBilling.paymentName.kr_card", defaultMessage: "Korean Card" },
        kakao_pay: { id: "settings.consumerBilling.paymentName.kakao_pay", defaultMessage: "Kakao Pay" },
        naver_pay: { id: "settings.consumerBilling.paymentName.naver_pay", defaultMessage: "Naver Pay" },
        ideal: { id: "settings.consumerBilling.paymentName.ideal", defaultMessage: "iDEAL" },
        satispay: { id: "settings.consumerBilling.paymentName.satispay", defaultMessage: "Satispay" },
        twint: { id: "settings.consumerBilling.paymentName.twint", defaultMessage: "TWINT" },
      }),
      _ = new Map(Object.entries(u)),
      d =
        "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/paymen_method_icons_svg",
      p = new Map([
        ["amex", `${d}/Logo=Amex.svg`],
        ["discover", s],
        ["visa", `${d}/Logo=Visa.svg`],
        ["mastercard", `${d}/Logo=Mastercard.svg`],
        ["unionpay", `${d}/Logo=Union Pay.svg`],
        ["cashapp", `${d}/Logo=Cash App.svg`],
        ["gcash", `${d}/Logo=GCash.svg`],
        ["go_pay", `${d}/Logo=GoPay.svg`],
        ["blik", `${d}/Logo=Blik.svg`],
        ["kakao_pay", `${d}/Logo=Kakao Pay.svg`],
        ["klarna", `${d}/Logo=Klarna.svg`],
        ["momo_wallet", `${d}/Logo=MoMo.svg`],
        ["naver_pay", `${d}/Logo=Naver Pay.svg`],
        ["paypal", `${d}/PayPal.svg`],
        ["pix", `${d}/Logo=Pix.svg`],
        ["sepa_debit", `${d}/Logo=SEPA.svg`],
        ["upi", `${d}/Logo=UPI.svg`],
        [
          "link",
          "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/payment_method_assets/link/link-by-stripe-seeklogo.svg",
        ],
      ])
  },
  jQyB(e, t, n) {
    n.d(t, { I: () => w })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("HqZu"),
      s = n("zd8w"),
      l = "field-fg_a4p",
      o = "title-s_mUNw",
      c = "error-zUhWHj",
      u = "label-AofZET",
      _ = "input-OTrb6K",
      d = n("L9TA")
    function p(e) {
      let t,
        n,
        r,
        p,
        m,
        T,
        E,
        g,
        h,
        C,
        f,
        y,
        A,
        I,
        N,
        P,
        b,
        O = (0, i.c)(73),
        {
          metrics: x,
          appearance: R,
          expirationTitle: S,
          monthLabel: v,
          monthInput: L,
          yearLabel: M,
          yearInput: w,
          expirationError: U,
          billingAddressTitle: D,
          addressElementOptions: H,
          onAddressReady: k,
          onAddressChange: j,
          error: G,
          action: B,
        } = e,
        F = (0, s.useId)(),
        K = (0, s.useId)(),
        Y = R.rules,
        W = R.variables,
        V = Y?.[".Input"],
        q = Y?.[".Label"],
        z = Y?.[".Input:focus"],
        Z = Y?.[".Input--invalid, .Input--invalid:focus"] ?? Y?.[".Input--invalid"],
        $ = W?.colorBackground,
        X = W?.colorText,
        Q = W?.colorTextPlaceholder,
        J = W?.colorPrimary,
        ee = W?.colorDanger,
        et = W?.fontFamily,
        en = W?.fontSizeBase ?? "16px",
        ea = W?.gridColumnSpacing,
        ei = V?.backgroundColor,
        er = V?.border,
        es = V?.borderRadius,
        el = V?.padding,
        eo = V?.boxShadow,
        ec = V?.transition,
        eu = q?.color,
        e_ = q?.fontWeight,
        ed = z?.borderColor,
        ep = z?.boxShadow,
        em = Z?.borderColor,
        eT = Z?.boxShadow
      O[0] !== $ ||
      O[1] !== er ||
      O[2] !== es ||
      O[3] !== el ||
      O[4] !== eo ||
      O[5] !== ec ||
      O[6] !== eu ||
      O[7] !== e_ ||
      O[8] !== ed ||
      O[9] !== ep ||
      O[10] !== em ||
      O[11] !== X ||
      O[12] !== eT ||
      O[13] !== Q ||
      O[14] !== J ||
      O[15] !== ee ||
      O[16] !== et ||
      O[17] !== en ||
      O[18] !== ea ||
      O[19] !== ei
        ? ((t = {
            "--colorBackground": $,
            "--colorText": X,
            "--colorTextPlaceholder": Q,
            "--colorPrimary": J,
            "--colorDanger": ee,
            "--payment-font": et,
            "--payment-font-size": en,
            "--payment-column-gap": ea,
            "--payment-input-background": ei,
            "--payment-input-border": er,
            "--payment-input-radius": es,
            "--payment-input-padding": el,
            "--payment-input-shadow": eo,
            "--payment-input-transition": ec,
            "--payment-label-color": eu,
            "--payment-label-weight": e_,
            "--payment-focus-border": ed,
            "--payment-focus-shadow": ep,
            "--payment-invalid-border": em,
            "--payment-invalid-shadow": eT,
          }),
          (O[0] = $),
          (O[1] = er),
          (O[2] = es),
          (O[3] = el),
          (O[4] = eo),
          (O[5] = ec),
          (O[6] = eu),
          (O[7] = e_),
          (O[8] = ed),
          (O[9] = ep),
          (O[10] = em),
          (O[11] = X),
          (O[12] = eT),
          (O[13] = Q),
          (O[14] = J),
          (O[15] = ee),
          (O[16] = et),
          (O[17] = en),
          (O[18] = ea),
          (O[19] = ei),
          (O[20] = t))
        : (t = O[20])
      let eE = t
      O[21] !== F || O[22] !== S
        ? ((n = (0, a.jsx)("p", { id: F, className: o, children: S })), (O[21] = F), (O[22] = S), (O[23] = n))
        : (n = O[23])
      let eg = L.placeholder ?? " ",
        eh = U ? K : void 0
      ;(O[24] !== L || O[25] !== eg || O[26] !== eh
        ? ((r = (0, a.jsx)("input", {
            ...L,
            placeholder: eg,
            className: _,
            name: "expiration-month",
            type: "text",
            inputMode: "numeric",
            autoComplete: "cc-exp-month",
            maxLength: 2,
            "aria-describedby": eh,
          })),
          (O[24] = L),
          (O[25] = eg),
          (O[26] = eh),
          (O[27] = r))
        : (r = O[27]),
        O[28] !== v ? ((p = (0, a.jsx)("span", { className: u, children: v })), (O[28] = v), (O[29] = p)) : (p = O[29]),
        O[30] !== r || O[31] !== p
          ? ((m = (0, a.jsxs)("label", { className: l, children: [r, p] })), (O[30] = r), (O[31] = p), (O[32] = m))
          : (m = O[32]))
      let eC = w.placeholder ?? " ",
        ef = U ? K : void 0
      return (
        O[33] !== eC || O[34] !== ef || O[35] !== w
          ? ((T = (0, a.jsx)("input", {
              ...w,
              placeholder: eC,
              className: _,
              name: "expiration-year",
              type: "text",
              inputMode: "numeric",
              autoComplete: "cc-exp-year",
              maxLength: 4,
              "aria-describedby": ef,
            })),
            (O[33] = eC),
            (O[34] = ef),
            (O[35] = w),
            (O[36] = T))
          : (T = O[36]),
        O[37] !== M ? ((E = (0, a.jsx)("span", { className: u, children: M })), (O[37] = M), (O[38] = E)) : (E = O[38]),
        O[39] !== T || O[40] !== E
          ? ((g = (0, a.jsxs)("label", { className: l, children: [T, E] })), (O[39] = T), (O[40] = E), (O[41] = g))
          : (g = O[41]),
        O[42] !== F || O[43] !== eE || O[44] !== m || O[45] !== g
          ? ((h = (0, a.jsxs)("div", {
              role: "group",
              "aria-labelledby": F,
              className: "expiration-h2MKs9",
              style: eE,
              children: [m, g],
            })),
            (O[42] = F),
            (O[43] = eE),
            (O[44] = m),
            (O[45] = g),
            (O[46] = h))
          : (h = O[46]),
        O[47] !== U || O[48] !== K
          ? ((C = U ? (0, a.jsx)("p", { id: K, role: "alert", className: c, children: U }) : null),
            (O[47] = U),
            (O[48] = K),
            (O[49] = C))
          : (C = O[49]),
        O[50] !== n || O[51] !== h || O[52] !== C
          ? ((f = (0, a.jsxs)("div", { className: l, children: [n, h, C] })),
            (O[50] = n),
            (O[51] = h),
            (O[52] = C),
            (O[53] = f))
          : (f = O[53]),
        O[54] !== D ? ((y = (0, a.jsx)("p", { className: o, children: D })), (O[54] = D), (O[55] = y)) : (y = O[55]),
        O[56] !== H || O[57] !== x || O[58] !== j || O[59] !== k
          ? ((A = (0, a.jsx)(d.n, { metrics: x, options: H, onReady: k, onChange: j })),
            (O[56] = H),
            (O[57] = x),
            (O[58] = j),
            (O[59] = k),
            (O[60] = A))
          : (A = O[60]),
        O[61] !== y || O[62] !== A
          ? ((I = (0, a.jsxs)("div", { className: l, children: [y, A] })), (O[61] = y), (O[62] = A), (O[63] = I))
          : (I = O[63]),
        O[64] !== G
          ? ((N = G ? (0, a.jsx)("p", { role: "alert", className: c, children: G }) : null), (O[64] = G), (O[65] = N))
          : (N = O[65]),
        O[66] !== B
          ? ((P = (0, a.jsx)("div", { className: "action-sfBSXV", children: B })), (O[66] = B), (O[67] = P))
          : (P = O[67]),
        O[68] !== f || O[69] !== I || O[70] !== N || O[71] !== P
          ? ((b = (0, a.jsxs)("div", { className: "form-safiX3", children: [f, I, N, P] })),
            (O[68] = f),
            (O[69] = I),
            (O[70] = N),
            (O[71] = P),
            (O[72] = b))
          : (b = O[72]),
        b
      )
    }
    var m = n("dltu"),
      T = n("GtYL"),
      E = n("v89U"),
      g = n("C5k8"),
      h = n("T0Rc"),
      C = n("xSOA"),
      f = n("qmMi"),
      y = n("Wf1j"),
      A = n("oyxz"),
      I = n("PFjh"),
      N = n("Sm6l"),
      P = n("JNtf"),
      b = n("mUDD"),
      O = n("OWtl"),
      x = n("hZax"),
      R = n("LH8k"),
      S = n("kK7d"),
      v = n("wbWw"),
      L = n("RDnT"),
      M = n("iLQO")
    function w(e) {
      let t,
        n,
        r,
        l,
        o,
        c = (0, i.c)(20),
        { accountId: u, methodId: _, onCloseAutoFocus: d, onClose: p, onSuccess: C, onBillingInfoChange: f } = e,
        A = (0, y.A)(),
        I = (0, x.AS)(),
        N = (0, E.EG)(I.getLayer(E.Sd.personal)),
        { data: O, isPending: R, isError: v, refetch: w } = (0, h.I)((0, M.stripeClientQueryOptions)(u, A.locale, N))
      c[0] !== u || c[1] !== _
        ? ((t = {
            queryKey: ["consumer-billing", u, "payment-method", _],
            queryFn: (e) => {
              let { signal: t } = e
              return S.CodexRequest.safeGet("/payments/payment_method/{payment_method_id}", {
                parameters: { path: { payment_method_id: _ }, query: { account_id: u } },
                signal: t,
              })
            },
            staleTime: 0,
            retry: !1,
          }),
          (c[0] = u),
          (c[1] = _),
          (c[2] = t))
        : (t = c[2])
      let { data: H, isPending: k, isError: j, refetch: G } = (0, h.I)(t),
        B = (0, M.y)(),
        [F, K] = (0, s.useState)(!1)
      c[3] !== O || c[4] !== v || c[5] !== H || c[6] !== j || c[7] !== B
        ? ((n = null == O || null == H || j || v || null == B ? void 0 : (0, T.UF)("night" === B.theme, B.variables)),
          (c[3] = O),
          (c[4] = v),
          (c[5] = H),
          (c[6] = j),
          (c[7] = B),
          (c[8] = n))
        : (n = c[8])
      let Y = n,
        W = P.lG
      c[9] !== d
        ? ((r = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), d())
            },
          }),
          (c[9] = d),
          (c[10] = r))
        : (r = c[10])
      let V = !F
      c[11] !== p || c[12] !== F
        ? ((l = (e) => {
            e || F || p()
          }),
          (c[11] = p),
          (c[12] = F),
          (c[13] = l))
        : (l = c[13])
      let q =
        null != O && null != H && null != Y
          ? (0, a.jsx)(
              g.S8,
              {
                stripe: O.stripe,
                options: { appearance: Y },
                children: (0, a.jsx)(D, {
                  accountId: u,
                  method: H.payment_method,
                  appearance: Y,
                  onSubmittingChange: K,
                  onClose: p,
                  onSuccess: C,
                  onBillingInfoChange: f,
                }),
              },
              (0, E.eI)(A.locale, "elements", N),
            )
          : (0, a.jsx)(b.R4, {
              variant: "chatgpt",
              children: (0, a.jsx)(m.W, {
                title: (0, a.jsx)(P.L3, { children: (0, a.jsx)(m.E, { children: (0, a.jsx)(U, {}) }) }),
                children: (0, a.jsx)(L.Y, {
                  kind: "payment",
                  loading: k || R || null == B,
                  onRetry: () => {
                    Promise.all([G(), w()])
                  },
                }),
              }),
            })
      return (
        c[14] !== W || c[15] !== l || c[16] !== q || c[17] !== r || c[18] !== V
          ? ((o = (0, a.jsx)(W, {
              open: !0,
              variant: "form",
              widthHint: 540,
              contentOverflow: "visible",
              contentPosition: "scrollable",
              contentProps: r,
              showDialogClose: V,
              onOpenChange: l,
              children: q,
            })),
            (c[14] = W),
            (c[15] = l),
            (c[16] = q),
            (c[17] = r),
            (c[18] = V),
            (c[19] = o))
          : (o = c[19]),
        o
      )
    }
    function U() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.editPaymentMethod",
              defaultMessage: "Edit payment method",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function D(e) {
      let t,
        n,
        l,
        o,
        c,
        u,
        _,
        d,
        T,
        E,
        g,
        h,
        x,
        L,
        M,
        w,
        D,
        H,
        k,
        j,
        G,
        B,
        F,
        K,
        Y,
        W,
        V,
        q,
        z,
        Z,
        $,
        X,
        Q,
        J = (0, i.c)(109),
        {
          accountId: ee,
          method: et,
          appearance: en,
          onSubmittingChange: ea,
          onClose: ei,
          onSuccess: er,
          onBillingInfoChange: es,
        } = e,
        el = (0, f.gh)(O.u),
        eo = (0, y.A)()
      J[0] !== et.card
        ? ((t = null == et.card ? "" : String(et.card.exp_month).padStart(2, "0")), (J[0] = et.card), (J[1] = t))
        : (t = J[1])
      let [ec, eu] = (0, s.useState)(t),
        [e_, ed] = (0, s.useState)(String(et.card?.exp_year ?? "")),
        [ep, em] = (0, s.useState)(null),
        [eT, eE] = (0, s.useState)(!0),
        [eg, eh] = (0, s.useState)(!1)
      if (J[2] !== ec || J[3] !== e_) {
        let e,
          t,
          a = new Date()
        ;(J[7] !== ec
          ? ((e = /^\d{1,2}$/.test(ec) && Number(ec) >= 1 && 12 >= Number(ec)), (J[7] = ec), (J[8] = e))
          : (e = J[8]),
          (l = e),
          J[9] !== e_ ? ((t = /^\d{4}$/.test(e_) && Number(e_) >= 2e3), (J[9] = e_), (J[10] = t)) : (t = J[10]),
          (o = t),
          (n =
            l &&
            o &&
            (Number(e_) > a.getFullYear() || (Number(e_) === a.getFullYear() && Number(ec) >= a.getMonth() + 1))),
          (J[2] = ec),
          (J[3] = e_),
          (J[4] = n),
          (J[5] = l),
          (J[6] = o))
      } else ((n = J[4]), (l = J[5]), (o = J[6]))
      let eC = n
      ;(J[11] !== ee ||
      J[12] !== ep ||
      J[13] !== eg ||
      J[14] !== eT ||
      J[15] !== et.billing_details ||
      J[16] !== et.id ||
      J[17] !== ec ||
      J[18] !== ea ||
      J[19] !== eC ||
      J[20] !== e_
        ? ((c = async () => {
            if (!eg || !eT || !eC) throw Error("Incomplete card details")
            ;(ea(!0),
              await S.CodexRequest.safePatch("/payments/payment_method/{payment_method_id}", {
                parameters: { path: { payment_method_id: et.id } },
                requestBody: {
                  account_id: ee,
                  card: { exp_month: Number(ec), exp_year: Number(e_) },
                  billing_details: null == ep ? void 0 : { ...et.billing_details, name: ep.name, address: ep.address },
                },
              }))
          }),
          (J[11] = ee),
          (J[12] = ep),
          (J[13] = eg),
          (J[14] = eT),
          (J[15] = et.billing_details),
          (J[16] = et.id),
          (J[17] = ec),
          (J[18] = ea),
          (J[19] = eC),
          (J[20] = e_),
          (J[21] = c))
        : (c = J[21]),
        J[22] !== ee || J[23] !== ei || J[24] !== er || J[25] !== el
          ? ((u = async () => {
              ;(await (0, v.fI)(el, ee), (er ?? ei)())
            }),
            (J[22] = ee),
            (J[23] = ei),
            (J[24] = er),
            (J[25] = el),
            (J[26] = u))
          : (u = J[26]),
        J[27] !== ea ? ((_ = () => ea(!1)), (J[27] = ea), (J[28] = _)) : (_ = J[28]),
        J[29] !== c || J[30] !== u || J[31] !== _
          ? ((d = { mutationFn: c, onSuccess: u, onSettled: _ }), (J[29] = c), (J[30] = u), (J[31] = _), (J[32] = d))
          : (d = J[32]))
      let { mutate: ef, isPending: ey, isError: eA, error: eI, reset: eN } = (0, C.n)(d)
      ;(J[33] !== eg || J[34] !== eT || J[35] !== ey || J[36] !== ef || J[37] !== eC
        ? ((T = (e) => {
            ;(e.preventDefault(), eg && eT && eC && !ey && ef())
          }),
          (J[33] = eg),
          (J[34] = eT),
          (J[35] = ey),
          (J[36] = ef),
          (J[37] = eC),
          (J[38] = T))
        : (T = J[38]),
        J[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(P.L3, { children: (0, a.jsx)(m.E, { children: (0, a.jsx)(U, {}) }) })), (J[39] = E))
          : (E = J[39]),
        J[40] !== el ? ((g = (0, I.dj)(el)), (J[40] = el), (J[41] = g)) : (g = J[41]),
        J[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.expirationDate",
              defaultMessage: "Expiration date",
            })),
            (x = (0, a.jsx)(A.A, { id: "settings.consumerBilling.expirationMonth", defaultMessage: "Month" })),
            (J[42] = h),
            (J[43] = x))
          : ((h = J[42]), (x = J[43])))
      let eP = !l
      ;(J[44] !== eo
        ? ((L = eo.formatMessage({ id: "settings.consumerBilling.expirationMonthPlaceholder", defaultMessage: "MM" })),
          (J[44] = eo),
          (J[45] = L))
        : (L = J[45]),
        J[46] !== ec
          ? ((M = () => {
              1 === ec.length && eu(ec.padStart(2, "0"))
            }),
            (J[46] = ec),
            (J[47] = M))
          : (M = J[47]),
        J[48] !== eA || J[49] !== eN
          ? ((w = (e) => {
              ;(eu(e.target.value.replace(/\D/g, "").slice(0, 2)), eA && eN())
            }),
            (J[48] = eA),
            (J[49] = eN),
            (J[50] = w))
          : (w = J[50]),
        J[51] !== ey || J[52] !== ec || J[53] !== eP || J[54] !== L || J[55] !== M || J[56] !== w
          ? ((D = {
              autoFocus: !0,
              required: !0,
              "aria-invalid": eP,
              disabled: ey,
              placeholder: L,
              value: ec,
              onBlur: M,
              onChange: w,
            }),
            (J[51] = ey),
            (J[52] = ec),
            (J[53] = eP),
            (J[54] = L),
            (J[55] = M),
            (J[56] = w),
            (J[57] = D))
          : (D = J[57]),
        J[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, a.jsx)(A.A, { id: "settings.consumerBilling.expirationYear", defaultMessage: "Year" })),
            (J[58] = H))
          : (H = J[58]))
      let eb = !o
      ;(J[59] !== eo
        ? ((k = eo.formatMessage({ id: "settings.consumerBilling.expirationYearPlaceholder", defaultMessage: "YYYY" })),
          (J[59] = eo),
          (J[60] = k))
        : (k = J[60]),
        J[61] !== eA || J[62] !== eN
          ? ((j = (e) => {
              ;(ed(e.target.value.replace(/\D/g, "").slice(0, 4)), eA && eN())
            }),
            (J[61] = eA),
            (J[62] = eN),
            (J[63] = j))
          : (j = J[63]),
        J[64] !== ey || J[65] !== eb || J[66] !== k || J[67] !== j || J[68] !== e_
          ? ((G = { required: !0, "aria-invalid": eb, disabled: ey, placeholder: k, value: e_, onChange: j }),
            (J[64] = ey),
            (J[65] = eb),
            (J[66] = k),
            (J[67] = j),
            (J[68] = e_),
            (J[69] = G))
          : (G = J[69]),
        J[70] !== eC
          ? ((B = eC
              ? null
              : (0, a.jsx)(A.A, {
                  id: "settings.consumerBilling.invalidExpirationDate",
                  defaultMessage: "Enter a valid expiration date",
                })),
            (J[70] = eC),
            (J[71] = B))
          : (B = J[71]),
        J[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.billingAddress",
              defaultMessage: "Billing address",
            })),
            (J[72] = F))
          : (F = J[72]),
        J[73] === Symbol.for("react.memo_cache_sentinel") ? ((K = [...r.qo]), (J[73] = K)) : (K = J[73]))
      let eO = et.billing_details?.name ?? void 0,
        ex = et.billing_details?.address?.line1 ?? void 0,
        eR = et.billing_details?.address?.line2 ?? void 0,
        eS = et.billing_details?.address?.city ?? void 0,
        ev = et.billing_details?.address?.state ?? void 0,
        eL = et.billing_details?.address?.postal_code ?? void 0,
        eM = et.billing_details?.address?.country ?? ""
      ;(J[74] !== ex || J[75] !== eR || J[76] !== eS || J[77] !== ev || J[78] !== eL || J[79] !== eM
        ? ((Y = { line1: ex, line2: eR, city: eS, state: ev, postal_code: eL, country: eM }),
          (J[74] = ex),
          (J[75] = eR),
          (J[76] = eS),
          (J[77] = ev),
          (J[78] = eL),
          (J[79] = eM),
          (J[80] = Y))
        : (Y = J[80]),
        J[81] !== eO || J[82] !== Y
          ? ((W = { mode: "billing", allowedCountries: K, defaultValues: { name: eO, address: Y } }),
            (J[81] = eO),
            (J[82] = Y),
            (J[83] = W))
          : (W = J[83]),
        J[84] === Symbol.for("react.memo_cache_sentinel") ? ((V = () => eh(!0)), (J[84] = V)) : (V = J[84]),
        J[85] !== eA || J[86] !== es || J[87] !== eN
          ? ((q = (e) => {
              ;(em(e.value), eE(e.complete), eA && eN())
              try {
                es?.(e)
              } catch {}
            }),
            (J[85] = eA),
            (J[86] = es),
            (J[87] = eN),
            (J[88] = q))
          : (q = J[88]),
        J[89] !== eI || J[90] !== eA
          ? ((z = eA
              ? (null != eI && (0, R.d)(eI)?.message) ||
                (0, a.jsx)(A.A, {
                  id: "settings.consumerBilling.editCardError",
                  defaultMessage: "Unable to update payment method. Please try again.",
                })
              : null),
            (J[89] = eI),
            (J[90] = eA),
            (J[91] = z))
          : (z = J[91]))
      let ew = ey || !eg || !eT || !eC
      return (
        J[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(A.A, { id: "settings.consumerBilling.save", defaultMessage: "Save" })), (J[92] = Z))
          : (Z = J[92]),
        J[93] !== ey || J[94] !== ew
          ? (($ = (0, a.jsx)(b.Es, {
              children: (0, a.jsx)(N.$, {
                type: "submit",
                color: "primary",
                radius: "full",
                size: "beaconAction",
                loading: ey,
                disabled: ew,
                children: Z,
              }),
            })),
            (J[93] = ey),
            (J[94] = ew),
            (J[95] = $))
          : ($ = J[95]),
        J[96] !== en ||
        J[97] !== D ||
        J[98] !== G ||
        J[99] !== B ||
        J[100] !== W ||
        J[101] !== q ||
        J[102] !== z ||
        J[103] !== $ ||
        J[104] !== g
          ? ((X = (0, a.jsx)(m.W, {
              title: E,
              children: (0, a.jsx)(p, {
                metrics: g,
                appearance: en,
                expirationTitle: h,
                monthLabel: x,
                monthInput: D,
                yearLabel: H,
                yearInput: G,
                expirationError: B,
                billingAddressTitle: F,
                addressElementOptions: W,
                onAddressReady: V,
                onAddressChange: q,
                error: z,
                action: $,
              }),
            })),
            (J[96] = en),
            (J[97] = D),
            (J[98] = G),
            (J[99] = B),
            (J[100] = W),
            (J[101] = q),
            (J[102] = z),
            (J[103] = $),
            (J[104] = g),
            (J[105] = X))
          : (X = J[105]),
        J[106] !== X || J[107] !== T
          ? ((Q = (0, a.jsx)(b.R4, { as: "form", variant: "chatgpt", onSubmit: T, children: X })),
            (J[106] = X),
            (J[107] = T),
            (J[108] = Q))
          : (Q = J[108]),
        Q
      )
    }
  },
  tRqc(e, t, n) {
    var a = n("MVHH"),
      i = n("bNMl"),
      r = n("XP4n")
    let s = {
        annual_offer: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_ANNUAL_OFFER",
        keep_saving: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_KEEP_SAVING",
        manage_billing_schedule: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ENTRY_POINT_MANAGE_BILLING_SCHEDULE",
      },
      l = {
        annual_offer: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_VIEW_OFFER_CLICKED",
        keep_saving: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_KEEP_SAVING_CLICKED",
        manage_billing_schedule: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_MANAGE_SCHEDULE_CLICKED",
        selected: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_CADENCE_SELECTED",
        succeeded: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_ACTION_TYPE_CADENCE_UPDATE_SUCCEEDED",
      },
      o = {
        monthly: a.hf.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_MONTH,
        yearly: a.hf.CHATGPT_WEB_SUBSCRIPTION_BILLING_INTERVAL_YEAR,
      },
      c = {
        monthly_will_continue: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_MONTHLY_WILL_CONTINUE",
        annual_will_continue: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_ANNUAL_WILL_CONTINUE",
        change_to_monthly: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_CHANGE_TO_MONTHLY",
        change_to_annual: "CHATGPT_WEB_ANNUAL_PLUS_BILLING_SETTINGS_UPDATE_KIND_CHANGE_TO_ANNUAL",
      }
    n.d(
      t,
      {},
      {
        x: function (e, { accountId: t, state: n, entryPoint: u, action: _ = u, fromCadence: d, toCadence: p }) {
          e.get(i.YV).logProductEvent(a.Lk, {
            accountId: t,
            actionType: l[_],
            entryPoint: s[u],
            liveCadence: o[n.currentCadence],
            scheduledCadence: null == n.scheduledCadence ? void 0 : o[n.scheduledCadence],
            effectiveNextCadence: o[n.effectiveNextCadence],
            billingCurrency: n.billingCurrency,
            displayPricingSource: n.displayPricingSource,
            monthlyPrice: n.monthlyPrice.amount,
            annualMonthlyEquivalent: n.annualPrice.amount,
            annualSavingsAmount: n.annualSavingsAmount,
            renewalUtcDate: n.renewalDate.toISOString(),
            requiresReactivation: n.requiresReactivation,
            fromCadence: null == d ? void 0 : o[d],
            toCadence: null == p ? void 0 : o[p],
            updateKind: null == p ? void 0 : c[(0, r.ck)(n, p)],
          })
        },
      },
    )
  },
  XP4n(e, t, n) {
    var a = n("ASxG"),
      i = n("i3p7"),
      r = n("ra39")
    function s(e) {
      return (
        "personal" === e.account.structure &&
        !0 === e.entitlement.has_active_subscription &&
        !e.entitlement.is_active_subscription_gratis &&
        "plus" === e.account.plan_type &&
        !e.entitlement.is_delinquent &&
        !e.entitlement.trial?.is_trialing &&
        !e.account.reseller_hosted_account &&
        null == e.entitlement.scheduled_plan_change &&
        null == (0, i.Ah)(e)
      )
    }
    let l = a.Ikc({
      status: a.aig().optional(),
      message: a.YjP().optional(),
      detail: a
        .KCZ([
          a.YjP(),
          a.Ikc({ error_type: a.YjP().optional(), message: a.YjP().optional(), description: a.YjP().optional() }),
        ])
        .optional(),
    })
    n.d(
      t,
      {},
      {
        F9: s,
        Rj: function (e, t) {
          let n = l.safeParse(e)
          if (!n.success) return "unknown"
          let { detail: a, status: i, message: r } = n.data
          if ("object" == typeof a && "subscription_update_pending" === a.error_type) return "update_processing"
          let s = ("string" == typeof a ? a : (a?.message ?? a?.description ?? r ?? "")).toLowerCase()
          return s.includes("matches the current subscription") || s.includes("matches the scheduled subscription")
            ? "stale_state"
            : s.includes("non-cadence future update") ||
                s.includes("another plan change") ||
                s.includes("future update scheduled")
              ? "conflicting_plan_change"
              : s.includes("not configured for this subscription") ||
                  s.includes("target price") ||
                  s.includes("target sku") ||
                  s.includes("unable to resolve")
                ? "missing_price_configuration"
                : "yearly" === t &&
                    (403 === i ||
                      s.includes("annual plus subscriptions are not enabled") ||
                      s.includes("trialing subscription") ||
                      s.includes("policy does not allow"))
                  ? "eligibility_changed"
                  : "unknown"
        },
        _N: function (e, t, n, a = Date.now()) {
          if (
            !s(e) ||
            null == t ||
            null == n ||
            "plus" !== t.plan_type ||
            t.is_delinquent ||
            !t.is_processor_stripe ||
            null == (0, r.hh)(t) ||
            t.billing_currency !== n.currency_config.symbol_code
          )
            return null
          let i = t.billing_period,
            l = t.scheduled_billing_period ?? null,
            o = new Date(t.active_until ?? ""),
            c = !t.will_renew
          if (null == i || l === i || !Number.isFinite(o.getTime()) || (c && o.getTime() <= a)) return null
          let u = n.currency_config.plus?.month,
            _ = n.currency_config.plus?.year
          if (null == u || null == _ || null == u.tax || null == _.tax || u.amount <= 0 || _.amount <= 0) return null
          let d = (u.amount - _.amount) * 12,
            p = d > 0 ? Math.floor(((u.amount - _.amount) / u.amount) * 100 + 1e-9) : 0
          return {
            currentCadence: i,
            scheduledCadence: l,
            effectiveNextCadence: l ?? i,
            renewalDate: o,
            requiresReactivation: c,
            billingCurrency: t.billing_currency,
            displayPricingSource: "checkout-pricing:" + n.country_code + ":" + t.billing_currency,
            monthlyPrice: { amount: u.amount, tax: u.tax },
            annualPrice: { amount: _.amount, tax: _.tax },
            annualSavingsAmount: d,
            annualSavingsPercentage: p,
            isAcquisitionCandidate:
              !0 === e.is_eligible_for_yearly_plus_existing_user_subscription && "monthly" === i && null == l && d > 0,
            isRetentionCandidate: "yearly" === i && "monthly" === l && d > 0,
          }
        },
        ck: function (e, t) {
          return e.currentCadence === t && null != e.scheduledCadence
            ? "monthly" === t
              ? "monthly_will_continue"
              : "annual_will_continue"
            : "monthly" === t
              ? "change_to_monthly"
              : "change_to_annual"
        },
        vV: function (e) {
          return e?.amount_due.amount === 0 && null != e.renewal_date && Number.isFinite(Date.parse(e.renewal_date))
        },
      },
    )
  },
  ra39(e, t, n) {
    n.d(t, { Js: () => u, YY: () => m, T: () => T, hh: () => d, BJ: () => p, gN: () => _, Ie: () => i.Ie })
    var a = n("laUo"),
      i = n("smwl"),
      r = n("S2r0"),
      s = n("ASxG"),
      l = n("ufra")
    let o = s.Ikc({ amount: s.aig().nonnegative(), tax: s.k5n(["inclusive", "exclusive"]).optional() }),
      c = s.Ikc({ month: o.optional(), year: o.optional() }),
      u = s.Ikc({
        country_code: s.YjP(),
        currency_config: s.Ikc({
          symbol_code: s.YjP().min(1),
          minor_unit_exponent: s.aig().int().nonnegative().nullish(),
          pricing_rollout_gate: s.YjP().nullish(),
          go: c.optional(),
          plus: c.optional(),
          prolite: c.optional(),
          pro: c.optional(),
          promax: c.optional(),
          business: c.optional(),
          business_prolite: c.optional(),
          business_non_profit: c.optional(),
        }),
      })
    function _(e, t, n) {
      let a = d(t)
      return (0, r.j)({
        queryKey: ["consumer-billing", e, "subscription-pricing", a, t?.billing_currency],
        queryFn: async ({ signal: e }) => {
          if (null == a) return null
          let i = await (0, l.e)({
              country: t?.pricing_scope === "country" ? (t.price_country ?? void 0) : void 0,
              currency: t?.billing_currency,
              isPricingEnabled: n,
              signal: e,
            }),
            r = u.safeParse(i)
          if (!r.success) return null
          let s = r.data
          return s.currency_config.symbol_code === t?.billing_currency ? s : null
        },
        enabled: null != a,
        staleTime: 0,
        retry: !1,
      })
    }
    function d(e) {
      return e?.pricing_scope === "country" && null != e.price_country
        ? e.price_country
        : e?.pricing_scope === "default" && null === e.price_country
          ? e.billing_currency
          : null
    }
    function p(e, t) {
      return (
        null != e &&
        null != d(e) &&
        t.currency_config.symbol_code === e.billing_currency &&
        ("country" !== e.pricing_scope || t.country_code === e.price_country)
      )
    }
    function m(e, t, n) {
      let a = (0, i.vt)({ accountId: e, updatedPlan: t })
      return { ...a, queryKey: [...a.queryKey, n ?? "unknown"], staleTime: 0, retry: !1 }
    }
    function T(e, t, n, i = Date.now()) {
      let r = e.entitlement.discount?.discount_expires_at,
        s = e.entitlement.renews_at
      if (null == r || null == s || null == t || null == n) return
      let l = Math.ceil((Date.parse(r) - i) / 864e5),
        o = Math.ceil((Date.parse(s) - i) / 864e5)
      if (!Number.isFinite(l) || !Number.isFinite(o) || Math.abs(l - o) > 1) return
      let c = e.account.plan_type
      if (!(0, a.gx)(c)) return
      let u = t.scheduled_billing_period ?? t.billing_period ?? e.entitlement.billing_period
      if (null == u || !p(t, n)) return
      let _ = "yearly" === u ? n.currency_config[c]?.year : n.currency_config[c]?.month
      if (null != _)
        return {
          amount: "yearly" === u ? Math.round(12 * _.amount) : _.amount,
          currency: t.billing_currency,
          period: u,
        }
    }
  },
  XQoA(e, t, n) {
    var a = n("laUo"),
      i = n("i3p7")
    n.d(
      t,
      {},
      {
        d: function (e) {
          if (null != (0, i.Ah)(e)) return "external_manage"
          if ("chatgptplus_no_payment_trial" === e.entitlement.subscription_plan) return "upgrade"
          let t = e.account.plan_type,
            n = (0, a.m6)(t),
            r = (0, a.m6)(e.entitlement.scheduled_plan_change?.plan_type),
            s =
              null != n && null != r && "downgrade" === (0, a.aL)({ currentPlan: n.pricePlan, targetPlan: r.pricePlan })
          return e.entitlement.is_active_subscription_gratis ||
            "free" === t ||
            (e.last_active_subscription.will_renew && null == e.entitlement.cancels_at && !s)
            ? "free" === t || "go" === t || "plus" === t
              ? "upgrade"
              : ("pro" === t || "promax" === t || "prolite" === t) && e.last_active_subscription.will_renew
                ? "change"
                : "view"
            : "renew"
        },
        n: function (e) {
          return e.entitlement.is_active_subscription_gratis
            ? "personal" === e.account.structure &&
                !0 === e.entitlement.has_active_subscription &&
                (0, a.gx)(e.account.plan_type) &&
                e.features?.includes("gratis_subscription_cancellation") === !0
            : !0 === e.last_active_subscription.will_renew && null == e.entitlement.cancels_at
        },
      },
    )
  },
  QG3v(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("oyxz"),
      s = n("Wf1j")
    function l(e) {
      let t,
        n,
        l,
        o,
        c = (0, i.c)(28),
        { account: u, renewalPrice: _ } = e,
        d = (0, s.A)(),
        p = u.entitlement.discount
      if (null == p) return null
      let m = u.account.plan_type,
        T = p.discount_start_in_num_periods ?? 0,
        E = u.entitlement.billing_currency ?? "USD"
      c[0] !== E || c[1] !== p.amount || c[2] !== p.discount_type || c[3] !== d
        ? ((t =
            "percentage" === p.discount_type ? p.amount : d.formatNumber(p.amount, { style: "currency", currency: E })),
          (c[0] = E),
          (c[1] = p.amount),
          (c[2] = p.discount_type),
          (c[3] = d),
          (c[4] = t))
        : (t = c[4])
      let g = t
      c[5] !== p.discount_type || c[6] !== g || c[7] !== T || c[8] !== m
        ? ((n = { plan: m, discountType: p.discount_type, discount: g, numPeriods: T }),
          (c[5] = p.discount_type),
          (c[6] = g),
          (c[7] = T),
          (c[8] = m),
          (c[9] = n))
        : (n = c[9])
      let h = n
      if (T > 0) {
        let e
        return (
          c[10] !== p.discount_type || c[11] !== g || c[12] !== T || c[13] !== m
            ? ((e = (0, a.jsx)("p", {
                children: (0, a.jsx)(r.A, {
                  id: "settings.consumerBilling.futureDiscount.numberedTiers",
                  defaultMessage:
                    "Your {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} discount will apply in {numPeriods, plural, one {the next billing period} other {# billing periods}}",
                  values: { plan: m, discountType: p.discount_type, discount: g, numPeriods: T },
                }),
              })),
              (c[10] = p.discount_type),
              (c[11] = g),
              (c[12] = T),
              (c[13] = m),
              (c[14] = e))
            : (e = c[14]),
          e
        )
      }
      if (
        "plus" === m &&
        "students-2026-four-month-free" === p.promo_campaign_id &&
        "percentage" === p.discount_type &&
        100 === p.amount &&
        null != p.discount_expires_at &&
        Number.isFinite(Date.parse(p.discount_expires_at))
      ) {
        let e, t
        return (
          c[15] !== p.discount_expires_at || c[16] !== d
            ? ((e = d.formatDate(p.discount_expires_at, { year: "numeric", month: "short", day: "numeric" })),
              (c[15] = p.discount_expires_at),
              (c[16] = d),
              (c[17] = e))
            : (e = c[17]),
          c[18] !== e
            ? ((t = (0, a.jsx)("p", {
                children: (0, a.jsx)(r.A, {
                  id: "settings.consumerBilling.studentPlanEnd",
                  defaultMessage: "Your free student plan continues until {date}",
                  values: { date: e },
                }),
              })),
              (c[18] = e),
              (c[19] = t))
            : (t = c[19]),
          t
        )
      }
      c[20] !== u.entitlement.renews_at || c[21] !== d
        ? ((l =
            null == u.entitlement.renews_at
              ? null
              : d.formatDate(u.entitlement.renews_at, { year: "numeric", month: "short", day: "numeric" })),
          (c[20] = u.entitlement.renews_at),
          (c[21] = d),
          (c[22] = l))
        : (l = c[22])
      let C = l
      return (
        c[23] !== C || c[24] !== d || c[25] !== _ || c[26] !== h
          ? ((o = (0, a.jsx)("p", {
              children:
                null == _
                  ? (0, a.jsx)(r.A, {
                      id: "settings.consumerBilling.activeDiscount.numberedTiers",
                      defaultMessage:
                        "You've got {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. Your discounted plan renews on {hasDate, select, true {{date}} other {Not available}}.",
                      values: { ...h, date: C ?? "", hasDate: String(null != C) },
                    })
                  : (0, a.jsx)(r.A, {
                      id: "settings.consumerBilling.discountEndingAtRenewal.numberedTiers",
                      defaultMessage:
                        "You've got {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. Your plan renews (at {price}/{period, select, yearly {year} other {month}}) on {hasDate, select, true {{date}} other {Not available}}.",
                      values: {
                        ...h,
                        date: C ?? "",
                        hasDate: String(null != C),
                        period: _.period,
                        price: d.formatNumber(_.amount, { style: "currency", currency: _.currency }),
                      },
                    }),
            })),
            (c[23] = C),
            (c[24] = d),
            (c[25] = _),
            (c[26] = h),
            (c[27] = o))
          : (o = c[27]),
        o
      )
    }
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            n,
            o,
            c,
            u,
            _ = (0, i.c)(46),
            { account: d, renewalPrice: p, scheduledCadence: m } = e,
            T = (0, s.A)(),
            E = d.account.plan_type,
            g = d.entitlement,
            h = d.last_active_subscription.will_renew
          _[0] !== T
            ? ((t = (e) => (null == e ? null : T.formatDate(e, { year: "numeric", month: "short", day: "numeric" }))),
              (_[0] = T),
              (_[1] = t))
            : (t = _[1])
          let C = t
          if ("free" === E) {
            let e
            return (
              _[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(r.A, {
                    id: "settings.consumerBilling.freePlanSubtitle",
                    defaultMessage: "Intelligence for everyday tasks",
                  })),
                  (_[2] = e))
                : (e = _[2]),
              e
            )
          }
          if (g.is_delinquent) {
            let e
            return (
              _[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(r.A, {
                    id: "settings.consumerBilling.paymentStatusUnconfirmed",
                    defaultMessage: "There may be an issue with your payment. Check your billing details.",
                  })),
                  (_[3] = e))
                : (e = _[3]),
              e
            )
          }
          if (null != g.scheduled_plan_change) {
            let e,
              t,
              n = g.scheduled_plan_change.plan_type
            return (
              _[4] !== g.scheduled_plan_change.changes_at || _[5] !== C
                ? ((e = C(g.scheduled_plan_change.changes_at)),
                  (_[4] = g.scheduled_plan_change.changes_at),
                  (_[5] = C),
                  (_[6] = e))
                : (e = _[6]),
              _[7] !== g.scheduled_plan_change.plan_type || _[8] !== e
                ? ((t = (0, a.jsx)(r.A, {
                    id: "settings.consumerBilling.scheduledPlanChange.numberedTiers",
                    defaultMessage:
                      "Your plan changes to {plan, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {{plan}}} on {date}",
                    values: { plan: n, date: e },
                  })),
                  (_[7] = g.scheduled_plan_change.plan_type),
                  (_[8] = e),
                  (_[9] = t))
                : (t = _[9]),
              t
            )
          }
          let f = g.renews_at ?? g.cancels_at
          _[10] !== g.cancels_at || _[11] !== g.renews_at || _[12] !== h
            ? ((n =
                h &&
                null != g.renews_at &&
                null != g.cancels_at &&
                Date.parse(g.renews_at) !== Date.parse(g.cancels_at)),
              (_[10] = g.cancels_at),
              (_[11] = g.renews_at),
              (_[12] = h),
              (_[13] = n))
            : (n = _[13])
          let y = n,
            A = null
          if (h && null != g.discount) {
            let e
            ;(_[14] !== d || _[15] !== p
              ? ((e = (0, a.jsx)(l, { account: d, renewalPrice: p })), (_[14] = d), (_[15] = p), (_[16] = e))
              : (e = _[16]),
              (A = e))
          } else if (h && null == m) {
            let e, t
            _[17] !== g.renews_at || _[18] !== C
              ? ((e = C(g.renews_at) ?? ""), (_[17] = g.renews_at), (_[18] = C), (_[19] = e))
              : (e = _[19])
            let n = String(null != g.renews_at)
            ;(_[20] !== e || _[21] !== n
              ? ((t = (0, a.jsx)("p", {
                  children: (0, a.jsx)(r.A, {
                    id: "settings.consumerBilling.planAutoRenewal",
                    defaultMessage: "Your plan auto-renews on {hasDate, select, true {{date}} other {Not available}}",
                    values: { date: e, hasDate: n },
                  }),
                })),
                (_[20] = e),
                (_[21] = n),
                (_[22] = t))
              : (t = _[22]),
              (A = t))
          } else if (h || (null == g.renews_at && (null != g.expires_at || null == f))) {
            if (!h && null != g.expires_at) {
              let e, t
              ;(_[29] !== g.expires_at || _[30] !== C
                ? ((e = C(g.expires_at)), (_[29] = g.expires_at), (_[30] = C), (_[31] = e))
                : (e = _[31]),
                _[32] !== e
                  ? ((t = (0, a.jsx)("p", {
                      children: (0, a.jsx)(r.A, {
                        id: "settings.consumerBilling.planExpires",
                        defaultMessage: "Your plan will expire on {date}",
                        values: { date: e },
                      }),
                    })),
                    (_[32] = e),
                    (_[33] = t))
                  : (t = _[33]),
                (A = t))
            }
          } else {
            let e, t
            ;(_[23] !== f || _[24] !== C ? ((e = C(f)), (_[23] = f), (_[24] = C), (_[25] = e)) : (e = _[25]),
              _[26] !== E || _[27] !== e
                ? ((t = (0, a.jsx)("p", {
                    children: (0, a.jsx)(r.A, {
                      id: "settings.consumerBilling.planCanceledWithAccess.numberedTiers",
                      defaultMessage:
                        "Your plan is canceled and won't renew. You'll continue to have access to ChatGPT {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {{plan}}} until {date}",
                      values: { plan: E, date: e },
                    }),
                  })),
                  (_[26] = E),
                  (_[27] = e),
                  (_[28] = t))
                : (t = _[28]),
              (A = t))
          }
          return (
            _[34] !== T || _[35] !== m || _[36] !== h
              ? ((o =
                  null != m && h
                    ? (0, a.jsx)("p", {
                        children: (0, a.jsx)(r.A, {
                          id: "settings.consumerBilling.scheduledBillingCadence",
                          defaultMessage:
                            "Changes to {period, select, yearly {annual} other {monthly}} billing on {date}",
                          values: {
                            period: m.period,
                            date: T.formatDate(m.date, { year: "numeric", month: "long", day: "numeric" }),
                          },
                        }),
                      })
                    : null),
                (_[34] = T),
                (_[35] = m),
                (_[36] = h),
                (_[37] = o))
              : (o = _[37]),
            _[38] !== g.cancels_at || _[39] !== C || _[40] !== y
              ? ((c = y
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(r.A, {
                        id: "settings.consumerBilling.paidPlanScheduledCancellation",
                        defaultMessage: "Your paid plan will downgrade to ChatGPT free on {date}",
                        values: { date: C(g.cancels_at) },
                      }),
                    })
                  : null),
                (_[38] = g.cancels_at),
                (_[39] = C),
                (_[40] = y),
                (_[41] = c))
              : (c = _[41]),
            _[42] !== A || _[43] !== o || _[44] !== c
              ? ((u = (0, a.jsxs)(a.Fragment, { children: [o, A, c] })),
                (_[42] = A),
                (_[43] = o),
                (_[44] = c),
                (_[45] = u))
              : (u = _[45]),
            u
          )
        },
        u: function (e) {
          let t,
            n = (0, i.c)(2),
            { plan: s } = e
          return (
            n[0] !== s
              ? ((t = (0, a.jsx)(r.A, {
                  id: "settings.consumerBilling.planName.numberedTiers",
                  defaultMessage:
                    "ChatGPT {plan, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
                  values: { plan: s },
                })),
                (n[0] = s),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  b8b3(e, t, n) {
    var a = n("qmMi"),
      i = n("rPIX"),
      r = n("tv8P"),
      s = n("OWtl")
    let l = (0, a.vP)(s.u, null),
      o = (0, a.i1)(s.u, (e, { get: t }) => {
        let n = t(l),
          a = t(r.spaceAccountId$),
          s = t(r.spacePageId$, e)
        if (n?.kind === "codex") return n.session.accountId === a && n.session.pageId === s ? n : null
        let o = t(i.Px)
        return null != n &&
          n.conversationId === t(i.Mg)?.conversationId &&
          o?.kind === "chatgpt" &&
          o.page?.accountId === a &&
          o.page?.pageId === s
          ? n
          : null
      }),
      c = (0, a.i1)(s.u, (e, { get: t }) => {
        let n = t(o, e)
        return n?.kind === "work-usage-blocked" ? null : n
      }),
      u = (0, a.i1)(s.u, (e, { get: t }) => {
        let n = t(o, e)
        return n?.kind === "work-usage-blocked" ? n.conversationId : null
      })
    function _(e, t) {
      return (
        e.set(l, t),
        () => {
          e.get(l) === t && e.set(l, null)
        }
      )
    }
    n.d(
      t,
      {},
      {
        WE: l,
        _k: function (e, t, n, a) {
          return _(e, { kind: "chatgpt", conversationId: t, submit: n, sourceActions: a })
        },
        ob: function (e, t) {
          return _(e, { kind: "work-usage-blocked", conversationId: t })
        },
        sU: c,
        wn: u,
      },
    )
  },
  oFmV(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { S: a })
  },
  KkZX(e, t, n) {
    n.d(t, { Aj: () => o, cS: () => u, HW: () => c })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57"),
      s = n("HgLj"),
      l = n("bIvi")
    let o = (0, r.A)(
      "[--thread-content-max-width:var(--thread-content-responsive-max-width,inherit)]",
      "[--thread-body-max-width:calc(var(--thread-content-max-width)+var(--thread-body-inline-padding,0px)*2)]",
      "mx-auto w-full max-w-(--thread-body-max-width)",
      "px-[var(--thread-body-inline-padding,var(--padding-toolbar))]",
    )
    function c(e) {
      let t,
        n,
        o,
        c,
        u,
        _,
        d,
        p,
        m,
        T,
        E,
        g,
        h,
        C,
        f,
        y,
        A,
        I,
        N,
        P = (0, i.c)(39)
      ;(P[0] !== e
        ? (({
            header: d,
            banner: t,
            children: o,
            className: c,
            bodyClassName: n,
            containerRef: u,
            floatingPanelWidth: _,
            style: m,
            tabIndex: T,
            ...p
          } = e),
          (P[0] = e),
          (P[1] = t),
          (P[2] = n),
          (P[3] = o),
          (P[4] = c),
          (P[5] = u),
          (P[6] = _),
          (P[7] = d),
          (P[8] = p),
          (P[9] = m),
          (P[10] = T))
        : ((t = P[1]),
          (n = P[2]),
          (o = P[3]),
          (c = P[4]),
          (u = P[5]),
          (_ = P[6]),
          (d = P[7]),
          (p = P[8]),
          (m = P[9]),
          (T = P[10])),
        P[11] !== u
          ? ((E = (e) => {
              ;(0, s.P)(u)(e)
            }),
            (P[11] = u),
            (P[12] = E))
          : (E = P[12]))
      let b = (0, l.K)(E),
        O = null == _ ? void 0 : `${_}px`
      P[13] !== m || P[14] !== O
        ? ((g = { ...m, "--thread-floating-panel-width": O }), (P[13] = m), (P[14] = O), (P[15] = g))
        : (g = P[15])
      let x = g,
        R =
          null != _ && "@[900px]/app-shell-main-content:pr-[calc(var(--thread-floating-panel-width)+var(--spacing)*5)]"
      return (
        P[16] !== c || P[17] !== R
          ? ((h = (0, r.A)(
              "relative flex h-full flex-col transition-[padding-right] duration-relaxed ease-basic motion-reduce:transition-none *:[--thread-floating-panel-width:initial]",
              R,
              c,
            )),
            (P[16] = c),
            (P[17] = R),
            (P[18] = h))
          : (h = P[18]),
        P[19] !== d
          ? ((C = (0, a.jsx)("div", { className: "sticky top-0 z-10", children: d })), (P[19] = d), (P[20] = C))
          : (C = P[20]),
        P[21] !== n ? ((f = (0, r.A)("flex min-h-0 flex-1 flex-col", n)), (P[21] = n), (P[22] = f)) : (f = P[22]),
        P[23] !== o
          ? ((y = (0, a.jsx)("div", { className: "min-h-0 flex-1", children: o })), (P[23] = o), (P[24] = y))
          : (y = P[24]),
        P[25] !== t || P[26] !== y
          ? ((A = (0, a.jsxs)("div", {
              className: "relative mx-auto flex min-h-0 w-full flex-1 flex-col",
              children: [t, y],
            })),
            (P[25] = t),
            (P[26] = y),
            (P[27] = A))
          : (A = P[27]),
        P[28] !== f || P[29] !== A
          ? ((I = (0, a.jsx)("div", { className: f, children: A })), (P[28] = f), (P[29] = A), (P[30] = I))
          : (I = P[30]),
        P[31] !== x || P[32] !== p || P[33] !== b || P[34] !== I || P[35] !== h || P[36] !== C || P[37] !== T
          ? ((N = (0, a.jsxs)("div", { ref: b, className: h, style: x, tabIndex: T, ...p, children: [C, I] })),
            (P[31] = x),
            (P[32] = p),
            (P[33] = b),
            (P[34] = I),
            (P[35] = h),
            (P[36] = C),
            (P[37] = T),
            (P[38] = N))
          : (N = P[38]),
        N
      )
    }
    function u(e) {
      let t,
        n,
        s = (0, i.c)(9),
        { part: l } = e,
        o = "surface" === l && "surface-nr8PSS",
        c = "fade" === l && "fade-AcMqqj",
        u = null == l && "combined-vZM0uN",
        _ = "surface" !== l && "inset-x-0",
        d = "fade" !== l && "bottom-0"
      return (
        s[0] !== l || s[1] !== o || s[2] !== c || s[3] !== u || s[4] !== _ || s[5] !== d
          ? ((t = (0, r.A)(
              "background-uNUrfY",
              o,
              c,
              u,
              "pointer-events-none absolute z-0",
              _,
              d,
              "surface" === l
                ? "bg-surface extension:bg-surface-secondary"
                : [
                    "from-surface extension:from-surface-secondary",
                    null == l && "via-surface via-[calc(100%-var(--spacing)*8)] extension:via-surface-secondary",
                  ],
            )),
            (s[0] = l),
            (s[1] = o),
            (s[2] = c),
            (s[3] = u),
            (s[4] = _),
            (s[5] = d),
            (s[6] = t))
          : (t = s[6]),
        s[7] !== t
          ? ((n = (0, a.jsx)("div", { "aria-hidden": !0, className: t })), (s[7] = t), (s[8] = n))
          : (n = s[8]),
        n
      )
    }
  },
  IVFh(e, t, n) {
    n.d(t, { o: () => I })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("slpy")
    let s = (0, n("ESTr").a)({
      name: "chevron-down-left-chevron-up-right-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
        visualBounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
        center: { x: 8, y: 8 },
        insets: { top: 3.500977, right: 3.459961, bottom: 3.500976, left: 3.459961 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.75391 8.48828C7.18193 8.48828 7.5293 8.83565 7.5293 9.26367V11.9736C7.5293 12.2636 7.29386 12.499 7.00391 12.499C6.71396 12.499 6.47852 12.2636 6.47852 11.9736V9.53906H3.98535C3.6954 9.53906 3.45996 9.30362 3.45996 9.01367C3.45996 8.72372 3.6954 8.48828 3.98535 8.48828H6.75391Z" fill="currentColor"/> <path d="M8.99609 3.50098C9.28604 3.50098 9.52148 3.73642 9.52148 4.02637V6.46094H12.0146C12.3046 6.46094 12.54 6.69638 12.54 6.98633C12.54 7.27628 12.3046 7.51172 12.0146 7.51172H9.24609C8.81807 7.51172 8.4707 7.16435 8.4707 6.73633V4.02637C8.4707 3.73642 8.70614 3.50098 8.99609 3.50098Z" fill="currentColor"/>',
    })
    var l = n("tKcI"),
      o = n("SYwi"),
      c = n("jzBl"),
      u = n("qmMi"),
      _ = n("QcW8"),
      d = n("ZU27"),
      p = n("n5iL"),
      m = n("Sm6l"),
      T = n("HOLv"),
      E = n("tSEg"),
      g = n("dt6g"),
      h = n("jZDY"),
      C = n("qsTb"),
      f = n("pZMh"),
      y = n("XbTJ"),
      A = n("Xfch")
    function I(e) {
      let t,
        n,
        I,
        N,
        P,
        b,
        O = (0, i.c)(22),
        { bubbled: x, surface: R } = e,
        S = void 0 !== x && x,
        v = void 0 === R ? "toolbar" : R,
        L = (0, u.gh)(E.GD),
        M = (0, u.Ul)(A.nq),
        w = (0, h.I)(),
        U = (0, u.Ul)(_.eN) && w,
        D = (0, u.Ul)(A._y),
        H = (0, u.Ul)(_.Rl),
        k = (0, u.Ul)(f.FI),
        j = H || "full" === k,
        G = (0, u._U)(p.X1, "showWorkspaceTabView")
      if (U || !M) return null
      let B = "viewer" === v ? c.n : o.E,
        F = "viewer" === v ? l.V : s,
        K = !j
      O[0] !== L
        ? ((t = (e) => {
            let t = () => {
                ;(0, g.$)(L, "layout_button", () => (0, y.Ui)(L, "full"))
              },
              n = L.get(d.It.activeTab$)
            e.detail > 0 && !L.get(d.im) && L.get(f.dS) && n?.tabType.transitionFullView != null
              ? n.tabType.transitionFullView(L, n.props, t)
              : t()
          }),
          (O[0] = L),
          (O[1] = t))
        : (t = O[1])
      let Y = j ? F : B
      O[2] !== Y
        ? ((n = (0, a.jsx)(T.I, { className: "shrink-0", asset: Y, focusable: "false" })), (O[2] = Y), (O[3] = n))
        : (n = O[3])
      let W = j && D
      ;(O[4] !== n || O[5] !== W
        ? ((I = (0, a.jsxs)(a.Fragment, { children: [n, W] })), (O[4] = n), (O[5] = W), (O[6] = I))
        : (I = O[6]),
        O[7] !== j || O[8] !== D || O[9] !== K || O[10] !== t || O[11] !== I
          ? ((N = {
              "aria-label": D,
              "aria-pressed": j,
              "data-app-shell-focus-area": "right-panel",
              "data-app-shell-workspace-layout-toggle": "right-panel",
              uniform: K,
              onClick: t,
              children: I,
            }),
            (O[7] = j),
            (O[8] = D),
            (O[9] = K),
            (O[10] = t),
            (O[11] = I),
            (O[12] = N))
          : (N = O[12]))
      let V = N
      return (
        O[13] !== S || O[14] !== V || O[15] !== j || O[16] !== v
          ? ((P =
              "viewer" === v
                ? (0, a.jsx)(C.DW, { ...V })
                : (0, a.jsx)(m.$, {
                    ...V,
                    color: "ghostActive",
                    className: S ? "conversation-header-control" : void 0,
                    radius: j ? "full" : void 0,
                    size: j ? "toolbarLabel" : "toolbar",
                  })),
            (O[13] = S),
            (O[14] = V),
            (O[15] = j),
            (O[16] = v),
            (O[17] = P))
          : (P = O[17]),
        O[18] !== D || O[19] !== G || O[20] !== P
          ? ((b = (0, a.jsx)(r.m, { openDelay: 250, shortcut: G, content: D, children: P })),
            (O[18] = D),
            (O[19] = G),
            (O[20] = P),
            (O[21] = b))
          : (b = O[21]),
        b
      )
    }
  },
  Xfch(e, t, n) {
    var a = n("qmMi"),
      i = n("QcW8"),
      r = n("ZU27"),
      s = n("gbrq"),
      l = n("svjy"),
      o = n("tSEg"),
      c = n("moBM"),
      u = n("pZMh")
    let _ = (0, a.un)(
        o.GD,
        ({ get: e }) => !e(o.Rj) && ("full" === e(u.FI) || e(i.dX) || e(u.BH).length > 0 || e(c.qJ)),
      ),
      d = (0, a.un)(
        o.GD,
        ({ get: e }) =>
          !e(o.Rj) &&
          (e(i.Rl) || (e(r.It.activeTab$)?.tabType.allowFullWidth !== !1 && (null == e(i.sY) ? e(s.SZ) : e(_)))),
      ),
      p = (0, a.un)(o.GD, ({ get: e }) => "full" === e(u.FI) && (e(r.It.tabs$).length > 0 || e(c.qJ))),
      m = (0, a.un)(o.GD, ({ get: e }) => {
        let t = e(l.g),
          n = e(u.FI)
        return e(c.Nz) && "split" === n
          ? e(T)
          : e(p)
            ? t.formatMessage({
                id: "threadWorkspace.layout.splitView",
                defaultMessage: "Enter split view",
                description: "Shows Chat beside the content tabs",
              })
            : "chat" !== n
              ? t.formatMessage({
                  id: "threadWorkspace.layout.hideTabs",
                  defaultMessage: "Hide tabs",
                  description: "Hides the content tabs and leaves Chat visible",
                })
              : t.formatMessage({
                  id: "threadWorkspace.layout.showTabs",
                  defaultMessage: "Show tabs",
                  description: "Shows retained content tabs beside Chat in split view",
                })
      }),
      T = (0, a.un)(o.GD, ({ get: e }) => {
        let t = e(l.g)
        return e(i.Rl) || "full" === e(u.FI)
          ? t.formatMessage({
              id: "threadWorkspace.layout.exitFullView",
              defaultMessage: "Exit full view",
              description: "Button label for restoring the previous layout when a tab or panel fills the workspace",
            })
          : null != e(i.sY) && 0 === e(r.It.tabs$).length
            ? t.formatMessage({
                id: "threadWorkspace.layout.newTabInFullView",
                defaultMessage: "New tab in full view",
                description: "Creates a content tab that fills the workspace",
              })
            : t.formatMessage({
                id: "threadWorkspace.layout.enterFullView",
                defaultMessage: "Enter full view",
                description: "Expands the active content tab to fill the workspace",
              })
      })
    n.d(t, {}, { PW: _, Sq: m, _y: T, nq: d })
  },
  m5G2(e, t, n) {
    var a = n("f4Vb")
    n.d(
      t,
      {},
      {
        J: function ({ axis: e, debounce: t, initialSize: n = !0, onChange: i, target: r }) {
          if (!r || "u" < typeof ResizeObserver) return
          let s = new AbortController(),
            l = null,
            o = null,
            c = n,
            u = new ResizeObserver((n) => {
              n.forEach((n) => {
                let { width: r, height: u } = (0, a.q)(n),
                  _ = !1
                if ("width" === e) {
                  let e = (c || null != l) && l !== r
                  ;((l = r), e && (_ = !0))
                } else if ("height" === e) {
                  let e = (c || null != o) && o !== u
                  ;((o = u), e && (_ = !0))
                } else if ("both" === e) {
                  let e = (c || null != l) && l !== r,
                    t = (c || null != o) && o !== u
                  ;((l = r), (o = u), (e || t) && (_ = !0))
                }
                if (((c = !1), _))
                  if (t) {
                    s.abort()
                    let e = (s = new AbortController()).signal
                    requestAnimationFrame(() => {
                      e.aborted || i({ width: r, height: u, previousWidth: l, previousHeight: o }, n)
                    })
                  } else i({ width: r, height: u, previousWidth: l, previousHeight: o }, n)
              })
            })
          return (
            u.observe(r),
            function () {
              try {
                u.disconnect()
              } catch (e) {}
            }
          )
        },
      },
    )
  },
  rL0c(e, t, n) {
    function a({ intl: e, currencyCode: t }) {
      return (
        e.formatters.getNumberFormat(e.locale, { style: "currency", currency: t }).resolvedOptions()
          .maximumFractionDigits ?? 0
      )
    }
    n.d(
      t,
      {},
      {
        E: a,
        N: function ({ intl: e, amount: t, currencyCode: n, currencyFractionDigits: i }) {
          let r = i ?? a({ intl: e, currencyCode: n })
          return e.formatNumber(t, {
            style: "currency",
            currency: n,
            minimumFractionDigits: r,
            maximumFractionDigits: r,
          })
        },
      },
    )
  },
  ncoo(e, t, n) {
    var a = n("B2b6"),
      i = n("rL0c")
    n.d(
      t,
      {},
      {
        I: function (e, t, n) {
          let r = n.toUpperCase(),
            s = (0, a.OG)(r),
            l = Number.isFinite(s) ? s : (0, i.E)({ intl: e, currencyCode: r })
          return (0, i.N)({ intl: e, amount: t / 10 ** l, currencyCode: r, currencyFractionDigits: l })
        },
      },
    )
  },
  soaw(e, t, n) {
    var a = n("QosV"),
      i = n("zd8w")
    n.d(
      t,
      {},
      {
        a: function () {
          let e,
            t,
            n,
            r = (0, a.c)(3),
            s = (0, i.useRef)(!1)
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => (
                  (s.current = !0),
                  () => {
                    s.current = !1
                  }
                )),
                (t = []),
                (r[0] = e),
                (r[1] = t))
              : ((e = r[0]), (t = r[1])),
            (0, i.useEffect)(e, t),
            r[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = () => s.current), (r[2] = n)) : (n = r[2]),
            n
          )
        },
      },
    )
  },
  XW6B(e, t, n) {
    let a = (0, n("zd8w").createContext)("main")
    n.d(t, {}, { l: a })
  },
  tKcI(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-down-left-chevron-up-right-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
        visualBounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
        center: { x: 10, y: 10 },
        insets: { top: 4.368164, right: 4.316406, bottom: 4.368164, left: 4.316406 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.50488 10.6016C9.01014 10.6016 9.41979 11.0114 9.41992 11.5166V14.9668C9.41992 15.3341 9.12215 15.6318 8.75488 15.6318C8.38761 15.6318 8.08984 15.3341 8.08984 14.9668V11.9316H4.98145C4.61424 11.9316 4.31641 11.6338 4.31641 11.2666C4.31654 10.8995 4.61432 10.6016 4.98145 10.6016H8.50488Z" fill="currentColor"/> <path d="M11.2451 4.36816C11.6124 4.36816 11.9102 4.66593 11.9102 5.0332V8.06836H15.0186C15.3858 8.06843 15.6836 8.36618 15.6836 8.7334C15.6835 9.10051 15.3857 9.39836 15.0186 9.39844H11.4951C10.9899 9.39844 10.5802 8.98863 10.5801 8.4834V5.0332C10.5801 4.66593 10.8778 4.36816 11.2451 4.36816Z" fill="currentColor"/>',
    })
    n.d(t, {}, { V: a })
  },
  SYwi(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-up-right-chevron-down-left-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
        visualBounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
        center: { x: 8, y: 8 },
        insets: { top: 4.149414, right: 4.132812, bottom: 4.149414, left: 4.132813 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.6582 7.83984C4.94815 7.83984 5.18359 8.07528 5.18359 8.36523V10.7998H7.67676C7.96671 10.7998 8.20215 11.0352 8.20215 11.3252C8.20215 11.6151 7.96671 11.8506 7.67676 11.8506H4.9082C4.48018 11.8506 4.13281 11.5032 4.13281 11.0752V8.36523C4.13281 8.07528 4.36825 7.83984 4.6582 7.83984Z" fill="currentColor"/> <path d="M11.0918 4.14941C11.5197 4.14955 11.8672 4.49687 11.8672 4.9248V7.63477C11.8672 7.92463 11.6316 8.16002 11.3418 8.16016C11.0518 8.16016 10.8164 7.92472 10.8164 7.63477V5.2002H8.32324C8.03329 5.2002 7.79785 4.96475 7.79785 4.6748C7.79785 4.38486 8.03329 4.14941 8.32324 4.14941H11.0918Z" fill="currentColor"/>',
    })
    n.d(t, {}, { E: a })
  },
  jzBl(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-up-right-chevron-down-left-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
        visualBounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
        center: { x: 10, y: 10 },
        insets: { top: 5.178223, right: 5.157715, bottom: 5.178222, left: 5.157715 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5.82275 9.7915C6.19002 9.7915 6.48779 10.0893 6.48779 10.4565V13.4917H9.59619C9.9634 13.4918 10.2612 13.7895 10.2612 14.1567C10.2611 14.5238 9.96332 14.8217 9.59619 14.8218H6.07275C5.56749 14.8218 5.15785 14.412 5.15771 13.9067V10.4565C5.15771 10.0893 5.45548 9.7915 5.82275 9.7915Z" fill="currentColor"/> <path d="M13.9272 5.17822C14.4324 5.17829 14.8422 5.58807 14.8423 6.09326V9.54346C14.8423 9.91069 14.5445 10.2084 14.1772 10.2085C13.81 10.2085 13.5122 9.91073 13.5122 9.54346V6.5083H10.4038C10.0366 6.50823 9.73877 6.21048 9.73877 5.84326C9.7389 5.47615 10.0367 5.1783 10.4038 5.17822H13.9272Z" fill="currentColor"/>',
    })
    n.d(t, {}, { n: a })
  },
  l2oX(e, t, n) {
    var a = n("ABep"),
      i = n("zd8w"),
      r = n("Qoj2"),
      s = n("ReSt"),
      l = n("HVo4"),
      o = n("gPp5")
    n.d(
      t,
      {},
      {
        x: function ({ children: e, isValidProp: t, ...n }) {
          t && (0, l.D)(t)
          let c = (0, i.useContext)(s.Q)
          ;(((n = { ...c, ...n }).transition = (0, r.K)(n.transition, c.transition)),
            (n.isStatic = (0, o.M)(() => n.isStatic)))
          let u = (0, i.useMemo)(
            () => n,
            [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion, n.skipAnimations],
          )
          return (0, a.jsx)(s.Q.Provider, { value: u, children: e })
        },
      },
    )
  },
  uhsW(e, t, n) {
    n.d(t, { C: () => s })
    var a = n("xs0G"),
      i = n("zd8w"),
      r = n("ZZOj")
    function s() {
      let e,
        t =
          ((e = (0, i.useRef)(!1)),
          (0, r.E)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            [],
          ),
          e),
        [n, s] = (0, i.useState)(0),
        l = (0, i.useCallback)(() => {
          t.current && s(n + 1)
        }, [n])
      return [(0, i.useCallback)(() => a.Gt.postRender(l), [l]), n]
    }
  },
}
//# sourceMappingURL=270514.77c70619be.js.map
